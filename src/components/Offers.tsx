/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Percent, MessageCircle, AlertCircle } from 'lucide-react';
import milkImg from '../../assets/milk.webp';
import { Language, TranslationSet } from '../types';

interface OffersProps {
  lang: Language;
  t: TranslationSet;
  onInquire: (text: string) => void;
}

export default function Offers({ lang, t, onInquire }: OffersProps) {
  const isRtl = lang === 'ar';

  const promoOffer = {
    title: t.offerMainTitle,
    badge: t.offerMainBadge,
    description: t.offerMainDesc,
    originalPrice: isRtl ? '66 ر.س' : '66 SAR',
    promoPrice: isRtl ? '59.95 ر.س' : '59.95 SAR',
    savings: isRtl ? 'وفر 9.15٪' : 'Save 9%',
    image: milkImg, // Local milk product image
    terms: t.offerMainTerms,
    inquiryText: t.offerInquiryPlaceholder,
  };

  return (
    <section id="offers" className="py-20 bg-brand-cream relative overflow-hidden">
      {/* Decorative candies removed to reduce visual clutter */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="mx-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 font-sans font-bold text-xs border border-emerald-100 mb-3">
            <Percent className="h-3.5 w-3.5" />
            <span>{isRtl ? 'أقوى توفير' : 'Maximum Savings'}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
            {t.offersTitle}
          </h2>
          <p className="font-sans text-base text-brand-choco-800/80 mt-3 leading-relaxed">
            {t.offersSubtitle}
          </p>
        </div>

        {/* Featured Offer Banner Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-brand-choco-900 to-brand-choco-800 rounded-3xl overflow-hidden shadow-xl text-white relative border-4 border-white/10"
        >
          {/* Decorative background vectors */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-brand-pink-500/10 rounded-full blur-3xl -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Offer Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-start text-start space-y-6 relative z-10">
              
              {/* Promo badge */}
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-pink-500 text-white font-sans font-bold text-xs uppercase tracking-wide">
                {promoOffer.badge}
              </span>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl leading-tight">
                {promoOffer.title}
              </h3>

              <p className="font-sans text-white/80 text-sm sm:text-base leading-relaxed">
                {promoOffer.description}
              </p>

              {/* Price Details */}
              <div className="flex flex-wrap items-end gap-6 bg-white/5 p-4 sm:p-6 rounded-2xl border border-white/10 w-full sm:w-auto">
                <div className="flex flex-col">
                  <span className="text-white/60 font-sans text-xs uppercase tracking-wider">
                    {isRtl ? 'السعر الأصلي' : 'Original Price'}
                  </span>
                  <span className="font-sans text-lg text-white/50 line-through font-semibold">
                    {promoOffer.originalPrice}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-brand-gold-400 font-sans text-xs font-bold uppercase tracking-wider">
                    {isRtl ? 'سعر العرض الخاص' : 'Special Offer Price'}
                  </span>
                  <span className="font-display font-black text-3xl sm:text-4xl text-brand-gold-400">
                    {promoOffer.promoPrice}
                  </span>
                </div>

                <div className="bg-brand-pink-500/30 text-brand-pink-100 text-xs font-bold font-sans px-3 py-1.5 rounded-lg border border-brand-pink-500/20">
                  {promoOffer.savings}
                </div>
              </div>

              {/* Actions */}
              <div className="w-full pt-4 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
                <button
                  onClick={() => onInquire(promoOffer.inquiryText)}
                  className="bg-brand-pink-600 hover:bg-brand-pink-500 text-white font-sans font-bold text-sm px-6 py-4 rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>{isRtl ? 'استفسر عن العرض' : 'Reserve & Inquire'}</span>
                </button>

                <a
                  href={`https://wa.me/966509607675?text=${encodeURIComponent(promoOffer.inquiryText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-bold text-sm px-6 py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <span className="text-lg">💬</span>
                  <span>{t.offerActionBtn}</span>
                </a>
              </div>

              {/* Disclaimer */}
              <div className="pt-2 flex items-center gap-2 text-white/60 text-xs font-sans">
                <AlertCircle className="h-3.5 w-3.5 shrink-0" />
                <span>{promoOffer.terms}</span>
              </div>

            </div>

            {/* Offer Visual Image */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full aspect-square lg:aspect-auto">
              {/* PLACEHOLDER: Promotion image - replace src for user */}
              <img
                src={promoOffer.image}
                alt={promoOffer.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Shading gradient over image for seamless blend */}
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r ltr:lg:bg-gradient-to-l from-brand-choco-900 via-transparent to-transparent"></div>
              
              {/* Sparkle badge */}
              <div className="absolute top-6 right-6 bg-brand-gold-500 text-brand-choco-900 text-[10px] font-sans font-black uppercase tracking-widest px-4 py-2 rounded-full border border-white shadow-lg rotate-6">
                {isRtl ? '🤩 جبار ومخفّض' : '🤩 BEST VALUE'}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
