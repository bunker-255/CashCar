
import React, { useRef, useState } from 'react';
import { GalleryItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { ShieldCheck, Ban, Scaling } from 'lucide-react';

const GALLERY_DATA: GalleryItem[] = [
  { 
    id: 6, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/Bunker-255-ad.jpg', 
    title: 'Bunker-255', 
  },
  { 
    id: 7, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/cyber-world-ad.jpg', 
    title: 'CyberWorld', 
  },
  { 
    id: 8, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/iceAI-ad.jpg', 
    title: 'IceAI', 
  },
  { 
    id: 0, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/iotScreens.jpg', 
    title: 'MediaSystems', 
  },
  { 
    id: 1, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/CashCar-tesla-ad.jpg', 
    title: 'CashCar', 
  },
  { 
    id: 2, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/CashCar-Audi-a6-ad.jpg', 
    title: 'CashCar', 
  },
  { 
    id: 3, 
    imageUrl: 'https://raw.githubusercontent.com/bunker-255/CashCar/refs/heads/main/img/ads/CashCar-Berlingo-blue-ad.jpg', 
    title: 'CashCar', 
  },
];

// Interactive Card Component
const TiltCard: React.FC<{ item: GalleryItem }> = ({ item }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        
        const card = cardRef.current;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10deg
        const rotateY = ((x - centerX) / centerX) * 10;
        
        setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div 
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer h-72 border border-gray-800 hover:border-brand-neon/50 transition-colors"
            style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
            }}
        >
            <div 
                className="w-full h-full transition-transform duration-100 ease-out"
                style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) scale(1.05)`,
                }}
            >
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div 
                    className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
                    style={{ transform: 'translateZ(20px)' }}
                >
                    <h3 className="text-xl font-bold text-white drop-shadow-lg">{item.title}</h3>
                </div>
            </div>
        </div>
    );
};

export const Gallery: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <div className="py-20 bg-brand-dark relative" dir={dir}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">{t('gallery.title')}</h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">{t('gallery.subtitle')}</p>
          
          {/* Key Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 text-start">
             <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-brand-neon/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center mb-3 text-brand-neon">
                   <Scaling className={`w-6 h-6 ${dir === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                   <h3 className="font-bold text-white">{t('gallery.feat_size_title')}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{t('gallery.feat_size_desc')}</p>
             </div>

             <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-red-500/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center mb-3 text-red-400">
                   <Ban className={`w-6 h-6 ${dir === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                   <h3 className="font-bold text-white">{t('gallery.feat_control_title')}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{t('gallery.feat_control_desc')}</p>
             </div>

             <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/30 transition-all hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-center mb-3 text-blue-400">
                   <ShieldCheck className={`w-6 h-6 ${dir === 'rtl' ? 'ml-3' : 'mr-3'}`} />
                   <h3 className="font-bold text-white">{t('gallery.feat_protect_title')}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{t('gallery.feat_protect_desc')}</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_DATA.map((item) => (
            <TiltCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
