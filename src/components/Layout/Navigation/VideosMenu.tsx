import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const VideosMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="flex items-center space-x-1 text-gray-200 hover:text-white transition-colors">
        <span>Videos</span>
        <ChevronDown size={16} />
      </button>
      
      {isHovered && (
        <div className="absolute top-full left-0 mt-0 bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl min-w-[160px] border border-gray-800/50">
          <div className="py-0.5">
            <a href="/videos/vid1" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">Vid 1</a>
            <a href="/videos/vid2" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">Vid 2</a>
            <a href="/videos/vid3" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">Vid 3</a>
            <a href="/videos/vid4" className="block px-4 py-1.5 text-sm text-gray-200 hover:bg-white/10 transition-colors">Vid 4</a>
          </div>
        </div>
      )}
    </div>
  );
};