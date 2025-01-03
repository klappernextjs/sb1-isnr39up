import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TRAIT_ICONS } from '../../../config/traitIcons';

interface TraitGroupProps {
  category: string;
  options: string[];
  selected: string;
  onSelect: (value: string) => void;
}

export default function TraitGroup({ category, options, selected, onSelect }: TraitGroupProps) {
  const currentIndex = options.indexOf(selected);
  const Icon = TRAIT_ICONS[category] || null;

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev'
      ? (currentIndex - 1 + options.length) % options.length
      : (currentIndex + 1) % options.length;
    onSelect(options[newIndex]);
  };

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 w-32">
        {Icon && <Icon className="h-5 w-5 text-gray-600" />}
        <span className="font-medium capitalize">{category}</span>
      </div>

      <div className="flex-1 flex items-center gap-4">
        <button
          onClick={() => navigate('prev')}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex-1 text-center">
          <span className="text-gray-600">{selected}</span>
          <span className="text-gray-400 text-sm ml-2">
            {currentIndex + 1}/{options.length}
          </span>
        </div>

        <button
          onClick={() => navigate('next')}
          className="p-1 hover:bg-gray-100 rounded-full"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}