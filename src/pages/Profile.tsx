import React from 'react';
import { useAccount } from 'wagmi';
import WalletRequired from '../components/auth/WalletRequired';
import ProfileHeader from '../components/profile/ProfileHeader';
import AgentDashboard from '../components/profile/AgentDashboard';
import { ProfileProvider } from '../components/profile/ProfileContext';

export default function Profile() {
  const { address } = useAccount();

  return (
    <WalletRequired>
      <ProfileProvider>
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProfileHeader address={address} />
            <AgentDashboard />
          </div>
        </div>
      </ProfileProvider>
    </WalletRequired>
  );
}