import React from 'react';
import { useStudio } from '../StudioContext';
import { KITTY_COLORS } from '../../../../utils/animeKitty/traits';

interface AppearanceStepProps {
  onNext: () => void;
}

export function AppearanceStep({ onNext }: AppearanceStepProps) {
  const { state, dispatch } = useStudio();
  const { traits = {} } = state.kitty;

  const handleChange = (updates: Partial<typeof traits>) => {
    dispatch({
      type: 'UPDATE_KITTY',
      payload: { traits: { ...traits, ...updates } }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Base Color
        </label>
        <div className="grid grid-cols-3 gap-3">
          {KITTY_COLORS.base.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => handleChange({ baseColor: color.id })}
              className={`
                group p-3 rounded-lg border-2 transition-all relative
                ${traits.baseColor === color.id 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-200'}
              `}
            >
              <div 
                className="w-full h-12 rounded-md mb-2"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-sm text-gray-700">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Eye Color
        </label>
        <div className="grid grid-cols-3 gap-3">
          {KITTY_COLORS.eyes.map((color) => (
            <button
              key={color.id}
              type="button"
              onClick={() => handleChange({ eyeColor: color.id })}
              className={`
                group p-3 rounded-lg border-2 transition-all
                ${traits.eyeColor === color.id 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-200'}
              `}
            >
              <div 
                className="w-full h-12 rounded-md mb-2"
                style={{ backgroundColor: color.hex }}
              />
              <span className="text-sm text-gray-700">{color.name}</span>
            </button>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium"
      >
        Next Step
      </button>
    </form>
  );
}