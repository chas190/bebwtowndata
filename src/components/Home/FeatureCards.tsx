import React from 'react';
import { Building2, Store, Home } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Real Estate',
    description: 'Transform your property business with our advanced real estate solutions. Perfect for agents and brokers.',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
    link: '/funnel1'
  },
  {
    title: 'Local Business',
    description: 'Boost your local business presence and connect with more customers in your area.',
    icon: Store,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    link: '/funnel2'
  },
  {
    title: 'Home Owner',
    description: 'Manage your property efficiently with our comprehensive home management tools.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=800',
    link: '/funnel3'
  },
];

export const FeatureCards: React.FC = () => {
  return (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-cover bg-center rounded-xl"
                     style={{ backgroundImage: `url(${card.image})` }}>
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] rounded-xl group-hover:bg-black/70 transition-colors" />
                </div>
                <div className="relative p-8 text-white h-full flex flex-col">
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-gray-300 mb-8 flex-grow">{card.description}</p>
                  <motion.a
                    href={card.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg
                             text-white font-semibold text-center transition-colors"
                  >
                    Demo
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Form Button */}
        <div className="flex justify-center">
          <motion.a
            href="/form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg
                     text-white font-semibold text-center transition-colors text-lg shadow-lg"
          >
            Main Form
          </motion.a>
        </div>
      </div>
    </div>
  );
};