import React, { useEffect, useRef } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { useAccount } from 'wagmi';
import { useChatStore } from '../../store/chatStore';
import MessageList from './MessageList';

interface ChatWindowProps {
  threadId: string;
  onBack: () => void;
}

export default function ChatWindow({ threadId, onBack }: ChatWindowProps) {
  const [message, setMessage] = React.useState('');
  const { address } = useAccount();
  const { messages, addMessage, markThreadAsRead } = useChatStore();
  const threadMessages = messages[threadId] || [];
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (address) {
      markThreadAsRead(threadId, address);
    }
  }, [threadId, address, markThreadAsRead]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !address) return;

    const otherParticipant = useChatStore.getState().threads
      .find(t => t.id === threadId)
      ?.participants.find(p => p !== address);

    if (!otherParticipant) return;

    addMessage(threadId, {
      senderId: address,
      receiverId: otherParticipant,
      content: message.trim(),
    });

    setMessage('');

    // Simulate response after a delay
    timeoutRef.current = setTimeout(() => {
      addMessage(threadId, {
        senderId: otherParticipant,
        receiverId: address,
        content: "Thanks for your message! I'll get back to you soon.",
      });
    }, 1000);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 flex items-center gap-2">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <ArrowLeft className="h-5 w-5 text-gray-500" />
        </button>
        <h3 className="font-medium text-gray-900">Chat</h3>
      </div>

      <MessageList messages={threadMessages} currentUserId={address!} />

      <form onSubmit={handleSend} className="p-4 border-t border-gray-200">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-purple-500"
          />
          <button
            type="submit"
            disabled={!message.trim()}
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}