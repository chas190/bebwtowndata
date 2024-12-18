import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Shield, ArrowRight } from 'lucide-react';
import { useIHOOAStyles } from '../styles/useIHOOAStyles';

export const IHOOA2: React.FC = () => {
  useIHOOAStyles(); // Apply IHOOA-specific styles

  return (
    <div className="ihooa-page">
      {/* Hero Section with IHOOA-specific styling */}
      <section className="ihooa-hero">
        <div className="ihooa-hero-content">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Welcome to IHOOA
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Your Trusted Partner in Property Management
          </motion.p>
          <motion.button
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="ihooa-button"
          >
            Explore Services <ArrowRight className="ml-2" size={20} />
          </motion.button>
        </div>
      </section>

      {/* Features Grid with IHOOA-specific styling */}
      <section className="ihooa-features">
        <div className="ihooa-container">
          <div className="ihooa-features-grid">
            {[
              {
                icon: Building2,
                title: 'Property Management',
                description: 'Professional management services for your property investments'
              },
              {
                icon: Users,
                title: 'Community Network',
                description: 'Connect with property owners and industry professionals'
              },
              {
                icon: Shield,
                title: 'Asset Protection',
                description: 'Comprehensive solutions to protect your real estate assets'
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="ihooa-feature-card"
                >
                  <Icon className="ihooa-icon" />
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};