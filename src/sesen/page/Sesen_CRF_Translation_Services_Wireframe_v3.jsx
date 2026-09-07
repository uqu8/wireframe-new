import React, { useState } from "react";

const LINKS = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  clinicalTrial: "https://www.sesen.com/clinical-trial-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  ecoa: "https://www.sesen.com/ecoa-translation-services/",
  pv: "https://www.sesen.com/pharmacovigilance-translation-services/",
  clinicalSoftware: "https://www.sesen.com/clinical-medical-software-localization-services/",
  clinicalAI: "https://www.sesen.com/clinical-trial-ai-workflows/",
  sesenGPT: "https://www.sesen.com/sesengpt/",
  quality: "https://www.sesen.com/quality-compliance-security/",
  cro: "https://www.sesen.com/cro-translation-services/",
};

const Icon = ({ name, size = 22 }) => {
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

  const icons = {
    languages: (
      <>
        <path d="M4 5h9" />
        <path d="M8.5 3v2" />
        <path d="M6.2 9.5c2.7-1.6 4.4-3.8 5.1-6.1" />
        <path d="M6.8 6.3c1 2.2 2.6 3.9 4.8 5.1" />
        <path d="M14 19l3.3-8 3.3 8" />
        <path d="M15.1 16.2h4.4" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3l7 3v5c0 4.7-2.8 8.3-7 10-4.2-1.7-7-5.3-7-10V6l7-3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    clinical: (
      <>
        <path d="M7 3h10v18H7z" />
        <path d="M9.5 7h5" />
        <path d="M9.5 11h5" />
        <path d="M9.5 15h3" />
      </>
    ),
    review: (
      <>
        <circle cx="10" cy="10" r="5" />
        <path d="M14 14l6 6" />
        <path d="M8.2 10l1.3 1.3 2.6-2.7" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 018 0v3" />
      </>
    ),
    protocol: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 11h6" />
        <path d="M9 15h6" />
      </>
    ),
    form: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h3" />
        <path d="M14 12h2" />
        <path d="M8 16h3" />
        <path d="M14 16h2" />
      </>
    ),
    system: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h4" />
        <path d="M7 12h7" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3l8 4-8 4-8-4 8-4z" />
        <path d="M4 12l8 4 8-4" />
        <path d="M4 17l8 4 8-4" />
      </>
    ),
    check: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12l2.2 2.2 4.8-5" />
      </>
    ),
    code: (
      <>
        <path d="M8 7l-5 5 5 5" />
        <path d="M16 7l5 5-5 5" />
        <path d="M14 4l-4 16" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="M15.5 15.5L21 21" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21" />
        <path d="M12 3C9.7 5.4 8.5 8.4 8.5 12s1.2 6.6 3.5 9" />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 4.5A3.5 3.5 0 006 8v8a3.5 3.5 0 003.5 3.5" />
        <path d="M14.5 4.5A3.5 3.5 0 0118 8v8a3.5 3.5 0 01-3.5 3.5" />
        <path d="M12 4v16" />
        <path d="M8 9h4" />
        <path d="M12 14h4" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="M15 8l4 4-4 4" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3 20a6 6 0 0112 0" />
        <circle cx="17" cy="9" r="2" />
        <path d="M16 14a5 5 0 015 5" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M18.5 9A7 7 0 006.7 6.6L4 9" />
        <path d="M5.5 15A7 7 0 0017.3 17.4L20 15" />
      </>
    ),
    plus: (
      <>
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </>
    ),
    minus: <path d="M5 12h14" />,
  };

  return <svg {...common}>{icons[name] || icons.check}</svg>;
};

const ArrowLink = ({ href, children }) => (
  <a className="sesen-crf-link" href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={18} />
  </a>
);

const ButtonLink = ({ href, children, secondary = false }) => (
  <a
    className={`sesen-crf-button ${secondary ? "sesen-crf-button--secondary" : ""}`}
    href={href}
  >
    <span>{children}</span>
    <Icon name="arrow" size={18} />
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, align = "center", technical = false }) => (
  <div
    className={`sesen-crf-section-heading sesen-crf-section-heading--${align} ${
      technical ? "sesen-crf-section-heading--technical" : ""
    }`}
  >
    {eyebrow ? <div className="sesen-crf-eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const trustItems = [
  {
    icon: "languages",
    label: "150+ LANGUAGES",
    text: "Global clinical trial translation",
  },
  {
    icon: "shield",
    label: "ISO-CERTIFIED QUALITY",
    text: "ISO 17100 · ISO 9001 · ISO 13485",
  },
  {
    icon: "clinical",
    label: "LIFE SCIENCES LINGUISTS",
    text: "Clinical and therapeutic-area expertise",
  },
  {
    icon: "review",
    label: "HUMAN QUALITY REVIEW",
    text: "Expert review with AI-assisted QA",
  },
  {
    icon: "lock",
    label: "SECURE WORKFLOWS",
    text: "Controlled handling for sensitive clinical content",
  },
];

const contentTypes = [
  {
    title: "Paper Case Report Forms",
    text: "Translate and format paper-based CRFs while maintaining clear form structure, field relationships, instructions, and usability for the intended study environment.",
  },
  {
    title: "Electronic Case Report Forms",
    text: "Localize user-facing eCRF content for electronic data capture workflows, including field-level language supplied through structured files, exports, or other agreed localization packages.",
  },
  {
    title: "Form and Section Titles",
    text: "Maintain consistent terminology across visits, forms, sections, assessments, and other navigational or contextual labels designated for translation.",
  },
  {
    title: "Field Labels, Questions, and Prompts",
    text: "Translate clinical questions and data-entry prompts with attention to protocol context, therapeutic terminology, intended response, and surrounding fields.",
  },
  {
    title: "Response Options",
    text: "Localize user-visible response text while respecting the controlled codes, values, and data structures established by the study.",
  },
  {
    title: "Instructions and Help Text",
    text: "Translate field instructions, explanatory notes, tooltips, completion guidance, and other content that helps investigators, site personnel, or authorized users enter study data correctly.",
  },
  {
    title: "Safety and Adverse-Event Fields",
    text: "Support user-facing language within CRF sections used to collect adverse event, serious adverse event, medication, medical history, and other safety-related study information.",
    link: { href: LINKS.pv, label: "Pharmacovigilance Translation Services" },
  },
  {
    title: "CRF Completion Guidelines",
    text: "Translate CRF completion instructions, data-entry guidance, supporting manuals, and related materials used to help study teams apply consistent completion practices.",
  },
  {
    title: "Annotated and Supporting CRF Content",
    text: "Where localization is required, support designated text within annotated CRFs, CRF specifications, field inventories, and other supporting materials used by clinical and data-management teams.",
  },
];

const workflow = [
  {
    n: "01",
    title: "Protocol & Reference Alignment",
    text: "Review the study context using the clinical protocol, CRF specifications, existing forms, sponsor glossaries, approved terminology, previous translations, style requirements, and related clinical documentation as applicable.",
    note: "Establish the meaning behind the fields before multilingual production begins.",
  },
  {
    n: "02",
    title: "Content & String Inventory",
    text: "Identify the content intended for localization and separate it from technical or reference-only elements, including forms, sections, labels, questions, response text, instructions, repeated strings, and identifiers.",
    note: "Define a controlled localization scope early and reduce ambiguity downstream.",
  },
  {
    n: "03",
    title: "Terminology & Translation Rules",
    text: "Organize study terminology using sponsor references, protocol language, therapeutic-area terminology, approved translations, translation memories, and project-specific glossaries.",
    note: "Keep the same clinical concept consistent across forms and study files.",
  },
  {
    n: "04",
    title: "CRF/eCRF Translation & Review",
    text: "Qualified life sciences linguists translate designated content with attention to clinical meaning, field context, terminology consistency, response relationships, and interface constraints where applicable.",
    note: "Professional human review provides an independent quality layer.",
  },
  {
    n: "05",
    title: "EDC-Ready Preparation",
    text: "Return approved translations in the agreed structure for implementation by the sponsor, CRO, clinical data management group, or eClinical technology team.",
    note: "Support structured spreadsheets, string tables, localization files, system exports, and other agreed exchange formats.",
  },
  {
    n: "06",
    title: "Contextual & Linguistic QA",
    text: "Where contextual materials are available, review implemented multilingual content through screenshots, test environments, exports, or other agreed review formats.",
    note: "Check truncation, ambiguity, response consistency, terminology, string placement, completeness, formatting, and display.",
  },
  {
    n: "07",
    title: "Version & Change Management",
    text: "Compare revised CRF content with previously translated versions, isolate changes, reuse approved language, and translate only the content that requires updating.",
    note: "Translation memories and terminology resources support continuity from one version to the next.",
  },
  {
    n: "08",
    title: "Study Deployment & Ongoing Updates",
    text: "Prepare finalized multilingual content for rollout and support subsequent protocol-driven revisions, new countries, additional languages, new forms, updated fields, and study extensions.",
    note: "Build a translation workflow for the life of the study—not a one-time handoff.",
  },
];

const edcItems = [
  {
    icon: "layers",
    title: "Structured Content Handling",
    text: "Translate content supplied through spreadsheets, string tables, exports, localization packages, or other agreed structured formats while protecting identifiers and nontranslatable system elements.",
  },
  {
    icon: "form",
    title: "Field-Level Localization",
    text: "Keep questions, labels, instructions, response text, and related field content aligned as multilingual versions are created.",
  },
  {
    icon: "system",
    title: "UI-Aware Language",
    text: "Where character limits, text expansion, field dimensions, or other display constraints are provided, translations can be reviewed with the target interface in mind.",
  },
  {
    icon: "data",
    title: "Implementation-Ready Handoff",
    text: "Return organized multilingual content to sponsor, CRO, data-management, or technology teams in the agreed implementation structure.",
  },
  {
    icon: "search",
    title: "In-Context Linguistic Review",
    text: "Review implemented translations against available interface context to identify issues that cannot always be detected in a source spreadsheet alone.",
  },
];

const connectedStudy = [
  {
    label: "Clinical Protocol",
    text: "Defines procedures, assessments, endpoints, visit schedules, study treatments, and other terminology that informs downstream CRF content.",
    link: LINKS.protocol,
    linkLabel: "Protocol Translation Services",
  },
  {
    label: "CRF / eCRF",
    text: "Applies approved terminology consistently across forms, fields, prompts, response options, and completion instructions.",
  },
  {
    label: "Safety Content",
    text: "Keeps drug names, medical history terms, adverse-event concepts, treatments, and other safety terminology aligned with related pharmacovigilance content.",
    link: LINKS.pv,
    linkLabel: "Pharmacovigilance Translation Services",
  },
  {
    label: "Clinical Assessments",
    text: "Identifies terminology dependencies while maintaining the appropriate translation or linguistic-validation methodology for eCOA, ePRO, ClinRO, ObsRO, and PerfO content.",
    link: LINKS.ecoa,
    linkLabel: "eCOA Translation Services",
  },
  {
    label: "Study Documentation",
    text: "Extends approved study language through translation memories, glossaries, and governed terminology across related clinical materials.",
    link: LINKS.clinicalTrial,
    linkLabel: "Clinical Trial Translation Services",
  },
];

const aiCapabilities = [
  {
    title: "Translation Memory & Approved Content Reuse",
    text: "Identify and reuse previously approved translations where appropriate to support consistency across repeated CRF language and recurring study versions.",
  },
  {
    title: "Terminology Intelligence",
    text: "Use technology to identify terminology, repeated concepts, preferred language, and inconsistencies across large or highly structured CRF content sets.",
  },
  {
    title: "AI-Assisted QA",
    text: "Help flag terminology, numbers, formatting, missing content, repeated strings, and cross-language consistency issues for human review.",
  },
  {
    title: "Change Detection",
    text: "Identify modified content between CRF versions and focus translation and review resources on the appropriate delta.",
  },
  {
    title: "Expert Human Review",
    text: "Professional clinical linguists remain responsible for evaluating meaning, terminology, clinical context, and final linguistic quality.",
  },
];

const qualityItems = [
  {
    title: "Professional Life Sciences Linguists",
    text: "Projects are assigned to qualified native-language translators and reviewers with relevant clinical, medical, and therapeutic-area experience.",
  },
  {
    title: "Independent Linguistic Review",
    text: "Translated content can receive independent professional review as part of a controlled translation workflow.",
  },
  {
    title: "Terminology Governance",
    text: "Study-specific terminology, glossaries, translation memories, preferred terms, and sponsor-approved language help maintain consistency across forms and versions.",
  },
  {
    title: "Documented Quality Control",
    text: "Linguistic, formatting, completeness, terminology, and technical checks are matched to the content and project requirements.",
  },
  {
    title: "ISO-Certified Quality Systems",
    text: "Sesen’s certified frameworks include ISO 17100 and ISO 9001:2015 for translation and quality management, plus ISO 13485:2016 for medical-device quality management.",
  },
  {
    title: "Secure Clinical Workflows",
    text: "Controlled access, secure infrastructure, documented project handling, and confidentiality practices support multilingual work involving sensitive clinical information.",
  },
];

const audiences = [
  {
    title: "Clinical Trial Sponsors",
    text: "Centralize CRF translation across studies, countries, languages, therapeutic areas, and amendment cycles while maintaining sponsor terminology and approved language assets.",
  },
  {
    title: "Contract Research Organizations",
    text: "Coordinate multilingual CRF requirements alongside study startup, country rollout, site operations, clinical documentation, and recurring study updates.",
    link: LINKS.cro,
    linkLabel: "CRO Translation Services",
  },
  {
    title: "Clinical Data Management Teams",
    text: "Translate user-facing CRF content while preserving the field structures, identifiers, terminology rules, and implementation requirements established for the study.",
  },
  {
    title: "eClinical and EDC Teams",
    text: "Receive organized multilingual content prepared for implementation and support linguistic QA after translations are placed into the target study environment.",
  },
];

const whyItems = [
  {
    title: "Clinical Trial Specialization",
    text: "CRF projects benefit from expertise and terminology that extend across the broader clinical content lifecycle.",
  },
  {
    title: "Protocol-Aligned Terminology",
    text: "Study protocols, glossaries, reference documents, sponsor terminology, and approved language can inform CRF translation from the start.",
  },
  {
    title: "Structured Localization Workflows",
    text: "Work with field-based and structured source content rather than forcing every eCRF project into a conventional document translation process.",
  },
  {
    title: "Version-Controlled Delivery",
    text: "Translation memories, terminology resources, version comparison, and delta workflows help keep evolving CRFs manageable across study amendments.",
  },
  {
    title: "Connected Clinical Content",
    text: "Support CRFs within a broader multilingual program spanning protocols, amendments, safety content, clinical software, and study documentation.",
  },
  {
    title: "Multilingual Scale",
    text: "Support regional and global clinical studies through centralized language management across more than 150 languages.",
  },
];

const relatedServices = [
  {
    title: "Clinical Trial Translation Services",
    text: "Manage multilingual clinical documentation, patient-facing materials, site content, digital trial content, amendments, and study communication through a connected clinical translation program.",
    href: LINKS.clinicalTrial,
    label: "Explore Clinical Trial Translation",
  },
  {
    title: "Protocol Translation Services",
    text: "Translate the clinical protocol and amendments that establish the procedures, terminology, assessments, and study requirements informing downstream CRF content.",
    href: LINKS.protocol,
    label: "Explore Protocol Translation",
  },
  {
    title: "eCOA Translation Services",
    text: "Support ePRO, ClinRO, ObsRO, PerfO, and other clinical outcome assessment content with workflows suited to linguistic validation, digital implementation, and in-context review.",
    href: LINKS.ecoa,
    label: "Explore eCOA Translation",
  },
  {
    title: "Pharmacovigilance Translation Services",
    text: "Extend beyond CRF safety fields into multilingual adverse-event documentation, safety reporting, aggregate safety content, risk communication, and post-market pharmacovigilance workflows.",
    href: LINKS.pv,
    label: "Explore Pharmacovigilance Translation",
  },
  {
    title: "Clinical & Medical Software Localization",
    text: "Localize broader clinical software interfaces, portals, applications, and medical technology environments where translation requirements extend beyond individual eCRF content.",
    href: LINKS.clinicalSoftware,
    label: "Explore Clinical Software Localization",
  },
];

const faqs = [
  {
    q: "What is CRF translation?",
    a: "Case Report Form translation is the translation and localization of user-facing CRF content for multilingual clinical studies. This can include form titles, section headings, field labels, questions, prompts, response-option display text, instructions, help text, and CRF completion guidance. CRF translation should account for the clinical protocol, study terminology, field context, and the structured environment in which the content is used.",
  },
  {
    q: "What is the difference between CRF and eCRF translation?",
    a: "A paper CRF is typically presented as a formatted physical or printable form, while an electronic CRF presents study data-entry content within an electronic data capture environment. Both require accurate clinical language and terminology consistency. eCRF translation can introduce additional requirements involving structured strings, field identifiers, UI constraints, implementation files, text expansion, and in-context linguistic QA.",
  },
  {
    q: "Which parts of an eCRF should be translated?",
    a: "The localization scope depends on the study and EDC configuration. User-facing elements such as form names, field labels, questions, response display text, instructions, and help content may require translation. Technical elements such as variable names, field IDs, internal codes, programming logic, mappings, and database identifiers may need to remain unchanged. Sesen establishes project-specific translation rules so each content type is handled appropriately.",
  },
  {
    q: "Should variable names, field IDs, and database codes be translated?",
    a: "Often, no. These elements may form part of the controlled technical structure of the study or EDC system. They should generally remain unchanged unless the sponsor, data-management team, or technology provider specifically designates them for localization. Sesen can protect nontranslatable technical elements while translating the corresponding user-facing content.",
  },
  {
    q: "Can Sesen work with content exported from an EDC system?",
    a: "Yes. Sesen can support structured eCRF content supplied through spreadsheets, string tables, system exports, localization packages, and other agreed exchange formats. The workflow can preserve identifiers and field relationships needed by the sponsor, CRO, clinical data management team, or eClinical provider for subsequent implementation.",
  },
  {
    q: "Does Sesen support CDISC or CDASH-based CRF content?",
    a: "Where a sponsor uses CDISC/CDASH conventions or another structured clinical data model, Sesen can align the localization workflow with the study's provided terminology, naming conventions, controlled elements, and localizable display content. Sesen's role is to preserve the intended language within the established study structure rather than redefine the underlying clinical data standard.",
  },
  {
    q: "How does Sesen keep CRF terminology aligned with the clinical protocol?",
    a: "Sesen can use the protocol, amendments, CRF specifications, sponsor glossaries, translation memories, existing translations, and related study references to establish terminology before and during translation. Approved terminology can then be maintained across forms, fields, languages, and subsequent study versions.",
  },
  {
    q: "How are CRF revisions and protocol amendments handled?",
    a: "When a CRF changes, Sesen can compare the revised source against previously translated versions, identify new and modified content, reuse approved translations where the source remains unchanged, and translate the required delta. Terminology resources and translation memories help maintain consistency across amendment cycles.",
  },
  {
    q: "Do CRF translations require back translation?",
    a: "Not automatically. The appropriate translation methodology depends on the sponsor's requirements, SOPs, intended use, content type, and study workflow. Many operational CRFs can be managed through professional translation, independent review, contextual QA, and final quality control. Back translation and reconciliation can be added when specifically required.",
  },
  {
    q: "How is CRF translation different from eCOA or ePRO translation?",
    a: "CRFs and eCRFs are structured tools used to collect clinical study data. eCOA and ePRO systems contain clinical outcome assessment instruments designed to measure patient, clinician, observer, or performance outcomes. COA instruments may require formal linguistic-validation methodologies designed to demonstrate conceptual equivalence across languages and cultures. These requirements are not automatically applicable to every CRF.",
    link: { href: LINKS.ecoa, label: "eCOA Translation Services" },
  },
  {
    q: "Can Sesen review translated CRFs after implementation in the EDC system?",
    a: "Yes, when suitable contextual materials or system access are available. Sesen can perform in-context linguistic QA using screenshots, review environments, exports, or other agreed materials to identify translation, truncation, terminology, placement, and display issues that may only become visible after implementation.",
  },
  {
    q: "Can Sesen support CRF translation across multiple countries and languages?",
    a: "Yes. Sesen supports clinical translation in more than 150 languages. Centralized project management, terminology governance, translation memories, structured QA, and version control help multinational study teams maintain consistency as CRFs are deployed across countries and updated during the study.",
  },
  {
    q: "Does Sesen translate adverse-event fields within CRFs?",
    a: "Yes. Sesen can translate user-facing CRF fields used to collect adverse events, serious adverse events, concomitant medications, medical history, and related safety information. Broader pharmacovigilance requirements—such as individual safety cases, safety narratives, aggregate reports, signal and risk content, and post-market safety communication—are supported through Sesen's dedicated pharmacovigilance workflow.",
    link: { href: LINKS.pv, label: "Pharmacovigilance Translation Services" },
  },
];

function HeroArtwork() {
  return (
    <div className="sesen-crf-hero-art" role="img" aria-label="Conceptual CRF localization workflow from protocol to multilingual clinical data">
      <svg viewBox="0 0 620 500" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="crfSoft" x1="0" x2="1">
            <stop offset="0" stopColor="#F7F9FD" />
            <stop offset="1" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>
        <rect x="14" y="18" width="592" height="464" rx="34" fill="url(#crfSoft)" />
        <path d="M82 91h122" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M416 411h116" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="544" cy="96" r="34" fill="#FFFFFF" stroke="#DDE4F2" />
        <path d="M527 96h34M544 79v34" stroke="#6F8BE1" strokeWidth="2" />

        <g transform="translate(74 124)">
          <rect width="148" height="196" rx="18" fill="#FFFFFF" stroke="#BFCBE8" strokeWidth="2" />
          <path d="M28 34h92M28 61h72M28 88h92" stroke="#7C8AA4" strokeWidth="3" strokeLinecap="round" />
          <path d="M28 123h14v14H28zM28 158h14v14H28z" stroke="#4B6FD8" strokeWidth="2" fill="none" />
          <path d="M55 130h60M55 165h46" stroke="#7C8AA4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="126" cy="18" r="20" fill="#EAF0FF" />
          <path d="M118 18h16M126 10v16" stroke="#3659BB" strokeWidth="2" />
        </g>

        <g transform="translate(238 76)">
          <rect width="278" height="286" rx="24" fill="#FFFFFF" stroke="#AFC0E6" strokeWidth="2" />
          <rect x="20" y="20" width="238" height="36" rx="10" fill="#F5F7FF" />
          <circle cx="40" cy="38" r="5" fill="#4B6FD8" />
          <path d="M56 38h96" stroke="#52627E" strokeWidth="3" strokeLinecap="round" />
          <g transform="translate(22 78)">
            <path d="M0 0h72" stroke="#7C8AA4" strokeWidth="3" strokeLinecap="round" />
            <rect y="14" width="108" height="34" rx="8" fill="#F7F9FD" stroke="#DDE4F2" />
            <path d="M14 31h66" stroke="#8B98AC" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M128 0h72" stroke="#7C8AA4" strokeWidth="3" strokeLinecap="round" />
            <rect x="128" y="14" width="108" height="34" rx="8" fill="#EAF0FF" stroke="#C7D4F1" />
            <path d="M142 31h64" stroke="#3659BB" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="translate(22 147)">
            <path d="M0 0h92" stroke="#7C8AA4" strokeWidth="3" strokeLinecap="round" />
            <rect y="14" width="236" height="42" rx="8" fill="#F7F9FD" stroke="#DDE4F2" />
            <path d="M14 35h84M112 35h46" stroke="#8B98AC" strokeWidth="2.5" strokeLinecap="round" />
          </g>
          <g transform="translate(22 220)">
            <circle cx="10" cy="10" r="9" fill="#EAF0FF" stroke="#9EB2E2" />
            <circle cx="89" cy="10" r="9" fill="#FFFFFF" stroke="#9EB2E2" />
            <path d="M27 10h42M106 10h52" stroke="#8B98AC" strokeWidth="2.5" strokeLinecap="round" />
          </g>
        </g>

        <g transform="translate(92 353)">
          <rect width="158" height="74" rx="18" fill="#17264D" />
          <path d="M24 24h72" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
          <path d="M24 45h104" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" opacity=".82" />
          <circle cx="130" cy="24" r="10" fill="#4B6FD8" />
        </g>

        <path d="M222 219h25" stroke="#4B6FD8" strokeWidth="2.4" strokeDasharray="5 6" />
        <path d="M247 219l-8-6v12z" fill="#4B6FD8" />
        <path d="M369 362v26h-119" stroke="#4B6FD8" strokeWidth="2.4" strokeDasharray="5 6" fill="none" />
        <path d="M250 388l8-6v12z" fill="#4B6FD8" />

        <g transform="translate(473 377)">
          <circle cx="34" cy="34" r="31" fill="#FFFFFF" stroke="#C4D0EB" strokeWidth="2" />
          <path d="M17 34h34M34 17v34" stroke="#4B6FD8" strokeWidth="2" />
          <circle cx="34" cy="34" r="14" fill="none" stroke="#6F8BE1" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ConnectedDataDiagram() {
  const stages = [
    { icon: "protocol", title: "Protocol", sub: "Study requirements" },
    { icon: "form", title: "CRF / eCRF", sub: "Data-collection language" },
    { icon: "system", title: "EDC / Study System", sub: "Multilingual implementation" },
    { icon: "data", title: "Clinical Data", sub: "Review, analysis & reporting" },
  ];

  return (
    <div className="sesen-crf-data-flow" role="img" aria-label="Protocol to clinical data workflow">
      <div className="sesen-crf-data-flow__stages">
        {stages.map((stage, index) => (
          <React.Fragment key={stage.title}>
            <div className="sesen-crf-data-flow__stage">
              <div className="sesen-crf-icon-tile">
                <Icon name={stage.icon} size={25} />
              </div>
              <strong>{stage.title}</strong>
              <span>{stage.sub}</span>
            </div>
            {index < stages.length - 1 ? (
              <div className="sesen-crf-data-flow__arrow" aria-hidden="true">
                <Icon name="arrow" size={22} />
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
      <div className="sesen-crf-data-flow__foundation">
        <span>SHARED TERMINOLOGY</span>
        <span>CONTROLLED VERSIONS</span>
        <span>MULTILINGUAL QA</span>
      </div>
    </div>
  );
}

function FAQItem({ item, open, onToggle, id }) {
  return (
    <div className={`sesen-crf-faq-item ${open ? "is-open" : ""}`}>
      <h3>
        <button
          type="button"
          className="sesen-crf-faq-question"
          aria-expanded={open}
          aria-controls={`sesen-crf-faq-panel-${id}`}
          id={`sesen-crf-faq-button-${id}`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className="sesen-crf-faq-control" aria-hidden="true">
            <Icon name={open ? "minus" : "plus"} size={18} />
          </span>
        </button>
      </h3>
      <div
        id={`sesen-crf-faq-panel-${id}`}
        role="region"
        aria-labelledby={`sesen-crf-faq-button-${id}`}
        hidden={!open}
        className="sesen-crf-faq-answer"
      >
        <p>{item.a}</p>
        {item.link ? <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink> : null}
      </div>
    </div>
  );
}

export default function SesenCRFTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-crf-page">
      <style>{`
        .sesen-crf-page {
          --sesen-crf-blue: #4B6FD8;
          --sesen-crf-blue-dark: #3659BB;
          --sesen-crf-mid-blue: #6F8BE1;
          --sesen-crf-soft-blue: #EAF0FF;
          --sesen-crf-pale-blue: #F5F7FF;
          --sesen-crf-navy: #17264D;
          --sesen-crf-ink: #111827;
          --sesen-crf-body: #46546D;
          --sesen-crf-muted: #68758B;
          --sesen-crf-border: #DDE4F2;
          --sesen-crf-divider: #E9EEF8;
          --sesen-crf-soft-bg: #F7F9FD;
          --sesen-crf-white: #FFFFFF;
          --sesen-crf-light-on-dark: #C8D6FF;
          color: var(--sesen-crf-body);
          background: var(--sesen-crf-white);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: hidden;
        }

        .sesen-crf-page * { box-sizing: border-box; }

        .sesen-crf-page a { color: inherit; }

        .sesen-crf-page h1,
        .sesen-crf-page h2,
        .sesen-crf-page h3,
        .sesen-crf-page p { margin-top: 0; }

        .sesen-crf-page h1,
        .sesen-crf-page h2,
        .sesen-crf-page h3,
        .sesen-crf-page p,
        .sesen-crf-page a { overflow-wrap: break-word; }

        .sesen-crf-page h1,
        .sesen-crf-page h2,
        .sesen-crf-page h3 {
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--sesen-crf-navy);
          font-weight: 500;
        }

        .sesen-crf-shell {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .sesen-crf-section {
          padding: 96px 0;
        }

        .sesen-crf-section--soft { background: var(--sesen-crf-soft-bg); }
        .sesen-crf-section--pale { background: var(--sesen-crf-pale-blue); }
        .sesen-crf-section--dark { background: var(--sesen-crf-navy); color: #DDE6F6; }

        .sesen-crf-eyebrow {
          margin-bottom: 16px;
          color: var(--sesen-crf-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .sesen-crf-section--dark .sesen-crf-eyebrow { color: var(--sesen-crf-light-on-dark); }

        .sesen-crf-section-heading {
          max-width: 820px;
          margin-bottom: 52px;
        }

        .sesen-crf-section-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
        .sesen-crf-section-heading--left { text-align: left; }

        .sesen-crf-section-heading h2 {
          margin-bottom: 20px;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-crf-section-heading p {
          margin-bottom: 0;
          color: var(--sesen-crf-body);
          font-size: 18px;
          line-height: 1.68;
        }

        .sesen-crf-section--dark .sesen-crf-section-heading h2 { color: #FFFFFF; }
        .sesen-crf-section--dark .sesen-crf-section-heading p { color: #D3DDF0; }

        .sesen-crf-button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border: 1px solid var(--sesen-crf-blue);
          border-radius: 999px;
          background: var(--sesen-crf-blue);
          color: #FFFFFF !important;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: .055em;
          text-transform: uppercase;
          transition: background .18s ease, border-color .18s ease, transform .18s ease;
        }

        .sesen-crf-button:hover { background: var(--sesen-crf-blue-dark); border-color: var(--sesen-crf-blue-dark); }
        .sesen-crf-button:active { transform: translateY(1px); }
        .sesen-crf-button:focus-visible,
        .sesen-crf-link:focus-visible,
        .sesen-crf-faq-question:focus-visible {
          outline: 3px solid rgba(75, 111, 216, .35);
          outline-offset: 4px;
        }

        .sesen-crf-button--secondary {
          border-color: #CBD6EB;
          background: #FFFFFF;
          color: var(--sesen-crf-ink) !important;
        }

        .sesen-crf-button--secondary:hover {
          border-color: #AFC0E6;
          background: var(--sesen-crf-pale-blue);
        }

        .sesen-crf-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sesen-crf-blue-dark) !important;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 650;
          text-decoration: none;
        }

        .sesen-crf-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .sesen-crf-link svg { transition: transform .18s ease; }
        .sesen-crf-link:hover svg { transform: translateX(3px); }

        /* HERO */
        .sesen-crf-hero {
          padding: 92px 0 88px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
          border-bottom: 1px solid var(--sesen-crf-divider);
        }

        .sesen-crf-hero__grid {
          display: grid;
          grid-template-columns: minmax(0, 1.03fr) minmax(430px, .97fr);
          gap: 72px;
          align-items: center;
        }

        .sesen-crf-hero__copy { max-width: 690px; }

        .sesen-crf-hero h1 {
          margin-bottom: 24px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .sesen-crf-hero__lead {
          margin-bottom: 18px;
          color: #293954;
          font-size: 20px;
          line-height: 1.6;
        }

        .sesen-crf-hero__support {
          max-width: 650px;
          margin-bottom: 32px;
          color: var(--sesen-crf-body);
          font-size: 17px;
          line-height: 1.68;
        }

        .sesen-crf-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .sesen-crf-hero-art {
          width: 100%;
          max-width: 610px;
          justify-self: end;
        }

        .sesen-crf-hero-art svg { display: block; width: 100%; height: auto; }

        /* TRUST */
        .sesen-crf-trust {
          border-bottom: 1px solid var(--sesen-crf-divider);
          background: #FFFFFF;
        }

        .sesen-crf-trust__grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
        }

        .sesen-crf-trust__item {
          min-height: 142px;
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr);
          gap: 13px;
          align-content: center;
          padding: 28px 22px;
          border-right: 1px solid var(--sesen-crf-divider);
        }

        .sesen-crf-trust__item:first-child { padding-left: 0; }
        .sesen-crf-trust__item:last-child { border-right: 0; padding-right: 0; }
        .sesen-crf-trust__icon { color: var(--sesen-crf-blue-dark); padding-top: 1px; }
        .sesen-crf-trust__item strong {
          display: block;
          margin-bottom: 5px;
          color: var(--sesen-crf-navy);
          font-size: 12px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .055em;
        }
        .sesen-crf-trust__item span {
          color: var(--sesen-crf-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        /* CONCEPT */
        .sesen-crf-concept-grid {
          display: grid;
          grid-template-columns: .88fr 1.12fr;
          gap: 68px;
          align-items: center;
        }

        .sesen-crf-concept-copy h2 {
          margin-bottom: 24px;
          font-size: 36px;
          line-height: 1.3;
        }

        .sesen-crf-concept-copy p { font-size: 17px; line-height: 1.72; }
        .sesen-crf-concept-copy p:last-child { margin-bottom: 0; }

        .sesen-crf-data-flow {
          padding: 32px;
          border: 1px solid var(--sesen-crf-border);
          border-radius: 28px;
          background: #FFFFFF;
          box-shadow: 0 18px 50px rgba(23, 38, 77, .055);
        }

        .sesen-crf-data-flow__stages {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
          align-items: center;
          gap: 12px;
        }

        .sesen-crf-data-flow__stage { min-width: 0; text-align: center; }
        .sesen-crf-icon-tile {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          margin: 0 auto 14px;
          border-radius: 14px;
          background: var(--sesen-crf-soft-blue);
          color: var(--sesen-crf-blue-dark);
        }
        .sesen-crf-data-flow__stage strong {
          display: block;
          margin-bottom: 5px;
          color: var(--sesen-crf-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 17px;
          line-height: 1.3;
          font-weight: 500;
        }
        .sesen-crf-data-flow__stage span {
          display: block;
          color: var(--sesen-crf-muted);
          font-size: 13px;
          line-height: 1.4;
        }
        .sesen-crf-data-flow__arrow { color: #9DB1DE; }
        .sesen-crf-data-flow__foundation {
          margin-top: 28px;
          padding-top: 22px;
          border-top: 1px solid var(--sesen-crf-divider);
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 9px 24px;
        }
        .sesen-crf-data-flow__foundation span {
          color: var(--sesen-crf-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        /* CONTENT TYPES */
        .sesen-crf-content-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-crf-divider);
          border-left: 1px solid var(--sesen-crf-divider);
        }

        .sesen-crf-content-item {
          min-height: 224px;
          padding: 30px 28px;
          border-right: 1px solid var(--sesen-crf-divider);
          border-bottom: 1px solid var(--sesen-crf-divider);
          background: #FFFFFF;
        }

        .sesen-crf-content-item h3 {
          margin-bottom: 13px;
          font-size: 22px;
          line-height: 1.3;
        }
        .sesen-crf-content-item p { margin-bottom: 18px; font-size: 16px; line-height: 1.68; }
        .sesen-crf-scope-note {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-scope-note strong {
          display: block;
          margin-bottom: 4px;
          color: var(--sesen-crf-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 18px;
          font-weight: 500;
        }
        .sesen-crf-scope-note span { display: block; font-size: 16px; line-height: 1.55; }

        /* CONTROLLED STRUCTURE */
        .sesen-crf-control-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid var(--sesen-crf-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sesen-crf-control-col { padding: 42px; }
        .sesen-crf-control-col + .sesen-crf-control-col {
          border-left: 1px solid var(--sesen-crf-divider);
          background: var(--sesen-crf-soft-bg);
        }
        .sesen-crf-control-col__head {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 26px;
        }
        .sesen-crf-control-col__head .sesen-crf-icon-tile { margin: 0; flex: 0 0 auto; }
        .sesen-crf-control-col h3 { margin: 0; font-size: 24px; line-height: 1.3; }
        .sesen-crf-check-list { display: grid; gap: 14px; margin: 0; padding: 0; list-style: none; }
        .sesen-crf-check-list li {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          color: var(--sesen-crf-body);
          font-size: 16px;
        }
        .sesen-crf-check-list svg { color: var(--sesen-crf-blue-dark); margin-top: 2px; }
        .sesen-crf-control-note {
          max-width: 850px;
          margin: 30px auto 0;
          text-align: center;
          font-size: 17px;
          color: var(--sesen-crf-body);
        }
        .sesen-crf-control-note strong { color: var(--sesen-crf-navy); font-weight: 650; }

        /* WORKFLOW */
        .sesen-crf-workflow { display: grid; gap: 0; }
        .sesen-crf-workflow-item {
          display: grid;
          grid-template-columns: 82px minmax(250px, .72fr) minmax(0, 1.28fr);
          gap: 28px;
          padding: 28px 0;
          border-top: 1px solid var(--sesen-crf-divider);
          align-items: start;
        }
        .sesen-crf-workflow-item:last-child { border-bottom: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-workflow-number {
          color: var(--sesen-crf-blue-dark);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 24px;
          line-height: 1.2;
          font-weight: 500;
        }
        .sesen-crf-workflow-item h3 { margin: 0; font-size: 23px; line-height: 1.35; }
        .sesen-crf-workflow-body p { margin-bottom: 8px; font-size: 16px; line-height: 1.68; }
        .sesen-crf-workflow-body span {
          display: block;
          color: var(--sesen-crf-muted);
          font-size: 16px;
          line-height: 1.58;
        }

        /* EDC */
        .sesen-crf-edc-grid {
          display: grid;
          grid-template-columns: minmax(330px, .8fr) minmax(0, 1.2fr);
          gap: 58px;
          align-items: start;
        }
        .sesen-crf-edc-intro { position: sticky; top: 32px; }
        .sesen-crf-edc-intro h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.3; }
        .sesen-crf-edc-intro p { margin-bottom: 26px; font-size: 17px; line-height: 1.7; }
        .sesen-crf-edc-list { border-top: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-edc-item {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 20px;
          padding: 27px 0;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-edc-item .sesen-crf-icon-tile { margin: 0; }
        .sesen-crf-edc-item h3 { margin-bottom: 8px; font-size: 21px; line-height: 1.32; }
        .sesen-crf-edc-item p { margin-bottom: 0; font-size: 16px; line-height: 1.66; }

        /* CONNECTED STUDY */
        .sesen-crf-connected {
          position: relative;
          max-width: 1080px;
          margin: 0 auto;
        }
        .sesen-crf-connected::before {
          content: "";
          position: absolute;
          left: 25px;
          top: 24px;
          bottom: 24px;
          width: 2px;
          background: #C8D5F0;
        }
        .sesen-crf-connected-item {
          position: relative;
          display: grid;
          grid-template-columns: 52px 210px minmax(0, 1fr) auto;
          gap: 22px;
          align-items: center;
          min-height: 112px;
          padding: 20px 0;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-connected-item:first-child { border-top: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-connected-node {
          width: 52px;
          height: 52px;
          display: grid;
          place-items: center;
          position: relative;
          z-index: 1;
          border-radius: 50%;
          border: 1px solid #B8C8EA;
          background: #FFFFFF;
          color: var(--sesen-crf-blue-dark);
        }
        .sesen-crf-connected-item h3 { margin: 0; font-size: 21px; }
        .sesen-crf-connected-item p { margin: 0; font-size: 16px; line-height: 1.65; }

        /* VERSION */
        .sesen-crf-version-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 68px;
          align-items: center;
        }
        .sesen-crf-version-copy h2 { margin-bottom: 22px; font-size: 36px; line-height: 1.3; }
        .sesen-crf-version-copy p { font-size: 17px; line-height: 1.7; }
        .sesen-crf-version-list { display: grid; gap: 13px; margin: 24px 0 0; padding: 0; list-style: none; }
        .sesen-crf-version-list li {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 10px;
          font-size: 16px;
        }
        .sesen-crf-version-list svg { color: var(--sesen-crf-blue-dark); margin-top: 2px; }
        .sesen-crf-version-visual {
          padding: 34px;
          border-radius: 28px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-crf-border);
          box-shadow: 0 18px 50px rgba(23, 38, 77, .045);
        }
        .sesen-crf-version-flow {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 13px;
          align-items: center;
        }
        .sesen-crf-version-box {
          min-height: 128px;
          display: grid;
          align-content: center;
          gap: 8px;
          padding: 18px;
          border-radius: 18px;
          background: var(--sesen-crf-soft-bg);
          text-align: center;
        }
        .sesen-crf-version-box--active { background: var(--sesen-crf-soft-blue); }
        .sesen-crf-version-box strong { color: var(--sesen-crf-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; }
        .sesen-crf-version-box span { color: var(--sesen-crf-muted); font-size: 13px; }
        .sesen-crf-version-arrow { color: #9EB2E2; }
        .sesen-crf-version-tags {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 22px;
        }
        .sesen-crf-version-tags span {
          padding: 12px 10px;
          border-top: 1px solid var(--sesen-crf-divider);
          color: var(--sesen-crf-blue-dark);
          text-align: center;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .05em;
          text-transform: uppercase;
        }

        /* AI */
        .sesen-crf-ai-layout {
          display: grid;
          grid-template-columns: .72fr 1.28fr;
          gap: 66px;
          align-items: start;
        }
        .sesen-crf-ai-intro h2 { margin-bottom: 22px; color: #FFFFFF; font-size: 36px; line-height: 1.3; }
        .sesen-crf-ai-intro p { margin-bottom: 25px; color: #D3DDF0; font-size: 17px; line-height: 1.7; }
        .sesen-crf-ai-links { display: flex; flex-wrap: wrap; gap: 16px 24px; }
        .sesen-crf-section--dark .sesen-crf-link { color: #D6E1FF !important; }
        .sesen-crf-ai-list {
          border-top: 1px solid rgba(255,255,255,.15);
        }
        .sesen-crf-ai-item {
          display: grid;
          grid-template-columns: 38px minmax(0, 1fr);
          gap: 18px;
          padding: 23px 0;
          border-bottom: 1px solid rgba(255,255,255,.15);
        }
        .sesen-crf-ai-marker {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(75, 111, 216, .25);
          color: var(--sesen-crf-light-on-dark);
        }
        .sesen-crf-ai-item h3 { margin-bottom: 6px; color: #FFFFFF; font-size: 20px; }
        .sesen-crf-ai-item p { margin-bottom: 0; color: #D3DDF0; font-size: 16px; line-height: 1.62; }
        .sesen-crf-ai-principle {
          margin-top: 32px;
          padding: 18px 20px;
          border-left: 2px solid var(--sesen-crf-mid-blue);
          color: #FFFFFF;
          font-size: 18px;
          line-height: 1.55;
          font-weight: 600;
        }

        /* QUALITY */
        .sesen-crf-quality-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 56px;
          border-top: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-quality-item {
          position: relative;
          min-height: 190px;
          padding: 30px 0 30px 34px;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-quality-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 34px;
          width: 16px;
          height: 2px;
          background: var(--sesen-crf-blue);
        }
        .sesen-crf-quality-item h3 { margin-bottom: 12px; font-size: 21px; }
        .sesen-crf-quality-item p { margin-bottom: 0; font-size: 16px; line-height: 1.66; }
        .sesen-crf-quality-link { margin-top: 30px; text-align: center; }

        /* REVIEW MODEL */
        .sesen-crf-review-layout {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 64px;
          align-items: center;
        }
        .sesen-crf-review-copy h2 { margin-bottom: 20px; font-size: 36px; line-height: 1.3; }
        .sesen-crf-review-copy p { font-size: 17px; line-height: 1.7; }
        .sesen-crf-review-model {
          padding: 34px;
          border-radius: 28px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-crf-border);
        }
        .sesen-crf-review-baseline {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
          align-items: stretch;
        }
        .sesen-crf-review-step {
          min-height: 110px;
          padding: 16px 12px;
          display: grid;
          place-items: center;
          align-content: center;
          gap: 7px;
          text-align: center;
          border-radius: 15px;
          background: var(--sesen-crf-soft-bg);
          color: var(--sesen-crf-navy);
        }
        .sesen-crf-review-step span {
          color: var(--sesen-crf-blue-dark);
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .1em;
        }
        .sesen-crf-review-step strong {
          font-size: 16px;
          line-height: 1.45;
          font-weight: 650;
        }
        .sesen-crf-review-plus {
          margin-top: 25px;
          padding-top: 22px;
          border-top: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-review-plus strong { display: block; margin-bottom: 13px; color: var(--sesen-crf-navy); font-size: 16px; }
        .sesen-crf-review-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .sesen-crf-review-tags span {
          padding: 8px 11px;
          border: 1px solid #CDD8EE;
          border-radius: 999px;
          background: #FFFFFF;
          color: var(--sesen-crf-body);
          font-size: 16px;
        }

        /* AUDIENCES */
        .sesen-crf-audience-list { border-top: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-audience-item {
          display: grid;
          grid-template-columns: 54px 270px minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-audience-icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: var(--sesen-crf-soft-blue);
          color: var(--sesen-crf-blue-dark);
        }
        .sesen-crf-audience-item h3 { margin: 0; font-size: 21px; }
        .sesen-crf-audience-item p { margin: 0; font-size: 16px; line-height: 1.65; }

        /* WHY */
        .sesen-crf-why-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 52px;
          border-top: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-why-item {
          display: grid;
          grid-template-columns: 26px minmax(0, 1fr);
          column-gap: 14px;
          align-content: start;
          min-height: 170px;
          padding: 28px 0;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-why-icon {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          margin-top: 1px;
          border: 1px solid #C8D4EB;
          border-radius: 50%;
          color: var(--sesen-crf-blue-dark);
        }
        .sesen-crf-why-item h3 { grid-column: 2; margin-bottom: 10px; font-size: 20px; }
        .sesen-crf-why-item p { grid-column: 2; margin-bottom: 0; font-size: 16px; line-height: 1.64; }

        /* RELATED */
        .sesen-crf-related-list { border-top: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-related-item {
          display: grid;
          grid-template-columns: 300px minmax(0, 1fr) 270px;
          gap: 34px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid var(--sesen-crf-divider);
        }
        .sesen-crf-related-item h3 { margin: 0; font-size: 21px; }
        .sesen-crf-related-item p { margin: 0; font-size: 16px; line-height: 1.65; }
        .sesen-crf-related-item .sesen-crf-link { justify-self: end; text-align: right; }

        /* FAQ */
        .sesen-crf-faq { max-width: 920px; margin: 0 auto; border-top: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-faq-item { border-bottom: 1px solid var(--sesen-crf-divider); }
        .sesen-crf-faq-item h3 { margin: 0; }
        .sesen-crf-faq-question {
          width: 100%;
          min-height: 82px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 22px 0;
          border: 0;
          background: transparent;
          color: var(--sesen-crf-navy);
          text-align: left;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
          cursor: pointer;
        }
        .sesen-crf-faq-control {
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border: 1px solid #C8D4EB;
          border-radius: 50%;
          color: var(--sesen-crf-blue-dark);
        }
        .sesen-crf-faq-answer { padding: 0 62px 26px 0; }
        .sesen-crf-faq-answer p { margin-bottom: 14px; font-size: 16px; line-height: 1.72; }

        /* CTA */
        .sesen-crf-cta-wrap { padding: 96px 0; }
        .sesen-crf-cta {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: center;
          padding: 56px 60px;
          border-radius: 30px;
          background: linear-gradient(135deg, #17264D 0%, #253F8F 100%);
          color: #D9E2F4;
        }
        .sesen-crf-cta h2 { margin-bottom: 16px; color: #FFFFFF; font-size: 36px; line-height: 1.3; }
        .sesen-crf-cta p { max-width: 790px; margin-bottom: 0; color: #D9E2F4; font-size: 17px; line-height: 1.68; }
        .sesen-crf-cta__actions { display: flex; gap: 12px; align-items: center; }
        .sesen-crf-cta .sesen-crf-button--secondary { background: #FFFFFF; border-color: #FFFFFF; }

        /* RESPONSIVE */
        @media (max-width: 1180px) {
          .sesen-crf-shell { width: min(1280px, calc(100% - 80px)); }
          .sesen-crf-hero__grid { grid-template-columns: 1fr .86fr; gap: 46px; }
          .sesen-crf-trust__grid { grid-template-columns: repeat(3, 1fr); }
          .sesen-crf-trust__item { border-bottom: 1px solid var(--sesen-crf-divider); }
          .sesen-crf-trust__item:nth-child(3) { border-right: 0; }
          .sesen-crf-trust__item:nth-child(4), .sesen-crf-trust__item:nth-child(5) { border-bottom: 0; }
          .sesen-crf-trust__item:first-child { padding-left: 22px; }
          .sesen-crf-trust__item:last-child { padding-right: 22px; }
          .sesen-crf-content-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-crf-related-item { grid-template-columns: 260px 1fr; }
          .sesen-crf-related-item .sesen-crf-link { grid-column: 2; justify-self: start; text-align: left; }
          .sesen-crf-cta { grid-template-columns: 1fr; }
          .sesen-crf-cta__actions { justify-content: flex-start; }
        }

        @media (max-width: 900px) {
          .sesen-crf-shell { width: calc(100% - 58px); }
          .sesen-crf-section { padding: 80px 0; }
          .sesen-crf-hero { padding: 78px 0 76px; }
          .sesen-crf-hero__grid,
          .sesen-crf-concept-grid,
          .sesen-crf-edc-grid,
          .sesen-crf-version-grid,
          .sesen-crf-ai-layout,
          .sesen-crf-review-layout { grid-template-columns: 1fr; gap: 44px; }
          .sesen-crf-hero-art { max-width: 650px; justify-self: center; }
          .sesen-crf-hero__copy { max-width: 760px; }
          .sesen-crf-hero__actions { max-width: 720px; }
          .sesen-crf-trust__grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-crf-trust__item,
          .sesen-crf-trust__item:nth-child(3),
          .sesen-crf-trust__item:nth-child(4) {
            border-right: 1px solid var(--sesen-crf-divider);
            border-bottom: 1px solid var(--sesen-crf-divider);
          }
          .sesen-crf-trust__item:nth-child(even) { border-right: 0; }
          .sesen-crf-trust__item:nth-child(5) {
            grid-column: 1 / -1;
            border-right: 0;
            border-bottom: 0;
          }
          .sesen-crf-edc-intro { position: static; }
          .sesen-crf-data-flow__stages { grid-template-columns: repeat(4, 1fr); gap: 16px; }
          .sesen-crf-data-flow__arrow { display: none; }
          .sesen-crf-control-col { padding: 34px; }
          .sesen-crf-workflow-item { grid-template-columns: 58px minmax(220px, .72fr) minmax(0, 1.28fr); gap: 20px; }
          .sesen-crf-connected-item { grid-template-columns: 52px 190px 1fr; }
          .sesen-crf-connected-item .sesen-crf-link { grid-column: 3; }
          .sesen-crf-audience-item { grid-template-columns: 54px 210px 1fr; }
          .sesen-crf-audience-item .sesen-crf-link { grid-column: 3; }
          .sesen-crf-review-baseline { grid-template-columns: repeat(2, 1fr); }
          .sesen-crf-cta { padding: 48px; }
        }

        @media (max-width: 680px) {
          .sesen-crf-shell { width: calc(100% - 40px); }
          .sesen-crf-section { padding: 68px 0; }
          .sesen-crf-hero { padding: 68px 0 66px; }
          .sesen-crf-hero h1 { font-size: 42px; line-height: 1.3; }
          .sesen-crf-hero__lead { font-size: 18px; }
          .sesen-crf-hero__support { font-size: 17px; }
          .sesen-crf-hero__actions { display: grid; grid-template-columns: 1fr; }
          .sesen-crf-button { width: 100%; min-height: 50px; padding: 14px 22px; line-height: 1.25; }
          .sesen-crf-section-heading { margin-bottom: 40px; }
          .sesen-crf-section-heading h2,
          .sesen-crf-concept-copy h2,
          .sesen-crf-edc-intro h2,
          .sesen-crf-version-copy h2,
          .sesen-crf-ai-intro h2,
          .sesen-crf-review-copy h2,
          .sesen-crf-cta h2 { font-size: 32px; }

          /* Sesen v1.2 mobile alignment: center standalone headings; retain left axis for technical/workflow/directory sections. */
          .sesen-crf-section-heading--center:not(.sesen-crf-section-heading--technical) { text-align: center; }
          .sesen-crf-section-heading--technical { text-align: left; }
          .sesen-crf-section-heading p { text-align: left; font-size: 17px; }
          .sesen-crf-concept-copy .sesen-crf-eyebrow,
          .sesen-crf-concept-copy h2,
          .sesen-crf-version-copy h2,
          .sesen-crf-ai-intro .sesen-crf-eyebrow,
          .sesen-crf-ai-intro h2 { text-align: center; }
          .sesen-crf-concept-copy h2,
          .sesen-crf-version-copy h2,
          .sesen-crf-ai-intro h2 { margin-left: auto; margin-right: auto; }
          .sesen-crf-scope-note { grid-template-columns: 1fr; gap: 14px; }

          .sesen-crf-trust__grid { grid-template-columns: 1fr; }
          .sesen-crf-trust__item,
          .sesen-crf-trust__item:nth-child(3),
          .sesen-crf-trust__item:nth-child(4),
          .sesen-crf-trust__item:nth-child(5) {
            grid-column: auto;
            min-height: 0;
            padding: 22px 0;
            border-right: 0;
            border-bottom: 1px solid var(--sesen-crf-divider);
          }
          .sesen-crf-trust__item:last-child { border-bottom: 0; }
          .sesen-crf-trust__item:first-child { padding-left: 0; }
          .sesen-crf-trust__item:last-child { padding-right: 0; }
          .sesen-crf-data-flow { padding: 26px 20px; }
          .sesen-crf-data-flow__stages { grid-template-columns: 1fr; gap: 0; }
          .sesen-crf-data-flow__stage {
            display: grid;
            grid-template-columns: 52px 1fr;
            grid-template-rows: auto auto;
            column-gap: 16px;
            padding: 17px 0;
            text-align: left;
            border-bottom: 1px solid var(--sesen-crf-divider);
          }
          .sesen-crf-data-flow__stage:last-of-type { border-bottom: 0; }
          .sesen-crf-data-flow__stage .sesen-crf-icon-tile { grid-row: 1 / 3; margin: 0; }
          .sesen-crf-data-flow__foundation { justify-content: flex-start; }
          .sesen-crf-content-grid,
          .sesen-crf-quality-grid,
          .sesen-crf-why-grid { grid-template-columns: 1fr; }
          .sesen-crf-content-item { min-height: 0; padding: 28px 24px; }
          .sesen-crf-quality-grid,
          .sesen-crf-why-grid { column-gap: 0; }
          .sesen-crf-quality-item,
          .sesen-crf-why-item { min-height: 0; }
          .sesen-crf-control-panel { grid-template-columns: 1fr; }
          .sesen-crf-control-col { padding: 30px 24px; }
          .sesen-crf-control-col + .sesen-crf-control-col { border-left: 0; border-top: 1px solid var(--sesen-crf-divider); }
          .sesen-crf-control-note { text-align: left; }
          .sesen-crf-workflow-item { grid-template-columns: 44px 1fr; gap: 14px 16px; padding: 24px 0; }
          .sesen-crf-workflow-number { grid-row: 1 / 3; font-size: 21px; }
          .sesen-crf-workflow-body { grid-column: 2; }
          .sesen-crf-workflow-item h3 { font-size: 21px; }
          .sesen-crf-edc-item { grid-template-columns: 46px 1fr; gap: 16px; }
          .sesen-crf-edc-item .sesen-crf-icon-tile { width: 46px; height: 46px; }
          .sesen-crf-connected::before { left: 22px; }
          .sesen-crf-connected-item { grid-template-columns: 46px 1fr; gap: 16px; align-items: start; padding: 24px 0; }
          .sesen-crf-connected-node { width: 46px; height: 46px; }
          .sesen-crf-connected-item h3 { grid-column: 2; }
          .sesen-crf-connected-item p { grid-column: 2; }
          .sesen-crf-connected-item .sesen-crf-link { grid-column: 2; }
          .sesen-crf-version-visual { padding: 26px 20px; }
          .sesen-crf-version-flow { grid-template-columns: 1fr; }
          .sesen-crf-version-arrow { transform: rotate(90deg); justify-self: center; }
          .sesen-crf-version-tags { grid-template-columns: 1fr; }
          .sesen-crf-ai-item { grid-template-columns: 34px 1fr; }
          .sesen-crf-review-model { padding: 26px 20px; }
          .sesen-crf-review-baseline { grid-template-columns: 1fr; }
          .sesen-crf-review-step { min-height: 78px; }
          .sesen-crf-audience-item { grid-template-columns: 46px 1fr; gap: 15px 16px; align-items: start; }
          .sesen-crf-audience-item h3 { grid-column: 2; }
          .sesen-crf-audience-item p { grid-column: 2; }
          .sesen-crf-audience-item .sesen-crf-link { grid-column: 2; }
          .sesen-crf-related-item { grid-template-columns: 1fr; gap: 12px; padding: 26px 0; min-width: 0; }
          .sesen-crf-related-item .sesen-crf-link { grid-column: 1; justify-self: start; text-align: left; }
          .sesen-crf-faq-question { min-height: 76px; gap: 18px; font-size: 19px; overflow-wrap: anywhere; }
          .sesen-crf-faq-answer { padding-right: 0; }
          .sesen-crf-cta-wrap { padding: 68px 0; }
          .sesen-crf-cta { padding: 38px 26px; gap: 30px; }
          .sesen-crf-cta h2 { text-align: center; }
          .sesen-crf-cta__actions { display: grid; grid-template-columns: 1fr; width: 100%; }
        }

        @media (max-width: 360px) {
          .sesen-crf-hero h1 { font-size: 38px; }
          .sesen-crf-button { padding-left: 18px; padding-right: 18px; font-size: 12px; }
          .sesen-crf-section-heading h2,
          .sesen-crf-concept-copy h2,
          .sesen-crf-edc-intro h2,
          .sesen-crf-version-copy h2,
          .sesen-crf-ai-intro h2,
          .sesen-crf-review-copy h2,
          .sesen-crf-cta h2 { font-size: 30px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-crf-page *,
          .sesen-crf-page *::before,
          .sesen-crf-page *::after { scroll-behavior: auto !important; transition: none !important; }
        }
      `}</style>

      <section className="sesen-crf-hero">
        <div className="sesen-crf-shell sesen-crf-hero__grid">
          <div className="sesen-crf-hero__copy">
            <div className="sesen-crf-eyebrow">CLINICAL DATA COLLECTION</div>
            <h1>Clinical CRF Translation Services</h1>
            <p className="sesen-crf-hero__lead">
              Translate Case Report Forms (CRFs) and electronic CRFs (eCRFs) with the clinical context, terminology control, and structured localization workflows required for global studies.
            </p>
            <p className="sesen-crf-hero__support">
              Sesen helps sponsors, CROs, clinical data management teams, and eClinical providers manage multilingual CRF content from protocol alignment and field-level translation through EDC-ready delivery, contextual QA, and ongoing study updates.
            </p>
            <div className="sesen-crf-hero__actions">
              <ButtonLink href={LINKS.quote}>REQUEST A QUOTE</ButtonLink>
              <ButtonLink href={LINKS.sales} secondary>TALK TO A CLINICAL TRANSLATION EXPERT</ButtonLink>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-crf-trust" aria-label="Sesen clinical translation proof points">
        <div className="sesen-crf-shell sesen-crf-trust__grid">
          {trustItems.map((item) => (
            <div className="sesen-crf-trust__item" key={item.label}>
              <div className="sesen-crf-trust__icon"><Icon name={item.icon} /></div>
              <div>
                <strong>{item.label}</strong>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell sesen-crf-concept-grid">
          <div className="sesen-crf-concept-copy">
            <div className="sesen-crf-eyebrow">CONNECTED CLINICAL CONTENT</div>
            <h2>CRF Translation Connects Language to Clinical Data Collection</h2>
            <p>
              A clinical trial protocol defines what a study evaluates, which procedures and assessments are performed, and what information needs to be collected. The Case Report Form turns those requirements into structured fields, questions, response options, instructions, and other data-entry content used throughout the study.
            </p>
            <p>
              For global studies, translating that content requires more than converting individual strings from one language to another. The language presented in a CRF or eCRF needs to remain aligned with the study protocol, approved terminology, field context, response structure, and multilingual implementation requirements.
            </p>
            <p>
              Sesen connects these requirements through a controlled CRF translation workflow designed for multilingual clinical data collection.
            </p>
          </div>
          <ConnectedDataDiagram />
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--soft">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="What We Translate Across CRF and eCRF Environments"
            intro="Sesen supports paper and electronic Case Report Form translation across a wide range of clinical study designs, therapeutic areas, and multilingual deployment models."
          />
          <div className="sesen-crf-content-grid">
            {contentTypes.map((item) => (
              <article className="sesen-crf-content-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link ? <ArrowLink href={item.link.href}>{item.link.label}</ArrowLink> : null}
              </article>
            ))}
          </div>
          <div className="sesen-crf-scope-note">
            <div>
              <strong>Working with ePRO or other outcome assessments?</strong>
              <span>Those instruments follow a distinct translation and linguistic-validation pathway.</span>
            </div>
            <ArrowLink href={LINKS.ecoa}>Explore eCOA Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell">
          <SectionHeading
            eyebrow="STRUCTURED LOCALIZATION"
            title="Translate the Language. Preserve the Study Structure."
            intro="An eCRF can contain both language intended for localization and technical elements that form part of the study's controlled data structure. A strong CRF localization workflow starts by identifying the difference."
            technical
          />
          <div className="sesen-crf-control-panel">
            <div className="sesen-crf-control-col">
              <div className="sesen-crf-control-col__head">
                <div className="sesen-crf-icon-tile"><Icon name="languages" /></div>
                <h3>Content Commonly Localized</h3>
              </div>
              <ul className="sesen-crf-check-list">
                {["Form and section names", "Field labels", "Questions and prompts", "Response-option display text", "Instructions", "Help text", "User-visible messages", "Completion guidance", "Study-specific explanatory content"].map((item) => (
                  <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="sesen-crf-control-col">
              <div className="sesen-crf-control-col__head">
                <div className="sesen-crf-icon-tile"><Icon name="code" /></div>
                <h3>Elements That May Need to Remain Controlled</h3>
              </div>
              <ul className="sesen-crf-check-list">
                {["Variable names", "Field IDs", "Internal codes", "Database identifiers", "Data mappings", "Programming logic", "Controlled values", "Technical metadata"].map((item) => (
                  <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <p className="sesen-crf-control-note">
            The exact localization scope varies by study. Sesen establishes translation rules before production begins so linguists know <strong>what to translate, what to reference, and what to protect.</strong> This is especially valuable when CRF content follows sponsor-defined clinical data standards, CDISC/CDASH conventions, or other structured data-collection models.
          </p>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--pale">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="A Controlled Workflow for Multilingual CRF Translation"
            intro="From the first source package through subsequent study amendments, Sesen manages CRF translation as a connected clinical workflow."
            align="left"
            technical
          />
          <div className="sesen-crf-workflow">
            {workflow.map((step) => (
              <article className="sesen-crf-workflow-item" key={step.n}>
                <div className="sesen-crf-workflow-number">{step.n}</div>
                <h3>{step.title}</h3>
                <div className="sesen-crf-workflow-body">
                  <p>{step.text}</p>
                  <span>{step.note}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell sesen-crf-edc-grid">
          <div className="sesen-crf-edc-intro">
            <h2>Built for eCRF and EDC Environments</h2>
            <p>
              Electronic Case Report Form translation introduces requirements that are different from conventional document translation. Sesen works with the language layer of eCRF and electronic data capture workflows while helping clinical teams preserve the structured relationships needed for implementation.
            </p>
            <p>
              Sesen prepares organized multilingual content for sponsor, CRO, clinical data management, and technology teams to implement within their established systems and governance.
            </p>
          </div>
          <div className="sesen-crf-edc-list">
            {edcItems.map((item) => (
              <article className="sesen-crf-edc-item" key={item.title}>
                <div className="sesen-crf-icon-tile"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--soft">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="Keep CRF Terminology Connected Across the Study"
            intro="A CRF does not exist in isolation. The same clinical concepts may appear in the protocol, amendments, safety materials, site documentation, study instructions, digital trial tools, and other content used throughout the clinical program."
            technical
          />
          <div className="sesen-crf-connected">
            {connectedStudy.map((item, index) => (
              <article className="sesen-crf-connected-item" key={item.label}>
                <div className="sesen-crf-connected-node"><Icon name={index === 0 ? "protocol" : index === 1 ? "form" : index === 2 ? "shield" : index === 3 ? "clinical" : "layers"} /></div>
                <h3>{item.label}</h3>
                <p>{item.text}</p>
                {item.link ? <ArrowLink href={item.link}>{item.linkLabel}</ArrowLink> : <span />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell sesen-crf-version-grid">
          <div className="sesen-crf-version-copy">
            <h2>Manage CRF Amendments Without Starting Over</h2>
            <p>
              A protocol amendment may change a visit, assessment, procedure, eligibility requirement, safety requirement, or other study element. Those changes can flow into one or more CRFs and then into every required language.
            </p>
            <p>
              Sesen helps teams manage those updates as controlled deltas rather than treating each revised CRF as an entirely new translation project.
            </p>
            <ul className="sesen-crf-version-list">
              {["Compare source versions and identify new, modified, and removed content", "Reuse previously approved translations where source content has not changed", "Translate the required delta", "Carry approved terminology forward across amendments", "Apply linguistic and contextual QA to the updated version"].map((item) => (
                <li key={item}><Icon name="check" size={19} /><span>{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="sesen-crf-version-visual" role="img" aria-label="CRF version management concept">
            <div className="sesen-crf-version-flow">
              <div className="sesen-crf-version-box">
                <strong>CRF V1</strong>
                <span>Approved multilingual content</span>
              </div>
              <div className="sesen-crf-version-arrow"><Icon name="arrow" /></div>
              <div className="sesen-crf-version-box sesen-crf-version-box--active">
                <strong>Study Amendment</strong>
                <span>Changed source identified</span>
              </div>
              <div className="sesen-crf-version-arrow"><Icon name="arrow" /></div>
              <div className="sesen-crf-version-box">
                <strong>CRF V2</strong>
                <span>Updated multilingual release</span>
              </div>
            </div>
            <div className="sesen-crf-version-tags">
              <span>Reuse approved content</span>
              <span>Translate what changed</span>
              <span>QA the new version</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--dark">
        <div className="sesen-crf-shell sesen-crf-ai-layout">
          <div className="sesen-crf-ai-intro">
            <div className="sesen-crf-eyebrow">HUMAN EXPERTISE + TECHNOLOGY</div>
            <h2>Human-Led Clinical Translation with AI-Assisted Quality Control</h2>
            <p>
              Clinical translation requires accountable human expertise. Sesen combines professional life sciences linguists with translation memory, terminology management, automation, and AI-assisted quality checks to create more controlled multilingual workflows.
            </p>
            <div className="sesen-crf-ai-links">
              <ArrowLink href={LINKS.clinicalAI}>Clinical Trial AI Workflows</ArrowLink>
              <ArrowLink href={LINKS.sesenGPT}>SesenGPT</ArrowLink>
            </div>
            <div className="sesen-crf-ai-principle">AI can strengthen the workflow. Human expertise remains accountable for the language.</div>
          </div>
          <div className="sesen-crf-ai-list">
            {aiCapabilities.map((item, index) => (
              <article className="sesen-crf-ai-item" key={item.title}>
                <div className="sesen-crf-ai-marker"><Icon name={index === aiCapabilities.length - 1 ? "users" : index === 3 ? "refresh" : index === 1 ? "brain" : "check"} size={19} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell">
          <SectionHeading
            eyebrow="QUALITY & GOVERNANCE"
            title="Quality Designed for Regulated Clinical Research"
            intro="CRFs support structured clinical data collection, so their multilingual content benefits from documented quality processes, specialized linguists, terminology controls, secure infrastructure, and traceable project management."
          />
          <div className="sesen-crf-quality-grid">
            {qualityItems.map((item) => (
              <article className="sesen-crf-quality-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-crf-quality-link">
            <ArrowLink href={LINKS.quality}>Explore Sesen Quality, Compliance & Security</ArrowLink>
          </div>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--pale">
        <div className="sesen-crf-shell sesen-crf-review-layout">
          <div className="sesen-crf-review-copy">
            <div className="sesen-crf-eyebrow">RIGHT-SIZED REVIEW</div>
            <h2>Match the Translation Workflow to the Study</h2>
            <p>
              Not every CRF requires the same translation methodology. For many operational CRF and eCRF projects, an appropriate workflow may include professional translation, independent review, contextual QA, and final quality control.
            </p>
            <p>
              Where a sponsor, CRO, SOP, study methodology, or project requirement calls for additional controls, Sesen can configure the workflow accordingly. Back translation is an available methodology—not an automatic requirement for every CRF.
            </p>
            <ArrowLink href={LINKS.ecoa}>For outcome-assessment validation needs, explore eCOA Translation Services</ArrowLink>
          </div>
          <div className="sesen-crf-review-model">
            <div className="sesen-crf-review-baseline" aria-label="Baseline CRF translation review workflow">
              {["Professional Translation", "Independent Review", "Contextual QA", "Final QC"].map((item, index) => (
                <div className="sesen-crf-review-step" key={item}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <div className="sesen-crf-review-plus">
              <strong>Additional review steps when required:</strong>
              <div className="sesen-crf-review-tags">
                {["Back translation", "Reconciliation", "In-country review", "Sponsor review", "Medical / SME review", "Terminology review", "In-context linguistic testing"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="Built for the Teams Managing Multilingual Clinical Data Collection"
            intro="Sesen works across the clinical study ecosystem, helping the teams responsible for CRF content move multilingual language from source development through study deployment."
            align="left"
            technical
          />
          <div className="sesen-crf-audience-list">
            {audiences.map((item) => (
              <article className="sesen-crf-audience-item" key={item.title}>
                <div className="sesen-crf-audience-icon"><Icon name="users" /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.link ? <ArrowLink href={item.link}>{item.linkLabel}</ArrowLink> : <span />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--soft">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="Why Clinical Teams Choose Sesen"
            intro="Sesen brings clinical trial specialization, structured localization, professional linguistic expertise, and controlled multilingual operations together around the needs of evolving CRF programs."
          />
          <div className="sesen-crf-why-grid">
            {whyItems.map((item) => (
              <article className="sesen-crf-why-item" key={item.title}>
                <div className="sesen-crf-why-icon"><Icon name="check" size={17} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="Connected Clinical Trial Translation Services"
            intro="CRF translation is one part of the multilingual clinical study ecosystem. Sesen provides specialized workflows for related content while keeping each service aligned with its specific purpose."
            align="left"
            technical
          />
          <div className="sesen-crf-related-list">
            {relatedServices.map((item) => (
              <article className="sesen-crf-related-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowLink href={item.href}>{item.label}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-section sesen-crf-section--soft">
        <div className="sesen-crf-shell">
          <SectionHeading
            title="Clinical CRF Translation FAQs"
            intro="Answers to common questions about multilingual Case Report Forms, eCRF localization, EDC-ready content, terminology, version control, and review methodology."
            align="left"
            technical
          />
          <div className="sesen-crf-faq">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                id={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-crf-cta-wrap">
        <div className="sesen-crf-shell">
          <div className="sesen-crf-cta">
            <div>
              <h2>Keep Multilingual CRFs Aligned Across the Study</h2>
              <p>
                From the first translated form through protocol amendments, new countries, and subsequent CRF versions, Sesen helps clinical teams connect protocol terminology, CRF/eCRF translation, EDC-ready content, contextual QA, and version management through one specialized life sciences language partner.
              </p>
            </div>
            <div className="sesen-crf-cta__actions">
              <ButtonLink href={LINKS.quote}>REQUEST A QUOTE</ButtonLink>
              <ButtonLink href={LINKS.sales} secondary>TALK TO A CLINICAL TRANSLATION EXPERT</ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
