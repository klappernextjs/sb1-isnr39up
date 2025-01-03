export const PROJECT_ID = '37b5e2fccd46c838885f41186745251e';

export const METADATA = {
  name: 'Cat Agent Marketplace',
  description: 'Generate and trade unique AI Cat Agents',
  url: 'https://cat-agents.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
} as const;

export const WEB3_CONFIG = {
  // Disable WalletConnect features
  enableWalletConnect: false,
  enableInjected: true, // Only enable MetaMask/injected wallets
  
  // Connection settings
  connectionTimeout: 5000,
  
  // Optional features
  enableEmail: false,
  enableOnramp: false,
  enableAnalytics: false,
  
  // Theme
  themeMode: 'light',
  themeVariables: {
    '--w3m-z-index': '9999'
  }
} as const;