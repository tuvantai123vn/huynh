import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import Particles from './Particles';
import './Fireworks.css';

function Fireworks() {
  const content = useContent();
  const [currentWishIndex, setCurrentWishIndex] = React.useState(0);

  // Chuyển đổi câu chúc mỗi 3 giây
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWishIndex((prev) => (prev + 1) % content.fireworks.wishes.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [content.fireworks.wishes.length]);

  return (
    <section className="fireworks-section">
      <Particles />
      <motion.div
        className="fireworks-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="fireworks-title"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
        >
          {content.fireworks.title}
        </motion.h2>

        <motion.p
          className="fireworks-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {content.fireworks.subtitle}
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentWishIndex}
            className="wishes-carousel"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="wish-message"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {content.fireworks.wishes[currentWishIndex]}
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <motion.div
          className="celebration-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            🎉
          </motion.span>
          <span>{content.fireworks.celebration}</span>
          <motion.span
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5
            }}
          >
            🎉
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Fireworks;

