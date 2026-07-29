/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Candy, Instagram, Ghost, MessageCircle, Twitter, Mail } from 'lucide-react';
import { TranslationSet } from '../types';

const PRIVACY_EMAIL = 'privacy@candyworldsa.com';

interface FooterProps {
  t: TranslationSet;
  onNavigatePrivacy?: (e: React.MouseEvent) => void;
  onManageCookiePreferences?: () => void;
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M14.5 3h2.2c.2 2.1 1.3 3.6 0 5.2-.4.4-.9.7-1.4 1.1v.1c.7.3 1.4.7 2.1 1.2.8.5 1.5 1.1 2.1 1.9.3.4.6.9.8 1.3.2.3.4.6.5.9.2.4.3.8.4 1.2v.1c-.3-1-.6-1.8-1.1-2.6-.4-.6-.9-1.2-1.4-1.7-.8-.8-1.7-1.4-2.6-1.8-.3-.2-.7-.3-1-.4v4.7c0 1.3-.2 2.5-.6 3.4-.7 1.6-1.9 2.8-3.4 3.5-1.4.7-3 .8-4.5.5-1.6-.3-3-1.1-4.1-2.3-.9-1-.9-2.3-.7-3.4.4-2.1 1.7-3.7 3.5-4.6 1.6-.9 3.4-1.1 5.1-.8V3z" />
    </svg>
  );
}

export default function Footer({ t, onNavigatePrivacy, onManageCookiePreferences }: FooterProps) {
  // SOCIAL PLACEHOLDERS: Replace "#" below with your actual social handle profiles
  const socials = [
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@alm88aaa',
      icon: <TikTokIcon className="h-5 w-5" />,
      hover: 'hover:bg-pink-600 hover:text-white',
    },
    {
      name: 'Snapchat',
      href: 'https://www.snapchat.com/add/alm88aa',
      icon: <Ghost className="h-5 w-5" />,
      hover: 'hover:bg-yellow-400 hover:text-brand-choco-900',
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/966509607675',
      icon: <MessageCircle className="h-5 w-5" />,
      hover: 'hover:bg-emerald-600 hover:text-white',
    },
    
  ];

  return (
    <footer className="bg-brand-choco-900 text-white py-12 border-t-4 border-brand-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10">
          
          {/* Footer Logo Area */}
          <div className="flex items-center gap-3">
            <div className="bg-brand-pink-500 text-white p-2 rounded-full">
              <Candy className="h-5 w-5" />
            </div>
            <div className="flex flex-col text-start">
              <span className="font-display font-extrabold text-base leading-tight">
                Candy World
              </span>
              <span className="font-sans font-semibold text-xs text-brand-pink-400 leading-none">
                عالم الحلويات الأولى
              </span>
            </div>
          </div>

          {/* Social Media Row */}
          <div className="flex items-center gap-4">
            {socials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.name}
                className={`h-10 w-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 transition-all transform hover:-translate-y-1 ${social.hover}`}
              >
                {social.icon}
              </a>
            ))}
          </div>

        </div>

        {/* Privacy & Data Protection Row (PDPL) */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-8 pb-2 text-xs font-sans font-semibold text-white/70">
          <a
            href="/privacy-policy"
            onClick={onNavigatePrivacy}
            className="hover:text-white underline underline-offset-2 transition-colors"
          >
            {t.footerPrivacyLink}
          </a>

          <button
            onClick={onManageCookiePreferences}
            className="hover:text-white underline underline-offset-2 transition-colors cursor-pointer bg-transparent"
          >
            {t.footerCookiePrefsLink}
          </button>

          <span className="flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5" />
            <span>{t.footerPrivacyEmailLabel}</span>
            <a
              href={`mailto:${PRIVACY_EMAIL}`}
              dir="ltr"
              className="text-brand-pink-300 hover:text-white transition-colors"
            >
              {PRIVACY_EMAIL}
            </a>
          </span>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-center text-xs text-white/50 font-sans font-semibold">
          <p>
            {t.footerCopyright}
          </p>
          <p className="flex items-center gap-1">
            <span>{t.footerRights}</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
