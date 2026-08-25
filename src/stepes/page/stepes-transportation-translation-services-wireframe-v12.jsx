import React from "react";

const links = {
  quote: "https://www.stepes.com/contact-sales/",
  contact: "https://www.stepes.com/contact-us/",
  railroad: "https://www.stepes.com/railroad-translation-services/",
  aviation: "https://www.stepes.com/aviation-translation-services/",
  automotive: "https://www.stepes.com/automotive-translation-services/",
  logistics: "https://www.stepes.com/logistics-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  app: "https://www.stepes.com/app-localization-services/",
  elearning: "https://www.stepes.com/elearning-training-translation-services/",
  multimedia: "https://www.stepes.com/multimedia-translation-services/",
  voiceover: "https://www.stepes.com/voice-over-services/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  api: "https://www.stepes.com/developers/translation-api/",
  continuous: "https://www.stepes.com/continuous-translation/",
  languages: "https://www.stepes.com/languages/",
};

const transportSectors = [
  {
    title: "Rail & Transit",
    text: "Translation for rolling stock, signaling, rail infrastructure, maintenance, station systems, operating procedures, training, safety, and passenger information.",
    link: ["Railroad Translation Services", links.railroad],
    icon: "rail",
  },
  {
    title: "Aviation & Air Cargo",
    text: "Multilingual support for aircraft systems, aviation operations, MRO, ground operations, cargo, airport systems, technical publications, software, safety, and training.",
    link: ["Aviation Translation Services", links.aviation],
    icon: "air",
  },
  {
    title: "Road, Fleet & Commercial Transportation",
    text: "Localization for commercial vehicles, fleet operations, dispatch, routing, telematics, maintenance, driver content, service networks, and fleet technology.",
    link: ["Automotive Translation Services", links.automotive],
    icon: "road",
  },
  {
    title: "Maritime, Shipping & Ports",
    text: "Translation across vessel operations, shipping services, ports, terminals, cargo handling, maritime equipment, safety, training, technical documentation, and digital shipping systems.",
    icon: "ship",
  },
  {
    title: "Logistics & Supply Chain",
    text: "Transportation programs often connect directly to logistics and supply-chain operations. For freight, warehousing, distribution, customs, and deeper logistics workflows, Stepes provides a dedicated Logistics Translation Services practice.",
    link: ["Logistics Translation Services", links.logistics],
    icon: "logistics",
  },
  {
    title: "Transportation Technology & Digital Mobility",
    text: "Localization for transportation management systems, fleet platforms, telematics, routing, dispatch, ticketing, passenger information, mobile apps, connected mobility, and other digital transportation experiences.",
    link: ["Software Localization Services", links.software],
    icon: "digital",
  },
];

const customerLogos = [
  { name: "Europa Worldwide", src: "https://www.stepes.com/wp-content/uploads/2014/09/europa-worldwide.png?1=" },
  { name: "Matson", src: "https://www.stepes.com/wp-content/uploads/2014/09/matson-logo.png" },
  { name: "Keolis", src: "https://www.stepes.com/wp-content/uploads/2014/09/keolisna-logo.png" },
  { name: "Loram", src: "https://www.stepes.com/wp-content/uploads/2014/09/loram-logo.png" },
  { name: "Nexxiot", src: "https://www.stepes.com/wp-content/uploads/2014/12/nexxiot-logo.svg" },
];

const lifecycle = [
  ["Engineering & Design", "Specifications, requirements, drawings, system documentation, component information, testing content, and supplier communications.", "engineering"],
  ["Manufacturing & Deployment", "Manufacturing instructions, installation, commissioning, equipment documentation, inspection criteria, and deployment materials.", "manufacturing"],
  ["Operations", "Operating manuals, SOPs, dispatch information, route procedures, fleet instructions, notices, and operational process content.", "operations"],
  ["Safety & Compliance", "Safety procedures, warnings, emergency instructions, inspection materials, dangerous-goods content, compliance training, and regulatory information.", "safety"],
  ["Maintenance & Service", "Maintenance manuals, repair procedures, troubleshooting, service information, parts documentation, and preventive maintenance content.", "maintenance"],
  ["Training", "Operator and technician training, eLearning, classroom materials, instructional video, assessments, and certification content.", "training"],
  ["Passenger & Customer Experience", "Websites, apps, ticketing, passenger information, notifications, signage, customer support, help content, and marketing.", "passenger"],
  ["Continuous Updates", "Software releases, fleet updates, procedural changes, regulatory revisions, updated manuals, route changes, and terminology updates.", "cycle"],
];

const contentGroups = [
  {
    title: "Technical & Engineering",
    items: ["Engineering specifications", "Technical manuals", "Installation instructions", "Equipment documentation", "Maintenance manuals", "Service procedures", "Parts information", "Test and validation content"],
  },
  {
    title: "Operations & Safety",
    items: ["Standard operating procedures", "Operating manuals", "Driver and operator instructions", "Safety manuals", "Emergency procedures", "Inspection materials", "Dispatch instructions", "Warnings and signage"],
  },
  {
    title: "Software & Digital Products",
    items: ["Transportation management systems", "Fleet platforms", "Telematics interfaces", "Mobile apps", "Web portals", "Control interfaces", "Passenger information systems", "Ticketing applications"],
  },
  {
    title: "Training & Learning",
    items: ["eLearning courses", "LMS content", "Training manuals", "Operator courses", "Technician training", "Safety training", "Assessments", "Instructional video"],
  },
  {
    title: "Commercial & Network Communications",
    items: ["Carrier and partner communications", "Supplier documentation", "Contracts and agreements", "Proposals and presentations", "Service notices", "Network communications", "Customer communications", "Market-facing content"],
  },
  {
    title: "Passenger & Customer Experience",
    items: ["Websites", "Mobile applications", "Ticketing content", "Passenger information", "Service notifications", "Signage", "FAQs and support", "Marketing materials"],
  },
];

const workflowTiers = [
  {
    fit: "Specialized & high-consequence content",
    title: "Professional Human Translation",
    text: "A strong fit for specialized technical, safety-sensitive, regulatory, high-visibility, or editorial content where professional linguistic judgment is central to the result.",
    flow: "Specialized Translation → Professional Review → QA → Approval",
  },
  {
    fit: "Scale + professional oversight",
    title: "AI Translation + Professional Human Review",
    text: "AI can accelerate suitable transportation content while qualified linguists review meaning, terminology, fluency, consistency, and project-specific requirements.",
    flow: "Terminology + TM + AI → Human Review → QA",
  },
  {
    fit: "High-volume, lower-risk use cases",
    title: "AI-Enabled Translation",
    text: "For appropriate content where speed and scalability are primary requirements, Stepes can apply AI-enabled translation with language assets, automated checks, and review matched to the program.",
    flow: "Language Assets + AI → Automated QA → Targeted Validation",
  },
];

const enterpriseWorkflow = [
  ["Understand the Content", "Review content type, audience, target languages, technical complexity, file formats, intended use, quality requirements, and delivery schedule."],
  ["Prepare Terminology & Language Assets", "Apply existing glossaries, translation memories, approved translations, product terminology, style guidance, and reference materials."],
  ["Select the Right Workflow", "Configure professional translation, AI-enabled translation, human review, localization engineering, DTP, testing, or the appropriate combination."],
  ["Translate & Localize", "Assign suitable linguistic and technical resources and process documents, software, structured content, multimedia, and other transportation assets appropriately."],
  ["Review", "Route content requiring additional oversight to a professional linguist, specialist reviewer, in-country stakeholder, or customer reviewer."],
  ["Run Linguistic & Technical QA", "Check completeness, terminology, numbers, units, formatting, tags, consistency, layout, and in-context behavior according to the deliverable."],
  ["Deliver or Deploy", "Return publication-ready documents, localized software resources, structured content, multimedia assets, or other agreed deliverables."],
  ["Reuse What Has Been Approved", "Strengthen translation memory and terminology so future transportation updates begin with more context, consistency, and reusable language."],
];

const related = [
  ["Automotive Translation Services", "Vehicle engineering, manufacturing, connected software, market entry, service, training, and ownership content.", links.automotive],
  ["Aerospace & Aviation Translation Services", "Aircraft, aerospace systems, MRO, aviation operations, safety, software, technical publications, and training.", links.aviation],
  ["Railroad Translation Services", "Rolling stock, signaling, rail equipment, infrastructure, operations, maintenance, safety, and passenger systems.", links.railroad],
  ["Logistics Translation Services", "Freight, warehousing, shipping, distribution, customs, supply chains, and global logistics operations.", links.logistics],
  ["Technical Translation Services", "Engineering specifications, operating instructions, maintenance documentation, and specialized technical content.", links.technical],
  ["Software Localization Services", "Transportation applications, connected platforms, interfaces, digital workflows, help content, and recurring software releases.", links.software],
];

const faqs = [
  ["What types of transportation content does Stepes translate?", "Stepes translates technical, engineering, operational, safety, maintenance, software, training, regulatory, passenger, shipping, customer, and commercial content for transportation organizations. This includes manuals, operating procedures, software interfaces, maintenance instructions, safety materials, eLearning, mobile applications, passenger information, websites, and multimedia."],
  ["Which transportation industries does Stepes support?", "Stepes supports rail and transit, aerospace and aviation, road and fleet transportation, automotive, maritime and shipping, and transportation technology. Transportation programs that extend into freight, warehousing, distribution, customs, and supply-chain operations are supported through our dedicated Logistics Translation Services practice."],
  ["Can Stepes localize transportation software and mobile apps?", "Yes. Stepes localizes user interfaces, mobile applications, transportation management systems, fleet-management platforms, telematics applications, passenger-information systems, ticketing platforms, web portals, and other digital transportation products. Projects can include resource-file localization, terminology management, in-context review, testing, and recurring release support."],
  ["How does Stepes maintain consistent transportation terminology?", "Stepes can use client-specific glossaries, termbases, translation memories, style guidance, approved translations, and project instructions to keep terminology consistent across documents, software, training, maintenance information, safety content, and recurring transportation communications."],
  ["Does Stepes use AI for transportation translation?", "Yes. Stepes supports professional human translation, AI translation with professional human review, and AI-enabled translation workflows. The appropriate approach depends on content purpose, technical complexity, audience, risk, volume, quality requirements, confidentiality, and turnaround."],
  ["Can Stepes support safety-sensitive transportation content?", "Yes. Safety manuals, operating procedures, maintenance instructions, warnings, emergency content, and other sensitive technical materials can use workflows that include specialized linguists, terminology controls, professional review, and project-specific quality assurance."],
  ["Can Stepes support ongoing transportation localization programs?", "Yes. Stepes supports recurring and continuous localization using translation memory, terminology management, workflow automation, APIs, professional project management, and reusable language assets. This is useful for frequent software releases, documentation updates, training revisions, operational changes, and multi-market programs."],
  ["Can Stepes preserve technical layouts and formatting?", "Yes. Stepes supports multilingual document formatting and desktop publishing for many common business and technical file types. File requirements are reviewed as part of project setup so text expansion, tables, graphics, page layouts, and other multilingual production needs can be addressed appropriately."],
  ["Can Stepes translate transportation training, video, and multimedia?", "Yes. Stepes supports eLearning translation, subtitles, captions, voiceover, multilingual graphics, video localization, and course engineering in addition to document and software translation."],
  ["Which languages does Stepes support for transportation translation?", "Stepes provides transportation translation and localization in more than 100 languages, including major European, Asian, Latin American, Middle Eastern, and African languages. Multilingual programs can be managed through a centralized workflow with shared terminology and language assets."],
];

function Arrow() {
  return <span aria-hidden="true" className="tf-arrow">→</span>;
}

function Icon({ type = "digital" }) {
  const icons = {
    rail: <><path d="M6 4.5h12v10.2a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"/><path d="M8.4 7.5h7.2M8.4 11h7.2M8.5 18l-2 2M15.5 18l2 2"/><circle cx="9" cy="14.3" r=".9"/><circle cx="15" cy="14.3" r=".9"/></>,
    air: <><path d="M3.5 13.2 20 7.4c.9-.3 1.4.8.7 1.4l-5.4 4.1-1 5.4-2-4.1-4.1 1.5-1.4-2.2-2.6.9z"/><path d="M9.4 11.1 6.8 7.7M13.7 9.6l.7-4"/></>,
    road: <><rect x="4" y="8.4" width="16" height="7.2" rx="2"/><path d="M6.8 8.4 8.2 5.8h6.9l2.1 2.6M7.2 15.6v1.8M16.8 15.6v1.8"/><circle cx="7.4" cy="17.8" r="1.2"/><circle cx="16.6" cy="17.8" r="1.2"/></>,
    ship: <><path d="M4 13.4 6.4 19h11.2l2.4-5.6-8 2.1z"/><path d="M9 13.8V5.2h6.2v7.1M9 8h6.2M12 5.2V3.8"/><path d="M3.8 20.5c1.3-.8 2.6-.8 3.9 0s2.6.8 3.9 0 2.6-.8 3.9 0 2.6.8 3.9 0"/></>,
    logistics: <><rect x="4.2" y="6.2" width="10.2" height="9" rx="1.5"/><path d="M14.4 9.2h3.2l2.2 2.4v3.6h-5.4M7.2 18.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2ZM17 18.3a1.6 1.6 0 1 0 0-3.2 1.6 1.6 0 0 0 0 3.2Z"/></>,
    digital: <><rect x="4" y="5" width="16" height="12.5" rx="2"/><path d="M7 8.5h4.8M7 11.8h3.5M14.2 8.5h2.8M14.2 11.8h2.8M9.2 20h5.6"/></>,
    safety: <><path d="M12 4 19 7v5c0 4.4-2.9 7.3-7 8-4.1-.7-7-3.6-7-8V7z"/><path d="m8.8 12.1 2.1 2.1 4.4-4.5"/></>,
    language: <><path d="M4.2 6h9.7v6.8H8.2l-4 3.5zM14.2 9.4h5.6v7.2h-2.7l-3.1 2.3v-4"/><path d="M7.2 9.4h3.6M16.2 12.4h1.7"/></>,
    file: <><path d="M6.5 3.8h7.2l3.8 3.9v12.5h-11zM13.7 3.8v4h3.8"/><path d="M9 12h6M9 15.2h6M9 18.4h4.2"/></>,
    training: <><rect x="4.2" y="5" width="15.6" height="14" rx="2.2"/><path d="m10 9 5 3-5 3zM7.3 17h9.4"/></>,
    humanAi: <><circle cx="8.4" cy="8.2" r="2.4"/><path d="M4.9 17.8c.5-3 1.8-4.6 3.5-4.6s3 1.6 3.5 4.6"/><path d="M16.8 5.1v2M16.8 10.9v2M13.2 9h2M18.6 9h2M14.3 6.5l1.4 1.4M17.9 10.1l1.4 1.4M19.3 6.5l-1.4 1.4M15.7 10.1l-1.4 1.4"/></>,
    globe: <><circle cx="12" cy="12" r="8"/><path d="M4 12h16M12 4c2.2 2.2 3.2 4.8 3.2 8s-1 5.8-3.2 8M12 4C9.8 6.2 8.8 8.8 8.8 12s1 5.8 3.2 8"/></>,
    cycle: <><path d="M5.1 11.3A7.1 7.1 0 0 1 17 6.5l2 2M19 5v3.6h-3.6M18.9 12.7A7.1 7.1 0 0 1 7 17.5l-2-2M5 19v-3.6h3.6"/></>,
    engineering: <><path d="M4.3 19.4h15.4M6.2 17.2 10.7 5.4M17.8 17.2 13.3 5.4M9.3 9.1h5.4"/><circle cx="12" cy="4.3" r="1.7"/><path d="M18.2 6.2 20 8l-4.1 4.1-2.3.5.5-2.3z"/></>,
    manufacturing: <><path d="M3.8 19.3V9.6l5-2.8v3l5.2-3v3l5.9-3v12.5z"/><path d="M6.4 19.3v-4.7h4.2v4.7M14.2 13.1h3.1M14.2 16h3.1M5.8 11.9h2.2"/></>,
    operations: <><path strokeWidth="1.25" d="M4.4 10.2A8 8 0 0 1 18 6.1"/><path strokeWidth="1.25" d="M16.5 4.9 19 5l-.1 2.5"/><path strokeWidth="1.25" d="M19.6 13.8A8 8 0 0 1 6 17.9"/><path strokeWidth="1.25" d="M7.5 19.1 5 19l.1-2.5"/><circle cx="12" cy="12" r="3.15"/><circle cx="12" cy="12" r="1.15"/><path d="M12 7.6v1.25M12 15.15v1.25M7.6 12h1.25M15.15 12h1.25"/></>,
    maintenance: <><path d="M14.8 5.1a4.1 4.1 0 0 0-5.2 5.2L4.2 15.7a2.2 2.2 0 1 0 3.1 3.1l5.4-5.4a4.1 4.1 0 0 0 5.2-5.2l-2.4 2.4-2.2-.5-.5-2.2z"/><circle cx="5.9" cy="17.1" r=".7"/></>,
    passenger: <><path d="M5.1 7.3h13.8v9.4H5.1z"/><path d="M8 7.3V5.1h8v2.2M8.3 12h7.4M9.1 16.7v2M14.9 16.7v2"/><circle cx="8.2" cy="14.2" r=".8"/><circle cx="15.8" cy="14.2" r=".8"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" className="tf-icon" aria-hidden="true" focusable="false">
      {icons[type] || icons.digital}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, align = "center", dark = false }) {
  return (
    <div className={`tf-heading tf-heading-${align}`}>
      {eyebrow && <p className={`tf-eyebrow ${dark ? "tf-eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="tf-section-intro">{intro}</p>}
    </div>
  );
}

function TextLink({ href, children, dark = false }) {
  return (
    <a className={`tf-text-link ${dark ? "tf-text-link-dark" : ""}`} href={href}>
      {children} <Arrow />
    </a>
  );
}

function HeroIllustration() {
  return (
    <div className="tf-hero-art" role="img" aria-label="Rail, air, road, maritime, and digital transportation connected through multilingual content">
      <svg viewBox="0 0 620 520" className="tf-transport-svg" aria-hidden="true" focusable="false">
        <circle cx="390" cy="230" r="190" className="tf-svg-blush" />
        <path d="M72 388 C145 322, 232 326, 308 372 S470 421, 566 355" className="tf-svg-route" />
        <path d="M87 180 C188 105, 291 103, 402 154" className="tf-svg-route tf-svg-route-dash" />

        <g className="tf-svg-ink">
          <path d="M90 168 212 122c9-3 14 8 7 13l-42 32-9 42-17-32-32 12-12-18-24 8z" />
          <path d="M134 151 115 126M171 137l6-29" />

          <rect x="72" y="334" width="196" height="66" rx="14" />
          <path d="M94 334v-30h152v30M99 356h42M170 356h58M98 378h130" />
          <circle cx="111" cy="407" r="9" /><circle cx="225" cy="407" r="9" />

          <path d="M380 372h145l26-52-111 16z" />
          <path d="M420 333v-78h68v58M420 283h68M452 255v-24" />
          <path d="M372 399c14-8 28-8 42 0s28 8 42 0 28-8 42 0 28 8 42 0" />

          <rect x="275" y="300" width="94" height="55" rx="10" />
          <path d="M369 318h35l22 23v14h-57M296 300l12-26h42l18 26" />
          <circle cx="301" cy="364" r="9" /><circle cx="390" cy="364" r="9" />

          <rect x="330" y="97" width="177" height="112" rx="18" />
          <path d="M352 128h63M352 157h43M443 128h39M443 157h39" />
          <path d="M381 209v20M456 209v20M366 229h105" />
        </g>

        <g className="tf-svg-accent">
          <circle cx="73" cy="389" r="12" /><circle cx="564" cy="355" r="12" />
          <path d="M286 276h70" />
          <path d="M448 95v-24M438 83h20" />
        </g>

        <g className="tf-svg-language">
          <rect x="382" y="218" width="148" height="52" rx="26" />
          <text x="405" y="250">EN</text><text x="447" y="250">↔</text><text x="483" y="250">DE · JA · ES</text>
        </g>
      </svg>
    </div>
  );
}

export default function TransportationTranslationServicesWireframe() {
  return (
    <main className="transportation-wireframe">
      <style>{styles}</style>

      <section className="tf-section tf-hero">
        <div className="tf-container tf-hero-grid">
          <div className="tf-hero-copy">
            <h1>Transportation Translation Services for Global Mobility</h1>
            <p className="tf-hero-lede">
              Translate and localize the technical, operational, safety, software, training, and customer content that keeps global transportation moving.
            </p>
            <p className="tf-hero-support">
              Stepes supports rail, aviation, road and fleet operations, maritime and shipping, multimodal transportation, and transportation technology in 100+ languages with professional language expertise, AI-enabled workflows, terminology management, and localization technology.
            </p>
            <div className="tf-actions">
              <a className="tf-btn tf-btn-primary" href={links.quote}>Request a Quote</a>
              <a className="tf-btn tf-btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      <section className="tf-proof" aria-label="Transportation translation service capabilities">
        <div className="tf-container tf-proof-grid">
          <div><strong>100+ Languages</strong><span>Global coverage for transportation content and markets</span></div>
          <div><strong>Technical + Digital Content</strong><span>Documentation, software, operations, training, and customer experiences</span></div>
          <div><strong>AI + Human Workflows</strong><span>Translation models matched to content purpose, scale, and risk</span></div>
          <div><strong>Terminology + Translation Memory</strong><span>Consistent multilingual language across systems and releases</span></div>
        </div>
      </section>

      <section className="tf-section tf-customers">
        <div className="tf-container">
          <SectionHeading
            title="Trusted Across Transportation and Logistics"
            intro="Transportation organizations use Stepes to support multilingual technical documentation, operations, logistics, technology, training, and customer-facing content."
          />
          <div className="tf-logo-row" role="list" aria-label="Selected transportation customers">
            {customerLogos.map((logo) => (
              <div className="tf-logo-item" role="listitem" key={logo.name}>
                <img src={logo.src} alt={`${logo.name} logo`} loading="lazy" decoding="async" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section tf-light" id="transportation-ecosystem">
        <div className="tf-container">
          <SectionHeading
            title="Translation Across the Transportation Ecosystem"
            intro="Modern transportation connects vehicles, infrastructure, operators, technology platforms, regulators, supply chains, passengers, and customers. Stepes builds localization workflows around the specialized language requirements behind each environment."
          />
          <div className="tf-sector-grid">
            {transportSectors.map((sector) => (
              <article className="tf-sector-card" key={sector.title}>
                <Icon type={sector.icon} />
                <h3>{sector.title}</h3>
                <p>{sector.text}</p>
                {sector.link && <TextLink href={sector.link[1]}>{sector.link[0]}</TextLink>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section" id="content-lifecycle">
        <div className="tf-container tf-lifecycle-grid">
          <div className="tf-lifecycle-heading">
            <p className="tf-eyebrow">CONTENT LIFECYCLE</p>
            <h2>Multilingual Content Wherever Transportation Happens</h2>
            <p>
              Transportation content begins before a vehicle, system, or service enters operation and continues throughout deployment, daily use, maintenance, training, customer service, and ongoing updates.
            </p>
          </div>
          <ol className="tf-lifecycle-list">
            {lifecycle.map(([title, text, icon]) => (
              <li className="tf-lifecycle-row" key={title}>
                <span className="tf-lifecycle-icon" aria-hidden="true"><Icon type={icon} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tf-section tf-tech" id="transportation-technology">
        <div className="tf-container tf-tech-grid">
          <div className="tf-tech-copy">
            <p className="tf-eyebrow">TRANSPORTATION TECHNOLOGY</p>
            <h2>Localize the Digital Systems Behind Modern Transportation</h2>
            <p>
              Transportation increasingly operates through connected software, APIs, digital interfaces, structured data, automation, and real-time information exchange. These systems have to work linguistically as well as technically in every market.
            </p>
            <p>
              Stepes localizes transportation management systems, fleet platforms, telematics, routing and dispatch applications, passenger information systems, ticketing, mobile apps, web portals, connected mobility products, and the help, training, and documentation surrounding them.
            </p>
            <div className="tf-link-stack">
              <TextLink href={links.software}>Software Localization Services</TextLink>
              <TextLink href={links.app}>App Localization Services</TextLink>
              <TextLink href={links.api}>Translation API</TextLink>
            </div>
          </div>
          <div className="tf-tms-mock" role="group" aria-label="Transportation management system localization mockup">
            <div className="tf-mock-bar"><span/><span/><span/><strong>Multilingual Operations Console</strong></div>
            <div className="tf-mock-body">
              <div className="tf-route-panel">
                <span className="tf-mock-label">OPERATIONS</span>
                <div className="tf-route-line"><b>Route 204</b><em>On Time</em></div>
                <div className="tf-route-line"><b>Vehicle 18</b><em>In Service</em></div>
                <div className="tf-route-line"><b>Alert</b><em>Platform Change</em></div>
                <div className="tf-route-line"><b>Passenger Message</b><em>Updated</em></div>
              </div>
              <div className="tf-localization-panel">
                <span className="tf-mock-label tf-mock-label-pink">DE-DE PREVIEW</span>
                <h3>Gleisänderung</h3>
                <p>Der Zug fährt heute von Gleis 6 ab.</p>
                <div className="tf-context-line"><span>Terminology matched</span><span>Text fits</span></div>
                <div className="tf-context-line"><span>Variable protected</span><span>Review complete</span></div>
              </div>
            </div>
            <div className="tf-mock-footer"><span>Source content</span><Arrow/><span>Terminology + TM</span><Arrow/><span>Localized experience</span></div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-dark" id="safety-compliance">
        <div className="tf-container tf-safety-grid">
          <div>
            <p className="tf-eyebrow tf-eyebrow-dark">SAFETY & COMPLIANCE</p>
            <h2>Accuracy Where Transportation Language Matters Most</h2>
            <p>
              Transportation language can influence equipment operation, worker safety, passenger safety, maintenance accuracy, emergency response, and compliance. These materials require more than fluent translation.
            </p>
            <p>
              Stepes can configure workflows around technical complexity, intended use, audience, and risk using specialized linguists, controlled terminology, professional review, translation memory, and project-specific quality assurance.
            </p>
            <TextLink href={links.technical} dark>Technical Translation Services</TextLink>
          </div>
          <div className="tf-safety-panel">
            <div className="tf-safety-content">
              {['Safety manuals', 'Operating procedures', 'Emergency procedures', 'Maintenance instructions', 'Inspection materials', 'Dangerous-goods content', 'Warnings & labels', 'Compliance training'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="tf-quality-stack">
              {[
                ['Specialized Linguists', 'Resources matched to subject matter and content requirements.'],
                ['Controlled Terminology', 'Approved technical language across systems and documents.'],
                ['Professional Review', 'Additional linguistic or specialist review based on project needs.'],
                ['Project-Specific QA', 'Checks for terminology, completeness, numbers, units, consistency, formatting, and other requirements.'],
              ].map(([title, text]) => <div key={title}><strong>{title}</strong><p>{text}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-terminology" id="terminology">
        <div className="tf-container tf-terminology-grid">
          <div className="tf-term-diagram" role="group" aria-label="Transportation terminology shared across content touchpoints">
            <div className="tf-term-core">One Transportation Vocabulary</div>
            {['Engineering', 'Software', 'Operations', 'Maintenance', 'Safety', 'Training', 'Passenger Content'].map((label) => <span key={label}>{label}</span>)}
          </div>
          <div>
            <p className="tf-eyebrow">TERMINOLOGY CONTROL</p>
            <h2>One Transportation Vocabulary Across Every Touchpoint</h2>
            <p>
              The same technical concept may appear in an engineering specification, software interface, maintenance procedure, training course, safety instruction, and passenger or customer communication.
            </p>
            <p>
              Stepes uses client-specific glossaries, termbases, translation memory, style guidance, and linguistic instructions to keep important terminology aligned across content types, languages, teams, and future releases.
            </p>
            <div className="tf-link-stack">
              <TextLink href={links.terminology}>Terminology Management</TextLink>
              <TextLink href={links.translationMemory}>Translation Memory</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="tf-section tf-light" id="content-types">
        <div className="tf-container">
          <SectionHeading
            title="Transportation Content We Translate and Localize"
            intro="Transportation organizations create multilingual content across engineering, operations, digital products, training, commercial teams, network communications, and passenger experiences."
          />
          <div className="tf-content-grid">
            {contentGroups.map((group) => (
              <article className="tf-list-panel" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section" id="ai-human-workflows">
        <div className="tf-container">
          <SectionHeading
            eyebrow="AI + HUMAN WORKFLOWS"
            title="The Right Translation Workflow for Every Type of Transportation Content"
            intro="A safety procedure, fleet-management interface, technical manual, knowledge-base article, and customer-facing page do not carry the same linguistic risk or business requirements. Stepes configures the workflow around the content rather than forcing every project into one model."
          />
          <div className="tf-tier-grid">
            {workflowTiers.map((tier) => (
              <article className="tf-tier" key={tier.title}>
                <p className="tf-tier-fit">{tier.fit}</p>
                <h3>{tier.title}</h3>
                <p>{tier.text}</p>
                <div className="tf-tier-flow">{tier.flow}</div>
              </article>
            ))}
          </div>
          <div className="tf-workflow-principle">
            <Icon type="humanAi" />
            <p><strong>AI where scale matters. Professional expertise where judgment matters.</strong> Controlled terminology, translation memory, review, and QA can connect both approaches within one multilingual program.</p>
          </div>
        </div>
      </section>

      <section className="tf-section tf-workflow" id="enterprise-workflow">
        <div className="tf-container tf-workflow-grid">
          <div className="tf-workflow-heading">
            <h2>A Translation Workflow Built for Transportation</h2>
            <p>Successful transportation localization connects content, terminology, people, technology, review, and delivery into one repeatable process.</p>
          </div>
          <ol className="tf-workflow-list">
            {enterpriseWorkflow.map(([title, text], index) => (
              <li className="tf-workflow-row" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="tf-section tf-light" id="continuous-localization">
        <div className="tf-container">
          <SectionHeading
            eyebrow="CONTINUOUS LOCALIZATION"
            title="Built for Transportation Content That Never Stands Still"
            intro="Routes change. Fleets evolve. Software releases continue. Procedures are revised. Training changes. New markets open. Stepes helps transportation teams turn localization into a repeatable multilingual content operation."
          />
          <ol className="tf-continuous-flow" aria-label="Continuous transportation localization flow">
            {['Content Change', 'Identify New & Modified Content', 'Terminology + Translation Memory', 'Translate & Review', 'QA & Approval', 'Multilingual Release'].map((step) => (
              <li className="tf-continuous-step" key={step}><strong>{step}</strong></li>
            ))}
          </ol>
          <div className="tf-platform-grid">
            {[
              ['Translation Memory', 'Reuse approved multilingual content across revisions and recurring releases where context remains appropriate.', links.translationMemory, 'cycle'],
              ['Terminology Management', 'Control technical terms, product names, abbreviations, and approved translations across teams and content types.', links.terminology, 'language'],
              ['Translation API', 'Connect translation with content platforms, applications, repositories, and recurring digital workflows.', links.api, 'digital'],
              ['Continuous Localization', 'Support frequent software, documentation, website, knowledge-base, and digital-content updates without rebuilding the process each time.', links.continuous, 'cycle'],
            ].map(([title, text, href, icon]) => (
              <article className="tf-platform-item" key={title}>
                <Icon type={icon} />
                <h3>{title}</h3>
                <p>{text}</p>
                <TextLink href={href}>Explore {title}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section tf-formats tf-dark" id="formats-multimedia">
        <div className="tf-container tf-formats-grid">
          <div>
            <p className="tf-eyebrow tf-eyebrow-dark">LOCALIZATION ENGINEERING</p>
            <h2>Translate More Than Text</h2>
            <p>
              Transportation information appears in technical documents, applications, training systems, diagrams, interfaces, multimedia, and structured data. Stepes supports both the language and production requirements needed to return content in usable final formats.
            </p>
            <div className="tf-dark-links">
              <TextLink href={links.fileFormats} dark>Translation File Format Support</TextLink>
              <TextLink href={links.multimedia} dark>Multimedia Translation Services</TextLink>
              <TextLink href={links.elearning} dark>eLearning Translation Services</TextLink>
              <TextLink href={links.voiceover} dark>Voice-Over Services</TextLink>
            </div>
          </div>
          <div className="tf-format-cards">
            {[
              ['Documents & Technical Publications', 'Microsoft Office, PDF, Adobe publishing files, technical manuals, presentations, tables, charts, and complex formatted documents.', 'file'],
              ['Software & Structured Content', 'Software resource files, XML, HTML, localization files, structured content, application strings, and development-ready resources.', 'digital'],
              ['eLearning & Training', 'Course text, SCORM and LMS content, assessments, graphics, scripts, subtitles, voiceover, video, and interactive learning assets.', 'training'],
              ['Multimedia', 'Video translation, captions, subtitles, multilingual graphics, audio, and voiceover for training, customer education, safety, and communications.', 'training'],
            ].map(([title, text, icon]) => <div key={title}><Icon type={icon}/><strong>{title}</strong><span>{text}</span></div>)}
          </div>
        </div>
      </section>

      <section className="tf-section" id="languages">
        <div className="tf-container tf-language-grid">
          <div className="tf-language-copy">
            <h2>Transportation Translation in 100+ Languages</h2>
            <p>
              Stepes supports transportation organizations across North America, Latin America, Europe, Asia-Pacific, the Middle East, and Africa. Multilingual programs can share terminology, translation memory, instructions, review processes, and quality requirements across markets.
            </p>
            <TextLink href={links.languages}>Explore All Languages</TextLink>
          </div>
          <div className="tf-language-cloud" role="list" aria-label="Selected transportation translation languages">
            {['Spanish', 'French', 'German', 'Chinese', 'Japanese', 'Korean', 'Portuguese', 'Italian', 'Dutch', 'Arabic', 'Polish', 'Turkish', 'Vietnamese', '100+ Languages'].map((language) => <span role="listitem" key={language}>{language}</span>)}
          </div>
        </div>
      </section>

      <section className="tf-section tf-light" id="related-expertise">
        <div className="tf-container">
          <SectionHeading
            eyebrow="SPECIALIZED TRANSPORTATION EXPERTISE"
            title="Go Deeper Where the Transportation Domain Requires It"
            intro="Transportation programs often cross specialized domains. Explore dedicated Stepes expertise for automotive, aviation, rail, logistics, technical content, and software localization."
          />
          <div className="tf-related-list">
            {related.map(([title, text, href]) => (
              <article className="tf-related-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <TextLink href={href}>{title}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section" id="why-stepes">
        <div className="tf-container">
          <SectionHeading
            eyebrow="WHY STEPES"
            title="Built for Global Transportation Teams"
            intro="Modern transportation localization has to work across technical documentation, digital systems, operational content, training, and customer experiences without losing terminology or context between them."
          />
          <div className="tf-why-grid">
            {[
              ['Transportation & Technical Expertise', 'Professional linguists and reviewers selected for subject matter, content type, audience, and project requirements.', 'road'],
              ['AI + Professional Human Expertise', 'Flexible translation models matched to quality, scale, speed, confidentiality, and content risk.', 'humanAi'],
              ['Consistent Transportation Terminology', 'Client-specific terminology, translation memory, references, and language guidance across systems and releases.', 'language'],
              ['Technology-Enabled Localization', 'APIs, workflow automation, translation memory, terminology management, and continuous localization for recurring programs.', 'digital'],
              ['100+ Languages', 'Centralized multilingual support across major global and regional transportation markets.', 'globe'],
              ['Structured Quality Processes', 'Professional review, linguistic QA, technical checks, and customer-specific quality requirements throughout the workflow.', 'safety'],
            ].map(([title, text, icon]) => (
              <div className="tf-why-item" key={title}><Icon type={icon}/><h3>{title}</h3><p>{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section tf-faq-section" id="faqs">
        <div className="tf-container tf-faq-grid">
          <div className="tf-faq-heading">
            <h2>Transportation Translation Services FAQs</h2>
            <p>Answers about transportation content, software localization, terminology, safety-sensitive translation, AI workflows, formatting, multimedia, and ongoing global programs.</p>
          </div>
          <div className="tf-faq-panel">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="tf-section tf-final-cta" id="contact">
        <div className="tf-container">
          <div className="tf-final-box">
            <h2>Keep Global Transportation Moving Across Languages</h2>
            <p>
              Whether you are translating technical documentation, transportation software, operating procedures, safety information, training, shipping and network communications, or passenger experiences, Stepes can build the multilingual workflow around your content, markets, quality requirements, and release schedule.
            </p>
            <div className="tf-actions tf-actions-center">
              <a className="tf-btn tf-btn-primary" href={links.quote}>Request a Quote</a>
              <a className="tf-btn tf-btn-secondary" href={links.contact}>Talk to an Expert</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.transportation-wireframe {
  --tf-magenta: #C11D63;
  --tf-magenta-dark: #9F1D55;
  --tf-burgundy: #7A1542;
  --tf-blush: #FDF2F7;
  --tf-pink-light: #F2A7C6;
  --tf-ink: #151827;
  --tf-body: #485162;
  --tf-muted: #697386;
  --tf-line: #E3E7EF;
  --tf-soft: #F7F8FB;
  --tf-white: #FFFFFF;
  color: var(--tf-body);
  background: #fff;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}
.transportation-wireframe * { box-sizing: border-box; min-width: 0; }
.tf-container { max-width: 1280px; margin: 0 auto; padding: 0 56px; }
.tf-section { padding: 96px 0; position: relative; }
.tf-light { background: var(--tf-soft); }
.tf-dark { background: linear-gradient(135deg, #151827 0%, #211822 66%, #321A29 100%); color: #fff; }
.transportation-wireframe h1, .transportation-wireframe h2, .transportation-wireframe h3, .transportation-wireframe p { margin-top: 0; }
.transportation-wireframe h1, .transportation-wireframe h2, .transportation-wireframe h3 { font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; color: var(--tf-ink); font-weight: 600; letter-spacing: -0.02em; }
.transportation-wireframe h1 { font-size: 48px; line-height: 1.08; margin-bottom: 22px; max-width: 700px; }
.transportation-wireframe h2 { font-size: 36px; line-height: 1.16; margin-bottom: 20px; }
.transportation-wireframe h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
.transportation-wireframe p { font-size: 17px; line-height: 1.68; color: var(--tf-body); margin-bottom: 18px; }
.transportation-wireframe .tf-dark h2, .transportation-wireframe .tf-dark h3 { color: #fff; }
.transportation-wireframe .tf-dark p { color: rgba(255,255,255,.79); }
.transportation-wireframe a { color: inherit; }
.tf-eyebrow {
  font-size: 11px !important;
  line-height: 1.3 !important;
  font-weight: 600 !important;
  letter-spacing: .14em !important;
  text-transform: uppercase;
  color: var(--tf-magenta) !important;
  margin-bottom: 14px;
}
.tf-eyebrow-dark { color: var(--tf-pink-light) !important; }
.tf-heading { max-width: 820px; margin-bottom: 48px; }
.tf-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
.tf-heading-left { text-align: left; }
.tf-section-intro { font-size: 18px; line-height: 1.62; max-width: 800px; margin-left: auto; margin-right: auto; }
.tf-heading-left .tf-section-intro { margin-left: 0; }

.tf-hero { padding: 104px 0 88px; background: radial-gradient(circle at 82% 22%, rgba(253,242,247,.95) 0, rgba(253,242,247,.95) 20%, rgba(253,242,247,0) 43%), linear-gradient(180deg,#fff 0%,#fbfcff 100%); }
.tf-hero-grid { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(440px,.82fr); gap: 62px; align-items: center; }
.tf-hero-lede { font-size: 21px; line-height: 1.5; color: #2E3441; max-width: 680px; margin-bottom: 18px; }
.tf-hero-support { font-size: 17px; line-height: 1.66; max-width: 700px; }
.tf-actions { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; margin-top: 32px; }
.tf-actions-center { justify-content: center; }
.tf-btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; padding: 14px 24px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease; }
.transportation-wireframe a.tf-btn-primary,
.transportation-wireframe a.tf-btn-primary:link,
.transportation-wireframe a.tf-btn-primary:visited,
.transportation-wireframe a.tf-btn-primary:hover,
.transportation-wireframe a.tf-btn-primary:active,
.transportation-wireframe a.tf-btn-primary:focus,
.transportation-wireframe a.tf-btn-primary:focus-visible { background: var(--tf-magenta); color: #fff !important; -webkit-text-fill-color: #fff; border: 1px solid var(--tf-magenta); }
.transportation-wireframe a.tf-btn-primary *,
.transportation-wireframe a.tf-btn-primary:hover *,
.transportation-wireframe a.tf-btn-primary:focus-visible * { color: #fff !important; fill: currentColor; stroke: currentColor; }
.tf-btn-primary:hover { background: var(--tf-magenta-dark); border-color: var(--tf-magenta-dark); transform: translateY(-1px); box-shadow: 0 12px 24px rgba(193,29,99,.18); }
.tf-btn-primary:focus-visible, .tf-btn-secondary:focus-visible, .tf-text-link:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
.tf-btn-secondary { color: var(--tf-ink); background: #fff; border: 1px solid #D9DFEA; }
.tf-btn-secondary:link, .tf-btn-secondary:visited { color: var(--tf-ink); }
.tf-btn-secondary:hover { color: var(--tf-ink); border-color: #b8c2d4; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(18,26,51,.08); }

.tf-hero-art { min-width: 0; }
.tf-transport-svg { width: 100%; height: auto; display: block; border-radius: 30px; background: rgba(255,255,255,.78); border: 1px solid rgba(193,29,99,.12); box-shadow: 0 28px 70px rgba(18,26,51,.10); }
.tf-svg-blush { fill: #FDF2F7; }
.tf-svg-route { fill: none; stroke: #D9E0EA; stroke-width: 2; }
.tf-svg-route-dash { stroke: #E6A8C3; stroke-dasharray: 7 8; }
.tf-svg-ink { fill: rgba(255,255,255,.64); stroke: #545D69; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
.tf-svg-accent { fill: #fff; stroke: #C11D63; stroke-width: 3; stroke-linecap: round; }
.tf-svg-language rect { fill: #fff; stroke: #E7B5CA; stroke-width: 1.5; }
.tf-svg-language text { fill: #7A1542; font-size: 16px; font-weight: 600; font-family: Inter, sans-serif; }
.tf-proof { background: #fff; border-top: 1px solid var(--tf-line); border-bottom: 1px solid var(--tf-line); }
.tf-proof-grid { display: grid; grid-template-columns: repeat(4,1fr); }
.tf-proof-grid div { padding: 24px 24px; border-left: 1px solid var(--tf-line); }
.tf-proof-grid div:first-child { border-left: 0; }
.tf-proof-grid strong { display: block; color: var(--tf-ink); font-size: 17px; font-weight: 600; margin-bottom: 6px; }
.tf-proof-grid span { display: block; color: var(--tf-muted); font-size: 16px; line-height: 1.45; }

.tf-customers { padding-top: 80px; padding-bottom: 80px; }
.tf-customers .tf-heading { margin-bottom: 36px; }
.tf-logo-row { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); align-items: center; gap: 30px; padding: 24px 8px 18px; border-top: 1px solid #EEF0F3; }
.tf-logo-item { min-width: 0; min-height: 60px; display: flex; align-items: center; justify-content: center; padding: 6px 10px; }
.tf-logo-item img { display: block; width: 142px; height: 34px; object-fit: contain; filter: grayscale(1) brightness(.58) contrast(1.08); opacity: .90; transition: filter .2s ease, opacity .2s ease, transform .2s ease; }
.tf-logo-item:hover img { filter: grayscale(0) brightness(1); opacity: 1; transform: translateY(-1px); }

.tf-icon { width: 24px; height: 24px; stroke: #596272; stroke-width: 1.65; fill: none; stroke-linecap: round; stroke-linejoin: round; flex: 0 0 auto; }
.tf-icon path, .tf-icon circle, .tf-icon rect { vector-effect: non-scaling-stroke; }
.tf-sector-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; }
.tf-sector-card { border-radius: 24px; border: 1px solid var(--tf-line); background: #fff; padding: 28px; box-shadow: 0 10px 30px rgba(18,26,51,.035); }
.tf-sector-card .tf-icon { margin-bottom: 18px; }

.tf-sector-card p { font-size: 16px; line-height: 1.62; }
.tf-text-link { color: var(--tf-magenta); font-size: 16px; line-height: 1.5; font-weight: 600; text-decoration: none; display: inline-flex; gap: 7px; align-items: center; min-height: 44px; }
.tf-text-link:hover { color: var(--tf-magenta-dark); }
.tf-text-link-dark:hover { color: #FFD6E7; }
.tf-text-link:hover .tf-arrow { transform: translateX(3px); }
.tf-text-link-dark { color: var(--tf-pink-light); }
.tf-arrow { display: inline-block; transition: transform .2s ease; }

.tf-lifecycle-grid { display: grid; grid-template-columns: minmax(280px,.58fr) minmax(0,1.42fr); gap: 72px; align-items: start; }
.tf-lifecycle-heading { position: sticky; top: 32px; }
.tf-lifecycle-heading h2 { max-width: 430px; }
.tf-lifecycle-heading p:not(.tf-eyebrow) { max-width: 440px; }
.tf-lifecycle-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 42px; border-top: 1px solid var(--tf-line); list-style: none; padding: 0; margin: 0; }
.tf-lifecycle-row { display: grid; grid-template-columns: 34px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--tf-line); }
.tf-lifecycle-icon { width: 32px; height: 32px; display: flex; align-items: flex-start; justify-content: flex-start; padding-top: 1px; }
.tf-lifecycle-icon .tf-icon { width: 28px; height: 28px; stroke: var(--tf-magenta); stroke-width: 1.7; }
.tf-lifecycle-row h3 { margin-bottom: 8px; }
.tf-lifecycle-row p { font-size: 16px; line-height: 1.58; margin-bottom: 0; }

.tf-tech { background: #fff; }
.tf-tech-grid { display: grid; grid-template-columns: minmax(0,.88fr) minmax(470px,1.12fr); gap: 64px; align-items: center; }
.tf-tech-copy h2 { max-width: 590px; }
.tf-tech-copy p { max-width: 660px; }
.tf-link-stack { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 24px; }
.tf-tms-mock { border-radius: 30px; background: #111A31; color: #fff; overflow: hidden; box-shadow: 0 24px 60px rgba(18,26,51,.17); }
.tf-mock-bar { min-height: 58px; display: flex; align-items: center; gap: 8px; padding: 0 22px; border-bottom: 1px solid rgba(255,255,255,.12); }
.tf-mock-bar > span { width: 9px; height: 9px; border-radius: 50%; background: rgba(255,255,255,.44); }
.tf-mock-bar strong { margin-left: auto; color: rgba(255,255,255,.88); font-size: 16px; line-height: 1.4; font-weight: 600; }
.tf-mock-body { display: grid; grid-template-columns: .92fr 1.08fr; gap: 18px; padding: 24px; }
.tf-route-panel, .tf-localization-panel { border-radius: 22px; padding: 22px; }
.tf-route-panel { background: rgba(255,255,255,.065); border: 1px solid rgba(255,255,255,.10); }
.tf-localization-panel { background: #fff; color: var(--tf-ink); }
.tf-mock-label { display: inline-block; color: rgba(255,255,255,.65); font-size: 14px; font-weight: 600; letter-spacing: .12em; margin-bottom: 16px; }
.tf-mock-label-pink { color: var(--tf-magenta); }
.tf-route-line { padding: 13px 0; border-top: 1px solid rgba(255,255,255,.10); }
.tf-route-line:first-of-type { border-top: 0; }
.tf-route-line b { display: block; color: #fff; font-size: 16px; font-weight: 600; margin-bottom: 5px; }
.tf-route-line em { color: rgba(255,255,255,.70); font-size: 14px; font-style: normal; }

.tf-localization-panel p { font-size: 16px; line-height: 1.6; }
.tf-context-line { display: grid; grid-template-columns: repeat(2,1fr); gap: 8px; margin-top: 8px; }
.tf-context-line span { border-radius: 12px; background: #F3F5F9; padding: 10px; color: #475162; font-size: 14px; line-height: 1.35; }
.tf-mock-footer { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 18px 20px; border-top: 1px solid rgba(255,255,255,.12); color: rgba(255,255,255,.78); font-size: 16px; }
.tf-mock-footer .tf-arrow { color: var(--tf-pink-light); }

.tf-safety-grid { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 64px; align-items: start; }
.tf-safety-grid > div:first-child p { max-width: 620px; }
.tf-safety-panel { display: grid; grid-template-columns: .84fr 1.16fr; gap: 18px; }
.tf-safety-content { display: flex; align-content: flex-start; flex-wrap: wrap; gap: 10px; }
.tf-safety-content span { min-height: 38px; display: inline-flex; align-items: center; padding: 9px 13px; border-radius: 999px; color: #fff; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); font-size: 16px; font-weight: 600; }
.tf-quality-stack { border-radius: 24px; overflow: hidden; border: 1px solid rgba(255,255,255,.12); }
.tf-quality-stack div { padding: 22px 24px; border-top: 1px solid rgba(255,255,255,.12); background: rgba(255,255,255,.06); }
.tf-quality-stack div:first-child { border-top: 0; }
.tf-quality-stack strong { display: block; color: #fff; font-size: 18px; font-weight: 600; margin-bottom: 7px; }
.tf-quality-stack p { font-size: 16px; line-height: 1.5; margin-bottom: 0; }

.tf-terminology-grid { display: grid; grid-template-columns: minmax(440px,1.08fr) minmax(0,.92fr); gap: 64px; align-items: center; }
.tf-term-diagram { min-height: 500px; border-radius: 30px; border: 1px solid var(--tf-line); background: linear-gradient(180deg,#fff,#fbfcff); position: relative; box-shadow: 0 18px 46px rgba(18,26,51,.055); }
.tf-term-core { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 250px; min-height: 140px; border-radius: 30px; background: var(--tf-burgundy); color: #fff; display: flex; align-items: center; justify-content: center; text-align: center; padding: 24px; font-size: 21px; font-weight: 600; }
.tf-term-diagram span { position: absolute; min-width: 126px; min-height: 54px; border-radius: 999px; background: var(--tf-blush); color: var(--tf-magenta); display: flex; align-items: center; justify-content: center; text-align: center; padding: 10px 14px; font-size: 16px; font-weight: 600; }
.tf-term-diagram span:nth-child(2) { left: 7%; top: 15%; }
.tf-term-diagram span:nth-child(3) { right: 7%; top: 15%; }
.tf-term-diagram span:nth-child(4) { left: 5%; top: 45%; }
.tf-term-diagram span:nth-child(5) { right: 5%; top: 45%; }
.tf-term-diagram span:nth-child(6) { left: 9%; bottom: 13%; }
.tf-term-diagram span:nth-child(7) { right: 9%; bottom: 13%; }
.tf-term-diagram span:nth-child(8) { left: 50%; bottom: 5%; transform: translateX(-50%); min-width: 170px; }

.tf-content-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 44px; border-top: 1px solid var(--tf-line); }
.tf-list-panel { border: 0; border-bottom: 1px solid var(--tf-line); background: transparent; padding: 30px 0; }
.tf-list-panel h3 { margin-bottom: 18px; }
.tf-list-panel ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 11px; }
.tf-list-panel li { position: relative; padding-left: 18px; color: var(--tf-body); font-size: 16px; line-height: 1.45; }
.tf-list-panel li:before { content: ""; position: absolute; left: 0; top: .62em; width: 6px; height: 6px; border-radius: 50%; background: var(--tf-magenta); }

.tf-tier-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 24px; }
.tf-tier { border-radius: 28px; background: #fff; border: 1px solid var(--tf-line); padding: 30px; display: flex; flex-direction: column; min-height: 350px; }
.tf-tier-fit { color: var(--tf-magenta) !important; font-size: 16px !important; line-height: 1.45 !important; font-weight: 600 !important; margin-bottom: 12px !important; }
.tf-tier p:not(.tf-tier-fit) { font-size: 16px; line-height: 1.62; }
.tf-tier-flow { margin-top: auto; padding-top: 18px; border-top: 1px solid var(--tf-line); color: var(--tf-ink); font-size: 16px; line-height: 1.5; font-weight: 600; }
.tf-workflow-principle { margin-top: 30px; border-radius: 24px; background: var(--tf-blush); padding: 24px 28px; display: flex; gap: 18px; align-items: flex-start; }
.tf-workflow-principle .tf-icon { stroke: var(--tf-magenta); margin-top: 2px; }
.tf-workflow-principle p { margin-bottom: 0; font-size: 16px; }
.tf-workflow-principle strong { color: var(--tf-ink); }

.tf-workflow { background: #fff; }
.tf-workflow-grid { display: grid; grid-template-columns: minmax(280px,.55fr) minmax(0,1.45fr); gap: 72px; align-items: start; }
.tf-workflow-heading { position: sticky; top: 32px; }
.tf-workflow-heading h2, .tf-workflow-heading p:not(.tf-eyebrow) { max-width: 430px; }
.tf-workflow-list { border-top: 1px solid var(--tf-line); list-style: none; padding: 0; margin: 0; }
.tf-workflow-row { display: grid; grid-template-columns: 66px 1fr; gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--tf-line); }
.tf-workflow-row > span { color: var(--tf-magenta); font-size: 18px; font-weight: 600; line-height: 1.3; }
.tf-workflow-row h3 { margin-bottom: 8px; }
.tf-workflow-row p { font-size: 16px; line-height: 1.58; margin-bottom: 0; }

.tf-continuous-flow { display: grid; grid-template-columns: repeat(6,1fr); list-style: none; padding: 0; margin: 0 0 34px; border: 1px solid var(--tf-line); border-radius: 28px; overflow: hidden; background: #fff; }
.tf-continuous-step { padding: 24px 16px; text-align: center; min-height: 112px; display: flex; align-items: center; justify-content: center; border-left: 1px solid var(--tf-line); position: relative; }
.tf-continuous-step:first-child { border-left: 0; }
.tf-continuous-step strong { display: block; color: var(--tf-ink); font-size: 16px; line-height: 1.45; font-weight: 600; }
.tf-platform-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0 26px; border-top: 1px solid var(--tf-line); }
.tf-platform-item { padding: 30px 0; border-bottom: 1px solid var(--tf-line); }
.tf-platform-item h3 { margin-top: 16px; }
.tf-platform-item p { font-size: 16px; line-height: 1.58; }

.tf-formats-grid { display: grid; grid-template-columns: minmax(0,.86fr) minmax(0,1.14fr); gap: 64px; align-items: center; }
.tf-dark-links { display: flex; flex-wrap: wrap; gap: 18px 24px; margin-top: 26px; }
.tf-format-cards { display: grid; grid-template-columns: repeat(2,1fr); gap: 16px; }
.tf-format-cards div { border-radius: 24px; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); padding: 24px; min-height: 190px; }
.tf-format-cards .tf-icon { stroke: var(--tf-pink-light); margin-bottom: 18px; }
.tf-format-cards strong { color: #fff; display: block; font-size: 18px; font-weight: 600; margin-bottom: 8px; }
.tf-format-cards span { display: block; color: rgba(255,255,255,.74); font-size: 16px; line-height: 1.5; }

.tf-language-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 64px; align-items: center; }
.tf-language-grid > div:first-child p { max-width: 650px; }
.tf-language-cloud { display: flex; flex-wrap: wrap; gap: 12px; align-content: center; }
.tf-language-cloud span { min-height: 46px; display: inline-flex; align-items: center; padding: 10px 17px; border-radius: 999px; background: #F4F6FA; border: 1px solid var(--tf-line); color: var(--tf-ink); font-size: 16px; font-weight: 600; }
.tf-language-cloud span:last-child { background: var(--tf-burgundy); border-color: var(--tf-burgundy); color: #fff; }

.tf-related-list { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 44px; border-top: 1px solid var(--tf-line); }
.tf-related-row { padding: 30px 0; border-bottom: 1px solid var(--tf-line); }
.tf-related-row h3 { margin-bottom: 10px; }
.tf-related-row p { font-size: 16px; line-height: 1.58; margin-bottom: 16px; max-width: 560px; }

.tf-why-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0 34px; border-top: 1px solid var(--tf-line); }
.tf-why-item { padding: 30px 0; border-bottom: 1px solid var(--tf-line); }
.tf-why-item h3 { margin-top: 16px; }
.tf-why-item p { font-size: 16px; line-height: 1.62; margin-bottom: 0; }

.tf-faq-grid { display: grid; grid-template-columns: minmax(300px,.52fr) minmax(0,1fr); gap: 64px; align-items: start; }
.tf-faq-heading { position: sticky; top: 32px; }
.tf-faq-heading p:not(.tf-eyebrow) { font-size: 17px; max-width: 440px; }
.tf-faq-panel { border-radius: 30px; border: 1px solid var(--tf-line); background: #fff; overflow: hidden; }
.transportation-wireframe details { border-top: 1px solid var(--tf-line); }
.transportation-wireframe details:first-child { border-top: 0; }
.transportation-wireframe summary { cursor: pointer; list-style: none; color: var(--tf-ink); font-size: 18px; line-height: 1.4; font-weight: 600; padding: 24px 60px 24px 28px; position: relative; }
.transportation-wireframe summary::-webkit-details-marker { display: none; }
.transportation-wireframe summary:after { content: "+"; position: absolute; right: 28px; top: 24px; color: var(--tf-magenta); font-size: 24px; line-height: 1; }
.transportation-wireframe details[open] summary:after { content: "–"; }
.transportation-wireframe details p { padding: 0 28px 26px; font-size: 16px; line-height: 1.65; max-width: 840px; margin-bottom: 0; }
.transportation-wireframe summary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: -3px; }

.tf-final-cta { padding: 96px 0 112px; background: #fff; }
.tf-final-box { border-radius: 30px; background: linear-gradient(135deg,var(--tf-blush) 0%,#fff 62%); border: 1px solid #F2D9E5; padding: 64px 56px; text-align: center; box-shadow: 0 22px 54px rgba(193,29,99,.08); }
.tf-final-box h2 { max-width: 760px; margin-left: auto; margin-right: auto; }
.tf-final-box p { max-width: 840px; margin-left: auto; margin-right: auto; font-size: 18px; line-height: 1.62; }

@media (max-width: 1100px) {
  .tf-container { padding-left: 40px; padding-right: 40px; }
  .tf-hero-grid, .tf-tech-grid, .tf-safety-grid, .tf-terminology-grid, .tf-formats-grid, .tf-language-grid, .tf-faq-grid { grid-template-columns: 1fr; gap: 46px; }
  .tf-hero-grid { max-width: 900px; }
  .tf-hero-copy { text-align: center; }
  .tf-hero-copy h1, .tf-hero-copy p { margin-left: auto; margin-right: auto; }
  .tf-actions { justify-content: center; }
  .tf-sector-grid, .tf-why-grid, .tf-content-grid { grid-template-columns: repeat(2,1fr); }
  .tf-related-list { grid-template-columns: repeat(2,1fr); }
  .tf-logo-row { grid-template-columns: repeat(5,minmax(0,1fr)); gap: 20px; }
  .tf-logo-item img { width: 130px; height: 32px; }
  .tf-lifecycle-grid, .tf-workflow-grid { grid-template-columns: 1fr; gap: 44px; }
  .tf-lifecycle-heading, .tf-workflow-heading, .tf-faq-heading { position: static; }
  .tf-lifecycle-heading, .tf-workflow-heading { max-width: 820px; }
  .tf-lifecycle-heading h2, .tf-lifecycle-heading p:not(.tf-eyebrow), .tf-workflow-heading h2, .tf-workflow-heading p:not(.tf-eyebrow) { max-width: 760px; }
  .tf-platform-grid { grid-template-columns: repeat(2,1fr); }
  .tf-continuous-flow { grid-template-columns: repeat(3,1fr); }
  .tf-language-copy { text-align: left; }
  .tf-language-copy h2 { text-align: center; margin-left: auto; margin-right: auto; max-width: 760px; }
}

@media (max-width: 900px) {
  .tf-container { padding-left: 24px; padding-right: 24px; }
  .tf-tech-copy .tf-eyebrow,
  .tf-tech-copy h2,
  .tf-terminology-grid > div:last-child .tf-eyebrow,
  .tf-terminology-grid > div:last-child h2,
  .tf-formats-grid > div:first-child .tf-eyebrow,
  .tf-formats-grid > div:first-child h2,
  .tf-language-copy h2 { text-align: center; }
  .tf-tech-copy h2,
  .tf-terminology-grid > div:last-child h2,
  .tf-formats-grid > div:first-child h2,
  .tf-language-copy h2 { margin-left: auto; margin-right: auto; max-width: 760px; }
}

@media (max-width: 768px) {
  .tf-container { padding-left: 24px; padding-right: 24px; }
  .tf-section { padding: 72px 0; }
  .tf-hero { padding: 84px 0 72px; }
  .transportation-wireframe h1 { font-size: 42px; }
  .transportation-wireframe h2 { font-size: 32px; }
  .transportation-wireframe h3 { font-size: 22px; }
  .tf-heading { margin-bottom: 36px; }
  .tf-section-intro, .tf-hero-lede, .tf-final-box p { font-size: 18px; }
  .tf-hero-support { font-size: 16px; }
  .tf-proof-grid { grid-template-columns: repeat(2,1fr); }
  .tf-proof-grid div:nth-child(odd) { border-left: 0; }
  .tf-proof-grid div:nth-child(n+3) { border-top: 1px solid var(--tf-line); }
  .tf-logo-row { grid-template-columns: repeat(3,minmax(0,1fr)); gap: 22px 26px; padding: 26px 0; }
  .tf-logo-item { min-height: 56px; padding: 6px 8px; }
  .tf-logo-item img { width: 126px; height: 30px; }
  .tf-logo-item:nth-child(4), .tf-logo-item:nth-child(5) { transform: translateX(50%); }
  .tf-sector-grid, .tf-content-grid, .tf-related-list, .tf-why-grid, .tf-tier-grid, .tf-platform-grid, .tf-format-cards { grid-template-columns: 1fr; }
  .tf-lifecycle-list { grid-template-columns: 1fr; }
  .tf-tech-copy, .tf-safety-grid > div:first-child, .tf-terminology-grid > div:last-child, .tf-formats-grid > div:first-child, .tf-language-copy { text-align: left; }
  .tf-safety-panel { grid-template-columns: 1fr; }
  .tf-term-diagram { min-height: auto; padding: 24px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px; }
  .tf-term-core, .tf-term-diagram span { position: static !important; transform: none !important; width: auto; min-width: 0; min-height: 54px; }
  .tf-term-core { grid-column: 1 / -1; min-height: 100px; }
  .tf-term-diagram span:last-child { grid-column: 1 / -1; justify-self: center; width: min(100%, 280px); }
  .tf-workflow-principle { align-items: flex-start; }
  .tf-continuous-flow { grid-template-columns: repeat(2,1fr); }
  .tf-continuous-step:nth-child(odd) { border-left: 0; }
  .tf-continuous-step:nth-child(n+3) { border-top: 1px solid var(--tf-line); }
  .tf-mock-body { grid-template-columns: 1fr; }
  .tf-mock-footer { flex-wrap: wrap; }
  .tf-final-box { padding: 48px 30px; }
}

@media (max-width: 480px) {
  .tf-container { padding-left: 20px; padding-right: 20px; }
  .tf-section { padding: 64px 0; }
  .tf-hero { padding: 72px 0 64px; }
  .transportation-wireframe h1 { font-size: 38px; }
  .transportation-wireframe h2 { font-size: 30px; }
  .transportation-wireframe h3 { font-size: 20px; }
  .transportation-wireframe p, .tf-hero-support, .tf-sector-card p, .tf-list-panel li, .tf-tier p:not(.tf-tier-fit), .tf-lifecycle-row p, .tf-workflow-row p, .tf-platform-item p, .tf-related-row p, .tf-why-item p, .transportation-wireframe details p { font-size: 16px; }
  .tf-heading-center { text-align: center; }
  .tf-hero-copy { text-align: center; }
  .tf-hero-copy .tf-eyebrow, .tf-hero-copy h1 { text-align: center; }
  .tf-actions, .tf-actions-center { align-items: stretch; flex-direction: column; width: 100%; }
  .tf-btn { width: 100%; }
  .tf-text-link, .tf-mock-bar strong, .tf-route-line b, .tf-route-line em { overflow-wrap: anywhere; }
  .tf-proof-grid { grid-template-columns: 1fr; }
  .tf-proof-grid div { border-left: 0; border-top: 1px solid var(--tf-line); padding: 22px 0; }
  .tf-proof-grid div:first-child { border-top: 0; }
  .tf-logo-row { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 18px 14px; padding: 22px 0; }
  .tf-logo-item { min-height: 52px; padding: 5px; }
  .tf-logo-item img { width: 112px; height: 28px; }
  .tf-logo-item:nth-child(4), .tf-logo-item:nth-child(5) { transform: none; }
  .tf-logo-item:last-child { grid-column: 1 / -1; }
  .tf-sector-card, .tf-tier, .tf-final-box { border-radius: 24px; padding: 24px; }
  .tf-term-diagram { grid-template-columns: 1fr; padding: 20px; }
  .tf-term-core { grid-column: auto; }
  .tf-term-diagram span:last-child { grid-column: auto; justify-self: stretch; width: auto; }
  .tf-related-row { padding: 26px 0; }
  .tf-list-panel { padding: 26px 0; }
  .tf-lifecycle-row { grid-template-columns: 32px 1fr; gap: 12px; }
  .tf-lifecycle-icon { width: 30px; height: 30px; }
  .tf-lifecycle-icon .tf-icon { width: 26px; height: 26px; }
  .tf-workflow-row { grid-template-columns: 44px minmax(0,1fr); gap: 12px; }
  .tf-tms-mock { border-radius: 24px; }
  .tf-context-line { grid-template-columns: 1fr; }
  .tf-mock-bar > span { display: none; }
  .tf-mock-bar strong { margin-left: 0; text-align: left; }
  .tf-link-stack { display: grid; gap: 8px; }
  .tf-mock-footer .tf-arrow { display: none; }
  .tf-mock-footer span:not(.tf-arrow) { width: 100%; text-align: center; }
  .tf-safety-content span { width: 100%; justify-content: flex-start; border-radius: 14px; }
  .tf-workflow-principle { flex-direction: column; padding: 22px; }
  .tf-continuous-flow { grid-template-columns: 1fr; }
  .tf-continuous-step, .tf-continuous-step:nth-child(odd) { border-left: 0; border-top: 1px solid var(--tf-line); }
  .tf-continuous-step:first-child { border-top: 0; }
  .tf-dark-links { display: grid; gap: 14px; }
  .tf-language-cloud span { width: 100%; justify-content: center; }
  .transportation-wireframe summary { font-size: 17px; padding: 22px 54px 22px 22px; }
  .transportation-wireframe summary:after { right: 22px; top: 22px; }
  .transportation-wireframe details p { padding-left: 22px; padding-right: 22px; }
}
`;
