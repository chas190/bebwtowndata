import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Palette, BarChart, Globe, Shield, 
  MessageSquare, Smartphone, Cloud
} from 'lucide-react';

export const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with the latest technologies.'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love.'
    },
    {
      icon: BarChart,
      title: 'Analytics',
      description: 'Data-driven insights to grow your business.'
    },
    {
      icon: Globe,
      title: 'Digital Marketing',
      description: 'Reach your target audience effectively.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Protect your digital assets with enterprise-grade security.'
    },
    {
      icon: MessageSquare,
      title: 'Consulting',
      description: 'Expert guidance for your digital transformation.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2000)',
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-2xl"
          >
            Comprehensive digital solutions tailored to your needs
          </motion.p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 text-white 
                         hover:bg-white/10 transition-all duration-300
                         hover:transform hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900/50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-12">
            Let's work together to bring your vision to life. Our team is ready
            to help you achieve your digital goals.
          </p>
          <motion.a
            href="/form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-purple-500 hover:bg-purple-600 px-8 py-4 rounded-lg
                     text-white font-semibold transition-colors"
          >
            Contact Us
          </motion.a>
        </div>
      </div>
    </div>
  );
};