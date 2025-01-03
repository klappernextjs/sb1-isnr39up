import React from 'react';
import HeroSection from './HeroSection';
import CategoryTabs from './CategoryTabs';
import FeaturedCollections from './FeaturedCollections';
import CreatorSection from './CreatorSection';
import Newsletter from './Newsletter';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <CategoryTabs />
      <FeaturedCollections />
      <CreatorSection />
      <Newsletter />
    </div>
  );
}