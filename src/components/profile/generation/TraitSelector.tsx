import React from 'react';

interface TraitSelectorProps {
  traits: {
    name: string;
    baseColor: string;
    pattern: string;
    personality: string[];
  };
  onChange: (traits: any) => void;
  error?: string;
}

export default function TraitSelector({ traits, onChange, error }: TraitSelectorProps) {
  const colors = ['orange', 'black', 'white', 'gray', 'brown', 'calico'];
  const patterns = ['solid', 'striped', 'spotted', 'tuxedo'];
  const personalities = ['playful', 'curious', 'lazy', 'energetic', 'mysterious'];

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Name
        </label>
        <input
          type="text"
          value={traits.name}
          onChange={(e) => onChange({ ...traits, name: e.target.value })}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          placeholder="Enter agent name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Base Color
        </label>
        <div className="grid grid-cols-3 gap-2">
          {colors.map(color => (
            <button
              key={color}
              type="button"
              onClick={() => onChange({ ...traits, baseColor: color })}
              className={`px-4 py-2 rounded-lg capitalize ${
                traits.baseColor === color
                  ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                  : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:border-purple-200'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Pattern
        </label>
        <div className="grid grid-cols-2 gap-2">
          {patterns.map(pattern => (
            <button
              key={pattern}
              type="button"
              onClick={() => onChange({ ...traits, pattern })}
              className={`px-4 py-2 rounded-lg capitalize ${
                traits.pattern === pattern
                  ? 'bg-purple-100 text-purple-700 border-2 border-purple-500'
                  : 'bg-gray-50 text-gray-700 border-2 border-transparent hover:border-purple-200'
              }`}
            >
              {pattern}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Personality Traits (Select up to 3)
        </label>
        <div className="flex flex-wrap gap-2">
          {personalities.map(trait => (
            <button
              key={trait}
              type="button"
              onClick={() => {
                const current = traits.personality || [];
                const updated = current.includes(trait)
                  ? current.filter(t => t !== trait)
                  : current.length < 3
                  ? [...current, trait]
                  : current;
                onChange({ ...traits, personality: updated });
              }}
              className={`px-3 py-1 rounded-full text-sm capitalize ${
                traits.personality?.includes(trait)
                  ? 'bg-purple-100 text-purple-700'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {trait}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}