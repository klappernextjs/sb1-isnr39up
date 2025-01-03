import React from 'react';
import { AnimeKitty } from '../../../types/AnimeKitty';
import { KITTY_COLORS } from '../../../utils/animeKitty/traits';

interface StudioPreviewProps {
  kitty: Partial<AnimeKitty>;
}

export function StudioPreview({ kitty }: StudioPreviewProps) {
  if (!kitty.traits) return null;

  const baseColor = KITTY_COLORS.base.find(c => c.id === kitty.traits?.baseColor);
  const eyeColor = KITTY_COLORS.eyes.find(c => c.id === kitty.traits?.eyeColor);

  // Generate preview image URL based on traits
  const previewUrl = `https://api.dicebear.com/7.x/big-smile/svg?seed=${kitty.name || 'preview'}&backgroundColor=${baseColor?.hex.slice(1) || 'ffffff'}&eyes=${eyeColor?.hex.slice(1) || '000000'}`;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={previewUrl}
          alt={kitty.name || 'Kitty Preview'}
          className="w-full h-full object-contain transform transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <div className="p-6 space-y-4">
        {kitty.name && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{kitty.name}</h3>
            {kitty.description && (
              <p className="mt-1 text-sm text-gray-500">{kitty.description}</p>
            )}
          </div>
        )}
        
        <div className="space-y-3">
          {baseColor && (
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border border-gray-200" 
                style={{ backgroundColor: baseColor.hex }} 
              />
              <span className="text-sm text-gray-600">{baseColor.name}</span>
            </div>
          )}
          
          {eyeColor && (
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 rounded-full border border-gray-200" 
                style={{ backgroundColor: eyeColor.hex }} 
              />
              <span className="text-sm text-gray-600">{eyeColor.name} Eyes</span>
            </div>
          )}

          {kitty.traits.expression && (
            <div className="text-sm text-gray-600">
              <span className="font-medium">Expression:</span>{' '}
              <span className="capitalize">{kitty.traits.expression}</span>
            </div>
          )}
        </div>

        {(kitty.traits.accessories?.length > 0 || kitty.traits.specialFeatures?.length > 0) && (
          <div className="pt-4 border-t border-gray-100 space-y-3">
            {kitty.traits.accessories?.length > 0 && (
              <div>
                <span className="text-sm font-medium text-gray-500">Accessories</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {kitty.traits.accessories.map(acc => (
                    <span key={acc} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs capitalize">
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {kitty.traits.specialFeatures?.length > 0 && (
              <div>
                <span className="text-sm font-medium text-gray-500">Special Features</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {kitty.traits.specialFeatures.map(feature => (
                    <span key={feature} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs capitalize">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}