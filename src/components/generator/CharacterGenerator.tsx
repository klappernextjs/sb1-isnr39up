import React, { useState } from 'react';
import { CatTraits, defaultTraits } from '../../types/CatTraits';
import CharacterPreview from './preview/CharacterPreview';
import TraitPanel from './traits/TraitPanel';

export default function CharacterGenerator() {
  const [traits, setTraits] = useState<CatTraits>(defaultTraits);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex gap-8">
          {/* Left panel with traits */}
          <div className="w-[320px] bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
            <TraitPanel 
              traits={traits} 
              onChange={setTraits} 
            />
          </div>

          {/* Right panel with preview */}
          <div className="flex-1 flex flex-col items-center">
            <div className="w-[512px] h-[512px] bg-white rounded-2xl shadow-sm border border-gray-200 p-4">
              <CharacterPreview traits={traits} />
            </div>
            
            <div className="mt-6 flex gap-4 w-[512px]">
              <button className="flex-1 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-gray-700 font-medium transition-colors">
                Reset
              </button>
              <button className="flex-1 px-4 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium transition-colors">
                Generate Character
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}