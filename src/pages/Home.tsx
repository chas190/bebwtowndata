import React from 'react';
import { HeroSlider } from '../components/Home/HeroSlider';
import { FeatureCards } from '../components/Home/FeatureCards';

export const Home: React.FC = () => {
  return (
    <div>
      <HeroSlider />
      <FeatureCards />
    </div>
  );
};