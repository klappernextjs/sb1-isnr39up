import React from 'react';
import { KITTY_COLORS } from '../../../utils/animeKitty/traits';

interface AnimeKittyFormProps {
  onGenerate: (name: string) => void;
  isGenerating: boolean;
}

export function AnimeKittyForm({ onGenerate, isGenerating }: AnimeKittyFormProps) {
  const [name, setName] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onGenerate(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name your Anime Kitty
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500"
          placeholder="Enter a cute name..."
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Available Colors</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {KITTY_COLORS.base.map(color => (
              <div
                key={color.id}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Eye Colors</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {KITTY_COLORS.eyes.map(color => (
              <div
                key={color.id}
                className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isGenerating || !name.trim()}
        className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg hover:from-pink-600 hover:to-purple-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating...' : 'Generate Anime Kitty'}
      </button>
    </form>
  );
}