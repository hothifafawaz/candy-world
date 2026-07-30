/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Clock, MessageSquare, Send, CheckCircle, Smartphone } from 'lucide-react';
import { Language, TranslationSet } from '../types';

interface ContactProps {
  lang: Language;
  t: TranslationSet;
  inquiryMessage: string;
  setInquiryMessage: (text: string) => void;
  onNavigatePrivacy?: (e: React.MouseEvent) => void;
}

export default function Contact({ lang, t, inquiryMessage, setInquiryMessage, onNavigatePrivacy }: ContactProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // If the inquiry message changes from outside, scroll to the form smoothly and focus the message field
  useEffect(() => {
    if (inquiryMessage && formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Find and focus the message textarea
      const textarea = formRef.current.querySelector('textarea');
      if (textarea) {
        setTimeout(() => {
          textarea.focus();
        }, 850);
      }
    }
  }, [inquiryMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!name.trim() || !phone.trim() || !inquiryMessage.trim() || !consent) return;

  setIsSubmitting(true);

  try {
    // Submitted to our own backend (api/contact.js in production, server.js
    // locally), which holds the Resend API key server-side and forwards the
    // request - the key is never exposed in client-side code.
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        phone: phone,
        message: inquiryMessage,
        consent: consent,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setIsSubmitted(true);
      setName('');
      setPhone('');
      setConsent(false);
    } else {
      alert(lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى.' : 'Something went wrong, please try again.');
    }
  } catch (error) {
    alert(lang === 'ar' ? 'حدث خطأ، حاول مرة أخرى.' : 'Something went wrong, please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleReset = () => {
    setIsSubmitted(false);
    setInquiryMessage('');
  };

  // Pre-filled WhatsApp Link generator
  const WHATSAPP_PHONE = '966509607675';
  const BUSINESS_PHONE = '+966 50 960 7675';
  const defaultWhatsAppMsg = lang === 'ar' 
    ? 'مرحباً عالم الحلويات، أود الاستفسار عن المنتجات المتوفرة والعروض الخاصة.' 
    : 'Hello Candy World, I would like to inquire about your available sweets and promotional offers.';
  
  const currentWhatsAppMsg = inquiryMessage.trim() || defaultWhatsAppMsg;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(currentWhatsAppMsg)}`;

  return (
    <section id="contact" className="py-20 bg-brand-pink-50/30 relative" ref={formRef}>
      <div className="absolute top-1/2 left-[-10%] w-[300px] h-[300px] bg-brand-pink-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-sans font-bold text-brand-pink-500 tracking-wider uppercase block mb-1">
            {lang === 'ar' ? 'اتصل بنا' : 'Get In Touch'}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-choco-900 leading-tight">
            {t.contactTitle}
          </h2>
          <p className="font-sans text-base text-brand-choco-800/80 mt-3 leading-relaxed">
            {t.contactSubtitle}
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-brand-pink-100/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-brand-pink-500 via-brand-gold-500 to-brand-pink-600" />
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-start"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="font-sans font-bold text-xs text-brand-choco-800 uppercase tracking-wider">
                        {t.contactFormName} <span className="text-brand-pink-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? 'مثال: محمد أحمد' : 'e.g. John Doe'}
                        className="w-full bg-brand-cream border border-brand-pink-100 focus:border-brand-pink-500 focus:ring-2 focus:ring-brand-pink-200 focus:outline-hidden rounded-2xl px-5 py-3.5 font-sans text-sm text-brand-choco-900 transition-all placeholder:text-brand-choco-800/40"
                      />
                    </div>

                    {/* Phone Input */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="font-sans font-bold text-xs text-brand-choco-800 uppercase tracking-wider">
                        {t.contactFormPhone} <span className="text-brand-pink-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder={lang === 'ar' ? 'مثال: ٠٥٠٩٦٠٧٦٧٥' : 'e.g. +966 50 960 7675'}
                        className="w-full bg-brand-cream border border-brand-pink-100 focus:border-brand-pink-500 focus:ring-2 focus:ring-brand-pink-200 focus:outline-hidden rounded-2xl px-5 py-3.5 font-sans text-sm text-brand-choco-900 transition-all placeholder:text-brand-choco-800/40"
                      />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="font-sans font-bold text-xs text-brand-choco-800 uppercase tracking-wider">
                      {t.contactFormMessage} <span className="text-brand-pink-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      placeholder={lang === 'ar' ? 'اكتب استفسارك هنا...' : 'Type your inquiry details here...'}
                      className="w-full bg-brand-cream border border-brand-pink-100 focus:border-brand-pink-500 focus:ring-2 focus:ring-brand-pink-200 focus:outline-hidden rounded-2xl px-5 py-3.5 font-sans text-sm text-brand-choco-900 transition-all placeholder:text-brand-choco-800/40 resize-none"
                    />
                  </div>

                  {/* PDPL Consent Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 h-4 w-4 shrink-0 accent-brand-pink-600 cursor-pointer"
                    />
                    <label htmlFor="consent" className="font-sans text-xs sm:text-sm text-brand-choco-800/80 leading-relaxed cursor-pointer">
                      {t.contactConsentPrefix}{' '}
                      <a
                        href="/privacy-policy"
                        onClick={onNavigatePrivacy}
                        className="font-bold text-brand-pink-600 hover:text-brand-pink-700 underline underline-offset-2 transition-colors"
                      >
                        {t.contactConsentLinkText}
                      </a>
                      {t.contactConsentSuffix}
                    </label>
                  </div>

                  {/* Submit buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !consent}
                      className="flex-1 bg-brand-pink-600 hover:bg-brand-pink-700 disabled:bg-brand-pink-300 disabled:cursor-not-allowed text-white font-sans font-bold py-4 rounded-2xl transition-all shadow-md shadow-brand-pink-500/10 cursor-pointer flex items-center justify-center gap-2.5 active:scale-98"
                    >
                      {isSubmitting ? (
                        <span className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>{t.contactFormSubmit}</span>
                        </>
                      )}
                    </button>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-sans font-bold py-4 px-6 rounded-2xl transition-all shadow-md shadow-emerald-500/10 flex items-center justify-center gap-2 active:scale-98"
                    >
                      <span className="text-xl leading-none">💬</span>
                      <span>{t.contactWhatsAppBtn}</span>
                    </a>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success-form"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center space-y-6"
                >
                  <div className="h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 border-2 border-white shadow-md">
                    <CheckCircle className="h-10 w-10" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-2xl text-brand-choco-900">
                      {t.contactSuccessTitle}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-brand-choco-800/80 max-w-md mx-auto leading-relaxed">
                      {t.contactSuccessMsg}
                    </p>
                  </div>

                  <button
                    onClick={handleReset}
                    className="bg-brand-pink-50 hover:bg-brand-pink-100 text-brand-pink-700 font-sans font-bold text-xs px-6 py-3 rounded-full border border-brand-pink-200 transition-all cursor-pointer"
                  >
                    {lang === 'ar' ? 'إرسال استفسار آخر' : 'Send Another Inquiry'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Contact info & Map */}
          <div className="lg:col-span-5 flex flex-col space-y-8 text-start">
            
            {/* Showroom Contact Cards */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-brand-pink-100/40 space-y-6">
              <h3 className="font-display font-bold text-lg text-brand-choco-900 pb-3 border-b border-brand-pink-50">
                {t.contactInfoTitle}
              </h3>

              {/* Address card */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-brand-pink-50 text-brand-pink-600 flex items-center justify-center shrink-0 border border-brand-pink-100">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-sans font-bold text-xs text-brand-choco-800/65 uppercase tracking-wider">
                    {t.contactInfoAddress}
                  </span>
                  {/* DEVELOPER PLACEHOLDER: Replace address text below with your actual physical location */}
                  <span className="font-sans text-xs sm:text-sm text-brand-choco-900 leading-normal font-semibold">
                    {t.contactInfoAddressVal}
                  </span>
                </div>
              </div>

              {/* Phone card */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-brand-gold-50 text-brand-gold-600 flex items-center justify-center shrink-0 border border-brand-gold-400/20">
                  <Smartphone className="h-5 w-5" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-sans font-bold text-xs text-brand-choco-800/65 uppercase tracking-wider">
                    {t.contactInfoPhone}
                  </span>
                  <a
                    href={`tel:${WHATSAPP_PHONE}`}
                    dir="ltr"
                    className="font-sans text-xs sm:text-sm text-brand-pink-600 hover:text-brand-pink-700 font-bold leading-none transition-colors text-left"
                  >
                    {BUSINESS_PHONE}
                  </a>
                </div>
              </div>

              {/* Working Hours card */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <Clock className="h-5 w-5" />
                </div>
                <div className="flex flex-col space-y-1">
                  <span className="font-sans font-bold text-xs text-brand-choco-800/65 uppercase tracking-wider">
                    {t.contactInfoHours}
                  </span>
                  {/* DEVELOPER PLACEHOLDER: Replace working hours with your actual showroom schedule */}
                  <span className="font-sans text-xs sm:text-sm text-brand-choco-900 leading-normal font-semibold">
                    {t.contactInfoHoursVal}
                  </span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white rounded-3xl p-3 shadow-md border border-brand-pink-100/40 overflow-hidden flex flex-col">
              <span className="font-sans font-bold text-[11px] text-brand-choco-800/60 uppercase tracking-wider mb-2 px-3">
                📍 {t.contactMapTitle}
              </span>
              
              <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-brand-cream border border-brand-pink-50 relative">
                {/* DEVELOPER PLACEHOLDER: Replace iframe src below with your real custom Google Map embed code */}
                
                 <iframe
                  title="Candy World Riyadh Showroom Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.9949650935955!2d42.61647967468805!3d20.00872602203112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15f02b1541f3742d%3A0xb1559466c57130a8!2z2LnYp9mE2YUg2KfZhNit2YTZiNmK2KfYqg!5e0!3m2!1str!2ssa!4v1784670539424!5m2!1str!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
               ></iframe>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
