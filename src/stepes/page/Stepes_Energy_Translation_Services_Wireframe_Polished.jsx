import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  blush: "#FDF2F7",
  blushStrong: "#F8E6EF",
  dark: "#111827",
  darkSoft: "#1B2433",
  ink: "#111827",
  body: "#4B5870",
  muted: "#68758A",
  border: "#DDE3EC",
  borderDark: "rgba(255,255,255,0.14)",
  white: "#FFFFFF",
  eyebrowDark: "#F2A7C6",
};

const sectors = [
  {
    title: "Oil and Gas",
    description:
      "Multilingual support across upstream, midstream, and downstream operations, including exploration, drilling, pipelines, LNG, refining, petrochemicals, equipment, and HSE content.",
    link: "https://www.stepes.com/oil-gas-translation-services/",
    linkLabel: "Oil and Gas Translation Services",
    icon: "drop",
  },
  {
    title: "Electric Power and Utilities",
    description:
      "Translation for power generation, plant equipment, transmission, distribution, grids, utility operations, customer communications, and the digital systems that connect modern energy networks.",
    link: "https://www.stepes.com/electric-power-translation-services/",
    linkLabel: "Electric Power Translation Services",
    icon: "bolt",
  },
  {
    title: "Renewable Energy",
    description:
      "Language solutions for solar, wind, hydropower, geothermal, biomass, marine energy, renewable infrastructure, permitting, engineering, software, and project development.",
    link: "https://www.stepes.com/renewable-energy-translation-services/",
    linkLabel: "Renewable Energy Translation Services",
    icon: "leaf",
  },
  {
    title: "Solar Energy",
    description:
      "Specialized translation for photovoltaic equipment, inverters, energy storage, monitoring platforms, solar installations, technical documentation, training, software, and customer content.",
    link: "https://www.stepes.com/solar-energy-translation/",
    linkLabel: "Solar Energy Translation Services",
    icon: "sun",
  },
  {
    title: "Nuclear and Advanced Energy",
    description:
      "Specialized translation for nuclear power, plant equipment, advanced reactor technologies, fusion research, scientific publications, patents, safety content, and international collaboration.",
    links: [
      {
        href: "https://www.stepes.com/electric-power-translation-services/",
        label: "Electric Power Translation Services",
      },
      {
        href: "https://www.stepes.com/fusion-energy-translation-services/",
        label: "Fusion Energy Translation Services",
      },
    ],
    icon: "atom",
  },
  {
    title: "Hydrogen and Fuel Cells",
    description:
      "Technical and commercial translation for hydrogen production, electrolyzers, storage, transport, fueling infrastructure, fuel-cell systems, manufacturing, safety, and policy.",
    links: [
      {
        href: "https://www.stepes.com/hydrogen-energy-translation-services/",
        label: "Hydrogen Energy Translation Services",
      },
      {
        href: "https://www.stepes.com/fuel-cell-translation-services/",
        label: "Fuel Cell Translation Services",
      },
    ],
    icon: "molecule",
  },
  {
    title: "Energy Storage, Smart Grids, and Cleantech",
    description:
      "Localization for battery energy storage, microgrids, smart-grid infrastructure, energy management, demand response, EV charging, distributed energy resources, and emerging cleantech.",
    icon: "battery",
  },
  {
    title: "Energy Engineering, EPC, and Field Services",
    description:
      "Translation throughout engineering, procurement, construction, commissioning, inspection, and maintenance for asset owners, EPC contractors, equipment suppliers, and field-service teams.",
    link: "https://www.stepes.com/technical-translation-services/",
    linkLabel: "Technical Translation Services",
    icon: "engineering",
  },
];

const lifecycle = [
  {
    title: "Research, Planning, and Feasibility",
    description:
      "Feasibility studies, research reports, site assessments, technology evaluations, scientific publications, patents, market studies, and investment presentations.",
  },
  {
    title: "Permitting, Financing, and Approval",
    description:
      "Permit applications, environmental impact assessments, licensing materials, financing content, public consultations, community notices, and government submissions.",
  },
  {
    title: "Engineering and Procurement",
    description:
      "Technical specifications, equipment datasheets, drawings, bills of materials, requests for proposal, tender responses, procurement documentation, and EPC contracts.",
  },
  {
    title: "Construction and Commissioning",
    description:
      "Construction plans, installation manuals, method statements, site safety procedures, inspection checklists, commissioning protocols, and acceptance testing documentation.",
  },
  {
    title: "Operations and Maintenance",
    description:
      "O&M manuals, standard operating procedures, preventive maintenance, troubleshooting, emergency response, HMI and SCADA interfaces, and operator training.",
  },
  {
    title: "Market, Customer, and Corporate",
    description:
      "Websites, customer portals, product marketing, investor communications, sustainability reports, customer support, community content, and public announcements.",
  },
];

const contentGroups = [
  {
    title: "Engineering and Technical",
    icon: "document",
    items: [
      "Engineering specifications and reports",
      "Product datasheets and equipment manuals",
      "Installation and maintenance instructions",
      "Drawings, schematics, diagrams, and annotations",
      "Inspection, testing, and troubleshooting content",
      "Research publications and technology patents",
    ],
    link: {
      href: "https://www.stepes.com/technical-translation-services/",
      label: "Technical Translation Services",
    },
  },
  {
    title: "Safety, HSE, and Environmental",
    icon: "shield",
    items: [
      "Health and safety manuals",
      "Job safety analyses and hazard assessments",
      "Emergency response plans and incident materials",
      "Safety data sheets and multilingual signage",
      "Environmental impact and management plans",
      "Environmental monitoring and reporting",
    ],
  },
  {
    title: "Regulatory and Compliance",
    icon: "check",
    items: [
      "Permit and licensing applications",
      "Regulatory submissions and technical dossiers",
      "Certification and quality documentation",
      "Grid interconnection filings",
      "Compliance reports and audit materials",
      "Inspection responses and regulatory correspondence",
    ],
  },
  {
    title: "Legal, Commercial, and Procurement",
    icon: "contract",
    items: [
      "EPC and power purchase agreements",
      "Joint-venture and supplier contracts",
      "Requests for proposal and tender submissions",
      "Procurement specifications",
      "Confidentiality and land-use agreements",
      "Insurance and commercial documentation",
    ],
    link: {
      href: "https://www.stepes.com/legal-translation-services/",
      label: "Legal Translation Services",
    },
  },
  {
    title: "Training and Workforce",
    icon: "learning",
    items: [
      "Operator and technician training",
      "Contractor onboarding and compliance courses",
      "eLearning and instructor-led materials",
      "Assessments, examinations, and quick-reference guides",
      "Video narration and subtitles",
      "Field procedures and workforce communications",
    ],
    link: {
      href: "https://www.stepes.com/elearning-localization-services/",
      label: "eLearning Localization",
    },
  },
  {
    title: "Software, Digital, and Corporate",
    icon: "screen",
    items: [
      "Energy software and mobile applications",
      "Monitoring dashboards and customer portals",
      "Websites and digital product content",
      "Marketing and customer support knowledge bases",
      "Investor and corporate communications",
      "Annual, sustainability, and ESG reports",
    ],
  },
];

const qualityCapabilities = [
  {
    title: "Energy Subject-Matter Linguists",
    description:
      "Your content is matched with professional linguists according to the energy discipline, content type, language pair, target market, and technical expertise required.",
    icon: "people",
  },
  {
    title: "Terminology Management",
    description:
      "Approved equipment names, processes, acronyms, warnings, product nomenclature, regulatory terms, and market-specific variants stay aligned across content and teams.",
    icon: "terms",
    link: {
      href: "https://www.stepes.com/terminology-management/",
      label: "Terminology Management",
    },
  },
  {
    title: "Translation Memory",
    description:
      "Previously approved bilingual content can be reused across product families, updated manuals, software releases, recurring reports, and multi-site documentation.",
    icon: "memory",
    link: {
      href: "https://www.stepes.com/translation-memory/",
      label: "Translation Memory",
    },
  },
  {
    title: "Technical Conventions",
    description:
      "Project controls help preserve units, formulas, part numbers, equipment tags, technical symbols, warnings, figure labels, cross-references, and locale-specific formats.",
    icon: "ruler",
  },
  {
    title: "Linguistic Quality Assurance",
    description:
      "Workflows may include independent bilingual review, terminology verification, automated QA, numerical checks, formatting review, client validation, and final delivery review.",
    icon: "quality",
    link: {
      href: "https://www.stepes.com/translation-quality-assurance/",
      label: "Translation Quality Assurance",
    },
  },
  {
    title: "In-Context Review",
    description:
      "Translated content can be checked in technical layouts, final PDFs, diagrams, HMI screens, SCADA dashboards, mobile apps, training modules, websites, and customer portals.",
    icon: "context",
  },
];

const workflows = [
  {
    title: "Expert Human Translation and Review",
    label: "High-control content",
    description:
      "A human-led workflow for safety-critical instructions, regulatory submissions, legal agreements, engineering specifications, patents, public compliance content, and materials requiring formal approval.",
  },
  {
    title: "AI Translation With Professional Human Review",
    label: "Scalable expert review",
    description:
      "AI-powered translation combined with professional post-editing for suitable technical documentation, knowledge bases, operational content, recurring product information, and other high-volume programs.",
  },
  {
    title: "Continuous Localization",
    label: "Frequent digital updates",
    description:
      "Ongoing workflows for energy software, connected products, customer portals, websites, field-service applications, and product documentation that changes across release cycles.",
  },
];

const softwareSystems = [
  "SCADA and HMI interfaces",
  "Energy and distribution management systems",
  "Asset-performance and remote monitoring platforms",
  "Field-service and maintenance applications",
  "Utility customer portals and energy trading platforms",
  "Mobile workforce and connected-equipment interfaces",
];

const stakeholders = [
  {
    title: "Regulatory Authorities",
    description:
      "Permits, licensing materials, certification documentation, technical dossiers, grid and utility filings, inspection responses, compliance reports, and supporting correspondence.",
    icon: "government",
  },
  {
    title: "Environmental Stakeholders",
    description:
      "Environmental impact assessments, mitigation plans, biodiversity studies, emissions reporting, monitoring content, carbon disclosures, climate-risk reporting, and public communications.",
    icon: "environment",
  },
  {
    title: "Investors and Corporate Stakeholders",
    description:
      "Sustainability and ESG reports, annual reports, investor presentations, green-finance documentation, governance materials, corporate policies, and climate strategies.",
    icon: "chart",
    link: {
      href: "https://www.stepes.com/esg-translation-services/",
      label: "ESG Translation Services",
    },
  },
  {
    title: "Local Communities and Workforces",
    description:
      "Public consultations, community notices, landowner communications, employment information, onboarding, safety training, emergency notifications, signage, and grievance procedures.",
    icon: "community",
  },
];

const enterpriseCapabilities = [
  {
    title: "Centralized Project Management",
    description:
      "Coordinate files, languages, schedules, deliveries, project intake, and multilingual production through one consistent operating model.",
  },
  {
    title: "Shared Language Assets",
    description:
      "Apply translation memories, glossaries, style guides, and reference materials across engineering, software, safety, training, marketing, and regulatory content.",
  },
  {
    title: "Regional and Subject-Matter Review",
    description:
      "Route content to designated market reviewers, engineers, legal teams, safety specialists, or regulatory experts while capturing feedback centrally.",
  },
  {
    title: "Workflow Automation and Integration",
    description:
      "Support recurring intake, project routing, terminology application, reviewer assignment, notifications, approvals, API submissions, and continuous localization.",
  },
  {
    title: "Reporting, Governance, and Security",
    description:
      "Gain visibility into project status, language coverage, translation volumes, reuse, review progress, quality trends, and spend through secure enterprise workflows.",
  },
];

const differentiators = [
  {
    title: "Specialized Energy Expertise",
    description:
      "Linguists and reviewers are matched to the relevant energy discipline, content type, market, and technical requirements.",
  },
  {
    title: "100+ Languages",
    description:
      "Support major global and regional energy markets through one coordinated multilingual delivery model.",
  },
  {
    title: "AI + Human Quality",
    description:
      "Combine professional expertise with AI translation, translation memory, terminology, automated QA, and workflow technology.",
  },
  {
    title: "Enterprise Scalability",
    description:
      "Manage individual documents or ongoing programs spanning languages, business units, content formats, and release schedules.",
  },
  {
    title: "Terminology Consistency",
    description:
      "Keep product, equipment, safety, software, regulatory, and corporate terminology aligned across the content lifecycle.",
  },
  {
    title: "Connected Content Workflows",
    description:
      "Translate documents, software, websites, videos, eLearning, customer portals, and enterprise content through one partner.",
  },
];

const relatedServices = [
  {
    title: "Oil and Gas Translation Services",
    description:
      "Upstream, midstream, downstream, refinery, petrochemical, LNG, equipment, and HSE content.",
    href: "https://www.stepes.com/oil-gas-translation-services/",
  },
  {
    title: "Electric Power Translation Services",
    description:
      "Power generation, plant equipment, grids, transmission, distribution, utilities, and operational content.",
    href: "https://www.stepes.com/electric-power-translation-services/",
  },
  {
    title: "Renewable Energy Translation Services",
    description:
      "Solar, wind, hydropower, geothermal, biomass, clean-energy infrastructure, permitting, and project development.",
    href: "https://www.stepes.com/renewable-energy-translation-services/",
  },
  {
    title: "Solar Energy Translation Services",
    description:
      "Photovoltaic equipment, inverters, storage, monitoring platforms, installations, and customer content.",
    href: "https://www.stepes.com/solar-energy-translation/",
  },
  {
    title: "Hydrogen Energy Translation Services",
    description:
      "Hydrogen production, electrolyzers, storage, distribution, infrastructure, research, policy, and safety.",
    href: "https://www.stepes.com/hydrogen-energy-translation-services/",
  },
  {
    title: "Fuel Cell Translation Services",
    description:
      "Fuel-cell research, engineering, manufacturing, equipment, training, and commercial applications.",
    href: "https://www.stepes.com/fuel-cell-translation-services/",
  },
  {
    title: "Fusion Energy Translation Services",
    description:
      "Fusion research, reactor technology, scientific documentation, patents, and advanced-energy collaboration.",
    href: "https://www.stepes.com/fusion-energy-translation-services/",
  },
];

const faqs = [
  {
    question: "What types of energy companies does Stepes support?",
    answer:
      "Stepes supports energy producers, utilities, grid operators, renewable energy developers, equipment manufacturers, technology companies, EPC contractors, engineering consultancies, oilfield service providers, software developers, research organizations, and energy supply-chain partners. We work with both individual project teams and global organizations that need coordinated multilingual support across departments, locations, and content types.",
  },
  {
    question: "Which energy sectors can Stepes translate for?",
    answer:
      "Our energy translation services cover oil and gas, electric power, utilities, renewable energy, solar power, wind energy, hydropower, nuclear technology, hydrogen, fuel cells, energy storage, smart grids, microgrids, cleantech, and supporting engineering and field services. Each project is supported by linguists selected for the specific technology and subject matter involved.",
  },
  {
    question: "What energy documents can Stepes translate?",
    answer:
      "Stepes translates engineering specifications, technical reports, product datasheets, equipment manuals, installation instructions, operating procedures, HSE content, regulatory submissions, contracts, tenders, software interfaces, training programs, environmental reports, websites, marketing content, investor communications, and other energy content. We also support complex formats containing tables, graphics, diagrams, annotations, software strings, subtitles, and interactive learning components.",
  },
  {
    question: "How does Stepes ensure accurate energy terminology?",
    answer:
      "We use subject-matter linguists, client reference materials, multilingual glossaries, approved termbases, translation memory, project-specific instructions, linguistic review, and automated quality checks. Terminology can be validated by your team and applied consistently across future documents, products, systems, and markets.",
  },
  {
    question: "Can Stepes translate safety-critical and regulatory energy content?",
    answer:
      "Yes. Safety and regulatory content can be assigned to qualified professional linguists and processed through workflows that include bilingual review, terminology checks, numerical QA, formatting verification, client review, and final validation where required. The exact process is defined according to the content type, intended use, target market, and project requirements.",
  },
  {
    question: "Does Stepes localize SCADA, HMI, and energy software?",
    answer:
      "Yes. We localize SCADA interfaces, HMI systems, monitoring dashboards, energy management platforms, mobile field applications, maintenance software, customer portals, and other digital energy products. Services may include software string translation, terminology management, in-context review, screenshot testing, locale validation, functional localization testing, and continuous release support.",
  },
  {
    question: "How does Stepes use AI for energy translation?",
    answer:
      "Stepes uses AI as part of a controlled translation workflow rather than applying the same approach to every type of content. The appropriate workflow depends on technical complexity, safety implications, regulatory exposure, audience, volume, update frequency, and quality requirements. Suitable content can use AI translation with professional human review, while safety-critical, legal, regulatory, or highly specialized materials may require more extensive human translation and validation.",
  },
  {
    question: "Can Stepes support large multilingual energy programs?",
    answer:
      "Yes. Stepes supports enterprise programs involving multiple languages, departments, facilities, vendors, and content formats. Our capabilities include centralized project management, translation memory, terminology management, workflow automation, regional review, APIs, reporting, and ongoing localization support.",
  },
  {
    question: "How much do energy translation services cost?",
    answer:
      "Pricing depends on the language pairs, source volume, technical complexity, file format, required turnaround, review level, and additional services such as desktop publishing, software testing, transcription, or multimedia production. After reviewing your source content and project requirements, Stepes can provide a detailed quotation and proposed delivery schedule.",
  },
  {
    question: "How do we begin an energy translation project?",
    answer:
      "Send us the source content, requested languages, intended use, desired schedule, and any available reference materials. Our team will review the project, recommend the appropriate translation and quality workflow, and provide pricing and delivery information.",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.65,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "drop":
      return <svg {...common}><path {...stroke} d="M12 3s5.5 6.1 5.5 10.1A5.5 5.5 0 1 1 6.5 13.1C6.5 9.1 12 3 12 3Z"/><path {...stroke} d="M9.4 15.1c.6 1.2 1.5 1.8 2.8 1.8"/></svg>;
    case "bolt":
      return <svg {...common}><path {...stroke} d="m13.8 2.8-7 10h5l-1 8.4 7.4-11h-5.1l.7-7.4Z"/></svg>;
    case "leaf":
      return <svg {...common}><path {...stroke} d="M20.5 3.5C13 3.8 7.4 6.4 5.2 10.7c-1.8 3.5.2 7.8 4.1 8.4 4.9.8 8.3-3.5 9.7-8.2.9-3.1 1.2-5.7 1.5-7.4Z"/><path {...stroke} d="M4 21c2.5-5.8 6.3-9.5 12.1-12"/></svg>;
    case "sun":
      return <svg {...common}><circle {...stroke} cx="12" cy="12" r="4"/><path {...stroke} d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>;
    case "atom":
      return <svg {...common}><circle {...stroke} cx="12" cy="12" r="1.5"/><ellipse {...stroke} cx="12" cy="12" rx="9" ry="3.6"/><ellipse {...stroke} cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse {...stroke} cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/></svg>;
    case "molecule":
      return <svg {...common}><circle {...stroke} cx="7" cy="8" r="2.5"/><circle {...stroke} cx="17" cy="6" r="2"/><circle {...stroke} cx="16" cy="17" r="3"/><path {...stroke} d="m9.4 7.4 5.6-.9M8.6 10l5.6 5M16.7 8l-.5 6"/></svg>;
    case "battery":
      return <svg {...common}><rect {...stroke} x="3" y="6" width="17" height="12" rx="2"/><path {...stroke} d="M20 10h1.5v4H20M8 9v6M5 12h6M15 9v6"/></svg>;
    case "engineering":
      return <svg {...common}><path {...stroke} d="M14.7 6.3a4 4 0 0 0-5 5L3 18l3 3 6.7-6.7a4 4 0 0 0 5-5l-2.6 2.6-3-3 2.6-2.6Z"/><path {...stroke} d="m14 16 4.5 4.5"/></svg>;
    case "document":
      return <svg {...common}><path {...stroke} d="M6 3h8l4 4v14H6z"/><path {...stroke} d="M14 3v5h4M9 12h6M9 16h6"/></svg>;
    case "shield":
      return <svg {...common}><path {...stroke} d="M12 3 5 6v5c0 4.5 2.7 8.1 7 10 4.3-1.9 7-5.5 7-10V6l-7-3Z"/><path {...stroke} d="m9 12 2 2 4-4"/></svg>;
    case "check":
      return <svg {...common}><path {...stroke} d="M5 4h14v16H5z"/><path {...stroke} d="M8 8h8M8 12h3M8 16h3M14 14l1.5 1.5L18 13"/></svg>;
    case "contract":
      return <svg {...common}><path {...stroke} d="M6 3h12v18H6z"/><path {...stroke} d="M9 7h6M9 11h6M9 15h3M14 17l4-4"/></svg>;
    case "learning":
      return <svg {...common}><path {...stroke} d="m3 7 9-4 9 4-9 4-9-4Z"/><path {...stroke} d="M6 9.5V15c3.5 2.7 8.5 2.7 12 0V9.5M21 8v6"/></svg>;
    case "screen":
      return <svg {...common}><rect {...stroke} x="3" y="4" width="18" height="13" rx="2"/><path {...stroke} d="M8 21h8M12 17v4M7 8h5M7 11h10"/></svg>;
    case "people":
      return <svg {...common}><circle {...stroke} cx="9" cy="8" r="3"/><path {...stroke} d="M3.5 20c.4-4.1 2.3-6.2 5.5-6.2s5.1 2.1 5.5 6.2"/><circle {...stroke} cx="17" cy="9" r="2.2"/><path {...stroke} d="M15.5 14.4c3.2-.2 4.9 1.7 5 5"/></svg>;
    case "terms":
      return <svg {...common}><path {...stroke} d="M4 5h10M4 9h7M4 13h10M4 17h7"/><circle {...stroke} cx="18" cy="16" r="3"/><path {...stroke} d="m20.2 18.2 1.8 1.8"/></svg>;
    case "memory":
      return <svg {...common}><rect {...stroke} x="6" y="6" width="12" height="12" rx="2"/><path {...stroke} d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4M10 10h4v4h-4z"/></svg>;
    case "ruler":
      return <svg {...common}><path {...stroke} d="m4 16 12-12 4 4L8 20H4v-4Z"/><path {...stroke} d="m13 7 4 4M10 10l2 2M7 13l2 2"/></svg>;
    case "quality":
      return <svg {...common}><circle {...stroke} cx="12" cy="10" r="6"/><path {...stroke} d="m8.5 10 2.2 2.2 4.8-4.8M9 16l-1 5 4-2 4 2-1-5"/></svg>;
    case "context":
      return <svg {...common}><path {...stroke} d="M3 5h18v14H3z"/><path {...stroke} d="M7 9h5M7 13h10M7 16h7"/><circle {...stroke} cx="17" cy="8" r="1.5"/></svg>;
    case "government":
      return <svg {...common}><path {...stroke} d="m3 9 9-5 9 5M5 10h14M6 10v8M10 10v8M14 10v8M18 10v8M4 18h16M3 21h18"/></svg>;
    case "environment":
      return <svg {...common}><path {...stroke} d="M12 21V8M12 14c-4.5 0-7-2.7-7-7 4.4 0 7 2.6 7 7ZM12 11c4.5 0 7-2.7 7-7-4.4 0-7 2.6-7 7Z"/></svg>;
    case "chart":
      return <svg {...common}><path {...stroke} d="M4 20V10M10 20V4M16 20v-7M22 20H2"/><path {...stroke} d="m4 8 6-4 6 4 5-5"/></svg>;
    case "community":
      return <svg {...common}><circle {...stroke} cx="8" cy="8" r="2.5"/><circle {...stroke} cx="16" cy="8" r="2.5"/><path {...stroke} d="M3.5 20c.2-4 1.8-6 4.5-6s4.3 2 4.5 6M11.5 20c.2-4 1.8-6 4.5-6s4.3 2 4.5 6"/></svg>;
    default:
      return <svg {...common}><circle {...stroke} cx="12" cy="12" r="8"/></svg>;
  }
}

function EnergyHeroArt() {
  return (
    <div className="energy-art" aria-hidden="true">
      <svg viewBox="0 0 640 520" role="img">
        <defs>
          <linearGradient id="energyGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDF2F7" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
        </defs>
        <rect x="34" y="32" width="572" height="454" rx="42" fill="url(#energyGlow)" />
        <circle cx="495" cy="108" r="38" fill="none" stroke="#C11D63" strokeWidth="2.2" />
        <g stroke="#C11D63" strokeWidth="1.8" strokeLinecap="round">
          <path d="M495 52v-15M495 179v-15M439 108h-15M566 108h-15M455 68l-11-11M546 159l-11-11M535 68l11-11M444 159l11-11" />
        </g>
        <g stroke="#AAB5C4" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M52 406h537" />
          <path d="M86 406V281h96v125" />
          <path d="M111 281v-49h47v49M100 318h70M100 350h70M118 299v18M150 299v18M118 332v18M150 332v18" />
          <path d="M202 406v-82h95v82M218 324l18-35h28l18 35M222 349h53M222 374h53" />
          <path d="M316 406V255h50v151M327 280h28M327 309h28M327 338h28M327 367h28" />
          <path d="M333 255l8-32h9l8 32" />
          <path d="M386 406v-68h85v68M403 338v-39h52v39M414 299v-32h30v32M408 365h42M408 386h42" />
          <path d="M481 406v-92h71v92M492 339h49M492 364h49M492 388h49" />
          <path d="M80 406 54 447h561l-27-41" />
          <path d="M204 248v-93M204 155l-52-18M204 155l38-39M204 155l17 56" />
          <path d="M462 274v-84M462 190l-47-17M462 190l35-34M462 190l15 49" />
          <path d="M539 280v-59M539 221l-33-12M539 221l25-24M539 221l10 34" />
          <path d="M62 244h84l23 37H39l23-37Z" />
          <path d="M72 254h23M101 254h23M61 269h27M95 269h27M129 269h24" />
          <path d="M278 205h63M288 188h43M300 171h20" />
          <path d="M575 237c-14-20-34-20-48 0 14 20 34 20 48 0Z" />
          <path d="M551 217v40M531 237h40" />
        </g>
        <g stroke="#C11D63" strokeWidth="2.3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M79 406c62-32 115-35 168-8 50 25 89 28 141 1 51-26 105-27 161 7" />
          <path d="M387 183c26-42 63-54 102-36" />
          <path d="m480 137 13 9-15 5" />
          <path d="M273 119c22-29 51-41 84-34" />
          <path d="m348 77 13 9-15 5" />
        </g>
        <g fill="#C11D63">
          <circle cx="247" cy="398" r="4" />
          <circle cx="388" cy="399" r="4" />
          <circle cx="550" cy="406" r="4" />
        </g>
        <g fill="#FFFFFF" stroke="#AAB5C4" strokeWidth="2">
          <rect x="242" y="432" width="159" height="30" rx="15" />
        </g>
        <g stroke="#C11D63" strokeWidth="2" strokeLinecap="round">
          <path d="M263 447h28M304 447h25M343 447h36" />
        </g>
      </svg>
    </div>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`section-header section-header--${align} ${dark ? "section-header--dark" : ""}`.trim()}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function FAQItem({ item, index, isOpen, onToggle }) {
  const contentId = `energy-faq-${index}`;
  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`.trim()}>
      <button
        type="button"
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={contentId}
      >
        <span>{item.question}</span>
        <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div id={contentId} className="faq-answer" hidden={!isOpen}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
}

export default function StepesEnergyTranslationServicesWireframe() {
  const [openFAQ, setOpenFAQ] = useState(0);

  return (
    <main className="energy-page">
      <style>{styles}</style>

      <section className="hero-section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>Energy Translation Services for Global Operations</h1>
            <p className="hero-lead">
              Translate complex energy content accurately across languages, markets, and project teams. Stepes combines energy subject-matter expertise, professional linguists, terminology management, and AI-powered workflows to support global energy operations at scale.
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
              <a className="button button--secondary" href="https://www.stepes.com/order-online/">
                <span>Get a Translation Quote</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
          <EnergyHeroArt />
        </div>
      </section>

      <section className="trust-strip" aria-label="Energy translation capabilities">
        <div className="shell trust-grid">
          <div className="trust-item"><span>100+ Languages</span></div>
          <div className="trust-item"><span>Energy Subject-Matter Expertise</span></div>
          <div className="trust-item"><span>ISO Certified</span></div>
          <div className="trust-item"><span>AI + Human Workflows</span></div>
        </div>
      </section>

      <section className="section overview-section">
        <div className="shell overview-grid">
          <div>
            <h2>Language Solutions for the Global Energy Industry</h2>
          </div>
          <div className="overview-copy">
            <p className="lead-copy">
              Energy organizations operate through international networks of engineers, manufacturers, contractors, regulators, suppliers, investors, customers, and local communities. Every project generates multilingual content that must remain accurate, consistent, and usable across markets.
            </p>
            <p>
              Stepes provides energy translation services for energy producers, utilities, technology companies, equipment manufacturers, EPC contractors, engineering consultancies, research organizations, and regulatory teams. We support both individual projects and ongoing enterprise localization programs involving multiple business units, content types, languages, and release cycles.
            </p>
            <p>
              From technical documentation and safety procedures to contracts, software interfaces, workforce training, websites, customer communications, and sustainability reporting, Stepes connects the content streams surrounding global energy operations through one coordinated language program.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--soft sectors-section">
        <div className="shell">
          <SectionHeader
            title="Energy Sectors We Support"
            intro="Specialized translation and localization for conventional energy, electric power, renewable technologies, emerging systems, and the organizations that design, build, operate, and maintain energy infrastructure."
            align="center"
          />
          <div className="sector-list">
            {sectors.map((sector) => (
              <article className="sector-row" key={sector.title}>
                <div className="icon-frame"><Icon name={sector.icon} /></div>
                <div className="sector-content">
                  <h3>{sector.title}</h3>
                  <p>{sector.description}</p>
                  {sector.link ? (
                    <EditorialLink href={sector.link}>{sector.linkLabel}</EditorialLink>
                  ) : null}
                  {sector.links ? (
                    <div className="inline-link-group">
                      {sector.links.map((link) => (
                        <EditorialLink href={link.href} key={link.href}>{link.label}</EditorialLink>
                      ))}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark lifecycle-section">
        <div className="shell">
          <SectionHeader
            title="Translation Across the Energy Project Lifecycle"
            intro="Support multilingual communication from early research and approval through engineering, construction, operations, maintenance, and market engagement."
            dark
          />
          <div className="lifecycle-grid">
            {lifecycle.map((step, index) => (
              <article className="lifecycle-step" key={step.title}>
                <div className="step-number">{String(index + 1).padStart(2, "0")}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
          <div className="section-action section-action--dark">
            <EditorialLink href="https://www.stepes.com/contact-us/">Discuss Your Energy Translation Program</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section content-section">
        <div className="shell">
          <SectionHeader
            title="Energy Documents and Content We Translate"
            intro="Manage multilingual delivery across technical publications, safety and regulatory content, contracts, workforce learning, software, and corporate communications."
          />
          <div className="content-grid">
            {contentGroups.map((group) => (
              <article className="content-group" key={group.title}>
                <div className="content-group-heading">
                  <div className="icon-frame icon-frame--small"><Icon name={group.icon} size={22} /></div>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {group.link ? <EditorialLink href={group.link.href}>{group.link.label}</EditorialLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft quality-section">
        <div className="shell">
          <div className="quality-intro">
            <div>
              <div className="eyebrow">QUALITY AND TERMINOLOGY</div>
              <h2>Technical Accuracy for Complex and Safety-Critical Energy Content</h2>
            </div>
            <p className="lead-copy">
              Energy content may combine specialized engineering terminology, technical measurements, equipment identifiers, legal requirements, safety instructions, and market-specific conventions. Stepes structures each project around its intended use, subject matter, audience, risk profile, and quality requirements.
            </p>
          </div>
          <div className="quality-grid">
            {qualityCapabilities.map((item) => (
              <article className="quality-item" key={item.title}>
                <div className="icon-frame icon-frame--small"><Icon name={item.icon} size={22} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="shell">
          <SectionHeader
            title="AI + Human Translation Workflows Designed Around Content Risk"
            intro="Choose the right balance of expert human translation, professional review, AI, reuse, and automation according to content purpose, complexity, safety implications, regulatory exposure, volume, and update frequency."
            align="center"
          />
          <div className="workflow-list">
            {workflows.map((workflow) => (
              <article className="workflow-row" key={workflow.title}>
                <div className="workflow-label">{workflow.label}</div>
                <div>
                  <h3>{workflow.title}</h3>
                  <p>{workflow.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="workflow-tools" aria-label="Connected translation capabilities">
            <span>Translation Memory</span>
            <span>Terminology Management</span>
            <span>Automated QA</span>
            <span>Workflow Automation</span>
            <span>Translation APIs</span>
            <span>In-Context Review</span>
          </div>
          <div className="link-cluster">
            <EditorialLink href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflows</EditorialLink>
            <EditorialLink href="https://www.stepes.com/machine-translation-post-editing/">Machine Translation Post-Editing</EditorialLink>
            <EditorialLink href="https://www.stepes.com/developers/translation-api/">Stepes Translation API</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--dark software-section">
        <div className="shell software-grid">
          <div className="software-copy">
            <div className="eyebrow">DIGITAL ENERGY SYSTEMS</div>
            <h2>Localization for Energy Software and Connected Systems</h2>
            <p className="lead-copy">
              Energy operations increasingly depend on software used to control equipment, monitor assets, manage field activities, analyze performance, and communicate with customers. Stepes helps product and engineering teams localize these systems for global use.
            </p>
            <ul className="check-list check-list--dark">
              {softwareSystems.map((system) => <li key={system}>{system}</li>)}
            </ul>
            <div className="link-cluster link-cluster--dark">
              <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/app-localization-services/">App Localization Services</EditorialLink>
            </div>
          </div>
          <div className="software-mockup" aria-label="Example multilingual energy software localization workflow">
            <div className="mockup-topbar">
              <span className="mockup-title">Grid Operations Localization</span>
              <span className="mockup-status">Review in progress</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-sidebar">
                <span className="active">Dashboard</span>
                <span>Assets</span>
                <span>Alerts</span>
                <span>Maintenance</span>
              </div>
              <div className="mockup-main">
                <div className="mockup-summary">
                  <div><span>Source</span><strong>English</strong></div>
                  <div><span>Target</span><strong>German</strong></div>
                  <div><span>QA status</span><strong>12 / 12 checks</strong></div>
                </div>
                <div className="string-pair is-selected">
                  <div><span className="mock-label">SOURCE STRING</span><p>High-voltage transformer requires inspection.</p></div>
                  <div><span className="mock-label">GERMAN</span><p>Der Hochspannungstransformator muss überprüft werden.</p></div>
                </div>
                <div className="string-pair">
                  <div><span className="mock-label">SOURCE STRING</span><p>Maintenance window starts at 22:00.</p></div>
                  <div><span className="mock-label">GERMAN</span><p>Das Wartungsfenster beginnt um 22:00 Uhr.</p></div>
                </div>
                <div className="mockup-footer">
                  <span>Terminology applied</span>
                  <span>Variables protected</span>
                  <span>Layout checked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section stakeholder-section">
        <div className="shell">
          <SectionHeader
            title="Clear Multilingual Communication for Regulators, Workforces, and Communities"
            intro="Energy projects engage audiences with different technical knowledge, responsibilities, and information needs. Stepes helps adapt content for each audience while preserving required meaning and detail."
          />
          <div className="stakeholder-list">
            {stakeholders.map((item) => (
              <article className="stakeholder-row" key={item.title}>
                <div className="icon-frame"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft enterprise-section">
        <div className="shell enterprise-grid">
          <div className="enterprise-heading">
            <div className="eyebrow">ENTERPRISE OPERATIONS</div>
            <h2>Scale Multilingual Energy Programs Across Teams and Markets</h2>
            <p>
              Coordinate translation requests from facilities, project teams, regional offices, contractors, and business units while reducing duplicated work, fragmented terminology, and limited program visibility.
            </p>
            <div className="link-cluster link-cluster--vertical">
              <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</EditorialLink>
              <EditorialLink href="https://www.stepes.com/security/">Stepes Security</EditorialLink>
            </div>
          </div>
          <div className="enterprise-list">
            {enterpriseCapabilities.map((item) => (
              <article className="enterprise-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section why-section">
        <div className="shell">
          <SectionHeader
            eyebrow="WHY STEPES"
            title="Built for Technical Accuracy, Global Scale, and Operational Control"
            intro="A connected language operation for complex energy content, supported by professional expertise, reusable language assets, workflow technology, and enterprise oversight."
            align="center"
          />
          <div className="differentiator-grid">
            {differentiators.map((item) => (
              <article className="differentiator" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="partner-panel">
            <div>
              <div className="eyebrow">ONE LANGUAGE PARTNER</div>
              <h2>Connect Complex Energy Content Across Your Global Organization</h2>
            </div>
            <div>
              <p>
                A global energy program may involve engineering specifications created in one country, equipment manufactured in another, software developed by a distributed product team, construction managed by an international contractor, and regulatory or community communication delivered in several local languages.
              </p>
              <p>
                Stepes brings these content streams into a coordinated multilingual workflow. Approved terminology and translated content can be shared across manuals, software, training, contracts, websites, and regulatory materials, while projects are routed according to subject matter, target market, and content risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark related-section">
        <div className="shell">
          <SectionHeader
            title="Explore Our Energy Translation Expertise"
            intro="Connect broad energy content operations with specialized sector and technology services."
            dark
          />
          <div className="related-list">
            {relatedServices.map((service) => (
              <a className="related-row" href={service.href} key={service.title}>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="related-arrow"><ArrowIcon size={20} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-layout">
          <div className="faq-heading">
            <h2>Energy Translation Services FAQs</h2>
            <p>
              Learn how Stepes supports technical content, specialized terminology, digital systems, safety and regulatory workflows, and large multilingual energy programs.
            </p>
            <EditorialLink href="https://www.stepes.com/contact-us/">Talk to an Energy Translation Expert</EditorialLink>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                item={item}
                index={index}
                key={item.question}
                isOpen={openFAQ === index}
                onToggle={() => setOpenFAQ(openFAQ === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell">
          <div className="final-cta-panel">
            <div>
              <h2>Support Your Global Energy Operations With Stepes</h2>
              <p>
                From specialized technical documentation and safety content to software, training, regulatory materials, and enterprise localization programs, Stepes helps energy organizations communicate accurately across languages and markets.
              </p>
            </div>
            <div className="final-cta-actions">
              <a className="button button--primary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
              <a className="button button--secondary" href="https://www.stepes.com/order-online/">
                <span>Get a Translation Quote</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .energy-page {
    --magenta: ${COLORS.magenta};
    --magenta-dark: ${COLORS.magentaDark};
    --blush: ${COLORS.blush};
    --blush-strong: ${COLORS.blushStrong};
    --dark: ${COLORS.dark};
    --dark-soft: ${COLORS.darkSoft};
    --ink: ${COLORS.ink};
    --body: ${COLORS.body};
    --muted: ${COLORS.muted};
    --border: ${COLORS.border};
    --border-dark: ${COLORS.borderDark};
    --white: ${COLORS.white};
    --eyebrow-dark: ${COLORS.eyebrowDark};
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: hidden;
  }

  .energy-page *,
  .energy-page *::before,
  .energy-page *::after { box-sizing: border-box; }

  .energy-page h1,
  .energy-page h2,
  .energy-page h3,
  .energy-page p,
  .energy-page ul { margin-top: 0; }

  .energy-page h1,
  .energy-page h2,
  .energy-page h3 {
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.12;
  }

  .energy-page h1 { font-size: 48px; margin-bottom: 24px; }
  .energy-page h2 { font-size: 36px; margin-bottom: 22px; }
  .energy-page h3 { font-size: 24px; margin-bottom: 12px; }
  .energy-page p { color: var(--body); font-size: 16px; margin-bottom: 18px; }
  .energy-page a { color: inherit; }
  .hero-copy,
  .sector-content,
  .content-group,
  .quality-item > div:last-child,
  .workflow-row > div:last-child,
  .software-copy,
  .mockup-main,
  .stakeholder-row > div:last-child,
  .enterprise-heading,
  .enterprise-row,
  .partner-panel > div,
  .related-row > div,
  .faq-heading,
  .faq-panel { min-width: 0; }
  .editorial-link span,
  .related-row h3,
  .faq-question > span:first-child { overflow-wrap: anywhere; }

  .shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding: 96px 0; }
  .section--soft { background: #F7F9FC; }
  .section--dark { background: var(--dark); color: var(--white); }
  .section--dark h2,
  .section--dark h3,
  .section--dark p { color: var(--white); }
  .section--dark p { color: #C7D0DD; }

  .eyebrow {
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  .section--dark .eyebrow,
  .software-section .eyebrow { color: var(--eyebrow-dark); }

  .section-header { max-width: 820px; margin-bottom: 48px; }
  .section-header--center { text-align: center; margin-left: auto; margin-right: auto; }
  .section-header p { font-size: 18px; line-height: 1.65; max-width: 800px; margin-bottom: 0; }
  .section-header--center p { margin-left: auto; margin-right: auto; }
  .section-header--dark h2 { color: var(--white); }
  .section-header--dark p { color: #C7D0DD; }

  .lead-copy { font-size: 18px !important; line-height: 1.65; }

  .hero-section { padding: 104px 0 96px; background: #fff; }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(420px, 0.98fr);
    align-items: center;
    gap: 60px;
  }
  .hero-copy { max-width: 650px; }
  .hero-lead { font-size: 18px !important; line-height: 1.7; max-width: 640px; margin-bottom: 34px !important; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; }

  .button {
    min-height: 48px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    padding: 13px 23px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    border: 1px solid transparent;
    transition: transform .2s ease, box-shadow .2s ease, background-color .2s ease, border-color .2s ease;
  }
  .button--primary,
  .button--primary:visited,
  .button--primary:hover,
  .button--primary:active,
  .button--primary:focus-visible { color: #fff !important; }
  .button--primary { background: var(--magenta); box-shadow: 0 12px 26px rgba(193,29,99,.18); }
  .button--primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 15px 32px rgba(193,29,99,.23); }
  .button--secondary { background: #fff; border-color: #CCD4DF; color: var(--ink); }
  .button--secondary:hover { border-color: #9DA8B7; transform: translateY(-1px); }
  .button:focus-visible,
  .editorial-link:focus-visible,
  .related-row:focus-visible,
  .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }

  .energy-art { width: 100%; min-width: 0; }
  .energy-art svg { display: block; width: 100%; height: auto; }

  .trust-strip { background: #fff; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .trust-item { min-height: 88px; display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px 26px; position: relative; }
  .trust-item:not(:last-child)::after { content: ""; position: absolute; top: 22px; right: 0; bottom: 22px; width: 1px; background: var(--border); }
  .trust-item span { color: #39475C; font-size: 16px; font-weight: 600; line-height: 1.35; }

  .overview-grid { display: grid; grid-template-columns: minmax(320px, .85fr) minmax(0, 1.15fr); gap: 92px; align-items: start; }
  .overview-grid > div:first-child { position: sticky; top: 36px; }
  .overview-copy { max-width: 760px; }

  .sector-list { border-top: 1px solid var(--border); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 64px; }
  .sector-row { display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 20px; padding: 34px 0; border-bottom: 1px solid var(--border); }
  .icon-frame { width: 48px; height: 48px; border-radius: 16px; border: 1px solid #E2C9D5; background: #fff; color: var(--magenta); display: flex; align-items: center; justify-content: center; flex: 0 0 auto; }
  .icon-frame--small { width: 42px; height: 42px; border-radius: 14px; }
  .sector-content p { margin-bottom: 16px; }
  .inline-link-group { display: flex; flex-direction: column; align-items: flex-start; gap: 8px; }
  .sector-content .editorial-link { max-width: 100%; }

  .editorial-link {
    color: var(--magenta) !important;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    padding: 5px 0;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }
  .editorial-link svg { transition: transform .2s ease; flex: 0 0 auto; }
  .editorial-link:hover { color: var(--magenta-dark) !important; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .section--dark .editorial-link { color: var(--eyebrow-dark) !important; }
  .section--dark .editorial-link:hover { color: #fff !important; }

  .lifecycle-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border-dark); border-left: 1px solid var(--border-dark); }
  .lifecycle-step { min-height: 260px; padding: 32px; border-right: 1px solid var(--border-dark); border-bottom: 1px solid var(--border-dark); }
  .step-number { color: var(--eyebrow-dark); font-size: 14px; font-weight: 600; letter-spacing: .08em; margin-bottom: 30px; }
  .lifecycle-step h3 { color: #fff; font-size: 22px; }
  .lifecycle-step p { margin-bottom: 0; }
  .section-action { margin-top: 34px; }

  .content-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
  .content-group { padding: 32px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); min-width: 0; }
  .content-group-heading { display: flex; align-items: center; gap: 14px; margin-bottom: 22px; }
  .content-group-heading h3 { font-size: 21px; margin-bottom: 0; }
  .content-group ul { margin: 0 0 20px; padding: 0; list-style: none; }
  .content-group li { position: relative; color: var(--body); font-size: 16px; line-height: 1.55; padding-left: 18px; margin-bottom: 10px; }
  .content-group li::before { content: ""; position: absolute; left: 0; top: .68em; width: 6px; height: 6px; border-radius: 50%; background: #A7B1C0; }

  .quality-intro { display: grid; grid-template-columns: minmax(320px, .9fr) minmax(0, 1.1fr); gap: 72px; align-items: end; margin-bottom: 52px; }
  .quality-intro p { margin-bottom: 0; }
  .quality-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--border); }
  .quality-item { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 18px; padding: 30px 0; border-bottom: 1px solid var(--border); }
  .quality-item:nth-child(odd) { padding-right: 44px; }
  .quality-item:nth-child(even) { padding-left: 44px; border-left: 1px solid var(--border); }
  .quality-item h3 { font-size: 21px; }
  .quality-item p { margin-bottom: 12px; }

  .workflow-list { border-top: 1px solid var(--border); }
  .workflow-row { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 46px; padding: 32px 0; border-bottom: 1px solid var(--border); align-items: start; }
  .workflow-label { color: var(--magenta); font-size: 16px; font-weight: 600; letter-spacing: .04em; line-height: 1.4; padding-top: 5px; }
  .workflow-row h3 { margin-bottom: 10px; }
  .workflow-row p { max-width: 800px; margin-bottom: 0; }
  .workflow-tools { margin-top: 38px; display: flex; flex-wrap: wrap; gap: 10px; }
  .workflow-tools span { border: 1px solid var(--border); border-radius: 999px; padding: 9px 14px; color: #45536A; font-size: 16px; line-height: 1.3; background: #fff; }
  .link-cluster { display: flex; flex-wrap: wrap; gap: 18px 30px; margin-top: 28px; }
  .link-cluster--vertical { flex-direction: column; align-items: flex-start; gap: 10px; }

  .software-grid { display: grid; grid-template-columns: minmax(0, .88fr) minmax(500px, 1.12fr); gap: 64px; align-items: center; }
  .software-copy h2 { color: #fff; }
  .check-list { list-style: none; padding: 0; margin: 30px 0 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 14px 24px; }
  .check-list li { position: relative; padding-left: 26px; font-size: 16px; color: var(--body); }
  .check-list li::before { content: ""; position: absolute; left: 0; top: .38em; width: 14px; height: 8px; border-left: 2px solid var(--magenta); border-bottom: 2px solid var(--magenta); transform: rotate(-45deg); }
  .check-list--dark li { color: #D4DBE5; }
  .check-list--dark li::before { border-color: var(--eyebrow-dark); }
  .link-cluster--dark .editorial-link { color: var(--eyebrow-dark) !important; }

  .software-mockup { background: #fff; border-radius: 28px; overflow: hidden; box-shadow: 0 24px 70px rgba(0,0,0,.28); color: var(--ink); }
  .mockup-topbar { min-height: 64px; border-bottom: 1px solid var(--border); display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 16px 20px; }
  .mockup-title { font-size: 16px; font-weight: 600; }
  .mockup-status { font-size: 14px; color: #8A2254; background: var(--blush); padding: 6px 10px; border-radius: 999px; }
  .mockup-body { display: grid; grid-template-columns: 118px minmax(0,1fr); min-height: 440px; }
  .mockup-sidebar { padding: 20px 12px; border-right: 1px solid var(--border); background: #F8FAFC; display: flex; flex-direction: column; gap: 6px; }
  .mockup-sidebar span { font-size: 14px; color: #69768A; padding: 9px 10px; border-radius: 9px; }
  .mockup-sidebar .active { color: var(--magenta); background: var(--blush); font-weight: 600; }
  .mockup-main { padding: 22px; min-width: 0; }
  .mockup-summary { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 18px; }
  .mockup-summary div { border: 1px solid var(--border); border-radius: 12px; padding: 11px 12px; }
  .mockup-summary span { display: block; color: #7A8799; font-size: 12px; line-height: 1.3; margin-bottom: 4px; }
  .mockup-summary strong { font-size: 14px; font-weight: 600; }
  .string-pair { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border: 1px solid var(--border); border-radius: 14px; overflow: hidden; margin-bottom: 12px; }
  .string-pair.is-selected { border-color: #D7A0B9; box-shadow: 0 0 0 3px rgba(193,29,99,.06); }
  .string-pair > div { padding: 14px; min-width: 0; }
  .string-pair > div + div { border-left: 1px solid var(--border); background: #FCF7FA; }
  .mock-label { display: block; font-size: 11px; color: #7B8798; font-weight: 600; letter-spacing: .08em; margin-bottom: 7px; }
  .string-pair p { color: #263246 !important; font-size: 16px !important; line-height: 1.45; margin: 0 !important; overflow-wrap: anywhere; }
  .mockup-footer { display: flex; flex-wrap: wrap; gap: 8px; padding-top: 5px; }
  .mockup-footer span { color: #4C5B70; background: #F4F6F9; border-radius: 999px; padding: 6px 9px; font-size: 12px; }

  .stakeholder-list { border-top: 1px solid var(--border); display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 64px; }
  .stakeholder-row { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 20px; padding: 32px 0; border-bottom: 1px solid var(--border); }
  .stakeholder-row p { margin-bottom: 12px; }

  .enterprise-grid { display: grid; grid-template-columns: minmax(320px, .8fr) minmax(0, 1.2fr); gap: 88px; align-items: start; }
  .enterprise-heading { position: sticky; top: 36px; }
  .enterprise-heading > p { font-size: 18px; }
  .enterprise-list { border-top: 1px solid var(--border); }
  .enterprise-row { padding: 28px 0; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: minmax(220px, .7fr) minmax(0, 1.3fr); gap: 34px; }
  .enterprise-row h3 { font-size: 20px; margin-bottom: 0; }
  .enterprise-row p { margin-bottom: 0; }

  .differentiator-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
  .differentiator { padding: 30px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .differentiator h3 { font-size: 20px; }
  .differentiator p { margin-bottom: 0; }
  .partner-panel { margin-top: 72px; border-radius: 28px; background: var(--blush); border: 1px solid #EFD2DF; display: grid; grid-template-columns: minmax(320px,.85fr) minmax(0,1.15fr); gap: 64px; padding: 54px; }
  .partner-panel p:last-child { margin-bottom: 0; }

  .related-list { border-top: 1px solid var(--border-dark); }
  .related-row { color: #fff !important; text-decoration: none; display: grid; grid-template-columns: minmax(0,1fr) 44px; gap: 30px; align-items: center; padding: 27px 0; border-bottom: 1px solid var(--border-dark); }
  .related-row h3 { color: #fff; font-size: 21px; margin-bottom: 8px; }
  .related-row p { max-width: 760px; margin-bottom: 0; }
  .related-arrow { width: 42px; height: 42px; border: 1px solid rgba(255,255,255,.24); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--eyebrow-dark); transition: transform .2s ease, border-color .2s ease; }
  .related-row:hover .related-arrow { transform: translateX(4px); border-color: var(--eyebrow-dark); }

  .faq-layout { display: grid; grid-template-columns: minmax(300px, .72fr) minmax(0, 1.28fr); gap: 88px; align-items: start; }
  .faq-heading { position: sticky; top: 36px; }
  .faq-heading > p { font-size: 18px; }
  .faq-panel { border-top: 1px solid var(--border); }
  .faq-item { border-bottom: 1px solid var(--border); }
  .faq-question { width: 100%; min-height: 76px; border: 0; background: transparent; display: flex; align-items: center; justify-content: space-between; gap: 22px; text-align: left; padding: 20px 0; color: var(--ink); font-family: inherit; font-size: 18px; font-weight: 600; line-height: 1.35; cursor: pointer; }
  .faq-toggle { width: 34px; height: 34px; border: 1px solid var(--border); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--magenta); font-size: 22px; line-height: 1; flex: 0 0 auto; }
  .faq-answer { padding: 0 60px 23px 0; }
  .faq-answer p { max-width: 820px; font-size: 16px; line-height: 1.7; margin-bottom: 0; }

  .final-cta-section { padding: 88px 0; background: #fff; }
  .final-cta-panel { border-radius: 30px; background: var(--blush); border: 1px solid #EDD0DD; padding: 62px; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(270px, .85fr); gap: 70px; align-items: center; }
  .final-cta-panel h2 { max-width: 670px; }
  .final-cta-panel p { max-width: 720px; font-size: 18px; margin-bottom: 0; }
  .final-cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }

  @media (max-width: 1180px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: minmax(0,1fr) minmax(380px,.9fr); gap: 42px; }
    .software-grid { grid-template-columns: minmax(0,.85fr) minmax(460px,1.15fr); gap: 42px; }
    .partner-panel { padding: 46px; gap: 48px; }
  }

  @media (max-width: 980px) {
    .energy-page h1 { font-size: 42px; }
    .energy-page h2 { font-size: 32px; }
    .energy-page h3 { font-size: 22px; }
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .hero-section { padding: 88px 0 76px; }
    .hero-grid { grid-template-columns: minmax(0,1fr) 360px; gap: 32px; }
    .hero-actions { flex-direction: column; align-items: flex-start; }
    .hero-actions .button { min-width: 230px; }
    .trust-grid { grid-template-columns: repeat(2, 1fr); }
    .trust-item:nth-child(2)::after { display: none; }
    .trust-item:nth-child(-n+2) { border-bottom: 1px solid var(--border); }
    .overview-grid,
    .quality-intro,
    .enterprise-grid,
    .faq-layout { grid-template-columns: 1fr; gap: 40px; }
    .overview-grid > div:first-child,
    .enterprise-heading,
    .faq-heading { position: static; }
    .sector-list { column-gap: 36px; }
    .lifecycle-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .content-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .quality-item:nth-child(odd) { padding-right: 28px; }
    .quality-item:nth-child(even) { padding-left: 28px; }
    .software-grid { grid-template-columns: 1fr; gap: 48px; }
    .software-copy { max-width: 800px; }
    .software-mockup { max-width: 760px; }
    .stakeholder-list { column-gap: 36px; }
    .enterprise-row { grid-template-columns: 240px minmax(0,1fr); }
    .differentiator-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .partner-panel { grid-template-columns: 1fr; gap: 24px; }
    .final-cta-panel { padding: 48px; grid-template-columns: 1fr; gap: 34px; }
    .final-cta-actions { flex-direction: row; }
  }

  @media (max-width: 840px) {
    .hero-grid { grid-template-columns: 1fr; gap: 42px; }
    .hero-copy { max-width: none; }
    .energy-art { width: 100%; max-width: 580px; margin: 0 auto; }
    .sector-list,
    .stakeholder-list { grid-template-columns: 1fr; column-gap: 0; }
    .quality-grid { grid-template-columns: 1fr; }
    .quality-item:nth-child(odd),
    .quality-item:nth-child(even) { padding: 28px 0; border-left: 0; }
  }

  @media (max-width: 820px) {
    .content-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 760px) {
    .energy-page h1 { font-size: 38px; }
    .energy-page h2 { font-size: 30px; }
    .energy-page h3 { font-size: 20px; }
    .section { padding: 68px 0; }
    .hero-section { padding: 72px 0 58px; }
    .hero-grid { grid-template-columns: 1fr; gap: 42px; }
    .hero-copy { max-width: none; }
    .energy-art { max-width: 560px; margin: 0 auto; }
    .hero-actions { width: 100%; }
    .hero-actions .button { width: 100%; min-width: 0; }
    .section-header { margin-bottom: 38px; }
    .section-header p { font-size: 17px; }
    .trust-grid { grid-template-columns: 1fr; }
    .trust-item { min-height: 70px; justify-content: flex-start; text-align: left; padding-left: 0; padding-right: 0; }
    .trust-item:not(:last-child)::after { display: none; }
    .trust-item:not(:last-child) { border-bottom: 1px solid var(--border); }
    .sector-list,
    .stakeholder-list { grid-template-columns: 1fr; column-gap: 0; }
    .sector-row,
    .stakeholder-row { grid-template-columns: 48px minmax(0,1fr); gap: 16px; }
    .lifecycle-grid { grid-template-columns: 1fr; }
    .lifecycle-step { min-height: 0; padding: 28px 24px; }
    .content-grid { grid-template-columns: 1fr; }
    .content-group { padding: 28px 24px; }
    .workflow-row { grid-template-columns: 1fr; gap: 10px; padding: 28px 0; }
    .workflow-label { padding-top: 0; }
    .check-list { grid-template-columns: 1fr; }
    .mockup-body { grid-template-columns: 1fr; min-height: 0; }
    .mockup-sidebar {
      border-right: 0;
      border-bottom: 1px solid var(--border);
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 6px;
      padding: 10px;
    }
    .mockup-sidebar span { min-width: 0; text-align: center; overflow-wrap: anywhere; }
    .mockup-summary { grid-template-columns: 1fr; }
    .string-pair { grid-template-columns: 1fr; }
    .string-pair > div + div { border-left: 0; border-top: 1px solid var(--border); }
    .enterprise-row { grid-template-columns: 1fr; gap: 8px; }
    .differentiator-grid { grid-template-columns: 1fr; }
    .partner-panel { padding: 34px 26px; border-radius: 24px; }
    .related-row { grid-template-columns: minmax(0,1fr) 42px; gap: 18px; }
    .faq-question { font-size: 17px; min-height: 70px; }
    .faq-answer { padding-right: 0; }
    .final-cta-section { padding: 68px 0; }
    .final-cta-panel { padding: 36px 26px; border-radius: 24px; }
    .final-cta-actions { flex-direction: column; }
    .final-cta-actions .button { width: 100%; }
  }

  @media (max-width: 480px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .hero-section { padding-top: 64px; }
    .energy-page h1 { font-size: 38px; }
    .hero-lead { font-size: 17px !important; }
    .energy-art { width: 100%; max-width: 460px; margin-left: auto; margin-right: auto; }
    .sector-row,
    .stakeholder-row,
    .quality-item { grid-template-columns: 42px minmax(0,1fr); }
    .icon-frame { width: 42px; height: 42px; border-radius: 14px; }
    .workflow-tools { gap: 8px; }
    .software-mockup { border-radius: 20px; }
    .mockup-topbar { align-items: flex-start; flex-direction: column; gap: 8px; }
    .mockup-main { padding: 16px; }
    .related-row h3 { line-height: 1.25; }
  }

  @media (max-width: 340px) {
    .energy-page h1 { font-size: 36px; }
    .mockup-sidebar { grid-template-columns: 1fr; }
    .sector-row,
    .stakeholder-row,
    .quality-item { grid-template-columns: 1fr; }
    .icon-frame { margin-bottom: 4px; }
    .related-row { grid-template-columns: 1fr; }
    .related-arrow { margin-top: 4px; }
  }
`;
