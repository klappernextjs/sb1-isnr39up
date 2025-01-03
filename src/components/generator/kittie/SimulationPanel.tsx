import React from 'react';
import { Play } from 'lucide-react';

export default function SimulationPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-[#0D1D2D] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#4FD1C5] mb-4">Simulate Reaction</h3>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">X (Twitter) Post ID</label>
            <input
              type="text"
              placeholder="example: 1234567890"
              className="w-full bg-[#1A2B3B] border border-gray-700 rounded-lg px-4 py-2 text-gray-300 focus:border-[#4FD1C5] focus:ring-[#4FD1C5]"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-2 bg-[#4FD1C5] text-[#0A1525] rounded-lg hover:bg-[#45C1B5] transition-colors">
            <Play className="h-4 w-4" />
            Simulate
          </button>
        </div>
      </div>

      <div className="bg-[#0D1D2D] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#4FD1C5] mb-4">Reaction Results</h3>
        <div className="text-gray-400">No results</div>
      </div>

      <div className="bg-[#0D1D2D] rounded-lg p-6">
        <h3 className="text-lg font-semibold text-[#4FD1C5] mb-4">Simulate Output</h3>
        <button className="flex items-center gap-2 px-6 py-2 bg-[#4FD1C5] text-[#0A1525] rounded-lg hover:bg-[#45C1B5] transition-colors">
          <Play className="h-4 w-4" />
          Simulate
        </button>
      </div>
    </div>
  );
}