import React from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 20 20" aria-hidden="true">
    <path d="M4 10h11M10.5 5.5 15 10l-4.5 4.5" />
  </svg>
);

const CheckIcon = () => (
  <svg className="tts-check" viewBox="0 0 20 20" aria-hidden="true">
    <path d="m4.5 10.2 3.2 3.2 7.8-7.8" />
  </svg>
);

const LineIcon = ({ name }) => {
  const icons = {
    manual: (
      <>
        <path d="M5 4.5h10a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3Z" />
        <path d="M8 8.5h7M8 12h7M8 15.5h5" />
      </>
    ),
    engineering: (
      <>
        <path d="M3 19 10.5 4l3.2 6.3L21 19Z" />
        <path d="M6.3 12h9.5M10.5 4v15M4 19h17" />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V9l6 3V9l6 3V5h6v16Z" />
        <path d="M7 17h2M12 17h2M17 17h2" />
      </>
    ),
    software: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 8h18M7 6h.01M10 6h.01M8 13l2 2 5-5" />
      </>
    ),
    safety: (
      <>
        <path d="M12 3.5 21 20.5H3Z" />
        <path d="M12 9v5M12 17.5h.01" />
      </>
    ),
    support: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 15.5 15.5 8.5M8 8h.01M16 16h.01" />
      </>
    ),
    terminology: (
      <>
        <path d="M4 4h7a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3Z" />
        <path d="M20 4h-3a3 3 0 0 0-3 3v13h3a3 3 0 0 0 3-3ZM7 9h4M7 13h4M17 9h.01M17 13h.01" />
      </>
    ),
    memory: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    quality: (
      <>
        <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6Z" />
        <path d="m8 12 2.5 2.5L16 9" />
      </>
    ),
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6Z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
      </>
    ),
    aircraft: (
      <>
        <path d="M3 13 21 7l-6 10-3-4-4 3 1-5Z" />
        <path d="m12 13 9-6" />
      </>
    ),
    car: (
      <>
        <path d="M5 10 7 6h10l2 4 2 2v5H3v-5Z" />
        <path d="M5 17v2M19 17v2M7 13h.01M17 13h.01" />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 9h6v6H9ZM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </>
    ),
    energy: (
      <>
        <path d="m13 2-7 11h6l-1 9 7-12h-6Z" />
      </>
    ),
    medical: (
      <>
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6Z" />
      </>
    ),
    ai: (
      <>
        <circle cx="12" cy="12" r="5" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
        <path d="M10 10h.01M14 10h.01M10 14c1 .8 3 .8 4 0" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
  };

  return (
    <svg className="tts-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[name] || icons.file}
    </svg>
  );
};

const HeroArt = () => (
  <svg className="tts-hero-art-svg" viewBox="0 0 650 530" aria-hidden="true">
    <defs>
      <linearGradient id="ttsHeroBlush" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FDF2F7" />
        <stop offset="1" stopColor="#F7F9FC" />
      </linearGradient>
      <filter id="ttsHeroShadow" x="-20%" y="-20%" width="150%" height="160%">
        <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#172033" floodOpacity="0.10" />
      </filter>
    </defs>

    <path d="M75 93c54-62 151-80 234-51 71 25 113 78 162 127 45 45 105 88 101 156-4 71-74 126-144 143-75 18-139-12-208-24-70-12-146-5-180-63-37-63-17-145 35-288Z" fill="url(#ttsHeroBlush)" />

    <g filter="url(#ttsHeroShadow)">
      <rect x="100" y="90" width="355" height="310" rx="28" fill="#fff" stroke="#C9CFD9" strokeWidth="2" />
      <rect x="124" y="115" width="307" height="260" rx="20" fill="#FBFCFE" stroke="#D8DDE6" strokeWidth="1.5" />
      <path d="M124 157h307" stroke="#D8DDE6" strokeWidth="1.5" />
      <circle cx="148" cy="136" r="4" fill="#C11D63" />
      <circle cx="163" cy="136" r="4" fill="#B9C0CB" />
      <circle cx="178" cy="136" r="4" fill="#B9C0CB" />
      <path d="M328 136h72" stroke="#6D7788" strokeWidth="2.3" strokeLinecap="round" />

      <rect x="145" y="181" width="103" height="168" rx="16" fill="#fff" stroke="#D1D6DF" strokeWidth="1.5" />
      <path d="M163 207h59M163 224h44M163 251h63M163 268h53M163 295h61M163 312h45" stroke="#7D8796" strokeWidth="2.3" strokeLinecap="round" />
      <circle cx="226" cy="251" r="3.4" fill="#C11D63" />
      <circle cx="226" cy="295" r="3.4" fill="#C11D63" />

      <rect x="268" y="181" width="142" height="80" rx="16" fill="#172033" />
      <path d="M290 205h67M290 222h94M290 239h72" stroke="#D3D8E1" strokeWidth="2.3" strokeLinecap="round" />
      <path d="m381 214 10 7-10 7" fill="none" stroke="#F2A7C6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

      <rect x="268" y="279" width="142" height="70" rx="16" fill="#fff" stroke="#D1D6DF" strokeWidth="1.5" />
      <circle cx="291" cy="314" r="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
      <path d="m286 314 4 4 7-8" fill="none" stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M310 307h72M310 320h53" stroke="#727C8C" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    <g transform="translate(432 120)" filter="url(#ttsHeroShadow)">
      <circle cx="70" cy="70" r="66" fill="#fff" stroke="#C9CFD9" strokeWidth="2" />
      <circle cx="70" cy="70" r="35" fill="none" stroke="#C11D63" strokeWidth="2.6" />
      <path d="M35 70h70M70 35c10 10 15 22 15 35S80 95 70 105C60 95 55 83 55 70s5-25 15-35Z" fill="none" stroke="#C11D63" strokeWidth="2.2" />
      <path d="M50 49h40M50 91h40" stroke="#7C8696" strokeWidth="2" strokeLinecap="round" opacity=".65" />
    </g>

    <g transform="translate(451 289)" filter="url(#ttsHeroShadow)">
      <rect width="139" height="114" rx="22" fill="#fff" stroke="#C9CFD9" strokeWidth="2" />
      <path d="M24 30h92M24 46h67" stroke="#707A8A" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="38" cy="78" r="12" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2.2" />
      <path d="m32 78 5 5 8-10" fill="none" stroke="#C11D63" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M58 72h55M58 85h40" stroke="#707A8A" strokeWidth="2.3" strokeLinecap="round" />
    </g>

    <g transform="translate(51 274)" filter="url(#ttsHeroShadow)">
      <rect width="102" height="86" rx="18" fill="#fff" stroke="#C9CFD9" strokeWidth="2" />
      <path d="M25 61V30l18 9 18-9v31" fill="none" stroke="#253047" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M43 39v22M61 30v31" stroke="#C11D63" strokeWidth="2.2" />
      <path d="M21 65h61" stroke="#7A8494" strokeWidth="2.2" strokeLinecap="round" />
    </g>

    <path d="M92 245c18 0 25-18 44-18" fill="none" stroke="#7B8594" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="4 8" />
    <circle cx="92" cy="245" r="4.5" fill="#C11D63" />
    <path d="M457 252c30 0 36-20 57-20" fill="none" stroke="#7B8594" strokeWidth="2.2" strokeLinecap="round" strokeDasharray="4 8" />
    <circle cx="514" cy="232" r="4.5" fill="#C11D63" />
    <path d="M166 434c59 28 139 32 200 14 42-12 70-29 111-48" fill="none" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 9" opacity=".75" />
    <circle cx="166" cy="434" r="4.5" fill="#C11D63" />
    <circle cx="477" cy="400" r="4.5" fill="#C11D63" />
  </svg>
);

const SoftwareDocVisual = () => (
  <div className="tts-software-visual" aria-label="Multilingual software documentation workflow">
    <div className="tts-software-window">
      <div className="tts-window-bar">
        <span className="tts-dot active" />
        <span className="tts-dot" />
        <span className="tts-dot" />
        <span className="tts-window-title">Technical Documentation</span>
      </div>
      <div className="tts-software-body">
        <div className="tts-code-pane">
          <span>GET /devices/{'{id}'}</span>
          <span className="muted">Authorization: Bearer {'{token}'}</span>
          <span>status: "ready"</span>
          <span className="accent">parameter: locale</span>
        </div>
        <div className="tts-doc-pane">
          <div className="tts-doc-chip">DE</div>
          <div className="tts-doc-lines">
            <span className="wide" />
            <span />
            <span className="medium" />
            <span className="wide" />
          </div>
          <div className="tts-doc-chip secondary">JA</div>
          <div className="tts-doc-lines short">
            <span className="wide" />
            <span className="medium" />
            <span />
          </div>
        </div>
      </div>
    </div>
    <div className="tts-software-caption">
      <div><strong>Protected</strong><span>Code · variables · commands</span></div>
      <div><strong>Localized</strong><span>Help · guides · release content</span></div>
      <div><strong>Validated</strong><span>Terminology · links · formatting</span></div>
    </div>
  </div>
);

const documentGroups = [
  {
    icon: "manual",
    title: "Product and Technical Manuals",
    text: "Translate product documentation for installation, operation, maintenance, service, troubleshooting, and end-user support.",
    items: ["User and operator manuals", "Installation and assembly guides", "Maintenance and service manuals", "Troubleshooting guides and datasheets"],
  },
  {
    icon: "engineering",
    title: "Engineering Documentation",
    text: "Preserve technical meaning across specifications, design materials, test content, engineering reports, and product-development documentation.",
    items: ["Technical specifications", "Engineering reports", "Testing documentation", "Product requirements and design content"],
  },
  {
    icon: "factory",
    title: "Manufacturing and Quality Content",
    text: "Support repeatable global operations with multilingual documentation used across production, inspection, quality, and workforce training.",
    items: ["SOPs and work instructions", "Process documentation", "Quality and inspection records", "Equipment and production materials"],
  },
  {
    icon: "software",
    title: "Software and Digital Documentation",
    text: "Keep developer, administrator, support, and end-user documentation aligned with the localized product experience.",
    items: ["API and developer documentation", "Release notes", "Configuration guides", "Help centers and knowledge bases"],
  },
  {
    icon: "safety",
    title: "Safety and Compliance Documentation",
    text: "Translate safety-sensitive technical information with controlled terminology, clear procedural language, and careful handling of warnings, hazards, and compliance content.",
    items: ["Safety instructions and warnings", "Safety Data Sheets (SDS)", "Compliance documentation", "Product labels and technical notices"],
  },
  {
    icon: "support",
    title: "Technical Training and Field Support",
    text: "Give operators, technicians, service teams, and customers multilingual training and support content that stays aligned with the products and procedures they use.",
    items: ["Operator and technician training", "Field-service materials", "Product education", "Technical support content"],
  },
];

const industries = [
  ["factory", "Manufacturing and Industrial Automation", "Manuals, SOPs, work instructions, machine documentation, quality content, and technical training.", "https://www.stepes.com/manufacturing-translation-services/", "Manufacturing Translation Services"],
  ["aircraft", "Aviation and Aerospace", "Aircraft documentation, maintenance manuals, engineering materials, aviation procedures, and supplier technical content.", "https://www.stepes.com/aviation-translation-services/", "Aviation & Aerospace Translation Services"],
  ["car", "Automotive and Mobility", "Repair manuals, diagnostics, service documentation, supplier materials, specifications, and vehicle support content.", "https://www.stepes.com/automotive-translation-services/", "Automotive Translation Services"],
  ["chip", "Electronics and Technology", "Datasheets, hardware documentation, embedded-system content, specifications, testing materials, and product guides.", "https://www.stepes.com/electronics-translation-services/", "Electronics Translation Services"],
  ["energy", "Energy and Industrial Equipment", "Operating manuals, technical procedures, field-service documentation, safety content, and equipment materials.", "https://www.stepes.com/energy-translation-services/", "Energy Translation Services"],
  ["medical", "Medical Devices", "Technical files, IFUs, device documentation, software content, quality materials, and safety information.", "https://www.stepes.com/medical-device-translation-services/", "Medical Device Translation Services"],
];

const workflowSteps = [
  ["Content and Risk Assessment", "Review audience, intended use, technical subject, safety significance, file complexity, language assets, and approval requirements."],
  ["Subject-Matter Resource Selection", "Match professional translators and reviewers to the engineering, manufacturing, software, safety, or technical domain involved."],
  ["Terminology Preparation", "Extract recurring terms, import approved glossaries, resolve acronyms, and establish product, component, warning, and engineering terminology."],
  ["Translation and Localization", "Apply the right combination of professional translation, translation memory, AI assistance, file engineering, and technical localization."],
  ["Technical Quality Assurance", "Check terminology, numbers, units, warnings, tags, variables, cross-references, completeness, linguistic quality, and multilingual formatting."],
  ["Review, Delivery, and Reuse", "Support customer review, finalize multilingual files, and carry approved terminology and translation memory into future releases and updates."],
];

const formats = [
  ["Desktop Publishing and Manuals", ["Adobe InDesign", "Adobe FrameMaker", "PDF", "Microsoft Word", "PowerPoint"]],
  ["Structured Documentation", ["DITA", "XML", "HTML", "Markdown", "JSON"]],
  ["Software and Developer Content", ["API documentation", "Help files", "Knowledge-base exports", "Release content", "Structured resource files"]],
  ["Engineering and Manufacturing Files", ["Excel", "Tables", "Technical specifications", "BOMs", "CAD-exported text"]],
];

const aiPaths = [
  {
    label: "Complex and High-Risk Content",
    title: "Expert-Led Technical Translation",
    text: "Use specialist linguists and structured review for safety-sensitive, regulated, technically novel, customer-facing, or business-critical documentation.",
  },
  {
    label: "Large Documentation Programs",
    title: "AI-Assisted Translation With Professional Review",
    text: "Combine automation, translation memory, approved terminology, AI-assisted production, and professional review to improve throughput across large multilingual documentation sets.",
  },
  {
    label: "Frequent Product Updates",
    title: "Change-Based Localization and Reuse",
    text: "Identify new and modified content, reuse approved translations, focus review on changed material, and keep terminology aligned across recurring releases.",
  },
];

const benefits = [
  ["engineering", "Technical Subject Expertise", "Professional linguists with experience across engineering, manufacturing, software, industrial, and specialized technical content."],
  ["terminology", "Terminology Governance", "Approved glossaries, product terminology, and translation memory help maintain consistent language across documents and releases."],
  ["quality", "Structured Quality Control", "Review processes address terminology, numbers, units, warnings, tags, formatting, completeness, and technical clarity."],
  ["layers", "Enterprise Scalability", "Support large documentation libraries, multiple languages, global product launches, and ongoing release cycles through repeatable workflows."],
];

const relatedServices = [
  ["Manufacturing Translation Services", "Technical, operational, safety, software, training, supplier, and product content across the manufacturing lifecycle.", "https://www.stepes.com/manufacturing-translation-services/"],
  ["Technical Manual Translation Services", "User manuals, operation manuals, service documentation, installation instructions, maintenance guides, and product publications.", "https://www.stepes.com/manufacturing-translation-services/technical-manuals/"],
  ["Software Localization Services", "Software interfaces, resource files, product documentation, locale adaptation, linguistic QA, and release-ready localization.", "https://www.stepes.com/software-localization-services/"],
  ["Aviation & Aerospace Translation Services", "Technical publications, maintenance content, engineering documentation, procedures, safety materials, and supplier information.", "https://www.stepes.com/aviation-translation-services/"],
  ["Medical Device Translation Services", "Technical files, IFUs, labeling, software, quality documentation, regulatory content, and global product support.", "https://www.stepes.com/medical-device-translation-services/"],
  ["SDS Translation Services", "Safety Data Sheet translation for multilingual hazard communication, chemical safety, manufacturing, and global compliance requirements.", "https://www.stepes.com/sds-translation-services/"],
];

const faqs = [
  ["What is technical translation?", "Technical translation is the translation of specialized content such as manuals, engineering specifications, SOPs, safety documentation, software documentation, and technical knowledge content while preserving terminology, measurements, functional meaning, and operational clarity."],
  ["How is technical translation different from general translation?", "General translation focuses on meaning and readability. Technical translation must also preserve terminology precision, technical intent, measurements, safety language, formatting, and real-world usability in operational or product contexts."],
  ["What types of technical documents does Stepes translate?", "Stepes translates user and operation manuals, installation guides, engineering specifications, SOPs, work instructions, safety documentation, quality records, API documentation, release notes, help content, knowledge bases, and other technical document types."],
  ["Do you provide technical manual translation services?", "Yes. Stepes translates user manuals, installation guides, service manuals, maintenance documentation, operation manuals, troubleshooting content, product datasheets, and related product documentation."],
  ["Can Stepes translate engineering documents and CAD-related text?", "Yes. Stepes supports engineering specifications, reports, testing materials, tables, bills of materials, product-development documentation, and CAD-exported text. The appropriate workflow depends on the source format and required final deliverables."],
  ["Can you translate SOPs and manufacturing work instructions?", "Yes. Stepes supports multilingual SOPs, work instructions, process documentation, inspection records, quality procedures, equipment documentation, and manufacturing training materials for global operations."],
  ["Do you translate software documentation and API documentation?", "Yes. Stepes translates developer guides, API documentation, release notes, help systems, configuration manuals, administrator content, and technical knowledge bases while protecting code references, commands, parameters, links, and structured formatting."],
  ["How does Stepes maintain terminology consistency?", "Stepes uses approved glossaries, customer terminology, translation memory, style guidance, and structured review to keep product names, component labels, technical concepts, safety language, and software terminology consistent across documents and future updates."],
  ["What technical file formats do you support?", "Stepes supports common authoring, publishing, structured-content, software, and engineering formats including InDesign, FrameMaker, PDF, Word, PowerPoint, DITA, XML, HTML, Markdown, JSON, Excel, structured exports, tables, and CAD-exported text."],
  ["Does Stepes use AI for technical translation?", "Stepes can use AI-assisted workflows to improve productivity, terminology extraction, translation-memory leverage, consistency checking, and large-volume processing. Professional technical linguists remain essential for meaning, terminology decisions, risk-sensitive content, and final quality."],
  ["How do you protect confidential technical information?", "Stepes uses controlled project access, secure file handling, confidentiality-focused processes, and customer-specific workflow controls to help protect proprietary engineering, product, manufacturing, and software documentation."],
  ["What should I look for in a technical translation company?", "Look for subject-matter expertise, terminology management, support for your technical file formats, documented quality processes, secure content handling, scalable multilingual workflows, and a clear approach to professional review. For recurring programs, translation-memory reuse and reviewer-feedback management are also important for maintaining consistency across updates."],
  ["How much do technical translation services cost?", "Pricing depends on content type, technical complexity, language pairs, file formats, formatting requirements, translation-memory leverage, turnaround, and the level of professional review and quality control required. Stepes reviews the materials and provides a quotation based on the requested deliverables."],
];

export default function StepesTechnicalTranslationServicesWireframe() {
  return (
    <main className="tts-page">
      <style>{`
        :root {
          --tts-ink: #111522;
          --tts-ink-soft: #3f495d;
          --tts-muted: #687387;
          --tts-line: #e1e5ec;
          --tts-line-strong: #d4dae3;
          --tts-bg: #ffffff;
          --tts-bg-soft: #f7f8fb;
          --tts-blush: #fdf2f7;
          --tts-magenta: #c11d63;
          --tts-magenta-dark: #9f1d55;
          --tts-magenta-deep: #7a1542;
          --tts-magenta-light: #f2a7c6;
          --tts-dark: #151923;
          --tts-radius-lg: 30px;
          --tts-radius-md: 22px;
          --tts-shadow: 0 22px 64px rgba(20, 27, 42, .075);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .tts-page {
          width: 100%;
          overflow-x: hidden;
          background: var(--tts-bg);
          color: var(--tts-ink);
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.68;
          -webkit-font-smoothing: antialiased;
        }
        .tts-page, .tts-page * { box-sizing: border-box; }
        .tts-page h1, .tts-page h2, .tts-page h3, .tts-page p { margin-top: 0; }
        .tts-page h1, .tts-page h2, .tts-page h3 { font-weight: 600; color: var(--tts-ink); letter-spacing: -.026em; }
        .tts-page h1 { margin-bottom: 24px; font-size: 48px; line-height: 1.06; }
        .tts-page h2 { margin-bottom: 22px; font-size: 36px; line-height: 1.12; }
        .tts-page h3 { margin-bottom: 14px; font-size: 24px !important; line-height: 1.28; }
        .tts-page p { margin-bottom: 20px; color: var(--tts-ink-soft); font-size: 16px; line-height: 1.72; }
        .tts-page ul { margin: 0; padding: 0; list-style: none; }
        .tts-page section[id] { scroll-margin-top: 24px; }
        .tts-page a, .tts-page p, .tts-page h1, .tts-page h2, .tts-page h3, .tts-page summary { overflow-wrap: anywhere; }
        .tts-page [class*="-grid"] > *, .tts-page [class*="-layout"] > *, .tts-page [class*="-head"] > * { min-width: 0; }

        .tts-shell { width: min(1280px, 100%); margin: 0 auto; padding-inline: 56px; }
        .tts-section { padding: 96px 0; }
        .tts-section-dense { padding: 80px 0; }
        .tts-section-soft { background: var(--tts-bg-soft); }
        .tts-section-blush { background: var(--tts-blush); }
        .tts-section-dark { background: var(--tts-dark); color: #fff; }
        .tts-section-dark h2, .tts-section-dark h3 { color: #fff; }
        .tts-section-dark p { color: #cbd1db; }

        .tts-eyebrow {
          margin: 0 0 18px !important;
          color: var(--tts-magenta) !important;
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.3 !important;
          letter-spacing: .17em !important;
          text-transform: uppercase;
        }
        .tts-section-dark .tts-eyebrow, .tts-dark-panel .tts-eyebrow { color: var(--tts-magenta-light) !important; }
        .tts-section-intro { max-width: 810px; margin-bottom: 0 !important; font-size: 18px !important; line-height: 1.7 !important; }
        .tts-section-head { max-width: 900px; margin-bottom: 54px; }
        .tts-section-head.tts-centered { margin-inline: auto; text-align: center; }
        .tts-section-head.tts-centered .tts-section-intro { margin-inline: auto; }
        .tts-split-head { display: grid; grid-template-columns: .82fr 1.18fr; gap: 78px; align-items: start; margin-bottom: 56px; }
        .tts-split-head .tts-section-intro { max-width: 740px; }
        .tts-split-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 76px; align-items: center; }
        .tts-split-2.tts-top { align-items: start; }

        .tts-btn-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .tts-btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 24px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          text-decoration: none;
          transition: transform .2s ease, background-color .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .tts-btn svg, .tts-editorial-link svg, .tts-dark-link svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
        .tts-btn-primary,
        .tts-btn-primary:link,
        .tts-btn-primary:visited,
        .tts-btn-primary:hover,
        .tts-btn-primary:active,
        .tts-btn-primary:focus,
        .tts-btn-primary:focus-visible,
        .tts-btn-primary * { color: #fff !important; fill: none !important; stroke: #fff !important; }
        .tts-btn-primary { border: 1px solid var(--tts-magenta); background: var(--tts-magenta); box-shadow: 0 14px 32px rgba(193, 29, 99, .18); }
        .tts-btn-primary:hover { background: var(--tts-magenta-dark); border-color: var(--tts-magenta-dark); transform: translateY(-2px); }
        .tts-btn-secondary { border: 1px solid #d8dde5; background: #fff; color: var(--tts-ink); }
        .tts-btn-secondary:visited { color: var(--tts-ink); }
        .tts-btn-secondary:hover { border-color: #bfc6d0; transform: translateY(-2px); }
        .tts-btn:focus-visible, .tts-editorial-link:focus-visible, .tts-dark-link:focus-visible, details summary:focus-visible { outline: 3px solid rgba(193, 29, 99, .25); outline-offset: 3px; }

        .tts-editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--tts-magenta-dark) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .tts-editorial-link svg { transition: transform .2s ease; }
        .tts-editorial-link:hover svg { transform: translateX(4px); }
        .tts-section-dark .tts-editorial-link { color: var(--tts-magenta-light) !important; }

        .tts-icon { width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
        .tts-icon-box { width: 48px; height: 48px; display: grid; place-items: center; flex: 0 0 auto; border-radius: 15px; background: var(--tts-blush); color: var(--tts-magenta); }
        .tts-check { width: 20px; height: 20px; margin-top: 3px; flex: 0 0 auto; fill: none; stroke: var(--tts-magenta); stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round; }

        .tts-hero { position: relative; padding: 104px 0 94px; background: #fff; }
        .tts-hero-grid { display: grid; grid-template-columns: minmax(0, .96fr) minmax(470px, 1.04fr); gap: 50px; align-items: center; }
        .tts-hero-copy { max-width: 660px; }
        .tts-hero-copy .tts-hero-lead { max-width: 650px; margin-bottom: 30px; color: #465064; font-size: 18px; line-height: 1.72; }
        .tts-hero-art { display: flex; min-height: 480px; align-items: center; justify-content: center; }
        .tts-hero-art-svg { width: 100%; height: auto; max-height: 530px; }

        .tts-proof-strip { border-top: 1px solid var(--tts-line); border-bottom: 1px solid var(--tts-line); background: #fff; }
        .tts-proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .tts-proof-item { padding: 27px 22px; text-align: center; }
        .tts-proof-item + .tts-proof-item { border-left: 1px solid var(--tts-line); }
        .tts-proof-item strong { display: block; color: var(--tts-ink); font-size: 16px; font-weight: 600; line-height: 1.35; }
        .tts-proof-item span { display: block; margin-top: 6px; color: var(--tts-muted); font-size: 16px; line-height: 1.5; }

        .tts-overview-layout { display: grid; grid-template-columns: .76fr 1.24fr; gap: 84px; align-items: start; }
        .tts-overview-quote { padding-top: 4px; }
        .tts-overview-quote .tts-big-copy { max-width: 410px; margin-bottom: 26px; color: var(--tts-ink); font-size: 25px; line-height: 1.58; letter-spacing: -.018em; }
        .tts-preserve-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--tts-line-strong); }
        .tts-preserve-item { display: flex; gap: 13px; align-items: flex-start; padding: 18px 0; border-bottom: 1px solid var(--tts-line); color: var(--tts-ink-soft); font-size: 16px; }
        .tts-preserve-item:nth-child(odd) { padding-right: 24px; }
        .tts-preserve-item:nth-child(even) { padding-left: 24px; border-left: 1px solid var(--tts-line); }
        .tts-compare-panel { margin-top: 44px; overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; box-shadow: var(--tts-shadow); }
        .tts-compare-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .tts-compare-col { padding: 32px 34px; }
        .tts-compare-col + .tts-compare-col { border-left: 1px solid var(--tts-line); }
        .tts-compare-col h3 { font-size: 22px; }
        .tts-compare-list { display: grid; gap: 11px; margin-top: 20px !important; }
        .tts-compare-list li { display: flex; gap: 10px; align-items: flex-start; color: var(--tts-ink-soft); font-size: 16px; }

        .tts-doc-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; }
        .tts-doc-item { padding: 36px; }
        .tts-doc-item:nth-child(odd) { border-right: 1px solid var(--tts-line); }
        .tts-doc-item:nth-child(n+3) { border-top: 1px solid var(--tts-line); }
        .tts-doc-item .tts-icon-box { margin-bottom: 22px; }
        .tts-doc-item h3 { font-size: 22px; }
        .tts-doc-item p { margin-bottom: 22px; }
        .tts-mini-list { display: grid; gap: 10px; }
        .tts-mini-list li { position: relative; padding-left: 18px; color: var(--tts-ink-soft); font-size: 16px; line-height: 1.55; }
        .tts-mini-list li::before { content: ""; position: absolute; left: 0; top: .78em; width: 7px; height: 2px; border-radius: 2px; background: var(--tts-magenta); }

        .tts-feature-panel { overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; box-shadow: var(--tts-shadow); }
        .tts-feature-grid { display: grid; grid-template-columns: 1fr 1fr; }
        .tts-feature-col { padding: 42px; }
        .tts-feature-col + .tts-feature-col { border-left: 1px solid var(--tts-line); }
        .tts-feature-col h3 { font-size: 26px; }
        .tts-feature-col .tts-icon-box { margin-bottom: 24px; }
        .tts-feature-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 22px; margin-top: 26px !important; border-top: 1px solid var(--tts-line); }
        .tts-feature-list li { position: relative; padding: 16px 0 16px 20px; border-bottom: 1px solid var(--tts-line); color: var(--tts-ink-soft); font-size: 16px; }
        .tts-feature-list li::before { content: ""; position: absolute; left: 0; top: 27px; width: 7px; height: 2px; border-radius: 2px; background: var(--tts-magenta); }
        .tts-feature-col .tts-editorial-link { margin-top: 20px; }

        .tts-manufacturing-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 82px; align-items: start; }
        .tts-manufacturing-head { position: sticky; top: 32px; }
        .tts-editorial-list { border-top: 1px solid var(--tts-line-strong); border-bottom: 1px solid var(--tts-line-strong); }
        .tts-editorial-row { display: grid; grid-template-columns: minmax(185px, .7fr) minmax(0, 1.3fr); gap: 38px; padding: 28px 0 30px; align-items: start; }
        .tts-editorial-row + .tts-editorial-row { border-top: 1px solid var(--tts-line); }
        .tts-editorial-row h3 { margin-bottom: 0; font-size: 21px; }
        .tts-editorial-row p { margin-bottom: 0; }

        .tts-software-section-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 76px; align-items: center; }
        .tts-software-copy .tts-section-intro { margin-bottom: 24px !important; }
        .tts-software-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 26px; border-top: 1px solid var(--tts-line); margin-top: 28px !important; }
        .tts-software-list li { position: relative; padding: 17px 0 17px 22px; border-bottom: 1px solid var(--tts-line); color: var(--tts-ink-soft); font-size: 16px; }
        .tts-software-list li::before { content: ""; position: absolute; left: 0; top: 28px; width: 8px; height: 2px; background: var(--tts-magenta); }
        .tts-software-visual { overflow: hidden; border-radius: var(--tts-radius-lg); background: var(--tts-dark); color: #fff; box-shadow: var(--tts-shadow); }
        .tts-software-window { padding: 28px 28px 22px; }
        .tts-window-bar { display: flex; align-items: center; gap: 8px; padding-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,.15); }
        .tts-dot { width: 7px; height: 7px; border-radius: 50%; background: #667084; }
        .tts-dot.active { background: var(--tts-magenta-light); }
        .tts-window-title { margin-left: 8px; color: #d7dce5; font-size: 14px; }
        .tts-software-body { display: grid; grid-template-columns: .94fr 1.06fr; gap: 18px; padding-top: 22px; }
        .tts-code-pane, .tts-doc-pane { min-width: 0; border: 1px solid rgba(255,255,255,.13); border-radius: 18px; background: rgba(255,255,255,.035); }
        .tts-code-pane { display: grid; gap: 12px; align-content: start; padding: 22px; }
        .tts-code-pane span { color: #eef1f5; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 14px; line-height: 1.55; overflow-wrap: anywhere; }
        .tts-code-pane .muted { color: #9ea7b7; }
        .tts-code-pane .accent { color: var(--tts-magenta-light); }
        .tts-doc-pane { padding: 20px; }
        .tts-doc-chip { display: inline-flex; min-width: 34px; min-height: 28px; align-items: center; justify-content: center; border-radius: 9px; background: rgba(242,167,198,.12); color: var(--tts-magenta-light); font-size: 14px; font-weight: 600; }
        .tts-doc-chip.secondary { margin-top: 22px; background: rgba(255,255,255,.07); color: #d9dee7; }
        .tts-doc-lines { display: grid; gap: 10px; margin-top: 14px; }
        .tts-doc-lines span { display: block; width: 68%; height: 7px; border-radius: 99px; background: #777f8e; }
        .tts-doc-lines .medium { width: 82%; }
        .tts-doc-lines .wide { width: 96%; }
        .tts-doc-lines.short span { background: #626b7b; }
        .tts-software-caption { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(255,255,255,.14); }
        .tts-software-caption div { padding: 20px 22px 22px; }
        .tts-software-caption div + div { border-left: 1px solid rgba(255,255,255,.14); }
        .tts-software-caption strong { display: block; margin-bottom: 4px; color: #fff; font-size: 16px; font-weight: 600; }
        .tts-software-caption span { display: block; color: #aeb6c3; font-size: 14px; line-height: 1.45; }

        .tts-industry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--tts-line-strong); border-left: 1px solid var(--tts-line-strong); }
        .tts-industry-item { display: flex; min-width: 0; flex-direction: column; padding: 32px; border-right: 1px solid var(--tts-line-strong); border-bottom: 1px solid var(--tts-line-strong); background: #fff; }
        .tts-industry-top { display: flex; gap: 15px; align-items: center; margin-bottom: 18px; }
        .tts-industry-top .tts-icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .tts-industry-top h3 { margin-bottom: 0; font-size: 21px; }
        .tts-industry-item p { margin-bottom: 12px; }
        .tts-industry-item .tts-editorial-link { margin-top: auto; }

        .tts-workflow-heading { display: grid; grid-template-columns: .8fr 1.2fr; gap: 82px; align-items: start; }
        .tts-workflow-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); margin-top: 58px; border-top: 1px solid rgba(255,255,255,.17); border-left: 1px solid rgba(255,255,255,.17); }
        .tts-workflow-step { display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 14px; min-height: 252px; align-content: start; padding: 30px; border-right: 1px solid rgba(255,255,255,.17); border-bottom: 1px solid rgba(255,255,255,.17); }
        .tts-workflow-number { margin: 4px 0 0 !important; color: var(--tts-magenta-light) !important; font-size: 13px !important; font-weight: 600 !important; line-height: 1.3 !important; letter-spacing: .11em; }
        .tts-workflow-step h3 { margin-bottom: 0; color: #fff; font-size: 21px; }
        .tts-workflow-step p:last-child { grid-column: 1 / -1; margin: 16px 0 0; color: #c8ced8; }
        .tts-workflow-support { display: grid; grid-template-columns: .78fr 1.22fr; gap: 68px; margin-top: 54px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,.17); }
        .tts-workflow-support h3 { color: #fff; }
        .tts-dark-links { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 28px; border-top: 1px solid rgba(255,255,255,.14); }
        .tts-dark-link { display: inline-flex; min-height: 50px; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 0; border-bottom: 1px solid rgba(255,255,255,.14); color: #fff; font-size: 16px; font-weight: 600; text-decoration: none; }
        .tts-dark-link:hover { color: var(--tts-magenta-light); }

        .tts-governance-grid { display: grid; grid-template-columns: 1.02fr .98fr; gap: 34px; align-items: stretch; }
        .tts-governance-panel { padding: 40px; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; }
        .tts-governance-panel.tts-dark-panel { border-color: var(--tts-dark); background: var(--tts-dark); color: #fff; }
        .tts-governance-panel.tts-dark-panel h2, .tts-governance-panel.tts-dark-panel h3 { color: #fff; }
        .tts-governance-panel.tts-dark-panel p { color: #cbd1db; }
        .tts-governance-row { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 24px 0; border-top: 1px solid var(--tts-line); }
        .tts-governance-panel.tts-dark-panel .tts-governance-row { border-top-color: rgba(255,255,255,.14); }
        .tts-governance-row h3 { margin-bottom: 8px; font-size: 20px; }
        .tts-governance-row p { margin-bottom: 0; }
        .tts-governance-panel.tts-dark-panel .tts-icon-box { background: rgba(242,167,198,.09); color: var(--tts-magenta-light); }

        .tts-format-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 78px; align-items: start; }
        .tts-format-head { position: sticky; top: 32px; }
        .tts-format-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; }
        .tts-format-item { padding: 30px; }
        .tts-format-item:nth-child(odd) { border-right: 1px solid var(--tts-line); }
        .tts-format-item:nth-child(n+3) { border-top: 1px solid var(--tts-line); }
        .tts-format-item h3 { font-size: 20px; }
        .tts-format-tags { display: flex; flex-wrap: wrap; gap: 9px; }
        .tts-format-tag { padding: 7px 11px; border: 1px solid var(--tts-line-strong); border-radius: 999px; color: var(--tts-ink-soft); background: #fbfcfd; font-size: 16px; line-height: 1.25; }
        .tts-format-note { margin-top: 30px; padding: 26px 28px; border: 1px solid #ecd7e1; border-radius: var(--tts-radius-md); background: var(--tts-blush); }
        .tts-format-note p { margin-bottom: 0; }

        .tts-ai-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; }
        .tts-ai-card { display: flex; min-width: 0; flex-direction: column; padding: 30px; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-md); background: #fff; }
        .tts-ai-label { margin-bottom: 15px; color: var(--tts-magenta); font-size: 11px; font-weight: 600; line-height: 1.3; letter-spacing: .14em; text-transform: uppercase; }
        .tts-ai-card h3 { font-size: 22px; }
        .tts-ai-card p { margin-bottom: 0; }
        .tts-ai-footer { display: grid; grid-template-columns: .9fr 1.1fr; gap: 52px; margin-top: 48px; padding-top: 38px; border-top: 1px solid var(--tts-line-strong); align-items: start; }
        .tts-ai-footer h3 { margin-bottom: 0; }
        .tts-ai-points { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px 24px; }
        .tts-ai-points li { display: flex; gap: 10px; align-items: flex-start; color: var(--tts-ink-soft); font-size: 16px; }

        .tts-trust-layout { display: grid; grid-template-columns: .76fr 1.24fr; gap: 76px; align-items: start; }
        .tts-trust-panel { overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; box-shadow: var(--tts-shadow); }
        .tts-trust-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .tts-trust-item { padding: 32px; }
        .tts-trust-item:nth-child(odd) { border-right: 1px solid var(--tts-line); }
        .tts-trust-item:nth-child(n+3) { border-top: 1px solid var(--tts-line); }
        .tts-trust-top { display: flex; gap: 14px; align-items: center; margin-bottom: 15px; }
        .tts-trust-top .tts-icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .tts-trust-top h3 { margin-bottom: 0; font-size: 20px; }
        .tts-trust-item p { margin-bottom: 0; }

        .tts-language-layout { display: grid; grid-template-columns: .82fr 1.18fr; gap: 78px; align-items: start; }
        .tts-language-groups { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--tts-line-strong); }
        .tts-language-group { padding: 24px 0; border-bottom: 1px solid var(--tts-line); }
        .tts-language-group:nth-child(odd) { padding-right: 28px; }
        .tts-language-group:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--tts-line); }
        .tts-language-group strong { display: block; margin-bottom: 7px; color: var(--tts-ink); font-size: 17px; font-weight: 600; }
        .tts-language-group span { display: block; color: var(--tts-ink-soft); font-size: 16px; line-height: 1.6; }

        .tts-benefit-layout { display: grid; grid-template-columns: .7fr 1.3fr; gap: 76px; align-items: start; }
        .tts-benefit-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); overflow: hidden; border: 1px solid var(--tts-line); border-radius: var(--tts-radius-lg); background: #fff; }
        .tts-benefit-item { padding: 32px; }
        .tts-benefit-item:nth-child(odd) { border-right: 1px solid var(--tts-line); }
        .tts-benefit-item:nth-child(n+3) { border-top: 1px solid var(--tts-line); }
        .tts-benefit-top { display: flex; gap: 14px; align-items: center; margin-bottom: 16px; }
        .tts-benefit-top .tts-icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .tts-benefit-top h3 { margin-bottom: 0; font-size: 20px; }
        .tts-benefit-item p { margin-bottom: 0; }

        .tts-related-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--tts-line-strong); border-left: 1px solid var(--tts-line-strong); }
        .tts-related-item { display: flex; min-width: 0; flex-direction: column; padding: 30px; border-right: 1px solid var(--tts-line-strong); border-bottom: 1px solid var(--tts-line-strong); background: #fff; }
        .tts-related-item h3 { font-size: 20px; }
        .tts-related-item p { margin-bottom: 16px; }
        .tts-related-item .tts-editorial-link { margin-top: auto; }

        .tts-faq-layout { display: grid; grid-template-columns: .68fr 1.32fr; gap: 84px; align-items: start; }
        .tts-faq-head { position: sticky; top: 32px; }
        .tts-faq-list { border-top: 1px solid var(--tts-line-strong); border-bottom: 1px solid var(--tts-line-strong); }
        .tts-faq-item + .tts-faq-item { border-top: 1px solid var(--tts-line); }
        .tts-faq-item summary { position: relative; display: block; min-height: 70px; padding: 23px 56px 23px 0; cursor: pointer; color: var(--tts-ink); font-size: 18px; font-weight: 600; line-height: 1.4; list-style: none; }
        .tts-faq-item summary::-webkit-details-marker { display: none; }
        .tts-faq-item summary::after { content: "+"; position: absolute; top: 50%; right: 2px; display: grid; width: 34px; height: 34px; place-items: center; transform: translateY(-50%); border: 1px solid var(--tts-line-strong); border-radius: 50%; color: var(--tts-magenta-dark); font-size: 22px; font-weight: 400; line-height: 1; transition: transform .18s ease, border-color .18s ease; }
        .tts-faq-item[open] summary::after { transform: translateY(-50%) rotate(45deg); border-color: rgba(159,29,85,.32); }
        .tts-faq-answer { max-width: 840px; padding: 0 56px 24px 0; }
        .tts-faq-answer p { margin-bottom: 0; }

        .tts-final-cta { padding: 88px 0 96px; background: #fff; }
        .tts-cta-panel { display: grid; grid-template-columns: 1.08fr .92fr; gap: 56px; align-items: center; padding: 58px 62px; border: 1px solid #ecd6e0; border-radius: var(--tts-radius-lg); background: var(--tts-blush); }
        .tts-cta-copy { max-width: 700px; }
        .tts-cta-copy h2 { margin-bottom: 20px; }
        .tts-cta-copy p { max-width: 700px; margin-bottom: 0; font-size: 18px; }
        .tts-cta-actions { display: flex; flex-direction: column; gap: 12px; justify-self: end; min-width: 250px; }

        @media (max-width: 1180px) {
          .tts-shell { padding-inline: 40px; }
          .tts-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(430px, .96fr); gap: 34px; }
          .tts-overview-layout, .tts-manufacturing-layout, .tts-benefit-layout { gap: 58px; }
          .tts-split-head, .tts-split-2, .tts-software-section-grid, .tts-workflow-heading, .tts-workflow-support, .tts-format-layout, .tts-trust-layout, .tts-language-layout, .tts-faq-layout { gap: 52px; }
          .tts-workflow-step { min-height: 0; }
        }

        /* Compact desktop / small laptop: preserve full desktop information architecture. */
        @media (max-width: 980px) {
          .tts-hero { padding: 92px 0 80px; }
          .tts-hero-grid { grid-template-columns: 1fr; }
          .tts-hero-copy { max-width: 780px; }
          .tts-hero-art { min-height: 0; max-width: 680px; margin: 10px auto 0; }
          .tts-overview-layout, .tts-manufacturing-layout, .tts-benefit-layout { gap: 46px; }
          .tts-split-head, .tts-split-2, .tts-software-section-grid, .tts-workflow-heading, .tts-workflow-support, .tts-governance-grid, .tts-format-layout, .tts-ai-footer, .tts-trust-layout, .tts-language-layout, .tts-benefit-layout, .tts-faq-layout { gap: 42px; }
          .tts-governance-panel { padding: 34px; }
          .tts-industry-item, .tts-related-item { padding: 28px; }
          .tts-workflow-step { padding: 26px; }
          .tts-trust-item, .tts-benefit-item { padding: 28px; }
        }

        /* Tablet: stack only compositions that genuinely need a single-column reading flow. */
        @media (max-width: 820px) {
          .tts-shell { padding-inline: 24px; }
          .tts-section { padding: 80px 0; }
          .tts-section-dense { padding: 72px 0; }
          .tts-page h1 { font-size: 42px; }
          .tts-page h2 { font-size: 32px; }
          .tts-page h3 { font-size: 22px !important; }

          .tts-hero { padding: 82px 0 74px; }
          .tts-hero-copy { max-width: 760px; margin-inline: auto; text-align: center; }
          .tts-hero-copy .tts-hero-lead { margin-inline: auto; }
          .tts-hero-copy .tts-btn-row { justify-content: center; }

          .tts-proof-grid { grid-template-columns: repeat(2, 1fr); }
          .tts-proof-item:nth-child(3) { border-left: 0; }
          .tts-proof-item:nth-child(n+3) { border-top: 1px solid var(--tts-line); }

          .tts-split-head, .tts-split-2, .tts-overview-layout, .tts-manufacturing-layout, .tts-software-section-grid, .tts-workflow-heading, .tts-workflow-support, .tts-governance-grid, .tts-format-layout, .tts-ai-footer, .tts-trust-layout, .tts-language-layout, .tts-benefit-layout, .tts-faq-layout { grid-template-columns: 1fr; gap: 40px; }
          .tts-split-head.tts-mobile-center-head { text-align: center; }
          .tts-split-head.tts-mobile-center-head .tts-section-intro { margin-inline: auto !important; }
          .tts-stack-center-head { max-width: 760px; margin-inline: auto; text-align: center; }
          .tts-stack-center-head .tts-section-intro { margin-inline: auto !important; }
          .tts-manufacturing-head, .tts-format-head, .tts-faq-head { position: static; }

          /* Keep paired capability panels side-by-side on tablet; collapse only on mobile. */
          .tts-feature-panel { max-width: none; }
          .tts-feature-col { padding: 34px 30px; }
          .tts-feature-list { grid-template-columns: 1fr; }

          .tts-industry-grid, .tts-related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .tts-workflow-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .tts-ai-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .tts-ai-card { min-height: 0; }

          .tts-cta-panel { grid-template-columns: 1fr; gap: 32px; }
          .tts-cta-copy { max-width: 760px; margin-inline: auto; text-align: center; }
          .tts-cta-copy p { margin-inline: auto; }
          .tts-cta-actions { flex-direction: row; justify-self: center; min-width: 0; }
        }

        @media (max-width: 620px) {
          .tts-shell { padding-inline: 20px; }
          .tts-section { padding: 68px 0; }
          .tts-section-dense { padding: 64px 0; }
          .tts-page h1 { font-size: 38px; }
          .tts-page h2 { font-size: 30px; }
          .tts-page h3 { font-size: 20px !important; }
          .tts-hero { padding: 70px 0 64px; }
          .tts-hero-copy { text-align: center; }
          .tts-hero-copy .tts-hero-lead { margin-inline: auto; }
          .tts-btn-row { width: 100%; }
          .tts-btn { width: 100%; min-height: 52px; white-space: normal; text-align: center; }
          .tts-hero-art { margin-inline: -12px; }

          .tts-proof-grid { grid-template-columns: 1fr; }
          .tts-proof-item, .tts-proof-item:nth-child(3) { border-left: 0; }
          .tts-proof-item + .tts-proof-item { border-top: 1px solid var(--tts-line); }

          .tts-mobile-centered { text-align: center; }
          .tts-mobile-centered .tts-section-intro { margin-inline: auto; }
          .tts-section-head.tts-centered { text-align: center; }
          .tts-split-head { gap: 28px; }
          .tts-split-head.tts-mobile-center-head > div:first-child { text-align: center; }
          .tts-split-head.tts-mobile-center-head .tts-eyebrow { text-align: center; }

          .tts-overview-quote .tts-big-copy { max-width: none; font-size: 22px; }
          .tts-preserve-list { grid-template-columns: 1fr; }
          .tts-preserve-item, .tts-preserve-item:nth-child(odd), .tts-preserve-item:nth-child(even) { padding: 17px 0; border-left: 0; }
          .tts-compare-grid { grid-template-columns: 1fr; }
          .tts-compare-col { padding: 28px 24px; }
          .tts-compare-col + .tts-compare-col { border-left: 0; border-top: 1px solid var(--tts-line); }

          .tts-doc-grid { grid-template-columns: 1fr; }
          .tts-doc-item { padding: 28px 24px; }
          .tts-doc-item:nth-child(odd), .tts-doc-item:nth-child(n+3) { border-right: 0; border-top: 0; }
          .tts-doc-item + .tts-doc-item { border-top: 1px solid var(--tts-line); }

          .tts-feature-grid { grid-template-columns: 1fr; }
          .tts-feature-col { padding: 30px 24px; }
          .tts-feature-col + .tts-feature-col { border-left: 0; border-top: 1px solid var(--tts-line); }
          .tts-feature-list { grid-template-columns: 1fr; }
          .tts-editorial-row { grid-template-columns: 1fr; gap: 12px; padding: 26px 0 28px; }

          .tts-software-list { grid-template-columns: 1fr; }
          .tts-software-window { padding: 22px 18px 18px; }
          .tts-software-body { grid-template-columns: 1fr; }
          .tts-software-caption { grid-template-columns: 1fr; }
          .tts-software-caption div + div { border-left: 0; border-top: 1px solid rgba(255,255,255,.14); }

          .tts-industry-grid, .tts-related-grid { grid-template-columns: 1fr; border-left: 0; }
          .tts-industry-item, .tts-related-item { padding: 28px 0; border-right: 0; border-bottom: 1px solid var(--tts-line-strong); }

          .tts-workflow-grid { grid-template-columns: 1fr; border-left: 0; }
          .tts-workflow-step { padding: 28px 0 30px; border-right: 0; border-bottom: 0; }
          .tts-workflow-step + .tts-workflow-step { border-top: 1px solid rgba(255,255,255,.17); }
          .tts-dark-links { grid-template-columns: 1fr; }

          .tts-governance-panel { padding: 30px 24px; }
          .tts-governance-row { grid-template-columns: 44px minmax(0, 1fr); gap: 15px; }
          .tts-governance-row .tts-icon-box { width: 44px; height: 44px; }
          .tts-format-grid { grid-template-columns: 1fr; }
          .tts-format-item { padding: 28px 24px; }
          .tts-format-item:nth-child(odd), .tts-format-item:nth-child(n+3) { border-right: 0; border-top: 0; }
          .tts-format-item + .tts-format-item { border-top: 1px solid var(--tts-line); }
          .tts-format-note { padding: 24px 22px; }
          .tts-ai-grid { grid-template-columns: 1fr; }
          .tts-ai-card { padding: 28px 24px; }
          .tts-ai-points { grid-template-columns: 1fr; }

          .tts-trust-grid, .tts-benefit-grid { grid-template-columns: 1fr; }
          .tts-trust-item, .tts-benefit-item { padding: 28px 24px; }
          .tts-trust-item:nth-child(odd), .tts-trust-item:nth-child(n+3), .tts-benefit-item:nth-child(odd), .tts-benefit-item:nth-child(n+3) { border-right: 0; border-top: 0; }
          .tts-trust-item + .tts-trust-item, .tts-benefit-item + .tts-benefit-item { border-top: 1px solid var(--tts-line); }

          .tts-language-groups { grid-template-columns: 1fr; }
          .tts-language-group, .tts-language-group:nth-child(odd), .tts-language-group:nth-child(even) { padding: 20px 0; border-left: 0; }

          .tts-faq-item summary { padding-right: 48px; font-size: 17px; }
          .tts-faq-answer { padding-right: 0; }
          .tts-final-cta { padding: 68px 0; }
          .tts-cta-panel { padding: 42px 24px; }
          .tts-cta-actions { width: 100%; flex-direction: column; }
        }

        @media (max-width: 390px) {
          .tts-hero-art { margin-inline: -16px; }
          .tts-compare-col, .tts-doc-item, .tts-feature-col, .tts-governance-panel, .tts-format-item, .tts-ai-card, .tts-trust-item, .tts-benefit-item, .tts-cta-panel { padding-inline: 20px; }
        }

        @media (max-width: 340px) {
          .tts-shell { padding-inline: 20px; }
          .tts-btn { padding-inline: 16px; }
          .tts-hero-art { margin-inline: -20px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .tts-btn, .tts-editorial-link svg, .tts-faq-item summary::after { transition: none; }
        }
      `}</style>

      <section className="tts-hero" aria-labelledby="technical-translation-title">
        <div className="tts-shell tts-hero-grid">
          <div className="tts-hero-copy">
            <h1 id="technical-translation-title">Technical Translation Services for Engineering, Manufacturing, and Software Documentation</h1>
            <p className="tts-hero-lead">
              Stepes provides specialized technical translation services for global companies that need accurate, consistent, and scalable multilingual documentation. From engineering specifications and technical manuals to manufacturing procedures, software documentation, and industrial content, we help teams preserve technical meaning from product development and global launch through operation, support, and ongoing updates.
            </p>
            <div className="tts-btn-row">
              <a className="tts-btn tts-btn-primary" href="https://www.stepes.com/contact-sales/">GET A QUOTE <ArrowIcon /></a>
              <a className="tts-btn tts-btn-secondary" href="https://www.stepes.com/contact-us/">TALK TO A SPECIALIST <ArrowIcon /></a>
            </div>
          </div>
          <div className="tts-hero-art"><HeroArt /></div>
        </div>
      </section>

      <section className="tts-proof-strip" aria-label="Technical translation capabilities">
        <div className="tts-shell tts-proof-grid">
          <div className="tts-proof-item"><strong>100+ Languages</strong><span>Global and regional technical content coverage</span></div>
          <div className="tts-proof-item"><strong>Subject-Matter Linguists</strong><span>Technical expertise matched to content and industry</span></div>
          <div className="tts-proof-item"><strong>Terminology + Translation Memory</strong><span>Consistency across documents and updates</span></div>
          <div className="tts-proof-item"><strong>ISO-Certified Processes</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span></div>
        </div>
      </section>

      <section className="tts-section" id="technical-translation-overview" aria-labelledby="technical-overview-title">
        <div className="tts-shell tts-overview-layout">
          <div className="tts-overview-quote">
            <p className="tts-eyebrow">Accuracy in Real-World Use</p>
            <h2 id="technical-overview-title">Why Technical Translation Requires Specialized Expertise</h2>
            <p className="tts-big-copy">A translated instruction must still work. A translated warning must still protect. A translated specification must still remain technically correct.</p>
            <a className="tts-editorial-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <ArrowIcon /></a>
          </div>
          <div>
            <p className="tts-section-intro">
              Technical documentation requires more than language fluency. It requires an understanding of the products, processes, systems, and industries behind the content. Small terminology inconsistencies or inaccurate instructions can affect product usability, manufacturing efficiency, customer support, employee training, safety, and compliance.
            </p>
            <p>
              Stepes helps global teams preserve technical meaning across languages by combining specialized linguists, controlled terminology, reusable translation memory, structured quality processes, and technology-enabled workflows.
            </p>
            <div className="tts-preserve-list" aria-label="Technical content elements to preserve">
              {["Terminology accuracy", "Measurements and units", "Procedural clarity", "Warning and safety language", "Component names", "Software commands", "Formatting integrity", "Consistency across versions"].map((item) => (
                <div className="tts-preserve-item" key={item}><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
            <div className="tts-compare-panel">
              <div className="tts-compare-grid">
                <div className="tts-compare-col">
                  <h3>General Translation</h3>
                  <ul className="tts-compare-list">
                    {["Meaning and readability", "Tone and fluency", "Message clarity", "Cultural adaptation"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
                  </ul>
                </div>
                <div className="tts-compare-col">
                  <h3>Technical Translation</h3>
                  <ul className="tts-compare-list">
                    {["Terminology precision", "Technical intent", "Measurements and units", "Safety language", "Structured formatting", "Operational usability"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="technical-documentation" aria-labelledby="technical-documentation-title">
        <div className="tts-shell">
          <div className="tts-section-head tts-centered">
            <h2 id="technical-documentation-title">Technical Documentation Translation Across the Product Lifecycle</h2>
            <p className="tts-section-intro">Stepes translates technical content used from product development and manufacturing through global launch, operation, maintenance, support, and ongoing updates.</p>
          </div>
          <div className="tts-doc-grid">
            {documentGroups.map((group) => (
              <article className="tts-doc-item" key={group.title}>
                <div className="tts-icon-box"><LineIcon name={group.icon} /></div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="tts-mini-list">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-section" id="technical-industries" aria-labelledby="technical-industries-title">
        <div className="tts-shell">
          <div className="tts-section-head tts-centered">
            <h2 id="technical-industries-title">Technical Translation Across Global Industries</h2>
            <p className="tts-section-intro">Different industries use different technical language, documentation structures, quality controls, and product workflows. Stepes adapts resources and review to the technical environment behind the content.</p>
          </div>
          <div className="tts-industry-grid">
            {industries.map(([icon, title, text, href, link]) => (
              <article className="tts-industry-item" key={title}>
                <div className="tts-industry-top"><div className="tts-icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
                <a className="tts-editorial-link" href={href}>{link} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="manual-engineering-translation" aria-labelledby="manual-engineering-title">
        <div className="tts-shell">
          <div className="tts-split-head tts-mobile-center-head">
            <div>
              <p className="tts-eyebrow">Core Technical Documentation</p>
              <h2 id="manual-engineering-title">Technical Manual and Engineering Translation Services</h2>
            </div>
            <p className="tts-section-intro">Technical manuals must remain clear and usable across languages, while engineering documentation must preserve precise technical intent. Stepes supports both with specialist linguists, terminology control, structured QA, and multilingual file engineering.</p>
          </div>
          <div className="tts-feature-panel">
            <div className="tts-feature-grid">
              <article className="tts-feature-col">
                <div className="tts-icon-box"><LineIcon name="manual" /></div>
                <h3>Technical Manual Translation Services</h3>
                <p>Translate manuals used for installation, operation, maintenance, service, troubleshooting, and product support while preserving warnings, diagrams, callouts, structure, and version consistency.</p>
                <ul className="tts-feature-list">
                  {["User manuals", "Operation manuals", "Installation guides", "Service manuals", "Maintenance procedures", "Troubleshooting guides"].map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="tts-editorial-link" href="https://www.stepes.com/manufacturing-translation-services/technical-manuals/">Technical Manual Translation Services <ArrowIcon /></a>
              </article>
              <article className="tts-feature-col">
                <div className="tts-icon-box"><LineIcon name="engineering" /></div>
                <h3>Engineering Translation Services</h3>
                <p>Support engineering, supplier, manufacturing, quality, and field-service teams with multilingual specifications, design materials, reports, testing content, and product-development documentation.</p>
                <ul className="tts-feature-list">
                  {["Technical specifications", "Engineering reports", "Design documentation", "Testing materials", "Equipment documentation", "Quality records"].map((item) => <li key={item}>{item}</li>)}
                </ul>
                <a className="tts-editorial-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing & Engineering Translation <ArrowIcon /></a>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="tts-section" id="manufacturing-document-translation" aria-labelledby="manufacturing-document-title">
        <div className="tts-shell tts-manufacturing-layout">
          <div className="tts-manufacturing-head">
            <p className="tts-eyebrow">Global Production</p>
            <h2 id="manufacturing-document-title">Manufacturing Document Translation Services</h2>
            <p className="tts-section-intro">Manufacturing teams rely on accurate multilingual documentation for production consistency, quality control, supplier coordination, training, and workplace safety.</p>
            <a className="tts-editorial-link" href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services <ArrowIcon /></a>
          </div>
          <div className="tts-editorial-list">
            {[
              ["Production Consistency", "Translate SOPs, work instructions, process documentation, and equipment procedures so global teams can work from aligned operational information."],
              ["Quality and Inspection", "Support multilingual inspection records, quality procedures, technical reports, and manufacturing documentation with controlled terminology and numerical accuracy."],
              ["Training and Operations", "Translate equipment manuals, operator guides, technical training, and workplace materials for multilingual production and service environments."],
              ["Supplier Coordination", "Keep specifications, technical requirements, supplier instructions, process documentation, and product information consistent across global supply networks."],
            ].map(([title, text]) => (
              <article className="tts-editorial-row" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="software-documentation-translation" aria-labelledby="software-doc-title">
        <div className="tts-shell tts-software-section-grid">
          <div className="tts-software-copy">
            <p className="tts-eyebrow">Digital Product Content</p>
            <h2 id="software-doc-title">Software Documentation Translation and Localization</h2>
            <p className="tts-section-intro">Software documentation must remain accurate for developers, administrators, support teams, and end users while preserving code references, commands, parameters, links, and structured formatting.</p>
            <ul className="tts-software-list">
              {["API documentation", "Developer guides", "Release notes", "Configuration manuals", "Help systems", "Technical knowledge bases", "Administrator content", "Product support documentation"].map((item) => <li key={item}>{item}</li>)}
            </ul>
            <a className="tts-editorial-link" href="https://www.stepes.com/software-localization-services/">Software Localization Services <ArrowIcon /></a>
          </div>
          <SoftwareDocVisual />
        </div>
      </section>

      <section className="tts-section tts-section-dark" id="technical-translation-workflow" aria-labelledby="technical-workflow-title">
        <div className="tts-shell">
          <div className="tts-workflow-heading">
            <div>
              <p className="tts-eyebrow">Technical Quality Workflow</p>
              <h2 id="technical-workflow-title">Technical Accuracy Built Into Every Translation</h2>
            </div>
            <p className="tts-section-intro">Technical translation quality depends on more than fluency. Stepes connects subject expertise, terminology preparation, translation technology, professional review, QA, and reusable language assets in one controlled process.</p>
          </div>
          <div className="tts-workflow-grid">
            {workflowSteps.map(([title, text], index) => (
              <article className="tts-workflow-step" key={title}>
                <p className="tts-workflow-number">{String(index + 1).padStart(2, "0")}</p>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="tts-workflow-support">
            <h3>Quality Controls Matched to Technical Risk</h3>
            <div>
              <p>Safety-critical instructions, regulated device documentation, engineering reference materials, software help content, and frequently updated knowledge articles do not all require the same workflow. Stepes matches translation technology, linguist expertise, review depth, and QA requirements to the purpose and risk of each content stream.</p>
              <div className="tts-dark-links">
                <a className="tts-dark-link" href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance <ArrowIcon /></a>
                <a className="tts-dark-link" href="https://www.stepes.com/terminology-management/">Terminology Management <ArrowIcon /></a>
                <a className="tts-dark-link" href="https://www.stepes.com/translation-memory/">Translation Memory <ArrowIcon /></a>
                <a className="tts-dark-link" href="https://www.stepes.com/ai-translation-services/">AI Translation Services <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tts-section" id="terminology-management" aria-labelledby="terminology-title">
        <div className="tts-shell tts-governance-grid">
          <article className="tts-governance-panel">
            <p className="tts-eyebrow">Product Language Governance</p>
            <h2 id="terminology-title">Terminology Management for Technical Consistency</h2>
            <p className="tts-section-intro">Product names, component labels, process terms, safety language, engineering concepts, and software terminology must remain consistent across documents, languages, and product versions.</p>
            <div className="tts-governance-row">
              <div className="tts-icon-box"><LineIcon name="terminology" /></div>
              <div><h3>Approved Technical Terminology</h3><p>Develop and maintain multilingual glossaries for product, component, engineering, safety, and software language.</p></div>
            </div>
            <div className="tts-governance-row">
              <div className="tts-icon-box"><LineIcon name="memory" /></div>
              <div><h3>Translation Memory Reuse</h3><p>Reuse approved content across document families and updates to improve consistency and reduce duplicated translation effort.</p></div>
            </div>
            <a className="tts-editorial-link" href="https://www.stepes.com/terminology-management/">Enterprise Terminology Management <ArrowIcon /></a>
          </article>

          <article className="tts-governance-panel tts-dark-panel">
            <p className="tts-eyebrow">Documentation Continuity</p>
            <h2>Keep Technical Language Aligned Across Releases</h2>
            <p className="tts-section-intro">Technical content rarely stands alone. A term used in an interface may also appear in a manual, service procedure, warning, training course, support article, and engineering update.</p>
            <div className="tts-governance-row">
              <div className="tts-icon-box"><LineIcon name="layers" /></div>
              <div><h3>Cross-Document Alignment</h3><p>Maintain approved language across manuals, SOPs, product documentation, software content, technical support, and training.</p></div>
            </div>
            <div className="tts-governance-row">
              <div className="tts-icon-box"><LineIcon name="quality" /></div>
              <div><h3>Reviewer Feedback That Carries Forward</h3><p>Capture approved corrections and terminology decisions so future releases start from better language assets.</p></div>
            </div>
          </article>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="technical-file-formats" aria-labelledby="technical-formats-title">
        <div className="tts-shell tts-format-layout">
          <div className="tts-format-head">
            <p className="tts-eyebrow">Structured Content + File Engineering</p>
            <h2 id="technical-formats-title">Technical File Formats and Documentation Systems</h2>
            <p className="tts-section-intro">Technical translation often requires more than extracting words. Structure, tags, tables, links, diagrams, metadata, variables, and publishing requirements must survive the multilingual workflow.</p>
            <a className="tts-editorial-link" href="https://www.stepes.com/resources/file-format-support/">Explore File Format Support <ArrowIcon /></a>
          </div>
          <div>
            <div className="tts-format-grid">
              {formats.map(([title, items]) => (
                <article className="tts-format-item" key={title}>
                  <h3>{title}</h3>
                  <div className="tts-format-tags">{items.map((item) => <span className="tts-format-tag" key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
            <div className="tts-format-note"><p>Stepes helps preserve document structure, formatting, tables, links, tags, variables, and layout so translated technical content is easier to review, publish, integrate, and maintain.</p></div>
          </div>
        </div>
      </section>

      <section className="tts-section" id="ai-assisted-technical-translation" aria-labelledby="ai-technical-title">
        <div className="tts-shell">
          <div className="tts-section-head tts-centered">
            <p className="tts-eyebrow">AI + Professional Expertise</p>
            <h2 id="ai-technical-title">Use AI to Accelerate the Workflow — Not Replace Technical Judgment</h2>
            <p className="tts-section-intro">Stepes combines advanced translation technology with professional technical expertise to improve efficiency, consistency, and scalability while keeping human judgment where context, terminology, safety, and final quality matter.</p>
          </div>
          <div className="tts-ai-grid">
            {aiPaths.map((path) => (
              <article className="tts-ai-card" key={path.title}>
                <div className="tts-ai-label">{path.label}</div>
                <h3>{path.title}</h3>
                <p>{path.text}</p>
              </article>
            ))}
          </div>
          <div className="tts-ai-footer">
            <h3>Technology Can Accelerate</h3>
            <ul className="tts-ai-points">
              {["Terminology extraction", "Translation-memory leverage", "Changed-content detection", "Consistency checking", "Large-volume processing", "Workflow automation"].map((item) => <li key={item}><CheckIcon />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="technical-quality-security" aria-labelledby="technical-quality-security-title">
        <div className="tts-shell tts-trust-layout">
          <div>
            <h2 id="technical-quality-security-title">Quality and Security for Business-Critical Technical Content</h2>
            <p className="tts-section-intro">Technical documentation can contain proprietary product information, engineering designs, manufacturing processes, software architecture, supplier data, and safety-sensitive instructions. Stepes combines quality discipline with controlled handling for enterprise technical content.</p>
            <div className="tts-btn-row">
              <a className="tts-editorial-link" href="https://www.stepes.com/security/">Security at Stepes <ArrowIcon /></a>
              <a className="tts-editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">ISO-Certified Translation Services <ArrowIcon /></a>
            </div>
          </div>
          <div className="tts-trust-panel">
            <div className="tts-trust-grid">
              {[
                ["quality", "Professional Technical Review", "Technical linguists review meaning, terminology, clarity, completeness, numbers, units, warnings, and context according to the agreed workflow."],
                ["terminology", "Terminology Verification", "Approved terminology and reusable language assets help protect consistency across documents, product families, and updates."],
                ["lock", "Controlled Content Handling", "Secure file handling and controlled project access support confidential engineering, manufacturing, product, and software content."],
                ["quality", "Structured QA Processes", "Automated and professional QA can check completeness, formatting, tags, references, terminology, and other technical risk points before delivery."],
              ].map(([icon, title, text]) => (
                <article className="tts-trust-item" key={title}>
                  <div className="tts-trust-top"><div className="tts-icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tts-section" id="technical-translation-languages" aria-labelledby="technical-languages-title">
        <div className="tts-shell tts-language-layout">
          <div className="tts-stack-center-head">
            <h2 id="technical-languages-title">Technical Translation in 100+ Languages</h2>
            <p className="tts-section-intro">Support global product launches, international manufacturing operations, software releases, customer support, and technical documentation across major global and regional markets.</p>
            <a className="tts-editorial-link" href="https://www.stepes.com/translation-languages/">Explore Supported Languages <ArrowIcon /></a>
          </div>
          <div className="tts-language-groups">
            {[
              ["Europe", "German, French, Italian, Spanish, Portuguese, Dutch, Polish, Czech, Danish, Swedish, Norwegian, Finnish, and additional European languages."],
              ["Asia-Pacific", "Simplified and Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, and additional regional languages."],
              ["Middle East", "Arabic, Hebrew, Turkish, Persian, and language coverage for regional technical and business requirements."],
              ["Americas + Global Markets", "Spanish variants, Brazilian Portuguese, Canadian French, English-market adaptation, and multilingual programs spanning worldwide product and operational teams."],
            ].map(([title, text]) => <div className="tts-language-group" key={title}><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-blush" id="why-stepes-technical" aria-labelledby="why-stepes-technical-title">
        <div className="tts-shell tts-benefit-layout">
          <div className="tts-stack-center-head">
            <p className="tts-eyebrow">Why Stepes</p>
            <h2 id="why-stepes-technical-title">A Technical Translation Partner Built for Enterprise Scale</h2>
            <p className="tts-section-intro">Stepes combines professional technical expertise, terminology control, structured quality processes, and smarter technology-enabled workflows to support multilingual documentation across the full content lifecycle—without treating automation as a substitute for technical judgment.</p>
          </div>
          <div className="tts-benefit-grid">
            {benefits.map(([icon, title, text]) => (
              <article className="tts-benefit-item" key={title}>
                <div className="tts-benefit-top"><div className="tts-icon-box"><LineIcon name={icon} /></div><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-section tts-section-soft" id="related-technical-services" aria-labelledby="related-technical-title">
        <div className="tts-shell">
          <div className="tts-section-head tts-centered">
            <p className="tts-eyebrow">Related Translation Solutions</p>
            <h2 id="related-technical-title">Connect Technical Translation to the Rest of Your Global Content</h2>
            <p className="tts-section-intro">Build a connected multilingual program across technical manuals, manufacturing operations, software, aviation, medical devices, safety documentation, and other specialized content.</p>
          </div>
          <div className="tts-related-grid">
            {relatedServices.map(([title, text, href]) => (
              <article className="tts-related-item" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <a className="tts-editorial-link" href={href}>{title} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-section" id="technical-translation-faq" aria-labelledby="technical-faq-title">
        <div className="tts-shell tts-faq-layout">
          <div className="tts-faq-head">
            <h2 id="technical-faq-title">Common Questions About Technical Translation Services</h2>
            <p className="tts-section-intro">Find answers about document types, technical accuracy, terminology, AI-assisted workflows, file formats, confidentiality, and pricing.</p>
          </div>
          <div className="tts-faq-list">
            {faqs.map(([question, answer]) => (
              <details className="tts-faq-item" key={question}>
                <summary>{question}</summary>
                <div className="tts-faq-answer"><p>{answer}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tts-final-cta" aria-labelledby="technical-cta-title">
        <div className="tts-shell">
          <div className="tts-cta-panel">
            <div className="tts-cta-copy">
              <h2 id="technical-cta-title">Translate Your Technical Content for Global Markets</h2>
              <p>Whether you are launching a product, supporting global manufacturing, localizing software documentation, or maintaining multilingual technical libraries, Stepes provides the expertise and workflows needed to communicate complex information accurately worldwide.</p>
            </div>
            <div className="tts-cta-actions">
              <a className="tts-btn tts-btn-primary" href="https://www.stepes.com/contact-sales/">GET A QUOTE <ArrowIcon /></a>
              <a className="tts-btn tts-btn-secondary" href="https://www.stepes.com/contact-us/">CONTACT US <ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
