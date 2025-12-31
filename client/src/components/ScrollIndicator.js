import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import './ScrollIndicator.css';

function ScrollIndicator() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const { currentLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setCurrentSection(index);
        }
      });

      // Ẩn indicator khi scroll xuống
      if (window.scrollY > 100) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalSections = 5; // Hero, Countdown, InteractiveWishes, LoveMessage, Wish

  return (
    <>
      <AnimatePresence>
        {showIndicator && (
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="scroll-text"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            >
              {currentLanguage === 'zh' ? '向下滑动查看更多 👇' : 'Kéo xuống để xem thêm 👇'}
            </motion.div>
            <motion.div
              className="scroll-arrow"
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.2
              }}
            >
              ⬇️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="scroll-progress">
        {Array.from({ length: totalSections }).map((_, index) => (
          <motion.div
            key={index}
            className={`progress-dot ${currentSection === index ? 'active' : ''}`}
            onClick={() => {
              const sections = document.querySelectorAll('section');
              sections[index]?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </>
  );
}

export default ScrollIndicator;

