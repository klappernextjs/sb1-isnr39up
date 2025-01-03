import React from 'react';
import { Lightbulb } from 'lucide-react';

interface PromptSuggestionsProps {
  onSelect: (prompt: string) => void;
}

const suggestions = [
  "Create a mysterious black cat named Shadow with golden eyes",
  "Design a cheerful calico cat named Patches who loves to play",
  "Generate a regal white cat named Luna with a royal personality",
  "Make a playful orange tabby named Ginger with stripes"
];

export default function PromptSuggestions({ onSelect }: PromptSuggestionsProps) {
  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
        <Lightbulb className="h-4 w-4" />
        <span>Try these prompts</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {suggestions.map((suggestion) => (
          <button
            key={suggestion}
            onClick={() => onSelect(suggestion)}
            className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-sm text-gray-300 transition-colors"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}