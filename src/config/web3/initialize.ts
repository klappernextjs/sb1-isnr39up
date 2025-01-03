import { createWeb3Modal } from '@web3modal/wagmi/react';
import { web3ModalConfig } from './modal';
import { PROJECT_ID, METADATA } from './constants';

export function initializeWeb3() {
  try {
    createWeb3Modal({
      wagmiConfig: web3ModalConfig,
      projectId: PROJECT_ID,
      metadata: METADATA,
      
      // Disable WalletConnect to prevent connection errors
      enableWalletConnect: false,
      
      // Only enable injected providers (MetaMask)
      enableInjected: true,
      
      // Disable other features we don't need
      enableEmail: false,
      enableOnramp: false,
      enableAnalytics: false,
      
      // Connection settings
      connectionTimeout: 5000,
      
      // Theme
      themeMode: 'light',
      themeVariables: {
        '--w3m-z-index': '9999'
      }
    });
  } catch (error) {
    console.warn('Web3Modal initialization failed:', error);
    // Continue app execution - wallet features will be degraded but app remains functional
  }
}