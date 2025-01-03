import React from 'react';
import { useParams } from 'react-router-dom';
import AgentHeader from '../components/agent-details/AgentHeader';
import AgentStats from '../components/agent-details/AgentStats';
import ActivityList from '../components/agent-details/ActivityList';

export default function AgentDetails() {
  const { id } = useParams();
  
  if (!id) {
    return <div>Agent not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <AgentHeader id={id} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Activity History</h2>
            <ActivityList agentId={id} />
          </div>
        </div>
        <div>
          <AgentStats />
        </div>
      </div>
    </div>
  );
}