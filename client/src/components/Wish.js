import React from 'react';
import { motion } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import './Wish.css';

function Wish() {
  const content = useContent();

  return (
    <section className="wish-section">
      <motion.div
        className="wish-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.wish.title}
        </motion.h2>

        <motion.div
          className="wishes-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.wish.wishes.slice(0, 4).map((wish, index) => {
            const emojis = ['💕', '🌟', '🎁', '🌹'];
            return (
              <motion.div
                key={index}
                className="wish-item"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.5 + index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1 }}
              >
                <motion.div
                  className="wish-emoji"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                >
                  {emojis[index]}
                </motion.div>
                <div className="wish-text">{wish}</div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="final-message"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <motion.p
            className="final-text"
            animate={{
              textShadow: [
                '0 0 10px rgba(255, 255, 255, 0.5)',
                '0 0 20px rgba(255, 255, 255, 0.8)',
                '0 0 10px rgba(255, 255, 255, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            {content.wish.finalMessage}
          </motion.p>
          <motion.div
            className="signature-final"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p>{content.wish.signature}</p>
            <p className="name">{content.wish.senderName} 💕</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Wish;

