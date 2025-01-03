import React, { useState } from 'react';
import { X, Wand2 } from 'lucide-react';
import { useProfile } from '../ProfileContext';
import { useNotificationHandler } from '../../../hooks/useNotificationHandler';
import TraitSelector from './TraitSelector';
import QuantityInput from './QuantityInput';
import AgentPreview from './AgentPreview';
import { generateAgent } from '../../../utils/agentGenerator';

interface GenerateAgentModalProps {
  onClose: () => void;
}

export default function GenerateAgentModal({ onClose }: GenerateAgentModalProps) {
  const { addPrivateAgent } = useProfile();
  const { notifyMint } = useNotificationHandler();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string>();
  const [traits, setTraits] = useState({
    name: '',
    baseColor: 'orange',
    pattern: 'solid',
    personality: ['playful'],
    specialFeatures: []
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const validateTraits = () => {
    if (!traits.name?.trim()) return 'Please enter a name';
    if (!traits.baseColor) return 'Please select a base color';
    if (!traits.pattern) return 'Please select a pattern';
    if (!traits.personality?.length) return 'Please select at least one personality trait';
    return null;
  };

  const handleGenerate = async () => {
    const validationError = validateTraits();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsGenerating(true);
    setError(undefined);

    try {
      for (let i = 0; i < quantity; i++) {
        const agent = await generateAgent({ 
          ...traits, 
          index: i
        });

        addPrivateAgent(agent);
        notifyMint(agent.name, agent.id);
        
        if (i < quantity - 1) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      onClose();
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Failed to generate agent');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-4xl w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-gray-900">Create New Agent</h3>
          <button 
            onClick={onClose} 
            disabled={isGenerating}
            className="p-2 hover:bg-gray-100 rounded-lg disabled:opacity-50"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <TraitSelector
              traits={traits}
              onChange={setTraits}
              error={error}
            />
            <div className="mt-6">
              <QuantityInput
                value={quantity}
                onChange={setQuantity}
                disabled={isGenerating}
              />
            </div>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !traits.name}
              className="mt-6 w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
            >
              <Wand2 className="h-5 w-5" />
              {isGenerating ? 'Generating...' : 'Create Agent'}
            </button>
            {error && (
              <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
          </div>
          <div>
            <AgentPreview traits={traits} />
          </div>
        </div>
      </div>
    </div>
  );
}