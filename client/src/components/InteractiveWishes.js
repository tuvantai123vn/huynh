import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import './InteractiveWishes.css';

function InteractiveWishes() {
  const content = useContent();
  const [showWish, setShowWish] = useState(false);
  const [currentWish, setCurrentWish] = useState(0);

  const handleClick = () => {
    if (!showWish) {
      setShowWish(true);
    } else {
      // Chuyển sang lời chúc tiếp theo
      setCurrentWish((prev) => (prev + 1) % content.interactiveWishes.wishes.length);
    }
  };

  const handleClose = (e) => {
    e.stopPropagation();
    setShowWish(false);
  };

  return (
    <section className="interactive-wishes-section">
      <motion.div
        className="wish-trigger-container"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="wish-button"
          onClick={handleClick}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 182, 193, 0.5)',
              '0 0 40px rgba(255, 182, 193, 0.8)',
              '0 0 20px rgba(255, 182, 193, 0.5)'
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
            className="button-icon"
            animate={{
              rotate: [0, 15, -15, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 1
            }}
          >
            🎁
          </motion.span>
          <span className="button-text">{content.interactiveWishes.button}</span>
          <motion.span
            className="button-arrow"
            animate={{
              x: [0, 5, 0]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            👆
          </motion.span>
        </motion.div>

        <AnimatePresence>
          {showWish && (
            <motion.div
              className="wish-popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
            >
              <motion.div
                className="wish-popup"
                initial={{ opacity: 0, scale: 0.5, x: -200, rotate: -10 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  x: [0, 10, -10, 5, -5, 0],
                  rotate: 0
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.5, 
                  x: 200, 
                  rotate: 10 
                }}
                transition={{
                  opacity: { duration: 0.3 },
                  scale: { 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  },
                  x: {
                    duration: 0.6,
                    repeat: 2,
                    ease: 'easeInOut',
                    delay: 0.3
                  },
                  rotate: { 
                    type: 'spring',
                    stiffness: 300,
                    damping: 20
                  }
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="close-popup"
                  onClick={handleClose}
                  whileHover={{ scale: 1.2, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ✕
                </motion.button>

                <motion.div
                  key={currentWish}
                  className="wish-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="wish-emoji"
                    animate={{
                      rotate: [0, 20, -20, 20, 0],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  >
                    {content.interactiveWishes.wishes[currentWish].emoji}
                  </motion.div>

                  <motion.h3
                    className="wish-title"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {content.interactiveWishes.wishes[currentWish].title}
                  </motion.h3>

                  <motion.p
                    className="wish-message"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {content.interactiveWishes.wishes[currentWish].message}
                  </motion.p>
                </motion.div>

                <motion.div
                  className="wish-navigation"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.button
                    className="nav-button prev"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentWish((prev) => (prev - 1 + content.interactiveWishes.wishes.length) % content.interactiveWishes.wishes.length);
                    }}
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {content.interactiveWishes.prev}
                  </motion.button>
                  
                  <span className="wish-counter">
                    {currentWish + 1} / {content.interactiveWishes.wishes.length}
                  </span>
                  
                  <motion.button
                    className="nav-button next"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentWish((prev) => (prev + 1) % content.interactiveWishes.wishes.length);
                    }}
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {content.interactiveWishes.next}
                  </motion.button>
                </motion.div>

                <motion.div
                  className="wish-hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {content.interactiveWishes.hint}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default InteractiveWishes;

