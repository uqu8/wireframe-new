import React, { useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  blush: "#FDF2F7",
  blushStrong: "#F7E2EB",
  dark: "#121826",
  text: "#121826",
  muted: "#5C667A",
  line: "#E3E7EE",
  soft: "#F6F8FB",
  eyebrowDark: "#F2A7C6",
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
    filing: (
      <svg {...common}>
        <path d="M5 3.5h9.5L19 8v12.5H5z" />
        <path d="M14.5 3.5V8H19M8 10.5h7M8 13.5h4.5" />
        <circle cx="15.5" cy="16.5" r="2.4" />
        <path d="m14.5 16.5.7.7 1.5-1.7" />
      </svg>
    ),
    research: (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="m15 15 4.5 4.5M8.5 10.5h4M10.5 8.5v4" />
      </svg>
    ),
    litigation: (
      <svg {...common}>
        <path d="M12 3v17M7 20h10M6 6h12" />
        <path d="m7 6-3 7h6L7 6ZM17 6l-3 7h6l-3-7Z" />
        <path d="M4 13c.6 1.3 1.6 2 3 2s2.4-.7 3-2M14 13c.6 1.3 1.6 2 3 2s2.4-.7 3-2" />
      </svg>
    ),
    portfolio: (
      <svg {...common}>
        <rect x="4" y="5" width="12" height="14" rx="2" />
        <path d="M8 2.5h12v14M7.5 9h5M7.5 12h5M7.5 15h3" />
      </svg>
    ),
    biotech: (
      <svg {...common}>
        <path d="M8 3c3 3 5 5 8 8s3 7 0 10M16 3c-3 3-5 5-8 8s-3 7 0 10" />
        <path d="M8.5 6h7M7 10h10M7 14h10M8.5 18h7" />
      </svg>
    ),
    chemistry: (
      <svg {...common}>
        <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" />
        <path d="M8 15h8" />
      </svg>
    ),
    medical: (
      <svg {...common}>
        <rect x="3.5" y="4" width="17" height="16" rx="3" />
        <path d="M7 8h4M7 11h3M15 8.5v6M12 11.5h6M7 17h10" />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="3.5" y="4.5" width="17" height="15" rx="3" />
        <path d="m9 9-3 3 3 3M15 9l3 3-3 3M13 8l-2 8" />
      </svg>
    ),
    chip: (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9.5 10h5v4h-5zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
    engineering: (
      <svg {...common}>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
      </svg>
    ),
    energy: (
      <svg {...common}>
        <path d="M19.5 4.5C12 5 7 8.5 7 14c0 3 2 5 5 5 5 0 7-6 7.5-14.5Z" />
        <path d="M4 21c3.5-6 7.5-9.5 13-12" />
        <path d="m12.5 8-2.5 4h3l-1 4 3.5-5h-3z" />
      </svg>
    ),
    security: (
      <svg {...common}>
        <path d="M12 2.5 19 5v6c0 4.7-2.8 8.2-7 10.5C7.8 19.2 5 15.7 5 11V5z" />
        <path d="m9.5 12 1.7 1.7 3.6-4" />
      </svg>
    ),
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 12h17M12 3c2.4 2.5 3.5 5.5 3.5 9S14.4 18.5 12 21c-2.4-2.5-3.5-5.5-3.5-9S9.6 5.5 12 3" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 15V4M7.5 8.5 12 4l4.5 4.5" />
        <path d="M5 14v4.5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V14" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
};

const primaryCta = "https://app.stepes.com/quote/";
const contactUrl = "https://www.stepes.com/contact-us/";

const workflowPaths = [
  {
    icon: "filing",
    title: "Filing and Prosecution Translation",
    summary:
      "Controlled human translation and independent review for patent applications and prosecution materials prepared for attorney review or official submission.",
    items: [
      "Patent applications, claims, and specifications",
      "Priority, national phase, and regional phase documents",
      "Search reports, office actions, responses, and amendments",
      "Certification and final-format QA when requested",
    ],
  },
  {
    icon: "research",
    title: "Prior Art and Patent Research Translation",
    summary:
      "Flexible translation depth for patentability, freedom-to-operate, invalidity, portfolio analysis, and competitive research.",
    items: [
      "AI-assisted screening and document triage",
      "Summary and selected-passage translation",
      "Full professional translation",
      "Human verification of decision-critical content",
    ],
  },
  {
    icon: "litigation",
    title: "Patent Litigation and Evidentiary Translation",
    summary:
      "Secure, matter-specific translation for multilingual evidence, expert materials, discovery, and formal proceedings.",
    items: [
      "Claim charts, expert reports, and contentions",
      "Discovery, depositions, and technical exhibits",
      "Attorney-directed priorities and phased delivery",
      "Certified translation when required",
    ],
  },
  {
    icon: "portfolio",
    title: "Patent Portfolio and Family Translation",
    summary:
      "Centralized terminology, translation memory, and version control for related patents and recurring multilingual filings.",
    items: [
      "Approved patent-family terminology",
      "Translation-memory reuse with human review",
      "Multi-language coordination and status visibility",
      "Consistent instructions across jurisdictions",
    ],
  },
];

const documentGroups = [
  {
    title: "Patent Filing and Prosecution",
    items: [
      "Patent applications",
      "Independent and dependent claims",
      "Specifications and detailed descriptions",
      "Abstracts, drawings, and figure text",
      "Priority documents, assignments, and declarations",
      "Search and examination reports",
      "Office actions, responses, and amendments",
      "Appeals, oppositions, and national phase materials",
    ],
  },
  {
    title: "Patent Research and Analysis",
    items: [
      "Published applications and granted patents",
      "Prior art and non-patent literature",
      "Scientific and academic papers",
      "Conference publications and public disclosures",
      "Product documentation and engineering manuals",
      "Technical standards and specifications",
      "Competitor patent portfolios",
      "Patent-search reports and summaries",
    ],
  },
  {
    title: "Patent Litigation and Enforcement",
    items: [
      "Claim charts and expert reports",
      "Infringement and invalidity contentions",
      "Discovery materials and depositions",
      "Witness statements and technical exhibits",
      "Pleadings and court submissions",
      "Arbitration materials",
      "Licensing disputes",
      "Settlement documentation",
    ],
  },
  {
    title: "Commercialization and Portfolio Management",
    items: [
      "Patent assignments",
      "Licensing and technology-transfer agreements",
      "R&D collaboration agreements",
      "Invention disclosures",
      "IP due-diligence materials",
      "Patent valuation reports",
      "Portfolio review documentation",
      "Confidentiality and commercialization materials",
    ],
  },
];

const expertise = [
  {
    icon: "biotech",
    title: "Biotechnology and Pharmaceuticals",
    text: "Molecular biology, biologics, diagnostics, drug development, formulations, laboratory methods, and therapeutic technologies.",
  },
  {
    icon: "chemistry",
    title: "Chemistry and Materials Science",
    text: "Organic and inorganic chemistry, polymers, coatings, compounds, chemical processes, formulations, and advanced materials.",
  },
  {
    icon: "medical",
    title: "Medical Devices and Diagnostics",
    text: "Surgical instruments, diagnostic systems, imaging, in vitro diagnostics, connected devices, and combination products.",
  },
  {
    icon: "ai",
    title: "Software, AI, and Cybersecurity",
    text: "Algorithms, machine learning, cloud computing, software architecture, databases, network systems, and information security.",
  },
  {
    icon: "chip",
    title: "Electronics and Telecommunications",
    text: "Integrated circuits, semiconductors, sensors, wireless communications, signal processing, and connected technologies.",
  },
  {
    icon: "engineering",
    title: "Mechanical and Industrial Engineering",
    text: "Machinery, manufacturing systems, robotics, automotive technologies, aerospace engineering, and industrial processes.",
  },
  {
    icon: "energy",
    title: "Energy and Environmental Technologies",
    text: "Batteries, energy storage, renewable energy, power systems, clean technologies, and environmental engineering.",
  },
];

const processSteps = [
  {
    title: "Intended-Use and Scope Review",
    text: "We review the document type, technical subject, source and target languages, intended use, filing jurisdictions, certification requirements, reference materials, file formats, and requested delivery schedule.",
  },
  {
    title: "Technical Subject-Matter Assignment",
    text: "The project is matched with language professionals selected for the required language pair and relevant scientific, engineering, patent-document, or legal translation experience.",
  },
  {
    title: "Patent-Family and Terminology Preparation",
    text: "Related patents, previous translations, client glossaries, product documentation, defined terms, and attorney or filing-team instructions are organized before and during translation.",
  },
  {
    title: "Professional Translation",
    text: "The translator works with attention to technical meaning, claim structure, repeated terminology, references, numbers, units, tables, formulas, drawings, and source-document organization.",
  },
  {
    title: "Independent Linguistic and Technical Review",
    text: "When included in the selected workflow, a qualified reviewer checks accuracy, completeness, terminology, claim relationships, internal consistency, references, and adherence to project instructions.",
  },
  {
    title: "Automated and Final-Format QA",
    text: "Automated and manual checks help identify missing content, number and unit issues, claim numbering inconsistencies, figure references, terminology variations, formatting problems, and file-integrity risks.",
  },
  {
    title: "Client Review and Secure Delivery",
    text: "Final files are delivered through the agreed secure workflow, together with certification materials when requested. Approved feedback can be incorporated into language assets for related documents and future work.",
  },
];

const faqs = [
  {
    question: "What are patent translation services?",
    answer:
      "Patent translation services cover patent applications, claims, specifications, abstracts, drawings, prior art, office actions, litigation documents, and related intellectual property materials. They require language expertise, technical subject knowledge, terminology control, and a workflow matched to research, filing, prosecution, litigation, certification, or portfolio management.",
  },
  {
    question: "What information does Stepes need to quote a patent translation?",
    answer:
      "We typically need the source files, source and target languages, intended use, requested deadline, and required delivery format. For filing-related work, it is also helpful to provide the relevant jurisdiction, certification requirements, related patent-family documents, existing translations, glossaries, and instructions from patent counsel or a filing representative.",
  },
  {
    question: "What is the difference between filing-grade and prior-art translation?",
    answer:
      "A filing-oriented translation normally requires complete professional human translation, terminology controls, independent review, and detailed quality assurance. Prior-art work may begin with AI-assisted screening, a summary, or selected passages before important documents or sections are escalated to full professional translation and additional review.",
  },
  {
    question: "Can Stepes translate only the patent claims or selected sections?",
    answer:
      "Yes. Clients can request translation of claims, abstracts, descriptions, examples, tables, figures, or other selected sections. This is often useful for prior-art research, portfolio review, or attorney-directed analysis. The intended use and need for broader document context should be considered when determining scope.",
  },
  {
    question: "Do patent translations need to be certified?",
    answer:
      "Not every patent translation requires certification. Requirements depend on the receiving patent office, court, administrative body, jurisdiction, proceeding, document type, and instructions from counsel. Stepes can provide certification documentation according to the stated project requirements, while acceptance remains with the receiving authority.",
  },
  {
    question: "How does Stepes maintain terminology across related patents?",
    answer:
      "Stepes can use client glossaries, related patents, previous translations, approved terminology, translation memory, style instructions, and reviewer feedback. Terminology decisions can be recorded and applied across claims, specifications, drawings, amendments, target languages, and related documents, with professional review where context changes.",
  },
  {
    question: "Can Stepes translate drawings, formulas, tables, and sequence-related content?",
    answer:
      "Yes. We can support figure text, drawing labels, tables, mathematical notation, units, chemical formulas, biological terminology, and other specialized content. Files are reviewed during scoping to identify extraction, translation, formatting, engineering, and quality-assurance requirements.",
  },
  {
    question: "Can several national-phase languages be managed together?",
    answer:
      "Yes. Stepes can coordinate multiple target languages through one managed program with shared source files, terminology, related-patent references, project instructions, review requirements, and delivery schedules. This approach can improve consistency and simplify communication across a patent family.",
  },
  {
    question: "Can Stepes support urgent patent-filing deadlines?",
    answer:
      "Rush delivery may be available depending on the language pair, technical field, document length, source-file condition, review requirements, and availability of qualified translators and reviewers. Large projects may be delivered in approved phases or distributed among coordinated resources without removing essential quality controls unless the client approves a different workflow.",
  },
  {
    question: "Does Stepes provide patent legal advice?",
    answer:
      "No. Stepes provides linguistic, technical, formatting, certification, and multilingual workflow support. Patent counsel and filing representatives remain responsible for claims strategy, legal interpretation, jurisdiction-specific requirements, deadlines, filing decisions, and final approval of materials submitted to a patent office or other authority.",
  },
];

const resources = [
  {
    title: "PCT Patent Translation and National Phase Guide",
    text: "Plan translations for international applications, national-phase entry, priority documents, amendments, and coordinated multilingual patent families.",
    href: "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/",
    label: "Explore the PCT guide",
  },
  {
    title: "Patent Claims Translation Quality Checklist",
    text: "Review defined terms, claim dependencies, references, terminology, numbers, units, drawings, completeness, and final-file consistency.",
    href: "https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/",
    label: "View the claims checklist",
  },
  {
    title: "Prior Art Translation for Patentability, FTO, and Invalidity",
    text: "Understand when to use document screening, summary translation, selected passages, complete translation, or verified evidentiary translation.",
    href: "https://www.stepes.com/resources/translation-guides/prior-art-translation-patentability-fto-invalidity/",
    label: "Explore prior art translation",
  },
  {
    title: "AI Patent Translation: Research Use vs. Filing-Grade Translation",
    text: "Learn where AI-assisted translation improves speed and where professional human translation, technical review, and quality assurance remain essential.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/",
    label: "Explore AI patent translation",
  },
];

function PatentHeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-grid" />
      <div className="patent-sheet">
        <div className="sheet-topline">
          <span className="doc-dot" />
          <span>PATENT APPLICATION</span>
          <span className="doc-code">PCT / FAMILY</span>
        </div>
        <div className="sheet-body">
          <div className="drawing-panel">
            <svg viewBox="0 0 220 140" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="49" y="28" width="122" height="80" rx="10" />
              <circle cx="86" cy="68" r="18" />
              <circle cx="135" cy="68" r="18" />
              <path d="M104 68h13M86 50V32M135 50V32M86 86v21M135 86v21" />
              <path d="M31 68h37M153 68h38M110 15v26M110 95v30" />
              <path d="M24 64l7 4-7 4M198 64l-7 4 7 4" />
            </svg>
            <div className="drawing-label">FIG. 3</div>
          </div>
          <div className="claims-panel">
            <div className="claim-row active"><span>1</span><i /></div>
            <div className="claim-row"><span>2</span><i /></div>
            <div className="claim-row"><span>3</span><i /></div>
            <div className="claim-row"><span>4</span><i /></div>
            <div className="claim-row short"><span>5</span><i /></div>
          </div>
        </div>
      </div>
      <div className="language-card">
        <div className="language-icon"><Icon name="globe" size={18} /></div>
        <div>
          <strong>Multilingual claims</strong>
          <span>Terminology aligned</span>
        </div>
      </div>
      <div className="review-card">
        <div className="review-check"><Icon name="check" size={18} /></div>
        <div>
          <strong>Expert review</strong>
          <span>Claims • terms • references</span>
        </div>
      </div>
      <div className="ai-node">
        <span>AI</span>
        <small>Controlled assist</small>
      </div>
      <svg className="art-connector" viewBox="0 0 570 520" fill="none" aria-hidden="true">
        <path d="M70 190C110 112 176 94 236 122" />
        <path d="M415 94c55 12 88 54 88 104" />
        <path d="M467 330c-20 74-92 110-162 94" />
        <circle cx="68" cy="192" r="4" />
        <circle cx="504" cy="198" r="4" />
        <circle cx="468" cy="330" r="4" />
      </svg>
    </div>
  );
}

export default function StepesPatentTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="patent-page">
      <style>{`
        :root {
          --magenta: ${BRAND.magenta};
          --magenta-dark: ${BRAND.magentaDark};
          --blush: ${BRAND.blush};
          --blush-strong: ${BRAND.blushStrong};
          --dark: ${BRAND.dark};
          --text: ${BRAND.text};
          --muted: ${BRAND.muted};
          --line: ${BRAND.line};
          --soft: ${BRAND.soft};
          --eyebrow-dark: ${BRAND.eyebrowDark};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .patent-page {
          overflow-x: clip;
          background: #fff;
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }
        .patent-page a { color: var(--magenta); text-decoration: none; }
        .patent-page a:focus-visible,
        .patent-page button:focus-visible {
          outline: 3px solid rgba(193,29,99,.28);
          outline-offset: 4px;
        }
        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .hero-grid > *, .intro-grid > *, .split-grid > *, .prior-grid > *,
        .process-layout > *, .tech-grid > *, .security-grid > *, .cost-grid > *,
        .final-grid > *, .resource-row > *, .document-group > * { min-width: 0; }
        .patent-page h1, .patent-page h2, .patent-page h3,
        .patent-page p, .patent-page li, .patent-page a { overflow-wrap: break-word; }
        .section { padding: 96px 0; }
        .section.dense { padding: 80px 0; }
        .section.soft { background: var(--soft); }
        .section.blush { background: var(--blush); }
        .section.dark { background: var(--dark); color: #fff; }
        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: .16em !important;
          text-transform: uppercase;
        }
        .dark .eyebrow { color: var(--eyebrow-dark) !important; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: inherit; font-weight: 600; letter-spacing: -.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 680px; }
        h2 { font-size: 36px; line-height: 1.16; margin-bottom: 24px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 14px; }
        p, li { font-size: 16px; }
        .lead { font-size: 18px; line-height: 1.65; color: var(--muted); max-width: 790px; }
        .dark .lead, .dark p { color: #C9D0DD; }
        .section-heading { max-width: 810px; margin-bottom: 48px; }
        .section-heading.center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-heading.center .lead { margin-left: auto; margin-right: auto; }
        .cta-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
        .btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 22px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
        }
        .btn svg { flex: 0 0 auto; }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }
        .btn-primary *,
        .btn-primary svg,
        .btn-primary svg * { color: #fff !important; stroke: #fff !important; fill: none; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(159,29,85,.18); }
        .btn-secondary {
          color: var(--text) !important;
          background: #fff;
          border-color: var(--line);
        }
        .btn-secondary:hover { border-color: #C9CFD9; transform: translateY(-1px); }
        .text-link {
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-weight: 600;
          min-height: 44px;
        }
        .text-link svg { transition: transform .18s ease; }
        .text-link:hover svg { transform: translateX(3px); }

        /* Hero */
        .hero { padding: 104px 0 88px; background: linear-gradient(180deg, #fff 0%, #fff 80%, #FBFCFE 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(440px, .92fr); gap: 64px; align-items: center; }
        .hero .lead { max-width: 710px; }
        .hero-proof { display: flex; flex-wrap: wrap; gap: 14px 26px; margin-top: 28px; color: #3F4859; }
        .hero-proof span { display: inline-flex; align-items: center; gap: 9px; font-size: 16px; }
        .hero-proof svg { color: var(--magenta); }
        .hero-art {
          position: relative;
          min-height: 500px;
          border: 1px solid #E5E8EF;
          border-radius: 30px;
          background: #FBFCFE;
          overflow: hidden;
        }
        .art-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(#EEF1F5 1px, transparent 1px), linear-gradient(90deg, #EEF1F5 1px, transparent 1px);
          background-size: 34px 34px;
          opacity: .65;
          -webkit-mask-image: linear-gradient(to bottom, #000, transparent 90%);
          mask-image: linear-gradient(to bottom, #000, transparent 90%);
        }
        .patent-sheet {
          position: absolute;
          top: 86px; left: 78px; right: 70px;
          min-height: 306px;
          background: #fff;
          border: 1px solid #DDE2EA;
          border-radius: 22px;
          box-shadow: 0 24px 70px rgba(36,43,56,.12);
          transform: rotate(-2deg);
          z-index: 2;
        }
        .sheet-topline {
          height: 56px;
          padding: 0 22px;
          display: flex; align-items: center; gap: 10px;
          border-bottom: 1px solid #E7EAF0;
          font-size: 11px; font-weight: 600; letter-spacing: .1em;
          color: #596375;
        }
        .doc-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .doc-code { margin-left: auto; color: #8A93A2; }
        .sheet-body { display: grid; grid-template-columns: 1.05fr .95fr; gap: 18px; padding: 22px; }
        .drawing-panel {
          position: relative;
          min-height: 205px;
          border: 1px solid #E1E5EB;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #667085;
          background: #FCFDFE;
        }
        .drawing-panel svg { width: 92%; height: auto; }
        .drawing-label { position: absolute; right: 13px; bottom: 10px; font-size: 10px; letter-spacing: .08em; color: #8A93A2; }
        .claims-panel { display: flex; flex-direction: column; gap: 11px; padding-top: 4px; }
        .claim-row { display: grid; grid-template-columns: 24px 1fr; gap: 9px; align-items: center; }
        .claim-row span { width: 24px; height: 24px; border-radius: 7px; background: #F1F3F6; display: grid; place-items: center; font-size: 10px; color: #667085; }
        .claim-row i { display: block; height: 8px; border-radius: 999px; background: #DDE2E9; }
        .claim-row.active span { background: var(--blush-strong); color: var(--magenta); }
        .claim-row.active i { background: #E6AFC6; }
        .claim-row.short i { width: 72%; }
        .language-card, .review-card {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          background: #fff;
          border: 1px solid #DFE4EB;
          border-radius: 18px;
          box-shadow: 0 18px 45px rgba(31,38,50,.12);
        }
        .language-card { left: 26px; bottom: 38px; }
        .review-card { right: 22px; top: 28px; }
        .language-card strong, .review-card strong { display: block; font-size: 14px; line-height: 1.3; font-weight: 600; }
        .language-card span, .review-card span { display: block; margin-top: 3px; color: #7A8494; font-size: 12px; line-height: 1.3; }
        .language-icon, .review-check { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-weight: 600; }
        .ai-node {
          position: absolute;
          right: 48px;
          bottom: 30px;
          z-index: 4;
          width: 98px;
          height: 98px;
          border-radius: 50%;
          border: 1px solid #E3BDD0;
          background: #fff;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 18px 45px rgba(31,38,50,.1);
        }
        .ai-node span { color: var(--magenta); font-size: 22px; line-height: 1; font-weight: 600; }
        .ai-node small { margin-top: 7px; color: #7B8494; font-size: 10px; }
        .art-connector { position: absolute; inset: 0; z-index: 1; width: 100%; height: 100%; stroke: #D7A8BD; stroke-width: 1.4; stroke-dasharray: 5 7; }

        /* Trust strip */
        .trust-strip { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .trust-grid { min-height: 92px; display: grid; grid-template-columns: repeat(5, 1fr); align-items: center; }
        .trust-item { min-height: 42px; padding: 0 22px; display: flex; align-items: center; justify-content: center; text-align: center; font-size: 14px; font-weight: 600; color: #536074; border-right: 1px solid var(--line); }
        .trust-item:first-child { padding-left: 0; }
        .trust-item:last-child { border-right: 0; padding-right: 0; }

        /* Editorial intro */
        .intro-grid { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 84px; align-items: start; }
        .intro-grid .section-heading { margin: 0; }
        .intro-copy p { color: var(--muted); }
        .audience-band { margin-top: 30px; padding: 22px 0 0; border-top: 1px solid var(--line); font-size: 16px; color: #3D4656; }
        .inline-links { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 18px; }

        /* Workflow paths */
        .path-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
        .path-item { padding: 34px 36px 36px; min-height: 360px; }
        .path-item:nth-child(odd) { border-right: 1px solid var(--line); }
        .path-item:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
        .path-icon { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); margin-bottom: 24px; }
        .path-item p { color: var(--muted); }
        .clean-list { list-style: none; padding: 0; margin: 22px 0 0; }
        .clean-list li { position: relative; padding-left: 20px; margin: 9px 0; color: #414B5C; }
        .clean-list li::before { content: ""; position: absolute; left: 0; top: .73em; width: 8px; height: 2px; background: var(--magenta); }

        /* Document matrix */
        .document-matrix { border-top: 1px solid var(--line); }
        .document-group { display: grid; grid-template-columns: 290px 1fr; gap: 40px; padding: 32px 0; border-bottom: 1px solid var(--line); }
        .document-group h3 { margin: 0; }
        .document-list { columns: 2; column-gap: 36px; list-style: none; padding: 0; margin: 0; }
        .document-list li { break-inside: avoid; padding: 0 0 10px 18px; position: relative; color: #4C5667; }
        .document-list li::before { content: ""; position: absolute; left: 0; top: .68em; width: 5px; height: 5px; border-radius: 50%; background: #B7BEC9; }

        /* Filing split */
        .split-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 72px; align-items: start; }
        .sticky-heading { position: sticky; top: 30px; }
        .content-stack { display: grid; gap: 34px; }
        .content-block { padding-bottom: 34px; border-bottom: 1px solid var(--line); }
        .content-block:last-child { padding-bottom: 0; border-bottom: 0; }
        .content-block p { color: var(--muted); }
        .soft-note { margin-top: 22px; padding: 20px 22px; border-radius: 18px; background: var(--blush); border: 1px solid #EED5E0; color: #4D4350; }
        .soft-note strong { color: var(--text); }

        /* Prior art */
        .prior-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr); gap: 72px; align-items: start; }
        .tier-list { border-top: 1px solid var(--line); }
        .tier-row { display: grid; grid-template-columns: 180px 1fr; gap: 28px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .tier-row h3 { font-size: 20px; margin: 0; }
        .tier-row p { margin: 0; color: var(--muted); }
        .use-list { margin: 28px 0 0; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px 24px; }
        .use-item { display: flex; gap: 11px; align-items: flex-start; color: #455063; }
        .use-marker { width: 8px; height: 2px; margin-top: .75em; background: var(--magenta); flex: 0 0 auto; }

        /* Litigation */
        .dual-panel { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
        .dual-panel > article { padding: 40px; }
        .dual-panel > article:first-child { border-right: 1px solid var(--line); }
        .dual-panel p { color: var(--muted); }
        .quiet-link-row { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 12px 26px; }

        /* Expertise */
        .expertise-list { border-top: 1px solid var(--line); }
        .expertise-row { display: grid; grid-template-columns: 56px minmax(240px,.72fr) minmax(0,1.28fr); gap: 26px; align-items: start; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .expertise-icon { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; background: #fff; border: 1px solid var(--line); color: var(--magenta); }
        .expertise-row h3 { margin: 6px 0 0; font-size: 21px; }
        .expertise-row p { margin: 6px 0 0; color: var(--muted); }

        /* Process */
        .process-layout { display: grid; grid-template-columns: 360px 1fr; gap: 64px; }
        .process-list { counter-reset: step; border-top: 1px solid #D9DDE5; }
        .process-row { counter-increment: step; display: grid; grid-template-columns: 50px 230px 1fr; gap: 28px; align-items: start; padding: 26px 0; border-bottom: 1px solid #D9DDE5; }
        .process-row::before { content: counter(step, decimal-leading-zero); color: var(--magenta); font-weight: 600; font-size: 15px; padding-top: 4px; }
        .process-row h3 { margin: 0; font-size: 20px; }
        .process-row p { margin: 0; color: var(--muted); }
        .boundary-note { margin-top: 30px; padding: 22px 24px; border-radius: 20px; background: #fff; border: 1px solid var(--line); color: #4A5568; }

        /* Dark technology section */
        .tech-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 72px; align-items: start; }
        .tech-stack { border-top: 1px solid #30394A; }
        .tech-item { padding: 28px 0; border-bottom: 1px solid #30394A; }
        .tech-item h3 { color: #fff; }
        .tech-item p { margin-bottom: 0; }
        .technology-split { margin-top: 28px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px; }
        .technology-split > div { padding: 22px; border-radius: 20px; background: #1A2232; border: 1px solid #313A4B; }
        .technology-split strong { display: block; margin-bottom: 10px; font-size: 16px; color: #fff; }
        .technology-split ul { margin: 0; padding-left: 18px; color: #C9D0DD; }
        .technology-split li { margin: 7px 0; }
        .dark .text-link { color: var(--eyebrow-dark) !important; }

        /* Security & languages */
        .security-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 36px; }
        .security-panel { padding: 38px; border-radius: 28px; border: 1px solid var(--line); background: #fff; }
        .security-panel .panel-icon { width: 52px; height: 52px; border-radius: 16px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); margin-bottom: 22px; }
        .security-panel p { color: var(--muted); }
        .language-cloud { display: flex; flex-wrap: wrap; gap: 10px; margin: 22px 0 10px; }
        .language-cloud span { padding: 9px 13px; border-radius: 999px; background: #F7F8FA; border: 1px solid #E3E6EC; color: #4E586A; font-size: 14px; }

        /* Cost */
        .cost-grid { display: grid; grid-template-columns: minmax(0,.86fr) minmax(0,1.14fr); gap: 72px; }
        .factor-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; border-top: 1px solid var(--line); }
        .factor-list div { min-height: 62px; display: flex; align-items: center; gap: 12px; border-bottom: 1px solid var(--line); color: #465165; }
        .factor-marker { width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); flex: 0 0 auto; }
        .quote-panel { padding: 38px; border-radius: 28px; background: var(--blush); border: 1px solid #EDD5DF; }
        .quote-panel h3 { font-size: 28px; }
        .quote-list { margin: 24px 0 0; padding: 0; list-style: none; columns: 2; column-gap: 28px; }
        .quote-list li { break-inside: avoid; position: relative; padding: 0 0 14px 30px; color: #4F4851; }
        .quote-list li::before { content: "✓"; position: absolute; left: 0; top: 1px; width: 21px; height: 21px; border-radius: 50%; display: grid; place-items: center; background: #fff; border: 1px solid #E3C5D3; color: var(--magenta); font-size: 12px; font-weight: 600; }

        /* FAQ */
        .faq-wrap { max-width: 920px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question {
          width: 100%;
          min-height: 76px;
          padding: 22px 0;
          border: 0;
          background: transparent;
          color: var(--text);
          display: grid;
          grid-template-columns: 1fr 34px;
          gap: 18px;
          align-items: center;
          text-align: left;
          cursor: pointer;
          font: inherit;
        }
        .faq-question span:first-child { font-size: 18px; font-weight: 600; line-height: 1.4; }
        .faq-toggle { width: 32px; height: 32px; border-radius: 50%; border: 1px solid var(--line); display: grid; place-items: center; color: var(--magenta); font-size: 22px; line-height: 1; }
        .faq-answer { max-width: 820px; padding: 0 48px 24px 0; color: var(--muted); font-size: 16px; }

        /* Resources */
        .resource-list { border-top: 1px solid var(--line); }
        .resource-row { display: grid; grid-template-columns: minmax(260px,.8fr) minmax(0,1.2fr) 190px; gap: 34px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .resource-row h3 { margin: 0; font-size: 20px; }
        .resource-row p { margin: 0; color: var(--muted); }
        .resource-row .text-link { justify-self: end; text-align: right; }

        /* Final CTA */
        .final-cta { padding: 90px 0; background: #171D2A; color: #fff; }
        .final-grid { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(300px,.8fr); gap: 64px; align-items: center; }
        .final-cta h2 { max-width: 760px; }
        .final-cta p { max-width: 760px; color: #C8CFDC; font-size: 18px; }
        .final-visual { position: relative; min-height: 230px; border-radius: 28px; border: 1px solid #343D4F; background: #1D2636; overflow: hidden; }
        .final-visual::before { content: ""; position: absolute; inset: 26px; border: 1px solid #394458; border-radius: 20px; }
        .final-doc { position: absolute; left: 34px; top: 44px; width: 170px; height: 142px; border-radius: 18px; background: #fff; transform: rotate(-3deg); padding: 18px; }
        .final-doc i { display: block; height: 7px; margin-bottom: 10px; border-radius: 999px; background: #D9DEE6; }
        .final-doc i:first-child { width: 58%; background: #E6AFC6; }
        .final-doc i:nth-child(3) { width: 82%; }
        .final-seal { position: absolute; right: 38px; bottom: 34px; width: 106px; height: 106px; border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px; text-align: center; color: #fff; border: 1px solid #D584A9; background: #9F1D55; font-size: 10px; font-weight: 600; line-height: 1.25; letter-spacing: .04em; }
        .final-seal svg, .final-seal svg * { stroke: #fff !important; }
        .related-specialty-links { margin-top: 28px; }

        @media (max-width: 1199px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.88fr); gap: 42px; }
          .patent-sheet { left: 42px; right: 40px; }
          .language-card { left: 18px; }
          .review-card { right: 15px; }
          .intro-grid, .split-grid, .prior-grid, .tech-grid, .cost-grid { gap: 48px; }
          .process-layout { grid-template-columns: 300px 1fr; gap: 44px; }
          .process-row { grid-template-columns: 44px 210px 1fr; gap: 20px; }
        }

        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 84px 0; }
          .section.dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 76px; }
          .hero-grid { grid-template-columns: 1fr; gap: 48px; }
          .hero-copy { max-width: 760px; }
          .hero-art { min-height: 470px; }
          .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0; gap: 0; }
          .trust-item, .trust-item:first-child, .trust-item:last-child {
            min-height: 64px;
            padding: 12px 20px;
            border-right: 1px solid var(--line);
            border-bottom: 1px solid var(--line);
          }
          .trust-item:nth-child(even) { border-right: 0; }
          .trust-item:nth-child(5) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
          .intro-grid, .split-grid, .prior-grid, .tech-grid, .cost-grid, .final-grid { grid-template-columns: 1fr; gap: 42px; }
          .sticky-heading { position: static; }
          .path-item { padding: 30px; }
          .document-group { grid-template-columns: 230px 1fr; }
          .dual-panel { grid-template-columns: 1fr; }
          .dual-panel > article:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .expertise-row { grid-template-columns: 56px minmax(200px,.7fr) minmax(0,1.3fr); }
          .process-layout { grid-template-columns: 1fr; gap: 28px; }
          .process-row { grid-template-columns: 48px 220px 1fr; }
          .security-grid { grid-template-columns: 1fr; }
          .resource-row { grid-template-columns: minmax(230px,.85fr) minmax(0,1.15fr); }
          .resource-row .text-link { grid-column: 2; justify-self: start; text-align: left; }
          .final-visual { max-width: 520px; }
        }

        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; line-height: 1.18; }
          h3 { font-size: 20px; }
          .lead { font-size: 18px; }
          .hero { padding: 72px 0 64px; }
          .hero-grid { gap: 36px; }
          .cta-row { flex-direction: column; }
          .btn { width: 100%; min-height: 52px; }
          .hero-proof { display: grid; gap: 12px; }
          .hero-art { min-height: 390px; border-radius: 24px; }
          .patent-sheet { top: 66px; left: 24px; right: 22px; min-height: 252px; }
          .sheet-topline { height: 48px; padding: 0 14px; }
          .sheet-body { grid-template-columns: 1fr; padding: 14px; }
          .drawing-panel { min-height: 162px; }
          .claims-panel { display: none; }
          .language-card { left: 12px; bottom: 16px; padding: 10px 12px; }
          .review-card { right: 10px; top: 14px; padding: 10px 12px; }
          .ai-node { width: 76px; height: 76px; right: 18px; bottom: 18px; }
          .ai-node span { font-size: 18px; }
          .ai-node small { font-size: 8px; }
          .language-card strong, .review-card strong { font-size: 12px; }
          .language-card span, .review-card span { display: none; }
          .language-icon, .review-check { width: 30px; height: 30px; border-radius: 10px; }
          .trust-grid { grid-template-columns: 1fr; padding: 0; }
          .trust-item { min-height: 56px; grid-column: auto !important; border-right: 0 !important; border-bottom: 1px solid var(--line) !important; padding: 12px 0 !important; }
          .trust-item:last-child { border-bottom: 0 !important; }
          .section-heading { margin-bottom: 36px; }
          .intro-grid { gap: 30px; }
          .inline-links { display: grid; gap: 4px; }
          .text-link { align-items: flex-start; }
          .text-link svg { margin-top: 5px; }
          .path-grid { grid-template-columns: 1fr; border-radius: 24px; }
          .path-item { min-height: 0; padding: 28px 24px; border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .path-item:last-child { border-bottom: 0 !important; }
          .document-group { grid-template-columns: 1fr; gap: 18px; padding: 28px 0; }
          .document-list { columns: 1; }
          .content-stack { gap: 28px; }
          .tier-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .use-list { grid-template-columns: 1fr; }
          .dual-panel { border-radius: 24px; }
          .dual-panel > article { padding: 28px 24px; }
          .expertise-row { grid-template-columns: 52px 1fr; gap: 16px; }
          .expertise-row p { grid-column: 1 / -1; margin-top: 0; }
          .process-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .process-row h3 { padding-top: 0; }
          .process-row p { grid-column: 2; }
          .technology-split { grid-template-columns: 1fr; }
          .security-panel { padding: 28px 24px; border-radius: 24px; }
          .factor-list { grid-template-columns: 1fr; }
          .quote-panel { padding: 28px 24px; border-radius: 24px; }
          .quote-panel h3 { font-size: 24px; }
          .quote-list { columns: 1; }
          .faq-question { grid-template-columns: 1fr 32px; }
          .faq-answer { padding-right: 0; }
          .resource-row { grid-template-columns: 1fr; gap: 12px; padding: 26px 0; }
          .resource-row .text-link { grid-column: 1; }
          .final-cta { padding: 72px 0; }
          .final-visual { min-height: 210px; }
          .final-doc { left: 24px; top: 36px; width: 145px; height: 126px; }
          .final-seal { width: 92px; height: 92px; right: 24px; bottom: 28px; font-size: 9px; }
        }

        @media (max-width: 360px) {
          .hero-art { min-height: 360px; }
          .patent-sheet { left: 14px; right: 14px; }
          .review-card { right: 7px; }
          .language-card { left: 7px; }
          .final-doc { width: 132px; }
          .final-seal { right: 16px; bottom: 22px; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Patent &amp; IP Translation</p>
            <h1>Patent Translation Services</h1>
            <p className="lead">
              Translate patent applications, claims, specifications, prior art, and intellectual property documentation with technical subject-matter expertise, controlled terminology, and review workflows matched to the intended use of every document.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={primaryCta}>
                <span>Request a Patent Translation Quote</span>
                <Icon name="arrow" size={18} />
              </a>
              <a className="btn btn-secondary" href={contactUrl}>
                Talk to an IP Translation Specialist
              </a>
            </div>
            <div className="hero-proof">
              <span><Icon name="engineering" size={20} /> Technical Subject-Matter Expertise</span>
              <span><Icon name="security" size={18} /> Secure IP Handling</span>
              <span><Icon name="globe" size={18} /> 100+ Languages</span>
            </div>
          </div>
          <PatentHeroArtwork />
        </div>
      </section>

      <section className="trust-strip" aria-label="Patent translation service credentials">
        <div className="shell trust-grid">
          <div className="trust-item">ISO 17100 Translation Quality</div>
          <div className="trust-item">ISO 9001 Quality Management</div>
          <div className="trust-item">Technical Subject-Matter Experts</div>
          <div className="trust-item">100+ Languages</div>
          <div className="trust-item">AI + Human Review</div>
        </div>
      </section>

      <section className="section">
        <div className="shell intro-grid">
          <div className="section-heading">
            <h2>Patent Translation Requires Technical and Legal Precision</h2>
          </div>
          <div className="intro-copy">
            <p>
              Patent documents operate at the intersection of science, engineering, and law. A translation must communicate how an invention works while maintaining consistent terminology and relationships across claims, specifications, drawings, abstracts, and supporting documents.
            </p>
            <p>
              Even a small difference in how a component, process, limitation, or defined term is expressed can affect how the translated document is understood. That is why patent translation requires more than general language fluency. It requires subject-matter knowledge, familiarity with patent-document structures, careful terminology control, and a review process appropriate for the document’s intended use.
            </p>
            <p>
              Stepes helps maintain the intended technical meaning, claim relationships, references, and terminology consistency of patent content for review by the client’s patent counsel, filing team, researchers, or litigation professionals.
            </p>
            <div className="audience-band">
              Built for patent attorneys, IP law firms, corporate legal teams, R&amp;D organizations, research groups, and litigation counsel.
            </div>
            <div className="inline-links">
              <a className="text-link" href="https://www.stepes.com/technical-translation-services/">Technical Translation Services <Icon name="arrow" size={16} /></a>
              <a className="text-link" href="https://www.stepes.com/legal-translation-services/">Legal Translation Services <Icon name="arrow" size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft" id="workflows">
        <div className="shell">
          <div className="section-heading center">
            <h2>Patent Translation Built Around Its Intended Use</h2>
            <p className="lead">
              A translation used to screen prior art may have different requirements from one intended for filing, prosecution, litigation, or certification. Stepes aligns the language, technology, review, and delivery workflow with the purpose of the document.
            </p>
          </div>
          <div className="path-grid">
            {workflowPaths.map((path) => (
              <article className="path-item" key={path.title}>
                <div className="path-icon"><Icon name={path.icon} size={24} /></div>
                <h3>{path.title}</h3>
                <p>{path.summary}</p>
                <ul className="clean-list">
                  {path.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dense">
        <div className="shell">
          <div className="section-heading">
            <h2>Patent Documents We Translate</h2>
            <p className="lead">
              Stepes translates patent and intellectual property materials throughout the innovation, filing, prosecution, research, litigation, and commercialization lifecycle.
            </p>
          </div>
          <div className="document-matrix">
            {documentGroups.map((group) => (
              <article className="document-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="document-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell split-grid">
          <div className="sticky-heading">
            <h2>Patent Application Translation for International Filing</h2>
            <p className="lead">
              Stepes works with law firms, patent professionals, corporate IP teams, and filing partners to translate highly structured patent content for international review and submission.
            </p>
            <a className="text-link" href={primaryCta}>Request a Patent Filing Quote <Icon name="arrow" size={16} /></a>
          </div>
          <div className="content-stack">
            <article className="content-block">
              <h3>Patent Claims and Specifications</h3>
              <p>
                Patent claims may include defined terms, dependencies, alternatives, technical limitations, process steps, component relationships, and references to the specification or drawings. Stepes translates claims with attention to independent and dependent relationships, antecedent references, repeated terminology, numbers, units, ranges, cross-references, and consistency with the specification.
              </p>
              <p>
                Specifications and descriptions use the same terminology controls so components, embodiments, examples, and methods remain consistent with the claims and accompanying figures. Final claim strategy, jurisdiction-specific legal interpretation, and filing decisions remain the responsibility of the client and its patent counsel.
              </p>
            </article>
            <article className="content-block">
              <h3>Drawings, Tables, Formulas, and Specialized Content</h3>
              <p>
                Patent documents can contain technical drawings, mathematical expressions, chemical structures, biological content, tabular data, software logic, engineering references, and complex formatting. Our teams can support figure labels, drawing text, equations, units, chemical names and formulas, biological terminology, component numbering, and cross-references between text and figures.
              </p>
              <p>
                Source files, drawings, and formatting requirements are evaluated during project scoping so the appropriate translation, engineering, and final-quality steps can be planned from the beginning.
              </p>
            </article>
            <article className="content-block">
              <h3>PCT and National Phase Translation Support</h3>
              <p>
                Stepes supports PCT international applications, national and regional phase entry, direct foreign filings, priority documentation, related national applications, updated claims and amendments, and coordinated multilingual patent families.
              </p>
              <p>
                The required content, accepted language, certification rules, and filing procedures vary by national or regional office. Stepes prepares translations according to the project instructions provided by the client, patent counsel, or filing representative.
              </p>
              <div className="soft-note">
                <strong>Important:</strong> Patent-office requirements and filing deadlines vary by jurisdiction. Stepes provides translation support and does not provide patent filing or legal advice.
              </div>
              <a className="text-link" href="https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/">PCT Patent Translation and National Phase Guide <Icon name="arrow" size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="prior-art">
        <div className="shell prior-grid">
          <div>
            <h2>Prior Art Translation for Patent Research and Analysis</h2>
            <p className="lead">
              Foreign-language patents and technical publications can contain information important to patentability, freedom-to-operate, invalidity, technology landscaping, portfolio due diligence, and competitive research.
            </p>
            <div className="use-list">
              {["Novelty and patentability analysis", "Freedom-to-operate review", "Invalidity and validity research", "Competitor monitoring", "Technology landscape studies", "Portfolio acquisition and due diligence", "Product-development risk assessment", "Licensing and commercialization decisions"].map((item) => (
                <div className="use-item" key={item}><span className="use-marker" aria-hidden="true" /><span>{item}</span></div>
              ))}
            </div>
            <div className="cta-row">
              <a className="btn btn-secondary" href={contactUrl}>Discuss a Prior Art Translation Project</a>
            </div>
          </div>
          <div className="tier-list">
            {[
              ["Document Screening", "Rapid AI-assisted or linguist-supported screening to determine whether a foreign-language document appears relevant enough for further review."],
              ["Summary Translation", "A focused overview of the invention, publication, findings, or technical disclosure without translating every section in full."],
              ["Selected-Passage Translation", "Translation of specific claims, embodiments, tables, examples, references, or passages identified by counsel, researchers, or technical teams."],
              ["Full Professional Translation", "Complete human translation when detailed legal or technical analysis requires full access to the source content."],
              ["Verified or Certified Translation", "Independent review, verification, or certification when the translated material will support formal proceedings, evidentiary use, or another documented requirement."],
            ].map(([title, text]) => (
              <article className="tier-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="section-heading center">
            <h2>Patent Litigation and Certified Translation Support</h2>
            <p className="lead">
              Patent disputes combine complex legal arguments with specialized scientific and technical evidence. Stepes supports multilingual matters through secure workflows, qualified linguists, matter-specific terminology, and coordinated review.
            </p>
          </div>
          <div className="dual-panel">
            <article>
              <h3>Patent Litigation Translation</h3>
              <p>
                Stepes supports claim and specification comparisons, expert reports, discovery production, foreign-language prior art, depositions, witness materials, technical exhibits, pleadings, arbitration proceedings, licensing disputes, and attorney-directed document prioritization.
              </p>
              <p>
                Project-specific glossaries and reference materials can be maintained throughout the matter to help legal teams use consistent terminology across pleadings, evidence, expert materials, and translated exhibits.
              </p>
              <a className="text-link" href="https://www.stepes.com/litigation-translation-services/">Litigation Translation Services <Icon name="arrow" size={16} /></a>
            </article>
            <article>
              <h3>Certified Patent Translations</h3>
              <p>
                Certification may be requested for priority documents, patent assignments, declarations, affidavits, official records, supporting exhibits, foreign patent publications, and patent-related court or administrative submissions.
              </p>
              <p>
                Certification requirements depend on the jurisdiction, proceeding, document type, receiving authority, and instructions from counsel. Stepes can provide certified translations and related documentation according to the stated project requirements, while acceptance remains with the receiving authority.
              </p>
              <div className="quiet-link-row">
                <a className="text-link" href="https://www.stepes.com/certified-translation-services/">Certified Translation Services <Icon name="arrow" size={16} /></a>
                <a className="text-link" href="https://www.stepes.com/intellectual-property-translation-services/">Intellectual Property Translation <Icon name="arrow" size={16} /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section dense">
        <div className="shell">
          <div className="section-heading">
            <h2>Technical Expertise for Complex Patent Content</h2>
            <p className="lead">
              Patent translation quality depends on whether the language team understands the technology being described. Stepes matches translators and reviewers according to the language pair, technical subject, document type, intended use, and required review level.
            </p>
          </div>
          <div className="expertise-list">
            {expertise.map((item) => (
              <article className="expertise-row" key={item.title}>
                <div className="expertise-icon"><Icon name={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="inline-links related-specialty-links">
            <a className="text-link" href="https://www.stepes.com/technology-patent-translation-services/">Technology Patent Translation <Icon name="arrow" size={16} /></a>
            <a className="text-link" href="https://www.stepes.com/chemical-patent-translation-services/">Chemical Patent Translation <Icon name="arrow" size={16} /></a>
            <a className="text-link" href="https://www.stepes.com/german-patent-translation-services/">German Patent Translation <Icon name="arrow" size={16} /></a>
            <a className="text-link" href="https://www.stepes.com/medical-device-translation-services/">Medical Device Translation <Icon name="arrow" size={16} /></a>
            <a className="text-link" href="https://www.stepes.com/software-translation-services/">Software Translation Services <Icon name="arrow" size={16} /></a>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell process-layout">
          <div className="section-heading">
            <h2>A Patent Translation Workflow Built for Accuracy and Review</h2>
            <p className="lead">
              Each workflow is configured around the technical field, intended use, language pair, file format, confidentiality level, deadline, and client requirements.
            </p>
          </div>
          <div>
            <div className="process-list">
              {processSteps.map((step) => (
                <article className="process-row" key={step.title}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
            <div className="boundary-note">
              Stepes supports translation quality, technical-linguistic review, formatting, certification, and multilingual delivery. The client’s patent counsel remains responsible for jurisdiction-specific legal review, claims strategy, filing requirements, and final submission decisions.
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="shell tech-grid">
          <div className="section-heading">
            <p className="eyebrow">Terminology, Memory, and AI</p>
            <h2>Consistent Patent Translation Across Documents, Families, and Languages</h2>
            <p className="lead">
              Patent terminology develops across research, filing, prosecution, continuation applications, national-phase entry, licensing, and litigation. Stepes helps preserve that multilingual knowledge through governed terminology, translation memory, and controlled AI assistance.
            </p>
          </div>
          <div className="tech-stack">
            <article className="tech-item">
              <h3>Patent Terminology Management</h3>
              <p>
                Patent-specific terminology resources can store defined claim terms, component names, chemical and biological terminology, abbreviations, product names, approved translations, prohibited variants, definitions, context, patent-family references, and reviewer comments.
              </p>
              <a className="text-link" href="https://www.stepes.com/terminology-management/">Terminology Management <Icon name="arrow" size={16} /></a>
            </article>
            <article className="tech-item">
              <h3>Translation Memory for Patent Families</h3>
              <p>
                Translation memory identifies matching or similar approved content across related applications, recurring background descriptions, abstracts, amendments, and portfolio documentation. Previously translated content is evaluated for wording, context, technical meaning, claims, and jurisdiction before reuse.
              </p>
              <a className="text-link" href="https://www.stepes.com/translation-memory/">Translation Memory <Icon name="arrow" size={16} /></a>
            </article>
            <article className="tech-item">
              <h3>AI-Assisted Patent Translation With Human Expert Control</h3>
              <p>
                AI can accelerate prior-art screening, document triage, terminology extraction, version comparison, repetitive portfolio content, and automated quality checks. Higher-risk content such as filing-grade claims, specifications, office actions, certified documents, litigation evidence, and decision-critical prior art is routed to qualified human linguists and reviewers.
              </p>
              <div className="technology-split">
                <div>
                  <strong>Appropriate AI-supported uses</strong>
                  <ul>
                    <li>Prior-art screening and research comprehension</li>
                    <li>Large-document triage and terminology extraction</li>
                    <li>Version comparison and repetitive family content</li>
                    <li>Automated QA and workflow routing</li>
                  </ul>
                </div>
                <div>
                  <strong>Human-centered uses</strong>
                  <ul>
                    <li>Filing-grade claims and specifications</li>
                    <li>Office actions and prosecution materials</li>
                    <li>Certified and evidentiary documents</li>
                    <li>Sensitive unpublished inventions</li>
                  </ul>
                </div>
              </div>
              <a className="text-link" href="https://www.stepes.com/ai-enabled-legal-translation-services/">AI-Enabled Legal Translation Services <Icon name="arrow" size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading center">
            <p className="eyebrow">Security and Language Coverage</p>
            <h2>Secure Global Patent Translation Operations</h2>
            <p className="lead">
              Support confidential inventions, R&amp;D information, trade secrets, and multilingual patent programs through controlled access, secure delivery, centralized terminology, and coordinated project management.
            </p>
          </div>
          <div className="security-grid">
            <article className="security-panel">
              <div className="panel-icon"><Icon name="security" size={24} /></div>
              <h3>Confidential IP Handling</h3>
              <p>
                Patent projects may contain unpublished applications, invention disclosures, proprietary formulas and processes, confidential licensing materials, and privileged litigation documents. Stepes supports secure file upload and delivery, restricted project access, role-based permissions, NDA-covered resources, controlled assignments, and client-defined handling instructions.
              </p>
              <p>
                Public AI translation tools are not an appropriate destination for confidential, unpublished inventions. AI-enabled workflows should be evaluated according to the sensitivity of the content and the controls surrounding the technology.
              </p>
              <a className="text-link" href="https://www.stepes.com/security/">Stepes Translation Security <Icon name="arrow" size={16} /></a>
            </article>
            <article className="security-panel">
              <div className="panel-icon"><Icon name="globe" size={24} /></div>
              <h3>Patent Translation in 100+ Languages</h3>
              <p>
                Stepes helps clients coordinate patent work across major innovation, manufacturing, research, and commercial markets. Multi-language programs can use shared terminology, related-patent references, consistent instructions, centralized status visibility, and staggered delivery schedules.
              </p>
              <div className="language-cloud" aria-label="Frequently requested patent languages">
                {[
                  "Simplified Chinese", "Traditional Chinese", "Japanese", "Korean", "German", "French", "Spanish", "Portuguese", "Italian", "Dutch", "Russian", "Arabic"
                ].map((language) => <span key={language}>{language}</span>)}
              </div>
              <a className="text-link" href="https://www.stepes.com/translation-languages/">Explore All Translation Languages <Icon name="arrow" size={16} /></a>
            </article>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell cost-grid">
          <div>
            <h2>What Determines Patent Translation Cost and Turnaround?</h2>
            <p className="lead">
              Patent translation is scoped according to the language pair, document, technical field, intended use, review level, file format, and delivery requirements.
            </p>
            <div className="factor-list">
              {[
                "Source and target languages",
                "Document length",
                "Technical subject and complexity",
                "Claim and specification structure",
                "Formulas, tables, drawings, and sequence content",
                "Filing, research, litigation, or business use",
                "Number of jurisdictions and target languages",
                "Required review and certification",
                "Source-file quality and format",
                "Patent-family translation reuse",
                "Delivery schedule",
                "Rush or phased production requirements",
              ].map((factor) => (
                <div key={factor}><span className="factor-marker" aria-hidden="true" /><span>{factor}</span></div>
              ))}
            </div>
          </div>
          <aside className="quote-panel">
            <h3>What We Need to Quote Your Patent Translation</h3>
            <p>
              Provide as much of the following information as possible so we can recommend the appropriate workflow, review level, schedule, and estimate.
            </p>
            <ul className="quote-list">
              <li>Source documents or patent publication number</li>
              <li>Source and target languages</li>
              <li>Intended use of the translation</li>
              <li>Target jurisdictions, when relevant</li>
              <li>Required certification or statement</li>
              <li>Preferred delivery date</li>
              <li>Related patents or family materials</li>
              <li>Existing translations or glossaries</li>
              <li>Attorney or reviewer instructions</li>
              <li>Required delivery format</li>
            </ul>
            <div className="cta-row">
              <a className="btn btn-primary" href={primaryCta}><span>Upload Patent Documents</span><Icon name="upload" size={18} /></a>
              <a className="btn btn-secondary" href={contactUrl}>Discuss a Complex Project</a>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" id="faqs">
        <div className="shell">
          <div className="section-heading center">
            <h2>Patent Translation Services FAQs</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `patent-faq-answer-${index}`;
              return (
                <div className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div id={answerId} className="faq-answer">{faq.answer}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Patent Translation Insights</p>
            <h2>Patent Translation Guidance and Resources</h2>
            <p className="lead">
              Explore practical guidance for international filing, patent claims, prior art, AI-assisted research, and quality planning.
            </p>
          </div>
          <div className="resource-list">
            {resources.map((resource) => (
              <article className="resource-row" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <a className="text-link" href={resource.href}>{resource.label} <Icon name="arrow" size={16} /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-grid">
          <div>
            <h2>Translate Patent Documents With Technical and Legal Precision</h2>
            <p>
              Work with Stepes to translate patent applications, claims, specifications, prior art, litigation materials, and intellectual property documentation through secure workflows matched to the technical field and intended use of every document.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href={primaryCta}><span>Request a Patent Translation Quote</span><Icon name="arrow" size={18} /></a>
              <a className="btn btn-secondary" href={contactUrl}>Talk to an IP Translation Specialist</a>
            </div>
          </div>
          <div className="final-visual" aria-hidden="true">
            <div className="final-doc"><i /><i /><i /><i /><i /></div>
            <div className="final-seal"><Icon name="check" size={18} /><span>CLAIMS<br />TERMS<br />REFERENCES</span></div>
          </div>
        </div>
      </section>
    </main>
  );
}
