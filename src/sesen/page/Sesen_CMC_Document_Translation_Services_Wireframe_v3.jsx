import React from "react";

const ROOT = "sesen-page-cmc";

const links = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  pharmaceutical: "https://www.sesen.com/pharmaceutical-translation-services/",
  biopharma: "https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  submission: "https://www.sesen.com/regulatory-submission-translation-services/",
  ctd: "https://www.sesen.com/ectd-ctd-translation-services/",
  manufacturing: "https://www.sesen.com/pharmaceutical-manufacturing-translation/",
  gmp: "https://www.sesen.com/gmp-translation-services/",
  sop: "https://www.sesen.com/sop-translation-services/",
  quality: "https://www.sesen.com/quality-assurance-audit-translation/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  qualitySecurity: "https://www.sesen.com/quality-compliance-security/",
};

const lifecycle = [
  "Drug Substance",
  "Drug Product",
  "Manufacturing Process",
  "Controls",
  "Specifications",
  "Analytical Methods",
  "Validation",
  "Stability",
  "Change Management",
];

const documentGroups = [
  {
    title: "Drug Substance Documentation",
    intro:
      "Maintain consistent terminology for the active substance from manufacture and characterization through control and stability.",
    items: [
      "Drug substance manufacturing descriptions",
      "Starting material and raw material documentation",
      "Synthesis and production process documentation",
      "Process controls and critical intermediates",
      "Characterization and impurity documentation",
      "Drug substance specifications",
      "Analytical procedures and reference standards",
      "Container-closure and stability documentation",
    ],
  },
  {
    title: "Drug Product Documentation",
    intro:
      "Connect formulation and pharmaceutical development with manufacturing, control strategies, analytical testing, and stability.",
    items: [
      "Qualitative and quantitative composition",
      "Formulation and pharmaceutical development documentation",
      "Drug product manufacturing processes",
      "Manufacturing instructions and in-process controls",
      "Excipient documentation",
      "Finished-product specifications",
      "Analytical procedures and acceptance criteria",
      "Container-closure systems and stability reports",
    ],
  },
  {
    title: "Manufacturing & Process Control",
    intro:
      "Keep CMC terminology aligned with the controlled documentation used to manufacture and transfer the product.",
    items: [
      "Manufacturing process descriptions and process flows",
      "Master manufacturing and batch records",
      "Batch production records and manufacturing instructions",
      "Process-control and equipment documentation",
      "Technology transfer documentation",
      "Process validation and cleaning validation",
      "Manufacturing change documentation",
    ],
    links: [
      ["Pharmaceutical Manufacturing Translation Services", links.manufacturing],
      ["GMP Translation Services", links.gmp],
    ],
  },
  {
    title: "Analytical & Quality Documentation",
    intro:
      "Preserve terminology, units, limits, test conditions, and acceptance criteria across highly structured analytical content.",
    items: [
      "Analytical procedures and test methods",
      "Specifications and acceptance criteria",
      "Method-development documentation",
      "Method-validation protocols and reports",
      "Laboratory procedures and reports",
      "Certificates of Analysis",
      "Reference-standard and sampling documentation",
      "Quality-control documentation",
    ],
  },
  {
    title: "Validation & Stability Documentation",
    intro:
      "Support continuity where validation and stability information is referenced across manufacturing, quality, and regulatory records.",
    items: [
      "Process validation protocols and reports",
      "Analytical method validation",
      "Cleaning validation documentation",
      "Qualification-related documentation",
      "Validation plans and summaries",
      "Stability protocols and reports",
      "Storage-condition and shelf-life supporting content",
      "Ongoing stability documentation",
    ],
  },
  {
    title: "Regulatory & Lifecycle CMC Documentation",
    intro:
      "Translate the quality content that carries CMC information into submissions, health authority interactions, and post-approval updates.",
    items: [
      "CTD and eCTD quality content",
      "CTD Module 3 documentation",
      "Module 2.3 Quality Overall Summary content",
      "Drug Master Files",
      "CMC sections of INDs, NDAs, ANDAs, BLAs, and marketing authorization applications",
      "Amendments, supplements, and variations",
      "Health authority questions and responses",
      "Post-approval and change-related submission content",
    ],
    links: [
      ["Regulatory Submission Translation Services", links.submission],
      ["CTD/eCTD Translation Services", links.ctd],
    ],
  },
];

const workflow = [
  {
    title: "Scope & Source Review",
    text: "Align document types, languages, file formats, intended use, reference materials, prior translations, formatting requirements, and delivery needs before production begins.",
  },
  {
    title: "Reference & Terminology Alignment",
    text: "Bring approved product terminology, existing CTD content, client glossaries, prior submissions, translation memory, and other authorized references into the working environment.",
  },
  {
    title: "Specialized CMC Translation",
    text: "Assign linguists according to language pair, document type, and subject matter—including pharmaceutical, chemical, biological, manufacturing, analytical, and regulatory content.",
  },
  {
    title: "Linguistic & Subject-Matter Review",
    text: "Review meaning, terminology, completeness, scientific context, cross-document consistency, and target-language quality against project requirements.",
  },
  {
    title: "AI-Assisted QA Checks",
    text: "Use technology to help flag potential issues involving terminology, numbers, units, omissions, repeated content, formatting, and completeness for human review.",
  },
  {
    title: "Formatting & File Engineering",
    text: "Preserve tables, numbering, headings, cross-references, controlled-document structures, and other relationships required for downstream use.",
  },
  {
    title: "Final Quality Review",
    text: "Reconcile the completed files against scope, terminology, numerical content, formatting, language completeness, file integrity, and client instructions.",
  },
  {
    title: "Controlled Delivery & Future Updates",
    text: "Maintain applicable linguistic assets so later revisions, lifecycle changes, additional markets, and related documents can build from established terminology and prior decisions.",
  },
];

const relatedServices = [
  ["Pharmaceutical Translation Services", "Translation across the pharmaceutical product lifecycle.", links.pharmaceutical],
  ["Biopharmaceutical & Biosimilar Translation Services", "Specialized support for biologics, biosimilars, comparability, and biopharma programs.", links.biopharma],
  ["Regulatory Translation Services", "Multilingual support for regulated documentation and health authority communication.", links.regulatory],
  ["Regulatory Submission Translation Services", "Coordinated translation for global filing programs and connected submission content.", links.submission],
  ["CTD/eCTD Translation Services", "Translation support across structured CTD and eCTD quality and submission workflows.", links.ctd],
  ["Pharmaceutical Manufacturing Translation Services", "Language support for manufacturing, batch, validation, and technology-transfer documentation.", links.manufacturing],
  ["GMP Translation Services", "Translation for GMP-regulated manufacturing, quality, inspection, and compliance content.", links.gmp],
  ["SOP Translation Services", "Controlled translation of standard operating procedures across regulated environments.", links.sop],
  ["Quality Assurance & Audit Translation", "Support for quality systems, audits, CAPAs, deviations, and inspection-related content.", links.quality],
  ["Medical & Scientific Translation Services", "Specialized translation for scientific, technical, research, and medical content.", links.medicalScientific],
];

const faqs = [
  [
    "What is CMC document translation?",
    "CMC document translation is the specialized translation of Chemistry, Manufacturing and Controls content used to describe a pharmaceutical product’s composition, manufacture, controls, analytical procedures, specifications, validation, stability, and related quality information. Because the same product and process information can appear across many documents, effective CMC translation requires both technical accuracy and terminology consistency.",
  ],
  [
    "What types of CMC documents does Sesen translate?",
    "Sesen translates drug substance and drug product documentation, manufacturing process descriptions, specifications, analytical methods, method and process validation documentation, stability protocols and reports, Certificates of Analysis, quality-control documentation, Drug Master Files, CTD Module 3 content, Quality Overall Summary content, CMC amendments, health authority responses, and post-approval change documentation.",
  ],
  [
    "Can Sesen translate CTD Module 3 content?",
    "Yes. Sesen supports translation of CTD Module 3 quality content while helping maintain terminology consistency with the drug substance, drug product, manufacturing, analytical, validation, specification, and stability documentation that supports the dossier.",
  ],
  [
    "How does Sesen maintain terminology consistency across CMC documents?",
    "Sesen can combine client-approved terminology, product-specific glossaries, translation memories, previous translations, reference documentation, automated consistency checks, and expert human review. Related CMC files can be treated as one connected multilingual documentation set rather than a series of isolated translations.",
  ],
  [
    "Does Sesen translate both small-molecule and biologic CMC documentation?",
    "Yes. Sesen supports small-molecule, biologic, biopharmaceutical, and biosimilar CMC content, with translation resources selected according to the language pair, technical subject matter, document type, and project requirements.",
  ],
  [
    "Can Sesen update previously translated CMC documents after a manufacturing or regulatory change?",
    "Yes. Existing translation memories, glossaries, prior translations, and reference documents can support revised multilingual content so established terminology and prior language decisions remain available as processes, methods, sites, suppliers, specifications, or other CMC elements change.",
  ],
  [
    "How does Sesen handle specifications, analytical methods, numbers, and units?",
    "Sesen applies linguistic review and QA checks to help preserve specifications, acceptance criteria, test names, analytical terminology, numbers, units, ranges, tables, and repeated technical content. Sesen translates and verifies the multilingual representation of the source information; it does not independently modify or scientifically validate the underlying pharmaceutical data.",
  ],
  [
    "Can Sesen support CMC documentation for global regulatory submissions?",
    "Yes. Sesen supports multilingual CMC content used in CTD/eCTD submissions, INDs, NDAs, ANDAs, BLAs, marketing authorization applications, amendments, variations, supplements, and health authority responses, with related regulatory submission services available for broader filing programs.",
  ],
  [
    "Can Sesen translate manufacturing records and GMP documentation related to the same CMC program?",
    "Yes. CMC information often connects directly to batch records, SOPs, manufacturing instructions, validation documentation, quality records, and technology-transfer content. Sesen can support these related document sets while maintaining applicable terminology across the program.",
  ],
  [
    "Does Sesen support analytical procedure and method validation documentation?",
    "Yes. Sesen translates analytical procedures, test methods, method-development documentation, validation protocols and reports, specifications, acceptance criteria, and related laboratory and quality-control content. Where documents belong to the same program, terminology can be aligned across analytical, validation, stability, manufacturing, and regulatory records.",
  ],
  [
    "Can Sesen support ongoing CMC translation programs rather than individual documents?",
    "Yes. Sesen supports recurring multilingual CMC programs involving multiple document types, languages, versions, and submission cycles. Maintaining terminology, translation memory, prior references, and established workflow requirements helps preserve continuity as new documents and revisions are added over time.",
  ],
  [
    "Does Sesen use AI for CMC translation?",
    "Sesen uses AI-enabled tools to support appropriate parts of the workflow, including terminology extraction, translation-memory leverage, reference alignment, consistency analysis, number and unit checks, completeness checks, and quality control. Qualified human linguists and reviewers remain central to contextual decisions and final translation quality.",
  ],
];

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`cmc-link ${className}`} href={href}>
      <span>{children}</span>
      <span aria-hidden="true" className="cmc-link-arrow">→</span>
    </a>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="cmc-check-icon">
      <path d="M5 12.5 9.2 16.7 19 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <svg className="cmc-hero-art" viewBox="0 0 640 500" role="img" aria-labelledby="cmcHeroArtTitle cmcHeroArtDesc">
      <title id="cmcHeroArtTitle">CMC information moving from drug substance through manufacturing and analysis into a regulatory dossier</title>
      <desc id="cmcHeroArtDesc">A molecule, product vial, manufacturing vessel, analytical chart, and structured document are connected by one information pathway.</desc>
      <defs>
        <linearGradient id="cmcFlow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#6F8BE1" />
          <stop offset="1" stopColor="#3659BB" />
        </linearGradient>
      </defs>
      <rect x="22" y="26" width="596" height="448" rx="34" fill="#F7F9FD" stroke="#DDE4F2" />
      <path d="M89 315 C161 260 198 333 266 285 S386 230 455 274 S534 296 574 246" fill="none" stroke="#D4DDF3" strokeWidth="8" strokeLinecap="round" />
      <path d="M89 315 C161 260 198 333 266 285 S386 230 455 274 S534 296 574 246" fill="none" stroke="url(#cmcFlow)" strokeWidth="3.5" strokeLinecap="round" />

      <g transform="translate(64 118)">
        <circle cx="44" cy="40" r="15" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
        <circle cx="98" cy="20" r="11" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2.5" />
        <circle cx="111" cy="73" r="13" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2.5" />
        <circle cx="36" cy="94" r="10" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2.5" />
        <path d="M56 34 86 24M55 52 99 68M40 56 37 84M93 30 106 62" stroke="#68758B" strokeWidth="2.4" strokeLinecap="round" />
        <text x="0" y="134" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#17264D">DRUG SUBSTANCE</text>
      </g>

      <g transform="translate(190 134)">
        <rect x="22" y="12" width="58" height="92" rx="15" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.5" />
        <path d="M34 12V-2h34v14" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M33 59h36" stroke="#6F8BE1" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="51" cy="78" r="8" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2" />
        <text x="4" y="134" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#17264D">DRUG PRODUCT</text>
      </g>

      <g transform="translate(315 112)">
        <path d="M16 39h92v57c0 18-15 33-33 33H49c-18 0-33-15-33-33Z" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.5" />
        <path d="M16 39c0-16 21-28 46-28s46 12 46 28" fill="#EAF0FF" stroke="#3659BB" strokeWidth="2.5" />
        <path d="M62 11v-17M43 63h38M62 42v43" stroke="#68758B" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M45 130v20M80 130v20" stroke="#3659BB" strokeWidth="2.5" strokeLinecap="round" />
        <text x="1" y="178" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#17264D">MANUFACTURING</text>
      </g>

      <g transform="translate(444 120)">
        <rect x="0" y="0" width="102" height="92" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M17 65 36 48 51 57 70 30 86 39" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17 74h69" stroke="#C7D2EA" strokeWidth="2" strokeLinecap="round" />
        <circle cx="70" cy="30" r="4.5" fill="#4B6FD8" />
        <text x="4" y="119" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#17264D">ANALYTICAL / QC</text>
      </g>

      <g transform="translate(472 290)">
        <rect x="0" y="0" width="105" height="130" rx="16" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.5" />
        <path d="M23 29h60M23 48h60M23 67h45M23 92h60M23 110h42" stroke="#AEBAD2" strokeWidth="2.5" strokeLinecap="round" />
        <rect x="17" y="17" width="72" height="60" rx="8" fill="none" stroke="#E0E7F5" strokeWidth="1.5" />
        <circle cx="83" cy="109" r="15" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2" />
        <path d="m76 109 5 5 9-11" fill="none" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="5" y="156" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600" fill="#17264D">CTD MODULE 3</text>
      </g>

      <g fill="#4B6FD8">
        <circle cx="89" cy="315" r="6" />
        <circle cx="266" cy="285" r="6" />
        <circle cx="455" cy="274" r="6" />
        <circle cx="574" cy="246" r="6" />
      </g>
      <text x="69" y="447" fontFamily="Inter, Arial, sans-serif" fontSize="13" fontWeight="600" fill="#68758B" letterSpacing="1.2">ONE CONTROLLED INFORMATION PATH</text>
    </svg>
  );
}

function Module3Diagram() {
  const substance = ["General Information & Characterization", "Manufacture", "Control of Drug Substance", "Reference Standards", "Container Closure", "Stability"];
  const product = ["Pharmaceutical Development", "Manufacture", "Control of Excipients", "Control of Drug Product", "Reference Standards", "Container Closure", "Stability"];
  return (
    <div className="cmc-module-diagram" aria-label="CMC information flowing from drug substance and drug product content into CTD Module 3 and onward to regulatory use">
      <div className="cmc-module-source">
        <span className="cmc-module-kicker">DRUG SUBSTANCE</span>
        <ul>{substance.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="cmc-module-source">
        <span className="cmc-module-kicker">DRUG PRODUCT</span>
        <ul>{product.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      <div className="cmc-module-into" aria-hidden="true"><span>↓</span><span>↓</span></div>
      <div className="cmc-module-center">
        <span className="cmc-module-number">3</span>
        <strong>CTD Module 3</strong>
        <p>Quality / CMC</p>
      </div>
      <div className="cmc-module-output">
        <span>Module 2.3 Quality Overall Summary</span>
        <span>Health Authority Responses</span>
        <span>Lifecycle Submissions</span>
      </div>
    </div>
  );
}

function TerminologyMap() {
  const nodes = [
    "CTD Module 3",
    "Manufacturing Process",
    "Master / Batch Record",
    "Analytical Procedure",
    "Specification",
    "Validation Report",
    "Stability Documentation",
    "SOP / Work Instruction",
    "Authority Response",
  ];
  return (
    <div className="cmc-term-map">
      <div className="cmc-term-core">
        <span>CONTROLLED CMC</span>
        <strong>Term · Value · Specification</strong>
      </div>
      <div className="cmc-term-nodes">
        {nodes.map((node) => (
          <div className="cmc-term-node" key={node}><span aria-hidden="true" />{node}</div>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", technical = false }) {
  return (
    <div className={`cmc-section-heading cmc-heading-${align}${technical ? " cmc-technical-heading" : ""}`}>
      {eyebrow ? <div className="cmc-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function SesenCMCDocumentTranslationServicesWireframe() {
  return (
    <main className={ROOT}>
      <style>{`
        .sesen-page-cmc {
          --cmc-blue: #4B6FD8;
          --cmc-blue-dark: #3659BB;
          --cmc-deep-blue: #253F8F;
          --cmc-mid-blue: #6F8BE1;
          --cmc-soft-blue: #EAF0FF;
          --cmc-pale-blue: #F5F7FF;
          --cmc-navy: #17264D;
          --cmc-ink: #111827;
          --cmc-body: #46546D;
          --cmc-muted: #68758B;
          --cmc-border: #DDE4F2;
          --cmc-divider: #E9EEF8;
          --cmc-surface: #F7F9FD;
          --cmc-white: #FFFFFF;
          --cmc-light-blue: #C8D6FF;
          color: var(--cmc-body);
          background: var(--cmc-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow-x: clip;
        }
        .sesen-page-cmc * { box-sizing: border-box; min-width: 0; }
        .sesen-page-cmc a { overflow-wrap: anywhere; }
        .sesen-page-cmc h1,
        .sesen-page-cmc h2,
        .sesen-page-cmc h3,
        .sesen-page-cmc .cmc-module-kicker,
        .sesen-page-cmc .cmc-modality-label,
        .sesen-page-cmc .cmc-related-title,
        .sesen-page-cmc .cmc-related-desc { overflow-wrap: anywhere; }
        .sesen-page-cmc .cmc-shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        .sesen-page-cmc .cmc-section { padding: 96px 0; }
        .sesen-page-cmc .cmc-section-dense { padding: 80px 0; }
        .sesen-page-cmc .cmc-section-soft { background: var(--cmc-surface); }
        .sesen-page-cmc .cmc-section-blue { background: var(--cmc-pale-blue); }
        .sesen-page-cmc h1,
        .sesen-page-cmc h2,
        .sesen-page-cmc h3 {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          color: var(--cmc-navy);
          font-weight: 500;
          margin: 0;
        }
        .sesen-page-cmc h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
        .sesen-page-cmc h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; }
        .sesen-page-cmc h3 { font-size: 23px; line-height: 1.3; }
        .sesen-page-cmc p { margin: 0; }
        .sesen-page-cmc .cmc-eyebrow {
          color: var(--cmc-blue-dark);
          font-size: 11px;
          line-height: 1.35;
          font-weight: 700;
          letter-spacing: .15em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }
        .sesen-page-cmc .cmc-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 26px;
          border-radius: 999px;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .035em;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .sesen-page-cmc .cmc-btn:focus-visible,
        .sesen-page-cmc .cmc-link:focus-visible,
        .sesen-page-cmc .cmc-related-row:focus-visible,
        .sesen-page-cmc details > summary:focus-visible { outline: 3px solid rgba(75,111,216,.35); outline-offset: 4px; }
        .sesen-page-cmc .cmc-btn-primary { color: #fff; background: var(--cmc-blue); }
        .sesen-page-cmc .cmc-btn-primary:hover { color: #fff; background: var(--cmc-blue-dark); transform: translateY(-1px); }
        .sesen-page-cmc .cmc-btn-secondary { color: var(--cmc-ink); background: #fff; border-color: #C9D4E8; }
        .sesen-page-cmc .cmc-btn-secondary:hover { color: var(--cmc-ink); background: var(--cmc-soft-blue); border-color: #B9C7E2; }
        .sesen-page-cmc .cmc-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--cmc-blue-dark);
          font-weight: 650;
          text-decoration: none;
          line-height: 1.45;
        }
        .sesen-page-cmc .cmc-link:hover { text-decoration: underline; text-underline-offset: 3px; }
        .sesen-page-cmc .cmc-link-arrow { transition: transform .2s ease; }
        .sesen-page-cmc .cmc-link:hover .cmc-link-arrow { transform: translateX(3px); }
        .sesen-page-cmc .cmc-section-heading { max-width: 820px; margin-bottom: 46px; }
        .sesen-page-cmc .cmc-section-heading h2 + p { margin-top: 18px; font-size: 18px; line-height: 1.65; color: var(--cmc-body); }
        .sesen-page-cmc .cmc-heading-center { margin-left: auto; margin-right: auto; text-align: center; }
        .sesen-page-cmc .cmc-heading-left { text-align: left; }

        .sesen-page-cmc .cmc-hero { padding: 92px 0 88px; background: linear-gradient(180deg, #fff 0%, #FBFCFF 100%); border-bottom: 1px solid var(--cmc-divider); }
        .sesen-page-cmc .cmc-hero-grid { display: grid; grid-template-columns: minmax(0, 1.06fr) minmax(420px, .94fr); align-items: center; gap: 62px; }
        .sesen-page-cmc .cmc-hero-copy { max-width: 680px; }
        .sesen-page-cmc .cmc-hero-lead { margin-top: 22px; color: #293954; font-size: 20px; line-height: 1.62; max-width: 670px; }
        .sesen-page-cmc .cmc-hero-support { margin-top: 14px; color: var(--cmc-body); font-size: 17px; line-height: 1.65; max-width: 650px; }
        .sesen-page-cmc .cmc-hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .sesen-page-cmc .cmc-hero-proof { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 22px; margin-top: 34px; padding-top: 27px; border-top: 1px solid var(--cmc-divider); }
        .sesen-page-cmc .cmc-hero-proof-item { display: flex; gap: 10px; align-items: flex-start; color: var(--cmc-body); font-size: 14px; line-height: 1.45; }
        .sesen-page-cmc .cmc-hero-proof-item strong { display: block; color: var(--cmc-navy); font-size: 14px; font-weight: 650; margin-bottom: 3px; }
        .sesen-page-cmc .cmc-check-icon { width: 20px; height: 20px; color: var(--cmc-blue-dark); flex: 0 0 20px; margin-top: 2px; }
        .sesen-page-cmc .cmc-hero-visual { display: flex; justify-content: center; align-items: center; }
        .sesen-page-cmc .cmc-hero-art { width: 100%; max-width: 600px; height: auto; display: block; }

        .sesen-page-cmc .cmc-trust { background: #fff; border-bottom: 1px solid var(--cmc-divider); }
        .sesen-page-cmc .cmc-trust-row { min-height: 82px; display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); align-items: center; gap: 0; }
        .sesen-page-cmc .cmc-trust-item { padding: 8px 18px; text-align: center; color: var(--cmc-navy); font-size: 14px; font-weight: 650; border-right: 1px solid var(--cmc-divider); }
        .sesen-page-cmc .cmc-trust-item:last-child { border-right: 0; }

        .sesen-page-cmc .cmc-authority-grid { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 70px; align-items: start; }
        .sesen-page-cmc .cmc-authority-copy { position: sticky; top: 28px; }
        .sesen-page-cmc .cmc-authority-copy p { margin-top: 22px; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-authority-copy p + p { margin-top: 16px; }
        .sesen-page-cmc .cmc-lifecycle { position: relative; padding-left: 33px; }
        .sesen-page-cmc .cmc-lifecycle::before { content: ""; position: absolute; left: 11px; top: 16px; bottom: 16px; width: 2px; background: linear-gradient(var(--cmc-blue), #BFCBEC); }
        .sesen-page-cmc .cmc-life-item { position: relative; display: grid; grid-template-columns: 28px minmax(0,1fr); gap: 18px; align-items: start; padding: 0 0 25px; }
        .sesen-page-cmc .cmc-life-item:last-child { padding-bottom: 0; }
        .sesen-page-cmc .cmc-life-index { width: 28px; height: 28px; margin-left: -33px; border-radius: 50%; display: grid; place-items: center; background: #fff; border: 2px solid var(--cmc-blue); color: var(--cmc-blue-dark); font-size: 12px; font-weight: 700; z-index: 1; }
        .sesen-page-cmc .cmc-life-title { padding-top: 1px; color: var(--cmc-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; line-height: 1.3; font-weight: 500; }
        .sesen-page-cmc .cmc-life-item:nth-child(9) .cmc-life-index { background: var(--cmc-blue); color: #fff; }
        .sesen-page-cmc .cmc-life-note { margin-top: 30px; padding: 22px 24px; border-radius: 20px; background: var(--cmc-soft-blue); border: 1px solid #D8E1F7; color: var(--cmc-body); font-size: 16px; }
        .sesen-page-cmc .cmc-life-note strong { color: var(--cmc-navy); }

        .sesen-page-cmc .cmc-doc-grid { border-top: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-doc-row { display: grid; grid-template-columns: minmax(250px,.7fr) minmax(0,1.3fr); gap: 56px; padding: 42px 0; border-bottom: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-doc-intro h3 { margin-bottom: 12px; }
        .sesen-page-cmc .cmc-doc-intro p { font-size: 16px; line-height: 1.65; }
        .sesen-page-cmc .cmc-doc-links { display: flex; flex-direction: column; gap: 8px; margin-top: 17px; }
        .sesen-page-cmc .cmc-doc-list { margin: 0; padding: 0; list-style: none; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 11px 26px; }
        .sesen-page-cmc .cmc-doc-list li { position: relative; padding-left: 19px; font-size: 16px; line-height: 1.5; }
        .sesen-page-cmc .cmc-doc-list li::before { content: ""; position: absolute; left: 0; top: .73em; width: 6px; height: 6px; border-radius: 50%; background: var(--cmc-mid-blue); }

        .sesen-page-cmc .cmc-module-wrap { display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 60px; align-items: center; }
        .sesen-page-cmc .cmc-module-copy h2 { margin-bottom: 20px; }
        .sesen-page-cmc .cmc-module-copy p { font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-module-copy p + p { margin-top: 16px; }
        .sesen-page-cmc .cmc-module-copy .cmc-link { margin-top: 23px; }
        .sesen-page-cmc .cmc-module-diagram { position: relative; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); align-items: start; gap: 14px; padding: 28px; border-radius: 30px; border: 1px solid var(--cmc-border); background: #fff; box-shadow: 0 18px 50px rgba(23,38,77,.07); }
        .sesen-page-cmc .cmc-module-source { min-height: 300px; padding: 22px 20px; border-radius: 20px; background: var(--cmc-surface); }
        .sesen-page-cmc .cmc-module-kicker { display: block; color: var(--cmc-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .13em; margin-bottom: 16px; }
        .sesen-page-cmc .cmc-module-source ul { margin: 0; padding: 0; list-style: none; display: grid; gap: 10px; }
        .sesen-page-cmc .cmc-module-source li { font-size: 14px; line-height: 1.4; color: var(--cmc-body); padding-bottom: 9px; border-bottom: 1px solid #E5EAF4; }
        .sesen-page-cmc .cmc-module-source li:last-child { border-bottom: 0; padding-bottom: 0; }
        .sesen-page-cmc .cmc-module-into { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); text-align: center; color: var(--cmc-blue-dark); font-size: 24px; line-height: 1; padding: 2px 0; }
        .sesen-page-cmc .cmc-module-center { grid-column: 1 / -1; width: min(100%, 190px); min-height: 176px; margin: 0 auto; border-radius: 24px; background: var(--cmc-deep-blue); color: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 18px 10px; }
        .sesen-page-cmc .cmc-module-number { display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: #fff; color: var(--cmc-deep-blue); font-weight: 800; font-size: 20px; margin-bottom: 12px; }
        .sesen-page-cmc .cmc-module-center strong { font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; line-height: 1.2; font-weight: 500; }
        .sesen-page-cmc .cmc-module-center p { font-size: 13px; color: var(--cmc-light-blue); margin-top: 5px; }
        .sesen-page-cmc .cmc-module-output { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 10px; padding-top: 12px; border-top: 1px solid var(--cmc-divider); }
        .sesen-page-cmc .cmc-module-output span { text-align: center; border-radius: 12px; padding: 11px 10px; background: var(--cmc-soft-blue); color: var(--cmc-navy); font-size: 12px; font-weight: 650; }

        .sesen-page-cmc .cmc-term-layout { display: grid; grid-template-columns: minmax(0,1.06fr) minmax(330px,.94fr); gap: 66px; align-items: center; }
        .sesen-page-cmc .cmc-term-copy p { margin-top: 20px; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-term-copy ul { margin: 24px 0 0; padding: 0; list-style: none; columns: 2; column-gap: 28px; }
        .sesen-page-cmc .cmc-term-copy li { break-inside: avoid; position: relative; padding: 0 0 10px 18px; font-size: 16px; }
        .sesen-page-cmc .cmc-term-copy li::before { content: ""; position: absolute; left: 0; top: .73em; width: 6px; height: 6px; border-radius: 50%; background: var(--cmc-blue); }
        .sesen-page-cmc .cmc-term-map { border: 1px solid var(--cmc-border); background: #fff; border-radius: 30px; padding: 28px; }
        .sesen-page-cmc .cmc-term-core { text-align: center; border-radius: 22px; padding: 24px 16px; background: var(--cmc-deep-blue); color: #fff; }
        .sesen-page-cmc .cmc-term-core span { display: block; font-size: 10px; letter-spacing: .14em; font-weight: 700; color: var(--cmc-light-blue); }
        .sesen-page-cmc .cmc-term-core strong { display: block; margin-top: 7px; font-family: "Inter Tight", Inter, sans-serif; font-size: 21px; font-weight: 500; }
        .sesen-page-cmc .cmc-term-nodes { margin-top: 18px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
        .sesen-page-cmc .cmc-term-node { min-height: 54px; display: flex; align-items: center; gap: 10px; padding: 10px 12px; border-radius: 14px; background: var(--cmc-surface); color: var(--cmc-navy); font-size: 13px; line-height: 1.35; font-weight: 600; }
        .sesen-page-cmc .cmc-term-node span { width: 8px; height: 8px; flex: 0 0 8px; border-radius: 50%; background: var(--cmc-blue); box-shadow: 0 0 0 4px var(--cmc-soft-blue); }

        .sesen-page-cmc .cmc-modality { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border: 1px solid var(--cmc-border); border-radius: 30px; overflow: hidden; background: #fff; }
        .sesen-page-cmc .cmc-modality-col { padding: 42px; }
        .sesen-page-cmc .cmc-modality-col + .cmc-modality-col { border-left: 1px solid var(--cmc-border); background: #FBFCFF; }
        .sesen-page-cmc .cmc-modality-label { color: var(--cmc-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .14em; margin-bottom: 10px; }
        .sesen-page-cmc .cmc-modality-col p { margin-top: 14px; font-size: 16px; line-height: 1.65; }
        .sesen-page-cmc .cmc-chip-list { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 22px; }
        .sesen-page-cmc .cmc-chip { padding: 8px 11px; border-radius: 999px; background: var(--cmc-soft-blue); color: var(--cmc-navy); font-size: 13px; font-weight: 600; }
        .sesen-page-cmc .cmc-modality-footer { margin-top: 28px; display: flex; justify-content: center; }

        .sesen-page-cmc .cmc-change-grid { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 70px; align-items: start; }
        .sesen-page-cmc .cmc-change-copy p { margin-top: 20px; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-change-types { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        .sesen-page-cmc .cmc-change-types span { padding: 8px 11px; border-radius: 10px; border: 1px solid #D4DDF0; background: #fff; color: var(--cmc-body); font-size: 13px; font-weight: 600; }
        .sesen-page-cmc .cmc-change-flow { display: grid; gap: 12px; }
        .sesen-page-cmc .cmc-change-step { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 16px; align-items: center; padding: 18px 20px; border-radius: 18px; background: #fff; border: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-change-step strong { color: var(--cmc-navy); font-family: "Inter Tight", Inter, sans-serif; font-weight: 500; font-size: 18px; }
        .sesen-page-cmc .cmc-change-dot { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--cmc-soft-blue); color: var(--cmc-blue-dark); font-size: 13px; font-weight: 750; }
        .sesen-page-cmc .cmc-change-step:first-child,
        .sesen-page-cmc .cmc-change-step:last-child { border-color: #BCCAF0; }
        .sesen-page-cmc .cmc-change-step:last-child .cmc-change-dot { background: var(--cmc-blue); color: #fff; }

        .sesen-page-cmc .cmc-workflow { border-top: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-workflow-row { display: grid; grid-template-columns: 78px minmax(230px,.55fr) minmax(0,1.45fr); gap: 28px; padding: 30px 0; border-bottom: 1px solid var(--cmc-border); align-items: start; }
        .sesen-page-cmc .cmc-workflow-num { color: var(--cmc-blue-dark); font-family: "Inter Tight", Inter, sans-serif; font-size: 26px; line-height: 1.2; font-weight: 500; }
        .sesen-page-cmc .cmc-workflow-row h3 { font-size: 21px; }
        .sesen-page-cmc .cmc-workflow-row p { font-size: 16px; line-height: 1.65; }

        .sesen-page-cmc .cmc-quality-grid { display: grid; grid-template-columns: minmax(0,.74fr) minmax(0,1.26fr); gap: 64px; align-items: start; }
        .sesen-page-cmc .cmc-quality-intro p { margin-top: 20px; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-quality-list { border-top: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-quality-item { display: grid; grid-template-columns: 180px minmax(0,1fr); gap: 28px; padding: 25px 0; border-bottom: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-quality-item h3 { font-size: 19px; }
        .sesen-page-cmc .cmc-quality-item p { font-size: 16px; line-height: 1.65; }
        .sesen-page-cmc .cmc-quality-note { margin-top: 26px; border-left: 2px solid var(--cmc-blue); padding: 4px 0 4px 18px; color: var(--cmc-body); font-size: 16px; }

        .sesen-page-cmc .cmc-enterprise-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid var(--cmc-border); border-bottom: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-enterprise-item { padding: 30px 24px; border-right: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-enterprise-item:last-child { border-right: 0; }
        .sesen-page-cmc .cmc-enterprise-item h3 { font-size: 19px; margin-bottom: 11px; }
        .sesen-page-cmc .cmc-enterprise-item p { font-size: 16px; line-height: 1.6; }
        .sesen-page-cmc .cmc-enterprise-link { margin-top: 26px; text-align: center; }

        .sesen-page-cmc .cmc-ai-panel { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); overflow: hidden; border-radius: 30px; background: var(--cmc-deep-blue); color: #fff; }
        .sesen-page-cmc .cmc-ai-copy { padding: 52px; }
        .sesen-page-cmc .cmc-ai-copy h2 { color: #fff; }
        .sesen-page-cmc .cmc-ai-copy p { margin-top: 20px; color: #E1E8FA; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-ai-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-left: 1px solid rgba(255,255,255,.15); }
        .sesen-page-cmc .cmc-ai-item { padding: 28px; border-right: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); }
        .sesen-page-cmc .cmc-ai-item:nth-child(even) { border-right: 0; }
        .sesen-page-cmc .cmc-ai-item:nth-of-type(n+5) { border-bottom: 0; }
        .sesen-page-cmc .cmc-ai-item strong { display: block; font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; font-weight: 500; color: #fff; }
        .sesen-page-cmc .cmc-ai-item p { margin-top: 8px; color: #D2DCF5; font-size: 16px; line-height: 1.6; }
        .sesen-page-cmc .cmc-ai-human { grid-column: 1 / -1; padding: 18px 28px; background: rgba(255,255,255,.07); color: #fff; font-size: 16px; line-height: 1.6; }
        .sesen-page-cmc .cmc-ai-human strong { color: #fff; }

        .sesen-page-cmc .cmc-global-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 68px; align-items: center; }
        .sesen-page-cmc .cmc-global-copy p { margin-top: 20px; font-size: 18px; line-height: 1.7; }
        .sesen-page-cmc .cmc-language-panel { padding: 32px; border-radius: 28px; border: 1px solid var(--cmc-border); background: #fff; }
        .sesen-page-cmc .cmc-language-number { font-family: "Inter Tight", Inter, sans-serif; color: var(--cmc-blue-dark); font-size: 64px; line-height: 1; font-weight: 500; letter-spacing: -1px; }
        .sesen-page-cmc .cmc-language-label { margin-top: 8px; color: var(--cmc-navy); font-size: 18px; font-weight: 650; }
        .sesen-page-cmc .cmc-region-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; margin-top: 24px; }
        .sesen-page-cmc .cmc-region-grid span { padding: 12px 14px; border-radius: 12px; background: var(--cmc-surface); color: var(--cmc-body); font-size: 14px; font-weight: 600; }

        .sesen-page-cmc .cmc-related { border-top: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-related-row { display: grid; grid-template-columns: minmax(250px,.6fr) minmax(0,1.18fr) 34px; gap: 26px; align-items: center; padding: 23px 0; border-bottom: 1px solid var(--cmc-border); text-decoration: none; }
        .sesen-page-cmc .cmc-related-row:hover .cmc-related-title { color: var(--cmc-blue-dark); }
        .sesen-page-cmc .cmc-related-row:focus-visible { outline: 3px solid rgba(75,111,216,.35); outline-offset: 4px; border-radius: 8px; }
        .sesen-page-cmc .cmc-related-title { color: var(--cmc-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; transition: color .2s ease; }
        .sesen-page-cmc .cmc-related-desc { color: var(--cmc-body); font-size: 16px; line-height: 1.6; }
        .sesen-page-cmc .cmc-related-arrow { color: var(--cmc-blue-dark); font-size: 21px; text-align: right; }

        .sesen-page-cmc .cmc-why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0; border: 1px solid var(--cmc-border); border-radius: 28px; overflow: hidden; background: #fff; }
        .sesen-page-cmc .cmc-why-item { padding: 30px; border-right: 1px solid var(--cmc-border); border-bottom: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-why-item:nth-child(3n) { border-right: 0; }
        .sesen-page-cmc .cmc-why-item:nth-last-child(-n+3) { border-bottom: 0; }
        .sesen-page-cmc .cmc-why-item h3 { font-size: 19px; margin-bottom: 10px; }
        .sesen-page-cmc .cmc-why-item p { font-size: 16px; line-height: 1.6; }

        .sesen-page-cmc .cmc-faq { max-width: 940px; margin: 0 auto; border-top: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-faq details { border-bottom: 1px solid var(--cmc-border); }
        .sesen-page-cmc .cmc-faq summary { list-style: none; cursor: pointer; position: relative; padding: 25px 56px 25px 0; color: var(--cmc-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; line-height: 1.4; font-weight: 500; }
        .sesen-page-cmc .cmc-faq summary::-webkit-details-marker { display: none; }
        .sesen-page-cmc .cmc-faq summary::after { content: "+"; position: absolute; right: 4px; top: 50%; transform: translateY(-50%); width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; background: var(--cmc-soft-blue); color: var(--cmc-blue-dark); font-family: Inter, sans-serif; font-size: 20px; font-weight: 500; }
        .sesen-page-cmc .cmc-faq details[open] summary::after { content: "−"; }
        .sesen-page-cmc .cmc-faq-answer { padding: 0 62px 25px 0; color: var(--cmc-body); font-size: 16px; line-height: 1.7; max-width: 840px; }

        .sesen-page-cmc .cmc-final { padding: 80px 0; }
        .sesen-page-cmc .cmc-final-panel { position: relative; overflow: hidden; border-radius: 30px; background: var(--cmc-deep-blue); color: #fff; padding: 60px; }
        .sesen-page-cmc .cmc-final-panel::after { content: ""; position: absolute; width: 300px; height: 300px; border: 1px solid rgba(200,214,255,.22); border-radius: 50%; right: -95px; top: -120px; box-shadow: 0 0 0 50px rgba(200,214,255,.04), 0 0 0 100px rgba(200,214,255,.035); }
        .sesen-page-cmc .cmc-final-content { position: relative; z-index: 1; max-width: 850px; }
        .sesen-page-cmc .cmc-final-panel h2 { color: #fff; }
        .sesen-page-cmc .cmc-final-panel p { margin-top: 20px; color: #D9E2F8; font-size: 18px; line-height: 1.7; max-width: 790px; }
        .sesen-page-cmc .cmc-final-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }

        @media (max-width: 1120px) {
          .sesen-page-cmc .cmc-shell { padding-left: 40px; padding-right: 40px; }
          .sesen-page-cmc .cmc-hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.82fr); gap: 40px; }
          .sesen-page-cmc .cmc-module-wrap { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-module-copy { max-width: 820px; }
          .sesen-page-cmc .cmc-term-layout { grid-template-columns: 1fr 430px; gap: 42px; }
          .sesen-page-cmc .cmc-enterprise-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-page-cmc .cmc-enterprise-item:nth-child(2) { border-right: 0; }
          .sesen-page-cmc .cmc-enterprise-item:nth-child(-n+2) { border-bottom: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-page-cmc .cmc-why-item:nth-child(3n) { border-right: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-why-item:nth-child(2n) { border-right: 0; }
          .sesen-page-cmc .cmc-why-item:nth-last-child(-n+3) { border-bottom: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-why-item:nth-last-child(-n+2) { border-bottom: 0; }
        }

        @media (max-width: 900px) {
          .sesen-page-cmc .cmc-shell { padding-left: 30px; padding-right: 30px; }
          .sesen-page-cmc .cmc-section { padding: 82px 0; }
          .sesen-page-cmc .cmc-section-dense { padding: 72px 0; }
          .sesen-page-cmc .cmc-hero { padding: 76px 0 72px; }
          .sesen-page-cmc .cmc-hero-grid { grid-template-columns: 1fr; gap: 46px; }
          .sesen-page-cmc .cmc-hero-copy { max-width: 740px; margin: 0 auto; width: 100%; }
          .sesen-page-cmc .cmc-hero h1,
          .sesen-page-cmc .cmc-hero .cmc-eyebrow { text-align: center; }
          .sesen-page-cmc .cmc-hero-actions { justify-content: center; }
          .sesen-page-cmc .cmc-hero-visual { width: 100%; max-width: 600px; margin: 0 auto; }
          .sesen-page-cmc .cmc-trust-row { grid-template-columns: repeat(6,minmax(0,1fr)); padding: 9px 0; }
          .sesen-page-cmc .cmc-trust-item { min-height: 58px; display: grid; place-items: center; grid-column: span 2; border-bottom: 1px solid var(--cmc-divider); }
          .sesen-page-cmc .cmc-trust-item:nth-child(3) { border-right: 0; }
          .sesen-page-cmc .cmc-trust-item:nth-child(4),
          .sesen-page-cmc .cmc-trust-item:nth-child(5) { grid-column: span 3; border-bottom: 0; }
          .sesen-page-cmc .cmc-trust-item:nth-child(5) { border-right: 0; }
          .sesen-page-cmc .cmc-authority-grid,
          .sesen-page-cmc .cmc-change-grid,
          .sesen-page-cmc .cmc-quality-grid,
          .sesen-page-cmc .cmc-global-grid { grid-template-columns: 1fr; gap: 44px; }
          .sesen-page-cmc .cmc-authority-copy { position: static; max-width: 820px; }
          .sesen-page-cmc .cmc-doc-row { grid-template-columns: 1fr; gap: 24px; }
          .sesen-page-cmc .cmc-term-layout { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-term-map { max-width: 560px; margin: 0 auto; width: 100%; }
          .sesen-page-cmc .cmc-modality-col { padding: 34px; }
          .sesen-page-cmc .cmc-workflow-row { grid-template-columns: 60px minmax(210px,.62fr) minmax(0,1.38fr); gap: 20px; }
          .sesen-page-cmc .cmc-ai-panel { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-ai-grid { border-left: 0; border-top: 1px solid rgba(255,255,255,.15); }
          .sesen-page-cmc .cmc-global-copy { max-width: 800px; }
          .sesen-page-cmc .cmc-language-panel { max-width: 680px; }
        }

        @media (max-width: 768px) {
          .sesen-page-cmc .cmc-shell { padding-left: 28px; padding-right: 28px; }
          .sesen-page-cmc h1 { font-size: 42px; }
          .sesen-page-cmc h2 { font-size: 32px; }
          .sesen-page-cmc .cmc-hero-lead { font-size: 18px; }
          .sesen-page-cmc .cmc-section-heading h2 + p,
          .sesen-page-cmc .cmc-authority-copy p,
          .sesen-page-cmc .cmc-module-copy p,
          .sesen-page-cmc .cmc-term-copy p,
          .sesen-page-cmc .cmc-change-copy p,
          .sesen-page-cmc .cmc-quality-intro p,
          .sesen-page-cmc .cmc-global-copy p,
          .sesen-page-cmc .cmc-final-panel p { font-size: 17px; }
          .sesen-page-cmc .cmc-doc-list { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-module-diagram { grid-template-columns: 1fr; gap: 14px; }
          .sesen-page-cmc .cmc-module-source { min-height: 0; }
          .sesen-page-cmc .cmc-module-into { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-module-into span + span { display: none; }
          .sesen-page-cmc .cmc-module-center { min-height: 150px; }
          .sesen-page-cmc .cmc-module-output { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-modality { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-modality-col + .cmc-modality-col { border-left: 0; border-top: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-workflow-row { grid-template-columns: 56px minmax(0,1fr); }
          .sesen-page-cmc .cmc-workflow-row p { grid-column: 2; }
          .sesen-page-cmc .cmc-quality-item { grid-template-columns: 1fr; gap: 10px; }
          .sesen-page-cmc .cmc-ai-copy { padding: 40px 34px; }
          .sesen-page-cmc .cmc-related-row { grid-template-columns: minmax(0,1fr) 30px; gap: 8px 20px; }
          .sesen-page-cmc .cmc-related-desc { grid-column: 1; }
          .sesen-page-cmc .cmc-related-arrow { grid-column: 2; grid-row: 1 / span 2; align-self: center; }
          .sesen-page-cmc .cmc-final-panel { padding: 48px 38px; }
          .sesen-page-cmc .cmc-mobile-heading-center > h2,
          .sesen-page-cmc .cmc-mobile-heading-center > .cmc-eyebrow { text-align: center; }
          .sesen-page-cmc .cmc-mobile-heading-center > p,
          .sesen-page-cmc .cmc-mobile-heading-center > ul { text-align: left; }
        }

        @media (max-width: 620px) {
          .sesen-page-cmc .cmc-shell { padding-left: 20px; padding-right: 20px; }
          .sesen-page-cmc .cmc-section { padding: 68px 0; }
          .sesen-page-cmc .cmc-section-dense { padding: 64px 0; }
          .sesen-page-cmc .cmc-hero { padding: 66px 0 64px; }
          .sesen-page-cmc h1 { font-size: 42px; text-align: center; }
          .sesen-page-cmc h2 { font-size: 32px; }
          .sesen-page-cmc .cmc-hero .cmc-eyebrow { text-align: center; }
          .sesen-page-cmc .cmc-hero-copy { width: 100%; }
          .sesen-page-cmc .cmc-hero-lead,
          .sesen-page-cmc .cmc-hero-support { text-align: left; }
          .sesen-page-cmc .cmc-hero-actions { flex-direction: column; }
          .sesen-page-cmc .cmc-hero-actions .cmc-btn { width: 100%; }
          .sesen-page-cmc .cmc-hero-proof { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-hero-visual { width: 100%; }
          .sesen-page-cmc .cmc-hero-art { max-width: 520px; }
          .sesen-page-cmc .cmc-trust-row { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .sesen-page-cmc .cmc-trust-item { grid-column: auto; border-right: 1px solid var(--cmc-divider); border-bottom: 1px solid var(--cmc-divider); }
          .sesen-page-cmc .cmc-trust-item:nth-child(2n) { border-right: 0; }
          .sesen-page-cmc .cmc-trust-item:nth-child(3) { border-right: 1px solid var(--cmc-divider); }
          .sesen-page-cmc .cmc-trust-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--cmc-divider); }
          .sesen-page-cmc .cmc-trust-item:last-child { grid-column: 1 / -1; border-bottom: 0; border-right: 0; }
          .sesen-page-cmc .cmc-section-heading { margin-bottom: 36px; }
          .sesen-page-cmc .cmc-heading-center,
          .sesen-page-cmc .cmc-section-heading:not(.cmc-technical-heading) { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-page-cmc .cmc-section-heading:not(.cmc-technical-heading) p { text-align: left; }
          .sesen-page-cmc .cmc-technical-heading { text-align: left; margin-left: 0; margin-right: 0; }
          .sesen-page-cmc .cmc-module-copy h2,
          .sesen-page-cmc .cmc-change-copy h2,
          .sesen-page-cmc .cmc-quality-intro h2 { text-align: left; }
          .sesen-page-cmc .cmc-mobile-heading-center > h2,
          .sesen-page-cmc .cmc-mobile-heading-center > .cmc-eyebrow { text-align: center; }
          .sesen-page-cmc .cmc-mobile-heading-center > p,
          .sesen-page-cmc .cmc-mobile-heading-center > ul { text-align: left; }
          .sesen-page-cmc .cmc-doc-row { padding: 34px 0; }
          .sesen-page-cmc .cmc-term-copy ul { columns: 1; }
          .sesen-page-cmc .cmc-term-nodes { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-modality-col { padding: 30px 24px; }
          .sesen-page-cmc .cmc-change-step { grid-template-columns: 38px minmax(0,1fr); padding: 16px; }
          .sesen-page-cmc .cmc-workflow-row { grid-template-columns: 48px minmax(0,1fr); gap: 14px; padding: 25px 0; }
          .sesen-page-cmc .cmc-enterprise-grid { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-enterprise-item,
          .sesen-page-cmc .cmc-enterprise-item:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-enterprise-item:last-child { border-bottom: 0; }
          .sesen-page-cmc .cmc-ai-grid { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-ai-item,
          .sesen-page-cmc .cmc-ai-item:nth-child(even),
          .sesen-page-cmc .cmc-ai-item:nth-of-type(n+5) { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.12); }
          .sesen-page-cmc .cmc-ai-item:last-of-type { border-bottom: 0; }
          .sesen-page-cmc .cmc-ai-human { padding: 18px 22px; }
          .sesen-page-cmc .cmc-language-number { font-size: 56px; }
          .sesen-page-cmc .cmc-region-grid { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-why-grid { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-why-item,
          .sesen-page-cmc .cmc-why-item:nth-child(3n),
          .sesen-page-cmc .cmc-why-item:nth-child(2n),
          .sesen-page-cmc .cmc-why-item:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--cmc-border); }
          .sesen-page-cmc .cmc-why-item:last-child { border-bottom: 0; }
          .sesen-page-cmc .cmc-faq summary { font-size: 18px; padding-right: 50px; }
          .sesen-page-cmc .cmc-faq-answer { padding-right: 0; }
          .sesen-page-cmc .cmc-final { padding: 64px 0; }
          .sesen-page-cmc .cmc-final-panel { padding: 42px 24px; border-radius: 24px; }
          .sesen-page-cmc .cmc-final-actions { flex-direction: column; }
          .sesen-page-cmc .cmc-final-actions .cmc-btn { width: 100%; }
        }

        @media (max-width: 350px) {
          .sesen-page-cmc h1 { font-size: 38px; }
          .sesen-page-cmc h2 { font-size: 30px; }
          .sesen-page-cmc .cmc-trust-row { grid-template-columns: 1fr; }
          .sesen-page-cmc .cmc-trust-item,
          .sesen-page-cmc .cmc-trust-item:nth-child(2n),
          .sesen-page-cmc .cmc-trust-item:nth-child(3) { border-right: 0; border-bottom: 1px solid var(--cmc-divider); }
          .sesen-page-cmc .cmc-trust-item:last-child { grid-column: auto; border-bottom: 0; }
          .sesen-page-cmc .cmc-module-diagram,
          .sesen-page-cmc .cmc-term-map,
          .sesen-page-cmc .cmc-language-panel { padding: 20px; }
          .sesen-page-cmc .cmc-ai-copy { padding-left: 22px; padding-right: 22px; }
          .sesen-page-cmc .cmc-module-source { padding-left: 16px; padding-right: 16px; }
          .sesen-page-cmc .cmc-related-row { gap: 8px 12px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-page-cmc .cmc-btn,
          .sesen-page-cmc .cmc-link-arrow { transition: none; }
        }
      `}</style>

      <section className="cmc-hero">
        <div className="cmc-shell cmc-hero-grid">
          <div className="cmc-hero-copy">
            <div className="cmc-eyebrow">PHARMACEUTICAL CMC TRANSLATION</div>
            <h1>CMC Document Translation Services</h1>
            <p className="cmc-hero-lead">
              Specialized Chemistry, Manufacturing and Controls translation for pharmaceutical and biopharmaceutical organizations—helping keep drug substance, drug product, manufacturing, analytical, quality, and regulatory content accurate and consistent across languages.
            </p>
            <p className="cmc-hero-support">
              Sesen combines life sciences linguists, controlled terminology, translation memory, expert review, and AI-assisted quality checks for connected CMC documentation and global regulatory workflows.
            </p>
            <div className="cmc-hero-actions">
              <a className="cmc-btn cmc-btn-primary" href={links.quote}>REQUEST A QUOTE</a>
              <a className="cmc-btn cmc-btn-secondary" href={links.sales}>TALK WITH TEAM SESEN</a>
            </div>
            <div className="cmc-hero-proof" aria-label="CMC translation capabilities">
              {[
                ["Specialized CMC Expertise", "Pharmaceutical, scientific, manufacturing, analytical, and regulatory content"],
                ["CTD / eCTD Support", "Module 3 and related quality content for global regulatory workflows"],
                ["Terminology Governance", "Product, process, method, and specification consistency"],
                ["Human-Validated Quality", "Expert review supported by AI-enabled quality checks"],
              ].map(([title, text]) => (
                <div className="cmc-hero-proof-item" key={title}>
                  <CheckIcon />
                  <span><strong>{title}</strong>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="cmc-hero-visual"><HeroArtwork /></div>
        </div>
      </section>

      <section className="cmc-trust" aria-label="Sesen quality and language capabilities">
        <div className="cmc-shell cmc-trust-row">
          {["ISO 17100", "ISO 9001", "ISO 13485", "150+ Languages", "AI-Assisted QA + Human Review"].map((item) => (
            <div className="cmc-trust-item" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="cmc-section">
        <div className="cmc-shell cmc-authority-grid">
          <div className="cmc-authority-copy cmc-mobile-heading-center">
            <h2>CMC Connects Product Knowledge to Manufacturing and Regulatory Approval</h2>
            <p>
              Chemistry, Manufacturing and Controls documentation describes the scientific and technical foundation of a pharmaceutical product: what it is, how it is produced, how the process is controlled, how quality is measured, and how that state is maintained throughout the product lifecycle.
            </p>
            <p>
              The same substances, materials, process parameters, analytical procedures, specifications, acceptance criteria, and quality concepts can appear across many controlled documents. Translation therefore has to preserve both document-level accuracy and cross-document continuity.
            </p>
          </div>
          <div>
            <div className="cmc-lifecycle" aria-label="CMC content lifecycle">
              {lifecycle.map((item, index) => (
                <div className="cmc-life-item" key={item}>
                  <span className="cmc-life-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="cmc-life-title">{item}</span>
                </div>
              ))}
            </div>
            <div className="cmc-life-note">
              <strong>One connected information system.</strong> CMC terminology can move from product and process documentation into manufacturing records, CTD quality content, health authority responses, and later lifecycle submissions.
            </div>
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-soft">
        <div className="cmc-shell">
          <SectionHeading
            title="CMC Documentation Across the Product and Process Lifecycle"
            intro="Sesen translates CMC documentation across pharmaceutical development, manufacturing, quality control, regulatory submission, and post-approval lifecycle activities. Related files can be aligned through common terminology and authorized reference materials rather than handled as isolated translations."
          />
          <div className="cmc-doc-grid">
            {documentGroups.map((group) => (
              <article className="cmc-doc-row" key={group.title}>
                <div className="cmc-doc-intro">
                  <h3>{group.title}</h3>
                  <p>{group.intro}</p>
                  {group.links ? (
                    <div className="cmc-doc-links">
                      {group.links.map(([label, href]) => <ArrowLink href={href} key={label}>{label}</ArrowLink>)}
                    </div>
                  ) : null}
                </div>
                <ul className="cmc-doc-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-blue">
        <div className="cmc-shell cmc-module-wrap">
          <div className="cmc-module-copy">
            <h2>Keep CMC Terminology Consistent Across CTD Module 3</h2>
            <p>
              A CTD quality dossier does not exist independently from the scientific, analytical, manufacturing, and quality documentation that supports it. Information developed throughout the CMC program can flow into Module 3, where drug substance and drug product information is organized for regulatory review.
            </p>
            <p>
              Sesen helps maintain continuity as terminology moves from source technical documentation into quality content, summaries, health authority responses, and subsequent dossier revisions—without redefining the scientific or regulatory content itself.
            </p>
            <ArrowLink href={links.ctd}>Explore CTD/eCTD Translation Services</ArrowLink>
          </div>
          <Module3Diagram />
        </div>
      </section>

      <section className="cmc-section">
        <div className="cmc-shell cmc-term-layout">
          <div className="cmc-term-copy cmc-mobile-heading-center">
            <div className="cmc-eyebrow">TERMINOLOGY GOVERNANCE</div>
            <h2>One CMC Term Can Appear Across an Entire Documentation Set</h2>
            <p>
              A translation can be correct in one file and still create risk if the same scientific concept is expressed differently elsewhere. Product-specific terminology, process steps, analytical procedures, materials, specifications, and acceptance criteria often recur across controlled records.
            </p>
            <p>
              Sesen can combine client-approved glossaries, product terminology, translation memory, prior translations, authorized references, automated consistency checks, and expert human review to help keep those repeated concepts aligned.
            </p>
            <ul>
              {["Substance and material names", "Intermediates and formulation components", "Manufacturing operations", "Equipment terminology", "Process parameters", "Analytical procedure names", "Specifications and acceptance criteria", "Storage conditions", "Units and abbreviations", "Client-defined terminology"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <TerminologyMap />
        </div>
      </section>

      <section className="cmc-section cmc-section-soft">
        <div className="cmc-shell">
          <SectionHeading
            title="CMC Translation for Small Molecules, Biologics, and Biosimilars"
            intro="CMC documentation differs substantially by modality. Sesen matches translation resources to the scientific and technical subject matter rather than applying one generic pharmaceutical vocabulary to every product type."
          />
          <div className="cmc-modality">
            <article className="cmc-modality-col">
              <div className="cmc-modality-label">SMALL MOLECULE CMC</div>
              <h3>Chemical Product and Process Documentation</h3>
              <p>Support for terminology associated with chemically synthesized products, formulation, manufacture, analytical testing, specifications, validation, and stability.</p>
              <div className="cmc-chip-list">
                {["Synthesis", "Starting materials", "Intermediates", "Impurities", "Crystallization", "Formulation", "Dissolution", "Analytical procedures", "Specifications", "Stability"].map((item) => <span className="cmc-chip" key={item}>{item}</span>)}
              </div>
            </article>
            <article className="cmc-modality-col">
              <div className="cmc-modality-label">BIOLOGIC & BIOSIMILAR CMC</div>
              <h3>Biological Process, Characterization, and Comparability Content</h3>
              <p>Specialized language support for complex biological processes and quality attributes, including biosimilar comparability documentation where applicable.</p>
              <div className="cmc-chip-list">
                {["Cell culture", "Upstream processing", "Downstream processing", "Purification", "Viral clearance", "Characterization", "Potency", "Comparability", "Process validation", "Stability"].map((item) => <span className="cmc-chip" key={item}>{item}</span>)}
              </div>
            </article>
          </div>
          <div className="cmc-modality-footer"><ArrowLink href={links.biopharma}>Explore Biopharmaceutical & Biosimilar Translation Services</ArrowLink></div>
        </div>
      </section>

      <section className="cmc-section cmc-section-blue">
        <div className="cmc-shell cmc-change-grid">
          <div className="cmc-change-copy">
            <h2>Keep CMC Documentation Aligned Through Post-Approval Changes</h2>
            <p>
              CMC does not end with the initial authorization. Processes, sites, suppliers, equipment, analytical methods, specifications, formulations, container-closure systems, and stability information can evolve throughout the commercial lifecycle.
            </p>
            <p>
              Sesen can preserve terminology resources, translation memories, reference documents, and prior linguistic decisions so revised multilingual content remains connected to the established program rather than being rebuilt in isolation.
            </p>
            <div className="cmc-change-types" aria-label="Examples of CMC changes">
              {["Manufacturing site", "Process", "Equipment", "Supplier / material", "Analytical method", "Specification", "Formulation", "Stability", "Container closure"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <div className="cmc-change-flow" aria-label="Post-approval CMC change lifecycle">
            {["Approved CMC State", "Product / Process / Method Change", "Controlled Source Documentation Updated", "Related CMC Documents Revised", "Multilingual Content Updated", "Variation / Supplement / Lifecycle Submission", "New Approved State"].map((item, index) => (
              <div className="cmc-change-step" key={item}>
                <span className="cmc-change-dot">{index + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-section">
        <div className="cmc-shell">
          <SectionHeading
            title="A Controlled Translation Workflow for CMC Documentation"
            intro="Complex CMC projects can involve large document sets, repeated content, extensive references, technical tables, multiple reviewers, and evolving versions. Sesen structures the workflow so terminology, source context, quality checks, and future updates remain connected."
            align="left"
            technical
          />
          <div className="cmc-workflow">
            {workflow.map((step, index) => (
              <article className="cmc-workflow-row" key={step.title}>
                <div className="cmc-workflow-num">{String(index + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-soft">
        <div className="cmc-shell cmc-quality-grid">
          <div className="cmc-quality-intro">
            <h2>Quality Controls for High-Stakes CMC Content</h2>
            <p>
              CMC translation requires attention to the technical details embedded inside the language. Sesen's QA workflow supports terminology, numerical integrity, structured content, abbreviations, and version continuity while preserving the approved source meaning.
            </p>
            <div className="cmc-quality-note">
              Sesen translates and verifies the multilingual representation of source information; it does not independently change or scientifically validate the underlying pharmaceutical data.
            </div>
          </div>
          <div className="cmc-quality-list">
            {[
              ["Technical Terminology", "Manage product, process, analytical, and quality terminology in context across related files, using approved client terminology when supplied."],
              ["Numbers & Units", "Help identify unintended differences involving concentrations, temperatures, times, quantities, ranges, limits, percentages, units, specification values, and acceptance criteria."],
              ["Specifications & Tables", "Preserve relationships among headings, rows, columns, values, units, notes, and structured technical content in specifications, stability tables, validation results, and batch analyses."],
              ["Abbreviations & Acronyms", "Apply source usage, client preferences, established target-language terminology, and context to domain-specific abbreviations."],
              ["Version Continuity", "Maintain awareness of the source version associated with each multilingual deliverable as document sets evolve."],
            ].map(([title, text]) => (
              <article className="cmc-quality-item" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-dense">
        <div className="cmc-shell">
          <SectionHeading
            title="Built for Regulated Pharmaceutical Content"
            intro="CMC documentation can contain proprietary formulations, manufacturing processes, analytical methods, product specifications, and other business-critical information. Sesen combines specialized translation with controlled workflows for sensitive life sciences content."
          />
          <div className="cmc-enterprise-grid">
            {[
              ["ISO-Certified Processes", "Quality workflows supported by Sesen's ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications."],
              ["Secure Project Handling", "Controlled file transfer, access-controlled project workflows, confidentiality requirements, and defined delivery channels."],
              ["Traceable Language Assets", "Terminology, translation memories, reference files, and version information maintained to support program continuity."],
              ["Scalable Multilingual Delivery", "Support for individual documents, large document sets, multiple languages, rolling schedules, and recurring lifecycle updates."],
            ].map(([title, text]) => (
              <article className="cmc-enterprise-item" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="cmc-enterprise-link"><ArrowLink href={links.qualitySecurity}>Explore Quality, Compliance & Security</ArrowLink></div>
        </div>
      </section>

      <section className="cmc-section cmc-section-soft">
        <div className="cmc-shell">
          <div className="cmc-ai-panel">
            <div className="cmc-ai-copy cmc-mobile-heading-center">
              <h2>SesenGPT-Enabled CMC Workflows With Expert Human Review</h2>
              <p>
                The opportunity for AI in CMC is not simply faster translation. It is smarter control of repeated terminology, prior translations, references, numbers, units, and document relationships across large technical content sets.
              </p>
            </div>
            <div className="cmc-ai-grid">
              {[
                ["Terminology Extraction", "Identify recurring scientific, manufacturing, analytical, and regulatory terminology for controlled review."],
                ["Translation Memory Leverage", "Reuse previously translated and approved content where appropriate to improve consistency."],
                ["Reference Alignment", "Use authorized prior submissions, product references, and related documentation to support consistent linguistic decisions."],
                ["Consistency Analysis", "Surface potentially inconsistent translations across repeated or related CMC content."],
                ["Number & Unit Checks", "Flag possible source/target discrepancies in numeric and measurement content for reviewer attention."],
                ["Completeness Checks", "Help identify missing, untranslated, or unexpectedly inconsistent content."],
              ].map(([title, text]) => <article className="cmc-ai-item" key={title}><strong>{title}</strong><p>{text}</p></article>)}
              <div className="cmc-ai-human"><strong>Human accountability stays central.</strong> Qualified linguists and reviewers remain responsible for context, technical meaning, and final multilingual quality.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="cmc-section">
        <div className="cmc-shell cmc-global-grid">
          <div className="cmc-global-copy cmc-mobile-heading-center">
            <h2>Global CMC Translation in 150+ Languages</h2>
            <p>
              Pharmaceutical development and manufacturing can span research centers, laboratories, suppliers, CDMOs, production sites, regulatory teams, and markets around the world. Sesen supports multilingual CMC content for development, regulatory submissions, manufacturing, quality control, technology transfer, and lifecycle management.
            </p>
            <p>
              For CMC documentation, localization is driven primarily by technical precision and controlled terminology: preserving scientific and regulatory meaning while using accurate target-language terminology appropriate to the document and market.
            </p>
          </div>
          <div className="cmc-language-panel">
            <div className="cmc-language-number">150+</div>
            <div className="cmc-language-label">Languages for global life sciences programs</div>
            <div className="cmc-region-grid">
              {["North America", "Europe", "Asia-Pacific", "Latin America", "Middle East", "Global manufacturing networks"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-soft">
        <div className="cmc-shell">
          <SectionHeading
            title="Connected Services Across Pharmaceutical Development and Manufacturing"
            intro="CMC sits between product development, manufacturing, quality, and regulatory submission. Explore related Sesen services when your multilingual program extends beyond core CMC documentation."
            technical
          />
          <div className="cmc-related">
            {relatedServices.map(([title, desc, href]) => (
              <a className="cmc-related-row" href={href} key={title}>
                <span className="cmc-related-title">{title}</span>
                <span className="cmc-related-desc">{desc}</span>
                <span className="cmc-related-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-section">
        <div className="cmc-shell">
          <SectionHeading
            title="Why Pharmaceutical Teams Choose Sesen for CMC Translation"
            intro="CMC translation demands document-level accuracy and program-level consistency. Sesen brings those requirements together in a life sciences translation model designed for regulated global content."
          />
          <div className="cmc-why-grid">
            {[
              ["Life Sciences Specialization", "Workflows built around pharmaceutical, biotechnology, clinical, regulatory, scientific, and other regulated life sciences content."],
              ["CMC Subject-Matter Expertise", "Translation resources selected according to pharmaceutical, chemical, biological, manufacturing, analytical, and regulatory subject matter."],
              ["Cross-Document Terminology Control", "Glossaries, translation memory, references, prior translations, and consistency checks help keep related CMC files aligned."],
              ["Regulatory & Manufacturing Context", "Awareness of how CMC content moves between development documentation, manufacturing records, quality systems, dossiers, and lifecycle updates."],
              ["Human Expertise Enhanced by AI", "Professional translation and review supported by terminology, consistency, completeness, and quality checks."],
              ["Lifecycle Continuity", "Applicable language assets can be retained for subsequent revisions, new markets, manufacturing changes, and regulatory updates."],
            ].map(([title, text]) => <article className="cmc-why-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="cmc-section cmc-section-blue">
        <div className="cmc-shell">
          <SectionHeading
            title="CMC Document Translation FAQs"
            intro="Answers to common questions about CMC document coverage, Module 3 translation, terminology consistency, analytical and validation content, lifecycle updates, ongoing programs, quality controls, and global delivery."
            align="left"
            technical
          />
          <div className="cmc-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <div className="cmc-faq-answer">{answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cmc-final">
        <div className="cmc-shell">
          <div className="cmc-final-panel">
            <div className="cmc-final-content cmc-mobile-heading-center">
              <h2>Keep CMC Content Consistent Across Products, Processes, and Markets</h2>
              <p>
                From drug substance and drug product documentation to manufacturing processes, analytical methods, specifications, validation, stability, CTD Module 3, and post-approval changes, Sesen helps pharmaceutical and biopharmaceutical teams manage multilingual CMC content with specialized expertise, controlled terminology, expert human review, and AI-enabled quality workflows.
              </p>
              <div className="cmc-final-actions">
                <a className="cmc-btn cmc-btn-primary" href={links.quote}>REQUEST A QUOTE</a>
                <a className="cmc-btn cmc-btn-secondary" href={links.sales}>TALK WITH TEAM SESEN</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
