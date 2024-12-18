import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and satisfaction above all else.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Driven by our passion for creating meaningful digital experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000)',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-6xl font-bold text-center mb-6"
          >
            About BwTown
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-2xl"
          >
            We're on a mission to transform digital experiences through innovative solutions
            and exceptional service.
          </motion.p>
        </div>
      </div>

      {/* Values Section */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white hover:bg-white/10 transition-colors"
              >
                <Icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Our Story
          </h2>
          <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
            <p>
              Founded in 2020, BwTown has been at the forefront of digital innovation,
              helping businesses transform their online presence and connect with their
              audiences in meaningful ways.
            </p>
            <p>
              Our team of passionate professionals brings together decades of combined
              experience in technology, design, and business strategy. We believe in
              the power of technology to solve real-world problems and create lasting
              positive impact.
            </p>
            <p>
              Today, we continue to push boundaries and explore new possibilities,
              always with our clients' success as our primary focus. Our commitment
              to excellence and innovation drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};