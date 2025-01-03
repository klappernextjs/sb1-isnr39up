import React from 'react';
import { useStudio } from '../StudioContext';
import { KITTY_COLORS } from '../../../../utils/animeKitty/traits';

interface PersonalityStepProps {
  onNext: () => void;
}

export function PersonalityStep({ onNext }: PersonalityStepProps) {
  const { state, dispatch } = useStudio();
  const { traits = {} } = state.kitty;

  const handleExpressionChange = (expression: string) => {
    dispatch({
      type: 'UPDATE_KITTY',
      payload: { traits: { ...traits, expression } }
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
          Expression
        </label>
        <div className="grid grid-cols-2 gap-3">
          {KITTY_COLORS.expressions.map((expression) => (
            <button
              key={expression}
              type="button"
              onClick={() => handleExpressionChange(expression)}
              className={`
                p-4 rounded-lg border-2 transition-all text-left
                ${traits.expression === expression 
                  ? 'border-purple-500 bg-purple-50' 
                  : 'border-gray-200 hover:border-purple-200'}
              `}
            >
              <span className="block text-lg capitalize mb-1">{expression}</span>
              <span className="text-sm text-gray-500">
                {getExpressionDescription(expression)}
              </span>
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

function getExpressionDescription(expression: string): string {
  const descriptions: Record<string, string> = {
    happy: "Always cheerful and brings joy to others",
    sleepy: "Relaxed and peaceful demeanor",
    excited: "Full of energy and enthusiasm",
    curious: "Inquisitive and always exploring",
    determined: "Focused and goal-oriented",
    mischievous: "Playful and full of surprises"
  };
  return descriptions[expression] || "";
}