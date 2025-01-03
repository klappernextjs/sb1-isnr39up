import React from 'react';
import { useProfile } from './ProfileContext';
import AgentCard from './AgentCard';

export default function AgentGrid() {
  const { privateAgents } = useProfile();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {privateAgents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
}