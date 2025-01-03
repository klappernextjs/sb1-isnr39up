import React from 'react';
import { Cat, Search } from 'lucide-react';

export default function MarketplaceHeader() {
  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-pink-100 p-2 rounded-full">
              <Cat className="h-8 w-8 text-pink-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                CatAgents <span className="text-pink-500">Catalogue</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-2xl">
          <p className="text-gray-600 mb-6">
            Welcome to the <span className="text-pink-500">new</span> CatAgents Catalogue - ready to help you find your purr-fect match. CatAgents launched in 2023 and are the first ever example of AI-powered NFT companions.
          </p>

          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or ID..."
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 text-gray-900 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {['Base Color', 'Accent Color', 'Highlight Color', 'Eye Color', 'Fur', 'Pattern'].map((filter) => (
            <button
              key={filter}
              className="px-4 py-2 rounded-full border border-gray-200 text-sm text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors flex items-center gap-2"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}