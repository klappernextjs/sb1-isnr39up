import React from 'react';
import type { CatAgent } from '../../types/CatAgent';
import type { CatTraits } from '../../types/CatTraits';
import ColorSelector from './ColorSelector';
import PatternSelector from './PatternSelector';
import AccessorySelector from './AccessorySelector';

interface GeneratorFormProps {
  step: number;
  agent: Partial<CatAgent & CatTraits>;
  isGenerating: boolean;
  error?: string;
  onAgentChange: (updates: Partial<CatAgent & CatTraits>) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function GeneratorForm({
  step,
  agent,
  isGenerating,
  error,
  onAgentChange,
  onSubmit
}: GeneratorFormProps) {
  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                value={agent.name || ''}
                onChange={(e) => onAgentChange({ name: e.target.value })}
                className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                required
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <ColorSelector
              selected={agent.baseColor || 'orange'}
              onChange={(baseColor) => onAgentChange({ baseColor })}
            />
            <PatternSelector
              selected={agent.pattern || 'solid'}
              onChange={(pattern) => onAgentChange({ pattern })}
            />
          </div>
        );
      
      case 3:
        return (
          <AccessorySelector
            selected={agent.accessory || 'none'}
            onChange={(accessory) => onAgentChange({ accessory })}
          />
        );
      
      case 4:
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Review Your Cat</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Name:</span>
                  <p className="mt-1">{agent.name}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-500">Appearance:</span>
                  <p className="mt-1">
                    {agent.baseColor} {agent.pattern} cat
                    {agent.accessory !== 'none' && ` with ${agent.accessory}`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-6 bg-white rounded-xl shadow-lg p-6">
      {renderStepContent()}

      {error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isGenerating}
        className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isGenerating ? 'Generating...' : step < 4 ? 'Next Step' : 'Create Cat Agent'}
      </button>
    </form>
  );
}