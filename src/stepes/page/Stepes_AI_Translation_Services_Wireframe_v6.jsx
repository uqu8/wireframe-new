import React, { useId, useState } from "react";

export const pageMetadata = {
  title: "AI Translation Services for Enterprise Content | Stepes",
  description:
    "Translate documents, websites, software, and technical content with Stepes DomainAI, terminology control, QA, and expert human review in 100+ languages.",
  canonical: "https://www.stepes.com/ai-translation-services/",
};

const Icon = ({ name, size = 22 }) => {
  const common = {
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

  const icons = {
    arrow: (
      <svg {...common}>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </svg>
    ),
    domainAI: (
      <svg {...common}>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9z" />
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 9.5V6M14.2 10.8l3-1.7M14.2 13.2l3 1.7M12 14.5V18M9.8 13.2l-3 1.7M9.8 10.8l-3-1.7" />
      </svg>
    ),
    document: (
      <svg {...common}>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h6" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
    memory: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
    terminology: (
      <svg {...common}>
        <path d="M4 5h10" />
        <path d="M9 5v14" />
        <path d="M5 19h8" />
        <path d="m15 15 2 2 4-5" />
      </svg>
    ),
    qa: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.8 2.9 8.1 7 10 4.1-1.9 7-5.2 7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    human: (
      <svg {...common}>
        <circle cx="12" cy="8" r="3" />
        <path d="M5 21c.8-4.3 3.2-6.5 7-6.5s6.2 2.2 7 6.5" />
      </svg>
    ),
    expert: (
      <svg {...common}>
        <path d="M12 3 9.6 8.1 4 9l4 3.9L7 18l5-2.6L17 18l-1-5.1L20 9l-5.6-.9z" />
      </svg>
    ),
    speed: (
      <svg {...common}>
        <path d="M5 16a8 8 0 1 1 14 0" />
        <path d="m12 12 4-4" />
        <path d="M4 20h16" />
      </svg>
    ),
    scale: (
      <svg {...common}>
        <path d="M4 18V8" />
        <path d="M10 18V4" />
        <path d="M16 18v-7" />
        <path d="M22 18V6" />
        <path d="M2 18h21" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v3" />
      </svg>
    ),
    api: (
      <svg {...common}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </svg>
    ),
    website: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 6.5h.01M10 6.5h.01" />
      </svg>
    ),
    software: (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="3" />
        <path d="M8 7h8M8 11h3M8 15h8" />
      </svg>
    ),
    technical: (
      <svg {...common}>
        <path d="m14.7 6.3 3-3 3 3-3 3" />
        <path d="M17.7 3.3 9 12" />
        <path d="M8.5 8.5 4 13l7 7 4.5-4.5" />
      </svg>
    ),
    training: (
      <svg {...common}>
        <path d="m3 8 9-5 9 5-9 5z" />
        <path d="M7 11v5c3 2 7 2 10 0v-5" />
        <path d="M21 8v7" />
      </svg>
    ),
    support: (
      <svg {...common}>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v4a2 2 0 0 0 2 2h2v-7H6a2 2 0 0 0-2 1" />
        <path d="M20 13v4a2 2 0 0 1-2 2h-2v-7h2a2 2 0 0 1 2 1" />
      </svg>
    ),
    marketing: (
      <svg {...common}>
        <path d="m4 13 12-6v10L4 13z" />
        <path d="M4 13v5h4v-3" />
        <path d="M18 9c1 1 1 5 0 6" />
      </svg>
    ),
    media: (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m10 9 5 3-5 3z" />
      </svg>
    ),
    lifeScience: (
      <svg {...common}>
        <path d="M9 3h6" />
        <path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    ),
    medicalDevice: (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="3" />
        <path d="M9 7h6" />
        <path d="M12 11v6M9 14h6" />
      </svg>
    ),
    legal: (
      <svg {...common}>
        <path d="M12 3v18" />
        <path d="M6 6h12" />
        <path d="m6 6-3 6h6z" />
        <path d="m18 6-3 6h6z" />
        <path d="M8 21h8" />
      </svg>
    ),
    financial: (
      <svg {...common}>
        <path d="M4 20h16" />
        <path d="M6 17V9M10 17V9M14 17V9M18 17V9" />
        <path d="m3 7 9-4 9 4z" />
      </svg>
    ),
    manufacturing: (
      <svg {...common}>
        <path d="M3 21V10l6 3V9l6 4V7l6 3v11z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </svg>
    ),
    retail: (
      <svg {...common}>
        <path d="M4 8h16l-1 13H5z" />
        <path d="M8 8a4 4 0 0 1 8 0" />
      </svg>
    ),
    government: (
      <svg {...common}>
        <path d="m3 9 9-5 9 5" />
        <path d="M5 10v8M9 10v8M15 10v8M19 10v8" />
        <path d="M3 20h18" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    plus: (
      <svg {...common}>
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    minus: (
      <svg {...common}>
        <path d="M5 12h14" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
};

const outcomes = [
  {
    icon: "scale",
    title: "Translate More Content",
    description:
      "Expand multilingual coverage across documents, digital channels, product experiences, support resources, and recurring enterprise communications.",
  },
  {
    icon: "speed",
    title: "Accelerate Global Delivery",
    description:
      "Move suitable content into translation faster, process multiple languages in parallel, and shorten recurring release cycles.",
  },
  {
    icon: "terminology",
    title: "Improve Language Consistency",
    description:
      "Apply approved terminology, previously translated content, product language, and locale guidance throughout production.",
  },
  {
    icon: "qa",
    title: "Maintain the Right Level of Control",
    description:
      "Match automation, professional review, subject-matter validation, and approval to the purpose and risk of each content type.",
  },
];

const workflowTiers = [
  {
    label: "AI-Accelerated Translation",
    title: "Fast Multilingual Access for Suitable Content",
    description:
      "Use AI translation, translation memory, approved terminology, and automated checks to provide rapid access to lower-risk or short-lived information.",
    examples: [
      "Internal reference materials",
      "Research and content discovery",
      "Draft documents",
      "Temporary communications",
      "High-volume informational content",
      "Lower-visibility operational materials",
    ],
    bestFor: "Speed, scale, discovery, and lower-risk multilingual access.",
  },
  {
    label: "Professionally Reviewed AI Translation",
    title: "Publish-Ready Content With Expert Linguistic Review",
    description:
      "Professional linguists compare the AI-generated translation with the source and validate meaning, completeness, terminology, fluency, tone, locale conventions, and technical elements.",
    examples: [
      "Corporate websites",
      "Product information",
      "Knowledge bases",
      "Customer-support content",
      "Technical documentation",
      "Software interfaces",
      "Training and e-commerce content",
    ],
    bestFor: "Content that must be accurate, natural, consistent, and ready for business use.",
  },
  {
    label: "Expert-Validated AI Translation",
    title: "Higher Assurance for Specialized and High-Impact Content",
    description:
      "Where AI is appropriate, Stepes can add qualified linguistic review, subject-matter expertise, terminology verification, additional QA, and formal approval workflows.",
    examples: [
      "Medical and life sciences materials",
      "Medical device documentation",
      "Legal and compliance content",
      "Financial communications",
      "Regulatory documentation",
      "Safety-related materials",
      "Specialized engineering content",
    ],
    bestFor: "Content requiring stronger linguistic, technical, regulatory, or professional validation.",
  },
];

const domainAICapabilities = [
  {
    title: "Content-Aware Workflow Recommendations",
    description:
      "Align AI translation, professional review, terminology controls, and QA with your content type, intended use, and quality requirements.",
  },
  {
    title: "Approved Language Asset Application",
    description:
      "Bring approved terminology, translation memory, and previously validated language into the workflow to strengthen multilingual consistency.",
  },
  {
    title: "Quality Risk Identification",
    description:
      "Identify content that may require stronger review, specialist expertise, additional QA, or a more human-led translation approach.",
  },
  {
    title: "Review-Level Guidance",
    description:
      "Help match professional linguistic review and subject-matter validation to the audience, complexity, visibility, and potential impact of the content.",
  },
];

const technologyItems = [
  {
    icon: "layers",
    title: "AI Translation Models",
    description:
      "Stepes can apply neural machine translation, large language models, and other approved translation technologies according to language performance, content structure, confidentiality, and the required level of validation.",
  },
  {
    icon: "memory",
    title: "Translation Memory",
    description:
      "Translation memory stores source content with its approved translation so identical or similar material can be reused or adapted across product releases, websites, software, documentation, and recurring programs.",
    link: {
      label: "Explore Translation Memory",
      href: "https://www.stepes.com/translation-memory/",
    },
  },
  {
    icon: "terminology",
    title: "Terminology Management",
    description:
      "Approved termbases can govern product names, technical terms, regulated phrases, abbreviations, preferred translations, prohibited variants, definitions, and market-specific guidance.",
    link: {
      label: "Explore Terminology Management",
      href: "https://www.stepes.com/terminology-management/",
    },
  },
  {
    icon: "qa",
    title: "Automated QA and Quality Signals",
    description:
      "Automated checks can flag repeatable issues involving terminology, missing content, numbers, tags, variables, placeholders, untranslated text, locale formatting, and inconsistent translations.",
    link: {
      label: "Explore Translation Quality Assurance",
      href: "https://www.stepes.com/translation-quality-assurance/",
    },
  },
  {
    icon: "human",
    title: "Professional Linguists",
    description:
      "Professional translators and reviewers compare the target with the source and evaluate meaning, completeness, terminology, fluency, tone, locale conventions, and readiness for the intended audience.",
  },
  {
    icon: "expert",
    title: "Subject-Matter Expertise",
    description:
      "Medical, legal, financial, scientific, engineering, and other specialist reviewers can be added when translation decisions require deeper domain knowledge or higher assurance.",
  },
];

const processSteps = [
  {
    title: "Define the Content and Intended Use",
    description:
      "Confirm languages, regional variants, audience, publication channel, subject matter, quality expectations, required human review, file formats, turnaround, confidentiality, and business or regulatory risk.",
  },
  {
    title: "Assess AI Translation Suitability",
    description:
      "Use DomainAI-supported content assessment together with professional judgment to review source clarity, repetition, terminology density, language-pair performance, specialized language, file structures, formatting requirements, and the consequences of an error.",
  },
  {
    title: "Prepare Linguistic Assets",
    description:
      "Organize translation memories, approved glossaries, style guides, reference translations, product names, do-not-translate lists, brand guidance, locale instructions, and prior approvals.",
  },
  {
    title: "Select the Production Workflow",
    description:
      "Determine the appropriate combination of AI translation, translation-memory reuse, professional translation, post-editing, subject-matter validation, automated QA, client approval, and file engineering.",
  },
  {
    title: "Generate the Initial Translation",
    description:
      "Process approved content through the selected workflow while protecting document hierarchy, tags, markup, variables, software keys, product identifiers, repeated content, links, and relevant formatting information.",
  },
  {
    title: "Apply Automated Quality Checks",
    description:
      "Identify missing or untranslated content, terminology deviations, changed numbers, locale inconsistencies, tag and placeholder errors, protected-content changes, and repeated-source inconsistencies.",
  },
  {
    title: "Perform Human Review Where Required",
    description:
      "Professional linguists and specialists evaluate accuracy, completeness, terminology, grammar, fluency, tone, style, audience fit, locale appropriateness, technical meaning, and usability.",
  },
  {
    title: "Validate, Deliver, and Improve",
    description:
      "Complete the required linguistic, technical, visual, or functional checks, deliver the agreed files, and incorporate approved corrections into future translation memories, termbases, and project instructions.",
  },
];

const qualityDimensions = [
  {
    title: "Accuracy and Completeness",
    description:
      "Identify mistranslations, omissions, unsupported additions, reversed meaning, incorrect relationships, ambiguous references, and changes in emphasis or scope.",
  },
  {
    title: "Terminology",
    description:
      "Verify product names, technical vocabulary, medical, legal, and financial language, brand expressions, regulated phrases, acronyms, and preferred or prohibited variants.",
  },
  {
    title: "Numbers and Factual Elements",
    description:
      "Review dates, measurements, units, currencies, percentages, dosages, quantities, names, addresses, product identifiers, references, and version numbers.",
  },
  {
    title: "Consistency and Locale Fit",
    description:
      "Align repeated content, interface terms, headings, regional vocabulary, spelling, tone, date and number formats, units, punctuation, and market-specific usage.",
  },
  {
    title: "Technical Integrity",
    description:
      "Protect tags, markup, software variables, placeholders, keys, links, character limits, plural rules, right-to-left behavior, encoding, and file structure.",
  },
  {
    title: "Final-Format Quality",
    description:
      "Check text expansion, page and slide layout, line breaks, tables, typography, truncation, interface display, image text, subtitle timing, and functional behavior in context.",
  },
];

const pilotSteps = [
  {
    title: "Select Representative Content",
    description:
      "Use realistic documents, strings, terminology, file formats, language pairs, tables, tags, variables, customer-facing passages, and specialized segments.",
  },
  {
    title: "Define Evaluation Criteria",
    description:
      "Measure accuracy, completeness, terminology, fluency, consistency, style, locale conventions, formatting, technical integrity, and fitness for purpose.",
  },
  {
    title: "Review With Qualified Linguists",
    description:
      "Native-language professionals compare the target with the source, with subject-matter expertise added for technical, medical, legal, financial, or regulated content.",
  },
  {
    title: "Recommend the Production Model",
    description:
      "Document which content can use greater automation, which requires professional or expert validation, and where human-led translation may be more effective.",
  },
];

const contentTypes = [
  {
    icon: "document",
    title: "Business Documents",
    description:
      "Translate reports, presentations, spreadsheets, policies, communications, proposals, reference materials, and other enterprise files with the required formatting and final-file QA.",
    links: [
      {
        label: "Professional Translation Services",
        href: "https://www.stepes.com/translation-services/",
      },
    ],
  },
  {
    icon: "website",
    title: "Websites and Knowledge Bases",
    description:
      "Support multilingual corporate websites, product pages, help centers, knowledge articles, customer portals, landing pages, and frequently updated web content.",
    links: [
      {
        label: "Website Translation Services",
        href: "https://www.stepes.com/website-translation-services/",
      },
    ],
  },
  {
    icon: "software",
    title: "Software and Applications",
    description:
      "Translate interfaces, messages, menus, prompts, release notes, help content, and product communications while protecting variables, keys, placeholders, markup, and application logic.",
    links: [
      {
        label: "Software Localization",
        href: "https://www.stepes.com/software-localization-services/",
      },
      {
        label: "App Localization",
        href: "https://www.stepes.com/app-localization-services/",
      },
    ],
  },
  {
    icon: "technical",
    title: "Technical Documentation",
    description:
      "Translate manuals, specifications, engineering documents, installation instructions, maintenance procedures, safety materials, and structured product documentation.",
    links: [
      {
        label: "Technical Translation Services",
        href: "https://www.stepes.com/technical-translation-services/",
      },
    ],
  },
  {
    icon: "training",
    title: "Training and eLearning",
    description:
      "Localize employee training, compliance courses, learning modules, assessments, instructor materials, narration scripts, subtitles, and downloadable resources.",
    links: [
      {
        label: "eLearning Localization",
        href: "https://www.stepes.com/elearning-training-translation-services/",
      },
    ],
  },
  {
    icon: "support",
    title: "Customer Support Content",
    description:
      "Translate knowledge articles, troubleshooting instructions, standard responses, service updates, chat content, customer communications, and other recurring support resources.",
    links: [
      {
        label: "Multilingual Customer Support",
        href: "https://www.stepes.com/solutions/multilingual-customer-support/",
      },
    ],
  },
  {
    icon: "marketing",
    title: "Marketing and E-Commerce",
    description:
      "Translate product descriptions, catalogs, landing pages, emails, campaigns, marketplace content, and customer communications, with human refinement where tone and persuasion matter.",
    links: [
      {
        label: "Marketing Translation Services",
        href: "https://www.stepes.com/marketing-translation-services/",
      },
    ],
  },
  {
    icon: "media",
    title: "Multimedia Content",
    description:
      "Translate scripts, transcripts, subtitles, captions, on-screen text, narration content, and supporting visual assets together with timing, voice-over, graphics, and delivery requirements.",
    links: [
      {
        label: "Multimedia Localization",
        href: "https://www.stepes.com/multimedia-localization/",
      },
    ],
  },
];

const industries = [
  {
    icon: "lifeScience",
    title: "Life Sciences and Healthcare",
    description:
      "Support appropriate clinical, scientific, operational, educational, and internal content while applying stronger professional validation to patient-facing, safety-related, regulatory, or medically significant materials.",
    link: {
      label: "Life Sciences Translation Services",
      href: "https://www.stepes.com/life-sciences-translation-services/",
    },
  },
  {
    icon: "medicalDevice",
    title: "Medical Devices",
    description:
      "Coordinate IFUs, eIFUs, labeling, software interfaces, technical documentation, training, quality content, and safety information with medical device terminology, version control, and final-format QA.",
    link: {
      label: "Medical Device Translation Services",
      href: "https://www.stepes.com/medical-device-translation-services/",
    },
  },
  {
    icon: "legal",
    title: "Legal and Compliance",
    description:
      "Translate contracts, policies, compliance communications, legal reference materials, and corporate documentation with careful treatment of obligations, definitions, conditions, and jurisdiction-sensitive language.",
    link: {
      label: "Legal Translation Services",
      href: "https://www.stepes.com/legal-translation-services/",
    },
  },
  {
    icon: "financial",
    title: "Financial Services and Insurance",
    description:
      "Support banking communications, insurance materials, reports, policies, investor information, fintech content, and compliance training with terminology and numerical controls.",
    link: {
      label: "Financial Translation Services",
      href: "https://www.stepes.com/financial-translation-services/",
    },
  },
  {
    icon: "manufacturing",
    title: "Manufacturing and Engineering",
    description:
      "Translate manuals, specifications, product content, safety information, maintenance instructions, training, and supplier communications with technical terminology and file-aware QA.",
    link: {
      label: "Manufacturing Translation Services",
      href: "https://www.stepes.com/manufacturing-translation-services/",
    },
  },
  {
    icon: "software",
    title: "Software and SaaS",
    description:
      "Connect AI translation, translation memory, terminology, software-file processing, professional review, and linguistic testing for interfaces, documentation, support content, and recurring releases.",
    link: {
      label: "Software and SaaS Translation",
      href: "https://www.stepes.com/software-saas-translation-services/",
    },
  },
  {
    icon: "retail",
    title: "Retail and E-Commerce",
    description:
      "Scale frequently changing product catalogs, marketplace listings, promotions, policies, customer support, and digital commerce experiences across global markets.",
    link: {
      label: "Retail and E-Commerce Translation",
      href: "https://www.stepes.com/retail-ecommerce-translation-services/",
    },
  },
  {
    icon: "government",
    title: "Government and Public Sector",
    description:
      "Support multilingual public information, digital services, training, program materials, internal communications, and community outreach with appropriate accessibility, confidentiality, and quality review.",
    link: {
      label: "Government Translation Services",
      href: "https://www.stepes.com/government-translation-services/",
    },
  },
];

const languages = [
  "Spanish and regional Spanish",
  "French and French Canadian",
  "Portuguese and Brazilian Portuguese",
  "Simplified and Traditional Chinese",
  "Japanese",
  "Korean",
  "German",
  "Italian",
  "Dutch and Flemish",
  "Arabic",
  "Hindi",
  "Vietnamese",
  "Thai",
  "Indonesian",
  "Turkish",
  "Polish",
  "Nordic languages",
  "Eastern European languages",
  "Languages across the Middle East and Africa",
];

const fileGroups = [
  {
    title: "Business and Office Documents",
    items: ["Microsoft Word", "PowerPoint", "Excel", "OpenDocument files", "Text and tabular data", "Cloud-document exports"],
  },
  {
    title: "PDFs and Scanned Content",
    items: ["Text-based PDFs", "Scanned PDFs", "Forms", "Image-based documents", "OCR workflows", "Reconstructed editable output"],
  },
  {
    title: "Design and Publishing Files",
    items: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "QuarkXPress", "Multilingual desktop publishing", "Final visual QA"],
  },
  {
    title: "Software and Structured Content",
    items: ["JSON", "XML", "YAML", "XLIFF", "HTML", "Resource and localization exchange files"],
  },
  {
    title: "Technical, Multimedia, and eLearning",
    items: ["DITA and FrameMaker", "MadCap Flare", "Markdown", "Subtitle files", "Time-coded scripts", "SCORM and courseware formats"],
  },
];

const enterpriseCapabilities = [
  "Centralized translation requests",
  "Content-aware workflow guidance",
  "Translation memory",
  "Terminology management",
  "Workflow routing",
  "Professional review",
  "Quality assurance",
  "User roles and approvals",
  "APIs and integrations",
  "Reporting and analytics",
  "Recurring program support",
];

const securityControls = [
  {
    title: "Controlled Content Intake",
    description:
      "Submit files through approved online or enterprise channels together with language, deadline, review, and handling requirements.",
  },
  {
    title: "Authorized Project Access",
    description:
      "Limit files, instructions, comments, and deliverables to approved project participants according to their responsibilities.",
  },
  {
    title: "Confidentiality Requirements",
    description:
      "Apply confidentiality obligations and project-specific requirements to professional linguists, reviewers, and delivery teams.",
  },
  {
    title: "Approved Translation Workflows",
    description:
      "Establish the authorized AI approach, technology environment, linguistic resources, human-review steps, and handling instructions before production begins.",
  },
  {
    title: "Controlled Language Assets",
    description:
      "Govern translation memories, termbases, reviewer comments, approved translations, and reusable multilingual resources with the same care as project files.",
  },
  {
    title: "Secure Delivery and Retention",
    description:
      "Manage delivery, retention, deletion, and approved language-asset reuse according to agreed enterprise and project requirements.",
  },
];

const whyStepes = [
  {
    title: "Stepes DomainAI + Human Workflows",
    description:
      "DomainAI works within a managed process that coordinates translation technology, approved language assets, professional linguists, review, QA, formatting, project management, and delivery.",
  },
  {
    title: "Professional Language Expertise",
    description:
      "Qualified linguists interpret meaning, resolve ambiguity, apply terminology, adapt tone, and determine whether the translation is suitable for its audience.",
  },
  {
    title: "Translation Memory and Terminology Control",
    description:
      "Previously approved language helps align new content with established product, technical, brand, legal, medical, financial, and regulated terminology.",
  },
  {
    title: "Risk-Based Workflow Design",
    description:
      "The production model is aligned with the content, language pair, audience, visibility, complexity, and consequences of an error.",
  },
  {
    title: "Industry-Specific Support",
    description:
      "Specialist resources can be matched to regulated, technical, scientific, financial, legal, commercial, and customer-facing content.",
  },
  {
    title: "Enterprise Quality Controls",
    description:
      "Automated QA, professional linguistic review, subject-matter validation, file-aware checks, and documented approvals can be applied according to the project.",
  },
  {
    title: "100+ Languages",
    description:
      "Support major commercial languages, regional variants, and less commonly served markets within one global program.",
  },
  {
    title: "Flexible Delivery Models",
    description:
      "Use Stepes for one-time projects, recurring programs, AI-plus-human translation, human-led translation, client-provided AI output, MTPE, or connected enterprise workflows.",
  },
];

const relatedServices = [
  {
    title: "AI Translation Platform",
    description:
      "The connected technology environment for Stepes DomainAI, translation memory, terminology management, human review, quality assurance, APIs, project visibility, and enterprise workflows.",
    href: "https://www.stepes.com/ai-translation-platform/",
  },
  {
    title: "Machine Translation Post-Editing",
    description:
      "Professional correction and validation of translations generated by your own AI model, machine translation engine, localization platform, or another provider.",
    href: "https://www.stepes.com/machine-translation-post-editing/",
  },
  {
    title: "Multilingual AI Output Review",
    description:
      "Evaluation, classification, correction, scoring, and approval of responses from chatbots, virtual assistants, generative AI applications, and multilingual language models.",
    href: "https://www.stepes.com/multilingual-ai-output-review/",
  },
  {
    title: "LLM Evaluation Services",
    description:
      "Structured multilingual evaluation across prompts, responses, languages, datasets, model behaviors, and intended use cases.",
    href: "https://www.stepes.com/multilingual-llm-evaluation-services/",
  },
  {
    title: "AI and Machine Learning Translation Services",
    description:
      "Multilingual data, annotation, model evaluation, linguistic review, and international product support for organizations developing AI products.",
    href: "https://www.stepes.com/ai-machine-learning-translation-services/",
  },
];

const faqs = [
  {
    question: "What are AI translation services?",
    answer:
      "AI translation services use artificial intelligence to accelerate the conversion of content from one language into another within a managed production workflow. Depending on the project, the process can combine neural machine translation, large language models, translation memory, approved terminology, automated quality checks, professional review, subject-matter validation, file engineering, and final delivery. Unlike a standalone online tool, a managed service addresses the content’s purpose, target market, quality requirements, file structure, confidentiality, and approval process.",
  },
  {
    question: "How accurate is AI translation?",
    answer:
      "There is no single accuracy level that applies to every AI translation. Performance can vary by language pair, locale, subject matter, source clarity, sentence complexity, terminology, context, model, file format, available translation memory, and intended use. AI output can read fluently while still containing mistranslations, omissions, additions, inconsistent terms, numerical errors, or subtle changes in meaning. Customer-facing, technical, regulated, and high-impact content generally requires professional review appropriate to its use.",
  },
  {
    question: "What is the difference between AI translation and machine translation?",
    answer:
      "Machine translation generally refers to automated systems that convert text from one language to another. AI translation is a broader term that can include neural machine translation, generative AI, large language models, contextual processing, language-asset application, quality analysis, and workflow automation. For enterprise programs, the more important question is whether the chosen technology performs appropriately for the content, language pair, security requirements, and required validation.",
  },
  {
    question: "What is Stepes DomainAI?",
    answer:
      "Stepes DomainAI is the content-aware translation intelligence used within Stepes enterprise workflows. It helps assess content, apply translation memory and approved terminology, identify quality risks, and guide the level of professional review appropriate for the intended use. DomainAI operates within a managed process in which professional linguists, subject-matter experts, project teams, and client approvers provide the judgment and validation required for business-critical content.",
  },
  {
    question: "Does AI translation replace professional translators?",
    answer:
      "AI can reduce repetitive work, accelerate first-pass translation, and increase multilingual capacity, but it does not remove the need for professional translators in every use case. Linguists remain important where the translation must preserve precise meaning, approved terminology, tone, context, cultural appropriateness, technical information, legal obligations, medical content, brand voice, or regulatory requirements.",
  },
  {
    question: "When does AI translation need human review?",
    answer:
      "Professional review is generally appropriate for customer-facing, publicly published, technical, operational, brand-sensitive, medical, scientific, legal, contractual, financial, regulatory, safety-related, specialized, or otherwise high-impact content. Lower-risk, short-lived, or internal content may be suitable for greater automation when stakeholders understand the limitations and the source material is appropriate.",
  },
  {
    question: "What is the difference between AI Translation Services and MTPE?",
    answer:
      "AI Translation Services is an end-to-end service in which Stepes assesses the content, selects the workflow, prepares language assets, manages the initial translation, applies review and quality controls, and delivers the completed multilingual content. Machine translation post-editing begins with an existing AI- or machine-generated translation and focuses on professional correction according to the required quality level.",
  },
  {
    question: "Can Stepes review translations generated by our own AI system?",
    answer:
      "Yes. Stepes can review translations generated by an internal AI model, enterprise language platform, commercial machine translation engine, large language model, translation management system, or another provider. The workflow can apply your translation memory, terminology, style guide, language instructions, quality criteria, and acceptance thresholds without requiring you to replace your existing technology.",
  },
  {
    question: "Can Stepes work with LLM-generated translations?",
    answer:
      "Yes. Stepes can professionally review and correct translations generated by large language models. When the goal is an approved final translation, MTPE or an AI-plus-human translation workflow may be appropriate. When the goal is to compare models, score responses, classify errors, or measure multilingual model performance, LLM evaluation or AI output review may be the better service.",
  },
  {
    question: "Can AI translation preserve document formatting?",
    answer:
      "Stepes supports file-aware workflows for common business documents, publishing files, structured technical content, software resources, localization exchange files, multimedia, and eLearning content. The required process depends on the source file. Some files can move directly through translation, while others require text extraction, OCR, conversion, parser configuration, desktop publishing, image editing, reintegration, visual QA, or functional validation. Native editable files generally provide better control than flattened PDFs or images.",
  },
  {
    question: "Can AI translation be used for medical, legal, or financial content?",
    answer:
      "AI may support appropriate parts of the workflow for medical, legal, financial, and other specialized content, but it should not automatically be treated as the final authority. High-impact content often requires qualified professional review, approved terminology, subject-matter expertise, additional QA, and formal approval according to its intended use. Stepes assesses the content, audience, language pair, regulatory context, and consequences of an error before recommending the workflow.",
  },
  {
    question: "How do translation memory and terminology improve AI translation?",
    answer:
      "Translation memory makes previously approved translations available for reuse when identical or similar content appears again. Terminology management defines how product names, technical terms, regulated language, brand expressions, acronyms, and specialized concepts should be translated. Together, these assets provide organization-specific language that can improve consistency across AI translation, professional review, and future releases.",
  },
  {
    question: "Is AI translation suitable for confidential content?",
    answer:
      "Confidential AI translation requires careful consideration of how files are submitted, where content is processed, which technologies are authorized, who can access the project, whether external models are involved, how reviewers are assigned, how files and language assets are retained, and which contractual or regulatory requirements apply. Stepes can configure controlled enterprise workflows with approved production processes and client-specific handling instructions.",
  },
  {
    question: "Which languages and file formats does Stepes support?",
    answer:
      "Stepes supports more than 100 languages and regional variants, together with a wide range of business documents, presentations, spreadsheets, PDFs, scans, publishing files, structured technical content, software resource files, website content, localization exchange files, multimedia, eLearning, and custom formats. A representative source file helps confirm the appropriate extraction, translation, reintegration, formatting, and quality workflow.",
  },
  {
    question: "Can we test AI translation before launching a larger program?",
    answer:
      "Yes. A pilot can evaluate representative content, language pairs, terminology, file structures, and quality requirements before a broader rollout. Stepes can help identify which content is suitable for AI, which errors occur most often, how much professional review is required, which terminology assets are missing, whether technical structures are protected, and where human-led translation may be more appropriate.",
  },
  {
    question: "How much do AI translation services cost, and how quickly can they be delivered?",
    answer:
      "Pricing and turnaround depend on source volume, language pair, locale, repetition, translation-memory leverage, subject matter, AI suitability, required human review, file format, engineering and formatting, quality requirements, number of languages, and ongoing workflow needs. AI can accelerate production, but delivery also depends on terminology preparation, specialist review, final QA, and approvals. Upload representative files for an accurate quote and delivery plan.",
  },
];

function SectionHeader({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="button button--primary" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a className="button button--secondary" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function HeroWorkflowVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Stepes DomainAI translation workflow from source content through language assets, quality controls, and professional review">
      <div className="visual-topbar">
        <span className="visual-status-dot" />
        <span>DomainAI-Guided Translation Workflow</span>
      </div>
      <div className="visual-source-panel">
        <div className="visual-icon"><Icon name="document" size={20} /></div>
        <div>
          <span className="visual-label">SOURCE CONTENT</span>
          <strong>Product Documentation</strong>
          <small>DOCX · 12,840 words · 8 languages</small>
        </div>
      </div>
      <div className="visual-flow-line" aria-hidden="true" />
      <div className="visual-engine-grid">
        <div className="visual-engine-card">
          <Icon name="memory" size={20} />
          <span>Translation Memory</span>
          <strong>Approved language reused</strong>
        </div>
        <div className="visual-engine-card visual-engine-card--active">
          <Icon name="domainAI" size={20} />
          <span>Stepes DomainAI</span>
          <strong>Content-aware workflow guidance</strong>
        </div>
        <div className="visual-engine-card">
          <Icon name="terminology" size={20} />
          <span>Terminology</span>
          <strong>Preferred terms applied</strong>
        </div>
      </div>
      <div className="visual-review-row">
        <div className="visual-review-item">
          <span className="visual-review-icon"><Icon name="qa" size={20} /></span>
          <div><span>Automated QA</span><strong>Structure and terminology checked</strong></div>
        </div>
        <div className="visual-review-item">
          <span className="visual-review-icon"><Icon name="human" size={20} /></span>
          <div><span>Professional Review</span><strong>Meaning and audience fit validated</strong></div>
        </div>
      </div>
      <div className="visual-delivery">
        <div>
          <span className="visual-label">MULTILINGUAL DELIVERY</span>
          <strong>8 locale-ready files</strong>
        </div>
        <div className="visual-language-stack" aria-hidden="true">
          <span>DE</span><span>FR</span><span>JA</span><span>ES</span>
        </div>
      </div>
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-illustration">
      <img
        src="ai_powered_global_content_localization.png"
        alt="Illustration showing source content flowing through Stepes DomainAI, approved language assets, professional review, and multilingual delivery"
      />
    </div>
  );
}

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const contentId = useId();
  return (
    <div className={`faq-item ${isOpen ? "faq-item--open" : ""}`}>
      <button
        type="button"
        className="faq-question"
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <span>{item.question}</span>
        <span className="faq-toggle"><Icon name={isOpen ? "minus" : "plus"} size={20} /></span>
      </button>
      <div id={contentId} className="faq-answer" hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function StepesAITranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="ai-translation-page">
      <style>{styles}</style>

      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">ENTERPRISE AI TRANSLATION</div>
            <h1>AI Translation Services for Enterprise Content</h1>
            <p className="hero-lead">
              Translate documents, websites, software, technical content, and global communications faster with Stepes DomainAI, approved terminology, translation memory, quality assurance, and professional human review.
            </p>
            <p className="hero-support">
              From a one-time multilingual project to a connected enterprise program, Stepes combines content-aware AI translation intelligence with professional language expertise to apply the right workflow for your content, audience, quality expectations, and business risk.
            </p>
            <div className="hero-actions">
              <PrimaryButton href="https://app.stepes.com/quote/">Get an AI Translation Quote</PrimaryButton>
              <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to an AI Translation Expert</SecondaryButton>
            </div>
            <div className="hero-proof" aria-label="Service highlights">
              <span>100+ Languages</span>
              <span>DomainAI + Human Expertise</span>
              <span>Industry-Specific Expertise</span>
              <span>Secure Enterprise Delivery</span>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="trust-strip" aria-label="Stepes quality and service credentials">
        <div className="shell trust-strip__inner">
          {["ISO 17100", "ISO 9001", "ISO 13485", "100+ Languages", "AI + Human", "Secure Workflows"].map((item) => (
            <div className="trust-item" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="section section--overview">
        <div className="shell overview-grid">
          <div className="overview-heading">
            <SectionHeader
              title="Enterprise AI Translation Built Around Your Content"
              intro="AI translation is most effective when the technology, language assets, professional expertise, and quality controls are designed around the content’s purpose—not applied as a one-size-fits-all shortcut."
            />
          </div>
          <div className="overview-content">
            <p className="body-large">
              AI translation services use artificial intelligence to accelerate multilingual content production within a managed workflow. Depending on your requirements, that workflow can combine neural machine translation, large language models, translation memory, approved terminology, automated quality checks, professional linguistic review, subject-matter validation, file engineering, and final-format quality assurance.
            </p>
            <p>
              The objective is not simply to generate translated text. It is to deliver multilingual content that is appropriate for its audience, consistent with your approved language, technically intact, and ready for its intended use.
            </p>
            <p>
              A high-volume internal knowledge base, a public product page, a software interface, and a regulated medical document should not automatically follow the same production process. Stepes evaluates what the content does, who will read it, and what could happen if the translation is incomplete or incorrect before recommending a workflow.
            </p>
            <p>
              Stepes DomainAI adds content-aware intelligence to this process by helping assess content, apply approved terminology and translation memory, identify quality risks, and recommend the appropriate level of professional review within a managed Stepes workflow.
            </p>
          </div>
        </div>
        <div className="shell outcomes-grid">
          {outcomes.map((item) => (
            <article className="outcome-item" key={item.title}>
              <div className="icon-surface"><Icon name={item.icon} /></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dark workflow-section">
        <div className="shell">
          <SectionHeader
            eyebrow="WORKFLOW DESIGN"
            title="Choose the Right Level of AI and Human Review"
            intro="Stepes combines content-aware workflow guidance with professional project and linguistic judgment to select the production model according to the content’s audience, visibility, language pair, complexity, regulatory exposure, and consequences of an error."
            align="center"
            dark
          />
          <div className="workflow-tier-grid">
            {workflowTiers.map((tier, index) => (
              <article className="workflow-tier" key={tier.label}>
                <div className="workflow-tier__index">0{index + 1}</div>
                <div className="workflow-tier__label">{tier.label}</div>
                <h3>{tier.title}</h3>
                <p>{tier.description}</p>
                <ul className="check-list check-list--dark">
                  {tier.examples.map((example) => (
                    <li key={example}><Icon name="check" size={18} /><span>{example}</span></li>
                  ))}
                </ul>
                <div className="best-for"><strong>Best for:</strong> {tier.bestFor}</div>
              </article>
            ))}
          </div>
          <div className="workflow-note">
            <p>
              AI is not assumed to be suitable for every high-impact document. Stepes reviews the content, intended use, language pair, available references, and required assurance level before recommending the workflow.
            </p>
            <ArrowLink href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/" className="editorial-link--light">
              Learn How AI and Human Review Work Together
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="section technology-section">
        <div className="shell">
          <SectionHeader
            title="Stepes DomainAI, Translation Technology, and Approved Language Assets"
            intro="Stepes combines content-aware AI guidance, appropriate translation models, reusable language assets, automated quality controls, and professional expertise. No single model or engine is assumed to be best for every language, subject, or use case."
          />
          <div className="domainai-workflow-panel">
            <HeroWorkflowVisual />
          </div>
          <div className="domainai-feature">
            <div className="domainai-feature__copy">
              <div className="domainai-feature__icon"><Icon name="domainAI" size={28} /></div>
              <h3>Content-Aware Translation Intelligence Inside a Managed Workflow</h3>
              <p>
                DomainAI helps Stepes adapt multilingual workflows to different content types, industries, terminology requirements, and quality expectations. It helps determine where AI can accelerate production, where approved language assets should guide the output, and where professional or specialist review is required.
              </p>
              <ArrowLink href="https://www.stepes.com/ai-translation-platform/">Explore DomainAI on the Stepes AI Translation Platform</ArrowLink>
            </div>
            <div className="domainai-capabilities">
              {domainAICapabilities.map((item) => (
                <article className="domainai-capability" key={item.title}>
                  <span><Icon name="check" size={17} /></span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="technology-grid">
            {technologyItems.map((item) => (
              <article className="technology-item" key={item.title}>
                <div className="technology-item__icon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link ? <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft process-section">
        <div className="shell">
          <div className="process-top">
            <SectionHeader
              title="How Stepes AI Translation Services Work"
              intro="Stepes manages AI translation as a complete multilingual production process—from content assessment and language-asset preparation through professional review, technical validation, and delivery."
            />
            <div className="process-summary">
              <div className="process-summary__icon"><Icon name="layers" size={26} /></div>
              <p>
                Content-aware analysis helps guide workflow decisions, while Stepes project teams and linguists remain accountable for final scope, review, quality, and delivery. Different content within the same program can follow different paths.
              </p>
            </div>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <div className="process-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="process-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section quality-section">
        <div className="shell quality-grid">
          <div className="quality-intro">
            <SectionHeader
              title="AI Translation Quality Beyond Fluent-Sounding Text"
              intro="AI-generated translations can appear natural while still containing errors that matter. Quality must preserve meaning, instructions, terminology, structure, and business intent—not merely produce polished sentences."
            />
            <p>
              A warning can lose an important condition. A negative statement can be reversed. A product code, measurement, variable, or cross-reference can change. A translation can also be linguistically correct but unsuitable for the intended locale or audience.
            </p>
            <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Explore Stepes Translation Quality Assurance</ArrowLink>
          </div>
          <div className="quality-matrix">
            {qualityDimensions.map((item) => (
              <article className="quality-row" key={item.title}>
                <span className="quality-marker"><Icon name="check" size={17} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section pilot-section">
        <div className="shell pilot-panel">
          <div className="pilot-copy">
            <div className="eyebrow">AI TRANSLATION PILOT</div>
            <h2>Test AI Translation Before You Scale</h2>
            <p className="section-intro">
              A representative pilot helps your organization make evidence-based decisions before applying AI translation across larger volumes, more languages, or business-critical content.
            </p>
            <p>
              Instead of testing only simple sentences, Stepes can evaluate the terminology, file formats, language pairs, structures, and quality challenges found in the real production program. The results show where AI creates value, how approved language assets should support the workflow, how much professional review is required, and where a human-led approach may be more effective.
            </p>
            <PrimaryButton href="https://www.stepes.com/contact-us/">Plan an AI Translation Pilot</PrimaryButton>
          </div>
          <div className="pilot-steps">
            {pilotSteps.map((step, index) => (
              <article className="pilot-step" key={step.title}>
                <span className="pilot-step__number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="shell">
          <SectionHeader
            title="AI Translation for Documents, Digital Content, and Product Experiences"
            intro="Stepes supports AI-powered translation workflows across the content enterprises create, update, publish, and manage every day."
            align="center"
          />
          <div className="content-type-grid">
            {contentTypes.map((item) => (
              <article className="content-type" key={item.title}>
                <div className="content-type__icon"><Icon name={item.icon} /></div>
                <div className="content-type__body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="link-group">
                    {item.links.map((link) => (
                      <ArrowLink href={link.href} key={link.href}>{link.label}</ArrowLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark industry-section">
        <div className="shell">
          <SectionHeader
            title="Industry-Specific AI Translation With the Right Level of Review"
            intro="Every industry has its own terminology, content risks, approval requirements, and expectations for multilingual quality. Stepes aligns the workflow with the subject matter and intended use."
            dark
          />
          <div className="industry-grid">
            {industries.map((item) => (
              <article className="industry-item" key={item.title}>
                <div className="industry-item__icon"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.link.href} className="editorial-link--light">{item.link.label}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section language-files-section">
        <div className="shell language-files-grid">
          <div className="language-panel">
            <SectionHeader
              title="AI Translation in 100+ Languages"
              intro="Stepes supports major commercial languages, important regional variants, and less commonly served markets for global business, digital content, technical documentation, regulated industries, and customer communication."
            />
            <div className="language-list">
              {languages.map((language) => <span key={language}>{language}</span>)}
            </div>
            <p>
              The correct target locale can affect vocabulary, terminology, spelling, tone, dates, units, currencies, typography, and regulatory conventions. AI performance and recommended review levels can also vary by language pair, subject matter, source quality, available linguistic assets, model support, and intended use.
            </p>
            <ArrowLink href="https://www.stepes.com/translation-languages/">View All Translation Languages</ArrowLink>
          </div>
          <div className="file-panel">
            <div className="file-panel__heading">
              <h2>Preserve the Structure of Enterprise Content</h2>
              <p className="section-intro">
                Enterprise files can contain styles, links, formulas, variables, tags, code, timing data, graphics, tables, and publishing instructions that matter as much as the translated words.
              </p>
            </div>
            <div className="file-groups">
              {fileGroups.map((group) => (
                <article className="file-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(" · ")}</p>
                </article>
              ))}
            </div>
            <p>
              Complex files may require text extraction, OCR, conversion, file engineering, parser configuration, desktop publishing, image editing, reintegration, visual QA, or functional validation. Native editable source files generally provide better control than flattened PDFs or images.
            </p>
            <ArrowLink href="https://www.stepes.com/resources/file-format-support/">Explore Translation File Format Support</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section--soft programs-section">
        <div className="shell">
          <SectionHeader
            title="From One-Time Projects to Connected AI Translation Programs"
            intro="Stepes can support a single document as well as recurring multilingual operations across teams, content systems, products, and markets."
            align="center"
          />
          <div className="program-paths">
            <article className="program-path program-path--quote">
              <div className="program-path__icon"><Icon name="document" size={24} /></div>
              <h3>Order AI Translation Online</h3>
              <p>
                Upload defined project files, select the source and target languages, describe the required deliverables, and receive a quote for the appropriate translation and review workflow.
              </p>
              <ul className="quiet-list">
                <li>Individual documents and standard files</li>
                <li>Known language and delivery requirements</li>
                <li>One-time or clearly scoped projects</li>
                <li>Fast project initiation</li>
              </ul>
              <PrimaryButton href="https://app.stepes.com/quote/">Order AI Translation Online</PrimaryButton>
            </article>
            <article className="program-path">
              <div className="program-path__icon"><Icon name="api" size={24} /></div>
              <h3>Build an Ongoing Enterprise Workflow</h3>
              <p>
                Connect recurring content, multiple teams, software releases, knowledge bases, review groups, APIs, DomainAI workflow intelligence, and centralized language assets within a managed enterprise program.
              </p>
              <div className="capability-list">
                {enterpriseCapabilities.map((item) => (
                  <span key={item}><Icon name="check" size={16} />{item}</span>
                ))}
              </div>
              <div className="program-links">
                <ArrowLink href="https://www.stepes.com/ai-translation-platform/">AI Translation Platform</ArrowLink>
                <ArrowLink href="https://www.stepes.com/translation-api/">Translation API</ArrowLink>
                <ArrowLink href="https://www.stepes.com/translation-workflow-automation/">Workflow Automation</ArrowLink>
                <ArrowLink href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics</ArrowLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section security-section">
        <div className="shell security-grid">
          <div className="security-copy">
            <div className="eyebrow">SECURITY &amp; GOVERNANCE</div>
            <h2>Secure AI Translation for Enterprise Content</h2>
            <p className="section-intro">
              Enterprise AI translation should be evaluated not only by output quality, but also by how content, people, technology, files, and reusable language assets are managed.
            </p>
            <p>
              Organizations with sensitive, regulated, or confidential content can discuss vendor onboarding, approved technology environments, workflow controls, contractual requirements, retention, and project-specific security needs with the Stepes enterprise team.
            </p>
            <ArrowLink href="https://www.stepes.com/security/">Review Stepes Enterprise Security</ArrowLink>
          </div>
          <div className="security-controls">
            {securityControls.map((control) => (
              <article className="security-control" key={control.title}>
                <span className="security-control__icon"><Icon name="lock" size={18} /></span>
                <div>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell why-grid">
          <div className="why-intro">
            <SectionHeader
              title="Why Global Teams Choose Stepes for AI Translation"
              intro="Stepes combines AI translation technology with professional language expertise, controlled linguistic assets, project management, and quality assurance to deliver multilingual content—not just raw automated output."
            />
            <div className="credential-band">
              <div><strong>ISO 17100</strong><span>Translation Services</span></div>
              <div><strong>ISO 9001</strong><span>Quality Management</span></div>
              <div><strong>ISO 13485</strong><span>Medical Device Quality</span></div>
              <div><strong>100+</strong><span>Languages</span></div>
            </div>
          </div>
          <div className="why-list">
            {whyStepes.map((item) => (
              <article className="why-item" key={item.title}>
                <span className="why-item__marker"><Icon name="check" size={17} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft related-section">
        <div className="shell">
          <SectionHeader
            title="Related AI and Language Services"
            intro="Choose the Stepes platform or service that matches whether you need a managed translation workflow, professional correction of existing AI output, model evaluation, or multilingual support for an AI product."
          />
          <div className="related-list">
            {relatedServices.map((service) => (
              <a className="related-service" href={service.href} key={service.title}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="related-service__arrow"><Icon name="arrow" size={20} /></span>
              </a>
            ))}
          </div>
          <div className="insights-callout">
            <div>
              <div className="eyebrow">AI TRANSLATION INSIGHTS</div>
              <h3>Plan Secure, Quality-Controlled AI Translation</h3>
              <p>Explore practical guidance on AI translation quality, model selection, terminology, enterprise security, governance, human validation, and measurable business value.</p>
            </div>
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/">Explore AI Translation Insights</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <SectionHeader
              title="Frequently Asked Questions About AI Translation Services"
              intro="Clear answers to common questions about AI translation quality, human review, file support, security, pricing, and enterprise program planning."
            />
            <p className="faq-support">
              For a project-specific recommendation, upload representative files and share your target languages, intended use, and delivery requirements.
            </p>
            <ArrowLink href="https://app.stepes.com/quote/">Get an AI Translation Quote</ArrowLink>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                item={item}
                index={index}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
                key={item.question}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell final-cta">
          <div className="final-cta__copy">
            <h2>Translate Faster Without Giving Up Quality or Control</h2>
            <p>
              Whether you need rapid multilingual access to a single document or a managed enterprise program with professional review, terminology control, translation memory, integrations, and quality assurance, Stepes can help you build the right AI translation workflow.
            </p>
          </div>
          <div className="final-cta__actions">
            <PrimaryButton href="https://app.stepes.com/quote/">Get an AI Translation Quote</PrimaryButton>
            <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to an AI Translation Expert</SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #A71954;
    --stepes-magenta-deep: #7A1542;
    --stepes-blush: #FDF2F7;
    --stepes-pink-light: #F2A7C6;
    --ink: #111827;
    --ink-soft: #334155;
    --muted: #64748B;
    --line: #E3E8EF;
    --line-strong: #D3DAE4;
    --surface: #F7F9FC;
    --dark: #141722;
    --dark-soft: #1D2230;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }

  .ai-translation-page {
    width: 100%;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    font-size: 16px;
    line-height: 1.65;
    -webkit-font-smoothing: antialiased;
  }

  .ai-translation-page a { color: inherit; }
  .ai-translation-page img, .ai-translation-page svg { display: block; }
  .ai-translation-page h1,
  .ai-translation-page h2,
  .ai-translation-page h3,
  .ai-translation-page p { margin-top: 0; }

  .ai-translation-page h1,
  .ai-translation-page h2,
  .ai-translation-page h3 {
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.025em;
  }

  .ai-translation-page h1 {
    max-width: 720px;
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.08;
  }

  .ai-translation-page h2 {
    margin-bottom: 20px;
    font-size: 36px;
    line-height: 1.16;
  }

  .ai-translation-page h3 {
    margin-bottom: 10px;
    font-size: 24px;
    line-height: 1.25;
  }

  .ai-translation-page p {
    margin-bottom: 18px;
    color: var(--ink-soft);
    font-size: 16px;
    line-height: 1.7;
  }

  .shell {
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
    padding-right: 56px;
    padding-left: 56px;
  }

  .section { padding: 96px 0; }
  .section--soft { background: var(--surface); }
  .section--dark { background: var(--dark); color: var(--white); }

  .section--dark h2,
  .section--dark h3,
  .section--dark p { color: var(--white); }
  .section--dark p { color: #CFD6E3; }

  .eyebrow {
    margin-bottom: 16px;
    color: var(--stepes-magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: 0.18em !important;
    text-transform: uppercase;
  }

  .eyebrow--dark { color: var(--stepes-pink-light) !important; }

  .section-header { max-width: 820px; }
  .section-header--center { margin-right: auto; margin-left: auto; text-align: center; }
  .section-header--center .section-intro { margin-right: auto; margin-left: auto; }
  .section-intro {
    max-width: 820px;
    margin-bottom: 0;
    color: var(--ink-soft);
    font-size: 18px !important;
    line-height: 1.65;
  }
  .section--dark .section-intro { color: #D7DCE6; }
  .body-large { font-size: 18px !important; line-height: 1.7 !important; }

  .button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 12px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
  }

  .button--primary,
  .button--primary:link,
  .button--primary:visited,
  .button--primary:hover,
  .button--primary:active,
  .button--primary:focus,
  .button--primary:focus-visible,
  .button--primary span,
  .button--primary svg {
    color: #FFFFFF !important;
    fill: none !important;
    stroke: #FFFFFF !important;
  }

  .button--primary {
    background: var(--stepes-magenta);
    border-color: var(--stepes-magenta);
    box-shadow: 0 10px 28px rgba(193, 29, 99, 0.18);
  }

  .button--primary:hover { background: var(--stepes-magenta-dark); border-color: var(--stepes-magenta-dark); transform: translateY(-1px); }
  .button--primary:focus-visible,
  .button--secondary:focus-visible,
  .editorial-link:focus-visible,
  .related-service:focus-visible,
  .faq-question:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.28); outline-offset: 3px; }

  .button--secondary {
    background: var(--white);
    border-color: var(--line-strong);
    color: var(--ink);
  }
  .button--secondary:hover { border-color: #AEB8C6; box-shadow: 0 8px 24px rgba(17, 24, 39, 0.08); transform: translateY(-1px); }

  .editorial-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    gap: 8px;
    margin-top: 6px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }
  .editorial-link svg { flex: 0 0 auto; stroke: currentColor; transition: transform 180ms ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link--light,
  .editorial-link--light:link,
  .editorial-link--light:visited { color: var(--stepes-pink-light) !important; }

  .hero-section {
    position: relative;
    overflow: hidden;
    padding: 104px 0 96px;
    background:
      radial-gradient(circle at 88% 6%, rgba(193,29,99,0.08), transparent 28%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFDFE 100%);
  }

  .hero-section::after {
    position: absolute;
    right: -140px;
    bottom: -220px;
    width: 430px;
    height: 430px;
    border: 1px solid rgba(193,29,99,0.08);
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  .hero-grid {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(430px, 0.95fr);
    gap: 72px;
    align-items: center;
  }

  .hero-copy { min-width: 0; }
  .hero-lead {
    max-width: 720px;
    margin-bottom: 18px !important;
    color: var(--ink-soft) !important;
    font-size: 20px !important;
    line-height: 1.55 !important;
  }
  .hero-support { max-width: 700px; color: var(--muted) !important; font-size: 16px !important; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
  .hero-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 0;
    margin-top: 32px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.4;
  }
  .hero-proof span { display: inline-flex; align-items: center; }
  .hero-proof span:not(:last-child)::after {
    width: 1px;
    height: 14px;
    margin: 0 14px;
    background: var(--line-strong);
    content: "";
  }

  .hero-illustration {
    min-width: 0;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: rgba(255,255,255,0.96);
    box-shadow: 0 30px 70px rgba(31, 41, 55, 0.10);
  }
  .hero-illustration img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }

  .hero-visual {
    position: relative;
    min-width: 0;
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: rgba(255,255,255,0.96);
    box-shadow: 0 30px 70px rgba(31, 41, 55, 0.12);
  }

  .visual-topbar {
    display: flex;
    align-items: center;
    gap: 9px;
    padding-bottom: 18px;
    border-bottom: 1px solid var(--line);
    color: var(--muted);
    font-size: 14px;
  }
  .visual-status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--stepes-magenta); }
  .visual-source-panel,
  .visual-delivery {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-top: 20px;
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 20px;
    background: #FBFCFE;
  }
  .visual-source-panel { justify-content: flex-start; }
  .visual-icon,
  .visual-review-icon {
    display: grid;
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
    place-items: center;
    border-radius: 13px;
    background: var(--stepes-blush);
    color: var(--stepes-magenta);
  }
  .visual-source-panel strong,
  .visual-delivery strong { display: block; color: var(--ink); font-size: 16px; line-height: 1.35; }
  .visual-source-panel small { display: block; margin-top: 3px; color: var(--muted); font-size: 14px; }
  .visual-label { display: block; margin-bottom: 4px; color: var(--stepes-magenta); font-size: 10px; font-weight: 600; letter-spacing: 0.14em; }
  .visual-flow-line { width: 1px; height: 18px; margin: 0 auto; background: var(--line-strong); }
  .visual-engine-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; }
  .visual-engine-card {
    min-width: 0;
    padding: 14px;
    border: 1px solid var(--line);
    border-radius: 16px;
    background: var(--white);
    color: var(--muted);
  }
  .visual-engine-card--active { border-color: rgba(193,29,99,0.26); background: var(--stepes-blush); color: var(--stepes-magenta); }
  .visual-engine-card span { display: block; margin-top: 9px; color: var(--ink-soft); font-size: 13px; line-height: 1.3; }
  .visual-engine-card strong { display: block; margin-top: 4px; color: var(--ink); font-size: 14px; line-height: 1.35; }
  .visual-review-row { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; margin-top: 16px; }
  .visual-review-item { display: flex; align-items: center; gap: 12px; padding: 14px; border: 1px solid var(--line); border-radius: 16px; }
  .visual-review-item span:not(.visual-review-icon) { display: block; color: var(--ink-soft); font-size: 13px; }
  .visual-review-item strong { display: block; margin-top: 3px; color: var(--ink); font-size: 14px; line-height: 1.35; }
  .visual-delivery { margin-top: 16px; background: var(--dark); border-color: var(--dark); }
  .visual-delivery .visual-label { color: var(--stepes-pink-light); }
  .visual-delivery strong { color: var(--white); }
  .visual-language-stack { display: flex; }
  .visual-language-stack span {
    display: grid;
    width: 34px;
    height: 34px;
    margin-left: -7px;
    place-items: center;
    border: 2px solid var(--dark);
    border-radius: 50%;
    background: var(--white);
    color: var(--ink);
    font-size: 10px;
    font-weight: 600;
  }

  .trust-strip { background: var(--white); }
  .trust-strip__inner {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .trust-item {
    display: flex;
    min-height: 76px;
    align-items: center;
    justify-content: center;
    padding: 18px 12px;
    color: var(--ink-soft);
    font-size: 14px;
    font-weight: 600;
    text-align: center;
  }
  .trust-item:not(:last-child) { border-right: 1px solid var(--line); }

  .overview-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 84px; align-items: start; }
  .overview-content { max-width: 760px; }
  .outcomes-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 64px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }
  .outcome-item { padding: 34px 28px; }
  .outcome-item:not(:last-child) { border-right: 1px solid var(--line); }
  .outcome-item h3 { margin-top: 20px; font-size: 20px; }
  .outcome-item p { margin-bottom: 0; }
  .icon-surface,
  .technology-item__icon,
  .content-type__icon,
  .program-path__icon {
    display: grid;
    width: 48px;
    height: 48px;
    place-items: center;
    border-radius: 15px;
    background: var(--stepes-blush);
    color: var(--stepes-magenta);
  }

  .workflow-section { padding-top: 104px; padding-bottom: 104px; }
  .workflow-tier-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 20px; margin-top: 54px; }
  .workflow-tier {
    position: relative;
    padding: 30px;
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 24px;
    background: rgba(255,255,255,0.04);
  }
  .workflow-tier__index { color: var(--stepes-pink-light); font-size: 14px; font-weight: 600; letter-spacing: 0.08em; }
  .workflow-tier__label { margin-top: 16px; color: var(--stepes-pink-light); font-size: 13px; font-weight: 600; line-height: 1.35; }
  .workflow-tier h3 { margin-top: 8px; font-size: 23px; }
  .workflow-tier p { margin-bottom: 20px; }
  .check-list { margin: 0; padding: 0; list-style: none; }
  .check-list li { display: flex; align-items: flex-start; gap: 10px; padding: 9px 0; border-top: 1px solid rgba(255,255,255,0.1); color: #EEF1F6; font-size: 16px; line-height: 1.45; }
  .check-list li svg { margin-top: 2px; flex: 0 0 auto; color: var(--stepes-pink-light); }
  .best-for { margin-top: 20px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.14); color: #D7DCE6; font-size: 16px; }
  .best-for strong { color: var(--white); }
  .workflow-note {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 40px;
    margin-top: 28px;
    padding: 24px 0 0;
    border-top: 1px solid rgba(255,255,255,0.14);
  }
  .workflow-note p { max-width: 760px; margin-bottom: 0; }

  .domainai-workflow-panel {
    margin-top: 52px;
  }
  .domainai-workflow-panel .hero-visual {
    max-width: 1080px;
    margin: 0 auto;
  }

  .domainai-feature {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 56px;
    align-items: start;
    margin-top: 52px;
    padding: 46px;
    border: 1px solid #EED5E0;
    border-radius: 28px;
    background: linear-gradient(135deg, #FFFFFF 0%, #FFF8FB 100%);
  }
  .domainai-feature__copy { position: relative; padding-left: 66px; }
  .domainai-feature__icon {
    position: absolute;
    top: 1px;
    left: 0;
    display: grid;
    width: 50px;
    height: 50px;
    place-items: center;
    border-radius: 16px;
    background: var(--stepes-magenta);
    color: var(--white);
  }
  .domainai-feature__icon svg { stroke: var(--white); }
  .domainai-feature__copy h3 { max-width: 520px; font-size: 28px; }
  .domainai-feature__copy p { max-width: 600px; }
  .domainai-capabilities { border-top: 1px solid rgba(193,29,99,0.18); }
  .domainai-capability { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 16px; padding: 21px 0; border-bottom: 1px solid rgba(193,29,99,0.18); }
  .domainai-capability > span { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 50%; background: var(--white); color: var(--stepes-magenta); box-shadow: 0 0 0 1px rgba(193,29,99,0.16); }
  .domainai-capability h3 { margin-bottom: 6px; font-size: 20px; }
  .domainai-capability p { margin-bottom: 0; }

  .technology-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 42px; border-top: 1px solid var(--line); }
  .technology-item { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 20px; padding: 34px 34px 34px 0; border-bottom: 1px solid var(--line); }
  .technology-item:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 42px; }
  .technology-item:nth-child(even) { padding-left: 42px; }
  .technology-item h3 { font-size: 22px; }
  .technology-item p { margin-bottom: 4px; }

  .process-top { display: grid; grid-template-columns: 1fr 0.72fr; gap: 72px; align-items: end; }
  .process-summary { display: flex; gap: 18px; padding: 24px; border: 1px solid var(--line); border-radius: 22px; background: var(--white); }
  .process-summary__icon { display: grid; width: 48px; height: 48px; flex: 0 0 48px; place-items: center; border-radius: 15px; background: var(--stepes-blush); color: var(--stepes-magenta); }
  .process-summary p { margin-bottom: 0; }
  .process-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 58px; border-top: 1px solid var(--line-strong); }
  .process-step { display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 24px; padding: 32px 34px 32px 0; border-bottom: 1px solid var(--line-strong); }
  .process-step:nth-child(odd) { border-right: 1px solid var(--line-strong); padding-right: 42px; }
  .process-step:nth-child(even) { padding-left: 42px; }
  .process-number { color: var(--stepes-magenta); font-size: 18px; font-weight: 600; line-height: 1.3; }
  .process-step h3 { font-size: 21px; }
  .process-step p { margin-bottom: 0; }

  .quality-grid { display: grid; grid-template-columns: 0.78fr 1.22fr; gap: 84px; align-items: start; }
  .quality-intro { position: sticky; top: 28px; }
  .quality-matrix { border-top: 1px solid var(--line); }
  .quality-row { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 18px; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .quality-marker { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--stepes-blush); color: var(--stepes-magenta); }
  .quality-row h3 { font-size: 21px; }
  .quality-row p { margin-bottom: 0; }

  .pilot-section { padding-top: 80px; padding-bottom: 80px; }
  .pilot-panel {
    display: grid;
    grid-template-columns: 0.86fr 1.14fr;
    gap: 72px;
    padding-top: 64px;
    padding-bottom: 64px;
    border: 1px solid #F1D6E2;
    border-radius: 30px;
    background: var(--stepes-blush);
  }
  .pilot-copy { padding-left: 10px; }
  .pilot-copy h2 { max-width: 560px; }
  .pilot-copy .button { margin-top: 10px; }
  .pilot-steps { border-top: 1px solid rgba(193,29,99,0.18); }
  .pilot-step { display: grid; grid-template-columns: 42px minmax(0, 1fr); gap: 18px; padding: 23px 0; border-bottom: 1px solid rgba(193,29,99,0.18); }
  .pilot-step__number { display: grid; width: 32px; height: 32px; place-items: center; border-radius: 50%; background: var(--white); color: var(--stepes-magenta); font-size: 14px; font-weight: 600; }
  .pilot-step h3 { font-size: 20px; }
  .pilot-step p { margin-bottom: 0; }

  .content-type-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 60px; border-top: 1px solid var(--line); }
  .content-type { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 22px; padding: 32px 34px 34px 0; border-bottom: 1px solid var(--line); }
  .content-type:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 42px; }
  .content-type:nth-child(even) { padding-left: 42px; }
  .content-type h3 { font-size: 22px; }
  .content-type p { margin-bottom: 6px; }
  .link-group { display: flex; flex-wrap: wrap; gap: 0 24px; }

  .industry-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 58px; border-top: 1px solid rgba(255,255,255,0.14); }
  .industry-item { display: grid; grid-template-columns: 46px minmax(0, 1fr); gap: 20px; padding: 32px 34px 34px 0; border-bottom: 1px solid rgba(255,255,255,0.14); }
  .industry-item:nth-child(odd) { border-right: 1px solid rgba(255,255,255,0.14); padding-right: 42px; }
  .industry-item:nth-child(even) { padding-left: 42px; }
  .industry-item__icon { display: grid; width: 44px; height: 44px; place-items: center; border: 1px solid rgba(242,167,198,0.3); border-radius: 14px; color: var(--stepes-pink-light); }
  .industry-item h3 { font-size: 22px; }
  .industry-item p { margin-bottom: 5px; }

  .language-files-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px; }
  .language-panel,
  .file-panel { padding: 42px; border: 1px solid var(--line); border-radius: 28px; }
  .language-panel { background: var(--white); }
  .file-panel { background: var(--surface); }
  .language-list { display: flex; flex-wrap: wrap; gap: 9px; margin: 30px 0; }
  .language-list span { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; background: #FBFCFE; color: var(--ink-soft); font-size: 14px; line-height: 1.3; }
  .file-groups { margin: 28px 0; border-top: 1px solid var(--line); }
  .file-group { padding: 19px 0; border-bottom: 1px solid var(--line); }
  .file-group h3 { margin-bottom: 5px; font-size: 19px; }
  .file-group p { margin-bottom: 0; }

  .program-paths { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 24px; margin-top: 58px; }
  .program-path { padding: 40px; border: 1px solid var(--line); border-radius: 28px; background: var(--white); }
  .program-path--quote { background: linear-gradient(180deg, #FFFFFF 0%, #FFF9FC 100%); border-color: #EED5E0; }
  .program-path h3 { margin-top: 24px; }
  .quiet-list { margin: 24px 0 30px; padding: 0; list-style: none; }
  .quiet-list li { position: relative; padding: 10px 0 10px 20px; border-top: 1px solid var(--line); color: var(--ink-soft); font-size: 16px; }
  .quiet-list li::before { position: absolute; top: 20px; left: 1px; width: 6px; height: 6px; border-radius: 50%; background: var(--stepes-magenta); content: ""; }
  .capability-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 24px; margin: 26px 0; }
  .capability-list span { display: flex; align-items: flex-start; gap: 9px; color: var(--ink-soft); font-size: 16px; }
  .capability-list svg { margin-top: 4px; flex: 0 0 auto; color: var(--stepes-magenta); }
  .program-links { display: flex; flex-wrap: wrap; gap: 0 24px; padding-top: 18px; border-top: 1px solid var(--line); }

  .security-grid { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 80px; align-items: start; }
  .security-copy { position: sticky; top: 28px; }
  .security-controls { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); }
  .security-control { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 15px; padding: 28px 28px 28px 0; border-bottom: 1px solid var(--line); }
  .security-control:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
  .security-control:nth-child(even) { padding-left: 34px; }
  .security-control__icon { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 10px; background: var(--stepes-blush); color: var(--stepes-magenta); }
  .security-control h3 { font-size: 20px; }
  .security-control p { margin-bottom: 0; }

  .why-grid { display: grid; grid-template-columns: 0.82fr 1.18fr; gap: 80px; align-items: start; }
  .credential-band { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); margin-top: 34px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .credential-band div { padding: 20px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .credential-band strong { display: block; color: var(--ink); font-size: 20px; font-weight: 600; }
  .credential-band span { display: block; margin-top: 4px; color: var(--muted); font-size: 14px; }
  .why-list { border-top: 1px solid var(--line); }
  .why-item { display: grid; grid-template-columns: 36px minmax(0, 1fr); gap: 16px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .why-item__marker { display: grid; width: 30px; height: 30px; place-items: center; border-radius: 50%; background: var(--stepes-blush); color: var(--stepes-magenta); }
  .why-item h3 { font-size: 20px; }
  .why-item p { margin-bottom: 0; }

  .related-list { margin-top: 48px; border-top: 1px solid var(--line-strong); }
  .related-service {
    display: grid;
    min-height: 132px;
    grid-template-columns: minmax(0, 1fr) 44px;
    gap: 34px;
    align-items: center;
    padding: 28px 0;
    border-bottom: 1px solid var(--line-strong);
    text-decoration: none;
  }
  .related-service h3 { margin-bottom: 6px; font-size: 22px; transition: color 180ms ease; }
  .related-service p { max-width: 900px; margin-bottom: 0; }
  .related-service__arrow { display: grid; width: 42px; height: 42px; place-items: center; border: 1px solid var(--line-strong); border-radius: 50%; color: var(--stepes-magenta); transition: transform 180ms ease, border-color 180ms ease; }
  .related-service:hover h3 { color: var(--stepes-magenta); }
  .related-service:hover .related-service__arrow { border-color: rgba(193,29,99,0.4); transform: translateX(3px); }

  .insights-callout {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 40px;
    align-items: center;
    margin-top: 42px;
    padding: 30px 34px;
    border: 1px solid #EED5E0;
    border-radius: 24px;
    background: var(--stepes-blush);
  }
  .insights-callout h3 { margin-bottom: 8px; font-size: 22px; }
  .insights-callout p { max-width: 820px; margin-bottom: 0; }
  .insights-callout .editorial-link { margin-top: 0; white-space: nowrap; }

  .faq-grid { display: grid; grid-template-columns: 0.72fr 1.28fr; gap: 72px; align-items: start; }
  .faq-intro { position: sticky; top: 28px; }
  .faq-support { max-width: 540px; margin-top: 28px; margin-bottom: 4px; }
  .faq-panel { border-top: 1px solid var(--line-strong); }
  .faq-item { border-bottom: 1px solid var(--line-strong); }
  .faq-question {
    display: grid;
    width: 100%;
    min-height: 76px;
    grid-template-columns: minmax(0, 1fr) 40px;
    gap: 24px;
    align-items: center;
    padding: 21px 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    font-family: inherit;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
    text-align: left;
    cursor: pointer;
  }
  .faq-toggle { display: grid; width: 38px; height: 38px; place-items: center; border: 1px solid var(--line-strong); border-radius: 50%; color: var(--stepes-magenta); }
  .faq-answer { padding: 0 66px 25px 0; }
  .faq-answer p { max-width: 840px; margin-bottom: 0; font-size: 16px; }

  .final-cta-section { padding: 80px 0; background: var(--white); }
  .final-cta {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 52px;
    align-items: center;
    padding-top: 58px;
    padding-bottom: 58px;
    border: 1px solid #EED5E0;
    border-radius: 30px;
    background:
      radial-gradient(circle at 90% 10%, rgba(193,29,99,0.10), transparent 28%),
      var(--stepes-blush);
  }
  .final-cta__copy { max-width: 780px; }
  .final-cta__copy p { margin-bottom: 0; font-size: 18px; }
  .final-cta__actions { display: flex; flex-direction: column; gap: 12px; min-width: 260px; }

  @media (prefers-reduced-motion: reduce) {
    .button,
    .editorial-link svg,
    .related-service h3,
    .related-service__arrow { transition: none; }
  }

  @media (max-width: 1180px) {
    .shell { padding-right: 40px; padding-left: 40px; }
    .hero-grid { grid-template-columns: minmax(0, 1fr) 430px; gap: 48px; }
    .workflow-tier { padding: 26px; }
    .domainai-feature { gap: 42px; padding: 40px; }
    .quality-grid, .security-grid, .why-grid { gap: 56px; }
    .pilot-panel { gap: 48px; }
  }

  @media (max-width: 980px) {
    .shell { padding-right: 24px; padding-left: 24px; }
    .ai-translation-page h1 { font-size: 42px; }
    .ai-translation-page h2 { font-size: 32px; }
    .ai-translation-page h3 { font-size: 22px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 820px; }
    .hero-illustration { max-width: 720px; }
    .hero-visual { max-width: 720px; }
    .trust-strip__inner { grid-template-columns: repeat(3, 1fr); }
    .trust-item:nth-child(3) { border-right: 0; }
    .trust-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
    .overview-grid,
    .domainai-feature,
    .quality-grid,
    .language-files-grid,
    .security-grid,
    .why-grid,
    .faq-grid { grid-template-columns: 1fr; gap: 48px; }
    .outcomes-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .outcome-item:nth-child(2) { border-right: 0; }
    .outcome-item:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .workflow-tier-grid { grid-template-columns: 1fr; }
    .workflow-tier { display: grid; grid-template-columns: 56px minmax(0, 1fr); column-gap: 20px; }
    .workflow-tier__index { grid-row: 1 / span 6; }
    .workflow-tier__label,
    .workflow-tier h3,
    .workflow-tier p,
    .workflow-tier .check-list,
    .workflow-tier .best-for { grid-column: 2; }
    .process-top { grid-template-columns: 1fr; gap: 30px; }
    .pilot-panel { grid-template-columns: 1fr; }
    .program-paths { grid-template-columns: 1fr; }
    .quality-intro, .security-copy, .faq-intro { position: static; }
    .insights-callout { grid-template-columns: 1fr; gap: 16px; }
    .insights-callout .editorial-link { white-space: normal; }
    .final-cta { grid-template-columns: 1fr; }
    .final-cta__actions { flex-direction: row; min-width: 0; }
  }

  @media (max-width: 768px) {
    .section { padding: 72px 0; }
    .hero-section { padding: 84px 0 72px; }
    .workflow-section { padding-top: 76px; padding-bottom: 76px; }
    .ai-translation-page h1 { font-size: 42px; }
    .ai-translation-page h2 { font-size: 32px; }
    .ai-translation-page h3 { font-size: 22px; }
    .hero-lead { font-size: 18px !important; }
    .hero-actions .button { flex: 1 1 260px; }
    .hero-proof span:not(:last-child)::after { margin: 0 10px; }
    .technology-grid,
    .process-list,
    .content-type-grid,
    .industry-grid,
    .security-controls { grid-template-columns: 1fr; }
    .technology-item,
    .technology-item:nth-child(odd),
    .technology-item:nth-child(even),
    .process-step,
    .process-step:nth-child(odd),
    .process-step:nth-child(even),
    .content-type,
    .content-type:nth-child(odd),
    .content-type:nth-child(even),
    .industry-item,
    .industry-item:nth-child(odd),
    .industry-item:nth-child(even),
    .security-control,
    .security-control:nth-child(odd),
    .security-control:nth-child(even) {
      padding-right: 0;
      padding-left: 0;
      border-right: 0;
    }
    .pilot-panel { padding-top: 50px; padding-bottom: 50px; }
    .domainai-feature { padding: 34px; }
    .language-panel, .file-panel, .program-path { padding: 32px; }
    .final-cta__actions { flex-direction: column; }
    .final-cta__actions .button { width: 100%; }
  }

  @media (max-width: 520px) {
    .shell { padding-right: 20px; padding-left: 20px; }
    .section { padding: 68px 0; }
    .ai-translation-page h1 { font-size: 38px; line-height: 1.08; }
    .ai-translation-page h2 { font-size: 30px; line-height: 1.16; }
    .ai-translation-page h3 { font-size: 20px; }
    .section-intro { font-size: 17px !important; }
    .hero-section { padding: 72px 0 64px; }
    .hero-actions { flex-direction: column; }
    .hero-actions .button { width: 100%; flex: 0 0 auto; }
    .hero-proof { display: grid; grid-template-columns: 1fr; gap: 8px; }
    .hero-proof span:not(:last-child)::after { display: none; }
    .hero-illustration { padding: 12px; border-radius: 24px; }
    .hero-illustration img { border-radius: 18px; }
    .hero-visual { padding: 16px; border-radius: 24px; }
    .visual-engine-grid { grid-template-columns: 1fr; }
    .visual-engine-card { display: grid; grid-template-columns: 24px minmax(0, 1fr); column-gap: 10px; align-items: start; padding: 13px; }
    .visual-engine-card span,
    .visual-engine-card strong { grid-column: 2; }
    .visual-engine-card span { margin-top: 0; }
    .visual-engine-card svg { grid-row: 1 / span 2; }
    .visual-review-row { grid-template-columns: 1fr; }
    .visual-delivery { align-items: flex-start; flex-direction: column; }
    .trust-strip__inner { grid-template-columns: repeat(2, 1fr); }
    .trust-item:nth-child(3) { border-right: 1px solid var(--line); }
    .trust-item:nth-child(2n) { border-right: 0; }
    .trust-item:nth-child(-n+4) { border-bottom: 1px solid var(--line); }
    .outcomes-grid { grid-template-columns: 1fr; }
    .outcome-item,
    .outcome-item:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--line); padding: 28px 0; }
    .outcome-item:last-child { border-bottom: 0; }
    .workflow-tier { display: block; padding: 24px 20px; }
    .workflow-tier__index { margin-bottom: 12px; }
    .domainai-feature { padding: 28px 20px; border-radius: 24px; }
    .domainai-feature__copy { padding-left: 0; }
    .domainai-feature__icon { position: static; margin-bottom: 18px; }
    .domainai-feature__copy h3 { font-size: 24px; }
    .domainai-capability { grid-template-columns: 32px minmax(0, 1fr); gap: 14px; }
    .workflow-note { align-items: flex-start; flex-direction: column; gap: 16px; }
    .technology-item, .content-type, .industry-item { grid-template-columns: 42px minmax(0, 1fr); gap: 16px; }
    .technology-item__icon, .content-type__icon { width: 42px; height: 42px; }
    .process-step { grid-template-columns: 42px minmax(0, 1fr); gap: 16px; padding: 25px 0; }
    .process-number { font-size: 16px; }
    .quality-row { grid-template-columns: 32px minmax(0, 1fr); gap: 14px; }
    .pilot-panel { width: calc(100% - 40px); margin-right: auto; margin-left: auto; padding: 40px 20px; }
    .pilot-copy { padding-left: 0; }
    .pilot-step { grid-template-columns: 34px minmax(0, 1fr); gap: 14px; }
    .language-panel, .file-panel, .program-path { padding: 26px 20px; border-radius: 24px; }
    .language-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px; }
    .language-list span { display: flex; min-height: 44px; align-items: center; border-radius: 16px; overflow-wrap: anywhere; }
    .capability-list { grid-template-columns: 1fr; }
    .security-control { grid-template-columns: 30px minmax(0, 1fr); gap: 13px; }
    .credential-band { grid-template-columns: 1fr; }
    .related-service { grid-template-columns: minmax(0, 1fr) 38px; gap: 16px; }
    .faq-question { grid-template-columns: minmax(0, 1fr) 38px; gap: 16px; font-size: 18px; }
    .faq-answer { padding-right: 0; }
    .editorial-link { max-width: 100%; }
    .editorial-link span { overflow-wrap: anywhere; }
    .insights-callout { padding: 26px 20px; border-radius: 22px; }
    .final-cta-section { padding: 64px 0; }
    .final-cta { width: calc(100% - 40px); margin-right: auto; margin-left: auto; padding: 42px 20px; border-radius: 24px; }
  }

  @media (max-width: 360px) {
    .button { width: 100%; padding-right: 16px; padding-left: 16px; }
    .visual-source-panel { align-items: flex-start; }
    .visual-source-panel small { overflow-wrap: anywhere; }
    .language-list { display: grid; grid-template-columns: 1fr; }
    .language-list span { width: 100%; }
  }
`;
