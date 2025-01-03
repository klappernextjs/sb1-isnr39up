import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { Menu, X } from 'lucide-react';
import Navigation from './navigation/Navigation';
import MobileNav from './navigation/MobileNav';
import NotificationBell from './notifications/NotificationBell';
import ChatButton from './chat/ChatButton';
import ErrorAlert from './shared/ErrorAlert';
import { useWeb3Error } from '../hooks/useWeb3Error';

export default function Layout() {
  const { open } = useWeb3Modal();
  const { address, isConnecting } = useAccount();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { error, handleError, clearError } = useWeb3Error();

  const handleConnect = async () => {
    try {
      await open();
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <Navigation />
            <div className="flex items-center gap-4">
              {address && <NotificationBell />}
              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 disabled:opacity-50 transition-colors"
              >
                {isConnecting ? 'Connecting...' : 
                 address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 
                 'Connect Wallet'}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="sm:hidden p-2 rounded-md text-gray-500 hover:text-gray-600"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && <MobileNav onConnect={handleConnect} isConnecting={isConnecting} address={address} />}
      </nav>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      {address && <ChatButton />}
      {error && <ErrorAlert message={error} onClose={clearError} />}
    </div>
  );
}