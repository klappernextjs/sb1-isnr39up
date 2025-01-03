import React from 'react';
import { Check } from 'lucide-react';

const STEPS = [
  'Basic Info',
  'Appearance',
  'Personality',
  'Special Traits',
  'Review & Mint'
] as const;

interface StudioStepsProps {
  currentStep: number;
}

export function StudioSteps({ currentStep }: StudioStepsProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between">
        {STEPS.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div className={`
                w-10 h-10 rounded-full flex items-center justify-center
                ${index + 1 < currentStep 
                  ? 'bg-green-500' 
                  : index + 1 === currentStep 
                    ? 'bg-purple-600' 
                    : 'bg-gray-200'
                }
              `}>
                {index + 1 < currentStep ? (
                  <Check className="h-6 w-6 text-white" />
                ) : (
                  <span className={`text-sm font-medium ${
                    index + 1 === currentStep ? 'text-white' : 'text-gray-500'
                  }`}>
                    {index + 1}
                  </span>
                )}
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">
                {step}
              </span>
            </div>
            {index < STEPS.length - 1 && (
              <div className={`flex-1 h-0.5 ${
                index + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'
              }`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}