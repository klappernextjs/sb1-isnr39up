import React from 'react';
import { Eye, Palette, Sparkles, Crown } from 'lucide-react';

interface Cattribute {
  name: string;
  icon: React.ElementType;
  options: string[];
  description: string;
}

const cattributes: Cattribute[] = [
  {
    name: 'Base Color',
    icon: Palette,
    options: ['Bananacream', 'Hotcocoa', 'Shamrock', 'Aquamarine'],
    description: 'The primary color of your cat agent'
  },
  {
    name: 'Eye Color',
    icon: Eye,
    options: ['Sapphire', 'Emerald', 'Amber', 'Amethyst'],
    description: 'The color of your cat agent\'s eyes'
  },
  {
    name: 'Special Trait',
    icon: Sparkles,
    options: ['Mystic', 'Techno', 'Nature', 'Cosmic'],
    description: 'A unique characteristic that defines your cat'
  },
  {
    name: 'Rarity',
    icon: Crown,
    options: ['Common', 'Rare', 'Epic', 'Legendary'],
    description: 'How rare your cat agent is'
  }
];

export default function CattributesSection() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Cattributes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cattributes.map((cattribute) => (
          <div key={cattribute.name} className="space-y-4">
            <div className="flex items-center gap-2">
              <cattribute.icon className="h-5 w-5 text-purple-600" />
              <h3 className="font-semibold text-gray-900">{cattribute.name}</h3>
            </div>
            <p className="text-sm text-gray-500">{cattribute.description}</p>
            <div className="flex flex-wrap gap-2">
              {cattribute.options.map((option) => (
                <button
                  key={option}
                  className="px-3 py-1 text-sm rounded-full bg-purple-50 text-purple-700 hover:bg-purple-100 transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}