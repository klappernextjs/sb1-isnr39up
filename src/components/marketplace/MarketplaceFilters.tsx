import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

interface MarketplaceFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  showFilters: boolean;
  onToggleFilters: () => void;
}

export default function MarketplaceFilters({
  searchTerm,
  onSearchChange,
  showFilters,
  onToggleFilters,
}: MarketplaceFiltersProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search cat agents..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          />
        </div>
        <button
          onClick={onToggleFilters}
          className="flex items-center gap-2 px-4 py-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors text-purple-700"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span>Filters</span>
        </button>
      </div>

      {showFilters && (
        <div className="mt-6 pt-6 border-t grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Rarity</label>
            <select className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
              <option value="">All Rarities</option>
              <option value="legendary">Legendary</option>
              <option value="epic">Epic</option>
              <option value="rare">Rare</option>
              <option value="common">Common</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Price Range</label>
            <select className="w-full rounded-lg border-gray-300 focus:border-purple-500 focus:ring-purple-500">
              <option value="">Any Price</option>
              <option value="0-1">0 - 1 ETH</option>
              <option value="1-5">1 - 5 ETH</option>
              <option value="5+">5+ ETH</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}