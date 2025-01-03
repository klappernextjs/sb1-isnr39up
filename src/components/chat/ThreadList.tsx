import React from 'react';
import { useChatStore } from '../../store/chatStore';
import { formatTimeAgo } from '../../utils/format';

interface ThreadListProps {
  userId: string;
  onSelectThread: (threadId: string) => void;
}

export default function ThreadList({ userId, onSelectThread }: ThreadListProps) {
  const threads = useChatStore((state) => state.threads);

  return (
    <div className="h-full overflow-y-auto">
      {threads.map((thread) => {
        const otherParticipant = thread.participants.find(p => p !== userId);
        
        return (
          <button
            key={thread.id}
            onClick={() => onSelectThread(thread.id)}
            className="w-full p-4 hover:bg-gray-50 flex items-start gap-3 border-b border-gray-100"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-900">
                {otherParticipant?.slice(0, 6)}...{otherParticipant?.slice(-4)}
              </p>
              {thread.lastMessage && (
                <>
                  <p className="text-sm text-gray-600 truncate">
                    {thread.lastMessage.content}
                  </p>
                  <p className="text-xs text-gray-500">
                    {formatTimeAgo(thread.lastMessage.timestamp)}
                  </p>
                </>
              )}
            </div>
            {thread.unreadCount > 0 && (
              <span className="h-5 w-5 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                {thread.unreadCount}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}