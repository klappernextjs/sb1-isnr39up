import React from 'react';
import { DollarSign, Send, Wand2, Tag, Bell } from 'lucide-react';
import type { NotificationType } from '../../store/notificationStore';

type ActivityType = 'mint' | 'sale' | 'transfer' | NotificationType;

interface ActivityIconProps {
  type: ActivityType;
}

export default function ActivityIcon({ type }: ActivityIconProps) {
  const Icon = {
    mint: Wand2,
    sale: DollarSign,
    transfer: Send,
    listing: Tag,
    offer: Bell
  }[type] || Bell;

  const colors = {
    mint: 'text-purple-500 bg-purple-50',
    sale: 'text-green-500 bg-green-50',
    transfer: 'text-blue-500 bg-blue-50',
    listing: 'text-orange-500 bg-orange-50',
    offer: 'text-pink-500 bg-pink-50'
  }[type] || 'text-gray-500 bg-gray-50';

  return (
    <div className={`p-2 rounded-lg ${colors}`}>
      <Icon className="h-5 w-5" />
    </div>
  );
}