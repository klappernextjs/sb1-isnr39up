import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { WagmiConfig } from 'wagmi';
import { wagmiConfig } from './config/web3/wagmi';
import { initializeWeb3 } from './config/web3/initialize';
import App from './App';
import './index.css';

// Initialize Web3Modal before rendering
initializeWeb3();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <App />
    </WagmiConfig>
  </StrictMode>
);