import React from 'react';
import type { CatAgent } from '../../types/CatAgent';
import { generateCatAvatar } from '../../utils/avatar';

interface CatPreviewProps {
  agent: Partial<CatAgent>;
}

export default function CatPreview({ agent }: CatPreviewProps) {
  const avatarSeed = agent.name || 'default';
  const avatarUrl = generateCatAvatar(avatarSeed);

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={avatarUrl}
          alt="Cat Preview"
          className="w-full h-full object-contain"
        />
      </div>
      {agent.rarity && (
        <span className={`absolute top-4 right-4 px-4 py-1 rounded-full text-sm font-medium ${
          agent.rarity === 'legendary' ? 'bg-yellow-400 text-yellow-900' :
          agent.rarity === 'epic' ? 'bg-purple-400 text-purple-900' :
          agent.rarity === 'rare' ? 'bg-blue-400 text-blue-900' :
          'bg-gray-400 text-gray-900'
        }`}>
          {agent.rarity}
        </span>
      )}
      {agent.name && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{agent.name}</h3>
        </div>
      )}
    </div>
  );
}