import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const STEPES_LINKS = {
  medicalDeviceServices: "https://www.stepes.com/medical-device-translation-services/",
  ifuServices: "https://www.stepes.com/ifu-translation-services/",
  terminologyManagement: "https://www.stepes.com/terminology-management/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  translationQuality: "https://www.stepes.com/translation-quality-system/",
  aiTranslation: "https://www.stepes.com/ai-machine-learning-translation-services/",
  multilingualDtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  contact: "https://www.stepes.com/contact-us/",
  eifuGuide: "https://www.stepes.com/resources/translation-guides/electronic-ifu-multilingual-version-control/",
  softwareChecklist: "https://www.stepes.com/resources/localization-guides/medical-device-software-localization-checklist/",
  aiMedicalDeviceGuide: "https://www.stepes.com/resources/ai-translation-insights/ai-translation-for-medical-devices/",
};

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F9DFEA",
  ink: "#151824",
  body: "#384257",
  muted: "#697386",
  line: "#E4E7EC",
  soft: "#F6F7F9",
  dark: "#222438",
};

const tocItems = [
  { id: "what-is-an-ifu", label: "What Is a Medical Device IFU?" },
  { id: "controlled-process", label: "Why IFU Translation Needs Control" },
  { id: "define-scope", label: "Define Markets, Languages, Users, and Formats" },
  { id: "prepare-source", label: "Prepare the Source IFU" },
  { id: "terminology", label: "Build and Govern Terminology" },
  { id: "translation-workflow", label: "Design the Translation Workflow" },
  { id: "ai-translation", label: "Use AI Responsibly" },
  { id: "publishing", label: "Manage Multilingual Publishing" },
  { id: "version-control", label: "Control Revisions and eIFUs" },
  { id: "final-format-qa", label: "Perform Final-Format QA" },
  { id: "common-failures", label: "Avoid Common IFU Failures" },
  { id: "provider-evaluation", label: "Evaluate an IFU Translation Provider" },
  { id: "program-launch", label: "Plan and Launch the Program" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const keyTakeaways = [
  "Confirm markets, languages, intended users, delivery formats, and approval responsibilities before translation begins.",
  "Treat the approved source IFU as controlled product information, not as an isolated document.",
  "Adapt language complexity to the intended user without changing approved safety or operating meaning.",
  "Maintain terminology across IFUs, labels, packaging, device software, training, and support content.",
  "Apply stronger review to safety-critical, operation-critical, and software-dependent content.",
  "Inspect the final PDF, eIFU, or print-ready output—not only the translated text.",
];

const controlModel = [
  {
    title: "Market Control",
    question: "Where will the device be made available, and which language and delivery rules apply?",
    output: "Approved market-language matrix",
  },
  {
    title: "Source Control",
    question: "Which source document, product configuration, and revision are authorized for translation?",
    output: "Frozen or change-controlled source package",
  },
  {
    title: "Language Control",
    question: "Which terminology, audience, and style decisions must remain consistent?",
    output: "Approved terminology and language rules",
  },
  {
    title: "Review Control",
    question: "Who reviews each content type, and what evidence constitutes approval?",
    output: "Risk-based review and responsibility plan",
  },
  {
    title: "Format Control",
    question: "How will layout, graphics, software references, and final outputs be validated?",
    output: "Multilingual publishing and QA plan",
  },
  {
    title: "Release Control",
    question: "How will each language be linked to the correct device, market, revision, and approval?",
    output: "Traceable multilingual release record",
  },
];

const marketRows = [
  ["Target market", "In which countries or territories will the device be distributed?"],
  ["Device scope", "Which device, model, accessory, configuration, or product family is covered?"],
  ["Intended user", "Is the content for healthcare professionals, technicians, patients, caregivers, or mixed audiences?"],
  ["Language", "Which official, regional, or customer-requested language variants are required?"],
  ["Content scope", "Does the release include the IFU, quick guide, software help, labels, packaging, or training?"],
  ["Delivery format", "Will the IFU be printed, electronic, embedded in software, online, or supplied in several formats?"],
  ["Regulatory status", "Is the content for submission, approval, launch, corrective action, or a routine update?"],
  ["Source revision", "Which approved source document and revision govern translation?"],
  ["Review ownership", "Who approves terminology, language, technical accuracy, layout, and final release?"],
  ["Release date", "Must all languages launch together, or will markets be released in phases?"],
];

const audienceRows = [
  [
    "Expected knowledge",
    "May assume clinical, scientific, engineering, or technical training.",
    "Should minimize assumed technical knowledge and explain unavoidable specialist terms.",
  ],
  [
    "Instruction style",
    "Can include complex setup, reprocessing, maintenance, and institutional procedures.",
    "Should use direct, action-oriented steps with clear sequencing and decision points.",
  ],
  [
    "Terminology",
    "May use recognized professional terminology when it matches the intended user.",
    "Should prioritize comprehension while preserving approved clinical and safety meaning.",
  ],
  [
    "Software interaction",
    "May reference advanced controls, settings, and institutional workflows.",
    "Should make controls, feedback, error conditions, and requests for professional help easy to recognize.",
  ],
  [
    "Validation focus",
    "Technical and operational accuracy, specification alignment, and workflow fit.",
    "Comprehension, usability, accessibility, and safe action by the intended user.",
  ],
];

const workflowSteps = [
  {
    title: "Scope and File Analysis",
    text: "Confirm markets, languages, source revision, editable files, word volume, repetitions, graphics, software references, and publishing requirements.",
  },
  {
    title: "Source-Content Review",
    text: "Resolve ambiguity, comments, inconsistent terminology, missing references, and known source defects before they multiply across languages.",
  },
  {
    title: "Terminology Preparation",
    text: "Extract and approve product, clinical, technical, software, safety, and regulatory terms that require controlled use.",
  },
  {
    title: "Translation Memory Preparation",
    text: "Validate prior translations, remove obsolete assets, and align suitable historical content for controlled reuse.",
  },
  {
    title: "Professional Translation",
    text: "Assign target-language linguists with the required medical-device, technical, and intended-user expertise.",
  },
  {
    title: "Independent Linguistic Review",
    text: "Review meaning, completeness, terminology, grammar, clarity, numerical content, and alignment with the approved source.",
  },
  {
    title: "Technical or In-Country Review",
    text: "Route content for additional review when device complexity, risk, market practice, or the manufacturer’s quality process requires it.",
  },
  {
    title: "Multilingual Publishing",
    text: "Format translated content in the required authoring system while preserving warning hierarchy, figures, tables, references, and document metadata.",
  },
  {
    title: "Final-Format QA",
    text: "Inspect the actual PDF, electronic output, or print-ready file for linguistic, visual, technical, and release defects.",
  },
  {
    title: "Approval and Controlled Release",
    text: "Record source and target revisions, approvals, deliverables, effective dates, archive locations, and release status.",
  },
];

const roleRows = [
  ["Regulatory affairs", "Confirms market requirements, languages, regulatory scope, and approval needs."],
  ["Quality assurance", "Defines controlled-document, supplier, approval, traceability, and release requirements."],
  ["Technical writing", "Maintains the source IFU and resolves source-content questions."],
  ["Engineering or product", "Confirms device behavior, specifications, components, and software references."],
  ["Clinical or medical reviewer", "Reviews clinical meaning and intended-user terminology when required."],
  ["Localization manager", "Coordinates scope, files, language assets, reviewers, schedule, and delivery."],
  ["Translator", "Produces accurate target-language content using approved references and terminology."],
  ["Independent reviewer", "Checks the translation against the source and the defined quality requirements."],
  ["In-country reviewer", "Confirms approved local terminology or market usage within a defined remit."],
  ["Publishing specialist", "Produces and corrects the final multilingual layout."],
  ["Final approver", "Authorizes the language version for release under the manufacturer’s quality process."],
];

const riskRows = [
  [
    "Safety-Critical",
    "Contraindications, warnings, precautions, residual risks, emergency actions",
    "Specialist translation, independent review, terminology validation, required subject-matter expert or regulatory review, and final-format QA",
  ],
  [
    "Operation-Critical",
    "Setup, calibration, parameter settings, procedures, reprocessing, maintenance",
    "Specialist translation, independent review, technical validation where needed, and final-format QA",
  ],
  [
    "User-Interface Dependent",
    "Buttons, menus, alerts, screen paths, error messages, embedded help",
    "Translation with approved UI terminology, software cross-check, and linguistic or functional testing",
  ],
  [
    "Explanatory",
    "Product descriptions, background information, general explanations",
    "Professional translation and review appropriate to the intended audience and content risk",
  ],
  [
    "Administrative",
    "Contact information, copyright, generic headings, nontechnical boilerplate",
    "Standard professional workflow with automated checks and final verification",
  ],
];

const versionFields = [
  "Product or device family",
  "Model or configuration",
  "Source document number and revision",
  "Target-language document number and revision",
  "Language and regional variant",
  "Applicable market",
  "Software or firmware version, when relevant",
  "Translation and review status",
  "Approval and effective dates",
  "Released file name and archive location",
  "Superseded version",
];

const qaGroups = [
  {
    title: "Scope",
    items: [
      "Product, model, accessory, and configuration confirmed",
      "Target market confirmed",
      "Language and regional variant confirmed",
      "Intended user confirmed",
      "Delivery format confirmed",
    ],
  },
  {
    title: "Source and Change Control",
    items: [
      "Approved source revision confirmed",
      "All source changes captured",
      "Translation memory validated",
      "Previous approved translations assessed",
      "Obsolete content excluded",
    ],
  },
  {
    title: "Language Quality",
    items: [
      "Translation and independent review complete",
      "Approved terminology applied",
      "Safety information verified",
      "Numbers, units, and references verified",
      "Software terminology cross-checked",
      "Reviewer comments resolved",
    ],
  },
  {
    title: "Publishing",
    items: [
      "Layout and text expansion corrected",
      "Graphics localized",
      "Fonts and character rendering verified",
      "Tables, callouts, and cross-references checked",
      "Headers, footers, and revision data checked",
      "Final PDF or electronic output inspected",
    ],
  },
  {
    title: "Release",
    items: [
      "Correct document and language identifiers applied",
      "Required approvals recorded",
      "Final file name confirmed",
      "Links and QR codes tested",
      "Superseded version controlled",
      "Approved deliverable archived and distributed",
    ],
  },
];

const failures = [
  {
    title: "Translating Before the Source Is Stable",
    risk: "Multiple rounds of retranslation, inconsistent updates, and uncertainty about which content is approved.",
    prevention: "Freeze the source or use a documented change process with version comparison and impact analysis.",
  },
  {
    title: "Assuming Every Market Uses the Same Language Rules",
    risk: "Missing languages, unnecessary translation, or an inappropriate regional variant.",
    prevention: "Maintain a market-language matrix approved by regulatory affairs.",
  },
  {
    title: "Treating the IFU as an Independent Document",
    risk: "Terminology conflicts with labels, packaging, software, quick guides, and training.",
    prevention: "Govern terminology and revisions across the complete device information system.",
  },
  {
    title: "Using Translators Without Device Context",
    risk: "Clinically plausible wording may misrepresent a component, procedure, control, or technical function.",
    prevention: "Match linguists to the device subject, document type, intended user, and technical complexity.",
  },
  {
    title: "Allowing Unstructured Reviewer Rewriting",
    risk: "Subjective changes create inconsistency and can introduce meaning that is not present in the source.",
    prevention: "Provide review criteria, approved terminology, comment categories, and clear decision rights.",
  },
  {
    title: "Reusing Translation Memory Without Context Review",
    risk: "A previously valid translation may be wrong for a different model, warning level, user, or software function.",
    prevention: "Validate matches in context and route higher-risk reused content for stronger review.",
  },
  {
    title: "Reviewing Text but Not the Final Output",
    risk: "Overflow, omitted content, broken references, and release-data errors remain undetected.",
    prevention: "Perform independent final-format linguistic, visual, and release QA.",
  },
  {
    title: "Using AI Without Risk-Based Human Review",
    risk: "Fluent output can still alter warnings, omit qualifications, or introduce unsupported terminology.",
    prevention: "Govern AI by content risk, protect approved terminology, and require qualified human validation.",
  },
];

const providerAreas = [
  {
    title: "Medical Device Expertise",
    items: [
      "Relevant device-category and document experience",
      "Clear qualification criteria for translators and reviewers",
      "Ability to distinguish professional, patient, software, and technical audiences",
      "Support for clinical, engineering, regulatory, and publishing content",
    ],
  },
  {
    title: "Quality Management",
    items: [
      "Documented controls for files, language assets, reviews, approvals, and deliverables",
      "Traceability for revisions, queries, reviewer decisions, and corrective actions",
      "Supplier controls appropriate to the manufacturer’s quality system",
      "Practical workflows that complement—not merely reference—quality certifications",
    ],
  },
  {
    title: "Terminology and Translation Memory",
    items: [
      "Creation and maintenance of approved multilingual terminology",
      "Ownership and portability of language assets",
      "Enforcement of prohibited terms and product-specific variants",
      "Validation and segmentation of historical translations",
    ],
  },
  {
    title: "Multilingual Publishing",
    items: [
      "Support for the required authoring and graphics applications",
      "Right-to-left and complex-script publishing capability",
      "Final-format linguistic QA by qualified target-language reviewers",
      "Reliable management of graphics, cross-references, tables, and metadata",
    ],
  },
  {
    title: "Technology, AI, and Security",
    items: [
      "Transparent explanation of where AI is used and where it is excluded",
      "Integrated terminology, translation memory, automated QA, and human review",
      "Appropriate controls for confidential information, access, retention, and traceability",
      "Scalable workflows for simultaneous launches and ongoing updates",
    ],
  },
];

const faqs = [
  {
    question: "What is medical device IFU translation?",
    answer:
      "Medical device IFU translation is the controlled process of converting instructions for use into one or more target languages while preserving approved technical, clinical, operational, and safety meaning. The process may include terminology management, independent review, multilingual publishing, final-format QA, and revision control.",
  },
  {
    question: "Which languages are required for a medical device IFU?",
    answer:
      "Requirements depend on the target market, device, intended user, distribution model, and applicable national rules. In the European Union, language requirements are determined at Member State level. Manufacturers should approve a market-language matrix through their regulatory process rather than relying on a generic language list.",
  },
  {
    question: "Is an IFU required for every medical device?",
    answer:
      "Requirements vary by device and market. Some regulatory frameworks allow limited exceptions when a device can be used safely without an IFU, but the manufacturer should make that determination through its regulatory and risk-management process. Translation teams should not independently decide that an IFU or language can be omitted.",
  },
  {
    question: "What is the difference between a professional-use and patient-use IFU?",
    answer:
      "Professional-use IFUs may assume clinical or technical training and can include specialized procedures and terminology. Patient- or lay-user IFUs should use language, organization, and instructions that the intended user can understand and apply without changing the approved safety or clinical meaning.",
  },
  {
    question: "Should medical device IFUs be back translated?",
    answer:
      "Back translation is not automatically required for every project. It can support a defined validation objective, but it does not replace qualified forward translation, independent bilingual review, terminology control, technical validation, usability work, or final-format QA.",
  },
  {
    question: "Can AI be used to translate an IFU?",
    answer:
      "AI may support source analysis, terminology extraction, repetitive-content processing, initial translation, automated checks, and review routing. Safety-critical and regulated content should receive qualified human validation appropriate to its risk, with controls for terminology, confidentiality, traceability, and final approval.",
  },
  {
    question: "What files should be supplied for IFU translation?",
    answer:
      "Provide editable source files whenever possible, together with linked graphics, reference PDFs, previous approved translations, terminology, translation memory, software screenshots, product information, market requirements, and revision data. Editable assets reduce manual recreation and make updates easier to control.",
  },
  {
    question: "How should IFU updates be managed?",
    answer:
      "Use a controlled change-impact process that identifies source changes, affected languages, reusable translations, required reviews, layout effects, approval status, and superseded files. Every target-language version should remain linked to its exact approved source revision.",
  },
  {
    question: "Can an electronic IFU replace the paper IFU?",
    answer:
      "Only when the applicable regulations and device conditions permit it. Electronic delivery requires a documented risk assessment, reliable access, revision control, a paper-copy process where required, and verification of the delivery method. Lay-user instructions may still require paper even when professional-use content is electronic.",
  },
  {
    question: "What is final-format IFU QA?",
    answer:
      "Final-format QA is the review of the actual output users or regulators will receive. It checks linguistic completeness, warning placement, layout, tables, graphics, references, fonts, language direction, revision data, links, identifiers, and release information after publishing.",
  },
  {
    question: "How long does IFU translation take?",
    answer:
      "Turnaround depends on word volume, language count, device complexity, terminology readiness, prior approved translations, review requirements, file format, graphics, publishing, and approval rounds. A stable source and approved terminology improve predictability and make simultaneous multilingual release easier to plan.",
  },
  {
    question: "What affects IFU translation cost and timing?",
    answer:
      "Major factors include new and repeated word volume, languages, device complexity, terminology readiness, review requirements, prior translation assets, graphics, software references, publishing, final-format QA, revision frequency, urgency, and release coordination. A reliable estimate separates language work, publishing, engineering, and optional validation services.",
  },
];

const sources = [
  {
    title: "ISO 20417:2026 — Medical Devices — Information to Be Supplied by the Manufacturer",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/20417.html",
    linkLabel: "View ISO 20417",
  },
  {
    title: "Regulation (EU) 2017/745 on Medical Devices",
    organization: "EUR-Lex",
    href: "https://eur-lex.europa.eu/eli/reg/2017/745/oj/eng",
    linkLabel: "View EU MDR",
  },
  {
    title: "Overview of Language Requirements for Manufacturers of Medical Devices",
    organization: "European Commission",
    href: "https://health.ec.europa.eu/publications/overview-language-requirements-manufacturers-medical-devices_en",
    linkLabel: "View Language Requirements",
  },
  {
    title: "General Device Labeling Requirements",
    organization: "U.S. Food and Drug Administration",
    href: "https://www.fda.gov/medical-devices/device-labeling/general-device-labeling-requirements",
    linkLabel: "View FDA Labeling Requirements",
  },
  {
    title: "Guidance on Medical Device Patient Labeling",
    organization: "U.S. Food and Drug Administration",
    href: "https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-medical-device-patient-labeling",
    linkLabel: "View FDA Patient Labeling Guidance",
  },
  {
    title: "ISO 15223-1:2021 — Symbols to Be Used With Information Supplied by the Manufacturer",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/77326.html",
    linkLabel: "View ISO 15223-1",
  },
  {
    title: "Commission Implementing Regulation (EU) 2021/2226 on Electronic IFUs, Consolidated 2025",
    organization: "EUR-Lex",
    href: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX%3A02021R2226-20250716",
    linkLabel: "View Consolidated eIFU Rules",
  },
  {
    title: "ISO 13485:2016 — Medical Devices — Quality Management Systems",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/59752.html",
    linkLabel: "View ISO 13485",
  },
];

const relatedResources = [
  {
    category: "Translation Guide",
    title: "Electronic IFUs and Multilingual Version Control",
    description:
      "Plan multilingual eIFU access, revisions, paper-copy processes, online publication, and superseded-version controls.",
    href: STEPES_LINKS.eifuGuide,
    action: "Explore eIFU Version Control",
  },
  {
    category: "Localization Checklist",
    title: "Medical Device Software Localization Checklist",
    description:
      "Review interface terminology, variables, text expansion, complex scripts, screenshots, and linguistic testing.",
    href: STEPES_LINKS.softwareChecklist,
    action: "Use the Software Localization Checklist",
  },
  {
    category: "AI Translation Insight",
    title: "AI Translation for Medical Devices",
    description:
      "Understand where AI can improve efficiency, how to route content by risk, and where human validation remains essential.",
    href: STEPES_LINKS.aiMedicalDeviceGuide,
    action: "Explore AI Translation Guidance",
  },
  {
    category: "Medical Device Services",
    title: "Medical Device Translation Services",
    description:
      "Explore translation solutions for IFUs, labeling, device software, regulatory documentation, training, and product content.",
    href: STEPES_LINKS.medicalDeviceServices,
    action: "Explore Medical Device Services",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 7L19 12L14 17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={open ? "chevron chevron-open" : "chevron"}
    >
      <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ size = 18 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12.5L9.2 16.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M13 5H19V11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 5L10 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M17 13V18C17 18.6 16.6 19 16 19H6C5.4 19 5 18.6 5 18V8C5 7.4 5.4 7 6 7H11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function EditorialLink({ href, children, external = false, className = "" }) {
  return (
    <a
      className={`editorial-link ${className}`.trim()}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      {external ? <ExternalIcon /> : <ArrowIcon size={17} />}
    </a>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-visual">
      <svg viewBox="0 0 520 430" role="img" aria-labelledby="ifu-visual-title ifu-visual-desc">
        <title id="ifu-visual-title">Controlled multilingual IFU workflow</title>
        <desc id="ifu-visual-desc">
          A source instruction document moves through terminology, translation, review, publishing, and approved release.
        </desc>
        <defs>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F7EEF3" />
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#202334" floodOpacity="0.1" />
          </filter>
        </defs>
        <rect x="24" y="20" width="472" height="386" rx="34" fill="url(#heroPanel)" stroke="#E5DCE2" />
        <path d="M110 108C176 73 219 70 264 91C322 118 352 107 408 77" stroke="#D5B2C2" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M112 315C170 343 220 351 274 332C334 310 369 319 414 348" stroke="#D5B2C2" strokeWidth="2" strokeDasharray="5 7" />

        <g filter="url(#softShadow)">
          <rect x="68" y="78" width="180" height="244" rx="18" fill="#FFFFFF" stroke="#D9DDE5" />
          <rect x="90" y="102" width="62" height="10" rx="5" fill="#C11D63" />
          <rect x="90" y="128" width="126" height="7" rx="3.5" fill="#4B5364" />
          <rect x="90" y="146" width="112" height="7" rx="3.5" fill="#AEB5C0" />
          <rect x="90" y="164" width="121" height="7" rx="3.5" fill="#AEB5C0" />
          <rect x="90" y="198" width="136" height="54" rx="10" fill="#F7F8FA" stroke="#E2E5EA" />
          <path d="M105 216H211" stroke="#858D9B" strokeWidth="5" strokeLinecap="round" />
          <path d="M105 232H186" stroke="#B0B6C0" strokeWidth="5" strokeLinecap="round" />
          <rect x="90" y="274" width="102" height="7" rx="3.5" fill="#AEB5C0" />
          <rect x="90" y="292" width="126" height="7" rx="3.5" fill="#AEB5C0" />
          <path d="M220 78V112H248" fill="#F4E6EC" />
          <path d="M220 78L248 112" stroke="#D5BEC8" />
        </g>

        <g>
          <circle cx="316" cy="130" r="45" fill="#222438" />
          <path d="M296 130H336" stroke="#F2A7C6" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M316 110V150" stroke="#F2A7C6" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="316" cy="130" r="20" stroke="#FFFFFF" strokeWidth="1.8" strokeDasharray="3 4" />
          <text className="hero-svg-label" x="316" y="190" textAnchor="middle" fontSize="15" fontWeight="600" fill="#303444">TERMINOLOGY</text>
        </g>

        <g>
          <circle cx="406" cy="214" r="45" fill="#F7DCE8" />
          <path d="M386 205H426" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <path d="M386 216H416" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <path d="M386 227H424" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
          <circle cx="431" cy="190" r="13" fill="#C11D63" />
          <path d="M425 190L429 194L437 185" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text className="hero-svg-label" x="406" y="274" textAnchor="middle" fontSize="15" fontWeight="600" fill="#303444">REVIEW</text>
        </g>

        <g>
          <circle cx="316" cy="300" r="45" fill="#FFFFFF" stroke="#DADDE4" />
          <path d="M296 288H336" stroke="#616A7A" strokeWidth="2" strokeLinecap="round" />
          <path d="M296 300H327" stroke="#616A7A" strokeWidth="2" strokeLinecap="round" />
          <path d="M296 312H334" stroke="#616A7A" strokeWidth="2" strokeLinecap="round" />
          <path d="M337 277V290H350" fill="#F4E6EC" />
          <path d="M337 277L350 290" stroke="#C11D63" strokeWidth="1.6" />
          <text className="hero-svg-label" x="316" y="360" textAnchor="middle" fontSize="15" fontWeight="600" fill="#303444">RELEASE</text>
        </g>

        <path d="M248 161C270 151 276 143 283 136" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M354 155C371 168 383 182 391 194" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M389 249C376 267 359 279 347 286" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" />
        <circle cx="253" cy="159" r="4" fill="#C11D63" />
        <circle cx="389" cy="193" r="4" fill="#C11D63" />
        <circle cx="348" cy="286" r="4" fill="#C11D63" />
      </svg>
      <ul className="hero-visual-legend" aria-label="Workflow stages shown in the illustration">
        <li><span aria-hidden="true" />Terminology</li>
        <li><span aria-hidden="true" />Review</li>
        <li><span aria-hidden="true" />Release</li>
      </ul>
    </div>
  );
}

function ResponsiveTable({ caption, columns, rows, className = "" }) {
  return (
    <div className={`table-shell wide-breakout ${className}`.trim()}>
      {caption ? <p className="table-caption">{caption}</p> : null}
      <div className="table-scroll" tabIndex="0" aria-label={caption || "Scrollable comparison table"}>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) =>
                  cellIndex === 0 ? (
                    <th key={`${cell}-${cellIndex}`} scope="row" data-label={columns[cellIndex]}>
                      {cell}
                    </th>
                  ) : (
                    <td key={`${cellIndex}-${String(cell).slice(0, 18)}`} data-label={columns[cellIndex]}>
                      {cell}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SectionIntro({ children }) {
  return <p className="section-intro">{children}</p>;
}

function Callout({ label, title, children, tone = "light" }) {
  return (
    <aside className={`callout callout-${tone}`}>
      {label ? <p className={`eyebrow ${tone === "dark" ? "eyebrow-dark" : ""}`.trim()}>{label}</p> : null}
      {title ? <h3>{title}</h3> : null}
      <div className="callout-copy">{children}</div>
    </aside>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <div className="checklist-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="check-marker" aria-hidden="true">
              <CheckIcon />
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FAQItem({ item, index, open, onToggle }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <ChevronIcon open={open} />
        </button>
      </h3>
      <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!open} className="faq-answer">
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function MedicalDeviceIFUTranslationGuideWireframe() {
  const [activeSection, setActiveSection] = useState(tocItems[0].id);
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const sectionIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-22% 0px -65% 0px", threshold: [0, 0.1, 0.5] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <main className="ifu-guide-page">
      <style>{`
        :root {
          --stepes-magenta: ${COLORS.magenta};
          --stepes-magenta-dark: ${COLORS.magentaDark};
          --stepes-magenta-deep: ${COLORS.magentaDeep};
          --stepes-blush: ${COLORS.blush};
          --stepes-blush-strong: ${COLORS.blushStrong};
          --stepes-ink: ${COLORS.ink};
          --stepes-body: ${COLORS.body};
          --stepes-muted: ${COLORS.muted};
          --stepes-line: ${COLORS.line};
          --stepes-soft: ${COLORS.soft};
          --stepes-dark: ${COLORS.dark};
          --shell: 1280px;
          --reading: 760px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .ifu-guide-page {
          overflow-x: hidden;
          overflow-x: clip;
          color: var(--stepes-ink);
          background: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .ifu-guide-page a { color: inherit; }
        .ifu-guide-page p,
        .ifu-guide-page li,
        .ifu-guide-page td,
        .ifu-guide-page th {
          color: var(--stepes-body);
          overflow-wrap: break-word;
        }
        .shell {
          width: min(var(--shell), calc(100% - 112px));
          margin: 0 auto;
        }
        .reading-column { width: min(var(--reading), 100%); }
        .section-pad { padding: 96px 0; }
        .section-pad-dense { padding: 80px 0; }
        .eyebrow {
          margin: 0 0 14px;
          color: var(--stepes-magenta) !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: 0.15em !important;
          text-transform: uppercase;
        }
        .eyebrow-dark { color: #F2A7C6 !important; }
        h1, h2, h3 { margin: 0; color: var(--stepes-ink); font-weight: 600; }
        h1 { font-size: 48px; line-height: 1.08; letter-spacing: -0.035em; max-width: 760px; }
        h2 { font-size: 36px; line-height: 1.16; letter-spacing: -0.025em; }
        h3 { font-size: 24px; line-height: 1.28; letter-spacing: -0.018em; }
        p { margin: 0 0 22px; font-size: 18px; line-height: 1.7; }
        ul, ol { margin: 0; padding: 0; }
        .section-intro {
          max-width: 780px;
          margin: 20px 0 32px;
          color: #313A4D;
          font-size: 19px;
          line-height: 1.65;
        }
        .prose p:last-child, .callout-copy p:last-child { margin-bottom: 0; }
        .article-section { scroll-margin-top: 112px; padding: 64px 0 76px; border-bottom: 1px solid var(--stepes-line); }
        .article-section:first-child { padding-top: 0; }
        .article-section:last-child { border-bottom: 0; }
        .article-section > h2 { max-width: 760px; }
        .article-section h3 { margin: 38px 0 14px; }
        .article-section .prose-list { margin: 22px 0 28px; display: grid; gap: 12px; list-style: none; }
        .article-section .prose-list li {
          position: relative;
          padding-left: 24px;
          font-size: 18px;
          line-height: 1.65;
        }
        .article-section .prose-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.72em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--stepes-magenta);
          transform: translateY(-50%);
        }
        .numbered-list {
          margin: 24px 0 30px;
          padding: 0;
          list-style: none;
          counter-reset: guide-step;
          display: grid;
          gap: 14px;
        }
        .numbered-list li {
          counter-increment: guide-step;
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 14px;
          align-items: start;
          font-size: 18px;
          line-height: 1.65;
        }
        .numbered-list li::before {
          content: counter(guide-step, decimal-leading-zero);
          color: var(--stepes-magenta);
          font-size: 14px;
          line-height: 1.7;
          font-weight: 600;
        }
        .prose a:not(.editorial-link),
        .article-section > p a {
          color: var(--stepes-magenta) !important;
          font-weight: 600;
          text-decoration: none;
          border-bottom: 1px solid transparent;
        }
        .prose a:not(.editorial-link):hover,
        .article-section > p a:hover {
          color: var(--stepes-magenta-deep) !important;
          border-bottom-color: currentColor;
        }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--stepes-magenta) !important;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          text-decoration: none;
          transition: color 160ms ease, gap 160ms ease;
        }
        .editorial-link:hover { color: var(--stepes-magenta-deep) !important; gap: 11px; }
        .editorial-link svg { flex: 0 0 auto; margin-top: 2px; }
        .section-link-stack { display: flex; flex-wrap: wrap; gap: 14px 28px; align-items: center; }
        .editorial-link:focus-visible,
        .button:focus-visible,
        .toc-link:focus-visible,
        .faq-item button:focus-visible,
        .mobile-toc-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 4px;
        }

        /* Hero */
        .guide-hero {
          position: relative;
          padding: 96px 0 88px;
          background:
            radial-gradient(circle at 88% 18%, rgba(193,29,99,0.08), transparent 30%),
            linear-gradient(180deg, #FFFFFF 0%, #FBFBFC 100%);
          border-bottom: 1px solid var(--stepes-line);
        }
        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(390px, 0.85fr);
          gap: 70px;
          align-items: center;
        }
        .hero-deck {
          max-width: 760px;
          margin: 24px 0 30px;
          color: #374156;
          font-size: 20px;
          line-height: 1.65;
        }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 23px;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease;
        }
        .button-primary,
        .button-primary:link,
        .button-primary:visited,
        .button-primary:hover,
        .button-primary:active,
        .button-primary:focus,
        .button-primary:focus-visible {
          color: #FFFFFF !important;
        }
        .button-primary,
        .button-primary * { color: #FFFFFF !important; stroke: currentColor; }
        .button-primary { background: var(--stepes-magenta); box-shadow: 0 12px 24px rgba(193,29,99,0.18); }
        .button-primary:hover { background: var(--stepes-magenta-deep); transform: translateY(-1px); box-shadow: 0 15px 28px rgba(122,21,66,0.2); }
        .button-secondary { color: var(--stepes-ink) !important; background: #FFFFFF; border-color: #D8DCE4; }
        .button-secondary:hover { border-color: #B9BFCB; transform: translateY(-1px); }
        .hero-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 12px 18px;
          margin-top: 30px;
          color: var(--stepes-muted);
          font-size: 14px;
          line-height: 1.45;
        }
        .hero-meta span { display: inline-flex; align-items: center; gap: 8px; }
        .hero-meta span:not(:last-child)::after {
          content: "";
          width: 4px;
          height: 4px;
          margin-left: 10px;
          border-radius: 50%;
          background: #B7BDC8;
        }
        .hero-visual { width: 100%; }
        .hero-visual svg { display: block; width: 100%; height: auto; }
        .hero-visual-legend { display: none; list-style: none; }

        /* Summary */
        .summary-section { padding: 72px 0; background: var(--stepes-blush); }
        .summary-grid { display: grid; grid-template-columns: 0.7fr 1.3fr; gap: 72px; align-items: start; }
        .summary-lead h2 { max-width: 430px; font-size: 34px; }
        .summary-lead p { margin-top: 18px; max-width: 440px; }
        .takeaway-list { list-style: none; border-top: 1px solid #E4C9D5; }
        .takeaway-list li {
          display: grid;
          grid-template-columns: 32px 1fr;
          gap: 16px;
          padding: 17px 0;
          border-bottom: 1px solid #E4C9D5;
          font-size: 16px;
          line-height: 1.55;
        }
        .takeaway-check {
          width: 24px;
          height: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta);
          border: 1px solid #D8A8BC;
          border-radius: 50%;
          margin-top: 1px;
        }

        /* Article navigation */
        .guide-region { padding: 92px 0 0; }
        .article-layout {
          width: min(1080px, 100%);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 260px minmax(0, 760px);
          gap: 64px;
          align-items: start;
        }
        .toc-rail {
          position: sticky;
          top: 96px;
          align-self: start;
          max-height: calc(100vh - 128px);
          overflow-y: auto;
          padding: 4px 12px 16px 0;
          scrollbar-width: thin;
        }
        .toc-title { margin: 0 0 16px; color: var(--stepes-ink); font-size: 16px; line-height: 1.4; font-weight: 600; }
        .toc-list { list-style: none; border-left: 1px solid #DDE1E7; }
        .toc-list li { margin: 0; }
        .toc-link {
          display: block;
          position: relative;
          padding: 8px 0 8px 18px;
          color: #636D7D !important;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 400;
          text-decoration: none;
        }
        .toc-link::before {
          content: "";
          position: absolute;
          left: -1px;
          top: 7px;
          bottom: 7px;
          width: 2px;
          background: transparent;
        }
        .toc-link:hover { color: var(--stepes-magenta) !important; }
        .toc-link.is-active { color: var(--stepes-magenta) !important; font-weight: 600; }
        .toc-link.is-active::before { background: var(--stepes-magenta); }
        .mobile-toc { display: none; }
        .mobile-toc-button {
          width: 100%;
          min-height: 52px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 13px 16px;
          color: var(--stepes-ink);
          background: #FFFFFF;
          border: 1px solid #DDE1E7;
          border-radius: 16px;
          font-size: 16px;
          font-weight: 600;
          text-align: left;
        }
        .mobile-toc-panel {
          margin-top: 10px;
          padding: 8px 16px 12px;
          border: 1px solid #DDE1E7;
          border-radius: 16px;
          background: #FFFFFF;
        }
        .mobile-toc-panel a { display: block; padding: 10px 0; color: #4E586A; font-size: 16px; line-height: 1.45; text-decoration: none; border-bottom: 1px solid #EEF0F3; }
        .mobile-toc-panel a:last-child { border-bottom: 0; }
        .mobile-toc-panel a.is-active { color: var(--stepes-magenta); font-weight: 600; }
        .chevron { transition: transform 160ms ease; }
        .chevron-open { transform: rotate(180deg); }

        /* Callouts and frameworks */
        .callout {
          margin: 34px 0;
          padding: 30px 32px;
          border-radius: 24px;
          border: 1px solid #E1E4EA;
        }
        .callout h3 { margin: 0 0 12px; overflow-wrap: anywhere; }
        .callout-light { background: #F8F9FB; }
        .callout-blush { background: var(--stepes-blush); border-color: #EBCDDD; }
        .callout-dark { background: var(--stepes-dark); border-color: var(--stepes-dark); }
        .callout-dark h3, .callout-dark p, .callout-dark li { color: #FFFFFF; }
        .callout-copy p, .callout-copy li { font-size: 17px; line-height: 1.65; }
        .framework-wide {
          width: min(900px, calc(100% + 96px));
          max-width: calc(100vw - 112px);
          margin: 40px 0 16px;
          padding: 42px;
          border-radius: 30px;
          background: var(--stepes-dark);
          color: #FFFFFF;
          box-shadow: 0 20px 45px rgba(28,31,49,0.12);
        }
        .framework-wide h3 { margin: 0; color: #FFFFFF; }
        .framework-lead { max-width: 760px; margin: 14px 0 30px; color: #D9DCE5; font-size: 17px; line-height: 1.65; }
        .control-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,0.15); }
        .control-item { padding: 24px 24px 24px 0; border-bottom: 1px solid rgba(255,255,255,0.15); }
        .control-item:nth-child(odd) { padding-right: 30px; border-right: 1px solid rgba(255,255,255,0.15); }
        .control-item:nth-child(even) { padding-left: 30px; }
        .control-item h4 { margin: 0 0 8px; color: #FFFFFF; font-size: 18px; line-height: 1.35; font-weight: 600; }
        .control-item p { margin: 0 0 10px; color: #CDD1DB; font-size: 16px; line-height: 1.55; }
        .control-output { color: #F2A7C6 !important; font-weight: 600; }

        /* Tables */
        .wide-breakout { width: min(900px, calc(100% + 96px)); max-width: calc(100vw - 112px); }
        .table-shell { margin: 36px 0 40px; }
        .table-caption { margin: 0 0 12px; color: var(--stepes-ink); font-size: 16px; line-height: 1.5; font-weight: 600; }
        .table-scroll { overflow-x: auto; border: 1px solid #DEE2E8; border-radius: 22px; background: #FFFFFF; }
        table { width: 100%; border-collapse: collapse; min-width: 680px; }
        th, td { padding: 18px 20px; text-align: left; vertical-align: top; border-bottom: 1px solid #E7E9ED; font-size: 16px; line-height: 1.55; }
        thead th { color: var(--stepes-ink); background: #F5F6F8; font-weight: 600; }
        tbody th { width: 24%; color: var(--stepes-ink); font-weight: 600; }
        tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }
        tbody tr:nth-child(even) { background: #FCFCFD; }

        /* Workflow */
        .workflow-band {
          width: min(900px, calc(100% + 96px));
          max-width: calc(100vw - 112px);
          margin: 40px 0;
          padding: 42px;
          border-radius: 30px;
          background: #F7F8FA;
          border: 1px solid #E1E4E9;
        }
        .workflow-list { display: grid; grid-template-columns: 1fr 1fr; list-style: none; }
        .workflow-step {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 16px;
          padding: 24px 28px 24px 0;
          border-bottom: 1px solid #DEE2E8;
        }
        .workflow-step:nth-child(odd) { border-right: 1px solid #DEE2E8; padding-right: 30px; }
        .workflow-step:nth-child(even) { padding-left: 30px; }
        .workflow-step:nth-last-child(-n+2) { border-bottom: 0; }
        .workflow-number {
          width: 38px;
          height: 38px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: var(--stepes-magenta);
          background: #FFFFFF;
          border: 1px solid #DFBDCC;
          font-size: 15px;
          font-weight: 600;
        }
        .workflow-step h3 { margin: 2px 0 8px; font-size: 19px; }
        .workflow-step p { margin: 0; font-size: 16px; line-height: 1.58; }

        /* Split and lists */
        .split-panel {
          width: min(900px, calc(100% + 96px));
          max-width: calc(100vw - 112px);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          margin: 36px 0;
          border: 1px solid #E0E3E8;
          border-radius: 26px;
          overflow: hidden;
        }
        .split-panel > div { padding: 34px; }
        .split-panel > div:first-child { background: #F7F8FA; border-right: 1px solid #E0E3E8; }
        .split-panel h3 { margin: 0 0 16px; }
        .compact-list { list-style: none; display: grid; gap: 12px; }
        .compact-list li { position: relative; padding-left: 22px; font-size: 16px; line-height: 1.55; }
        .compact-list li::before { content: ""; position: absolute; left: 0; top: 0.73em; width: 6px; height: 6px; border-radius: 50%; background: var(--stepes-magenta); transform: translateY(-50%); }
        .field-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 12px 28px; margin: 26px 0 34px; list-style: none; }
        .field-grid li { padding: 14px 0; border-bottom: 1px solid #E7E9ED; font-size: 16px; line-height: 1.45; }
        .field-grid li:last-child:nth-child(odd) { grid-column: 1 / -1; }

        /* Checklist */
        .checklist-shell {
          width: min(900px, calc(100% + 96px));
          max-width: calc(100vw - 112px);
          margin: 42px 0;
          padding: 44px;
          border-radius: 30px;
          background: var(--stepes-blush);
          border: 1px solid #EACADA;
        }
        .checklist-header { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 30px; }
        .checklist-header h3 { margin: 0; }
        .checklist-header p { max-width: 420px; margin: 0; font-size: 16px; line-height: 1.55; }
        .checklist-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 34px 44px; }
        .checklist-group { border-top: 1px solid #DDBACA; padding-top: 20px; }
        .checklist-group h3 { margin: 0 0 15px; font-size: 19px; }
        .checklist-group ul { list-style: none; display: grid; gap: 11px; }
        .checklist-group li { display: grid; grid-template-columns: 24px 1fr; gap: 10px; align-items: start; font-size: 16px; line-height: 1.5; }
        .checklist-group:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .checklist-group:last-child:nth-child(odd) ul { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 11px 28px; }
        .check-marker { width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; color: var(--stepes-magenta); border: 1px solid #D7AABB; border-radius: 6px; margin-top: 1px; }

        /* Failures and provider */
        .failure-list { width: min(900px, calc(100% + 96px)); max-width: calc(100vw - 112px); margin-top: 36px; border-top: 1px solid var(--stepes-line); }
        .failure-row { display: grid; grid-template-columns: 42px 1fr; gap: 24px; padding: 28px 0; border-bottom: 1px solid var(--stepes-line); }
        .failure-marker { color: var(--stepes-magenta); font-size: 20px; font-weight: 600; line-height: 1.4; }
        .failure-row h3 { margin: 0 0 12px; font-size: 20px; }
        .failure-row p { margin: 0 0 8px; font-size: 16px; line-height: 1.58; }
        .failure-row strong { color: var(--stepes-ink); font-weight: 600; }
        .provider-grid { width: min(900px, calc(100% + 96px)); max-width: calc(100vw - 112px); display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 40px; margin-top: 34px; border-top: 1px solid var(--stepes-line); }
        .provider-area { padding: 28px 0; border-bottom: 1px solid var(--stepes-line); }
        .provider-area:last-child:nth-child(odd) { grid-column: 1 / -1; }
        .provider-area:last-child:nth-child(odd) ul { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 38px; }
        .provider-area h3 { margin: 0 0 15px; font-size: 21px; }

        /* FAQ */
        .faq-panel { width: min(900px, calc(100% + 96px)); max-width: calc(100vw - 112px); margin-top: 36px; border-top: 1px solid #DDE1E7; }
        .faq-item { border-bottom: 1px solid #DDE1E7; }
        .faq-item h3 { margin: 0; }
        .faq-item button {
          width: 100%;
          min-height: 68px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 0;
          color: var(--stepes-ink);
          background: transparent;
          border: 0;
          font: inherit;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
          text-align: left;
          cursor: pointer;
        }
        .faq-item button:hover { color: var(--stepes-magenta); }
        .faq-answer { max-width: 820px; padding: 0 50px 24px 0; }
        .faq-answer p { margin: 0; font-size: 16px; line-height: 1.65; }

        /* Sources, related, final */
        .sources-section { padding: 88px 0; background: #F8F9FA; }
        .sources-wrap { width: min(900px, 100%); margin: 0 auto; }
        .sources-list { margin-top: 32px; list-style: none; border-top: 1px solid #DDE1E7; }
        .sources-list li { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; padding: 20px 0; border-bottom: 1px solid #DDE1E7; }
        .source-title { margin: 0 0 4px; color: var(--stepes-ink); font-size: 16px; line-height: 1.45; font-weight: 600; }
        .source-org { margin: 0; color: var(--stepes-muted); font-size: 14px; line-height: 1.45; }
        .conclusion-section { padding: 88px 0; }
        .conclusion-wrap { width: min(820px, 100%); margin: 0 auto; text-align: center; }
        .conclusion-wrap p { margin: 22px auto 0; max-width: 760px; }
        .related-section { padding: 82px 0; border-top: 1px solid var(--stepes-line); background: #FFFFFF; }
        .related-head { display: flex; justify-content: space-between; gap: 40px; align-items: end; margin-bottom: 34px; }
        .related-head p { max-width: 540px; margin: 0; font-size: 17px; }
        .related-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid var(--stepes-line); }
        .related-item { min-width: 0; padding: 28px 24px 12px 0; border-right: 1px solid var(--stepes-line); }
        .related-item:not(:first-child) { padding-left: 24px; }
        .related-item:last-child { border-right: 0; }
        .related-category { margin: 0 0 10px; color: var(--stepes-magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: 0.13em; text-transform: uppercase; }
        .related-item h3 { margin: 0 0 12px; font-size: 21px; }
        .related-item p { margin: 0 0 18px; font-size: 16px; line-height: 1.58; }
        .final-cta { padding: 64px 0 96px; }
        .cta-panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 50px;
          align-items: center;
          padding: 58px 64px;
          border-radius: 30px;
          background: var(--stepes-blush);
          border: 1px solid #E9C9D8;
        }
        .cta-panel::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -120px;
          width: 320px;
          height: 320px;
          border-radius: 50%;
          border: 1px solid rgba(193,29,99,0.16);
        }
        .cta-panel h2 { max-width: 720px; }
        .cta-panel p { max-width: 760px; margin: 18px 0 0; }
        .cta-actions { position: relative; z-index: 1; display: flex; flex-direction: column; gap: 12px; min-width: 250px; }

        @media (max-width: 1399px) {
          .wide-breakout,
          .framework-wide,
          .workflow-band,
          .split-panel,
          .checklist-shell,
          .failure-list,
          .provider-grid,
          .faq-panel { width: 100%; max-width: 100%; }
        }

        @media (max-width: 1199px) {
          .shell { width: min(var(--shell), calc(100% - 80px)); }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(340px, 0.72fr); gap: 44px; }
          .article-layout { grid-template-columns: 240px minmax(0, 1fr); gap: 48px; }
          .related-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .related-item { border-bottom: 1px solid var(--stepes-line); }
          .related-item:nth-child(2) { border-right: 0; }
          .related-item:nth-child(3) { padding-left: 0; }
          .related-item:nth-last-child(-n+2) { border-bottom: 0; }
        }

        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .guide-hero { padding: 82px 0 74px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 800px; }
          .hero-visual { max-width: 580px; margin: 0 auto; }
          .summary-grid { grid-template-columns: 1fr; gap: 38px; }
          .summary-lead h2, .summary-lead p { max-width: 760px; }
          .guide-region { padding-top: 56px; }
          .article-layout { display: block; width: min(800px, 100%); }
          .toc-rail { display: none; }
          .mobile-toc { display: block; margin-bottom: 48px; }
          .article-section { padding: 56px 0 66px; }
          .framework-wide, .workflow-band, .checklist-shell { padding: 34px; }
          .control-grid, .workflow-list { grid-template-columns: 1fr; }
          .control-item,
          .control-item:nth-child(odd),
          .control-item:nth-child(even) { padding: 22px 0; border-right: 0; }
          .control-item:last-child { border-bottom: 0; }
          .workflow-step,
          .workflow-step:nth-child(odd),
          .workflow-step:nth-child(even) { padding: 22px 0; border-right: 0; border-bottom: 1px solid #DEE2E8; }
          .workflow-step:nth-last-child(-n+2) { border-bottom: 1px solid #DEE2E8; }
          .workflow-step:last-child { border-bottom: 0; }
          .split-panel { grid-template-columns: 1fr; }
          .split-panel > div:first-child { border-right: 0; border-bottom: 1px solid #E0E3E8; }
          .related-head { display: block; }
          .related-head p { margin-top: 16px; }
          .cta-panel { grid-template-columns: 1fr; padding: 48px; }
          .cta-actions { flex-direction: row; min-width: 0; }
        }

        @media (max-width: 700px) {
          .shell { width: calc(100% - 40px); }
          .section-pad { padding: 68px 0; }
          .section-pad-dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          p, .article-section .prose-list li, .numbered-list li { font-size: 17px; line-height: 1.67; }
          .section-intro { font-size: 18px; margin-top: 17px; }
          .guide-hero { padding: 68px 0 62px; }
          .hero-grid { gap: 42px; }
          .hero-deck { font-size: 18px; line-height: 1.62; }
          .hero-svg-label { display: none; }
          .hero-visual-legend {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 8px;
            margin: 12px 0 0;
          }
          .hero-visual-legend li {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 7px;
            min-height: 44px;
            padding: 9px 8px;
            color: var(--stepes-ink);
            background: #FFFFFF;
            border: 1px solid #E0E3E8;
            border-radius: 12px;
            font-size: 16px;
            line-height: 1.25;
            font-weight: 600;
            text-align: center;
          }
          .hero-visual-legend li span {
            width: 7px;
            height: 7px;
            flex: 0 0 auto;
            border-radius: 50%;
            background: var(--stepes-magenta);
          }
          .hero-actions { flex-direction: column; }
          .button { width: 100%; }
          .section-link-stack { flex-direction: column; align-items: flex-start; gap: 14px; }
          .hero-meta { gap: 8px 12px; }
          .hero-meta span::after { display: none; }
          .summary-section { padding: 62px 0; }
          .summary-lead h2 { font-size: 30px; }
          .takeaway-list li { grid-template-columns: 30px 1fr; }
          .guide-region { padding-top: 42px; }
          .mobile-toc { margin-bottom: 34px; }
          .article-section { scroll-margin-top: 88px; padding: 48px 0 58px; }
          .article-section h3 { margin-top: 32px; }
          .callout { padding: 26px 24px; border-radius: 20px; }
          .framework-wide, .workflow-band, .checklist-shell { padding: 28px 22px; border-radius: 24px; }
          .control-grid, .workflow-list, .checklist-grid, .provider-grid, .field-grid { grid-template-columns: 1fr; }
          .field-grid li:last-child:nth-child(odd),
          .checklist-group:last-child:nth-child(odd),
          .provider-area:last-child:nth-child(odd) { grid-column: auto; }
          .checklist-group:last-child:nth-child(odd) ul,
          .provider-area:last-child:nth-child(odd) ul { grid-template-columns: 1fr; }
          .control-item,
          .control-item:nth-child(odd),
          .control-item:nth-child(even) { padding: 22px 0; border-right: 0; }
          .workflow-step,
          .workflow-step:nth-child(odd),
          .workflow-step:nth-child(even) { grid-template-columns: 42px 1fr; padding: 22px 0; border-right: 0; border-bottom: 1px solid #DEE2E8; }
          .workflow-step:last-child { border-bottom: 0; }
          .split-panel > div { padding: 28px 22px; }
          .checklist-header { display: block; }
          .checklist-header p { margin-top: 14px; }
          .failure-row { grid-template-columns: 32px 1fr; gap: 14px; }
          .provider-area { padding: 24px 0; }
          .faq-item button { font-size: 17px; min-height: 64px; gap: 16px; }
          .faq-answer { padding-right: 0; }

          .table-scroll { overflow: visible; border: 0; border-radius: 0; }
          table, thead, tbody, tr, th, td { display: block; min-width: 0; width: 100%; }
          thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
          tbody { display: grid; gap: 14px; }
          tbody tr { padding: 0; border: 1px solid #DEE2E8; border-radius: 18px; overflow: hidden; background: #FFFFFF !important; }
          tbody th, tbody td { padding: 16px 18px; border-bottom: 1px solid #E8EAEE; }
          tbody tr > *:last-child { border-bottom: 0; }
          tbody th::before, tbody td::before {
            content: attr(data-label);
            display: block;
            margin-bottom: 5px;
            color: var(--stepes-magenta);
            font-size: 11px;
            line-height: 1.3;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }
          tbody th { width: 100%; background: #F7F8FA; }

          .sources-section, .conclusion-section, .related-section { padding: 68px 0; }
          .sources-list li { grid-template-columns: 1fr; gap: 8px; }
          .related-grid { grid-template-columns: 1fr; }
          .related-item,
          .related-item:not(:first-child),
          .related-item:nth-child(3) { padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--stepes-line); }
          .related-item:last-child { border-bottom: 0; }
          .final-cta { padding: 44px 0 72px; }
          .cta-panel { padding: 38px 24px; border-radius: 24px; }
          .cta-actions { flex-direction: column; }
        }

        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          .button, .editorial-link, .chevron { transition: none; }
        }

        @media (max-width: 360px) {
          .shell { width: calc(100% - 40px); }
          h1 { font-size: 36px; }
          .hero-meta { display: block; }
          .hero-meta span { display: flex; margin-top: 7px; }
          .hero-visual-legend { grid-template-columns: 1fr; }
          .framework-wide, .workflow-band, .checklist-shell { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <header className="guide-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Medical Device Translation Guide</p>
            <h1>Medical Device IFU Translation Guide: Workflow, Quality, and Version Control</h1>
            <p className="hero-deck">
              Plan professional- and patient-use instructions for use with practical guidance on market requirements,
              terminology, translation review, multilingual publishing, electronic IFUs, revision control, and
              final-format quality assurance.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={sectionUrl("what-is-an-ifu")}>
                <span>Explore the Guide</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href={sectionUrl("final-format-qa")}>
                <span>Jump to the Release Checklist</span>
                <ArrowIcon />
              </a>
            </div>
            <div className="hero-meta" aria-label="Guide details">
              <span>Specialist guide</span>
              <span>14 practical chapters</span>
              <span>Includes a final IFU release checklist</span>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </header>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell summary-grid">
          <div className="summary-lead">
            <p className="eyebrow">Key Takeaways</p>
            <h2 id="key-takeaways-title">Build Quality Into the Program Before Translation Begins</h2>
            <p>
              Accurate language is essential, but a dependable multilingual IFU also requires controlled scope,
              terminology, review, formatting, revision, and release decisions.
            </p>
          </div>
          <ul className="takeaway-list">
            {keyTakeaways.map((takeaway) => (
              <li key={takeaway}>
                <span className="takeaway-check" aria-hidden="true"><CheckIcon size={16} /></span>
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="guide-region">
        <div className="shell">
          <div className="mobile-toc">
            <button
              className="mobile-toc-button"
              type="button"
              aria-expanded={tocOpen}
              aria-controls="mobile-toc-panel"
              onClick={() => setTocOpen((value) => !value)}
            >
              <span>In This Guide</span>
              <ChevronIcon open={tocOpen} />
            </button>
            <nav id="mobile-toc-panel" className="mobile-toc-panel" hidden={!tocOpen} aria-label="Guide chapters">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  className={activeSection === item.id ? "is-active" : undefined}
                  href={sectionUrl(item.id)}
                  aria-current={activeSection === item.id ? "location" : undefined}
                  onClick={() => setTocOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="article-layout">
            <aside className="toc-rail" aria-label="Guide chapters">
              <p className="toc-title">In This Guide</p>
              <nav>
                <ul className="toc-list">
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a
                        className={`toc-link ${activeSection === item.id ? "is-active" : ""}`}
                        href={sectionUrl(item.id)}
                        aria-current={activeSection === item.id ? "location" : undefined}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <article className="article-body">
              <Callout label="Regulatory Note" title="Confirm the Requirements for Each Device and Market" tone="blush">
                <p>
                  This guide provides operational guidance and does not constitute legal or regulatory advice.
                  Medical device manufacturers remain responsible for determining the requirements that apply to
                  each device, market, user population, and delivery format.
                </p>
              </Callout>

              <section id="what-is-an-ifu" className="article-section">
                <h2>1. What Is a Medical Device IFU?</h2>
                <SectionIntro>
                  An instruction for use explains how a medical device should be used safely and as intended by the
                  people who install, operate, maintain, prescribe, or use it.
                </SectionIntro>
                <div className="prose">
                  <p>
                    Depending on the device and market, similar documents may be called directions for use,
                    operating instructions, user manuals, operator manuals, patient guides, or accompanying
                    information. The terminology varies, but the core responsibility is the same: the information
                    must support safe, effective, and intended use.
                  </p>
                  <p>An IFU may include:</p>
                  <ul className="prose-list">
                    <li>Intended purpose, indications, contraindications, and intended users</li>
                    <li>Warnings, precautions, residual risks, and emergency actions</li>
                    <li>Device components, accessories, installation, setup, calibration, and preparation</li>
                    <li>Operating procedures, performance limitations, and troubleshooting</li>
                    <li>Cleaning, disinfection, sterilization, reprocessing, and maintenance</li>
                    <li>Storage, transportation, disposal, symbols, diagrams, and software references</li>
                    <li>Manufacturer, document, revision, and release information</li>
                  </ul>
                  <p>
                    <a href="https://www.iso.org/standard/20417.html" target="_blank" rel="noreferrer">ISO 20417:2026</a>{" "}
                    provides a general framework for information supplied by medical-device manufacturers,
                    including identification, labeling, packaging information, marking, and accompanying
                    documentation such as IFUs.
                  </p>
                </div>

                <h3>IFUs, Labeling, and User Documentation Are Connected</h3>
                <p>
                  An IFU belongs to a broader controlled information system that may include labels, packaging,
                  quick-reference guides, device software, online help, training, service documentation, safety
                  communications, and regulatory submissions. A term, warning, menu command, model name, or
                  operating parameter that changes across these materials can create confusion even when each
                  individual translation appears linguistically acceptable.
                </p>
                <p>
                  The goal is therefore not only to translate the IFU. It is to preserve consistent, traceable
                  information across the complete device experience.
                </p>
                <EditorialLink href={STEPES_LINKS.medicalDeviceServices}>
                  Explore Medical Device Translation Services
                </EditorialLink>
              </section>

              <section id="controlled-process" className="article-section">
                <h2>2. Why IFU Translation Requires a Controlled Process</h2>
                <SectionIntro>
                  IFU translation combines linguistic, technical, usability, regulatory, and publishing
                  requirements. A workflow that addresses only words and sentences can overlook errors introduced
                  through terminology, document structure, graphics, software references, or revision control.
                </SectionIntro>
                <p>A translated IFU may be linguistically accurate but still be unsuitable for release if:</p>
                <ul className="prose-list">
                  <li>A warning is separated from the procedure it governs.</li>
                  <li>A translated button name does not match the device interface.</li>
                  <li>A decimal, unit, operating range, or model identifier changes.</li>
                  <li>Text expansion hides part of a contraindication or operating step.</li>
                  <li>A translated layout carries an obsolete document revision.</li>
                  <li>A diagram contains untranslated or outdated labels.</li>
                  <li>The correct language is delivered for the wrong market or product configuration.</li>
                </ul>

                <div className="framework-wide">
                  <p className="eyebrow eyebrow-dark">IFU Translation Control Model</p>
                  <h3>Six Connected Controls for a Traceable Multilingual Release</h3>
                  <p className="framework-lead">
                    Weakness in any one control can undermine the final IFU. Define the controls together before
                    full translation begins.
                  </p>
                  <div className="control-grid">
                    {controlModel.map((item) => (
                      <div className="control-item" key={item.title}>
                        <h4>{item.title}</h4>
                        <p>{item.question}</p>
                        <p className="control-output">Output: {item.output}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="define-scope" className="article-section">
                <h2>3. Define Markets, Languages, Users, and Formats</h2>
                <SectionIntro>
                  The first major decision is not which translator to assign. It is what must be translated, for
                  whom, for which markets, and in which delivery formats.
                </SectionIntro>
                <p>
                  Create an approved translation brief before files are released. The brief should make product,
                  market, language, user, format, review, and release assumptions visible to every participant.
                </p>

                <ResponsiveTable
                  caption="Market and Language Planning Matrix"
                  columns={["Planning Area", "Questions to Resolve"]}
                  rows={marketRows}
                />

                <h3>Do Not Assume One Language List Applies Everywhere</h3>
                <p>
                  For devices placed on the European Union market, manufacturers must determine the official
                  language or languages required by each Member State. The European Commission maintains an
                  <a href="https://health.ec.europa.eu/publications/overview-language-requirements-manufacturers-medical-devices_en" target="_blank" rel="noreferrer"> overview of national language requirements</a>,
                  including certain requirements that affect graphical user interfaces.
                </p>
                <p>
                  For the United States, FDA device labeling is generally required in English, subject to specific
                  provisions for U.S. territories and foreign-language representations. For other markets, confirm
                  requirements through the manufacturer’s regulatory and market-access process rather than through
                  a generic global language list.
                </p>

                <h3>Plan Regional Language Variants Deliberately</h3>
                <p>
                  A language name alone may not be sufficiently precise. European and Brazilian Portuguese,
                  European and Canadian French, Simplified and Traditional Chinese, and market-specific Spanish or
                  English variants may require separate terminology, adaptation, or approval. Document the decision
                  rather than leaving it to individual translators or reviewers.
                </p>
              </section>

              <section id="prepare-source" className="article-section">
                <h2>4. Prepare the Source IFU for Translation</h2>
                <SectionIntro>
                  Translation quality begins with source quality. Ambiguity, inconsistent terminology, unclear
                  procedures, and uncontrolled revisions become more difficult to resolve after content has been
                  distributed across multiple languages.
                </SectionIntro>

                <h3>Approve or Control the Source</h3>
                <p>The source package should clearly identify:</p>
                <div className="split-panel">
                  <div>
                    <h3>Document Control</h3>
                    <ul className="compact-list">
                      <li>Final editable files and reference PDF</li>
                      <li>Source language, document number, and revision</li>
                      <li>Product, model, accessory, and configuration</li>
                      <li>Software or firmware version, when relevant</li>
                      <li>Effective or intended release date</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Translation Control</h3>
                    <ul className="compact-list">
                      <li>Markets, languages, and delivery formats</li>
                      <li>Included and excluded content</li>
                      <li>Known pending changes</li>
                      <li>Previous approved translations and terminology</li>
                      <li>Reviewer and approver responsibilities</li>
                    </ul>
                  </div>
                </div>
                <p>
                  When translation must begin before the source is frozen, establish a formal change process.
                  Record each source change, identify affected languages, and prevent informal edits from entering
                  the release through email or reviewer comments without authorization.
                </p>

                <h3>Improve Source Translatability</h3>
                <ul className="prose-list">
                  <li>Resolve long or syntactically ambiguous sentences and unclear pronoun references.</li>
                  <li>Define abbreviations and use one name for each device, component, and action.</li>
                  <li>Separate complex procedures into clear, ordered steps.</li>
                  <li>Associate warnings and precautions with the actions they govern.</li>
                  <li>Verify references to screens, buttons, figures, tables, and sections.</li>
                  <li>Identify noneditable graphics, hidden text, manual references, and unresolved comments.</li>
                  <li>Control units, dates, decimal conventions, model numbers, and technical values.</li>
                </ul>

                <h3>Write for the Intended User</h3>
                <p>
                  The same device information may need a different presentation for a surgeon, clinical technician,
                  home user, or caregiver. The EU MDR requires the medium, format, content, legibility, and location
                  of information to be appropriate to the device, its intended purpose, and the knowledge, education,
                  and training of the intended user. FDA patient-labeling guidance similarly emphasizes clear,
                  logically organized language for lay readers.
                </p>

                <ResponsiveTable
                  caption="Professional-Use and Patient-Use IFU Considerations"
                  columns={["Consideration", "Professional-Use IFU", "Patient- or Lay-User IFU"]}
                  rows={audienceRows}
                />

                <Callout label="Quality Note" title="Plain Language Must Preserve Approved Meaning" tone="light">
                  <p>
                    Simplifying language does not mean weakening, casually paraphrasing, or omitting safety
                    information. It means presenting the approved meaning in a form the intended user can understand
                    and act upon.
                  </p>
                </Callout>
              </section>

              <section id="terminology" className="article-section">
                <h2>5. Build and Govern Medical Device Terminology</h2>
                <SectionIntro>
                  Terminology decisions should be made before they appear in dozens of translated pages, screens,
                  labels, graphics, and review comments.
                </SectionIntro>
                <p>
                  A medical-device termbase should capture product, clinical, technical, software, safety, and
                  market-specific language that requires controlled use. Each entry needs enough context to guide
                  the translator and reviewer; an isolated source and target word pair is often insufficient.
                </p>

                <h3>Recommended Termbase Fields</h3>
                <ul className="field-grid">
                  {[
                    "Source term and definition",
                    "Approved target term",
                    "Part of speech and usage context",
                    "Product or content applicability",
                    "Example sentence",
                    "Allowed abbreviation",
                    "Prohibited alternatives",
                    "Applicable market or language variant",
                    "Approval status and approver",
                    "Revision history",
                  ].map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h3>Establish Terminology Ownership</h3>
                <p>
                  Regulatory, quality, engineering, clinical, product, and localization teams may all contribute,
                  but one controlled process should govern final approval. Assign responsibility for candidate-term
                  extraction, source definitions, translation proposals, ambiguity resolution, local variants,
                  deprecated terms, and change communication.
                </p>

                <h3>Coordinate Terms Across the Device Experience</h3>
                <p>
                  The approved term for a component, operating mode, warning, or user-interface command should
                  normally remain consistent across IFUs, labels, packaging, software, quick guides, training,
                  service documentation, support content, and safety communications. A change in one channel should
                  trigger an impact assessment across the others.
                </p>

                <h3>Manage Symbols as Controlled Information</h3>
                <p>
                  Symbols can reduce space and support international consistency, but they still require document
                  control. Confirm that the correct symbol version is used, that accompanying explanations remain
                  accurate, and that proprietary or unfamiliar symbols are explained where required. ISO 15223-1
                  defines symbols used with information supplied for medical devices, including symbols appearing
                  on the device, packaging, and accompanying information.
                </p>
                <div className="section-link-stack">
                  <EditorialLink href="https://www.iso.org/standard/77326.html" external>
                    Review ISO 15223-1 Symbol Information
                  </EditorialLink>
                  <EditorialLink href={STEPES_LINKS.terminologyManagement}>
                    Explore Terminology Management
                  </EditorialLink>
                </div>
              </section>

              <section id="translation-workflow" className="article-section">
                <h2>6. Design the Translation and Review Workflow</h2>
                <SectionIntro>
                  A controlled workflow defines inputs, responsibilities, review gates, exceptions, and release
                  evidence before the first target language is produced.
                </SectionIntro>

                <div className="workflow-band">
                  <h3>Ten Stages From Controlled Source to Approved Release</h3>
                  <ol className="workflow-list">
                    {workflowSteps.map((step, index) => (
                      <li className="workflow-step" key={step.title}>
                        <span className="workflow-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                        <div>
                          <h3>{step.title}</h3>
                          <p>{step.text}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <h3>Assign Clear Roles and Decision Rights</h3>
                <ResponsiveTable
                  caption="Typical IFU Translation Responsibilities"
                  columns={["Role", "Typical Responsibilities"]}
                  rows={roleRows}
                />

                <h3>Define the In-Country Reviewer’s Remit</h3>
                <p>
                  Unstructured in-country review often creates delays and inconsistent edits. Give reviewers the
                  approved source, target translation, terminology, audience guidance, review criteria, comment
                  categories, deadline, escalation method, and clear decision rights. A preference change should not
                  automatically override approved terminology or introduce meaning that is not present in the source.
                </p>

                <h3>Route Review According to Risk</h3>
                <p>
                  Not every sentence requires the same level of review. A risk-based model concentrates expert
                  attention where an error could have the greatest effect while retaining a controlled professional
                  workflow for lower-risk content.
                </p>
                <ResponsiveTable
                  caption="IFU Content Risk-Routing Matrix"
                  columns={["Content Category", "Examples", "Recommended Review Route"]}
                  rows={riskRows}
                />

                <h3>Use Back Translation for a Defined Purpose</h3>
                <p>
                  Back translation can help examine meaning after translation without requiring the reviewer to know
                  the target language. It should not be treated as a universal substitute for qualified forward
                  translation, independent bilingual review, terminology control, technical validation, usability
                  work, or final-format QA.
                </p>
                <EditorialLink href={STEPES_LINKS.translationQuality}>
                  Explore Translation Quality Assurance
                </EditorialLink>
              </section>

              <section id="ai-translation" className="article-section">
                <h2>7. Use AI Responsibly in IFU Translation</h2>
                <SectionIntro>
                  AI can accelerate parts of the process, but it does not remove the need for controlled language
                  assets, medical-device expertise, human judgment, and documented quality assurance.
                </SectionIntro>

                <div className="split-panel">
                  <div>
                    <h3>Where AI and Automation Can Help</h3>
                    <ul className="compact-list">
                      <li>Source analysis and terminology extraction</li>
                      <li>Detection of repeated or similar content</li>
                      <li>Initial translation of eligible segments</li>
                      <li>Revision comparison and change classification</li>
                      <li>Terminology, numerical, and completeness checks</li>
                      <li>Quality signals and reviewer routing</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Where Stronger Human Control Is Needed</h3>
                    <ul className="compact-list">
                      <li>Warnings, precautions, and contraindications</li>
                      <li>Patient- and lay-user instructions</li>
                      <li>Critical operating and emergency procedures</li>
                      <li>Reprocessing, calibration, and measurement content</li>
                      <li>Device-software interactions and safety-related updates</li>
                      <li>Novel, ambiguous, or highly specialized terminology</li>
                    </ul>
                  </div>
                </div>

                <h3>Translation Memory Is Not the Same as Generative AI</h3>
                <p>
                  Translation memory stores previously translated source and target segments for controlled reuse.
                  Generative AI or machine translation produces new target-language output. A mature workflow may use
                  both: approved translation memory for reuse, terminology management for controlled vocabulary, AI
                  for eligible new content, automated QA for detectable defects, and qualified professionals for
                  validation and release decisions.
                </p>

                <Callout label="Security and Governance" title="Protect Confidential Information Before Using AI" tone="dark">
                  <p>
                    Confirm how content is transmitted, stored, retained, and accessed; whether data can be used to
                    train external models; which logs and controls are available; and whether the environment meets
                    the manufacturer’s supplier, confidentiality, and security requirements.
                  </p>
                </Callout>

                <div className="section-link-stack">
                  <EditorialLink href={STEPES_LINKS.aiTranslation}>
                    Explore AI + Human Translation Workflows
                  </EditorialLink>
                  <EditorialLink href={STEPES_LINKS.translationMemory}>
                    Explore Translation Memory
                  </EditorialLink>
                </div>
              </section>

              <section id="publishing" className="article-section">
                <h2>8. Manage Multilingual Layout and Publishing</h2>
                <SectionIntro>
                  Translation changes the physical behavior of a document. Words expand or contract, line breaks
                  move, tables grow, page references shift, and some fonts fail to support required scripts.
                </SectionIntro>
                <p>
                  These changes matter because layout helps users understand sequence, hierarchy, warnings, and the
                  relationship between text and visuals. Multilingual publishing should therefore be planned as part
                  of the IFU workflow rather than treated as a final cosmetic step.
                </p>

                <h3>Common Multilingual Publishing Challenges</h3>
                <ul className="field-grid">
                  {[
                    "Text expansion and heading fit",
                    "Warning-box overflow",
                    "Table and callout breaks",
                    "Incorrect list or step numbering",
                    "Broken cross-references",
                    "Unsupported fonts or characters",
                    "Untranslated graphics",
                    "Right-to-left layout errors",
                    "Page-count changes",
                    "Incorrect headers, footers, or revision identifiers",
                    "Low-resolution images after export",
                    "Broken links, bookmarks, or accessibility navigation",
                  ].map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h3>Plan Right-to-Left Languages as a Layout Requirement</h3>
                <p>
                  Arabic, Hebrew, and other right-to-left languages require more than right-aligning paragraphs.
                  Review reading direction, number and unit placement, ordered procedures, tables, icons, arrows,
                  diagrams, mixed-language product names, software screenshots, navigation, headers, and footers.
                  Some visual elements should be mirrored; others must retain their original orientation because of
                  their technical meaning.
                </p>

                <h3>Control Text Inside Graphics</h3>
                <p>
                  Inventory all graphics containing translatable text before project launch. Decide whether each
                  graphic will be edited, recreated, converted to numbered callouts with a translated legend,
                  replaced with a language-neutral illustration, retained in the source language, or recaptured from
                  localized software.
                </p>

                <h3>Validate the Exported Output</h3>
                <p>
                  Inspect the final PDF or electronic file independently from the editable source. Exporting can
                  introduce missing fonts, changed line breaks, clipped content, low-resolution images, broken
                  bookmarks, transparency problems, printer marks, or accessibility defects.
                </p>
                <EditorialLink href={STEPES_LINKS.multilingualDtp}>
                  Explore Multilingual Desktop Publishing
                </EditorialLink>
              </section>

              <section id="version-control" className="article-section">
                <h2>9. Control Revisions and Electronic IFUs</h2>
                <SectionIntro>
                  Multilingual version control should connect every released language to the correct source content,
                  product configuration, market, software version, approval, and distribution channel.
                </SectionIntro>

                <h3>Minimum Version-Control Information</h3>
                <ul className="field-grid">
                  {versionFields.map((item) => <li key={item}>{item}</li>)}
                </ul>

                <h3>Use Change-Impact Analysis</h3>
                <ol className="numbered-list">
                  {[
                    "Identify changed, added, moved, and deleted content.",
                    "Determine whether the change affects meaning, terminology, layout, graphics, software references, or safety.",
                    "Identify every affected language, market, product, and delivery channel.",
                    "Retrieve valid prior translations and route changed content for contextual review.",
                    "Check unchanged text affected by headings, pagination, figures, or surrounding procedures.",
                    "Regenerate and inspect final outputs, update revision histories, and record approvals.",
                    "Withdraw, archive, or clearly identify superseded files before the new release becomes effective.",
                  ].map((item) => <li key={item}>{item}</li>)}
                </ol>
                <p>
                  An unchanged sentence may still require review when its heading, warning context, numbered step,
                  figure reference, or surrounding procedure changes.
                </p>

                <h3>Use Controlled File Names</h3>
                <Callout label="Illustrative Pattern" title="Product_DocumentType_DocumentNumber_Revision_Language-Market_Status.ext" tone="light">
                  <p>
                    Example: <strong>DeviceX_IFU_DOC-1042_RevC_fr-FR_Approved.pdf</strong>. File names support
                    identification, but they do not replace formal document metadata or a controlled repository.
                  </p>
                </Callout>

                <h3>Electronic IFUs Add Operational Requirements</h3>
                <p>
                  Electronic delivery can improve access, distribution, and update management, but it also requires
                  documented risk assessment, reliable access, revision communication, protection against tampering,
                  backup arrangements, paper-copy processes where required, and controlled availability of current
                  and prior versions.
                </p>
                <p>
                  The consolidated EU eIFU rules permit electronic rather than paper IFUs for qualifying
                  professional-use devices and medical-device software under defined conditions. Where it is
                  reasonably foreseeable that a professional-use device will also be used by lay persons, instructions
                  intended for those lay users must be supplied in paper form.
                </p>
                <p>
                  For devices covered by these rules, the paper-copy process must provide requested instructions at
                  no additional cost and, at the latest, within seven calendar days. Manufacturers must also manage
                  revision identification, website availability, and access to issued and obsolete versions for the
                  applicable retention period.
                </p>

                <Callout label="eIFU Checklist" title="Before Publishing a Multilingual Electronic IFU" tone="blush">
                  <ul className="compact-list">
                    <li>Confirm that the device and intended users are eligible for the proposed delivery model.</li>
                    <li>Keep required paper content available and document the paper-copy request process.</li>
                    <li>Make each language easy to find using language names users can recognize.</li>
                    <li>Map every IFU to the correct device, market, software version, and revision.</li>
                    <li>Display revision and publication information clearly and retain required prior versions.</li>
                    <li>Test links, QR codes, browsers, devices, and foreseeable access conditions.</li>
                    <li>Define how safety-related revisions will be communicated to affected users.</li>
                    <li>Verify and validate the electronic delivery method and revision-notification process.</li>
                  </ul>
                </Callout>
              </section>

              <section id="final-format-qa" className="article-section">
                <h2>10. Perform Final-Format Quality Assurance</h2>
                <SectionIntro>
                  Text review and final-format QA serve different purposes. A translation can be linguistically
                  approved before formatting and still contain omissions, truncation, broken references, or incorrect
                  release information in the final file.
                </SectionIntro>

                <div className="split-panel">
                  <div>
                    <h3>Gate 1: Linguistic QA</h3>
                    <ul className="compact-list">
                      <li>Accuracy, completeness, and approved terminology</li>
                      <li>Warnings, precautions, contraindications, and procedural meaning</li>
                      <li>Device names, numbers, units, ranges, and references</li>
                      <li>Language appropriate to the intended user</li>
                    </ul>
                  </div>
                  <div>
                    <h3>Gate 2: Visual and Functional QA</h3>
                    <ul className="compact-list">
                      <li>Clipping, overflow, fonts, headings, lists, tables, and callouts</li>
                      <li>Graphics, captions, page references, links, bookmarks, and QR codes</li>
                      <li>Right-to-left display, print size, screen behavior, and accessibility</li>
                      <li>Association of safety information with the relevant action</li>
                    </ul>
                  </div>
                </div>

                <Callout label="Release Gate" title="Gate 3: Confirm the Exact File Being Released" tone="light">
                  <p>
                    Verify the product, model, source revision, target revision, language, market, software version,
                    approvals, reviewer-comment resolution, file name, output format, archive location, and control of
                    superseded versions.
                  </p>
                </Callout>

                <div className="checklist-shell">
                  <div className="checklist-header">
                    <div>
                      <p className="eyebrow">Practical Tool</p>
                      <h3>Final IFU Release Checklist</h3>
                    </div>
                    <p>Use this checklist immediately before approving a translated IFU for distribution.</p>
                  </div>
                  <div className="checklist-grid">
                    {qaGroups.map((group) => (
                      <ChecklistGroup key={group.title} title={group.title} items={group.items} />
                    ))}
                  </div>
                </div>
              </section>

              <section id="common-failures" className="article-section">
                <h2>11. Avoid Common IFU Translation Failures</h2>
                <SectionIntro>
                  Many multilingual defects originate in planning, review, layout, or release control rather than in
                  sentence-level translation. Use the failure patterns below as a prelaunch diagnostic.
                </SectionIntro>
                <div className="failure-list">
                  {failures.map((item, index) => (
                    <div className="failure-row" key={item.title}>
                      <span className="failure-marker" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                      <div>
                        <h3>{item.title}</h3>
                        <p><strong>Risk:</strong> {item.risk}</p>
                        <p><strong>Prevention:</strong> {item.prevention}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="provider-evaluation" className="article-section">
                <h2>12. Evaluate an IFU Translation Provider</h2>
                <SectionIntro>
                  Evaluate the provider’s ability to support the complete controlled workflow—not only its word rate
                  or the number of languages it offers.
                </SectionIntro>
                <div className="provider-grid">
                  {providerAreas.map((area) => (
                    <div className="provider-area" key={area.title}>
                      <h3>{area.title}</h3>
                      <ul className="compact-list">
                        {area.items.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>

                <Callout label="Supplier Qualification" title="Certifications Support Evaluation, but Workflow Still Matters" tone="blush">
                  <p>
                    ISO 13485 can support supplier evaluation by demonstrating a medical-device quality-management
                    framework. It should be considered together with the provider’s actual personnel, terminology,
                    review, document control, publishing, security, corrective-action, and release processes.
                  </p>
                </Callout>
                <EditorialLink href={STEPES_LINKS.ifuServices}>
                  Explore Professional IFU Translation Services
                </EditorialLink>
              </section>

              <section id="program-launch" className="article-section">
                <h2>13. Plan and Launch the Program</h2>
                <SectionIntro>
                  A representative pilot can validate terminology, reviewer responsibilities, publishing, and release
                  controls before the workflow expands across a full device portfolio.
                </SectionIntro>

                <div className="split-panel">
                  <div>
                    <h3>Before Kickoff</h3>
                    <ul className="compact-list">
                      <li>Confirm markets, languages, product, source revision, users, and delivery formats.</li>
                      <li>Inventory editable files, graphics, software references, and prior translations.</li>
                      <li>Identify terminology owners, reviewers, approvers, and decision rights.</li>
                      <li>Establish security, access, file naming, change control, and release requirements.</li>
                    </ul>
                  </div>
                  <div>
                    <h3>During the Pilot</h3>
                    <ul className="compact-list">
                      <li>Select representative safety, operating, software, table, graphic, and layout content.</li>
                      <li>Evaluate translation quality, terminology, questions, review efficiency, and DTP.</li>
                      <li>Test final-format QA, revision traceability, delivery reporting, and approval evidence.</li>
                      <li>Resolve the pilot findings before scaling to additional languages and products.</li>
                    </ul>
                  </div>
                </div>

                <h3>Before Scaling</h3>
                <ul className="prose-list">
                  <li>Approve the terminology and validate translation memory.</li>
                  <li>Document reviewer instructions and the content risk-routing matrix.</li>
                  <li>Confirm templates, release records, archival processes, and quality metrics.</li>
                  <li>Define how urgent safety-related updates will be routed and synchronized.</li>
                  <li>Schedule periodic terminology, workflow, supplier, and performance reviews.</li>
                </ul>

                <h3>Measure the Program, Not Only the Project</h3>
                <p>
                  Useful indicators include terminology compliance, first-pass acceptance, reviewer change categories,
                  reopened defects, final-format defect rates, reuse of approved content, source questions, safety-update turnaround, revision alignment across languages, and approval timeliness. Use the data to
                  improve the source, terminology, workflow, technology, publishing, and governance model.
                </p>
              </section>

              <section id="faq" className="article-section">
                <h2>14. Frequently Asked Questions</h2>
                <SectionIntro>
                  These answers address common planning questions from regulatory, quality, technical documentation,
                  localization, and product teams.
                </SectionIntro>
                <div className="faq-panel">
                  {faqs.map((item, index) => (
                    <FAQItem
                      key={item.question}
                      item={item}
                      index={index}
                      open={openFaq === index}
                      onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
                    />
                  ))}
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      <section className="sources-section" aria-labelledby="sources-title">
        <div className="shell sources-wrap">
          <h2 id="sources-title">Primary Standards and Regulatory Resources</h2>
          <p className="section-intro">
            Regulatory and standards information changes over time. Confirm the current edition, consolidated text,
            national requirements, and device-specific applicability before making release decisions.
          </p>
          <ul className="sources-list">
            {sources.map((source) => (
              <li key={source.title}>
                <div>
                  <p className="source-title">{source.title}</p>
                  <p className="source-org">{source.organization}</p>
                </div>
                <EditorialLink href={source.href} external>
                  {source.linkLabel}
                </EditorialLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="conclusion-section" aria-labelledby="conclusion-title">
        <div className="shell conclusion-wrap">
          <p className="eyebrow">Practical Next Step</p>
          <h2 id="conclusion-title">Connect Language Quality With Document and Release Control</h2>
          <p>
            A dependable IFU translation program aligns market requirements, intended-user comprehension, approved
            terminology, risk-based review, device-software consistency, multilingual publishing, revision control,
            and final release assurance. Start with a representative source package and use the framework in this
            guide to define responsibilities before the first multilingual release.
          </p>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-title">
        <div className="shell">
          <div className="related-head">
            <div>
              <p className="eyebrow">Continue Planning</p>
              <h2 id="related-title">Related Medical Device Translation Resources</h2>
            </div>
            <p>
              Continue with specialized guidance for electronic IFUs, device software, AI-assisted translation, and
              complete medical-device content programs.
            </p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <p className="related-category">{resource.category}</p>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <EditorialLink href={resource.href}>{resource.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2 id="final-cta-title">Build a More Controlled Multilingual IFU Workflow</h2>
              <p>
                Stepes helps medical device companies translate and manage IFUs, labeling, device software,
                technical documentation, and related content across global markets with professional linguists,
                terminology management, translation memory, AI-assisted automation, independent review,
                multilingual publishing, and final-format QA.
              </p>
            </div>
            <div className="cta-actions">
              <a className="button button-primary" href={STEPES_LINKS.contact}>
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href={STEPES_LINKS.medicalDeviceServices}>
                <span>Explore Medical Device Services</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
