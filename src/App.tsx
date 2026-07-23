/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { translations } from './data/translations';
import { Language } from './types';

// Component Imports
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Offers from './components/Offers';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Arabic is the primary language, English secondary
  const [lang, setLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('lang');
      if (saved === 'ar' || saved === 'en') return saved as Language;
      const nav = (navigator.language || (navigator.languages && navigator.languages[0]) || 'en').toLowerCase();
      return nav.startsWith('ar') ? 'ar' : 'en';
    } catch (err) {
      return 'ar';
    }
  });
  const [inquiryMessage, setInquiryMessage] = useState<string>('');

  // Sync HTML attributes for bidirectional RTL/LTR support and font accessibility
  useEffect(() => {
    try {
      localStorage.setItem('lang', lang);
    } catch (err) {
      // ignore
    }
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => {
      const next = prev === 'ar' ? 'en' : 'ar';
      try { localStorage.setItem('lang', next); } catch {}
      return next;
    });
  };

  const handleInquire = (text: string) => {
    setInquiryMessage(text);
  };

  const t = translations[lang];

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased selection:bg-brand-pink-100 selection:text-brand-pink-800">
      
      {/* 1. Navbar / Header */}
      <Navbar lang={lang} t={t} toggleLang={toggleLang} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        
        {/* 2. Hero Section */}
        <Hero lang={lang} t={t} onInquire={handleInquire} />

        {/* 3. About Us Section */}
        <About lang={lang} t={t} />

        {/* 4. Product Categories Section */}
        <Categories lang={lang} t={t} onInquire={handleInquire} />

        {/* 5. Special Offers Section */}
        <Offers lang={lang} t={t} onInquire={handleInquire} />

        {/* 6. Why Choose Us Section */}
        <WhyChooseUs lang={lang} t={t} />

        {/* 7. Store & Product Gallery Section */}
        <Gallery lang={lang} t={t} />

        {/* 8. Contact & Inquiry Form Section with Map */}
        <Contact 
          lang={lang} 
          t={t} 
          inquiryMessage={inquiryMessage} 
          setInquiryMessage={setInquiryMessage} 
        />

      </main>

      {/* 9. Brand Footer */}
      <Footer t={t} />

    </div>
  );
}
