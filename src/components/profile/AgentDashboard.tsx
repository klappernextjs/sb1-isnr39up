import React from 'react';
import { useProfile } from './ProfileContext';
import AgentGrid from './AgentGrid';
import AgentStats from './AgentStats';
import AgentFilters from './AgentFilters';

export default function AgentDashboard() {
  return (
    <div className="space-y-8">
      <AgentStats />
      <AgentFilters />
      <AgentGrid />
    </div>
  );
}