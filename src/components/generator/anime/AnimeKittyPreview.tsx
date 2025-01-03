import React from 'react';
import { AnimeKitty } from '../../../types/AnimeKitty';
import { KITTY_COLORS } from '../../../utils/animeKitty/traits';

interface AnimeKittyPreviewProps {
  kitty: Partial<AnimeKitty>;
}

export function AnimeKittyPreview({ kitty }: AnimeKittyPreviewProps) {
  if (!kitty.traits) return null;

  const baseColor = KITTY_COLORS.base.find(c => c.id === kitty.traits.baseColor);
  const eyeColor = KITTY_COLORS.eyes.find(c => c.id === kitty.traits.eyeColor);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={kitty.imageUrl}
          alt={kitty.name || 'Anime Kitty Preview'}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-4 space-y-2">
        {kitty.name && (
          <h3 className="text-lg font-semibold text-gray-900">{kitty.name}</h3>
        )}
        
        <div className="space-y-1">
          {baseColor && (
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: baseColor.hex }} 
              />
              <span className="text-sm text-gray-600">{baseColor.name}</span>
            </div>
          )}
          
          {eyeColor && (
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full" 
                style={{ backgroundColor: eyeColor.hex }} 
              />
              <span className="text-sm text-gray-600">{eyeColor.name} Eyes</span>
            </div>
          )}
          
          {kitty.traits.accessories?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {kitty.traits.accessories.map(acc => (
                <span key={acc} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  {acc}
                </span>
              ))}
            </div>
          )}
          
          {kitty.traits.specialFeatures?.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {kitty.traits.specialFeatures.map(feature => (
                <span key={feature} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}