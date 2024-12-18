import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'name',
    type: 'text',
    question: '👋 What\'s your name?',
    placeholder: 'Type your name...',
  },
  {
    id: 'email',
    type: 'email',
    question: '📧 What\'s your email address?',
    placeholder: 'name@example.com',
  },
  {
    id: 'role',
    type: 'select',
    question: '💼 What describes your role best?',
    options: ['Developer', 'Designer', 'Product Manager', 'Other'],
  },
  {
    id: 'message',
    type: 'multiline',
    question: '💭 What\'s on your mind?',
    placeholder: 'Share your thoughts...',
  },
];