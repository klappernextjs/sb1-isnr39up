import React from 'react';
import { Check } from 'lucide-react';

const STEPS = [
  'Name Your Cat',
  'Choose Appearance',
  'Add Accessories',
  'Review & Create'
] as const;

interface GeneratorStepsProps {
  currentStep: number;
}

export default function GeneratorSteps({ currentStep }: GeneratorStepsProps) {
  return (
    <div className="flex items-center justify-between mb-8">
      {STEPS.map((step, index) => (
        <div key={step} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
            index + 1 < currentStep ? 'bg-green-500' :
            index + 1 === currentStep ? 'bg-purple-600' :
            'bg-gray-200'
          }`}>
            {index + 1 < currentStep ? (
              <Check className="w-5 h-5 text-white" />
            ) : (
              <span className={`text-sm ${
                index + 1 === currentStep ? 'text-white' : 'text-gray-500'
              }`}>
                {index + 1}
              </span>
            )}
          </div>
          <div className="ml-3">
            <p className={`text-sm font-medium ${
              index + 1 === currentStep ? 'text-purple-600' : 'text-gray-500'
            }`}>
              {step}
            </p>
          </div>
          {index < STEPS.length - 1 && (
            <div className={`flex-1 w-16 h-0.5 mx-2 ${
              index + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );
}