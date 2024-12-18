import React from 'react';
import { Globe } from 'lucide-react';

export const Logo: React.FC = () => (
  <div className="flex items-center">
    <Globe className="h-8 w-8 text-white" />
    <span className="ml-2 text-xl font-bold text-white">BwTown</span>
  </div>
);