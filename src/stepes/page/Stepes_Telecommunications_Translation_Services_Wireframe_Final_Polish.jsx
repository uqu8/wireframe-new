import React from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F7E4ED",
  eyebrowDark: "#F2A7C6",
  ink: "#101728",
  body: "#48546A",
  muted: "#68758C",
  border: "#DDE3EC",
  borderDark: "rgba(255,255,255,.16)",
  soft: "#F6F8FB",
  dark: "#111927",
  darkAlt: "#182235",
};

const audiences = [
  {
    icon: "tower",
    title: "Mobile Network Operators and Wireless Carriers",
    text: "Localize carrier apps, service plans, account portals, activation instructions, billing communications, subscriber agreements, network operations content, customer-support resources, and regulatory notices.",
  },
  {
    icon: "equipment",
    title: "Telecom Equipment Manufacturers",
    text: "Translate documentation for radio access equipment, base stations, antennas, routers, switches, modems, gateways, transmission systems, test equipment, and customer-premises devices.",
  },
  {
    icon: "software",
    title: "Telecom Software and Platform Providers",
    text: "Localize OSS and BSS platforms, network orchestration, billing systems, service provisioning tools, monitoring applications, fraud prevention, CRM, and customer-care software.",
  },
  {
    icon: "fiber",
    title: "Broadband and Fiber Providers",
    text: "Support fiber-optic, fixed wireless, cable, and broadband operations with multilingual installation, field-service, network, onboarding, account, billing, and support content.",
  },
  {
    icon: "satellite",
    title: "Satellite and Non-Terrestrial Network Providers",
    text: "Translate content for satellite terminals, ground stations, network control platforms, direct-to-device services, remote connectivity, emergency communications, and global coverage solutions.",
  },
  {
    icon: "connected",
    title: "Enterprise Communications and IoT Providers",
    text: "Localize unified communications, UCaaS, CCaaS, VoIP, collaboration, contact-center, IoT connectivity, M2M, device management, gateways, and connected-device experiences.",
  },
];

const contentGroups = [
  {
    title: "Technical and Engineering Documentation",
    text: "Product specifications, network architecture documents, installation manuals, configuration guides, operations and maintenance manuals, troubleshooting instructions, engineering reports, test plans, validation documentation, field-service procedures, diagrams, tables, and technical white papers.",
  },
  {
    title: "Telecom Software and Digital Platforms",
    text: "OSS and BSS interfaces, network management systems, orchestration platforms, carrier apps, subscriber portals, billing software, device-management tools, embedded interfaces, developer portals, online help, release notes, and API documentation.",
  },
  {
    title: "Regulatory, Compliance, and Legal Content",
    text: "Equipment approval documentation, radio and spectrum materials, product safety documents, environmental compliance content, cybersecurity policies, privacy notices, subscriber agreements, carrier contracts, tenders, licenses, patents, and intellectual property.",
  },
  {
    title: "Customer and Subscriber Communications",
    text: "Service descriptions, plans and pricing, installation instructions, billing statements, account notifications, service alerts, outage communications, FAQs, knowledge bases, support scripts, chat content, and in-app, SMS, and email messages.",
  },
  {
    title: "Training and Workforce Content",
    text: "Technician training, installer certification, network operations courses, safety training, product education, sales enablement, eLearning modules, video content, webinars, assessments, and learning-management-system materials.",
  },
  {
    title: "Marketing and Corporate Communications",
    text: "Websites, landing pages, product brochures, datasheets, solution briefs, sales presentations, trade-show content, product launches, press releases, campaign assets, executive communications, corporate reports, and investor materials.",
  },
];

const technologies = [
  {
    title: "5G-Advanced and Emerging 6G",
    text: "Support deployed 5G networks, 5G-Advanced evolution, and emerging 6G and IMT-2030 research across radio access and Open RAN, mobile core, network slicing, private wireless, fixed wireless access, edge applications, test systems, standards contributions, patents, and technical documentation.",
    href: "https://www.stepes.com/5g-translation-services/",
    link: "5G, 5G-Advanced, and Emerging 6G Translation",
  },
  {
    title: "Telco Cloud, Cloud-Native Networks, and Virtualization",
    text: "Localization for NFV, SDN, cloud-native network functions, containerized deployments, orchestration, network automation, AI-assisted operations, virtual infrastructure, and service-management platforms.",
  },
  {
    title: "Broadband, Fiber, and Fixed Networks",
    text: "Translation for optical access networks, transmission systems, fixed wireless infrastructure, routers, gateways, field-service teams, subscriber equipment, installation, and troubleshooting.",
  },
  {
    title: "Satellite and Non-Terrestrial Network Providers",
    text: "Multilingual support for terminals, ground infrastructure, direct-to-device connectivity, network operations systems, remote services, emergency communications, and hybrid networks.",
  },
  {
    title: "eSIM, IoT, and Connected Devices",
    text: "Localization for remote SIM provisioning, activation, device onboarding, connectivity management, embedded interfaces, M2M platforms, IoT gateways, and support resources.",
    href: "https://www.stepes.com/iot-translation-services/",
    link: "IoT Translation Services",
  },
  {
    title: "Network APIs and Programmable Connectivity",
    text: "Translate API specifications, developer portals, authentication instructions, device-information services, location capabilities, fraud-prevention tools, implementation guides, and release documentation.",
  },
];

const softwareCapabilities = [
  {
    icon: "interface",
    title: "User Interfaces",
    text: "Menus, dashboards, commands, alerts, settings, workflows, reports, tooltips, dialog boxes, and error messages for technical, business, and subscriber users.",
  },
  {
    icon: "code",
    title: "Localization Engineering",
    text: "Variables, placeholders, resource identifiers, character limits, text expansion, plural forms, protected syntax, and other requirements that affect software function and presentation.",
  },
  {
    icon: "docs",
    title: "Help and Developer Content",
    text: "Knowledge bases, online help, product documentation, API references, implementation guides, release notes, configuration instructions, and troubleshooting content.",
  },
  {
    icon: "qa",
    title: "Testing and Continuous Delivery",
    text: "Linguistic review, interface QA, truncation checks, layout validation, untranslated-content checks, release management, and API-enabled localization workflows.",
  },
];

const customerExperienceItems = [
  "Carrier mobile applications and subscriber portals",
  "Service plans, pricing, promotions, and product descriptions",
  "Account registration, verification, activation, and eSIM setup",
  "Billing explanations, payment notices, usage alerts, and roaming content",
  "Device installation, troubleshooting, FAQs, and knowledge bases",
  "Chatbot content, IVR prompts, support scripts, email, SMS, and in-app notices",
  "Planned maintenance, service changes, and outage communications",
];

const technicalContent = [
  {
    title: "Network Infrastructure",
    items: ["Radio access systems", "Mobile core equipment", "Antennas and RF components", "Routers and switches", "Optical and fiber systems"],
  },
  {
    title: "Products and Equipment",
    items: ["Modems and gateways", "Network security products", "Test and measurement systems", "Customer-premises equipment", "Embedded communications devices"],
  },
  {
    title: "Engineering Content",
    items: ["Technical specifications", "Installation and commissioning", "Operating and maintenance procedures", "Diagnostics and repair", "Safety, diagrams, parts, and training"],
  },
];

const legalItems = [
  "Equipment certifications and radio-frequency documentation",
  "Spectrum, product safety, and environmental compliance materials",
  "Cybersecurity, privacy, and data-protection content",
  "Subscriber terms, carrier agreements, tenders, and licenses",
  "Telecommunications patents, filings, claims, and prosecution documents",
  "Standards-related documentation and regulatory correspondence",
];

const trainingItems = [
  "Network engineer and operations training",
  "Field technician and installer certification",
  "Product, safety, and compliance education",
  "Customer-care and sales enablement",
  "Channel-partner and reseller training",
  "eLearning, webinars, videos, narration, subtitles, and assessments",
];

const terminologyAssets = [
  "Approved source and target terms",
  "Product names and interface conventions",
  "Acronym and abbreviation rules",
  "Do-not-translate lists",
  "Market-specific language guidance",
  "Translation memories and style guides",
];

const aiWorkflows = [
  {
    title: "Professional Human Translation",
    text: "For patents, contracts, regulatory content, safety information, high-visibility technical materials, and other content where professional judgment is especially important.",
  },
  {
    title: "AI Translation With Professional Review",
    text: "For large knowledge bases, recurring operational content, product support materials, operational documentation, and frequently updated customer communications.",
  },
  {
    title: "Translation Memory and Content Reuse",
    text: "For manual revisions, product variants, standardized procedures, software releases, recurring warnings, and other repeated or versioned telecommunications content.",
  },
  {
    title: "Automated and Continuous Localization",
    text: "For telecom applications, customer portals, developer documentation, content systems, knowledge platforms, and agile product releases.",
  },
];

const securityItems = [
  {
    icon: "lock",
    title: "Controlled Project Access",
    text: "Limit multilingual project participation to approved stakeholders and language teams according to their responsibilities.",
  },
  {
    icon: "assets",
    title: "Centralized Language Assets",
    text: "Maintain translation memories, terminology, references, customer feedback, and approved language in one managed environment.",
  },
  {
    icon: "review",
    title: "Customer Review and Approval",
    text: "Coordinate reviewer questions, decisions, feedback, and approvals through a consistent workflow across markets and business units.",
  },
  {
    icon: "report",
    title: "Workflow Visibility",
    text: "Track files, projects, languages, delivery status, and multilingual activity with centralized reporting and analytics.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Content and Workflow Assessment",
    text: "We review content types, target languages, file formats, technical complexity, release schedules, terminology, customer review needs, and delivery goals.",
  },
  {
    number: "02",
    title: "Linguist and Terminology Preparation",
    text: "Stepes matches subject-matter linguists and prepares translation memories, glossaries, style guides, product references, and approved language for production.",
  },
  {
    number: "03",
    title: "Translation, Localization, and Review",
    text: "Content follows the selected combination of professional translation, AI-assisted production, translation memory, software-localization engineering, technical review, and customer terminology.",
  },
  {
    number: "04",
    title: "QA, Delivery, and Continuous Updates",
    text: "We complete linguistic and automated QA, file or interface checks, testing when required, customer review, feedback implementation, and ongoing language-asset maintenance.",
  },
];

const differentiators = [
  {
    title: "Telecommunications Subject-Matter Expertise",
    text: "Professional linguists are matched to network, equipment, software, regulatory, legal, training, marketing, and subscriber content.",
  },
  {
    title: "Translation in 100+ Languages",
    text: "Scale global launches, regional operations, and multilingual customer experiences across major languages and regional variants.",
  },
  {
    title: "AI + Human Quality",
    text: "Apply AI, translation memory, terminology management, professional review, and risk-based controls according to each content stream.",
  },
  {
    title: "Software and Technical Localization",
    text: "Coordinate documents, software strings, mobile apps, platforms, embedded interfaces, APIs, and testing within one program.",
  },
  {
    title: "Enterprise Workflow Control",
    text: "Centralize project management, terminology, reviewer feedback, translation assets, reporting, integrations, and visibility.",
  },
  {
    title: "End-to-End Content Support",
    text: "Use one localization partner for engineering, software, customer, legal, training, marketing, and corporate communications.",
  },
];

const relatedSolutions = [
  {
    title: "5G, 5G-Advanced, and Emerging 6G Translation",
    text: "Translate deployed 5G systems, 5G-Advanced network evolution, and emerging 6G research, standards contributions, patents, platforms, technical documentation, and training.",
    href: "https://www.stepes.com/5g-translation-services/",
    link: "Explore 5G Translation",
  },
  {
    title: "Telecom Software and OSS/BSS Localization",
    text: "Localize network operations, orchestration, provisioning, billing, subscriber-management, customer-care, and related telecom software platforms.",
    href: "https://www.stepes.com/telecom-software-localization-services/",
    link: "Explore Telecom Software Localization",
  },
  {
    title: "Telecom Network Equipment Translation",
    text: "Translate radio access, core network, routing, switching, optical, test, field-service, embedded-interface, and customer-premises equipment content.",
    href: "https://www.stepes.com/telecom-network-equipment-translation/",
    link: "Explore Network Equipment Translation",
  },
  {
    title: "Satellite Communications Translation Services",
    text: "Support terminals, ground systems, network-control software, direct-to-device services, technical documentation, regulation, and customer communications.",
    href: "https://www.stepes.com/satellite-communications-translation-services/",
    link: "Explore Satellite Translation",
  },
  {
    title: "Fiber and Broadband Translation Services",
    text: "Translate optical and fixed-network documentation, gateway interfaces, field-service materials, subscriber onboarding, support, billing, and outage communications.",
    href: "https://www.stepes.com/fiber-broadband-translation-services/",
    link: "Explore Fiber and Broadband Translation",
  },
  {
    title: "IoT Translation Services",
    text: "Localize connected devices, M2M platforms, gateways, device onboarding, applications, and support content.",
    href: "https://www.stepes.com/iot-translation-services/",
    link: "Explore IoT Translation",
  },
  {
    title: "Electronics Translation Services",
    text: "Translate electronic products, embedded systems, interfaces, technical documentation, and customer materials.",
    href: "https://www.stepes.com/electronics-translation-services/",
    link: "Explore Electronics Translation",
  },
  {
    title: "Semiconductor Translation Services",
    text: "Support chip design, manufacturing, integrated circuits, technical content, software, training, and patents.",
    href: "https://www.stepes.com/semiconductor-translation-services/",
    link: "Explore Semiconductor Translation",
  },
  {
    title: "Patent Translation Services",
    text: "Translate telecommunications patents, intellectual-property filings, technical claims, and supporting legal documents.",
    href: "https://www.stepes.com/patent-translation-services/",
    link: "Explore Patent Translation",
  },
  {
    title: "Translation API",
    text: "Connect multilingual workflows with software, content systems, knowledge bases, product platforms, and enterprise applications.",
    href: "https://www.stepes.com/translation-api/",
    link: "Explore the Translation API",
  },
];

const faqs = [
  {
    question: "What types of telecommunications content does Stepes translate?",
    answer: "Stepes translates technical documentation, telecom software, network platforms, regulatory materials, legal documents, patents, employee training, product marketing, websites, customer-support content, and subscriber communications. Our teams support content throughout engineering, network deployment, product release, service activation, customer support, and ongoing operations.",
  },
  {
    question: "Does Stepes localize OSS and BSS platforms?",
    answer: "Yes. Stepes provides OSS and BSS localization for network operations, orchestration, service provisioning, subscriber management, billing, payments, customer care, product catalogs, order management, fraud prevention, and related telecom workflows. We localize interfaces, online help, developer documentation, APIs, release notes, training, and support content, with linguistic and interface testing available when required.",
  },
  {
    question: "Can Stepes translate 5G-Advanced and emerging 6G content?",
    answer: "Yes. We translate content for deployed 5G networks and 5G-Advanced capabilities, including radio access and Open RAN, mobile core systems, antennas, base stations, private wireless, fixed wireless access, network slicing, edge applications, test systems, and related software. Stepes also supports emerging 6G and IMT-2030 research, technical requirements, standards contributions, patents, technical papers, and test documentation as the next generation moves through study and standardization.",
  },
  {
    question: "How does Stepes maintain telecommunications terminology?",
    answer: "Stepes can create and maintain organization-specific glossaries, translation memories, style guides, product-name lists, acronym rules, do-not-translate terms, and market-specific language requirements. These resources are applied during translation and updated with approved customer feedback to improve consistency across products, documents, platforms, and future releases.",
  },
  {
    question: "Does Stepes provide linguistic testing for telecom software and mobile apps?",
    answer: "Yes. Linguistic testing can identify mistranslations, inconsistent terminology, untranslated strings, truncation, text expansion, incorrect variables, layout problems, display errors, and other issues affecting the localized experience. Testing can be tailored for technical operator interfaces, enterprise platforms, carrier apps, subscriber portals, and embedded equipment software.",
  },
  {
    question: "Can Stepes translate subscriber and customer-support content?",
    answer: "Yes. We translate service plans, pricing, account setup, activation instructions, billing communications, roaming information, device installation, FAQs, knowledge bases, support scripts, chatbot content, IVR prompts, email, SMS, in-app messages, and service notifications. Terminology can be coordinated across channels to create a clearer and more consistent customer experience.",
  },
  {
    question: "Which languages does Stepes support?",
    answer: "Stepes provides professional telecommunications translation in more than 100 languages, including major global languages and regional variants such as European and Latin American Spanish, Canadian and European French, Brazilian and European Portuguese, and Simplified and Traditional Chinese.",
    href: "https://www.stepes.com/translation-languages/",
    link: "View All Translation Languages",
  },
  {
    question: "Can Stepes support continuous telecom software localization?",
    answer: "Yes. Stepes can support recurring and release-based localization through translation APIs, structured integrations, translation memory, terminology management, automated workflows, and professional review. The workflow can be configured around your systems, release schedules, target languages, quality requirements, and approval processes.",
  },
  {
    question: "How does Stepes protect confidential telecommunications content?",
    answer: "Stepes supports controlled file handling, approved project access, confidentiality requirements, centralized collaboration, role-based review, and secure enterprise workflows. Specific security, access, data-handling, and procurement requirements can be reviewed during program setup so the localization workflow aligns with your organization’s policies.",
  },
  {
    question: "Does Stepes translate telecommunications patents?",
    answer: "Yes. Stepes translates telecommunications patents and intellectual-property materials involving network systems, wireless communications, signal processing, antennas, semiconductors, software, security, IoT, satellite connectivity, and emerging communications technologies. Patent workflows can include specialized technical linguists and professional review according to the document’s jurisdiction, subject matter, and intended use.",
  },
];

function Icon({ name, size = 24 }) {
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
    focusable: false,
  };

  const paths = {
    tower: <><path d="M12 3v18"/><path d="M9 21h6"/><path d="M9.5 8 12 4l2.5 4"/><path d="M7.2 5.5a7 7 0 0 0 0 9"/><path d="M16.8 5.5a7 7 0 0 1 0 9"/></>,
    equipment: <><rect x="3" y="4" width="18" height="6" rx="1.5"/><rect x="3" y="14" width="18" height="6" rx="1.5"/><path d="M7 7h.01M11 7h6M7 17h.01M11 17h6"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01M7 12h4M7 16h10"/></>,
    fiber: <><path d="M4 6h6a4 4 0 0 1 4 4v0a4 4 0 0 0 4 4h2"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="14" r="2"/><path d="M4 18h6a4 4 0 0 0 4-4"/></>,
    satellite: <><path d="M7 13a5 5 0 0 0 7-7"/><path d="m5 11 8 8"/><path d="M9 15 5 19M3 21h8"/><path d="M16 3a5 5 0 0 1 5 5M16 7a1 1 0 0 1 1 1"/></>,
    connected: <><circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="m6 6.5 3.5 3M18 6.5l-3.5 3M6 17.5l3.5-3M18 17.5l-3.5-3"/></>,
    interface: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 14h8M8 17h5"/></>,
    code: <><path d="m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12"/></>,
    docs: <><path d="M7 3h8l4 4v14H7z"/><path d="M15 3v5h5M10 12h6M10 16h6"/><path d="M4 6v15h10"/></>,
    qa: <><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5M8 11l2 2 4-4"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/></>,
    assets: <><path d="M4 5h6l2 2h8v12H4z"/><path d="M8 12h8M8 16h5"/></>,
    review: <><path d="M5 4h14v16H5z"/><path d="M9 9h6M9 13h4M8 17l1.5 1.5L12 16"/></>,
    report: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
  };

  return <svg {...common}>{paths[name] || paths.connected}</svg>;
}

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`section-header section-header--${align}`}>
      {eyebrow ? <div className={`eyebrow${dark ? " eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroArt() {
  return (
    <div className="hero-art">
      <svg viewBox="0 0 620 500" role="img" aria-labelledby="telecom-art-title telecom-art-desc">
        <title id="telecom-art-title">Global telecommunications localization</title>
        <desc id="telecom-art-desc">A network connecting 5G mobile infrastructure, fiber, cloud software, satellite services, connected devices, and multilingual content.</desc>
        <defs>
          <linearGradient id="softPanel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF"/>
            <stop offset="100%" stopColor="#F7F9FC"/>
          </linearGradient>
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#20283A" floodOpacity="0.11"/>
          </filter>
        </defs>
        <rect x="48" y="44" width="524" height="400" rx="34" fill="url(#softPanel)" stroke="#D9E0EA"/>
        <path d="M127 305C180 276 225 270 278 292C333 315 372 307 419 271C461 239 500 232 542 251" fill="none" stroke="#BBC4D2" strokeWidth="2" strokeDasharray="7 9"/>
        <path d="M119 154C175 127 228 123 278 151C331 181 381 184 433 154C472 132 506 128 539 143" fill="none" stroke="#C8D0DC" strokeWidth="2" strokeDasharray="7 9"/>

        <g transform="translate(85 104)">
          <rect x="0" y="0" width="122" height="106" rx="20" fill="#fff" stroke="#D6DEE9" filter="url(#softShadow)"/>
          <path d="M61 28v55M47 83h28M51 49l10-18 10 18" fill="none" stroke="#657087" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 35a34 34 0 0 0 0 42M82 35a34 34 0 0 1 0 42" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
          <text x="61" y="98" textAnchor="middle" fontSize="12" fill="#59657A" fontWeight="600">MOBILE NETWORK</text>
        </g>

        <g transform="translate(249 70)">
          <rect x="0" y="0" width="150" height="110" rx="22" fill="#fff" stroke="#D6DEE9" filter="url(#softShadow)"/>
          <path d="M42 65h67a21 21 0 0 0-4-41 31 31 0 0 0-57 9 17 17 0 0 0-6 32Z" fill="#FDF2F7" stroke="#69758A" strokeWidth="2"/>
          <path d="M61 47h31M69 57h23" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
          <text x="75" y="94" textAnchor="middle" fontSize="12" fill="#59657A" fontWeight="600">TELCO CLOUD</text>
        </g>

        <g transform="translate(431 91)">
          <rect x="0" y="0" width="105" height="120" rx="20" fill="#fff" stroke="#D6DEE9" filter="url(#softShadow)"/>
          <path d="M41 55a25 25 0 0 0 35-35" fill="none" stroke="#68748A" strokeWidth="3" strokeLinecap="round"/>
          <path d="m33 47 32 32M43 62 27 78M19 87h34" fill="none" stroke="#68748A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M77 15a18 18 0 0 1 18 18M77 29a4 4 0 0 1 4 4" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
          <text x="52" y="108" textAnchor="middle" fontSize="12" fill="#59657A" fontWeight="600">SATELLITE</text>
        </g>

        <g transform="translate(94 264)">
          <rect x="0" y="0" width="150" height="118" rx="22" fill="#fff" stroke="#D6DEE9" filter="url(#softShadow)"/>
          <circle cx="35" cy="45" r="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2"/>
          <circle cx="114" cy="71" r="10" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2"/>
          <path d="M45 45h30a23 23 0 0 1 23 23v3h6M35 55v20a16 16 0 0 0 16 16h34" fill="none" stroke="#68748A" strokeWidth="3" strokeLinecap="round"/>
          <text x="75" y="105" textAnchor="middle" fontSize="12" fill="#59657A" fontWeight="600">FIBER + BROADBAND</text>
        </g>

        <g transform="translate(271 240)">
          <rect x="0" y="0" width="135" height="158" rx="24" fill="#141E2F" filter="url(#softShadow)"/>
          <rect x="18" y="18" width="99" height="122" rx="15" fill="#1E2A40" stroke="rgba(255,255,255,.12)"/>
          <rect x="32" y="34" width="72" height="17" rx="8" fill="#C11D63"/>
          <rect x="32" y="64" width="50" height="7" rx="3.5" fill="#AAB4C4"/>
          <rect x="32" y="82" width="65" height="7" rx="3.5" fill="#AAB4C4"/>
          <rect x="32" y="100" width="39" height="7" rx="3.5" fill="#AAB4C4"/>
          <circle cx="67.5" cy="125" r="4" fill="#F2A7C6"/>
          <text x="67.5" y="154" textAnchor="middle" fontSize="11" fill="#DCE3EE" fontWeight="600">CONNECTED DEVICE</text>
        </g>

        <g transform="translate(437 267)">
          <rect x="0" y="0" width="105" height="114" rx="20" fill="#fff" stroke="#D6DEE9" filter="url(#softShadow)"/>
          <rect x="18" y="18" width="69" height="26" rx="10" fill="#FDF2F7"/>
          <text x="52.5" y="36" textAnchor="middle" fontSize="12" fill="#9F1D55" fontWeight="600">EN → DE</text>
          <rect x="18" y="53" width="69" height="26" rx="10" fill="#F4F6F9"/>
          <text x="52.5" y="71" textAnchor="middle" fontSize="12" fill="#59657A" fontWeight="600">JA → EN</text>
          <path d="M31 93h43" stroke="#68748A" strokeWidth="3" strokeLinecap="round"/>
          <path d="m67 87 7 6-7 6" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>

        <circle cx="223" cy="219" r="6" fill="#C11D63"/>
        <circle cx="416" cy="224" r="6" fill="#C11D63"/>
        <circle cx="255" cy="344" r="5" fill="#C11D63"/>
        <circle cx="424" cy="327" r="5" fill="#C11D63"/>
      </svg>
    </div>
  );
}

function SoftwareMockup() {
  return (
    <div className="software-mockup" role="img" aria-label="Telecom software localization workflow preview showing a localized network operations string, protected variables, quality checks, and an in-context product view">
      <div className="mockup-topbar">
        <div className="mockup-dots"><span/><span/><span/></div>
        <div className="mockup-title">Network Operations Localization</div>
        <div className="status-chip">Ready for review</div>
      </div>
      <div className="mockup-grid">
        <div className="mockup-nav" aria-hidden="true">
          <div className="nav-logo">S</div>
          <span className="nav-item active"/><span className="nav-item"/><span className="nav-item"/><span className="nav-item"/>
        </div>
        <div className="mockup-workbench">
          <div className="workbench-heading">
            <div>
              <span className="mock-label">SOURCE STRING</span>
              <strong>Network slice configuration updated</strong>
            </div>
            <span className="language-tag">EN → DE</span>
          </div>
          <div className="translation-card">
            <div className="translation-meta">
              <span>LOCALIZED STRING</span>
              <span>Terminology verified</span>
            </div>
            <p>Konfiguration des Netzwerk-Slices aktualisiert</p>
            <div className="protected-tokens">
              <span>{"{slice_id}"}</span><span>{"{region}"}</span><span>API</span>
            </div>
          </div>
          <div className="qa-row"><span className="qa-check">✓</span><span>Terminology</span><span className="qa-pass">Passed</span></div>
          <div className="qa-row"><span className="qa-check">✓</span><span>Protected variables</span><span className="qa-pass">Passed</span></div>
          <div className="qa-row"><span className="qa-check">✓</span><span>Display length</span><span className="qa-pass">Passed</span></div>
        </div>
        <div className="mockup-preview">
          <span className="mock-label">PRODUCT PREVIEW</span>
          <div className="preview-window">
            <div className="preview-header"><span>Netzwerkübersicht</span><span>•••</span></div>
            <div className="preview-metric"><small>Aktive Slices</small><strong>24</strong></div>
            <div className="preview-alert">Konfiguration des Netzwerk-Slices aktualisiert</div>
            <div className="preview-bars"><i/><i/><i/><i/></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TelecommunicationsTranslationServicesWireframe() {
  return (
    <main className="telecom-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --magenta-deep: ${COLORS.magentaDeep};
          --blush: ${COLORS.blush};
          --blush-strong: ${COLORS.blushStrong};
          --eyebrow-dark: ${COLORS.eyebrowDark};
          --ink: ${COLORS.ink};
          --body: ${COLORS.body};
          --muted: ${COLORS.muted};
          --border: ${COLORS.border};
          --soft: ${COLORS.soft};
          --dark: ${COLORS.dark};
          --dark-alt: ${COLORS.darkAlt};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .telecom-page {
          margin: 0;
          color: var(--ink);
          background: #fff;
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.66;
          overflow-x: hidden;
          overflow-x: clip;
        }
        .telecom-page a { color: inherit; }
        .telecom-page h1, .telecom-page h2, .telecom-page h3, .telecom-page h4, .telecom-page p, .telecom-page li, .telecom-page a, .telecom-page span { overflow-wrap: break-word; }
        .hero-grid > *, .overview-grid > *, .technology-layout > *, .software-grid > *, .cx-grid > *, .technical-lead > *, .training-grid > *, .terminology-grid > *, .ai-intro > *, .security-grid > *, .cta-panel > * { min-width: 0; }
        .shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .section { padding: 96px 0; }
        .section--dense { padding: 80px 0; }
        .section--soft { background: var(--soft); }
        .section--blush { background: var(--blush); }
        .section--dark { background: var(--dark); color: #fff; }
        .section--dark-alt { background: var(--dark-alt); color: #fff; }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.35 !important;
          font-weight: 600 !important;
          letter-spacing: .15em !important;
          text-transform: uppercase;
          margin: 0 0 16px;
        }
        .eyebrow--dark { color: var(--eyebrow-dark) !important; }
        h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -.027em; color: inherit; }
        h1 { font-size: 48px; line-height: 1.08; max-width: 690px; }
        h2 { font-size: 36px; line-height: 1.16; }
        h3 { font-size: 24px; line-height: 1.25; }
        p { margin: 0; color: var(--body); font-size: 16px; }
        .section--dark p, .section--dark-alt p { color: #C7D0DE; }
        .body-large { font-size: 18px; line-height: 1.7; }
        .section-header { margin-bottom: 50px; }
        .section-header--center { text-align: center; margin-left: auto; margin-right: auto; }
        .section-header--center h2 { max-width: 850px; margin-left: auto; margin-right: auto; }
        .section-intro { max-width: 800px; margin-top: 18px; font-size: 18px; line-height: 1.7; }
        .section-header--center .section-intro { margin-left: auto; margin-right: auto; }
        .btn-row { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
        .btn {
          min-height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          border-radius: 999px;
          padding: 12px 22px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          background: var(--magenta);
          border-color: var(--magenta);
          color: #fff !important;
        }
        .btn-primary *, .btn-primary svg, .btn-primary path { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(193,29,99,.2); }
        .btn-secondary { background: #fff; border-color: #D6DDE8; color: var(--ink); }
        .btn-secondary:hover { border-color: #B9C3D2; background: #F8FAFC; transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.27); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 44px;
          color: var(--magenta) !important;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
        }
        .editorial-link svg, .editorial-link path { color: var(--magenta) !important; stroke: var(--magenta) !important; }
        .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .editorial-link svg { transition: transform .2s ease; }

        .hero { padding: 104px 0 96px; background: linear-gradient(180deg,#fff 0%,#FBFCFE 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(480px,.98fr); gap: 52px; align-items: center; }
        .hero-copy { max-width: 690px; }
        .hero-copy .body-large { max-width: 650px; margin-top: 24px; }
        .hero-copy .btn-row { margin-top: 34px; }
        .hero-points { display: flex; flex-wrap: wrap; gap: 10px 18px; margin-top: 28px; color: var(--muted); font-size: 16px; }
        .hero-point { display: inline-flex; align-items: center; gap: 8px; }
        .hero-point::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); flex: 0 0 auto; }
        .hero-art { width: 100%; max-width: 620px; justify-self: end; }
        .hero-art svg { display: block; width: 100%; height: auto; }

        .trust-strip { background: #fff; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .trust-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; }
        .trust-item { padding: 26px 18px; text-align: center; }
        .trust-item strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; }
        .trust-item span { display: block; margin-top: 5px; font-size: 14px; color: var(--muted); }

        .overview-grid { display: grid; grid-template-columns: .75fr 1.25fr; gap: 78px; align-items: start; }
        .overview-copy { display: grid; gap: 20px; max-width: 770px; }
        .overview-copy .editorial-link { margin-top: 6px; }
        .overview-statements { margin-top: 32px; border-top: 1px solid var(--border); }
        .overview-statement { display: grid; grid-template-columns: 178px 1fr; gap: 22px; padding: 22px 0; border-bottom: 1px solid var(--border); align-items: start; }
        .overview-statement strong { font-size: 16px; font-weight: 600; }
        .overview-statement span { font-size: 16px; color: var(--body); }

        .audience-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .audience-item { padding: 34px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); min-height: 290px; }
        .icon-box { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta); margin-bottom: 24px; }
        .audience-item h3 { font-size: 22px; }
        .audience-item p { margin-top: 14px; }

        .content-rows { border-top: 1px solid var(--border); }
        .content-row { display: grid; grid-template-columns: 1fr 1fr; border-bottom: 1px solid var(--border); }
        .content-cell { padding: 34px 44px 38px 0; }
        .content-cell + .content-cell { border-left: 1px solid var(--border); padding-left: 44px; padding-right: 0; }
        .content-cell h3 { font-size: 22px; }
        .content-cell p { margin-top: 13px; max-width: 560px; }

        .technology-layout { display: grid; grid-template-columns: .82fr 1.18fr; gap: 70px; align-items: start; }
        .technology-intro { position: sticky; top: 28px; }
        .technology-intro .section-intro { max-width: 520px; }
        .network-orbit { margin-top: 34px; min-height: 270px; border: 1px solid rgba(255,255,255,.14); border-radius: 28px; position: relative; overflow: hidden; background: radial-gradient(circle at 50% 45%, rgba(193,29,99,.17), transparent 34%), #141E30; }
        .network-orbit::before, .network-orbit::after { content: ""; position: absolute; border: 1px solid rgba(255,255,255,.14); border-radius: 50%; left: 50%; top: 50%; transform: translate(-50%,-50%); }
        .network-orbit::before { width: 190px; height: 190px; }
        .network-orbit::after { width: 310px; height: 310px; }
        .orbit-core { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 94px; height: 94px; border-radius: 50%; background: var(--magenta); color: #fff; display: grid; place-items: center; text-align: center; font-size: 13px; line-height: 1.3; font-weight: 600; z-index: 2; box-shadow: 0 16px 40px rgba(193,29,99,.35); }
        .orbit-label { position: absolute; z-index: 2; color: #DDE5F0; font-size: 14px; line-height: 1.3; font-weight: 600; }
        .orbit-label--1 { top: 28px; left: 32px; }
        .orbit-label--2 { top: 34px; right: 26px; }
        .orbit-label--3 { bottom: 35px; left: 31px; }
        .orbit-label--4 { bottom: 30px; right: 25px; }
        .technology-list { border-top: 1px solid ${COLORS.borderDark}; }
        .technology-item { display: grid; grid-template-columns: 36px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid ${COLORS.borderDark}; }
        .technology-marker { width: 8px; height: 8px; border-radius: 50%; background: var(--eyebrow-dark); margin-top: 9px; }
        .technology-item h3 { font-size: 21px; }
        .technology-item p { margin-top: 10px; }
        .technology-item .editorial-link { margin-top: 11px; color: var(--eyebrow-dark) !important; }
        .technology-item .editorial-link svg, .technology-item .editorial-link path { color: var(--eyebrow-dark) !important; stroke: var(--eyebrow-dark) !important; }
        .emerging-note { margin-top: 26px; border-left: 3px solid var(--magenta); padding: 2px 0 2px 20px; }
        .emerging-note strong { font-size: 16px; }
        .emerging-note p { margin-top: 6px; }

        .software-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 64px; align-items: center; }
        .software-copy .section-intro { margin-top: 18px; max-width: 520px; }
        .software-capabilities { margin-top: 30px; border-top: 1px solid var(--border); }
        .software-capability { display: grid; grid-template-columns: 44px 1fr; gap: 16px; padding: 19px 0; border-bottom: 1px solid var(--border); }
        .software-capability .mini-icon { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); }
        .software-capability strong { display: block; font-size: 16px; font-weight: 600; }
        .software-capability p { margin-top: 5px; }
        .software-links { display: flex; flex-wrap: wrap; gap: 6px 22px; margin-top: 26px; }
        .software-mockup { border: 1px solid #D5DDE8; border-radius: 28px; overflow: hidden; background: #fff; box-shadow: 0 24px 60px rgba(32,40,58,.12); }
        .mockup-topbar { min-height: 60px; display: grid; grid-template-columns: 90px 1fr auto; align-items: center; gap: 10px; padding: 0 20px; border-bottom: 1px solid #E1E6EE; }
        .mockup-dots { display: flex; gap: 6px; }
        .mockup-dots span { width: 8px; height: 8px; border-radius: 50%; background: #C9D1DD; }
        .mockup-title { font-size: 14px; color: #536077; font-weight: 600; }
        .status-chip { font-size: 12px; line-height: 1.2; color: #256D48; background: #E9F6EF; border-radius: 999px; padding: 7px 10px; font-weight: 600; }
        .mockup-grid { display: grid; grid-template-columns: 68px minmax(0,1.2fr) minmax(190px,.8fr); min-height: 470px; }
        .mockup-nav { background: #151F31; padding: 18px 14px; display: flex; align-items: center; flex-direction: column; gap: 18px; }
        .nav-logo { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 10px; background: var(--magenta); color: #fff; font-size: 15px; font-weight: 600; }
        .nav-item { width: 25px; height: 7px; border-radius: 99px; background: rgba(255,255,255,.22); }
        .nav-item.active { background: var(--eyebrow-dark); }
        .mockup-workbench { padding: 27px 24px; background: #FAFBFD; border-right: 1px solid #E1E6EE; }
        .workbench-heading { display: flex; align-items: flex-start; justify-content: space-between; gap: 15px; }
        .workbench-heading strong { display: block; font-size: 16px; line-height: 1.4; margin-top: 5px; color: var(--ink); }
        .mock-label { font-size: 11px; letter-spacing: .12em; color: #738097; font-weight: 600; }
        .language-tag { font-size: 12px; white-space: nowrap; color: var(--magenta-dark); background: var(--blush); border-radius: 999px; padding: 6px 9px; font-weight: 600; }
        .translation-card { margin-top: 22px; border: 1px solid #DCE2EA; background: #fff; border-radius: 16px; padding: 18px; }
        .translation-meta { display: flex; justify-content: space-between; gap: 10px; color: #6D798E; font-size: 11px; letter-spacing: .06em; font-weight: 600; }
        .translation-card p { margin-top: 16px; font-size: 16px; line-height: 1.45; color: var(--ink); }
        .protected-tokens { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 16px; }
        .protected-tokens span { font-size: 12px; color: #59657A; background: #F0F3F7; border: 1px solid #E0E5EC; border-radius: 7px; padding: 5px 7px; }
        .qa-row { display: grid; grid-template-columns: 22px 1fr auto; align-items: center; gap: 9px; padding: 15px 2px; border-bottom: 1px solid #E0E5EC; font-size: 14px; color: #536077; }
        .qa-check { width: 20px; height: 20px; display: grid; place-items: center; border-radius: 50%; background: #E9F6EF; color: #256D48; font-weight: 600; }
        .qa-pass { color: #256D48; font-weight: 600; }
        .mockup-preview { padding: 27px 20px; background: #fff; }
        .preview-window { margin-top: 16px; border: 1px solid #DCE2EA; border-radius: 16px; overflow: hidden; }
        .preview-header { padding: 12px; background: #162238; color: #fff; display: flex; justify-content: space-between; gap: 10px; font-size: 12px; font-weight: 600; }
        .preview-metric { margin: 16px; padding: 14px; background: #F6F8FB; border-radius: 12px; }
        .preview-metric small { display: block; color: #6C788D; font-size: 11px; }
        .preview-metric strong { display: block; margin-top: 3px; font-size: 24px; color: var(--ink); }
        .preview-alert { margin: 0 16px; padding: 13px; border-left: 3px solid var(--magenta); background: var(--blush); color: #4E5B71; font-size: 13px; line-height: 1.45; }
        .preview-bars { display: grid; gap: 8px; margin: 20px 16px; }
        .preview-bars i { display: block; height: 7px; border-radius: 7px; background: #E6EAF0; }
        .preview-bars i:nth-child(2) { width: 82%; }
        .preview-bars i:nth-child(3) { width: 63%; }
        .preview-bars i:nth-child(4) { width: 74%; }

        .cx-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: center; }
        .cx-copy .section-intro { margin-top: 18px; max-width: 600px; }
        .cx-copy .editorial-link { margin-top: 22px; }
        .cx-panel { background: #fff; border: 1px solid #E8CBD8; border-radius: 28px; padding: 24px 32px; }
        .check-list { list-style: none; margin: 0; padding: 0; }
        .check-list li { display: grid; grid-template-columns: 24px 1fr; gap: 13px; align-items: start; padding: 17px 0; border-bottom: 1px solid #ECD8E2; color: var(--body); font-size: 16px; }
        .check-list li:last-child { border-bottom: 0; }
        .check-list li::before { content: "✓"; width: 22px; height: 22px; display: grid; place-items: center; margin-top: 2px; border-radius: 50%; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; }

        .technical-lead { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
        .technical-lead > p { max-width: 760px; font-size: 18px; line-height: 1.75; }
        .technical-columns { display: grid; grid-template-columns: repeat(3,1fr); gap: 0; margin-top: 52px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .technical-column { padding: 32px 34px 35px 0; }
        .technical-column + .technical-column { border-left: 1px solid var(--border); padding-left: 34px; }
        .technical-column h3 { font-size: 21px; }
        .technical-column ul { margin: 19px 0 0; padding: 0; list-style: none; display: grid; gap: 11px; }
        .technical-column li { color: var(--body); font-size: 16px; position: relative; padding-left: 18px; }
        .technical-column li::before { content: ""; position: absolute; left: 0; top: .72em; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }
        .technical-links { display: flex; flex-wrap: wrap; gap: 4px 24px; margin-top: 28px; }

        .split-feature { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid var(--border); border-radius: 30px; overflow: hidden; background: #fff; }
        .split-feature-copy { padding: 54px; }
        .split-feature-copy .section-intro { margin-top: 18px; }
        .split-feature-list { padding: 42px 48px; background: #F7F9FC; }
        .split-feature-list ul { list-style: none; margin: 0; padding: 0; }
        .split-feature-list li { display: grid; grid-template-columns: 8px 1fr; gap: 14px; padding: 16px 0; border-bottom: 1px solid var(--border); color: var(--body); font-size: 16px; }
        .split-feature-list li:last-child { border-bottom: 0; }
        .split-feature-list li::before { content: ""; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); margin-top: 9px; }
        .split-feature .editorial-link { margin-top: 24px; }

        .training-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 70px; align-items: center; }
        .training-visual { min-height: 390px; border-radius: 30px; border: 1px solid var(--border); background: linear-gradient(150deg,#fff,#F6F8FB); padding: 34px; display: grid; align-content: center; }
        .training-screen { max-width: 470px; margin: auto; width: 100%; border-radius: 22px; overflow: hidden; background: #172135; box-shadow: 0 22px 50px rgba(28,37,55,.16); }
        .training-screen-top { height: 48px; display: flex; align-items: center; justify-content: space-between; padding: 0 18px; color: #DCE3EF; border-bottom: 1px solid rgba(255,255,255,.1); font-size: 12px; }
        .training-screen-body { display: grid; grid-template-columns: 1.1fr .9fr; min-height: 236px; }
        .training-slide { padding: 26px; }
        .training-slide .slide-tag { color: var(--eyebrow-dark); font-size: 11px; letter-spacing: .12em; font-weight: 600; }
        .training-slide h4 { margin: 12px 0 0; font-size: 22px; line-height: 1.25; font-weight: 600; color: #fff; }
        .training-slide p { margin-top: 12px; color: #BFC9D8; font-size: 16px; line-height: 1.5; }
        .training-slide .progress { margin-top: 24px; height: 6px; background: rgba(255,255,255,.12); border-radius: 7px; overflow: hidden; }
        .training-slide .progress span { display: block; height: 100%; width: 68%; background: var(--magenta); }
        .training-language { background: #202C43; padding: 24px; display: grid; align-content: center; gap: 10px; }
        .training-language span { display: block; padding: 10px 12px; border-radius: 10px; background: rgba(255,255,255,.07); color: #DCE3EF; font-size: 13px; }
        .training-language span.active { background: var(--magenta); color: #fff; }
        .training-copy .section-intro { margin-top: 18px; }
        .training-copy .check-list { margin-top: 22px; }
        .training-copy .check-list li { border-color: var(--border); }
        .training-copy .editorial-link { margin-top: 20px; }

        .terminology-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 66px; align-items: center; }
        .terminology-copy .section-intro { margin-top: 18px; }
        .terminology-copy p + p { margin-top: 18px; }
        .terminology-copy .editorial-link { margin-top: 22px; }
        .language-assets { border: 1px solid var(--border); border-radius: 28px; padding: 32px; background: #fff; box-shadow: 0 20px 50px rgba(32,40,58,.08); }
        .asset-header { display: flex; justify-content: space-between; align-items: center; gap: 15px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
        .asset-header strong { font-size: 18px; font-weight: 600; }
        .asset-header span { font-size: 12px; font-weight: 600; color: #256D48; background: #E9F6EF; border-radius: 999px; padding: 7px 10px; }
        .asset-list { display: grid; grid-template-columns: 1fr 1fr; }
        .asset-item { padding: 18px 18px 18px 0; border-bottom: 1px solid var(--border); color: var(--body); font-size: 16px; }
        .asset-item:nth-child(even) { border-left: 1px solid var(--border); padding-left: 18px; }
        .asset-item:nth-last-child(-n+2) { border-bottom: 0; }
        .asset-footer { margin-top: 20px; display: flex; align-items: center; gap: 10px; color: var(--muted); }
        .asset-footer span { font-size: 16px; color: var(--muted); }
        .asset-check { width: 22px; height: 22px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 50%; background: #E9F6EF; color: #256D48; font-size: 13px; font-weight: 600; }

        .ai-intro { display: grid; grid-template-columns: .72fr 1.28fr; gap: 74px; align-items: end; margin-bottom: 48px; }
        .ai-intro .section-intro { margin-top: 18px; }
        .ai-summary { max-width: 720px; }
        .ai-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid ${COLORS.borderDark}; border-left: 1px solid ${COLORS.borderDark}; }
        .ai-item { padding: 30px; min-height: 290px; border-right: 1px solid ${COLORS.borderDark}; border-bottom: 1px solid ${COLORS.borderDark}; }
        .ai-item h3 { font-size: 20px; }
        .ai-item p { margin-top: 13px; }
        .ai-item .ai-rule { width: 40px; height: 3px; border-radius: 4px; background: var(--magenta); margin-bottom: 22px; }
        .ai-link { margin-top: 30px; }
        .section--dark .ai-link .editorial-link { color: var(--eyebrow-dark) !important; }
        .section--dark .ai-link .editorial-link svg, .section--dark .ai-link .editorial-link path { color: var(--eyebrow-dark) !important; stroke: var(--eyebrow-dark) !important; }

        .security-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 68px; align-items: start; }
        .security-copy .section-intro { margin-top: 18px; }
        .security-copy .security-links { display: grid; justify-items: start; margin-top: 24px; }
        .security-matrix { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .security-item { padding: 30px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .security-item .icon-box { margin-bottom: 20px; }
        .security-item h3 { font-size: 21px; }
        .security-item p { margin-top: 10px; }

        .process-list { border-top: 1px solid var(--border); }
        .process-step { display: grid; grid-template-columns: 90px 310px 1fr; gap: 34px; align-items: start; padding: 31px 0; border-bottom: 1px solid var(--border); }
        .process-number { color: var(--magenta); font-size: 18px; font-weight: 600; line-height: 1.4; }
        .process-step h3 { font-size: 22px; }
        .process-step p { max-width: 720px; }

        .different-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
        .different-item { padding: 32px; min-height: 215px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .different-item h3 { font-size: 21px; }
        .different-item p { margin-top: 12px; }

        .related-list { border-top: 1px solid var(--border); }
        .related-row { display: grid; grid-template-columns: 280px 1fr auto; gap: 28px; align-items: center; padding: 23px 0; border-bottom: 1px solid var(--border); }
        .related-row h3 { font-size: 19px; }
        .related-row p { max-width: 700px; }
        .related-row .editorial-link { white-space: nowrap; }

        .faq-panel { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-item > summary { list-style: none; }
        .faq-item > summary::-webkit-details-marker { display: none; }
        .faq-item:last-child { border-bottom: 0; }
        .faq-button { width: 100%; min-height: 76px; padding: 22px 0; display: grid; grid-template-columns: 1fr 38px; gap: 20px; align-items: center; text-align: left; background: transparent; border: 0; color: var(--ink); cursor: pointer; font-family: inherit; }
        .faq-question { font-size: 18px; line-height: 1.45; font-weight: 600; }
        .faq-toggle { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #D4DCE7; display: grid; place-items: center; color: var(--magenta); font-size: 22px; line-height: 1; transition: transform .2s ease, background .2s ease; }
        .faq-item[open] .faq-toggle { transform: rotate(45deg); background: var(--blush); }
        .faq-answer { padding: 0 72px 26px 0; max-width: 920px; }
        .faq-answer p { font-size: 16px; line-height: 1.7; }
        .faq-answer .editorial-link { margin-top: 10px; }
        .faq-button:hover .faq-question { color: var(--magenta-deep); }

        .final-cta { padding: 80px 0; background: #fff; }
        .cta-panel { border-radius: 30px; background: var(--blush); border: 1px solid #ECD2DE; padding: 66px 70px; display: grid; grid-template-columns: 1.2fr auto; gap: 50px; align-items: center; position: relative; overflow: hidden; }
        .cta-panel::after { content: ""; position: absolute; width: 300px; height: 300px; border-radius: 50%; right: -150px; top: -150px; border: 1px solid rgba(193,29,99,.18); }
        .cta-copy { position: relative; z-index: 1; }
        .cta-copy h2 { max-width: 760px; }
        .cta-copy p { margin-top: 16px; max-width: 780px; font-size: 18px; line-height: 1.7; }
        .cta-panel .btn-row { position: relative; z-index: 1; justify-content: flex-end; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .hero-grid { grid-template-columns: minmax(0,1fr) minmax(420px,.9fr); gap: 36px; }
          .audience-item { padding: 28px; }
          .software-grid { grid-template-columns: 1fr; }
          .software-copy { max-width: 820px; }
          .software-mockup { max-width: 980px; }
          .ai-grid { grid-template-columns: 1fr 1fr; }
          .ai-item { min-height: 240px; }
        }
        @media (max-width: 900px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section--dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 780px; }
          .hero-points { display: grid; gap: 8px; }
          .hero-point { width: 100%; min-width: 0; align-items: flex-start; }
          .hero-point::before { margin-top: 9px; }
          .hero-art { justify-self: center; max-width: 680px; }
          .trust-grid { grid-template-columns: 1fr 1fr; }
          .overview-grid, .technology-layout, .cx-grid, .technical-lead, .terminology-grid, .ai-intro, .security-grid, .training-grid { grid-template-columns: 1fr; gap: 40px; }
          .technology-intro { position: static; }
          .audience-grid { grid-template-columns: 1fr 1fr; }
          .audience-item { min-height: 260px; }
          .content-row { grid-template-columns: 1fr; }
          .content-cell { padding: 28px 0; }
          .content-cell + .content-cell { border-left: 0; border-top: 1px solid var(--border); padding: 28px 0; }
          .mockup-grid { grid-template-columns: 60px minmax(0,1fr); }
          .mockup-preview { grid-column: 2; border-top: 1px solid #E1E6EE; }
          .mockup-workbench { border-right: 0; }
          .technical-columns { grid-template-columns: 1fr; }
          .technical-column { padding: 27px 0; }
          .technical-column + .technical-column { border-left: 0; border-top: 1px solid var(--border); padding: 27px 0; }
          .split-feature { grid-template-columns: 1fr; }
          .split-feature-list { border-top: 1px solid var(--border); }
          .different-grid { grid-template-columns: 1fr 1fr; }
          .related-row { grid-template-columns: minmax(190px, .7fr) minmax(0, 1.3fr); }
          .related-row .editorial-link { grid-column: 2; justify-self: start; white-space: normal; }
          .process-step { grid-template-columns: 70px 1fr; gap: 22px; }
          .process-step p { grid-column: 2; }
          .cta-panel { grid-template-columns: 1fr; padding: 54px; }
          .cta-panel .btn-row { justify-content: flex-start; }
        }
        @media (max-width: 640px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .section, .section--dense { padding: 68px 0; }
          h1 { font-size: clamp(29.5px, 9.35vw, 38px); line-height: 1.1; }
          h2 { font-size: clamp(28px, 7.7vw, 30px); line-height: 1.18; }
          h3 { font-size: 20px; }
          .body-large, .section-intro, .technical-lead > p, .cta-copy p { font-size: 17px; }
          .section-header { margin-bottom: 36px; }
          .hero { padding: 72px 0 68px; }
          .hero-copy, .hero-art, .section-header, .technical-lead, .related-row, .cta-copy, .cta-panel .btn-row { min-width: 0; }
          .hero-copy .body-large { margin-top: 20px; }
          .hero-copy .btn-row { margin-top: 28px; }
          .hero-copy .btn { width: 100%; }
          .hero-art { margin-top: 6px; }
          .trust-grid { grid-template-columns: 1fr 1fr; gap: 0; }
          .trust-item { padding: 18px 12px; }
          .overview-statement { grid-template-columns: 1fr; gap: 6px; }
          .audience-grid { grid-template-columns: 1fr; }
          .audience-item h3, .content-cell h3, .technology-item h3, .technical-column h3, .security-item h3, .different-item h3, .process-step h3, .related-row h3 { font-size: 20px; }
          .audience-item { min-height: 0; padding: 27px 24px; }
          .content-cell { padding: 26px 0; }
          .technology-list { margin-top: 4px; }
          .technology-item { grid-template-columns: 22px 1fr; gap: 10px; }
          .network-orbit { min-height: 0; padding: 18px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
          .network-orbit::before, .network-orbit::after { display: none; }
          .orbit-core { position: static; transform: none; width: auto; height: auto; min-height: 74px; grid-column: 1 / -1; border-radius: 18px; padding: 14px; }
          .orbit-label { position: static; padding: 10px 8px; border: 1px solid rgba(255,255,255,.14); border-radius: 12px; text-align: center; font-size: 12px; }
          .orbit-label--1, .orbit-label--2, .orbit-label--3, .orbit-label--4 { inset: auto; }
          .software-capability { grid-template-columns: 40px 1fr; gap: 13px; }
          .software-links { display: grid; gap: 0; }
          .mockup-topbar { grid-template-columns: 55px 1fr; padding: 0 14px; }
          .status-chip { grid-column: 2; justify-self: start; margin-top: -10px; margin-bottom: 10px; }
          .mockup-grid { grid-template-columns: 46px minmax(0,1fr); min-height: 0; }
          .mockup-nav { padding: 14px 8px; }
          .mockup-workbench { padding: 22px 14px; min-width: 0; }
          .mockup-title, .translation-card p, .preview-alert, .qa-row span { overflow-wrap: anywhere; }
          .qa-row { grid-template-columns: 22px minmax(0,1fr); }
          .qa-pass { grid-column: 2; justify-self: start; }
          .workbench-heading { display: grid; }
          .language-tag { justify-self: start; }
          .translation-meta { display: grid; gap: 4px; }
          .mockup-preview { padding: 22px 14px; }
          .cx-panel { padding: 16px 22px; }
          .technical-columns { margin-top: 38px; }
          .technical-links { display: grid; gap: 0; }
          .split-feature-copy { padding: 34px 24px; }
          .split-feature-list { padding: 24px; }
          .training-visual { min-height: 0; padding: 18px; }
          .training-screen-body { grid-template-columns: 1fr; }
          .training-language { grid-template-columns: repeat(3,1fr); padding: 16px; }
          .training-language span { text-align: center; padding: 9px 5px; }
          .asset-list { grid-template-columns: 1fr; }
          .asset-item, .asset-item:nth-child(even) { border-left: 0; padding: 16px 0; border-bottom: 1px solid var(--border); }
          .asset-item:nth-last-child(-n+2) { border-bottom: 1px solid var(--border); }
          .asset-item:last-child { border-bottom: 0; }
          .asset-footer { align-items: center; flex-direction: row; }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-item { min-height: 0; padding: 26px 24px; }
          .security-matrix, .different-grid { grid-template-columns: 1fr; }
          .security-item, .different-item { min-height: 0; padding: 26px 24px; }
          .process-step { grid-template-columns: 48px 1fr; gap: 15px; padding: 26px 0; }
          .process-step p { grid-column: 1 / -1; padding-left: 0; }
          .related-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 0; }
          .related-row .editorial-link { grid-column: 1; white-space: normal; max-width: 100%; }
          .related-row .editorial-link span { min-width: 0; overflow-wrap: anywhere; }
          .faq-button { min-height: 70px; grid-template-columns: 1fr 34px; gap: 14px; padding: 20px 0; }
          .faq-question { font-size: 17px; }
          .faq-answer { padding: 0 0 24px; }
          .final-cta { padding: 64px 0; }
          .cta-panel { padding: 38px 24px; }
          .cta-panel .btn { width: 100%; }
        }
        @media (max-width: 350px) {
          h1 { letter-spacing: -.04em; }
          .cta-panel { padding-left: 16px; padding-right: 16px; }
          .cta-copy h2 { font-size: 25.5px; }
          .training-language { grid-template-columns: 1fr; }
        }
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { scroll-behavior: auto !important; transition: none !important; animation: none !important; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Telecom Industry Expertise</div>
            <h1>Telecommunications Translation Services for Global Connectivity</h1>
            <p className="body-large">Translate technical documentation, telecom software, network platforms, training, regulatory materials, and subscriber communications with specialized linguists and secure, AI-powered workflows.</p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Get a Translation Quote</span><ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/"><span>Talk to an Expert</span><ArrowIcon /></a>
            </div>
            <div className="hero-points" aria-label="Key telecommunications translation capabilities">
              <span className="hero-point">5G, 5G-Advanced, emerging 6G, and equipment content</span>
              <span className="hero-point">OSS/BSS and continuous software localization</span>
              <span className="hero-point">Subscriber, regulatory, and patent content</span>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="trust-strip" aria-label="Stepes translation credentials">
        <div className="shell trust-grid">
          <div className="trust-item"><strong>ISO 17100</strong><span>Translation processes</span></div>
          <div className="trust-item"><strong>ISO 9001</strong><span>Quality management</span></div>
          <div className="trust-item"><strong>100+ Languages</strong><span>Global market coverage</span></div>
          <div className="trust-item"><strong>AI + Human</strong><span>Flexible quality workflows</span></div>
        </div>
      </section>

      <section className="section" id="telecommunications-overview">
        <div className="shell overview-grid">
          <div>
            <h2>Telecommunications Translation Built for a Connected World</h2>
          </div>
          <div className="overview-copy">
            <p className="body-large">Telecommunications companies connect people, devices, businesses, and digital services across complex global networks. Delivering those connections depends on specialized engineering, software, infrastructure, regulatory content, skilled technical teams, and clear communication in every market.</p>
            <p>Stepes supports the full telecommunications content lifecycle—from network engineering and product development to deployment, service activation, customer support, and continuous software releases. We translate technical documentation, localize telecom applications and platforms, adapt training and marketing content, and help operators communicate clearly with subscribers in their preferred languages.</p>
            <p>Our telecommunications linguists work with translation memory, client-approved terminology, automated quality controls, and AI-powered production tools to deliver accurate, consistent content across teams, platforms, and markets.</p>
            <EditorialLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</EditorialLink>
            <div className="overview-statements">
              <div className="overview-statement"><strong>Specialized terminology</strong><span>Network, radio, software, equipment, regulatory, and customer language must remain precise and aligned.</span></div>
              <div className="overview-statement"><strong>Continuous change</strong><span>Product releases, service updates, software revisions, and standards development create recurring multilingual demand.</span></div>
              <div className="overview-statement"><strong>Multiple audiences</strong><span>Engineering teams, regulators, technicians, partners, and subscribers each require content designed for their needs.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="telecommunications-sectors">
        <div className="shell">
          <SectionHeader
            title="Telecommunications Expertise Across the Industry"
            intro="Stepes supports organizations throughout the communications ecosystem, from infrastructure manufacturers and network operators to software platforms, broadband providers, satellite companies, and connected-device businesses."
            align="center"
          />
          <div className="audience-grid">
            {audiences.map((item) => (
              <article className="audience-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="telecom-content">
        <div className="shell">
          <SectionHeader
            title="Telecommunications Content We Translate and Localize"
            intro="Support multilingual content throughout product development, network deployment, service delivery, workforce training, and customer engagement with one coordinated language partner."
          />
          <div className="content-rows">
            {[0, 2, 4].map((index) => (
              <div className="content-row" key={contentGroups[index].title}>
                {[contentGroups[index], contentGroups[index + 1]].map((item) => (
                  <article className="content-cell" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark" id="network-technologies">
        <div className="shell technology-layout">
          <div className="technology-intro">
            <SectionHeader
              title="Translation Expertise Across Modern Communications Networks"
              intro="Telecommunications infrastructure is becoming more software-defined, cloud-native, programmable, and interconnected while continuing to support established networks, physical systems, and customer devices."
              dark
            />
            <div className="network-orbit" aria-hidden="true">
              <div className="orbit-core">MULTILINGUAL<br/>NETWORK CONTENT</div>
              <span className="orbit-label orbit-label--1">5G-A + 6G R&amp;D</span>
              <span className="orbit-label orbit-label--2">TELCO CLOUD</span>
              <span className="orbit-label orbit-label--3">FIBER + NTN</span>
              <span className="orbit-label orbit-label--4">APIs + IoT</span>
            </div>
          </div>
          <div>
            <div className="technology-list">
              {technologies.map((item) => (
                <article className="technology-item" key={item.title}>
                  <span className="technology-marker" aria-hidden="true" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.href ? <EditorialLink href={item.href}>{item.link}</EditorialLink> : null}
                  </div>
                </article>
              ))}
            </div>
            <div className="emerging-note">
              <strong>From deployed 5G to IMT-2030</strong>
              <p>Stepes supports current 5G deployments, 5G-Advanced releases, and the emerging 6G standards lifecycle while keeping terminology aligned across standards contributions, patents, technical papers, test documentation, software releases, and customer-facing materials.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="telecom-software-localization">
        <div className="shell software-grid">
          <div className="software-copy">
            <h2>Localize Telecom Software, OSS, and BSS Platforms</h2>
            <p className="section-intro">Telecommunications networks depend on software that connects infrastructure, operations, employees, partners, services, and subscribers. Effective localization must preserve technical meaning while supporting interface context, protected code, terminology, display constraints, and frequent releases.</p>
            <div className="software-capabilities">
              {softwareCapabilities.map((item) => (
                <div className="software-capability" key={item.title}>
                  <div className="mini-icon"><Icon name={item.icon} size={21} /></div>
                  <div><strong>{item.title}</strong><p>{item.text}</p></div>
                </div>
              ))}
            </div>
            <div className="software-links">
              <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/translation-api/">Translation API</EditorialLink>
            </div>
          </div>
          <SoftwareMockup />
        </div>
      </section>

      <section className="section section--blush" id="subscriber-experience">
        <div className="shell cx-grid">
          <div className="cx-copy">
            <div className="eyebrow">Multilingual Customer Experience</div>
            <h2>Create Clear Multilingual Subscriber Experiences</h2>
            <p className="section-intro">Subscribers interact with telecom providers through websites, stores, mobile apps, account portals, devices, billing systems, chat tools, contact centers, and automated notifications. Consistent language helps customers activate services, manage accounts, understand charges, resolve problems, and respond to service changes.</p>
            <p>Stepes coordinates terminology across channels so product names, service features, legal disclosures, instructions, and customer-care language remain consistent from initial purchase through ongoing support.</p>
            <EditorialLink href="https://www.stepes.com/contact-us/">Discuss Your Telecom Localization Needs</EditorialLink>
          </div>
          <div className="cx-panel">
            <ul className="check-list">
              {customerExperienceItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="technical-telecom-translation">
        <div className="shell">
          <div className="technical-lead">
            <h2>Technical Translation for Telecommunications Equipment and Infrastructure</h2>
            <p>Telecom equipment translation requires more than fluency in two languages. Translators must understand network architecture, electrical and electronic systems, radio-frequency concepts, equipment configuration, interfaces, safety requirements, and the relationship between hardware and software.</p>
          </div>
          <div className="technical-columns">
            {technicalContent.map((group) => (
              <article className="technical-column" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="technical-links">
            <EditorialLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/electronics-translation-services/">Electronics Translation Services</EditorialLink>
            <EditorialLink href="https://www.stepes.com/semiconductor-translation-services/">Semiconductor Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="telecom-regulatory-patent">
        <div className="shell">
          <div className="split-feature">
            <div className="split-feature-copy">
              <div className="eyebrow">Controlled Review Workflows</div>
              <h2>Regulatory, Legal, and Patent Translation for Telecom</h2>
              <p className="section-intro">Telecommunications companies communicate with regulators, customers, suppliers, technology partners, standards organizations, and intellectual-property authorities across multiple jurisdictions.</p>
              <p>Critical legal, regulatory, and patent content can follow enhanced professional translation and review workflows based on intended use, technical complexity, confidentiality, jurisdiction, and business risk.</p>
              <EditorialLink href="https://www.stepes.com/patent-translation-services/">Patent Translation Services</EditorialLink>
            </div>
            <div className="split-feature-list">
              <ul>{legalItems.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="telecom-training-localization">
        <div className="shell training-grid">
          <div className="training-visual" role="img" aria-label="Multilingual telecom field technician training preview with localized course content and language selection">
            <div className="training-screen">
              <div className="training-screen-top"><span>Field Technician Certification</span><span>Module 6 of 9</span></div>
              <div className="training-screen-body">
                <div className="training-slide">
                  <span className="slide-tag">NETWORK INSTALLATION</span>
                  <h4>Validate fiber signal levels before activation</h4>
                  <p>Localized narration, captions, graphics, assessments, and learning-system content.</p>
                  <div className="progress"><span /></div>
                </div>
                <div className="training-language"><span>English</span><span className="active">Español</span><span>Deutsch</span></div>
              </div>
            </div>
          </div>
          <div className="training-copy">
            <div className="eyebrow">Global Workforce Enablement</div>
            <h2>Train Global Telecom Teams in Every Language</h2>
            <p className="section-intro">Network performance and customer service depend on people who can install equipment, operate platforms, maintain infrastructure, respond to incidents, sell services, and support subscribers effectively.</p>
            <ul className="check-list">{trainingItems.map((item) => <li key={item}>{item}</li>)}</ul>
            <EditorialLink href="https://www.stepes.com/elearning-training-translation-services/">eLearning Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section section--soft" id="telecom-terminology-quality">
        <div className="shell terminology-grid">
          <div className="terminology-copy">
            <h2>Consistent Telecom Terminology Across Products and Markets</h2>
            <p className="section-intro">Telecommunications content contains extensive networks of acronyms, product names, commands, interface labels, standards references, and engineering terms. Inconsistent language can confuse users, increase support demand, and make related documentation difficult to maintain.</p>
            <p>Stepes develops and manages organization-specific terminology for documents, software, training, websites, legal materials, marketing, and subscriber communications. Automated QA and professional review help identify terminology conflicts, omissions, numerical issues, formatting differences, and other potential errors.</p>
            <p>Approved reviewer feedback can be incorporated into translation memories and glossaries so future releases benefit from the work completed on earlier projects.</p>
            <EditorialLink href="https://www.stepes.com/translation-memory-management/">Translation Memory</EditorialLink>
          </div>
          <div className="language-assets">
            <div className="asset-header"><strong>Telecom Language Assets</strong><span>Built for your program</span></div>
            <div className="asset-list">
              {terminologyAssets.map((item) => <div className="asset-item" key={item}>{item}</div>)}
            </div>
            <div className="asset-footer"><span className="asset-check" aria-hidden="true">✓</span><span>Updated with approved reviewer feedback</span></div>
          </div>
        </div>
      </section>

      <section className="section section--dark" id="ai-telecom-translation">
        <div className="shell">
          <div className="ai-intro">
            <div>
              <div className="eyebrow eyebrow--dark">AI + Human Workflows</div>
              <h2>AI-Powered Translation Built Around Content Risk</h2>
            </div>
            <div className="ai-summary">
              <p className="section-intro">A patent application, network safety procedure, software release note, and high-volume support article should not automatically follow the same translation workflow. Stepes combines AI, translation memory, terminology management, automation, professional linguists, and human review according to the purpose and risk of each content stream.</p>
            </div>
          </div>
          <div className="ai-grid">
            {aiWorkflows.map((item) => (
              <article className="ai-item" key={item.title}>
                <div className="ai-rule" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="ai-link"><EditorialLink href="https://www.stepes.com/ai-translation-services/">AI Translation Services</EditorialLink></div>
        </div>
      </section>

      <section className="section" id="secure-telecom-workflows">
        <div className="shell security-grid">
          <div className="security-copy">
            <div className="eyebrow">Enterprise Operations</div>
            <h2>Secure Translation Workflows for Global Telecom Operations</h2>
            <p className="section-intro">Telecommunications content may include confidential product designs, unreleased software, network information, commercial terms, subscriber communications, regulatory materials, and proprietary intellectual property.</p>
            <p>Stepes centralizes files, project instructions, terminology, reviewer feedback, approvals, and multilingual deliverables. Specific security, access, data-handling, and procurement requirements can be reviewed during program setup.</p>
            <div className="security-links">
              <EditorialLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</EditorialLink>
              <EditorialLink href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting and Analytics</EditorialLink>
            </div>
          </div>
          <div className="security-matrix">
            {securityItems.map((item) => (
              <article className="security-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="telecom-localization-process">
        <div className="shell">
          <SectionHeader
            title="A Smarter Telecommunications Localization Process"
            intro="Stepes supports individual translation projects as well as ongoing multilingual programs spanning products, teams, platforms, and global markets."
          />
          <div className="process-list">
            {processSteps.map((step) => (
              <article className="process-step" key={step.number}>
                <div className="process-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why-stepes-telecom">
        <div className="shell">
          <SectionHeader
            title="Why Telecommunications Companies Choose Stepes"
            intro="Bring specialized language expertise, software localization, enterprise workflow control, and scalable multilingual delivery together in one coordinated program."
            align="center"
          />
          <div className="different-grid">
            {differentiators.map((item) => (
              <article className="different-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft" id="related-telecommunications-solutions">
        <div className="shell">
          <SectionHeader
            title="Explore Related Telecommunications Solutions"
            intro="Connect this industry-wide service with specialized Stepes solutions for network technologies, technical content, software, connected devices, and intellectual property."
          />
          <div className="related-list">
            {relatedSolutions.map((item) => (
              <article className="related-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <EditorialLink href={item.href}>{item.link}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="telecommunications-translation-faqs">
        <div className="shell">
          <SectionHeader
            title="Telecommunications Translation FAQs"
            intro="Find answers to common questions about telecom documentation, software localization, terminology, testing, language coverage, and enterprise workflows."
          />
          <div className="faq-panel">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary className="faq-button">
                  <span className="faq-question">{faq.question}</span>
                  <span className="faq-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                  {faq.href ? <EditorialLink href={faq.href}>{faq.link}</EditorialLink> : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-panel">
            <div className="cta-copy">
              <h2>Build Better Multilingual Telecommunications Experiences</h2>
              <p>Bring your network documentation, telecom software, equipment content, training, regulatory materials, and subscriber communications to global audiences with specialized language expertise and scalable translation technology.</p>
            </div>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Get a Translation Quote</span><ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/"><span>Talk to an Expert</span><ArrowIcon /></a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
