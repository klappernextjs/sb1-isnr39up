import React from 'react';
import { Check, RefreshCw } from 'lucide-react';
import type { CatAgent } from '../../../types/CatAgent';

interface GenerationResultProps {
  agent: CatAgent;
  onAccept: () => void;
  onTryAgain: () => void;
}

export default function GenerationResult({ agent, onAccept, onTryAgain }: GenerationResultProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={agent.imageUrl}
          alt={agent.name}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">{agent.name}</h3>
          <span className={`inline-block mt-2 px-3 py-1 rounded-full text-sm font-medium ${
            agent.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
            agent.rarity === 'epic' ? 'bg-purple-100 text-purple-800' :
            agent.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {agent.rarity}
          </span>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {agent.personality.map((trait) => (
              <span key={trait} className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-sm">
                {trait}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {agent.expertise.map((skill) => (
              <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={onAccept}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Check className="h-5 w-5" />
            Keep This Agent
          </button>
          <button
            onClick={onTryAgain}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <RefreshCw className="h-5 w-5" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}