import { useState, useCallback } from 'react';

export function useWeb3Error() {
  const [error, setError] = useState<string | null>(null);

  const handleError = useCallback((error: unknown) => {
    console.error('Web3 Error:', error);
    
    // Handle string errors
    if (typeof error === 'string') {
      // Filter out WalletConnect errors
      if (error.includes('relay.walletconnect.org')) {
        setError('Please use MetaMask or another browser wallet');
        return;
      }
      setError(error);
      return;
    }

    // Handle Error objects
    if (error instanceof Error) {
      // Common web3 errors
      if (error.message.includes('User rejected')) {
        setError('Transaction was rejected');
      }
      // Filter WalletConnect errors
      else if (error.message.includes('relay.walletconnect.org')) {
        setError('Please use MetaMask or another browser wallet');
      }
      // Network errors
      else if (error.message.includes('network')) {
        setError('Network error. Please check your connection');
      }
      // Generic error
      else {
        setError(error.message);
      }
      return;
    }

    setError('An unexpected error occurred');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return { error, handleError, clearError };
}