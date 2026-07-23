/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Layers, Coins, ShieldCheck, Heart } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface WhyChooseUsProps {
  lang: Language;
  t: TranslationSet;
}

export default function WhyChooseUs({ lang, t }: WhyChooseUsProps) {
  const features = [
    {
      title: t.whyFeature1Title,
      description: t.whyFeature1Desc,
      icon: <Layers className="h-6 w-6 text-brand-pink-500" />,
      color: 'bg-brand-pink-50 text-brand-pink-700 border-brand-pink-100',
    },
    {
      title: t.whyFeature2Title,
      description: t.whyFeature2Desc,
      icon: <Coins className="h-6 w-6 text-emerald-500" />,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: t.whyFeature3Title,
      description: t.whyFeature3Desc,
      icon: <ShieldCheck className="h-6 w-6 text-brand-gold-600" />,
      color: 'bg-brand-gold-50 text-brand-gold-700 border-brand-gold-400/30',
    },
    {
      title: t.whyFeature4Title,
      description: t.whyFeature4Desc,
      icon: <Heart className="h-6 w-6 text-sky-500" />,
      color: 'bg-sky-50 text-sky-700 border-sky-100',
    },
  ];

  return (
    <section className="py-20 bg-brand-pink-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-bold text-brand-pink-500 tracking-wider uppercase block mb-1">
            {lang === 'ar' ? 'مميزاتنا' : 'Our Strengths'}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
            {t.whyTitle}
          </h2>
          <p className="font-sans text-base text-brand-choco-800/80 mt-3 leading-relaxed">
            {t.whySubtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 border border-brand-pink-100/50 shadow-xs hover:shadow-lg transition-all transform hover:-translate-y-1 text-start flex flex-col justify-between"
            >
              <div>
                {/* Icon Wrapper */}
                <div className={`h-12 w-12 rounded-xl flex items-center justify-center border mb-6 ${feature.color}`}>
                  {feature.icon}
                </div>

                <h3 className="font-display font-bold text-lg text-brand-choco-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-brand-choco-800/75 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Little cute accent line in bottom */}
              <div className="w-8 h-1 bg-brand-pink-500/30 rounded-full mt-6" />

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
