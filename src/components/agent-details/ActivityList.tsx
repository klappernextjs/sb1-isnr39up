import React from 'react';
import { useActivityStore } from '../../store/activityStore';
import { useNotificationStore } from '../../store/notificationStore';
import ActivityItem from './ActivityItem';

interface ActivityListProps {
  agentId: string;
}

export default function ActivityList({ agentId }: ActivityListProps) {
  const activities = useActivityStore((state) => 
    state.activities.filter(a => a.catId === agentId)
  );
  const notifications = useNotificationStore((state) => 
    state.notifications.filter(n => n.agentId === agentId)
  );

  // Combine and sort activities and notifications by timestamp
  const allActivities = [...activities, ...notifications]
    .sort((a, b) => b.timestamp - a.timestamp);

  if (allActivities.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No activity yet for this agent
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {allActivities.map((activity) => (
        <ActivityItem 
          key={activity.id} 
          activity={activity} 
        />
      ))}
    </div>
  );
}