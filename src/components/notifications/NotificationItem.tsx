import React from 'react';
import { formatTimeAgo } from '../../utils/format';
import { useNotificationStore, type Notification } from '../../store/notificationStore';
import NotificationIcon from './NotificationIcon';

interface NotificationItemProps {
  notification: Notification;
  onClick: () => void;
}

export default function NotificationItem({ notification, onClick }: NotificationItemProps) {
  const markAsRead = useNotificationStore((state) => state.markAsRead);

  const handleClick = () => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full text-left p-4 hover:bg-gray-50 border-b border-gray-100 last:border-0 ${
        !notification.read ? 'bg-purple-50' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        <NotificationIcon type={notification.type} />
        <div className="flex-1">
          <p className="font-medium text-gray-900">{notification.title}</p>
          <p className="text-sm text-gray-600">{notification.message}</p>
          <p className="text-xs text-gray-500 mt-1">
            {formatTimeAgo(notification.timestamp)}
          </p>
        </div>
        {!notification.read && (
          <span className="h-2 w-2 rounded-full bg-purple-500" />
        )}
      </div>
    </button>
  );
}