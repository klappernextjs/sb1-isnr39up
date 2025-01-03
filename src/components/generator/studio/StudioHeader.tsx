import React from 'react';
import { Sparkles } from 'lucide-react';

export function StudioHeader() {
  return (
    <div className="text-center mb-12">
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-800 mb-4">
        <Sparkles className="h-4 w-4 mr-2" />
        KittieVerse Creation Studio
      </div>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Create Your Unique AI Kitty
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto">
        Design and mint your own unique AI-powered kitty companion with custom traits, 
        personality, and special abilities.
      </p>
    </div>
  );
}