import { defaultWagmiConfig } from '@web3modal/wagmi/react';
import { mainnet } from 'wagmi/chains';
import { projectId } from './web3';

const metadata = {
  name: 'Cat Agent Marketplace',
  description: 'Generate and trade unique AI Cat Agents',
  url: 'https://cat-agents.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

export const web3ModalConfig = defaultWagmiConfig({
  chains: [mainnet],
  projectId,
  metadata,
});