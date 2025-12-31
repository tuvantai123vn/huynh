import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Fireworks from './Fireworks';
import { useContent } from '../hooks/useContent';
import './Countdown.css';

function Countdown() {
  const content = useContent();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isNewYear, setIsNewYear] = useState(false);
  const [showFireworks, setShowFireworks] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2026-01-01T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsNewYear(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsNewYear(true);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: content.countdown.days, value: timeLeft.days },
    { label: content.countdown.hours, value: timeLeft.hours },
    { label: content.countdown.minutes, value: timeLeft.minutes },
    { label: content.countdown.seconds, value: timeLeft.seconds }
  ];

  const handleCelebrateClick = () => {
    setShowFireworks(true);
  };

  // Hiển thị pháo hoa nếu đã qua năm mới hoặc click nút
  if (isNewYear || showFireworks) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="fireworks"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
        >
          <Fireworks />
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <section className="countdown-section">
      <motion.div
        className="countdown-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="countdown-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.countdown.title}
        </motion.h2>
        
        <div className="countdown-grid">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              className="countdown-item"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + index * 0.1,
                type: 'spring',
                stiffness: 200
              }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="countdown-number"
                key={unit.value}
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                {unit.value.toString().padStart(2, '0')}
              </motion.div>
              <div className="countdown-label">{unit.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="celebrate-button-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            className="celebrate-button"
            onClick={handleCelebrateClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 5px 20px rgba(255, 215, 0, 0.4)',
                '0 8px 30px rgba(255, 215, 0, 0.6)',
                '0 5px 20px rgba(255, 215, 0, 0.4)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut'
              }
            }}
          >
            <motion.span
              className="button-emoji"
              animate={{
                rotate: [0, 15, -15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              🎉
            </motion.span>
            <span className="button-text">{content.countdown.celebrateButton}</span>
            <motion.span
              className="button-emoji"
              animate={{
                rotate: [0, -15, 15, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.3
              }}
            >
              🎊
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Countdown;

