/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import candyImg from '../../assets/candy.jpg';
import drinksImg from '../../assets/drinks.jpg';
import foodImg from '../../assets/food.jpg';
import nutsImg from '../../assets/nuts.jpg';
import organicImg from '../../assets/organic.png';
import plasticsImg from '../../assets/plastics.webp';
import { MessageSquare, ArrowLeft, ArrowRight } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface CategoriesProps {
  lang: Language;
  t: TranslationSet;
  onInquire: (text: string) => void;
}

export default function Categories({ lang, t, onInquire }: CategoriesProps) {
  const isRtl = lang === 'ar';

  const categories = [
    {
      id: 'local',
      title: t.categoryLocalSweetsTitle,
      description: t.categoryLocalSweetsDesc,
      image: candyImg, // Local candy image
      icon: '🍬',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن أصناف وأسعار الحلويات والبوكسات المحلية والمستوردة المتوفرة حالياً لديكم.' 
        : 'Hello, I would like to inquire about the pricing and availability of your local and imported sweets and gift boxes.',
    },
    {
      id: 'imported',
      title: t.categoryImportedSweetsTitle,
      description: t.categoryImportedSweetsDesc,
      image: foodImg,
      icon: '🍳',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن المواد الغذائية المتوفرة .' 
        : 'Hello, I would like to inquire about the available food items in your showroom.',
    },
    {
      id: 'chocolate',
      title: t.categoryChocolatesTitle,
      description: t.categoryChocolatesDesc,
      image: nutsImg,
      icon: '🥜',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن المكسرات المتوفرة .' 
        : 'Hello, I would like to inquire about the available nuts and snacks in your showroom.',
    },
    {
      id: 'snacks',
      title: t.categorySnacksTitle,
      description: t.categorySnacksDesc,
      image: drinksImg,
      icon: '🍦',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن توفر مشروبات او ايس كريم لديكم' 
        : 'Hello, I would like to inquire about the available drinks and ice cream options in your showroom.',
    },
    {
      id: 'gift-boxes',
      title: t.categoryGiftBoxesTitle,
      description: t.categoryGiftBoxesDesc,
      image: plasticsImg,
      icon: '🍽️',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن البلاستيكيات المتوفرة لديكم.' 
        : 'Hello, I would like to inquire about the available plastic products in your showroom.',
    },
    {
      id: 'party-platters',
      title: t.categoryPartyPlattersTitle,
      description: t.categoryPartyPlattersDesc,
      image: organicImg,
      icon: '🌱',
      inquiryText: lang === 'ar' 
        ? 'مرحباً، أود الاستفسار عن التشكيلات العضوية والدايت.' 
        : 'Hello, I would like to inquire about the available organic and diet options in your showroom.',
    },
  ];

  return (
    <section id="categories" className="py-20 bg-brand-pink-50/40 relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-bold text-brand-pink-500 tracking-wider uppercase block mb-1">
            {lang === 'ar' ? 'معرض المنتجات' : 'Our Showroom Highlights'}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
            {t.categoriesTitle}
          </h2>
          <p className="font-sans text-base text-brand-choco-800/80 mt-3 leading-relaxed">
            {t.categoriesSubtitle}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl border border-brand-pink-100/40 transition-all group flex flex-col sm:flex-row h-full"
            >
              
              {/* Category Image */}
              <div className="sm:w-5/12 relative aspect-[4/3] sm:aspect-auto overflow-hidden">
                {/* PLACEHOLDER: Category Image - replace src for user */}
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Badge icon */}
                <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} h-10 w-10 bg-white rounded-full flex items-center justify-center text-xl shadow-md border border-brand-pink-100`}>
                  {cat.icon}
                </div>
              </div>

              {/* Category Details */}
              <div className="sm:w-7/12 p-6 sm:p-8 flex flex-col justify-between items-start text-start">
                <div className="space-y-3">
                  <h3 className="font-display font-bold text-xl text-brand-choco-900 group-hover:text-brand-pink-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-sm text-brand-choco-800/80 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <button
                  onClick={() => onInquire(cat.inquiryText)}
                  className="mt-6 inline-flex items-center gap-2 font-sans font-bold text-xs text-brand-pink-600 hover:text-brand-pink-700 bg-brand-pink-50 hover:bg-brand-pink-100/80 px-4 py-2.5 rounded-full border border-brand-pink-100 transition-all cursor-pointer group/btn"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{t.categoryActionBtn}</span>
                  {isRtl ? (
                    <ArrowLeft className="h-3 w-3 transition-transform group-hover/btn:-translate-x-1" />
                  ) : (
                    <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  )}
                </button>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
