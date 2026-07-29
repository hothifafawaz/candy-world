/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, MessageCircle, Percent } from 'lucide-react';
import { Language, TranslationSet } from '../types';
import toffifeeImg from '../../assets/Toffifee.jpg';

interface HeroProps {
  lang: Language;
  t: TranslationSet;
  onInquire: (text: string) => void;
}

export default function Hero({ lang, t, onInquire }: HeroProps) {
  const isRtl = lang === 'ar';
  const salePriceInquiryText = isRtl
    ? 'مرحباً، أود الاستفسار عن أسعار العروض والمنتجات المتوفرة.'
    : 'Hello, I would like to inquire about sale prices and available products.';

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-brand-pink-50/70 via-brand-cream to-brand-cream py-16 lg:py-24">
      {/* Decorative background vectors for a whimsical, high-end feel */}
      <div className="absolute top-10 left-[-10%] w-[350px] h-[350px] bg-brand-pink-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-brand-gold-400/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? 40 : -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start space-y-6 text-center lg:text-start"
          >
            {/* Soft Appetizing Badge */}
            <div className="mx-auto lg:mx-0 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-pink-100 text-brand-pink-700 font-sans font-bold text-xs tracking-wide shadow-xs border border-brand-pink-200/50">
              <Sparkles className="h-3.5 w-3.5 text-brand-pink-600 animate-pulse" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Title & Subtitle */}
            <h1 className="w-full font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-choco-900 leading-tight">
              {t.heroTitle}
            </h1>
            
            <p className="font-sans font-medium text-lg sm:text-xl text-brand-choco-800 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t.heroSubtitle}
            </p>

            <p className="font-sans text-sm sm:text-base text-brand-choco-800/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t.heroTagline}
            </p>

            {/* Call To Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-brand-pink-600 hover:bg-brand-pink-700 text-white font-sans font-bold px-8 py-4 rounded-full shadow-lg shadow-brand-pink-600/20 hover:shadow-xl hover:shadow-brand-pink-600/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>{t.heroCtaContact}</span>
                {isRtl ? (
                  <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                )}
              </a>

              <a
                href="#offers"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-brand-pink-50 text-brand-choco-900 font-sans font-bold px-8 py-4 rounded-full border border-brand-pink-200/80 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Percent className="h-5 w-5 text-brand-pink-500" />
                <span>{t.heroCtaOffers}</span>
              </a>
            </div>

            {/* Mini Trust Highlights */}
            <div className="w-full pt-6 flex flex-wrap gap-x-6 gap-y-3 justify-center lg:justify-start text-xs font-sans font-semibold text-brand-choco-800/70 border-t border-brand-pink-100/60 mt-6">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                {lang === 'ar' ? 'أصناف عالمية نادرة ومستوردة' : 'Rare Imported Sweets'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                {lang === 'ar' ? 'أسعار وعروض مخفضة' : 'Discounted Offers'}
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                {lang === 'ar' ? 'تخزين وحفظ مبرد مثالي' : 'Climate Controlled Storage'}
              </span>
            </div>
          </motion.div>

          {/* Hero Images Collage */}
          <motion.div 
            initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Primary Collage Frame */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Replace marker comment for the user */}
              {/* PLACEHOLDER: Hero Image - replace src below with real candy store showroom photo */}
              <img
                src={toffifeeImg}
                alt={lang === 'ar' ? 'حلوى توفيفي المستوردة في عالم الحلويات' : 'Imported Toffifee sweets at Candy World'}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-choco-900/40 via-transparent to-transparent"></div>
            </div>

            {/* Overlapping Floating Promotion Card */}
            <motion.button 
              type="button"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              onClick={() => onInquire(salePriceInquiryText)}
              className={`absolute bottom-[-20px] ${isRtl ? 'left-[-15px]' : 'right-[-15px]'} bg-white p-4 rounded-2xl shadow-xl border border-brand-pink-100 flex items-center gap-3.5 max-w-[240px] text-left cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-brand-pink-300`}
            >
              <div className="bg-emerald-50 p-2.5 rounded-xl text-emerald-600">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-start">
                <span className="font-sans font-bold text-xs text-brand-choco-900 leading-tight">
                  {lang === 'ar' ? 'اسألنا فوراً عن الاسعار' : 'Ask About Sale Prices'}
                </span>
                <span className="font-sans text-[10px] text-brand-choco-800/70 mt-0.5 leading-none">
                  {lang === 'ar' ? 'خدمة سريعة عبر الواتساب' : 'Instant WhatsApp Service'}
                </span>
              </div>
            </motion.button>

            {/* Overlapping Floating Sweets Highlight badge */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className={`absolute top-[-20px] ${isRtl ? 'right-[-10px]' : 'left-[-10px]'} bg-brand-gold-50 p-3 rounded-2xl shadow-lg border border-brand-gold-400/40 flex items-center gap-2 max-w-[190px]`}
            >
              <span className="text-xl">🍬</span>
              <div className="flex flex-col text-start">
                <span className="font-sans font-bold text-[11px] text-brand-choco-900 leading-tight">
                  {lang === 'ar' ? 'مستورد ألماني' : 'German Import'}
                </span>
                <span className="font-sans text-[9px] text-brand-choco-800/60 leading-none">
                  {lang === 'ar' ? 'ماركات مميزة' : 'Premium Brands'}
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
