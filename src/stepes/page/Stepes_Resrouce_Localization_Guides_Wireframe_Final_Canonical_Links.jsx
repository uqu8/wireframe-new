import React from "react";

const pageUrl = "https://www.stepes.com/resources/localization-guides/";

const beyondItems = [
  {
    icon: "content",
    title: "Content",
    description:
      "Identify what should be localized, prioritize high-value experiences, and prepare source content for consistent multilingual delivery.",
  },
  {
    icon: "experience",
    title: "Experience",
    description:
      "Adapt language, design, navigation, multimedia, and regional conventions so users can interact naturally in each market.",
  },
  {
    icon: "technology",
    title: "Technology",
    description:
      "Prepare websites, software, mobile apps, repositories, and content systems to support multiple languages efficiently.",
  },
  {
    icon: "operations",
    title: "Operations",
    description:
      "Establish repeatable workflows for translation, review, testing, release management, quality assurance, and ongoing updates.",
  },
];

const guideItems = [
  {
    icon: "website",
    title: "Website and E-Commerce Localization",
    description:
      "Learn how to localize corporate websites, customer portals, online stores, landing pages, product catalogs, and continually changing web content.",
    detail:
      "Explore content strategy, multilingual SEO, internationalization, website testing, regional adaptation, and ongoing publishing.",
    label: "Read the Website Translation Guide",
    href: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    icon: "software",
    title: "Software and SaaS Localization",
    description:
      "Prepare software products for global users without disrupting development or release schedules.",
    detail:
      "Learn how to manage strings, interface content, resource files, terminology, context, integrations, linguistic testing, and continuous updates.",
    label: "Read the Software and SaaS Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/",
  },
  {
    icon: "mobile",
    title: "Mobile App Localization",
    description:
      "Create mobile experiences that feel natural across languages, devices, operating systems, and markets.",
    detail:
      "Explore app internationalization, interface translation, text expansion, screenshots, app-store content, in-context review, and device testing.",
    label: "View the Mobile App Localization Checklist",
    href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/",
  },
  {
    icon: "ux",
    title: "Product and UX Localization",
    description:
      "Adapt complete user experiences rather than translating individual strings in isolation.",
    detail:
      "Learn how language, design, navigation, onboarding, notifications, help content, imagery, and regional conventions shape localized products.",
    label: "Read the Product and UX Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/product-ux-localization/",
  },
  {
    icon: "media",
    title: "Multimedia and eLearning Localization",
    description:
      "Localize video, audio, animation, training, interactive learning, and presentation content for global audiences.",
    detail:
      "Explore transcription, subtitles, voice-over, dubbing, on-screen text, timing, accessibility, course engineering, and multimedia QA.",
    label: "Read the Multimedia and eLearning Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/multimedia-elearning-localization/",
  },
  {
    icon: "automation",
    title: "Continuous Localization and Automation",
    description:
      "Connect localization directly to the systems where content is created, updated, reviewed, and published.",
    detail:
      "Learn how APIs, repositories, content systems, automation, translation memory, and terminology help localization keep pace with releases.",
    label: "Read the Continuous Software Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  },
];


const featuredGuideTopics = [
  "Define priority markets, languages, audiences, and website content",
  "Choose a localization approach that fits your web technology",
  "Build terminology, translation memory, and reusable language assets",
  "Localize for multilingual search visibility and regional relevance",
  "Review navigation, forms, layouts, links, and interactive elements",
  "Manage continuous publishing, analytics, and ongoing improvement",
];

const supportingGuides = [
  {
    title: "The Complete Guide to Software and SaaS Localization",
    description:
      "Understand the technical, linguistic, and operational foundations of global software delivery—from internationalization and string preparation to testing and continuous releases.",
    label: "Read the Software and SaaS Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/",
  },
  {
    title: "Mobile App Localization Checklist",
    description:
      "Review the content, interface, engineering, testing, and app-store requirements for launching mobile applications in new languages and markets.",
    label: "View the Mobile App Localization Checklist",
    href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/",
  },
  {
    title: "Continuous Software Localization",
    description:
      "Connect localization to development workflows, reduce manual handoffs, automate content exchange, and support frequent multilingual releases.",
    label: "Read the Continuous Software Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  },
];

const lifecycleSteps = [
  {
    title: "Plan",
    description:
      "Define markets, languages, audiences, content, platforms, business outcomes, launch priorities, and the frequency of future updates.",
  },
  {
    title: "Prepare",
    description:
      "Assess content and technology readiness through content inventory, internationalization, string extraction, file validation, and workflow design.",
  },
  {
    title: "Translate and Adapt",
    description:
      "Match AI translation, professional linguists, subject-matter review, transcreation, and validation to the purpose and risk of each experience.",
  },
  {
    title: "Integrate",
    description:
      "Return localized content to websites, applications, repositories, content systems, learning platforms, and publishing environments.",
  },
  {
    title: "Review and Test",
    description:
      "Evaluate linguistic quality, terminology, layouts, functionality, links, encoding, regional formats, and the complete in-context experience.",
  },
  {
    title: "Launch",
    description:
      "Coordinate final validation, stakeholder approval, deployment, versions, assets, metadata, language settings, and regional configurations.",
  },
  {
    title: "Improve",
    description:
      "Use analytics, user feedback, support data, and quality findings to strengthen future releases and maintain reusable language assets.",
  },
];

const foundationItems = [
  {
    icon: "internationalization",
    title: "Internationalization Readiness",
    description:
      "Prepare software and digital systems for Unicode, flexible layouts, text expansion, right-to-left languages, regional formats, pluralization, fonts, and locale-specific behavior.",
    label: "Compare Internationalization and Localization",
    href: "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/",
  },
  {
    icon: "preparation",
    title: "Source Content and String Preparation",
    description:
      "Resolve ambiguous text, inconsistent terminology, hard-coded content, concatenated strings, missing context, embedded text, and other issues before localization begins.",
    label: "Prepare Content for Localization",
    href: "https://www.stepes.com/resources/localization-guides/content-preparation-for-localization/",
  },
  {
    icon: "memory",
    title: "Translation Memory and Terminology",
    description:
      "Reuse approved translations and define product names, interface labels, brand language, technical terms, and industry concepts consistently across content and languages.",
    label: "Explore Language Asset Management",
    href: "https://www.stepes.com/resources/localization-guides/translation-memory-terminology-guide/",
  },
  {
    icon: "context",
    title: "Context for Translators and Reviewers",
    description:
      "Use screenshots, previews, design files, product access, comments, references, and character limits to support accurate decisions inside the real user experience.",
    label: "Learn About In-Context Localization",
    href: "https://www.stepes.com/resources/localization-guides/in-context-localization-guide/",
  },
  {
    icon: "testing",
    title: "Localization Testing and Quality Assurance",
    description:
      "Identify truncation, layout defects, untranslated content, corrupted characters, incorrect links, locale errors, input problems, and other issues before release.",
    label: "Explore the Localization Testing Guide",
    href: "https://www.stepes.com/resources/localization-guides/localization-testing-guide/",
  },
  {
    icon: "integration",
    title: "Integrations, APIs, and Automation",
    description:
      "Connect repositories, content systems, APIs, and workflow rules to identify changed content, preserve structure, route review, track approvals, and support continuous releases.",
    label: "Explore Localization Integrations",
    href: "https://www.stepes.com/resources/localization-guides/localization-integrations/",
  },
];

const challengeItems = [
  {
    category: "Market Entry",
    title: "Launching in a New Market",
    description:
      "Determine which experiences to localize first, how deeply they should be adapted, what regional requirements apply, and how quality will be evaluated before launch.",
    label: "Read the New-Market Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/new-market-localization-guide/",
  },
  {
    category: "Release Velocity",
    title: "Keeping Pace With Product Releases",
    description:
      "Build localization into development and content workflows so multilingual releases do not depend on last-minute file exchanges or extended language freezes.",
    label: "Explore Agile and Continuous Localization",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  },
  {
    category: "Automation",
    title: "Reducing Manual Handoffs",
    description:
      "Connect content systems, repositories, project workflows, and review processes to reduce repeated exporting, formatting, uploading, and status tracking.",
    label: "Explore Localization Automation",
    href: "https://www.stepes.com/resources/localization-guides/localization-automation-guide/",
  },
  {
    category: "Consistency",
    title: "Maintaining Consistent Terminology",
    description:
      "Create approved terminology and language assets that can be shared across software, websites, documentation, marketing, support, and other customer experiences.",
    label: "Explore Terminology Governance",
    href: "https://www.stepes.com/resources/localization-guides/terminology-governance/",
  },
  {
    category: "Context",
    title: "Giving Linguists Better Context",
    description:
      "Provide screenshots, previews, comments, product references, character limits, and in-context review so translators can make decisions based on the actual user experience.",
    label: "Improve Localization Context",
    href: "https://www.stepes.com/resources/localization-guides/in-context-localization-guide/",
  },
  {
    category: "Quality",
    title: "Finding Problems Before Launch",
    description:
      "Combine linguistic, visual, functional, and device testing to identify issues that cannot be found by reviewing translated text alone.",
    label: "Explore Localization QA and Testing",
    href: "https://www.stepes.com/resources/localization-guides/localization-testing-guide/",
  },
  {
    category: "Enterprise Scale",
    title: "Scaling Across Teams and Regions",
    description:
      "Establish shared standards while allowing product, engineering, marketing, support, and regional teams to follow workflows appropriate for their content.",
    label: "Explore Enterprise Localization",
    href: "https://www.stepes.com/resources/localization-guides/enterprise-localization-guide/",
  },
];

const practicalTools = [
  {
    icon: "website",
    title: "Website Localization Readiness Checklist",
    description:
      "Assess content, technology, SEO, design, forms, integrations, analytics, privacy, testing, and publishing requirements before launching a multilingual website.",
    label: "View the Website Localization Checklist",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    icon: "internationalization",
    title: "Internationalization Readiness Checklist",
    description:
      "Review whether your software, app, or website can support multiple languages, writing systems, regional formats, and locale-specific behavior.",
    label: "View the Internationalization Checklist",
    href: "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/",
  },
  {
    icon: "preparation",
    title: "Software String Preparation Checklist",
    description:
      "Prepare interface strings with the context, structure, metadata, and technical information required for accurate localization.",
    label: "View the String Preparation Checklist",
    href: "https://www.stepes.com/resources/localization-guides/software-string-preparation-checklist/",
  },
  {
    icon: "mobile",
    title: "Mobile App Localization Checklist",
    description:
      "Review interface content, app-store materials, screenshots, device testing, platform requirements, and multilingual release coordination.",
    label: "View the Mobile App Checklist",
    href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/",
  },
  {
    icon: "testing",
    title: "Localization QA and Testing Checklist",
    description:
      "Evaluate linguistic accuracy, functionality, visual presentation, formatting, navigation, input behavior, links, and locale-specific settings.",
    label: "View the Localization QA Checklist",
    href: "https://www.stepes.com/resources/localization-guides/localization-qa-checklist/",
  },
  {
    icon: "globe",
    title: "New-Language Launch Checklist",
    description:
      "Coordinate language selection, content scope, translation, testing, approvals, deployment, analytics, and post-launch support.",
    label: "View the Language Launch Checklist",
    href: "https://www.stepes.com/resources/localization-guides/new-language-launch-checklist/",
  },
  {
    icon: "content",
    title: "Localization File Format Reference",
    description:
      "Understand common file formats used for websites, software, mobile apps, documentation, design, multimedia, and structured content.",
    label: "Explore Supported File Formats",
    href: "https://www.stepes.com/resources/file-format-support/",
  },
];

const enterpriseTeams = [
  {
    title: "Localization Teams",
    description:
      "Design scalable multilingual workflows, manage language assets, coordinate vendors and reviewers, monitor quality, and support stakeholders across the organization.",
    label: "Explore Resources for Localization Teams",
    href: "https://www.stepes.com/solutions/localization-teams/",
  },
  {
    title: "Product and Engineering Teams",
    description:
      "Prepare software for international users, integrate localization with development, manage strings and repositories, and test localized experiences before release.",
    label: "Explore Product and Engineering Resources",
    href: "https://www.stepes.com/solutions/product-engineering-localization/",
  },
  {
    title: "Marketing Teams",
    description:
      "Adapt campaigns, websites, brand messaging, creative assets, multimedia, and regional content while protecting voice and market relevance.",
    label: "Explore Resources for Marketing Teams",
    href: "https://www.stepes.com/solutions/marketing-translation/",
  },
  {
    title: "Customer Support Teams",
    description:
      "Localize knowledge bases, help centers, chatbot content, service communications, and support resources so customers can get help in their preferred language.",
    label: "Explore Customer Support Resources",
    href: "https://www.stepes.com/solutions/customer-support-translation/",
  },
];


const localizationInsights = [
  {
    category: "Website Strategy",
    title: "How to Choose a Website Localization Approach",
    description:
      "Compare proxy-based localization, CMS integrations, APIs, connectors, file-based workflows, and other approaches for managing multilingual websites.",
    label: "Compare Website Localization Approaches",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    category: "In-Context Review",
    title: "Why Translators Need to See the Product",
    description:
      "Learn how screenshots, previews, design files, staging environments, and live interfaces help translators resolve ambiguity and improve user experience.",
    label: "See How Context Improves Localization",
    href: "https://www.stepes.com/resources/localization-guides/in-context-localization-guide/",
  },
  {
    category: "Quality Assurance",
    title: "Linguistic, Functional, and Visual Testing Explained",
    description:
      "Understand the purpose of each localization testing method, when it should take place, and how the different quality checks work together.",
    label: "Understand Localization Testing Methods",
    href: "https://www.stepes.com/resources/localization-guides/localization-testing-guide/",
  },
  {
    category: "Program Management",
    title: "Localization Metrics Enterprise Teams Should Track",
    description:
      "Explore practical measures for quality, turnaround time, reuse, release performance, reviewer activity, defect trends, engagement, and business impact.",
    label: "Explore Enterprise Localization Metrics",
    href: "https://www.stepes.com/resources/localization-guides/localization-metrics/",
  },
  {
    category: "Global UX",
    title: "How Text Expansion Affects Global User Interfaces",
    description:
      "Learn why translated text often requires more or less space than English and how flexible design can prevent truncation, crowding, and layout defects.",
    label: "Plan Interfaces for Text Expansion",
    href: "https://www.stepes.com/resources/localization-guides/text-expansion-localization/",
  },
  {
    category: "Continuous Delivery",
    title: "Continuous Localization Without Losing Quality Control",
    description:
      "See how automation, workflow rules, human review, terminology, and testing can support faster releases without removing necessary oversight.",
    label: "Build Quality Into Continuous Localization",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/#quality-across-releases",
  },
];

const websiteLocalizationApproaches = [
  "Localization proxy",
  "CMS or DXP integration",
  "API or repository workflow",
  "Structured file exchange",
];

const relatedResourceHubs = [
  {
    title: "Translation Quality and Governance",
    description:
      "Learn how organizations establish review models, terminology controls, quality metrics, approval processes, and consistent multilingual standards.",
    label: "Explore Translation Quality and Governance",
    href: "https://www.stepes.com/resources/translation-quality-governance/",
  },
  {
    title: "Translation Guides",
    description:
      "Explore practical guidance for translating documents, technical content, legal materials, marketing communications, media, and specialized business content.",
    label: "Explore Translation Guides",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
  {
    title: "AI Translation Insights",
    description:
      "Understand AI translation models, validation, security, governance, quality control, human review, and enterprise use cases.",
    label: "Explore AI Translation Insights",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    title: "Global Content Strategy",
    description:
      "Learn how to design operating models, business cases, governance structures, procurement strategies, and scalable global content programs.",
    label: "Explore Global Content Strategy",
    href: "https://www.stepes.com/resources/global-content-strategy/",
  },
  {
    title: "File Format Support",
    description:
      "Review common document, design, software, website, structured-content, multimedia, and publishing formats used in translation and localization.",
    label: "Explore File Format Support",
    href: "https://www.stepes.com/resources/file-format-support/",
  },
  {
    title: "API Documentation",
    description:
      "Learn how to connect multilingual workflows with websites, applications, content systems, repositories, and enterprise technology.",
    label: "View API Documentation",
    href: "https://www.stepes.com/developers/",
  },
];

const localizationFaqs = [
  {
    question: "What is localization?",
    paragraphs: [
      "Localization is the process of adapting content, products, software, websites, applications, and digital experiences for a specific language, market, or region.",
      "It includes translation but may also involve user-interface design, imagery, regional formats, functionality, cultural conventions, legal requirements, multimedia, search optimization, and testing. The objective is to make the localized experience feel natural and usable to its intended audience rather than appear to be a direct copy of the source version.",
    ],
  },
  {
    question: "How is localization different from translation?",
    paragraphs: [
      "Translation focuses primarily on transferring written or spoken meaning from one language to another.",
      "Localization considers the complete market experience. In addition to language, it may address layouts, navigation, currencies, dates, measurements, addresses, images, payment methods, software behavior, cultural expectations, and local regulations. Translation is therefore an essential part of localization, but localization usually requires additional technical, design, operational, and market-specific work.",
    ],
  },
  {
    question: "What types of content should be localized?",
    paragraphs: [
      "The right scope depends on the audience, product, market, and business objective. Many organizations begin with the experiences that have the greatest effect on discovery, conversion, product adoption, customer satisfaction, or regulatory readiness.",
    ],
    bullets: [
      "Websites, landing pages, e-commerce stores, and product catalogs",
      "Software interfaces, mobile applications, customer portals, and product onboarding",
      "Help centers, knowledge bases, documentation, and customer support content",
      "Marketing campaigns, emails, notifications, multimedia, video, and eLearning",
      "App-store listings and other market-specific product experiences",
    ],
  },
  {
    question: "What is internationalization?",
    paragraphs: [
      "Internationalization is the process of designing and developing a product or system so it can support multiple languages and regional requirements efficiently.",
      "It may include separating content from code, supporting Unicode, creating flexible layouts, handling text expansion, enabling right-to-left languages, and adapting date, number, currency, address, and pluralization behavior. Completing this work early can reduce later engineering effort and make it easier to add new languages.",
    ],
  },
  {
    question: "What is continuous localization?",
    paragraphs: [
      "Continuous localization connects localization directly to ongoing content, product, or software development. New and changed content is identified, translated, reviewed, tested, and returned through an integrated workflow rather than collected into occasional large batches.",
      "This approach can help agile teams support frequent multilingual releases, but it requires reliable integrations, clear workflow rules, reusable language assets, quality controls, and defined review responsibilities.",
    ],
  },
  {
    question: "How is software or app localization tested?",
    paragraphs: [
      "Software and app localization testing commonly combines linguistic, visual, and functional checks.",
      "Linguistic testing evaluates translation accuracy, terminology, grammar, fluency, tone, and contextual meaning. Visual testing checks text expansion, truncation, line breaks, alignment, fonts, overlapping elements, and interface presentation. Functional testing confirms that links, navigation, fields, inputs, buttons, locale settings, and user flows continue to work correctly.",
      "Testing may also include device, browser, operating-system, accessibility, and right-to-left language checks depending on the product.",
    ],
  },
  {
    question: "When should professional human reviewers be involved?",
    paragraphs: [
      "Human review should be matched to the purpose, audience, complexity, visibility, and risk of the content.",
      "Professional linguists are especially important when content involves brand voice, technical meaning, user safety, legal obligations, regulated information, cultural adaptation, ambiguous interface text, or public-facing customer experiences. AI translation and automation can improve speed and efficiency, but human reviewers provide contextual judgment, subject-matter understanding, and accountability where quality requirements demand it.",
    ],
  },
  {
    question: "What is localization quality assurance?",
    paragraphs: [
      "Localization quality assurance is the structured evaluation of localized content and experiences against defined linguistic, functional, visual, technical, and market requirements.",
      "Quality assurance may include automated checks, terminology validation, linguistic review, in-context review, functional testing, visual testing, stakeholder approval, and post-launch monitoring. A strong quality program defines expectations before work begins and uses findings to improve future projects, language assets, workflows, and source content.",
    ],
  },
  {
    question: "How can localization work with agile development?",
    paragraphs: [
      "Localization can support agile development when it is integrated into the systems and processes product teams already use.",
      "Teams can externalize strings, connect repositories or content systems, identify changed content automatically, provide context to linguists, perform in-context review, and complete multilingual testing before or alongside release. Smaller and more frequent localization cycles work best when terminology, translation memory, responsibilities, quality rules, and escalation paths are already established.",
    ],
  },
  {
    question: "How should organizations measure localization success?",
    paragraphs: [
      "Useful localization measures depend on the program's objectives. Operational metrics show how efficiently localization is being delivered, while business and user metrics show whether the localized experience is achieving its intended result.",
    ],
    bullets: [
      "Translation and review quality, defect frequency, and defect severity",
      "Turnaround time, on-time release performance, and reviewer effort",
      "Translation-memory reuse, terminology compliance, and cost by content type",
      "Website traffic, conversion, product adoption, and customer engagement by language",
      "Support volume, customer satisfaction, and other market-level business outcomes",
    ],
  },
];

const finalCtaCoverage = [
  {
    icon: "ux",
    title: "Digital Experiences",
    description: "Websites, software, mobile apps, and complete product journeys",
  },
  {
    icon: "automation",
    title: "Connected Operations",
    description: "Recurring global content and continuous multilingual releases",
  },
  {
    icon: "testing",
    title: "Quality Controls",
    description: "Professional review, in-context QA, and localization testing",
  },
  {
    icon: "memory",
    title: "Reusable Language Assets",
    description: "Translation memory and terminology that strengthen every release",
  },
];

const heroTouchpoints = [
  { icon: "website", label: "Web Experiences", text: "Websites and commerce" },
  { icon: "ux", label: "Product Experiences", text: "Interfaces and journeys" },
  { icon: "software", label: "Software Products", text: "SaaS and platforms" },
  { icon: "mobile", label: "Mobile Experiences", text: "Apps and devices" },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "content":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h8l3 3V20a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
          <path d="M14.5 3.5V7h3" />
          <path d="M8.5 11h6.5M8.5 14.5h6.5M8.5 18h4.5" />
        </svg>
      );
    case "experience":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
        </svg>
      );
    case "technology":
      return (
        <svg {...common}>
          <path d="m8 7-4 5 4 5M16 7l4 5-4 5M13.8 5l-3.6 14" />
        </svg>
      );
    case "operations":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M7 7.8l4 8.2M17 7.8 13 16" />
        </svg>
      );
    case "website":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 8.5h18M7 6.3h.01M10 6.3h.01" />
          <path d="M7 12h4v4H7zM14 12h3M14 15h3" />
        </svg>
      );
    case "software":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M8 4v16M8 8h13M11.5 12h5.5M11.5 15.5h3.5" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="2" />
          <path d="M10.5 5h3M11 18.5h2" />
        </svg>
      );
    case "ux":
      return (
        <svg {...common}>
          <rect x="3" y="3.5" width="18" height="17" rx="2" />
          <path d="M7 8h10M7 12h4M7 16h7" />
          <path d="m17 13.5 2 2-2 2" />
        </svg>
      );
    case "media":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m10 9 5 3-5 3V9Z" />
          <path d="M7 3v2M17 3v2M7 19v2M17 19v2" />
        </svg>
      );
    case "automation":
      return (
        <svg {...common}>
          <path d="M5.2 8.2A7.5 7.5 0 0 1 18 6l1.5 1.5" />
          <path d="M19.5 3.8v3.7h-3.7" />
          <path d="M18.8 15.8A7.5 7.5 0 0 1 6 18l-1.5-1.5" />
          <path d="M4.5 20.2v-3.7h3.7" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      );

    case "internationalization":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5a13.5 13.5 0 0 1 0 17M12 3.5a13.5 13.5 0 0 0 0 17" />
          <path d="m17.8 6.2 1.7-1.7M18.2 4.5h1.3v1.3" />
        </svg>
      );
    case "preparation":
      return (
        <svg {...common}>
          <path d="M7 3.5h7.5L18 7v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
          <path d="M14.5 3.5V7H18M9 11h6M9 14.5h4" />
          <path d="m9 18 1.2 1.2L13 16.4" />
        </svg>
      );
    case "memory":
      return (
        <svg {...common}>
          <path d="m12 3 8 4-8 4-8-4 8-4Z" />
          <path d="m4 11 8 4 8-4M4 15l8 4 8-4" />
        </svg>
      );
    case "context":
      return (
        <svg {...common}>
          <path d="M2.8 12s3.3-5 9.2-5 9.2 5 9.2 5-3.3 5-9.2 5-9.2-5-9.2-5Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );
    case "testing":
      return (
        <svg {...common}>
          <path d="M12 3.2 19 6v5.4c0 4.4-2.8 7.7-7 9.4-4.2-1.7-7-5-7-9.4V6l7-2.8Z" />
          <path d="m8.7 12 2.1 2.1 4.5-4.7" />
        </svg>
      );
    case "integration":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="6" height="6" rx="1.2" />
          <rect x="15" y="4" width="6" height="6" rx="1.2" />
          <rect x="9" y="15" width="6" height="6" rx="1.2" />
          <path d="M9 7h6M6 10v2.5L10.5 15M18 10v2.5L13.5 15" />
        </svg>
      );

    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </svg>
      );
    default:
      return null;
  }
}

function Arrow() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8h9.5M9 4.5 12.5 8 9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroTouchpoint({ item }) {
  return (
    <div className="lgw-touchpoint">
      <div className="lgw-touchpoint-icon">
        <Icon name={item.icon} size={21} />
      </div>
      <div>
        <strong>{item.label}</strong>
        <span>{item.text}</span>
      </div>
    </div>
  );
}

export default function LocalizationGuidesWireframe() {
  return (
    <main className="lgw-page">
      <style>{`
        .lgw-page,
        .lgw-page * {
          box-sizing: border-box;
        }

        .lgw-page {
          --lgw-ink: #111827;
          --lgw-body: #4b5563;
          --lgw-muted: #6b7280;
          --lgw-border: #e4e8ef;
          --lgw-soft: #f7f8fb;
          --lgw-magenta: #c11d63;
          --lgw-magenta-dark: #9f1d55;
          --lgw-blush: #fdf2f7;
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          background: #ffffff;
          color: var(--lgw-ink);
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          font-synthesis: none;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .lgw-page a {
          color: inherit;
          text-decoration: none;
        }

        .lgw-container {
          width: 100%;
          max-width: 1360px;
          margin: 0 auto;
          padding-inline: 40px;
        }

        .lgw-eyebrow {
          margin: 0 0 20px;
          color: var(--lgw-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .lgw-page h1,
        .lgw-page h2,
        .lgw-page h3,
        .lgw-page p {
          margin-top: 0;
        }

        .lgw-page h1,
        .lgw-page h2,
        .lgw-page h3 {
          color: var(--lgw-ink);
          font-weight: 600;
        }

        .lgw-section-title {
          font-weight: 600;
        }

        .lgw-page h1 {
          max-width: 940px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .lgw-page h2 {
          font-size: 36px;
          line-height: 1.14;
          letter-spacing: -0.025em;
        }

        .lgw-page h3 {
          font-size: 24px;
          line-height: 1.22;
          letter-spacing: -0.018em;
        }

        .lgw-hero {
          position: relative;
          padding: 104px 0 96px;
          background:
            radial-gradient(circle at 50% -10%, rgba(193, 29, 99, 0.065), transparent 36%),
            #ffffff;
        }

        .lgw-hero-copy {
          position: relative;
          z-index: 1;
          max-width: 1020px;
          margin: 0 auto;
          text-align: center;
        }

        .lgw-hero-copy .lgw-eyebrow {
          margin-bottom: 22px;
        }

        .lgw-hero-intro {
          max-width: 790px;
          margin: 26px auto 0;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .lgw-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
        }

        .lgw-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 14px 23px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 180ms ease, background-color 180ms ease,
            border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .lgw-button-primary {
          background: var(--lgw-magenta);
          color: #ffffff !important;
          box-shadow: 0 12px 24px rgba(159, 29, 85, 0.15);
        }

        .lgw-button-primary:hover {
          background: var(--lgw-magenta-dark);
          transform: translateY(-1px);
        }

        .lgw-button-secondary {
          border-color: #d9dee8;
          background: rgba(255, 255, 255, 0.9);
          color: #283244 !important;
        }

        .lgw-button-secondary:hover {
          border-color: #c4cad5;
          background: #ffffff;
          transform: translateY(-1px);
        }

        .lgw-button:focus-visible,
        .lgw-editorial-link:focus-visible,
        .lgw-foundation-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.28);
          outline-offset: 3px;
        }

        .lgw-hero-visual {
          max-width: 1180px;
          margin: 64px auto 0;
          padding: 25px 32px 28px;
          border: 1px solid var(--lgw-border);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 24px 54px rgba(15, 23, 42, 0.07);
        }

        .lgw-visual-label {
          margin: 0 0 20px;
          color: #7a8291;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-align: center;
          text-transform: uppercase;
        }

        .lgw-visual-grid {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 174px minmax(0, 1fr);
          align-items: center;
          gap: 30px;
        }

        .lgw-visual-column {
          display: grid;
          gap: 0;
          min-width: 0;
        }

        .lgw-touchpoint {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          align-items: center;
          gap: 13px;
          min-width: 0;
          padding: 18px 8px;
          border: 0;
          background: transparent;
        }

        .lgw-visual-column .lgw-touchpoint + .lgw-touchpoint {
          border-top: 1px solid #e7eaf0;
        }

        .lgw-touchpoint-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #f4f5f8;
          color: #374151;
        }

        .lgw-touchpoint strong,
        .lgw-touchpoint span {
          display: block;
        }

        .lgw-touchpoint strong {
          color: #20293a;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.25;
        }

        .lgw-touchpoint span {
          margin-top: 4px;
          color: var(--lgw-muted);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.35;
        }

        .lgw-hub {
          position: relative;
          z-index: 1;
          display: flex;
          width: 164px;
          aspect-ratio: 1;
          align-items: center;
          justify-content: center;
          justify-self: center;
          border: 1px solid #e3c5d3;
          border-radius: 50%;
          background: var(--lgw-blush);
          color: var(--lgw-magenta-dark);
          box-shadow: 0 14px 28px rgba(159, 29, 85, 0.08);
          text-align: center;
        }

        .lgw-hub::before,
        .lgw-hub::after {
          position: absolute;
          top: 50%;
          width: 31px;
          height: 1px;
          background: #d9dee8;
          content: "";
        }

        .lgw-hub::before {
          right: 100%;
        }

        .lgw-hub::after {
          left: 100%;
        }

        .lgw-hub-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 9px;
        }

        .lgw-hub-inner strong {
          color: #69153a;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
        }

        .lgw-hub-inner span {
          color: #8f4b6a;
          font-size: 12px;
          line-height: 1.3;
        }

        .lgw-beyond {
          padding: 96px 0;
          background: var(--lgw-soft);
          border-top: 1px solid #edf0f4;
          border-bottom: 1px solid #edf0f4;
        }

        .lgw-beyond-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.83fr) minmax(0, 1.17fr);
          gap: 84px;
          align-items: start;
        }

        .lgw-beyond-copy h2 {
          max-width: 510px;
          margin-bottom: 26px;
        }

        .lgw-beyond-copy > p:not(.lgw-eyebrow) {
          max-width: 570px;
          color: var(--lgw-body);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .lgw-beyond-copy > p:last-of-type {
          margin-bottom: 0;
        }

        .lgw-core-message {
          max-width: 560px;
          margin: 30px 0 0;
          padding: 22px 0 0;
          border-top: 1px solid #d8dee7;
          color: #273246;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.6;
        }

        .lgw-beyond-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          min-width: 0;
        }

        .lgw-beyond-item {
          min-width: 0;
          padding: 30px 0 31px;
          border-top: 1px solid #dfe4eb;
        }

        .lgw-beyond-item:nth-last-child(-n + 2) {
          border-bottom: 1px solid #dfe4eb;
        }

        .lgw-beyond-item:nth-child(even) {
          padding-left: 34px;
          border-left: 1px solid #dfe4eb;
        }

        .lgw-beyond-item:nth-child(odd) {
          padding-right: 34px;
        }

        .lgw-beyond-title {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 13px;
          color: #283244;
        }

        .lgw-beyond-title h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.25;
        }

        .lgw-beyond-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: #ffffff;
          color: #4b5563;
          box-shadow: inset 0 0 0 1px #e2e6ec;
        }

        .lgw-beyond-item p {
          margin: 0;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-guides {
          padding: 96px 0 104px;
          background: #ffffff;
        }

        .lgw-section-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 0.74fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 54px;
        }

        .lgw-section-heading h2 {
          max-width: 590px;
          margin-bottom: 0;
        }

        .lgw-section-intro {
          max-width: 640px;
          margin: 0 0 3px;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.68;
        }

        .lgw-guide-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-guide-item {
          display: flex;
          min-width: 0;
          min-height: 342px;
          flex-direction: column;
          padding: 38px 34px 40px;
        }

        .lgw-guide-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid var(--lgw-border);
        }

        .lgw-guide-item:nth-child(-n + 3) {
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-guide-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          border-radius: 14px;
          background: #f4f5f8;
          color: #394356;
        }

        .lgw-guide-item h3 {
          margin-bottom: 15px;
          font-size: 22px;
          line-height: 1.26;
        }

        .lgw-guide-item p {
          margin-bottom: 12px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.68;
        }

        .lgw-guide-item p.lgw-guide-detail {
          margin-bottom: 24px;
          color: #687284;
          font-size: 14px;
          line-height: 1.65;
        }

        .lgw-editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: auto;
          color: var(--lgw-magenta-dark) !important;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .lgw-editorial-link svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .lgw-editorial-link:hover {
          color: var(--lgw-magenta) !important;
        }

        .lgw-editorial-link:hover svg {
          transform: translateX(3px);
        }



        .lgw-featured {
          padding: 104px 0 100px;
          border-top: 1px solid #edf0f4;
          border-bottom: 1px solid #edf0f4;
          background: var(--lgw-soft);
        }

        .lgw-featured-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
          overflow: hidden;
          border: 1px solid var(--lgw-border);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 24px 54px rgba(15, 23, 42, 0.06);
        }

        .lgw-featured-copy {
          padding: 56px 58px 58px;
        }

        .lgw-featured-copy h2 {
          max-width: 700px;
          margin-bottom: 22px;
        }

        .lgw-featured-summary {
          max-width: 720px;
          margin-bottom: 0;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-featured-topics {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 34px 0 36px;
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-featured-topic {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          min-width: 0;
          padding: 17px 18px 17px 0;
          color: #354052;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.52;
        }

        .lgw-featured-topic:nth-child(even) {
          padding-right: 0;
          padding-left: 24px;
          border-left: 1px solid var(--lgw-border);
        }

        .lgw-featured-topic:nth-child(n + 3) {
          border-top: 1px solid var(--lgw-border);
        }

        .lgw-featured-check {
          display: inline-flex;
          width: 18px;
          height: 18px;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
          border: 1px solid #d4a9bc;
          border-radius: 50%;
          color: var(--lgw-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
        }

        .lgw-featured-visual {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px;
          background: var(--lgw-blush);
        }

        .lgw-guide-preview {
          width: min(100%, 420px);
          overflow: hidden;
          border: 1px solid #e8ceda;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 22px 44px rgba(122, 21, 66, 0.1);
        }

        .lgw-preview-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 17px 20px;
          border-bottom: 1px solid #ece2e7;
        }

        .lgw-preview-dots {
          display: flex;
          gap: 6px;
        }

        .lgw-preview-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d8c6cf;
        }

        .lgw-preview-header strong {
          color: #6f2448;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .lgw-preview-body {
          padding: 34px 32px 32px;
        }

        .lgw-preview-kicker {
          margin: 0 0 14px;
          color: var(--lgw-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .lgw-preview-body h3 {
          margin-bottom: 25px;
          font-size: 28px;
          line-height: 1.16;
        }

        .lgw-preview-path {
          display: grid;
          gap: 0;
          border-top: 1px solid #ece5e9;
          border-bottom: 1px solid #ece5e9;
        }

        .lgw-preview-path span {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 13px 0;
          color: #4f5969;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.35;
        }

        .lgw-preview-path span + span {
          border-top: 1px solid #ece5e9;
        }

        .lgw-preview-path b {
          color: #9a5877;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .lgw-preview-footer {
          margin: 24px 0 0;
          color: #7d6671;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
        }

        .lgw-more-guides {
          margin-top: 48px;
        }

        .lgw-more-guides > h3 {
          margin-bottom: 24px;
        }

        .lgw-supporting-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #dfe4eb;
          border-bottom: 1px solid #dfe4eb;
        }

        .lgw-supporting-guide {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 32px 32px 34px 0;
        }

        .lgw-supporting-guide + .lgw-supporting-guide {
          padding-left: 32px;
          border-left: 1px solid #dfe4eb;
        }

        .lgw-supporting-guide h3 {
          margin-bottom: 13px;
          font-size: 20px;
          line-height: 1.28;
        }

        .lgw-supporting-guide p {
          margin-bottom: 21px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.66;
        }

        .lgw-lifecycle {
          padding: 104px 0;
          background: #ffffff;
        }

        .lgw-lifecycle-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 0.72fr);
          gap: 72px;
          align-items: end;
        }

        .lgw-lifecycle-heading h2 {
          max-width: 620px;
          margin-bottom: 0;
        }

        .lgw-lifecycle-intro {
          max-width: 650px;
          margin: 0 0 3px;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-lifecycle-track {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-lifecycle-step {
          grid-column: span 3;
          min-width: 0;
          padding: 31px 24px 34px;
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-lifecycle-step:not(:first-child):not(:nth-child(5)) {
          border-left: 1px solid var(--lgw-border);
        }

        .lgw-lifecycle-step:nth-child(n + 5) {
          grid-column: span 4;
          border-bottom: 0;
        }

        .lgw-step-number {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border: 1px solid #dec2cf;
          border-radius: 50%;
          background: #fffafb;
          color: var(--lgw-magenta-dark);
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
        }

        .lgw-lifecycle-step h3 {
          margin-bottom: 12px;
          font-size: 18px;
          line-height: 1.28;
        }

        .lgw-lifecycle-step p {
          margin: 0;
          color: var(--lgw-body);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.62;
        }

        .lgw-lifecycle-note {
          max-width: 900px;
          margin: 30px 0 0;
          color: #657083;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .lgw-foundations {
          position: relative;
          overflow: hidden;
          padding: 104px 0;
          background: #151922;
          color: #ffffff;
        }

        .lgw-foundations::after {
          position: absolute;
          right: -170px;
          bottom: -210px;
          width: 520px;
          height: 520px;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .lgw-foundations-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(280px, 0.64fr) minmax(0, 1.36fr);
          gap: 76px;
          align-items: start;
        }

        .lgw-foundations-copy {
          max-width: 430px;
        }

        .lgw-foundations .lgw-eyebrow {
          color: #e8a9c5;
        }

        .lgw-foundations h2,
        .lgw-foundations h3 {
          color: #ffffff;
        }

        .lgw-foundations-copy h2 {
          margin-bottom: 24px;
        }

        .lgw-foundations-copy p:not(.lgw-eyebrow) {
          margin-bottom: 0;
          color: #c4cbd6;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .lgw-foundation-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-foundation-item {
          min-width: 0;
          padding: 31px 32px 33px 0;
        }

        .lgw-foundation-item:nth-child(even) {
          padding-right: 0;
          padding-left: 32px;
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-foundation-item:nth-child(n + 3) {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-foundation-title {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          margin-bottom: 14px;
        }

        .lgw-foundation-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.045);
          color: #ebb2cb;
        }

        .lgw-foundation-title h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.28;
        }

        .lgw-foundation-item > p {
          margin-bottom: 18px;
          color: #b5becb;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.66;
        }

        .lgw-foundation-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: #f0b6cf !important;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .lgw-foundation-link svg {
          transition: transform 180ms ease;
        }

        .lgw-foundation-link:hover {
          color: #ffffff !important;
        }

        .lgw-foundation-link:hover svg {
          transform: translateX(3px);
        }


        .lgw-challenges {
          padding: 104px 0;
          background: #ffffff;
        }

        .lgw-challenges-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 0.7fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 52px;
        }

        .lgw-challenges-heading h2 {
          max-width: 680px;
          margin-bottom: 0;
        }

        .lgw-challenges-intro {
          max-width: 650px;
          margin: 0 0 3px;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-challenge-list {
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-challenge-row {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr) minmax(250px, 310px);
          gap: 34px;
          align-items: center;
          min-width: 0;
          padding: 28px 0 29px;
        }

        .lgw-challenge-row + .lgw-challenge-row {
          border-top: 1px solid var(--lgw-border);
        }

        .lgw-challenge-category {
          margin: 0;
          color: #7a8291;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .lgw-challenge-content {
          min-width: 0;
        }

        .lgw-challenge-content h3 {
          margin-bottom: 10px;
          font-size: 20px;
          line-height: 1.28;
        }

        .lgw-challenge-content p {
          max-width: 760px;
          margin: 0;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.66;
        }

        .lgw-challenge-row .lgw-editorial-link {
          justify-self: end;
          margin-top: 0;
          text-align: right;
        }

        .lgw-tools {
          padding: 104px 0;
          border-top: 1px solid #f1e6eb;
          border-bottom: 1px solid #f1e6eb;
          background: #fdf8fb;
        }

        .lgw-tools-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 0.76fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 52px;
        }

        .lgw-tools-heading h2 {
          max-width: 650px;
          margin-bottom: 0;
        }

        .lgw-tools-intro {
          max-width: 660px;
          margin: 0 0 3px;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-tool-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #e5dce1;
          border-bottom: 1px solid #e5dce1;
        }

        .lgw-tool-item {
          display: flex;
          min-width: 0;
          min-height: 318px;
          flex-direction: column;
          padding: 34px 30px 36px;
        }

        .lgw-tool-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid #e5dce1;
        }

        .lgw-tool-item:nth-child(n + 4) {
          border-top: 1px solid #e5dce1;
        }

        .lgw-tool-item:last-child {
          display: grid;
          grid-column: 1 / -1;
          grid-template-columns: 50px minmax(0, 1fr) minmax(250px, auto);
          gap: 22px;
          align-items: center;
          min-height: 0;
          padding: 28px 30px;
          border-left: 0;
        }

        .lgw-tool-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border: 1px solid #e5dce1;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.78);
          color: #475164;
        }

        .lgw-tool-item:last-child .lgw-tool-icon {
          margin-bottom: 0;
        }

        .lgw-tool-copy {
          min-width: 0;
        }

        .lgw-tool-item h3 {
          margin-bottom: 13px;
          font-size: 20px;
          line-height: 1.28;
        }

        .lgw-tool-item p {
          margin-bottom: 22px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.66;
        }

        .lgw-tool-item:not(:last-child) .lgw-editorial-link {
          margin-top: auto;
        }

        .lgw-tool-item:last-child h3 {
          margin-bottom: 8px;
        }

        .lgw-tool-item:last-child p {
          max-width: 760px;
          margin-bottom: 0;
        }

        .lgw-tool-item:last-child .lgw-editorial-link {
          justify-self: end;
          margin-top: 0;
          text-align: right;
        }

        .lgw-teams {
          padding: 104px 0;
          background: #ffffff;
        }

        .lgw-teams-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.68fr) minmax(0, 1.32fr);
          gap: 82px;
          align-items: start;
        }

        .lgw-teams-copy {
          max-width: 470px;
        }

        .lgw-teams-copy h2 {
          margin-bottom: 24px;
        }

        .lgw-teams-copy p:not(.lgw-eyebrow) {
          margin-bottom: 0;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .lgw-team-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-team-item {
          display: flex;
          min-width: 0;
          min-height: 286px;
          flex-direction: column;
          padding: 31px 32px 33px 0;
        }

        .lgw-team-item:nth-child(even) {
          padding-right: 0;
          padding-left: 32px;
          border-left: 1px solid var(--lgw-border);
        }

        .lgw-team-item:nth-child(n + 3) {
          border-top: 1px solid var(--lgw-border);
        }

        .lgw-team-item h3 {
          margin-bottom: 13px;
          font-size: 21px;
          line-height: 1.28;
        }

        .lgw-team-item p {
          margin-bottom: 22px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.67;
        }

        .lgw-team-item .lgw-editorial-link {
          margin-top: auto;
        }




        .lgw-insights {
          padding: 104px 0;
          border-top: 1px solid #edf0f4;
          border-bottom: 1px solid #edf0f4;
          background: var(--lgw-soft);
        }

        .lgw-insights-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 0.74fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 52px;
        }

        .lgw-insights-heading h2 {
          max-width: 680px;
          margin-bottom: 0;
        }

        .lgw-insights-intro {
          max-width: 660px;
          margin: 0 0 3px;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-insights-layout {
          display: grid;
          grid-template-columns: minmax(330px, 0.78fr) minmax(0, 1.22fr);
          gap: 54px;
          align-items: stretch;
        }

        .lgw-insight-feature {
          display: flex;
          min-width: 0;
          flex-direction: column;
          justify-content: flex-start;
          padding: 42px;
          border: 1px solid #e7d7df;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.94)),
            radial-gradient(circle at 84% 12%, rgba(193, 29, 99, 0.15), transparent 36%),
            var(--lgw-blush);
        }

        .lgw-insight-feature-mark {
          display: inline-flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          border: 1px solid #e1becd;
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.72);
          color: var(--lgw-magenta-dark);
        }

        .lgw-insight-approaches {
          margin-bottom: auto;
          border-top: 1px solid #e5ccd7;
          border-bottom: 1px solid #e5ccd7;
        }

        .lgw-insight-approach-label {
          display: block;
          padding: 16px 0 13px;
          color: #85556c;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .lgw-insight-approach-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #ead7df;
        }

        .lgw-insight-approach-grid span {
          min-width: 0;
          padding: 14px 13px 14px 0;
          color: #5b5260;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.45;
        }

        .lgw-insight-approach-grid span:nth-child(even) {
          padding-right: 0;
          padding-left: 16px;
          border-left: 1px solid #ead7df;
        }

        .lgw-insight-approach-grid span:nth-child(n + 3) {
          border-top: 1px solid #ead7df;
        }

        .lgw-insight-category {
          margin: 32px 0 13px;
          color: var(--lgw-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .lgw-insight-feature h3 {
          max-width: 520px;
          margin-bottom: 17px;
          font-size: 28px;
          line-height: 1.2;
        }

        .lgw-insight-feature p:not(.lgw-insight-category) {
          max-width: 560px;
          margin-bottom: 25px;
          color: var(--lgw-body);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.68;
        }

        .lgw-insight-list {
          border-top: 1px solid #dfe4eb;
          border-bottom: 1px solid #dfe4eb;
        }

        .lgw-insight-row {
          display: grid;
          grid-template-columns: 132px minmax(0, 1fr);
          gap: 28px;
          align-items: start;
          padding: 25px 0 27px;
        }

        .lgw-insight-row + .lgw-insight-row {
          border-top: 1px solid #dfe4eb;
        }

        .lgw-insight-row .lgw-insight-category {
          margin: 3px 0 0;
          color: #747d8c;
        }

        .lgw-insight-row-copy {
          min-width: 0;
        }

        .lgw-insight-row h3 {
          margin-bottom: 9px;
          font-size: 20px;
          line-height: 1.28;
        }

        .lgw-insight-row p:not(.lgw-insight-category) {
          max-width: 760px;
          margin-bottom: 14px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.64;
        }


        .lgw-related {
          position: relative;
          overflow: hidden;
          padding: 104px 0;
          background: #151922;
          color: #ffffff;
        }

        .lgw-related::before {
          position: absolute;
          top: -230px;
          left: -190px;
          width: 480px;
          height: 480px;
          border: 1px solid rgba(193, 29, 99, 0.12);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .lgw-related-heading {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 0.76fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 48px;
        }

        .lgw-related .lgw-eyebrow {
          color: #e8a9c5;
        }

        .lgw-related h2,
        .lgw-related h3 {
          color: #ffffff;
        }

        .lgw-related-heading h2 {
          max-width: 650px;
          margin-bottom: 0;
        }

        .lgw-related-intro {
          max-width: 660px;
          margin: 0 0 3px;
          color: #c4cbd6;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-related-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-related-item {
          display: flex;
          min-width: 0;
          min-height: 286px;
          flex-direction: column;
          padding: 34px 31px 36px;
        }

        .lgw-related-item:not(:nth-child(3n + 1)) {
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-related-item:nth-child(n + 4) {
          border-top: 1px solid rgba(255, 255, 255, 0.14);
        }

        .lgw-related-item h3 {
          margin-bottom: 14px;
          font-size: 21px;
          line-height: 1.28;
        }

        .lgw-related-item p {
          margin-bottom: 22px;
          color: #b5becb;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.66;
        }

        .lgw-related-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          width: fit-content;
          margin-top: auto;
          color: #f0b6cf !important;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .lgw-related-link svg {
          transition: transform 180ms ease;
        }

        .lgw-related-link:hover {
          color: #ffffff !important;
        }

        .lgw-related-link:hover svg {
          transform: translateX(3px);
        }

        .lgw-related-link:focus-visible,
        .lgw-faq summary:focus-visible {
          outline: 3px solid rgba(232, 169, 197, 0.34);
          outline-offset: 3px;
        }

        .lgw-faq {
          padding: 104px 0;
          background: #ffffff;
        }

        .lgw-faq-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.62fr) minmax(0, 1.38fr);
          gap: 84px;
          align-items: start;
        }

        .lgw-faq-copy {
          max-width: 440px;
        }

        .lgw-faq-copy h2 {
          margin-bottom: 24px;
        }

        .lgw-faq-copy p:not(.lgw-eyebrow) {
          margin-bottom: 0;
          color: var(--lgw-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .lgw-faq-list {
          border-top: 1px solid var(--lgw-border);
          border-bottom: 1px solid var(--lgw-border);
        }

        .lgw-faq details + details {
          border-top: 1px solid var(--lgw-border);
        }

        .lgw-faq summary {
          position: relative;
          display: flex;
          min-height: 76px;
          align-items: center;
          padding: 22px 58px 22px 0;
          color: var(--lgw-ink);
          cursor: pointer;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.4;
          list-style: none;
        }

        .lgw-faq summary::-webkit-details-marker {
          display: none;
        }

        .lgw-faq summary::before,
        .lgw-faq summary::after {
          position: absolute;
          top: 50%;
          right: 3px;
          width: 18px;
          height: 1.5px;
          background: var(--lgw-magenta-dark);
          content: "";
          transform: translateY(-50%);
          transition: transform 180ms ease;
        }

        .lgw-faq summary::after {
          transform: translateY(-50%) rotate(90deg);
        }

        .lgw-faq details[open] summary::after {
          transform: translateY(-50%) rotate(0deg);
        }

        .lgw-faq-answer {
          max-width: 830px;
          padding: 0 50px 27px 0;
        }

        .lgw-faq-answer p {
          margin-bottom: 13px;
          color: var(--lgw-body);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.72;
        }

        .lgw-faq-answer p:last-child {
          margin-bottom: 0;
        }

        .lgw-faq-answer ul {
          margin: 17px 0 2px;
          padding: 0;
          list-style: none;
        }

        .lgw-faq-answer li {
          position: relative;
          padding: 8px 0 8px 23px;
          color: var(--lgw-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.58;
        }

        .lgw-faq-answer li::before {
          position: absolute;
          top: 17px;
          left: 1px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d8a0b9;
          content: "";
        }


        .lgw-final-cta {
          position: relative;
          overflow: hidden;
          padding: 96px 0 100px;
          border-top: 1px solid #efd9e3;
          background:
            radial-gradient(circle at 88% 18%, rgba(193, 29, 99, 0.08), transparent 30%),
            var(--lgw-blush);
        }

        .lgw-final-cta-layout {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(390px, 0.88fr);
          gap: 88px;
          align-items: center;
        }

        .lgw-final-cta-copy {
          max-width: 760px;
        }

        .lgw-final-cta-copy h2 {
          max-width: 700px;
          margin-bottom: 24px;
        }

        .lgw-final-cta-intro {
          max-width: 720px;
          margin-bottom: 17px;
          color: #3f495b;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-final-cta-support {
          max-width: 720px;
          margin-bottom: 0;
          color: #626b7a;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.7;
        }

        .lgw-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .lgw-final-cta-scope {
          min-width: 0;
          border-bottom: 1px solid #e4c8d5;
        }

        .lgw-final-cta-label {
          margin: 0;
          padding: 0 0 16px;
          color: #7a5265;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .lgw-final-cta-item {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 15px;
          align-items: center;
          min-width: 0;
          padding: 18px 0;
          border-top: 1px solid #e4c8d5;
        }

        .lgw-final-cta-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          flex: 0 0 42px;
          align-items: center;
          justify-content: center;
          margin: 0;
          border: 1px solid #ead5df;
          border-radius: 13px;
          background: rgba(255, 255, 255, 0.72);
          color: #6b334f;
          line-height: 0;
        }

        .lgw-final-cta-icon svg {
          display: block;
          flex: 0 0 auto;
        }

        .lgw-final-cta-text {
          min-width: 0;
        }

        .lgw-final-cta-text strong,
        .lgw-final-cta-text span {
          display: block;
        }

        .lgw-final-cta-text strong {
          color: #332331;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .lgw-final-cta-text span {
          margin-top: 4px;
          color: #6c5b65;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
        }


        @media (min-width: 1440px) {
          .lgw-container {
            max-width: 1392px;
            padding-inline: 56px;
          }
        }

        @media (max-width: 1180px) {
          .lgw-beyond-layout {
            gap: 60px;
          }

          .lgw-section-heading {
            gap: 48px;
          }

          .lgw-guide-item {
            padding-inline: 28px;
          }

          .lgw-featured-panel {
            grid-template-columns: minmax(0, 1fr) minmax(340px, 0.82fr);
          }

          .lgw-featured-copy {
            padding-inline: 46px;
          }

          .lgw-featured-visual {
            padding: 38px;
          }

          .lgw-lifecycle-step {
            padding-inline: 20px;
          }

          .lgw-foundations-layout {
            gap: 58px;
          }
        }

        @media (max-width: 1024px) {
          .lgw-container {
            padding-inline: 24px;
          }

          .lgw-page h1 {
            font-size: 42px;
          }

          .lgw-page h2 {
            font-size: 32px;
          }

          .lgw-page h3 {
            font-size: 22px;
          }

          .lgw-hero {
            padding: 92px 0 84px;
          }

          .lgw-visual-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .lgw-hub {
            order: -1;
            width: 150px;
          }

          .lgw-hub::before,
          .lgw-hub::after {
            display: none;
          }

          .lgw-visual-column {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid #e7eaf0;
            border-bottom: 1px solid #e7eaf0;
          }

          .lgw-visual-column .lgw-touchpoint + .lgw-touchpoint {
            border-top: 0;
            border-left: 1px solid #e7eaf0;
          }

          .lgw-beyond-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .lgw-beyond-copy h2,
          .lgw-beyond-copy > p:not(.lgw-eyebrow),
          .lgw-core-message {
            max-width: 760px;
          }

          .lgw-section-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .lgw-section-intro {
            max-width: 760px;
          }

          .lgw-guide-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lgw-guide-item {
            min-height: 340px;
            border-left: 0 !important;
            border-bottom: 1px solid var(--lgw-border) !important;
          }

          .lgw-guide-item:nth-child(even) {
            border-left: 1px solid var(--lgw-border) !important;
          }

          .lgw-guide-item:nth-last-child(-n + 2) {
            border-bottom: 0 !important;
          }

          .lgw-featured-panel {
            grid-template-columns: 1fr;
          }

          .lgw-featured-copy {
            padding: 48px 44px 50px;
          }

          .lgw-featured-visual {
            min-height: 520px;
            border-top: 1px solid #ead5df;
          }

          .lgw-supporting-grid {
            grid-template-columns: 1fr;
          }

          .lgw-supporting-guide,
          .lgw-supporting-guide + .lgw-supporting-guide {
            padding: 28px 0 30px;
            border-left: 0;
          }

          .lgw-supporting-guide + .lgw-supporting-guide {
            border-top: 1px solid #dfe4eb;
          }

          .lgw-lifecycle-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .lgw-lifecycle-intro {
            max-width: 760px;
          }

          .lgw-lifecycle-track {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lgw-lifecycle-step,
          .lgw-lifecycle-step:nth-child(n + 5) {
            grid-column: auto !important;
            border-left: 0 !important;
            border-bottom: 1px solid var(--lgw-border);
          }

          .lgw-lifecycle-step:nth-child(even) {
            border-left: 1px solid var(--lgw-border) !important;
          }

          .lgw-lifecycle-step:last-child {
            grid-column: 1 / -1 !important;
            border-left: 0 !important;
            border-bottom: 0;
          }

          .lgw-foundations-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .lgw-foundations-copy {
            max-width: 760px;
          }


          .lgw-challenges-heading,
          .lgw-tools-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .lgw-challenges-intro,
          .lgw-tools-intro {
            max-width: 760px;
          }

          .lgw-challenge-row {
            grid-template-columns: 120px minmax(0, 1fr);
            gap: 18px 28px;
            align-items: start;
          }

          .lgw-challenge-row .lgw-editorial-link {
            grid-column: 2;
            justify-self: start;
            text-align: left;
          }

          .lgw-tool-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lgw-tool-item,
          .lgw-tool-item:not(:nth-child(3n + 1)),
          .lgw-tool-item:nth-child(n + 4) {
            border-left: 0;
            border-top: 0;
          }

          .lgw-tool-item:nth-child(even) {
            border-left: 1px solid #e5dce1;
          }

          .lgw-tool-item:nth-child(n + 3) {
            border-top: 1px solid #e5dce1;
          }

          .lgw-tool-item:last-child {
            grid-column: 1 / -1;
            border-left: 0;
            border-top: 1px solid #e5dce1;
          }

          .lgw-teams-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .lgw-teams-copy {
            max-width: 760px;
          }


          .lgw-insights-heading,
          .lgw-related-heading {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .lgw-insights-intro,
          .lgw-related-intro {
            max-width: 760px;
          }

          .lgw-insights-layout {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .lgw-insight-feature {
            min-height: 0;
          }

          .lgw-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .lgw-related-item,
          .lgw-related-item:not(:nth-child(3n + 1)),
          .lgw-related-item:nth-child(n + 4) {
            border-left: 0;
            border-top: 0;
          }

          .lgw-related-item:nth-child(even) {
            border-left: 1px solid rgba(255, 255, 255, 0.14);
          }

          .lgw-related-item:nth-child(n + 3) {
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .lgw-faq-layout {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .lgw-faq-copy {
            max-width: 760px;
          }

          .lgw-final-cta-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .lgw-final-cta-copy,
          .lgw-final-cta-scope {
            max-width: 820px;
          }


        }

        @media (max-width: 640px) {
          .lgw-container {
            padding-inline: 20px;
          }

          .lgw-page h1 {
            font-size: 38px;
            line-height: 1.09;
            letter-spacing: -0.03em;
          }

          .lgw-page h2 {
            font-size: 30px;
            line-height: 1.17;
          }

          .lgw-page h3 {
            font-size: 20px;
          }

          .lgw-hero {
            padding: 68px 0 64px;
          }

          .lgw-hero-intro {
            margin-top: 22px;
            font-size: 17px;
            line-height: 1.65;
          }

          .lgw-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 30px;
          }

          .lgw-button {
            width: 100%;
          }

          .lgw-hero-visual {
            margin-top: 48px;
            padding: 22px 16px 18px;
            border-radius: 24px;
          }

          .lgw-visual-label {
            margin-bottom: 18px;
          }

          .lgw-visual-grid {
            gap: 0;
          }

          .lgw-visual-column {
            grid-template-columns: 1fr;
            gap: 0;
            border-top: 0;
            border-bottom: 0;
          }

          .lgw-visual-column:first-child {
            border-top: 1px solid #e7eaf0;
          }

          .lgw-visual-column:last-child {
            border-bottom: 1px solid #e7eaf0;
          }

          .lgw-visual-column .lgw-touchpoint + .lgw-touchpoint,
          .lgw-visual-column:last-child .lgw-touchpoint:first-child {
            border-top: 1px solid #e7eaf0;
            border-left: 0;
          }

          .lgw-touchpoint {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 12px;
            padding: 16px 0;
            border-radius: 0;
          }

          .lgw-touchpoint-icon {
            width: 38px;
            height: 38px;
          }

          .lgw-hub {
            width: 136px;
            margin-bottom: 24px;
          }

          .lgw-beyond,
          .lgw-guides {
            padding: 68px 0;
          }

          .lgw-beyond-layout {
            gap: 42px;
          }

          .lgw-beyond-copy h2 {
            margin-bottom: 22px;
          }

          .lgw-beyond-copy > p:not(.lgw-eyebrow) {
            font-size: 16px;
            line-height: 1.7;
          }

          .lgw-core-message {
            margin-top: 26px;
            padding-top: 20px;
            font-size: 17px;
          }

          .lgw-beyond-grid {
            grid-template-columns: 1fr;
          }

          .lgw-beyond-item,
          .lgw-beyond-item:nth-child(even),
          .lgw-beyond-item:nth-child(odd) {
            padding: 26px 0 27px;
            border-left: 0;
            border-bottom: 0;
          }

          .lgw-beyond-item:last-child {
            border-bottom: 1px solid #dfe4eb;
          }

          .lgw-beyond-title {
            align-items: center;
          }

          .lgw-section-heading {
            gap: 18px;
            margin-bottom: 38px;
          }

          .lgw-section-intro {
            font-size: 17px;
            line-height: 1.65;
          }

          .lgw-guide-grid {
            grid-template-columns: 1fr;
          }

          .lgw-guide-item,
          .lgw-guide-item:nth-child(even),
          .lgw-guide-item:nth-last-child(-n + 2) {
            min-height: 0;
            padding: 32px 0 34px;
            border-left: 0 !important;
            border-bottom: 1px solid var(--lgw-border) !important;
          }

          .lgw-guide-item:last-child {
            border-bottom: 0 !important;
          }

          .lgw-guide-icon {
            margin-bottom: 21px;
          }

          .lgw-guide-item h3 {
            margin-bottom: 13px;
          }

          .lgw-editorial-link {
            width: 100%;
            margin-top: 4px;
          }

          .lgw-featured,
          .lgw-lifecycle,
          .lgw-foundations {
            padding: 68px 0;
          }

          .lgw-featured-panel {
            border-radius: 24px;
          }

          .lgw-featured-copy {
            padding: 36px 24px 38px;
          }

          .lgw-featured-summary,
          .lgw-lifecycle-intro,
          .lgw-foundations-copy p:not(.lgw-eyebrow) {
            font-size: 17px;
            line-height: 1.66;
          }

          .lgw-featured-topics {
            grid-template-columns: 1fr;
            margin: 28px 0 30px;
          }

          .lgw-featured-topic,
          .lgw-featured-topic:nth-child(even) {
            padding: 15px 0;
            border-left: 0;
          }

          .lgw-featured-topic:nth-child(n + 2) {
            border-top: 1px solid var(--lgw-border);
          }

          .lgw-featured-visual {
            min-height: 0;
            padding: 28px 18px;
          }

          .lgw-guide-preview {
            border-radius: 20px;
          }

          .lgw-preview-body {
            padding: 28px 22px 25px;
          }

          .lgw-preview-body h3 {
            font-size: 24px;
          }

          .lgw-more-guides {
            margin-top: 40px;
          }

          .lgw-supporting-guide,
          .lgw-supporting-guide + .lgw-supporting-guide {
            padding: 25px 0 27px;
          }

          .lgw-lifecycle-heading {
            gap: 18px;
          }

          .lgw-lifecycle-track {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .lgw-lifecycle-step,
          .lgw-lifecycle-step:not(:nth-child(4n + 1)),
          .lgw-lifecycle-step:nth-child(5),
          .lgw-lifecycle-step:nth-child(even) {
            display: grid;
            grid-template-columns: 44px minmax(0, 1fr);
            column-gap: 16px;
            padding: 25px 0 27px;
            border-left: 0 !important;
            border-bottom: 1px solid var(--lgw-border);
          }

          .lgw-lifecycle-step:last-child {
            border-bottom: 0;
          }

          .lgw-step-number {
            grid-row: 1 / span 2;
            margin: 0;
          }

          .lgw-lifecycle-step h3 {
            margin: 1px 0 9px;
          }

          .lgw-lifecycle-step p {
            grid-column: 2;
          }

          .lgw-lifecycle-note {
            margin-top: 26px;
          }

          .lgw-foundations::after {
            right: -300px;
            bottom: -280px;
          }

          .lgw-foundations-layout {
            gap: 42px;
          }

          .lgw-foundation-grid {
            grid-template-columns: 1fr;
          }

          .lgw-foundation-item,
          .lgw-foundation-item:nth-child(even) {
            padding: 27px 0 29px;
            border-left: 0;
          }

          .lgw-foundation-item:nth-child(n + 2) {
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .lgw-foundation-link {
            width: 100%;
          }


          .lgw-challenges,
          .lgw-tools,
          .lgw-teams {
            padding: 68px 0;
          }

          .lgw-challenges-heading,
          .lgw-tools-heading {
            gap: 18px;
            margin-bottom: 38px;
          }

          .lgw-challenges-intro,
          .lgw-tools-intro,
          .lgw-teams-copy p:not(.lgw-eyebrow) {
            font-size: 17px;
            line-height: 1.66;
          }

          .lgw-challenge-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 25px 0 27px;
          }

          .lgw-challenge-content h3 {
            margin-bottom: 9px;
          }

          .lgw-challenge-row .lgw-editorial-link {
            grid-column: 1;
            width: 100%;
            margin-top: 3px;
          }

          .lgw-tool-grid {
            grid-template-columns: 1fr;
          }

          .lgw-tool-item,
          .lgw-tool-item:nth-child(even),
          .lgw-tool-item:nth-child(n + 3),
          .lgw-tool-item:last-child {
            display: flex;
            min-height: 0;
            align-items: flex-start;
            gap: 0;
            padding: 29px 0 31px;
            border-left: 0;
            border-top: 1px solid #e5dce1;
            text-align: left;
          }

          .lgw-tool-item:first-child {
            border-top: 0;
          }

          .lgw-tool-item:last-child .lgw-tool-icon {
            margin-bottom: 22px;
          }

          .lgw-tool-item:last-child p {
            margin-bottom: 22px;
          }

          .lgw-tool-item:last-child .lgw-editorial-link,
          .lgw-tool-item .lgw-editorial-link {
            width: 100%;
            justify-self: start;
            margin-top: auto;
            text-align: left;
          }

          .lgw-teams-layout {
            gap: 40px;
          }

          .lgw-team-grid {
            grid-template-columns: 1fr;
          }

          .lgw-team-item,
          .lgw-team-item:nth-child(even) {
            min-height: 0;
            padding: 27px 0 29px;
            border-left: 0;
          }

          .lgw-team-item:nth-child(n + 2) {
            border-top: 1px solid var(--lgw-border);
          }

          .lgw-team-item .lgw-editorial-link {
            width: 100%;
          }


          .lgw-insights,
          .lgw-related,
          .lgw-faq {
            padding: 68px 0;
          }

          .lgw-insights-heading,
          .lgw-related-heading {
            gap: 18px;
            margin-bottom: 38px;
          }

          .lgw-insights-intro,
          .lgw-related-intro,
          .lgw-faq-copy p:not(.lgw-eyebrow) {
            font-size: 17px;
            line-height: 1.66;
          }

          .lgw-insights-layout {
            gap: 34px;
          }

          .lgw-insight-feature {
            min-height: 0;
            padding: 30px 24px 32px;
            border-radius: 24px;
          }

          .lgw-insight-feature-mark {
            margin-bottom: 26px;
          }

          .lgw-insight-approach-grid {
            grid-template-columns: 1fr;
          }

          .lgw-insight-approach-grid span,
          .lgw-insight-approach-grid span:nth-child(even) {
            padding: 12px 0;
            border-left: 0;
          }

          .lgw-insight-approach-grid span:nth-child(n + 2) {
            border-top: 1px solid #ead7df;
          }

          .lgw-insight-feature h3 {
            font-size: 24px;
          }

          .lgw-insight-row {
            grid-template-columns: 1fr;
            gap: 9px;
            padding: 24px 0 26px;
          }

          .lgw-insight-row .lgw-insight-category {
            margin: 0;
          }


          .lgw-related-grid {
            grid-template-columns: 1fr;
          }

          .lgw-related-item,
          .lgw-related-item:nth-child(even),
          .lgw-related-item:nth-child(n + 3) {
            min-height: 0;
            padding: 28px 0 30px;
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.14);
          }

          .lgw-related-item:first-child {
            border-top: 0;
          }

          .lgw-related-link {
            width: 100%;
          }

          .lgw-faq-layout {
            gap: 38px;
          }

          .lgw-faq summary {
            min-height: 72px;
            padding: 20px 44px 20px 0;
            font-size: 18px;
          }

          .lgw-faq summary::before,
          .lgw-faq summary::after {
            right: 1px;
            width: 16px;
          }

          .lgw-faq-answer {
            padding: 0 12px 25px 0;
          }

          .lgw-faq-answer p {
            font-size: 15px;
            line-height: 1.7;
          }

          .lgw-final-cta {
            padding: 68px 0 72px;
          }

          .lgw-final-cta-layout {
            gap: 40px;
          }

          .lgw-final-cta-copy h2 {
            margin-bottom: 21px;
          }

          .lgw-final-cta-intro {
            font-size: 17px;
            line-height: 1.66;
          }

          .lgw-final-cta-support {
            font-size: 15px;
            line-height: 1.66;
          }

          .lgw-final-cta-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 28px;
          }

          .lgw-final-cta-label {
            padding-bottom: 14px;
          }

          .lgw-final-cta-item {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 13px;
            padding: 17px 0;
          }

          .lgw-final-cta-icon {
            width: 38px;
            height: 38px;
            flex-basis: 38px;
          }

          .lgw-final-cta-text strong {
            font-size: 15px;
          }

          .lgw-final-cta-text span {
            font-size: 13px;
          }


        }

        @media (max-width: 340px) {
          .lgw-page h1 {
            font-size: 36px;
          }

          .lgw-button {
            gap: 7px;
            padding-inline: 16px;
          }

          .lgw-hero-visual {
            padding-inline: 13px;
          }

          .lgw-touchpoint strong {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lgw-button,
          .lgw-editorial-link svg,
          .lgw-foundation-link svg,
          .lgw-related-link svg,
          .lgw-faq summary::before,
          .lgw-faq summary::after {
            transition: none;
          }
        }
      `}</style>

      <section className="lgw-hero" aria-labelledby="localization-guides-title">
        <div className="lgw-container">
          <div className="lgw-hero-copy">
            <p className="lgw-eyebrow">Localization Guides</p>
            <h1 id="localization-guides-title">
              Localization Guides for Global Digital Experiences
            </h1>
            <p className="lgw-hero-intro">
              Plan, build, test, launch, and scale localized websites, software,
              apps, multimedia, and continuously updated global content. Explore
              practical guidance for creating digital experiences that work
              naturally across languages, markets, platforms, and release cycles.
            </p>
            <div className="lgw-hero-actions">
              <a
                className="lgw-button lgw-button-primary"
                href={`${pageUrl}#explore-guides`}
              >
                Explore the Guides
                <Arrow />
              </a>
              <a
                className="lgw-button lgw-button-secondary"
                href="https://www.stepes.com/localization-services/"
              >
                Explore Localization Services
                <Arrow />
              </a>
            </div>
          </div>

          <div className="lgw-hero-visual" aria-hidden="true">
            <p className="lgw-visual-label">Connected Localization Experience</p>
            <div className="lgw-visual-grid">
              <div className="lgw-visual-column">
                {heroTouchpoints.slice(0, 2).map((item) => (
                  <HeroTouchpoint key={item.label} item={item} />
                ))}
              </div>

              <div className="lgw-hub">
                <div className="lgw-hub-inner">
                  <Icon name="globe" size={30} />
                  <strong>Localization</strong>
                  <span>One connected lifecycle</span>
                </div>
              </div>

              <div className="lgw-visual-column">
                {heroTouchpoints.slice(2).map((item) => (
                  <HeroTouchpoint key={item.label} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lgw-beyond" aria-labelledby="beyond-translation-title">
        <div className="lgw-container">
          <div className="lgw-beyond-layout">
            <div className="lgw-beyond-copy">
              <p className="lgw-eyebrow">Beyond Translation</p>
              <h2 className="lgw-section-title" id="beyond-translation-title">
                Build Experiences That Work in Every Market
              </h2>
              <p>
                Translation changes content from one language into another.
                Localization makes the complete experience work for the people,
                technology, and expectations of each market.
              </p>
              <p>
                That may include adapting interface text, navigation, imagery,
                layouts, date and number formats, payment options, legal
                requirements, multimedia, and user journeys. It also requires the
                right technical foundations so localized content can move
                efficiently through websites, applications, content systems, and
                product releases.
              </p>
              <p className="lgw-core-message">
                The Stepes Localization Guides bring these disciplines together
                so your teams can make informed decisions at every stage.
              </p>
            </div>

            <div className="lgw-beyond-grid">
              {beyondItems.map((item) => (
                <article className="lgw-beyond-item" key={item.title}>
                  <div className="lgw-beyond-title">
                    <span className="lgw-beyond-icon">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="lgw-guides"
        id="explore-guides"
        aria-labelledby="explore-guides-title"
      >
        <div className="lgw-container">
          <div className="lgw-section-heading">
            <div>
              <p className="lgw-eyebrow">Explore by Experience</p>
              <h2 className="lgw-section-title" id="explore-guides-title">
                Find Guidance for Every Localization Program
              </h2>
            </div>
            <p className="lgw-section-intro">
              Localization requirements vary by product, channel, technology, and
              audience. Explore guidance organized around the digital experiences
              your business needs to take global.
            </p>
          </div>

          <div className="lgw-guide-grid">
            {guideItems.map((item) => (
              <article className="lgw-guide-item" key={item.title}>
                <span className="lgw-guide-icon">
                  <Icon name={item.icon} size={24} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className="lgw-guide-detail">{item.detail}</p>
                <a className="lgw-editorial-link" href={item.href}>
                  <span>{item.label}</span>
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lgw-featured" aria-labelledby="featured-guide-title">
        <div className="lgw-container">
          <div className="lgw-featured-panel">
            <div className="lgw-featured-copy">
              <p className="lgw-eyebrow">Featured Guide</p>
              <h2 className="lgw-section-title" id="featured-guide-title">
                How to Translate a Website
              </h2>
              <p className="lgw-featured-summary">
                A successful multilingual website brings together global content
                strategy, multilingual SEO, internationalization, technology
                integration, regional user experience, translation quality,
                testing, and continuous publishing.
              </p>

              <div className="lgw-featured-topics" aria-label="What the guide covers">
                {featuredGuideTopics.map((topic) => (
                  <div className="lgw-featured-topic" key={topic}>
                    <span className="lgw-featured-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>

              <a
                className="lgw-button lgw-button-primary"
                href="https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/"
              >
                Read the Website Translation Guide
                <Arrow />
              </a>
            </div>

            <div className="lgw-featured-visual" aria-hidden="true">
              <div className="lgw-guide-preview">
                <div className="lgw-preview-header">
                  <div className="lgw-preview-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Stepes Localization Guides</strong>
                </div>
                <div className="lgw-preview-body">
                  <p className="lgw-preview-kicker">Enterprise Guide</p>
                  <h3>How to Translate a Website</h3>
                  <div className="lgw-preview-path">
                    <span>
                      Strategy and Scope <b aria-hidden="true">→</b>
                    </span>
                    <span>
                      Technology Readiness <b aria-hidden="true">→</b>
                    </span>
                    <span>
                      Content and SEO <b aria-hidden="true">→</b>
                    </span>
                    <span>
                      Review and Testing <b aria-hidden="true">→</b>
                    </span>
                    <span>
                      Launch and Growth <b aria-hidden="true">→</b>
                    </span>
                  </div>
                  <p className="lgw-preview-footer">
                    A practical roadmap for planning, translating, testing, launching, and maintaining multilingual web experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lgw-more-guides">
            <h3>More Featured Guides</h3>
            <div className="lgw-supporting-grid">
              {supportingGuides.map((guide) => (
                <article className="lgw-supporting-guide" key={guide.title}>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <a className="lgw-editorial-link" href={guide.href}>
                    <span>{guide.label}</span>
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lgw-lifecycle" aria-labelledby="localization-lifecycle-title">
        <div className="lgw-container">
          <div className="lgw-lifecycle-heading">
            <div>
              <p className="lgw-eyebrow">The Localization Lifecycle</p>
              <h2 className="lgw-section-title" id="localization-lifecycle-title">
                From Market Planning to Continuous Improvement
              </h2>
            </div>
            <p className="lgw-lifecycle-intro">
              Localization is not a single translation step. It is a connected
              lifecycle that begins before content is submitted and continues
              after a localized experience is released.
            </p>
          </div>

          <div className="lgw-lifecycle-track">
            {lifecycleSteps.map((step, index) => (
              <article className="lgw-lifecycle-step" key={step.title}>
                <span className="lgw-step-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>

          <p className="lgw-lifecycle-note">
            Translation memory, terminology, approved content, style guidance,
            and review feedback should remain reusable assets throughout the
            lifecycle rather than being recreated for every release.
          </p>
        </div>
      </section>

      <section className="lgw-foundations" aria-labelledby="localization-foundations-title">
        <div className="lgw-container">
          <div className="lgw-foundations-layout">
            <div className="lgw-foundations-copy">
              <p className="lgw-eyebrow">Foundations for Scale</p>
              <h2 className="lgw-section-title" id="localization-foundations-title">
                Build the Right Foundation Before Volume Grows
              </h2>
              <p>
                The decisions made early in a localization program determine how
                easily it can support additional content, languages, teams,
                products, markets, and release cycles later.
              </p>
            </div>

            <div className="lgw-foundation-grid">
              {foundationItems.map((item) => (
                <article className="lgw-foundation-item" key={item.title}>
                  <div className="lgw-foundation-title">
                    <span className="lgw-foundation-icon">
                      <Icon name={item.icon} size={22} />
                    </span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                  <a className="lgw-foundation-link" href={item.href}>
                    <span>{item.label}</span>
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lgw-challenges" aria-labelledby="localization-challenges-title">
        <div className="lgw-container">
          <div className="lgw-challenges-heading">
            <div>
              <p className="lgw-eyebrow">Common Localization Challenges</p>
              <h2 className="lgw-section-title" id="localization-challenges-title">
                Practical Guidance for Real Localization Problems
              </h2>
            </div>
            <p className="lgw-challenges-intro">
              Localization programs often become difficult not because of
              translation itself, but because content, systems, teams, and
              release processes are not connected.
            </p>
          </div>

          <div className="lgw-challenge-list">
            {challengeItems.map((item) => (
              <article className="lgw-challenge-row" key={item.title}>
                <p className="lgw-challenge-category">{item.category}</p>
                <div className="lgw-challenge-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <a className="lgw-editorial-link" href={item.href}>
                  <span>{item.label}</span>
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lgw-tools" aria-labelledby="localization-tools-title">
        <div className="lgw-container">
          <div className="lgw-tools-heading">
            <div>
              <p className="lgw-eyebrow">Checklists and Practical Tools</p>
              <h2 className="lgw-section-title" id="localization-tools-title">
                Put Localization Best Practices Into Action
              </h2>
            </div>
            <p className="lgw-tools-intro">
              Use these checklists and references to prepare projects, evaluate
              readiness, reduce avoidable errors, and coordinate work across
              teams.
            </p>
          </div>

          <div className="lgw-tool-grid">
            {practicalTools.map((item) => (
              <article className="lgw-tool-item" key={item.title}>
                <span className="lgw-tool-icon">
                  <Icon name={item.icon} size={23} />
                </span>
                <div className="lgw-tool-copy">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <a className="lgw-editorial-link" href={item.href}>
                  <span>{item.label}</span>
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lgw-teams" aria-labelledby="localization-teams-title">
        <div className="lgw-container">
          <div className="lgw-teams-layout">
            <div className="lgw-teams-copy">
              <p className="lgw-eyebrow">Guidance for Enterprise Teams</p>
              <h2 className="lgw-section-title" id="localization-teams-title">
                Help Every Team Contribute to Global Delivery
              </h2>
              <p>
                Successful localization programs give each team clear
                responsibilities while connecting everyone through shared
                language assets, quality standards, technology, and governance.
              </p>
            </div>

            <div className="lgw-team-grid">
              {enterpriseTeams.map((team) => (
                <article className="lgw-team-item" key={team.title}>
                  <h3>{team.title}</h3>
                  <p>{team.description}</p>
                  <a className="lgw-editorial-link" href={team.href}>
                    <span>{team.label}</span>
                    <Arrow />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section className="lgw-insights" aria-labelledby="localization-insights-title">
        <div className="lgw-container">
          <div className="lgw-insights-heading">
            <div>
              <p className="lgw-eyebrow">Localization Insights</p>
              <h2 className="lgw-section-title" id="localization-insights-title">
                Go Deeper Into Localization Strategy and Execution
              </h2>
            </div>
            <p className="lgw-insights-intro">
              Explore focused guidance on the technical, linguistic, operational,
              and user-experience decisions behind effective localization.
            </p>
          </div>

          <div className="lgw-insights-layout">
            <article className="lgw-insight-feature">
              <span className="lgw-insight-feature-mark">
                <Icon name="website" size={26} />
              </span>
              <div className="lgw-insight-approaches">
                <span className="lgw-insight-approach-label">
                  Common Delivery Approaches
                </span>
                <div className="lgw-insight-approach-grid">
                  {websiteLocalizationApproaches.map((approach) => (
                    <span key={approach}>{approach}</span>
                  ))}
                </div>
              </div>
              <p className="lgw-insight-category">
                {localizationInsights[0].category}
              </p>
              <h3>{localizationInsights[0].title}</h3>
              <p>{localizationInsights[0].description}</p>
              <a
                className="lgw-editorial-link"
                href={localizationInsights[0].href}
              >
                <span>{localizationInsights[0].label}</span>
                <Arrow />
              </a>
            </article>

            <div className="lgw-insight-list">
              {localizationInsights.slice(1).map((insight) => (
                <article className="lgw-insight-row" key={insight.title}>
                  <p className="lgw-insight-category">{insight.category}</p>
                  <div className="lgw-insight-row-copy">
                    <h3>{insight.title}</h3>
                    <p>{insight.description}</p>
                    <a className="lgw-editorial-link" href={insight.href}>
                      <span>{insight.label}</span>
                      <Arrow />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>

      <section className="lgw-related" aria-labelledby="related-resources-title">
        <div className="lgw-container">
          <div className="lgw-related-heading">
            <div>
              <p className="lgw-eyebrow">Related Resource Hubs</p>
              <h2 className="lgw-section-title" id="related-resources-title">
                Continue Exploring Global Content
              </h2>
            </div>
            <p className="lgw-related-intro">
              Localization connects technology, translation, quality, AI, and
              enterprise content operations. Explore related Stepes resources for
              additional guidance.
            </p>
          </div>

          <div className="lgw-related-grid">
            {relatedResourceHubs.map((resource) => (
              <article className="lgw-related-item" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a className="lgw-related-link" href={resource.href}>
                  <span>{resource.label}</span>
                  <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lgw-faq" aria-labelledby="localization-faq-title">
        <div className="lgw-container">
          <div className="lgw-faq-layout">
            <div className="lgw-faq-copy">
              <h2 className="lgw-section-title" id="localization-faq-title">
                Localization Frequently Asked Questions
              </h2>
              <p>
                Find clear answers to common questions about localization,
                internationalization, testing, continuous delivery, human review,
                and program performance.
              </p>
            </div>

            <div className="lgw-faq-list">
              {localizationFaqs.map((faq, index) => (
                <details key={faq.question} open={index === 0}>
                  <summary>{faq.question}</summary>
                  <div className="lgw-faq-answer">
                    {faq.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {faq.bullets ? (
                      <ul>
                        {faq.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="lgw-final-cta" aria-labelledby="localization-cta-title">
        <div className="lgw-container">
          <div className="lgw-final-cta-layout">
            <div className="lgw-final-cta-copy">
              <p className="lgw-eyebrow">Localization Support</p>
              <h2 className="lgw-section-title" id="localization-cta-title">
                Build a Localization Program That Moves With Your Business
              </h2>
              <p className="lgw-final-cta-intro">
                Connect websites, software, apps, multimedia, and recurring global
                content through a localization workflow designed for quality,
                speed, and continuous growth.
              </p>
              <p className="lgw-final-cta-support">
                Stepes combines localization technology, professional linguists,
                workflow automation, translation memory, terminology management,
                testing, and enterprise support to help your organization deliver
                consistent multilingual experiences across markets.
              </p>
              <div className="lgw-final-cta-actions">
                <a
                  className="lgw-button lgw-button-primary"
                  href="https://www.stepes.com/contact-us/"
                >
                  <span>Talk to a Localization Expert</span>
                  <Arrow />
                </a>
                <a
                  className="lgw-button lgw-button-secondary"
                  href="https://www.stepes.com/localization-services/"
                >
                  <span>Explore Localization Services</span>
                  <Arrow />
                </a>
              </div>
            </div>

            <div className="lgw-final-cta-scope" aria-label="Connected localization capabilities">
              <p className="lgw-final-cta-label">One Connected Localization Workflow</p>
              {finalCtaCoverage.map((item) => (
                <div className="lgw-final-cta-item" key={item.title}>
                  <span className="lgw-final-cta-icon">
                    <Icon name={item.icon} size={21} />
                  </span>
                  <div className="lgw-final-cta-text">
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
