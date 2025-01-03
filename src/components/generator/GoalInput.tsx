import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface GoalInputProps {
  goals: string[];
  onChange: (goals: string[]) => void;
}

export default function GoalInput({ goals, onChange }: GoalInputProps) {
  const [newGoal, setNewGoal] = useState('');

  const addGoal = () => {
    if (newGoal.trim()) {
      onChange([...goals, newGoal.trim()]);
      setNewGoal('');
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">Goals</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && addGoal()}
          className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder="Add a goal"
        />
        <button
          type="button"
          onClick={addGoal}
          className="p-2 rounded-md text-white bg-purple-600 hover:bg-purple-700"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-2">
        {goals.map((goal, index) => (
          <div key={index} className="flex items-center gap-2 bg-gray-50 p-2 rounded-md">
            <span className="flex-1">{goal}</span>
            <button
              type="button"
              onClick={() => onChange(goals.filter((_, i) => i !== index))}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}