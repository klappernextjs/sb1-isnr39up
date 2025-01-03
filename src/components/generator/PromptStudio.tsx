import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useProfile } from '../profile/ProfileContext';
import { useNotificationHandler } from '../../hooks/useNotificationHandler';
import { generateAgent } from '../../utils/agentGenerator';
import { parsePrompt } from '../../utils/promptParser';
import PromptInput from './prompt/PromptInput';
import PromptSuggestions from './prompt/PromptSuggestions';
import GenerationResult from './prompt/GenerationResult';
import ImagePreview from './prompt/ImagePreview';
import type { CatAgent } from '../../types/CatAgent';

interface PromptStudioProps {
  onComplete: () => void;
}

export default function PromptStudio({ onComplete }: PromptStudioProps) {
  const { addPrivateAgent } = useProfile();
  const { notifyMint } = useNotificationHandler();
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedAgent, setGeneratedAgent] = useState<CatAgent | null>(null);
  const [error, setError] = useState<string>();

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt');
      return;
    }

    setIsGenerating(true);
    setError(undefined);
    setGeneratedAgent(null);

    try {
      const traits = parsePrompt(prompt);
      const agent = await generateAgent(traits);
      
      setGeneratedAgent(agent);
      addPrivateAgent(agent);
      notifyMint(agent.name, agent.id);
    } catch (error) {
      console.error('Generation failed:', error);
      setError(error instanceof Error ? error.message : 'Failed to generate agent');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleAccept = () => {
    if (generatedAgent) {
      onComplete();
    }
  };

  const handleTryAgain = () => {
    setGeneratedAgent(null);
    setPrompt('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 mb-4">
          <Sparkles className="h-4 w-4 mr-2" />
          AI Cat Agent Studio
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Create Your Unique AI Cat Agent
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Describe your perfect cat agent and our AI will bring it to life with unique traits and abilities.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-8">
          <PromptInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleGenerate}
            isGenerating={isGenerating}
            error={error}
          />
          <PromptSuggestions onSelect={setPrompt} />
        </div>

        {/* Preview/Result Section */}
        <div>
          {generatedAgent ? (
            <GenerationResult
              agent={generatedAgent}
              onAccept={handleAccept}
              onTryAgain={handleTryAgain}
            />
          ) : (
            <ImagePreview
              prompt={prompt}
              isGenerating={isGenerating}
            />
          )}
        </div>
      </div>
    </div>
  );
}