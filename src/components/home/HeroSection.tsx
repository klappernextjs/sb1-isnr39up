import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { HeroBackground } from './hero/HeroBackground';
import { CatAvatarGrid } from './hero/CatAvatarGrid';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen">
      <HeroBackground />
      
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-24">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="text-gray-900">KittieVerse</span>{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Catalogue</span>
          </h1>
          
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            The <span className="text-pink-500">new</span> KittieVerse Catalogue is ready and waiting to help you find your{' '}
            <span className="text-pink-500">purrr-fect</span> AI companion
          </p>

          <div className="mt-10">
            <Link
              to="/marketplace"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all hover:scale-105 shadow-lg shadow-pink-500/25"
            >
              View the Catalogue
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>

        <CatAvatarGrid />
      </div>
    </div>
  );
}