import React from 'react';
import { Search } from 'lucide-react';

export default function ActivityFilters() {
  return (
    <div className="flex gap-4 mb-6">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Agents/CA"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
        />
      </div>
      <select className="px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500">
        <option value="all">All Sentient</option>
        <option value="productivity">Productivity</option>
        <option value="entertainment">Entertainment</option>
        <option value="creative">Creative</option>
      </select>
    </div>
  );
}