import React from 'react';

const categories = ['All', 'Art', 'Sports', 'Music', 'Utility', 'Photography', 'Trading Cards'];

export default function CategoryTabs() {
  return (
    <div className="flex justify-center gap-2 flex-wrap my-12">
      {categories.map((category) => (
        <button
          key={category}
          className="px-6 py-2 rounded-full text-sm font-medium text-gray-600 hover:text-pink-500 hover:bg-pink-50 transition-colors"
        >
          {category}
        </button>
      ))}
    </div>
  );
}