
import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const { t, dir } = useLanguage();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const x = (e.clientX - window.innerWidth / 2) / 50; // Sensitivity divisor
        const y = (e.clientY - window.innerHeight / 2) / 50;
        setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" dir={dir}>
      {/* Background Image with Parallax Overlay */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-100 ease-out"
        style={{ transform: `translate(${offset.x}px, ${offset.y}px) scale(1.05)` }}
      >
        <img 
          src="https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/global.jpg" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/60 to-brand-black pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0a_100%)] pointer-events-none"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto mt-16">
        <div className="inline-block mb-4 px-4 py-1 rounded-full border border-brand-neon/30 bg-brand-neon/10 backdrop-blur-sm animate-fade-in-up" style={{animationDelay: '0.1s'}}>
          <span className="text-brand-neon text-sm font-bold tracking-widest uppercase">{t('hero.badge')}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold text-white mb-6 leading-tight neon-text animate-fade-in-up" style={{animationDelay: '0.3s'}}>
          {t('hero.titleStart')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-accent">{t('hero.titleEnd')}</span>
        </h1>
        
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 md:text-2xl font-light animate-fade-in-up" style={{animationDelay: '0.5s'}}>
          {t('hero.subtitle')}
        </p>
        
        <div className="mt-12 flex justify-center items-center animate-fade-in-up" style={{animationDelay: '0.7s'}}>
          <button 
            onClick={onCtaClick}
            className="group relative px-10 py-5 bg-brand-neon text-black font-bold text-xl rounded-none skew-x-[-10deg] hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.3)] hover:shadow-[0_0_40px_rgba(204,255,0,0.6)]"
          >
            <div className="skew-x-[10deg] flex items-center rtl:flex-row-reverse">
              {t('hero.ctaMain')} <ArrowRight className={`h-6 w-6 transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'mr-2 rotate-180 group-hover:-translate-x-1' : 'ml-2'}`} />
            </div>
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-500 cursor-pointer hover:text-white transition-colors">
        <ChevronDown className="h-8 w-8" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })} />
      </div>
    </div>
  );
};
