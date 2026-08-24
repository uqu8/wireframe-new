import React, { useState } from "react";

const STEPS_URL = "https://www.stepes.com";

const challengeItems = [
  {
    title: "Rapid Product Releases",
    copy:
      "New features, interface updates, bug fixes, onboarding improvements, and release communications may need localization on weekly, daily, or continuous schedules. Stepes helps multilingual content move alongside product development instead of becoming a downstream bottleneck.",
  },
  {
    title: "Distributed Content Ownership",
    copy:
      "Product, engineering, marketing, customer success, support, legal, security, and learning teams often manage different parts of the global customer experience. Shared terminology, translation memories, quality standards, and centralized workflows keep them aligned.",
  },
  {
    title: "Limited Linguistic Context",
    copy:
      "Short UI strings can be ambiguous when separated from their screen, function, or workflow. Screenshots, character limits, developer notes, metadata, and in-context review help linguists make decisions that fit the real product experience.",
  },
  {
    title: "Expanding Content Volumes",
    copy:
      "Many companies begin with product UI and quickly expand into websites, help centers, training, campaigns, legal content, and customer communications. Stepes provides one language partner across this growing content ecosystem.",
  },
  {
    title: "Market-Specific Requirements",
    copy:
      "Regional language variants, writing systems, currencies, dates, units, payment terminology, privacy requirements, and cultural expectations all shape a usable local experience. Stepes supports locale-level adaptation, not word-for-word translation alone.",
  },
  {
    title: "Quality Across Continuous Updates",
    copy:
      "Frequent releases can introduce inconsistent terminology, outdated translations, and duplicated work. Translation memory, terminology management, automated QA, professional review, and structured feedback help protect quality over time.",
  },
];

const touchpoints = [
  {
    icon: "product",
    title: "Product Interfaces and In-App Content",
    copy:
      "Localize navigation, dashboards, settings, notifications, error messages, search, billing experiences, embedded help, onboarding, and role-based interfaces across web, desktop, and cloud products.",
    label: "Software Localization",
    href: `${STEPS_URL}/software-localization-services/`,
  },
  {
    icon: "mobile",
    title: "Mobile Applications",
    copy:
      "Create localized iOS and Android experiences across mobile UI, onboarding, push notifications, subscriptions, app-store content, support, and device-specific linguistic and cosmetic QA.",
    label: "App Localization",
    href: `${STEPS_URL}/app-localization-services/`,
  },
  {
    icon: "web",
    title: "Websites and Digital Acquisition",
    copy:
      "Translate corporate sites, product pages, landing pages, pricing content, feature comparisons, campaigns, conversion flows, and multilingual search content that help buyers discover and evaluate your software.",
    label: "Website Translation",
    href: `${STEPS_URL}/website-translation-services/`,
  },
  {
    icon: "docs",
    title: "Technical Documentation",
    copy:
      "Make complex products easier to implement and use with multilingual user guides, administrator documentation, developer resources, technical specifications, integrations, release notes, and troubleshooting content.",
    label: "Technical Translation",
    href: `${STEPS_URL}/technical-translation-services/`,
  },
  {
    icon: "support",
    title: "Help Centers and Knowledge Bases",
    copy:
      "Keep FAQs, how-to articles, troubleshooting procedures, embedded assistance, support macros, chatbot knowledge, service communications, and product updates synchronized with the localized product experience.",
    label: "Multilingual Customer Support",
    href: `${STEPS_URL}/solutions/multilingual-customer-support/`,
  },
  {
    icon: "marketing",
    title: "Marketing and Sales Content",
    copy:
      "Adapt product positioning, campaigns, presentations, demonstrations, email programs, customer stories, white papers, partner materials, and digital advertising while protecting brand voice.",
    label: "Marketing Translation",
    href: `${STEPS_URL}/marketing-translation-services/`,
  },
  {
    icon: "learning",
    title: "Learning and Customer Enablement",
    copy:
      "Localize product academies, onboarding courses, certification programs, partner training, interactive tutorials, webinars, assessments, videos, subtitles, and voiceover for global users.",
    label: "eLearning Localization",
    href: `${STEPS_URL}/elearning-localization-services/`,
  },
  {
    icon: "legal",
    title: "Legal, Privacy, and Security Content",
    copy:
      "Translate terms of service, privacy policies, subscription agreements, data-processing information, security documentation, trust-center materials, licensing terms, and compliance communications.",
    label: "Legal Translation",
    href: `${STEPS_URL}/legal-translation-services/`,
  },
];

const businessModels = [
  {
    title: "B2B SaaS Platforms",
    copy:
      "Complex role-based interfaces, integrations, onboarding programs, administrator content, customer training, and recurring support needs.",
  },
  {
    title: "Enterprise Software",
    copy:
      "Multi-module products, implementation materials, administrator documentation, partner enablement, and long-term release programs.",
  },
  {
    title: "Cloud and Infrastructure",
    copy:
      "Technical interfaces, developer documentation, service communications, security content, and global customer support.",
  },
  {
    title: "Developer Tools and APIs",
    copy:
      "Developer portals, API references, SDK content, command-line strings, implementation guidance, and technical communities.",
  },
  {
    title: "Cybersecurity Software",
    copy:
      "Security interfaces, alerts, policy content, threat information, technical reports, and trust-center materials.",
  },
  {
    title: "Fintech and Regulated SaaS",
    copy:
      "Specialized terminology, legal disclosures, security, privacy, quality controls, and jurisdiction-sensitive customer content.",
  },
  {
    title: "Productivity and Collaboration",
    copy:
      "High-volume UI content, notifications, templates, mobile experiences, onboarding, and user education.",
  },
  {
    title: "Consumer Software and Apps",
    copy:
      "Localized UX, subscriptions, acquisition campaigns, reviews, support, and market-specific engagement across devices.",
  },
];

const teams = [
  {
    title: "Product and Engineering",
    copy:
      "Interface localization, source readiness, release alignment, APIs, automation, repositories, and in-product testing.",
    href: `${STEPS_URL}/solutions/product-engineering-localization/`,
  },
  {
    title: "Localization Teams",
    copy:
      "Centralized projects, linguistic assets, terminology, translation memories, quality processes, reviewers, reporting, and supplier coordination.",
    href: `${STEPS_URL}/solutions/localization-teams/`,
  },
  {
    title: "Marketing",
    copy:
      "Websites, campaigns, product messaging, customer stories, sales content, brand voice, and multilingual SEO.",
    href: `${STEPS_URL}/solutions/marketing-localization/`,
  },
  {
    title: "Customer Success and Support",
    copy:
      "Onboarding, help centers, training, support communications, knowledge resources, and terminology aligned with the product UI.",
    href: `${STEPS_URL}/solutions/multilingual-customer-support/`,
  },
  {
    title: "Legal and Security",
    copy:
      "Agreements, policies, disclosures, trust-center content, security documentation, and compliance communications through controlled workflows.",
    href: `${STEPS_URL}/solutions/legal-teams/`,
  },
  {
    title: "Learning and Enablement",
    copy:
      "Product academies, customer certification, partner programs, employee learning, multimedia, assessments, and supporting materials.",
    href: `${STEPS_URL}/elearning-localization-services/`,
  },
  {
    title: "Procurement and Operations",
    copy:
      "Centralized governance, language-spend visibility, quality standards, service levels, and scalable global vendor operations.",
    href: `${STEPS_URL}/solutions/procurement/`,
  },
];

const lifecycle = [
  {
    title: "Global Readiness",
    copy:
      "Assess products, audiences, markets, languages, systems, release frequency, quality expectations, and stakeholder responsibilities.",
  },
  {
    title: "Source Preparation",
    copy:
      "Identify ambiguous strings, inconsistent terminology, embedded text, hard-coded formats, character limits, and localization-sensitive UI components.",
  },
  {
    title: "Workflow Design",
    copy:
      "Match AI, translation memory, professional translation, review, QA, and approval stages to each content type and risk level.",
  },
  {
    title: "Localization",
    copy:
      "Localize product, documentation, websites, marketing, training, support, legal, and customer-facing content through connected workflows.",
  },
  {
    title: "In-Market Validation",
    copy:
      "Review linguistic quality, terminology, usability, formatting, visual presentation, and market appropriateness in context.",
  },
  {
    title: "Global Release",
    copy:
      "Coordinate multilingual product delivery with websites, documentation, campaigns, training, and customer-support readiness.",
  },
  {
    title: "Continuous Improvement",
    copy:
      "Reuse approved language, apply reviewer feedback, update terminology, and improve consistency and efficiency across future releases.",
  },
];

const aiWorkflows = [
  {
    title: "High-Volume and Rapidly Changing Content",
    copy:
      "AI translation, approved terminology, automated QA, and targeted human review can accelerate support, knowledge-base, employee-facing, and operational content.",
  },
  {
    title: "Product Interfaces and Documentation",
    copy:
      "Translation memory, terminology management, AI-assisted production, professional linguistic review, context, and software-specific QA protect precision and consistency.",
  },
  {
    title: "Marketing and Brand Content",
    copy:
      "Professional translation and transcreation preserve intent, tone, persuasion, cultural relevance, and recognizable brand voice in each market.",
  },
  {
    title: "Legal, Privacy, and Security Content",
    copy:
      "Specialist linguists, controlled workflows, approved terminology, and structured review support business-critical and higher-risk materials.",
  },
  {
    title: "Training and Multimedia",
    copy:
      "Integrated production can combine translation, subtitles, voiceover, on-screen text adaptation, synchronization, and functional course QA.",
  },
];

const terminologyItems = [
  {
    title: "Terminology Management",
    copy:
      "Manage product and feature names, technical vocabulary, approved translations, abbreviations, protected terms, definitions, and locale-specific usage guidance.",
    href: `${STEPS_URL}/terminology-management/`,
  },
  {
    title: "Translation Memory",
    copy:
      "Reuse approved translations across releases and related content to reduce repeated work, preserve customer-approved language, and improve consistency.",
    href: `${STEPS_URL}/translation-memory/`,
  },
  {
    title: "Style and Voice",
    copy:
      "Maintain appropriate tone, formality, punctuation, capitalization, writing conventions, and brand voice across product, technical, support, and marketing content.",
    href: `${STEPS_URL}/translation-quality-assurance/`,
  },
  {
    title: "Cross-Content Alignment",
    copy:
      "Keep the language used in the interface aligned with documentation, websites, training, support, legal content, and release communications.",
    href: `${STEPS_URL}/solutions/global-content-operations/`,
  },
];

const qualityChecks = [
  "Linguistic accuracy, fluency, grammar, terminology, tone, style, and locale appropriateness",
  "Missing translations, number mismatches, tag errors, placeholder errors, punctuation, and formatting",
  "Screenshot, preview, and in-product review for ambiguous strings and contextual decisions",
  "Text truncation, overlap, line breaks, font support, encoding, alignment, and right-to-left display",
  "Functional checks for language selection, navigation, links, workflows, input, and locale behavior",
  "Structured reviewer feedback, issue resolution, and reuse of approved corrections across future releases",
];

const whyStepes = [
  {
    title: "Software Industry Expertise",
    copy:
      "Work with linguists and production teams familiar with cloud products, digital UX, technical terminology, documentation, support, and frequent product change.",
  },
  {
    title: "One Partner Across the Customer Journey",
    copy:
      "Coordinate product, website, documentation, marketing, training, legal, knowledge-base, and support localization through one global language program.",
  },
  {
    title: "AI + Human Workflows",
    copy:
      "Combine AI translation, translation memory, terminology, automated QA, professional linguists, subject-matter expertise, and structured review according to business need.",
  },
  {
    title: "In-Context Quality",
    copy:
      "Use screenshots, notes, metadata, previews, and in-product review to improve decisions for short strings and digital experiences.",
  },
  {
    title: "Agile Global Operations",
    copy:
      "Support recurring releases, frequent updates, multiple products, distributed stakeholders, and coordinated multilingual launches as your program grows.",
  },
  {
    title: "Enterprise Control",
    copy:
      "Centralize terminology, translation memories, quality standards, project visibility, automation, review, and reporting across teams and languages.",
  },
];

const programUseCases = [
  {
    title: "Launch a SaaS Product in New Markets",
    copy:
      "Coordinate product localization with websites, onboarding, documentation, campaigns, training, legal content, and customer-support readiness so customers can discover, adopt, and use the product successfully.",
  },
  {
    title: "Establish Continuous Localization",
    copy:
      "Connect recurring product updates with scalable translation, review, QA, delivery, terminology, and translation-memory reuse across every release.",
  },
  {
    title: "Expand Multilingual Customer Support",
    copy:
      "Align help centers, knowledge bases, embedded assistance, training, support communications, and chatbot knowledge with the localized interface and documentation.",
  },
  {
    title: "Manage Regulated or High-Risk Content",
    copy:
      "Apply specialist linguists, controlled review, security requirements, and additional quality oversight to product, privacy, security, legal, healthcare, financial, or compliance-related content.",
  },
  {
    title: "Consolidate Global Language Operations",
    copy:
      "Bring disconnected product, marketing, support, documentation, and learning translation activities into a coordinated program with shared workflows, assets, and visibility.",
  },
];

const relatedServices = [
  {
    title: "Software Localization",
    copy: "Engineering-ready UI localization, in-context review, continuous updates, and software QA.",
    href: `${STEPS_URL}/software-localization-services/`,
  },
  {
    title: "App Localization",
    copy: "Localized iOS and Android applications, app-store content, onboarding, and device validation.",
    href: `${STEPS_URL}/app-localization-services/`,
  },
  {
    title: "Website Translation",
    copy: "Corporate sites, product pages, landing pages, campaigns, and continuously changing web content.",
    href: `${STEPS_URL}/website-translation-services/`,
  },
  {
    title: "Technical Translation",
    copy: "User, administrator, developer, implementation, specification, and release documentation.",
    href: `${STEPS_URL}/technical-translation-services/`,
  },
  {
    title: "Marketing Translation",
    copy: "Product messaging, campaigns, sales assets, customer stories, and digital marketing content.",
    href: `${STEPS_URL}/marketing-translation-services/`,
  },
  {
    title: "eLearning Localization",
    copy: "Customer academies, product certification, partner enablement, courses, and assessments.",
    href: `${STEPS_URL}/elearning-localization-services/`,
  },
  {
    title: "Multimedia Localization",
    copy: "Multilingual video, audio, subtitles, voiceover, demonstrations, and webinars.",
    href: `${STEPS_URL}/multimedia-translation-services/`,
  },
  {
    title: "Translation API",
    copy: "Connect translation workflows with products, content systems, and business applications.",
    href: `${STEPS_URL}/developers/translation-api/`,
  },
];

const resources = [
  {
    category: "LOCALIZATION GUIDE",
    title: "SaaS Localization Guide",
    copy:
      "Plan a multilingual SaaS program across product experiences, websites, onboarding, documentation, support, and recurring releases.",
    href: `${STEPS_URL}/resources/localization-guides/saas-localization-guide/`,
  },
  {
    category: "CONTINUOUS LOCALIZATION",
    title: "Continuous Software Localization",
    copy:
      "Connect agile development with translation, review, terminology, quality assurance, and multilingual release coordination.",
    href: `${STEPS_URL}/resources/localization-guides/continuous-software-localization/`,
  },
  {
    category: "QUALITY & TESTING",
    title: "Software Localization Testing Checklist",
    copy:
      "Review linguistic, cosmetic, functional, layout, encoding, and locale behavior before releasing software in global markets.",
    href: `${STEPS_URL}/resources/localization-guides/software-localization-testing-checklist/`,
  },
  {
    category: "GLOBAL PRODUCT READINESS",
    title: "Internationalization vs. Localization",
    copy:
      "Understand how internationalization prepares software for global use and how localization adapts the experience for each market.",
    href: `${STEPS_URL}/resources/localization-guides/internationalization-vs-localization/`,
  },
];

const faqItems = [
  {
    question: "What are Software and SaaS translation services?",
    answer:
      "Software and SaaS translation services help technology companies make their products and related content available in multiple languages. The scope may include interfaces, websites, mobile applications, documentation, help centers, onboarding, training, marketing, legal content, and customer support. A complete program can also include terminology, translation memory, localization engineering, quality assurance, testing, workflow automation, and continuous product updates.",
  },
  {
    question: "What is the difference between software translation and software localization?",
    answer:
      "Software translation converts product text from one language into another. Software localization adapts the complete product experience for a target locale. In addition to translation, localization may address layout, character limits, currencies, dates, numbers, fonts, writing direction, graphics, functionality, and local user expectations. Translation is therefore an essential part of localization, but not the entire process.",
  },
  {
    question: "What content should a SaaS company localize?",
    answer:
      "A SaaS company may need to localize its product interface, mobile applications, corporate and product websites, onboarding, documentation, help center, customer training, product videos, campaigns, sales materials, legal policies, security content, release notes, and customer-support communications. The right scope depends on the customer journey, target market, product maturity, support model, and global growth strategy.",
  },
  {
    question: "Can Stepes support continuous software releases?",
    answer:
      "Yes. Stepes supports recurring and continuous localization workflows for products that change frequently. Translation APIs, workflow automation, translation memory, terminology management, automated quality checks, professional review, and structured delivery can help keep multilingual content aligned with agile development and release schedules.",
  },
  {
    question: "How does Stepes maintain terminology across products and content?",
    answer:
      "Stepes uses terminology databases, translation memories, style guidance, automated checks, professional review, and customer feedback to help maintain consistency. Approved terms can be shared across interface strings, documentation, websites, training, marketing, support, and legal materials so users encounter the same product language across every touchpoint.",
  },
  {
    question: "Can localization workflows integrate with software systems and APIs?",
    answer:
      "Stepes provides API-enabled translation capabilities that can connect localization with software applications, content systems, and business workflows. APIs and automation can support project creation, content transfer, status updates, translation retrieval, and recurring processing. The appropriate integration model depends on your technical environment, content format, release process, and governance requirements.",
  },
  {
    question: "Does Stepes provide software localization testing?",
    answer:
      "Stepes supports linguistic, cosmetic, and functional localization testing according to project requirements. Testing may evaluate terminology, accuracy, untranslated content, truncation, text expansion, line breaks, fonts, encoding, layout, right-to-left display, navigation, links, input behavior, and locale-specific functionality using screenshots, preview environments, builds, devices, or customer-provided access.",
  },
  {
    question: "Can Stepes localize right-to-left and Asian-language interfaces?",
    answer:
      "Yes. Stepes supports right-to-left languages and Asian writing systems. Localization can address bidirectional layout, alignment, font support, character encoding, text expansion, input behavior, punctuation, line breaking, and locale-specific formatting. The exact testing and engineering requirements depend on the product architecture and target locale.",
  },
  {
    question: "How does Stepes use AI for software translation?",
    answer:
      "Stepes uses AI to accelerate translation, improve scalability, and support high-volume or frequently updated content. AI workflows can be combined with translation memory, approved terminology, automated QA, professional post-editing, linguistic review, in-context validation, and software testing. Human involvement is selected according to content purpose, audience, visibility, complexity, and business risk.",
  },
  {
    question: "How does Stepes protect confidential software content?",
    answer:
      "Stepes supports confidential software localization through controlled project access, secure content transfer, confidentiality agreements, structured workflows, defined review permissions, and documented quality processes. Customer-specific security and data-handling requirements can be reviewed during program setup, including needs related to unreleased products, proprietary technical content, and regulated information.",
  },
  {
    question: "Which software file formats can Stepes process?",
    answer:
      "Stepes supports a broad range of software, structured content, document, web, mobile, multimedia, and localization formats. These may include resource files, XML, JSON, XLIFF, YAML, properties files, spreadsheets, content exports, documents, subtitles, and other structured formats. File handling is configured to protect tags, variables, placeholders, code elements, and formatting during translation.",
  },
  {
    question: "Can Stepes translate help centers, training, and support content?",
    answer:
      "Yes. Stepes translates help centers, knowledge bases, troubleshooting articles, onboarding materials, customer academies, certification programs, product videos, support communications, FAQs, chatbot knowledge, and embedded assistance. Shared terminology and translation memories help keep this content aligned with the localized product interface and technical documentation.",
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 10h11M11 6l4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m5 12.5 4.2 4.1L19 7" />
    </svg>
  );
}

function TouchpointIcon({ type }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

  const paths = {
    product: (
      <>
        <rect x="3.5" y="4.5" width="17" height="14.5" rx="2" {...common} />
        <path d="M3.5 8.5h17M7 6.5h.1M10 6.5h.1M8 12h3M8 15h7M14.5 11.5l2 2-2 2" {...common} />
      </>
    ),
    mobile: (
      <>
        <rect x="7" y="2.5" width="10" height="19" rx="2.5" {...common} />
        <path d="M10 5.5h4M10.5 18.2h3" {...common} />
      </>
    ),
    web: (
      <>
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M3.3 12h17.4M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21M12 3C9.5 5.6 8.2 8.6 8.2 12S9.5 18.4 12 21" {...common} />
      </>
    ),
    docs: (
      <>
        <path d="M6 3.5h8l4 4v13H6z" {...common} />
        <path d="M14 3.5v4h4M9 12h6M9 15.5h6" {...common} />
      </>
    ),
    support: (
      <>
        <path d="M5 17.5c-1.3-1.3-2-3.2-2-5.2C3 7.2 7 3.5 12 3.5s9 3.7 9 8.8c0 4.8-3.7 8.2-8.5 8.2-1.7 0-3.1-.3-4.2-1L4 20.5z" {...common} />
        <path d="M8 10.5h8M8 14h5" {...common} />
      </>
    ),
    marketing: (
      <>
        <path d="M4 13V8.5l11-4v12L4 13Z" {...common} />
        <path d="M15 8.5h2.5a2.5 2.5 0 0 1 0 5H15M6.5 13l1.3 6h3" {...common} />
      </>
    ),
    learning: (
      <>
        <path d="m3 9 9-5 9 5-9 5z" {...common} />
        <path d="M6 11.5v4.3c3.2 2.4 8.8 2.4 12 0v-4.3M21 9v6" {...common} />
      </>
    ),
    legal: (
      <>
        <path d="M12 3v18M7 6h10M5 8l-3 6h6zM19 8l-3 6h6zM7 21h10" {...common} />
      </>
    ),
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[type]}</svg>;
}

function SoftwareSaaSLineArt() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 620 500" role="img" aria-label="Connected software localization workflow illustration">
      <defs>
        <linearGradient id="softFill" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#FDF2F7" />
          <stop offset="1" stopColor="#FFFFFF" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#7A1542" floodOpacity="0.08" />
        </filter>
      </defs>

      <path d="M52 412C87 361 112 324 171 313c61-11 82 44 144 32 66-13 63-77 130-79 52-2 80 35 123 16" fill="none" stroke="#E9D7E0" strokeWidth="2" strokeDasharray="8 10" />
      <circle cx="77" cy="116" r="46" fill="#FDF2F7" />
      <circle cx="536" cy="398" r="58" fill="#F7F7F8" />
      <circle cx="540" cy="93" r="22" fill="#FDF2F7" />

      <g filter="url(#softShadow)">
        <rect x="115" y="82" width="390" height="300" rx="26" fill="url(#softFill)" stroke="#C8CFD8" strokeWidth="2" />
        <path d="M115 132h390" stroke="#C8CFD8" strokeWidth="2" />
        <circle cx="148" cy="107" r="5" fill="#C11D63" />
        <circle cx="168" cy="107" r="5" fill="#D4D9E0" />
        <circle cx="188" cy="107" r="5" fill="#D4D9E0" />

        <rect x="142" y="158" width="102" height="192" rx="16" fill="#FFFFFF" stroke="#DCE1E7" strokeWidth="2" />
        <path d="M164 184h56M164 207h40M164 250h56M164 273h48M164 316h38" stroke="#7B8798" strokeWidth="8" strokeLinecap="round" opacity="0.72" />
        <circle cx="158" cy="184" r="4" fill="#C11D63" />
        <circle cx="158" cy="250" r="4" fill="#C11D63" />
        <circle cx="158" cy="316" r="4" fill="#C11D63" />

        <rect x="268" y="158" width="210" height="118" rx="18" fill="#FFFFFF" stroke="#DCE1E7" strokeWidth="2" />
        <path d="M294 186h102M294 210h156M294 236h124" stroke="#687486" strokeWidth="9" strokeLinecap="round" opacity="0.75" />
        <rect x="409" y="180" width="43" height="22" rx="11" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5" />
        <path d="m422 191 6 6 10-12" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

        <rect x="268" y="294" width="210" height="56" rx="16" fill="#FFFFFF" stroke="#DCE1E7" strokeWidth="2" />
        <path d="M294 322h77" stroke="#687486" strokeWidth="9" strokeLinecap="round" opacity="0.72" />
        <path d="M420 321h27" stroke="#C11D63" strokeWidth="9" strokeLinecap="round" />
      </g>

      <g fill="#FFFFFF" stroke="#788596" strokeWidth="2">
        <rect x="36" y="169" width="108" height="62" rx="18" />
        <rect x="476" y="188" width="112" height="62" rx="18" />
        <rect x="62" y="341" width="118" height="62" rx="18" />
        <rect x="442" y="360" width="124" height="62" rx="18" />
      </g>
      <path d="M144 200h32M476 219h-31M180 372h42M442 391h-42" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />

      <g fill="none" stroke="#667487" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M67 202h17m-8.5-8.5V210.5M95 195l11 7-11 7" />
        <path d="M504 211c10-13 28-13 38 0m-31-10 9 10 9-10M519 211v13" />
        <path d="M92 372h58M104 359v26M138 359v26M92 359h58M92 385h58" />
        <path d="M474 391h16l8-12 10 24 8-12h18" />
      </g>

      <g fill="#C11D63">
        <circle cx="144" cy="200" r="4" />
        <circle cx="476" cy="219" r="4" />
        <circle cx="180" cy="372" r="4" />
        <circle cx="442" cy="391" r="4" />
      </g>

      <g fill="#FFFFFF" stroke="#C11D63" strokeWidth="2">
        <circle cx="310" cy="54" r="22" />
        <circle cx="571" cy="309" r="18" />
        <circle cx="55" cy="286" r="18" />
      </g>
      <g fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M299 54h22M310 43v22" />
        <path d="M563 309h16M571 301v16" />
        <path d="M48 286h14M55 279v14" />
      </g>
    </svg>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="editorial-link" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionIntro({ eyebrow, title, copy, centered = false, dark = false }) {
  return (
    <div className={`section-intro${centered ? " section-intro--centered" : ""}${dark ? " section-intro--dark" : ""}`}>
      {eyebrow ? <p className={`eyebrow${dark ? " eyebrow--dark" : ""}`}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {copy ? <p className="section-lede">{copy}</p> : null}
    </div>
  );
}

function FaqItem({ item, index, isOpen, onToggle }) {
  const panelId = `software-saas-faq-${index}`;
  return (
    <div className={`faq-item${isOpen ? " is-open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.question}</span>
        <span className="faq-control" aria-hidden="true">
          <svg viewBox="0 0 20 20">
            <path d="M4 10h12M10 4v12" />
          </svg>
        </span>
      </button>
      <div id={panelId} className="faq-answer" hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function StepesSoftwareSaaSIndustryHub() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="software-saas-page">
      <style>{styles}</style>

      <section className="hero" id="software-saas-overview">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE &amp; SAAS</p>
            <h1>Software &amp; SaaS Translation Services for Global Growth</h1>
            <p className="hero-lede">
              Stepes helps software and SaaS companies create consistent multilingual experiences across products, websites, documentation, training, marketing, and customer support.
            </p>
            <p className="hero-support">
              Our AI-powered translation technology, professional linguists, and connected localization workflows help global product teams move faster while maintaining quality, terminology, security, and brand consistency across every market.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href={`${STEPS_URL}/contact-us/`}>
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
              <a className="button button--secondary" href={`${STEPS_URL}/software-localization-services/`}>
                <span>Explore Software Localization</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <SoftwareSaaSLineArt />
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="Software and SaaS translation capabilities">
        <div className="shell trust-grid">
          <div className="trust-item">
            <strong>ISO Certified</strong>
            <span>Documented translation and quality processes</span>
          </div>
          <div className="trust-item">
            <strong>100+ Languages</strong>
            <span>Global and regional language coverage</span>
          </div>
          <div className="trust-item">
            <strong>AI + Human Workflows</strong>
            <span>Quality models matched to content and risk</span>
          </div>
          <div className="trust-item">
            <strong>Enterprise Security</strong>
            <span>Controlled access and customer-specific workflows</span>
          </div>
        </div>
      </section>

      <section className="section section--overview" id="customer-journey">
        <div className="shell overview-grid">
          <div className="overview-heading">
            <p className="eyebrow">CONNECTED CUSTOMER EXPERIENCE</p>
            <h2>Language Solutions for the Entire Software Customer Journey</h2>
          </div>
          <div className="overview-content">
            <p className="large-copy">
              Global software success requires more than translating interface strings. Customers interact with your company through product experiences, websites, onboarding flows, documentation, training, campaigns, support channels, legal materials, and ongoing product communications.
            </p>
            <p>
              Stepes helps software and SaaS companies manage these connected experiences through one scalable global language program. We support the content customers encounter from initial product discovery and free-trial registration to implementation, daily product use, customer support, renewal, and expansion.
            </p>
            <p>
              Whether you are launching a SaaS product in new markets, expanding an enterprise software platform, supporting multilingual users, or coordinating continuous global releases, Stepes provides the technology, linguistic expertise, and operational support needed to scale confidently.
            </p>
            <EditorialLink href={`${STEPS_URL}/solutions/global-content-operations/`}>
              Global Content Operations
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="software-localization-challenges">
        <div className="shell">
          <SectionIntro
            eyebrow="MODERN SOFTWARE OPERATIONS"
            title="Global Software Moves Fast. Localization Must Keep Pace."
            copy="Stepes designs multilingual programs around the realities of agile development, distributed ownership, fragmented strings, growing content volumes, and continuous product change."
            dark
          />
          <div className="challenge-grid">
            {challengeItems.map((item) => (
              <article className="challenge-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software-content-ecosystem">
        <div className="shell">
          <SectionIntro
            eyebrow="END-TO-END COVERAGE"
            title="Localize Every Product and Customer Touchpoint"
            copy="Stepes supports the complete multilingual content ecosystem surrounding software and SaaS products, from the interface itself to every channel customers use to discover, adopt, learn, and get support."
          />
          <div className="touchpoint-list">
            {touchpoints.map((item) => (
              <article className="touchpoint-row" key={item.title}>
                <div className="touchpoint-icon">
                  <TouchpointIcon type={item.icon} />
                </div>
                <div className="touchpoint-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <EditorialLink href={item.href}>{item.label}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="software-business-models">
        <div className="shell">
          <SectionIntro
            title="Built for Modern Software and SaaS Businesses"
            copy="Different software categories create different localization requirements. Stepes adapts linguistic resources, workflow design, and quality controls to the product, audience, content type, release model, and level of risk."
            centered
          />
          <div className="business-grid">
            {businessModels.map((item) => (
              <article className="business-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="section-footnote">
            <p>
              Building AI products, models, or multilingual data programs? Explore Stepes solutions for <a href={`${STEPS_URL}/ai-machine-learning-translation-services/`}>AI &amp; Machine Learning</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="software-teams">
        <div className="shell teams-layout">
          <div className="teams-sticky">
            <p className="eyebrow">CROSS-FUNCTIONAL PROGRAMS</p>
            <h2>One Localization Program for Every Global Team</h2>
            <p>
              Give each business team the language workflows it needs while maintaining shared terminology, quality standards, visibility, and governance across the organization.
            </p>
            <EditorialLink href={`${STEPS_URL}/enterprise-translation-management/`}>
              Enterprise Translation Management
            </EditorialLink>
          </div>
          <div className="team-list">
            {teams.map((team) => (
              <article className="team-row" key={team.title}>
                <div>
                  <h3>{team.title}</h3>
                  <p>{team.copy}</p>
                </div>
                <a className="row-arrow" href={team.href} aria-label={`Explore ${team.title}`}>
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--lifecycle" id="global-product-lifecycle">
        <div className="shell">
          <SectionIntro
            title="Support Every Stage of Global Product Delivery"
            copy="Stepes helps software companies build localization into product planning, development, launch, and continuous improvement instead of treating translation as a final production step."
            centered
          />
          <div className="lifecycle-track">
            {lifecycle.map((item, index) => (
              <article className="lifecycle-step" key={item.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="step-copy">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="centered-link">
            <EditorialLink href={`${STEPS_URL}/software-localization-services/`}>
              Explore the Software Localization Workflow
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="ai-human-translation">
        <div className="shell ai-layout">
          <div className="ai-intro">
            <p className="eyebrow eyebrow--dark">RESPONSIBLE AUTOMATION</p>
            <h2>AI-Powered Translation With the Right Level of Human Expertise</h2>
            <p className="section-lede">
              A support article, product button, campaign, privacy policy, and technical integration guide should not all follow the same translation workflow. Stepes matches automation and professional expertise to content purpose, visibility, complexity, and business risk.
            </p>
            <div className="ai-links">
              <EditorialLink href={`${STEPS_URL}/ai-translation-platform/`}>AI Translation Platform</EditorialLink>
              <EditorialLink href={`${STEPS_URL}/machine-translation-post-editing/`}>Human Review and MTPE</EditorialLink>
            </div>
          </div>
          <div className="ai-workflow-list">
            {aiWorkflows.map((item) => (
              <article className="ai-workflow-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="agile-localization">
        <div className="shell automation-layout">
          <div className="automation-copy">
            <p className="eyebrow">CONNECTED WORKFLOWS</p>
            <h2>Connect Localization to Agile Product Development</h2>
            <p className="large-copy">
              Localization should move with product development, not wait at the end of it. Stepes supports connected workflows that reduce manual coordination and keep translation aligned with recurring releases.
            </p>
            <ul className="check-list">
              {[
                "API-driven translation requests and automated project creation",
                "Content handoff, retrieval, workflow triggers, and approvals",
                "Translation-memory reuse and terminology synchronization",
                "Recurring string updates, version coordination, and release visibility",
                "Centralized project tracking and scalable professional review",
              ].map((item) => (
                <li key={item}>
                  <span className="check-icon"><CheckIcon /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="automation-links">
              <EditorialLink href={`${STEPS_URL}/developers/translation-api/`}>Stepes Translation API</EditorialLink>
              <EditorialLink href={`${STEPS_URL}/translation-workflow-automation/`}>Translation Workflow Automation</EditorialLink>
            </div>
          </div>
          <div className="automation-diagram" role="group" aria-label="Connected localization workflow">
            <div className="diagram-column diagram-column--source">
              <span className="diagram-label">Source Systems</span>
              <div className="diagram-node">Product UI</div>
              <div className="diagram-node">Product Docs</div>
              <div className="diagram-node">Help Center</div>
              <div className="diagram-node">Marketing</div>
            </div>
            <div className="diagram-flow" aria-hidden="true">
              <span />
              <ArrowIcon />
            </div>
            <div className="diagram-hub">
              <span className="diagram-label">Stepes Workflow</span>
              <div className="hub-core">
                <strong>AI + Human</strong>
                <span>Terminology</span>
                <span>Translation Memory</span>
                <span>Quality Assurance</span>
              </div>
            </div>
            <div className="diagram-flow" aria-hidden="true">
              <span />
              <ArrowIcon />
            </div>
            <div className="diagram-column diagram-column--delivery">
              <span className="diagram-label">Global Delivery</span>
              <div className="diagram-node">Localized Product</div>
              <div className="diagram-node">Global Launch</div>
              <div className="diagram-node">Ongoing Updates</div>
              <div className="diagram-node">Market Review</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="terminology-consistency">
        <div className="shell">
          <SectionIntro
            eyebrow="PRODUCT LANGUAGE GOVERNANCE"
            title="Keep Product Language Consistent Across Every Channel"
            copy="The name used for a feature in the interface should appear correctly in documentation, websites, training, support, legal content, and release communications. Stepes helps teams manage this consistency at scale."
          />
          <div className="terminology-grid">
            {terminologyItems.map((item) => (
              <article className="terminology-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <EditorialLink href={item.href}>{item.title}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software-quality-assurance">
        <div className="shell quality-layout">
          <div className="quality-heading">
            <p className="eyebrow">DIGITAL PRODUCT QUALITY</p>
            <h2>Quality Controls Built for Software Experiences</h2>
            <p>
              Software translation quality includes more than linguistic accuracy. Localized content must display correctly, function as intended, fit the interface, and remain consistent with the surrounding product experience.
            </p>
            <EditorialLink href={`${STEPS_URL}/translation-quality-assurance/`}>
              Translation Quality Assurance
            </EditorialLink>
          </div>
          <div className="quality-list">
            {qualityChecks.map((item) => (
              <div className="quality-row" key={item}>
                <span className="check-icon"><CheckIcon /></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--security" id="software-security">
        <div className="shell security-panel">
          <div className="security-copy">
            <p className="eyebrow">SECURITY &amp; GOVERNANCE</p>
            <h2>Secure Localization for Business-Critical Software Content</h2>
            <p className="large-copy">
              Software localization programs can involve confidential roadmaps, unreleased features, proprietary technical materials, security documentation, and customer information. Stepes supports enterprise programs through controlled access, secure processes, and documented quality workflows.
            </p>
            <div className="security-links">
              <EditorialLink href={`${STEPS_URL}/security/`}>Security at Stepes</EditorialLink>
              <EditorialLink href={`${STEPS_URL}/iso-certifications/`}>ISO Certifications</EditorialLink>
            </div>
          </div>
          <div className="security-grid">
            {[
              "Confidentiality agreements and customer-specific requirements",
              "Controlled project access and secure content transfer",
              "Role-based review, approval, and project visibility",
              "Documented quality processes and data-handling controls",
              "Security review support for enterprise programs",
              "Additional oversight for regulated and higher-risk content",
            ].map((item) => (
              <div className="security-item" key={item}>
                <span className="security-mark" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software-languages">
        <div className="shell language-layout">
          <div className="language-copy">
            <h2>Software Translation in 100+ Languages</h2>
            <p className="large-copy">
              Stepes supports major global markets and specialized regional requirements with professional linguists selected for language, subject matter, content type, and project needs.
            </p>
            <p>
              Our workflows account for regional variants, formality, right-to-left display, Asian writing systems, fonts, character encoding, dates, numbers, currencies, units, addresses, and local product or subscription terminology.
            </p>
            <EditorialLink href={`${STEPS_URL}/languages/`}>Explore Supported Languages</EditorialLink>
          </div>
          <div className="locale-board" role="group" aria-label="Examples of localized software languages and locale requirements">
            <div className="locale-row">
              <span>English</span><strong>en-US · en-GB</strong>
            </div>
            <div className="locale-row">
              <span>Spanish</span><strong>es-ES · es-MX</strong>
            </div>
            <div className="locale-row">
              <span>Chinese</span><strong>zh-CN · zh-TW</strong>
            </div>
            <div className="locale-row">
              <span>Portuguese</span><strong>pt-BR · pt-PT</strong>
            </div>
            <div className="locale-row">
              <span>Arabic</span><strong>RTL Interface</strong>
            </div>
            <div className="locale-row">
              <span>Japanese</span><strong>CJK Typography</strong>
            </div>
            <div className="locale-footer">
              <span>Regional variants</span>
              <span>Locale formatting</span>
              <span>Market terminology</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="why-stepes">
        <div className="shell">
          <SectionIntro
            title="A Global Language Partner for the Complete Software Business"
            copy="Stepes combines software localization expertise, broad content coverage, connected technology, professional language resources, and enterprise program control."
            centered
          />
          <div className="why-grid">
            {whyStepes.map((item) => (
              <article className="why-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software-programs">
        <div className="shell program-layout">
          <div className="program-heading">
            <p className="eyebrow">GLOBAL PROGRAM MODELS</p>
            <h2>Built for Every Stage of Global Software Growth</h2>
            <p>
              Stepes supports software companies at different stages of global growth, from a first multilingual launch to centralized enterprise language operations.
            </p>
          </div>
          <div className="program-list">
            {programUseCases.map((item) => (
              <article className="program-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--related" id="related-software-services">
        <div className="shell">
          <SectionIntro
            title="Explore Software and SaaS Language Services"
            copy="Connect specialized localization services and developer capabilities through one coordinated global program."
          />
          <div className="related-grid">
            {relatedServices.map((item) => (
              <a className="related-item" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="software-resources">
        <div className="shell">
          <SectionIntro
            title="Software and SaaS Localization Resources"
            copy="Explore practical guidance for SaaS localization strategy, continuous delivery, global product readiness, quality assurance, and software testing."
          />
          <div className="resource-grid">
            {resources.map((resource) => (
              <a className="resource-item" href={resource.href} key={resource.title}>
                <p className="resource-category">{resource.category}</p>
                <h3>{resource.title}</h3>
                <p>{resource.copy}</p>
                <span className="resource-action">
                  Read the Guide <ArrowIcon />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--faq" id="software-saas-faq">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <h2>Software &amp; SaaS Translation FAQ</h2>
            <p>
              Find answers about software translation, localization, continuous releases, integrations, quality, security, file formats, and global language support.
            </p>
            <EditorialLink href={`${STEPS_URL}/contact-us/`}>Ask Our Software Localization Team</EditorialLink>
          </div>
          <div className="faq-panel">
            {faqItems.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact-software-team">
        <div className="shell final-cta-panel">
          <div className="final-cta-copy">
            <h2>Build a Global Software Experience</h2>
            <p>
              Create a consistent multilingual experience across your product, website, documentation, marketing, training, and customer support with one scalable global language program.
            </p>
          </div>
          <div className="final-cta-actions">
            <a className="button button--primary" href={`${STEPS_URL}/contact-us/`}>
              <span>Contact Our Team</span>
              <ArrowIcon />
            </a>
            <a className="button button--secondary" href={`${STEPS_URL}/software-localization-services/`}>
              <span>Explore Software Localization</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --stepes-primary: #C11D63;
    --stepes-hover: #A71954;
    --stepes-dark: #9F1D55;
    --stepes-deep: #7A1542;
    --stepes-soft: #FDF2F7;
    --stepes-eyebrow-dark: #F2A7C6;
    --ink: #121826;
    --ink-soft: #536174;
    --ink-muted: #6B7789;
    --line: #E4E8ED;
    --line-dark: rgba(255, 255, 255, 0.16);
    --surface: #F6F7F8;
    --surface-2: #F9FAFB;
    --dark-surface: #151723;
    --dark-surface-2: #202231;
    --white: #FFFFFF;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
  }

  .software-saas-page {
    width: 100%;
    overflow-x: hidden;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.68;
  }

  .software-saas-page a {
    color: inherit;
  }

  .software-saas-page h1,
  .software-saas-page h2,
  .software-saas-page h3,
  .software-saas-page p {
    margin-top: 0;
  }

  .software-saas-page h1,
  .software-saas-page h2,
  .software-saas-page h3 {
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.14;
  }

  .software-saas-page h1 {
    margin-bottom: 26px;
    font-size: 48px;
    max-width: 720px;
  }

  .software-saas-page h2 {
    margin-bottom: 24px;
    font-size: 36px;
  }

  .software-saas-page h3 {
    margin-bottom: 12px;
    font-size: 24px;
  }

  .software-saas-page p,
  .software-saas-page li,
  .software-saas-page a {
    font-size: 16px;
  }

  .software-saas-page h1,
  .software-saas-page h2,
  .software-saas-page h3,
  .software-saas-page p,
  .software-saas-page li,
  .software-saas-page a,
  .software-saas-page button,
  .software-saas-page span,
  .software-saas-page strong {
    overflow-wrap: break-word;
  }

  .shell {
    width: min(1280px, 100%);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .section--soft {
    background: var(--surface-2);
  }

  .section--dark {
    background: var(--dark-surface);
    color: var(--white);
  }

  .eyebrow {
    margin: 0 0 16px;
    color: var(--stepes-primary) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: 0.17em !important;
    line-height: 1.35 !important;
    text-transform: uppercase;
  }

  .eyebrow--dark,
  .section--dark .eyebrow {
    color: var(--stepes-eyebrow-dark) !important;
  }

  .section-intro {
    max-width: 820px;
    margin-bottom: 54px;
  }

  .section-intro--centered {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .section-intro--dark .section-lede,
  .section--dark .section-lede {
    color: #C6CBD5;
  }

  .section-lede {
    max-width: 790px;
    margin-bottom: 0;
    color: var(--ink-soft);
    font-size: 18px !important;
    line-height: 1.66;
  }

  .large-copy {
    font-size: 18px !important;
    line-height: 1.72;
  }

  .hero {
    position: relative;
    padding-top: 104px;
    padding-bottom: 96px;
    overflow: hidden;
    background:
      radial-gradient(circle at 89% 18%, rgba(193, 29, 99, 0.06), transparent 23%),
      linear-gradient(180deg, #FFFFFF 0%, #FEFCFD 100%);
  }

  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.04fr) minmax(430px, 0.96fr);
    gap: 42px;
    align-items: center;
  }

  .hero-copy {
    position: relative;
    z-index: 2;
    min-width: 0;
  }

  .hero-lede {
    max-width: 700px;
    margin-bottom: 18px;
    color: #344052;
    font-size: 20px !important;
    line-height: 1.58;
  }

  .hero-support {
    max-width: 690px;
    margin-bottom: 34px;
    color: var(--ink-soft);
    font-size: 17px !important;
    line-height: 1.68;
  }

  .hero-actions,
  .final-cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .button {
    min-width: 0;
    max-width: 100%;
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .button svg,
  .editorial-link svg,
  .related-item > svg,
  .resource-action svg,
  .row-arrow svg,
  .diagram-flow svg {
    width: 18px;
    height: 18px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
    flex: 0 0 auto;
  }

  .button--primary,
  .button--primary:link,
  .button--primary:visited,
  .button--primary:hover,
  .button--primary:active,
  .button--primary:focus,
  .button--primary:focus-visible,
  .button--primary span,
  .button--primary svg,
  .button--primary svg * {
    color: #FFFFFF !important;
    fill: none;
    stroke: #FFFFFF !important;
  }

  .button--primary {
    background: var(--stepes-primary);
    border-color: var(--stepes-primary);
    box-shadow: 0 12px 28px rgba(193, 29, 99, 0.18);
  }

  .button--primary:hover {
    transform: translateY(-1px);
    background: var(--stepes-hover);
    border-color: var(--stepes-hover);
    box-shadow: 0 15px 30px rgba(167, 25, 84, 0.22);
  }

  .button--secondary {
    background: #FFFFFF;
    border-color: #DDE2E8;
    color: #232B39;
  }

  .button--secondary:hover {
    transform: translateY(-1px);
    border-color: #BFC7D1;
    box-shadow: 0 10px 24px rgba(18, 24, 38, 0.07);
  }

  .button:focus-visible,
  .editorial-link:focus-visible,
  .related-item:focus-visible,
  .resource-item:focus-visible,
  .row-arrow:focus-visible,
  .faq-question:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.25);
    outline-offset: 4px;
  }

  .hero-art {
    min-width: 0;
    width: 100%;
    justify-self: end;
  }

  .hero-art-svg {
    display: block;
    width: 100%;
    height: auto;
    max-width: 620px;
    margin-left: auto;
  }

  .trust-band {
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    background: #FFFFFF;
  }

  .trust-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .trust-item {
    min-width: 0;
    padding: 28px 26px;
    border-right: 1px solid var(--line);
  }

  .trust-item:first-child {
    padding-left: 0;
  }

  .trust-item:last-child {
    border-right: 0;
    padding-right: 0;
  }

  .trust-item strong,
  .trust-item span {
    display: block;
  }

  .trust-item strong {
    margin-bottom: 5px;
    color: var(--ink);
    font-size: 17px;
    font-weight: 600;
  }

  .trust-item span {
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.5;
  }

  .overview-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 92px;
    align-items: start;
  }

  .overview-heading,
  .overview-content,
  .teams-sticky,
  .team-list,
  .program-heading,
  .program-list,
  .ai-intro,
  .ai-workflow-list,
  .automation-copy,
  .automation-diagram,
  .quality-heading,
  .quality-list,
  .security-copy,
  .security-grid,
  .language-copy,
  .locale-board,
  .faq-heading,
  .faq-panel,
  .final-cta-copy,
  .final-cta-actions {
    min-width: 0;
  }

  .overview-heading h2 {
    max-width: 530px;
  }

  .overview-content {
    max-width: 730px;
  }

  .overview-content p {
    color: var(--ink-soft);
  }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    min-height: 44px;
    color: var(--stepes-primary) !important;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }

  .editorial-link:hover span {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-thickness: 1px;
  }

  .editorial-link:hover svg {
    transform: translateX(2px);
  }

  .editorial-link svg {
    transition: transform 160ms ease;
  }

  .challenge-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--line-dark);
  }

  .challenge-item {
    min-width: 0;
    padding: 34px 38px 38px 0;
    border-bottom: 1px solid var(--line-dark);
  }

  .challenge-item:nth-child(odd) {
    padding-right: 48px;
    border-right: 1px solid var(--line-dark);
  }

  .challenge-item:nth-child(even) {
    padding-left: 48px;
  }

  .challenge-item h3 {
    color: #FFFFFF;
    font-size: 22px;
  }

  .challenge-item p {
    margin-bottom: 0;
    color: #C7CCD6;
  }

  .touchpoint-list {
    border-top: 1px solid var(--line);
  }

  .touchpoint-row {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr) 230px;
    gap: 26px;
    align-items: center;
    padding: 30px 0;
    border-bottom: 1px solid var(--line);
  }

  .touchpoint-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #F4F5F7;
    color: #354155;
  }

  .touchpoint-icon svg {
    width: 24px;
    height: 24px;
  }

  .touchpoint-copy h3 {
    margin-bottom: 8px;
    font-size: 21px;
  }

  .touchpoint-copy p {
    max-width: 760px;
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .touchpoint-row .editorial-link {
    justify-self: end;
    text-align: right;
  }

  .business-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    background: #FFFFFF;
  }

  .business-item {
    min-width: 0;
    padding: 30px 28px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .business-item h3 {
    font-size: 20px;
  }

  .business-item p {
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .section-footnote {
    max-width: 820px;
    margin: 30px auto 0;
    text-align: center;
  }

  .section-footnote p {
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .section-footnote a {
    color: var(--stepes-primary);
    font-weight: 600;
    text-decoration: none;
  }

  .section-footnote a:hover {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .teams-layout,
  .program-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
    gap: 88px;
    align-items: start;
  }

  .teams-sticky,
  .program-heading {
    position: sticky;
    top: 32px;
  }

  .teams-sticky p:not(.eyebrow),
  .program-heading p:not(.eyebrow) {
    color: var(--ink-soft);
  }

  .team-list,
  .program-list {
    border-top: 1px solid var(--line);
  }

  .team-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 48px;
    gap: 24px;
    align-items: center;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .team-row h3,
  .program-row h3 {
    font-size: 21px;
  }

  .team-row p,
  .program-row p {
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .row-arrow {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    justify-self: end;
    border: 1px solid var(--line);
    border-radius: 50%;
    color: var(--stepes-primary);
    text-decoration: none;
    transition: border-color 160ms ease, transform 160ms ease, background 160ms ease;
  }

  .row-arrow:hover {
    transform: translateX(2px);
    border-color: #C5CBD3;
    background: var(--stepes-soft);
  }

  .section--lifecycle {
    padding-bottom: 104px;
    background: #FFFFFF;
  }

  .lifecycle-track {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .lifecycle-step {
    min-width: 0;
    grid-column: span 3;
    padding: 30px 28px 34px;
    border-right: 1px solid var(--line);
  }

  .lifecycle-step:nth-child(-n + 4) {
    border-bottom: 1px solid var(--line);
  }

  .lifecycle-step:nth-child(4),
  .lifecycle-step:last-child {
    border-right: 0;
  }

  .lifecycle-step:nth-child(n + 5) {
    grid-column: span 4;
  }

  .step-number {
    margin-bottom: 24px;
    color: var(--stepes-primary);
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
  }

  .step-copy h3 {
    font-size: 20px;
    line-height: 1.28;
  }

  .step-copy p {
    margin-bottom: 0;
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.6;
  }

  .centered-link {
    display: flex;
    justify-content: center;
    margin-top: 28px;
  }

  .ai-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 92px;
    align-items: start;
  }

  .ai-intro {
    max-width: 560px;
  }

  .ai-intro h2 {
    color: #FFFFFF;
  }

  .ai-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 28px;
    margin-top: 26px;
  }

  .section--dark .editorial-link {
    color: var(--stepes-eyebrow-dark) !important;
  }

  .ai-workflow-list {
    border-top: 1px solid var(--line-dark);
  }

  .ai-workflow-row {
    display: grid;
    grid-template-columns: minmax(180px, 0.82fr) minmax(0, 1.18fr);
    gap: 30px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line-dark);
  }

  .ai-workflow-row h3 {
    margin-bottom: 0;
    color: #FFFFFF;
    font-size: 19px;
    line-height: 1.35;
  }

  .ai-workflow-row p {
    margin-bottom: 0;
    color: #C7CCD6;
  }

  .automation-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(520px, 1.18fr);
    gap: 78px;
    align-items: center;
  }

  .automation-copy p:not(.eyebrow) {
    color: var(--ink-soft);
  }

  .check-list {
    display: grid;
    gap: 16px;
    margin: 28px 0 24px;
    padding: 0;
    list-style: none;
  }

  .check-list li {
    display: grid;
    grid-template-columns: 26px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    color: #374355;
  }

  .check-icon {
    width: 24px;
    height: 24px;
    display: grid;
    place-items: center;
    color: var(--stepes-primary);
  }

  .check-icon svg {
    width: 21px;
    height: 21px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .automation-links,
  .security-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 28px;
  }

  .automation-diagram {
    display: grid;
    grid-template-columns:
      minmax(96px, 1fr)
      22px
      minmax(138px, 1.18fr)
      22px
      minmax(96px, 1fr);
    gap: 8px;
    align-items: stretch;
    min-width: 0;
    padding: 24px;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 28px;
    background: #FBFBFC;
    box-shadow: 0 18px 42px rgba(18, 24, 38, 0.07);
  }

  .diagram-column,
  .diagram-hub {
    display: grid;
    grid-template-rows: auto 1fr;
    gap: 12px;
    min-width: 0;
    padding: 14px;
    border: 1px solid #E0E4E9;
    border-radius: 18px;
    background: #FFFFFF;
  }

  .diagram-hub {
    border-color: #E3B5C9;
    background: #FFFBFD;
  }

  .diagram-label {
    min-width: 0;
    min-height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 3px;
    color: var(--ink-muted);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .diagram-node {
    min-width: 0;
    display: grid;
    place-items: center;
    padding: 10px 8px;
    border: 1px solid #E0E4E9;
    border-radius: 12px;
    background: #FFFFFF;
    color: #344052;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.28;
    text-align: center;
    overflow-wrap: anywhere;
  }

  .diagram-flow {
    display: flex;
    align-items: center;
    min-width: 0;
    color: var(--stepes-primary);
  }

  .diagram-flow span {
    height: 1px;
    min-width: 0;
    flex: 1;
    background: #D9A6BD;
  }

  .hub-core {
    display: grid;
    align-content: center;
    gap: 9px;
    min-width: 0;
    padding: 18px 12px;
    border: 1px solid #DCA7BF;
    border-radius: 16px;
    background: var(--stepes-soft);
    text-align: center;
  }

  .hub-core strong {
    color: var(--stepes-deep);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
  }

  .hub-core span {
    color: #5E3850;
    font-size: 16px;
    line-height: 1.3;
    overflow-wrap: anywhere;
  }

  .terminology-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
  }

  .terminology-item {
    min-width: 0;
    padding: 32px 28px 26px;
    border-right: 1px solid var(--line);
  }

  .terminology-item:first-child {
    padding-left: 0;
  }

  .terminology-item:last-child {
    padding-right: 0;
    border-right: 0;
  }

  .terminology-item h3 {
    font-size: 20px;
  }

  .terminology-item p {
    color: var(--ink-soft);
  }

  .quality-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 90px;
    align-items: start;
  }

  .quality-heading p:not(.eyebrow) {
    color: var(--ink-soft);
  }

  .quality-list {
    border-top: 1px solid var(--line);
  }

  .quality-row {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 22px 0;
    border-bottom: 1px solid var(--line);
  }

  .quality-row p {
    margin-bottom: 0;
    color: #364255;
  }

  .section--security {
    padding-top: 88px;
    padding-bottom: 88px;
    background: #FFFFFF;
  }

  .security-panel {
    display: grid;
    grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
    gap: 72px;
    padding-top: 62px;
    padding-bottom: 62px;
    border-radius: 30px;
    background: var(--stepes-soft);
  }

  .security-copy p:not(.eyebrow) {
    color: #534351;
  }

  .security-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid #E9CEDB;
    border-left: 1px solid #E9CEDB;
  }

  .security-item {
    min-width: 0;
    padding: 24px 22px;
    border-right: 1px solid #E9CEDB;
    border-bottom: 1px solid #E9CEDB;
    background: rgba(255, 255, 255, 0.56);
  }

  .security-mark {
    display: block;
    width: 22px;
    height: 2px;
    margin: 10px 0 18px;
    background: var(--stepes-primary);
  }

  .security-item p {
    margin-bottom: 0;
    color: #4F4350;
  }

  .language-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(470px, 1.1fr);
    gap: 84px;
    align-items: center;
  }

  .language-copy p:not(.eyebrow) {
    max-width: 640px;
    color: var(--ink-soft);
  }

  .locale-board {
    border: 1px solid var(--line);
    border-radius: 28px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 20px 46px rgba(18, 24, 38, 0.07);
  }

  .locale-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    align-items: center;
    padding: 18px 22px;
    border-bottom: 1px solid var(--line);
  }

  .locale-row span,
  .locale-row strong {
    font-size: 16px;
  }

  .locale-row span {
    color: #344052;
  }

  .locale-row strong {
    color: var(--stepes-deep);
    font-weight: 600;
    text-align: right;
  }

  .locale-footer {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1px;
    background: var(--line);
  }

  .locale-footer span {
    padding: 13px 9px;
    background: var(--surface-2);
    color: var(--ink-muted);
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
    text-align: center;
  }

  .why-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
    background: #FFFFFF;
  }

  .why-item {
    min-width: 0;
    padding: 34px 30px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .why-item h3 {
    font-size: 20px;
  }

  .why-item p {
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .program-row {
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .program-row p {
    max-width: 780px;
  }

  .section--related {
    background: var(--dark-surface);
    color: #FFFFFF;
  }

  .section--related .section-lede {
    color: #C6CBD5;
  }

  .related-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line-dark);
    border-left: 1px solid var(--line-dark);
  }

  .related-item {
    min-width: 0;
    min-height: 214px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 28px;
    padding: 28px;
    border-right: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
    color: #FFFFFF !important;
    text-decoration: none;
    transition: background 160ms ease;
  }

  .related-item:hover {
    background: rgba(255, 255, 255, 0.045);
  }

  .related-item h3 {
    color: #FFFFFF;
    font-size: 20px;
  }

  .related-item p {
    margin-bottom: 0;
    color: #C5CBD5;
  }

  .related-item > svg {
    color: var(--stepes-eyebrow-dark);
  }

  .resource-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 20px;
  }

  .resource-item {
    min-width: 0;
    min-height: 292px;
    display: flex;
    flex-direction: column;
    padding: 28px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #FFFFFF;
    color: var(--ink) !important;
    text-decoration: none;
    transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }

  .resource-item:hover {
    transform: translateY(-2px);
    border-color: #C9CFD7;
    box-shadow: 0 16px 34px rgba(18, 24, 38, 0.07);
  }

  .resource-category {
    margin-bottom: 16px;
    color: var(--stepes-primary) !important;
    font-size: 11px !important;
    font-weight: 600;
    letter-spacing: 0.15em;
    line-height: 1.35;
  }

  .resource-item h3 {
    font-size: 21px;
  }

  .resource-item > p:not(.resource-category) {
    color: var(--ink-soft);
  }

  .resource-action {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 7px;
    margin-top: auto;
    padding-top: 18px;
    color: var(--stepes-primary);
    font-size: 16px;
    font-weight: 600;
  }

  .section--faq {
    background: var(--surface-2);
  }

  .faq-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.68fr) minmax(0, 1.32fr);
    gap: 86px;
    align-items: start;
  }

  .faq-heading {
    position: sticky;
    top: 32px;
  }

  .faq-heading p:not(.eyebrow) {
    color: var(--ink-soft);
  }

  .faq-panel {
    border-top: 1px solid var(--line);
  }

  .faq-item {
    border-bottom: 1px solid var(--line);
  }

  .faq-question {
    width: 100%;
    min-height: 76px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 38px;
    gap: 24px;
    align-items: center;
    padding: 21px 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    text-align: left;
    cursor: pointer;
  }

  .faq-control {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    justify-self: end;
    border: 1px solid var(--line);
    border-radius: 50%;
    color: var(--stepes-primary);
  }

  .faq-control svg {
    width: 17px;
    height: 17px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.7;
    stroke-linecap: round;
    transition: transform 160ms ease;
  }

  .faq-item.is-open .faq-control svg {
    transform: rotate(45deg);
  }

  .faq-answer {
    max-width: 840px;
    padding: 0 58px 25px 0;
  }

  .faq-answer p {
    margin-bottom: 0;
    color: var(--ink-soft);
  }

  .final-cta {
    padding-top: 88px;
    padding-bottom: 96px;
    background: #FFFFFF;
  }

  .final-cta-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 56px;
    align-items: center;
    padding-top: 58px;
    padding-bottom: 58px;
    border: 1px solid #E9CFDC;
    border-radius: 30px;
    background:
      radial-gradient(circle at 94% 14%, rgba(193, 29, 99, 0.08), transparent 28%),
      var(--stepes-soft);
  }

  .final-cta-copy h2 {
    margin-bottom: 15px;
  }

  .final-cta-copy p {
    max-width: 760px;
    margin-bottom: 0;
    color: #5B4654;
    font-size: 18px;
  }

  .final-cta-actions {
    justify-content: flex-end;
  }

  @media (max-width: 1180px) {
    .shell {
      padding-left: 40px;
      padding-right: 40px;
    }

    .hero-grid {
      grid-template-columns: minmax(0, 1fr) minmax(390px, 0.9fr);
      gap: 28px;
    }

    .business-grid,
    .related-grid,
    .resource-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .automation-layout,
    .language-layout {
      grid-template-columns: minmax(0, 0.9fr) minmax(440px, 1.1fr);
      gap: 54px;
    }

    .automation-diagram {
      padding: 18px;
      gap: 7px;
    }

    .diagram-column,
    .diagram-hub {
      padding: 12px;
    }
  }

  @media (max-width: 1040px) {
    .automation-layout,
    .language-layout {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .automation-diagram,
    .locale-board {
      width: 100%;
      max-width: 760px;
      justify-self: center;
    }
  }

  @media (max-width: 960px) {
    .shell {
      padding-left: 24px;
      padding-right: 24px;
    }

    .section {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .software-saas-page h1 {
      font-size: 42px;
    }

    .software-saas-page h2 {
      font-size: 32px;
    }

    .software-saas-page h3 {
      font-size: 22px;
    }

    .hero {
      padding-top: 88px;
      padding-bottom: 78px;
    }

    .hero-grid {
      grid-template-columns: minmax(0, 1fr) minmax(330px, 0.8fr);
      gap: 18px;
    }

    .hero-art-svg {
      transform: translateX(20px);
    }

    .trust-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .trust-item:nth-child(2) {
      border-right: 0;
    }

    .trust-item:nth-child(-n + 2) {
      border-bottom: 1px solid var(--line);
    }

    .trust-item:nth-child(3) {
      padding-left: 0;
    }

    .overview-grid,
    .teams-layout,
    .ai-layout,
    .quality-layout,
    .program-layout,
    .faq-layout,
    .security-panel,
    .automation-layout,
    .language-layout {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .teams-sticky,
    .program-heading,
    .faq-heading {
      position: static;
    }

    .touchpoint-row {
      grid-template-columns: 52px minmax(0, 1fr);
    }

    .touchpoint-row .editorial-link {
      grid-column: 2;
      justify-self: start;
      text-align: left;
      margin-top: -4px;
    }

    .business-grid,
    .terminology-grid,
    .why-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .terminology-grid {
      border-left: 1px solid var(--line);
    }

    .terminology-item,
    .terminology-item:first-child,
    .terminology-item:last-child {
      padding: 28px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .lifecycle-track {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .lifecycle-step:nth-child(n) {
      grid-column: auto;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }

    .lifecycle-step:nth-child(even) {
      border-right: 0;
    }

    .lifecycle-step:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .ai-workflow-row {
      grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    }

    .automation-diagram {
      max-width: 720px;
    }

    .security-panel {
      padding-top: 52px;
      padding-bottom: 52px;
    }

    .final-cta-panel {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .final-cta-actions {
      justify-content: flex-start;
    }
  }

  @media (max-width: 768px) {
    .section {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .hero {
      padding-top: 76px;
      padding-bottom: 68px;
    }

    .hero-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .hero-copy {
      max-width: 720px;
    }

    .hero-art {
      justify-self: center;
      max-width: 620px;
    }

    .hero-art-svg {
      transform: none;
    }

    .challenge-grid {
      grid-template-columns: 1fr;
    }

    .challenge-item,
    .challenge-item:nth-child(odd),
    .challenge-item:nth-child(even) {
      padding: 27px 0 30px;
      border-right: 0;
    }

    .touchpoint-row {
      padding: 26px 0;
    }

    .security-grid {
      grid-template-columns: 1fr;
    }

    .ai-workflow-row {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .automation-diagram {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 24px;
    }

    .diagram-flow {
      width: 34px;
      height: 34px;
      justify-self: center;
      transform: rotate(90deg);
    }

    .diagram-column,
    .diagram-hub {
      max-width: 440px;
      width: 100%;
      justify-self: center;
    }

    .diagram-label {
      min-height: 30px;
    }

    .terminology-item,
    .terminology-item:first-child,
    .terminology-item:last-child {
      padding: 27px 0;
      border-right: 0;
      border-left: 0;
    }

    .terminology-grid {
      border-left: 0;
    }

    .locale-board {
      max-width: 640px;
    }

    .final-cta {
      padding-top: 72px;
      padding-bottom: 72px;
    }
  }

  @media (max-width: 560px) {
    .shell {
      padding-left: 20px;
      padding-right: 20px;
    }

    .software-saas-page h1 {
      font-size: 38px;
      line-height: 1.12;
    }

    .software-saas-page h2 {
      font-size: 30px;
    }

    .software-saas-page h3 {
      font-size: 20px;
    }

    .section-intro {
      margin-bottom: 40px;
    }

    .hero {
      padding-top: 68px;
      padding-bottom: 60px;
    }

    .hero-lede {
      font-size: 18px !important;
    }

    .hero-support {
      font-size: 16px !important;
    }

    .hero-actions,
    .final-cta-actions {
      display: grid;
      grid-template-columns: 1fr;
    }

    .button {
      width: 100%;
      min-height: 52px;
    }

    .hero-art {
      margin-left: -10px;
      margin-right: -10px;
      width: calc(100% + 20px);
    }

    .trust-grid {
      grid-template-columns: 1fr;
    }

    .trust-item,
    .trust-item:first-child,
    .trust-item:last-child,
    .trust-item:nth-child(3) {
      padding: 22px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .trust-item:last-child {
      border-bottom: 0;
    }

    .overview-grid,
    .teams-layout,
    .ai-layout,
    .quality-layout,
    .program-layout,
    .faq-layout,
    .security-panel,
    .automation-layout,
    .language-layout {
      gap: 38px;
    }

    .touchpoint-row {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 16px;
    }

    .touchpoint-icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
    }

    .touchpoint-copy h3 {
      line-height: 1.25;
    }

    .touchpoint-copy p,
    .touchpoint-row .editorial-link {
      grid-column: 1 / -1;
    }

    .touchpoint-row .editorial-link {
      margin-top: 0;
    }

    .business-grid,
    .terminology-grid,
    .why-grid,
    .related-grid,
    .resource-grid {
      grid-template-columns: 1fr;
    }

    .business-grid,
    .why-grid {
      border-left: 0;
    }

    .business-item,
    .why-item,
    .related-item,
    .resource-item {
      min-height: 0;
      padding: 25px 22px;
    }

    .business-item,
    .why-item {
      border-right: 0;
    }

    .terminology-item,
    .terminology-item:first-child,
    .terminology-item:last-child {
      padding: 27px 0;
      border-right: 0;
      border-left: 0;
    }

    .terminology-grid {
      border-left: 0;
    }

    .team-row {
      grid-template-columns: minmax(0, 1fr) 44px;
      gap: 14px;
    }

    .lifecycle-track {
      grid-template-columns: 1fr;
      border-bottom: 0;
    }

    .lifecycle-step,
    .lifecycle-step:nth-child(n),
    .lifecycle-step:nth-last-child(-n + 2) {
      display: grid;
      grid-column: auto;
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 16px;
      padding: 25px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .lifecycle-step:last-child {
      border-bottom: 0;
    }

    .step-number {
      margin-bottom: 0;
      padding-top: 3px;
    }

    .automation-diagram {
      padding: 18px;
      border-radius: 24px;
    }

    .diagram-column,
    .diagram-hub {
      max-width: 100%;
      padding: 12px;
    }

    .diagram-node,
    .hub-core span,
    .hub-core strong {
      font-size: 16px;
    }

    .security-panel {
      padding-top: 44px;
      padding-bottom: 44px;
      border-radius: 24px;
    }

    .security-grid {
      border-left: 0;
    }

    .security-item {
      padding: 22px 0;
      border-right: 0;
      background: transparent;
    }

    .locale-row {
      grid-template-columns: 1fr;
      gap: 4px;
      padding: 16px 18px;
    }

    .locale-row strong {
      text-align: left;
    }

    .locale-footer {
      grid-template-columns: 1fr;
    }

    .faq-question {
      min-height: 72px;
      grid-template-columns: minmax(0, 1fr) 34px;
      gap: 16px;
      font-size: 17px;
    }

    .faq-answer {
      padding-right: 0;
    }

    .final-cta-panel {
      padding-top: 44px;
      padding-bottom: 44px;
      border-radius: 24px;
    }
  }

  @media (max-width: 390px) {
    .hero-art {
      margin-left: -16px;
      margin-right: -16px;
      width: calc(100% + 32px);
    }

    .hero-art-svg {
      min-width: 0;
    }

    .section-footnote {
      text-align: left;
    }

    .team-row {
      grid-template-columns: 1fr;
    }

    .row-arrow {
      justify-self: start;
    }

    .ai-links,
    .automation-links,
    .security-links {
      display: grid;
      grid-template-columns: 1fr;
    }

    .locale-board {
      border-radius: 22px;
    }
  }

  @media (max-width: 350px) {
    .shell {
      padding-left: 20px;
      padding-right: 20px;
    }

    .button {
      gap: 7px;
      padding-left: 16px;
      padding-right: 16px;
    }

    .button span {
      white-space: nowrap;
    }

    .hero-art {
      margin-left: -20px;
      margin-right: -20px;
      width: calc(100% + 40px);
    }
  }
`;
