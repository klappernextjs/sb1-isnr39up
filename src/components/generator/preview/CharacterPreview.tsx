import React from 'react';
import { CatTraits } from '../../../types/CatTraits';
import { getLayerImage } from '../../../utils/catLayers';

interface CharacterPreviewProps {
  traits: CatTraits;
}

export default function CharacterPreview({ traits }: CharacterPreviewProps) {
  return (
    <div className="relative w-full h-full">
      {/* Background */}
      <div 
        className="absolute inset-0 rounded-lg"
        style={{ backgroundColor: traits.background.toLowerCase() }}
      />
      
      {/* Layered cat parts */}
      {Object.entries(traits).map(([category, value]) => {
        if (category === 'background') return null;
        const imageUrl = getLayerImage(category as keyof CatTraits, value);
        if (!imageUrl) return null;

        return (
          <img
            key={category}
            src={imageUrl}
            alt={`${category} - ${value}`}
            className="absolute inset-0 w-full h-full object-contain"
          />
        );
      })}
    </div>
  );
}