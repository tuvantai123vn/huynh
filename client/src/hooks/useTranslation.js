import { useLanguage } from '../contexts/LanguageContext';
import { translations, replacePlaceholders } from '../config/language';
import { personConfig } from '../config/personConfig';

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[currentLanguage];
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    // Lấy tên phù hợp với ngôn ngữ
    const name = currentLanguage === 'zh' ? personConfig.nameZH : personConfig.nameVI;
    const sender = currentLanguage === 'zh' ? personConfig.senderNameZH : personConfig.senderNameVI;
    const fullName = currentLanguage === 'zh' ? personConfig.fullNameZH : personConfig.fullNameVI;
    
    if (typeof value === 'string') {
      return replacePlaceholders(value, name, sender, fullName);
    }
    
    if (Array.isArray(value)) {
      return value.map(item => {
        if (typeof item === 'string') {
          return replacePlaceholders(item, name, sender, fullName);
        }
        if (typeof item === 'object' && item !== null) {
          const processed = {};
          for (const [k, v] of Object.entries(item)) {
            if (typeof v === 'string') {
              processed[k] = replacePlaceholders(v, name, sender, fullName);
            } else {
              processed[k] = v;
            }
          }
          return processed;
        }
        return item;
      });
    }
    
    if (typeof value === 'object' && value !== null) {
      const processed = {};
      for (const [k, v] of Object.entries(value)) {
        if (typeof v === 'string') {
          processed[k] = replacePlaceholders(v, name, sender, fullName);
        } else {
          processed[k] = v;
        }
      }
      return processed;
    }
    
    return value || key;
  };
  
  const getName = () => {
    return currentLanguage === 'zh' ? personConfig.nameZH : personConfig.nameVI;
  };
  
  const getSenderName = () => {
    return currentLanguage === 'zh' ? personConfig.senderNameZH : personConfig.senderNameVI;
  };
  
  return { t, getName, getSenderName, currentLanguage };
};

