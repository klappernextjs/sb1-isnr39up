import React from 'react';
import { motion } from 'framer-motion';

// Increased number of avatars to fill 3 rows
const catAvatars = [
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-avatar-6299533-5187874.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299534-5187875.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299535-5187876.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-5665777-4721893.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-robot-5665775-4721891.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/ninja-cat-5665778-4721894.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/astronaut-cat-5665776-4721892.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-chef-5665779-4721895.png",
  // Second row
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-avatar-6299536-5187877.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299537-5187878.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299538-5187879.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-5665780-4721896.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-robot-5665781-4721897.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/ninja-cat-5665782-4721898.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/astronaut-cat-5665783-4721899.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-chef-5665784-4721900.png",
  // Third row
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-avatar-6299539-5187880.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299540-5187881.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299541-5187882.png",
  "https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-5665785-4721901.png",
];

export function CatAvatarGrid() {
  return (
    <div className="relative">
      <div className="grid grid-cols-8 md:grid-cols-10 gap-2 max-w-5xl mx-auto px-4">
        {catAvatars.map((avatar, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="relative w-full"
          >
            <div className="aspect-square w-8 md:w-12 rounded-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
              <img
                src={avatar}
                alt={`Cat Avatar ${index + 1}`}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Add subtle gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}