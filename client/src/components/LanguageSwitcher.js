import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { languages } from '../config/language';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { currentLanguage, setLanguage } = useLanguage();

  return (
    <motion.div
      className="language-switcher"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {Object.values(languages).map((lang) => (
        <motion.button
          key={lang.code}
          className={`lang-button ${currentLanguage === lang.code ? 'active' : ''}`}
          onClick={() => setLanguage(lang.code)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <span className="lang-flag">{lang.flag}</span>
          <span className="lang-name">{lang.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
}

export default LanguageSwitcher;

