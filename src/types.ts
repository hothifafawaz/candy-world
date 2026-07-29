/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en';

export interface TranslationSet {
  // Navigation
  navHome: string;
  navAbout: string;
  navProducts: string;
  navOffers: string;
  navContact: string;

  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroTagline: string;
  heroBadge: string;
  heroCtaContact: string;
  heroCtaOffers: string;

  // About Section
  aboutTitle: string;
  aboutSubtitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  aboutStat1Value: string;
  aboutStat1Label: string;
  aboutStat2Value: string;
  aboutStat2Label: string;
  aboutStat3Value: string;
  aboutStat3Label: string;

  // Product Categories Section
  categoriesTitle: string;
  categoriesSubtitle: string;
  categoryLocalSweetsTitle: string;
  categoryLocalSweetsDesc: string;
  categoryImportedSweetsTitle: string;
  categoryImportedSweetsDesc: string;
  categoryChocolatesTitle: string;
  categoryChocolatesDesc: string;
  categorySnacksTitle: string;
  categorySnacksDesc: string;
  categoryGiftBoxesTitle: string;
  categoryGiftBoxesDesc: string;
  categoryPartyPlattersTitle: string;
  categoryPartyPlattersDesc: string;
  categoryActionBtn: string;

  // Offers Section
  offersTitle: string;
  offersSubtitle: string;
  offerMainTitle: string;
  offerMainBadge: string;
  offerMainDesc: string;
  offerMainTerms: string;
  offerActionBtn: string;
  offerInquiryPlaceholder: string;

  // Why Choose Us Section
  whyTitle: string;
  whySubtitle: string;
  whyFeature1Title: string;
  whyFeature1Desc: string;
  whyFeature2Title: string;
  whyFeature2Desc: string;
  whyFeature3Title: string;
  whyFeature3Desc: string;
  whyFeature4Title: string;
  whyFeature4Desc: string;

  // Gallery Section
  galleryTitle: string;
  gallerySubtitle: string;

  // Contact Section
  contactTitle: string;
  contactSubtitle: string;
  contactFormName: string;
  contactFormPhone: string;
  contactFormMessage: string;
  contactFormSubmit: string;
  contactSuccessMsg: string;
  contactSuccessTitle: string;
  contactWhatsAppBtn: string;
  contactInfoTitle: string;
  contactInfoAddress: string;
  contactInfoAddressVal: string;
  contactInfoPhone: string;
  contactInfoPhoneVal: string;
  contactInfoHours: string;
  contactInfoHoursVal: string;
  contactMapTitle: string;

  // Footer
  footerCopyright: string;
  footerRights: string;
  footerPrivacyLink: string;
  footerPrivacyWhatsAppLabel: string;
  footerCookiePrefsLink: string;

  // Contact form - consent checkbox
  contactConsentPrefix: string;
  contactConsentLinkText: string;
  contactConsentSuffix: string;

  // Cookie / tracking consent banner
  cookieBannerTitle: string;
  cookieBannerMessage: string;
  cookieBannerAccept: string;
  cookieBannerReject: string;
  cookieBannerPolicyLinkText: string;

  // Privacy Policy page
  privacyPageTitle: string;
  privacyBackHome: string;
  privacyLastUpdated: string;
  privacyIntro: string;

  privacyDataCollectedTitle: string;
  privacyDataCollectedIntro: string;
  privacyDataItemName: string;
  privacyDataItemPhone: string;
  privacyDataItemMessage: string;
  privacyDataItemAnalytics: string;

  privacyPurposeTitle: string;
  privacyPurposeBody: string;

  privacyRetentionTitle: string;
  privacyRetentionBody: string;

  privacyThirdPartyTitle: string;
  privacyThirdPartyIntro: string;

  privacyRightsTitle: string;
  privacyRightsIntro: string;

  privacyContactTitle: string;
  privacyContactBody: string;
  privacyContactWhatsAppLabel: string;

  privacyCookiesTitle: string;
  privacyCookiesBody: string;
  privacyCookiesManageBtn: string;
}

export interface Product {
  id: string;
  title: string;
  category: 'local' | 'imported' | 'chocolate' | 'snacks';
  description: string;
  image: string;
}

export interface Offer {
  id: string;
  title: string;
  originalPrice?: string;
  promoPrice?: string;
  discountPercentage?: string;
  image: string;
  description: string;
}
