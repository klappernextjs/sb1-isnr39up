import React from 'react';
import { useAccount } from 'wagmi';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { Cat } from 'lucide-react';

interface WalletRequiredProps {
  children: React.ReactNode;
}

export default function WalletRequired({ children }: WalletRequiredProps) {
  const { address } = useAccount();
  const { open } = useWeb3Modal();

  if (!address) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto p-8">
          <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Cat className="h-8 w-8 text-purple-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Wallet</h2>
          <p className="text-gray-600 mb-8">
            Please connect MetaMask or another browser wallet to start generating and collecting unique cat agents.
          </p>
          <button
            onClick={() => open()}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
          >
            Connect Wallet
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}