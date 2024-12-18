import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { LogIn } from 'lucide-react';

export const Logout: React.FC = () => {
  useEffect(() => {
    localStorage.removeItem('auth');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-3xl font-bold text-white mb-6">
          You have been logged out
        </h1>
        <motion.a
          href="/login"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 bg-white text-gray-900 px-6 py-3 
                   rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          <LogIn size={18} />
          <span>Log Back In</span>
        </motion.a>
      </motion.div>
    </div>
  );
};