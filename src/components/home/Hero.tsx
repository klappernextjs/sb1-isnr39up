import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 text-purple-300 mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            AI-Powered Cat Agents
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 text-transparent bg-clip-text">
            Generate Your Perfect
            <br />
            Digital Companion
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-purple-200/80 mb-12 max-w-2xl mx-auto">
            Create unique AI cat agents with distinct personalities and abilities. Train them, trade them, and let them assist you in your digital journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/generate"
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all hover:scale-105"
            >
              Start Creating <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/marketplace"
              className="inline-flex items-center px-8 py-4 rounded-2xl bg-purple-900/30 text-purple-300 hover:bg-purple-900/40 transition-all hover:scale-105"
            >
              Explore Marketplace
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 text-center">
            {[
              { label: 'Agents Created', value: '10,000+' },
              { label: 'Active Users', value: '5,000+' },
              { label: 'Trading Volume', value: '1,000 ETH' },
              { label: 'Unique Traits', value: '100+' }
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-300/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] bg-gradient-to-t from-pink-500/10 to-transparent rounded-full blur-3xl" />
      </div>
    </div>
  );
}