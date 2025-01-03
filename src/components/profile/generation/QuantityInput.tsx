import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantityInputProps {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
}

export default function QuantityInput({ value, onChange, disabled }: QuantityInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Quantity to Generate
      </label>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange(Math.max(1, value - 1))}
          disabled={disabled || value <= 1}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
        >
          <Minus className="h-4 w-4" />
        </button>
        <input
          type="number"
          min="1"
          max="10"
          value={value}
          onChange={(e) => onChange(Math.min(10, Math.max(1, Number(e.target.value))))}
          disabled={disabled}
          className="w-20 text-center px-3 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500 disabled:opacity-50"
        />
        <button
          onClick={() => onChange(Math.min(10, value + 1))}
          disabled={disabled || value >= 10}
          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:hover:bg-white"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}