import React from 'react';
import TraitGroup from './TraitGroup';
import { CatTraits } from '../../../types/CatTraits';
import { TRAIT_OPTIONS } from '../../../config/traitOptions';

interface TraitSelectorProps {
  traits: CatTraits;
  onChange: (traits: CatTraits) => void;
}

export default function TraitSelector({ traits, onChange }: TraitSelectorProps) {
  const updateTrait = (category: keyof CatTraits, value: string) => {
    onChange({
      ...traits,
      [category]: value
    });
  };

  return (
    <div className="space-y-6">
      {Object.entries(TRAIT_OPTIONS).map(([category, options]) => (
        <TraitGroup
          key={category}
          category={category as keyof CatTraits}
          options={options}
          selected={traits[category as keyof CatTraits]}
          onSelect={(value) => updateTrait(category as keyof CatTraits, value)}
        />
      ))}
    </div>
  );
}