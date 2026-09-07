import React from "react";

const ROOT = "sesen-ifu-page";

const Icon = ({ type, size = 22 }) => {
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

  const paths = {
    device: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2.5" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </>
    ),
    diagnostic: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="M7 13h2l2-4 3 7 2-3h1" />
      </>
    ),
    surgical: (
      <>
        <path d="M5 19 17.5 6.5a2.1 2.1 0 0 1 3 3L8 22" />
        <path d="m4 18 2 2M13 7l4 4" />
      </>
    ),
    implant: (
      <>
        <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
        <path d="M8 12h2l1-2 2 4 1-2h2" />
      </>
    ),
    software: (
      <>
        <rect x="3" y="4" width="18" height="14" rx="2.5" />
        <path d="M8 21h8M12 18v3M7 9h4M7 13h7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.5-2.7 8.1-7 10-4.3-1.9-7-5.5-7-10V6l7-3Z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    review: (
      <>
        <path d="M7 3h8l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M15 3v5h5M9 12l2 2 4-4" />
      </>
    ),
    terminology: (
      <>
        <path d="M4 6h8M4 10h6M4 14h8M4 18h5" />
        <path d="M16 7v10M13 10h6" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M8 4v16M12 8h6M12 12h6M12 16h4" />
      </>
    ),
    version: (
      <>
        <path d="M7 7h10v10H7z" />
        <path d="M4 10V4h6M20 14v6h-6" />
        <path d="m4 4 4 4M20 20l-4-4" />
      </>
    ),
    qa: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m16.5 16.5 4 4M8.5 11l1.7 1.8 3.7-4" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v5h5M9 12h6M9 16h5" />
      </>
    ),
    ai: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M10 10h.01M14 10h.01M10 14c1.2.8 2.8.8 4 0" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{paths[type] || paths.check}</svg>;
};

const SectionHeading = ({ eyebrow, title, intro, align = "center", technical = false }) => (
  <div className={`section-heading section-heading--${align} ${technical ? "section-heading--technical" : ""}`}>
    {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
    <h2>{title}</h2>
    {intro ? <p>{intro}</p> : null}
  </div>
);

const EditorialLink = ({ href, children }) => (
  <a className="editorial-link" href={href}>
    <span>{children}</span>
    <Icon type="arrow" size={17} />
  </a>
);

const CTAButton = ({ href, children, secondary = false }) => (
  <a className={`cta-button ${secondary ? "cta-button--secondary" : "cta-button--primary"}`} href={href}>
    {children}
    <Icon type="arrow" size={17} />
  </a>
);

const trustItems = [
  {
    icon: "device",
    title: "Medical Device Specialists",
    text: "Specialized translation expertise for regulated device content.",
  },
  {
    icon: "shield",
    title: "ISO-Certified Quality",
    text: "ISO 17100 · ISO 9001 · ISO 13485",
  },
  {
    icon: "globe",
    title: "150+ Languages",
    text: "Scalable multilingual support for global device programs.",
  },
  {
    icon: "review",
    title: "Professional Human Review",
    text: "Qualified translation and independent review supported by technology-enabled QA.",
  },
];

const complexityItems = [
  {
    icon: "device",
    title: "Technical Meaning",
    text: "Operating instructions, device functions, procedures, component names, measurements, settings, and technical concepts must remain precise and understandable across languages.",
  },
  {
    icon: "shield",
    title: "Safety-Critical Information",
    text: "Warnings, precautions, contraindications, limitations, risk information, and conditions of use require careful linguistic and contextual control.",
  },
  {
    icon: "terminology",
    title: "Product Terminology",
    text: "Device names, components, functions, UI terms, procedures, and recurring language should remain consistent across the IFU and related product content.",
  },
  {
    icon: "layout",
    title: "Document Structure",
    text: "Tables, diagrams, symbols, callouts, numbered steps, cross-references, captions, and page structure all contribute to how users understand the instructions.",
  },
  {
    icon: "version",
    title: "Version Integrity",
    text: "Previously reviewed translation, approved terminology, product updates, and new source revisions must remain controlled across every required language.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Source & Product Context",
    icon: "file",
    lead: "Build the right context before translation begins.",
    text: "We review the approved source IFU together with the product and language resources needed to support consistent multilingual execution.",
    bullets: [
      "Previous IFU translations and translation memories",
      "Product terminology, approved glossaries, and style requirements",
      "Device labeling, software/UI terminology, and related technical documentation",
      "Product-family references, target-market language, and prior reviewer feedback",
    ],
  },
  {
    number: "02",
    title: "Terminology Preparation",
    icon: "terminology",
    lead: "Establish consistent product language before multilingual production scales.",
    text: "Sesen identifies recurring or high-impact terminology for device names, components, functions, procedures, warnings, measurements, UI terms, and approved product language.",
    bullets: [
      "Project- or client-specific glossaries",
      "Approved terminology connected to translation memory",
      "Terminology controls that can extend across labeling, software, and related content",
    ],
  },
  {
    number: "03",
    title: "Specialized IFU Translation",
    icon: "globe",
    lead: "Translate the instructions with the device, audience, and intended use in mind.",
    text: "Professional native-language linguists are selected for the medical, technical, and device-specific requirements of the content.",
    bullets: [
      "Technical meaning and procedural clarity",
      "Safety information, measurements, and numerical content",
      "Consistency with approved language and related product documentation",
    ],
  },
  {
    number: "04",
    title: "Independent Professional Review",
    icon: "review",
    lead: "Add a second qualified linguistic perspective before production.",
    text: "A qualified second linguist can independently evaluate the target content against the source and the approved language assets.",
    bullets: [
      "Accuracy, completeness, and terminology",
      "Procedural meaning, warnings, numbers, and measurements",
      "Consistency, readability, and source-to-target alignment",
    ],
  },
  {
    number: "05",
    title: "Multilingual DTP & eIFU Production",
    icon: "layout",
    lead: "Move approved translation into the required delivery format.",
    text: "Sesen supports print, digital, and structured environments including InDesign, FrameMaker, Word, PDF, XML, HTML, XLIFF, and DITA.",
    bullets: [
      "Language expansion and contraction",
      "Tables, diagrams, callouts, and linked graphics",
      "Font compatibility, text direction, and production-ready layout",
    ],
  },
  {
    number: "06",
    title: "In-Context QA",
    icon: "qa",
    lead: "Review the translation where users will actually see it.",
    text: "Final or near-final files are checked for issues that may not be visible during standard bilingual review.",
    bullets: [
      "Truncation, overflow, missing or misplaced text",
      "Tables, warnings, numbered steps, numbers, units, and symbols",
      "Diagrams, cross-references, fonts, RTL behavior, and digital functionality",
    ],
  },
  {
    number: "07",
    title: "Version & Delta Control",
    icon: "version",
    lead: "Update what changed without unnecessarily disturbing what did not.",
    text: "Translation memory and version-comparison workflows can identify source changes and reuse previously reviewed multilingual content where appropriate.",
    bullets: [
      "Focus new translation on meaningful source changes",
      "Protect previously reviewed language and approved terminology",
      "Carry reviewer decisions and product knowledge into future releases",
    ],
  },
  {
    number: "08",
    title: "Final Validation & Release",
    icon: "shield",
    lead: "Deliver a controlled multilingual IFU package for the next stage of your workflow.",
    text: "Final checks support the client's regulatory review, artwork approval, print production, eIFU publication, product launch, and future revision cycle.",
    bullets: [
      "Controlled language and production files",
      "Controlled output for the intended downstream release workflow",
      "Language assets preserved for future updates",
    ],
  },
];

const formatColumns = [
  {
    icon: "file",
    title: "Print & PDF IFUs",
    text: "Multilingual production for traditional IFUs and user documentation across InDesign, FrameMaker, Word, print-ready PDF, source artwork, linked graphics, tables, and diagrams.",
  },
  {
    icon: "link",
    title: "Electronic Instructions for Use",
    text: "Translation and localization for multilingual PDFs, HTML, XML, digital document portals, hyperlinks, QR-linked resources, language navigation, and eIFU environments.",
  },
  {
    icon: "version",
    title: "Structured & Reusable Content",
    text: "Support for XML, XLIFF, DITA, reusable content components, CMS workflows, translation-ready structured files, and automated publishing environments.",
  },
];

const deviceCategories = [
  {
    icon: "diagnostic",
    title: "Diagnostic & IVD Devices",
    text: "Laboratory systems, diagnostic instrumentation, IVD products, imaging and monitoring technologies, test platforms, and associated operating documentation.",
  },
  {
    icon: "surgical",
    title: "Surgical & Therapeutic Devices",
    text: "Surgical systems, instruments, treatment technologies, infusion and therapeutic equipment, procedural devices, and related user documentation.",
  },
  {
    icon: "implant",
    title: "Implantable & Complex Devices",
    text: "Cardiovascular, orthopedic, implantable, and other complex device systems where technical precision and terminology continuity are especially important.",
  },
  {
    icon: "software",
    title: "Software-Driven & Connected Devices",
    text: "SaMD, connected medical devices, embedded interfaces, clinician software, patient-facing applications, and systems where IFU terminology must align with the software experience.",
  },
];

const technologyItems = [
  {
    icon: "version",
    title: "Translation Memory",
    text: "Identify and reuse previously reviewed multilingual content where appropriate, particularly across recurring IFU revisions.",
  },
  {
    icon: "terminology",
    title: "Terminology Intelligence",
    text: "Organize important product language, maintain multilingual glossaries, and monitor approved terminology across documents and releases.",
  },
  {
    icon: "qa",
    title: "AI-Assisted Validation & QA",
    text: "Surface potential terminology, number, completeness, formatting, consistency, and structural issues for expert review.",
  },
  {
    icon: "ai",
    title: "Selective SesenGPT-Assisted Translation",
    text: "For suitable content and language pairs, controlled AI-assisted drafting can work with translation reuse, client terminology, expert review, and validation-driven QA.",
  },
];

const globalItems = [
  {
    title: "150+ Languages",
    text: "Multilingual support for established and emerging medical-device markets across Europe, the Americas, Asia-Pacific, the Middle East, and other regions.",
  },
  {
    title: "Regional Language Adaptation",
    text: "Support for appropriate regional variants, conventions, and client-approved market preferences where the program requires them.",
  },
  {
    title: "Reviewer Coordination",
    text: "Structured incorporation of feedback from regulatory teams, subject-matter experts, client reviewers, in-country stakeholders, and other designated participants.",
  },
  {
    title: "Coordinated Multilingual Releases",
    text: "Multiple languages and file types can be managed around the same approved source version for simultaneous or phased market delivery.",
  },
];

const whySesen = [
  {
    title: "Medical Device Expertise",
    text: "Professional linguists and reviewers selected for medical, technical, scientific, regulatory, and device-related content.",
  },
  {
    title: "Terminology Continuity",
    text: "Approved product language can be carried across IFUs, labeling, software, technical documentation, training, and subsequent versions.",
  },
  {
    title: "Independent Professional Review",
    text: "Structured second-linguist review provides an additional quality layer for regulated and safety-sensitive documentation.",
  },
  {
    title: "Multilingual Production Expertise",
    text: "Translation, review, DTP, structured content support, eIFU production, and final-format QA can be coordinated within one workflow.",
  },
  {
    title: "In-Context Validation",
    text: "Translated content can be evaluated inside the actual multilingual layout, not only within translation files.",
  },
  {
    title: "Revision & Program Control",
    text: "Translation memory, terminology, reviewer feedback, previous translations, and version comparison help maintain continuity as IFUs evolve.",
  },
];

const relatedServices = [
  {
    title: "Medical Device Translation Services",
    text: "Translation and localization across the device lifecycle, including technical documentation, IFUs, labeling, software, training, and post-market content.",
    href: "https://www.sesen.com/medical-device-translation-services/",
  },
  {
    title: "Medical Device Labeling Translation",
    text: "Multilingual support for device labels, packaging, warnings, safety information, product identification, and related labeling content.",
    href: "https://www.sesen.com/medical-device-labeling-translation-services/",
  },
  {
    title: "Label Review & In-Context QA",
    text: "Final-layout linguistic validation for IFUs, labels, packaging, and other regulated content after translation enters production.",
    href: "https://www.sesen.com/label-review-in-context-qa/",
  },
  {
    title: "Medical Device Software Localization",
    text: "Localization for device interfaces, SaMD, connected technologies, clinician software, patient applications, and related digital content.",
    href: "https://www.sesen.com/medical-device-software-localization/",
  },
  {
    title: "Regulatory Translation Services",
    text: "Specialized translation for regulatory submissions, technical documentation, authority communications, quality content, and lifecycle updates.",
    href: "https://www.sesen.com/regulatory-translation-services/",
  },
  {
    title: "Regulatory Submission Formatting",
    text: "Multilingual formatting, layout, table review, file preparation, and production support for regulated documentation.",
    href: "https://www.sesen.com/regulatory-submission-formatting/",
  },
];

const faqs = [
  {
    q: "What are IFU translation services?",
    a: "IFU translation services cover the specialized translation and localization of medical device Instructions for Use from a source language into one or more target languages. A complete workflow may include source review, terminology preparation, professional translation, independent linguistic review, multilingual desktop publishing, eIFU or structured-content production, in-context QA, version control, and final file validation. For regulated device content, these controls help keep terminology, instructions, warnings, document structure, and revisions consistent across languages.",
  },
  {
    q: "What types of medical device IFUs does Sesen translate?",
    a: "Sesen supports IFUs for a broad range of medical devices and IVD products, including diagnostic and monitoring systems, laboratory and testing equipment, surgical and therapeutic devices, implantable devices, orthopedic products, connected devices, SaMD, and other software-driven technologies. We also support related user manuals, product documentation, electronic IFUs, package inserts, and other device content that shares terminology with the IFU.",
  },
  {
    q: "How many languages does Sesen support for IFU translation?",
    a: "Sesen supports medical device translation and localization across 150+ languages. For multinational IFU programs, Sesen can coordinate regional variants, terminology, translation memories, reviewers, file production, and simultaneous or phased releases within a centralized workflow.",
  },
  {
    q: "How does Sesen maintain terminology consistency across IFU revisions?",
    a: "Sesen can establish and maintain client- and product-specific terminology resources covering device names, components, functions, procedures, warnings, UI terminology, and other recurring language. These resources work together with translation memory, previous approved translations, client references, reviewer feedback, and QA to help maintain consistency across new versions and related device content.",
  },
  {
    q: "Can Sesen translate an IFU update without retranslating the entire document?",
    a: "Yes, where suitable source files and translation history are available. Sesen can use translation memory and version-comparison workflows to identify new or changed source content and reuse previously translated material where appropriate. The exact workflow depends on the source format, previous language assets, revision history, and client quality requirements.",
  },
  {
    q: "Does Sesen provide multilingual DTP for IFUs?",
    a: "Yes. Sesen supports multilingual desktop publishing and formatting across common IFU production environments, including Adobe InDesign, FrameMaker, Microsoft Word, PDF, structured files, and other formats. DTP workflows can account for text expansion and contraction, fonts, tables, diagrams, callouts, right-to-left languages, line breaks, page flow, and other language-specific production requirements.",
  },
  {
    q: "Does Sesen perform in-context QA after IFU formatting?",
    a: "Yes. In-context QA reviews translated content in the actual formatted IFU rather than only in a bilingual translation environment. This can identify issues such as truncated text, missing content, incorrect line breaks, misplaced translations, broken tables, symbol or number problems, right-to-left rendering issues, and discrepancies between translated text and its associated diagram or procedural step.",
  },
  {
    q: "Does Sesen support electronic Instructions for Use?",
    a: "Yes. Sesen supports multilingual eIFU workflows including translation and localization for digital PDFs, XML, HTML, structured content, hyperlinks, QR-linked resources, and online document environments. EU eIFU rules were expanded in 2025 for a broader range of professional-use medical devices under applicable conditions; where a professional-use device may reasonably also be used by lay persons, instructions intended for lay users remain subject to paper-delivery requirements. The appropriate delivery approach depends on the product, users, jurisdiction, and the manufacturer's regulatory determination.",
  },
  {
    q: "What languages are required for medical device IFUs in the European Union?",
    a: "The required language set depends on the countries in which the device will be made available and the applicable requirements in those markets. Under EU MDR, accompanying information must be supplied in the official Union language or languages determined by the Member State where the device is made available to the user or patient. Sesen supports translation, review, formatting, and QA once the manufacturer has defined its target markets and required language set.",
  },
  {
    q: "Does Sesen support EU MDR and IVDR IFU translation?",
    a: "Yes. Sesen supports medical device and IVD organizations with multilingual IFU translation for programs operating in EU MDR and IVDR environments. Services can include terminology preparation, specialized translation, independent professional review, multilingual DTP, eIFU support, in-context QA, version control, and coordinated language delivery. Regulatory applicability and market-language determinations remain the responsibility of the manufacturer and its regulatory advisors.",
  },
  {
    q: "Does Sesen provide independent review for regulated IFUs?",
    a: "Yes. Depending on the required quality workflow, Sesen can assign a qualified second linguist to independently review the translated IFU against the source. The review can cover accuracy, completeness, terminology, technical meaning, warnings, procedures, measurements, consistency, readability, and compliance with approved client language assets.",
  },
  {
    q: "Does Sesen use AI for IFU translation?",
    a: "Sesen uses AI selectively within controlled multilingual workflows. For appropriate content and language pairs, SesenGPT can support translation drafting, terminology processing, approved translation reuse, and validation-driven QA. Professional medical linguists review and validate the content according to the agreed quality workflow. Content type, intended use, risk profile, language pair, previous translations, client terminology, and quality requirements help determine the appropriate approach.",
  },
  {
    q: "Can Sesen support an ongoing multilingual IFU program?",
    a: "Yes. Sesen can support recurring IFU releases across product versions, languages, markets, and file formats. Translation memories, terminology assets, reviewer feedback, previous multilingual content, workflow requirements, and production knowledge can be maintained across the program to improve continuity from one release to the next.",
  },
];

export default function SesenIFUTranslationServicesWireframe() {
  return (
    <main className={ROOT}>
      <style>{styles}</style>

      <section className="hero section-light">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">MEDICAL DEVICE TRANSLATION</div>
            <h1>IFU Translation Services for Medical Devices</h1>
            <p className="hero-lead">
              Sesen helps medical device and IVD companies translate, review, format, and manage Instructions for Use across languages, markets, file formats, and product revisions.
            </p>
            <p className="hero-support">
              Our specialized IFU translation services combine medical device linguists, terminology governance, independent professional review, multilingual DTP, in-context QA, version control, and AI-enabled validation to support controlled global releases.
            </p>
            <div className="hero-actions">
              <CTAButton href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</CTAButton>
              <CTAButton href="https://www.sesen.com/get-a-quote/" secondary>GET A QUOTE</CTAButton>
            </div>
          </div>

          <div className="hero-art" aria-hidden="true">
            <svg viewBox="0 0 560 470" focusable="false">
              <defs>
                <linearGradient id="sesenIfuHeroSoftV2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#F7F9FD" />
                  <stop offset="100%" stopColor="#EAF0FF" />
                </linearGradient>
              </defs>
              <circle cx="302" cy="236" r="205" fill="url(#sesenIfuHeroSoftV2)" />
              <circle cx="300" cy="236" r="172" fill="none" stroke="#DDE4F2" strokeWidth="1.5" strokeDasharray="6 10" />

              <g transform="translate(130 96)">
                <rect x="0" y="44" width="190" height="246" rx="18" fill="#FFFFFF" stroke="#B8C7EB" strokeWidth="2" />
                <path d="M143 44h47v47" fill="#F5F7FF" stroke="#B8C7EB" strokeWidth="2" />
                <path d="M143 44v47h47" fill="none" stroke="#B8C7EB" strokeWidth="2" />
                <rect x="27" y="76" width="74" height="10" rx="5" fill="#3659BB" />
                <rect x="27" y="102" width="132" height="7" rx="3.5" fill="#DDE4F2" />
                <rect x="27" y="120" width="118" height="7" rx="3.5" fill="#DDE4F2" />
                <rect x="27" y="151" width="136" height="54" rx="9" fill="#F5F7FF" stroke="#DDE4F2" />
                <path d="M43 170h102M43 186h78" stroke="#7D91C6" strokeWidth="5" strokeLinecap="round" />
                <rect x="27" y="226" width="61" height="8" rx="4" fill="#8FA5DD" />
                <rect x="27" y="246" width="121" height="7" rx="3.5" fill="#DDE4F2" />
                <rect x="27" y="264" width="97" height="7" rx="3.5" fill="#DDE4F2" />
              </g>

              <g transform="translate(352 106)">
                <rect x="0" y="0" width="132" height="88" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="15" fill="#EAF0FF" />
                <path d="M22 28h12M28 22v12" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
                <rect x="54" y="21" width="54" height="7" rx="3.5" fill="#6F8BE1" />
                <rect x="20" y="59" width="88" height="6" rx="3" fill="#DDE4F2" />
              </g>

              <g transform="translate(370 226)">
                <rect x="0" y="0" width="140" height="92" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
                <circle cx="28" cy="30" r="15" fill="#EAF0FF" />
                <path d="m21 30 5 5 10-12" stroke="#3659BB" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                <rect x="55" y="22" width="59" height="7" rx="3.5" fill="#6F8BE1" />
                <rect x="20" y="62" width="94" height="6" rx="3" fill="#DDE4F2" />
              </g>

              <g transform="translate(342 348)">
                <rect x="0" y="0" width="150" height="82" rx="16" fill="#17264D" />
                <circle cx="30" cy="31" r="14" fill="#4B6FD8" />
                <path d="M25 31h10M30 26v10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
                <rect x="56" y="22" width="66" height="7" rx="3.5" fill="#C8D6FF" />
                <rect x="20" y="56" width="102" height="6" rx="3" fill="#6477A8" />
              </g>

              <path d="M319 160c24 0 31-10 33-17" stroke="#6F8BE1" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M321 260c31 0 39 6 48 12" stroke="#6F8BE1" strokeWidth="2" fill="none" strokeLinecap="round" />
              <path d="M310 350c29 14 32 24 34 37" stroke="#6F8BE1" strokeWidth="2" fill="none" strokeLinecap="round" />

            </svg>
          </div>
        </div>
      </section>

      <section className="trust-band" aria-label="IFU translation trust signals">
        <div className="shell trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.title}>
              <div className="trust-icon"><Icon type={item.icon} /></div>
              <div>
                <div className="trust-title">{item.title}</div>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-white">
        <div className="shell">
          <SectionHeading
            eyebrow="CONTROLLED MULTILINGUAL DOCUMENTATION"
            title="An IFU Is More Than the Words on the Page"
            intro="Instructions for Use bring together technical instructions, safety information, product terminology, diagrams, symbols, tables, procedural sequences, and other content that must work together as a complete document."
          />

          <div className="authority-split">
            <div className="authority-copy">
              <p>
                When an IFU moves into multiple languages, each of those elements has to remain connected. A device term used in the IFU may also appear on the product label, in the software interface, in training materials, or across related technical documentation.
              </p>
              <p>
                A translated procedure can be linguistically accurate and still become unclear if its callout, diagram, numbered step, or cross-reference is incorrect in the final layout. That is why Sesen approaches IFU translation as a controlled multilingual document workflow—not simply a text translation task.
              </p>
              <div className="statement-panel">
                <strong>Effective IFU localization brings linguistic accuracy, technical understanding, document production, and version control together in one coordinated process.</strong>
              </div>
            </div>

            <div className="complexity-list">
              {complexityItems.map((item) => (
                <div className="complexity-row" key={item.title}>
                  <div className="complexity-icon"><Icon type={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft workflow-section">
        <div className="shell">
          <SectionHeading
            title="From Approved Source IFU to Market-Ready Multilingual Release"
            intro="Sesen manages the complete multilingual IFU workflow from source preparation through translation, professional review, production, final-format QA, and recurring updates. The process can be configured around your product, content risk, languages, file formats, existing language assets, reviewer requirements, and release process."
            align="left"
            technical
          />

          <div className="workflow-grid">
            {workflow.map((step) => (
              <article className="workflow-step" key={step.number}>
                <div className="workflow-step-top">
                  <span className="workflow-number">{step.number}</span>
                  <span className="workflow-icon"><Icon type={step.icon} /></span>
                </div>
                <h3>{step.title}</h3>
                <div className="workflow-lead">{step.lead}</div>
                <p>{step.text}</p>
                <ul>
                  {step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <div className="workflow-conclusion">
            <div>
              <span className="eyebrow">THE OUTCOME</span>
              <h3>A controlled multilingual IFU prepared for its intended format, audience, and downstream release process.</h3>
            </div>
            <CTAButton href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</CTAButton>
          </div>
        </div>
      </section>

      <section className="section section-white revision-section">
        <div className="shell revision-grid">
          <div className="revision-copy">
            <div className="eyebrow">REVISION CONTROL</div>
            <h2>Keep IFU Language Controlled as the Product Evolves</h2>
            <p className="section-lead-left">
              New device functionality, safety information, software updates, regulatory feedback, product variants, usability findings, and other changes can all create new IFU versions.
            </p>
            <p>
              Without a controlled update strategy, small source revisions can create disproportionate multilingual work—and unnecessary variation can accumulate from one version to the next.
            </p>
            <div className="revision-points">
              <div>
                <h3>Establish Controlled Product Terminology</h3>
                <p>Maintain approved names for components, functions, procedures, warnings, UI elements, and other recurring language.</p>
              </div>
              <div>
                <h3>Reuse Previously Reviewed Translation</h3>
                <p>Use translation memory to preserve approved language rather than retranslating unchanged content unnecessarily.</p>
              </div>
              <div>
                <h3>Focus on What Changed</h3>
                <p>Where the files and history support it, isolate source deltas and concentrate new translation and review on meaningful changes.</p>
              </div>
              <div>
                <h3>Carry Reviewer Decisions Forward</h3>
                <p>Incorporate approved terminology and reviewer preferences into the language assets used for subsequent releases.</p>
              </div>
            </div>
          </div>

          <div className="revision-visual" aria-label="IFU version-control workflow">
            <div className="revision-card revision-card--primary">
              <span>REV A</span>
              <strong>Approved IFU</strong>
              <small>Reviewed multilingual content</small>
            </div>
            <div className="revision-arrow"><Icon type="arrow" size={20} /></div>
            <div className="revision-card revision-card--change">
              <span>SOURCE CHANGE</span>
              <strong>Delta Identified</strong>
              <small>New and modified content isolated</small>
            </div>
            <div className="revision-arrow"><Icon type="arrow" size={20} /></div>
            <div className="revision-card revision-card--review">
              <span>CONTROLLED UPDATE</span>
              <strong>Translate + Review</strong>
              <small>Approved language preserved</small>
            </div>
            <div className="revision-arrow"><Icon type="arrow" size={20} /></div>
            <div className="revision-card revision-card--final">
              <span>REV B</span>
              <strong>Multilingual Release</strong>
              <small>Knowledge retained for next revision</small>
            </div>
            <p className="revision-caption">A controlled IFU program should become more consistent and efficient as product knowledge accumulates.</p>
          </div>
        </div>
      </section>

      <section className="section section-soft dtp-section">
        <div className="shell dtp-grid">
          <div className="dtp-visual" aria-hidden="true">
            <div className="doc-frame doc-frame--translation">
              <div className="doc-label">TRANSLATION VIEW</div>
              <div className="doc-lines">
                <span className="w80" /><span className="w95" /><span className="w65" />
                <div className="doc-box"><span /><span /><span /></div>
                <span className="w90" /><span className="w72" />
              </div>
            </div>
            <div className="dtp-connector"><Icon type="arrow" size={23} /></div>
            <div className="doc-frame doc-frame--final">
              <div className="doc-label">FINAL IFU</div>
              <div className="warning-line"><span>!</span><i /></div>
              <div className="doc-layout-row"><b /><i /></div>
              <div className="doc-layout-row"><b /><i /></div>
              <div className="doc-diagram"><span /><span /><span /></div>
              <div className="qa-badge"><Icon type="qa" size={17} /> IN-CONTEXT QA</div>
            </div>
          </div>

          <div className="dtp-copy">
            <div className="eyebrow">MULTILINGUAL PRODUCTION</div>
            <h2>Translation Isn't Finished Until the IFU Works in Its Final Format</h2>
            <p className="section-lead-left">
              IFUs are functional documents. Users navigate tables, warnings, numbered procedures, figures, diagrams, callouts, references, symbols, and other visual elements alongside the translated text.
            </p>
            <p>
              Linguistic quality and document quality cannot be separated at the end of the workflow. Sesen supports multilingual layout, complex IFU elements, right-to-left and complex scripts, and final-format linguistic review so content can be evaluated in context.
            </p>
            <div className="inline-list two-col-list">
              <span><Icon type="check" size={17} /> Language expansion and contraction</span>
              <span><Icon type="check" size={17} /> Tables, diagrams, and callouts</span>
              <span><Icon type="check" size={17} /> Warnings, symbols, and measurements</span>
              <span><Icon type="check" size={17} /> Cross-references and numbered procedures</span>
              <span><Icon type="check" size={17} /> Right-to-left and complex scripts</span>
              <span><Icon type="check" size={17} /> Final-format linguistic review</span>
            </div>
            <div className="editorial-links-row">
              <EditorialLink href="https://www.sesen.com/desktop-publishing-formatting/">Multilingual DTP & Formatting</EditorialLink>
              <EditorialLink href="https://www.sesen.com/label-review-in-context-qa/">Label Review & In-Context QA</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white formats-section">
        <div className="shell">
          <SectionHeading
            title="Print IFUs, eIFUs, and Structured Content"
            intro="Medical device documentation is increasingly produced across multiple channels rather than in a single printed format. Sesen supports multilingual IFU workflows across traditional print, electronic instructions for use, downloadable documents, and structured content environments."
          />

          <div className="format-grid">
            {formatColumns.map((item) => (
              <article className="format-column" key={item.title}>
                <div className="format-icon"><Icon type={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="eifu-note">
            <div className="eifu-note-icon"><Icon type="shield" size={26} /></div>
            <div>
              <h3>Electronic delivery depends on the device, users, and applicable market framework.</h3>
              <p>
                EU eIFU rules were expanded in 2025 for a broader range of professional-use medical devices under applicable conditions. Where a professional-use device may reasonably also be used by lay persons, instructions intended for lay users remain subject to paper-delivery requirements. Sesen supports the multilingual content and production side of eIFU programs based on the requirements defined by the manufacturer.
              </p>
            </div>
            <EditorialLink href="https://www.sesen.com/ifu-translation-services/eu-mdr-compliance/">EU MDR IFU Translation Support</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-soft categories-section">
        <div className="shell">
          <SectionHeading
            title="IFU Translation Across Medical Device Categories"
            intro="Sesen supports Instructions for Use and related product documentation across a broad range of medical-device technologies and user environments."
          />
          <div className="category-grid">
            {deviceCategories.map((item) => (
              <article className="category-item" key={item.title}>
                <div className="category-icon"><Icon type={item.icon} size={22} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="category-link-row">
            <span>Need terminology aligned between an IFU and the device interface?</span>
            <EditorialLink href="https://www.sesen.com/medical-device-software-localization/">Medical Device Software Localization</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-white regulated-section">
        <div className="shell regulated-grid">
          <div className="regulated-copy">
            <h2>Built for Regulated Medical Device Documentation</h2>
            <p className="section-lead-left">
              IFU requirements vary by jurisdiction, device type, intended user, regulatory pathway, and market. Sesen supports the multilingual execution of manufacturer-defined requirements while remaining focused on accurate translation, terminology control, professional review, production, and quality validation.
            </p>
            <div className="regulated-note">
              <Icon type="shield" size={23} />
              <p>Sesen supports multilingual implementation based on client-defined target markets and requirements; regulatory applicability and market-language determinations remain the responsibility of the manufacturer and its regulatory advisors.</p>
            </div>
          </div>

          <div className="regulated-matrix">
            <div className="regulated-row">
              <div className="regulated-tag">EU</div>
              <div>
                <h3>EU MDR & IVDR Environments</h3>
                <p>Under EU MDR, accompanying information is supplied in the official Union language or languages determined by the Member State where the device is made available. Sesen coordinates translation, terminology, formatting, revision control, and final-format QA for the client's defined EU markets and language sets.</p>
              </div>
            </div>
            <div className="regulated-row">
              <div className="regulated-tag">IVD</div>
              <div>
                <h3>Diagnostic & IVD Documentation</h3>
                <p>Support the scientific, technical, and user-facing content found in diagnostic instructions and related documentation.</p>
              </div>
            </div>
            <div className="regulated-row">
              <div className="regulated-tag">US+</div>
              <div>
                <h3>U.S. & Global Device Programs</h3>
                <p>Manage IFUs and related product information for FDA-regulated environments and defined markets across global regions.</p>
              </div>
            </div>
            <div className="regulated-row">
              <div className="regulated-tag">ISO</div>
              <div>
                <h3>Device Information & Symbol Context</h3>
                <p>Where relevant, workflows can accommodate manufacturer information and symbol conventions associated with standards such as ISO 20417 and ISO 15223-1, together with client-specific labeling requirements.</p>
              </div>
            </div>
            <EditorialLink href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-tech">
        <div className="shell">
          <SectionHeading
            eyebrow="CONTROLLED TECHNOLOGY"
            title="Technology That Strengthens IFU Control"
            intro="Technology is most valuable in regulated translation when it strengthens consistency, reuse, validation, and oversight. Sesen combines professional medical-device expertise with translation memory, terminology technology, automated QA, and controlled AI-enabled workflows."
          />
          <div className="technology-grid">
            {technologyItems.map((item) => (
              <article className="technology-item" key={item.title}>
                <div className="technology-icon"><Icon type={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="human-validation">
            <div>
              <span className="eyebrow eyebrow--dark">EXPERT HUMAN VALIDATION</span>
              <h3>Technology remains part of the workflow—not the final authority.</h3>
              <p>Qualified linguists review and validate regulated IFU content according to the agreed quality process, supported by terminology resources, QA tools, and prior approved translations.</p>
            </div>
            <CTAButton href="https://www.sesen.com/sesengpt/" secondary>EXPLORE SESENGPT</CTAButton>
          </div>
        </div>
      </section>

      <section className="section section-white global-section">
        <div className="shell global-grid">
          <div className="global-copy">
            <div className="eyebrow">GLOBAL PROGRAM CONTROL</div>
            <h2>One IFU Program. Multiple Markets. Consistent Execution.</h2>
            <p className="section-lead-left">
              Global medical device releases can involve numerous languages, product variants, source versions, reviewers, delivery formats, and overlapping market timelines.
            </p>
            <p>
              Managing each language as an isolated translation project makes consistency harder to maintain as the program grows. Sesen provides centralized multilingual support across 150+ languages so translation, terminology, review, production, and version history can remain connected.
            </p>
            <strong className="global-statement">Centralized program management keeps source versions, terminology, reviewers, production files, and delivery schedules aligned across languages and markets.</strong>
          </div>
          <div className="global-list">
            {globalItems.map((item) => (
              <div className="global-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-case">
        <div className="shell case-grid">
          <div className="case-number">
            <span>24</span>
            <strong>LANGUAGES</strong>
            <small>Class III implantable medical device</small>
          </div>
          <div className="case-copy">
            <div className="eyebrow">IFU TRANSLATION IN PRACTICE</div>
            <h2>A Controlled Multilingual IFU Program for European Market Release</h2>
            <p>
              A U.S.-based MedTech company preparing an implantable cardiac device for Europe needed a highly technical IFU localized across 24 languages. The content included procedural instructions, safety information, clinical terminology, and device-specific language that needed to remain aligned with previously approved content and related product families.
            </p>
            <div className="case-process">
              <span>Specialized Translation</span>
              <span>Terminology Governance</span>
              <span>Independent Review</span>
              <span>Multilingual DTP</span>
              <span>In-Context QA</span>
              <span>AI-Assisted Checks</span>
            </div>
            <p className="case-result">
              Sesen delivered the complete 24-language IFU package in submission-ready format through a coordinated translation, review, terminology, production, and validation workflow.
            </p>
            <EditorialLink href="https://www.sesen.com/resources/case-studies/ifu-localization-class-iii-medical-device/">Read the Class III IFU Case Study</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section-white why-section">
        <div className="shell">
          <SectionHeading
            title="Why Medical Device Teams Choose Sesen for IFU Translation"
            intro="IFU programs require more than broad language coverage. They require a partner that understands how technical content, product terminology, professional review, document production, and recurring revisions fit together."
          />
          <div className="why-grid">
            {whySesen.map((item) => (
              <div className="why-item" key={item.title}>
                <div className="why-marker"><Icon type="check" size={17} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="why-summary">
            <strong>From the first translated segment through the final multilingual release, Sesen helps medical device teams maintain control of the IFU as a complete regulated document.</strong>
          </div>
        </div>
      </section>

      <section className="section section-soft related-section">
        <div className="shell">
          <SectionHeading
            title="Connected Support for Medical Device Content"
            intro="IFUs rarely exist in isolation. Sesen provides specialized multilingual support across the broader medical-device content ecosystem."
            align="left"
            technical
          />
          <div className="related-list">
            {relatedServices.map((service) => (
              <a className="related-row" href={service.href} key={service.title}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <span className="related-arrow"><Icon type="arrow" size={20} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white faq-section">
        <div className="shell faq-shell">
          <SectionHeading
            title="IFU Translation Services FAQ"
            intro="Answers to common questions about multilingual Instructions for Use, revision control, DTP, eIFU production, professional review, and global device programs."
            align="left"
            technical
          />
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell final-cta-inner">
          <div>
            <h2>Support Your Next Multilingual IFU Release</h2>
            <p>
              Whether you are preparing an IFU for a new medical device launch, updating an existing product, expanding into additional markets, moving to electronic instructions for use, or managing recurring revisions across a global device portfolio, Sesen can build the multilingual workflow around your content, languages, formats, reviewers, and release requirements.
            </p>
            <div className="final-proof">Medical device expertise · terminology governance · independent professional review · multilingual DTP · in-context QA · controlled AI-enabled workflows · version continuity · 150+ languages</div>
          </div>
          <div className="final-actions">
            <CTAButton href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</CTAButton>
            <CTAButton href="https://www.sesen.com/get-a-quote/" secondary>GET A QUOTE</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.${ROOT} {
  --ifu-primary: #4B6FD8;
  --ifu-hover: #3659BB;
  --ifu-deep-blue: #253F8F;
  --ifu-mid-blue: #6F8BE1;
  --ifu-soft-blue: #EAF0FF;
  --ifu-pale-blue: #F5F7FF;
  --ifu-navy: #17264D;
  --ifu-ink: #111827;
  --ifu-body: #46546D;
  --ifu-muted: #68758B;
  --ifu-border: #DDE4F2;
  --ifu-divider: #E9EEF8;
  --ifu-soft: #F7F9FD;
  --ifu-white: #FFFFFF;
  --ifu-light-accent: #C8D6FF;
  color: var(--ifu-body);
  background: var(--ifu-white);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow-x: hidden;
}

.${ROOT} *, .${ROOT} *::before, .${ROOT} *::after { box-sizing: border-box; }
.${ROOT} a { color: inherit; text-decoration: none; }
.${ROOT} p { margin: 0; }
.${ROOT} h1, .${ROOT} h2, .${ROOT} h3 { margin: 0; font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; color: var(--ifu-navy); font-weight: 500; }
.${ROOT} ul { margin: 0; padding: 0; }
.${ROOT} .shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
.${ROOT} .section { padding-top: 96px; padding-bottom: 96px; }
.${ROOT} .section-white { background: var(--ifu-white); }
.${ROOT} .section-light { background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%); }
.${ROOT} .section-soft { background: var(--ifu-soft); }

.${ROOT} .eyebrow {
  display: block;
  color: var(--ifu-hover);
  font-size: 11px;
  line-height: 1.35;
  font-weight: 700;
  letter-spacing: .15em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.${ROOT} .eyebrow--dark { color: var(--ifu-light-accent); }
.${ROOT} .section-heading { max-width: 820px; margin-bottom: 48px; }
.${ROOT} .section-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
.${ROOT} .section-heading--left { margin-left: 0; margin-right: 0; text-align: left; }
.${ROOT} .section-heading h2, .${ROOT} .revision-copy > h2, .${ROOT} .dtp-copy > h2, .${ROOT} .regulated-copy > h2, .${ROOT} .global-copy > h2, .${ROOT} .case-copy > h2, .${ROOT} .final-cta h2 {
  font-size: 36px;
  line-height: 1.3;
  letter-spacing: normal;
}
.${ROOT} .section-heading p, .${ROOT} .section-lead-left {
  margin-top: 18px;
  color: var(--ifu-body);
  font-size: 18px;
  line-height: 1.65;
}
.${ROOT} h3 { font-size: 22px; line-height: 1.3; }

.${ROOT} .hero { padding: 92px 0 88px; }
.${ROOT} .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr); align-items: center; gap: 58px; }
.${ROOT} .hero-copy { max-width: 700px; }
.${ROOT} .hero h1 { font-size: 48px; line-height: 1.3; letter-spacing: -.5px; max-width: 690px; }
.${ROOT} .hero-lead { margin-top: 23px; font-size: 20px; line-height: 1.6; color: #293954; max-width: 680px; }
.${ROOT} .hero-support { margin-top: 15px; font-size: 17px; line-height: 1.7; max-width: 680px; }
.${ROOT} .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 31px; }
.${ROOT} .cta-button {
  min-height: 50px;
  padding: 0 25px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 13px;
  line-height: 1;
  font-weight: 700;
  letter-spacing: .025em;
  text-transform: uppercase;
  transition: background .2s ease, border-color .2s ease, transform .2s ease;
}
.${ROOT} .cta-button:focus-visible, .${ROOT} .editorial-link:focus-visible, .${ROOT} .related-row:focus-visible, .${ROOT} summary:focus-visible { outline: 3px solid rgba(75,111,216,.35); outline-offset: 3px; }
.${ROOT} .cta-button--primary { background: var(--ifu-primary); color: #FFFFFF; border: 1px solid var(--ifu-primary); }
.${ROOT} .cta-button--primary:hover { background: var(--ifu-hover); border-color: var(--ifu-hover); }
.${ROOT} .cta-button--secondary { background: #FFFFFF; color: var(--ifu-ink); border: 1px solid #C9D4E8; }
.${ROOT} .cta-button--secondary:hover { background: var(--ifu-pale-blue); border-color: #AFBEDD; }
.${ROOT} .hero-art { width: 100%; max-width: 560px; justify-self: end; }
.${ROOT} .hero-art svg { display: block; width: 100%; height: auto; }

.${ROOT} .trust-band { border-top: 1px solid var(--ifu-divider); border-bottom: 1px solid var(--ifu-divider); background: #FFFFFF; }
.${ROOT} .trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); }
.${ROOT} .trust-item { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 14px; align-items: start; padding: 26px 22px; }
.${ROOT} .trust-item + .trust-item { border-left: 1px solid var(--ifu-divider); }
.${ROOT} .trust-icon { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; color: var(--ifu-hover); background: var(--ifu-pale-blue); }
.${ROOT} .trust-title { font-family: "Inter Tight", Inter, sans-serif; color: var(--ifu-navy); font-weight: 500; font-size: 17px; line-height: 1.3; }
.${ROOT} .trust-item p { margin-top: 5px; font-size: 16px; line-height: 1.55; color: var(--ifu-muted); }

.${ROOT} .authority-split { display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 72px; align-items: start; }
.${ROOT} .authority-copy { max-width: 560px; }
.${ROOT} .authority-copy > p { font-size: 17px; line-height: 1.75; margin-bottom: 20px; }
.${ROOT} .statement-panel { margin-top: 34px; padding: 24px 26px; border-left: 3px solid var(--ifu-primary); background: var(--ifu-pale-blue); border-radius: 0 18px 18px 0; color: var(--ifu-navy); font-size: 17px; line-height: 1.6; }
.${ROOT} .complexity-list { border-top: 1px solid var(--ifu-divider); }
.${ROOT} .complexity-row { display: grid; grid-template-columns: 45px minmax(0,1fr); gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .complexity-icon { width: 40px; height: 40px; border-radius: 12px; background: var(--ifu-pale-blue); color: var(--ifu-hover); display: grid; place-items: center; }
.${ROOT} .complexity-row p { margin-top: 7px; font-size: 16px; line-height: 1.65; }

.${ROOT} .workflow-section { position: relative; }
.${ROOT} .workflow-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid var(--ifu-border); border-left: 1px solid var(--ifu-border); background: #FFFFFF; border-radius: 26px; overflow: hidden; }
.${ROOT} .workflow-step { position: relative; padding: 30px 26px 28px; border-right: 1px solid var(--ifu-border); border-bottom: 1px solid var(--ifu-border); min-height: 420px; }
.${ROOT} .workflow-step-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 23px; }
.${ROOT} .workflow-number { color: var(--ifu-hover); font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; font-weight: 500; }
.${ROOT} .workflow-icon { width: 38px; height: 38px; border-radius: 11px; display: grid; place-items: center; color: var(--ifu-hover); background: var(--ifu-pale-blue); }
.${ROOT} .workflow-step h3 { font-size: 21px; }
.${ROOT} .workflow-lead { margin-top: 12px; color: #293954; font-weight: 600; font-size: 16px; line-height: 1.55; }
.${ROOT} .workflow-step > p { margin-top: 10px; font-size: 16px; line-height: 1.65; }
.${ROOT} .workflow-step ul { list-style: none; margin-top: 17px; }
.${ROOT} .workflow-step li { position: relative; padding-left: 16px; margin-top: 8px; font-size: 16px; line-height: 1.55; color: var(--ifu-muted); }
.${ROOT} .workflow-step li::before { content: ""; position: absolute; left: 0; top: .7em; width: 5px; height: 5px; border-radius: 50%; background: var(--ifu-mid-blue); }
.${ROOT} .workflow-conclusion { margin-top: 28px; padding: 28px 30px; display: flex; align-items: center; justify-content: space-between; gap: 30px; background: var(--ifu-navy); border-radius: 24px; color: #FFFFFF; }
.${ROOT} .workflow-conclusion h3 { color: #FFFFFF; max-width: 780px; font-size: 24px; }
.${ROOT} .workflow-conclusion .eyebrow { color: var(--ifu-light-accent); margin-bottom: 8px; }

.${ROOT} .revision-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(480px,.92fr); gap: 76px; align-items: center; }
.${ROOT} .revision-copy > p:not(.section-lead-left) { margin-top: 16px; font-size: 16px; }
.${ROOT} .revision-points { margin-top: 32px; border-top: 1px solid var(--ifu-divider); }
.${ROOT} .revision-points > div { padding: 19px 0; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .revision-points h3 { font-size: 18px; }
.${ROOT} .revision-points p { margin-top: 6px; font-size: 16px; }
.${ROOT} .revision-visual { padding: 34px; background: var(--ifu-soft); border: 1px solid var(--ifu-border); border-radius: 28px; }
.${ROOT} .revision-card { padding: 18px 20px; border-radius: 18px; border: 1px solid var(--ifu-border); background: #FFFFFF; }
.${ROOT} .revision-card span { display: block; color: var(--ifu-hover); font-size: 10px; line-height: 1.3; font-weight: 700; letter-spacing: .14em; }
.${ROOT} .revision-card strong { display: block; margin-top: 5px; color: var(--ifu-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 18px; font-weight: 500; }
.${ROOT} .revision-card small { display: block; margin-top: 4px; color: var(--ifu-muted); font-size: 13px; }
.${ROOT} .revision-card--change { border-color: #BFCBED; background: #FBFCFF; }
.${ROOT} .revision-card--review { border-color: #AABBE8; }
.${ROOT} .revision-card--final { background: var(--ifu-navy); border-color: var(--ifu-navy); }
.${ROOT} .revision-card--final span { color: var(--ifu-light-accent); }
.${ROOT} .revision-card--final strong { color: #FFFFFF; }
.${ROOT} .revision-card--final small { color: #C6D0E9; }
.${ROOT} .revision-arrow { display: grid; place-items: center; color: var(--ifu-mid-blue); height: 33px; transform: rotate(90deg); }
.${ROOT} .revision-caption { margin-top: 18px; font-size: 14px; color: var(--ifu-muted); text-align: center; }

.${ROOT} .dtp-grid { display: grid; grid-template-columns: minmax(430px,.9fr) minmax(0,1.1fr); align-items: center; gap: 78px; }
.${ROOT} .dtp-visual { min-height: 420px; display: flex; align-items: center; justify-content: center; position: relative; }
.${ROOT} .doc-frame { width: 235px; height: 320px; border-radius: 20px; background: #FFFFFF; border: 1px solid var(--ifu-border); padding: 24px; box-shadow: 0 16px 36px rgba(23,38,77,.07); }
.${ROOT} .doc-frame--translation { transform: rotate(-3deg) translateX(18px); }
.${ROOT} .doc-frame--final { transform: rotate(3deg) translateX(-18px); }
.${ROOT} .doc-label { color: var(--ifu-hover); font-size: 10px; font-weight: 700; letter-spacing: .13em; margin-bottom: 23px; }
.${ROOT} .doc-lines > span { display: block; height: 7px; border-radius: 4px; background: #DDE4F2; margin-bottom: 12px; }
.${ROOT} .doc-lines .w80 { width: 80%; } .${ROOT} .doc-lines .w95 { width: 95%; } .${ROOT} .doc-lines .w65 { width: 65%; } .${ROOT} .doc-lines .w90 { width: 90%; } .${ROOT} .doc-lines .w72 { width: 72%; }
.${ROOT} .doc-box { background: var(--ifu-pale-blue); border: 1px solid var(--ifu-border); border-radius: 9px; padding: 13px; margin: 22px 0; }
.${ROOT} .doc-box span { display: block; height: 5px; margin: 6px 0; border-radius: 4px; background: #99ACE0; }
.${ROOT} .dtp-connector { width: 48px; height: 48px; border-radius: 50%; display: grid; place-items: center; z-index: 2; background: var(--ifu-primary); color: #FFFFFF; box-shadow: 0 8px 20px rgba(75,111,216,.22); }
.${ROOT} .warning-line { display: flex; align-items: center; gap: 10px; padding: 11px; border-radius: 9px; background: var(--ifu-pale-blue); }
.${ROOT} .warning-line span { width: 24px; height: 24px; border-radius: 50%; background: var(--ifu-hover); color: #FFFFFF; display: grid; place-items: center; font-weight: 700; }
.${ROOT} .warning-line i { flex: 1; height: 6px; background: #90A4DC; border-radius: 4px; }
.${ROOT} .doc-layout-row { display: grid; grid-template-columns: 32px 1fr; gap: 10px; margin-top: 18px; }
.${ROOT} .doc-layout-row b { height: 32px; border-radius: 7px; background: #EAF0FF; }
.${ROOT} .doc-layout-row i { height: 7px; margin-top: 8px; border-radius: 4px; background: #DDE4F2; }
.${ROOT} .doc-diagram { margin-top: 25px; height: 72px; border: 1px solid var(--ifu-border); border-radius: 10px; display: flex; align-items: center; justify-content: center; gap: 13px; }
.${ROOT} .doc-diagram span { width: 24px; height: 24px; border-radius: 7px; background: #CFDAF6; }
.${ROOT} .qa-badge { margin-top: 18px; display: inline-flex; align-items: center; gap: 7px; color: var(--ifu-hover); font-size: 10px; font-weight: 700; letter-spacing: .08em; }
.${ROOT} .dtp-copy > p:not(.section-lead-left) { margin-top: 16px; font-size: 16px; }
.${ROOT} .inline-list { margin-top: 28px; }
.${ROOT} .two-col-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px 20px; }
.${ROOT} .two-col-list span { display: flex; gap: 9px; align-items: flex-start; color: #293954; font-size: 16px; }
.${ROOT} .two-col-list svg { flex: 0 0 auto; margin-top: 3px; color: var(--ifu-hover); }
.${ROOT} .editorial-links-row { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 22px 30px; }
.${ROOT} .editorial-link { color: var(--ifu-hover); display: inline-flex; align-items: center; gap: 8px; font-weight: 700; font-size: 16px; line-height: 1.4; }
.${ROOT} .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }

.${ROOT} .format-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0; border-top: 1px solid var(--ifu-divider); border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .format-column { padding: 32px 34px; }
.${ROOT} .format-column + .format-column { border-left: 1px solid var(--ifu-divider); }
.${ROOT} .format-icon { width: 46px; height: 46px; border-radius: 14px; display: grid; place-items: center; background: var(--ifu-pale-blue); color: var(--ifu-hover); margin-bottom: 20px; }
.${ROOT} .format-column p { margin-top: 10px; font-size: 16px; line-height: 1.7; }
.${ROOT} .eifu-note { margin-top: 34px; padding: 26px 28px; display: grid; grid-template-columns: 48px minmax(0,1fr) auto; align-items: center; gap: 19px; background: var(--ifu-soft); border: 1px solid var(--ifu-border); border-radius: 20px; }
.${ROOT} .eifu-note-icon { color: var(--ifu-hover); }
.${ROOT} .eifu-note h3 { font-size: 18px; }
.${ROOT} .eifu-note p { margin-top: 5px; font-size: 16px; }

.${ROOT} .category-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 46px; border-top: 1px solid var(--ifu-divider); }
.${ROOT} .category-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 20px; padding: 30px 0; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .category-icon { width: 42px; height: 42px; border-radius: 13px; display: grid; place-items: center; background: var(--ifu-pale-blue); color: var(--ifu-hover); }
.${ROOT} .category-item p { margin-top: 8px; font-size: 16px; }
.${ROOT} .category-link-row { margin-top: 26px; display: flex; align-items: center; justify-content: center; gap: 20px; flex-wrap: wrap; color: var(--ifu-muted); font-size: 16px; }

.${ROOT} .regulated-grid { display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 76px; align-items: start; }
.${ROOT} .regulated-copy > p { margin-top: 18px; }
.${ROOT} .regulated-note { margin-top: 30px; padding: 22px; border-radius: 18px; background: var(--ifu-pale-blue); display: grid; grid-template-columns: 28px minmax(0,1fr); gap: 14px; color: var(--ifu-hover); }
.${ROOT} .regulated-note p { color: #293954; font-size: 16px; }
.${ROOT} .regulated-matrix { border-top: 1px solid var(--ifu-divider); }
.${ROOT} .regulated-row { padding: 24px 0; display: grid; grid-template-columns: 58px minmax(0,1fr); gap: 18px; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .regulated-tag { width: 46px; height: 46px; border-radius: 13px; display: grid; place-items: center; background: var(--ifu-pale-blue); color: var(--ifu-hover); font-size: 11px; font-weight: 700; letter-spacing: .04em; }
.${ROOT} .regulated-row h3 { font-size: 19px; }
.${ROOT} .regulated-row p { margin-top: 7px; font-size: 16px; }
.${ROOT} .regulated-matrix > .editorial-link { margin-top: 24px; }

.${ROOT} .section-tech { background: linear-gradient(135deg, #17264D 0%, #253F8F 100%); }
.${ROOT} .section-tech .section-heading h2, .${ROOT} .section-tech .section-heading p { color: #FFFFFF; }
.${ROOT} .section-tech .section-heading p { color: #D7DFF1; }
.${ROOT} .section-tech .eyebrow { color: var(--ifu-light-accent); }
.${ROOT} .technology-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 18px; }
.${ROOT} .technology-item { padding: 27px 24px; border: 1px solid rgba(255,255,255,.16); border-radius: 20px; background: rgba(255,255,255,.055); }
.${ROOT} .technology-icon { width: 42px; height: 42px; border-radius: 13px; display: grid; place-items: center; background: rgba(200,214,255,.12); color: var(--ifu-light-accent); margin-bottom: 20px; }
.${ROOT} .technology-item h3 { color: #FFFFFF; font-size: 20px; }
.${ROOT} .technology-item p { margin-top: 10px; color: #D6DEEF; font-size: 16px; line-height: 1.65; }
.${ROOT} .human-validation { margin-top: 28px; padding: 30px; display: flex; align-items: center; justify-content: space-between; gap: 32px; background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.18); border-radius: 22px; }
.${ROOT} .human-validation h3 { color: #FFFFFF; font-size: 24px; }
.${ROOT} .human-validation p { margin-top: 8px; max-width: 780px; color: #D6DEEF; font-size: 16px; }

.${ROOT} .global-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 76px; align-items: start; }
.${ROOT} .global-copy > p:not(.section-lead-left) { margin-top: 16px; font-size: 16px; }
.${ROOT} .global-statement { display: block; margin-top: 28px; padding-top: 25px; border-top: 2px solid var(--ifu-primary); color: var(--ifu-navy); font-size: 17px; line-height: 1.6; }
.${ROOT} .global-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--ifu-divider); }
.${ROOT} .global-item { padding: 26px 24px 26px 0; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .global-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--ifu-divider); }
.${ROOT} .global-item h3 { font-size: 19px; }
.${ROOT} .global-item p { margin-top: 8px; font-size: 16px; }

.${ROOT} .section-case { background: var(--ifu-pale-blue); }
.${ROOT} .case-grid { display: grid; grid-template-columns: 260px minmax(0,1fr); gap: 70px; align-items: center; }
.${ROOT} .case-number { width: 250px; height: 250px; border-radius: 50%; background: #FFFFFF; border: 1px solid #CFD9F1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; box-shadow: 0 20px 46px rgba(23,38,77,.07); }
.${ROOT} .case-number span { color: var(--ifu-hover); font-family: "Inter Tight", Inter, sans-serif; font-size: 78px; line-height: .95; font-weight: 500; }
.${ROOT} .case-number strong { margin-top: 10px; color: var(--ifu-navy); font-size: 12px; letter-spacing: .15em; }
.${ROOT} .case-number small { margin-top: 8px; max-width: 160px; color: var(--ifu-muted); font-size: 12px; line-height: 1.5; }
.${ROOT} .case-copy > p { margin-top: 17px; font-size: 17px; line-height: 1.7; max-width: 820px; }
.${ROOT} .case-process { margin-top: 24px; display: flex; flex-wrap: wrap; gap: 9px; }
.${ROOT} .case-process span { padding: 8px 12px; border-radius: 999px; background: #FFFFFF; border: 1px solid #CAD6EF; color: #293954; font-size: 13px; font-weight: 600; }
.${ROOT} .case-result { padding-left: 18px; border-left: 2px solid var(--ifu-primary); }
.${ROOT} .case-copy .editorial-link { margin-top: 22px; }

.${ROOT} .why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0 40px; border-top: 1px solid var(--ifu-divider); }
.${ROOT} .why-item { display: grid; grid-template-columns: 34px minmax(0,1fr); gap: 14px; padding: 27px 0; border-bottom: 1px solid var(--ifu-divider); }
.${ROOT} .why-marker { margin-top: 1px; width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; background: var(--ifu-pale-blue); color: var(--ifu-hover); }
.${ROOT} .why-item h3 { font-size: 19px; }
.${ROOT} .why-item p { margin-top: 7px; font-size: 16px; }
.${ROOT} .why-summary { margin-top: 34px; padding: 25px 28px; border-radius: 18px; background: var(--ifu-soft); color: var(--ifu-navy); text-align: center; font-size: 17px; line-height: 1.6; }

.${ROOT} .related-list { border-top: 1px solid var(--ifu-border); }
.${ROOT} .related-row { display: grid; grid-template-columns: minmax(0,1fr) 48px; gap: 24px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--ifu-border); transition: color .2s ease, padding .2s ease; }
.${ROOT} .related-row:hover { color: var(--ifu-hover); padding-left: 8px; }
.${ROOT} .related-row h3 { font-size: 20px; }
.${ROOT} .related-row p { margin-top: 6px; max-width: 920px; color: var(--ifu-body); font-size: 16px; }
.${ROOT} .related-arrow { color: var(--ifu-hover); display: grid; place-items: center; }

.${ROOT} .faq-shell { max-width: 1060px; }
.${ROOT} .faq-list { border-top: 1px solid var(--ifu-border); }
.${ROOT} .faq-item { border-bottom: 1px solid var(--ifu-border); }
.${ROOT} .faq-item summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 22px 0; color: var(--ifu-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; line-height: 1.4; font-weight: 500; }
.${ROOT} .faq-item summary::-webkit-details-marker { display: none; }
.${ROOT} .faq-plus { flex: 0 0 auto; width: 32px; height: 32px; border-radius: 50%; border: 1px solid #C7D2EA; display: grid; place-items: center; color: var(--ifu-hover); font-family: Inter, sans-serif; font-size: 20px; transition: transform .2s ease; }
.${ROOT} .faq-item[open] .faq-plus { transform: rotate(45deg); }
.${ROOT} .faq-answer { max-width: 840px; padding: 0 52px 24px 0; }
.${ROOT} .faq-answer p { font-size: 16px; line-height: 1.75; }

.${ROOT} .final-cta { padding: 72px 0; background: linear-gradient(135deg, #17264D 0%, #253F8F 58%, #3659BB 100%); }
.${ROOT} .final-cta-inner { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 60px; align-items: center; }
.${ROOT} .final-cta h2 { color: #FFFFFF; }
.${ROOT} .final-cta p { margin-top: 16px; max-width: 790px; color: #D7DFF1; font-size: 17px; line-height: 1.7; }
.${ROOT} .final-proof { margin-top: 22px; max-width: 820px; color: var(--ifu-light-accent); font-size: 16px; line-height: 1.65; font-weight: 600; }
.${ROOT} .final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 224px; }

@media (max-width: 1120px) {
  .${ROOT} .shell { padding-left: 40px; padding-right: 40px; }
  .${ROOT} .hero-grid { grid-template-columns: minmax(0,1fr) 410px; gap: 36px; }
  .${ROOT} .workflow-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .${ROOT} .workflow-step { min-height: 385px; }
  .${ROOT} .technology-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .${ROOT} .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .${ROOT} .revision-grid, .${ROOT} .dtp-grid, .${ROOT} .regulated-grid, .${ROOT} .global-grid { gap: 48px; }
}

@media (max-width: 900px) {
  .${ROOT} .shell { padding-left: 30px; padding-right: 30px; }
  .${ROOT} .section { padding-top: 80px; padding-bottom: 80px; }
  .${ROOT} .hero { padding: 76px 0; }
  .${ROOT} .hero-grid { grid-template-columns: 1fr; }
  .${ROOT} .hero-copy { max-width: 760px; }
  .${ROOT} .hero-art { justify-self: center; max-width: 510px; }
  .${ROOT} .trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .${ROOT} .trust-item:nth-child(3) { border-left: none; border-top: 1px solid var(--ifu-divider); }
  .${ROOT} .trust-item:nth-child(4) { border-top: 1px solid var(--ifu-divider); }
  .${ROOT} .authority-split, .${ROOT} .revision-grid, .${ROOT} .dtp-grid, .${ROOT} .regulated-grid, .${ROOT} .global-grid { grid-template-columns: 1fr; gap: 46px; }
  .${ROOT} .authority-copy { max-width: none; }
  .${ROOT} .revision-visual { max-width: 620px; width: 100%; }
  .${ROOT} .dtp-visual { order: 2; min-height: 370px; }
  .${ROOT} .format-grid { grid-template-columns: 1fr; }
  .${ROOT} .format-column { padding: 28px 0; }
  .${ROOT} .format-column + .format-column { border-left: none; border-top: 1px solid var(--ifu-divider); }
  .${ROOT} .eifu-note { grid-template-columns: 44px minmax(0,1fr); }
  .${ROOT} .eifu-note .editorial-link { grid-column: 2; }
  .${ROOT} .case-grid { grid-template-columns: 200px minmax(0,1fr); gap: 46px; }
  .${ROOT} .case-number { width: 190px; height: 190px; }
  .${ROOT} .case-number span { font-size: 60px; }
  .${ROOT} .final-cta-inner { grid-template-columns: 1fr; gap: 34px; }
  .${ROOT} .final-actions { flex-direction: row; min-width: 0; }
}

@media (max-width: 768px) {
  .${ROOT} .shell { padding-left: 28px; padding-right: 28px; }
  .${ROOT} .section { padding-top: 72px; padding-bottom: 72px; }
  .${ROOT} .editorial-link, .${ROOT} .regulated-row p, .${ROOT} .faq-item summary span:first-child { overflow-wrap: anywhere; }
  .${ROOT} .hero h1 { font-size: 42px; }
  .${ROOT} .section-heading h2, .${ROOT} .revision-copy > h2, .${ROOT} .dtp-copy > h2, .${ROOT} .regulated-copy > h2, .${ROOT} .global-copy > h2, .${ROOT} .case-copy > h2, .${ROOT} .final-cta h2 { font-size: 32px; }
  .${ROOT} .workflow-grid { grid-template-columns: 1fr; border-radius: 22px; }
  .${ROOT} .workflow-step { min-height: 0; padding: 27px 25px; }
  .${ROOT} .workflow-conclusion { align-items: flex-start; flex-direction: column; }
  .${ROOT} .category-grid { grid-template-columns: 1fr; }
  .${ROOT} .category-item { grid-template-columns: 42px minmax(0,1fr); }
  .${ROOT} .global-list { grid-template-columns: 1fr; }
  .${ROOT} .global-item, .${ROOT} .global-item:nth-child(even) { padding: 23px 0; border-left: none; }
  .${ROOT} .case-grid { grid-template-columns: 1fr; }
  .${ROOT} .case-number { width: 180px; height: 180px; }
  .${ROOT} .why-grid { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .${ROOT} .shell { padding-left: 20px; padding-right: 20px; }
  .${ROOT} .section { padding-top: 68px; padding-bottom: 68px; }
  .${ROOT} .hero { padding: 66px 0 60px; }
  .${ROOT} .hero h1 { font-size: 38px; line-height: 1.25; }
  .${ROOT} .hero-lead { font-size: 18px; }
  .${ROOT} .hero-support { font-size: 16px; }
  .${ROOT} .hero-actions { flex-direction: column; }
  .${ROOT} .hero-actions .cta-button { width: 100%; }
  .${ROOT} .hero-art { max-width: 410px; margin-top: 8px; }
  .${ROOT} .trust-grid { grid-template-columns: 1fr; }
  .${ROOT} .trust-item, .${ROOT} .trust-item + .trust-item, .${ROOT} .trust-item:nth-child(3), .${ROOT} .trust-item:nth-child(4) { border-left: none; border-top: 1px solid var(--ifu-divider); }
  .${ROOT} .trust-item:first-child { border-top: none; }
  .${ROOT} .section-heading { margin-bottom: 38px; }
  .${ROOT} .section-heading--center:not(.section-heading--technical) { text-align: center; }
  .${ROOT} .section-heading--left.section-heading--technical { text-align: left; }
  .${ROOT} .section-heading h2, .${ROOT} .revision-copy > h2, .${ROOT} .dtp-copy > h2, .${ROOT} .regulated-copy > h2, .${ROOT} .global-copy > h2, .${ROOT} .case-copy > h2, .${ROOT} .final-cta h2 { font-size: 30px; }
  .${ROOT} .section-heading p, .${ROOT} .section-lead-left { font-size: 17px; text-align: left; }
  .${ROOT} .section-heading--center > .eyebrow, .${ROOT} .section-heading--center > h2 { text-align: center; }
  .${ROOT} .authority-split { gap: 34px; }
  .${ROOT} .workflow-section .section-heading, .${ROOT} .related-section .section-heading, .${ROOT} .faq-section .section-heading, .${ROOT} .regulated-section .regulated-copy, .${ROOT} .revision-copy, .${ROOT} .dtp-copy { text-align: left; }
  .${ROOT} .workflow-step { padding: 25px 21px; }
  .${ROOT} .workflow-step h3 { font-size: 20px; }
  .${ROOT} .workflow-conclusion { padding: 25px 22px; }
  .${ROOT} .workflow-conclusion h3 { font-size: 21px; }
  .${ROOT} .workflow-conclusion .cta-button { width: 100%; }
  .${ROOT} .revision-visual { padding: 24px 20px; }
  .${ROOT} .dtp-visual { min-height: 0; flex-direction: column; gap: 16px; margin: 0; transform: none; }
  .${ROOT} .doc-frame { width: min(100%, 290px); height: 300px; }
  .${ROOT} .doc-frame--translation, .${ROOT} .doc-frame--final { transform: none; }
  .${ROOT} .dtp-connector { width: 44px; height: 44px; transform: rotate(90deg); flex: 0 0 auto; }
  .${ROOT} .two-col-list { grid-template-columns: 1fr; }
  .${ROOT} .editorial-links-row { flex-direction: column; gap: 14px; }
  .${ROOT} .eifu-note { grid-template-columns: 1fr; padding: 22px; }
  .${ROOT} .eifu-note .editorial-link { grid-column: auto; }
  .${ROOT} .category-link-row { justify-content: flex-start; }
  .${ROOT} .technology-grid { grid-template-columns: 1fr; }
  .${ROOT} .human-validation { flex-direction: column; align-items: flex-start; padding: 24px 22px; }
  .${ROOT} .human-validation .cta-button { width: 100%; }
  .${ROOT} .case-number { margin: 0 auto; }
  .${ROOT} .case-copy { text-align: left; }
  .${ROOT} .global-copy > .eyebrow, .${ROOT} .global-copy > h2, .${ROOT} .case-copy > .eyebrow, .${ROOT} .case-copy > h2, .${ROOT} .final-cta h2 { text-align: center; }
  .${ROOT} .case-process { gap: 8px; }
  .${ROOT} .why-summary { text-align: left; }
  .${ROOT} .related-row { grid-template-columns: minmax(0,1fr); gap: 10px; padding: 22px 0; }
  .${ROOT} .related-row:hover { padding-left: 0; }
  .${ROOT} .related-arrow { justify-content: start; }
  .${ROOT} .faq-item summary { font-size: 18px; align-items: flex-start; }
  .${ROOT} .faq-plus { margin-top: 1px; }
  .${ROOT} .faq-answer { padding-right: 0; }
  .${ROOT} .final-cta { padding: 64px 0; }
  .${ROOT} .final-actions { flex-direction: column; }
  .${ROOT} .final-actions .cta-button { width: 100%; }
}

@media (max-width: 340px) {
  .${ROOT} .hero h1 { font-size: 38px; }
  .${ROOT} .section-heading h2, .${ROOT} .revision-copy > h2, .${ROOT} .dtp-copy > h2, .${ROOT} .regulated-copy > h2, .${ROOT} .global-copy > h2, .${ROOT} .case-copy > h2, .${ROOT} .final-cta h2 { font-size: 30px; }
  .${ROOT} .doc-frame { width: 100%; height: 288px; padding: 21px; }
}

@media (prefers-reduced-motion: reduce) {
  .${ROOT} .cta-button, .${ROOT} .faq-plus, .${ROOT} .related-row { transition: none; }
}
`;
