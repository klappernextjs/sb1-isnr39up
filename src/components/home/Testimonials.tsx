import React from 'react';

const testimonials = [
  {
    quote: "My cat agent has become an invaluable part of my daily workflow. It's amazing how personalized the interactions feel.",
    author: "Sarah Chen",
    role: "Digital Artist"
  },
  {
    quote: "The combination of AI and cat personalities is genius. It makes working with AI so much more enjoyable and natural.",
    author: "Michael Rodriguez",
    role: "Software Developer"
  },
  {
    quote: "I've collected several cat agents, and each one brings something unique to the table. They're not just NFTs, they're companions.",
    author: "Emma Thompson",
    role: "Content Creator"
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who have discovered the magic of AI cat agents.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
              <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}