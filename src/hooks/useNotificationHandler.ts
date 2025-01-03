import { useCallback } from 'react';
import { useNotificationStore } from '../store/notificationStore';
import { useNotificationSound } from './useNotificationSound';

export function useNotificationHandler() {
  const addNotification = useNotificationStore((state) => state.addNotification);
  const playSound = useNotificationSound();

  const handleNotification = useCallback((notification: {
    type: 'sale' | 'listing' | 'offer' | 'mint';
    title: string;
    message: string;
    agentId?: string;
  }) => {
    addNotification(notification);
    playSound();
  }, [addNotification, playSound]);

  return {
    notifyListing: useCallback((agentName: string, agentId: string, price: string) => {
      handleNotification({
        type: 'listing',
        title: 'New Listing',
        message: `You listed ${agentName} for ${price} ETH`,
        agentId
      });
    }, [handleNotification]),

    notifySale: useCallback((agentName: string, agentId: string, price: string) => {
      handleNotification({
        type: 'sale',
        title: 'Agent Sold',
        message: `Your agent ${agentName} was sold for ${price} ETH`,
        agentId
      });
    }, [handleNotification]),

    notifyOffer: useCallback((agentName: string, agentId: string, price: string) => {
      handleNotification({
        type: 'offer',
        title: 'New Offer',
        message: `You received an offer of ${price} ETH for ${agentName}`,
        agentId
      });
    }, [handleNotification]),

    notifyMint: useCallback((agentName: string, agentId: string) => {
      handleNotification({
        type: 'mint',
        title: 'Agent Created',
        message: `Successfully created ${agentName}`,
        agentId
      });
    }, [handleNotification])
  };
}