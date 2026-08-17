import React from "react";

const CANONICAL =
  "https://www.stepes.com/resources/localization-guides/website-translation-workflows/";

const tocGroups = [
  {
    label: "Choose and Compare",
    items: [
      ["Choosing the Right Workflow", "choosing-the-right-workflow"],
      ["How Website Content Moves", "how-content-moves"],
      ["CMS Connector Workflows", "cms-connector-workflows"],
      ["Translation API Workflows", "translation-api-workflows"],
      ["Website Translation Proxy", "website-translation-proxy"],
      ["File-Based Workflows", "file-based-workflows"],
    ],
  },
  {
    label: "Plan the Architecture",
    items: [
      ["Hybrid Website Workflows", "hybrid-workflows"],
      ["Workflow Comparison", "workflow-comparison"],
      ["Workflow Fit Framework", "workflow-fit-framework"],
      ["Scenario Recommendations", "scenario-recommendations"],
      ["Quality, Security, and Governance", "quality-security-governance"],
    ],
  },
  {
    label: "Implement and Improve",
    items: [
      ["Implementation Roadmap", "implementation-roadmap"],
      ["Common Workflow Failures", "common-workflow-failures"],
      ["Frequently Asked Questions", "frequently-asked-questions"],
      ["Related Website Guides", "related-guides"],
    ],
  },
];

const takeaways = [
  {
    title: "Start with the operating model, not the technology.",
    text: "The right workflow depends on where content is created, how often it changes, who approves it, how it is published, and how much technical control your organization requires.",
  },
  {
    title: "No workflow is universally best.",
    text: "CMS connectors, translation APIs, website translation proxies, and file-based processes solve different integration and publishing problems. Many enterprises use more than one.",
  },
  {
    title: "Automation must include exceptions.",
    text: "A scalable workflow needs clear routes for regulated content, high-visibility pages, creative messaging, urgent updates, failed jobs, and content that cannot be processed automatically.",
  },
  {
    title: "A technical connection is only one part of localization.",
    text: "Terminology, translation memory, quality routing, multilingual SEO, in-context testing, release control, ownership, and reporting determine whether the workflow performs reliably.",
  },
  {
    title: "Design for ongoing change from the beginning.",
    text: "Even an initial launch should account for source revisions, incremental translation, reuse, review status, publishing synchronization, and long-term maintenance.",
  },
];

const commonStages = [
  {
    number: "01",
    title: "Identify",
    text: "Determine which pages, fields, assets, metadata, and dynamic elements are in scope.",
  },
  {
    number: "02",
    title: "Extract or Detect",
    text: "Export content, send it through an integration, or detect it as pages are requested.",
  },
  {
    number: "03",
    title: "Route",
    text: "Apply language, content-type, risk, due-date, and reviewer rules.",
  },
  {
    number: "04",
    title: "Translate",
    text: "Use the approved combination of AI, post-editing, professional translation, or specialist translation.",
  },
  {
    number: "05",
    title: "Review",
    text: "Validate terminology, meaning, tone, market fit, and required subject-matter criteria.",
  },
  {
    number: "06",
    title: "Reintegrate or Render",
    text: "Return content to the source system or deliver a localized version through the selected architecture.",
  },
  {
    number: "07",
    title: "Publish",
    text: "Release approved content with the correct URLs, metadata, navigation, and market settings.",
  },
  {
    number: "08",
    title: "Validate and Maintain",
    text: "Test the live experience, resolve exceptions, and keep languages aligned as the source site changes.",
  },
];

const workflowModels = [
  {
    key: "cms",
    eyebrow: "CMS-Centric Publishing",
    title: "CMS Connector Workflows",
    summary:
      "A CMS connector moves structured website content between the content management system and the translation environment while preserving content relationships, workflow status, and publishing controls.",
    bestFor:
      "Marketing and content teams that manage most website content in a supported CMS and want localization embedded in the editorial process.",
    strengths: [
      "Keeps editors and regional teams close to familiar CMS workflows.",
      "Can transfer page fields, metadata, taxonomies, and structured content with less manual handling.",
      "Supports status synchronization, assignment, approval, and controlled publishing.",
      "Makes incremental updates easier when source changes are tracked consistently.",
    ],
    considerations: [
      "Connector capability varies by CMS, version, configuration, and content model.",
      "Custom modules, plugins, embedded applications, and third-party content may need separate handling.",
      "Poorly structured content can limit automation and create incomplete extraction.",
      "Publishing permissions, locale structures, and approval rules must be configured deliberately.",
    ],
    flow: ["CMS", "Connector", "Translation Workflow", "CMS Review", "Publish"],
    note:
      "A connector should be tested with representative pages, reusable modules, metadata, images, forms, and custom content types before full rollout.",
  },
  {
    key: "api",
    eyebrow: "Developer-Controlled Integration",
    title: "Translation API Workflows",
    summary:
      "A translation API lets applications and content systems send content programmatically, retrieve completed translations, monitor status, and trigger downstream actions through custom logic.",
    bestFor:
      "Headless websites, digital products, custom platforms, high-volume content operations, and organizations that need flexible automation across several systems.",
    strengths: [
      "Provides the greatest control over content selection, timing, metadata, job creation, and delivery behavior.",
      "Supports event-driven workflows, scheduled jobs, webhooks, callbacks, and custom orchestration.",
      "Can connect multiple repositories, applications, commerce systems, or product databases.",
      "Allows localization to become part of development, content, or release pipelines.",
    ],
    considerations: [
      "Requires engineering capacity for implementation, testing, monitoring, and maintenance.",
      "The integration must handle authentication, retries, validation, duplicate events, and failed jobs.",
      "Context, asset relationships, and preview information must be passed intentionally.",
      "API flexibility does not eliminate the need for editorial ownership and quality governance.",
    ],
    flow: ["Content Event", "API Request", "Translation Workflow", "API Response", "Release"],
    note:
      "Define request schemas, content identifiers, locale logic, callbacks, retry behavior, and audit data before development begins.",
  },
  {
    key: "proxy",
    eyebrow: "Rapid Multilingual Delivery",
    title: "Website Translation Proxy Workflows",
    summary:
      "A website translation proxy delivers localized versions of web pages through an intermediary layer that detects source content, retrieves or applies translations, and presents the target-language experience without requiring every translation to be stored in the source CMS.",
    bestFor:
      "Organizations seeking faster multilingual deployment, limited source-system modification, centralized control, or coverage across complex and distributed web environments.",
    strengths: [
      "Can reduce the amount of change required in the source CMS or website codebase.",
      "Supports rapid deployment across large or technically fragmented websites.",
      "Can centralize translation, rendering, caching, and language-delivery logic.",
      "May help organizations launch while deeper source-system integration is being planned.",
    ],
    considerations: [
      "The architecture must be evaluated for multilingual SEO, performance, caching, security, analytics, and content ownership.",
      "Dynamic content, authenticated areas, client-side rendering, forms, and third-party components require careful testing.",
      "Teams need clarity on where localized content is managed and how exceptions are corrected.",
      "Long-term governance should address vendor dependency, portability, and future architecture changes.",
    ],
    flow: ["Source Website", "Proxy Layer", "Localized Content", "Visitor Request", "Rendered Page"],
    note:
      "Proxy suitability depends on the website architecture and implementation—not merely on how quickly the first language can be displayed.",
  },
  {
    key: "files",
    eyebrow: "Controlled Content Exchange",
    title: "File-Based Translation Workflows",
    summary:
      "A file-based workflow exports website content into structured or document formats, routes those files through translation and review, and then imports or publishes the localized content.",
    bestFor:
      "Periodic website projects, controlled releases, smaller content volumes, legacy systems, migration programs, or environments without a suitable live integration.",
    strengths: [
      "Works with many systems and can begin without building a direct integration.",
      "Provides a clear project package for controlled batches and scheduled releases.",
      "Can support structured formats, documents, resource files, and selected database exports.",
      "Offers a practical fallback for exceptions that connectors or APIs cannot process.",
    ],
    considerations: [
      "Manual exports, transfers, tracking, and imports can create delays and version-control risk.",
      "Stale files may be translated after the source content has already changed.",
      "Context can be lost when content is separated from the website experience.",
      "Repeated full exports can reduce efficiency if changed content is not identified accurately.",
    ],
    flow: ["Export", "Package", "Translate and Review", "Import", "Publish"],
    note:
      "Use stable identifiers, clear version labels, protected code, structured fields, and an agreed source-of-truth process.",
  },
];

const comparisonRows = [
  {
    criterion: "Initial Deployment Effort",
    cms: "Moderate",
    api: "High",
    proxy: "Low to moderate",
    files: "Low",
  },
  {
    criterion: "Ongoing Developer Involvement",
    cms: "Low to moderate",
    api: "Moderate to high",
    proxy: "Low to moderate",
    files: "Low, but manual coordination is higher",
  },
  {
    criterion: "CMS Editorial Integration",
    cms: "Strong",
    api: "Customizable",
    proxy: "Indirect",
    files: "Manual",
  },
  {
    criterion: "Automation Potential",
    cms: "High",
    api: "Very high",
    proxy: "High",
    files: "Low to moderate",
  },
  {
    criterion: "Custom Workflow Flexibility",
    cms: "Moderate",
    api: "Very high",
    proxy: "Moderate",
    files: "Moderate",
  },
  {
    criterion: "Dynamic Content Support",
    cms: "Depends on the CMS and connector",
    api: "Strong when designed into the application",
    proxy: "Strong with architecture-specific qualifications",
    files: "Limited",
  },
  {
    criterion: "Publishing Control",
    cms: "Strong within the CMS",
    api: "Fully customizable",
    proxy: "Managed through the proxy architecture",
    files: "Manual or batch-based",
  },
  {
    criterion: "Multilingual SEO Control",
    cms: "Strong with correct implementation",
    api: "Strong with correct implementation",
    proxy: "Architecture-dependent",
    files: "Strong, but operationally manual",
  },
  {
    criterion: "Update Efficiency",
    cms: "High",
    api: "Very high",
    proxy: "High",
    files: "Low",
  },
  {
    criterion: "Typical Best Fit",
    cms: "CMS-led marketing and editorial websites",
    api: "Custom, headless, and product-led ecosystems",
    proxy: "Rapid or low-change deployment across complex sites",
    files: "Periodic, controlled, or lower-frequency projects",
  },
];

const decisionFactors = [
  {
    title: "Content Ownership",
    text: "Identify where source content is created, which system is authoritative, and who approves changes before and after translation.",
    question: "Does most content live in one CMS, or across several applications and repositories?",
  },
  {
    title: "Change Frequency",
    text: "Measure how often pages, products, metadata, documents, and dynamic content change—not only how large the initial website is.",
    question: "Will the organization translate occasional releases or continuous daily updates?",
  },
  {
    title: "Technical Access",
    text: "Assess whether teams can install connectors, modify the website, build APIs, configure DNS, or introduce an intermediary delivery layer.",
    question: "What level of engineering and infrastructure change is realistic?",
  },
  {
    title: "Publishing Control",
    text: "Determine where localized content must be stored, who can publish it, and how local releases relate to the source-language release.",
    question: "Must every translation return to the source CMS before it goes live?",
  },
  {
    title: "Localization Complexity",
    text: "Account for multilingual SEO, regulated content, regional variation, multimedia, forms, ecommerce, right-to-left languages, and specialist review.",
    question: "Which content cannot follow the standard automated route?",
  },
  {
    title: "Operational Scale",
    text: "Consider the number of brands, websites, languages, content owners, agencies, reviewers, and releases the workflow must support.",
    question: "Will the architecture remain manageable as the program grows?",
  },
];

const scenarios = [
  {
    scenario: "Marketing-Led Corporate Website",
    route: "CMS connector",
    qualification:
      "Add file-based handling for documents and an API or specialist route for content outside the CMS.",
  },
  {
    scenario: "Global Ecommerce Site",
    route: "CMS or commerce connector plus API",
    qualification:
      "Coordinate catalog data, pricing, inventory, checkout content, support content, and market-specific operations.",
  },
  {
    scenario: "Headless CMS Environment",
    route: "Translation API",
    qualification:
      "Preserve content models, identifiers, previews, release relationships, and frontend locale behavior.",
  },
  {
    scenario: "SaaS Product and Documentation Ecosystem",
    route: "Hybrid API and connector model",
    qualification:
      "Use APIs for application and product content, and connectors for documentation or marketing systems.",
  },
  {
    scenario: "Regulated Life Sciences Website",
    route: "Controlled CMS or file-based workflow",
    qualification:
      "Add specialist translation, formal approval, version traceability, and market-specific validation.",
  },
  {
    scenario: "Campaign Microsites",
    route: "Proxy or lightweight CMS workflow",
    qualification:
      "Choose based on launch speed, campaign lifespan, SEO requirements, and the need for creative adaptation.",
  },
  {
    scenario: "Low-Frequency Informational Site",
    route: "File-based workflow",
    qualification:
      "Use a simple controlled process if changes are infrequent and publishing responsibilities are clear.",
  },
  {
    scenario: "Multi-Brand Enterprise Web Portfolio",
    route: "Hybrid enterprise architecture",
    qualification:
      "Standardize shared quality and governance while allowing different technical routes by platform and brand.",
  },
];

const governanceGroups = [
  {
    title: "Quality Controls",
    items: [
      "Translation memory and approved terminology",
      "Content-type and risk-based quality routing",
      "In-context review and localization testing",
      "Exception handling and correction ownership",
      "Source and target version alignment",
    ],
  },
  {
    title: "Security Controls",
    items: [
      "Role-based access and least-privilege permissions",
      "Secure transfer, authentication, and credential management",
      "Defined data scope and content exclusions",
      "Vendor, connector, and infrastructure assessment",
      "Logging, retention, and incident procedures",
    ],
  },
  {
    title: "Governance Controls",
    items: [
      "Clear source-of-truth and publishing ownership",
      "Approval roles for global and regional stakeholders",
      "Release, rollback, and escalation procedures",
      "Reporting for volume, status, quality, and reuse",
      "Lifecycle planning for changes and decommissioning",
    ],
  },
];

const implementationSteps = [
  {
    title: "Inventory Website Systems and Content",
    text: "Map the CMS, headless services, product databases, portals, documents, media, forms, third-party tools, and regional sites that contribute to the customer experience.",
  },
  {
    title: "Map Ownership and Publishing",
    text: "Document who creates, approves, releases, and corrects source and localized content across central and regional teams.",
  },
  {
    title: "Classify Content by Risk and Change Frequency",
    text: "Separate stable, high-volume, high-visibility, creative, technical, legal, regulated, and market-specific content so one route is not forced onto every page.",
  },
  {
    title: "Define Integration Requirements",
    text: "Specify content identifiers, metadata, context, locale logic, workflow status, preview needs, permissions, events, and delivery formats.",
  },
  {
    title: "Choose the Primary and Exception Routes",
    text: "Select the workflow that handles most content efficiently, then define alternatives for documents, dynamic content, urgent updates, and specialist material.",
  },
  {
    title: "Prepare Language Assets and Quality Rules",
    text: "Configure translation memory, terminology, style guidance, protected content, AI policies, reviewer roles, and acceptance criteria.",
  },
  {
    title: "Build and Validate the Connection",
    text: "Test authentication, extraction, context, callbacks, retries, imports, rendering, status synchronization, and failure handling.",
  },
  {
    title: "Pilot Representative Content",
    text: "Use real examples from different templates, content types, languages, and risk levels rather than a small set of easy pages.",
  },
  {
    title: "Test Publishing, SEO, and Functionality",
    text: "Review the localized website in context, including URLs, metadata, navigation, forms, responsive layouts, dynamic content, analytics, and rollback behavior.",
  },
  {
    title: "Scale, Monitor, and Improve",
    text: "Track throughput, reuse, review effort, exceptions, defects, turnaround, publishing lag, and source-to-target synchronization as the program expands.",
  },
];

const failures = [
  {
    title: "Choosing Technology Before Mapping Content",
    text: "A workflow can look efficient in a demonstration while missing documents, embedded applications, campaign tools, metadata, or dynamic content used in production.",
    better: "Build the content and system inventory first.",
  },
  {
    title: "Assuming Everything Lives in One CMS",
    text: "Enterprise websites often draw from several repositories, commerce systems, product databases, forms, and third-party services.",
    better: "Design one operating model with several supported routes.",
  },
  {
    title: "Translating Stale Exports",
    text: "Manual batches can become outdated before translation or import is complete.",
    better: "Use version controls, stable identifiers, change detection, and release cutoffs.",
  },
  {
    title: "Sending Content Without Context",
    text: "Strings, fields, and fragments may be difficult to translate correctly without page purpose, visual context, character limits, or neighboring content.",
    better: "Pass structured context and provide in-environment review.",
  },
  {
    title: "Using One Quality Level for Every Page",
    text: "Uniform review can spend too much on low-risk content while failing to protect brand, regulated, or conversion-critical pages.",
    better: "Route quality according to purpose, visibility, complexity, and risk.",
  },
  {
    title: "Overlooking SEO and Metadata",
    text: "A workflow that transfers only visible body copy can leave titles, descriptions, URLs, structured fields, and internal links incomplete.",
    better: "Include multilingual search requirements in the content model and test plan.",
  },
  {
    title: "Ignoring Failure and Rollback Paths",
    text: "Jobs can fail, integrations can duplicate content, and incorrect translations can reach production.",
    better: "Define retries, alerts, approvals, corrections, and rollback before launch.",
  },
  {
    title: "Treating Launch as the End",
    text: "Localized websites fall behind when new and revised source content is not detected, routed, translated, reviewed, and released consistently.",
    better: "Plan continuous localization and ownership from the beginning.",
  },
];

const faqs = [
  {
    q: "What is the best website translation workflow?",
    a: "There is no universally best workflow. The right choice depends on your content systems, update frequency, engineering resources, publishing model, multilingual SEO requirements, quality needs, and long-term operating scale. A CMS connector is often a strong fit for CMS-led websites, an API for custom or headless environments, a proxy for rapid deployment with limited source changes, and files for controlled periodic work.",
  },
  {
    q: "Is a CMS connector better than a translation API?",
    a: "A CMS connector is usually easier for editorial teams and faster to implement when a suitable connector already supports the content model. An API provides greater flexibility across custom systems but requires more engineering. The better option is the one that matches how your organization creates and releases content.",
  },
  {
    q: "When should a company use a website translation proxy?",
    a: "A proxy can be useful when speed, centralized delivery, or minimal source-system change is important. It should be evaluated carefully for SEO, performance, dynamic content, forms, analytics, security, content ownership, and long-term portability.",
  },
  {
    q: "Can different website translation workflows be combined?",
    a: "Yes. Hybrid workflows are common in enterprise environments. A company might use a CMS connector for editorial pages, an API for product content, file-based handling for documents, and a proxy for a short-term launch or a technically separate site.",
  },
  {
    q: "Which workflow is best for multilingual SEO?",
    a: "CMS connectors and APIs can provide strong control when language-specific URLs, metadata, links, and publishing rules are implemented correctly. Proxy architectures can also support multilingual SEO, but the technical design must be validated. File workflows provide control but require more manual coordination. SEO success depends on the complete implementation, not the workflow label alone.",
  },
  {
    q: "How are website updates detected and translated?",
    a: "Updates may be detected through CMS status changes, webhooks, API events, scheduled comparisons, proxy page detection, change reports, or controlled file exports. The workflow should identify changed content accurately and avoid retranslating unchanged material whenever possible.",
  },
  {
    q: "How much developer involvement is required?",
    a: "File-based workflows usually require the least integration work but more manual operations. Existing CMS connectors require configuration and testing. Translation APIs normally require the most engineering. Proxy implementations may reduce source-code changes but still require technical planning, DNS or routing work, testing, and ongoing oversight.",
  },
  {
    q: "Can AI translation be used in every workflow?",
    a: "AI translation can be incorporated into CMS, API, proxy, file-based, and hybrid workflows. The important decision is how content is routed for post-editing, professional translation, specialist review, or in-market approval according to purpose and risk.",
  },
  {
    q: "How should regulated or high-risk content be handled?",
    a: "Route regulated, legal, medical, financial, safety-critical, or high-visibility content through defined specialist and approval workflows. Preserve version traceability, approved terminology, reviewer accountability, and required market or subject-matter validation.",
  },
  {
    q: "What should be tested before launching the workflow?",
    a: "Test extraction, identifiers, context, translation memory, terminology, routing, permissions, retries, imports, rendering, text expansion, right-to-left behavior where applicable, metadata, URLs, forms, dynamic content, responsive layouts, analytics, release controls, corrections, and rollback procedures.",
  },
];

const relatedResources = [
  {
    category: "Foundational Guide",
    title: "How to Translate a Website",
    text: "Plan the complete journey from content assessment and workflow selection to translation, testing, launch, and ongoing updates.",
    url: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    category: "Scope and Strategy",
    title: "Website Translation vs. Localization",
    text: "Determine when language translation is sufficient and when the complete digital experience requires market adaptation.",
    url: "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/",
  },
  {
    category: "AI + Human Quality",
    title: "AI Website Translation With Human Review",
    text: "Match AI translation, post-editing, professional translation, and specialist review to content purpose and risk.",
    url: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    category: "Quality Assurance",
    title: "Website Localization Testing Checklist",
    text: "Validate linguistic, visual, responsive, functional, right-to-left, and market quality before launch.",
    url: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    category: "Ongoing Operations",
    title: "Continuous Website Localization",
    text: "Keep multilingual websites synchronized as source content, products, campaigns, and customer information change.",
    url: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  },
  {
    category: "International Search",
    title: "Multilingual SEO Guide",
    text: "Connect localized content with target-language keywords, metadata, URLs, internal links, and international site architecture.",
    url: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
];

function ArrowIcon({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path d="M5 12h13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m14 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <path
        d="m6 12.5 3.6 3.6L18 7.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function RouteIcon({ type }) {
  const paths = {
    cms: (
      <>
        <rect x="4" y="4" width="16" height="5" rx="1.5" />
        <rect x="4" y="11.5" width="7" height="8.5" rx="1.5" />
        <rect x="13" y="11.5" width="7" height="8.5" rx="1.5" />
      </>
    ),
    api: (
      <>
        <path d="M8.3 7.2 4 12l4.3 4.8" />
        <path d="m15.7 7.2 4.3 4.8-4.3 4.8" />
        <path d="m13.8 4.5-3.6 15" />
      </>
    ),
    proxy: (
      <>
        <path d="M5 7.5h8.5a3 3 0 0 1 3 3v.5" />
        <path d="m13.5 8.5 3-3 3 3" />
        <path d="M19 16.5h-8.5a3 3 0 0 1-3-3V13" />
        <path d="m10.5 15.5-3 3-3-3" />
      </>
    ),
    files: (
      <>
        <path d="M7 3.8h7l4 4V20H7z" />
        <path d="M14 3.8V8h4" />
        <path d="M9.5 12h6" />
        <path d="M9.5 15.5h6" />
      </>
    ),
    quality: (
      <>
        <path d="M12 3.5 19 6v5.2c0 4.2-2.7 7.6-7 9.3-4.3-1.7-7-5.1-7-9.3V6z" />
        <path d="m8.8 12 2 2 4.4-4.4" />
      </>
    ),
    security: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10" />
        <path d="M12 14v2.5" />
      </>
    ),
    governance: (
      <>
        <circle cx="12" cy="6" r="2.2" />
        <circle cx="6" cy="17" r="2.2" />
        <circle cx="18" cy="17" r="2.2" />
        <path d="m10.7 7.8-3.4 6.8" />
        <path d="m13.3 7.8 3.4 6.8" />
        <path d="M8.2 17h7.6" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none">
      <g
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {paths[type]}
      </g>
    </svg>
  );
}

function SectionHeader({ eyebrow, title, intro, centered = false }) {
  return (
    <header className={`section-header${centered ? " section-header--centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </header>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <ArrowIcon size={17} />
    </a>
  );
}

function WorkflowVisual({ model }) {
  return (
    <div className={`model-visual model-visual--${model.key}`} aria-label={`${model.title} flow`}>
      <div className="model-visual-head">
        <div className="model-icon">
          <RouteIcon type={model.key} />
        </div>
        <div>
          <span className="model-visual-label">Typical Content Path</span>
          <strong>{model.title}</strong>
        </div>
      </div>
      <div className="model-flow">
        {model.flow.map((item, index) => (
          <div className="model-step" key={item}>
            <span className="model-step-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="model-node">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WebsiteTranslationWorkflowsGuideWireframeV2() {
  const closeMobileContents = (event) => {
    const details = event.currentTarget.closest("details");
    if (details) details.open = false;
  };

  return (
    <main className="stepes-guide" data-wireframe-version="2.0">
      <style>{`
        :root {
          --magenta: #c11d63;
          --magenta-dark: #9f1d55;
          --magenta-deep: #7a1542;
          --blush: #fdf2f7;
          --light-magenta: #f2a7c6;
          --ink: #16131a;
          --text: #4d4652;
          --muted: #746c78;
          --border: #e7e2e8;
          --border-strong: #d8d1da;
          --surface: #ffffff;
          --soft: #f8f7f9;
          --dark: #221822;
          --dark-soft: #2d202c;
          --shadow: 0 20px 55px rgba(45, 25, 40, 0.08);
          --radius-lg: 30px;
          --radius-md: 22px;
          --header-offset: 112px;
        }

        * {
          box-sizing: border-box;
          min-width: 0;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .stepes-guide {
          overflow-x: clip;
          background: var(--surface);
          color: var(--ink);
          font-family:
            Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
          font-size: 16px;
          line-height: 1.65;
          text-rendering: optimizeLegibility;
        }

        .stepes-guide a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-guide h1,
        .stepes-guide h2,
        .stepes-guide h3,
        .stepes-guide p,
        .stepes-guide li,
        .stepes-guide a,
        .stepes-guide strong,
        .stepes-guide span {
          overflow-wrap: break-word;
        }

        .button span,
        .system-chip strong,
        .localized-output strong {
          overflow-wrap: normal;
          word-break: normal;
        }

        .stepes-guide a:focus-visible,
        .stepes-guide summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.28);
          outline-offset: 4px;
        }

        .shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .reading {
          width: min(100%, 760px);
          margin-inline: auto;
        }

        .reading--wide {
          width: min(100%, 840px);
        }

        .wide-module {
          width: min(100%, 1120px);
          margin-inline: auto;
        }

        section[id] {
          scroll-margin-top: var(--header-offset);
        }

        .eyebrow {
          margin: 0 0 18px;
          color: var(--magenta);
          font-size: 11px !important;
          font-weight: 600 !important;
          letter-spacing: 0.12em;
          line-height: 1.35 !important;
          text-transform: uppercase;
        }

        h1,
        h2,
        h3 {
          margin: 0;
          font-weight: 600;
          letter-spacing: -0.025em;
          line-height: 1.12;
        }

        h1 {
          max-width: 760px;
          font-size: 48px;
        }

        h2 {
          font-size: 36px;
        }

        h3 {
          font-size: 24px;
        }

        p {
          margin: 0;
        }

        .hero {
          position: relative;
          overflow: hidden;
          padding: 104px 0 90px;
          background:
            radial-gradient(circle at 82% 16%, rgba(193, 29, 99, 0.07), transparent 28%),
            linear-gradient(180deg, #fff 0%, #fff 72%, #fbf9fb 100%);
        }

        .hero::after {
          position: absolute;
          right: 0;
          bottom: -170px;
          width: 360px;
          height: 360px;
          border: 1px solid rgba(193, 29, 99, 0.08);
          border-radius: 50%;
          content: "";
          pointer-events: none;
          transform: translateX(35%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
          gap: 72px;
          align-items: center;
        }

        .hero-copy {
          position: relative;
          z-index: 1;
        }

        .hero-deck {
          max-width: 720px;
          margin-top: 26px;
          color: var(--text);
          font-size: 20px;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid transparent;
          border-radius: 999px;
          padding: 13px 22px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          transition:
            transform 160ms ease,
            background 160ms ease,
            border-color 160ms ease,
            box-shadow 160ms ease;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .button--primary,
        .button--primary:visited,
        .button--primary:hover,
        .button--primary:active,
        .button--primary:focus-visible {
          background: var(--magenta);
          color: #fff !important;
        }

        .button--primary:hover {
          background: var(--magenta-dark);
          box-shadow: 0 12px 24px rgba(193, 29, 99, 0.18);
        }

        .button--secondary {
          border-color: var(--border-strong);
          background: #fff;
          color: var(--ink);
        }

        .button--secondary:hover {
          border-color: var(--magenta);
          color: var(--magenta);
        }

        .hero-meta {
          display: flex;
          width: 100%;
          max-width: 100%;
          flex-wrap: wrap;
          column-gap: 20px;
          row-gap: 8px;
          margin-top: 34px;
          color: var(--muted);
          font-size: 14px;
        }

        .hero-meta span {
          display: inline-flex;
          min-height: 24px;
          align-items: center;
          white-space: nowrap;
        }

        .hero-visual {
          position: relative;
          min-height: 500px;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: var(--radius-lg);
          background: rgba(255, 255, 255, 0.88);
          box-shadow: var(--shadow);
        }

        .hero-visual::before {
          position: absolute;
          inset: 18px;
          border: 1px solid var(--border);
          border-radius: 23px;
          content: "";
        }

        .hero-visual-inner {
          position: relative;
          display: grid;
          min-height: 500px;
          grid-template-rows: auto 1fr auto;
          gap: 24px;
          padding: 46px;
          z-index: 1;
        }

        .visual-label {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .hero-system-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          align-items: start;
        }

        .system-chip {
          min-height: 78px;
          border: 1px solid var(--border);
          border-radius: 18px;
          background: #fff;
          padding: 16px;
          text-align: center;
        }

        .system-chip strong,
        .hero-engine strong,
        .localized-output strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
        }

        .system-chip span,
        .hero-engine span,
        .localized-output span {
          display: block;
          margin-top: 4px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.45;
        }

        .hero-engine {
          align-self: center;
          border-radius: 24px;
          background: var(--dark);
          color: #fff;
          padding: 28px;
          text-align: center;
        }

        .engine-routes {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 8px;
          margin-top: 20px;
        }

        .engine-routes span {
          display: grid;
          min-height: 58px;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        .localized-output {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .localized-output > div {
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: 18px;
          background: var(--blush);
          padding: 18px;
        }

        .summary-section {
          padding: 80px 0;
          background: var(--soft);
        }

        .summary-layout {
          display: grid;
          grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
          gap: 76px;
          align-items: start;
        }

        .summary-intro p:not(.eyebrow) {
          margin-top: 22px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.65;
        }

        .takeaway-list {
          border-top: 1px solid var(--border-strong);
        }

        .takeaway {
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--border);
        }

        .takeaway-icon {
          display: grid;
          width: 22px;
          height: 22px;
          margin-top: 3px;
          place-items: center;
          border-radius: 50%;
          background: var(--blush);
          color: var(--magenta);
        }

        .takeaway-icon svg {
          width: 16px;
          height: 16px;
        }

        .takeaway h3 {
          font-size: 19px;
          line-height: 1.35;
        }

        .takeaway p {
          margin-top: 8px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .contents-section {
          padding: 80px 0;
          background: #fff;
        }

        .contents-heading {
          margin-bottom: 36px;
        }

        .contents-desktop {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-block: 1px solid var(--border);
        }

        .contents-group {
          padding: 30px 30px 32px 0;
        }

        .contents-group + .contents-group {
          border-left: 1px solid var(--border);
          padding-left: 30px;
        }

        .contents-group h3 {
          margin-bottom: 16px;
          color: var(--muted);
          font-size: 16px;
          letter-spacing: 0;
        }

        .contents-group a {
          display: grid;
          min-height: 42px;
          grid-template-columns: 8px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          padding: 8px 0;
          color: var(--text);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
          transition: color 150ms ease;
        }

        .contents-group a::before {
          width: 6px;
          height: 6px;
          margin-top: 8px;
          border-radius: 50%;
          background: var(--border-strong);
          content: "";
        }

        .contents-group a:hover {
          color: var(--magenta);
        }

        .contents-group a:hover::before {
          background: var(--magenta);
        }

        .contents-mobile {
          display: none;
        }

        .article-section {
          padding: 96px 0;
        }

        .article-section--soft {
          background: var(--soft);
        }

        .article-section--blush {
          background: var(--blush);
        }

        .article-section--compact {
          padding: 80px 0;
        }

        .section-header {
          width: min(100%, 820px);
          margin-bottom: 44px;
        }

        .section-header--centered {
          margin-inline: auto;
          text-align: center;
        }

        .section-intro {
          margin-top: 22px;
          color: var(--text);
          font-size: 19px;
          line-height: 1.7;
        }

        .article-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .article-copy p + p {
          margin-top: 22px;
        }

        .recommendation-summary {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 52px;
          border-block: 1px solid var(--border);
        }

        .recommendation-item {
          padding: 26px 22px;
        }

        .recommendation-item + .recommendation-item {
          border-left: 1px solid var(--border);
        }

        .recommendation-item span {
          display: block;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .recommendation-item strong {
          display: block;
          margin-top: 10px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .recommendation-item p {
          margin-top: 8px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.6;
        }

        .flow-section {
          padding: 96px 0 104px;
          background: var(--dark);
          color: #fff;
        }

        .flow-section .eyebrow {
          color: var(--light-magenta);
        }

        .flow-section .section-intro {
          color: #ded6df;
        }

        .flow-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }

        .flow-stage {
          min-height: 224px;
          border-right: 1px solid rgba(255, 255, 255, 0.15);
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          padding: 26px;
        }

        .flow-number {
          color: var(--light-magenta);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }

        .flow-stage h3 {
          margin-top: 24px;
          font-size: 21px;
        }

        .flow-stage p {
          margin-top: 12px;
          color: #d9d0da;
          font-size: 16px;
          line-height: 1.6;
        }

        .flow-note {
          max-width: 820px;
          margin-top: 34px;
          border-left: 3px solid var(--magenta);
          padding-left: 22px;
          color: #ded6df;
          font-size: 17px;
          line-height: 1.7;
        }

        .model-section {
          padding: 104px 0;
        }

        .model-section:nth-child(even) {
          background: var(--soft);
        }

        .model-section + .model-section {
          border-top: 1px solid var(--border);
        }

        .model-header {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 80px;
          align-items: start;
          margin-bottom: 46px;
        }

        .model-heading h2 {
          max-width: 460px;
        }

        .model-overview {
          width: min(100%, 760px);
          justify-self: end;
        }

        .model-overview .section-intro {
          margin-top: 0;
          margin-bottom: 0;
        }

        .best-fit {
          margin-top: 28px;
          border-left: 3px solid var(--magenta);
          padding-left: 20px;
        }

        .best-fit strong {
          display: block;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
        }

        .best-fit p {
          margin-top: 7px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .model-side {
          width: 100%;
          border: 1px solid var(--border);
          border-radius: var(--radius-lg);
          background: #fff;
          box-shadow: 0 18px 42px rgba(42, 26, 38, 0.06);
          overflow: clip;
        }

        .model-visual {
          padding: 30px;
          background: var(--soft);
        }

        .model-visual-head {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        .model-icon {
          display: grid;
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          place-items: center;
          border-radius: 15px;
          background: var(--blush);
          color: var(--magenta);
        }

        .model-icon svg {
          width: 25px;
          height: 25px;
        }

        .model-visual-label {
          display: block;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .model-visual-head strong {
          display: block;
          margin-top: 4px;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .model-flow {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 18px;
          margin-top: 28px;
        }

        .model-step {
          position: relative;
          min-width: 0;
        }

        .model-step:not(:last-child)::after {
          position: absolute;
          top: 50%;
          right: -14px;
          width: 10px;
          border-top: 1px solid rgba(193, 29, 99, 0.5);
          content: "";
          transform: translateY(-50%);
        }

        .model-step-number {
          position: absolute;
          top: -10px;
          left: 14px;
          z-index: 2;
          display: grid;
          min-width: 28px;
          height: 22px;
          place-items: center;
          border: 1px solid rgba(193, 29, 99, 0.18);
          border-radius: 999px;
          background: var(--blush);
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.06em;
          line-height: 1;
        }

        .model-node {
          display: grid;
          min-height: 86px;
          min-width: 0;
          place-items: center;
          border: 1px solid var(--border);
          border-radius: 14px;
          background: #fff;
          padding: 20px 14px 14px;
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          hyphens: manual;
          line-height: 1.35;
          overflow-wrap: break-word;
          text-align: center;
          word-break: normal;
        }

        .model-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .model-column {
          min-width: 0;
          padding: 30px 34px 34px;
        }

        .model-column + .model-column {
          border-left: 1px solid var(--border);
        }

        .model-column h3 {
          font-size: 18px;
        }

        .clean-list {
          display: grid;
          gap: 12px;
          margin: 18px 0 0;
          padding: 0;
          list-style: none;
        }

        .clean-list li {
          position: relative;
          padding-left: 18px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.58;
        }

        .clean-list li::before {
          position: absolute;
          top: 0.72em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--magenta);
          content: "";
          transform: translateY(-50%);
        }

        .model-note {
          border-top: 1px solid var(--border);
          padding: 22px 34px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.6;
        }

        .hybrid-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 72px;
          align-items: start;
        }

        .hybrid-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .hybrid-copy p + p {
          margin-top: 20px;
        }

        .hybrid-examples {
          border-block: 1px solid rgba(193, 29, 99, 0.2);
        }

        .hybrid-example {
          display: grid;
          grid-template-columns: 180px minmax(0, 1fr);
          gap: 24px;
          padding: 24px 0;
        }

        .hybrid-example + .hybrid-example {
          border-top: 1px solid rgba(193, 29, 99, 0.14);
        }

        .hybrid-example strong {
          font-size: 16px;
          font-weight: 600;
        }

        .hybrid-example p {
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .comparison-wrap {
          border: 1px solid var(--border);
          border-radius: 24px;
          overflow: hidden;
        }

        .comparison-table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
        }

        .comparison-table th,
        .comparison-table td {
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 19px 18px;
          vertical-align: top;
          font-size: 16px;
          line-height: 1.5;
          text-align: left;
        }

        .comparison-table th:last-child,
        .comparison-table td:last-child {
          border-right: 0;
        }

        .comparison-table tr:last-child td {
          border-bottom: 0;
        }

        .comparison-table thead th {
          background: var(--soft);
          color: var(--ink);
          font-weight: 600;
        }

        .comparison-table tbody th {
          width: 21%;
          background: #fff;
          color: var(--ink);
          font-weight: 600;
        }

        .comparison-table tbody td {
          color: var(--text);
        }

        .comparison-mobile {
          display: none;
        }

        .table-note {
          margin-top: 22px;
          color: var(--muted);
          font-size: 16px;
          line-height: 1.65;
        }

        .factors-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .factor {
          min-height: 280px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 30px;
        }

        .factor h3 {
          font-size: 22px;
        }

        .factor > p {
          margin-top: 14px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .factor-question {
          margin-top: 22px !important;
          border-top: 1px solid var(--border);
          padding-top: 18px;
          color: var(--ink) !important;
          font-weight: 600;
        }

        .scenario-list {
          border-top: 1px solid var(--border-strong);
        }

        .scenario-header,
        .scenario-row {
          display: grid;
          grid-template-columns: 1.02fr 0.72fr 1.26fr;
          gap: 28px;
        }

        .scenario-header {
          padding: 15px 0;
          border-bottom: 1px solid var(--border-strong);
          color: var(--muted);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .scenario-row {
          padding: 25px 0;
          border-bottom: 1px solid var(--border);
          align-items: start;
        }

        .scenario-row h3 {
          font-size: 18px;
          line-height: 1.4;
        }

        .scenario-label {
          position: absolute;
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          white-space: nowrap;
        }

        .scenario-route {
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
        }

        .scenario-row p {
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .governance-panel {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: var(--radius-lg);
          overflow: hidden;
        }

        .governance-column {
          padding: 34px;
        }

        .governance-column + .governance-column {
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }

        .governance-head {
          display: flex;
          gap: 14px;
          align-items: center;
        }

        .governance-icon {
          display: grid;
          width: 46px;
          height: 46px;
          flex: 0 0 auto;
          place-items: center;
          border-radius: 14px;
          background: rgba(242, 167, 198, 0.11);
          color: var(--light-magenta);
        }

        .governance-icon svg {
          width: 24px;
          height: 24px;
        }

        .governance-head h3 {
          font-size: 21px;
        }

        .governance-column .clean-list li {
          color: #ded6df;
        }

        .governance-column .clean-list li::before {
          background: var(--light-magenta);
        }

        .roadmap {
          position: relative;
          width: min(100%, 860px);
          margin-inline: auto;
        }

        .roadmap::before {
          position: absolute;
          top: 18px;
          bottom: 18px;
          left: 28px;
          width: 1px;
          background: var(--border-strong);
          content: "";
        }

        .roadmap-step {
          position: relative;
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr);
          gap: 24px;
          padding: 0 0 38px;
        }

        .roadmap-step:last-child {
          padding-bottom: 0;
        }

        .roadmap-number {
          position: relative;
          z-index: 1;
          display: grid;
          width: 58px;
          height: 58px;
          place-items: center;
          border: 1px solid rgba(193, 29, 99, 0.22);
          border-radius: 50%;
          background: #fff;
          color: var(--magenta);
          font-size: 14px;
          font-weight: 600;
        }

        .roadmap-content {
          padding-top: 8px;
        }

        .roadmap-content h3 {
          font-size: 21px;
        }

        .roadmap-content p {
          margin-top: 10px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.68;
        }

        .failure-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .failure {
          min-height: 310px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 30px;
        }

        .failure h3 {
          font-size: 21px;
        }

        .failure > p {
          margin-top: 14px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.65;
        }

        .better-approach {
          margin-top: 24px;
          border-top: 1px solid var(--border);
          padding-top: 18px;
        }

        .better-approach span {
          display: block;
          color: var(--magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .better-approach strong {
          display: block;
          margin-top: 8px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
        }

        .faq-panel {
          border-top: 1px solid var(--border-strong);
          border-bottom: 1px solid var(--border-strong);
        }

        .faq-item {
          border-top: 1px solid var(--border);
        }

        .faq-item:first-child {
          border-top: 0;
        }

        .faq-item summary {
          display: grid;
          min-height: 76px;
          cursor: pointer;
          grid-template-columns: minmax(0, 1fr) 26px;
          gap: 24px;
          align-items: center;
          padding: 18px 4px;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-toggle {
          position: relative;
          display: inline-block;
          width: 24px;
          height: 24px;
          color: var(--magenta);
        }

        .faq-toggle::before,
        .faq-toggle::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 14px;
          height: 1.5px;
          background: currentColor;
          content: "";
          transform: translate(-50%, -50%);
          transition: transform 150ms ease;
        }

        .faq-toggle::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .faq-item[open] .faq-toggle::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .faq-answer {
          max-width: 840px;
          padding: 0 54px 26px 4px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.7;
        }

        .conclusion {
          display: grid;
          grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .conclusion-copy p {
          color: var(--text);
          font-size: 18px;
          line-height: 1.72;
        }

        .conclusion-copy p + p {
          margin-top: 20px;
        }

        .conclusion-rule {
          margin-top: 28px;
          border-left: 3px solid var(--magenta);
          padding-left: 20px;
          color: var(--ink) !important;
          font-weight: 600;
        }

        .related-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--border);
          border-left: 1px solid var(--border);
        }

        .related-item {
          display: flex;
          min-height: 260px;
          flex-direction: column;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          padding: 28px;
          transition:
            background 150ms ease,
            color 150ms ease;
        }

        .related-item:hover {
          background: var(--soft);
        }

        .related-category {
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .related-item h3 {
          margin-top: 16px;
          font-size: 20px;
          line-height: 1.35;
        }

        .related-item p {
          margin-top: 12px;
          color: var(--text);
          font-size: 16px;
          line-height: 1.62;
        }

        .related-arrow {
          display: inline-flex;
          margin-top: auto;
          padding-top: 22px;
          color: var(--magenta);
        }

        .upward-links {
          display: flex;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 34px;
        }

        .editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          transition:
            color 150ms ease,
            gap 150ms ease;
        }

        .editorial-link:hover {
          gap: 11px;
          color: var(--magenta-dark) !important;
        }

        .final-cta {
          padding: 64px 0 96px;
          background: #fff;
        }

        .cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.25fr) auto;
          gap: 48px;
          align-items: center;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: var(--radius-lg);
          background:
            radial-gradient(circle at 88% 22%, rgba(193, 29, 99, 0.08), transparent 27%),
            var(--blush);
          padding: 52px 56px;
        }

        .cta-panel h2 {
          max-width: 720px;
        }

        .cta-panel p {
          max-width: 760px;
          margin-top: 18px;
          color: var(--text);
          font-size: 18px;
          line-height: 1.68;
        }

        .cta-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: stretch;
        }

        .cta-actions .button {
          min-width: 250px;
        }

        @media (max-width: 1180px) {
          .shell {
            padding-inline: 40px;
          }

          .hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(360px, 0.82fr);
            gap: 48px;
          }

          .hero-visual-inner {
            padding: 34px;
          }

          .recommendation-summary {
            grid-template-columns: repeat(6, 1fr);
          }

          .recommendation-item {
            grid-column: span 2;
          }

          .recommendation-item:nth-child(4),
          .recommendation-item:nth-child(5) {
            grid-column: span 3;
            border-top: 1px solid var(--border);
          }

          .recommendation-item:nth-child(4) {
            border-left: 0;
          }

          .recommendation-item:nth-child(5) {
            border-left: 1px solid var(--border);
          }

          .cta-panel {
            grid-template-columns: 1fr;
          }

          .cta-actions {
            flex-direction: row;
          }
        }

        @media (max-width: 1100px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 56px;
          }

          .hero-copy {
            width: min(100%, 820px);
          }

          .hero-visual {
            width: min(100%, 780px);
            margin-inline: auto;
          }

          .summary-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .summary-intro {
            width: min(100%, 760px);
          }

          .model-header {
            gap: 52px;
          }
        }

        @media (max-width: 900px) {
          .shell {
            padding-inline: 24px;
          }

          h1 {
            font-size: 42px;
          }

          h2 {
            font-size: 32px;
          }

          h3 {
            font-size: 22px;
          }

          .model-header {
            grid-template-columns: 1fr;
            gap: 26px;
            margin-bottom: 38px;
          }

          .model-overview {
            width: min(100%, 760px);
            justify-self: start;
          }

          .model-flow {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .model-step:not(:last-child)::after {
            display: none;
          }

          .hero {
            padding: 88px 0 76px;
          }

          .hero-grid {
            grid-template-columns: 1fr;
          }

          .hero-visual {
            min-height: 430px;
          }

          .hero-visual-inner {
            min-height: 430px;
          }

          .summary-layout,
          .hybrid-layout,
          .conclusion {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .contents-desktop {
            display: none;
          }

          .contents-mobile {
            display: block;
            border-block: 1px solid var(--border);
          }

          .contents-mobile summary {
            display: flex;
            min-height: 56px;
            cursor: pointer;
            align-items: center;
            justify-content: space-between;
            gap: 18px;
            font-size: 16px;
            font-weight: 600;
            list-style: none;
          }

          .contents-mobile summary::-webkit-details-marker {
            display: none;
          }

          .contents-mobile summary::after {
            color: var(--magenta);
            content: "+";
            font-size: 22px;
            font-weight: 400;
          }

          .contents-mobile[open] summary::after {
            content: "−";
          }

          .contents-mobile-nav {
            padding: 6px 0 22px;
          }

          .contents-mobile-nav h3 {
            margin: 20px 0 6px;
            color: var(--muted);
            font-size: 16px;
          }

          .contents-mobile-nav a {
            display: block;
            min-height: 44px;
            padding: 10px 0;
            color: var(--text);
            font-size: 16px;
            font-weight: 600;
          }

          .flow-grid {
            grid-template-columns: 1fr 1fr;
          }

          .related-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .comparison-wrap {
            display: none;
          }

          .comparison-mobile {
            display: grid;
            gap: 18px;
          }

          .comparison-record {
            border: 1px solid var(--border);
            border-radius: 20px;
            background: #fff;
            overflow: hidden;
          }

          .comparison-record h3 {
            padding: 20px 22px;
            background: var(--soft);
            font-size: 18px;
          }

          .comparison-values {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .comparison-value {
            min-height: 132px;
            border-top: 1px solid var(--border);
            padding: 18px 20px;
          }

          .comparison-value:nth-child(even) {
            border-left: 1px solid var(--border);
          }

          .comparison-value span {
            display: block;
            color: var(--magenta);
            font-size: 16px;
            font-weight: 600;
            line-height: 1.45;
          }

          .comparison-value p {
            margin-top: 8px;
            color: var(--text);
            font-size: 16px;
            line-height: 1.55;
          }

          .failure-list {
            grid-template-columns: 1fr;
          }

          .failure {
            min-height: 0;
          }

          .governance-panel {
            grid-template-columns: 1fr;
          }

          .governance-column + .governance-column {
            border-top: 1px solid rgba(255, 255, 255, 0.15);
            border-left: 0;
          }

          .cta-panel {
            padding: 46px 40px;
          }
        }

        @media (max-width: 700px) {
          :root {
            --header-offset: 88px;
          }

          .shell {
            padding-inline: 20px;
          }

          h1 {
            font-size: 38px;
          }

          h2 {
            font-size: 30px;
          }

          h3 {
            font-size: 20px;
          }

          .hero {
            padding: 72px 0 64px;
          }

          .hero-deck {
            font-size: 18px;
          }

          .hero-actions,
          .cta-actions {
            flex-direction: column;
          }

          .hero-actions .button,
          .cta-actions .button {
            width: 100%;
          }

          .hero-meta {
            width: 100%;
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .hero-meta span {
            white-space: normal;
          }

          .hero-visual {
            min-height: 0;
          }

          .hero-visual-inner {
            min-height: 0;
            padding: 28px;
          }

          .hero-system-row {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .system-chip {
            min-height: 60px;
            padding: 12px 8px;
          }

          .system-chip span,
          .localized-output span {
            display: none;
          }

          .localized-output {
            grid-template-columns: 1fr 1fr;
          }

          .localized-output > div {
            padding: 16px 12px;
          }

          .engine-routes {
            grid-template-columns: 1fr 1fr;
          }

          .summary-section,
          .contents-section,
          .article-section,
          .model-section,
          .flow-section {
            padding-top: 68px;
            padding-bottom: 68px;
          }

          .summary-layout,
          .hybrid-layout,
          .conclusion {
            gap: 34px;
          }

          .section-header {
            margin-bottom: 34px;
          }

          .section-intro,
          .article-copy p,
          .hybrid-copy p,
          .conclusion-copy p,
          .cta-panel p {
            font-size: 17px;
          }

          .recommendation-summary {
            grid-template-columns: 1fr;
          }

          .recommendation-item,
          .recommendation-item:nth-child(4),
          .recommendation-item:nth-child(5) {
            grid-column: 1 / -1;
            border-top: 1px solid var(--border);
            border-left: 0;
          }

          .recommendation-item:first-child {
            border-top: 0;
          }

          .flow-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .flow-stage {
            display: grid;
            min-height: 0;
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            border-left: 1px solid rgba(255, 255, 255, 0.15);
            padding: 22px;
          }

          .flow-number {
            padding-top: 3px;
          }

          .flow-stage h3 {
            margin-top: 0;
          }

          .flow-stage p {
            grid-column: 2;
          }

          .model-side {
            border-radius: 24px;
          }

          .model-visual {
            padding: 24px;
          }

          .model-flow {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .model-step-number {
            top: 50%;
            left: 14px;
            transform: translateY(-50%);
          }

          .model-node {
            min-height: 64px;
            justify-items: start;
            padding: 14px 14px 14px 58px;
            text-align: left;
          }

          .model-details {
            grid-template-columns: 1fr;
          }

          .model-column + .model-column {
            border-top: 1px solid var(--border);
            border-left: 0;
          }

          .model-column,
          .model-note {
            padding-inline: 24px;
          }

          .hybrid-example {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .comparison-values {
            grid-template-columns: 1fr;
          }

          .comparison-value:nth-child(even) {
            border-left: 0;
          }

          .comparison-value {
            min-height: 0;
          }

          .factors-grid,
          .failure-list {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .factor,
          .failure {
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .scenario-header {
            display: none;
          }

          .scenario-row {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 26px 0;
          }

          .scenario-label {
            position: static;
            display: block;
            width: auto;
            height: auto;
            margin: 0 0 6px;
            overflow: visible;
            clip: auto;
            clip-path: none;
            color: var(--magenta);
            font-size: 16px;
            font-weight: 600;
            line-height: 1.45;
            white-space: normal;
          }

          .scenario-route {
            margin-top: 0;
          }

          .roadmap::before {
            left: 24px;
          }

          .roadmap-step {
            grid-template-columns: 50px minmax(0, 1fr);
            gap: 18px;
          }

          .roadmap-number {
            width: 50px;
            height: 50px;
          }

          .faq-item summary {
            min-height: 70px;
            padding-block: 17px;
            font-size: 17px;
          }

          .faq-answer {
            padding-right: 4px;
          }

          .related-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .related-item {
            min-height: 0;
            border-left: 1px solid var(--border);
          }

          .cta-panel {
            padding: 38px 26px;
          }

          .cta-actions .button {
            min-width: 0;
          }
        }

        @media (max-width: 360px) {
          .hero-visual-inner {
            padding: 22px;
          }

          .cta-panel {
            padding-inline: 22px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          *,
          *::before,
          *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Website Localization Guide</p>
            <h1 id="page-title">Website Translation Workflows</h1>
            <p className="hero-deck">
              Compare CMS connectors, translation APIs, website translation proxies, and
              file-based workflows to determine how your content should move through
              translation, review, publishing, and ongoing updates.
            </p>

            <div className="hero-actions">
              <a
                className="button button--primary"
                href={`${CANONICAL}#workflow-comparison`}
              >
                <span>Compare Workflows</span>
                <ArrowIcon />
              </a>
              <a
                className="button button--secondary"
                href="https://www.stepes.com/website-translation-services/"
              >
                <span>Website Translation Services</span>
              </a>
            </div>

            <div className="hero-meta" aria-label="Guide highlights">
              <span>4 Primary Workflow Models</span>
              <span>Workflow Fit Matrix</span>
              <span>10-Step Implementation Roadmap</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Website content moving through translation workflows">
            <div className="hero-visual-inner">
              <div>
                <span className="visual-label">Source Content Systems</span>
                <div className="hero-system-row">
                  <div className="system-chip">
                    <strong>CMS</strong>
                    <span>Pages and metadata</span>
                  </div>
                  <div className="system-chip">
                    <strong>Web Apps</strong>
                    <span>Dynamic experiences</span>
                  </div>
                  <div className="system-chip">
                    <strong>Files</strong>
                    <span>Documents and assets</span>
                  </div>
                </div>
              </div>

              <div className="hero-engine">
                <strong>Website Translation Workflow</strong>
                <span>Routing, language assets, review, quality, and release control</span>
                <div className="engine-routes">
                  <span>Connector</span>
                  <span>API</span>
                  <span>Proxy</span>
                  <span>Files</span>
                </div>
              </div>

              <div>
                <span className="visual-label">Localized Experiences</span>
                <div className="localized-output">
                  <div>
                    <strong>Published Website</strong>
                    <span>Market-ready pages and journeys</span>
                  </div>
                  <div>
                    <strong>Ongoing Updates</strong>
                    <span>New and revised content stays aligned</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell summary-layout">
          <div className="summary-intro">
            <p className="eyebrow">Key Takeaways</p>
            <h2 id="key-takeaways-title">Choose the Architecture Around Your Content</h2>
            <p>
              Workflow technology should support the way your organization creates,
              approves, publishes, and maintains website content—not force every system and
              content type into the same process.
            </p>
          </div>

          <div className="takeaway-list">
            {takeaways.map((item) => (
              <article className="takeaway" key={item.title}>
                <div className="takeaway-icon">
                  <CheckIcon />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contents-section" aria-labelledby="contents-title">
        <div className="shell wide-module">
          <div className="contents-heading">
            <h2 id="contents-title">In This Guide</h2>
          </div>

          <nav className="contents-desktop" aria-label="Guide contents">
            {tocGroups.map((group) => (
              <div className="contents-group" key={group.label}>
                <h3>{group.label}</h3>
                {group.items.map(([label, id]) => (
                  <a key={id} href={`${CANONICAL}#${id}`}>
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>

          <details className="contents-mobile">
            <summary>Browse Guide Sections</summary>
            <nav className="contents-mobile-nav" aria-label="Guide contents">
              {tocGroups.map((group) => (
                <div key={group.label}>
                  <h3>{group.label}</h3>
                  {group.items.map(([label, id]) => (
                    <a key={id} href={`${CANONICAL}#${id}`} onClick={closeMobileContents}>
                      {label}
                    </a>
                  ))}
                </div>
              ))}
            </nav>
          </details>
        </div>
      </section>

      <section
        className="article-section"
        id="choosing-the-right-workflow"
        aria-labelledby="choosing-title"
      >
        <div className="shell">
          <div className="reading reading--wide">
            <SectionHeader
              title="Choosing the Right Website Translation Workflow"
              intro="Website translation technology affects publishing speed, localization quality, multilingual SEO, engineering effort, governance, and the cost of every future update. The right decision begins with your operating model."
            />

            <div className="article-copy">
              <p>
                A website translation workflow defines how content leaves—or is detected
                from—its source environment, how it is translated and reviewed, how the
                approved language returns to production, and how the process responds when
                content changes.
              </p>
              <p>
                The workflow should fit the systems your teams already use, the level of
                technical access available, the frequency of website updates, and the degree
                of control required over publishing and market-specific content. A large
                website does not automatically need the most technically complex integration,
                and a small website can still require sophisticated quality and approval
                controls.
              </p>
              <p>
                Many enterprise websites use a hybrid architecture. The goal is not to select
                one technology for every asset. It is to establish one governed localization
                operation with clear primary and exception routes.
              </p>
            </div>
          </div>

          <div className="wide-module recommendation-summary" aria-label="Workflow recommendations">
            <div className="recommendation-item">
              <span>CMS Connector</span>
              <strong>Structured CMS content</strong>
              <p>Best when editors need localization inside an established CMS workflow.</p>
            </div>
            <div className="recommendation-item">
              <span>Translation API</span>
              <strong>Custom digital platforms</strong>
              <p>Best when engineering teams need flexible, event-driven automation.</p>
            </div>
            <div className="recommendation-item">
              <span>Translation Proxy</span>
              <strong>Rapid multilingual delivery</strong>
              <p>Best when limiting source-system changes is an important requirement.</p>
            </div>
            <div className="recommendation-item">
              <span>File-Based</span>
              <strong>Periodic controlled releases</strong>
              <p>Best when direct integration is unavailable or unnecessary.</p>
            </div>
            <div className="recommendation-item">
              <span>Hybrid</span>
              <strong>Complex enterprise ecosystems</strong>
              <p>Best when content lives across several systems and risk profiles.</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="flow-section"
        id="how-content-moves"
        aria-labelledby="content-flow-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            eyebrow="Shared Workflow Architecture"
            title="How Website Content Moves Through Translation"
            intro="The technical route may change, but a reliable website translation program still needs the same core operational stages."
          />

          <div className="flow-grid">
            {commonStages.map((stage) => (
              <article className="flow-stage" key={stage.number}>
                <span className="flow-number">{stage.number}</span>
                <h3>{stage.title}</h3>
                <p>{stage.text}</p>
              </article>
            ))}
          </div>

          <p className="flow-note">
            The connection between systems is not the complete workflow. Language assets,
            review criteria, exception handling, publishing authority, testing, and reporting
            must travel with the content.
          </p>
        </div>
      </section>

      <section aria-label="Website translation workflow models" id="workflow-models">
        {workflowModels.map((model) => (
          <section
            className="model-section"
            id={
              model.key === "cms"
                ? "cms-connector-workflows"
                : model.key === "api"
                  ? "translation-api-workflows"
                  : model.key === "proxy"
                    ? "website-translation-proxy"
                    : "file-based-workflows"
            }
            aria-labelledby={`${model.key}-title`}
            key={model.key}
          >
            <div className="shell">
              <div className="model-header">
                <div className="model-heading">
                  <p className="eyebrow">{model.eyebrow}</p>
                  <h2 id={`${model.key}-title`}>{model.title}</h2>
                </div>
                <div className="model-overview">
                  <p className="section-intro">{model.summary}</p>
                  <div className="best-fit">
                    <strong>Best Suited To</strong>
                    <p>{model.bestFor}</p>
                  </div>
                </div>
              </div>

              <div className="model-side">
                <WorkflowVisual model={model} />
                <div className="model-details">
                  <div className="model-column">
                    <h3>Strengths</h3>
                    <ul className="clean-list">
                      {model.strengths.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="model-column">
                    <h3>Planning Considerations</h3>
                    <ul className="clean-list">
                      {model.considerations.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="model-note">{model.note}</p>
              </div>
            </div>
          </section>
        ))}
      </section>

      <section
        className="article-section article-section--blush"
        id="hybrid-workflows"
        aria-labelledby="hybrid-title"
      >
        <div className="shell hybrid-layout">
          <div className="hybrid-copy">
            <p className="eyebrow">Enterprise Architecture</p>
            <h2 id="hybrid-title">When a Hybrid Workflow Works Better</h2>
            <p className="section-intro">
              Enterprise websites rarely consist of one platform, one content owner, and one
              level of risk. A hybrid model can standardize governance while allowing the
              technical route to vary by content source and purpose.
            </p>
            <p>
              The primary workflow should process the majority of content efficiently. Clear
              exception routes then handle documents, campaigns, regulated material,
              application strings, urgent corrections, and systems that cannot use the main
              connection.
            </p>
          </div>

          <div className="hybrid-examples" aria-label="Hybrid workflow examples">
            <article className="hybrid-example">
              <strong>CMS + API</strong>
              <p>
                Use the CMS connector for marketing pages and an API for product catalogs,
                dynamic applications, or headless services.
              </p>
            </article>
            <article className="hybrid-example">
              <strong>Proxy + CMS</strong>
              <p>
                Use a proxy for rapid deployment, then move priority content into deeper CMS
                localization as the market program matures.
              </p>
            </article>
            <article className="hybrid-example">
              <strong>API + Files</strong>
              <p>
                Automate digital content through the API while routing legal documents,
                PDFs, or special formats through controlled file-based projects.
              </p>
            </article>
            <article className="hybrid-example">
              <strong>Automation + Specialist Review</strong>
              <p>
                Route low-risk content through automated translation and apply professional
                or subject-matter review to brand, technical, legal, medical, or regulated
                pages.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="workflow-comparison"
        aria-labelledby="comparison-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            title="Website Translation Workflow Comparison"
            intro="Use this comparison as a starting point. Actual capability depends on the CMS, connector, API design, proxy architecture, website implementation, and operating model."
            centered
          />

          <div className="comparison-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th scope="col">Decision Criterion</th>
                  <th scope="col">CMS Connector</th>
                  <th scope="col">Translation API</th>
                  <th scope="col">Translation Proxy</th>
                  <th scope="col">File-Based</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.criterion}>
                    <th scope="row">{row.criterion}</th>
                    <td>{row.cms}</td>
                    <td>{row.api}</td>
                    <td>{row.proxy}</td>
                    <td>{row.files}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="comparison-mobile">
            {comparisonRows.map((row) => (
              <article className="comparison-record" key={row.criterion}>
                <h3>{row.criterion}</h3>
                <div className="comparison-values">
                  <div className="comparison-value">
                    <span>CMS Connector</span>
                    <p>{row.cms}</p>
                  </div>
                  <div className="comparison-value">
                    <span>Translation API</span>
                    <p>{row.api}</p>
                  </div>
                  <div className="comparison-value">
                    <span>Translation Proxy</span>
                    <p>{row.proxy}</p>
                  </div>
                  <div className="comparison-value">
                    <span>File-Based</span>
                    <p>{row.files}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="table-note">
            A “low” deployment effort can still require substantial content planning,
            localization testing, SEO validation, security review, and governance. Technical
            effort and total operational effort are not the same.
          </p>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="workflow-fit-framework"
        aria-labelledby="fit-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            title="The Website Translation Workflow Fit Framework"
            intro="Evaluate each option against six practical decision factors before selecting the architecture. These criteria help prevent a technically convenient choice from becoming an operational constraint."
            centered
          />

          <div className="factors-grid">
            {decisionFactors.map((factor) => (
              <article className="factor" key={factor.title}>
                <h3>{factor.title}</h3>
                <p>{factor.text}</p>
                <p className="factor-question">{factor.question}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="scenario-recommendations"
        aria-labelledby="scenario-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            title="Scenario-Based Workflow Recommendations"
            intro="These routes are practical starting points rather than rigid rules. Validate them against your systems, security requirements, quality model, SEO strategy, and publishing responsibilities."
          />

          <div className="scenario-list">
            <div className="scenario-header" aria-hidden="true">
              <span>Website Scenario</span>
              <span>Recommended Starting Route</span>
              <span>Implementation Consideration</span>
            </div>
            {scenarios.map((item) => (
              <article className="scenario-row" key={item.scenario}>
                <h3>{item.scenario}</h3>
                <div>
                  <span className="scenario-label">Recommended Starting Route</span>
                  <p className="scenario-route">{item.route}</p>
                </div>
                <div>
                  <span className="scenario-label">Implementation Consideration</span>
                  <p>{item.qualification}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="flow-section"
        id="quality-security-governance"
        aria-labelledby="governance-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            eyebrow="Enterprise Requirements"
            title="Quality, Security, and Governance Across Every Workflow"
            intro="A connection can move content, but it cannot define acceptable quality, protect access, or assign accountability. Those controls must be designed into the operating model."
          />

          <div className="governance-panel">
            {governanceGroups.map((group) => {
              const type =
                group.title === "Quality Controls"
                  ? "quality"
                  : group.title === "Security Controls"
                    ? "security"
                    : "governance";
              return (
                <article className="governance-column" key={group.title}>
                  <div className="governance-head">
                    <div className="governance-icon">
                      <RouteIcon type={type} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="clean-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="implementation-roadmap"
        aria-labelledby="roadmap-title"
      >
        <div className="shell">
          <SectionHeader
            title="A 10-Step Implementation Roadmap"
            intro="Move from system inventory to a controlled pilot before scaling. The roadmap should validate the content, technical, quality, publishing, and governance model together."
            centered
          />

          <div className="roadmap">
            {implementationSteps.map((step, index) => (
              <article className="roadmap-step" key={step.title}>
                <div className="roadmap-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="roadmap-content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section article-section--soft"
        id="common-workflow-failures"
        aria-labelledby="failures-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            title="Common Website Translation Workflow Failures"
            intro="Most workflow problems are not caused by translation alone. They result from incomplete content scope, unclear ownership, weak context, missing exception paths, or a failure to plan for ongoing change."
            centered
          />

          <div className="failure-list">
            {failures.map((failure) => (
              <article className="failure" key={failure.title}>
                <h3>{failure.title}</h3>
                <p>{failure.text}</p>
                <div className="better-approach">
                  <span>Better Approach</span>
                  <strong>{failure.better}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="frequently-asked-questions"
        aria-labelledby="faq-title"
      >
        <div className="shell reading reading--wide">
          <SectionHeader
            title="Frequently Asked Questions"
            intro="Use these answers to clarify the most common technical and operational decisions before selecting a website translation workflow."
          />

          <div className="faq-panel">
            {faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>
                  <span>{item.q}</span>
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p className="faq-answer">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="article-section article-section--blush" aria-labelledby="conclusion-title">
        <div className="shell conclusion">
          <div>
            <h2 id="conclusion-title">Select the Workflow That Fits Your Operating Model</h2>
          </div>

          <div className="conclusion-copy">
            <p>
              CMS connectors, translation APIs, website translation proxies, and file-based
              processes are not competing versions of the same solution. Each creates a
              different relationship among your content systems, translation operation,
              reviewers, publishers, and localized website.
            </p>
            <p>
              The strongest architecture handles the majority of content efficiently,
              preserves clear ownership, routes exceptions intelligently, supports
              multilingual quality and SEO, and remains manageable as markets and content
              volumes grow.
            </p>
            <p className="conclusion-rule">
              Choose one governed operating model, then use the technical routes that best
              serve each content source and risk level.
            </p>
          </div>
        </div>
      </section>

      <section
        className="article-section"
        id="related-guides"
        aria-labelledby="related-title"
      >
        <div className="shell wide-module">
          <SectionHeader
            title="Continue Planning Your Multilingual Website"
            intro="Explore the next guide that matches your current decision—from scope and AI quality routing to testing, SEO, and continuous localization."
          />

          <div className="related-grid">
            {relatedResources.map((resource) => (
              <a className="related-item" href={resource.url} key={resource.title}>
                <span className="related-category">{resource.category}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <span className="related-arrow">
                  <ArrowIcon />
                </span>
              </a>
            ))}
          </div>

          <div className="upward-links">
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/">
              Explore Localization Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/guides/">
              Browse All Guides
            </EditorialLink>
            <EditorialLink href="https://www.stepes.com/resources/">
              Visit the Resource Center
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div>
              <h2 id="cta-title">Plan a Website Translation Workflow That Scales</h2>
              <p>
                Stepes can help you assess your content systems, define quality and review
                routes, select the right integration model, pilot representative content, and
                build an operating process for launch and ongoing updates.
              </p>
            </div>

            <div className="cta-actions">
              <a
                className="button button--primary"
                href="https://www.stepes.com/contact-us/"
              >
                <span>Plan Your Workflow</span>
                <ArrowIcon />
              </a>
              <a
                className="button button--secondary"
                href="https://www.stepes.com/website-translation-services/"
              >
                <span>Website Translation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
