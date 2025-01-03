import React from 'react';

interface AgentSortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AgentSortSelect({ value, onChange }: AgentSortSelectProps) {
  return (
    <select 
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="name">Name A-Z</option>
      <option value="rarity">Rarity</option>
    </select>
  );
}