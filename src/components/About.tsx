/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import showroomImg from '../../assets/showroom.png';
import { Store, Award, Percent, ChevronRight, ChevronLeft } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface AboutProps {
  lang: Language;
  t: TranslationSet;
}

export default function About({ lang, t }: AboutProps) {
  const isRtl = lang === 'ar';

  const stats = [
    {
      value: t.aboutStat1Value,
      label: t.aboutStat1Label,
      icon: <Award className="h-6 w-6 text-brand-pink-500" />,
      color: 'bg-brand-pink-50 border-brand-pink-100',
    },
    {
      value: t.aboutStat2Value,
      label: t.aboutStat2Label,
      icon: <Store className="h-6 w-6 text-brand-gold-500" />,
      color: 'bg-brand-gold-50 border-brand-gold-400/35',
    },
    {
      value: t.aboutStat3Value,
      label: t.aboutStat3Label,
      icon: <Percent className="h-6 w-6 text-emerald-500" />,
      color: 'bg-emerald-50/50 border-emerald-100',
    },
  ];

  return (
    <section id="about" className="py-20 bg-brand-cream relative">
      <div className="absolute top-[30%] left-0 w-[20%] h-[30%] bg-brand-pink-100/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Story & Shelves Photo (Reversed order in RTL automatically if using grid, but let's make it look pristine on both) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-last lg:order-first"
          >
            {/* Visual Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-auto shadow-xl border-4 border-white">
              {/* PLACEHOLDER: Store shelves photo - replace src with a high resolution showroom photo */}
              <img
                src={showroomImg}
                alt="Candy World Sweets Jars"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-choco-900/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white text-start">
                <p className="font-sans font-bold text-lg mb-1">
                  {lang === 'ar' ? 'أكثر من مجرد متجر حلويات' : 'More Than Just a Candy Shop'}
                </p>
                <p className="font-sans text-xs text-white/85">
                  {lang === 'ar' ? 'وجهتكم المفضلة لإسعاد العائلة والأحباب' : 'Your ultimate hub for family smiles and treats'}
                </p>
              </div>
            </div>

            {/* Gold badge removed per request */}
          </motion.div>

          {/* Right Side: About Us Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            <div className="text-start">
              <span className="text-sm font-sans font-bold text-brand-pink-500 tracking-wider uppercase block mb-1">
                {t.aboutTitle}
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
                {t.aboutSubtitle}
              </h2>
            </div>

            <p className="font-sans text-base text-brand-choco-800 leading-relaxed text-start">
              {t.aboutParagraph1}
            </p>

            <p className="font-sans text-sm sm:text-base text-brand-choco-800/80 leading-relaxed text-start border-l-4 border-brand-pink-500 pl-4 rtl:border-l-0 rtl:border-r-4 rtl:pl-0 rtl:pr-4">
              {t.aboutParagraph2}
            </p>

            {/* Quick list of values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              {stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`p-5 rounded-2xl border ${stat.color} flex flex-col items-center sm:items-start text-center sm:text-start transition-transform hover:-translate-y-1 shadow-xs`}
                >
                  <div className="mb-3">
                    {stat.icon}
                  </div>
                  <span className="font-display font-extrabold text-2xl text-brand-choco-900">
                    {stat.value}
                  </span>
                  <span className="font-sans font-semibold text-xs text-brand-choco-800/70 mt-1 leading-tight">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* WhatsApp Direct Query button below about section */}
            <div className="pt-4 flex justify-start">
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 text-brand-pink-600 hover:text-brand-pink-700 font-sans font-bold text-sm transition-colors group"
              >
                <span>{lang === 'ar' ? 'تعرف على منتاجاتنا وتواصل معنا' : 'Learn more and get in touch'}</span>
                {isRtl ? (
                  <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
