import React from 'react';
import { Search, Wand2 } from 'lucide-react';

interface PromptInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isGenerating: boolean;
  error?: string;
}

export default function PromptInput({ value, onChange, onSubmit, isGenerating, error }: PromptInputProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit();
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Describe your cat agent... (e.g. 'Create a playful orange cat named Whiskers with stripes')"
          disabled={isGenerating}
          className="w-full h-32 pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50 shadow-sm resize-none"
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={isGenerating || !value.trim()}
        className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Wand2 className={`h-5 w-5 ${isGenerating ? 'animate-spin' : ''}`} />
        {isGenerating ? 'Generating...' : 'Generate Agent'}
      </button>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
}