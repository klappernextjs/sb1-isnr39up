import React from 'react';
import type { CatColor } from '../../types/CatTraits';

interface ColorSelectorProps {
  selected: CatColor;
  onChange: (color: CatColor) => void;
}

const colors: { value: CatColor; label: string; className: string }[] = [
  { value: 'orange', label: 'Orange', className: 'bg-orange-400' },
  { value: 'black', label: 'Black', className: 'bg-gray-900' },
  { value: 'white', label: 'White', className: 'bg-white border-2 border-gray-200' },
  { value: 'gray', label: 'Gray', className: 'bg-gray-400' },
  { value: 'brown', label: 'Brown', className: 'bg-amber-800' },
  { value: 'calico', label: 'Calico', className: 'bg-gradient-to-r from-orange-300 via-white to-black' }
];

export default function ColorSelector({ selected, onChange }: ColorSelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Base Color</label>
      <div className="grid grid-cols-3 gap-3">
        {colors.map(({ value, label, className }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`
              h-20 rounded-lg transition-all ${className}
              ${selected === value ? 'ring-2 ring-purple-500 scale-95' : 'hover:scale-95'}
            `}
            title={label}
          >
            <span className="sr-only">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}