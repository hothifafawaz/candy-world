/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Candy, Menu, X, Globe, Phone } from 'lucide-react';
import { Language, TranslationSet } from '../types';
import logoIcon from '../../assets/candy-world-logo-icon.png';

interface NavbarProps {
  lang: Language;
  t: TranslationSet;
  toggleLang: () => void;
}

export default function Navbar({ lang, t, toggleLang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: t.navHome, href: '#home' },
    { label: t.navAbout, href: '#about' },
    { label: t.navProducts, href: '#categories' },
    { label: t.navOffers, href: '#offers' },
    { label: t.navContact, href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-cream/80 backdrop-blur-md border-b border-brand-pink-100/50 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="p-1 group-hover:rotate-12 transition-transform duration-300">
                <img src={logoIcon} alt="Candy World" className="h-12 w-12 object-contain" id="nav-logo-icon" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight tracking-tight text-brand-choco-900 group-hover:text-brand-pink-600 transition-colors">
                  Candy World
                </span>
                <span className="font-sans font-semibold text-xs text-brand-pink-500 leading-none">
                  شركة عالم الحلويات الاولى
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="font-sans font-medium text-sm text-brand-choco-800 hover:text-brand-pink-600 relative py-1 transition-colors group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-pink-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <div className="h-6 w-[1px] bg-brand-pink-100/80"></div>

            {/* Quick Contact & Lang Switcher */}
            <div className="flex items-center gap-4">
              <a 
                href="#contact" 
                className="hidden lg:flex items-center gap-2 text-xs font-semibold text-brand-choco-900 bg-brand-pink-50 hover:bg-brand-pink-100 px-3.5 py-2 rounded-full border border-brand-pink-200/50 transition-all"
              >
                <Phone className="h-3.5 w-3.5 text-brand-pink-500" />
                <span>{lang === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
              </a>

              {/* Language Switch Button */}
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 font-sans font-semibold text-xs text-brand-pink-700 bg-brand-pink-50 hover:bg-brand-pink-100 px-4 py-2 rounded-full border border-brand-pink-200/60 shadow-xs cursor-pointer transition-all active:scale-95"
                title={lang === 'ar' ? 'Switch to English' : 'تحويل للغة العربية'}
              >
                <Globe className="h-4 w-4 text-brand-pink-500" />
                <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switcher on mobile navbar outside burger */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 font-sans font-semibold text-xs text-brand-pink-700 bg-brand-pink-50 px-3 py-1.5 rounded-full border border-brand-pink-200/60 shadow-xs cursor-pointer"
            >
              <Globe className="h-3.5 w-3.5 text-brand-pink-500" />
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-brand-choco-900 hover:text-brand-pink-600 hover:bg-brand-pink-50 rounded-full transition-colors focus:outline-hidden"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-cream border-b border-brand-pink-100 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navItems.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-sans font-medium text-brand-choco-900 hover:bg-brand-pink-50 hover:text-brand-pink-600 transition-colors ${
                    lang === 'ar' ? 'text-right' : 'text-left'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-4 border-t border-brand-pink-100 flex flex-col gap-3 px-4">
               <a 
                 href="https://wa.me/966509607675" 
                 target="_blank" 
                 rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-brand-pink-500 hover:bg-brand-pink-600 text-white font-sans font-semibold py-3 rounded-xl transition-all shadow-md shadow-brand-pink-500/15"
                >
                  <Candy className="h-5 w-5" />
                  <span>{lang === 'ar' ? 'واتساب المبيعات' : 'Showroom WhatsApp'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
