import React from 'react';
import { Brain, Sparkles, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI',
    description: 'Powered by cutting-edge artificial intelligence for natural interactions and learning capabilities.'
  },
  {
    icon: Sparkles,
    title: 'Unique Personalities',
    description: 'Each cat agent has its own distinct personality traits, making them truly one-of-a-kind.'
  },
  {
    icon: Shield,
    title: 'Secure Trading',
    description: 'Built on blockchain technology for secure and transparent agent ownership and trading.'
  },
  {
    icon: Zap,
    title: 'Instant Generation',
    description: 'Create your perfect companion in minutes with our intuitive generation studio.'
  }
];

export default function Features() {
  return (
    <div className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300 mb-4">
            Why Choose Cat Agents?
          </h2>
          <p className="text-lg text-purple-200/60 max-w-2xl mx-auto">
            Experience the future of digital assistance with our unique blend of AI and feline charm.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl bg-purple-900/20 border border-purple-700/20 backdrop-blur-sm hover:bg-purple-900/30 transition-colors group"
            >
              <feature.icon className="h-8 w-8 text-purple-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-purple-200/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
    </div>
  );
}