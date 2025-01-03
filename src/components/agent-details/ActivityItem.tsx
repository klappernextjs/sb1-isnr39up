import React from 'react';
import { formatTimeAgo } from '../../utils/format';
import { Activity } from '../../types/Activity';
import { Notification } from '../../store/notificationStore';
import ActivityIcon from './ActivityIcon';

interface ActivityItemProps {
  activity: Activity | Notification;
}

export default function ActivityItem({ activity }: ActivityItemProps) {
  const isNotification = 'type' in activity;
  
  const getActivityTitle = () => {
    if (isNotification) {
      return activity.title;
    }
    return {
      mint: 'Agent Created',
      sale: 'Agent Sold',
      transfer: 'Agent Transferred'
    }[activity.type] || 'Activity';
  };

  const getActivityMessage = () => {
    if (isNotification) {
      return activity.message;
    }
    if (activity.type === 'sale') {
      return `Sold for ${activity.price} ETH`;
    }
    if (activity.type === 'transfer') {
      return `Transferred from ${activity.from} to ${activity.to}`;
    }
    return `Created by ${activity.to}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex items-start gap-4">
      <ActivityIcon type={isNotification ? activity.type : activity.type} />
      <div className="flex-1">
        <h4 className="font-medium text-gray-900">{getActivityTitle()}</h4>
        <p className="text-sm text-gray-600">{getActivityMessage()}</p>
        <p className="text-xs text-gray-500 mt-1">
          {formatTimeAgo(activity.timestamp)}
        </p>
      </div>
    </div>
  );
}