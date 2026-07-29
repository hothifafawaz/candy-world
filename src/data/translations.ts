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
    footerRights: 'صمم بكل حب وسكر 🍬',
    footerPrivacyLink: 'سياسة الخصوصية',
    footerPrivacyEmailLabel: 'لطلبات الخصوصية وبياناتك الشخصية:',
    footerCookiePrefsLink: 'تفضيلات ملفات تعريف الارتباط',

    // Contact form - consent checkbox
    contactConsentPrefix: 'أوافق على جمع ومعالجة بياناتي الشخصية (الاسم ورقم الجوال ومحتوى الرسالة) وفقاً لما هو موضح في',
    contactConsentLinkText: 'سياسة الخصوصية',
    contactConsentSuffix: '، بما في ذلك إرسالها إلى مزود خدمة خارجي لمعالجة نموذج التواصل.',

    // Cookie / tracking consent banner
    cookieBannerTitle: '🍪 نستخدم بيانات تحليلية',
    cookieBannerMessage: 'نستخدم أداة Vercel Analytics لفهم كيفية استخدام الزوار لموقعنا وتحسين تجربتهم. يتم إرسال هذه البيانات إلى مزود الخدمة خارج المملكة العربية السعودية. يمكنك قبول ذلك أو رفضه، ولن يؤثر اختيارك على استخدامك للموقع أو نموذج التواصل.',
    cookieBannerAccept: 'موافقة',
    cookieBannerReject: 'رفض',
    cookieBannerPolicyLinkText: 'اطّلع على سياسة الخصوصية',

    // Privacy Policy page
    privacyPageTitle: 'سياسة الخصوصية',
    privacyBackHome: 'العودة للرئيسية',
    privacyLastUpdated: 'آخر تحديث: 30 يوليو 2026',
    privacyIntro: 'تحترم شركة عالم الحلويات الأولى (Candy World) خصوصية زوار وعملاء موقعها الإلكتروني، وتلتزم بحماية بياناتهم الشخصية وفقاً لنظام حماية البيانات الشخصية (PDPL) الصادر في المملكة العربية السعودية ولوائحه التنفيذية الصادرة عن الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA). توضح هذه السياسة نوع البيانات التي نجمعها، وأسباب جمعها، ومدة الاحتفاظ بها، والجهات التي قد تتم مشاركتها معها، وحقوقك تجاه بياناتك.',

    privacyDataCollectedTitle: '1. البيانات الشخصية التي نجمعها',
    privacyDataCollectedIntro: 'عند استخدامك لنموذج التواصل في موقعنا، أو تصفحك للموقع بشكل عام، قد نجمع البيانات التالية فقط:',
    privacyDataItemName: 'الاسم الكامل، كما تُدخله في نموذج التواصل.',
    privacyDataItemPhone: 'رقم الجوال، كما تُدخله في نموذج التواصل أو عبر التواصل المباشر عبر واتساب.',
    privacyDataItemMessage: 'محتوى الرسالة أو الاستفسار الذي تكتبه في نموذج التواصل.',
    privacyDataItemAnalytics: 'بيانات استخدام واستعراض عامة وغير مباشرة (مثل الصفحات المُشاهدة ونوع الجهاز/المتصفح) عبر أداة التحليلات، في حال موافقتك على ذلك.',

    privacyPurposeTitle: '2. الغرض من جمع البيانات',
    privacyPurposeBody: 'نستخدم البيانات المذكورة أعلاه حصرياً للرد على استفساراتك حول منتجاتنا وعروضنا وأسعارها والتواصل معك عبر الهاتف أو واتساب أو البريد الإلكتروني بخصوص طلبك. أما بيانات التحليلات فتُستخدم بشكل مجمّع وغير تعريفي لفهم أداء الموقع وتحسين تجربة التصفح. لا نستخدم بياناتك لأي غرض تسويقي آخر دون موافقتك الصريحة.',

    privacyRetentionTitle: '3. مدة الاحتفاظ بالبيانات',
    privacyRetentionBody: 'يتم الاحتفاظ ببيانات نموذج التواصل (الاسم ورقم الجوال ونص الرسالة) لمدة لا تتجاوز 12 شهراً من تاريخ إرسال الاستفسار، وذلك في البريد الإلكتروني الخاص بفريق خدمة العملاء، ثم تُحذف بعد ذلك ما لم يستدعِ الأمر الاحتفاظ بها لمدة أطول للامتثال لالتزام نظامي أو لإتمام تعامل تجاري قائم معك.',

    privacyThirdPartyTitle: '4. مشاركة البيانات ونقلها خارج المملكة',
    privacyThirdPartyIntro: 'لا نبيع بياناتك الشخصية لأي جهة. ومع ذلك، نستعين ببعض مزودي الخدمات التقنية (معالجي بيانات) الذين قد تتم معالجة بياناتك لديهم خارج المملكة العربية السعودية، وفق الضوابط التي يفرضها نظام حماية البيانات الشخصية على النقل عبر الحدود:',
    privacyThirdPartyWeb3FormsName: 'Web3Forms — لاستقبال وتحويل رسائل نموذج التواصل',
    privacyThirdPartyWeb3FormsDetail: 'يُستخدم لمعالجة وإرسال رسالتك (الاسم ورقم الجوال والرسالة) إلى بريد فريق خدمة العملاء لدينا. قد تتم معالجة هذه البيانات على خوادم تقع خارج المملكة العربية السعودية.',
    privacyThirdPartyVercelName: 'Vercel Analytics (شركة Vercel Inc., الولايات المتحدة الأمريكية) — لتحليلات الاستخدام',
    privacyThirdPartyVercelDetail: 'يُستخدم فقط بعد موافقتك عبر شريط تفضيلات ملفات تعريف الارتباط، لجمع بيانات استخدام مجمّعة وغير تعريفية بهدف تحسين أداء الموقع. تتم معالجة هذه البيانات على خوادم تقع خارج المملكة العربية السعودية.',

    privacyRightsTitle: '5. حقوقك تجاه بياناتك الشخصية',
    privacyRightsIntro: 'بموجب نظام حماية البيانات الشخصية، يحق لك ما يلي:',
    privacyRightAccess: 'الاطّلاع على بياناتك الشخصية التي نحتفظ بها والحصول على نسخة منها.',
    privacyRightCorrection: 'طلب تصحيح أو تحديث أي بيانات غير دقيقة أو غير مكتملة.',
    privacyRightDeletion: 'طلب حذف بياناتك الشخصية متى ما لم يعد هناك مسوغ نظامي للاحتفاظ بها.',
    privacyRightWithdraw: 'سحب موافقتك على معالجة بياناتك في أي وقت، بما في ذلك موافقتك على أداة التحليلات.',
    privacyRightComplaint: 'تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (SDAIA) في حال اعتقادك أن معالجة بياناتك تخالف النظام.',

    privacyContactTitle: '6. التواصل بخصوص بياناتك',
    privacyContactBody: 'لممارسة أي من الحقوق أعلاه، أو لأي استفسار متعلق بخصوصية بياناتك، يرجى التواصل معنا عبر البريد الإلكتروني التالي وسنعمل على الرد على طلبك في أقرب وقت ممكن:',
    privacyContactEmailLabel: 'privacy@candyworldsa.com',

    privacyCookiesTitle: '7. ملفات تعريف الارتباط وأدوات التحليلات',
    privacyCookiesBody: 'نستخدم أداة Vercel Analytics لفهم كيفية تصفح الزوار لموقعنا. لا يتم تفعيل هذه الأداة إلا بعد موافقتك الصريحة عبر شريط التفضيلات الذي يظهر عند أول زيارة لك للموقع، ويمكنك تغيير اختيارك في أي وقت.',
    privacyCookiesManageBtn: 'إدارة تفضيلات التحليلات',
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
    footerRights: 'Crafted with Love & Sugar 🍬',
    footerPrivacyLink: 'Privacy Policy',
    footerPrivacyEmailLabel: 'For privacy requests about your data:',
    footerCookiePrefsLink: 'Cookie Preferences',

    // Contact form - consent checkbox
    contactConsentPrefix: 'I agree to the collection and processing of my personal data (name, phone number, and message) as described in the',
    contactConsentLinkText: 'Privacy Policy',
    contactConsentSuffix: ', including sending it to a third-party service to process this contact form.',

    // Cookie / tracking consent banner
    cookieBannerTitle: '🍪 We use analytics data',
    cookieBannerMessage: 'We use Vercel Analytics to understand how visitors use our site and to improve their experience. This data is sent to a service provider outside Saudi Arabia. You can accept or reject this, and your choice will not affect your ability to use the site or the contact form.',
    cookieBannerAccept: 'Accept',
    cookieBannerReject: 'Reject',
    cookieBannerPolicyLinkText: 'Read our Privacy Policy',

    // Privacy Policy page
    privacyPageTitle: 'Privacy Policy',
    privacyBackHome: 'Back to Home',
    privacyLastUpdated: 'Last updated: July 30, 2026',
    privacyIntro: 'Candy World respects the privacy of its website visitors and customers, and is committed to protecting their personal data in accordance with the Saudi Personal Data Protection Law (PDPL) and its implementing regulations issued by the Saudi Data & Artificial Intelligence Authority (SDAIA). This policy explains what data we collect, why we collect it, how long we keep it, who it may be shared with, and your rights over it.',

    privacyDataCollectedTitle: '1. Personal Data We Collect',
    privacyDataCollectedIntro: 'When you use our contact form, or browse our website generally, we may collect only the following data:',
    privacyDataItemName: 'Your full name, as entered in the contact form.',
    privacyDataItemPhone: 'Your phone number, as entered in the contact form or shared directly via WhatsApp.',
    privacyDataItemMessage: 'The content of the message or inquiry you write in the contact form.',
    privacyDataItemAnalytics: 'General, indirect usage/browsing data (such as pages viewed and device/browser type) via our analytics tool, only if you consent to it.',

    privacyPurposeTitle: '2. Purpose of Collecting Data',
    privacyPurposeBody: 'We use the data above solely to respond to your inquiries about our products, offers, and prices, and to contact you by phone, WhatsApp, or email regarding your request. Analytics data is used in aggregated, non-identifying form to understand site performance and improve the browsing experience. We do not use your data for any other marketing purpose without your explicit consent.',

    privacyRetentionTitle: '3. Data Retention Period',
    privacyRetentionBody: 'Contact form data (name, phone number, and message text) is retained for no longer than 12 months from the date the inquiry was submitted, in the customer service team\'s email inbox, after which it is deleted unless a longer retention period is required to comply with a legal obligation or to complete an ongoing business dealing with you.',

    privacyThirdPartyTitle: '4. Data Sharing & Cross-Border Transfer',
    privacyThirdPartyIntro: 'We do not sell your personal data to anyone. However, we rely on certain technical service providers (data processors) who may process your data outside the Kingdom of Saudi Arabia, subject to the cross-border transfer safeguards required by the PDPL:',
    privacyThirdPartyWeb3FormsName: 'Web3Forms — to receive and forward contact form messages',
    privacyThirdPartyWeb3FormsDetail: 'Used to process and deliver your message (name, phone number, and message) to our customer service inbox. This data may be processed on servers located outside Saudi Arabia.',
    privacyThirdPartyVercelName: 'Vercel Analytics (Vercel Inc., United States) — for usage analytics',
    privacyThirdPartyVercelDetail: 'Used only after you consent via the cookie/tracking preferences banner, to collect aggregated, non-identifying usage data to improve site performance. This data is processed on servers located outside Saudi Arabia.',

    privacyRightsTitle: '5. Your Rights Over Your Personal Data',
    privacyRightsIntro: 'Under the Personal Data Protection Law, you have the right to:',
    privacyRightAccess: 'Access the personal data we hold about you and receive a copy of it.',
    privacyRightCorrection: 'Request correction or updating of any inaccurate or incomplete data.',
    privacyRightDeletion: 'Request deletion (erasure) of your personal data once there is no longer a legal basis to retain it.',
    privacyRightWithdraw: 'Withdraw your consent to the processing of your data at any time, including your consent to analytics tracking.',
    privacyRightComplaint: 'File a complaint with the Saudi Data & Artificial Intelligence Authority (SDAIA) if you believe your data has been processed in violation of the law.',

    privacyContactTitle: '6. Contact Us About Your Data',
    privacyContactBody: 'To exercise any of the rights above, or for any question about the privacy of your data, please contact us at the email below and we will respond to your request as soon as possible:',
    privacyContactEmailLabel: 'privacy@candyworldsa.com',

    privacyCookiesTitle: '7. Cookies & Analytics Tools',
    privacyCookiesBody: 'We use Vercel Analytics to understand how visitors browse our website. This tool is only activated after your explicit consent via the preferences banner shown on your first visit, and you can change your choice at any time.',
    privacyCookiesManageBtn: 'Manage Analytics Preferences',
  }
};
