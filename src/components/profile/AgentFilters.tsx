import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function AgentFilters() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search your agents..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <select className="px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500">
          <option value="all">All Agents</option>
          <option value="private">Private</option>
          <option value="listed">Listed</option>
        </select>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-purple-700">
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>
    </div>
  );
}