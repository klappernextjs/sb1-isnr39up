import React from 'react';
import { Bell, DollarSign, Tag, Wand2 } from 'lucide-react';
import type { NotificationType } from '../../store/notificationStore';

interface NotificationIconProps {
  type: NotificationType;
}

export default function NotificationIcon({ type }: NotificationIconProps) {
  const Icon = {
    sale: DollarSign,
    listing: Tag,
    offer: Bell,
    mint: Wand2,
    transfer: Bell
  }[type];

  const colors = {
    sale: 'text-green-500',
    listing: 'text-blue-500',
    offer: 'text-purple-500',
    mint: 'text-pink-500',
    transfer: 'text-gray-500'
  }[type];

  return <Icon className={`h-5 w-5 ${colors}`} />;
}