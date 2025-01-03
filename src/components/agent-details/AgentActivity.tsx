import React from 'react';
import { Tag, ArrowRightLeft, Wallet } from 'lucide-react';

const activities = [
  {
    type: 'sale',
    price: '0.5 ETH',
    from: '0x1234...5678',
    to: '0x8765...4321',
    time: '2 hours ago',
    icon: Tag
  },
  {
    type: 'transfer',
    from: '0x2345...6789',
    to: '0x9876...5432',
    time: '5 hours ago',
    icon: ArrowRightLeft
  },
  {
    type: 'mint',
    to: '0x3456...7890',
    time: '1 day ago',
    icon: Wallet
  }
];

export default function AgentActivity() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Activity</h2>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-50">
            <div className="p-2 rounded-lg bg-purple-100">
              <activity.icon className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900 capitalize">{activity.type}</span>
                {activity.price && (
                  <span className="text-sm text-gray-600">for {activity.price}</span>
                )}
              </div>
              <div className="text-sm text-gray-500">
                {activity.from && (
                  <>From {activity.from} </>
                )}
                {activity.to && (
                  <>to {activity.to}</>
                )}
              </div>
            </div>
            <div className="text-sm text-gray-500">{activity.time}</div>
          </div>
        ))}
      </div>
    </div>
  );
}