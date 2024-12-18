import React from 'react';
import { MainMenu } from './MainMenu';
import { FunnelsMenu } from './FunnelsMenu';
import { LoginButton } from './LoginButton';

export const DesktopNav: React.FC = () => (
  <div className="hidden md:flex items-center space-x-8">
    <MainMenu />
    <FunnelsMenu />
    <a href="/contact" className="text-gray-200 hover:text-white transition-colors">Contact</a>
    <LoginButton />
  </div>
);