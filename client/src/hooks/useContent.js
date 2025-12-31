import { useLanguage } from '../contexts/LanguageContext';
import { vietnameseContent } from '../content/vietnamese';
import { chineseContent } from '../content/chinese';

export const useContent = () => {
  const { currentLanguage } = useLanguage();
  
  const content = currentLanguage === 'zh' ? chineseContent : vietnameseContent;
  
  return content;
};

