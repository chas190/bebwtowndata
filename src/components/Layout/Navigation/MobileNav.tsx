import React from 'react';
import { NavLink } from './NavLink';
import { MainMenu } from './MainMenu';
import { FunnelsMenu } from './FunnelsMenu';
import { LoginButton } from './LoginButton';

interface MobileNavProps {
  isOpen: boolean;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800">
      <div className="px-6 py-4 space-y-4">
        <div className="py-1">
          <MainMenu />
        </div>
        <div className="py-1">
          <FunnelsMenu />
        </div>
        <NavLink href="/contact" className="block">Contact</NavLink>
        <div className="pt-2">
          <LoginButton />
        </div>
      </div>
    </div>
  );
};