import React, { useState } from 'react';
import { PHENOTYPE_MAPS } from '../../utils/genetics/phenotype';

interface KittyGeneratorFormProps {
  onGenerate: (name: string) => void;
  isGenerating: boolean;
}

export function KittyGeneratorForm({ onGenerate, isGenerating }: KittyGeneratorFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onGenerate(name.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name your Kitty
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="Enter a name..."
          required
        />
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-2">Possible Traits</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-2">Body Types</h4>
              <div className="space-y-1">
                {PHENOTYPE_MAPS.body.map(({ trait }) => (
                  <div key={trait} className="text-sm text-gray-600">{trait}</div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-medium text-gray-500 mb-2">Patterns</h4>
              <div className="space-y-1">
                {PHENOTYPE_MAPS.pattern.map(({ trait }) => (
                  <div key={trait} className="text-sm text-gray-600">{trait}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={isGenerating || !name.trim()}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating...' : 'Generate Kitty'}
      </button>
    </form>
  );
}