import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { detectDevice } from '../utils/deviceDetection';
import { useContent } from '../hooks/useContent';
import './Hero.css';

function Hero() {
  const [deviceInfo, setDeviceInfo] = useState(null);
  const content = useContent();

  useEffect(() => {
    const info = detectDevice();
    setDeviceInfo(info);
  }, []);
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

        {deviceInfo && (deviceInfo.isIPhone || deviceInfo.isIPhone12ProMax) && (
          <motion.div
            className="iphone-badge"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.5, type: 'spring', stiffness: 200 }}
          >
            <motion.span
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              📱
            </motion.span>
            <span className="iphone-text">
              {deviceInfo.isIPhone12ProMax 
                ? content.hero.iphoneBadge
                : content.hero.iphoneBadgeNormal}
            </span>
          </motion.div>
        )}

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

