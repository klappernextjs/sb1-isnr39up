import React from 'react';
import { motion } from 'framer-motion';
import { Wand2, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Wand2,
    title: "Create",
    description: "Design your unique cat agent with custom traits and abilities",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: ShoppingBag,
    title: "Trade",
    description: "Buy and sell cat agents in our secure marketplace",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: MessageSquare,
    title: "Interact",
    description: "Chat and collaborate with your AI-powered feline companion",
    color: "from-green-500 to-teal-500"
  }
];

export default function HowItWorks() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">
            Get started with your own AI cat agent in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <React.Fragment key={step.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}