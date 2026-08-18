import React, { useState } from "react";

export const appLocalizationPageMeta = {
  title: "App Localization Services for iOS and Android | Stepes",
  description:
    "Localize iOS, Android, and cross-platform apps with expert translation, engineering, in-context review, testing, and continuous release support.",
  canonical: "https://www.stepes.com/app-localization-services/",
};

const trustItems = [
  {
    title: "100+ Languages",
    text: "Professional localization for established and emerging global markets.",
  },
  {
    title: "iOS, Android, and Cross-Platform",
    text: "Support for native and shared-code mobile applications.",
  },
  {
    title: "AI + Human Quality",
    text: "Automation, language assets, and professional human validation.",
  },
  {
    title: "Engineering + Testing",
    text: "Technical file processing, in-context review, and multilingual app QA.",
  },
];

const overviewItems = [
  {
    icon: "language",
    title: "Accurate Language",
    text: "Professional native linguists adapt interface content for meaning, tone, terminology, and user intent rather than translating isolated words literally.",
  },
  {
    icon: "phone",
    title: "Natural Mobile UX",
    text: "Buttons, menus, onboarding instructions, alerts, payment flows, and help content are localized around the way people actually use the app.",
  },
  {
    icon: "code",
    title: "Technical Integrity",
    text: "Variables, placeholders, markup, resource keys, plurals, character limits, locale identifiers, and file structures remain protected throughout the workflow.",
  },
  {
    icon: "release",
    title: "Release Readiness",
    text: "Localized resources are reviewed, tested, and prepared for reintegration according to your platforms, devices, quality requirements, and release schedule.",
  },
];

const experienceGroups = [
  {
    icon: "navigation",
    title: "Navigation and Interface",
    text: "Create clear, consistent product language across menus, tabs, buttons, forms, settings, dialogs, search, validation, and status messages.",
  },
  {
    icon: "user",
    title: "Onboarding and Accounts",
    text: "Localize welcome screens, registration, authentication, permissions, privacy notices, profiles, security settings, and account recovery.",
  },
  {
    icon: "payment",
    title: "Transactions and Subscriptions",
    text: "Support shopping, payments, in-app purchases, subscription plans, trials, renewals, pricing, taxes, currencies, confirmations, and cancellations.",
  },
  {
    icon: "bell",
    title: "Notifications and Communication",
    text: "Keep language consistent across push notifications, transactional alerts, email and SMS messages, announcements, security notices, and service updates.",
  },
  {
    icon: "support",
    title: "Embedded Help and Support",
    text: "Make contextual help, FAQs, troubleshooting, chat, knowledge-base links, feedback, contact flows, and safety guidance available in each user’s language.",
  },
  {
    icon: "store",
    title: "App Store and Release Content",
    text: "Extend the localized experience to app names, subtitles, descriptions, keywords, screenshots, preview content, promotions, in-app products, and release notes.",
  },
];

const localizationLevels = [
  {
    title: "App Translation",
    text: "Converts user-facing language from one language into another, including interface strings, messages, help content, notifications, and app-store descriptions.",
  },
  {
    title: "App Localization",
    text: "Adapts the complete mobile experience for a target language and market, including layout, writing direction, locale formats, visual context, and local user expectations.",
  },
  {
    title: "Internationalization",
    text: "Prepares the application architecture to support multiple languages and locales without major code changes for every market.",
    link: {
      label: "Software Internationalization Services",
      href: "https://www.stepes.com/software-internationalization-services/",
    },
  },
  {
    title: "Localization Engineering and Testing",
    text: "Protects the relationship between translated content and technical resources, then validates the localized experience in representative screens, builds, devices, and user journeys.",
  },
];

const platformData = {
  ios: {
    label: "iOS",
    title: "Native iOS App Localization",
    intro:
      "Create locally relevant iPhone and iPad experiences while preserving the structure and behavior of your Apple application. Stepes supports Swift, SwiftUI, Objective-C, and mixed or legacy codebases.",
    resources: [
      "Apple String Catalogs and .xcstrings",
      ".strings and .stringsdict resources",
      "XLIFF and localization exchange packages",
      "Interface, storyboard, and localized asset content",
      "App Store Connect metadata and release content",
      "CSV, XLSX, JSON, and custom exports",
    ],
    considerations: [
      {
        title: "Plurals and Variations",
        text: "Preserve plural structures and language-specific variants instead of forcing every locale into one generic sentence.",
      },
      {
        title: "Device and Width Conditions",
        text: "Adapt language for compact and expanded layouts while maintaining consistent meaning across supported screens.",
      },
      {
        title: "SwiftUI Context",
        text: "Use catalogs, comments, identifiers, screenshots, and developer guidance to give linguists the context behind each string.",
      },
      {
        title: "Accessibility Content",
        text: "Localize labels, hints, control names, image descriptions, and other assistive content alongside visible interface text.",
      },
    ],
  },
  android: {
    label: "Android",
    title: "Android App Localization",
    intro:
      "Deliver consistent Android experiences across languages, locales, screen sizes, and device environments. Stepes supports Kotlin, Java, Jetpack Compose, and traditional Android views.",
    resources: [
      "XML string, array, and plural resources",
      "Locale-specific values directories",
      "Jetpack Compose resource content",
      "App names and manifest-linked labels",
      "Google Play store listings and release notes",
      "JSON, CSV, XLSX, XLIFF, and custom exports",
    ],
    considerations: [
      {
        title: "Default Resource Completeness",
        text: "Maintain a reliable fallback so missing regional resources do not create blank, mixed-language, or unstable experiences.",
      },
      {
        title: "Regional Variants",
        text: "Differentiate locale-specific terminology, tone, formatting, and market conventions where the product requires them.",
      },
      {
        title: "Per-App Language Preferences",
        text: "Prepare resource coverage and locale definitions for users who select an app language independently of the device language.",
      },
      {
        title: "Pseudolocalization Readiness",
        text: "Use preflight testing to identify hard-coded text, limited interface space, and bidirectional-layout risks before translation begins.",
      },
    ],
  },
  cross: {
    label: "Cross-Platform",
    title: "Cross-Platform App Localization",
    intro:
      "Shared-code frameworks can streamline development, but each still has distinct resource conventions, platform dependencies, and language behavior. Stepes keeps product language consistent across iOS and Android outputs.",
    resources: [
      "Flutter ARB and generated localization resources",
      "React Native JSON, JavaScript, and TypeScript content",
      ".NET MAUI RESX workflows",
      "Ionic, Cordova, and Capacitor projects",
      "Unity and progressive web app resources",
      "Legacy Xamarin and proprietary environments",
    ],
    considerations: [
      {
        title: "Shared and Platform-Specific Strings",
        text: "Coordinate reusable product language while preserving content that differs between iOS and Android experiences.",
      },
      {
        title: "RTL and Language Switching",
        text: "Validate direction changes, third-party components, gestures, icons, and custom positioning in the localized build.",
      },
      {
        title: "Plural and Formatting Logic",
        text: "Protect framework-specific syntax and locale logic so translated content behaves as intended at runtime.",
      },
      {
        title: "Migration-Aware Support",
        text: "Localize legacy applications in their current structure or assess content workflows during migration to a newer framework.",
      },
    ],
  },
};

const engineeringCapabilities = [
  {
    icon: "search",
    title: "Resource Analysis",
    text: "Evaluate file formats, locales, repeated content, existing translations, translation-memory leverage, technical metadata, and delivery requirements.",
  },
  {
    icon: "shield",
    title: "Protected Technical Content",
    text: "Protect keys, variables, placeholders, markup, ICU expressions, formatting codes, URLs, product names, paths, and identifiers.",
  },
  {
    icon: "logic",
    title: "Plural and Select Logic",
    text: "Preserve plural, gender, formality, quantity, and grammatical structures instead of flattening required variants.",
  },
  {
    icon: "expand",
    title: "Character Limits and Text Expansion",
    text: "Adapt translations for constrained mobile interfaces and validate final fit against fonts, wrapping, screen sizes, and layout behavior.",
  },
];

const localeRows = [
  {
    title: "Dates and Times",
    text: "Adapt date order, month names, time formats, time zones, calendar behavior, and scheduling language according to locale and product requirements.",
  },
  {
    title: "Numbers and Currencies",
    text: "Review decimal and thousands separators, currency symbols, symbol placement, negative values, percentages, and pricing displays.",
  },
  {
    title: "Measurements and Units",
    text: "Convert or adapt units where the product and market require localized measurements while protecting technical or regulated values.",
  },
  {
    title: "Names, Addresses, and Forms",
    text: "Account for different address orders, postal formats, name structures, title conventions, keyboards, and form-field expectations.",
  },
  {
    title: "Language and Locale Fallback",
    text: "Define what users see when a specific regional translation is unavailable so fallback behavior remains intentional and complete.",
  },
  {
    title: "Right-to-Left Experiences",
    text: "Validate mirrored flow, navigation, direction-aware icons, mixed-direction text, numbers, input fields, charts, gestures, truncation, and wrapping.",
  },
  {
    title: "Visual and Cultural Adaptation",
    text: "Review images, symbols, colors, gestures, examples, names, maps, humor, and lifestyle references according to the target audience and product purpose.",
  },
];

const continuousSteps = [
  {
    title: "Connect",
    text: "Use APIs, repository workflows, file synchronization, webhooks, or customer-specific handoffs.",
  },
  {
    title: "Detect",
    text: "Identify new and modified resources while retaining approved translations for unchanged content.",
  },
  {
    title: "Reuse",
    text: "Apply translation memory, terminology, style guidance, approvals, and contextual metadata across releases.",
  },
  {
    title: "Review",
    text: "Coordinate product owners, regional teams, legal reviewers, subject-matter experts, and localization managers.",
  },
  {
    title: "Release",
    text: "Return validated resources in the expected format for multilingual build generation, testing, and deployment.",
  },
];

const aiControls = [
  {
    icon: "database",
    title: "Translation Memory and Approved Reuse",
    text: "Reuse previously approved translations where appropriate to reduce unnecessary retranslation and preserve consistency.",
  },
  {
    icon: "book",
    title: "Terminology-Constrained AI",
    text: "Guide translation with approved product terms, feature names, interface conventions, and subject-matter terminology.",
  },
  {
    icon: "check",
    title: "Automated Technical QA",
    text: "Detect missing translations, number differences, changed tags, altered placeholders, and inconsistent terminology.",
  },
  {
    icon: "users",
    title: "Professional Linguistic Review",
    text: "Native-speaking linguists review AI-assisted output for accuracy, fluency, terminology, context, tone, and usability.",
  },
  {
    icon: "context",
    title: "In-Context Product Validation",
    text: "Evaluate customer-facing language within screens, user journeys, prototypes, test environments, or localized builds.",
  },
  {
    icon: "shield",
    title: "Risk-Based Specialist Review",
    text: "Apply additional expertise to payment, medical, safety, privacy, legal, regulated, security-critical, and high-visibility content.",
  },
];

const testingTypes = [
  {
    icon: "language",
    title: "Linguistic Testing",
    text: "Accuracy, completeness, grammar, fluency, terminology, tone, contextual meaning, mixed-language content, and user-journey clarity.",
  },
  {
    icon: "layout",
    title: "Cosmetic and UI Testing",
    text: "Truncation, overlap, wrapping, alignment, cut-off controls, font rendering, line spacing, layout balance, and RTL positioning.",
  },
  {
    icon: "test",
    title: "Functional Localization Testing",
    text: "Language selection, locale formats, input, search, deep links, dynamic variables, notifications, forms, checkout, and fallback behavior.",
  },
  {
    icon: "device",
    title: "Device and Regression Testing",
    text: "Prioritized operating systems, screen sizes, orientations, devices, release risks, and targeted regression checks across product updates.",
  },
];

const industryItems = [
  {
    icon: "bank",
    title: "Financial Services and FinTech",
    text: "Localize onboarding, identity verification, transactions, investments, payments, risk disclosures, security alerts, fees, and support with clear, validated terminology.",
  },
  {
    icon: "health",
    title: "Healthcare and Digital Health",
    text: "Support patient portals, telehealth, care management, medical-device companion apps, consent, safety, appointments, and clinical or patient-facing content.",
  },
  {
    icon: "software",
    title: "Software and SaaS",
    text: "Keep mobile terminology consistent with web platforms, desktop products, documentation, onboarding, and enterprise support experiences.",
  },
  {
    icon: "cart",
    title: "Retail and E-Commerce",
    text: "Adapt discovery, catalogs, promotions, checkout, delivery, loyalty, returns, and customer communication across the complete shopping journey.",
  },
  {
    icon: "travel",
    title: "Travel and Hospitality",
    text: "Localize booking, itineraries, navigation, check-in, loyalty, transportation, guest services, dates, currencies, maps, and market conventions.",
  },
  {
    icon: "education",
    title: "Education and Learning",
    text: "Support course navigation, lessons, assessments, instructions, progress reporting, gamified learning, accessibility, and family communication.",
  },
  {
    icon: "media",
    title: "Media and Entertainment",
    text: "Coordinate discovery, subscriptions, playback, profiles, recommendations, support, captions, voice content, and market-facing promotions.",
  },
  {
    icon: "iot",
    title: "Connected Devices and IoT",
    text: "Align app content with setup, pairing, configuration, device status, automation, diagnostics, firmware updates, safety messaging, and technical support.",
  },
];

const workflowSteps = [
  {
    title: "Discovery and Readiness",
    text: "Confirm platforms, locales, resource formats, internationalization status, context, quality expectations, test access, and release schedule.",
  },
  {
    title: "Resource Analysis and Setup",
    text: "Analyze content volume, repetition, existing assets, technical elements, character constraints, terminology, roles, security, and review stages.",
  },
  {
    title: "Translation and Adaptation",
    text: "Qualified native linguists localize the app according to audience, subject matter, product language, tone, context, and interface constraints.",
  },
  {
    title: "Localization Engineering",
    text: "Process files while protecting keys, variables, placeholders, markup, plurals, locale identifiers, and nontranslatable elements.",
  },
  {
    title: "Linguistic Review and QA",
    text: "Review accuracy, fluency, terminology, completeness, consistency, technical integrity, and compliance with the agreed quality model.",
  },
  {
    title: "In-Context Validation",
    text: "Evaluate translations within screens, prototypes, test environments, or builds to resolve ambiguity, text fit, and user-flow issues.",
  },
  {
    title: "Localization Testing",
    text: "Perform the agreed linguistic, cosmetic, functional, locale, accessibility, device, RTL, and regression testing scope.",
  },
  {
    title: "Final Delivery and Release Support",
    text: "Return approved resources in the expected structure and coordinate implementation questions, corrections, store content, and launch updates.",
  },
  {
    title: "Continuous Updates",
    text: "Reuse terminology, translation memory, context, approvals, and review history as new and modified content moves through future releases.",
  },
];

const connectedSolutions = [
  {
    title: "Software Localization Services",
    text: "Coordinate mobile terminology with SaaS, web, desktop, and enterprise software experiences.",
    href: "https://www.stepes.com/software-localization-services/",
  },
  {
    title: "Technical Translation Services",
    text: "Align app language with user guides, technical documentation, setup instructions, and support content.",
    href: "https://www.stepes.com/technical-translation-services/",
  },
  {
    title: "Marketing Translation Services",
    text: "Adapt product launches, landing pages, campaigns, screenshots, and promotional content for the same markets.",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Multimedia Localization",
    text: "Localize tutorials, onboarding videos, product demonstrations, subtitles, captions, and voice-over.",
    href: "https://www.stepes.com/multimedia-localization/",
  },
  {
    title: "Game Localization Services",
    text: "Support dialogue adaptation, narrative consistency, culturalization, voice production, and gameplay testing.",
    href: "https://www.stepes.com/game-localization-services/",
  },
];

const whyStepes = [
  {
    title: "Mobile-Specific Expertise",
    text: "Linguistic, engineering, interface, testing, and release expertise for iOS, Android, and cross-platform applications.",
  },
  {
    title: "Professional Native Linguists",
    text: "Language professionals selected according to locale, subject matter, product needs, and workflow requirements.",
  },
  {
    title: "Context-Aware Translation",
    text: "Screenshots, designs, metadata, comments, prototypes, and builds help linguists understand the experience behind each string.",
  },
  {
    title: "Technical File Protection",
    text: "Code-aware processing and automated validation help protect keys, placeholders, markup, plurals, and resource formats.",
  },
  {
    title: "Translation Memory and Terminology",
    text: "Approved language assets support consistency across screens, releases, platforms, documentation, and communication.",
  },
  {
    title: "AI + Expert Human Review",
    text: "Automation and professional validation are applied according to the visibility, complexity, subject matter, and risk of the content.",
  },
  {
    title: "Flexible Testing",
    text: "Scale from focused linguistic review to multilingual UI, locale, functional, accessibility, device, and regression validation.",
  },
  {
    title: "Enterprise Quality and Security",
    text: "Controlled access, defined review roles, secure workflows, and ISO-certified quality processes support confidential product content.",
  },
];

const resourceItems = [
  {
    title: "How to Prepare a Mobile App for Localization",
    text: "Plan internationalization readiness, resource preparation, context, terminology, testing, and release requirements before translation begins.",
    href: "https://www.stepes.com/resources/app-localization/how-to-prepare-an-app-for-localization/",
    linkLabel: "Read the Preparation Guide",
  },
  {
    title: "iOS App Localization Guide",
    text: "Review String Catalogs, plural behavior, visual context, multilingual testing, accessibility content, and App Store localization.",
    href: "https://www.stepes.com/resources/app-localization/ios-app-localization-guide/",
    linkLabel: "Read the iOS Guide",
  },
  {
    title: "Android App Localization Guide",
    text: "Understand Android resources, locale directories, Jetpack Compose, per-app languages, pseudolocalization, and Google Play content.",
    href: "https://www.stepes.com/resources/app-localization/android-app-localization-guide/",
    linkLabel: "Read the Android Guide",
  },
  {
    title: "Mobile App Localization Testing Checklist",
    text: "Use a practical checklist for linguistic, visual, functional, locale, RTL, accessibility, device, and regression testing.",
    href: "https://www.stepes.com/resources/app-localization/mobile-app-localization-testing-checklist/",
    linkLabel: "View the Testing Checklist",
  },
  {
    title: "Continuous Localization for Mobile Apps",
    text: "Connect translation, review, QA, and delivery with agile development, APIs, repositories, and recurring releases.",
    href: "https://www.stepes.com/resources/app-localization/continuous-localization-for-mobile-apps/",
    linkLabel: "Read the Continuous Localization Guide",
  },
  {
    title: "App Localization Cost Guide",
    text: "Understand how languages, string volume, repetition, engineering, review, testing, and turnaround affect project pricing.",
    href: "https://www.stepes.com/resources/app-localization/app-localization-cost-guide/",
    linkLabel: "Review App Localization Costs",
  },
];

const faqs = [
  {
    question: "What are app localization services?",
    answer:
      "App localization services adapt a mobile application for users in specific languages and markets. The process may include translation, cultural adaptation, localization engineering, locale formatting, app-store content, in-context review, multilingual testing, and continuous update support. The objective is an app that reads naturally, displays correctly, preserves technical functionality, and supports local user expectations.",
  },
  {
    question: "What is the difference between app translation and app localization?",
    answer:
      "App translation converts interface content from one language into another. App localization has a broader scope and may also address text expansion, layout, writing direction, plural forms, date and number formats, currencies, measurements, images, input behavior, resource structures, app-store content, and multilingual testing.",
  },
  {
    question: "What is the difference between app localization and software localization?",
    answer:
      "Software localization is the broader category covering desktop software, SaaS platforms, web applications, enterprise systems, embedded interfaces, and mobile products. App localization focuses specifically on mobile experiences, including iOS and Android resources, compact UI constraints, permissions, notifications, subscriptions, in-app purchases, device behavior, app stores, and mobile testing.",
  },
  {
    question: "Does an app need to be internationalized before translation?",
    answer:
      "An app should separate localizable content from executable code and support different languages and locales. Stepes can review available resources and identify hard-coded text, incomplete structures, unsupported plural logic, insufficient interface space, or missing RTL support. Larger architectural changes normally require collaboration with your development team.",
  },
  {
    question: "Can Stepes work directly with iOS and Android resource files?",
    answer:
      "Yes. Stepes supports common formats including Apple String Catalogs, Apple Strings, Android XML, XLIFF, ARB, JSON, RESX, YAML, PO, CSV, and XLSX. Custom formats can be assessed to determine translatable content, protected technical elements, and required delivery structure.",
  },
  {
    question: "Does Stepes support Apple String Catalogs?",
    answer:
      "Yes. Stepes can process .xcstrings content and related exchange workflows while preserving translation keys, contextual information, plurals, variations, and technical structure. The workflow depends on how your development team manages String Catalogs and localized imports.",
  },
  {
    question: "Does Stepes localize apps developed with Flutter or React Native?",
    answer:
      "Yes. Stepes supports Flutter, React Native, .NET MAUI, and other shared-code frameworks. We work with the resource architecture selected by your development team and coordinate shared strings, platform-specific content, locale behavior, app-store resources, and testing across iOS and Android versions.",
  },
  {
    question: "Can you protect variables, tags, and placeholders?",
    answer:
      "Yes. Stepes uses file-processing rules, protected-content handling, automated QA, and professional review to identify changes to variables, placeholders, tags, formatting codes, keys, and other technical elements. The exact checks depend on the source format and structure.",
  },
  {
    question: "Can Stepes handle plurals and gender variations?",
    answer:
      "Yes. We preserve available plural, gender, select, and grammatical structures and route each required variant for translation. The source application must expose the necessary language logic for those variants to function correctly.",
  },
  {
    question: "Can you localize strings with character limits?",
    answer:
      "Yes. Character limits can be included with source strings or contextual metadata. Linguists adapt translations for the available space while preserving meaning and usability. Final fit should also be reviewed in the interface because fonts, screen size, wrapping, and layout behavior affect actual display.",
  },
  {
    question: "Does Stepes provide in-context app localization?",
    answer:
      "Yes. Context can be supplied through screenshots, Figma designs, prototypes, developer comments, screen identifiers, test environments, beta builds, or live interfaces. In-context review helps resolve ambiguity, inconsistency, and text-fit issues earlier.",
  },
  {
    question: "Can you localize App Store and Google Play listings?",
    answer:
      "Yes. Stepes localizes app names, subtitles, descriptions, keywords, promotional text, screenshots, previews, in-app product content, and release notes. Market keyword research, creative adaptation, and international ASO support can be scoped separately.",
  },
  {
    question: "Do you guarantee improved app-store rankings?",
    answer:
      "No responsible localization provider can guarantee a specific ranking position. Rankings and conversion depend on product relevance, market fit, competition, reviews, retention, metadata, creative assets, store policies, and other factors. Stepes focuses on accurate, locally relevant, search-aware content that helps users understand and evaluate the app.",
  },
  {
    question: "Does Stepes provide mobile app localization testing?",
    answer:
      "Yes. Testing can include linguistic QA, cosmetic UI review, locale validation, functional localization testing, RTL review, accessibility-language review, device testing, and regression testing. Scope depends on builds, devices, target languages, release risk, and customer responsibilities.",
  },
  {
    question: "Can Stepes test right-to-left app interfaces?",
    answer:
      "Yes. Stepes supports Arabic, Hebrew, and other right-to-left projects. Testing can evaluate translated content, mirrored layouts, navigation direction, icon behavior, mixed-direction text, numbers, punctuation, fields, wrapping, truncation, and other bidirectional-interface considerations.",
  },
  {
    question: "Can Stepes support app accessibility localization?",
    answer:
      "Yes. We can localize accessibility labels, hints, screen-reader content, image descriptions, captions, form guidance, and related text. Accessibility testing and technical conformance can also be included, with responsibilities defined between Stepes and your product-development team.",
  },
  {
    question: "Can AI translation be used for mobile apps?",
    answer:
      "AI translation can be effective for suitable app content when supported by approved terminology, translation memory, contextual information, technical QA, and professional human review. High-visibility, brand-sensitive, regulated, transactional, safety-related, or context-dependent content usually requires stronger human validation.",
  },
  {
    question: "Can Stepes support frequent app releases?",
    answer:
      "Yes. Stepes supports continuous app localization for agile teams. New and changed strings can move through translation, review, QA, and delivery while approved translations, terminology, context, and review history are reused across releases.",
  },
  {
    question: "How long does app localization take?",
    answer:
      "Timing depends on word and string volume, target languages, file readiness, existing translation assets, content complexity, engineering, context, review stages, testing scope, build availability, and release date. Stepes reviews these factors and proposes a schedule aligned with your product plan.",
  },
  {
    question: "How much does app localization cost?",
    answer:
      "Pricing depends on languages, source volume, translation-memory leverage, linguistic workflow, file complexity, localization engineering, in-context review, testing, specialist requirements, and turnaround. Stepes provides a detailed quotation after reviewing the source resources and requirements.",
  },
  {
    question: "What should we provide for an app localization quote?",
    answer:
      "Send representative source resources together with target languages, platforms, framework, release date, existing translations, screenshots, context, and requested testing scope. When final files are not ready, Stepes can begin with sample resources or estimated string volumes and refine the quotation later.",
  },
  {
    question: "How does Stepes protect confidential app content?",
    answer:
      "Stepes supports confidential and unreleased product content through secure infrastructure, controlled access, project-specific permissions, confidentiality obligations, and defined delivery workflows. Additional customer security, legal, or procurement requirements can be reviewed during project setup.",
  },
];

function Icon({ name, size = 22 }) {
  const props = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const paths = {
    language: <><path d="M4 5h9"/><path d="M8.5 3v2"/><path d="M6 9c1.8 2.3 4 4 6.5 5"/><path d="M12 5c-.8 4.2-3.3 7.2-7 9"/><path d="m14 21 3.5-8 3.5 8"/><path d="M15.3 18h4.4"/></>,
    phone: <><rect x="6.5" y="2" width="11" height="20" rx="2.4"/><path d="M10 5h4"/><path d="M11 18.5h2"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 5-4 14"/></>,
    release: <><path d="M12 3v12"/><path d="m7 8 5-5 5 5"/><path d="M5 14v5h14v-5"/></>,
    navigation: <><path d="M4 5h16"/><path d="M4 12h10"/><path d="M4 19h7"/><path d="m17 15 3 3-3 3"/></>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5 21c.7-4.1 3-6 7-6s6.3 1.9 7 6"/></>,
    payment: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10 21h4"/></>,
    support: <><circle cx="12" cy="12" r="9"/><path d="M8.5 9a3.6 3.6 0 0 1 7 1c0 2.5-3.5 2.3-3.5 5"/><path d="M12 18h.01"/></>,
    store: <><path d="M4 10h16l-1-5H5l-1 5Z"/><path d="M6 10v9h12v-9"/><path d="M9 19v-5h6v5"/><path d="M4 10c0 1.4 1.1 2.5 2.5 2.5S9 11.4 9 10c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5c0 1.4 1.1 2.5 2.5 2.5S20 11.4 20 10"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/></>,
    logic: <><path d="M5 4v6c0 2 1.5 3.5 3.5 3.5H15"/><path d="m12 10 3 3.5-3 3.5"/><circle cx="5" cy="4" r="1.5"/><circle cx="18" cy="13.5" r="1.5"/></>,
    expand: <><path d="M8 3H3v5"/><path d="m3 3 6 6"/><path d="M16 21h5v-5"/><path d="m21 21-6-6"/><path d="M21 8V3h-5"/><path d="m21 3-6 6"/><path d="M3 16v5h5"/><path d="m3 21 6-6"/></>,
    database: <><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5Z"/><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.6 2.6L16.5 9"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    context: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10"/><path d="M7 12h5"/><path d="M7 16h7"/><circle cx="17" cy="15" r="2"/></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 9v12"/></>,
    test: <><path d="M9 3h6"/><path d="M10 3v5l-5 9a2.5 2.5 0 0 0 2.2 4h9.6a2.5 2.5 0 0 0 2.2-4l-5-9V3"/><path d="M8 15h8"/></>,
    device: <><rect x="2" y="5" width="14" height="10" rx="2"/><path d="M7 19h4"/><path d="M9 15v4"/><rect x="17" y="8" width="5" height="11" rx="1.5"/></>,
    bank: <><path d="m3 9 9-5 9 5"/><path d="M5 10v8"/><path d="M9 10v8"/><path d="M15 10v8"/><path d="M19 10v8"/><path d="M3 20h18"/></>,
    health: <><path d="M12 21s-8-4.7-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 6.3-8 11-8 11Z"/><path d="M9 12h6"/><path d="M12 9v6"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="m8 13-2 2 2 2"/><path d="m16 13 2 2-2 2"/><path d="m13.5 12-3 6"/></>,
    cart: <><circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L21 8H7"/></>,
    travel: <><path d="M22 2 9 15"/><path d="m22 2-6 20-4-9-9-4 19-7Z"/></>,
    education: <><path d="m3 10 9-5 9 5-9 5-9-5Z"/><path d="M7 12.5V17c3 2 7 2 10 0v-4.5"/><path d="M21 10v6"/></>,
    media: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m10 9 5 3-5 3V9Z"/></>,
    iot: <><rect x="7" y="8" width="10" height="8" rx="2"/><path d="M9 3v3"/><path d="M15 3v3"/><path d="M9 18v3"/><path d="M15 18v3"/><path d="M3 10h2"/><path d="M3 14h2"/><path d="M19 10h2"/><path d="M19 14h2"/></>,
    file: <><path d="M6 2h8l4 4v16H6V2Z"/><path d="M14 2v5h5"/><path d="M9 13h6"/><path d="M9 17h6"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/><path d="M12 14v3"/></>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };

  return <svg {...props}>{paths[name] || paths.check}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, centered = false, dark = false }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}${dark ? " heading-dark" : ""}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of a multilingual app localization workflow">
      <div className="hero-visual-grid" />
      <div className="hero-workbench">
        <div className="workbench-topbar">
          <div>
            <span className="workbench-dot" />
            <span className="workbench-dot" />
            <span className="workbench-dot" />
          </div>
          <span className="workbench-label">Mobile localization review</span>
        </div>
        <div className="workbench-body">
          <div className="string-panel">
            <div className="string-kicker">Selected string</div>
            <div className="string-key">checkout.payment_confirmed</div>
            <div className="string-card source">
              <span>English</span>
              <strong>Payment confirmed</strong>
              <small>Your receipt is ready.</small>
            </div>
            <div className="string-card target">
              <span>Spanish · Mexico</span>
              <strong>Pago confirmado</strong>
              <small>Tu recibo está listo.</small>
            </div>
            <div className="validation-row">
              <Icon name="check" size={17} />
              <span>Terminology, placeholders, and character limit verified</span>
            </div>
          </div>
          <div className="preview-panel">
            <div className="phone-shell phone-main">
              <div className="phone-speaker" />
              <div className="app-screen">
                <div className="app-status"><span>9:41</span><span>● ◔</span></div>
                <div className="app-header"><span>‹</span><strong>Confirmación</strong><span>•••</span></div>
                <div className="success-mark"><Icon name="check" size={25} /></div>
                <h4>Pago confirmado</h4>
                <p>Tu recibo está listo.</p>
                <div className="receipt-row"><span>Total</span><strong>$248.00</strong></div>
                <div className="receipt-row"><span>Método</span><strong>•••• 4208</strong></div>
                <div className="screen-button">Ver recibo</div>
              </div>
            </div>
            <div className="locale-badge locale-one">ES-MX</div>
            <div className="locale-badge locale-two">AR</div>
            <div className="locale-badge locale-three">JA</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContextVisual() {
  return (
    <div className="context-visual" aria-label="In-context app localization preview">
      <div className="context-toolbar">
        <div className="context-tool-title"><Icon name="context" size={18} /> In-context review</div>
        <span>Checkout · ES-MX</span>
      </div>
      <div className="context-stage">
        <div className="context-phone">
          <div className="context-phone-top" />
          <div className="context-screen">
            <div className="context-nav">‹ <strong>Resumen del pedido</strong></div>
            <div className="context-card-row"><span>Plan mensual</span><strong>$29.00</strong></div>
            <div className="context-card-row"><span>Impuestos</span><strong>$2.32</strong></div>
            <div className="context-divider" />
            <div className="context-total"><span>Total</span><strong>$31.32</strong></div>
            <div className="context-primary">Confirmar compra</div>
            <div className="context-secondary">Cancelar</div>
          </div>
        </div>
        <div className="annotation annotation-one">
          <span>01</span>
          <div><strong>Action intent confirmed</strong><small>Primary purchase action</small></div>
        </div>
        <div className="annotation annotation-two">
          <span>02</span>
          <div><strong>Text fit verified</strong><small>Compact mobile width</small></div>
        </div>
        <div className="annotation annotation-three">
          <span>03</span>
          <div><strong>Locale format checked</strong><small>Currency and decimal style</small></div>
        </div>
      </div>
    </div>
  );
}

function AppLocalizationServicesWireframe() {
  const [activePlatform, setActivePlatform] = useState("ios");
  const [openFaq, setOpenFaq] = useState(0);
  const platform = platformData[activePlatform];

  return (
    <main className="app-loc-page">
      <style>{`
        .app-loc-page,
        .app-loc-page * { box-sizing: border-box; }
        .app-loc-page {
          --magenta: #C11D63;
          --magenta-deep: #9F1D55;
          --magenta-dark: #7A1542;
          --blush: #FDF2F7;
          --blush-strong: #F8E4ED;
          --dark: #151523;
          --dark-soft: #202033;
          --ink: #171827;
          --body: #4D5162;
          --muted: #6B7280;
          --line: #E3E5EC;
          --line-dark: rgba(255,255,255,.14);
          --surface: #F7F8FB;
          width: 100%;
          overflow: hidden;
          color: var(--ink);
          background: #fff;
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .app-loc-page h1,
        .app-loc-page h2,
        .app-loc-page h3,
        .app-loc-page h4,
        .app-loc-page p { margin: 0; }
        .app-loc-page h1,
        .app-loc-page h2,
        .app-loc-page h3,
        .app-loc-page h4 { font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        .app-loc-page h1 { font-size: 48px; line-height: 1.08; letter-spacing: -.035em; font-weight: 600; }
        .app-loc-page h2 { font-size: 36px; line-height: 1.15; letter-spacing: -.025em; font-weight: 600; }
        .app-loc-page h3 { font-size: 24px; line-height: 1.24; letter-spacing: -.018em; font-weight: 600; }
        .app-loc-page h4 { font-size: 18px; line-height: 1.35; font-weight: 600; }
        .app-loc-page p { color: var(--body); font-size: 16px; }
        .app-loc-page a { color: inherit; }
        .app-loc-page .container { width: min(100%, 1392px); max-width: 1392px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .app-loc-page .section { padding: 96px 0; }
        .app-loc-page .section-dense { padding: 80px 0; }
        .app-loc-page .section-soft { background: var(--surface); }
        .app-loc-page .section-blush { background: var(--blush); }
        .app-loc-page .section-dark { background: var(--dark); color: #fff; }
        .app-loc-page .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.25 !important;
          letter-spacing: .16em !important;
          font-weight: 600 !important;
          text-transform: uppercase;
          margin: 0 0 16px !important;
        }
        .app-loc-page .eyebrow.eyebrow-dark { color: #F2A7C6 !important; }
        .app-loc-page .section-heading { max-width: 780px; margin-bottom: 48px; }
        .app-loc-page .section-heading h2 { max-width: 740px; }
        .app-loc-page .section-heading p { margin-top: 20px; max-width: 780px; font-size: 18px; line-height: 1.65; }
        .app-loc-page .section-heading.centered { margin-left: auto; margin-right: auto; text-align: center; }
        .app-loc-page .section-heading.centered h2,
        .app-loc-page .section-heading.centered p { margin-left: auto; margin-right: auto; }
        .app-loc-page .heading-dark h2 { color: #fff; }
        .app-loc-page .heading-dark p { color: #C9CBD5; }
        .app-loc-page .button-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .app-loc-page .btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          border: 1px solid transparent;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }
        .app-loc-page .btn-primary,
        .app-loc-page .btn-primary:link,
        .app-loc-page .btn-primary:visited,
        .app-loc-page .btn-primary:hover,
        .app-loc-page .btn-primary:active,
        .app-loc-page .btn-primary:focus,
        .app-loc-page .btn-primary:focus-visible,
        .app-loc-page .btn-primary span,
        .app-loc-page .btn-primary svg {
          color: #fff !important;
          fill: none;
          stroke: #fff !important;
        }
        .app-loc-page .btn-primary { background: var(--magenta); box-shadow: 0 10px 24px rgba(193,29,99,.22); }
        .app-loc-page .btn-primary:hover { background: var(--magenta-deep); transform: translateY(-1px); box-shadow: 0 13px 28px rgba(193,29,99,.27); }
        .app-loc-page .btn-secondary { background: #fff; color: var(--ink); border-color: #D7D9E2; }
        .app-loc-page .btn-secondary:hover { border-color: #B9BDC9; transform: translateY(-1px); }
        .app-loc-page .btn:focus-visible,
        .app-loc-page .editorial-link:focus-visible,
        .app-loc-page .platform-tab:focus-visible,
        .app-loc-page .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
        .app-loc-page .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
        }
        .app-loc-page .editorial-link svg { transition: transform .2s ease; }
        .app-loc-page .editorial-link:hover svg { transform: translateX(3px); }
        .app-loc-page .icon-box {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--blush);
          color: var(--magenta);
          flex: 0 0 auto;
        }

        .app-loc-page .hero { padding: 104px 0 88px; border-bottom: 1px solid var(--line); }
        .app-loc-page .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(500px, .98fr); gap: 70px; align-items: center; }
        .app-loc-page .hero-copy { max-width: 690px; }
        .app-loc-page .hero-copy h1 { max-width: 680px; }
        .app-loc-page .hero-copy > p { margin-top: 24px; max-width: 680px; font-size: 18px; line-height: 1.65; }
        .app-loc-page .hero-mini-proof { display: flex; flex-wrap: wrap; gap: 10px 18px; margin-top: 30px; }
        .app-loc-page .hero-mini-proof span { display: inline-flex; align-items: center; gap: 8px; color: #45495A; font-size: 16px; font-weight: 600; }
        .app-loc-page .hero-mini-proof svg { color: var(--magenta); }
        .app-loc-page .hero-visual { position: relative; min-height: 540px; display: flex; align-items: center; justify-content: center; }
        .app-loc-page .hero-visual-grid { position: absolute; inset: 20px 0 0 60px; background-image: linear-gradient(rgba(23,24,39,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(23,24,39,.05) 1px, transparent 1px); background-size: 30px 30px; mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 80%, transparent); }
        .app-loc-page .hero-workbench { position: relative; width: 100%; max-width: 600px; border: 1px solid #DADDE6; background: rgba(255,255,255,.96); border-radius: 28px; box-shadow: 0 26px 70px rgba(26,28,43,.13); overflow: hidden; }
        .app-loc-page .workbench-topbar { min-height: 52px; display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 0 18px; border-bottom: 1px solid var(--line); background: #FBFBFD; }
        .app-loc-page .workbench-topbar > div { display: flex; gap: 6px; }
        .app-loc-page .workbench-dot { width: 8px; height: 8px; border-radius: 50%; background: #D7D9E1; display: block; }
        .app-loc-page .workbench-label { color: #696D7C; font-size: 13px; font-weight: 600; }
        .app-loc-page .workbench-body { display: grid; grid-template-columns: 1.08fr .92fr; min-height: 430px; }
        .app-loc-page .string-panel { padding: 24px; border-right: 1px solid var(--line); }
        .app-loc-page .string-kicker { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
        .app-loc-page .string-key { margin-top: 7px; padding: 9px 11px; border: 1px solid #E2E4EB; border-radius: 10px; background: #F7F8FA; color: #505464; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; overflow-wrap: anywhere; }
        .app-loc-page .string-card { margin-top: 16px; padding: 17px; border: 1px solid var(--line); border-radius: 16px; }
        .app-loc-page .string-card.target { border-color: rgba(193,29,99,.25); background: var(--blush); }
        .app-loc-page .string-card span { display: block; color: #737786; font-size: 12px; font-weight: 600; }
        .app-loc-page .string-card strong { display: block; margin-top: 7px; font-size: 16px; line-height: 1.35; }
        .app-loc-page .string-card small { display: block; margin-top: 4px; color: #676B7A; font-size: 13px; line-height: 1.4; }
        .app-loc-page .validation-row { display: flex; align-items: flex-start; gap: 8px; margin-top: 18px; padding-top: 16px; border-top: 1px solid var(--line); color: #555968; font-size: 13px; line-height: 1.45; }
        .app-loc-page .validation-row svg { margin-top: 1px; color: var(--magenta); flex: 0 0 auto; }
        .app-loc-page .preview-panel { position: relative; display: flex; align-items: center; justify-content: center; padding: 22px 16px; background: linear-gradient(145deg, #F7F8FB, #FDF2F7); }
        .app-loc-page .phone-shell { width: 190px; border: 7px solid #20212B; border-radius: 30px; background: #fff; box-shadow: 0 20px 40px rgba(22,24,38,.2); overflow: hidden; }
        .app-loc-page .phone-speaker { width: 52px; height: 11px; margin: 7px auto 0; border-radius: 0 0 10px 10px; background: #20212B; }
        .app-loc-page .app-screen { padding: 11px 12px 16px; }
        .app-loc-page .app-status { display: flex; justify-content: space-between; color: #565A68; font-size: 8px; }
        .app-loc-page .app-header { display: flex; justify-content: space-between; align-items: center; margin-top: 13px; font-size: 10px; }
        .app-loc-page .app-header strong { font-size: 11px; }
        .app-loc-page .success-mark { width: 46px; height: 46px; display: flex; align-items: center; justify-content: center; margin: 26px auto 12px; border-radius: 50%; color: var(--magenta); background: var(--blush); }
        .app-loc-page .app-screen h4 { text-align: center; font-size: 14px; }
        .app-loc-page .app-screen > p { margin-top: 4px; text-align: center; font-size: 10px; color: #767A88; }
        .app-loc-page .receipt-row { display: flex; justify-content: space-between; gap: 8px; margin-top: 15px; padding-bottom: 9px; border-bottom: 1px solid #ECEEF2; color: #656978; font-size: 9px; }
        .app-loc-page .receipt-row strong { color: #2D2F3B; }
        .app-loc-page .screen-button { margin-top: 18px; padding: 10px; border-radius: 9px; background: var(--magenta); color: #fff; text-align: center; font-size: 10px; font-weight: 600; }
        .app-loc-page .locale-badge { position: absolute; min-width: 45px; padding: 7px 9px; border-radius: 999px; background: #fff; border: 1px solid #E0E2E9; box-shadow: 0 8px 20px rgba(32,34,48,.12); color: #555968; text-align: center; font-size: 10px; font-weight: 600; }
        .app-loc-page .locale-one { right: 8px; top: 54px; }
        .app-loc-page .locale-two { right: 20px; bottom: 65px; }
        .app-loc-page .locale-three { left: 5px; top: 110px; }

        .app-loc-page .trust-band { border-bottom: 1px solid var(--line); }
        .app-loc-page .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .app-loc-page .trust-item { padding: 28px 24px; border-right: 1px solid var(--line); }
        .app-loc-page .trust-item:first-child { padding-left: 0; }
        .app-loc-page .trust-item:last-child { border-right: 0; padding-right: 0; }
        .app-loc-page .trust-item h3 { font-size: 18px; }
        .app-loc-page .trust-item p { margin-top: 7px; color: #666A79; font-size: 16px; line-height: 1.5; }

        .app-loc-page .overview-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 92px; align-items: start; }
        .app-loc-page .overview-copy { position: sticky; top: 24px; }
        .app-loc-page .overview-copy > p { margin-top: 22px; font-size: 18px; }
        .app-loc-page .overview-list { border-top: 1px solid var(--line); }
        .app-loc-page .overview-row { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .app-loc-page .overview-row h3 { font-size: 21px; }
        .app-loc-page .overview-row p { margin-top: 8px; }

        .app-loc-page .experience-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); background: #fff; }
        .app-loc-page .experience-item { min-height: 270px; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .app-loc-page .experience-item h3 { margin-top: 20px; font-size: 21px; }
        .app-loc-page .experience-item p { margin-top: 12px; }

        .app-loc-page .levels-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 84px; }
        .app-loc-page .level-summary { max-width: 480px; }
        .app-loc-page .level-summary p { margin-top: 20px; font-size: 18px; }
        .app-loc-page .level-list { border-top: 1px solid var(--line); }
        .app-loc-page .level-row { display: grid; grid-template-columns: 210px 1fr; gap: 36px; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .app-loc-page .level-row h3 { font-size: 20px; }
        .app-loc-page .level-row p { margin-top: 0; }
        .app-loc-page .level-row .editorial-link { margin-top: 8px; }

        .app-loc-page .platform-shell { border: 1px solid #DDE0E8; border-radius: 30px; background: #fff; overflow: hidden; box-shadow: 0 18px 45px rgba(27,29,45,.07); }
        .app-loc-page .platform-tabs { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid var(--line); background: #FAFAFC; }
        .app-loc-page .platform-tab { position: relative; min-height: 70px; border: 0; border-right: 1px solid var(--line); background: transparent; color: #565A68; font: inherit; font-size: 16px; font-weight: 600; cursor: pointer; }
        .app-loc-page .platform-tab:last-child { border-right: 0; }
        .app-loc-page .platform-tab.active { color: var(--magenta); background: #fff; }
        .app-loc-page .platform-tab.active:after { content: ""; position: absolute; left: 28px; right: 28px; bottom: -1px; height: 3px; border-radius: 999px 999px 0 0; background: var(--magenta); }
        .app-loc-page .platform-content { display: grid; grid-template-columns: .9fr 1.1fr; gap: 68px; padding: 50px; }
        .app-loc-page .platform-intro h3 { font-size: 30px; }
        .app-loc-page .platform-intro > p { margin-top: 18px; font-size: 17px; }
        .app-loc-page .resource-list { margin-top: 27px; border-top: 1px solid var(--line); }
        .app-loc-page .resource-list-item { display: flex; align-items: flex-start; gap: 10px; padding: 12px 0; border-bottom: 1px solid var(--line); color: #454958; font-size: 16px; }
        .app-loc-page .resource-list-item svg { margin-top: 3px; color: var(--magenta); flex: 0 0 auto; }
        .app-loc-page .platform-considerations { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .app-loc-page .platform-consideration { min-height: 190px; padding: 24px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .app-loc-page .platform-consideration h4 { font-size: 18px; }
        .app-loc-page .platform-consideration p { margin-top: 9px; }

        .app-loc-page .engineering-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 84px; align-items: center; }
        .app-loc-page .engineering-copy > p { margin-top: 20px; color: #C9CBD5; font-size: 18px; }
        .app-loc-page .engineering-copy .editorial-link { margin-top: 24px; color: #F2A7C6; }
        .app-loc-page .engineering-list { margin-top: 35px; border-top: 1px solid var(--line-dark); }
        .app-loc-page .engineering-row { display: grid; grid-template-columns: 42px 1fr; gap: 15px; padding: 20px 0; border-bottom: 1px solid var(--line-dark); }
        .app-loc-page .engineering-row .icon-box { width: 38px; height: 38px; border-radius: 12px; background: rgba(242,167,198,.10); color: #F2A7C6; }
        .app-loc-page .engineering-row h3 { color: #fff; font-size: 18px; }
        .app-loc-page .engineering-row p { margin-top: 6px; color: #BCBFCA; }
        .app-loc-page .code-panel { border: 1px solid var(--line-dark); border-radius: 26px; background: var(--dark-soft); overflow: hidden; box-shadow: 0 24px 50px rgba(0,0,0,.22); }
        .app-loc-page .code-panel-header { min-height: 58px; display: flex; align-items: center; justify-content: space-between; padding: 0 22px; border-bottom: 1px solid var(--line-dark); }
        .app-loc-page .code-panel-header strong { font-size: 15px; }
        .app-loc-page .code-panel-header span { color: #AEB1BE; font-size: 13px; }
        .app-loc-page .code-window { padding: 24px; background: #191927; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 13px; line-height: 1.8; color: #D9DBE4; overflow-wrap: anywhere; }
        .app-loc-page .code-line { display: block; }
        .app-loc-page .code-key { color: #F2A7C6; }
        .app-loc-page .code-value { color: #A9D7C2; }
        .app-loc-page .code-variable { color: #F0CA8A; }
        .app-loc-page .qa-checks { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0; border-top: 1px solid var(--line-dark); }
        .app-loc-page .qa-check { display: flex; align-items: flex-start; gap: 9px; padding: 17px 18px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); color: #D4D6DF; font-size: 14px; }
        .app-loc-page .qa-check:nth-child(2n) { border-right: 0; }
        .app-loc-page .qa-check svg { margin-top: 2px; color: #F2A7C6; flex: 0 0 auto; }
        .app-loc-page .format-strip { margin-top: 20px; padding: 18px 20px; border: 1px solid var(--line-dark); border-radius: 16px; color: #C8CAD4; font-size: 14px; line-height: 1.7; }

        .app-loc-page .context-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 82px; align-items: center; }
        .app-loc-page .context-copy > p { margin-top: 20px; font-size: 18px; }
        .app-loc-page .context-list { margin: 26px 0 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px 22px; }
        .app-loc-page .context-list li { display: flex; align-items: flex-start; gap: 9px; color: #4B4F5E; font-size: 16px; }
        .app-loc-page .context-list svg { margin-top: 3px; color: var(--magenta); flex: 0 0 auto; }
        .app-loc-page .context-copy .editorial-link { margin-top: 25px; }
        .app-loc-page .context-visual { border: 1px solid #DDE0E8; border-radius: 28px; background: #fff; box-shadow: 0 22px 55px rgba(28,30,44,.1); overflow: hidden; }
        .app-loc-page .context-toolbar { min-height: 58px; display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 0 20px; border-bottom: 1px solid var(--line); background: #FAFAFC; color: #646877; font-size: 13px; }
        .app-loc-page .context-tool-title { display: flex; align-items: center; gap: 8px; color: #30323F; font-weight: 600; }
        .app-loc-page .context-tool-title svg { color: var(--magenta); }
        .app-loc-page .context-stage { position: relative; min-height: 500px; padding: 34px 25px; background: linear-gradient(145deg, #F7F8FB, #FDF2F7); overflow: hidden; }
        .app-loc-page .context-phone { width: 230px; margin: 0 auto; border: 8px solid #242531; border-radius: 34px; background: #fff; box-shadow: 0 24px 50px rgba(32,34,48,.22); }
        .app-loc-page .context-phone-top { width: 68px; height: 13px; margin: 0 auto; border-radius: 0 0 10px 10px; background: #242531; }
        .app-loc-page .context-screen { padding: 20px 16px 24px; }
        .app-loc-page .context-nav { color: #2D303D; font-size: 12px; }
        .app-loc-page .context-nav strong { margin-left: 15px; font-size: 13px; }
        .app-loc-page .context-card-row { display: flex; justify-content: space-between; gap: 10px; margin-top: 27px; color: #656978; font-size: 11px; }
        .app-loc-page .context-card-row + .context-card-row { margin-top: 13px; }
        .app-loc-page .context-divider { height: 1px; margin: 18px 0; background: #E5E7EC; }
        .app-loc-page .context-total { display: flex; justify-content: space-between; gap: 10px; font-size: 13px; }
        .app-loc-page .context-primary { margin-top: 26px; padding: 12px; border-radius: 10px; background: var(--magenta); color: #fff; text-align: center; font-size: 11px; font-weight: 600; }
        .app-loc-page .context-secondary { margin-top: 10px; color: #686C7A; text-align: center; font-size: 10px; font-weight: 600; }
        .app-loc-page .annotation { position: absolute; display: flex; align-items: center; gap: 9px; min-width: 210px; padding: 12px 14px; border: 1px solid #DFE1E8; border-radius: 14px; background: rgba(255,255,255,.96); box-shadow: 0 10px 25px rgba(31,33,48,.12); }
        .app-loc-page .annotation > span { width: 29px; height: 29px; display: flex; align-items: center; justify-content: center; border-radius: 9px; background: var(--blush); color: var(--magenta); font-size: 11px; font-weight: 600; }
        .app-loc-page .annotation strong { display: block; font-size: 12px; line-height: 1.3; }
        .app-loc-page .annotation small { display: block; margin-top: 2px; color: #757988; font-size: 10px; }
        .app-loc-page .annotation-one { left: 23px; top: 95px; }
        .app-loc-page .annotation-two { right: 20px; top: 220px; }
        .app-loc-page .annotation-three { left: 20px; bottom: 35px; }

        .app-loc-page .locale-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 86px; align-items: start; }
        .app-loc-page .locale-summary { position: sticky; top: 24px; }
        .app-loc-page .locale-summary p { margin-top: 20px; font-size: 18px; }
        .app-loc-page .locale-list { border-top: 1px solid var(--line); }
        .app-loc-page .locale-row { display: grid; grid-template-columns: 210px 1fr; gap: 32px; padding: 23px 0; border-bottom: 1px solid var(--line); }
        .app-loc-page .locale-row h3 { font-size: 18px; }

        .app-loc-page .store-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 72px; align-items: center; }
        .app-loc-page .store-copy > p { margin-top: 20px; font-size: 18px; }
        .app-loc-page .store-platforms { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; margin-top: 30px; }
        .app-loc-page .store-platform { padding: 22px; border: 1px solid #E6CFD9; border-radius: 20px; background: rgba(255,255,255,.72); }
        .app-loc-page .store-platform h3 { font-size: 20px; }
        .app-loc-page .store-platform ul { margin: 14px 0 0; padding: 0; list-style: none; }
        .app-loc-page .store-platform li { position: relative; padding: 6px 0 6px 17px; color: #555968; font-size: 16px; }
        .app-loc-page .store-platform li:before { content: ""; position: absolute; left: 0; top: 16px; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); }
        .app-loc-page .store-preview { padding: 26px; border: 1px solid #E5CDD8; border-radius: 28px; background: #fff; box-shadow: 0 22px 50px rgba(74,30,50,.1); }
        .app-loc-page .store-preview-header { display: flex; align-items: center; gap: 15px; padding-bottom: 19px; border-bottom: 1px solid var(--line); }
        .app-loc-page .store-app-icon { width: 66px; height: 66px; display: flex; align-items: center; justify-content: center; border-radius: 17px; background: linear-gradient(145deg, var(--magenta), var(--magenta-dark)); color: #fff; }
        .app-loc-page .store-preview-header h3 { font-size: 20px; }
        .app-loc-page .store-preview-header p { margin-top: 2px; font-size: 14px; }
        .app-loc-page .store-locale-tabs { display: flex; gap: 8px; margin-top: 19px; }
        .app-loc-page .store-locale-tabs span { padding: 6px 10px; border-radius: 999px; background: #F1F2F6; color: #5D6170; font-size: 11px; font-weight: 600; }
        .app-loc-page .store-locale-tabs span.active { background: var(--blush); color: var(--magenta); }
        .app-loc-page .store-preview h4 { margin-top: 22px; font-size: 16px; }
        .app-loc-page .store-preview > p { margin-top: 7px; }
        .app-loc-page .screenshot-strip { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 20px; }
        .app-loc-page .shot { min-height: 150px; padding: 12px 9px; border-radius: 15px; background: linear-gradient(160deg, #F1F2F7, #FDF2F7); border: 1px solid #E6E7ED; }
        .app-loc-page .shot strong { display: block; margin-top: 18px; font-size: 12px; line-height: 1.3; }
        .app-loc-page .shot p { margin-top: 6px; font-size: 10px; line-height: 1.4; }
        .app-loc-page .shot-ui { width: 64%; height: 55px; margin: 8px auto 0; border: 4px solid #292A35; border-radius: 10px; background: #fff; }

        .app-loc-page .continuous-panel { border: 1px solid var(--line-dark); border-radius: 30px; background: var(--dark-soft); overflow: hidden; }
        .app-loc-page .continuous-top { display: grid; grid-template-columns: .8fr 1.2fr; gap: 70px; padding: 50px; }
        .app-loc-page .continuous-top p { color: #C6C8D2; font-size: 18px; }
        .app-loc-page .continuous-top .editorial-link { margin-top: 22px; color: #F2A7C6; }
        .app-loc-page .continuous-steps { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--line-dark); }
        .app-loc-page .continuous-step { position: relative; min-height: 218px; padding: 27px 23px; border-right: 1px solid var(--line-dark); }
        .app-loc-page .continuous-step:last-child { border-right: 0; }
        .app-loc-page .continuous-step:after { content: ""; position: absolute; right: -6px; top: 45px; width: 11px; height: 11px; border-radius: 50%; background: #F2A7C6; z-index: 2; }
        .app-loc-page .continuous-step:last-child:after { display: none; }
        .app-loc-page .continuous-step span { color: #F2A7C6; font-size: 11px; font-weight: 600; letter-spacing: .12em; }
        .app-loc-page .continuous-step h3 { margin-top: 12px; color: #fff; font-size: 20px; }
        .app-loc-page .continuous-step p { margin-top: 10px; color: #BFC1CC; }

        .app-loc-page .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .app-loc-page .ai-item { min-height: 260px; padding: 27px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .app-loc-page .ai-item h3 { margin-top: 18px; font-size: 20px; }
        .app-loc-page .ai-item p { margin-top: 10px; }
        .app-loc-page .risk-note { display: grid; grid-template-columns: 46px 1fr; gap: 18px; margin-top: 34px; padding: 24px 26px; border-radius: 20px; background: var(--blush); }
        .app-loc-page .risk-note h3 { font-size: 20px; }
        .app-loc-page .risk-note p { margin-top: 7px; }

        .app-loc-page .testing-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .app-loc-page .testing-item { min-height: 300px; padding: 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .app-loc-page .testing-item h3 { margin-top: 18px; font-size: 20px; }
        .app-loc-page .testing-item p { margin-top: 10px; }
        .app-loc-page .issue-panel { display: grid; grid-template-columns: .65fr 1.35fr; gap: 38px; margin-top: 34px; padding: 30px; border: 1px solid #DDE0E7; border-radius: 24px; background: #fff; }
        .app-loc-page .issue-panel h3 { font-size: 23px; }
        .app-loc-page .issue-panel > div:first-child p { margin-top: 10px; }
        .app-loc-page .issue-table { border-top: 1px solid var(--line); }
        .app-loc-page .issue-row { display: grid; grid-template-columns: 1fr 1.25fr .7fr; gap: 18px; padding: 13px 0; border-bottom: 1px solid var(--line); font-size: 14px; }
        .app-loc-page .issue-row.header { color: #737786; font-size: 11px; font-weight: 600; letter-spacing: .1em; text-transform: uppercase; }
        .app-loc-page .issue-status { color: var(--magenta); font-weight: 600; }

        .app-loc-page .access-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 78px; align-items: center; }
        .app-loc-page .access-copy > p { margin-top: 20px; font-size: 18px; }
        .app-loc-page .access-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid #E2CFD7; border-left: 1px solid #E2CFD7; }
        .app-loc-page .access-item { min-height: 115px; padding: 19px; border-right: 1px solid #E2CFD7; border-bottom: 1px solid #E2CFD7; }
        .app-loc-page .access-item strong { display: block; font-size: 16px; }
        .app-loc-page .access-item span { display: block; margin-top: 5px; color: #626675; font-size: 16px; line-height: 1.5; }

        .app-loc-page .industry-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .app-loc-page .industry-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; min-height: 210px; padding: 28px 32px 28px 0; border-bottom: 1px solid var(--line); }
        .app-loc-page .industry-item:nth-child(odd) { padding-right: 42px; border-right: 1px solid var(--line); }
        .app-loc-page .industry-item:nth-child(even) { padding-left: 42px; }
        .app-loc-page .industry-item h3 { font-size: 20px; }
        .app-loc-page .industry-item p { margin-top: 9px; }
        .app-loc-page .game-link-note { display: flex; align-items: center; justify-content: space-between; gap: 28px; margin-top: 34px; padding: 24px 26px; border-radius: 20px; background: var(--surface); }
        .app-loc-page .game-link-note p { max-width: 850px; }

        .app-loc-page .workflow-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .app-loc-page .workflow-step { min-height: 265px; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .app-loc-page .workflow-number { color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .12em; }
        .app-loc-page .workflow-step h3 { margin-top: 15px; font-size: 21px; }
        .app-loc-page .workflow-step p { margin-top: 11px; }

        .app-loc-page .connected-panel { border: 1px solid #DDE0E7; border-radius: 28px; background: #fff; overflow: hidden; }
        .app-loc-page .connected-intro { display: grid; grid-template-columns: .75fr 1.25fr; gap: 62px; padding: 42px; border-bottom: 1px solid var(--line); }
        .app-loc-page .connected-intro p { font-size: 18px; }
        .app-loc-page .connected-list { display: grid; grid-template-columns: repeat(5, 1fr); }
        .app-loc-page .connected-item { min-height: 255px; display: flex; flex-direction: column; padding: 25px; border-right: 1px solid var(--line); }
        .app-loc-page .connected-item:last-child { border-right: 0; }
        .app-loc-page .connected-item h3 { font-size: 18px; }
        .app-loc-page .connected-item p { margin-top: 9px; }
        .app-loc-page .connected-item .editorial-link { margin-top: auto; padding-top: 18px; }

        .app-loc-page .why-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line-dark); border-left: 1px solid var(--line-dark); }
        .app-loc-page .why-item { min-height: 250px; padding: 26px; border-right: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
        .app-loc-page .why-item h3 { color: #fff; font-size: 20px; }
        .app-loc-page .why-item p { margin-top: 10px; color: #BFC2CD; }
        .app-loc-page .cert-strip { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 30px; }
        .app-loc-page .cert-chip { padding: 15px 17px; border: 1px solid var(--line-dark); border-radius: 14px; color: #D7D9E2; text-align: center; font-size: 14px; font-weight: 600; }

        .app-loc-page .scope-layout { display: grid; grid-template-columns: 1fr .8fr; gap: 70px; align-items: center; }
        .app-loc-page .scope-copy > p { margin-top: 20px; max-width: 720px; font-size: 18px; }
        .app-loc-page .scope-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 24px; margin: 28px 0 0; padding: 0; list-style: none; }
        .app-loc-page .scope-list li { display: flex; align-items: flex-start; gap: 9px; color: #4D5160; font-size: 16px; }
        .app-loc-page .scope-list svg { margin-top: 3px; color: var(--magenta); flex: 0 0 auto; }
        .app-loc-page .scope-cta { padding: 38px; border: 1px solid #E2CBD6; border-radius: 28px; background: var(--blush); }
        .app-loc-page .scope-cta h3 { font-size: 28px; }
        .app-loc-page .scope-cta p { margin-top: 15px; font-size: 17px; }
        .app-loc-page .scope-cta .button-row { margin-top: 25px; }

        .app-loc-page .resource-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .app-loc-page .resource-card { min-height: 300px; display: flex; flex-direction: column; padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .app-loc-page .resource-card .resource-type { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; }
        .app-loc-page .resource-card h3 { margin-top: 16px; font-size: 21px; }
        .app-loc-page .resource-card p { margin-top: 11px; }
        .app-loc-page .resource-card .editorial-link { margin-top: auto; padding-top: 22px; }

        .app-loc-page .faq-panel { border: 1px solid #DDE0E7; border-radius: 28px; overflow: hidden; background: #fff; }
        .app-loc-page .faq-item { border-bottom: 1px solid var(--line); }
        .app-loc-page .faq-item:last-child { border-bottom: 0; }
        .app-loc-page .faq-question { width: 100%; min-height: 76px; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 20px 26px; border: 0; background: #fff; color: var(--ink); text-align: left; font: inherit; font-size: 18px; line-height: 1.4; font-weight: 600; cursor: pointer; }
        .app-loc-page .faq-question:hover { background: #FCFCFD; }
        .app-loc-page .faq-toggle { width: 34px; height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 50%; border: 1px solid #DDE0E7; color: var(--magenta); flex: 0 0 auto; font-size: 21px; font-weight: 400; }
        .app-loc-page .faq-answer { padding: 0 82px 24px 26px; }
        .app-loc-page .faq-answer p { max-width: 840px; font-size: 16px; }

        .app-loc-page .final-cta { padding: 88px 0; background: linear-gradient(120deg, #FDF2F7, #fff 68%); border-top: 1px solid #ECD9E1; }
        .app-loc-page .final-cta-panel { position: relative; display: grid; grid-template-columns: 1.1fr .9fr; gap: 56px; align-items: center; min-height: 420px; padding: 58px; border: 1px solid #E6CBD7; border-radius: 30px; background: #fff; overflow: hidden; box-shadow: 0 24px 60px rgba(87,32,55,.09); }
        .app-loc-page .final-cta-copy { position: relative; z-index: 2; }
        .app-loc-page .final-cta-copy h2 { max-width: 680px; }
        .app-loc-page .final-cta-copy p { margin-top: 20px; max-width: 700px; font-size: 18px; }
        .app-loc-page .cta-visual { position: relative; min-height: 290px; }
        .app-loc-page .cta-circle { position: absolute; width: 310px; height: 310px; right: -25px; top: -10px; border-radius: 50%; background: var(--blush); }
        .app-loc-page .cta-phone { position: absolute; width: 180px; right: 90px; top: 10px; border: 7px solid #242531; border-radius: 30px; background: #fff; box-shadow: 0 24px 50px rgba(37,38,49,.2); transform: rotate(4deg); overflow: hidden; }
        .app-loc-page .cta-phone .phone-speaker { margin-top: 0; }
        .app-loc-page .cta-phone-screen { padding: 20px 14px 22px; }
        .app-loc-page .cta-phone-screen h4 { margin-top: 25px; font-size: 15px; }
        .app-loc-page .cta-phone-screen p { margin-top: 6px; font-size: 11px; }
        .app-loc-page .cta-phone-button { margin-top: 20px; padding: 10px; border-radius: 9px; background: var(--magenta); color: #fff; text-align: center; font-size: 10px; font-weight: 600; }
        .app-loc-page .cta-language { position: absolute; min-width: 68px; padding: 9px 12px; border: 1px solid #E1D3DA; border-radius: 999px; background: #fff; color: #5B5F6D; text-align: center; font-size: 12px; font-weight: 600; box-shadow: 0 10px 25px rgba(45,46,58,.1); }
        .app-loc-page .cta-language.one { top: 43px; right: 0; }
        .app-loc-page .cta-language.two { top: 150px; left: 15px; }
        .app-loc-page .cta-language.three { bottom: 20px; right: 28px; }

        @media (max-width: 1200px) {
          .app-loc-page .container { padding-left: 40px; padding-right: 40px; }
          .app-loc-page .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(430px, .9fr); gap: 45px; }
          .app-loc-page .workbench-body { grid-template-columns: 1fr; }
          .app-loc-page .string-panel { border-right: 0; border-bottom: 1px solid var(--line); }
          .app-loc-page .preview-panel { min-height: 340px; }
          .app-loc-page .hero-visual { min-height: 700px; }
          .app-loc-page .connected-list { grid-template-columns: repeat(3, 1fr); }
          .app-loc-page .connected-item { border-bottom: 1px solid var(--line); }
          .app-loc-page .connected-item:nth-child(3n) { border-right: 0; }
          .app-loc-page .connected-item:nth-child(4) { border-left: 0; }
          .app-loc-page .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 980px) {
          .app-loc-page h1 { font-size: 42px; }
          .app-loc-page h2 { font-size: 32px; }
          .app-loc-page h3 { font-size: 22px; }
          .app-loc-page .container { padding-left: 24px; padding-right: 24px; }
          .app-loc-page .section { padding: 80px 0; }
          .app-loc-page .hero { padding: 82px 0 72px; }
          .app-loc-page .hero-grid { grid-template-columns: 1fr; }
          .app-loc-page .hero-copy { max-width: 780px; }
          .app-loc-page .hero-visual { min-height: 560px; }
          .app-loc-page .workbench-body { grid-template-columns: 1.08fr .92fr; }
          .app-loc-page .string-panel { border-right: 1px solid var(--line); border-bottom: 0; }
          .app-loc-page .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .trust-item { border-bottom: 1px solid var(--line); }
          .app-loc-page .trust-item:nth-child(2) { border-right: 0; padding-right: 0; }
          .app-loc-page .trust-item:nth-child(3) { padding-left: 0; }
          .app-loc-page .overview-grid,
          .app-loc-page .levels-layout,
          .app-loc-page .engineering-layout,
          .app-loc-page .context-layout,
          .app-loc-page .locale-layout,
          .app-loc-page .store-layout,
          .app-loc-page .access-layout,
          .app-loc-page .scope-layout { grid-template-columns: 1fr; gap: 50px; }
          .app-loc-page .overview-copy,
          .app-loc-page .locale-summary { position: static; }
          .app-loc-page .experience-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .platform-content { grid-template-columns: 1fr; gap: 40px; padding: 38px; }
          .app-loc-page .engineering-copy { max-width: 760px; }
          .app-loc-page .context-visual { max-width: 720px; width: 100%; margin: 0 auto; }
          .app-loc-page .store-preview { max-width: 720px; }
          .app-loc-page .continuous-top { grid-template-columns: 1fr; gap: 25px; padding: 40px; }
          .app-loc-page .continuous-steps { grid-template-columns: repeat(3, 1fr); }
          .app-loc-page .continuous-step { border-bottom: 1px solid var(--line-dark); }
          .app-loc-page .continuous-step:nth-child(3) { border-right: 0; }
          .app-loc-page .continuous-step:after { display: none; }
          .app-loc-page .ai-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .testing-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .issue-panel { grid-template-columns: 1fr; }
          .app-loc-page .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .connected-intro { grid-template-columns: 1fr; gap: 18px; }
          .app-loc-page .resource-grid { grid-template-columns: repeat(2, 1fr); }
          .app-loc-page .final-cta-panel { grid-template-columns: 1fr; padding: 48px; }
          .app-loc-page .cta-visual { min-height: 320px; max-width: 520px; width: 100%; margin: 0 auto; }
        }

        @media (max-width: 720px) {
          .app-loc-page h1 { font-size: 38px; }
          .app-loc-page h2 { font-size: 30px; }
          .app-loc-page h3 { font-size: 20px; }
          .app-loc-page .container { padding-left: 20px; padding-right: 20px; }
          .app-loc-page .section,
          .app-loc-page .section-dense { padding: 68px 0; }
          .app-loc-page .section-heading { margin-bottom: 34px; }
          .app-loc-page .section-heading p,
          .app-loc-page .hero-copy > p,
          .app-loc-page .overview-copy > p,
          .app-loc-page .level-summary p,
          .app-loc-page .engineering-copy > p,
          .app-loc-page .context-copy > p,
          .app-loc-page .locale-summary p,
          .app-loc-page .store-copy > p,
          .app-loc-page .access-copy > p,
          .app-loc-page .scope-copy > p,
          .app-loc-page .final-cta-copy p { font-size: 17px; }
          .app-loc-page .hero { padding: 68px 0 62px; }
          .app-loc-page .hero-copy { text-align: center; }
          .app-loc-page .hero-copy h1,
          .app-loc-page .hero-copy > p { margin-left: auto; margin-right: auto; }
          .app-loc-page .hero-mini-proof { justify-content: center; }
          .app-loc-page .button-row { flex-direction: column; }
          .app-loc-page .btn { width: 100%; min-height: 52px; }
          .app-loc-page .hero-visual { min-height: auto; padding-top: 20px; }
          .app-loc-page .hero-visual-grid { inset: 0; }
          .app-loc-page .workbench-body { grid-template-columns: 1fr; }
          .app-loc-page .string-panel { border-right: 0; border-bottom: 1px solid var(--line); }
          .app-loc-page .preview-panel { min-height: 340px; }
          .app-loc-page .trust-grid { grid-template-columns: 1fr; }
          .app-loc-page .trust-item,
          .app-loc-page .trust-item:first-child,
          .app-loc-page .trust-item:nth-child(2),
          .app-loc-page .trust-item:nth-child(3),
          .app-loc-page .trust-item:last-child { padding: 22px 0; border-right: 0; border-bottom: 1px solid var(--line); }
          .app-loc-page .trust-item:last-child { border-bottom: 0; }
          .app-loc-page .experience-grid,
          .app-loc-page .platform-considerations,
          .app-loc-page .store-platforms,
          .app-loc-page .ai-grid,
          .app-loc-page .testing-grid,
          .app-loc-page .access-grid,
          .app-loc-page .industry-grid,
          .app-loc-page .workflow-grid,
          .app-loc-page .resource-grid,
          .app-loc-page .why-grid,
          .app-loc-page .cert-strip { grid-template-columns: 1fr; }
          .app-loc-page .experience-item { min-height: 0; }
          .app-loc-page .level-row,
          .app-loc-page .locale-row { grid-template-columns: 1fr; gap: 9px; }
          .app-loc-page .platform-tabs { grid-template-columns: 1fr; }
          .app-loc-page .platform-tab { min-height: 56px; border-right: 0; border-bottom: 1px solid var(--line); }
          .app-loc-page .platform-tab:last-child { border-bottom: 0; }
          .app-loc-page .platform-tab.active:after { left: 0; right: auto; top: 0; bottom: 0; width: 3px; height: auto; border-radius: 0 999px 999px 0; }
          .app-loc-page .platform-content { padding: 27px 20px; }
          .app-loc-page .platform-consideration { min-height: 0; }
          .app-loc-page .qa-checks { grid-template-columns: 1fr; }
          .app-loc-page .qa-check { border-right: 0; }
          .app-loc-page .context-list,
          .app-loc-page .scope-list { grid-template-columns: 1fr; }
          .app-loc-page .context-stage { min-height: 660px; padding-top: 105px; }
          .app-loc-page .annotation { min-width: 0; width: calc(100% - 30px); left: 15px !important; right: 15px !important; }
          .app-loc-page .annotation-one { top: 18px; }
          .app-loc-page .annotation-two { top: auto; bottom: 82px; }
          .app-loc-page .annotation-three { bottom: 14px; }
          .app-loc-page .store-platforms { gap: 13px; }
          .app-loc-page .screenshot-strip { grid-template-columns: 1fr; }
          .app-loc-page .shot { min-height: 125px; }
          .app-loc-page .continuous-top { padding: 30px 22px; }
          .app-loc-page .continuous-steps { grid-template-columns: 1fr; }
          .app-loc-page .continuous-step { min-height: 0; border-right: 0; }
          .app-loc-page .ai-item,
          .app-loc-page .testing-item,
          .app-loc-page .why-item,
          .app-loc-page .workflow-step,
          .app-loc-page .resource-card { min-height: 0; }
          .app-loc-page .issue-row { grid-template-columns: 1fr; gap: 4px; padding: 15px 0; }
          .app-loc-page .issue-row.header { display: none; }
          .app-loc-page .industry-item,
          .app-loc-page .industry-item:nth-child(odd),
          .app-loc-page .industry-item:nth-child(even) { min-height: 0; padding: 25px 0; border-right: 0; }
          .app-loc-page .game-link-note { align-items: flex-start; flex-direction: column; }
          .app-loc-page .connected-list { grid-template-columns: 1fr; }
          .app-loc-page .connected-item,
          .app-loc-page .connected-item:nth-child(3n) { min-height: 0; border-right: 0; }
          .app-loc-page .connected-intro { padding: 30px 22px; }
          .app-loc-page .scope-cta { padding: 28px 22px; }
          .app-loc-page .faq-question { min-height: 70px; padding: 18px 19px; font-size: 17px; }
          .app-loc-page .faq-answer { padding: 0 20px 22px; }
          .app-loc-page .final-cta { padding: 68px 0; }
          .app-loc-page .final-cta-panel { min-height: 0; padding: 36px 22px; }
          .app-loc-page .cta-visual { min-height: 300px; }
          .app-loc-page .cta-circle { width: 275px; height: 275px; right: -25px; }
          .app-loc-page .cta-phone { right: 65px; }
        }

        @media (max-width: 390px) {
          .app-loc-page .hero-workbench { border-radius: 22px; }
          .app-loc-page .string-panel { padding: 19px; }
          .app-loc-page .phone-shell { width: 175px; }
          .app-loc-page .context-phone { width: 210px; }
          .app-loc-page .context-stage { padding-left: 12px; padding-right: 12px; }
          .app-loc-page .cta-phone { right: 42px; }
          .app-loc-page .cta-language.one { right: -6px; }
          .app-loc-page .cta-language.two { left: -5px; }
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Mobile App Localization</Eyebrow>
            <h1>App Localization Services for Global Mobile Experiences</h1>
            <p>
              Deliver mobile experiences that feel clear, intuitive, and locally relevant in every market. Stepes combines professional app translation, localization engineering, in-context linguistic review, multilingual testing, and continuous release workflows for iOS, Android, and cross-platform applications.
            </p>
            <div className="button-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/get-translation-quote/">
                Request a Quote
              </a>
            </div>
            <div className="hero-mini-proof">
              <span><Icon name="check" size={17} /> Native iOS and Android</span>
              <span><Icon name="check" size={17} /> In-context review</span>
              <span><Icon name="check" size={17} /> Multilingual app QA</span>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trust-band" aria-label="App localization service highlights">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container overview-grid">
          <div className="overview-copy">
            <Eyebrow>Mobile Product Experience</Eyebrow>
            <h2>Make Every Market Feel Like a Home Market</h2>
            <p>
              A mobile app is more than a collection of translated strings. It is a connected experience shaped by navigation, visual hierarchy, device behavior, cultural expectations, language conventions, and the actions users need to complete.
            </p>
          </div>
          <div className="overview-list">
            {overviewItems.map((item) => (
              <div className="overview-row" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="End-to-End Scope"
            title="Localize the Complete Mobile App Experience"
            intro="Stepes supports the multilingual content users encounter before installation, inside the product, and throughout the customer lifecycle."
          />
          <div className="experience-grid">
            {experienceGroups.map((item) => (
              <div className="experience-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container levels-layout">
          <div className="level-summary">
            <Eyebrow>Beyond Translation</Eyebrow>
            <h2>Translation, Localization, and Internationalization</h2>
            <p>
              These disciplines work together to create a multilingual product that is understandable, technically sound, visually coherent, and ready to scale across markets.
            </p>
          </div>
          <div className="level-list">
            {localizationLevels.map((item) => (
              <div className="level-row" key={item.title}>
                <h3>{item.title}</h3>
                <div>
                  <p>{item.text}</p>
                  {item.link ? <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Platforms and Frameworks"
            title="Native and Cross-Platform App Localization"
            intro="Work with resource formats and development environments used by modern iOS, Android, and shared-code mobile products."
          />
          <div className="platform-shell">
            <div className="platform-tabs" role="tablist" aria-label="App localization platforms">
              {Object.entries(platformData).map(([key, value]) => (
                <button
                  key={key}
                  type="button"
                  role="tab"
                  aria-selected={activePlatform === key}
                  aria-controls={`platform-${key}`}
                  className={`platform-tab${activePlatform === key ? " active" : ""}`}
                  onClick={() => setActivePlatform(key)}
                >
                  {value.label}
                </button>
              ))}
            </div>
            <div className="platform-content" id={`platform-${activePlatform}`} role="tabpanel">
              <div className="platform-intro">
                <h3>{platform.title}</h3>
                <p>{platform.intro}</p>
                <div className="resource-list">
                  {platform.resources.map((item) => (
                    <div className="resource-list-item" key={item}>
                      <Icon name="check" size={17} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="platform-considerations">
                {platform.considerations.map((item) => (
                  <div className="platform-consideration" key={item.title}>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container engineering-layout">
          <div className="engineering-copy">
            <Eyebrow dark>Localization Engineering</Eyebrow>
            <h2>Protect the Language and the App</h2>
            <p>
              Mobile resources contain keys, variables, markup, formatting instructions, plural definitions, and technical relationships that must remain intact. Stepes combines professional translation with code-aware engineering from intake through delivery.
            </p>
            <div className="engineering-list">
              {engineeringCapabilities.map((item) => (
                <div className="engineering-row" key={item.title}>
                  <div className="icon-box"><Icon name={item.icon} size={20} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <ArrowLink href="https://www.stepes.com/software-localization-services/">
              Software Localization Services
            </ArrowLink>
          </div>
          <div>
            <div className="code-panel">
              <div className="code-panel-header">
                <strong>Resource validation</strong>
                <span>checkout_es-MX.json</span>
              </div>
              <div className="code-window" aria-label="Example localized app resource">
                <span className="code-line">&#123;</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-key">"payment_confirmed"</span>: <span className="code-value">"Pago confirmado"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-key">"receipt_ready"</span>: <span className="code-value">"Tu recibo está listo."</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-key">"total_due"</span>: <span className="code-value">"Total: <span className="code-variable">&#123;&#123;amount&#125;&#125;</span>"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;<span className="code-key">"items_count"</span>: &#123;</span>
                <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">"one"</span>: <span className="code-value">"<span className="code-variable">&#123;count&#125;</span> artículo"</span>,</span>
                <span className="code-line">&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-key">"other"</span>: <span className="code-value">"<span className="code-variable">&#123;count&#125;</span> artículos"</span></span>
                <span className="code-line">&nbsp;&nbsp;&#125;</span>
                <span className="code-line">&#125;</span>
              </div>
              <div className="qa-checks">
                {["Keys preserved", "Variables matched", "Plural forms complete", "Character limit passed"].map((item) => (
                  <div className="qa-check" key={item}><Icon name="check" size={16} /> {item}</div>
                ))}
              </div>
            </div>
            <div className="format-strip">
              Common formats: .xcstrings · .strings · .stringsdict · Android XML · XLIFF · ARB · JSON · YAML · RESX · PO/POT · Java Properties · CSV/XLSX · HTML/XML · assessed custom formats
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container context-layout">
          <div className="context-copy">
            <Eyebrow>In-Context Localization</Eyebrow>
            <h2>See the Interface, Not Just the Strings</h2>
            <p>
              The same word can mean different things on a button, in a menu, as a title, or within a longer user journey. Visual and technical context helps linguists choose language that is accurate, concise, consistent, and appropriate for the action on screen.
            </p>
            <ul className="context-list">
              {["Screenshots", "Figma designs", "Prototypes", "Storyboards", "Developer comments", "String descriptions", "Character limits", "User-flow diagrams", "Screen recordings", "Test environments", "Beta builds", "Live interfaces"].map((item) => (
                <li key={item}><Icon name="check" size={16} /> <span>{item}</span></li>
              ))}
            </ul>
            <ArrowLink href="https://www.stepes.com/software-ui-localization-in-context-translation/">
              In-Context UI Localization
            </ArrowLink>
          </div>
          <ContextVisual />
        </div>
      </section>

      <section className="section section-soft">
        <div className="container locale-layout">
          <div className="locale-summary">
            <Eyebrow>Locale Experience</Eyebrow>
            <h2>Adapt Language, Layout, and Locale Behavior</h2>
            <p>
              A localized app should reflect the conventions users expect in the target market rather than forcing every locale into the patterns of the source language.
            </p>
          </div>
          <div className="locale-list">
            {localeRows.map((item) => (
              <div className="locale-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container store-layout">
          <div className="store-copy">
            <Eyebrow>Storefront Localization</Eyebrow>
            <h2>App Store and Google Play Localization</h2>
            <p>
              Users begin evaluating an app before they install it. Localized product pages help prospective users understand what the app does, why it is relevant, and what they can expect after downloading it.
            </p>
            <div className="store-platforms">
              <div className="store-platform">
                <h3>Apple App Store</h3>
                <ul>
                  <li>App name and subtitle</li>
                  <li>Description and keywords</li>
                  <li>Promotional text and release notes</li>
                  <li>Screenshots, previews, and in-app purchases</li>
                </ul>
              </div>
              <div className="store-platform">
                <h3>Google Play</h3>
                <ul>
                  <li>App title and descriptions</li>
                  <li>Screenshots and feature graphics</li>
                  <li>Subscriptions and in-app products</li>
                  <li>Main and custom store listings</li>
                </ul>
              </div>
            </div>
            <p style={{ marginTop: 22 }}>
              Where required, Stepes can combine professional localization with local keyword research, search-language adaptation, creative copy, character-limit management, screenshot text localization, and conversion-focused linguistic review.
            </p>
          </div>
          <div className="store-preview" aria-label="Localized app store page preview">
            <div className="store-preview-header">
              <div className="store-app-icon"><Icon name="phone" size={30} /></div>
              <div>
                <h3>Flow Mobile</h3>
                <p>Everyday payments, made simple</p>
              </div>
            </div>
            <div className="store-locale-tabs"><span>EN-US</span><span className="active">ES-MX</span><span>PT-BR</span><span>JA-JP</span></div>
            <h4>Pagos simples para todos los días</h4>
            <p>Envía, recibe y administra tu dinero desde una sola app segura e intuitiva.</p>
            <div className="screenshot-strip">
              <div className="shot"><div className="shot-ui" /><strong>Controla tus gastos</strong><p>Ve tus movimientos en tiempo real.</p></div>
              <div className="shot"><div className="shot-ui" /><strong>Envía en segundos</strong><p>Pagos rápidos y claros.</p></div>
              <div className="shot"><div className="shot-ui" /><strong>Tu seguridad primero</strong><p>Alertas y controles desde la app.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Agile Release Support"
            title="Continuous App Localization for Every Release"
            intro="Keep translated versions aligned with new features, onboarding changes, security messages, subscription updates, bug fixes, and store content without rebuilding the localization process each time."
            dark
          />
          <div className="continuous-panel">
            <div className="continuous-top">
              <h3>Connect localization to your software delivery lifecycle.</h3>
              <div>
                <p>Stepes supports APIs, repository workflows, structured resource synchronization, webhooks, CI/CD orchestration, branch coordination, and customer-specific integration models.</p>
                <ArrowLink href="https://www.stepes.com/developers/software-localization-api/">Software Localization API</ArrowLink>
              </div>
            </div>
            <div className="continuous-steps">
              {continuousSteps.map((item, index) => (
                <div className="continuous-step" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="AI + Expert Validation"
            title="Use AI Translation With the Right Human Controls"
            intro="AI can accelerate repetitive app content and frequent updates, but it should be governed according to the purpose, visibility, subject matter, and consequence of error."
          />
          <div className="ai-grid">
            {aiControls.map((item) => (
              <div className="ai-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="risk-note">
            <div className="icon-box"><Icon name="shield" /></div>
            <div>
              <h3>Quality controls matched to content risk</h3>
              <p>Payment decisions, medical instructions, safety information, privacy and consent content, legal language, regulated claims, security-critical messages, and high-visibility brand copy may require additional specialist review or creative adaptation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Multilingual Product QA"
            title="Mobile App Localization Testing"
            intro="Translations that look correct in a resource file may behave differently inside the application. Stepes provides scalable testing based on your product, target languages, builds, device coverage, and release risk."
          />
          <div className="testing-grid">
            {testingTypes.map((item) => (
              <div className="testing-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="issue-panel">
            <div>
              <h3>Actionable issue reporting</h3>
              <p>Findings can include screenshots, device and OS details, language and locale, feature, reproduction steps, expected behavior, severity, recommended correction, and retest status.</p>
            </div>
            <div className="issue-table">
              <div className="issue-row header"><span>Screen</span><span>Finding</span><span>Status</span></div>
              <div className="issue-row"><span>Checkout · iPhone 15</span><span>Primary button wraps to two lines in German.</span><span className="issue-status">Resolved</span></div>
              <div className="issue-row"><span>Account · Pixel 9</span><span>Date format does not follow the selected French locale.</span><span className="issue-status">Retest</span></div>
              <div className="issue-row"><span>Home · Arabic</span><span>Directional icon remains left-to-right.</span><span className="issue-status">Assigned</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-blush">
        <div className="container access-layout">
          <div className="access-copy">
            <Eyebrow>Multilingual Accessibility</Eyebrow>
            <h2>Accessible Mobile Experiences Across Languages</h2>
            <p>
              Accessibility content is part of the product experience. Stepes can localize visible and assistive content and support multilingual review according to the agreed scope, while your product and development teams retain responsibility for technical conformance.
            </p>
          </div>
          <div className="access-grid">
            {[
              ["Assistive Content", "Labels, hints, control names, image descriptions, screen-reader text, captions, transcripts, and form guidance."],
              ["VoiceOver and TalkBack", "Review pronunciation, language changes, reading order, focus sequence, button clarity, and user guidance."],
              ["Responsive Text", "Evaluate larger text, dynamic type, wrapping, truncation, and layout behavior across localized interfaces."],
              ["RTL Accessibility", "Validate reading order, navigation, focus, labels, mixed-direction text, and assistive behavior in RTL locales."],
            ].map(([title, text]) => (
              <div className="access-item" key={title}><strong>{title}</strong><span>{text}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Specialized Products"
            title="App Localization for Different User Journeys"
            intro="Different apps carry different terminology, user expectations, regulatory considerations, and consequences of error. Stepes matches language professionals and quality controls to the product and subject matter."
          />
          <div className="industry-grid">
            {industryItems.map((item) => (
              <div className="industry-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="game-link-note">
            <p>Games often require additional disciplines such as dialogue adaptation, narrative consistency, culturalization, voice production, and gameplay testing.</p>
            <ArrowLink href="https://www.stepes.com/game-localization-services/">Game Localization Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="Delivery Process"
            title="A Localization Workflow Built Around Your Release"
            intro="Every app has different architectures, audiences, review responsibilities, and release requirements. Stepes configures the workflow around your product rather than forcing every project into the same process."
          />
          <div className="workflow-grid">
            {workflowSteps.map((item, index) => (
              <div className="workflow-step" key={item.title}>
                <div className="workflow-number">STEP {String(index + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="connected-panel">
            <div className="connected-intro">
              <div>
                <Eyebrow>Connected Content</Eyebrow>
                <h2>One Language System for Your Product</h2>
              </div>
              <p>App localization becomes more effective when interface language is coordinated with the software, documentation, launch content, training, and support surrounding the mobile experience.</p>
            </div>
            <div className="connected-list">
              {connectedSolutions.map((item) => (
                <div className="connected-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeading
            eyebrow="Why Stepes"
            title="Built for Global Product Teams"
            intro="Combine professional language expertise, mobile localization engineering, product context, flexible testing, and enterprise workflow controls in one connected service model."
            dark
          />
          <div className="why-grid">
            {whyStepes.map((item) => (
              <div className="why-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <div className="cert-strip">
            <div className="cert-chip">ISO 9001</div>
            <div className="cert-chip">ISO 17100</div>
            <div className="cert-chip">ISO 13485</div>
            <div className="cert-chip">Secure Enterprise Workflows</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container scope-layout">
          <div className="scope-copy">
            <Eyebrow>Project Scoping</Eyebrow>
            <h2>What We Need to Scope Your App</h2>
            <p>A localization assessment is more accurate when it includes both the source content and the way the app is developed, reviewed, tested, and released.</p>
            <ul className="scope-list">
              {["Target platforms and framework", "Source and target languages", "Source resource files", "Approximate words or strings", "Existing translations and language assets", "Screenshots, designs, or prototypes", "Character limits and contextual metadata", "App-store content", "Build or test access", "Testing and device expectations", "Internal reviewers and approvals", "Security or confidentiality requirements", "Planned release date", "Expected update frequency"].map((item) => (
                <li key={item}><Icon name="check" size={16} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="scope-cta">
            <h3>Start with the resources you have.</h3>
            <p>Send representative files, sample strings, or estimated volumes. We will identify the remaining information needed to build a clear workflow, schedule, and quotation.</p>
            <div className="button-row">
              <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                <span>Discuss Your App</span><Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeading
            eyebrow="App Localization Resources"
            title="Plan, Prepare, Test, and Scale"
            intro="Explore practical guidance for internationalization readiness, platform-specific localization, multilingual testing, continuous delivery, and cost planning."
          />
          <div className="resource-grid">
            {resourceItems.map((item) => (
              <div className="resource-card" key={item.title}>
                <div className="resource-type">Guide</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowLink href={item.href}>{item.linkLabel}</ArrowLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title="App Localization FAQs"
            intro="Answers to common questions about mobile app translation, localization engineering, platforms, testing, AI workflows, schedules, and pricing."
          />
          <div className="faq-panel">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div className="faq-item" key={item.question}>
                  <button
                    type="button"
                    className="faq-question"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen ? (
                    <div className="faq-answer" id={`faq-answer-${index}`}>
                      <p>{item.answer}</p>
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="final-cta-panel">
            <div className="final-cta-copy">
              <Eyebrow>Global Mobile Experiences</Eyebrow>
              <h2>Bring Your App to Every Market With Confidence</h2>
              <p>
                Create multilingual mobile experiences that are accurate, technically sound, locally relevant, and ready for real users—from iOS, Android, and cross-platform resource translation to engineering, in-context review, app-store content, multilingual testing, and continuous releases.
              </p>
              <div className="button-row">
                <a className="btn btn-primary" href="https://www.stepes.com/contact-us/">
                  <span>Talk to an Expert</span><Icon name="arrow" size={18} />
                </a>
                <a className="btn btn-secondary" href="https://www.stepes.com/get-translation-quote/">Request a Quote</a>
              </div>
            </div>
            <div className="cta-visual" aria-hidden="true">
              <div className="cta-circle" />
              <div className="cta-phone">
                <div className="phone-speaker" />
                <div className="cta-phone-screen">
                  <div className="success-mark"><Icon name="check" size={24} /></div>
                  <h4>Your localized release is ready</h4>
                  <p>12 languages · QA complete</p>
                  <div className="cta-phone-button">Review delivery</div>
                </div>
              </div>
              <div className="cta-language one">ES-MX</div>
              <div className="cta-language two">DE-DE</div>
              <div className="cta-language three">JA-JP</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AppLocalizationServicesWireframe;
