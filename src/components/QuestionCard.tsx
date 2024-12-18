import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FormControls } from './FormControls';

interface QuestionCardProps {
  question: string;
  children: React.ReactNode;
  currentIndex: number;
  totalQuestions: number;
  onNext?: (value: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  children,
  currentIndex,
  totalQuestions,
  onNext
}) => {
  const [currentValue, setCurrentValue] = useState('');

  const handleNext = () => {
    if (currentValue.trim() && onNext) {
      onNext(currentValue);
      setCurrentValue('');
    }
  };

  // Clone and modify children to add value and onChange handlers
  const enhancedChildren = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === 'input') {
        return React.cloneElement(child, {
          value: currentValue,
          onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCurrentValue(e.target.value),
          onKeyPress: (e: React.KeyboardEvent) => {
            if (e.key === 'Enter' && currentValue.trim()) {
              handleNext();
            }
          }
        });
      } else if (child.type === 'div' && child.props.className?.includes('grid gap-3')) {
        // For select options, we don't need to track value
        return child;
      }
    }
    return child;
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-2xl mx-auto w-full"
    >
      <div className="space-y-8">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">{question}</h2>
          <div className="relative">
            {enhancedChildren}
          </div>
        </div>
        <FormControls
          currentIndex={currentIndex}
          totalQuestions={totalQuestions}
          onNext={handleNext}
          hasValue={!!currentValue.trim()}
        />
      </div>
    </motion.div>
  );
};