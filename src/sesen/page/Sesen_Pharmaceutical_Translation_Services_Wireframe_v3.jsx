import React, { useState } from "react";

const PAGE_ROOT = "sesen-pharma-page";

const Icon = ({ name, size = 22, className = "" }) => {
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
    className,
  };

  const paths = {
    molecule: (
      <>
        <circle cx="6" cy="12" r="2.2" />
        <circle cx="17.5" cy="6.5" r="2.2" />
        <circle cx="17.5" cy="17.5" r="2.2" />
        <path d="M8 11l7.3-3.4M8 13l7.3 3.4" />
      </>
    ),
    clinical: (
      <>
        <path d="M6 3.8h8.5L18 7.3V20H6z" />
        <path d="M14.5 3.8v3.5H18M9 11h6M9 14h6M9 17h4" />
      </>
    ),
    regulatory: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="M15.5 18.5l1.5 1.5 3-3.5" />
      </>
    ),
    label: (
      <>
        <path d="M4.5 7.5V4.5h9l6 6-9 9-6-6z" />
        <circle cx="9" cy="9" r="1.2" />
      </>
    ),
    safety: (
      <>
        <path d="M12 3.8l7 2.5v5.3c0 4.1-2.6 7.3-7 8.8-4.4-1.5-7-4.7-7-8.8V6.3z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
    medical: (
      <>
        <path d="M12 20s-7-4.2-7-10.1A3.9 3.9 0 0 1 12 7a3.9 3.9 0 0 1 7 2.9C19 15.8 12 20 12 20z" />
        <path d="M9 11h6M12 8v6" />
      </>
    ),
    terminology: (
      <>
        <path d="M4 5h16v14H4z" />
        <path d="M8 9h3M8 13h8M8 16h6" />
        <path d="M15 8l1.5 1.5L19 7" />
      </>
    ),
    review: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M14.5 14.5L20 20M8.5 10.5l1.4 1.4 3-3.2" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.4 5.2 3.4 8.5S14.2 18.1 12 20.5M12 3.5C9.8 5.9 8.6 8.7 8.6 12s1.2 6.1 3.4 8.5" />
      </>
    ),
    qa: (
      <>
        <path d="M5 5h14v14H5z" />
        <path d="M8 9l1.5 1.5L12 8M8 15l1.5 1.5L12 14M14 9h2M14 15h2" />
      </>
    ),
    people: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2.3" />
        <path d="M3.8 19c.6-3.4 2.4-5.2 5.2-5.2s4.6 1.8 5.2 5.2M14.2 14.5c2.7-.7 4.8.7 5.7 4.5" />
      </>
    ),
    memory: (
      <>
        <path d="M7 3.8h10v3H7zM7 17.2h10v3H7zM4.5 7.2h15v9.6h-15z" />
        <path d="M8 10h8M8 14h5" />
      </>
    ),
    ai: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 9h6v6H9zM12 2.8V5M12 19v2.2M2.8 12H5M19 12h2.2M5.2 5.2L3.7 3.7M18.8 18.8l1.5 1.5M18.8 5.2l1.5-1.5M5.2 18.8l-1.5 1.5" />
      </>
    ),
    versions: (
      <>
        <path d="M5 6h10l4 4v8H5z" />
        <path d="M15 6v4h4M8 13h8M8 16h5" />
        <path d="M3.5 9V4.5H15" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    check: <path d="M5 12.5l4.2 4.2L19 7" />,
    secure: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2.5" />
      </>
    ),
    layers: (
      <>
        <path d="M12 3.5L3.8 8 12 12.5 20.2 8z" />
        <path d="M3.8 12l8.2 4.5 8.2-4.5M3.8 16l8.2 4.5 8.2-4.5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const ArrowLink = ({ href, children, className = "" }) => (
  <a className={`sesen-pharma-link ${className}`} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

const ButtonLink = ({ href, children, secondary = false }) => (
  <a
    href={href}
    className={`sesen-pharma-button ${secondary ? "sesen-pharma-button--secondary" : ""}`}
  >
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

const SectionHeading = ({ eyebrow, title, intro, centered = false, inverse = false }) => (
  <div
    className={`sesen-pharma-heading-group ${centered ? "is-centered" : ""} ${
      inverse ? "is-inverse" : ""
    }`}
  >
    {eyebrow ? <div className="sesen-pharma-eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p className="sesen-pharma-section-intro">{intro}</p> : null}
  </div>
);

const lifecycleStages = [
  {
    icon: "molecule",
    title: "Discovery & Preclinical",
    text: "Pharmacology, toxicology, nonclinical study reports, pharmacokinetic and pharmacodynamic content, research summaries, and scientific documentation.",
  },
  {
    icon: "clinical",
    title: "Clinical Development",
    text: "Protocols, investigator brochures, informed consent, clinical reports, site materials, patient content, eCOA/ePRO, and study communications.",
  },
  {
    icon: "regulatory",
    title: "Regulatory & CMC",
    text: "CTD/eCTD content, CMC documentation, clinical and nonclinical summaries, agency correspondence, and supporting submission materials.",
  },
  {
    icon: "label",
    title: "Labeling & Global Launch",
    text: "Prescribing information, SmPCs, PILs, medication guides, package inserts, labeling, packaging, artwork, and launch-related materials.",
  },
  {
    icon: "safety",
    title: "Safety & Lifecycle Management",
    text: "Adverse-event narratives, ICSRs, CIOMS content, DSURs, PSURs/PBRERs, risk-management documentation, and safety communications.",
  },
  {
    icon: "medical",
    title: "Medical Affairs & Commercialization",
    text: "Medical information, scientific publications, congress content, field medical materials, training, market access, patient, HCP, and digital content.",
  },
];

const contentGroups = [
  {
    icon: "clinical",
    title: "Clinical Research & Development",
    text: "Protocols, amendments, investigator brochures, informed consent forms, case report forms, clinical study reports, site documentation, patient materials, eCOA/ePRO instruments, training, and trial communications.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    link: "Clinical Trial Translation Services",
  },
  {
    icon: "regulatory",
    title: "Regulatory Submissions & CMC",
    text: "CTD/eCTD documentation, clinical and nonclinical summaries, CMC content, quality documentation, health-authority correspondence, briefing documents, responses to questions, and post-approval updates.",
    href: "https://www.sesen.com/regulatory-submission-translation-services/",
    link: "Regulatory Translation Services",
  },
  {
    icon: "label",
    title: "Drug Labeling & Product Information",
    text: "Prescribing information, SmPCs, PILs, medication guides, inserts, cartons, labels, packaging, artwork, and subsequent labeling updates with terminology and version alignment.",
    href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
    link: "Drug Labeling & Packaging Translation",
  },
  {
    icon: "safety",
    title: "Pharmacovigilance & Drug Safety",
    text: "Safety narratives, case content, ICSRs, CIOMS forms, DSURs, PSURs/PBRERs, risk-management materials, post-market surveillance content, and safety communications.",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    link: "Pharmacovigilance Translation Services",
  },
  {
    icon: "medical",
    title: "Medical & Scientific Communications",
    text: "Medical affairs, medical information, scientific publications, advisory-board materials, congress content, field medical communications, and healthcare-professional materials.",
    href: "https://www.sesen.com/medical-affairs-translation-services/",
    link: "Medical Affairs Translation Services",
  },
  {
    icon: "globe",
    title: "Training, Digital & Commercial Content",
    text: "Training programs, eLearning, product websites, patient portals, applications, presentations, multimedia, market-access materials, disease-awareness content, and global launch communications.",
    href: "https://www.sesen.com/pharmaceuticals/",
    link: "Pharmaceutical Language Solutions",
  },
];

const workflowTypes = [
  {
    title: "Regulatory & Submission-Critical Content",
    text: "Qualified life sciences linguists translate with approved terminology, reference material, translation memory, and project instructions. Independent review and final QA can verify source fidelity, terminology, completeness, numbers, formatting, and consistency.",
    icon: "regulatory",
  },
  {
    title: "Clinical & Patient-Facing Content",
    text: "Clinical content may require additional methodologies such as reconciliation, back translation, cognitive debriefing, clinician review, sponsor review, or in-country review depending on the content, audience, and program requirements.",
    icon: "clinical",
  },
  {
    title: "Recurring Pharmaceutical Content",
    text: "Controlled terminology, translation memory, reviewer preferences, approved reference content, and repeatable QA processes create continuity across versions instead of treating each new file as an isolated project.",
    icon: "versions",
  },
  {
    title: "Suitable AI-Assisted Content",
    text: "Where content type, project requirements, and risk level make AI assistance appropriate, SesenGPT can support controlled translation and validation while qualified professionals remain central to review and final quality.",
    icon: "ai",
  },
];

const expertiseItems = [
  {
    icon: "people",
    title: "Specialized Life Sciences Linguists",
    text: "Professional native-language resources are aligned with pharmaceutical subject matter, language pair, content type, and project requirements—not selected on language availability alone.",
  },
  {
    icon: "review",
    title: "Independent Linguistic Review",
    text: "When the workflow calls for independent review, a separate qualified linguist checks accuracy, terminology, readability, completeness, consistency, and project instructions.",
  },
  {
    icon: "layers",
    title: "Dedicated Project & Program Management",
    text: "Project teams coordinate languages, files, timelines, terminology, reviewer feedback, source updates, priorities, and delivery phases across complex pharmaceutical engagements.",
  },
  {
    icon: "clinical",
    title: "Multilingual File Expertise",
    text: "Scientific tables, figures, captions, structured documents, labeling artwork, presentations, XML-based content, Office files, and multilingual layouts receive production attention as well as linguistic review.",
  },
];

const aiCapabilities = [
  {
    icon: "ai",
    title: "Selective AI Assistance",
    text: "AI assistance can support suitable pharmaceutical content when the content risk, project scope, and review requirements allow.",
  },
  {
    icon: "memory",
    title: "Approved Content Reuse",
    text: "Translation memory helps identify and reuse previously reviewed translations instead of unnecessarily retranslating established content.",
  },
  {
    icon: "qa",
    title: "AI-Assisted Validation",
    text: "Automated checks can help surface potential terminology, numerical, formatting, completeness, and consistency issues for human review.",
  },
  {
    icon: "review",
    title: "Expert Human Validation",
    text: "Professional life sciences linguists interpret meaning, resolve ambiguity, evaluate context, and remain responsible for final quality decisions.",
  },
];

const terminologyStages = [
  "Clinical",
  "Regulatory",
  "Labeling",
  "Safety",
  "Medical Affairs",
  "Commercial",
];

const qualityChecks = [
  {
    title: "Linguistic Accuracy",
    text: "Meaning, grammar, syntax, tone, readability, source fidelity, and appropriate scientific or medical register.",
  },
  {
    title: "Pharmaceutical Terminology",
    text: "Approved product terminology, clinical language, scientific terms, regulatory expressions, safety wording, abbreviations, and client preferences.",
  },
  {
    title: "Numbers, Doses & Units",
    text: "Doses, units, percentages, measurements, study data, concentrations, and other numerical content receive dedicated cross-checking attention.",
  },
  {
    title: "Tables, Figures & Cross-References",
    text: "Captions, legends, labels, footnotes, section references, tables, figures, and structured document elements are checked for alignment and completeness.",
  },
  {
    title: "Completeness & Formatting",
    text: "Untranslated text, missing content, formatting inconsistencies, file issues, and other production risks are checked before delivery.",
  },
  {
    title: "AI-Assisted QA Under Human Oversight",
    text: "SesenGPT-enabled validation can add another quality layer by flagging issues for professional evaluation rather than replacing expert review.",
  },
];

const regulatoryCapabilities = [
  {
    icon: "regulatory",
    title: "CTD & eCTD Content",
    text: "Support for region-specific content, summaries, CMC and quality content, nonclinical documentation, clinical documentation, and related submission files.",
  },
  {
    icon: "versions",
    title: "Health-Authority Communications",
    text: "Requests for information, responses to questions, briefing materials, correspondence, meeting content, regulatory updates, and other submission-lifecycle communications.",
  },
  {
    icon: "label",
    title: "Product Information & Linguistic Review",
    text: "Coordinated multilingual review, approved terminology, formatting, and version control for labels, inserts, product information, and supporting content.",
  },
];

const programItems = [
  {
    icon: "layers",
    title: "Centralized Program Management",
    text: "Coordinate languages, documents, schedules, linguistic resources, reviewer feedback, priorities, and delivery requirements through one managed workflow.",
  },
  {
    icon: "memory",
    title: "Translation Memory & Content Reuse",
    text: "Reuse approved translations where appropriate to improve consistency across related documents and recurring updates while reducing unnecessary retranslation.",
  },
  {
    icon: "versions",
    title: "Version-Aware Delivery",
    text: "Maintain alignment across amendments, revisions, labeling updates, regulatory responses, and subsequent releases as source documents change.",
  },
  {
    icon: "clock",
    title: "Rolling & Phased Translation",
    text: "Prioritize critical content and deliver in controlled phases when regulatory, clinical, safety, or launch timelines require parallel workstreams.",
  },
  {
    icon: "people",
    title: "Reviewer Coordination",
    text: "Structure feedback from sponsor reviewers, affiliates, subject-matter experts, and in-country teams so approved decisions can inform future content.",
  },
  {
    icon: "clinical",
    title: "Multilingual Formatting & Production",
    text: "Coordinate translated content through final file preparation, DTP, structured formats, labeling layouts, presentations, and other delivery environments.",
  },
];

const isoItems = [
  {
    title: "ISO 17100",
    text: "Certified translation-service processes supporting qualified linguistic resources, translation, review, and structured quality controls.",
  },
  {
    title: "ISO 9001:2015",
    text: "Certified quality-management processes supporting repeatability, documentation, operational control, and continuous improvement.",
  },
  {
    title: "ISO 13485:2016",
    text: "A formal quality-management framework supporting Sesen's broader regulated life sciences operations.",
  },
];

const caseStudies = [
  {
    eyebrow: "REGULATORY SUBMISSIONS",
    title: "Multilingual Regulatory Submission for Global Biopharma",
    text: "A global biopharmaceutical organization needed coordinated translation for a complex, multi-region regulatory program. Sesen supported CTD/eCTD-related content, terminology alignment, native-language expertise, review workflows, and evolving source materials across multiple languages.",
    meta: "CTD/eCTD · MULTILINGUAL COORDINATION · TERMINOLOGY CONTROL",
    href: "https://www.sesen.com/resources/case-studies/regulatory-submission-translation-global-biopharma/",
    link: "Global Biopharma Case Study",
  },
  {
    eyebrow: "VACCINES",
    title: "Multilingual Vaccine Submission Across Global Authorities",
    text: "A global pharmaceutical company required time-sensitive translation of CTD content, SmPCs, patient information, IFUs, labeling, and supporting materials across multiple languages and jurisdictions. Sesen coordinated specialized linguists, terminology, review, and layered QA.",
    meta: "GLOBAL SUBMISSIONS · LABELING · MULTILINGUAL DELIVERY",
    href: "https://www.sesen.com/resources/case-studies/multilingual-vaccine-submission/",
    link: "Vaccine Submission Case Study",
  },
  {
    eyebrow: "LINGUISTIC VALIDATION",
    title: "Linguistic Validation for a Global Oncology Clinical Trial",
    text: "A leading CRO supporting a pharmaceutical oncology study needed linguistic validation of a Clinical Outcome Assessment instrument in 25 languages. Sesen coordinated forward translation, reconciliation, back translation, cognitive debriefing, clinical review, and final harmonization.",
    meta: "ONCOLOGY · COA · 25 LANGUAGES",
    href: "https://www.sesen.com/resources/case-studies/linguistic-validation-cancer-clinical-trial/",
    link: "Oncology Validation Case Study",
  },
];

const relatedServices = [
  {
    title: "Clinical Trial Translation Services",
    text: "Protocols, informed consent, investigator materials, site documents, clinical reports, patient content, and multilingual study operations.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
  },
  {
    title: "Regulatory Translation Services",
    text: "Submissions, regulated documentation, health-authority communications, and ongoing regulatory updates.",
    href: "https://www.sesen.com/regulatory-submission-translation-services/",
  },
  {
    title: "CMC Document Translation Services",
    text: "Chemistry, Manufacturing and Controls documentation supporting global pharmaceutical regulatory programs.",
    href: "https://www.sesen.com/cmc-document-translation-services/",
  },
  {
    title: "Drug Labeling & Packaging Translation",
    text: "Product information, inserts, labels, cartons, packaging, artwork, formatting support, and in-context QA.",
    href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
  },
  {
    title: "Pharmacovigilance Translation Services",
    text: "Adverse-event reporting, safety narratives, aggregate reports, risk-management materials, and global drug-safety communication.",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
  },
  {
    title: "Medical Affairs Translation Services",
    text: "Medical information, publications, scientific exchange, field medical teams, advisory boards, education, and evidence communication.",
    href: "https://www.sesen.com/medical-affairs-translation-services/",
  },
  {
    title: "Linguistic Validation Services",
    text: "Structured translation and validation for COA, eCOA, ePRO, questionnaires, scales, diaries, and other clinical outcome instruments.",
    href: "https://www.sesen.com/linguistic-validation-services/",
  },
  {
    title: "Pharmaceutical Language Solutions",
    text: "Explore how Sesen connects clinical, regulatory, labeling, safety, medical affairs, and commercialization across global drug programs.",
    href: "https://www.sesen.com/pharmaceuticals/",
  },
];

const resources = [
  {
    category: "AI & VALIDATION",
    title: "AI Translation Validation for Life Sciences",
    text: "Explore how expert review, terminology controls, translation memory, and structured QA can help evaluate AI-generated multilingual content.",
    href: "https://www.sesen.com/ai-translation-validation/",
    link: "Explore AI Translation Validation",
  },
  {
    category: "CLINICAL & REGULATORY",
    title: "Clinical & Regulatory Knowledge",
    text: "Practical guidance on clinical trial translation, regulatory submissions, labeling, terminology, multilingual quality, and regulated workflows.",
    href: "https://www.sesen.com/resources/clinical-regulatory-knowledge/",
    link: "Explore Clinical & Regulatory Knowledge",
  },
  {
    category: "WORKFLOW KNOWLEDGE",
    title: "Life Sciences Translation Knowledge Base",
    text: "Guidance on translation and review workflows, hybrid translation, MTPE, back translation, reconciliation, in-country review, DTP, and terminology.",
    href: "https://www.sesen.com/resources/knowledge-base/",
    link: "Explore the Knowledge Base",
  },
  {
    category: "TERMINOLOGY",
    title: "Pharmaceutical Terminology & Style Guidance",
    text: "Reference materials for pharmaceutical terminology, controlled language, dosage formatting, abbreviations, regulatory phrasing, and consistency.",
    href: "https://www.sesen.com/resources/style-guides/pharmaceuticals/",
    link: "Explore Pharmaceutical Style Guidance",
  },
];

const faqs = [
  {
    q: "What pharmaceutical documents does Sesen translate?",
    a: "Sesen translates pharmaceutical content across clinical development, regulatory affairs, CMC, labeling, pharmacovigilance, medical affairs, training, digital content, and commercialization. Common documents include protocols, investigator brochures, informed consent forms, CTD/eCTD content, CMC documentation, regulatory correspondence, SmPCs, PILs, package inserts, labeling, adverse-event narratives, ICSRs, DSURs, PSURs/PBRERs, medical information, scientific materials, and patient-facing content.",
  },
  {
    q: "How does Sesen select translators for pharmaceutical content?",
    a: "Sesen uses professional native life sciences linguists and aligns resources with the subject matter, language pair, content type, and project requirements. Pharmaceutical work may require expertise in clinical research, regulatory affairs, CMC, pharmacovigilance, medical affairs, labeling, or patient communication, so resource selection goes beyond language fluency alone.",
  },
  {
    q: "Does Sesen provide independent review of pharmaceutical translations?",
    a: "Yes. Sesen pharmaceutical workflows can include independent linguistic review by a separate qualified linguist. The review checks accuracy, terminology, readability, completeness, consistency, and alignment with project requirements before final QA and delivery.",
  },
  {
    q: "Can Sesen translate CTD and eCTD regulatory content?",
    a: "Yes. Sesen supports CTD/eCTD translation and multilingual regulatory documentation, including region-specific materials, summaries, CMC content, nonclinical and clinical documentation, labeling, and supporting regulatory files. The workflow is configured around the source content, target markets, languages, and client requirements.",
  },
  {
    q: "How does Sesen maintain pharmaceutical terminology across languages?",
    a: "Sesen combines terminology management, multilingual glossaries, translation memory, reference content, and reviewer feedback to maintain approved language across related documents and updates. These resources can follow a drug program from clinical development through regulatory submission, labeling, safety, medical affairs, and commercialization.",
  },
  {
    q: "Does Sesen use AI for pharmaceutical translation?",
    a: "Sesen uses AI selectively through SesenGPT. For suitable content, AI can support controlled translation, terminology application, translation-memory reuse, and validation. Professional life sciences linguists remain central to review and final quality, particularly for regulated, patient-facing, safety-related, and submission-critical content.",
  },
  {
    q: "Can Sesen provide back translation and linguistic validation?",
    a: "Yes. Sesen provides linguistic validation for COA, eCOA, ePRO, PRO, ClinRO, ObsRO, PerfO, questionnaires, scales, diaries, and other clinical instruments. Depending on the methodology, workflows may include forward translation, reconciliation, back translation, cognitive debriefing, clinician review, harmonization, and supporting documentation.",
  },
  {
    q: "Can Sesen manage ongoing global pharmaceutical translation programs?",
    a: "Yes. Sesen supports both defined projects and recurring multilingual programs. Ongoing workflows can include centralized terminology, translation-memory management, source-version handling, phased delivery, multilingual scheduling, reviewer coordination, in-country review, formatting, QA, and controlled reuse of approved content.",
  },
  {
    q: "How many languages does Sesen support?",
    a: "Sesen supports pharmaceutical and broader life sciences translation across more than 150 languages, with professional native-language resources and coordinated multilingual program management for major markets worldwide.",
  },
  {
    q: "How do I request pricing for a pharmaceutical translation project?",
    a: "For a defined project, submit your source files, required languages, timing, and project information through Sesen's quote process. For large submissions, recurring pharmaceutical programs, AI-enabled workflows, or projects requiring consultation before scoping, contact Team Sesen to review the requirements.",
  },
];

function HeroArtwork() {
  return (
    <div className="sesen-pharma-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 500" role="img">
        <defs>
          <linearGradient id="sesenPharmaSoft" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7F9FD" />
            <stop offset="100%" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>
        <rect x="58" y="50" width="494" height="400" rx="48" fill="url(#sesenPharmaSoft)" />
        <circle cx="476" cy="126" r="74" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="476" cy="126" r="50" fill="none" stroke="#BFCBEC" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M443 126h66M476 93c16 17 24 39 24 66M476 93c-16 17-24 39-24 66" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
        <path d="M443 112h66M443 140h66" fill="none" stroke="#8FA4E7" strokeWidth="2" />
        <rect x="126" y="106" width="224" height="278" rx="22" fill="#FFFFFF" stroke="#D5DDEC" strokeWidth="2.4" />
        <rect x="153" y="136" width="90" height="12" rx="6" fill="#4B6FD8" opacity=".92" />
        <rect x="153" y="166" width="158" height="8" rx="4" fill="#C7D0E0" />
        <rect x="153" y="186" width="134" height="8" rx="4" fill="#D6DDE9" />
        <rect x="153" y="226" width="168" height="94" rx="14" fill="#F7F9FD" stroke="#E2E8F3" />
        <path d="M174 294l26-28 22 14 24-35 34 20 20-26" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="200" cy="266" r="5" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
        <circle cx="246" cy="245" r="5" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
        <circle cx="300" cy="239" r="5" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
        <rect x="153" y="340" width="106" height="9" rx="4.5" fill="#BAC5D8" />
        <rect x="153" y="360" width="144" height="9" rx="4.5" fill="#D4DBE7" />
        <rect x="310" y="285" width="188" height="120" rx="22" fill="#FFFFFF" stroke="#D5DDEC" strokeWidth="2.4" />
        <rect x="334" y="312" width="74" height="9" rx="4.5" fill="#17264D" opacity=".8" />
        <rect x="334" y="334" width="136" height="7" rx="3.5" fill="#C8D1E0" />
        <rect x="334" y="352" width="114" height="7" rx="3.5" fill="#D7DEE9" />
        <circle cx="454" cy="373" r="15" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2" />
        <path d="M447 373l5 5 10-12" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <g transform="translate(75 302)">
          <circle cx="42" cy="42" r="42" fill="#FFFFFF" stroke="#D5DDEC" strokeWidth="2" />
          <circle cx="31" cy="38" r="7" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2.5" />
          <circle cx="54" cy="25" r="7" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2.5" />
          <circle cx="58" cy="56" r="7" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2.5" />
          <path d="M37 34l11-6M38 42l14 10" fill="none" stroke="#6F8BE1" strokeWidth="2.5" />
        </g>
        <path d="M358 110c24 18 39 41 45 69" fill="none" stroke="#AAB8D7" strokeWidth="2" strokeDasharray="6 8" />
        <path d="M390 181l13-2 3-13" fill="none" stroke="#4B6FD8" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="374" y="190" width="140" height="54" rx="27" fill="#253F8F" />
        <text x="400" y="223" fill="#FFFFFF" fontFamily="Inter, Arial, sans-serif" fontSize="17" fontWeight="700" letterSpacing="1">A ↔ 文</text>
      </svg>
    </div>
  );
}

export default function PharmaceuticalTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={PAGE_ROOT}>
      <style>{`
        .${PAGE_ROOT} {
          --sesen-pharma-blue: #4B6FD8;
          --sesen-pharma-blue-dark: #3659BB;
          --sesen-pharma-deep-blue: #253F8F;
          --sesen-pharma-mid-blue: #6F8BE1;
          --sesen-pharma-soft-blue: #EAF0FF;
          --sesen-pharma-pale-blue: #F5F7FF;
          --sesen-pharma-navy: #17264D;
          --sesen-pharma-ink: #111827;
          --sesen-pharma-body: #46546D;
          --sesen-pharma-muted: #68758B;
          --sesen-pharma-border: #DDE4F2;
          --sesen-pharma-divider: #E9EEF8;
          --sesen-pharma-soft: #F7F9FD;
          --sesen-pharma-white: #FFFFFF;
          --sesen-pharma-light-blue: #C8D6FF;
          --sesen-pharma-shadow: 0 24px 60px rgba(23, 38, 77, 0.10);
          color: var(--sesen-pharma-body);
          background: var(--sesen-pharma-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .${PAGE_ROOT},
        .${PAGE_ROOT} * {
          box-sizing: border-box;
        }

        .${PAGE_ROOT} a {
          color: inherit;
        }

        .${PAGE_ROOT} a:focus-visible,
        .${PAGE_ROOT} button:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.35);
          outline-offset: 4px;
        }

        .${PAGE_ROOT} .sesen-pharma-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .${PAGE_ROOT} .sesen-pharma-section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .${PAGE_ROOT} .sesen-pharma-section--dense {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .${PAGE_ROOT} .sesen-pharma-section--soft {
          background: var(--sesen-pharma-soft);
        }

        .${PAGE_ROOT} .sesen-pharma-section--pale {
          background: var(--sesen-pharma-pale-blue);
        }

        .${PAGE_ROOT} .sesen-pharma-section--deep {
          background: var(--sesen-pharma-navy);
          color: #DDE7FF;
        }

        .${PAGE_ROOT} h1,
        .${PAGE_ROOT} h2,
        .${PAGE_ROOT} h3 {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-style: normal;
          font-stretch: 100%;
          font-weight: 500;
          color: var(--sesen-pharma-navy);
          margin: 0;
        }

        .${PAGE_ROOT} h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .${PAGE_ROOT} h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .${PAGE_ROOT} h3 {
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .${PAGE_ROOT} p {
          margin: 0;
        }

        .${PAGE_ROOT} .sesen-pharma-eyebrow {
          color: var(--sesen-pharma-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1.4;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .${PAGE_ROOT} .sesen-pharma-section--deep .sesen-pharma-eyebrow,
        .${PAGE_ROOT} .is-inverse .sesen-pharma-eyebrow {
          color: var(--sesen-pharma-light-blue);
        }

        .${PAGE_ROOT} .sesen-pharma-heading-group {
          max-width: 820px;
          margin-bottom: 54px;
        }

        .${PAGE_ROOT} .sesen-pharma-heading-group.is-centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .${PAGE_ROOT} .sesen-pharma-heading-group.is-inverse h2 {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-section-intro {
          font-size: 18px;
          color: var(--sesen-pharma-body);
          margin-top: 18px;
          max-width: 800px;
        }

        .${PAGE_ROOT} .is-centered .sesen-pharma-section-intro {
          margin-left: auto;
          margin-right: auto;
        }

        .${PAGE_ROOT} .is-inverse .sesen-pharma-section-intro {
          color: #C9D5EF;
        }

        .${PAGE_ROOT} .sesen-pharma-button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 26px;
          border-radius: 999px;
          background: var(--sesen-pharma-blue);
          color: #FFFFFF;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.04em;
          transition: background-color 160ms ease, transform 160ms ease, border-color 160ms ease;
        }

        .${PAGE_ROOT} .sesen-pharma-button:hover {
          background: var(--sesen-pharma-blue-dark);
          color: #FFFFFF;
          transform: translateY(-1px);
        }

        .${PAGE_ROOT} .sesen-pharma-button--secondary {
          background: #FFFFFF;
          color: var(--sesen-pharma-ink);
          border: 1px solid #C8D2E4;
        }

        .${PAGE_ROOT} .sesen-pharma-button--secondary:hover {
          background: var(--sesen-pharma-soft-blue);
          border-color: #AEBDE4;
          color: var(--sesen-pharma-ink);
        }

        .${PAGE_ROOT} .sesen-pharma-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sesen-pharma-blue-dark);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 650;
        }

        .${PAGE_ROOT} .sesen-pharma-link:hover span {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .${PAGE_ROOT} .sesen-pharma-link svg {
          transition: transform 160ms ease;
        }

        .${PAGE_ROOT} .sesen-pharma-link:hover svg {
          transform: translateX(3px);
        }

        /* HERO */
        .${PAGE_ROOT} .sesen-pharma-hero {
          padding-top: 96px;
          padding-bottom: 92px;
          background:
            radial-gradient(circle at 82% 16%, rgba(234, 240, 255, 0.75), transparent 30%),
            #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(390px, 0.95fr);
          gap: 68px;
          align-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-copy {
          max-width: 700px;
        }

        .${PAGE_ROOT} .sesen-pharma-hero h1 {
          max-width: 690px;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-lead {
          font-size: 20px;
          line-height: 1.58;
          color: #293954;
          margin-top: 24px;
          max-width: 680px;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-support {
          font-size: 17px;
          color: var(--sesen-pharma-body);
          margin-top: 18px;
          max-width: 680px;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 34px;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-note {
          margin-top: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-hero-note svg {
          color: var(--sesen-pharma-blue-dark);
          flex: 0 0 auto;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-art {
          width: 100%;
          max-width: 580px;
          justify-self: end;
        }

        .${PAGE_ROOT} .sesen-pharma-hero-art svg {
          display: block;
          width: 100%;
          height: auto;
        }

        /* TRUST */
        .${PAGE_ROOT} .sesen-pharma-trust {
          border-top: 1px solid var(--sesen-pharma-divider);
          border-bottom: 1px solid var(--sesen-pharma-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          align-items: stretch;
        }

        .${PAGE_ROOT} .sesen-pharma-trust-item {
          padding: 28px 24px 28px 0;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          min-width: 0;
        }

        .${PAGE_ROOT} .sesen-pharma-trust-item svg {
          color: var(--sesen-pharma-blue-dark);
          flex: 0 0 auto;
          margin-top: 2px;
        }

        .${PAGE_ROOT} .sesen-pharma-trust-item strong {
          display: block;
          color: var(--sesen-pharma-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 500;
        }

        .${PAGE_ROOT} .sesen-pharma-trust-item span {
          display: block;
          margin-top: 5px;
          font-size: 13px;
          line-height: 1.45;
          color: var(--sesen-pharma-muted);
        }

        /* LIFECYCLE */
        .${PAGE_ROOT} .sesen-pharma-lifecycle {
          position: relative;
        }

        .${PAGE_ROOT} .sesen-pharma-lifecycle::before {
          content: "";
          position: absolute;
          left: 7%;
          right: 7%;
          top: 52px;
          height: 2px;
          background: linear-gradient(90deg, #C9D4ED, var(--sesen-pharma-blue), #C9D4ED);
          z-index: 0;
        }

        .${PAGE_ROOT} .sesen-pharma-lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 0;
          position: relative;
          z-index: 1;
        }

        .${PAGE_ROOT} .sesen-pharma-stage {
          position: relative;
          padding: 0 18px 0 0;
        }

        .${PAGE_ROOT} .sesen-pharma-stage:not(:last-child) {
          border-right: 1px solid var(--sesen-pharma-divider);
          padding-right: 22px;
          margin-right: 22px;
        }

        .${PAGE_ROOT} .sesen-pharma-stage-marker {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 2px solid #B9C6E7;
          display: grid;
          place-items: center;
          color: var(--sesen-pharma-blue-dark);
          margin-bottom: 22px;
          box-shadow: 0 0 0 9px #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-stage h3 {
          font-size: 19px;
          min-height: 49px;
        }

        .${PAGE_ROOT} .sesen-pharma-stage p {
          margin-top: 12px;
          font-size: 16px;
          line-height: 1.56;
          color: var(--sesen-pharma-body);
        }

        .${PAGE_ROOT} .sesen-pharma-lifecycle-foundation {
          margin-top: 50px;
          border-radius: 22px;
          border: 1px solid #D7E0F1;
          background: linear-gradient(90deg, #FFFFFF, #F5F7FF);
          padding: 22px 28px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
        }

        .${PAGE_ROOT} .sesen-pharma-foundation-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--sesen-pharma-navy);
          font-size: 13px;
          font-weight: 650;
          text-align: center;
        }

        .${PAGE_ROOT} .sesen-pharma-foundation-item svg {
          color: var(--sesen-pharma-blue-dark);
          flex: 0 0 auto;
        }

        /* CONTENT SCOPE */
        .${PAGE_ROOT} .sesen-pharma-scope-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-pharma-border);
          border-left: 1px solid var(--sesen-pharma-border);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-scope-item {
          padding: 34px;
          border-right: 1px solid var(--sesen-pharma-border);
          border-bottom: 1px solid var(--sesen-pharma-border);
          min-height: 310px;
          display: flex;
          flex-direction: column;
        }

        .${PAGE_ROOT} .sesen-pharma-scope-icon {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: var(--sesen-pharma-soft-blue);
          color: var(--sesen-pharma-blue-dark);
          margin-bottom: 22px;
        }

        .${PAGE_ROOT} .sesen-pharma-scope-item h3 {
          font-size: 22px;
        }

        .${PAGE_ROOT} .sesen-pharma-scope-item p {
          margin-top: 14px;
          font-size: 16px;
          line-height: 1.6;
          color: var(--sesen-pharma-body);
        }

        .${PAGE_ROOT} .sesen-pharma-scope-item .sesen-pharma-link {
          margin-top: auto;
          padding-top: 22px;
        }

        /* WORKFLOW */
        .${PAGE_ROOT} .sesen-pharma-workflow-grid {
          border-top: 1px solid rgba(200, 214, 255, 0.18);
        }

        .${PAGE_ROOT} .sesen-pharma-workflow-row {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 54px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(200, 214, 255, 0.18);
        }

        .${PAGE_ROOT} .sesen-pharma-workflow-title {
          display: flex;
          gap: 14px;
          align-items: flex-start;
        }

        .${PAGE_ROOT} .sesen-pharma-workflow-title svg {
          color: var(--sesen-pharma-light-blue);
          margin-top: 2px;
          flex: 0 0 auto;
        }

        .${PAGE_ROOT} .sesen-pharma-workflow-title h3 {
          color: #FFFFFF;
          font-size: 21px;
        }

        .${PAGE_ROOT} .sesen-pharma-workflow-row p {
          color: #CDD8EF;
          font-size: 17px;
          line-height: 1.65;
          max-width: 840px;
        }

        /* EXPERTISE */
        .${PAGE_ROOT} .sesen-pharma-expertise-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.83fr) minmax(0, 1.17fr);
          gap: 74px;
          align-items: start;
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-lead {
          position: sticky;
          top: 28px;
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-visual {
          margin-top: 32px;
          border-radius: 28px;
          border: 1px solid var(--sesen-pharma-border);
          background: linear-gradient(150deg, #FFFFFF, #F5F7FF);
          padding: 34px;
          min-height: 280px;
          position: relative;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-network-center {
          width: 126px;
          height: 126px;
          border-radius: 50%;
          background: var(--sesen-pharma-deep-blue);
          color: #FFFFFF;
          display: grid;
          place-items: center;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.35;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          box-shadow: 0 16px 34px rgba(37, 63, 143, 0.16);
        }

        .${PAGE_ROOT} .sesen-pharma-network-node {
          position: absolute;
          width: 86px;
          height: 86px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #D5DEEF;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 8px;
          color: var(--sesen-pharma-navy);
          font-size: 12px;
          font-weight: 650;
          line-height: 1.3;
        }

        .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(2) { top: 28px; left: 26px; }
        .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(3) { top: 27px; right: 22px; }
        .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(4) { bottom: 26px; left: 18px; }
        .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(5) { bottom: 22px; right: 30px; }

        .${PAGE_ROOT} .sesen-pharma-expertise-list {
          border-top: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-item {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 20px;
          padding: 29px 0;
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-icon {
          width: 46px;
          height: 46px;
          border-radius: 13px;
          background: var(--sesen-pharma-soft-blue);
          color: var(--sesen-pharma-blue-dark);
          display: grid;
          place-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-item h3 {
          font-size: 21px;
        }

        .${PAGE_ROOT} .sesen-pharma-expertise-item p {
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.62;
        }

        /* AI */
        .${PAGE_ROOT} .sesen-pharma-ai-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 70px;
          align-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-copy .sesen-pharma-section-intro {
          max-width: 640px;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-copy .sesen-pharma-link {
          margin-top: 26px;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-model {
          position: relative;
          min-height: 560px;
          border-radius: 30px;
          background: #FFFFFF;
          border: 1px solid #D8E1F1;
          box-shadow: 0 22px 56px rgba(23, 38, 77, 0.08);
          padding: 30px;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-center {
          width: 182px;
          height: 182px;
          border-radius: 50%;
          background: var(--sesen-pharma-navy);
          color: #FFFFFF;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-center svg {
          color: var(--sesen-pharma-light-blue);
          margin-bottom: 12px;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-center strong {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.25;
          font-weight: 500;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-center span {
          margin-top: 7px;
          font-size: 12px;
          color: #C8D6FF;
          line-height: 1.4;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-node {
          position: absolute;
          width: 204px;
          padding: 17px 18px;
          border: 1px solid #D8E1F1;
          border-radius: 18px;
          background: #FFFFFF;
          box-shadow: 0 11px 28px rgba(23, 38, 77, 0.06);
        }

        .${PAGE_ROOT} .sesen-pharma-ai-node--1 { left: 24px; top: 28px; }
        .${PAGE_ROOT} .sesen-pharma-ai-node--2 { right: 24px; top: 28px; }
        .${PAGE_ROOT} .sesen-pharma-ai-node--3 { left: 24px; bottom: 28px; }
        .${PAGE_ROOT} .sesen-pharma-ai-node--4 { right: 24px; bottom: 28px; }

        .${PAGE_ROOT} .sesen-pharma-ai-node svg {
          color: var(--sesen-pharma-blue-dark);
        }

        .${PAGE_ROOT} .sesen-pharma-ai-node h3 {
          font-size: 19px;
          margin-top: 9px;
        }

        .${PAGE_ROOT} .sesen-pharma-ai-node p {
          font-size: 16px;
          line-height: 1.55;
          margin-top: 8px;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-ai-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 320px;
          height: 320px;
          border: 1px dashed #BBC8E6;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }

        /* TERMINOLOGY */
        .${PAGE_ROOT} .sesen-pharma-terminology-panel {
          border-radius: 30px;
          border: 1px solid var(--sesen-pharma-border);
          background: #FFFFFF;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-term-top {
          display: grid;
          grid-template-columns: 0.7fr 1.3fr;
          min-height: 265px;
        }

        .${PAGE_ROOT} .sesen-pharma-term-approved {
          background: var(--sesen-pharma-navy);
          color: #FFFFFF;
          padding: 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .${PAGE_ROOT} .sesen-pharma-term-approved span {
          color: var(--sesen-pharma-light-blue);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .sesen-pharma-term-approved strong {
          margin-top: 16px;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-weight: 500;
          font-size: 27px;
          line-height: 1.3;
        }

        .${PAGE_ROOT} .sesen-pharma-term-approved p {
          margin-top: 12px;
          font-size: 16px;
          color: #CBD6ED;
          line-height: 1.58;
        }

        .${PAGE_ROOT} .sesen-pharma-term-process {
          padding: 38px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px 34px;
          align-content: center;
        }

        .${PAGE_ROOT} .sesen-pharma-term-process-item {
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr);
          gap: 13px;
        }

        .${PAGE_ROOT} .sesen-pharma-term-process-item svg {
          color: var(--sesen-pharma-blue-dark);
          margin-top: 2px;
        }

        .${PAGE_ROOT} .sesen-pharma-term-process-item strong {
          display: block;
          color: var(--sesen-pharma-navy);
          font-size: 16px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .sesen-pharma-term-process-item p {
          margin-top: 5px;
          font-size: 16px;
          line-height: 1.55;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-term-lifecycle {
          border-top: 1px solid var(--sesen-pharma-border);
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
        }

        .${PAGE_ROOT} .sesen-pharma-term-stage {
          padding: 25px 18px;
          text-align: center;
          color: var(--sesen-pharma-navy);
          font-size: 13px;
          font-weight: 650;
          position: relative;
        }

        .${PAGE_ROOT} .sesen-pharma-term-stage:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -7px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--sesen-pharma-blue);
          font-size: 18px;
        }

        /* QUALITY */
        .${PAGE_ROOT} .sesen-pharma-quality-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(360px, 0.95fr);
          gap: 68px;
          align-items: start;
        }

        .${PAGE_ROOT} .sesen-pharma-quality-list {
          border-top: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-quality-item {
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 16px;
          padding: 24px 0;
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-quality-check {
          width: 26px;
          height: 26px;
          border-radius: 50%;
          background: var(--sesen-pharma-soft-blue);
          color: var(--sesen-pharma-blue-dark);
          display: grid;
          place-items: center;
          margin-top: 1px;
        }

        .${PAGE_ROOT} .sesen-pharma-quality-item h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .sesen-pharma-quality-item p {
          margin-top: 8px;
          font-size: 16px;
          line-height: 1.58;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-panel {
          position: sticky;
          top: 28px;
          border-radius: 28px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-pharma-border);
          box-shadow: var(--sesen-pharma-shadow);
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-header {
          padding: 26px 28px 20px;
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-qa-header strong {
          display: block;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          color: var(--sesen-pharma-navy);
          font-weight: 500;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-header span {
          display: block;
          margin-top: 5px;
          font-size: 13px;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-qa-body {
          padding: 24px 28px 28px;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-source {
          border-radius: 18px;
          background: var(--sesen-pharma-soft);
          padding: 18px;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-source-label {
          color: var(--sesen-pharma-muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-source p {
          margin-top: 9px;
          font-size: 15px;
          line-height: 1.55;
          color: var(--sesen-pharma-navy);
        }

        .${PAGE_ROOT} .sesen-pharma-qa-flags {
          margin-top: 18px;
          display: grid;
          gap: 10px;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-flag {
          display: grid;
          grid-template-columns: 28px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
          padding: 12px 13px;
          border: 1px solid var(--sesen-pharma-border);
          border-radius: 13px;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-flag svg {
          color: var(--sesen-pharma-blue-dark);
        }

        .${PAGE_ROOT} .sesen-pharma-qa-flag span {
          color: var(--sesen-pharma-navy);
          font-size: 13px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .sesen-pharma-qa-status {
          font-size: 11px !important;
          color: var(--sesen-pharma-blue-dark) !important;
          text-transform: uppercase;
          letter-spacing: .08em;
        }

        /* REGULATORY */
        .${PAGE_ROOT} .sesen-pharma-regulatory-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-copy .sesen-pharma-section-intro {
          max-width: 640px;
        }

        .${PAGE_ROOT} .sesen-pharma-authority-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
          margin-top: 26px;
        }

        .${PAGE_ROOT} .sesen-pharma-authority-tag {
          border: 1px solid #B9C7E6;
          background: #FFFFFF;
          color: var(--sesen-pharma-navy);
          border-radius: 999px;
          padding: 7px 13px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-stack {
          background: #FFFFFF;
          border: 1px solid var(--sesen-pharma-border);
          border-radius: 28px;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-header {
          padding: 28px 30px;
          background: var(--sesen-pharma-navy);
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-header strong {
          display: block;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 23px;
          font-weight: 500;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-header span {
          display: block;
          margin-top: 8px;
          font-size: 16px;
          color: #CAD5EC;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-modules {
          padding: 22px 30px 28px;
          display: grid;
          gap: 9px;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-module {
          min-height: 49px;
          display: grid;
          grid-template-columns: 86px minmax(0, 1fr);
          align-items: center;
          border: 1px solid var(--sesen-pharma-border);
          border-radius: 13px;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-module strong {
          height: 100%;
          display: grid;
          place-items: center;
          background: var(--sesen-pharma-soft-blue);
          color: var(--sesen-pharma-blue-dark);
          font-size: 12px;
          letter-spacing: 0.04em;
        }

        .${PAGE_ROOT} .sesen-pharma-ctd-module span {
          padding: 11px 14px;
          color: var(--sesen-pharma-navy);
          font-size: 14px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-list {
          margin-top: 30px;
          display: grid;
          gap: 0;
          border-top: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-links {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 14px 28px;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-item {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 16px;
          padding: 22px 0;
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-item svg {
          color: var(--sesen-pharma-blue-dark);
          margin-top: 2px;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-item h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .sesen-pharma-regulatory-item p {
          margin-top: 7px;
          font-size: 16px;
          line-height: 1.58;
          color: var(--sesen-pharma-muted);
        }

        /* PROGRAM MANAGEMENT */
        .${PAGE_ROOT} .sesen-pharma-program-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(200, 214, 255, 0.18);
          border-left: 1px solid rgba(200, 214, 255, 0.18);
        }

        .${PAGE_ROOT} .sesen-pharma-program-item {
          padding: 30px;
          border-right: 1px solid rgba(200, 214, 255, 0.18);
          border-bottom: 1px solid rgba(200, 214, 255, 0.18);
        }

        .${PAGE_ROOT} .sesen-pharma-program-item svg {
          color: var(--sesen-pharma-light-blue);
        }

        .${PAGE_ROOT} .sesen-pharma-program-item h3 {
          color: #FFFFFF;
          font-size: 20px;
          margin-top: 16px;
        }

        .${PAGE_ROOT} .sesen-pharma-program-item p {
          margin-top: 10px;
          color: #CBD6ED;
          font-size: 16px;
          line-height: 1.6;
        }

        /* LANGUAGES */
        .${PAGE_ROOT} .sesen-pharma-global-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 76px;
          align-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-global-copy .sesen-pharma-section-intro {
          max-width: 650px;
        }

        .${PAGE_ROOT} .sesen-pharma-global-points {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .${PAGE_ROOT} .sesen-pharma-global-point {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          color: var(--sesen-pharma-navy);
          font-size: 16px;
          font-weight: 650;
        }

        .${PAGE_ROOT} .sesen-pharma-global-point svg {
          color: var(--sesen-pharma-blue-dark);
          flex: 0 0 auto;
        }

        .${PAGE_ROOT} .sesen-pharma-global-visual {
          min-height: 410px;
          border-radius: 30px;
          background: linear-gradient(150deg, #F7F9FD, #EAF0FF);
          border: 1px solid var(--sesen-pharma-border);
          position: relative;
          overflow: hidden;
          display: grid;
          place-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-global-orbit {
          width: 286px;
          height: 286px;
          border: 1px dashed #A9B7D9;
          border-radius: 50%;
          position: relative;
          display: grid;
          place-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-global-orbit::before,
        .${PAGE_ROOT} .sesen-pharma-global-orbit::after {
          content: "";
          position: absolute;
          border: 1px solid #CCD5E7;
          border-radius: 50%;
        }

        .${PAGE_ROOT} .sesen-pharma-global-orbit::before {
          width: 208px;
          height: 208px;
        }

        .${PAGE_ROOT} .sesen-pharma-global-orbit::after {
          width: 132px;
          height: 132px;
        }

        .${PAGE_ROOT} .sesen-pharma-global-center {
          width: 102px;
          height: 102px;
          border-radius: 50%;
          background: var(--sesen-pharma-deep-blue);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          position: relative;
          z-index: 2;
          text-align: center;
        }

        .${PAGE_ROOT} .sesen-pharma-global-center strong {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 26px;
          font-weight: 500;
          line-height: 1;
        }

        .${PAGE_ROOT} .sesen-pharma-global-center span {
          margin-top: 5px;
          font-size: 11px;
          color: #C8D6FF;
        }

        .${PAGE_ROOT} .sesen-pharma-region {
          position: absolute;
          padding: 8px 12px;
          border-radius: 999px;
          background: #FFFFFF;
          border: 1px solid #C9D3E8;
          color: var(--sesen-pharma-navy);
          font-size: 12px;
          font-weight: 650;
          box-shadow: 0 8px 20px rgba(23,38,77,.06);
        }

        .${PAGE_ROOT} .sesen-pharma-region:nth-child(2) { top: 38px; left: 50%; transform: translateX(-50%); }
        .${PAGE_ROOT} .sesen-pharma-region:nth-child(3) { right: 34px; top: 50%; transform: translateY(-50%); }
        .${PAGE_ROOT} .sesen-pharma-region:nth-child(4) { bottom: 42px; left: 50%; transform: translateX(-50%); }
        .${PAGE_ROOT} .sesen-pharma-region:nth-child(5) { left: 24px; top: 50%; transform: translateY(-50%); }

        /* QUALITY SYSTEMS */
        .${PAGE_ROOT} .sesen-pharma-systems-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .${PAGE_ROOT} .sesen-pharma-iso {
          background: #FFFFFF;
          border: 1px solid var(--sesen-pharma-border);
          border-radius: 22px;
          padding: 30px;
        }

        .${PAGE_ROOT} .sesen-pharma-iso strong {
          display: block;
          color: var(--sesen-pharma-blue-dark);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 25px;
          font-weight: 500;
        }

        .${PAGE_ROOT} .sesen-pharma-iso p {
          margin-top: 12px;
          font-size: 16px;
          line-height: 1.58;
        }

        .${PAGE_ROOT} .sesen-pharma-governance-row {
          margin-top: 22px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-radius: 22px;
          overflow: hidden;
          border: 1px solid var(--sesen-pharma-border);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-governance-item {
          padding: 24px 26px;
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
        }

        .${PAGE_ROOT} .sesen-pharma-governance-item:not(:last-child) {
          border-right: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-governance-item svg {
          color: var(--sesen-pharma-blue-dark);
        }

        .${PAGE_ROOT} .sesen-pharma-governance-item strong {
          color: var(--sesen-pharma-navy);
          display: block;
          font-size: 16px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .sesen-pharma-governance-item span {
          display: block;
          margin-top: 6px;
          color: var(--sesen-pharma-muted);
          font-size: 16px;
          line-height: 1.55;
        }

        /* CASE STUDIES */
        .${PAGE_ROOT} .sesen-pharma-case-list {
          border-top: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-case {
          display: grid;
          grid-template-columns: 0.56fr 1.12fr 0.32fr;
          gap: 38px;
          align-items: start;
          padding: 38px 0;
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-case-label {
          color: var(--sesen-pharma-blue-dark);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .sesen-pharma-case-meta {
          margin-top: 13px;
          font-size: 12px;
          color: var(--sesen-pharma-muted);
          line-height: 1.5;
          font-weight: 650;
        }

        .${PAGE_ROOT} .sesen-pharma-case h3 {
          font-size: 24px;
        }

        .${PAGE_ROOT} .sesen-pharma-case p {
          margin-top: 12px;
          font-size: 16px;
          line-height: 1.62;
        }

        .${PAGE_ROOT} .sesen-pharma-case-action {
          justify-self: end;
          padding-top: 4px;
        }

        /* RELATED */
        .${PAGE_ROOT} .sesen-pharma-related-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-pharma-border);
          border-left: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-related-item {
          border-right: 1px solid var(--sesen-pharma-border);
          border-bottom: 1px solid var(--sesen-pharma-border);
          padding: 27px 30px 28px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: start;
        }

        .${PAGE_ROOT} .sesen-pharma-related-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .sesen-pharma-related-item p {
          margin-top: 8px;
          font-size: 16px;
          line-height: 1.58;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-related-arrow {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #C9D3E8;
          display: grid;
          place-items: center;
          color: var(--sesen-pharma-blue-dark);
          transition: background-color 160ms ease, transform 160ms ease;
        }

        .${PAGE_ROOT} .sesen-pharma-related-item:hover .sesen-pharma-related-arrow {
          background: var(--sesen-pharma-soft-blue);
          transform: translateX(2px);
        }

        .${PAGE_ROOT} .sesen-pharma-related-item {
          text-decoration: none;
        }

        /* RESOURCES */
        .${PAGE_ROOT} .sesen-pharma-resource-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
        }

        .${PAGE_ROOT} .sesen-pharma-resource {
          border: 1px solid var(--sesen-pharma-border);
          border-radius: 20px;
          background: #FFFFFF;
          padding: 27px;
          display: flex;
          flex-direction: column;
          min-height: 285px;
          text-decoration: none;
          transition: transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
        }

        .${PAGE_ROOT} .sesen-pharma-resource:hover {
          transform: translateY(-3px);
          border-color: #B8C6E5;
          box-shadow: 0 16px 34px rgba(23,38,77,.07);
        }

        .${PAGE_ROOT} .sesen-pharma-resource-category {
          color: var(--sesen-pharma-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .sesen-pharma-resource h3 {
          margin-top: 18px;
          font-size: 20px;
        }

        .${PAGE_ROOT} .sesen-pharma-resource p {
          margin-top: 11px;
          font-size: 16px;
          line-height: 1.58;
          color: var(--sesen-pharma-muted);
        }

        .${PAGE_ROOT} .sesen-pharma-resource .sesen-pharma-link {
          margin-top: auto;
          padding-top: 22px;
        }

        /* FAQ */
        .${PAGE_ROOT} .sesen-pharma-faq {
          max-width: 920px;
        }

        .${PAGE_ROOT} .sesen-pharma-faq-item {
          border-bottom: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-faq-item:first-child {
          border-top: 1px solid var(--sesen-pharma-border);
        }

        .${PAGE_ROOT} .sesen-pharma-faq-button {
          width: 100%;
          border: 0;
          background: transparent;
          color: var(--sesen-pharma-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 500;
          padding: 24px 0;
          text-align: left;
          cursor: pointer;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 24px;
          align-items: center;
        }

        .${PAGE_ROOT} .sesen-pharma-faq-toggle {
          width: 32px;
          height: 32px;
          border: 1px solid #C7D2E6;
          border-radius: 50%;
          display: grid;
          place-items: center;
          position: relative;
          color: var(--sesen-pharma-blue-dark);
        }

        .${PAGE_ROOT} .sesen-pharma-faq-toggle::before,
        .${PAGE_ROOT} .sesen-pharma-faq-toggle::after {
          content: "";
          position: absolute;
          width: 11px;
          height: 1.5px;
          background: currentColor;
          transition: transform 160ms ease;
        }

        .${PAGE_ROOT} .sesen-pharma-faq-toggle::after {
          transform: rotate(90deg);
        }

        .${PAGE_ROOT} .sesen-pharma-faq-button[aria-expanded="true"] .sesen-pharma-faq-toggle::after {
          transform: rotate(0deg);
        }

        .${PAGE_ROOT} .sesen-pharma-faq-answer {
          padding: 0 58px 25px 0;
          color: var(--sesen-pharma-body);
          font-size: 16px;
          line-height: 1.65;
          max-width: 840px;
        }

        /* FINAL CTA */
        .${PAGE_ROOT} .sesen-pharma-final-wrap {
          padding-top: 96px;
          padding-bottom: 96px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .sesen-pharma-final {
          border-radius: 30px;
          background:
            radial-gradient(circle at 84% 20%, rgba(111,139,225,.35), transparent 31%),
            var(--sesen-pharma-navy);
          padding: 58px 64px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 50px;
          align-items: center;
          overflow: hidden;
        }

        .${PAGE_ROOT} .sesen-pharma-final h2 {
          color: #FFFFFF;
          max-width: 760px;
        }

        .${PAGE_ROOT} .sesen-pharma-final p {
          color: #CAD5EC;
          font-size: 17px;
          line-height: 1.6;
          margin-top: 15px;
          max-width: 760px;
        }

        .${PAGE_ROOT} .sesen-pharma-final-actions {
          display: flex;
          flex-direction: column;
          gap: 11px;
          min-width: 220px;
        }

        .${PAGE_ROOT} .sesen-pharma-final .sesen-pharma-button--secondary {
          border-color: rgba(255,255,255,.7);
        }

        @media (max-width: 1150px) {
          .${PAGE_ROOT} .sesen-pharma-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-grid {
            gap: 44px;
            grid-template-columns: minmax(0, 1.08fr) minmax(330px, .92fr);
          }

          .${PAGE_ROOT} .sesen-pharma-trust-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 36px 0;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle::before {
            display: none;
          }

          .${PAGE_ROOT} .sesen-pharma-stage:nth-child(3n) {
            border-right: 0;
            margin-right: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-stage-marker {
            box-shadow: none;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-foundation {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-ai-node {
            width: 184px;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-line {
            width: 275px;
            height: 275px;
          }

          .${PAGE_ROOT} .sesen-pharma-resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .${PAGE_ROOT} .sesen-pharma-shell {
            padding-left: 30px;
            padding-right: 30px;
          }

          .${PAGE_ROOT} .sesen-pharma-section {
            padding-top: 78px;
            padding-bottom: 78px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero {
            padding-top: 78px;
            padding-bottom: 76px;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-grid,
          .${PAGE_ROOT} .sesen-pharma-expertise-grid,
          .${PAGE_ROOT} .sesen-pharma-ai-layout,
          .${PAGE_ROOT} .sesen-pharma-quality-layout,
          .${PAGE_ROOT} .sesen-pharma-regulatory-layout,
          .${PAGE_ROOT} .sesen-pharma-global-layout {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-art {
            justify-self: center;
            max-width: 620px;
          }

          .${PAGE_ROOT} .sesen-pharma-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-stage,
          .${PAGE_ROOT} .sesen-pharma-stage:not(:last-child) {
            border-right: 0;
            margin-right: 0;
            padding-right: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-stage:nth-child(odd) {
            border-right: 1px solid var(--sesen-pharma-divider);
            padding-right: 24px;
            margin-right: 24px;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-foundation {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-workflow-row {
            grid-template-columns: 230px minmax(0, 1fr);
            gap: 30px;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-lead,
          .${PAGE_ROOT} .sesen-pharma-qa-panel {
            position: static;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-grid,
          .${PAGE_ROOT} .sesen-pharma-ai-layout,
          .${PAGE_ROOT} .sesen-pharma-quality-layout,
          .${PAGE_ROOT} .sesen-pharma-regulatory-layout,
          .${PAGE_ROOT} .sesen-pharma-global-layout {
            gap: 48px;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-model {
            min-height: 540px;
          }

          .${PAGE_ROOT} .sesen-pharma-term-top {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-term-lifecycle {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-term-stage:nth-child(3)::after,
          .${PAGE_ROOT} .sesen-pharma-term-stage:nth-child(6)::after {
            display: none;
          }

          .${PAGE_ROOT} .sesen-pharma-term-stage:nth-child(-n+3) {
            border-bottom: 1px solid var(--sesen-pharma-border);
          }

          .${PAGE_ROOT} .sesen-pharma-program-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .sesen-pharma-case {
            grid-template-columns: 0.42fr 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-case-action {
            grid-column: 2;
            justify-self: start;
          }

          .${PAGE_ROOT} .sesen-pharma-systems-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-governance-row {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-governance-item:not(:last-child) {
            border-right: 0;
            border-bottom: 1px solid var(--sesen-pharma-border);
          }

          .${PAGE_ROOT} .sesen-pharma-final {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-final-actions {
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 0;
          }
        }

        @media (max-width: 640px) {
          .${PAGE_ROOT} .sesen-pharma-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .${PAGE_ROOT} .sesen-pharma-section,
          .${PAGE_ROOT} .sesen-pharma-section--dense {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero {
            padding-top: 68px;
            padding-bottom: 64px;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} .sesen-pharma-heading-group {
            margin-bottom: 40px;
          }

          .${PAGE_ROOT} .sesen-pharma-section-intro {
            font-size: 17px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-lead {
            font-size: 18px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-support {
            font-size: 16px;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-button {
            width: 100%;
          }

          .${PAGE_ROOT} .sesen-pharma-hero-art {
            margin-top: 4px;
          }

          .${PAGE_ROOT} .sesen-pharma-trust-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-trust-item {
            padding: 20px 0;
            border-bottom: 1px solid var(--sesen-pharma-divider);
          }

          .${PAGE_ROOT} .sesen-pharma-trust-item:last-child {
            border-bottom: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-stage,
          .${PAGE_ROOT} .sesen-pharma-stage:not(:last-child),
          .${PAGE_ROOT} .sesen-pharma-stage:nth-child(odd) {
            padding: 26px 0;
            margin: 0;
            border-right: 0;
            border-bottom: 1px solid var(--sesen-pharma-border);
            display: grid;
            grid-template-columns: 50px minmax(0, 1fr);
            column-gap: 16px;
          }

          .${PAGE_ROOT} .sesen-pharma-stage:last-child {
            border-bottom: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-stage-marker {
            margin: 0;
            grid-row: 1 / span 2;
          }

          .${PAGE_ROOT} .sesen-pharma-stage h3 {
            min-height: 0;
            font-size: 20px;
          }

          .${PAGE_ROOT} .sesen-pharma-stage p {
            margin-top: 9px;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-foundation {
            grid-template-columns: 1fr 1fr;
            padding: 19px;
          }

          .${PAGE_ROOT} .sesen-pharma-foundation-item {
            justify-content: flex-start;
            text-align: left;
          }

          .${PAGE_ROOT} .sesen-pharma-scope-grid {
            grid-template-columns: 1fr;
            border-left: 0;
            border-top: 1px solid var(--sesen-pharma-border);
          }

          .${PAGE_ROOT} .sesen-pharma-scope-item {
            border-left: 0;
            border-right: 0;
            min-height: 0;
            padding: 28px 0;
          }

          .${PAGE_ROOT} .sesen-pharma-workflow-row {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 26px 0;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-visual {
            min-height: 305px;
            padding: 22px;
          }

          .${PAGE_ROOT} .sesen-pharma-network-center {
            width: 112px;
            height: 112px;
          }

          .${PAGE_ROOT} .sesen-pharma-network-node {
            width: 74px;
            height: 74px;
            font-size: 11px;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-item {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 15px;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-icon {
            width: 42px;
            height: 42px;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-model {
            min-height: auto;
            padding: 22px;
            display: grid;
            gap: 12px;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-line {
            display: none;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-center,
          .${PAGE_ROOT} .sesen-pharma-ai-node,
          .${PAGE_ROOT} .sesen-pharma-ai-node--1,
          .${PAGE_ROOT} .sesen-pharma-ai-node--2,
          .${PAGE_ROOT} .sesen-pharma-ai-node--3,
          .${PAGE_ROOT} .sesen-pharma-ai-node--4 {
            position: static;
            width: auto;
            height: auto;
            transform: none;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-center {
            border-radius: 20px;
            padding: 26px 18px;
          }

          .${PAGE_ROOT} .sesen-pharma-ai-node {
            box-shadow: none;
          }

          .${PAGE_ROOT} .sesen-pharma-term-approved,
          .${PAGE_ROOT} .sesen-pharma-term-process {
            padding: 28px 24px;
          }

          .${PAGE_ROOT} .sesen-pharma-term-process {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-term-lifecycle {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-term-stage {
            text-align: left;
            padding: 17px 22px;
            border-bottom: 1px solid var(--sesen-pharma-border);
          }

          .${PAGE_ROOT} .sesen-pharma-term-stage::after {
            content: "↓" !important;
            display: block !important;
            top: auto !important;
            right: 20px !important;
            bottom: -14px !important;
            transform: none !important;
            z-index: 2;
            background: #FFFFFF;
            padding: 0 4px;
          }

          .${PAGE_ROOT} .sesen-pharma-term-stage:last-child::after {
            display: none !important;
          }

          .${PAGE_ROOT} .sesen-pharma-quality-layout {
            gap: 38px;
          }

          .${PAGE_ROOT} .sesen-pharma-ctd-module {
            grid-template-columns: 72px minmax(0, 1fr);
          }

          .${PAGE_ROOT} .sesen-pharma-program-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-program-item {
            border-left: 0;
            border-right: 0;
            padding: 26px 0;
          }

          .${PAGE_ROOT} .sesen-pharma-global-points {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-global-visual {
            min-height: 350px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-orbit {
            width: 240px;
            height: 240px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-orbit::before {
            width: 176px;
            height: 176px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-orbit::after {
            width: 112px;
            height: 112px;
          }

          .${PAGE_ROOT} .sesen-pharma-region:nth-child(3) { right: 8px; }
          .${PAGE_ROOT} .sesen-pharma-region:nth-child(5) { left: 8px; }

          .${PAGE_ROOT} .sesen-pharma-governance-row {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-governance-item:not(:last-child) {
            border-right: 0;
            border-bottom: 1px solid var(--sesen-pharma-border);
          }

          .${PAGE_ROOT} .sesen-pharma-case {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .${PAGE_ROOT} .sesen-pharma-case-action {
            grid-column: auto;
          }

          .${PAGE_ROOT} .sesen-pharma-related-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-related-item {
            border-left: 0;
            border-right: 0;
            padding: 24px 0;
          }

          .${PAGE_ROOT} .sesen-pharma-resource-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-resource {
            min-height: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-faq-button {
            font-size: 19px;
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 14px;
          }

          .${PAGE_ROOT} .sesen-pharma-faq-answer {
            padding-right: 0;
          }

          .${PAGE_ROOT} .sesen-pharma-final-wrap {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .${PAGE_ROOT} .sesen-pharma-final {
            padding: 42px 26px;
            border-radius: 24px;
          }

          .${PAGE_ROOT} .sesen-pharma-final-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 360px) {
          .${PAGE_ROOT} h1 {
            font-size: 38px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 30px;
          }

          .${PAGE_ROOT} .sesen-pharma-lifecycle-foundation {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .sesen-pharma-expertise-visual {
            min-height: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
            padding: 18px;
          }

          .${PAGE_ROOT} .sesen-pharma-network-center {
            position: static;
            transform: none;
            width: 100%;
            height: auto;
            min-height: 92px;
            border-radius: 18px;
            grid-column: 1 / -1;
          }

          .${PAGE_ROOT} .sesen-pharma-network-node,
          .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(2),
          .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(3),
          .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(4),
          .${PAGE_ROOT} .sesen-pharma-network-node:nth-child(5) {
            position: static;
            width: 100%;
            height: auto;
            min-height: 70px;
            border-radius: 14px;
            padding: 9px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-visual {
            min-height: 0;
            padding: 22px 18px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-orbit {
            width: 100%;
            height: auto;
            border: 0;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px;
          }

          .${PAGE_ROOT} .sesen-pharma-global-orbit::before,
          .${PAGE_ROOT} .sesen-pharma-global-orbit::after {
            display: none;
          }

          .${PAGE_ROOT} .sesen-pharma-global-center {
            position: static;
            width: 100%;
            height: auto;
            min-height: 92px;
            border-radius: 18px;
            grid-column: 1 / -1;
          }

          .${PAGE_ROOT} .sesen-pharma-region,
          .${PAGE_ROOT} .sesen-pharma-region:nth-child(2),
          .${PAGE_ROOT} .sesen-pharma-region:nth-child(3),
          .${PAGE_ROOT} .sesen-pharma-region:nth-child(4),
          .${PAGE_ROOT} .sesen-pharma-region:nth-child(5) {
            position: static;
            transform: none;
            width: 100%;
            text-align: center;
            font-size: 10px;
            line-height: 1.3;
            padding: 8px 6px;
            box-shadow: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE_ROOT} .sesen-pharma-button,
          .${PAGE_ROOT} .sesen-pharma-link svg,
          .${PAGE_ROOT} .sesen-pharma-resource,
          .${PAGE_ROOT} .sesen-pharma-related-arrow,
          .${PAGE_ROOT} .sesen-pharma-faq-toggle::after {
            transition: none;
          }
        }
      `}</style>

      <section className="sesen-pharma-hero">
        <div className="sesen-pharma-shell sesen-pharma-hero-grid">
          <div className="sesen-pharma-hero-copy">
            <h1>Pharmaceutical Translation Services</h1>
            <p className="sesen-pharma-hero-lead">
              Specialized pharmaceutical translation for clinical, regulatory, CMC, labeling,
              pharmacovigilance, medical affairs, and commercial content across the global drug
              lifecycle.
            </p>
            <p className="sesen-pharma-hero-support">
              Sesen helps pharmaceutical organizations manage complex multilingual content with
              professional native life sciences linguists, controlled terminology, structured
              review, translation memory, and AI-assisted quality validation—from one critical
              document to an ongoing global drug program.
            </p>
            <div className="sesen-pharma-hero-actions">
              <ButtonLink href="https://www.sesen.com/contact-sales/">
                TALK WITH TEAM SESEN
              </ButtonLink>
              <ButtonLink href="https://www.sesen.com/get-a-quote/" secondary>
                REQUEST A QUOTE
              </ButtonLink>
            </div>
            <div className="sesen-pharma-hero-note">
              <Icon name="secure" size={19} />
              <span>Controlled workflows for regulated, scientific, and patient-facing content.</span>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-pharma-trust" aria-label="Pharmaceutical translation credentials">
        <div className="sesen-pharma-shell sesen-pharma-trust-grid">
          {[
            ["molecule", "Life Sciences Specialization", "Specialized pharmaceutical and regulated-content expertise"],
            ["qa", "ISO-Certified Quality Systems", "ISO 17100 · ISO 9001 · ISO 13485"],
            ["people", "Professional Native Linguists", "Resources aligned with content and subject matter"],
            ["terminology", "Terminology Governance", "Controlled multilingual terminology and translation memory"],
            ["globe", "150+ Languages", "Coordinated multilingual delivery across global markets"],
          ].map(([icon, title, text]) => (
            <div className="sesen-pharma-trust-item" key={title}>
              <Icon name={icon} />
              <div>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Translation Across the Pharmaceutical Product Lifecycle"
            intro="Pharmaceutical content changes continuously as a drug moves from research and clinical development through regulatory review, market launch, safety monitoring, and lifecycle management. Sesen connects specialized translation with terminology, review, validation, version control, and program management across that journey."
          />

          <div className="sesen-pharma-lifecycle">
            <div className="sesen-pharma-lifecycle-grid">
              {lifecycleStages.map((stage) => (
                <article className="sesen-pharma-stage" key={stage.title}>
                  <div className="sesen-pharma-stage-marker">
                    <Icon name={stage.icon} />
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="sesen-pharma-lifecycle-foundation" aria-label="Cross-lifecycle capabilities">
            {[
              ["terminology", "Terminology Governance"],
              ["memory", "Translation Memory"],
              ["review", "Professional Review"],
              ["qa", "Quality Validation"],
              ["versions", "Version Control"],
              ["layers", "Program Management"],
            ].map(([icon, label]) => (
              <div className="sesen-pharma-foundation-item" key={label}>
                <Icon name={icon} size={17} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--soft">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Specialized Translation for Pharmaceutical Content"
            intro="Different pharmaceutical teams create different content for different audiences and stages of the product lifecycle. Sesen brings these workflows together so approved terminology, reference content, translation assets, and review decisions can remain aligned across the program."
          />
          <div className="sesen-pharma-scope-grid">
            {contentGroups.map((item) => (
              <article className="sesen-pharma-scope-item" key={item.title}>
                <div className="sesen-pharma-scope-icon">
                  <Icon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ArrowLink href={item.href}>{item.link}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--deep">
        <div className="sesen-pharma-shell">
          <SectionHeading
            eyebrow="RISK-APPROPRIATE DELIVERY"
            title="The Right Workflow for Every Pharmaceutical Content Type"
            intro="A regulatory dossier, an informed consent form, an adverse-event narrative, a package insert, and an internal training module have different audiences, risk profiles, timelines, and review requirements. Sesen aligns the multilingual workflow with the content and its intended use."
            inverse
          />
          <div className="sesen-pharma-workflow-grid">
            {workflowTypes.map((item) => (
              <div className="sesen-pharma-workflow-row" key={item.title}>
                <div className="sesen-pharma-workflow-title">
                  <Icon name={item.icon} />
                  <h3>{item.title}</h3>
                </div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell sesen-pharma-expertise-grid">
          <div className="sesen-pharma-expertise-lead">
            <SectionHeading
              title="Pharmaceutical Expertise Behind Every Translation"
              intro="Medical fluency alone is not enough. A linguist working on an oncology protocol needs a different knowledge profile from one reviewing CMC documentation, a safety narrative, patient labeling, or an MSL training deck."
            />
            <div className="sesen-pharma-expertise-visual" aria-hidden="true">
              <div className="sesen-pharma-network-center">PHARMACEUTICAL<br />PROGRAM</div>
              <div className="sesen-pharma-network-node">Clinical</div>
              <div className="sesen-pharma-network-node">Regulatory</div>
              <div className="sesen-pharma-network-node">Safety</div>
              <div className="sesen-pharma-network-node">Medical Affairs</div>
            </div>
          </div>
          <div className="sesen-pharma-expertise-list">
            {expertiseItems.map((item) => (
              <div className="sesen-pharma-expertise-item" key={item.title}>
                <div className="sesen-pharma-expertise-icon">
                  <Icon name={item.icon} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--pale">
        <div className="sesen-pharma-shell sesen-pharma-ai-layout">
          <div className="sesen-pharma-ai-copy">
            <h2>Professional Expertise, Enhanced by SesenGPT</h2>
            <p className="sesen-pharma-section-intro">
              AI can create meaningful efficiencies in pharmaceutical translation when it is used
              within a controlled workflow appropriate to the content. SesenGPT supports selected
              translation, terminology, content-reuse, and validation tasks while professional life
              sciences linguists remain central to context, review, and final quality.
            </p>
            <ArrowLink href="https://www.sesen.com/sesengpt/">
              Explore SesenGPT
            </ArrowLink>
          </div>

          <div className="sesen-pharma-ai-model">
            <div className="sesen-pharma-ai-line" aria-hidden="true" />
            <div className="sesen-pharma-ai-center">
              <Icon name="people" size={28} />
              <strong>Professional<br />Expertise</strong>
              <span>Central to final quality</span>
            </div>
            {aiCapabilities.map((item, index) => (
              <div className={`sesen-pharma-ai-node sesen-pharma-ai-node--${index + 1}`} key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell">
          <SectionHeading
            eyebrow="TERMINOLOGY GOVERNANCE"
            title="Keep Pharmaceutical Terminology Consistent Across Languages and Programs"
            intro="One drug program can generate terminology across protocols, submissions, CMC documentation, labeling, pharmacovigilance, medical affairs, training, and commercial content. Sesen treats terminology as a managed multilingual asset that can follow the program across documents, languages, versions, and lifecycle stages."
          />

          <div className="sesen-pharma-terminology-panel">
            <div className="sesen-pharma-term-top">
              <div className="sesen-pharma-term-approved">
                <span>CONTROLLED LANGUAGE ASSET</span>
                <strong>One Approved Term.<br />Many Connected Workflows.</strong>
                <p>Program terminology can be maintained once and applied across related content instead of being re-decided document by document.</p>
              </div>
              <div className="sesen-pharma-term-process">
                {[
                  ["terminology", "Build Program Terminology", "Identify scientific, clinical, product, regulatory, safety, and company-specific terms."],
                  ["check", "Apply Approved Language", "Give translators and reviewers a shared reference for preferred multilingual terminology."],
                  ["memory", "Connect With Translation Memory", "Pair approved terms with previously reviewed segments for consistent content reuse."],
                  ["review", "Capture Reviewer Decisions", "Feed accepted sponsor, affiliate, or in-country review decisions into future work."],
                ].map(([icon, title, text]) => (
                  <div className="sesen-pharma-term-process-item" key={title}>
                    <Icon name={icon} size={22} />
                    <div>
                      <strong>{title}</strong>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sesen-pharma-term-lifecycle">
              {terminologyStages.map((stage) => (
                <div className="sesen-pharma-term-stage" key={stage}>{stage}</div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 24 }}>
            <ArrowLink href="https://www.sesen.com/terminology-management-harmonization/">
              Terminology Management & Harmonization
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--soft">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Quality Controls for Complex Pharmaceutical Content"
            intro="Pharmaceutical translation quality extends beyond fluent language. Scientific meaning, terminology, numerical data, cross-references, tables, figures, formatting, and completeness all affect whether multilingual content can be used confidently."
          />
          <div className="sesen-pharma-quality-layout">
            <div className="sesen-pharma-quality-list">
              {qualityChecks.map((item) => (
                <div className="sesen-pharma-quality-item" key={item.title}>
                  <div className="sesen-pharma-quality-check">
                    <Icon name="check" size={15} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="sesen-pharma-qa-panel" aria-label="Pharmaceutical quality review example">
              <div className="sesen-pharma-qa-header">
                <strong>Multilingual Quality Review</strong>
                <span>Example quality validation workflow</span>
              </div>
              <div className="sesen-pharma-qa-body">
                <div className="sesen-pharma-qa-source">
                  <div className="sesen-pharma-qa-source-label">CONTENT UNDER REVIEW</div>
                  <p>Administer 2.5 mg once daily. See Table 4 for dose-adjustment criteria.</p>
                </div>
                <div className="sesen-pharma-qa-flags">
                  {[
                    ["terminology", "Approved terminology", "verified"],
                    ["qa", "Dose and unit", "verified"],
                    ["clinical", "Table cross-reference", "verified"],
                    ["review", "Independent review", "complete"],
                  ].map(([icon, title, status]) => (
                    <div className="sesen-pharma-qa-flag" key={title}>
                      <Icon name={icon} size={18} />
                      <span>{title}</span>
                      <span className="sesen-pharma-qa-status">{status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell sesen-pharma-regulatory-layout">
          <div className="sesen-pharma-regulatory-copy">
            <div className="sesen-pharma-eyebrow">REGULATORY CONTENT</div>
            <h2>Translation Support for Global Pharmaceutical Regulatory Programs</h2>
            <p className="sesen-pharma-section-intro">
              Global regulatory translation requires scientific accuracy, controlled terminology,
              document consistency, version awareness, and formatting discipline. Sesen supports
              pharmaceutical content prepared for submissions and health-authority interactions
              across major global markets.
            </p>
            <div className="sesen-pharma-authority-tags" aria-label="Health authorities">
              {["FDA", "EMA", "PMDA", "NMPA", "OTHER HEALTH AUTHORITIES"].map((item) => (
                <span className="sesen-pharma-authority-tag" key={item}>{item}</span>
              ))}
            </div>
            <div className="sesen-pharma-regulatory-list">
              {regulatoryCapabilities.map((item) => (
                <div className="sesen-pharma-regulatory-item" key={item.title}>
                  <Icon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="sesen-pharma-regulatory-links">
              <ArrowLink href="https://www.sesen.com/regulatory-submission-translation-services/">
                Regulatory Submission Translation Services
              </ArrowLink>
              <ArrowLink href="https://www.sesen.com/cmc-document-translation-services/">
                CMC Document Translation Services
              </ArrowLink>
            </div>
          </div>

          <div className="sesen-pharma-regulatory-stack">
            <div className="sesen-pharma-ctd-header">
              <strong>Common Technical Document</strong>
              <span>Multilingual support across structured pharmaceutical submission content</span>
            </div>
            <div className="sesen-pharma-ctd-modules">
              {[
                ["MODULE 1", "Region-Specific Administrative Information"],
                ["MODULE 2", "CTD Summaries"],
                ["MODULE 3", "Quality / CMC"],
                ["MODULE 4", "Nonclinical Study Reports"],
                ["MODULE 5", "Clinical Study Reports"],
              ].map(([module, title]) => (
                <div className="sesen-pharma-ctd-module" key={module}>
                  <strong>{module}</strong>
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--deep">
        <div className="sesen-pharma-shell">
          <SectionHeading
            eyebrow="ENTERPRISE DELIVERY"
            title="From One Regulatory Document to a Global Multilingual Program"
            intro="Source documents change. Protocols are amended. Regulatory questions arrive. New markets are added. Labels are updated. Safety content recurs. Sesen supports both individual projects and long-term programs designed around this continuing pharmaceutical content lifecycle."
            inverse
          />
          <div className="sesen-pharma-program-grid">
            {programItems.map((item) => (
              <article className="sesen-pharma-program-item" key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell sesen-pharma-global-layout">
          <div className="sesen-pharma-global-copy">
            <h2>Pharmaceutical Translation Across Global Markets</h2>
            <p className="sesen-pharma-section-intro">
              Sesen supports pharmaceutical and broader life sciences translation across more than
              150 languages. Native-language expertise is coordinated with centralized terminology,
              translation memory, professional review, QA, and program management so local
              linguistic quality does not come at the expense of global consistency.
            </p>
            <div className="sesen-pharma-global-points">
              {[
                ["globe", "150+ languages"],
                ["people", "Native life sciences linguists"],
                ["terminology", "Centralized terminology"],
                ["layers", "Multilingual program management"],
              ].map(([icon, text]) => (
                <div className="sesen-pharma-global-point" key={text}>
                  <Icon name={icon} size={20} />
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="sesen-pharma-global-visual" aria-hidden="true">
            <div className="sesen-pharma-global-orbit">
              <div className="sesen-pharma-global-center">
                <strong>150+</strong>
                <span>LANGUAGES</span>
              </div>
              <div className="sesen-pharma-region">NORTH AMERICA</div>
              <div className="sesen-pharma-region">EUROPE</div>
              <div className="sesen-pharma-region">ASIA-PACIFIC</div>
              <div className="sesen-pharma-region">LATAM · MENA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--pale">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Quality Systems for Regulated Pharmaceutical Content"
            intro="Quality needs to be designed into the workflow—not added only at the end. Sesen combines certified quality systems, specialist linguistic resources, documented review processes, terminology controls, and controlled delivery practices for regulated multilingual content."
          />
          <div className="sesen-pharma-systems-grid">
            {isoItems.map((item) => (
              <article className="sesen-pharma-iso" key={item.title}>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-pharma-governance-row">
            {[
              ["secure", "Secure Infrastructure & Controlled Access", "AWS-hosted systems where applicable, controlled file access, confidentiality practices, and client-specific handling for sensitive life sciences content."],
              ["review", "Documented Review", "Independent review, QA, reviewer accountability, and project documentation as required by the engagement."],
              ["versions", "Traceable Content Decisions", "Terminology, versions, reviewer feedback, and approved language carried forward across related work."],
            ].map(([icon, title, text]) => (
              <div className="sesen-pharma-governance-item" key={title}>
                <Icon name={icon} />
                <div>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24 }}>
            <ArrowLink href="https://www.sesen.com/quality-compliance-security/">
              Quality, Compliance & Security
            </ArrowLink>
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell">
          <SectionHeading
            eyebrow="CASE STUDIES"
            title="Pharmaceutical Translation in Practice"
            intro="See how Sesen applies specialized linguists, terminology governance, structured review, validation, and multilingual coordination to complex pharmaceutical and clinical programs."
          />
          <div className="sesen-pharma-case-list">
            {caseStudies.map((item) => (
              <article className="sesen-pharma-case" key={item.title}>
                <div>
                  <div className="sesen-pharma-case-label">{item.eyebrow}</div>
                  <div className="sesen-pharma-case-meta">{item.meta}</div>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="sesen-pharma-case-action">
                  <ArrowLink href={item.href}>{item.link}</ArrowLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--soft">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Explore Related Pharmaceutical Expertise"
            intro="Global pharmaceutical programs often require several specialized language workflows working together. Explore focused Sesen capabilities for the content and teams involved across the drug lifecycle."
          />
          <div className="sesen-pharma-related-grid">
            {relatedServices.map((item) => (
              <a className="sesen-pharma-related-item" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="sesen-pharma-related-arrow" aria-hidden="true">
                  <Icon name="arrow" size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Insights for Global Pharmaceutical Content Teams"
            intro="Explore practical guidance for pharmaceutical, clinical, regulatory, labeling, terminology, and multilingual program teams as life sciences content operations become more connected."
          />
          <div className="sesen-pharma-resource-grid">
            {resources.map((item) => (
              <a className="sesen-pharma-resource" href={item.href} key={item.title}>
                <span className="sesen-pharma-resource-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="sesen-pharma-link">
                  <span>{item.link}</span>
                  <Icon name="arrow" size={17} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-section sesen-pharma-section--soft">
        <div className="sesen-pharma-shell">
          <SectionHeading
            title="Pharmaceutical Translation Services FAQs"
            intro="Answers to common questions about pharmaceutical translation workflows, terminology, regulatory content, linguistic validation, AI assistance, and global program delivery."
          />
          <div className="sesen-pharma-faq">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              const panelId = `sesen-pharma-faq-panel-${index}`;
              const buttonId = `sesen-pharma-faq-button-${index}`;
              return (
                <div className="sesen-pharma-faq-item" key={item.q}>
                  <button
                    id={buttonId}
                    className="sesen-pharma-faq-button"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.q}</span>
                    <span className="sesen-pharma-faq-toggle" aria-hidden="true" />
                  </button>
                  {isOpen ? (
                    <div
                      id={panelId}
                      className="sesen-pharma-faq-answer"
                      role="region"
                      aria-labelledby={buttonId}
                    >
                      {item.a}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sesen-pharma-final-wrap">
        <div className="sesen-pharma-shell">
          <div className="sesen-pharma-final">
            <div>
              <h2>Bring Greater Control to Your Global Pharmaceutical Translation Program</h2>
              <p>
                Whether you need translation for one critical document or coordinated multilingual
                support across clinical development, regulatory submissions, labeling,
                pharmacovigilance, medical affairs, and commercialization, Sesen can build a
                workflow around your content, languages, timelines, quality requirements, and
                review process.
              </p>
            </div>
            <div className="sesen-pharma-final-actions">
              <ButtonLink href="https://www.sesen.com/contact-sales/">
                TALK WITH TEAM SESEN
              </ButtonLink>
              <ButtonLink href="https://www.sesen.com/get-a-quote/" secondary>
                REQUEST A QUOTE
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
