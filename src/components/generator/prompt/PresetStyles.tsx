import React from 'react';
import { Palette } from 'lucide-react';

interface PresetStylesProps {
  onSelect: (prompt: string) => void;
}

const presets = [
  {
    name: "Pixar Style",
    prompt: "Create a cute 3D animated cat in Pixar style, named",
    image: "https://example.com/pixar-style.jpg"
  },
  {
    name: "Anime Style",
    prompt: "Design an anime-style cat character named",
    image: "https://example.com/anime-style.jpg"
  },
  {
    name: "Watercolor",
    prompt: "Paint a watercolor illustration of a cat named",
    image: "https://example.com/watercolor-style.jpg"
  }
];

export default function PresetStyles({ onSelect }: PresetStylesProps) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <Palette className="h-5 w-5" />
        <h3 className="font-medium">Art Styles</h3>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => onSelect(preset.prompt)}
            className="p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800 transition-colors text-left"
          >
            <h4 className="font-medium mb-2">{preset.name}</h4>
            <p className="text-sm text-gray-400 line-clamp-2">{preset.prompt}</p>
          </button>
        ))}
      </div>
    </div>
  );
}