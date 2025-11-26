
import React, { useEffect, useState, useRef } from 'react';
import { TrendingUp, Shield, Sliders, Star, MapPin, Eye, Target, BarChart3, Wallet } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Animated Counter Component
const AnimatedCounter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuad = (t: number) => t * (2 - t);
      
      setCount(Math.floor(easeOutQuad(progress) * end));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const Stats: React.FC = () => {
  const { t, dir } = useLanguage();
  return (
    <div className="bg-brand-dark py-12 border-b border-gray-800" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2 group">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-500">
              <AnimatedCounter end={12} suffix="M" />
              <span className="text-brand-neon">+</span>
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t('stats.paid')}</p>
          </div>
          <div className="space-y-2 group">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-500">
              <AnimatedCounter end={850} />
              <span className="text-brand-neon">+</span>
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t('stats.cars')}</p>
          </div>
          <div className="space-y-2 group">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-500">
              <AnimatedCounter end={40} />
              <span className="text-brand-neon">+</span>
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t('stats.cities')}</p>
          </div>
          <div className="space-y-2 group">
             <h3 className="text-4xl md:text-5xl font-display font-bold text-white group-hover:text-brand-neon transition-colors duration-500">
              <AnimatedCounter end={150} />
              <span className="text-brand-neon">%</span>
            </h3>
            <p className="text-gray-400 text-sm uppercase tracking-wider">{t('stats.growth')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC = () => {
  const { t, dir } = useLanguage();
  const features = [
    {
      icon: <TrendingUp className="w-8 h-8 text-black" />,
      title: t('features.f1_title'),
      desc: t('features.f1_desc')
    },
    {
      icon: <Shield className="w-8 h-8 text-black" />,
      title: t('features.f2_title'),
      desc: t('features.f2_desc')
    },
    {
      icon: <Sliders className="w-8 h-8 text-black" />,
      title: t('features.f3_title'),
      desc: t('features.f3_desc')
    }
  ];

  return (
    <div className="py-24 bg-brand-black" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            {t('features.title')} <span className="text-brand-neon">CashCar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-brand-neon/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(204,255,0,0.05)]"
            >
              <div className="w-16 h-16 bg-brand-neon rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-[0_0_15px_rgba(204,255,0,0.3)]">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-neon transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const AdvertiserBenefits: React.FC = () => {
  const { t, dir } = useLanguage();
  const benefits = [
    {
      icon: <Eye className="w-8 h-8 text-brand-accent" />,
      title: t('advertisers.b1_title'),
      desc: t('advertisers.b1_desc')
    },
    {
      icon: <Target className="w-8 h-8 text-brand-accent" />,
      title: t('advertisers.b2_title'),
      desc: t('advertisers.b2_desc')
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-brand-accent" />,
      title: t('advertisers.b3_title'),
      desc: t('advertisers.b3_desc')
    },
    {
      icon: <Wallet className="w-8 h-8 text-brand-accent" />,
      title: t('advertisers.b4_title'),
      desc: t('advertisers.b4_desc')
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-brand-black to-gray-900" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            {t('advertisers.title')} <span className="text-brand-accent">CashCar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('advertisers.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-brand-accent/50 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,204,255,0.1)]"
            >
              <div className="w-14 h-14 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-accent/20 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-accent transition-colors">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Testimonials: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const reviews = [
    {
      name: t('testimonials.r1.name'),
      car: t('testimonials.r1.car'),
      text: t('testimonials.r1.text'),
      seed: 'driver34'
    },
    {
      name: t('testimonials.r2.name'),
      car: t('testimonials.r2.car'),
      text: t('testimonials.r2.text'),
      seed: 'driver82'
    },
    {
      name: t('testimonials.r3.name'),
      car: t('testimonials.r3.car'),
      text: t('testimonials.r3.text'),
      seed: 'driver19'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-gray-900 to-brand-black relative overflow-hidden" dir={dir}>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 text-center">
          {t('testimonials.title')}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div key={idx} className="bg-black/50 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm hover:border-gray-500 hover:bg-black/80 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <img 
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.seed}`}
                  alt="Avatar" 
                  className={`w-12 h-12 rounded-full border-2 border-brand-neon/50 bg-gray-800 ${dir === 'rtl' ? 'ml-4' : 'mr-4'}`} 
                />
                <div>
                  <h4 className="text-white font-bold">{review.name}</h4>
                  <div className="flex text-brand-neon">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 italic text-sm leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="mt-auto flex items-center text-xs text-gray-500 uppercase font-bold tracking-wider">
                <MapPin className={`w-3 h-3 ${dir === 'rtl' ? 'ml-1' : 'mr-1'}`} /> {review.car}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const CtaBanner: React.FC<{ onCtaClick: () => void }> = ({ onCtaClick }) => {
  const { t, dir } = useLanguage();
  return (
    <div className="py-20 relative overflow-hidden group" dir={dir}>
      <div className="absolute inset-0 bg-brand-neon transition-colors duration-700 group-hover:bg-[#bbee00]"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-black text-black mb-6 uppercase leading-none transform -skew-x-6 transition-transform duration-500 group-hover:-skew-x-3">
          {t('ctaBanner.title')}
        </h2>
        <p className="text-xl font-bold text-black/80 mb-8 max-w-2xl mx-auto">
          {t('ctaBanner.subtitle')}
        </p>
        <button 
          onClick={onCtaClick}
          className="bg-black text-white px-10 py-5 text-xl font-bold rounded-none hover:bg-gray-900 transition-all transform hover:scale-110 shadow-2xl skew-x-[-10deg] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
        >
          <span className="block skew-x-[10deg]">{t('waitlist.btnSubmit')}</span>
        </button>
      </div>
    </div>
  );
};
