import { defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import { PROJECT_ID, METADATA } from './constants';

export const web3ModalConfig = defaultWagmiConfig({
  chains: [mainnet],
  projectId: PROJECT_ID,
  metadata: METADATA,
  
  // Disable WalletConnect
  enableWalletConnect: false,
  
  // Only enable injected providers (MetaMask)
  enableInjected: true,
});