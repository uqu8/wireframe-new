import React, { useState } from "react";

const Chevron = ({ open = false }) => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform .2s ease" }}
  >
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Arrow = () => (
  <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" width="21" height="21" viewBox="0 0 24 24" fill="none">
    <path d="M5 12.5L9.2 16.5L19 6.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const FileIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M7 3.5H14.3L18.5 7.7V20.5H7V3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M14 3.8V8H18.2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M9.7 12H15.8M9.7 15H15.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6"/>
    <path d="M3.8 12H20.2M12 3.5C14.2 5.8 15.4 8.6 15.4 12C15.4 15.4 14.2 18.2 12 20.5C9.8 18.2 8.6 15.4 8.6 12C8.6 8.6 9.8 5.8 12 3.5Z" stroke="currentColor" strokeWidth="1.6"/>
  </svg>
);

const ShieldIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M12 3.5L19 6.2V11.1C19 15.6 16.2 19.1 12 20.6C7.8 19.1 5 15.6 5 11.1V6.2L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M8.8 12.1L10.9 14.2L15.6 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const SparkIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L13.4 8.6L19 10L13.4 11.4L12 17L10.6 11.4L5 10L10.6 8.6L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M18.5 15.5L19.1 17.9L21.5 18.5L19.1 19.1L18.5 21.5L17.9 19.1L15.5 18.5L17.9 17.9L18.5 15.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

const FactoryIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M4 20V10L9 13V10L14 13V7H19V20H4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M7 16H9M12 16H14M17 11V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const LabIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M9 3.5H15M10 3.5V9L5.5 17.2C4.6 18.8 5.8 20.5 7.6 20.5H16.4C18.2 20.5 19.4 18.8 18.5 17.2L14 9V3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M8.2 15H15.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

const SafetyIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M12 3.8L21 19.2H3L12 3.8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
    <path d="M12 9V13.2M12 16.3V16.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const BuildingIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M5 20.5V5.5H15V20.5M15 9H19V20.5M8 9H10M8 13H10M8 17H10M13 9H13.1M13 13H13.1M13 17H13.1M18 13H18.1M18 17H18.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ReuseIcon = () => (
  <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
    <path d="M7.2 7.4C8.5 5.9 10.2 5 12.2 5C15.9 5 19 8 19 11.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M16.1 8.8L19.2 11.9L21.4 8.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.8 16.6C15.5 18.1 13.8 19 11.8 19C8.1 19 5 16 5 12.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <path d="M7.9 15.2L4.8 12.1L2.6 15.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LinkArrow = ({ href, children, className = "" }) => (
  <a className={`text-link ${className}`} href={href}>
    <span>{children}</span><Arrow />
  </a>
);

const PillButton = ({ href, children, secondary = false }) => (
  <a className={`pill-button ${secondary ? "secondary" : "primary"}`} href={href}>
    <span>{children}</span><Arrow />
  </a>
);

const Eyebrow = ({ children, dark = false }) => (
  <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>
);

const SectionHeading = ({ eyebrow, title, intro, centered = true, dark = false }) => (
  <div className={`heading-group ${centered ? "centered" : "left"} ${dark ? "dark-copy" : ""}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const IconHeading = ({ icon, title, children }) => (
  <div className="why-item">
    <div className="icon-box">{icon}</div>
    <div>
      <h3>{title}</h3>
      <div className="body-copy">{children}</div>
    </div>
  </div>
);

const industryGroups = [
  {
    title: "Pharmaceuticals & Biotechnology",
    icon: <LabIcon />,
    body:
      "Translate GMP and GxP-related procedures, manufacturing and laboratory SOPs, quality assurance and quality control procedures, cleaning and validation procedures, CAPA, deviation, change-control, testing, sampling, and materials-handling documentation.",
    link: "https://www.stepes.com/pharmaceutical-translation-services/",
    linkLabel: "Pharmaceutical Translation Services",
  },
  {
    title: "Medical Devices & Diagnostics",
    icon: <ShieldIcon />,
    body:
      "Support quality management, manufacturing, assembly, testing, inspection, laboratory, supplier quality, complaint-handling, equipment, maintenance, production, and packaging procedures with consistent terminology across related product documentation.",
    link: "https://www.stepes.com/medical-device-translation-services/",
    linkLabel: "Medical Device Translation Services",
  },
  {
    title: "Manufacturing & Industrial",
    icon: <FactoryIcon />,
    body:
      "Translate production, assembly, machine operation, quality control, inspection, maintenance, packaging, process engineering, materials handling, equipment setup, troubleshooting, and operator work instructions across multilingual facilities.",
    link: "https://www.stepes.com/manufacturing-translation-services/",
    linkLabel: "Manufacturing Translation Services",
  },
  {
    title: "Automotive & Mobility",
    icon: <FactoryIcon />,
    body:
      "Maintain multilingual consistency across production-line SOPs, assembly work instructions, inspection, testing, supplier quality, maintenance, equipment instructions, safety processes, and manufacturing quality documentation.",
    link: "https://www.stepes.com/automotive-translation-services/",
    linkLabel: "Automotive Translation Services",
  },
  {
    title: "Chemicals & Materials",
    icon: <SafetyIcon />,
    body:
      "Translate plant operating procedures, manufacturing and processing SOPs, laboratory procedures, chemical handling, equipment operation, quality, testing, EHS, maintenance, and materials-related work instructions.",
    link: "https://www.stepes.com/chemical-translation-services/",
    linkLabel: "Chemical & Materials Translation Services",
  },
  {
    title: "Energy, Oil & Gas, and Utilities",
    icon: <FactoryIcon />,
    body:
      "Support plant and field procedures, upstream and downstream operations, equipment operation, maintenance, inspection, safety, emergency response, operational controls, and technical work instructions for geographically distributed teams.",
    link: "https://www.stepes.com/energy-translation-services/",
    linkLabel: "Energy Translation Services",
  },
  {
    title: "Food & Beverage",
    icon: <SafetyIcon />,
    body:
      "Translate production, sanitation, cleaning, hygiene, quality assurance, inspection, packaging, materials handling, facility processes, and equipment instructions for multilingual operations.",
    link: "https://www.stepes.com/food-beverage-translation-services/",
    linkLabel: "Food & Beverage Translation Services",
  },
  {
    title: "Aerospace, Engineering & Industrial Equipment",
    icon: <FactoryIcon />,
    body:
      "Translate assembly procedures, technical work instructions, equipment procedures, inspection processes, maintenance documentation, quality procedures, engineering instructions, testing, and production documentation.",
    link: "https://www.stepes.com/engineering-translation-services/",
    linkLabel: "Engineering Translation Services",
  },
  {
    title: "Logistics & Supply Chain",
    icon: <GlobeIcon />,
    body:
      "Support receiving, warehousing, inventory control, packaging, shipping, materials handling, supplier processes, distribution, equipment operation, quality, and inspection procedures.",
    link: "https://www.stepes.com/logistics-translation-services/",
    linkLabel: "Logistics Translation Services",
  },
  {
    title: "Corporate, HR, IT & Compliance",
    icon: <BuildingIcon />,
    body:
      "Translate procedures for human resources, employee onboarding, procurement, finance, corporate compliance, information security, privacy, IT operations, business continuity, customer service, and administrative controls.",
    link: "https://www.stepes.com/compliance-translation-services/",
    linkLabel: "Compliance Translation Services",
  },
];

const workflow = [
  {
    title: "Content Analysis",
    body:
      "We review source files, target languages, subject matter, document structure, formatting requirements, previous translations, terminology resources, timelines, and customer-specific workflow needs.",
  },
  {
    title: "Terminology & Translation Memory Setup",
    body:
      "Existing glossaries, translation memories, product terminology, technical references, and customer-approved language are prepared for use during translation.",
  },
  {
    title: "Translation",
    body:
      "Professional linguists translate the SOP using the required technical references and translation technologies, with AI-assisted, machine translation, translation-memory, or human-first workflows selected according to project needs.",
  },
  {
    title: "Linguistic & Subject-Matter Review",
    body:
      "Translated content is reviewed for meaning, terminology, procedural clarity, consistency, grammar, and fluency, with appropriately qualified reviewers assigned where specialized knowledge is required.",
  },
  {
    title: "Translation Quality Assurance",
    body:
      "Automated and human QA processes help identify issues involving terminology, numbers, units, omissions, inconsistencies, formatting, tags, repeated content, names, and references.",
  },
  {
    title: "Formatting & Delivery",
    body:
      "Translated SOPs are prepared in the required file format with attention to document structure, numbering, tables, headings, graphics, warnings, and other layout elements.",
  },
  {
    title: "Translation Memory Update",
    body:
      "Approved translations can be added to translation memory for reuse across future SOP updates, work instructions, training materials, and related documentation.",
  },
];

const qaItems = [
  "Qualified professional linguists",
  "Industry and subject-matter specialization",
  "Translation memory",
  "Terminology management",
  "Structured linguistic review",
  "Automated quality checks",
  "Secure file handling",
  "Controlled project access",
  "Confidential project workflows",
  "Version-aware translation processes",
  "Repeatable quality controls",
];

const resources = [
  {
    title: "How to Translate SOPs for Multilingual Operations",
    body: "Prepare SOPs for translation, manage terminology, select review workflows, and maintain consistency across languages.",
    href: "https://www.stepes.com/resources/translation-guides/how-to-translate-sops-for-multilingual-operations/",
  },
  {
    title: "SOP Translation Quality Checklist",
    body: "Review terminology, procedural meaning, numbers, formatting, completeness, and multilingual consistency.",
    href: "https://www.stepes.com/resources/translation-guides/sop-translation-quality-checklist/",
  },
  {
    title: "SOP vs. Work Instruction: What’s the Difference?",
    body: "Understand how SOPs and work instructions differ, how they work together, and what to consider when translating both.",
    href: "https://www.stepes.com/resources/translation-guides/sop-vs-work-instruction/",
  },
  {
    title: "Managing Multilingual SOP Revisions and Version Control",
    body: "See how translation memory and terminology management can streamline recurring SOP updates.",
    href: "https://www.stepes.com/resources/translation-guides/multilingual-sop-version-control/",
  },
  {
    title: "AI for SOP Translation: Where Human Review Matters",
    body: "Explore how AI can accelerate SOP translation and where professional linguistic and subject-matter review still add essential value.",
    href: "https://www.stepes.com/resources/translation-guides/ai-for-sop-translation/",
  },
];

const faqs = [
  {
    q: "What Is SOP Translation?",
    a: "SOP translation is the professional translation of standard operating procedures from one language into another while preserving procedural meaning, terminology, sequence, responsibilities, warnings, measurements, references, and document structure. Effective SOP translation requires more than word-for-word language conversion because the translated procedure must communicate the same operational instructions clearly to its intended users.",
  },
  {
    q: "What Is the Difference Between an SOP and a Work Instruction?",
    a: "An SOP generally defines a standardized process, its responsibilities, requirements, and expected outcomes. A work instruction usually provides more detailed guidance for performing a particular task within that process. For example, an SOP might define an equipment-maintenance process, while a related work instruction provides detailed steps for completing a specific maintenance operation. Stepes translates both so related multilingual documentation can remain consistent.",
  },
  {
    q: "What Types of SOPs Can Stepes Translate?",
    a: "Stepes translates standard operating procedures across manufacturing, pharmaceuticals, biotechnology, medical devices, diagnostics, chemicals and materials, automotive, energy, oil and gas, utilities, food and beverage, aerospace, logistics, engineering, corporate operations, HR, IT, quality, safety, and other fields. We also translate supporting work instructions, checklists, forms, quality procedures, training materials, maintenance documentation, and related controlled content.",
  },
  {
    q: "How Does Stepes Maintain Terminology Consistency Across SOPs?",
    a: "Stepes uses terminology management, translation memory, customer glossaries, previous translations, and linguistic QA to help maintain consistent language across procedures. Approved translations for important technical, product, scientific, organizational, and process terminology can be reused throughout a multilingual SOP program.",
  },
  {
    q: "Can Stepes Translate Updated Versions of Existing SOPs?",
    a: "Yes. Translation memory enables Stepes to compare new source content against previously translated material and reuse eligible approved translations. This is particularly valuable for recurring SOP revisions because teams can focus translation and review effort on new or changed content instead of unnecessarily retranslating the entire procedure.",
  },
  {
    q: "Does Stepes Use AI for SOP Translation?",
    a: "Yes. Stepes uses AI translation technologies, translation memory, terminology automation, workflow automation, and quality tools where appropriate. The level of professional human translation and review is determined by the content, subject matter, languages, quality requirements, and intended use. Technical, regulated, safety-related, or other high-value content can receive additional professional linguistic and subject-matter review.",
  },
  {
    q: "How Does Stepes Translate SOPs for Regulated Industries?",
    a: "Stepes uses structured translation workflows that combine qualified linguists, subject-matter expertise, terminology management, translation memory, linguistic review, quality assurance, secure file handling, and version control. For pharmaceutical, biotechnology, medical device, diagnostics, and other quality-sensitive environments, workflows can be configured around the organization’s specific translation, review, documentation, and quality requirements.",
  },
  {
    q: "Can You Preserve the Formatting of Our SOPs?",
    a: "Yes. Stepes supports multilingual formatting for numbered procedures, tables, headers and footers, revision histories, warnings, diagrams, forms, cross-references, checklists, and other document elements. Formatting requirements are reviewed as part of project setup so translated files can be delivered in a practical, usable format.",
  },
  {
    q: "How Many Languages Does Stepes Support?",
    a: "Stepes provides professional translation services in more than 100 languages, including major European, Asian, Middle Eastern, Latin American, and African languages. Organizations can centralize multilingual SOP programs through Stepes rather than coordinating separate translation processes for each language or location.",
  },
];

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  return (
    <div className="faq-item">
      <button
        type="button"
        className="faq-question"
        aria-expanded={open}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span>{item.q}</span>
        <Chevron open={open} />
      </button>
      {open ? <div className="faq-answer">{item.a}</div> : null}
    </div>
  );
}

function HeroIllustration() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="hero-art-label">MULTILINGUAL CONTROLLED PROCEDURES</div>
      <svg viewBox="0 0 560 420">
        <rect x="34" y="42" width="288" height="330" rx="24" fill="#FFFFFF" stroke="#D7DAE0" strokeWidth="2"/>
        <rect x="60" y="72" width="116" height="14" rx="7" fill="#C11D63" opacity=".16"/>
        <rect x="60" y="104" width="212" height="9" rx="4.5" fill="#59606B" opacity=".55"/>
        <rect x="60" y="126" width="178" height="9" rx="4.5" fill="#59606B" opacity=".34"/>
        <rect x="60" y="168" width="26" height="26" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5"/>
        <path d="M68 181L74 187L82 175" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="102" y="171" width="160" height="8" rx="4" fill="#59606B" opacity=".50"/>
        <rect x="102" y="188" width="124" height="8" rx="4" fill="#59606B" opacity=".30"/>
        <rect x="60" y="225" width="26" height="26" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5"/>
        <path d="M68 238L74 244L82 232" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="102" y="228" width="154" height="8" rx="4" fill="#59606B" opacity=".50"/>
        <rect x="102" y="245" width="138" height="8" rx="4" fill="#59606B" opacity=".30"/>
        <rect x="60" y="282" width="26" height="26" rx="8" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5"/>
        <path d="M68 295L74 301L82 289" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="102" y="285" width="146" height="8" rx="4" fill="#59606B" opacity=".50"/>
        <rect x="102" y="302" width="112" height="8" rx="4" fill="#59606B" opacity=".30"/>

        <path d="M323 206H390" stroke="#8B9099" strokeWidth="2" strokeLinecap="round"/>
        <path d="M378 195L391 206L378 217" fill="none" stroke="#8B9099" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="440" cy="206" r="78" fill="#FFFFFF" stroke="#D7DAE0" strokeWidth="2"/>
        <ellipse cx="440" cy="206" rx="34" ry="78" fill="none" stroke="#59606B" strokeWidth="1.7" opacity=".78"/>
        <path d="M362 206H518M376 170H504M376 242H504" fill="none" stroke="#59606B" strokeWidth="1.7" opacity=".78"/>
        <circle cx="476" cy="152" r="23" fill="#C11D63"/>
        <text x="476" y="158" fontSize="17" fontWeight="600" textAnchor="middle" fill="#FFFFFF">文</text>
        <circle cx="497" cy="262" r="23" fill="#7A1542"/>
        <text x="497" y="268" fontSize="16" fontWeight="600" textAnchor="middle" fill="#FFFFFF">ES</text>
        <circle cx="389" cy="276" r="23" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5"/>
        <text x="389" y="282" fontSize="15" fontWeight="600" textAnchor="middle" fill="#9F1D55">DE</text>

        <rect x="350" y="54" width="160" height="58" rx="16" fill="#FFFFFF" stroke="#E2E4E8" strokeWidth="1.5"/>
        <text x="368" y="78" fontSize="12" fontWeight="600" fill="#C11D63">VERSION 6.2</text>
        <text x="368" y="98" fontSize="14" fill="#444A55">Approved terminology</text>

        <rect x="355" y="326" width="174" height="58" rx="16" fill="#FFFFFF" stroke="#E2E4E8" strokeWidth="1.5"/>
        <circle cx="376" cy="355" r="9" fill="#FDF2F7"/>
        <path d="M372 355L375 358L381 351" fill="none" stroke="#C11D63" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <text x="394" y="351" fontSize="12" fontWeight="600" fill="#444A55">QA complete</text>
        <text x="394" y="369" fontSize="12" fill="#727985">Structure preserved</text>
      </svg>
    </div>
  );
}

export default function SOPTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --blush-accent: #F2A7C6;
          --ink: #20242B;
          --copy: #4A505A;
          --muted: #6B7280;
          --line: #E4E6EA;
          --soft: #F7F8FA;
          --white: #FFFFFF;
          --radius-lg: 30px;
          --radius-md: 22px;
          --shadow: 0 18px 55px rgba(28, 31, 36, .08);
          --max: 1280px;
        }

        * { box-sizing: border-box; }

        html { scroll-behavior: smooth; }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--ink);
          background: var(--white);
        }

        .stepes-page {
          overflow-x: hidden;
          background: var(--white);
          color: var(--ink);
        }

        .shell {
          width: min(var(--max), calc(100% - 112px));
          margin: 0 auto;
        }

        .section {
          padding: 96px 0;
        }

        .section.dense {
          padding: 80px 0;
        }

        .soft-section {
          background: var(--soft);
        }

        .blush-section {
          background: var(--blush);
        }

        .dark-section {
          background: #23262D;
          color: var(--white);
        }

        .eyebrow {
          color: var(--magenta);
          font-size: 11px !important;
          line-height: 1.3 !important;
          font-weight: 600 !important;
          letter-spacing: .13em !important;
          text-transform: uppercase;
          margin: 0 0 16px !important;
        }

        .eyebrow-dark {
          color: var(--blush-accent) !important;
        }

        h1, h2, h3 {
          margin: 0;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        h1 {
          font-size: 48px;
          line-height: 1.06;
          max-width: 670px;
        }

        h2 {
          font-size: 36px;
          line-height: 1.12;
        }

        h3 {
          font-size: 24px;
          line-height: 1.2;
        }

        p, li, .body-copy, .faq-answer, .industry-copy, .resource-copy {
          font-size: 16px;
          line-height: 1.72;
          font-weight: 400;
          color: var(--copy);
        }

        .lead {
          font-size: 18px;
          line-height: 1.67;
          color: #505762;
          max-width: 690px;
        }

        .section-intro {
          font-size: 18px;
          line-height: 1.7;
          max-width: 800px;
          margin: 20px auto 0;
          color: var(--copy);
        }

        .dark-copy h2,
        .dark-copy .section-intro { color: var(--white); }

        .heading-group {
          margin-bottom: 48px;
        }

        .heading-group.centered {
          text-align: center;
        }

        .heading-group.centered h2 {
          max-width: 900px;
          margin: 0 auto;
        }

        .heading-group.left {
          text-align: left;
        }

        .heading-group.left .section-intro {
          margin-left: 0;
          margin-right: 0;
        }

        .hero {
          padding: 104px 0 96px;
          background:
            radial-gradient(circle at 90% 10%, rgba(193,29,99,.07), transparent 31%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr);
          gap: 72px;
          align-items: center;
        }

        .hero-copy .lead {
          margin: 24px 0 30px;
        }

        .hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 22px;
          margin: 0 0 30px;
          padding: 0;
          list-style: none;
        }

        .hero-points li {
          display: flex;
          gap: 9px;
          align-items: center;
          font-size: 16px;
          color: #414852;
        }

        .hero-points svg { color: var(--magenta); flex: 0 0 auto; }

        .cta-row {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          align-items: center;
        }

        .pill-button {
          min-height: 48px;
          padding: 12px 22px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }

        .pill-button.primary,
        .pill-button.primary:link,
        .pill-button.primary:visited,
        .pill-button.primary:hover,
        .pill-button.primary:active,
        .pill-button.primary:focus,
        .pill-button.primary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
          border: 1px solid var(--magenta);
        }

        .pill-button.primary *,
        .pill-button.primary:visited *,
        .pill-button.primary:hover *,
        .pill-button.primary:active *,
        .pill-button.primary:focus * {
          color: #FFFFFF !important;
          stroke: #FFFFFF !important;
        }

        .pill-button.primary:hover {
          background: var(--magenta-dark);
          border-color: var(--magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 10px 24px rgba(193,29,99,.18);
        }

        .pill-button.secondary,
        .pill-button.secondary:link,
        .pill-button.secondary:visited {
          color: var(--ink);
          border: 1px solid #D7DADF;
          background: #FFFFFF;
        }

        .pill-button.secondary:hover {
          border-color: #BEC2C9;
          transform: translateY(-1px);
        }

        .pill-button:focus-visible,
        .text-link:focus-visible,
        .faq-question:focus-visible {
          outline: 3px solid rgba(193,29,99,.22);
          outline-offset: 3px;
        }

        .hero-art {
          border: 1px solid #ECEEF1;
          background: linear-gradient(145deg, #FAFAFB 0%, #FDF2F7 100%);
          border-radius: var(--radius-lg);
          padding: 20px 20px 16px;
          box-shadow: var(--shadow);
          min-height: 475px;
        }

        .hero-art-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .12em;
          color: var(--magenta);
          text-align: right;
          padding: 6px 6px 0;
        }

        .hero-art svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .trust-wrap {
          background: #FFFFFF;
        }

        .trust-strip {
          border-top: 1px solid #DDE0E5;
          border-bottom: 1px solid #DDE0E5;
          padding: 28px 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .trust-item {
          padding: 0 26px;
          text-align: center;
        }

        .trust-item + .trust-item {
          border-left: 1px solid #E2E4E8;
        }

        .trust-item strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          color: #272B32;
          margin-bottom: 5px;
        }

        .trust-item span {
          font-size: 14px;
          line-height: 1.45;
          color: #727985;
        }

        .editorial-split {
          display: grid;
          grid-template-columns: .82fr 1.18fr;
          gap: 88px;
          align-items: start;
        }

        .editorial-split .heading-group {
          position: sticky;
          top: 32px;
          margin-bottom: 0;
        }

        .editorial-content > p:first-child {
          margin-top: 0;
        }

        .bullets {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 30px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .bullets li {
          position: relative;
          padding-left: 20px;
        }

        .bullets li::before {
          content: "";
          position: absolute;
          left: 0;
          top: .67em;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--magenta);
        }

        .three-column {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .three-column > div {
          padding: 34px 36px;
        }

        .three-column > div + div {
          border-left: 1px solid var(--line);
        }

        .three-column h3 {
          margin-bottom: 14px;
        }

        .section-summary {
          max-width: 880px;
          margin: 24px 0 0;
          padding-top: 0;
          border-top: 0;
          text-align: left;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          margin-top: 16px;
        }

        .text-link:visited { color: var(--magenta); }

        .text-link:hover {
          color: var(--magenta-dark);
        }

        .text-link:hover svg {
          transform: translateX(2px);
        }

        .text-link svg {
          transition: transform .2s ease;
        }

        .ecosystem-panel {
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          padding: 42px;
          background: #FFFFFF;
        }

        .ecosystem-flow {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 12px;
          margin-top: 34px;
          align-items: center;
        }

        .eco-node {
          min-height: 118px;
          border: 1px solid #E2E4E8;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 16px;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 600;
          background: #FFFFFF;
          position: relative;
        }

        .eco-node + .eco-node::before {
          content: "→";
          position: absolute;
          left: -18px;
          color: #9AA0A9;
          font-weight: 400;
        }

        .eco-node.accent {
          background: var(--blush);
          border-color: #F0CADC;
          color: #7E214A;
        }

        .ecosystem-note {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 44px;
          margin-top: 34px;
          padding-top: 30px;
          border-top: 1px solid var(--line);
        }

        .industry-list {
          border-top: 1px solid var(--line);
        }

        .industry-row {
          display: grid;
          grid-template-columns: 60px minmax(210px, .72fr) minmax(0, 1.55fr);
          gap: 28px;
          align-items: start;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }

        .industry-row .icon-box {
          margin-top: 1px;
        }

        .industry-row h3 {
          padding-top: 7px;
        }

        .industry-copy p {
          margin: 0;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          border: 1px solid #E2E4E8;
          border-radius: 15px;
          background: #FFFFFF;
          color: var(--magenta);
        }

        .feature-split {
          display: grid;
          grid-template-columns: minmax(0, .96fr) minmax(0, 1.04fr);
          gap: 72px;
          align-items: center;
        }

        .feature-panel {
          border: 1px solid var(--line);
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          padding: 40px;
        }

        .feature-panel.dark {
          background: #2B2F37;
          border-color: rgba(255,255,255,.10);
        }

        .feature-panel.dark h3,
        .feature-panel.dark p,
        .feature-panel.dark li {
          color: #FFFFFF;
        }

        .feature-panel p:last-child {
          margin-bottom: 0;
        }

        .compact-list {
          list-style: none;
          margin: 24px 0 0;
          padding: 0;
          display: grid;
          gap: 12px;
        }

        .compact-list li {
          display: flex;
          gap: 11px;
          align-items: flex-start;
        }

        .compact-list li svg {
          color: var(--magenta);
          margin-top: 3px;
          flex: 0 0 auto;
        }

        .dark-section .compact-list li svg {
          color: var(--blush-accent);
        }

        .dark-section p,
        .dark-section li {
          color: #E4E7EB;
        }

        .dark-section .text-link,
        .dark-section .text-link:visited {
          color: var(--blush-accent);
        }

        .dark-section .text-link:hover {
          color: #FFFFFF;
        }

        .revision-panel {
          display: grid;
          grid-template-columns: 1.08fr .92fr;
          gap: 72px;
          align-items: stretch;
        }

        .revision-visual {
          border-radius: var(--radius-lg);
          background: #FFFFFF;
          border: 1px solid var(--line);
          padding: 34px;
        }

        .revision-kicker {
          font-size: 11px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--magenta);
          margin-bottom: 10px;
        }

        .revision-message {
          font-size: 22px;
          line-height: 1.3;
          font-weight: 600;
          color: var(--ink);
          margin: 0 0 24px;
        }

        .version-row {
          display: grid;
          grid-template-columns: 72px 1fr 110px;
          gap: 18px;
          align-items: center;
          padding: 17px 0;
          border-bottom: 1px solid var(--line);
        }

        .version-row:last-child { border-bottom: 0; }

        .version-tag {
          font-size: 14px;
          font-weight: 600;
          color: #5F6671;
        }

        .version-bar {
          height: 12px;
          border-radius: 999px;
          background: #E9EBEE;
          overflow: hidden;
          position: relative;
        }

        .version-bar span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: #D3D6DB;
        }

        .version-row.changed .version-bar span {
          background: var(--magenta);
        }

        .version-state {
          font-size: 14px;
          color: #666D77;
          text-align: right;
        }

        .revision-benefits {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
          margin-top: 28px;
        }

        .revision-benefit {
          padding-top: 18px;
          border-top: 2px solid #E1E3E6;
        }

        .revision-benefit h3 {
          font-size: 20px;
          margin-bottom: 8px;
        }

        .workflow-wrap {
          border-top: 1px solid rgba(255,255,255,.14);
          margin-top: 18px;
        }

        .workflow-row {
          display: grid;
          grid-template-columns: 58px minmax(210px, .6fr) minmax(0, 1.4fr);
          gap: 28px;
          padding: 26px 0;
          border-bottom: 1px solid rgba(255,255,255,.14);
          align-items: start;
        }

        .step-num {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          border: 1px solid rgba(242,167,198,.5);
          color: var(--blush-accent);
          font-weight: 600;
          font-size: 14px;
        }

        .workflow-row h3 {
          color: #FFFFFF;
          padding-top: 7px;
        }

        .workflow-row p {
          margin: 0;
          color: #DDE1E6;
        }

        .format-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .format-elements {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .format-element {
          min-height: 62px;
          padding: 18px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          font-size: 16px;
          color: #4B525C;
          display: flex;
          align-items: center;
        }

        .enterprise-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .enterprise-item {
          padding: 30px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: #FFFFFF;
          min-height: 220px;
        }

        .enterprise-item h3 {
          margin: 18px 0 10px;
        }

        .enterprise-item svg { color: var(--magenta); }

        .security-grid {
          display: grid;
          grid-template-columns: .86fr 1.14fr;
          gap: 70px;
          align-items: start;
        }

        .qa-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #E0E2E6;
        }

        .qa-item {
          min-height: 58px;
          padding: 15px 14px 15px 0;
          border-bottom: 1px solid #E0E2E6;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 16px;
          color: #444B55;
        }

        .qa-item:nth-child(odd) {
          padding-right: 28px;
        }

        .qa-item svg {
          color: var(--magenta);
          flex: 0 0 auto;
        }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
        }

        .why-item {
          padding: 4px 0 28px;
          border-bottom: 1px solid var(--line);
        }

        .why-item h3 {
          margin: 16px 0 10px;
        }

        .resource-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
        }

        .resource-item {
          padding: 28px 30px 28px 0;
          border-bottom: 1px solid var(--line);
        }

        .resource-item:nth-child(odd) {
          padding-right: 42px;
        }

        .resource-item:nth-child(even) {
          padding-left: 42px;
          border-left: 1px solid var(--line);
        }

        .resource-item h3 {
          font-size: 22px;
          margin-bottom: 11px;
        }

        .resource-copy {
          margin: 0;
        }

        .faq-panel {
          max-width: 920px;
          margin: 0 auto;
          border-top: 1px solid var(--line);
        }

        .faq-item {
          border-bottom: 1px solid var(--line);
        }

        .faq-question {
          width: 100%;
          min-height: 76px;
          padding: 20px 4px;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          text-align: left;
          background: transparent;
          border: 0;
          color: var(--ink);
          font: inherit;
          font-size: 18px;
          line-height: 1.45;
          font-weight: 600;
          cursor: pointer;
        }

        .faq-question svg {
          color: var(--magenta);
          flex: 0 0 auto;
        }

        .faq-answer {
          padding: 0 42px 24px 4px;
          max-width: 840px;
        }

        .final-cta-wrap {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .final-cta {
          border-radius: var(--radius-lg);
          background: var(--burgundy);
          color: #FFFFFF;
          padding: 60px 64px;
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) auto;
          gap: 54px;
          align-items: center;
        }

        .final-cta h2 {
          color: #FFFFFF;
          max-width: 720px;
          margin-bottom: 18px;
        }

        .final-cta p {
          color: #F5E7EE;
          margin: 0;
          max-width: 760px;
        }

        .final-cta .pill-button.primary,
        .final-cta .pill-button.primary:link,
        .final-cta .pill-button.primary:visited,
        .final-cta .pill-button.primary:hover,
        .final-cta .pill-button.primary:active,
        .final-cta .pill-button.primary:focus {
          background: #FFFFFF;
          color: var(--burgundy) !important;
          border-color: #FFFFFF;
        }

        .final-cta .pill-button.primary *,
        .final-cta .pill-button.primary:hover *,
        .final-cta .pill-button.primary:visited * {
          color: var(--burgundy) !important;
          stroke: var(--burgundy) !important;
        }

        .final-cta .pill-button.secondary,
        .final-cta .pill-button.secondary:link,
        .final-cta .pill-button.secondary:visited {
          background: transparent;
          color: #FFFFFF;
          border-color: rgba(255,255,255,.55);
        }

        .final-cta .pill-button.secondary *,
        .final-cta .pill-button.secondary:visited * {
          color: #FFFFFF;
          stroke: #FFFFFF;
        }

        @media (max-width: 1120px) {
          .shell { width: min(var(--max), calc(100% - 80px)); }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(380px, .85fr); gap: 48px; }
          .industry-row { grid-template-columns: 54px minmax(200px, .75fr) minmax(0, 1.25fr); }
          .ecosystem-flow { grid-template-columns: repeat(3, 1fr); }
          .eco-node + .eco-node::before { display: none; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 900px) {
          .shell { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section.dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }

          .hero { padding: 88px 0 80px; }
          .hero-grid,
          .feature-split,
          .revision-panel,
          .format-grid,
          .security-grid,
          .editorial-split {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .hero-copy {
            text-align: center;
          }

          .hero-copy h1,
          .hero-copy .lead {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-points {
            justify-content: center;
          }

          .cta-row {
            justify-content: center;
          }

          .hero-art {
            max-width: 620px;
            margin: 0 auto;
            min-height: auto;
          }

          .trust-strip {
            grid-template-columns: repeat(2, 1fr);
          }

          .trust-item:nth-child(3) {
            border-left: 0;
          }

          .trust-item:nth-child(n+3) {
            margin-top: 22px;
            padding-top: 22px;
            border-top: 1px solid var(--line);
          }

          .editorial-split .heading-group {
            position: static;
            text-align: center;
          }

          .editorial-split .heading-group h2 {
            max-width: 760px;
            margin: 0 auto;
          }

          .editorial-split .heading-group .section-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .feature-split .heading-group.left,
          .format-grid .heading-group.left,
          .security-grid .heading-group.left {
            text-align: center;
          }

          .feature-split .heading-group.left h2,
          .format-grid .heading-group.left h2,
          .security-grid .heading-group.left h2 {
            margin-left: auto;
            margin-right: auto;
          }

          .feature-split .heading-group.left .section-intro,
          .format-grid .heading-group.left .section-intro,
          .security-grid .heading-group.left .section-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .three-column {
            grid-template-columns: 1fr;
          }

          .three-column > div + div {
            border-left: 0;
            border-top: 1px solid var(--line);
          }

          .industry-row {
            grid-template-columns: 52px 1fr;
            gap: 20px 24px;
          }

          .industry-row .industry-copy {
            grid-column: 2;
          }

          .workflow-row {
            grid-template-columns: 52px 1fr;
            gap: 18px 22px;
          }

          .workflow-row p {
            grid-column: 2;
          }

          .enterprise-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .resource-grid {
            grid-template-columns: 1fr;
          }

          .resource-item,
          .resource-item:nth-child(odd),
          .resource-item:nth-child(even) {
            padding: 26px 0;
            border-left: 0;
          }

          .final-cta {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .final-cta h2,
          .final-cta p {
            margin-left: auto;
            margin-right: auto;
          }

          .final-cta .cta-row {
            justify-content: center;
          }
        }

        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }

          .section { padding: 68px 0; }
          .section.dense { padding: 64px 0; }

          h1 {
            font-size: 38px;
            line-height: 1.08;
          }

          h2 {
            font-size: 30px;
            line-height: 1.14;
          }

          h3 {
            font-size: 20px;
          }

          .lead,
          .section-intro {
            font-size: 17px;
          }

          p, li, .body-copy, .faq-answer, .industry-copy, .resource-copy {
            font-size: 16px;
          }

          .hero {
            padding: 72px 0 68px;
          }

          .hero-grid { gap: 38px; }

          .hero-points {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: start;
            width: fit-content;
            margin-left: auto;
            margin-right: auto;
          }

          .cta-row {
            width: 100%;
            gap: 10px;
          }

          .pill-button {
            width: 100%;
            min-height: 48px;
          }

          .hero-art {
            padding: 12px;
            border-radius: 24px;
          }

          .hero-art-label {
            text-align: center;
            padding-top: 10px;
          }

          .trust-strip {
            grid-template-columns: 1fr 1fr;
            padding: 22px 0;
          }

          .trust-item {
            padding: 0 12px;
          }

          .trust-item strong {
            font-size: 16px;
          }

          .trust-item span {
            font-size: 14px;
          }

          .heading-group {
            margin-bottom: 38px;
          }

          .heading-group.centered,
          .editorial-split .heading-group {
            text-align: center;
          }

          .heading-group.left {
            text-align: left;
          }

          .heading-group.left .section-intro {
            margin-left: 0;
            margin-right: 0;
          }

          .editorial-split .heading-group.left {
            text-align: center;
          }

          .editorial-split .heading-group.left .section-intro {
            margin-left: auto;
            margin-right: auto;
          }

          .editorial-content,
          .feature-split > div:not(.heading-group),
          .revision-panel > div,
          .format-grid > div,
          .security-grid > div {
            text-align: left;
          }

          .bullets {
            grid-template-columns: 1fr;
          }

          .three-column > div {
            padding: 28px 0;
          }

          .ecosystem-panel {
            padding: 26px 20px;
            border-radius: 24px;
          }

          .ecosystem-flow {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .eco-node {
            min-height: 70px;
          }

          .ecosystem-note {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .industry-row {
            grid-template-columns: 48px 1fr;
            padding: 25px 0;
          }

          .industry-row h3 {
            padding-top: 5px;
          }

          .industry-row .industry-copy {
            grid-column: 1 / -1;
          }

          .feature-panel {
            padding: 28px 22px;
            border-radius: 24px;
          }

          .revision-visual {
            padding: 24px 18px;
            border-radius: 24px;
          }

          .version-row {
            grid-template-columns: 58px 1fr;
          }

          .version-state {
            grid-column: 2;
            text-align: left;
            margin-top: -8px;
          }

          .revision-benefits {
            grid-template-columns: 1fr;
          }

          .workflow-row {
            grid-template-columns: 44px 1fr;
            gap: 16px;
            padding: 24px 0;
          }

          .workflow-row p {
            grid-column: 1 / -1;
          }

          .step-num {
            width: 38px;
            height: 38px;
          }

          .format-elements,
          .enterprise-grid,
          .qa-grid,
          .why-grid {
            grid-template-columns: 1fr;
          }

          .enterprise-grid {
            border-left: 0;
          }

          .enterprise-item {
            min-height: auto;
            padding: 26px 0;
            border-right: 0;
          }

          .qa-item:nth-child(odd) {
            padding-right: 0;
          }

          .resource-item h3 {
            font-size: 20px;
          }

          .faq-question {
            min-height: 70px;
            padding: 18px 0;
            font-size: 17px;
          }

          .faq-answer {
            padding: 0 30px 22px 0;
          }

          .final-cta-wrap {
            padding: 72px 0 80px;
          }

          .final-cta {
            padding: 44px 22px;
            border-radius: 24px;
          }
        }

        @media (max-width: 360px) {
          .trust-strip {
            grid-template-columns: 1fr;
          }

          .trust-item + .trust-item,
          .trust-item:nth-child(3) {
            border-left: 0;
          }

          .trust-item:nth-child(n+2) {
            margin-top: 18px;
            padding-top: 18px;
            border-top: 1px solid var(--line);
          }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>SOP Translation Services</h1>
            <p className="lead">
              Translate standard operating procedures, work instructions, quality procedures, safety documentation, and other controlled content accurately across languages with Stepes. Our professional SOP translation services combine industry-specialized linguists, terminology management, translation memory, AI-powered workflows, and expert human review to help global organizations maintain clear, consistent procedures across locations, languages, teams, and document revisions.
            </p>
            <ul className="hero-points">
              <li><CheckIcon /> Industry-specialized linguists</li>
              <li><CheckIcon /> Terminology and translation memory</li>
              <li><CheckIcon /> AI-powered workflows with expert review</li>
              <li><CheckIcon /> Secure enterprise processes</li>
            </ul>
            <div className="cta-row">
              <PillButton href="https://app.stepes.com/quote/">Get a Translation Quote</PillButton>
              <PillButton href="https://www.stepes.com/contact-us/" secondary>Talk to an Expert</PillButton>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <div className="trust-wrap">
        <div className="shell">
          <div className="trust-strip">
            <div className="trust-item"><strong>100+ Languages</strong><span>Centralized multilingual delivery</span></div>
            <div className="trust-item"><strong>Industry-Specialized Linguists</strong><span>Technical and subject-matter expertise</span></div>
            <div className="trust-item"><strong>ISO-Certified Quality</strong><span>Structured translation processes</span></div>
            <div className="trust-item"><strong>AI + Human Translation</strong><span>Technology with expert oversight</span></div>
          </div>
        </div>
      </div>

      <section className="section" id="global-operations">
        <div className="shell editorial-split">
          <SectionHeading
            title="Translate SOPs for Consistent Global Operations"
            intro="Standard operating procedures turn organizational knowledge into repeatable action."
            centered={false}
          />
          <div className="editorial-content">
            <p>
              They define how work should be performed, who is responsible, which requirements apply, and how teams maintain quality, safety, and operational consistency.
            </p>
            <p>
              When those procedures are used across multiple countries and languages, translation must preserve more than individual words. Process sequence, technical terminology, warnings, responsibilities, measurements, references, and instructions all need to remain clear and consistent.
            </p>
            <p>
              Stepes provides professional standard operating procedure (SOP) translation and localization services for organizations operating across multilingual facilities, workforces, laboratories, offices, production environments, and supply chains. We translate SOPs with the subject-matter expertise and linguistic controls required for operational documentation that people depend on every day.
            </p>
            <ul className="bullets">
              <li>Standard operating procedures</li>
              <li>Work instructions</li>
              <li>Process instructions</li>
              <li>Quality procedures</li>
              <li>Manufacturing procedures</li>
              <li>Laboratory procedures</li>
              <li>Safety and EHS procedures</li>
              <li>Equipment operating procedures</li>
              <li>Inspection procedures</li>
              <li>Maintenance procedures</li>
              <li>Cleaning and sanitation procedures</li>
              <li>Administrative and corporate procedures</li>
              <li>Training-linked procedures</li>
              <li>Supporting forms and checklists</li>
            </ul>
            <p style={{ marginTop: 28 }}>
              Whether you need to translate a single procedure or maintain hundreds of controlled documents across languages, Stepes helps you build a more consistent multilingual operating environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="sop-work-instructions">
        <div className="shell">
          <SectionHeading
            title="SOP and Work Instruction Translation"
            intro="SOPs and work instructions are closely connected, but they serve different operational purposes."
          />
          <div className="three-column">
            <div>
              <h3>Standard Operating Procedures</h3>
              <p>
                SOPs define standardized processes, responsibilities, requirements, controls, and expected outcomes. Stepes translates operational, technical, quality, safety, laboratory, manufacturing, administrative, and regulated SOPs while preserving procedural meaning and terminology.
              </p>
            </div>
            <div>
              <h3>Work Instructions</h3>
              <p>
                Work instructions provide more detailed, task-level guidance, such as assembly steps, equipment operation, laboratory tests, inspections, maintenance activities, and production sequences. Their numbered steps, diagrams, warnings, tables, and equipment references require both linguistic and technical precision.
              </p>
            </div>
            <div>
              <h3>Process and Quality Procedures</h3>
              <p>
                Stepes also translates supporting procedures for document control, quality assurance, inspections, audits, supplier management, corrective and preventive actions, deviation handling, change control, maintenance, testing, and other operational processes.
              </p>
              <LinkArrow href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</LinkArrow>
            </div>
          </div>
          <p className="section-summary">
            By translating SOPs and their supporting documentation together, organizations can maintain greater consistency between high-level requirements and the detailed instructions employees use to perform their work.
          </p>
        </div>
      </section>

      <section className="section" id="controlled-document-ecosystem">
        <div className="shell">
          <SectionHeading
            title="Keep Related Procedures and Documents Aligned Across Languages"
            intro="An SOP rarely exists by itself. It is usually part of a larger controlled-document ecosystem in which policies, procedures, instructions, records, and training materials work together."
          />
          <div className="ecosystem-panel">
            <div className="ecosystem-flow">
              <div className="eco-node">Policy</div>
              <div className="eco-node accent">SOP</div>
              <div className="eco-node">Work Instruction</div>
              <div className="eco-node">Checklist or Form</div>
              <div className="eco-node">Record</div>
              <div className="eco-node">Training</div>
            </div>
            <div className="ecosystem-note">
              <p>
                A revised production SOP may require updates to operator work instructions, inspection checklists, training modules, forms, diagrams, or reference materials.
              </p>
              <p>
                Stepes helps organizations translate these related content types as a connected multilingual program. Translation memory, approved terminology, and centralized workflows help maintain alignment as procedures change over time.
              </p>
            </div>
            <div className="ecosystem-note" style={{ marginTop: 0 }}>
              <p>
                This integrated approach is especially useful for organizations managing multiple facilities, international subsidiaries, large controlled-document libraries, recurring procedural updates, multilingual training programs, product or process changes, quality-system documentation, and global supplier networks.
              </p>
              <p>
                The result is a more coherent multilingual information environment in which people encounter the same approved terminology and procedural concepts across the documents they use.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section" id="industries">
        <div className="shell">
          <SectionHeading
            title="SOP Translation Across Industries"
            intro="Different industries use standard operating procedures for different reasons. Stepes pairs professional linguists with appropriate subject-matter expertise across technical, regulated, scientific, industrial, and corporate environments."
          />
          <div className="industry-list">
            {industryGroups.map((item) => (
              <div className="industry-row" key={item.title}>
                <div className="icon-box">{item.icon}</div>
                <h3>{item.title}</h3>
                <div className="industry-copy">
                  <p>{item.body}</p>
                  {item.link ? <LinkArrow href={item.link}>{item.linkLabel}</LinkArrow> : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="life-sciences">
        <div className="shell feature-split">
          <div>
            <SectionHeading
              title="SOP Translation for Regulated Life Sciences"
              intro="Life sciences organizations manage large volumes of procedures across research, laboratories, manufacturing, quality systems, clinical operations, regulatory functions, medical devices, and diagnostics."
              centered={false}
            />
            <p>
              These documents may contain specialized scientific terminology, abbreviations, product information, measurements, equipment references, procedural dependencies, and approved internal language. Small inconsistencies can create unnecessary review work or confusion across multilingual documentation.
            </p>
            <p>
              Stepes supports pharmaceutical, biotechnology, medical device, diagnostics, healthcare, and research organizations with structured translation workflows designed for regulated and quality-sensitive content.
            </p>
            <p>
              Translation memory helps preserve approved language across revisions, while terminology management supports consistent use of product, scientific, technical, and quality-system terminology. Professional linguists and reviewers provide human oversight for content requiring scientific understanding, linguistic judgment, and careful attention to procedural meaning.
            </p>
            <LinkArrow href="https://www.stepes.com/life-sciences-translation-services/">Life Sciences Translation Services</LinkArrow>
          </div>
          <div className="feature-panel">
            <h3>Life Sciences SOP Content</h3>
            <ul className="compact-list">
              {[
                "Laboratory SOPs",
                "Manufacturing procedures",
                "Quality-system procedures",
                "GMP/GxP-related documentation",
                "Quality assurance and quality control procedures",
                "Validation and testing procedures",
                "CAPA and deviation procedures",
                "Change-control documentation",
                "Equipment and inspection procedures",
                "Supplier quality documentation",
                "Training-related procedures",
              ].map((x) => <li key={x}><CheckIcon /> <span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="safety-ehs">
        <div className="shell feature-split">
          <div>
            <SectionHeading
              title="Safety and EHS SOP Translation"
              intro="Safety procedures are effective only when the people responsible for following them can clearly understand what they are expected to do."
              centered={false}
              dark
            />
            <p>
              For organizations with multilingual employees, contractors, facilities, or supply chains, professionally translated safety and environmental procedures help communicate essential instructions more consistently across the workforce.
            </p>
            <p>
              Our linguists preserve warnings, cautions, procedural sequence, terminology, measurements, and references while adapting language for clear communication with the intended audience.
            </p>
            <p>
              When safety procedures are supported by multilingual training materials, Stepes can also help keep terminology and instructions consistent across both content types.
            </p>
            <LinkArrow href="https://www.stepes.com/elearning-training-translation-services/">eLearning & Training Translation Services</LinkArrow>
          </div>
          <div className="feature-panel dark">
            <h3>Safety Procedure Coverage</h3>
            <ul className="compact-list">
              {[
                "Workplace safety procedures",
                "Equipment safety instructions",
                "Emergency-response procedures",
                "Chemical handling procedures",
                "PPE instructions",
                "Environmental procedures",
                "Facility safety processes",
                "Hazard-response procedures",
                "Maintenance safety procedures",
                "Operational safety instructions",
                "Safety-related work instructions",
                "Supporting training content",
              ].map((x) => <li key={x}><CheckIcon /> <span>{x}</span></li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="terminology">
        <div className="shell feature-split">
          <div className="feature-panel">
            <div className="icon-box"><FileIcon /></div>
            <h3 style={{ marginTop: 22 }}>One Approved Language System</h3>
            <p>
              A machine component should not receive different names from one SOP to another. A job role should remain recognizable across related procedures. Approved scientific, quality, product, and process terminology should be translated consistently throughout an organization.
            </p>
            <p>
              Existing customer glossaries can be incorporated into the workflow, or terminology resources can be developed as multilingual programs grow.
            </p>
          </div>
          <div>
            <SectionHeading
              eyebrow="TERMINOLOGY CONTROL"
              title="Preserve Procedural Meaning and Technical Terminology"
              intro="Consistency is essential when people depend on procedures to perform standardized work."
              centered={false}
            />
            <ul className="bullets">
              {[
                "Product names",
                "Equipment and component names",
                "Process terminology",
                "Scientific terminology",
                "Quality-system terminology",
                "Safety terminology",
                "Department names",
                "Job titles and responsibilities",
                "Internal abbreviations",
                "Approved corporate language",
                "Measurements and technical expressions",
              ].map((x) => <li key={x}>{x}</li>)}
            </ul>
            <p>
              Existing customer glossaries can be incorporated into the translation workflow, or terminology resources can be developed as multilingual programs grow. This is especially valuable when related SOPs are translated at different times or by multiple language teams.
            </p>
            <LinkArrow href="https://www.stepes.com/terminology-management/">Terminology Management</LinkArrow>
          </div>
        </div>
      </section>

      <section className="section blush-section" id="ai-human-review">
        <div className="shell feature-split">
          <div>
            <SectionHeading
              title="AI-Powered SOP Translation with Expert Human Review"
              intro="Modern SOP translation can benefit significantly from AI, automation, translation memory, and terminology technology—but operationally important content still requires the right level of human oversight."
              centered={false}
            />
            <p>
              Stepes combines AI-powered translation technology with professional linguists and reviewers to create workflows appropriate to the content, industry, risk level, languages, and customer quality requirements.
            </p>
            <p style={{ fontWeight: 600, color: "#2D333B" }}>Technology accelerates the workflow. Expert human review protects meaning.</p>
            <LinkArrow href="https://www.stepes.com/ai-machine-learning-translation-services/">AI & Machine Learning Translation Services</LinkArrow>
          </div>
          <div className="feature-panel">
            <div>
              <h3>Technology Helps Accelerate</h3>
              <ul className="compact-list">
                {[
                  "Content analysis and repetitive translation",
                  "Existing terminology application",
                  "Reuse of previously approved translations",
                  "Recurring content identification",
                  "Consistency checks and routine workflow automation",
                  "Scalable multilingual production",
                ].map((x) => <li key={x}><SparkIcon /> <span>{x}</span></li>)}
              </ul>
              <h3 style={{ marginTop: 30 }}>Expert Review Protects Meaning</h3>
              <ul className="compact-list">
                {[
                  "Technical and scientific understanding",
                  "Interpretation of ambiguous source text",
                  "Procedural clarity and terminology decisions",
                  "Contextual judgment",
                  "Final linguistic review",
                ].map((x) => <li key={x}><CheckIcon /> <span>{x}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="version-management">
        <div className="shell">
          <SectionHeading
            eyebrow="REVISION MANAGEMENT"
            title="Translate SOP Updates Without Starting Over"
            intro="Processes improve. Equipment changes. Quality requirements evolve. A revised SOP rarely contains entirely new content."
          />
          <div className="revision-panel">
            <div className="revision-visual">
              <div className="revision-kicker">Version-Aware Translation</div>
              <p className="revision-message">Translate what changed—not everything again.</p>
              <div className="version-row">
                <span className="version-tag">Prior</span>
                <div className="version-bar"><span style={{ width: "100%" }} /></div>
                <span className="version-state">Approved content</span>
              </div>
              <div className="version-row changed">
                <span className="version-tag">Update</span>
                <div className="version-bar"><span style={{ width: "34%" }} /></div>
                <span className="version-state">Changed sections</span>
              </div>
              <div className="version-row">
                <span className="version-tag">Reuse</span>
                <div className="version-bar"><span style={{ width: "76%" }} /></div>
                <span className="version-state">Matched content</span>
              </div>
              <div style={{ marginTop: 24 }}>
                <p style={{ marginBottom: 0 }}>
                  Translation memory helps preserve approved multilingual content so eligible unchanged material can be reused while new or modified text receives the appropriate translation and review.
                </p>
              </div>
            </div>

            <div>
              <div className="revision-benefits">
                <div className="revision-benefit"><h3>Faster SOP Updates</h3><p>Focus translation effort on what changed.</p></div>
                <div className="revision-benefit"><h3>Greater Consistency</h3><p>Carry approved language forward across versions.</p></div>
                <div className="revision-benefit"><h3>More Efficient Review</h3><p>Concentrate reviewer attention on updated content.</p></div>
                <div className="revision-benefit"><h3>Lower Translation Effort</h3><p>Reduce unnecessary retranslation across recurring procedure libraries.</p></div>
              </div>
              <p style={{ marginTop: 24 }}>
                For organizations managing hundreds of SOPs across multiple languages, the value of approved translation reuse and terminology continuity increases with every revision cycle.
              </p>
              <LinkArrow href="https://www.stepes.com/translation-memory/">Translation Memory</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section" id="workflow">
        <div className="shell">
          <SectionHeading
            title="A Quality-Driven SOP Translation Process"
            intro="Professional linguistic expertise, subject-matter knowledge, language technology, and structured quality controls work together throughout the SOP translation lifecycle."
            centered={false}
            dark
          />
          <div className="workflow-wrap">
            {workflow.map((item, i) => (
              <div className="workflow-row" key={item.title}>
                <div className="step-num">{String(i + 1).padStart(2, "0")}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
          <LinkArrow href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</LinkArrow>
        </div>
      </section>

      <section className="section" id="formatting">
        <div className="shell format-grid">
          <div>
            <SectionHeading
              eyebrow="DOCUMENT USABILITY"
              title="Professional Formatting for Multilingual SOPs"
              intro="A professionally translated SOP must remain easy to navigate and use."
              centered={false}
            />
            <p>
              Language expansion, different character systems, translated tables, and multilingual graphics can affect document layout. Stepes provides multilingual document formatting and desktop publishing services to help preserve the structure and usability of translated procedures.
            </p>
            <p>
              Stepes works with common business, technical, and publishing formats including Microsoft Word, Excel, PowerPoint, Adobe InDesign, structured content, and PDF-based production workflows.
            </p>
          </div>
          <div className="format-elements">
            {[
              "Section numbering",
              "Numbered procedural steps",
              "Tables",
              "Revision histories",
              "Headers and footers",
              "Warnings and cautions",
              "Callouts",
              "Images and diagrams",
              "Captions",
              "Forms",
              "Cross-references",
              "Checklists",
              "Approval fields",
              "Page references",
            ].map((x) => <div className="format-element" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="enterprise-scale">
        <div className="shell">
          <SectionHeading
            eyebrow="ENTERPRISE SCALE"
            title="Centralize Multilingual SOP Translation"
            intro="Centralized terminology, translation memory, quality controls, and project management help global organizations keep multilingual procedures aligned across teams, sites, and recurring updates."
          />
          <div className="enterprise-grid">
            <div className="enterprise-item"><FileIcon /><h3>Centralized Terminology</h3><p>Maintain approved multilingual terminology across procedures, facilities, products, and departments.</p></div>
            <div className="enterprise-item"><ReuseIcon /><h3>Shared Translation Memory</h3><p>Reuse approved translations across SOPs, work instructions, training materials, and future revisions.</p></div>
            <div className="enterprise-item"><GlobeIcon /><h3>Multilingual Project Management</h3><p>Coordinate multiple languages and documents through a centralized translation workflow.</p></div>
            <div className="enterprise-item"><ShieldIcon /><h3>Repeatable Quality Processes</h3><p>Apply consistent review and QA requirements across recurring translation programs.</p></div>
            <div className="enterprise-item"><BuildingIcon /><h3>Enterprise Visibility</h3><p>Manage files, languages, projects, and multilingual assets more consistently across teams.</p></div>
            <div className="enterprise-item"><SparkIcon /><h3>Scalable Delivery</h3><p>Translate one procedure today and expand to large multilingual document libraries as requirements grow.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="quality-security">
        <div className="shell security-grid">
          <div>
            <SectionHeading
              title="Quality and Security for Controlled Content"
              intro="SOPs can contain confidential product information, manufacturing processes, scientific data, internal procedures, quality-system documentation, proprietary methods, and other business-sensitive content."
              centered={false}
            />
            <p>
              Stepes combines professional translation quality controls with secure multilingual workflows designed for enterprise content.
            </p>
            <p>
              Stepes’ translation services are supported by ISO-certified quality processes, including ISO 17100 and ISO 9001:2015, with ISO 13485:2016 supporting quality processes relevant to medical device and life sciences translation.
            </p>
            <p>
              For regulated or quality-sensitive content, translation workflows can be configured according to customer-specific review, documentation, security, and quality requirements.
            </p>
            <div>
              <LinkArrow href="https://www.stepes.com/iso-certified-translation-services/">ISO-Certified Translation Services</LinkArrow>
            </div>
            <div>
              <LinkArrow href="https://www.stepes.com/security/">Translation Security</LinkArrow>
            </div>
          </div>
          <div className="qa-grid">
            {qaItems.map((x) => <div className="qa-item" key={x}><CheckIcon /><span>{x}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section blush-section" id="why-stepes">
        <div className="shell">
          <SectionHeading
            title="A Better Way to Manage Multilingual SOPs"
            intro="Global organizations choose Stepes when they need more than basic document translation."
          />
          <div className="why-grid">
            <IconHeading icon={<LabIcon />} title="Industry Expertise">Professional linguists and reviewers with experience across technical, scientific, regulated, industrial, and corporate content.</IconHeading>
            <IconHeading icon={<SparkIcon />} title="AI + Human Translation">Modern AI translation technologies combined with professional human expertise for speed, scalability, and appropriate linguistic oversight.</IconHeading>
            <IconHeading icon={<FileIcon />} title="Terminology Control">Centralized terminology helps keep equipment names, processes, scientific terms, product language, and organizational vocabulary consistent.</IconHeading>
            <IconHeading icon={<ReuseIcon />} title="Version-Aware Translation">Translation memory allows previously approved content to be reused when procedures change.</IconHeading>
            <IconHeading icon={<BuildingIcon />} title="Enterprise Scalability">Support individual SOPs or multilingual programs involving large controlled-document libraries and recurring updates.</IconHeading>
            <IconHeading icon={<GlobeIcon />} title="100+ Languages">Centralize translation across major European, Asian, Latin American, Middle Eastern, and African languages.</IconHeading>
          </div>
        </div>
      </section>

      <section className="section" id="resources">
        <div className="shell">
          <SectionHeading
            title="Plan, Translate, and Maintain Multilingual Procedures"
            intro="Explore practical resources for translating, reviewing, and updating standard operating procedures and work instructions."
          />
          <div className="resource-grid">
            {resources.map((r) => (
              <div className="resource-item" key={r.title}>
                <h3>{r.title}</h3>
                <p className="resource-copy">{r.body}</p>
                <LinkArrow href={r.href}>{r.title.includes("Quality Checklist") ? "SOP Quality Checklist" : r.title.includes("Version Control") ? "SOP Version Control Guide" : r.title.includes("AI for SOP") ? "AI for SOP Translation Guide" : r.title.includes("Work Instruction") ? "SOP vs. Work Instruction Guide" : "Multilingual SOP Translation Guide"}</LinkArrow>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section" id="faq">
        <div className="shell">
          <SectionHeading
            title="SOP Translation FAQs"
            intro="Answers to common questions about translating standard operating procedures, work instructions, and controlled documentation."
          />
          <div className="faq-panel">
            {faqs.map((item, i) => (
              <FAQItem
                key={item.q}
                item={item}
                index={i}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-wrap">
        <div className="shell">
          <div className="final-cta">
            <div>
              <h2>Translate Your SOPs with Confidence</h2>
              <p>
                From a single work instruction to an enterprise library of controlled procedures, Stepes helps you preserve terminology, structure, and procedural meaning across languages. Scale from initial translation to recurring revisions with industry-specialized linguists, AI-powered workflows, expert human review, translation memory, and secure enterprise quality controls.
              </p>
            </div>
            <div className="cta-row">
              <PillButton href="https://app.stepes.com/quote/">Get a Translation Quote</PillButton>
              <PillButton href="https://www.stepes.com/contact-us/" secondary>Talk to an Expert</PillButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
