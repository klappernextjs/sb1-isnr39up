import React, { useEffect, useState } from 'react';
import { ImageIcon } from 'lucide-react';
import { generateAgentImage } from '../../../utils/imageGeneration';
import { parsePrompt } from '../../../utils/promptParser';

interface ImagePreviewProps {
  prompt: string;
  isGenerating: boolean;
}

export default function ImagePreview({ prompt, isGenerating }: ImagePreviewProps) {
  const [previewUrl, setPreviewUrl] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();

  useEffect(() => {
    if (!prompt.trim()) {
      setPreviewUrl(undefined);
      return;
    }

    let cancelled = false;

    const generatePreview = async () => {
      setIsLoading(true);
      setError(undefined);

      try {
        const traits = parsePrompt(prompt);
        const url = await generateAgentImage({
          baseColor: traits.baseColor,
          pattern: traits.pattern,
          personality: traits.personality,
          specialFeatures: traits.specialFeatures
        });
        
        if (!cancelled) {
          setPreviewUrl(url);
        }
      } catch (error) {
        if (!cancelled) {
          console.error('Preview generation failed:', error);
          setError(error instanceof Error ? error.message : 'Failed to generate preview');
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    };

    // Add a small delay to avoid too many regenerations while typing
    const timeoutId = setTimeout(generatePreview, 500);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [prompt]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="aspect-square p-6 bg-gradient-to-br from-purple-50 to-pink-50">
        {previewUrl ? (
          <div className="relative w-full h-full">
            <img
              src={previewUrl}
              alt="Cat Preview"
              className={`w-full h-full object-contain rounded-lg transition-all duration-300 ${
                isLoading ? 'opacity-50' : 'hover:scale-105'
              }`}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded-lg">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-purple-500 border-t-transparent" />
              </div>
            )}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400">
            <ImageIcon className="h-12 w-12 mb-4" />
            <p className="text-center">
              {isGenerating || isLoading ? 'Generating preview...' : 'Enter a prompt to see preview'}
            </p>
          </div>
        )}
      </div>
      {error && (
        <div className="p-4 text-sm text-red-600 bg-red-50">
          {error}
        </div>
      )}
    </div>
  );
}