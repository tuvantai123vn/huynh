import React from 'react';
import { motion } from 'framer-motion';
import './Memories.css';

function Memories() {
  const memoryItems = [
    {
      icon: '📸',
      title: 'Kỷ Niệm Đẹp',
      description: 'Những khoảnh khắc đáng nhớ bên nhau'
    },
    {
      icon: '🎂',
      title: 'Sinh Nhật',
      description: 'Ngày đặc biệt của em'
    },
    {
      icon: '🌙',
      title: 'Đêm Trăng',
      description: 'Những đêm ngắm trăng cùng nhau'
    },
    {
      icon: '☕',
      title: 'Cà Phê Sáng',
      description: 'Bắt đầu ngày mới bên nhau'
    }
  ];

  return (
    <section className="memories-section">
      <motion.div
        className="memories-container"
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
          Những Kỷ Niệm Đẹp
        </motion.h2>

        <div className="memories-grid">
          {memoryItems.map((item, index) => (
            <motion.div
              key={index}
              className="memory-card"
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3 + index * 0.1,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                zIndex: 10
              }}
            >
              <motion.div
                className="memory-icon"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {item.icon}
              </motion.div>
              <h3 className="memory-title">{item.title}</h3>
              <p className="memory-description">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="floating-hearts"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.span
              key={i}
              className="floating-heart"
              initial={{ y: 0, opacity: 0 }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: 'easeOut'
              }}
            >
              ❤️
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Memories;

