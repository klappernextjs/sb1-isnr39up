import React from 'react';

interface AgentTypeFilterProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AgentTypeFilter({ value, onChange }: AgentTypeFilterProps) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
    >
      <option value="all">All Agents</option>
      <option value="private">Private</option>
      <option value="listed">Listed</option>
    </select>
  );
}