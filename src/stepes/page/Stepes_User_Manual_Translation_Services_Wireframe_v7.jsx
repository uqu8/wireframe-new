import React, { useState } from "react";

const manualTypes = [
  { icon: "book", title: "User Manuals & User Guides", text: "Product features, controls, settings, workflows, specifications, and everyday operation." },
  { icon: "steps", title: "Instruction Manuals", text: "Step-by-step instructions for setup, operation, configuration, care, and safe product use." },
  { icon: "power", title: "Operating Manuals", text: "Startup, configuration, monitoring, operating parameters, production workflows, and shutdown procedures." },
  { icon: "install", title: "Installation & Assembly Guides", text: "Installation, assembly, commissioning, system setup, and configuration for technical and consumer products." },
  { icon: "gear", title: "Maintenance Manuals", text: "Preventive maintenance, inspections, calibration, cleaning, servicing, and replacement schedules." },
  { icon: "wrench", title: "Service & Repair Manuals", text: "Diagnostics, disassembly, replacement procedures, troubleshooting, corrective actions, and field service content." },
  { icon: "userbook", title: "Owner's Manuals", text: "Vehicles, appliances, electronics, tools, equipment, and other consumer or professional products." },
  { icon: "bolt", title: "Quick-Start Guides", text: "Concise setup, onboarding, activation, configuration, and initial-use instructions." },
  { icon: "search", title: "Troubleshooting Guides", text: "Fault codes, symptoms, diagnostic steps, decision trees, and corrective procedures." },
  { icon: "shield", title: "Safety Instructions", text: "Warnings, cautions, hazards, PPE, emergency procedures, and safe operating practices." },
  { icon: "medical", title: "Instructions for Use (IFUs)", text: "Regulated medical devices, diagnostic systems, healthcare technologies, and other compliance-sensitive products." },
  { icon: "screen", title: "Online Help & Digital Manuals", text: "HTML documentation, searchable help systems, embedded instructions, eIFUs, and web-based product documentation." },
];

const industries = [
  {
    icon: "factory",
    title: "Manufacturing & Industrial Equipment",
    text: "Machinery, robotics, automation, CNC systems, industrial controls, material handling, processing equipment, pumps, valves, and production systems.",
    link: "https://www.stepes.com/manufacturing-translation-services/",
    linkLabel: "Manufacturing Translation Services",
  },
  {
    icon: "car",
    title: "Automotive & Mobility",
    text: "Owner's manuals, service documentation, repair instructions, EV systems, charging equipment, diagnostics, infotainment, and connected-vehicle guides.",
    link: "https://www.stepes.com/automotive-translation-services/",
    linkLabel: "Automotive Translation Services",
  },
  {
    icon: "medical",
    title: "Medical Devices & Diagnostics",
    text: "IFUs, operator manuals, installation instructions, maintenance procedures, software-enabled device documentation, and laboratory systems.",
    link: "https://www.stepes.com/medical-device-translation-services/",
    linkLabel: "Medical Device Translation Services",
  },
  {
    icon: "chip",
    title: "Electronics & Semiconductors",
    text: "Consumer electronics, electronic equipment, components, test systems, instrumentation, and semiconductor manufacturing technologies.",
    link: "https://www.stepes.com/electronics-translation-services/",
    linkLabel: "Electronics Translation Services",
  },
  {
    icon: "screen",
    title: "Software & Technology",
    text: "User guides, administrator manuals, deployment documentation, online help, support content, and connected-product documentation synchronized with localized UI terminology.",
    link: "https://www.stepes.com/software-documentation-translation-services/",
    linkLabel: "Software Documentation Translation Services",
  },
  {
    icon: "network",
    title: "Telecommunications",
    text: "Network equipment, communications systems, routers, gateways, infrastructure, installation, configuration, administration, maintenance, and field-service manuals.",
    link: "https://www.stepes.com/telecommunications-translation-services/",
    linkLabel: "Telecommunications Translation Services",
  },
  {
    icon: "energy",
    title: "Energy & Renewables",
    text: "Solar, wind, battery storage, charging systems, electrical equipment, power generation, grid technologies, and field-service documentation.",
    link: "https://www.stepes.com/energy-translation-services/",
    linkLabel: "Energy Translation Services",
  },
  {
    icon: "plane",
    title: "Aerospace & Defense",
    text: "Highly structured operating, maintenance, servicing, component, and technical support documentation requiring controlled terminology and precision.",
  },
  {
    icon: "lab",
    title: "Scientific & Laboratory Equipment",
    text: "Analytical instruments, testing systems, laboratory automation, measurement equipment, calibration, setup, cleaning, and troubleshooting documentation.",
  },
  {
    icon: "home",
    title: "Consumer Products & Appliances",
    text: "Home appliances, smart-home products, tools, consumer electronics, connected devices, and other products requiring clear end-user instructions and safety information.",
  },
];

const workflow = [
  ["Content Analysis", "Analyze source files, word counts, repetition, graphics, screenshots, terminology, existing translations, file structure, and publishing requirements."],
  ["Translation Memory & Terminology", "Leverage approved translations and prepare product-specific terminology before translation begins."],
  ["AI-Assisted Translation", "Apply appropriate AI translation technology based on language, technical complexity, content type, project requirements, and risk."],
  ["Technical Linguist Review", "Validate meaning, terminology, procedures, warnings, product references, usability, and linguistic quality."],
  ["Automated Quality Assurance", "Check terminology, omissions, numbers, measurements, units, punctuation, tags, formatting, and consistency."],
  ["Multilingual Publishing", "Restore layouts, graphics, screenshots, indexes, tables of contents, cross-references, and other production elements."],
  ["Customer Review & Reuse", "Preserve approved translations and terminology as reusable assets for future versions and related products."],
];

const publishingItems = [
  "Page layouts", "Tables", "Diagrams", "Illustrations", "Callouts", "Screenshots",
  "Captions", "Cross-references", "Indexes", "Tables of contents", "Hyperlinks", "Footnotes",
  "RTL layouts", "Asian typography", "Print-ready PDFs", "Digital publication formats"
];

const fileGroups = [
  ["Office & Documents", "Microsoft Word, PowerPoint, Excel, and PDF"],
  ["Desktop Publishing", "Adobe InDesign, Illustrator, and FrameMaker"],
  ["Structured & Web", "XML, DITA, HTML, XHTML, and other structured-content formats"],
  ["Help & Documentation", "MadCap Flare, HTML help, web documentation, and structured help content"],
  ["Graphics", "Illustrator, Photoshop, SVG, and other editable artwork formats"],
];

const digitalChannels = [
  ["book", "Printed Manual"],
  ["doc", "PDF"],
  ["screen", "HTML Manual"],
  ["help", "Online Help"],
  ["medical", "eIFU"],
  ["layers", "Knowledge Base"],
  ["qr", "QR Instructions"],
  ["code", "Embedded Help"],
  ["mobile", "Mobile Documentation"],
];

const faqs = [
  ["What is user manual translation?", "User manual translation adapts product instructions, operating guides, installation manuals, service documentation, and related technical content for different languages and markets. Professional manual localization can also include terminology management, translation memory, graphics localization, software screenshot coordination, multilingual formatting, and publishing."],
  ["What types of user manuals can Stepes translate?", "Stepes translates user guides, instruction manuals, operating manuals, installation guides, assembly instructions, maintenance manuals, repair manuals, service manuals, owner's manuals, quick-start guides, troubleshooting content, safety instructions, medical device IFUs, online help, and other technical documentation."],
  ["Can Stepes translate technical manuals with diagrams and screenshots?", "Yes. We can localize text inside diagrams, illustrations, callouts, screenshots, tables, charts, and other visual elements, and provide multilingual DTP and publishing to maintain professional layouts."],
  ["How do you maintain consistent terminology across a user manual?", "Stepes uses customer glossaries, terminology databases, translation memory, linguistic review, and automated QA. Terminology can also be synchronized with software interfaces, labels, training content, service documentation, and other product materials."],
  ["Can you translate DITA, XML, and structured technical documentation?", "Yes. Stepes supports DITA, XML, and other structured-content workflows while preserving markup and content structure so reusable topics remain integrated with your documentation system."],
  ["Can you reuse translations from previous manual versions?", "Yes. Translation memory stores approved translations so unchanged or similar material can be reused in future versions. This reduces unnecessary retranslation while improving consistency and turnaround time."],
  ["Can AI be used to translate technical manuals?", "Yes, when used appropriately. Stepes can use AI-assisted translation for suitable technical content while combining it with terminology controls, automated QA, translation memory, and professional human review according to project requirements. Safety-critical, regulated, technically complex, or high-risk content can receive enhanced human review."],
  ["Do you translate medical device IFUs?", "Yes. Stepes provides translation services for medical device Instructions for Use, operator manuals, software instructions, installation guides, maintenance documentation, and related content."],
  ["Can Stepes deliver print-ready translated manuals?", "Yes. Our multilingual DTP and publishing services can produce formatted manuals with localized tables, illustrations, screenshots, indexes, tables of contents, cross-references, and other document elements."],
  ["Can you translate online manuals and digital help content?", "Yes. Stepes supports HTML documentation, online help, searchable knowledge bases, digital manuals, eIFUs, and other web-based technical documentation."],
  ["How much does user manual translation cost?", "Pricing depends on language, word volume, translation memory matches, technical complexity, file format, review requirements, graphics, and multilingual DTP. Manuals with repeated or previously translated content may benefit substantially from translation memory and content reuse."],
  ["How long does it take to translate a technical manual?", "Turnaround depends on manual length, technical complexity, language count, review requirements, file format, and publishing scope. Large multilingual projects can often be accelerated using parallel workflows, translation memory, AI-assisted translation, terminology management, and coordinated production."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ type = "doc" }) {
  const paths = {
    doc: <><path d="M7 3.5h7l4 4V20.5H7z"/><path d="M14 3.5v4h4M10 12h5M10 15.5h5"/></>,
    book: <><path d="M4 5.5c3.2-.8 5.8-.2 8 1.8v12c-2.2-2-4.8-2.6-8-1.8z"/><path d="M20 5.5c-3.2-.8-5.8-.2-8 1.8v12c2.2-2 4.8-2.6 8-1.8z"/></>,
    steps: <><circle cx="5.5" cy="6" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="5.5" cy="18" r="1"/><path d="M9 6h10M9 12h8M9 18h6"/></>,
    power: <><path d="M12 3v8"/><path d="M7 5.8a8 8 0 1010 0"/><path d="M8 17h8"/></>,
    install: <><path d="M5 8h14v11H5z"/><path d="M9 5h6M12 5v8"/><path d="M9.5 10.5L12 13l2.5-2.5"/></>,
    wrench: <><path d="M14.5 5.2a5 5 0 01-6.3 6.3L4 15.7 8.3 20l4.2-4.2a5 5 0 006.3-6.3l-3.1 3.1-3.1-3.1z"/></>,
    userbook: <><circle cx="8" cy="7" r="2.5"/><path d="M3.5 15c.8-2.6 2.3-4 4.5-4s3.7 1.4 4.5 4"/><path d="M14 6h6v12h-6zM16.5 9h1.5M16.5 12h1.5"/></>,
    bolt: <><path d="M13.5 2.8L6.5 13H12l-1.5 8.2L18 10h-5z"/></>,
    search: <><circle cx="10.5" cy="10.5" r="5.5"/><path d="M14.5 14.5L20 20M8 10.5h5M10.5 8v5"/></>,
    gear: <><circle cx="12" cy="12" r="3"/><path d="M12 2.8v2M12 19.2v2M2.8 12h2M19.2 12h2M5.5 5.5l1.4 1.4M17.1 17.1l1.4 1.4M18.5 5.5l-1.4 1.4M6.9 17.1l-1.4 1.4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3.5 12h17M12 3c2.5 2.5 3.7 5.5 3.7 9S14.5 18.5 12 21M12 3C9.5 5.5 8.3 8.5 8.3 12S9.5 18.5 12 21"/></>,
    shield: <><path d="M12 3l7 2.8v5.8c0 4.6-2.7 7.8-7 9.4-4.3-1.6-7-4.8-7-9.4V5.8z"/><path d="M8.7 12l2.1 2.1 4.5-4.7"/></>,
    medical: <><path d="M7 4h10v16H7z"/><path d="M10 8h4M12 6v4M9.5 14h5M9.5 17h5"/></>,
    layers: <><path d="M12 4l8 4-8 4-8-4zM4 12l8 4 8-4M4 16l8 4 8-4"/></>,
    screen: <><rect x="3.5" y="4.5" width="17" height="12" rx="1.5"/><path d="M9 20h6M12 16.5V20"/></>,
    language: <><path d="M4 5h9M8.5 3v2M6 5c.6 3 2.6 5.4 6 7M11.5 5c-.9 3.9-3.8 6.5-7.5 8"/><path d="M14.5 19l2.7-7 2.8 7M15.5 16.5h3.5"/></>,
    recycle: <><path d="M8 5l2-3 2 3M10 2v5a5 5 0 015 5"/><path d="M16 15l3 .2-1.5 2.6M19 15.2l-4.3-2.4a5 5 0 01-6.8 1.8"/><path d="M5.5 14L4 17l-1.8-2.4M4 17l2.7-4.2a5 5 0 012.2-7"/></>,
    factory: <><path d="M3 20V9l6 3V8l6 4V5h6v15z"/><path d="M6 16h2M11 16h2M16 16h2"/></>,
    car: <><path d="M5 15l1.5-5h11L19 15M4 15h16v4H4z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/></>,
    chip: <><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/><rect x="9" y="9" width="6" height="6" rx="1"/></>,
    network: <><circle cx="12" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><path d="M11 8l-4 8M13 8l4 8M8 18h8"/></>,
    energy: <><path d="M13.5 2.8L6.5 13H12l-1.5 8.2L18 10h-5z"/><path d="M4 4h4M16 20h4"/></>,
    plane: <><path d="M3 13l18-8-6 14-3-5-5-1z"/><path d="M12 14l4-5"/></>,
    lab: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 001.8 3h10.4a2 2 0 001.8-3l-5-9V3"/><path d="M7.5 16h9"/></>,
    home: <><path d="M3 11l9-7 9 7M5.5 10v10h13V10M10 20v-6h4v6"/></>,
    help: <><circle cx="12" cy="12" r="9"/><path d="M9.8 9a2.5 2.5 0 014.8 1c0 2-2.6 2.3-2.6 4M12 18h.01"/></>,
    qr: <><rect x="4" y="4" width="5" height="5"/><rect x="15" y="4" width="5" height="5"/><rect x="4" y="15" width="5" height="5"/><path d="M15 15h2v2h-2zM18 18h2v2h-2zM18 14h2"/></>,
    code: <><path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/></>,
    mobile: <><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4M11 18.5h2"/></>,
    spark: <><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/><path d="M19 15l.7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z"/></>,
  };
  return <svg className="line-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">{paths[type]}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>;
}

function SectionHeading({ eyebrow, title, intro, centered = true, dark = false, id }) {
  return (
    <div className={`section-heading${centered ? " centered" : ""}${dark ? " dark" : ""}`} id={id}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`text-link${dark ? " text-link-dark" : ""}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function CTA({ href, children, secondary = false }) {
  return (
    <a className={`cta${secondary ? " cta-secondary" : " cta-primary"}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-label="Illustration of a product manual translated into multiple languages">
      <div className="machine-card">
        <svg viewBox="0 0 240 210" role="img" aria-label="Technical equipment and multilingual manual illustration">
          <g fill="none" stroke="#5C6370" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="20" y="92" width="86" height="72" rx="10" />
            <path d="M36 92V66h54v26M44 118h38M44 130h26M44 142h31" />
            <circle cx="86" cy="131" r="8" />
            <path d="M31 164v17h64v-17" />
            <rect x="118" y="28" width="92" height="126" rx="10" fill="#fff" />
            <path d="M139 50h49M139 64h37M139 86h49M139 99h42M139 120h31" />
            <path d="M118 106H96" />
            <path d="M100 100l-6 6 6 6" />
          </g>
          <g fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M148 139h35M170 133l7 6-7 6" />
            <circle cx="194" cy="44" r="13" fill="#FDF2F7" />
            <path d="M188 44h12M194 38v12" />
          </g>
          <g fill="#C11D63" fontFamily="Arial, sans-serif" fontSize="9" fontWeight="600">
            <text x="125" y="176">EN</text><text x="153" y="176">DE</text><text x="181" y="176">JA</text>
          </g>
        </svg>
      </div>
      <div className="visual-note note-top"><span className="note-dot" />Terminology aligned</div>
      <div className="visual-note note-bottom"><span className="note-dot" />Ready to publish</div>
    </div>
  );
}

function AccordionItem({ q, a, open, onClick, idx }) {
  return (
    <div className="faq-item">
      <button type="button" className="faq-question" onClick={onClick} aria-expanded={open} aria-controls={`faq-${idx}`}>
        <span>{q}</span><span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={`faq-${idx}`} className={`faq-answer${open ? " open" : ""}`}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function StepesUserManualTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --blush-soft: #FCF7F9;
          --rose-line: #ECD4DF;
          --pink-light: #F2A7C6;
          --ink: #17191D;
          --text: #454B55;
          --muted: #6B7280;
          --line: #E5E7EB;
          --soft: #F7F8FA;
          --dark: #17181C;
          --white: #FFFFFF;
          --shadow: 0 18px 48px rgba(17, 24, 39, .08);
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page { min-width: 0; overflow-x: hidden; background: #fff; color: var(--ink); font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.62; }
        .container { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
        section { position: relative; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; }
        h2 { font-size: 36px; line-height: 1.15; margin-bottom: 20px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 10px; }
        p, li { font-size: 16px; color: var(--text); }
        .body-large { font-size: 18px; line-height: 1.68; }
        .eyebrow { margin-bottom: 15px; color: var(--magenta); font-size: 11px; font-weight: 600; line-height: 1.3; letter-spacing: .12em; text-transform: uppercase; }
        .eyebrow-dark { color: var(--pink-light); }
        .section-heading { max-width: 820px; margin-bottom: 48px; }
        .section-heading.centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-heading.dark h2, .section-heading.dark .section-intro { color: #fff; }
        .section-intro { max-width: 790px; margin: 0 auto; font-size: 18px; line-height: 1.68; color: var(--text); }
        .section-heading:not(.centered) .section-intro { margin-left: 0; }
        .cta-row { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
        .cta { min-height: 48px; padding: 13px 22px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; transition: .2s ease; }
        .cta svg, .text-link svg { width: 18px; height: 18px; flex: 0 0 auto; }
        .cta-primary, .cta-primary:link, .cta-primary:visited, .cta-primary:hover, .cta-primary:active, .cta-primary:focus, .cta-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .cta-primary *, .cta-primary:visited *, .cta-primary:hover *, .cta-primary:focus * { color: #fff !important; stroke: currentColor; }
        .cta-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
        .cta-secondary { background: #fff; color: var(--ink); border: 1px solid #D8DBE1; }
        .cta-secondary:visited { color: var(--ink); }
        .cta-secondary:hover { border-color: #B8BDC7; background: #FAFAFB; transform: translateY(-1px); }
        .cta:focus-visible, .text-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; }
        .text-link { display: inline-flex; align-items: center; gap: 6px; min-height: 44px; color: var(--magenta); font-size: 16px; font-weight: 600; text-decoration: none; }
        .text-link:visited { color: var(--magenta); }
        .text-link:hover { color: var(--magenta-dark); }
        .text-link:hover svg { transform: translateX(2px); }
        .text-link svg { transition: .2s ease; }
        .text-link-dark, .text-link-dark:visited { color: #fff; }
        .text-link-dark:hover { color: var(--pink-light); }
        .hero { padding: 104px 0 100px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(420px, .98fr); gap: 76px; align-items: center; }
        .hero-copy { max-width: 650px; }
        .hero-copy .body-large { max-width: 625px; margin-bottom: 30px; }
        .hero-visual { position: relative; min-height: 430px; display: grid; place-items: center; }
        .machine-card { width: min(100%, 480px); padding: 36px; background: #fff; border: 1px solid var(--rose-line); border-radius: 30px; box-shadow: 0 18px 48px rgba(122,21,66,.09); }
        .machine-card svg { width: 100%; height: auto; display: block; }
        .visual-note { position: absolute; padding: 12px 16px; display: inline-flex; gap: 9px; align-items: center; background: #fff; border: 1px solid var(--line); border-radius: 999px; box-shadow: 0 10px 28px rgba(17,24,39,.08); font-size: 14px; font-weight: 600; color: #404650; }
        .note-top { top: 34px; right: -2px; }
        .note-bottom { bottom: 40px; left: -12px; }
        .note-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { min-height: 102px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 36px; align-items: stretch; }
        .trust-item { padding: 24px 0; display: flex; align-items: flex-start; gap: 14px; }
        .trust-icon { width: 24px; height: 24px; flex: 0 0 24px; display: grid; place-items: center; margin-top: 2px; }
        .trust-icon .line-icon { width: 23px; height: 23px; stroke: var(--magenta); }
        .trust-copy { min-width: 0; display: flex; flex-direction: column; }
        .trust-item strong { font-size: 18px; font-weight: 600; color: var(--ink); }
        .trust-item span { margin-top: 3px; font-size: 16px; color: var(--muted); }
        .overview { padding: 96px 0; }
        .overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 88px; align-items: start; }
        .overview-grid .section-heading { position: sticky; top: 36px; margin-bottom: 0; }
        .overview-copy { max-width: 760px; }
        .overview-copy .body-large { margin-bottom: 22px; }
        .principle { margin-top: 34px; padding: 28px 30px; border-left: 3px solid var(--magenta); background: var(--blush); border-radius: 0 22px 22px 0; }
        .principle strong { display: block; font-size: 22px; line-height: 1.35; font-weight: 600; color: var(--ink); }
        .manuals { padding: 96px 0; background: var(--blush-soft); }
        .manual-list { display: grid; grid-template-columns: repeat(2, 1fr); column-gap: 48px; border-top: 1px solid #E8DDE2; }
        .manual-row { min-height: 142px; padding: 26px 0; display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 20px; align-items: start; border-bottom: 1px solid #E8DDE2; }
        .icon-wrap { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 14px; background: #fff; border: 1px solid #E2E4E8; }
        .manual-row .icon-wrap, .industry-row .icon-wrap, .why-row .icon-wrap { background: var(--blush); border-color: #EBCBD9; }
        .manual-row .line-icon, .industry-row .line-icon, .why-row .line-icon { stroke: var(--magenta-dark); }
        .line-icon { width: 23px; height: 23px; fill: none; stroke: #5E6570; stroke-width: 1.5; stroke-linecap: round; stroke-linejoin: round; }
        .manual-row h3 { font-size: 20px; margin: 0 0 7px; }
        .manual-row p { margin: 0; }
        .industries { padding: 96px 0; }
        .industry-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 56px; }
        .industry-row { padding: 30px 0; display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 20px; border-top: 1px solid var(--line); }
        .industry-row:nth-last-child(-n + 2) { border-bottom: 1px solid var(--line); }
        .industry-row h3 { font-size: 20px; margin-bottom: 8px; }
        .industry-row p { margin-bottom: 8px; }
        .ai-workflow { padding: 96px 0; background: linear-gradient(135deg, #17181C 0%, #21141A 58%, #2A1420 100%); }
        .ai-lead { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: start; margin-bottom: 56px; }
        .ai-lead .section-heading { margin: 0; }
        .ai-copy p { color: #D4D6DB; }
        .ai-callout { margin-top: 22px; padding: 20px 22px; border-top: 1px solid rgba(255,255,255,.14); border-bottom: 1px solid rgba(255,255,255,.14); color: #fff; font-size: 18px; font-weight: 600; }
        .workflow-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.15); }
        .workflow-step { position: relative; padding: 26px 18px 0 0; }
        .workflow-step + .workflow-step { padding-left: 18px; border-left: 1px solid rgba(255,255,255,.12); }
        .workflow-step:nth-child(5) { border-left: 0; padding-left: 0; }
        .workflow-step:nth-child(n+5) { margin-top: 34px; padding-top: 26px; border-top: 1px solid rgba(255,255,255,.12); }
        .workflow-number { margin-bottom: 14px; font-size: 13px; font-weight: 600; color: var(--pink-light); letter-spacing: .08em; }
        .workflow-step h3 { font-size: 18px; color: #fff; margin-bottom: 9px; letter-spacing: -.015em; }
        .workflow-step p { font-size: 16px; color: #BABDC4; margin: 0; }
        .terminology { padding: 96px 0; }
        .split-editorial { display: grid; grid-template-columns: .92fr 1.08fr; gap: 76px; align-items: start; }
        .split-editorial .section-heading { margin-bottom: 0; }
        .term-panel { padding: 32px; border: 1px solid var(--rose-line); border-radius: 28px; background: linear-gradient(180deg, #FFFFFF 0%, #FFF9FB 100%); }
        .term-panel-title { margin-bottom: 18px; font-size: 16px; font-weight: 600; color: var(--ink); }
        .term-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
        .term-chip { padding: 9px 12px; border: 1px solid #EBCFDA; border-radius: 12px; background: #FFF8FB; font-size: 16px; color: #4B515B; }
        .term-example { margin-top: 26px; padding-top: 24px; border-top: 1px solid var(--line); display: grid; grid-template-columns: 1fr auto 1fr; gap: 16px; align-items: center; }
        .term-box { padding: 16px; border-radius: 16px; background: var(--soft); font-size: 16px; color: #343A43; }
        .term-arrow { color: var(--magenta); font-weight: 600; }
        .continuous { padding: 96px 0; background: var(--blush); }
        .continuous-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 68px; align-items: center; }
        .release-track { padding: 34px; background: #fff; border: 1px solid #F0D9E4; border-radius: 28px; box-shadow: 0 14px 38px rgba(122,21,66,.06); }
        .track-row { display: grid; grid-template-columns: 110px 1fr; gap: 20px; align-items: center; padding: 16px 0; border-bottom: 1px solid #ECEEF1; }
        .track-row:last-child { border-bottom: 0; }
        .track-label { font-size: 14px; color: var(--magenta-dark); font-weight: 600; }
        .track-value { font-size: 16px; color: var(--ink); font-weight: 600; }
        .benefit-list { margin: 24px 0 0; padding: 0; list-style: none; }
        .benefit-list li { position: relative; padding: 10px 0 10px 26px; }
        .benefit-list li::before { content: ""; position: absolute; left: 0; top: 19px; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
        .compliance { padding: 96px 0; }
        .compliance-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 80px; }
        .compliance-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; border-top: 1px solid var(--line); }
        .compliance-item { padding: 18px 0; border-bottom: 1px solid var(--line); font-size: 16px; color: var(--text); }
        .regulatory-note { margin-top: 28px; padding: 24px 26px; border: 1px solid var(--rose-line); border-radius: 22px; background: #FFF9FB; }
        .regulatory-note strong { display: block; margin-bottom: 8px; font-size: 18px; font-weight: 600; color: var(--ink); }
        .regulatory-note p { margin-bottom: 0; }
        .warning-panel { margin-top: 24px; padding: 28px 30px; border-left: 3px solid var(--magenta); border-radius: 0 24px 24px 0; background: var(--blush); }
        .warning-panel h3 { font-size: 20px; }
        .warning-panel p:last-child { margin-bottom: 0; }
        .disclaimer { margin-top: 20px; color: var(--muted); font-size: 16px; }
        .ifu-box { padding: 34px; border: 1px solid var(--rose-line); border-radius: 28px; background: linear-gradient(180deg, #FFFFFF 0%, #FFF9FB 100%); }
        .ifu-box h3 { font-size: 24px; }
        .ifu-list { padding-left: 20px; columns: 2; column-gap: 34px; }
        .ifu-list li { break-inside: avoid; margin: 0 0 8px; }
        .structured { padding: 96px 0; background: var(--blush-soft); }
        .structured-grid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 72px; align-items: center; }
        .structure-visual { padding: 32px; border-radius: 28px; background: #fff; border: 1px solid var(--rose-line); }
        .node { padding: 17px 18px; border: 1px solid #E2E4E8; border-radius: 15px; font-size: 16px; font-weight: 600; color: #333944; }
        .node.primary { border-color: #E7B8CD; background: var(--blush); color: #75143F; }
        .node-children { margin: 14px 0 0 24px; padding-left: 24px; display: grid; gap: 10px; border-left: 1px solid #D8DBE1; }
        .structure-links { margin-top: 26px; display: flex; gap: 18px; flex-wrap: wrap; }
        .digital { padding: 96px 0; }
        .digital-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
        .channel-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .channel { min-height: 122px; padding: 22px 18px; border: 1px solid #E8DCE2; border-radius: 20px; background: linear-gradient(180deg, #FFFFFF 0%, #FFF8FB 100%); display: flex; flex-direction: column; justify-content: space-between; }
        .channel .line-icon { stroke: var(--magenta); }
        .channel span { font-size: 16px; font-weight: 600; color: var(--ink); }
        .ui-sync { margin-top: 28px; padding-top: 26px; border-top: 1px solid var(--line); }
        .ui-sync h3 { font-size: 20px; }
        .publishing { padding: 96px 0; background: linear-gradient(135deg, #17181C 0%, #20151A 55%, #2A1420 100%); }
        .publishing-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 72px; align-items: start; }
        .publishing-copy p { color: #D3D5DA; }
        .publishing-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid rgba(255,255,255,.16); }
        .publishing-item { padding: 15px 0; color: #F1F2F4; font-size: 16px; border-bottom: 1px solid rgba(255,255,255,.12); }
        .publishing-item:nth-child(even) { padding-left: 24px; border-left: 1px solid rgba(255,255,255,.12); }
        .graphics-note { margin-top: 26px; padding: 24px 0 0; border-top: 1px solid rgba(255,255,255,.16); }
        .graphics-note h3 { color: #fff; font-size: 20px; }
        .graphics-note p { margin-bottom: 0; color: #C7CAD0; }
        .writing { padding: 96px 0; }
        .writing-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; }
        .writing-points { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--line); }
        .writing-points li { position: relative; padding: 15px 0 15px 24px; border-bottom: 1px solid var(--line); }
        .writing-points li::before { content: ""; position: absolute; left: 0; top: 24px; width: 9px; height: 2px; background: var(--magenta); }
        .ste-panel { padding: 32px; border-radius: 28px; background: var(--blush); }
        .ste-panel h3 { font-size: 24px; }
        .ste-panel p:last-child { margin-bottom: 0; }
        .formats { padding: 96px 0; background: #F8F8F9; }
        .format-grid { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid #DDE0E5; border-bottom: 1px solid #DDE0E5; }
        .format-item { padding: 26px 20px; min-width: 0; }
        .format-item + .format-item { border-left: 1px solid #DDE0E5; }
        .format-item h3 { font-size: 18px; margin-bottom: 8px; color: var(--burgundy); }
        .format-item p { margin-bottom: 0; }
        .format-note { margin-top: 28px; text-align: center; }
        .languages { padding: 96px 0; }
        .language-grid { display: grid; grid-template-columns: 1.1fr .9fr; gap: 80px; align-items: start; }
        .language-regions { display: grid; grid-template-columns: 1fr 1fr; gap: 0 34px; border-top: 1px solid var(--line); }
        .language-region { padding: 22px 0; border-bottom: 1px solid var(--line); }
        .language-region h3 { font-size: 18px; margin-bottom: 7px; }
        .language-region p { margin: 0; }
        .locale-panel { padding: 30px; border-radius: 28px; background: var(--blush); }
        .locale-panel h3 { font-size: 22px; }
        .locale-panel ul { padding-left: 20px; margin-bottom: 18px; }
        .why { padding: 96px 0; background: #fff; }
        .why-rows { border-top: 1px solid var(--line); }
        .why-row { display: grid; grid-template-columns: 56px 280px minmax(0,1fr); gap: 24px; padding: 26px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .why-row h3 { font-size: 20px; margin: 8px 0 0; }
        .why-row p { margin: 5px 0 0; max-width: 720px; }
        .related { padding: 96px 0; background: var(--blush-soft); }
        .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .related-col h3 { font-size: 20px; margin-bottom: 16px; }
        .related-links { display: grid; border-top: 1px solid #E7DCE1; }
        .related-link { min-height: 58px; display: flex; align-items: center; justify-content: space-between; gap: 18px; color: var(--ink); text-decoration: none; border-bottom: 1px solid #E7DCE1; font-size: 16px; font-weight: 600; }
        .related-link:visited { color: var(--ink); }
        .related-link:hover { color: var(--magenta); }
        .related-link svg { width: 18px; height: 18px; }
        .faq { padding: 96px 0; }
        .faq-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 76px; align-items: start; }
        .faq-layout .section-heading { position: sticky; top: 36px; margin-bottom: 0; }
        .faq-panel { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; min-height: 72px; padding: 21px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; background: none; border: 0; color: var(--ink); text-align: left; font-family: inherit; font-size: 18px; line-height: 1.45; font-weight: 600; cursor: pointer; }
        .faq-toggle { width: 30px; height: 30px; flex: 0 0 auto; display: grid; place-items: center; color: var(--magenta); font-size: 24px; font-weight: 400; }
        .faq-answer { display: none; padding: 0 50px 22px 0; }
        .faq-answer.open { display: block; }
        .faq-answer p { max-width: 820px; margin-bottom: 0; }
        .final-cta { padding: 88px 0; background: var(--burgundy); }
        .final-cta-grid { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
        .final-cta h2 { max-width: 760px; color: #fff; margin-bottom: 16px; }
        .final-cta p { max-width: 760px; margin-bottom: 0; color: #F1DDE6; font-size: 18px; }
        .final-cta .cta-row { justify-content: flex-end; }
        .final-cta .cta-primary { background: #fff; color: var(--burgundy) !important; }
        .final-cta .cta-primary *, .final-cta .cta-primary:visited * { color: var(--burgundy) !important; }
        .final-cta .cta-primary:hover { background: #F9F4F6; }
        .final-cta .cta-secondary { background: transparent; color: #fff; border-color: rgba(255,255,255,.35); }
        .final-cta .cta-secondary:visited { color: #fff; }
        .final-cta .cta-secondary:hover { background: rgba(255,255,255,.07); border-color: rgba(255,255,255,.55); }

        @media (max-width: 1279px) {
          .container { padding-left: 40px; padding-right: 40px; }
          .hero-grid { gap: 52px; }
          .format-grid { grid-template-columns: repeat(3, 1fr); }
          .format-item:nth-child(4) { border-left: 0; border-top: 1px solid #DDE0E5; }
          .format-item:nth-child(5) { border-top: 1px solid #DDE0E5; }
        }

        @media (max-width: 900px) {
          .container { padding-left: 24px; padding-right: 24px; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0; }
          .hero-grid, .overview-grid, .ai-lead, .split-editorial, .continuous-grid, .compliance-grid, .structured-grid, .digital-grid, .publishing-grid, .writing-grid, .language-grid, .faq-layout, .final-cta-grid { grid-template-columns: 1fr; }
          .hero-grid { gap: 56px; }
          .hero-copy { max-width: 760px; }
          .hero-visual { min-height: 390px; }
          .note-top { right: 2%; }
          .note-bottom { left: 2%; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .overview, .manuals, .industries, .ai-workflow, .terminology, .continuous, .compliance, .structured, .digital, .publishing, .writing, .formats, .languages, .why, .related, .faq { padding: 80px 0; }
          .overview-grid .section-heading, .faq-layout .section-heading { position: static; }
          .overview-grid .section-heading, .ai-lead .section-heading, .split-editorial .section-heading, .continuous .section-heading, .compliance .section-heading, .structured .section-heading, .digital .section-heading, .publishing .section-heading, .writing .section-heading, .languages .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .faq-layout .section-heading { text-align: left; margin-left: 0; margin-right: 0; }
          .overview-grid .section-heading .section-intro, .ai-lead .section-heading .section-intro, .split-editorial .section-heading .section-intro, .continuous .section-heading .section-intro, .compliance .section-heading .section-intro, .structured .section-heading .section-intro, .digital .section-heading .section-intro, .publishing .section-heading .section-intro, .writing .section-heading .section-intro, .languages .section-heading .section-intro { margin-left: auto; margin-right: auto; }
          .faq-layout .section-heading .section-intro { margin-left: 0; margin-right: 0; }
          .overview-grid, .split-editorial, .continuous-grid, .compliance-grid, .structured-grid, .digital-grid, .publishing-grid, .writing-grid, .language-grid, .faq-layout { gap: 48px; }
          .manual-list { grid-template-columns: 1fr; column-gap: 0; }
          .industry-grid { grid-template-columns: 1fr; }
          .industry-row:nth-last-child(-n + 2) { border-bottom: 0; }
          .industry-row:last-child { border-bottom: 1px solid var(--line); }
          .workflow-grid { grid-template-columns: 1fr; border-top: 0; }
          .workflow-step, .workflow-step + .workflow-step, .workflow-step:nth-child(n+5) { padding: 22px 0; margin: 0; display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 14px 18px; border-left: 0; border-top: 1px solid rgba(255,255,255,.12); }
          .workflow-number { grid-row: span 2; margin: 2px 0 0; }
          .workflow-step h3 { margin: 0; }
          .workflow-step p { grid-column: 2; }
          .channel-grid { grid-template-columns: 1fr 1fr; }
          .format-grid { grid-template-columns: 1fr 1fr; }
          .format-item:nth-child(3), .format-item:nth-child(5) { border-left: 0; }
          .format-item:nth-child(n+3) { border-top: 1px solid #DDE0E5; }
          .why-row { grid-template-columns: 50px minmax(0,1fr); gap: 12px 20px; }
          .why-row h3 { margin-top: 6px; }
          .why-row p { grid-column: 2; margin-top: -4px; }
          .related-grid { grid-template-columns: 1fr; gap: 40px; }
          .final-cta { padding: 72px 0; }
          .final-cta-grid { gap: 30px; }
          .final-cta .cta-row { justify-content: flex-start; }
        }

        @media (max-width: 640px) {
          .container { padding-left: 20px; padding-right: 20px; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large, .section-intro, .final-cta p { font-size: 18px; }
          .hero { padding: 72px 0; }
          .hero-copy { text-align: center; }
          .hero-copy .body-large { margin-left: auto; margin-right: auto; }
          .hero .cta-row { justify-content: center; }
          .hero .cta { width: 100%; }
          .hero-visual { min-height: 330px; }
          .machine-card { padding: 22px; border-radius: 24px; }
          .visual-note { position: static; margin-top: 10px; box-shadow: none; }
          .hero-visual { display: flex; flex-direction: column; }
          .trust-grid { grid-template-columns: 1fr; }
          .trust-grid { gap: 0; }
          .trust-item { padding: 18px 0; gap: 13px; align-items: flex-start; }
          .trust-icon { width: 24px; height: 24px; flex-basis: 24px; margin-top: 2px; }
          .overview, .manuals, .industries, .ai-workflow, .terminology, .continuous, .compliance, .structured, .digital, .publishing, .writing, .formats, .languages, .why, .related, .faq { padding: 68px 0; }
          .section-heading { margin-bottom: 36px; }
          .manual-list { grid-template-columns: 1fr; }
          .manual-row { padding: 24px 0; }
          .manual-row h3 { font-size: 20px; }
          .industry-row { grid-template-columns: 44px minmax(0,1fr); padding: 24px 0; }
          .ai-lead { gap: 30px; margin-bottom: 36px; }
          .term-panel, .release-track, .ifu-box, .structure-visual, .ste-panel, .locale-panel { padding: 24px; border-radius: 22px; }
          .term-example { grid-template-columns: 1fr; }
          .term-arrow { transform: rotate(90deg); text-align: center; }
          .track-row { grid-template-columns: 1fr; gap: 3px; }
          .compliance-list, .publishing-list, .language-regions { grid-template-columns: 1fr; }
          .publishing-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .ifu-list { columns: 1; }
          .channel-grid { grid-template-columns: 1fr 1fr; }
          .writing-grid { gap: 36px; }
          .format-grid { grid-template-columns: 1fr; }
          .format-item, .format-item + .format-item, .format-item:nth-child(3), .format-item:nth-child(4), .format-item:nth-child(5) { border-left: 0; border-top: 1px solid #DDE0E5; }
          .format-item:first-child { border-top: 0; }
          .why-row { grid-template-columns: 44px minmax(0,1fr); gap: 14px 18px; }
          .why-row h3 { margin-top: 4px; }
          .why-row p { grid-column: 2; margin-top: -6px; }
          .related-grid { grid-template-columns: 1fr; gap: 38px; }
          .faq-question { font-size: 17px; min-height: 68px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 68px 0; }
          .final-cta-grid { text-align: center; }
          .final-cta h2, .final-cta p { margin-left: auto; margin-right: auto; }
          .final-cta .cta-row { justify-content: center; }
          .final-cta .cta { width: 100%; }
        }

        @media (max-width: 360px) {
          .manual-row { grid-template-columns: 40px minmax(0,1fr); gap: 14px; }
          .icon-wrap { width: 40px; height: 40px; }
          .channel-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>User Manual Translation Services</h1>
            <p className="body-large">Translate technical manuals, product instructions, operating guides, and digital documentation accurately across languages, markets, and product generations. Stepes combines technical linguists, AI-powered translation technology, terminology management, translation memory, and multilingual publishing to help global companies deliver clear and consistent user documentation worldwide.</p>
            <div className="cta-row">
              <CTA href="https://www.stepes.com/contact-us/">Get a Quote</CTA>
              <CTA href="https://www.stepes.com/contact-us/" secondary>Talk to an Expert</CTA>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="trust-strip" aria-label="User manual translation capabilities">
        <div className="container trust-grid">
          <div className="trust-item">
            <div className="trust-icon"><LineIcon type="globe" /></div>
            <div className="trust-copy"><strong>100+ Languages</strong><span>Global coverage for major product markets</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><LineIcon type="userbook" /></div>
            <div className="trust-copy"><strong>Technical Linguists</strong><span>Industry-specific language expertise</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><LineIcon type="spark" /></div>
            <div className="trust-copy"><strong>AI + Human Workflows</strong><span>Automation matched to content risk</span></div>
          </div>
          <div className="trust-item">
            <div className="trust-icon"><LineIcon type="layers" /></div>
            <div className="trust-copy"><strong>Multilingual Publishing</strong><span>From source files to production-ready manuals</span></div>
          </div>
        </div>
      </section>

      <section className="overview">
        <div className="container overview-grid">
          <SectionHeading eyebrow="GLOBAL PRODUCT DOCUMENTATION" title="Translate User Manuals That Work as Well as the Original" centered={false} />
          <div className="overview-copy">
            <p className="body-large">A user manual must do more than read naturally in another language. It must continue to explain the product correctly, guide users through procedures accurately, communicate warnings clearly, and remain consistent with the equipment, software, diagrams, and terminology customers encounter in the real world.</p>
            <p>Stepes provides professional user manual translation services for manufacturers, technology companies, medical device organizations, automotive companies, software developers, electronics companies, and other global businesses. We translate and localize technical documentation throughout the product lifecycle—from first market launch to ongoing product revisions and multilingual updates.</p>
            <p>Our integrated approach combines professional technical translation with AI-assisted workflows, translation memory, terminology management, automated quality assurance, and multilingual publishing. Whether you are translating a 20-page product manual or managing thousands of pages across multiple product lines, the goal is the same: documentation that remains accurate, usable, and current in every language.</p>
            <div className="principle"><strong>A translated manual must function as well as the source manual.</strong></div>
            <p>For broader engineering content such as SOPs, work instructions, technical specifications, safety documentation, and engineering files, explore our Technical Translation Services.</p>
            <TextLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="manuals">
        <div className="container">
          <SectionHeading title="User Manuals for Every Product and Use Case" intro="From quick-start instructions to complex maintenance documentation, Stepes translates the full range of manuals and support content used throughout the product lifecycle." />
          <div className="manual-list">
            {manualTypes.map((item) => (
              <div className="manual-row" key={item.title}>
                <div className="icon-wrap"><LineIcon type={item.icon} /></div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="industries">
        <div className="container">
          <SectionHeading title="Specialized Manual Translation Across Technical Industries" intro="User manuals must reflect the terminology, workflows, risks, and user expectations of the products they describe. Stepes supports technical documentation across a wide range of industries and product categories." />
          <div className="industry-grid">
            {industries.map((item) => (
              <div className="industry-row" key={item.title}>
                <div className="icon-wrap"><LineIcon type={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.link ? <TextLink href={item.link}>{item.linkLabel}</TextLink> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ai-workflow">
        <div className="container">
          <div className="ai-lead">
            <SectionHeading eyebrow="AI + HUMAN EXPERTISE" title="AI Translation Built for Technical Documentation" dark centered={false} />
            <div className="ai-copy">
              <p className="body-large">AI is transforming how global companies translate and maintain technical content. But professional user manual translation requires more than sending text through a general-purpose AI system.</p>
              <p>Stepes combines AI translation with technical linguists, terminology control, translation memory, automated quality assurance, and risk-appropriate human review. AI can accelerate suitable content and improve reuse, while human experts validate safety warnings, regulated content, complex procedures, ambiguous source language, and technically sensitive instructions.</p>
              <div className="ai-callout">AI provides speed and scale. Technical linguists provide judgment, validation, and subject-matter accuracy.</div>
              <TextLink dark href="https://www.stepes.com/ai-machine-learning-translation-services/">AI & Machine Learning Translation Services</TextLink>
            </div>
          </div>
          <div className="workflow-grid" aria-label="User manual translation workflow">
            {workflow.map(([title, text], i) => (
              <div className="workflow-step" key={title}>
                <div className="workflow-number">{String(i + 1).padStart(2, "0")}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="terminology">
        <div className="container split-editorial">
          <SectionHeading title="Consistent Product Terminology Across Every Language" intro="Product terminology often appears across manuals, interfaces, packaging, labels, training, support content, parts catalogs, and service documentation. Consistency across all of these touchpoints is essential." centered={false} />
          <div className="term-panel">
            <div className="term-panel-title">One approved product vocabulary</div>
            <div className="term-cloud">
              {["Component names", "Controls", "Commands", "Parts", "Warnings", "Procedures", "UI strings", "Error messages", "Product families", "Consumables"].map(t => <span className="term-chip" key={t}>{t}</span>)}
            </div>
            <div className="term-example">
              <div className="term-box"><strong>Software UI</strong><br/>Approved localized control name</div>
              <div className="term-arrow">→</div>
              <div className="term-box"><strong>User Manual</strong><br/>The same term used in instructions</div>
            </div>
            <p style={{marginTop: 24}}>Stepes uses terminology databases, customer glossaries, translation memory, linguistic validation, and automated terminology QA to help maintain consistent product language throughout the documentation ecosystem.</p>
            <div className="structure-links">
              <TextLink href="https://www.stepes.com/translation-memory/">Translation Memory</TextLink>
              <TextLink href="https://www.stepes.com/terminology-management/">Terminology Management</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="continuous">
        <div className="container continuous-grid">
          <div>
            <SectionHeading eyebrow="CONTINUOUS LOCALIZATION" title="Translate What Changed—Not the Entire Manual Again" centered={false} />
            <p className="body-large">User manuals rarely remain static. Products gain new features, hardware changes, software is updated, warnings are revised, screenshots change, new models are introduced, and additional countries require localized documentation.</p>
            <p>Stepes uses translation memory and content-reuse technology to preserve approved translations from previous versions and identify new or modified content. Localization resources can then focus on the portions that actually changed.</p>
            <ul className="benefit-list">
              <li>Reduce unnecessary retranslation</li>
              <li>Shorten update cycles</li>
              <li>Maintain terminology consistency</li>
              <li>Improve quality across revisions</li>
              <li>Lower lifecycle localization costs</li>
              <li>Release multilingual documentation faster</li>
            </ul>
          </div>
          <div className="release-track" aria-label="Continuous manual localization example">
            <div className="track-row"><div className="track-label">Version 1.0</div><div className="track-value">Initial multilingual manual</div></div>
            <div className="track-row"><div className="track-label">Version 1.5</div><div className="track-value">Reuse approved content + translate updates</div></div>
            <div className="track-row"><div className="track-label">Version 2.0</div><div className="track-value">New features, warnings, screenshots, and languages</div></div>
            <div className="track-row"><div className="track-label">Ongoing</div><div className="track-value">Source Update → Change Detection → Translation → Review → Publishing → Reuse</div></div>
            <div style={{marginTop: 22}}><TextLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</TextLink></div>
          </div>
        </div>
      </section>

      <section className="compliance">
        <div className="container">
          <SectionHeading title="User Manual Translation for Product Safety and Global Compliance" intro="Technical instructions can directly affect how safely and correctly a product is installed, operated, maintained, or serviced. Compliance-sensitive content requires precise language, consistent terminology, and an appropriate review workflow." />
          <div className="compliance-grid">
            <div>
              <div className="compliance-list">
                {["Safety instructions", "Hazard statements", "Warnings and cautions", "Intended-use information", "Operating restrictions", "Installation requirements", "Maintenance procedures", "Emergency instructions", "Disposal information", "Instructions for Use"].map(item => <div className="compliance-item" key={item}>{item}</div>)}
              </div>
              <div className="regulatory-note">
                <strong>European Product Documentation Requirements</strong>
                <p>For applicable products sold in the European Union, the General Product Safety Regulation requires clear instructions and safety information in a language easily understood by consumers where such information is required. The EU Machinery Regulation applies from January 20, 2027 and recognizes digital instructions under defined conditions, making consistent multilingual content important across both print and digital delivery.</p>
              </div>
              <div className="warning-panel">
                <h3>Translating Warnings Without Changing Their Meaning</h3>
                <p>A safety warning must communicate the same risk and required action as the source. Our workflows pay particular attention to signal words, hazard terminology, severity, procedural context, measurements, symbols, and relationships between warnings and accompanying illustrations.</p>
                <p>For regulated or safety-critical documentation, customers can select enhanced review workflows appropriate to their quality and compliance requirements.</p>
              </div>
              <p className="disclaimer">Stepes supports multilingual documentation needs; manufacturers remain responsible for determining the regulatory requirements applicable to their products and target markets.</p>
            </div>
            <div className="ifu-box">
              <h3>Instructions for Use Translation for Medical Devices</h3>
              <p>Medical device IFUs require exceptional attention to technical terminology, consistency, usability, and change control. Stepes supports multilingual documentation for medical devices, diagnostic systems, laboratory equipment, healthcare technologies, and software-enabled products.</p>
              <ul className="ifu-list">
                {["Device operation", "Intended use", "Setup and installation", "Safety information", "Warnings and precautions", "Cleaning and maintenance", "Software instructions", "Troubleshooting", "Storage and handling", "Supporting product information"].map(x => <li key={x}>{x}</li>)}
              </ul>
              <p>Terminology can be synchronized across IFUs, labels, software interfaces, training materials, and other product documentation. Translation memory and version management help keep multilingual IFUs consistent as products evolve.</p>
              <p>For EU markets, MDR and IVDR language requirements for accompanying information and IFUs can vary by Member State, so language planning should be aligned with the countries where each device will be made available.</p>
              <TextLink href="https://www.stepes.com/medical-device-translation-services/">Medical Device Translation Services</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="structured">
        <div className="container structured-grid">
          <div>
            <SectionHeading title="Structured Content, DITA, XML & CCMS Translation" intro="Modern technical communication increasingly uses modular content that can be reused across products, models, outputs, and languages. Structured localization helps teams translate components instead of repeatedly translating entire documents." centered={false} />
            <p>Stepes supports XML, DITA, topic-based authoring, reusable components, conditional content, variables, metadata, cross-references, and automated publishing workflows.</p>
            <p><strong>DITA translation:</strong> reusable concepts, tasks, references, and topics can be localized while protecting tags, variables, references, and structural elements that should not be translated.</p>
            <p><strong>CCMS and authoring workflows:</strong> Stepes can work with content from DITA/XML environments, Adobe FrameMaker, MadCap Flare, and other enterprise documentation platforms. The focus is to preserve structure, maximize reuse, and return localized content that fits your publishing workflow.</p>
            <div className="structure-links">
              <TextLink href="https://www.stepes.com/manufacturing-translation-services/dita-content-translation/">DITA Translation Services</TextLink>
              <TextLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</TextLink>
            </div>
          </div>
          <div className="structure-visual" aria-label="Structured content reuse illustration">
            <div className="node primary">Product Documentation Source</div>
            <div className="node-children">
              <div className="node">Reusable topic: Installation</div>
              <div className="node">Reusable topic: Safety</div>
              <div className="node">Reusable topic: Maintenance</div>
              <div className="node primary">Localized once → reused across products and outputs</div>
              <div className="node">PDF · HTML · Online Help · eIFU</div>
            </div>
          </div>
        </div>
      </section>

      <section className="digital">
        <div className="container digital-grid">
          <div>
            <SectionHeading title="From Printed Manuals to Digital Product Documentation" intro="A single source may become a printed manual, downloadable PDF, online help system, searchable support portal, QR-accessed instructions, electronic IFU, embedded assistance, or mobile-accessible documentation." centered={false} />
            <p>Stepes localizes the underlying content—not simply the final visual document. For structured or digital-first documentation, this supports consistent multilingual publishing across channels without unnecessarily duplicating translation work.</p>
            <div className="ui-sync">
              <h3>Keep Manuals Synchronized With Localized Software</h3>
              <p>Technical manuals frequently tell users to select menus, press buttons, open settings, enter commands, or respond to on-screen messages. Stepes can coordinate software localization and documentation translation so UI labels, screenshots, system messages, and instructions remain aligned.</p>
              <TextLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</TextLink>
            </div>
          </div>
          <div className="channel-grid">
            {digitalChannels.map(([icon, label]) => <div className="channel" key={label}><LineIcon type={icon}/><span>{label}</span></div>)}
          </div>
        </div>
      </section>

      <section className="publishing">
        <div className="container publishing-grid">
          <div className="publishing-copy">
            <SectionHeading title="Production-Ready Manuals in Every Language" dark centered={false} />
            <p className="body-large">Translation is only one part of delivering a multilingual user manual. Different languages expand, contract, wrap, and paginate differently. Right-to-left languages require substantial layout adaptation, and Asian languages introduce different typography and line-breaking requirements.</p>
            <p>Stepes provides multilingual desktop publishing and document production so localized manuals remain as usable and professional as the source—not simply so translated text fits on the page.</p>
            <div className="graphics-note">
              <h3>Translate the Information Inside Your Graphics</h3>
              <p>We localize technical diagrams, schematics, process illustrations, exploded views, product callouts, charts, flow diagrams, interface screenshots, and annotated images. When editable source artwork is available, translated labels can be integrated directly into the graphic.</p>
            </div>
          </div>
          <div className="publishing-list">
            {publishingItems.map(x => <div className="publishing-item" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="writing">
        <div className="container">
          <SectionHeading eyebrow="SOURCE CONTENT READINESS" title="Improve Source Manuals Before Translation" intro="Well-written source documentation improves every language that follows. Concise, structured, terminology-consistent content is easier for users to understand and more efficient to translate." />
          <div className="writing-grid">
            <ul className="writing-points">
              {["Use consistent terminology", "Write clear procedural steps", "Avoid unnecessary ambiguity", "Limit idioms and culturally dependent expressions", "Standardize warnings", "Reuse approved content", "Keep terminology consistent across products", "Separate individual actions clearly", "Maintain editable text where practical", "Design graphics with localization in mind"].map(x => <li key={x}>{x}</li>)}
            </ul>
            <div className="ste-panel">
              <Eyebrow>CONTROLLED LANGUAGE</Eyebrow>
              <h3>Simplified Technical English</h3>
              <p>Organizations with large international documentation programs may benefit from controlled-language principles such as ASD-STE100 Simplified Technical English. Controlled language can make technical content more concise, consistent, and internationally understandable.</p>
              <p>These practices can improve clarity, terminology consistency, content reuse, machine readability, and translation performance—particularly for documentation maintained across many products and languages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="formats">
        <div className="container">
          <SectionHeading title="Translate Your Existing Authoring and Publishing Files" intro="Whenever possible, Stepes works directly with editable source files so translation remains integrated with your existing documentation and publishing workflow." />
          <div className="format-grid">
            {fileGroups.map(([title, text]) => <div className="format-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <p className="format-note">If editable source files are available, providing them instead of flattened PDFs can improve translation efficiency, reduce manual production work, and simplify future updates.</p>
        </div>
      </section>

      <section className="languages">
        <div className="container language-grid">
          <div>
            <SectionHeading title="User Manual Translation in 100+ Languages" intro="Stepes provides professional technical manual translation services for markets around the world, with locale-sensitive workflows for terminology, measurement conventions, typography, writing direction, and market-specific language requirements." centered={false} />
            <div className="language-regions">
              <div className="language-region"><h3>European Languages</h3><p>French, German, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Romanian, Swedish, Danish, Norwegian, Finnish, and more.</p></div>
              <div className="language-region"><h3>Asian Languages</h3><p>Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and other Asian languages.</p></div>
              <div className="language-region"><h3>Middle Eastern Languages</h3><p>Arabic, Hebrew, Turkish, and additional regional languages.</p></div>
              <div className="language-region"><h3>Languages for the Americas</h3><p>Latin American Spanish, Brazilian Portuguese, Canadian French, and other required locales.</p></div>
            </div>
          </div>
          <div className="locale-panel">
            <LineIcon type="language" />
            <h3 style={{marginTop: 18}}>Localization Goes Beyond Language Names</h3>
            <p>Technical documentation often requires market-level decisions about terminology, units, typography, writing direction, and regional conventions.</p>
            <ul>
              <li>Regional terminology and locale variants</li>
              <li>Measurement and unit conventions</li>
              <li>Right-to-left layout requirements</li>
              <li>Asian typography and line breaking</li>
            </ul>
            <TextLink href="https://www.stepes.com/translation-languages/">Translation Languages</TextLink>
          </div>
        </div>
      </section>

      <section className="why">
        <div className="container">
          <SectionHeading eyebrow="WHY STEPES" title="A Better Way to Translate and Maintain User Manuals" intro="Modern user manual localization requires more than traditional document translation. Stepes brings technical expertise, language technology, reuse, publishing, and centralized workflow management together." />
          <div className="why-rows">
            {[
              ["gear", "Technical Subject-Matter Expertise", "Professional linguists experienced with complex products, technical fields, and documentation types."],
              ["spark", "AI-Powered Translation Technology", "Accelerate suitable content and scale multilingual documentation while retaining expert review where technical judgment matters."],
              ["layers", "Translation Memory & Terminology", "Preserve approved language and terminology for reuse across manuals, product versions, and related content."],
              ["recycle", "Continuous Localization", "Support ongoing releases so multilingual manuals keep pace with product development instead of becoming isolated one-time projects."],
              ["doc", "Multilingual Publishing", "Deliver production-ready manuals and digital documentation rather than leaving customers with unformatted translated text."],
              ["globe", "Enterprise Scalability", "Support large product portfolios, extensive documentation, many languages, and simultaneous global releases."],
              ["screen", "Centralized Translation Management", "Manage multilingual projects, linguistic assets, workflows, and reporting through a unified localization environment."],
            ].map(([icon,title,text]) => (
              <div className="why-row" key={title}>
                <div className="icon-wrap"><LineIcon type={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div style={{display:"flex", gap:22, flexWrap:"wrap", marginTop:24}}>
            <TextLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</TextLink>
            <TextLink href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting & Analytics</TextLink>
          </div>
        </div>
      </section>

      <section className="related">
        <div className="container">
          <SectionHeading title="Build a Connected Global Product Content Program" intro="User manuals are only one part of the product content customers encounter. Connecting documentation, software, labels, training, and support content helps keep terminology and customer experiences consistent worldwide." />
          <div className="related-grid">
            <div className="related-col">
              <h3>Related Translation Services</h3>
              <div className="related-links">
                {[
                  ["Technical Translation Services", "https://www.stepes.com/technical-translation-services/"],
                  ["Manufacturing Translation Services", "https://www.stepes.com/manufacturing-translation-services/"],
                  ["Product Manual Translation for Manufacturing", "https://www.stepes.com/manufacturing-translation-services/product-manual-translation/"],
                  ["Technical Manual Translation for Manufacturing", "https://www.stepes.com/manufacturing-translation-services/technical-manuals/"],
                  ["Medical Device Translation Services", "https://www.stepes.com/medical-device-translation-services/"],
                  ["Automotive Translation Services", "https://www.stepes.com/automotive-translation-services/"],
                  ["Software Documentation Translation Services", "https://www.stepes.com/software-documentation-translation-services/"],
                  ["Software Localization Services", "https://www.stepes.com/software-localization-services/"],
                ].map(([label,href]) => <a className="related-link" href={href} key={label}><span>{label}</span><ArrowIcon/></a>)}
              </div>
            </div>
            <div className="related-col">
              <h3>User Manual Translation Resources</h3>
              <div className="related-links">
                {[
                  ["How to Prepare a User Manual for Translation", "https://www.stepes.com/resources/translation-guides/how-to-prepare-a-user-manual-for-translation/"],
                  ["Technical Manual Translation Guide", "https://www.stepes.com/resources/translation-guides/technical-manual-translation-guide/"],
                  ["AI + Human Translation Workflows", "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"],
                  ["Medical Device IFU Translation", "https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation/"],
                  ["DITA Translation and Localization Guide", "https://www.stepes.com/resources/localization-guides/dita-translation-localization-guide/"],
                  ["Translation Cost Guide", "https://www.stepes.com/resources/translation-cost-guide/"],
                ].map(([label,href]) => <a className="related-link" href={href} key={label}><span>{label}</span><ArrowIcon/></a>)}
              </div>
              <div style={{marginTop: 18}}><TextLink href="https://www.stepes.com/resources/translation-guides/">Explore Translation Guides</TextLink></div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq">
        <div className="container faq-layout">
          <SectionHeading title="User Manual Translation FAQs" centered={false} />
          <div className="faq-panel">
            {faqs.map(([q,a], i) => <AccordionItem key={q} q={q} a={a} idx={i} open={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-grid">
          <div>
            <h2>Translate Your User Manuals for Every Market</h2>
            <p>Your customers rely on product documentation to install, operate, maintain, troubleshoot, and safely use your products. Stepes helps global companies translate, localize, publish, and continuously maintain accurate multilingual manuals across products, languages, markets, and product generations.</p>
          </div>
          <div className="cta-row">
            <CTA href="https://www.stepes.com/contact-us/">Get a Translation Quote</CTA>
            <CTA href="https://www.stepes.com/contact-us/" secondary>Talk to Our Technical Translation Team</CTA>
          </div>
        </div>
      </section>
    </main>
  );
}
