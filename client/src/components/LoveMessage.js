import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import './LoveMessage.css';

function LoveMessage() {
  const content = useContent();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="love-message-section">
      <motion.div
        className="love-message-container"
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
          {content.loveMessage.title}
        </motion.h2>

        <motion.div
          className="card-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.loveMessage.messages.slice(0, 4).map((message, index) => (
            <motion.div
              key={index}
              className="love-card"
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
                className="card-emoji"
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
                {message.emoji}
              </motion.div>
              <p className="card-text">{message.text}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="letter-button-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            className="letter-button"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: [
                '0 5px 20px rgba(118, 75, 162, 0.3)',
                '0 8px 30px rgba(118, 75, 162, 0.5)',
                '0 5px 20px rgba(118, 75, 162, 0.3)'
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
            {content.loveMessage.letterButton}
          </motion.button>
        </motion.div>

        <AnimatePresence>
        {isOpen && (
          <motion.div
            className="letter-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="letter-modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                className="close-modal-button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                ✕
              </motion.button>
              
              <div className="letter-modal-content">
                <motion.h3
                  className="letter-modal-title"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {content.loveMessage.letterTitle}
                </motion.h3>
                
                <motion.div
                  className="letter-modal-text"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {content.loveMessage.letterContent.split('\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </motion.div>
                
                <motion.p
                  className="letter-modal-signature"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {content.loveMessage.signature}<br />
                  <span className="sender-name">{content.loveMessage.senderName} 💕</span>
                </motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default LoveMessage;

