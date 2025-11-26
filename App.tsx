
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { HowItWorks } from './components/HowItWorks';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { Stats, Features, Testimonials, CtaBanner, AdvertiserBenefits } from './components/HomeContent';
import { LanguageProvider } from './contexts/LanguageContext';

function CashCarApp() {
  const [activePage, setActivePage] = useState('home');

  const navigateTo = (pageId: string) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'gallery':
        return (
          <div className="page-enter pt-20 min-h-screen">
             <Gallery />
          </div>
        );
      case 'how-it-works':
        return (
          <div className="page-enter pt-20 min-h-screen">
             <HowItWorks />
          </div>
        );
      case 'waitlist':
        return (
          <div className="page-enter pt-20 min-h-screen">
             <Waitlist />
          </div>
        );
      case 'home':
      default:
        return (
          <div className="page-enter">
            <Hero onCtaClick={() => navigateTo('waitlist')} />
            <Stats />
            <Features />
            <AdvertiserBenefits />
            <Testimonials />
            <CtaBanner onCtaClick={() => navigateTo('waitlist')} />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-neon selection:text-black flex flex-col">
      <Navbar onNavigate={navigateTo} currentPage={activePage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <CashCarApp />
    </LanguageProvider>
  );
}

export default App;
