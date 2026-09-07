// Stepes Automotive Technical Manual Translation Guide Wireframe v3
import React, { useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/translation-guides/automotive-technical-manual-translation-guide/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const breadcrumbs = [
  { label: "Home", href: "https://www.stepes.com/" },
  { label: "Resources", href: "https://www.stepes.com/resources/" },
  {
    label: "Translation Guides",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
  {
    label: "Automotive Technical Manual Translation Guide",
    current: true,
  },
];

const tocItems = [
  { id: "why-automotive-manuals-are-complex", label: "Why Automotive Manuals Are Complex" },
  { id: "automotive-documentation-ecosystem", label: "The Documentation Ecosystem" },
  { id: "structured-content-and-dita", label: "Structured Content, DITA, and XML" },
  { id: "preparing-content-for-translation", label: "Preparing Content for Translation" },
  { id: "end-to-end-workflow", label: "The End-to-End Workflow" },
  { id: "model-year-and-variant-management", label: "Model-Year and Variant Management" },
  { id: "translation-reuse-and-cost-efficiency", label: "Translation Reuse and Cost Efficiency" },
  { id: "automotive-terminology-governance", label: "Automotive Terminology Governance" },
  { id: "dita-xml-localization-engineering", label: "DITA and XML Localization Engineering" },
  { id: "tables-graphics-and-embedded-content", label: "Tables, Graphics, and Embedded Content" },
  { id: "quality-assurance-at-four-levels", label: "Quality Assurance at Four Levels" },
  { id: "ai-assisted-automotive-manual-translation", label: "AI-Assisted Translation" },
  { id: "continuous-multilingual-publishing", label: "Continuous Multilingual Publishing" },
  { id: "common-failure-points", label: "Common Failure Points" },
  { id: "program-governance-and-metrics", label: "Program Governance and Metrics" },
  { id: "readiness-checklist", label: "Readiness Checklist" },
  { id: "evaluating-a-translation-partner", label: "Evaluating a Translation Partner" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
];

const keyTakeaways = [
  "Manage an automotive manual as a versioned content system rather than a static document.",
  "Translate the structured source whenever possible instead of translating a generated PDF.",
  "Coordinate authoring reuse, Translation Memory, and Terminology Management as distinct but connected layers.",
  "Track changes to conditions, references, specifications, images, and applicability—not only visible text.",
  "Validate quality at the linguistic, technical, structural, and published-output levels.",
  "Apply AI according to content risk and retain professional review for consequential information.",
];

const sourceEnvironmentRows = [
  {
    environment: "Microsoft Word",
    strengths: "Familiar authoring and review",
    considerations:
      "Style consistency, tracked changes, version comparison, and layout reconstruction.",
  },
  {
    environment: "Adobe InDesign",
    strengths: "Advanced page design",
    considerations:
      "Text expansion, linked assets, font support, and multilingual desktop publishing.",
  },
  {
    environment: "Adobe FrameMaker",
    strengths: "Long-document and structured authoring",
    considerations:
      "Conditional text, references, variables, and structured or unstructured workflows.",
  },
  {
    environment: "Custom XML",
    strengths: "Structured, system-specific content",
    considerations:
      "Schema rules, parser configuration, attributes, reintegration, and validation.",
  },
  {
    environment: "DITA in a CCMS",
    strengths: "Topic reuse, conditional publishing, and multichannel output",
    considerations:
      "Maps, keys, conrefs, conditions, metadata, and build validation.",
  },
  {
    environment: "HTML or Knowledge Base",
    strengths: "Digital delivery and frequent updates",
    considerations:
      "Markup protection, links, metadata, responsive display, and continuous localization.",
  },
  {
    environment: "Database Export",
    strengths: "High-volume structured records",
    considerations:
      "Field mapping, IDs, protected values, reintegration, and system testing.",
  },
  {
    environment: "PDF",
    strengths: "Stable review or delivery output",
    considerations:
      "Poor source for structured reuse and often requires reconstruction or manual formatting.",
  },
];

const ditaObjectRows = [
  {
    object: "Topic",
    application: "Reusable repair or maintenance procedure",
    risk: "Insufficient context when translated alone.",
  },
  {
    object: "Map",
    application: "Assembly of a model- or market-specific manual",
    risk: "Missing hierarchy or an incomplete localization package.",
  },
  {
    object: "Conref",
    application: "Shared warning, value, or instruction",
    risk: "Broken reference or outdated reusable target.",
  },
  {
    object: "Keyref",
    application: "Product, component, or link substitution",
    risk: "Incorrect resolved value in the localized build.",
  },
  {
    object: "DITAVAL Condition",
    application: "Model, market, audience, or powertrain filtering",
    risk: "Wrong content published for a vehicle variant.",
  },
  {
    object: "Attribute",
    application: "Language, direction, identifier, or processing metadata",
    risk: "Protected value translated or changed incorrectly.",
  },
  {
    object: "Metadata",
    application: "Classification, applicability, lifecycle, or search information",
    risk: "Poor retrieval, filtering, or publication behavior.",
  },
];

const reuseRows = [
  {
    layer: "Authoring Reuse",
    reuse: "Source topics and components",
    benefit: "Reduces source duplication and maintenance.",
  },
  {
    layer: "Translation Memory",
    reuse: "Approved bilingual segments",
    benefit: "Reduces repetitive translation and review.",
  },
  {
    layer: "Terminology Management",
    reuse: "Approved concepts and terms",
    benefit: "Improves technical consistency and governance.",
  },
];

const workflowStages = [
  {
    title: "Analyze the Repository and Publication Architecture",
    text: "Review the source system, file structure, maps, reusable content, conditions, references, schemas, output channels, and release process.",
  },
  {
    title: "Define the Scope and Quality Route",
    text: "Confirm languages, locales, models, markets, publication types, release dates, content risk, reviewer roles, and approval criteria.",
  },
  {
    title: "Prepare Localization Engineering Rules",
    text: "Configure parsers, filters, segmentation, attribute handling, inline tags, placeholders, packaging, and exchange formats.",
  },
  {
    title: "Detect and Classify Changes",
    text: "Identify new, modified, deleted, moved, referenced, conditional, visual, numerical, and applicability changes.",
  },
  {
    title: "Apply Translation Memory and Terminology",
    text: "Surface approved language assets while retaining contextual review for changed products, markets, specifications, and audiences.",
  },
  {
    title: "Translate With Automotive Context",
    text: "Assign linguists by documentation type, vehicle system, technical complexity, target market, audience, and risk.",
  },
  {
    title: "Perform Linguistic and Technical Review",
    text: "Check accuracy, procedural clarity, terminology, warnings, specifications, units, component references, and market suitability.",
  },
  {
    title: "Reintegrate the Localized Content",
    text: "Return translations to their DITA, XML, XLIFF, CCMS, database, or publishing structure without altering required technical components.",
  },
  {
    title: "Validate the Structure",
    text: "Run XML, schema, tag, reference, key, entity, locale, completeness, and source-language checks.",
  },
  {
    title: "Generate and Inspect Every Output",
    text: "Build PDF, HTML, portal, mobile, or application outputs and inspect the content in its delivered form.",
  },
  {
    title: "Approve, Release, and Update Language Assets",
    text: "Record approvals, release the correct locale and publication version, and return corrections to reusable language assets.",
  },
];

const variantRows = [
  {
    type: "Textual",
    example: "A procedure step is rewritten.",
    action: "Translate and review the changed segments.",
  },
  {
    type: "Numerical",
    example: "A torque or pressure value changes.",
    action: "Perform technical verification and a regression check.",
  },
  {
    type: "Conditional",
    example: "A topic now applies to an additional model.",
    action: "Validate the translation in every affected build.",
  },
  {
    type: "Referential",
    example: "A link points to a different warning or procedure.",
    action: "Confirm the target and surrounding context.",
  },
  {
    type: "Terminological",
    example: "A component is renamed.",
    action: "Update terminology and affected translations.",
  },
  {
    type: "Visual",
    example: "A diagram or callout changes.",
    action: "Translate embedded text and inspect the rendered output.",
  },
  {
    type: "Software-Related",
    example: "A control behavior or interface label changes.",
    action: "Coordinate with HMI and software localization.",
  },
  {
    type: "Regulatory",
    example: "A market-specific requirement is revised.",
    action: "Route the content to appropriate specialist review.",
  },
  {
    type: "Structural",
    example: "A topic moves or the map changes.",
    action: "Validate hierarchy, navigation, and reuse.",
  },
];

const terminologyRows = [
  { field: "Concept Definition", purpose: "Clarifies the underlying technical meaning." },
  { field: "Approved Source Term", purpose: "Establishes preferred source-language usage." },
  { field: "Approved Target Term", purpose: "Defines the accepted translation." },
  { field: "Allowed Alternative", purpose: "Identifies acceptable variants." },
  { field: "Prohibited Term", purpose: "Prevents outdated or incorrect language." },
  { field: "Vehicle System", purpose: "Associates the term with its domain." },
  { field: "Product Applicability", purpose: "Identifies relevant models or components." },
  { field: "Market and Locale", purpose: "Controls regional language use." },
  { field: "Audience", purpose: "Distinguishes owner, technician, or engineering usage." },
  { field: "Context Sentence", purpose: "Shows the term in use." },
  { field: "Image or Reference", purpose: "Helps distinguish visually similar components." },
  { field: "Approval Status", purpose: "Indicates whether the term is draft or approved." },
  { field: "Revision History", purpose: "Preserves governance and change records." },
];

const xmlIssueRows = [
  {
    issue: "Translated ID or path",
    consequence: "Broken reference or failed build",
    control: "Protected attribute rules",
  },
  {
    issue: "Missing inline element",
    consequence: "Lost meaning or formatting",
    control: "Tag-integrity validation",
  },
  {
    issue: "Incorrect condition",
    consequence: "Wrong model or market content",
    control: "Variant build testing",
  },
  {
    issue: "Unresolved conref",
    consequence: "Missing procedure or warning",
    control: "Reference validation",
  },
  {
    issue: "Modified key",
    consequence: "Incorrect resolved content",
    control: "Key-resolution checks",
  },
  {
    issue: "Invalid entity",
    consequence: "Parser or publishing failure",
    control: "XML validation",
  },
  {
    issue: "Wrong xml:lang",
    consequence: "Incorrect language processing",
    control: "Automated locale verification",
  },
  {
    issue: "Missing file",
    consequence: "Incomplete publication",
    control: "Package completeness checks",
  },
];

const riskRows = [
  {
    level: "High Assurance",
    content: "Safety warnings, recalls, emergency procedures, and critical repair instructions",
    control:
      "Specialist translation, independent review, technical approval, structural validation, and output QA.",
  },
  {
    level: "Controlled Technical",
    content: "Service bulletins, maintenance procedures, diagnostics, and installation instructions",
    control:
      "Automotive translation, professional review, technical checks, and structural QA.",
  },
  {
    level: "Standard Informational",
    content: "Lower-risk descriptive or repeated reference content",
    control:
      "Approved AI, human, or hybrid workflow with appropriate review and validation.",
  },
];

const failureRows = [
  {
    failure: "Translating a PDF instead of the structured source",
    why: "The final document is easier to access than the source repository.",
    control: "Translate DITA, XML, or native authoring files and use the PDF as a reference.",
  },
  {
    failure: "Receiving topics without maps",
    why: "Files are extracted without publication context.",
    control: "Include maps, hierarchy, reference builds, and applicability information.",
  },
  {
    failure: "Missing DITAVAL or variant rules",
    why: "Conditions are treated as publishing details.",
    control: "Include filtering definitions and validate every required variant.",
  },
  {
    failure: "Translating protected IDs or commands",
    why: "Attribute and parser rules are incomplete.",
    control: "Classify and protect nontranslatable values.",
  },
  {
    failure: "Breaking conrefs or keyrefs",
    why: "References are not validated after reintegration.",
    control: "Run reference-resolution and multilingual build checks.",
  },
  {
    failure: "Accepting every 100% match automatically",
    why: "Matching text is assumed to mean matching context.",
    control: "Review applicability, specifications, audience, and surrounding content.",
  },
  {
    failure: "Confusing market and language",
    why: "A generic language label is used without locale planning.",
    control: "Define language-country locales and market requirements.",
  },
  {
    failure: "Divergent HMI and manual terminology",
    why: "Software and documentation teams use separate termbases.",
    control: "Establish shared terminology governance.",
  },
  {
    failure: "Uncontrolled source changes",
    why: "The source continues changing during translation.",
    control: "Freeze a baseline and route deltas through change control.",
  },
  {
    failure: "Missing graphic text",
    why: "Images are excluded from word counts and file packages.",
    control: "Inventory diagrams, SVG, screenshots, and callouts.",
  },
  {
    failure: "Skipping XML validation",
    why: "Linguistic approval is treated as sufficient.",
    control: "Validate syntax, schema, references, attributes, and package integrity.",
  },
  {
    failure: "Skipping output review",
    why: "Valid files are assumed to produce a correct publication.",
    control: "Generate and inspect every required localized output.",
  },
  {
    failure: "Missing fonts",
    why: "Target scripts were not tested in the publishing environment.",
    control: "Confirm font coverage before final production.",
  },
  {
    failure: "Corrections are not reused",
    why: "Approved reviewer changes remain in email or marked PDFs.",
    control: "Return approvals to Translation Memory and terminology resources.",
  },
];

const roleRows = [
  { role: "Technical Publications", responsibility: "Source architecture, content quality, and publishing." },
  { role: "Engineering", responsibility: "Technical meaning, specifications, and product changes." },
  { role: "Service and Aftersales", responsibility: "Technician usability and operational applicability." },
  { role: "Localization Program Manager", responsibility: "Scope, schedule, language workflow, and coordination." },
  { role: "Localization Engineer", responsibility: "File preparation, filters, reintegration, and validation." },
  { role: "Automotive Linguist", responsibility: "Accurate specialized translation." },
  { role: "Language Reviewer", responsibility: "Independent linguistic review." },
  { role: "Technical Reviewer", responsibility: "Subject-matter verification." },
  { role: "In-Country Reviewer", responsibility: "Market terminology and local suitability." },
  { role: "Quality or Regulatory Stakeholder", responsibility: "Risk and compliance oversight." },
  { role: "Release Owner", responsibility: "Final publication approval." },
];

const checklistGroups = [
  {
    title: "Source and Architecture",
    items: [
      "The authoritative source repository has been identified.",
      "Complete DITA maps, bookmaps, or publication structures are available.",
      "Required topics and reusable components are included.",
      "Schemas and custom specializations are supplied.",
      "DITAVAL and conditional-processing files are included.",
      "Key definitions and referenced resources are available.",
      "External dependencies have been identified.",
      "A representative reference build is available.",
    ],
  },
  {
    title: "Vehicle and Publication Scope",
    items: [
      "Vehicle families and platforms are confirmed.",
      "Models and model years are confirmed.",
      "Powertrains and configurations are confirmed.",
      "Target markets are confirmed.",
      "Target languages and locales are confirmed.",
      "Publication types are confirmed.",
      "Required output formats are confirmed.",
      "Release dates and dependencies are documented.",
    ],
  },
  {
    title: "Language Assets",
    items: [
      "Existing Translation Memories have been collected.",
      "Approved terminology is available.",
      "Product and component names are confirmed.",
      "Style and language guidance is available.",
      "Previous approved publications are included.",
      "Reviewer feedback has been consolidated.",
      "Acronym and abbreviation rules are documented.",
    ],
  },
  {
    title: "Localization Engineering",
    items: [
      "Translatable elements and attributes have been defined.",
      "Protected content has been identified.",
      "Segmentation rules have been reviewed.",
      "Variables and placeholders have been documented.",
      "Images, SVG, and screenshots are included.",
      "Required fonts are available.",
      "Reintegration requirements are documented.",
      "Structural validation criteria are agreed.",
    ],
  },
  {
    title: "Quality and Governance",
    items: [
      "Content has been classified by risk.",
      "Automotive linguists have been assigned.",
      "Technical reviewers have been assigned.",
      "In-country reviewers have been assigned where required.",
      "Approval authority is defined.",
      "Late-change handling is documented.",
      "Published-output QA is included.",
      "Final delivery and archiving requirements are confirmed.",
    ],
  },
];

const faqItems = [
  {
    question: "What is automotive technical manual translation?",
    answer:
      "Automotive technical manual translation is the specialized translation and localization of documentation used to operate, maintain, diagnose, repair, manufacture, or support vehicles and their components. It includes owner manuals, service procedures, workshop manuals, diagnostic information, service bulletins, repair instructions, component documentation, and related digital content. A complete workflow may include technical translation, terminology, Translation Memory, XML engineering, technical review, validation, and multilingual publishing.",
  },
  {
    question: "What is DITA XML, and why is it used for automotive manuals?",
    answer:
      "DITA is an XML architecture for creating topic-based, reusable, and conditionally published content. Automotive organizations can use it to maintain shared procedures, warnings, specifications, and reference information while producing different manuals for models, markets, configurations, and channels. The localization workflow must preserve the DITA structure so translated topics can be reused and published correctly.",
  },
  {
    question: "How is translating DITA different from translating a PDF?",
    answer:
      "A PDF is a final presentation format. It does not normally expose the reusable-topic architecture, conditions, keys, metadata, or publishing relationships contained in DITA. DITA translation processes the structured source and returns localized content that can be reintegrated and published through the original system. The PDF remains valuable as a reference and final QA output.",
  },
  {
    question: "Can DITA files be translated directly?",
    answer:
      "Yes. Some translation systems process DITA files directly. Other workflows convert the translatable content into XLIFF or another bilingual exchange format and then return the translation to the DITA structure. The best method depends on the CCMS, schema, translation technology, inline markup, context requirements, and round-trip validation.",
  },
  {
    question: "What should be included in a DITA translation package?",
    answer:
      "A complete package may include maps, topic files, DITAVAL files, key definitions, schemas, specializations, referenced images, variables, terminology, Translation Memory, style guidance, a reference PDF or HTML output, model and locale information, and publishing and validation requirements.",
  },
  {
    question: "How do conrefs, keyrefs, and conditional content affect translation?",
    answer:
      "Conrefs reuse content from another source location. Keyrefs resolve content or references indirectly through defined keys. Conditional processing controls which content appears in a publication. These mechanisms improve source reuse but require careful packaging, protection, reintegration, and build validation.",
  },
  {
    question: "How can Translation Memory reduce model-year update costs?",
    answer:
      "Translation Memory identifies source content that has already been translated and approved. Unchanged content can be reused when its context remains valid, while similar content gives linguists a reviewed starting point. The savings depend on reusable volume, source stability, language pair, review requirements, and whether the previous translation remains appropriate for the new model or market.",
  },
  {
    question: "Why must previously translated content sometimes be reviewed again?",
    answer:
      "The wording may be unchanged while its associated model, specification, condition, reference, image, or software behavior has changed. A previous translation should therefore be evaluated within the new publication context, especially for safety-critical procedures, warnings, specifications, and market-dependent content.",
  },
  {
    question: "How are XML tags and nontranslatable attributes protected?",
    answer:
      "Localization engineers configure parsers, filters, tag rules, and attribute rules before translation begins. Structural elements, IDs, keys, paths, commands, codes, and other protected values can be hidden or locked while eligible text remains available to translators. Automated validation then checks whether the returned files preserve the required structure.",
  },
  {
    question: "How should text in tables, diagrams, screenshots, and SVG files be handled?",
    answer:
      "These assets should be included in the initial content inventory. Table values require numerical and layout checks. Diagram and screenshot text may require editable artwork or overlays. SVG text can often be extracted and reintegrated structurally. Every localized asset should be inspected in the final output.",
  },
  {
    question: "Can AI be used to translate automotive owner and service manuals?",
    answer:
      "Yes, when it is applied through a governed workflow appropriate to the content. Suitable repeated or lower-risk content may benefit from AI-assisted translation. Safety warnings, critical repair procedures, diagnostic instructions, recall information, and consequential specifications require stronger professional and technical review. AI output still requires terminology control, number and unit checks, structural validation, and final output QA.",
  },
  {
    question: "What quality checks are required before a translated manual is published?",
    answer:
      "A complete release should include linguistic QA, technical or subject-matter review, structural XML and reference validation, and published-output QA. The exact depth depends on content risk, audience, market, and intended use.",
  },
  {
    question: "How is automotive manual translation priced?",
    answer:
      "Pricing may reflect new and reusable word volume, language and locale, vehicle variants, XML engineering, terminology preparation, translation and review level, graphics, desktop publishing, output builds, validation, source changes, and turnaround. Native source files and clear scope information are required for a meaningful estimate.",
  },
  {
    question: "How long does automotive manual translation take?",
    answer:
      "Turnaround depends on content volume, number of languages, reusable content, source readiness, technical complexity, reviewer availability, model variants, output requirements, and release schedule. Early content analysis makes it possible to separate reusable and changed material and create a realistic multilingual production plan.",
  },
];

const relatedResources = [
  {
    title: "Automotive HMI and Infotainment Localization Guide",
    description:
      "Learn how context, character limits, scripts, interface design, voice, and in-vehicle testing affect multilingual vehicle software.",
    href: "https://www.stepes.com/resources/translation-guides/automotive-hmi-infotainment-localization-guide/",
    linkLabel: "Explore HMI Localization",
  },
  {
    title: "Localization for Automotive OTA Software Updates",
    description:
      "Plan continuous localization, change detection, version control, and multilingual validation for recurring vehicle software releases.",
    href: "https://www.stepes.com/resources/translation-guides/automotive-ota-localization-guide/",
    linkLabel: "Explore OTA Localization",
  },
  {
    title: "Automotive Terminology Management Across Models and Markets",
    description:
      "Build centralized terminology governance across platforms, suppliers, departments, regions, and customer touchpoints.",
    href: "https://www.stepes.com/resources/translation-guides/automotive-terminology-management-guide/",
    linkLabel: "Explore Terminology Management",
  },
  {
    title: "SAE J2450 for Automotive Translation Quality",
    description:
      "Understand what the metric evaluates and why automotive quality programs need content-specific review methods.",
    href: "https://www.stepes.com/resources/translation-guides/sae-j2450-automotive-translation-quality-guide/",
    linkLabel: "Explore SAE J2450 Quality",
  },
  {
    title: "ADAS, Voice, and In-Vehicle Linguistic Testing",
    description:
      "Validate driver warnings, voice commands, interface messages, and multilingual speech experiences in context.",
    href: "https://www.stepes.com/resources/translation-guides/automotive-in-vehicle-linguistic-testing-guide/",
    linkLabel: "Explore In-Vehicle Testing",
  },
];

const sourceReferences = [
  {
    title: "DITA Version 1.3",
    publisher: "OASIS Open",
    href: "https://docs.oasis-open.org/dita/dita/v1.3/dita-v1.3-part3-all-inclusive.html",
  },
  {
    title: "DITA Localization Attributes",
    publisher: "OASIS Open",
    href: "https://docs.oasis-open.org/dita/dita/v1.3/errata02/os/complete/part3-all-inclusive/archSpec/base/translation.html",
  },
  {
    title: "XLIFF Version 2.2",
    publisher: "OASIS Open",
    href: "https://docs.oasis-open.org/xliff/xliff-core/v2.2/xliff-core-v2.2-part1.html",
  },
  {
    title: "UN Regulation No. 156: Software Update and Software Update Management System",
    publisher: "United Nations Economic Commission for Europe",
    href: "https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update",
  },
  {
    title: "Automotive Translation Services",
    publisher: "Stepes",
    href: "https://www.stepes.com/automotive-translation-services/",
  },
  {
    title: "Translation Memory",
    publisher: "Stepes",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    title: "Terminology Management",
    publisher: "Stepes",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    title: "Translation Quality Assurance",
    publisher: "Stepes",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.75 9h10.5M10.5 5.25 14.25 9l-3.75 3.75" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={open ? "chevron chevron-open" : "chevron"}
    >
      <path d="m5 7.5 5 5 5-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="m4.5 10.25 3.25 3.25 7.75-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Eyebrow({ children }) {
  return <div className="eyebrow">{children}</div>;
}

function Breadcrumbs() {
  return (
    <nav className="breadcrumb-shell" aria-label="Breadcrumb">
      <ol className="breadcrumbs">
        {breadcrumbs.map((item, index) => (
          <li key={item.label} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator" aria-hidden="true">/</span>}
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

function TextLink({ href, children, external = false }) {
  return (
    <a
      className="text-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function ResponsiveTable({ columns, rows, caption }) {
  const captionId = caption
    ? `automotive-guide-table-${caption.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`
    : undefined;

  return (
    <div className="wide-module table-module">
      {caption && (
        <div className="automotive-guide-table-heading" id={captionId}>
          {caption}
        </div>
      )}
      <div className="table-desktop-wrap">
        <table className="automotive-guide-data-table" aria-labelledby={captionId}>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.key} scope="col">{column.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${rowIndex}-${row[columns[0].key]}`}>
                {columns.map((column, columnIndex) => (
                  <td key={column.key} data-emphasis={columnIndex === 0 ? "true" : undefined}>
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="table-mobile-list" role="list" aria-labelledby={captionId}>
        {rows.map((row, rowIndex) => (
          <div className="table-mobile-row" role="listitem" key={`${rowIndex}-${row[columns[0].key]}`}>
            {columns.map((column, columnIndex) => (
              <div className="table-mobile-field" key={column.key}>
                <div className="table-mobile-label">{column.label}</div>
                <div className={columnIndex === 0 ? "table-mobile-value table-mobile-value-strong" : "table-mobile-value"}>
                  {row[column.key]}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function SourceNote({ href, children }) {
  return (
    <p className="source-note">
      Source: <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </p>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-panel">
      {faqItems.map((item, index) => {
        const open = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div className="faq-item" key={item.question}>
            <button
              id={buttonId}
              className="faq-button"
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.question}</span>
              <ChevronIcon open={open} />
            </button>
            <div
              id={panelId}
              className={open ? "faq-answer faq-answer-open" : "faq-answer"}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <section className="checklist-group" aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="checklist-marker" aria-hidden="true"><CheckIcon /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

const styles = `
  :root {
    --stepes-magenta: #C11D63;
    --stepes-magenta-dark: #9F1D55;
    --stepes-deep: #111827;
    --stepes-text: #101828;
    --stepes-body: #344054;
    --stepes-muted: #667085;
    --stepes-line: #E4E7EC;
    --stepes-soft: #F8F9FB;
    --stepes-blush: #FDF2F7;
    --stepes-light-pink: #F2A7C6;
    --stepes-white: #FFFFFF;
    --shell: 1280px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .automotive-guide-page {
    min-width: 0;
    overflow-x: hidden;
    overflow-x: clip;
    background: var(--stepes-white);
    color: var(--stepes-text);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 18px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
  }

  .automotive-guide-page a { color: inherit; }
  .automotive-guide-page p { margin: 0 0 24px; color: var(--stepes-body); }
  .automotive-guide-page ul,
  .automotive-guide-page ol { margin: 0; padding: 0; }
  .automotive-guide-page h1,
  .automotive-guide-page h2,
  .automotive-guide-page h3 {
    margin: 0;
    font-weight: 600;
    color: var(--stepes-text);
    letter-spacing: -0.025em;
  }

  .page-shell {
    width: min(var(--shell), calc(100% - 112px));
    margin: 0 auto;
  }

  .breadcrumb-shell {
    width: min(var(--shell), calc(100% - 112px));
    margin: 0 auto;
    padding-top: 28px;
  }

  .breadcrumbs {
    display: flex;
    flex-wrap: wrap;
    gap: 6px 10px;
    list-style: none;
    font-size: 14px;
    line-height: 1.5;
    color: var(--stepes-muted);
  }

  .breadcrumb-item { display: inline-flex; align-items: baseline; gap: 10px; min-width: 0; }
  .breadcrumbs a { text-decoration: none; color: var(--stepes-muted); }
  .breadcrumbs a:hover { color: var(--stepes-magenta); }
  .breadcrumbs a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 3px; border-radius: 3px; }
  .breadcrumb-separator { color: #98A2B3; }
  .breadcrumb-current { color: #475467; font-weight: 500; overflow-wrap: anywhere; }

  .eyebrow {
    color: var(--stepes-magenta);
    font-size: 11px;
    line-height: 1.35;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  .guide-hero {
    padding: 54px 0 92px;
    background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 76%, #FBFCFD 100%);
  }

  .hero-grid { display: block; }

  .hero-copy { max-width: 940px; }
  .hero-copy h1 {
    font-size: 48px;
    line-height: 1.08;
    max-width: 940px;
    margin-bottom: 28px;
    overflow-wrap: break-word;
  }
  .hero-deck {
    max-width: 860px;
    font-size: 20px;
    line-height: 1.62;
    color: #475467;
    margin-bottom: 32px !important;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 30px;
  }

  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 48px;
    padding: 12px 22px;
    border-radius: 999px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    text-decoration: none;
    transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
  }
  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible {
    background: var(--stepes-magenta);
    color: #FFFFFF;
  }
  .button-primary svg,
  .button-primary span { color: #FFFFFF; }
  .button-primary:hover { background: var(--stepes-magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193, 29, 99, 0.18); }
  .button-secondary {
    color: #1D2939;
    background: #FFFFFF;
    border: 1px solid #D0D5DD;
  }
  .button-secondary:hover { border-color: #98A2B3; transform: translateY(-1px); }
  .button:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.22); outline-offset: 3px; }

  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px 20px;
    color: var(--stepes-muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .hero-meta span { position: relative; }
  .hero-meta span:not(:last-child)::after {
    content: "";
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #98A2B3;
    position: absolute;
    right: -12px;
    top: 9px;
  }

  .summary-section {
    padding: 80px 0;
    background: var(--stepes-blush);
    border-top: 1px solid #F6D9E6;
    border-bottom: 1px solid #F6D9E6;
  }
  .summary-grid {
    display: grid;
    grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
    gap: 72px;
    align-items: start;
  }
  .summary-grid h2 { font-size: 36px; line-height: 1.18; max-width: 470px; }
  .takeaway-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 36px;
    list-style: none;
  }
  .takeaway-list li {
    display: grid;
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 14px;
    padding: 18px 0;
    border-top: 1px solid rgba(193, 29, 99, 0.18);
    font-size: 16px;
    line-height: 1.58;
    color: #344054;
  }
  .takeaway-list li:nth-child(-n+2) { border-top: 0; padding-top: 0; }
  .takeaway-list svg { color: var(--stepes-magenta); margin-top: 2px; }

  .article-region { padding: 96px 0 0; }
  .article-grid {
    display: grid;
    grid-template-columns: 260px minmax(0, 760px);
    gap: 64px;
    justify-content: center;
    align-items: start;
  }
  .toc-rail {
    position: sticky;
    top: 108px;
    max-height: calc(100vh - 132px);
    overflow: auto;
    padding-right: 14px;
    scrollbar-width: thin;
  }
  .toc-title {
    color: var(--stepes-text);
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
  }
  .toc-list { list-style: none; border-left: 1px solid #D0D5DD; }
  .toc-list li { margin: 0; }
  .toc-list a {
    display: block;
    padding: 7px 0 7px 16px;
    color: #667085;
    text-decoration: none;
    font-size: 15px;
    line-height: 1.42;
    border-left: 2px solid transparent;
    margin-left: -1px;
  }
  .toc-list a:hover,
  .toc-list a:focus-visible {
    color: var(--stepes-magenta);
    border-left-color: var(--stepes-magenta);
  }
  .toc-list a:focus-visible { outline: none; background: var(--stepes-blush); }
  .mobile-toc { display: none; }

  .article-content { min-width: 0; }
  .article-content h2,
  .article-content h3,
  .text-link,
  .source-title,
  .related-item h3 { overflow-wrap: break-word; }
  .article-content p a,
  .article-content li a {
    color: var(--stepes-magenta);
    font-weight: 600;
    text-decoration: none;
  }
  .article-content p a:hover,
  .article-content li a:hover { text-decoration: underline; }
  .article-content p a:focus-visible,
  .article-content li a:focus-visible {
    outline: 2px solid var(--stepes-magenta);
    outline-offset: 3px;
    border-radius: 3px;
  }
  .chapter {
    scroll-margin-top: 112px;
    padding: 0 0 88px;
  }
  .chapter + .chapter { padding-top: 8px; }
  .chapter h2 {
    font-size: 36px;
    line-height: 1.18;
    margin-bottom: 24px;
  }
  .chapter h3 {
    font-size: 24px;
    line-height: 1.32;
    margin: 38px 0 14px;
  }
  .chapter-intro {
    font-size: 20px;
    line-height: 1.62;
    color: #475467 !important;
    margin-bottom: 30px !important;
  }
  .chapter ul:not(.plain-grid):not(.metric-list) {
    padding-left: 24px;
    margin: 0 0 28px;
    color: var(--stepes-body);
  }
  .chapter li { margin-bottom: 10px; }
  .chapter strong { color: #1D2939; font-weight: 600; }

  .anchor-link { scroll-margin-top: 112px; }
  .wide-module {
    width: min(940px, calc(100vw - 112px - 324px));
    max-width: 940px;
    margin: 34px 0 36px;
  }

  .callout {
    margin: 34px 0 34px;
    padding: 28px 30px;
    background: var(--stepes-blush);
    border-radius: 22px;
    border-left: 3px solid var(--stepes-magenta);
  }
  .callout-label {
    color: var(--stepes-magenta);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .callout p { margin: 0; font-size: 18px; line-height: 1.58; color: #344054; }

  .editorial-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 42px;
    margin: 32px 0 36px;
  }
  .editorial-item {
    padding: 26px 0;
    border-top: 1px solid var(--stepes-line);
  }
  .editorial-item:nth-child(-n+2) { border-top: 0; padding-top: 0; }
  .editorial-item h3 { margin: 0 0 10px; font-size: 22px; }
  .editorial-item p { margin: 0; font-size: 16px; }
  .editorial-item ul { margin-top: 12px !important; margin-bottom: 0 !important; font-size: 16px; }

  .three-layer-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--stepes-line);
    border-bottom: 1px solid var(--stepes-line);
    margin: 32px 0 36px;
  }
  .layer-item { padding: 28px 24px; border-left: 1px solid var(--stepes-line); }
  .layer-item:first-child { border-left: 0; padding-left: 0; }
  .layer-item:last-child { padding-right: 0; }
  .layer-item h3 { margin: 0 0 10px; font-size: 21px; }
  .layer-item p { margin: 0; font-size: 16px; }

  .ordered-prep {
    list-style: none;
    margin: 32px 0 36px;
    border-top: 1px solid var(--stepes-line);
  }
  .ordered-prep li {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 18px;
    padding: 26px 0;
    border-bottom: 1px solid var(--stepes-line);
    margin: 0;
  }
  .ordered-number {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: var(--stepes-blush);
    color: var(--stepes-magenta);
    display: grid;
    place-items: center;
    font-size: 15px;
    font-weight: 600;
  }
  .ordered-prep h3 { margin: 2px 0 8px; font-size: 22px; }
  .ordered-prep p { margin: 0; font-size: 16px; }

  .workflow-section {
    scroll-margin-top: 112px;
    width: min(940px, calc(100vw - 112px - 324px));
    max-width: 940px;
    margin: 8px 0 96px;
    padding: 54px;
    border-radius: 30px;
    background: #111827;
    color: #FFFFFF;
    overflow: hidden;
    position: relative;
  }
  .workflow-section::after {
    content: "";
    position: absolute;
    width: 260px;
    height: 260px;
    border-radius: 50%;
    right: -140px;
    top: -110px;
    background: rgba(193, 29, 99, 0.18);
  }
  .workflow-section h2 { color: #FFFFFF; font-size: 36px; line-height: 1.18; margin-bottom: 20px; max-width: 720px; }
  .workflow-section > p { color: #D0D5DD; max-width: 720px; margin-bottom: 34px; }
  .workflow-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 34px;
    position: relative;
    z-index: 1;
  }
  .workflow-stage {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }
  .workflow-stage:nth-child(-n+2) { border-top: 0; padding-top: 0; }
  .workflow-index {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 1px solid rgba(242, 167, 198, 0.45);
    color: var(--stepes-light-pink);
    display: grid;
    place-items: center;
    font-size: 14px;
    font-weight: 600;
  }
  .workflow-stage h3 { color: #FFFFFF; font-size: 19px; line-height: 1.38; margin: 2px 0 7px; letter-spacing: -0.01em; }
  .workflow-stage p { color: #D0D5DD; font-size: 16px; line-height: 1.58; margin: 0; }
  .workflow-summary {
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
    color: #FFFFFF;
    font-size: 16px;
    line-height: 1.55;
    position: relative;
    z-index: 1;
  }

  .automotive-guide-page .table-module {
    border-top: 1px solid var(--stepes-line);
    min-width: 0;
  }
  .automotive-guide-page .automotive-guide-table-heading {
    display: block;
    position: static;
    float: none;
    clear: both;
    width: 100%;
    max-width: none;
    min-width: 0;
    columns: auto;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;
    text-wrap: pretty;
    color: #475467;
    font-size: 16px;
    line-height: 1.55;
    font-weight: 500;
    letter-spacing: 0;
    margin: 18px 0 20px;
    padding: 0;
  }
  .automotive-guide-page .table-desktop-wrap {
    width: 100%;
    min-width: 0;
    overflow-x: auto;
  }
  .automotive-guide-page .automotive-guide-data-table {
    width: 100%;
    min-width: 660px;
    border-collapse: collapse;
    table-layout: fixed;
    writing-mode: horizontal-tb;
  }
  .automotive-guide-page .automotive-guide-data-table th,
  .automotive-guide-page .automotive-guide-data-table td {
    position: static;
    float: none;
    width: auto;
    max-width: none;
    writing-mode: horizontal-tb;
    text-orientation: mixed;
    white-space: normal;
    word-break: normal;
    overflow-wrap: break-word;
    padding: 18px;
    text-align: left;
    vertical-align: top;
    border-bottom: 1px solid var(--stepes-line);
  }
  .automotive-guide-page .automotive-guide-data-table th {
    background: #F8F9FB;
    color: #1D2939;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 600;
  }
  .automotive-guide-page .automotive-guide-data-table td {
    color: #475467;
    font-size: 16px;
    line-height: 1.55;
  }
  .automotive-guide-page .automotive-guide-data-table td[data-emphasis="true"] {
    color: #1D2939;
    font-weight: 600;
  }
  .automotive-guide-page .table-mobile-list { display: none; }

  .comparison-panel {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 44px;
    margin: 34px 0 36px;
  }
  .comparison-column { border-top: 2px solid var(--stepes-line); padding-top: 22px; }
  .comparison-column.accent { border-top-color: var(--stepes-magenta); }
  .comparison-column h3 { margin: 0 0 14px; font-size: 22px; }
  .comparison-column ul { font-size: 16px; }

  .source-note {
    margin-top: -8px !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    color: var(--stepes-muted) !important;
  }
  .source-note a { color: var(--stepes-magenta); text-decoration: none; }
  .source-note a:hover { text-decoration: underline; }

  .quality-framework {
    width: min(940px, calc(100vw - 112px - 324px));
    max-width: 940px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0;
    margin: 34px 0 40px;
    border-top: 1px solid var(--stepes-line);
    border-bottom: 1px solid var(--stepes-line);
  }
  .quality-level { padding: 28px 22px; border-left: 1px solid var(--stepes-line); }
  .quality-level:first-child { border-left: 0; padding-left: 0; }
  .quality-level:last-child { padding-right: 0; }
  .quality-level-number { color: var(--stepes-magenta); font-size: 14px; font-weight: 600; margin-bottom: 10px; }
  .quality-level h3 { margin: 0 0 10px; font-size: 20px; }
  .quality-level p { margin: 0; font-size: 16px; }

  .ai-grid,
  .governance-grid,
  .partner-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 48px;
    margin: 34px 0 36px;
  }
  .ai-grid h3,
  .governance-grid h3,
  .partner-grid h3 { margin: 0 0 16px; font-size: 22px; }
  .ai-grid ul,
  .governance-grid ul,
  .partner-grid ul { font-size: 16px; }

  .channel-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 24px 0 34px;
  }
  .channel-strip span {
    padding: 8px 13px;
    border-radius: 999px;
    border: 1px solid #D0D5DD;
    color: #475467;
    font-size: 15px;
    line-height: 1.3;
  }

  .metric-list {
    columns: 2;
    column-gap: 42px;
    list-style: none;
    margin: 24px 0 36px;
  }
  .metric-list li {
    break-inside: avoid;
    padding: 12px 0 12px 20px;
    border-bottom: 1px solid var(--stepes-line);
    position: relative;
    font-size: 16px;
    color: #475467;
  }
  .metric-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 22px;
    width: 7px;
    height: 2px;
    background: var(--stepes-magenta);
  }

  .checklist-section {
    scroll-margin-top: 112px;
    width: min(940px, calc(100vw - 112px - 324px));
    max-width: 940px;
    margin: 8px 0 96px;
    padding: 50px;
    border-radius: 28px;
    background: #F8F9FB;
    border: 1px solid #EAECF0;
  }
  .checklist-section h2 { font-size: 36px; line-height: 1.18; margin-bottom: 20px; }
  .checklist-section > p { max-width: 720px; }
  .checklist-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 38px 46px;
    margin-top: 34px;
  }
  .checklist-group { padding-top: 22px; border-top: 1px solid #D0D5DD; }
  .checklist-group h3 { margin: 0 0 16px; font-size: 21px; }
  .checklist-group ul { list-style: none; }
  .checklist-group li {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 11px;
    margin-bottom: 12px;
    color: #475467;
    font-size: 16px;
    line-height: 1.52;
  }
  .checklist-marker { color: var(--stepes-magenta); margin-top: 1px; }
  .checklist-principle {
    margin: 34px 0 0 !important;
    padding-top: 24px;
    border-top: 1px solid #D0D5DD;
    font-size: 18px;
    color: #344054 !important;
  }

  .stepes-section {
    width: min(940px, calc(100vw - 112px - 324px));
    max-width: 940px;
    margin: 8px 0 96px;
    padding: 50px;
    border-radius: 28px;
    background: linear-gradient(135deg, #FFFFFF 0%, #FDF2F7 100%);
    border: 1px solid #F4CFE0;
  }
  .stepes-section h2 { font-size: 36px; line-height: 1.18; max-width: 720px; margin-bottom: 20px; }
  .stepes-capabilities {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 40px;
    margin-top: 28px;
  }
  .stepes-capability { padding: 24px 0; border-top: 1px solid rgba(193, 29, 99, 0.18); }
  .stepes-capability:nth-child(-n+2) { border-top: 0; padding-top: 0; }
  .stepes-capability h3 { margin: 0 0 8px; font-size: 21px; }
  .stepes-capability p { margin: 0; font-size: 16px; }

  .text-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--stepes-magenta) !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }
  .text-link svg { transition: transform 160ms ease; }
  .text-link:hover svg { transform: translateX(3px); }
  .text-link:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 4px; border-radius: 3px; }

  .faq-panel {
    border-top: 1px solid var(--stepes-line);
    margin-top: 32px;
  }
  .faq-item { border-bottom: 1px solid var(--stepes-line); }
  .faq-button {
    width: 100%;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 24px;
    gap: 20px;
    align-items: center;
    text-align: left;
    padding: 22px 0;
    border: 0;
    background: transparent;
    color: #1D2939;
    font: inherit;
    font-size: 18px;
    line-height: 1.45;
    font-weight: 600;
    cursor: pointer;
  }
  .faq-button:hover { color: var(--stepes-magenta); }
  .faq-button:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 5px; border-radius: 4px; }
  .chevron { transition: transform 180ms ease; }
  .chevron-open { transform: rotate(180deg); }
  .faq-answer { padding: 0 42px 22px 0; }
  .faq-answer p { font-size: 16px; line-height: 1.66; margin: 0; max-width: 760px; }

  .sources-section { padding-bottom: 80px; }
  .source-list { list-style: none; border-top: 1px solid var(--stepes-line); margin-top: 30px; }
  .source-list li {
    display: block;
    padding: 18px 0;
    border-bottom: 1px solid var(--stepes-line);
  }
  .source-title { font-size: 16px; font-weight: 600; color: #1D2939; }
  .source-title a { font-size: 16px; }
  .source-publisher { font-size: 14px; color: var(--stepes-muted); margin-top: 2px; }
  .source-list a { color: var(--stepes-magenta); text-decoration: none; font-size: 15px; font-weight: 600; }
  .source-list a:hover { text-decoration: underline; }

  .related-section {
    padding: 88px 0 84px;
    background: #F8F9FB;
    border-top: 1px solid #EAECF0;
  }
  .related-header { max-width: 760px; margin-bottom: 38px; }
  .related-header h2 { font-size: 36px; line-height: 1.18; margin-bottom: 14px; }
  .related-header p { margin: 0; }
  .related-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 32px;
  }
  .related-item {
    padding: 26px 0;
    border-top: 1px solid #D0D5DD;
  }
  .related-item h3 { font-size: 21px; line-height: 1.35; margin-bottom: 10px; }
  .related-item h3 a { color: var(--stepes-text); text-decoration: none; }
  .related-item h3 a:hover { color: var(--stepes-magenta); }
  .related-item h3 a:focus-visible { outline: 2px solid var(--stepes-magenta); outline-offset: 4px; border-radius: 3px; }
  .related-item p { font-size: 16px; line-height: 1.58; margin-bottom: 14px; }

  .final-cta { padding: 96px 0; background: #FFFFFF; }
  .cta-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 56px;
    align-items: center;
    padding: 54px 58px;
    border-radius: 30px;
    background: var(--stepes-blush);
    border: 1px solid #F4CFE0;
  }
  .cta-panel h2 { font-size: 36px; line-height: 1.18; margin-bottom: 16px; max-width: 760px; }
  .cta-panel p { margin: 0; max-width: 780px; font-size: 18px; }
  .cta-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; gap: 12px; min-width: 260px; }

  @media (max-width: 1120px) {
    .page-shell,
    .breadcrumb-shell { width: calc(100% - 80px); }
    .article-grid { grid-template-columns: 230px minmax(0, 700px); gap: 44px; }
    .wide-module,
    .workflow-section,
    .quality-framework,
    .checklist-section,
    .stepes-section {
      width: min(860px, calc(100vw - 80px - 274px));
    }
  }

  @media (max-width: 900px) {
    .page-shell,
    .breadcrumb-shell { width: calc(100% - 48px); }
    .breadcrumb-shell { padding-top: 22px; }
    .guide-hero { padding: 42px 0 72px; }
    .summary-grid { grid-template-columns: 1fr; gap: 34px; }
    .takeaway-list { grid-template-columns: 1fr; }
    .takeaway-list li:nth-child(2) { border-top: 1px solid rgba(193, 29, 99, 0.18); padding-top: 18px; }
    .article-region { padding-top: 72px; }
    .article-grid { display: block; }
    .toc-rail { display: none; }
    .mobile-toc { display: block; margin-bottom: 58px; }
    .mobile-toc details { border: 1px solid #D0D5DD; border-radius: 18px; background: #FFFFFF; }
    .mobile-toc summary {
      min-height: 54px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding: 14px 18px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 600;
      color: #1D2939;
      list-style: none;
    }
    .mobile-toc summary::-webkit-details-marker { display: none; }
    .mobile-toc details[open] summary .chevron { transform: rotate(180deg); }
    .mobile-toc ol { list-style: none; padding: 4px 18px 16px; border-top: 1px solid #EAECF0; }
    .mobile-toc li { margin: 0; }
    .mobile-toc a { display: block; padding: 11px 0; color: #475467; font-size: 16px; line-height: 1.45; text-decoration: none; }
    .mobile-toc a:hover { color: var(--stepes-magenta); }
    .wide-module,
    .workflow-section,
    .quality-framework,
    .checklist-section,
    .stepes-section { width: 100%; max-width: 100%; }
    .automotive-guide-page .table-desktop-wrap { display: none; }
    .automotive-guide-page .table-mobile-list { display: block; }
    .automotive-guide-page .table-mobile-row {
      padding: 24px 0;
      border-bottom: 1px solid var(--stepes-line);
    }
    .automotive-guide-page .table-mobile-field { margin-bottom: 14px; }
    .automotive-guide-page .table-mobile-field:last-child { margin-bottom: 0; }
    .automotive-guide-page .table-mobile-label {
      color: #667085;
      font-size: 14px;
      line-height: 1.4;
      margin-bottom: 4px;
    }
    .automotive-guide-page .table-mobile-value {
      color: #475467;
      font-size: 16px;
      line-height: 1.55;
      writing-mode: horizontal-tb;
      white-space: normal;
      word-break: normal;
      overflow-wrap: break-word;
    }
    .automotive-guide-page .table-mobile-value-strong {
      color: #1D2939;
      font-weight: 600;
    }
    .workflow-list { grid-template-columns: 1fr; }
    .workflow-stage:nth-child(2) { border-top: 1px solid rgba(255, 255, 255, 0.14); padding-top: 24px; }
    .quality-framework { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .quality-level:nth-child(3) { border-left: 0; border-top: 1px solid var(--stepes-line); padding-left: 0; }
    .quality-level:nth-child(4) { border-top: 1px solid var(--stepes-line); }
    .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .cta-panel { grid-template-columns: 1fr; gap: 30px; }
    .cta-actions { justify-content: flex-start; }
  }

  @media (max-width: 768px) {
    .automotive-guide-page { font-size: 17px; }
    .page-shell,
    .breadcrumb-shell { width: calc(100% - 48px); }
    .hero-copy h1 { font-size: 42px; }
    .hero-deck { font-size: 18px; }
    .summary-section,
    .related-section { padding: 72px 0; }
    .summary-grid h2,
    .chapter h2,
    .workflow-section h2,
    .checklist-section h2,
    .stepes-section h2,
    .related-header h2,
    .cta-panel h2 { font-size: 32px; }
    .chapter h3 { font-size: 22px; }
    .editorial-grid,
    .comparison-panel,
    .ai-grid,
    .governance-grid,
    .partner-grid,
    .checklist-grid,
    .stepes-capabilities { grid-template-columns: 1fr; gap: 0; }
    .editorial-item:nth-child(2),
    .stepes-capability:nth-child(2) { border-top: 1px solid var(--stepes-line); padding-top: 26px; }
    .three-layer-grid { grid-template-columns: 1fr; }
    .layer-item { border-left: 0; border-top: 1px solid var(--stepes-line); padding: 24px 0; }
    .layer-item:first-child { border-top: 0; }
    .workflow-section,
    .checklist-section,
    .stepes-section { padding: 40px 32px; }
    .quality-framework { grid-template-columns: 1fr; }
    .quality-level,
    .quality-level:first-child,
    .quality-level:nth-child(3) { border-left: 0; border-top: 1px solid var(--stepes-line); padding: 24px 0; }
    .quality-level:first-child { border-top: 0; }
    .metric-list { columns: 1; }
    .related-grid { grid-template-columns: 1fr; }
    .cta-panel { padding: 42px 34px; }
  }

  @media (max-width: 560px) {
    .page-shell,
    .breadcrumb-shell { width: calc(100% - 40px); }
    .breadcrumb-shell { padding-top: 18px; }
    .breadcrumbs { font-size: 14px; gap: 4px 8px; }
    .breadcrumb-item { gap: 8px; }
    .guide-hero { padding: 34px 0 64px; }
    .hero-copy h1 { font-size: 38px; line-height: 1.08; margin-bottom: 22px; }
    .hero-deck { font-size: 17px; line-height: 1.62; }
    .hero-actions { display: grid; grid-template-columns: 1fr; }
    .button { width: 100%; min-height: 50px; }
    .hero-meta { display: grid; gap: 4px; }
    .hero-meta span::after { display: none !important; }
    .summary-section { padding: 64px 0; }
    .summary-grid h2,
    .chapter h2,
    .workflow-section h2,
    .checklist-section h2,
    .stepes-section h2,
    .related-header h2,
    .cta-panel h2 { font-size: 30px; }
    .chapter-intro { font-size: 18px; }
    .automotive-guide-page .automotive-guide-table-heading {
      margin: 16px 0 18px;
      font-size: 16px;
      line-height: 1.5;
    }
    .article-region { padding-top: 64px; }
    .mobile-toc { margin-bottom: 52px; }
    .chapter { padding-bottom: 72px; }
    .chapter h3 { font-size: 20px; margin-top: 32px; }
    .callout { padding: 24px 22px; }
    .ordered-prep li { grid-template-columns: 40px minmax(0, 1fr); gap: 14px; }
    .workflow-section,
    .checklist-section,
    .stepes-section { margin-bottom: 72px; padding: 34px 22px; border-radius: 24px; }
    .workflow-stage { grid-template-columns: 38px minmax(0, 1fr); gap: 14px; }
    .workflow-index { width: 36px; height: 36px; }
    .faq-button { font-size: 17px; padding: 20px 0; }
    .faq-answer { padding-right: 0; }
    .source-list li { grid-template-columns: 1fr; gap: 8px; }
    .related-section { padding: 64px 0; }
    .final-cta { padding: 72px 0; }
    .cta-panel { padding: 34px 24px; border-radius: 24px; }
    .cta-actions { display: grid; width: 100%; min-width: 0; }
  }

  @media (max-width: 360px) {
    .page-shell,
    .breadcrumb-shell { width: calc(100% - 32px); }
    .breadcrumbs { font-size: 13px; }
    .guide-hero { padding: 30px 0 58px; }
    .hero-copy h1 { font-size: 34px; line-height: 1.1; }
    .hero-actions { gap: 10px; }
    .button { padding: 12px 18px; }
    .mobile-toc summary { padding: 13px 15px; }
    .mobile-toc ol { padding-left: 15px; padding-right: 15px; }
    .workflow-section,
    .checklist-section,
    .stepes-section { padding-left: 18px; padding-right: 18px; }
    .cta-panel { padding: 30px 20px; }
  }
`;

export default function AutomotiveTechnicalManualTranslationGuide() {
  return (
    <main className="automotive-guide-page">
      <style>{styles}</style>

      <Breadcrumbs />

      <section className="guide-hero" aria-labelledby="page-title">
        <div className="page-shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>Automotive Localization Guide</Eyebrow>
            <h1 id="page-title">Automotive Technical Manual Translation: DITA and XML Workflows</h1>
            <p className="hero-deck">
              Learn how to translate owner, service, repair, and diagnostic documentation using structured content, translation reuse, model-year change management, automotive terminology, XML validation, and multilingual publishing.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={sectionUrl("why-automotive-manuals-are-complex")}>
                <span>Explore the Guide</span>
                <ArrowIcon />
              </a>
              <a className="button button-secondary" href={sectionUrl("readiness-checklist")}>
                <span>Jump to the Checklist</span>
                <ArrowIcon />
              </a>
            </div>
            <div className="hero-meta" aria-label="Guide information">
              <span>Workflow and Technology Guide</span>
              <span>30-minute read</span>
              <span>Last reviewed August 2026</span>
              <span>Reviewed by the Stepes Automotive Localization Team</span>
            </div>
          </div>

        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="page-shell summary-grid">
          <div>
            <Eyebrow>Key Takeaways</Eyebrow>
            <h2 id="key-takeaways-title">What a Scalable Automotive Documentation Program Requires</h2>
          </div>
          <ul className="takeaway-list">
            {keyTakeaways.map((item) => (
              <li key={item}>
                <CheckIcon />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="article-region">
        <div className="page-shell article-grid">
          <aside className="toc-rail">
            <nav aria-label="In this guide">
              <div className="toc-title">In This Guide</div>
              <ol className="toc-list">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a href={sectionUrl(item.id)}>{item.label}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="article-content">
            <div className="mobile-toc">
              <details>
                <summary>
                  <span>In This Guide</span>
                  <ChevronIcon />
                </summary>
                <ol>
                  {tocItems.map((item) => (
                    <li key={item.id}>
                      <a href={sectionUrl(item.id)}>{item.label}</a>
                    </li>
                  ))}
                </ol>
              </details>
            </div>

            <section className="chapter" id="why-automotive-manuals-are-complex">
              <h2>Why Automotive Technical Manual Translation Is Uniquely Complex</h2>
              <p className="chapter-intro">
                Automotive documentation must remain accurate while the product, software, market requirements, and service environment continue to change.
              </p>
              <p>
                An owner manual may need to cover multiple trim levels and powertrains. A workshop procedure may apply only to vehicles with a particular component revision. A technical service bulletin may update an earlier instruction without replacing the entire manual. A diagnostic topic may reference an interface message that must match the wording displayed in the vehicle or service application.
              </p>
              <p>
                These dependencies make automotive manual translation different from translating an independent business document. The visible wording may be reused, modified for a specific market, filtered by vehicle configuration, or updated when software changes vehicle behavior.
              </p>

              <h3>One Content Base, Many Variables</h3>
              <ul>
                <li>Vehicle family and platform</li>
                <li>Model and model year</li>
                <li>Internal-combustion, hybrid, plug-in hybrid, or battery-electric powertrain</li>
                <li>Trim level and optional equipment</li>
                <li>Hardware or supplier configuration</li>
                <li>Software and calibration version</li>
                <li>Country and regulatory market</li>
                <li>Language and locale</li>
                <li>Publication type and intended audience</li>
              </ul>

              <h3>Safety and Operational Consequences</h3>
              <p>
                Automotive manuals contain instructions that influence vehicle operation, maintenance, repair, diagnostics, emergency response, and component replacement. A mistranslated warning, incorrect torque value, reversed instruction, or ambiguous procedural step can have consequences beyond reader inconvenience.
              </p>
              <p>
                The translation process should therefore account for the purpose and risk of each content stream. Owner-facing descriptive content, routine maintenance instructions, diagnostic procedures, recall communications, and emergency information may require different review and approval paths.
              </p>

              <div className="callout">
                <div className="callout-label">Operating Principle</div>
                <p><strong>An automotive manual should be managed as a versioned content system, not as a static file sent for translation at the end of production.</strong></p>
              </div>

              <p>
                This principle applies whether the organization uses DITA, another XML architecture, Adobe FrameMaker, Microsoft Word, a dealer-service database, or a hybrid publishing environment. The broader Stepes <a href="https://www.stepes.com/automotive-translation-services/">Automotive Translation Services</a> framework similarly treats technical documentation, software, regulatory content, dealer information, and customer communications as connected content streams with different risk, format, and review requirements.
              </p>
            </section>

            <section className="chapter" id="automotive-documentation-ecosystem">
              <h2>The Automotive Documentation Ecosystem</h2>
              <p className="chapter-intro">
                Automotive localization programs frequently include more than one type of manual. Understanding the full ecosystem helps teams identify shared terminology, reusable content, dependencies, and appropriate quality controls.
              </p>

              <div className="editorial-grid">
                <div className="editorial-item">
                  <h3>Vehicle-Owner Documentation</h3>
                  <p>Content that helps drivers understand, operate, maintain, and respond to issues with the vehicle.</p>
                  <ul>
                    <li>Owner and operator manuals</li>
                    <li>Quick-reference and getting-started guides</li>
                    <li>Safety, warning, maintenance, and warranty information</li>
                    <li>Charging, roadside, and emergency-response content</li>
                    <li>Digital owner-help materials</li>
                  </ul>
                </div>
                <div className="editorial-item">
                  <h3>Service and Aftersales Documentation</h3>
                  <p>Technical content for dealer technicians, repair facilities, fleet operators, and aftersales teams.</p>
                  <ul>
                    <li>Workshop and service manuals</li>
                    <li>Repair, replacement, and diagnostic procedures</li>
                    <li>Troubleshooting, wiring, and system information</li>
                    <li>Technical service bulletins and recall instructions</li>
                    <li>Dealer knowledge bases</li>
                  </ul>
                </div>
                <div className="editorial-item">
                  <h3>Component and Supplier Documentation</h3>
                  <p>OEM-facing and service content created by Tier 1 and Tier 2 suppliers.</p>
                  <ul>
                    <li>Installation and calibration procedures</li>
                    <li>Supplier service manuals</li>
                    <li>Parts and fitment data</li>
                    <li>Engineering change information</li>
                    <li>Manufacturing and quality documentation</li>
                  </ul>
                </div>
                <div className="editorial-item">
                  <h3>Digital and Connected Documentation</h3>
                  <p>Content that evolves with software-defined vehicle functionality and digital product releases.</p>
                  <ul>
                    <li>Online help and diagnostic application content</li>
                    <li>Software release notes and OTA instructions</li>
                    <li>Embedded assistance and mobile support</li>
                    <li>Charging-platform documentation</li>
                    <li>Customer-support knowledge bases</li>
                  </ul>
                </div>
              </div>

              <p>
                These materials can share terminology and source components while requiring different technical depth, reading levels, regulatory control, and review. A scalable program identifies those differences early rather than applying one workflow to every content type.
              </p>
            </section>

            <section className="chapter" id="structured-content-and-dita">
              <Eyebrow>Structured Authoring</Eyebrow>
              <h2>Structured Content, DITA, and XML</h2>
              <p className="chapter-intro">
                Not every automotive organization uses DITA. A successful localization strategy must work with the actual source environment rather than force every program into the same technical model.
              </p>

              <ResponsiveTable
                caption="Common automotive source environments and their localization implications"
                columns={[
                  { key: "environment", label: "Source Environment" },
                  { key: "strengths", label: "Typical Strengths" },
                  { key: "considerations", label: "Localization Considerations" },
                ]}
                rows={sourceEnvironmentRows}
              />

              <h3>Translate the Source, Not Only the Output</h3>
              <p>
                A PDF may be useful as a reference build, but it is usually a poor primary localization source when the original content is maintained in DITA, XML, FrameMaker, or a content component management system.
              </p>
              <ul>
                <li>It separates the translation from the source of truth.</li>
                <li>It eliminates topic-level reuse.</li>
                <li>It hides conditional content and metadata.</li>
                <li>It makes change detection harder.</li>
                <li>It introduces manual formatting work.</li>
                <li>It breaks the connection to automated publishing.</li>
                <li>It complicates future model-year updates.</li>
              </ul>
              <p>
                The preferred approach is to translate the native structured content and use the generated PDF or HTML output for context and final quality review. Organizations managing both structured and conventional files can also review Stepes’ <a href="https://www.stepes.com/technical-manual-translation/">Technical Manual Translation Services</a> and <a href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</a>.
              </p>

              <h3>What DITA Means for Automotive Documentation</h3>
              <p>
                Darwin Information Typing Architecture, or DITA, is an XML architecture for creating, organizing, reusing, and publishing topic-based content. It is particularly useful for documentation that must support multiple products, audiences, configurations, and output formats.
              </p>
              <p>
                DITA 1.3 remains the approved OASIS Standard. Organizations considering a future migration should verify the current status of DITA 2.0 and the readiness of their authoring, CCMS, localization, and publishing tools before treating it as a finalized replacement.
              </p>

              <h3>Topics</h3>
              <p>DITA divides information into reusable topics instead of treating an entire manual as one monolithic file.</p>
              <ul>
                <li><strong>Concept:</strong> How regenerative braking works</li>
                <li><strong>Task:</strong> Replace the cabin air filter</li>
                <li><strong>Reference:</strong> Recommended tire-pressure values</li>
                <li><strong>Troubleshooting:</strong> The vehicle does not recognize the charging connector</li>
              </ul>

              <h3>Maps, Reuse, Keys, and Conditions</h3>
              <p>
                Maps assemble topics into a publication. Conrefs and conkeyrefs reuse shared warnings, values, instructions, or other components. Keys resolve product names, component references, links, and content according to context. Conditional processing filters content by model, market, powertrain, trim, audience, or publication channel.
              </p>
              <p>
                These mechanisms create significant efficiency, but they also create quality risks if the translation package is incomplete or if references, key values, and conditions are altered during localization.
              </p>

              <h3>Localization Attributes</h3>
              <p>
                DITA includes localization-related attributes such as <strong>xml:lang</strong> for language identification, <strong>dir</strong> for text direction, and <strong>translate</strong> for indicating whether content should be translated. The value <strong>translate="no"</strong> can protect product names, commands, code, identifiers, or other content that must remain unchanged.
              </p>

              <ResponsiveTable
                caption="DITA objects and the localization risks they introduce"
                columns={[
                  { key: "object", label: "DITA Object" },
                  { key: "application", label: "Automotive Application" },
                  { key: "risk", label: "Localization Risk" },
                ]}
                rows={ditaObjectRows}
              />

              <SourceNote href="https://docs.oasis-open.org/dita/dita/v1.3/dita-v1.3-part3-all-inclusive.html">
                OASIS DITA Version 1.3
              </SourceNote>

              <h3>Authoring Reuse, Translation Reuse, and Terminology Reuse</h3>
              <p>
                These three layers solve different problems. Treating them as interchangeable can lead to inaccurate assumptions about effort, cost, and quality.
              </p>

              <div className="three-layer-grid">
                <div className="layer-item">
                  <h3>Authoring Reuse</h3>
                  <p>The source organization reuses the same approved topic, warning, phrase, table, or data component across multiple publications.</p>
                </div>
                <div className="layer-item">
                  <h3>Translation Memory</h3>
                  <p>Approved source-and-target segments are retrieved when the same or similar wording appears in a later translation project.</p>
                </div>
                <div className="layer-item">
                  <h3>Terminology Management</h3>
                  <p>Approved concepts and vocabulary are governed even when the complete sentence has never been translated before.</p>
                </div>
              </div>

              <ResponsiveTable
                columns={[
                  { key: "layer", label: "Reuse Layer" },
                  { key: "reuse", label: "What It Reuses" },
                  { key: "benefit", label: "Primary Benefit" },
                ]}
                rows={reuseRows}
              />

              <p>
                A reusable DITA topic may only need to be translated once. Translation Memory can identify approved translations in new or modified topics. Terminology Management guides important concepts even when the complete sentence is new. Stepes’ <a href="https://www.stepes.com/translation-memory/">Translation Memory</a> framework treats these as connected but distinct language assets.
              </p>
            </section>

            <section className="chapter" id="preparing-content-for-translation">
              <Eyebrow>Localization Readiness</Eyebrow>
              <h2>Preparing Automotive Content for Translation</h2>
              <p className="chapter-intro">
                The quality and efficiency of an automotive documentation program are strongly influenced by decisions made before translation begins.
              </p>

              <ol className="ordered-prep">
                {[
                  {
                    title: "Inventory the Source Environment",
                    text: "Document the CCMS, DITA maps, topics, schemas, specializations, DITAVAL files, keys, variables, media, references, stylesheets, and required outputs that make up the publication.",
                  },
                  {
                    title: "Confirm the Publication Scope",
                    text: "Define the vehicle family, model year, powertrain, configuration, market, language, locale, manual type, output format, release date, and reviewer responsibilities.",
                  },
                  {
                    title: "Establish a Stable Source Baseline",
                    text: "Identify the approved source version and document how late changes will be recorded, classified, routed, reviewed, and included in regression checks.",
                  },
                  {
                    title: "Define Translatable and Protected Content",
                    text: "Classify content as translatable, nontranslatable, locale-specific, dynamically populated, excluded, or reviewed only in the generated output.",
                  },
                  {
                    title: "Prepare the Language Assets",
                    text: "Provide Translation Memory, automotive terminology, style guidance, product naming rules, acronym guidance, previous manuals, reviewer feedback, screenshots, diagrams, and reference builds.",
                  },
                ].map((item, index) => (
                  <li key={item.title}>
                    <span className="ordered-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="callout">
                <div className="callout-label">Quality Note</div>
                <p>A technically complete package of isolated XML files may still be contextually incomplete. Reference output helps linguists understand how each topic is assembled, where it appears, and which audience it serves.</p>
              </div>
            </section>

            <section className="workflow-section" id="end-to-end-workflow" aria-labelledby="workflow-title">
              <h2 id="workflow-title">The Automotive Manual Translation Workflow</h2>
              <p>
                A controlled workflow connects content preparation, language work, engineering, validation, publishing, and future reuse.
              </p>
              <div className="workflow-list">
                {workflowStages.map((stage, index) => (
                  <div className="workflow-stage" key={stage.title}>
                    <div className="workflow-index">{String(index + 1).padStart(2, "0")}</div>
                    <div>
                      <h3>{stage.title}</h3>
                      <p>{stage.text}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="workflow-summary">
                Source Repository → Change Detection → Localization Engineering → Translation and Review → XML Validation → Multilingual Build → Release → Approved Reuse
              </div>
            </section>

            <section className="chapter" id="model-year-and-variant-management">
              <Eyebrow>Change Management</Eyebrow>
              <h2>Managing Model-Year, Vehicle, and Market Variants</h2>
              <p className="chapter-intro">
                Model-year and variant management is one of the most important differences between automotive documentation and ordinary document translation.
              </p>

              <div className="editorial-grid">
                {[
                  ["Vehicle Family and Platform", "Passenger, commercial, specialty, off-highway, and shared vehicle architectures."],
                  ["Model Year and Configuration", "Annual releases, mid-cycle updates, trim levels, and equipment packages."],
                  ["Powertrain and Hardware", "ICE, hybrid, plug-in hybrid, battery electric, supplier, and component revisions."],
                  ["Software and Market", "Feature versions, calibrations, regulatory regions, locales, audiences, and delivery channels."],
                ].map(([title, text]) => (
                  <div className="editorial-item" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <h3>Changes Extend Beyond Visible Text</h3>
              <p>
                A reliable comparison should detect more than newly written sentences. A topic may contain no visible text changes while producing a different result because its condition, key, variable, reference, associated value, image, or software behavior changed.
              </p>

              <ResponsiveTable
                caption="Model-year change classification matrix"
                columns={[
                  { key: "type", label: "Change Type" },
                  { key: "example", label: "Example" },
                  { key: "action", label: "Recommended Localization Action" },
                ]}
                rows={variantRows}
              />

              <h3>Recommended Model-Year Delta Process</h3>
              <ol className="ordered-prep">
                {[
                  "Freeze the previously approved multilingual baseline.",
                  "Compare the new source repository with that baseline.",
                  "Classify every meaningful change.",
                  "Identify affected publications, models, markets, and languages.",
                  "Reuse approved translations where the context remains valid.",
                  "Translate and review changed content.",
                  "Rebuild affected language outputs.",
                  "Perform regression and applicability checks.",
                  "Update Translation Memory, terminology, and release records.",
                ].map((item, index) => (
                  <li key={item}>
                    <span className="ordered-number">{String(index + 1).padStart(2, "0")}</span>
                    <div><p>{item}</p></div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="chapter" id="translation-reuse-and-cost-efficiency">
              <h2>Improving Translation Reuse and Cost Efficiency</h2>
              <p className="chapter-intro">
                The most sustainable savings in automotive documentation come from reducing unnecessary repetition and rework—not from reducing essential quality controls.
              </p>

              <h3>Sources of Reuse</h3>
              <p>
                Organizations can improve efficiency through single-source authoring, reusable DITA topics, content references, variables, Translation Memory, repetition analysis, Terminology Management, automated change detection, reusable graphics, standard warnings, and approved market-specific clauses.
              </p>

              <div className="comparison-panel">
                <div className="comparison-column accent">
                  <h3>Practices That Improve Reuse</h3>
                  <ul>
                    <li>Consistent sentence structures</li>
                    <li>Controlled source-language principles</li>
                    <li>Centralized repeated content</li>
                    <li>Stable identifiers</li>
                    <li>Approved terminology</li>
                    <li>Documented variation rules</li>
                    <li>One authoritative source</li>
                    <li>Separation of real changes from cosmetic edits</li>
                  </ul>
                </div>
                <div className="comparison-column">
                  <h3>Practices That Reduce Reuse</h3>
                  <ul>
                    <li>Copying and editing reusable topics locally</li>
                    <li>Creating duplicate versions of the same procedure</li>
                    <li>Rewriting unchanged content for style alone</li>
                    <li>Translating generated PDFs instead of source content</li>
                    <li>Replacing IDs between releases</li>
                    <li>Mixing variants in uncontrolled files</li>
                    <li>Making undocumented source changes</li>
                    <li>Maintaining fragmented Translation Memories</li>
                  </ul>
                </div>
              </div>

              <h3>Cost Depends on More Than Word Count</h3>
              <p>
                Automotive manual translation costs may be influenced by new versus reusable content, the number of languages and variants, source quality, XML engineering, terminology preparation, technical review, graphics, publication builds, desktop publishing, late changes, validation, testing, and turnaround requirements.
              </p>
              <p>
                Translation Memory can reduce repetitive work, but the commercial impact depends on the volume and quality of reusable content and the level of contextual review required. Approved bilingual assets should be applied before genuinely new or changed content is routed through the appropriate AI, professional translation, or hybrid workflow.
              </p>
            </section>

            <section className="chapter" id="automotive-terminology-governance">
              <h2>Governing Automotive Terminology Across Manuals and Systems</h2>
              <p className="chapter-intro">
                Automotive terminology must remain consistent across engineering, vehicle software, owner documentation, service content, dealer training, parts information, and customer support.
              </p>

              <h3>Terminology Categories</h3>
              <p>
                A governed automotive termbase may include vehicle systems, components, parts, diagnostics, fault descriptions, tools, maintenance procedures, safety language, driver warnings, HMI labels, software features, units, model names, acronyms, supplier terminology, and regulatory vocabulary.
              </p>

              <ResponsiveTable
                caption="Recommended fields for an automotive terminology record"
                columns={[
                  { key: "field", label: "Field" },
                  { key: "purpose", label: "Purpose" },
                ]}
                rows={terminologyRows}
              />

              <h3>Maintain Cross-Channel Alignment</h3>
              <p>
                A vehicle feature may appear in the HMI, owner manual, service manual, diagnostic software, dealer training, customer support, and marketing content. The terminology should remain conceptually aligned, but the exact grammatical form may vary by audience and language.
              </p>
              <p>
                Good terminology governance controls meaning without forcing mechanical word-for-word replacement. Stepes’ <a href="https://www.stepes.com/terminology-management/">Terminology Management</a> capabilities are designed to govern approved terms, definitions, alternatives, prohibited forms, context, and usage across AI, professional linguist, and reviewer workflows.
              </p>
            </section>

            <section className="chapter" id="dita-xml-localization-engineering">
              <h2>DITA and XML Localization Engineering</h2>
              <p className="chapter-intro">
                Localization engineering makes structured content usable by translators while preserving the architecture required for reintegration and publishing.
              </p>

              <h3>Tags and Inline Markup</h3>
              <p>
                Translators need enough visibility to understand inline elements without being able to damage required structure. Engineering rules should protect structural tags, preserve inline-code order, expose meaningful text, maintain valid nesting, and provide context around fragmented segments.
              </p>

              <h3>Attributes</h3>
              <p>
                Attribute values must be classified according to function. Some are structural, referential, translatable, nontranslatable, locale-specific, conditionally localized, or used for filtering and publishing. IDs, keys, filenames, and processing values generally require protection, while titles, descriptions, or accessibility text may require translation.
              </p>

              <h3>IDs, Links, References, Variables, and Placeholders</h3>
              <p>
                Automated controls should protect element IDs, file paths, URLs, topic references, cross-references, conrefs, keyrefs, media references, variables, placeholders, commands, and dynamic values. The surrounding translation must still account for grammar, word order, inflection, number, and gender.
              </p>

              <h3>Entities, Characters, Conditions, and Schemas</h3>
              <p>
                The workflow must preserve valid XML entities, escaped characters, Unicode text, language-specific punctuation, nonbreaking spaces, line-break requirements, and bidirectional behavior. Conditions should be checked before and after translation. Validation may use DTD, XML Schema, RELAX NG, Schematron, customer-specific business rules, CCMS checks, and publishing-system validation.
              </p>

              <h3>Using XLIFF</h3>
              <p>
                XML Localisation Interchange File Format, or XLIFF, can provide a standardized exchange layer between source-content systems and localization tools. It is not mandatory for every DITA workflow. Some systems translate DITA directly, while others use XLIFF exports generated by a CCMS, connector, or translation management system.
              </p>
              <p>
                OASIS published XLIFF 2.2 as a Committee Specification in March 2025. The appropriate exchange method depends on source architecture, CCMS capabilities, tool support, context, inline-code handling, round-trip reliability, validation, and governance.
              </p>

              <ResponsiveTable
                caption="Common XML engineering issues and preventive controls"
                columns={[
                  { key: "issue", label: "Issue" },
                  { key: "consequence", label: "Possible Consequence" },
                  { key: "control", label: "Preventive Control" },
                ]}
                rows={xmlIssueRows}
              />

              <SourceNote href="https://docs.oasis-open.org/xliff/xliff-core/v2.2/xliff-core-v2.2-part1.html">
                OASIS XLIFF Version 2.2
              </SourceNote>
            </section>

            <section className="chapter" id="tables-graphics-and-embedded-content">
              <Eyebrow>Visual and Structured Assets</Eyebrow>
              <h2>Translating Tables, Graphics, SVG, and Embedded Content</h2>
              <p className="chapter-intro">
                Technical manuals contain significant information outside ordinary paragraphs. These assets must be included in scope, translated correctly, and inspected in their final context.
              </p>

              <div className="editorial-grid">
                <div className="editorial-item">
                  <h3>Tables</h3>
                  <p>Torque values, tire pressures, capacities, maintenance intervals, diagnostic references, parts information, and electrical data require numerical and layout checks.</p>
                </div>
                <div className="editorial-item">
                  <h3>Diagrams and Callouts</h3>
                  <p>Component labels, warnings, numbered legends, exploded views, tool positions, and installation sequences may require editable artwork or localized overlays.</p>
                </div>
                <div className="editorial-item">
                  <h3>SVG Content</h3>
                  <p>SVG files can contain translatable text, IDs, styles, and references. The text should be extracted, protected, reintegrated, rendered, and visually inspected.</p>
                </div>
                <div className="editorial-item">
                  <h3>Screenshots and Interfaces</h3>
                  <p>Documentation screenshots should match localized vehicle interfaces, diagnostic applications, and companion software whenever practical.</p>
                </div>
              </div>

              <h3>Unstructured Publication Formats</h3>
              <p>
                Automotive documentation may also require layout work in Word, FrameMaker, InDesign, PowerPoint, or other authoring formats. Professional <a href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</a> may be necessary to manage text expansion, fonts, tables, graphics, page flow, indexes, and right-to-left layouts.
              </p>
            </section>

            <section className="chapter" id="quality-assurance-at-four-levels">
              <h2>Quality Assurance at Four Levels</h2>
              <p className="chapter-intro">
                Automotive manual quality cannot be reduced to proofreading. A complete quality model should evaluate language, technical meaning, source structure, and the delivered publication.
              </p>

              <div className="quality-framework">
                {[
                  ["01", "Linguistic QA", "Accuracy, grammar, readability, terminology, consistency, numbers, units, warnings, references, audience, and market language."],
                  ["02", "Technical Review", "System interpretation, procedural sequence, tools, parts, specifications, diagnostics, safety implications, and market applicability."],
                  ["03", "Structural QA", "XML syntax, schemas, tags, attributes, IDs, references, keys, conditions, entities, locale codes, and completeness."],
                  ["04", "Published-Output QA", "Content assembly, PDF and HTML rendering, tables, graphics, navigation, fonts, text expansion, truncation, and bidirectional display."],
                ].map(([number, title, text]) => (
                  <div className="quality-level" key={title}>
                    <div className="quality-level-number">{number}</div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>

              <div className="callout">
                <div className="callout-label">Quality Principle</div>
                <p><strong>Valid XML is not necessarily correct multilingual documentation.</strong> A file can pass schema validation while still containing a mistranslated warning, incorrect specification, wrong vehicle variant, unresolved ambiguity, or misleading illustration.</p>
              </div>

              <h3>Risk-Based Quality Routing</h3>
              <ResponsiveTable
                columns={[
                  { key: "level", label: "Risk Level" },
                  { key: "content", label: "Typical Content" },
                  { key: "control", label: "Recommended Control" },
                ]}
                rows={riskRows}
              />

              <p>
                Stepes’ <a href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</a> approach connects linguistic review, terminology, automated checks, workflow controls, and program governance instead of treating quality as one final proofreading step.
              </p>
            </section>

            <section className="chapter" id="ai-assisted-automotive-manual-translation">
              <Eyebrow>AI + Human Workflow</Eyebrow>
              <h2>AI-Assisted Automotive Manual Translation</h2>
              <p className="chapter-intro">
                AI can improve the speed and scalability of automotive documentation programs, but it should be applied according to content purpose, risk, context, and review requirements.
              </p>

              <div className="ai-grid">
                <div>
                  <h3>Appropriate Uses of AI</h3>
                  <ul>
                    <li>First-pass translation of suitable content</li>
                    <li>Lower-risk repeated technical material</li>
                    <li>Terminology candidate extraction</li>
                    <li>Content classification and change summarization</li>
                    <li>Consistency analysis and missing-number detection</li>
                    <li>Reviewer prioritization and quality checks</li>
                    <li>Identification of potentially ambiguous source text</li>
                  </ul>
                </div>
                <div>
                  <h3>Required Controls</h3>
                  <ul>
                    <li>Approved Translation Memory and terminology</li>
                    <li>Sufficient topic and publication context</li>
                    <li>Tag and placeholder protection</li>
                    <li>Number, unit, and confidentiality controls</li>
                    <li>Defined professional review</li>
                    <li>Risk-based routing</li>
                    <li>XML validation and published-output QA</li>
                    <li>Feedback into approved language assets</li>
                  </ul>
                </div>
              </div>

              <h3>Content Requiring Stronger Human Oversight</h3>
              <p>
                Additional professional and technical review is appropriate for safety warnings, emergency procedures, recalls, critical repair procedures, diagnostic instructions, torque values, tolerances, high-voltage content, market-specific regulatory statements, and instructions where an error could cause injury or equipment damage.
              </p>

              <h3>AI and Translation Memory Are Not the Same</h3>
              <p>
                Translation Memory retrieves language that has previously been translated and approved for a known source segment. AI translation generates new language based on its model, instructions, supplied context, terminology, and other available resources. Both can be used in one workflow, but they carry different evidence and review implications.
              </p>
              <p>
                Stepes’ enterprise model combines AI-assisted translation with Translation Memory, terminology, professional linguists, reviewers, and quality controls selected according to content requirements. Learn more about <a href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</a>.
              </p>
            </section>

            <section className="chapter" id="continuous-multilingual-publishing">
              <Eyebrow>Connected Operations</Eyebrow>
              <h2>Continuous Multilingual Publishing</h2>
              <p className="chapter-intro">
                Automotive manuals increasingly evolve alongside vehicle software, connected services, engineering changes, and recurring releases.
              </p>

              <p>
                A continuous documentation model does not mean publishing every change immediately. It means connecting source updates, localization, review, validation, and release so multilingual content can move through a controlled, repeatable process.
              </p>

              <h3>Connected Workflow Components</h3>
              <div className="channel-strip" aria-label="Connected workflow components">
                {[
                  "CCMS",
                  "Source Repository",
                  "Translation Management",
                  "Translation Memory",
                  "Terminology",
                  "Translation API",
                  "Workflow Automation",
                  "Reviewer Portal",
                  "Automated Validation",
                  "Publishing Engine",
                  "Reporting",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>

              <h3>Typical Automated Events</h3>
              <ul>
                <li>Detect new or changed content</li>
                <li>Create translation jobs</li>
                <li>Apply the correct language assets</li>
                <li>Route work by content risk</li>
                <li>Notify reviewers and track approvals</li>
                <li>Validate returned files</li>
                <li>Trigger multilingual builds</li>
                <li>Deliver approved content and update reporting</li>
              </ul>

              <h3>Multichannel Publishing</h3>
              <div className="channel-strip" aria-label="Automotive publication channels">
                {[
                  "Printed Manuals",
                  "PDF",
                  "Responsive HTML",
                  "Owner Portals",
                  "Dealer Portals",
                  "Mobile Applications",
                  "Embedded Help",
                  "Diagnostic Systems",
                  "Support Knowledge Bases",
                ].map((item) => <span key={item}>{item}</span>)}
              </div>

              <h3>Automotive Software Updates and Documentation</h3>
              <p>
                Vehicle software updates can require synchronized changes to release notes, owner instructions, warnings, service information, diagnostic guidance, and dealer communications. UN Regulation No. 156 addresses vehicle software-update and software-update-management processes at the organizational level. Technical-publications teams should account for the documentation and multilingual communication dependencies created by recurring software releases.
              </p>
              <p>
                Stepes supports connected workflows through its <a href="https://www.stepes.com/translation-api/">Translation API</a> and <a href="https://www.stepes.com/translation-workflow-automation/">Translation Workflow Automation</a> capabilities.
              </p>

              <SourceNote href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update">
                UNECE UN Regulation No. 156
              </SourceNote>
            </section>

            <section className="chapter" id="common-failure-points">
              <Eyebrow>Risk Prevention</Eyebrow>
              <h2>Common Automotive Manual Translation Failure Points</h2>
              <p className="chapter-intro">
                Most preventable failures occur when the workflow treats structured automotive documentation as ordinary text or separates translation from the publication system.
              </p>

              <ResponsiveTable
                columns={[
                  { key: "failure", label: "Failure" },
                  { key: "why", label: "Why It Happens" },
                  { key: "control", label: "Recommended Control" },
                ]}
                rows={failureRows}
              />
            </section>

            <section className="chapter" id="program-governance-and-metrics">
              <h2>Program Governance and Performance Metrics</h2>
              <p className="chapter-intro">
                Long-running automotive documentation programs require clear ownership across technical publications, engineering, localization, quality, and market teams.
              </p>

              <ResponsiveTable
                caption="Recommended roles and primary responsibilities"
                columns={[
                  { key: "role", label: "Role" },
                  { key: "responsibility", label: "Primary Responsibility" },
                ]}
                rows={roleRows}
              />

              <div className="governance-grid">
                <div>
                  <h3>Governance Questions to Resolve</h3>
                  <ul>
                    <li>Who owns the source baseline?</li>
                    <li>Who approves automotive terminology?</li>
                    <li>Who determines whether a change affects existing translations?</li>
                    <li>Who validates technical meaning?</li>
                    <li>Who approves market-specific content?</li>
                    <li>Who runs structural validation and output review?</li>
                    <li>Who authorizes each language release?</li>
                    <li>How are post-release corrections handled?</li>
                    <li>Which system holds the multilingual source of truth?</li>
                  </ul>
                </div>
                <div>
                  <h3>Useful Program Metrics</h3>
                  <ul>
                    <li>New versus reused content</li>
                    <li>Translation Memory leverage</li>
                    <li>Source-freeze-to-language-release time</li>
                    <li>On-time locale delivery</li>
                    <li>Terminology compliance</li>
                    <li>First-pass acceptance</li>
                    <li>Structural and output defect rates</li>
                    <li>Late source-change volume</li>
                    <li>Reviewer turnaround and reopened issues</li>
                    <li>Post-release corrections captured for reuse</li>
                  </ul>
                </div>
              </div>

              <p>
                Raw word volume or translation speed alone does not indicate whether the multilingual publication is accurate, complete, and ready for use.
              </p>
            </section>

            <section className="checklist-section" id="readiness-checklist" aria-labelledby="checklist-title">
              <Eyebrow>Planning Tool</Eyebrow>
              <h2 id="checklist-title">Automotive Manual Translation Readiness Checklist</h2>
              <p>Use this checklist before submitting automotive documentation for translation.</p>
              <div className="checklist-grid">
                {checklistGroups.map((group) => (
                  <ChecklistGroup key={group.title} title={group.title} items={group.items} />
                ))}
              </div>
              <p className="checklist-principle">
                <strong>The earlier these decisions are resolved, the less rework is required during translation, validation, and publication.</strong>
              </p>
            </section>

            <section className="chapter" id="evaluating-a-translation-partner">
              <h2>Evaluating an Automotive Translation Partner</h2>
              <p className="chapter-intro">
                A capable partner should be able to explain how it will preserve the content architecture—not only how it will translate the words.
              </p>

              <div className="partner-grid">
                <div>
                  <h3>Questions to Ask</h3>
                  <ul>
                    <li>Can the provider process native DITA and XML without flattening the content?</li>
                    <li>Can it interpret maps, conrefs, keyrefs, conditions, and reusable components?</li>
                    <li>Does it support custom schemas and XML filters?</li>
                    <li>How will translatable and nontranslatable attributes be handled?</li>
                    <li>How are automotive linguists selected?</li>
                    <li>How are Translation Memory and terminology governed?</li>
                    <li>How are AI workflows selected and controlled?</li>
                    <li>Are technical review, XML validation, and output QA included?</li>
                    <li>Can the workflow connect to a CCMS, repository, or enterprise system?</li>
                    <li>How are model-year changes, reviewer comments, and approvals managed?</li>
                    <li>How are corrections captured for future reuse?</li>
                    <li>How is confidential pre-release information protected?</li>
                  </ul>
                </div>
                <div>
                  <h3>Warning Signs</h3>
                  <ul>
                    <li>Quoting a complex project from a PDF without requesting source files</li>
                    <li>No questions about models, markets, conditions, or output channels</li>
                    <li>No clear XML engineering process</li>
                    <li>Linguistic proofreading presented as the only quality step</li>
                    <li>Graphics and final output excluded from the workflow</li>
                    <li>Every Translation Memory match treated as automatically valid</li>
                    <li>Unreviewed AI output presented as release-ready</li>
                    <li>Translated files delivered without validating a multilingual build</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="stepes-section" aria-labelledby="stepes-support-title">
              <Eyebrow>Automotive Documentation Programs</Eyebrow>
              <h2 id="stepes-support-title">Translate and Publish Automotive Documentation With Greater Control</h2>
              <p>
                Stepes helps automotive manufacturers, suppliers, technical-publications teams, and aftersales organizations translate structured documentation across models, markets, languages, and recurring release cycles.
              </p>
              <div className="stepes-capabilities">
                {[
                  ["Automotive Linguistic Expertise", "Professional linguists for owner, service, repair, diagnostic, engineering, supplier, safety, and aftersales content."],
                  ["DITA and XML Localization Engineering", "Structured workflows that preserve maps, topics, reusable content, conditions, attributes, keys, references, schemas, and other technical components."],
                  ["Translation Memory and Terminology", "Approved content reuse and terminology governance across manuals, vehicle software, diagnostics, dealer content, and customer support."],
                  ["AI + Human Translation Workflow", "Automation selected according to content risk, with professional linguists, reviewers, and technical experts applied where required."],
                  ["Connected Multilingual Operations", "Enterprise translation management, reviewer collaboration, APIs, workflow automation, quality controls, reporting, and language assets."],
                  ["Multilingual Publishing", "Validated structured files and finished outputs for PDF, HTML, portals, applications, and other delivery channels."],
                ].map(([title, text]) => (
                  <div className="stepes-capability" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <TextLink href="https://www.stepes.com/automotive-translation-services/">
                Explore Automotive Translation Services
              </TextLink>
            </section>

            <section className="chapter" id="frequently-asked-questions">
              <h2>Automotive Technical Manual Translation FAQs</h2>
              <p className="chapter-intro">
                Practical answers to common questions about DITA, XML, structured content, translation reuse, AI, quality assurance, pricing, and timelines.
              </p>
              <FAQSection />
            </section>

            <section className="chapter sources-section" id="sources-and-references">
              <h2>Standards and Supporting Resources</h2>
              <p className="chapter-intro">
                The guide draws on official standards, regulatory sources, and current Stepes service and platform information.
              </p>
              <ul className="source-list">
                {sourceReferences.map((source) => (
                  <li key={source.title}>
                    <div>
                      <div className="source-title">
                        <a href={source.href} target={source.href.includes("stepes.com") ? undefined : "_blank"} rel={source.href.includes("stepes.com") ? undefined : "noopener noreferrer"}>
                          {source.title}
                        </a>
                      </div>
                      <div className="source-publisher">{source.publisher}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </section>

      <section className="related-section" aria-labelledby="related-resources-title">
        <div className="page-shell">
          <div className="related-header">
            <Eyebrow>Related Automotive Resources</Eyebrow>
            <h2 id="related-resources-title">Continue Building Your Automotive Localization Program</h2>
            <p>Explore focused guidance for vehicle software, terminology, quality measurement, and in-vehicle testing.</p>
          </div>
          <div className="related-grid">
            {relatedResources.map((resource) => (
              <article className="related-item" key={resource.title}>
                <h3><a href={resource.href}>{resource.title}</a></h3>
                <p>{resource.description}</p>
                <TextLink href={resource.href}>{resource.linkLabel}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="page-shell cta-panel">
          <div>
            <Eyebrow>Plan Your Documentation Workflow</Eyebrow>
            <h2 id="final-cta-title">Build a More Scalable Multilingual Documentation Program</h2>
            <p>
              Connect specialized automotive translation, structured-content engineering, terminology, Translation Memory, professional review, validation, and multilingual publishing in one coordinated program.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="https://www.stepes.com/contact-us/">
              <span>Talk to an Expert</span>
              <ArrowIcon />
            </a>
            <a className="button button-secondary" href="https://app.stepes.com/quote/">
              <span>Get a Translation Quote</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
