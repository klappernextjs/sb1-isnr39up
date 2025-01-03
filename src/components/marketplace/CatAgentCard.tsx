import React from 'react';
import type { CatAgent } from '../../types/CatAgent';

interface CatAgentCardProps {
  agent: CatAgent;
}

export default function CatAgentCard({ agent }: CatAgentCardProps) {
  const rarityColors = {
    legendary: 'bg-yellow-400 text-yellow-900',
    epic: 'bg-purple-400 text-purple-900',
    rare: 'bg-blue-400 text-blue-900',
    common: 'bg-gray-400 text-gray-900'
  };

  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="relative">
        <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50 group-hover:from-purple-100 group-hover:to-pink-100 transition-colors">
          <img
            src={agent.imageUrl}
            alt={agent.name}
            className="w-full h-full object-contain transform group-hover:scale-105 transition-transform"
          />
        </div>
        <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${rarityColors[agent.rarity]}`}>
          {agent.rarity}
        </span>
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
        
        <div className="mt-2 flex flex-wrap gap-1">
          {agent.personality.map((trait) => (
            <span key={trait} className="px-2 py-1 bg-pink-100 text-pink-800 rounded-full text-xs">
              {trait}
            </span>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap gap-1">
          {agent.expertise.map((skill) => (
            <span key={skill} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
              {skill}
            </span>
          ))}
        </div>

        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            {agent.owner?.slice(0, 6)}...{agent.owner?.slice(-4)}
          </div>
          <div className="text-lg font-bold text-purple-600">
            {agent.price} ETH
          </div>
        </div>

        <button className="mt-4 w-full py-2 px-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
          Purchase
        </button>
      </div>
    </div>
  );
}