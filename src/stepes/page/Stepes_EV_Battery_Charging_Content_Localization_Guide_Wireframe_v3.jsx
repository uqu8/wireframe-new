import React from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/ev-battery-charging-content-localization/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const breadcrumbs = [
  { label: "Home", href: "https://www.stepes.com/" },
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  { label: "EV Battery and Charging Content Localization Guide", current: true },
];

const tocItems = [
  { id: "why-ev-localization-is-different", label: "Why EV Localization Is Different" },
  { id: "map-the-ev-content-ecosystem", label: "Map the EV Content Ecosystem" },
  { id: "ev-terminology-management", label: "Build a Controlled Terminology System" },
  { id: "battery-high-voltage-safety", label: "Translate Safety Content by Risk" },
  { id: "charging-hardware-documentation", label: "Localize Charging Hardware Content" },
  { id: "digital-charging-journey", label: "Localize the Digital Charging Journey" },
  { id: "protocol-and-system-data", label: "Separate Language From System Data" },
  { id: "charging-technology-trends", label: "Prepare for New Charging Technologies" },
  { id: "regional-market-adaptation", label: "Adapt Content for Regional Markets" },
  { id: "battery-passport-localization", label: "Manage Battery Passport Content" },
  { id: "cybersecurity-and-updates", label: "Protect Cybersecurity and Update Content" },
  { id: "risk-based-workflow", label: "Use a Risk-Based Workflow" },
  { id: "ev-localization-qa", label: "Validate EV Content in Context" },
  { id: "continuous-ev-localization", label: "Maintain Content Through Change" },
  { id: "ev-localization-checklist", label: "EV Localization Checklist" },
  { id: "stepes-ev-localization", label: "How Stepes Supports EV Content" },
];

const takeaways = [
  "Treat battery, vehicle, charger, app, network, and support content as one multilingual product ecosystem.",
  "Establish EV terminology before translating high-volume documentation or software.",
  "Match translation, review, and testing to the purpose and risk of each content type.",
  "Keep protocol values, software keys, codes, and identifiers separate from translatable language.",
  "Test complete charging journeys instead of reviewing interface strings in isolation.",
  "Manage battery passport and lifecycle information as structured, continuously updated data.",
];

const ecosystemStages = [
  { title: "Battery Systems", note: "Engineering, BMS, manufacturing, safety" },
  { title: "Vehicle Experience", note: "HMI, manuals, diagnostics, alerts" },
  { title: "Charging Hardware", note: "Installation, labels, firmware, service" },
  { title: "Charging Network", note: "Operator platforms, APIs, fleet systems" },
  { title: "Driver Experience", note: "Apps, payment, support, notifications" },
  { title: "Battery Lifecycle", note: "Repair, second life, passport, recycling" },
];

const contentMatrix = [
  ["Battery engineering", "Engineers and suppliers", "Technical accuracy", "Subject-matter review"],
  ["High-voltage service", "Trained technicians", "Safety and procedural clarity", "Independent technical review"],
  ["Vehicle HMI", "Drivers", "Context, brevity, and usability", "In-vehicle or screenshot review"],
  ["Charger interface", "Drivers and operators", "Task completion and text fit", "Device or simulator testing"],
  ["Charging app", "Drivers and fleet users", "Workflow and locale behavior", "Linguistic and functional testing"],
  ["Battery passport", "Multiple authorized audiences", "Data accuracy and lifecycle control", "Data-owner and structured-data validation"],
];

const terminologyDomains = [
  {
    title: "Battery Systems",
    items: ["Battery cell, module, and pack", "Battery management system", "State of charge and state of health", "Thermal management and preconditioning", "Usable capacity and remaining useful life"],
  },
  {
    title: "Charging Equipment",
    items: ["Charger, charging station, charge point, and EVSE", "Connector, plug, socket, inlet, and coupler", "Charging cable and vehicle connector", "AC charging and DC charging", "Fast, rapid, and high-power charging"],
  },
  {
    title: "Power and Energy",
    items: ["Charging power and rated power", "Battery capacity and energy delivered", "Kilowatts and kilowatt-hours", "Charging curve", "Load limits and power sharing"],
  },
  {
    title: "Network Operations",
    items: ["Charge point operator", "E-mobility service provider", "Charging station management system", "Roaming and authentication", "Session, transaction, idle fee, and occupancy fee"],
  },
  {
    title: "Smart Energy",
    items: ["Smart and scheduled charging", "Bidirectional charging", "Vehicle-to-grid, vehicle-to-home, and vehicle-to-load", "Distributed energy resources", "Plug & Charge and Megawatt Charging System"],
  },
];

const termbaseRows = [
  ["Source term and definition", "Clarifies the controlled concept and prevents ambiguity."],
  ["Approved translation", "Establishes the preferred target-language form."],
  ["Product, system, and audience", "Prevents reuse in the wrong interface, document, or user context."],
  ["Regional variant", "Records market-specific terminology and acceptable alternatives."],
  ["Acronym treatment", "Defines when to retain, expand, translate, or avoid an acronym."],
  ["Prohibited alternatives", "Prevents recurring errors and inconsistent legacy language."],
  ["Reference and approval history", "Connects the decision to screenshots, components, reviewers, and dates."],
];

const protectedContentRows = [
  ["Customer-facing status message", "Translate", "Charging session interrupted"],
  ["Technical explanation of an error", "Translate", "The charger could not communicate with the vehicle"],
  ["Protocol error identifier", "Preserve", "Fixed system code"],
  ["API property or resource key", "Lock", "charging.session.status"],
  ["Variable or placeholder", "Lock and validate", "{chargingTime}"],
  ["Acronym", "Apply approved market convention", "EVSE, CPO, SoC"],
  ["Unit symbol", "Preserve according to applicable convention", "kW, kWh"],
];

const chargingJourney = [
  { title: "Discover a Charger", text: "Localize map content, availability, access hours, connector compatibility, parking conditions, and accessibility information." },
  { title: "Understand the Offer", text: "Explain charging speed, pricing, membership, roaming, payment methods, taxes, session fees, and idle or occupancy charges." },
  { title: "Arrive and Connect", text: "Align physical signage, connector labels, screen prompts, QR-code guidance, and vehicle compatibility language." },
  { title: "Authenticate", text: "Support account login, RFID, mobile authorization, payment terminals, Plug & Charge, guest access, and roaming credentials." },
  { title: "Start Charging", text: "Differentiate connected, authorized, preparing, and charging states while providing clear recovery guidance." },
  { title: "Monitor the Session", text: "Validate state of charge, charging power, energy delivered, elapsed time, remaining time, limits, and current cost." },
  { title: "Resolve Problems", text: "Make authentication, communication, payment, connector, interruption, and emergency messages actionable." },
  { title: "Complete and Follow Up", text: "Localize stop confirmation, cable release, session summary, receipt, support, refund, and dispute information." },
];

const protocolRows = [
  ["Endpoint path", "No", "Lock"],
  ["API field name", "No", "Lock"],
  ["Field description", "Yes", "Technical translation"],
  ["Protocol enumeration", "No", "Validate against the specification"],
  ["Code sample", "Usually no", "Protect as code"],
  ["Error identifier", "No", "Preserve"],
  ["Error explanation", "Yes", "Align with the UI and documentation"],
  ["Tutorial narrative", "Yes", "Technical translation and review"],
];

const trendItems = [
  {
    title: "Smart Charging",
    text: "New language appears around schedules, load limits, dynamic pricing, site capacity, grid signals, fleet departure times, and user charging priorities.",
  },
  {
    title: "Bidirectional Energy",
    text: "Interfaces must distinguish charging the vehicle from exporting energy through vehicle-to-grid, vehicle-to-home, vehicle-to-building, and vehicle-to-load functions.",
  },
  {
    title: "North American Charging Terminology",
    text: "Product teams need clear rules for formal SAE J3400 terminology, established market language, connector naming, compatibility statements, and adapter guidance.",
  },
  {
    title: "Megawatt Charging",
    text: "Heavy-duty charging adds specialized content for fleets, depots, high-power equipment, utility coordination, thermal management, safety, and technician training.",
  },
  {
    title: "Battery Swapping and New Authorization Models",
    text: "New workflows create additional operator, customer, training, and support language even when the underlying protocol elements remain protected.",
  },
];

const lifecycleStages = [
  "Materials and Sourcing",
  "Battery Manufacturing",
  "Vehicle Integration",
  "Use and Performance",
  "Service and Repair",
  "Removal and Replacement",
  "Repurposing and Second Life",
  "Collection and Recycling",
  "End-of-Life Reporting",
];

const riskLevels = [
  {
    level: "Level 1",
    title: "Safety-Critical and Controlled Content",
    examples: "High-voltage warnings, emergency response, battery isolation, dismantling, controlled regulatory documentation",
    controls: "Specialized translation, independent revision, terminology control, automated QA, engineering or regulatory approval, and final-format inspection",
  },
  {
    level: "Level 2",
    title: "Technical and Operational Content",
    examples: "Installation manuals, service procedures, specifications, diagnostics, technician training",
    controls: "Subject-matter translation, technical review, terminology and number checks, structured-content QA, and product-owner approval",
  },
  {
    level: "Level 3",
    title: "Product and Transactional Interfaces",
    examples: "Vehicle HMI, charger screens, apps, authentication, payment, notifications",
    controls: "Product-context translation, screenshots and metadata, automated file checks, in-context review, locale testing, and functional testing",
  },
  {
    level: "Level 4",
    title: "Customer Support and Education",
    examples: "Help centers, troubleshooting, onboarding, contact-center scripts, customer email",
    controls: "Native professional translation, terminology alignment, customer-experience review, link validation, and feedback-based updates",
  },
  {
    level: "Level 5",
    title: "Marketing and Brand Content",
    examples: "Campaigns, launches, web content, dealer marketing, advertising",
    controls: "Marketing translation or transcreation, brand guidance, cultural review, and final creative QA",
  },
];

const workflowSteps = [
  ["Inventory Content and Systems", "Identify documents, software, databases, labels, interfaces, training, support content, and data feeds."],
  ["Map Ownership", "Assign owners across engineering, software, safety, regulatory, product, service, support, and regional teams."],
  ["Classify Purpose and Risk", "Determine whether each item is safety-critical, controlled, technical, transactional, customer-facing, or promotional."],
  ["Define Languages and Market Variants", "Separate language requirements from hardware, connector, electrical, pricing, and regulatory differences."],
  ["Build Terminology and Style Guidance", "Resolve core concepts, abbreviations, tone, units, market variants, and prohibited language."],
  ["Prepare Files and Protect Technical Elements", "Identify keys, variables, tags, codes, protocol values, conditional text, images, and character limits."],
  ["Assign Appropriate Specialists", "Match linguists and reviewers to battery, electrical, charging, software, safety, or customer-experience content."],
  ["Translate and Review by Risk", "Apply the approved quality route rather than treating every file equally."],
  ["Validate in the Final Context", "Review the content in the manual, charger, vehicle, app, label, software build, or structured-data environment."],
  ["Preserve Approved Decisions", "Update terminology, Translation Memory, style guidance, issue records, and reviewer decisions."],
];

const qaMatrix = [
  ["High-voltage warning", "Safety", "Independent technical review", "Final-format inspection"],
  ["Charger installation manual", "Technical procedure", "Electrical SME review", "Published-document QA"],
  ["Vehicle charging HMI", "Meaning and driver usability", "Native product review", "In-vehicle testing"],
  ["Charging-station UI", "Task completion and text fit", "Native linguistic review", "Device or simulator testing"],
  ["Mobile charging app", "Workflow and locale behavior", "Product and market review", "End-to-end functional test"],
  ["Payment flow", "Price and transactional clarity", "Commercial and market review", "Staged transaction test"],
  ["Protocol documentation", "Technical integrity", "Engineering review", "Identifier and code checks"],
  ["Battery passport", "Data accuracy and lifecycle control", "Data-owner approval", "Structured-data validation"],
];

const checklistGroups = [
  {
    title: "Before Translation",
    items: [
      "Identify every battery, vehicle, charger, software, support, and lifecycle content source.",
      "Assign an owner to each content source and approval decision.",
      "Separate target languages from market, hardware, and product variants.",
      "Classify content by audience, purpose, and risk.",
      "Approve EV terminology, acronym rules, units, and regional variants.",
      "Protect keys, codes, protocol values, variables, and placeholders.",
      "Provide screenshots, prototypes, character limits, and product references.",
      "Define safety, regulatory, confidentiality, and cybersecurity responsibilities.",
    ],
  },
  {
    title: "During Translation and Review",
    items: [
      "Assign battery, automotive, electrical, software, and market specialists where needed.",
      "Keep recurring concepts aligned across interfaces, documents, and support content.",
      "Preserve warning hierarchy, procedural sequence, numbers, units, and identifiers.",
      "Route unresolved questions to the correct product, engineering, commercial, or legal owner.",
      "Record market-specific terminology and reviewer decisions.",
      "Apply independent review to higher-risk materials.",
    ],
  },
  {
    title: "Before Release",
    items: [
      "Review the localized content in its final device, software, document, label, or data context.",
      "Test charging, authentication, payment, error, and recovery journeys.",
      "Complete required technical, safety, regulatory, and market approvals.",
      "Verify the correct hardware, firmware, software build, market, and language version.",
      "Check labels, diagrams, links, QR codes, accessibility, and right-to-left behavior.",
      "Update Translation Memory, terminology, and the process for future releases.",
    ],
  },
];

const relatedResources = [
  {
    title: "Automotive HMI and Infotainment Localization Guide",
    description: "Explore how context, character limits, scripts, voice, interface design, and in-vehicle testing affect multilingual vehicle software.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization/",
  },
  {
    title: "Automotive Technical Manual Translation and DITA/XML Workflows",
    description: "Manage structured content, translation reuse, terminology, model-year updates, and multilingual automotive publishing.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-technical-manual-translation/",
  },
  {
    title: "Automotive OTA Software Update Localization Guide",
    description: "Plan change detection, version control, release coordination, and rapid validation for recurring multilingual software updates.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-ota-software-update-localization/",
  },
  {
    title: "Automotive Terminology Management Across Models and Markets",
    description: "Build controlled terminology across vehicle platforms, suppliers, departments, regions, and customer touchpoints.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/",
  },
];

const faqs = [
  {
    question: "What EV battery and charging content requires localization?",
    answer: "Localization may cover battery engineering and manufacturing documentation, battery management systems, high-voltage safety information, owner and service manuals, charger installation and maintenance content, vehicle interfaces, charger screens, mobile apps, fleet and network platforms, payments, customer support, training, marketing, and battery lifecycle data. The best starting point is a complete ecosystem inventory rather than a list limited to traditional documents.",
  },
  {
    question: "How is EV charging localization different from ordinary translation?",
    answer: "EV charging localization connects technical documentation, hardware, embedded systems, cloud software, mobile applications, payments, and customer support. It must account for product terminology, protected technical elements, locale behavior, market configurations, interface restrictions, safety, and complete user journeys. Translation is one part of a broader process that includes preparation, reintegration, review, and testing.",
  },
  {
    question: "How should battery and high-voltage warnings be translated?",
    answer: "Safety-related content should be translated by qualified technical linguists using approved terminology and reference materials. Higher-risk content may require independent revision, engineering or safety review, automated QA, and final-format inspection. The translation should preserve the approved warning hierarchy, hazard, consequence, avoidance action, symbols, and procedural sequence.",
  },
  {
    question: "Which EV charging elements should not be translated?",
    answer: "Elements that normally remain unchanged include software keys, variables, protocol values, API field names, certificate data, diagnostic codes, error identifiers, configuration parameters, command names, and protected syntax. The surrounding explanation may be translated, but the identifier should remain intact unless engineering has defined a localized implementation.",
  },
  {
    question: "How do you maintain consistent EV charging terminology?",
    answer: "Create a multilingual termbase containing definitions, approved translations, product context, audience, regional variants, acronym rules, prohibited alternatives, and reviewer decisions. Apply it across manuals, interfaces, apps, support content, and training, then use Translation Memory to preserve approved recurring language through future releases.",
  },
  {
    question: "Does EV charging software need in-context testing?",
    answer: "Yes. Individual strings do not show where text appears, what action it controls, how much space is available, or how it behaves with live data. Reviewing screenshots, devices, test builds, chargers, vehicle interfaces, and complete charging journeys reveals ambiguity, truncation, locale errors, and workflow problems that are invisible in a string file.",
  },
  {
    question: "What is battery passport localization?",
    answer: "Battery passport localization involves presenting approved battery-model and individual-battery information appropriately across languages while preserving structured data, terminology, access rights, identifiers, and update history. It can include field labels, explanations, controlled values, data governance, and validation—not simply the translation of one static document.",
  },
  {
    question: "How can organizations manage frequent EV software and content updates?",
    answer: "Use source-change detection, product-specific Translation Memory, controlled terminology, versioned language assets, defined ownership, risk-based review, and targeted regression testing. Every localized item should be associated with the correct product, hardware, firmware, software build, market, language, and approval status.",
  },
];

const sources = [
  ["ISO 6469-3:2021 — Electrically propelled road vehicles — Safety specifications", "International Organization for Standardization", "https://www.iso.org/standard/68667.html"],
  ["IEC 61851-1 — Electric vehicle conductive charging system — General requirements", "International Electrotechnical Commission", "https://webstore.iec.ch/en/publication/33644"],
  ["ISO 15118-20:2022 — Network and application protocol requirements", "International Organization for Standardization", "https://www.iso.org/standard/77845.html"],
  ["ISO 15118-20:2022/Amd 1:2026", "International Organization for Standardization", "https://www.iso.org/standard/87920.html"],
  ["OCPP 2.1 Is Now Available", "Open Charge Alliance", "https://openchargealliance.org/ocpp-2-1-is-now-available/"],
  ["SAE J3400/2 publication announcement", "SAE International", "https://www.sae.org/articles/press-releases/2025/05/sae-international-publishes-sae-j3400-2-standard-accelerate-safer-faster-ev-charging-across-north-america"],
  ["SAE J3271 — Megawatt Charging System for Electric Vehicles", "SAE International", "https://www.sae.org/standards/j3271_202503-sae-megawatt-charging-system-electric-vehicles"],
  ["Regulation (EU) 2023/1542 concerning batteries and waste batteries", "EUR-Lex", "https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng"],
  ["Regulation (EU) 2023/1804 on alternative fuels infrastructure", "EUR-Lex", "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1804"],
  ["ISO/SAE 21434:2021 — Road vehicles — Cybersecurity engineering", "International Organization for Standardization", "https://www.iso.org/standard/70918.html"],
  ["UN Regulation No. 156 — Software update and software update management system", "UNECE", "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update"],
];

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="M3.75 9h10.5M10 4.75 14.25 9 10 13.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="m6.4 10.2 2.25 2.2 4.95-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path d="m5.25 7 3.75 3.75L12.75 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs shell" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={item.label}>
            {index > 0 ? <span className="breadcrumb-separator" aria-hidden="true">/</span> : null}
            {item.current ? (
              <span className="breadcrumb-current" aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="editorial-link" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function ResponsiveTable({ headers, rows, caption }) {
  return (
    <div className="table-wrap wide-module">
      {caption ? <p className="table-caption">{caption}</p> : null}
      <table>
        <thead>
          <tr>
            {headers.map((header) => <th key={header} scope="col">{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`}>
              {row.map((cell, cellIndex) => (
                <td key={`${rowIndex}-${cellIndex}`} data-label={headers[cellIndex]}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function SourceNote({ children, href, label }) {
  return (
    <p className="source-note">
      {children}{" "}
      <a href={href} target="_blank" rel="noopener noreferrer">{label}<span aria-hidden="true"> ↗</span></a>
    </p>
  );
}

function SectionHeader({ id, number, title, intro }) {
  return (
    <header className="section-header" id={id}>
      {number ? <p className="chapter-number">{number}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}

const styles = `
  :root {
    --ink: #111827;
    --body: #344055;
    --muted: #697386;
    --line: #E3E6EC;
    --soft: #F6F7F9;
    --blush: #FDF2F7;
    --magenta: #C11D63;
    --magenta-dark: #9F1D55;
    --dark: #172033;
    --dark-2: #202B43;
    --shell: 1280px;
    --reading: 760px;
  }

  .stepes-guide,
  .stepes-guide * { box-sizing: border-box; }
  .stepes-guide {
    color: var(--ink);
    background: #fff;
    font-family: Inter, "Segoe UI", Arial, sans-serif;
    line-height: 1.65;
    overflow-x: hidden;
    overflow-x: clip;
  }
  .stepes-guide a { color: inherit; }
  .stepes-guide img,
  .stepes-guide svg { max-width: 100%; }
  .shell { width: min(var(--shell), calc(100% - 112px)); margin-inline: auto; }
  .hero-copy, .summary-panel > *, .article-content, .checklist-group, .related-item, .cta-panel > * { min-width: 0; }
  .stepes-guide h1, .stepes-guide h2, .stepes-guide h3, .stepes-guide p, .stepes-guide li, .stepes-guide a { overflow-wrap: break-word; }

  .breadcrumbs { padding-top: 30px; }
  .breadcrumbs ol { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; font-size: 14px; line-height: 1.45; }
  .breadcrumbs li { display: inline-flex; align-items: center; min-width: 0; }
  .breadcrumbs a { color: #697386; text-decoration: none; padding: 4px 2px; border-radius: 4px; }
  .breadcrumbs a:hover { color: var(--magenta); }
  .breadcrumbs a:focus-visible { outline: 2px solid var(--magenta); outline-offset: 3px; }
  .breadcrumb-separator { color: #A8AFBC; margin-right: 6px; }
  .breadcrumb-current { color: #3E495B; font-weight: 500; overflow-wrap: anywhere; }

  .hero { padding: 26px 0 92px; background: linear-gradient(180deg, #fff 0%, #FBFBFC 100%); border-bottom: 1px solid var(--line); }
  .hero-grid { display: block; }
  .hero-copy { max-width: 920px; min-width: 0; }
  .stepes-guide .eyebrow { margin: 0 0 18px; color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .stepes-guide .eyebrow.on-dark { color: #F2A7C6; }
  .hero h1 { max-width: 920px; margin: 0; font-size: 48px; line-height: 1.08; letter-spacing: -.035em; font-weight: 600; }
  .hero-deck { max-width: 880px; margin: 28px 0 0; color: #42506A; font-size: 20px; line-height: 1.6; }
  .hero-meta { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 26px; color: #667085; font-size: 14px; }
  .hero-meta span { display: inline-flex; align-items: center; gap: 9px; }
  .hero-meta span + span::before { content: ""; width: 4px; height: 4px; border-radius: 50%; background: #B2B8C3; margin-right: 9px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
  .button { min-height: 48px; white-space: normal; text-align: center; padding: 13px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; font-size: 16px; font-weight: 600; text-decoration: none; transition: transform .18s ease, background .18s ease, border-color .18s ease; }
  .button:hover { transform: translateY(-1px); }
  .button:focus-visible { outline: 3px solid rgba(193, 29, 99, .24); outline-offset: 3px; }
  .button.primary,
  .button.primary:visited,
  .button.primary:hover,
  .button.primary:active,
  .button.primary:focus { background: var(--magenta); color: #fff; }
  .button.primary:hover { background: var(--magenta-dark); }
  .button.primary svg { color: #fff; }
  .button.secondary { color: var(--ink); background: #fff; border: 1px solid #D8DCE4; }
  .button.secondary:hover { border-color: #AEB5C0; }
  .summary { padding: 72px 0; }
  .summary-panel { display: grid; grid-template-columns: .7fr 1.3fr; gap: 56px; padding: 44px 48px; background: var(--blush); border-radius: 28px; }
  .summary-panel h2 { margin: 0; max-width: 360px; font-size: 30px; line-height: 1.18; letter-spacing: -.02em; font-weight: 600; }
  .summary-panel > div > p:not(.eyebrow) { margin: 18px 0 0; color: var(--body); font-size: 17px; }
  .takeaway-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 32px; }
  .takeaway-item { display: grid; grid-template-columns: 24px 1fr; gap: 12px; align-items: start; padding: 15px 0; border-bottom: 1px solid rgba(159,29,85,.14); color: #273349; font-size: 16px; }
  .takeaway-item svg { color: var(--magenta); margin-top: 2px; }

  .context-section { padding: 82px 0 92px; }
  .context-heading { max-width: 820px; }
  .context-heading h2 { margin: 0; font-size: 36px; line-height: 1.15; letter-spacing: -.025em; font-weight: 600; }
  .context-heading p { margin: 24px 0 0; color: var(--body); font-size: 18px; }
  .ecosystem-flow { margin-top: 48px; display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .ecosystem-stage { position: relative; padding: 28px 22px 30px; min-height: 160px; }
  .ecosystem-stage:not(:last-child) { border-right: 1px solid var(--line); }
  .ecosystem-stage:not(:last-child)::after { content: ""; position: absolute; top: 40px; right: -7px; width: 13px; height: 13px; border-top: 2px solid var(--magenta); border-right: 2px solid var(--magenta); transform: rotate(45deg); background: #fff; z-index: 1; }
  .ecosystem-stage h3 { margin: 0; font-size: 18px; line-height: 1.3; font-weight: 600; }
  .ecosystem-stage p { margin: 12px 0 0; color: var(--muted); font-size: 16px; line-height: 1.55; }

  .mobile-toc { display: none; }
  .article-layout { display: grid; grid-template-columns: 260px minmax(0, 1fr); align-items: start; gap: 64px; width: min(var(--shell), calc(100% - 112px)); margin: 0 auto; padding: 20px 0 96px; }
  .toc-rail { align-self: start; position: sticky; top: 88px; max-height: calc(100vh - 112px); overflow: auto; padding: 14px 22px 18px 0; border-right: 1px solid var(--line); scrollbar-width: thin; }
  .toc-title { margin: 0 0 15px; color: var(--ink); font-size: 16px; line-height: 1.4; font-weight: 600; }
  .toc-list { margin: 0; padding: 0; list-style: none; }
  .toc-list li { margin: 0; }
  .toc-list a { display: block; padding: 8px 8px 8px 14px; border-left: 2px solid transparent; color: #667085; font-size: 16px; overflow-wrap: anywhere; line-height: 1.35; text-decoration: none; }
  .toc-list a:hover { color: var(--magenta); border-left-color: var(--magenta); }
  .toc-list a:focus-visible { color: var(--magenta); outline: 2px solid rgba(193,29,99,.24); outline-offset: 2px; }

  .article-content { min-width: 0; width: 100%; }
  .article-section { width: min(var(--reading), 100%); padding: 76px 0; border-bottom: 1px solid var(--line); scroll-margin-top: 104px; }
  .article-section:first-child { padding-top: 32px; }
  .article-section:last-child { border-bottom: 0; }
  .section-header { scroll-margin-top: 104px; }
  .stepes-guide .chapter-number { margin: 0 0 12px; color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
  .section-header h2 { margin: 0; font-size: 36px; line-height: 1.16; letter-spacing: -.025em; font-weight: 600; }
  .section-intro { margin: 22px 0 0; color: #42506A; font-size: 20px; line-height: 1.62; }
  .article-content h3 { margin: 42px 0 14px; font-size: 24px; line-height: 1.28; letter-spacing: -.012em; font-weight: 600; }
  .article-content p { margin: 18px 0 0; color: var(--body); font-size: 18px; line-height: 1.72; }
  .article-content ul { margin: 18px 0 0; padding-left: 22px; }
  .article-content li { margin: 9px 0; color: var(--body); font-size: 17px; line-height: 1.62; }
  .article-content strong { color: var(--ink); font-weight: 600; }
  .editorial-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 22px; color: var(--magenta) !important; font-size: 16px; font-weight: 600; text-decoration: none; }
  .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .editorial-link svg { transition: transform .18s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link:focus-visible { outline: 2px solid var(--magenta); outline-offset: 4px; }

  .two-column-editorial { display: grid; grid-template-columns: 1fr 1fr; gap: 0 46px; margin-top: 32px; }
  .editorial-block { padding: 24px 0 28px; border-top: 1px solid var(--line); }
  .editorial-block h3 { margin: 0 0 12px; font-size: 21px; }
  .editorial-block p { margin-top: 0; font-size: 17px; }
  .editorial-block ul { margin-top: 12px; }

  .inline-callout { margin: 34px 0 0; padding: 25px 28px; border-left: 3px solid var(--magenta); background: var(--soft); border-radius: 0 20px 20px 0; }
  .inline-callout .callout-label { margin: 0 0 8px; color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .12em; text-transform: uppercase; }
  .inline-callout p { margin: 0; color: #29364C; font-size: 18px; line-height: 1.6; }

  .wide-module { width: min(956px, calc(100vw - 436px)); max-width: none; margin-left: 0; transform: none; }
  .table-wrap { margin-top: 36px; overflow: hidden; border: 1px solid var(--line); border-radius: 22px; background: #fff; }
  .table-caption { margin: 0 !important; padding: 18px 22px; border-bottom: 1px solid var(--line); color: var(--ink) !important; background: var(--soft); font-size: 16px !important; font-weight: 600; }
  .stepes-guide table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .stepes-guide th { padding: 17px 18px; background: #F8F9FB; color: #283449; font-size: 16px; line-height: 1.35; font-weight: 600; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); }
  .stepes-guide td { padding: 18px; color: #435067; font-size: 16px; line-height: 1.5; vertical-align: top; border-bottom: 1px solid var(--line); overflow-wrap: anywhere; }
  .stepes-guide tr:last-child td { border-bottom: 0; }
  .stepes-guide td:first-child { color: var(--ink); font-weight: 600; }

  .source-note { margin-top: 24px !important; padding-top: 17px; border-top: 1px solid var(--line); color: #677286 !important; font-size: 16px !important; line-height: 1.6 !important; }
  .source-note a { color: var(--magenta); font-weight: 600; text-decoration: none; }
  .source-note a:hover { text-decoration: underline; text-underline-offset: 3px; }

  .domain-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 42px; margin-top: 30px; }
  .domain-grid .editorial-block:last-child { grid-column: 1 / -1; }

  .acronym-band { margin-top: 34px; padding: 28px; border-radius: 22px; background: var(--soft); }
  .acronym-band h3 { margin-top: 0; }
  .acronym-list { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 18px; }
  .acronym-list span { padding: 8px 12px; border: 1px solid #DDE1E8; border-radius: 999px; background: #fff; color: #37445B; font-size: 16px; font-weight: 600; }

  .warning-hierarchy { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 22px; }
  .warning-hierarchy span { padding: 9px 14px; border: 1px solid #D8DDE5; border-radius: 999px; color: #2C384E; background: #fff; font-size: 16px; font-weight: 600; }

  .journey-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .journey-step { display: grid; grid-template-columns: 56px 220px 1fr; gap: 22px; align-items: start; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .journey-number { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); font-size: 16px; font-weight: 600; }
  .journey-step h3 { margin: 6px 0 0; font-size: 19px; line-height: 1.35; }
  .journey-step p { margin: 2px 0 0; font-size: 17px; }

  .dark-chapter { width: 100%; margin: 76px 0; padding: 58px; border-radius: 28px; background: linear-gradient(135deg, var(--dark), var(--dark-2)); color: #fff; scroll-margin-top: 100px; }
  .dark-chapter h2 { margin: 0; max-width: 760px; color: #fff; font-size: 36px; line-height: 1.16; font-weight: 600; }
  .dark-chapter > p:not(.eyebrow) { max-width: 790px; margin: 22px 0 0; color: #D6DCE7; font-size: 19px; line-height: 1.65; }
  .trend-list { margin-top: 34px; border-top: 1px solid rgba(255,255,255,.16); }
  .trend-item { display: grid; grid-template-columns: 240px 1fr; gap: 34px; padding: 24px 0; border-bottom: 1px solid rgba(255,255,255,.16); }
  .trend-item h3 { margin: 0; color: #fff; font-size: 20px; }
  .trend-item p { margin: 0; color: #CFD6E3; font-size: 17px; }
  .dark-chapter .source-note { border-color: rgba(255,255,255,.18); color: #CFD6E3 !important; }
  .dark-chapter .source-note a { color: #F2A7C6; }

  .lifecycle { margin-top: 38px; display: grid; grid-template-columns: repeat(9, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .lifecycle-stage { position: relative; min-height: 144px; padding: 22px 12px; display: flex; flex-direction: column; justify-content: space-between; border-right: 1px solid var(--line); }
  .lifecycle-stage:last-child { border-right: 0; }
  .lifecycle-stage span:first-child { color: var(--magenta); font-size: 13px; font-weight: 600; }
  .lifecycle-stage span:last-child { color: #2E3A50; font-size: 16px; line-height: 1.35; font-weight: 600; }

  .risk-levels { margin-top: 36px; border-top: 1px solid var(--line); }
  .risk-level { display: grid; grid-template-columns: 92px 245px 1fr; gap: 24px; padding: 27px 0; border-bottom: 1px solid var(--line); }
  .risk-level-tag { color: var(--magenta); font-size: 15px; font-weight: 600; }
  .risk-level h3 { margin: 0; font-size: 19px; }
  .risk-level p { margin: 0; font-size: 16px; line-height: 1.55; }
  .risk-controls { margin-top: 10px !important; color: #233149 !important; }

  .workflow { margin-top: 42px; border-left: 1px solid #D9DEE6; }
  .workflow-step { position: relative; display: grid; grid-template-columns: 74px 230px 1fr; gap: 20px; padding: 0 0 31px 36px; }
  .workflow-step:last-child { padding-bottom: 0; }
  .workflow-step::before { content: ""; position: absolute; left: -6px; top: 8px; width: 11px; height: 11px; border-radius: 50%; background: #fff; border: 2px solid var(--magenta); }
  .workflow-step .step-index { color: var(--magenta); font-size: 14px; font-weight: 600; letter-spacing: .05em; }
  .workflow-step h3 { margin: 0; font-size: 18px; }
  .workflow-step p { margin: 0; font-size: 16px; }

  .checklist-section { width: 100%; margin: 76px 0; padding: 54px; border-radius: 28px; background: var(--soft); scroll-margin-top: 100px; }
  .checklist-section h2 { margin: 0; font-size: 36px; line-height: 1.16; font-weight: 600; }
  .checklist-intro { max-width: 760px; margin: 20px 0 0 !important; font-size: 18px !important; }
  .checklist-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 34px; margin-top: 38px; }
  .checklist-group h3 { margin: 0 0 18px; font-size: 20px; }
  .checklist-group ul { margin: 0; padding: 0; list-style: none; }
  .checklist-group li { display: grid; grid-template-columns: 20px 1fr; gap: 10px; margin: 0; padding: 12px 0; border-top: 1px solid #DBE0E7; color: #3D4960; font-size: 16px; line-height: 1.5; }
  .checklist-group li svg { color: var(--magenta); margin-top: 2px; }

  .stepes-support { margin-top: 34px; }
  .support-row { display: grid; grid-template-columns: 250px 1fr; gap: 38px; padding: 27px 0; border-top: 1px solid var(--line); }
  .support-row:last-child { border-bottom: 1px solid var(--line); }
  .support-row h3 { margin: 0; font-size: 20px; }
  .support-row p { margin: 0; font-size: 17px; }

  .faq-section { padding: 96px 0; background: #FBFBFC; border-top: 1px solid var(--line); }
  .faq-shell { width: min(960px, calc(100% - 112px)); margin: 0 auto; }
  .faq-shell h2 { margin: 0; font-size: 36px; line-height: 1.16; font-weight: 600; }
  .faq-list { margin-top: 34px; border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item summary { min-height: 72px; display: flex; align-items: center; justify-content: space-between; gap: 22px; padding: 19px 0; cursor: pointer; color: var(--ink); font-size: 18px; line-height: 1.4; font-weight: 600; list-style: none; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary svg { flex: 0 0 auto; transition: transform .18s ease; }
  .faq-item[open] summary svg { transform: rotate(180deg); }
  .faq-item summary:focus-visible { outline: 2px solid var(--magenta); outline-offset: 4px; }
  .faq-answer { max-width: 820px; padding: 0 0 25px; color: var(--body); font-size: 17px; line-height: 1.7; }

  .sources-section { padding: 88px 0; }
  .sources-shell { width: min(1000px, calc(100% - 112px)); margin: 0 auto; }
  .sources-shell h2 { margin: 0; font-size: 36px; line-height: 1.16; font-weight: 600; }
  .sources-shell > p:not(.eyebrow) { max-width: 760px; margin: 20px 0 0; color: var(--body); font-size: 18px; }
  .source-list { margin-top: 34px; border-top: 1px solid var(--line); }
  .source-entry { display: grid; grid-template-columns: 1fr 230px; gap: 30px; padding: 19px 0; border-bottom: 1px solid var(--line); }
  .source-entry a { color: #253149; font-size: 16px; line-height: 1.5; font-weight: 600; text-decoration: none; overflow-wrap: anywhere; }
  .source-entry a:hover { color: var(--magenta); }
  .source-entry span { color: #707A8D; font-size: 16px; }

  .related-section { padding: 88px 0; border-top: 1px solid var(--line); }
  .related-header { display: flex; align-items: end; justify-content: space-between; gap: 30px; }
  .related-header h2 { margin: 0; max-width: 650px; font-size: 36px; line-height: 1.16; font-weight: 600; }
  .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 44px; margin-top: 36px; border-top: 1px solid var(--line); }
  .related-item { padding: 28px 0 31px; border-bottom: 1px solid var(--line); }
  .related-item h3 { margin: 0; font-size: 21px; line-height: 1.35; font-weight: 600; }
  .related-item h3 a { color: var(--ink); text-decoration: none; }
  .related-item h3 a:hover { color: var(--magenta); }
  .related-item p { margin: 13px 0 0; color: var(--body); font-size: 16px; line-height: 1.6; }

  .final-cta { padding: 90px 0 104px; background: #fff; }
  .cta-panel { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 48px; padding: 54px 58px; border-radius: 30px; background: var(--blush); border: 1px solid rgba(193,29,99,.12); }
  .cta-panel h2 { max-width: 740px; margin: 0; font-size: 38px; line-height: 1.15; letter-spacing: -.025em; font-weight: 600; }
  .cta-panel p:not(.eyebrow) { max-width: 760px; margin: 19px 0 0; color: #455168; font-size: 18px; }
  .cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 240px; }

  @media (max-width: 1180px) {
    .ecosystem-flow { grid-template-columns: repeat(3, 1fr); }
    .ecosystem-stage:nth-child(3) { border-right: 0; }
    .ecosystem-stage:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
    .ecosystem-stage:nth-child(3)::after { display: none; }
    .lifecycle { grid-template-columns: repeat(3, 1fr); }
    .lifecycle-stage:nth-child(3n) { border-right: 0; }
    .lifecycle-stage:nth-child(-n+6) { border-bottom: 1px solid var(--line); }
  }

  @media (max-width: 1099px) {
    .shell { width: calc(100% - 48px); }
    .hero { padding-bottom: 76px; }
    .hero-copy { max-width: 840px; }
    .summary-panel { grid-template-columns: 1fr; gap: 32px; }
    .summary-panel h2 { max-width: 660px; }
    .mobile-toc { display: block; width: calc(100% - 48px); margin: 0 auto 20px; }
    .mobile-toc details { border: 1px solid var(--line); border-radius: 18px; background: #fff; }
    .mobile-toc summary { min-height: 54px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 14px 18px; cursor: pointer; color: var(--ink); font-size: 16px; font-weight: 600; list-style: none; }
    .mobile-toc summary::-webkit-details-marker { display: none; }
    .mobile-toc summary svg { flex: 0 0 auto; }
    .mobile-toc details[open] summary svg { transform: rotate(180deg); }
    .mobile-toc .toc-list { padding: 0 12px 14px; }
    .mobile-toc .toc-list a { font-size: 16px; padding: 10px 10px; }
    .toc-rail { display: none; }
    .article-layout { display: block; width: min(780px, calc(100% - 48px)); padding-top: 0; }
    .article-section { width: 100%; }
    .wide-module,
    .dark-chapter,
    .checklist-section { width: 100%; margin-left: 0; transform: none; }
    .dark-chapter,
    .checklist-section { margin-top: 76px; margin-bottom: 76px; }
    .risk-level { grid-template-columns: 80px 220px 1fr; }
    .cta-panel { grid-template-columns: 1fr; }
    .cta-actions { flex-direction: row; min-width: 0; }
  }

  @media (max-width: 899px) {
    .checklist-grid { grid-template-columns: 1fr; gap: 0; }
    .checklist-group + .checklist-group { margin-top: 34px; }
    .support-row { grid-template-columns: 1fr; gap: 10px; }
    .risk-level { grid-template-columns: 72px 1fr; gap: 10px 18px; }
    .risk-level > div:last-child { grid-column: 2; }
    .workflow-step { grid-template-columns: 64px 1fr; gap: 16px; }
    .workflow-step p { grid-column: 2; }
  }

  @media (max-width: 767px) {
    .breadcrumbs { padding-top: 20px; }
    .breadcrumbs li:last-child { flex-basis: 100%; }
    .breadcrumbs li:last-child .breadcrumb-separator { display: none; }
    .hero { padding: 22px 0 66px; }
    .hero h1 { font-size: 40px; line-height: 1.1; }
    .hero-deck { font-size: 18px; }
    .hero-meta span + span::before { display: none; }
    .hero-meta { gap: 8px 18px; }
    .hero-meta span { width: 100%; }
    .summary { padding: 56px 0; }
    .summary-panel { padding: 34px 28px; }
    .takeaway-list { grid-template-columns: 1fr; }
    .context-section { padding: 64px 0 72px; }
    .context-heading h2,
    .section-header h2,
    .dark-chapter h2,
    .checklist-section h2,
    .faq-shell h2,
    .sources-shell h2,
    .related-header h2 { font-size: 32px; }
    .ecosystem-flow { grid-template-columns: 1fr; }
    .ecosystem-stage { min-height: 0; padding: 22px 18px; border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
    .ecosystem-stage:last-child { border-bottom: 0 !important; }
    .ecosystem-stage::after { display: none !important; }
    .article-section { padding: 62px 0; }
    .article-content p { font-size: 17px; }
    .section-intro { font-size: 18px; }
    .two-column-editorial,
    .domain-grid { grid-template-columns: 1fr; gap: 0; }
    .domain-grid .editorial-block:last-child { grid-column: auto; }
    .journey-step { grid-template-columns: 46px 1fr; gap: 14px; }
    .journey-step p { grid-column: 2; margin-top: 5px; }
    .dark-chapter { padding: 38px 28px; border-radius: 24px; }
    .trend-item { grid-template-columns: 1fr; gap: 10px; }
    .lifecycle { grid-template-columns: 1fr; }
    .lifecycle-stage { min-height: 0; flex-direction: row; gap: 20px; padding: 18px; border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
    .lifecycle-stage:last-child { border-bottom: 0 !important; }
    .risk-level { grid-template-columns: 1fr; gap: 8px; }
    .workflow-step { grid-template-columns: 54px 1fr; gap: 14px; padding-left: 26px; }
    .workflow-step p { grid-column: 2; }
    .checklist-section { padding: 38px 28px; border-radius: 24px; }
    .support-row { grid-template-columns: 1fr; gap: 10px; }
    .faq-section { padding: 72px 0; }
    .faq-shell,
    .sources-shell { width: calc(100% - 48px); }
    .source-entry { grid-template-columns: 1fr; gap: 6px; }
    .related-header { align-items: start; flex-direction: column; }
    .related-grid { grid-template-columns: 1fr; }
    .cta-panel { padding: 40px 30px; }
    .cta-panel h2 { font-size: 32px; }
    .cta-actions { flex-direction: column; }
    .button { width: 100%; }
  }

  @media (max-width: 680px) {
    .table-wrap { border-radius: 18px; overflow: visible; border: 0; background: transparent; }
    .table-caption { border: 1px solid var(--line); border-radius: 16px 16px 0 0; }
    .stepes-guide table, .stepes-guide tbody, .stepes-guide tr, .stepes-guide td { display: block; width: 100%; }
    .stepes-guide thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    .stepes-guide tbody { display: grid; gap: 14px; }
    .stepes-guide tr { padding: 8px 18px; border: 1px solid var(--line); border-radius: 16px; background: #fff; }
    .stepes-guide td { display: grid; grid-template-columns: minmax(118px, .7fr) 1.3fr; gap: 15px; padding: 12px 0; border-bottom: 1px solid var(--line); }
    .stepes-guide td::before { content: attr(data-label); color: #6B7587; font-size: 16px; line-height: 1.4; font-weight: 600; }
    .stepes-guide tr:last-child td { border-bottom: 1px solid var(--line); }
    .stepes-guide td:last-child { border-bottom: 0 !important; }
  }

  @media (max-width: 480px) {
    .shell,
    .mobile-toc,
    .article-layout,
    .faq-shell,
    .sources-shell { width: calc(100% - 40px); }
    .hero h1 { font-size: 37px; line-height: 1.1; }
    .hero-actions { flex-direction: column; }
    .summary-panel { padding: 30px 22px; border-radius: 22px; }
    .summary-panel h2 { font-size: 28px; }
    .context-heading h2,
    .section-header h2,
    .dark-chapter h2,
    .checklist-section h2,
    .faq-shell h2,
    .sources-shell h2,
    .related-header h2 { font-size: 30px; }
    .dark-chapter,
    .checklist-section { padding: 32px 22px; }
    .cta-panel { padding: 34px 22px; border-radius: 24px; }
    .cta-panel h2 { font-size: 30px; }
    .stepes-guide td { grid-template-columns: 1fr; gap: 5px; }
  }
`;

export default function EVBatteryChargingContentLocalizationGuideWireframe() {
  return (
    <div className="stepes-guide">
      <style>{styles}</style>

      <Breadcrumbs />

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">EV Localization Guide</p>
            <h1>EV Battery and Charging Content Localization Guide</h1>
            <p className="hero-deck">
              Electric vehicle localization extends across battery engineering, high-voltage safety, charging hardware, vehicle interfaces, mobile apps, payment journeys, support content, and battery lifecycle information. Learn how to keep this connected content accurate, consistent, and usable across languages, markets, products, and releases.
            </p>
            <div className="hero-meta" aria-label="Guide information">
              <span>By Stepes Automotive Localization Team</span>
            </div>
            <div className="hero-actions">
              <a className="button primary" href={sectionUrl("why-ev-localization-is-different")}>
                Explore the Guide <ArrowIcon />
              </a>
              <a className="button secondary" href={sectionUrl("ev-localization-checklist")}>
                Jump to the Checklist <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="shell summary-panel">
          <div>
            <p className="eyebrow">Key Takeaways</p>
            <h2>Build One Multilingual System Across the EV Ecosystem</h2>
            <p>Use the guide to connect terminology, risk, workflow, testing, and lifecycle governance instead of treating every file as a separate translation project.</p>
          </div>
          <div className="takeaway-list">
            {takeaways.map((item) => (
              <div className="takeaway-item" key={item}>
                <CheckIcon />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="context-section">
        <div className="shell">
          <div className="context-heading">
            <h2>EV Localization Is a Connected Content System</h2>
            <p>
              An electric vehicle customer may encounter the same charging concept on an instrument cluster, an in-vehicle display, a charging-station screen, a mobile app, a payment receipt, and a support page. A technician may see related terminology in diagnostic software, service procedures, wiring diagrams, safety labels, and battery repair instructions.
            </p>
            <p>
              These experiences may be developed by different teams and delivered through different systems, but the user experiences them as one connected ecosystem. Effective EV localization brings the workstreams together through controlled terminology, content-specific review, in-context testing, structured language assets, and clear ownership.
            </p>
          </div>
          <div className="ecosystem-flow" aria-label="EV content ecosystem">
            {ecosystemStages.map((stage) => (
              <div className="ecosystem-stage" key={stage.title}>
                <h3>{stage.title}</h3>
                <p>{stage.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mobile-toc">
        <details>
          <summary>In This Guide <ChevronIcon /></summary>
          <ol className="toc-list">
            {tocItems.map((item) => <li key={item.id}><a href={sectionUrl(item.id)}>{item.label}</a></li>)}
          </ol>
        </details>
      </div>

      <div className="article-layout">
        <aside className="toc-rail" aria-label="Table of contents">
          <p className="toc-title">In This Guide</p>
          <ol className="toc-list">
            {tocItems.map((item) => <li key={item.id}><a href={sectionUrl(item.id)}>{item.label}</a></li>)}
          </ol>
        </aside>

        <main className="article-content">
          <section className="article-section">
            <SectionHeader
              id="why-ev-localization-is-different"
              number="01"
              title="Why EV Battery and Charging Localization Is Different"
              intro="EV localization sits at the intersection of automotive engineering, electrical systems, software, energy, payments, safety, and customer experience. Each discipline introduces its own terminology, users, content formats, release cycles, and quality requirements."
            />

            <h3>One Concept Can Appear Across Many Channels</h3>
            <p>
              Consider scheduled charging. The same function may appear in vehicle-control specifications, in-vehicle charging settings, mobile app controls, wallbox displays, energy-management platforms, customer onboarding, notifications, troubleshooting articles, and dealer training. The wording cannot always be identical because the available space, audience, and purpose differ. It must nevertheless remain conceptually aligned.
            </p>

            <h3>Safety and Usability Are Closely Connected</h3>
            <p>
              EV content ranges from marketing messages to high-voltage isolation procedures. A mistranslated campaign headline may weaken a brand message. A mistranslated warning, connector instruction, payment amount, or charging error can affect safety, product use, or customer trust. Organizations should classify content according to its function and potential impact rather than applying one uniform workflow.
            </p>

            <h3>Hardware and Software Change on Different Schedules</h3>
            <p>
              Vehicle systems, battery management software, charging equipment, charger firmware, mobile apps, charging management platforms, payment integrations, and support systems may be owned by different teams and updated independently. Language assets must support product variation without allowing older terminology to spread into the wrong release.
            </p>

            <h3>Market Differences Extend Beyond Language</h3>
            <p>
              A locale may also vary by connector, electrical environment, units, currency, tax presentation, charging model, payment method, accessibility expectations, regulatory content, and customer-support structure. A French translation for France may not be appropriate for Canada, and Spanish content for Spain may not fit the charging environment or commercial language used in Mexico.
            </p>

            <div className="inline-callout">
              <p className="callout-label">Central Principle</p>
              <p>Manage EV language as part of the product system, not as a final document-production step.</p>
            </div>
          </section>

          <section className="article-section">
            <SectionHeader
              id="map-the-ev-content-ecosystem"
              number="02"
              title="Map the Complete EV Battery and Charging Content Ecosystem"
              intro="A reliable localization program begins with an inventory of every place where battery and charging information is created, stored, displayed, or reused."
            />

            <div className="two-column-editorial">
              <div className="editorial-block">
                <h3>Battery Engineering and Manufacturing</h3>
                <ul>
                  <li>Cell, module, and pack specifications</li>
                  <li>Battery management and thermal management systems</li>
                  <li>Manufacturing, inspection, and supplier quality content</li>
                  <li>Test protocols, durability data, and engineering changes</li>
                </ul>
              </div>
              <div className="editorial-block">
                <h3>Vehicle and High-Voltage Systems</h3>
                <ul>
                  <li>Owner, service, repair, and emergency response manuals</li>
                  <li>High-voltage warnings and equipment labels</li>
                  <li>Instrument-cluster, HMI, and diagnostic content</li>
                  <li>Charging settings, range, energy, and driver notifications</li>
                </ul>
              </div>
              <div className="editorial-block">
                <h3>Charging Hardware and Field Operations</h3>
                <ul>
                  <li>Product specifications, installation, and commissioning</li>
                  <li>Charger displays, firmware messages, and equipment labels</li>
                  <li>Maintenance, diagnostics, troubleshooting, and service bulletins</li>
                  <li>Installer, operator, and technician training</li>
                </ul>
              </div>
              <div className="editorial-block">
                <h3>Charging Software and Networks</h3>
                <ul>
                  <li>Charging station management and fleet platforms</li>
                  <li>Mobile apps, driver portals, and operator dashboards</li>
                  <li>API documentation, authentication, payment, and roaming</li>
                  <li>Status messages, notifications, transaction records, and receipts</li>
                </ul>
              </div>
              <div className="editorial-block">
                <h3>Customer and Commercial Content</h3>
                <ul>
                  <li>Charger discovery, availability, and compatibility information</li>
                  <li>Pricing, onboarding, support, refund, and incident communications</li>
                  <li>Dealer, contact-center, and partner training</li>
                  <li>Product launch and marketing content</li>
                </ul>
              </div>
              <div className="editorial-block">
                <h3>Battery Lifecycle Content</h3>
                <ul>
                  <li>Performance, state-of-health, service, and repair records</li>
                  <li>Removal, repurposing, second-life, and dismantling guidance</li>
                  <li>Recycling, sustainability, and carbon-footprint information</li>
                  <li>Battery passport fields and lifecycle updates</li>
                </ul>
              </div>
            </div>

            <ResponsiveTable
              caption="EV Content Classification Matrix"
              headers={["Content Environment", "Primary Audience", "Main Localization Risk", "Typical Validation"]}
              rows={contentMatrix}
            />

            <SourceNote href="https://webstore.iec.ch/en/publication/33644" label="View IEC 61851-1">
              IEC 61851-1 is one of the frameworks that may inform charging-system operating conditions, connections, electrical safety, marking, and manual information, depending on the product and market.
            </SourceNote>
          </section>

          <section className="article-section">
            <SectionHeader
              id="ev-terminology-management"
              number="03"
              title="Build a Controlled EV and Charging Terminology System"
              intro="Without a controlled vocabulary, the same component or function can receive different translations across manuals, interfaces, labels, support articles, and markets."
            />

            <div className="domain-grid">
              {terminologyDomains.map((domain) => (
                <div className="editorial-block" key={domain.title}>
                  <h3>{domain.title}</h3>
                  <ul>{domain.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>

            <h3>Resolve Commonly Confused Terms</h3>
            <p>
              Battery cell, module, and pack should not collapse into one generic term. Charging power is normally expressed in kilowatts, while battery capacity and energy delivered are normally expressed in kilowatt-hours. State of charge and state of health describe different concepts. Charger, charging station, charge point, and EVSE may also have different formal, customer-facing, and market-specific uses.
            </p>
            <p>
              Rather than imposing one universal term, record the definition, product context, audience, market, approved variants, and prohibited alternatives. A vehicle interface may use a plain-language phrase while technical documentation preserves the engineering term.
            </p>

            <div className="acronym-band">
              <h3>Manage Acronyms Deliberately</h3>
              <p>For each language, decide whether to retain the English acronym, translate the expansion, use a local convention, introduce the term in full, or avoid the acronym in customer-facing content.</p>
              <div className="acronym-list" aria-label="Common EV acronyms">
                {['BMS','SoC','SoH','EVSE','CPO','eMSP','CSMS','DER','V2G','V2H','V2L','MCS'].map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>

            <ResponsiveTable
              caption="What an EV Termbase Should Record"
              headers={["Termbase Field", "Customer and Program Value"]}
              rows={termbaseRows}
            />

            <ResponsiveTable
              caption="Translate, Explain, or Preserve?"
              headers={["Content Element", "Recommended Treatment", "Example"]}
              rows={protectedContentRows}
            />

            <p>
              Centralized <a href="https://www.stepes.com/terminology-management/">Terminology Management</a> and <a href="https://www.stepes.com/translation-memory/">Translation Memory</a> help carry approved EV language from one release and content channel into the next without treating every file as an unrelated project.
            </p>
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-terminology-management/">Explore Automotive Terminology Management</EditorialLink>
          </section>

          <section className="article-section">
            <SectionHeader
              id="battery-high-voltage-safety"
              number="04"
              title="Translate Battery and High-Voltage Safety Content by Risk"
              intro="Safety-related translation requires technical understanding, preservation of the approved warning system, and review that reflects the possible consequence of an error."
            />

            <h3>Identify Safety-Critical Content</h3>
            <ul>
              <li>High-voltage, electric-shock, and thermal-event warnings</li>
              <li>Battery handling, storage, isolation, and de-energization procedures</li>
              <li>Emergency shutdown, recovery, towing, and first-responder information</li>
              <li>Damaged battery, removal, transportation, dismantling, and repair content</li>
              <li>Personal protective equipment requirements, labels, and symbols</li>
            </ul>

            <h3>Preserve the Approved Warning Hierarchy</h3>
            <div className="warning-hierarchy" aria-label="Warning hierarchy examples">
              {['Danger','Warning','Caution','Notice','Important Information'].map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>
              Translation should preserve the signal word, hazard, possible consequence, avoidance action, sequence of instructions, associated symbols, placement, and visual emphasis. It should not independently strengthen or weaken the source hierarchy.
            </p>

            <h3>Match Review Depth to Risk</h3>
            <p>
              A high-voltage isolation procedure may require a specialized translator, independent bilingual revision, terminology and number checks, engineering or safety review, final-format inspection, and controlled release. Lower-risk customer information may follow a lighter route. Risk-based routing directs the strongest controls to the content where an error could have the greatest effect.
            </p>

            <SourceNote href="https://www.iso.org/standard/68667.html" label="View ISO 6469-3">
              ISO 6469-3:2021 addresses electrical safety requirements for high-voltage propulsion and connected auxiliary systems, including protection against electric shock and thermal incidents. Applicability must be confirmed for the specific product and program.
            </SourceNote>

            <div className="inline-callout">
              <p className="callout-label">Important Scope</p>
              <p>Translation and localization support multilingual engineering, safety, regulatory, and quality programs. They do not replace product engineering, legal review, conformity assessment, safety validation, or regulatory approval.</p>
            </div>

            <EditorialLink href="https://www.stepes.com/technical-translation-services/">Explore Technical Translation Services</EditorialLink>
          </section>

          <section className="article-section">
            <SectionHeader
              id="charging-hardware-documentation"
              number="05"
              title="Localize Charging Hardware, Installation, and Service Documentation"
              intro="Charging infrastructure combines electrical equipment, mechanical installation, networking, firmware, user interfaces, payments, and field service. Localized content must remain aligned with the exact product configuration delivered in each market."
            />

            <div className="two-column-editorial">
              <div className="editorial-block">
                <h3>Product and Site Planning</h3>
                <p>Localize product data, environmental ratings, electrical requirements, mounting and clearance specifications, site surveys, network connectivity, cable management, accessibility planning, and installation prerequisites.</p>
              </div>
              <div className="editorial-block">
                <h3>Installation and Commissioning</h3>
                <p>Preserve the meaning and sequence of mechanical mounting, electrical connections, grounding, protective measures, network setup, activation, functional tests, commissioning checklists, and handover records.</p>
              </div>
              <div className="editorial-block">
                <h3>Physical Interfaces and Labels</h3>
                <p>Test content for small displays, fixed buttons, outdoor readability, font support, emergency labels, connector markings, QR-code guidance, multilingual decals, and regulatory markings.</p>
              </div>
              <div className="editorial-block">
                <h3>Maintenance and Field Service</h3>
                <p>Align preventive maintenance, fault diagnosis, component replacement, firmware procedures, technician interfaces, service applications, records, and escalation instructions.</p>
              </div>
            </div>

            <h3>Control Market and Product Variants</h3>
            <p>Before translating a charger manual or interface, verify the applicable hardware revision, connector configuration, power rating, electrical environment, firmware version, market certification, installation method, network configuration, and optional feature set.</p>
            <div className="inline-callout">
              <p className="callout-label">Quality Note</p>
              <p>Reusing a polished translation from another charger model can still produce incorrect content when the hardware, firmware, electrical environment, or market configuration differs.</p>
            </div>
          </section>

          <section className="article-section">
            <SectionHeader
              id="digital-charging-journey"
              number="06"
              title="Localize the Complete Digital Charging Journey"
              intro="Charging localization should be organized around the task the driver is trying to complete. Reviewing individual strings does not show whether the complete experience is clear, consistent, and functional."
            />

            <div className="journey-list">
              {chargingJourney.map((step, index) => (
                <div className="journey-step" key={step.title}>
                  <div className="journey-number">{index + 1}</div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>

            <h3>Localize the Data Around the Journey</h3>
            <p>
              Validate currency, taxes, fees, decimal and thousands separators, dates, time zones, duration, kW and kWh presentation, percentages, telephone numbers, addresses, plural forms, right-to-left behavior, font support, screen-reader labels, and accessibility instructions.
            </p>

            <SourceNote href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32023R1804" label="View the EU Alternative Fuels Infrastructure Regulation">
              The regulation includes requirements related to ad hoc charging, payment, price transparency, and accessible user interfaces at publicly accessible charging points, illustrating why localized payment and interface language is operationally important.
            </SourceNote>

            <EditorialLink href="https://www.stepes.com/app-localization-services/">Explore App Localization Services</EditorialLink>
          </section>

          <section className="article-section">
            <SectionHeader
              id="protocol-and-system-data"
              number="07"
              title="Separate User-Facing Language From Protocol and System Data"
              intro="EV charging software contains technical layers that serve machines, engineers, operators, and drivers. Localization teams must know which layer contains human-readable content and which contains fixed machine-readable information."
            />

            <h3>Vehicle-to-Charger Communication</h3>
            <p>
              ISO 15118 addresses communication between electric vehicles and charging equipment. Associated user instructions, setup information, status explanations, failure messages, training, and support content may require translation. Protocol schemas, fixed values, message names, security data, and technical syntax should remain protected.
            </p>

            <h3>Charger-to-Management-System Communication</h3>
            <p>
              OCPP connects charging stations with charging management systems. Operator dashboards, configuration guidance, installer instructions, event descriptions, support documentation, and user-readable error explanations may be localized. Protocol message names, field names, enumerations, identifiers, and schemas are not ordinary prose.
            </p>

            <h3>Plug & Charge and Certificate Content</h3>
            <p>
              Account association, user consent, certificate setup instructions, authentication status, contract selection, failure recovery, privacy, and support content may require translation. Certificate data, identifiers, security fields, and protocol values must remain intact.
            </p>

            <ResponsiveTable
              caption="API and Developer Content Controls"
              headers={["Element", "Translate?", "Recommended Control"]}
              rows={protocolRows}
            />

            <SourceNote href="https://www.iso.org/standard/77845.html" label="View ISO 15118-20">
              ISO 15118-20:2022 includes communication and message-sequence requirements that support power transfer, including bidirectional power transfer.
            </SourceNote>
          </section>

          <section className="dark-chapter" id="charging-technology-trends">
            <p className="eyebrow on-dark">Technology Outlook</p>
            <h2>Prepare Content for Smarter, Bidirectional, and High-Power Charging</h2>
            <p>Content programs should be designed for charging concepts that are expanding beyond basic one-way passenger-vehicle charging.</p>
            <div className="trend-list">
              {trendItems.map((item) => (
                <div className="trend-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
            <SourceNote href="https://openchargealliance.org/ocpp-2-1-is-now-available/" label="View the OCPP 2.1 announcement">
              OCPP 2.1 was released in 2025 with capabilities including ISO 15118-20 support, bidirectional charging, distributed energy resource control, smart charging, battery swapping, local cost calculation, and additional authorization options.
            </SourceNote>
          </section>

          <section className="article-section">
            <SectionHeader
              id="regional-market-adaptation"
              number="09"
              title="Adapt EV and Charging Content for Regional Markets"
              intro="A translation can be linguistically correct and still be wrong for the product configuration, charging environment, pricing model, or customer expectations of the target market."
            />

            <div className="two-column-editorial">
              <div className="editorial-block">
                <h3>Define Language and Locale Requirements</h3>
                <p>Differentiate French for France and Canada, Spanish for Spain and Latin American markets, Portuguese for Brazil and Portugal, Chinese for mainland China and Taiwan, and English for the United States and United Kingdom.</p>
              </div>
              <div className="editorial-block">
                <h3>Verify Electrical and Charging Conventions</h3>
                <p>Confirm voltage, frequency, power ratings, charging classifications, connector names, electrical terminology, installation references, product configuration, and compatible equipment.</p>
              </div>
              <div className="editorial-block">
                <h3>Control Measurements and Numeric Content</h3>
                <p>Validate kW and kWh, distance, temperature, decimal and thousands separators, percentages, duration, currency, taxes, dates, and time zones.</p>
              </div>
              <div className="editorial-block">
                <h3>Localize Pricing and Payment Language</h3>
                <p>Explain price per kWh, price per minute, session fees, idle or occupancy fees, subscriptions, roaming, taxes, and preauthorization amounts in language customers can act on.</p>
              </div>
            </div>

            <h3>Route Decisions to the Right Reviewer</h3>
            <p>
              Send linguistic questions to language reviewers, feature questions to product owners, electrical values to engineers, pricing rules to commercial owners, legal disclosures to qualified legal reviewers, payment behavior to product and market teams, and safety instructions to engineering or safety owners.
            </p>
          </section>

          <section className="article-section">
            <SectionHeader
              id="battery-passport-localization"
              number="10"
              title="Manage Battery Lifecycle and Battery Passport Content"
              intro="Battery information must remain useful across manufacturing, vehicle use, service, repurposing, and recycling. This creates a multilingual data-governance challenge, not merely a document-translation task."
            />

            <div className="lifecycle wide-module" aria-label="Battery lifecycle content flow">
              {lifecycleStages.map((stage, index) => (
                <div className="lifecycle-stage" key={stage}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>

            <h3>Prepare for the EU Battery Passport</h3>
            <p>
              The EU Batteries Regulation requires an electronic battery passport from February 18, 2027, for each electric vehicle battery, each light means of transport battery, and each industrial battery with a capacity greater than 2 kWh placed on the market or put into service. The passport includes battery-model information and information specific to the individual battery and is accessed through a QR code linked to a unique identifier.
            </p>
            <p>
              Relevant multilingual content can include battery identification, manufacturer information, material composition, carbon-footprint information, performance and durability, state of health, repair, dismantling, repurposing, recycling, supply-chain information, safety instructions, and individual battery records.
            </p>

            <h3>Treat the Passport as Structured Data</h3>
            <p>
              Battery passport localization may involve defined field labels, controlled values, data definitions, machine-readable content, user-facing explanations, reusable terminology, access-controlled information, repeated updates, data validation, and version history. The language strategy should support both human readability and structured data integrity.
            </p>

            <h3>Establish Data Ownership</h3>
            <p>
              For each field, document the authoritative source system, business or technical owner, definition, approved terminology, whether the label or value is translated, applicable market, access level, update trigger, and approval process. Repurposed, remanufactured, and second-life batteries may require updated records linked to the original passport.
            </p>

            <SourceNote href="https://eur-lex.europa.eu/eli/reg/2023/1542/oj/eng" label="View Regulation (EU) 2023/1542">
              The regulation calls for battery-passport information to use open standards and an interoperable, machine-readable, structured, and searchable format with differentiated access rights.
            </SourceNote>

            <div className="inline-callout">
              <p className="callout-label">Governance Boundary</p>
              <p>Localization teams help represent approved information accurately across languages. Regulatory applicability, required data, product compliance, calculations, and legal interpretations remain with the responsible organization and its qualified advisors.</p>
            </div>
          </section>

          <section className="article-section">
            <SectionHeader
              id="cybersecurity-and-updates"
              number="11"
              title="Protect Cybersecurity, Privacy, and Software-Update Content"
              intro="Connected vehicles and charging platforms exchange account, payment, certificate, diagnostic, operational, and energy information. Localization workflows must protect this material while keeping user and technical communications clear."
            />

            <h3>Automotive Cybersecurity Content</h3>
            <p>Relevant content may include cybersecurity requirements, threat and risk documentation, supplier requirements, security configuration, vulnerability communications, incident response, technician guidance, user alerts, release notes, training, and policies.</p>

            <h3>Charging Account and Payment Content</h3>
            <p>Authentication, account recovery, payment authorization, privacy notices, consent, certificate management, data sharing, suspicious-activity messages, refunds, disputes, and support should be reviewed for both language and behavior. Market-specific legal review may also be required.</p>

            <h3>Software-Update Content</h3>
            <p>Vehicle, battery, charger, app, and backend updates may generate release notes, user notifications, installation requirements, safety notices, technician instructions, completion messages, failure and recovery guidance, and support content.</p>

            <h3>Protect Sensitive Language Assets</h3>
            <p>Define authorized users, approved systems, confidentiality requirements, AI and machine-translation restrictions, data retention, Translation Memory ownership, termbase access, reviewer permissions, secure delivery, and audit history. Language assets may contain unreleased product names, system behavior, fault descriptions, engineering changes, and security terminology.</p>

            <SourceNote href="https://www.iso.org/standard/70918.html" label="View ISO/SAE 21434">
              ISO/SAE 21434 addresses cybersecurity engineering for vehicle electrical and electronic systems across the lifecycle. UN Regulation No. 156 separately addresses software updates and software update management systems.
            </SourceNote>

            <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-ota-software-update-localization/">Explore Automotive OTA Localization</EditorialLink>
          </section>

          <section className="article-section">
            <SectionHeader
              id="risk-based-workflow"
              number="12"
              title="Use a Risk-Based EV Localization Workflow"
              intro="A risk-based workflow applies the right combination of translation, review, testing, and approval to each content type."
            />

            <h3>The Stepes EV Localization Risk-Routing Model</h3>
            <div className="risk-levels">
              {riskLevels.map((item) => (
                <div className="risk-level" key={item.level}>
                  <div className="risk-level-tag">{item.level}</div>
                  <div><h3>{item.title}</h3></div>
                  <div>
                    <p><strong>Examples:</strong> {item.examples}</p>
                    <p className="risk-controls"><strong>Recommended controls:</strong> {item.controls}</p>
                  </div>
                </div>
              ))}
            </div>

            <h3>Ten-Step EV Localization Process</h3>
            <div className="workflow">
              {workflowSteps.map((step, index) => (
                <div className="workflow-step" key={step[0]}>
                  <div className="step-index">STEP {String(index + 1).padStart(2, '0')}</div>
                  <h3>{step[0]}</h3>
                  <p>{step[1]}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="article-section">
            <SectionHeader
              id="ev-localization-qa"
              number="13"
              title="Validate EV Content by Type and Real-World Context"
              intro="Bilingual review alone cannot detect every EV localization problem. Quality assurance should reflect how and where the content will be used."
            />

            <div className="two-column-editorial">
              <div className="editorial-block">
                <h3>Linguistic Quality Assurance</h3>
                <p>Review accuracy, completeness, grammar, fluency, terminology, consistency, tone, audience suitability, and procedural clarity.</p>
              </div>
              <div className="editorial-block">
                <h3>Automated Quality Assurance</h3>
                <p>Check numbers, units, codes, tags, variables, placeholders, missing content, terminology inconsistencies, source-target mismatches, and character limits.</p>
              </div>
              <div className="editorial-block">
                <h3>Technical and Subject-Matter Review</h3>
                <p>Use qualified review for battery specifications, high-voltage warnings, electrical procedures, installation instructions, diagnostics, and lifecycle data.</p>
              </div>
              <div className="editorial-block">
                <h3>In-Context and Functional Testing</h3>
                <p>Review screenshots, chargers, devices, vehicle displays, portals, simulators, and builds, then test authentication, payments, status updates, error recovery, notifications, and receipts.</p>
              </div>
            </div>

            <ResponsiveTable
              caption="EV Content Quality Assurance Matrix"
              headers={["Content Type", "Primary Risk", "Recommended Review", "Final Validation"]}
              rows={qaMatrix}
            />

            <p>
              SAE J2450 can support structured error measurement for appropriate automotive technical content, but no single metric is sufficient for interface usability, functional testing, market adaptation, safety approval, or customer experience. The quality method should follow the content and its intended use.
            </p>
            <EditorialLink href="https://www.stepes.com/automotive-translation-services/">Explore Automotive Translation Services</EditorialLink>
          </section>

          <section className="article-section">
            <SectionHeader
              id="continuous-ev-localization"
              number="14"
              title="Maintain Multilingual EV Content Through Continuous Change"
              intro="EV localization does not end at launch. Vehicle software, charger firmware, mobile apps, pricing, documentation, and battery data continue to change."
            />

            <h3>Detect Source Changes</h3>
            <p>Compare new content against the approved previous version. Isolating changed material reduces unnecessary retranslation and directs review toward the sections most likely to introduce new risk.</p>

            <h3>Reuse Approved Language Carefully</h3>
            <p>Translation Memory can reuse prior translations, but confirm that the language still fits the same product, audience, interface, market, technical meaning, and approved terminology.</p>

            <h3>Maintain Shared Terminology</h3>
            <p>When an approved term changes, identify where it appears across manuals, vehicle interfaces, charger screens, apps, support content, training, marketing, and lifecycle data. Apply the change through controlled review rather than unreviewed global replacement.</p>

            <h3>Separate Product and Market Variants</h3>
            <p>Language assets should distinguish vehicle platform, battery system, charger model, firmware, software branch, market, locale, customer segment, content type, and approval status.</p>

            <h3>Coordinate Releases and Retest High-Risk Journeys</h3>
            <p>Track source version, product version, hardware revision, firmware, build, market, language, translation status, review, approval, and release destination. Prioritize regression testing for charging initiation, authentication, payments, safety warnings, error recovery, software updates, and lifecycle status changes.</p>

            <EditorialLink href="https://www.stepes.com/software-localization-services/">Explore Software Localization Services</EditorialLink>
          </section>

          <section className="checklist-section" id="ev-localization-checklist">
            <p className="eyebrow">Planning Tool</p>
            <h2>EV Battery and Charging Localization Checklist</h2>
            <p className="checklist-intro">Use this checklist to plan a new program or assess an existing multilingual workflow.</p>
            <div className="checklist-grid">
              {checklistGroups.map((group) => (
                <div className="checklist-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}><CheckIcon /><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="article-section">
            <SectionHeader
              id="stepes-ev-localization"
              number="16"
              title="How Stepes Supports EV Battery and Charging Localization"
              intro="Stepes helps automotive manufacturers, battery companies, charging-equipment providers, network operators, fleet platforms, and mobility technology companies manage multilingual content across technical documentation, software, safety, customer experience, and battery lifecycle programs."
            />

            <div className="stepes-support">
              <div className="support-row">
                <h3>Battery and Technical Documentation</h3>
                <p>Translate battery engineering content, product specifications, manufacturing documentation, high-voltage safety information, service and repair procedures, manuals, training, and lifecycle content using subject-matter linguists and controlled language assets.</p>
              </div>
              <div className="support-row">
                <h3>Charging Hardware and Infrastructure</h3>
                <p>Localize installation manuals, product data, charger interfaces, labels, commissioning, field-service content, troubleshooting, and technician training for the correct charger model, market, firmware, and terminology.</p>
              </div>
              <div className="support-row">
                <h3>Software and Digital Experiences</h3>
                <p>Localize vehicle charging interfaces, charger displays, mobile apps, web portals, network platforms, payment journeys, notifications, and embedded help while protecting keys, variables, tags, placeholders, and structured files.</p>
              </div>
              <div className="support-row">
                <h3>Terminology and Language Assets</h3>
                <p>Use centralized terminology and Translation Memory to preserve approved language across products, interfaces, documents, markets, model years, software releases, and support channels.</p>
              </div>
              <div className="support-row">
                <h3>Risk-Based Quality and Continuous Delivery</h3>
                <p>Match specialist translation, independent review, automated QA, in-context testing, final-format QA, source-change detection, version control, regional review, and release coordination to the needs of each content stream.</p>
              </div>
            </div>

            <p>
              The objective is not simply to translate more content. It is to create a multilingual operating model that keeps battery, vehicle, charger, software, and customer information aligned over time.
            </p>
            <EditorialLink href="https://www.stepes.com/electric-vehicle-translation-services/">Explore Electric Vehicle Translation Services</EditorialLink>
          </section>
        </main>
      </div>

      <section className="faq-section" id="frequently-asked-questions">
        <div className="faq-shell">
          <h2>EV Battery and Charging Localization FAQs</h2>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details className="faq-item" key={faq.question} open={index === 0}>
                <summary>{faq.question}<ChevronIcon /></summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sources-section" id="sources-and-references">
        <div className="sources-shell">
          <h2>Authoritative Standards and Regulatory Sources</h2>
          <p>Standards and regulations must be reviewed for their current edition, implementation guidance, product applicability, and target market.</p>
          <div className="source-list">
            {sources.map((source) => (
              <div className="source-entry" key={source[0]}>
                <a href={source[2]} target="_blank" rel="noopener noreferrer">{source[0]} <span aria-hidden="true">↗</span></a>
                <span>{source[1]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="related-section">
        <div className="shell">
          <div className="related-header">
            <div>
              <p className="eyebrow">Continue Your Planning</p>
              <h2>Related Automotive Localization Resources</h2>
            </div>
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">Explore All Localization Guides</EditorialLink>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <h3><a href={resource.href}>{resource.title}</a></h3>
                <p>{resource.description}</p>
                <EditorialLink href={resource.href}>Read the Guide</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell cta-panel">
          <div>
            <p className="eyebrow">Global EV Content</p>
            <h2>Localize Every Part of the EV and Charging Experience</h2>
            <p>From battery engineering and high-voltage safety to charging software, customer journeys, and lifecycle information, Stepes helps global mobility teams deliver accurate and consistent content across languages, markets, and releases.</p>
          </div>
          <div className="cta-actions">
            <a className="button primary" href="https://www.stepes.com/contact-us/">Talk to an Automotive Expert <ArrowIcon /></a>
            <a className="button secondary" href="https://app.stepes.com/quote/">Request a Translation Quote <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
