import React from 'react';
import { Globe, Twitter, Facebook, Instagram, Mail } from 'lucide-react';
import { NavLink } from './Navigation/NavLink';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900/90 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Globe className="h-6 w-6" />
              <span className="ml-2 text-lg font-bold">BwTown</span>
            </div>
            <p className="text-sm text-gray-300">
              Creating beautiful digital experiences that connect and inspire.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><NavLink href="#">Home</NavLink></li>
              <li><NavLink href="#">About</NavLink></li>
              <li><NavLink href="#">Services</NavLink></li>
              <li><NavLink href="#">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>123 Digital Street</li>
              <li>Tech City, TC 12345</li>
              <li>contact@bwtown.com</li>
              <li>(555) 123-4567</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Twitter, label: 'Twitter' },
                { icon: Facebook, label: 'Facebook' },
                { icon: Instagram, label: 'Instagram' },
                { icon: Mail, label: 'Email' }
              ].map(({ icon: Icon, label }) => (
                <a 
                  key={label}
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-300">
          <p>&copy; {new Date().getFullYear()} BwTown. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};