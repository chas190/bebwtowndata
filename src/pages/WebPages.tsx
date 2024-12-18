import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { categories } from '../config/webPagesCategories';

export const WebPages: React.FC = () => {
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('collapsedCategories');
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem('collapsedCategories', JSON.stringify(collapsedCategories));
  }, [collapsedCategories]);

  const toggleCategory = (categoryTitle: string) => {
    setCollapsedCategories(prev => ({
      ...prev,
      [categoryTitle]: !prev[categoryTitle]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Web Pages
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-300 text-lg"
          >
            Explore our collection of professional web solutions
          </motion.p>
        </div>

        {categories.map((category, categoryIndex) => (
          <div key={category.title} className="mb-12">
            <motion.button 
              onClick={() => toggleCategory(category.title)}
              className="w-full flex items-center justify-between text-left mb-6 group"
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {category.title}
              </motion.h2>
              <motion.div
                animate={{ rotate: collapsedCategories[category.title] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-white/80 group-hover:text-white"
              >
                <ChevronDown size={24} />
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {!collapsedCategories[category.title] && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category.cards.map((card, cardIndex) => {
                      const Icon = card.icon;
                      return (
                        <motion.div
                          key={card.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: cardIndex * 0.1 }}
                          className="relative group overflow-hidden rounded-lg"
                        >
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${card.image})` }}
                          >
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
                          </div>
                          <div className="relative p-6 h-full flex flex-col">
                            <Icon className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                            <p className="text-gray-300 mb-6 flex-grow">{card.description}</p>
                            <motion.a
                              href={card.url}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="inline-flex items-center justify-center space-x-2 bg-white/10 
                                       hover:bg-white/20 px-4 py-2 rounded-lg text-white transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Visit Site</span>
                              <Globe size={16} />
                            </motion.a>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};