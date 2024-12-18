import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FormControlsProps {
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  hasValue: boolean;
  funnelId?: string;
}

export const FormControls: React.FC<FormControlsProps> = ({
  currentIndex,
  totalQuestions,
  onNext,
  hasValue,
  funnelId = 'funnel1'
}) => {
  const isFunnel5 = funnelId === 'funnel5';
  
  return (
    <div className="flex items-center justify-between text-gray-400">
      <p>Press Enter ↵</p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center gap-2">
          <span>{currentIndex + 1}/{totalQuestions}</span>
        </div>
        <button
          onClick={onNext}
          disabled={!hasValue}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
            ${hasValue 
              ? `bg-white/10 hover:bg-white/20 text-white cursor-pointer
                 ${isFunnel5 ? 'shadow-[0_4px_20px_2px_rgba(244,63,94,0.5)] hover:shadow-[0_4px_25px_3px_rgba(244,63,94,0.6)]' : ''}`
              : 'bg-white/5 text-gray-500 cursor-not-allowed'
            }`}
          aria-label="Next question"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};