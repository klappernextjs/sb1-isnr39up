import React from 'react';
import { Users, TrendingUp, Tag } from 'lucide-react';

const stats = [
  { label: 'Total Agents', value: '1,234', icon: Users },
  { label: '24h Volume', value: '14.5 ETH', icon: TrendingUp },
  { label: 'Floor Price', value: '0.5 ETH', icon: Tag },
];

export default function MarketplaceStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Icon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}