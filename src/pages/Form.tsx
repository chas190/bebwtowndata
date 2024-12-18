import React, { useState, useCallback } from 'react';
import { CompletedForm } from '../components/Form/CompletedForm';
import { FormContent } from '../components/Form/FormContent';
import { FormState } from '../types';
import { questions } from '../config/questions';
import { funnelStyles } from '../config/funnelStyles';

export const Form: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formState, setFormState] = useState<FormState>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const pathname = window.location.pathname;
  const funnelId = pathname.startsWith('/funnel') 
    ? pathname.substring(1) as keyof typeof funnelStyles 
    : 'funnel1';

  const handleNext = useCallback((value: string) => {
    setFormState(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setIsCompleted(true);
      console.log('Form submitted:', formState);
    }
  }, [currentQuestion, formState]);

  return isCompleted ? (
    <CompletedForm funnelId={funnelId} />
  ) : (
    <FormContent
      currentQuestion={questions[currentQuestion]}
      currentIndex={currentQuestion}
      totalQuestions={questions.length}
      onNext={handleNext}
      funnelId={funnelId}
    />
  );
};