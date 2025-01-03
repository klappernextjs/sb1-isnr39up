import React from 'react';
import type { CatAgent } from '../../types/CatAgent';
import type { CatTraits } from '../../types/CatTraits';
import { generateCatImage } from '../../utils/catGenerator';

interface GeneratorPreviewProps {
  agent: Partial<CatAgent & CatTraits>;
}

export default function GeneratorPreview({ agent }: GeneratorPreviewProps) {
  const imageUrl = agent.baseColor && agent.pattern 
    ? generateCatImage(agent as CatTraits)
    : "https://static.vecteezy.com/system/resources/previews/021/608/790/non_2x/cute-cat-cartoon-illustration-free-vector.jpg";

  return (
    <div className="lg:sticky lg:top-8">
      <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="aspect-square p-4 bg-gradient-to-br from-purple-50 to-pink-50">
          <img
            src={imageUrl}
            alt="Cat Preview"
            className="w-full h-full object-contain transform transition-transform hover:scale-105"
          />
        </div>
        {agent.name && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <h3 className="text-xl font-bold text-white">{agent.name}</h3>
          </div>
        )}
      </div>
      
      <div className="mt-4 p-4 bg-white rounded-xl shadow-lg">
        <h4 className="font-medium text-gray-900 mb-2">Preview Details</h4>
        <div className="space-y-2 text-sm text-gray-600">
          {agent.baseColor && (
            <p>Color: {agent.baseColor}</p>
          )}
          {agent.pattern && (
            <p>Pattern: {agent.pattern}</p>
          )}
          {agent.accessory && (
            <p>Accessory: {agent.accessory}</p>
          )}
        </div>
      </div>
    </div>
  );
}