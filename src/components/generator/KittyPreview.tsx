import React from 'react';
import type { Kitty } from '../../types/Kitty';
import { getTraitFromGene } from '../../utils/genetics/phenotype';

interface KittyPreviewProps {
  kitty?: Partial<Kitty>;
}

export function KittyPreview({ kitty }: KittyPreviewProps) {
  if (!kitty?.genome) return null;

  const bodyGene = kitty.genome.genes.find(g => g.type === 'body');
  const patternGene = kitty.genome.genes.find(g => g.type === 'pattern');

  const bodyType = bodyGene ? getTraitFromGene(bodyGene.value, 'body') : 'normal';
  const pattern = patternGene ? getTraitFromGene(patternGene.value, 'pattern') : 'solid';

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        <img
          src={`https://api.dicebear.com/7.x/big-smile/svg?seed=${kitty.name}-${bodyType}-${pattern}`}
          alt={kitty.name || 'Kitty Preview'}
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="p-6 space-y-4">
        {kitty.name && (
          <h3 className="text-xl font-semibold text-gray-900">{kitty.name}</h3>
        )}
        
        <div className="space-y-2">
          <div>
            <span className="text-sm font-medium text-gray-500">Generation</span>
            <p className="text-gray-900">{kitty.generation}</p>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-500">Body Type</span>
            <p className="text-gray-900 capitalize">{bodyType}</p>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-500">Pattern</span>
            <p className="text-gray-900 capitalize">{pattern}</p>
          </div>

          <div>
            <span className="text-sm font-medium text-gray-500">Genes</span>
            <div className="flex flex-wrap gap-1 mt-1">
              {kitty.genome.genes.map((gene, index) => (
                <span
                  key={index}
                  className={`px-2 py-1 text-xs rounded-full ${
                    gene.dominant 
                      ? 'bg-purple-100 text-purple-700' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {gene.type}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}