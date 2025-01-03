import React from 'react';
import { useStudio } from '../StudioContext';
import { KITTY_COLORS } from '../../../../utils/animeKitty/traits';

interface SpecialTraitsStepProps {
  onNext: () => void;
}

export function SpecialTraitsStep({ onNext }: SpecialTraitsStepProps) {
  const { state, dispatch } = useStudio();
  const { traits = {} } = state.kitty;

  const handleAccessoryToggle = (accessory: string) => {
    const currentAccessories = traits.accessories || [];
    const newAccessories = currentAccessories.includes(accessory)
      ? currentAccessories.filter(a => a !== accessory)
      : [...currentAccessories, accessory];
    
    dispatch({
      type: 'UPDATE_KITTY',
      payload: { traits: { ...traits, accessories: newAccessories } }
    });
  };

  const handleFeatureToggle = (feature: string) => {
    const currentFeatures = traits.specialFeatures || [];
    const newFeatures = currentFeatures.includes(feature)
      ? currentFeatures.filter(f => f !== feature)
      : [...currentFeatures, feature];
    
    dispatch({
      type: 'UPDATE_KITTY',
      payload: { traits: { ...traits, specialFeatures: newFeatures } }
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
          Accessories (Choose up to 2)
        </label>
        <div className="grid grid-cols-3 gap-3">
          {KITTY_COLORS.accessories.map((accessory) => {
            const isSelected = (traits.accessories || []).includes(accessory);
            const canSelect = isSelected || (traits.accessories || []).length < 2;
            
            return (
              <button
                key={accessory}
                type="button"
                onClick={() => handleAccessoryToggle(accessory)}
                disabled={!canSelect && !isSelected}
                className={`
                  p-3 rounded-lg border-2 transition-all capitalize
                  ${isSelected 
                    ? 'border-purple-500 bg-purple-50' 
                    : canSelect
                      ? 'border-gray-200 hover:border-purple-200'
                      : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'}
                `}
              >
                {accessory}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Features (20% chance to get one)
        </label>
        <div className="grid grid-cols-2 gap-3">
          {KITTY_COLORS.specialFeatures.map((feature) => {
            const isSelected = (traits.specialFeatures || []).includes(feature);
            
            return (
              <button
                key={feature}
                type="button"
                onClick={() => handleFeatureToggle(feature)}
                className={`
                  p-4 rounded-lg border-2 transition-all
                  ${isSelected 
                    ? 'border-purple-500 bg-purple-50' 
                    : 'border-gray-200 hover:border-purple-200'}
                `}
              >
                <span className="block text-lg capitalize mb-1">{feature}</span>
                <span className="text-sm text-gray-500">
                  {getFeatureDescription(feature)}
                </span>
              </button>
            );
          })}
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

function getFeatureDescription(feature: string): string {
  const descriptions: Record<string, string> = {
    'sparkles': 'Magical glitter that follows your kitty',
    'wings': 'Ethereal wings for graceful floating',
    'magic-aura': 'A mystical aura that changes color',
    'cyber-parts': 'High-tech augmentations',
    'galaxy-pattern': 'Cosmic patterns in the fur'
  };
  return descriptions[feature] || '';
}