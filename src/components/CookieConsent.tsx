/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface CookieConsentProps {
  lang: Language;
  t: TranslationSet;
  visible: boolean;
  onAccept: () => void;
  onReject: () => void;
  onNavigatePrivacy: (e: React.MouseEvent) => void;
}

export default function CookieConsent({
  lang,
  t,
  visible,
  onAccept,
  onReject,
  onNavigatePrivacy,
}: CookieConsentProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-live="polite"
          className="fixed bottom-0 inset-x-0 z-[60] p-4 sm:p-6"
        >
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl border border-brand-pink-100 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="h-11 w-11 rounded-xl bg-brand-pink-50 text-brand-pink-600 flex items-center justify-center shrink-0 border border-brand-pink-100">
              <Cookie className="h-5 w-5" />
            </div>

            <div className="flex-1 text-start">
              <p className="font-sans font-bold text-sm text-brand-choco-900">{t.cookieBannerTitle}</p>
              <p className="font-sans text-xs sm:text-sm text-brand-choco-800/80 leading-relaxed mt-1">
                {t.cookieBannerMessage}{' '}
                <a
                  href="/privacy-policy"
                  onClick={onNavigatePrivacy}
                  className="font-bold text-brand-pink-600 hover:text-brand-pink-700 underline underline-offset-2 transition-colors"
                >
                  {t.cookieBannerPolicyLinkText}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto shrink-0">
              <button
                onClick={onReject}
                className="flex-1 sm:flex-none bg-brand-pink-50 hover:bg-brand-pink-100 text-brand-choco-900 font-sans font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl border border-brand-pink-200 transition-all cursor-pointer active:scale-95"
              >
                {t.cookieBannerReject}
              </button>
              <button
                onClick={onAccept}
                className="flex-1 sm:flex-none bg-brand-pink-600 hover:bg-brand-pink-700 text-white font-sans font-bold text-xs sm:text-sm px-5 py-3 rounded-2xl transition-all cursor-pointer active:scale-95"
              >
                {t.cookieBannerAccept}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
