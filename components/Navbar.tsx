import React, { useState } from 'react';
import { Menu, X, Zap, Globe } from 'lucide-react';
import { NavItem, Language } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { t, language, setLanguage, dir } = useLanguage();

  const NAV_ITEMS: NavItem[] = [
    { id: 'home', label: t('nav.home'), href: '#' },
    { id: 'gallery', label: t('nav.gallery'), href: '#gallery' },
    { id: 'how-it-works', label: t('nav.howItWorks'), href: '#how-it-works' },
    { id: 'waitlist', label: t('nav.waitlist'), href: '#waitlist' },
  ];

  const handleNav = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
    setLangMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div className={`bg-brand-neon p-2 rounded-lg ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>
              <Zap className="h-6 w-6 text-black" />
            </div>
            <span className="font-display text-2xl tracking-wider text-white">
              CASH<span className="text-brand-neon">CAR</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className={`flex items-baseline space-x-8 ${dir === 'rtl' ? 'space-x-reverse mr-10' : 'ml-10'}`}>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNav(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === item.id
                      ? 'text-brand-neon bg-white/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center">
            <div className="relative">
              <button 
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className={`uppercase font-bold text-sm ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`}>{language}</span>
              </button>
              
              {langMenuOpen && (
                <div className={`absolute top-full mt-2 w-32 bg-gray-900 border border-gray-700 rounded-lg shadow-xl overflow-hidden ${dir === 'rtl' ? 'left-0' : 'right-0'}`}>
                  <button onClick={() => toggleLanguage('en')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 ${language === 'en' ? 'text-brand-neon' : 'text-white'}`}>English</button>
                  <button onClick={() => toggleLanguage('ru')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 ${language === 'ru' ? 'text-brand-neon' : 'text-white'}`}>Русский</button>
                  <button onClick={() => toggleLanguage('he')} className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-800 ${language === 'he' ? 'text-brand-neon' : 'text-white'}`}>עברית</button>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex md:hidden gap-4">
             {/* Mobile Lang Switcher */}
             <button 
                onClick={() => {
                   if(language === 'en') setLanguage('ru');
                   else if(language === 'ru') setLanguage('he');
                   else setLanguage('en');
                }}
                className="flex items-center justify-center p-2 text-gray-400 hover:text-white"
              >
                <span className="uppercase font-bold text-sm">{language}</span>
             </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'text-brand-neon bg-gray-900'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};