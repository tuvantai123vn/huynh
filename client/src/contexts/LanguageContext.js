import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Lấy ngôn ngữ từ localStorage hoặc mặc định là tiếng Việt
    const savedLanguage = localStorage.getItem('websiteLanguage');
    return savedLanguage || 'vi';
  });

  useEffect(() => {
    // Lưu ngôn ngữ vào localStorage
    localStorage.setItem('websiteLanguage', currentLanguage);
  }, [currentLanguage]);

  const setLanguage = (lang) => {
    setCurrentLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

