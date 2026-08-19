import React, { useState } from "react";

const PAGE = "sesen-ib-page";

const links = {
  quote: "https://www.sesen.com/get-a-quote/",
  sales: "https://www.sesen.com/contact-sales/",
  clinicalTrials: "https://www.sesen.com/clinical-trial-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  regulatorySubmissions: "https://www.sesen.com/regulatory-submission-translation-services/",
  irbEthics: "https://www.sesen.com/irb-ethics-committee-translation-services/",
  clinicalStudyDocs: "https://www.sesen.com/clinical-study-translation-services/",
};

const evidenceStreams = [
  {
    title: "Nonclinical Evidence",
    copy: "Pharmacology, toxicology, pharmacokinetics, animal studies, and other findings that establish the scientific foundation for clinical investigation.",
    icon: "molecule",
  },
  {
    title: "Clinical Evidence",
    copy: "Previous human exposure, clinical observations, efficacy findings, safety findings, dose-related experience, and evidence generated through development.",
    icon: "chart",
  },
  {
    title: "Clinical Pharmacology & PK/PD",
    copy: "Mechanism of action, pharmacodynamics, pharmacokinetics, exposure, metabolism, dose-response information, and related scientific terminology.",
    icon: "pulse",
  },
  {
    title: "Safety & Reference Safety Information",
    copy: "Known and emerging safety findings, adverse reactions, risk information, safety monitoring considerations, and RSI where applicable.",
    icon: "shield",
  },
  {
    title: "Dosing & Administration",
    copy: "Dose levels, schedules, routes of administration, treatment duration, dose modifications, instructions, and the clinical rationale behind them.",
    icon: "dose",
  },
  {
    title: "Investigational Product Information",
    copy: "Product identity, pharmaceutical characteristics, formulation, physical properties, handling information where included, and related technical content.",
    icon: "vial",
  },
];

const consistencyItems = [
  "Investigational product names and identifiers",
  "Indications and therapeutic terminology",
  "Medical, pharmacology, and PK/PD terminology",
  "Dose levels, frequency, route, and administration language",
  "Safety, adverse-reaction, and RSI terminology",
  "Units, concentrations, percentages, and numerical values",
  "Study identifiers, acronyms, and abbreviations",
  "Tables, figures, references, and internal cross-references",
];

const workflowSteps = [
  {
    number: "01",
    title: "Source & Scope Review",
    copy: "Review the current IB, languages, locales, previous editions, existing translations, sponsor references, file formats, timelines, and delivery requirements.",
  },
  {
    number: "02",
    title: "Terminology & Reference Alignment",
    copy: "Align product, medical, safety, pharmacology, dose, and study terminology with approved glossaries, translation memories, prior IBs, protocols, and authorized references.",
  },
  {
    number: "03",
    title: "Specialized Life Sciences Translation",
    copy: "Assign qualified linguists with relevant medical, pharmaceutical, scientific, or clinical research expertise for the language pair and content.",
  },
  {
    number: "04",
    title: "Independent Linguistic Review",
    copy: "Review the translation against the source for scientific meaning, completeness, terminology, numerical content, and consistency.",
  },
  {
    number: "05",
    title: "Document & Cross-Reference QA",
    copy: "Check critical terminology, doses, units, identifiers, tables, figures, section numbering, cross-references, references, and repeated content.",
  },
  {
    number: "06",
    title: "Formatting & Document Engineering",
    copy: "Preserve or recreate complex IB structures including tables, figures, headers, footers, numbered sections, references, and multilingual page layouts.",
  },
  {
    number: "07",
    title: "Final QA & Controlled Delivery",
    copy: "Complete final linguistic and production checks before delivery of the approved target-language files and agreed project documentation.",
  },
];

const versionControls = [
  {
    title: "Baseline Version Control",
    copy: "Establish the current approved source and target-language versions as the basis for future updates.",
  },
  {
    title: "Change Identification",
    copy: "Compare new source editions against previous versions to identify added, revised, moved, or removed content.",
  },
  {
    title: "Controlled Amendment Translation",
    copy: "Translate affected content while preserving appropriate previously approved language in unchanged sections.",
  },
  {
    title: "Terminology Continuity",
    copy: "Reuse approved terminology, translation memory, sponsor preferences, and prior reviewer decisions across successive editions.",
  },
  {
    title: "Multilingual Synchronization",
    copy: "Coordinate required target languages so study teams can identify which release corresponds to the current approved source.",
  },
  {
    title: "Document-Level QA",
    copy: "Verify version identifiers, dates, numbering, references, tables, figures, and formatting affected by the update.",
  },
];

const qualityItems = [
  {
    title: "Specialized Medical & Scientific Linguists",
    copy: "Project teams are selected according to language pair, subject matter, therapeutic area, document type, and program requirements.",
  },
  {
    title: "Independent Linguistic Review",
    copy: "Where included in the workflow, a second qualified linguist reviews accuracy, completeness, terminology, scientific meaning, and consistency.",
  },
  {
    title: "Controlled Terminology",
    copy: "Sponsor glossaries, approved product terminology, translation memories, previous translations, and reviewer feedback can be maintained as reusable linguistic assets.",
  },
  {
    title: "Numerical & Data QA",
    copy: "Structured checks support review of doses, concentrations, units, percentages, dates, study numbers, identifiers, tables, and repeated numerical information.",
  },
  {
    title: "Structural QA",
    copy: "Document-level review covers hierarchy, tables, figures, cross-references, footnotes, references, pagination, headers, footers, and version information.",
  },
  {
    title: "Human Final Quality Control",
    copy: "Qualified professionals retain responsibility for evaluating context, scientific meaning, terminology, and final multilingual quality before delivery.",
  },
];

const relatedServices = [
  { title: "Clinical Trial Protocol Translation Services", href: links.protocol },
  { title: "Pharmacovigilance Translation Services", href: links.pharmacovigilance },
  { title: "Regulatory Submission Translation Services", href: links.regulatorySubmissions },
  { title: "IRB & Ethics Committee Translation Services", href: links.irbEthics },
  { title: "Clinical Study Documentation Translation Services", href: links.clinicalStudyDocs },
];

const faqs = [
  {
    q: "What is Investigator’s Brochure translation?",
    a: "Investigator’s Brochure translation is the specialized translation of the clinical, nonclinical, pharmacology, safety, dosing, and investigational product information contained in an IB for multilingual clinical development. Because the document brings together multiple scientific disciplines and evolves over time, quality also depends on terminology consistency, numerical accuracy, internal relationships, document structure, and version control.",
  },
  {
    q: "What sections of an Investigator’s Brochure can Sesen translate?",
    a: "Sesen can translate complete Investigator’s Brochures as well as selected sections, revised content, appendices, tables, figures, safety information, Reference Safety Information, and subsequent editions. Scope can include summaries, product information, nonclinical studies, clinical experience, pharmacology, PK/PD, dosing and administration information, references, and other sponsor-provided source content.",
  },
  {
    q: "Does Sesen support Reference Safety Information translation?",
    a: "Yes. Sesen translates approved Reference Safety Information and related safety terminology within Investigator’s Brochures and can maintain that terminology through subsequent multilingual updates. Expectedness, causality, medical evaluation, reportability, and other safety or regulatory determinations remain with the sponsor and responsible medical, pharmacovigilance, and regulatory teams.",
  },
  {
    q: "How does Sesen handle Investigator’s Brochure amendments and new versions?",
    a: "Sesen can compare the new source edition with the previous version, identify changed content, translate affected sections, reuse approved terminology and translation memory where appropriate, perform linguistic and version-change QA, update formatting, and coordinate required target-language releases.",
  },
  {
    q: "Can translated Investigator’s Brochures stay aligned with the clinical trial protocol?",
    a: "Yes. When relevant approved reference documents are available, Sesen can use protocol terminology, sponsor glossaries, previous translations, study-specific terminology, translation memories, and other authorized references to help maintain consistency between the Investigator’s Brochure, protocol, and related clinical documentation.",
  },
  {
    q: "Can Sesen incorporate sponsor or in-country reviewer feedback?",
    a: "Yes. Authorized sponsor, medical, scientific, regulatory, CRO, or in-country reviewer feedback can be incorporated into the appropriate target-language versions. Approved terminology decisions and reviewer preferences can also be captured for reuse in subsequent IB editions and related clinical documentation.",
  },
  {
    q: "Does every Investigator’s Brochure require back translation?",
    a: "Not necessarily. The appropriate verification approach depends on the sponsor’s requirements, study procedures, target market, document use, and agreed quality plan. Sesen can incorporate additional review methodologies when requested, while the core IB workflow can emphasize specialized forward translation, independent linguistic review, terminology control, document-level QA, version control, and final human quality checks.",
  },
  {
    q: "Can Sesen support an Investigator’s Brochure throughout multiple years of clinical development?",
    a: "Yes. Sesen can support ongoing IB programs in which the source document is revised as clinical, nonclinical, safety, dosing, or product information changes. Translation memories, approved terminology, prior language versions, reviewer decisions, and controlled source comparisons help maintain continuity from one edition to the next.",
  },
];

function Icon({ type }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    molecule: (
      <>
        <circle cx="8" cy="8" r="2.4" {...common} />
        <circle cx="18" cy="6" r="2.4" {...common} />
        <circle cx="16" cy="18" r="2.4" {...common} />
        <circle cx="6" cy="18" r="2.4" {...common} />
        <path d="M10.2 7.4 15.6 6.5M17.5 8.3l-1 7.3M13.8 18H8.4M7.1 15.7l.6-5.3" {...common} />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V5M4 20h17" {...common} />
        <path d="m7 15 4-4 3 2 5-6" {...common} />
        <circle cx="7" cy="15" r="1" fill="currentColor" />
        <circle cx="11" cy="11" r="1" fill="currentColor" />
        <circle cx="14" cy="13" r="1" fill="currentColor" />
        <circle cx="19" cy="7" r="1" fill="currentColor" />
      </>
    ),
    pulse: (
      <>
        <path d="M3 13h4l2.2-6 4.1 11 2.1-5H21" {...common} />
        <path d="M4 6.5A9 9 0 0 1 20.5 9M20 17.5A9 9 0 0 1 4.5 16" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.3 8.4-8 10-4.7-1.6-8-5-8-10V6l8-3Z" {...common} />
        <path d="m8.5 12 2.2 2.2 4.9-5" {...common} />
      </>
    ),
    dose: (
      <>
        <path d="M7 4h10v4H7zM9 8v3l-3 4v5h12v-5l-3-4V8" {...common} />
        <path d="M8 15h8" {...common} />
      </>
    ),
    vial: (
      <>
        <path d="M8 3h8v4H8zM9 7v3.2A6.5 6.5 0 0 0 6 16v4h12v-4a6.5 6.5 0 0 0-3-5.8V7" {...common} />
        <path d="M7 15h10" {...common} />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" {...common} />,
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" {...common} />,
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[type] || paths.check}
    </svg>
  );
}

function EvidenceGraphic() {
  return (
    <div className={`${PAGE}__hero-art`} aria-hidden="true">
      <svg viewBox="0 0 560 520" role="img">
        <defs>
          <linearGradient id="ibDocFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F5F7FF" />
          </linearGradient>
        </defs>

        <circle cx="285" cy="258" r="190" fill="#F5F7FF" />
        <circle cx="285" cy="258" r="138" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />

        <g stroke="#9AA7BF" strokeWidth="2.3" fill="none">
          <path d="M118 95C180 130 204 153 233 194" />
          <path d="M452 100C390 132 365 158 337 197" />
          <path d="M82 250C151 249 191 250 222 250" />
          <path d="M475 250C407 249 372 250 346 250" />
          <path d="M122 414C178 382 205 354 233 317" />
          <path d="M449 414C394 382 365 354 336 317" />
        </g>

        <g fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.4">
          <circle cx="93" cy="80" r="38" />
          <circle cx="477" cy="80" r="38" />
          <circle cx="55" cy="250" r="38" />
          <circle cx="505" cy="250" r="38" />
          <circle cx="95" cy="430" r="38" />
          <circle cx="475" cy="430" r="38" />
        </g>

        <g fill="#3659BB" fontFamily="Inter, Arial, sans-serif" fontSize="13" fontWeight="700" textAnchor="middle">
          <text x="93" y="77"><tspan x="93">NONCLINICAL</tspan><tspan x="93" dy="16">EVIDENCE</tspan></text>
          <text x="477" y="77"><tspan x="477">CLINICAL</tspan><tspan x="477" dy="16">EVIDENCE</tspan></text>
          <text x="55" y="246"><tspan x="55">PHARMACOLOGY</tspan><tspan x="55" dy="16">PK/PD</tspan></text>
          <text x="505" y="246"><tspan x="505">SAFETY</tspan><tspan x="505" dy="16">&amp; RSI</tspan></text>
          <text x="95" y="427"><tspan x="95">DOSING &amp;</tspan><tspan x="95" dy="16">ADMINISTRATION</tspan></text>
          <text x="475" y="427"><tspan x="475">PRODUCT</tspan><tspan x="475" dy="16">INFORMATION</tspan></text>
        </g>

        <g>
          <path d="M238 173h96l20 22v160c0 9-7 16-16 16h-100c-9 0-16-7-16-16V189c0-9 7-16 16-16Z" fill="url(#ibDocFill)" stroke="#17264D" strokeWidth="3" />
          <path d="M334 173v25h20" fill="none" stroke="#17264D" strokeWidth="3" />
          <rect x="245" y="218" width="86" height="8" rx="4" fill="#4B6FD8" />
          <rect x="245" y="242" width="69" height="5" rx="2.5" fill="#C9D3E6" />
          <rect x="245" y="258" width="78" height="5" rx="2.5" fill="#C9D3E6" />
          <rect x="245" y="274" width="61" height="5" rx="2.5" fill="#C9D3E6" />
          <rect x="245" y="304" width="86" height="30" rx="7" fill="#EAF0FF" />
          <path d="M258 319h60" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" />
          <text x="288" y="205" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="11" fontWeight="700" fill="#17264D">INVESTIGATOR’S BROCHURE</text>
        </g>

        <g transform="translate(352 320)">
          <rect x="0" y="0" width="92" height="118" rx="12" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2" />
          <rect x="13" y="17" width="54" height="6" rx="3" fill="#6F8BE1" />
          <rect x="13" y="38" width="64" height="4" rx="2" fill="#DDE4F2" />
          <rect x="13" y="52" width="54" height="4" rx="2" fill="#DDE4F2" />
          <rect x="13" y="76" width="63" height="22" rx="6" fill="#F5F7FF" />
          <text x="45" y="111" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#3659BB">MULTILINGUAL</text>
        </g>

        <g transform="translate(382 350)">
          <rect x="0" y="0" width="92" height="118" rx="12" fill="#FFFFFF" stroke="#3659BB" strokeWidth="2.4" />
          <rect x="13" y="17" width="54" height="6" rx="3" fill="#4B6FD8" />
          <rect x="13" y="38" width="64" height="4" rx="2" fill="#DDE4F2" />
          <rect x="13" y="52" width="54" height="4" rx="2" fill="#DDE4F2" />
          <rect x="13" y="76" width="63" height="22" rx="6" fill="#EAF0FF" />
          <text x="45" y="111" textAnchor="middle" fontFamily="Inter, Arial, sans-serif" fontSize="10" fontWeight="700" fill="#3659BB">CONTROLLED</text>
        </g>

        <path d="M322 370c22 16 38 29 50 41" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
        <path d="m366 399 7 13-14-3" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ConnectionGraphic() {
  return (
    <div className={`${PAGE}__connection`} aria-hidden="true">
      <div className={`${PAGE}__connection-center`}>
        <span>INVESTIGATOR’S</span>
        <strong>BROCHURE</strong>
      </div>
      <div className={`${PAGE}__connection-node ${PAGE}__connection-node--one`}>Protocol</div>
      <div className={`${PAGE}__connection-node ${PAGE}__connection-node--two`}>Safety</div>
      <div className={`${PAGE}__connection-node ${PAGE}__connection-node--three`}>Regulatory</div>
      <div className={`${PAGE}__connection-node ${PAGE}__connection-node--four`}>IRB / Ethics</div>
      <div className={`${PAGE}__connection-node ${PAGE}__connection-node--five`}>Clinical Study Docs</div>
      <span className={`${PAGE}__connection-line ${PAGE}__connection-line--one`} />
      <span className={`${PAGE}__connection-line ${PAGE}__connection-line--two`} />
      <span className={`${PAGE}__connection-line ${PAGE}__connection-line--three`} />
      <span className={`${PAGE}__connection-line ${PAGE}__connection-line--four`} />
      <span className={`${PAGE}__connection-line ${PAGE}__connection-line--five`} />
    </div>
  );
}

function VersionGraphic() {
  const stages = [
    ["SOURCE IB", "V1"],
    ["MULTILINGUAL", "V1"],
    ["NEW EVIDENCE", "+ SAFETY"],
    ["SOURCE IB", "V2"],
    ["MULTILINGUAL", "V2"],
  ];

  return (
    <div className={`${PAGE}__version-graphic`} role="img" aria-label="Investigator’s Brochure version lifecycle">
      {stages.map(([top, bottom], i) => (
        <React.Fragment key={`${top}-${i}`}>
          <div className={`${PAGE}__version-stage ${i === 2 ? `${PAGE}__version-stage--event` : ""}`}>
            <span>{top}</span>
            <strong>{bottom}</strong>
          </div>
          {i < stages.length - 1 && <div className={`${PAGE}__version-arrow`} aria-hidden="true">→</div>}
        </React.Fragment>
      ))}
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <div className={`${PAGE}__faq-item ${open ? `${PAGE}__faq-item--open` : ""}`}>
      <button
        className={`${PAGE}__faq-question`}
        type="button"
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{item.q}</span>
        <span className={`${PAGE}__faq-plus`} aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open && <div className={`${PAGE}__faq-answer`}><p>{item.a}</p></div>}
    </div>
  );
}

export default function InvestigatorsBrochureTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className={PAGE}>
      <style>{`
        .${PAGE} {
          --ib-blue: #4B6FD8;
          --ib-blue-dark: #3659BB;
          --ib-blue-deep: #253F8F;
          --ib-blue-mid: #6F8BE1;
          --ib-blue-soft: #EAF0FF;
          --ib-blue-pale: #F5F7FF;
          --ib-navy: #17264D;
          --ib-ink: #111827;
          --ib-body: #46546D;
          --ib-muted: #68758B;
          --ib-border: #DDE4F2;
          --ib-divider: #E9EEF8;
          --ib-surface: #F7F9FD;
          --ib-white: #FFFFFF;
          --ib-light-on-dark: #C8D6FF;
          color: var(--ib-body);
          background: var(--ib-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .${PAGE} *,
        .${PAGE} *::before,
        .${PAGE} *::after {
          box-sizing: border-box;
        }

        .${PAGE} a {
          color: inherit;
        }

        .${PAGE} button {
          font: inherit;
        }

        .${PAGE}__shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .${PAGE}__section {
          padding: 96px 0;
        }

        .${PAGE}__section--dense {
          padding: 80px 0;
        }

        .${PAGE}__section--soft {
          background: var(--ib-surface);
        }

        .${PAGE}__section--pale {
          background: var(--ib-blue-pale);
        }

        .${PAGE}__section--navy {
          background: var(--ib-navy);
          color: #FFFFFF;
        }

        .${PAGE}__hero {
          padding: 92px 0 88px;
          background:
            radial-gradient(circle at 88% 14%, rgba(75,111,216,.09), transparent 29%),
            linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
          border-bottom: 1px solid var(--ib-divider);
        }

        .${PAGE}__hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr);
          gap: 70px;
          align-items: center;
        }

        .${PAGE}__eyebrow {
          margin: 0 0 18px;
          color: var(--ib-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: .15em;
          text-transform: uppercase;
        }

        .${PAGE}__eyebrow--light {
          color: var(--ib-light-on-dark);
        }

        .${PAGE} h1,
        .${PAGE} h2,
        .${PAGE} h3 {
          margin-top: 0;
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-style: normal;
          font-weight: 500;
        }

        .${PAGE} h1 {
          margin-bottom: 24px;
          max-width: 720px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -.5px;
        }

        .${PAGE} h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .${PAGE} h3 {
          margin-bottom: 10px;
          font-size: 22px;
          line-height: 1.3;
        }

        .${PAGE} p {
          margin: 0 0 18px;
        }

        .${PAGE}__hero-lead {
          max-width: 700px;
          margin: 0 0 16px;
          color: #293954;
          font-size: 20px;
          line-height: 1.6;
        }

        .${PAGE}__hero-copy {
          max-width: 700px;
          margin-bottom: 30px;
          color: var(--ib-body);
          font-size: 17px;
        }

        .${PAGE}__actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .${PAGE}__button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: .035em;
          text-transform: uppercase;
          transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
        }

        .${PAGE}__button svg {
          width: 17px;
          height: 17px;
        }

        .${PAGE}__button--primary {
          color: #FFFFFF !important;
          background: var(--ib-blue);
        }

        .${PAGE}__button--primary:hover {
          background: var(--ib-blue-dark);
          transform: translateY(-1px);
        }

        .${PAGE}__button--secondary {
          color: var(--ib-ink) !important;
          background: #FFFFFF;
          border-color: #C9D3E6;
        }

        .${PAGE}__button--secondary:hover {
          background: var(--ib-blue-pale);
          border-color: #AFC0E8;
          transform: translateY(-1px);
        }

        .${PAGE}__button:focus-visible,
        .${PAGE}__text-link:focus-visible,
        .${PAGE}__faq-question:focus-visible {
          outline: 3px solid rgba(75,111,216,.35);
          outline-offset: 3px;
        }

        .${PAGE}__hero-art {
          width: 100%;
          max-width: 540px;
          margin-left: auto;
        }

        .${PAGE}__hero-art svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .${PAGE}__trust {
          border-top: 1px solid var(--ib-divider);
          border-bottom: 1px solid var(--ib-divider);
          background: #FFFFFF;
        }

        .${PAGE}__trust-grid {
          min-height: 88px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          gap: 0;
        }

        .${PAGE}__trust-item {
          padding: 14px 24px;
          text-align: center;
        }

        .${PAGE}__trust-item + .${PAGE}__trust-item {
          border-left: 1px solid var(--ib-divider);
        }

        .${PAGE}__trust-item strong {
          display: block;
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.3;
        }

        .${PAGE}__trust-item span {
          display: block;
          margin-top: 5px;
          color: var(--ib-muted);
          font-size: 13px;
        }

        .${PAGE}__heading {
          max-width: 820px;
          margin-bottom: 46px;
        }

        .${PAGE}__heading--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .${PAGE}__heading p {
          max-width: 790px;
          color: var(--ib-body);
          font-size: 18px;
        }

        .${PAGE}__heading--center p {
          margin-left: auto;
          margin-right: auto;
        }

        .${PAGE}__authority-note {
          max-width: 940px;
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 22px;
          align-items: start;
          margin: 34px auto 0;
          padding: 22px 26px;
          border-left: 3px solid var(--ib-blue);
          background: var(--ib-blue-pale);
          text-align: left;
        }

        .${PAGE}__authority-note strong {
          color: var(--ib-blue-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .${PAGE}__authority-note span {
          color: var(--ib-body);
          font-size: 16px;
          line-height: 1.6;
        }

        .${PAGE}__context-note {
          margin-top: 30px;
          padding: 22px 24px;
          border-left: 3px solid var(--ib-blue);
          background: #FFFFFF;
        }

        .${PAGE}__context-note h3 {
          margin-bottom: 8px;
          font-size: 20px;
        }

        .${PAGE}__context-note p {
          margin: 0;
        }

        .${PAGE}__evidence-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--ib-border);
          border-left: 1px solid var(--ib-border);
          border-radius: 28px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE}__evidence-item {
          min-height: 260px;
          padding: 32px 30px;
          border-right: 1px solid var(--ib-border);
          border-bottom: 1px solid var(--ib-border);
        }

        .${PAGE}__icon {
          width: 46px;
          height: 46px;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          border-radius: 13px;
          color: var(--ib-blue-dark);
          background: var(--ib-blue-soft);
        }

        .${PAGE}__icon svg {
          width: 24px;
          height: 24px;
        }

        .${PAGE}__evidence-item p {
          color: var(--ib-body);
          font-size: 16px;
        }

        .${PAGE}__split {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          gap: 76px;
          align-items: start;
        }

        .${PAGE}__split--center {
          align-items: center;
        }

        .${PAGE}__lead {
          color: #293954;
          font-size: 18px;
        }

        .${PAGE}__check-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 28px;
          margin-top: 30px;
        }

        .${PAGE}__check {
          display: flex;
          align-items: flex-start;
          gap: 11px;
          min-height: 36px;
          color: var(--ib-body);
          font-size: 16px;
        }

        .${PAGE}__check-mark {
          width: 23px;
          height: 23px;
          flex: 0 0 23px;
          display: grid;
          place-items: center;
          margin-top: 1px;
          border-radius: 50%;
          color: var(--ib-blue-dark);
          background: var(--ib-blue-soft);
        }

        .${PAGE}__check-mark svg {
          width: 15px;
          height: 15px;
        }

        .${PAGE}__science-panel {
          padding: 34px;
          border: 1px solid var(--ib-border);
          border-radius: 28px;
          background: #FFFFFF;
        }

        .${PAGE}__science-map {
          display: grid;
          grid-template-columns: 1fr 64px 1fr;
          align-items: stretch;
          row-gap: 14px;
        }

        .${PAGE}__science-node {
          min-height: 76px;
          display: flex;
          align-items: center;
          padding: 18px 20px;
          border: 1px solid var(--ib-border);
          border-radius: 18px;
          background: var(--ib-blue-pale);
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
        }

        .${PAGE}__science-arrow {
          display: grid;
          place-items: center;
          color: var(--ib-blue);
          font-size: 26px;
          font-weight: 400;
        }

        .${PAGE}__science-center {
          grid-column: 1 / -1;
          min-height: 88px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 8px 0 2px;
          padding: 18px;
          border-radius: 20px;
          background: var(--ib-navy);
          color: #FFFFFF;
          text-align: center;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
        }

        .${PAGE}__safety-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.04fr) minmax(330px, .96fr);
          gap: 58px;
          padding: 48px;
          border: 1px solid #D8E2FB;
          border-radius: 30px;
          background: #FFFFFF;
        }

        .${PAGE}__safety-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px 26px;
        }

        .${PAGE}__safety-list li {
          position: relative;
          padding-left: 22px;
          color: var(--ib-body);
          font-size: 16px;
        }

        .${PAGE}__safety-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .72em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--ib-blue);
        }

        .${PAGE}__safety-note {
          padding: 28px;
          border-radius: 22px;
          background: var(--ib-navy);
          color: #FFFFFF;
        }

        .${PAGE}__safety-note h3 {
          color: #FFFFFF;
        }

        .${PAGE}__safety-note p {
          color: #DDE6F7;
        }

        .${PAGE}__text-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--ib-blue-dark) !important;
          font-weight: 700;
          text-decoration: none;
        }

        .${PAGE}__text-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .${PAGE}__text-link--light {
          color: #FFFFFF !important;
        }

        .${PAGE}__text-link svg {
          width: 17px;
          height: 17px;
        }

        .${PAGE}__dose-band {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          align-items: center;
          gap: 0;
          margin-top: 42px;
        }

        .${PAGE}__dose-node {
          min-height: 86px;
          position: relative;
          display: grid;
          place-items: center;
          padding: 16px 14px;
          border-top: 1px solid var(--ib-border);
          border-bottom: 1px solid var(--ib-border);
          background: #FFFFFF;
          color: var(--ib-navy);
          text-align: center;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 16px;
          font-weight: 500;
        }

        .${PAGE}__dose-node:first-child {
          border-left: 1px solid var(--ib-border);
          border-radius: 20px 0 0 20px;
        }

        .${PAGE}__dose-node:last-child {
          border-right: 1px solid var(--ib-border);
          border-radius: 0 20px 20px 0;
        }

        .${PAGE}__dose-node:not(:last-child)::after {
          content: "→";
          position: absolute;
          right: -15px;
          z-index: 2;
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--ib-blue);
          color: #FFFFFF;
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
        }

        .${PAGE}__dose-context {
          max-width: 840px;
          margin: 34px auto 0;
          text-align: center;
        }

        .${PAGE}__workflow {
          border-top: 1px solid var(--ib-border);
        }

        .${PAGE}__workflow-step {
          display: grid;
          grid-template-columns: 90px minmax(220px, .75fr) minmax(0, 1.5fr);
          gap: 28px;
          padding: 28px 0;
          border-bottom: 1px solid var(--ib-border);
          align-items: start;
        }

        .${PAGE}__workflow-number {
          color: var(--ib-blue-dark);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 30px;
          font-weight: 500;
          line-height: 1.2;
        }

        .${PAGE}__workflow-step h3 {
          margin: 2px 0 0;
          font-size: 20px;
        }

        .${PAGE}__workflow-step p {
          margin: 0;
          max-width: 700px;
        }

        .${PAGE}__ai-grid {
          display: grid;
          grid-template-columns: minmax(0, .84fr) minmax(0, 1.16fr);
          gap: 64px;
          align-items: center;
        }

        .${PAGE}__section--navy h2,
        .${PAGE}__section--navy h3 {
          color: #FFFFFF;
        }

        .${PAGE}__section--navy p {
          color: #DDE6F7;
        }

        .${PAGE}__ai-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .${PAGE}__ai-check {
          min-height: 72px;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 17px 18px;
          border: 1px solid rgba(200,214,255,.28);
          border-radius: 18px;
          background: rgba(255,255,255,.06);
          color: #FFFFFF;
          font-size: 16px;
        }

        .${PAGE}__ai-check span:first-child {
          width: 24px;
          height: 24px;
          flex: 0 0 24px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(200,214,255,.17);
          color: var(--ib-light-on-dark);
        }

        .${PAGE}__ai-check svg {
          width: 15px;
          height: 15px;
        }

        .${PAGE}__connected-grid {
          display: grid;
          grid-template-columns: minmax(390px, .9fr) minmax(0, 1.1fr);
          gap: 76px;
          align-items: center;
        }

        .${PAGE}__connection {
          min-height: 500px;
          position: relative;
        }

        .${PAGE}__connection-center,
        .${PAGE}__connection-node {
          position: absolute;
          z-index: 2;
          display: grid;
          place-items: center;
          border-radius: 50%;
          text-align: center;
        }

        .${PAGE}__connection-center {
          left: 50%;
          top: 50%;
          width: 174px;
          height: 174px;
          transform: translate(-50%, -50%);
          background: var(--ib-navy);
          color: #FFFFFF;
          box-shadow: 0 16px 40px rgba(23,38,77,.14);
        }

        .${PAGE}__connection-center span {
          display: block;
          color: var(--ib-light-on-dark);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .${PAGE}__connection-center strong {
          display: block;
          margin-top: 3px;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 23px;
          font-weight: 500;
        }

        .${PAGE}__connection-node {
          width: 118px;
          height: 118px;
          padding: 14px;
          border: 1px solid #C9D5F5;
          background: #FFFFFF;
          color: var(--ib-blue-dark);
          font-size: 14px;
          font-weight: 700;
          box-shadow: 0 10px 28px rgba(37,63,143,.08);
        }

        .${PAGE}__connection-node--one { left: 2%; top: 8%; }
        .${PAGE}__connection-node--two { right: 3%; top: 4%; }
        .${PAGE}__connection-node--three { right: 0; bottom: 8%; }
        .${PAGE}__connection-node--four { left: 5%; bottom: 4%; }
        .${PAGE}__connection-node--five {
          left: 50%;
          bottom: -2%;
          transform: translateX(-50%);
          width: 128px;
          height: 128px;
        }

        .${PAGE}__connection-line {
          position: absolute;
          z-index: 1;
          left: 50%;
          top: 50%;
          width: 170px;
          height: 2px;
          transform-origin: left center;
          background: #B7C4E5;
        }

        .${PAGE}__connection-line--one { transform: rotate(218deg); }
        .${PAGE}__connection-line--two { transform: rotate(320deg); }
        .${PAGE}__connection-line--three { transform: rotate(38deg); }
        .${PAGE}__connection-line--four { transform: rotate(142deg); }
        .${PAGE}__connection-line--five { width: 165px; transform: rotate(90deg); }

        .${PAGE}__relationship-list {
          border-top: 1px solid var(--ib-border);
        }

        .${PAGE}__relationship-row {
          display: grid;
          grid-template-columns: 190px 1fr auto;
          gap: 22px;
          align-items: start;
          padding: 22px 0;
          border-bottom: 1px solid var(--ib-border);
        }

        .${PAGE}__relationship-row strong {
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 17px;
          font-weight: 500;
        }

        .${PAGE}__relationship-row p {
          margin: 0;
          font-size: 16px;
        }

        .${PAGE}__relationship-row a {
          margin-top: 1px;
          white-space: nowrap;
        }

        .${PAGE}__version-graphic {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr auto 1fr;
          gap: 12px;
          align-items: center;
          margin: 48px 0;
        }

        .${PAGE}__version-stage {
          min-height: 118px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 18px 12px;
          border: 1px solid var(--ib-border);
          border-radius: 20px;
          background: #FFFFFF;
          text-align: center;
        }

        .${PAGE}__version-stage span {
          color: var(--ib-muted);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: .1em;
        }

        .${PAGE}__version-stage strong {
          margin-top: 8px;
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
        }

        .${PAGE}__version-stage--event {
          border-color: #C4D0F3;
          background: var(--ib-blue-soft);
        }

        .${PAGE}__version-arrow {
          color: var(--ib-blue);
          font-size: 24px;
        }

        .${PAGE}__version-controls {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--ib-border);
          border-left: 1px solid var(--ib-border);
          border-radius: 26px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE}__version-control {
          min-height: 210px;
          padding: 28px;
          border-right: 1px solid var(--ib-border);
          border-bottom: 1px solid var(--ib-border);
        }

        .${PAGE}__version-control p {
          margin-bottom: 0;
        }

        .${PAGE}__lifecycle-callout {
          max-width: 940px;
          margin: 38px auto 0;
          padding: 24px 30px;
          border-left: 3px solid var(--ib-blue);
          background: #FFFFFF;
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.45;
        }

        .${PAGE}__continuity-note {
          max-width: 940px;
          margin: 18px auto 0;
          color: var(--ib-body);
          font-size: 16px;
          text-align: center;
        }

        .${PAGE}__global-grid {
          display: grid;
          grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
          gap: 70px;
          align-items: start;
        }

        .${PAGE}__global-stat {
          display: inline-flex;
          flex-direction: column;
          margin-top: 18px;
          padding: 26px 30px;
          border-radius: 24px;
          background: var(--ib-blue-soft);
        }

        .${PAGE}__global-stat strong {
          color: var(--ib-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 42px;
          font-weight: 500;
          line-height: 1;
        }

        .${PAGE}__global-stat span {
          margin-top: 7px;
          color: var(--ib-blue-dark);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: .08em;
          text-transform: uppercase;
        }

        .${PAGE}__capability-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--ib-border);
        }

        .${PAGE}__capability {
          min-height: 78px;
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 18px 18px 18px 0;
          border-bottom: 1px solid var(--ib-border);
          color: var(--ib-body);
        }

        .${PAGE}__capability:nth-child(even) {
          padding-left: 24px;
          border-left: 1px solid var(--ib-border);
        }

        .${PAGE}__capability svg {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          color: var(--ib-blue-dark);
        }

        .${PAGE}__quality-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--ib-border);
          border-left: 1px solid var(--ib-border);
          border-radius: 26px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE}__quality-item {
          min-height: 210px;
          padding: 30px 32px;
          border-right: 1px solid var(--ib-border);
          border-bottom: 1px solid var(--ib-border);
          background: #FFFFFF;
        }

        .${PAGE}__quality-index {
          width: 35px;
          height: 4px;
          margin-bottom: 23px;
          border-radius: 999px;
          background: var(--ib-blue);
        }

        .${PAGE}__faq-wrap {
          display: grid;
          grid-template-columns: minmax(280px, .72fr) minmax(0, 1.28fr);
          gap: 76px;
          align-items: start;
        }

        .${PAGE}__faq-intro {
          position: sticky;
          top: 30px;
        }

        .${PAGE}__faq-list {
          border-top: 1px solid var(--ib-border);
        }

        .${PAGE}__faq-item {
          border-bottom: 1px solid var(--ib-border);
        }

        .${PAGE}__faq-question {
          width: 100%;
          min-height: 78px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--ib-navy);
          text-align: left;
          cursor: pointer;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE}__faq-plus {
          width: 34px;
          height: 34px;
          flex: 0 0 34px;
          display: grid;
          place-items: center;
          border: 1px solid var(--ib-border);
          border-radius: 50%;
          color: var(--ib-blue-dark);
          font-family: Inter, Arial, sans-serif;
          font-size: 23px;
          font-weight: 400;
        }

        .${PAGE}__faq-answer {
          padding: 0 52px 22px 0;
        }

        .${PAGE}__faq-answer p {
          max-width: 820px;
          margin: 0;
          font-size: 16px;
        }

        .${PAGE}__related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--ib-border);
          border-left: 1px solid var(--ib-border);
          border-radius: 24px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .${PAGE}__related-link {
          min-height: 118px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 24px 26px;
          border-right: 1px solid var(--ib-border);
          border-bottom: 1px solid var(--ib-border);
          color: var(--ib-navy) !important;
          text-decoration: none;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.35;
        }

        .${PAGE}__related-link:hover {
          background: var(--ib-blue-pale);
        }

        .${PAGE}__related-link svg {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          color: var(--ib-blue-dark);
        }

        .${PAGE}__related-parent {
          margin-top: 28px;
        }

        .${PAGE}__final {
          padding: 88px 0;
          background:
            radial-gradient(circle at 80% 20%, rgba(111,139,225,.34), transparent 28%),
            linear-gradient(135deg, #17264D 0%, #253F8F 100%);
        }

        .${PAGE}__final-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) auto;
          gap: 56px;
          align-items: center;
        }

        .${PAGE}__final h2 {
          max-width: 780px;
          margin-bottom: 16px;
          color: #FFFFFF;
        }

        .${PAGE}__final p {
          max-width: 820px;
          margin-bottom: 0;
          color: #DDE6F7;
          font-size: 18px;
        }

        .${PAGE}__final .${PAGE}__actions {
          justify-content: flex-end;
        }

        .${PAGE}__final .${PAGE}__button--secondary {
          border-color: #FFFFFF;
        }

        @media (max-width: 1100px) {
          .${PAGE}__shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .${PAGE}__hero-grid {
            grid-template-columns: minmax(0, 1.1fr) minmax(330px, .9fr);
            gap: 36px;
          }

          .${PAGE}__evidence-grid,
          .${PAGE}__version-controls {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE}__related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .${PAGE}__connected-grid {
            gap: 40px;
          }

          .${PAGE}__connection {
            transform: scale(.9);
            transform-origin: center;
          }

          .${PAGE}__version-graphic {
            gap: 7px;
          }

          .${PAGE}__version-stage {
            min-height: 108px;
            padding: 14px 8px;
          }

          .${PAGE}__version-stage strong {
            font-size: 18px;
          }

        }

        @media (max-width: 820px) {
          .${PAGE}__shell {
            padding-left: 30px;
            padding-right: 30px;
          }

          .${PAGE}__section {
            padding: 76px 0;
          }

          .${PAGE}__section--dense {
            padding: 68px 0;
          }

          .${PAGE}__hero {
            padding: 76px 0 70px;
          }

          .${PAGE} h1 {
            font-size: 43px;
          }

          .${PAGE} h2 {
            font-size: 34px;
          }

          .${PAGE}__hero-grid,
          .${PAGE}__split,
          .${PAGE}__safety-panel,
          .${PAGE}__ai-grid,
          .${PAGE}__connected-grid,
          .${PAGE}__global-grid,
          .${PAGE}__faq-wrap,
          .${PAGE}__final-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE}__hero-grid {
            gap: 46px;
          }

          .${PAGE}__hero-art {
            margin: 0 auto;
            max-width: 500px;
          }

          .${PAGE}__trust-grid {
            grid-template-columns: 1fr 1fr;
          }

          .${PAGE}__trust-item + .${PAGE}__trust-item {
            border-left: 0;
          }

          .${PAGE}__trust-item:nth-child(even) {
            border-left: 1px solid var(--ib-divider);
          }

          .${PAGE}__trust-item:nth-child(n+3) {
            border-top: 1px solid var(--ib-divider);
          }

          .${PAGE}__evidence-grid,
          .${PAGE}__version-controls,
          .${PAGE}__quality-grid {
            grid-template-columns: 1fr 1fr;
          }

          .${PAGE}__dose-band {
            grid-template-columns: 1fr;
            gap: 0;
            max-width: 620px;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE}__dose-node {
            border: 1px solid var(--ib-border);
            border-radius: 0;
          }

          .${PAGE}__dose-node:first-child {
            border-radius: 18px 18px 0 0;
          }

          .${PAGE}__dose-node:last-child {
            border-radius: 0 0 18px 18px;
          }

          .${PAGE}__dose-node:not(:last-child)::after {
            content: "↓";
            right: auto;
            bottom: -15px;
            top: auto;
          }

          .${PAGE}__workflow-step {
            grid-template-columns: 70px 1fr;
            gap: 18px 24px;
          }

          .${PAGE}__workflow-step p {
            grid-column: 2;
          }

          .${PAGE}__connection {
            width: min(100%, 580px);
            margin: 0 auto;
          }

          .${PAGE}__relationship-row {
            grid-template-columns: 150px 1fr;
          }

          .${PAGE}__relationship-row a {
            grid-column: 2;
          }

          .${PAGE}__version-graphic {
            grid-template-columns: 1fr;
            max-width: 520px;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE}__version-arrow {
            transform: rotate(90deg);
            text-align: center;
          }

          .${PAGE}__faq-intro {
            position: static;
          }

          .${PAGE}__final .${PAGE}__actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 600px) {
          .${PAGE}__shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .${PAGE}__section {
            padding: 68px 0;
          }

          .${PAGE}__section--dense {
            padding: 64px 0;
          }

          .${PAGE}__hero {
            padding: 66px 0 62px;
          }

          .${PAGE} h1 {
            font-size: 42px;
            line-height: 1.23;
          }

          .${PAGE} h2 {
            font-size: 32px;
            line-height: 1.3;
          }

          .${PAGE} h3 {
            font-size: 21px;
          }

          .${PAGE}__hero-lead {
            font-size: 18px;
          }

          .${PAGE}__hero-copy,
          .${PAGE}__heading p {
            font-size: 17px;
          }

          .${PAGE}__actions {
            flex-direction: column;
          }

          .${PAGE}__button {
            width: 100%;
          }

          .${PAGE}__hero-art {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE}__trust-grid {
            grid-template-columns: 1fr 1fr;
          }

          .${PAGE}__trust-item {
            padding: 16px 10px;
          }

          .${PAGE}__trust-item strong {
            font-size: 16px;
          }

          .${PAGE}__heading--mobile-center {
            text-align: center;
            margin-left: auto;
            margin-right: auto;
          }

          .${PAGE}__heading--mobile-center p {
            text-align: left;
          }

          .${PAGE}__global-copy h2,
          .${PAGE}__final-copy h2 {
            text-align: center;
          }

          .${PAGE}__global-copy p,
          .${PAGE}__final-copy p {
            text-align: left;
          }

          .${PAGE}__evidence-grid,
          .${PAGE}__version-controls,
          .${PAGE}__quality-grid,
          .${PAGE}__related-grid,
          .${PAGE}__check-grid,
          .${PAGE}__safety-list,
          .${PAGE}__ai-checks,
          .${PAGE}__capability-list {
            grid-template-columns: 1fr;
          }

          .${PAGE}__evidence-item {
            min-height: 0;
            padding: 28px 24px;
          }

          .${PAGE}__science-panel {
            padding: 24px 18px;
          }

          .${PAGE}__science-map {
            grid-template-columns: 1fr;
          }

          .${PAGE}__science-arrow {
            transform: rotate(90deg);
          }

          .${PAGE}__science-center {
            grid-column: 1;
          }

          .${PAGE}__safety-panel {
            padding: 30px 22px;
          }

          .${PAGE}__dose-band {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .${PAGE}__dose-node {
            border: 1px solid var(--ib-border);
            border-radius: 0;
          }

          .${PAGE}__dose-node:first-child {
            border-radius: 18px 18px 0 0;
          }

          .${PAGE}__dose-node:last-child {
            border-radius: 0 0 18px 18px;
          }

          .${PAGE}__dose-node:not(:last-child)::after {
            content: "↓";
            right: auto;
            bottom: -15px;
            top: auto;
          }

          .${PAGE}__workflow-step {
            grid-template-columns: 52px 1fr;
            gap: 12px 16px;
            padding: 24px 0;
          }

          .${PAGE}__workflow-number {
            font-size: 24px;
          }

          .${PAGE}__workflow-step p {
            grid-column: 1 / -1;
            padding-left: 68px;
          }

          .${PAGE}__authority-note {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 20px 22px;
          }

          .${PAGE}__dose-context,
          .${PAGE}__continuity-note {
            text-align: left;
          }

          .${PAGE}__connection {
            min-height: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            transform: none;
          }

          .${PAGE}__connection-center,
          .${PAGE}__connection-node {
            position: static;
            width: 100%;
            height: auto;
            min-height: 86px;
            transform: none;
            border-radius: 18px;
          }

          .${PAGE}__connection-center {
            grid-column: 1 / -1;
            min-height: 112px;
            border-radius: 22px;
          }

          .${PAGE}__connection-node--five {
            grid-column: 1 / -1;
          }

          .${PAGE}__connection-line {
            display: none;
          }

          .${PAGE}__relationship-row {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .${PAGE}__relationship-row a {
            grid-column: 1;
          }

          .${PAGE}__version-control {
            min-height: 0;
          }

          .${PAGE}__lifecycle-callout {
            margin-top: 28px;
            padding: 22px 22px;
            font-size: 18px;
          }

          .${PAGE}__capability:nth-child(even) {
            padding-left: 0;
            border-left: 0;
          }

          .${PAGE}__quality-item {
            min-height: 0;
          }

          .${PAGE}__faq-wrap {
            gap: 30px;
          }

          .${PAGE}__faq-question {
            min-height: 72px;
            font-size: 18px;
          }

          .${PAGE}__faq-answer {
            padding-right: 0;
          }

          .${PAGE}__final {
            padding: 72px 0;
          }

          .${PAGE}__final .${PAGE}__actions {
            justify-content: center;
          }
        }

        @media (max-width: 350px) {
          .${PAGE} h1 {
            font-size: 38px;
          }

          .${PAGE} h2 {
            font-size: 30px;
          }


          .${PAGE}__trust-grid {
            grid-template-columns: 1fr;
          }

          .${PAGE}__trust-item:nth-child(even) {
            border-left: 0;
          }

          .${PAGE}__trust-item + .${PAGE}__trust-item {
            border-top: 1px solid var(--ib-divider);
          }

          .${PAGE}__workflow-step p {
            padding-left: 0;
          }

        }

        @media (prefers-reduced-motion: reduce) {
          .${PAGE}__button {
            transition: none;
          }
        }
      `}</style>

      <section className={`${PAGE}__hero`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__hero-grid`}>
            <div>
              <p className={`${PAGE}__eyebrow`}>CLINICAL DEVELOPMENT DOCUMENTATION</p>
              <h1>Investigator’s Brochure Translation Services</h1>
              <p className={`${PAGE}__hero-lead`}>
                Maintain scientific, safety, dosing, and product information consistently across languages as your Investigator’s Brochure evolves through clinical development.
              </p>
              <p className={`${PAGE}__hero-copy`}>
                Sesen provides specialized Investigator’s Brochure translation services for pharmaceutical, biotechnology, and clinical research organizations managing global studies. We combine life sciences linguists, controlled terminology, expert human review, AI-assisted quality controls, and multilingual version management to support reliable IB delivery from the first translated edition through subsequent amendments.
              </p>
              <div className={`${PAGE}__actions`}>
                <a className={`${PAGE}__button ${PAGE}__button--primary`} href={links.quote}>
                  REQUEST A QUOTE <Icon type="arrow" />
                </a>
                <a className={`${PAGE}__button ${PAGE}__button--secondary`} href={links.sales}>
                  TALK WITH TEAM SESEN
                </a>
              </div>
            </div>
            <EvidenceGraphic />
          </div>
        </div>
      </section>

      <section className={`${PAGE}__trust`} aria-label="Sesen Investigator’s Brochure translation capabilities">
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__trust-grid`}>
            <div className={`${PAGE}__trust-item`}>
              <strong>150+ Languages</strong>
              <span>Global multilingual support</span>
            </div>
            <div className={`${PAGE}__trust-item`}>
              <strong>Life Sciences</strong>
              <span>Specialized linguistic expertise</span>
            </div>
            <div className={`${PAGE}__trust-item`}>
              <strong>ISO-Certified</strong>
              <span>Quality-controlled processes</span>
            </div>
            <div className={`${PAGE}__trust-item`}>
              <strong>AI-Assisted QA</strong>
              <span>Human-reviewed delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading ${PAGE}__heading--center ${PAGE}__heading--mobile-center`}>
            <h2>An Investigator’s Brochure Brings Evolving Evidence Together</h2>
            <p>
              An Investigator’s Brochure is not one isolated body of text. It brings together the scientific information investigators and other study stakeholders need to understand the investigational product, the rationale for its use, and important considerations for administration and safety monitoring.
            </p>
            <p>
              For multilingual studies, the challenge is therefore not simply translating one document accurately. The scientific relationships within the IB must remain intact across every required language and every subsequent version.
            </p>
            <div className={`${PAGE}__authority-note`}>
              <strong>ICH E6(R3) Context</strong>
              <span>
                The current ICH Good Clinical Practice framework describes the Investigator’s Brochure as a compilation of relevant clinical and nonclinical data and connects it directly with investigator understanding of dose, dosing frequency, administration, and safety monitoring.
              </span>
            </div>
          </div>

          <div className={`${PAGE}__evidence-grid`}>
            {evidenceStreams.map((item) => (
              <article className={`${PAGE}__evidence-item`} key={item.title}>
                <div className={`${PAGE}__icon`}><Icon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--soft`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__split ${PAGE}__split--center`}>
            <div>
              <h2>Scientific Evidence Has to Remain Connected Across Languages</h2>
              <p className={`${PAGE}__lead`}>
                A technically correct sentence can still create a problem if it does not align with information elsewhere in the Investigator’s Brochure.
              </p>
              <p>
                A product term used in a nonclinical section may reappear in clinical pharmacology. A dose discussed in clinical evidence may need to match administration guidance. An adverse reaction described in one safety section may also appear in Reference Safety Information. Study identifiers, abbreviations, units, tables, and references can recur throughout the document.
              </p>
              <div className={`${PAGE}__context-note`}>
                <h3>Scientific Accuracy Is More Than Sentence-by-Sentence Translation</h3>
                <p>
                  Context determines whether a term describes an observed finding, a potential risk, a mechanism, a dosing instruction, or a product characteristic. Qualified wording and scientific distinctions must not be strengthened, weakened, or unintentionally generalized in another language.
                </p>
              </div>
              <div className={`${PAGE}__check-grid`}>
                {consistencyItems.map((item) => (
                  <div className={`${PAGE}__check`} key={item}>
                    <span className={`${PAGE}__check-mark`}><Icon type="check" /></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${PAGE}__science-panel`}>
              <div className={`${PAGE}__science-map`} role="img" aria-label="Connected scientific information inside an Investigator’s Brochure">
                <div className={`${PAGE}__science-node`}>Nonclinical Findings</div>
                <div className={`${PAGE}__science-arrow`} aria-hidden="true">→</div>
                <div className={`${PAGE}__science-node`}>Clinical Evidence</div>

                <div className={`${PAGE}__science-node`}>Pharmacology &amp; PK/PD</div>
                <div className={`${PAGE}__science-arrow`} aria-hidden="true">↔</div>
                <div className={`${PAGE}__science-node`}>Dose &amp; Administration</div>

                <div className={`${PAGE}__science-center`}>CONTROLLED MULTILINGUAL INVESTIGATOR’S BROCHURE</div>

                <div className={`${PAGE}__science-node`}>Safety &amp; RSI</div>
                <div className={`${PAGE}__science-arrow`} aria-hidden="true">↔</div>
                <div className={`${PAGE}__science-node`}>Product Information</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--pale`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__safety-panel`}>
            <div>
              <p className={`${PAGE}__eyebrow`}>SAFETY &amp; RSI</p>
              <h2>Safety Information Has to Stay Current Across Every Language</h2>
              <p className={`${PAGE}__lead`}>
                Safety content deserves particular attention because an Investigator’s Brochure can change as additional exposure and clinical information become available.
              </p>
              <p>
                Under ICH E6(R3), the IB or other current scientific information supports clinical-trial safety assessment and reporting, while Reference Safety Information in the IB provides an important reference for expectedness in expedited SUSAR reporting.
              </p>
              <p>
                Multilingual IB safety content may include adverse reactions, known and potential risks, emerging safety findings, safety monitoring information, relevant medical terminology, Reference Safety Information, and safety-related revisions.
              </p>
              <ul className={`${PAGE}__safety-list`}>
                <li>Adverse reactions</li>
                <li>Nature and frequency of reactions</li>
                <li>Known and potential risks</li>
                <li>Emerging safety findings</li>
                <li>Safety monitoring information</li>
                <li>Reference Safety Information</li>
                <li>Medical and pharmacovigilance terminology</li>
                <li>Safety-related amendments</li>
              </ul>
            </div>

            <aside className={`${PAGE}__safety-note`}>
              <h3>Preserve the Approved Safety Meaning</h3>
              <p>
                Sesen translates approved source safety information and helps maintain linguistic consistency across required target languages. Medical, expectedness, causality, reportability, and regulatory decisions remain with the sponsor and responsible clinical, pharmacovigilance, medical, and regulatory functions.
              </p>
              <a className={`${PAGE}__text-link ${PAGE}__text-link--light`} href={links.pharmacovigilance}>
                Explore Pharmacovigilance Translation Services <Icon type="arrow" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--dense`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading ${PAGE}__heading--center ${PAGE}__heading--mobile-center`}>
            <h2>Dose and Product Information Cannot Drift Between Sections</h2>
            <p>
              The rationale for a particular dose may originate in pharmacology or toxicology findings, develop through clinical experience, appear in dose-response information, and ultimately connect with administration and safety monitoring. Sesen helps maintain those relationships without reinterpreting the approved science.
            </p>
          </div>

          <div className={`${PAGE}__dose-band`} aria-label="Connected dosing and clinical evidence">
            {["Pharmacology", "PK/PD", "Dose Rationale", "Administration", "Clinical Evidence", "Safety"].map((item) => (
              <div className={`${PAGE}__dose-node`} key={item}>{item}</div>
            ))}
          </div>

          <p className={`${PAGE}__dose-context`}>
            These same concepts can also appear in the clinical trial protocol. When approved reference documents are available, Sesen can align critical terminology between the IB and related study content.{" "}
            <a className={`${PAGE}__text-link`} href={links.protocol}>Explore Protocol Translation Services <Icon type="arrow" /></a>
          </p>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--soft`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading`}>
            <h2>A Structured Workflow for Multilingual Investigator’s Brochures</h2>
            <p>
              Every IB program has its own source history, language requirements, existing translations, terminology resources, review pathway, file formats, and release schedule. Sesen builds the workflow around those requirements while maintaining structured linguistic and quality controls.
            </p>
          </div>

          <div className={`${PAGE}__workflow`}>
            {workflowSteps.map((step) => (
              <div className={`${PAGE}__workflow-step`} key={step.number}>
                <div className={`${PAGE}__workflow-number`}>{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--navy`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__ai-grid`}>
            <div>
              <p className={`${PAGE}__eyebrow ${PAGE}__eyebrow--light`}>AI-ASSISTED QUALITY CONTROL</p>
              <h2>Technology Helps Surface Risk. Experts Make the Quality Decisions.</h2>
              <p>
                For suitable Investigator’s Brochure workflows, Sesen can combine translation memory, terminology governance, controlled AI assistance, AI-assisted validation, and qualified human review.
              </p>
              <p>
                Technology-supported checks help reviewers find patterns and potential inconsistencies faster. Qualified life sciences linguists and reviewers remain responsible for evaluating context, scientific meaning, terminology, and final multilingual quality.
              </p>
            </div>
            <div className={`${PAGE}__ai-checks`}>
              {[
                "Terminology inconsistencies",
                "Numerical and unit mismatches",
                "Dose discrepancies",
                "Missing or added content",
                "Acronym inconsistencies",
                "Structural differences",
                "Repeated-content inconsistencies",
                "Version-change deviations",
              ].map((item) => (
                <div className={`${PAGE}__ai-check`} key={item}>
                  <span><Icon type="check" /></span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__connected-grid`}>
            <ConnectionGraphic />

            <div>
              <h2>Keep the IB Aligned With the Rest of the Clinical Documentation Set</h2>
              <p className={`${PAGE}__lead`}>
                An Investigator’s Brochure does not operate independently from the rest of a clinical study.
              </p>
              <p>
                Scientific concepts and approved terminology can move among protocols, safety documentation, regulatory materials, ethics submissions, consent updates, study manuals, and other clinical documentation. Managing those relationships helps reduce terminology drift as studies and documents evolve.
              </p>

              <div className={`${PAGE}__relationship-list`}>
                {[
                  ["Protocol", "Product terminology, dose, administration, safety concepts, clinical rationale, and study-specific terms.", links.protocol],
                  ["Pharmacovigilance", "Evolving safety information can affect the IB and the broader safety-documentation ecosystem.", links.pharmacovigilance],
                  ["Regulatory Submissions", "Clinical and nonclinical evidence may also appear across submissions and supporting regulatory documentation.", links.regulatorySubmissions],
                  ["IRB / Ethics", "Current IB versions and updates can form part of ongoing ethics-review documentation.", links.irbEthics],
                  ["Clinical Study Docs", "The IB belongs within the broader multilingual documentation required throughout international studies.", links.clinicalStudyDocs],
                ].map(([title, copy, href]) => (
                  <div className={`${PAGE}__relationship-row`} key={title}>
                    <strong>{title}</strong>
                    <p>{copy}</p>
                    <a className={`${PAGE}__text-link`} href={href} aria-label={`Explore ${title} translation services`}>
                      Explore <Icon type="arrow" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--pale`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading ${PAGE}__heading--center ${PAGE}__heading--mobile-center`}>
            <p className={`${PAGE}__eyebrow`}>LIFECYCLE MANAGEMENT</p>
            <h2>The Investigator’s Brochure Changes as Clinical Knowledge Changes</h2>
            <p>
              New nonclinical findings, clinical data, safety information, RSI changes, dosing experience, and product information can drive source IB revisions. ICH E6(R3) calls for the IB to be reviewed at least annually and revised as necessary, with more frequent revision potentially appropriate as important new information emerges. For multilingual studies, each source change can create a downstream version-management requirement.
            </p>
          </div>

          <VersionGraphic />

          <div className={`${PAGE}__version-controls`}>
            {versionControls.map((item) => (
              <article className={`${PAGE}__version-control`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>

          <div className={`${PAGE}__lifecycle-callout`}>
            The objective is not simply to translate each new edition—it is to preserve continuity from one approved multilingual version to the next.
          </div>
          <p className={`${PAGE}__continuity-note`}>
            For recurring programs, approved terminology, reviewer decisions, translation memories, reference documentation, and prior quality findings can carry forward so each new release starts from an established multilingual baseline rather than from zero.
          </p>
        </div>
      </section>

      <section className={`${PAGE}__section`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__global-grid`}>
            <div className={`${PAGE}__global-copy`}>
              <h2>One Source Investigator’s Brochure. Multiple Languages. Controlled Delivery.</h2>
              <p>
                Multinational clinical programs may involve one language, dozens of languages, simultaneous country launches, phased market activation, or recurring updates over several years.
              </p>
              <p>
                Sesen supports single-language projects and coordinated multilingual IB programs, including country- and region-specific language variants where appropriate.
              </p>
              <div className={`${PAGE}__global-stat`}>
                <strong>150+</strong>
                <span>Supported languages</span>
              </div>
            </div>

            <div className={`${PAGE}__capability-list`}>
              {[
                "Complete Investigator’s Brochure translation",
                "Individual revised sections",
                "IB amendments and new editions",
                "Multilingual parallel production",
                "Translation-memory and approved-content reuse",
                "Terminology management",
                "Safety and RSI updates",
                "Formatting and DTP",
                "Tables and figures",
                "Reviewer feedback incorporation",
                "Version reconciliation",
                "Certificates of translation accuracy when requested",
                "Coordinated multilingual release schedules",
                "Ongoing clinical development translation programs",
              ].map((item) => (
                <div className={`${PAGE}__capability`} key={item}>
                  <Icon type="check" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--soft`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading ${PAGE}__heading--center ${PAGE}__heading--mobile-center`}>
            <h2>Quality Controls Designed for Clinical and Scientific Content</h2>
            <p>
              Investigator’s Brochures combine high-value scientific information with ongoing clinical and safety relevance. Sesen applies a quality framework built for regulated life sciences content and multilingual continuity.
            </p>
          </div>

          <div className={`${PAGE}__quality-grid`}>
            {qualityItems.map((item) => (
              <article className={`${PAGE}__quality-item`} key={item.title}>
                <div className={`${PAGE}__quality-index`} aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section ${PAGE}__section--soft`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__faq-wrap`}>
            <div className={`${PAGE}__faq-intro`}>
              <h2>Investigator’s Brochure Translation FAQs</h2>
              <p>
                Answers to common questions about IB scope, Reference Safety Information, amendments, protocol alignment, reviewer workflows, and long-term multilingual version management.
              </p>
            </div>

            <div className={`${PAGE}__faq-list`}>
              {faqs.map((item, index) => (
                <FAQItem
                  item={item}
                  open={openFaq === index}
                  onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                  key={item.q}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${PAGE}__section`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__heading ${PAGE}__heading--mobile-center`}>
            <h2>Keep Related Clinical Documentation Connected</h2>
            <p>
              Continue into the clinical, safety, regulatory, and ethics services most closely connected with Investigator’s Brochure translation and lifecycle updates.
            </p>
          </div>

          <div className={`${PAGE}__related-grid`}>
            {relatedServices.map((service) => (
              <a className={`${PAGE}__related-link`} href={service.href} key={service.title}>
                <span>{service.title}</span>
                <Icon type="arrow" />
              </a>
            ))}
          </div>

          <p className={`${PAGE}__related-parent`}>
            <a className={`${PAGE}__text-link`} href={links.clinicalTrials}>
              Explore Clinical Trial Translation Services <Icon type="arrow" />
            </a>
          </p>
        </div>
      </section>

      <section className={`${PAGE}__final`}>
        <div className={`${PAGE}__shell`}>
          <div className={`${PAGE}__final-grid`}>
            <div className={`${PAGE}__final-copy`}>
              <h2>Keep Your Investigator’s Brochure Consistent Across Languages and Versions</h2>
              <p>
                Whether you are preparing the first multilingual IB, adding new countries, updating Reference Safety Information, incorporating new clinical evidence, or coordinating the next edition across multiple languages, Sesen can build a controlled translation workflow around your program.
              </p>
            </div>
            <div className={`${PAGE}__actions`}>
              <a className={`${PAGE}__button ${PAGE}__button--primary`} href={links.quote}>
                REQUEST A QUOTE <Icon type="arrow" />
              </a>
              <a className={`${PAGE}__button ${PAGE}__button--secondary`} href={links.sales}>
                TALK WITH TEAM SESEN
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
