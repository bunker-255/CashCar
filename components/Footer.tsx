
import React from 'react';
import { Zap, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t, dir } = useLanguage();
  
  const handleNav = (page: string) => {
    onNavigate(page);
  };

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400 py-12" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="col-span-1">
             <div className="flex items-center mb-4 cursor-pointer" onClick={() => handleNav('home')}>
                <div className={`bg-brand-neon p-1 rounded ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>
                  <Zap className="h-4 w-4 text-black" />
                </div>
                <span className="font-display text-xl tracking-wider text-white">
                  CASH<span className="text-brand-neon">CAR</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                {t('footer.desc')}
              </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.nav')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-brand-neon transition-colors focus:outline-none"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('gallery')} 
                  className="hover:text-brand-neon transition-colors focus:outline-none"
                >
                  {t('nav.gallery')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('how-it-works')} 
                  className="hover:text-brand-neon transition-colors focus:outline-none"
                >
                  {t('nav.howItWorks')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('waitlist')} 
                  className="hover:text-brand-neon transition-colors focus:outline-none"
                >
                  {t('nav.waitlist')}
                </button>
              </li>
            </ul>
          </div>
          
           <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">{t('footer.contacts')}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center"><Mail className={`w-4 h-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} /> CashCarOfficial@gmail.com</li>
              <li>{t('footer.address')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} CashCar Inc. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
