import React from 'react';
import type { CatPattern } from '../../types/CatTraits';

interface PatternSelectorProps {
  selected: CatPattern;
  onChange: (pattern: CatPattern) => void;
}

const patterns: { value: CatPattern; label: string }[] = [
  { value: 'solid', label: 'Solid' },
  { value: 'striped', label: 'Striped' },
  { value: 'spotted', label: 'Spotted' },
  { value: 'tuxedo', label: 'Tuxedo' }
];

export default function PatternSelector({ selected, onChange }: PatternSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Pattern</label>
      <div className="grid grid-cols-2 gap-3">
        {patterns.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`
              px-4 py-3 rounded-lg border-2 transition-colors
              ${selected === value 
                ? 'border-purple-500 bg-purple-50 text-purple-700' 
                : 'border-gray-200 hover:border-purple-200'}
            `}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}