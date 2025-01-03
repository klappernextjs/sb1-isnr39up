import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Link
        to="/generate"
        className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
      >
        Start Creating <ArrowRight className="ml-2 h-5 w-5" />
      </Link>
      <Link
        to="/marketplace"
        className="inline-flex items-center px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-all hover:scale-105"
      >
        Explore Marketplace
      </Link>
    </div>
  );
}