import { createConfig, mainnet } from 'wagmi';
import { createPublicClient, http } from 'viem';
import { projectId } from './web3';

export const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http()
  })
});