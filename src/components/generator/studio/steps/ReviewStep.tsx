import React from 'react';
import { useAccount } from 'wagmi';
import { useStudio } from '../StudioContext';
import { KITTY_COLORS } from '../../../../utils/animeKitty/traits';
import { useCatsStore } from '../../../../store/catsStore';
import { useActivityStore } from '../../../../store/activityStore';
import { generateAnimeKitty } from '../../../../utils/animeKitty/generator';

interface ReviewStepProps {
  onComplete: () => void;
}

export function ReviewStep({ onComplete }: ReviewStepProps) {
  const { state, dispatch } = useStudio();
  const { kitty } = state;
  const { address } = useAccount();
  const addCat = useCatsStore((state) => state.addCat);
  const addActivity = useActivityStore((state) => state.addActivity);

  const handleMint = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!address || !kitty.name || !kitty.traits) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Missing required information' 
      });
      return;
    }
    
    try {
      dispatch({ type: 'START_GENERATING' });
      
      // Generate the complete kitty with all properties
      const generatedKitty = generateAnimeKitty(kitty.name);
      const finalKitty = {
        ...generatedKitty,
        traits: kitty.traits, // Use the user-selected traits
        owner: address,
        price: '0.1', // Set initial price
      };

      // Add to cats store
      addCat(finalKitty);

      // Add mint activity
      addActivity({
        type: 'mint',
        catId: finalKitty.id,
        to: address
      });

      // Simulate minting delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      dispatch({ type: 'FINISH_GENERATING' });
      onComplete();
    } catch (error) {
      dispatch({ 
        type: 'SET_ERROR', 
        payload: 'Failed to mint kitty. Please try again.' 
      });
    }
  };

  const getColorName = (type: 'base' | 'eyes', id: string) => {
    return KITTY_COLORS[type].find(c => c.id === id)?.name || id;
  };

  return (
    <form onSubmit={handleMint} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-900">Review Your Kitty</h3>
        
        <div className="grid gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <span className="block text-sm font-medium text-gray-500">Name</span>
            <span className="text-gray-900">{kitty.name}</span>
          </div>

          {kitty.traits?.baseColor && (
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="block text-sm font-medium text-gray-500">Base Color</span>
              <span className="text-gray-900">
                {getColorName('base', kitty.traits.baseColor)}
              </span>
            </div>
          )}

          {kitty.traits?.eyeColor && (
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="block text-sm font-medium text-gray-500">Eye Color</span>
              <span className="text-gray-900">
                {getColorName('eyes', kitty.traits.eyeColor)}
              </span>
            </div>
          )}

          {kitty.traits?.expression && (
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="block text-sm font-medium text-gray-500">Expression</span>
              <span className="text-gray-900 capitalize">{kitty.traits.expression}</span>
            </div>
          )}

          {kitty.traits?.accessories?.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="block text-sm font-medium text-gray-500">Accessories</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {kitty.traits.accessories.map(acc => (
                  <span key={acc} className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-sm capitalize">
                    {acc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {kitty.traits?.specialFeatures?.length > 0 && (
            <div className="bg-gray-50 rounded-lg p-4">
              <span className="block text-sm font-medium text-gray-500">Special Features</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {kitty.traits.specialFeatures.map(feature => (
                  <span key={feature} className="px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-sm capitalize">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={state.isGenerating}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state.isGenerating ? 'Minting...' : 'Mint Kitty'}
      </button>

      {state.error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg text-sm">
          {state.error}
        </div>
      )}
    </form>
  );
}