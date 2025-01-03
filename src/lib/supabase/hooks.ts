import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { supabase } from './client';
import type { Database } from './types';

type Agent = Database['public']['Tables']['agents']['Row'];
type Activity = Database['public']['Tables']['activities']['Row'];
type Notification = Database['public']['Tables']['notifications']['Row'];

export function useAgents() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgents = async () => {
      const { data, error } = await supabase
        .from('agents')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching agents:', error);
        return;
      }

      setAgents(data);
      setLoading(false);
    };

    fetchAgents();

    // Subscribe to changes
    const subscription = supabase
      .channel('agents')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'agents' }, 
        payload => {
          if (payload.eventType === 'INSERT') {
            setAgents(prev => [payload.new as Agent, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setAgents(prev => prev.map(agent => 
              agent.id === payload.new.id ? payload.new as Agent : agent
            ));
          }
        })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { agents, loading };
}

export function useAgentActivities(agentId: string) {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchActivities = async () => {
      const { data, error } = await supabase
        .from('activities')
        .select('*')
        .eq('agent_id', agentId)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching activities:', error);
        return;
      }

      setActivities(data);
      setLoading(false);
    };

    fetchActivities();

    // Subscribe to changes
    const subscription = supabase
      .channel(`activities:${agentId}`)
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'activities', filter: `agent_id=eq.${agentId}` },
        payload => {
          setActivities(prev => [payload.new as Activity, ...prev]);
        })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [agentId]);

  return { activities, loading };
}

export function useNotifications() {
  const { address } = useAccount();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!address) return;

    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_address', address)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notifications:', error);
        return;
      }

      setNotifications(data);
      setLoading(false);
    };

    fetchNotifications();

    // Subscribe to changes
    const subscription = supabase
      .channel(`notifications:${address}`)
      .on('postgres_changes', 
        { event: '*', schema: 'public', table: 'notifications', filter: `user_address=eq.${address}` },
        payload => {
          if (payload.eventType === 'INSERT') {
            setNotifications(prev => [payload.new as Notification, ...prev]);
          } else if (payload.eventType === 'UPDATE') {
            setNotifications(prev => prev.map(notif => 
              notif.id === payload.new.id ? payload.new as Notification : notif
            ));
          }
        })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [address]);

  return { notifications, loading };
}