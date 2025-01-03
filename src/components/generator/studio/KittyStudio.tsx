import React from 'react';
import { useStudio } from './StudioContext';
import { StudioHeader } from './StudioHeader';
import { StudioSteps } from './StudioSteps';
import { StudioPreview } from './StudioPreview';
import { StudioForm } from './StudioForm';

interface KittyStudioProps {
  onComplete: () => void;
}

export function KittyStudio({ onComplete }: KittyStudioProps) {
  const { state } = useStudio();

  return (
    <div>
      <StudioHeader />
      <StudioSteps currentStep={state.step} />
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <StudioForm onComplete={onComplete} />
        </div>
        
        <div className="lg:sticky lg:top-8">
          <StudioPreview kitty={state.kitty} />
        </div>
      </div>
    </div>
  );
}