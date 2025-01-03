import { useState, useCallback } from 'react';
import { generateAgentImage } from '../utils/imageGeneration';
import type { ImageGenerationOptions } from '../types/Generation';

export function useImageGeneration() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string>();

  const generate = useCallback(async (options: ImageGenerationOptions) => {
    if (!options.baseColor || !options.pattern) {
      return null;
    }

    setIsGenerating(true);
    setError(undefined);

    try {
      const imageUrl = await generateAgentImage(options);
      return imageUrl;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate image';
      setError(message);
      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return {
    generate,
    isGenerating,
    error,
  };
}