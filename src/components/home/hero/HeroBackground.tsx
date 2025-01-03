import React from 'react';

const catIllustrations = [
  { color: 'bg-yellow-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-6299533-5187874.png' },
  { color: 'bg-pink-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299534-5187875.png' },
  { color: 'bg-purple-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cat-avatar-6299535-5187876.png' },
  { color: 'bg-blue-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cute-cat-5665777-4721893.png' },
  { color: 'bg-green-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/cat-robot-5665775-4721891.png' },
  { color: 'bg-indigo-50', image: 'https://cdn3d.iconscout.com/3d/premium/thumb/ninja-cat-5665778-4721894.png' },
];

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent z-10" />
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 p-4 max-w-7xl mx-auto">
        {catIllustrations.map((cat, index) => (
          <div
            key={index}
            className={`aspect-square rounded-2xl ${cat.color} p-4 transform hover:scale-105 transition-transform duration-300`}
          >
            <img
              src={cat.image}
              alt={`Cat illustration ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </div>
  );
}