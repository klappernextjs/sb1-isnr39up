import React from 'react';
import { Download, Redo, Share2, Save } from 'lucide-react';
import { CatTraits } from '../../../types/CatTraits';
import DummyCat from '../preview/DummyCat';
import { useProfile } from '../../profile/ProfileContext';
import { useNotificationHandler } from '../../../hooks/useNotificationHandler';

interface StudioCanvasProps {
  traits: CatTraits;
  onReset: () => void;
  onComplete?: () => void;
}

export default function StudioCanvas({ traits, onReset, onComplete }: StudioCanvasProps) {
  const { addPrivateAgent } = useProfile();
  const { notifyMint } = useNotificationHandler();
  const [isSaving, setIsSaving] = React.useState(false);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const id = crypto.randomUUID();
      const agent = {
        id,
        name: `Vector Cat #${Math.floor(Math.random() * 9999)}`,
        personality: ['playful', 'creative'],
        expertise: ['art', 'design'],
        goals: ['bring joy', 'inspire creativity'],
        rarity: 'rare',
        imageUrl: '',
        traits
      };

      addPrivateAgent(agent);
      notifyMint(agent.name, id);
      
      if (onComplete) {
        onComplete();
      }
    } catch (error) {
      console.error('Failed to save cat:', error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="w-full">
      {/* Canvas area with gradient background */}
      <div className="relative w-full max-w-[512px] mx-auto">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl -rotate-2 scale-[1.02] opacity-50" />
        <div className="relative bg-white rounded-3xl shadow-lg border border-gray-100 p-4 sm:p-8">
          <DummyCat traits={traits} />
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button 
          onClick={onReset}
          className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
        >
          <Redo className="h-4 w-4" />
          Reset
        </button>
        <button 
          onClick={handleSave}
          disabled={isSaving}
          className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white rounded-xl transition-colors disabled:opacity-50"
        >
          <Save className="h-4 w-4" />
          {isSaving ? 'Saving...' : 'Save to Profile'}
        </button>
        <button className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors">
          <Share2 className="h-4 w-4" />
          Share
        </button>
      </div>
    </div>
  );
}