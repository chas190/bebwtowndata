import React, { useState } from 'react';
import { Logo } from './Navigation/Logo';
import { DesktopNav } from './Navigation/DesktopNav';
import { MobileNav } from './Navigation/MobileNav';
import { MenuButton } from './Navigation/MenuButton';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <DesktopNav />
          <MenuButton 
            isOpen={isMenuOpen} 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
          />
        </div>
        <MobileNav isOpen={isMenuOpen} />
      </nav>
    </header>
  );
};