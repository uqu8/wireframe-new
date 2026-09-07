import React from "react";

const PAGE_ROOT = "sesen-clinical-study-doc-page";

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
    document: (
      <svg {...common}>
        <path d="M6 3.5h7l5 5V20.5H6z" />
        <path d="M13 3.5v5h5" />
        <path d="M9 12h6M9 15.5h6" />
      </svg>
    ),
    protocol: (
      <svg {...common}>
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
    brochure: (
      <svg {...common}>
        <path d="M4.5 5.5c2.6-.8 5.1-.4 7.5 1.2v12c-2.4-1.6-4.9-2-7.5-1.2z" />
        <path d="M19.5 5.5c-2.6-.8-5.1-.4-7.5 1.2v12c2.4-1.6 4.9-2 7.5-1.2z" />
      </svg>
    ),
    form: (
      <svg {...common}>
        <rect x="4.5" y="3.5" width="15" height="17" rx="2" />
        <path d="M8 8h1M11 8h5M8 12h1M11 12h5M8 16h1M11 16h5" />
      </svg>
    ),
    manual: (
      <svg {...common}>
        <path d="M5 4.5h11.5a2.5 2.5 0 0 1 0 5H5z" />
        <path d="M5 9.5h12.5a2 2 0 0 1 0 4H5z" />
        <path d="M5 13.5h11a2.5 2.5 0 0 1 0 5H5z" />
      </svg>
    ),
    site: (
      <svg {...common}>
        <path d="M4 20V8l8-4 8 4v12" />
        <path d="M8 20v-6h8v6M8 10h2M14 10h2" />
      </svg>
    ),
    monitor: (
      <svg {...common}>
        <path d="M3.5 12s3.2-5 8.5-5 8.5 5 8.5 5-3.2 5-8.5 5-8.5-5-8.5-5z" />
        <circle cx="12" cy="12" r="2.2" />
      </svg>
    ),
    report: (
      <svg {...common}>
        <path d="M5 4h14v16H5z" />
        <path d="M8 16v-3M12 16V9M16 16v-5M8 7h8" />
      </svg>
    ),
    update: (
      <svg {...common}>
        <path d="M19 7v5h-5" />
        <path d="M18.2 12a6.5 6.5 0 1 0-1.9 4.6" />
      </svg>
    ),
    terminology: (
      <svg {...common}>
        <path d="M5 5h6M8 5v14M5.5 19h5" />
        <path d="M14 8h5M16.5 8v8M14.5 16h4" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 8 4.5-8 4.5-8-4.5z" />
        <path d="m4 12 8 4.5 8-4.5M4 16.5 12 21l8-4.5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="m8 12 2.5 2.5L16.5 9" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5S14.3 18.1 12 20.5M12 3.5C9.7 5.9 8.5 8.7 8.5 12s1.2 6.1 3.5 8.5" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <circle cx="8" cy="8" r="2.5" />
        <circle cx="16" cy="8" r="2.5" />
        <path d="M3.8 18c.5-3 2-4.5 4.2-4.5s3.7 1.5 4.2 4.5M11.8 18c.5-3 2-4.5 4.2-4.5s3.7 1.5 4.2 4.5" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3.5 19 6v5.2c0 4.2-2.4 7.3-7 9.3-4.6-2-7-5.1-7-9.3V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 10h6M9 14h4M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2" />
      </svg>
    ),
    arrow: (
      <svg {...common} width={18} height={18}>
        <path d="M5 12h13M13 7l5 5-5 5" />
      </svg>
    ),
  };

  return icons[name] || icons.document;
};

const documentFamilies = [
  {
    icon: "protocol",
    title: "Protocols & Study Design Documents",
    text:
      "Clinical study protocols establish objectives, endpoints, methodology, eligibility criteria, treatment plans, procedures, assessments, visit schedules, and safety requirements that can influence the entire documentation set.",
    bullets: [
      "Clinical study protocols and synopses",
      "Schedules of assessments",
      "Eligibility criteria and study procedures",
      "Treatment plans and dosing schedules",
      "Supporting study design documentation",
    ],
    footer:
      "Because protocol terminology frequently appears downstream, the translated protocol can become a reference point for other study documents.",
    link: "https://www.sesen.com/protocol-translation-services/",
    linkLabel: "Explore Protocol Translation Services",
  },
  {
    icon: "brochure",
    title: "Investigator Brochures",
    text:
      "Investigator Brochures combine clinical, nonclinical, safety, pharmacology, pharmacokinetic, dosing, and investigational product information for investigators and study stakeholders.",
    bullets: [
      "Full Investigator Brochures",
      "Clinical and nonclinical findings",
      "Safety and dosing information",
      "Tables, figures, and references",
      "IB revisions and version updates",
    ],
    footer:
      "Controlled terminology and version-aware translation help keep multilingual IB updates aligned with the protocol and previous approved language.",
    link:
      "https://www.sesen.com/investigators-brochure-translation-services/",
    linkLabel: "Explore Investigator Brochure Translation Services",
  },
  {
    icon: "form",
    title: "CRFs & eCRFs",
    text:
      "Case Report Forms translate protocol requirements into structured data collection. Field labels, instructions, response options, units, and recurring study concepts must remain clear and consistent across languages.",
    bullets: [
      "Paper Case Report Forms",
      "Electronic Case Report Forms",
      "Field labels and instructions",
      "Response options and visit-specific forms",
      "CRF amendments and updates",
    ],
    footer:
      "Sesen combines linguistic review with terminology management, structured-content awareness, and final QA for multilingual CRF and eCRF content.",
    link: "https://www.sesen.com/clinical-trial-translation-services/crf-translations/",
    linkLabel: "Explore CRF Translation Services",
  },
  {
    icon: "manual",
    title: "Study Manuals & Operational Documentation",
    text:
      "Study manuals turn protocol requirements into executable instructions for clinical teams. Translation needs to preserve procedural sequence, defined terms, warnings, measurements, equipment references, and study-specific instructions.",
    bullets: [
      "Laboratory and pharmacy manuals",
      "Site and imaging manuals",
      "Specimen handling instructions",
      "Sample collection and shipping instructions",
      "Investigational product handling guidance",
    ],
    footer:
      "Shared terminology resources can maintain alignment between study manuals and the protocols, IBs, CRFs, and other documents they support.",
  },
  {
    icon: "site",
    title: "Site & Investigator Documentation",
    text:
      "Global investigator sites need clear, current information throughout startup and execution. Central terminology and controlled versions help reduce unnecessary variation as studies expand across countries and sites.",
    bullets: [
      "Site startup materials",
      "Investigator-facing instructions",
      "Study reference materials",
      "Site operational forms",
      "Country- and site-specific updates",
    ],
    footer:
      "Sesen supports both individual site-document projects and recurring programs spanning multiple markets, languages, and update cycles.",
  },
  {
    icon: "monitor",
    title: "Monitoring & Oversight Content",
    text:
      "Monitoring documentation records how the study is being conducted, identifies issues, communicates actions, and maintains visibility across sites and activities.",
    bullets: [
      "Monitoring plans and visit documentation",
      "Monitoring reports",
      "Follow-up correspondence",
      "Issue and action records",
      "Oversight and study-tracking documentation",
    ],
    footer:
      "Translations preserve factual distinctions, responsibilities, dates, findings, actions, and references to the underlying study documentation.",
  },
  {
    icon: "report",
    title: "Clinical Study Reports",
    text:
      "The Clinical Study Report integrates study design, conduct, analysis, and results. It may combine extensive narrative content with tables, figures, statistical terminology, appendices, references, and supporting documentation.",
    bullets: [
      "Full Clinical Study Reports",
      "CSR synopses and summaries",
      "Tables, figures, and statistical content",
      "Appendices and supporting narratives",
      "CSR updates and revised versions",
    ],
    footer:
      "Approved study terminology and earlier translated documentation can help maintain continuity while complex formatting and references are protected.",
    link:
      "https://www.sesen.com/clinical-trial-translation-services/clinical-study-report-translation/",
    linkLabel: "Explore Clinical Study Report Translation Services",
  },
  {
    icon: "update",
    title: "Amendments, Version Updates & Closeout",
    text:
      "Clinical studies evolve. Protocol amendments, new safety information, operational changes, country additions, revised forms, and updated investigator information can all create downstream document changes.",
    bullets: [
      "Protocol and IB revisions",
      "Updated CRFs and study manuals",
      "New or changed site documentation",
      "Monitoring-document updates",
      "Final and closeout documentation",
    ],
    footer:
      "Sesen can identify changed content, reuse approved language where appropriate, update terminology resources, and focus review on the content affected by the revision.",
  },
];

const terminologyItems = [
  {
    title: "Study-Specific Terminology",
    text:
      "Approved study, product, therapeutic-area, and sponsor terminology can be captured in multilingual glossaries for consistent reuse.",
  },
  {
    title: "Translation Memory",
    text:
      "Previously translated and reviewed segments can be leveraged where the source and context remain applicable.",
  },
  {
    title: "Reference-Document Alignment",
    text:
      "Protocols, IBs, sponsor glossaries, previous translations, style guidance, and other approved materials can be managed as controlled references.",
  },
  {
    title: "Reviewer Feedback",
    text:
      "Approved sponsor, CRO, site, or in-country reviewer decisions can be incorporated into the linguistic resources used for subsequent updates.",
  },
  {
    title: "Cross-Document QA",
    text:
      "Recurring terminology and concepts can be checked across related study materials rather than evaluating every deliverable only in isolation.",
  },
];

const amendmentSteps = [
  [
    "Review the Updated Source",
    "Review the current document, previous version, translation history, reference materials, and target-language requirements.",
  ],
  [
    "Identify Changed Content",
    "Distinguish new and revised material from unchanged source content using version comparison and content analysis.",
  ],
  [
    "Assess Terminology & Document Impact",
    "Evaluate whether changed study concepts affect existing terminology or related translated documents.",
  ],
  [
    "Reuse Approved Language",
    "Leverage reviewed translations and translation memory where the source, meaning, and context remain applicable.",
  ],
  [
    "Translate & Review the Delta",
    "Focus linguistic effort on new and changed material while preserving continuity with the surrounding document.",
  ],
  [
    "Perform Version-Aware QA",
    "Check terminology, numbers, references, completeness, formatting, and alignment with the applicable source version.",
  ],
  [
    "Deliver Controlled Multilingual Updates",
    "Prepare final language versions that correspond clearly with the updated source documentation.",
  ],
];

const lifecycleStages = [
  {
    title: "Study Planning & Startup",
    text:
      "Build the multilingual documentation foundation before study execution begins.",
    items:
      "Protocols · Protocol synopses · Investigator Brochures · Initial study manuals · Site startup content · Investigator documentation",
  },
  {
    title: "Study Execution",
    text:
      "Support the documents teams use to conduct the study and collect information consistently.",
    items:
      "CRFs/eCRFs · Study manuals · Site instructions · Operational documentation · Investigator communications · Study updates",
  },
  {
    title: "Monitoring & Oversight",
    text:
      "Maintain accurate multilingual records and communications as study conduct is reviewed.",
    items:
      "Monitoring materials · Visit documentation · Follow-up communication · Issue and action records · Oversight content",
  },
  {
    title: "Amendments & Ongoing Updates",
    text:
      "Keep language versions synchronized as study requirements evolve.",
    items:
      "Protocol amendments · IB updates · Revised forms · Updated manuals · Site changes · Country additions",
  },
  {
    title: "Reporting & Closeout",
    text:
      "Support the documents that consolidate study results and bring study activities to completion.",
    items:
      "Clinical Study Reports · Supporting report content · Final documentation · Closeout materials · Study-record updates",
  },
];

const workflowSteps = [
  [
    "Document & Version Assessment",
    "Review source files, document type, intended use, languages, current version, previous translations, references, formatting, and delivery requirements.",
  ],
  [
    "Terminology & Reference Alignment",
    "Prepare or reuse study glossaries, sponsor terminology, product terminology, previous translations, style guidance, and translation memory.",
  ],
  [
    "Professional Clinical Translation",
    "Select qualified native-language linguists based on language pair, document type, therapeutic area, and project requirements.",
  ],
  [
    "Independent Linguistic Review",
    "Review for accuracy, terminology, consistency, completeness, clarity, and appropriate target-language usage.",
  ],
  [
    "Formatting & Technical Processing",
    "Protect tables, numbering, styles, headers, footers, cross-references, structured fields, figures, and multilingual layout.",
  ],
  [
    "AI-Assisted Quality Checks",
    "Use controlled technology to help surface potential terminology inconsistencies, number issues, omissions, repetitive-content anomalies, and formatting risks.",
  ],
  [
    "Final Human Quality Control",
    "Apply human review before release, with the quality depth matched to the document and engagement requirements.",
  ],
];

const integrityItems = [
  [
    "Tables & Schedules",
    "Preserve row and column relationships, headings, units, footnotes, and source-document structure.",
  ],
  [
    "Section Numbering & Cross-References",
    "Maintain connections between numbered sections, appendices, tables, figures, and internal references.",
  ],
  [
    "Structured Forms",
    "Protect relationships between labels, fields, response options, instructions, and data-collection structures.",
  ],
  [
    "Figures & Captions",
    "Translate applicable text while keeping a clear relationship to the supporting image, figure, or data.",
  ],
  [
    "Tracked Changes & Updated Versions",
    "Support revised clinical documents while preserving visibility into changed content when required.",
  ],
  [
    "Multilingual Formatting",
    "Prepare Word, PDF, Excel, PowerPoint, and other supported files so translated content remains readable and professionally structured.",
  ],
];

const qualityItems = [
  [
    "Qualified Life Sciences Linguists",
    "Professional native-language linguists are selected for relevant clinical, medical, scientific, or regulatory subject matter.",
    "people",
  ],
  [
    "Independent Human Review",
    "Review depth is matched to document purpose and risk, with human reviewers responsible for final linguistic judgment.",
    "check",
  ],
  [
    "Terminology Governance",
    "Study, sponsor, therapeutic-area, and product terminology can be managed across documents, versions, and languages.",
    "terminology",
  ],
  [
    "Translation Memory & Controlled Reuse",
    "Approved multilingual content can be reused where appropriate to improve consistency across recurring documents and updates.",
    "layers",
  ],
  [
    "Version Management",
    "Previous source and translated versions can be referenced when handling amendments and recurring study content.",
    "update",
  ],
  [
    "AI-Assisted QA",
    "Technology can help surface potential inconsistencies, number mismatches, omissions, and formatting anomalies for human review.",
    "ai",
  ],
  [
    "Documented Workflows",
    "Project records, linguistic resources, review decisions, and deliverables can be managed within structured workflows.",
    "document",
  ],
  [
    "Secure Content Handling",
    "Controlled systems and secure infrastructure support confidential life sciences documentation.",
    "shield",
  ],
];

const teamItems = [
  [
    "Clinical Operations",
    "Support study startup, site execution, operational documentation, monitoring content, amendments, and recurring study updates across countries.",
  ],
  [
    "Medical Writing",
    "Maintain terminology and scientific continuity across protocols, Investigator Brochures, Clinical Study Reports, summaries, amendments, and related content.",
  ],
  [
    "Clinical Data Management",
    "Support CRFs, eCRFs, structured data-collection content, instructions, and terminology connected to protocol-defined concepts.",
  ],
  [
    "Regulatory & Ethics Teams",
    "Coordinate multilingual clinical documentation used in country submissions, ethics review, study updates, and regulatory-facing workflows.",
  ],
  [
    "CRO & Global Study Teams",
    "Scale translation across sponsors, sites, countries, languages, reviewers, document types, and changing study versions.",
  ],
];

const relatedServices = [
  {
    title: "Informed Consent Form Translation",
    text:
      "Patient-facing consent translation with attention to clinical meaning, participant readability, study terminology, reviewer feedback, and version control.",
    href: "https://www.sesen.com/informed-consent-form-translation-services/",
  },
  {
    title: "IRB & Ethics Documentation",
    text:
      "Multilingual support for IRB, IEC, ethics committee, institutional, and country-specific review materials, correspondence, and updates.",
    href: "https://www.sesen.com/irb-translation-services/",
  },
  {
    title: "eCOA & Linguistic Validation",
    text:
      "Dedicated workflows for COAs, eCOAs, ePROs, questionnaires, scales, diaries, and digital instruments where conceptual equivalence and implementation requirements matter.",
    href: "https://www.sesen.com/ecoa-translation-services/",
    linkLabel: "Explore eCOA Translation Services",
    extraHref: "https://www.sesen.com/linguistic-validation-services/",
    extraLabel: "Explore Linguistic Validation Services",
  },
  {
    title: "Pharmacovigilance Translation",
    text:
      "Language support for adverse-event content, safety narratives, aggregate reports, risk communication, and broader drug-safety workflows.",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
  },
  {
    title: "Clinical Training & eLearning",
    text:
      "Localization for investigator and site training, study-specific eLearning, multimedia, narration, subtitles, and LMS-ready multilingual courses.",
    href: "https://www.sesen.com/elearning-training-translation-services/",
  },
  {
    title: "Clinical Trial Translation Services",
    text:
      "Broader multilingual support across patient-facing content, study operations, ethics and regulatory communication, safety, training, and digital trial workflows.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
  },
];

const faqItems = [
  {
    q: "What are clinical study document translation services?",
    a:
      "Clinical study document translation services convert the scientific, operational, data-collection, site, oversight, and reporting documents used in clinical research into the languages required by global study teams. Typical documents include clinical study protocols, Investigator Brochures, CRFs and eCRFs, study manuals, site documentation, monitoring content, Clinical Study Reports, amendments, and closeout documentation. Strong clinical study translation also involves terminology management, document formatting, version control, appropriate linguistic review, and alignment with related study content.",
  },
  {
    q: "What clinical study documents does Sesen translate?",
    a:
      "Sesen translates protocols and protocol amendments, Investigator Brochures, CRFs/eCRFs, laboratory and pharmacy manuals, site manuals, investigator documentation, operational instructions, monitoring and oversight content, Clinical Study Reports, and study closeout documentation. Sesen also provides dedicated services for related content such as informed consent forms, IRB and ethics materials, clinical outcome assessments, eCOA/ePRO content, pharmacovigilance documentation, and clinical training materials.",
  },
  {
    q: "How does Sesen keep terminology consistent across clinical study documents?",
    a:
      "Sesen can centralize study-specific terminology, sponsor-approved glossaries, product terminology, translation memory, reference materials, previously approved translations, style guidance, and reviewer feedback. These resources can be shared across related documents so recurring study concepts remain aligned as the translation program grows. Terminology QA and human review provide additional checks when the same concepts appear in multiple documents.",
  },
  {
    q: "How does Sesen handle protocol amendments and revised study documents?",
    a:
      "Sesen can compare an updated source document with the previous version, identify changed content, review whether important terminology has changed, reuse previously approved translations where appropriate, translate and review new material, and perform QA against the revised version. For larger programs, amendments can also be managed with awareness of related documents that may use the same study concepts.",
  },
  {
    q: "Do all clinical study documents require back translation?",
    a:
      "No. Back translation is an additional verification method rather than an automatic requirement for every clinical study document. Whether it is appropriate depends on the content type, intended use, sponsor or CRO requirements, institutional or ethics-review requirements, regulatory context, and the quality approach established for the study. Sesen can incorporate back translation, reconciliation, or other verification steps when they are required or add value to the specific project.",
  },
  {
    q: "Is linguistic validation required for clinical study documents?",
    a:
      "Not generally for every clinical study document. Formal linguistic validation is most closely associated with instruments such as Clinical Outcome Assessments, PROs, ePROs, and other measures where conceptual equivalence across languages may need to be demonstrated through a defined methodology. Protocols, Investigator Brochures, CRFs, study manuals, and Clinical Study Reports typically use translation and review workflows designed for their own intended use, content risk, and project requirements.",
  },
  {
    q: "Can Sesen translate CRFs and eCRFs?",
    a:
      "Yes. Sesen translates CRFs, eCRFs, field labels, instructions, response options, and related structured study content. CRF translation can be aligned with the study protocol, approved terminology, and supporting documentation to help preserve the meaning of data-collection fields across languages. Electronic implementations can also account for structured content, text constraints, repeated strings, and final language QA requirements.",
  },
  {
    q: "Can Sesen translate Clinical Study Reports?",
    a:
      "Yes. Sesen provides Clinical Study Report translation for scientific and regulatory use, including narrative content, tables, figures, statistical terminology, appendices, supporting documentation, and related report materials. Where appropriate, CSR translation can reference protocols, approved study terminology, previous translated documents, and other relevant materials to maintain continuity with the study documentation that preceded the report.",
  },
  {
    q: "Can Sesen support an ongoing multilingual study instead of individual documents?",
    a:
      "Yes. Sesen can support recurring clinical translation programs as studies add countries, sites, languages, documents, and amendments. Centralized terminology, translation memory, reference materials, linguistic teams, approved translations, reviewer feedback, and version-control practices help maintain continuity across ongoing study work.",
  },
  {
    q: "Does Sesen use AI for clinical study document translation?",
    a:
      "Yes, where appropriate within a controlled, human-led workflow. AI and language technology can assist with terminology, repetitive-content reuse, translation drafting for suitable content, consistency analysis, number and completeness checks, and other quality-control tasks. The appropriate level of AI assistance depends on the document, intended use, content risk, sponsor requirements, and quality expectations. Qualified life sciences professionals remain responsible for clinical meaning, contextual judgment, and final quality.",
  },
  {
    q: "How many languages does Sesen support?",
    a:
      "Sesen supports clinical study document translation across 150+ languages, including country- and region-specific variants for multinational research programs. Language planning can account for study countries, participating sites, intended users, locale requirements, sponsor terminology, previous translations, and the operational requirements of the clinical program.",
  },
];

function HeroArtwork() {
  return (
    <div className="csd-hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 520" role="img">
        <defs>
          <linearGradient id="csdSoft" x1="0" x2="1">
            <stop offset="0%" stopColor="#F5F7FF" />
            <stop offset="100%" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>

        <rect x="38" y="38" width="484" height="444" rx="44" fill="url(#csdSoft)" />
        <path
          d="M280 136v55M280 329v55M204 260h-50M406 260h-50"
          stroke="#6F8BE1"
          strokeWidth="2.4"
          strokeDasharray="7 9"
        />
        <path
          d="M235 209 187 170M325 209l48-39M235 311l-48 39M325 311l48 39"
          stroke="#9BADE8"
          strokeWidth="2"
          strokeDasharray="6 9"
        />

        <g transform="translate(208 190)">
          <rect width="144" height="140" rx="24" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="2.5" />
          <rect x="24" y="24" width="42" height="50" rx="7" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2" />
          <path d="M34 38h22M34 49h22M34 60h14" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <text x="24" y="101" fontFamily="Inter, sans-serif" fontSize="13" fontWeight="700" fill="#17264D">
            STUDY PROTOCOL
          </text>
          <text x="24" y="120" fontFamily="Inter, sans-serif" fontSize="11" fill="#68758B">
            Shared terminology
          </text>
        </g>

        {[
          [83, 109, "IB", "brochure"],
          [362, 102, "CRF / eCRF", "form"],
          [68, 352, "MANUALS", "manual"],
          [355, 356, "CSR", "report"],
          [53, 223, "SITES", "site"],
          [406, 222, "OVERSIGHT", "monitor"],
        ].map(([x, y, label], idx) => (
          <g key={label} transform={`translate(${x} ${y})`}>
            <rect width={idx === 1 ? 132 : 116} height="74" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
            <circle cx="29" cy="29" r="14" fill="#EAF0FF" />
            <path d="M22 28h14M22 34h10M24 21h10" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round" />
            <text x="18" y="58" fontFamily="Inter, sans-serif" fontSize="10.5" fontWeight="700" fill="#17264D">
              {label}
            </text>
          </g>
        ))}

        <g transform="translate(176 405)">
          <rect width="208" height="48" rx="24" fill="#17264D" />
          <path d="M31 24h20M44 17l7 7-7 7" stroke="#C8D6FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="66" y="28" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700" fill="#FFFFFF">
            AMENDMENTS & UPDATES
          </text>
        </g>
      </svg>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, className = "" }) {
  return (
    <div className={`csd-section-heading ${className}`}>
      {eyebrow ? <div className="csd-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function ClinicalStudyDocumentTranslationPage() {
  return (
    <main className={PAGE_ROOT}>
      <style>{`
        .${PAGE_ROOT} {
          --csd-blue: #4B6FD8;
          --csd-blue-dark: #3659BB;
          --csd-deep-blue: #253F8F;
          --csd-mid-blue: #6F8BE1;
          --csd-soft-blue: #EAF0FF;
          --csd-pale-blue: #F5F7FF;
          --csd-navy: #17264D;
          --csd-ink: #111827;
          --csd-body: #46546D;
          --csd-muted: #68758B;
          --csd-border: #DDE4F2;
          --csd-divider: #E9EEF8;
          --csd-section: #F7F9FD;
          --csd-white: #FFFFFF;
          --csd-light-on-dark: #C8D6FF;
          color: var(--csd-body);
          background: var(--csd-white);
          font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }

        .${PAGE_ROOT},
        .${PAGE_ROOT} * {
          box-sizing: border-box;
        }

        .${PAGE_ROOT} a {
          color: var(--csd-blue-dark);
          text-decoration: none;
        }

        .${PAGE_ROOT} a:focus-visible,
        .${PAGE_ROOT} button:focus-visible,
        .${PAGE_ROOT} summary:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.35);
          outline-offset: 4px;
          border-radius: 6px;
        }

        .${PAGE_ROOT} .csd-shell {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .${PAGE_ROOT} .csd-section {
          padding: 96px 0;
        }

        .${PAGE_ROOT} .csd-section--dense {
          padding: 80px 0;
        }

        .${PAGE_ROOT} .csd-section--soft {
          background: var(--csd-section);
        }

        .${PAGE_ROOT} .csd-section--pale {
          background: var(--csd-pale-blue);
        }

        .${PAGE_ROOT} .csd-eyebrow {
          margin-bottom: 16px;
          color: var(--csd-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} h1,
        .${PAGE_ROOT} h2,
        .${PAGE_ROOT} h3 {
          margin: 0;
          color: var(--csd-navy);
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-weight: 500;
        }

        .${PAGE_ROOT} h1 {
          max-width: 690px;
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
          font-size: 24px;
          line-height: 1.3;
        }

        .${PAGE_ROOT} p {
          margin: 0;
          font-size: 16px;
        }

        .${PAGE_ROOT} .csd-lead {
          color: #293954;
          font-size: 19px;
          line-height: 1.62;
        }

        .${PAGE_ROOT} .csd-section-heading {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .${PAGE_ROOT} .csd-section-heading > p {
          max-width: 780px;
          margin-top: 18px;
          color: var(--csd-body);
          font-size: 18px;
          line-height: 1.65;
        }

        .${PAGE_ROOT} .csd-section-heading--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .${PAGE_ROOT} .csd-section-heading--center > p {
          margin-left: auto;
          margin-right: auto;
        }

        .${PAGE_ROOT} .csd-btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.035em;
          line-height: 1;
          text-transform: uppercase;
          transition: background 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .${PAGE_ROOT} .csd-btn:hover {
          transform: translateY(-1px);
        }

        .${PAGE_ROOT} .csd-btn--primary,
        .${PAGE_ROOT} .csd-btn--primary:visited {
          color: #FFFFFF;
          background: var(--csd-blue);
        }

        .${PAGE_ROOT} .csd-btn--primary:hover {
          color: #FFFFFF;
          background: var(--csd-blue-dark);
        }

        .${PAGE_ROOT} .csd-btn--secondary,
        .${PAGE_ROOT} .csd-btn--secondary:visited {
          color: var(--csd-ink);
          background: #FFFFFF;
          border-color: #CBD5E7;
        }

        .${PAGE_ROOT} .csd-btn--secondary:hover {
          color: var(--csd-ink);
          background: var(--csd-soft-blue);
          border-color: #B8C5E2;
        }

        .${PAGE_ROOT} .csd-inline-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 18px;
          color: var(--csd-blue-dark);
          font-size: 15px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .csd-inline-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .${PAGE_ROOT} .csd-inline-link svg {
          transition: transform 160ms ease;
        }

        .${PAGE_ROOT} .csd-inline-link:hover svg {
          transform: translateX(3px);
        }

        /* Hero */
        .${PAGE_ROOT} .csd-hero {
          padding: 92px 0 88px;
          background:
            radial-gradient(circle at 82% 30%, rgba(234, 240, 255, 0.9), rgba(255,255,255,0) 32%),
            #FFFFFF;
        }

        .${PAGE_ROOT} .csd-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(420px, 0.94fr);
          gap: 70px;
          align-items: center;
        }

        .${PAGE_ROOT} .csd-hero-copy {
          max-width: 720px;
        }

        .${PAGE_ROOT} .csd-hero-copy .csd-lead {
          max-width: 680px;
          margin-top: 24px;
        }

        .${PAGE_ROOT} .csd-hero-copy .csd-support {
          max-width: 680px;
          margin-top: 16px;
          color: var(--csd-body);
          font-size: 17px;
        }

        .${PAGE_ROOT} .csd-hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .${PAGE_ROOT} .csd-hero-art {
          width: 100%;
          max-width: 535px;
          justify-self: end;
        }

        .${PAGE_ROOT} .csd-hero-art svg {
          display: block;
          width: 100%;
          height: auto;
        }

        /* Trust band */
        .${PAGE_ROOT} .csd-trust {
          border-top: 1px solid var(--csd-divider);
          border-bottom: 1px solid var(--csd-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding: 26px 0;
        }

        .${PAGE_ROOT} .csd-trust-item {
          min-width: 0;
          padding: 6px 26px;
        }

        .${PAGE_ROOT} .csd-trust-item:first-child {
          padding-left: 0;
        }

        .${PAGE_ROOT} .csd-trust-item + .csd-trust-item {
          border-left: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-trust-title {
          color: var(--csd-navy);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .${PAGE_ROOT} .csd-trust-text {
          margin-top: 3px;
          color: var(--csd-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        /* Connected system */
        .${PAGE_ROOT} .csd-system-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(520px, 1.08fr);
          gap: 76px;
          align-items: center;
        }

        .${PAGE_ROOT} .csd-system-copy {
          max-width: 650px;
        }

        .${PAGE_ROOT} .csd-system-copy p + p {
          margin-top: 16px;
        }

        .${PAGE_ROOT} .csd-system-copy .csd-callout {
          margin-top: 28px;
          padding-left: 18px;
          border-left: 2px solid var(--csd-blue);
          color: var(--csd-navy);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.55;
        }

        .${PAGE_ROOT} .csd-system-map {
          padding: 32px;
          border: 1px solid var(--csd-border);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-system-map-label {
          margin-bottom: 24px;
          color: var(--csd-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .${PAGE_ROOT} .csd-system-chain {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 10px;
        }

        .${PAGE_ROOT} .csd-system-node {
          position: relative;
          min-height: 108px;
          padding: 16px 14px;
          border: 1px solid var(--csd-border);
          border-radius: 18px;
          background: var(--csd-section);
        }

        .${PAGE_ROOT} .csd-system-node strong {
          display: block;
          color: var(--csd-navy);
          font-size: 14px;
          line-height: 1.3;
        }

        .${PAGE_ROOT} .csd-system-node span {
          display: block;
          margin-top: 7px;
          color: var(--csd-muted);
          font-size: 13px;
          line-height: 1.4;
        }

        .${PAGE_ROOT} .csd-system-node:not(:last-child)::after {
          position: absolute;
          top: 50%;
          right: -11px;
          width: 12px;
          height: 1px;
          background: var(--csd-mid-blue);
          content: "";
        }

        .${PAGE_ROOT} .csd-system-update {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 18px;
          padding: 14px 16px;
          border-radius: 16px;
          color: var(--csd-navy);
          background: var(--csd-soft-blue);
          font-size: 14px;
          font-weight: 600;
        }

        /* Ecosystem directory */
        .${PAGE_ROOT} .csd-directory {
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-doc-row {
          display: grid;
          grid-template-columns: 72px minmax(230px, 0.7fr) minmax(0, 1.3fr);
          gap: 28px;
          padding: 38px 0;
          border-bottom: 1px solid var(--csd-divider);
          align-items: start;
        }

        .${PAGE_ROOT} .csd-doc-icon {
          display: grid;
          width: 52px;
          height: 52px;
          place-items: center;
          border-radius: 14px;
          color: var(--csd-blue-dark);
          background: var(--csd-soft-blue);
        }

        .${PAGE_ROOT} .csd-doc-title h3 {
          font-size: 23px;
        }

        .${PAGE_ROOT} .csd-doc-copy > p {
          max-width: 760px;
        }

        .${PAGE_ROOT} .csd-doc-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 7px 20px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .${PAGE_ROOT} .csd-doc-list li {
          position: relative;
          padding-left: 16px;
          color: var(--csd-body);
          font-size: 16px;
        }

        .${PAGE_ROOT} .csd-doc-list li::before {
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--csd-blue);
          content: "";
        }

        .${PAGE_ROOT} .csd-doc-footer {
          margin-top: 16px;
          color: var(--csd-muted);
        }

        /* Terminology */
        .${PAGE_ROOT} .csd-terminology-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.22fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .csd-terminology-intro {
          position: sticky;
          top: 32px;
        }

        .${PAGE_ROOT} .csd-terminology-intro p {
          margin-top: 20px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-terminology-flow {
          margin-top: 32px;
          padding: 24px;
          border: 1px solid var(--csd-border);
          border-radius: 22px;
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-flow-protocol {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 999px;
          color: #FFFFFF;
          background: var(--csd-navy);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .${PAGE_ROOT} .csd-flow-arrow {
          margin: 10px 0 10px 18px;
          color: var(--csd-mid-blue);
          font-size: 22px;
          line-height: 1;
        }

        .${PAGE_ROOT} .csd-flow-downstream {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .${PAGE_ROOT} .csd-flow-chip {
          padding: 8px 11px;
          border: 1px solid var(--csd-border);
          border-radius: 999px;
          color: var(--csd-navy);
          background: var(--csd-section);
          font-size: 12px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .csd-terminology-list {
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-terminology-item {
          display: grid;
          grid-template-columns: 170px minmax(0, 1fr);
          gap: 24px;
          padding: 26px 0;
          border-bottom: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-terminology-item h3 {
          font-size: 19px;
        }

        /* Amendment workflow */
        .${PAGE_ROOT} .csd-amendment-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(560px, 1.22fr);
          gap: 72px;
          align-items: start;
        }

        .${PAGE_ROOT} .csd-amendment-intro p {
          margin-top: 20px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-amendment-diagram {
          margin-top: 30px;
          padding: 24px;
          border: 1px solid #CAD5F1;
          border-radius: 22px;
          background: rgba(255,255,255,0.72);
        }

        .${PAGE_ROOT} .csd-diagram-source,
        .${PAGE_ROOT} .csd-diagram-result {
          padding: 12px 14px;
          border-radius: 14px;
          color: var(--csd-navy);
          background: #FFFFFF;
          font-size: 13px;
          font-weight: 700;
          text-align: center;
        }

        .${PAGE_ROOT} .csd-diagram-change {
          margin: 10px auto;
          color: var(--csd-blue-dark);
          font-size: 12px;
          font-weight: 700;
          text-align: center;
        }

        .${PAGE_ROOT} .csd-diagram-branches {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-bottom: 10px;
        }

        .${PAGE_ROOT} .csd-diagram-branches span {
          padding: 9px 8px;
          border: 1px solid var(--csd-border);
          border-radius: 12px;
          color: var(--csd-body);
          background: #FFFFFF;
          font-size: 11px;
          font-weight: 600;
          text-align: center;
        }

        .${PAGE_ROOT} .csd-step-list {
          counter-reset: amend;
        }

        .${PAGE_ROOT} .csd-step {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 22px 0;
          border-bottom: 1px solid #D6DEF1;
          counter-increment: amend;
        }

        .${PAGE_ROOT} .csd-step:first-child {
          padding-top: 0;
        }

        .${PAGE_ROOT} .csd-step:last-child {
          border-bottom: 0;
        }

        .${PAGE_ROOT} .csd-step-num {
          display: grid;
          width: 38px;
          height: 38px;
          place-items: center;
          border-radius: 50%;
          color: #FFFFFF;
          background: var(--csd-blue);
          font-size: 12px;
          font-weight: 700;
        }

        .${PAGE_ROOT} .csd-step h3 {
          font-size: 19px;
        }

        .${PAGE_ROOT} .csd-step p {
          margin-top: 7px;
          color: var(--csd-body);
        }

        /* Lifecycle */
        .${PAGE_ROOT} .csd-lifecycle {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 0;
          margin-top: 12px;
        }

        .${PAGE_ROOT} .csd-lifecycle::before {
          position: absolute;
          top: 20px;
          right: 10%;
          left: 10%;
          height: 2px;
          background: #CAD5F1;
          content: "";
        }

        .${PAGE_ROOT} .csd-life-stage {
          position: relative;
          padding: 0 18px;
        }

        .${PAGE_ROOT} .csd-life-dot {
          position: relative;
          z-index: 1;
          width: 40px;
          height: 40px;
          margin-bottom: 20px;
          border: 10px solid var(--csd-soft-blue);
          border-radius: 50%;
          background: var(--csd-blue);
        }

        .${PAGE_ROOT} .csd-life-stage h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .csd-life-stage p {
          margin-top: 10px;
        }

        .${PAGE_ROOT} .csd-life-stage .csd-life-items {
          margin-top: 13px;
          color: var(--csd-muted);
          font-size: 16px;
          line-height: 1.55;
        }

        /* Right workflow */
        .${PAGE_ROOT} .csd-workflow-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 70px;
          align-items: start;
          margin-bottom: 54px;
        }

        .${PAGE_ROOT} .csd-workflow-intro p {
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-workflow-qualifiers {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .${PAGE_ROOT} .csd-workflow-qualifiers span {
          padding: 9px 12px;
          border: 1px solid var(--csd-border);
          border-radius: 999px;
          color: var(--csd-navy);
          background: #FFFFFF;
          font-size: 13px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .csd-workflow-list {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
        }

        .${PAGE_ROOT} .csd-workflow-card {
          min-height: 235px;
          padding: 24px 20px;
          border-top: 2px solid var(--csd-blue);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-workflow-number {
          color: var(--csd-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .${PAGE_ROOT} .csd-workflow-card h3 {
          margin-top: 18px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-workflow-card p {
          margin-top: 12px;
          color: var(--csd-muted);
          font-size: 16px;
          line-height: 1.58;
        }

        .${PAGE_ROOT} .csd-verification {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 18px;
          margin-top: 28px;
          padding: 24px;
          border: 1px solid var(--csd-border);
          border-radius: 20px;
          background: var(--csd-soft-blue);
        }

        .${PAGE_ROOT} .csd-verification-icon {
          display: grid;
          width: 44px;
          height: 44px;
          place-items: center;
          border-radius: 14px;
          color: var(--csd-blue-dark);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-verification h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .csd-verification p {
          margin-top: 7px;
        }

        /* Integrity */
        .${PAGE_ROOT} .csd-integrity-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(500px, 1.14fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE_ROOT} .csd-integrity-copy p {
          margin-top: 20px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-integrity-example {
          margin-top: 30px;
          padding: 24px;
          border-radius: 22px;
          background: var(--csd-navy);
        }

        .${PAGE_ROOT} .csd-integrity-example strong {
          color: #FFFFFF;
          font-size: 15px;
        }

        .${PAGE_ROOT} .csd-integrity-example p {
          margin-top: 9px;
          color: #D7E0F7;
          font-size: 16px;
        }

        .${PAGE_ROOT} .csd-integrity-list {
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-integrity-item {
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr);
          gap: 24px;
          padding: 23px 0;
          border-bottom: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-integrity-item h3 {
          font-size: 18px;
        }

        /* Quality */
        .${PAGE_ROOT} .csd-quality-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--csd-divider);
          border-left: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-quality-item {
          min-height: 235px;
          padding: 28px;
          border-right: 1px solid var(--csd-divider);
          border-bottom: 1px solid var(--csd-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-quality-icon {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          border-radius: 12px;
          color: var(--csd-blue-dark);
          background: var(--csd-soft-blue);
        }

        .${PAGE_ROOT} .csd-quality-item h3 {
          margin-top: 20px;
          font-size: 19px;
        }

        .${PAGE_ROOT} .csd-quality-item p {
          margin-top: 10px;
          color: var(--csd-muted);
          font-size: 16px;
        }

        /* Teams */
        .${PAGE_ROOT} .csd-teams-layout {
          display: grid;
          grid-template-columns: minmax(320px, 0.76fr) minmax(0, 1.24fr);
          gap: 80px;
          align-items: start;
        }

        .${PAGE_ROOT} .csd-teams-intro p {
          margin-top: 20px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-team-list {
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-team-item {
          display: grid;
          grid-template-columns: 210px minmax(0, 1fr);
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-team-item h3 {
          font-size: 19px;
        }

        /* Global */
        .${PAGE_ROOT} .csd-global-band {
          overflow: hidden;
          padding: 58px;
          border-radius: 30px;
          color: #FFFFFF;
          background:
            radial-gradient(circle at 86% 24%, rgba(111, 139, 225, 0.45), transparent 30%),
            var(--csd-navy);
        }

        .${PAGE_ROOT} .csd-global-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 72px;
          align-items: center;
        }

        .${PAGE_ROOT} .csd-global-band .csd-eyebrow {
          color: var(--csd-light-on-dark);
        }

        .${PAGE_ROOT} .csd-global-band h2 {
          color: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-global-band p {
          margin-top: 18px;
          color: #D7E0F7;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-global-points {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .${PAGE_ROOT} .csd-global-point {
          display: flex;
          min-height: 62px;
          align-items: center;
          gap: 12px;
          padding: 14px;
          border: 1px solid rgba(200, 214, 255, 0.18);
          border-radius: 16px;
          color: #FFFFFF;
          background: rgba(255,255,255,0.055);
          font-size: 14px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .csd-global-point svg {
          flex: 0 0 auto;
          color: var(--csd-light-on-dark);
        }

        /* Related */
        .${PAGE_ROOT} .csd-related-list {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--csd-divider);
          border-left: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-related-item {
          min-height: 250px;
          padding: 30px;
          border-right: 1px solid var(--csd-divider);
          border-bottom: 1px solid var(--csd-divider);
          background: #FFFFFF;
        }

        .${PAGE_ROOT} .csd-related-item h3 {
          font-size: 21px;
        }

        .${PAGE_ROOT} .csd-related-item p {
          margin-top: 12px;
          color: var(--csd-body);
        }

        .${PAGE_ROOT} .csd-related-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-top: 2px;
        }

        /* Why */
        .${PAGE_ROOT} .csd-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px 34px;
        }

        .${PAGE_ROOT} .csd-why-item {
          padding: 24px 0;
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-why-item h3 {
          font-size: 20px;
        }

        .${PAGE_ROOT} .csd-why-item p {
          margin-top: 10px;
        }

        /* FAQ */
        .${PAGE_ROOT} .csd-faq-wrap {
          display: grid;
          grid-template-columns: minmax(280px, 0.68fr) minmax(0, 1.32fr);
          gap: 80px;
          align-items: start;
        }

        .${PAGE_ROOT} .csd-faq-intro p {
          margin-top: 18px;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-faq-list {
          border-top: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} details.csd-faq-item {
          border-bottom: 1px solid var(--csd-divider);
        }

        .${PAGE_ROOT} .csd-faq-item summary {
          position: relative;
          padding: 23px 48px 23px 0;
          color: var(--csd-navy);
          cursor: pointer;
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.4;
          list-style: none;
        }

        .${PAGE_ROOT} .csd-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .${PAGE_ROOT} .csd-faq-item summary::before,
        .${PAGE_ROOT} .csd-faq-item summary::after {
          position: absolute;
          top: 50%;
          right: 8px;
          width: 16px;
          height: 1.5px;
          background: var(--csd-blue-dark);
          content: "";
          transition: transform 160ms ease;
        }

        .${PAGE_ROOT} .csd-faq-item summary::after {
          transform: rotate(90deg);
        }

        .${PAGE_ROOT} .csd-faq-item[open] summary::after {
          transform: rotate(0deg);
        }

        .${PAGE_ROOT} .csd-faq-answer {
          max-width: 840px;
          padding: 0 48px 24px 0;
          color: var(--csd-body);
          font-size: 16px;
        }

        /* Final CTA */
        .${PAGE_ROOT} .csd-final {
          padding: 88px 0 96px;
        }

        .${PAGE_ROOT} .csd-final-panel {
          padding: 62px;
          border-radius: 30px;
          text-align: center;
          background: var(--csd-soft-blue);
        }

        .${PAGE_ROOT} .csd-final-panel h2 {
          max-width: 780px;
          margin: 0 auto;
        }

        .${PAGE_ROOT} .csd-final-panel > p {
          max-width: 820px;
          margin: 18px auto 0;
          font-size: 18px;
        }

        .${PAGE_ROOT} .csd-final-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .${PAGE_ROOT} .csd-final-proof {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 28px;
          color: var(--csd-muted);
          font-size: 13px;
          font-weight: 600;
        }

        .${PAGE_ROOT} .csd-final-proof span {
          position: relative;
        }

        .${PAGE_ROOT} .csd-final-proof span + span::before {
          position: absolute;
          top: 0.2em;
          left: -12px;
          width: 1px;
          height: 1.2em;
          background: #C8D2E6;
          content: "";
        }

        @media (max-width: 1180px) {
          .${PAGE_ROOT} .csd-shell {
            width: min(1280px, calc(100% - 80px));
          }

          .${PAGE_ROOT} .csd-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(380px, 0.82fr);
            gap: 44px;
          }

          .${PAGE_ROOT} .csd-system-grid,
          .${PAGE_ROOT} .csd-terminology-layout,
          .${PAGE_ROOT} .csd-amendment-grid,
          .${PAGE_ROOT} .csd-integrity-layout,
          .${PAGE_ROOT} .csd-teams-layout,
          .${PAGE_ROOT} .csd-faq-wrap {
            gap: 48px;
          }

          .${PAGE_ROOT} .csd-workflow-list {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .csd-workflow-card {
            min-height: 220px;
          }
        }

        @media (max-width: 1020px) {
          .${PAGE_ROOT} .csd-system-grid,
          .${PAGE_ROOT} .csd-amendment-grid,
          .${PAGE_ROOT} .csd-integrity-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 900px) {
          .${PAGE_ROOT} .csd-shell {
            width: calc(100% - 58px);
          }

          .${PAGE_ROOT} .csd-section {
            padding: 78px 0;
          }

          .${PAGE_ROOT} .csd-section--dense {
            padding: 72px 0;
          }

          .${PAGE_ROOT} .csd-hero {
            padding: 76px 0 72px;
          }

          .${PAGE_ROOT} .csd-hero-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-hero-copy > .csd-eyebrow,
          .${PAGE_ROOT} .csd-hero-copy > h1 {
            text-align: center;
          }

          .${PAGE_ROOT} .csd-hero-copy > h1 {
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE_ROOT} .csd-hero-actions {
            justify-content: center;
          }

          .${PAGE_ROOT} .csd-hero-art {
            width: min(100%, 560px);
            justify-self: center;
          }

          .${PAGE_ROOT} .csd-hero-copy .csd-lead,
          .${PAGE_ROOT} .csd-hero-copy .csd-support {
            max-width: 720px;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE_ROOT} .csd-trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .${PAGE_ROOT} .csd-trust-item:nth-child(3) {
            border-left: 0;
          }

          .${PAGE_ROOT} .csd-trust-item:nth-child(n + 3) {
            margin-top: 18px;
            padding-top: 18px;
            border-top: 1px solid var(--csd-divider);
          }

          .${PAGE_ROOT} .csd-system-grid,
          .${PAGE_ROOT} .csd-terminology-layout,
          .${PAGE_ROOT} .csd-amendment-grid,
          .${PAGE_ROOT} .csd-integrity-layout,
          .${PAGE_ROOT} .csd-teams-layout,
          .${PAGE_ROOT} .csd-global-grid,
          .${PAGE_ROOT} .csd-faq-wrap,
          .${PAGE_ROOT} .csd-workflow-intro {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-terminology-intro {
            position: static;
          }

          .${PAGE_ROOT} .csd-doc-row {
            grid-template-columns: 58px 220px minmax(0, 1fr);
            gap: 18px;
          }

          .${PAGE_ROOT} .csd-doc-row,
          .${PAGE_ROOT} .csd-related-item,
          .${PAGE_ROOT} .csd-quality-item,
          .${PAGE_ROOT} .csd-workflow-card,
          .${PAGE_ROOT} .csd-global-point,
          .${PAGE_ROOT} .csd-faq-item {
            min-width: 0;
          }

          .${PAGE_ROOT} .csd-inline-link,
          .${PAGE_ROOT} .csd-flow-chip,
          .${PAGE_ROOT} .csd-diagram-branches span {
            overflow-wrap: anywhere;
          }

          .${PAGE_ROOT} .csd-lifecycle {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .${PAGE_ROOT} .csd-lifecycle::before {
            top: 20px;
            right: auto;
            bottom: 20px;
            left: 19px;
            width: 2px;
            height: auto;
          }

          .${PAGE_ROOT} .csd-life-stage {
            min-height: 150px;
            padding: 0 0 34px 70px;
          }

          .${PAGE_ROOT} .csd-life-dot {
            position: absolute;
            top: 0;
            left: 0;
          }

          .${PAGE_ROOT} .csd-workflow-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .csd-quality-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .csd-related-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .csd-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .${PAGE_ROOT} .csd-shell {
            width: calc(100% - 40px);
          }

          .${PAGE_ROOT} .csd-section {
            padding: 68px 0;
          }

          .${PAGE_ROOT} .csd-section--dense {
            padding: 64px 0;
          }

          .${PAGE_ROOT} .csd-hero {
            padding: 68px 0 64px;
          }

          .${PAGE_ROOT} h1 {
            font-size: 42px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 32px;
          }

          .${PAGE_ROOT} h3 {
            font-size: 21px;
          }

          .${PAGE_ROOT} .csd-lead,
          .${PAGE_ROOT} .csd-section-heading > p,
          .${PAGE_ROOT} .csd-terminology-intro p,
          .${PAGE_ROOT} .csd-amendment-intro p,
          .${PAGE_ROOT} .csd-workflow-intro p,
          .${PAGE_ROOT} .csd-integrity-copy p,
          .${PAGE_ROOT} .csd-teams-intro p,
          .${PAGE_ROOT} .csd-global-band p,
          .${PAGE_ROOT} .csd-faq-intro p,
          .${PAGE_ROOT} .csd-final-panel > p {
            font-size: 17px;
          }

          .${PAGE_ROOT} .csd-section-heading {
            margin-bottom: 38px;
          }

          .${PAGE_ROOT} .csd-section-heading.csd-mobile-center {
            text-align: center;
          }

          .${PAGE_ROOT} .csd-section-heading.csd-mobile-center > p {
            margin-left: 0;
            margin-right: 0;
            text-align: left;
          }

          .${PAGE_ROOT} .csd-mobile-heading-center > .csd-eyebrow,
          .${PAGE_ROOT} .csd-mobile-heading-center > h2 {
            text-align: center;
          }

          .${PAGE_ROOT} .csd-hero-copy > .csd-eyebrow,
          .${PAGE_ROOT} .csd-hero-copy > h1 {
            text-align: center;
          }

          .${PAGE_ROOT} .csd-hero-actions,
          .${PAGE_ROOT} .csd-final-actions {
            flex-direction: column;
          }

          .${PAGE_ROOT} .csd-btn {
            width: 100%;
          }

          .${PAGE_ROOT} .csd-hero-art {
            width: 100%;
          }

          .${PAGE_ROOT} .csd-trust-grid {
            grid-template-columns: 1fr;
            padding: 20px 0;
          }

          .${PAGE_ROOT} .csd-trust-item,
          .${PAGE_ROOT} .csd-trust-item:first-child {
            padding: 14px 0;
            border-left: 0;
          }

          .${PAGE_ROOT} .csd-trust-item:nth-child(n + 2),
          .${PAGE_ROOT} .csd-trust-item:nth-child(n + 3) {
            margin-top: 0;
            padding-top: 14px;
            border-top: 1px solid var(--csd-divider);
          }

          .${PAGE_ROOT} .csd-system-map {
            padding: 22px;
          }

          .${PAGE_ROOT} .csd-system-chain {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE_ROOT} .csd-system-node:nth-child(2)::after,
          .${PAGE_ROOT} .csd-system-node:nth-child(4)::after {
            display: none;
          }

          .${PAGE_ROOT} .csd-doc-row {
            grid-template-columns: 52px minmax(0, 1fr);
            gap: 15px;
            padding: 30px 0;
          }

          .${PAGE_ROOT} .csd-doc-icon {
            width: 44px;
            height: 44px;
          }

          .${PAGE_ROOT} .csd-doc-copy {
            grid-column: 1 / -1;
          }

          .${PAGE_ROOT} .csd-doc-list {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-terminology-item,
          .${PAGE_ROOT} .csd-integrity-item,
          .${PAGE_ROOT} .csd-team-item {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .${PAGE_ROOT} .csd-amendment-grid,
          .${PAGE_ROOT} .csd-terminology-layout,
          .${PAGE_ROOT} .csd-integrity-layout,
          .${PAGE_ROOT} .csd-teams-layout,
          .${PAGE_ROOT} .csd-global-grid,
          .${PAGE_ROOT} .csd-faq-wrap {
            gap: 38px;
          }

          .${PAGE_ROOT} .csd-diagram-branches {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-workflow-list,
          .${PAGE_ROOT} .csd-quality-grid,
          .${PAGE_ROOT} .csd-related-list,
          .${PAGE_ROOT} .csd-why-grid,
          .${PAGE_ROOT} .csd-global-points {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-workflow-card {
            min-height: 0;
          }

          .${PAGE_ROOT} .csd-quality-grid,
          .${PAGE_ROOT} .csd-related-list {
            border-left: 0;
          }

          .${PAGE_ROOT} .csd-quality-item,
          .${PAGE_ROOT} .csd-related-item {
            min-height: 0;
            border-left: 1px solid var(--csd-divider);
          }

          .${PAGE_ROOT} .csd-global-band {
            padding: 34px 24px;
            border-radius: 24px;
          }

          .${PAGE_ROOT} .csd-final-panel {
            padding: 42px 22px;
            border-radius: 24px;
          }

          .${PAGE_ROOT} .csd-final-proof {
            flex-direction: column;
            gap: 5px;
          }

          .${PAGE_ROOT} .csd-final-proof span + span::before {
            display: none;
          }

          .${PAGE_ROOT} .csd-faq-item summary {
            padding-right: 42px;
            font-size: 18px;
          }

          .${PAGE_ROOT} .csd-faq-answer {
            padding-right: 0;
          }
        }

        @media (max-width: 360px) {
          .${PAGE_ROOT} h1 {
            font-size: 38px;
          }

          .${PAGE_ROOT} h2 {
            font-size: 30px;
          }

          .${PAGE_ROOT} .csd-system-chain {
            grid-template-columns: 1fr;
          }

          .${PAGE_ROOT} .csd-system-node::after {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE_ROOT} .csd-btn,
          .${PAGE_ROOT} .csd-inline-link svg,
          .${PAGE_ROOT} .csd-faq-item summary::after {
            transition: none;
          }
        }
      `}</style>

      <section className="csd-hero">
        <div className="csd-shell csd-hero-grid">
          <div className="csd-hero-copy">
            <div className="csd-eyebrow">Global Clinical Research</div>
            <h1>Clinical Study Document Translation Services</h1>
            <p className="csd-lead">
              Translate the documents that define study design, guide execution,
              capture study data, and report results with a multilingual workflow
              built for consistency across documents, languages, and versions.
            </p>
            <p className="csd-support">
              Sesen helps pharmaceutical, biotechnology, medical device, and CRO
              teams translate and manage protocols, Investigator Brochures, CRFs
              and eCRFs, study manuals, site documentation, monitoring content,
              Clinical Study Reports, amendments, and related clinical
              documentation across 150+ languages.
            </p>
            <div className="csd-hero-actions">
              <a
                className="csd-btn csd-btn--primary"
                href="https://www.sesen.com/contact-sales/"
              >
                TALK WITH TEAM SESEN
              </a>
              <a
                className="csd-btn csd-btn--secondary"
                href="https://www.sesen.com/get-a-quote/"
              >
                REQUEST A QUOTE
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="csd-trust" aria-label="Clinical translation capabilities">
        <div className="csd-shell csd-trust-grid">
          {[
            ["150+ LANGUAGES", "Global and regional clinical research support"],
            ["ISO-CERTIFIED QUALITY", "ISO 17100 · ISO 9001 · ISO 13485"],
            ["EXPERT HUMAN REVIEW", "Professional life sciences linguists"],
            ["TERMINOLOGY & VERSION CONTROL", "Consistency across documents and updates"],
          ].map(([title, text]) => (
            <div className="csd-trust-item" key={title}>
              <div className="csd-trust-title">{title}</div>
              <div className="csd-trust-text">{text}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell csd-system-grid">
          <div className="csd-system-copy csd-mobile-heading-center">
            <div className="csd-eyebrow">Why Alignment Matters</div>
            <h2>Clinical Study Documents Form a Connected System</h2>
            <p style={{ marginTop: 22 }}>
              A clinical study is not built from isolated documents. The protocol
              and Investigator Brochure establish core scientific and study
              context; CRFs translate requirements into structured data
              collection; manuals and site instructions guide execution;
              monitoring documentation supports oversight; and the Clinical Study
              Report brings study design, conduct, analysis, and results together.
              As the study evolves, amendments can affect multiple documents at
              once.
            </p>
            <p>
              A procedure described one way in the protocol should not take on a
              different meaning when it appears in a CRF or site manual. Endpoints,
              investigational product terms, eligibility criteria, visit names,
              and safety concepts need to remain recognizable as they move across
              documents and languages.
            </p>
            <p className="csd-callout">
              Sesen approaches clinical study document translation as a connected
              documentation workflow, helping related language stay aligned
              across documents and versions.
            </p>
            <a
              className="csd-inline-link"
              href="https://www.sesen.com/clinical-trial-translation-services/"
            >
              Explore Clinical Trial Translation Services
              <Icon name="arrow" size={17} />
            </a>
          </div>

          <div className="csd-system-map">
            <div className="csd-system-map-label">Clinical Documentation Flow</div>
            <div className="csd-system-chain">
              {[
                ["Protocol + IB", "Study design & product context"],
                ["CRF + Manuals", "Data collection & execution"],
                ["Sites + Oversight", "Study conduct & monitoring"],
                ["CSR", "Integrated study reporting"],
              ].map(([title, text]) => (
                <div className="csd-system-node" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <div className="csd-system-update">
              <Icon name="update" />
              Amendments and updates can change multiple documents downstream.
            </div>
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--soft">
        <div className="csd-shell">
          <SectionHeading
            eyebrow="Core Study Documentation"
            title="Translation Across the Clinical Study Document Ecosystem"
            intro="Sesen supports the scientific, operational, data-collection, site, oversight, and reporting documents used throughout clinical research. Each document has its own audience and purpose, but the content often depends on terminology and decisions established elsewhere in the study."
          />

          <div className="csd-directory">
            {documentFamilies.map((item) => (
              <article className="csd-doc-row" key={item.title}>
                <div className="csd-doc-icon">
                  <Icon name={item.icon} />
                </div>
                <div className="csd-doc-title">
                  <h3>{item.title}</h3>
                </div>
                <div className="csd-doc-copy">
                  <p>{item.text}</p>
                  <ul className="csd-doc-list">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <p className="csd-doc-footer">{item.footer}</p>
                  {item.link ? (
                    <a className="csd-inline-link" href={item.link}>
                      {item.linkLabel}
                      <Icon name="arrow" size={17} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell csd-terminology-layout">
          <div className="csd-terminology-intro">
            <div className="csd-eyebrow">Terminology Continuity</div>
            <h2>Keep Study Terminology Connected Across Documents</h2>
            <p>
              The protocol and Investigator Brochure may establish or reinforce
              the terminology for endpoints, procedures, cohorts, visits,
              assessments, investigational products, and safety concepts. The same
              language can reappear in CRFs, manuals, site documentation,
              monitoring records, and the final study report.
            </p>

            <div className="csd-terminology-flow" aria-label="Terminology flow example">
              <div className="csd-flow-protocol">
                <Icon name="layers" size={16} /> PROTOCOL + IB
              </div>
              <div className="csd-flow-arrow">↓</div>
              <div className="csd-flow-downstream">
                {["IB", "CRF/eCRF", "MANUALS", "SITE CONTENT", "MONITORING", "CSR"].map(
                  (item) => (
                    <span className="csd-flow-chip" key={item}>
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="csd-terminology-list">
            {terminologyItems.map((item) => (
              <div className="csd-terminology-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
            <p style={{ marginTop: 26, color: "#17264D", fontWeight: 600 }}>
              The goal is not to make every document sound identical. It is to
              keep the underlying clinical concepts consistent while adapting the
              language appropriately to each document&apos;s audience and purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--pale">
        <div className="csd-shell csd-amendment-grid">
          <div className="csd-amendment-intro">
            <div className="csd-eyebrow">Version Management</div>
            <h2>Manage Study Amendments Without Losing Document Alignment</h2>
            <p>
              A single study amendment can affect more than the protocol. Changed
              procedures may require new CRF fields, revised site instructions,
              updated investigator materials, or terminology changes that carry
              into later reporting.
            </p>
            <p>
              Managing those changes across multiple languages requires visibility
              into both what changed and where that change matters downstream.
            </p>

            <div className="csd-amendment-diagram" aria-label="Amendment impact diagram">
              <div className="csd-diagram-source">PROTOCOL — APPROVED VERSION</div>
              <div className="csd-diagram-change">↓ PROTOCOL AMENDMENT / CHANGED CONCEPTS ↓</div>
              <div className="csd-diagram-branches">
                <span>INVESTIGATOR MATERIALS</span>
                <span>CRF / eCRF</span>
                <span>STUDY MANUAL</span>
                <span>SITE CONTENT</span>
              </div>
              <div className="csd-diagram-result">ALIGNED MULTILINGUAL DOCUMENT SET</div>
            </div>
          </div>

          <div className="csd-step-list">
            {amendmentSteps.map(([title, text], index) => (
              <div className="csd-step" key={title}>
                <div className="csd-step-num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell">
          <SectionHeading
            title="Clinical Documentation From Study Startup Through Closeout"
            intro="Clinical study document translation develops alongside the study as sites activate, procedures are carried out, data is collected, study conduct is monitored, amendments are introduced, and results are reported."
          />

          <div className="csd-lifecycle">
            {lifecycleStages.map((stage) => (
              <article className="csd-life-stage" key={stage.title}>
                <div className="csd-life-dot" />
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
                <p className="csd-life-items">{stage.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--soft">
        <div className="csd-shell">
          <div className="csd-workflow-intro">
            <div>
              <div className="csd-eyebrow">Right-Sized Review</div>
              <h2>The Right Translation Workflow for Each Clinical Document</h2>
            </div>
            <div>
              <p>
                Not every clinical study document should be processed in exactly
                the same way. Sesen designs the workflow around document type,
                intended use, audience, content risk, regulatory context, sponsor
                requirements, languages, and delivery needs.
              </p>
              <div className="csd-workflow-qualifiers" style={{ marginTop: 22 }}>
                {[
                  "DOCUMENT TYPE",
                  "INTENDED USE",
                  "AUDIENCE",
                  "CONTENT RISK",
                  "SPONSOR REQUIREMENTS",
                  "LANGUAGES",
                  "DELIVERY NEEDS",
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="csd-workflow-list">
            {workflowSteps.map(([title, text], index) => (
              <article className="csd-workflow-card" key={title}>
                <div className="csd-workflow-number">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>

          <div className="csd-verification">
            <div className="csd-verification-icon">
              <Icon name="check" />
            </div>
            <div>
              <h3>Need Additional Verification?</h3>
              <p>
                Back translation, reconciliation, in-country review,
                certification, or other verification steps can be incorporated
                when the study, sponsor, institution, ethics process, or project
                requirements call for them. Sesen does not apply unnecessary
                validation steps automatically to every clinical document.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell csd-integrity-layout">
          <div className="csd-integrity-copy">
            <div className="csd-eyebrow">Formatting & Technical QA</div>
            <h2>Protect Tables, References, Structured Content, and Document Integrity</h2>
            <p>
              Clinical study translation involves more than paragraphs of text.
              Protocols can contain complex schedules of assessments. CRFs contain
              structured fields and response options. Investigator Brochures
              combine scientific text with figures and references. Clinical Study
              Reports may contain hundreds of pages of tables, statistical
              material, appendices, and cross-references.
            </p>
            <div className="csd-integrity-example">
              <strong>LINGUISTIC ACCURACY + DOCUMENT USABILITY</strong>
              <p>
                A translation can be linguistically accurate and still create
                problems if the document structure, references, or data
                relationships are damaged.
              </p>
            </div>
          </div>

          <div className="csd-integrity-list">
            {integrityItems.map(([title, text]) => (
              <div className="csd-integrity-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
            <p style={{ marginTop: 26, color: "#17264D", fontWeight: 600 }}>
              Sesen can coordinate translation, review, multilingual formatting,
              and final document QA within one clinical documentation workflow.
            </p>
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--soft">
        <div className="csd-shell">
          <SectionHeading
            eyebrow="Quality & Governance"
            title="Controlled Quality for Regulated Clinical Documentation"
            intro="Clinical documentation may be used by investigators, study sites, sponsors, CRO teams, medical writers, data managers, ethics committees, health authorities, and other stakeholders throughout clinical development."
            className="csd-mobile-center"
          />

          <div className="csd-quality-grid">
            {qualityItems.map(([title, text, icon]) => (
              <article className="csd-quality-item" key={title}>
                <div className="csd-quality-icon">
                  <Icon name={icon} />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell csd-teams-layout">
          <div className="csd-teams-intro csd-mobile-heading-center">
            <h2>Built for Teams Managing Complex Clinical Studies</h2>
            <p>
              Clinical documentation connects multiple functions. Sesen supports
              the teams responsible for creating, maintaining, reviewing, and
              using those documents throughout global clinical research.
            </p>
          </div>

          <div className="csd-team-list">
            {teamItems.map(([title, text]) => (
              <div className="csd-team-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
            <p style={{ marginTop: 26, color: "#17264D", fontWeight: 600 }}>
              Whether your team needs one high-priority document or ongoing
              support across a global study program, Sesen can adapt the workflow
              to your document mix, languages, review needs, and study timeline.
            </p>
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--dense">
        <div className="csd-shell">
          <div className="csd-global-band">
            <div className="csd-global-grid">
              <div className="csd-global-copy csd-mobile-heading-center">
                <div className="csd-eyebrow">Global Clinical Programs</div>
                <h2>One Study. Many Languages. One Connected Documentation Set.</h2>
                <p>
                  A global study may begin with one master protocol but quickly
                  expand into dozens of document types, markets, language
                  variants, site versions, and amendment cycles. Sesen supports
                  clinical study document translation across 150+ languages with
                  centralized linguistic assets that help preserve continuity as
                  the program grows.
                </p>
              </div>

              <div className="csd-global-points">
                {[
                  ["Study-specific terminology", "terminology"],
                  ["Translation memories", "layers"],
                  ["Approved previous translations", "check"],
                  ["Sponsor language preferences", "people"],
                  ["Reference documents & versions", "document"],
                  ["Global language coverage", "globe"],
                ].map(([title, icon]) => (
                  <div className="csd-global-point" key={title}>
                    <Icon name={icon} size={20} />
                    {title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--soft">
        <div className="csd-shell">
          <SectionHeading
            eyebrow="Related Clinical Workflows"
            title="Specialized Translation for the Wider Clinical Trial Program"
            intro="Core clinical documentation is only one part of a multilingual study. Sesen provides dedicated workflows for clinical content that requires different audiences, validation methods, or operational expertise."
          />

          <div className="csd-related-list">
            {relatedServices.map((service) => (
              <article className="csd-related-item" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="csd-related-links">
                  <a className="csd-inline-link" href={service.href}>
                    {service.linkLabel || `Explore ${service.title}`}
                    <Icon name="arrow" size={17} />
                  </a>
                  {service.extraHref ? (
                    <a className="csd-inline-link" href={service.extraHref}>
                      {service.extraLabel}
                      <Icon name="arrow" size={17} />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section">
        <div className="csd-shell">
          <SectionHeading
            title="Why Clinical Teams Choose Sesen"
            intro="Specialized life sciences expertise, professional human review, controlled terminology, and smarter workflows help clinical teams manage individual documents and recurring multilingual programs with greater continuity."
            className="csd-section-heading--center csd-mobile-center"
          />

          <div className="csd-why-grid">
            {[
              [
                "Life Sciences Specialization",
                "Focused support across clinical, regulatory, labeling, medical device, safety, scientific, healthcare, and related multilingual workflows.",
              ],
              [
                "Connected Document Context",
                "Translations can be managed with awareness of the protocols, terminology, references, versions, and related study content that give individual passages their meaning.",
              ],
              [
                "Professional Human Expertise",
                "Qualified life sciences linguists remain central to clinical meaning, contextual interpretation, terminology decisions, readability, and final quality.",
              ],
              [
                "Terminology & Version Control",
                "Shared terminology, translation memory, previous translations, and reviewer decisions help documentation remain aligned as studies evolve.",
              ],
              [
                "AI-Enabled Human Workflows",
                "Technology and AI-assisted capabilities can support terminology, content reuse, consistency analysis, quality checks, and workflow efficiency with expert human review.",
              ],
              [
                "Scalable Global Support",
                "From one document in one language to recurring updates across many countries, Sesen can scale linguistic resources and project coordination around the clinical program.",
              ],
            ].map(([title, text]) => (
              <article className="csd-why-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-section csd-section--soft">
        <div className="csd-shell csd-faq-wrap">
          <div className="csd-faq-intro">
            <h2>Clinical Study Document Translation FAQs</h2>
            <p>
              Answers to common questions from sponsors, CROs, medical writers,
              clinical operations teams, and data-management teams planning
              multilingual clinical documentation.
            </p>
          </div>

          <div className="csd-faq-list">
            {faqItems.map((item) => (
              <details className="csd-faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <div className="csd-faq-answer">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="csd-final">
        <div className="csd-shell">
          <div className="csd-final-panel">
            <h2>Keep Your Multilingual Study Documentation Connected</h2>
            <p>
              Whether you are translating a single protocol, preparing a
              multilingual study package, managing an amendment across multiple
              countries, or supporting an ongoing global clinical program, Sesen
              can help keep your study documentation accurate, consistent,
              controlled, and ready for the teams that depend on it.
            </p>
            <div className="csd-final-actions">
              <a
                className="csd-btn csd-btn--primary"
                href="https://www.sesen.com/get-a-quote/"
              >
                REQUEST A QUOTE
              </a>
              <a
                className="csd-btn csd-btn--secondary"
                href="https://www.sesen.com/contact-sales/"
              >
                TALK WITH TEAM SESEN
              </a>
            </div>
            <div className="csd-final-proof">
              <span>150+ LANGUAGES</span>
              <span>PROFESSIONAL LIFE SCIENCES LINGUISTS</span>
              <span>ISO-CERTIFIED QUALITY SYSTEMS</span>
              <span>AI-ENABLED WORKFLOWS WITH HUMAN REVIEW</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
