import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChatStore } from '../../store/chatStore';
import ChatDrawer from './ChatDrawer';

export default function ChatButton() {
  const [isOpen, setIsOpen] = React.useState(false);
  const threads = useChatStore((state) => state.threads);
  const totalUnread = threads.reduce((sum, thread) => sum + thread.unreadCount, 0);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
        {totalUnread > 0 && (
          <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-red-500 text-white text-sm flex items-center justify-center">
            {totalUnread}
          </span>
        )}
      </button>

      <ChatDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}