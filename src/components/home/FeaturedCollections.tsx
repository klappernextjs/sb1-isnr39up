import React from 'react';
import { motion } from 'framer-motion';

const collections = [
  {
    name: "Cyber Cats",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/cat-robot-5665775-4721891.png",
    price: "0.8 ETH"
  },
  {
    name: "Space Cats",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/astronaut-cat-5665776-4721892.png",
    price: "1.2 ETH"
  },
  {
    name: "Ninja Cats",
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/ninja-cat-5665778-4721894.png",
    price: "0.5 ETH"
  }
];

export default function FeaturedCollections() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Collections
          </h2>
          <p className="text-lg text-gray-600">
            Discover our most popular and unique cat agent collections
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square mb-6">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {collection.name}
              </h3>
              <p className="text-purple-600 font-medium">
                Floor: {collection.price}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}