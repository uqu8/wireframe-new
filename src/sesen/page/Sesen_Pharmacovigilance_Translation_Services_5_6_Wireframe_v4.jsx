import React, { useState } from "react";

const lifecycleSteps = [
  {
    number: "01",
    title: "Case Intake & Processing",
    copy:
      "Accurate multilingual safety reporting begins with the information entering the case. Sesen translates source safety content used to capture and process adverse events while preserving clinical meaning and terminology from the beginning of the workflow.",
    items: [
      "Adverse event source information",
      "Patient and reporter information",
      "Medical histories and concomitant medications",
      "Laboratory findings and treatment details",
      "Safety case narratives",
      "Follow-up case documentation",
    ],
  },
  {
    number: "02",
    title: "Expedited Safety Reporting",
    copy:
      "Support time-sensitive safety reporting without removing the linguistic and quality controls that protect critical meaning. Workflows can be structured around short reporting timelines while retaining specialized translation, review, and focused QA.",
    items: [
      "AE and SAE reports",
      "Individual Case Safety Reports (ICSRs)",
      "SUSAR reports and communications",
      "CIOMS forms",
      "Case narratives and follow-up reports",
      "Expedited safety communications",
    ],
  },
  {
    number: "03",
    title: "Aggregate & Periodic Reporting",
    copy:
      "Maintain consistency across recurring global safety reports and reporting cycles. Translation memories, approved references, product terminology, and previous translations can help teams manage updates while keeping new content aligned with established language.",
    items: [
      "DSURs",
      "PSURs and PBRERs",
      "Annual and periodic safety reports",
      "Safety summaries",
      "Line listings and cumulative safety information",
      "Benefit-risk sections, tables, and appendices",
    ],
  },
  {
    number: "04",
    title: "Signal & Risk Management",
    copy:
      "Keep multilingual signal and risk content precise as safety knowledge evolves. Terminology management helps maintain alignment among safety concepts, product terminology, supporting documents, and previously approved language.",
    items: [
      "Risk Management Plans (RMPs)",
      "Signal evaluation content",
      "Risk assessments",
      "Benefit-risk documentation",
      "Risk-minimization materials",
      "Safety review documentation",
    ],
  },
  {
    number: "05",
    title: "Post-Market Surveillance",
    copy:
      "Support ongoing multilingual safety surveillance throughout the commercial product lifecycle as new cases, follow-up information, analyses, product safety updates, and revised risk information emerge across global markets.",
    items: [
      "Post-marketing adverse event materials",
      "Surveillance documentation",
      "Follow-up safety cases",
      "Product safety updates",
      "Safety monitoring materials",
      "Affiliate safety content",
    ],
  },
  {
    number: "06",
    title: "Safety Communication & Lifecycle Updates",
    copy:
      "Deliver consistent safety messages to regulators, healthcare professionals, patients, investigators, affiliates, and global teams while maintaining alignment with established medical, product, and safety terminology.",
    items: [
      "Safety letters",
      "Healthcare professional communications",
      "Investigator safety communications",
      "Patient-facing safety information",
      "Regulatory safety correspondence",
      "Updated risk and product safety information",
    ],
  },
];

const documentGroups = [
  {
    title: "Case Intake & Safety Reporting",
    items: [
      ["Adverse Event Reports", "Adverse event reports and supporting source information for global safety programs."],
      ["Serious Adverse Event Reports", "Time-sensitive SAE content requiring accurate medical terminology and careful handling of critical details."],
      ["Individual Case Safety Reports", "ICSR content, narratives, follow-up information, and supporting case documentation."],
      ["SUSAR Reports & Communications", "Suspected unexpected serious adverse reaction content and associated safety communications."],
      ["CIOMS Forms", "Narrative and supporting information contained in CIOMS safety-reporting documentation."],
      ["Safety Narratives", "Patient and case narratives with chronology, medical meaning, treatment information, and safety details preserved."],
    ],
  },
  {
    title: "Aggregate Safety & Periodic Reports",
    items: [
      ["Development Safety Update Reports", "DSUR content supporting periodic safety reporting during clinical development."],
      ["Periodic Safety Update Reports", "PSUR content, supporting sections, tables, summaries, and updated safety information."],
      ["Periodic Benefit-Risk Evaluation Reports", "PBRER content across recurring reporting cycles, including safety and benefit-risk information."],
      ["Annual & Periodic Safety Reports", "Recurring safety reports and associated updates across development and commercial programs."],
      ["Safety Summaries & Line Listings", "Structured safety summaries, line listings, tables, narrative, and supporting documentation."],
    ],
  },
  {
    title: "Risk Management & Post-Market Safety",
    items: [
      ["Risk Management Plans", "RMP content related to safety concerns, pharmacovigilance activities, risk minimization, and evolving product risk information."],
      ["Risk-Minimization Materials", "Materials designed to communicate or support implementation of product risk-minimization measures."],
      ["Signal-Management Content", "Signal-related documentation, assessments, summaries, and associated communication."],
      ["Post-Market Surveillance Materials", "Ongoing multilingual support for safety documentation generated throughout commercial product use."],
      ["Safety Data Exchange & Program Documentation", "Operational documentation supporting collaboration among sponsors, partners, affiliates, CROs, and safety organizations."],
    ],
  },
  {
    title: "Safety Communications & Operational Content",
    items: [
      ["Healthcare Professional Safety Communications", "Clear safety information intended for physicians and other healthcare professionals."],
      ["Investigator Communications", "Safety notifications, updates, and supporting materials used within clinical research programs."],
      ["Patient Safety Information", "Audience-appropriate safety content intended to help patients understand important product or treatment information."],
      ["Regulatory Safety Correspondence", "Safety-related communication with health authorities and other regulatory stakeholders."],
      ["Affiliate & Global Team Communications", "Consistent communication across central safety teams, regional organizations, affiliates, partners, and vendors."],
    ],
  },
];

const documentServiceLinks = {
  "Adverse Event Reports": "https://www.sesen.com/adverse-event-translation-services/",
  "Serious Adverse Event Reports": "https://www.sesen.com/serious-adverse-event-translation-services/",
  "Individual Case Safety Reports": "https://www.sesen.com/icsr-translation-services/",
  "SUSAR Reports & Communications": "https://www.sesen.com/susar-translation-services/",
  "Safety Narratives": "https://www.sesen.com/safety-narrative-translation-services/",
  "Development Safety Update Reports": "https://www.sesen.com/dsur-translation-services/",
  "Periodic Safety Update Reports": "https://www.sesen.com/psur-pbrer-translation-services/",
  "Periodic Benefit-Risk Evaluation Reports": "https://www.sesen.com/psur-pbrer-translation-services/",
  "Risk Management Plans": "https://www.sesen.com/risk-management-plan-translation-services/",
};

const terminologyItems = [
  "MedDRA-related terminology",
  "Adverse events and medical conditions",
  "Drug, product, and active ingredient names",
  "Indications and medical histories",
  "Concomitant medications",
  "Laboratory tests and results",
  "Routes of administration",
  "Dosages and units",
  "Seriousness, severity, and expectedness terminology",
  "Causality language",
  "Product-specific safety concepts",
  "Sponsor-preferred terminology",
  "Previously approved translations",
];

const specializedServices = [
  ["Adverse Event Translation Services", "https://www.sesen.com/adverse-event-translation-services/", "Adverse event reports, narratives, supporting source documents, and follow-up content."],
  ["Serious Adverse Event Translation Services", "https://www.sesen.com/serious-adverse-event-translation-services/", "SAE translation for time-sensitive clinical and post-market safety workflows."],
  ["ICSR Translation Services", "https://www.sesen.com/icsr-translation-services/", "Individual Case Safety Reports, case narratives, supporting content, and follow-up information."],
  ["SUSAR Translation Services", "https://www.sesen.com/susar-translation-services/", "SUSAR reports, notifications, and supporting communication for global clinical safety workflows."],
  ["DSUR Translation Services", "https://www.sesen.com/dsur-translation-services/", "Development Safety Update Reports and supporting aggregate safety documentation."],
  ["PSUR & PBRER Translation Services", "https://www.sesen.com/psur-pbrer-translation-services/", "Recurring periodic safety and benefit-risk reports, updated sections, tables, and summaries."],
  ["Risk Management Plan Translation Services", "https://www.sesen.com/risk-management-plan-translation-services/", "RMPs and associated risk, pharmacovigilance, and risk-minimization content."],
  ["Safety Narrative Translation Services", "https://www.sesen.com/safety-narrative-translation-services/", "Patient and case narratives with close attention to chronology, medical meaning, and established safety terminology."],
];

const relatedServices = [
  ["Clinical Trial Translation Services", "https://www.sesen.com/clinical-trial-translation-services/", "Protocols, informed consent forms, site materials, patient content, safety documentation, and clinical reports."],
  ["Regulatory Translation Services", "https://www.sesen.com/regulatory-translation-services/", "Regulatory submissions, health-authority communication, product information, and lifecycle updates."],
  ["Pharmaceutical Translation Services", "https://www.sesen.com/pharmaceutical-translation-services/", "Specialized translation across clinical development, regulatory affairs, safety, labeling, medical affairs, and commercialization."],
  ["Labeling Translation Services", "https://www.sesen.com/labeling-translation-services/", "Controlled multilingual support for product information, safety updates, patient information, packaging, and lifecycle changes."],
  ["Regulatory Submission Translation Services", "https://www.sesen.com/regulatory-submission-translation-services/", "Submission packages, CTD/eCTD content, supporting documentation, and health-authority interactions."],
  ["Medical & Scientific Translation Services", "https://www.sesen.com/medical-scientific-translation-services/", "Medical affairs, scientific communication, publications, research materials, and technical life sciences content."],
];

const faqItems = [
  [
    "What pharmacovigilance documents does Sesen translate?",
    "Sesen translates a broad range of drug-safety content, including adverse event reports, serious adverse event reports, ICSRs, SUSARs, CIOMS forms, safety narratives, DSURs, PSURs, PBRERs, Risk Management Plans, signal and risk-management documentation, post-market surveillance content, safety communications, line listings, supporting tables, and related pharmacovigilance materials. We support both individual documents and ongoing multilingual safety programs.",
  ],
  [
    "Can Sesen support urgent AE, SAE, ICSR, and SUSAR translations?",
    "Yes. Sesen supports expedited pharmacovigilance translation workflows for time-sensitive safety content. Project timing depends on document volume, language combination, file condition, required review, and the specific reporting timeline. For urgent projects, our team can evaluate the files and establish a production plan that prioritizes rapid intake, specialized translation, review, targeted QA, and controlled delivery.",
  ],
  [
    "Does Sesen translate DSURs, PSURs, PBRERs, and Risk Management Plans?",
    "Yes. Sesen provides translation for aggregate and recurring pharmacovigilance reports including DSURs, PSURs, PBRERs, and Risk Management Plans. For recurring reports, previous translations, translation memories, glossaries, product terminology, and approved reference content can be incorporated into the workflow to improve continuity between reporting cycles.",
  ],
  [
    "What is the difference between urgent case translation and recurring safety-report translation?",
    "Urgent case translation is typically driven by short operational or reporting timelines and may involve AE reports, SAE reports, ICSRs, SUSARs, narratives, and follow-up information. Recurring reporting involves larger documents such as DSURs, PSURs, PBRERs, and RMP updates that may build on substantial previously translated content. Sesen can configure different workflows for these operating models while maintaining consistent terminology and quality controls across the overall safety program.",
  ],
  [
    "How does Sesen maintain pharmacovigilance terminology consistency?",
    "Sesen can use client-approved glossaries, translation memories, product terminology, previous translations, reference documentation, and language conventions throughout a pharmacovigilance program. This helps maintain consistency for medical conditions, drug names, adverse-event terminology, dosages, routes of administration, safety concepts, product terminology, and recurring language across cases and reports.",
  ],
  [
    "Does Sesen work with MedDRA terminology?",
    "Sesen can work with MedDRA-related terminology and client-provided MedDRA references as part of the translation process. Our role is linguistic: we help preserve established terminology consistently across languages and documents. MedDRA coding, medical assessment, case evaluation, and pharmacovigilance decisions remain the responsibility of the sponsor or its designated safety professionals.",
  ],
  [
    "How does Sesen quality-check critical safety information?",
    "Pharmacovigilance projects can combine professional translation, independent linguistic review, terminology management, translation-memory controls, and technology-supported QA. Checks can focus on areas such as names, numbers, dates, dosages, units, terminology, completeness, untranslated content, repeated language, and formatting while qualified linguists review clinical meaning and context.",
  ],
  [
    "Can Sesen support recurring global pharmacovigilance programs?",
    "Yes. Sesen can support ongoing programs involving multiple languages, recurring case activity, periodic safety reports, affiliate communication, terminology maintenance, translation-memory management, and repeated reporting cycles. Shared linguistic assets can help improve consistency and efficiency as the program develops.",
  ],
  [
    "Can Sesen work with safety database exports and structured files?",
    "Yes. Sesen can work with a variety of structured and unstructured safety files, including Word, Excel, PDF, XML, CSV, line listings, CIOMS forms, safety-database exports, tables, and supporting reference materials. The appropriate production workflow depends on the source format and required final deliverable.",
  ],
  [
    "What languages does Sesen support for pharmacovigilance translation?",
    "Sesen supports translation and localization across more than 150 languages, enabling pharmaceutical, biotechnology, CRO, and drug-safety teams to manage multilingual content across major global markets. Contact Team Sesen with your target languages, content type, volume, and timeline so we can recommend the appropriate workflow.",
  ],
  [
    "Does Sesen provide pharmacovigilance or regulatory consulting?",
    "Sesen specializes in the multilingual translation and localization layer of global pharmacovigilance programs. We do not replace the sponsor's pharmacovigilance, medical, or regulatory decision-making. Medical assessment, causality evaluation, case adjudication, coding decisions, regulatory strategy, and formal safety decisions remain with the sponsor and its designated professionals. Our role is to help ensure that the language carrying that information moves accurately and consistently across languages.",
  ],
];

function Icon({ name, size = 22 }) {
  const common = {
    className: "sesen-pv-icon-svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.5v5l3.2 2" />
        </svg>
      );
    case "repeat":
      return (
        <svg {...common}>
          <path d="M5.2 8.4A7.6 7.6 0 0 1 18 6.5l1.5 1.9" />
          <path d="M19.5 4.8v3.8h-3.8" />
          <path d="M18.8 15.6A7.6 7.6 0 0 1 6 17.5l-1.5-1.9" />
          <path d="M4.5 19.2v-3.8h3.8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m8.3 12.2 2.4 2.4 5.1-5.2" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.1 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.6 8.6 12s1.2 6.2 3.4 8.5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.2 19 6v5.4c0 4.3-2.6 7.5-7 9.4-4.4-1.9-7-5.1-7-9.4V6l7-2.8Z" />
          <path d="m8.8 12 2 2 4.4-4.5" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M7 3.5h7l3 3V20.5H7z" />
          <path d="M14 3.5v3h3M9.5 11h5M9.5 14h5M9.5 17h3.2" />
        </svg>
      );
    case "wordFile":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h7.4l3.6 3.6v13.4h-11z" />
          <path d="M13.9 3.5v3.7h3.6" />
          <path d="M9 11h6M9 14h6M9 17h4.2" />
        </svg>
      );
    case "spreadsheet":
      return (
        <svg {...common}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
          <path d="M4.5 9.5h15M9.5 4.5v15M14.5 9.5v10M9.5 14.5h10" />
        </svg>
      );
    case "presentation":
      return (
        <svg {...common}>
          <rect x="4" y="4.5" width="16" height="11" rx="2" />
          <path d="M8 19.5 12 15.5l4 4M8 9h3.5M8 12h2" />
          <circle cx="15.8" cy="9.2" r="2.2" />
        </svg>
      );
    case "pdfFile":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h7.4l3.6 3.6v13.4h-11z" />
          <path d="M13.9 3.5v3.7h3.6" />
          <path d="M8.8 12.2h6.4M8.8 15.2h4.8" />
          <path d="M8.8 9.2h1.6M12 9.2h1.6M15.2 9.2h.1" />
        </svg>
      );
    case "xmlFile":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h7.4l3.6 3.6v13.4h-11z" />
          <path d="M13.9 3.5v3.7h3.6" />
          <path d="m11 11-2 2 2 2M14 11l2 2-2 2" />
        </svg>
      );
    case "csvFile":
      return (
        <svg {...common}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
          <path d="M4.5 9.5h15M9.5 4.5v15M14.5 9.5v10M9.5 14.5h10" />
          <circle cx="7" cy="7" r=".65" fill="currentColor" stroke="none" />
          <circle cx="12" cy="12" r=".65" fill="currentColor" stroke="none" />
          <circle cx="17" cy="17" r=".65" fill="currentColor" stroke="none" />
        </svg>
      );
    case "databaseExport":
      return (
        <svg {...common}>
          <ellipse cx="9.2" cy="6" rx="4.7" ry="2.1" />
          <path d="M4.5 6v4c0 1.2 2.1 2.1 4.7 2.1 1 0 1.9-.1 2.6-.4M4.5 10v4c0 1.2 2.1 2.1 4.7 2.1.8 0 1.6-.1 2.2-.3" />
          <path d="M13 14.8h6.5M16.8 12.1l2.7 2.7-2.7 2.7" />
        </svg>
      );
    case "form":
      return (
        <svg {...common}>
          <rect x="6" y="5" width="12" height="15" rx="2" />
          <path d="M9 3.5h6v3H9zM9 10h1.5M12.5 10H15M9 13.5h1.5M12.5 13.5H15M9 17h6" />
        </svg>
      );
    case "lineList":
      return (
        <svg {...common}>
          <path d="M6 6.5h12M6 11.8h12M6 17.1h12" />
          <circle cx="4" cy="6.5" r=".75" fill="currentColor" stroke="none" />
          <circle cx="4" cy="11.8" r=".75" fill="currentColor" stroke="none" />
          <circle cx="4" cy="17.1" r=".75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "structuredData":
      return (
        <svg {...common}>
          <rect x="4.5" y="4.5" width="15" height="15" rx="2" />
          <path d="M4.5 10h15M10 4.5v15M14.8 10v9.5" />
          <circle cx="7.2" cy="7.2" r=".7" fill="currentColor" stroke="none" />
          <circle cx="12.4" cy="13" r=".7" fill="currentColor" stroke="none" />
          <circle cx="17.1" cy="16.8" r=".7" fill="currentColor" stroke="none" />
        </svg>
      );
    case "revisions":
      return (
        <svg {...common}>
          <path d="M5.5 3.5h8l3.5 3.5v6.2M13.5 3.5V7H17" />
          <path d="M5.5 3.5v17h6" />
          <path d="m13.2 18.8 5.5-5.5 2 2-5.5 5.5-2.7.7z" />
          <path d="M8.3 11h5M8.3 14h3" />
        </svg>
      );
    case "narrative":
      return (
        <svg {...common}>
          <path d="M6.5 3.5h7.4l3.6 3.6v13.4h-11z" />
          <path d="M13.9 3.5v3.7h3.6M9 11h6M9 14h6M9 17h4.5" />
          <path d="M4 9.5v7" />
        </svg>
      );
    case "affiliate":
      return (
        <svg {...common}>
          <path d="M5.5 5.5h5l1.5 2h6.5v11h-13z" />
          <circle cx="16.5" cy="15.2" r="3.1" fill="#FCFDFF" />
          <path d="M13.4 15.2h6.2M16.5 12.1c.9.9 1.4 1.9 1.4 3.1s-.5 2.2-1.4 3.1M16.5 12.1c-.9.9-1.4 1.9-1.4 3.1s.5 2.2 1.4 3.1" />
        </svg>
      );
    case "references":
      return (
        <svg {...common}>
          <path d="M8 5h10v15H8z" />
          <path d="M5 3.5h10M5 3.5v13.8M5 17.3h3" />
          <path d="M11 9h4M11 12h4M11 15h2.5" />
        </svg>
      );
    case "graphics":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="m6.5 16 3.7-3.7 2.6 2.6 2-2 2.7 3.1" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="9" r="2.8" />
          <path d="M4.6 18c.5-3 2-4.5 4.4-4.5s3.9 1.5 4.4 4.5" />
          <path d="M14.5 7.1a2.7 2.7 0 0 1 0 5.3M15.2 14.3c2.3.2 3.6 1.4 4.2 3.7" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" />
        </svg>
      );
    case "language":
      return (
        <svg {...common}>
          <path d="M4 5h9M8.5 3.5v1.7M5.8 8.2c1.5 2.6 3.6 4.4 6.2 5.4M11.4 5c-.5 3.1-2.4 5.9-5.8 8.2" />
          <path d="m14 19 3.2-8 3.2 8M15.1 16.2h4.2" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}

function HeroSafetyArt() {
  return (
    <svg
      className="sesen-pv-hero-art-svg"
      viewBox="0 0 560 500"
      role="img"
      aria-label="Illustration of safety information moving through a controlled multilingual workflow"
    >
      <defs>
        <linearGradient id="pv-soft-fill" x1="0" x2="1">
          <stop offset="0" stopColor="#F5F7FF" />
          <stop offset="1" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>
      <circle cx="284" cy="244" r="174" fill="url(#pv-soft-fill)" />
      <circle cx="284" cy="244" r="126" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <path d="M162 135c-46 25-74 66-74 109s28 84 74 109" fill="none" stroke="#B8C8EF" strokeWidth="2.2" strokeDasharray="6 8" />
      <path d="M405 135c46 25 74 66 74 109s-28 84-74 109" fill="none" stroke="#B8C8EF" strokeWidth="2.2" strokeDasharray="6 8" />

      <g transform="translate(220 152)">
        <rect width="128" height="170" rx="18" fill="#FFFFFF" stroke="#17264D" strokeWidth="2.4" />
        <path d="M86 0v38h42" fill="#EAF0FF" stroke="#17264D" strokeWidth="2.4" />
        <rect x="24" y="59" width="80" height="9" rx="4.5" fill="#4B6FD8" />
        <rect x="24" y="82" width="60" height="7" rx="3.5" fill="#A9B8D8" />
        <rect x="24" y="101" width="75" height="7" rx="3.5" fill="#C9D4E8" />
        <rect x="24" y="120" width="50" height="7" rx="3.5" fill="#C9D4E8" />
        <circle cx="95" cy="139" r="16" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2" />
        <path d="m88 139 5 5 10-11" fill="none" stroke="#3659BB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(84 194)">
        <rect width="88" height="96" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="44" cy="33" r="14" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
        <path d="M44 24v10l6 4" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="18" y="62" width="52" height="7" rx="3.5" fill="#A9B8D8" />
      </g>
      <path d="M172 242h46" fill="none" stroke="#4B6FD8" strokeWidth="2.8" strokeLinecap="round" />
      <path d="m208 234 10 8-10 8" fill="none" stroke="#4B6FD8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="translate(394 153)">
        <rect width="86" height="72" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M23 23h40M23 37h32M23 51h22" fill="none" stroke="#A9B8D8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="68" cy="16" r="8" fill="#4B6FD8" />
      </g>
      <g transform="translate(405 268)">
        <rect width="92" height="78" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="46" cy="31" r="17" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2" />
        <path d="M29 31h34M46 14c4.5 5 7 10.6 7 17s-2.5 12-7 17M46 14c-4.5 5-7 10.6-7 17s2.5 12 7 17" fill="none" stroke="#3659BB" strokeWidth="1.7" />
        <rect x="24" y="58" width="44" height="6" rx="3" fill="#A9B8D8" />
      </g>
      <path d="M349 213h43" fill="none" stroke="#4B6FD8" strokeWidth="2.8" strokeLinecap="round" />
      <path d="m382 205 10 8-10 8" fill="none" stroke="#4B6FD8" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M349 278c30 8 43 18 56 35" fill="none" stroke="#4B6FD8" strokeWidth="2.8" strokeLinecap="round" />

      <g transform="translate(194 359)">
        <rect width="180" height="55" rx="27.5" fill="#17264D" />
        <circle cx="32" cy="27.5" r="12" fill="#4B6FD8" />
        <path d="m27 27.5 3.5 3.5 7-7" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="54" y="18" width="98" height="7" rx="3.5" fill="#FFFFFF" opacity="0.92" />
        <rect x="54" y="32" width="75" height="6" rx="3" fill="#C8D6FF" opacity="0.85" />
      </g>
    </svg>
  );
}

function SectionHeading({ eyebrow = "", title, intro = "", center = false, className = "" }) {
  return (
    <div className={`sesen-pv-section-heading ${center ? "is-centered" : ""} ${className}`.trim()}>
      {eyebrow ? <div className="sesen-pv-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function SesenPharmacovigilanceTranslationServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="sesen-pv-page">
      <style>{`
        .sesen-pv-page {
          --sesen-pv-blue: #4B6FD8;
          --sesen-pv-blue-dark: #3659BB;
          --sesen-pv-deep-blue: #253F8F;
          --sesen-pv-soft-blue: #EAF0FF;
          --sesen-pv-pale-blue: #F5F7FF;
          --sesen-pv-navy: #17264D;
          --sesen-pv-ink: #111827;
          --sesen-pv-body: #46546D;
          --sesen-pv-muted: #68758B;
          --sesen-pv-border: #DDE4F2;
          --sesen-pv-divider: #E9EEF8;
          --sesen-pv-soft: #F7F9FD;
          --sesen-pv-white: #FFFFFF;
          --sesen-pv-light-accent: #C8D6FF;
          color: var(--sesen-pv-body);
          background: var(--sesen-pv-white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .sesen-pv-page *,
        .sesen-pv-page *::before,
        .sesen-pv-page *::after { box-sizing: border-box; }

        .sesen-pv-page .sesen-pv-icon-svg {
          display: block;
          margin: 0 !important;
          padding: 0 !important;
          position: static !important;
          transform: none !important;
          vertical-align: middle;
          flex: 0 0 auto;
        }

        .sesen-pv-page a { color: inherit; }

        .sesen-pv-page .sesen-pv-container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .sesen-pv-page .sesen-pv-section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .sesen-pv-page .sesen-pv-section.is-dense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .sesen-pv-page h1,
        .sesen-pv-page h2,
        .sesen-pv-page h3,
        .sesen-pv-page h4 {
          margin: 0;
          color: var(--sesen-pv-navy);
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          font-weight: 500;
        }

        .sesen-pv-page h1 {
          max-width: 690px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-pv-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-pv-page h3 {
          font-size: 24px;
          line-height: 1.3;
        }

        .sesen-pv-page h4 {
          font-size: 19px;
          line-height: 1.35;
        }

        .sesen-pv-page p { margin: 0; }

        .sesen-pv-page h1,
        .sesen-pv-page h2,
        .sesen-pv-page h3,
        .sesen-pv-page h4,
        .sesen-pv-page p,
        .sesen-pv-page li,
        .sesen-pv-page a,
        .sesen-pv-page span { overflow-wrap: break-word; }

        .sesen-pv-page .sesen-pv-eyebrow {
          margin-bottom: 14px;
          color: var(--sesen-pv-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sesen-pv-page .sesen-pv-section-heading {
          max-width: 820px;
          margin-bottom: 52px;
        }

        .sesen-pv-page .sesen-pv-section-heading.is-centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-pv-page .sesen-pv-section-heading p {
          max-width: 790px;
          margin-top: 18px;
          color: var(--sesen-pv-body);
          font-size: 18px;
          line-height: 1.7;
        }

        .sesen-pv-page .sesen-pv-section-heading.is-centered p {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-pv-page .sesen-pv-button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 32px;
        }

        .sesen-pv-page .sesen-pv-btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.035em;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .sesen-pv-page .sesen-pv-btn:hover { transform: translateY(-1px); }

        .sesen-pv-page .sesen-pv-btn:focus-visible,
        .sesen-pv-page .sesen-pv-editorial-link:focus-visible,
        .sesen-pv-page .sesen-pv-faq-button:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.34);
          outline-offset: 3px;
        }

        .sesen-pv-page .sesen-pv-btn.is-primary {
          background: var(--sesen-pv-blue);
          color: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-btn.is-primary:hover {
          background: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-btn.is-secondary {
          border-color: var(--sesen-pv-border);
          background: var(--sesen-pv-white);
          color: var(--sesen-pv-ink);
        }

        .sesen-pv-page .sesen-pv-btn.is-secondary:hover {
          border-color: #C9D5EF;
          background: var(--sesen-pv-pale-blue);
        }

        .sesen-pv-page .sesen-pv-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--sesen-pv-blue-dark);
          font-weight: 600;
          line-height: 1.45;
          text-decoration: none;
        }

        .sesen-pv-page .sesen-pv-editorial-link:hover { text-decoration: underline; }

        .sesen-pv-page .sesen-pv-editorial-link .arrow {
          transition: transform 160ms ease;
        }

        .sesen-pv-page .sesen-pv-editorial-link:hover .arrow { transform: translateX(3px); }

        /* HERO */
        .sesen-pv-page .sesen-pv-hero {
          position: relative;
          padding-top: 98px;
          padding-bottom: 94px;
          background:
            radial-gradient(circle at 88% 18%, rgba(234,240,255,0.9) 0, rgba(234,240,255,0) 30%),
            var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.13fr) minmax(390px, 0.87fr);
          gap: 58px;
          align-items: center;
        }

        .sesen-pv-page .sesen-pv-hero-copy {
          max-width: 735px;
        }

        .sesen-pv-page .sesen-pv-hero-lead {
          max-width: 700px;
          margin-top: 24px;
          color: #293954;
          font-size: 19px;
          line-height: 1.68;
        }

        .sesen-pv-page .sesen-pv-hero-scope {
          max-width: 700px;
          margin-top: 12px;
          color: var(--sesen-pv-body);
          font-size: 17px;
          line-height: 1.68;
        }

        .sesen-pv-page .sesen-pv-hero-art {
          min-width: 0;
        }

        .sesen-pv-page .sesen-pv-hero-art-svg {
          display: block;
          width: 100%;
          max-width: 520px;
          height: auto;
          margin-left: auto;
        }

        /* TRUST BAND */
        .sesen-pv-page .sesen-pv-trust-band {
          border-top: 1px solid var(--sesen-pv-divider);
          border-bottom: 1px solid var(--sesen-pv-divider);
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
        }

        .sesen-pv-page .sesen-pv-trust-item {
          display: flex;
          min-height: 126px;
          align-items: flex-start;
          gap: 16px;
          padding: 28px 24px 26px;
        }

        .sesen-pv-page .sesen-pv-trust-item + .sesen-pv-trust-item {
          border-left: 1px solid var(--sesen-pv-divider);
        }

        .sesen-pv-page .sesen-pv-trust-icon {
          display: grid;
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          place-items: center;
          margin-top: 1px;
          border-radius: 12px;
          background: var(--sesen-pv-soft-blue);
          color: var(--sesen-pv-blue-dark);
          line-height: 0;
        }

        .sesen-pv-page .sesen-pv-trust-icon > .sesen-pv-icon-svg {
          width: 22px !important;
          height: 22px !important;
          justify-self: center;
          align-self: center;
          inset: auto !important;
          top: auto !important;
          right: auto !important;
          bottom: auto !important;
          left: auto !important;
        }

        .sesen-pv-page .sesen-pv-trust-copy {
          min-width: 0;
          padding-top: 0;
        }

        .sesen-pv-page .sesen-pv-trust-item strong {
          display: block;
          color: var(--sesen-pv-navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.48;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .sesen-pv-page .sesen-pv-trust-copy > span {
          display: block;
          margin-top: 5px;
          color: var(--sesen-pv-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        /* CORE CHALLENGE */
        .sesen-pv-page .sesen-pv-challenge {
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-challenge-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 72px;
          align-items: start;
        }

        .sesen-pv-page .sesen-pv-challenge-copy p {
          max-width: 610px;
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.75;
        }

        .sesen-pv-page .sesen-pv-value-stack {
          border-top: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-value-row {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-value-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: var(--sesen-pv-soft-blue);
          color: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-value-row h3 { font-size: 21px; }

        .sesen-pv-page .sesen-pv-value-row p {
          margin-top: 7px;
          font-size: 16px;
          line-height: 1.65;
        }

        /* LIFECYCLE */
        .sesen-pv-page .sesen-pv-lifecycle {
          background: var(--sesen-pv-pale-blue);
        }

        .sesen-pv-page .sesen-pv-lifecycle-path {
          position: relative;
          display: grid;
          gap: 0;
        }

        .sesen-pv-page .sesen-pv-lifecycle-path::before {
          content: "";
          position: absolute;
          top: 26px;
          bottom: 26px;
          left: 35px;
          width: 1px;
          background: #C8D4EE;
        }

        .sesen-pv-page .sesen-pv-lifecycle-step {
          position: relative;
          display: grid;
          grid-template-columns: 72px minmax(0, 0.82fr) minmax(320px, 0.7fr);
          gap: 34px;
          padding: 31px 0;
          border-bottom: 1px solid #D9E2F5;
        }

        .sesen-pv-page .sesen-pv-lifecycle-step:last-child { border-bottom: 0; }

        .sesen-pv-page .sesen-pv-step-number {
          position: relative;
          z-index: 1;
          display: flex;
          width: 70px;
          height: 54px;
          align-items: center;
          justify-content: center;
          border: 1px solid #CEDAF3;
          border-radius: 999px;
          background: var(--sesen-pv-white);
          color: var(--sesen-pv-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
        }

        .sesen-pv-page .sesen-pv-step-copy h3 { font-size: 25px; }

        .sesen-pv-page .sesen-pv-step-copy p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.7;
        }

        .sesen-pv-page .sesen-pv-step-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          align-content: start;
          gap: 9px 18px;
          margin: 4px 0 0;
          padding: 0;
          list-style: none;
        }

        .sesen-pv-page .sesen-pv-step-list li {
          position: relative;
          padding-left: 16px;
          color: #56647A;
          font-size: 16px;
          line-height: 1.5;
        }

        .sesen-pv-page .sesen-pv-step-list li::before {
          content: "";
          position: absolute;
          top: 0.68em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sesen-pv-blue);
        }

        /* DOCUMENT DIRECTORY */
        .sesen-pv-page .sesen-pv-documents { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-document-groups {
          border-top: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-document-group {
          display: grid;
          grid-template-columns: minmax(250px, 0.42fr) minmax(0, 1fr);
          gap: 48px;
          padding: 38px 0;
          border-bottom: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-document-group > h3 {
          max-width: 285px;
          font-size: 23px;
        }

        .sesen-pv-page .sesen-pv-document-items {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 30px 42px;
        }

        .sesen-pv-page .sesen-pv-document-item h4 { font-size: 18px; }

        .sesen-pv-page .sesen-pv-document-link {
          color: var(--sesen-pv-navy);
          text-decoration: none;
          transition: color 150ms ease;
        }

        .sesen-pv-page .sesen-pv-document-link:hover { color: var(--sesen-pv-blue-dark); }
        .sesen-pv-page .sesen-pv-document-link:focus-visible { outline: 3px solid rgba(75,111,216,0.32); outline-offset: 3px; border-radius: 3px; }

        .sesen-pv-page .sesen-pv-document-item p {
          margin-top: 7px;
          font-size: 16px;
          line-height: 1.62;
        }

        /* TWO OPERATING MODES */
        .sesen-pv-page .sesen-pv-modes {
          background: var(--sesen-pv-soft);
        }

        .sesen-pv-page .sesen-pv-mode-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .sesen-pv-page .sesen-pv-mode-panel {
          overflow: hidden;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 28px;
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-mode-head {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 30px 32px 26px;
          background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%);
          border-bottom: 1px solid var(--sesen-pv-divider);
        }

        .sesen-pv-page .sesen-pv-mode-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: var(--sesen-pv-soft-blue);
          color: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-mode-head p {
          margin-top: 8px;
          font-size: 16px;
          line-height: 1.6;
        }

        .sesen-pv-page .sesen-pv-mode-steps { padding: 5px 32px 20px; }

        .sesen-pv-page .sesen-pv-mode-step {
          display: grid;
          grid-template-columns: 118px minmax(0, 1fr);
          gap: 18px;
          padding: 19px 0;
          border-bottom: 1px solid var(--sesen-pv-divider);
        }

        .sesen-pv-page .sesen-pv-mode-step:last-child { border-bottom: 0; }

        .sesen-pv-page .sesen-pv-mode-step strong {
          color: var(--sesen-pv-navy);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.035em;
          text-transform: uppercase;
        }

        .sesen-pv-page .sesen-pv-mode-step span {
          font-size: 16px;
          line-height: 1.58;
        }

        .sesen-pv-page .sesen-pv-mode-note {
          margin: 0 32px 30px;
          padding: 18px 20px;
          border-radius: 16px;
          background: var(--sesen-pv-pale-blue);
          color: var(--sesen-pv-navy);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.55;
        }

        /* TERMINOLOGY */
        .sesen-pv-page .sesen-pv-terminology { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-terminology-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 68px;
          align-items: center;
        }

        .sesen-pv-page .sesen-pv-terminology-copy > p {
          margin-top: 20px;
          font-size: 18px;
          line-height: 1.73;
        }

        .sesen-pv-page .sesen-pv-term-assets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 24px;
          margin-top: 28px;
        }

        .sesen-pv-page .sesen-pv-term-asset {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 16px;
        }

        .sesen-pv-page .sesen-pv-term-asset svg {
          flex: 0 0 auto;
          margin-top: 2px;
          color: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-term-map {
          position: relative;
          min-height: 520px;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 30px;
          background:
            radial-gradient(circle at 50% 50%, rgba(234,240,255,0.88) 0, rgba(245,247,255,0.65) 36%, rgba(255,255,255,1) 72%);
          overflow: hidden;
        }

        .sesen-pv-page .sesen-pv-term-map::before,
        .sesen-pv-page .sesen-pv-term-map::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          border: 1px dashed #CBD7EE;
          border-radius: 50%;
          transform: translate(-50%, -50%);
        }

        .sesen-pv-page .sesen-pv-term-map::before { width: 310px; height: 310px; }
        .sesen-pv-page .sesen-pv-term-map::after { width: 430px; height: 430px; opacity: 0.7; }

        .sesen-pv-page .sesen-pv-term-center {
          position: absolute;
          z-index: 2;
          top: 50%;
          left: 50%;
          width: 176px;
          min-height: 112px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          border-radius: 26px;
          background: var(--sesen-pv-navy);
          color: var(--sesen-pv-white);
          text-align: center;
          transform: translate(-50%, -50%);
          box-shadow: 0 18px 40px rgba(23, 38, 77, 0.12);
        }

        .sesen-pv-page .sesen-pv-term-center svg { color: var(--sesen-pv-light-accent); }

        .sesen-pv-page .sesen-pv-term-center strong {
          margin-top: 8px;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.3;
        }

        .sesen-pv-page .sesen-pv-term-node {
          position: absolute;
          z-index: 2;
          min-width: 144px;
          padding: 13px 16px;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 16px;
          background: var(--sesen-pv-white);
          color: var(--sesen-pv-navy);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
          box-shadow: 0 8px 24px rgba(23, 38, 77, 0.06);
        }

        .sesen-pv-page .sesen-pv-term-node.n1 { top: 48px; left: 50%; transform: translateX(-50%); }
        .sesen-pv-page .sesen-pv-term-node.n2 { top: 142px; right: 26px; }
        .sesen-pv-page .sesen-pv-term-node.n3 { bottom: 106px; right: 32px; }
        .sesen-pv-page .sesen-pv-term-node.n4 { bottom: 42px; left: 50%; transform: translateX(-50%); }
        .sesen-pv-page .sesen-pv-term-node.n5 { bottom: 112px; left: 28px; }
        .sesen-pv-page .sesen-pv-term-node.n6 { top: 144px; left: 24px; }

        .sesen-pv-page .sesen-pv-term-details {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 30px;
        }

        .sesen-pv-page .sesen-pv-term-chip {
          padding: 8px 12px;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 999px;
          background: #FBFCFF;
          color: #56647A;
          font-size: 16px;
          line-height: 1.35;
        }

        .sesen-pv-page .sesen-pv-boundary-note {
          margin-top: 24px;
          padding: 18px 20px;
          border-left: 2px solid var(--sesen-pv-blue);
          background: var(--sesen-pv-pale-blue);
          color: #3C4E6A;
          font-size: 16px;
          line-height: 1.65;
        }

        /* QUALITY */
        .sesen-pv-page .sesen-pv-quality { background: var(--sesen-pv-pale-blue); }

        .sesen-pv-page .sesen-pv-quality-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid #D4DFF3;
          border-bottom: 1px solid #D4DFF3;
        }

        .sesen-pv-page .sesen-pv-quality-item {
          padding: 32px 27px;
        }

        .sesen-pv-page .sesen-pv-quality-item + .sesen-pv-quality-item {
          border-left: 1px solid #D4DFF3;
        }

        .sesen-pv-page .sesen-pv-quality-item .icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--sesen-pv-white);
          color: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-quality-item h3 {
          margin-top: 18px;
          font-size: 20px;
        }

        .sesen-pv-page .sesen-pv-quality-item p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.62;
        }

        .sesen-pv-page .sesen-pv-aiqa {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 56px;
          margin-top: 42px;
          padding: 34px 38px;
          border: 1px solid #D4DFF3;
          border-radius: 24px;
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-aiqa h3 { font-size: 24px; }
        .sesen-pv-page .sesen-pv-aiqa p { margin-top: 12px; font-size: 16px; line-height: 1.68; }

        .sesen-pv-page .sesen-pv-check-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
          align-content: center;
        }

        .sesen-pv-page .sesen-pv-check-pill {
          display: flex;
          min-height: 42px;
          align-items: center;
          gap: 8px;
          padding: 9px 11px;
          border-radius: 12px;
          background: var(--sesen-pv-pale-blue);
          color: var(--sesen-pv-navy);
          font-size: 14px;
          font-weight: 600;
        }

        .sesen-pv-page .sesen-pv-check-pill svg { color: var(--sesen-pv-blue-dark); }

        /* COMPACT WORKFLOW */
        .sesen-pv-page .sesen-pv-production { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-production-flow {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border: 1px solid var(--sesen-pv-border);
          border-radius: 26px;
          overflow: hidden;
        }

        .sesen-pv-page .sesen-pv-production-step {
          position: relative;
          min-height: 188px;
          padding: 24px 20px 22px;
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-production-step + .sesen-pv-production-step {
          border-left: 1px solid var(--sesen-pv-divider);
        }

        .sesen-pv-page .sesen-pv-production-step strong {
          color: var(--sesen-pv-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .sesen-pv-page .sesen-pv-production-step h3 {
          margin-top: 10px;
          font-size: 19px;
        }

        .sesen-pv-page .sesen-pv-production-step p {
          margin-top: 9px;
          font-size: 16px;
          line-height: 1.58;
        }

        /* GLOBAL */
        .sesen-pv-page .sesen-pv-global { background: var(--sesen-pv-soft); }

        .sesen-pv-page .sesen-pv-global-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 64px;
          align-items: start;
        }

        .sesen-pv-page .sesen-pv-global-stat {
          padding: 34px;
          border-radius: 28px;
          background: var(--sesen-pv-navy);
          color: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-global-stat .big {
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 64px;
          font-weight: 500;
          line-height: 1;
          letter-spacing: -1px;
        }

        .sesen-pv-page .sesen-pv-global-stat h3 {
          margin-top: 16px;
          color: var(--sesen-pv-white);
          font-size: 24px;
        }

        .sesen-pv-page .sesen-pv-global-stat p {
          margin-top: 12px;
          color: #D9E3FF;
          font-size: 16px;
          line-height: 1.65;
        }

        .sesen-pv-page .sesen-pv-audience-list {
          border-top: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-audience-row {
          display: grid;
          grid-template-columns: 230px minmax(0, 1fr);
          gap: 28px;
          padding: 22px 0;
          border-bottom: 1px solid var(--sesen-pv-border);
        }

        .sesen-pv-page .sesen-pv-audience-row h3 { font-size: 20px; }
        .sesen-pv-page .sesen-pv-audience-row p { font-size: 16px; line-height: 1.62; }

        /* FILES */
        .sesen-pv-page .sesen-pv-files { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-files-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 70px;
          align-items: start;
        }

        .sesen-pv-page .sesen-pv-files-copy p {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-pv-page .sesen-pv-format-board {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .sesen-pv-page .sesen-pv-format-item {
          min-height: 88px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 17px 18px;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 16px;
          background: #FCFDFF;
          color: var(--sesen-pv-navy);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .sesen-pv-page .sesen-pv-format-icon {
          width: 28px;
          height: 28px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 28px;
          color: var(--sesen-pv-blue-dark);
        }

        .sesen-pv-page .sesen-pv-format-icon svg {
          width: 24px;
          height: 24px;
          color: inherit;
          flex: 0 0 auto;
        }

        /* SPECIALIZED SERVICES */
        .sesen-pv-page .sesen-pv-specialized { background: var(--sesen-pv-pale-blue); }

        .sesen-pv-page .sesen-pv-service-directory {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #D5E0F4;
        }

        .sesen-pv-page .sesen-pv-service-link {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 22px;
          gap: 18px;
          padding: 26px 22px 26px 0;
          border-bottom: 1px solid #D5E0F4;
          color: inherit;
          text-decoration: none;
        }

        .sesen-pv-page .sesen-pv-service-link:nth-child(odd) {
          padding-right: 36px;
          border-right: 1px solid #D5E0F4;
        }

        .sesen-pv-page .sesen-pv-service-link:nth-child(even) { padding-left: 36px; }

        .sesen-pv-page .sesen-pv-service-link h3 {
          color: var(--sesen-pv-navy);
          font-size: 20px;
          transition: color 150ms ease;
        }

        .sesen-pv-page .sesen-pv-service-link p {
          margin-top: 8px;
          font-size: 16px;
          line-height: 1.58;
        }

        .sesen-pv-page .sesen-pv-service-link .service-arrow {
          margin-top: 2px;
          color: var(--sesen-pv-blue-dark);
          font-size: 21px;
          transition: transform 150ms ease;
        }

        .sesen-pv-page .sesen-pv-service-link:hover h3 { color: var(--sesen-pv-blue-dark); }
        .sesen-pv-page .sesen-pv-service-link:hover .service-arrow { transform: translateX(3px); }
        .sesen-pv-page .sesen-pv-service-link:focus-visible { outline: 3px solid rgba(75,111,216,0.34); outline-offset: 3px; }

        /* RELATED */
        .sesen-pv-page .sesen-pv-related { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-related-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .sesen-pv-page .sesen-pv-related-item {
          min-height: 230px;
          display: flex;
          flex-direction: column;
          padding: 26px;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 20px;
          background: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-related-item h3 { font-size: 20px; }
        .sesen-pv-page .sesen-pv-related-item p { margin: 10px 0 22px; font-size: 16px; line-height: 1.62; }
        .sesen-pv-page .sesen-pv-related-item .sesen-pv-editorial-link { margin-top: auto; }

        /* WHY SESEN */
        .sesen-pv-page .sesen-pv-why { background: var(--sesen-pv-soft); }

        .sesen-pv-page .sesen-pv-why-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 20px;
        }

        .sesen-pv-page .sesen-pv-why-item {
          padding: 28px 24px 28px 0;
          border-top: 2px solid #CBD7F0;
        }

        .sesen-pv-page .sesen-pv-why-item h3 { margin-top: 15px; font-size: 20px; }
        .sesen-pv-page .sesen-pv-why-item p { margin-top: 10px; font-size: 16px; line-height: 1.64; }
        .sesen-pv-page .sesen-pv-why-item svg { color: var(--sesen-pv-blue-dark); }

        /* CERTS */
        .sesen-pv-page .sesen-pv-cert-band {
          background: var(--sesen-pv-navy);
          color: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-cert-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 64px;
          align-items: center;
        }

        .sesen-pv-page .sesen-pv-cert-layout .sesen-pv-eyebrow { color: var(--sesen-pv-light-accent); }
        .sesen-pv-page .sesen-pv-cert-layout h2 { color: var(--sesen-pv-white); }
        .sesen-pv-page .sesen-pv-cert-layout p { margin-top: 18px; color: #D9E3FF; font-size: 17px; line-height: 1.7; }

        .sesen-pv-page .sesen-pv-cert-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(200,214,255,0.26);
          border-bottom: 1px solid rgba(200,214,255,0.26);
        }

        .sesen-pv-page .sesen-pv-cert-item { padding: 26px 20px; }
        .sesen-pv-page .sesen-pv-cert-item + .sesen-pv-cert-item { border-left: 1px solid rgba(200,214,255,0.26); }
        .sesen-pv-page .sesen-pv-cert-item strong { display: block; color: #FFFFFF; font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; }
        .sesen-pv-page .sesen-pv-cert-item span { display: block; margin-top: 8px; color: #C8D6FF; font-size: 14px; line-height: 1.5; }

        /* FAQ */
        .sesen-pv-page .sesen-pv-faq { background: var(--sesen-pv-white); }

        .sesen-pv-page .sesen-pv-faq-list { border-top: 1px solid var(--sesen-pv-border); }

        .sesen-pv-page .sesen-pv-faq-item { border-bottom: 1px solid var(--sesen-pv-border); }

        .sesen-pv-page .sesen-pv-faq-button {
          width: 100%;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 36px;
          gap: 20px;
          align-items: center;
          padding: 25px 0;
          border: 0;
          background: transparent;
          color: var(--sesen-pv-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.4;
          text-align: left;
          cursor: pointer;
        }

        .sesen-pv-page .sesen-pv-faq-toggle {
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--sesen-pv-border);
          border-radius: 50%;
          color: var(--sesen-pv-blue-dark);
          font-family: Inter, sans-serif;
          font-size: 22px;
          line-height: 1;
        }

        .sesen-pv-page .sesen-pv-faq-answer {
          max-width: 850px;
          padding: 0 52px 25px 0;
          font-size: 16px;
          line-height: 1.72;
        }

        /* FINAL CTA */
        .sesen-pv-page .sesen-pv-final-cta {
          padding-top: 86px;
          padding-bottom: 86px;
          background: linear-gradient(118deg, #17264D 0%, #253F8F 62%, #3659BB 100%);
          color: var(--sesen-pv-white);
        }

        .sesen-pv-page .sesen-pv-final-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 54px;
          align-items: center;
        }

        .sesen-pv-page .sesen-pv-final-copy { max-width: 790px; }
        .sesen-pv-page .sesen-pv-final-copy h2 { color: var(--sesen-pv-white); }
        .sesen-pv-page .sesen-pv-final-copy p { margin-top: 18px; color: #E4EBFF; font-size: 18px; line-height: 1.72; }
        .sesen-pv-page .sesen-pv-final-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; }
        .sesen-pv-page .sesen-pv-final-actions .sesen-pv-btn.is-secondary { border-color: rgba(255,255,255,0.82); }

        @media (max-width: 1100px) {
          .sesen-pv-page .sesen-pv-container { padding-left: 40px; padding-right: 40px; }
          .sesen-pv-page .sesen-pv-hero-grid { grid-template-columns: minmax(0, 1fr) 390px; gap: 34px; }
          .sesen-pv-page .sesen-pv-lifecycle-step { grid-template-columns: 72px minmax(0, 0.9fr) minmax(280px, 0.72fr); gap: 24px; }
          .sesen-pv-page .sesen-pv-step-list { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-quality-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-quality-item:nth-child(3) { border-left: 0; border-top: 1px solid #D4DFF3; }
          .sesen-pv-page .sesen-pv-quality-item:nth-child(4) { border-top: 1px solid #D4DFF3; }
          .sesen-pv-page .sesen-pv-production-flow { grid-template-columns: repeat(3, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-production-step:nth-child(4) { border-left: 0; border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-production-step:nth-child(5),
          .sesen-pv-page .sesen-pv-production-step:nth-child(6) { border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-related-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-why-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 860px) {
          .sesen-pv-page .sesen-pv-container { padding-left: 30px; padding-right: 30px; }
          .sesen-pv-page .sesen-pv-section { padding-top: 80px; padding-bottom: 80px; }
          .sesen-pv-page .sesen-pv-section.is-dense { padding-top: 72px; padding-bottom: 72px; }
          .sesen-pv-page h1 { font-size: 44px; }
          .sesen-pv-page h2 { font-size: 34px; }
          .sesen-pv-page .sesen-pv-hero { padding-top: 82px; padding-bottom: 82px; }
          .sesen-pv-page .sesen-pv-hero-grid,
          .sesen-pv-page .sesen-pv-challenge-layout,
          .sesen-pv-page .sesen-pv-terminology-layout,
          .sesen-pv-page .sesen-pv-global-layout,
          .sesen-pv-page .sesen-pv-files-layout,
          .sesen-pv-page .sesen-pv-cert-layout { grid-template-columns: 1fr; gap: 46px; }
          .sesen-pv-page .sesen-pv-hero-art-svg { max-width: 470px; margin: 0 auto; }
          .sesen-pv-page .sesen-pv-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-trust-item:nth-child(4) { border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-lifecycle-step { grid-template-columns: 62px minmax(0, 1fr); gap: 24px; }
          .sesen-pv-page .sesen-pv-lifecycle-path::before { left: 30px; }
          .sesen-pv-page .sesen-pv-step-number { width: 60px; height: 50px; }
          .sesen-pv-page .sesen-pv-step-list { grid-column: 2; grid-template-columns: repeat(2, minmax(0, 1fr)); padding-top: 4px; }
          .sesen-pv-page .sesen-pv-document-group { grid-template-columns: 1fr; gap: 24px; }
          .sesen-pv-page .sesen-pv-document-group > h3 { max-width: none; }
          .sesen-pv-page .sesen-pv-mode-grid { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-aiqa { grid-template-columns: 1fr; gap: 26px; }
          .sesen-pv-page .sesen-pv-term-map { max-width: 620px; width: 100%; margin: 0 auto; }
          .sesen-pv-page .sesen-pv-audience-row { grid-template-columns: 190px minmax(0, 1fr); }
          .sesen-pv-page .sesen-pv-cert-list { max-width: 700px; }
          .sesen-pv-page .sesen-pv-final-layout { grid-template-columns: 1fr; gap: 30px; }
          .sesen-pv-page .sesen-pv-final-actions { justify-content: flex-start; }
        }

        @media (max-width: 640px) {
          .sesen-pv-page .sesen-pv-container { padding-left: 20px; padding-right: 20px; }
          .sesen-pv-page .sesen-pv-section,
          .sesen-pv-page .sesen-pv-section.is-dense { padding-top: 68px; padding-bottom: 68px; }
          .sesen-pv-page h1 { font-size: 42px; line-height: 1.22; }
          .sesen-pv-page h2 { font-size: 32px; line-height: 1.28; }
          .sesen-pv-page h3 { font-size: 22px; }
          .sesen-pv-page .sesen-pv-section-heading { margin-bottom: 38px; }
          .sesen-pv-page .sesen-pv-section-heading.mobile-center,
          .sesen-pv-page .sesen-pv-section-heading.is-centered { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-pv-page .sesen-pv-section-heading.mobile-center p,
          .sesen-pv-page .sesen-pv-section-heading.is-centered p { text-align: left; }
          .sesen-pv-page .sesen-pv-section-heading.mobile-left { text-align: left; }
          .sesen-pv-page .sesen-pv-section-heading.mobile-left p { text-align: left; }
          .sesen-pv-page .sesen-pv-hero { padding-top: 70px; padding-bottom: 68px; }
          .sesen-pv-page .sesen-pv-hero-grid { grid-template-columns: 1fr; gap: 36px; }
          .sesen-pv-page .sesen-pv-hero-lead { font-size: 18px; }
          .sesen-pv-page .sesen-pv-hero-art-svg { max-width: 410px; }
          .sesen-pv-page .sesen-pv-button-row { flex-direction: column; }
          .sesen-pv-page .sesen-pv-button-row .sesen-pv-btn { width: 100%; }
          .sesen-pv-page .sesen-pv-trust-grid { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-trust-item { min-height: auto; padding: 20px 0; }
          .sesen-pv-page .sesen-pv-trust-item + .sesen-pv-trust-item { border-left: 0; border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-challenge-layout { gap: 38px; }
          .sesen-pv-page .sesen-pv-challenge-copy { text-align: center; }
          .sesen-pv-page .sesen-pv-challenge-copy p { text-align: left; }
          .sesen-pv-page .sesen-pv-value-row { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .sesen-pv-page .sesen-pv-value-icon { width: 40px; height: 40px; }
          .sesen-pv-page .sesen-pv-lifecycle-step { grid-template-columns: 52px minmax(0, 1fr); gap: 18px; padding: 28px 0; }
          .sesen-pv-page .sesen-pv-lifecycle-path::before { left: 25px; }
          .sesen-pv-page .sesen-pv-step-number { width: 50px; height: 46px; font-size: 17px; }
          .sesen-pv-page .sesen-pv-step-copy h3 { font-size: 22px; }
          .sesen-pv-page .sesen-pv-step-list { grid-column: 2; grid-template-columns: 1fr; gap: 8px; }
          .sesen-pv-page .sesen-pv-document-group { padding: 31px 0; }
          .sesen-pv-page .sesen-pv-document-items { grid-template-columns: 1fr; gap: 24px; }
          .sesen-pv-page .sesen-pv-mode-head { padding: 26px 24px 22px; }
          .sesen-pv-page .sesen-pv-mode-steps { padding: 4px 24px 15px; }
          .sesen-pv-page .sesen-pv-mode-step { grid-template-columns: 1fr; gap: 6px; padding: 17px 0; }
          .sesen-pv-page .sesen-pv-mode-note { margin: 0 24px 24px; }
          .sesen-pv-page .sesen-pv-term-assets { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-term-map {
            min-height: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            padding: 18px;
          }
          .sesen-pv-page .sesen-pv-term-map::before,
          .sesen-pv-page .sesen-pv-term-map::after { display: none; }
          .sesen-pv-page .sesen-pv-term-center {
            position: static;
            grid-column: 1 / -1;
            width: auto;
            min-height: 100px;
            transform: none;
          }
          .sesen-pv-page .sesen-pv-term-node,
          .sesen-pv-page .sesen-pv-term-node.n1,
          .sesen-pv-page .sesen-pv-term-node.n2,
          .sesen-pv-page .sesen-pv-term-node.n3,
          .sesen-pv-page .sesen-pv-term-node.n4,
          .sesen-pv-page .sesen-pv-term-node.n5,
          .sesen-pv-page .sesen-pv-term-node.n6 {
            position: static;
            min-width: 0;
            max-width: none;
            padding: 14px 12px;
            font-size: 14px;
            transform: none;
          }
          .sesen-pv-page .sesen-pv-quality-grid { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-quality-item + .sesen-pv-quality-item { border-left: 0; border-top: 1px solid #D4DFF3; }
          .sesen-pv-page .sesen-pv-quality-item:nth-child(3) { border-top: 1px solid #D4DFF3; }
          .sesen-pv-page .sesen-pv-aiqa { padding: 28px 24px; }
          .sesen-pv-page .sesen-pv-check-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-production-flow { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-production-step { min-height: 0; padding: 24px; }
          .sesen-pv-page .sesen-pv-production-step + .sesen-pv-production-step,
          .sesen-pv-page .sesen-pv-production-step:nth-child(4),
          .sesen-pv-page .sesen-pv-production-step:nth-child(5),
          .sesen-pv-page .sesen-pv-production-step:nth-child(6) { border-left: 0; border-top: 1px solid var(--sesen-pv-divider); }
          .sesen-pv-page .sesen-pv-global-stat .big { font-size: 56px; }
          .sesen-pv-page .sesen-pv-audience-row { grid-template-columns: 1fr; gap: 8px; }
          .sesen-pv-page .sesen-pv-format-board { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-pv-page .sesen-pv-service-directory { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-service-link,
          .sesen-pv-page .sesen-pv-service-link:nth-child(odd),
          .sesen-pv-page .sesen-pv-service-link:nth-child(even) { padding: 24px 0; border-right: 0; }
          .sesen-pv-page .sesen-pv-related-list { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-related-item { min-height: 0; }
          .sesen-pv-page .sesen-pv-why-grid { grid-template-columns: 1fr; gap: 8px; }
          .sesen-pv-page .sesen-pv-cert-list { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-cert-item + .sesen-pv-cert-item { border-left: 0; border-top: 1px solid rgba(200,214,255,0.26); }
          .sesen-pv-page .sesen-pv-faq-button { font-size: 19px; padding: 22px 0; }
          .sesen-pv-page .sesen-pv-faq-answer { padding-right: 0; }
          .sesen-pv-page .sesen-pv-final-cta { padding-top: 70px; padding-bottom: 70px; }
          .sesen-pv-page .sesen-pv-final-actions { flex-direction: column; }
          .sesen-pv-page .sesen-pv-final-actions .sesen-pv-btn { width: 100%; }

          /* Mobile heading alignment: center standalone headings; keep technical/directory/workflow sections left-aligned. */
          .sesen-pv-page .sesen-pv-cert-copy h2,
          .sesen-pv-page .sesen-pv-final-copy h2 { text-align: center; }
          .sesen-pv-page .sesen-pv-cert-copy p,
          .sesen-pv-page .sesen-pv-final-copy p,
          .sesen-pv-page .sesen-pv-mobile-technical h2,
          .sesen-pv-page .sesen-pv-mobile-technical p { text-align: left; }
        }

        @media (max-width: 360px) {
          .sesen-pv-page h1 { font-size: 38px; }
          .sesen-pv-page h2 { font-size: 30px; }
          .sesen-pv-page .sesen-pv-mode-head { flex-direction: column; gap: 12px; }
          .sesen-pv-page .sesen-pv-mode-icon { width: 42px; height: 42px; flex-basis: 42px; }
          .sesen-pv-page .sesen-pv-lifecycle-step { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .sesen-pv-page .sesen-pv-lifecycle-path::before { left: 21px; }
          .sesen-pv-page .sesen-pv-step-number { width: 44px; height: 42px; font-size: 16px; }
          .sesen-pv-page .sesen-pv-step-list { grid-column: 2; }
          .sesen-pv-page .sesen-pv-term-map { grid-template-columns: 1fr; }
          .sesen-pv-page .sesen-pv-term-center { grid-column: 1; }
          .sesen-pv-page .sesen-pv-format-board,
          .sesen-pv-page .sesen-pv-check-grid { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-pv-page .sesen-pv-btn,
          .sesen-pv-page .sesen-pv-editorial-link .arrow,
          .sesen-pv-page .sesen-pv-service-link .service-arrow { transition: none; }
        }
      `}</style>

      <main>
        <section className="sesen-pv-hero" aria-labelledby="pv-page-title">
          <div className="sesen-pv-container sesen-pv-hero-grid">
            <div className="sesen-pv-hero-copy">
              <div className="sesen-pv-eyebrow">Global Drug Safety</div>
              <h1 id="pv-page-title">Pharmacovigilance Translation Services for Global Drug Safety</h1>
              <p className="sesen-pv-hero-lead">
                Support global pharmacovigilance programs with specialized translation across individual case reporting, aggregate safety reporting, risk management, post-market surveillance, and safety communications.
              </p>
              <p className="sesen-pv-hero-scope">
                From AE and SAE reports to ICSRs, SUSARs, DSURs, PSURs, PBRERs, RMPs, and safety narratives, Sesen helps drug-safety teams move critical information across languages with the speed, consistency, and control regulated workflows demand.
              </p>
              <div className="sesen-pv-button-row">
                <a className="sesen-pv-btn is-primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <span aria-hidden="true">→</span></a>
                <a className="sesen-pv-btn is-secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="sesen-pv-hero-art">
              <HeroSafetyArt />
            </div>
          </div>
        </section>

        <section className="sesen-pv-trust-band" aria-label="Pharmacovigilance translation capabilities">
          <div className="sesen-pv-container sesen-pv-trust-grid">
            <div className="sesen-pv-trust-item">
              <span className="sesen-pv-trust-icon"><Icon name="document" /></span>
              <div className="sesen-pv-trust-copy"><strong>Life Sciences Specialization</strong><span>Medical and drug-safety expertise</span></div>
            </div>
            <div className="sesen-pv-trust-item">
              <span className="sesen-pv-trust-icon"><Icon name="shield" /></span>
              <div className="sesen-pv-trust-copy"><strong>ISO-Certified Quality</strong><span>Controlled translation processes</span></div>
            </div>
            <div className="sesen-pv-trust-item">
              <span className="sesen-pv-trust-icon"><Icon name="globe" /></span>
              <div className="sesen-pv-trust-copy"><strong>150+ Languages</strong><span>Global multilingual coverage</span></div>
            </div>
            <div className="sesen-pv-trust-item">
              <span className="sesen-pv-trust-icon"><Icon name="clock" /></span>
              <div className="sesen-pv-trust-copy"><strong>Time-Sensitive Workflows</strong><span>Support for urgent safety content</span></div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-challenge">
          <div className="sesen-pv-container sesen-pv-challenge-layout">
            <div className="sesen-pv-challenge-copy">
              <h2>Drug Safety Translation Where Speed and Consistency Matter</h2>
              <p>
                Pharmacovigilance content often moves under a different set of pressures than other life sciences documentation. An individual safety case may require rapid processing and reporting, while a DSUR, PSUR, PBRER, or Risk Management Plan may evolve across multiple reporting cycles, markets, reviewers, and product milestones.
              </p>
              <p>
                In both situations, accurate translation is only part of the requirement. Safety teams also need terminology to remain consistent, critical numbers and dates to be handled carefully, recurring language to stay aligned, follow-up information to connect with earlier content, and multilingual files to move through defined review and delivery processes.
              </p>
            </div>
            <div className="sesen-pv-value-stack">
              <div className="sesen-pv-value-row">
                <span className="sesen-pv-value-icon"><Icon name="clock" /></span>
                <div><h3>Speed Where Timelines Matter</h3><p>Coordinated intake, translation, review, QA, and delivery for urgent and expedited safety content.</p></div>
              </div>
              <div className="sesen-pv-value-row">
                <span className="sesen-pv-value-icon"><Icon name="language" /></span>
                <div><h3>Consistency Across Cases</h3><p>Product terminology, medical language, safety concepts, and approved translations can remain aligned across related cases and follow-up information.</p></div>
              </div>
              <div className="sesen-pv-value-row">
                <span className="sesen-pv-value-icon"><Icon name="repeat" /></span>
                <div><h3>Continuity Across Reporting Cycles</h3><p>Translation memories, terminology resources, references, and controlled updates support recurring reports as safety content evolves.</p></div>
              </div>
              <div className="sesen-pv-value-row">
                <span className="sesen-pv-value-icon"><Icon name="check" /></span>
                <div><h3>Traceable Quality</h3><p>Defined workflow stages, qualified linguists, independent review, technology-supported QA, and controlled delivery create a repeatable multilingual process.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-lifecycle">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Pharmacovigilance Translation Across the Safety Lifecycle"
              intro="Drug-safety information develops continuously—from the first incoming case through expedited reporting, periodic analysis, risk management, post-market monitoring, and communication of new safety information. Sesen provides multilingual support across this broader lifecycle so global teams can manage individual documents without losing continuity between them."
              className="mobile-left"
            />
            <div className="sesen-pv-lifecycle-path">
              {lifecycleSteps.map((step) => (
                <article className="sesen-pv-lifecycle-step" key={step.number}>
                  <div className="sesen-pv-step-number" aria-hidden="true">{step.number}</div>
                  <div className="sesen-pv-step-copy">
                    <h3>{step.title}</h3>
                    <p>{step.copy}</p>
                  </div>
                  <ul className="sesen-pv-step-list">
                    {step.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-documents">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Pharmacovigilance Documents We Translate"
              intro="Sesen provides specialized drug-safety translation across individual case reporting, periodic reporting, risk management, post-market surveillance, and safety communication."
              className="mobile-left"
            />
            <div className="sesen-pv-document-groups">
              {documentGroups.map((group) => (
                <div className="sesen-pv-document-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="sesen-pv-document-items">
                    {group.items.map(([title, copy]) => {
                      const href = documentServiceLinks[title];
                      return (
                        <div className="sesen-pv-document-item" key={title}>
                          <h4>{href ? <a className="sesen-pv-document-link" href={href}>{title}</a> : title}</h4>
                          <p>{copy}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-modes">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Built for Time-Sensitive and Recurring Safety Workflows"
              intro="Not every pharmacovigilance translation project should be managed the same way. An urgent ICSR or SAE report has different workflow needs from a PBRER that is updated periodically over several years. Sesen supports both through processes designed around the timing, content, and continuity requirements of the safety program."
              center
              className="mobile-center"
            />
            <div className="sesen-pv-mode-grid">
              <article className="sesen-pv-mode-panel">
                <div className="sesen-pv-mode-head">
                  <span className="sesen-pv-mode-icon"><Icon name="clock" size={24} /></span>
                  <div><h3>Time-Sensitive Case Reporting</h3><p>For AE, SAE, ICSR, SUSAR, follow-up reports, and urgent safety communications.</p></div>
                </div>
                <div className="sesen-pv-mode-steps">
                  {[
                    ["Rapid Intake", "Review files, languages, timelines, references, and available prior case information quickly."],
                    ["Terminology Alignment", "Apply product terminology, approved safety language, references, and prior translations where appropriate."],
                    ["Specialized Translation", "Use qualified life sciences linguists with attention to clinical meaning, chronology, dates, dosages, units, and case details."],
                    ["Independent Review", "Check accuracy, completeness, terminology, consistency, and contextual meaning."],
                    ["Focused QA", "Use technology-supported and human checks to identify potential issues before delivery."],
                    ["Controlled Delivery", "Prepare final files according to the agreed workflow, format, and safety-program timeline."],
                  ].map(([label, copy]) => (
                    <div className="sesen-pv-mode-step" key={label}><strong>{label}</strong><span>{copy}</span></div>
                  ))}
                </div>
                <div className="sesen-pv-mode-note">Urgency should accelerate the workflow—not reduce the controls that protect meaning and consistency.</div>
              </article>

              <article className="sesen-pv-mode-panel">
                <div className="sesen-pv-mode-head">
                  <span className="sesen-pv-mode-icon"><Icon name="repeat" size={24} /></span>
                  <div><h3>Recurring Safety Programs</h3><p>For DSUR, PSUR, PBRER, RMP, recurring narratives, and post-market updates.</p></div>
                </div>
                <div className="sesen-pv-mode-steps">
                  {[
                    ["Approved Language Reuse", "Leverage previously reviewed translations so recurring safety language does not need to be recreated unnecessarily."],
                    ["Translation Memory", "Identify and reuse repeated content appropriately to improve consistency across successive versions."],
                    ["Terminology Continuity", "Keep product names, safety terminology, sponsor language, and recurring expressions aligned across projects."],
                    ["Version Management", "Distinguish changed and newly added content from previously translated sections."],
                    ["Cross-Cycle Consistency", "Maintain continuity from one DSUR, PSUR, PBRER, RMP, or other reporting cycle to the next."],
                    ["Scalable Program Support", "Coordinate resources and workflows across languages, reports, affiliates, and recurring deadlines."],
                  ].map(([label, copy]) => (
                    <div className="sesen-pv-mode-step" key={label}><strong>{label}</strong><span>{copy}</span></div>
                  ))}
                </div>
                <div className="sesen-pv-mode-note">Recurring safety translation can become more consistent and efficient as the program matures.</div>
              </article>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-terminology">
          <div className="sesen-pv-container sesen-pv-terminology-layout">
            <div className="sesen-pv-terminology-copy sesen-pv-mobile-technical">
              <h2>Maintain Safety Terminology Across Cases and Reporting Cycles</h2>
              <p>
                Drug-safety terminology appears repeatedly across individual cases, narratives, aggregate reports, risk documentation, regulatory communication, and post-market updates. Sesen treats terminology as an ongoing program asset rather than a one-time translation decision.
              </p>
              <div className="sesen-pv-term-assets">
                {[
                  ["database", "Translation memories"],
                  ["language", "Terminology databases"],
                  ["document", "Product-specific glossaries"],
                  ["check", "Reference translations"],
                ].map(([icon, label]) => (
                  <div className="sesen-pv-term-asset" key={label}><Icon name={icon} size={20} /><span>{label}</span></div>
                ))}
              </div>
              <div className="sesen-pv-term-details">
                {terminologyItems.map((item) => <span className="sesen-pv-term-chip" key={item}>{item}</span>)}
              </div>
              <div className="sesen-pv-boundary-note">
                Sesen supports the multilingual language layer of pharmacovigilance programs. Regulatory assessment, medical evaluation, case adjudication, safety decisions, and MedDRA coding remain with the sponsor and its designated pharmacovigilance and regulatory professionals.
              </div>
            </div>
            <div className="sesen-pv-term-map" aria-label="Terminology assets supporting multiple pharmacovigilance content types">
              <div className="sesen-pv-term-center"><Icon name="language" size={28} /><strong>Controlled Safety Terminology</strong></div>
              <div className="sesen-pv-term-node n1">Individual Cases</div>
              <div className="sesen-pv-term-node n2">Safety Narratives</div>
              <div className="sesen-pv-term-node n3">Aggregate Reports</div>
              <div className="sesen-pv-term-node n4">Risk Documentation</div>
              <div className="sesen-pv-term-node n5">Safety Communications</div>
              <div className="sesen-pv-term-node n6">Affiliate Content</div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-quality">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Quality-Controlled Pharmacovigilance Translation"
              intro="High-stakes safety translation requires more than fluency in two languages. It requires the ability to understand medical meaning, preserve case detail, manage terminology, recognize critical data, and apply a repeatable quality process."
              center
              className="mobile-center"
            />
            <div className="sesen-pv-quality-grid">
              <article className="sesen-pv-quality-item"><span className="icon"><Icon name="people" /></span><h3>Specialized Life Sciences Linguists</h3><p>Projects are assigned to professional linguists selected for relevant medical, pharmaceutical, and life sciences expertise.</p></article>
              <article className="sesen-pv-quality-item"><span className="icon"><Icon name="check" /></span><h3>Independent Linguistic Review</h3><p>A second qualified linguist reviews translated content for accuracy, completeness, terminology, language quality, and internal consistency.</p></article>
              <article className="sesen-pv-quality-item"><span className="icon"><Icon name="database" /></span><h3>Terminology & Reference Control</h3><p>Available glossaries, translation memories, product terminology, previous translations, references, and client instructions are incorporated into the workflow.</p></article>
              <article className="sesen-pv-quality-item"><span className="icon"><Icon name="shield" /></span><h3>Controlled Delivery</h3><p>Final linguistic and file-level QA helps confirm that intended content has been translated, reviewed, and prepared in the required deliverable format.</p></article>
            </div>
            <div className="sesen-pv-aiqa">
              <div>
                <h3>Human Expertise + AI-Assisted QA</h3>
                <p>Technology can strengthen quality control by helping identify potential inconsistencies and production risks across large or time-sensitive multilingual files. These tools support professional review rather than replace it.</p>
                <p>Qualified linguists remain responsible for interpreting context, evaluating clinical meaning, resolving linguistic ambiguity, and determining final translation quality.</p>
              </div>
              <div className="sesen-pv-check-grid" aria-label="Examples of AI-assisted and automated quality checks">
                {['Numbers','Dates','Dosages','Units','Terminology','Repeated content','Potential omissions','Untranslated text','Formatting anomalies'].map((item) => (
                  <div className="sesen-pv-check-pill" key={item}><Icon name="check" size={17} />{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section is-dense sesen-pv-production">
          <div className="sesen-pv-container">
            <SectionHeading
              title="A Streamlined Workflow for Drug Safety Translation"
              intro="Sesen combines specialized human expertise, terminology resources, translation technology, and quality controls within a repeatable production workflow."
              className="mobile-left"
            />
            <div className="sesen-pv-production-flow">
              {[
                ["01", "Intake", "Review files, languages, deadlines, safety priorities, references, and project requirements."],
                ["02", "Align", "Prepare terminology, translation memories, product references, prior translations, and client instructions."],
                ["03", "Translate", "Assign qualified life sciences linguists to translate the safety content."],
                ["04", "Review", "Perform independent linguistic review for meaning, terminology, consistency, and completeness."],
                ["05", "QA", "Apply targeted human and technology-supported checks to critical text, data, formatting, and file integrity."],
                ["06", "Deliver", "Prepare final files and maintain relevant translation assets for future cases and lifecycle updates."],
              ].map(([number, title, copy]) => (
                <div className="sesen-pv-production-step" key={title}><strong>{number}</strong><h3>{title}</h3><p>{copy}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-global">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Supporting Global Pharmacovigilance Programs"
              intro="Sesen works with life sciences organizations managing safety information across clinical development, regulatory activity, commercialization, and ongoing product surveillance."
              center
              className="mobile-center"
            />
            <div className="sesen-pv-global-layout">
              <div className="sesen-pv-global-stat">
                <div className="big">150+</div>
                <h3>Languages for Global Safety Operations</h3>
                <p>Multilingual support for individual markets, multicountry clinical programs, central and regional safety teams, affiliates, CRO-managed programs, commercial portfolios, and recurring global reporting cycles.</p>
              </div>
              <div className="sesen-pv-audience-list">
                <div className="sesen-pv-audience-row"><h3>Pharmaceutical Companies</h3><p>Support global drug-safety operations across individual cases, recurring reports, risk documentation, post-market activity, and safety communications.</p></div>
                <div className="sesen-pv-audience-row"><h3>Biotechnology Companies</h3><p>Scale multilingual pharmacovigilance support as products progress from clinical development toward registration, commercialization, and expanded markets.</p></div>
                <div className="sesen-pv-audience-row"><h3>CROs & Safety Providers</h3><p>Provide dependable multilingual capacity across sponsor programs, safety documentation, case-related content, and recurring reporting requirements.</p></div>
                <div className="sesen-pv-audience-row"><h3>Regulatory, Medical & Safety Teams</h3><p>Connect safety translation with adjacent regulatory, clinical, labeling, and medical communication workflows while maintaining consistent terminology.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-files">
          <div className="sesen-pv-container sesen-pv-files-layout">
            <div className="sesen-pv-files-copy sesen-pv-mobile-technical">
              <h2>Safety Systems, Structured Content & File Formats</h2>
              <p>Pharmacovigilance content rarely arrives as one clean document. A safety program may include Word narratives, Excel line listings, PDFs, structured exports, forms, tables, tracked changes, reference materials, and files produced by different teams or systems.</p>
              <p>Sesen can coordinate translation, linguistic review, file preparation, formatting, and final QA across these inputs and prepare multilingual deliverables in the required project format.</p>
            </div>
            <div className="sesen-pv-format-board" aria-label="Supported safety content formats">
              {[
                ["Microsoft Word", "wordFile"],
                ["Microsoft Excel", "spreadsheet"],
                ["Microsoft PowerPoint", "presentation"],
                ["PDF", "pdfFile"],
                ["XML", "xmlFile"],
                ["CSV", "csvFile"],
                ["Safety database exports", "databaseExport"],
                ["CIOMS forms", "form"],
                ["Line listings", "lineList"],
                ["Tables & structured data", "structuredData"],
                ["Tracked-change files", "revisions"],
                ["Narratives", "narrative"],
                ["Affiliate files", "affiliate"],
                ["Reference documentation", "references"],
                ["Supporting graphics", "graphics"],
              ].map(([format, icon]) => (
                <div className="sesen-pv-format-item" key={format}>
                  <span className="sesen-pv-format-icon" aria-hidden="true"><Icon name={icon} size={24} /></span>
                  <span>{format}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-specialized">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Specialized Pharmacovigilance Translation Services"
              intro="Explore focused Sesen services for specific drug-safety documents and workflows."
              className="mobile-left"
            />
            <div className="sesen-pv-service-directory">
              {specializedServices.map(([title, href, copy]) => (
                <a className="sesen-pv-service-link" href={href} key={title}>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <span className="service-arrow" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-related">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Connected Life Sciences Translation Services"
              intro="Pharmacovigilance does not operate in isolation. Safety information can affect clinical documentation, regulatory submissions, product labeling, medical communication, and future lifecycle updates."
              center
              className="mobile-center"
            />
            <div className="sesen-pv-related-list">
              {relatedServices.map(([title, href, copy]) => (
                <article className="sesen-pv-related-item" key={title}>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  <a className="sesen-pv-editorial-link" href={href}>{title} <span className="arrow" aria-hidden="true">→</span></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sesen-pv-section is-dense sesen-pv-why">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Why Pharmacovigilance Teams Choose Sesen"
              intro="Specialized safety-content expertise, controlled linguistic assets, human-led quality, and scalable global delivery support both individual projects and ongoing pharmacovigilance programs."
              center
              className="mobile-center"
            />
            <div className="sesen-pv-why-grid">
              <div className="sesen-pv-why-item"><Icon name="document" /><h3>Pharmacovigilance-Aware Expertise</h3><p>Medical and pharmaceutical linguists selected for safety cases, narratives, periodic reports, risk documentation, and related safety content.</p></div>
              <div className="sesen-pv-why-item"><Icon name="repeat" /><h3>Consistency Across Programs</h3><p>Translation memories, terminology resources, approved references, and recurring linguistic assets connect projects into a controlled multilingual program.</p></div>
              <div className="sesen-pv-why-item"><Icon name="people" /><h3>Human-Led Quality</h3><p>Professional linguists and independent reviewers remain responsible for meaning and language quality, supported by technology that strengthens consistency and QA.</p></div>
              <div className="sesen-pv-why-item"><Icon name="globe" /><h3>Scalable Global Delivery</h3><p>From one urgent safety case to recurring reports across multiple languages and markets, workflows can scale with program cadence and complexity.</p></div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section is-dense sesen-pv-cert-band">
          <div className="sesen-pv-container sesen-pv-cert-layout">
            <div className="sesen-pv-cert-copy">
              <h2>ISO-Certified Quality Supporting Regulated Life Sciences Translation</h2>
              <p>Sesen combines specialized life sciences expertise with certified quality-management and translation processes. For pharmacovigilance programs, these practices support qualified linguistic resources, documented review, terminology control, confidentiality, and repeatable multilingual delivery.</p>
            </div>
            <div className="sesen-pv-cert-list" aria-label="Sesen ISO certifications">
              <div className="sesen-pv-cert-item"><strong>ISO 17100</strong><span>Translation Services</span></div>
              <div className="sesen-pv-cert-item"><strong>ISO 9001</strong><span>Quality Management Systems</span></div>
              <div className="sesen-pv-cert-item"><strong>ISO 13485</strong><span>Medical Device Quality Management Systems</span></div>
            </div>
          </div>
        </section>

        <section className="sesen-pv-section sesen-pv-faq">
          <div className="sesen-pv-container">
            <SectionHeading
              title="Pharmacovigilance Translation FAQs"
              intro="Answers to common questions about drug-safety translation workflows, terminology, quality control, global programs, and structured content."
              className="mobile-left"
            />
            <div className="sesen-pv-faq-list">
              {faqItems.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                const panelId = `sesen-pv-faq-panel-${index}`;
                return (
                  <div className="sesen-pv-faq-item" key={question}>
                    <button
                      type="button"
                      className="sesen-pv-faq-button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{question}</span>
                      <span className="sesen-pv-faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen ? <div id={panelId} className="sesen-pv-faq-answer">{answer}</div> : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="sesen-pv-final-cta">
          <div className="sesen-pv-container sesen-pv-final-layout">
            <div className="sesen-pv-final-copy">
              <h2>Support Global Drug Safety With Specialized Multilingual Expertise</h2>
              <p>Whether you are managing an urgent safety case, a recurring aggregate report, an expanding product portfolio, or a global pharmacovigilance program, Sesen can help keep multilingual safety information accurate, consistent, and controlled.</p>
            </div>
            <div className="sesen-pv-final-actions">
              <a className="sesen-pv-btn is-primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <span aria-hidden="true">→</span></a>
              <a className="sesen-pv-btn is-secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
