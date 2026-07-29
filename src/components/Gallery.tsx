/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { Language, TranslationSet } from '../types';
import candyShow from '../../assets/candy-show.jpeg';
import foodShow from '../../assets/food-show.jpeg';
import nutsShow from '../../assets/Nuts-show.jpeg';
import drinksShow from '../../assets/drinks-show.jpeg';
import plasticsShow from '../../assets/Plastic-show.jpeg';
import dietShow from '../../assets/diet-show.jpeg';

interface GalleryProps {
  lang: Language;
  t: TranslationSet;
}

export default function Gallery({ lang, t }: GalleryProps) {
  const [selectedImg, setSelectedImg] = useState<{ src: string; title: string } | null>(null);

  const galleryImages = [
    {
      src: candyShow,
      title: lang === 'ar' ? 'حلويات وبوكسات محلية ومستوردة' : 'Local & Imported Sweets and Gift Boxes',
    },
    {
      src: foodShow,
      title: lang === 'ar' ? 'مواد غذائية' : 'Food Products',
    },
    {
      src: nutsShow,
      title: lang === 'ar' ? 'المكسرات' : 'Nuts & Snacks',
    },
    {
      src: drinksShow,
      title: lang === 'ar' ? 'مشروبات وآيس كريم' : 'Drinks & Ice Cream',
    },
    {
      src: plasticsShow,
      title: lang === 'ar' ? 'البلاستيكيات' : 'Plastic Products',
    },
    {
      src: dietShow,
      title: lang === 'ar' ? 'المنتجات العضوية والدايت' : 'Organic & Diet Products',
    },
  ];

  return (
    <section className="py-20 bg-brand-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-bold text-brand-pink-500 tracking-wider uppercase block mb-1">
            {lang === 'ar' ? 'معرض الصور' : 'Visual Showcase'}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
            {t.galleryTitle}
          </h2>
          <p className="font-sans text-base text-brand-choco-800/80 mt-3 leading-relaxed">
            {t.gallerySubtitle}
          </p>
        </div>

        {/* Gallery Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => setSelectedImg({ src: img.src, title: img.title })}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer shadow-xs hover:shadow-xl border-2 border-white transition-all transform hover:-translate-y-1"
            >
              {/* IMAGE PLACEHOLDER COMMENT */}
              {/* PLACEHOLDER: Gallery photo - replace src with actual store/product snaps */}
              <img
                src={img.src}
                alt={img.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-brand-choco-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white text-start">
                <ZoomIn className="absolute top-4 right-4 h-6 w-6 text-white/80" />
                <span className="font-sans font-bold text-base leading-tight">
                  {img.title}
                </span>
                <span className="font-sans text-xs text-white/70 mt-1">
                  {lang === 'ar' ? 'عرض مكبّر' : 'Expand Photo'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors cursor-pointer"
            >
              <X className="h-6 w-6" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl border-4 border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImg.src}
                alt={selectedImg.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
