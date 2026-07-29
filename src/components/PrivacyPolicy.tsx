/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ShieldCheck,
  Database,
  Target,
  Clock,
  Globe2,
  UserCheck,
  Mail,
  Cookie,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface PrivacyPolicyProps {
  lang: Language;
  t: TranslationSet;
  toggleLang: () => void;
  onNavigateHome: () => void;
  onManageCookiePreferences: () => void;
}

const PRIVACY_EMAIL = 'privacy@candyworldsa.com';

export default function PrivacyPolicy({
  lang,
  t,
  toggleLang,
  onNavigateHome,
  onManageCookiePreferences,
}: PrivacyPolicyProps) {
  const isRtl = lang === 'ar';
  const BackIcon = isRtl ? ArrowRight : ArrowLeft;

  const handleHomeClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    onNavigateHome();
  };

  const sections = [
    {
      icon: <Database className="h-5 w-5" />,
      title: t.privacyDataCollectedTitle,
      body: (
        <>
          <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            {t.privacyDataCollectedIntro}
          </p>
          <ul className="mt-3 space-y-2 list-disc ps-5 font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            <li>{t.privacyDataItemName}</li>
            <li>{t.privacyDataItemPhone}</li>
            <li>{t.privacyDataItemMessage}</li>
            <li>{t.privacyDataItemAnalytics}</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: t.privacyPurposeTitle,
      body: <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">{t.privacyPurposeBody}</p>,
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: t.privacyRetentionTitle,
      body: <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">{t.privacyRetentionBody}</p>,
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: t.privacyThirdPartyTitle,
      body: (
        <>
          <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            {t.privacyThirdPartyIntro}
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-2xl border border-brand-pink-100 bg-brand-pink-50/40 p-4">
              <p className="font-sans font-bold text-sm text-brand-choco-900">{t.privacyThirdPartyWeb3FormsName}</p>
              <p className="font-sans text-xs sm:text-sm text-brand-choco-800/80 leading-relaxed mt-1">
                {t.privacyThirdPartyWeb3FormsDetail}
              </p>
            </div>
            <div className="rounded-2xl border border-brand-pink-100 bg-brand-pink-50/40 p-4">
              <p className="font-sans font-bold text-sm text-brand-choco-900">{t.privacyThirdPartyVercelName}</p>
              <p className="font-sans text-xs sm:text-sm text-brand-choco-800/80 leading-relaxed mt-1">
                {t.privacyThirdPartyVercelDetail}
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: t.privacyRightsTitle,
      body: (
        <>
          <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            {t.privacyRightsIntro}
          </p>
          <ul className="mt-3 space-y-2 list-disc ps-5 font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            <li>{t.privacyRightAccess}</li>
            <li>{t.privacyRightCorrection}</li>
            <li>{t.privacyRightDeletion}</li>
            <li>{t.privacyRightWithdraw}</li>
            <li>{t.privacyRightComplaint}</li>
          </ul>
        </>
      ),
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: t.privacyContactTitle,
      body: (
        <>
          <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            {t.privacyContactBody}
          </p>
          <a
            href={`mailto:${PRIVACY_EMAIL}`}
            dir="ltr"
            className="inline-block mt-3 font-sans font-bold text-sm sm:text-base text-brand-pink-600 hover:text-brand-pink-700 transition-colors"
          >
            {t.privacyContactEmailLabel}
          </a>
        </>
      ),
    },
    {
      icon: <Cookie className="h-5 w-5" />,
      title: t.privacyCookiesTitle,
      body: (
        <>
          <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed">
            {t.privacyCookiesBody}
          </p>
          <button
            onClick={onManageCookiePreferences}
            className="mt-4 inline-flex items-center gap-2 bg-brand-pink-50 hover:bg-brand-pink-100 text-brand-pink-700 font-sans font-bold text-xs sm:text-sm px-5 py-2.5 rounded-full border border-brand-pink-200 transition-all cursor-pointer"
          >
            <Cookie className="h-4 w-4" />
            {t.privacyCookiesManageBtn}
          </button>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-brand-cream">
      {/* Minimal top bar */}
      <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-brand-pink-100/50 shadow-xs">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={handleHomeClick}
            className="flex items-center gap-2 font-sans font-bold text-sm text-brand-choco-900 hover:text-brand-pink-600 transition-colors"
          >
            <BackIcon className="h-4 w-4" />
            <span>{t.privacyBackHome}</span>
          </a>

          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 font-sans font-semibold text-xs text-brand-pink-700 bg-brand-pink-50 hover:bg-brand-pink-100 px-4 py-2 rounded-full border border-brand-pink-200/60 shadow-xs cursor-pointer transition-all active:scale-95"
          >
            <span>{lang === 'ar' ? 'English' : 'العربية'}</span>
          </button>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          {/* Page header */}
          <div className="text-start mb-12">
            <div className="inline-flex items-center gap-2 text-brand-pink-500 mb-3">
              <ShieldCheck className="h-6 w-6" />
              <span className="font-sans font-bold text-xs uppercase tracking-wider">PDPL</span>
            </div>
            <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
              {t.privacyPageTitle}
            </h1>
            <p className="font-sans text-xs text-brand-choco-800/60 mt-2">{t.privacyLastUpdated}</p>
            <p className="font-sans text-sm sm:text-base text-brand-choco-800/90 leading-relaxed mt-5 max-w-3xl">
              {t.privacyIntro}
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section, idx) => (
              <section
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-brand-pink-100/40 text-start"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-pink-50 text-brand-pink-600 flex items-center justify-center shrink-0 border border-brand-pink-100">
                    {section.icon}
                  </div>
                  <h2 className="font-display font-bold text-lg sm:text-xl text-brand-choco-900">
                    {section.title}
                  </h2>
                </div>
                {section.body}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
