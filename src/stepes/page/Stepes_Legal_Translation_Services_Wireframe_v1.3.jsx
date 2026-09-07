import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#1F1C24",
  body: "#4F4A55",
  muted: "#716B77",
  border: "#E6E1E7",
  soft: "#F7F6F8",
  dark: "#1B1820",
  white: "#FFFFFF",
};

const legalMatters = [
  {
    icon: "contract",
    title: "Commercial Contracts and Agreements",
    description:
      "Translate master service agreements, licensing terms, procurement contracts, distribution agreements, NDAs, amendments, schedules, and transaction documents while preserving defined terms and cross-references.",
    href: "https://www.stepes.com/contract-translation-services/",
    link: "Contract Translation Services",
  },
  {
    icon: "gavel",
    title: "Litigation and Arbitration",
    description:
      "Support multilingual disputes with reliable translation of pleadings, witness statements, depositions, exhibits, expert reports, judgments, correspondence, and arbitration materials.",
    href: "https://www.stepes.com/litigation-translation-services/",
    link: "Litigation Translation Services",
  },
  {
    icon: "search",
    title: "eDiscovery and Document Review",
    description:
      "Identify languages, assess relevance, summarize priority documents, and translate selected records for attorney review, discovery production, investigations, or evidentiary use.",
    href: "https://www.stepes.com/ediscovery-translation-services/",
    link: "eDiscovery Translation Services",
  },
  {
    icon: "courthouse",
    title: "Court Documents and Proceedings",
    description:
      "Translate complaints, motions, orders, judgments, affidavits, declarations, summonses, exhibits, and hearing records with close attention to completeness and document structure.",
    href: "https://www.stepes.com/court-document-translation-services/",
    link: "Court Document Translation Services",
  },
  {
    icon: "building",
    title: "Corporate Legal and Governance",
    description:
      "Keep legal communication consistent across subsidiaries and stakeholders with translations of governance records, board materials, entity documents, due diligence files, and corporate policies.",
    href: "https://www.stepes.com/solutions/legal-teams/",
    link: "Solutions for Legal Teams",
  },
  {
    icon: "shieldCheck",
    title: "Compliance and Regulatory Content",
    description:
      "Communicate legal and ethical obligations clearly across regions through accurate translation of compliance policies, codes of conduct, regulatory guidance, training, and investigation materials.",
    href: "https://www.stepes.com/compliance-translation-services/",
    link: "Compliance Translation Services",
  },
  {
    icon: "users",
    title: "Employment and Workplace Legal Content",
    description:
      "Translate employment agreements, employee handbooks, workplace policies, investigation materials, disciplinary notices, benefits documents, and other content supporting global workforces.",
    href: "https://www.stepes.com/human-resource-translation-services/",
    link: "Human Resources Translation Services",
  },
  {
    icon: "lock",
    title: "Privacy and Data Protection",
    description:
      "Support multilingual privacy notices, data-processing agreements, consent documentation, retention policies, incident communications, and cross-border data-governance materials.",
    href: "https://www.stepes.com/privacy-policy-translations/",
    link: "Privacy Policy Translation Services",
  },
  {
    icon: "lightbulb",
    title: "Intellectual Property and Patents",
    description:
      "Combine technical and legal expertise for patent applications, claims, specifications, office actions, prior art, licensing agreements, trademarks, and IP litigation materials.",
    href: "https://www.stepes.com/patent-translation-services/",
    link: "Patent Translation Services",
  },
  {
    icon: "certificate",
    title: "Certified and Official Documents",
    description:
      "Prepare complete professional translations and supporting certification for legal, corporate, academic, immigration, and personal records submitted to official institutions.",
    href: "https://www.stepes.com/certified-translation-services/",
    link: "Certified Translation Services",
    secondaryHref: "https://www.stepes.com/immigration-document-translation-services/",
    secondaryLink: "Immigration Document Translation Services",
  },
];

const expertisePoints = [
  {
    icon: "balance",
    title: "Legal Concepts Are System-Specific",
    description:
      "Common-law and civil-law concepts do not always align. Legal linguists identify non-equivalent terms and preserve source meaning without introducing unsupported interpretations.",
  },
  {
    icon: "terms",
    title: "Defined Terms Must Stay Consistent",
    description:
      "Project glossaries, translation memory, terminology checks, and professional review keep recurring terms aligned across clauses, schedules, amendments, and related documents.",
  },
  {
    icon: "documentCheck",
    title: "Document Integrity Matters",
    description:
      "Numbering, footnotes, exhibits, signatures, seals, dates, names, tables, and cross-references are checked so translated files remain usable for their intended purpose.",
  },
  {
    icon: "route",
    title: "Intended Use Guides the Workflow",
    description:
      "Internal review, contract execution, court submission, regulatory reliance, and certified delivery call for different levels of translation and independent review.",
  },
];

const workflows = [
  {
    number: "01",
    title: "Internal Review and Triage",
    label: "Lower-risk understanding",
    description:
      "Secure AI-assisted or professional translation helps legal teams identify relevance, understand general meaning, and prioritize documents for deeper review.",
  },
  {
    number: "02",
    title: "AI + Legal-Linguist Validation",
    label: "Recurring or high-volume content",
    description:
      "Professional post-editing corrects errors, verifies terminology and completeness, and prepares AI-assisted output for the confirmed business purpose.",
  },
  {
    number: "03",
    title: "Expert Human Translation",
    label: "Material legal content",
    description:
      "Qualified legal translators handle sensitive agreements, external communications, formal records, and other content requiring close linguistic control.",
  },
  {
    number: "04",
    title: "Independent Revision or Certification",
    label: "High-consequence use",
    description:
      "A second linguist reviews critical translations, while certified or institution-specific delivery is prepared when the receiving authority requires it.",
  },
];

const qualitySteps = [
  {
    title: "Scope and Intended Use",
    description:
      "Confirm content, languages, audience, legal context, file format, deadline, certification, and review requirements.",
  },
  {
    title: "Qualified Team Assignment",
    description:
      "Select professional translators and reviewers based on the language pair, legal field, document type, and risk level.",
  },
  {
    title: "Reference and Terminology Setup",
    description:
      "Review existing translations, approved language, defined terms, entity names, glossaries, and style preferences.",
  },
  {
    title: "Translation",
    description:
      "Preserve source meaning, tone, structure, terminology, qualifications, and legally relevant details.",
  },
  {
    title: "Independent Review",
    description:
      "When selected, a second qualified linguist compares the translation against the source and resolves issues.",
  },
  {
    title: "Linguistic and Automated QA",
    description:
      "Check omissions, terminology, numbers, punctuation, formatting, repeated language, and file-level consistency.",
  },
  {
    title: "Document Integrity Review",
    description:
      "Verify headings, tables, footnotes, schedules, exhibits, names, dates, seals, signatures, and cross-references.",
  },
  {
    title: "Controlled Delivery",
    description:
      "Prepare final files in the agreed format and deliver them through the approved project workflow.",
  },
];

const securityControls = [
  "Confidentiality agreements for project participants",
  "Controlled file access and role-based permissions",
  "Restricted linguist and reviewer assignment",
  "Secure file transfer and final delivery",
  "Centralized project communication",
  "Client-specific workflow requirements",
  "Controlled terminology and translation-memory access",
  "Configurable file-handling and retention procedures",
];

const knowledgeCapabilities = [
  {
    icon: "book",
    title: "Legal Glossaries",
    description:
      "Record approved translations for defined terms, entity names, regulatory language, departments, and recurring expressions.",
  },
  {
    icon: "memory",
    title: "Translation Memory",
    description:
      "Reuse validated language across related agreements, policies, templates, and future matters for greater consistency.",
  },
  {
    icon: "layers",
    title: "Approved Precedent Language",
    description:
      "Use existing bilingual contracts, templates, policies, and counsel-approved language as controlled reference material.",
  },
  {
    icon: "feedback",
    title: "Reviewer Feedback",
    description:
      "Capture approved changes from in-house or outside counsel so future work reflects established legal language preferences.",
  },
];

const audiences = [
  {
    icon: "briefcase",
    title: "Law Firms",
    description:
      "Coordinate multilingual content across transactions, disputes, investigations, discovery, regulatory matters, intellectual property, and client communication.",
    items: [
      "Cross-border transactions and due diligence",
      "Litigation, arbitration, and investigations",
      "Multilingual discovery and document review",
      "Court, hearing, and evidentiary materials",
      "Patent and intellectual property matters",
    ],
    href: "https://www.stepes.com/litigation-translation-services/",
    link: "Explore Litigation Support",
  },
  {
    icon: "legalTeam",
    title: "Corporate Legal Departments",
    description:
      "Centralize recurring translation requests, maintain approved terminology, coordinate reviewers, and support legal operations across regions and business functions.",
    items: [
      "Commercial contracting and governance",
      "Compliance, ethics, and investigations",
      "Employment, privacy, and data protection",
      "Policies, training, and regulatory affairs",
      "Dedicated workflows and reporting",
    ],
    href: "https://www.stepes.com/solutions/legal-teams/",
    link: "Explore Solutions for Legal Teams",
  },
];

const enterpriseCapabilities = [
  "Centralized project intake",
  "Dedicated project management",
  "Scalable multilingual teams",
  "Priority and deadline coordination",
  "Reviewer collaboration",
  "Program-level reporting",
];

const relatedServices = [
  {
    title: "Litigation Translation Services",
    description: "Pleadings, evidence, depositions, exhibits, expert reports, and dispute-related records.",
    href: "https://www.stepes.com/litigation-translation-services/",
  },
  {
    title: "Contract Translation Services",
    description: "Defined terms, recurring clauses, schedules, amendments, and multilingual agreement versions.",
    href: "https://www.stepes.com/contract-translation-services/",
  },
  {
    title: "Court Document Translation Services",
    description: "Filings, judgments, affidavits, orders, hearing records, and evidentiary exhibits.",
    href: "https://www.stepes.com/court-document-translation-services/",
  },
  {
    title: "eDiscovery Translation Services",
    description: "Language identification, triage, summaries, review, and selected full-document translation.",
    href: "https://www.stepes.com/ediscovery-translation-services/",
  },
  {
    title: "Compliance Translation Services",
    description: "Policies, codes of conduct, regulatory guidance, training, and investigation materials.",
    href: "https://www.stepes.com/compliance-translation-services/",
  },
  {
    title: "Patent Translation Services",
    description: "Patent applications, claims, office actions, prior art, licensing, and IP documentation.",
    href: "https://www.stepes.com/patent-translation-services/",
  },
  {
    title: "Certified Translation Services",
    description: "Certified translations for official, legal, academic, corporate, and personal use.",
    href: "https://www.stepes.com/certified-translation-services/",
  },
  {
    title: "Immigration Document Translation",
    description: "Civil records, identity documents, affidavits, financial records, and application materials.",
    href: "https://www.stepes.com/immigration-document-translation-services/",
  },
  {
    title: "AI-Enabled Legal Translation",
    description: "Secure AI-assisted workflows with professional legal-linguist validation and oversight.",
    href: "https://www.stepes.com/ai-enabled-legal-translation-services/",
  },
];

const resources = [
  {
    title: "Legal Translation Best Practices",
    description:
      "Understand the quality, terminology, security, and review controls that support reliable multilingual legal content.",
    href: "https://www.stepes.com/resources/legal-translation/legal-translation-best-practices/",
  },
  {
    title: "Legal Translation vs. Certified Translation",
    description:
      "Learn how legal subject matter differs from formal certification and when each requirement applies.",
    href: "https://www.stepes.com/resources/legal-translation/legal-translation-vs-certified-translation/",
  },
  {
    title: "How to Prepare Legal Documents for Translation",
    description:
      "Organize files, reference materials, terminology, delivery requirements, and reviewer input before project launch.",
    href: "https://www.stepes.com/resources/legal-translation/how-to-prepare-legal-documents-for-translation/",
  },
  {
    title: "AI in Legal Translation",
    description:
      "Explore where AI adds value, where greater controls are needed, and how expert human oversight manages risk.",
    href: "https://www.stepes.com/resources/legal-translation/ai-in-legal-translation/",
  },
];

const faqs = [
  {
    question: "What is legal translation?",
    answer:
      "Legal translation covers documents and communications connected to legal rights, obligations, proceedings, compliance requirements, or official processes. It may include contracts, court filings, corporate records, evidence, policies, patents, immigration records, and related content. The work requires language expertise together with familiarity with legal terminology, document conventions, and the relevant subject matter.",
  },
  {
    question: "How are legal translators selected?",
    answer:
      "Stepes assigns translators based on the language combination, legal subject matter, document type, intended use, and required review level. Projects may require experience in commercial law, litigation, compliance, employment, intellectual property, corporate governance, immigration, or another specialized field. High-risk content can also be revised by a second qualified linguist.",
  },
  {
    question: "What is the difference between legal and certified translation?",
    answer:
      "Legal translation describes the subject matter. Certified translation describes a formal statement supplied with the translation confirming its completeness and accuracy. A legal document does not always require certification, and certified translation is not limited to legal documents. The receiving court, agency, regulator, university, or institution determines its acceptance requirements.",
  },
  {
    question: "Can Stepes handle confidential or privileged material?",
    answer:
      "Yes. Stepes supports confidential legal translation through controlled access, confidentiality requirements, restricted assignments, secure delivery, and client-specific workflows. Please disclose any special security, privilege, privacy, data-residency, or retention requirements before kickoff so the workflow can be reviewed and configured appropriately.",
  },
  {
    question: "Does Stepes provide legal advice?",
    answer:
      "No. Stepes provides translation, linguistic review, terminology management, and related language services. Our translators preserve the meaning of the source but do not provide legal opinions or determine legal validity, enforceability, or strategy. Clients should rely on qualified counsel for legal interpretation and advice.",
  },
  {
    question: "When is independent revision recommended?",
    answer:
      "Independent revision is generally recommended for high-risk content such as material contracts, court submissions, evidence, regulatory filings, external policies, and documents intended for execution or formal reliance. The appropriate review level depends on the document’s purpose, complexity, audience, deadline, and potential consequences.",
  },
  {
    question: "Can AI be used for legal translation?",
    answer:
      "AI can support document triage, internal understanding, recurring content, and high-volume review. Because raw AI output may contain terminology errors, omissions, inconsistencies, or unsupported wording, Stepes applies AI within controlled workflows and adds professional human validation where appropriate. High-consequence content may require expert human translation and independent revision.",
  },
  {
    question: "Can Stepes maintain terminology across related contracts?",
    answer:
      "Yes. Stepes can create and maintain client-specific legal glossaries, translation memories, approved precedent language, entity-name lists, and style guidance. These resources improve consistency across contracts, amendments, schedules, policies, jurisdictions, and future matters.",
  },
  {
    question: "How quickly can legal documents be translated?",
    answer:
      "Turnaround depends on the language pair, volume, document complexity, file format, intended use, review level, certification requirements, and qualified linguist availability. Urgent service is available for many projects. After reviewing the files and requirements, Stepes provides a realistic schedule and can propose phased or rolling delivery when useful.",
  },
  {
    question: "What is needed for an accurate quote?",
    answer:
      "Please provide the source files, source and target languages, intended use, deadline, preferred delivery format, certification needs, available references, security requirements, and any counsel-review process. When files cannot yet be shared, Stepes can prepare a preliminary estimate based on document details and clearly stated assumptions.",
  },
];

const languages = [
  "Arabic",
  "Chinese",
  "Dutch",
  "English",
  "French",
  "German",
  "Italian",
  "Japanese",
  "Korean",
  "Polish",
  "Portuguese",
  "Russian",
  "Spanish",
  "Swedish",
  "Turkish",
  "Vietnamese",
];

function Icon({ name, size = 24, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": true,
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    contract: <><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4" /><path d="M9 11h6M9 15h6" /></>,
    gavel: <><path d="m14 5 5 5" /><path d="m12 7 5 5" /><path d="m4 20 8-8" /><path d="m10 3 3-2 7 7-2 3z" /><path d="M3 21h9" /></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5" /><path d="m15.5 15.5 5 5" /><path d="M8 8h5M8 11h4" /></>,
    courthouse: <><path d="m3 10 9-6 9 6" /><path d="M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M4 18h16M3 21h18" /></>,
    building: <><path d="M4 21V5l8-2 8 2v16" /><path d="M9 21v-4h6v4M8 8h1m6 0h1M8 12h1m6 0h1" /></>,
    shieldCheck: <><path d="M12 3 20 6v6c0 4.5-3.2 7.5-8 9-4.8-1.5-8-4.5-8-9V6z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    lightbulb: <><path d="M9 18h6M10 22h4" /><path d="M8.3 15.5A7 7 0 1 1 15.7 15.5c-.8.7-1.2 1.4-1.2 2.5h-5c0-1.1-.4-1.8-1.2-2.5Z" /></>,
    certificate: <><circle cx="12" cy="9" r="5" /><path d="m9 14-1 7 4-2 4 2-1-7" /><path d="m10.3 9 1.2 1.2L14 7.8" /></>,
    balance: <><path d="M12 3v17M5 6h14M8 6 4 13h8zM16 6l-4 7h8zM8 21h8" /></>,
    terms: <><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h5M8 16h7" /><circle cx="17" cy="12" r="2.5" /></>,
    documentCheck: <><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4" /><path d="m9 14 2 2 4-5" /></>,
    route: <><circle cx="6" cy="5" r="2" /><circle cx="18" cy="19" r="2" /><path d="M8 5h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1a3 3 0 0 0-3 3v1" /></>,
    book: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v17H7.5A3.5 3.5 0 0 0 4 22z" /><path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H12v17h4.5A3.5 3.5 0 0 1 20 22z" /></>,
    memory: <><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M9 1v3m6-3v3M9 20v3m6-3v3M1 9h3m-3 6h3m16-6h3m-3 6h3" /><path d="M9 9h6v6H9z" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    feedback: <><path d="M4 4h16v12H8l-4 4z" /><path d="M8 8h8M8 12h5" /></>,
    briefcase: <><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V4h6v3M3 12h18M10 12v2h4v-2" /></>,
    legalTeam: <><circle cx="8" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-4 2-6 5-6s5 2 5 6M14 20c0-3 1.4-4.5 3.5-4.5S21 17 21 20" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" /></>,
    users: <><circle cx="9" cy="8" r="3" /><path d="M3 20c0-4 2.5-6 6-6s6 2 6 6" /><circle cx="17" cy="9" r="2" /><path d="M15 15c3.5 0 6 1.5 6 5" /></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5" /><path d="M5 20h14" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  };

  return <svg {...common}>{paths[name] || paths.documentCheck}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`legal-editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={18} />
    </a>
  );
}

function SectionIntro({ eyebrow, title, description, align = "left", dark = false }) {
  return (
    <div className={`legal-section-intro legal-section-intro--${align}`}>
      {eyebrow ? <div className={`legal-eyebrow ${dark ? "legal-eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

function HeroLineArt() {
  return (
    <div className="legal-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520" role="img">
        <defs>
          <linearGradient id="legalBlush" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F8EAF1" />
          </linearGradient>
          <filter id="legalSoftShadow" x="-20%" y="-20%" width="140%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#2D2530" floodOpacity="0.10" />
          </filter>
        </defs>

        <circle cx="487" cy="90" r="58" fill="#F4DDE8" opacity="0.9" />
        <circle cx="92" cy="404" r="38" fill="#F6E6ED" />
        <path d="M42 157c77-79 161-114 252-106 105 8 188 64 249 166" fill="none" stroke="#E7D8E0" strokeWidth="2" strokeDasharray="7 10" />

        <g filter="url(#legalSoftShadow)">
          <rect x="102" y="64" width="366" height="398" rx="28" fill="url(#legalBlush)" stroke="#D9D2DB" strokeWidth="2" />
          <path d="M378 64h62c15 0 28 13 28 28v62z" fill="#F1E8ED" stroke="#D9D2DB" strokeWidth="2" />
          <path d="M378 64v90h90" fill="none" stroke="#D9D2DB" strokeWidth="2" />
        </g>

        <g fill="none" stroke="#68636E" strokeLinecap="round" strokeLinejoin="round">
          <path d="M160 134h144" strokeWidth="6" />
          <path d="M160 164h224" strokeWidth="3" opacity="0.7" />
          <path d="M160 188h184" strokeWidth="3" opacity="0.55" />
          <path d="M160 212h208" strokeWidth="3" opacity="0.55" />
          <path d="M160 348h110" strokeWidth="3" opacity="0.55" />
          <path d="M160 372h188" strokeWidth="3" opacity="0.55" />
          <path d="M160 396h142" strokeWidth="3" opacity="0.55" />
        </g>

        <g transform="translate(190 236)" fill="none" stroke="#C11D63" strokeLinecap="round" strokeLinejoin="round">
          <path d="M90 0v92" strokeWidth="4" />
          <path d="M25 18h130" strokeWidth="4" />
          <path d="M56 18 22 70h68z" strokeWidth="3" />
          <path d="m124 18-34 52h68z" strokeWidth="3" />
          <path d="M60 100h60" strokeWidth="4" />
        </g>

        <g transform="translate(395 275)">
          <circle cx="74" cy="74" r="68" fill="#FFFFFF" stroke="#D9D2DB" strokeWidth="2" />
          <circle cx="74" cy="74" r="50" fill="none" stroke="#6E6873" strokeWidth="2.2" />
          <path d="M24 74h100M74 24c22 27 22 73 0 100M74 24c-22 27-22 73 0 100" fill="none" stroke="#6E6873" strokeWidth="2" />
          <path d="M35 45c20 12 58 12 78 0M35 103c20-12 58-12 78 0" fill="none" stroke="#6E6873" strokeWidth="2" opacity="0.75" />
          <circle cx="109" cy="36" r="8" fill="#C11D63" />
          <circle cx="31" cy="87" r="6" fill="#C11D63" opacity="0.72" />
          <path d="M109 36 92 57M31 87l24-7" fill="none" stroke="#C11D63" strokeWidth="2.5" />
        </g>

        <g transform="translate(66 286)">
          <rect x="0" y="0" width="116" height="80" rx="18" fill="#FFFFFF" stroke="#D9D2DB" strokeWidth="2" />
          <path d="M28 39h60M28 54h42" stroke="#6E6873" strokeWidth="3" strokeLinecap="round" />
          <circle cx="22" cy="20" r="6" fill="#C11D63" />
          <path d="m90 15 12 12M102 15 90 27" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
        </g>

        <g transform="translate(455 155)">
          <path d="M48 8 82 21v28c0 28-19 48-34 56-15-8-34-28-34-56V21z" fill="#FFFFFF" stroke="#6E6873" strokeWidth="2.5" />
          <path d="m31 52 12 12 24-29" fill="none" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({ item, index, open, onToggle }) {
  const panelId = `legal-faq-panel-${index}`;
  const buttonId = `legal-faq-button-${index}`;
  return (
    <div className={`legal-faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
        >
          <span>{item.question}</span>
          <span className="legal-faq-plus" aria-hidden="true" />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className="legal-faq-answer"
        hidden={!open}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function StepesLegalTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="legal-page">
      <style>{`
        .legal-page,
        .legal-page * {
          box-sizing: border-box;
        }

        .legal-page {
          --legal-magenta: ${COLORS.magenta};
          --legal-magenta-dark: ${COLORS.magentaDark};
          --legal-magenta-deep: ${COLORS.magentaDeep};
          --legal-blush: ${COLORS.blush};
          --legal-blush-text: ${COLORS.blushText};
          --legal-ink: ${COLORS.ink};
          --legal-body: ${COLORS.body};
          --legal-muted: ${COLORS.muted};
          --legal-border: ${COLORS.border};
          --legal-soft: ${COLORS.soft};
          --legal-dark: ${COLORS.dark};
          --legal-white: ${COLORS.white};
          width: 100%;
          min-width: 0;
          overflow-x: clip;
          background: var(--legal-white);
          color: var(--legal-ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .legal-page a {
          color: inherit;
          text-decoration: none;
        }

        .legal-page button,
        .legal-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .legal-shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .legal-section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .legal-section--dense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .legal-eyebrow {
          margin: 0 0 18px;
          color: var(--legal-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.35 !important;
          letter-spacing: 0.14em !important;
          text-transform: uppercase;
          opacity: 1 !important;
        }

        .legal-eyebrow--dark {
          color: var(--legal-blush-text) !important;
        }

        .legal-page h1,
        .legal-page h2,
        .legal-page h3,
        .legal-page p {
          margin-top: 0;
        }

        .legal-page h1,
        .legal-page h2,
        .legal-page h3 {
          color: inherit;
          font-weight: 600;
          letter-spacing: -0.025em;
          overflow-wrap: break-word;
        }

        .legal-page h1 {
          margin-bottom: 26px;
          font-size: 48px;
          line-height: 1.08;
        }

        .legal-page h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.18;
        }

        .legal-page h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
        }

        .legal-page p,
        .legal-page li {
          color: var(--legal-body);
          font-size: 16px;
          font-weight: 400;
        }

        .legal-section-intro {
          max-width: 820px;
          margin-bottom: 52px;
        }

        .legal-section-intro p {
          max-width: 760px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.7;
        }

        .legal-section-intro--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .legal-section-intro--center p {
          margin-left: auto;
          margin-right: auto;
        }

        .legal-button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          align-items: center;
        }

        .legal-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 24px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease;
        }

        .legal-btn--primary,
        .legal-btn--primary:link,
        .legal-btn--primary:visited,
        .legal-btn--primary:hover,
        .legal-btn--primary:active,
        .legal-btn--primary:focus,
        .legal-btn--primary:focus-visible,
        .legal-btn--primary *,
        .legal-btn--primary svg,
        .legal-btn--primary svg * {
          color: #FFFFFF !important;
          fill: none;
          stroke: #FFFFFF !important;
        }

        .legal-btn--primary {
          background: var(--legal-magenta);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
        }

        .legal-btn--primary:hover,
        .legal-btn--primary:focus-visible {
          background: var(--legal-magenta-dark);
          transform: translateY(-2px);
          box-shadow: 0 16px 32px rgba(159, 29, 85, 0.24);
        }

        .legal-btn--secondary {
          color: var(--legal-ink);
          background: var(--legal-white);
          border-color: #D8D2DA;
        }

        .legal-btn--secondary:hover,
        .legal-btn--secondary:focus-visible {
          border-color: #B7AEB9;
          background: #FAF9FB;
          transform: translateY(-2px);
        }

        .legal-btn:focus-visible,
        .legal-editorial-link:focus-visible,
        .legal-faq-item button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 4px;
        }

        .legal-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 44px;
          color: var(--legal-magenta) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-editorial-link span,
        .legal-editorial-link svg {
          color: inherit !important;
          stroke: currentColor !important;
        }

        .legal-editorial-link span {
          min-width: 0;
          overflow-wrap: anywhere;
        }

        .legal-editorial-link svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .legal-editorial-link:hover svg,
        .legal-editorial-link:focus-visible svg {
          transform: translateX(4px);
        }

        .legal-hero {
          position: relative;
          padding-top: 100px;
          padding-bottom: 100px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FCFBFC 100%);
          overflow: hidden;
        }

        .legal-hero::after {
          content: "";
          position: absolute;
          top: -140px;
          right: -140px;
          width: 440px;
          height: 440px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.06), rgba(193, 29, 99, 0));
          pointer-events: none;
        }

        .legal-hero-grid {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(460px, 0.98fr);
          gap: 64px;
          align-items: center;
        }

        .legal-hero-copy {
          max-width: 690px;
        }

        .legal-hero-copy > p {
          max-width: 660px;
          margin-bottom: 34px;
          color: var(--legal-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-hero-art {
          width: 100%;
          min-width: 0;
          padding: 18px;
          border: 1px solid #E8E2E8;
          border-radius: 30px;
          background: linear-gradient(145deg, #FBF8FA 0%, #F6F2F5 100%);
          box-shadow: 0 24px 60px rgba(37, 29, 39, 0.08);
        }

        .legal-hero-art svg {
          display: block;
          width: 100%;
          height: auto;
        }

        .legal-proof-band {
          border-top: 1px solid var(--legal-border);
          border-bottom: 1px solid var(--legal-border);
          background: var(--legal-white);
        }

        .legal-proof-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          align-items: stretch;
        }

        .legal-proof-item {
          min-height: 92px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 22px 14px;
          text-align: center;
          color: var(--legal-ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-overview-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 88px;
          align-items: start;
        }

        .legal-overview-heading {
          position: sticky;
          top: 32px;
        }

        .legal-overview-heading p {
          max-width: 410px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.7;
        }

        .legal-overview-copy {
          padding-top: 2px;
          border-top: 1px solid var(--legal-border);
        }

        .legal-overview-copy > p {
          margin: 0;
          padding: 30px 0;
          font-size: 17px;
          line-height: 1.75;
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-overview-copy strong {
          color: var(--legal-ink);
          font-weight: 600;
        }

        .legal-services {
          background: var(--legal-soft);
        }

        .legal-service-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 56px;
          border-top: 1px solid #DAD4DC;
        }

        .legal-service-row {
          min-width: 0;
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 20px;
          padding: 34px 0 32px;
          border-bottom: 1px solid #DAD4DC;
        }

        .legal-icon-box {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 15px;
          color: var(--legal-magenta);
          background: var(--legal-white);
          border: 1px solid #E2DCE3;
        }

        .legal-service-row h3 {
          margin-bottom: 10px;
          font-size: 22px;
        }

        .legal-service-row p {
          margin-bottom: 12px;
          line-height: 1.68;
        }

        .legal-service-links {
          display: flex;
          flex-wrap: wrap;
          gap: 2px 22px;
          align-items: center;
        }

        .legal-dark-section {
          color: var(--legal-white);
          background: var(--legal-dark);
        }

        .legal-dark-section h2,
        .legal-dark-section h3 {
          color: var(--legal-white);
        }

        .legal-dark-section p,
        .legal-dark-section li {
          color: #D6D0D9;
        }

        .legal-expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }

        .legal-expertise-item {
          min-height: 245px;
          padding: 38px;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .legal-expertise-item .legal-dark-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          border-radius: 14px;
          color: var(--legal-blush-text);
          background: rgba(242, 167, 198, 0.08);
          border: 1px solid rgba(242, 167, 198, 0.18);
        }

        .legal-expertise-item p {
          margin-bottom: 0;
          line-height: 1.7;
        }

        .legal-workflow {
          background: var(--legal-white);
        }

        .legal-workflow-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--legal-border);
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-workflow-grid::before {
          content: "";
          position: absolute;
          top: 61px;
          left: 9%;
          right: 9%;
          height: 1px;
          background: #D8D2DA;
          z-index: 0;
        }

        .legal-workflow-step {
          position: relative;
          z-index: 1;
          min-width: 0;
          padding: 36px 28px 40px;
        }

        .legal-workflow-step + .legal-workflow-step {
          border-left: 1px solid var(--legal-border);
        }

        .legal-workflow-number {
          width: 50px;
          height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          border: 1px solid #D3CCD5;
          border-radius: 50%;
          color: var(--legal-magenta);
          background: var(--legal-white);
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }

        .legal-workflow-label {
          margin-bottom: 10px;
          color: var(--legal-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-workflow-step h3 {
          margin-bottom: 14px;
          font-size: 21px;
        }

        .legal-workflow-step p {
          margin-bottom: 0;
          line-height: 1.68;
        }

        .legal-quality-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .legal-quality-sticky {
          position: sticky;
          top: 32px;
        }

        .legal-quality-sticky p {
          max-width: 420px;
          margin-bottom: 26px;
          font-size: 18px;
          line-height: 1.7;
        }

        .legal-quality-list {
          border-top: 1px solid var(--legal-border);
        }

        .legal-quality-row {
          display: grid;
          grid-template-columns: 54px minmax(190px, 0.7fr) minmax(0, 1.3fr);
          gap: 22px;
          align-items: start;
          padding: 28px 0;
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-quality-number {
          color: var(--legal-magenta);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.7;
        }

        .legal-quality-row h3 {
          margin: 0;
          font-size: 19px;
          line-height: 1.5;
        }

        .legal-quality-row p {
          margin: 0;
          line-height: 1.7;
        }

        .legal-security-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(420px, 1.1fr);
          gap: 74px;
          align-items: center;
        }

        .legal-security-copy > p {
          max-width: 620px;
          margin-bottom: 28px;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-security-copy .legal-editorial-link {
          color: var(--legal-blush-text) !important;
        }

        .legal-security-panel {
          padding: 36px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.04);
        }

        .legal-security-flow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 30px;
        }

        .legal-security-flow-item {
          position: relative;
          min-height: 124px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: space-between;
          padding: 20px;
          border-radius: 18px;
          color: var(--legal-white);
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .legal-security-flow-item svg {
          color: var(--legal-blush-text);
        }

        .legal-security-flow-item span {
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-security-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .legal-security-list li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          margin: 0;
          line-height: 1.55;
        }

        .legal-security-list svg {
          margin-top: 3px;
          color: var(--legal-blush-text);
        }

        .legal-knowledge-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--legal-border);
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-knowledge-item {
          padding: 34px 28px 36px;
        }

        .legal-knowledge-item + .legal-knowledge-item {
          border-left: 1px solid var(--legal-border);
        }

        .legal-knowledge-item .legal-icon-box {
          margin-bottom: 24px;
          background: var(--legal-blush);
          border-color: #F0DCE5;
        }

        .legal-knowledge-item h3 {
          font-size: 21px;
        }

        .legal-knowledge-item p {
          margin-bottom: 0;
          line-height: 1.68;
        }

        .legal-ai-section {
          background: var(--legal-soft);
        }

        .legal-ai-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(460px, 1.15fr);
          gap: 74px;
          align-items: center;
        }

        .legal-ai-copy > p {
          margin-bottom: 24px;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-ai-copy ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 20px;
          margin: 0 0 28px;
          padding: 0;
          list-style: none;
        }

        .legal-ai-copy li {
          display: grid;
          grid-template-columns: 14px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          line-height: 1.55;
        }

        .legal-ai-copy li::before {
          content: "";
          width: 6px;
          height: 6px;
          margin-top: 10px;
          border-radius: 50%;
          background: var(--legal-magenta);
        }

        .legal-ai-matrix {
          overflow: hidden;
          border: 1px solid #DDD6DF;
          border-radius: 28px;
          background: var(--legal-white);
          box-shadow: 0 18px 44px rgba(38, 30, 40, 0.06);
        }

        .legal-ai-matrix-header {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          padding: 24px 28px;
          color: var(--legal-white);
          background: var(--legal-magenta-deep);
        }

        .legal-ai-matrix-header span {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .legal-ai-matrix-row {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 0;
          border-top: 1px solid var(--legal-border);
        }

        .legal-ai-matrix-row > div {
          min-width: 0;
          padding: 24px 28px;
        }

        .legal-ai-matrix-row > div + div {
          border-left: 1px solid var(--legal-border);
        }

        .legal-ai-matrix-row h3 {
          margin-bottom: 8px;
          font-size: 18px;
          line-height: 1.4;
        }

        .legal-ai-matrix-row p {
          margin-bottom: 0;
          line-height: 1.6;
        }

        .legal-audience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .legal-audience-panel {
          padding: 42px;
          border: 1px solid var(--legal-border);
          border-radius: 28px;
          background: var(--legal-white);
        }

        .legal-audience-heading {
          display: grid;
          grid-template-columns: 50px minmax(0, 1fr);
          gap: 18px;
          align-items: center;
          margin-bottom: 20px;
        }

        .legal-audience-heading .legal-icon-box {
          background: var(--legal-blush);
          border-color: #F0DCE5;
        }

        .legal-audience-heading h3 {
          margin: 0;
        }

        .legal-audience-panel > p {
          margin-bottom: 24px;
          line-height: 1.7;
        }

        .legal-audience-panel ul {
          display: grid;
          gap: 12px;
          margin: 0 0 26px;
          padding: 0;
          list-style: none;
        }

        .legal-audience-panel li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          line-height: 1.55;
        }

        .legal-audience-panel li svg {
          margin-top: 3px;
          color: var(--legal-magenta);
        }

        .legal-enterprise-band {
          background: var(--legal-blush);
        }

        .legal-enterprise-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 80px;
          align-items: center;
        }

        .legal-enterprise-copy p {
          max-width: 570px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-enterprise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #E2CCD7;
          border-left: 1px solid #E2CCD7;
        }

        .legal-enterprise-item {
          min-height: 104px;
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr);
          gap: 14px;
          align-items: center;
          padding: 24px;
          border-right: 1px solid #E2CCD7;
          border-bottom: 1px solid #E2CCD7;
          color: var(--legal-ink);
          background: rgba(255, 255, 255, 0.46);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .legal-enterprise-item svg {
          color: var(--legal-magenta);
        }

        .legal-languages-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
          gap: 78px;
          align-items: start;
        }

        .legal-languages-copy p {
          max-width: 520px;
          margin-bottom: 26px;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-language-list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--legal-border);
          border-left: 1px solid var(--legal-border);
        }

        .legal-language-item {
          min-height: 62px;
          display: flex;
          align-items: center;
          padding: 15px 18px;
          border-right: 1px solid var(--legal-border);
          border-bottom: 1px solid var(--legal-border);
          color: var(--legal-ink);
          font-size: 16px;
          font-weight: 600;
        }

        .legal-related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 34px;
          border-top: 1px solid var(--legal-border);
        }

        .legal-related-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-related-item h3 {
          margin-bottom: 10px;
          font-size: 20px;
          line-height: 1.4;
        }

        .legal-related-item p {
          flex: 1 1 auto;
          margin-bottom: 14px;
          line-height: 1.65;
        }

        .legal-resources {
          background: var(--legal-soft);
        }

        .legal-resource-list {
          overflow: hidden;
          border-top: 1px solid #DAD4DC;
        }

        .legal-resource-row {
          display: grid;
          grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.2fr) 220px;
          gap: 34px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid #DAD4DC;
        }

        .legal-resource-row h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.45;
        }

        .legal-resource-row p {
          margin: 0;
          line-height: 1.65;
        }

        .legal-resource-row .legal-editorial-link {
          justify-self: end;
        }

        .legal-faq-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.64fr) minmax(0, 1.36fr);
          gap: 84px;
          align-items: start;
        }

        .legal-faq-heading {
          position: sticky;
          top: 32px;
        }

        .legal-faq-heading p {
          max-width: 380px;
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-faq-list {
          border-top: 1px solid var(--legal-border);
        }

        .legal-faq-item {
          border-bottom: 1px solid var(--legal-border);
        }

        .legal-faq-item h3 {
          margin: 0;
          font-size: inherit;
        }

        .legal-faq-item button {
          width: 100%;
          min-height: 82px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px;
          gap: 24px;
          align-items: center;
          padding: 24px 0;
          border: 0;
          color: var(--legal-ink);
          background: transparent;
          text-align: left;
          cursor: pointer;
        }

        .legal-faq-item button > span:first-child {
          font-size: 19px;
          font-weight: 600;
          line-height: 1.45;
        }

        .legal-faq-plus {
          position: relative;
          width: 22px;
          height: 22px;
          justify-self: end;
        }

        .legal-faq-plus::before,
        .legal-faq-plus::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 18px;
          height: 2px;
          border-radius: 2px;
          background: var(--legal-magenta);
          transform: translate(-50%, -50%);
          transition: transform 180ms ease;
        }

        .legal-faq-plus::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .legal-faq-item.is-open .legal-faq-plus::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .legal-faq-answer {
          max-width: 840px;
          padding: 0 48px 28px 0;
        }

        .legal-faq-answer p {
          margin-bottom: 0;
          line-height: 1.72;
        }

        .legal-final-wrap {
          position: relative;
          overflow: hidden;
          background: linear-gradient(118deg, #FFF9FC 0%, #FBEAF2 100%);
          border-top: 1px solid #E9D4DE;
        }

        .legal-final-wrap::before {
          content: "";
          position: absolute;
          left: -150px;
          bottom: -230px;
          width: 460px;
          height: 460px;
          border: 1px solid rgba(193, 29, 99, 0.12);
          border-radius: 50%;
          box-shadow: 0 0 0 52px rgba(193, 29, 99, 0.026), 0 0 0 104px rgba(193, 29, 99, 0.018);
          pointer-events: none;
        }

        .legal-final-layout {
          position: relative;
          z-index: 1;
          min-height: 480px;
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
          gap: 72px;
          align-items: center;
          padding-top: 76px;
          padding-bottom: 76px;
        }

        .legal-final-copy h2 {
          max-width: 680px;
        }

        .legal-final-copy > p {
          max-width: 680px;
          margin-bottom: 28px;
          font-size: 18px;
          line-height: 1.72;
        }

        .legal-final-details {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 22px;
          max-width: 690px;
          margin: 28px 0 0;
          padding: 24px 0 0;
          border-top: 1px solid rgba(159, 29, 85, 0.18);
          list-style: none;
        }

        .legal-final-details li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          margin: 0;
          line-height: 1.55;
        }

        .legal-final-details svg {
          margin-top: 3px;
          color: var(--legal-magenta);
        }

        .legal-final-photo {
          position: relative;
          min-height: 360px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          border-radius: 28px;
          background:
            linear-gradient(180deg, rgba(31, 28, 36, 0.02), rgba(31, 28, 36, 0.32)),
            linear-gradient(145deg, #E9E5E9 0%, #CFC8D0 100%);
          box-shadow: 0 24px 54px rgba(38, 30, 40, 0.12);
        }

        .legal-final-photo-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(31, 28, 36, 0.42);
        }

        .legal-final-photo-placeholder svg {
          width: 104px;
          height: 104px;
          stroke-width: 1.15;
        }

        .legal-final-photo-caption {
          position: relative;
          z-index: 1;
          width: 100%;
          margin: 0;
          padding: 26px 28px;
          color: var(--legal-white) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          background: linear-gradient(180deg, rgba(31, 28, 36, 0), rgba(31, 28, 36, 0.5));
        }

        @media (max-width: 1199px) {
          .legal-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .legal-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(400px, 0.9fr);
            gap: 46px;
          }

          .legal-page h1 {
            font-size: 46px;
          }

          .legal-proof-item {
            padding-left: 14px;
            padding-right: 14px;
          }

          .legal-overview-grid,
          .legal-quality-layout,
          .legal-languages-layout {
            gap: 58px;
          }

          .legal-security-layout,
          .legal-ai-layout,
          .legal-enterprise-layout {
            gap: 52px;
          }

          .legal-service-list {
            column-gap: 40px;
          }

          .legal-workflow-step {
            padding-left: 20px;
            padding-right: 20px;
          }

          .legal-knowledge-item {
            padding-left: 20px;
            padding-right: 20px;
          }

          .legal-resource-row {
            grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr) 190px;
            gap: 24px;
          }
        }

        @media (max-width: 980px) {
          .legal-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .legal-section {
            padding-top: 84px;
            padding-bottom: 84px;
          }

          .legal-section--dense {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .legal-page h1 {
            font-size: 42px;
          }

          .legal-page h2 {
            font-size: 32px;
          }

          .legal-page h3 {
            font-size: 22px;
          }

          .legal-hero {
            padding-top: 88px;
            padding-bottom: 88px;
          }

          .legal-hero-grid {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .legal-hero-copy {
            max-width: 760px;
          }

          .legal-hero-art {
            width: min(100%, 680px);
            margin: 0 auto;
          }

          .legal-proof-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .legal-proof-item:nth-child(5) {
            grid-column: span 2;
          }

          .legal-overview-grid,
          .legal-quality-layout,
          .legal-faq-layout {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .legal-overview-heading,
          .legal-quality-sticky,
          .legal-faq-heading {
            position: static;
          }

          .legal-overview-heading p,
          .legal-quality-sticky p,
          .legal-faq-heading p {
            max-width: 760px;
          }

          .legal-service-list {
            grid-template-columns: 1fr;
          }

          .legal-service-row {
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .legal-workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .legal-workflow-grid::before {
            display: none;
          }

          .legal-workflow-step:nth-child(3),
          .legal-workflow-step:nth-child(4) {
            border-top: 1px solid var(--legal-border);
          }

          .legal-workflow-step:nth-child(3) {
            border-left: 0;
          }

          .legal-security-layout,
          .legal-ai-layout,
          .legal-enterprise-layout,
          .legal-languages-layout {
            grid-template-columns: 1fr;
          }

          .legal-security-copy > p,
          .legal-ai-copy > p,
          .legal-enterprise-copy p,
          .legal-languages-copy p {
            max-width: 760px;
          }

          .legal-security-panel {
            max-width: 760px;
          }

          .legal-knowledge-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .legal-knowledge-item:nth-child(3) {
            border-left: 0;
            border-top: 1px solid var(--legal-border);
          }

          .legal-knowledge-item:nth-child(4) {
            border-top: 1px solid var(--legal-border);
          }

          .legal-ai-matrix {
            max-width: 820px;
          }

          .legal-related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .legal-resource-row {
            grid-template-columns: minmax(220px, 0.78fr) minmax(0, 1.22fr);
          }

          .legal-resource-row .legal-editorial-link {
            grid-column: 1 / -1;
            justify-self: start;
          }

          .legal-final-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .legal-final-copy {
            max-width: 760px;
          }

          .legal-final-photo {
            width: min(100%, 760px);
            min-height: 360px;
          }
        }

        @media (max-width: 767px) {
          .legal-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .legal-section {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .legal-section--dense {
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .legal-page h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .legal-page h2 {
            font-size: 30px;
            line-height: 1.22;
          }

          .legal-page h3 {
            font-size: 20px;
          }

          .legal-section-intro {
            margin-bottom: 38px;
          }

          .legal-section-intro p,
          .legal-hero-copy > p,
          .legal-overview-heading p,
          .legal-quality-sticky p,
          .legal-security-copy > p,
          .legal-ai-copy > p,
          .legal-enterprise-copy p,
          .legal-languages-copy p,
          .legal-faq-heading p,
          .legal-final-copy > p {
            font-size: 18px;
          }

          .legal-hero {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .legal-hero-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .legal-hero-copy {
            max-width: 680px;
          }

          .legal-hero-art {
            max-width: 600px;
            margin: 0 auto;
          }

          .legal-button-row {
            align-items: stretch;
          }

          .legal-btn {
            min-height: 52px;
            flex: 1 1 220px;
          }

          .legal-proof-grid {
            grid-template-columns: 1fr;
          }

          .legal-proof-grid {
            gap: 0;
          }

          .legal-proof-item,
          .legal-proof-item:nth-child(5) {
            min-height: 68px;
            grid-column: auto;
            padding-top: 18px;
            padding-bottom: 18px;
            border-top: 1px solid var(--legal-border);
          }

          .legal-proof-item:first-child {
            border-top: 0;
          }

          .legal-overview-copy > p {
            padding-top: 24px;
            padding-bottom: 24px;
          }

          .legal-service-row {
            grid-template-columns: 48px minmax(0, 1fr);
            gap: 16px;
          }

          .legal-icon-box {
            width: 44px;
            height: 44px;
          }

          .legal-expertise-grid,
          .legal-audience-grid,
          .legal-related-grid {
            grid-template-columns: 1fr;
          }

          .legal-expertise-item {
            min-height: 0;
            padding: 30px;
          }

          .legal-workflow-grid {
            grid-template-columns: 1fr;
            border-top: 0;
          }

          .legal-workflow-step,
          .legal-workflow-step:nth-child(3),
          .legal-workflow-step:nth-child(4) {
            display: grid;
            grid-template-columns: 52px minmax(0, 1fr);
            gap: 16px;
            padding: 28px 0;
            border-top: 1px solid var(--legal-border);
            border-left: 0;
          }

          .legal-workflow-step:last-child {
            border-bottom: 0;
          }

          .legal-workflow-number {
            width: 46px;
            height: 46px;
            margin: 0;
          }

          .legal-workflow-content {
            min-width: 0;
          }

          .legal-quality-row {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px 16px;
            padding: 24px 0;
          }

          .legal-quality-row p {
            grid-column: 2;
          }

          .legal-security-panel {
            padding: 26px;
          }

          .legal-security-flow {
            grid-template-columns: 1fr;
          }

          .legal-security-flow-item {
            min-height: 86px;
            flex-direction: row;
            align-items: center;
          }

          .legal-security-list {
            grid-template-columns: 1fr;
          }

          .legal-knowledge-grid {
            grid-template-columns: 1fr;
          }

          .legal-knowledge-item,
          .legal-knowledge-item:nth-child(3),
          .legal-knowledge-item:nth-child(4) {
            border-left: 0;
            border-top: 1px solid var(--legal-border);
          }

          .legal-knowledge-item:first-child {
            border-top: 0;
          }

          .legal-ai-copy ul {
            grid-template-columns: 1fr;
          }

          .legal-ai-matrix-header {
            display: none;
          }

          .legal-ai-matrix-row {
            grid-template-columns: 1fr;
          }

          .legal-ai-matrix-row > div + div {
            border-left: 0;
            border-top: 1px solid var(--legal-border);
            background: #FAF8FA;
          }

          .legal-ai-matrix-row > div:first-child::before,
          .legal-ai-matrix-row > div:last-child::before {
            display: block;
            margin-bottom: 8px;
            color: var(--legal-magenta);
            font-size: 11px;
            font-weight: 600;
            line-height: 1.35;
            letter-spacing: 0.14em;
            text-transform: uppercase;
          }

          .legal-ai-matrix-row > div:first-child::before {
            content: "Use Case";
          }

          .legal-ai-matrix-row > div:last-child::before {
            content: "Recommended Control";
          }

          .legal-audience-panel {
            padding: 32px 28px;
          }

          .legal-enterprise-grid {
            grid-template-columns: 1fr;
          }

          .legal-enterprise-item {
            min-height: 84px;
          }

          .legal-language-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .legal-resource-row {
            grid-template-columns: 1fr;
            gap: 10px;
            align-items: start;
            padding: 26px 0;
          }

          .legal-resource-row .legal-editorial-link {
            grid-column: auto;
            margin-top: 4px;
          }

          .legal-faq-item button {
            min-height: 76px;
            gap: 16px;
          }

          .legal-faq-item button > span:first-child {
            font-size: 18px;
          }

          .legal-faq-answer {
            padding-right: 0;
          }

          .legal-final-layout {
            grid-template-columns: 1fr;
            gap: 42px;
            padding-top: 64px;
            padding-bottom: 64px;
          }

          .legal-final-photo {
            min-height: 320px;
          }
        }

        @media (max-width: 479px) {
          .legal-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .legal-page h1 {
            font-size: 38px;
          }

          .legal-hero-art {
            padding: 8px;
            border-radius: 24px;
          }

          .legal-btn {
            width: 100%;
            flex-basis: 100%;
          }

          .legal-service-row {
            grid-template-columns: 1fr;
          }

          .legal-service-row .legal-icon-box {
            margin-bottom: 2px;
          }

          .legal-service-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 0;
          }

          .legal-expertise-item {
            padding: 28px 24px;
          }

          .legal-workflow-step,
          .legal-workflow-step:nth-child(3),
          .legal-workflow-step:nth-child(4) {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 14px;
          }

          .legal-quality-row {
            grid-template-columns: 34px minmax(0, 1fr);
          }

          .legal-security-panel {
            padding: 22px;
            border-radius: 22px;
          }

          .legal-ai-matrix-row > div {
            padding: 22px;
          }

          .legal-audience-panel {
            padding: 28px 22px;
            border-radius: 24px;
          }

          .legal-audience-heading {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 14px;
          }

          .legal-language-list {
            grid-template-columns: 1fr 1fr;
          }

          .legal-language-item {
            padding-left: 14px;
            padding-right: 14px;
          }

          .legal-final-layout {
            padding-top: 58px;
            padding-bottom: 58px;
          }

          .legal-final-details {
            grid-template-columns: 1fr;
          }

          .legal-final-photo {
            min-height: 270px;
            border-radius: 24px;
          }

          .legal-final-photo-caption {
            padding: 22px;
          }
        }
      `}</style>

      <main>
        <section className="legal-hero">
          <div className="legal-shell legal-hero-grid">
            <div className="legal-hero-copy">
              <h1>Legal Translation Services for Global Business and Legal Matters</h1>
              <p>
                Translate high-stakes legal content with the accuracy, confidentiality, and subject-matter expertise it demands. Stepes supports law firms, corporate legal departments, compliance teams, government organizations, and global businesses in more than 100 languages.
              </p>
              <div className="legal-button-row">
                <a className="legal-btn legal-btn--primary" href="https://www.stepes.com/contact-us/">
                  <span>Talk to a Legal Translation Expert</span>
                  <Icon name="arrow" size={18} />
                </a>
                <a className="legal-btn legal-btn--secondary" href="https://app.stepes.com/quote/">
                  Get a Quote
                </a>
              </div>
            </div>
            <HeroLineArt />
          </div>
        </section>

        <section className="legal-proof-band" aria-label="Legal translation proof points">
          <div className="legal-shell legal-proof-grid">
            <div className="legal-proof-item">ISO 17100 Translation Processes</div>
            <div className="legal-proof-item">ISO 9001 Quality Management</div>
            <div className="legal-proof-item">100+ Languages</div>
            <div className="legal-proof-item">AI + Expert Human Review</div>
            <div className="legal-proof-item">Secure Enterprise Workflows</div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-shell legal-overview-grid">
            <div className="legal-overview-heading">
              <div className="legal-eyebrow">High-Stakes Content</div>
              <h2>Legal Translation Built Around Intended Use and Risk</h2>
              <p>
                Legal documents define obligations, establish rights, preserve evidence, and guide decisions with regulatory, financial, or legal consequences.
              </p>
            </div>
            <div className="legal-overview-copy">
              <p>
                <strong>More than bilingual fluency.</strong> Effective legal translation requires knowledge of the document’s purpose, legal subject matter, intended audience, and the legal systems involved.
              </p>
              <p>
                <strong>Control at the detail level.</strong> Qualified linguists preserve defined terms, document structure, cross-references, names, dates, numbers, qualifications, and other details that may affect interpretation.
              </p>
              <p>
                <strong>A workflow that fits the matter.</strong> Stepes supports both one-time projects and ongoing multilingual programs, tailoring the process to intended use, risk, language combination, deadline, and review requirements.
              </p>
            </div>
          </div>
        </section>

        <section id="legal-services" className="legal-section legal-services">
          <div className="legal-shell">
            <SectionIntro
              eyebrow="Legal Matters We Support"
              title="Legal Translation Services for Complex Global Work"
              description="From commercial transactions and disputes to compliance, intellectual property, and official submissions, Stepes provides specialized language support across the legal lifecycle."
            />
            <div className="legal-service-list">
              {legalMatters.map((item) => (
                <article className="legal-service-row" key={item.title}>
                  <div className="legal-icon-box"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="legal-service-links">
                      <ArrowLink href={item.href}>{item.link}</ArrowLink>
                      {item.secondaryHref ? (
                        <ArrowLink href={item.secondaryHref}>{item.secondaryLink}</ArrowLink>
                      ) : null}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-dark-section">
          <div className="legal-shell">
            <SectionIntro
              title="Why Legal Translation Requires Professional Judgment"
              description="Legal language is shaped by legal systems, procedural rules, document conventions, and the specific purpose for which a translation will be used."
            />
            <div className="legal-expertise-grid">
              {expertisePoints.map((item) => (
                <article className="legal-expertise-item" key={item.title}>
                  <div className="legal-dark-icon"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
            <p style={{ maxWidth: 920, margin: "34px 0 0", lineHeight: 1.72 }}>
              Stepes provides linguistic and subject-matter expertise. Qualified client counsel remains responsible for interpreting applicable law and assessing legal validity, enforceability, and strategy.
            </p>
          </div>
        </section>

        <section className="legal-section legal-workflow">
          <div className="legal-shell">
            <SectionIntro
              eyebrow="Risk-Based Workflows"
              title="Apply the Right Level of Control to Each Legal Use Case"
              description="Stepes balances legal risk, turnaround, scale, and budget by selecting a workflow that reflects how the translation will be reviewed, relied upon, or submitted."
              align="center"
            />
            <div className="legal-workflow-grid">
              {workflows.map((item) => (
                <article className="legal-workflow-step" key={item.number}>
                  <div className="legal-workflow-number">{item.number}</div>
                  <div className="legal-workflow-content">
                    <div className="legal-workflow-label">{item.label}</div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-section--dense">
          <div className="legal-shell legal-quality-layout">
            <div className="legal-quality-sticky">
              <div className="legal-eyebrow">Quality Framework</div>
              <h2>Structured Quality from Scope Through Delivery</h2>
              <p>
                The legal translation process is configured around intended use, qualified resources, terminology, independent review, and document integrity.
              </p>
              <ArrowLink href="https://www.stepes.com/help/translation-quality-assurance-certifications/">
                Translation Quality and Certifications
              </ArrowLink>
            </div>
            <div className="legal-quality-list">
              {qualitySteps.map((step, index) => (
                <article className="legal-quality-row" key={step.title}>
                  <div className="legal-quality-number">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-dark-section">
          <div className="legal-shell legal-security-layout">
            <div className="legal-security-copy">
              <h2>Protect Sensitive Legal Content Across the Project Lifecycle</h2>
              <p>
                Legal translation may involve privileged, commercially sensitive, personal, or confidential information. Stepes supports controlled handling from file intake and assignment through review, delivery, and retention.
              </p>
              <p>
                Clients with specific privacy, data-location, vendor-management, or security requirements can review them with our team before project launch.
              </p>
              <ArrowLink href="https://www.stepes.com/security/">Review Stepes Security</ArrowLink>
            </div>
            <div className="legal-security-panel">
              <div className="legal-security-flow">
                <div className="legal-security-flow-item"><Icon name="upload" /><span>Controlled Intake</span></div>
                <div className="legal-security-flow-item"><Icon name="users" /><span>Restricted Assignment</span></div>
                <div className="legal-security-flow-item"><Icon name="lock" /><span>Secure Delivery</span></div>
              </div>
              <ul className="legal-security-list">
                {securityControls.map((item) => (
                  <li key={item}><Icon name="check" size={18} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-shell">
            <SectionIntro
              eyebrow="Terminology Governance"
              title="Build Consistency Across Matters, Documents, and Jurisdictions"
              description="Recurring legal language should be managed as an enterprise knowledge asset rather than recreated one document at a time."
              align="center"
            />
            <div className="legal-knowledge-grid">
              {knowledgeCapabilities.map((item) => (
                <article className="legal-knowledge-item" key={item.title}>
                  <div className="legal-icon-box"><Icon name={item.icon} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-ai-section">
          <div className="legal-shell legal-ai-layout">
            <div className="legal-ai-copy">
              <div className="legal-eyebrow">AI with Human Oversight</div>
              <h2>Use AI Where It Adds Value and Add Controls Where Risk Is Higher</h2>
              <p>
                AI can accelerate document triage, recurring content, and high-volume multilingual review. It can also produce terminology errors, omissions, inconsistent defined terms, altered numbers, or unsupported wording.
              </p>
              <ul>
                <li>Incorrect legal terminology</li>
                <li>Omitted exceptions or qualifications</li>
                <li>Inconsistent defined terms</li>
                <li>Misinterpreted negation</li>
                <li>Altered dates, names, or numbers</li>
                <li>Unsupported additions</li>
              </ul>
              <ArrowLink href="https://www.stepes.com/ai-enabled-legal-translation-services/">
                AI-Enabled Legal Translation Services
              </ArrowLink>
            </div>
            <div className="legal-ai-matrix">
              <div className="legal-ai-matrix-header">
                <span>Legal Use Case</span>
                <span>Recommended Translation Control</span>
              </div>
              <div className="legal-ai-matrix-row">
                <div><h3>Discovery triage and internal understanding</h3><p>Rapid assessment of relevance and general meaning.</p></div>
                <div><h3>Secure AI-assisted translation</h3><p>Human validation can be added for selected priority records.</p></div>
              </div>
              <div className="legal-ai-matrix-row">
                <div><h3>Recurring policies and established language</h3><p>High-volume content with controlled terminology and references.</p></div>
                <div><h3>AI + legal-linguist validation</h3><p>Professional post-editing, terminology checks, and structured QA.</p></div>
              </div>
              <div className="legal-ai-matrix-row">
                <div><h3>Material agreements and external legal content</h3><p>Documents requiring close linguistic control and accountability.</p></div>
                <div><h3>Expert human translation</h3><p>Independent revision can be added based on consequence and use.</p></div>
              </div>
              <div className="legal-ai-matrix-row">
                <div><h3>Court, regulatory, or official submission</h3><p>High-consequence content subject to institutional requirements.</p></div>
                <div><h3>Expert revision and required formalities</h3><p>Certification or other delivery requirements confirmed before kickoff.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-shell">
            <SectionIntro
              title="Built for Law Firms and In-House Legal Teams"
              description="Stepes gives legal professionals a clear operating model for multilingual matters, from individual case support to recurring enterprise programs."
              align="center"
            />
            <div className="legal-audience-grid">
              {audiences.map((audience) => (
                <article className="legal-audience-panel" key={audience.title}>
                  <div className="legal-audience-heading">
                    <div className="legal-icon-box"><Icon name={audience.icon} /></div>
                    <h3>{audience.title}</h3>
                  </div>
                  <p>{audience.description}</p>
                  <ul>
                    {audience.items.map((item) => (
                      <li key={item}><Icon name="check" size={17} /><span>{item}</span></li>
                    ))}
                  </ul>
                  <ArrowLink href={audience.href}>{audience.link}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-enterprise-band">
          <div className="legal-shell legal-enterprise-layout">
            <div className="legal-enterprise-copy">
              <div className="legal-eyebrow">Enterprise Legal Operations</div>
              <h2>Scale Multilingual Legal Work Without Losing Control</h2>
              <p>
                Centralized workflows help global legal teams reduce duplicate work, maintain approved terminology, coordinate multiple reviewers, manage urgent deadlines, and preserve useful project records across matters and regions.
              </p>
            </div>
            <div className="legal-enterprise-grid">
              {enterpriseCapabilities.map((item, index) => {
                const icons = ["upload", "briefcase", "globe", "clock", "users", "chart"];
                return <div className="legal-enterprise-item" key={item}><Icon name={icons[index]} /><span>{item}</span></div>;
              })}
            </div>
          </div>
        </section>

        <section className="legal-section legal-section--dense">
          <div className="legal-shell legal-languages-layout">
            <div className="legal-languages-copy">
              <h2>Legal Translation in More Than 100 Languages</h2>
              <p>
                Assignments are based on the required locale, legal context, subject matter, and audience. For multinational matters, Stepes coordinates terminology and review across all target languages.
              </p>
              <ArrowLink href="https://www.stepes.com/translation-languages/">Explore Translation Languages</ArrowLink>
            </div>
            <div className="legal-language-list" aria-label="Featured legal translation languages">
              {languages.map((language) => <div className="legal-language-item" key={language}>{language}</div>)}
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-shell">
            <SectionIntro
              title="Explore Related Legal Translation Solutions"
              description="Choose the dedicated service page that best matches your matter, content type, intended use, or delivery requirement."
            />
            <div className="legal-related-grid">
              {relatedServices.map((item) => (
                <article className="legal-related-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.href}>{item.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section legal-resources">
          <div className="legal-shell">
            <SectionIntro
              title="Practical Guidance for Multilingual Legal Content"
              description="Use these Stepes resources to evaluate translation workflows, prepare files, manage formal requirements, and apply AI responsibly."
            />
            <div className="legal-resource-list">
              {resources.map((resource) => (
                <article className="legal-resource-row" key={resource.title}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <ArrowLink href={resource.href}>Read {resource.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="legal-section">
          <div className="legal-shell legal-faq-layout">
            <div className="legal-faq-heading">
              <h2>Legal Translation FAQs</h2>
              <p>
                Review common questions about translator qualifications, confidentiality, certification, AI, independent revision, timelines, and project scoping.
              </p>
            </div>
            <div className="legal-faq-list">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  item={faq}
                  index={index}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="legal-final-wrap">
          <div className="legal-shell legal-final-layout">
            <div className="legal-final-copy">
              <h2>Discuss Your Legal Translation Requirements</h2>
              <p>
                Whether you need to translate one legal document, manage an urgent multilingual matter, or establish an enterprise legal translation program, Stepes can help you select the appropriate workflow.
              </p>
              <div className="legal-button-row">
                <a className="legal-btn legal-btn--primary" href="https://www.stepes.com/contact-us/">
                  <span>Talk to a Legal Translation Expert</span>
                  <Icon name="arrow" size={18} />
                </a>
                <a className="legal-btn legal-btn--secondary" href="https://app.stepes.com/quote/">
                  Get a Quote
                </a>
              </div>
              <ul className="legal-final-details" aria-label="Helpful project details">
                <li><Icon name="check" size={18} /><span>Source and target languages</span></li>
                <li><Icon name="check" size={18} /><span>Document type and intended use</span></li>
                <li><Icon name="check" size={18} /><span>Deadline and delivery format</span></li>
                <li><Icon name="check" size={18} /><span>Review, certification, and security requirements</span></li>
              </ul>
            </div>
            <div
              className="legal-final-photo"
              data-image-slot="stepes-team-photo"
              role="img"
              aria-label="Stepes legal translation team"
            >
              <div className="legal-final-photo-placeholder" aria-hidden="true">
                <Icon name="users" size={104} />
              </div>
              <p className="legal-final-photo-caption">Stepes Legal Translation Team</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
