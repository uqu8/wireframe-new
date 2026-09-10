import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushText: "#F2A7C6",
  ink: "#0F172A",
  slate: "#475569",
  muted: "#64748B",
  line: "#E5E7EB",
  soft: "#F7F8FA",
  dark: "#161A22",
};

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  sds: "https://www.stepes.com/sds-translation-services/",
  materials: "https://www.stepes.com/materials-science-translation-services/",
  chemicalPatent: "https://www.stepes.com/chemical-patent-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  oilGas: "https://www.stepes.com/oil-gas-translation-services/",
  agriculture: "https://www.stepes.com/agriculture-translation-services/",
  electronics: "https://www.stepes.com/electronics-translation-services/",
  plastics: "https://www.stepes.com/plastics-translation-services/",
  scientific: "https://www.stepes.com/scientific-translation-services/",
  ai: "https://www.stepes.com/ai-translation-services/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  portal: "https://www.stepes.com/translation-management-portal/",
  analytics: "https://www.stepes.com/translation-reporting-analytics/",
  api: "https://www.stepes.com/developers/translation-api/",
  languages: "https://www.stepes.com/translation-languages/",
};

const industryBranches = [
  {
    title: "Industrial & Commodity Chemicals",
    body: "Bulk chemicals, industrial gases, solvents, acids, intermediates, base chemicals, and large-scale chemical manufacturing content for global production and distribution.",
  },
  {
    title: "Specialty & Fine Chemicals",
    body: "Catalysts, additives, specialty formulations, high-purity chemicals, and performance products requiring precise technical terminology and product information.",
  },
  {
    title: "Petrochemicals & Process Chemicals",
    body: "Engineering, manufacturing, safety, product, and commercial content for chemical intermediates, refinery products, olefins, aromatics, and process chemicals.",
    link: { label: "Oil & Gas Translation Services", href: URLS.oilGas },
  },
  {
    title: "Polymers, Plastics & Elastomers",
    body: "Technical data, specifications, processing instructions, manufacturing procedures, testing, and safety content for thermoplastics, thermosets, resins, engineering plastics, rubber, specialty elastomers, additives, and polymer compounds.",
    link: { label: "Plastics Translation Services", href: URLS.plastics },
  },
  {
    title: "Paints, Coatings, Adhesives & Sealants",
    body: "Formulations, TDSs, labels, application instructions, product specifications, surface preparation procedures, and safety documentation.",
  },
  {
    title: "Agrochemicals & Fertilizers",
    body: "Product safety information, labels, application instructions, technical documentation, regulatory materials, and research content for crop-protection and fertilizer products.",
    link: { label: "Agriculture Translation Services", href: URLS.agriculture },
  },
  {
    title: "Consumer & Formulated Chemicals",
    body: "Multilingual packaging, labels, instructions, technical documentation, websites, and safety communication for cleaning products, detergents, and formulated goods.",
  },
  {
    title: "Advanced Materials & Nanomaterials",
    body: "Scientific and technical content for graphene, nanomaterials, smart materials, high-performance polymers, advanced coatings, and engineered materials.",
    link: { label: "Materials Science Translation Services", href: URLS.materials },
  },
  {
    title: "Metals, Alloys, Ceramics & Glass",
    body: "Research, specifications, manufacturing documentation, processing instructions, test methods, quality documentation, and product information.",
  },
  {
    title: "Composites & Engineered Materials",
    body: "R&D, testing, specifications, manufacturing, quality, safety, and commercialization content for carbon fiber and other high-performance engineered materials.",
  },
  {
    title: "Battery, Energy & Critical Materials",
    body: "Materials specifications, test methods, manufacturing documentation, safety information, supplier content, patents, and product data for energy-storage materials.",
  },
  {
    title: "Electronic & Semiconductor Materials",
    body: "Specialty gases, photoresists, substrates, high-purity process chemicals, electronic materials, and semiconductor manufacturing content.",
    link: { label: "Electronics Translation Services", href: URLS.electronics },
  },
];

const contentGroups = [
  {
    icon: "shield",
    title: "Safety & Regulatory Content",
    description: "Translate critical information used to communicate product hazards, handling requirements, environmental considerations, and regulatory information.",
    items: [
      "Safety Data Sheets and extended SDS content",
      "Chemical labels and GHS hazard communication",
      "Exposure and toxicology information",
      "Environmental and product stewardship documentation",
      "Regulatory reports and compliance communications",
      "EHS and emergency safety content",
    ],
  },
  {
    icon: "gear",
    title: "Technical & Manufacturing Content",
    description: "Support international plants, engineering teams, suppliers, technicians, and production personnel with technically accurate multilingual documentation.",
    items: [
      "SOPs and work instructions",
      "Manufacturing and process documentation",
      "Engineering specifications and technical reports",
      "Equipment, installation, and maintenance manuals",
      "P&ID and process-safety related content",
      "HAZOP materials, quality procedures, and EHS training",
    ],
    link: { label: "Technical Translation Services", href: URLS.technical },
  },
  {
    icon: "tag",
    title: "Product & Commercial Content",
    description: "Communicate technical product value accurately from manufacturing and product teams to distributors, technical buyers, and customers.",
    items: [
      "Technical Data Sheets and product specifications",
      "Certificates of Analysis",
      "Product labels and packaging",
      "Catalogs, brochures, and product websites",
      "Technical sales and customer documentation",
      "Product databases and customer-support content",
    ],
  },
  {
    icon: "flask",
    title: "R&D & Intellectual Property",
    description: "Support international research collaboration and the protection and commercialization of chemical and materials innovation.",
    items: [
      "Scientific papers and laboratory methods",
      "Research reports and testing protocols",
      "Materials characterization reports",
      "Chemical patents and patent claims",
      "Invention disclosures and prior art",
      "Research presentations and conference materials",
    ],
    link: { label: "Chemical Patent Translation Services", href: URLS.chemicalPatent },
  },
  {
    icon: "database",
    title: "Digital & Enterprise Content",
    description: "Translate the multilingual information that lives inside modern enterprise systems rather than only in standalone documents.",
    items: [
      "LIMS, QMS, ERP, and MES content",
      "PIM and PLM information",
      "SDS authoring and regulatory platforms",
      "Product portals and CMS content",
      "Applications and training platforms",
      "Structured product records and data feeds",
    ],
  },
];

const integrityItems = [
  ["CAS & EC identifiers", "Preserve controlled substance and product references across language versions."],
  ["Chemical nomenclature", "Manage IUPAC names, common names, abbreviations, trade names, and preferred customer terminology."],
  ["Formulas & structures", "Protect chemical formulas, InChI identifiers, SMILES strings, and similar structured information."],
  ["Hazard & transport codes", "Keep H/P codes, UN numbers, classifications, and customer-approved hazard information aligned."],
  ["Numbers, units & concentrations", "Check values, ranges, tolerances, temperatures, pressures, decimal formatting, and measurement units."],
  ["Grades & test references", "Maintain material designations, test-method references, standard numbers, and product identifiers consistently."],
];

const advancedMaterials = [
  ["Battery & Energy Materials", "Cathode and anode materials, electrolytes, separators, solid-state technologies, fuel cells, and energy-storage materials."],
  ["Semiconductor & Electronic Materials", "Electronic chemicals, specialty gases, substrates, photoresists, high-purity materials, and process technologies."],
  ["Nanomaterials", "Graphene, nanoparticles, nanostructured coatings, carbon-based materials, and nanoscale material technologies."],
  ["Composites & Lightweight Materials", "Carbon-fiber composites, reinforced polymers, lightweight structural materials, and high-performance engineered systems."],
  ["High-Performance Polymers & Coatings", "Advanced resins, engineering plastics, fluoropolymers, specialty elastomers, and functional or protective coating technologies."],
  ["Metals, Ceramics & Smart Materials", "Superalloys, engineered ceramics, technical glass, responsive materials, and emerging high-performance materials."],
];

const lifecycle = [
  ["Research & Discovery", "Research papers, laboratory methods, scientific literature, patents, invention disclosures, and collaboration content."],
  ["Development & Testing", "Formulations, test methods, materials characterization, technical reports, specifications, and quality documentation."],
  ["Regulatory & Safety", "SDS content, labeling, product stewardship information, safety documentation, and supporting regulatory materials."],
  ["Manufacturing", "SOPs, work instructions, process documentation, engineering content, equipment manuals, quality procedures, and training."],
  ["Commercialization", "TDSs, product specifications, packaging, websites, catalogs, product databases, and technical sales content."],
  ["Global Product Support", "Product revisions, safety updates, customer communications, technical support, training, and ongoing content changes."],
];

const workflow = [
  ["Prepare Language Assets", "Apply approved translation memory, terminology, customer references, and content-specific instructions before translation begins."],
  ["AI-Powered Translation", "Accelerate suitable high-volume content with AI or machine translation configured for the project and content type."],
  ["Automated Technical QA", "Check repeatable issues involving numbers, units, completeness, terminology, formatting, and protected technical elements."],
  ["Professional Linguistic Review", "Use experienced linguists to validate meaning, context, fluency, terminology, and technical communication according to the required review level."],
  ["Approve & Reuse", "Capture approved language and customer feedback so future revisions and recurring content can build on validated multilingual assets."],
];

const enterpriseSystems = [
  "PIM",
  "PLM",
  "ERP",
  "LIMS",
  "QMS",
  "MES",
  "SDS Authoring",
  "Regulatory Databases",
  "CMS",
  "APIs",
  "Product Portals",
  "Structured Data Feeds",
];

const technologies = [
  {
    icon: "memory",
    title: "Translation Memory",
    body: "Reuse previously approved translations across product families, safety content, specifications, manuals, and revisions to improve consistency and reduce repetitive work.",
    link: { label: "Enterprise Translation Memory", href: URLS.translationMemory },
  },
  {
    icon: "terms",
    title: "Terminology Management",
    body: "Maintain approved multilingual terminology for chemicals, materials, products, equipment, processes, regulatory language, and customer-specific vocabulary.",
    link: { label: "Terminology Management", href: URLS.terminology },
  },
  {
    icon: "check",
    title: "Translation Quality Assurance",
    body: "Combine professional review with automated checks for terminology, numbers, completeness, consistency, formatting, and other measurable quality indicators.",
    link: { label: "Translation Quality Assurance", href: URLS.quality },
  },
  {
    icon: "api",
    title: "APIs & Workflow Integration",
    body: "Connect applications, content platforms, and enterprise systems to scalable translation workflows for structured or continuously updated multilingual content.",
    link: { label: "Translation API", href: URLS.api },
  },
  {
    icon: "portal",
    title: "Customer Translation Portal",
    body: "Submit requests, upload files, review project information, track work, collaborate with Stepes teams, and access completed translations in one workspace.",
    link: { label: "Customer Translation Portal", href: URLS.portal },
  },
  {
    icon: "chart",
    title: "Reporting & Analytics",
    body: "Gain visibility into multilingual activity across languages, projects, workflows, reuse, and recurring enterprise content programs.",
    link: { label: "Translation Reporting & Analytics", href: URLS.analytics },
  },
];

const teams = [
  ["Regulatory & Product Stewardship", "SDS, labels, product safety information, regulatory documentation, environmental content, and stewardship communications."],
  ["EHS", "Safety procedures, hazard communication, workplace information, emergency materials, operating procedures, and employee training."],
  ["R&D", "Scientific research, laboratory procedures, technical papers, test methods, research reports, and collaborative documentation."],
  ["Engineering & Manufacturing", "SOPs, work instructions, specifications, manufacturing procedures, equipment documentation, process information, and technical training."],
  ["Product & Commercial", "TDSs, product databases, packaging, websites, brochures, catalogs, sales materials, and customer communications."],
  ["Legal & IP", "Chemical patents, patent claims, specifications, prior art, invention disclosures, technical agreements, and related IP content."],
];

const related = [
  ["SDS Translation Services", "Safety Data Sheet localization with controlled terminology, multilingual hazard communication, and structured quality processes.", URLS.sds],
  ["Plastics Translation Services", "Dedicated translation for plastics engineering, injection molding, processing, packaging, and plastics manufacturing content.", URLS.plastics],
  ["Materials Science Translation Services", "Translation for materials research, testing, nanotechnology, batteries, composites, coatings, and advanced materials.", URLS.materials],
  ["Chemical Patent Translation Services", "Scientific and legal precision for chemical patent applications, claims, specifications, and technical descriptions.", URLS.chemicalPatent],
  ["Technical Translation Services", "Professional translation for manuals, SOPs, engineering specifications, safety documentation, and complex technical files.", URLS.technical],
  ["Scientific Translation Services", "Specialized translation for chemistry research, laboratory methods, scientific publications, and interdisciplinary technical content.", URLS.scientific],
];

const whyStepes = [
  ["Technical Expertise", "Professional language expertise aligned with chemistry, chemical engineering, materials science, manufacturing, and related technical disciplines."],
  ["Terminology Precision", "Controlled chemical, product, engineering, manufacturing, and regulatory terminology across languages and content types."],
  ["Risk-Based Quality", "Translation, review, and QA workflows matched to the purpose, audience, complexity, and risk profile of the content."],
  ["AI-Powered Efficiency", "AI translation and automation for suitable content, supported by professional expertise where human judgment matters most."],
  ["Enterprise Scalability", "Recurring multilingual programs across product lines, languages, facilities, departments, and global markets."],
  ["Connected Technology", "Translation memory, terminology, QA, workflows, portal visibility, APIs, and analytics in one connected operating model."],
];

const faqs = [
  {
    q: "What are chemical translation services?",
    a: "Chemical translation services provide specialized multilingual translation for content involving chemistry, chemical engineering, chemical manufacturing, product safety, regulatory communication, materials science, and related technical disciplines. Chemical translation frequently requires specialized handling of scientific terminology, chemical names, hazard statements, formulas, numerical data, material specifications, and controlled technical information.",
  },
  {
    q: "What types of chemical documents does Stepes translate?",
    a: "Stepes translates Safety Data Sheets, Technical Data Sheets, chemical labels, SOPs, work instructions, manufacturing procedures, laboratory reports, technical specifications, product documentation, regulatory materials, patents, research papers, training content, websites, product databases, and other chemical and materials content. We also support structured information used in enterprise systems and digital product workflows.",
  },
  {
    q: "Does Stepes provide Safety Data Sheet translation?",
    a: "Yes. Stepes provides specialized Safety Data Sheet translation services for chemical, industrial, agricultural, manufacturing, and other organizations that distribute or use chemical products internationally. SDS workflows can include multilingual hazard communication, chemical terminology controls, and appropriate human review.",
    link: { label: "SDS Translation Services", href: URLS.sds },
  },
  {
    q: "Can Stepes translate GHS, OSHA HCS, REACH, and CLP-related content?",
    a: "Yes. Stepes translates customer-approved safety and regulatory content used in connection with GHS-based hazard communication and regional frameworks such as OSHA's Hazard Communication Standard, EU REACH, and EU CLP. Stepes focuses on accurate localization and preservation of approved terminology, classifications, codes, and technical information; regulatory classification and legal compliance determinations remain with the responsible organization or regulatory professional.",
  },
  {
    q: "How does Stepes maintain chemical terminology across languages?",
    a: "Stepes can combine terminology management, translation memory, customer glossaries and reference materials, automated quality checks, and professional linguistic review. Approved language can be reused across projects and revisions so product names, chemical terminology, technical expressions, and customer-specific vocabulary remain more consistent over time.",
    link: { label: "Terminology Management", href: URLS.terminology },
  },
  {
    q: "What information should not simply be translated in a chemical document?",
    a: "Chemical documents often contain information that must be preserved exactly or handled according to defined rules rather than translated as ordinary prose. Examples can include CAS Registry Numbers, EC numbers, formulas, InChI and SMILES identifiers, product codes, UN numbers, material grades, measurement values, test references, and certain hazard or classification codes.",
  },
  {
    q: "Can AI be used for chemical translation?",
    a: "Yes, when the workflow is appropriate for the content. Stepes can combine AI translation with translation memory, controlled terminology, automated QA, professional linguists, and human review. The amount of automation and review should reflect the content's purpose, technical complexity, regulatory significance, safety impact, audience, and customer quality requirements.",
    link: { label: "AI Translation Services", href: URLS.ai },
  },
  {
    q: "Does Stepes translate chemical patents and scientific research?",
    a: "Yes. Stepes translates chemical patents, patent claims, specifications, prior art, invention disclosures, scientific papers, research reports, laboratory methods, testing documentation, and other R&D content requiring scientific and technical precision.",
    link: { label: "Chemical Patent Translation Services", href: URLS.chemicalPatent },
  },
  {
    q: "Can Stepes support large multilingual chemical translation programs?",
    a: "Yes. Stepes supports enterprise translation programs involving multiple languages, content types, business units, product families, and recurring translation requirements. Translation memory, terminology management, workflow automation, project visibility, APIs, quality controls, and reporting can help organizations manage multilingual content as a continuous program rather than a series of disconnected projects.",
  },
];

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className={open ? "faq-chevron is-open" : "faq-chevron"}>
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const p = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round" };

  if (name === "shield") return <svg {...common}><path {...p} d="M12 3 5.5 5.5v5.4c0 4.2 2.6 7.7 6.5 10.1 3.9-2.4 6.5-5.9 6.5-10.1V5.5L12 3Z"/><path {...p} d="m9 12 2 2 4-4"/></svg>;
  if (name === "gear") return <svg {...common}><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M19 13.5v-3l-2-.6a7.4 7.4 0 0 0-.8-1.9l1-1.9-2.1-2.1-1.9 1a7.4 7.4 0 0 0-1.9-.8L10.5 2h-3l-.6 2.2a7.4 7.4 0 0 0-1.9.8L3.1 4 1 6.1 2 8a7.4 7.4 0 0 0-.8 1.9L-1 10.5v3l2.2.6A7.4 7.4 0 0 0 2 16l-1 1.9L3.1 20l1.9-1a7.4 7.4 0 0 0 1.9.8l.6 2.2h3l.6-2.2a7.4 7.4 0 0 0 1.9-.8l1.9 1 2.1-2.1-1-1.9a7.4 7.4 0 0 0 .8-1.9L19 13.5Z" transform="translate(2 0) scale(.83)"/></svg>;
  if (name === "tag") return <svg {...common}><path {...p} d="M3 12V5a2 2 0 0 1 2-2h7l9 9-9 9-9-9Z"/><circle {...p} cx="8" cy="8" r="1"/></svg>;
  if (name === "flask") return <svg {...common}><path {...p} d="M9 3h6M10 3v6l-5 8.5A2.3 2.3 0 0 0 7 21h10a2.3 2.3 0 0 0 2-3.5L14 9V3"/><path {...p} d="M7.2 16h9.6"/></svg>;
  if (name === "database") return <svg {...common}><ellipse {...p} cx="12" cy="5" rx="7" ry="3"/><path {...p} d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></svg>;
  if (name === "memory") return <svg {...common}><rect {...p} x="4" y="5" width="16" height="14" rx="2"/><path {...p} d="M8 9h8M8 13h6M8 17h4"/></svg>;
  if (name === "terms") return <svg {...common}><path {...p} d="M4 6h10M4 12h16M4 18h12"/><circle {...p} cx="18" cy="6" r="2"/></svg>;
  if (name === "check") return <svg {...common}><path {...p} d="M20 11.5V12a8 8 0 1 1-4.7-7.3"/><path {...p} d="m9 11 2.2 2.2L20 4.5"/></svg>;
  if (name === "api") return <svg {...common}><path {...p} d="M8 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2M16 7h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-2M8 12h8"/><path {...p} d="m11 9-3 3 3 3M13 9l3 3-3 3"/></svg>;
  if (name === "portal") return <svg {...common}><rect {...p} x="3" y="4" width="18" height="16" rx="2"/><path {...p} d="M3 9h18M8 13h4M8 17h7"/></svg>;
  if (name === "chart") return <svg {...common}><path {...p} d="M4 20V10M10 20V4M16 20v-7M22 20V8"/></svg>;
  return <svg {...common}><circle {...p} cx="12" cy="12" r="8"/></svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={light ? "editorial-link editorial-link-light" : "editorial-link"} href={href}>
      <span>{children}</span><Arrow size={15} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="btn btn-primary" href={href}>
      <span>{children}</span><Arrow size={17} />
    </a>
  );
}

function SecondaryButton({ href, children, inverted = false }) {
  return (
    <a className={inverted ? "btn btn-secondary btn-secondary-inverted" : "btn btn-secondary"} href={href}>
      <span>{children}</span><Arrow size={17} />
    </a>
  );
}

function HeadingGroup({ eyebrow, title, intro, dark = false, align = "center", mobileCenter = true }) {
  const classNames = ["heading-group", `heading-${align}`, mobileCenter ? "mobile-center" : "mobile-left"].join(" ");
  return (
    <div className={classNames}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className={dark ? "section-intro intro-dark" : "section-intro"}>{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg className="hero-svg" viewBox="0 0 560 500" fill="none">
        <defs>
          <linearGradient id="wireFade" x1="60" y1="45" x2="470" y2="438" gradientUnits="userSpaceOnUse">
            <stop stopColor="#A3ACBA" />
            <stop offset="1" stopColor="#596579" />
          </linearGradient>
          <linearGradient id="softMagenta" x1="100" y1="100" x2="445" y2="415" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C11D63" stopOpacity="0.22" />
            <stop offset="1" stopColor="#C11D63" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect x="26" y="26" width="508" height="448" rx="28" fill="#FAFAFB" stroke="#E1E5EA" />
        <path d="M72 106h416M72 390h416" stroke="#E2E6EC" />

        <g stroke="url(#wireFade)" strokeWidth="2">
          <path d="M125 195 187 159l63 36v72l-63 36-62-36v-72Z" />
          <path d="M250 195 312 159l63 36v72l-63 36-62-36" />
          <path d="m187 159 62-36 63 36" />
          <circle cx="187" cy="159" r="7" fill="#fff" />
          <circle cx="250" cy="195" r="7" fill="#fff" />
          <circle cx="312" cy="159" r="7" fill="#fff" />
          <circle cx="375" cy="195" r="7" fill="#fff" />
          <circle cx="312" cy="303" r="7" fill="#fff" />
          <circle cx="187" cy="303" r="7" fill="#fff" />
          <circle cx="125" cy="267" r="7" fill="#fff" />
        </g>

        <g stroke="#C11D63" strokeWidth="2.2" strokeLinecap="round">
          <path d="M93 338h53" />
          <path d="M414 142h51" />
          <circle cx="152" cy="338" r="4" fill="#C11D63" />
          <circle cx="408" cy="142" r="4" fill="#C11D63" />
        </g>

        <g className="hero-art-label">
          <rect x="78" y="62" width="160" height="58" rx="15" fill="#fff" stroke="#DDE2E8" />
          <text x="98" y="88" fontFamily="Arial, sans-serif" fontSize="14" fill="#202938">Safety Data</text>
          <text x="98" y="106" fontFamily="Arial, sans-serif" fontSize="12" fill="#788397">SDS · GHS · CLP</text>
        </g>

        <g className="hero-art-label">
          <rect x="330" y="328" width="150" height="64" rx="15" fill="#fff" stroke="#DDE2E8" />
          <text x="350" y="355" fontFamily="Arial, sans-serif" fontSize="14" fill="#202938">Materials Data</text>
          <text x="350" y="374" fontFamily="Arial, sans-serif" fontSize="12" fill="#788397">R&D · TDS · QA</text>
        </g>

        <g className="hero-art-label hero-art-band">
          <rect x="109" y="414" width="341" height="34" rx="17" fill="url(#softMagenta)" />
          <text x="146" y="436" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">TERMINOLOGY</text>
          <circle cx="268" cy="431" r="2.5" fill="#C11D63" />
          <text x="282" y="436" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">DATA INTEGRITY</text>
          <circle cx="389" cy="431" r="2.5" fill="#C11D63" />
          <text x="402" y="436" fontFamily="Arial, sans-serif" fontSize="12" fill="#8D2854">QA</text>
        </g>
      </svg>
    </div>
  );
}

function App() {
  const DEFAULT_OPEN_FAQ = 0;
  const [openFaq, setOpenFaq] = useState(DEFAULT_OPEN_FAQ);

  return (
    <div className="page-shell">
      <style>{styles}</style>

      <main>
        <section className="hero section-white">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>Chemical & Materials Translation Services</h1>
              <p className="hero-lead">
                Specialized translation for scientific, regulatory, safety, engineering, manufacturing, and product content—combining subject-matter expertise with terminology control, AI-powered workflows, and professional human review.
              </p>
              <div className="hero-actions">
                <PrimaryButton href={URLS.quote}>Get a Quote</PrimaryButton>
                <SecondaryButton href={URLS.contact}>Talk to an Expert</SecondaryButton>
              </div>
              <div className="hero-note">
                From Safety Data Sheets and chemical labels to advanced materials research, technical specifications, and structured product data, Stepes helps global teams communicate complex content accurately across markets.
              </div>
            </div>
            <HeroArtwork />
          </div>
        </section>

        <section className="proof-strip" aria-label="Service highlights">
          <div className="container proof-grid">
            {[
              ["100+ Languages", "Global language coverage"],
              ["Chemical & Materials Expertise", "Technical subject familiarity"],
              ["AI + Human Workflows", "Match the workflow to content risk"],
              ["Enterprise Quality Controls", "Terminology, reuse, and QA"],
            ].map(([title, body], i) => (
              <div className="proof-item" key={title}>
                <div className="proof-title">{title}</div>
                <div className="proof-body">{body}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section-white">
          <div className="container overview-grid">
            <div className="overview-heading heading-group mobile-center">
              <h2>Translation Built for Complex Chemical and Materials Content</h2>
              <p className="section-intro">
                Chemical and materials translation requires more than linguistic fluency. Scientific terminology, nomenclature, hazard information, formulas, measurements, material properties, engineering specifications, and regulatory language must remain accurate and consistent across languages.
              </p>
            </div>
            <div className="overview-rows">
              {[
                ["Scientific and Technical Precision", "Translate complex chemistry, materials, engineering, and manufacturing information without losing the technical meaning of the source."],
                ["Safety-Critical Communication", "Deliver clear multilingual safety, hazard, environmental, and operational information for employees, customers, regulators, distributors, and supply-chain partners."],
                ["Consistent Global Terminology", "Maintain approved chemical, product, process, and regulatory terminology across documents, languages, product families, and revisions."],
              ].map(([title, body]) => (
                <div className="overview-row" key={title}>
                  <div className="overview-marker" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
              <p className="overview-closing">
                Stepes combines professional linguists and subject-matter expertise with terminology management, translation memory, automated quality controls, and human review to protect meaning throughout the multilingual content lifecycle.
              </p>
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <HeadingGroup
              title="Chemical and Materials Industries We Support"
              intro="From industrial feedstocks and specialty formulations to polymers, battery chemistry, semiconductor materials, composites, and nanotechnology, Stepes supports multilingual content across an increasingly interconnected global industry."
            />
            <div className="branch-grid">
              {industryBranches.map((item) => (
                <article className="branch-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark">
          <div className="container regulatory-grid">
            <div className="regulatory-copy heading-group heading-left mobile-center">
              <h2>Translate Safety and Regulatory Content With Precision</h2>
              <p className="section-intro intro-dark">
                Chemical safety information must communicate hazards, handling requirements, protective measures, and technical information clearly across languages—while preserving customer-approved terminology, classifications, codes, numerical information, and document structure.
              </p>
              <p className="dark-body">
                Stepes supports multilingual content used within major chemical communication frameworks, including the UN GHS, OSHA Hazard Communication Standard, and EU REACH and CLP requirements. These requirements are also evolving toward digital labeling and more structured product information, increasing the importance of consistent multilingual data.
              </p>
              <div className="regulatory-links">
                <EditorialLink href={URLS.sds} light>SDS Translation Services</EditorialLink>
              </div>
            </div>

            <div className="regulatory-panel">
              <div className="regulatory-list">
                {[
                  "Safety Data Sheets and extended SDS content",
                  "GHS hazard communication",
                  "Chemical and product labels",
                  "Exposure scenarios and toxicology information",
                  "Environmental documentation",
                  "Product stewardship content",
                  "Compliance communications",
                  "Regulatory supporting documentation",
                  "EHS policies, procedures, and hazardous-material training",
                ].map((item) => (
                  <div className="dark-list-row" key={item}>
                    <span className="dark-check" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="regulatory-note">
                <strong>Translation supports regulatory communication.</strong>
                <span> Classification, regulatory determination, and legal compliance remain the responsibility of the applicable manufacturer, importer, regulatory professional, or other responsible party.</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <HeadingGroup
              title="Chemical and Materials Content We Translate"
              intro="Chemical organizations create multilingual content across R&D, safety, regulatory affairs, manufacturing, engineering, product management, sales, and customer support. Stepes provides one connected translation partner across this content ecosystem."
            />
            <div className="content-groups">
              {contentGroups.map((group) => (
                <article className="content-group" key={group.title}>
                  <div className="content-icon"><Icon name={group.icon} /></div>
                  <div className="content-copy">
                    <h3>{group.title}</h3>
                    <p>{group.description}</p>
                    <div className="content-list">
                      {group.items.map((item) => <div className="content-list-item" key={item}>{item}</div>)}
                    </div>
                    {group.link ? <EditorialLink href={group.link.href}>{group.link.label}</EditorialLink> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-blush">
          <div className="container integrity-grid">
            <div className="integrity-heading heading-group heading-left mobile-center">
              <h2>Protect Chemical Terminology and Data Across Languages</h2>
              <p className="section-intro">
                Chemical localization is not simply the translation of sentences. Critical technical elements may need to remain unchanged, follow an approved convention, or be processed according to defined rules.
              </p>
              <p className="body-copy">
                Stepes combines terminology management, translation memory, automated QA, customer reference materials, and professional review to help preserve scientific and technical information throughout translation.
              </p>
              <div className="inline-links">
                <EditorialLink href={URLS.terminology}>Terminology Management</EditorialLink>
                <EditorialLink href={URLS.translationMemory}>Translation Memory</EditorialLink>
              </div>
            </div>
            <div className="integrity-panel">
              {integrityItems.map(([title, body]) => (
                <div className="integrity-row" key={title}>
                  <div className="integrity-dot" aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container terminology-band">
            <div>
              <h3>Terminology That Gets Smarter With Every Project</h3>
              <p>
                Maintain approved multilingual terminology for product names, raw materials, process steps, equipment, chemical terms, branded expressions, and customer-specific language. As programs grow, these language assets help new projects build on approved work instead of starting from scratch.
              </p>
            </div>
            <EditorialLink href={URLS.terminology}>Explore Terminology Management</EditorialLink>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <div className="advanced-head">
              <HeadingGroup
                title="Translation Expertise for Advanced and Emerging Materials"
                intro="Materials innovation increasingly connects chemistry with physics, electrical engineering, energy systems, electronics, aerospace, automotive engineering, and advanced manufacturing. Stepes helps materials companies translate the scientific and technical content behind research, testing, production, and commercialization."
              />
            </div>
            <div className="advanced-grid">
              {advancedMaterials.map(([title, body]) => (
                <article className="advanced-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="advanced-link-row">
              <p>For deeper coverage of materials research, testing, nanotechnology, coatings, batteries, composites, and other advanced-material applications:</p>
              <EditorialLink href={URLS.materials}>Materials Science Translation Services</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section section-soft lifecycle-section">
          <div className="container">
            <HeadingGroup
              title="Support the Entire Chemical and Materials Product Lifecycle"
              intro="New formulations, specifications, test results, safety information, manufacturing procedures, product updates, and regulatory changes create multilingual requirements throughout the product lifecycle. Stepes helps maintain continuity from innovation through commercial scale."
              mobileCenter={false}
              align="left"
            />
            <div className="lifecycle-track">
              {lifecycle.map(([title, body], index) => (
                <article className="lifecycle-step" key={title}>
                  <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                  <div className="step-line" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
            <div className="lifecycle-summary">
              One connected translation program helps keep terminology, approved language, and technical information aligned from R&D to global manufacturing and commercialization.
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container ai-layout">
            <div className="ai-copy heading-group heading-left mobile-center">
              <Eyebrow>AI + HUMAN</Eyebrow>
              <h2>AI Translation Accelerated by Chemical Expertise</h2>
              <p className="section-intro">
                AI is changing how large volumes of technical content can be translated, but chemical content requires workflows designed around the importance and risk of the information.
              </p>
              <p className="body-copy">
                Stepes combines AI translation, translation memory, terminology management, workflow automation, professional linguists, quality assurance, and human review. The appropriate combination can be selected according to content type, audience, quality requirements, and business risk.
              </p>
              <EditorialLink href={URLS.ai}>AI Translation Services</EditorialLink>
            </div>
            <div className="workflow-panel">
              {workflow.map(([title, body], index) => (
                <div className="workflow-row" key={title}>
                  <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
                  <div className="workflow-content">
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container risk-band">
            <div className="risk-col">
              <div className="risk-label">Higher-risk content</div>
              <h3>Increase human review where consequences are greater.</h3>
              <p>Safety-critical, regulatory, intellectual-property, and sensitive technical content can receive more extensive professional review and validation.</p>
            </div>
            <div className="risk-col">
              <div className="risk-label">High-volume recurring content</div>
              <h3>Use automation where it creates controlled efficiency.</h3>
              <p>Recurring product information, technical documentation, knowledge content, and appropriate internal materials can benefit more extensively from AI and translation memory.</p>
            </div>
          </div>
        </section>

        <section className="section section-dark systems-section">
          <div className="container systems-grid">
            <div className="systems-copy heading-group heading-left mobile-center">
              <Eyebrow dark>ENTERPRISE CONTENT</Eyebrow>
              <h2>Translate More Than Documents</h2>
              <p className="section-intro intro-dark">
                Product compositions, specifications, classifications, material properties, environmental data, safety information, supplier records, and lifecycle information increasingly live inside interconnected digital systems.
              </p>
              <p className="dark-body">
                Stepes helps companies translate and manage multilingual content across structured and continuously updated environments—supporting a broader shift toward digital labeling, connected product data, and lifecycle information such as Digital Product Passports.
              </p>
            </div>
            <div className="systems-visual">
              <div className="system-core">
                <span>STEPES</span>
                <strong>Translation Layer</strong>
                <small>AI · terminology · review · QA</small>
              </div>
              <div className="system-grid">
                {enterpriseSystems.map((item) => <div className="system-chip" key={item}>{item}</div>)}
              </div>
              <div className="system-output">Multilingual documents · data · applications · product information</div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <HeadingGroup
              title="Translation Technology for Global Chemical Content"
              intro="Stepes combines professional language services with an enterprise translation technology ecosystem designed for recurring multilingual content, structured information, and continuously evolving product portfolios."
            />
            <div className="technology-grid">
              {technologies.map((item) => (
                <article className="technology-item" key={item.title}>
                  <div className="technology-icon"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container quality-grid">
            <div className="quality-copy heading-group heading-left mobile-center">
              <h2>Quality Processes Designed for Technical Accuracy</h2>
              <p className="section-intro">
                A product brochure, an internal manufacturing procedure, a chemical patent, and a Safety Data Sheet do not carry the same linguistic, technical, or business risk. Quality workflows should reflect what the content is used for.
              </p>
              <p className="body-copy">
                Depending on project requirements, Stepes can combine professional translation, subject-matter linguist selection, customer terminology, translation memory, independent review, automated QA, technical consistency checks, formatting QA, revision control, and final delivery validation.
              </p>
              <EditorialLink href={URLS.quality}>Translation Quality Assurance</EditorialLink>
            </div>
            <div className="quality-panel">
              <div className="quality-tier">
                <div className="quality-kicker">Content purpose</div>
                <h3>Match the workflow to risk.</h3>
                <p>Review depth can be adapted to safety impact, regulatory significance, audience, complexity, and customer requirements.</p>
              </div>
              <div className="quality-divider" />
              <div className="quality-tier">
                <div className="quality-kicker">Revision control</div>
                <h3>Focus attention on what changed.</h3>
                <p>Translation memory and controlled terminology can preserve approved language across revised formulations, specifications, safety information, product variants, and process updates.</p>
              </div>
              <div className="quality-divider" />
              <div className="quality-tier">
                <div className="quality-kicker">Continuous improvement</div>
                <h3>Turn approved work into reusable assets.</h3>
                <p>Customer feedback and approved translations can strengthen terminology and translation memory for future projects and recurring content programs.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container scale-layout">
            <div className="scale-copy">
              <HeadingGroup
                title="Scale Chemical Translation Across Global Markets"
                intro="Chemical and materials companies operate through international manufacturing networks, suppliers, distributors, research organizations, customers, and regulatory environments. Stepes supports multilingual programs across major global regions and more than 100 languages."
                align="left"
              />
              <p className="body-copy scale-body">
                Whether you need one technical document translated into a single language or an ongoing program spanning products, facilities, departments, and markets, Stepes provides scalable workflows designed to keep technical content accurate and terminology consistent.
              </p>
              <EditorialLink href={URLS.languages}>Explore Translation Languages</EditorialLink>
            </div>
            <div className="region-panel" aria-label="Global coverage regions">
              {[
                "North America",
                "Latin America",
                "Europe",
                "Asia-Pacific",
                "Middle East",
                "Africa",
              ].map((region) => <div className="region-row" key={region}><span>{region}</span><span aria-hidden="true">↗</span></div>)}
            </div>
          </div>
        </section>

        <section className="section section-soft">
          <div className="container">
            <HeadingGroup
              title="One Translation Partner Across Chemical Organizations"
              intro="Different departments create different kinds of multilingual content, but they often depend on the same terminology, product information, and technical data. Stepes helps connect those requirements across the organization."
            />
            <div className="team-grid">
              {teams.map(([title, body]) => (
                <article className="team-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white">
          <div className="container">
            <HeadingGroup
              title="Explore Related Chemical & Materials Translation Expertise"
              intro="Extend your chemical and materials translation program with specialized Stepes services for safety data, plastics, materials science, intellectual property, technical documentation, and scientific content."
            />
            <div className="related-grid">
              {related.map(([title, body, href]) => (
                <a className="related-item" href={href} key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                  <div className="related-arrow" aria-hidden="true"><Arrow size={19} /></div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark why-section">
          <div className="container">
            <HeadingGroup
              title="Why Global Chemical and Materials Companies Choose Stepes"
              intro="Combine specialized language expertise with controlled terminology, risk-based quality, AI-powered efficiency, and enterprise translation technology built for complex multilingual content."
              dark
            />
            <div className="why-grid">
              {whyStepes.map(([title, body]) => (
                <article className="why-item" key={title}>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white faq-section">
          <div className="container faq-layout">
            <div className="faq-heading heading-group heading-left mobile-left">
              <h2>Chemical & Materials Translation FAQs</h2>
              <p className="section-intro">
                Answers to common questions about chemical translation, Safety Data Sheets, terminology, regulatory content, AI workflows, and enterprise-scale multilingual programs.
              </p>
            </div>
            <div className="faq-panel">
              {faqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div className={open ? "faq-item is-open" : "faq-item"} key={faq.q}>
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={open}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                      onClick={() => setOpenFaq(open ? -1 : index)}
                    >
                      <span>{faq.q}</span>
                      <Chevron open={open} />
                    </button>
                    {open ? (
                      <div className="faq-answer" id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`}>
                        <p>{faq.a}</p>
                        {faq.link ? <EditorialLink href={faq.link.href}>{faq.link.label}</EditorialLink> : null}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="final-cta-wrap">
          <div className="container">
            <div className="final-cta">
              <div className="final-cta-copy">
                <h2>Translate Chemical and Materials Content With Confidence</h2>
                <p>
                  From safety and regulatory content to advanced materials research, manufacturing documentation, product data, and global commercialization, Stepes combines specialized language expertise with modern translation technology to help chemical and materials companies communicate accurately at scale.
                </p>
              </div>
              <div className="final-cta-actions">
                <PrimaryButton href={URLS.quote}>Get a Quote</PrimaryButton>
                <SecondaryButton href={URLS.contact}>Talk to an Expert</SecondaryButton>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    --magenta: ${COLORS.magenta};
    --magenta-dark: ${COLORS.magentaDark};
    --burgundy: ${COLORS.burgundy};
    --blush: ${COLORS.blush};
    --blush-text: ${COLORS.blushText};
    --ink: ${COLORS.ink};
    --slate: ${COLORS.slate};
    --muted: ${COLORS.muted};
    --line: ${COLORS.line};
    --soft: ${COLORS.soft};
    --dark: ${COLORS.dark};
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  a { color: inherit; }
  button { font: inherit; }

  .page-shell {
    width: 100%;
    overflow-x: clip;
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding: 96px 0; }
  .section-white { background: #fff; }
  .section-soft { background: var(--soft); }
  .section-blush { background: var(--blush); }
  .section-dark { background: var(--dark); color: #fff; }

  h1, h2, h3, p { margin: 0; }
  h1, h2, h3 { font-weight: 600; letter-spacing: -0.03em; }
  h1 { font-size: 48px; line-height: 1.04; }
  h2 { font-size: 36px; line-height: 1.08; }
  h3 { font-size: 24px; line-height: 1.18; }
  p { font-size: 16px; line-height: 1.78; color: var(--slate); }

  .eyebrow {
    margin-bottom: 18px;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .eyebrow-dark { color: var(--blush-text); }

  .heading-group { max-width: 820px; }
  .heading-center { margin-left: auto; margin-right: auto; text-align: center; }
  .heading-left { text-align: left; }
  .section-intro {
    margin-top: 22px;
    max-width: 820px;
    font-size: 18px;
    line-height: 1.72;
    color: var(--slate);
  }
  .heading-center .section-intro { margin-left: auto; margin-right: auto; }
  .intro-dark { color: #C8CFD9; }
  .body-copy { margin-top: 22px; max-width: 760px; }
  .dark-body { margin-top: 22px; max-width: 760px; color: #AEB7C5; }

  .hero { padding: 104px 0 96px; }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.04fr) minmax(420px, 0.82fr);
    align-items: center;
    gap: 70px;
  }
  .hero-copy { max-width: 700px; }
  .hero-copy h1 { max-width: 680px; }
  .hero-lead {
    margin-top: 28px;
    max-width: 700px;
    font-size: 18px;
    line-height: 1.76;
    color: var(--slate);
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
  .hero-note {
    margin-top: 34px;
    padding-top: 26px;
    max-width: 660px;
    border-top: 1px solid var(--line);
    font-size: 16px;
    line-height: 1.75;
    color: var(--muted);
  }

  .btn {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 999px;
    padding: 13px 22px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .btn:focus-visible { outline: 3px solid rgba(193,29,99,.2); outline-offset: 3px; }
  .btn-primary,
  .btn-primary:link,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible,
  .btn-primary * {
    color: #fff !important;
    fill: none;
    stroke: currentColor;
  }
  .btn-primary {
    background: var(--magenta);
    border: 1px solid var(--magenta);
    box-shadow: 0 8px 24px rgba(193,29,99,.16);
  }
  .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
  .btn-secondary {
    background: #fff;
    border: 1px solid #D9DEE5;
    color: #1F2937;
  }
  .btn-secondary:hover { border-color: #B6BEC9; transform: translateY(-1px); }

  .hero-art {
    width: 100%;
    border-radius: 30px;
    box-shadow: 0 24px 70px rgba(15,23,42,.08);
  }
  .hero-svg { display: block; width: 100%; height: auto; }

  .proof-strip { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .proof-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); padding-top: 0; padding-bottom: 0; }
  .proof-item { padding: 28px 28px; min-height: 112px; }
  .proof-item + .proof-item { border-left: 1px solid var(--line); }
  .proof-title { font-size: 17px; font-weight: 600; line-height: 1.35; color: var(--ink); }
  .proof-body { margin-top: 8px; font-size: 16px; line-height: 1.55; color: var(--muted); }

  .overview-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 72px; align-items: start; }
  .overview-heading { max-width: 440px; }
  .overview-heading .section-intro { font-size: 18px; }
  .overview-rows { border-top: 1px solid var(--line); }
  .overview-row { display: grid; grid-template-columns: 20px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--line); }
  .overview-marker { width: 14px; height: 2px; margin-top: 15px; background: var(--magenta); }
  .overview-row h3 { font-size: 21px; }
  .overview-row p { margin-top: 10px; max-width: 680px; }
  .overview-closing { margin-top: 28px; max-width: 720px; }

  .branch-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0,1fr));
    margin-top: 52px;
    border-top: 1px solid #DCE1E7;
    border-left: 1px solid #DCE1E7;
  }
  .branch-item {
    min-height: 260px;
    padding: 30px 30px 28px;
    border-right: 1px solid #DCE1E7;
    border-bottom: 1px solid #DCE1E7;
    background: rgba(255,255,255,.65);
  }
  .branch-item h3 { font-size: 21px; }
  .branch-item p { margin-top: 14px; }
  .branch-item .editorial-link { margin-top: 20px; }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--magenta);
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.45;
  }
  .editorial-link:hover { color: var(--magenta-dark); }
  .editorial-link:hover svg { transform: translateX(2px); }
  .editorial-link svg { flex: 0 0 auto; transition: transform .16s ease; }
  .editorial-link:focus-visible { outline: 2px solid rgba(193,29,99,.3); outline-offset: 4px; border-radius: 4px; }
  .editorial-link-light { color: var(--blush-text); }
  .editorial-link-light:hover { color: #FFD5E7; }

  .regulatory-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 68px; align-items: start; }
  .regulatory-copy h2 { color: #fff; max-width: 560px; }
  .regulatory-links { margin-top: 28px; }
  .regulatory-panel {
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 28px;
    overflow: hidden;
    background: rgba(255,255,255,.035);
    box-shadow: 0 22px 70px rgba(0,0,0,.13);
  }
  .regulatory-list { padding: 10px 30px; }
  .dark-list-row { display: grid; grid-template-columns: 24px 1fr; gap: 12px; padding: 17px 0; border-bottom: 1px solid rgba(255,255,255,.08); color: #E7ECF2; font-size: 16px; line-height: 1.55; }
  .dark-list-row:last-child { border-bottom: 0; }
  .dark-check { color: var(--blush-text); font-weight: 600; }
  .regulatory-note { padding: 24px 30px 28px; border-top: 1px solid rgba(255,255,255,.10); background: rgba(193,29,99,.08); color: #C8CFD9; font-size: 16px; line-height: 1.68; }
  .regulatory-note strong { color: #fff; font-weight: 600; }

  .content-groups { margin-top: 54px; border-top: 1px solid var(--line); }
  .content-group {
    display: grid;
    grid-template-columns: 64px minmax(0,1fr);
    gap: 28px;
    padding: 34px 0;
    border-bottom: 1px solid var(--line);
  }
  .content-icon {
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #F6F7F9;
    border: 1px solid #E4E8ED;
    color: #3F4A59;
  }
  .content-copy h3 { font-size: 23px; }
  .content-copy > p { margin-top: 10px; max-width: 810px; }
  .content-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 28px; margin-top: 20px; max-width: 900px; }
  .content-list-item { padding: 10px 0; border-top: 1px solid #EEF0F2; font-size: 16px; line-height: 1.55; color: #475569; }
  .content-copy .editorial-link { margin-top: 18px; }

  .integrity-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 68px; align-items: start; }
  .integrity-heading h2 { max-width: 560px; }
  .inline-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 24px; }
  .integrity-panel { border-top: 1px solid #E5CBD6; }
  .integrity-row { display: grid; grid-template-columns: 18px 1fr; gap: 16px; padding: 25px 0; border-bottom: 1px solid #E5CBD6; }
  .integrity-dot { width: 7px; height: 7px; margin-top: 10px; border-radius: 50%; background: var(--magenta); }
  .integrity-row h3 { font-size: 20px; }
  .integrity-row p { margin-top: 8px; }
  .terminology-band {
    margin-top: 56px;
    display: grid;
    grid-template-columns: minmax(0,1fr) auto;
    gap: 40px;
    align-items: center;
    padding-top: 32px;
    padding-bottom: 32px;
    border-top: 1px solid #E5CBD6;
    border-bottom: 1px solid #E5CBD6;
  }
  .terminology-band h3 { font-size: 22px; }
  .terminology-band p { margin-top: 10px; max-width: 820px; }

  .advanced-grid {
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    gap: 0 38px;
    margin-top: 54px;
    border-top: 1px solid var(--line);
  }
  .advanced-item { padding: 28px 0; border-bottom: 1px solid var(--line); }
  .advanced-item h3 { font-size: 20px; }
  .advanced-item p { margin-top: 10px; }
  .advanced-link-row {
    margin-top: 38px;
    display: flex;
    gap: 18px 30px;
    align-items: center;
    justify-content: space-between;
    padding: 24px 26px;
    border: 1px solid var(--line);
    border-radius: 22px;
    background: #FBFBFC;
  }
  .advanced-link-row p { max-width: 820px; }

  .lifecycle-section .heading-group { max-width: 900px; }
  .lifecycle-track {
    position: relative;
    display: grid;
    grid-template-columns: repeat(6,minmax(0,1fr));
    margin-top: 52px;
    border-top: 1px solid #D7DDE4;
  }
  .lifecycle-step { position: relative; padding: 28px 22px 0 0; }
  .lifecycle-step + .lifecycle-step { padding-left: 22px; border-left: 1px solid #D7DDE4; }
  .step-number { color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .08em; }
  .step-line { width: 34px; height: 2px; margin-top: 14px; background: #AAB2BE; }
  .lifecycle-step h3 { margin-top: 20px; font-size: 19px; }
  .lifecycle-step p { margin-top: 11px; font-size: 16px; line-height: 1.66; }
  .lifecycle-summary {
    margin-top: 42px;
    padding: 22px 26px;
    border-left: 3px solid var(--magenta);
    background: #fff;
    font-size: 17px;
    line-height: 1.65;
    color: #334155;
  }

  .ai-layout { display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: start; }
  .ai-copy h2 { max-width: 560px; }
  .ai-copy .editorial-link { margin-top: 24px; }
  .workflow-panel { border-top: 1px solid var(--line); }
  .workflow-row { display: grid; grid-template-columns: 46px 1fr; gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .workflow-index { padding-top: 2px; color: var(--magenta); font-size: 13px; font-weight: 600; letter-spacing: .08em; }
  .workflow-content h3 { font-size: 20px; }
  .workflow-content p { margin-top: 8px; }
  .risk-band {
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    margin-top: 58px;
    border: 1px solid var(--line);
    border-radius: 28px;
    overflow: hidden;
  }
  .risk-col { padding: 32px; }
  .risk-col + .risk-col { border-left: 1px solid var(--line); }
  .risk-label { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
  .risk-col h3 { margin-top: 12px; font-size: 21px; }
  .risk-col p { margin-top: 12px; }

  .systems-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 70px; align-items: center; }
  .systems-copy h2 { color: #fff; }
  .systems-visual {
    border: 1px solid rgba(255,255,255,.12);
    border-radius: 28px;
    padding: 28px;
    background: rgba(255,255,255,.035);
  }
  .system-core {
    padding: 22px 24px;
    border-radius: 20px;
    background: #fff;
    color: var(--ink);
  }
  .system-core span { display: block; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; }
  .system-core strong { display: block; margin-top: 7px; font-size: 21px; font-weight: 600; }
  .system-core small { display: block; margin-top: 7px; color: var(--muted); font-size: 14px; line-height: 1.5; }
  .system-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 10px; margin-top: 16px; }
  .system-chip { min-height: 54px; display: flex; align-items: center; padding: 10px 14px; border: 1px solid rgba(255,255,255,.1); border-radius: 14px; color: #D7DDE6; font-size: 16px; line-height: 1.35; }
  .system-output { margin-top: 16px; padding: 15px 18px; border-top: 1px solid rgba(255,255,255,.11); color: #AEB7C5; font-size: 16px; line-height: 1.6; }

  .technology-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 52px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .technology-item { display: grid; grid-template-columns: 54px 1fr; gap: 22px; min-height: 245px; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .technology-icon { width: 48px; height: 48px; display: grid; place-items: center; border: 1px solid #E4E8ED; border-radius: 16px; color: #44505F; background: #F8F9FA; }
  .technology-item h3 { font-size: 21px; }
  .technology-item p { margin-top: 10px; }
  .technology-item .editorial-link { margin-top: 18px; }

  .quality-grid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: start; }
  .quality-copy h2 { max-width: 560px; }
  .quality-copy .editorial-link { margin-top: 24px; }
  .quality-panel { border: 1px solid #DDE2E8; border-radius: 28px; background: #fff; overflow: hidden; }
  .quality-tier { padding: 30px 32px; }
  .quality-kicker { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; }
  .quality-tier h3 { margin-top: 10px; font-size: 21px; }
  .quality-tier p { margin-top: 10px; }
  .quality-divider { height: 1px; background: var(--line); }

  .scale-layout { display: grid; grid-template-columns: 1.08fr .72fr; gap: 70px; align-items: start; }
  .scale-copy .heading-group { max-width: 760px; }
  .scale-body { max-width: 760px; }
  .scale-copy .editorial-link { margin-top: 24px; }
  .region-panel { border-top: 1px solid var(--line); }
  .region-row { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 66px; border-bottom: 1px solid var(--line); color: #1F2937; font-size: 17px; font-weight: 600; }
  .region-row span:last-child { color: #98A2B3; font-size: 17px; }

  .team-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); margin-top: 52px; border-top: 1px solid #DCE1E7; }
  .team-item { padding: 28px 34px 28px 0; border-bottom: 1px solid #DCE1E7; }
  .team-item:nth-child(even) { padding-left: 34px; padding-right: 0; border-left: 1px solid #DCE1E7; }
  .team-item h3 { font-size: 21px; }
  .team-item p { margin-top: 10px; }

  .related-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 16px; margin-top: 50px; }
  .related-item {
    display: grid;
    grid-template-columns: 1fr 28px;
    gap: 24px;
    min-height: 190px;
    align-items: start;
    padding: 28px 30px;
    border: 1px solid var(--line);
    border-radius: 22px;
    text-decoration: none;
    background: #fff;
    transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease;
  }
  .related-item:hover { border-color: #D2BBC5; transform: translateY(-1px); box-shadow: 0 12px 32px rgba(15,23,42,.055); }
  .related-item:focus-visible { outline: 3px solid rgba(193,29,99,.18); outline-offset: 3px; }
  .related-item h3 { font-size: 21px; color: var(--ink); }
  .related-item p { margin-top: 10px; }
  .related-arrow { color: var(--magenta); padding-top: 3px; }

  .why-section .heading-group h2 { color: #fff; }
  .why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); margin-top: 52px; border-top: 1px solid rgba(255,255,255,.12); border-left: 1px solid rgba(255,255,255,.12); }
  .why-item { min-height: 210px; padding: 28px; border-right: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); }
  .why-item h3 { color: #fff; font-size: 21px; }
  .why-item p { margin-top: 12px; color: #AEB7C5; }

  .faq-layout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
  .faq-heading { max-width: 440px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item.is-open .faq-question { color: var(--ink); }
  .faq-item.is-open .faq-chevron { color: var(--magenta); }
  .faq-question {
    width: 100%;
    min-height: 76px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 24px;
    padding: 22px 0;
    border: 0;
    background: transparent;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.4;
  }
  .faq-question:focus-visible { outline: 2px solid rgba(193,29,99,.3); outline-offset: 4px; }
  .faq-chevron { flex: 0 0 auto; color: #7B8796; transition: transform .18s ease; }
  .faq-chevron.is-open { transform: rotate(180deg); }
  .faq-answer { padding: 0 48px 26px 0; }
  .faq-answer p { max-width: 840px; }
  .faq-answer .editorial-link { margin-top: 16px; }

  .final-cta-wrap { padding: 82px 0 96px; background: #fff; }
  .final-cta {
    display: grid;
    grid-template-columns: 1.2fr auto;
    gap: 48px;
    align-items: center;
    padding: 54px 58px;
    border: 1px solid #F0CFDC;
    border-radius: 30px;
    background: var(--blush);
  }
  .final-cta-copy { max-width: 780px; }
  .final-cta-copy h2 { max-width: 740px; }
  .final-cta-copy p { margin-top: 18px; max-width: 760px; font-size: 17px; }
  .final-cta-actions { display: flex; flex-wrap: wrap; gap: 12px; justify-content: flex-end; }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: 1fr .78fr; gap: 48px; }
    .branch-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .lifecycle-track { grid-template-columns: repeat(3,minmax(0,1fr)); border-left: 1px solid #D7DDE4; }
    .lifecycle-step { padding: 26px 24px 28px; border-right: 1px solid #D7DDE4; border-bottom: 1px solid #D7DDE4; }
    .lifecycle-step + .lifecycle-step { padding-left: 24px; border-left: 0; }
  }

  @media (max-width: 900px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }

    .hero { padding: 88px 0; }
    .hero-grid { grid-template-columns: 1fr; gap: 48px; }
    .hero-copy { max-width: 760px; margin: 0 auto; text-align: center; }
    .hero-copy h1, .hero-lead, .hero-note { margin-left: auto; margin-right: auto; }
    .hero-note { text-align: left; }
    .hero-actions { justify-content: center; }
    .hero-art { max-width: 650px; margin: 0 auto; }

    .proof-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
    .proof-item:nth-child(4) { border-top: 1px solid var(--line); }

    .overview-grid,
    .regulatory-grid,
    .integrity-grid,
    .ai-layout,
    .systems-grid,
    .quality-grid,
    .scale-layout,
    .faq-layout {
      grid-template-columns: 1fr;
      gap: 46px;
    }
    .overview-heading, .faq-heading { max-width: 820px; }
    .overview-heading.mobile-center,
    .regulatory-copy.mobile-center,
    .integrity-heading.mobile-center,
    .ai-copy.mobile-center,
    .systems-copy.mobile-center,
    .quality-copy.mobile-center,
    .scale-copy .heading-group.mobile-center {
      max-width: 820px;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    .overview-heading.mobile-center .section-intro,
    .regulatory-copy.mobile-center .section-intro,
    .integrity-heading.mobile-center .section-intro,
    .ai-copy.mobile-center .section-intro,
    .systems-copy.mobile-center .section-intro,
    .quality-copy.mobile-center .section-intro,
    .scale-copy .heading-group.mobile-center .section-intro {
      margin-left: auto;
      margin-right: auto;
    }
    .regulatory-copy .dark-body,
    .integrity-heading .body-copy,
    .ai-copy .body-copy,
    .systems-copy .dark-body,
    .quality-copy .body-copy {
      margin-left: auto;
      margin-right: auto;
      text-align: left;
    }
    .regulatory-links, .inline-links, .ai-copy > .editorial-link, .quality-copy > .editorial-link { justify-content: center; }
    .regulatory-links, .inline-links { display: flex; }

    .content-list { grid-template-columns: 1fr 1fr; }
    .advanced-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .technology-grid { grid-template-columns: 1fr; }
    .system-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
    .terminology-band { grid-template-columns: 1fr; gap: 20px; }
    .advanced-link-row { align-items: flex-start; flex-direction: column; }
    .why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .final-cta { grid-template-columns: 1fr; }
    .final-cta-copy { max-width: 820px; margin-left: auto; margin-right: auto; text-align: center; }
    .final-cta-copy p { margin-left: auto; margin-right: auto; text-align: left; }
    .final-cta-actions { justify-content: center; }
  }

  @media (max-width: 640px) {
    .container { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    h1 { font-size: 38px; line-height: 1.06; }
    h2 { font-size: 30px; line-height: 1.12; }
    h3 { font-size: 20px; }
    p { font-size: 16px; line-height: 1.72; }
    .section-intro { font-size: 17px; line-height: 1.7; }

    .heading-group.mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
    .heading-group.mobile-center .section-intro { margin-left: auto; margin-right: auto; }
    .heading-group.mobile-left { text-align: left; margin-left: 0; margin-right: 0; }
    .heading-group.mobile-left .section-intro { margin-left: 0; margin-right: 0; }

    .hero { padding: 72px 0 68px; }
    .hero-copy { text-align: center; }
    .hero-lead { margin-top: 24px; font-size: 18px; }
    .hero-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .hero-actions .btn { width: 100%; }
    .hero-note { text-align: left; margin-top: 28px; padding-top: 22px; }
    .hero-art { border-radius: 24px; }

    .proof-grid { grid-template-columns: 1fr; }
    .proof-item { padding: 22px 0; min-height: auto; }
    .proof-item + .proof-item { border-left: 0; border-top: 1px solid var(--line); }
    .proof-item:nth-child(3), .proof-item:nth-child(4) { border-top: 1px solid var(--line); }

    .overview-grid { gap: 36px; }
    .overview-heading { max-width: 100%; }
    .overview-row { grid-template-columns: 18px 1fr; gap: 14px; padding: 24px 0; }
    .overview-marker { margin-top: 13px; }

    .branch-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .branch-item { min-height: auto; padding: 25px 22px; }

    .regulatory-grid, .integrity-grid, .ai-layout, .systems-grid, .quality-grid, .scale-layout, .faq-layout { gap: 36px; }
    .regulatory-list { padding: 8px 22px; }
    .regulatory-note { padding: 22px; }

    .content-groups { margin-top: 40px; }
    .content-group { grid-template-columns: 1fr; gap: 18px; padding: 28px 0; }
    .content-list { grid-template-columns: 1fr; gap: 0; }

    .inline-links { flex-direction: column; align-items: center; gap: 12px; }
    .integrity-row { padding: 22px 0; }
    .terminology-band { grid-template-columns: 1fr; gap: 20px; margin-top: 42px; }

    .advanced-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .advanced-item { padding: 24px 0; }
    .advanced-link-row { align-items: flex-start; flex-direction: column; padding: 22px; }

    .lifecycle-section .heading-group { text-align: left; }
    .lifecycle-track { grid-template-columns: 1fr; margin-top: 40px; border: 0; }
    .lifecycle-step, .lifecycle-step + .lifecycle-step {
      display: grid;
      grid-template-columns: 46px 1fr;
      column-gap: 16px;
      padding: 24px 0;
      border-left: 0;
      border-right: 0;
      border-top: 1px solid #D7DDE4;
      border-bottom: 0;
    }
    .lifecycle-step:last-child { border-bottom: 1px solid #D7DDE4; }
    .step-number { grid-column: 1; grid-row: 1; padding-top: 5px; }
    .step-line { display: none; }
    .lifecycle-step h3 { grid-column: 2; grid-row: 1; margin-top: 0; }
    .lifecycle-step p { grid-column: 2; grid-row: 2; }
    .lifecycle-summary { margin-top: 30px; padding: 18px 20px; }

    .workflow-row { grid-template-columns: 42px 1fr; gap: 14px; }
    .risk-band { grid-template-columns: 1fr; margin-top: 42px; }
    .risk-col { padding: 25px 22px; }
    .risk-col + .risk-col { border-left: 0; border-top: 1px solid var(--line); }

    .systems-visual { padding: 20px; }
    .system-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }

    .technology-grid { margin-top: 40px; }
    .technology-item { grid-template-columns: 1fr; gap: 16px; min-height: auto; padding: 25px 22px; }

    .quality-tier { padding: 25px 22px; }

    .team-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .team-item, .team-item:nth-child(even) { padding: 24px 0; border-left: 0; }

    .related-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .related-item { min-height: auto; padding: 24px 22px; }

    .why-grid { grid-template-columns: 1fr; margin-top: 40px; }
    .why-item { min-height: auto; padding: 24px 22px; }

    .faq-heading { text-align: left !important; }
    .faq-question { min-height: 72px; padding: 20px 0; font-size: 17px; }
    .faq-answer { padding: 0 0 24px; }

    .final-cta-wrap { padding: 68px 0 76px; }
    .final-cta { gap: 30px; padding: 36px 24px; border-radius: 24px; }
    .final-cta-copy { text-align: center; }
    .final-cta-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
    .final-cta-actions .btn { width: 100%; }
  }

  @media (max-width: 420px) {
    .hero-art-label { display: none; }
  }

  @media (max-width: 360px) {
    .system-grid { grid-template-columns: 1fr; }
  }
`;

export default App;
