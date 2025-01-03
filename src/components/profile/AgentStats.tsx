import React from 'react';
import { useProfile } from './ProfileContext';
import { Box, Tag, Activity } from 'lucide-react';

export default function AgentStats() {
  const { privateAgents, listedAgents } = useProfile();
  const totalValue = listedAgents.reduce((sum, agent) => sum + Number(agent.price || 0), 0);

  const stats = [
    { 
      label: 'Total Agents', 
      value: privateAgents.length + listedAgents.length, 
      icon: Box 
    },
    { 
      label: 'Listed', 
      value: listedAgents.length, 
      subtext: `${totalValue.toFixed(2)} ETH Total`,
      icon: Tag 
    },
    { 
      label: 'Private', 
      value: privateAgents.length,
      subtext: 'Ready to List',
      icon: Activity 
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map(({ label, value, subtext, icon: Icon }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Icon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
              {subtext && (
                <p className="text-sm text-purple-600">{subtext}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}