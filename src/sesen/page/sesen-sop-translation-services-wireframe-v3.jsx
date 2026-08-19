import React, { useState } from "react";

const LINKS = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  gmp: "https://www.sesen.com/gmp-translation-services/",
  iso13485: "https://www.sesen.com/iso-13485-translation-services/",
  pharma: "https://www.sesen.com/pharmaceutical-translation-services/",
  biopharma: "https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/",
  device: "https://www.sesen.com/medical-device-translation-services/",
  ivd: "https://www.sesen.com/ivd-translation-services/",
  clinical: "https://www.sesen.com/clinical-trial-translation-services/",
  pv: "https://www.sesen.com/pharmacovigilance-translation-services/",
  elearning: "https://www.sesen.com/elearning-training-translation-services/",
};

const scopeGroups = [
  {
    title: "Pharmaceutical & Biopharmaceutical",
    icon: "flask",
    items: [
      "Manufacturing and production procedures",
      "Cleaning, sanitation, and equipment operation",
      "Quality assurance and quality control",
      "Laboratory procedures and environmental monitoring",
      "Deviation, CAPA, and change-control procedures",
      "Material handling, storage, release, and distribution",
    ],
    links: [
      ["Pharmaceutical Translation Services", LINKS.pharma],
      ["Biopharmaceutical & Biosimilar Translation Services", LINKS.biopharma],
    ],
  },
  {
    title: "Medical Devices & IVD",
    icon: "device",
    items: [
      "QMS, document, and record-control procedures",
      "Design, development, and supplier controls",
      "Production, inspection, and testing procedures",
      "CAPA, complaint handling, and change control",
      "Servicing and post-market processes",
      "Laboratory, assay, and equipment procedures",
    ],
    links: [
      ["Medical Device Translation Services", LINKS.device],
      ["ISO 13485 Translation Services", LINKS.iso13485],
      ["IVD Translation Services", LINKS.ivd],
    ],
  },
  {
    title: "Clinical Research & CRO Operations",
    icon: "clinical",
    items: [
      "Clinical study and site-management procedures",
      "Monitoring and investigational product handling",
      "Data-management and safety-reporting workflows",
      "Essential-document and TMF processes",
      "Vendor oversight and clinical quality procedures",
      "Study-team responsibilities and operating processes",
    ],
    links: [["Clinical Trial Translation Services", LINKS.clinical]],
  },
  {
    title: "Quality, Compliance & Safety",
    icon: "quality",
    items: [
      "Document control and records management",
      "Internal audit and training procedures",
      "CAPA, deviation, and quality-event management",
      "Supplier qualification and validation workflows",
      "Pharmacovigilance case and escalation procedures",
      "Safety review, reconciliation, and reporting processes",
    ],
    links: [
      ["Regulatory Translation Services", LINKS.regulatory],
      ["Pharmacovigilance Translation Services", LINKS.pv],
    ],
  },
];

const workflow = [
  {
    n: "01",
    title: "Source SOP Review",
    text: "Review the SOP type, subject matter, source format, current revision, existing translations, terminology resources, related documents, target languages, reviewer requirements, and rollout needs.",
  },
  {
    n: "02",
    title: "Terminology Preparation",
    text: "Apply approved terminology for products, processes, equipment, departments, roles, quality concepts, warnings, abbreviations, and defined terms using client references and reusable language assets.",
  },
  {
    n: "03",
    title: "Specialized Translation",
    text: "Professional life sciences linguists preserve procedural meaning, sequence, responsibilities, conditions, technical terminology, warnings, numerical content, defined terms, and cross-references.",
  },
  {
    n: "04",
    title: "Independent Review",
    text: "Bilingual review focuses on accuracy, completeness, terminology, procedural consistency, numerical content, references, readability, and source-to-target alignment.",
  },
  {
    n: "05",
    title: "Formatting & Reconstruction",
    text: "Maintain usable multilingual structure across headings, numbering, tables, callouts, warnings, forms, appendices, headers, footers, revision information, and cross-references.",
  },
  {
    n: "06",
    title: "Version & Change Management",
    text: "Align translation updates to source revisions, reuse previously approved language where appropriate, and focus linguistic effort on new or changed content.",
  },
  {
    n: "07",
    title: "Client Review & Approval Support",
    text: "Organize linguistic comments, terminology decisions, reviewer feedback, query resolution, and final language updates while the customer retains formal document approval and release control.",
  },
  {
    n: "08",
    title: "Multilingual Rollout & Maintenance",
    text: "Coordinate finalized language versions across countries, facilities, laboratories, clinical teams, departments, suppliers, and future revision cycles.",
  },
];

const rolloutItems = [
  {
    title: "Multiple Languages",
    text: "Coordinate target languages through shared terminology, translation memory, project management, and quality processes.",
  },
  {
    title: "Multiple Documents",
    text: "Maintain linguistic continuity across SOP families and connected controlled documentation.",
  },
  {
    title: "Multiple Reviewers",
    text: "Organize feedback and preserve approved terminology decisions for future reuse.",
  },
  {
    title: "Multiple Sites",
    text: "Support global and regional teams while maintaining alignment with approved source content and terminology.",
  },
  {
    title: "Recurring Updates",
    text: "Carry translation memory, terminology, and approved decisions forward as procedures evolve.",
  },
];

const differentiators = [
  ["Life Sciences Specialization", "Expertise across pharmaceutical, biotechnology, medical device, IVD, clinical research, quality, manufacturing, and safety content."],
  ["Controlled-Content Expertise", "Support for SOPs and the work instructions, forms, QMS content, CAPA records, deviations, validation materials, and training that connect to them."],
  ["Cross-Document Terminology", "Approved language can stay consistent across SOP families, related documents, languages, sites, departments, and future revisions."],
  ["Structured Quality Workflows", "Specialized translation, independent review, terminology controls, automated QA support, formatting, and organized client review."],
  ["Version-Aware Translation", "Previously translated content and terminology can be carried forward as SOPs change, preserving continuity through successive revisions."],
  ["Human Expertise + Technology", "Professional linguistic expertise supported by translation memory, terminology management, automation, SesenGPT, and appropriate AI-assisted quality processes."],
];

const relatedServices = [
  ["Regulatory Translation Services", "Submissions, health-authority communication, quality documentation, validation materials, audits, safety content, and other regulated documentation.", LINKS.regulatory],
  ["GMP Translation Services", "Multilingual manufacturing and quality documentation for GMP environments, including SOPs, batch records, validation materials, and laboratory content.", LINKS.gmp],
  ["ISO 13485 Translation Services", "Medical-device QMS documentation including SOPs, CAPA, supplier controls, audit materials, change control, and training records.", LINKS.iso13485],
  ["Pharmaceutical Translation Services", "Pharmaceutical content across clinical development, manufacturing, regulatory, labeling, safety, and lifecycle management.", LINKS.pharma],
  ["Medical Device Translation Services", "IFUs, labeling, software, technical documentation, clinical content, QMS documentation, training, and post-market communications.", LINKS.device],
  ["Clinical Trial Translation Services", "Protocols, informed consent forms, site content, patient materials, clinical reports, digital trial content, and study operations.", LINKS.clinical],
];

const faqs = [
  [
    "What are SOP translation services?",
    "SOP translation services translate Standard Operating Procedures from one language into another while preserving procedural meaning, technical terminology, responsibilities, conditions, warnings, document structure, references, and other controlled content. For life sciences organizations, the workflow may also include terminology management, bilingual review, formatting, translation memory, version-aware updates, reviewer feedback, and coordination across related controlled documents.",
  ],
  [
    "What types of life sciences SOPs does Sesen translate?",
    "Sesen supports SOPs across pharmaceutical, biotechnology, medical device, IVD, clinical research, laboratory, quality, manufacturing, pharmacovigilance, and other life sciences operations. Examples include manufacturing procedures, laboratory SOPs, equipment procedures, quality-control processes, CAPA, change control, document control, supplier-quality procedures, clinical operations, safety workflows, complaint handling, and training procedures.",
  ],
  [
    "Can Sesen translate GMP and GxP SOPs?",
    "Yes. Sesen supports SOP translation for pharmaceutical manufacturing, laboratories, quality systems, clinical operations, and other environments operating under GMP and broader GxP frameworks. The workflow can incorporate specialized linguists, approved terminology, translation memory, independent review, automated QA, formatting, customer review, and recurring update support according to project requirements.",
  ],
  [
    "How does Sesen maintain terminology consistency across multiple SOPs?",
    "Sesen can apply customer-approved glossaries, terminology databases, translation memories, style guides, product references, legacy translations, reviewer feedback, and project-specific linguistic rules. These resources help recurring terminology remain consistent across SOP families, work instructions, forms, training content, quality documentation, languages, and future revisions.",
  ],
  [
    "Can Sesen update translations when an SOP is revised?",
    "Yes. Sesen supports version-aware SOP translation workflows. Existing source and target content can be compared so new or changed material receives appropriate translation and review while previously translated content can be reused where the source remains unchanged and reuse is appropriate. Translation memory, terminology resources, reviewer feedback, and approved translations can also be carried forward.",
  ],
  [
    "Can you translate related work instructions, forms, and training materials?",
    "Yes. Sesen translates SOPs together with connected controlled and training content, including work instructions, policies, forms, checklists, quality documentation, training materials, and eLearning. Coordinated terminology helps multilingual users encounter consistent language as they move from the governing procedure to task-level instructions, documentation, and training.",
  ],
  [
    "Can Sesen support multilingual SOP rollouts across several sites?",
    "Yes. Sesen can coordinate programs involving multiple languages, facilities, departments, reviewers, and rollout schedules. Centralized terminology, translation memory, reviewer feedback, language assets, project management, and quality controls help maintain consistency as controlled content moves across global operations.",
  ],
  [
    "How are translated SOPs reviewed?",
    "The appropriate workflow depends on the document and intended use, but SOP projects can include specialized translation, independent bilingual review, terminology verification, automated QA, formatting review, project oversight, and customer review support. Final internal document approval and release remain part of the customer's own document-control and quality processes.",
  ],
  [
    "Does Sesen use AI for SOP translation?",
    "Professional life sciences linguists and reviewers remain the foundation of controlled SOP translation. AI-assisted technologies can support appropriate parts of the workflow, including terminology identification, content reuse, translation assistance, version comparison, and quality checks. Translation memory, terminology management, automation, and SesenGPT can help manage recurring multilingual content more efficiently within a professional review workflow.",
  ],
  [
    "What file formats can Sesen support for SOP translation?",
    "Sesen can support commonly used business and technical document formats, including editable office documents, PDFs, tables, and layout-sensitive files. The optimal workflow depends on whether the source is editable, how the SOP is structured, whether formatting needs to be recreated, and how the translated content will return to the customer's document-management or quality workflow.",
  ],
  [
    "Does Sesen provide certified SOP translations?",
    "Certified translation documentation can be provided when required for the intended use and project scope. Because certification requirements vary by organization, authority, country, and use case, Sesen can review the specific requirement and determine the appropriate certification or supporting documentation for the project.",
  ],
  [
    "What languages does Sesen support for SOP translation?",
    "Sesen supports life sciences translation across 150+ languages. Multi-language SOP programs can be coordinated through shared terminology, translation memories, centralized project management, structured quality review, and version-aware workflows.",
  ],
];

function Icon({ name }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "flask") {
    return (
      <svg {...common}><path d="M9 3h6"/><path d="M10 3v5l-5.2 9.2A2.5 2.5 0 0 0 7 21h10a2.5 2.5 0 0 0 2.2-3.8L14 8V3"/><path d="M7.5 16h9"/></svg>
    );
  }
  if (name === "device") {
    return (
      <svg {...common}><rect x="5" y="3" width="14" height="18" rx="3"/><path d="M9 7h6"/><path d="M8 12h8"/><path d="M10 17h4"/></svg>
    );
  }
  if (name === "clinical") {
    return (
      <svg {...common}><path d="M4 7h16"/><path d="M7 4v6"/><path d="M17 4v6"/><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 14h3"/><path d="M9.5 12.5v3"/><path d="M14 14h2"/></svg>
    );
  }
  if (name === "quality") {
    return (
      <svg {...common}><path d="M12 3l7 3v5c0 4.5-2.8 8-7 10-4.2-2-7-5.5-7-10V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>
    );
  }
  if (name === "check") {
    return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
  }
  if (name === "arrow") {
    return <svg {...common}><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></svg>;
  }
  if (name === "globe") {
    return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></svg>;
  }
  if (name === "layers") {
    return <svg {...common}><path d="m12 3 8 4-8 4-8-4 8-4Z"/><path d="m4 12 8 4 8-4"/><path d="m4 17 8 4 8-4"/></svg>;
  }
  if (name === "review") {
    return <svg {...common}><path d="M5 4h10l4 4v12H5V4Z"/><path d="M15 4v4h4"/><path d="m8 14 2 2 5-5"/></svg>;
  }
  return <svg {...common}><circle cx="12" cy="12" r="9"/></svg>;
}

function ArrowLink({ href, children, light = false }) {
  return (
    <a className={`sop-arrow-link${light ? " light" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="sop-hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 510" role="presentation">
        <circle cx="300" cy="250" r="205" fill="#F5F7FF"/>
        <path d="M72 134C162 76 248 60 335 78c85 18 141 63 188 132" fill="none" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="7 10"/>
        <path d="M88 361c68 68 163 98 258 74 73-19 129-59 168-114" fill="none" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="7 10"/>

        <g transform="translate(215 72)">
          <rect x="0" y="0" width="222" height="316" rx="18" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.3"/>
          <path d="M166 0h38a18 18 0 0 1 18 18v38" fill="#EAF0FF"/>
          <path d="M166 0v56h56" fill="none" stroke="#3659BB" strokeWidth="2"/>
          <rect x="24" y="27" width="75" height="24" rx="12" fill="#EAF0FF"/>
          <text x="61" y="43" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">CONTROLLED</text>
          <text x="24" y="88" fontFamily="Inter Tight, Arial" fontSize="24" fontWeight="500" fill="#17264D">SOP-0147</text>
          <text x="24" y="111" fontFamily="Inter, Arial" fontSize="12" fill="#68758B">Equipment Cleaning Procedure</text>
          <line x1="24" y1="134" x2="198" y2="134" stroke="#DDE4F2"/>
          <rect x="24" y="154" width="36" height="8" rx="4" fill="#4B6FD8" opacity=".9"/>
          <rect x="68" y="154" width="116" height="8" rx="4" fill="#DDE4F2"/>
          <rect x="24" y="177" width="160" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="24" y="199" width="142" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="24" y="221" width="170" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="24" y="243" width="118" height="7" rx="4" fill="#DDE4F2"/>
          <line x1="24" y1="269" x2="198" y2="269" stroke="#DDE4F2"/>
          <text x="24" y="293" fontFamily="Inter, Arial" fontSize="11" fill="#68758B">REV. 05</text>
          <rect x="132" y="278" width="66" height="24" rx="12" fill="#EAF0FF"/>
          <text x="165" y="294" textAnchor="middle" fontFamily="Inter, Arial" fontSize="10" fontWeight="700" fill="#3659BB">APPROVED</text>
        </g>

        <g transform="translate(84 178)">
          <rect x="0" y="0" width="126" height="155" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5"/>
          <circle cx="30" cy="31" r="14" fill="#EAF0FF"/>
          <text x="30" y="36" textAnchor="middle" fontFamily="Inter, Arial" fontSize="12" fontWeight="700" fill="#3659BB">EN</text>
          <rect x="20" y="63" width="84" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="84" width="68" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="105" width="78" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="126" width="48" height="7" rx="4" fill="#4B6FD8" opacity=".75"/>
        </g>

        <g transform="translate(438 150)">
          <rect x="0" y="0" width="118" height="137" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5"/>
          <circle cx="29" cy="31" r="14" fill="#EAF0FF"/>
          <text x="29" y="36" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">DE</text>
          <rect x="20" y="62" width="77" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="83" width="62" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="104" width="72" height="7" rx="4" fill="#4B6FD8" opacity=".75"/>
        </g>

        <g transform="translate(426 305)">
          <rect x="0" y="0" width="130" height="121" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5"/>
          <circle cx="30" cy="31" r="14" fill="#EAF0FF"/>
          <text x="30" y="36" textAnchor="middle" fontFamily="Inter, Arial" fontSize="11" fontWeight="700" fill="#3659BB">JA</text>
          <rect x="20" y="62" width="85" height="7" rx="4" fill="#DDE4F2"/>
          <rect x="20" y="83" width="70" height="7" rx="4" fill="#DDE4F2"/>
        </g>

        <circle cx="208" cy="251" r="7" fill="#4B6FD8"/>
        <circle cx="438" cy="225" r="7" fill="#4B6FD8"/>
        <circle cx="426" cy="358" r="7" fill="#4B6FD8"/>
        <path d="M210 251h22" stroke="#4B6FD8" strokeWidth="2"/>
        <path d="M415 225h23" stroke="#4B6FD8" strokeWidth="2"/>
        <path d="M410 358h16" stroke="#4B6FD8" strokeWidth="2"/>

        <g transform="translate(99 345)">
          <rect width="138" height="56" rx="28" fill="#17264D"/>
          <circle cx="28" cy="28" r="9" fill="#C8D6FF"/>
          <path d="m24 28 3 3 6-7" fill="none" stroke="#17264D" strokeWidth="2" strokeLinecap="round"/>
          <text x="48" y="25" fontFamily="Inter, Arial" fontSize="10" fill="#C8D6FF">REVISION</text>
          <text x="48" y="40" fontFamily="Inter, Arial" fontSize="13" fontWeight="700" fill="#FFFFFF">SYNCED</text>
        </g>
      </svg>
    </div>
  );
}

function EcosystemGraphic() {
  const docs = ["Policy", "SOP", "Work Instruction", "Form / Checklist", "Record", "Training"];
  const related = ["CAPA", "Deviations", "Change Control", "Validation"];
  return (
    <div className="sop-ecosystem" role="group" aria-label="Common controlled documentation relationship">
      <div className="sop-doc-chain">
        <div className="sop-doc-chain-label">COMMON DOCUMENTATION CHAIN</div>
        {docs.map((doc, index) => (
          <React.Fragment key={doc}>
            <div className={`sop-doc-node ${doc === "SOP" ? "is-active" : ""}`}>
              <span className="sop-doc-index">{String(index + 1).padStart(2, "0")}</span>
              <strong>{doc}</strong>
            </div>
            {index < docs.length - 1 && <div className="sop-doc-connector" aria-hidden="true"><span /></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="sop-related-controls">
        <div className="sop-related-controls-label">RELATED CONTROLLED CONTENT</div>
        <div className="sop-related-controls-list">
          {related.map(item => <span key={item}>{item}</span>)}
        </div>
      </div>
    </div>
  );
}

function TerminologyGraphic() {
  return (
    <div className="sop-term-graphic" aria-hidden="true">
      <div className="sop-term-center">
        <span className="term-small">APPROVED</span>
        <strong>Terminology</strong>
      </div>
      {[
        ["SOP", "top"],
        ["Work Instruction", "right"],
        ["Training", "bottom"],
        ["Quality Record", "left"],
      ].map(([label, pos]) => <div className={`sop-term-node ${pos}`} key={label}>{label}</div>)}
      <svg viewBox="0 0 420 420">
        <circle cx="210" cy="210" r="122" fill="none" stroke="#DDE4F2" strokeWidth="1.5" strokeDasharray="5 8"/>
        <path d="M210 88v70M332 210h-70M210 332v-70M88 210h70" stroke="#4B6FD8" strokeWidth="1.8"/>
      </svg>
    </div>
  );
}

function VersionGraphic() {
  return (
    <div className="sop-version-graphic" role="group" aria-label="Version-aware SOP translation workflow">
      <div className="version-track">
        <div className="version-chip"><span>REV. 03</span><small>Approved language</small></div>
        <div className="version-arrow" aria-hidden="true">→</div>
        <div className="version-chip active"><span>REV. 04</span><small>Source changes</small></div>
        <div className="version-arrow" aria-hidden="true">→</div>
        <div className="version-chip"><span>REV. 05</span><small>Multilingual update</small></div>
      </div>
      <div className="version-delta">
        <div><span className="delta-dot stable"/>Unchanged content</div>
        <div><span className="delta-dot changed"/>Changed source content</div>
        <div><span className="delta-dot review"/>Review & QA</div>
      </div>
      <div className="version-lines" aria-hidden="true">
        <span/><span className="changed"/><span/><span/><span className="changed"/><span/><span/><span className="review"/><span/>
      </div>
    </div>
  );
}

function FAQItem({ q, a, index }) {
  const [open, setOpen] = useState(index === 0);
  const id = `sop-faq-${index}`;
  return (
    <div className={`sop-faq-item ${open ? "is-open" : ""}`}>
      <button
        className="sop-faq-question"
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <span className="sop-faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={id} className="sop-faq-answer" hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function SOPTranslationServicesPage() {
  return (
    <main className="sesen-sop-page">
      <style>{`
        .sesen-sop-page {
          --sop-blue: #4B6FD8;
          --sop-blue-dark: #3659BB;
          --sop-blue-deep: #253F8F;
          --sop-blue-mid: #6F8BE1;
          --sop-blue-soft: #EAF0FF;
          --sop-blue-pale: #F5F7FF;
          --sop-navy: #17264D;
          --sop-ink: #111827;
          --sop-body: #46546D;
          --sop-muted: #68758B;
          --sop-border: #DDE4F2;
          --sop-divider: #E9EEF8;
          --sop-surface: #F7F9FD;
          --sop-white: #FFFFFF;
          --sop-light-blue: #C8D6FF;
          color: var(--sop-body);
          background: var(--sop-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.68;
          overflow-x: clip;
        }

        .sesen-sop-page,
        .sesen-sop-page * { box-sizing: border-box; }

        .sesen-sop-page .sop-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .sesen-sop-page .sop-section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .sesen-sop-page .sop-section.compact {
          padding-top: 80px;
          padding-bottom: 80px;
        }

        .sesen-sop-page .sop-section.soft { background: var(--sop-surface); }
        .sesen-sop-page .sop-section.pale { background: var(--sop-blue-pale); }
        .sesen-sop-page .sop-section.navy { background: var(--sop-navy); color: #fff; }

        .sesen-sop-page h1,
        .sesen-sop-page h2,
        .sesen-sop-page h3 {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-style: normal;
          font-weight: 500;
          color: var(--sop-navy);
          margin: 0;
        }

        .sesen-sop-page h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-sop-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-sop-page h3 {
          font-size: 23px;
          line-height: 1.3;
        }

        .sesen-sop-page h1,
        .sesen-sop-page h2,
        .sesen-sop-page h3,
        .sesen-sop-page p { overflow-wrap: break-word; }
        .sesen-sop-page p { margin: 0; }

        .sesen-sop-page .sop-eyebrow {
          display: inline-block;
          margin-bottom: 16px;
          color: var(--sop-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .15em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .sesen-sop-page .navy .sop-eyebrow { color: var(--sop-light-blue); }

        .sesen-sop-page .sop-section-head {
          max-width: 790px;
          margin-bottom: 50px;
        }

        .sesen-sop-page .sop-section-head.center {
          text-align: center;
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-sop-page .sop-section-head p {
          margin-top: 18px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--sop-body);
        }

        .sesen-sop-page .navy h2,
        .sesen-sop-page .navy h3 { color: #fff; }
        .sesen-sop-page .navy .sop-section-head p { color: #D7E0F7; }

        .sesen-sop-page .sop-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border-radius: 999px;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .04em;
          text-decoration: none;
          transition: background-color .18s ease, border-color .18s ease, transform .18s ease;
        }

        .sesen-sop-page .sop-btn.primary {
          background: var(--sop-blue);
          color: #fff;
          border: 1px solid var(--sop-blue);
        }
        .sesen-sop-page .sop-btn.primary:hover { background: var(--sop-blue-dark); border-color: var(--sop-blue-dark); }

        .sesen-sop-page .sop-btn.light {
          background: #fff;
          color: var(--sop-ink);
          border: 1px solid #fff;
        }
        .sesen-sop-page .sop-btn.light:hover { background: var(--sop-blue-soft); border-color: var(--sop-blue-soft); }
        .sesen-sop-page .sop-btn:focus-visible,
        .sesen-sop-page .sop-arrow-link:focus-visible,
        .sesen-sop-page .sop-faq-question:focus-visible {
          outline: 3px solid rgba(75,111,216,.34);
          outline-offset: 4px;
        }

        .sesen-sop-page .sop-arrow-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sop-blue-dark);
          font-size: 15px;
          line-height: 1.45;
          font-weight: 700;
          text-decoration: none;
          max-width: 100%;
        }
        .sesen-sop-page .sop-arrow-link span { overflow-wrap: anywhere; }
        .sesen-sop-page .sop-arrow-link svg { width: 18px; height: 18px; transition: transform .18s ease; }
        .sesen-sop-page .sop-arrow-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
        .sesen-sop-page .sop-arrow-link:hover svg { transform: translateX(3px); }
        .sesen-sop-page .sop-arrow-link.light { color: #fff; }

        .sesen-sop-page .sop-hero {
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
          padding: 96px 0 92px;
        }

        .sesen-sop-page .sop-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(430px, .98fr);
          align-items: center;
          gap: 68px;
        }

        .sesen-sop-page .sop-hero-copy { max-width: 690px; }
        .sesen-sop-page .sop-hero-copy .sop-lead {
          margin-top: 24px;
          max-width: 660px;
          font-size: 20px;
          line-height: 1.66;
          color: #293954;
        }
        .sesen-sop-page .sop-hero-copy .sop-support {
          margin-top: 16px;
          max-width: 650px;
          font-size: 17px;
          line-height: 1.72;
          color: var(--sop-body);
        }
        .sesen-sop-page .sop-hero-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 32px;
        }
        .sesen-sop-page .sop-hero-art { width: 100%; max-width: 590px; justify-self: end; }
        .sesen-sop-page .sop-hero-art svg { width: 100%; height: auto; display: block; }

        .sesen-sop-page .sop-trust-band {
          border-top: 1px solid var(--sop-border);
          border-bottom: 1px solid var(--sop-border);
          background: #fff;
        }
        .sesen-sop-page .sop-trust-inner {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .sesen-sop-page .sop-trust-item {
          display: flex;
          gap: 13px;
          align-items: center;
          min-height: 54px;
          padding: 0 24px;
          border-right: 1px solid var(--sop-divider);
        }
        .sesen-sop-page .sop-trust-item:first-child { padding-left: 0; }
        .sesen-sop-page .sop-trust-item:last-child { border-right: 0; padding-right: 0; }
        .sesen-sop-page .sop-trust-icon {
          width: 38px;
          height: 38px;
          flex: 0 0 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--sop-blue-soft);
          color: var(--sop-blue-dark);
        }
        .sesen-sop-page .sop-trust-icon svg { width: 20px; height: 20px; }
        .sesen-sop-page .sop-trust-item strong {
          display: block;
          color: var(--sop-navy);
          font-size: 14px;
          line-height: 1.35;
        }
        .sesen-sop-page .sop-trust-item span {
          display: block;
          color: var(--sop-muted);
          font-size: 13px;
          line-height: 1.4;
          margin-top: 2px;
        }

        .sesen-sop-page .sop-controlled-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 78px;
          align-items: center;
        }
        .sesen-sop-page .sop-copy-block { max-width: 620px; }
        .sesen-sop-page .sop-copy-block p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.75;
        }
        .sesen-sop-page .sop-definition-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
          margin-top: 26px;
        }
        .sesen-sop-page .sop-definition-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--sop-body);
          font-size: 16px;
        }
        .sesen-sop-page .sop-definition-item svg {
          width: 18px;
          height: 18px;
          margin-top: 4px;
          color: var(--sop-blue-dark);
          flex: 0 0 18px;
        }

        .sesen-sop-page .sop-lifecycle-panel {
          border: 1px solid var(--sop-border);
          border-radius: 28px;
          padding: 34px;
          background: #fff;
        }
        .sesen-sop-page .sop-lifecycle-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 30px;
        }
        .sesen-sop-page .sop-lifecycle-title strong {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
          color: var(--sop-navy);
        }
        .sesen-sop-page .sop-lifecycle-title span {
          color: var(--sop-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
        }
        .sesen-sop-page .sop-lifecycle-flow {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px 10px;
          position: relative;
        }
        .sesen-sop-page .sop-life-step {
          position: relative;
          min-height: 105px;
          padding: 18px 14px 14px;
          border: 1px solid var(--sop-divider);
          border-radius: 18px;
          background: var(--sop-surface);
        }
        .sesen-sop-page .sop-life-step:nth-child(n+5) { background: var(--sop-blue-pale); }
        .sesen-sop-page .sop-life-step small {
          display: block;
          color: var(--sop-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .11em;
          margin-bottom: 8px;
        }
        .sesen-sop-page .sop-life-step strong {
          display: block;
          color: var(--sop-navy);
          font-size: 14px;
          line-height: 1.35;
        }

        .sesen-sop-page .sop-scope-list { border-top: 1px solid var(--sop-border); }
        .sesen-sop-page .sop-scope-row {
          display: grid;
          grid-template-columns: 310px 1fr;
          gap: 58px;
          padding: 40px 0;
          border-bottom: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-scope-heading {
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }
        .sesen-sop-page .sop-icon-box {
          width: 44px;
          height: 44px;
          flex: 0 0 44px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--sop-blue-soft);
          color: var(--sop-blue-dark);
        }
        .sesen-sop-page .sop-scope-heading h3 { font-size: 22px; }
        .sesen-sop-page .sop-scope-content {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 270px;
          gap: 44px;
          align-items: start;
        }
        .sesen-sop-page .sop-scope-items {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 9px 30px;
        }
        .sesen-sop-page .sop-scope-items span {
          position: relative;
          padding-left: 18px;
          font-size: 16px;
          line-height: 1.52;
        }
        .sesen-sop-page .sop-scope-items span::before {
          content: "";
          position: absolute;
          left: 0;
          top: .68em;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sop-blue);
        }
        .sesen-sop-page .sop-scope-links { display: grid; gap: 12px; }

        .sesen-sop-page .sop-connected-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
          align-items: center;
        }
        .sesen-sop-page .sop-connected-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
          max-width: 600px;
        }
        .sesen-sop-page .sop-connected-note {
          margin-top: 28px;
          padding: 20px 22px;
          border-left: 2px solid var(--sop-blue);
          background: #fff;
          color: #293954;
          font-size: 16px;
          line-height: 1.65;
        }

        .sesen-sop-page .sop-ecosystem {
          width: 100%;
          max-width: 650px;
          margin-left: auto;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 168px;
          gap: 28px;
          align-items: center;
        }
        .sesen-sop-page .sop-doc-chain { min-width: 0; }
        .sesen-sop-page .sop-doc-chain-label,
        .sesen-sop-page .sop-related-controls-label {
          color: var(--sop-blue-dark);
          font-size: 10px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .12em;
        }
        .sesen-sop-page .sop-doc-chain-label { margin: 0 0 14px 18px; }
        .sesen-sop-page .sop-doc-node {
          width: 100%;
          min-height: 62px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 13px 18px;
          border: 1px solid var(--sop-border);
          border-radius: 16px;
          background: #fff;
          position: relative;
          z-index: 2;
        }
        .sesen-sop-page .sop-doc-node.is-active {
          border-color: var(--sop-blue);
          box-shadow: 0 12px 30px rgba(54,89,187,.10);
        }
        .sesen-sop-page .sop-doc-index {
          color: var(--sop-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .12em;
          flex: 0 0 23px;
        }
        .sesen-sop-page .sop-doc-node strong {
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          line-height: 1.35;
          font-weight: 500;
          min-width: 0;
        }
        .sesen-sop-page .sop-doc-connector { height: 14px; position: relative; }
        .sesen-sop-page .sop-doc-connector span {
          display: block;
          width: 1px;
          height: 14px;
          background: var(--sop-blue-mid);
          margin-left: 30px;
        }
        .sesen-sop-page .sop-related-controls {
          position: relative;
          min-width: 0;
          padding-left: 28px;
        }
        .sesen-sop-page .sop-related-controls::before {
          content: "";
          position: absolute;
          left: 0;
          top: 30px;
          bottom: 4px;
          border-left: 1px dashed var(--sop-blue-mid);
        }
        .sesen-sop-page .sop-related-controls-label { margin-bottom: 20px; }
        .sesen-sop-page .sop-related-controls-list {
          display: grid;
          gap: 16px;
        }
        .sesen-sop-page .sop-related-controls-list span {
          position: relative;
          color: var(--sop-blue-dark);
          font-size: 13px;
          line-height: 1.35;
          font-weight: 700;
        }
        .sesen-sop-page .sop-related-controls-list span::before {
          content: "";
          position: absolute;
          left: -28px;
          top: .7em;
          width: 16px;
          border-top: 1px dashed var(--sop-blue-mid);
        }

        .sesen-sop-page .sop-workflow-list {
          border-top: 1px solid rgba(200,214,255,.28);
        }
        .sesen-sop-page .sop-workflow-row {
          display: grid;
          grid-template-columns: 92px 300px 1fr;
          gap: 24px;
          padding: 30px 0;
          border-bottom: 1px solid rgba(200,214,255,.2);
          align-items: start;
        }
        .sesen-sop-page .sop-workflow-number {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 31px;
          line-height: 1.1;
          color: var(--sop-light-blue);
          font-weight: 500;
        }
        .sesen-sop-page .sop-workflow-row h3 { font-size: 21px; color: #fff; }
        .sesen-sop-page .sop-workflow-row p {
          max-width: 750px;
          color: #D7E0F7;
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-sop-page .sop-term-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 84px;
          align-items: center;
        }
        .sesen-sop-page .sop-term-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
        }
        .sesen-sop-page .sop-term-resources {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }
        .sesen-sop-page .sop-term-resources span {
          padding: 8px 12px;
          border: 1px solid var(--sop-border);
          border-radius: 999px;
          background: #fff;
          color: var(--sop-body);
          font-size: 13px;
          line-height: 1.2;
          font-weight: 600;
        }
        .sesen-sop-page .sop-term-statement {
          margin-top: 26px;
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.5;
          font-weight: 500;
        }
        .sesen-sop-page .sop-term-graphic {
          position: relative;
          width: min(100%, 500px);
          aspect-ratio: 1;
          margin: 0 auto;
        }
        .sesen-sop-page .sop-term-graphic > svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .sesen-sop-page .sop-term-center,
        .sesen-sop-page .sop-term-node {
          position: absolute;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          text-align: center;
          background: #fff;
          border: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-term-center {
          width: 176px;
          height: 176px;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border: 2px solid var(--sop-blue);
          box-shadow: 0 18px 42px rgba(54,89,187,.10);
        }
        .sesen-sop-page .sop-term-center .term-small {
          color: var(--sop-blue-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .13em;
          margin-bottom: 5px;
        }
        .sesen-sop-page .sop-term-center strong {
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
        }
        .sesen-sop-page .sop-term-node {
          width: 136px;
          min-height: 54px;
          padding: 8px 12px;
          border-radius: 14px;
          color: var(--sop-navy);
          font-size: 13px;
          font-weight: 700;
          line-height: 1.3;
        }
        .sesen-sop-page .sop-term-node.top { top: 3%; left: 50%; transform: translateX(-50%); }
        .sesen-sop-page .sop-term-node.right { right: 0; top: 50%; transform: translateY(-50%); }
        .sesen-sop-page .sop-term-node.bottom { bottom: 3%; left: 50%; transform: translateX(-50%); }
        .sesen-sop-page .sop-term-node.left { left: 0; top: 50%; transform: translateY(-50%); }

        .sesen-sop-page .sop-version-grid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 76px;
          align-items: center;
        }
        .sesen-sop-page .sop-version-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
          color: #D7E0F7;
        }
        .sesen-sop-page .sop-version-copy .sop-version-tagline {
          margin-top: 26px;
          color: #fff;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 24px;
          line-height: 1.4;
          font-weight: 500;
        }
        .sesen-sop-page .sop-version-graphic {
          border: 1px solid rgba(200,214,255,.25);
          border-radius: 28px;
          padding: 34px;
          background: rgba(255,255,255,.055);
        }
        .sesen-sop-page .version-track {
          display: grid;
          grid-template-columns: 1fr 32px 1fr 32px 1fr;
          align-items: center;
          gap: 8px;
        }
        .sesen-sop-page .version-chip {
          min-height: 104px;
          border: 1px solid rgba(200,214,255,.25);
          border-radius: 18px;
          padding: 18px;
          background: rgba(255,255,255,.045);
        }
        .sesen-sop-page .version-chip.active {
          border-color: var(--sop-light-blue);
          background: rgba(75,111,216,.18);
        }
        .sesen-sop-page .version-chip span {
          display: block;
          color: #fff;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
        }
        .sesen-sop-page .version-chip small {
          display: block;
          margin-top: 8px;
          color: var(--sop-light-blue);
          font-size: 12px;
          line-height: 1.4;
        }
        .sesen-sop-page .version-arrow { color: var(--sop-light-blue); font-size: 24px; text-align: center; }
        .sesen-sop-page .version-delta {
          display: flex;
          flex-wrap: wrap;
          gap: 18px;
          margin-top: 28px;
          color: #D7E0F7;
          font-size: 12px;
        }
        .sesen-sop-page .version-delta > div { display: flex; gap: 8px; align-items: center; }
        .sesen-sop-page .delta-dot { width: 8px; height: 8px; border-radius: 50%; display: inline-block; }
        .sesen-sop-page .delta-dot.stable { background: #6F8BE1; }
        .sesen-sop-page .delta-dot.changed { background: #C8D6FF; }
        .sesen-sop-page .delta-dot.review { background: #FFFFFF; }
        .sesen-sop-page .version-lines {
          display: grid;
          gap: 8px;
          margin-top: 24px;
        }
        .sesen-sop-page .version-lines span {
          height: 6px;
          width: 82%;
          border-radius: 4px;
          background: rgba(111,139,225,.42);
        }
        .sesen-sop-page .version-lines span:nth-child(2n) { width: 68%; }
        .sesen-sop-page .version-lines span:nth-child(3n) { width: 91%; }
        .sesen-sop-page .version-lines span.changed { background: var(--sop-light-blue); }
        .sesen-sop-page .version-lines span.review { background: #fff; width: 54%; }

        .sesen-sop-page .sop-version-benefits {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid rgba(200,214,255,.2);
          margin-top: 54px;
        }
        .sesen-sop-page .sop-version-benefit {
          padding: 28px 20px 0 0;
          margin-right: 20px;
          border-right: 1px solid rgba(200,214,255,.18);
        }
        .sesen-sop-page .sop-version-benefit:last-child { border-right: 0; margin-right: 0; }
        .sesen-sop-page .sop-version-benefit strong {
          display: block;
          color: #fff;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
          line-height: 1.35;
        }
        .sesen-sop-page .sop-version-benefit span {
          display: block;
          margin-top: 9px;
          color: #C8D6FF;
          font-size: 16px;
          line-height: 1.58;
        }

        .sesen-sop-page .sop-rollout-grid {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 80px;
          align-items: start;
        }
        .sesen-sop-page .sop-rollout-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
        }
        .sesen-sop-page .sop-rollout-copy .sop-callout {
          margin-top: 28px;
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.5;
          font-weight: 500;
        }
        .sesen-sop-page .sop-rollout-list { border-top: 1px solid var(--sop-border); }
        .sesen-sop-page .sop-rollout-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 18px;
          padding: 25px 0;
          border-bottom: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-rollout-icon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: var(--sop-blue-soft);
          color: var(--sop-blue-dark);
        }
        .sesen-sop-page .sop-rollout-item strong {
          display: block;
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          line-height: 1.35;
          font-weight: 500;
        }
        .sesen-sop-page .sop-rollout-item p {
          margin-top: 7px;
          font-size: 16px;
          line-height: 1.62;
        }

        .sesen-sop-page .sop-training-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 72px;
          align-items: center;
        }
        .sesen-sop-page .sop-training-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.75;
        }
        .sesen-sop-page .sop-training-copy .sop-arrow-link { margin-top: 24px; }
        .sesen-sop-page .sop-training-flow {
          padding: 32px;
          border-radius: 28px;
          border: 1px solid var(--sop-border);
          background: #fff;
        }
        .sesen-sop-page .sop-training-flow-head {
          color: var(--sop-blue-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .13em;
          margin-bottom: 20px;
        }
        .sesen-sop-page .sop-training-step {
          display: grid;
          grid-template-columns: 44px 1fr;
          gap: 16px;
          align-items: center;
          min-height: 68px;
          padding: 12px 0;
          border-bottom: 1px solid var(--sop-divider);
        }
        .sesen-sop-page .sop-training-step:last-child { border-bottom: 0; }
        .sesen-sop-page .sop-training-step span {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--sop-blue-pale);
          color: var(--sop-blue-dark);
          font-size: 12px;
          font-weight: 700;
        }
        .sesen-sop-page .sop-training-step strong {
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
        }

        .sesen-sop-page .sop-reg-grid {
          display: grid;
          grid-template-columns: .78fr 1.22fr;
          gap: 72px;
          align-items: start;
        }
        .sesen-sop-page .sop-reg-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
        }
        .sesen-sop-page .sop-reg-panel {
          border-left: 1px solid var(--sop-border);
          padding-left: 44px;
        }
        .sesen-sop-page .sop-reg-panel h3 { margin-bottom: 22px; }
        .sesen-sop-page .sop-reg-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px 30px;
        }
        .sesen-sop-page .sop-reg-list div {
          display: flex;
          gap: 11px;
          align-items: flex-start;
          font-size: 16px;
          line-height: 1.55;
        }
        .sesen-sop-page .sop-reg-list svg {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          margin-top: 4px;
          color: var(--sop-blue-dark);
        }
        .sesen-sop-page .sop-reg-note {
          margin-top: 26px;
          padding: 18px 20px;
          border-radius: 16px;
          background: var(--sop-blue-pale);
          color: #293954;
          font-size: 16px;
          line-height: 1.64;
        }

        .sesen-sop-page .sop-tech-grid {
          display: grid;
          grid-template-columns: .92fr 1.08fr;
          gap: 82px;
          align-items: center;
        }
        .sesen-sop-page .sop-tech-copy p {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.76;
        }
        .sesen-sop-page .sop-tech-copy strong { color: var(--sop-navy); }
        .sesen-sop-page .sop-tech-stack {
          border: 1px solid var(--sop-border);
          border-radius: 28px;
          padding: 30px;
          background: #fff;
        }
        .sesen-sop-page .sop-tech-layer {
          display: grid;
          grid-template-columns: 138px 1fr;
          gap: 18px;
          padding: 18px 0;
          border-bottom: 1px solid var(--sop-divider);
        }
        .sesen-sop-page .sop-tech-layer:last-child { border-bottom: 0; }
        .sesen-sop-page .sop-tech-layer span {
          color: var(--sop-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .06em;
        }
        .sesen-sop-page .sop-tech-layer p { color: var(--sop-body); font-size: 16px; line-height: 1.6; }

        .sesen-sop-page .sop-why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          border-top: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-why-item {
          display: grid;
          grid-template-columns: 46px 1fr;
          gap: 18px;
          padding: 30px 42px 30px 0;
          border-bottom: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-why-item:nth-child(odd) { border-right: 1px solid var(--sop-border); }
        .sesen-sop-page .sop-why-item:nth-child(even) { padding-left: 42px; }
        .sesen-sop-page .sop-why-mark {
          width: 38px;
          height: 38px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: var(--sop-blue-soft);
          color: var(--sop-blue-dark);
        }
        .sesen-sop-page .sop-why-mark svg { width: 19px; height: 19px; }
        .sesen-sop-page .sop-why-item h3 { font-size: 19px; }
        .sesen-sop-page .sop-why-item p { margin-top: 8px; font-size: 16px; line-height: 1.65; }

        .sesen-sop-page .sop-quality-band {
          border-top: 1px solid var(--sop-border);
          border-bottom: 1px solid var(--sop-border);
          background: #fff;
        }
        .sesen-sop-page .sop-quality-inner {
          display: grid;
          grid-template-columns: 1.1fr repeat(4, .72fr);
          align-items: center;
          min-height: 132px;
        }
        .sesen-sop-page .sop-quality-intro { padding-right: 44px; }
        .sesen-sop-page .sop-quality-intro strong {
          display: block;
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          line-height: 1.4;
          font-weight: 500;
        }
        .sesen-sop-page .sop-quality-intro span {
          display: block;
          margin-top: 7px;
          color: var(--sop-muted);
          font-size: 14px;
        }
        .sesen-sop-page .sop-quality-item {
          min-height: 72px;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid var(--sop-divider);
        }
        .sesen-sop-page .sop-quality-item strong {
          color: var(--sop-navy);
          font-size: 15px;
          line-height: 1.35;
        }
        .sesen-sop-page .sop-quality-item span {
          margin-top: 3px;
          color: var(--sop-muted);
          font-size: 13px;
          line-height: 1.4;
        }

        .sesen-sop-page .sop-related-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0 34px;
          border-top: 1px solid var(--sop-border);
        }
        .sesen-sop-page .sop-related-item {
          min-height: 245px;
          padding: 30px 10px 30px 0;
          border-bottom: 1px solid var(--sop-border);
          display: flex;
          flex-direction: column;
        }
        .sesen-sop-page .sop-related-item h3 { font-size: 21px; }
        .sesen-sop-page .sop-related-item p { margin-top: 12px; font-size: 16px; line-height: 1.64; }
        .sesen-sop-page .sop-related-item .sop-arrow-link { margin-top: auto; padding-top: 24px; }
        .sesen-sop-page .sop-related-training-link { margin-top: 28px; }

        .sesen-sop-page .sop-faq-wrap { max-width: 930px; margin: 0 auto; }
        .sesen-sop-page .sop-faq-list { border-top: 1px solid var(--sop-border); }
        .sesen-sop-page .sop-faq-item { border-bottom: 1px solid var(--sop-border); }
        .sesen-sop-page .sop-faq-question {
          width: 100%;
          border: 0;
          background: transparent;
          padding: 23px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          color: var(--sop-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          line-height: 1.45;
          font-weight: 500;
          text-align: left;
          cursor: pointer;
        }
        .sesen-sop-page .sop-faq-toggle {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: var(--sop-blue-pale);
          color: var(--sop-blue-dark);
          font-family: Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 400;
        }
        .sesen-sop-page .sop-faq-answer { padding: 0 62px 24px 0; }
        .sesen-sop-page .sop-faq-answer p { font-size: 16px; line-height: 1.75; color: var(--sop-body); }

        .sesen-sop-page .sop-final-wrap {
          padding-top: 84px;
          padding-bottom: 84px;
        }
        .sesen-sop-page .sop-final-card {
          position: relative;
          overflow: hidden;
          padding: 68px 72px;
          border-radius: 30px;
          background: linear-gradient(125deg, #17264D 0%, #253F8F 58%, #3659BB 100%);
          color: #fff;
        }
        .sesen-sop-page .sop-final-card::after {
          content: "";
          position: absolute;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(200,214,255,.24);
          border-radius: 50%;
          right: -90px;
          top: -120px;
        }
        .sesen-sop-page .sop-final-card::before {
          content: "";
          position: absolute;
          width: 230px;
          height: 230px;
          border: 1px solid rgba(200,214,255,.16);
          border-radius: 50%;
          right: 34px;
          bottom: -145px;
        }
        .sesen-sop-page .sop-final-content { position: relative; z-index: 2; max-width: 840px; }
        .sesen-sop-page .sop-final-card h2 { color: #fff; max-width: 760px; }
        .sesen-sop-page .sop-final-card p {
          margin-top: 20px;
          max-width: 790px;
          color: #DCE5FA;
          font-size: 18px;
          line-height: 1.72;
        }
        .sesen-sop-page .sop-final-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin-top: 26px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
        .sesen-sop-page .sop-final-points span { display: inline-flex; align-items: center; gap: 7px; }
        .sesen-sop-page .sop-final-points svg { width: 16px; height: 16px; color: var(--sop-light-blue); }
        .sesen-sop-page .sop-final-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 32px; }

        @media (max-width: 1100px) {
          .sesen-sop-page .sop-shell { padding-left: 40px; padding-right: 40px; }
          .sesen-sop-page .sop-hero-grid { gap: 38px; grid-template-columns: 1.08fr .92fr; }
          .sesen-sop-page .sop-scope-row { grid-template-columns: 250px 1fr; gap: 36px; }
          .sesen-sop-page .sop-scope-content { grid-template-columns: 1fr; gap: 22px; }
          .sesen-sop-page .sop-scope-links { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .sesen-sop-page .sop-version-benefits { grid-template-columns: repeat(3, 1fr); }
          .sesen-sop-page .sop-version-benefit:nth-child(3) { border-right: 0; }
          .sesen-sop-page .sop-version-benefit:nth-child(n+4) { border-top: 1px solid rgba(200,214,255,.18); }
          .sesen-sop-page .sop-quality-inner { grid-template-columns: 1.2fr repeat(2, 1fr); }
          .sesen-sop-page .sop-quality-item:nth-child(n+4) { border-top: 1px solid var(--sop-divider); }
          .sesen-sop-page .sop-quality-item:nth-child(4) { border-left: 0; }
        }

        @media (max-width: 860px) {
          .sesen-sop-page .sop-shell { padding-left: 30px; padding-right: 30px; }
          .sesen-sop-page .sop-section { padding-top: 80px; padding-bottom: 80px; }
          .sesen-sop-page .sop-hero { padding-top: 80px; padding-bottom: 80px; }
          .sesen-sop-page h1 { font-size: 44px; }
          .sesen-sop-page h2 { font-size: 34px; }
          .sesen-sop-page .sop-hero-grid,
          .sesen-sop-page .sop-controlled-grid,
          .sesen-sop-page .sop-connected-grid,
          .sesen-sop-page .sop-term-grid,
          .sesen-sop-page .sop-version-grid,
          .sesen-sop-page .sop-rollout-grid,
          .sesen-sop-page .sop-training-grid,
          .sesen-sop-page .sop-reg-grid,
          .sesen-sop-page .sop-tech-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .sesen-sop-page .sop-hero-copy { max-width: 760px; }
          .sesen-sop-page .sop-hero-art { width: min(100%, 580px); max-width: 580px; justify-self: center; }
          .sesen-sop-page .sop-connected-copy,
          .sesen-sop-page .sop-term-copy,
          .sesen-sop-page .sop-rollout-copy,
          .sesen-sop-page .sop-training-copy,
          .sesen-sop-page .sop-reg-copy,
          .sesen-sop-page .sop-tech-copy,
          .sesen-sop-page .sop-version-copy { max-width: 760px; }
          .sesen-sop-page .sop-trust-inner { grid-template-columns: repeat(2, 1fr); }
          .sesen-sop-page .sop-trust-item { border-bottom: 1px solid var(--sop-divider); }
          .sesen-sop-page .sop-trust-item:nth-child(2) { border-right: 0; }
          .sesen-sop-page .sop-trust-item:nth-child(n+3) { border-bottom: 0; }
          .sesen-sop-page .sop-trust-item:nth-child(3) { padding-left: 0; }
          .sesen-sop-page .sop-lifecycle-flow { grid-template-columns: repeat(2, 1fr); }
          .sesen-sop-page .sop-scope-row { grid-template-columns: 1fr; gap: 26px; }
          .sesen-sop-page .sop-scope-content { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-ecosystem { margin: 0 auto; }
          .sesen-sop-page .sop-workflow-row { grid-template-columns: 76px 245px 1fr; gap: 18px; }
          .sesen-sop-page .version-track { grid-template-columns: 1fr; }
          .sesen-sop-page .version-arrow { transform: rotate(90deg); }
          .sesen-sop-page .sop-reg-panel { border-left: 0; padding-left: 0; border-top: 1px solid var(--sop-border); padding-top: 34px; }
          .sesen-sop-page .sop-related-grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-sop-page .sop-quality-inner { grid-template-columns: 1fr 1fr; }
          .sesen-sop-page .sop-quality-intro { grid-column: 1 / -1; padding: 28px 0; }
          .sesen-sop-page .sop-quality-item:nth-child(n) { border-top: 1px solid var(--sop-divider); border-left: 1px solid var(--sop-divider); }
          .sesen-sop-page .sop-quality-item:nth-child(even) { border-left: 0; }
        }

        @media (max-width: 640px) {
          .sesen-sop-page .sop-shell { padding-left: 20px; padding-right: 20px; }
          .sesen-sop-page .sop-section,
          .sesen-sop-page .sop-section.compact { padding-top: 68px; padding-bottom: 68px; }
          .sesen-sop-page .sop-hero { padding-top: 68px; padding-bottom: 68px; }
          .sesen-sop-page h1 { font-size: 42px; line-height: 1.24; }
          .sesen-sop-page h2 { font-size: 32px; line-height: 1.3; }
          .sesen-sop-page h3 { font-size: 21px; }
          .sesen-sop-page .sop-hero-copy .sop-lead { font-size: 18px; }
          .sesen-sop-page .sop-hero-copy .sop-support { font-size: 17px; }
          .sesen-sop-page .sop-hero-actions { align-items: stretch; flex-direction: column; gap: 14px; }
          .sesen-sop-page .sop-hero-actions .sop-btn { width: 100%; }
          .sesen-sop-page .sop-hero-actions .sop-arrow-link { min-height: 46px; justify-content: center; }
          .sesen-sop-page .sop-arrow-link { min-height: 44px; }
          .sesen-sop-page .sop-hero-art { margin-top: 2px; }
          .sesen-sop-page .sop-section-head { margin-bottom: 38px; }
          .sesen-sop-page .sop-section-head p { font-size: 17px; }
          .sesen-sop-page .mobile-center .sop-section-head:not(.technical),
          .sesen-sop-page .mobile-center.sop-section-head:not(.technical) { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-sop-page .mobile-center .sop-section-head:not(.technical) .sop-eyebrow,
          .sesen-sop-page .mobile-center.sop-section-head:not(.technical) .sop-eyebrow { text-align: center; }
          .sesen-sop-page .mobile-center .sop-section-head:not(.technical) p,
          .sesen-sop-page .mobile-center.sop-section-head:not(.technical) p { text-align: left; }
          .sesen-sop-page .mobile-center .sop-copy-block > .sop-eyebrow,
          .sesen-sop-page .mobile-center .sop-connected-copy > .sop-eyebrow,
          .sesen-sop-page .mobile-center .sop-term-copy > .sop-eyebrow,
          .sesen-sop-page .mobile-center .sop-rollout-copy > .sop-eyebrow,
          .sesen-sop-page .mobile-center .sop-training-copy > .sop-eyebrow,
          .sesen-sop-page .mobile-center .sop-tech-copy > .sop-eyebrow {
            display: block;
            text-align: center;
          }
          .sesen-sop-page .mobile-center .sop-copy-block > h2,
          .sesen-sop-page .mobile-center .sop-connected-copy > h2,
          .sesen-sop-page .mobile-center .sop-term-copy > h2,
          .sesen-sop-page .mobile-center .sop-rollout-copy > h2,
          .sesen-sop-page .mobile-center .sop-training-copy > h2,
          .sesen-sop-page .mobile-center .sop-tech-copy > h2 {
            text-align: center;
          }
          .sesen-sop-page .sop-trust-inner { grid-template-columns: 1fr; padding-top: 10px; padding-bottom: 10px; }
          .sesen-sop-page .sop-trust-item,
          .sesen-sop-page .sop-trust-item:first-child,
          .sesen-sop-page .sop-trust-item:nth-child(3),
          .sesen-sop-page .sop-trust-item:last-child { padding: 18px 0; border-right: 0; border-bottom: 1px solid var(--sop-divider); }
          .sesen-sop-page .sop-trust-item:last-child { border-bottom: 0; }
          .sesen-sop-page .sop-definition-list { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-lifecycle-panel { padding: 24px 18px; }
          .sesen-sop-page .sop-lifecycle-title { align-items: flex-start; flex-direction: column; gap: 6px; }
          .sesen-sop-page .sop-lifecycle-flow { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-life-step { min-height: 82px; }
          .sesen-sop-page .sop-scope-row { padding: 32px 0; }
          .sesen-sop-page .sop-scope-items { grid-template-columns: 1fr; gap: 9px; }
          .sesen-sop-page .sop-scope-links { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-ecosystem {
            grid-template-columns: 1fr;
            gap: 26px;
          }
          .sesen-sop-page .sop-related-controls {
            padding: 22px 0 0;
            border-top: 1px dashed var(--sop-blue-mid);
          }
          .sesen-sop-page .sop-related-controls::before { display: none; }
          .sesen-sop-page .sop-related-controls-label { margin-bottom: 14px; }
          .sesen-sop-page .sop-related-controls-list {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 11px 18px;
          }
          .sesen-sop-page .sop-related-controls-list span {
            padding-left: 12px;
            font-size: 13px;
          }
          .sesen-sop-page .sop-related-controls-list span::before {
            left: 0;
            top: .64em;
            width: 5px;
            height: 5px;
            border: 0;
            border-radius: 50%;
            background: var(--sop-blue);
          }
          .sesen-sop-page .sop-workflow-row { grid-template-columns: 58px 1fr; gap: 12px 16px; padding: 26px 0; }
          .sesen-sop-page .sop-workflow-number { grid-row: 1 / 3; font-size: 27px; }
          .sesen-sop-page .sop-workflow-row h3 { grid-column: 2; }
          .sesen-sop-page .sop-workflow-row p { grid-column: 2; }
          .sesen-sop-page .sop-term-graphic { max-width: 420px; }
          .sesen-sop-page .sop-term-node { width: 114px; font-size: 12px; }
          .sesen-sop-page .sop-term-center { width: 148px; height: 148px; }
          .sesen-sop-page .sop-term-center strong { font-size: 18px; }
          .sesen-sop-page .sop-version-graphic { padding: 24px 18px; }
          .sesen-sop-page .sop-version-benefits { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-version-benefit,
          .sesen-sop-page .sop-version-benefit:nth-child(n) { border-right: 0; border-top: 1px solid rgba(200,214,255,.18); margin-right: 0; padding: 22px 0 0; margin-top: 22px; }
          .sesen-sop-page .sop-rollout-item { grid-template-columns: 48px 1fr; }
          .sesen-sop-page .sop-training-flow { padding: 24px 18px; }
          .sesen-sop-page .sop-reg-list { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-tech-stack { padding: 22px 18px; }
          .sesen-sop-page .sop-tech-layer { grid-template-columns: 1fr; gap: 5px; }
          .sesen-sop-page .sop-why-grid { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-why-item,
          .sesen-sop-page .sop-why-item:nth-child(even),
          .sesen-sop-page .sop-why-item:nth-child(odd) { padding: 26px 0; border-right: 0; }
          .sesen-sop-page .sop-quality-inner { grid-template-columns: 1fr; }
          .sesen-sop-page .sop-quality-intro { grid-column: auto; }
          .sesen-sop-page .sop-quality-item:nth-child(n) { border-left: 0; padding: 20px 0; min-height: auto; }
          .sesen-sop-page .sop-related-grid { grid-template-columns: 1fr; gap: 0; }
          .sesen-sop-page .sop-related-item { min-height: 0; padding: 26px 0; }
          .sesen-sop-page .sop-related-item .sop-arrow-link { margin-top: 18px; padding-top: 0; }
          .sesen-sop-page .sop-faq-question { font-size: 18px; padding: 21px 0; }
          .sesen-sop-page .sop-faq-answer { padding-right: 0; }
          .sesen-sop-page .sop-final-wrap { padding-top: 68px; padding-bottom: 68px; }
          .sesen-sop-page .sop-final-card { padding: 48px 24px; border-radius: 26px; }
          .sesen-sop-page .sop-final-content > h2 { text-align: center; }
          .sesen-sop-page .sop-final-card p { font-size: 17px; text-align: left; }
          .sesen-sop-page .sop-final-actions { flex-direction: column; }
          .sesen-sop-page .sop-final-actions .sop-btn { width: 100%; }
        }

        @media (max-width: 390px) {
          .sesen-sop-page h1 { font-size: 40px; }
          .sesen-sop-page h2 { font-size: 30px; }
          .sesen-sop-page .sop-doc-node { padding-left: 15px; padding-right: 15px; gap: 12px; }
          .sesen-sop-page .sop-doc-node strong { font-size: 16px; }
          .sesen-sop-page .sop-related-controls-list { gap: 10px 14px; }
          .sesen-sop-page .sop-term-graphic { max-width: 350px; }
          .sesen-sop-page .sop-term-node { width: 104px; min-height: 48px; font-size: 11px; padding: 7px; }
          .sesen-sop-page .sop-term-center { width: 134px; height: 134px; }
          .sesen-sop-page .sop-term-center strong { font-size: 17px; }
          .sesen-sop-page .sop-term-center .term-small { font-size: 9px; }
        }

        @media (max-width: 350px) {
          .sesen-sop-page h1 { font-size: 38px; }
          .sesen-sop-page .sop-term-graphic {
            max-width: none;
            aspect-ratio: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }
          .sesen-sop-page .sop-term-graphic > svg { display: none; }
          .sesen-sop-page .sop-term-center,
          .sesen-sop-page .sop-term-node,
          .sesen-sop-page .sop-term-node.top,
          .sesen-sop-page .sop-term-node.right,
          .sesen-sop-page .sop-term-node.bottom,
          .sesen-sop-page .sop-term-node.left {
            position: static;
            transform: none;
            width: auto;
            height: auto;
            min-height: 62px;
          }
          .sesen-sop-page .sop-term-center {
            grid-column: 1 / -1;
            min-height: 86px;
            border-radius: 18px;
          }
          .sesen-sop-page .sop-related-controls-list { grid-template-columns: 1fr; }
        }

        @media (max-width: 340px) {
          .sesen-sop-page h1 { font-size: 38px; }
          .sesen-sop-page h2 { font-size: 30px; }
          .sesen-sop-page .sop-hero-copy .sop-lead { font-size: 17px; }
          .sesen-sop-page .sop-term-resources span { font-size: 12px; padding: 8px 10px; }
          .sesen-sop-page .sop-final-card::before,
          .sesen-sop-page .sop-final-card::after { opacity: .55; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-sop-page .sop-btn,
          .sesen-sop-page .sop-arrow-link svg { transition: none; }
        }
      `}</style>

      <section className="sop-hero">
        <div className="sop-shell sop-hero-grid">
          <div className="sop-hero-copy">
            <span className="sop-eyebrow">CONTROLLED LIFE SCIENCES CONTENT</span>
            <h1>SOP Translation Services for Life Sciences</h1>
            <p className="sop-lead">Translate, review, and maintain Standard Operating Procedures across languages with specialized life sciences expertise, controlled terminology, structured quality review, and version-aware multilingual workflows.</p>
            <p className="sop-support">Sesen supports pharmaceutical, biotechnology, medical device, IVD, CRO, clinical research, quality, and manufacturing teams with SOP translation services designed for controlled content—not generic documents.</p>
            <div className="sop-hero-actions">
              <a className="sop-btn primary" href={LINKS.quote}>REQUEST A QUOTE</a>
              <ArrowLink href={LINKS.sales}>Talk to a Life Sciences Translation Expert</ArrowLink>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sop-trust-band" aria-label="Sesen SOP translation capabilities">
        <div className="sop-shell sop-trust-inner">
          <div className="sop-trust-item"><div className="sop-trust-icon"><Icon name="quality"/></div><div><strong>Life Sciences Specialization</strong><span>Regulated clinical, quality, manufacturing, and device content</span></div></div>
          <div className="sop-trust-item"><div className="sop-trust-icon"><Icon name="review"/></div><div><strong>Professional Review</strong><span>Specialized translation, bilingual review, and QA support</span></div></div>
          <div className="sop-trust-item"><div className="sop-trust-icon"><Icon name="layers"/></div><div><strong>Version-Aware Workflows</strong><span>Continuity across revisions and approved language assets</span></div></div>
          <div className="sop-trust-item"><div className="sop-trust-icon"><Icon name="globe"/></div><div><strong>Global Program Support</strong><span>Coordinated multilingual delivery across sites and teams</span></div></div>
        </div>
      </section>

      <section className="sop-section mobile-center">
        <div className="sop-shell sop-controlled-grid">
          <div className="sop-copy-block">
            <span className="sop-eyebrow">BEYOND DOCUMENT TRANSLATION</span>
            <h2>SOP Translation Is Controlled-Document Translation</h2>
            <p>Standard Operating Procedures define how critical work is performed. They establish responsibilities, processes, controls, sequence, acceptance criteria, documentation requirements, and other instructions teams rely on to execute work consistently.</p>
            <p>A translated SOP therefore needs to preserve more than sentence-level meaning. Roles, steps, terminology, warnings, conditions, references, forms, and revision information must remain aligned with the approved source content.</p>
            <div className="sop-definition-list">
              {["Roles and responsibilities", "Procedural sequence", "Technical terminology", "Warnings and conditions", "Forms and references", "Revision information"].map(item => <div className="sop-definition-item" key={item}><Icon name="check"/><span>{item}</span></div>)}
            </div>
          </div>
          <div className="sop-lifecycle-panel">
            <div className="sop-lifecycle-title"><strong>A Multilingual SOP Lifecycle</strong><span>8-STAGE WORKFLOW</span></div>
            <div className="sop-lifecycle-flow">
              {["Source SOP", "Terminology", "Translation", "Review", "Formatting", "Change Control", "Approval Support", "Multilingual Rollout"].map((item, i) => <div className="sop-life-step" key={item}><small>{String(i + 1).padStart(2,"0")}</small><strong>{item}</strong></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sop-section soft">
        <div className="sop-shell">
          <div className="sop-section-head technical">
            <h2>SOP Translation Across Regulated Workflows</h2>
            <p>SOPs extend across nearly every regulated life sciences function. Sesen supports controlled procedures used throughout development, manufacturing, clinical research, quality systems, laboratories, medical devices, and safety operations.</p>
          </div>
          <div className="sop-scope-list">
            {scopeGroups.map(group => (
              <div className="sop-scope-row" key={group.title}>
                <div className="sop-scope-heading"><div className="sop-icon-box"><Icon name={group.icon}/></div><h3>{group.title}</h3></div>
                <div className="sop-scope-content">
                  <div className="sop-scope-items">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                  <div className="sop-scope-links">{group.links.map(([label, href]) => <ArrowLink key={label} href={href}>{label}</ArrowLink>)}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sop-section pale mobile-center">
        <div className="sop-shell sop-connected-grid">
          <div className="sop-connected-copy">
            <span className="sop-eyebrow">CONNECTED CONTROLLED CONTENT</span>
            <h2>An SOP Rarely Stands Alone</h2>
            <p>Controlled-document structures vary by organization, but the relationships are familiar. A policy can define what is required. An SOP explains how a process is carried out. Work instructions add task-level detail. Forms and checklists capture execution. Records document what happened. Training helps personnel understand the procedure.</p>
            <p>When terminology changes in an SOP but remains different in related content, multilingual users can encounter unnecessary inconsistency. Sesen helps maintain approved language across connected documentation rather than treating each file as an isolated translation.</p>
            <div className="sop-connected-note">The objective is linguistic continuity across the documentation system: consistent roles, equipment names, warnings, process terms, and procedural language wherever they reappear.</div>
          </div>
          <EcosystemGraphic />
        </div>
      </section>

      <section className="sop-section navy">
        <div className="sop-shell">
          <div className="sop-section-head technical">
            <h2>From Approved Source to Multilingual Rollout</h2>
            <p>Every SOP program has its own languages, formats, terminology resources, reviewers, and approval processes. Sesen configures the linguistic workflow around those requirements while maintaining structured translation and quality controls.</p>
          </div>
          <div className="sop-workflow-list">
            {workflow.map(step => <div className="sop-workflow-row" key={step.n}><div className="sop-workflow-number">{step.n}</div><h3>{step.title}</h3><p>{step.text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sop-section mobile-center">
        <div className="sop-shell sop-term-grid">
          <div className="sop-term-copy">
            <span className="sop-eyebrow">TERMINOLOGY GOVERNANCE</span>
            <h2>Procedural Accuracy Starts With Terminology Consistency</h2>
            <p>An SOP may use the same technical term dozens of times—and that term may also appear across work instructions, forms, training, quality records, product documentation, and future revisions.</p>
            <p>Sesen can apply client-approved language resources to help recurring terminology remain consistent across related multilingual content.</p>
            <div className="sop-term-resources">{["Client glossaries", "Terminology databases", "Translation memory", "Style guides", "Product references", "Legacy translations", "Reviewer decisions"].map(x => <span key={x}>{x}</span>)}</div>
            <div className="sop-term-statement">Consistency within one SOP matters. Continuity across SOP families, sites, languages, and revisions matters even more.</div>
          </div>
          <TerminologyGraphic />
        </div>
      </section>

      <section className="sop-section navy">
        <div className="sop-shell">
          <div className="sop-version-grid">
            <div className="sop-version-copy">
              <h2>Version Control for SOP Translation and Updates</h2>
              <p>Controlled procedures evolve. When the source SOP changes, multilingual teams need to understand what changed without introducing unnecessary differences into content that did not.</p>
              <p>Sesen can align the revised source with previous source content, existing translations, approved terminology, and translation memory within a structured update workflow.</p>
              <div className="sop-version-tagline">Translate the change without losing the history.</div>
            </div>
            <VersionGraphic />
          </div>
          <div className="sop-version-benefits">
            {[
              ["Preserve Approved Language", "Reuse appropriate previously translated content where the source meaning remains unchanged."],
              ["Focus Review on Changes", "Direct linguistic attention toward new and revised source content."],
              ["Maintain Terminology Continuity", "Carry approved terminology and reviewer decisions into future versions."],
              ["Coordinate Languages", "Manage multiple target languages against the same approved source revision."],
              ["Build Better Language Assets", "Capture approved translations and terminology for future SOPs and related content."],
            ].map(([title,text]) => <div className="sop-version-benefit" key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="sop-section soft mobile-center">
        <div className="sop-shell sop-rollout-grid">
          <div className="sop-rollout-copy">
            <span className="sop-eyebrow">ENTERPRISE MULTILINGUAL DELIVERY</span>
            <h2>Consistent SOPs Across Sites, Teams, and Languages</h2>
            <p>Global SOP programs quickly become more complex than a collection of files. Each additional language, reviewer, site, document relationship, and source revision introduces another point that needs to remain aligned.</p>
            <p>Sesen supports both individual SOP projects and recurring multilingual programs with centralized workflows designed around approved terminology, reusable language assets, structured review, and ongoing maintenance.</p>
            <div className="sop-callout">The goal is a multilingual program that becomes more consistent and manageable as the documentation lifecycle continues.</div>
          </div>
          <div className="sop-rollout-list">
            {rolloutItems.map((item, i) => <div className="sop-rollout-item" key={item.title}><div className="sop-rollout-icon"><Icon name={i === 0 ? "globe" : i === 1 ? "layers" : i === 2 ? "review" : "quality"}/></div><div><strong>{item.title}</strong><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="sop-section mobile-center">
        <div className="sop-shell sop-training-grid">
          <div className="sop-training-copy">
            <span className="sop-eyebrow">FROM PROCEDURE TO PRACTICE</span>
            <h2>Connect Approved SOP Language With Workforce Training</h2>
            <p>SOPs often become source or reference content for onboarding, GMP and GxP training, refresher courses, site training, job aids, eLearning, assessments, procedural videos, and competency materials.</p>
            <p>When SOP terminology and training terminology diverge, multilingual employees may encounter different language for the same process. Coordinated language assets help maintain continuity from controlled procedure to learning content.</p>
            <ArrowLink href={LINKS.elearning}>eLearning & Training Translation Services</ArrowLink>
          </div>
          <div className="sop-training-flow">
            <div className="sop-training-flow-head">CONTROLLED KNOWLEDGE FLOW</div>
            {[["01","Approved SOP"],["02","Training Content"],["03","Localized Learning Assets"],["04","Workforce Use"]].map(([n,t]) => <div className="sop-training-step" key={t}><span>{n}</span><strong>{t}</strong></div>)}
          </div>
        </div>
      </section>

      <section className="sop-section pale">
        <div className="sop-shell sop-reg-grid">
          <div className="sop-reg-copy">
            <span className="sop-eyebrow">REGULATED OPERATING CONTEXT</span>
            <h2>SOP Translation for GMP, GxP, Clinical, and Quality Environments</h2>
            <p>Life sciences SOPs can operate within pharmaceutical GMP, clinical GCP, medical-device quality systems, company-specific QMS requirements, and other regulated frameworks.</p>
            <p>Sesen supports translation workflows used within these environments without treating translation as a substitute for the customer's regulatory, quality, document-control, or approval responsibilities.</p>
          </div>
          <div className="sop-reg-panel">
            <h3>Relevant Context May Include</h3>
            <div className="sop-reg-list">
              {["GMP and other GxP environments", "FDA quality requirements", "EU GMP documentation", "FDA QMSR (21 CFR Part 820)", "ISO 13485 quality systems", "ICH Good Clinical Practice (GCP)", "Company-specific QMS requirements", "Market- and site-specific operational needs"].map(x => <div key={x}><Icon name="check"/><span>{x}</span></div>)}
            </div>
            <div className="sop-reg-note">The appropriate translation workflow depends on the content, intended use, audience, languages, and your quality requirements. Sesen tailors the linguistic workflow to those needs without substituting for your organization’s regulatory or quality decisions.</div>
          </div>
        </div>
      </section>

      <section className="sop-section mobile-center">
        <div className="sop-shell sop-tech-grid">
          <div className="sop-tech-copy">
            <span className="sop-eyebrow">PROFESSIONAL EXPERTISE + SMARTER WORKFLOWS</span>
            <h2>Human Expertise Remains Central to Controlled SOP Translation</h2>
            <p>Qualified linguists and reviewers evaluate meaning, terminology, context, and linguistic quality. Technology supports those professionals by helping manage repeated content, approved terminology, version changes, and quality checks across larger multilingual programs.</p>
            <p><strong>SesenGPT and other AI-enabled technologies support appropriate parts of the workflow; they do not replace the professional judgment required for controlled life sciences content.</strong></p>
          </div>
          <div className="sop-tech-stack">
            {[
              ["LANGUAGE ASSETS", "Translation memory, terminology management, approved-content reuse, style guidance, and reviewer decisions."],
              ["WORKFLOW SUPPORT", "Version comparison, repeated-content identification, structured review, and multilingual coordination."],
              ["QUALITY SUPPORT", "Terminology checks, numeric checks, missing-content checks, and automated linguistic QA."],
              ["AI-ASSISTED CAPABILITIES", "Appropriate translation and quality support within a professional human review workflow."],
            ].map(([label, text]) => <div className="sop-tech-layer" key={label}><span>{label}</span><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sop-section soft mobile-center">
        <div className="sop-shell">
          <div className="sop-section-head center">
            <h2>Specialized Translation for Controlled Life Sciences Content</h2>
            <p>Sesen combines life sciences expertise, controlled terminology, professional review, reusable language assets, and enterprise multilingual workflows to support SOP content throughout its lifecycle.</p>
          </div>
          <div className="sop-why-grid">
            {differentiators.map(([title, text]) => <div className="sop-why-item" key={title}><div className="sop-why-mark"><Icon name="check"/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="sop-quality-band" aria-label="Quality and global delivery credentials">
        <div className="sop-shell sop-quality-inner">
          <div className="sop-quality-intro"><strong>Quality and Global Delivery</strong><span>Certified quality systems and multilingual life sciences support.</span></div>
          <div className="sop-quality-item"><strong>ISO 17100</strong><span>Translation-service quality processes</span></div>
          <div className="sop-quality-item"><strong>ISO 9001:2015</strong><span>Quality management systems</span></div>
          <div className="sop-quality-item"><strong>ISO 13485:2016</strong><span>Medical device quality expertise</span></div>
          <div className="sop-quality-item"><strong>150+ Languages</strong><span>Global life sciences coverage</span></div>
        </div>
      </section>

      <section className="sop-section mobile-center">
        <div className="sop-shell">
          <div className="sop-section-head center">
            <h2>Related Life Sciences Translation Services</h2>
            <p>SOP translation often intersects with broader regulatory, quality, manufacturing, clinical, device, and training workflows.</p>
          </div>
          <div className="sop-related-grid">
            {relatedServices.map(([title,text,href]) => <div className="sop-related-item" key={title}><h3>{title}</h3><p>{text}</p><ArrowLink href={href}>Explore {title}</ArrowLink></div>)}
          </div>
          <div className="sop-related-training-link"><ArrowLink href={LINKS.elearning}>eLearning & Training Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="sop-section soft">
        <div className="sop-shell sop-faq-wrap">
          <div className="sop-section-head technical">
            <h2>SOP Translation FAQs</h2>
          </div>
          <div className="sop-faq-list">
            {faqs.map(([q,a], index) => <FAQItem key={q} q={q} a={a} index={index}/>) }
          </div>
        </div>
      </section>

      <section className="sop-final-wrap">
        <div className="sop-shell">
          <div className="sop-final-card">
            <div className="sop-final-content">
              <h2>Keep Multilingual SOPs Controlled Through Every Revision</h2>
              <p>Whether you are translating one critical procedure, deploying an SOP family across international sites, or maintaining multilingual documents through recurring revisions, Sesen brings together specialized life sciences linguists, controlled terminology, structured review, multilingual formatting, version-aware workflows, and intelligent language technologies.</p>
              <div className="sop-final-points">
                {['Terminology continuity','Version-aware updates','Professional review','Global rollout support'].map(x => <span key={x}><Icon name="check"/>{x}</span>)}
              </div>
              <div className="sop-final-actions">
                <a className="sop-btn primary" href={LINKS.quote}>REQUEST A QUOTE</a>
                <a className="sop-btn light" href={LINKS.sales}>TALK WITH TEAM SESEN</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
