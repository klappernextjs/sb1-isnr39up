import { Message, ChatThread } from '../store/chatStore';

// Sample user addresses
export const SAMPLE_USERS = [
  '0x1234567890123456789012345678901234567890',
  '0x2345678901234567890123456789012345678901',
  '0x3456789012345678901234567890123456789012',
  '0x4567890123456789012345678901234567890123',
];

const createMessage = (
  senderId: string,
  receiverId: string,
  content: string,
  timestamp: number
): Message => ({
  id: crypto.randomUUID(),
  senderId,
  receiverId,
  content,
  timestamp,
  read: true,
});

export const generateDummyMessages = (currentUserId: string): Record<string, Message[]> => {
  const now = Date.now();
  const hour = 3600000;

  const threads: Record<string, Message[]> = {};

  SAMPLE_USERS.forEach(userId => {
    if (userId === currentUserId) return;

    const threadId = crypto.randomUUID();
    threads[threadId] = [
      createMessage(userId, currentUserId, "Hey! I'm interested in your cat agent", now - 24 * hour),
      createMessage(currentUserId, userId, "Hi! Which one caught your eye?", now - 23 * hour),
      createMessage(userId, currentUserId, "The legendary one with sparkles!", now - 22 * hour),
      createMessage(currentUserId, userId, "Ah yes, that's one of my favorites", now - 21 * hour),
      createMessage(userId, currentUserId, "What's your asking price?", now - 20 * hour),
      createMessage(currentUserId, userId, "I'm thinking 2.5 ETH", now - 19 * hour),
      createMessage(userId, currentUserId, "Let me think about it", now - 18 * hour),
    ];
  });

  return threads;
};

export const generateDummyThreads = (
  currentUserId: string,
  messages: Record<string, Message[]>
): ChatThread[] => {
  return Object.entries(messages).map(([threadId, msgs]) => ({
    id: threadId,
    participants: [
      currentUserId,
      msgs[0].senderId === currentUserId ? msgs[0].receiverId : msgs[0].senderId
    ],
    lastMessage: msgs[msgs.length - 1],
    unreadCount: Math.floor(Math.random() * 3), // Random number of unread messages
  }));
};