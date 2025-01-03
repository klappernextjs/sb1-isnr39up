import React from 'react';
import { Glasses, Crown, Ribbon, Shirt, X } from 'lucide-react';
import type { CatAccessory } from '../../types/CatTraits';

interface AccessorySelectorProps {
  selected: CatAccessory;
  onChange: (accessory: CatAccessory) => void;
}

const accessories: { value: CatAccessory; label: string; icon: React.ElementType }[] = [
  { value: 'none', label: 'None', icon: X },
  { value: 'glasses', label: 'Glasses', icon: Glasses },
  { value: 'crown', label: 'Crown', icon: Crown },
  { value: 'bow', label: 'Bow', icon: Ribbon },
  { value: 'shirt', label: 'Shirt', icon: Shirt }
];

export default function AccessorySelector({ selected, onChange }: AccessorySelectorProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-gray-700">Accessory</label>
      <div className="flex flex-wrap gap-3">
        {accessories.map(({ value, label, icon: Icon }) => (
          <button
            key={value}
            onClick={() => onChange(value)}
            className={`
              p-3 rounded-lg border-2 transition-all flex items-center gap-2
              ${selected === value 
                ? 'border-purple-500 bg-purple-50 text-purple-700' 
                : 'border-gray-200 hover:border-purple-200'}
            `}
            type="button"
          >
            <Icon className="h-5 w-5" />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}