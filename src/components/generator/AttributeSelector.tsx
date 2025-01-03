import React from 'react';

interface AttributeSelectorProps {
  label: string;
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
}

export default function AttributeSelector({ label, options, selected, onChange }: AttributeSelectorProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => {
              onChange(
                selected.includes(option)
                  ? selected.filter(s => s !== option)
                  : [...selected, option]
              );
            }}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              selected.includes(option)
                ? 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}