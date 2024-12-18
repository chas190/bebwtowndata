import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Question } from '../../types';
import { QuestionCard } from './QuestionCard';
import { ProgressBar } from '../ProgressBar';
import { Carousel } from '../Carousel/Carousel';
import { funnelStyles } from '../../config/funnelStyles';

interface FormContentProps {
  currentQuestion: Question;
  currentIndex: number;
  totalQuestions: number;
  onNext: (value: string) => void;
  funnelId?: keyof typeof funnelStyles;
}

export const FormContent: React.FC<FormContentProps> = ({
  currentQuestion,
  currentIndex,
  totalQuestions,
  onNext,
  funnelId = 'funnel1'
}) => {
  const style = funnelStyles[funnelId];

  return (
    <div className={`min-h-screen bg-gradient-to-br ${style.gradient}`}>
      <div className="container mx-auto p-6 mt-20">
        <ProgressBar progress={(currentIndex / totalQuestions) * 100} />
        
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Carousel - First on mobile, right side on desktop */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-[500px] order-1 lg:order-2">
            <Carousel images={style.images} />
          </div>

          {/* Form Content - Second on mobile, left side on desktop */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <QuestionCard
                key={currentQuestion.id}
                question={currentQuestion.question}
                currentIndex={currentIndex}
                totalQuestions={totalQuestions}
                onNext={onNext}
                funnelId={funnelId}
              >
                {currentQuestion.type === 'select' ? (
                  <div className="grid gap-3">
                    {currentQuestion.options?.map((option) => (
                      <button
                        key={option}
                        onClick={() => onNext(option)}
                        className="w-full text-left px-6 py-4 rounded-lg bg-white/10 hover:bg-white/20 
                                 text-white transition-colors duration-200"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : (
                  <input
                    type={currentQuestion.type}
                    placeholder={currentQuestion.placeholder}
                    className="w-full bg-transparent border-b-2 border-white/20 px-2 py-4 text-2xl 
                             text-white placeholder-white/50 focus:border-white focus:outline-none
                             transition-colors duration-200"
                    autoFocus
                  />
                )}
              </QuestionCard>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};