import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface SubMenuItem {
  label: string;
  href: string;
}

const mainMenuItems: SubMenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Web Pages', href: '/web-pages' }
];

const videosItems: SubMenuItem[] = [
  { label: 'Vid 1', href: '/videos/vid1' },
  { label: 'Vid 2', href: '/videos/vid2' },
  { label: 'Vid 3', href: '/videos/vid3' },
  { label: 'Vid 4', href: '/videos/vid4' }
];

const prezoItems: SubMenuItem[] = [
  { label: 'Prezo 1', href: '/prezo/prezo1' },
  { label: 'Prezo 2', href: '/prezo/prezo2' },
  { label: 'Prezo 3', href: '/prezo/prezo3' },
  { label: 'Prezo 4', href: '/prezo/prezo4' }
];

const webPagesItems: SubMenuItem[] = [
  { label: 'IHOOA', href: '/ihooa' },
  { label: 'IHOOA 2', href: '/ihooa2' },
  { label: 'BwTown', href: '/web-pages' }
];

export const MainMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors">
        <span>Main</span>
        <ChevronDown size={16} />
      </button>
      
      {isHovered && (
        <div className="absolute top-full left-0 mt-0 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl min-w-[160px] border border-gray-800/50">
          <div className="py-0.5">
            {/* Main Menu Items */}
            {mainMenuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Divider */}
            <div className="my-1 border-t border-gray-800/50" />

            {/* Videos Section */}
            <div className="relative group">
              <a href="#" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                Videos
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block">
                <div className="ml-0 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl min-w-[160px] border border-gray-800/50">
                  {videosItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Prezo Section */}
            <div className="relative group">
              <a href="#" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                Prezo
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block">
                <div className="ml-0 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl min-w-[160px] border border-gray-800/50">
                  {prezoItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Web Pages Section */}
            <div className="relative group">
              <a href="#" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
                Web Pages
              </a>
              <div className="absolute left-full top-0 hidden group-hover:block">
                <div className="ml-0 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl min-w-[160px] border border-gray-800/50">
                  {webPagesItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Air Table Links */}
            <a href="/air-table" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
              Air Table
            </a>
            <a href="/air-table2" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">
              Air Table 2
            </a>
          </div>
        </div>
      )}
    </div>
  );
};