import React from 'react';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import HowItWorks from '../components/home/HowItWorks';
import CreatorSection from '../components/home/CreatorSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0118]">
      <Hero />
      <Features />
      <HowItWorks />
      <CreatorSection />
    </div>
  );
}