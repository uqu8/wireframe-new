import React from "react";

const ArrowIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M5 12h13M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const GuideIcon = ({ type }) => {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: false,
  };

  if (type === "localization") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.25 3.35 5.08 3.35 8.5S14.2 18.25 12 20.5M12 3.5C9.8 5.75 8.65 8.58 8.65 12S9.8 18.25 12 20.5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg {...common}>
        <path
          d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 3v4M3 5h4M19 17v4M17 19h4"
          stroke="currentColor"
          strokeWidth="1.45"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "quality") {
    return (
      <svg {...common}>
        <path d="M12 3.5 18.4 6v5.2c0 4.25-2.45 7.6-6.4 9.3-3.95-1.7-6.4-5.05-6.4-9.3V6L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="m8.9 12.1 2.05 2.05 4.2-4.35" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "strategy") {
    return (
      <svg {...common}>
        <path d="M5 17.5V12M10 17.5V8.5M15 17.5V5.5M20 17.5V3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M4 20h17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "regulated") {
    return (
      <svg {...common}>
        <path d="M7 3.8h7.7L19 8.1v12.1H7V3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M14.5 3.9V8h4.1M10 12h6M10 15h6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "operations") {
    return (
      <svg {...common}>
        <circle cx="7" cy="7" r="2.3" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="17" cy="7" r="2.3" stroke="currentColor" strokeWidth="1.55" />
        <circle cx="12" cy="17" r="2.3" stroke="currentColor" strokeWidth="1.55" />
        <path d="m8.9 8.3 2 6.2M15.1 8.3l-2 6.2M9.3 7h5.4" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "translation") {
    return (
      <svg {...common}>
        <path d="M5 4.5h8v10H9l-4 3v-13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M11 9.5h8v10h-8v-10Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7.5 8h3M13.5 13h3M13.5 16h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M5.5 4.5h11.2A2.3 2.3 0 0 1 19 6.8v12.7H7.8a2.3 2.3 0 0 1-2.3-2.3V4.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8.5 8h7M8.5 11h7M8.5 14h4.6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
};

const coverageTopics = [
  { label: "Professional translation planning and delivery", type: "translation" },
  { label: "Website, software, and mobile app localization", type: "localization" },
  { label: "AI translation and human validation", type: "ai" },
  { label: "Translation quality assurance", type: "quality" },
  { label: "Terminology and translation memory management", type: "guide" },
  { label: "Global content strategy and governance", type: "strategy" },
  { label: "Specialized and regulated content", type: "regulated" },
  { label: "Enterprise localization operations", type: "operations" },
];

const featuredBenefits = [
  "Identify appropriate uses for AI translation",
  "Match review levels to content risk",
  "Incorporate approved terminology and translation memory",
  "Determine when professional human translation is required",
  "Evaluate translation quality beyond surface fluency",
  "Protect confidential and business-sensitive content",
  "Build measurable, repeatable multilingual workflows",
  "Continuously improve translation performance",
];

const supportingGuides = [
  {
    category: "TRANSLATION WORKFLOWS",
    title: "The Professional Translation Process",
    description:
      "Understand the complete translation lifecycle, from content analysis and linguistic preparation through translation, review, quality assurance, delivery, and ongoing language asset management.",
    linkLabel: "Explore the Translation Process Guide",
    href: "https://www.stepes.com/resources/translation-guides/professional-translation-process/",
    type: "translation",
  },
  {
    category: "LOCALIZATION",
    title: "Website Localization Guide",
    description:
      "Learn how to localize website content, navigation, metadata, forms, images, multimedia, and technical components while preserving user experience and search visibility.",
    linkLabel: "Read the Website Localization Guide",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-guide/",
    type: "localization",
  },
  {
    category: "QUALITY & GOVERNANCE",
    title: "Translation Quality Management Guide",
    description:
      "Build a consistent translation quality framework using qualified linguists, terminology controls, structured review, quality metrics, feedback loops, and continuous improvement.",
    linkLabel: "Explore Translation Quality Management",
    href: "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/",
    type: "quality",
  },
];


const guideCollections = [
  {
    title: "Translation Guides",
    description:
      "Plan and manage professional translation projects with practical guidance on workflows, file preparation, linguistic review, quality assurance, terminology, costs, and delivery.",
    type: "translation",
    href: "https://www.stepes.com/resources/translation-guides/",
    ctaLabel: "Explore Translation Guides",
    guides: [
      {
        label: "Translation Project Planning Guide",
        href: "https://www.stepes.com/resources/translation-guides/translation-project-planning-guide/",
      },
      {
        label: "The Professional Translation Process",
        href: "https://www.stepes.com/resources/translation-guides/professional-translation-process/",
      },
      {
        label: "Translation Review and Approval Guide",
        href: "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/",
      },
    ],
  },
  {
    title: "Localization Guides",
    description:
      "Create digital experiences that feel natural and function correctly in every market across websites, software, mobile applications, multimedia, and connected products.",
    type: "localization",
    href: "https://www.stepes.com/resources/localization-guides/",
    ctaLabel: "Explore Localization Guides",
    guides: [
      {
        label: "Website Localization Guide",
        href: "https://www.stepes.com/resources/localization-guides/website-localization-guide/",
      },
      {
        label: "Software Localization Guide",
        href: "https://www.stepes.com/resources/localization-guides/software-localization-guide/",
      },
      {
        label: "Mobile App Localization Checklist",
        href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/",
      },
    ],
  },
  {
    title: "AI Translation Insights",
    description:
      "Understand where AI translation delivers value, where it introduces risk, and how human expertise, terminology, security, and governance improve enterprise outcomes.",
    type: "ai",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
    ctaLabel: "Explore AI Translation Insights",
    guides: [
      {
        label: "AI + Human Translation Workflows",
        href: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
      },
      {
        label: "Evaluating AI Translation Quality",
        href: "https://www.stepes.com/resources/ai-translation-insights/evaluating-ai-translation-quality/",
      },
      {
        label: "Secure Enterprise AI Translation",
        href: "https://www.stepes.com/resources/ai-translation-insights/secure-ai-translation-guide/",
      },
    ],
  },
  {
    title: "Translation Quality & Governance",
    description:
      "Develop a structured approach to linguistic quality through terminology, translation memory, review models, measurable standards, approval controls, and continuous improvement.",
    type: "quality",
    href: "https://www.stepes.com/resources/translation-quality/",
    ctaLabel: "Explore Translation Quality Resources",
    guides: [
      {
        label: "Translation Quality Management Guide",
        href: "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/",
      },
      {
        label: "Terminology Management Guide",
        href: "https://www.stepes.com/resources/translation-quality/terminology-management-guide/",
      },
      {
        label: "Translation Memory Governance Guide",
        href: "https://www.stepes.com/resources/translation-quality/translation-memory-governance-guide/",
      },
    ],
  },
  {
    title: "Global Content Strategy",
    description:
      "Connect translation and localization to global operating models, technology adoption, supplier management, cross-functional governance, ROI, and international growth.",
    type: "strategy",
    href: "https://www.stepes.com/resources/global-content-strategy/",
    ctaLabel: "Explore Global Content Strategy",
    guides: [
      {
        label: "Global Content Operations Guide",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-operations-guide/",
      },
      {
        label: "Localization Maturity Guide",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-maturity-guide/",
      },
      {
        label: "Localization ROI Guide",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-roi-guide/",
      },
    ],
  },
];

const goalGuides = [
  {
    title: "Plan a Translation or Localization Project",
    description:
      "Define requirements, prepare source content, estimate costs, coordinate reviewers, and establish a workflow before production begins.",
    type: "translation",
    guides: [
      ["Translation Project Planning Guide", "https://www.stepes.com/resources/translation-guides/translation-project-planning-guide/"],
      ["Preparing Content for Translation", "https://www.stepes.com/resources/translation-guides/prepare-files-for-translation/"],
      ["Translation Cost Guide", "https://www.stepes.com/resources/translation-cost-guide/"],
      ["File Format Support", "https://www.stepes.com/resources/file-format-support/"],
      ["Translation Review and Approval Guide", "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/"],
    ],
  },
  {
    title: "Choose an AI, Human, or Hybrid Workflow",
    description:
      "Match the translation method and review level to content purpose, audience, volume, quality expectations, and business risk.",
    type: "ai",
    guides: [
      ["AI + Human Translation Workflows", "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"],
      ["Choosing the Right Translation Method", "https://www.stepes.com/resources/translation-guides/human-translation-vs-ai-translation-mtpe/"],
      ["Machine Translation Post-Editing Guide", "https://www.stepes.com/resources/ai-translation-insights/machine-translation-post-editing-guide/"],
      ["Evaluating AI Translation Quality", "https://www.stepes.com/resources/ai-translation-insights/evaluating-ai-translation-quality/"],
      ["Risk-Based Translation Review", "https://www.stepes.com/resources/ai-translation-insights/risk-based-translation-review/"],
    ],
  },
  {
    title: "Improve Translation Quality and Consistency",
    description:
      "Coordinate qualified linguists, terminology, translation memory, structured review, quality metrics, and feedback across languages.",
    type: "quality",
    guides: [
      ["Translation Quality Management Guide", "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/"],
      ["Translation Quality Assurance Guide", "https://www.stepes.com/resources/translation-quality/translation-quality-assurance-guide/"],
      ["Terminology Management Guide", "https://www.stepes.com/resources/translation-quality/terminology-management-guide/"],
      ["Translation Memory Guide", "https://www.stepes.com/resources/translation-quality/translation-memory-guide/"],
      ["Linguistic Review Guide", "https://www.stepes.com/resources/translation-quality/linguistic-review-guide/"],
    ],
  },
  {
    title: "Localize a Website, Application, or Product",
    description:
      "Prepare digital products for international markets, automate content exchange, accommodate expansion, and validate the localized experience.",
    type: "localization",
    guides: [
      ["Website Localization Guide", "https://www.stepes.com/resources/localization-guides/website-localization-guide/"],
      ["Software Localization Guide", "https://www.stepes.com/resources/localization-guides/software-localization-guide/"],
      ["Mobile App Localization Checklist", "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/"],
      ["Internationalization Readiness Checklist", "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/"],
      ["Localization Testing Guide", "https://www.stepes.com/resources/localization-guides/localization-testing-guide/"],
    ],
  },
  {
    title: "Manage Specialized or Regulated Content",
    description:
      "Apply subject-matter expertise, approved terminology, controlled review, confidentiality, and traceable quality processes to high-impact content.",
    type: "regulated",
    guides: [
      ["Medical Translation Guide", "https://www.stepes.com/resources/translation-guides/medical-translation-guide/"],
      ["Medical Device Translation Guide", "https://www.stepes.com/resources/translation-guides/medical-device-translation-guide/"],
      ["Life Sciences Localization Guide", "https://www.stepes.com/resources/translation-guides/life-sciences-localization-guide/"],
      ["Legal Translation Guide", "https://www.stepes.com/resources/translation-guides/legal-translation-guide/"],
      ["Technical Translation Guide", "https://www.stepes.com/resources/translation-guides/technical-translation-guide/"],
    ],
  },
  {
    title: "Scale Global Content Operations",
    description:
      "Connect language assets, technologies, internal teams, suppliers, reporting, and governance as multilingual demand grows.",
    type: "operations",
    guides: [
      ["Global Content Operations Guide", "https://www.stepes.com/resources/global-content-strategy/global-content-operations-guide/"],
      ["Enterprise Localization Program Guide", "https://www.stepes.com/resources/global-content-strategy/enterprise-localization-program-guide/"],
      ["Localization Maturity Guide", "https://www.stepes.com/resources/global-content-strategy/localization-maturity-guide/"],
      ["Translation Vendor Management Guide", "https://www.stepes.com/resources/global-content-strategy/translation-vendor-management-guide/"],
      ["Localization ROI Guide", "https://www.stepes.com/resources/global-content-strategy/localization-roi-guide/"],
    ],
  },
];

const guideLibraryCategories = [
  {
    id: "translation-planning-workflows",
    label: "Translation Planning & Workflows",
    title: "Translation Planning and Workflows",
    description:
      "Plan, prepare, translate, review, approve, and deliver multilingual content through clearly defined professional workflows.",
    hubHref: "https://www.stepes.com/resources/translation-guides/",
    hubLabel: "Explore All Translation Guides",
    guides: [
      {
        title: "Translation Project Planning Guide",
        description: "Define project objectives, content scope, target languages, quality requirements, review responsibilities, delivery formats, and timelines before translation begins.",
        href: "https://www.stepes.com/resources/translation-guides/translation-project-planning-guide/",
      },
      {
        title: "The Professional Translation Process",
        description: "Follow the complete translation lifecycle from initial analysis and resource selection through translation, linguistic review, quality assurance, delivery, and feedback.",
        href: "https://www.stepes.com/resources/translation-guides/professional-translation-process/",
      },
      {
        title: "Choosing the Right Translation Method",
        description: "Compare professional human translation, AI translation, machine translation post-editing, transcreation, and hybrid workflows for different content types and business needs.",
        href: "https://www.stepes.com/resources/translation-guides/human-translation-vs-ai-translation-mtpe/",
      },
      {
        title: "Preparing Content for Translation",
        description: "Improve quality and reduce avoidable cost by clarifying source content, removing ambiguity, organizing files, identifying nontranslatable elements, and supplying useful references.",
        href: "https://www.stepes.com/resources/translation-guides/prepare-files-for-translation/",
      },
      {
        title: "Translation Review and Approval Guide",
        description: "Establish an efficient client review process with assigned reviewers, consolidated feedback, objective evaluation criteria, and controlled final approval.",
        href: "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/",
      },
      {
        title: "File Preparation for Translation",
        description: "Understand how source formats, embedded text, scanned documents, design files, multimedia assets, and exported software strings affect translation workflows.",
        href: "https://www.stepes.com/resources/translation-guides/file-preparation-for-translation/",
      },
      {
        title: "Translation Cost Planning Guide",
        description: "Learn how word count, language combinations, content complexity, workflow requirements, formatting, urgency, and linguistic reuse influence translation costs.",
        href: "https://www.stepes.com/resources/translation-cost-guide/",
      },
      {
        title: "Multilingual Desktop Publishing Guide",
        description: "Prepare translated documents for publication by managing layout expansion, fonts, tables, images, right-to-left languages, page flow, and visual quality assurance.",
        href: "https://www.stepes.com/resources/translation-guides/multilingual-desktop-publishing-guide/",
      },
      {
        title: "Certified Translation Guide",
        description: "Understand when certified translations may be required and how certification, formatting, supporting documentation, and submission requirements vary by use case.",
        href: "https://www.stepes.com/resources/translation-guides/certified-translation-guide/",
      },
      {
        title: "Translation Vendor Selection Guide",
        description: "Evaluate translation providers based on language coverage, subject expertise, quality systems, technology, security, service models, scalability, and program support.",
        href: "https://www.stepes.com/resources/translation-guides/translation-vendor-selection-guide/",
      },
    ],
  },
  {
    id: "localization-digital-products",
    label: "Localization & Digital Products",
    title: "Localization and Digital Products",
    description:
      "Adapt websites, software, applications, multimedia, and connected digital experiences for users in different languages and markets.",
    hubHref: "https://www.stepes.com/resources/localization-guides/",
    hubLabel: "Explore All Localization Guides",
    guides: [
      {
        title: "Website Localization Guide",
        description: "Plan a complete website localization program covering content, metadata, navigation, forms, images, multimedia, technical implementation, linguistic review, and localized SEO.",
        href: "https://www.stepes.com/resources/localization-guides/website-localization-guide/",
      },
      {
        title: "Software Localization Guide",
        description: "Adapt software interfaces, system messages, help content, documentation, and release workflows for users across languages and regions.",
        href: "https://www.stepes.com/resources/localization-guides/software-localization-guide/",
      },
      {
        title: "Mobile App Localization Checklist",
        description: "Prepare mobile applications for international markets by addressing interface strings, device constraints, text expansion, store listings, screenshots, testing, and release coordination.",
        href: "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/",
      },
      {
        title: "Internationalization Readiness Checklist",
        description: "Identify technical and design issues before localization, including hard-coded text, regional formats, character encoding, pluralization, and interface flexibility.",
        href: "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/",
      },
      {
        title: "Continuous Localization Guide",
        description: "Integrate localization into agile development and content operations so multilingual updates can move alongside frequent product and content releases.",
        href: "https://www.stepes.com/resources/localization-guides/continuous-localization-guide/",
      },
      {
        title: "Localization Testing Guide",
        description: "Validate localized products through linguistic, cosmetic, functional, compatibility, and user-experience testing.",
        href: "https://www.stepes.com/resources/localization-guides/localization-testing-guide/",
      },
      {
        title: "Localization Quality Assurance Guide",
        description: "Combine automated checks, professional linguistic review, contextual validation, and defect management to improve localized product quality.",
        href: "https://www.stepes.com/resources/localization-guides/localization-quality-assurance-guide/",
      },
      {
        title: "Website Translation Technology Guide",
        description: "Compare export-and-import processes, content management system integrations, APIs, connectors, and website translation proxy solutions.",
        href: "https://www.stepes.com/resources/localization-guides/website-translation-technology-guide/",
      },
      {
        title: "Multilingual SEO Guide",
        description: "Support international search visibility through localized keyword research, metadata, URL strategy, hreflang implementation, content adaptation, and market-specific analysis.",
        href: "https://www.stepes.com/resources/localization-guides/multilingual-seo-guide/",
      },
      {
        title: "Multimedia Localization Guide",
        description: "Localize video, audio, animation, subtitles, captions, graphics, and on-screen text while preserving timing, meaning, visual quality, and audience engagement.",
        href: "https://www.stepes.com/resources/localization-guides/multimedia-localization-guide/",
      },
    ],
  },
  {
    id: "ai-human-validation",
    label: "AI Translation & Human Validation",
    title: "AI Translation and Human Validation",
    description:
      "Evaluate enterprise AI translation, select appropriate models, integrate language assets, define human oversight, and measure performance by use case.",
    hubHref: "https://www.stepes.com/resources/ai-translation-insights/",
    hubLabel: "Explore All AI Translation Insights",
    guides: [
      {
        title: "AI + Human Translation Workflows",
        description: "Build controlled translation processes that combine AI speed with professional human judgment, terminology management, translation memory, quality assurance, and approval.",
        href: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
      },
      {
        title: "Enterprise AI Translation Guide",
        description: "Evaluate AI translation for enterprise use based on quality, scalability, data security, workflow integration, language coverage, governance, and measurable outcomes.",
        href: "https://www.stepes.com/resources/ai-translation-insights/enterprise-ai-translation-guide/",
      },
      {
        title: "Machine Translation Post-Editing Guide",
        description: "Understand light and full post-editing, how to set quality expectations, and when post-editing is appropriate for different content types.",
        href: "https://www.stepes.com/resources/ai-translation-insights/machine-translation-post-editing-guide/",
      },
      {
        title: "Evaluating AI Translation Quality",
        description: "Assess AI-generated translations using meaning preservation, terminology accuracy, fluency, completeness, cultural suitability, formatting, and business risk.",
        href: "https://www.stepes.com/resources/ai-translation-insights/evaluating-ai-translation-quality/",
      },
      {
        title: "Selecting an AI Translation Model",
        description: "Compare models and engines using language performance, domain suitability, terminology control, security, customization, latency, integration, and total cost.",
        href: "https://www.stepes.com/resources/ai-translation-insights/selecting-ai-translation-model/",
      },
      {
        title: "Human-in-the-Loop Translation Guide",
        description: "Learn where qualified linguists, subject-matter reviewers, and internal stakeholders add the greatest value within AI-enabled translation workflows.",
        href: "https://www.stepes.com/resources/ai-translation-insights/human-in-the-loop-translation-guide/",
      },
      {
        title: "Secure AI Translation Guide",
        description: "Evaluate how translation data is transmitted, processed, retained, accessed, and governed when using enterprise AI translation technologies.",
        href: "https://www.stepes.com/resources/ai-translation-insights/secure-ai-translation-guide/",
      },
      {
        title: "Risk-Based Translation Review",
        description: "Assign translation methods and review levels according to audience, visibility, complexity, legal impact, regulatory importance, and potential consequences of error.",
        href: "https://www.stepes.com/resources/ai-translation-insights/risk-based-translation-review/",
      },
      {
        title: "AI Translation Terminology Management",
        description: "Improve AI consistency by providing approved terminology, product names, prohibited translations, style rules, and contextual instructions.",
        href: "https://www.stepes.com/resources/ai-translation-insights/ai-translation-terminology-management/",
      },
      {
        title: "Measuring AI Translation Performance",
        description: "Track quality, editing effort, turnaround time, cost, terminology adherence, reviewer feedback, and suitability by language and content type.",
        href: "https://www.stepes.com/resources/ai-translation-insights/measuring-ai-translation-performance/",
      },
    ],
  },
  {
    id: "quality-terminology-governance",
    label: "Quality, Terminology & Governance",
    title: "Translation Quality, Terminology, and Governance",
    description:
      "Build measurable, repeatable quality practices that connect people, process, technology, language assets, review, and continuous improvement.",
    hubHref: "https://www.stepes.com/resources/translation-quality/",
    hubLabel: "Explore All Translation Quality Resources",
    guides: [
      {
        title: "Translation Quality Management Guide",
        description: "Create a multilingual quality framework covering resource qualification, process design, technology, review, measurement, governance, and continuous improvement.",
        href: "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/",
      },
      {
        title: "Translation Quality Assurance Guide",
        description: "Understand how linguistic checks, automated validation, formatting review, terminology controls, and final inspection work together before delivery.",
        href: "https://www.stepes.com/resources/translation-quality/translation-quality-assurance-guide/",
      },
      {
        title: "Linguistic Review Guide",
        description: "Plan effective bilingual review using qualified reviewers, clear evaluation criteria, structured feedback, and controlled approval processes.",
        href: "https://www.stepes.com/resources/translation-quality/linguistic-review-guide/",
      },
      {
        title: "Translation Error Classification Guide",
        description: "Categorize issues by type and severity so teams can evaluate quality consistently and address the causes of recurring errors.",
        href: "https://www.stepes.com/resources/translation-quality/translation-error-classification-guide/",
      },
      {
        title: "Terminology Management Guide",
        description: "Create, validate, distribute, and maintain multilingual terminology across products, departments, languages, and content channels.",
        href: "https://www.stepes.com/resources/translation-quality/terminology-management-guide/",
      },
      {
        title: "Translation Memory Guide",
        description: "Understand how translation memory stores approved bilingual content, improves consistency, accelerates updates, and reduces repeated translation work.",
        href: "https://www.stepes.com/resources/translation-quality/translation-memory-guide/",
      },
      {
        title: "Translation Style Guide",
        description: "Document voice, tone, grammar, punctuation, formatting, product naming, audience expectations, and market-specific writing preferences.",
        href: "https://www.stepes.com/resources/translation-quality/translation-style-guide/",
      },
      {
        title: "Multilingual Content Governance Guide",
        description: "Define ownership, roles, approvals, standards, technologies, language assets, and performance measures across a global organization.",
        href: "https://www.stepes.com/resources/translation-quality/multilingual-content-governance-guide/",
      },
      {
        title: "Translation Feedback Management",
        description: "Turn reviewer comments and corrections into structured improvements for linguists, terminology, translation memories, AI workflows, and future projects.",
        href: "https://www.stepes.com/resources/translation-quality/translation-feedback-management/",
      },
      {
        title: "Translation Quality Metrics Guide",
        description: "Use quality indicators that reflect content purpose and business risk rather than relying on one universal score.",
        href: "https://www.stepes.com/resources/translation-quality/translation-quality-metrics-guide/",
      },
    ],
  },
  {
    id: "global-content-operations",
    label: "Global Content Strategy & Operations",
    title: "Global Content Strategy and Operations",
    description:
      "Connect multilingual content demand to operating models, technology, supplier management, reporting, governance, and measurable business value.",
    hubHref: "https://www.stepes.com/resources/global-content-strategy/",
    hubLabel: "Explore All Global Content Strategy Guides",
    guides: [
      {
        title: "Global Content Strategy Guide",
        description: "Align multilingual content creation, translation, localization, technology, governance, and measurement with international business objectives.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-strategy-guide/",
      },
      {
        title: "Global Content Operations Guide",
        description: "Build connected workflows for creating, translating, approving, publishing, updating, and measuring multilingual content across teams and systems.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-operations-guide/",
      },
      {
        title: "Enterprise Localization Program Guide",
        description: "Move from isolated translation projects to a coordinated enterprise program with shared standards, technologies, language assets, reporting, and governance.",
        href: "https://www.stepes.com/resources/global-content-strategy/enterprise-localization-program-guide/",
      },
      {
        title: "Localization Maturity Guide",
        description: "Assess how effectively your organization manages multilingual content and identify practical steps toward more scalable, integrated operations.",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-maturity-guide/",
      },
      {
        title: "Translation Technology Guide",
        description: "Understand translation management systems, AI translation, translation memory, terminology management, APIs, connectors, automation, and quality tools.",
        href: "https://www.stepes.com/resources/global-content-strategy/translation-technology-guide/",
      },
      {
        title: "Translation Vendor Management Guide",
        description: "Establish supplier responsibilities, service levels, quality expectations, security requirements, reporting standards, and escalation processes.",
        href: "https://www.stepes.com/resources/global-content-strategy/translation-vendor-management-guide/",
      },
      {
        title: "Localization ROI Guide",
        description: "Evaluate localization value through revenue opportunity, market readiness, operational efficiency, customer experience, risk reduction, and content reuse.",
        href: "https://www.stepes.com/resources/global-content-strategy/localization-roi-guide/",
      },
      {
        title: "Centralized vs. Decentralized Localization",
        description: "Compare localization operating models and balance governance, regional autonomy, shared resources, and business-unit requirements.",
        href: "https://www.stepes.com/resources/global-content-strategy/centralized-vs-decentralized-localization/",
      },
      {
        title: "Global Content Governance Guide",
        description: "Coordinate content standards, ownership, approval authority, terminology, publishing, and lifecycle management across markets.",
        href: "https://www.stepes.com/resources/global-content-strategy/global-content-governance-guide/",
      },
      {
        title: "Building a Localization Business Case",
        description: "Present localization investments using measurable goals, operational challenges, market opportunities, customer needs, and implementation priorities.",
        href: "https://www.stepes.com/resources/global-content-strategy/building-localization-business-case/",
      },
    ],
  },
  {
    id: "specialized-regulated-content",
    label: "Specialized & Regulated Content",
    title: "Specialized and Regulated Content",
    description:
      "Apply subject-matter expertise, precise terminology, confidential workflows, and appropriate quality controls to complex or high-impact content.",
    hubHref: "https://www.stepes.com/resources/translation-guides/",
    hubLabel: "Explore Specialized Translation Guides",
    guides: [
      {
        title: "Medical Translation Guide",
        description: "Manage patient-facing, clinical, educational, operational, and healthcare communications using qualified linguists, approved terminology, structured review, and appropriate controls.",
        href: "https://www.stepes.com/resources/translation-guides/medical-translation-guide/",
      },
      {
        title: "Medical Device Translation Guide",
        description: "Plan multilingual documentation, labeling, instructions for use, software content, training materials, and other medical device content across the product lifecycle.",
        href: "https://www.stepes.com/resources/translation-guides/medical-device-translation-guide/",
      },
      {
        title: "Life Sciences Localization Guide",
        description: "Support multilingual clinical, regulatory, medical, commercial, and patient communications with specialized workflows and subject-matter expertise.",
        href: "https://www.stepes.com/resources/translation-guides/life-sciences-localization-guide/",
      },
      {
        title: "Legal Translation Guide",
        description: "Translate contracts, litigation materials, policies, intellectual property, corporate documents, and compliance content while protecting meaning and confidentiality.",
        href: "https://www.stepes.com/resources/translation-guides/legal-translation-guide/",
      },
      {
        title: "Financial Translation Guide",
        description: "Manage multilingual reports, investor communications, banking content, insurance materials, disclosures, and customer-facing financial information.",
        href: "https://www.stepes.com/resources/translation-guides/financial-translation-guide/",
      },
      {
        title: "Technical Translation Guide",
        description: "Translate manuals, specifications, engineering documentation, safety content, product support materials, and technical training with consistent terminology.",
        href: "https://www.stepes.com/resources/translation-guides/technical-translation-guide/",
      },
      {
        title: "Marketing Translation and Transcreation Guide",
        description: "Adapt campaigns, brand messaging, digital content, advertising, and customer communications for cultural relevance while preserving strategic intent.",
        href: "https://www.stepes.com/resources/translation-guides/marketing-translation-transcreation-guide/",
      },
      {
        title: "Patent Translation Guide",
        description: "Translate patent applications, claims, technical descriptions, office actions, and intellectual property materials with precise technical and legal terminology.",
        href: "https://www.stepes.com/resources/translation-guides/patent-translation-guide/",
      },
      {
        title: "Regulatory Translation Guide",
        description: "Support multilingual submissions, controlled documentation, labeling, reports, and correspondence using traceable and reviewable workflows.",
        href: "https://www.stepes.com/resources/translation-guides/regulatory-translation-guide/",
      },
      {
        title: "Multilingual eLearning Guide",
        description: "Localize training programs, narration, subtitles, assessments, graphics, interactions, and learning platforms for international audiences.",
        href: "https://www.stepes.com/resources/translation-guides/multilingual-elearning-guide/",
      },
    ],
  },
];

const learningPaths = [
  {
    title: "Build an Enterprise Translation Program",
    description:
      "Connect translation demand across departments while establishing shared standards, technologies, language assets, quality controls, reporting, and governance.",
    steps: [
      "Start with the Enterprise Localization Program Guide",
      "Assess your organization with the Localization Maturity Guide",
      "Establish terminology and translation memory governance",
      "Select the appropriate translation technologies",
      "Define quality standards and review responsibilities",
      "Implement reporting and continuous improvement",
    ],
    ctaLabel: "Explore Global Content Strategy Guides",
    href: "https://www.stepes.com/resources/global-content-strategy/",
  },
  {
    title: "Introduce AI Translation Responsibly",
    description:
      "Apply AI through a controlled process that matches models, language assets, human validation, security, and measurement to the right use cases.",
    steps: [
      "Read the Enterprise AI Translation Guide",
      "Identify appropriate content and use cases",
      "Compare models and translation engines",
      "Integrate terminology and translation memory",
      "Define human review levels by content risk",
      "Measure performance and editing effort",
      "Establish security and governance requirements",
    ],
    ctaLabel: "Explore AI Translation Insights",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    title: "Localize a Digital Product",
    description:
      "Prepare products technically, integrate localization with development, automate updates, and validate the complete experience before release.",
    steps: [
      "Review the Internationalization Readiness Checklist",
      "Establish a software localization workflow",
      "Integrate localization with product development",
      "Prepare interface strings and supporting context",
      "Implement continuous localization",
      "Conduct linguistic, cosmetic, and functional testing",
      "Monitor feedback after release",
    ],
    ctaLabel: "Explore Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  {
    title: "Manage Business-Critical or Regulated Content",
    description:
      "Define subject-matter expertise, terminology, review, security, quality assurance, version control, and approval requirements before production begins.",
    steps: [
      "Classify the content and consequences of error",
      "Select qualified subject-matter linguists",
      "Establish approved terminology",
      "Define the translation and review workflow",
      "Conduct independent quality assurance where appropriate",
      "Validate formatting, completeness, and version control",
      "Maintain a traceable approval process",
    ],
    ctaLabel: "Explore Specialized Translation Guides",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
];


const teamGuideGroups = [
  {
    title: "Localization Teams",
    description:
      "Build scalable translation workflows, manage language assets, coordinate reviewers, evaluate technology, and improve multilingual quality across the organization.",
    href: "https://www.stepes.com/solutions/localization-teams/",
    guides: [
      ["Enterprise Localization Program Guide", "https://www.stepes.com/resources/global-content-strategy/enterprise-localization-program-guide/"],
      ["Translation Quality Management Guide", "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/"],
      ["Terminology Management Guide", "https://www.stepes.com/resources/translation-quality/terminology-management-guide/"],
      ["Translation Technology Guide", "https://www.stepes.com/resources/global-content-strategy/translation-technology-guide/"],
      ["Localization Maturity Guide", "https://www.stepes.com/resources/global-content-strategy/localization-maturity-guide/"],
    ],
  },
  {
    title: "Marketing Teams",
    description:
      "Adapt websites, campaigns, brand messaging, multimedia, and customer communications for international audiences while preserving voice and market relevance.",
    href: "https://www.stepes.com/solutions/marketing-translation/",
    guides: [
      ["Marketing Translation and Transcreation Guide", "https://www.stepes.com/resources/translation-guides/marketing-translation-transcreation-guide/"],
      ["Website Localization Guide", "https://www.stepes.com/resources/localization-guides/website-localization-guide/"],
      ["Multilingual SEO Guide", "https://www.stepes.com/resources/localization-guides/multilingual-seo-guide/"],
      ["Global Content Strategy Guide", "https://www.stepes.com/resources/global-content-strategy/global-content-strategy-guide/"],
      ["Multimedia Localization Guide", "https://www.stepes.com/resources/localization-guides/multimedia-localization-guide/"],
    ],
  },
  {
    title: "Product and Engineering Teams",
    description:
      "Integrate localization into software development, automate content exchange, prepare user interfaces, and test localized digital experiences.",
    href: "https://www.stepes.com/solutions/product-engineering-localization/",
    guides: [
      ["Software Localization Guide", "https://www.stepes.com/resources/localization-guides/software-localization-guide/"],
      ["Internationalization Readiness Checklist", "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/"],
      ["Continuous Localization Guide", "https://www.stepes.com/resources/localization-guides/continuous-localization-guide/"],
      ["Mobile App Localization Checklist", "https://www.stepes.com/resources/localization-guides/mobile-app-localization-checklist/"],
      ["Localization Testing Guide", "https://www.stepes.com/resources/localization-guides/localization-testing-guide/"],
    ],
  },
  {
    title: "Legal Teams",
    description:
      "Protect meaning, confidentiality, terminology, and document integrity across contracts, policies, disputes, intellectual property, and regulatory content.",
    href: "https://www.stepes.com/corporate-legal-translation-services/",
    guides: [
      ["Legal Translation Guide", "https://www.stepes.com/resources/translation-guides/legal-translation-guide/"],
      ["Patent Translation Guide", "https://www.stepes.com/resources/translation-guides/patent-translation-guide/"],
      ["Secure AI Translation Guide", "https://www.stepes.com/resources/ai-translation-insights/secure-ai-translation-guide/"],
      ["Translation Review and Approval Guide", "https://www.stepes.com/resources/translation-guides/translation-review-editing-proofreading-qa/"],
      ["Multilingual Content Governance Guide", "https://www.stepes.com/resources/translation-quality/multilingual-content-governance-guide/"],
    ],
  },
  {
    title: "Life Sciences Teams",
    description:
      "Support multilingual clinical, regulatory, medical, patient-facing, and product communications through specialized expertise and controlled quality processes.",
    href: "https://www.stepes.com/life-sciences-translation-services/",
    guides: [
      ["Life Sciences Localization Guide", "https://www.stepes.com/resources/translation-guides/life-sciences-localization-guide/"],
      ["Medical Translation Guide", "https://www.stepes.com/resources/translation-guides/medical-translation-guide/"],
      ["Medical Device Translation Guide", "https://www.stepes.com/resources/translation-guides/medical-device-translation-guide/"],
      ["Regulatory Translation Guide", "https://www.stepes.com/resources/translation-guides/regulatory-translation-guide/"],
      ["Translation Quality Management Guide", "https://www.stepes.com/resources/translation-quality/translation-quality-management-guide/"],
    ],
  },
  {
    title: "Procurement Teams",
    description:
      "Evaluate translation providers, compare pricing models, establish service levels, improve cost visibility, and manage supplier performance.",
    href: "https://www.stepes.com/solutions/procurement-translation-management/",
    guides: [
      ["Translation Vendor Selection Guide", "https://www.stepes.com/resources/translation-guides/translation-vendor-selection-guide/"],
      ["Translation Cost Planning Guide", "https://www.stepes.com/resources/translation-cost-guide/"],
      ["Translation Vendor Management Guide", "https://www.stepes.com/resources/global-content-strategy/translation-vendor-management-guide/"],
      ["Localization ROI Guide", "https://www.stepes.com/resources/global-content-strategy/localization-roi-guide/"],
      ["Enterprise Localization Program Guide", "https://www.stepes.com/resources/global-content-strategy/enterprise-localization-program-guide/"],
    ],
  },
  {
    title: "Customer Support Teams",
    description:
      "Deliver consistent multilingual support experiences across knowledge bases, help centers, chat, email, documentation, and customer-facing service content.",
    href: "https://www.stepes.com/solutions/multilingual-customer-support/",
    guides: [
      ["AI + Human Translation Workflows", "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"],
      ["Terminology Management Guide", "https://www.stepes.com/resources/translation-quality/terminology-management-guide/"],
      ["Global Content Operations Guide", "https://www.stepes.com/resources/global-content-strategy/global-content-operations-guide/"],
      ["Translation Quality Assurance Guide", "https://www.stepes.com/resources/translation-quality/translation-quality-assurance-guide/"],
      ["Continuous Localization Guide", "https://www.stepes.com/resources/localization-guides/continuous-localization-guide/"],
    ],
  },
];

const priorityGuides = [
  {
    category: "AI Translation Quality",
    title: "Evaluating Enterprise AI Translation Quality",
    description:
      "A practical framework for assessing accuracy, terminology, fluency, completeness, formatting, cultural suitability, and business risk.",
    href: "https://www.stepes.com/resources/ai-translation-insights/evaluating-ai-translation-quality/",
    linkLabel: "Read the AI Translation Quality Guide",
    type: "ai",
  },
  {
    category: "Security and Governance",
    title: "Secure AI Translation Workflows",
    description:
      "Key considerations for data handling, access control, approved technology, confidentiality, human review, and enterprise governance.",
    href: "https://www.stepes.com/resources/ai-translation-insights/secure-ai-translation-guide/",
    type: "quality",
  },
  {
    category: "Product Localization",
    title: "Continuous Localization for Agile Product Teams",
    description:
      "How localization can operate alongside frequent software releases without creating unnecessary delays or manual work.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-localization-guide/",
    type: "localization",
  },
  {
    category: "Quality Measurement",
    title: "Translation Quality Metrics That Support Better Decisions",
    description:
      "How organizations can use content-specific quality criteria instead of relying on a single score for every translation.",
    href: "https://www.stepes.com/resources/translation-quality/translation-quality-metrics-guide/",
    type: "quality",
  },
  {
    category: "Global Content Operations",
    title: "Building Connected Global Content Operations",
    description:
      "A framework for coordinating people, processes, technology, language assets, and governance across multilingual content programs.",
    href: "https://www.stepes.com/resources/global-content-strategy/global-content-operations-guide/",
    type: "operations",
  },
];

const guidancePrinciples = [
  {
    title: "Built Around Real Enterprise Workflows",
    description:
      "The guides address the decisions organizations encounter when planning projects, coordinating stakeholders, introducing automation, managing language assets, evaluating quality, and scaling multilingual operations.",
    type: "operations",
  },
  {
    title: "Informed by Professional Linguists",
    description:
      "Language quality depends on native linguistic expertise, subject knowledge, cultural understanding, and professional judgment. Stepes works with qualified linguists across more than 100 languages.",
    type: "translation",
  },
  {
    title: "Grounded in AI and Human Expertise",
    description:
      "Stepes combines AI translation technology with professional human translation, review, quality assurance, terminology management, and workflow controls. Our guides explain where technology improves efficiency and where human expertise remains essential.",
    type: "ai",
  },
  {
    title: "Supported by Quality Systems",
    description:
      "Structured translation quality depends on qualified resources, defined workflows, controlled language assets, quality checks, feedback, and continuous improvement. Stepes supports enterprise programs through ISO-certified quality systems and professional linguistic processes.",
    type: "quality",
  },
  {
    title: "Written for Practical Use",
    description:
      "Each guide is designed to support real decisions by connecting translation quality, technology, security, operations, and business outcomes rather than presenting localization as a collection of isolated concepts.",
    type: "guide",
  },
];

const guidanceResources = [
  ["Translation Quality System", "https://www.stepes.com/translation-quality-system/"],
  ["ISO-Certified Translation Services", "https://www.stepes.com/iso-certified-translation-services/"],
  ["Security and Compliance", "https://www.stepes.com/resources/security-and-compliance/"],
  ["Our Professional Linguists", "https://www.stepes.com/our-linguists/"],
  ["AI + Human Translation Workflow", "https://www.stepes.com/ai-human-translation-workflow/"],
];


const moreResources = [
  {
    category: "Planning and Budgeting",
    title: "Translation Cost Guide",
    description:
      "Understand the factors that influence professional translation pricing and how language pairs, content complexity, review levels, file preparation, technology, and linguistic reuse affect the total cost of multilingual work.",
    linkLabel: "Explore the Translation Cost Guide",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    category: "Technical Reference",
    title: "File Format Support",
    description:
      "Review the document, design, software, multimedia, and structured-content formats supported by Stepes translation and localization workflows.",
    linkLabel: "View Supported File Formats",
    href: "https://www.stepes.com/resources/file-format-support/",
  },
  {
    category: "Terminology Reference",
    title: "Translation Glossary",
    description:
      "Explore practical definitions for the terminology used across translation, localization, artificial intelligence, quality assurance, and global content operations.",
    linkLabel: "Explore the Translation Glossary",
    href: "https://www.stepes.com/resources/translation-glossary/",
  },
  {
    category: "Language Coverage",
    title: "Languages",
    description:
      "Discover professional translation and localization support across more than 100 languages and a broad range of regional language variants.",
    linkLabel: "Explore Supported Languages",
    href: "https://www.stepes.com/languages/",
  },
  {
    category: "Enterprise Trust",
    title: "Security and Compliance",
    description:
      "Learn how Stepes protects multilingual content through secure technologies, access controls, confidential workflows, data protection practices, and enterprise governance.",
    linkLabel: "Explore Security and Compliance",
    href: "https://www.stepes.com/resources/security-and-compliance/",
  },
  {
    category: "Customer Outcomes",
    title: "Case Studies",
    description:
      "See how organizations use Stepes to improve translation quality, streamline multilingual workflows, support international products, and manage global content.",
    linkLabel: "View Case Studies",
    href: "https://www.stepes.com/resources/case-studies/",
  },
  {
    category: "Research and Strategy",
    title: "White Papers",
    description:
      "Explore in-depth research and strategic perspectives on enterprise translation, AI, localization operations, multilingual quality, and global content management.",
    linkLabel: "Browse White Papers",
    href: "https://www.stepes.com/resources/white-papers/",
  },
  {
    category: "Expert Learning",
    title: "Webinars and Events",
    description:
      "Learn from Stepes experts and industry professionals through educational sessions covering translation technology, quality, AI, localization, and global content strategy.",
    linkLabel: "Explore Webinars and Events",
    href: "https://www.stepes.com/resources/webinars/",
  },
];

const faqItems = [
  {
    question: "What types of translation and localization guides does Stepes provide?",
    answer:
      "Stepes provides practical guides covering professional translation, website and software localization, mobile app localization, AI translation, human linguistic review, translation quality assurance, terminology management, translation memory, global content strategy, and enterprise localization operations. The library also includes guidance for specialized content such as legal, medical, life sciences, financial, technical, regulatory, and marketing materials.",
  },
  {
    question: "Where should I start if I am planning my first translation project?",
    answer:
      "Begin with the Translation Project Planning Guide and the Professional Translation Process. These resources explain how to define your scope, prepare source content, select target languages, choose an appropriate workflow, assign reviewers, estimate costs, and establish realistic quality and delivery expectations. The Translation Cost Guide and File Format Support resource can also help with early planning.",
  },
  {
    question: "What is the difference between translation and localization?",
    answer:
      "Translation focuses on transferring written meaning from one language into another. Localization is broader: it adapts content or a product for a specific market and may include language, cultural references, imagery, design, interface behavior, local formats, technical functionality, search optimization, and regulatory requirements. A document may primarily require translation, while a website, software product, or mobile application usually requires localization.",
  },
  {
    question: "Do the guides cover AI translation and professional human review?",
    answer:
      "Yes. The Stepes guide library covers enterprise AI translation, model selection, machine translation post-editing, human-in-the-loop workflows, terminology integration, translation quality evaluation, data security, and governance. The guides also explain why the appropriate level of human review depends on the purpose, audience, complexity, and risk of the content.",
  },
  {
    question: "How do I choose between AI translation and professional human translation?",
    answer:
      "The right method depends on the content's business purpose, visibility, complexity, volume, timeline, target audience, language combination, regulatory environment, and consequences of error. AI translation may be appropriate for certain high-volume or lower-risk content. Professional human translation or intensive human review is generally more appropriate for creative, legal, medical, regulatory, highly visible, or business-critical communications. Many organizations benefit from a hybrid workflow that combines AI efficiency with professional linguistic oversight.",
  },
  {
    question: "Are there guides for regulated industries and specialized content?",
    answer:
      "Yes. Stepes provides guidance for multilingual medical, medical device, life sciences, legal, financial, technical, and regulatory content. These guides address specialized terminology, subject-matter expertise, review requirements, confidentiality, quality assurance, documentation control, and other considerations associated with high-impact content.",
  },
  {
    question: "How often are Stepes guides updated?",
    answer:
      "Stepes periodically reviews its guidance as translation technologies, AI capabilities, localization practices, quality methods, and enterprise requirements evolve. Each guide includes publication and update information so readers can see when meaningful revisions were made.",
  },
  {
    question: "Can these guides help us build an enterprise localization program?",
    answer:
      "Yes. The enterprise and global content guides address operating models, technology, terminology, translation memory, supplier management, quality governance, stakeholder responsibilities, reporting, and continuous improvement. Organizations can use these resources to assess existing processes and identify practical opportunities to improve scalability, consistency, cost control, and business alignment.",
  },
];

export default function StepesAllGuidesHubComplete() {
  return (
    <main className="all-guides-page">
      <style>{`
        :root {
          --stepes-accent: #c11d63;
          --stepes-accent-dark: #a71954;
          --stepes-accent-deep: #7a1542;
          --stepes-blush: #fdf2f7;
          --stepes-text: #111827;
          --stepes-copy: #475569;
          --stepes-muted: #64748b;
          --stepes-border: #e3e8ef;
          --stepes-border-strong: #d7dee8;
          --stepes-surface: #f7f9fc;
          --stepes-white: #ffffff;
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

        .all-guides-page {
          width: 100%;
          overflow-x: clip;
          overflow-y: visible;
          background: var(--stepes-white);
          color: var(--stepes-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .all-guides-page a {
          color: inherit;
          text-decoration: none;
        }

        .all-guides-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .all-guides-hero {
          position: relative;
          padding: 96px 0 88px;
          background: #ffffff;
        }

        .all-guides-hero::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: 0;
          width: min(calc(100% - 112px), 1168px);
          height: 1px;
          transform: translateX(-50%);
          background: var(--stepes-border);
        }

        .all-guides-hero-inner {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
        }

        .all-guides-hero h1 {
          max-width: 880px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.12;
          letter-spacing: -0.035em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-hero-copy {
          max-width: 790px;
          margin: 24px auto 0;
          color: var(--stepes-copy);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .all-guides-hero-audience {
          max-width: 820px;
          margin: 14px auto 0;
          color: var(--stepes-muted);
          font-size: 16px;
          line-height: 1.68;
        }

        .all-guides-hero-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
        }

        .all-guides-button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          line-height: 1.2;
          font-weight: 600;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease;
        }

        .all-guides-button-primary,
        .all-guides-button-primary:link,
        .all-guides-button-primary:visited,
        .all-guides-button-primary:hover,
        .all-guides-button-primary:active,
        .all-guides-button-primary:focus-visible {
          color: #ffffff;
        }

        .all-guides-button-primary {
          background: var(--stepes-accent);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.18);
        }

        .all-guides-button-primary:hover {
          background: var(--stepes-accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 13px 28px rgba(193, 29, 99, 0.22);
        }

        .all-guides-button-secondary {
          color: var(--stepes-text);
          background: #ffffff;
          border-color: var(--stepes-border-strong);
        }

        .all-guides-button-secondary:visited {
          color: var(--stepes-text);
        }

        .all-guides-button-secondary:hover {
          color: var(--stepes-accent-deep);
          border-color: #c9a4b5;
          transform: translateY(-1px);
        }

        .all-guides-page a:focus-visible,
        .all-guides-page summary:focus-visible,
        .all-guides-button:focus-visible,
        .all-guides-editorial-link:focus-visible,
        .all-guides-support-link:focus-visible,
        .all-guides-team-title-link:focus-visible,
        .all-guides-team-links a:focus-visible,
        .all-guides-latest-title-link:focus-visible,
        .all-guides-guidance-resource-grid a:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        .all-guides-overview {
          padding: 96px 0;
          background: var(--stepes-surface);
        }

        .all-guides-overview-head {
          display: grid;
          grid-template-columns: minmax(300px, 0.88fr) minmax(0, 1.3fr);
          gap: 84px;
          align-items: start;
        }

        .all-guides-eyebrow {
          margin: 0 0 18px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.16em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-overview h2,
        .all-guides-featured h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-overview-copy {
          max-width: 760px;
        }

        .all-guides-overview-copy p {
          margin: 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.78;
        }

        .all-guides-overview-copy p + p {
          margin-top: 18px;
        }

        .all-guides-coverage {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .all-guides-coverage-item {
          min-height: 138px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 28px 24px 26px 0;
          border-right: 1px solid var(--stepes-border);
        }

        .all-guides-coverage-item:nth-child(4n) {
          border-right: 0;
          padding-left: 24px;
        }

        .all-guides-coverage-item:nth-child(4n + 2),
        .all-guides-coverage-item:nth-child(4n + 3) {
          padding-left: 24px;
        }

        .all-guides-coverage-item:nth-child(-n + 4) {
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-coverage-icon {
          flex: 0 0 auto;
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--stepes-accent-deep);
          background: #ffffff;
          border: 1px solid var(--stepes-border);
        }

        .all-guides-coverage-label {
          margin: 5px 0 0;
          color: #273244;
          font-size: 15px;
          line-height: 1.52;
          font-weight: 600;
        }

        .all-guides-overview-note {
          max-width: 860px;
          margin: 34px 0 0;
          color: var(--stepes-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .all-guides-featured {
          padding: 96px 0 104px;
          background: #ffffff;
        }

        .all-guides-featured-head {
          max-width: 780px;
          margin-bottom: 42px;
        }

        .all-guides-featured-intro {
          max-width: 720px;
          margin: 18px 0 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.72;
        }

        .all-guides-featured-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(400px, 0.92fr);
          overflow-x: clip;
          overflow-y: visible;
          border: 1px solid var(--stepes-border);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 20px 46px rgba(15, 23, 42, 0.055);
        }

        .all-guides-featured-primary {
          padding: 52px;
          background: var(--stepes-blush);
          border-right: 1px solid #eed7e1;
        }

        .all-guides-featured-icon {
          width: 50px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
          color: var(--stepes-accent-deep);
          background: #ffffff;
          border: 1px solid #ecd1dd;
        }

        .all-guides-featured-primary h3 {
          max-width: 650px;
          margin: 0;
          font-size: 31px;
          line-height: 1.22;
          letter-spacing: -0.025em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-featured-primary > p {
          max-width: 690px;
          margin: 18px 0 0;
          color: #4a4851;
          font-size: 16px;
          line-height: 1.72;
        }

        .all-guides-benefit-label {
          margin: 28px 0 0;
          color: var(--stepes-text);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
        }

        .all-guides-benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 28px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .all-guides-benefit-grid li {
          position: relative;
          min-width: 0;
          padding-left: 18px;
          color: #3f4652;
          font-size: 14px;
          line-height: 1.55;
        }

        .all-guides-benefit-grid li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.68em;
          width: 6px;
          height: 2px;
          border-radius: 2px;
          background: var(--stepes-accent);
        }

        .all-guides-featured-primary .all-guides-button {
          margin-top: 32px;
        }

        .all-guides-supporting {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .all-guides-supporting-heading {
          margin: 0;
          padding: 30px 34px 18px;
          color: var(--stepes-muted);
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.16em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-support-row {
          flex: 1 1 0;
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 16px;
          padding: 28px 34px;
          border-top: 1px solid var(--stepes-border);
        }

        .all-guides-support-icon {
          width: 42px;
          height: 42px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--stepes-accent-deep);
          background: #ffffff;
          border: 1px solid var(--stepes-border);
        }

        .all-guides-support-category {
          margin: 1px 0 8px;
          color: var(--stepes-accent-deep);
          font-size: 10px;
          line-height: 1.4;
          letter-spacing: 0.13em;
          font-weight: 600;
        }

        .all-guides-support-row h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .all-guides-support-description {
          margin: 10px 0 0;
          color: var(--stepes-copy);
          font-size: 14px;
          line-height: 1.65;
        }

        .all-guides-support-link,
        .all-guides-editorial-link {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 12px;
          color: var(--stepes-accent-deep);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
        }

        .all-guides-support-link:visited,
        .all-guides-editorial-link:visited {
          color: var(--stepes-accent-deep);
        }

        .all-guides-support-link svg,
        .all-guides-editorial-link svg {
          transition: transform 180ms ease;
        }

        .all-guides-support-link:hover,
        .all-guides-editorial-link:hover {
          color: var(--stepes-accent);
        }

        .all-guides-support-link:hover svg,
        .all-guides-editorial-link:hover svg {
          transform: translateX(3px);
        }


        .all-guides-section-heading {
          max-width: 820px;
        }

        .all-guides-section-heading h2,
        .all-guides-goals h2,
        .all-guides-library h2,
        .all-guides-paths h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-section-intro {
          max-width: 790px;
          margin: 18px 0 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.74;
        }

        .all-guides-collections {
          padding: 104px 0;
          background: var(--stepes-surface);
        }

        .all-guides-collection-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .all-guides-collection-item {
          grid-column: span 2;
          min-width: 0;
          padding: 34px 30px 36px;
        }

        .all-guides-collection-item:nth-child(-n + 3) {
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-collection-item:nth-child(1),
        .all-guides-collection-item:nth-child(2),
        .all-guides-collection-item:nth-child(4) {
          border-right: 1px solid var(--stepes-border);
        }

        .all-guides-collection-item:nth-child(4),
        .all-guides-collection-item:nth-child(5) {
          grid-column: span 3;
        }

        .all-guides-collection-icon,
        .all-guides-goal-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 15px;
          color: var(--stepes-accent-deep);
          background: #ffffff;
          border: 1px solid var(--stepes-border);
        }

        .all-guides-collection-item h3 {
          margin: 22px 0 0;
          font-size: 22px;
          line-height: 1.28;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .all-guides-collection-description {
          margin: 13px 0 0;
          color: var(--stepes-copy);
          font-size: 15px;
          line-height: 1.68;
        }

        .all-guides-topic-list {
          display: grid;
          gap: 8px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .all-guides-topic-list a {
          min-height: 38px;
          display: grid;
          grid-template-columns: 9px minmax(0, 1fr);
          gap: 9px;
          align-items: start;
          padding: 7px 0;
          color: #334155;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 600;
        }

        .all-guides-topic-list a::before {
          content: "";
          width: 6px;
          height: 2px;
          margin-top: 0.68em;
          border-radius: 2px;
          background: #b7c0cc;
          transition: background-color 180ms ease, transform 180ms ease;
        }

        .all-guides-topic-list a:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-topic-list a:hover::before {
          background: var(--stepes-accent);
          transform: translateX(2px);
        }

        .all-guides-collection-item .all-guides-editorial-link {
          margin-top: 20px;
        }

        .all-guides-goals {
          padding: 104px 0;
          color: #ffffff;
          background: #151722;
        }

        .all-guides-goals .all-guides-eyebrow {
          color: #f2b8d1;
        }

        .all-guides-goals-head {
          display: grid;
          grid-template-columns: minmax(300px, 0.9fr) minmax(0, 1.1fr);
          gap: 78px;
          align-items: start;
        }

        .all-guides-goals-intro {
          max-width: 720px;
          margin: 0;
          color: #c6cbd5;
          font-size: 17px;
          line-height: 1.75;
        }

        .all-guides-goal-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 56px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .all-guides-goal-item {
          min-width: 0;
          padding: 34px 30px 36px;
        }

        .all-guides-goal-item:nth-child(-n + 3) {
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .all-guides-goal-item:nth-child(1),
        .all-guides-goal-item:nth-child(2),
        .all-guides-goal-item:nth-child(4),
        .all-guides-goal-item:nth-child(5) {
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }

        .all-guides-goal-icon {
          color: #f2b8d1;
          background: rgba(255, 255, 255, 0.055);
          border-color: rgba(255, 255, 255, 0.14);
        }

        .all-guides-goal-item h3 {
          margin: 22px 0 0;
          color: #ffffff;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -0.017em;
          font-weight: 600;
        }

        .all-guides-goal-description {
          margin: 13px 0 0;
          color: #b8bec9;
          font-size: 14px;
          line-height: 1.68;
        }

        .all-guides-goal-links {
          display: grid;
          gap: 1px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .all-guides-goal-links a {
          min-height: 39px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 7px 0;
          color: #e2e5eb;
          font-size: 14px;
          line-height: 1.48;
          font-weight: 600;
          border-bottom: 1px solid rgba(255, 255, 255, 0.075);
          transition: color 180ms ease;
        }

        .all-guides-goal-links li:last-child a {
          border-bottom: 0;
        }

        .all-guides-goal-links a svg {
          flex: 0 0 auto;
          color: #8f96a4;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-goal-links a:hover {
          color: #ffffff;
        }

        .all-guides-goal-links a:hover svg {
          color: #f2b8d1;
          transform: translateX(3px);
        }

        .all-guides-library {
          padding: 104px 0 112px;
          background: #ffffff;
        }

        .all-guides-library-head {
          display: grid;
          grid-template-columns: minmax(310px, 0.88fr) minmax(0, 1.12fr);
          gap: 76px;
          align-items: start;
        }

        .all-guides-library-intro {
          max-width: 740px;
          margin: 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.75;
        }

        .all-guides-library-nav {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 52px;
          padding: 10px 0;
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .all-guides-library-nav a {
          min-height: 58px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 22px;
          color: #273244;
          font-size: 14px;
          line-height: 1.45;
          font-weight: 600;
          border-right: 1px solid var(--stepes-border);
        }

        .all-guides-library-nav a:nth-child(3n) {
          border-right: 0;
        }

        .all-guides-library-nav a:nth-child(-n + 3) {
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-library-nav a svg {
          flex: 0 0 auto;
          color: #9aa4b2;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-library-nav a:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-library-nav a:hover svg {
          color: var(--stepes-accent);
          transform: translateX(3px);
        }

        .all-guides-library-category {
          display: grid;
          grid-template-columns: minmax(230px, 0.24fr) minmax(0, 0.76fr);
          gap: 46px;
          padding-top: 68px;
          scroll-margin-top: 24px;
        }

        .all-guides-library-category + .all-guides-library-category {
          margin-top: 68px;
          border-top: 1px solid var(--stepes-border-strong);
        }

        .all-guides-library-category-head {
          align-self: start;
        }

        .all-guides-library-category-label {
          margin: 0 0 16px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-library-category h3 {
          margin: 0;
          font-size: 26px;
          line-height: 1.24;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .all-guides-library-category-description {
          margin: 15px 0 0;
          color: var(--stepes-copy);
          font-size: 15px;
          line-height: 1.7;
        }

        .all-guides-library-category-head .all-guides-editorial-link {
          margin-top: 18px;
        }

        .all-guides-library-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 28px;
          border-top: 1px solid var(--stepes-border);
        }

        .all-guides-library-item {
          min-width: 0;
          padding: 22px 0 24px;
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-library-item-title {
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--stepes-text);
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .all-guides-library-item-title:visited {
          color: var(--stepes-text);
        }

        .all-guides-library-item-title svg {
          flex: 0 0 auto;
          margin-top: 0.28em;
          color: #a5aebb;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-library-item-title:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-library-item-title:hover svg {
          color: var(--stepes-accent);
          transform: translateX(3px);
        }

        .all-guides-library-item p {
          margin: 10px 0 0;
          color: var(--stepes-copy);
          font-size: 14px;
          line-height: 1.68;
        }

        .all-guides-paths {
          padding: 104px 0 112px;
          background: var(--stepes-surface);
        }

        .all-guides-paths-head {
          display: grid;
          grid-template-columns: minmax(310px, 0.9fr) minmax(0, 1.1fr);
          gap: 76px;
          align-items: start;
        }

        .all-guides-paths-intro {
          max-width: 730px;
          margin: 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.75;
        }

        .all-guides-path-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 52px;
        }

        .all-guides-path-card {
          min-width: 0;
          padding: 36px;
          border: 1px solid var(--stepes-border);
          border-radius: 24px;
          background: #ffffff;
        }

        .all-guides-path-card h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .all-guides-path-description {
          margin: 13px 0 0;
          color: var(--stepes-copy);
          font-size: 15px;
          line-height: 1.68;
        }

        .all-guides-path-steps {
          display: grid;
          gap: 0;
          margin: 25px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--stepes-border);
        }

        .all-guides-path-step {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          padding: 12px 0;
          color: #3f4a5a;
          font-size: 14px;
          line-height: 1.55;
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-path-number {
          width: 26px;
          height: 26px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.05em;
          border-radius: 999px;
          color: var(--stepes-accent-deep);
          background: var(--stepes-blush);
          font-size: 11px;
          line-height: 1;
          font-weight: 600;
        }

        .all-guides-path-card .all-guides-editorial-link {
          margin-top: 20px;
        }


        .all-guides-teams {
          padding: 104px 0 112px;
          background: #ffffff;
        }

        .all-guides-teams-head,
        .all-guides-latest-head {
          display: grid;
          grid-template-columns: minmax(310px, 0.9fr) minmax(0, 1.1fr);
          gap: 76px;
          align-items: start;
        }

        .all-guides-teams h2,
        .all-guides-latest h2,
        .all-guides-guidance h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-teams-intro,
        .all-guides-latest-intro {
          max-width: 730px;
          margin: 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.75;
        }

        .all-guides-team-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .all-guides-team-item {
          grid-column: span 3;
          min-width: 0;
          padding: 34px 28px 36px;
        }

        .all-guides-team-item:nth-child(-n + 4) {
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-team-item:nth-child(1),
        .all-guides-team-item:nth-child(2),
        .all-guides-team-item:nth-child(3),
        .all-guides-team-item:nth-child(5),
        .all-guides-team-item:nth-child(6) {
          border-right: 1px solid var(--stepes-border);
        }

        .all-guides-team-item:nth-child(n + 5) {
          grid-column: span 4;
        }

        .all-guides-team-item h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -0.017em;
          font-weight: 600;
        }

        .all-guides-team-title-link {
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--stepes-text);
        }

        .all-guides-team-title-link:visited {
          color: var(--stepes-text);
        }

        .all-guides-team-title-link svg {
          flex: 0 0 auto;
          margin-top: 0.26em;
          color: #a5aebb;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-team-title-link:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-team-title-link:hover svg {
          color: var(--stepes-accent);
          transform: translateX(3px);
        }

        .all-guides-team-description {
          margin: 13px 0 0;
          color: var(--stepes-copy);
          font-size: 14px;
          line-height: 1.68;
        }

        .all-guides-team-recommended {
          margin: 23px 0 10px;
          color: var(--stepes-muted);
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-team-links {
          display: grid;
          gap: 0;
          margin: 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--stepes-border);
        }

        .all-guides-team-links a {
          min-height: 42px;
          display: grid;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 9px;
          align-items: start;
          padding: 10px 0;
          color: #374151;
          font-size: 13px;
          line-height: 1.5;
          font-weight: 600;
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-team-links a::before {
          content: "";
          width: 6px;
          height: 2px;
          margin-top: 0.68em;
          border-radius: 2px;
          background: #b7c0cc;
          transition: background-color 180ms ease, transform 180ms ease;
        }

        .all-guides-team-links a:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-team-links a:hover::before {
          background: var(--stepes-accent);
          transform: translateX(2px);
        }

        .all-guides-latest {
          padding: 104px 0 112px;
          background: #faf7f9;
        }

        .all-guides-latest-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          margin-top: 52px;
          overflow-x: clip;
          overflow-y: visible;
          border: 1px solid #eadfe4;
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 20px 46px rgba(15, 23, 42, 0.045);
        }

        .all-guides-latest-feature {
          min-width: 0;
          padding: 52px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          background: var(--stepes-blush);
          border-right: 1px solid #ead9e1;
        }

        .all-guides-latest-icon,
        .all-guides-guidance-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 15px;
        }

        .all-guides-latest-icon {
          color: var(--stepes-accent-deep);
          background: #ffffff;
          border: 1px solid #ecd1dd;
        }

        .all-guides-latest-category {
          margin: 24px 0 11px;
        }

        .all-guides-latest-feature h3 {
          max-width: 560px;
          margin: 0;
          font-size: 29px;
          line-height: 1.24;
          letter-spacing: -0.023em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-latest-feature-description {
          max-width: 620px;
          margin: 17px 0 0;
          color: #4a4851;
          font-size: 16px;
          line-height: 1.72;
        }

        .all-guides-latest-list {
          min-width: 0;
        }

        .all-guides-latest-item {
          min-width: 0;
          padding: 30px 34px 32px;
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-latest-item:last-child {
          border-bottom: 0;
        }

        .all-guides-latest-item .all-guides-latest-category {
          margin-top: 0;
          margin-bottom: 8px;
        }

        .all-guides-latest-item h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.32;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .all-guides-latest-title-link {
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          color: var(--stepes-text);
        }

        .all-guides-latest-title-link:visited {
          color: var(--stepes-text);
        }

        .all-guides-latest-title-link svg {
          flex: 0 0 auto;
          margin-top: 0.28em;
          color: #a5aebb;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-latest-title-link:hover {
          color: var(--stepes-accent-deep);
        }

        .all-guides-latest-title-link:hover svg {
          color: var(--stepes-accent);
          transform: translateX(3px);
        }

        .all-guides-latest-item-description {
          margin: 9px 0 0;
          color: var(--stepes-copy);
          font-size: 14px;
          line-height: 1.66;
        }

        .all-guides-latest-footer {
          display: flex;
          justify-content: flex-end;
          margin-top: 18px;
        }

        .all-guides-guidance {
          padding: 104px 0 112px;
          color: #ffffff;
          background: #151722;
        }

        .all-guides-guidance-layout {
          display: grid;
          grid-template-columns: minmax(310px, 0.82fr) minmax(0, 1.18fr);
          gap: 84px;
          align-items: start;
        }

        .all-guides-guidance .all-guides-eyebrow {
          color: #f2b8d1;
        }

        .all-guides-guidance-intro {
          max-width: 500px;
          margin: 22px 0 0;
          color: #c6cbd5;
          font-size: 17px;
          line-height: 1.75;
        }

        .all-guides-guidance-intro + .all-guides-guidance-intro {
          margin-top: 16px;
        }

        .all-guides-guidance-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .all-guides-guidance-item {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 25px 0 27px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .all-guides-guidance-icon {
          color: #f2b8d1;
          background: rgba(255, 255, 255, 0.055);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }

        .all-guides-guidance-item h3 {
          margin: 1px 0 0;
          color: #ffffff;
          font-size: 20px;
          line-height: 1.32;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .all-guides-guidance-item p {
          margin: 9px 0 0;
          color: #b8bec9;
          font-size: 14px;
          line-height: 1.68;
        }

        .all-guides-guidance-resources {
          margin-top: 56px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .all-guides-guidance-resources-label {
          margin: 0 0 18px;
          color: #f2b8d1;
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.15em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-guidance-resource-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .all-guides-guidance-resource-grid a {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 18px;
          color: #e5e7eb;
          font-size: 14px;
          line-height: 1.48;
          font-weight: 600;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          transition: color 180ms ease, background-color 180ms ease;
        }

        .all-guides-guidance-resource-grid a:last-child {
          border-right: 0;
        }

        .all-guides-guidance-resource-grid a svg {
          flex: 0 0 auto;
          color: #8f96a4;
          transition: color 180ms ease, transform 180ms ease;
        }

        .all-guides-guidance-resource-grid a:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.035);
        }

        .all-guides-guidance-resource-grid a:hover svg {
          color: #f2b8d1;
          transform: translateX(3px);
        }

        @media (max-width: 1180px) {

          .all-guides-collection-item {
            padding-left: 24px;
            padding-right: 24px;
          }

          .all-guides-goals-head,
          .all-guides-library-head,
          .all-guides-paths-head {
            gap: 54px;
          }

          .all-guides-goal-item {
            padding-left: 24px;
            padding-right: 24px;
          }

          .all-guides-library-category {
            gap: 34px;
          }

          .all-guides-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .all-guides-hero::after {
            width: calc(100% - 80px);
          }

          .all-guides-overview-head {
            gap: 56px;
          }

          .all-guides-coverage-item,
          .all-guides-coverage-item:nth-child(4n),
          .all-guides-coverage-item:nth-child(4n + 2),
          .all-guides-coverage-item:nth-child(4n + 3) {
            padding-left: 20px;
            padding-right: 20px;
          }

          .all-guides-featured-panel {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 1fr);
          }

          .all-guides-featured-primary {
            padding: 44px;
          }

          .all-guides-support-row {
            padding: 26px 28px;
          }
        }

        @media (max-width: 900px) {

          .all-guides-collections,
          .all-guides-goals,
          .all-guides-library,
          .all-guides-paths {
            padding: 80px 0;
          }

          .all-guides-section-heading h2,
          .all-guides-goals h2,
          .all-guides-library h2,
          .all-guides-paths h2 {
            font-size: 32px;
          }

          .all-guides-collection-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-collection-item,
          .all-guides-collection-item:nth-child(4),
          .all-guides-collection-item:nth-child(5) {
            grid-column: span 1;
            border-right: 1px solid var(--stepes-border);
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-collection-item:nth-child(2n) {
            border-right: 0;
          }

          .all-guides-collection-item:last-child {
            grid-column: 1 / -1;
            border-right: 0;
            border-bottom: 0;
          }

          .all-guides-goals-head,
          .all-guides-library-head,
          .all-guides-paths-head {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .all-guides-goal-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-goal-item,
          .all-guides-goal-item:nth-child(-n + 3),
          .all-guides-goal-item:nth-child(1),
          .all-guides-goal-item:nth-child(2),
          .all-guides-goal-item:nth-child(4),
          .all-guides-goal-item:nth-child(5) {
            border-right: 1px solid rgba(255, 255, 255, 0.12);
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .all-guides-goal-item:nth-child(2n) {
            border-right: 0;
          }

          .all-guides-goal-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .all-guides-library-category {
            grid-template-columns: 1fr;
            gap: 30px;
            padding-top: 64px;
          }

          .all-guides-library-category + .all-guides-library-category {
            margin-top: 64px;
          }

          .all-guides-library-category-head {
            max-width: 720px;
          }

          .all-guides-library-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-path-grid {
            grid-template-columns: 1fr;
          }

          .all-guides-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .all-guides-hero {
            padding: 88px 0 80px;
          }

          .all-guides-hero::after {
            width: calc(100% - 48px);
          }

          .all-guides-hero h1 {
            font-size: 42px;
          }

          .all-guides-overview,
          .all-guides-featured {
            padding: 80px 0;
          }

          .all-guides-overview-head {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .all-guides-overview h2,
          .all-guides-featured h2 {
            font-size: 32px;
          }

          .all-guides-coverage {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-coverage-item,
          .all-guides-coverage-item:nth-child(4n),
          .all-guides-coverage-item:nth-child(4n + 2),
          .all-guides-coverage-item:nth-child(4n + 3) {
            min-height: 124px;
            padding: 24px 20px;
            border-right: 1px solid var(--stepes-border);
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-coverage-item:nth-child(2n) {
            border-right: 0;
          }

          .all-guides-coverage-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .all-guides-featured-panel {
            grid-template-columns: 1fr;
          }

          .all-guides-featured-primary {
            border-right: 0;
            border-bottom: 1px solid #eed7e1;
          }

          .all-guides-supporting-heading {
            padding-top: 28px;
          }
        }

        @media (max-width: 640px) {

          .all-guides-collections,
          .all-guides-goals,
          .all-guides-library,
          .all-guides-paths {
            padding: 68px 0;
          }

          .all-guides-section-heading h2,
          .all-guides-goals h2,
          .all-guides-library h2,
          .all-guides-paths h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .all-guides-section-intro,
          .all-guides-goals-intro,
          .all-guides-library-intro,
          .all-guides-paths-intro {
            font-size: 16px;
            line-height: 1.7;
          }

          .all-guides-collection-grid,
          .all-guides-goal-grid,
          .all-guides-library-nav,
          .all-guides-library-grid {
            grid-template-columns: 1fr;
          }

          .all-guides-collection-grid,
          .all-guides-goal-grid,
          .all-guides-library-nav,
          .all-guides-path-grid {
            margin-top: 40px;
          }

          .all-guides-collection-item,
          .all-guides-collection-item:nth-child(4),
          .all-guides-collection-item:nth-child(5),
          .all-guides-collection-item:nth-child(2n),
          .all-guides-collection-item:last-child {
            grid-column: auto;
            padding: 28px 0;
            border-right: 0;
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-collection-item:last-child {
            border-bottom: 0;
          }

          .all-guides-goal-item,
          .all-guides-goal-item:nth-child(-n + 3),
          .all-guides-goal-item:nth-child(1),
          .all-guides-goal-item:nth-child(2),
          .all-guides-goal-item:nth-child(4),
          .all-guides-goal-item:nth-child(5),
          .all-guides-goal-item:nth-child(2n),
          .all-guides-goal-item:nth-last-child(-n + 2) {
            padding: 28px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .all-guides-goal-item:last-child {
            border-bottom: 0;
          }

          .all-guides-library-nav {
            padding: 0;
          }

          .all-guides-library-nav a,
          .all-guides-library-nav a:nth-child(3n),
          .all-guides-library-nav a:nth-child(-n + 3) {
            min-height: 52px;
            padding: 10px 0;
            border-right: 0;
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-library-nav a:last-child {
            border-bottom: 0;
          }

          .all-guides-library-category {
            padding-top: 52px;
          }

          .all-guides-library-category + .all-guides-library-category {
            margin-top: 52px;
          }

          .all-guides-library-category h3 {
            font-size: 24px;
          }

          .all-guides-library-item {
            padding: 20px 0 22px;
          }

          .all-guides-path-card {
            padding: 30px 24px;
            border-radius: 22px;
          }

          .all-guides-path-card h3 {
            font-size: 22px;
          }

          .all-guides-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .all-guides-hero {
            padding: 68px 0 64px;
          }

          .all-guides-hero::after {
            width: calc(100% - 40px);
          }

          .all-guides-hero h1 {
            width: 100%;
            font-size: 38px;
            line-height: 1.13;
            letter-spacing: -0.03em;
          }

          .all-guides-hero-copy {
            margin-top: 20px;
            font-size: 18px;
            line-height: 1.64;
          }

          .all-guides-hero-audience {
            font-size: 15px;
            line-height: 1.62;
          }

          .all-guides-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 28px;
          }

          .all-guides-button {
            width: 100%;
            min-height: 52px;
          }

          .all-guides-overview,
          .all-guides-featured {
            padding: 68px 0;
          }

          .all-guides-overview h2,
          .all-guides-featured h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .all-guides-overview-copy p,
          .all-guides-featured-intro {
            font-size: 16px;
            line-height: 1.7;
          }

          .all-guides-coverage {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .all-guides-coverage-item,
          .all-guides-coverage-item:nth-child(4n),
          .all-guides-coverage-item:nth-child(4n + 2),
          .all-guides-coverage-item:nth-child(4n + 3),
          .all-guides-coverage-item:nth-child(2n) {
            min-height: 0;
            padding: 20px 0;
            border-right: 0;
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-coverage-item:last-child {
            border-bottom: 0;
          }

          .all-guides-overview-note {
            margin-top: 28px;
          }

          .all-guides-featured-head {
            margin-bottom: 32px;
          }

          .all-guides-featured-panel {
            border-radius: 24px;
          }

          .all-guides-featured-primary {
            padding: 32px 24px 34px;
          }

          .all-guides-featured-primary h3 {
            font-size: 26px;
            line-height: 1.25;
          }

          .all-guides-benefit-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .all-guides-supporting-heading {
            padding: 26px 24px 16px;
          }

          .all-guides-support-row {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 26px 24px;
          }

          .all-guides-support-row h3 {
            font-size: 20px;
          }

          .all-guides-support-link {
            margin-top: 10px;
          }
        }

        @media (max-width: 360px) {
          .all-guides-hero h1 {
            font-size: 36px;
          }

          .all-guides-featured-primary,
          .all-guides-support-row,
          .all-guides-supporting-heading {
            padding-left: 20px;
            padding-right: 20px;
          }
        }


        @media (max-width: 1180px) {
          .all-guides-teams-head,
          .all-guides-latest-head {
            gap: 54px;
          }

          .all-guides-team-item {
            padding-left: 24px;
            padding-right: 24px;
          }

          .all-guides-latest-feature {
            padding: 44px;
          }

          .all-guides-latest-item {
            padding-left: 28px;
            padding-right: 28px;
          }

          .all-guides-guidance-layout {
            gap: 58px;
          }

          .all-guides-guidance-resource-grid a {
            padding-left: 14px;
            padding-right: 14px;
          }
        }

        @media (max-width: 900px) {
          .all-guides-teams,
          .all-guides-latest,
          .all-guides-guidance {
            padding: 80px 0;
          }

          .all-guides-teams h2,
          .all-guides-latest h2,
          .all-guides-guidance h2 {
            font-size: 32px;
          }

          .all-guides-teams-head,
          .all-guides-latest-head,
          .all-guides-guidance-layout {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .all-guides-team-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-team-item,
          .all-guides-team-item:nth-child(-n + 4),
          .all-guides-team-item:nth-child(1),
          .all-guides-team-item:nth-child(2),
          .all-guides-team-item:nth-child(3),
          .all-guides-team-item:nth-child(5),
          .all-guides-team-item:nth-child(6),
          .all-guides-team-item:nth-child(n + 5) {
            grid-column: auto;
            border-right: 1px solid var(--stepes-border);
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-team-item:nth-child(2n) {
            border-right: 0;
          }

          .all-guides-team-item:last-child {
            grid-column: 1 / -1;
            border-right: 0;
            border-bottom: 0;
          }

          .all-guides-latest-layout {
            grid-template-columns: 1fr;
          }

          .all-guides-latest-feature {
            border-right: 0;
            border-bottom: 1px solid #ead9e1;
          }

          .all-guides-guidance-layout {
            gap: 44px;
          }

          .all-guides-guidance-intro {
            max-width: 760px;
          }

          .all-guides-guidance-resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-guidance-resource-grid a,
          .all-guides-guidance-resource-grid a:last-child {
            border-right: 1px solid rgba(255, 255, 255, 0.12);
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .all-guides-guidance-resource-grid a:nth-child(2n) {
            border-right: 0;
          }

          .all-guides-guidance-resource-grid a:last-child {
            grid-column: 1 / -1;
            border-right: 0;
            border-bottom: 0;
          }
        }

        @media (max-width: 640px) {
          .all-guides-teams,
          .all-guides-latest,
          .all-guides-guidance {
            padding: 68px 0;
          }

          .all-guides-teams h2,
          .all-guides-latest h2,
          .all-guides-guidance h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .all-guides-teams-intro,
          .all-guides-latest-intro,
          .all-guides-guidance-intro {
            font-size: 16px;
            line-height: 1.7;
          }

          .all-guides-team-grid {
            grid-template-columns: 1fr;
            margin-top: 40px;
          }

          .all-guides-team-item,
          .all-guides-team-item:nth-child(-n + 4),
          .all-guides-team-item:nth-child(1),
          .all-guides-team-item:nth-child(2),
          .all-guides-team-item:nth-child(3),
          .all-guides-team-item:nth-child(5),
          .all-guides-team-item:nth-child(6),
          .all-guides-team-item:nth-child(n + 5),
          .all-guides-team-item:nth-child(2n),
          .all-guides-team-item:last-child {
            grid-column: auto;
            padding: 28px 0;
            border-right: 0;
            border-bottom: 1px solid var(--stepes-border);
          }

          .all-guides-team-item:last-child {
            border-bottom: 0;
          }

          .all-guides-latest-layout {
            margin-top: 40px;
            border-radius: 24px;
          }

          .all-guides-latest-feature {
            padding: 32px 24px 34px;
          }

          .all-guides-latest-feature h3 {
            font-size: 26px;
            line-height: 1.25;
          }

          .all-guides-latest-item {
            padding: 26px 24px 28px;
          }

          .all-guides-latest-footer {
            justify-content: flex-start;
          }

          .all-guides-guidance-layout {
            gap: 38px;
          }

          .all-guides-guidance-item {
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 24px 0 26px;
          }

          .all-guides-guidance-resources {
            margin-top: 44px;
          }

          .all-guides-guidance-resource-grid {
            grid-template-columns: 1fr;
          }

          .all-guides-guidance-resource-grid a,
          .all-guides-guidance-resource-grid a:last-child,
          .all-guides-guidance-resource-grid a:nth-child(2n) {
            grid-column: auto;
            min-height: 58px;
            padding: 12px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .all-guides-guidance-resource-grid a:last-child {
            border-bottom: 0;
          }
        }

        @media (max-width: 360px) {
          .all-guides-latest-feature,
          .all-guides-latest-item {
            padding-left: 20px;
            padding-right: 20px;
          }
        }



        .all-guides-more-resources {
          padding: 104px 0;
          background: var(--stepes-surface);
        }

        .all-guides-more-resources-head,
        .all-guides-faq-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1.18fr);
          gap: 84px;
          align-items: start;
        }

        .all-guides-more-resources h2,
        .all-guides-faq h2,
        .all-guides-cta h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
          text-wrap: balance;
        }

        .all-guides-more-resources-intro,
        .all-guides-faq-intro {
          max-width: 760px;
          margin: 0;
          color: var(--stepes-copy);
          font-size: 17px;
          line-height: 1.76;
        }

        .all-guides-resource-directory {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1px;
          margin-top: 46px;
          overflow-x: clip;
          overflow-y: visible;
          border: 1px solid var(--stepes-border);
          border-radius: 28px;
          background: var(--stepes-border);
        }

        .all-guides-resource-item {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 32px 28px 30px;
          background: #ffffff;
        }

        .all-guides-resource-item:first-child {
          background: var(--stepes-blush);
        }

        .all-guides-resource-category {
          margin: 0 0 13px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          font-weight: 600;
          text-transform: uppercase;
        }

        .all-guides-resource-item h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.3;
          letter-spacing: -0.018em;
          font-weight: 600;
        }

        .all-guides-resource-item-description {
          margin: 13px 0 0;
          color: var(--stepes-copy);
          font-size: 14px;
          line-height: 1.68;
        }

        .all-guides-resource-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          margin-top: auto;
          padding-top: 24px;
          color: var(--stepes-accent-deep);
          font-size: 14px;
          line-height: 1.45;
          font-weight: 600;
        }

        .all-guides-resource-link:visited {
          color: var(--stepes-accent-deep);
        }

        .all-guides-resource-link svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .all-guides-resource-link:hover svg {
          transform: translateX(3px);
        }

        .all-guides-faq {
          padding: 104px 0 110px;
          background: #ffffff;
        }

        .all-guides-faq .all-guides-faq-intro {
          margin-top: 20px;
        }

        .all-guides-faq-panel {
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .all-guides-faq-item {
          border-bottom: 1px solid var(--stepes-border);
        }

        .all-guides-faq-item:last-child {
          border-bottom: 0;
        }

        .all-guides-faq-item summary {
          min-height: 76px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          gap: 20px;
          align-items: center;
          padding: 22px 0;
          color: var(--stepes-text);
          cursor: pointer;
          list-style: none;
          font-size: 17px;
          line-height: 1.48;
          font-weight: 600;
        }

        .all-guides-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .all-guides-faq-toggle {
          position: relative;
          width: 28px;
          height: 28px;
          border: 1px solid var(--stepes-border-strong);
          border-radius: 50%;
          background: #ffffff;
        }

        .all-guides-faq-toggle::before,
        .all-guides-faq-toggle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          width: 10px;
          height: 1.5px;
          border-radius: 2px;
          background: var(--stepes-muted);
          transform: translate(-50%, -50%);
          transition: transform 180ms ease, background-color 180ms ease;
        }

        .all-guides-faq-toggle::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .all-guides-faq-item[open] .all-guides-faq-toggle {
          border-color: #d8a9bd;
          background: var(--stepes-blush);
        }

        .all-guides-faq-item[open] .all-guides-faq-toggle::before,
        .all-guides-faq-item[open] .all-guides-faq-toggle::after {
          background: var(--stepes-accent-deep);
        }

        .all-guides-faq-item[open] .all-guides-faq-toggle::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .all-guides-faq-answer {
          max-width: 820px;
          padding: 0 48px 26px 0;
          color: var(--stepes-copy);
          font-size: 16px;
          line-height: 1.74;
        }

        .all-guides-faq-answer p {
          margin: 0;
        }

        .all-guides-cta {
          padding: 96px 0 104px;
          background: #ffffff;
        }

        .all-guides-cta-panel {
          position: relative;
          overflow-x: clip;
          overflow-y: visible;
          padding: 64px 72px;
          border: 1px solid #ead3de;
          border-radius: 30px;
          background: var(--stepes-blush);
          text-align: center;
        }

        .all-guides-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 820px;
          margin: 0 auto;
        }

        .all-guides-cta-copy {
          max-width: 760px;
          margin: 20px auto 0;
          color: #4b4a52;
          font-size: 18px;
          line-height: 1.72;
        }

        .all-guides-cta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 32px;
        }

        .all-guides-resource-link:focus-visible,
        .all-guides-faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        @media (max-width: 1180px) {
          .all-guides-more-resources-head,
          .all-guides-faq-layout {
            gap: 54px;
          }

          .all-guides-resource-item {
            padding-left: 24px;
            padding-right: 24px;
          }
        }

        @media (max-width: 900px) {
          .all-guides-more-resources,
          .all-guides-faq,
          .all-guides-cta {
            padding: 80px 0;
          }

          .all-guides-more-resources h2,
          .all-guides-faq h2,
          .all-guides-cta h2 {
            font-size: 32px;
          }

          .all-guides-more-resources-head,
          .all-guides-faq-layout {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .all-guides-resource-directory {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .all-guides-cta-panel {
            padding: 54px 44px;
          }
        }

        @media (max-width: 640px) {
          .all-guides-more-resources,
          .all-guides-faq,
          .all-guides-cta {
            padding: 68px 0;
          }

          .all-guides-more-resources h2,
          .all-guides-faq h2,
          .all-guides-cta h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .all-guides-more-resources-intro,
          .all-guides-faq-intro {
            font-size: 16px;
            line-height: 1.7;
          }

          .all-guides-resource-directory {
            grid-template-columns: 1fr;
            margin-top: 40px;
            border-radius: 24px;
          }

          .all-guides-resource-item {
            padding: 28px 24px 30px;
          }

          .all-guides-faq-panel {
            margin-top: 12px;
          }

          .all-guides-faq-item summary {
            min-height: 72px;
            gap: 16px;
            padding: 20px 0;
            font-size: 16px;
            line-height: 1.5;
          }

          .all-guides-faq-answer {
            padding: 0 0 24px;
            font-size: 15px;
            line-height: 1.72;
          }

          .all-guides-cta-panel {
            padding: 44px 24px 46px;
            border-radius: 24px;
          }

          .all-guides-cta-copy {
            font-size: 17px;
          }

          .all-guides-cta-actions {
            align-items: stretch;
            flex-direction: column;
          }

          .all-guides-cta-actions .all-guides-button {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .all-guides-resource-item,
          .all-guides-cta-panel {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {

          .all-guides-topic-list a::before,
          .all-guides-goal-links a svg,
          .all-guides-library-nav a svg,
          .all-guides-library-item-title svg {
            transition: none;
          }

          html {
            scroll-behavior: auto;
          }

          .all-guides-button,
          .all-guides-support-link svg,
          .all-guides-editorial-link svg {
            transition: none;
          }
        }
      `}</style>

      <section className="all-guides-hero" aria-labelledby="all-guides-title">
        <div className="all-guides-shell">
          <div className="all-guides-hero-inner">
            <h1 id="all-guides-title">
              Practical Guides for Translation, Localization, and Global Content
            </h1>
            <p className="all-guides-hero-copy">
              Plan multilingual projects, evaluate AI and human translation workflows, improve linguistic quality, localize digital products, and scale global content with practical guidance from Stepes.
            </p>
            <p className="all-guides-hero-audience">
              Explore expert resources for localization teams, marketers, product organizations, legal departments, life sciences companies, procurement teams, and global enterprises.
            </p>
            <div className="all-guides-hero-actions" aria-label="Guide library actions">
              <a
                className="all-guides-button all-guides-button-primary"
                href="https://www.stepes.com/resources/guides/#guide-library"
              >
                Explore All Guides
                <ArrowIcon />
              </a>
              <a
                className="all-guides-button all-guides-button-secondary"
                href="https://www.stepes.com/resources/guides/#guide-collections"
              >
                Browse Guide Collections
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="all-guides-overview" aria-labelledby="guidance-title">
        <div className="all-guides-shell">
          <div className="all-guides-overview-head">
            <div>
              <p className="all-guides-eyebrow">A Connected Knowledge Library</p>
              <h2 id="guidance-title">Expert Guidance Across the Multilingual Content Lifecycle</h2>
            </div>
            <div className="all-guides-overview-copy">
              <p>
                Multilingual content programs involve far more than translating words from one language into another. Organizations must select the right workflows, prepare content for localization, manage terminology, protect sensitive information, coordinate reviewers, measure quality, and deliver consistent experiences across languages and markets.
              </p>
              <p>
                The Stepes guide library brings these interconnected topics together in one practical resource. Whether you are planning your first translation project or managing a mature global content operation, you can find guidance to help you make informed decisions, reduce avoidable rework, and build multilingual processes that support both speed and quality.
              </p>
            </div>
          </div>

          <div className="all-guides-coverage" aria-label="Topics covered by the Stepes guide library">
            {coverageTopics.map((topic) => (
              <div className="all-guides-coverage-item" key={topic.label}>
                <span className="all-guides-coverage-icon">
                  <GuideIcon type={topic.type} />
                </span>
                <p className="all-guides-coverage-label">{topic.label}</p>
              </div>
            ))}
          </div>

          <p className="all-guides-overview-note">
            Each guide is designed to help business, localization, and technical teams understand not only what to do, but why it matters and how individual decisions affect quality, cost, security, scalability, and the customer experience.
          </p>
        </div>
      </section>

      <section className="all-guides-featured" id="featured-guides" aria-labelledby="featured-guides-title">
        <div className="all-guides-shell">
          <div className="all-guides-featured-head">
            <p className="all-guides-eyebrow">Featured Guide</p>
            <h2 id="featured-guides-title">Start With a High-Impact Enterprise Workflow</h2>
            <p className="all-guides-featured-intro">
              Explore a flagship guide that connects AI translation, professional linguists, quality controls, terminology, security, and enterprise governance—then continue with three foundational guides for translation, localization, and quality management.
            </p>
          </div>

          <div className="all-guides-featured-panel">
            <article className="all-guides-featured-primary">
              <span className="all-guides-featured-icon">
                <GuideIcon type="ai" />
              </span>
              <h3>AI + Human Translation Workflows for Enterprise Teams</h3>
              <p>
                Artificial intelligence is changing how multilingual content is produced, but successful enterprise translation requires more than sending text through a language model. The right workflow depends on the content, audience, language pair, business impact, regulatory environment, and acceptable level of risk.
              </p>
              <p>
                This guide explains how organizations can combine AI translation, translation memory, terminology management, professional linguistic review, automated quality checks, and human approval within a controlled enterprise process.
              </p>
              <p className="all-guides-benefit-label">Learn how to:</p>
              <ul className="all-guides-benefit-grid">
                {featuredBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
              <a
                className="all-guides-button all-guides-button-primary"
                href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"
              >
                Read the AI + Human Translation Workflows Guide
                <ArrowIcon />
              </a>
            </article>

            <aside className="all-guides-supporting" aria-label="Also recommended guides">
              <p className="all-guides-supporting-heading">Also Recommended</p>
              {supportingGuides.map((guide) => (
                <article className="all-guides-support-row" key={guide.title}>
                  <span className="all-guides-support-icon">
                    <GuideIcon type={guide.type} />
                  </span>
                  <div>
                    <p className="all-guides-support-category">{guide.category}</p>
                    <h3>{guide.title}</h3>
                    <p className="all-guides-support-description">{guide.description}</p>
                    <a className="all-guides-support-link" href={guide.href}>
                      {guide.linkLabel}
                      <ArrowIcon size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="all-guides-collections" id="guide-collections" aria-labelledby="guide-collections-title">
        <div className="all-guides-shell">
          <div className="all-guides-section-heading">
            <h2 id="guide-collections-title">Explore Guide Collections</h2>
            <p className="all-guides-section-intro">
              Start with the subject that best matches your current challenge. Each collection brings related guidance together so you can understand the topic, compare practical approaches, and continue into more specialized resources.
            </p>
          </div>

          <div className="all-guides-collection-grid">
            {guideCollections.map((collection) => (
              <article className="all-guides-collection-item" key={collection.title}>
                <span className="all-guides-collection-icon">
                  <GuideIcon type={collection.type} />
                </span>
                <h3>{collection.title}</h3>
                <p className="all-guides-collection-description">{collection.description}</p>
                <ul className="all-guides-topic-list" aria-label={`Popular ${collection.title}`}>
                  {collection.guides.map((guide) => (
                    <li key={guide.label}>
                      <a href={guide.href}>{guide.label}</a>
                    </li>
                  ))}
                </ul>
                <a className="all-guides-editorial-link" href={collection.href}>
                  {collection.ctaLabel}
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="all-guides-goals" id="find-your-guide" aria-labelledby="find-your-guide-title">
        <div className="all-guides-shell">
          <div className="all-guides-goals-head">
            <div>
                <h2 id="find-your-guide-title">Find the Right Guide for Your Goal</h2>
            </div>
            <p className="all-guides-goals-intro">
              You do not need to know the language of localization to find useful guidance. Choose the business outcome you are working toward and continue with the guides most relevant to your content, teams, technology, and level of risk.
            </p>
          </div>

          <div className="all-guides-goal-grid">
            {goalGuides.map((goal) => (
              <article className="all-guides-goal-item" key={goal.title}>
                <span className="all-guides-goal-icon">
                  <GuideIcon type={goal.type} />
                </span>
                <h3>{goal.title}</h3>
                <p className="all-guides-goal-description">{goal.description}</p>
                <ul className="all-guides-goal-links" aria-label={`Recommended guides for ${goal.title}`}>
                  {goal.guides.map(([label, href]) => (
                    <li key={label}>
                      <a href={href}>
                        <span>{label}</span>
                        <ArrowIcon size={15} />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="all-guides-library" id="guide-library" aria-labelledby="guide-library-title">
        <div className="all-guides-shell">
          <div className="all-guides-library-head">
            <div>
              <p className="all-guides-eyebrow">Complete Guide Directory</p>
              <h2 id="guide-library-title">Complete Translation, Localization, and Global Content Guide Library</h2>
            </div>
            <p className="all-guides-library-intro">
              Browse the full Stepes guide library by subject. Related resources are grouped together so you can compare approaches, follow a logical learning path, and connect strategic decisions with practical implementation.
            </p>
          </div>

          <nav className="all-guides-library-nav" aria-label="Guide library categories">
            {guideLibraryCategories.map((category) => (
              <a key={category.id} href={`https://www.stepes.com/resources/guides/#${category.id}`}>
                <span>{category.label}</span>
                <ArrowIcon size={15} />
              </a>
            ))}
          </nav>

          {guideLibraryCategories.map((category) => (
            <section className="all-guides-library-category" id={category.id} key={category.id} aria-labelledby={`${category.id}-title`}>
              <div className="all-guides-library-category-head">
                <p className="all-guides-library-category-label">{category.label}</p>
                <h3 id={`${category.id}-title`}>{category.title}</h3>
                <p className="all-guides-library-category-description">{category.description}</p>
                <a className="all-guides-editorial-link" href={category.hubHref}>
                  {category.hubLabel}
                  <ArrowIcon size={16} />
                </a>
              </div>
              <div className="all-guides-library-grid">
                {category.guides.map((guide) => (
                  <article className="all-guides-library-item" key={guide.title}>
                    <a className="all-guides-library-item-title" href={guide.href}>
                      <span>{guide.title}</span>
                      <ArrowIcon size={15} />
                    </a>
                    <p>{guide.description}</p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <section className="all-guides-paths" id="learning-paths" aria-labelledby="learning-paths-title">
        <div className="all-guides-shell">
          <div className="all-guides-paths-head">
            <div>
                <h2 id="learning-paths-title">Move From Individual Questions to a Connected Program</h2>
            </div>
            <p className="all-guides-paths-intro">
              Complex multilingual initiatives are easier to plan when the guidance follows a logical sequence. Use these curated paths to move from foundational decisions through implementation, quality control, governance, and continuous improvement.
            </p>
          </div>

          <div className="all-guides-path-grid">
            {learningPaths.map((path) => (
              <article className="all-guides-path-card" key={path.title}>
                <h3>{path.title}</h3>
                <p className="all-guides-path-description">{path.description}</p>
                <ol className="all-guides-path-steps">
                  {path.steps.map((step, index) => (
                    <li className="all-guides-path-step" key={step}>
                      <span className="all-guides-path-number">{String(index + 1).padStart(2, "0")}</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <a className="all-guides-editorial-link" href={path.href}>
                  {path.ctaLabel}
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="all-guides-teams" id="guides-for-teams" aria-labelledby="guides-for-teams-title">
        <div className="all-guides-shell">
          <div className="all-guides-teams-head">
            <div>
              <p className="all-guides-eyebrow">Guidance by Role</p>
              <h2 id="guides-for-teams-title">Guides for Enterprise Teams</h2>
            </div>
            <p className="all-guides-teams-intro">
              Different teams approach multilingual content from different starting points. Explore practical guide selections for the people responsible for localization operations, global marketing, product delivery, regulated content, supplier governance, and multilingual customer experiences.
            </p>
          </div>

          <div className="all-guides-team-grid">
            {teamGuideGroups.map((team) => (
              <article className="all-guides-team-item" key={team.title}>
                <h3>
                  <a className="all-guides-team-title-link" href={team.href}>
                    <span>{team.title}</span>
                    <ArrowIcon size={16} />
                  </a>
                </h3>
                <p className="all-guides-team-description">{team.description}</p>
                <p className="all-guides-team-recommended">Recommended Guides</p>
                <ul className="all-guides-team-links" aria-label={`Recommended guides for ${team.title}`}>
                  {team.guides.map(([label, href]) => (
                    <li key={label}>
                      <a href={href}>{label}</a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="all-guides-latest" id="evolving-priorities" aria-labelledby="evolving-priorities-title">
        <div className="all-guides-shell">
          <div className="all-guides-latest-head">
            <div>
              <p className="all-guides-eyebrow">Evolving Priorities</p>
              <h2 id="evolving-priorities-title">Guidance for Fast-Changing Translation Priorities</h2>
            </div>
            <p className="all-guides-latest-intro">
              Translation technology, AI capabilities, security requirements, international search practices, and global content operations continue to evolve. Explore focused guidance on the priorities that increasingly shape enterprise translation and localization decisions.
            </p>
          </div>

          <div className="all-guides-latest-layout">
            {priorityGuides.slice(0, 1).map((guide) => (
              <article className="all-guides-latest-feature" key={guide.title}>
                <span className="all-guides-latest-icon">
                  <GuideIcon type={guide.type} />
                </span>
                <p className="all-guides-eyebrow all-guides-latest-category">{guide.category}</p>
                <h3>{guide.title}</h3>
                <p className="all-guides-latest-feature-description">{guide.description}</p>
                <a className="all-guides-editorial-link" href={guide.href}>
                  {guide.linkLabel}
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}

            <div className="all-guides-latest-list">
              {priorityGuides.slice(1).map((guide) => (
                <article className="all-guides-latest-item" key={guide.title}>
                  <p className="all-guides-eyebrow all-guides-latest-category">{guide.category}</p>
                  <h3>
                    <a className="all-guides-latest-title-link" href={guide.href}>
                      <span>{guide.title}</span>
                      <ArrowIcon size={15} />
                    </a>
                  </h3>
                  <p className="all-guides-latest-item-description">{guide.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="all-guides-latest-footer">
            <a className="all-guides-editorial-link" href="https://www.stepes.com/resources/guides/#guide-library">
              Browse the Complete Guide Library
              <ArrowIcon size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="all-guides-guidance" id="how-we-develop-guidance" aria-labelledby="how-we-develop-guidance-title">
        <div className="all-guides-shell">
          <div className="all-guides-guidance-layout">
            <div>
              <p className="all-guides-eyebrow">Practical Expertise</p>
              <h2 id="how-we-develop-guidance-title">How Stepes Develops Its Guidance</h2>
              <p className="all-guides-guidance-intro">
                Stepes guides are created to help organizations solve practical multilingual content challenges. Our guidance draws on experience supporting translation and localization programs across industries, content types, languages, technologies, and levels of complexity.
              </p>
              <p className="all-guides-guidance-intro">
                The goal is not simply to explain terminology. It is to help your teams make better decisions about workflows, quality, technology, security, governance, and global content performance.
              </p>
            </div>

            <div className="all-guides-guidance-list">
              {guidancePrinciples.map((principle) => (
                <article className="all-guides-guidance-item" key={principle.title}>
                  <span className="all-guides-guidance-icon">
                    <GuideIcon type={principle.type} />
                  </span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="all-guides-guidance-resources">
            <p className="all-guides-guidance-resources-label">Related Stepes Resources</p>
            <nav className="all-guides-guidance-resource-grid" aria-label="Related Stepes trust and workflow resources">
              {guidanceResources.map(([label, href]) => (
                <a href={href} key={label}>
                  <span>{label}</span>
                  <ArrowIcon size={15} />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>


      <section className="all-guides-more-resources" id="more-resources" aria-labelledby="more-resources-title">
        <div className="all-guides-shell">
          <div className="all-guides-more-resources-head">
            <div>
                <h2 id="more-resources-title">More Resources From Stepes</h2>
            </div>
            <p className="all-guides-more-resources-intro">
              Continue from practical guides into reference tools, enterprise trust information, customer examples, and deeper educational formats. These resources help your teams move from initial research to project planning, supplier evaluation, and multilingual program development.
            </p>
          </div>

          <div className="all-guides-resource-directory">
            {moreResources.map((resource) => (
              <article className="all-guides-resource-item" key={resource.title}>
                <p className="all-guides-resource-category">{resource.category}</p>
                <h3>{resource.title}</h3>
                <p className="all-guides-resource-item-description">{resource.description}</p>
                <a className="all-guides-resource-link" href={resource.href}>
                  <span>{resource.linkLabel}</span>
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="all-guides-faq" id="frequently-asked-questions" aria-labelledby="frequently-asked-questions-title">
        <div className="all-guides-shell">
          <div className="all-guides-faq-layout">
            <div>
              <p className="all-guides-eyebrow">Frequently Asked Questions</p>
              <h2 id="frequently-asked-questions-title">Using the Stepes Guide Library</h2>
              <p className="all-guides-faq-intro">
                Find clear answers about the scope of the library, where to begin, how translation differs from localization, and how Stepes approaches AI, human review, regulated content, and enterprise localization planning.
              </p>
            </div>

            <div className="all-guides-faq-panel">
              {faqItems.map((item) => (
                <details className="all-guides-faq-item" key={item.question}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="all-guides-faq-toggle" aria-hidden="true" />
                  </summary>
                  <div className="all-guides-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="all-guides-cta" aria-labelledby="all-guides-cta-title">
        <div className="all-guides-shell">
          <div className="all-guides-cta-panel">
            <div className="all-guides-cta-inner">
              <p className="all-guides-eyebrow">Turn Guidance Into Action</p>
              <h2 id="all-guides-cta-title">Build a Stronger Global Content Program</h2>
              <p className="all-guides-cta-copy">
                Every organization has different content, languages, technologies, quality expectations, and operating requirements. Stepes can help you design a translation and localization approach that combines the right workflows, professional linguists, AI technology, terminology controls, quality processes, and enterprise support.
              </p>
              <div className="all-guides-cta-actions">
                <a className="all-guides-button all-guides-button-primary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                  <ArrowIcon />
                </a>
                <a className="all-guides-button all-guides-button-secondary" href="https://www.stepes.com/ai-human-translation-workflow/">
                  Explore AI + Human Workflows
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
