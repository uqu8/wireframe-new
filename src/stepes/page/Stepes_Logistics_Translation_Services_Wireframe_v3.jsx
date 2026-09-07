import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  darkBlush: "#F2A7C6",
  ink: "#171717",
  body: "#3B3B3B",
  muted: "#666666",
  line: "#E7E7E7",
  surface: "#F7F7F7",
  white: "#FFFFFF",
  dark: "#171719",
};

const journey = [
  "Inbound",
  "Warehousing",
  "Inventory",
  "Fulfillment",
  "Freight",
  "Customs",
  "Distribution",
  "Last Mile",
  "Returns",
];

const operations = [
  {
    title: "Freight & Forwarding",
    body:
      "Translate freight documentation, shipment instructions, carrier communications, cargo information, partner content, and freight portals across multimodal logistics networks.",
    items: ["Freight forwarding", "Carrier communications", "Cargo documentation", "Shipment instructions"],
  },
  {
    title: "Warehousing & Distribution",
    body:
      "Keep receiving, put-away, storage, picking, packing, inventory, safety, and distribution-center procedures clear across languages, facilities, and shifts.",
    items: ["Warehouse SOPs", "Work instructions", "Inventory content", "Employee training"],
  },
  {
    title: "3PL & 4PL Programs",
    body:
      "Support multilingual client onboarding, operating playbooks, service documentation, partner portals, account communications, and coordinated logistics programs across regions, facilities, and providers.",
    items: ["Client onboarding", "Operating playbooks", "Partner portals", "Service communications"],
  },
  {
    title: "Fulfillment Operations",
    body:
      "Support fast-moving order processing, ecommerce fulfillment, packing, shipping, returns, and customer-specific handling workflows with consistent multilingual content.",
    items: ["Order workflows", "Pick-and-pack", "Returns processing", "Marketplace fulfillment"],
  },
  {
    title: "Last-Mile & Reverse Logistics",
    body:
      "Localize delivery instructions, tracking messages, shipment exceptions, pickup workflows, customer support, and reverse-logistics content where operations meet the customer experience.",
    items: ["Delivery notices", "Tracking content", "Pickup instructions", "Returns workflows"],
  },
];

const tradeGroups = [
  {
    title: "Customs & Import/Export",
    items: [
      "Customs declarations",
      "Import/export documentation",
      "Certificates of origin",
      "Commercial and proforma invoices",
      "Broker communications",
      "Trade-compliance content",
    ],
  },
  {
    title: "Freight & Shipping",
    items: [
      "Bills of lading",
      "Air waybills",
      "Freight bills",
      "Cargo manifests",
      "Packing lists",
      "Consignment notes",
    ],
  },
  {
    title: "Cross-Border Communications",
    items: [
      "Shipment exceptions",
      "Clearance requests",
      "Documentation queries",
      "Partner communications",
      "Cargo instructions",
      "Customer notifications",
    ],
  },
];

const softwareAreas = [
  {
    title: "Warehouse Management Systems",
    body:
      "Localize WMS interfaces, warehouse dashboards, scanner experiences, inventory workflows, mobile warehouse apps, help content, and training.",
  },
  {
    title: "Freight Transportation Management Systems (TMS)",
    body:
      "Support shipment planning, carrier selection, load management, freight tendering, dispatch, routing, tracking, freight settlement, and carrier or customer portals.",
  },
  {
    title: "AI, Analytics & Logistics Control Towers",
    body:
      "Localize AI-assisted planning and analytics interfaces, predictive insights, ETA and status information, exception alerts, KPI dashboards, customer portals, partner portals, and real-time visibility experiences.",
  },
  {
    title: "Order, Fulfillment & Trade Platforms",
    body:
      "Localize order-management systems, fulfillment platforms, inventory applications, 3PL and 4PL portals, returns systems, customs interfaces, and trade-compliance workflows.",
  },
];

const automationAreas = [
  {
    title: "Warehouse Robotics",
    body:
      "Autonomous mobile robots, AGVs, picking systems, palletizing, sortation, goods-to-person systems, fleet-management software, and robotic cells.",
  },
  {
    title: "Automated Material Handling",
    body:
      "Conveyors, automated storage and retrieval, packaging equipment, pallet handling, loading systems, sensors, and warehouse control systems.",
  },
  {
    title: "Operator & Technician Content",
    body:
      "HMIs, operator manuals, installation instructions, maintenance procedures, troubleshooting, warnings, technician content, and training.",
  },
];

const safetyAreas = [
  {
    title: "Dangerous Goods",
    body:
      "Translate declarations, shipping documentation, handling instructions, warning labels, safety procedures, emergency information, and training with terminology controls and appropriate human oversight.",
  },
  {
    title: "Cold-Chain Logistics",
    body:
      "Support temperature requirements, storage procedures, packaging instructions, monitoring content, excursion procedures, distribution SOPs, and warehouse training.",
  },
  {
    title: "High-Value & Specialized Cargo",
    body:
      "Translate handling requirements, packing instructions, security processes, shipment-specific documentation, site coordination, and technical delivery content.",
  },
];

const contentGroups = [
  {
    title: "Shipping & Freight Documents",
    items: ["Bills of lading", "Air waybills", "Freight bills", "Cargo manifests", "Packing lists", "Shipping instructions"],
  },
  {
    title: "Customs & Trade Documents",
    items: ["Commercial invoices", "Certificates of origin", "Customs declarations", "Import/export files", "Brokerage documentation", "Certificates"],
  },
  {
    title: "Warehouse & Distribution",
    items: ["SOPs", "Work instructions", "Warehouse manuals", "Inventory procedures", "Safety materials", "Signs and labels"],
  },
  {
    title: "Software & Digital Content",
    items: ["WMS/TMS interfaces", "Mobile apps", "Tracking platforms", "Control towers", "Customer portals", "API-driven content"],
  },
  {
    title: "Training & Multimedia",
    items: ["Employee onboarding", "Safety training", "eLearning", "Instructional video", "Subtitles", "Voice-over"],
  },
  {
    title: "Customer & Partner Communications",
    items: ["Tracking notifications", "Delivery messages", "Shipment exceptions", "Returns content", "Customer support", "Partner instructions"],
  },
];

const aiWorkflows = [
  {
    title: "Professional Human Translation",
    label: "Specialized or high-risk content",
    body:
      "Professional linguists lead translation when technical judgment, audience expectations, safety, or business risk call for human-first expertise.",
    items: ["Safety-critical documentation", "Specialized technical content", "Dangerous-goods materials", "Complex trade documentation"],
  },
  {
    title: "AI Translation + Human Review",
    label: "Scale with professional oversight",
    body:
      "AI accelerates suitable high-volume content while professional linguists review meaning, terminology, fluency, consistency, and project requirements.",
    items: ["Operating procedures", "Training", "Software", "Knowledge bases"],
  },
  {
    title: "AI-Enabled Translation",
    label: "Fast-changing lower-risk content",
    body:
      "For appropriate high-volume content, combine AI, terminology, translation memory, automated checks, and targeted validation to improve multilingual availability.",
    items: ["Routine operational content", "Knowledge content", "Status information", "Selected support content"],
  },
];

const workflow = [
  ["Understand", "Confirm content, audience, languages, complexity, risk, formats, and timing."],
  ["Prepare", "Apply terminology, translation memory, product language, references, and instructions."],
  ["Configure", "Select the appropriate human, AI, hybrid, engineering, review, and QA model."],
  ["Translate", "Process documents, software, structured content, training, multimedia, and logistics data."],
  ["Review", "Route content to professional linguists, specialists, or customer reviewers as required."],
  ["Validate", "Check completeness, terminology, numbers, tags, formatting, layout, and file integrity."],
  ["Deliver", "Return production-ready multilingual content in the agreed format or workflow."],
  ["Reuse", "Feed approved content back into language assets for future releases and updates."],
];

const engineeringGroups = [
  {
    title: "Documents & Business Content",
    body: "Word, Excel, PowerPoint, PDF, publishing files, complex tables, forms, manuals, and SOPs.",
    links: [
      ["Document Translation Services", "https://www.stepes.com/document-translation-services/"],
      ["Translation File Format Support", "https://www.stepes.com/resources/file-format-support/"],
    ],
  },
  {
    title: "Software & Structured Content",
    body: "XML, JSON, XLIFF, HTML, CSV, resource files, software strings, protected variables, and structured data.",
    links: [["Software Localization Services", "https://www.stepes.com/software-localization-services/"]],
  },
  {
    title: "Mobile & Handheld Experiences",
    body: "Warehouse mobile apps, scanners, driver and courier apps, tracking applications, inventory tools, and field workflows.",
    links: [["App Localization Services", "https://www.stepes.com/app-localization-services/"]],
  },
  {
    title: "Training & Multimedia",
    body: "LMS and eLearning content, SCORM packages, assessments, training video, subtitles, captions, voice-over, and interactive learning.",
    links: [
      ["eLearning Translation Services", "https://www.stepes.com/elearning-training-translation-services/"],
      ["Multimedia Translation Services", "https://www.stepes.com/multimedia-translation-services/"],
    ],
  },
];

const languageGroups = [
  ["Europe", "Spanish, French, German, Italian, Dutch, Polish, Czech, Romanian, Swedish, Danish, Norwegian, Finnish, Greek, Hungarian and more"],
  ["Asia-Pacific", "Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, Tagalog and more"],
  ["Middle East & Africa", "Arabic, Hebrew, Turkish and additional regional languages"],
  ["Americas", "English, Spanish, Portuguese, French Canadian and other language combinations serving North and South American markets"],
];

const qualityItems = [
  ["Subject-Matter Expertise", "Match professional translators and reviewers to language pair, logistics subject matter, content type, complexity, and audience."],
  ["Controlled Terminology", "Keep process names, equipment, shipment statuses, software labels, products, abbreviations, and specialized logistics terms aligned."],
  ["Translation Memory", "Reuse approved multilingual content where context and requirements align, reducing repeated work across releases and facilities."],
  ["Automated Quality Checks", "Identify potential issues involving completeness, terminology, numbers, variables, tags, formatting, and other measurable criteria."],
  ["Professional Review", "Apply linguistic or specialist review according to the content's visibility, complexity, risk, and program requirements."],
  ["In-Context & Production QA", "Review software, formatted documents, multimedia, and final assets in the context where users will experience them."],
];

const differentiators = [
  ["Logistics & Technical Expertise", "Specialized language support for freight, warehousing, automation, software, safety, training, and commercial content."],
  ["AI + Professional Human Expertise", "Flexible workflows matched to content purpose, scale, quality expectations, confidentiality, and risk."],
  ["One Multilingual Terminology System", "Align logistics vocabulary across warehouse systems, documentation, training, customer communications, and releases."],
  ["Digital Logistics Localization", "Support WMS, TMS, control towers, freight platforms, mobile apps, portals, and tracking experiences."],
  ["Continuous Translation", "Keep frequently changing software, documentation, training, knowledge, and digital logistics content current."],
  ["Enterprise Scale", "Support one urgent shipping document, a multilingual warehouse rollout, or an ongoing global logistics program."],
];

const related = [
  {
    title: "Transportation Translation Services",
    body: "Rail, aviation, road and fleet operations, maritime transportation, mobility systems, transportation technology, maintenance, safety, and passenger content.",
    href: "https://www.stepes.com/transportation-translation-services/",
    linkLabel: "Transportation Translation",
  },
  {
    title: "Supply Chain Translation Services",
    body: "Sourcing, procurement, supplier management, planning, supplier risk, network resilience, and broader global supply-chain management content.",
    href: "https://www.stepes.com/supply-chain-translation/",
    linkLabel: "Supply Chain Translation",
  },
  {
    title: "Robotics Translation Services",
    body: "Warehouse robots, autonomous systems, software interfaces, technical documentation, safety, service, and training.",
    href: "https://www.stepes.com/robotics-translation-services/",
    linkLabel: "Robotics Translation",
  },
  {
    title: "Industrial Automation Translation Services",
    body: "Automated equipment, control technology, operator interfaces, technical documentation, maintenance, and industrial training.",
    href: "https://www.stepes.com/industrial-automation-translation/",
    linkLabel: "Industrial Automation Translation",
  },
  {
    title: "Retail & E-commerce Translation Services",
    body: "Product discovery, shopping, checkout, shipping, delivery, returns, support, and continuously changing digital commerce content.",
    href: "https://www.stepes.com/retail-ecommerce-translation-services/",
    linkLabel: "Retail & E-commerce Translation",
  },
  {
    title: "Manufacturing Translation Services",
    body: "Factories, production operations, equipment, quality, training, suppliers, and global manufacturing networks.",
    href: "https://www.stepes.com/manufacturing-translation-services/",
    linkLabel: "Manufacturing Translation",
  },
  {
    title: "Technical Translation Services",
    body: "Manuals, specifications, procedures, technical documentation, engineering content, safety information, and other complex technical materials.",
    href: "https://www.stepes.com/technical-translation-services/",
    linkLabel: "Technical Translation",
  },
];

const useCases = [
  {
    title: "Global Warehouse Rollout",
    body:
      "Standardize SOPs, work instructions, WMS content, safety materials, signage, onboarding, and employee training across facilities while keeping warehouse terminology aligned.",
    flow: "Shared terminology → SOPs → WMS → Training → Multilingual warehouse launch",
  },
  {
    title: "Cross-Border Ecommerce Expansion",
    body:
      "Connect shipping, tracking, customs, delivery, returns, and support language with the broader ecommerce customer experience across new markets.",
    flow: "Checkout → Fulfillment → Tracking → Delivery → Returns",
  },
  {
    title: "Logistics Software Release",
    body:
      "Combine terminology, translation memory, software localization, professional review, QA, and recurring updates for WMS, TMS, freight, visibility, or fulfillment platforms.",
    flow: "Product update → Changed strings → Translation → Review → QA → Release",
  },
  {
    title: "Global Freight Documentation Program",
    body:
      "Maintain recurring shipping, customs, operational, customer, and partner documentation across regions with centralized terminology and reusable approved language.",
    flow: "Documents → Terminology → Translation memory → Review → Reuse",
  },
];

const faqs = [
  {
    q: "What are logistics translation services?",
    a:
      "Logistics translation services translate and localize the operational, technical, digital, commercial, training, safety, trade, and customer-facing content used to move, store, manage, track, fulfill, and deliver goods across languages and markets. This can include freight documentation, warehouse procedures, customs content, WMS and TMS software, training, tracking messages, and customer communications.",
  },
  {
    q: "What logistics documents can Stepes translate?",
    a:
      "Stepes translates bills of lading, air waybills, freight bills, packing lists, commercial invoices, certificates of origin, customs documents, consignment notes, cargo documentation, warehouse SOPs, work instructions, safety materials, training content, shipping instructions, and related operational documentation.",
  },
  {
    q: "What is the difference between logistics translation and transportation translation?",
    a:
      "Logistics translation focuses primarily on the operational coordination of goods across freight, warehousing, fulfillment, customs, distribution, tracking, last-mile delivery, and returns. Transportation translation focuses more broadly on the systems and modes used to move people and goods, including rail, aviation, road and fleet operations, maritime transportation, equipment, maintenance, infrastructure, safety, and passenger experiences.",
  },
  {
    q: "What is the difference between logistics translation and supply chain translation?",
    a:
      "Logistics is primarily concerned with executing the movement, storage, fulfillment, and delivery of goods. Supply-chain management extends further across sourcing, procurement, supplier management, planning, manufacturing networks, inventory strategy, supplier risk, resilience, and strategic network management.",
  },
  {
    q: "Can Stepes translate WMS and TMS software?",
    a:
      "Yes. Stepes localizes warehouse management systems, transportation management systems, freight-management applications, order-management platforms, inventory systems, logistics control towers, tracking systems, mobile apps, carrier portals, customer portals, and related help, documentation, and training.",
  },
  {
    q: "Does Stepes support logistics translation APIs and continuous localization?",
    a:
      "Yes. Stepes can connect translation workflows with digital platforms and recurring content pipelines through APIs, automation, translation memory, terminology management, and continuous localization. These workflows are especially useful for logistics software, tracking content, knowledge bases, ecommerce logistics, and other frequently changing multilingual content.",
  },
  {
    q: "Can Stepes translate dangerous-goods and safety documentation?",
    a:
      "Yes. Stepes supports translation of dangerous-goods documentation, handling instructions, safety procedures, warnings, labels, training, emergency information, and related logistics content. Workflows can include specialized linguists, controlled terminology, professional review, and project-specific QA. Customers remain responsible for determining applicable regulations, classifications, prescribed documentation, and final compliance requirements.",
  },
  {
    q: "Can Stepes support warehouse automation and logistics robotics translation?",
    a:
      "Yes. Stepes translates technical documentation, operator instructions, software interfaces, HMIs, maintenance procedures, safety materials, training, and support content for warehouse automation and logistics robotics.",
  },
  {
    q: "Does Stepes use AI for logistics translation?",
    a:
      "Yes. Stepes supports professional human translation, AI translation with professional human review, and AI-enabled workflows for appropriate content. The best approach depends on subject matter, audience, content volume, quality requirements, confidentiality, intended use, and business risk.",
  },
  {
    q: "How does Stepes keep logistics terminology consistent?",
    a:
      "Stepes can maintain client-specific glossaries, terminology databases, translation memory, style instructions, and approved translations across projects. These language assets help keep terminology consistent across warehouse software, freight documents, SOPs, training, customer communications, and future updates.",
  },
  {
    q: "What languages does Stepes support for logistics translation?",
    a:
      "Stepes provides logistics translation services in 100+ languages, including Spanish, French, German, Chinese, Japanese, Korean, Portuguese, Italian, Dutch, Polish, Arabic, Vietnamese, Thai, Indonesian, Turkish, and many others.",
  },
  {
    q: "Can Stepes support ongoing enterprise logistics translation programs?",
    a:
      "Yes. Stepes supports both individual projects and ongoing multilingual logistics programs. Enterprise workflows can combine professional linguists, AI-enabled translation, translation memory, terminology management, APIs, workflow automation, review, QA, and recurring localization across facilities, systems, business units, and markets.",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12.5l4.1 4L19 7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarehouseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M3 9.5 12 4l9 5.5V20H3V9.5Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7 20v-6h10v6M7 10h2M11 10h2M15 10h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="m4 7 8-4 8 4v10l-8 4-8-4V7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m4 7 8 4 8-4M12 11v10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 12h17M12 3c2.7 2.5 4.1 5.5 4.1 9S14.7 18.5 12 21M12 3C9.3 5.5 7.9 8.5 7.9 12S9.3 18.5 12 21" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ScreenIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <rect x="3" y="4" width="18" height="13" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 21h8M12 17v4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
      <path d="M12 3 20 6v6c0 4.8-3.2 7.5-8 9-4.8-1.5-8-4.2-8-9V6l8-3Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m8.2 12.2 2.4 2.4 5.3-5.4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LinkArrow({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = true, dark = false, className = "" }) {
  return (
    <div className={`section-heading ${centered ? "section-heading--centered" : ""} ${className}`}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow--dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function LogisticsHeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 500" role="img">
        <g fill="none" stroke="#3F3F43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M92 350h440" opacity=".42" />
          <path d="M125 332V170l133-63 134 63v162" />
          <path d="M258 107v225" opacity=".55" />
          <path d="M125 170h267" opacity=".55" />
          <path d="M148 202h88M148 230h88M148 258h88M148 286h88" opacity=".65" />
          <path d="M282 202h86M282 230h86M282 258h86M282 286h86" opacity=".65" />
          <path d="M411 278h100l34 32v40H397v-58z" />
          <circle cx="433" cy="351" r="17" />
          <circle cx="513" cy="351" r="17" />
          <path d="M419 310h42v-27M461 310h62" />
          <path d="M78 372h445" opacity=".25" />
          <rect x="101" y="316" width="44" height="34" rx="3" />
          <rect x="151" y="307" width="54" height="43" rx="3" />
          <path d="M112 316v-17h22v17M166 307v-18h24v18" />
          <path d="M93 152c31-46 75-74 131-83" opacity=".28" />
          <path d="M401 133c47 17 87 53 106 98" opacity=".28" />
          <path d="M79 143l15 9-7 16" />
          <path d="m513 217-7 16-16-5" />
        </g>
        <g fill="#C11D63">
          <rect x="297" y="190" width="18" height="18" rx="4" opacity=".95" />
          <circle cx="473" cy="126" r="8" opacity=".9" />
          <circle cx="80" cy="255" r="7" opacity=".9" />
        </g>
        <g fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5">
          <rect x="439" y="83" width="84" height="56" rx="12" />
          <path d="M456 105h50M456 116h38" fill="none" stroke="#C11D63" strokeLinecap="round" />
          <rect x="53" y="230" width="86" height="58" rx="12" />
          <path d="M70 251h51M70 263h34" fill="none" stroke="#C11D63" strokeLinecap="round" />
        </g>
        <g fill="#FFFFFF" stroke="#3F3F43" strokeWidth="1.7">
          <rect x="217" y="330" width="82" height="52" rx="8" />
          <path d="M235 348h46M235 360h31" fill="none" stroke="#3F3F43" strokeLinecap="round" opacity=".7" />
        </g>
      </svg>
    </div>
  );
}

function DigitalLogisticsMockup() {
  const lanes = ["Inbound dock", "Pick wave", "Outbound load"];
  return (
    <div className="dashboard" aria-label="Illustrative logistics operations dashboard">
      <div className="dashboard__top">
        <div>
          <span className="mock-label">LOGISTICS CONTROL TOWER</span>
          <strong>Global operations</strong>
        </div>
        <span className="status-dot">Live</span>
      </div>
      <div className="dashboard__stats">
        <div><span>Shipments</span><strong>Active</strong></div>
        <div><span>Localization</span><strong>Current</strong></div>
        <div><span>Exceptions</span><strong>Review</strong></div>
      </div>
      <div className="dashboard__body">
        <div className="dashboard__map">
          <div className="map-route route-a" />
          <div className="map-route route-b" />
          <div className="map-node node-a" />
          <div className="map-node node-b" />
          <div className="map-node node-c" />
          <div className="map-card">Hamburg DC<br /><span>Outbound ready</span></div>
        </div>
        <div className="dashboard__list">
          {lanes.map((lane, i) => (
            <div className="dashboard__row" key={lane}>
              <span className="row-dot" />
              <div><strong>{lane}</strong><span>{i === 1 ? "Review required" : "Localized & current"}</span></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AutomationArt() {
  return (
    <div className="automation-art" aria-hidden="true">
      <svg viewBox="0 0 560 420">
        <g fill="none" stroke="#414145" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M62 335h432" opacity=".35" />
          <path d="M89 103v218M137 103v218M185 103v218" opacity=".85" />
          <path d="M76 128h123M76 175h123M76 222h123M76 269h123" opacity=".6" />
          <rect x="92" y="137" width="29" height="27" rx="3" />
          <rect x="143" y="186" width="30" height="26" rx="3" />
          <rect x="101" y="234" width="43" height="27" rx="3" />
          <path d="M242 323h165" />
          <rect x="274" y="282" width="82" height="41" rx="9" />
          <circle cx="294" cy="326" r="10" />
          <circle cx="338" cy="326" r="10" />
          <path d="M316 282v-50M316 232l40-23M356 209l31 19" />
          <circle cx="316" cy="232" r="8" />
          <circle cx="356" cy="209" r="8" />
          <circle cx="387" cy="228" r="8" />
          <path d="M387 236v27" />
          <path d="M436 154h58v90h-58z" />
          <path d="M446 173h38M446 190h29M446 207h34" opacity=".65" />
          <path d="M244 99c60-38 130-36 187 4" opacity=".25" />
        </g>
        <g fill="#C11D63">
          <circle cx="244" cy="99" r="7" />
          <circle cx="431" cy="103" r="7" />
          <rect x="452" y="222" width="25" height="7" rx="3" />
        </g>
        <rect x="233" y="122" width="88" height="62" rx="12" fill="#FDF2F7" stroke="#C11D63" strokeWidth="1.5" />
        <path d="M250 144h52M250 157h39" fill="none" stroke="#C11D63" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function FAQItem({ item, open, onToggle }) {
  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      {open ? <div className="faq-answer"><p>{item.a}</p></div> : null}
    </div>
  );
}

export default function LogisticsTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page logistics-page">
      <style>{`
        :root {
          --magenta: ${COLORS.magenta};
          --magenta-dark: ${COLORS.magentaDark};
          --burgundy: ${COLORS.burgundy};
          --blush: ${COLORS.blush};
          --dark-blush: ${COLORS.darkBlush};
          --ink: ${COLORS.ink};
          --body: ${COLORS.body};
          --muted: ${COLORS.muted};
          --line: ${COLORS.line};
          --surface: ${COLORS.surface};
          --white: ${COLORS.white};
          --dark: ${COLORS.dark};
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-page {
          width: 100%;
          overflow-x: clip;
          color: var(--body);
          background: var(--white);
          font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }
        .stepes-page a { color: inherit; text-decoration: none; }
        .stepes-page svg { max-width: 100%; }
        .hero-grid > *, .editorial-split > *, .trade-grid > *, .digital-grid > *, .automation-grid > *, .terminology-grid > *, .quality-grid > *, .cta-box > * { min-width: 0; }
        .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        section { position: relative; }
        .section-pad { padding: 96px 0; }
        .section-pad--dense { padding: 80px 0; }
        .surface { background: var(--surface); }
        .blush { background: var(--blush); }
        .dark-section { background: var(--dark); color: #F7F7F8; }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
          letter-spacing: .15em !important;
          text-transform: uppercase;
          font-weight: 600 !important;
          margin: 0 0 18px !important;
        }
        .eyebrow--dark { color: var(--dark-blush) !important; }
        h1, h2, h3, h4 { color: var(--ink); font-weight: 600; margin: 0; letter-spacing: -.025em; }
        h1 { font-size: 48px; line-height: 1.06; max-width: 690px; }
        h2 { font-size: 36px; line-height: 1.13; }
        h3 { font-size: 24px; line-height: 1.22; }
        h4 { font-size: 18px; line-height: 1.28; }
        .dark-section h2, .dark-section h3, .dark-section h4 { color: #FFFFFF; }
        p { margin: 0; font-size: 16px; }
        .body-large { font-size: 18px; line-height: 1.65; }
        .section-heading { max-width: 820px; margin-bottom: 52px; }
        .section-heading--centered { text-align: center; margin-left: auto; margin-right: auto; }
        .section-intro { margin-top: 18px; font-size: 18px; line-height: 1.65; color: #4E4E52; }
        .dark-section .section-intro { color: #C9C9CE; }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; }
        .btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease;
          border: 1px solid transparent;
        }
        .btn:hover { transform: translateY(-1px); }
        .btn:focus-visible, .editorial-link:focus-visible, .faq-question:focus-visible {
          outline: 3px solid rgba(193,29,99,.22);
          outline-offset: 3px;
        }
        .btn-primary, .btn-primary:link, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible {
          background: var(--magenta);
          color: #FFFFFF !important;
        }
        .btn-primary * { color: #FFFFFF !important; stroke: currentColor; }
        .btn-primary:hover { background: var(--magenta-dark); box-shadow: 0 10px 24px rgba(193,29,99,.14); }
        .btn-secondary { background: #FFFFFF; border-color: #D8D8DA; color: #232326; }
        .btn-secondary:hover { border-color: #BEBEC2; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: var(--magenta) !important;
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          min-height: 44px;
        }
        .editorial-link svg { transition: transform .18s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 64%, #FBFBFB 100%); }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); align-items: center; gap: 70px; }
        .hero-copy { max-width: 700px; }
        .hero-copy .body-large { max-width: 690px; margin-top: 24px; color: #48484C; }
        .hero-trust { margin-top: 30px; font-size: 16px; color: #55555A; font-weight: 600; letter-spacing: .01em; }
        .hero-art { width: 100%; max-width: 590px; justify-self: end; }
        .hero-art svg { width: 100%; height: auto; display: block; }
        .proof-bar { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #FFFFFF; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .proof-item { padding: 28px 28px 30px; min-height: 132px; }
        .proof-item + .proof-item { border-left: 1px solid var(--line); }
        .proof-item h3 { font-size: 20px; margin-bottom: 8px; }
        .proof-item p { color: #5A5A5F; }
        .journey-wrap { background: #FFFFFF; border: 1px solid #ECECEE; border-radius: 30px; padding: 32px; box-shadow: 0 18px 50px rgba(20,20,22,.04); }
        .journey-line { display: grid; grid-template-columns: repeat(9, minmax(0,1fr)); align-items: stretch; }
        .journey-step { position: relative; min-height: 110px; display: flex; flex-direction: column; justify-content: center; padding: 14px 14px 14px 18px; }
        .journey-step:not(:last-child)::after { content: ""; position: absolute; top: 50%; right: -4px; width: 8px; height: 8px; border-top: 1.5px solid #A2A2A6; border-right: 1.5px solid #A2A2A6; transform: translateY(-50%) rotate(45deg); }
        .journey-step span { font-size: 11px; color: var(--magenta); font-weight: 600; letter-spacing: .13em; text-transform: uppercase; margin-bottom: 8px; }
        .journey-step strong { font-size: 16px; color: #29292C; font-weight: 600; }
        .journey-caption { margin-top: 24px; color: #55555A; max-width: 920px; }
        .editorial-split { display: grid; grid-template-columns: .78fr 1.22fr; gap: 88px; align-items: start; }
        .sticky-copy { position: sticky; top: 40px; }
        .sticky-copy .body-large { margin-top: 20px; color: #545458; }
        .sticky-copy .editorial-link { margin-top: 18px; }
        .editorial-rows { border-top: 1px solid var(--line); }
        .editorial-row { padding: 30px 0 32px; border-bottom: 1px solid var(--line); }
        .editorial-row h3 { margin-bottom: 12px; }
        .editorial-row > p { color: #505055; }
        .mini-list { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 16px; }
        .mini-list span { position: relative; padding-left: 14px; color: #5A5A5F; font-size: 16px; }
        .mini-list span::before { content: ""; position: absolute; left: 0; top: .72em; width: 5px; height: 5px; border-radius: 50%; background: #A3A3A8; transform: translateY(-50%); }
        .trade-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
        .doc-stack { position: relative; min-height: 460px; }
        .doc-card { position: absolute; width: 72%; min-height: 310px; border-radius: 24px; background: #FFFFFF; border: 1px solid #E2E2E5; box-shadow: 0 18px 38px rgba(18,18,20,.06); padding: 30px; }
        .doc-card:nth-child(1) { left: 0; top: 64px; transform: rotate(-4deg); }
        .doc-card:nth-child(2) { right: 0; top: 18px; transform: rotate(3deg); }
        .doc-card__label { font-size: 11px; letter-spacing: .13em; color: var(--magenta); font-weight: 600; text-transform: uppercase; }
        .doc-card h3 { margin-top: 12px; font-size: 22px; }
        .doc-lines { display: grid; gap: 12px; margin-top: 28px; }
        .doc-line { height: 8px; border-radius: 6px; background: #EAEAEC; }
        .doc-line.short { width: 64%; }
        .doc-seal { width: 58px; height: 58px; border-radius: 50%; border: 2px solid #D7A1B8; display: flex; align-items: center; justify-content: center; color: var(--magenta); margin-top: 30px; font-weight: 600; }
        .trade-list { display: grid; gap: 0; border-top: 1px solid var(--line); }
        .trade-group { padding: 24px 0 26px; border-bottom: 1px solid var(--line); }
        .trade-group h3 { font-size: 21px; margin-bottom: 12px; }
        .bullet-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 7px 22px; }
        .bullet-grid span { position: relative; padding-left: 14px; color: #55555A; font-size: 16px; }
        .bullet-grid span::before { content: ""; position: absolute; left: 0; top: .72em; width: 5px; height: 5px; border-radius: 50%; background: #A1A1A6; transform: translateY(-50%); }
        .trade-note { margin-top: 24px; padding: 18px 20px; border-left: 3px solid #D7D7DA; background: #F8F8F8; color: #57575B; }
        .digital-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: center; }
        .digital-copy .section-heading { margin-bottom: 30px; }
        .digital-links { display: flex; flex-wrap: wrap; gap: 0 26px; margin: 18px 0 10px; }
        .software-list { margin-top: 26px; border-top: 1px solid #E1CDD6; }
        .software-item { padding: 20px 0 22px; border-bottom: 1px solid #E1CDD6; }
        .software-item h3 { font-size: 20px; margin-bottom: 8px; }
        .software-item p { color: #57575B; }
        .dashboard { background: #FFFFFF; border: 1px solid #E7D7DE; border-radius: 28px; box-shadow: 0 28px 70px rgba(86,20,50,.08); overflow: hidden; }
        .dashboard__top { min-height: 86px; padding: 20px 24px; display: flex; align-items: center; justify-content: space-between; gap: 20px; border-bottom: 1px solid #ECE4E7; }
        .dashboard__top strong { display: block; color: #222226; font-size: 21px; margin-top: 4px; }
        .mock-label { font-size: 11px; letter-spacing: .13em; font-weight: 600; color: var(--magenta); }
        .status-dot { font-size: 14px; color: #55555A; position: relative; padding-left: 16px; }
        .status-dot::before { content: ""; width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); position: absolute; left: 0; top: 50%; transform: translateY(-50%); }
        .dashboard__stats { display: grid; grid-template-columns: repeat(3, 1fr); border-bottom: 1px solid #ECE4E7; }
        .dashboard__stats > div { padding: 18px 20px; }
        .dashboard__stats > div + div { border-left: 1px solid #ECE4E7; }
        .dashboard__stats span { display: block; font-size: 14px; color: #77777B; }
        .dashboard__stats strong { font-size: 22px; color: #28282C; }
        .dashboard__body { display: grid; grid-template-columns: 1.2fr .8fr; min-height: 330px; }
        .dashboard__map { position: relative; background: linear-gradient(135deg, #FBF6F8, #F8F8F8); overflow: hidden; }
        .dashboard__map::before, .dashboard__map::after { content: ""; position: absolute; border: 1px solid #E8DFE3; border-radius: 50%; }
        .dashboard__map::before { width: 300px; height: 300px; left: -70px; top: 30px; }
        .dashboard__map::after { width: 220px; height: 220px; right: -90px; bottom: -60px; }
        .map-route { position: absolute; height: 2px; background: #B8B8BC; transform-origin: left center; }
        .route-a { width: 180px; left: 90px; top: 150px; transform: rotate(-18deg); }
        .route-b { width: 145px; left: 180px; top: 150px; transform: rotate(32deg); }
        .map-node { position: absolute; width: 12px; height: 12px; border-radius: 50%; background: var(--magenta); box-shadow: 0 0 0 5px rgba(193,29,99,.12); z-index: 2; }
        .node-a { left: 84px; top: 145px; }
        .node-b { left: 253px; top: 91px; }
        .node-c { left: 302px; top: 225px; }
        .map-card { position: absolute; left: 54px; bottom: 36px; background: #FFFFFF; border: 1px solid #E8E8EA; box-shadow: 0 10px 28px rgba(0,0,0,.05); border-radius: 13px; padding: 13px 15px; color: #2F2F33; font-size: 14px; font-weight: 600; z-index: 3; }
        .map-card span { font-size: 14px; font-weight: 400; color: #77777B; }
        .dashboard__list { padding: 12px 18px; background: #FFFFFF; }
        .dashboard__row { display: grid; grid-template-columns: 12px 1fr; gap: 10px; align-items: start; padding: 18px 0; border-bottom: 1px solid #EEEEF0; }
        .dashboard__row:last-child { border-bottom: 0; }
        .row-dot { width: 7px; height: 7px; border-radius: 50%; background: #A9A9AE; margin-top: 8px; }
        .dashboard__row strong { display: block; color: #313135; font-size: 16px; }
        .dashboard__row span { display: block; color: #77777B; font-size: 14px; margin-top: 3px; }
        .automation-grid { display: grid; grid-template-columns: 1.08fr .92fr; gap: 72px; align-items: center; }
        .automation-art { width: 100%; }
        .automation-art svg { width: 100%; height: auto; display: block; }
        .automation-list { margin-top: 30px; border-top: 1px solid var(--line); }
        .automation-links { margin-top: 22px; display: flex; gap: 0 24px; flex-wrap: wrap; }
        .automation-item { display: grid; grid-template-columns: 42px 1fr; gap: 18px; padding: 22px 0 24px; border-bottom: 1px solid var(--line); }
        .icon-box { width: 42px; height: 42px; border-radius: 12px; background: #F5F5F6; display: flex; align-items: center; justify-content: center; color: #505055; }
        .automation-item h3 { font-size: 20px; margin-bottom: 7px; }
        .automation-item p { color: #56565A; }
        .commerce-journey { display: grid; grid-template-columns: repeat(7, 1fr); gap: 0; margin-top: 44px; border-top: 1px solid #3A3A3E; border-bottom: 1px solid #3A3A3E; }
        .commerce-step { position: relative; padding: 24px 15px; min-height: 100px; display: flex; align-items: center; justify-content: center; text-align: center; font-weight: 600; color: #FFFFFF; }
        .commerce-step + .commerce-step { border-left: 1px solid #3A3A3E; }
        .commerce-copy { max-width: 840px; margin: 30px auto 0; text-align: center; color: #C9C9CE; font-size: 18px; }
        .commerce-link { margin-top: 28px; text-align: center; }
        .commerce-list { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 42px; border-top: 1px solid #3A3A3E; }
        .commerce-list div { padding: 22px 22px 2px 0; border-right: 1px solid #3A3A3E; }
        .commerce-list div:last-child { border-right: 0; }
        .commerce-list h3 { font-size: 19px; margin-bottom: 10px; }
        .commerce-list p { color: #C9C9CE; }
        .safety-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .safety-item { padding: 34px 34px 36px 0; }
        .safety-item + .safety-item { border-left: 1px solid var(--line); padding-left: 34px; }
        .safety-item h3 { margin: 18px 0 12px; }
        .safety-item p { color: #55555A; }
        .safety-note { margin-top: 34px; max-width: 900px; color: #5D5D61; }
        .terminology-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 78px; align-items: center; }
        .term-visual { border-radius: 28px; border: 1px solid #E4E4E6; background: #FFFFFF; padding: 28px; box-shadow: 0 18px 44px rgba(0,0,0,.04); }
        .term-flow { display: grid; gap: 13px; }
        .term-node { display: flex; align-items: center; gap: 15px; min-height: 62px; border: 1px solid #E8E8EA; border-radius: 15px; padding: 13px 16px; color: #323236; background: #FFFFFF; }
        .term-node span:first-child { width: 12px; height: 12px; border-radius: 50%; background: var(--magenta); display: block; flex: 0 0 auto; }
        .term-arrow { height: 13px; width: 1px; background: #C9C9CD; margin-left: 31px; position: relative; }
        .term-arrow::after { content: ""; position: absolute; bottom: -1px; left: -3px; width: 6px; height: 6px; border-right: 1px solid #AFAFB4; border-bottom: 1px solid #AFAFB4; transform: rotate(45deg); }
        .term-copy .body-large { margin-top: 20px; color: #515156; }
        .term-points { margin: 28px 0 20px; border-top: 1px solid var(--line); }
        .term-point { padding: 18px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 24px 1fr; gap: 12px; }
        .term-point svg { color: var(--magenta); margin-top: 3px; }
        .term-links { display: flex; gap: 24px; flex-wrap: wrap; }
        .content-matrix { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #FFFFFF; }
        .content-group { padding: 30px; min-height: 280px; }
        .content-group:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .content-group:not(:nth-child(3n+1)) { border-left: 1px solid var(--line); }
        .content-group h3 { font-size: 21px; margin-bottom: 18px; }
        .plain-list { list-style: none; padding: 0; margin: 0; display: grid; gap: 9px; }
        .plain-list li { position: relative; padding-left: 14px; color: #56565A; font-size: 16px; }
        .plain-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 5px; height: 5px; border-radius: 50%; background: #A2A2A7; transform: translateY(-50%); }
        .ai-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 22px; }
        .ai-card { background: #FFFFFF; border: 1px solid #E5DDE1; border-radius: 26px; padding: 30px; min-height: 470px; display: flex; flex-direction: column; }
        .ai-card__label { color: var(--magenta); font-size: 16px; line-height: 1.45; font-weight: 600; }
        .ai-card h3 { margin-top: 14px; font-size: 23px; }
        .ai-card > p { margin-top: 16px; color: #55555A; }
        .ai-card .plain-list { margin-top: 22px; padding-top: 22px; border-top: 1px solid #EEE7EA; }
        .ai-flow { margin-top: auto; padding-top: 26px; color: #4D4D51; font-size: 16px; font-weight: 600; }
        .ai-principle { margin: 34px auto 0; max-width: 900px; text-align: center; font-size: 18px; color: #4D4D51; }
        .workflow-wrap { border-top: 1px solid #3A3A3E; }
        .workflow-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .workflow-step { padding: 28px 26px 32px 0; min-height: 210px; border-bottom: 1px solid #3A3A3E; }
        .workflow-step:not(:nth-child(4n+1)) { border-left: 1px solid #3A3A3E; padding-left: 26px; }
        .workflow-num { color: var(--dark-blush); font-size: 14px; font-weight: 600; letter-spacing: .08em; }
        .workflow-step h3 { margin: 12px 0 10px; font-size: 20px; }
        .workflow-step p { color: #C9C9CE; }
        .continuous-panel { border-radius: 30px; border: 1px solid #E7D4DC; background: #FFFFFF; padding: 34px; box-shadow: 0 20px 55px rgba(100,23,58,.05); }
        .continuous-flow { display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); align-items: stretch; }
        .continuous-step { position: relative; padding: 18px 16px; min-height: 114px; background: #FCFAFB; border: 1px solid #EEE3E8; margin-left: -1px; }
        .continuous-step:first-child { border-radius: 16px 0 0 16px; margin-left: 0; }
        .continuous-step:last-child { border-radius: 0 16px 16px 0; }
        .continuous-step span { display: block; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .11em; text-transform: uppercase; margin-bottom: 7px; }
        .continuous-step strong { color: #303034; font-size: 16px; }
        .continuous-benefits { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 34px; border-top: 1px solid var(--line); }
        .continuous-benefit { padding: 24px 24px 0 0; }
        .continuous-benefit + .continuous-benefit { border-left: 1px solid var(--line); padding-left: 24px; }
        .continuous-benefit h3 { font-size: 19px; margin-bottom: 8px; }
        .continuous-benefit p { color: #57575B; }
        .continuous-links { display: flex; flex-wrap: wrap; gap: 0 26px; margin-top: 28px; }
        .engineering-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .engineering-item { padding: 32px 32px 34px 0; border-bottom: 1px solid var(--line); }
        .engineering-item:nth-child(even) { padding-left: 32px; border-left: 1px solid var(--line); }
        .engineering-item h3 { margin-bottom: 10px; }
        .engineering-item p { color: #56565A; }
        .engineering-links { display: flex; flex-wrap: wrap; gap: 0 24px; margin-top: 15px; }
        .languages-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .language-row { display: grid; grid-template-columns: 150px 1fr; gap: 24px; padding: 28px 30px 30px 0; border-bottom: 1px solid var(--line); }
        .language-row:nth-child(even) { padding-left: 30px; border-left: 1px solid var(--line); }
        .language-row h3 { font-size: 19px; }
        .language-row p { color: #5A5A5F; }
        .languages-link { margin-top: 28px; text-align: center; }
        .quality-grid { display: grid; grid-template-columns: .8fr 1.2fr; gap: 76px; align-items: start; }
        .quality-copy { position: sticky; top: 40px; }
        .quality-copy p { margin-top: 20px; color: #C9C9CE; font-size: 18px; }
        .quality-list { border-top: 1px solid #3B3B40; }
        .quality-item { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 23px 0 25px; border-bottom: 1px solid #3B3B40; }
        .quality-icon { width: 42px; height: 42px; border-radius: 12px; background: rgba(255,255,255,.06); display: flex; align-items: center; justify-content: center; color: var(--dark-blush); }
        .quality-item h3 { font-size: 20px; margin-bottom: 7px; }
        .quality-item p { color: #C9C9CE; }
        .quality-link { margin-top: 28px; }
        .dark-section .editorial-link { color: var(--dark-blush) !important; }
        .why-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .why-item { padding: 30px; min-height: 230px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .why-icon { width: 44px; height: 44px; border-radius: 13px; display: flex; align-items: center; justify-content: center; background: var(--blush); color: var(--magenta); margin-bottom: 20px; }
        .why-item h3 { font-size: 20px; margin-bottom: 10px; }
        .why-item p { color: #57575B; }
        .related-list { border-top: 1px solid var(--line); }
        .related-row { display: grid; grid-template-columns: 300px minmax(0,1fr) auto; gap: 34px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .related-row h3 { font-size: 20px; }
        .related-row p { color: #57575B; }
        .related-row .editorial-link { white-space: nowrap; }
        .usecases { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .usecase { border: 1px solid var(--line); border-radius: 24px; background: #FFFFFF; padding: 28px; min-height: 270px; }
        .usecase h3 { margin-bottom: 12px; }
        .usecase > p { color: #57575B; }
        .usecase-flow { margin-top: 24px; padding-top: 20px; border-top: 1px solid var(--line); color: #38383C; font-weight: 600; }
        .faq-panel { border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; background: transparent; border: 0; padding: 22px 0; min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; color: var(--ink); font-family: inherit; font-size: 18px; font-weight: 600; cursor: pointer; }
        .faq-plus { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #D7D7DA; display: inline-flex; align-items: center; justify-content: center; color: #55555A; flex: 0 0 auto; font-size: 21px; font-weight: 400; }
        .faq-answer { padding: 0 58px 24px 0; max-width: 840px; }
        .faq-answer p { color: #55555A; }
        .final-cta { padding: 88px 0; background: var(--blush); }
        .cta-box { border: 1px solid #E8D6DE; background: #FFFFFF; border-radius: 30px; padding: 54px 58px; display: grid; grid-template-columns: 1fr auto; gap: 46px; align-items: center; box-shadow: 0 18px 50px rgba(105,24,61,.05); }
        .cta-copy { max-width: 790px; }
        .cta-copy h2 { font-size: 36px; }
        .cta-copy p { margin-top: 18px; font-size: 18px; color: #515156; }
        .cta-actions { display: flex; flex-direction: column; gap: 12px; min-width: 250px; }

        @media (max-width: 1100px) {
          .shell { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: 1fr .9fr; gap: 42px; }
          .proof-item { padding-left: 20px; padding-right: 20px; }
          .journey-line { grid-template-columns: repeat(5, 1fr); }
          .journey-step { border-bottom: 1px solid #EEEEF0; }
          .journey-step:nth-child(5n)::after { display: none; }
          .editorial-split, .trade-grid, .digital-grid, .automation-grid, .terminology-grid, .quality-grid { gap: 54px; }
          .content-matrix { grid-template-columns: repeat(2, 1fr); }
          .content-group:nth-child(-n+3) { border-bottom: 0; }
          .content-group { border-bottom: 1px solid var(--line) !important; }
          .content-group:not(:nth-child(3n+1)) { border-left: 0; }
          .content-group:nth-child(even) { border-left: 1px solid var(--line); }
          .commerce-list { grid-template-columns: repeat(2, 1fr); }
          .commerce-list div:nth-child(2) { border-right: 0; }
          .commerce-list div:nth-child(-n+2) { border-bottom: 1px solid #3A3A3E; padding-bottom: 22px; }
          .related-row { grid-template-columns: 250px 1fr auto; gap: 22px; }
        }

        @media (max-width: 860px) {
          .shell { width: calc(100% - 48px); }
          .section-pad { padding: 80px 0; }
          .section-pad--dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-grid { grid-template-columns: 1fr; gap: 44px; }
          .hero-copy { max-width: 780px; margin: 0 auto; text-align: center; }
          .hero-copy h1 { max-width: 760px; margin-left: auto; margin-right: auto; }
          .hero-copy .body-large { margin-left: auto; margin-right: auto; }
          .hero-copy .eyebrow { text-align: center; }
          .hero-copy .btn-row { justify-content: center; }
          .hero-trust { text-align: center; max-width: 680px; margin-left: auto; margin-right: auto; }
          .hero-art { justify-self: center; max-width: 560px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .proof-item:nth-child(4) { border-top: 1px solid var(--line); }
          .journey-line { grid-template-columns: repeat(3, 1fr); }
          .journey-step:nth-child(5n)::after { display: block; }
          .journey-step:nth-child(3n)::after { display: none; }
          .editorial-split, .trade-grid, .digital-grid, .automation-grid, .terminology-grid, .quality-grid { grid-template-columns: 1fr; }
          .sticky-copy, .quality-copy { position: static; }
          .mobile-heading-group, .mobile-center-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .mobile-center-heading .eyebrow { text-align: center; }
          .mobile-center-heading .section-intro { text-align: left; }
          .section-heading--centered .section-intro { text-align: left; }
          .digital-copy .section-heading, .automation-grid > div:first-child .section-heading, .term-copy .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .digital-copy .section-heading .eyebrow, .term-copy .section-heading .eyebrow { text-align: center; }
          .digital-copy .section-heading .section-intro, .automation-grid > div:first-child .section-intro, .term-copy .section-heading .section-intro { text-align: left; }
          .editorial-split > .section-heading, .trade-grid .section-heading, .automation-grid .section-heading, .terminology-grid .section-heading, .quality-grid .section-heading { max-width: 760px; }
          .doc-stack { max-width: 590px; margin: 0 auto; width: 100%; }
          .dashboard { max-width: 680px; margin: 0 auto; width: 100%; }
          .automation-art { max-width: 620px; margin: 0 auto; }
          .commerce-journey { grid-template-columns: repeat(4, 1fr); }
          .commerce-step:nth-child(5) { border-left: 0; border-top: 1px solid #3A3A3E; }
          .commerce-step:nth-child(n+5) { border-top: 1px solid #3A3A3E; }
          .safety-grid { grid-template-columns: 1fr; }
          .safety-item { padding: 28px 0; }
          .safety-item + .safety-item { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
          .term-visual { max-width: 640px; margin: 0 auto; width: 100%; }
          .ai-grid { grid-template-columns: 1fr; }
          .ai-card { min-height: 0; }
          .workflow-grid { grid-template-columns: repeat(2, 1fr); }
          .workflow-step:not(:nth-child(4n+1)) { border-left: 0; padding-left: 0; }
          .workflow-step:nth-child(even) { border-left: 1px solid #3A3A3E; padding-left: 26px; }
          .continuous-flow { grid-template-columns: repeat(3, 1fr); }
          .continuous-step { margin: -1px 0 0 -1px; }
          .continuous-step:first-child { border-radius: 16px 0 0 0; margin-top: 0; }
          .continuous-step:nth-child(3) { border-radius: 0 16px 0 0; }
          .continuous-step:last-child { border-radius: 0 0 16px 0; }
          .continuous-step:nth-child(4) { border-radius: 0 0 0 16px; }
          .continuous-benefits { grid-template-columns: repeat(2, 1fr); }
          .continuous-benefit:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; padding-top: 24px; }
          .continuous-benefit:nth-child(4) { border-top: 1px solid var(--line); padding-top: 24px; }
          .languages-grid { grid-template-columns: 1fr; }
          .language-row:nth-child(even) { padding-left: 0; border-left: 0; }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .related-row { grid-template-columns: 1fr auto; gap: 10px 24px; }
          .related-row p { grid-column: 1 / -1; grid-row: 2; }
          .usecases { grid-template-columns: 1fr; }
          .cta-box { grid-template-columns: 1fr; }
          .cta-actions { flex-direction: row; min-width: 0; flex-wrap: wrap; }
        }

        @media (max-width: 640px) {
          .shell { width: calc(100% - 40px); }
          .section-pad { padding: 68px 0; }
          .section-pad--dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.08; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large, .section-intro { font-size: 18px; }
          .hero { padding: 72px 0 68px; }
          .hero-copy { text-align: center; }
          .hero-copy h1 { max-width: none; }
          .hero-copy .body-large { margin-left: auto; margin-right: auto; }
          .hero-copy .eyebrow { text-align: center; }
          .hero-copy .btn-row { justify-content: center; }
          .hero-trust { text-align: center; line-height: 1.55; max-width: 520px; margin-left: auto; margin-right: auto; }
          .btn-row { width: 100%; }
          .hero .btn { flex: 1 1 100%; width: 100%; }
          .hero-art { max-width: 460px; }
          .section-heading { margin-bottom: 38px; max-width: 100%; }
          .section-heading--centered, .mobile-center-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .mobile-center-heading .eyebrow { text-align: center; }
          .mobile-center-heading .section-intro { text-align: left; }
          .left-on-mobile { text-align: left !important; margin-left: 0 !important; margin-right: 0 !important; }
          .left-on-mobile .eyebrow, .left-on-mobile .section-intro { text-align: left !important; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item + .proof-item { border-left: 0; border-top: 1px solid var(--line); }
          .proof-item { min-height: auto; padding: 24px 0; }
          .journey-wrap { padding: 20px; border-radius: 24px; }
          .journey-line { grid-template-columns: 1fr; }
          .journey-step { min-height: 70px; padding: 14px 10px 14px 48px; border-bottom: 1px solid #EEEEF0; }
          .journey-step:last-child { border-bottom: 0; }
          .journey-step::after { display: none !important; }
          .journey-step::before { content: ""; position: absolute; left: 18px; top: 24px; width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); }
          .editorial-split { gap: 34px; }
          .editorial-row { padding: 24px 0 26px; }
          .mini-list { display: grid; gap: 7px; }
          .doc-stack { min-height: 390px; }
          .doc-card { width: 78%; min-height: 270px; padding: 24px; }
          .bullet-grid { grid-template-columns: 1fr; }
          .digital-copy .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .digital-copy .section-heading .section-intro { text-align: left; }
          .digital-links { justify-content: center; }
          .dashboard__stats { grid-template-columns: 1fr; }
          .dashboard__stats > div + div { border-left: 0; border-top: 1px solid #ECE4E7; }
          .dashboard__body { grid-template-columns: 1fr; }
          .dashboard__map { min-height: 260px; }
          .dashboard__map::before { width: 250px; height: 250px; left: -80px; top: 22px; }
          .dashboard__map::after { width: 180px; height: 180px; right: -80px; bottom: -50px; }
          .route-a { width: 46%; left: 21%; top: 142px; }
          .route-b { width: 34%; left: 54%; top: 142px; }
          .node-a { left: 19%; top: 137px; }
          .node-b { left: 62%; top: 88px; }
          .node-c { left: 82%; top: 205px; }
          .map-card { left: 20px; right: 20px; bottom: 24px; }
          .automation-grid > div:first-child .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .automation-grid > div:first-child .section-intro { text-align: left; }
          .automation-item { grid-template-columns: 42px 1fr; }
          .commerce-journey { grid-template-columns: 1fr; }
          .commerce-step, .commerce-step + .commerce-step, .commerce-step:nth-child(5), .commerce-step:nth-child(n+5) { border-left: 0; border-top: 1px solid #3A3A3E; min-height: 64px; }
          .commerce-step:first-child { border-top: 0; }
          .commerce-list { grid-template-columns: 1fr; }
          .commerce-list div, .commerce-list div:nth-child(2) { border-right: 0; border-bottom: 1px solid #3A3A3E; padding: 22px 0; }
          .commerce-list div:last-child { border-bottom: 0; }
          .commerce-copy { text-align: left; }
          .safety-item { text-align: left; }
          .term-copy .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
          .term-copy .section-heading .section-intro { text-align: left; }
          .term-links { justify-content: flex-start; }
          .content-matrix { grid-template-columns: 1fr; border-radius: 24px; }
          .content-group { min-height: 0; padding: 25px 22px; border-left: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .content-group:last-child { border-bottom: 0 !important; }
          .ai-grid { gap: 16px; }
          .ai-principle { text-align: left; }
          .workflow-grid { grid-template-columns: 1fr; }
          .workflow-step, .workflow-step:nth-child(even) { border-left: 0; padding: 24px 0 26px; min-height: 0; }
          .continuous-panel { padding: 22px; border-radius: 24px; }
          .continuous-flow { grid-template-columns: 1fr; }
          .continuous-step, .continuous-step:first-child, .continuous-step:nth-child(3), .continuous-step:nth-child(4), .continuous-step:last-child { border-radius: 0; margin: -1px 0 0 0; min-height: 80px; }
          .continuous-step:first-child { border-radius: 14px 14px 0 0; margin-top: 0; }
          .continuous-step:last-child { border-radius: 0 0 14px 14px; }
          .continuous-benefits { grid-template-columns: 1fr; }
          .continuous-benefit, .continuous-benefit + .continuous-benefit, .continuous-benefit:nth-child(3), .continuous-benefit:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); padding: 22px 0; }
          .continuous-benefit:first-child { border-top: 0; }
          .engineering-grid { grid-template-columns: 1fr; }
          .engineering-item, .engineering-item:nth-child(even) { border-left: 0; padding: 26px 0; }
          .language-row { grid-template-columns: 1fr; gap: 9px; padding: 24px 0; }
          .quality-grid { gap: 36px; }
          .why-grid { grid-template-columns: 1fr; border-left: 0; }
          .why-item { padding: 26px 0; min-height: 0; border-right: 0; }
          .related-row { grid-template-columns: 1fr; gap: 8px; padding: 23px 0; }
          .related-row p { grid-column: auto; grid-row: auto; }
          .related-row .editorial-link { margin-top: 4px; width: fit-content; max-width: 100%; white-space: normal; }
          .editorial-link span { min-width: 0; overflow-wrap: anywhere; }
          .usecase { min-height: 0; padding: 24px; }
          .faq-question { align-items: flex-start; font-size: 17px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 68px 0; }
          .cta-box { padding: 34px 24px; border-radius: 24px; text-align: center; }
          .cta-copy h2 { font-size: 30px; }
          .cta-actions { flex-direction: column; width: 100%; }
          .cta-actions .btn { width: 100%; white-space: normal; text-align: center; }
        }

        @media (max-width: 350px) {
          .hero-trust { font-size: 16px; }
          .doc-card { width: 84%; }
          .dashboard__top { align-items: flex-start; flex-direction: column; }
        }
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">LOGISTICS TRANSLATION SERVICES</div>
            <h1>Logistics Translation Services for Global Supply Chains</h1>
            <p className="body-large">
              Stepes helps logistics companies, freight forwarders, 3PL and 4PL providers, warehouse and fulfillment networks, ecommerce operators, and global enterprises translate the content that keeps goods moving. From freight documentation and warehouse operations to logistics software, customs workflows, training, and customer communications, we deliver scalable logistics translation services in 100+ languages.
            </p>
            <div className="btn-row">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">
                <span>Get a Quote</span><ArrowIcon />
              </a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">
                <span>Talk to a Logistics Translation Expert</span>
              </a>
            </div>
            <div className="hero-trust">Freight • Warehousing • Fulfillment • Customs • Distribution • 3PL/4PL • Logistics Technology</div>
          </div>
          <LogisticsHeroArt />
        </div>
      </section>

      <section className="proof-bar" aria-label="Logistics translation capabilities">
        <div className="shell proof-grid">
          {[
            ["100+ Languages", "Global coverage for logistics operations, partners, employees, and customers."],
            ["Logistics-Specialized Linguists", "Professional translators matched to technical, operational, commercial, and safety content."],
            ["AI + Human Workflows", "Translation models configured around content scale, purpose, quality requirements, and risk."],
            ["Enterprise Localization Technology", "Translation memory, terminology management, APIs, automation, and continuous localization."],
          ].map(([title, body]) => (
            <div className="proof-item" key={title}><h3>{title}</h3><p>{body}</p></div>
          ))}
        </div>
      </section>

      <section className="section-pad blush">
        <div className="shell">
          <SectionHeading
            eyebrow="CONNECTED LOGISTICS"
            title="Multilingual Logistics Across the Entire Goods Journey"
            intro="Modern logistics connects suppliers, warehouses, freight networks, customs processes, fulfillment centers, digital platforms, employees, partners, and customers. Stepes helps keep instructions, systems, documentation, terminology, and communications aligned from origin to final delivery."
          />
          <div className="journey-wrap">
            <div className="journey-line">
              {journey.map((item, index) => (
                <div className="journey-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>
              ))}
            </div>
            <p className="journey-caption">At every stage, information has to move as reliably as the goods themselves—from operational instructions and software interfaces to shipment data, safety content, training, and customer communications.</p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell editorial-split">
          <div className="sticky-copy">
            <div className="mobile-heading-group">
              <h2>Translation for Modern Logistics Operations</h2>
            </div>
            <p className="body-large">Every shipment passes through a network of people, processes, facilities, documents, and digital systems. Stepes helps multilingual logistics operations stay clear, consistent, and scalable.</p>
            <LinkArrow href="https://www.stepes.com/transportation-translation-services/">Transportation Translation Services</LinkArrow>
          </div>
          <div className="editorial-rows">
            {operations.map((item) => (
              <article className="editorial-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="mini-list">{item.items.map((x) => <span key={x}>{x}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface">
        <div className="shell trade-grid">
          <div className="doc-stack" aria-hidden="true">
            <div className="doc-card">
              <div className="doc-card__label">SHIPPING DOCUMENT</div>
              <h3>Bill of Lading</h3>
              <div className="doc-lines"><div className="doc-line"/><div className="doc-line"/><div className="doc-line short"/><div className="doc-line"/></div>
              <div className="doc-seal">B/L</div>
            </div>
            <div className="doc-card">
              <div className="doc-card__label">CUSTOMS WORKFLOW</div>
              <h3>Commercial Invoice</h3>
              <div className="doc-lines"><div className="doc-line short"/><div className="doc-line"/><div className="doc-line"/><div className="doc-line short"/></div>
              <div className="doc-seal">CI</div>
            </div>
          </div>
          <div>
            <SectionHeading
              title="Translation for Global Trade and Customs Workflows"
              intro="Cross-border logistics depends on accurate information flowing between exporters, importers, freight forwarders, carriers, brokers, warehouses, customs authorities, and customers."
              centered={false}
              className="mobile-center-heading"
            />
            <div className="trade-list">
              {tradeGroups.map((g) => (
                <div className="trade-group" key={g.title}>
                  <h3>{g.title}</h3>
                  <div className="bullet-grid">{g.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
            <p className="trade-note">Stepes provides the language support behind these processes while customers, brokers, carriers, and relevant authorities remain responsible for determining applicable trade, customs, and compliance requirements.</p>
          </div>
        </div>
      </section>

      <section className="section-pad blush">
        <div className="shell digital-grid">
          <div className="digital-copy">
            <SectionHeading
              eyebrow="DIGITAL LOGISTICS"
              title="Localize the Technology That Runs Modern Logistics"
              intro="Warehouse workers use handheld apps and scanners. Freight teams work in transportation management systems. Managers use AI, analytics, visibility platforms, and control towers to coordinate increasingly connected operations. Customers follow shipments through portals and mobile apps. Stepes localizes the complete digital logistics experience."
              centered={false}
            />
            <div className="digital-links">
              <LinkArrow href="https://www.stepes.com/software-localization-services/">Software Localization Services</LinkArrow>
              <LinkArrow href="https://www.stepes.com/app-localization-services/">App Localization Services</LinkArrow>
              <LinkArrow href="https://www.stepes.com/developers/translation-api/">Translation API</LinkArrow>
            </div>
            <div className="software-list">
              {softwareAreas.map((item) => (
                <div className="software-item" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>
              ))}
            </div>
          </div>
          <DigitalLogisticsMockup />
        </div>
      </section>

      <section className="section-pad">
        <div className="shell automation-grid">
          <div>
            <SectionHeading
              title="Translation for Automated Warehouses and Smart Logistics"
              intro="Warehouses and distribution centers increasingly combine robotics, sensors, machine vision, warehouse control systems, intelligent software, and human operators. Stepes helps keep these systems multilingual as they are deployed and operated across markets."
              centered={false}
            />
            <div className="automation-list">
              {automationAreas.map((item, i) => (
                <div className="automation-item" key={item.title}>
                  <div className="icon-box">{i === 0 ? <BoxIcon /> : i === 1 ? <WarehouseIcon /> : <ScreenIcon />}</div>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </div>
              ))}
            </div>
            <div className="automation-links">
              <LinkArrow href="https://www.stepes.com/robotics-translation-services/">Robotics Translation Services</LinkArrow>
              <LinkArrow href="https://www.stepes.com/industrial-automation-translation/">Industrial Automation Translation Services</LinkArrow>
            </div>
          </div>
          <AutomationArt />
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="shell">
          <SectionHeading
            title="Multilingual Logistics for Cross-Border Ecommerce"
            intro="The global ecommerce experience does not end at checkout. Fulfillment, shipping, customs, tracking, delivery, and returns are all customer touchpoints. Stepes helps retailers, marketplaces, ecommerce brands, fulfillment providers, and logistics technology companies localize the content behind international delivery."
            dark
          />
          <div className="commerce-journey">
            {["Checkout", "Fulfillment", "Shipping", "Customs", "Tracking", "Delivery", "Returns"].map((x) => <div className="commerce-step" key={x}>{x}</div>)}
          </div>
          <p className="commerce-copy">Shipping terminology should remain aligned with product pages, checkout, account areas, customer support, and returns experiences. Shared terminology and translation memory help connect logistics with the broader ecommerce customer journey.</p>
          <div className="commerce-list">
            {[
              ["Delivery Experience", "Shipping options, delivery estimates, pickup instructions, delivery preferences, and failed-delivery messages."],
              ["Tracking & Notifications", "Order confirmations, tracking pages, shipment updates, delivery alerts, and exception messaging."],
              ["Customs & Cross-Border", "Customs information, international shipping instructions, customer guidance, and cross-border support."],
              ["Returns & Support", "Return instructions, reverse-logistics content, customer support, help articles, and returns workflows."],
            ].map(([t,b]) => <div key={t}><h3>{t}</h3><p>{b}</p></div>)}
          </div>
          <div className="commerce-link"><LinkArrow href="https://www.stepes.com/retail-ecommerce-translation-services/">Retail & E-commerce Translation Services</LinkArrow></div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="SAFETY-CRITICAL LOGISTICS"
            title="Accurate Translation Where Logistics Language Carries Risk"
            intro="Some logistics content influences how goods are packaged, stored, handled, loaded, moved, and delivered. Stepes configures translation workflows around subject matter, intended use, complexity, audience, and risk, combining specialized linguists with controlled terminology, review, translation memory, and quality assurance."
          />
          <div className="safety-grid">
            {safetyAreas.map((item, i) => (
              <article className="safety-item" key={item.title}>
                <div className="icon-box">{i === 0 ? <ShieldIcon /> : i === 1 ? <BoxIcon /> : <GlobeIcon />}</div>
                <h3>{item.title}</h3><p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="safety-note">For regulated or specialized shipments, customers remain responsible for identifying applicable regulations, required document formats, classifications, and final compliance requirements.</p>
        </div>
      </section>

      <section className="section-pad surface">
        <div className="shell terminology-grid">
          <div className="term-visual" aria-label="Illustrative logistics terminology flow">
            <div className="term-flow">
              {["WMS", "SOP", "Scanner", "Label", "Shipment Record", "Customer Portal", "Training"].map((item, i, arr) => (
                <React.Fragment key={item}>
                  <div className="term-node"><span aria-hidden="true" /><strong>{item}</strong></div>
                  {i < arr.length - 1 ? <div className="term-arrow" /> : null}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="term-copy">
            <SectionHeading
              eyebrow="TERMINOLOGY CONTROL"
              title="One Logistics Vocabulary From Warehouse to Last Mile"
              intro="The same logistics term may appear in a warehouse management system, operating procedure, handheld scanner, shipping label, shipment record, training course, carrier portal, and customer notification. Central language assets help prevent terminology from drifting between them."
              centered={false}
            />
            <div className="term-points">
              {[
                "Govern logistics processes, product names, SKUs, shipment statuses, packaging, locations, equipment, carrier language, abbreviations, and company-specific process names.",
                "Reuse previously approved translations where content and context remain applicable across revisions, facilities, markets, and releases.",
                "Give logistics, operations, IT, training, customer experience, and regional teams access to the same approved multilingual vocabulary.",
              ].map((x) => <div className="term-point" key={x}><CheckIcon/><p>{x}</p></div>)}
            </div>
            <div className="term-links">
              <LinkArrow href="https://www.stepes.com/terminology-management/">Terminology Management</LinkArrow>
              <LinkArrow href="https://www.stepes.com/translation-memory/">Translation Memory</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            title="Logistics Documents and Content We Translate"
            intro="Logistics organizations generate far more multilingual content than traditional shipping documents. Stepes supports operational, technical, digital, training, customer-facing, and commercial content throughout the logistics ecosystem."
          />
          <div className="content-matrix">
            {contentGroups.map((group) => (
              <article className="content-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="plain-list">{group.items.map((x) => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad blush">
        <div className="shell">
          <SectionHeading
            eyebrow="AI + HUMAN WORKFLOWS"
            title="The Right Translation Workflow for Every Logistics Content Type"
            intro="A dangerous-goods instruction, warehouse SOP, WMS software release, tracking notification, customer help article, and routine operational status message do not carry the same business risk or quality requirements. Stepes configures the workflow around the content rather than forcing every project into one model."
          />
          <div className="ai-grid">
            {aiWorkflows.map((item, i) => (
              <article className="ai-card" key={item.title}>
                <div className="ai-card__label">{item.label}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <ul className="plain-list">{item.items.map((x) => <li key={x}>{x}</li>)}</ul>
                <div className="ai-flow">{i === 0 ? "Specialized translation → Professional review → QA → Approval" : i === 1 ? "Terminology + Translation Memory + AI → Human review → QA" : "Language assets + AI → Automated QA → Targeted validation"}</div>
              </article>
            ))}
          </div>
          <p className="ai-principle">AI where scale matters. Professional expertise where judgment matters. One logistics program can use different translation workflows for different content types while sharing the same terminology and approved language assets.</p>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="shell">
          <SectionHeading
            title="A Translation Workflow Built for Global Logistics"
            intro="Successful logistics localization connects content, terminology, people, technology, review, and delivery into one repeatable process."
            dark
          />
          <div className="workflow-wrap">
            <div className="workflow-grid">
              {workflow.map(([title, body], i) => (
                <div className="workflow-step" key={title}>
                  <div className="workflow-num">{String(i+1).padStart(2,"0")}</div>
                  <h3>{title}</h3><p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad blush">
        <div className="shell">
          <SectionHeading
            eyebrow="CONTINUOUS LOCALIZATION"
            title="Logistics Never Stops. Neither Should Localization."
            intro="Warehouses change processes. Carrier networks evolve. Software releases continue. Routes open. Products and SKUs are added. Training is updated. New markets come online. Stepes helps logistics teams keep multilingual content synchronized as operations evolve."
          />
          <div className="continuous-panel">
            <div className="continuous-flow">
              {[
                ["01", "Content change"],
                ["02", "Identify updates"],
                ["03", "Apply language assets"],
                ["04", "Translate & review"],
                ["05", "QA & approval"],
                ["06", "Multilingual release"],
              ].map(([n,t]) => <div className="continuous-step" key={n}><span>{n}</span><strong>{t}</strong></div>)}
            </div>
            <div className="continuous-benefits">
              {[
                ["Reuse Approved Translations", "Translation memory helps recurring content begin with validated language instead of starting from zero."],
                ["Keep Terminology Controlled", "Central terminology keeps logistics language aligned across software, documents, training, partners, and customer touchpoints."],
                ["Connect Content Through APIs", "Integrate translation with digital platforms and recurring workflows to reduce manual file exchange."],
                ["Support Continuous Updates", "Build repeatable localization for software, documentation, knowledge bases, ecommerce logistics, and training."],
              ].map(([t,b]) => <div className="continuous-benefit" key={t}><h3>{t}</h3><p>{b}</p></div>)}
            </div>
            <div className="continuous-links">
              <LinkArrow href="https://www.stepes.com/translation-memory/">Translation Memory</LinkArrow>
              <LinkArrow href="https://www.stepes.com/terminology-management/">Terminology Management</LinkArrow>
              <LinkArrow href="https://www.stepes.com/developers/translation-api/">Translation API</LinkArrow>
              <LinkArrow href="https://www.stepes.com/continuous-translation/">Continuous Translation</LinkArrow>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            title="Localization Engineering for Logistics Systems and Content"
            intro="Logistics content exists in software, structured data, technical documents, training systems, mobile applications, graphics, dashboards, videos, spreadsheets, publishing files, and customer platforms. Stepes combines translation with localization engineering and multilingual production so translated content can return in a usable format."
          />
          <div className="engineering-grid">
            {engineeringGroups.map((g) => (
              <article className="engineering-item" key={g.title}>
                <h3>{g.title}</h3><p>{g.body}</p>
                <div className="engineering-links">{g.links.map(([label,href]) => <LinkArrow href={href} key={href}>{label}</LinkArrow>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface">
        <div className="shell">
          <SectionHeading
            title="Logistics Translation in 100+ Languages"
            intro="Global logistics networks connect warehouses, freight hubs, suppliers, carriers, employees, partners, and customers across languages and regions. Stepes provides professional logistics translation services in 100+ languages for established and emerging markets worldwide."
          />
          <div className="languages-grid">
            {languageGroups.map(([region, langs]) => <div className="language-row" key={region}><h3>{region}</h3><p>{langs}</p></div>)}
          </div>
          <div className="languages-link"><LinkArrow href="https://www.stepes.com/translation-languages/">Explore All Languages</LinkArrow></div>
        </div>
      </section>

      <section className="section-pad dark-section">
        <div className="shell quality-grid">
          <div className="quality-copy">
            <div className="eyebrow eyebrow--dark">QUALITY & OPERATIONAL CLARITY</div>
            <h2>Quality That Keeps Logistics Moving</h2>
            <p>Logistics language needs to work in context—whether an employee is following a warehouse procedure, a freight team is processing a shipment, a customer is reading a delivery notice, or a technician is responding to an equipment alert.</p>
            <div className="quality-link"><LinkArrow href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</LinkArrow></div>
          </div>
          <div className="quality-list">
            {qualityItems.map(([t,b], i) => (
              <div className="quality-item" key={t}>
                <div className="quality-icon">{i < 2 ? <ShieldIcon/> : i < 4 ? <CheckIcon/> : <ScreenIcon/>}</div>
                <div><h3>{t}</h3><p>{b}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="WHY STEPES"
            title="Built for Global Logistics Teams"
            intro="Modern logistics localization has to connect warehouses, digital platforms, freight operations, trade documentation, training, automation, employees, partners, and customers without losing terminology or context between them."
          />
          <div className="why-grid">
            {differentiators.map(([t,b],i) => (
              <article className="why-item" key={t}>
                <div className="why-icon">{i % 3 === 0 ? <WarehouseIcon/> : i % 3 === 1 ? <GlobeIcon/> : <ScreenIcon/>}</div>
                <h3>{t}</h3><p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface">
        <div className="shell">
          <SectionHeading
            title="Connected Translation Expertise Across the Logistics Ecosystem"
            intro="Logistics intersects with transportation, supply-chain management, ecommerce, robotics, industrial automation, manufacturing, and technical operations. Stepes provides specialized translation services across these adjacent areas while keeping each domain appropriately focused."
          />
          <div className="related-list">
            {related.map((item) => (
              <div className="related-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <LinkArrow href={item.href}>{item.linkLabel}</LinkArrow>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="shell">
          <SectionHeading
            eyebrow="LOGISTICS TRANSLATION IN PRACTICE"
            title="Multilingual Logistics for Real-World Operations"
            intro="Every logistics organization has a different content mix. Stepes can configure language workflows around individual projects, site launches, software releases, or ongoing enterprise programs."
          />
          <div className="usecases">
            {useCases.map((item) => (
              <article className="usecase" key={item.title}>
                <h3>{item.title}</h3><p>{item.body}</p><div className="usecase-flow">{item.flow}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad surface">
        <div className="shell">
          <SectionHeading
            title="Logistics Translation Services FAQ"
            intro="Answers to common questions about logistics documents, digital platforms, AI workflows, terminology, specialized content, and ongoing multilingual programs."
            centered={false}
            className="left-on-mobile"
          />
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <FAQItem
                key={item.q}
                item={item}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-box">
            <div className="cta-copy">
              <h2>Keep Your Global Logistics Moving in Every Language</h2>
              <p>From warehouse operations and freight documentation to logistics platforms, customs workflows, training, automation, and customer communications, Stepes helps global logistics teams deliver accurate multilingual content wherever their networks operate.</p>
            </div>
            <div className="cta-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Get a Quote</span><ArrowIcon /></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to a Logistics Translation Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
