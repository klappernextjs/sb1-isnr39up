import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { useChatStore } from '../store/chatStore';
import { generateDummyMessages, generateDummyThreads } from '../utils/dummyData';

export function useDummyData() {
  const { address } = useAccount();
  const { threads } = useChatStore();

  useEffect(() => {
    // Only initialize if there are no existing threads and we have a wallet address
    if (threads.length === 0 && address) {
      const dummyMessages = generateDummyMessages(address);
      const dummyThreads = generateDummyThreads(address, dummyMessages);

      // Initialize the chat store with dummy data
      useChatStore.setState({
        messages: dummyMessages,
        threads: dummyThreads,
      });
    }
  }, [address, threads.length]);
}