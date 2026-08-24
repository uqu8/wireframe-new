import React, { useState } from "react";

const PAGE = "sesen-qa-audit-page";

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
  };

  const icons = {
    system: (
      <svg {...common}>
        <path d="M4 5.5h16v13H4z" />
        <path d="M7.5 9h9M7.5 12h6M7.5 15h7.5" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M6.5 3.5h7l4 4v13h-11z" />
        <path d="M13.5 3.5v4h4M9 12h6M9 15.5h5" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 5 5M8.5 10.5h4" />
      </svg>
    ),
    response: (
      <svg {...common}>
        <path d="M4 5h11v9H8l-4 4z" />
        <path d="M8 8h7M8 11h5M17 8h3v9h-4l-3 3v-3" />
      </svg>
    ),
    loop: (
      <svg {...common}>
        <path d="M7 7a7 7 0 0 1 11.5 2" />
        <path d="m18.5 5 .5 4-4-.5M17 17a7 7 0 0 1-11.5-2" />
        <path d="m5.5 19-.5-4 4 .5" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3.5 19 6v5.5c0 4.1-2.4 7.1-7 9-4.6-1.9-7-4.9-7-9V6z" />
        <path d="m8.8 12 2.1 2.1 4.5-4.5" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <circle cx="8.5" cy="8" r="2.5" />
        <circle cx="16.5" cy="9" r="2" />
        <path d="M4.5 18c.5-3.2 2-4.8 4-4.8s3.5 1.6 4 4.8M13 17.5c.4-2.5 1.6-3.8 3.5-3.8 1.8 0 3 1.3 3.5 3.8" />
      </svg>
    ),
    clock: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </svg>
    ),
    link: (
      <svg {...common}>
        <path d="M9.2 14.8 7.5 16.5a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0" />
        <path d="m14.8 9.2 1.7-1.7a3.5 3.5 0 1 1 5 5l-3 3a3.5 3.5 0 0 1-5 0" />
        <path d="m8.5 15.5 7-7" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3.5 8 4.5-8 4.5L4 8z" />
        <path d="m4 12 8 4.5 8-4.5M4 16l8 4.5 8-4.5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12.5 4.2 4L19 6.5" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h13M14 8l4 4-4 4" />
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

  return icons[name] || icons.file;
};

const ArrowLink = ({ href, children, className = "" }) => (
  <a className={`qa-editorial-link ${className}`} href={href}>
    <span>{children}</span>
    <Icon name="arrow" size={17} />
  </a>
);

const SectionHeader = ({ eyebrow, title, intro, align = "left", className = "" }) => (
  <div className={`qa-section-header qa-section-header--${align} ${className}`}>
    {eyebrow ? <div className="qa-eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const HeroArtwork = () => (
  <div className="qa-hero-art" aria-hidden="true">
    <svg viewBox="0 0 620 500" role="presentation">
      <defs>
        <linearGradient id="qaSoft" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5F7FF" />
          <stop offset="1" stopColor="#EAF0FF" />
        </linearGradient>
      </defs>
      <circle cx="320" cy="247" r="206" fill="url(#qaSoft)" />
      <path d="M120 248H214" stroke="#9AA8C1" strokeWidth="2" strokeDasharray="7 9" />
      <path d="M406 248H500" stroke="#9AA8C1" strokeWidth="2" strokeDasharray="7 9" />
      <path d="M312 132V88" stroke="#9AA8C1" strokeWidth="2" strokeDasharray="7 9" />
      <path d="M312 364V416" stroke="#9AA8C1" strokeWidth="2" strokeDasharray="7 9" />

      <rect x="215" y="135" width="194" height="228" rx="28" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
      <rect x="239" y="164" width="146" height="24" rx="8" fill="#EAF0FF" />
      <path d="M251 176h74" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" />
      <path d="M244 217h136M244 241h108M244 265h126M244 289h92" stroke="#A4B0C4" strokeWidth="3" strokeLinecap="round" />
      <rect x="244" y="316" width="91" height="22" rx="11" fill="#4B6FD8" />
      <path d="m255 327 7 6 12-13" stroke="#FFFFFF" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      <g transform="translate(58 181)">
        <rect width="114" height="132" rx="20" fill="#FFFFFF" stroke="#B7C2D4" strokeWidth="2" />
        <path d="M28 38h58M28 58h46M28 78h54" stroke="#6F7F99" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="57" cy="106" r="10" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
        <path d="m52 106 4 4 7-8" stroke="#3659BB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <g transform="translate(452 177)">
        <rect width="112" height="138" rx="20" fill="#FFFFFF" stroke="#B7C2D4" strokeWidth="2" />
        <circle cx="56" cy="48" r="21" fill="#F5F7FF" stroke="#3659BB" strokeWidth="2.5" />
        <path d="M56 38v11l8 5" stroke="#3659BB" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M28 89h56M35 106h42" stroke="#7C8AA2" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(245 44)">
        <rect width="134" height="62" rx="18" fill="#FFFFFF" stroke="#B7C2D4" strokeWidth="2" />
        <circle cx="30" cy="31" r="13" fill="#EAF0FF" />
        <path d="m24 31 4 4 8-9" stroke="#3659BB" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M52 24h56M52 38h42" stroke="#7C8AA2" strokeWidth="2.5" strokeLinecap="round" />
      </g>

      <g transform="translate(236 396)">
        <rect width="154" height="62" rx="18" fill="#17264D" />
        <path d="M28 23h64M28 38h84" stroke="#DDE4F2" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="126" cy="31" r="10" fill="#4B6FD8" />
        <path d="m122 31 3 3 5-6" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path d="M175 244c22-51 46-78 70-91" stroke="#4B6FD8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M410 154c30 11 52 38 66 78" stroke="#4B6FD8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M475 317c-21 39-49 68-84 82" stroke="#4B6FD8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M236 401c-36-15-62-44-78-85" stroke="#4B6FD8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="m239 148 5 10-11 1M468 225l9 7-8 8M395 393l-10 4-2-11M166 320l-10-2 3-10" stroke="#3659BB" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

const ConnectedDocsArtwork = () => (
  <div className="qa-connected-art" aria-hidden="true">
    <div className="qa-doc-node qa-doc-node--sop"><span>SOP</span><small>Controlled procedure</small></div>
    <div className="qa-doc-node qa-doc-node--finding"><span>FINDING</span><small>Audit observation</small></div>
    <div className="qa-doc-node qa-doc-node--capa"><span>CAPA</span><small>Corrective action</small></div>
    <div className="qa-doc-node qa-doc-node--training"><span>TRAINING</span><small>Updated learning</small></div>
    <div className="qa-doc-node qa-doc-node--revision"><span>REVISION</span><small>Controlled release</small></div>
    <svg viewBox="0 0 560 390" role="presentation">
      <path d="M116 180C155 103 222 80 275 104" />
      <path d="M309 102C374 100 425 132 450 181" />
      <path d="M448 218C423 276 369 300 311 298" />
      <path d="M278 300C219 309 162 284 119 222" />
      <path d="M286 137V263" />
    </svg>
  </div>
);

const VersionArtwork = () => (
  <div className="qa-version-art" aria-hidden="true">
    <div className="qa-version-stack qa-version-stack--left">
      <span className="qa-version-tag">VERSION 1</span>
      <div className="qa-version-line qa-version-line--wide" />
      <div className="qa-version-line" />
      <div className="qa-version-line qa-version-line--mid" />
      <div className="qa-version-highlight" />
      <div className="qa-version-line qa-version-line--wide" />
    </div>
    <div className="qa-version-change">
      <Icon name="arrow" size={22} />
      <span>CONTROLLED CHANGE</span>
    </div>
    <div className="qa-version-stack qa-version-stack--right">
      <span className="qa-version-tag">VERSION 2</span>
      <div className="qa-version-line qa-version-line--wide" />
      <div className="qa-version-line" />
      <div className="qa-version-line qa-version-line--mid" />
      <div className="qa-version-highlight qa-version-highlight--blue" />
      <div className="qa-version-line qa-version-line--wide" />
    </div>
  </div>
);

const lifecycle = [
  {
    n: "01",
    title: "Quality System",
    icon: "system",
    text: "Establish a consistent multilingual foundation for the controlled documents that govern global quality operations.",
    items: ["Quality manuals and policies", "Quality plans and agreements", "Controlled forms and templates"],
  },
  {
    n: "02",
    title: "Controlled Documentation",
    icon: "file",
    text: "Translate procedures and records that demonstrate how quality requirements are implemented in day-to-day operations.",
    items: ["SOPs and work instructions", "Manufacturing and laboratory procedures", "Validation, batch, training, and change-control records"],
  },
  {
    n: "03",
    title: "Audit Preparation",
    icon: "search",
    text: "Prepare multilingual evidence and documentation for internal audits, supplier assessments, certification reviews, and regulatory inspections.",
    items: ["Audit plans and checklists", "Questionnaires and evidence packages", "Previous findings and CAPAs"],
  },
  {
    n: "04",
    title: "Audit & Inspection Response",
    icon: "response",
    text: "Support time-sensitive document requests and response materials while preserving terminology, context, and document relationships.",
    items: ["Audit observations and inspection findings", "Document requests and supporting records", "Clarification and follow-up responses"],
  },
  {
    n: "05",
    title: "CAPA, Deviation & Remediation",
    icon: "loop",
    text: "Maintain logical consistency as findings move through investigation, root-cause analysis, corrective action, and effectiveness checks.",
    items: ["Deviations and nonconformities", "Root-cause analyses and CAPA plans", "Risk assessments and effectiveness checks"],
  },
  {
    n: "06",
    title: "Controlled Multilingual Updates",
    icon: "layers",
    text: "Propagate approved changes across affected procedures, training, forms, and other controlled content after quality events are resolved.",
    items: ["Revised SOPs and work instructions", "Quality-manual, form, and template updates", "Training and site-specific controlled releases"],
  },
];

const docGroups = [
  {
    title: "QMS & Controlled Documents",
    icon: "system",
    items: ["Quality management system manuals", "Quality policies and plans", "SOPs and work instructions", "Quality agreements", "Change-control documentation", "Controlled templates, forms, and logs", "Training materials and records"],
  },
  {
    title: "Audit & Inspection Documentation",
    icon: "search",
    items: ["Audit plans and agendas", "Audit checklists", "Internal and supplier audit reports", "Certification assessment documentation", "Audit observations", "Inspection findings and requests", "Evidence packages and response documentation"],
  },
  {
    title: "Deviations, CAPAs & Remediation",
    icon: "loop",
    items: ["Deviation and nonconformity reports", "Investigations", "Root-cause analyses", "CAPA plans", "Corrective and preventive actions", "Effectiveness checks", "Remediation programs and risk assessments"],
  },
  {
    title: "Manufacturing, Qualification & Validation",
    icon: "layers",
    items: ["Batch manufacturing records", "Manufacturing procedures", "Equipment and calibration records", "Validation protocols and reports", "IQ/OQ/PQ documentation", "Cleaning validation materials", "Process-control records"],
  },
  {
    title: "Supplier & External Quality",
    icon: "people",
    items: ["Supplier qualification documentation", "Vendor questionnaires and evaluations", "Supplier quality agreements", "Supplier audit reports", "Supplier findings and CAPAs", "Corrective-action correspondence", "Contract manufacturing quality documentation"],
  },
  {
    title: "Laboratory & Quality-Control Documentation",
    icon: "file",
    items: ["Laboratory and test procedures", "Quality-control records", "Equipment qualification documentation", "Calibration records", "Laboratory investigations", "Out-of-specification documentation", "Environmental monitoring and related corrective actions"],
  },
];

const environments = [
  {
    title: "Pharmaceutical & Biotechnology",
    text: "Support pharmaceutical quality systems across manufacturing, testing, release, supply, validation, change management, and post-market operations.",
    items: ["Pharmaceutical QMS documentation", "GMP procedures and batch records", "Laboratory quality records", "Deviations and CAPAs", "Validation documentation", "Regulatory inspection materials"],
    links: [{ label: "GMP Translation Services", href: "https://www.sesen.com/gmp-translation-services/" }],
  },
  {
    title: "Medical Devices & IVD",
    text: "Connect medical-device and IVD quality-system terminology with supplier controls, manufacturing, validation, nonconformities, CAPA, labeling, and post-market activities.",
    items: ["ISO 13485-related QMS documentation", "Supplier quality records", "Nonconformities and CAPAs", "Manufacturing and validation records", "Internal and external audit materials", "Regulatory inspection documentation"],
    links: [
      { label: "ISO 13485 Translation Services", href: "https://www.sesen.com/iso-13485-translation-services/" },
      { label: "Medical Device Translation Services", href: "https://www.sesen.com/medical-device-translation-services/" },
      { label: "IVD Translation Services", href: "https://www.sesen.com/ivd-translation-services/" },
    ],
  },
  {
    title: "CROs & Clinical Quality Operations",
    text: "Support controlled clinical quality documentation across sponsors, CROs, study teams, sites, and vendors.",
    items: ["Clinical quality SOPs", "Site and vendor audit materials", "Quality-event records", "Deviations and CAPAs", "Training documentation", "Controlled clinical operations documents"],
    links: [{ label: "Clinical Trial Translation Services", href: "https://www.sesen.com/clinical-trial-translation-services/" }],
  },
  {
    title: "CMOs, CDMOs & Manufacturing Partners",
    text: "Maintain terminology and document continuity across sponsors, manufacturing sites, suppliers, and contract partners.",
    items: ["Site quality procedures", "Manufacturing documentation", "Quality and technical agreements", "Audit findings", "CAPA records", "Qualification and validation materials"],
    links: [{ label: "GMP Translation Services", href: "https://www.sesen.com/gmp-translation-services/" }],
  },
  {
    title: "Laboratories & Regulated Suppliers",
    text: "Translate quality procedures, testing and equipment records, qualification materials, audits, investigations, and corrective actions for distributed operations and supply chains.",
    items: ["Laboratory procedures", "Quality records", "Equipment qualification", "Supplier qualification", "Corrective-action records", "Audit documentation"],
    links: [],
  },
];

const workflow = [
  { n: "01", title: "Scope & Document Triage", text: "Identify document type, intended use, languages, file formats, revision status, priority, timing, reference translations, and delivery requirements." },
  { n: "02", title: "Terminology & Reference Alignment", text: "Apply approved glossaries, translation memories, product and process terminology, previous translations, style guidance, and relevant references." },
  { n: "03", title: "Specialist Translation", text: "Assign professional linguists according to language pair and subject matter, including QA/QC, manufacturing, devices, clinical operations, validation, and regulatory content." },
  { n: "04", title: "Independent Bilingual Review", text: "Compare target content against the source for accuracy, completeness, terminology, technical meaning, clarity, and customer-specific requirements." },
  { n: "05", title: "Linguistic & Technical QA", text: "Check terminology, numbers, dates, units, product names, process references, missing content, untranslated segments, table integrity, and formatting consistency." },
  { n: "06", title: "Formatting & Document Reconstruction", text: "Support Word, Excel, PowerPoint, PDFs, scanned records, forms, tables, controlled templates, and other common quality-system formats as required." },
  { n: "07", title: "Final Review & Controlled Delivery", text: "Confirm required outputs, correct language and version, completeness, file naming, formatting, target files, and customer-specific delivery instructions." },
  { n: "08", title: "Lifecycle Maintenance", text: "Reuse approved linguistic assets and update affected multilingual files when SOPs, forms, training, QMS documents, or other controlled content changes." },
];

const auditTypes = [
  { title: "Internal Audits", icon: "system", text: "QMS self-assessments, department and site audits, process audits, internal quality reviews, findings, corrective actions, and follow-up documentation." },
  { title: "Supplier & Vendor Audits", icon: "people", text: "Supplier qualification, vendor assessments, questionnaires, quality agreements, audit reports, findings, supplier CAPAs, and corrective-action correspondence." },
  { title: "Certification & Third-Party Audits", icon: "shield", text: "Quality-system documentation associated with independent certification-body and third-party assessments, including ISO 9001 and ISO 13485-related certification or surveillance activities." },
  { title: "Regulatory Inspections", icon: "search", text: "Multilingual support for FDA inspection-related documentation, EU/EEA GMP inspection materials, national competent authority requests, PMDA/MHLW-related materials where applicable, and other health-authority records." },
];

const connectedServices = [
  { title: "SOP Translation Services", text: "Translate and maintain controlled procedures and work instructions affected by QMS changes, audit findings, and corrective actions.", href: "https://www.sesen.com/sop-translation-services/" },
  { title: "GMP Translation Services", text: "Support manufacturing, batch, validation, qualification, deviation, and other GMP-controlled documentation.", href: "https://www.sesen.com/gmp-translation-services/" },
  { title: "ISO 13485 Translation Services", text: "Support medical-device QMS documentation and related quality content across international sites and markets.", href: "https://www.sesen.com/iso-13485-translation-services/" },
  { title: "Regulatory Translation Services", text: "Connect quality-system documentation with broader regulatory communication, submissions, health-authority interaction, and lifecycle requirements.", href: "https://www.sesen.com/regulatory-translation-services/" },
  { title: "eLearning & Training Translation Services", text: "Localize training that follows revised procedures, CAPAs, process changes, and quality-system updates.", href: "https://www.sesen.com/elearning-training-translation-services/" },
  { title: "Medical Device Translation Services", text: "Coordinate quality content with technical documentation, software, labeling, IFUs, and other multilingual medical-device content.", href: "https://www.sesen.com/medical-device-translation-services/" },
];

const differentiators = [
  { title: "Life Sciences Specialization", text: "Professional translation resources matched to pharmaceutical, biotechnology, medical-device, clinical, manufacturing, and related quality content." },
  { title: "Connected Document Expertise", text: "Work across quality manuals, SOPs, audit reports, findings, deviations, CAPAs, validation records, and supplier documentation without treating each file in isolation." },
  { title: "150+ Languages", text: "Support global and regional quality programs across sites, suppliers, manufacturing networks, and international markets." },
  { title: "Terminology & Translation Memory", text: "Capture and reuse approved language across recurring quality content to improve consistency and reduce unnecessary retranslation." },
  { title: "Professional Human Review", text: "Keep qualified human linguists and independent bilingual review central to regulated quality-document workflows." },
  { title: "Flexible Program Design", text: "Configure workflows for individual documents, scheduled audits, supplier programs, large multilingual packages, urgent inspection requests, and ongoing QMS maintenance." },
];

const faqs = [
  {
    q: "What quality assurance documents can Sesen translate?",
    a: "Sesen translates QMS manuals, SOPs, work instructions, audit reports, inspection materials, deviations, investigations, CAPAs, root-cause analyses, validation protocols, IQ/OQ/PQ documentation, batch records, supplier audit materials, quality agreements, training content, controlled forms, and related regulated quality documentation.",
  },
  {
    q: "Can Sesen support urgent translation during a regulatory inspection?",
    a: "Yes. Sesen can configure expedited and rolling translation workflows based on document volume, languages, subject matter, file formats, review requirements, available specialist resources, and required timing. Documents can be triaged by priority and supported through parallel translation, review, QA, and formatting when appropriate.",
  },
  {
    q: "Do you translate CAPA and deviation documentation?",
    a: "Yes. Sesen translates deviations, nonconformities, investigation reports, root-cause analyses, CAPA plans, corrective and preventive actions, effectiveness checks, risk assessments, remediation documentation, and related controlled-document updates. Terminology can be managed across connected records to maintain consistency throughout the quality event.",
  },
  {
    q: "Can you translate documentation for supplier and vendor audits?",
    a: "Yes. Supplier quality translation can include qualification materials, audit questionnaires, supplier assessments, quality agreements, audit reports, findings, CAPAs, corrective-action correspondence, technical records, and follow-up documentation.",
  },
  {
    q: "Can Sesen support ISO 13485 quality documentation?",
    a: "Yes. Sesen supports multilingual medical-device QMS documentation, including quality manuals, procedures, work instructions, supplier controls, CAPAs, nonconformities, validation records, internal audit materials, and other controlled quality content. Dedicated ISO 13485 translation services are available for medical-device quality-system programs.",
  },
  {
    q: "How does Sesen maintain terminology consistency across quality documents?",
    a: "Sesen can use client-approved glossaries, translation memories, style guides, approved reference translations, product terminology, process terminology, and previous quality documentation. Linguistic and technology-assisted QA checks provide additional controls for identifying inconsistencies across related files.",
  },
  {
    q: "How do you handle revised SOPs and multilingual quality-document updates?",
    a: "Previously approved translation memory and terminology can be reused when controlled documents are revised. Sesen identifies changed content, translates and reviews new or modified sections, and updates affected target-language documents according to the customer's versioning and delivery requirements.",
  },
  {
    q: "Can Sesen work with scanned audit records and non-editable PDFs?",
    a: "Yes. Depending on source-file quality and project requirements, Sesen can work with scanned PDFs, non-editable files, complex tables, forms, and other quality documentation that requires file preparation or document reconstruction. The source materials are evaluated during project intake so the appropriate production workflow can be established.",
  },
  {
    q: "Does Sesen use AI for quality-system translation?",
    a: "Sesen uses AI selectively within controlled translation workflows where it can provide meaningful value. AI-assisted tools can help with terminology checking, translation reuse, number and unit validation, consistency analysis, missing-content detection, version comparison, and other QA tasks. Professional human linguists and reviewers remain central to regulated quality documentation.",
  },
  {
    q: "Which languages does Sesen support?",
    a: "Sesen provides quality assurance, audit, and inspection translation services in 150+ languages across major global markets. Workflows can be configured for a single target language or complex multilingual programs spanning multiple sites and regions.",
  },
];

function FAQItem({ item, index, open, onToggle }) {
  const panelId = `qa-faq-panel-${index}`;
  const buttonId = `qa-faq-button-${index}`;
  return (
    <div className={`qa-faq-item ${open ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="qa-faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className="qa-faq-icon"><Icon name={open ? "minus" : "plus"} size={20} /></span>
      </button>
      <div
        id={panelId}
        className="qa-faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function QualityAssuranceAuditTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={PAGE}>
      <style>{`
        .${PAGE} {
          --qa-blue: #4B6FD8;
          --qa-blue-dark: #3659BB;
          --qa-deep-blue: #253F8F;
          --qa-navy: #17264D;
          --qa-ink: #111827;
          --qa-body: #46546D;
          --qa-muted: #68758B;
          --qa-border: #DDE4F2;
          --qa-divider: #E9EEF8;
          --qa-soft-blue: #EAF0FF;
          --qa-pale-blue: #F5F7FF;
          --qa-soft-section: #F7F9FD;
          --qa-white: #FFFFFF;
          --qa-light-blue: #C8D6FF;
          color: var(--qa-body);
          background: var(--qa-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .${PAGE} *, .${PAGE} *::before, .${PAGE} *::after { box-sizing: border-box; }
        .${PAGE} h1, .${PAGE} h2, .${PAGE} h3 { font-family: "Inter Tight", Inter, Arial, sans-serif; color: var(--qa-navy); font-weight: 500; margin: 0; }
        .${PAGE} h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
        .${PAGE} h2 { font-size: 36px; line-height: 1.3; letter-spacing: normal; }
        .${PAGE} h3 { font-size: 23px; line-height: 1.3; }
        .${PAGE} p { margin: 0; }
        .${PAGE} a { color: inherit; }
        .${PAGE} button, .${PAGE} a { -webkit-tap-highlight-color: transparent; }
        .${PAGE} a:focus-visible, .${PAGE} button:focus-visible { outline: 3px solid rgba(75,111,216,.34); outline-offset: 3px; }

        .${PAGE} .qa-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
        .${PAGE} .qa-section { padding-block: 96px; }
        .${PAGE} .qa-section--dense { padding-block: 80px; }
        .${PAGE} .qa-section--soft { background: var(--qa-soft-section); }
        .${PAGE} .qa-section--pale { background: var(--qa-pale-blue); }
        .${PAGE} .qa-section--navy { background: var(--qa-navy); color: #DCE5F6; }
        .${PAGE} .qa-section--navy h2, .${PAGE} .qa-section--navy h3 { color: #FFFFFF; }

        .${PAGE} .qa-eyebrow { color: var(--qa-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .15em; line-height: 1.35; text-transform: uppercase; margin-bottom: 14px; }
        .${PAGE} .qa-section--navy .qa-eyebrow { color: var(--qa-light-blue); }
        .${PAGE} .qa-section-header { max-width: 820px; margin-bottom: 48px; }
        .${PAGE} .qa-section-header--center { text-align: center; margin-inline: auto; }
        .${PAGE} .qa-section-header > p { margin-top: 18px; font-size: 18px; line-height: 1.7; color: var(--qa-body); }
        .${PAGE} .qa-section--navy .qa-section-header > p { color: #C8D2E6; }

        .${PAGE} .qa-button-row { display: flex; gap: 14px; flex-wrap: wrap; align-items: center; }
        .${PAGE} .qa-button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 50px; padding: 12px 26px; border-radius: 999px; font-size: 13px; line-height: 1; letter-spacing: .045em; font-weight: 700; text-decoration: none; transition: background .2s ease, border-color .2s ease, transform .2s ease; }
        .${PAGE} .qa-button:hover { transform: translateY(-1px); }
        .${PAGE} .qa-button--primary { background: var(--qa-blue); color: #FFFFFF; border: 1px solid var(--qa-blue); }
        .${PAGE} .qa-button--primary:hover { background: var(--qa-blue-dark); border-color: var(--qa-blue-dark); }
        .${PAGE} .qa-button--secondary { background: #FFFFFF; color: var(--qa-ink); border: 1px solid #C8D2E3; }
        .${PAGE} .qa-button--secondary:hover { background: var(--qa-pale-blue); border-color: #AFC0E1; }
        .${PAGE} .qa-button svg { flex: 0 0 auto; }

        .${PAGE} .qa-editorial-link { color: var(--qa-blue-dark); display: inline-flex; align-items: center; gap: 7px; font-weight: 600; line-height: 1.45; text-decoration: none; }
        .${PAGE} .qa-editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .${PAGE} .qa-editorial-link svg { transition: transform .2s ease; }
        .${PAGE} .qa-editorial-link:hover svg { transform: translateX(3px); }

        .${PAGE} .qa-hero { padding-block: 96px 88px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%); }
        .${PAGE} .qa-hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(440px, .92fr); align-items: center; gap: 64px; }
        .${PAGE} .qa-hero-copy { max-width: 690px; }
        .${PAGE} .qa-hero-copy .qa-eyebrow { margin-bottom: 16px; }
        .${PAGE} .qa-hero-lead { margin-top: 23px; color: #293954; font-size: 19px; line-height: 1.68; max-width: 680px; }
        .${PAGE} .qa-hero-detail { margin-top: 17px; font-size: 17px; line-height: 1.72; max-width: 680px; }
        .${PAGE} .qa-hero .qa-button-row { margin-top: 31px; }
        .${PAGE} .qa-hero-art { width: 100%; max-width: 570px; justify-self: end; }
        .${PAGE} .qa-hero-art svg { display: block; width: 100%; height: auto; }

        .${PAGE} .qa-trust-band { background: #FFFFFF; border-top: 1px solid var(--qa-divider); border-bottom: 1px solid var(--qa-divider); }
        .${PAGE} .qa-trust-grid { display: grid; grid-template-columns: repeat(5, 1fr); min-height: 112px; align-items: stretch; }
        .${PAGE} .qa-trust-item { display: flex; align-items: center; gap: 12px; padding: 24px 18px; color: var(--qa-navy); font-size: 14px; font-weight: 600; line-height: 1.45; }
        .${PAGE} .qa-trust-item + .qa-trust-item { border-left: 0; }
        .${PAGE} .qa-trust-icon { width: 38px; height: 38px; border-radius: 12px; background: var(--qa-pale-blue); display: grid; place-items: center; color: var(--qa-blue-dark); flex: 0 0 auto; }

        .${PAGE} .qa-connected-grid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 72px; align-items: center; }
        .${PAGE} .qa-prose { max-width: 720px; }
        .${PAGE} .qa-prose p { font-size: 17px; line-height: 1.78; margin-bottom: 18px; }
        .${PAGE} .qa-prose p:last-child { margin-bottom: 0; }
        .${PAGE} .qa-chain { margin-top: 28px; display: flex; align-items: center; flex-wrap: wrap; gap: 8px; color: var(--qa-navy); font-weight: 600; }
        .${PAGE} .qa-chain span { background: var(--qa-pale-blue); border: 1px solid var(--qa-border); border-radius: 999px; padding: 7px 12px; font-size: 14px; }
        .${PAGE} .qa-chain b { color: var(--qa-blue-dark); font-weight: 700; }
        .${PAGE} .qa-connected-art { position: relative; min-height: 430px; border-radius: 30px; background: #FFFFFF; border: 1px solid var(--qa-border); overflow: hidden; box-shadow: 0 22px 55px rgba(28,47,91,.06); }
        .${PAGE} .qa-connected-art::before { content: ""; position: absolute; width: 310px; height: 310px; border-radius: 50%; background: var(--qa-pale-blue); left: 50%; top: 50%; transform: translate(-50%,-50%); }
        .${PAGE} .qa-connected-art > svg { position: absolute; inset: 20px; width: calc(100% - 40px); height: calc(100% - 40px); }
        .${PAGE} .qa-connected-art > svg path { stroke: #8EA1C7; stroke-width: 2.2; fill: none; stroke-dasharray: 5 7; }
        .${PAGE} .qa-doc-node { position: absolute; z-index: 2; background: #FFFFFF; border: 1px solid #C9D5EA; border-radius: 18px; box-shadow: 0 12px 28px rgba(26,46,88,.08); padding: 14px 16px; min-width: 126px; }
        .${PAGE} .qa-doc-node span { display: block; color: var(--qa-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .1em; }
        .${PAGE} .qa-doc-node small { display: block; color: var(--qa-navy); font-size: 13px; line-height: 1.35; margin-top: 3px; }
        .${PAGE} .qa-doc-node--sop { left: 7%; top: 41%; }
        .${PAGE} .qa-doc-node--finding { left: 39%; top: 11%; }
        .${PAGE} .qa-doc-node--capa { right: 5%; top: 42%; }
        .${PAGE} .qa-doc-node--training { left: 40%; bottom: 8%; }
        .${PAGE} .qa-doc-node--revision { left: 39%; top: 43%; border-color: var(--qa-blue); }

        .${PAGE} .qa-lifecycle-wrap { position: relative; }
        .${PAGE} .qa-lifecycle-line { position: absolute; height: 2px; background: #C8D5F2; left: 5%; right: 5%; top: 55px; }
        .${PAGE} .qa-lifecycle-grid { position: relative; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 18px; }
        .${PAGE} .qa-life-step { position: relative; padding-top: 9px; }
        .${PAGE} .qa-life-top { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .${PAGE} .qa-life-number { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; color: #FFFFFF; background: var(--qa-blue); font-size: 12px; font-weight: 700; letter-spacing: .06em; box-shadow: 0 0 0 7px var(--qa-pale-blue); z-index: 2; }
        .${PAGE} .qa-life-icon { color: var(--qa-blue-dark); }
        .${PAGE} .qa-life-step h3 { font-size: 20px; min-height: 52px; }
        .${PAGE} .qa-life-step > p { margin-top: 12px; font-size: 16px; line-height: 1.65; }
        .${PAGE} .qa-life-step ul { list-style: none; padding: 0; margin: 18px 0 0; border-top: 1px solid var(--qa-divider); }
        .${PAGE} .qa-life-step li { position: relative; padding: 9px 0 9px 15px; border-bottom: 1px solid var(--qa-divider); font-size: 16px; line-height: 1.5; color: var(--qa-muted); }
        .${PAGE} .qa-life-step li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--qa-blue); position: absolute; left: 0; top: 16px; }
        .${PAGE} .qa-lifecycle-links { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 42px; }

        .${PAGE} .qa-document-directory { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--qa-border); border-left: 1px solid var(--qa-border); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .${PAGE} .qa-doc-group { padding: 34px 36px 36px; border-right: 1px solid var(--qa-border); border-bottom: 1px solid var(--qa-border); }
        .${PAGE} .qa-doc-group-head { display: flex; align-items: center; gap: 14px; margin-bottom: 18px; }
        .${PAGE} .qa-doc-group-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px; background: var(--qa-pale-blue); color: var(--qa-blue-dark); flex: 0 0 auto; }
        .${PAGE} .qa-doc-group h3 { font-size: 21px; }
        .${PAGE} .qa-doc-group ul { padding: 0; margin: 0; list-style: none; columns: 2; column-gap: 28px; }
        .${PAGE} .qa-doc-group li { break-inside: avoid; position: relative; padding: 6px 0 6px 17px; font-size: 16px; line-height: 1.56; color: var(--qa-body); }
        .${PAGE} .qa-doc-group li::before { content: ""; width: 5px; height: 5px; border-radius: 50%; background: var(--qa-blue); position: absolute; left: 0; top: 15px; }

        .${PAGE} .qa-environment-list { border-top: 1px solid var(--qa-border); }
        .${PAGE} .qa-environment-row { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; padding: 40px 0; border-bottom: 1px solid var(--qa-border); }
        .${PAGE} .qa-environment-row h3 { font-size: 24px; }
        .${PAGE} .qa-environment-main > p { font-size: 17px; line-height: 1.72; max-width: 760px; }
        .${PAGE} .qa-environment-items { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 8px 24px; margin-top: 18px; }
        .${PAGE} .qa-environment-item { display: flex; align-items: flex-start; gap: 9px; font-size: 16px; line-height: 1.55; color: var(--qa-muted); }
        .${PAGE} .qa-environment-item svg { color: var(--qa-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .${PAGE} .qa-environment-links { display: flex; gap: 20px; flex-wrap: wrap; margin-top: 20px; }

        .${PAGE} .qa-comparison { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .${PAGE} .qa-compare-panel { padding: 38px; border-radius: 28px; border: 1px solid var(--qa-border); background: #FFFFFF; }
        .${PAGE} .qa-compare-panel--urgent { background: var(--qa-navy); border-color: var(--qa-navy); color: #DCE5F6; }
        .${PAGE} .qa-compare-top { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .${PAGE} .qa-compare-icon { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; background: var(--qa-pale-blue); color: var(--qa-blue-dark); }
        .${PAGE} .qa-compare-panel--urgent .qa-compare-icon { background: rgba(255,255,255,.11); color: #FFFFFF; }
        .${PAGE} .qa-compare-panel--urgent h3 { color: #FFFFFF; }
        .${PAGE} .qa-compare-panel > p { font-size: 16px; line-height: 1.7; }
        .${PAGE} .qa-compare-panel--urgent > p { color: #DCE5F6; }
        .${PAGE} .qa-compare-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 18px; margin-top: 24px; }
        .${PAGE} .qa-compare-list span { display: flex; gap: 9px; align-items: flex-start; font-size: 16px; line-height: 1.55; }
        .${PAGE} .qa-compare-list svg { flex: 0 0 auto; margin-top: 2px; color: var(--qa-blue-dark); }
        .${PAGE} .qa-compare-panel--urgent .qa-compare-list svg { color: var(--qa-light-blue); }
        .${PAGE} .qa-compare-note { max-width: 840px; margin: 30px auto 0; text-align: center; font-size: 16px; line-height: 1.7; color: var(--qa-muted); }
        .${PAGE} .qa-urgent-cta { margin-top: 28px; display: flex; justify-content: center; }

        .${PAGE} .qa-workflow { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 54px; position: relative; }
        .${PAGE} .qa-workflow::before { content: ""; position: absolute; left: 50%; top: 0; bottom: 0; width: 1px; background: var(--qa-border); }
        .${PAGE} .qa-workflow-item { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--qa-divider); }
        .${PAGE} .qa-workflow-number { width: 44px; height: 44px; border-radius: 50%; background: var(--qa-pale-blue); color: var(--qa-blue-dark); display: grid; place-items: center; font-size: 12px; font-weight: 700; letter-spacing: .06em; }
        .${PAGE} .qa-workflow-item h3 { font-size: 21px; }
        .${PAGE} .qa-workflow-item p { margin-top: 8px; font-size: 16px; line-height: 1.66; color: var(--qa-body); }

        .${PAGE} .qa-version-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(440px, .9fr); gap: 76px; align-items: center; }
        .${PAGE} .qa-version-copy p { font-size: 17px; line-height: 1.75; max-width: 700px; }
        .${PAGE} .qa-version-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px 24px; margin-top: 26px; }
        .${PAGE} .qa-check-row { display: flex; gap: 10px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: var(--qa-body); }
        .${PAGE} .qa-check-row svg { color: var(--qa-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .${PAGE} .qa-version-art { min-height: 380px; border: 1px solid var(--qa-border); border-radius: 30px; background: #FFFFFF; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; padding: 42px 30px; gap: 18px; box-shadow: 0 20px 50px rgba(28,47,91,.06); }
        .${PAGE} .qa-version-stack { height: 260px; border: 1px solid #C6D1E4; border-radius: 20px; background: #FFFFFF; padding: 26px 22px; position: relative; }
        .${PAGE} .qa-version-stack--right { border-color: #9EB2E6; }
        .${PAGE} .qa-version-tag { color: var(--qa-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .1em; }
        .${PAGE} .qa-version-line { height: 7px; border-radius: 999px; background: #DCE3EF; width: 58%; margin-top: 18px; }
        .${PAGE} .qa-version-line--wide { width: 100%; }
        .${PAGE} .qa-version-line--mid { width: 78%; }
        .${PAGE} .qa-version-highlight { height: 42px; border-radius: 12px; background: #F1F3F8; margin-top: 22px; border: 1px dashed #B9C4D6; }
        .${PAGE} .qa-version-highlight--blue { background: var(--qa-soft-blue); border-color: var(--qa-blue); }
        .${PAGE} .qa-version-change { display: flex; flex-direction: column; align-items: center; gap: 9px; color: var(--qa-blue-dark); }
        .${PAGE} .qa-version-change span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 10px; font-weight: 700; letter-spacing: .12em; }

        .${PAGE} .qa-expertise-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
        .${PAGE} .qa-expertise-panel { border-radius: 28px; padding: 38px; border: 1px solid var(--qa-border); background: #FFFFFF; }
        .${PAGE} .qa-expertise-panel--tech { background: var(--qa-pale-blue); }
        .${PAGE} .qa-expertise-panel h3 { font-size: 25px; }
        .${PAGE} .qa-expertise-panel > p { margin-top: 13px; font-size: 16px; line-height: 1.7; }
        .${PAGE} .qa-expertise-list { display: grid; gap: 11px; margin-top: 24px; }
        .${PAGE} .qa-expertise-list span { display: flex; align-items: flex-start; gap: 10px; font-size: 16px; line-height: 1.55; }
        .${PAGE} .qa-expertise-list svg { color: var(--qa-blue-dark); flex: 0 0 auto; margin-top: 2px; }
        .${PAGE} .qa-ai-principle { margin-top: 26px; border-left: 2px solid var(--qa-blue); padding-left: 18px; color: var(--qa-navy); font-size: 16px; font-weight: 600; line-height: 1.6; }

        .${PAGE} .qa-quality-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: start; }
        .${PAGE} .qa-quality-intro p { color: #CBD6E8; font-size: 17px; line-height: 1.75; margin-top: 18px; }
        .${PAGE} .qa-quality-link { margin-top: 26px; }
        .${PAGE} .qa-section--navy .qa-editorial-link { color: #FFFFFF; }
        .${PAGE} .qa-quality-list { border-top: 1px solid rgba(255,255,255,.16); }
        .${PAGE} .qa-quality-row { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 25px 0; border-bottom: 1px solid rgba(255,255,255,.16); }
        .${PAGE} .qa-quality-row-icon { width: 42px; height: 42px; border-radius: 13px; background: rgba(255,255,255,.09); display: grid; place-items: center; color: var(--qa-light-blue); }
        .${PAGE} .qa-quality-row h3 { font-size: 21px; }
        .${PAGE} .qa-quality-row p { color: #C8D2E6; font-size: 16px; line-height: 1.62; margin-top: 7px; }
        .${PAGE} .qa-quality-row strong { color: #FFFFFF; font-weight: 600; }

        .${PAGE} .qa-audit-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .${PAGE} .qa-audit-item { padding: 28px 26px; border-top: 2px solid var(--qa-blue); background: #FFFFFF; }
        .${PAGE} .qa-audit-icon { width: 40px; height: 40px; border-radius: 12px; background: var(--qa-pale-blue); color: var(--qa-blue-dark); display: grid; place-items: center; margin-bottom: 20px; }
        .${PAGE} .qa-audit-item h3 { font-size: 20px; }
        .${PAGE} .qa-audit-item p { font-size: 16px; line-height: 1.64; margin-top: 10px; color: var(--qa-body); }

        .${PAGE} .qa-connected-services { border-top: 1px solid var(--qa-border); }
        .${PAGE} .qa-service-row { display: grid; grid-template-columns: .55fr 1fr auto; gap: 34px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--qa-border); }
        .${PAGE} .qa-service-row h3 { font-size: 21px; }
        .${PAGE} .qa-service-row p { font-size: 16px; line-height: 1.62; }

        .${PAGE} .qa-differentiator-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; border-top: 1px solid var(--qa-border); border-left: 1px solid var(--qa-border); }
        .${PAGE} .qa-differentiator { padding: 30px 30px 32px; border-right: 1px solid var(--qa-border); border-bottom: 1px solid var(--qa-border); background: #FFFFFF; }
        .${PAGE} .qa-differentiator h3 { font-size: 20px; }
        .${PAGE} .qa-differentiator p { margin-top: 10px; font-size: 16px; line-height: 1.64; }

        .${PAGE} .qa-scenario { border-radius: 30px; border: 1px solid var(--qa-border); overflow: hidden; background: #FFFFFF; display: grid; grid-template-columns: .88fr 1.12fr; }
        .${PAGE} .qa-scenario-copy { padding: 48px; background: var(--qa-pale-blue); }
        .${PAGE} .qa-scenario-copy h2 { font-size: 34px; }
        .${PAGE} .qa-scenario-copy p { margin-top: 18px; font-size: 17px; line-height: 1.72; }
        .${PAGE} .qa-scenario-steps { padding: 26px 46px; }
        .${PAGE} .qa-scenario-step { display: grid; grid-template-columns: 36px 1fr; gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--qa-divider); }
        .${PAGE} .qa-scenario-step:last-child { border-bottom: 0; }
        .${PAGE} .qa-scenario-step-number { width: 32px; height: 32px; border-radius: 50%; background: var(--qa-blue); color: #FFFFFF; display: grid; place-items: center; font-size: 11px; font-weight: 700; }
        .${PAGE} .qa-scenario-step h3 { font-size: 18px; }
        .${PAGE} .qa-scenario-step p { font-size: 16px; line-height: 1.6; margin-top: 5px; color: var(--qa-muted); }

        .${PAGE} .qa-faq-list { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--qa-border); }
        .${PAGE} .qa-faq-item { border-bottom: 1px solid var(--qa-border); }
        .${PAGE} .qa-faq-question { width: 100%; border: 0; background: transparent; color: var(--qa-navy); display: flex; justify-content: space-between; align-items: center; gap: 26px; padding: 24px 0; text-align: left; cursor: pointer; font-family: "Inter Tight", Inter, Arial, sans-serif; font-size: 20px; line-height: 1.4; font-weight: 500; }
        .${PAGE} .qa-faq-icon { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #C9D4E5; display: grid; place-items: center; color: var(--qa-blue-dark); flex: 0 0 auto; }
        .${PAGE} .qa-faq-answer { padding: 0 66px 24px 0; }
        .${PAGE} .qa-faq-answer p { font-size: 16px; line-height: 1.72; color: var(--qa-body); }

        .${PAGE} .qa-final-wrap { padding-block: 86px; }
        .${PAGE} .qa-final-cta { border-radius: 30px; background: linear-gradient(120deg, #17264D 0%, #253F8F 100%); color: #DCE5F6; padding: 64px 66px; display: grid; grid-template-columns: minmax(0, 1fr) auto; align-items: center; gap: 64px; overflow: hidden; position: relative; }
        .${PAGE} .qa-final-cta::after { content: ""; position: absolute; width: 310px; height: 310px; border: 1px solid rgba(255,255,255,.10); border-radius: 50%; right: -80px; top: -130px; }
        .${PAGE} .qa-final-cta h2 { color: #FFFFFF; max-width: 770px; }
        .${PAGE} .qa-final-cta p { margin-top: 18px; color: #CBD6E8; font-size: 17px; line-height: 1.72; max-width: 780px; }
        .${PAGE} .qa-final-cta .qa-button-row { position: relative; z-index: 1; flex-direction: column; align-items: stretch; min-width: 220px; }
        .${PAGE} .qa-final-cta .qa-button { width: 100%; }

        @media (max-width: 1180px) {
          .${PAGE} .qa-shell { padding-inline: 40px; }
          .${PAGE} .qa-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(390px, .78fr); gap: 42px; }
          .${PAGE} .qa-lifecycle-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 44px 24px; }
          .${PAGE} .qa-lifecycle-line { display: none; }
          .${PAGE} .qa-life-step h3 { min-height: auto; }
          .${PAGE} .qa-audit-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 900px) {
          .${PAGE} .qa-shell { padding-inline: 30px; }
          .${PAGE} h1 { font-size: 44px; }
          .${PAGE} h2 { font-size: 34px; }
          .${PAGE} .qa-section { padding-block: 80px; }
          .${PAGE} .qa-hero { padding-block: 80px 74px; }
          .${PAGE} .qa-hero-grid { grid-template-columns: 1fr; gap: 46px; }
          .${PAGE} .qa-hero-art { justify-self: center; max-width: 560px; }
          .${PAGE} .qa-trust-grid { grid-template-columns: repeat(3, 1fr); }
          .${PAGE} .qa-trust-item + .qa-trust-item { border-left: 0; }
          .${PAGE} .qa-trust-item { border-bottom: 1px solid var(--qa-divider); }
          .${PAGE} .qa-trust-item:nth-last-child(-n+2) { border-bottom: 0; }
          .${PAGE} .qa-connected-grid, .${PAGE} .qa-version-grid, .${PAGE} .qa-quality-grid { grid-template-columns: 1fr; gap: 48px; }
          .${PAGE} .qa-connected-art { min-height: 410px; }
          .${PAGE} .qa-document-directory { grid-template-columns: 1fr; }
          .${PAGE} .qa-environment-row { grid-template-columns: 1fr; gap: 16px; }
          .${PAGE} .qa-comparison, .${PAGE} .qa-expertise-grid { grid-template-columns: 1fr; }
          .${PAGE} .qa-workflow { grid-template-columns: 1fr; }
          .${PAGE} .qa-workflow::before { display: none; }
          .${PAGE} .qa-service-row { grid-template-columns: 1fr; gap: 10px; align-items: start; }
          .${PAGE} .qa-service-row .qa-editorial-link { margin-top: 4px; }
          .${PAGE} .qa-differentiator-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .${PAGE} .qa-scenario { grid-template-columns: 1fr; }
          .${PAGE} .qa-final-cta { grid-template-columns: 1fr; gap: 32px; }
          .${PAGE} .qa-final-cta .qa-button-row { flex-direction: row; min-width: 0; }
          .${PAGE} .qa-final-cta .qa-button { width: auto; }
        }

        @media (max-width: 767px) {
          .${PAGE} { font-size: 16px; }
          .${PAGE} .qa-shell { padding-inline: 20px; }
          .${PAGE} .qa-section, .${PAGE} .qa-section--dense { padding-block: 68px; }
          .${PAGE} h1 { font-size: 42px; line-height: 1.25; }
          .${PAGE} h2 { font-size: 32px; line-height: 1.3; }
          .${PAGE} h3 { font-size: 21px; }
          .${PAGE} .qa-section-header { margin-bottom: 38px; }
          .${PAGE} .qa-section-header > p { font-size: 17px; }

          .${PAGE} .qa-mobile-center { text-align: center; margin-inline: auto; }
          .${PAGE} .qa-mobile-center .qa-eyebrow { text-align: center; }
          .${PAGE} .qa-mobile-center > p { text-align: left; }
          .${PAGE} .qa-mobile-left { text-align: left; margin-inline: 0; }
          .${PAGE} .qa-mobile-left .qa-eyebrow, .${PAGE} .qa-mobile-left > p { text-align: left; }
          .${PAGE} .qa-mobile-title-center > .qa-eyebrow, .${PAGE} .qa-mobile-title-center > h2 { text-align: center; }
          .${PAGE} .qa-editorial-link { min-height: 44px; }

          .${PAGE} .qa-hero { padding-block: 68px 60px; }
          .${PAGE} .qa-hero-copy { max-width: none; }
          .${PAGE} .qa-hero-lead { font-size: 18px; }
          .${PAGE} .qa-hero-detail { font-size: 16px; }
          .${PAGE} .qa-hero .qa-button-row { display: grid; grid-template-columns: 1fr; }
          .${PAGE} .qa-hero .qa-button { width: 100%; }
          .${PAGE} .qa-hero-art { max-width: 500px; }

          .${PAGE} .qa-trust-grid { grid-template-columns: 1fr; }
          .${PAGE} .qa-trust-item { border-bottom: 1px solid var(--qa-divider) !important; padding: 18px 0; }
          .${PAGE} .qa-trust-item:last-child { border-bottom: 0 !important; }

          .${PAGE} .qa-connected-grid { gap: 38px; }
          .${PAGE} .qa-connected-art { min-height: 0; padding: 20px; display: grid; gap: 10px; overflow: hidden; }
          .${PAGE} .qa-connected-art::before, .${PAGE} .qa-connected-art > svg { display: none; }
          .${PAGE} .qa-doc-node,
          .${PAGE} .qa-doc-node--sop,
          .${PAGE} .qa-doc-node--finding,
          .${PAGE} .qa-doc-node--capa,
          .${PAGE} .qa-doc-node--training,
          .${PAGE} .qa-doc-node--revision { position: static; inset: auto; min-width: 0; width: 100%; padding: 12px 14px; box-shadow: none; }
          .${PAGE} .qa-doc-node span { font-size: 11px; }
          .${PAGE} .qa-doc-node small { font-size: 13px; }
          .${PAGE} .qa-chain { gap: 6px; }
          .${PAGE} .qa-chain span { font-size: 12px; }

          .${PAGE} .qa-lifecycle-grid { grid-template-columns: 1fr; gap: 0; }
          .${PAGE} .qa-life-step { display: grid; grid-template-columns: 54px 1fr; column-gap: 18px; padding: 0 0 36px; }
          .${PAGE} .qa-life-step::before { content: ""; position: absolute; left: 24px; top: 52px; bottom: 0; width: 2px; background: #D6E0F4; }
          .${PAGE} .qa-life-step:last-child::before { display: none; }
          .${PAGE} .qa-life-top { grid-column: 1; display: block; margin: 0; }
          .${PAGE} .qa-life-number { width: 48px; height: 48px; }
          .${PAGE} .qa-life-icon { display: none; }
          .${PAGE} .qa-life-step h3, .${PAGE} .qa-life-step > p, .${PAGE} .qa-life-step ul { grid-column: 2; }
          .${PAGE} .qa-life-step h3 { grid-row: 1; align-self: center; }
          .${PAGE} .qa-life-step > p { margin-top: 12px; }
          .${PAGE} .qa-life-step ul { margin-top: 15px; }
          .${PAGE} .qa-lifecycle-links { justify-content: flex-start; gap: 16px; }

          .${PAGE} .qa-doc-group { padding: 28px 24px 30px; }
          .${PAGE} .qa-doc-group ul { columns: 1; }
          .${PAGE} .qa-environment-items { grid-template-columns: 1fr; }
          .${PAGE} .qa-environment-links { gap: 14px; }

          .${PAGE} .qa-compare-panel { padding: 30px 24px; }
          .${PAGE} .qa-compare-list { grid-template-columns: 1fr; }
          .${PAGE} .qa-compare-note { text-align: left; }
          .${PAGE} .qa-urgent-cta { justify-content: flex-start; }
          .${PAGE} .qa-urgent-cta .qa-button { width: 100%; }

          .${PAGE} .qa-workflow-item { grid-template-columns: 46px 1fr; gap: 14px; padding: 24px 0; }
          .${PAGE} .qa-workflow-number { width: 40px; height: 40px; }
          .${PAGE} .qa-workflow-item h3 { font-size: 20px; }

          .${PAGE} .qa-version-list { grid-template-columns: 1fr; }
          .${PAGE} .qa-version-art { min-height: 0; grid-template-columns: 1fr; padding: 24px; gap: 12px; }
          .${PAGE} .qa-version-stack { height: 190px; padding: 22px 18px; }
          .${PAGE} .qa-version-change { justify-self: center; transform: rotate(90deg); }
          .${PAGE} .qa-version-change span { display: none; }

          .${PAGE} .qa-expertise-panel { padding: 30px 24px; }
          .${PAGE} .qa-quality-grid { gap: 38px; }
          .${PAGE} .qa-audit-grid { grid-template-columns: 1fr; gap: 0; border-top: 1px solid var(--qa-border); }
          .${PAGE} .qa-audit-item { border-top: 0; border-bottom: 1px solid var(--qa-border); padding-inline: 0; background: transparent; }
          .${PAGE} .qa-audit-item:last-child { border-bottom: 0; }

          .${PAGE} .qa-service-row { padding: 24px 0; }
          .${PAGE} .qa-differentiator-grid { grid-template-columns: 1fr; }
          .${PAGE} .qa-differentiator { padding: 26px 24px; }

          .${PAGE} .qa-scenario-copy { padding: 34px 26px; }
          .${PAGE} .qa-scenario-copy h2 { font-size: 30px; }
          .${PAGE} .qa-scenario-steps { padding: 16px 26px 20px; }

          .${PAGE} .qa-faq-question { font-size: 18px; padding: 21px 0; }
          .${PAGE} .qa-faq-answer { padding-right: 0; }

          .${PAGE} .qa-final-wrap { padding-block: 68px; }
          .${PAGE} .qa-final-cta { padding: 42px 28px; }
          .${PAGE} .qa-final-cta::after { width: 220px; height: 220px; right: -110px; top: -100px; }
          .${PAGE} .qa-final-cta .qa-button-row { display: grid; grid-template-columns: 1fr; }
          .${PAGE} .qa-final-cta .qa-button { width: 100%; }
        }

        @media (max-width: 360px) {
          .${PAGE} h1 { font-size: 38px; }
          .${PAGE} h2 { font-size: 30px; }
          .${PAGE} .qa-connected-art { padding: 16px; }
          .${PAGE} .qa-doc-node { padding: 11px 12px; }
          .${PAGE} .qa-version-art { padding: 20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE} .qa-button, .${PAGE} .qa-editorial-link svg { transition: none; }
          .${PAGE} .qa-button:hover { transform: none; }
        }
      `}</style>

      <section className="qa-hero">
        <div className="qa-shell qa-hero-grid">
          <div className="qa-hero-copy">
            <div className="qa-eyebrow">REGULATED QUALITY DOCUMENTATION</div>
            <h1>Quality Assurance, Audit &amp; Inspection Translation Services</h1>
            <p className="qa-hero-lead">
              Keep quality-system, audit, inspection, and remediation documentation accurate and connected across languages.
            </p>
            <p className="qa-hero-detail">
              Sesen supports pharmaceutical, biotechnology, medical device, CRO, manufacturing, laboratory, and other regulated life sciences organizations with specialized translation for QMS manuals, SOPs, audit reports, deviations, CAPAs, validation records, supplier quality documentation, and inspection-response materials in 150+ languages.
            </p>
            <div className="qa-button-row">
              <a className="qa-button qa-button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Icon name="arrow" size={17} /></a>
              <a className="qa-button qa-button--secondary" href="https://www.sesen.com/contact-sales/">SPEAK TO AN EXPERT <Icon name="arrow" size={17} /></a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="qa-trust-band" aria-label="Sesen quality translation capabilities">
        <div className="qa-shell qa-trust-grid">
          {[
            ["shield", "Life Sciences Specialized"],
            ["check", "ISO-Certified Quality Processes"],
            ["globe", "150+ Languages"],
            ["people", "Professional Human Review"],
            ["layers", "Controlled Multilingual Workflows"],
          ].map(([icon, label]) => (
            <div className="qa-trust-item" key={label}>
              <span className="qa-trust-icon"><Icon name={icon} size={20} /></span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell qa-connected-grid">
          <div className="qa-connected-copy qa-mobile-title-center">
            <div className="qa-eyebrow">CONNECTED QUALITY CONTENT</div>
            <h2>Quality Documentation Has to Stay Connected Before, During, and After an Audit</h2>
            <div className="qa-prose" style={{ marginTop: 22 }}>
              <p>
                Quality systems are built from connected documents, processes, records, and actions. A quality requirement may be implemented through an SOP. An audit finding may trigger an investigation. The investigation may lead to a CAPA. That CAPA may require revised procedures, updated training, new forms, or additional effectiveness checks.
              </p>
              <p>
                When those activities span countries and languages, translation becomes part of the document-control environment. Sesen helps life sciences organizations preserve approved terminology, technical meaning, document relationships, revision context, and formatting as quality content moves from routine operations through audit preparation, inspection response, remediation, and ongoing updates.
              </p>
            </div>
            <div className="qa-chain" aria-label="Typical quality-document chain">
              <span>FINDING</span><b>→</b><span>INVESTIGATION</span><b>→</b><span>CAPA</span><b>→</b><span>PROCEDURE CHANGE</span><b>→</b><span>TRAINING UPDATE</span><b>→</b><span>CONTROLLED RELEASE</span>
            </div>
          </div>
          <ConnectedDocsArtwork />
        </div>
      </section>

      <section className="qa-section qa-section--pale">
        <div className="qa-shell">
          <SectionHeader
            title="Multilingual Quality Support Across the Audit and Inspection Lifecycle"
            intro="Quality translation is not a single event. Sesen supports connected documentation from the quality-system foundation through audit preparation, inspection response, corrective action, and controlled multilingual updates."
            align="center"
            className="qa-mobile-left"
          />
          <div className="qa-lifecycle-wrap">
            <div className="qa-lifecycle-line" />
            <div className="qa-lifecycle-grid">
              {lifecycle.map((step) => (
                <article className="qa-life-step" key={step.n}>
                  <div className="qa-life-top">
                    <div className="qa-life-number">{step.n}</div>
                    <div className="qa-life-icon"><Icon name={step.icon} /></div>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <ul>
                    {step.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="qa-lifecycle-links">
            <ArrowLink href="https://www.sesen.com/sop-translation-services/">SOP Translation Services</ArrowLink>
            <ArrowLink href="https://www.sesen.com/gmp-translation-services/">GMP Translation Services</ArrowLink>
            <ArrowLink href="https://www.sesen.com/elearning-training-translation-services/">eLearning &amp; Training Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell">
          <SectionHeader
            title="Quality and Audit Documentation Across Regulated Operations"
            intro="Sesen supports individual quality documents as well as interconnected multilingual document programs spanning QMS operations, audits, inspections, manufacturing, validation, suppliers, laboratories, and remediation."
            align="center"
            className="qa-mobile-left"
          />
          <div className="qa-document-directory">
            {docGroups.map((group) => (
              <article className="qa-doc-group" key={group.title}>
                <div className="qa-doc-group-head">
                  <span className="qa-doc-group-icon"><Icon name={group.icon} /></span>
                  <h3>{group.title}</h3>
                </div>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--soft">
        <div className="qa-shell">
          <SectionHeader
            title="Multilingual Support Across Internal, Supplier, Certification, and Regulatory Reviews"
            intro="Quality reviews take different forms and create different documentation needs. Sesen supports internal audits, supplier and vendor audits, independent certification assessments, and regulatory inspections without treating them as interchangeable."
            align="center"
            className="qa-mobile-center"
          />
          <div className="qa-audit-grid">
            {auditTypes.map((item) => (
              <article className="qa-audit-item" key={item.title}>
                <span className="qa-audit-icon"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell">
          <SectionHeader
            eyebrow="CROSS-SECTOR QUALITY"
            title="A Consistent Quality Translation Framework Across Regulated Environments"
            intro="Quality systems vary by sector, product, organization, and regulatory environment. Sesen applies a consistent life sciences translation framework while adapting terminology, review, documentation, and delivery to the requirements of each regulated quality environment."
            align="left"
          />
          <div className="qa-environment-list">
            {environments.map((env) => (
              <article className="qa-environment-row" key={env.title}>
                <h3>{env.title}</h3>
                <div className="qa-environment-main">
                  <p>{env.text}</p>
                  <div className="qa-environment-items">
                    {env.items.map((item) => (
                      <span className="qa-environment-item" key={item}><Icon name="check" size={17} />{item}</span>
                    ))}
                  </div>
                  {env.links.length ? (
                    <div className="qa-environment-links">
                      {env.links.map((link) => <ArrowLink href={link.href} key={link.href}>{link.label}</ArrowLink>)}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--pale">
        <div className="qa-shell">
          <SectionHeader
            title="From Planned Audit Preparation to Time-Critical Inspection Response"
            intro="Not every quality translation project requires the same workflow. Sesen adapts resource planning, terminology alignment, review, formatting, and delivery sequencing to the operational situation."
            align="center"
            className="qa-mobile-center"
          />
          <div className="qa-comparison">
            <article className="qa-compare-panel">
              <div className="qa-compare-top">
                <span className="qa-compare-icon"><Icon name="system" /></span>
                <h3>Planned Audit Preparation</h3>
              </div>
              <p>Scheduled audits provide time to establish terminology, review references, plan reviewer capacity, and organize controlled document packages before they are requested.</p>
              <div className="qa-compare-list">
                {["Defined document inventories", "Known audit dates", "Approved source documents", "Terminology preparation", "Translation-memory analysis", "Planned translator and reviewer capacity", "Batch production", "Final linguistic and formatting QA"].map((item) => (
                  <span key={item}><Icon name="check" size={17} />{item}</span>
                ))}
              </div>
            </article>
            <article className="qa-compare-panel qa-compare-panel--urgent">
              <div className="qa-compare-top">
                <span className="qa-compare-icon"><Icon name="clock" /></span>
                <h3>Active Inspection &amp; Urgent Response</h3>
              </div>
              <p>Active inspections can create changing priorities, new document requests, historical records, complex formats, multiple stakeholders, and a need for controlled rolling delivery.</p>
              <div className="qa-compare-list">
                {["Changing document priorities", "Multiple source languages", "Historical quality records", "Scanned or non-editable files", "Complex forms and tables", "Parallel translation and review", "Rolling delivery", "Ongoing revisions"].map((item) => (
                  <span key={item}><Icon name="check" size={17} />{item}</span>
                ))}
              </div>
            </article>
          </div>
          <p className="qa-compare-note">Turnaround depends on document volume, languages, complexity, source-file condition, required review level, and available specialist resources. Sesen configures the workflow around the inspection-response requirements rather than applying one generic production model.</p>
          <div className="qa-urgent-cta">
            <a className="qa-button qa-button--primary" href="https://www.sesen.com/contact-sales/">SPEAK TO AN EXPERT <Icon name="arrow" size={17} /></a>
          </div>
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell">
          <SectionHeader
            title="A Controlled Translation Workflow for Quality and Inspection Documentation"
            intro="Professional language expertise, terminology management, independent review, technical QA, formatting, and lifecycle maintenance work together to support regulated multilingual quality content."
            align="left"
          />
          <div className="qa-workflow">
            {workflow.map((step) => (
              <article className="qa-workflow-item" key={step.n}>
                <div className="qa-workflow-number">{step.n}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--soft">
        <div className="qa-shell qa-version-grid">
          <div className="qa-version-copy">
            <h2>Quality Systems Depend on Consistent Terminology and Controlled Versions</h2>
            <p style={{ marginTop: 20 }}>
              Quality documents frequently reference one another. An audit finding may reference an SOP. A deviation may identify the same process or equipment. A CAPA may modify that procedure, and an effectiveness check may later reference the original corrective action. Small terminology or version inconsistencies can therefore propagate through an entire multilingual document set.
            </p>
            <div className="qa-version-list">
              {["Client-approved glossaries", "Translation memory", "Product and process terminology", "Style guides", "Approved reference translations", "Reuse of previously approved content", "Cross-document consistency checks", "Version-aware project management", "Recurring multilingual update workflows", "Structured change handling"].map((item) => (
                <span className="qa-check-row" key={item}><Icon name="check" size={17} />{item}</span>
              ))}
            </div>
          </div>
          <VersionArtwork />
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell">
          <SectionHeader
            title="Professional Expertise First, AI-Assisted Quality Controls Where They Add Value"
            intro="AI can improve efficiency and help surface inconsistencies, but regulated quality documentation still requires professional judgment. Sesen keeps qualified human linguists central while using controlled technology where it strengthens the workflow."
            align="center"
            className="qa-mobile-center"
          />
          <div className="qa-expertise-grid">
            <article className="qa-expertise-panel">
              <div className="qa-compare-top">
                <span className="qa-compare-icon"><Icon name="people" /></span>
                <h3>Professional Human Expertise</h3>
              </div>
              <p>Human-led workflows preserve context, technical meaning, and judgment across regulated quality documentation.</p>
              <div className="qa-expertise-list">
                {["Professional native linguists", "Life sciences subject-matter matching", "Independent bilingual review", "Terminology specialists", "Experienced project management", "Human evaluation of ambiguity and context", "Final professional quality review"].map((item) => (
                  <span key={item}><Icon name="check" size={17} />{item}</span>
                ))}
              </div>
            </article>
            <article className="qa-expertise-panel qa-expertise-panel--tech">
              <div className="qa-compare-top">
                <span className="qa-compare-icon"><Icon name="layers" /></span>
                <h3>AI- &amp; Technology-Assisted Controls</h3>
              </div>
              <p>Technology can help manage scale, reuse approved language, and identify potential issues for professional review.</p>
              <div className="qa-expertise-list">
                {["Translation-memory matching", "Terminology checking", "Number and unit checks", "Missing-text detection", "Consistency analysis", "Repeated-content identification", "Version comparison", "Linguistic QA and anomaly detection"].map((item) => (
                  <span key={item}><Icon name="check" size={17} />{item}</span>
                ))}
              </div>
              <div className="qa-ai-principle">Technology supports the experts. It does not remove them from the process.</div>
              <div style={{ marginTop: 22 }}><ArrowLink href="https://www.sesen.com/sesengpt/">Explore SesenGPT</ArrowLink></div>
            </article>
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--navy">
        <div className="qa-shell qa-quality-grid">
          <div className="qa-quality-intro qa-mobile-title-center">
            <div className="qa-eyebrow">QUALITY, SECURITY &amp; TRACEABILITY</div>
            <h2>Structured Quality Controls for Sensitive Regulated Documentation</h2>
            <p>Quality-system and inspection materials can contain proprietary manufacturing information, investigation details, product data, supplier information, and other sensitive content. Sesen combines structured translation processes with enterprise project controls to support regulated multilingual documentation.</p>
            <div className="qa-quality-link"><ArrowLink href="https://www.sesen.com/quality-compliance-security/">Explore Quality, Compliance &amp; Security</ArrowLink></div>
          </div>
          <div className="qa-quality-list">
            <div className="qa-quality-row">
              <span className="qa-quality-row-icon"><Icon name="shield" /></span>
              <div><h3>ISO-Certified Quality Framework</h3><p>Sesen's certified quality framework includes <strong>ISO 17100</strong> for translation services, <strong>ISO 9001:2015</strong> for quality management, and <strong>ISO 13485:2016</strong> for medical-device quality management.</p></div>
            </div>
            <div className="qa-quality-row">
              <span className="qa-quality-row-icon"><Icon name="link" /></span>
              <div><h3>Translation Traceability</h3><p>Structured project records can cover source and target files, language assignments, translation and review stages, terminology resources, version changes, and delivery files.</p></div>
            </div>
            <div className="qa-quality-row">
              <span className="qa-quality-row-icon"><Icon name="file" /></span>
              <div><h3>Secure File Handling</h3><p>Access-controlled workflows and secure file-transfer processes help protect confidential quality and technical documentation throughout production.</p></div>
            </div>
            <div className="qa-quality-row">
              <span className="qa-quality-row-icon"><Icon name="system" /></span>
              <div><h3>Customer-Specific Quality Requirements</h3><p>Workflows can be configured around terminology, review, formatting, document naming, certifications, file handling, and delivery procedures.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--soft">
        <div className="qa-shell">
          <div className="qa-scenario">
            <div className="qa-scenario-copy qa-mobile-title-center">
              <h2>When an Inspection Request Creates an Immediate Multilingual Workflow</h2>
              <p>A global life sciences organization may need to provide SOPs, deviations, CAPAs, manufacturing records, validation protocols, supplier documentation, and prior audit materials from several international sites. Some files may already have approved translations; others may exist only in the local language, and priorities can change as the inspection progresses.</p>
              <p>Sesen can organize that collection of urgent files into a controlled multilingual process that preserves priority, terminology, version context, document relationships, and delivery sequence as the inspection progresses.</p>
            </div>
            <div className="qa-scenario-steps">
              {[
                ["Triage Incoming Documents", "Categorize language, content type, priority, format, revision status, and relationship to other requested records."],
                ["Align Existing Terminology", "Apply approved glossaries, translation memories, previous translations, and quality-system terminology where appropriate."],
                ["Match Specialist Resources", "Assign translation and review resources according to subject matter, language, volume, and timing."],
                ["Translate and Review in Parallel", "Coordinate multiple document streams through translation, review, QA, and formatting when the project supports parallel production."],
                ["Deliver According to Priority", "Release completed documents in controlled batches when rolling delivery better supports the inspection workflow."],
                ["Maintain Continuity After the Inspection", "Reuse approved linguistic assets for findings, CAPAs, revised procedures, updated training, and subsequent quality documentation."],
              ].map(([title, text], index) => (
                <article className="qa-scenario-step" key={title}>
                  <span className="qa-scenario-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--pale">
        <div className="qa-shell">
          <SectionHeader
            title="Quality Findings Often Trigger Changes Far Beyond the Audit Report"
            intro="A finding can move through investigation, root cause, CAPA, procedure changes, training updates, and controlled multilingual release. Sesen connects audit and inspection translation with specialist services across the broader life sciences content lifecycle."
            align="left"
          />
          <div className="qa-connected-services">
            {connectedServices.map((service) => (
              <article className="qa-service-row" key={service.href}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ArrowLink href={service.href}>Explore {service.title}</ArrowLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section">
        <div className="qa-shell">
          <SectionHeader
            eyebrow="WHY SESEN"
            title="Built for Regulated Multilingual Quality Programs"
            intro="Quality translation requires more than linguistic accuracy. Organizations need a partner that can understand how documents relate to one another, maintain terminology across revisions, manage complex file sets, and adapt when quality priorities change."
            align="center"
            className="qa-mobile-center"
          />
          <div className="qa-differentiator-grid">
            {differentiators.map((item) => (
              <article className="qa-differentiator" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qa-section qa-section--soft">
        <div className="qa-shell">
          <SectionHeader
            title="Quality Assurance, Audit &amp; Inspection Translation FAQs"
            intro="Answers to common questions about multilingual quality systems, audit preparation, inspection response, CAPA documentation, and controlled updates."
            align="left"
          />
          <div className="qa-faq-list">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                index={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="qa-final-wrap">
        <div className="qa-shell">
          <div className="qa-final-cta">
            <div className="qa-final-copy qa-mobile-title-center">
              <h2>Prepare Your Multilingual Quality Documentation for the Next Review, Audit, or Inspection</h2>
              <p>Whether you are maintaining a multilingual QMS, preparing for a scheduled audit, responding to an active inspection, translating CAPA and deviation records, qualifying global suppliers, or implementing quality-driven document changes, Sesen can build a translation workflow around your documents, languages, timelines, and requirements.</p>
            </div>
            <div className="qa-button-row">
              <a className="qa-button qa-button--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <Icon name="arrow" size={17} /></a>
              <a className="qa-button qa-button--secondary" href="https://www.sesen.com/contact-sales/">SPEAK TO AN EXPERT <Icon name="arrow" size={17} /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
