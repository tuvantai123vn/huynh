import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import Particles from './components/Particles';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import LoveMessage from './components/LoveMessage';
import Wish from './components/Wish';
import IPhoneSpecial from './components/IPhoneSpecial';
import InteractiveWishes from './components/InteractiveWishes';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

function App() {
  const [showConfetti, setShowConfetti] = useState(true);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.3}
          />
        )}
      </AnimatePresence>
      
      <Particles />
      
      <LanguageSwitcher />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="main-container"
      >
        <IPhoneSpecial />
        <Hero />
        <Countdown />
        <InteractiveWishes />
        <LoveMessage />
        <Wish />
      </motion.div>
    </div>
  );
}

export default App;

