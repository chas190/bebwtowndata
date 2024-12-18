import React from 'react';
import { Menu, X } from 'lucide-react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MenuButton: React.FC<MenuButtonProps> = ({ isOpen, onClick }) => (
  <button 
    className="md:hidden text-white hover:text-gray-200 transition-colors"
    onClick={onClick}
    aria-label={isOpen ? 'Close menu' : 'Open menu'}
  >
    {isOpen ? <X size={24} /> : <Menu size={24} />}
  </button>
);