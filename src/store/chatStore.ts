import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: number;
  read: boolean;
}

export interface ChatThread {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

interface ChatStore {
  threads: ChatThread[];
  messages: Record<string, Message[]>;
  addMessage: (threadId: string, message: Omit<Message, 'id' | 'timestamp' | 'read'>) => void;
  markThreadAsRead: (threadId: string, userId: string) => void;
  getOrCreateThread: (participant1: string, participant2: string) => string;
}

export const useChatStore = create<ChatStore>()(
  persist(
    (set, get) => ({
      threads: [],
      messages: {},
      
      addMessage: (threadId, message) => {
        const newMessage: Message = {
          ...message,
          id: crypto.randomUUID(),
          timestamp: Date.now(),
          read: false,
        };

        set((state) => ({
          messages: {
            ...state.messages,
            [threadId]: [...(state.messages[threadId] || []), newMessage],
          },
          threads: state.threads.map(thread => 
            thread.id === threadId
              ? {
                  ...thread,
                  lastMessage: newMessage,
                  unreadCount: thread.unreadCount + 1,
                }
              : thread
          ),
        }));
      },

      markThreadAsRead: (threadId, userId) => {
        set((state) => ({
          messages: {
            ...state.messages,
            [threadId]: (state.messages[threadId] || []).map(msg =>
              msg.receiverId === userId ? { ...msg, read: true } : msg
            ),
          },
          threads: state.threads.map(thread =>
            thread.id === threadId ? { ...thread, unreadCount: 0 } : thread
          ),
        }));
      },

      getOrCreateThread: (participant1, participant2) => {
        const { threads } = get();
        const existingThread = threads.find(thread =>
          thread.participants.includes(participant1) &&
          thread.participants.includes(participant2)
        );

        if (existingThread) {
          return existingThread.id;
        }

        const newThread: ChatThread = {
          id: crypto.randomUUID(),
          participants: [participant1, participant2],
          unreadCount: 0,
        };

        set((state) => ({
          threads: [...state.threads, newThread],
          messages: { ...state.messages, [newThread.id]: [] },
        }));

        return newThread.id;
      },
    }),
    {
      name: 'chat-storage',
    }
  )
);