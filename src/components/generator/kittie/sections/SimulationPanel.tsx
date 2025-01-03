import React from 'react';
import { Play, Twitter, Terminal, Bot } from 'lucide-react';

export default function SimulationPanel() {
  return (
    <div className="space-y-6">
      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Simulate Reaction</h3>
          <Twitter className="h-5 w-5 text-blue-400" />
        </div>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-2">X (Twitter) Post ID</label>
            <input
              type="text"
              placeholder="example: 1234567890"
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-900 focus:border-purple-500 focus:ring-purple-500"
            />
          </div>

          <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            <Play className="h-4 w-4" />
            Simulate
          </button>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Reaction Results</h3>
          <Bot className="h-5 w-5 text-purple-500" />
        </div>
        <div className="text-gray-500">No results</div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Simulate Output</h3>
          <Terminal className="h-5 w-5 text-green-500" />
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          <Play className="h-4 w-4" />
          Simulate
        </button>
      </div>
    </div>
  );
}