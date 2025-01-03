import React from 'react';
import MarketplaceHeader from '../components/marketplace/MarketplaceHeader';
import MarketplaceStats from '../components/marketplace/MarketplaceStats';
import CattributesSection from '../components/marketplace/CattributesSection';
import CatAgentGrid from '../components/marketplace/CatAgentGrid';

export default function Marketplace() {
  return (
    <div className="min-h-screen bg-gray-50">
      <MarketplaceHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <MarketplaceStats />
        <CattributesSection />
        <CatAgentGrid />
      </div>
    </div>
  );
}