/*
 * Stepes Machine Translation Post-Editing Services
 * Complete 19-section customer-facing wireframe, reviewed against Stepes Wireframe Generation Spec v1.4
 */
import React, { useState } from "react";

const STEPS_URL = "https://www.stepes.com";

const Icon = ({ name, size = 22, className = "" }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
    focusable: false,
  };

  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    accuracy: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    completeness: (
      <>
        <path d="M7 3h8l4 4v14H7z" />
        <path d="M15 3v5h5" />
        <path d="M10 13h6" />
        <path d="M10 17h4" />
      </>
    ),
    terminology: (
      <>
        <path d="M5 5h14v14H5z" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M8 17h3" />
      </>
    ),
    style: (
      <>
        <path d="M4 19h16" />
        <path d="M7 16 15.5 7.5a2.1 2.1 0 0 1 3 3L10 19H7z" />
      </>
    ),
    data: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
        <path d="M8 4v16" />
        <path d="M16 4v16" />
      </>
    ),
    technical: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z" />
        <path d="M12 8v4" />
        <path d="M12 16h.01" />
      </>
    ),
    audience: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20c.7-3.8 2.6-5.8 5.5-5.8s4.8 2 5.5 5.8" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M15.5 14.4c2.8-.2 4.5 1.7 5 4.6" />
      </>
    ),
    gauge: (
      <>
        <path d="M4 14a8 8 0 1 1 16 0" />
        <path d="m12 14 4-4" />
        <path d="M6 18h12" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21" />
        <path d="M12 3c-2.4 2.5-3.5 5.5-3.5 9S9.6 18.5 12 21" />
      </>
    ),
    structure: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z" />
        <path d="m19 15 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
      </>
    ),
    language: (
      <>
        <path d="M4 5h10" />
        <path d="M9 3v2" />
        <path d="M6 5c.4 4 2.2 7 5.5 9" />
        <path d="M13 7c-1 3.5-3.5 6.4-7.5 8" />
        <path d="m14 19 3-7 3 7" />
        <path d="M15.2 16h3.6" />
      </>
    ),
    source: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3v3" />
        <path d="M12 18v3" />
        <path d="m4.2 6.2 2.1 2.1" />
        <path d="m17.7 17.7 2.1 2.1" />
        <path d="M3 12h3" />
        <path d="M18 12h3" />
        <path d="m4.2 17.8 2.1-2.1" />
        <path d="m17.7 6.3 2.1-2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    human: (
      <>
        <circle cx="12" cy="8" r="3" />
        <path d="M5.5 20c.8-4 3-6 6.5-6s5.7 2 6.5 6" />
        <path d="m16.5 4.5 1 1 2-2" />
      </>
    ),
    qa: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 20h14" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14v3" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 16 9 5 9-5" />
      </>
    ),
    report: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 16v-3" />
        <path d="M12 16v-6" />
        <path d="M15 16v-4" />
      </>
    ),
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 8h.01M12 8h.01M16 8h.01" />
        <path d="M8 12h.01M12 12h.01M16 12h.01" />
        <path d="M8 16h.01M16 16h.01" />
        <path d="M10 21v-5h4v5" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v17H7.5A3.5 3.5 0 0 0 4 22z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v17h4.5A3.5 3.5 0 0 1 20 22z" />
      </>
    ),
    cart: (
      <>
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
        <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L20 8H7" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    minus: <path d="M5 12h14" />,
    chevron: <path d="m9 6 6 6-6 6" />,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const trustItems = [
  "ISO 17100",
  "ISO 9001",
  "ISO 13485",
  "100+ Languages",
  "AI + Human Workflows",
  "Secure Enterprise Delivery",
];

const comparisonRows = [
  {
    service: "Machine Translation Post-Editing",
    starting: "Machine- or AI-generated translation",
    purpose: "Correct and refine the translation against the source",
    emphasis: true,
  },
  {
    service: "Translation Revision",
    starting: "Human-produced translation",
    purpose: "Review another linguist’s work for accuracy and quality",
  },
  {
    service: "Proofreading",
    starting: "Near-final target-language content",
    purpose: "Correct surface-level language and presentation issues",
  },
  {
    service: "AI Output Review",
    starting: "AI-generated translation or content",
    purpose: "Evaluate, score, classify, and approve or reject the output",
    href: `${STEPS_URL}/ai-output-review/`,
  },
  {
    service: "LLM Evaluation",
    starting: "Model responses across prompts or datasets",
    purpose: "Measure model performance, reliability, and linguistic behavior",
    href: `${STEPS_URL}/llm-evaluation-services/`,
  },
];

const reviewRisks = [
  {
    icon: "accuracy",
    title: "Meaning Can Change",
    text: "A fluent translation can still reverse a relationship, mishandle a negative statement, or choose a plausible term that is wrong in context.",
  },
  {
    icon: "completeness",
    title: "Content Can Be Omitted or Added",
    text: "Automated output may leave out warnings, conditions, or references—or introduce language that is not supported by the source.",
  },
  {
    icon: "terminology",
    title: "Terminology Can Drift",
    text: "Products, features, components, and technical concepts may be translated inconsistently across files, markets, and releases.",
  },
  {
    icon: "style",
    title: "Style Can Miss the Audience",
    text: "AI output may be too formal, too casual, overly literal, or inconsistent with the voice and locale conventions your readers expect.",
  },
  {
    icon: "data",
    title: "Critical Data Can Be Corrupted",
    text: "Numbers, dates, currencies, measurements, product codes, names, and cross-references require deliberate validation.",
  },
  {
    icon: "technical",
    title: "Technical Elements Can Break",
    text: "Variables, placeholders, tags, links, markup, and file structure can be changed, misplaced, or omitted during automated translation.",
  },
];

const serviceLevels = [
  {
    name: "Raw AI or Machine Translation",
    involvement: "No human correction",
    outcome: "Rapid access to the general meaning",
    uses: "Low-risk, short-lived internal content",
  },
  {
    name: "Light Post-Editing",
    involvement: "Targeted correction of essential issues",
    outcome: "Clear, understandable, and usable content",
    uses: "High-volume, lower-visibility material",
  },
  {
    name: "Full Post-Editing",
    involvement: "Comprehensive source-to-target review",
    outcome: "Accurate, fluent, consistent, and fit-for-purpose translation",
    uses: "Published, customer-facing, operational, or higher-risk content",
    featured: true,
  },
  {
    name: "Human Translation or Transcreation",
    involvement: "Human-led creation from the source",
    outcome: "Maximum control, nuance, or creative adaptation",
    uses: "Sensitive, specialized, persuasive, or highly creative content",
  },
];

const contentSuitabilityFactors = [
  {
    icon: "shield",
    title: "Content Risk",
    text: "Consider what could happen if an error remains. Safety, legal, regulatory, and customer-impacting content usually requires stronger controls.",
  },
  {
    icon: "audience",
    title: "Audience and Visibility",
    text: "Internal reference material and public, customer-facing content should not automatically follow the same post-editing workflow.",
  },
  {
    icon: "gauge",
    title: "Initial Translation Quality",
    text: "MTPE works best when the automated output provides a useful starting point and reduces the effort required to reach approval.",
  },
  {
    icon: "globe",
    title: "Language Pair",
    text: "Machine translation performance varies by language combination, domain, content type, and the linguistic resources available.",
  },
  {
    icon: "structure",
    title: "Content Structure",
    text: "Controlled, repetitive, and terminology-rich content often benefits more than ambiguous, fragmented, or inconsistently authored source text.",
  },
  {
    icon: "spark",
    title: "Voice and Creativity",
    text: "Informational content is generally more suitable than messaging that depends on emotion, originality, humor, or cultural adaptation.",
  },
];

const suitabilityGroups = [
  {
    title: "Strong Candidates for MTPE",
    intro:
      "Structured, recurring content where machine output can provide an efficient foundation.",
    tone: "strong",
    items: [
      "Technical manuals and product documentation",
      "Knowledge bases and help-center content",
      "Software and application strings",
      "Product catalogs and e-commerce descriptions",
      "Internal policies and communications",
      "Employee training and e-learning content",
      "Customer-support resources",
      "Recurring structured updates",
    ],
  },
  {
    title: "Evaluate Before Proceeding",
    intro:
      "Content that may benefit from MTPE when risk, quality, and review requirements are defined first.",
    tone: "evaluate",
    items: [
      "Medical and life sciences documentation",
      "Legal and financial materials",
      "Public websites and customer communications",
      "Safety-related content",
      "Specialized engineering documentation",
      "Marketing production content",
      "Policies with contractual or regulatory implications",
    ],
  },
  {
    title: "Often Better With Human-Led Translation",
    intro:
      "Content whose value depends on nuance, originality, or a distinctive human voice.",
    tone: "human",
    items: [
      "Brand taglines and campaign concepts",
      "Highly creative advertising",
      "Emotionally sensitive communications",
      "Literary content",
      "Executive thought leadership with a distinctive voice",
      "Content where poor MT creates more work than direct translation",
    ],
  },
];

const serviceModels = [
  {
    label: "Complete Workflow",
    title: "End-to-End AI Translation and Post-Editing",
    text: "Stepes manages the complete process—from source analysis and linguistic asset preparation through AI translation, human post-editing, quality assurance, and final delivery.",
    link: {
      label: "Explore AI Translation Services",
      href: `${STEPS_URL}/ai-translation-services/`,
    },
  },
  {
    label: "Your Existing Technology",
    title: "Post-Editing Client-Provided Output",
    text: "Send translations generated by your internal AI system, commercial machine translation engine, enterprise LLM, TMS, or another provider. We apply your terminology, style, and acceptance criteria without requiring a platform change.",
  },
  {
    label: "Evidence Before Scale",
    title: "MTPE Pilots and Benchmarks",
    text: "Test representative content and language pairs before a wider rollout. A pilot can clarify content suitability, post-editing effort, quality controls, terminology needs, and performance differences across languages.",
  },
  {
    label: "Ongoing Production",
    title: "Continuous MTPE Programs",
    text: "Configure recurring workflows for product releases, software development, website and knowledge-base updates, customer support, e-commerce catalogs, training, and technical documentation.",
  },
];

const workflowSteps = [
  {
    title: "Define the Intended Use",
    text: "Establish the audience, visibility, business risk, post-editing level, deliverables, review responsibilities, and acceptance criteria.",
  },
  {
    title: "Assess the Source Content",
    text: "Review subject matter, structure, file format, repetition, clarity, and suitability for machine translation and post-editing.",
  },
  {
    title: "Prepare Linguistic Assets",
    text: "Apply translation memories, glossaries, style guides, approved references, product terminology, and do-not-translate instructions.",
  },
  {
    title: "Generate or Receive the Machine Translation",
    text: "Use an approved AI-enabled workflow or ingest output from your preferred engine, platform, TMS, or internal language model.",
  },
  {
    title: "Assign Qualified Post-Editors",
    text: "Match native linguists and domain specialists to the language pair, target locale, content type, subject matter, and required quality level.",
  },
  {
    title: "Post-Edit and Quality-Assure the Content",
    text: "Correct the target against the source, then validate terminology, completeness, numbers, consistency, formatting, tags, and other defined requirements.",
  },
  {
    title: "Deliver and Improve",
    text: "Return approved files and any requested comments or quality reporting, while maintaining approved terminology and linguistic assets for future releases where appropriate.",
  },
];

const qualityCategories = [
  {
    icon: "accuracy",
    title: "Meaning and Accuracy",
    items: [
      "Incorrect or distorted meaning",
      "Overly literal translation",
      "Ambiguities and misleading wording",
      "Negation and qualification errors",
      "Domain-specific inaccuracies",
    ],
  },
  {
    icon: "completeness",
    title: "Completeness",
    items: [
      "Missing words or sentences",
      "Untranslated or truncated text",
      "Unsupported additions",
      "Repeated content",
      "Missing warnings, conditions, or references",
    ],
  },
  {
    icon: "terminology",
    title: "Terminology and Consistency",
    items: [
      "Approved product and feature names",
      "Technical and regulated terminology",
      "Acronyms and abbreviations",
      "Interface labels",
      "Repeated language across files and releases",
    ],
  },
  {
    icon: "language",
    title: "Grammar and Language Quality",
    items: [
      "Grammar and syntax",
      "Spelling and punctuation",
      "Word order and agreement",
      "Fluency",
      "Readability",
    ],
  },
  {
    icon: "style",
    title: "Style, Tone, and Audience",
    items: [
      "Formality and register",
      "Brand voice",
      "Instructional style",
      "Locale-appropriate conventions",
      "Inclusive and audience-appropriate language",
    ],
  },
  {
    icon: "data",
    title: "Data Integrity",
    items: [
      "Numbers and dates",
      "Measurements and units",
      "Currency",
      "Names and product codes",
      "Citations and cross-references",
    ],
  },
  {
    icon: "technical",
    title: "Technical and File Integrity",
    items: [
      "Tags and markup",
      "Variables and placeholders",
      "Links and line breaks",
      "Character restrictions",
      "File structure and formatting",
    ],
    full: true,
  },
];


const qualityDimensions = [
  {
    title: "Accuracy",
    text: "Whether the target communicates the source meaning correctly.",
  },
  {
    title: "Completeness",
    text: "Whether required content is present without omissions or unsupported additions.",
  },
  {
    title: "Terminology",
    text: "Whether approved and contextually correct terms are used consistently.",
  },
  {
    title: "Language Quality",
    text: "Whether grammar, syntax, spelling, and punctuation are correct.",
  },
  {
    title: "Fluency",
    text: "Whether the translation reads naturally for the intended audience.",
  },
  {
    title: "Style",
    text: "Whether tone, register, and brand requirements are followed.",
  },
  {
    title: "Locale Compliance",
    text: "Whether regional language and formatting conventions are correct.",
  },
  {
    title: "Technical Integrity",
    text: "Whether tags, variables, links, and file elements remain intact.",
  },
];

const mtpeDeliverables = [
  "Fully post-edited target files",
  "Clean final files",
  "Tracked changes",
  "Linguist comments",
  "Terminology questions",
  "Issue logs",
  "Error classifications",
  "Severity ratings",
  "Quality scorecards",
  "Pass/fail assessments",
  "Root-cause observations",
  "Recommendations for future AI translation use",
];

const governancePillars = [
  {
    icon: "terminology",
    title: "Terminology Management",
    text: "Apply approved product names, industry terminology, preferred and prohibited terms, acronyms, definitions, and locale-specific variants.",
    items: [
      "Approved and prohibited terms",
      "Definitions and usage context",
      "Product and feature language",
      "Locale-specific variants",
    ],
    link: {
      label: "Explore Terminology Management",
      href: `${STEPS_URL}/terminology-management/`,
    },
  },
  {
    icon: "layers",
    title: "Translation Memory",
    text: "Reuse previously approved source and target segments to maintain continuity, support updates, and avoid unnecessary retranslations.",
    items: [
      "Approved segment reuse",
      "Cross-release consistency",
      "Reliable reference content",
      "Efficient recurring updates",
    ],
    link: {
      label: "Explore Translation Memory",
      href: `${STEPS_URL}/translation-memory/`,
    },
  },
  {
    icon: "style",
    title: "Style and Brand Requirements",
    text: "Give post-editors clear direction for voice, formality, capitalization, punctuation, product references, units, inclusive language, and regional conventions.",
    items: [
      "Voice and tone",
      "Formality and register",
      "Numbers and formatting",
      "Regional language preferences",
    ],
  },
  {
    icon: "spark",
    title: "Continuous Linguistic Improvement",
    text: "Maintain approved terminology, client feedback, and final translations so each release starts from a stronger, more consistent linguistic foundation.",
    items: [
      "Reviewer feedback capture",
      "Approved language updates",
      "Version continuity",
      "Stronger future decisions",
    ],
  },
];

const regulatedControls = [
  "Domain-qualified post-editors",
  "Client-approved terminology",
  "Full source-to-target review",
  "Independent linguistic revision",
  "Automated quality checks",
  "Formal query resolution",
  "Client or in-country review",
  "Controlled versions and approvals",
];

const regulatedContexts = [
  {
    title: "Patient and User Safety",
    text: "Use precise terminology, clear risk language, and documented review for patient, clinical, healthcare, and medical device content.",
  },
  {
    title: "Legal and Financial Consequence",
    text: "Apply enhanced scrutiny where small changes can affect obligations, disclosures, claims, coverage, or compliance.",
  },
  {
    title: "Product and Operational Safety",
    text: "Protect warnings, measurements, component names, procedures, and software strings used to operate or maintain products.",
  },
  {
    title: "Regulatory Oversight",
    text: "Use controlled terminology, query resolution, version management, and approval steps for documents subject to formal oversight.",
  },
  {
    title: "Public Access and Essential Information",
    text: "Address accessibility, language level, community understanding, and consistency for public-facing or essential information.",
  },
];

const contentTypeGroups = [
  {
    icon: "source",
    title: "Product and Technical Content",
    items: [
      "User manuals and operating instructions",
      "Installation and maintenance guides",
      "Technical specifications",
      "Product documentation",
      "Standard operating procedures",
      "Engineering and safety content",
    ],
  },
  {
    icon: "technical",
    title: "Digital Products and Customer Support",
    items: [
      "Software and application strings",
      "User interfaces and release notes",
      "Knowledge bases and help centers",
      "Frequently asked questions",
      "Chat and support content",
      "Customer-service templates",
    ],
  },
  {
    icon: "book",
    title: "Business and Training Content",
    items: [
      "Internal communications",
      "Corporate policies and procedures",
      "Employee training",
      "E-learning modules",
      "Research materials and reports",
      "Presentations and operational content",
    ],
  },
  {
    icon: "cart",
    title: "E-Commerce and Content Operations",
    items: [
      "Product titles and descriptions",
      "Catalog attributes",
      "Marketplace content",
      "Website updates",
      "Search metadata",
      "High-volume content variations",
    ],
  },
  {
    icon: "spark",
    title: "Marketing Production Content",
    items: [
      "Informational marketing materials",
      "Recurring campaign production",
      "Product communications",
      "Structured website content",
      "Content variations",
      "Human-led transcreation when creativity is essential",
    ],
  },
  {
    icon: "shield",
    title: "Regulated Documentation",
    items: [
      "Selected medical and life sciences content",
      "Legal and financial materials",
      "Insurance documentation",
      "Compliance communications",
      "Controlled review workflows",
      "Additional validation where required",
    ],
  },
];

const industries = [
  {
    title: "Life Sciences",
    text: "Terminology management and risk-based controls for clinical, pharmaceutical, medical, and patient-facing content.",
    href: `${STEPS_URL}/life-sciences-translation-services/`,
  },
  {
    title: "Medical Devices",
    text: "Consistency across instructions for use, labeling, software, training, and product documentation.",
    href: `${STEPS_URL}/medical-device-translation-services/`,
  },
  {
    title: "Healthcare",
    text: "Understandable multilingual information for providers, patients, members, and healthcare operations.",
    href: `${STEPS_URL}/healthcare-translation-services/`,
  },
  {
    title: "Legal",
    text: "Legal linguists for contracts, policies, litigation materials, intellectual property, and jurisdiction-sensitive terms.",
    href: `${STEPS_URL}/legal-translation-services/`,
  },
  {
    title: "Financial Services",
    text: "Controlled terminology and quality review for banking, investment, insurance, compliance, and customer communications.",
    href: `${STEPS_URL}/financial-translation-services/`,
  },
  {
    title: "Software and SaaS",
    text: "Protection for variables, placeholders, interface constraints, support content, and recurring releases.",
    href: `${STEPS_URL}/software-translation-services/`,
  },
  {
    title: "AI and Machine Learning",
    text: "Post-editing, output review, linguistic evaluation, annotation, and human feedback for multilingual AI programs.",
    href: `${STEPS_URL}/ai-machine-learning-translation-services/`,
  },
  {
    title: "Manufacturing",
    text: "Accurate component terminology, procedures, warnings, specifications, and documentation across global operations.",
    href: `${STEPS_URL}/manufacturing-translation-services/`,
  },
  {
    title: "Automotive",
    text: "Vehicle documentation, software, diagnostics, training, manufacturing content, and customer information.",
    href: `${STEPS_URL}/automotive-translation-services/`,
  },
  {
    title: "Retail and E-Commerce",
    text: "Large catalogs and frequent product updates with consistent attributes, brand terminology, and market language.",
    href: `${STEPS_URL}/retail-ecommerce-translation-services/`,
  },
];

const enterpriseCapabilities = [
  {
    icon: "upload",
    title: "Automated Content Intake",
    text: "Submit documents and structured content through the Stepes platform, customer portal, API, or configured enterprise workflow.",
  },
  {
    icon: "structure",
    title: "Workflow Routing",
    text: "Route content by language, subject matter, file type, quality level, or business risk so sensitive material receives additional review.",
  },
  {
    icon: "globe",
    title: "Parallel Multilingual Production",
    text: "Process multiple languages simultaneously using centrally managed instructions, terminology, and quality requirements.",
  },
  {
    icon: "clock",
    title: "Continuous Localization",
    text: "Support recurring software, product, website, support, and documentation updates through ongoing release workflows.",
  },
  {
    icon: "audience",
    title: "Stakeholder Collaboration",
    text: "Connect localization teams, subject-matter experts, business owners, linguists, and in-country reviewers in defined workflow stages.",
  },
  {
    icon: "report",
    title: "Quality and Performance Visibility",
    text: "Track delivery, queries, issue resolution, linguistic feedback, and quality data at the level required for the engagement.",
  },
];

const enterpriseLinks = [
  {
    label: "Enterprise Translation Management",
    href: `${STEPS_URL}/enterprise-translation-management/`,
  },
  {
    label: "Customer Translation Portal",
    href: `${STEPS_URL}/customer-translation-portal/`,
  },
  {
    label: "Translation API",
    href: `${STEPS_URL}/translation-api/`,
  },
  {
    label: "Global Content Operations",
    href: `${STEPS_URL}/global-content-operations/`,
  },
];

const securityControls = [
  "Secure content submission and delivery",
  "Controlled project access",
  "Qualified and approved linguistic resources",
  "Confidentiality requirements",
  "Role-based workflow participation",
  "Client-specific handling instructions",
  "Controlled linguistic assets",
  "Version and approval management",
  "Documented project activity",
  "Approved AI and technology workflows",
];

const differentiators = [
  {
    icon: "ai",
    title: "AI and Human Expertise in One Workflow",
    text: "AI-enabled translation, professional linguists, terminology management, workflow automation, and quality assurance managed together.",
  },
  {
    icon: "human",
    title: "Native-Language, Domain-Matched Linguists",
    text: "Post-editors selected according to target language, locale, subject matter, content type, and required quality level.",
  },
  {
    icon: "gauge",
    title: "Fit-for-Purpose Quality",
    text: "Post-editing requirements matched to audience, visibility, complexity, and business risk rather than a one-size-fits-all process.",
  },
  {
    icon: "technical",
    title: "Flexible Technology Support",
    text: "A complete Stepes workflow or professional post-editing for output generated by your own models, platforms, and systems.",
  },
  {
    icon: "layers",
    title: "Enterprise Linguistic Governance",
    text: "Translation memory, terminology, style requirements, approved content, and reviewer feedback maintained across projects and releases.",
  },
  {
    icon: "report",
    title: "Measurable Requirements",
    text: "Quality expectations, error categories, review responsibilities, and acceptance criteria established before production begins.",
  },
  {
    icon: "shield",
    title: "Support for Regulated Industries",
    text: "Quality processes for life sciences, medical devices, healthcare, legal, financial, and other specialized content.",
  },
  {
    icon: "globe",
    title: "Global Scale",
    text: "More than 100 languages for individual projects, high-volume production, and ongoing multilingual programs.",
  },
];

const faqs = [
  {
    question: "What is machine translation post-editing?",
    answer:
      "Machine translation post-editing is the process in which a qualified linguist reviews machine- or AI-generated translation against the original source and corrects it according to defined quality requirements. The post-editor may address accuracy, omissions, additions, terminology, grammar, fluency, style, locale conventions, numbers, formatting, and technical elements.",
  },
  {
    question: "What does MTPE stand for?",
    answer:
      "MTPE stands for machine translation post-editing. The term covers professional human review of output from conventional machine translation, neural translation systems, generative AI, and large language models when the goal is to produce an approved final translation.",
  },
  {
    question: "What is the difference between light and full post-editing?",
    answer:
      "Light post-editing corrects essential issues so the content is understandable and usable, while avoiding optional stylistic changes. Full post-editing provides a comprehensive source-to-target review covering accuracy, completeness, terminology, grammar, fluency, consistency, style, locale conventions, and technical integrity.",
  },
  {
    question: "Is MTPE the same as translation proofreading?",
    answer:
      "No. Proofreading usually examines near-final target-language content for surface-level language or presentation errors. MTPE requires the linguist to compare machine-generated output with the source and correct errors in meaning, completeness, terminology, and context.",
  },
  {
    question: "Can full MTPE produce publishable translation quality?",
    answer:
      "Full post-editing can produce accurate, fluent, and publishable content when the machine output provides a suitable starting point and the workflow includes qualified linguists, clear instructions, terminology resources, and appropriate quality controls. Results depend on the content, language pair, subject matter, and initial output quality.",
  },
  {
    question: "When should MTPE be used instead of human translation?",
    answer:
      "MTPE can be effective for structured, repetitive, informational, technical, and high-volume content when AI translation produces useful initial output. Human translation may be more appropriate for highly creative, emotionally sensitive, legally consequential, or linguistically complex material.",
  },
  {
    question: "What content is not suitable for MTPE?",
    answer:
      "Brand taglines, creative campaign concepts, literary material, highly ambiguous source content, and some sensitive or high-risk documents may be unsuitable. Regulated content should be assessed carefully and may require additional review, validation, or a human-led workflow.",
  },
  {
    question: "Can Stepes post-edit translations generated by our own system?",
    answer:
      "Yes. Stepes can post-edit content generated by your internal AI solution, enterprise language model, machine translation engine, TMS, or another provider. We can work with your terminology, style guide, translation memory, instructions, and quality criteria without requiring you to replace your existing technology.",
  },
  {
    question: "Can Stepes review LLM-generated translations?",
    answer:
      "Yes. Stepes linguists can post-edit translations generated by large language models and other generative AI systems. When the objective is to score or compare model output rather than deliver a fully edited translation, AI output review or LLM evaluation may be more appropriate.",
  },
  {
    question: "Which machine translation systems can Stepes work with?",
    answer:
      "Stepes can work with output from major commercial machine translation platforms, enterprise AI systems, custom neural translation engines, large language models, client-developed solutions, and translation management systems. The approved system and data-handling process are confirmed for each engagement.",
  },
  {
    question: "How is MTPE quality measured?",
    answer:
      "Quality can be measured through defined error categories and severity levels covering accuracy, completeness, terminology, grammar, fluency, style, locale conventions, and technical integrity. Deliverables may include corrected files, tracked changes, comments, classifications, scores, or pass/fail assessments.",
  },
  {
    question: "How is machine translation post-editing priced?",
    answer:
      "Pricing depends on source word count, language pair, subject matter, file format, initial machine translation quality, required post-editing level, terminology preparation, delivery timeline, and additional review requirements. Client-provided output can be assessed before quoting.",
  },
  {
    question: "How long does an MTPE project take?",
    answer:
      "Turnaround depends on volume, language coverage, content complexity, file preparation, post-editing level, and review requirements. Multiple languages can often be processed in parallel. Stepes provides a project plan after reviewing the files and delivery expectations.",
  },
  {
    question: "Can MTPE be used for regulated content?",
    answer:
      "MTPE may support regulated content when the approach is appropriate and accompanied by necessary controls such as domain-qualified linguists, approved terminology, full source-to-target editing, independent revision, documented query resolution, and client review. Some content may require human translation or additional validation instead.",
  },
  {
    question: "What languages and file formats does Stepes support?",
    answer:
      "Stepes provides machine translation post-editing services in more than 100 languages and supports common business documents, technical files, structured content, software localization formats, website content, multimedia scripts, and enterprise publishing workflows.",
  },
  {
    question: "How does Stepes protect confidential content during MTPE?",
    answer:
      "Stepes can configure controlled workflows for sensitive enterprise content, including secure submission and delivery, restricted project access, approved linguistic resources, confidentiality requirements, and client-specific handling instructions. The authorized technology and AI approach are established before production begins.",
  },
];

const relatedServices = [
  {
    title: "AI Translation Services",
    text: "Generate multilingual content at speed and scale through AI-enabled translation workflows configured around your content and business requirements.",
    href: `${STEPS_URL}/ai-translation-services/`,
  },
  {
    title: "AI Output Review",
    text: "Evaluate AI-generated multilingual content through error classification, severity assessment, scoring, comments, and acceptance decisions.",
    href: `${STEPS_URL}/ai-output-review/`,
  },
  {
    title: "LLM Evaluation Services",
    text: "Measure language-model performance across prompts, languages, domains, and datasets using qualified multilingual evaluators.",
    href: `${STEPS_URL}/llm-evaluation-services/`,
  },
  {
    title: "Translation Quality Assurance",
    text: "Establish quality requirements and verify multilingual content using linguistic review, automated QA, terminology checks, and measurable error frameworks.",
    href: `${STEPS_URL}/translation-quality-assurance/`,
  },
  {
    title: "Terminology Management",
    text: "Create and govern approved multilingual terminology for products, services, industries, and global content programs.",
    href: `${STEPS_URL}/terminology-management/`,
  },
  {
    title: "Translation Memory",
    text: "Reuse approved translations to maintain consistency across documents, releases, and recurring content.",
    href: `${STEPS_URL}/translation-memory/`,
  },
  {
    title: "Professional Translation Services",
    text: "Use expert human translators when your content requires a human-led workflow from the beginning.",
    href: `${STEPS_URL}/professional-translation-services/`,
  },
  {
    title: "Security & Compliance",
    text: "Explore Stepes security, privacy, quality governance, and enterprise content protection practices.",
    href: `${STEPS_URL}/security-and-compliance/`,
  },
];

const relatedInsights = [
  {
    label: "What Is Machine Translation Post-Editing?",
    href: `${STEPS_URL}/resources/ai-translation-insights/what-is-machine-translation-post-editing/`,
  },
  {
    label: "Light vs. Full Machine Translation Post-Editing",
    href: `${STEPS_URL}/resources/ai-translation-insights/light-vs-full-post-editing/`,
  },
  {
    label: "MTPE vs. Human Translation: How to Choose",
    href: `${STEPS_URL}/resources/ai-translation-insights/mtpe-vs-human-translation/`,
  },
  {
    label: "How to Determine Whether Content Is Suitable for MTPE",
    href: `${STEPS_URL}/resources/ai-translation-insights/mtpe-content-suitability/`,
  },
  {
    label: "How Machine Translation Post-Editing Quality Is Measured",
    href: `${STEPS_URL}/resources/ai-translation-insights/measuring-mtpe-quality/`,
  },
  {
    label: "ISO 18587 and Professional Machine Translation Post-Editing",
    href: `${STEPS_URL}/resources/ai-translation-insights/iso-18587-mtpe/`,
  },
  {
    label: "Post-Editing LLM-Generated Translations",
    href: `${STEPS_URL}/resources/ai-translation-insights/llm-translation-post-editing/`,
  },
  {
    label: "MTPE for Regulated and High-Risk Content",
    href: `${STEPS_URL}/resources/ai-translation-insights/mtpe-regulated-content/`,
  },
];

const Eyebrow = ({ children, dark = false }) => (
  <div className={`mtpe-eyebrow${dark ? " mtpe-eyebrow--dark" : ""}`}>
    {children}
  </div>
);

const ArrowLink = ({ href, children, className = "" }) => (
  <a className={`mtpe-arrow-link ${className}`} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

export default function MachineTranslationPostEditingWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="mtpe-page" data-section-count="19" data-wireframe-spec="1.4">
      <style>{`
        .mtpe-page {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --magenta-light: #F2A7C6;
          --blush: #FDF2F7;
          --ink: #171925;
          --ink-soft: #4D566A;
          --muted: #6D7688;
          --line: #E3E6EC;
          --line-dark: rgba(255,255,255,.16);
          --canvas: #FFFFFF;
          --surface: #F7F8FA;
          color: var(--ink);
          background: var(--canvas);
          font-family: Inter, "Avenir Next", "Segoe UI", Helvetica, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: hidden;
          overflow-x: clip;
        }

        .mtpe-page *,
        .mtpe-page *::before,
        .mtpe-page *::after { box-sizing: border-box; }

        .mtpe-page p,
        .mtpe-page h1,
        .mtpe-page h2,
        .mtpe-page h3,
        .mtpe-page a,
        .mtpe-page span { overflow-wrap: anywhere; }

        .mtpe-page a { color: inherit; }
        .mtpe-page a,
        .mtpe-page button { -webkit-tap-highlight-color: transparent; }

        .mtpe-shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .mtpe-section { padding: 96px 0; }
        .mtpe-section--dense { padding: 80px 0; }

        .mtpe-eyebrow {
          margin: 0 0 16px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .16em;
          text-transform: uppercase;
        }

        .mtpe-eyebrow--dark { color: var(--magenta-light); }

        .mtpe-h1,
        .mtpe-h2,
        .mtpe-h3 {
          margin: 0;
          color: var(--ink);
          font-weight: 600;
          letter-spacing: -.025em;
        }

        .mtpe-h1 {
          max-width: 980px;
          font-size: 48px;
          line-height: 1.08;
        }

        .mtpe-h2 {
          max-width: 760px;
          font-size: 36px;
          line-height: 1.16;
        }

        .mtpe-h3 {
          font-size: 24px;
          line-height: 1.25;
        }

        .mtpe-lead {
          margin: 24px 0 0;
          max-width: 790px;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .mtpe-body {
          margin: 0;
          max-width: 760px;
          color: var(--ink-soft);
          font-size: 16px;
        }

        .mtpe-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        .mtpe-btn {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
        }

        .mtpe-page a.mtpe-btn--primary,
        .mtpe-page a.mtpe-btn--primary:visited,
        .mtpe-page a.mtpe-btn--primary:hover,
        .mtpe-page a.mtpe-btn--primary:active,
        .mtpe-page a.mtpe-btn--primary:focus-visible {
          color: #fff;
          -webkit-text-fill-color: #fff;
        }

        .mtpe-btn--primary {
          background: var(--magenta);
          box-shadow: 0 10px 24px rgba(193,29,99,.18);
        }

        .mtpe-page a.mtpe-btn--secondary,
        .mtpe-page a.mtpe-btn--secondary:visited,
        .mtpe-page a.mtpe-btn--secondary:hover,
        .mtpe-page a.mtpe-btn--secondary:active,
        .mtpe-page a.mtpe-btn--secondary:focus-visible {
          color: var(--magenta-deep);
          -webkit-text-fill-color: var(--magenta-deep);
        }

        .mtpe-btn--secondary {
          background: #fff;
          border-color: #D9DDE5;
        }

        .mtpe-btn svg { flex: 0 0 auto; }

        .mtpe-btn:hover { transform: translateY(-1px); }
        .mtpe-btn--primary:hover { background: var(--magenta-dark); box-shadow: 0 13px 28px rgba(193,29,99,.22); }
        .mtpe-btn--secondary:hover { border-color: #BFC5D0; background: #FCFCFD; }
        .mtpe-btn:focus-visible,
        .mtpe-arrow-link:focus-visible {
          outline: 3px solid rgba(193,29,99,.22);
          outline-offset: 3px;
        }

        .mtpe-arrow-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }

        .mtpe-page a.mtpe-arrow-link,
        .mtpe-page a.mtpe-arrow-link:visited,
        .mtpe-page a.mtpe-arrow-link:hover,
        .mtpe-page a.mtpe-arrow-link:active,
        .mtpe-page a.mtpe-arrow-link:focus-visible {
          color: var(--magenta);
          -webkit-text-fill-color: var(--magenta);
        }

        .mtpe-arrow-link svg { transition: transform .18s ease; }
        .mtpe-arrow-link:hover svg { transform: translateX(3px); }

        /* Hero */
        .mtpe-hero {
          position: relative;
          padding: 104px 0 42px;
          overflow: hidden;
          background:
            radial-gradient(circle at 50% 0%, rgba(253,242,247,.98), rgba(255,255,255,0) 48%),
            #fff;
          isolation: isolate;
        }

        .mtpe-hero::before,
        .mtpe-hero::after {
          position: absolute;
          z-index: -1;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(193,29,99,.08);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .mtpe-hero::before { top: -220px; left: -120px; }
        .mtpe-hero::after { top: -250px; right: -160px; }

        .mtpe-hero-copy {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-workbench {
          position: relative;
          margin-top: 54px;
          overflow: hidden;
          border: 1px solid #DEE2E9;
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 22px 60px rgba(23,25,37,.09);
        }

        .mtpe-workbench-topbar {
          display: flex;
          min-height: 54px;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 0 24px;
          border-bottom: 1px solid var(--line);
          background: #FBFBFC;
        }

        .mtpe-workbench-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--ink-soft);
          font-size: 14px;
          font-weight: 600;
        }

        .mtpe-workbench-mark {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--magenta);
          box-shadow: 14px 0 0 #E8B8CB, 28px 0 0 #E6E8ED;
          margin-right: 28px;
        }

        .mtpe-workbench-status {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #3E6656;
          font-size: 14px;
          font-weight: 600;
        }

        .mtpe-workbench-status::before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #5EA57E;
          content: "";
        }

        .mtpe-workbench-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .mtpe-workbench-stage {
          min-width: 0;
          padding: 30px 28px 32px;
          border-right: 1px solid var(--line);
        }

        .mtpe-workbench-stage:last-child { border-right: 0; }
        .mtpe-workbench-stage--featured {
          position: relative;
          background: var(--blush);
        }

        .mtpe-workbench-stage--featured::before {
          position: absolute;
          top: 0;
          right: 28px;
          left: 28px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--magenta);
          content: "";
        }

        .mtpe-stage-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 20px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .06em;
          text-transform: uppercase;
        }

        .mtpe-stage-label svg { color: var(--magenta); }

        .mtpe-language {
          display: inline-flex;
          margin-bottom: 16px;
          align-items: center;
          gap: 6px;
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
        }

        .mtpe-translation {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
        }

        .mtpe-translation-note {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 20px;
          padding-top: 18px;
          border-top: 1px solid rgba(193,29,99,.16);
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-translation-note svg {
          flex: 0 0 auto;
          margin-top: 1px;
          color: var(--magenta);
        }

        .mtpe-workbench-footer {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
          background: #FBFBFC;
        }

        .mtpe-workbench-metric {
          display: flex;
          min-height: 58px;
          align-items: center;
          gap: 9px;
          padding: 12px 24px;
          border-right: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 14px;
        }

        .mtpe-workbench-metric:last-child { border-right: 0; }
        .mtpe-workbench-metric svg { color: var(--magenta); }
        .mtpe-workbench-metric strong { color: var(--ink); font-weight: 600; }

        .mtpe-trust-strip {
          margin-top: 42px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: rgba(255,255,255,.86);
        }

        .mtpe-trust-items {
          display: flex;
          min-height: 78px;
          align-items: center;
          justify-content: center;
          gap: 18px 32px;
          flex-wrap: wrap;
          padding: 16px 0;
        }

        .mtpe-trust-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #4E586A;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          white-space: nowrap;
        }

        .mtpe-trust-check {
          display: inline-flex;
          width: 22px;
          height: 22px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--magenta);
          background: var(--blush);
        }

        /* Overview */
        .mtpe-overview-heading {
          display: grid;
          grid-template-columns: minmax(300px, .82fr) minmax(420px, 1.18fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-definition {
          position: relative;
          margin-top: 52px;
          padding: 34px 38px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: linear-gradient(90deg, var(--blush), rgba(253,242,247,.28) 58%, rgba(253,242,247,0));
        }

        .mtpe-definition::before {
          position: absolute;
          top: 0;
          left: 38px;
          width: 48px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--magenta);
          content: "";
        }

        .mtpe-definition strong { color: var(--ink); font-weight: 600; }

        .mtpe-comparison {
          margin-top: 50px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: #fff;
        }

        .mtpe-comparison-head,
        .mtpe-comparison-row {
          display: grid;
          grid-template-columns: 1.05fr 1fr 1.35fr;
          align-items: stretch;
        }

        .mtpe-comparison-head {
          background: #F7F8FA;
          border-bottom: 1px solid var(--line);
        }

        .mtpe-comparison-head > div {
          padding: 15px 22px;
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mtpe-comparison-row {
          border-bottom: 1px solid var(--line);
        }

        .mtpe-comparison-row:last-child { border-bottom: 0; }
        .mtpe-comparison-row--emphasis { background: var(--blush); }

        .mtpe-comparison-cell {
          display: flex;
          min-width: 0;
          align-items: center;
          padding: 20px 22px;
          border-right: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-comparison-cell:last-child { border-right: 0; }
        .mtpe-comparison-service { color: var(--ink); font-weight: 600; }
        .mtpe-comparison-service a { color: var(--magenta); text-decoration: none; }
        .mtpe-comparison-service a:hover { text-decoration: underline; text-underline-offset: 4px; }

        .mtpe-overview-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 28px;
          margin-top: 24px;
        }

        /* Dark risk section */
        .mtpe-risk-section {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          color: #fff;
          background: #1B1720;
        }

        .mtpe-risk-section::after {
          position: absolute;
          top: -190px;
          right: -120px;
          width: 430px;
          height: 430px;
          border: 1px solid rgba(255,255,255,.06);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .mtpe-risk-top {
          display: grid;
          grid-template-columns: minmax(320px, .88fr) minmax(400px, 1.12fr);
          gap: 88px;
          align-items: end;
        }

        .mtpe-risk-section .mtpe-h2 { color: #fff; }
        .mtpe-risk-intro { color: #D2CBD5; }

        .mtpe-risk-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 56px;
          border-top: 1px solid var(--line-dark);
          border-left: 1px solid var(--line-dark);
        }

        .mtpe-risk-item {
          min-width: 0;
          padding: 30px 30px 34px;
          border-right: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
        }

        .mtpe-risk-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          border-radius: 12px;
          color: var(--magenta-light);
          background: rgba(193,29,99,.15);
        }

        .mtpe-risk-item h3 {
          margin: 0;
          color: #fff;
          font-size: 20px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-risk-item p {
          margin: 12px 0 0;
          color: #D0C9D2;
          font-size: 16px;
          line-height: 1.65;
        }

        .mtpe-risk-conclusion {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid var(--line-dark);
          color: #E9E5EB;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 500;
        }

        .mtpe-risk-conclusion .mtpe-risk-rule {
          flex: 0 0 28px;
          width: 28px;
          height: 3px;
          margin-top: .72em;
          border-radius: 4px;
          background: var(--magenta);
        }

        /* Service levels */
        .mtpe-levels-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-levels-header .mtpe-lead { max-width: 780px; }

        .mtpe-levels-matrix {
          margin-top: 52px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 26px;
          background: #fff;
        }

        .mtpe-levels-grid {
          display: grid;
          grid-template-columns: 188px repeat(4, 1fr);
        }

        .mtpe-levels-grid > div {
          min-width: 0;
          padding: 21px 20px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-levels-grid > div:nth-child(5n) { border-right: 0; }
        .mtpe-levels-grid > div:nth-last-child(-n + 5) { border-bottom: 0; }

        .mtpe-levels-corner,
        .mtpe-levels-label {
          background: #F8F9FA;
        }

        .mtpe-levels-corner {
          color: var(--muted);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .mtpe-levels-label {
          display: flex;
          align-items: center;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
        }

        .mtpe-levels-heading {
          color: var(--ink);
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }

        .mtpe-levels-heading--featured,
        .mtpe-levels-cell--featured { background: var(--blush); }

        .mtpe-levels-heading--featured {
          position: relative;
          color: var(--magenta-deep);
        }

        .mtpe-levels-heading--featured::before {
          position: absolute;
          top: 0;
          left: 20px;
          right: 20px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--magenta);
          content: "";
        }

        .mtpe-levels-cell {
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.58;
        }

        .mtpe-levels-editorial {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin-top: 48px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-level-detail {
          padding: 34px 40px 36px 0;
        }

        .mtpe-level-detail + .mtpe-level-detail {
          padding-right: 0;
          padding-left: 40px;
          border-left: 1px solid var(--line);
        }

        .mtpe-level-detail h3 {
          margin: 0;
          color: var(--ink);
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .mtpe-level-detail p {
          margin: 14px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
        }

        .mtpe-human-note {
          display: grid;
          grid-template-columns: minmax(220px, .7fr) minmax(420px, 1.3fr);
          gap: 52px;
          align-items: center;
          margin-top: 40px;
          padding: 34px 38px;
          border-radius: 24px;
          background: #F7F8FA;
        }

        .mtpe-human-note h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-human-note p { margin: 0; color: var(--ink-soft); }

        /* Content suitability */
        .mtpe-fit-section { background: #F7F8FA; }

        .mtpe-fit-top {
          display: grid;
          grid-template-columns: minmax(320px, .85fr) minmax(420px, 1.15fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-fit-factors {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 54px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
          background: #fff;
        }

        .mtpe-fit-factor {
          min-width: 0;
          padding: 28px 28px 30px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-fit-factor-head {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .mtpe-fit-factor-icon {
          display: inline-flex;
          width: 40px;
          height: 40px;
          flex: 0 0 40px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-fit-factor h3 {
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-fit-factor p {
          margin: 14px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.62;
        }

        .mtpe-fit-matrix {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 50px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #fff;
        }

        .mtpe-fit-column {
          position: relative;
          min-width: 0;
          padding: 34px 32px 36px;
          border-right: 1px solid var(--line);
        }

        .mtpe-fit-column:last-child { border-right: 0; }
        .mtpe-fit-column--strong { background: var(--blush); }

        .mtpe-fit-column--strong::before {
          position: absolute;
          top: 0;
          right: 32px;
          left: 32px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--magenta);
          content: "";
        }

        .mtpe-fit-column h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .mtpe-fit-column > p {
          margin: 13px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-fit-list {
          display: grid;
          gap: 12px;
          margin: 24px 0 0;
          padding: 22px 0 0;
          border-top: 1px solid var(--line);
          list-style: none;
        }

        .mtpe-fit-list li {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-fit-list-marker {
          width: 6px;
          height: 6px;
          flex: 0 0 6px;
          margin-top: .62em;
          border-radius: 50%;
          background: #AEB5C1;
        }

        .mtpe-fit-column--strong .mtpe-fit-list-marker { background: var(--magenta); }

        .mtpe-fit-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 36px;
          padding-top: 30px;
          border-top: 1px solid var(--line);
        }

        .mtpe-fit-cta p {
          margin: 0;
          max-width: 720px;
          color: var(--ink-soft);
          font-size: 16px;
        }

        /* Service models */
        .mtpe-models-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-models-header .mtpe-lead { max-width: 800px; }

        .mtpe-models-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .mtpe-model {
          min-width: 0;
          padding: 34px 36px 38px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-model-label {
          margin: 0 0 12px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .mtpe-model h3 {
          margin: 0;
          color: var(--ink);
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .mtpe-model p {
          margin: 15px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.66;
        }

        .mtpe-model .mtpe-arrow-link { margin-top: 16px; }

        .mtpe-models-note {
          display: grid;
          grid-template-columns: minmax(240px, .7fr) minmax(420px, 1.3fr);
          gap: 50px;
          align-items: center;
          margin-top: 40px;
          padding: 34px 38px;
          border-radius: 24px;
          background: var(--blush);
        }

        .mtpe-models-note h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-models-note p { margin: 0; color: var(--ink-soft); }

        /* Workflow */
        .mtpe-workflow-section {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          color: #fff;
          background: #1B1720;
        }

        .mtpe-workflow-section::before {
          position: absolute;
          right: -130px;
          bottom: -230px;
          width: 470px;
          height: 470px;
          border: 1px solid rgba(255,255,255,.055);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .mtpe-workflow-top {
          display: grid;
          grid-template-columns: minmax(320px, .88fr) minmax(420px, 1.12fr);
          gap: 88px;
          align-items: end;
        }

        .mtpe-workflow-section .mtpe-h2 { color: #fff; }
        .mtpe-workflow-intro { color: #D2CBD5; }

        .mtpe-workflow-list {
          margin-top: 54px;
          border-top: 1px solid var(--line-dark);
        }

        .mtpe-workflow-step {
          display: grid;
          grid-template-columns: 78px minmax(260px, .78fr) minmax(420px, 1.22fr);
          align-items: center;
          min-height: 116px;
          border-bottom: 1px solid var(--line-dark);
        }

        .mtpe-workflow-number {
          color: var(--magenta-light);
          font-size: 18px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: .04em;
        }

        .mtpe-workflow-step h3 {
          margin: 0;
          padding-right: 34px;
          color: #fff;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-workflow-step p {
          margin: 0;
          color: #D0C9D2;
          font-size: 16px;
          line-height: 1.65;
        }

        .mtpe-workflow-outcome {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-top: 32px;
          color: #E9E5EB;
          font-size: 17px;
          line-height: 1.58;
          font-weight: 500;
        }

        .mtpe-workflow-outcome::before {
          width: 28px;
          height: 3px;
          flex: 0 0 28px;
          margin-top: .72em;
          border-radius: 4px;
          background: var(--magenta);
          content: "";
        }

        /* Quality review scope */
        .mtpe-quality-top {
          display: grid;
          grid-template-columns: minmax(320px, .86fr) minmax(420px, 1.14fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-quality-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
          background: #fff;
        }

        .mtpe-quality-item {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 18px;
          min-width: 0;
          padding: 30px 32px 32px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-quality-item--full { grid-column: 1 / -1; }

        .mtpe-quality-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-quality-item h3 {
          margin: 0;
          color: var(--ink);
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-quality-list {
          display: grid;
          gap: 8px;
          margin: 15px 0 0;
          padding: 0;
          list-style: none;
        }

        .mtpe-quality-item--full .mtpe-quality-list {
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 32px;
        }

        .mtpe-quality-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-quality-list li::before {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          margin-top: .65em;
          border-radius: 50%;
          background: #AEB5C1;
          content: "";
        }

        .mtpe-quality-callout {
          margin-top: 38px;
          padding: 30px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.6;
        }

        .mtpe-quality-callout strong { color: var(--ink); font-weight: 600; }


        /* Quality requirements */
        .mtpe-requirements-section { background: #F7F8FA; }

        .mtpe-requirements-top {
          display: grid;
          grid-template-columns: minmax(320px, .86fr) minmax(420px, 1.14fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-requirements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
          background: #fff;
        }

        .mtpe-requirement {
          min-width: 0;
          padding: 27px 26px 30px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-requirement h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-requirement p {
          margin: 10px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-deliverables {
          display: grid;
          grid-template-columns: minmax(280px, .72fr) minmax(560px, 1.28fr);
          gap: 46px;
          align-items: start;
          margin-top: 42px;
          padding: 36px 38px;
          border-radius: 24px;
          background: var(--blush);
        }

        .mtpe-deliverables h3 {
          margin: 0;
          color: var(--ink);
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .mtpe-deliverables p {
          margin: 13px 0 0;
          color: var(--ink-soft);
        }

        .mtpe-deliverables-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .mtpe-deliverables-list li,
        .mtpe-control-list li,
        .mtpe-security-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-deliverables-list li::before,
        .mtpe-control-list li::before,
        .mtpe-security-list li::before {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          margin-top: .65em;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
        }

        .mtpe-standard-note {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-top: 32px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.62;
        }

        .mtpe-standard-note::before {
          width: 28px;
          height: 3px;
          flex: 0 0 28px;
          margin-top: .73em;
          border-radius: 4px;
          background: var(--magenta);
          content: "";
        }

        /* Linguistic governance */
        .mtpe-governance-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-governance-header .mtpe-lead { max-width: 810px; }

        .mtpe-governance-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .mtpe-governance-item {
          display: grid;
          grid-template-columns: 50px 1fr;
          gap: 20px;
          min-width: 0;
          padding: 34px 36px 36px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-governance-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-governance-item h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.018em;
        }

        .mtpe-governance-item p {
          margin: 13px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.64;
        }

        .mtpe-governance-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px 22px;
          margin: 20px 0 0;
          padding: 18px 0 0;
          border-top: 1px solid var(--line);
          list-style: none;
        }

        .mtpe-governance-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-governance-list li::before {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          margin-top: .62em;
          border-radius: 50%;
          background: #AEB5C1;
          content: "";
        }

        .mtpe-governance-item .mtpe-arrow-link { margin-top: 17px; }

        /* Regulated content */
        .mtpe-regulated-section {
          position: relative;
          padding: 96px 0;
          overflow: hidden;
          color: #fff;
          background: #1B1720;
        }

        .mtpe-regulated-section::after {
          position: absolute;
          top: -210px;
          left: -130px;
          width: 440px;
          height: 440px;
          border: 1px solid rgba(255,255,255,.055);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .mtpe-regulated-top {
          display: grid;
          grid-template-columns: minmax(320px, .88fr) minmax(420px, 1.12fr);
          gap: 88px;
          align-items: end;
        }

        .mtpe-regulated-section .mtpe-h2 { color: #fff; }
        .mtpe-regulated-intro { color: #D2CBD5; }

        .mtpe-control-list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          margin: 52px 0 0;
          padding: 0;
          border-top: 1px solid var(--line-dark);
          border-left: 1px solid var(--line-dark);
          list-style: none;
        }

        .mtpe-control-list li {
          min-height: 86px;
          padding: 22px 24px;
          border-right: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
          color: #E8E3EA;
        }

        .mtpe-control-list li::before { background: var(--magenta-light); }

        .mtpe-regulated-context-heading {
          margin: 42px 0 0;
          color: #fff;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-regulated-industries {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          margin-top: 18px;
          border-top: 1px solid var(--line-dark);
          border-left: 1px solid var(--line-dark);
        }

        .mtpe-regulated-industry {
          grid-column: span 2;
          min-width: 0;
          padding: 28px 26px 30px;
          border-right: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
        }

        .mtpe-regulated-industry:nth-child(3) { border-right: 0; }
        .mtpe-regulated-industry:nth-child(4),
        .mtpe-regulated-industry:nth-child(5) {
          grid-column: span 3;
          border-bottom: 0;
        }
        .mtpe-regulated-industry:nth-child(5) { border-right: 0; }

        .mtpe-regulated-industry h3 {
          margin: 0;
          color: #fff;
          font-size: 18px;
          line-height: 1.35;
          font-weight: 600;
        }

        .mtpe-regulated-industry p {
          margin: 11px 0 0;
          color: #D0C9D2;
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-regulated-note {
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid var(--line-dark);
          color: #E9E5EB;
          font-size: 17px;
          line-height: 1.62;
        }

        /* Content types */
        .mtpe-content-types-top {
          display: grid;
          grid-template-columns: minmax(320px, .84fr) minmax(420px, 1.16fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-content-types-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .mtpe-content-type {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 17px;
          min-width: 0;
          padding: 30px 28px 32px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-content-type-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-content-type h3 {
          margin: 0;
          color: var(--ink);
          font-size: 20px;
          line-height: 1.34;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-content-type-list {
          display: grid;
          gap: 8px;
          margin: 16px 0 0;
          padding: 0;
          list-style: none;
        }

        .mtpe-content-type-list li {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.55;
        }

        .mtpe-content-type-list li::before {
          width: 5px;
          height: 5px;
          flex: 0 0 5px;
          margin-top: .63em;
          border-radius: 50%;
          background: #AEB5C1;
          content: "";
        }

        .mtpe-content-types-link { margin-top: 28px; }

        /* Industries */
        .mtpe-industries-section { background: #F7F8FA; }

        .mtpe-industries-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-industries-header .mtpe-lead { max-width: 800px; }

        .mtpe-industry-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
          background: #fff;
        }

        .mtpe-industry-item {
          display: grid;
          grid-template-columns: minmax(150px, .42fr) minmax(220px, .58fr) 24px;
          gap: 22px;
          align-items: center;
          min-width: 0;
          min-height: 132px;
          padding: 27px 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          color: inherit;
          text-decoration: none;
          transition: background .18s ease;
        }

        .mtpe-industry-item:hover { background: #FCFCFD; }
        .mtpe-industry-item:focus-visible {
          outline: 3px solid rgba(193,29,99,.2);
          outline-offset: -3px;
        }

        .mtpe-industry-item h3 {
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          line-height: 1.34;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-industry-item p {
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.58;
        }

        .mtpe-industry-item svg { color: var(--magenta); transition: transform .18s ease; }
        .mtpe-industry-item:hover svg { transform: translateX(3px); }

        /* Enterprise scale */
        .mtpe-enterprise-top {
          display: grid;
          grid-template-columns: minmax(320px, .86fr) minmax(420px, 1.14fr);
          gap: 88px;
          align-items: start;
        }

        .mtpe-enterprise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .mtpe-enterprise-item {
          min-width: 0;
          padding: 29px 28px 31px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-enterprise-item-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
          border-radius: 13px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-enterprise-item h3 {
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          line-height: 1.35;
          font-weight: 600;
        }

        .mtpe-enterprise-item p {
          margin: 11px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-enterprise-links {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 38px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: #fff;
        }

        .mtpe-enterprise-link {
          display: flex;
          min-height: 82px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 18px 22px;
          border-right: 1px solid var(--line);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          text-decoration: none;
        }

        .mtpe-enterprise-link:last-child { border-right: 0; }
        .mtpe-enterprise-link svg { flex: 0 0 auto; color: var(--magenta); transition: transform .18s ease; }
        .mtpe-enterprise-link:hover svg { transform: translateX(3px); }
        .mtpe-enterprise-link:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: -3px; }

        /* Security */
        .mtpe-security-section { background: #F7F8FA; }

        .mtpe-security-panel {
          display: grid;
          grid-template-columns: minmax(340px, .84fr) minmax(500px, 1.16fr);
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: #fff;
          box-shadow: 0 18px 48px rgba(23,25,37,.05);
        }

        .mtpe-security-copy {
          padding: 50px 46px;
          background: linear-gradient(145deg, var(--blush), #fff 72%);
        }

        .mtpe-security-mark {
          display: inline-flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          margin-bottom: 25px;
          border-radius: 17px;
          color: var(--magenta);
          background: #fff;
          box-shadow: 0 12px 30px rgba(193,29,99,.11);
        }

        .mtpe-security-copy .mtpe-h2 { max-width: 500px; }
        .mtpe-security-copy .mtpe-body { margin-top: 22px; }
        .mtpe-security-copy .mtpe-arrow-link { margin-top: 22px; }

        .mtpe-security-controls {
          padding: 46px 44px;
        }

        .mtpe-security-controls h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.015em;
        }

        .mtpe-security-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 24px;
          margin: 24px 0 0;
          padding: 26px 0 0;
          border-top: 1px solid var(--line);
          list-style: none;
        }

        .mtpe-security-assurance {
          margin-top: 28px;
          padding-top: 26px;
          border-top: 1px solid var(--line);
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.62;
        }

        /* Why Stepes */
        .mtpe-why-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-why-header .mtpe-lead { max-width: 800px; }

        .mtpe-why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 52px;
          border-top: 1px solid var(--line);
        }

        .mtpe-why-item {
          display: grid;
          grid-template-columns: 46px minmax(0, 1fr);
          grid-template-rows: auto auto;
          column-gap: 16px;
          min-width: 0;
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--line);
        }

        .mtpe-why-icon {
          display: inline-flex;
          grid-row: 1 / span 2;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-why-item h3 {
          grid-column: 2;
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          line-height: 1.36;
          font-weight: 600;
        }

        .mtpe-why-item p {
          grid-column: 2;
          margin: 10px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.62;
        }

        /* FAQ */
        .mtpe-faq-section { background: #F7F8FA; }

        .mtpe-faq-layout {
          display: grid;
          grid-template-columns: minmax(290px, .7fr) minmax(600px, 1.3fr);
          gap: 76px;
          align-items: start;
        }

        .mtpe-faq-intro {
          position: sticky;
          top: 28px;
        }

        .mtpe-faq-intro .mtpe-body { margin-top: 22px; }

        .mtpe-faq-panel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 26px;
          background: #fff;
        }

        .mtpe-faq-item { border-bottom: 1px solid var(--line); }
        .mtpe-faq-item:last-child { border-bottom: 0; }

        .mtpe-faq-question {
          display: grid;
          grid-template-columns: 1fr 34px;
          gap: 22px;
          width: 100%;
          min-height: 76px;
          align-items: center;
          padding: 20px 24px;
          border: 0;
          color: var(--ink);
          background: transparent;
          font: inherit;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }

        .mtpe-faq-question:hover { background: #FCFCFD; }
        .mtpe-faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: -3px; }

        .mtpe-faq-control {
          display: inline-flex;
          width: 32px;
          height: 32px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--magenta);
          background: var(--blush);
        }

        .mtpe-faq-answer {
          padding: 0 68px 24px 24px;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.68;
        }

        .mtpe-faq-answer p { margin: 0; }

        /* Related services */
        .mtpe-related-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .mtpe-related-header .mtpe-lead { max-width: 800px; }

        .mtpe-related-services {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          margin-top: 52px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .mtpe-related-service {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 29px 26px 30px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .mtpe-related-service h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          line-height: 1.38;
          font-weight: 600;
        }

        .mtpe-related-service p {
          margin: 11px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.6;
        }

        .mtpe-related-service .mtpe-arrow-link {
          width: fit-content;
          margin-top: auto;
          padding-top: 17px;
        }

        .mtpe-insights-band {
          display: grid;
          grid-template-columns: minmax(250px, .58fr) minmax(620px, 1.42fr);
          gap: 46px;
          align-items: start;
          margin-top: 42px;
          padding: 38px;
          border-radius: 24px;
          background: #F7F8FA;
        }

        .mtpe-insights-band h3 {
          margin: 0;
          color: var(--ink);
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .mtpe-insights-band p {
          margin: 13px 0 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.62;
        }

        .mtpe-insight-links {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 30px;
        }

        .mtpe-insight-link {
          display: flex;
          min-height: 58px;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          color: var(--ink);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          text-decoration: none;
        }

        .mtpe-insight-link svg { flex: 0 0 auto; color: var(--magenta); transition: transform .18s ease; }
        .mtpe-insight-link:hover svg { transform: translateX(3px); }
        .mtpe-insight-link:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 2px; }

        /* Final CTA */
        .mtpe-final-section { padding: 80px 0 96px; }

        .mtpe-final-cta {
          position: relative;
          overflow: hidden;
          padding: 66px 62px;
          border: 1px solid rgba(193,29,99,.13);
          border-radius: 30px;
          background: var(--blush);
        }

        .mtpe-final-cta::after {
          position: absolute;
          top: -150px;
          right: -120px;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(193,29,99,.09);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .mtpe-final-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
        }

        .mtpe-final-content .mtpe-h2 { max-width: 780px; }
        .mtpe-final-content .mtpe-lead { max-width: 800px; }
        .mtpe-final-content .mtpe-actions { justify-content: flex-start; }

        @media (max-width: 1199px) {
          .mtpe-shell { padding-left: 40px; padding-right: 40px; }
          .mtpe-overview-heading,
          .mtpe-risk-top { gap: 54px; }
          .mtpe-workbench-stage { padding: 26px 22px 28px; }
          .mtpe-levels-grid { grid-template-columns: 160px repeat(4, 1fr); }
          .mtpe-levels-grid > div { padding: 18px 16px; }
          .mtpe-fit-top,
          .mtpe-workflow-top,
          .mtpe-quality-top { gap: 54px; }
          .mtpe-fit-column { padding-left: 26px; padding-right: 26px; }
          .mtpe-workflow-step { grid-template-columns: 68px minmax(220px, .8fr) minmax(360px, 1.2fr); }
        }

        @media (max-width: 1040px) {
          .mtpe-levels-matrix {
            overflow: visible;
            border: 0;
            border-radius: 0;
            background: transparent;
          }
          .mtpe-levels-grid { display: none; }
          .mtpe-levels-matrix .mtpe-level-mobile {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
          .mtpe-levels-editorial { margin-top: 42px; }
        }

        @media (max-width: 900px) {
          .mtpe-shell { padding-left: 24px; padding-right: 24px; }
          .mtpe-h1 { font-size: 42px; }
          .mtpe-h2 { font-size: 32px; }
          .mtpe-h3 { font-size: 22px; }
          .mtpe-section,
          .mtpe-risk-section { padding-top: 80px; padding-bottom: 80px; }
          .mtpe-hero { padding-top: 88px; }
          .mtpe-overview-heading,
          .mtpe-risk-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mtpe-workbench-grid { grid-template-columns: 1fr; }
          .mtpe-workbench-stage { border-right: 0; border-bottom: 1px solid var(--line); }
          .mtpe-workbench-stage:last-child { border-bottom: 0; }
          .mtpe-workbench-footer { grid-template-columns: 1fr; }
          .mtpe-workbench-metric { border-right: 0; border-bottom: 1px solid var(--line); }
          .mtpe-workbench-metric:last-child { border-bottom: 0; }
          .mtpe-risk-grid { grid-template-columns: repeat(2, 1fr); }
          .mtpe-human-note { grid-template-columns: 1fr; gap: 12px; }
          .mtpe-fit-top,
          .mtpe-workflow-top,
          .mtpe-quality-top { grid-template-columns: 1fr; gap: 24px; }
          .mtpe-fit-factors { grid-template-columns: repeat(2, 1fr); }
          .mtpe-fit-matrix { grid-template-columns: 1fr; }
          .mtpe-fit-cta {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }
          .mtpe-fit-cta .mtpe-btn { width: auto; }
          .mtpe-fit-column { border-right: 0; border-bottom: 1px solid var(--line); }
          .mtpe-fit-column:last-child { border-bottom: 0; }
          .mtpe-models-note { grid-template-columns: 1fr; gap: 12px; }
          .mtpe-workflow-step { grid-template-columns: 58px minmax(210px, .78fr) minmax(320px, 1.22fr); }
          .mtpe-quality-grid { grid-template-columns: 1fr; }
          .mtpe-quality-item,
          .mtpe-quality-item--full { grid-column: auto; }
          .mtpe-quality-item--full .mtpe-quality-list { grid-template-columns: 1fr; }
        }

        .mtpe-level-mobile {
          display: none;
          gap: 14px;
          margin-top: 0;
        }

        .mtpe-level-mobile-card {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #fff;
        }

        .mtpe-level-mobile-card--featured { border-color: rgba(193,29,99,.26); background: var(--blush); }

        .mtpe-level-mobile-title {
          padding: 20px 20px 18px;
          border-bottom: 1px solid var(--line);
          color: var(--ink);
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .mtpe-level-mobile-card--featured .mtpe-level-mobile-title { color: var(--magenta-deep); }

        .mtpe-level-mobile-row {
          display: grid;
          grid-template-columns: 118px 1fr;
          gap: 16px;
          padding: 15px 20px;
          border-bottom: 1px solid var(--line);
        }

        .mtpe-level-mobile-row:last-child { border-bottom: 0; }
        .mtpe-level-mobile-label { color: var(--muted); font-size: 16px; line-height: 1.45; font-weight: 600; }
        .mtpe-level-mobile-value { color: var(--ink-soft); font-size: 16px; line-height: 1.55; }

        @media (max-width: 767px) {
          .mtpe-shell { padding-left: 20px; padding-right: 20px; }
          .mtpe-h1 { font-size: 38px; }
          .mtpe-h2 { font-size: 30px; }
          .mtpe-h3 { font-size: 20px; }
          .mtpe-section,
          .mtpe-risk-section { padding-top: 68px; padding-bottom: 68px; }
          .mtpe-hero { padding: 72px 0 30px; }
          .mtpe-lead { font-size: 18px; line-height: 1.62; }
          .mtpe-actions { width: 100%; }
          .mtpe-btn { width: 100%; min-height: 50px; }
          .mtpe-workbench { margin-top: 42px; border-radius: 24px; }
          .mtpe-workbench-topbar { padding: 0 18px; }
          .mtpe-workbench-brand { font-size: 14px; }
          .mtpe-workbench-stage { padding: 24px 20px 26px; }
          .mtpe-workbench-footer { display: none; }
          .mtpe-trust-strip { margin-top: 30px; }
          .mtpe-trust-items { justify-content: flex-start; gap: 12px 18px; }
          .mtpe-trust-item { width: calc(50% - 9px); white-space: normal; }
          .mtpe-definition { margin-top: 38px; padding: 28px 24px; }
          .mtpe-definition::before { left: 24px; width: 40px; }
          .mtpe-comparison { border-radius: 20px; }
          .mtpe-comparison-head { display: none; }
          .mtpe-comparison-row {
            display: block;
            padding: 20px;
          }
          .mtpe-comparison-cell {
            display: block;
            padding: 0;
            border-right: 0;
          }
          .mtpe-comparison-cell + .mtpe-comparison-cell { margin-top: 12px; }
          .mtpe-comparison-cell::before {
            display: block;
            margin-bottom: 3px;
            color: var(--muted);
            font-size: 14px;
            font-weight: 600;
            letter-spacing: .12em;
            text-transform: uppercase;
          }
          .mtpe-comparison-cell:nth-child(1)::before { content: "Service"; }
          .mtpe-comparison-cell:nth-child(2)::before { content: "Starting Content"; }
          .mtpe-comparison-cell:nth-child(3)::before { content: "Primary Purpose"; }
          .mtpe-overview-links { display: block; }
          .mtpe-overview-links .mtpe-arrow-link { display: flex; width: fit-content; }
          .mtpe-risk-grid { grid-template-columns: 1fr; }
          .mtpe-risk-item { padding: 26px 24px 28px; }
          .mtpe-risk-conclusion { font-size: 17px; }
          .mtpe-levels-matrix .mtpe-level-mobile { grid-template-columns: 1fr; }
          .mtpe-levels-editorial { grid-template-columns: 1fr; }
          .mtpe-level-detail,
          .mtpe-level-detail + .mtpe-level-detail { padding: 28px 0; border-left: 0; }
          .mtpe-level-detail + .mtpe-level-detail { border-top: 1px solid var(--line); }
          .mtpe-human-note { padding: 28px 24px; }
          .mtpe-fit-factors { grid-template-columns: 1fr; }
          .mtpe-fit-factor { padding: 26px 24px 28px; }
          .mtpe-fit-column { padding: 30px 24px 32px; }
          .mtpe-fit-column--strong::before { right: 24px; left: 24px; }
          .mtpe-fit-cta { align-items: stretch; flex-direction: column; gap: 20px; }
          .mtpe-fit-cta .mtpe-btn { width: 100%; }
          .mtpe-models-grid { grid-template-columns: 1fr; }
          .mtpe-model { padding: 28px 24px 30px; }
          .mtpe-models-note { padding: 28px 24px; }
          .mtpe-workflow-section { padding-top: 68px; padding-bottom: 68px; }
          .mtpe-workflow-step {
            grid-template-columns: 46px 1fr;
            align-items: start;
            min-height: 0;
            padding: 24px 0;
          }
          .mtpe-workflow-step h3 { padding-right: 0; }
          .mtpe-workflow-step p { grid-column: 2; margin-top: 10px; }
          .mtpe-quality-item { grid-template-columns: 44px 1fr; gap: 15px; padding: 26px 22px 28px; }
          .mtpe-quality-icon { width: 40px; height: 40px; }
          .mtpe-quality-callout { font-size: 17px; }
        }

        @media (max-width: 340px) {
          .mtpe-workbench-topbar { align-items: flex-start; flex-direction: column; gap: 8px; padding-top: 14px; padding-bottom: 14px; }
          .mtpe-trust-item { width: 100%; }
          .mtpe-level-mobile-row { grid-template-columns: 1fr; gap: 4px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mtpe-btn,
          .mtpe-arrow-link svg { transition: none; }
          .mtpe-btn:hover { transform: none; }
        }

        @media (max-width: 320px) {
          .mtpe-shell { padding-left: 20px; padding-right: 20px; }
          .mtpe-translation { font-size: 16px; }
        }


        @media (max-width: 1199px) {
          .mtpe-requirements-top,
          .mtpe-regulated-top,
          .mtpe-content-types-top,
          .mtpe-enterprise-top { gap: 54px; }
          .mtpe-requirements-grid { grid-template-columns: repeat(2, 1fr); }
          .mtpe-deliverables-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .mtpe-regulated-industries { grid-template-columns: repeat(6, minmax(0, 1fr)); }
          .mtpe-why-grid,
          .mtpe-related-services { grid-template-columns: repeat(2, 1fr); }
          .mtpe-why-grid { column-gap: 42px; }
          .mtpe-enterprise-links { grid-template-columns: repeat(2, 1fr); }
          .mtpe-enterprise-link:nth-child(2) { border-right: 0; }
          .mtpe-enterprise-link:nth-child(-n + 2) { border-bottom: 1px solid var(--line); }
          .mtpe-security-panel { grid-template-columns: .9fr 1.1fr; }
          .mtpe-faq-layout { gap: 50px; }
        }

        @media (max-width: 900px) {
          .mtpe-requirements-top,
          .mtpe-regulated-top,
          .mtpe-content-types-top,
          .mtpe-enterprise-top {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .mtpe-deliverables,
          .mtpe-insights-band { grid-template-columns: 1fr; gap: 24px; }
          .mtpe-governance-grid { grid-template-columns: 1fr; }
          .mtpe-control-list { grid-template-columns: repeat(2, 1fr); }
          .mtpe-regulated-industries { grid-template-columns: repeat(2, 1fr); }
          .mtpe-regulated-industry,
          .mtpe-regulated-industry:nth-child(3),
          .mtpe-regulated-industry:nth-child(4),
          .mtpe-regulated-industry:nth-child(5) {
            grid-column: auto;
            border-right: 1px solid var(--line-dark);
            border-bottom: 1px solid var(--line-dark);
          }
          .mtpe-regulated-industry:nth-child(2n) { border-right: 0; }
          .mtpe-regulated-industry:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .mtpe-content-types-grid,
          .mtpe-enterprise-grid { grid-template-columns: repeat(2, 1fr); }
          .mtpe-industry-grid { grid-template-columns: 1fr; }
          .mtpe-industry-item { border-right: 0; }
          .mtpe-security-panel { grid-template-columns: 1fr; }
          .mtpe-security-copy { border-bottom: 1px solid var(--line); }
          .mtpe-faq-layout { grid-template-columns: 1fr; gap: 36px; }
          .mtpe-faq-intro { position: static; }
          .mtpe-insight-links { grid-template-columns: 1fr; }
        }

        @media (max-width: 767px) {
          .mtpe-regulated-section { padding-top: 68px; padding-bottom: 68px; }
          .mtpe-requirements-grid,
          .mtpe-content-types-grid,
          .mtpe-enterprise-grid,
          .mtpe-why-grid,
          .mtpe-related-services { grid-template-columns: 1fr; }
          .mtpe-why-grid { column-gap: 0; }
          .mtpe-deliverables { padding: 28px 24px; }
          .mtpe-deliverables-list { grid-template-columns: 1fr; }
          .mtpe-governance-item { grid-template-columns: 42px 1fr; gap: 15px; padding: 28px 22px 30px; }
          .mtpe-governance-icon { width: 40px; height: 40px; }
          .mtpe-governance-list { grid-template-columns: 1fr; }
          .mtpe-control-list { grid-template-columns: 1fr; }
          .mtpe-control-list li { min-height: 0; padding: 20px 22px; }
          .mtpe-regulated-context-heading { margin-top: 34px; }
          .mtpe-regulated-industries { grid-template-columns: 1fr; }
          .mtpe-regulated-industry,
          .mtpe-regulated-industry:nth-child(2n),
          .mtpe-regulated-industry:last-child {
            grid-column: auto;
            border-right: 0;
            border-bottom: 1px solid var(--line-dark);
          }
          .mtpe-regulated-industry:last-child { border-bottom: 0; }
          .mtpe-content-type { grid-template-columns: 40px 1fr; padding: 26px 22px 28px; }
          .mtpe-content-type-icon { width: 38px; height: 38px; }
          .mtpe-industry-item { grid-template-columns: 1fr 24px; gap: 14px; min-height: 0; padding: 24px 22px; }
          .mtpe-industry-item p { grid-column: 1 / -1; }
          .mtpe-enterprise-links { grid-template-columns: 1fr; }
          .mtpe-enterprise-link,
          .mtpe-enterprise-link:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--line); }
          .mtpe-enterprise-link:last-child { border-bottom: 0; }
          .mtpe-security-copy,
          .mtpe-security-controls { padding: 34px 24px; }
          .mtpe-security-list { grid-template-columns: 1fr; }
          .mtpe-faq-question { grid-template-columns: 1fr 32px; padding: 18px 20px; }
          .mtpe-faq-answer { padding: 0 20px 22px; }
          .mtpe-insights-band { padding: 30px 24px; }
          .mtpe-final-section { padding: 64px 0 72px; }
          .mtpe-final-cta { padding: 48px 24px; }
          .mtpe-final-content .mtpe-actions { width: 100%; }
        }

        @media (max-width: 390px) {
          .mtpe-security-panel,
          .mtpe-final-cta { border-radius: 24px; }
          .mtpe-faq-question { gap: 14px; }
        }

      `}</style>

      <section className="mtpe-hero" aria-labelledby="mtpe-page-title">
        <div className="mtpe-shell">
          <div className="mtpe-hero-copy">
            <Eyebrow>AI + Human Translation</Eyebrow>
            <h1 id="mtpe-page-title" className="mtpe-h1">
              Machine Translation Post-Editing Services
            </h1>
            <p className="mtpe-lead">
              Turn machine- and AI-generated translations into accurate,
              consistent, and business-ready multilingual content with qualified
              linguists, terminology control, and enterprise quality assurance.
            </p>
            <div
              className="mtpe-actions"
              aria-label="Machine translation post-editing actions"
            >
              <a
                className="mtpe-btn mtpe-btn--primary"
                href={`${STEPS_URL}/contact-us/`}
              >
                Talk to an MTPE Expert <Icon name="arrow" size={18} />
              </a>
              <a
                className="mtpe-btn mtpe-btn--secondary"
                href={`${STEPS_URL}/order-online/`}
              >
                <Icon name="upload" size={18} /> Upload Your Files
              </a>
            </div>
          </div>

          <div
            className="mtpe-workbench"
            aria-label="Illustration of an AI translation post-editing workflow"
          >
            <div className="mtpe-workbench-topbar">
              <div className="mtpe-workbench-brand">
                <span className="mtpe-workbench-mark" aria-hidden="true" />
                AI + Human Translation Workflow
              </div>
              <div className="mtpe-workbench-status">Ready for delivery</div>
            </div>

            <div className="mtpe-workbench-grid">
              <article className="mtpe-workbench-stage">
                <div className="mtpe-stage-label">
                  <Icon name="source" size={19} /> Source Content
                </div>
                <div className="mtpe-language">English · Product interface</div>
                <p className="mtpe-translation">
                  Select the account you want to link.
                </p>
                <div className="mtpe-translation-note">
                  <Icon name="check" size={17} />
                  <span>
                    Approved product terminology and style instructions are
                    available.
                  </span>
                </div>
              </article>

              <article className="mtpe-workbench-stage">
                <div className="mtpe-stage-label">
                  <Icon name="ai" size={19} /> AI Translation
                </div>
                <div className="mtpe-language">Spanish · Initial output</div>
                <p className="mtpe-translation">
                  Seleccione la cuenta que desea conectar.
                </p>
                <div className="mtpe-translation-note">
                  <Icon name="terminology" size={17} />
                  <span>
                    Terminology alert: “link” should use the approved product
                    term.
                  </span>
                </div>
              </article>

              <article className="mtpe-workbench-stage mtpe-workbench-stage--featured">
                <div className="mtpe-stage-label">
                  <Icon name="human" size={19} /> Expert Post-Editing
                </div>
                <div className="mtpe-language">
                  Spanish · Approved translation
                </div>
                <p className="mtpe-translation">
                  Seleccione la cuenta que desea vincular.
                </p>
                <div className="mtpe-translation-note">
                  <Icon name="qa" size={17} />
                  <span>
                    Meaning, terminology, fluency, and interface integrity
                    verified.
                  </span>
                </div>
              </article>
            </div>

            <div className="mtpe-workbench-footer" aria-hidden="true">
              <div className="mtpe-workbench-metric">
                <Icon name="terminology" size={17} />
                <span>
                  <strong>Terminology:</strong> applied
                </span>
              </div>
              <div className="mtpe-workbench-metric">
                <Icon name="accuracy" size={17} />
                <span>
                  <strong>Source comparison:</strong> complete
                </span>
              </div>
              <div className="mtpe-workbench-metric">
                <Icon name="qa" size={17} />
                <span>
                  <strong>Quality checks:</strong> passed
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mtpe-trust-strip">
          <div className="mtpe-shell">
            <div
              className="mtpe-trust-items"
              aria-label="Stepes credentials and capabilities"
            >
              {trustItems.map((item) => (
                <div className="mtpe-trust-item" key={item}>
                  <span className="mtpe-trust-check">
                    <Icon name="check" size={14} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="what-is-mtpe"
        aria-labelledby="what-is-mtpe-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-overview-heading">
            <div>
              <Eyebrow>MTPE Explained</Eyebrow>
              <h2 id="what-is-mtpe-title" className="mtpe-h2">
                What Is Machine Translation Post-Editing?
              </h2>
            </div>
            <div>
              <p className="mtpe-body">
                Machine translation post-editing, commonly called{" "}
                <strong>MTPE</strong>, is the professional review and correction
                of content translated by a machine translation engine, neural
                translation system, generative AI model, or large language
                model.
              </p>
              <p className="mtpe-body" style={{ marginTop: 18 }}>
                A qualified post-editor compares the translated content with the
                original source and corrects it according to defined
                requirements for meaning, completeness, terminology, language
                quality, style, locale conventions, data accuracy, and technical
                integrity.
              </p>
            </div>
          </div>

          <div className="mtpe-definition">
            <p className="mtpe-body">
              <strong>
                Professional MTPE is more than fixing awkward sentences.
              </strong>{" "}
              Machine-generated content may read naturally while still
              containing mistranslations, omissions, unsupported additions,
              inconsistent terminology, or subtle changes in meaning. The
              post-editor evaluates the target against the source and makes the
              changes required for the content’s intended use.
            </p>
          </div>

          <div
            className="mtpe-comparison"
            role="table"
            aria-label="Comparison of MTPE and related language quality services"
          >
            <div className="mtpe-comparison-head" role="row">
              <div role="columnheader">Service</div>
              <div role="columnheader">Starting Content</div>
              <div role="columnheader">Primary Purpose</div>
            </div>
            {comparisonRows.map((row) => (
              <div
                className={`mtpe-comparison-row${row.emphasis ? " mtpe-comparison-row--emphasis" : ""}`}
                role="row"
                key={row.service}
              >
                <div
                  className="mtpe-comparison-cell mtpe-comparison-service"
                  role="cell"
                >
                  {row.href ? (
                    <a href={row.href}>{row.service}</a>
                  ) : (
                    row.service
                  )}
                </div>
                <div className="mtpe-comparison-cell" role="cell">
                  {row.starting}
                </div>
                <div className="mtpe-comparison-cell" role="cell">
                  {row.purpose}
                </div>
              </div>
            ))}
          </div>

          <div className="mtpe-overview-links">
            <ArrowLink href={`${STEPS_URL}/ai-output-review/`}>
              Explore AI Output Review
            </ArrowLink>
            <ArrowLink href={`${STEPS_URL}/llm-evaluation-services/`}>
              Explore LLM Evaluation Services
            </ArrowLink>
          </div>
        </div>
      </section>

      <section
        className="mtpe-risk-section"
        id="why-human-review"
        aria-labelledby="why-human-review-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-risk-top">
            <div>
              <Eyebrow dark>Accuracy Beyond Fluency</Eyebrow>
              <h2 id="why-human-review-title" className="mtpe-h2">
                Why AI Translation Still Needs Expert Human Review
              </h2>
            </div>
            <p className="mtpe-body mtpe-risk-intro">
              AI translation can make multilingual content faster and more
              scalable. But fluent output is not automatically accurate,
              complete, appropriate, or safe to use. Expert post-editors
              identify the issues that automated systems can make difficult to
              see.
            </p>
          </div>

          <div className="mtpe-risk-grid">
            {reviewRisks.map((item) => (
              <article className="mtpe-risk-item" key={item.title}>
                <div className="mtpe-risk-icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-risk-conclusion">
            <span className="mtpe-risk-rule" aria-hidden="true" />
            <span>
              The appropriate level of human involvement depends on the
              content’s purpose, audience, visibility, subject matter, and
              consequences of an error.
            </span>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="post-editing-levels"
        aria-labelledby="post-editing-levels-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-levels-header">
            <Eyebrow>Fit-for-Purpose Quality</Eyebrow>
            <h2 id="post-editing-levels-title" className="mtpe-h2">
              Choose the Right Translation and Post-Editing Level
            </h2>
            <p className="mtpe-lead">
              Not every project requires the same linguistic process. Stepes
              helps you match the level of human involvement to the content,
              initial translation quality, audience, timeline, and business
              requirements.
            </p>
          </div>

          <div
            className="mtpe-levels-matrix"
            aria-label="Translation and post-editing service level comparison"
          >
            <div className="mtpe-levels-grid">
              <div className="mtpe-levels-corner">Comparison</div>
              {serviceLevels.map((level) => (
                <div
                  key={`heading-${level.name}`}
                  className={`mtpe-levels-heading${level.featured ? " mtpe-levels-heading--featured" : ""}`}
                >
                  {level.name}
                </div>
              ))}

              <div className="mtpe-levels-label">Human Involvement</div>
              {serviceLevels.map((level) => (
                <div
                  key={`involvement-${level.name}`}
                  className={`mtpe-levels-cell${level.featured ? " mtpe-levels-cell--featured" : ""}`}
                >
                  {level.involvement}
                </div>
              ))}

              <div className="mtpe-levels-label">Intended Outcome</div>
              {serviceLevels.map((level) => (
                <div
                  key={`outcome-${level.name}`}
                  className={`mtpe-levels-cell${level.featured ? " mtpe-levels-cell--featured" : ""}`}
                >
                  {level.outcome}
                </div>
              ))}

              <div className="mtpe-levels-label">Appropriate Uses</div>
              {serviceLevels.map((level) => (
                <div
                  key={`uses-${level.name}`}
                  className={`mtpe-levels-cell${level.featured ? " mtpe-levels-cell--featured" : ""}`}
                >
                  {level.uses}
                </div>
              ))}
            </div>

            <div className="mtpe-level-mobile">
              {serviceLevels.map((level) => (
                <article
                  className={`mtpe-level-mobile-card${level.featured ? " mtpe-level-mobile-card--featured" : ""}`}
                  key={`mobile-${level.name}`}
                >
                  <div className="mtpe-level-mobile-title">{level.name}</div>
                  <div className="mtpe-level-mobile-row">
                    <span className="mtpe-level-mobile-label">
                      Human Involvement
                    </span>
                    <span className="mtpe-level-mobile-value">
                      {level.involvement}
                    </span>
                  </div>
                  <div className="mtpe-level-mobile-row">
                    <span className="mtpe-level-mobile-label">
                      Intended Outcome
                    </span>
                    <span className="mtpe-level-mobile-value">
                      {level.outcome}
                    </span>
                  </div>
                  <div className="mtpe-level-mobile-row">
                    <span className="mtpe-level-mobile-label">
                      Appropriate Uses
                    </span>
                    <span className="mtpe-level-mobile-value">
                      {level.uses}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mtpe-levels-editorial">
            <article className="mtpe-level-detail">
              <h3>Light Machine Translation Post-Editing</h3>
              <p>
                Light post-editing focuses on errors that prevent readers from
                understanding or safely using the content. It may correct clear
                mistranslations, omissions, terminology problems, grammar
                errors, and broken formatting while avoiding optional stylistic
                changes that do not affect meaning or usability.
              </p>
            </article>
            <article className="mtpe-level-detail">
              <h3>Full Machine Translation Post-Editing</h3>
              <p>
                Full post-editing provides a comprehensive source-to-target
                review. The post-editor corrects accuracy, completeness,
                terminology, grammar, fluency, consistency, style, locale
                conventions, and technical elements according to the agreed
                project requirements.
              </p>
            </article>
          </div>

          <div className="mtpe-human-note">
            <h3>When Human Translation Is the Better Starting Point</h3>
            <p>
              Highly creative, emotionally sensitive, legally consequential, or
              linguistically complex content may benefit from human-led
              translation. Marketing concepts and brand messages that require
              substantial cultural adaptation may call for transcreation
              instead. Stepes recommends the workflow that fits the content
              rather than applying machine translation to every project.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section mtpe-fit-section"
        id="content-suitability"
        aria-labelledby="content-suitability-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-fit-top">
            <div>
              <h2 id="content-suitability-title" className="mtpe-h2">
                Is MTPE Right for Your Content?
              </h2>
            </div>
            <div>
              <p className="mtpe-body">
                The value of MTPE depends on more than word count. Stepes
                evaluates whether the machine-generated output creates a useful
                starting point and whether post-editing can achieve the required
                result efficiently.
              </p>
              <p className="mtpe-body" style={{ marginTop: 18 }}>
                A workflow that performs well for one content type or language
                should not automatically be applied to every market, audience,
                or business risk.
              </p>
            </div>
          </div>

          <div
            className="mtpe-fit-factors"
            aria-label="Factors used to evaluate MTPE suitability"
          >
            {contentSuitabilityFactors.map((factor) => (
              <article className="mtpe-fit-factor" key={factor.title}>
                <div className="mtpe-fit-factor-head">
                  <span className="mtpe-fit-factor-icon">
                    <Icon name={factor.icon} size={21} />
                  </span>
                  <h3>{factor.title}</h3>
                </div>
                <p>{factor.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-fit-matrix">
            {suitabilityGroups.map((group) => (
              <article
                className={`mtpe-fit-column mtpe-fit-column--${group.tone}`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                <p>{group.intro}</p>
                <ul className="mtpe-fit-list">
                  {group.items.map((item) => (
                    <li key={item}>
                      <span
                        className="mtpe-fit-list-marker"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mtpe-fit-cta">
            <p>
              Not sure which approach is appropriate? Stepes can evaluate
              representative files and language pairs before you commit to a
              broader multilingual program.
            </p>
            <a
              className="mtpe-btn mtpe-btn--primary"
              href={`${STEPS_URL}/contact-us/`}
            >
              Request an MTPE Assessment <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="service-models"
        aria-labelledby="service-models-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-models-header">
            <h2 id="service-models-title" className="mtpe-h2">
              Flexible MTPE Service Models
            </h2>
            <p className="mtpe-lead">
              Stepes can deliver a complete AI translation and post-editing
              solution or integrate qualified human review into the technology,
              models, and localization workflows your organization already uses.
            </p>
          </div>

          <div className="mtpe-models-grid">
            {serviceModels.map((model) => (
              <article className="mtpe-model" key={model.title}>
                <div className="mtpe-model-label">{model.label}</div>
                <h3>{model.title}</h3>
                <p>{model.text}</p>
                {model.link && (
                  <ArrowLink href={model.link.href}>
                    {model.link.label}
                  </ArrowLink>
                )}
              </article>
            ))}
          </div>

          <div className="mtpe-models-note">
            <h3>Keep the Technology That Works for You</h3>
            <p>
              Continue using the AI platforms, translation engines, terminology
              databases, and translation management systems that already support
              your organization. Stepes complements your current environment with
              professional multilingual post-editing, quality assurance, and
              scalable linguistic operations.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mtpe-workflow-section"
        id="mtpe-workflow"
        aria-labelledby="mtpe-workflow-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-workflow-top">
            <div>
              <Eyebrow dark>A Controlled Production Process</Eyebrow>
              <h2 id="mtpe-workflow-title" className="mtpe-h2">
                The Stepes Machine Translation Post-Editing Workflow
              </h2>
            </div>
            <p className="mtpe-body mtpe-workflow-intro">
              Professional MTPE begins before a linguist edits the first
              sentence. Stepes establishes the content requirements, linguistic
              resources, post-editor qualifications, and quality controls needed
              to produce a reliable result.
            </p>
          </div>

          <div className="mtpe-workflow-list">
            {workflowSteps.map((step, index) => (
              <article className="mtpe-workflow-step" key={step.title}>
                <div className="mtpe-workflow-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-workflow-outcome">
            <span>
              Approved translations, terminology decisions, and reviewer
              feedback can support stronger consistency across future releases
              when they are maintained as part of the ongoing program.
            </span>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="post-editor-review"
        aria-labelledby="post-editor-review-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-quality-top">
            <div>
              <Eyebrow>Source-to-Target Quality Review</Eyebrow>
              <h2 id="post-editor-review-title" className="mtpe-h2">
                What Our Post-Editors Review and Correct
              </h2>
            </div>
            <p className="mtpe-body">
              Stepes post-editors evaluate both linguistic quality and the
              integrity of the final content. The exact review scope is
              configured around the file type, delivery channel, intended
              audience, and agreed quality requirements.
            </p>
          </div>

          <div className="mtpe-quality-grid">
            {qualityCategories.map((category) => (
              <article
                className={`mtpe-quality-item${category.full ? " mtpe-quality-item--full" : ""}`}
                key={category.title}
              >
                <div className="mtpe-quality-icon">
                  <Icon name={category.icon} size={22} />
                </div>
                <div>
                  <h3>{category.title}</h3>
                  <ul className="mtpe-quality-list">
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mtpe-quality-callout">
            <strong>Every project starts with defined requirements.</strong> The
            review can be tailored to terminology, style, locale conventions,
            data validation, technical elements, and content-specific risks so
            every stakeholder works toward the same approved result.
          </div>
        </div>
      </section>


      <section
        className="mtpe-section mtpe-requirements-section"
        id="quality-requirements"
        aria-labelledby="quality-requirements-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-requirements-top">
            <div>
              <h2 id="quality-requirements-title" className="mtpe-h2">
                Quality Requirements Defined Before Editing Begins
              </h2>
            </div>
            <div>
              <p className="mtpe-body">
                Consistent MTPE starts with a shared definition of the expected
                result, including intended use, post-editing level, terminology,
                style, error categories, reviewer responsibilities, escalation
                procedures, and final acceptance criteria.
              </p>
              <p className="mtpe-body" style={{ marginTop: 18 }}>
                This gives linguists, reviewers, and stakeholders a consistent
                basis for evaluating the same multilingual content.
              </p>
            </div>
          </div>

          <div className="mtpe-requirements-grid">
            {qualityDimensions.map((dimension) => (
              <article className="mtpe-requirement" key={dimension.title}>
                <h3>{dimension.title}</h3>
                <p>{dimension.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-deliverables">
            <div>
              <h3>Available MTPE Deliverables</h3>
              <p>
                Select the final files, reviewer evidence, and quality reporting
                appropriate for your project or ongoing program.
              </p>
              <ArrowLink href={`${STEPS_URL}/translation-quality-assurance/`}>
                Explore Translation Quality Assurance
              </ArrowLink>
            </div>
            <ul className="mtpe-deliverables-list">
              {mtpeDeliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mtpe-standard-note">
            <span>
              ISO 18587 provides an established international framework for
              full human post-editing processes and post-editor competence.
              Stepes combines clearly defined project requirements with its
              broader quality management system to deliver the level of control
              appropriate for each engagement.
            </span>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="linguistic-governance"
        aria-labelledby="linguistic-governance-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-governance-header">
            <Eyebrow>Enterprise Language Assets</Eyebrow>
            <h2 id="linguistic-governance-title" className="mtpe-h2">
              Terminology, Translation Memory, and Style Governance
            </h2>
            <p className="mtpe-lead">
              Enterprise MTPE should not treat every file as an isolated task.
              Stepes incorporates approved linguistic resources so post-editors
              can make consistent decisions across languages, products, files,
              markets, and recurring releases.
            </p>
          </div>

          <div className="mtpe-governance-grid">
            {governancePillars.map((pillar) => (
              <article className="mtpe-governance-item" key={pillar.title}>
                <div className="mtpe-governance-icon">
                  <Icon name={pillar.icon} size={22} />
                </div>
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                  <ul className="mtpe-governance-list">
                    {pillar.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  {pillar.link && (
                    <ArrowLink href={pillar.link.href}>
                      {pillar.link.label}
                    </ArrowLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mtpe-regulated-section"
        id="regulated-content"
        aria-labelledby="regulated-content-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-regulated-top">
            <div>
              <Eyebrow dark>Risk-Based Quality Controls</Eyebrow>
              <h2 id="regulated-content-title" className="mtpe-h2">
                MTPE for High-Risk and Regulated Content
              </h2>
            </div>
            <p className="mtpe-body mtpe-regulated-intro">
              Machine translation post-editing can support specialized and
              regulated content, but the workflow must reflect the document’s
              purpose, audience, subject-matter complexity, regulatory
              significance, and consequences of an error.
            </p>
          </div>

          <ul className="mtpe-control-list" aria-label="Potential MTPE safeguards">
            {regulatedControls.map((control) => (
              <li key={control}>{control}</li>
            ))}
          </ul>

          <h3 className="mtpe-regulated-context-heading">
            Where Additional Controls Matter Most
          </h3>
          <div className="mtpe-regulated-industries">
            {regulatedContexts.map((context) => (
              <article className="mtpe-regulated-industry" key={context.title}>
                <h3>{context.title}</h3>
                <p>{context.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-regulated-note">
            Some content may require additional validation, certification, or a
            human-led translation workflow. Stepes recommends a different
            approach when machine translation does not provide an appropriate
            foundation.
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="content-types"
        aria-labelledby="content-types-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-content-types-top">
            <div>
              <h2 id="content-types-title" className="mtpe-h2">
                Content Types Supported by MTPE
              </h2>
            </div>
            <p className="mtpe-body">
              Stepes provides professional machine translation post-editing for
              structured, recurring, technical, digital, business, e-commerce,
              and selected regulated content. File handling and review rules are
              configured around the final publishing channel and intended use.
            </p>
          </div>

          <div className="mtpe-content-types-grid">
            {contentTypeGroups.map((group) => (
              <article className="mtpe-content-type" key={group.title}>
                <div className="mtpe-content-type-icon">
                  <Icon name={group.icon} size={21} />
                </div>
                <div>
                  <h3>{group.title}</h3>
                  <ul className="mtpe-content-type-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mtpe-content-types-link">
            <ArrowLink href={`${STEPS_URL}/resources/file-format-support/`}>
              Explore File Format Support
            </ArrowLink>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section mtpe-industries-section"
        id="industry-expertise"
        aria-labelledby="industry-expertise-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-industries-header">
            <Eyebrow>Domain-Matched Linguists</Eyebrow>
            <h2 id="industry-expertise-title" className="mtpe-h2">
              Industry-Specific MTPE Expertise
            </h2>
            <p className="mtpe-lead">
              Effective post-editing requires more than language fluency. The
              linguist must understand the subject matter, intended reader,
              established terminology, and consequences of an incorrect
              translation.
            </p>
          </div>

          <div className="mtpe-industry-grid">
            {industries.map((industry) => (
              <a className="mtpe-industry-item" href={industry.href} key={industry.title}>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="enterprise-scale"
        aria-labelledby="enterprise-scale-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-enterprise-top">
            <div>
              <Eyebrow>Connected Global Operations</Eyebrow>
              <h2 id="enterprise-scale-title" className="mtpe-h2">
                Enterprise Scale, Automation, and Integration
              </h2>
            </div>
            <p className="mtpe-body">
              Machine translation post-editing becomes more valuable when it is
              connected to the organization’s broader content operations.
              Stepes supports individual projects and continuous multilingual
              programs with workflow automation, parallel production,
              collaboration, and quality visibility.
            </p>
          </div>

          <div className="mtpe-enterprise-grid">
            {enterpriseCapabilities.map((capability) => (
              <article className="mtpe-enterprise-item" key={capability.title}>
                <div className="mtpe-enterprise-item-icon">
                  <Icon name={capability.icon} size={21} />
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
              </article>
            ))}
          </div>

          <div className="mtpe-enterprise-links" aria-label="Enterprise translation platform links">
            {enterpriseLinks.map((link) => (
              <a className="mtpe-enterprise-link" href={link.href} key={link.label}>
                <span>{link.label}</span>
                <Icon name="arrow" size={17} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mtpe-section mtpe-security-section"
        id="secure-mtpe"
        aria-labelledby="secure-mtpe-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-security-panel">
            <div className="mtpe-security-copy">
              <div className="mtpe-security-mark">
                <Icon name="lock" size={26} />
              </div>
              <Eyebrow>Enterprise Content Protection</Eyebrow>
              <h2 id="secure-mtpe-title" className="mtpe-h2">
                Secure MTPE for Enterprise Content
              </h2>
              <p className="mtpe-body">
                Source files, machine-generated output, terminology assets, and
                reviewer comments may contain confidential business, technical,
                legal, employee, customer, or regulated information. Stepes can
                configure controlled workflows around the security requirements
                of the engagement.
              </p>
              <ArrowLink href={`${STEPS_URL}/security-and-compliance/`}>
                Explore Security &amp; Compliance
              </ArrowLink>
            </div>

            <div className="mtpe-security-controls">
              <h3>Enterprise Security and Governance Controls</h3>
              <ul className="mtpe-security-list">
                {securityControls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
              <div className="mtpe-security-assurance">
                Before production begins, Stepes can confirm the systems,
                participants, access model, and data-handling approach authorized
                for the project—particularly when the content is sensitive or the
                organization requires specific enterprise technology.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="why-stepes"
        aria-labelledby="why-stepes-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-why-header">
            <h2 id="why-stepes-title" className="mtpe-h2">
              Why Enterprises Choose Stepes for MTPE
            </h2>
            <p className="mtpe-lead">
              Stepes brings AI translation, professional linguistic expertise,
              enterprise language assets, quality governance, and global delivery
              together in one flexible service model.
            </p>
          </div>

          <div className="mtpe-why-grid">
            {differentiators.map((item) => (
              <article className="mtpe-why-item" key={item.title}>
                <div className="mtpe-why-icon">
                  <Icon name={item.icon} size={21} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="mtpe-section mtpe-faq-section"
        id="mtpe-faq"
        aria-labelledby="mtpe-faq-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-faq-layout">
            <div className="mtpe-faq-intro">
              <h2 id="mtpe-faq-title" className="mtpe-h2">
                Machine Translation Post-Editing FAQs
              </h2>
              <p className="mtpe-body">
                Find clear answers about MTPE quality, service levels, pricing,
                timing, technology compatibility, regulated content, languages,
                file formats, and security.
              </p>
            </div>

            <div className="mtpe-faq-panel">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `mtpe-faq-answer-${index}`;
                return (
                  <article className="mtpe-faq-item" key={faq.question}>
                    <button
                      className="mtpe-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="mtpe-faq-control">
                        <Icon name={isOpen ? "minus" : "plus"} size={17} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="mtpe-faq-answer" id={answerId}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        className="mtpe-section"
        id="related-services"
        aria-labelledby="related-services-title"
      >
        <div className="mtpe-shell">
          <div className="mtpe-related-header">
            <h2 id="related-services-title" className="mtpe-h2">
              Related AI Translation and Quality Services
            </h2>
            <p className="mtpe-lead">
              Build the right combination of AI translation, human review,
              linguistic quality assurance, enterprise language assets, and
              secure global content operations.
            </p>
          </div>

          <div className="mtpe-related-services">
            {relatedServices.map((service) => (
              <article className="mtpe-related-service" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowLink href={service.href}>Explore {service.title}</ArrowLink>
              </article>
            ))}
          </div>

          <div className="mtpe-insights-band">
            <div>
              <h3>Related AI Translation Insights</h3>
              <p>
                Explore practical guidance for evaluating MTPE suitability,
                choosing service levels, measuring quality, and designing
                responsible AI + human translation workflows.
              </p>
            </div>
            <div className="mtpe-insight-links">
              {relatedInsights.map((insight) => (
                <a className="mtpe-insight-link" href={insight.href} key={insight.label}>
                  <span>{insight.label}</span>
                  <Icon name="arrow" size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mtpe-final-section" aria-labelledby="mtpe-final-title">
        <div className="mtpe-shell">
          <div className="mtpe-final-cta">
            <div className="mtpe-final-content">
              <Eyebrow>Plan Your MTPE Program</Eyebrow>
              <h2 id="mtpe-final-title" className="mtpe-h2">
                Build the Right AI + Human Translation Workflow
              </h2>
              <p className="mtpe-lead">
                Share representative files, target languages, existing machine
                translation output, terminology resources, and quality
                requirements. Stepes will help determine whether light
                post-editing, full post-editing, professional human translation,
                or a blended workflow is the right approach.
              </p>
              <div className="mtpe-actions">
                <a className="mtpe-btn mtpe-btn--primary" href={`${STEPS_URL}/contact-us/`}>
                  Talk to an MTPE Expert <Icon name="arrow" size={18} />
                </a>
                <a className="mtpe-btn mtpe-btn--secondary" href={`${STEPS_URL}/ai-translation-services/`}>
                  Explore AI Translation Services <Icon name="arrow" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
