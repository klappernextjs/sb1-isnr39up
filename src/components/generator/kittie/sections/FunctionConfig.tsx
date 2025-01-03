import React from 'react';
import { Plus, Code, Twitter, Search, Coins } from 'lucide-react';

const functions = [
  { id: 'wait', icon: Code, label: 'Wait' },
  { id: 'post_tweet', icon: Twitter, label: 'Post Tweet' },
  { id: 'reply_tweet', icon: Twitter, label: 'Reply Tweet' },
  { id: 'like_tweet', icon: Twitter, label: 'Like Tweet' },
  { id: 'quote_tweet', icon: Twitter, label: 'Quote Tweet' },
  { id: 'retweet', icon: Twitter, label: 'Retweet' },
  { id: 'search_internet', icon: Search, label: 'Search Internet' },
  { id: 'get_token_info', icon: Coins, label: 'Get Token Info' }
];

export default function FunctionConfig() {
  const [selectedFunctions, setSelectedFunctions] = React.useState<string[]>([]);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900">Configure Functions</h3>
        <span className="text-2xl">⚡️</span>
      </div>
      <p className="text-sm text-gray-500">
        Select the functions to include in simulation.
      </p>

      <div className="space-y-2">
        {functions.map(func => {
          const Icon = func.icon;
          return (
            <label
              key={func.id}
              className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedFunctions.includes(func.id)}
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedFunctions([...selectedFunctions, func.id]);
                  } else {
                    setSelectedFunctions(selectedFunctions.filter(f => f !== func.id));
                  }
                }}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
              />
              <Icon className="h-5 w-5 text-gray-500" />
              <span className="text-gray-700">{func.label}</span>
            </label>
          );
        })}
      </div>

      <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 text-purple-700 hover:bg-purple-100">
        <Plus className="h-4 w-4" />
        Add Custom Function
      </button>
    </div>
  );
}