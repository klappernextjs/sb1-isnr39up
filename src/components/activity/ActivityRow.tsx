import React from 'react';
import type { Activity } from '../../types/Activity';
import type { CatAgent } from '../../types/CatAgent';
import { getActivityTypeStyles } from '../../utils/styles';
import { formatTimeAgo } from '../../utils/format';

interface ActivityRowProps {
  activity: Activity;
  cat: CatAgent;
  onClick: () => void;
}

export default function ActivityRow({ activity, cat, onClick }: ActivityRowProps) {
  return (
    <tr 
      className="hover:bg-gray-50 cursor-pointer"
      onClick={onClick}
    >
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 py-1 text-xs rounded-full ${getActivityTypeStyles(activity.type)}`}>
          {activity.type}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <img className="h-8 w-8 rounded-full" src={cat.imageUrl} alt={cat.name} />
          <div className="ml-3">
            <div className="text-sm font-medium text-gray-900">{cat.name}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-900">
        {activity.price ? `Ξ ${activity.price}` : '-'}
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
        {activity.from || '-'}
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
        {activity.to}
      </td>
      <td className="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500">
        {formatTimeAgo(activity.timestamp)}
      </td>
    </tr>
  );
}