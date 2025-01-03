import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CatTraits } from '../../../types/CatTraits';
import { TRAIT_OPTIONS } from '../../../config/traitOptions';
import { TRAIT_ICONS } from '../../../config/traitIcons';

interface TraitControlsProps {
  traits: CatTraits;
  onChange: (traits: CatTraits) => void;
}

export default function TraitControls({ traits, onChange }: TraitControlsProps) {
  return (
    <div className="w-full bg-white rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-8">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Customize Your Cat</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
        {Object.entries(TRAIT_OPTIONS).map(([category, options]) => {
          const Icon = TRAIT_ICONS[category as keyof CatTraits];
          const currentValue = traits[category as keyof CatTraits];
          const currentIndex = options.indexOf(currentValue);

          return (
            <div key={category}>
              <div className="flex items-center gap-2 mb-3">
                {Icon && <Icon className="h-5 w-5 text-gray-400" />}
                <span className="text-sm font-medium text-gray-900 capitalize">
                  {category}
                </span>
              </div>

              <div className="flex items-center bg-gray-50 rounded-xl p-2">
                <button
                  onClick={() => {
                    const newIndex = (currentIndex - 1 + options.length) % options.length;
                    onChange({
                      ...traits,
                      [category]: options[newIndex]
                    });
                  }}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>

                <div className="flex-1 text-center">
                  <span className="text-sm font-medium text-gray-900">{currentValue}</span>
                  <span className="text-xs text-gray-400 ml-2">
                    {currentIndex + 1}/{options.length}
                  </span>
                </div>

                <button
                  onClick={() => {
                    const newIndex = (currentIndex + 1) % options.length;
                    onChange({
                      ...traits,
                      [category]: options[newIndex]
                    });
                  }}
                  className="p-2 hover:bg-white rounded-lg transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}