import React from 'react';
import { Plus } from 'lucide-react';

const functions = [
  'wait',
  'post_tweet',
  'reply_tweet',
  'like_tweet',
  'quote_tweet',
  'retweet',
  'search_internet',
  'get_token_info',
  'browse_tweet_content_from_influential_users',
  'search_tweet_by_username'
];

export default function FunctionConfig() {
  const [selectedFunctions, setSelectedFunctions] = React.useState<string[]>([]);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#4FD1C5]">Configure Functions for Simulation</h3>
      <p className="text-sm text-gray-400">
        Select and deselect the functions you would like to include for simulation.
      </p>

      <div className="space-y-2">
        {functions.map(func => (
          <label
            key={func}
            className="flex items-center gap-3 p-3 rounded-lg bg-[#0D1D2D] hover:bg-[#162636] cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedFunctions.includes(func)}
              onChange={(e) => {
                if (e.target.checked) {
                  setSelectedFunctions([...selectedFunctions, func]);
                } else {
                  setSelectedFunctions(selectedFunctions.filter(f => f !== func));
                }
              }}
              className="rounded border-gray-600 bg-[#0D1D2D] text-[#4FD1C5] focus:ring-[#4FD1C5]"
            />
            <span className="text-gray-300">{func}</span>
          </label>
        ))}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1A2B3B] text-[#4FD1C5] hover:bg-[#243B4D]">
        <Plus className="h-4 w-4" />
        Add Custom Function
      </button>
    </div>
  );
}