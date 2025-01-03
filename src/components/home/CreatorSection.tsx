import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Crown } from 'lucide-react';

const creators = [
  {
    name: "CryptoKitties",
    avatar: "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299533-5187874.png",
    sales: "1.2K ETH",
    badge: Star
  },
  {
    name: "PurrMaster",
    avatar: "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299534-5187875.png",
    sales: "856 ETH",
    badge: Award
  },
  {
    name: "NyanCreator",
    avatar: "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299535-5187876.png",
    sales: "654 ETH",
    badge: Crown
  }
];

export default function CreatorSection() {
  return (
    <div className="py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Top Creators
          </h2>
          <p className="text-lg text-gray-600">
            Meet the talented artists behind our most popular cat agents
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="relative">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-24 h-24 rounded-xl"
                  />
                  <creator.badge className="absolute -bottom-2 -right-2 h-8 w-8 text-yellow-400 drop-shadow-lg" />
                </div>
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {creator.name}
                </h3>
                <p className="text-purple-600 font-medium">
                  {creator.sales} Total Sales
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}