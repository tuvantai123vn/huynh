import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { detectDevice } from '../utils/deviceDetection';
import { useContent } from '../hooks/useContent';
import './IPhoneSpecial.css';

function IPhoneSpecial() {
  // Tắt hiển thị thông báo iPhone
  return null;

  /* Code cũ - đã tắt
  const content = useContent();
  const [deviceInfo, setDeviceInfo] = useState(null);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const info = detectDevice();
    setDeviceInfo(info);
    
    // Hiển thị thông điệp đặc biệt sau 2 giây
    if (info.isIPhone || info.isIPhone12ProMax) {
      setTimeout(() => {
        setShowMessage(true);
      }, 2000);
    }
  }, []);

  if (!deviceInfo || (!deviceInfo.isIPhone && !deviceInfo.isIPhone12ProMax)) {
    return null;
  }

  return (
    <AnimatePresence>
      {showMessage && (
        <motion.div
          className="iphone-special-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="iphone-special-card"
            initial={{ scale: 0.8, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              type: 'spring', 
              stiffness: 200, 
              delay: 0.3 
            }}
          >
            <motion.div
              className="iphone-icon"
              animate={{
                rotate: [0, 10, -10, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
            >
              📱
            </motion.div>
            
            <motion.h2
              className="iphone-title"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {deviceInfo.isIPhone12ProMax 
                ? content.iphone.title12ProMax
                : content.iphone.titleNormal}
            </motion.h2>
            
            <motion.p
              className="iphone-message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {content.iphone.message}
            </motion.p>

            <motion.div
              className="iphone-features"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {content.iphone.features.map((feature, index) => (
                <div key={index} className="feature-item">
                  <span className="feature-icon">{['🎨', '✨', '💫'][index]}</span>
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.button
              className="close-button"
              onClick={() => setShowMessage(false)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              {content.iphone.close}
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default IPhoneSpecial;

