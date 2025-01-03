import React from 'react';
import { Search } from 'lucide-react';
import AgentTypeFilter from './AgentTypeFilter';
import AgentSortSelect from './AgentSortSelect';

interface AgentFilterBarProps {
  search: string;
  onSearchChange: (value: string) => void;
  type: string;
  onTypeChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
}

export default function AgentFilterBar({
  search,
  onSearchChange,
  type,
  onTypeChange,
  sort,
  onSortChange
}: AgentFilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search your agents..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
        />
      </div>
      <AgentTypeFilter value={type} onChange={onTypeChange} />
      <AgentSortSelect value={sort} onChange={onSortChange} />
    </div>
  );
}