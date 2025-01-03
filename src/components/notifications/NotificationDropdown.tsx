import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Check, Trash2 } from 'lucide-react';
import { useNotificationStore } from '../../store/notificationStore';
import NotificationItem from './NotificationItem';

interface NotificationDropdownProps {
  onClose: () => void;
}

export default function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  const navigate = useNavigate();
  const { notifications, markAllAsRead, clearNotifications } = useNotificationStore();

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as Element).closest('.notification-dropdown')) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="notification-dropdown absolute right-0 top-full mt-2 w-80 bg-white rounded-xl shadow-lg border border-gray-200 z-50">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
          <div className="flex gap-2">
            <button
              onClick={markAllAsRead}
              className="p-1 rounded hover:bg-gray-100"
              title="Mark all as read"
            >
              <Check className="h-4 w-4 text-gray-600" />
            </button>
            <button
              onClick={clearNotifications}
              className="p-1 rounded hover:bg-gray-100"
              title="Clear all"
            >
              <Trash2 className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              onClick={() => {
                if (notification.agentId) {
                  navigate(`/agent/${notification.agentId}`);
                }
                onClose();
              }}
            />
          ))
        ) : (
          <div className="p-4 text-center text-gray-500">
            <Bell className="h-8 w-8 mx-auto mb-2 text-gray-400" />
            <p>No notifications yet</p>
          </div>
        )}
      </div>
    </div>
  );
}