import React from 'react';
import type { CatAgent } from '../../types/CatAgent';

interface CatCardProps {
  cat: CatAgent;
  onClick: () => void;
}

export default function CatCard({ cat, onClick }: CatCardProps) {
  const rarityColors = {
    legendary: 'bg-yellow-100 text-yellow-800',
    epic: 'bg-purple-100 text-purple-800',
    rare: 'bg-blue-100 text-blue-800',
    common: 'bg-gray-100 text-gray-800'
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="aspect-square p-4">
        <img
          src={cat.imageUrl}
          alt={cat.name}
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      {/* Rest of the component remains the same */}
    </div>
  );
}