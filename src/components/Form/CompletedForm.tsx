import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { ThankYouCarousel } from '../ThankYou/ThankYouCarousel';
import { thankYouSlides } from '../../config/thankYouSlides';
import { funnelStyles } from '../../config/funnelStyles';

interface CompletedFormProps {
  funnelId?: keyof typeof funnelStyles;
}

export const CompletedForm: React.FC<CompletedFormProps> = ({ funnelId = 'funnel1' }) => {
  const style = funnelStyles[funnelId];
  const slides = thankYouSlides[funnelId];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${style.gradient}`}>
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white space-y-6 mb-12"
          >
            <Sparkles className="w-16 h-16 mx-auto text-yellow-400 animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold">Thank you!</h1>
            <p className="text-xl text-gray-300">Your response has been recorded.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ThankYouCarousel slides={slides} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};