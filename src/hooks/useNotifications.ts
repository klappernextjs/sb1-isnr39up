import { useNotificationStore } from '../store/notificationStore';

export function useNotifications() {
  const addNotification = useNotificationStore((state) => state.addNotification);

  const notifyListing = (agentName: string, agentId: string, price: string) => {
    addNotification({
      type: 'listing',
      title: 'New Listing',
      message: `You listed ${agentName} for ${price} ETH`,
      agentId
    });
  };

  const notifySale = (agentName: string, agentId: string, price: string) => {
    addNotification({
      type: 'sale',
      title: 'Agent Sold',
      message: `Your agent ${agentName} was sold for ${price} ETH`,
      agentId
    });
  };

  const notifyOffer = (agentName: string, agentId: string, price: string) => {
    addNotification({
      type: 'offer',
      title: 'New Offer',
      message: `You received an offer of ${price} ETH for ${agentName}`,
      agentId
    });
  };

  const notifyMint = (agentName: string, agentId: string) => {
    addNotification({
      type: 'mint',
      title: 'Agent Created',
      message: `Successfully created ${agentName}`,
      agentId
    });
  };

  return {
    notifyListing,
    notifySale,
    notifyOffer,
    notifyMint
  };
}