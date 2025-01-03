import { createConfig, mainnet } from 'wagmi';
import { createPublicClient, http } from 'viem';

// Use reliable public RPC endpoint
const RPC_URL = 'https://eth.llamarpc.com';

export const wagmiConfig = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(RPC_URL),
    batch: {
      multicall: true
    }
  })
});