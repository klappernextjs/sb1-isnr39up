import React from 'react';
import { TrendingUp, Users, Repeat2 } from 'lucide-react';
import { formatCurrency } from '../../utils/format';

export default function AgentStats() {
  const stats = [
    {
      label: 'Floor Price',
      value: '0.5 ETH',
      change: '+12.5%',
      icon: TrendingUp
    },
    {
      label: 'Holders',
      value: formatCurrency(169934),
      change: '+2.3%',
      icon: Users
    },
    {
      label: 'Total Volume',
      value: '1.2K ETH',
      change: '+5.7%',
      icon: Repeat2
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Stats</h2>
      <div className="space-y-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center justify-between p-4 rounded-lg bg-gray-50">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-purple-100">
                <stat.icon className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <div className="text-sm text-gray-500">{stat.label}</div>
                <div className="font-semibold text-gray-900">{stat.value}</div>
              </div>
            </div>
            <div className="text-sm text-green-600">{stat.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
}