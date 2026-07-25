/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TranslationSet } from '../types';

export const translations: Record<'ar' | 'en', TranslationSet> = {
  ar: {
    // Navigation
    navHome: 'الرئيسية',
    navAbout: 'من نحن',
    navProducts: 'أقسامنا',
    navOffers: 'العروض الخاصة',
    navContact: 'تواصل معنا',

    // Hero Section
    heroTitle: 'عالم الحلويات الأولى',
    heroSubtitle: 'خيارك الأول لأشهى الحلويات والشوكلاتة والمواد الغذائية بأسعار منافسة وجودة لا تضاهى!',
    heroTagline: 'خصومات مستمرة وعروض مذهلة على تشكيلة واسعة من الحلويات المحلية والعالمية.',
    heroBadge: '🎉 أهلاً بكم في عالم الحلويات الأولى',
    heroCtaContact: 'تواصل معنا الآن',
    heroCtaOffers: 'استكشف عروضنا',

    // About Section
    aboutTitle: 'عن عالم الحلويات',
    aboutSubtitle: 'حكايتنا مع الجودة والتنوع',
    aboutParagraph1: 'بدأت حكاية عالم الحلويات الأولى من شغفٍ بسيط: أن يجد الزائر كل ما يحبه من الحلويات والوجبات الخفيفة والمشروبات في مكان واحد. ومن هذا الشغف وُلد متجر يجمع بين الأصناف المعروفة والمنتجات الجديدة والمستوردة، ليمنح كل زائر تجربة تسوّق ممتعة ومليئة بالاكتشاف.',
    aboutParagraph2: 'نحرص في عالم الحلويات الأولى على توفير تشكيلة متنوعة تناسب مختلف الأذواق؛ من الشوكولاتة والبسكويت إلى القهوة والمشروبات والمنتجات الخالية من السكر، مع متابعة مستمرة لأحدث المنتجات والنكهات الرائجة.',
    aboutStat1Value: '١٠٠٪',
    aboutStat1Label: 'جودة مضمونة',
    aboutStat2Value: '+١,٥٠٠',
    aboutStat2Label: 'صنف حلويات ومستورد',
    aboutStat3Value: 'الأقل',
    aboutStat3Label: 'في الأسعار والخصومات',

    // Product Categories Section
    categoriesTitle: 'أقسام منتجاتنا',
    categoriesSubtitle: 'تشكيلة غنية تم اختيارها بعناية لتناسب جميع الأذواق والمناسبات',
    categoryLocalSweetsTitle: 'الحلويات والبوكسات المحلية والمستوردة',
    categoryLocalSweetsDesc: 'تشكيلة متنوعة من الحلويات المحلية والعالمية، إلى جانب بوكسات أنيقة تناسب الهدايا والمناسبات. نختار لكم أصنافًا مميزة تجمع بين الطعم الجميل والتقديم الجذاب.',
    categoryImportedSweetsTitle: 'المواد الغذائية',
    categoryImportedSweetsDesc: 'مجموعة متكاملة من المواد الغذائية الأساسية والمنتجات اليومية التي تحتاجها الأسرة. نوفر أصنافًا متنوعة بجودة موثوقة لتكون جميع احتياجاتكم في مكان واحد.',
    categoryChocolatesTitle: 'المكسرات',
    categoryChocolatesDesc: 'أصناف مختارة من المكسرات المحمصة والنيئة، بنكهات متعددة تناسب جميع الأذواق. مثالية للضيافة، والتجمعات، والوجبات الخفيفة في أي وقت.',
    categorySnacksTitle: 'المشروبات والآيس كريم',
    categorySnacksDesc: 'تشكيلة منعشة من المشروبات الباردة والعصائر، إلى جانب أنواع متنوعة من الآيس كريم. خيارات لذيذة تمنحكم الانتعاش والسعادة في كل موسم.',
    categoryGiftBoxesTitle: 'البلاستيكيات',
    categoryGiftBoxesDesc: 'كل ما تحتاجونه من مستلزمات التقديم والتخزين والاستخدام اليومي. نوفر منتجات عملية ومتنوعة تناسب المنازل، والمناسبات، والرحلات.',
    categoryPartyPlattersTitle: 'المنتجات العضوية والدايت',
    categoryPartyPlattersDesc: 'خيارات مختارة بعناية لمن يبحثون عن أسلوب حياة متوازن. تشمل منتجات عضوية، وقليلة السكر، ودايت، وكيتو لتناسب مختلف الاحتياجات الغذائية.',
    categoryActionBtn: 'استفسر عن هذا القسم',

    // Offers Section
    offersTitle: 'أقوى العروض الحالية',
    offersSubtitle: 'وفر أكثر مع خصوماتنا الحصرية والمستمرة على الأصناف الأكثر طلباً',
    offerMainTitle: 'حليب المراعي بودرة',
    offerMainBadge: '🔥العرض الأكثر مبيعاً ',
    offerMainDesc: '1800 جرام',
    offerMainTerms: '* السعر يشمل ضريبة القيمة المضافة. العرض ساري حتى نفاد الكمية.',
    offerActionBtn: 'اسأل عن هذا العرض عبر الواتساب',
    offerInquiryPlaceholder: 'مرحباً، أود الاستفسار عن العرض الاكثر مبيعاً',

    // Why Choose Us Section
    whyTitle: 'لماذا تختار عالم الحلويات؟',
    whySubtitle: 'المزايا التي تجعلنا الخيار المفضل والوجهة الدائمة لزبائننا الكرام',
    whyFeature1Title: 'تنوع لا محدود',
    whyFeature1Desc: 'نجمع لك الحلويات المحلية، والشرقية، والمنتجات المستوردة الحصرية تحت سقف واحد.',
    whyFeature2Title: 'أسعار مخفضة ومنافسة',
    whyFeature2Desc: 'نقدم حلوياتنا بأسعار الجملة المخفضة والخصومات اليومية التي تجعلنا الأوفر لك وعائلتك.',
    whyFeature3Title: 'جودة وتخزين مثالي',
    whyFeature3Desc: 'مستودعاتنا ومعارضنا مجهزة بأحدث تقنيات التبريد والتحكم بالحرارة لضمان جودة وطعم المنتجات.',
    whyFeature4Title: 'خدمة عملاء متميزة',
    whyFeature4Desc: 'فريق عملنا متواجد ومستعد دائماً لخدمتكم، وتلقي استفساراتكم والرد عليها بسرعة فائقة.',

    // Gallery Section
    galleryTitle: 'جولة داخل المعرض',
    gallerySubtitle: 'لمحات من الرفوف والمنتجات الشهية بانتظار زيارتكم الطيبة في معرضنا',

    // Contact Section
    contactTitle: 'تواصل معنا واستفسر',
    contactSubtitle: 'نسعد دائماً بالإجابة على جميع استفساراتكم حول توفر الأصناف واسعارها',
    contactFormName: 'الاسم الكريم',
    contactFormPhone: 'رقم الجوال',
    contactFormMessage: 'رسالتك أو استفسارك',
    contactFormSubmit: 'إرسال الاستفسار الآن',
    contactSuccessTitle: 'تم إرسال استفسارك بنجاح! 🎉',
    contactSuccessMsg: 'نشكرك على تواصلك مع عالم الحلويات. سيتصل بك فريق خدمة العملاء لدينا في أقرب وقت ممكن.',
    contactWhatsAppBtn: 'مراسلة فورية عبر واتساب',
    contactInfoTitle: 'معلومات الاتصال والمعرض',
    contactInfoAddress: 'العنوان وموقع المعرض',
    contactInfoAddressVal: 'مخطط الموسى بجوار اسواق حياكم ،بيشه ، المملكة العربية السعودية',
    contactInfoPhone: 'الهاتف المباشر للجوال / المعرض',
    contactInfoPhoneVal: '+966 50 960 7675',
    contactInfoHours: 'ساعات العمل الرسمية',
    contactInfoHoursVal: 'يومياً: من 8:00 صباحاً حتى 1:30 مساءً / الجمعة: من 12:30 ظهراً حتى 1:30 مساءً',
    contactMapTitle: 'موقعنا على الخريطة',

    // Footer
    footerCopyright: 'جميع الحقوق محفوظة © ٢٠٢٦ لعالم الحلويات الأولى (Candy World).',
    footerRights: 'صمم بكل حب وسكر 🍬'
  },
  en: {
    // Navigation
    navHome: 'Home',
    navAbout: 'About Us',
    navProducts: 'Our Categories',
    navOffers: 'Special Offers',
    navContact: 'Contact Us',

    // Hero Section
    heroTitle: 'Candy World',
    heroSubtitle: 'Your first destination for the most delicious sweets, fine chocolates, and imported food products at competitive prices!',
    heroTagline: 'Non-stop discounts and spectacular deals on a wide selection of local and global confections.',
    heroBadge: '🎉 Welcome to Candy World',
    heroCtaContact: 'Get in Touch Now',
    heroCtaOffers: 'Explore Our Offers',

    // About Section
    aboutTitle: 'About Candy World',
    aboutSubtitle: 'Our Story of Quality and Variety',
    aboutParagraph1: 'The story of First Sweets World began with a simple passion: to create a place where visitors can find everything they love, from sweets and snacks to beverages, all under one roof. From this passion, a store was born that brings together well-known favorites, new products, and imported selections, offering every visitor an enjoyable shopping experience full of discovery.',
    aboutParagraph2: 'At First Sweets World, we are committed to offering a diverse selection that suits different tastes, from chocolates and biscuits to coffee, beverages, and sugar-free products, while continuously keeping up with the latest products and trending flavors.',
    aboutStat1Value: '100%',
    aboutStat1Label: 'Guaranteed Quality',
    aboutStat2Value: '1,500+',
    aboutStat2Label: 'Sweets & Import Items',
    aboutStat3Value: 'Lowest',
    aboutStat3Label: 'In Prices & Discounts',

    // Product Categories Section
    categoriesTitle: 'Our Product Categories',
    categoriesSubtitle: 'A rich variety carefully chosen to satisfy every taste buds and sweet craving',
    categoryLocalSweetsTitle: 'Local and Imported Sweets & Gift Boxes',
    categoryLocalSweetsDesc: 'A diverse selection of local and international sweets, along with elegant gift boxes suitable for gifts and special occasions. We carefully choose distinctive products that combine delicious taste with attractive presentation.',
    categoryImportedSweetsTitle: 'Food Products',
    categoryImportedSweetsDesc: 'A complete range of essential food products and everyday household items. We offer a wide variety of trusted-quality products, bringing all your needs together in one place.',
    categoryChocolatesTitle: 'Nuts',
    categoryChocolatesDesc: 'A carefully selected range of roasted and raw nuts in a variety of flavors to suit every taste. Perfect for hospitality, gatherings, and light snacks at any time.',
    categorySnacksTitle: 'Drinks and Ice Cream',
    categorySnacksDesc: 'A refreshing selection of cold drinks and juices, alongside a variety of delicious ice cream options. Tasty choices that bring refreshment and happiness in every season.',
    categoryGiftBoxesTitle: 'Plastic Products',
    categoryGiftBoxesDesc: 'Everything you need for serving, storage, and everyday use. We provide practical and versatile products suitable for homes, special occasions, and trips.',
    categoryPartyPlattersTitle: 'Organic and Diet Products',
    categoryPartyPlattersDesc: 'Carefully selected options for those seeking a balanced lifestyle. Our range includes organic, low-sugar and diet, to suit different dietary needs..',
    categoryActionBtn: 'Ask About This Category',

    // Offers Section
    offersTitle: 'Our Best Current Offers',
    offersSubtitle: 'Save more with our exclusive and ongoing deals on the most popular candy assortments',
    offerMainTitle: 'Almarai Powdered Milk',
    offerMainBadge: '🔥 Best-Selling Offer',
    offerMainDesc: '1800g',
    offerMainTerms: '* Price includes VAT. The offer is valid while stocks last.',
    offerActionBtn: 'Ask About This Offer via WhatsApp',
    offerInquiryPlaceholder: 'Hello, I would like to inquire about the best-selling offer.',

    // Why Choose Us Section
    whyTitle: 'Why Choose Candy World?',
    whySubtitle: 'The advantages that make us the preferred choice and trusted destination for our valued customers',
    whyFeature1Title: 'Infinite Selection',
    whyFeature1Desc: 'We gather local, traditional, and exclusive imported items from all around the world under one beautiful roof.',
    whyFeature2Title: 'Wholesale Discounts',
    whyFeature2Desc: 'We offer our candies at highly competitive, bulk-discounted rates that guarantee the best value for your family.',
    whyFeature3Title: 'Perfect Storage',
    whyFeature3Desc: 'Our showrooms and warehouses are fully climate-controlled with advanced cooling technology to secure premium freshness.',
    whyFeature4Title: 'Superb Support',
    whyFeature4Desc: 'Our passionate, friendly team is always active and ready to assist you and answer all your inquiries instantly.',

    // Gallery Section
    galleryTitle: 'Showroom Gallery',
    gallerySubtitle: 'Take a virtual tour of our beautifully stocked shelves and mouth-watering candy assortments',

    // Contact Section
    contactTitle: 'Contact Us',
    contactSubtitle: 'We are always happy to answer your questions about product availability and prices',
    contactFormName: 'Full Name',
    contactFormPhone: 'Phone Number',
    contactFormMessage: 'Your Message / Inquiry',
    contactFormSubmit: 'Submit Inquiry Now',
    contactSuccessTitle: 'Inquiry Sent Successfully! 🎉',
    contactSuccessMsg: 'Thank you for reaching out to Candy World. Our customer service team will contact you shortly.',
    contactWhatsAppBtn: 'Instant WhatsApp Chat',
    contactInfoTitle: 'Showroom Details',
    contactInfoAddress: 'Store Addres & Location',
    contactInfoAddressVal: 'Alkhuzama, Bisha 67711, Kingdom of Saudi Arabia',
    contactInfoPhone: 'Showroom Phone / Mobile',
    contactInfoPhoneVal: '+966 50 960 7675',
    contactInfoHours: 'Working Hours',
    contactInfoHoursVal: 'Daily: 8:00 AM – 01:30 AM / Friday: 12:30 PM – 01:30 PM',
    contactMapTitle: 'Find Us On The Map',

    // Footer
    footerCopyright: 'All Rights Reserved © 2026 Candy World (عالم الحلويات الأولى).',
    footerRights: 'Crafted with Love & Sugar 🍬'
  }
};
