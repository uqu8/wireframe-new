// Sesen IVD Translation Services Wireframe v3 — mobile, customer-facing content, link, and eyebrow refinement pass.
const lifecycleSteps = [
  ["01", "Assay, Reagent & Instrument", "Establish consistent terminology for assays, analytes, biomarkers, specimens, reagents, calibrators, controls, instruments, and diagnostic workflows."],
  ["02", "Technical Documentation", "Translate device descriptions, intended purpose, risk documentation, verification and validation records, manufacturing information, and other controlled technical content."],
  ["03", "Performance Evaluation & Clinical Evidence", "Support scientific validity, analytical performance, clinical performance, performance studies, and related evidence with specialized scientific translation."],
  ["04", "Instructions for Use", "Maintain clear multilingual instructions across specimen handling, assay procedures, instrument operation, performance characteristics, interpretation, limitations, and warnings."],
  ["05", "Labeling & Packaging", "Align kit labels, reagent labels, instrument labels, packaging, warnings, storage information, identifiers, and market-specific product language."],
  ["06", "Software & Digital Interfaces", "Localize analyzer interfaces, diagnostic applications, result screens, dashboards, alerts, operator prompts, help content, and connected diagnostic experiences."],
  ["07", "IVDR Submission & Market Release", "Support IVDR technical documentation, performance-related content, SSPs where applicable, regulatory communication, IFUs, labeling, and multilingual release packages."],
  ["08", "PMS, PMPF & Lifecycle Updates", "Maintain multilingual continuity as post-market evidence, product changes, software releases, IFU updates, and labeling changes move through the lifecycle."],
];

const assayTerms = [
  "Analytes and biomarkers",
  "Qualitative and quantitative testing",
  "Reference intervals and decision limits",
  "Analytical and clinical sensitivity",
  "Measuring ranges and detection limits",
  "Interference and cross-reactivity",
  "Result interpretation",
];

const technicalDocs = [
  "Device descriptions and specifications",
  "Intended purpose and intended-use content",
  "Design and manufacturing information",
  "Risk management documentation",
  "General Safety and Performance Requirements (GSPR) documentation",
  "Verification and validation reports",
  "Technical reports and specifications",
  "Declarations and supporting records",
  "Change-control and post-market technical documentation",
];

const performanceGroups = [
  {
    title: "Scientific Validity",
    text: "Translate the scientific evidence connecting an analyte or marker with a clinical condition or physiological state.",
    items: ["Scientific validity reports", "Literature reviews and evidence summaries", "Analyte and biomarker documentation", "Supporting scientific references"],
  },
  {
    title: "Analytical Performance",
    text: "Preserve the precise language, numbers, units, statistics, and test-method terminology used to demonstrate analytical performance.",
    items: ["Sensitivity, specificity, accuracy and precision", "Repeatability and reproducibility", "Detection and quantitation limits", "Interference, cross-reactivity and measuring range", "Specimen handling, stability and metrological traceability"],
  },
  {
    title: "Clinical Performance",
    text: "Support clinical performance studies and evidence that connect diagnostic results with defined clinical conditions, populations, or processes.",
    items: ["Clinical performance study plans and protocols", "Clinical performance reports", "Clinical sensitivity and specificity", "Predictive-value documentation", "Statistical analyses and evidence summaries"],
  },
];

const productExperience = [
  {
    kicker: "Instructions for Use",
    title: "IVD IFUs That Preserve Technical Meaning",
    text: "Translate scientific information, laboratory procedures, instrument operation, performance characteristics, result interpretation, limitations, warnings, storage, and troubleshooting within one controlled user document.",
    points: ["Specimen requirements and handling", "Assay procedures and instrument operation", "Performance characteristics and result interpretation", "Limitations, warnings and troubleshooting"],
    link: "https://www.sesen.com/ifu-translation-services/",
    linkLabel: "Explore IFU Translation Services",
  },
  {
    kicker: "Labeling & Packaging",
    title: "Keep Labels, Packaging and IFUs Aligned",
    text: "Maintain terminology across space-constrained labeling while preserving consistency with approved IFUs, technical documentation, and product information.",
    points: ["Kit, reagent, calibrator and control labels", "Storage, handling and warning language", "Symbols and accompanying text", "Market-specific label and packaging variants"],
    link: "https://www.sesen.com/labeling-translation-services/",
    linkLabel: "Explore Labeling Translation Services",
  },
  {
    kicker: "Software & Digital Interfaces",
    title: "Localize the Software Behind Modern Diagnostics",
    text: "Connect analyzer interfaces, embedded software, result screens, alerts, operator prompts, dashboards, help content, and connected diagnostic applications to the same approved product terminology.",
    points: ["Analyzer and instrument UI", "Result screens, dashboards and reporting", "Alerts, errors and operator prompts", "Context review, screenshots and in-context QA"],
    link: "https://www.sesen.com/clinical-medical-software-localization-services/",
    linkLabel: "Explore Clinical & Medical Software Localization",
  },
];

const terminologyRows = [
  ["Intended Purpose", "Technical documentation", "Performance evidence", "SSP", "IFU", "Labeling"],
  ["Analytes & Biomarkers", "Scientific validity", "Performance documentation", "IFU", "Software", "Results"],
  ["Assay Procedures", "Validation", "Instrument workflows", "IFU", "Training", "Updates"],
  ["Warnings & Limitations", "Risk documentation", "IFU", "Labeling", "Software", "Post-market"],
  ["Performance & Results", "Performance evaluation", "Reference information", "IFU", "Result interface", "User documentation"],
];

const diagnosticTechnologies = [
  ["Molecular Diagnostics", "Molecular assays, nucleic-acid testing, PCR-related content, genomic workflows, instruments, software, performance documentation, IFUs, and labeling."],
  ["Immunodiagnostics", "Immunoassays, serology, immunochemistry, reagents, instruments, performance documentation, and associated user instructions."],
  ["Clinical Chemistry", "Chemistry analyzers, reagents, calibrators, controls, assay documentation, software, technical materials, and laboratory workflows."],
  ["Hematology & Coagulation", "Diagnostic systems, analyzers, reagents, procedures, performance documentation, operating content, and user-facing materials."],
  ["Microbiology & Infectious Disease", "Assays, testing systems, laboratory documentation, performance information, IFUs, labeling, software, and regulatory content."],
  ["Companion Diagnostics", "Technical documentation, performance evidence, labeling, IFUs, and related content associated with corresponding medicinal products."],
  ["Point-of-Care & Near-Patient Testing", "Clear multilingual operating instructions, user guidance, software, labels, and result information for testing closer to the patient."],
  ["Self-Testing IVDs", "Lay-user IFUs, labels, digital interfaces, warnings, procedures, and result interpretation designed for intended-user comprehension."],
  ["Laboratory Instruments & Automation", "Analyzer documentation, instrument software, automation workflows, operating instructions, maintenance, troubleshooting, and supporting content."],
];

const globalMarkets = [
  ["European Markets", "IVDR-related content and market-specific language programs across EU and EEA markets."],
  ["North America", "Multilingual documentation, labeling, scientific content, software, and regional market needs across the United States and Canada."],
  ["Asia-Pacific", "Japanese, Simplified and Traditional Chinese, Korean, and other Asia-Pacific language programs for diagnostic products."],
  ["Global Programs", "Centralized delivery across 150+ languages, including complex scripts, right-to-left languages, multilingual formatting, and reviewer coordination."],
];

const programScenarios = [
  ["EU IVDR Market Expansion", "Coordinate technical and performance documentation, IFUs, labels, SSP content where applicable, and supporting market-release materials through shared terminology and translation assets."],
  ["Multilingual Diagnostic Product Launch", "Bring analyzer, assay, reagent kit, IFU, label, software, training, and regulatory content into one coordinated multilingual release program."],
  ["Global Product Update", "Propagate approved changes to assays, instruments, claims, warnings, software, and documentation while preserving validated language from previous releases."],
];

const qualityPillars = [
  ["Professional IVD & Life Sciences Linguists", "Specialists are selected according to language, subject matter, document type, intended audience, and project requirements."],
  ["Terminology & Translation Memory", "Approved terminology, product references, prior translations, and reviewer feedback provide a controlled foundation for recurring IVD content."],
  ["Independent Human Review", "Structured bilingual review and final human quality control remain central to regulated diagnostic workflows."],
  ["AI-Assisted Quality Validation", "AI-enabled and programmable QA can surface terminology, number, unit, omission, consistency, formatting, and placeholder issues for human evaluation."],
];

const relatedServices = [
  ["Medical Device Translation Services", "Translation and localization across IFUs, labeling, software, technical documentation, regulatory materials, training, and post-market content.", "https://www.sesen.com/medical-device-translation-services/", "Explore Medical Device Translation Services"],
  ["IFU Translation Services", "Specialized translation, multilingual formatting, terminology management, and QA for medical device and IVD Instructions for Use.", "https://www.sesen.com/ifu-translation-services/", "Explore IFU Translation Services"],
  ["Labeling Translation Services", "Multilingual translation and in-context production support for regulated labels, packaging, product information, warnings, and market updates.", "https://www.sesen.com/labeling-translation-services/", "Explore Labeling Translation Services"],
  ["Clinical & Medical Software Localization", "Software localization for medical applications, device interfaces, digital health platforms, clinical systems, and diagnostic interfaces.", "https://www.sesen.com/clinical-medical-software-localization-services/", "Explore Clinical & Medical Software Localization"],
  ["Regulatory Submission Translation Services", "Translation workflows for regulatory dossiers, supporting documentation, responses, technical content, and global submission programs.", "https://www.sesen.com/regulatory-submission-translation-services/", "Explore Regulatory Submission Translation Services"],
  ["ISO 13485 Translation Services", "Quality-controlled translation support for medical device manufacturers managing multilingual documentation in ISO 13485-focused quality environments.", "https://www.sesen.com/iso-13485-translation-services/", "Explore ISO 13485 Translation Services"],
];

const faqs = [
  ["What are IVD translation services?", "IVD translation services support the multilingual translation and localization of content associated with in vitro diagnostic medical devices, including assays, reagents, instruments, technical documentation, performance evaluation, IFUs, labels, packaging, software, regulatory materials, training content, post-market documentation, and product updates."],
  ["How is IVD translation different from general medical device translation?", "IVDs use diagnostic-specific scientific and laboratory terminology involving analytes, biomarkers, specimen types, reagents, calibrators, controls, analytical and clinical performance, reference intervals, cutoffs, interference, cross-reactivity, and result interpretation. Under the EU IVDR, performance evaluation specifically addresses scientific validity, analytical performance, and clinical performance."],
  ["What IVD documents does Sesen translate?", "Sesen supports technical documentation, Performance Evaluation Plans and Reports, scientific validity documentation, analytical and clinical performance reports, performance study materials, IFUs, labels and packaging, SSPs where applicable, instrument manuals, diagnostic software, regulatory correspondence, risk and quality documentation, PMS and PMPF materials, training content, and recurring product updates."],
  ["Does Sesen support EU IVDR translation requirements?", "Yes. Sesen supports translation and localization of technical documentation, performance documentation, IFUs, labeling, SSPs where applicable, regulatory communication, and post-market content used in IVDR programs. Language programs can be structured around applicable target markets, content types, languages, versions, and review requirements."],
  ["Which IVDs require a Summary of Safety and Performance?", "Under Article 29 of the EU IVDR, manufacturers of Class C and Class D devices must prepare a Summary of Safety and Performance, except for devices for performance studies. The SSP must be clear to the intended user and, where relevant, the patient. Sesen supports SSP translation and formatting while helping maintain terminology consistency with performance evaluation, technical documentation, IFUs, and related product content."],
  ["Can Sesen translate IVD performance evaluation documentation?", "Yes. Sesen supports Performance Evaluation Plans and Reports, scientific validity documentation, analytical performance reports, clinical performance reports, performance study content, literature-related evidence, and supporting materials. Terminology and translation assets can be maintained as performance evidence is updated through the product lifecycle."],
  ["Can Sesen translate IVD software and analyzer interfaces?", "Yes. Sesen localizes analyzer and instrument interfaces, embedded software, workflow screens, operator prompts, alerts, result displays, dashboards, diagnostic applications, help content, and software documentation. Workflows can include context review, variables and placeholders, text-length constraints, screenshot review, linguistic testing, and recurring releases."],
  ["How does Sesen maintain consistency across IFUs, labels, software and lifecycle updates?", "Sesen can establish shared terminology, translation memory, product references, style guidance, and review rules across related content. Version-aware workflows, reviewer feedback, and cross-document QA help approved language remain consistent as technical documentation, IFUs, labels, software, performance evidence, and post-market content evolve."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 10h10M10 6l4 4-4 4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4.5 10.5 8 14l7.5-8" />
    </svg>
  );
}

function MiniIcon({ type }) {
  const paths = {
    assay: <><path d="M7 3h6M8 3v5l-3 6a2 2 0 0 0 1.8 3h6.4a2 2 0 0 0 1.8-3l-3-6V3"/><path d="M7 12h6"/></>,
    docs: <><rect x="4" y="3" width="12" height="14" rx="2"/><path d="M7 7h6M7 10h6M7 13h4"/></>,
    evidence: <><path d="M4 15V9M8 15V5M12 15v-3M16 15V7"/><path d="M3 16h14"/></>,
    ifu: <><path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H10v15H6.5A2.5 2.5 0 0 0 4 19V4.5Z"/><path d="M16 4.5A2.5 2.5 0 0 0 13.5 2H10v15h3.5A2.5 2.5 0 0 1 16 19V4.5Z"/></>,
    label: <><path d="M3 8V4h4l9 9-4 4-9-9Z"/><circle cx="6.5" cy="6.5" r="1"/></>,
    software: <><rect x="2.5" y="4" width="15" height="11" rx="2"/><path d="M6 18h8M10 15v3M6 8h3M6 11h8"/></>,
    regulatory: <><path d="M10 2 16 5v5c0 4-2.5 6.5-6 8-3.5-1.5-6-4-6-8V5l6-3Z"/><path d="m7 10 2 2 4-4"/></>,
    update: <><path d="M15.5 7A6 6 0 1 0 16 12"/><path d="M15.5 3v4h-4"/></>,
  };
  return <svg className="ivd-mini-icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false">{paths[type]}</svg>;
}

function SectionIntro({ eyebrow, title, text, centered = false, className = "" }) {
  return (
    <div className={`ivd-section-intro ${centered ? "ivd-section-intro--center" : ""} ${className}`}>
      {eyebrow ? <div className="ivd-eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="ivd-editorial-link" href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

export default function SesenIVDTranslationServicesWireframe() {
  return (
    <main className="sesen-ivd-page">
      <style>{`
        .sesen-ivd-page {
          --ivd-blue: #4B6FD8;
          --ivd-blue-dark: #3659BB;
          --ivd-blue-deep: #253F8F;
          --ivd-blue-mid: #6F8BE1;
          --ivd-blue-soft: #EAF0FF;
          --ivd-blue-pale: #F5F7FF;
          --ivd-navy: #17264D;
          --ivd-ink: #111827;
          --ivd-body: #46546D;
          --ivd-muted: #68758B;
          --ivd-border: #DDE4F2;
          --ivd-divider: #E9EEF8;
          --ivd-surface: #F7F9FD;
          --ivd-white: #FFFFFF;
          --ivd-light-blue: #C8D6FF;
          color: var(--ivd-body);
          background: var(--ivd-white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
          overflow-x: clip;
        }
        .sesen-ivd-page * { box-sizing: border-box; }
        .sesen-ivd-page a { color: inherit; }
        .sesen-ivd-page .ivd-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .sesen-ivd-page .ivd-section { padding: 96px 0; }
        .sesen-ivd-page .ivd-section--dense { padding: 80px 0; }
        .sesen-ivd-page .ivd-section--soft { background: var(--ivd-surface); }
        .sesen-ivd-page .ivd-section--blue-soft { background: var(--ivd-blue-pale); }
        .sesen-ivd-page h1,
        .sesen-ivd-page h2,
        .sesen-ivd-page h3,
        .sesen-ivd-page h4 {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif;
          color: var(--ivd-navy);
          font-weight: 500;
          margin: 0;
        }
        .sesen-ivd-page h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }
        .sesen-ivd-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: 0;
        }
        .sesen-ivd-page h3 {
          font-size: 24px;
          line-height: 1.3;
        }
        .sesen-ivd-page h4 {
          font-size: 19px;
          line-height: 1.35;
        }
        .sesen-ivd-page p { margin: 0; }
        .sesen-ivd-page .ivd-eyebrow {
          color: var(--ivd-blue-dark);
          font-size: 11px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }
        .sesen-ivd-page .ivd-section-intro { max-width: 820px; margin-bottom: 52px; }
        .sesen-ivd-page .ivd-section-intro--center { margin-left: auto; margin-right: auto; text-align: center; }
        .sesen-ivd-page .ivd-section-intro p {
          max-width: 780px;
          margin-top: 20px;
          color: var(--ivd-body);
          font-size: 18px;
          line-height: 1.68;
        }
        .sesen-ivd-page .ivd-section-intro--center p { margin-left: auto; margin-right: auto; }
        .sesen-ivd-page .ivd-btn-row { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 30px; }
        .sesen-ivd-page .ivd-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.04em;
          font-weight: 700;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .sesen-ivd-page .ivd-btn svg,
        .sesen-ivd-page .ivd-editorial-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .sesen-ivd-page .ivd-btn--primary { background: var(--ivd-blue); color: var(--ivd-white); border: 1px solid var(--ivd-blue); }
        .sesen-ivd-page .ivd-btn--primary:hover { background: var(--ivd-blue-dark); border-color: var(--ivd-blue-dark); }
        .sesen-ivd-page .ivd-btn--secondary { background: var(--ivd-white); color: var(--ivd-ink); border: 1px solid #C9D4E8; }
        .sesen-ivd-page .ivd-btn--secondary:hover { background: var(--ivd-blue-pale); border-color: #AFC0E5; }
        .sesen-ivd-page .ivd-btn:focus-visible,
        .sesen-ivd-page .ivd-editorial-link:focus-visible,
        .sesen-ivd-page summary:focus-visible {
          outline: 3px solid rgba(75,111,216,.32);
          outline-offset: 4px;
        }
        .sesen-ivd-page .ivd-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ivd-blue-dark);
          text-decoration: none;
          font-weight: 700;
          line-height: 1.4;
        }
        .sesen-ivd-page .ivd-editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .sesen-ivd-page .ivd-mini-icon { width: 24px; height: 24px; fill: none; stroke: var(--ivd-blue-dark); stroke-width: 1.55; stroke-linecap: round; stroke-linejoin: round; }

        .sesen-ivd-page .ivd-hero {
          position: relative;
          padding: 94px 0 96px;
          background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
          border-bottom: 1px solid var(--ivd-divider);
        }
        .sesen-ivd-page .ivd-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(440px, .94fr);
          gap: 70px;
          align-items: center;
        }
        .sesen-ivd-page .ivd-hero-copy { max-width: 680px; }
        .sesen-ivd-page .ivd-hero-lead {
          margin-top: 24px;
          max-width: 660px;
          color: #293954;
          font-size: 20px;
          line-height: 1.65;
        }
        .sesen-ivd-page .ivd-hero-support {
          margin-top: 18px;
          max-width: 650px;
          font-size: 17px;
          color: var(--ivd-body);
        }
        .sesen-ivd-page .ivd-hero-art {
          position: relative;
          min-height: 430px;
          display: grid;
          place-items: center;
        }
        .sesen-ivd-page .ivd-hero-orbit {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          border: 1px solid #D9E2F6;
          background: radial-gradient(circle at center, #FFFFFF 0%, #F5F7FF 66%, rgba(245,247,255,0) 67%);
        }
        .sesen-ivd-page .ivd-hero-svg { position: relative; width: min(100%, 510px); height: auto; }
        .sesen-ivd-page .ivd-hero-svg .line { fill: none; stroke: #7B879C; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .sesen-ivd-page .ivd-hero-svg .strong { fill: none; stroke: var(--ivd-navy); stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
        .sesen-ivd-page .ivd-hero-svg .blue { fill: #EAF0FF; stroke: var(--ivd-blue); stroke-width: 2.2; }
        .sesen-ivd-page .ivd-hero-svg .blue-fill { fill: var(--ivd-blue); }
        .sesen-ivd-page .ivd-hero-svg .soft { fill: #F7F9FD; stroke: #B8C5DC; stroke-width: 1.6; }

        .sesen-ivd-page .ivd-trust { background: var(--ivd-white); }
        .sesen-ivd-page .ivd-trust-inner {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid var(--ivd-border);
          border-bottom: 1px solid var(--ivd-border);
        }
        .sesen-ivd-page .ivd-trust-item { padding: 22px 18px; text-align: center; color: var(--ivd-navy); font-weight: 600; font-size: 15px; }

        .sesen-ivd-page .ivd-connected-grid {
          display: grid;
          grid-template-columns: minmax(0, .9fr) minmax(520px, 1.1fr);
          gap: 72px;
          align-items: start;
        }
        .sesen-ivd-page .ivd-connected-copy p { font-size: 18px; max-width: 610px; }
        .sesen-ivd-page .ivd-connected-copy h2 + p,
        .sesen-ivd-page .ivd-connected-copy .ivd-mobile-heading-center + p { margin-top: 22px; }
        .sesen-ivd-page .ivd-connected-copy p + p { margin-top: 20px; }
        .sesen-ivd-page .ivd-system-map {
          background: var(--ivd-blue-pale);
          border: 1px solid var(--ivd-border);
          border-radius: 28px;
          padding: 32px;
        }
        .sesen-ivd-page .ivd-system-map-core {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
        }
        .sesen-ivd-page .ivd-system-node {
          min-height: 106px;
          border: 1px solid #D5DFF2;
          border-radius: 18px;
          background: rgba(255,255,255,.86);
          padding: 17px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .sesen-ivd-page .ivd-system-node strong { color: var(--ivd-navy); font-family: "Inter Tight", Inter, sans-serif; font-weight: 500; line-height: 1.35; }
        .sesen-ivd-page .ivd-system-governance {
          margin-top: 12px;
          min-height: 70px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 1px solid #AEC0EA;
          border-radius: 18px;
          background: var(--ivd-white);
          color: var(--ivd-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 17px;
          font-weight: 500;
          box-shadow: 0 14px 32px rgba(23,38,77,.05);
          text-align: center;
          padding: 16px 20px;
        }
        .sesen-ivd-page .ivd-system-caption { margin-top: 18px; color: var(--ivd-navy); font-size: 17px; font-weight: 600; text-align: center; }

        .sesen-ivd-page .ivd-lifecycle {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--ivd-border);
          border-left: 1px solid var(--ivd-border);
        }
        .sesen-ivd-page .ivd-lifecycle-step {
          min-height: 240px;
          padding: 28px 26px;
          border-right: 1px solid var(--ivd-border);
          border-bottom: 1px solid var(--ivd-border);
          background: var(--ivd-white);
        }
        .sesen-ivd-page .ivd-lifecycle-number { color: var(--ivd-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .14em; }
        .sesen-ivd-page .ivd-lifecycle-icon { margin: 17px 0 16px; width: 44px; height: 44px; border-radius: 12px; background: var(--ivd-blue-pale); display: grid; place-items: center; }
        .sesen-ivd-page .ivd-lifecycle-step h3 { font-size: 20px; }
        .sesen-ivd-page .ivd-lifecycle-step p { margin-top: 12px; font-size: 16px; line-height: 1.6; }

        .sesen-ivd-page .ivd-product-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 76px;
          align-items: start;
        }
        .sesen-ivd-page .ivd-product-copy > p { font-size: 18px; max-width: 650px; margin-top: 22px; }
        .sesen-ivd-page .ivd-term-list {
          margin-top: 30px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
        }
        .sesen-ivd-page .ivd-check-row { display: flex; gap: 10px; align-items: flex-start; color: var(--ivd-body); }
        .sesen-ivd-page .ivd-check-row svg { width: 18px; height: 18px; margin-top: 4px; flex: 0 0 auto; fill: none; stroke: var(--ivd-blue-dark); stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
        .sesen-ivd-page .ivd-product-aside {
          border-left: 2px solid var(--ivd-blue);
          padding-left: 32px;
        }
        .sesen-ivd-page .ivd-product-aside h3 { margin-bottom: 16px; }
        .sesen-ivd-page .ivd-product-aside-block + .ivd-product-aside-block { margin-top: 30px; padding-top: 30px; border-top: 1px solid var(--ivd-divider); }
        .sesen-ivd-page .ivd-product-aside p { margin-top: 9px; }

        .sesen-ivd-page .ivd-tech-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 72px;
          align-items: start;
        }
        .sesen-ivd-page .ivd-doc-list { margin-top: 26px; display: grid; gap: 10px; }
        .sesen-ivd-page .ivd-doc-list .ivd-check-row { border-bottom: 1px solid var(--ivd-divider); padding-bottom: 10px; }
        .sesen-ivd-page .ivd-tech-panel {
          background: var(--ivd-white);
          border: 1px solid var(--ivd-border);
          border-radius: 28px;
          padding: 34px;
        }
        .sesen-ivd-page .ivd-tech-panel p { font-size: 17px; margin-top: 16px; }
        .sesen-ivd-page .ivd-tech-links { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 22px; }

        .sesen-ivd-page .ivd-performance-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; }
        .sesen-ivd-page .ivd-performance-col { padding-top: 26px; border-top: 2px solid var(--ivd-blue); }
        .sesen-ivd-page .ivd-performance-col p { margin-top: 14px; }
        .sesen-ivd-page .ivd-performance-col ul { margin: 20px 0 0; padding: 0; list-style: none; }
        .sesen-ivd-page .ivd-performance-col li { padding: 9px 0; border-bottom: 1px solid var(--ivd-divider); color: var(--ivd-body); }
        .sesen-ivd-page .ivd-performance-note {
          margin-top: 40px;
          padding: 26px 30px;
          border-radius: 20px;
          background: var(--ivd-blue-pale);
          color: var(--ivd-navy);
          font-size: 17px;
          font-weight: 500;
        }

        .sesen-ivd-page .ivd-experience-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--ivd-border);
          border-bottom: 1px solid var(--ivd-border);
        }
        .sesen-ivd-page .ivd-experience-item { padding: 34px 34px 36px 0; }
        .sesen-ivd-page .ivd-experience-item + .ivd-experience-item { border-left: 1px solid var(--ivd-border); padding-left: 34px; }
        .sesen-ivd-page .ivd-experience-kicker { color: var(--ivd-blue-dark); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .11em; margin-bottom: 13px; }
        .sesen-ivd-page .ivd-experience-item p { margin: 16px 0 18px; }
        .sesen-ivd-page .ivd-experience-points { margin: 0 0 22px; padding: 0; list-style: none; }
        .sesen-ivd-page .ivd-experience-points li { position: relative; padding: 7px 0 7px 18px; border-bottom: 1px solid rgba(221,228,242,.85); font-size: 16px; }
        .sesen-ivd-page .ivd-experience-points li::before { content: ""; position: absolute; left: 0; top: 17px; width: 5px; height: 5px; border-radius: 50%; background: var(--ivd-blue); }

        .sesen-ivd-page .ivd-ivdr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .sesen-ivd-page .ivd-ivdr-main > p { margin-top: 20px; font-size: 18px; }
        .sesen-ivd-page .ivd-ivdr-list { margin-top: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 20px; }
        .sesen-ivd-page .ivd-ivdr-aside { display: grid; gap: 18px; }
        .sesen-ivd-page .ivd-info-panel {
          border: 1px solid var(--ivd-border);
          border-radius: 22px;
          padding: 26px;
          background: var(--ivd-white);
        }
        .sesen-ivd-page .ivd-info-panel--blue { background: var(--ivd-blue-pale); border-color: #D2DDF3; }
        .sesen-ivd-page .ivd-info-panel p { margin-top: 12px; }
        .sesen-ivd-page .ivd-info-panel .ivd-editorial-link { margin-top: 18px; }

        .sesen-ivd-page .ivd-term-matrix {
          border-top: 1px solid var(--ivd-border);
          border-left: 1px solid var(--ivd-border);
          overflow: hidden;
          border-radius: 20px;
        }
        .sesen-ivd-page .ivd-term-row {
          display: grid;
          grid-template-columns: 1.25fr repeat(5, 1fr);
          background: var(--ivd-white);
        }
        .sesen-ivd-page .ivd-term-cell { min-height: 74px; padding: 16px 14px; border-right: 1px solid var(--ivd-border); border-bottom: 1px solid var(--ivd-border); display: flex; align-items: center; font-size: 16px; color: var(--ivd-body); }
        .sesen-ivd-page .ivd-term-cell:first-child { color: var(--ivd-navy); font-weight: 700; background: var(--ivd-blue-pale); font-size: 16px; }
        .sesen-ivd-page .ivd-term-capabilities { margin-top: 34px; display: flex; flex-wrap: wrap; gap: 10px; }
        .sesen-ivd-page .ivd-tag { border: 1px solid var(--ivd-border); border-radius: 999px; padding: 8px 14px; background: var(--ivd-white); color: var(--ivd-navy); font-size: 16px; font-weight: 600; }

        .sesen-ivd-page .ivd-postmarket-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
        .sesen-ivd-page .ivd-postmarket-copy p { margin-top: 20px; font-size: 18px; }
        .sesen-ivd-page .ivd-cycle {
          background: var(--ivd-white);
          border: 1px solid var(--ivd-border);
          border-radius: 28px;
          padding: 34px;
        }
        .sesen-ivd-page .ivd-cycle-track { display: grid; grid-template-columns: repeat(5, 1fr); gap: 8px; align-items: stretch; }
        .sesen-ivd-page .ivd-cycle-step { position: relative; background: var(--ivd-blue-pale); border-radius: 16px; min-height: 125px; padding: 18px 14px; color: var(--ivd-navy); font-weight: 600; font-size: 16px; text-align: center; display: grid; place-items: center; }
        .sesen-ivd-page .ivd-cycle-step:not(:last-child)::after { content: "→"; position: absolute; right: -12px; top: 50%; transform: translateY(-50%); width: 16px; color: var(--ivd-blue-dark); z-index: 2; }
        .sesen-ivd-page .ivd-postmarket-list { margin-top: 30px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px 22px; }

        .sesen-ivd-page .ivd-techno-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--ivd-border);
          border-left: 1px solid var(--ivd-border);
        }
        .sesen-ivd-page .ivd-techno-item { padding: 26px; min-height: 190px; border-right: 1px solid var(--ivd-border); border-bottom: 1px solid var(--ivd-border); background: var(--ivd-white); }
        .sesen-ivd-page .ivd-techno-item p { margin-top: 12px; }

        .sesen-ivd-page .ivd-global-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: start; }
        .sesen-ivd-page .ivd-market-list { display: grid; gap: 0; border-top: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-market-row { padding: 22px 0; border-bottom: 1px solid var(--ivd-border); display: grid; grid-template-columns: 170px 1fr; gap: 22px; }
        .sesen-ivd-page .ivd-market-row strong { color: var(--ivd-navy); }
        .sesen-ivd-page .ivd-program-panel { border-radius: 28px; background: var(--ivd-blue-pale); padding: 32px; }
        .sesen-ivd-page .ivd-program-panel > h3 { margin-bottom: 8px; }
        .sesen-ivd-page .ivd-program-item { padding: 22px 0; border-bottom: 1px solid #D8E1F3; }
        .sesen-ivd-page .ivd-program-item:last-child { border-bottom: 0; padding-bottom: 0; }
        .sesen-ivd-page .ivd-program-item p { margin-top: 8px; }

        .sesen-ivd-page .ivd-quality-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start; }
        .sesen-ivd-page .ivd-quality-copy > p { margin-top: 20px; font-size: 18px; }
        .sesen-ivd-page .ivd-quality-pillar { padding: 22px 0; border-bottom: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-quality-pillar:first-child { padding-top: 0; }
        .sesen-ivd-page .ivd-quality-pillar p { margin-top: 8px; }
        .sesen-ivd-page .ivd-cert-band {
          margin-top: 42px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--ivd-border);
          border-bottom: 1px solid var(--ivd-border);
        }
        .sesen-ivd-page .ivd-cert-item { padding: 22px; text-align: center; }
        .sesen-ivd-page .ivd-cert-item strong { display: block; color: var(--ivd-navy); font-size: 16px; }
        .sesen-ivd-page .ivd-cert-item span { display: block; margin-top: 4px; color: var(--ivd-muted); font-size: 14px; }
        .sesen-ivd-page .ivd-why-block { margin-top: 54px; }
        .sesen-ivd-page .ivd-why-block > h3 { font-size: 26px; margin-bottom: 24px; }
        .sesen-ivd-page .ivd-why-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-why-item { padding: 24px 26px 0 0; }
        .sesen-ivd-page .ivd-why-item + .ivd-why-item { padding-left: 26px; border-left: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-why-item h4 { font-size: 18px; }
        .sesen-ivd-page .ivd-why-item p { margin-top: 9px; }

        .sesen-ivd-page .ivd-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); column-gap: 42px; }
        .sesen-ivd-page .ivd-related-item { padding: 28px 0; border-top: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-related-item p { margin: 12px 0 18px; }

        .sesen-ivd-page .ivd-faq-wrap { max-width: 980px; }
        .sesen-ivd-page .ivd-faq { border-top: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-faq details { border-bottom: 1px solid var(--ivd-border); }
        .sesen-ivd-page .ivd-faq summary {
          cursor: pointer;
          list-style: none;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          padding: 24px 0;
          color: var(--ivd-navy);
          font-family: "Inter Tight", Inter, sans-serif;
          font-size: 20px;
          font-weight: 500;
          line-height: 1.4;
        }
        .sesen-ivd-page .ivd-faq summary::-webkit-details-marker { display: none; }
        .sesen-ivd-page .ivd-faq summary::after { content: "+"; width: 34px; height: 34px; flex: 0 0 34px; border-radius: 50%; border: 1px solid var(--ivd-border); display: grid; place-items: center; color: var(--ivd-blue-dark); font-family: Inter, sans-serif; font-size: 21px; font-weight: 400; }
        .sesen-ivd-page .ivd-faq details[open] summary::after { content: "–"; }
        .sesen-ivd-page .ivd-faq-answer { max-width: 840px; padding: 0 58px 26px 0; font-size: 16px; }

        .sesen-ivd-page .ivd-final { padding: 0 0 96px; background: var(--ivd-white); }
        .sesen-ivd-page .ivd-final-panel {
          border-radius: 30px;
          background: var(--ivd-navy);
          padding: 66px 70px;
          color: #E7ECF8;
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 60px;
          align-items: center;
        }
        .sesen-ivd-page .ivd-final-panel h2 { color: var(--ivd-white); }
        .sesen-ivd-page .ivd-final-panel p { margin-top: 18px; max-width: 710px; font-size: 18px; color: #D3DCEF; }
        .sesen-ivd-page .ivd-final-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
        .sesen-ivd-page .ivd-final-actions .ivd-btn { width: 100%; }
        .sesen-ivd-page .ivd-final-actions .ivd-btn--white { background: var(--ivd-white); color: var(--ivd-ink); border: 1px solid var(--ivd-white); }
        .sesen-ivd-page .ivd-final-actions .ivd-btn--white:hover { background: var(--ivd-blue-pale); border-color: var(--ivd-blue-pale); }

        @media (max-width: 1180px) {
          .sesen-ivd-page .ivd-shell { padding-left: 40px; padding-right: 40px; }
          .sesen-ivd-page .ivd-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(380px, .82fr); gap: 42px; }
          .sesen-ivd-page .ivd-hero-art { min-height: 390px; }
          .sesen-ivd-page .ivd-lifecycle { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-ivd-page .ivd-term-row { grid-template-columns: 1.2fr repeat(5, 1fr); }
        }

        @media (max-width: 900px) {
          .sesen-ivd-page .ivd-shell { padding-left: 30px; padding-right: 30px; }
          .sesen-ivd-page .ivd-section { padding: 80px 0; }
          .sesen-ivd-page .ivd-section--dense { padding: 72px 0; }
          .sesen-ivd-page .ivd-hero { padding: 82px 0; }
          .sesen-ivd-page .ivd-hero-grid,
          .sesen-ivd-page .ivd-connected-grid,
          .sesen-ivd-page .ivd-product-grid,
          .sesen-ivd-page .ivd-tech-grid,
          .sesen-ivd-page .ivd-ivdr-grid,
          .sesen-ivd-page .ivd-postmarket-grid,
          .sesen-ivd-page .ivd-global-grid,
          .sesen-ivd-page .ivd-quality-grid,
          .sesen-ivd-page .ivd-final-panel { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-hero-art { min-height: 330px; max-width: 560px; width: 100%; margin: 0 auto; }
          .sesen-ivd-page .ivd-trust-inner { grid-template-columns: repeat(3, 1fr); }
          .sesen-ivd-page .ivd-performance-grid,
          .sesen-ivd-page .ivd-techno-grid,
          .sesen-ivd-page .ivd-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .sesen-ivd-page .ivd-performance-col:last-child:nth-child(odd) { grid-column: 1 / -1; }
          .sesen-ivd-page .ivd-experience-grid { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-experience-grid { border-left: 1px solid var(--ivd-border); }
          .sesen-ivd-page .ivd-experience-item { padding: 28px; border-right: 1px solid var(--ivd-border); border-bottom: 1px solid var(--ivd-border); }
          .sesen-ivd-page .ivd-experience-item + .ivd-experience-item { border-left: 0; padding-left: 28px; }
          .sesen-ivd-page .ivd-term-matrix { overflow: visible; }
          .sesen-ivd-page .ivd-term-row { min-width: 0; grid-template-columns: repeat(2, 1fr); }
          .sesen-ivd-page .ivd-term-cell:first-child { grid-column: 1 / -1; min-height: 58px; }
          .sesen-ivd-page .ivd-cert-band { grid-template-columns: repeat(2, 1fr); }
          .sesen-ivd-page .ivd-why-grid { grid-template-columns: repeat(2, 1fr); }
          .sesen-ivd-page .ivd-why-item:nth-child(3) { border-left: 0; padding-left: 0; margin-top: 26px; padding-top: 26px; border-top: 1px solid var(--ivd-border); }
          .sesen-ivd-page .ivd-why-item:nth-child(4) { margin-top: 26px; padding-top: 26px; border-top: 1px solid var(--ivd-border); }
          .sesen-ivd-page .ivd-final-panel { padding: 54px; }
          .sesen-ivd-page .ivd-final-actions { max-width: 420px; }
        }

        @media (max-width: 640px) {
          .sesen-ivd-page { line-height: 1.64; }
          .sesen-ivd-page .ivd-shell { padding-left: 20px; padding-right: 20px; }
          .sesen-ivd-page .ivd-section { padding: 68px 0; }
          .sesen-ivd-page .ivd-section--dense { padding: 64px 0; }
          .sesen-ivd-page .ivd-hero { padding: 68px 0 70px; }
          .sesen-ivd-page h1 { font-size: 42px; line-height: 1.25; }
          .sesen-ivd-page h2 { font-size: 32px; line-height: 1.3; }
          .sesen-ivd-page h3 { font-size: 22px; }
          .sesen-ivd-page .ivd-section-intro { margin-bottom: 38px; }
          .sesen-ivd-page .ivd-section-intro p { font-size: 17px; }
          .sesen-ivd-page .ivd-section-intro--mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
          .sesen-ivd-page .ivd-section-intro--mobile-center p { text-align: left; }
          .sesen-ivd-page .ivd-section-intro--mobile-left { text-align: left; margin-left: 0; margin-right: 0; }
          .sesen-ivd-page .ivd-section-intro--mobile-left p { text-align: left; margin-left: 0; margin-right: 0; }
          .sesen-ivd-page .ivd-mobile-heading-center { text-align: center; }
          .sesen-ivd-page .ivd-mobile-heading-center h2 { margin-left: auto; margin-right: auto; }
          .sesen-ivd-page .ivd-connected-copy > p { text-align: left; }
          .sesen-ivd-page .ivd-hero-copy { text-align: center; margin: 0 auto; }
          .sesen-ivd-page .ivd-hero-lead { font-size: 18px; margin-left: auto; margin-right: auto; }
          .sesen-ivd-page .ivd-hero-support { font-size: 16px; margin-left: auto; margin-right: auto; }
          .sesen-ivd-page .ivd-btn-row { flex-direction: column; }
          .sesen-ivd-page .ivd-btn-row .ivd-btn { width: 100%; }
          .sesen-ivd-page .ivd-hero-art { min-height: 260px; }
          .sesen-ivd-page .ivd-hero-grid,
          .sesen-ivd-page .ivd-connected-grid,
          .sesen-ivd-page .ivd-product-grid,
          .sesen-ivd-page .ivd-tech-grid,
          .sesen-ivd-page .ivd-ivdr-grid,
          .sesen-ivd-page .ivd-postmarket-grid,
          .sesen-ivd-page .ivd-global-grid,
          .sesen-ivd-page .ivd-quality-grid { gap: 42px; }
          .sesen-ivd-page .ivd-tech-panel,
          .sesen-ivd-page .ivd-info-panel { padding: 24px; }
          .sesen-ivd-page .ivd-editorial-link,
          .sesen-ivd-page .ivd-check-row,
          .sesen-ivd-page .ivd-term-cell,
          .sesen-ivd-page .ivd-market-row,
          .sesen-ivd-page .ivd-faq summary { overflow-wrap: anywhere; }
          .sesen-ivd-page .ivd-hero-orbit { width: 290px; height: 290px; }
          .sesen-ivd-page .ivd-trust-inner { grid-template-columns: 1fr 1fr; }
          .sesen-ivd-page .ivd-trust-item { padding: 18px 10px; font-size: 14px; }
          .sesen-ivd-page .ivd-trust-item:last-child { grid-column: 1 / -1; }
          .sesen-ivd-page .ivd-system-map { padding: 22px; }
          .sesen-ivd-page .ivd-system-map-core { grid-template-columns: 1fr 1fr; }
          .sesen-ivd-page .ivd-system-node { min-height: 96px; }
          .sesen-ivd-page .ivd-lifecycle { grid-template-columns: 1fr; border-left: 0; }
          .sesen-ivd-page .ivd-lifecycle-step { min-height: 0; border-left: 1px solid var(--ivd-border); padding: 24px; }
          .sesen-ivd-page .ivd-term-list,
          .sesen-ivd-page .ivd-ivdr-list,
          .sesen-ivd-page .ivd-postmarket-list { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-product-aside { border-left-width: 1px; padding-left: 22px; }
          .sesen-ivd-page .ivd-performance-grid,
          .sesen-ivd-page .ivd-experience-grid,
          .sesen-ivd-page .ivd-techno-grid,
          .sesen-ivd-page .ivd-related-grid { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-performance-col:last-child:nth-child(odd) { grid-column: auto; }
          .sesen-ivd-page .ivd-experience-grid { border-left: 0; }
          .sesen-ivd-page .ivd-experience-item,
          .sesen-ivd-page .ivd-experience-item + .ivd-experience-item { padding: 26px 0; border-left: 0; border-right: 0; }
          .sesen-ivd-page .ivd-experience-item:last-child { border-bottom: 0; }
          .sesen-ivd-page .ivd-cycle { padding: 24px; }
          .sesen-ivd-page .ivd-cycle-track { grid-template-columns: 1fr; gap: 12px; }
          .sesen-ivd-page .ivd-cycle-step { min-height: 78px; }
          .sesen-ivd-page .ivd-cycle-step:not(:last-child)::after { content: "↓"; right: auto; left: 50%; top: auto; bottom: -18px; transform: translateX(-50%); }
          .sesen-ivd-page .ivd-market-row { grid-template-columns: 1fr; gap: 5px; }
          .sesen-ivd-page .ivd-program-panel { padding: 24px; }
          .sesen-ivd-page .ivd-cert-band { grid-template-columns: 1fr 1fr; }
          .sesen-ivd-page .ivd-cert-item { padding: 18px 10px; }
          .sesen-ivd-page .ivd-why-grid { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-why-item,
          .sesen-ivd-page .ivd-why-item + .ivd-why-item,
          .sesen-ivd-page .ivd-why-item:nth-child(3),
          .sesen-ivd-page .ivd-why-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--ivd-border); margin-top: 0; padding: 22px 0; }
          .sesen-ivd-page .ivd-why-item:first-child { border-top: 0; }
          .sesen-ivd-page .ivd-faq summary { font-size: 19px; padding: 22px 0; }
          .sesen-ivd-page .ivd-faq-answer { padding-right: 0; }
          .sesen-ivd-page .ivd-final { padding-bottom: 68px; }
          .sesen-ivd-page .ivd-final-panel { padding: 40px 28px; border-radius: 24px; text-align: center; }
          .sesen-ivd-page .ivd-final-panel p { text-align: left; font-size: 17px; }
          .sesen-ivd-page .ivd-final-actions { max-width: none; }
        }

        @media (max-width: 360px) {
          .sesen-ivd-page h1 { font-size: 38px; }
          .sesen-ivd-page h2 { font-size: 30px; }
          .sesen-ivd-page .ivd-system-map { padding: 16px; }
          .sesen-ivd-page .ivd-system-map-core { grid-template-columns: 1fr; }
          .sesen-ivd-page .ivd-system-node { padding: 14px 16px; min-height: 76px; }
          .sesen-ivd-page .ivd-trust-inner,
          .sesen-ivd-page .ivd-cert-band { grid-template-columns: 1fr; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-ivd-page .ivd-btn { transition: none; }
        }
      `}</style>

      <section className="ivd-hero">
        <div className="ivd-shell ivd-hero-grid">
          <div className="ivd-hero-copy">
            <div className="ivd-eyebrow">IVD TRANSLATION SERVICES</div>
            <h1>IVD Translation Services for Global Diagnostic Products</h1>
            <p className="ivd-hero-lead">Sesen provides specialized IVD translation services for in vitro diagnostic manufacturers bringing assays, instruments, software, labeling, technical documentation, and regulatory content to global markets.</p>
            <p className="ivd-hero-support">From diagnostic terminology and performance evidence to IFUs, IVDR documentation, labels, software interfaces, and post-market updates, we help IVD teams maintain accurate, consistent multilingual content across the complete product lifecycle.</p>
            <div className="ivd-btn-row">
              <a className="ivd-btn ivd-btn--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <ArrowIcon /></a>
              <a className="ivd-btn ivd-btn--secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            </div>
          </div>
          <div className="ivd-hero-art" aria-hidden="true">
            <div className="ivd-hero-orbit" />
            <svg className="ivd-hero-svg" viewBox="0 0 560 430" focusable="false">
              <path className="line" d="M95 201c41-54 104-86 176-86 88 0 164 48 204 119" opacity=".55" />
              <path className="line" d="M93 280c48 36 110 57 177 57 77 0 147-29 197-77" opacity=".55" />
              <g transform="translate(42 105)">
                <rect className="soft" x="0" y="34" width="84" height="172" rx="30" />
                <path className="strong" d="M23 30h38v-12H23z" />
                <path className="blue" d="M16 116h52v60a18 18 0 0 1-18 18H34a18 18 0 0 1-18-18z" />
                <path className="line" d="M20 86h44" />
                <path className="line" d="M26 98h32" />
              </g>
              <g transform="translate(164 196)">
                <path className="blue" d="M0 20 34 0h78l35 20v86l-35 20H34L0 106z" />
                <circle className="soft" cx="73" cy="63" r="26" />
                <circle className="blue-fill" cx="73" cy="63" r="7" />
                <path className="line" d="M23 24h38M88 24h36M22 104h35M91 104h34" />
              </g>
              <g transform="translate(344 92)">
                <rect className="soft" x="0" y="0" width="164" height="176" rx="22" />
                <rect className="blue" x="23" y="22" width="118" height="72" rx="10" />
                <path className="strong" d="M34 78 55 58l17 11 24-28 32 28" />
                <path className="line" d="M24 119h116M24 141h74" />
                <rect className="blue" x="23" y="154" width="58" height="52" rx="8" />
                <rect className="soft" x="90" y="154" width="51" height="52" rx="8" />
              </g>
              <g transform="translate(315 300)">
                <rect className="soft" x="0" y="0" width="174" height="91" rx="16" />
                <path className="line" d="M26 23h93M26 44h124M26 65h72" />
                <circle className="blue-fill" cx="145" cy="25" r="9" />
              </g>
              <circle className="blue-fill" cx="143" cy="117" r="5" />
              <circle className="blue-fill" cx="329" cy="173" r="5" />
              <circle className="blue-fill" cx="292" cy="328" r="5" />
            </svg>
          </div>
        </div>
      </section>

      <section className="ivd-trust" aria-label="Sesen IVD translation credentials">
        <div className="ivd-shell ivd-trust-inner">
          {['ISO 17100 Certified', 'ISO 13485 Certified', 'ISO 9001:2015 Certified', '150+ Languages', 'Life Sciences Specialists'].map((item) => (
            <div className="ivd-trust-item" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell ivd-connected-grid">
          <div className="ivd-connected-copy">
            <div className="ivd-mobile-heading-center">
              <h2>Translate the Diagnostic System, Not Just Individual Documents</h2>
            </div>
            <p>An in vitro diagnostic product is a connected system in which the same scientific, technical, performance, and safety concepts can appear across assays, instruments, performance evidence, technical documentation, IFUs, labels, and software.</p>
            <p>Sesen helps diagnostics teams maintain terminology continuity and controlled multilingual content across those touchpoints—reducing terminology drift, simplifying reviewer alignment, and supporting consistent product updates across markets and versions.</p>
          </div>
          <div className="ivd-system-map" role="group" aria-label="Connected IVD content ecosystem">
            <div className="ivd-system-map-core">
              {[
                ["Assay / Reagent", "assay"], ["Performance Evidence", "evidence"], ["Technical Documentation", "docs"], ["IFU", "ifu"],
                ["Labeling", "label"], ["Software", "software"], ["IVDR / Release", "regulatory"], ["Post-Market", "update"],
              ].map(([label, type]) => (
                <div className="ivd-system-node" key={label}>
                  <MiniIcon type={type} />
                  <strong>{label}</strong>
                </div>
              ))}
            </div>
            <div className="ivd-system-governance"><MiniIcon type="docs" /><span>Terminology governance and approved language span every touchpoint.</span></div>
            <div className="ivd-system-caption">One diagnostic system. One controlled multilingual content ecosystem.</div>
          </div>
        </div>
      </section>

      <section className="ivd-section ivd-section--blue-soft">
        <div className="ivd-shell">
          <SectionIntro
            title="Multilingual Support Across the IVD Product Lifecycle"
            text="Sesen supports multilingual IVD content from product development and performance evaluation through regulatory review, market release, and post-market change."
            centered
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-lifecycle">
            {lifecycleSteps.map(([number, title, text], index) => (
              <div className="ivd-lifecycle-step" key={number}>
                <div className="ivd-lifecycle-number">{number}</div>
                <div className="ivd-lifecycle-icon"><MiniIcon type={['assay','docs','evidence','ifu','label','software','regulatory','update'][index]} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell ivd-product-grid">
          <div className="ivd-product-copy">
            <h2>Precision Starts with the Diagnostic Product</h2>
            <p>IVD terminology sits at the intersection of laboratory science, clinical interpretation, device performance, and regulated product use. Sesen supports diagnostic content with professional life sciences linguists and reviewers matched to the subject matter, language, document type, and intended audience.</p>
            <div className="ivd-term-list">
              {assayTerms.map((item) => <div className="ivd-check-row" key={item}><CheckIcon /><span>{item}</span></div>)}
            </div>
            <div style={{marginTop: 28}}><EditorialLink href="https://www.sesen.com/medical-device-translation-services/">Explore Medical Device Translation Services</EditorialLink></div>
          </div>
          <aside className="ivd-product-aside">
            <div className="ivd-product-aside-block">
              <h3>Assays & Test Systems</h3>
              <p>Support content involving molecular diagnostics, immunoassays, clinical chemistry, hematology, microbiology, companion diagnostics, point-of-care testing, self-testing, and other IVD systems.</p>
            </div>
            <div className="ivd-product-aside-block">
              <h3>Reagents, Calibrators & Controls</h3>
              <p>Translate terminology for reagents, kits, calibrators, controls, specimen materials, consumables, storage conditions, handling procedures, and stability information.</p>
            </div>
            <div className="ivd-product-aside-block">
              <h3>Instruments & Automated Systems</h3>
              <p>Localize operating instructions, setup, configuration, maintenance, warnings, error states, workflow prompts, troubleshooting, software interfaces, and technical documentation.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="ivd-section ivd-section--soft">
        <div className="ivd-shell ivd-tech-grid">
          <div>
            <h2>IVD Technical Documentation for Global Regulatory Programs</h2>
            <p style={{marginTop: 20, fontSize: 18}}>Sesen helps diagnostics manufacturers translate controlled technical content while maintaining terminology and document relationships across multilingual regulatory programs.</p>
            <div className="ivd-doc-list">
              {technicalDocs.map((item) => <div className="ivd-check-row" key={item}><CheckIcon /><span>{item}</span></div>)}
            </div>
          </div>
          <div className="ivd-tech-panel">
            <h3>Keep Technical Evidence Connected to Product Language</h3>
            <p>Device descriptions, intended purpose, performance claims, warnings, limitations, and other key concepts can also appear in IFUs, labels, software interfaces, performance documentation, and post-market materials.</p>
            <p>Sesen helps maintain those relationships through centralized terminology, translation memory, reference management, and cross-document quality checks. For EU programs, workflows can support technical documentation associated with IVDR Annex II and Annex III content.</p>
            <div className="ivd-tech-links">
              <EditorialLink href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation Services</EditorialLink>
              <EditorialLink href="https://www.sesen.com/iso-13485-translation-services/">ISO 13485 Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell">
          <SectionIntro
            eyebrow="PERFORMANCE EVALUATION"
            title="Translate the Evidence Behind Diagnostic Performance"
            text="Performance evaluation is one of the areas that most clearly differentiates IVD content from general medical device documentation. Under the EU IVDR framework, it is a continuous process that brings together scientific validity, analytical performance, and clinical performance."
            centered
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-performance-grid">
            {performanceGroups.map((group) => (
              <article className="ivd-performance-col" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="ivd-performance-note">Sesen also supports Performance Evaluation Plans and Performance Evaluation Reports. The performance evaluation report forms part of the technical documentation and is updated as clinical evidence evolves through the device lifecycle, making terminology continuity especially important across evidence, IFUs, labeling, software, and post-market content.</div>
        </div>
      </section>

      <section className="ivd-section ivd-section--blue-soft">
        <div className="ivd-shell">
          <SectionIntro
            title="From Evidence to the Product Experience"
            text="The scientific and regulatory language behind an IVD ultimately reaches users through instructions, labels, instruments, and software. Sesen helps keep those touchpoints synchronized."
            centered
            className="ivd-section-intro--mobile-center"
          />
          <div className="ivd-experience-grid">
            {productExperience.map((item) => (
              <article className="ivd-experience-item" key={item.title}>
                <div className="ivd-experience-kicker">{item.kicker}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul className="ivd-experience-points">{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <EditorialLink href={item.link}>{item.linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell ivd-ivdr-grid">
          <div className="ivd-ivdr-main">
            <h2>IVDR Translation Support from Conformity Assessment to Market Release</h2>
            <p>Sesen supports manufacturers managing multilingual content across IVDR technical documentation, performance evaluation, notified body interaction, IFUs, labeling, market release, and ongoing product maintenance.</p>
            <div className="ivd-ivdr-list">
              {['Technical documentation','Performance evaluation','Scientific validity documentation','Analytical performance','Clinical performance','Performance study materials','IFUs and labeling','Regulatory questions and responses','Market-specific product information','Post-market documentation'].map((item) => (
                <div className="ivd-check-row" key={item}><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
          </div>
          <aside className="ivd-ivdr-aside">
            <div className="ivd-info-panel ivd-info-panel--blue">
              <h3>Summary of Safety and Performance</h3>
              <p>For Class C and Class D IVDs other than devices for performance studies, Article 29 of the IVDR requires a Summary of Safety and Performance. The SSP must be clear to the intended user and, where relevant, the patient. Sesen supports SSP translation and formatting while helping align terminology with performance evaluation, technical documentation, IFUs, and related product records.</p>
            </div>
            <div className="ivd-info-panel">
              <h3>Market-Specific Language Requirements</h3>
              <p>IVDR Article 10(10) requires the device to be accompanied by the information set out in Annex I Section 20 in the official Union language or languages determined by the Member State where the device is made available. For self-testing and near-patient testing, that information must also be easily understandable. Sesen helps organize multilingual programs around applicable markets, content types, languages, reviewers, and release schedules.</p>
              <EditorialLink href="https://www.sesen.com/regulatory-translation-services/">Explore Regulatory Translation Services</EditorialLink>
            </div>
          </aside>
        </div>
      </section>

      <section className="ivd-section ivd-section--soft">
        <div className="ivd-shell">
          <SectionIntro
            title="One Terminology System Across Every Diagnostic Touchpoint"
            text="A single diagnostic concept can move through scientific evidence, technical documentation, IFUs, labels, software, and post-market content. Shared terminology helps preserve the right meaning in every context."
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-term-matrix" role="table" aria-label="IVD terminology relationships">
            {terminologyRows.map((row) => (
              <div className="ivd-term-row" role="row" key={row[0]}>
                {row.map((cell, index) => <div className="ivd-term-cell" role={index === 0 ? "rowheader" : "cell"} key={`${row[0]}-${cell}-${index}`}>{cell}</div>)}
              </div>
            ))}
          </div>
          <div className="ivd-term-capabilities">
            {['Client terminology integration','IVD termbase development','Translation memory','Automated terminology checks','Cross-document QA','Reviewer feedback management','Market-specific preferences','Controlled change propagation'].map((item) => <span className="ivd-tag" key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell ivd-postmarket-grid">
          <div className="ivd-postmarket-copy">
            <h2>Manage Multilingual Change After Market Release</h2>
            <p>IVD translation does not end at launch. New post-market information, updated performance evidence, revised labeling, software changes, regulatory requirements, and new markets can affect multiple product assets at once.</p>
            <div className="ivd-postmarket-list">
              {['PMS plans and reports','PMPF plans and reports','PSURs where applicable','Vigilance-related content','Performance updates','Revised IFUs and labeling','Software releases','Product change documentation'].map((item) => <div className="ivd-check-row" key={item}><CheckIcon /><span>{item}</span></div>)}
            </div>
          </div>
          <div className="ivd-cycle">
            <div className="ivd-cycle-track" aria-label="IVD multilingual lifecycle cycle">
              {['Evidence','Market Release','Post-Market Information','Product Update','New Multilingual Release'].map((item) => <div className="ivd-cycle-step" key={item}>{item}</div>)}
            </div>
            <p style={{marginTop: 28}}>Translation memory, delta workflows, terminology continuity, reviewer feedback, and centralized release coordination help preserve approved language while focusing effort on changed content.</p>
          </div>
        </div>
      </section>

      <section className="ivd-section ivd-section--blue-soft">
        <div className="ivd-shell">
          <SectionIntro
            title="Translation Expertise Across Diagnostic Technologies"
            text="Sesen supports IVD manufacturers across a broad range of diagnostic technologies, laboratory environments, users, and software-enabled product systems."
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-techno-grid">
            {diagnosticTechnologies.map(([title, text]) => (
              <article className="ivd-techno-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell ivd-global-grid">
          <div>
            <h2>Scale IVD Content Across Global Markets</h2>
            <p style={{marginTop: 20, fontSize: 18}}>Sesen provides centralized multilingual support across 150+ languages to help diagnostics teams coordinate regulatory, labeling, software, IFU, and product content across international launches and recurring updates.</p>
            <div className="ivd-market-list" style={{marginTop: 30}}>
              {globalMarkets.map(([title, text]) => <div className="ivd-market-row" key={title}><strong>{title}</strong><span>{text}</span></div>)}
            </div>
          </div>
          <aside className="ivd-program-panel">
            <h3>Common IVD Translation Programs</h3>
            {programScenarios.map(([title, text]) => <div className="ivd-program-item" key={title}><h4>{title}</h4><p>{text}</p></div>)}
          </aside>
        </div>
      </section>

      <section className="ivd-section ivd-section--soft">
        <div className="ivd-shell">
          <div className="ivd-quality-grid">
            <div className="ivd-quality-copy">
              <h2>Specialized Human Expertise, Supported by Controlled Technology</h2>
              <p>IVD content can combine scientific evidence, technical procedures, regulatory language, software, numerical data, and safety information. Sesen combines professional human expertise with controlled language technologies to support accuracy, consistency, scalability, and quality visibility.</p>
              <p style={{marginTop: 16}}>For suitable, client-approved use cases, SesenGPT or other controlled AI-assisted workflows may support draft translation, terminology work, content reuse, or quality validation. Professional life sciences linguists and reviewers remain central to regulated diagnostic workflows, and automated QA findings are surfaced for human evaluation rather than treated as regulatory decisions.</p>
            </div>
            <div>
              {qualityPillars.map(([title, text]) => <div className="ivd-quality-pillar" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
          </div>
          <div className="ivd-cert-band" aria-label="Sesen quality framework">
            <div className="ivd-cert-item"><strong>ISO 17100</strong><span>Translation processes</span></div>
            <div className="ivd-cert-item"><strong>ISO 13485</strong><span>Medical device quality processes</span></div>
            <div className="ivd-cert-item"><strong>ISO 9001:2015</strong><span>Quality management</span></div>
            <div className="ivd-cert-item"><strong>Secure Workflows</strong><span>Controlled content handling</span></div>
          </div>
          <div className="ivd-why-block">
            <h3>Why IVD Teams Choose Sesen</h3>
            <div className="ivd-why-grid">
              <div className="ivd-why-item"><h4>IVD & Life Sciences Specialization</h4><p>Workflows are designed around regulated diagnostic, medical device, scientific, and life sciences content rather than general technical translation.</p></div>
              <div className="ivd-why-item"><h4>Connected Content Management</h4><p>Shared terminology, translation memory, references, and review decisions help keep evidence, IFUs, labels, software, and updates aligned.</p></div>
              <div className="ivd-why-item"><h4>Professional Human Review</h4><p>Qualified linguists and reviewers remain central to meaning, terminology, context, readability, and final linguistic quality.</p></div>
              <div className="ivd-why-item"><h4>Scalable Global Delivery</h4><p>Centralized project management supports individual documents, recurring releases, product portfolios, and coordinated programs across 150+ languages.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="ivd-section">
        <div className="ivd-shell">
          <SectionIntro
            title="Related Medical Device Translation Services"
            text="Connect IVD programs with Sesen's specialized translation services for the regulated content systems surrounding diagnostic products."
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-related-grid">
            {relatedServices.map(([title, text, href, linkLabel]) => (
              <article className="ivd-related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <EditorialLink href={href}>{linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ivd-section ivd-section--blue-soft">
        <div className="ivd-shell ivd-faq-wrap">
          <SectionIntro
            title="IVD Translation Services FAQs"
            text="Answers to common questions about IVD translation, IVDR documentation, performance evidence, software localization, terminology, and post-market updates."
            className="ivd-section-intro--mobile-left"
          />
          <div className="ivd-faq">
            {faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <div className="ivd-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ivd-final">
        <div className="ivd-shell">
          <div className="ivd-final-panel">
            <div>
              <h2>Support Global IVD Programs with Specialized Translation Expertise</h2>
              <p>From assays and performance evidence to IFUs, labels, software, IVDR documentation, and post-market updates, Sesen helps diagnostic manufacturers keep multilingual product content accurate, consistent, and controlled across the complete IVD lifecycle.</p>
            </div>
            <div className="ivd-final-actions">
              <a className="ivd-btn ivd-btn--white" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <ArrowIcon /></a>
              <a className="ivd-btn ivd-btn--primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
