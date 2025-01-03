import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function ActivityHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className="flex items-center gap-3">
        <TrendingUp className="h-8 w-8 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-900">Market Activity</h1>
      </div>
      <div className="text-sm text-gray-500">
        Last updated: {new Date().toLocaleTimeString()}
      </div>
    </div>
  );
}