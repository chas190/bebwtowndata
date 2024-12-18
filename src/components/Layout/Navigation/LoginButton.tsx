import React from 'react';
import { motion } from 'framer-motion';
import { LogIn, LogOut } from 'lucide-react';
import { useAuth } from '../../../hooks/useAuth';

export const LoginButton: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  if (isAuthenticated) {
    return (
      <motion.button
        onClick={logout}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 rounded-lg 
                 hover:bg-red-500/30 text-white transition-colors duration-200"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{
          rotate: {
            repeat: Infinity,
            repeatDelay: 5,
            duration: 0.5
          }
        }}
      >
        <LogOut size={16} />
        <span>Logout</span>
      </motion.button>
    );
  }

  return (
    <motion.a
      href="/login"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center space-x-2 px-4 py-2 bg-white/10 rounded-lg 
               hover:bg-white/20 text-white transition-colors duration-200"
      animate={{ rotate: [0, 2, -2, 0] }}
      transition={{
        rotate: {
          repeat: Infinity,
          repeatDelay: 5,
          duration: 0.5
        }
      }}
    >
      <LogIn size={16} />
      <span>Login</span>
    </motion.a>
  );
};