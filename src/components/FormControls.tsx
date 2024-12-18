import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FormControlsProps {
  currentIndex: number;
  totalQuestions: number;
  onNext: () => void;
  hasValue: boolean;
}

export const FormControls: React.FC<FormControlsProps> = ({
  currentIndex,
  totalQuestions,
  onNext,
  hasValue
}) => {
  return (
    <div className="flex items-center justify-between text-gray-400">
      <p>Press Enter ↵</p>
      <div className="flex items-center space-x-4">
        <button
          onClick={onNext}
          disabled={!hasValue}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
            ${hasValue 
              ? 'bg-white/10 hover:bg-white/20 text-white cursor-pointer' 
              : 'bg-white/5 text-gray-500 cursor-not-allowed'
            }`}
          aria-label="Next question"
        >
          <span>Next</span>
          <ArrowRight size={16} />
        </button>
        <div className="flex items-center gap-2">
          <span>{currentIndex + 1}/{totalQuestions}</span>
          <ArrowRight className="animate-bounce" />
        </div>
      </div>
    </div>
  );
};