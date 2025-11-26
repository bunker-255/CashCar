
import React, { useState, useEffect } from 'react';
import { Car, DollarSign, PenTool, CheckCircle, Truck, Box, ArrowRight, ShieldCheck, Ban, Scaling } from 'lucide-react';
import { StepItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const TRUCK_FORMATS = [
  {
    id: 1,
    title: "Side Banner (Standard)",
    area: "60 ft²",
    dimensions: "5' x 12'",
    image: "https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/size/60ft.jpg",
    highlight: "Side Panel",
    multiplier: 3
  },
  {
    id: 2,
    title: "Full Side Canvas",
    area: "200 - 408 ft²",
    dimensions: "96\" x 15' to 51'",
    image: "https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/size/200ft-408ft.jpg",
    highlight: "Full Side",
    multiplier: 5
  },
  {
    id: 3,
    title: "Rear Doors",
    area: "56 - 58 ft²",
    dimensions: "92\" x 88\"",
    image: "https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/size/56ft.jpg",
    highlight: "Back Doors",
    multiplier: 2
  },
  {
    id: 4,
    title: "Total Coverage",
    area: "Full Wrap",
    dimensions: "Side + Rear",
    image: "https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/size/200ft-408ft+58ft.jpg",
    highlight: "Max Impact",
    multiplier: 8
  }
];

export const HowItWorks: React.FC = () => {
  const { t, dir } = useLanguage();
  
  const STEPS: StepItem[] = [
    { id: 1, title: t('howItWorks.steps.0.title'), description: t('howItWorks.steps.0.desc'), iconName: 'PenTool' },
    { id: 2, title: t('howItWorks.steps.1.title'), description: t('howItWorks.steps.1.desc'), iconName: 'Car' },
    { id: 3, title: t('howItWorks.steps.2.title'), description: t('howItWorks.steps.2.desc'), iconName: 'DollarSign' },
  ];

  return (
    <div className="bg-brand-black min-h-screen" dir={dir}>
      {/* Hero Section of Page */}
      <div className="py-20 bg-gradient-to-b from-brand-dark to-brand-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 text-center">
                {t('howItWorks.title')} <span className="text-brand-neon">{t('howItWorks.titleHighlight')}</span>
              </h2>
              <div className="space-y-12 max-w-2xl mx-auto">
                {STEPS.map((step, index) => (
                  <div key={step.id} className="flex relative">
                     {/* Line connector */}
                    {index !== STEPS.length - 1 && (
                      <div className={`absolute top-16 w-0.5 h-16 bg-gray-800 ${dir === 'rtl' ? 'right-6' : 'left-6'}`}></div>
                    )}
                    
                    <div className={`flex-shrink-0 ${dir === 'rtl' ? 'ml-6' : 'mr-6'}`}>
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 border border-gray-700 text-brand-neon shadow-[0_0_15px_rgba(204,255,0,0.1)] transition-transform hover:scale-110 duration-300">
                        {step.iconName === 'PenTool' && <PenTool className="w-6 h-6" />}
                        {step.iconName === 'Car' && <Car className="w-6 h-6" />}
                        {step.iconName === 'DollarSign' && <DollarSign className="w-6 h-6" />}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-brand-neon/30 transition-colors max-w-2xl mx-auto">
                  <div className="flex items-start">
                      <CheckCircle className={`w-6 h-6 text-brand-neon mt-1 flex-shrink-0 ${dir === 'rtl' ? 'ml-4' : 'mr-4'}`} />
                      <div>
                          <h4 className="text-white font-bold mb-1">{t('howItWorks.legalTitle')}</h4>
                          <p className="text-sm text-gray-400">{t('howItWorks.legalDesc')}</p>
                      </div>
                  </div>
              </div>
            </div>
        </div>
      </div>

      {/* New Section: Control & Quality */}
      <div className="py-24 bg-brand-dark border-t border-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                 <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
                    {t('control.title')}
                 </h2>
                 <div className="w-24 h-1 bg-brand-neon mx-auto rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Card 1: Size */}
                <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                    <div className="w-16 h-16 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:bg-brand-accent group-hover:text-black transition-colors">
                        <Scaling className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('control.size_title')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {t('control.size_desc')}
                    </p>
                </div>

                 {/* Card 2: Blacklist */}
                 <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                    <div className="w-16 h-16 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500 group-hover:bg-red-500 group-hover:text-white transition-colors">
                        <Ban className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('control.blacklist_title')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {t('control.blacklist_desc')}
                    </p>
                </div>

                 {/* Card 3: Protection */}
                 <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group">
                    <div className="w-16 h-16 bg-brand-neon/10 rounded-xl flex items-center justify-center mb-6 text-brand-neon group-hover:bg-brand-neon group-hover:text-black transition-colors">
                        <ShieldCheck className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{t('control.protection_title')}</h3>
                    <p className="text-gray-400 leading-relaxed">
                        {t('control.protection_desc')}
                    </p>
                </div>
            </div>
        </div>
      </div>

      {/* Truck / Commercial Section */}
      <div className="py-24 bg-brand-black border-t border-gray-800 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 text-brand-accent text-sm font-bold uppercase tracking-widest mb-6">
              <Truck className={`w-4 h-4 ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`} /> Truck & Fleet
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
              {t('howItWorks.truckTitle')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-neon to-brand-accent">{t('howItWorks.truckTitleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              {t('howItWorks.truckDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUCK_FORMATS.map((format) => (
              <div key={format.id} className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-brand-neon/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(204,255,0,0.1)]">
                {/* Technical Overlay */}
                <div className={`absolute top-4 z-20 flex flex-col gap-2 ${dir === 'rtl' ? 'left-4 items-start' : 'right-4 items-end'}`}>
                   <span className="bg-black/80 backdrop-blur px-3 py-1 rounded text-xs font-mono text-brand-neon border border-brand-neon/20">
                     {format.dimensions}
                   </span>
                </div>

                <div className="h-48 overflow-hidden relative bg-gray-800">
                   <div className="absolute inset-0 bg-brand-neon/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                   <img 
                    src={format.image} 
                    alt={format.title} 
                    className="w-full h-full object-contain p-2 transform group-hover:scale-110 transition-transform duration-700"
                   />
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                        <p className="text-xs text-brand-accent font-bold uppercase tracking-wider mb-1">{format.highlight}</p>
                        <h3 className="text-base font-bold text-white group-hover:text-brand-neon transition-colors">{format.title}</h3>
                    </div>
                  </div>
                  
                  <div className="flex items-baseline mb-4">
                    <span className={`text-2xl font-display font-bold text-white ${dir === 'rtl' ? 'ml-2' : 'mr-2'}`}>{format.area}</span>
                  </div>
                  
                  <div className="mt-4 flex items-center text-brand-neon text-sm font-bold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    {t('howItWorks.truckCta')} <ArrowRight className={`w-4 h-4 ${dir === 'rtl' ? 'mr-2 rotate-180' : 'ml-2'}`} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between hover:bg-gray-900 transition-colors">
            <div className="flex items-center mb-6 md:mb-0">
               <Box className={`w-10 h-10 text-brand-accent ${dir === 'rtl' ? 'ml-4' : 'mr-4'}`} />
               <div>
                  <h4 className="text-white font-bold text-lg">{t('howItWorks.b2bTitle')}</h4>
                  <p className="text-gray-400 text-sm">{t('howItWorks.b2bDesc')}</p>
               </div>
            </div>
            <button className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-white rounded-lg transition-all font-medium hover:scale-105">
               {t('howItWorks.b2bBtn')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
