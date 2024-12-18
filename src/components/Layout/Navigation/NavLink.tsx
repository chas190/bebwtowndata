import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => (
  <a 
    href={href} 
    className={`text-gray-200 hover:text-white transition-colors ${className}`}
  >
    {children}
  </a>
);