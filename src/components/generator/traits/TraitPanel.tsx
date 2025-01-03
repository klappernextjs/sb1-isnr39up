import React from 'react';
import { CatTraits } from '../../../types/CatTraits';
import { TRAIT_OPTIONS } from '../../../config/traitOptions';
import { TRAIT_ICONS } from '../../../config/traitIcons';

interface TraitPanelProps {
  traits: CatTraits;
  onChange: (traits: CatTraits) => void;
}

export default function TraitPanel({ traits, onChange }: TraitPanelProps) {
  const updateTrait = (category: keyof CatTraits, value: string) => {
    onChange({ ...traits, [category]: value });
  };

  return (
    <div className="space-y-6">
      {Object.entries(TRAIT_OPTIONS).map(([category, options]) => {
        const Icon = TRAIT_ICONS[category as keyof CatTraits];
        const currentValue = traits[category as keyof CatTraits];
        const currentIndex = options.indexOf(currentValue);

        return (
          <div key={category} className="space-y-2">
            <div className="flex items-center gap-2 text-gray-600">
              {Icon && <Icon className="h-4 w-4" />}
              <span className="text-sm font-medium capitalize">{category}</span>
            </div>

            <div className="flex items-center">
              <button 
                onClick={() => {
                  const newIndex = (currentIndex - 1 + options.length) % options.length;
                  updateTrait(category as keyof CatTraits, options[newIndex]);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                ←
              </button>

              <div className="flex-1 text-center">
                <span className="text-sm">{currentValue}</span>
                <span className="text-xs text-gray-400 ml-1">
                  {currentIndex + 1}/{options.length}
                </span>
              </div>

              <button
                onClick={() => {
                  const newIndex = (currentIndex + 1) % options.length;
                  updateTrait(category as keyof CatTraits, options[newIndex]);
                }}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                →
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}