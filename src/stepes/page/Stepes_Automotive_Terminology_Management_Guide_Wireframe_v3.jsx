import React, { useEffect, useState } from "react";

const PAGE_URL =
  "https://www.stepes.com/resources/localization-guides/automotive-terminology-management/";
const sectionUrl = (id) => `${PAGE_URL}#${id}`;

const breadcrumbs = [
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Localization Guides",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  { label: "Automotive Terminology Management", current: true },
];

const tocItems = [
  { id: "why-automotive-terminology-is-difficult", label: "Why Automotive Terminology Is Difficult" },
  { id: "automotive-language-assets", label: "Glossaries, Termbases, Taxonomies, and Translation Memory" },
  { id: "automotive-term-record", label: "What an Automotive Term Record Should Contain" },
  { id: "models-and-markets", label: "Managing Terminology Across Models and Markets" },
  { id: "global-and-local-language", label: "Global Consistency and Local Market Language" },
  { id: "terminology-governance", label: "Governance Across OEMs, Suppliers, and Departments" },
  { id: "vehicle-lifecycle", label: "Terminology Through the Vehicle Lifecycle" },
  { id: "software-defined-vehicles", label: "Software-Defined and Connected Vehicle Terminology" },
  { id: "ai-and-human-translation", label: "Terminology in AI and Human Translation" },
  { id: "content-systems", label: "Connecting Terminology With Automotive Content Systems" },
  { id: "terminology-quality-assurance", label: "Automotive Terminology Quality Assurance" },
  { id: "program-measurement", label: "Measuring Terminology Program Performance" },
  { id: "maturity-model", label: "Automotive Terminology Maturity Model" },
  { id: "implementation-roadmap", label: "How to Build an Automotive Terminology Program" },
  { id: "common-failures", label: "Common Terminology Management Failures" },
  { id: "stepes-support", label: "How Stepes Supports Automotive Terminology Management" },
  { id: "faq", label: "Frequently Asked Questions" },
];

const keyTakeaways = [
  {
    title: "Govern Concepts, Not Just Translations",
    text: "A useful automotive termbase records definitions, approved expressions, applicability, ownership, and change history—not merely a source term and its target-language equivalent.",
  },
  {
    title: "Centralize Meaning While Controlling Variation",
    text: "One shared concept can support approved differences by brand, platform, model year, market, audience, interface, and content type.",
  },
  {
    title: "Keep Terminology and Translation Memory Distinct",
    text: "The termbase governs individual concepts and language rules. Translation memory stores approved bilingual sentences, warnings, headings, and software strings for reuse.",
  },
  {
    title: "Assign Authority by Term Type",
    text: "Engineering, legal, regulatory, brand, linguistic, product, and in-country reviewers contribute different forms of approval depending on the terminology risk and use.",
  },
  {
    title: "Connect Terminology to Production",
    text: "Approved terminology should guide authoring, software localization, AI-assisted translation, professional review, supplier workflows, QA, and reporting.",
  },
  {
    title: "Measure Adoption and Maintenance",
    text: "Coverage, compliance, approval speed, recurring issues, and update discipline reveal more than the raw number of entries in a database.",
  },
];

const touchpointRows = [
  ["Engineering specification", "High-voltage battery thermal preconditioning"],
  ["Software identifier", <code>HV_BATT_PRECOND</code>],
  ["HMI label", "Prepare Battery for Fast Charging"],
  ["Owner manual", "Battery preconditioning"],
  ["Service documentation", "High-voltage battery conditioning function"],
  ["Voice interface", "Prepare the battery for charging"],
  ["Customer support", "Fast-charging battery preparation"],
];

const languageAssetRows = [
  {
    resource: "Glossary",
    unit: "Term and translation",
    purpose: "Provide basic language guidance",
    example: "English–German list of charging terms",
  },
  {
    resource: "Termbase",
    unit: "Concept record",
    purpose: "Govern meaning, approved expressions, applicability, and status",
    example: "Multilingual record for a driver-assistance function",
  },
  {
    resource: "Taxonomy",
    unit: "Concept category or relationship",
    purpose: "Organize related knowledge",
    example: "Classification of ADAS, braking, and perception concepts",
  },
  {
    resource: "Translation Memory",
    unit: "Bilingual content segment",
    purpose: "Reuse approved translated content",
    example: "Previously approved warning or service instruction",
  },
];

const termRecordGroups = [
  {
    title: "Concept Identity",
    items: [
      "Unique concept ID",
      "Definition and authoritative source",
      "Subject domain",
      "Related, broader, and narrower concepts",
      "Supporting references",
    ],
  },
  {
    title: "Source and Multilingual Language",
    items: [
      "Preferred source term and full form",
      "Acronyms and approved abbreviations",
      "Accepted, prohibited, and deprecated variants",
      "Approved translations by locale",
      "Grammar, inflection, pronunciation, and context guidance",
    ],
  },
  {
    title: "Automotive Applicability",
    items: [
      "Brand, platform, model, and model year",
      "Trim, configuration, and powertrain",
      "System, subsystem, ECU, or application",
      "Software generation",
      "Market and regulatory jurisdiction",
    ],
  },
  {
    title: "Governance and Lifecycle",
    items: [
      "Term owner and authorized reviewers",
      "Approval status and effective date",
      "Superseded or retirement date",
      "Decision rationale",
      "Change history and source of approval",
    ],
  },
];

const sampleRecord = [
  ["Concept ID", "EV-CHG-0042"],
  ["Concept", "Battery thermal preparation before high-power charging"],
  ["Preferred English term", "Battery preconditioning"],
  [
    "Definition",
    "Active management of traction-battery temperature before high-power charging to improve charging readiness",
  ],
  ["Approved HMI expression", "Prepare Battery for Fast Charging"],
  ["Permitted manual expression", "Battery preconditioning for fast charging"],
  ["Prohibited expression", "Battery heating"],
  ["Prohibition reason", "The function may heat or cool the battery depending on conditions"],
  ["Domain", "EV battery and charging"],
  ["Platform", "EV Platform A"],
  ["Applicability", "Model year 2027 onward"],
  ["Content scope", "HMI, owner manual, mobile app, and customer support"],
  ["Status", "Approved"],
  ["Owners", "Battery engineering and localization"],
];

const applicabilityLayers = [
  {
    label: "Global",
    text: "Shared concepts, corporate language, common engineering terminology, and standard safety language.",
  },
  {
    label: "Brand",
    text: "Customer-facing expressions that distinguish brands while preserving one underlying technical concept.",
  },
  {
    label: "Platform",
    text: "Terminology shared across modular architectures, powertrains, battery systems, infotainment, or ADAS stacks.",
  },
  {
    label: "Model and Model Year",
    text: "Terms limited by vehicle, trim, option, generation, mid-cycle update, or effective date.",
  },
  {
    label: "Market",
    text: "Locale conventions, legal wording, regulatory jurisdiction, local product language, and established automotive usage.",
  },
  {
    label: "Content Type",
    text: "Engineering, HMI, voice, manuals, service, training, marketing, and customer-support expressions.",
  },
];

const termStatuses = [
  ["Preferred", "The default approved expression for a defined context."],
  ["Allowed", "An acceptable alternative under documented conditions."],
  ["Prohibited", "Technically incorrect, misleading, obsolete, off-brand, or otherwise unsuitable."],
  ["Deprecated", "Previously approved and still searchable for legacy content, but not intended for new use."],
  ["Provisional", "A candidate expression used during development before final approval."],
];

const authorityRows = [
  ["Engineering concept", "Product or system engineering"],
  ["Software expression", "Product, UX, and software localization"],
  ["Safety terminology", "Engineering, safety, legal, and linguistic reviewers"],
  ["Regulatory language", "Regulatory or legal team with market expertise"],
  ["Brand or feature name", "Brand and product marketing"],
  ["Service terminology", "Aftersales, technical publications, and engineering"],
  ["Target-language expression", "Professional linguist and authorized market reviewer"],
  ["HMI or voice term", "UX, product, language, and in-context testing teams"],
];

const governanceSteps = [
  ["Identify", "Capture a candidate term or terminology conflict."],
  ["Confirm", "Determine whether it represents a distinct concept."],
  ["Research", "Review current usage across products, systems, and markets."],
  ["Define", "Write or validate the concept definition."],
  ["Classify", "Assign domain, applicability, ownership, and risk."],
  ["Translate", "Propose approved expressions and variants by locale."],
  ["Review", "Route the record to the appropriate authorities."],
  ["Approve", "Publish the terminology with status and effective date."],
  ["Apply", "Use it in authoring, translation, software, review, and QA."],
  ["Improve", "Measure usage, capture feedback, and revise or retire the term."],
];

const lifecycleStages = [
  ["Concept", "Working terminology, engineering definitions, and provisional feature names."],
  ["Development", "Requirements, architecture, software strings, supplier content, and prototype interfaces."],
  ["Validation", "Testing terminology, diagnostics, technical reviews, and terminology conflict resolution."],
  ["Launch", "HMI, owner documentation, regulatory content, dealer training, marketing, and support."],
  ["Ownership", "Connected services, mobile applications, help content, and customer communications."],
  ["Service", "Diagnostics, repair procedures, parts catalogs, bulletins, warranty, and legacy support."],
  ["Update", "OTA features, release notes, synchronized content, and market rollout changes."],
  ["Revision", "Model-year updates, renamed functions, new hardware, and superseded terminology."],
  ["Retirement", "Deprecated language preserved for older fleets, records, repair, and historical reuse."],
];

const sdvLayers = [
  ["Engineering Identifiers", "Signal names, service names, software keys, APIs, and diagnostic codes."],
  ["Product Language", "Approved feature concepts, system names, and technical definitions."],
  ["Experience Language", "HMI labels, voice expressions, help text, and companion-app content."],
  ["Customer Language", "Owner documentation, release notes, support, marketing, and dealer communication."],
];

const workflowSteps = [
  ["Source Systems", "PLM, requirements, CCMS, software repositories, design systems, and product databases."],
  ["Content Analysis", "Identify applicable brand, platform, model year, market, release, content type, and audience."],
  ["Applicable Terminology", "Provide only the approved concepts, variants, and constraints relevant to the project."],
  ["AI and Human Translation", "Guide AI-assisted production, professional linguists, and specialist review."],
  ["Quality Assurance", "Check preferred, prohibited, outdated, and contextually incorrect terminology."],
  ["Approval and Feedback", "Publish approved content and feed validated decisions back into the termbase."],
];

const qaLayers = [
  {
    title: "Automated Checks",
    text: "Identify missing preferred terms, prohibited variants, inconsistent translations, capitalization differences, unapproved abbreviations, outdated language, and source–target mismatches.",
  },
  {
    title: "Linguistic Review",
    text: "Evaluate meaning, grammar, fluency, terminology use, locale conventions, consistency, and audience suitability.",
  },
  {
    title: "Technical Review",
    text: "Validate the concept, model and configuration applicability, system relationships, technical consequences, and safety-sensitive distinctions.",
  },
  {
    title: "In-Context Review",
    text: "Confirm terminology inside driver warnings, HMI, voice, diagnostic tools, mobile applications, training, and published manuals.",
  },
];

const metricGroups = [
  {
    title: "Coverage",
    items: [
      "Priority concepts documented",
      "Target-language completion",
      "Model and market coverage",
      "High-risk terminology coverage",
    ],
  },
  {
    title: "Quality",
    items: [
      "Duplicate or conflicting entries",
      "Records without definitions",
      "Unresolved term disputes",
      "Terminology-related corrections",
    ],
  },
  {
    title: "Adoption",
    items: [
      "Projects using the applicable termbase",
      "Department and supplier participation",
      "Reviewer usage",
      "Automated QA utilization",
    ],
  },
  {
    title: "Efficiency and Maintenance",
    items: [
      "Average approval time",
      "Repeated terminology questions",
      "Age of unresolved candidates",
      "Model-year and retirement updates completed",
    ],
  },
];

const maturityLevels = [
  {
    level: "Level 1",
    title: "Fragmented",
    text: "Independent spreadsheets, project-by-project decisions, inconsistent ownership, limited supplier visibility, and disconnected reviewer feedback.",
  },
  {
    level: "Level 2",
    title: "Centralized",
    text: "One searchable terminology environment, consolidated glossaries, basic multilingual entries, shared access, and initial status controls.",
  },
  {
    level: "Level 3",
    title: "Governed",
    text: "Defined owners, concept-oriented definitions, applicability metadata, approval workflows, preferred and prohibited variants, and change history.",
  },
  {
    level: "Level 4",
    title: "Connected",
    text: "Integration with translation and QA, product- and market-specific assignment, supplier participation, APIs, reporting, and structured feedback.",
  },
  {
    level: "Level 5",
    title: "Continuously Improved",
    text: "Automated candidate discovery, release-driven maintenance, usage analytics, proactive conflict identification, and systematic learning from approved decisions.",
  },
];

const roadmapSteps = [
  {
    title: "Inventory Existing Language Resources",
    text: "Collect glossaries, spreadsheets, translation memories, style guides, engineering dictionaries, supplier lists, reviewer corrections, technical manuals, software strings, product databases, and legacy references.",
  },
  {
    title: "Define Business Priorities",
    text: "Prioritize terminology by safety impact, regulatory importance, technical complexity, frequency, customer visibility, translation volume, number of markets, known inconsistency, and cost of correction.",
  },
  {
    title: "Establish the Concept Model",
    text: "Define subject domains, applicability levels, required metadata, statuses, owners, approval roles, change procedures, and access permissions before importing large term volumes.",
  },
  {
    title: "Consolidate and Normalize",
    text: "Remove true duplicates, separate distinct concepts, identify conflicting definitions, map acronyms, flag legacy language, preserve source references, and document unresolved questions.",
  },
  {
    title: "Write Definitions and Add Context",
    text: "Resolve source-language ambiguity before translation. Definitions should distinguish related concepts and provide enough context for reliable multilingual decisions.",
  },
  {
    title: "Translate and Validate Priority Terms",
    text: "Combine qualified automotive linguists with the appropriate engineers, product specialists, technical authors, regulatory reviewers, brand teams, and in-country experts.",
  },
  {
    title: "Connect Terminology to Production",
    text: "Make approved language available in authoring, software localization, AI-assisted translation, professional review, QA, supplier processes, and customer-support content.",
  },
  {
    title: "Launch Governance",
    text: "Establish term ownership, approval rules, review service levels, escalation paths, change notifications, access permissions, and maintenance responsibilities.",
  },
  {
    title: "Measure Adoption",
    text: "Determine whether teams use the applicable terminology. Low compliance may indicate poor integration, unclear ownership, irrelevant records, complexity, outdated guidance, or insufficient training.",
  },
  {
    title: "Maintain Continuously",
    text: "Review terminology when models launch, platforms change, software is updated, features are renamed, markets are added, regulations evolve, reviewer decisions are approved, or legacy products retire.",
  },
];

const commonFailures = [
  ["Creating a Spreadsheet Graveyard", "A glossary provides little value when it is stored but not connected to authoring, translation, review, or quality assurance."],
  ["Forcing One Translation Everywhere", "A fixed rendering may ignore grammar, audience, market convention, content type, interface constraints, or technical differences."],
  ["Translating Terms Without Definitions", "Target-language experts cannot reliably distinguish related concepts when the source terminology remains ambiguous."],
  ["Omitting Applicability Metadata", "A term approved for one platform, model, year, market, or system can be incorrectly propagated to another."],
  ["Distributing Uncontrolled Supplier Copies", "Static exports can quickly diverge from the current authoritative terminology resource."],
  ["Turning Every Reviewer Preference Into a Global Rule", "Individual preference should not become program-wide guidance without validation, documented scope, and authority."],
  ["Keeping Obsolete Terms as Preferred", "Legacy language should be marked deprecated or superseded rather than remaining indistinguishable from current terminology."],
  ["Leaving Terminology to Translators Alone", "Linguists are essential, but engineering, product, legal, regulatory, brand, service, and market stakeholders must contribute where appropriate."],
  ["Applying Terminology as Find-and-Replace", "Approved terminology still has to function grammatically and contextually in each target language."],
  ["Measuring Database Size Instead of Effectiveness", "A large term count does not demonstrate coverage, adoption, quality, or business value."],
];

const stepesCapabilities = [
  {
    title: "Terminology Assessment and Consolidation",
    text: "Inventory existing glossaries and terminology files, identify duplicates and conflicts, normalize legacy resources, classify automotive domains, and prioritize high-value concepts.",
  },
  {
    title: "Structured Automotive Termbases",
    text: "Organize terminology by brand, platform, model and model year, system, software generation, content type, market, locale, and approval status.",
  },
  {
    title: "Automotive Linguistic and Technical Validation",
    text: "Combine professional native-language linguists, automotive subject expertise, and structured customer review for technical, software, regulatory, service, and customer-facing content.",
  },
  {
    title: "AI and Human Terminology Application",
    text: "Apply approved terminology across AI-assisted translation, professional translators, linguistic reviewers, automated QA, in-country review, and recurring multilingual releases.",
  },
  {
    title: "Connected Automotive Workflows",
    text: "Support technical documentation, vehicle software and HMI, OTA content, EV and charging systems, service, training, marketing, and customer communications.",
  },
  {
    title: "Continuous Maintenance and Visibility",
    text: "Capture candidate terms and validated corrections, distribute updated guidance, retire obsolete variants, preserve decision history, and monitor terminology use over time.",
  },
];

const faqItems = [
  {
    question: "What Is Automotive Terminology Management?",
    answer:
      "Automotive terminology management is the structured process of identifying, defining, translating, approving, applying, and maintaining automotive concepts across languages, products, systems, departments, suppliers, and markets. It supports consistent technical meaning while allowing approved variation for brands, audiences, content types, interfaces, and local-market requirements.",
  },
  {
    question: "What Should an Automotive Termbase Contain?",
    answer:
      "A useful automotive termbase includes concept definitions, preferred and prohibited terms, acronyms, approved translations, usage guidance, platform and model applicability, market scope, content type, ownership, approval status, effective dates, and change history.",
  },
  {
    question: "How Is a Termbase Different From a Glossary?",
    answer:
      "A glossary usually provides a basic list of terms and translations. A termbase manages structured concept records, definitions, variants, product applicability, review status, ownership, and governance. A glossary can become an input to a termbase, but it rarely contains enough structure for a complex global automotive program.",
  },
  {
    question: "How Is Terminology Management Different From Translation Memory?",
    answer:
      "Terminology management governs individual concepts, product names, technical terms, definitions, and approved equivalents. Translation memory stores complete bilingual content segments such as sentences, warnings, headings, and software strings. The two resources work together: the termbase guides language decisions, while translation memory supports approved content reuse.",
  },
  {
    question: "Can One Automotive Concept Have Different Approved Terms?",
    answer:
      "Yes. Different expressions may be approved according to brand, model, model year, market, language, audience, content type, HMI constraints, or regulatory requirements. The variants should remain connected to the same concept and use clear applicability rules.",
  },
  {
    question: "How Should Terminology Be Managed Across Model Years?",
    answer:
      "Term records should include effective dates, model-year applicability, superseded status, and legacy guidance. New terminology should not automatically replace language needed for older vehicles that remain in service.",
  },
  {
    question: "How Can OEMs Share Terminology With Suppliers?",
    answer:
      "OEMs can provide controlled access to applicable terminology, approval status, version information, and change notifications. The process should define who can view, propose, edit, and approve terminology and how suppliers confirm adoption.",
  },
  {
    question: "Who Should Approve Automotive Terminology?",
    answer:
      "Approval depends on the term. Engineering may approve technical definitions, legal or regulatory teams may approve mandated language, brand teams may approve feature names, and professional linguists and in-country reviewers may approve target-language expressions. High-risk terminology often requires several forms of review.",
  },
  {
    question: "How Does Terminology Management Improve AI Translation?",
    answer:
      "Approved terminology gives AI workflows clearer guidance about technical terms, product names, preferred translations, prohibited variants, and market-specific language. Professional review remains important for grammar, context, audience fit, and final accuracy.",
  },
  {
    question: "Can Automotive Terminology Be Checked Automatically?",
    answer:
      "Yes. Automated quality checks can identify missing preferred terms, prohibited variants, inconsistent translations, and outdated terminology. These checks should be combined with linguistic, technical, and in-context review because grammar and context can create legitimate variation and false positives.",
  },
  {
    question: "How Often Should an Automotive Termbase Be Updated?",
    answer:
      "The termbase should be updated whenever relevant products, software, model years, markets, regulations, or approved language change. Fast-moving software and connected-vehicle programs may require terminology maintenance as part of every release cycle.",
  },
  {
    question: "Should Obsolete Automotive Terms Be Deleted?",
    answer:
      "Usually not immediately. A deprecated or superseded term may remain useful for older vehicles, archived documentation, service support, warranty cases, and historical translation resources. It should remain searchable while being clearly restricted from new content.",
  },
];

const relatedResources = [
  {
    title: "Automotive Translation Services",
    linkLabel: "Explore Automotive Translation Services",
    description: "Explore Stepes solutions for technical, software, regulatory, service, training, marketing, and customer content across the vehicle lifecycle.",
    href: "https://www.stepes.com/automotive-translation-services/",
  },
  {
    title: "Automotive HMI and Infotainment Localization Guide",
    linkLabel: "Read the HMI and Infotainment Guide",
    description: "Manage context, character limits, interface design, voice, and in-vehicle testing for multilingual vehicle software.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-hmi-infotainment-localization/",
  },
  {
    title: "Automotive Technical Manual Translation and DITA/XML Workflows",
    linkLabel: "Read the Technical Manual Translation Guide",
    description: "Plan structured content, translation reuse, model-year updates, terminology control, and multilingual publishing.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-technical-manual-translation/",
  },
  {
    title: "Localization for Automotive OTA Software Updates",
    linkLabel: "Read the Automotive OTA Localization Guide",
    description: "Coordinate change detection, version control, release translation, and rapid validation for recurring vehicle software updates.",
    href: "https://www.stepes.com/resources/localization-guides/automotive-ota-localization/",
  },
  {
    title: "EV Battery and Charging Content Localization",
    linkLabel: "Read the EV and Charging Localization Guide",
    description: "Align multilingual terminology, safety, software, customer experience, and lifecycle content for EV and charging programs.",
    href: "https://www.stepes.com/resources/localization-guides/ev-charging-localization/",
  },
  {
    title: "SAE J2450 for Automotive Translation Quality",
    linkLabel: "Read the SAE J2450 Quality Guide",
    description: "Understand what the metric evaluates, where it adds value, and why content-specific review methods still matter.",
    href: "https://www.stepes.com/resources/localization-guides/sae-j2450-automotive-translation-quality/",
  },
  {
    title: "ADAS, Voice, and In-Vehicle Linguistic Testing",
    linkLabel: "Read the In-Vehicle Linguistic Testing Guide",
    description: "Validate driver warnings, voice commands, interface messages, and multilingual speech experiences in context.",
    href: "https://www.stepes.com/resources/localization-guides/in-vehicle-linguistic-testing/",
  },
];

const sources = [
  {
    title: "ISO 704:2022 — Terminology work — Principles and methods",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/79077.html",
  },
  {
    title: "ISO 26162-3:2023 — Management of terminology resources — Content",
    organization: "International Organization for Standardization",
    href: "https://www.iso.org/standard/80464.html",
  },
  {
    title: "UN Regulation No. 156 — Software update and software update management system",
    organization: "United Nations Economic Commission for Europe",
    href: "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update",
  },
  {
    title: "Vehicle Signal Specification",
    organization: "Connected Vehicle Systems Alliance",
    href: "https://covesa.global/vehicle-signal-specification/",
  },
  {
    title: "DITA 1.3 Glossary Topic",
    organization: "OASIS Open",
    href: "https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/archSpec/technicalContent/dita-glossary-topic.html",
  },
  {
    title: "Automotive Translation Services",
    organization: "Stepes",
    href: "https://www.stepes.com/automotive-translation-services/",
  },
  {
    title: "Terminology Management",
    organization: "Stepes",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    title: "Translation Memory",
    organization: "Stepes",
    href: "https://www.stepes.com/translation-memory/",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4 10H16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M11 5L16 10L11 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ className = "" }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 8L10 12L14 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon({ className = "" }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.5 10.5L8.2 14L15.5 6.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {breadcrumbs.map((item, index) => (
          <li key={item.label}>
            {index > 0 ? <span className="breadcrumbs__separator" aria-hidden="true">/</span> : null}
            {item.current ? (
              <span className="breadcrumbs__current" aria-current="page">{item.label}</span>
            ) : (
              <a href={item.href}>{item.label}</a>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

function EditorialLink({ href, children, external = false, className = "" }) {
  return (
    <a
      className={`editorial-link ${className}`.trim()}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowIcon className="editorial-link__icon" />
    </a>
  );
}

function MobileTable({ headers, rows, label }) {
  return (
    <div className="mobile-table" aria-label={label}>
      {rows.map((row, rowIndex) => (
        <div className="mobile-table__group" key={`${row[0]}-${rowIndex}`}>
          {row.map((cell, cellIndex) => (
            <div className="mobile-table__row" key={`${headers[cellIndex]}-${cellIndex}`}>
              <span className="mobile-table__label">{headers[cellIndex]}</span>
              <span className="mobile-table__value">{cell}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ResponsiveTable({ headers, rows, label, className = "" }) {
  return (
    <div className={`responsive-table ${className}`.trim()}>
      <div className="desktop-table-wrap">
        <table>
          <caption className="sr-only">{label}</caption>
          <thead>
            <tr>
              {headers.map((header) => <th key={header} scope="col">{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MobileTable headers={headers} rows={rows} label={label} />
    </div>
  );
}

function SectionIntro({ children }) {
  return <p className="section-intro">{children}</p>;
}

function SourceNote({ children }) {
  return <p className="source-note">{children}</p>;
}

function Toc({ activeId }) {
  return (
    <aside className="toc-rail" aria-label="In this guide">
      <p className="toc-rail__title">In This Guide</p>
      <ol>
        {tocItems.map((item) => (
          <li key={item.id}>
            <a
              className={activeId === item.id ? "is-active" : ""}
              href={sectionUrl(item.id)}
              aria-current={activeId === item.id ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </aside>
  );
}

function MobileToc() {
  return (
    <details className="mobile-toc">
      <summary>
        <span>In This Guide</span>
        <ChevronIcon className="mobile-toc__icon" />
      </summary>
      <ol>
        {tocItems.map((item) => (
          <li key={item.id}>
            <a href={sectionUrl(item.id)}>{item.label}</a>
          </li>
        ))}
      </ol>
    </details>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --magenta-deep: #7A1542;
    --blush: #FDF2F7;
    --blush-strong: #F8DDE9;
    --pink-light: #F2A7C6;
    --ink: #111827;
    --ink-soft: #334155;
    --muted: #5E6878;
    --line: #E5E7EB;
    --line-strong: #D8DCE3;
    --surface: #F8F9FB;
    --surface-2: #F2F4F7;
    --dark: #171A21;
    --dark-soft: #232833;
    --white: #FFFFFF;
    --shadow: 0 18px 54px rgba(17, 24, 39, 0.07);
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .stepes-guide {
    min-width: 0;
    overflow-x: clip;
    background: var(--white);
    color: var(--ink);
    font-family: Inter, Arial, "Helvetica Neue", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .stepes-guide a { color: inherit; }
  .stepes-guide button, .stepes-guide summary { font: inherit; }
  .page-shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .reading-width { max-width: 760px; }
  .wide-module { width: min(900px, calc(100vw - 404px)); max-width: calc(100vw - 48px); }
  .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }

  .eyebrow {
    margin: 0;
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .breadcrumbs { padding-top: 34px; }
  .breadcrumbs ol { display: flex; flex-wrap: wrap; gap: 6px 8px; margin: 0; padding: 0; list-style: none; }
  .breadcrumbs li { display: inline-flex; align-items: baseline; gap: 8px; color: #697386; font-size: 14px; line-height: 1.5; }
  .breadcrumbs a { color: #697386; text-decoration: none; transition: color 160ms ease; }
  .breadcrumbs a:hover, .breadcrumbs a:focus-visible { color: var(--magenta); }
  .breadcrumbs a:focus-visible { outline: 2px solid rgba(193, 29, 99, 0.28); outline-offset: 3px; border-radius: 4px; }
  .breadcrumbs__separator { color: #A0A7B2; }
  .breadcrumbs__current { color: #3D4655; font-weight: 500; }

  .hero { position: relative; overflow: hidden; background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%); }
  .hero::before {
    content: "";
    position: absolute;
    right: -180px;
    top: -220px;
    width: 560px;
    height: 560px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(193, 29, 99, 0.08) 0%, rgba(193, 29, 99, 0) 70%);
    pointer-events: none;
  }
  .hero__inner { position: relative; padding-top: 72px; padding-bottom: 96px; }
  .hero__copy { max-width: 980px; }
  .hero h1 { max-width: 940px; margin: 16px 0 0; color: #0B1220; font-size: 48px; font-weight: 600; letter-spacing: -0.045em; line-height: 1.05; }
  .hero__lede { max-width: 850px; margin: 28px 0 0; color: #3F4A5C; font-size: 19px; line-height: 1.72; }
  .hero__actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 34px; }

  .button {
    display: inline-flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-radius: 999px;
    padding: 12px 22px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    text-decoration: none;
    transition: transform 160ms ease, background 160ms ease, border-color 160ms ease, box-shadow 160ms ease, color 160ms ease;
  }
  .button__icon { width: 18px; height: 18px; flex: none; }
  .button--primary, .button--primary:link, .button--primary:visited, .button--primary:hover, .button--primary:active, .button--primary:focus, .button--primary:focus-visible {
    color: #FFFFFF !important;
  }
  .button--primary { border: 1px solid var(--magenta); background: var(--magenta); box-shadow: 0 12px 32px rgba(193, 29, 99, 0.17); }
  .button--primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
  .button--secondary { border: 1px solid var(--line-strong); background: #FFFFFF; color: #202938; }
  .button--secondary:hover { border-color: rgba(193, 29, 99, 0.36); color: var(--magenta); transform: translateY(-1px); }
  .button:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.24); outline-offset: 3px; }
  .button--primary svg, .button--primary svg path { color: #FFFFFF !important; stroke: #FFFFFF !important; }

  .summary-section { background: var(--blush); border-top: 1px solid #F3D9E5; border-bottom: 1px solid #F3D9E5; }
  .summary-section__inner { padding-top: 72px; padding-bottom: 72px; }
  .summary-section h2 { margin: 14px 0 0; max-width: 680px; color: #111827; font-size: 34px; font-weight: 600; letter-spacing: -0.03em; line-height: 1.12; }
  .takeaways { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; margin-top: 40px; border-top: 1px solid #EBCBD9; }
  .takeaway { display: grid; grid-template-columns: 26px 1fr; gap: 14px; align-items: start; padding: 24px 0; border-bottom: 1px solid #EBCBD9; }
  .takeaway__mark { display: flex; width: 24px; height: 24px; align-items: center; justify-content: center; border-radius: 50%; background: #FFFFFF; color: var(--magenta); box-shadow: 0 4px 12px rgba(122,21,66,0.08); }
  .takeaway__mark svg { width: 15px; height: 15px; }
  .takeaway h3 { margin: 0; color: #182132; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .takeaway p { margin: 8px 0 0; color: #4F5B6D; font-size: 16px; line-height: 1.7; }

  .article-shell { display: grid; grid-template-columns: 258px minmax(0, 760px); gap: 66px; align-items: start; max-width: 1120px; margin: 0 auto; padding-top: 88px; padding-bottom: 96px; }
  .toc-rail { position: sticky; top: 112px; max-height: calc(100vh - 144px); overflow-y: auto; overflow-x: hidden; padding: 0 14px 12px 0; scrollbar-width: thin; scrollbar-color: #C8CDD5 transparent; }
  .toc-rail::-webkit-scrollbar { width: 5px; }
  .toc-rail::-webkit-scrollbar-thumb { border-radius: 999px; background: #C8CDD5; }
  .toc-rail__title { margin: 0 0 16px; color: #202938; font-size: 16px; font-weight: 600; line-height: 1.4; }
  .toc-rail ol { margin: 0; padding: 0; list-style: none; border-left: 1px solid #E0E3E8; }
  .toc-rail li { margin: 0; }
  .toc-rail a { display: block; margin-left: -1px; border-left: 2px solid transparent; padding: 7px 0 7px 16px; color: #697386; font-size: 14px; line-height: 1.4; text-decoration: none; overflow-wrap: anywhere; transition: color 160ms ease, border-color 160ms ease; }
  .toc-rail a:hover, .toc-rail a:focus-visible { color: var(--magenta); }
  .toc-rail a.is-active { border-left-color: var(--magenta); color: var(--magenta); font-weight: 600; }
  .toc-rail a:focus-visible { outline: 2px solid rgba(193,29,99,0.24); outline-offset: 2px; border-radius: 3px; }
  .mobile-toc { display: none; }

  .article-content { min-width: 0; }
  .article-section { scroll-margin-top: 112px; padding: 0 0 88px; }
  .article-section + .article-section { padding-top: 88px; border-top: 1px solid var(--line); }
  .article-section h2 { margin: 0; max-width: 760px; color: #111827; font-size: 36px; font-weight: 600; letter-spacing: -0.035em; line-height: 1.1; }
  .article-section h3 { margin: 42px 0 0; color: #182132; font-size: 24px; font-weight: 600; letter-spacing: -0.018em; line-height: 1.25; }
  .article-section h4 { margin: 28px 0 0; color: #202938; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .section-intro { max-width: 800px; margin: 20px 0 0; color: #3F4A5C; font-size: 19px; line-height: 1.72; }
  .article-section p:not(.section-intro):not(.source-note):not(.eyebrow) { margin: 18px 0 0; color: #465266; font-size: 18px; line-height: 1.72; }
  .article-section ul { margin: 18px 0 0; padding: 0; list-style: none; }
  .article-section li.bullet { position: relative; margin: 10px 0 0; padding-left: 26px; color: #465266; font-size: 17px; line-height: 1.65; }
  .article-section li.bullet::before { content: ""; position: absolute; left: 0; top: 0.72em; width: 8px; height: 2px; background: var(--magenta); }
  .source-note { margin: 22px 0 0; border-left: 2px solid var(--magenta); padding-left: 16px; color: #657083; font-size: 16px; line-height: 1.65; }
  .source-note a { color: var(--magenta); font-weight: 600; text-decoration: none; }
  .source-note a:hover { color: var(--magenta-dark); }

  .editorial-link { display: inline-flex; min-height: 42px; align-items: center; gap: 8px; margin-top: 18px; color: var(--magenta) !important; font-size: 16px; font-weight: 600; line-height: 1.4; text-decoration: none; }
  .editorial-link__icon { width: 17px; height: 17px; flex: none; transition: transform 160ms ease; }
  .editorial-link:hover .editorial-link__icon { transform: translateX(3px); }
  .editorial-link:focus-visible { outline: 2px solid rgba(193,29,99,0.25); outline-offset: 4px; border-radius: 4px; }

  .callout { margin-top: 34px; border: 1px solid #EFD3DF; border-radius: 24px; background: var(--blush); padding: 26px 28px; }
  .callout__label { margin: 0; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  .callout__statement { margin: 10px 0 0 !important; color: #261826 !important; font-size: 22px !important; font-weight: 600; line-height: 1.4 !important; }
  .callout__copy { margin-top: 10px !important; font-size: 16px !important; line-height: 1.7 !important; }

  .responsive-table { margin-top: 30px; }
  .desktop-table-wrap { overflow: hidden; border: 1px solid #E1E4E9; border-radius: 24px; background: #FFFFFF; }
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th, td { padding: 16px 18px; border-bottom: 1px solid #E8EAEE; text-align: left; vertical-align: top; font-size: 16px; line-height: 1.55; overflow-wrap: anywhere; }
  th { background: #F6F7F9; color: #202938; font-weight: 600; }
  td { color: #4B576A; }
  code { border: 1px solid #E2E5EA; border-radius: 6px; background: #F6F7F9; padding: 2px 6px; color: #303A4A; font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 0.92em; overflow-wrap: anywhere; }
  tbody tr:last-child td { border-bottom: 0; }
  td:first-child { color: #222C3A; font-weight: 600; }
  .mobile-table { display: none; }

  .definition-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 32px; }
  .definition-card { border: 1px solid #E4E7EC; border-radius: 24px; background: #FFFFFF; padding: 24px; }
  .definition-card h3 { margin: 0; font-size: 20px; line-height: 1.35; }
  .definition-card ul { margin-top: 14px; }
  .definition-card li { position: relative; margin-top: 8px; padding-left: 20px; color: #536075; font-size: 16px; line-height: 1.55; }
  .definition-card li::before { content: ""; position: absolute; left: 0; top: 0.7em; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); }

  .layer-stack { display: grid; gap: 12px; margin-top: 34px; }
  .layer { display: grid; grid-template-columns: 180px 1fr; gap: 28px; align-items: center; border: 1px solid #E5E7EB; border-radius: 20px; background: #FFFFFF; padding: 18px 22px; }
  .layer strong { color: #202938; font-size: 17px; font-weight: 600; line-height: 1.4; }
  .layer span { color: #536075; font-size: 16px; line-height: 1.6; }
  .layer:nth-child(1) { margin-left: 0; width: 100%; }
  .layer:nth-child(2) { margin-left: 20px; width: calc(100% - 20px); }
  .layer:nth-child(3) { margin-left: 40px; width: calc(100% - 40px); }
  .layer:nth-child(4) { margin-left: 60px; width: calc(100% - 60px); }
  .layer:nth-child(5) { margin-left: 80px; width: calc(100% - 80px); }
  .layer:nth-child(6) { margin-left: 100px; width: calc(100% - 100px); }

  .status-list { margin-top: 30px; border-top: 1px solid var(--line); }
  .status-row { display: grid; grid-template-columns: 130px 1fr; gap: 26px; padding: 20px 0; border-bottom: 1px solid var(--line); }
  .status-row strong { color: var(--magenta); font-size: 16px; font-weight: 600; line-height: 1.5; }
  .status-row span { color: #536075; font-size: 16px; line-height: 1.65; }

  .process-flow { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; margin-top: 32px; }
  .process-step { display: grid; grid-template-columns: 38px 1fr; grid-template-rows: auto auto; column-gap: 14px; align-content: start; min-height: 142px; border: 1px solid #E3E6EA; border-radius: 22px; background: #FFFFFF; padding: 22px; }
  .process-step__number { display: flex; grid-row: 1 / 3; width: 34px; height: 34px; align-items: center; justify-content: center; border-radius: 50%; background: var(--blush); color: var(--magenta); font-size: 13px; font-weight: 600; }
  .process-step strong { display: block; color: #202938; font-size: 17px; font-weight: 600; line-height: 1.4; }
  .process-step > span:last-child { display: block; margin-top: 7px; color: #657083; font-size: 16px; line-height: 1.58; }

  .lifecycle { margin-top: 34px; border-top: 1px solid #DDE1E7; border-bottom: 1px solid #DDE1E7; }
  .lifecycle__row { display: grid; grid-template-columns: 118px 1fr; gap: 24px; padding: 20px 0; border-bottom: 1px solid #E7E9ED; }
  .lifecycle__row:last-child { border-bottom: 0; }
  .lifecycle__row strong { color: var(--magenta); font-size: 16px; font-weight: 600; line-height: 1.5; }
  .lifecycle__row span { color: #536075; font-size: 16px; line-height: 1.65; }

  .dark-chapter { width: min(900px, calc(100vw - 404px)); max-width: calc(100vw - 48px); border-radius: 30px; background: var(--dark); padding: 46px 48px 50px; color: #FFFFFF; }
  .dark-chapter h2, .dark-chapter h3 { color: #FFFFFF; }
  .dark-chapter p:not(.eyebrow) { color: #CBD2DC !important; }
  .sdv-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin-top: 34px; overflow: hidden; border: 1px solid rgba(255,255,255,0.12); border-radius: 24px; background: rgba(255,255,255,0.12); }
  .sdv-item { background: var(--dark-soft); padding: 24px; }
  .sdv-item strong { display: block; color: #FFFFFF; font-size: 17px; font-weight: 600; line-height: 1.4; }
  .sdv-item span { display: block; margin-top: 8px; color: #C4CBD5; font-size: 16px; line-height: 1.6; }
  .dark-link { color: var(--pink-light) !important; }

  .split-editorial { display: grid; grid-template-columns: 0.88fr 1.12fr; gap: 42px; margin-top: 34px; align-items: start; }
  .split-editorial__lead { border-left: 3px solid var(--magenta); padding-left: 22px; }
  .split-editorial__lead h3 { margin: 0; }
  .split-editorial__lead p { font-size: 16px !important; }
  .split-editorial__rows { border-top: 1px solid var(--line); }
  .split-editorial__row { padding: 20px 0; border-bottom: 1px solid var(--line); }
  .split-editorial__row strong { display: block; color: #202938; font-size: 17px; font-weight: 600; line-height: 1.45; }
  .split-editorial__row span { display: block; margin-top: 7px; color: #536075; font-size: 16px; line-height: 1.6; }

  .workflow-diagram { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 34px; }
  .workflow-stage { position: relative; border: 1px solid #E3E6EA; border-radius: 22px; background: #FFFFFF; padding: 22px; }
  .workflow-stage:nth-child(2), .workflow-stage:nth-child(5) { background: var(--blush); border-color: #EFD3DF; }
  .workflow-stage strong { display: block; color: #202938; font-size: 17px; font-weight: 600; line-height: 1.4; }
  .workflow-stage span { display: block; margin-top: 8px; color: #5E6A7D; font-size: 16px; line-height: 1.6; }

  .qa-grid, .metrics-grid, .stepes-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; margin-top: 32px; }
  .qa-card, .metric-card, .stepes-card { border: 1px solid #E4E7EC; border-radius: 24px; background: #FFFFFF; padding: 24px; }
  .qa-card h3, .metric-card h3, .stepes-card h3 { margin: 0; font-size: 20px; line-height: 1.35; }
  .qa-card p, .stepes-card p { margin-top: 10px !important; font-size: 16px !important; line-height: 1.68 !important; }
  .metric-card ul { margin-top: 12px; }
  .metric-card li { position: relative; margin-top: 8px; padding-left: 20px; color: #536075; font-size: 16px; line-height: 1.58; }
  .metric-card li::before { content: ""; position: absolute; left: 0; top: 0.65em; width: 7px; height: 7px; border: 1.5px solid var(--magenta); border-radius: 50%; }

  .maturity-model { margin-top: 34px; border-top: 1px solid var(--line); }
  .maturity-level { display: grid; grid-template-columns: 92px 180px 1fr; gap: 24px; align-items: start; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .maturity-level__number { color: var(--magenta); font-size: 15px; font-weight: 600; line-height: 1.5; }
  .maturity-level__title { color: #202938; font-size: 18px; font-weight: 600; line-height: 1.4; }
  .maturity-level__text { color: #536075; font-size: 16px; line-height: 1.65; }

  .roadmap { display: grid; grid-template-columns: 1fr 1fr; gap: 0 42px; margin-top: 34px; counter-reset: roadmap; }
  .roadmap-item { position: relative; min-height: 210px; padding: 28px 0 28px 62px; border-top: 1px solid var(--line); counter-increment: roadmap; }
  .roadmap-item::before { content: counter(roadmap, decimal-leading-zero); position: absolute; left: 0; top: 28px; color: var(--magenta); font-size: 18px; font-weight: 600; line-height: 1; }
  .roadmap-item h3 { margin: 0; font-size: 20px; }
  .roadmap-item p { margin-top: 10px !important; font-size: 16px !important; line-height: 1.68 !important; }

  .failure-list { margin-top: 30px; border-top: 1px solid var(--line); }
  .failure-row { display: grid; grid-template-columns: minmax(210px, 0.62fr) 1fr; gap: 34px; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .failure-row strong { color: #202938; font-size: 18px; font-weight: 600; line-height: 1.45; }
  .failure-row span { color: #536075; font-size: 16px; line-height: 1.65; }

  .stepes-panel { width: min(900px, calc(100vw - 404px)); max-width: calc(100vw - 48px); border: 1px solid #F0D6E1; border-radius: 30px; background: linear-gradient(135deg, #FFF 0%, #FDF2F7 100%); padding: 48px; }
  .stepes-panel h2 { max-width: 760px; }
  .stepes-panel .section-intro { max-width: 840px; }
  .stepes-grid { grid-template-columns: 1fr 1fr; }
  .stepes-card { background: rgba(255,255,255,0.86); }
  .stepes-links { display: flex; flex-wrap: wrap; gap: 12px 24px; margin-top: 30px; padding-top: 26px; border-top: 1px solid #EBCBD9; }

  .faq-panel { margin-top: 30px; border-top: 1px solid var(--line-strong); border-bottom: 1px solid var(--line-strong); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item:last-child { border-bottom: 0; }
  .faq-item summary { display: flex; min-height: 68px; align-items: center; justify-content: space-between; gap: 20px; cursor: pointer; list-style: none; color: #202938; font-size: 18px; font-weight: 600; line-height: 1.45; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary:focus-visible { outline: 2px solid rgba(193,29,99,0.26); outline-offset: 3px; border-radius: 4px; }
  .faq-item__icon { width: 20px; height: 20px; flex: none; color: var(--magenta); transition: transform 160ms ease; }
  .faq-item[open] .faq-item__icon { transform: rotate(180deg); }
  .faq-item__answer { max-width: 720px; padding: 0 42px 24px 0; color: #536075; font-size: 16px; line-height: 1.7; }

  .trust-section { border-top: 1px solid var(--line); background: #FAFAFB; }
  .trust-section__inner { max-width: 1120px; margin: 0 auto; padding-top: 76px; padding-bottom: 76px; }
  .trust-section h2 { margin: 0; font-size: 32px; font-weight: 600; letter-spacing: -0.028em; line-height: 1.15; }
  .source-list { margin-top: 30px; border-top: 1px solid var(--line); }
  .source-item { display: grid; grid-template-columns: 1fr 260px; gap: 26px; align-items: center; padding: 20px 0; border-bottom: 1px solid var(--line); }
  .source-item a { color: #202938; font-size: 16px; font-weight: 600; line-height: 1.5; text-decoration: none; }
  .source-item a:hover { color: var(--magenta); }
  .source-item span { color: #6A7485; font-size: 15px; line-height: 1.5; text-align: right; }
  .source-authorship { margin: 28px 0 0; color: #657083; font-size: 16px; line-height: 1.6; }

  .conclusion { background: #FFFFFF; }
  .conclusion__inner { max-width: 920px; margin: 0 auto; padding-top: 88px; padding-bottom: 88px; text-align: center; }
  .conclusion h2 { margin: 0; color: #111827; font-size: 36px; font-weight: 600; letter-spacing: -0.035em; line-height: 1.12; }
  .conclusion p { max-width: 780px; margin: 22px auto 0; color: #4A5668; font-size: 18px; line-height: 1.72; }

  .related { border-top: 1px solid var(--line); background: #FCFCFD; }
  .related__inner { padding-top: 82px; padding-bottom: 82px; }
  .related h2 { margin: 0; color: #111827; font-size: 36px; font-weight: 600; letter-spacing: -0.035em; line-height: 1.12; }
  .related__intro { max-width: 720px; margin: 18px 0 0; color: #536075; font-size: 18px; line-height: 1.68; }
  .related-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0 48px; margin-top: 38px; border-top: 1px solid var(--line); }
  .related-item { padding: 26px 0; border-bottom: 1px solid var(--line); }
  .related-item h3 { margin: 0; color: #202938; font-size: 20px; font-weight: 600; line-height: 1.4; }
  .related-item p { margin: 10px 0 0; color: #5D6879; font-size: 16px; line-height: 1.65; }

  .final-cta { background: #FFFFFF; }
  .final-cta__inner { padding-top: 88px; padding-bottom: 104px; }
  .final-cta__panel { display: grid; grid-template-columns: 1fr auto; gap: 48px; align-items: center; border: 1px solid #EFD3DF; border-radius: 30px; background: linear-gradient(135deg, #FDF2F7 0%, #FFFFFF 78%); padding: 48px 52px; }
  .final-cta h2 { max-width: 720px; margin: 0; color: #111827; font-size: 36px; font-weight: 600; letter-spacing: -0.035em; line-height: 1.12; }
  .final-cta p:not(.eyebrow) { max-width: 760px; margin: 18px 0 0; color: #536075; font-size: 18px; line-height: 1.68; }
  .final-cta__actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 260px; }

  @media (max-width: 1180px) {
    .page-shell { padding-left: 40px; padding-right: 40px; }
    .article-shell { grid-template-columns: 240px minmax(0, 720px); gap: 52px; max-width: 1012px; }
    .wide-module, .dark-chapter, .stepes-panel { width: min(900px, calc(100vw - 404px)); }
  }

  @media (max-width: 960px) {
    .page-shell { padding-left: 24px; padding-right: 24px; }
    .breadcrumbs { padding-top: 26px; }
    .hero__inner { padding-top: 58px; padding-bottom: 78px; }
    .hero h1 { max-width: 880px; font-size: 42px; }
    .summary-section__inner { padding-top: 64px; padding-bottom: 64px; }
    .takeaways { gap: 0 30px; }
    .article-shell { display: block; max-width: 780px; padding-top: 64px; }
    .toc-rail { display: none; }
    .mobile-toc { display: block; margin: 0 0 58px; border: 1px solid #E1E4E9; border-radius: 20px; background: #FFFFFF; }
    .mobile-toc summary { display: flex; min-height: 58px; align-items: center; justify-content: space-between; gap: 20px; padding: 0 20px; cursor: pointer; list-style: none; color: #202938; font-size: 16px; font-weight: 600; }
    .mobile-toc summary::-webkit-details-marker { display: none; }
    .mobile-toc__icon { width: 20px; height: 20px; color: var(--magenta); transition: transform 160ms ease; }
    .mobile-toc[open] .mobile-toc__icon { transform: rotate(180deg); }
    .mobile-toc ol { margin: 0; padding: 8px 20px 18px 36px; border-top: 1px solid #ECEEF1; }
    .mobile-toc li { margin: 10px 0; color: #657083; font-size: 16px; line-height: 1.5; }
    .mobile-toc a { color: #536075; text-decoration: none; }
    .mobile-toc a:hover { color: var(--magenta); }
    .wide-module { width: 100%; max-width: 100%; }
    .dark-chapter, .stepes-panel { width: 100%; max-width: 100%; }
    .process-flow { grid-template-columns: 1fr 1fr; }
    .workflow-diagram { grid-template-columns: 1fr 1fr; }
    .stepes-grid { grid-template-columns: 1fr 1fr; }
    .final-cta__panel { grid-template-columns: 1fr; }
    .final-cta__actions { flex-direction: column; min-width: 0; max-width: 430px; }
  }

  @media (max-width: 820px) {
    .desktop-table-wrap { display: none; }
    .mobile-table { display: grid; gap: 14px; }
    .mobile-table__group { overflow: hidden; border: 1px solid #E1E4E9; border-radius: 20px; background: #FFFFFF; }
    .mobile-table__row { display: grid; grid-template-columns: minmax(150px, 0.36fr) 1fr; gap: 18px; padding: 15px 18px; border-bottom: 1px solid #ECEEF1; }
    .mobile-table__row:last-child { border-bottom: 0; }
    .mobile-table__label { color: #303A4A; font-size: 16px; font-weight: 600; line-height: 1.5; }
    .mobile-table__value { min-width: 0; color: #536075; font-size: 16px; line-height: 1.55; overflow-wrap: anywhere; }
  }

  @media (max-width: 767px) {
    .page-shell { padding-left: 20px; padding-right: 20px; }
    .breadcrumbs { padding-top: 22px; }
    .breadcrumbs ol { gap: 5px 7px; }
    .breadcrumbs li { font-size: 14px; overflow-wrap: anywhere; }
    .hero__inner { padding-top: 46px; padding-bottom: 64px; }
    .hero h1 { font-size: 38px; line-height: 1.08; }
    .hero__lede { margin-top: 22px; font-size: 17px; line-height: 1.68; }
    .hero__actions { flex-direction: column; align-items: stretch; margin-top: 28px; }
    .button { width: 100%; min-height: 50px; }
    .summary-section__inner { padding-top: 58px; padding-bottom: 58px; }
    .summary-section h2 { font-size: 30px; }
    .takeaways { grid-template-columns: 1fr; margin-top: 30px; }
    .takeaway { padding: 22px 0; }
    .article-shell { padding-top: 56px; padding-bottom: 74px; }
    .mobile-toc { margin-bottom: 50px; }
    .article-section { padding-bottom: 66px; }
    .article-section + .article-section { padding-top: 66px; }
    .article-section h2 { font-size: 30px; line-height: 1.13; }
    .article-section h3 { margin-top: 34px; font-size: 20px; line-height: 1.3; }
    .section-intro { font-size: 17px; line-height: 1.68; }
    .article-section p:not(.section-intro):not(.source-note):not(.eyebrow) { font-size: 17px; line-height: 1.7; }
    .article-section li.bullet { font-size: 16px; }
    .callout { padding: 22px; }
    .callout__statement { font-size: 20px !important; }
    .mobile-table__row { grid-template-columns: minmax(115px, 0.42fr) 1fr; gap: 16px; padding: 14px 16px; }
    .definition-grid, .qa-grid, .metrics-grid, .stepes-grid, .sdv-grid, .split-editorial, .workflow-diagram, .roadmap, .related-grid { grid-template-columns: 1fr; }
    .layer { grid-template-columns: 1fr; gap: 8px; padding: 18px; }
    .layer:nth-child(n) { margin-left: 0; width: 100%; }
    .status-row { grid-template-columns: 1fr; gap: 6px; }
    .process-flow { grid-template-columns: 1fr; }
    .process-step { min-height: 0; }
    .lifecycle__row { grid-template-columns: 1fr; gap: 6px; }
    .dark-chapter { border-radius: 24px; padding: 34px 24px 38px; }
    .split-editorial { gap: 28px; }
    .maturity-level { grid-template-columns: 80px 1fr; gap: 10px 18px; }
    .maturity-level__text { grid-column: 1 / -1; padding-left: 0; }
    .roadmap { gap: 0; }
    .roadmap-item { min-height: 0; padding-left: 52px; }
    .failure-row { grid-template-columns: 1fr; gap: 8px; }
    .stepes-panel { border-radius: 24px; padding: 34px 24px; }
    .faq-item summary { min-height: 72px; font-size: 17px; }
    .faq-item__answer { padding-right: 0; }
    .trust-section__inner { padding-top: 64px; padding-bottom: 64px; }
    .trust-section h2 { font-size: 30px; }
    .source-item { grid-template-columns: 1fr; gap: 8px; }
    .source-item span { text-align: left; }
    .conclusion__inner, .related__inner { padding-top: 66px; padding-bottom: 66px; }
    .conclusion h2, .related h2 { font-size: 30px; }
    .conclusion p, .related__intro { font-size: 17px; }
    .final-cta__inner { padding-top: 66px; padding-bottom: 78px; }
    .final-cta__panel { gap: 30px; border-radius: 24px; padding: 34px 24px; }
    .final-cta h2 { font-size: 30px; }
    .final-cta p { font-size: 17px; }
    .final-cta__actions { flex-direction: column; }
  }

  @media (max-width: 389px) {
    .hero h1 { font-size: 35px; }
    .final-cta__panel { padding-left: 20px; padding-right: 20px; }
    .final-cta .button { padding-left: 14px; padding-right: 14px; }
    .mobile-table__row { grid-template-columns: 1fr; gap: 5px; }
    .maturity-level { grid-template-columns: 1fr; }
    .maturity-level__text { grid-column: auto; padding-left: 0; }
    .roadmap-item { padding-left: 46px; }
  }
`;

export default function AutomotiveTerminologyManagementGuideWireframe() {
  const [activeId, setActiveId] = useState(tocItems[0].id);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const sections = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 0.1, 0.5] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="page-shell">
          <Breadcrumbs />
          <div className="hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">Automotive Localization Guide</p>
              <h1 id="page-title">Automotive Terminology Management Across Models and Markets</h1>
              <p className="hero__lede">
                Build a governed multilingual terminology system that preserves technical meaning across vehicle
                platforms, model years, software releases, suppliers, departments, content types, and global markets.
              </p>
              <div className="hero__actions" aria-label="Guide actions">
                <a className="button button--primary" href={sectionUrl("why-automotive-terminology-is-difficult")}>
                  Explore the Guide
                  <ArrowIcon className="button__icon" />
                </a>
                <a className="button button--secondary" href={sectionUrl("maturity-model")}>
                  View the Maturity Model
                  <ArrowIcon className="button__icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="page-shell summary-section__inner">
          <p className="eyebrow">Key Takeaways</p>
          <h2 id="key-takeaways-title">The Language Foundation for Consistent Global Vehicle Content</h2>
          <div className="takeaways">
            {keyTakeaways.map((item) => (
              <article className="takeaway" key={item.title}>
                <span className="takeaway__mark"><CheckIcon /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="page-shell">
        <div className="article-shell">
          <Toc activeId={activeId} />
          <article className="article-content">
            <MobileToc />

            <section className="article-section" id="why-automotive-terminology-is-difficult">
              <h2>Why Automotive Terminology Is So Difficult to Control</h2>
              <SectionIntro>
                Automotive terminology rarely belongs to one document or one department. The same vehicle function can
                appear in engineering, software, HMI, diagnostics, manuals, service content, training, marketing, and
                customer support—often with valid differences in wording.
              </SectionIntro>

              <h3>One Vehicle Concept Can Appear in Dozens of Places</h3>
              <p>
                An engineer may need a precise system designation. A driver may need a short, understandable label. A
                technician may need terminology that aligns with diagnostic tools and repair procedures. A marketing team
                may need a customer-friendly feature expression. The terminology program should connect these expressions
                to the same underlying concept while documenting where each one is approved.
              </p>

              <ResponsiveTable
                className="wide-module"
                label="Illustrative expressions for battery preconditioning across automotive content environments"
                headers={["Content Environment", "Illustrative Expression"]}
                rows={touchpointRows}
              />
              <p>
                These expressions are not automatically interchangeable. The software identifier should normally remain
                unchanged, the HMI label may be constrained by available space, the owner manual may need a complete
                explanation, and the service term may need to correspond with diagnostics. Consistency therefore means
                preserving the relationship among approved expressions—not repeating one phrase everywhere.
              </p>

              <h3>Vehicle Development Is Distributed</h3>
              <p>
                Modern vehicle programs involve OEMs, regional subsidiaries, engineering centers, joint ventures, Tier 1
                and Tier 2 suppliers, software developers, technical-writing teams, regulatory specialists, dealers,
                translation providers, and in-country reviewers. Each handoff can introduce a synonym, abbreviation,
                definition, or translation that does not match the broader program.
              </p>

              <h3>Departments Describe the Same Concept Differently</h3>
              <p>
                Engineering prioritizes technical precision. Software teams work with identifiers, resource keys, character
                limits, and release branches. Technical publications teams emphasize clarity and reuse. Legal and regulatory
                teams focus on approved claims and jurisdictional language. Service teams need alignment with parts,
                diagnostics, and repair actions. Marketing and local-market teams concentrate on customer understanding and
                established usage. These perspectives should be reconciled, not erased.
              </p>

              <h3>Platforms and Model Years Accumulate Language</h3>
              <p>
                A shared vehicle architecture may support several brands, models, powertrains, trims, and regional
                configurations. Some terminology applies globally; other terms are limited to one platform, model, option,
                software generation, model year, or market. A current expression may be inaccurate for an earlier vehicle
                that remains in service. Centralized terminology must therefore control both reuse and boundaries.
              </p>

              <h3>Software Has Accelerated Terminology Change</h3>
              <p>
                Connected services, companion applications, voice interfaces, software-defined functions, and over-the-air
                releases introduce customer-facing language throughout the ownership lifecycle. Terminology decisions now
                need to remain synchronized with release information, HMI content, help systems, service materials, and
                customer communications.
              </p>
              <SourceNote>
                UN Regulation No. 156 addresses vehicle software updates and software-update management systems. It does not
                define translation terminology, but it illustrates the broader importance of controlled and traceable
                software-release information. See the <a href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update" target="_blank" rel="noreferrer">UNECE regulation</a>.
              </SourceNote>

              <h3>Translation Often Reveals Source-Language Problems</h3>
              <p>
                Translators must determine exactly what a source term means before selecting an equivalent. This process
                frequently exposes conflicting names, ambiguous abbreviations, obsolete terms, mismatched engineering and
                customer language, or one expression being used for two distinct concepts.
              </p>
              <div className="callout">
                <p className="callout__label">Important Distinction</p>
                <p className="callout__statement">A translation problem is often a source terminology problem first.</p>
                <p className="callout__copy">
                  Resolving ambiguity in the source language strengthens every target language and reduces repeated review
                  cycles across future projects.
                </p>
              </div>
            </section>

            <section className="article-section" id="automotive-language-assets">
              <h2>Glossaries, Termbases, Taxonomies, and Translation Memory</h2>
              <SectionIntro>
                These language assets support one another, but they manage different units of information and should not be
                treated as interchangeable.
              </SectionIntro>

              <h3>A Glossary Is a Starting Point</h3>
              <p>
                A basic multilingual glossary may list a source term, its translation, and a short note. That can help a
                small project, but it rarely answers the questions a global automotive program needs to resolve: what the
                term means, where it applies, whether alternatives are allowed, who approved it, and whether it has been
                superseded.
              </p>

              <h3>A Termbase Manages Concepts</h3>
              <p>
                A termbase is organized around concepts rather than isolated words. One concept record may connect a
                preferred technical term, an approved customer-facing expression, an acronym, permitted synonyms,
                prohibited legacy language, approved translations by locale, product applicability, and decision history.
              </p>
              <SourceNote>
                ISO 704 describes the relationship among objects, concepts, definitions, and designations and supports the
                concept-oriented approach used in professional terminology work. Review <a href="https://www.iso.org/standard/79077.html" target="_blank" rel="noreferrer">ISO 704:2022</a>.
              </SourceNote>

              <h3>A Taxonomy Organizes Related Concepts</h3>
              <p>
                An automotive taxonomy can group terminology for propulsion, battery and charging, chassis, body and
                comfort, infotainment, ADAS, automated driving, diagnostics, manufacturing, service, and regulatory content.
                It helps users find related concepts but does not replace the multilingual term records themselves.
              </p>

              <h3>Translation Memory Stores Approved Content Segments</h3>
              <p>
                Translation Memory stores approved bilingual sentences, warnings, headings, instructions, interface
                strings, and other content segments. When similar content appears in a new project, it can be reused or
                reviewed for the new context. A termbase governs concepts; Translation Memory supports content reuse.
              </p>

              <ResponsiveTable
                className="wide-module"
                label="Comparison of automotive language assets"
                headers={["Resource", "Primary Unit", "Main Purpose", "Automotive Example"]}
                rows={languageAssetRows.map((row) => [row.resource, row.unit, row.purpose, row.example])}
              />

              <EditorialLink href="https://www.stepes.com/translation-memory/">
                Explore Translation Memory
              </EditorialLink>
            </section>

            <section className="article-section" id="automotive-term-record">
              <h2>What an Automotive Term Record Should Contain</h2>
              <SectionIntro>
                A useful record gives authors, engineers, software teams, translators, and reviewers enough information to
                apply a concept correctly. Organizations can begin with a practical core and add fields as program scale and
                risk increase.
              </SectionIntro>

              <div className="definition-grid">
                {termRecordGroups.map((group) => (
                  <article className="definition-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>

              <h3>Illustrative Automotive Term Record</h3>
              <p>
                This fictional example demonstrates the structure. It does not prescribe terminology for a particular
                manufacturer.
              </p>
              <ResponsiveTable
                className="wide-module"
                label="Illustrative automotive terminology record"
                headers={["Field", "Illustrative Entry"]}
                rows={sampleRecord}
              />
              <p>
                The value of the record lies not only in the approved term, but also in its definition, boundaries, and
                decision history. Those fields prevent the term from being applied to the wrong system, model, market, or
                audience.
              </p>
              <SourceNote>
                ISO 26162-3 addresses content, quality, interoperability, evaluation, and continuous improvement for
                terminology resources. See <a href="https://www.iso.org/standard/80464.html" target="_blank" rel="noreferrer">ISO 26162-3:2023</a>.
              </SourceNote>
            </section>

            <section className="article-section" id="models-and-markets">
              <h2>Managing Terminology Across Models and Markets</h2>
              <SectionIntro>
                A central terminology environment should support inheritance and controlled exceptions—not act as one
                undifferentiated master glossary that sends every term to every project.
              </SectionIntro>

              <h3>One Central Source, Multiple Levels of Applicability</h3>
              <div className="layer-stack wide-module" aria-label="Automotive terminology applicability hierarchy">
                {applicabilityLayers.map((layer) => (
                  <div className="layer" key={layer.label}>
                    <strong>{layer.label}</strong>
                    <span>{layer.text}</span>
                  </div>
                ))}
              </div>

              <h3>Global Core Terminology</h3>
              <p>
                Global terminology can include shared engineering concepts, corporate product language, common system
                names, and standard safety terminology. It provides the foundation from which more specific language is
                inherited.
              </p>

              <h3>Brand and Platform Terminology</h3>
              <p>
                Automotive groups may share technology while using different customer-facing names across brands. A central
                record can preserve the common concept, technical definition, approved brand expressions, and the contexts
                in which each one applies. Platform-level terms can also support modular architectures, shared powertrains,
                battery systems, infotainment, and ADAS stacks.
              </p>

              <h3>Model, Trim, and Model-Year Terminology</h3>
              <p>
                A term may be valid only for one model, option package, software generation, or effective date. Applicability
                controls prevent new language from being propagated to unsupported configurations or legacy service content.
              </p>

              <h3>Market, Locale, and Content-Specific Terminology</h3>
              <p>
                Language, locale, country, regulatory jurisdiction, market convention, and brand preference are separate
                dimensions. The same governed concept may also require a technical designation in engineering, a short HMI
                label, a customer explanation in an owner manual, and a technician-facing service term.
              </p>

              <h3>Inheritance and Controlled Overrides</h3>
              <p>
                A term should normally inherit from the highest applicable level. A lower-level override should be introduced
                only for a documented technical difference, legal requirement, brand decision, established market
                convention, interface constraint, or audience need. Every override should have an owner, scope, reason, and
                effective date.
              </p>
            </section>

            <section className="article-section" id="global-and-local-language">
              <h2>Global Consistency Without Erasing Local Language</h2>
              <SectionIntro>
                Centralization should preserve one shared understanding of the concept while allowing valid local,
                audience-specific, and content-specific expressions.
              </SectionIntro>

              <h3>Govern the Concept Globally</h3>
              <p>
                A global record should preserve what the concept means, how it differs from related concepts, where it
                applies, which expressions are approved, and who has authority to change it. That gives local teams a stable
                technical reference point.
              </p>

              <h3>Adapt the Expression Locally</h3>
              <p>
                Market-specific language may be appropriate because of regulatory wording, national legal definitions,
                established automotive usage, regional spelling, script requirements, customer familiarity, local product
                naming, technical conventions, or voice and pronunciation needs. A local variant is not terminology drift
                when it is documented, approved, and connected to the correct concept.
              </p>

              <h3>Balance Technical Accuracy and Customer Comprehension</h3>
              <p>
                The most technically exact term is not always the clearest expression for a driver. A terminology record can
                preserve the formal concept name while documenting approved language for an interface, owner manual,
                customer-support response, or marketing context.
              </p>

              <h3>Use Clear Variant Statuses</h3>
              <p>
                Preferred, allowed, prohibited, deprecated, and provisional statuses help contributors understand both the
                default language and the conditions under which another expression may be used.
              </p>

              <div className="status-list wide-module" aria-label="Automotive terminology statuses">
                {termStatuses.map(([status, description]) => (
                  <div className="status-row" key={status}>
                    <strong>{status}</strong>
                    <span>{description}</span>
                  </div>
                ))}
              </div>

              <h3>Creative Adaptation Still Needs Terminology Guardrails</h3>
              <p>
                Marketing and customer communications can adapt language creatively while protecting approved product
                names, feature meanings, technical claims, safety distinctions, and brand architecture. Controlled
                adaptation is different from ungoverned terminology drift.
              </p>
            </section>

            <section className="article-section" id="terminology-governance">
              <h2>Governance Across OEMs, Suppliers, and Departments</h2>
              <SectionIntro>
                Terminology programs become dependable when the organization defines who can propose, review, approve,
                publish, revise, and retire different types of language decisions.
              </SectionIntro>

              <h3>Assign Authority by Term Type</h3>
              <ResponsiveTable
                className="wide-module"
                label="Typical automotive terminology approval authorities"
                headers={["Term Category", "Typical Approval Authority"]}
                rows={authorityRows}
              />
              <p>
                Localization or terminology teams can coordinate the process, but they should not be expected to make every
                technical, legal, safety, or regulatory decision alone.
              </p>

              <h3>The Automotive Terminology Governance Loop</h3>
              <div className="process-flow wide-module" aria-label="Automotive terminology governance process">
                {governanceSteps.map(([title, text], index) => (
                  <div className="process-step" key={title}>
                    <span className="process-step__number">{String(index + 1).padStart(2, "0")}</span>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <h3>Apply Risk-Based Review</h3>
              <p>
                Not all terminology requires the same approval depth. A general internal operating term may need limited
                review, while a driver warning, regulated statement, safety-sensitive instruction, or ADAS term may require
                technical, legal, linguistic, and in-context validation. Review depth should reflect safety impact,
                regulatory exposure, customer visibility, technical complexity, market reach, and the difficulty of
                correcting released content.
              </p>

              <h3>Give Suppliers Controlled Access</h3>
              <p>
                Supplier governance should define who can view terminology, propose changes, edit records, receive version
                notifications, confirm adoption, and escalate questions. Static spreadsheets can still serve as controlled
                exports, but the authoritative resource and current version must remain identifiable.
              </p>

              <h3>Preserve the Reason Behind the Decision</h3>
              <p>
                Record which alternatives were considered, why one expression was selected, why another was rejected, who
                approved the decision, what evidence was reviewed, and where exceptions apply. This prevents the same issue
                from being reopened during every model launch or translation project.
              </p>
            </section>

            <section className="article-section" id="vehicle-lifecycle">
              <h2>Terminology Through the Vehicle Lifecycle</h2>
              <SectionIntro>
                Terminology must evolve with the vehicle—from early concept development through software updates, service,
                model-year revisions, and long-term legacy support.
              </SectionIntro>

              <div className="lifecycle wide-module" aria-label="Automotive terminology lifecycle">
                {lifecycleStages.map(([stage, description]) => (
                  <div className="lifecycle__row" key={stage}>
                    <strong>{stage}</strong>
                    <span>{description}</span>
                  </div>
                ))}
              </div>

              <h3>Concept, Development, and Validation</h3>
              <p>
                Early programs generate working system names, engineering abbreviations, provisional feature names, supplier
                terms, and draft customer expressions. These should remain provisional until definitions and product
                decisions stabilize. Conflicts found in requirements, prototype HMI, diagnostics, validation, or supplier
                content should be resolved before they propagate into customer-facing materials.
              </p>

              <h3>Launch, Production, and Aftersales</h3>
              <p>
                A product launch creates simultaneous terminology needs across HMI, owner documentation, regulatory
                materials, dealer training, applications, marketing, and support. The same approved language foundation
                should support all of them while respecting audience differences. After launch, terminology continues into
                diagnostics, repair, parts, warranty, bulletins, and customer support.
              </p>

              <h3>Model-Year Changes and OTA Releases</h3>
              <p>
                Records should be reviewed when features, hardware, warnings, functionality, product names, or regional
                availability change. OTA updates may require synchronized terminology across software strings, release notes,
                help content, owner information, service systems, applications, customer notifications, and support
                knowledge bases.
              </p>

              <h3>Retirement and Legacy Support</h3>
              <p>
                Obsolete language should not always be deleted. Older expressions may remain necessary for vehicles in
                service, repair documentation, regulatory records, warranty cases, customer searches, and historical
                Translation Memory. A deprecated status preserves discoverability while preventing unintended reuse.
              </p>

              <EditorialLink href="https://www.stepes.com/resources/localization-guides/automotive-ota-localization/">
                Explore Automotive OTA Localization
              </EditorialLink>
            </section>

            <section className="article-section" id="software-defined-vehicles">
              <div className="dark-chapter">
                <h2>Software-Defined and Connected Vehicle Terminology</h2>
                <SectionIntro>
                  Automotive terminology is evolving from disconnected word lists into connected knowledge that links
                  in-vehicle software, cloud services, companion applications, data platforms, recurring releases, and
                  customer experiences—without treating their language layers as interchangeable strings.
                </SectionIntro>

                <div className="sdv-grid" aria-label="Software-defined vehicle language layers">
                  {sdvLayers.map(([title, text]) => (
                    <div className="sdv-item" key={title}>
                      <strong>{title}</strong>
                      <span>{text}</span>
                    </div>
                  ))}
                </div>

                <h3>Separate Internal Identifiers From Translatable Language</h3>
                <p>
                  Software keys, signal names, API identifiers, and diagnostic codes often remain unchanged. Their display
                  names, definitions, help text, and customer explanations may require localization. A terminology record can
                  connect these elements while clearly marking what is nontranslatable and what varies by language or market.
                </p>

                <h3>Support Reuse Across the Vehicle and Cloud</h3>
                <p>
                  A connected function may appear in the vehicle interface, mobile app, customer account, fleet platform,
                  cloud documentation, developer materials, and support content. Governance keeps the concept recognizable
                  without forcing every channel to use identical wording.
                </p>

                <h3>Voice and Conversational Interfaces</h3>
                <p>
                  Voice experiences may require natural spoken synonyms, pronunciation guidance, regional variants,
                  recognition vocabulary, approved system-response language, and alignment between speech and screen.
                  In-context testing remains essential because a term that reads well may not sound natural or be recognized
                  reliably.
                </p>

                <h3>Termbases, Taxonomies, Ontologies, and Vehicle Data Models</h3>
                <p>
                  Termbases govern linguistic expressions, taxonomies organize categories, ontologies represent formal
                  concept relationships, and vehicle data models structure machine-readable information. Not every program
                  needs a full ontology, but a concept-oriented termbase creates a practical foundation for future semantic
                  integration.
                </p>
                <SourceNote>
                  COVESA describes its Vehicle Signal Specification as a common language for consistently describing vehicle
                  data in the vehicle and cloud. This is not a multilingual termbase, but it demonstrates the automotive
                  industry’s broader need for shared semantic models. Review the <a className="dark-link" href="https://covesa.global/vehicle-signal-specification/" target="_blank" rel="noreferrer">Vehicle Signal Specification</a>.
                </SourceNote>
              </div>
            </section>

            <section className="article-section" id="ai-and-human-translation">
              <h2>Terminology in AI and Human Translation</h2>
              <SectionIntro>
                AI can accelerate terminology discovery and multilingual production, but approved terminology and qualified
                human judgment remain essential control layers.
              </SectionIntro>

              <div className="split-editorial wide-module">
                <div className="split-editorial__lead">
                  <h3>Technology Finds Candidates. People Approve Concepts.</h3>
                  <p>
                    Automated extraction can identify repeated technical expressions, acronyms, product names, new feature
                    language, conflicting variants, and legacy terms. A reviewer must still decide whether the candidate is
                    meaningful, distinct, correctly defined, and appropriate for multilingual control.
                  </p>
                </div>
                <div className="split-editorial__rows">
                  <div className="split-editorial__row">
                    <strong>Terminology-Guided AI Translation</strong>
                    <span>Provide preferred terms, product names, prohibited variants, abbreviations, market instructions, domain context, and audience guidance.</span>
                  </div>
                  <div className="split-editorial__row">
                    <strong>Professional Linguistic Judgment</strong>
                    <span>Determine grammar, inflection, word order, compounding, register, audience fit, context, and the appropriate approved variant.</span>
                  </div>
                  <div className="split-editorial__row">
                    <strong>Technical and Market Review</strong>
                    <span>Route questions to engineers, product experts, legal reviewers, and in-country specialists qualified to validate the decision.</span>
                  </div>
                  <div className="split-editorial__row">
                    <strong>Closed-Loop Learning</strong>
                    <span>Capture validated corrections from projects so future translation, review, terminology QA, and releases benefit from the decision.</span>
                  </div>
                </div>
              </div>

              <p>
                Terminology should never be applied as mechanical find-and-replace. The approved concept may appear in
                different grammatical forms in another language, and context may make an allowed alternative more suitable
                than the default expression.
              </p>

              <EditorialLink href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/">
                Explore AI + Human Translation Workflows
              </EditorialLink>
            </section>

            <section className="article-section" id="content-systems">
              <h2>Connecting Terminology With Automotive Content Systems</h2>
              <SectionIntro>
                Terminology creates the most value when it is available inside the systems where vehicle content is authored,
                localized, reviewed, released, and maintained.
              </SectionIntro>

              <div className="workflow-diagram wide-module" aria-label="Connected automotive terminology workflow">
                {workflowSteps.map(([title, text]) => (
                  <div className="workflow-stage" key={title}>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <h3>Technical Authoring and Structured Content</h3>
              <p>
                Automotive technical documentation frequently uses DITA, XML, component content management systems,
                reusable modules, warning libraries, and product variables. Terminology can support authoring guidance,
                source consistency, structured reuse, and multilingual publishing.
              </p>
              <SourceNote>
                The DITA glossary-entry structure supports definitions, usage information, acronyms, abbreviations, and
                related terminology data. Review the <a href="https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/archSpec/technicalContent/dita-glossary-topic.html" target="_blank" rel="noreferrer">OASIS DITA glossary specification</a>.
              </SourceNote>

              <h3>Software and HMI Repositories</h3>
              <p>
                Software workflows may include resource files, string databases, design systems, screenshots, character
                limits, placeholders, release branches, and separate voice and display variants. The applicable terminology
                should be selected according to product, platform, market, language, and release.
              </p>

              <h3>Translation Management and Review</h3>
              <p>
                A translation-management workflow can assign the right termbase, show approved terms to translators, guide
                AI-assisted production, route terminology questions, enable reviewer comments, perform automated checks,
                and capture approved changes.
              </p>

              <h3>Product, Engineering, and Business Systems</h3>
              <p>
                Terminology may connect with product lifecycle management, requirements, parts databases, product
                information management, diagnostics, and support systems. It does not need to replace every source system;
                the integration model should reflect which system owns each type of data.
              </p>

              <h3>APIs and Automated Workflows</h3>
              <p>
                APIs can retrieve applicable terminology, distribute project-specific terminology packages, synchronize
                approved updates, trigger reviewer notifications, and support reporting. Automation should preserve product,
                market, release, and audience context rather than sending every term to every project.
              </p>

              <h3>Assign the Right Terminology Resource</h3>
              <p>
                The goal is not to expose the largest possible termbase. It is to provide the language appropriate to the
                vehicle program, platform, model year, market, language, content type, software release, supplier, and
                audience involved in the project.
              </p>

              <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">
                Explore Enterprise Translation Management
              </EditorialLink>
            </section>

            <section className="article-section" id="terminology-quality-assurance">
              <h2>Automotive Terminology Quality Assurance</h2>
              <SectionIntro>
                Approved terminology must be checked in context. Automated rules help identify potential issues, while
                linguistic, technical, and in-context review determine whether the complete content works correctly.
              </SectionIntro>

              <div className="qa-grid wide-module">
                {qaLayers.map((layer) => (
                  <article className="qa-card" key={layer.title}>
                    <h3>{layer.title}</h3>
                    <p>{layer.text}</p>
                  </article>
                ))}
              </div>

              <h3>Understand False Positives</h3>
              <p>
                Automated checks can be confused by inflection, grammatical gender, plural forms, compound words, separable
                constructions, longer approved expressions, context-specific variants, and character-limited interfaces. A
                quality process must distinguish a genuine terminology error from a linguistically necessary variation.
              </p>

              <h3>Terminology Compliance Is Not Complete Translation Quality</h3>
              <p>
                A translation can use every preferred term and still contain an incorrect instruction, omitted condition,
                ambiguous warning, unnatural sentence, interface problem, or inaccurate product claim. Terminology assurance
                should operate within broader Translation Quality Assurance that includes linguistic, technical, functional,
                and in-context validation.
              </p>

              <EditorialLink href="https://www.stepes.com/translation-quality-assurance/">
                Explore Translation Quality Assurance
              </EditorialLink>
            </section>

            <section className="article-section" id="program-measurement">
              <h2>Measuring Terminology Program Performance</h2>
              <SectionIntro>
                Database size alone is not a meaningful success measure. A smaller termbase with well-defined, widely used,
                high-value concepts can outperform a much larger collection of incomplete entries.
              </SectionIntro>

              <div className="metrics-grid wide-module">
                {metricGroups.map((group) => (
                  <article className="metric-card" key={group.title}>
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
              <p>
                Metrics become more actionable when segmented by brand, platform, model, language, market, department,
                supplier, and content type. This helps program owners identify whether a quality problem is local, systemic,
                product-specific, or workflow-related.
              </p>
            </section>

            <section className="article-section" id="maturity-model">
              <h2>An Automotive Terminology Maturity Model</h2>
              <SectionIntro>
                Use this model to identify the next practical improvement rather than treating the highest level as a
                universal requirement. The appropriate maturity depends on product complexity, translation volume, content
                risk, market reach, supplier structure, release frequency, and existing systems.
              </SectionIntro>

              <div className="maturity-model wide-module">
                {maturityLevels.map((item) => (
                  <div className="maturity-level" key={item.level}>
                    <span className="maturity-level__number">{item.level}</span>
                    <span className="maturity-level__title">{item.title}</span>
                    <span className="maturity-level__text">{item.text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section" id="implementation-roadmap">
              <h2>How to Build an Automotive Terminology Program</h2>
              <SectionIntro>
                Start with the language decisions that carry the greatest operational, technical, safety, customer, or
                regulatory value. Build structure and governance before attempting to import every term the organization has
                ever used.
              </SectionIntro>

              <div className="roadmap wide-module">
                {roadmapSteps.map((step) => (
                  <article className="roadmap-item" key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="article-section" id="common-failures">
              <h2>Common Automotive Terminology Management Failures</h2>
              <SectionIntro>
                Most terminology programs do not fail because the organization lacks words. They fail because the language
                resource is disconnected from decisions, ownership, systems, and everyday production.
              </SectionIntro>

              <div className="failure-list wide-module">
                {commonFailures.map(([title, text]) => (
                  <div className="failure-row" key={title}>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="article-section" id="stepes-support">
              <div className="stepes-panel">
                <h2>How Stepes Supports Automotive Terminology Management</h2>
                <SectionIntro>
                  Stepes helps automotive manufacturers, suppliers, software teams, and global content organizations turn
                  disconnected terminology resources into governed multilingual assets connected with translation, review,
                  quality assurance, and ongoing content operations.
                </SectionIntro>

                <div className="stepes-grid">
                  {stepesCapabilities.map((item) => (
                    <article className="stepes-card" key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </article>
                  ))}
                </div>

                <div className="stepes-links" aria-label="Related Stepes capabilities">
                  <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
                  <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
                  <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</EditorialLink>
                  <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
                  <EditorialLink href="https://www.stepes.com/automotive-translation-services/">Automotive Translation Services</EditorialLink>
                </div>
              </div>
            </section>

            <section className="article-section" id="faq">
              <h2>Automotive Terminology Management FAQ</h2>
              <SectionIntro>
                These answers address the most common planning, governance, and workflow questions raised by automotive
                localization and global content teams.
              </SectionIntro>

              <div className="faq-panel">
                {faqItems.map((item) => (
                  <details className="faq-item" key={item.question}>
                    <summary>
                      <span>{item.question}</span>
                      <ChevronIcon className="faq-item__icon" />
                    </summary>
                    <div className="faq-item__answer">{item.answer}</div>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <section className="trust-section" aria-labelledby="sources-title">
        <div className="page-shell">
          <div className="trust-section__inner">
            <h2 id="sources-title">Sources and References</h2>
            <div className="source-list">
              {sources.map((source) => (
                <div className="source-item" key={source.title}>
                  <a href={source.href} target={source.href.startsWith("https://www.stepes.com/") ? undefined : "_blank"} rel={source.href.startsWith("https://www.stepes.com/") ? undefined : "noreferrer"}>
                    {source.title}
                  </a>
                  <span>{source.organization}</span>
                </div>
              ))}
            </div>
            <p className="source-authorship">Prepared by the Stepes Automotive Localization Team.</p>
          </div>
        </div>
      </section>

      <section className="conclusion" aria-labelledby="conclusion-title">
        <div className="page-shell">
          <div className="conclusion__inner">
            <h2 id="conclusion-title">Build Terminology That Moves With the Vehicle</h2>
            <p>
              The strongest automotive terminology programs do more than standardize words. They preserve technical meaning,
              document valid variation, connect decisions to production systems, and evolve with vehicle platforms, software
              releases, markets, suppliers, and the complete ownership lifecycle.
            </p>
          </div>
        </div>
      </section>

      <section className="related" aria-labelledby="related-title">
        <div className="page-shell related__inner">
          <h2 id="related-title">Related Guides and Services</h2>
          <p className="related__intro">
            Continue from terminology governance into the automotive content, software, quality, and testing workflows it
            supports.
          </p>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <EditorialLink href={resource.href}>{resource.linkLabel}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="page-shell final-cta__inner">
          <div className="final-cta__panel">
            <div>
              <h2 id="final-cta-title">Build a More Consistent Automotive Language Program</h2>
              <p>
                Centralize terminology across vehicle platforms, model years, suppliers, content systems, departments, and
                global markets with a governed multilingual workflow.
              </p>
            </div>
            <div className="final-cta__actions">
              <a className="button button--primary" href="https://www.stepes.com/contact-us/">
                Talk to an Automotive Translation Expert
                <ArrowIcon className="button__icon" />
              </a>
              <a className="button button--secondary" href="https://www.stepes.com/automotive-translation-services/">
                Explore Automotive Translation Services
                <ArrowIcon className="button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
