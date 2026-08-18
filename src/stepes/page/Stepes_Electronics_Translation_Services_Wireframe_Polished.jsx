import React from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F7E5ED",
  eyebrowDark: "#F2A7C6",
  ink: "#121826",
  slate: "#4A5568",
  muted: "#667085",
  line: "#DCE2EA",
  softLine: "#E8ECF1",
  soft: "#F7F9FB",
  white: "#FFFFFF",
  dark: "#161922",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  semiconductor: "https://www.stepes.com/semiconductor-translation-services/",
  consumer: "https://www.stepes.com/consumer-electronics-translation-services/",
  components: "https://www.stepes.com/electronic-components-translation-services/",
  embedded: "https://www.stepes.com/embedded-software-localization/",
  iot: "https://www.stepes.com/iot-translation-services/",
  telecom: "https://www.stepes.com/telecommunications-translation-services/",
  sixG: "https://www.stepes.com/6g-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  electronicsManufacturing: "https://www.stepes.com/electronics-manufacturing-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  appLocalization: "https://www.stepes.com/app-localization-services/",
  patent: "https://www.stepes.com/patent-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  ai: "https://www.stepes.com/ai-machine-learning-translation-services/",
  tm: "https://www.stepes.com/translation-memory/",
  portal: "https://www.stepes.com/translation-management-portal/",
  reporting: "https://www.stepes.com/translation-reporting-analytics/",
  languages: "https://www.stepes.com/translation-languages/",
};

const sectorItems = [
  {
    icon: "device",
    title: "Consumer Electronics",
    copy: "Create consistent multilingual experiences across devices, packaging, interfaces, product websites, retail content, training, and support.",
    href: links.consumer,
    link: "Consumer Electronics Translation Services",
  },
  {
    icon: "chip",
    title: "Semiconductors and Microelectronics",
    copy: "Translate datasheets, application notes, design guides, product specifications, manufacturing content, and technical sales materials.",
    href: links.semiconductor,
    link: "Semiconductor Translation Services",
  },
  {
    icon: "circuit",
    title: "Electronic Components and PCBs",
    copy: "Support component suppliers and PCB manufacturers with specifications, bills of materials, assembly content, testing, and engineering updates.",
    href: links.components,
    link: "Electronic Components Translation Services",
  },
  {
    icon: "code",
    title: "Embedded Systems and Firmware",
    copy: "Localize device menus, touchscreen interfaces, control panels, alerts, setup flows, voice prompts, and recurring firmware releases.",
    href: links.embedded,
    link: "Embedded Software Localization",
  },
  {
    icon: "cloud",
    title: "IoT and Connected Devices",
    copy: "Keep terminology aligned across connected hardware, companion apps, cloud dashboards, setup instructions, notifications, and support.",
    href: links.iot,
    link: "IoT Translation Services",
  },
  {
    icon: "network",
    title: "Communications and Network Hardware",
    copy: "Translate content for routers, switches, wireless equipment, telecom devices, network software, 5G-Advanced systems, and emerging 6G/IMT-2030 technologies.",
    href: links.telecom,
    link: "Telecommunications Translation Services",
  },
  {
    icon: "gauge",
    title: "Test, Measurement, and Control Equipment",
    copy: "Support international users of test systems, measurement instruments, monitoring devices, calibration equipment, and control interfaces.",
  },
  {
    icon: "factory",
    title: "Electronics Manufacturing Services",
    copy: "Enable multilingual OEM, ODM, EMS, contract manufacturing, assembly, quality, supplier, testing, and factory-training workflows.",
    href: links.electronicsManufacturing,
    link: "Electronics Manufacturing Translation Services",
  },
  {
    icon: "home",
    title: "Smart Home and Wearable Technology",
    copy: "Localize smart appliances, home automation products, security devices, wearables, connected accessories, and companion experiences.",
  },
  {
    icon: "camera",
    title: "Audio, Video, and Imaging Equipment",
    copy: "Translate professional and consumer content for audio systems, displays, imaging devices, broadcast equipment, and multimedia products.",
  },
];

const deliverableGroups = [
  {
    title: "Technical Product Documentation",
    items: [
      "User and operation manuals",
      "Installation and service guides",
      "Maintenance and troubleshooting content",
      "Quick-start guides and product specifications",
      "Datasheets, application notes, and technical bulletins",
      "Release notes and product change communications",
    ],
  },
  {
    title: "Embedded Software and Device Interfaces",
    items: [
      "Firmware strings and device menus",
      "Touchscreen and control-panel interfaces",
      "Setup, onboarding, and configuration flows",
      "Status, error, warning, and safety messages",
      "Voice prompts and companion applications",
      "Connected-device dashboards and help content",
    ],
  },
  {
    title: "Engineering and Manufacturing Content",
    items: [
      "Engineering specifications and bills of materials",
      "Assembly instructions and standard operating procedures",
      "Test, inspection, and quality documentation",
      "Supplier manuals and engineering change notices",
      "Repair, rework, and maintenance procedures",
      "Factory training and environmental health and safety content",
    ],
  },
  {
    title: "Commercial and Customer Content",
    items: [
      "Product websites and e-commerce listings",
      "Packaging, labels, and printed inserts",
      "Product catalogs and sales presentations",
      "Launch campaigns and demonstration videos",
      "Training courses, knowledge bases, and support articles",
      "Warranty, returns, and customer communications",
    ],
  },
  {
    title: "Intellectual Property and Corporate Content",
    items: [
      "Electronics patents and patent-supporting documentation",
      "Research, development, and technical disclosures",
      "Licensing and technology-transfer agreements",
      "Supplier, distribution, and manufacturing agreements",
      "Corporate policies and investor communications",
      "Product presentations and workforce technical training",
    ],
  },
];

const processSteps = [
  {
    title: "Content and Requirement Review",
    copy: "We confirm source content, file formats, target languages, intended audiences, technical complexity, review requirements, delivery specifications, and security needs.",
  },
  {
    title: "Terminology and Workflow Setup",
    copy: "We prepare customer glossaries, product references, translation memory, style guidance, file instructions, quality checks, and approval paths.",
  },
  {
    title: "Translation and Localization",
    copy: "The right combination of AI-assisted translation, professional linguists, technical reviewers, localization engineers, and publishing specialists is applied to each content stream.",
  },
  {
    title: "Quality and In-Context Review",
    copy: "Quality activities can include terminology validation, numerical checks, interface review, screenshot or build review, automated QA, file validation, and multilingual layout inspection.",
  },
  {
    title: "Delivery and Continuous Updates",
    copy: "Stepes returns production-ready deliverables and maintains approved language assets for future releases, revisions, new models, and related product content.",
  },
];

const relatedSolutions = [
  {
    title: "Semiconductor Translation Services",
    copy: "Technical translation for semiconductor products, integrated circuits, manufacturing processes, datasheets, software tools, and global sales content.",
    href: links.semiconductor,
  },
  {
    title: "IoT Translation Services",
    copy: "Localization for connected devices, embedded interfaces, companion applications, dashboards, setup content, documentation, and support.",
    href: links.iot,
  },
  {
    title: "Telecommunications Translation Services",
    copy: "Translation for communications hardware, network software, wireless technologies, installation, configuration, training, and customer content.",
    href: links.telecom,
  },
  {
    title: "5G-Advanced and 6G Translation Services",
    copy: "Translation for 5G-Advanced evolution and emerging IMT-2030/6G research, standards, network architecture, chips, devices, testing, and technical documentation.",
    href: links.sixG,
  },
  {
    title: "Manufacturing Translation Services",
    copy: "Translation for engineering, production, quality, safety, supplier, maintenance, workforce training, and product documentation.",
    href: links.manufacturing,
  },
  {
    title: "Software Localization Services",
    copy: "Localization engineering, interface translation, review, and testing for software applications, embedded resources, and recurring releases.",
    href: links.software,
  },
  {
    title: "App Localization Services",
    copy: "End-to-end localization for mobile applications, including resource translation, engineering, testing, and app-store content.",
    href: links.appLocalization,
  },
  {
    title: "Patent Translation Services",
    copy: "Professional patent translation for electronics, software, semiconductor, engineering, and other advanced technologies.",
    href: links.patent,
  },
  {
    title: "Technical Translation Services",
    copy: "Specialized translation for technical manuals, specifications, engineering content, safety information, and product support documentation.",
    href: links.technical,
  },
];

const faqs = [
  {
    q: "What are electronics translation services?",
    a: "Electronics translation services cover the translation and localization of technical, software, manufacturing, safety, commercial, and support content used to develop, manufacture, launch, operate, maintain, and update electronic products. This can include manuals, datasheets, firmware interfaces, apps, engineering specifications, work instructions, labels, packaging, training, websites, and customer support.",
  },
  {
    q: "What types of electronic products does Stepes support?",
    a: "Stepes supports consumer electronics, semiconductors, electronic components, embedded systems, IoT devices, communications hardware, test and measurement equipment, smart home technologies, wearables, audio and video products, industrial electronics, and electronics manufacturing operations.",
  },
  {
    q: "Do you translate electronics user manuals and technical documentation?",
    a: "Yes. Stepes translates user manuals, installation guides, service manuals, maintenance instructions, troubleshooting guides, quick-start guides, product specifications, datasheets, application notes, technical bulletins, and release notes. Services can also include terminology management, editing, multilingual desktop publishing, graphics localization, file validation, and final-format QA.",
  },
  {
    q: "Do you provide consumer electronics translation services?",
    a: "Yes. Stepes supports consumer electronic products with translation and localization for device interfaces, manuals, packaging, labels, companion apps, product websites, e-commerce listings, training videos, warranties, and customer support. The goal is to create a consistent customer experience across every interaction with the product.",
  },
  {
    q: "Can Stepes localize embedded software and firmware?",
    a: "Yes. Stepes localizes firmware strings, device menus, touchscreens, control panels, setup flows, notifications, error messages, safety warnings, status content, voice prompts, and connected-device interfaces. We can process structured resource files, protect technical elements, account for display constraints, and support screenshot-based or in-context review.",
  },
  {
    q: "Can you translate semiconductor and electronic component documentation?",
    a: "Yes. Stepes translates semiconductor datasheets, specifications, application notes, design guides, reference designs, manufacturing documentation, test procedures, failure analysis reports, quality content, and product change notifications. We also support component specifications, PCB documentation, bills of materials, assembly instructions, supplier content, and technical catalogs.",
  },
  {
    q: "Can Stepes support electronics manufacturing documentation?",
    a: "Yes. Stepes translates assembly instructions, work instructions, standard operating procedures, test procedures, quality documentation, supplier manuals, engineering changes, repair procedures, equipment instructions, safety materials, and workforce training for manufacturers, OEMs, ODMs, EMS providers, suppliers, and contract manufacturing operations.",
  },
  {
    q: "How does Stepes maintain consistent electronics terminology?",
    a: "Stepes uses customer-specific glossaries, terminology databases, translation memory, style guides, product references, qualified technical linguists, automated QA, and review workflows. Approved terminology can be shared across engineering, firmware, documentation, packaging, marketing, training, and customer support.",
  },
  {
    q: "Does Stepes use AI for electronics translation?",
    a: "Yes. Stepes combines AI-powered translation, translation memory, terminology management, automation, professional linguists, and human review. The exact workflow depends on content type, technical complexity, intended audience, business risk, and required quality level. Safety-critical and highly technical content generally receives stronger professional review than high-volume informational content.",
  },
  {
    q: "Can Stepes work with software resource files and structured content?",
    a: "Yes. Stepes supports common formats such as XML, XLIFF, JSON, YAML, PO, RESX, Apple Strings and String Catalogs, Android XML, ARB, CSV, and spreadsheets. Custom formats can be assessed to identify translatable text, protected elements, context requirements, and the required delivery structure.",
  },
  {
    q: "Do you provide in-context localization testing?",
    a: "Depending on project requirements and the available environment, Stepes can support screenshot review, prototype review, build review, interface linguistic QA, and multilingual testing to identify truncation, incorrect rendering, contextual mistranslations, unsupported characters, layout issues, and terminology inconsistencies.",
  },
  {
    q: "Can you translate product labels, packaging, and safety information?",
    a: "Yes. Stepes translates product labels, packaging, printed inserts, warnings, safety instructions, specifications, warranty information, recycling content, and related product information. Customers remain responsible for determining the legal, regulatory, labeling, and market-access requirements applicable to each product and destination market.",
  },
  {
    q: "Can Stepes support recurring firmware and product updates?",
    a: "Yes. Stepes can establish continuous localization workflows for firmware releases, new features, revised manuals, product bulletins, updated packaging, support content, and regional configurations. Translation memory helps reuse approved content and identify new or changed text requiring translation.",
  },
  {
    q: "How does Stepes protect confidential electronics content?",
    a: "Stepes supports controlled workflows for confidential engineering, manufacturing, software, product-roadmap, and prelaunch content. Access, confidentiality, hosting, security, and supplier requirements can be reviewed during project setup or enterprise onboarding so the workflow matches your organization’s policies.",
  },
  {
    q: "How long does an electronics translation project take?",
    a: "Turnaround depends on word volume, number of languages, technical complexity, file formats, localization engineering, review requirements, testing scope, and release schedule. Stepes can coordinate multiple languages in parallel and provide phased delivery when priority languages or content must be completed first.",
  },
  {
    q: "How much do electronics translation services cost?",
    a: "Pricing depends on source and target languages, word and string volume, content type, technical complexity, translation-memory matches, repeated content, AI and human-review requirements, file preparation, localization engineering, desktop publishing, testing, multimedia production, and turnaround. Upload your files for a customized quote.",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    device: (
      <>
        <rect x="5" y="3" width="14" height="18" rx="2" {...common} />
        <path d="M9 6h6M10 17h4" {...common} />
      </>
    ),
    chip: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" {...common} />
        <rect x="9" y="9" width="6" height="6" rx="1" {...common} />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" {...common} />
      </>
    ),
    circuit: (
      <>
        <path d="M4 4h7v6h9M4 20h7v-6h9" {...common} />
        <circle cx="4" cy="4" r="1.5" {...common} />
        <circle cx="4" cy="20" r="1.5" {...common} />
        <circle cx="20" cy="10" r="1.5" {...common} />
        <circle cx="20" cy="14" r="1.5" {...common} />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" {...common} />
      </>
    ),
    cloud: (
      <>
        <path d="M7 18h10a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.2 8.7 4.5 4.5 0 0 0 7 18Z" {...common} />
        <path d="M9 14h6M12 11v6" {...common} />
      </>
    ),
    network: (
      <>
        <rect x="3" y="4" width="7" height="5" rx="1" {...common} />
        <rect x="14" y="4" width="7" height="5" rx="1" {...common} />
        <rect x="8.5" y="15" width="7" height="5" rx="1" {...common} />
        <path d="M6.5 9v2.5H12M17.5 9v2.5H12M12 11.5V15" {...common} />
      </>
    ),
    gauge: (
      <>
        <path d="M4 18a8 8 0 1 1 16 0" {...common} />
        <path d="m12 13 4-4" {...common} />
        <path d="M8 18h8" {...common} />
      </>
    ),
    factory: (
      <>
        <path d="M3 21V9l6 3V8l6 3V4h6v17Z" {...common} />
        <path d="M7 16h2M12 16h2M17 16h2" {...common} />
      </>
    ),
    home: (
      <>
        <path d="m3 11 9-8 9 8" {...common} />
        <path d="M5 10v11h14V10M9 21v-7h6v7" {...common} />
      </>
    ),
    camera: (
      <>
        <path d="M4 7h4l2-3h4l2 3h4v13H4Z" {...common} />
        <circle cx="12" cy="13" r="4" {...common} />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6Z" {...common} />
        <path d="M14 3v5h5M9 12h6M9 16h6" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 5 6v5c0 4.7 2.7 8 7 10 4.3-2 7-5.3 7-10V6Z" {...common} />
        <path d="m9 12 2 2 4-5" {...common} />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" {...common} />
        <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21M12 3C9.5 5.6 8.2 8.6 8.2 12S9.5 18.4 12 21" {...common} />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5Z" {...common} />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" {...common} />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5M4 17v-5h5" {...common} />
        <path d="M18.1 9A7 7 0 0 0 6.5 6.5L4 9M5.9 15A7 7 0 0 0 17.5 17.5L20 15" {...common} />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <path d="M3 20v-2a6 6 0 0 1 12 0v2" {...common} />
        <path d="M16 5a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 4.6V20" {...common} />
      </>
    ),
    folder: (
      <>
        <path d="M3 6h7l2 2h9v11H3Z" {...common} />
        <path d="M3 10h18" {...common} />
      </>
    ),
    qa: (
      <>
        <circle cx="11" cy="11" r="7" {...common} />
        <path d="m16 16 5 5M8 11l2 2 4-5" {...common} />
      </>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      {icons[name] || icons.document}
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrowDark" : "eyebrow"}>{children}</div>;
}

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorialLink ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="button buttonPrimary" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SecondaryButton({ href, children, dark = false }) {
  return (
    <a className={`button buttonSecondary ${dark ? "buttonSecondaryDark" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="heroArt" aria-hidden="true">
      <svg viewBox="0 0 640 520" role="img">
        <defs>
          <linearGradient id="heroBlush" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDF2F7" />
            <stop offset="100%" stopColor="#FFFFFF" />
          </linearGradient>
          <filter id="heroShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="20" floodColor="#121826" floodOpacity="0.09" />
          </filter>
        </defs>
        <rect x="74" y="34" width="492" height="420" rx="34" fill="url(#heroBlush)" stroke="#E8D5DF" />
        <path d="M86 352H33v-92h44" fill="none" stroke="#677386" strokeWidth="2" />
        <path d="M554 156h54v-70h-92" fill="none" stroke="#677386" strokeWidth="2" />
        <path d="M567 378h42v-74h-62" fill="none" stroke="#677386" strokeWidth="2" />
        <circle cx="33" cy="260" r="5" fill="#C11D63" />
        <circle cx="608" cy="86" r="5" fill="#C11D63" />
        <circle cx="609" cy="304" r="5" fill="#C11D63" />

        <g filter="url(#heroShadow)">
          <rect x="174" y="113" width="286" height="238" rx="22" fill="#FFFFFF" stroke="#C8D0DB" strokeWidth="2" />
          <rect x="198" y="137" width="238" height="144" rx="12" fill="#F7F9FB" stroke="#D6DCE5" />
          <path d="M218 167h82" stroke="#758195" strokeWidth="6" strokeLinecap="round" />
          <path d="M218 190h160" stroke="#B0B8C5" strokeWidth="5" strokeLinecap="round" />
          <path d="M218 211h122" stroke="#B0B8C5" strokeWidth="5" strokeLinecap="round" />
          <path d="M218 232h147" stroke="#B0B8C5" strokeWidth="5" strokeLinecap="round" />
          <rect x="357" y="155" width="59" height="28" rx="14" fill="#C11D63" />
          <text x="386.5" y="174" textAnchor="middle" fontSize="12" fontWeight="600" fill="#FFFFFF">ES</text>
          <circle cx="234" cy="319" r="10" fill="#C11D63" />
          <path d="M264 319h76" stroke="#758195" strokeWidth="6" strokeLinecap="round" />
          <path d="M354 319h54" stroke="#D6DCE5" strokeWidth="6" strokeLinecap="round" />
        </g>

        <g transform="translate(103 99) rotate(-8)">
          <rect width="124" height="166" rx="14" fill="#FFFFFF" stroke="#C8D0DB" strokeWidth="2" />
          <path d="M25 34h74M25 56h56M25 78h69" stroke="#8A94A5" strokeWidth="5" strokeLinecap="round" />
          <rect x="25" y="107" width="74" height="35" rx="8" fill="#FDF2F7" stroke="#E5B9CC" />
          <path d="M43 123h38" stroke="#C11D63" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(420 286) rotate(7)">
          <rect width="132" height="106" rx="14" fill="#FFFFFF" stroke="#C8D0DB" strokeWidth="2" />
          <path d="M18 24h42M18 44h72M18 64h60" stroke="#8A94A5" strokeWidth="5" strokeLinecap="round" />
          <circle cx="103" cy="28" r="11" fill="#C11D63" />
          <path d="M96 28h14M103 21v14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g transform="translate(251 368)">
          <rect width="134" height="88" rx="18" fill="#1B202B" />
          <path d="M22 21h90M22 44h42M72 44h40M22 67h90" stroke="#9AA4B4" strokeWidth="3" strokeLinecap="round" />
          <circle cx="49" cy="44" r="5" fill="#F2A7C6" />
          <circle cx="95" cy="44" r="5" fill="#C11D63" />
        </g>

        <g stroke="#677386" strokeWidth="2" fill="#FFFFFF">
          <circle cx="111" cy="344" r="12" />
          <circle cx="510" cy="116" r="12" />
          <circle cx="520" cy="430" r="12" />
        </g>
        <path d="M106 344h10M111 339v10" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
        <path d="M505 116h10M510 111v10" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
        <path d="M515 430h10M520 425v10" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function FirmwareMockup() {
  const strings = [
    ["DEVICE_STATUS_READY", "Device ready", "Gerät bereit", "Approved"],
    ["PAIRING_IN_PROGRESS", "Pairing in progress…", "Kopplung läuft…", "In review"],
    ["BATTERY_WARNING", "Battery level is low", "Akkustand ist niedrig", "Approved"],
    ["UPDATE_AVAILABLE", "Firmware update available", "Firmware-Update verfügbar", "QA check"],
  ];
  return (
    <div className="firmwareMockup" aria-label="Illustrative embedded localization workflow">
      <div className="mockupTopbar">
        <div>
          <span className="mockupKicker">Device UI localization</span>
          <strong>Smart Controller · German</strong>
        </div>
        <span className="mockupStatus">Release 4.8</span>
      </div>
      <div className="mockupGrid">
        <div className="mockupStrings">
          <div className="mockupHeaderRow">
            <span>Resource key</span>
            <span>Localized string</span>
            <span>Status</span>
          </div>
          {strings.map(([key, source, target, status]) => (
            <div className="mockupRow" key={key}>
              <div>
                <code>{key}</code>
                <span>{source}</span>
              </div>
              <strong>{target}</strong>
              <span className={`statusPill ${status === "Approved" ? "statusApproved" : ""}`}>{status}</span>
            </div>
          ))}
        </div>
        <div className="devicePreview">
          <div className="deviceScreen">
            <div className="deviceHeader">
              <span>HOME CONTROL</span>
              <span>DE</span>
            </div>
            <div className="deviceSignal">
              <span className="signalDot" />
              <strong>Gerät bereit</strong>
              <small>Alle Systeme verbunden</small>
            </div>
            <div className="deviceActions">
              <span>Geräte</span>
              <span>Automationen</span>
            </div>
          </div>
          <div className="previewChecks">
            <span><CheckIcon /> No truncation</span>
            <span><CheckIcon /> Variables protected</span>
            <span><CheckIcon /> Terminology aligned</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ElectronicsTranslationServicesWireframe() {
  return (
    <main className="electronicsPage">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --magenta-deep: ${COLORS.magentaDeep};
          --blush: ${COLORS.blush};
          --blush-strong: ${COLORS.blushStrong};
          --eyebrow-dark: ${COLORS.eyebrowDark};
          --ink: ${COLORS.ink};
          --slate: ${COLORS.slate};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --soft-line: ${COLORS.softLine};
          --soft: ${COLORS.soft};
          --white: ${COLORS.white};
          --dark: ${COLORS.dark};
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .electronicsPage {
          width: 100%;
          overflow-x: hidden;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .electronicsPage a { color: inherit; text-decoration: none; }
        .electronicsPage button, .electronicsPage a { -webkit-tap-highlight-color: transparent; }
        .electronicsPage h1, .electronicsPage h2, .electronicsPage h3, .electronicsPage p { margin: 0; }
        .electronicsPage h1, .electronicsPage h2, .electronicsPage h3 { font-weight: 600; letter-spacing: -0.028em; }
        .electronicsPage h1 { font-size: 48px; line-height: 1.08; }
        .electronicsPage h2 { font-size: 36px; line-height: 1.16; }
        .electronicsPage h3 { font-size: 24px; line-height: 1.25; }
        .shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .section { padding: 96px 0; }
        .sectionDense { padding: 80px 0; }
        .sectionSoft { background: var(--soft); }
        .sectionBlush { background: linear-gradient(180deg, #fff 0%, var(--blush) 100%); }
        .sectionDark { background: var(--dark); color: var(--white); }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.35 !important;
          letter-spacing: .16em !important;
          text-transform: uppercase;
          font-weight: 600 !important;
          margin: 0 0 16px !important;
        }
        .eyebrowDark { color: var(--eyebrow-dark) !important; }
        .sectionIntro { max-width: 810px; margin-top: 24px; color: var(--slate); font-size: 18px; line-height: 1.7; }
        .sectionDark .sectionIntro { color: #C8CED8; }
        .sectionDark .editorialLink { color: var(--eyebrow-dark) !important; }
        .embeddedLinks { display: flex; gap: 24px; flex-wrap: wrap; margin-top: 30px; }
        .manufacturingLinks { display: grid; gap: 4px; margin-top: 22px; }
        .sectionHeadingRow { display: flex; align-items: end; justify-content: space-between; gap: 48px; margin-bottom: 48px; }
        .sectionHeadingRow .sectionIntro { max-width: 630px; margin-top: 0; }
        .button {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 14px 22px;
          font-size: 16px;
          line-height: 1.2;
          font-weight: 600;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }
        .button:hover { transform: translateY(-1px); }
        .button:focus-visible, .editorialLink:focus-visible, .faqButton:focus-visible {
          outline: 3px solid rgba(193,29,99,.24);
          outline-offset: 3px;
        }
        .buttonPrimary,
        .buttonPrimary:link,
        .buttonPrimary:visited,
        .buttonPrimary:hover,
        .buttonPrimary:active,
        .buttonPrimary:focus,
        .buttonPrimary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
          box-shadow: 0 12px 28px rgba(193,29,99,.22);
        }
        .buttonPrimary:hover { background: var(--magenta-dark); box-shadow: 0 14px 30px rgba(193,29,99,.27); }
        .buttonPrimary *, .buttonPrimary svg, .buttonPrimary path { color: #FFFFFF !important; stroke: #FFFFFF !important; fill: none; }
        .buttonSecondary {
          background: #FFFFFF;
          color: var(--ink);
          border: 1px solid var(--line);
        }
        .buttonSecondary:hover { border-color: #B8C0CC; box-shadow: 0 10px 24px rgba(18,24,38,.08); }
        .buttonSecondaryDark { background: rgba(255,255,255,.06); color: #FFFFFF; border-color: rgba(255,255,255,.25); }
        .buttonSecondaryDark:hover { background: rgba(255,255,255,.10); border-color: rgba(255,255,255,.38); }
        .editorialLink {
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          line-height: 1.35;
          font-weight: 600;
        }
        .editorialLink svg { transition: transform .2s ease; }
        .editorialLink:hover svg { transform: translateX(3px); }
        .editorialLink:hover span { text-decoration: underline; text-underline-offset: 4px; }

        .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFD 100%); border-bottom: 1px solid var(--soft-line); }
        .heroGrid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(440px, .98fr); align-items: center; gap: 70px; }
        .heroCopy { max-width: 660px; }
        .hero h1 { max-width: 650px; }
        .heroLead { margin-top: 26px; max-width: 650px; color: var(--slate); font-size: 18px; line-height: 1.72; }
        .heroActions { display: flex; gap: 14px; margin-top: 34px; flex-wrap: wrap; }
        .heroProof { display: flex; align-items: center; gap: 18px; margin-top: 34px; color: var(--muted); font-size: 16px; }
        .heroProofItem { display: inline-flex; align-items: center; gap: 8px; }
        .heroProofItem svg { color: var(--magenta); flex: 0 0 auto; }
        .heroProofDivider { width: 1px; height: 24px; background: var(--line); }
        .heroArt { min-width: 0; }
        .heroArt svg { display: block; width: 100%; height: auto; }

        .trustBand { border-bottom: 1px solid var(--line); }
        .trustBandInner { display: grid; grid-template-columns: repeat(5, 1fr); }
        .trustItem { padding: 27px 22px; display: flex; align-items: center; justify-content: center; min-height: 92px; text-align: center; color: var(--ink); font-size: 16px; font-weight: 600; line-height: 1.35; }
        .trustItem + .trustItem { border-left: 1px solid var(--line); }

        .lifecycleGrid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 84px; align-items: start; }
        .lifecycleSummary { position: sticky; top: 28px; }
        .lifecycleSummary .sectionIntro { max-width: 560px; }
        .lifecycleFlow { border-top: 1px solid var(--line); }
        .lifecycleRow { display: grid; grid-template-columns: 56px 210px minmax(0,1fr); gap: 22px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .lifecycleIcon { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); }
        .lifecycleRow h3 { font-size: 20px; letter-spacing: -0.018em; }
        .lifecycleRow p { color: var(--slate); font-size: 16px; }
        .lifecycleTrail { margin-top: 32px; padding: 22px 24px; border-radius: 20px; background: var(--ink); color: #FFFFFF; display: flex; flex-wrap: wrap; gap: 9px 12px; align-items: center; font-size: 16px; font-weight: 600; }
        .lifecycleTrail span:not(:last-child)::after { content: "→"; margin-left: 12px; color: var(--eyebrow-dark); }

        .sectorGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .sectorItem { min-width: 0; padding: 34px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .sectorTop { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; align-items: start; }
        .iconTile { width: 48px; height: 48px; border-radius: 15px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); }
        .sectorItem h3 { font-size: 22px; letter-spacing: -0.02em; }
        .sectorItem p { margin-top: 12px; color: var(--slate); font-size: 16px; }
        .sectorItem .editorialLink { margin-top: 14px; }

        .deliverablesWrap { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .deliverableRow { display: grid; grid-template-columns: .72fr 1.28fr; min-height: 235px; }
        .deliverableRow + .deliverableRow { border-top: 1px solid var(--line); }
        .deliverableTitle { padding: 38px 40px; border-right: 1px solid var(--line); background: #FBFCFD; }
        .deliverableTitle h3 { font-size: 22px; max-width: 290px; }
        .deliverableTitle .iconTile { margin-bottom: 22px; background: #FFFFFF; border: 1px solid var(--soft-line); }
        .deliverableList { padding: 36px 40px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 15px 30px; align-content: center; }
        .listCheck { display: grid; grid-template-columns: 22px minmax(0,1fr); gap: 10px; color: var(--slate); font-size: 16px; }
        .listCheck svg { color: var(--magenta); margin-top: 3px; }

        .consumerGrid { display: grid; grid-template-columns: .93fr 1.07fr; gap: 76px; align-items: center; }
        .consumerVisual { min-height: 520px; border-radius: 30px; border: 1px solid var(--line); background: linear-gradient(150deg, #FDF2F7 0%, #FFFFFF 60%); padding: 36px; position: relative; overflow: hidden; }
        .productOrbit { position: absolute; inset: 34px; border: 1px dashed #D9B6C6; border-radius: 50%; }
        .productCenter { position: absolute; width: 190px; height: 250px; left: 50%; top: 50%; transform: translate(-50%,-50%); border-radius: 28px; background: #FFFFFF; border: 2px solid #C9D0DA; box-shadow: 0 20px 40px rgba(18,24,38,.10); padding: 18px; }
        .productCenterScreen { height: 185px; border-radius: 18px; background: #171B24; padding: 18px; color: #FFFFFF; }
        .productCenterScreen span { display: block; font-size: 12px; letter-spacing: .12em; color: var(--eyebrow-dark); }
        .productCenterScreen strong { display: block; font-size: 22px; line-height: 1.2; margin-top: 42px; }
        .productCenterScreen small { display: block; font-size: 14px; color: #BAC2CF; margin-top: 8px; }
        .productCenterButton { width: 54px; height: 8px; background: #D5DAE2; border-radius: 999px; margin: 18px auto 0; }
        .orbitNode { position: absolute; width: 128px; min-height: 82px; border-radius: 18px; background: #FFFFFF; border: 1px solid var(--line); box-shadow: 0 12px 28px rgba(18,24,38,.06); display: grid; place-items: center; text-align: center; padding: 14px; font-size: 14px; line-height: 1.25; font-weight: 600; }
        .orbitNode svg { color: var(--magenta); margin-bottom: 5px; }
        .orbitTopLeft { left: 16px; top: 52px; }
        .orbitTopRight { right: 18px; top: 48px; }
        .orbitBottomLeft { left: 14px; bottom: 50px; }
        .orbitBottomRight { right: 12px; bottom: 54px; }
        .consumerContent .sectionIntro { max-width: 590px; }
        .consumerRows { margin-top: 30px; border-top: 1px solid var(--line); }
        .consumerRow { display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 16px; padding: 20px 0; border-bottom: 1px solid var(--line); }
        .consumerRow svg { color: var(--magenta); margin-top: 2px; }
        .consumerRow h3 { font-size: 20px; letter-spacing: -0.012em; }
        .consumerRow p { margin-top: 5px; color: var(--slate); font-size: 16px; }

        .firmwareSection { overflow: hidden; }
        .firmwareTop { display: grid; grid-template-columns: .86fr 1.14fr; gap: 72px; align-items: end; margin-bottom: 46px; }
        .firmwareTop .sectionIntro { margin-top: 0; max-width: 650px; }
        .firmwareMockup { border-radius: 28px; background: #0F1219; border: 1px solid rgba(255,255,255,.12); overflow: hidden; box-shadow: 0 26px 70px rgba(0,0,0,.24); }
        .mockupTopbar { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 22px 26px; border-bottom: 1px solid rgba(255,255,255,.10); }
        .mockupTopbar strong { display: block; font-size: 16px; margin-top: 4px; color: #FFFFFF; }
        .mockupKicker { font-size: 12px; color: var(--eyebrow-dark); letter-spacing: .08em; text-transform: uppercase; font-weight: 600; }
        .mockupStatus { color: #FFFFFF; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12); border-radius: 999px; padding: 8px 12px; font-size: 13px; }
        .mockupGrid { display: grid; grid-template-columns: 1.35fr .65fr; min-height: 430px; }
        .mockupStrings { min-width: 0; border-right: 1px solid rgba(255,255,255,.10); }
        .mockupHeaderRow, .mockupRow { display: grid; grid-template-columns: 1.25fr 1fr 94px; gap: 16px; align-items: center; padding: 16px 20px; }
        .mockupHeaderRow { color: #8993A3; font-size: 12px; text-transform: uppercase; letter-spacing: .08em; border-bottom: 1px solid rgba(255,255,255,.08); }
        .mockupRow { min-height: 88px; border-bottom: 1px solid rgba(255,255,255,.07); }
        .mockupRow:last-child { border-bottom: 0; }
        .mockupRow code { display: block; color: #D9DEE6; font-size: 12px; white-space: normal; overflow-wrap: anywhere; }
        .mockupRow div > span { display: block; margin-top: 5px; color: #7F8999; font-size: 13px; }
        .mockupRow strong { color: #FFFFFF; font-size: 16px; line-height: 1.4; font-weight: 500; }
        .statusPill { justify-self: start; font-size: 12px; color: #E6C9D6; background: rgba(193,29,99,.18); border: 1px solid rgba(242,167,198,.24); padding: 6px 9px; border-radius: 999px; }
        .statusApproved { color: #BDE7CE; background: rgba(65,169,104,.16); border-color: rgba(113,214,150,.24); }
        .devicePreview { padding: 32px 24px; display: flex; flex-direction: column; justify-content: center; }
        .deviceScreen { max-width: 250px; margin: 0 auto; width: 100%; border-radius: 24px; padding: 18px; background: #FFFFFF; color: var(--ink); }
        .deviceHeader { display: flex; justify-content: space-between; gap: 10px; color: var(--muted); font-size: 11px; letter-spacing: .08em; font-weight: 600; }
        .deviceSignal { margin-top: 38px; text-align: center; }
        .signalDot { width: 50px; height: 50px; border-radius: 50%; display: block; margin: 0 auto 18px; background: radial-gradient(circle at 35% 35%, #F4A8C7 0%, #C11D63 55%, #7A1542 100%); }
        .deviceSignal strong { display: block; font-size: 20px; }
        .deviceSignal small { display: block; margin-top: 6px; color: var(--muted); font-size: 13px; }
        .deviceActions { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 30px; }
        .deviceActions span { border-radius: 10px; background: #F3F5F8; padding: 10px 7px; text-align: center; font-size: 12px; font-weight: 600; }
        .previewChecks { display: grid; gap: 9px; margin: 24px auto 0; max-width: 250px; width: 100%; color: #AEB7C5; font-size: 13px; }
        .previewChecks span { display: flex; align-items: center; gap: 8px; }
        .previewChecks svg { color: var(--eyebrow-dark); flex: 0 0 auto; }
        .darkFeatureGrid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 16px; margin-top: 32px; }
        .darkFeature { padding: 24px; border-radius: 20px; border: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.04); }
        .darkFeature svg { color: var(--eyebrow-dark); }
        .darkFeature h3 { margin-top: 16px; font-size: 20px; letter-spacing: -0.01em; }
        .darkFeature p { margin-top: 8px; color: #B9C0CB; font-size: 16px; }

        .splitEditorial { display: grid; grid-template-columns: .9fr 1.1fr; gap: 78px; align-items: start; }
        .splitEditorial.reverse { grid-template-columns: 1.08fr .92fr; }
        .stickyTitle { position: sticky; top: 28px; }
        .editorialRows { border-top: 1px solid var(--line); }
        .editorialRow { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .editorialRow .iconTile { width: 44px; height: 44px; border-radius: 14px; }
        .editorialRow h3 { font-size: 20px; letter-spacing: -0.015em; }
        .editorialRow p { margin-top: 7px; color: var(--slate); font-size: 16px; }
        .editorialRow .editorialLink { margin-top: 9px; }

        .marketPanel { border-radius: 30px; border: 1px solid #E7CFD9; background: var(--blush); padding: 46px; }
        .marketPanel h2 { max-width: 650px; }
        .marketGrid { margin-top: 38px; display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid #E5C8D5; border-left: 1px solid #E5C8D5; }
        .marketItem { padding: 26px; border-right: 1px solid #E5C8D5; border-bottom: 1px solid #E5C8D5; background: rgba(255,255,255,.54); }
        .marketItem svg { color: var(--magenta); }
        .marketItem h3 { margin-top: 14px; font-size: 20px; letter-spacing: -0.012em; }
        .marketItem p { margin-top: 7px; color: var(--slate); font-size: 16px; }
        .marketNote { margin-top: 26px; max-width: 900px; color: var(--slate); font-size: 16px; }

        .fileGrid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 64px; align-items: center; }
        .fileCloud { border: 1px solid var(--line); border-radius: 28px; padding: 36px; background: #FFFFFF; box-shadow: 0 20px 50px rgba(18,24,38,.06); }
        .fileToolbar { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--line); }
        .fileToolbar strong { font-size: 17px; }
        .fileToolbar span { color: var(--muted); font-size: 13px; }
        .fileRows { margin-top: 10px; }
        .fileRow { display: grid; grid-template-columns: 42px minmax(0,1fr) 100px; gap: 14px; align-items: center; padding: 17px 0; border-bottom: 1px solid var(--soft-line); }
        .fileRow:last-child { border-bottom: 0; }
        .fileIcon { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); }
        .fileRow strong { display: block; font-size: 16px; overflow-wrap: anywhere; }
        .fileRow small { display: block; margin-top: 2px; color: var(--muted); font-size: 13px; }
        .fileState { justify-self: end; color: var(--magenta); font-size: 13px; font-weight: 600; }
        .formatTags { display: flex; flex-wrap: wrap; gap: 9px; margin-top: 26px; }
        .formatTag { border: 1px solid var(--line); border-radius: 999px; padding: 7px 11px; color: var(--slate); font-size: 13px; background: #FFFFFF; }
        .fileContent .sectionIntro { max-width: 580px; }
        .fileCapabilities { margin-top: 28px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 15px 24px; }
        .fileCapability { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 10px; color: var(--slate); font-size: 16px; }
        .fileCapability svg { color: var(--magenta); margin-top: 3px; }

        .aiGrid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 76px; align-items: start; }
        .aiContent .sectionIntro { max-width: 590px; }
        .aiLinks { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 28px; }
        .riskMatrix { border-radius: 28px; overflow: hidden; border: 1px solid rgba(255,255,255,.14); }
        .riskRow { display: grid; grid-template-columns: 170px minmax(0,1fr); border-bottom: 1px solid rgba(255,255,255,.10); }
        .riskRow:last-child { border-bottom: 0; }
        .riskLabel { padding: 30px 26px; background: rgba(255,255,255,.05); border-right: 1px solid rgba(255,255,255,.10); }
        .riskLabel strong { display: block; font-size: 18px; }
        .riskLabel span { display: block; margin-top: 7px; color: #AEB6C3; font-size: 16px; }
        .riskDetails { padding: 28px 30px; }
        .riskDetails p { color: #C5CBD5; font-size: 16px; }
        .riskTags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 16px; }
        .riskTags span { border: 1px solid rgba(255,255,255,.13); border-radius: 999px; padding: 6px 10px; color: #DCE1E8; font-size: 13px; }

        .qualityGrid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 42px; }
        .qualityPanel { border-radius: 26px; border: 1px solid var(--line); padding: 34px; background: #FFFFFF; }
        .qualityPanel h3 { font-size: 22px; }
        .qualityPanel p { margin-top: 12px; color: var(--slate); font-size: 16px; }
        .qualityPanel ul { list-style: none; margin: 22px 0 0; padding: 0; display: grid; gap: 12px; }
        .qualityPanel li { display: grid; grid-template-columns: 20px minmax(0,1fr); gap: 10px; color: var(--slate); font-size: 16px; }
        .qualityPanel li svg { color: var(--magenta); margin-top: 3px; }

        .continuousGrid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 76px; align-items: center; }
        .continuousCycle { position: relative; min-height: 560px; display: grid; place-items: center; }
        .cycleCenter { width: 190px; height: 190px; border-radius: 50%; display: grid; place-items: center; text-align: center; padding: 30px; background: var(--ink); color: #FFFFFF; box-shadow: 0 22px 44px rgba(18,24,38,.18); }
        .cycleCenter svg { color: var(--eyebrow-dark); }
        .cycleCenter strong { display: block; margin-top: 12px; font-size: 20px; line-height: 1.2; }
        .cycleRing { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 440px; height: 440px; border: 1px dashed #CFB6C1; border-radius: 50%; }
        .cycleNode { position: absolute; width: 150px; min-height: 92px; border-radius: 18px; background: #FFFFFF; border: 1px solid var(--line); box-shadow: 0 12px 30px rgba(18,24,38,.07); padding: 16px; display: grid; place-items: center; text-align: center; color: var(--slate); font-size: 14px; line-height: 1.25; font-weight: 600; }
        .cycleNode svg { color: var(--magenta); margin-bottom: 7px; }
        .cycleNode:nth-of-type(2) { top: 10px; left: 50%; transform: translateX(-50%); }
        .cycleNode:nth-of-type(3) { right: 0; top: 50%; transform: translateY(-50%); }
        .cycleNode:nth-of-type(4) { bottom: 4px; left: 50%; transform: translateX(-50%); }
        .cycleNode:nth-of-type(5) { left: 0; top: 50%; transform: translateY(-50%); }
        .continuousContent .sectionIntro { max-width: 590px; }
        .continuousList { margin-top: 30px; display: grid; gap: 14px; }
        .continuousList div { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 12px; color: var(--slate); font-size: 16px; }
        .continuousList svg { color: var(--magenta); margin-top: 3px; }

        .launchBand { border-radius: 30px; background: var(--ink); color: #FFFFFF; padding: 54px; }
        .launchGrid { display: grid; grid-template-columns: .86fr 1.14fr; gap: 70px; align-items: start; }
        .launchBand h2 { max-width: 560px; }
        .launchBand .sectionIntro { color: #C6CDD8; max-width: 570px; }
        .launchStreams { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-left: 1px solid rgba(255,255,255,.14); border-top: 1px solid rgba(255,255,255,.14); }
        .launchStream { padding: 25px; border-right: 1px solid rgba(255,255,255,.14); border-bottom: 1px solid rgba(255,255,255,.14); }
        .launchStream svg { color: var(--eyebrow-dark); }
        .launchStream h3 { margin-top: 15px; font-size: 20px; letter-spacing: -0.01em; }
        .launchStream p { margin-top: 7px; color: #BBC2CD; font-size: 16px; }

        .processGrid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); margin-top: 44px; border-top: 1px solid var(--line); }
        .processStep { padding: 30px 24px 6px 0; min-width: 0; }
        .processStep + .processStep { padding-left: 24px; border-left: 1px solid var(--line); }
        .processNumber { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; color: var(--magenta); background: var(--blush); font-size: 14px; font-weight: 600; }
        .processStep h3 { margin-top: 20px; font-size: 20px; letter-spacing: -0.012em; }
        .processStep p { margin-top: 10px; color: var(--slate); font-size: 16px; }

        .whyGrid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 18px; margin-top: 44px; }
        .whyItem { padding: 30px; border-radius: 22px; border: 1px solid var(--line); background: #FFFFFF; }
        .whyItem svg { color: var(--magenta); }
        .whyItem h3 { margin-top: 17px; font-size: 20px; letter-spacing: -0.015em; }
        .whyItem p { margin-top: 9px; color: var(--slate); font-size: 16px; }

        .languageBar { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .languageInner { display: grid; grid-template-columns: .72fr 1.28fr; gap: 52px; align-items: center; padding-top: 52px; padding-bottom: 52px; }
        .languageInner h2 { font-size: 30px; }
        .languageCloud { display: flex; flex-wrap: wrap; gap: 10px; }
        .languageChip { border-radius: 999px; border: 1px solid var(--line); padding: 9px 13px; color: var(--slate); background: #FFFFFF; font-size: 14px; }
        .languageLink { margin-top: 18px; }

        .relatedList { margin-top: 42px; border-top: 1px solid var(--line); }
        .relatedRow { display: grid; grid-template-columns: 1fr 1.35fr 210px; gap: 32px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--line); }
        .relatedRow h3 { font-size: 20px; letter-spacing: -0.015em; }
        .relatedRow p { color: var(--slate); font-size: 16px; }
        .relatedRow .editorialLink { justify-self: end; text-align: right; }

        .faqWrap { display: grid; grid-template-columns: .64fr 1.36fr; gap: 76px; align-items: start; }
        .faqIntro { position: sticky; top: 28px; }
        .faqIntro .sectionIntro { max-width: 460px; }
        .faqPanel { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .faqItem + .faqItem { border-top: 1px solid var(--line); }
        .faqButton { width: 100%; min-height: 76px; display: grid; grid-template-columns: minmax(0,1fr) 40px; gap: 20px; align-items: center; padding: 22px 26px; border: 0; background: transparent; color: var(--ink); text-align: left; cursor: pointer; font: inherit; list-style: none; }
        .faqButton::-webkit-details-marker { display: none; }
        .faqButton::marker { content: ""; }
        .faqButton span:first-child { font-size: 18px; line-height: 1.4; font-weight: 600; }
        .faqToggle { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--line); color: var(--magenta); font-size: 22px; line-height: 1; transition: transform .2s ease, background .2s ease; }
        .faqItem[open] .faqToggle { transform: rotate(45deg); background: var(--blush); }
        .faqAnswer { padding: 0 78px 24px 26px; color: var(--slate); font-size: 16px; max-width: 840px; }

        .finalCta { padding: 82px 0; }
        .finalCtaPanel { border-radius: 30px; background: linear-gradient(135deg, #FDF2F7 0%, #FFFFFF 72%); border: 1px solid #E7CED9; padding: 60px; display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
        .finalCtaPanel h2 { max-width: 720px; }
        .finalCtaPanel p { margin-top: 18px; max-width: 720px; color: var(--slate); font-size: 18px; }
        .finalActions { display: flex; flex-direction: column; gap: 12px; min-width: 235px; }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .heroGrid { grid-template-columns: 1.05fr .95fr; gap: 42px; }
          .mockupGrid { grid-template-columns: 1.2fr .8fr; }
          .darkFeatureGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .processGrid { grid-template-columns: repeat(3, minmax(0,1fr)); }
          .processStep:nth-child(4) { border-left: 0; padding-left: 0; border-top: 1px solid var(--line); margin-top: 28px; }
          .processStep:nth-child(5) { border-top: 1px solid var(--line); margin-top: 28px; }
        }

        @media (max-width: 920px) {
          .electronicsPage h1 { font-size: 42px; }
          .electronicsPage h2 { font-size: 32px; }
          .electronicsPage h3 { font-size: 22px; }
          .shell { padding-left: 24px; padding-right: 24px; }
          .section { padding: 84px 0; }
          .sectionDense { padding: 72px 0; }
          .hero { padding: 88px 0 80px; }
          .heroGrid, .lifecycleGrid, .consumerGrid, .firmwareTop, .splitEditorial, .splitEditorial.reverse, .fileGrid, .aiGrid, .continuousGrid, .launchGrid, .faqWrap { grid-template-columns: 1fr; }
          .heroCopy { max-width: 760px; }
          .heroArt { max-width: 650px; margin: 12px auto 0; }
          .sectionHeadingRow { align-items: flex-start; flex-direction: column; gap: 20px; margin-bottom: 40px; }
          .sectionHeadingRow .sectionIntro { max-width: 760px; }
          .trustBandInner { grid-template-columns: repeat(3,1fr); }
          .trustItem:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
          .trustItem:nth-child(5) { border-top: 1px solid var(--line); }
          .lifecycleSummary, .stickyTitle, .faqIntro { position: static; }
          .lifecycleRow { grid-template-columns: 52px 180px minmax(0,1fr); }
          .sectorGrid { grid-template-columns: 1fr 1fr; }
          .deliverableRow { grid-template-columns: 1fr; }
          .deliverableTitle { border-right: 0; border-bottom: 1px solid var(--line); }
          .deliverableList { grid-template-columns: 1fr 1fr; }
          .consumerVisual { max-width: 690px; width: 100%; margin: 0 auto; order: 2; }
          .consumerContent { order: 1; }
          .mockupGrid { grid-template-columns: 1fr; }
          .mockupStrings { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.1); }
          .marketGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .fileCloud { max-width: 700px; }
          .riskRow { grid-template-columns: 150px minmax(0,1fr); }
          .qualityGrid { grid-template-columns: 1fr 1fr; }
          .continuousCycle { min-height: 510px; max-width: 620px; margin: 0 auto; }
          .launchBand { padding: 44px; }
          .processGrid { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .processStep:nth-child(3), .processStep:nth-child(5) { border-left: 0; padding-left: 0; border-top: 1px solid var(--line); margin-top: 28px; }
          .processStep:nth-child(4) { border-left: 1px solid var(--line); padding-left: 24px; }
          .whyGrid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .languageInner { grid-template-columns: 1fr; gap: 28px; }
          .relatedRow { grid-template-columns: 1fr 1.3fr; }
          .relatedRow .editorialLink { grid-column: 1 / -1; justify-self: start; text-align: left; }
          .faqIntro .sectionIntro { max-width: 760px; }
          .finalCtaPanel { grid-template-columns: 1fr; }
          .finalActions { flex-direction: row; min-width: 0; flex-wrap: wrap; }
        }

        @media (max-width: 680px) {
          .electronicsPage h1 { font-size: 38px; }
          .electronicsPage h2 { font-size: 30px; }
          .electronicsPage h3 { font-size: 20px; }
          .shell { padding-left: 20px; padding-right: 20px; }
          .section { padding: 68px 0; }
          .sectionDense { padding: 64px 0; }
          .hero { padding: 72px 0 64px; }
          .heroActions { display: grid; grid-template-columns: 1fr; }
          .heroActions .button { width: 100%; }
          .heroProof { align-items: flex-start; flex-direction: column; gap: 9px; }
          .heroProofDivider { display: none; }
          .heroArt { margin-left: -8px; margin-right: -8px; }
          .trustBandInner { grid-template-columns: 1fr; }
          .trustItem { min-height: 64px; justify-content: flex-start; text-align: left; padding: 17px 0; }
          .trustItem + .trustItem, .trustItem:nth-child(4), .trustItem:nth-child(5) { border-left: 0; border-top: 1px solid var(--line); }
          .sectionHeadingRow { align-items: flex-start; flex-direction: column; gap: 18px; margin-bottom: 34px; }
          .lifecycleRow { grid-template-columns: 44px minmax(0,1fr); gap: 14px; padding: 24px 0; }
          .lifecycleRow h3 { align-self: center; }
          .lifecycleRow p { grid-column: 2; padding-left: 0; }
          .lifecycleIcon { width: 44px; height: 44px; }
          .lifecycleTrail { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px 14px; }
          .lifecycleTrail span:not(:last-child)::after { content: ""; margin: 0; }
          .sectorGrid { grid-template-columns: 1fr; }
          .sectorItem { padding: 27px 24px; }
          .sectorTop { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
          .iconTile { width: 44px; height: 44px; }
          .deliverableTitle, .deliverableList { padding: 28px 24px; }
          .deliverableList { grid-template-columns: 1fr; }
          .consumerVisual { min-height: 500px; padding: 24px; }
          .productOrbit { inset: 55px 26px; }
          .productCenter { width: 164px; height: 230px; }
          .orbitNode { width: 104px; min-height: 76px; padding: 10px; font-size: 12px; }
          .orbitTopLeft { left: 2px; top: 44px; }
          .orbitTopRight { right: 2px; top: 44px; }
          .orbitBottomLeft { left: 2px; bottom: 43px; }
          .orbitBottomRight { right: 2px; bottom: 43px; }
          .consumerRow { grid-template-columns: 38px minmax(0,1fr); }
          .firmwareTop { gap: 20px; }
          .mockupTopbar { align-items: flex-start; flex-direction: column; gap: 12px; padding: 20px 18px; }
          .mockupStatus { align-self: flex-start; }
          .embeddedLinks, .aiLinks { display: grid; grid-template-columns: 1fr; gap: 4px; }
          .embeddedLinks .editorialLink, .aiLinks .editorialLink { width: 100%; }
          .mockupHeaderRow { display: none; }
          .mockupRow { grid-template-columns: 1fr; gap: 10px; padding: 18px; }
          .mockupRow strong { font-size: 16px; }
          .statusPill { justify-self: start; }
          .devicePreview { padding: 28px 18px; }
          .darkFeatureGrid { grid-template-columns: 1fr; }
          .editorialRow { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
          .marketPanel { padding: 30px 22px; }
          .marketGrid { grid-template-columns: 1fr; }
          .fileCloud { padding: 24px 20px; }
          .fileToolbar { align-items: flex-start; flex-direction: column; gap: 8px; }
          .fileToolbar > span { font-size: 14px; }
          .fileRow { grid-template-columns: 38px minmax(0,1fr); }
          .fileState { grid-column: 2; justify-self: start; }
          .fileCapabilities { grid-template-columns: 1fr; }
          .riskRow { grid-template-columns: 1fr; }
          .riskLabel { border-right: 0; border-bottom: 1px solid rgba(255,255,255,.10); }
          .riskDetails { padding: 24px; }
          .qualityGrid { grid-template-columns: 1fr; }
          .qualityPanel { padding: 28px 24px; }
          .continuousCycle { display: none; }
          .continuousGrid { gap: 0; }
          .launchBand { padding: 34px 22px; border-radius: 24px; }
          .launchStreams { grid-template-columns: 1fr; }
          .processGrid { grid-template-columns: 1fr; }
          .processStep, .processStep + .processStep, .processStep:nth-child(3), .processStep:nth-child(4), .processStep:nth-child(5) { padding: 25px 0; border-left: 0; border-top: 1px solid var(--line); margin-top: 0; }
          .processStep:first-child { border-top: 0; }
          .whyGrid { grid-template-columns: 1fr; }
          .languageInner { padding-top: 42px; padding-bottom: 42px; }
          .languageChip { font-size: 14px; }
          .relatedRow { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
          .relatedRow .editorialLink { grid-column: auto; }
          .faqWrap { gap: 36px; }
          .faqButton { padding: 20px; grid-template-columns: minmax(0,1fr) 36px; }
          .faqButton span:first-child { font-size: 17px; }
          .faqAnswer { padding: 0 20px 22px; }
          .finalCta { padding: 64px 0; }
          .finalCtaPanel { padding: 38px 24px; border-radius: 24px; }
          .finalActions { display: grid; grid-template-columns: 1fr; width: 100%; }
          .finalActions .button { width: 100%; }
        }

        @media (max-width: 360px) {
          .heroLead, .sectionIntro, .finalCtaPanel p { font-size: 17px; }
          .consumerVisual { min-height: 480px; }
          .productCenter { width: 150px; }
          .orbitNode { width: 96px; }

        }
      `}</style>

      <section className="hero">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <Eyebrow>Engineering to Customer Support</Eyebrow>
            <h1>Electronics Translation Services for Hardware, Software, and Global Product Launches</h1>
            <p className="heroLead">
              Bring electronic products to international markets with accurate, scalable translation across technical documentation, embedded software, device interfaces, manufacturing content, product safety information, packaging, training, marketing, and customer support.
            </p>
            <div className="heroActions">
              <PrimaryButton href={links.quote}>Get a Translation Quote</PrimaryButton>
              <SecondaryButton href={links.contact}>Talk to an Electronics Expert</SecondaryButton>
            </div>
            <div className="heroProof" aria-label="Service highlights">
              <span className="heroProofItem"><CheckIcon /> 100+ Languages</span>
              <span className="heroProofDivider" aria-hidden="true" />
              <span className="heroProofItem"><CheckIcon /> AI + Professional Human Review</span>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="trustBand" aria-label="Electronics translation capabilities">
        <div className="shell trustBandInner">
          <div className="trustItem">ISO 17100 &amp; ISO 9001</div>
          <div className="trustItem">Electronics Industry Linguists</div>
          <div className="trustItem">Technical File Engineering</div>
          <div className="trustItem">Terminology Management</div>
          <div className="trustItem">Continuous Localization</div>
        </div>
      </section>

      <section className="section" id="product-lifecycle">
        <div className="shell lifecycleGrid">
          <div className="lifecycleSummary">
            <h2>Translation Expertise Across the Electronics Product Lifecycle</h2>
            <p className="sectionIntro">
              Modern electronic products combine hardware, software, technical documentation, manufacturing operations, digital services, and continuing customer support. Stepes provides one connected multilingual workflow from engineering and sourcing through launch, service, and product updates.
            </p>
            <div className="lifecycleTrail" aria-label="Electronics product lifecycle stages">
              {['Design','Source','Manufacture','Validate','Launch','Support','Update'].map((stage) => <span key={stage}>{stage}</span>)}
            </div>
          </div>
          <div className="lifecycleFlow">
            {[
              ["circuit", "Design and Engineering", "Translate product requirements, engineering specifications, component documentation, interface content, design references, test plans, and research materials while preserving technical meaning."],
              ["factory", "Sourcing and Manufacturing", "Support suppliers, OEMs, ODMs, EMS providers, factories, and quality teams with multilingual production, assembly, inspection, safety, and workforce content."],
              ["shield", "Market Access and Product Launch", "Prepare product instructions, labels, packaging, declarations, safety information, websites, e-commerce content, campaigns, and sales materials for target markets."],
              ["refresh", "Service, Repair, and Updates", "Keep service manuals, firmware releases, support portals, repair instructions, product bulletins, and customer communications aligned throughout the product lifecycle."],
            ].map(([icon,title,copy]) => (
              <div className="lifecycleRow" key={title}>
                <div className="lifecycleIcon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="electronics-sectors">
        <div className="shell">
          <div className="sectionHeadingRow">
            <div>
              <Eyebrow>Electronics Sectors</Eyebrow>
              <h2>Electronics Translation for Products, Components, and Connected Technologies</h2>
            </div>
            <p className="sectionIntro">
              Stepes supports companies across the electronics ecosystem, from semiconductor and component suppliers to hardware manufacturers, software teams, contract manufacturers, distributors, and global consumer brands.
            </p>
          </div>
          <div className="sectorGrid">
            {sectorItems.map((item) => (
              <article className="sectorItem" key={item.title}>
                <div className="sectorTop">
                  <div className="iconTile"><Icon name={item.icon} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.copy}</p>
                    {item.href && <EditorialLink href={item.href}>{item.link}</EditorialLink>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="content-types">
        <div className="shell">
          <div className="sectionHeadingRow">
            <div>
              <Eyebrow>Content Coverage</Eyebrow>
              <h2>Translate Every Engineering, Manufacturing, and Customer Touchpoint</h2>
            </div>
            <p className="sectionIntro">
              Product information moves between engineering teams, factories, software resources, packaging systems, websites, distributors, service organizations, and support channels. Stepes helps keep these connected content streams accurate and consistent.
            </p>
          </div>
          <div className="deliverablesWrap">
            {deliverableGroups.map((group, index) => (
              <div className="deliverableRow" key={group.title}>
                <div className="deliverableTitle">
                  <div className="iconTile"><Icon name={["document","code","factory","globe","shield"][index]} /></div>
                  <h3>{group.title}</h3>
                </div>
                <div className="deliverableList">
                  {group.items.map((item) => (
                    <div className="listCheck" key={item}><CheckIcon /><span>{item}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionBlush" id="consumer-electronics">
        <div className="shell consumerGrid">
          <div className="consumerVisual" aria-hidden="true">
            <div className="productOrbit" />
            <div className="orbitNode orbitTopLeft"><Icon name="document" /> Manuals</div>
            <div className="orbitNode orbitTopRight"><Icon name="device" /> Device UI</div>
            <div className="orbitNode orbitBottomLeft"><Icon name="folder" /> Packaging</div>
            <div className="orbitNode orbitBottomRight"><Icon name="users" /> Support</div>
            <div className="productCenter">
              <div className="productCenterScreen">
                <span>SMART AUDIO</span>
                <strong>Ready to connect</strong>
                <small>Select your language</small>
              </div>
              <div className="productCenterButton" />
            </div>
          </div>
          <div className="consumerContent">
            <Eyebrow>Consumer Electronics</Eyebrow>
            <h2>Create a Consistent Product Experience in Every Market</h2>
            <p className="sectionIntro">
              Consumers experience an electronic product through its packaging, setup instructions, menus, companion app, online product pages, tutorials, warranty materials, notifications, and support resources. Stepes helps your product terminology and user guidance remain consistent across every touchpoint.
            </p>
            <div className="consumerRows">
              {[
                ["device", "Device Interface Localization", "Translate menus, settings, notifications, commands, warnings, onboarding screens, and help content while accounting for screen dimensions and software constraints."],
                ["document", "Manuals, Packaging, and Labels", "Provide clear setup, operation, safety, maintenance, troubleshooting, warranty, and recycling information for each target market."],
                ["globe", "Retail and E-Commerce Localization", "Localize product titles, descriptions, feature comparisons, technical specifications, imagery, retailer content, and online campaigns."],
                ["users", "Multilingual Customer Support", "Keep FAQs, knowledge bases, troubleshooting articles, warranty guidance, and service communications aligned with the device and documentation."],
              ].map(([icon,title,copy]) => (
                <div className="consumerRow" key={title}>
                  <Icon name={icon} />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <EditorialLink href={links.consumer}>Consumer Electronics Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionDark firmwareSection" id="embedded-localization">
        <div className="shell">
          <div className="firmwareTop">
            <div>
              <Eyebrow dark>Embedded Localization</Eyebrow>
              <h2>Localize Embedded Software Without Compromising the Device Experience</h2>
            </div>
            <p className="sectionIntro">
              Effective firmware localization requires more than translating isolated strings. Linguists need context, localization engineers must protect resource structures, and reviewers need to see how translated content performs in the actual interface.
            </p>
          </div>
          <FirmwareMockup />
          <div className="darkFeatureGrid">
            {[
              ["code", "Structured Resource Support", "Process common localization formats while protecting resource keys, variables, placeholders, tags, and nontranslatable elements."],
              ["device", "Display-Aware Translation", "Account for character limits, text expansion, small screens, hardware labels, bidirectional languages, fonts, and supported character sets."],
              ["qa", "In-Context Linguistic QA", "Use screenshots, prototypes, test builds, or device environments to identify truncation, rendering issues, ambiguity, and terminology conflicts."],
              ["refresh", "Continuous Firmware Releases", "Reuse approved translations and terminology while focusing each release on new or modified strings, features, and configurations."],
            ].map(([icon,title,copy]) => (
              <div className="darkFeature" key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
          <div className="embeddedLinks">
            <EditorialLink href={links.embedded}>Embedded Software Localization</EditorialLink>
            <EditorialLink href={links.software}>Software Localization Services</EditorialLink>
            <EditorialLink href={links.appLocalization}>App Localization Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section" id="semiconductors-components">
        <div className="shell splitEditorial">
          <div className="stickyTitle">
            <h2>Semiconductor and Electronic Component Translation</h2>
            <p className="sectionIntro">
              Semiconductor and component content demands precise terminology, careful handling of numerical values and units, and a clear understanding of electrical characteristics, signal behavior, operating conditions, testing requirements, warnings, and product limitations.
            </p>
          </div>
          <div className="editorialRows">
            {[
              ["chip", "Semiconductor Documentation", "Translate product datasheets, application notes, reference designs, process documentation, design and verification guides, test procedures, software interfaces, and product change notifications.", links.semiconductor, "Semiconductor Translation Services"],
              ["circuit", "Electronic Components and PCBs", "Support specifications, package and pin descriptions, bills of materials, PCB documentation, assembly drawings, supplier manuals, inspection procedures, reliability reports, and technical catalogs.", links.components, "Electronic Components Translation Services"],
              ["layers", "Controlled Technical Terminology", "Maintain approved component names, package types, signal terminology, operating modes, measurement units, product features, cautions, and limitations across related products and releases."],
              ["qa", "Numerical and File Quality Controls", "Apply numerical checks, unit and symbol verification, tag validation, terminology QA, technical review, and final-format inspection according to project requirements."],
            ].map(([icon,title,copy,href,label]) => (
              <div className="editorialRow" key={title}>
                <div className="iconTile"><Icon name={icon} /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                  {href && <EditorialLink href={href}>{label}</EditorialLink>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="electronics-manufacturing">
        <div className="shell splitEditorial reverse">
          <div className="editorialRows">
            {[
              ["factory", "Assembly and Production", "Assembly instructions, work instructions, standard operating procedures, production specifications, line setup, equipment operation, visual job aids, repair, and factory-floor training."],
              ["qa", "Testing and Quality", "Inspection procedures, test specifications, acceptance criteria, quality manuals, supplier requirements, nonconformance reports, corrective actions, failure analysis, and calibration."],
              ["refresh", "Engineering Change Management", "Engineering change orders and notices, product change notifications, bills of materials, drawings, deviations, process updates, and configuration documentation."],
              ["users", "Supplier and Workforce Communication", "Supplier manuals, procurement specifications, safety content, training courses, employee communications, facility instructions, and maintenance procedures."],
            ].map(([icon,title,copy]) => (
              <div className="editorialRow" key={title}>
                <div className="iconTile"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
          <div className="stickyTitle">
            <h2>Multilingual Content for Global Electronics Production</h2>
            <p className="sectionIntro">
              Electronics manufacturing connects engineering teams, component suppliers, contract manufacturers, quality organizations, factories, and service centers across multiple countries. Clear multilingual documentation helps each team understand what to build, how to assemble it, how to test it, and how to respond when specifications change.
            </p>
            <div className="manufacturingLinks">
              <EditorialLink href={links.electronicsManufacturing}>Electronics Manufacturing Translation Services</EditorialLink>
              <EditorialLink href={links.manufacturing}>Manufacturing Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="connected-products">
        <div className="shell splitEditorial">
          <div className="stickyTitle">
            <Eyebrow>Connected Products</Eyebrow>
            <h2>One Localization Workflow for the Device, App, Cloud, and Support Experience</h2>
            <p className="sectionIntro">
              Connected electronics extend beyond the physical product. A user may interact with an embedded display, mobile app, account portal, cloud dashboard, notification system, voice interface, online manual, and customer support channel. Stepes keeps language and terminology aligned across this complete experience.
            </p>
            <EditorialLink href={links.iot}>IoT Translation Services</EditorialLink>
          </div>
          <div className="editorialRows">
            {[
              ["device", "Device and Companion App", "Keep embedded interfaces, setup flows, mobile applications, pairing instructions, notifications, alerts, and voice prompts consistent across platforms."],
              ["cloud", "Cloud Portals and Dashboards", "Translate account registration, permissions, web controls, analytics, support content, and user guidance for connected services."],
              ["shield", "Security and Update Communication", "Support multilingual secure-setup instructions, update notices, vulnerability communications, support-period information, and incident-related content based on customer requirements."],
              ["users", "Knowledge Bases and Support", "Align online manuals, FAQs, troubleshooting articles, chat content, warranty information, and service communications with the product interface."],
            ].map(([icon,title,copy]) => (
              <div className="editorialRow" key={title}>
                <div className="iconTile"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionDense" id="market-access">
        <div className="shell">
          <div className="marketPanel">
            <Eyebrow>Global Market Access</Eyebrow>
            <h2>Translate Product Safety and Compliance Content with Confidence</h2>
            <p className="sectionIntro">
              Electronic products may require localized instructions, warnings, labels, declarations, technical information, and customer communications before they can be distributed or used in international markets. Stepes supports the language requirements defined by your compliance, regulatory, legal, engineering, and product teams.
            </p>
            <div className="marketGrid">
              {[
                ["shield", "Product Safety", "User safety instructions, electrical warnings, operating limitations, maintenance precautions, battery guidance, emergency procedures, and recall notices."],
                ["folder", "Labels and Packaging", "Product labels, cartons, inserts, warning labels, identifiers, specifications, recycling instructions, feature descriptions, and warranty statements."],
                ["document", "Declarations and Technical Information", "Declarations of conformity, technical files, certificates, test summaries, environmental information, radio and wireless content, repair documentation, and supporting correspondence."],
                ["globe", "Online Product Information", "E-commerce descriptions, product specifications, online warnings, manufacturer information, digital instructions, and supporting marketplace content."],
                ["refresh", "Repair, Sustainability, and Lifecycle Content", "Service and repair information, spare-parts content, software-update communications, recycling and disposal guidance, sustainability data, digital product passport content, and post-sale support."],
                ["cloud", "Connected Product Documentation", "Secure configuration, software updates, support periods, vulnerabilities, incident communications, and ongoing lifecycle protection content."],
              ].map(([icon,title,copy]) => (
                <div className="marketItem" key={title}>
                  <Icon name={icon} />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
            <p className="marketNote">
              Translation requirements vary by product and destination market. Stepes provides translation and localization support for customer-defined requirements and does not determine which laws or regulations apply to a particular product.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="file-engineering">
        <div className="shell fileGrid">
          <div className="fileCloud" aria-label="Illustrative electronics localization file workflow">
            <div className="fileToolbar">
              <div><strong>Electronics launch package</strong><span> · 12 languages</span></div>
              <span>Ready for localization</span>
            </div>
            <div className="fileRows">
              {[
                ["Firmware_UI_v4.8.xliff", "XLIFF · 2,840 strings", "Protected"],
                ["Installation_Manual.fm", "FrameMaker · 184 pages", "Prepared"],
                ["Packaging_Master.indd", "InDesign · 9 panels", "Prepared"],
                ["Support_Knowledge_Base.xml", "XML · 426 articles", "Validated"],
              ].map(([name,meta,state]) => (
                <div className="fileRow" key={name}>
                  <div className="fileIcon"><Icon name="folder" size={21} /></div>
                  <div><strong>{name}</strong><small>{meta}</small></div>
                  <span className="fileState">{state}</span>
                </div>
              ))}
            </div>
            <div className="formatTags">
              {['XML','XLIFF','JSON','YAML','PO','RESX','InDesign','FrameMaker','HTML','CSV'].map((tag) => <span className="formatTag" key={tag}>{tag}</span>)}
            </div>
          </div>
          <div className="fileContent">
            <Eyebrow>Localization Engineering</Eyebrow>
            <h2>Keep Complex Electronics Files Production-Ready</h2>
            <p className="sectionIntro">
              Electronics content is created in structured authoring systems, software resources, product databases, graphics, drawings, publishing applications, and multimedia formats. Stepes combines translation with localization engineering and multilingual publishing so your teams receive usable, release-ready files.
            </p>
            <div className="fileCapabilities">
              {[
                "Text extraction and reintegration",
                "Tag, code, and variable protection",
                "Structured content processing",
                "Multilingual desktop publishing",
                "Graphics and callout localization",
                "Layout expansion management",
                "File validation and integrity checks",
                "Final-format quality assurance",
              ].map((item) => <div className="fileCapability" key={item}><CheckIcon /><span>{item}</span></div>)}
            </div>
            <EditorialLink href={links.technical}>Technical Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section sectionDark" id="ai-translation">
        <div className="shell aiGrid">
          <div className="aiContent">
            <Eyebrow dark>Quality at Scale</Eyebrow>
            <h2>AI-Powered Electronics Translation with Professional Human Expertise</h2>
            <p className="sectionIntro">
              Electronics companies manage recurring multilingual content with different levels of technical complexity and business risk. Stepes combines AI translation, translation memory, approved terminology, automation, professional technical linguists, subject-matter review, and quality assurance according to each content stream.
            </p>
            <div className="aiLinks">
              <EditorialLink href={links.ai}>AI Translation Services</EditorialLink>
              <EditorialLink href={links.tm}>Translation Memory</EditorialLink>
              <EditorialLink href={links.portal}>Translation Management Portal</EditorialLink>
              <EditorialLink href={links.reporting}>Translation Reporting and Analytics</EditorialLink>
            </div>
          </div>
          <div className="riskMatrix">
            <div className="riskRow">
              <div className="riskLabel"><strong>Higher-Risk Content</strong><span>Stronger professional review</span></div>
              <div className="riskDetails">
                <p>Safety warnings, installation instructions, electrical specifications, manufacturing procedures, test instructions, compliance documentation, critical interface messages, repair procedures, and recall communications.</p>
                <div className="riskTags"><span>Technical translation</span><span>Independent review</span><span>Terminology QA</span><span>In-context validation</span></div>
              </div>
            </div>
            <div className="riskRow">
              <div className="riskLabel"><strong>High-Volume Content</strong><span>AI-accelerated workflows</span></div>
              <div className="riskDetails">
                <p>Knowledge-base articles, product descriptions, e-commerce catalogs, support content, employee training, product bulletins, release communications, and large documentation repositories.</p>
                <div className="riskTags"><span>AI translation</span><span>Translation memory</span><span>Selective review</span><span>Automated QA</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="quality-terminology">
        <div className="shell">
          <h2>Maintain Precise Terminology Across Every Product and Release</h2>
          <p className="sectionIntro">
            A product feature should not have one name on the device, another in the manual, and a third in the support portal. Stepes helps prevent these inconsistencies through controlled terminology, translation memory, qualified technical linguists, automated checks, and connected review workflows.
          </p>
          <div className="qualityGrid">
            <div className="qualityPanel">
              <h3>Customer-Specific Language Assets</h3>
              <p>Build reusable multilingual foundations for product families, departments, content systems, and recurring releases.</p>
              <ul>
                {[
                  "Approved product and feature terminology",
                  "Component, interface, and electrical terms",
                  "Brand voice and technical style guidance",
                  "Definitions, context, and usage notes",
                  "Approved abbreviations and excluded legacy terms",
                  "Translation memory for reuse across revisions",
                ].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="qualityPanel">
              <h3>Linguistic and Technical Quality Controls</h3>
              <p>Apply the right checks to the content, file format, intended audience, and release requirements.</p>
              <ul>
                {[
                  "Professional translation and editing",
                  "Terminology and consistency validation",
                  "Numerical, unit, and symbol checks",
                  "Tag, variable, and placeholder validation",
                  "Interface and screenshot review",
                  "Multilingual layout and file-integrity QA",
                ].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="continuous-localization">
        <div className="shell continuousGrid">
          <div className="continuousCycle" aria-hidden="true">
            <div className="cycleRing" />
            <div className="cycleNode"><Icon name="code" /> Firmware and UI updates</div>
            <div className="cycleNode"><Icon name="document" /> Revised manuals and bulletins</div>
            <div className="cycleNode"><Icon name="folder" /> Packaging and regional variants</div>
            <div className="cycleNode"><Icon name="users" /> Support and repair content</div>
            <div className="cycleCenter"><Icon name="refresh" size={30} /><strong>Continuous Localization</strong></div>
          </div>
          <div className="continuousContent">
            <Eyebrow>Ongoing Releases</Eyebrow>
            <h2>Keep Multilingual Content Current After Launch</h2>
            <p className="sectionIntro">
              Electronics localization continues throughout the product lifecycle. Firmware updates, new features, product models, revised manuals, support content, repair programs, and regional configurations all require coordinated multilingual updates.
            </p>
            <div className="continuousList">
              {[
                "Identify unchanged, modified, and new content",
                "Reuse approved translations and terminology",
                "Focus review on the latest changes",
                "Keep firmware, manuals, packaging, and support aligned",
                "Coordinate recurring translation, QA, and delivery cycles",
                "Maintain version visibility across languages and markets",
              ].map((item) => <div key={item}><CheckIcon /><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sectionDense" id="global-launch">
        <div className="shell">
          <div className="launchBand">
            <div className="launchGrid">
              <div>
                <h2>Launch with One Consistent Multilingual Product Story</h2>
                <p className="sectionIntro">
                  Coordinate product, software, documentation, marketing, sales, distribution, training, and support content so each target market receives an accurate and complete launch package. Stepes can also organize phased language waves when priority regions must launch first.
                </p>
              </div>
              <div className="launchStreams">
                {[
                  ["globe", "Digital Commerce", "Product websites, landing pages, e-commerce listings, retailer content, catalogs, and online product information."],
                  ["users", "Sales and Distribution", "Sales presentations, distributor materials, launch campaigns, press content, product demonstrations, and events."],
                  ["document", "Training and Onboarding", "Customer onboarding, training courses, videos, subtitles, tutorials, and partner enablement content."],
                  ["qa", "Support Readiness", "Support portals, knowledge bases, FAQs, warranty and returns information, service content, and customer communications."],
                ].map(([icon,title,copy]) => (
                  <div className="launchStream" key={title}>
                    <Icon name={icon} />
                    <h3>{title}</h3>
                    <p>{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="shell">
          <h2>A Connected Workflow from Source Content to Global Release</h2>
          <p className="sectionIntro">
            Every electronics program has different content, languages, technical requirements, review expectations, and release schedules. Stepes designs the workflow around your product and business needs.
          </p>
          <div className="processGrid">
            {processSteps.map((step, index) => (
              <div className="processStep" key={step.title}>
                <div className="processNumber">{String(index + 1).padStart(2, '0')}</div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="why-stepes">
        <div className="shell">
          <Eyebrow>Built for Global Programs</Eyebrow>
          <h2>Why Electronics Companies Choose Stepes</h2>
          <p className="sectionIntro">
            Support individual technical projects, multi-language product launches, and recurring global content programs through one scalable translation and localization process.
          </p>
          <div className="whyGrid">
            {[
              ["chip", "Broad Electronics Expertise", "Support devices, components, embedded systems, manufacturing, software, technical documentation, and commercial content."],
              ["layers", "Integrated Hardware and Software Localization", "Connect the physical product, device interface, companion app, documentation, packaging, website, and support experience."],
              ["users", "Specialized Technical Linguists", "Work with native-language professionals selected for relevant electronics, engineering, software, and content expertise."],
              ["qa", "AI + Human Quality Models", "Match AI automation, translation memory, terminology, professional review, and quality assurance to each content stream."],
              ["folder", "Production-Ready File Support", "Process structured files, protect technical elements, reintegrate translations, and deliver usable technical, software, publishing, and multimedia formats."],
              ["globe", "Secure, Scalable Global Delivery", "Manage confidential engineering content, product roadmaps, unreleased software, manufacturing information, and recurring multilingual releases."],
            ].map(([icon,title,copy]) => (
              <div className="whyItem" key={title}>
                <Icon name={icon} />
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="languageBar" id="languages">
        <div className="shell languageInner">
          <div>
            <h2>Electronics Translation in 100+ Languages</h2>
            <EditorialLink className="languageLink" href={links.languages}>Explore All Translation Languages</EditorialLink>
          </div>
          <div className="languageCloud" aria-label="Frequently requested electronics translation languages">
            {['Simplified Chinese','Traditional Chinese','Japanese','Korean','German','French','French Canadian','Spanish','Brazilian Portuguese','Italian','Dutch','Polish','Czech','Vietnamese','Thai','Indonesian','Malay','Arabic'].map((language) => <span className="languageChip" key={language}>{language}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="related-solutions">
        <div className="shell">
          <h2>Explore Related Electronics and Technology Solutions</h2>
          <p className="sectionIntro">
            Connect electronics localization with specialist services for semiconductors, connected products, telecommunications, 5G-Advanced and emerging 6G technologies, manufacturing, software, mobile applications, patents, and technical documentation.
          </p>
          <div className="relatedList">
            {relatedSolutions.map((solution) => (
              <div className="relatedRow" key={solution.title}>
                <h3>{solution.title}</h3>
                <p>{solution.copy}</p>
                <EditorialLink href={solution.href}>Explore {solution.title}</EditorialLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section sectionSoft" id="faqs">
        <div className="shell faqWrap">
          <div className="faqIntro">
            <h2>Questions About Electronics Translation Services</h2>
            <p className="sectionIntro">
              Learn more about supported content, embedded localization, technical files, terminology, AI workflows, quality controls, timelines, and pricing.
            </p>
          </div>
          <div className="faqPanel">
            {faqs.map((faq, index) => (
              <details className="faqItem" key={faq.q} open={index === 0}>
                <summary className="faqButton">
                  <span>{faq.q}</span>
                  <span className="faqToggle" aria-hidden="true">+</span>
                </summary>
                <div className="faqAnswer" id={`faq-answer-${index}`}>{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell">
          <div className="finalCtaPanel">
            <div>
              <h2>Bring Your Next Electronics Product to Global Markets</h2>
              <p>
                Share your technical documentation, software files, product content, target languages, markets, and release requirements. Stepes will help you build a multilingual workflow for the initial launch and every product update that follows.
              </p>
            </div>
            <div className="finalActions">
              <PrimaryButton href={links.quote}>Get a Translation Quote</PrimaryButton>
              <SecondaryButton href={links.contact}>Talk to an Expert</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ElectronicsTranslationServicesWireframe;
