import { supabase } from '../utils/supabase.js';
import { logger } from '../utils/logger.js';

export class AgentService {
  async findAll() {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      logger.error('Error fetching agents:', error);
      throw error;
    }

    return data;
  }

  async findById(id) {
    const { data, error } = await supabase
      .from('agents')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      logger.error(`Error fetching agent ${id}:`, error);
      throw error;
    }

    return data;
  }

  async create(agentData) {
    const { data, error } = await supabase
      .from('agents')
      .insert([agentData])
      .select()
      .single();

    if (error) {
      logger.error('Error creating agent:', error);
      throw error;
    }

    return data;
  }

  async update(id, updates) {
    const { data, error } = await supabase
      .from('agents')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      logger.error(`Error updating agent ${id}:`, error);
      throw error;
    }

    return data;
  }

  async delete(id) {
    const { error } = await supabase
      .from('agents')
      .delete()
      .eq('id', id);

    if (error) {
      logger.error(`Error deleting agent ${id}:`, error);
      throw error;
    }
  }
}