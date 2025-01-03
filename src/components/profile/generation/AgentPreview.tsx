import React from 'react';
import { generateCatAvatar } from '../../../utils/avatar';

interface AgentPreviewProps {
  traits: {
    baseColor: string;
    pattern: string;
    accessory: string;
    personality: string[];
  };
}

export default function AgentPreview({ traits }: AgentPreviewProps) {
  const previewSeed = `${traits.baseColor}-${traits.pattern}-${traits.personality.join('-')}`;
  const avatarUrl = generateCatAvatar(previewSeed);

  return (
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
      <h4 className="text-lg font-medium text-gray-900 mb-4">Preview</h4>
      <div className="aspect-square rounded-xl overflow-hidden bg-white shadow-lg">
        <img
          src={avatarUrl}
          alt="Agent Preview"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="mt-4 space-y-2">
        {traits.baseColor && (
          <div className="text-sm">
            <span className="text-gray-500">Color:</span>{' '}
            <span className="text-gray-900 capitalize">{traits.baseColor}</span>
          </div>
        )}
        {traits.pattern && (
          <div className="text-sm">
            <span className="text-gray-500">Pattern:</span>{' '}
            <span className="text-gray-900 capitalize">{traits.pattern}</span>
          </div>
        )}
        {traits.personality.length > 0 && (
          <div className="text-sm">
            <span className="text-gray-500">Personality:</span>{' '}
            <span className="text-gray-900 capitalize">
              {traits.personality.join(', ')}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}