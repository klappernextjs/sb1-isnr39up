import React from 'react';
import { useStudio } from './StudioContext';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { AppearanceStep } from './steps/AppearanceStep';
import { PersonalityStep } from './steps/PersonalityStep';
import { SpecialTraitsStep } from './steps/SpecialTraitsStep';
import { ReviewStep } from './steps/ReviewStep';

interface StudioFormProps {
  onComplete: () => void;
}

export function StudioForm({ onComplete }: StudioFormProps) {
  const { state, dispatch } = useStudio();

  const handleNext = () => {
    if (state.step < 5) {
      dispatch({ type: 'SET_STEP', payload: state.step + 1 });
    }
  };

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <BasicInfoStep onNext={handleNext} />;
      case 2:
        return <AppearanceStep onNext={handleNext} />;
      case 3:
        return <PersonalityStep onNext={handleNext} />;
      case 4:
        return <SpecialTraitsStep onNext={handleNext} />;
      case 5:
        return <ReviewStep onComplete={onComplete} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      {renderStep()}
    </div>
  );
}