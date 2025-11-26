import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../utils/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const CIS_COUNTRIES = ['RU', 'BY', 'KZ', 'KG', 'UZ', 'TJ', 'AM', 'AZ', 'MD'];

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cashcar_lang', lang);
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    const initLanguage = async () => {
      // 1. Check Local Storage
      const savedLang = localStorage.getItem('cashcar_lang') as Language;
      if (savedLang) {
        setLanguage(savedLang);
        return;
      }

      // 2. Check Location
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
          const data = await response.json();
          const country = data.country_code;

          if (country === 'IL') {
            setLanguage('he');
          } else if (CIS_COUNTRIES.includes(country)) {
            setLanguage('ru');
          } else {
            setLanguage('en');
          }
        } else {
            // Fallback to en silently
            setLanguage('en');
        }
      } catch (error) {
        // Silently fail and default to English to avoid console errors blocked by adblockers/network rules
        setLanguage('en');
      }
    };

    initLanguage();
  }, []);

  const t = (path: string) => {
    const keys = path.split('.');
    let current: any = translations[language];
    for (const key of keys) {
      if (current[key] === undefined) return path;
      current = current[key];
    }
    return current;
  };

  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};