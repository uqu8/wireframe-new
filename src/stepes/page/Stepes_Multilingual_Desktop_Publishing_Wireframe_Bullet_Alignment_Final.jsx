import React, { useMemo, useState } from "react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8E5EE",
  dark: "#1F2025",
  darkSoft: "#2A2C32",
  ink: "#202229",
  body: "#4E515B",
  muted: "#6D717C",
  border: "#E6E7EB",
  lightEyebrow: "#F2A7C6",
  white: "#FFFFFF",
};

const siteUrl = "https://www.stepes.com";
const quoteUrl = "https://app.stepes.com/quote/";

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m13 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ size = 22 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
      <path d="m8.3 12.2 2.35 2.35 5.1-5.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulletDot() {
  return (
    <svg className="aligned-bullet" aria-hidden="true" width="8" height="8" viewBox="0 0 8 8" fill="none">
      <circle cx="4" cy="4" r="3" fill="currentColor" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      {!open && <path d="M12 5v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
    </svg>
  );
}

function LineIcon({ name, size = 24 }) {
  const common = {
    stroke: "currentColor",
    strokeWidth: 1.55,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    layout: (
      <>
        <rect x="3.5" y="4" width="17" height="16" rx="2" {...common} />
        <path d="M8 4v16M8 9h12M8 14h12" {...common} />
      </>
    ),
    type: (
      <>
        <path d="M5 6h14M12 6v12M8.5 18h7" {...common} />
        <path d="M6.5 6v3M17.5 6v3" {...common} />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5M4 19h16" {...common} />
        <path d="m7 15 3-4 3 2 4-6" {...common} />
      </>
    ),
    image: (
      <>
        <rect x="3.5" y="4" width="17" height="16" rx="2" {...common} />
        <circle cx="9" cy="9" r="1.5" {...common} />
        <path d="m5.5 17 4.2-4.2 2.8 2.8 2.2-2.2 3.8 3.6" {...common} />
      </>
    ),
    navigation: (
      <>
        <path d="M6 3.5h9l3 3v14H6z" {...common} />
        <path d="M15 3.5v4h4M9 11h6M9 15h3.5" {...common} />
        <path d="m14.5 15.5 1.8 1.8 3.2-4" {...common} />
      </>
    ),
    output: (
      <>
        <path d="M12 3v12" {...common} />
        <path d="m7.5 10.5 4.5 4.5 4.5-4.5" {...common} />
        <path d="M4 18.5v1.5h16v-1.5" {...common} />
      </>
    ),
    rtl: (
      <>
        <path d="M9 6h10M5 10h14M11 14h8M8 18h11" {...common} />
        <path d="m8 15-3 3 3 3" {...common} />
      </>
    ),
    cjk: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" {...common} />
        <path d="M8 8h8M12 6v12M8 16h8M9 11h6" {...common} />
      </>
    ),
    script: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="2" {...common} />
        <path d="m7 16 3-8 3 8M8.2 13h3.6" {...common} />
        <path d="M15.2 9.2h2.3M16.35 8v2.4M15 15.5c.9-2.1 2-3.7 3.8-4.8" {...common} />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M3.5 12h17M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.5 2.8 7.8 7 10 4.2-2.2 7-5.5 7-10V6l-7-3Z" {...common} />
        <path d="m9 12 2 2 4-4" {...common} />
      </>
    ),
    template: (
      <>
        <rect x="4" y="3.5" width="16" height="17" rx="2" {...common} />
        <path d="M8 8h8M8 12h8M8 16h5" {...common} />
      </>
    ),
    refresh: (
      <>
        <path d="M19 8a8 8 0 1 0 1 8" {...common} />
        <path d="M19 3v5h-5" {...common} />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4-8 4-8-4 8-4Z" {...common} />
        <path d="m4 12 8 4 8-4M4 17l8 4 8-4" {...common} />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" {...common} />
        <path d="M14 3v5h5M9 13h6M9 17h6" {...common} />
      </>
    ),
    eye: (
      <>
        <path d="M2.8 12s3.4-5 9.2-5 9.2 5 9.2 5-3.4 5-9.2 5-9.2-5-9.2-5Z" {...common} />
        <circle cx="12" cy="12" r="2.3" {...common} />
      </>
    ),
    delivery: (
      <>
        <path d="M3.5 7h11v10h-11zM14.5 10h3l3 3v4h-6z" {...common} />
        <circle cx="7" cy="18" r="1.7" {...common} />
        <circle cx="17.5" cy="18" r="1.7" {...common} />
      </>
    ),
    marketing: (
      <>
        <path d="M4 10.5v3h3l8 4V6.5l-8 4H4Z" {...common} />
        <path d="m7 13.5 1.2 5h3" {...common} />
        <path d="M18 9c1 .8 1.5 1.8 1.5 3S19 14.2 18 15" {...common} />
      </>
    ),
    technical: (
      <>
        <circle cx="12" cy="12" r="3" {...common} />
        <path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.4 1.4M16.6 16.6 18 18M18 6l-1.4 1.4M7.4 16.6 6 18" {...common} />
      </>
    ),
    medical: (
      <>
        <path d="M6 3.5h9l3 3v14H6z" {...common} />
        <path d="M15 3.5v4h4M12 10v6M9 13h6" {...common} />
      </>
    ),
    legal: (
      <>
        <path d="M12 4v16M6 7h12M8 20h8" {...common} />
        <path d="m6 7-3 5h6L6 7Zm12 0-3 5h6l-3-5Z" {...common} />
      </>
    ),
    learning: (
      <>
        <path d="M4 5.5h6.5c1 0 1.5.5 1.5 1.5v12c0-1-.8-1.5-1.8-1.5H4z" {...common} />
        <path d="M20 5.5h-6.5c-1 0-1.5.5-1.5 1.5v12c0-1 .8-1.5 1.8-1.5H20z" {...common} />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      {paths[name] || paths.file}
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function Button({ href, children, variant = "primary" }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function EditorialLink({ href, children, dark = false }) {
  return (
    <a className={dark ? "editorial-link editorial-link-dark" : "editorial-link"} href={href}>
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

function AlignedBulletList({ items, className = "" }) {
  return (
    <ul className={`aligned-list ${className}`.trim()}>
      {items.map((item) => (
        <li key={item}>
          <BulletDot />
          <span className="aligned-list-text">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Illustration showing multilingual document adaptation across English, Arabic, and Japanese layouts">
      <div className="hero-visual-topline">
        <span>Source layout</span>
        <span className="hero-visual-status"><CheckIcon size={17} /> Visual QA complete</span>
      </div>
      <div className="document-stage">
        <div className="document-sheet source-sheet">
          <div className="sheet-label">ENGLISH SOURCE</div>
          <div className="sheet-heading">Product Safety Guide</div>
          <div className="sheet-line w80" />
          <div className="sheet-line w62" />
          <div className="sheet-image" />
          <div className="sheet-table">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="sheet-line w72" />
          <div className="sheet-line w52" />
        </div>

        <div className="document-connector" aria-hidden="true">
          <span />
          <ArrowIcon size={22} />
        </div>

        <div className="document-sheet arabic-sheet" dir="rtl">
          <div className="sheet-label">العربية · RTL</div>
          <div className="sheet-heading">دليل سلامة المنتج</div>
          <div className="sheet-line w80" />
          <div className="sheet-line w66" />
          <div className="sheet-image mirrored" />
          <div className="sheet-table">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="sheet-line w72" />
          <div className="sheet-line w48" />
        </div>

        <div className="document-sheet cjk-sheet">
          <div className="sheet-label">日本語 · CJK</div>
          <div className="sheet-heading">製品安全ガイド</div>
          <div className="sheet-line w76" />
          <div className="sheet-line w60" />
          <div className="sheet-image compact" />
          <div className="sheet-table">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="sheet-line w68" />
          <div className="sheet-line w50" />
        </div>
      </div>
      <div className="hero-visual-footer">
        <div><span className="status-dot" /> Text reflow</div>
        <div><span className="status-dot" /> RTL conversion</div>
        <div><span className="status-dot" /> Font validation</div>
        <div><span className="status-dot" /> Final preflight</div>
      </div>
    </div>
  );
}

function QAComparisonVisual() {
  return (
    <div className="comparison-visual" role="img" aria-label="Illustrated comparison of multilingual page layouts">
      <div className="comparison-grid">
        <div className="comparison-card">
          <div className="comparison-head"><span>European language</span><span>Text expansion</span></div>
          <div className="mini-page">
            <div className="mini-title wide" />
            <div className="mini-lines"><span /><span /><span /><span /></div>
            <div className="mini-callout">Reflowed text frames</div>
          </div>
        </div>
        <div className="comparison-card">
          <div className="comparison-head"><span>Arabic</span><span>RTL layout</span></div>
          <div className="mini-page rtl-mini" dir="rtl">
            <div className="mini-title medium" />
            <div className="mini-lines"><span /><span /><span /></div>
            <div className="mini-callout">Mirrored structure</div>
          </div>
        </div>
        <div className="comparison-card">
          <div className="comparison-head"><span>Japanese</span><span>CJK typography</span></div>
          <div className="mini-page">
            <div className="mini-title compact" />
            <div className="mini-lines cjk-lines"><span /><span /><span /></div>
            <div className="mini-callout">Font and line-break QA</div>
          </div>
        </div>
      </div>
      <div className="comparison-note">
        <CheckIcon size={20} />
        <span>Each target-language layout is reviewed on its own merits before delivery.</span>
      </div>
    </div>
  );
}

function TeamPhotoPlaceholder() {
  return (
    <div
      className="team-photo-placeholder"
      role="img"
      aria-label="Stepes four-person team photo"
      data-photo-slot="stepes-four-person-team"
    >
      <div className="team-photo-caption">
        <span>Stepes Team</span>
        <strong>Multilingual Production Expertise</strong>
      </div>
    </div>
  );
}

const capabilityGroups = [
  {
    icon: "layout",
    title: "Multilingual Typesetting and Layout Adaptation",
    body: "Adapt text frames, spacing, styles, columns, callouts, captions, footnotes, master pages, and pagination for the length and structure of each target language.",
    items: ["Text reflow and resizing", "Paragraph and character styles", "Page-break and pagination correction"],
  },
  {
    icon: "type",
    title: "Complex-Script and Font Management",
    body: "Select, validate, embed, and package target-language fonts while managing glyphs, diacritics, mixed scripts, bidirectional content, and language-specific typography.",
    items: ["Font substitution and embedding", "Glyph and character verification", "Hyphenation and line-breaking rules"],
  },
  {
    icon: "chart",
    title: "Tables, Charts, and Technical Elements",
    body: "Maintain the relationship between translated language and visual information across data tables, charts, equations, safety panels, diagrams, and numbered procedures.",
    items: ["Table resizing and reflow", "Localized labels and legends", "Dates, numbers, currencies, and units"],
  },
  {
    icon: "image",
    title: "Graphic and Image Localization",
    body: "Localize text embedded in Illustrator, Photoshop, screenshots, diagrams, illustrations, product labels, icons, and callouts while preserving editable assets whenever practical.",
    items: ["Layered graphic localization", "Localized screenshots", "RTL graphic repositioning"],
  },
  {
    icon: "navigation",
    title: "Document Navigation and References",
    body: "Update navigation elements after translation changes document length and pagination, especially in long technical, regulated, and digital publications.",
    items: ["TOCs, indexes, and bookmarks", "Hyperlinks and cross-references", "Headers, footers, and numbering"],
  },
  {
    icon: "output",
    title: "Print and Digital Production",
    body: "Prepare final deliverables for their intended channel, including editable native files, packaged assets, print-ready PDFs, and digital outputs with verified technical settings.",
    items: ["Bleed, trim, and image checks", "Native source packaging", "Final publication-ready outputs"],
  },
];

const writingSystems = [
  {
    icon: "rtl",
    title: "Right-to-Left Languages",
    body: "Arabic, Hebrew, Persian, and Urdu may require mirrored page structures, RTL tables and navigation, bidirectional text handling, graphic repositioning, and script-aware font validation.",
    points: ["Mirrored page layouts", "Mixed LTR and RTL content", "Shaping, ligatures, numerals, and punctuation"],
  },
  {
    icon: "cjk",
    title: "Chinese, Japanese, and Korean",
    body: "CJK production requires appropriate fonts, character spacing, punctuation treatment, line-breaking rules, and careful handling of mixed Latin and Asian typography.",
    points: ["Simplified and Traditional Chinese", "Japanese and Korean typography", "CJK line-breaking and spacing"],
  },
  {
    icon: "script",
    title: "Indic and Southeast Asian Scripts",
    body: "Hindi, Bengali, Tamil, Thai, Khmer, Lao, Burmese, and other complex scripts depend on compatible fonts, correct shaping, combining marks, and reliable rendering in final files.",
    points: ["Combining marks and diacritics", "Script shaping and line wrapping", "Final PDF and native-file validation"],
  },
  {
    icon: "globe",
    title: "European, Cyrillic, and Global Languages",
    body: "Text expansion, compound words, accented characters, Cyrillic typography, and locale-specific hyphenation can all affect the balance and usability of a multilingual layout.",
    points: ["Text expansion management", "Accents and Cyrillic support", "Locale-specific formatting"],
  },
];

const formats = [
  {
    title: "Adobe Creative Cloud",
    items: ["Adobe InDesign", "Adobe Illustrator", "Adobe Photoshop", "Packaged design assets"],
    link: { label: "InDesign Translation Services", href: `${siteUrl}/indesign-translation-services/` },
  },
  {
    title: "Microsoft 365",
    items: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Excel", "Editable corporate templates"],
  },
  {
    title: "Technical Publishing",
    items: ["Adobe FrameMaker", "MadCap Flare", "DITA and XML", "Structured documentation workflows"],
    link: { label: "FrameMaker Translation Services", href: `${siteUrl}/framemaker-translation-services/` },
  },
  {
    title: "PDF and Additional Environments",
    items: ["Adobe Acrobat and PDF", "Google Docs", "QuarkXPress", "Customer-specific templates"],
    link: { label: "PDF Translation Services", href: `${siteUrl}/pdf-translation-services/` },
  },
];

const documentTypes = [
  {
    icon: "marketing",
    title: "Marketing and Corporate Content",
    body: "Brand-consistent materials for campaigns, sales, investor communications, and corporate publishing.",
    items: ["Brochures and catalogs", "Datasheets and presentations", "White papers, reports, and proposals", "Annual reports and campaign assets"],
  },
  {
    icon: "technical",
    title: "Technical and Operational Documentation",
    body: "Structured, navigable content that remains clear through product updates and repeated releases.",
    items: ["User and installation manuals", "Service and maintenance guides", "SOPs and work instructions", "Safety and engineering documents"],
  },
  {
    icon: "medical",
    title: "Medical and Regulated Content",
    body: "Controlled layouts for materials that demand precise tables, symbols, warnings, and review workflows.",
    items: ["Instructions for use", "Medical device labeling", "Patient and clinical materials", "Regulatory and compliance content"],
  },
  {
    icon: "legal",
    title: "Legal and Financial Documents",
    body: "Careful formatting for numbered sections, disclosures, footnotes, data tables, and formal pagination.",
    items: ["Contracts and policies", "Financial statements", "Investor disclosures", "Audit and governance materials"],
  },
  {
    icon: "learning",
    title: "Training and Digital Learning",
    body: "Multilingual production for instructor-led, digital, and blended learning programs.",
    items: ["Training decks", "Facilitator and learner guides", "Course handouts and certificates", "eLearning graphics and assessments"],
  },
];

const readinessItems = [
  "Editable native source files",
  "Linked images and graphics",
  "Fonts or approved alternatives",
  "Brand and style guidelines",
  "Master templates",
  "Final approved source content",
  "Target languages and locales",
  "Existing translations, glossaries, and memories",
  "Print or digital output specifications",
  "Page size, bleed, and trim requirements",
  "Reviewer instructions",
  "Required delivery formats",
];

const workflow = [
  {
    title: "File and Production Assessment",
    body: "We review source files, pages, target languages, fonts, linked assets, layout complexity, translation status, output requirements, and planned review stages.",
  },
  {
    title: "Translation or Content Import",
    body: "Stepes can translate the content or import approved files supplied by your organization, another provider, or an AI workflow. Linguistic review can be added when required.",
  },
  {
    title: "Multilingual Typesetting",
    body: "Our specialists adapt layout, typography, graphics, tables, navigation, pagination, and language direction for each target market.",
  },
  {
    title: "Linguistic and Visual QA",
    body: "The formatted files undergo the production, in-context, and final-output checks defined for the project, with reviewer feedback incorporated through controlled revisions.",
  },
  {
    title: "Publish-Ready Delivery",
    body: "We deliver approved native files, packaged assets, review copies, print-ready PDFs, digital PDFs, or other agreed production outputs.",
  },
];

const engagementModels = [
  {
    icon: "layers",
    title: "End-to-End Translation and DTP",
    body: "One coordinated workflow for translation, editing, terminology, typesetting, graphic localization, in-context review, visual QA, and final delivery.",
  },
  {
    icon: "file",
    title: "DTP-Only Support",
    body: "Professional multilingual production for content translated internally, generated with AI, supplied by another provider, or delivered as approved bilingual files.",
  },
  {
    icon: "template",
    title: "Multilingual Template Development",
    body: "Reusable language-ready, RTL, and CJK-compatible templates that protect brand consistency and reduce future production effort.",
  },
  {
    icon: "refresh",
    title: "Ongoing Production Programs",
    body: "Scalable support for recurring product documentation, regulatory revisions, marketing campaigns, financial reporting, training, and multi-market launches.",
  },
];

const FAQs = [
  {
    q: "What is multilingual desktop publishing?",
    a: "Multilingual desktop publishing is the process of adapting translated content for its final visual format. It includes typesetting, text reflow, font management, layout adjustment, graphic localization, table formatting, pagination, and final visual quality assurance so the document is ready for print or digital publication.",
  },
  {
    q: "Why is DTP needed after translation?",
    a: "Translation can change text length, writing direction, punctuation, typography, and page structure. Without multilingual DTP, content may overflow, use unsupported fonts, disrupt tables and graphics, or become difficult to navigate. DTP resolves these issues in the final layout.",
  },
  {
    q: "Can Stepes format translations created by our internal team or AI system?",
    a: "Yes. Stepes provides DTP-only services for translations created internally, generated with AI, or supplied by another language provider. Linguistic review or machine translation post-editing can also be included before production when needed.",
  },
  {
    q: "Can Stepes provide both translation and desktop publishing?",
    a: "Yes. Stepes can manage translation, editing, terminology, multilingual typesetting, linguistic in-context review, visual QA, and final delivery within one coordinated workflow. We can also support only the production stages when translation is already complete.",
  },
  {
    q: "Which design and document formats do you support?",
    a: "Stepes supports common Adobe Creative Cloud, Microsoft 365, technical-authoring, structured-content, Google Docs, QuarkXPress, and PDF workflows. Contact our team to confirm a specific authoring environment or proprietary file format.",
  },
  {
    q: "Do you provide Arabic and right-to-left desktop publishing?",
    a: "Yes. RTL production can include mirrored layouts, bidirectional text, right-to-left tables, graphic repositioning, appropriate fonts, punctuation management, and final visual verification for Arabic, Hebrew, Persian, Urdu, and other RTL languages.",
  },
  {
    q: "How do you handle Chinese, Japanese, and Korean typography?",
    a: "Our specialists apply suitable CJK fonts, line-breaking conventions, character spacing, punctuation rules, and mixed-script formatting, then confirm correct display in the final native and output files.",
  },
  {
    q: "What does multilingual DTP quality assurance include?",
    a: "Depending on the project, QA may include production review, linguistic in-context review, and final visual and technical checks covering layout, fonts, characters, page flow, tables, graphics, hyperlinks, bookmarks, cross-references, RTL presentation, output settings, and file completeness.",
  },
  {
    q: "Will we receive editable source files?",
    a: "Yes, when editable source files are part of the agreed deliverables and the original materials support an editable workflow. PDF-only reconstruction may provide different levels of editability depending on source quality and document complexity.",
  },
  {
    q: "Can you recreate an editable document from a PDF?",
    a: "In many cases, yes. Stepes can assess whether a PDF can be reconstructed into an editable or publication-ready format. Effort depends on layout complexity, source quality, fonts, graphics, tables, and whether the PDF contains selectable text or scanned pages.",
  },
  {
    q: "What information is needed to quote a multilingual DTP project?",
    a: "An accurate quotation typically requires the source files, page count, target languages, translation status, linked assets, fonts, layout complexity, required outputs, and review requirements. Native files allow a more accurate assessment than PDF files alone.",
  },
  {
    q: "What affects multilingual desktop publishing cost and turnaround time?",
    a: "Key factors include pages and languages, file format, layout complexity, tables and graphics, text embedded in images, RTL or complex-script requirements, availability of native files, translation status, review scope, publication specifications, and revision cycles.",
  },
];

export default function MultilingualDesktopPublishingWireframe() {
  const [openFaq, setOpenFaq] = useState(0);
  const styleText = useMemo(() => styles, []);

  return (
    <main className="stepes-page">
      <style>{styleText}</style>

      <section className="hero section-white">
        <div className="shell hero-shell">
          <Eyebrow>Multilingual Production</Eyebrow>
          <h1>Multilingual Desktop Publishing Services</h1>
          <p className="hero-intro">
            Turn translated content into polished, publication-ready materials across languages and markets. Stepes combines multilingual typesetting, layout engineering, graphic localization, and rigorous visual quality assurance for print, digital, technical, and regulated deliverables.
          </p>
          <p className="hero-support">
            Whether Stepes manages your translation from beginning to end or formats content translated by your internal team, another provider, or an AI system, we deliver accurate, visually consistent files ready for use.
          </p>
          <div className="hero-actions">
            <Button href={`${siteUrl}/contact-us/`}>Talk to an Expert</Button>
            <Button href={quoteUrl} variant="secondary">Request a Quote</Button>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trust-strip section-white" aria-label="Stepes quality and service highlights">
        <div className="shell trust-shell">
          {["ISO 17100", "ISO 9001", "ISO 13485", "100+ Languages", "AI + Human Workflow"].map((item) => (
            <div key={item} className="trust-item"><CheckIcon size={19} /><span>{item}</span></div>
          ))}
        </div>
      </section>

      <section className="section section-white" id="publication-ready">
        <div className="shell split-editorial">
          <div className="split-heading">
            <Eyebrow>Why Multilingual DTP Matters</Eyebrow>
            <h2>From Translated Text to Publication-Ready Content</h2>
          </div>
          <div className="editorial-copy">
            <p className="lead-copy">
              Translation changes more than the words on a page. Text may expand or contract, page breaks can shift, fonts may not support the target language, and graphics, tables, navigation, or cross-references may no longer work as intended.
            </p>
            <p>
              Arabic and Hebrew require right-to-left presentation. Chinese, Japanese, and Korean follow different typographic conventions. Technical manuals, regulatory files, reports, and design-heavy documents may also contain translatable content inside diagrams, screenshots, illustrations, and data visualizations.
            </p>
            <div className="issue-list">
              {[
                "Text overflow, awkward wrapping, and shifting pagination",
                "Unsupported fonts, missing glyphs, or incorrect script rendering",
                "Tables, charts, and callouts that no longer fit their layout",
                "Outdated TOCs, indexes, bookmarks, links, and cross-references",
                "Graphics and screenshots that still contain source-language text",
                "Print and digital files that need final technical validation",
              ].map((item) => (
                <div className="issue-row" key={item}><span className="issue-marker" /><span>{item}</span></div>
              ))}
            </div>
            <p>
              Multilingual desktop publishing resolves these issues. It transforms linguistically complete content into a finished document that is readable, brand-consistent, technically sound, and suitable for its intended publication channel.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="services">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2>Complete Multilingual Desktop Publishing Services</h2>
            <p>
              Stepes supports the production tasks required to convert translated text into professionally finished multilingual assets without reducing the work to simple formatting.
            </p>
          </div>
          <div className="capability-grid">
            {capabilityGroups.map((group) => (
              <article className="capability-item" key={group.title}>
                <div className="icon-box"><LineIcon name={group.icon} /></div>
                <h3>{group.title}</h3>
                <p>{group.body}</p>
                <AlignedBulletList items={group.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai-production">
        <div className="shell">
          <div className="dark-intro-grid">
            <div>
              <Eyebrow dark>AI-Enabled Production</Eyebrow>
              <h2>Automated Where Possible. Expert-Reviewed Where It Matters.</h2>
            </div>
            <div className="dark-copy">
              <p>
                AI and workflow automation can accelerate file analysis, content extraction, translation preparation, repeated content processing, terminology application, routing, version control, and quality checks.
              </p>
              <p>
                Multilingual production specialists remain essential for complex layout decisions, right-to-left conversion, font and script compatibility, graphic localization, brand-sensitive typography, print preflight, and final visual inspection.
              </p>
            </div>
          </div>

          <div className="automation-balance">
            <div className="automation-column">
              <div className="automation-label">Technology Streamlines</div>
              {["File analysis and content extraction", "Translation memory and terminology reuse", "Repeated formatting and workflow routing", "Automated linguistic and file checks", "Version and deliverable management"].map((item) => (
                <div className="automation-row" key={item}><CheckIcon size={20} /><span>{item}</span></div>
              ))}
            </div>
            <div className="automation-divider" aria-hidden="true"><span>+</span></div>
            <div className="automation-column">
              <div className="automation-label">Experts Resolve</div>
              {["Complex text reflow and page balance", "RTL, CJK, and complex-script requirements", "Text embedded in graphics and screenshots", "Brand-sensitive typography and templates", "Final visual and technical preflight"].map((item) => (
                <div className="automation-row" key={item}><CheckIcon size={20} /><span>{item}</span></div>
              ))}
            </div>
          </div>

          <p className="dark-note">
            Structured content and template-driven documentation may support a high level of automation. Design-intensive brochures, labels, reports, presentations, and marketing assets typically require greater expert intervention. Stepes applies the right production model to each file and use case.
          </p>
        </div>
      </section>

      <section className="section section-white" id="writing-systems">
        <div className="shell">
          <div className="section-heading section-heading-split">
            <div>
              <Eyebrow>100+ Languages</Eyebrow>
              <h2>Professional Typesetting Across Writing Systems</h2>
            </div>
            <p>
              Complex-language production is not a one-size-fits-all task. Each script has its own requirements for direction, shaping, spacing, punctuation, line breaking, font support, and page composition.
            </p>
          </div>

          <div className="writing-grid">
            {writingSystems.map((system, index) => (
              <article className={`writing-item ${index === 0 ? "writing-featured" : ""}`} key={system.title}>
                <div className="writing-head">
                  <div className="icon-box"><LineIcon name={system.icon} /></div>
                  <h3>{system.title}</h3>
                </div>
                <p>{system.body}</p>
                <AlignedBulletList items={system.points} />
              </article>
            ))}
          </div>
          <div className="section-link-row">
            <EditorialLink href={`${siteUrl}/translation-languages/`}>Explore Our Translation Languages</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="formats">
        <div className="shell">
          <div className="section-heading centered-heading compact-heading">
            <h2>Multilingual DTP Across Leading Design and Publishing Formats</h2>
            <p>
              We preserve editable source files whenever available and prepare outputs that support future multilingual updates, versioning, and repeat production.
            </p>
          </div>
          <div className="formats-grid">
            {formats.map((format) => (
              <article className="format-column" key={format.title}>
                <h3>{format.title}</h3>
                <ul>
                  {format.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {format.link && <EditorialLink href={format.link.href}>{format.link.label}</EditorialLink>}
              </article>
            ))}
          </div>
          <div className="format-note">
            <LineIcon name="file" size={26} />
            <p>
              When only a PDF is available, Stepes can assess whether the document can be reconstructed into an editable or publication-ready format. Feasibility, effort, and editability depend on the source quality and document complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-white" id="document-types">
        <div className="shell">
          <div className="section-heading section-heading-split">
            <div>
              <h2>Multilingual Production Across Document Types</h2>
            </div>
            <p>
              Different documents require different production controls. Stepes adapts the workflow to the content, audience, publication channel, and level of business or regulatory risk.
            </p>
          </div>
          <div className="document-type-list">
            {documentTypes.map((type) => (
              <article className="document-type-row" key={type.title}>
                <div className="document-type-icon"><LineIcon name={type.icon} /></div>
                <div className="document-type-main">
                  <h3>{type.title}</h3>
                  <p>{type.body}</p>
                </div>
                <ul className="document-type-items">
                  {type.items.map((item) => (
                    <li key={item}>
                      <BulletDot />
                      <span className="aligned-list-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="regulated-content">
        <div className="shell enterprise-grid">
          <div className="enterprise-main">
            <h2>Built for Regulated and Enterprise Content</h2>
            <p className="lead-copy">
              A marketing brochure, technical manual, medical device IFU, and financial report may use similar publishing software, but they require different production controls, review priorities, and final-file checks.
            </p>
            <p>
              Stepes coordinates multilingual production with the linguistic, template, version-control, and review requirements defined for each project. This helps global teams preserve both content accuracy and visual integrity across high-value deliverables.
            </p>
            <div className="enterprise-links">
              <EditorialLink href={`${siteUrl}/medical-translation-services/`}>Medical Translation Services</EditorialLink>
              <EditorialLink href={`${siteUrl}/medical-device-translation-services/`}>Medical Device Translation Services</EditorialLink>
              <EditorialLink href={`${siteUrl}/technical-translation-services/`}>Technical Translation Services</EditorialLink>
              <EditorialLink href={`${siteUrl}/financial-translation-services/`}>Financial Translation Services</EditorialLink>
              <EditorialLink href={`${siteUrl}/legal-translation-services/`}>Legal Translation Services</EditorialLink>
            </div>
          </div>
          <div className="enterprise-matrix">
            {[
              ["Life Sciences and Medical Devices", "IFUs, labeling, patient materials, clinical and regulatory content"],
              ["Manufacturing and Technical Documentation", "Manuals, safety content, diagrams, parts tables, and structured documentation"],
              ["Financial and Legal Content", "Reports, disclosures, policies, contracts, footnotes, and formal pagination"],
              ["Marketing and Global Brand Content", "Campaign materials, presentations, brochures, catalogs, and reusable templates"],
            ].map(([title, body]) => (
              <div className="enterprise-matrix-row" key={title}>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="quality-assurance">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2>Multilingual DTP Quality Assurance</h2>
            <p>
              Every final file should be reviewed in the context in which customers, employees, patients, regulators, or other audiences will use it. Stepes configures the review layers around the content and project scope.
            </p>
          </div>
          <div className="qa-grid">
            <article className="qa-stage">
              <div className="qa-stage-icon"><LineIcon name="file" /></div>
              <h3>Production Review</h3>
              <p>Performed by the multilingual DTP specialist.</p>
              <AlignedBulletList items={[
                "Layout, formatting, and style consistency",
                "Fonts, characters, and page flow",
                "Graphics, tables, charts, and file integrity",
                "Native files, links, and asset completeness",
              ]} />
            </article>
            <article className="qa-stage">
              <div className="qa-stage-icon"><LineIcon name="eye" /></div>
              <h3>Linguistic In-Context Review</h3>
              <p>Included when defined in the agreed workflow.</p>
              <AlignedBulletList items={[
                "Missing, hidden, or truncated text",
                "Incorrect line breaks or placement",
                "Readability, spacing, and punctuation",
                "Terminology inside graphics and tables",
              ]} />
            </article>
            <article className="qa-stage">
              <div className="qa-stage-icon"><LineIcon name="shield" /></div>
              <h3>Final Visual and Technical QA</h3>
              <p>Checks the deliverable as a complete publication.</p>
              <AlignedBulletList items={[
                "Page-by-page consistency and RTL accuracy",
                "Links, bookmarks, cross-references, TOCs, and indexes",
                "Image quality, page dimensions, bleed, and trim",
                "Output settings and deliverable completeness",
              ]} />
            </article>
          </div>
          <div className="qa-clarifier">
            <strong>DTP QA and linguistic editing are distinct services.</strong>
            <span>A visually accurate file does not automatically mean the translation has received a complete linguistic edit unless that review is included in the project scope.</span>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="readiness">
        <div className="shell readiness-grid">
          <div className="readiness-copy">
            <Eyebrow>Project Readiness</Eyebrow>
            <h2>Prepare Your Files for Faster Multilingual Production</h2>
            <p>
              Complete source packages help preserve editability, reduce reconstruction, and allow Stepes to assess your project more accurately. Native files are strongly recommended whenever they are available.
            </p>
            <p>
              Not every project requires every item shown here. Our team will review your files and identify what is needed for an accurate quotation and efficient production workflow.
            </p>
            <EditorialLink href={`${siteUrl}/contact-us/`}>Discuss Your Production Requirements</EditorialLink>
          </div>
          <div className="checklist-panel">
            {readinessItems.map((item) => (
              <div className="checklist-item" key={item}><CheckIcon size={20} /><span>{item}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="process">
        <div className="shell">
          <div className="section-heading section-heading-split">
            <div>
              <h2>Our Multilingual Desktop Publishing Process</h2>
            </div>
            <p>
              A clear five-stage workflow scales from a single document to ongoing global production programs while keeping linguistic, design, and review responsibilities aligned.
            </p>
          </div>
          <div className="workflow-grid">
            {workflow.map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <div className="workflow-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark-soft" id="engagement-models">
        <div className="shell">
          <div className="dark-intro-grid">
            <div>
              <Eyebrow dark>Flexible Engagement</Eyebrow>
              <h2>Translation and DTP Together—or DTP as a Standalone Service</h2>
            </div>
            <div className="dark-copy">
              <p>
                Organizations manage multilingual content in different ways. Stepes supports complete translation workflows, DTP-only projects, reusable multilingual templates, and recurring production programs.
              </p>
            </div>
          </div>
          <div className="engagement-grid">
            {engagementModels.map((model) => (
              <article className="engagement-item" key={model.title}>
                <div className="engagement-icon"><LineIcon name={model.icon} /></div>
                <h3>{model.title}</h3>
                <p>{model.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white" id="why-stepes">
        <div className="shell why-grid">
          <div className="why-heading">
            <h2>Why Choose Stepes for Multilingual DTP</h2>
            <p>
              Stepes connects language expertise, multilingual production, and AI-enabled workflow efficiency so customers can move from translated content to finished global assets with fewer handoffs.
            </p>
          </div>
          <div className="why-list">
            {[
              ["Integrated Linguistic and Production Expertise", "Translation, terminology, typesetting, graphic localization, and final-file review can be coordinated within one workflow."],
              ["AI-Enabled Efficiency", "Technology streamlines preparation, repeated content, terminology, workflow management, and quality checks while experts retain visual decision-making."],
              ["Complex-Language Capability", "Support for RTL, CJK, Indic, Southeast Asian, Cyrillic, and mixed-language content across more than 100 languages."],
              ["Broad File and Format Support", "Design files, office documents, technical-authoring environments, structured content, graphics, presentations, and PDFs."],
              ["Flexible Quality Controls", "Production review, linguistic in-context review, and final visual QA configured around the content, audience, channel, and risk."],
              ["Scalable Global Delivery", "Support for a single brochure, a multilingual launch, or a recurring enterprise documentation program."],
            ].map(([title, body]) => (
              <div className="why-row" key={title}>
                <div className="why-check"><CheckIcon size={20} /></div>
                <div><h3>{title}</h3><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="layout-comparison">
        <div className="shell comparison-layout">
          <div className="comparison-copy">
            <Eyebrow>Practical Application</Eyebrow>
            <h2>See How Multilingual Layouts Change Across Languages</h2>
            <p>
              A European language may require expanded text frames and new page breaks. Arabic can require the complete page structure to be mirrored. Chinese or Japanese may need different fonts, spacing, and line-breaking conventions.
            </p>
            <p>
              These are not cosmetic changes. They affect whether the translated document feels natural, remains easy to navigate, and communicates information correctly.
            </p>
          </div>
          <QAComparisonVisual />
        </div>
      </section>

      <section className="section related-section section-white" id="related-services">
        <div className="shell">
          <div className="related-header">
            <div>
              <Eyebrow>Related Services</Eyebrow>
              <h2>Build a Complete Multilingual Content Workflow</h2>
            </div>
            <p>
              Connect multilingual production with the translation, localization, and quality services your content requires.
            </p>
          </div>
          <div className="related-grid">
            {[
              ["Document Translation Services", `${siteUrl}/document-translation-services/`],
              ["Technical Translation Services", `${siteUrl}/technical-translation-services/`],
              ["Multimedia Localization", `${siteUrl}/multimedia-translation-services/`],
              ["eLearning Translation Services", `${siteUrl}/elearning-training-translation-services/`],
              ["Translation Quality Assurance", `${siteUrl}/translation-quality-assurance/`],
              ["Translation Languages", `${siteUrl}/translation-languages/`],
            ].map(([label, href]) => (
              <EditorialLink key={label} href={href}>{label}</EditorialLink>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="faqs">
        <div className="shell faq-shell">
          <div className="faq-heading">
            <h2>Multilingual Desktop Publishing FAQs</h2>
            <p>
              Answers to common questions about multilingual DTP, supported files, quality assurance, editable deliverables, and project scoping.
            </p>
          </div>
          <div className="faq-panel">
            {FAQs.map((faq, index) => {
              const open = openFaq === index;
              return (
                <div className="faq-item" key={faq.q}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={open}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(open ? -1 : index)}
                  >
                    <span>{faq.q}</span>
                    <PlusIcon open={open} />
                  </button>
                  <div
                    id={`faq-answer-${index}`}
                    className={`faq-answer ${open ? "faq-answer-open" : ""}`}
                    hidden={!open}
                  >
                    <p>{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="contact">
        <div className="shell final-cta-shell">
          <div className="final-cta-copy">
            <h2>Make Multilingual Content Publication-Ready</h2>
            <p>
              Send us your documents, design files, translated content, or multilingual production requirements. Stepes will help you create accurate, brand-consistent, and professionally finished assets across target markets.
            </p>
            <div className="hero-actions final-actions">
              <Button href={`${siteUrl}/contact-us/`}>Talk to an Expert</Button>
              <Button href={quoteUrl} variant="secondary">Request a Quote</Button>
            </div>
          </div>
          <TeamPhotoPlaceholder />
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: ${BRAND.magenta};
    --magenta-dark: ${BRAND.magentaDark};
    --magenta-deep: ${BRAND.magentaDeep};
    --blush: ${BRAND.blush};
    --blush-strong: ${BRAND.blushStrong};
    --dark: ${BRAND.dark};
    --dark-soft: ${BRAND.darkSoft};
    --ink: ${BRAND.ink};
    --body: ${BRAND.body};
    --muted: ${BRAND.muted};
    --border: ${BRAND.border};
    --light-eyebrow: ${BRAND.lightEyebrow};
    --white: ${BRAND.white};
    --shadow: 0 24px 70px rgba(31, 32, 37, 0.08);
  }

  * { box-sizing: border-box; }

  .stepes-page div,
  .stepes-page article { min-width: 0; }

  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3,
  .stepes-page p,
  .stepes-page li,
  .stepes-page a,
  .stepes-page button { overflow-wrap: break-word; }

  .stepes-page {
    width: 100%;
    min-width: 0;
    overflow: hidden;
    background: var(--white);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3,
  .stepes-page p,
  .stepes-page ul { margin-top: 0; }

  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.03em; }
  .stepes-page h1 { font-size: 48px; line-height: 1.06; margin-bottom: 24px; }
  .stepes-page h2 { font-size: 36px; line-height: 1.12; margin-bottom: 22px; }
  .stepes-page h3 { font-size: 24px; line-height: 1.25; margin-bottom: 14px; }
  .stepes-page p,
  .stepes-page li { color: var(--body); font-size: 16px; line-height: 1.72; }
  .stepes-page a { color: inherit; }
  .stepes-page button { font: inherit; }

  .shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding: 96px 0; }
  .section-white { background: var(--white); }
  .section-soft { background: #F7F7F9; }
  .section-blush { background: var(--blush); }
  .section-dark,
  .section-dark-soft { color: var(--white); }
  .section-dark { background: var(--dark); }
  .section-dark-soft { background: #25262C; }
  .section-dark h2,
  .section-dark h3,
  .section-dark-soft h2,
  .section-dark-soft h3 { color: var(--white); }
  .section-dark p,
  .section-dark li,
  .section-dark-soft p,
  .section-dark-soft li { color: #D7D9DF; }

  .eyebrow {
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.2 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .eyebrow-dark { color: var(--light-eyebrow) !important; }

  .hero {
    padding: 104px 0 88px;
    position: relative;
  }

  .hero-shell { text-align: center; }
  .hero h1 { max-width: 900px; margin-left: auto; margin-right: auto; }
  .hero-intro {
    max-width: 820px;
    margin: 0 auto 16px;
    font-size: 18px !important;
    line-height: 1.68 !important;
    color: #3F424A !important;
  }
  .hero-support {
    max-width: 770px;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.72;
  }

  .hero-actions {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 32px;
    flex-wrap: wrap;
  }

  .button,
  .button:link,
  .button:visited {
    min-height: 50px;
    padding: 13px 24px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  }

  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible {
    background: var(--magenta);
    border: 1px solid var(--magenta);
    color: #FFFFFF !important;
  }

  .button-primary *,
  .button-primary:link *,
  .button-primary:visited *,
  .button-primary:hover *,
  .button-primary:active *,
  .button-primary:focus *,
  .button-primary:focus-visible * {
    color: #FFFFFF !important;
    stroke: currentColor;
  }

  .button-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(193, 29, 99, .22); }
  .button-secondary,
  .button-secondary:link,
  .button-secondary:visited { background: var(--white); border: 1px solid #D8DAE0; color: var(--ink); }
  .button-secondary:hover { border-color: #B9BBC3; transform: translateY(-1px); }
  .button:focus-visible,
  .editorial-link:focus-visible,
  .faq-question:focus-visible { outline: 3px solid rgba(193, 29, 99, .24); outline-offset: 3px; }

  .editorial-link,
  .editorial-link:link,
  .editorial-link:visited {
    color: var(--magenta);
    display: inline-flex;
    align-items: center;
    gap: 7px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }
  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link-dark,
  .editorial-link-dark:link,
  .editorial-link-dark:visited { color: var(--light-eyebrow); }

  .hero-visual {
    max-width: 1120px;
    margin: 62px auto 0;
    padding: 22px 24px 24px;
    border: 1px solid var(--border);
    border-radius: 30px;
    box-shadow: var(--shadow);
    background: #FAFAFB;
    text-align: left;
    overflow: hidden;
  }
  .hero-visual-topline,
  .hero-visual-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.4;
  }
  .hero-visual-status { display: inline-flex; align-items: center; gap: 8px; color: #3F6A52; }
  .document-stage {
    display: grid;
    grid-template-columns: 1fr 58px 1fr 1fr;
    gap: 18px;
    margin: 22px 0;
    align-items: stretch;
  }
  .document-sheet {
    min-height: 330px;
    border: 1px solid #DDDFE5;
    border-radius: 18px;
    background: #FFFFFF;
    padding: 24px;
    position: relative;
  }
  .source-sheet { box-shadow: inset 0 3px 0 #8F939D; }
  .arabic-sheet { box-shadow: inset 0 3px 0 var(--magenta); }
  .cjk-sheet { box-shadow: inset 0 3px 0 #B5B8C0; }
  .sheet-label { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .12em; margin-bottom: 18px; }
  .sheet-heading { color: var(--ink); font-size: 18px; font-weight: 600; line-height: 1.3; margin-bottom: 16px; }
  .sheet-line { height: 7px; background: #E9EAEF; border-radius: 999px; margin: 9px 0; }
  .sheet-line.w80 { width: 80%; }
  .sheet-line.w76 { width: 76%; }
  .sheet-line.w72 { width: 72%; }
  .sheet-line.w68 { width: 68%; }
  .sheet-line.w66 { width: 66%; }
  .sheet-line.w62 { width: 62%; }
  .sheet-line.w60 { width: 60%; }
  .sheet-line.w52 { width: 52%; }
  .sheet-line.w50 { width: 50%; }
  .sheet-line.w48 { width: 48%; }
  .sheet-image { height: 88px; margin: 22px 0 18px; border-radius: 10px; background: linear-gradient(135deg, #F4DBE7 0%, #F8EFF3 56%, #ECEEF2 56%); position: relative; }
  .sheet-image::after { content: ""; position: absolute; width: 38px; height: 38px; border: 1.5px solid var(--magenta); border-radius: 50%; left: 18px; top: 24px; }
  .sheet-image.mirrored::after { left: auto; right: 18px; }
  .sheet-image.compact { background: linear-gradient(135deg, #EFEFF3 0%, #F6E8EF 70%); }
  .sheet-table { display: grid; grid-template-columns: 1.2fr 1fr; gap: 5px; margin: 14px 0; }
  .sheet-table span { height: 20px; background: #F0F1F4; border: 1px solid #E3E4E8; border-radius: 4px; }
  .document-connector { display: flex; flex-direction: column; align-items: center; justify-content: center; color: var(--magenta); gap: 8px; }
  .document-connector span { width: 1px; height: 92px; background: #E1C4D1; }
  .hero-visual-footer { justify-content: flex-start; flex-wrap: wrap; gap: 22px; }
  .hero-visual-footer > div { display: flex; align-items: center; gap: 8px; }
  .status-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); display: inline-block; }

  .trust-strip { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .trust-shell { min-height: 88px; display: grid; grid-template-columns: repeat(5, 1fr); align-items: center; }
  .trust-item { min-height: 44px; display: flex; align-items: center; justify-content: center; gap: 9px; color: #484B54; font-size: 15px; font-weight: 600; }
  .trust-item svg { color: var(--magenta); flex: 0 0 auto; }

  .split-editorial { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 96px; align-items: start; }
  .split-heading { position: sticky; top: 40px; }
  .split-heading h2 { max-width: 500px; }
  .editorial-copy { max-width: 760px; }
  .editorial-copy p:last-child { margin-bottom: 0; }
  .lead-copy { font-size: 18px !important; line-height: 1.72 !important; color: #3E4149 !important; }
  .issue-list { margin: 32px 0; border-top: 1px solid var(--border); }
  .issue-row { display: grid; grid-template-columns: 12px 1fr; gap: 14px; padding: 15px 0; border-bottom: 1px solid var(--border); align-items: start; }
  .issue-row span:last-child { color: var(--body); font-size: 16px; line-height: 1.6; }
  .issue-marker { width: 8px; height: 2px; background: var(--magenta); border-radius: 99px; margin-top: .76em; }

  .section-heading { max-width: 820px; margin-bottom: 48px; }
  .centered-heading { text-align: center; margin-left: auto; margin-right: auto; }
  .section-heading p { font-size: 18px; line-height: 1.7; margin-bottom: 0; }
  .compact-heading { max-width: 900px; }
  .section-heading-split { max-width: none; display: grid; grid-template-columns: 1fr 1fr; gap: 96px; align-items: end; }
  .section-heading-split p { margin-bottom: 0; }

  .capability-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
  .capability-item { padding: 34px 30px 36px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); background: rgba(255,255,255,.72); min-width: 0; }
  .capability-item .icon-box { margin-bottom: 22px; }
  .capability-item h3 { font-size: 22px; }
  .capability-item p { margin-bottom: 20px; }
  .aligned-list,
  .format-column ul,
  .document-type-items { list-style: none; padding: 0; margin: 0; }
  .aligned-list li,
  .document-type-items li {
    display: grid;
    grid-template-columns: 8px minmax(0, 1fr);
    column-gap: 12px;
    align-items: start;
    margin: 9px 0;
    min-width: 0;
    padding: 0;
  }
  .aligned-bullet {
    width: 8px;
    height: 8px;
    min-width: 8px;
    min-height: 8px;
    color: var(--magenta);
    display: block;
    overflow: visible;
    margin-top: calc((1.72em - 8px) / 2);
  }
  .aligned-list-text {
    display: block;
    min-width: 0;
  }
  .format-column li { margin: 10px 0; padding: 0; }
  .icon-box { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: #FBEAF2; border: 1px solid #F0D6E1; }

  .dark-intro-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 96px; align-items: start; }
  .dark-intro-grid h2 { max-width: 600px; }
  .dark-copy p { font-size: 17px; }
  .automation-balance { margin-top: 52px; display: grid; grid-template-columns: 1fr 64px 1fr; gap: 24px; align-items: stretch; }
  .automation-column { border: 1px solid rgba(255,255,255,.13); border-radius: 24px; padding: 30px; background: rgba(255,255,255,.035); }
  .automation-label { color: var(--light-eyebrow); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; margin-bottom: 18px; }
  .automation-row { display: flex; align-items: flex-start; gap: 12px; padding: 13px 0; border-bottom: 1px solid rgba(255,255,255,.1); }
  .automation-row:last-child { border-bottom: 0; }
  .automation-row svg { color: var(--light-eyebrow); flex: 0 0 auto; margin-top: 3px; }
  .automation-row span { color: #E4E5E9; font-size: 16px; line-height: 1.6; }
  .automation-divider { display: grid; place-items: center; }
  .automation-divider span { width: 46px; height: 46px; display: grid; place-items: center; border: 1px solid rgba(255,255,255,.16); border-radius: 50%; color: var(--light-eyebrow); font-size: 24px; }
  .dark-note { max-width: 900px; margin: 36px auto 0; text-align: center; color: #C8CAD1 !important; }

  .writing-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
  .writing-item { border: 1px solid var(--border); border-radius: 24px; padding: 32px; background: var(--white); }
  .writing-featured { background: var(--blush); border-color: #EDD3DE; }
  .writing-head { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
  .writing-head h3 { margin-bottom: 0; }
  .writing-item p { margin-bottom: 18px; }
  .section-link-row { margin-top: 32px; text-align: center; }

  .formats-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .format-column { padding: 28px 26px 30px; border-right: 1px solid var(--border); display: flex; flex-direction: column; }
  .format-column:last-child { border-right: 0; }
  .format-column h3 { font-size: 21px; }
  .format-column .editorial-link { margin-top: auto; padding-top: 16px; align-self: flex-start; }
  .format-note { margin-top: 32px; border: 1px solid var(--border); border-radius: 20px; background: var(--white); padding: 24px 26px; display: grid; grid-template-columns: 40px 1fr; gap: 16px; align-items: start; }
  .format-note svg { color: var(--magenta); }
  .format-note p { margin-bottom: 0; }

  .document-type-list { border-top: 1px solid var(--border); }
  .document-type-row { display: grid; grid-template-columns: 52px minmax(0, .9fr) minmax(0, 1.1fr); gap: 28px; padding: 32px 0; border-bottom: 1px solid var(--border); align-items: start; }
  .document-type-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); border: 1px solid #EED7E1; }
  .document-type-main h3 { margin-bottom: 10px; }
  .document-type-main p { margin-bottom: 0; }
  .document-type-items { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 4px 24px; }
  .document-type-items li { margin: 4px 0; }

  .enterprise-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr); gap: 72px; align-items: start; }
  .enterprise-main { max-width: 620px; }
  .enterprise-links { display: flex; flex-wrap: wrap; gap: 14px 24px; margin-top: 28px; }
  .enterprise-matrix { background: rgba(255,255,255,.68); border: 1px solid #EDD7E0; border-radius: 28px; padding: 8px 30px; }
  .enterprise-matrix-row { padding: 24px 0; border-bottom: 1px solid #EAD5DE; }
  .enterprise-matrix-row:last-child { border-bottom: 0; }
  .enterprise-matrix-row h3 { font-size: 20px; margin-bottom: 8px; }
  .enterprise-matrix-row p { margin-bottom: 0; }

  .qa-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 22px; }
  .qa-stage { border: 1px solid var(--border); border-radius: 24px; padding: 30px; }
  .qa-stage-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); border: 1px solid #EED7E1; margin-bottom: 20px; }
  .qa-stage p { color: #656973; }
  .qa-stage .aligned-list { margin-top: 2px; }
  .qa-stage .aligned-list li { margin: 9px 0; }
  .qa-clarifier { margin-top: 26px; padding: 22px 24px; background: #F7F7F9; border-left: 3px solid var(--magenta); border-radius: 0 16px 16px 0; display: grid; gap: 6px; }
  .qa-clarifier strong { font-size: 16px; }
  .qa-clarifier span { color: var(--body); font-size: 16px; line-height: 1.65; }

  .readiness-grid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr); gap: 72px; align-items: center; }
  .readiness-copy { max-width: 580px; }
  .checklist-panel { border-radius: 28px; background: var(--white); border: 1px solid var(--border); padding: 20px 30px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 28px; }
  .checklist-item { display: grid; grid-template-columns: 22px minmax(0, 1fr); align-items: start; column-gap: 12px; padding: 13px 0; border-bottom: 1px solid var(--border); min-width: 0; }
  .checklist-item:nth-last-child(-n+2) { border-bottom: 0; }
  .checklist-item svg { width: 20px; height: 20px; color: var(--magenta); display: block; margin-top: 2px; }
  .checklist-item span { display: block; min-width: 0; color: var(--body); font-size: 16px; line-height: 1.55; }

  .workflow-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); border-top: 1px solid var(--border); }
  .workflow-step { grid-column: span 2; padding: 30px 28px 0 0; margin-right: 28px; border-right: 1px solid var(--border); }
  .workflow-step:nth-child(3) { border-right: 0; margin-right: 0; padding-right: 0; }
  .workflow-step:nth-child(4),
  .workflow-step:nth-child(5) { grid-column: span 3; border-top: 1px solid var(--border); margin-top: 36px; padding-top: 30px; }
  .workflow-step:nth-child(5) { border-right: 0; margin-right: 0; padding-right: 0; }
  .workflow-number { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-weight: 600; font-size: 16px; margin-bottom: 20px; }
  .workflow-step h3 { font-size: 20px; }
  .workflow-step p { margin-bottom: 0; }

  .engagement-grid { margin-top: 50px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.14); border-bottom: 1px solid rgba(255,255,255,.14); }
  .engagement-item { padding: 32px 26px 34px; border-right: 1px solid rgba(255,255,255,.14); }
  .engagement-item:last-child { border-right: 0; }
  .engagement-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; color: var(--light-eyebrow); background: rgba(255,255,255,.055); border: 1px solid rgba(255,255,255,.14); margin-bottom: 20px; }
  .engagement-item h3 { font-size: 21px; }
  .engagement-item p { margin-bottom: 0; }

  .why-grid { display: grid; grid-template-columns: minmax(0, .75fr) minmax(0, 1.25fr); gap: 84px; align-items: start; }
  .why-heading { position: sticky; top: 40px; }
  .why-heading p { font-size: 18px; }
  .why-list { border-top: 1px solid var(--border); }
  .why-row { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 24px 0; border-bottom: 1px solid var(--border); }
  .why-check { color: var(--magenta); padding-top: 3px; }
  .why-row h3 { font-size: 20px; margin-bottom: 6px; }
  .why-row p { margin-bottom: 0; }

  .comparison-layout { display: grid; grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr); gap: 70px; align-items: center; }
  .comparison-copy { max-width: 530px; }
  .comparison-visual { border: 1px solid #E6CCD7; background: rgba(255,255,255,.74); border-radius: 28px; padding: 24px; box-shadow: 0 20px 50px rgba(82, 37, 57, .07); }
  .comparison-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
  .comparison-card { min-width: 0; }
  .comparison-head { display: flex; justify-content: space-between; gap: 8px; margin-bottom: 10px; color: #676A73; font-size: 13px; line-height: 1.35; }
  .comparison-head span:first-child { font-weight: 600; color: #444750; }
  .mini-page { min-height: 220px; padding: 20px 16px; border: 1px solid #E1E2E6; border-radius: 14px; background: var(--white); position: relative; }
  .mini-title { height: 14px; border-radius: 4px; background: #D9B0C1; margin-bottom: 18px; }
  .mini-title.wide { width: 88%; }
  .mini-title.medium { width: 66%; margin-left: auto; }
  .mini-title.compact { width: 58%; }
  .mini-lines { display: grid; gap: 9px; }
  .mini-lines span { height: 7px; background: #ECEDEF; border-radius: 99px; }
  .mini-lines span:nth-child(2) { width: 92%; }
  .mini-lines span:nth-child(3) { width: 74%; }
  .mini-lines span:nth-child(4) { width: 84%; }
  .rtl-mini .mini-lines span:nth-child(2) { width: 84%; margin-left: auto; }
  .rtl-mini .mini-lines span:nth-child(3) { width: 68%; margin-left: auto; }
  .cjk-lines span { height: 9px; }
  .mini-callout { position: absolute; left: 16px; right: 16px; bottom: 16px; min-height: 34px; display: flex; align-items: center; justify-content: center; border-radius: 9px; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; text-align: center; padding: 8px; }
  .comparison-note { margin-top: 18px; display: flex; align-items: center; gap: 10px; color: #4D5058; font-size: 16px; line-height: 1.55; }
  .comparison-note svg { color: var(--magenta); flex: 0 0 auto; }

  .related-section { padding-top: 84px; padding-bottom: 84px; }
  .related-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; margin-bottom: 36px; }
  .related-header p { margin-bottom: 0; }
  .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); }
  .related-grid .editorial-link { min-height: 76px; border-bottom: 1px solid var(--border); padding: 18px 20px 18px 0; justify-content: space-between; margin-right: 26px; }

  .faq-shell { display: grid; grid-template-columns: minmax(0, .7fr) minmax(0, 1.3fr); gap: 72px; align-items: start; }
  .faq-heading { position: sticky; top: 40px; }
  .faq-panel { background: var(--white); border: 1px solid var(--border); border-radius: 28px; padding: 0 28px; }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-item:last-child { border-bottom: 0; }
  .faq-question { width: 100%; min-height: 76px; border: 0; background: transparent; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; padding: 20px 0; color: var(--ink); cursor: pointer; }
  .faq-question span { font-size: 17px; font-weight: 600; line-height: 1.45; }
  .faq-question svg { color: var(--magenta); flex: 0 0 auto; }
  .faq-answer { padding: 0 44px 22px 0; }
  .faq-answer p { margin-bottom: 0; }

  .final-cta { background: var(--blush); padding: 82px 0; border-top: 1px solid #EBCFD9; }
  .final-cta-shell { display: grid; grid-template-columns: minmax(0, 1fr) minmax(340px, 420px); gap: 64px; align-items: center; }
  .final-cta-copy { max-width: 760px; }
  .final-cta-copy h2 { font-size: 40px; }
  .final-cta-copy p { font-size: 18px; line-height: 1.72; }
  .final-actions { justify-content: flex-start; }
  .team-photo-placeholder {
    width: 100%;
    aspect-ratio: 4 / 3;
    min-height: 280px;
    position: relative;
    overflow: hidden;
    border: 1px solid #D7D9DF;
    border-radius: 28px;
    background:
      linear-gradient(180deg, rgba(31,32,37,0) 48%, rgba(31,32,37,.68) 100%),
      linear-gradient(135deg, #E8E9ED 0%, #D9DCE2 48%, #ECEDEF 100%);
    box-shadow: 0 22px 52px rgba(82, 37, 57, .09);
  }
  .team-photo-placeholder::before {
    content: "";
    position: absolute;
    inset: 18px;
    border: 1px dashed rgba(78,81,91,.25);
    border-radius: 18px;
  }
  .team-photo-caption {
    position: absolute;
    left: 24px;
    right: 24px;
    bottom: 22px;
    display: grid;
    gap: 4px;
    color: var(--white);
  }
  .team-photo-caption span { font-size: 14px; line-height: 1.35; font-weight: 600; }
  .team-photo-caption strong { font-size: 18px; line-height: 1.35; font-weight: 600; }

  @media (max-width: 1100px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .document-stage { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .document-connector { display: none; }
    .capability-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .formats-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .format-column:nth-child(2) { border-right: 0; }
    .format-column:nth-child(-n+2) { border-bottom: 1px solid var(--border); }
    .workflow-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); row-gap: 34px; }
    .workflow-step,
    .workflow-step:nth-child(4),
    .workflow-step:nth-child(5) { grid-column: auto; margin-top: 0; padding-top: 30px; }
    .workflow-step:nth-child(3) { border-right: 0; margin-right: 0; padding-right: 0; }
    .workflow-step:nth-child(4) { border-top: 0; }
    .workflow-step:nth-child(5) { border-top: 0; }
    .engagement-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .engagement-item:nth-child(2) { border-right: 0; }
    .engagement-item:nth-child(-n+2) { border-bottom: 1px solid rgba(255,255,255,.14); }
    .final-cta-shell { grid-template-columns: minmax(0, 1fr) minmax(300px, 360px); gap: 44px; }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .stepes-page h1 { font-size: 42px; }
    .stepes-page h2 { font-size: 32px; }
    .stepes-page h3 { font-size: 22px; }
    .hero { padding: 92px 0 76px; }
    .document-stage { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cjk-sheet { grid-column: 1 / -1; min-height: 260px; }
    .trust-shell { grid-template-columns: repeat(3, 1fr); padding-top: 16px; padding-bottom: 16px; gap: 4px; }
    .trust-item { justify-content: flex-start; }
    .split-editorial,
    .dark-intro-grid,
    .section-heading-split,
    .enterprise-grid,
    .readiness-grid,
    .why-grid,
    .comparison-layout,
    .related-header,
    .faq-shell { grid-template-columns: 1fr; gap: 40px; }
    .split-heading,
    .why-heading,
    .faq-heading { position: static; }
    .section-heading-split { align-items: start; }
    .automation-balance { grid-template-columns: 1fr; }
    .automation-divider { min-height: 24px; }
    .writing-grid { grid-template-columns: 1fr; }
    .document-type-row { grid-template-columns: 52px 1fr; }
    .document-type-items { grid-column: 2; }
    .qa-grid { grid-template-columns: 1fr; }
    .workflow-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .workflow-step,
    .workflow-step:nth-child(4),
    .workflow-step:nth-child(5) { grid-column: auto; margin-top: 0; border-top: 0; }
    .workflow-step:nth-child(3) { border-right: 1px solid var(--border); margin-right: 24px; padding-right: 24px; }
    .workflow-step:nth-child(2n) { border-right: 0; margin-right: 0; padding-right: 0; }
    .workflow-step:nth-child(n+3) { padding-top: 0; }
    .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .final-cta-shell { grid-template-columns: 1fr; }
    .team-photo-placeholder { max-width: 620px; margin: 4px auto 0; }
    .section-heading { margin-bottom: 40px; }
    .enterprise-links .editorial-link { min-height: 44px; }
    .format-column .editorial-link { min-height: 44px; }
    .comparison-note { align-items: flex-start; }
    .comparison-note svg { margin-top: 3px; }
  }

  @media (max-width: 640px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .stepes-page h1 { font-size: 38px; line-height: 1.08; }
    .aligned-bullet { margin-top: calc((1.72em - 8px) / 2); }
    .stepes-page h2 { font-size: 30px; line-height: 1.16; }
    .stepes-page h3 { font-size: 20px; }
    .hero { padding: 72px 0 64px; }
    .hero-intro { font-size: 18px !important; }
    .hero-actions { flex-direction: column; align-items: stretch; }
    .button { width: 100%; min-height: 52px; }
    .hero-visual { margin-top: 44px; padding: 18px; border-radius: 24px; }
    .hero-visual-topline { align-items: flex-start; flex-direction: column; gap: 8px; }
    .document-stage { grid-template-columns: 1fr; }
    .cjk-sheet { grid-column: auto; }
    .document-sheet { min-height: 290px; }
    .hero-visual-footer { flex-direction: column; align-items: flex-start; gap: 10px; }
    .trust-shell { grid-template-columns: 1fr 1fr; gap: 6px 10px; }
    .trust-item { font-size: 14px; }
    .capability-grid { grid-template-columns: 1fr; }
    .capability-item { padding: 28px 24px; }
    .writing-item { padding: 26px 22px; }
    .formats-grid { grid-template-columns: 1fr; }
    .format-column { border-right: 0; border-bottom: 1px solid var(--border); padding: 26px 0; }
    .format-column:last-child { border-bottom: 0; }
    .format-note { grid-template-columns: 1fr; }
    .document-type-row { grid-template-columns: 1fr; gap: 12px; padding: 28px 0; }
    .document-type-icon { margin-bottom: 4px; }
    .document-type-items { grid-column: auto; grid-template-columns: 1fr; }
    .enterprise-matrix { padding: 6px 22px; }
    .checklist-panel { grid-template-columns: 1fr; padding: 16px 22px; }
    .checklist-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--border); }
    .checklist-item:last-child { border-bottom: 0; }
    .workflow-grid { grid-template-columns: 1fr; border-top: 0; }
    .workflow-step,
    .workflow-step:nth-child(3),
    .workflow-step:nth-child(4),
    .workflow-step:nth-child(5),
    .workflow-step:nth-child(2n) { grid-column: auto; border-right: 0; border-top: 1px solid var(--border); margin: 0; padding: 26px 0 0; }
    .engagement-grid { grid-template-columns: 1fr; }
    .engagement-item,
    .engagement-item:nth-child(2) { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.14); }
    .engagement-item:last-child { border-bottom: 0; }
    .why-row { grid-template-columns: 34px 1fr; }
    .comparison-grid { grid-template-columns: 1fr; }
    .comparison-card { margin-bottom: 6px; }
    .related-grid { grid-template-columns: 1fr; }
    .related-grid .editorial-link { margin-right: 0; }
    .faq-panel { padding: 0 20px; }
    .faq-question { min-height: 70px; gap: 16px; }
    .faq-question span { font-size: 16px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 68px 0; }
    .final-cta-copy h2 { font-size: 32px; }
    .final-cta-copy p { font-size: 17px; }
    .team-photo-placeholder { min-height: 240px; border-radius: 22px; }
    .team-photo-placeholder::before { inset: 14px; border-radius: 15px; }
    .team-photo-caption { left: 20px; right: 20px; bottom: 18px; }
    .enterprise-links { flex-direction: column; align-items: flex-start; gap: 2px; }
    .enterprise-links .editorial-link,
    .section-link-row .editorial-link { min-height: 44px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .button,
    .editorial-link svg { transition: none; }
  }

  @media (max-width: 360px) {
    .stepes-page h1 { font-size: 36px; }
    .stepes-page h2 { font-size: 29px; }
    .trust-shell { grid-template-columns: 1fr; }
    .trust-item { justify-content: flex-start; }
    .hero-visual { padding: 14px; }
    .document-sheet { padding: 20px; }
    .automation-column,
    .qa-stage,
    .writing-item { padding: 24px 20px; }
    .team-photo-placeholder { min-height: 218px; }
    .team-photo-caption strong { font-size: 16px; }
  }
`;
