
import React from 'react';
import { Car, Briefcase, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Waitlist: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="py-24 bg-brand-black relative overflow-hidden" dir={dir}>
        {/* Background elements */}
      <div className={`absolute top-0 w-1/2 h-full bg-gradient-to-l from-brand-gray to-transparent opacity-20 transform skew-x-12 ${dir === 'rtl' ? 'left-0' : 'right-0'}`}></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">{t('waitlist.title')}</h2>
          <p className="text-lg text-gray-400 font-medium mb-4">{t('waitlist.subtitle')}</p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t('waitlist.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Driver Card */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScKku-T7S9m-TFlBoNPbve0AEpGmHE2dvpIXzPYvJo6Oso4cg/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-brand-neon/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-1"
            >
                <div className="w-20 h-20 rounded-full bg-brand-neon/10 flex items-center justify-center mb-6 group-hover:bg-brand-neon group-hover:text-black text-brand-neon transition-colors duration-300">
                   <Car className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{t('waitlist.roleDriver')}</h3>
                <div className="mt-4 flex items-center text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-neon transition-colors">
                    Google Form <ExternalLink className={`w-4 h-4 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
                </div>
            </a>

            {/* Advertiser Card */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSfXMXOk7L_ziuanDoBqyDPU0m07VuiNn8rX3mew9EAm5N8LWQ/viewform?usp=dialog" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-3xl border border-gray-700 hover:border-brand-accent/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,204,255,0.15)] flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-1"
            >
                <div className="w-20 h-20 rounded-full bg-brand-accent/10 flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-black text-brand-accent transition-colors duration-300">
                   <Briefcase className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">{t('waitlist.roleAdvertiser')}</h3>
                 <div className="mt-4 flex items-center text-sm font-bold text-gray-500 uppercase tracking-widest group-hover:text-brand-accent transition-colors">
                    Google Form <ExternalLink className={`w-4 h-4 ${dir === 'rtl' ? 'mr-2' : 'ml-2'}`} />
                </div>
            </a>
        </div>

        <div className="mt-16 text-center">
            <p className="text-gray-600 text-sm">
                * By clicking the buttons above you will be redirected to a secure Google Form.
            </p>
        </div>
      </div>
    </div>
  );
};
