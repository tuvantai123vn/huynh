import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import './Hero.css';

function Hero() {
  const content = useContent();
  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.5 }}
        >
          {content.hero.title}
        </motion.h1>
        
        <motion.div
          className="heart-container"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.7 }}
        >
          <motion.div
            className="heart"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            ❤️
          </motion.div>
        </motion.div>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div
          className="sparkles"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
          <span className="sparkle">✨</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;

