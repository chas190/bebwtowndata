import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Globe, Users, MessageSquare } from 'lucide-react';

export const IHOOA: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
          <div className="relative h-full container mx-auto px-4 flex flex-col items-center justify-center text-white">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-5xl md:text-7xl font-bold text-center mb-6"
            >
              IHOOA
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-center max-w-3xl mb-12"
            >
              International Home Owners Association
            </motion.p>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center space-x-2 bg-white text-gray-900 px-8 py-4 rounded-full
                       font-semibold hover:bg-gray-100 transition-colors"
            >
              <span>Join Now</span>
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Connect with homeowners worldwide and share experiences.'
              },
              {
                icon: Users,
                title: 'Community Support',
                description: 'Get support from experienced homeowners and experts.'
              },
              {
                icon: MessageSquare,
                title: 'Expert Advice',
                description: 'Access professional guidance for property management.'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="inline-block p-4 bg-gray-100 rounded-full mb-6">
                    <Icon size={32} className="text-gray-900" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">
            Ready to Join IHOOA?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">
            Become part of our growing community of homeowners and gain access to exclusive
            resources, support, and networking opportunities.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-4 
                     rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            <span>Get Started</span>
            <ChevronRight size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
};