import React from 'react';
import { X } from 'lucide-react';
import { useAccount } from 'wagmi';
import ThreadList from './ThreadList';
import ChatWindow from './ChatWindow';
import { useDummyData } from '../../hooks/useDummyData';

interface ChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatDrawer({ isOpen, onClose }: ChatDrawerProps) {
  const [selectedThreadId, setSelectedThreadId] = React.useState<string | null>(null);
  const { address } = useAccount();

  // Initialize dummy data
  useDummyData();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl z-50 flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Messages</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <X className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-hidden">
        {selectedThreadId ? (
          <ChatWindow
            threadId={selectedThreadId}
            onBack={() => setSelectedThreadId(null)}
          />
        ) : (
          <ThreadList
            userId={address!}
            onSelectThread={setSelectedThreadId}
          />
        )}
      </div>
    </div>
  );
}