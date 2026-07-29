/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
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
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieConsent from './components/CookieConsent';

const ANALYTICS_CONSENT_KEY = 'analytics-consent';

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

  // Lightweight client-side routing (no router dependency): only the
  // Privacy Policy page needs its own path, everything else is one page.
  const [route, setRoute] = useState<string>(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setRoute(path);
    window.scrollTo(0, 0);
  };

  const handleNavLinkClick = (path: string) => (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(path);
  };

  // Cookie / tracking consent: Vercel Analytics only loads after explicit
  // opt-in, stored in localStorage so the choice persists across visits.
  const [analyticsConsent, setAnalyticsConsent] = useState<'accepted' | 'rejected' | null>(() => {
    try {
      const saved = localStorage.getItem(ANALYTICS_CONSENT_KEY);
      return saved === 'accepted' || saved === 'rejected' ? saved : null;
    } catch (err) {
      return null;
    }
  });

  const setConsent = (value: 'accepted' | 'rejected' | null) => {
    setAnalyticsConsent(value);
    try {
      if (value) {
        localStorage.setItem(ANALYTICS_CONSENT_KEY, value);
      } else {
        localStorage.removeItem(ANALYTICS_CONSENT_KEY);
      }
    } catch (err) {
      // ignore
    }
  };

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

  if (route === '/privacy-policy') {
    return (
      <>
        <PrivacyPolicy
          lang={lang}
          t={t}
          toggleLang={toggleLang}
          onNavigateHome={() => navigate('/')}
          onManageCookiePreferences={() => setConsent(null)}
        />
        <Footer t={t} onNavigatePrivacy={handleNavLinkClick('/privacy-policy')} onManageCookiePreferences={() => setConsent(null)} />
        <CookieConsent
          lang={lang}
          t={t}
          visible={analyticsConsent === null}
          onAccept={() => setConsent('accepted')}
          onReject={() => setConsent('rejected')}
          onNavigatePrivacy={handleNavLinkClick('/privacy-policy')}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans select-none antialiased selection:bg-brand-pink-100 selection:text-brand-pink-800">
      {analyticsConsent === 'accepted' && <Analytics />}

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
          onNavigatePrivacy={handleNavLinkClick('/privacy-policy')}
        />

      </main>

      {/* 9. Brand Footer */}
      <Footer t={t} onNavigatePrivacy={handleNavLinkClick('/privacy-policy')} onManageCookiePreferences={() => setConsent(null)} />

      {/* Cookie / tracking consent banner (PDPL) */}
      <CookieConsent
        lang={lang}
        t={t}
        visible={analyticsConsent === null}
        onAccept={() => setConsent('accepted')}
        onReject={() => setConsent('rejected')}
        onNavigatePrivacy={handleNavLinkClick('/privacy-policy')}
      />

    </div>
  );
}
