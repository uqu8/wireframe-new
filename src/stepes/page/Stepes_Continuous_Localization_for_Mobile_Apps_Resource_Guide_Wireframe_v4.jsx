import React, { useEffect, useMemo, useState } from "react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/continuous-localization-for-mobile-apps/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const links = {
  home: "https://www.stepes.com/",
  resources: "https://www.stepes.com/resources/",
  localizationGuides: "https://www.stepes.com/resources/localization-guides/",
  appLocalization: "https://www.stepes.com/app-localization-services/",
  softwareLocalizationApi:
    "https://www.stepes.com/developers/software-localization-api/",
  prepareApp:
    "https://www.stepes.com/resources/localization-guides/how-to-prepare-an-app-for-localization/",
  iosGuide:
    "https://www.stepes.com/resources/localization-guides/ios-app-localization-guide/",
  androidGuide:
    "https://www.stepes.com/resources/localization-guides/android-app-localization-guide/",
  testingChecklist:
    "https://www.stepes.com/resources/localization-guides/mobile-app-localization-testing-checklist/",
  costGuide:
    "https://www.stepes.com/resources/localization-guides/app-localization-cost-guide/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  aiHuman:
    "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  security: "https://www.stepes.com/security/",
  contact: "https://www.stepes.com/contact-us/",
  quote: "https://app.stepes.com/quote/",
};

const breadcrumbs = [
  { label: "Home", href: links.home },
  { label: "Resources", href: links.resources },
  { label: "Localization Guides", href: links.localizationGuides },
  { label: "Continuous Localization for Mobile Apps", current: true },
];

const tocItems = [
  { id: "what-is-continuous-localization", label: "What Is Continuous Localization?" },
  { id: "why-traditional-workflows-break", label: "Why Traditional Workflows Break" },
  { id: "agile-ci-cd", label: "Agile, CI, and CD" },
  { id: "continuous-localization-lifecycle", label: "The Continuous Localization Lifecycle" },
  { id: "prepare-before-automating", label: "Prepare Before Automating" },
  { id: "integration-models", label: "Choose an Integration Model" },
  { id: "branch-version-strategy", label: "Branch and Version Strategy" },
  { id: "platform-workflows", label: "iOS, Android, and Cross-Platform" },
  { id: "context-engineering", label: "Build Context Into Every String" },
  { id: "language-assets-ai", label: "Translation Memory, Terminology, and AI" },
  { id: "review-governance", label: "Review and Governance" },
  { id: "quality-gates", label: "Automated Quality Gates" },
  { id: "continuous-testing", label: "Testing Across Releases" },
  { id: "complete-mobile-experience", label: "The Complete Mobile Experience" },
  { id: "release-cadence", label: "Release Cadence" },
  { id: "security-auditability", label: "Security and Auditability" },
  { id: "localization-metrics", label: "Measure Release Readiness" },
  { id: "emerging-trends", label: "Emerging Trends" },
  { id: "two-week-example", label: "Illustrative Two-Week Release" },
  { id: "implementation-roadmap", label: "Implementation Roadmap" },
  { id: "readiness-checklist", label: "Readiness Checklist" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "how-stepes-supports", label: "How Stepes Supports the Workflow" },
  { id: "continuous-localization-faq", label: "FAQs" },
];

const takeaways = [
  {
    title: "Localize changes, not complete files",
    text: "Detect new, modified, renamed, and deleted resources while preserving approved translations for content that has not changed.",
  },
  {
    title: "Make context part of the workflow",
    text: "Pair strings with meaningful keys, screenshots, component details, placeholder definitions, and release information.",
  },
  {
    title: "Reuse approved language first",
    text: "Apply Translation Memory and governed terminology before routing content to AI, translators, reviewers, or subject-matter experts.",
  },
  {
    title: "Route quality according to risk",
    text: "Use stronger professional and product validation for high-visibility, transactional, regulated, or safety-related content.",
  },
  {
    title: "Treat QA as a release gate",
    text: "Validate placeholders, markup, plurals, default resources, locale completeness, and technical file integrity before build delivery.",
  },
  {
    title: "Make locale readiness visible",
    text: "Give product and release teams a clear view of translation, review, QA, testing, and final approval for every required locale.",
  },
];

const projectComparison = [
  ["Starts near release", "Operates throughout development"],
  ["Manual file exchange", "Connected or synchronized resources"],
  ["Processes complete files", "Focuses on new and changed content"],
  ["Large review cycle", "Incremental, risk-based review"],
  ["Testing begins late", "Ongoing validation across development"],
  ["Status is tracked by project", "Readiness is tracked by locale and release"],
];

const deliveryModels = [
  ["Traditional localization", "Translation is managed as a defined project", "Fixed or infrequent releases"],
  ["Agile localization", "Localization work is organized around iterative development", "Sprint-based planning and smaller batches"],
  ["Continuous localization", "Content changes move through a connected recurring workflow", "Translation, review, QA, and delivery alongside development"],
  ["Continuous integration", "Changes are regularly merged and automatically validated", "Localization checks can become part of build validation"],
  ["Continuous delivery", "Software remains ready for controlled release", "Approved locale resources can remain release ready"],
  ["Continuous deployment", "Qualified changes may be released automatically", "Use only where language and product governance permit it"],
];

const lifecycleStages = [
  {
    title: "Connect",
    text: "Map source resources, target locales, branches, language assets, review rules, security, and delivery destinations.",
  },
  {
    title: "Detect",
    text: "Identify new, modified, renamed, deleted, or context-changed strings without reprocessing unchanged content.",
  },
  {
    title: "Reuse",
    text: "Apply approved Translation Memory, product terminology, market rules, and previously validated language.",
  },
  {
    title: "Review",
    text: "Route content to the professional, product, regional, legal, or subject-matter review it requires.",
  },
  {
    title: "Release",
    text: "Return validated resources to the correct build, branch, API, store workflow, or delivery destination.",
  },
];

const integrationRows = [
  ["API", "Higher", "Higher", "Very high", "Large or customized programs"],
  ["Repository", "Medium to high", "Medium to high", "High", "Development-led teams"],
  ["Webhook / event", "Medium", "Medium", "High", "Connected asynchronous workflows"],
  ["Scheduled synchronization", "Medium", "Low to medium", "Moderate", "Predictable release cycles"],
  ["Managed file exchange", "Low", "Low", "Moderate", "Teams standardizing a recurring process"],
  ["Hybrid", "Variable", "Variable", "High", "Enterprise programs with mixed requirements"],
];

const branchSteps = [
  {
    label: "Feature Branch",
    detail: "New or changed resources enter development with context and ownership.",
  },
  {
    label: "Localization Workflow",
    detail: "Changes are detected, reused, translated, reviewed, and technically validated.",
  },
  {
    label: "Release Branch",
    detail: "Approved resources are mapped to the release candidate and string-freeze rules.",
  },
  {
    label: "Localized Build",
    detail: "Targeted testing confirms the affected screens, journeys, locales, and devices.",
  },
];

const riskRoutes = [
  ["Internal diagnostic text", "Automated translation and QA where appropriate", "Low user visibility and controlled use"],
  ["Standard interface labels", "Translation Memory and AI-assisted translation with linguistic review", "Common patterns still require context"],
  ["Onboarding and high-visibility content", "Professional translation with product or brand review", "First-use experience and market perception"],
  ["Transactional or irreversible actions", "Strong contextual and product validation", "Errors can affect user decisions or account activity"],
  ["Legal, medical, financial, safety, or regulated content", "Subject-matter translation and controlled approval", "Higher consequence of error and governance needs"],
];

const roleRows = [
  ["Prepare source resources", "Support", "Own", "Consulted", "Informed"],
  ["Translate and perform linguistic QA", "Own", "Consulted", "Consulted", "Informed"],
  ["Validate product meaning", "Support", "Own", "Consulted", "Informed"],
  ["Approve market language", "Support", "Consulted", "Own where assigned", "Informed"],
  ["Confirm technical readiness", "Support", "Own", "Informed", "Consulted"],
  ["Authorize release", "Informed", "Consulted", "Informed", "Own"],
];

const qualityGateGroups = [
  {
    title: "Structural Checks",
    items: [
      "Valid XML, JSON, YAML, ARB, RESX, or other required syntax",
      "Required keys, default resources, file encoding, and locale codes",
      "No duplicate keys, empty required values, or invalid resource names",
    ],
  },
  {
    title: "Placeholder and Markup Checks",
    items: [
      "No missing, added, or renamed runtime variables",
      "Valid placeholder order where order is significant",
      "Balanced tags, protected markup, and correct escape sequences",
    ],
  },
  {
    title: "Language-Resource Checks",
    items: [
      "Required plural and select variants are present",
      "No mixed-language, untranslated, or terminology-conflicting strings",
      "Length, numbers, punctuation, and character rules remain valid",
    ],
  },
];

const releaseRows = [
  ["Monthly release", "Planned batch with a defined string freeze", "Release-candidate approval"],
  ["Two-week sprint", "Incremental localization during development", "Sprint localization cutoff"],
  ["Weekly release", "Frequent detection and rolling review", "Weekly locale-readiness gate"],
  ["Daily content update", "High automation with risk-based routing", "Automated QA and selective review"],
  ["Emergency hotfix", "Limited, expedited language scope", "Named release approver"],
  ["App-store submission cycle", "Coordinate app resources and store content", "Submission-readiness review"],
];

const metrics = [
  {
    title: "Workflow",
    items: [
      "Source change to approved translation",
      "Reviewer turnaround and clarification time",
      "Late strings, reopened translations, and integration failures",
    ],
  },
  {
    title: "Quality",
    items: [
      "Technical and placeholder defect rates",
      "Terminology compliance and linguistic defect rate",
      "Defects found before build versus after release",
    ],
  },
  {
    title: "Reuse and Efficiency",
    items: [
      "Translation Memory leverage and new-versus-reused content",
      "Context completeness and changed-content review coverage",
      "Cost per locale, release, and engineering support effort",
    ],
  },
  {
    title: "Release Readiness",
    items: [
      "Locales ready on schedule",
      "Localization-related release delays",
      "Locale parity across iOS, Android, and supporting content",
    ],
  },
];

const timeline = [
  ["Days 1–3", "Development", "New strings enter a feature branch with stable keys, comments, character limits, and design references."],
  ["Day 3", "Detection", "The workflow identifies new, modified, context-changed, and removed resources without disturbing approved content."],
  ["Days 3–5", "Reuse and Translation", "Translation Memory and terminology are applied. Routine UI content follows an AI-assisted route; sensitive security messages go to specialist linguists."],
  ["Days 5–7", "Review", "Regional reviewers evaluate changed customer-facing content. Product decisions are captured for future reuse."],
  ["Days 7–8", "Quality Assurance", "Automated checks identify a placeholder mismatch, length exceptions, and a missing plural variant before build delivery."],
  ["Days 8–9", "Build and Testing", "Approved resources enter the release candidate for targeted linguistic, functional, device, and locale testing."],
  ["Day 10", "Release Readiness", "Every required locale has completed translation, approval, critical QA resolution, testing, and release authorization."],
];

const roadmap = [
  ["Assess", "Map systems, files, release cadence, existing assets, repeated manual work, security, and approval requirements."],
  ["Standardize", "Externalize text, stabilize keys, define locales, clean resources, consolidate language assets, and assign ownership."],
  ["Pilot", "Select one application, feature, or release; connect one source; limit the language scope; and define success measures."],
  ["Automate", "Add synchronization, event triggers, technical QA, status reporting, and build or test handoffs."],
  ["Govern", "Establish review routing, release blockers, access controls, fallback behavior, escalation, and final approval."],
  ["Scale", "Add languages, products, repositories, screenshots, store content, and risk-based AI and review routing."],
  ["Optimize", "Use metrics and defect history to improve context, reuse, reviewer performance, testing, cost, and turnaround."],
];

const checklistGroups = [
  {
    title: "Application Readiness",
    items: [
      "Customer-facing text is externalized.",
      "Translation keys are stable and meaningful.",
      "Default resources are complete.",
      "Source and target locales are defined.",
      "Variables, placeholders, plural rules, and select structures are documented.",
      "RTL behavior, locale formats, and accessibility content are included.",
    ],
  },
  {
    title: "Context and Language Assets",
    items: [
      "Developer comments and visual references can be supplied.",
      "Character limits are documented where relevant.",
      "Existing translations have been assessed.",
      "Translation Memory is available or planned.",
      "Product terminology has defined ownership.",
      "Market-specific language variants are documented.",
    ],
  },
  {
    title: "Integration and Versioning",
    items: [
      "One system is designated as the source of truth.",
      "Repository and branch policies are documented.",
      "New, modified, renamed, and deleted strings can be identified reliably.",
      "The delivery destination and error escalation path are confirmed.",
      "Hotfix and rollback handling are documented.",
    ],
  },
  {
    title: "Review and Release",
    items: [
      "Review roles are assigned by language and content type.",
      "Review deadlines align with release milestones.",
      "Required QA checks and release blockers are defined.",
      "Fallback behavior and testing ownership are approved.",
      "App-store content is included in release planning.",
      "Locale readiness is visible to the release team.",
    ],
  },
  {
    title: "Security and Measurement",
    items: [
      "Integration credentials follow least-privilege practices.",
      "Development, staging, and production environments are separated.",
      "Translation, review, approval, and export changes are auditable.",
      "Workflow, quality, reuse, and release metrics are defined.",
      "The program includes a review-and-improvement cycle after releases.",
    ],
  },
];

const mistakes = [
  ["Automating an unprepared source", "Complete an internationalization and resource-readiness review before connecting the workflow."],
  ["Processing every file after every code change", "Trigger localization only when relevant resources, metadata, branches, or release states change."],
  ["Treating two systems as the source of truth", "Define authoritative ownership and synchronization direction for each resource type."],
  ["Retranslating unchanged content", "Preserve approved translations and use controlled change detection."],
  ["Sending strings without context", "Include keys, screenshots, user actions, placeholders, constraints, and neighboring content."],
  ["Localizing unstable branches too early", "Define when a branch becomes eligible and how experimental or abandoned features are handled."],
  ["Ignoring renamed and deleted keys", "Establish archival, renaming, mapping, and reintroduction policies."],
  ["Applying the same review to every string", "Route content according to visibility, complexity, market, and consequence of error."],
  ["Treating automated QA as linguistic approval", "Combine technical validation with professional judgment when meaning and audience fit matter."],
  ["Testing only after every language is complete", "Use pseudolocalization, context review, and targeted testing throughout development."],
  ["Ignoring store and server-driven content", "Coordinate the full mobile experience under one release plan."],
  ["Measuring speed without readiness", "Track approval, QA, testing, and release status—not only translation throughput."],
];

const faqs = [
  {
    q: "What is continuous localization for mobile apps?",
    a: "Continuous localization is a recurring workflow that identifies new and modified app content, applies approved language assets, coordinates translation and review, validates technical quality, and returns localized resources according to the product’s development and release cadence.",
  },
  {
    q: "How is continuous localization different from agile localization?",
    a: "Agile localization organizes translation around iterative development, often through sprints. Continuous localization goes further by connecting change detection, translation, review, QA, delivery, and status reporting through an ongoing workflow.",
  },
  {
    q: "Do we need a CI/CD pipeline to get started?",
    a: "No. Teams can begin with structured resources, scheduled synchronization, reliable change tracking, and repeatable review and delivery. CI/CD integration becomes more valuable as release frequency, language scale, and automation needs grow.",
  },
  {
    q: "Can we start continuous localization without an API?",
    a: "Yes. Repository workflows, scheduled synchronization, structured file exchange, and managed handoffs can all support continuous localization. An API is most useful when systems require programmatic submission, monitoring, event handling, or delivery.",
  },
  {
    q: "How often should mobile resources be synchronized?",
    a: "The right frequency depends on release cadence and content stability. Teams may synchronize after relevant pull requests, once per day, weekly, or at defined sprint milestones. Avoid triggering localization for unrelated code changes.",
  },
  {
    q: "Can iOS and Android use the same localization workflow?",
    a: "Yes. They can share Translation Memory, terminology, reviewers, governance, and reporting. Their resource formats, store content, platform behavior, and testing requirements should still be handled appropriately.",
  },
  {
    q: "What happens when a source string changes after translation?",
    a: "The workflow should flag affected translations according to the nature of the change. Some may remain valid, some may require review, and others may need full retranslation. The previous approved version should remain in history.",
  },
  {
    q: "Which localization issues should block a release?",
    a: "Typical blockers include missing required translations, malformed resources, critical placeholder errors, incomplete mandatory plurals, serious meaning errors, unresolved required approvals, and failures in high-risk user journeys.",
  },
  {
    q: "How should emergency hotfixes be handled?",
    a: "Use a predefined expedited path with limited scope, identified languages, minimum review, approved fallback behavior, targeted testing, named release authority, and post-release reconciliation across active branches.",
  },
  {
    q: "Can AI translation be used safely in a continuous workflow?",
    a: "Yes, when it is supported by context, Translation Memory, terminology, technical QA, and review appropriate to the content. High-visibility, regulated, transactional, safety-related, or ambiguous content generally requires stronger professional validation.",
  },
  {
    q: "How can regional reviewers participate without delaying releases?",
    a: "Give reviewers small change-based batches, useful context, clear deadlines, defined authority, and an escalation path. Focus review on meaningful market and product issues rather than undocumented stylistic preferences.",
  },
  {
    q: "What metrics should continuous localization teams track?",
    a: "Useful measures include localization lead time, reviewer turnaround, Translation Memory leverage, context completeness, technical and linguistic defect rates, locale readiness, and localization-related release delays.",
  },
  {
    q: "How long does implementation take?",
    a: "Timing depends on resource readiness, platforms, file structure, languages, repositories, review rules, security, testing, and the desired level of automation. A limited pilot can establish the operating model before expansion.",
  },
  {
    q: "How does Stepes support continuous mobile localization?",
    a: "Stepes supports connected resource workflows, change-based processing, Translation Memory, Terminology Management, AI-assisted translation, professional linguistic review, technical QA, multilingual testing, security controls, and release-ready delivery.",
  },
];

const relatedResources = [
  {
    title: "How to Prepare an App for Localization",
    href: links.prepareApp,
    text: "Plan internationalization, resource readiness, context, terminology, testing, and release requirements before translation begins.",
    action: "Read the Preparation Guide",
  },
  {
    title: "iOS App Localization Guide",
    href: links.iosGuide,
    text: "Review String Catalogs, plural behavior, contextual translation, accessibility content, testing, and App Store localization.",
    action: "Read the iOS Guide",
  },
  {
    title: "Android App Localization Guide",
    href: links.androidGuide,
    text: "Understand Android resources, locale directories, Jetpack Compose, per-app languages, pseudolocalization, and Google Play content.",
    action: "Read the Android Guide",
  },
  {
    title: "Mobile App Localization Testing Checklist",
    href: links.testingChecklist,
    text: "Validate linguistic, visual, functional, locale, RTL, accessibility, device, and regression quality.",
    action: "Use the Testing Checklist",
  },
  {
    title: "App Localization Cost Guide",
    href: links.costGuide,
    text: "Understand how languages, repetition, engineering, context, review, testing, and turnaround influence budget.",
    action: "Review App Localization Costs",
  },
  {
    title: "App Localization Services",
    href: links.appLocalization,
    text: "Explore end-to-end support for iOS, Android, and cross-platform mobile products.",
    action: "Explore App Localization Services",
  },
];

const sources = [
  {
    org: "Apple Developer",
    title: "Localizing and Varying Text With a String Catalog",
    href: "https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog",
  },
  {
    org: "Apple Developer",
    title: "Localizing Your App Using Agents",
    href: "https://developer.apple.com/documentation/xcode/localizing-your-app-using-agents",
  },
  {
    org: "Android Developers",
    title: "Localize Your App",
    href: "https://developer.android.com/guide/topics/resources/localization",
  },
  {
    org: "Android Developers",
    title: "Per-App Language Preferences",
    href: "https://developer.android.com/guide/topics/resources/app-languages",
  },
  {
    org: "Android Developers",
    title: "Test With Pseudolocales",
    href: "https://developer.android.com/guide/topics/resources/pseudolocales",
  },
  {
    org: "GitHub Docs",
    title: "Events That Trigger Workflows",
    href: "https://docs.github.com/actions/using-workflows/events-that-trigger-workflows",
  },
  {
    org: "Unicode CLDR",
    title: "Plural Rules",
    href: "https://cldr.unicode.org/index/cldr-spec/plural-rules",
  },
  {
    org: "Flutter",
    title: "Internationalizing Flutter Apps",
    href: "https://docs.flutter.dev/ui/internationalization",
  },
  {
    org: "Microsoft Learn",
    title: ".NET MAUI Localization",
    href: "https://learn.microsoft.com/en-us/dotnet/maui/fundamentals/localization",
  },
  {
    org: "Stepes",
    title: "App Localization Services",
    href: links.appLocalization,
  },
  {
    org: "Stepes",
    title: "Software Localization API",
    href: links.softwareLocalizationApi,
  },
  {
    org: "Stepes",
    title: "AI + Human Translation Workflows",
    href: links.aiHuman,
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
    >
      <path d="M4 10h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m11 6 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none">
      <path
        d={open ? "m5 12 5-5 5 5" : "m5 8 5 5 5-5"}
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
    <svg aria-hidden="true" viewBox="0 0 20 20" width="20" height="20" fill="none">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="m6.6 10.1 2.1 2.2 4.8-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" width="16" height="16" fill="none">
      <path d="M11 4h5v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="m9 11 7-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M16 11v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ButtonLink({ href, children, variant = "primary" }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function EditorialLink({ href, children, external = false }) {
  return (
    <a
      className="editorial-link"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>{children}</span>
      {external ? <ExternalIcon /> : <ArrowIcon />}
    </a>
  );
}

function SectionHeading({ id, eyebrow, title, intro }) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function DataTable({ headers, rows, caption }) {
  return (
    <figure className="table-figure">
      {caption ? <figcaption>{caption}</figcaption> : null}
      <div className="table-frame">
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header} scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={`${row[0]}-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td key={`${cellIndex}-${cell}`} data-label={headers[cellIndex]}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

function LifecycleDiagram() {
  return (
    <div className="lifecycle" aria-label="Continuous localization lifecycle">
      {lifecycleStages.map((stage, index) => (
        <div className="lifecycle-stage" key={stage.title}>
          <span className="stage-number" aria-hidden="true">{index + 1}</span>
          <h3>{stage.title}</h3>
          <p>{stage.text}</p>
        </div>
      ))}
    </div>
  );
}

function BranchFlow() {
  return (
    <div className="branch-flow" aria-label="Feature branch to localized build workflow">
      {branchSteps.map((step, index) => (
        <div className="branch-step" key={step.label}>
          <span className="branch-index" aria-hidden="true">{index + 1}</span>
          <div>
            <h3>{step.label}</h3>
            <p>{step.detail}</p>
          </div>
        </div>
      ))}
      <div className="hotfix-path">
        <span className="eyebrow eyebrow-inline">Expedited hotfix path</span>
        <p>Limit scope, name the approver, apply focused review and testing, then reconcile the change with active branches.</p>
      </div>
    </div>
  );
}

function ChecklistGroup({ title, items }) {
  return (
    <section className="checklist-group" aria-labelledby={`checklist-${title.replace(/\s+/g, "-").toLowerCase()}`}>
      <h3 id={`checklist-${title.replace(/\s+/g, "-").toLowerCase()}`}>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <span className="check-icon"><CheckIcon /></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function FAQPanel() {
  const [openItems, setOpenItems] = useState(() => new Set([0]));

  const toggle = (index) => {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  return (
    <div className="faq-panel">
      {faqs.map((item, index) => {
        const open = openItems.has(index);
        const buttonId = `faq-button-${index}`;
        const panelId = `faq-panel-${index}`;
        return (
          <div className="faq-item" key={item.q}>
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <ChevronIcon open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              className="faq-answer"
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
            >
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ContinuousLocalizationMobileAppsGuide() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeId, setActiveId] = useState(tocItems[0].id);

  const observedIds = useMemo(() => tocItems.map((item) => item.id), []);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return undefined;

    const elements = observedIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: [0, 0.1, 0.25] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [observedIds]);

  return (
    <main className="stepes-guide">
      <style>{styles}</style>

      <section className="hero-wrap">
        <div className="shell">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              {breadcrumbs.map((item, index) => (
                <li key={item.label}>
                  {index > 0 ? <span className="breadcrumb-separator" aria-hidden="true">›</span> : null}
                  {item.current ? (
                    <span className="breadcrumb-current" aria-current="page">{item.label}</span>
                  ) : (
                    <a href={item.href}>{item.label}</a>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">APP LOCALIZATION GUIDE</p>
              <h1>Continuous Localization for Mobile Apps: An Agile CI/CD Guide</h1>
              <p className="hero-deck">
                Learn how to connect mobile app translation, professional review, quality assurance, testing, and delivery with repositories, APIs, CI/CD pipelines, and recurring iOS and Android releases.
              </p>
              <div className="hero-meta" aria-label="Guide information">
                <span>Workflow &amp; Technology Guide</span>
                <span aria-hidden="true">•</span>
                <span>For product, engineering, localization, and release teams</span>
              </div>
              <div className="hero-actions">
                <ButtonLink href={sectionUrl("what-is-continuous-localization")}>Explore the Guide</ButtonLink>
                <ButtonLink href={sectionUrl("readiness-checklist")} variant="secondary">Jump to the Checklist</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="summary-section" aria-labelledby="key-takeaways-title">
        <div className="shell summary-shell">
          <div className="summary-lead">
            <p className="eyebrow">KEY TAKEAWAYS</p>
            <h2 id="key-takeaways-title">Build Localization Into the Product Lifecycle</h2>
            <p>
              Continuous localization is not simply smaller translation batches. It is an operating model that keeps language resources, quality decisions, and release status aligned with product development.
            </p>
          </div>
          <div className="takeaways-list">
            {takeaways.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="shell article-shell">
        <aside className="toc" aria-label="Guide navigation">
          <button
            type="button"
            className="toc-toggle"
            aria-expanded={tocOpen}
            aria-controls="guide-toc-list"
            onClick={() => setTocOpen((value) => !value)}
          >
            <span>In This Guide</span>
            <ChevronIcon open={tocOpen} />
          </button>
          <div id="guide-toc-list" className={`toc-list ${tocOpen ? "is-open" : ""}`}>
            <p className="toc-title">In This Guide</p>
            <ol>
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={sectionUrl(item.id)}
                    className={activeId === item.id ? "active" : ""}
                    aria-current={activeId === item.id ? "location" : undefined}
                    onClick={() => setTocOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        <article className="article-content">
          <section className="chapter first-chapter">
            <SectionHeading
              id="what-is-continuous-localization"
              title="What Is Continuous Localization?"
              intro="Continuous localization coordinates product-content changes with language assets, professional judgment, technical validation, and release delivery."
            />
            <p>
              It identifies new or modified product content, supplies the context needed to translate it correctly, applies approved language assets, manages translation and review, validates technical integrity, and returns release-ready resources according to the application’s development cadence.
            </p>
            <p>
              The objective is not simply to translate faster. It is to keep each supported locale aligned with the correct product version while maintaining quality, technical validity, review control, and release visibility.
            </p>

            <div className="three-points">
              <article>
                <h3>More Than Frequent Translation</h3>
                <p>Sending files every two weeks is not continuous localization unless the workflow understands what changed, what can be reused, and what still requires review.</p>
              </article>
              <article>
                <h3>Automation With Control</h3>
                <p>Synchronization, AI assistance, and technical checks can be automated while linguistic, product, legal, or regional approvals remain required.</p>
              </article>
              <article>
                <h3>A Gradual Operating Model</h3>
                <p>Teams can begin with structured files and scheduled synchronization, then add APIs, repositories, webhooks, and CI/CD gates as the program matures.</p>
              </article>
            </div>

            <DataTable
              caption="Project-based and continuous localization solve different operational needs."
              headers={["Project-Based Localization", "Continuous Localization"]}
              rows={projectComparison}
            />
          </section>

          <section className="chapter">
            <SectionHeading
              id="why-traditional-workflows-break"
              title="Why Traditional Mobile Localization Workflows Break Down"
              intro="End-of-cycle localization becomes difficult to sustain when several product teams are developing features in parallel and content continues to change during the release cycle."
            />
            <p>
              A familiar workflow begins after design and engineering are almost complete. Resource files are exported, translations are reviewed in spreadsheets, and localized resources are imported into a release candidate. That model may work for an infrequent fixed release. It creates avoidable risk when product changes arrive every week or every day.
            </p>

            <div className="split-list">
              <div>
                <h3>Common Warning Signs</h3>
                <ul>
                  <li>Engineers repeatedly export and reconcile complete files.</li>
                  <li>Translators receive short labels without screen or user-flow context.</li>
                  <li>Different spreadsheets contain different versions of the same translation.</li>
                  <li>Reviewers receive large batches immediately before release.</li>
                  <li>New strings are discovered only after the localized build is generated.</li>
                  <li>Store listings and in-app content follow disconnected schedules.</li>
                </ul>
              </div>
              <div>
                <h3>Operational Consequences</h3>
                <ul>
                  <li>Release delays and unpredictable market parity</li>
                  <li>Increased engineering involvement</li>
                  <li>Duplicate translation and review work</li>
                  <li>Weaker product terminology</li>
                  <li>Reviewer fatigue and rushed decisions</li>
                  <li>Limited auditability and unclear locale status</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="agile-ci-cd"
              title="Continuous Localization, Agile, CI, and CD"
              intro="These practices are related, but they describe different parts of product delivery and should not be treated as interchangeable."
            />
            <DataTable
              headers={["Model", "Primary Meaning", "Localization Implication"]}
              rows={deliveryModels}
            />
            <p>
              Repository automation can respond to pushes, pull requests, releases, schedules, branches, and changes to selected paths. Localization can use the same event-driven principle while applying its own translation, review, and quality requirements.
            </p>
            <EditorialLink href="https://docs.github.com/actions/using-workflows/events-that-trigger-workflows" external>
              Review GitHub workflow trigger documentation
            </EditorialLink>
          </section>

          <section className="chapter lifecycle-section">
            <div className="dark-panel">
              <p className="eyebrow eyebrow-dark">STEPES OPERATING MODEL</p>
              <h2 id="continuous-localization-lifecycle">From Source Change to Multilingual Release</h2>
              <p className="dark-intro">
                The continuous mobile localization lifecycle preserves a simple five-stage model while allowing each stage to contain the controls required by the product, market, and content risk.
              </p>
              <LifecycleDiagram />
              <p className="dark-note">
                Context, terminology, Translation Memory, AI assistance, professional expertise, QA, and release governance support every stage.
              </p>
            </div>
            <p>
              The main <a href={links.appLocalization}>App Localization Services</a> pillar introduces this Connect → Detect → Reuse → Review → Release framework. The operating practices below show how to implement it across recurring releases.
            </p>
          </section>

          <section className="chapter">
            <SectionHeading
              id="prepare-before-automating"
              title="Prepare the App Before Automating Localization"
              intro="Automation makes a strong process faster. It can also repeat the weaknesses of an unprepared source more frequently."
            />

            <h3>Separate Content From Code</h3>
            <p>
              Store customer-facing text in localizable resources rather than hard-coding interface labels, errors, notifications, permission explanations, accessibility content, onboarding, subscriptions, and transaction messages throughout the application.
            </p>

            <h3>Use Stable Translation Keys</h3>
            <p>
              Stable identifiers connect source text with approved translations, screenshots, comments, review history, and release status. Unnecessary key changes can make approved content appear new and weaken Translation Memory leverage.
            </p>
            <div className="code-example" aria-label="Example of a meaningful translation key">
              <span>account.security.reset_password_button</span>
            </div>

            <h3>Protect Runtime Elements</h3>
            <p>
              Variables, placeholders, tags, formatting tokens, links, and escape sequences must remain technically valid while the surrounding language changes. Document what each variable represents so linguists can handle grammar correctly.
            </p>

            <h3>Support Language-Specific Grammar</h3>
            <p>
              Do not force every language into English singular-versus-plural logic. The source architecture should support the cardinal, ordinal, gender, select, formality, case, and word-order distinctions required by target languages.
            </p>
            <EditorialLink href="https://cldr.unicode.org/index/cldr-spec/plural-rules" external>
              Review Unicode CLDR plural rules
            </EditorialLink>

            <h3>Define the Source of Truth and Ownership</h3>
            <p>
              Decide whether the repository, localization platform, connected content system, or generated resource package owns the authoritative translation state. Assign responsibility for source preparation, integration, terminology, review, QA, testing, and final release approval.
            </p>

            <div className="callout">
              <p className="eyebrow eyebrow-compact">Preparation Guide</p>
              <h3>Internationalization readiness comes before workflow automation.</h3>
              <p>Use the preparation guide to review resource architecture, context, terminology, testing, and release requirements before translation begins.</p>
              <EditorialLink href={links.prepareApp}>How to Prepare an App for Localization</EditorialLink>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="integration-models"
              title="Choose the Right Integration Model"
              intro="The best approach depends on release frequency, engineering resources, file structure, security, review complexity, and program scale."
            />

            <div className="editorial-rows">
              <article>
                <h3>API-Based Localization</h3>
                <p>Use APIs for high-frequency updates, multiple products, custom routing, programmatic status monitoring, and automated delivery. Plan for authentication, idempotency, retries, tracing, error handling, and environment separation.</p>
              </article>
              <article>
                <h3>Repository-Based Localization</h3>
                <p>Detect resource changes, map branches, import source files, and return approved translations through commits or pull requests while retaining development permissions and review practices.</p>
              </article>
              <article>
                <h3>Webhook and Event-Driven Localization</h3>
                <p>Trigger downstream actions when source resources arrive, review is requested, QA fails, a locale is approved, or a localized build becomes available.</p>
              </article>
              <article>
                <h3>Scheduled Synchronization</h3>
                <p>Synchronize daily, weekly, or at sprint milestones when updates are predictable and immediate processing is unnecessary.</p>
              </article>
              <article>
                <h3>Managed File Synchronization</h3>
                <p>Establish repeatable file naming, versioning, intake, change identification, review, delivery, and escalation without direct API or repository automation.</p>
              </article>
              <article>
                <h3>Hybrid Workflows</h3>
                <p>Combine repository synchronization, portal-based regional review, API delivery, scheduled source imports, and risk-based translation routes when different teams require different controls.</p>
              </article>
            </div>

            <DataTable
              caption="Use this matrix as a starting point rather than a universal ranking."
              headers={["Model", "Setup Effort", "Engineering", "Automation", "Best Fit"]}
              rows={integrationRows}
            />
            <EditorialLink href={links.softwareLocalizationApi}>Explore the Stepes Software Localization API</EditorialLink>
          </section>

          <section className="chapter">
            <SectionHeading
              id="branch-version-strategy"
              title="Keep Localization Aligned With the Correct Product Version"
              intro="Repository and version policies determine whether approved language reaches the intended feature, release candidate, hotfix, and supported app version."
            />
            <BranchFlow />

            <h3>Main, Feature, and Release Branches</h3>
            <p>
              Main-branch localization simplifies version control but may delay language work until features are merged. Feature-branch localization provides more time and earlier feedback but requires clear handling for abandoned features, duplicate changes, and merge behavior. Release branches create a stable point for final translation, review, string freeze, and testing.
            </p>

            <h3>Multiple Active Versions</h3>
            <p>
              Production, beta, staging, long-term-support, region-specific, legacy, and white-label editions may remain active at the same time. Translation history must stay associated with the correct product version.
            </p>

            <h3>Renamed and Deleted Keys</h3>
            <p>
              Define whether removed keys are archived, retained temporarily, permanently removed, or eligible for reuse. Preserve translation and review history when a key is renamed without changing its meaning.
            </p>

            <h3>Merge Conflicts</h3>
            <p>
              Reduce conflicts by defining resource ownership, deterministic formatting, sorting rules, branch mappings, generated-file policy, and responsibility for resolving translator and developer changes.
            </p>
          </section>

          <section className="chapter">
            <SectionHeading
              id="platform-workflows"
              title="Build Platform-Aware Continuous Localization Workflows"
              intro="iOS, Android, and cross-platform applications can share language assets and governance while retaining the resource, store, and testing requirements of each platform."
            />

            <div className="platform-sections">
              <section>
                <p className="eyebrow eyebrow-compact">iOS</p>
                <h3>String Catalogs, SwiftUI, and App Store Content</h3>
                <p>
                  Modern Xcode workflows use String Catalogs to manage localizable strings, source changes, comments, plural behavior, device variations, and translation exchange. Active applications may also contain legacy <code>.strings</code>, <code>.stringsdict</code>, storyboards, XIB files, localized assets, and XLIFF packages.
                </p>
                <p>
                  Provide SwiftUI context through the screen, component, action, adjacent labels, runtime variables, device constraints, and previews. Coordinate in-app resources with app names, subtitles, descriptions, keywords, release notes, screenshots, previews, and in-app product content.
                </p>
                <div className="link-row">
                  <EditorialLink href={links.iosGuide}>Read the iOS App Localization Guide</EditorialLink>
                  <EditorialLink href="https://developer.apple.com/documentation/xcode/localizing-and-varying-text-with-a-string-catalog" external>Apple String Catalog documentation</EditorialLink>
                </div>
              </section>

              <section>
                <p className="eyebrow eyebrow-compact">Android</p>
                <h3>Default Resources, Compose, and Per-App Languages</h3>
                <p>
                  Continuous Android localization must protect the relationship among default <code>res/values/strings.xml</code> resources, locale-qualified directories, arrays, plurals, app labels, generated locale configuration, and product variants. Default resources should remain complete even when target locales are still in progress.
                </p>
                <p>
                  Compose interfaces should retrieve customer-facing text through structured resources. Per-app language preferences must expose only production-ready locales, use consistent identifiers, and preserve approved fallback behavior. Pseudolocalization helps reveal hard-coded text, expansion, RTL, concatenation, and layout weaknesses before real translations arrive.
                </p>
                <div className="link-row">
                  <EditorialLink href={links.androidGuide}>Read the Android App Localization Guide</EditorialLink>
                  <EditorialLink href="https://developer.android.com/guide/topics/resources/localization" external>Android localization documentation</EditorialLink>
                </div>
              </section>

              <section>
                <p className="eyebrow eyebrow-compact">Cross-Platform</p>
                <h3>Shared Resources Still Require Platform Validation</h3>
                <p>
                  Flutter ARB, React Native JSON or JavaScript resources, .NET MAUI RESX, and Ionic, Cordova, or Capacitor resource models can reduce duplication. The workflow still must distinguish shared strings from native modules, generated resources, platform permissions, store content, device behavior, and platform-specific layouts.
                </p>
                <p>
                  A shared source file does not guarantee a shared user experience. Final validation should cover both iOS and Android behavior.
                </p>
              </section>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="context-engineering"
              title="Build Context Into Every String"
              intro="Mobile strings are often short, which makes them easy to extract and difficult to interpret."
            />
            <div className="ambiguity-example">
              <div>
                <p className="example-word">Charge</p>
              </div>
              <div>
                <h3>One Source Word, Several Meanings</h3>
                <p>It may describe charging a battery, charging a payment method, a financial fee, an accusation, or a command button. The key, screen, and user action determine the translation.</p>
              </div>
            </div>

            <h3>Recommended String-Level Context</h3>
            <div className="tag-list" aria-label="Recommended string context fields">
              {[
                "Translation key",
                "Feature or module",
                "Screen",
                "UI component",
                "User action",
                "Audience",
                "Grammatical role",
                "Character limit",
                "Placeholder definition",
                "Adjacent content",
                "Accessibility purpose",
                "Product version",
              ].map((item) => <span key={item}>{item}</span>)}
            </div>

            <h3>Visual and Multimodal Context</h3>
            <p>
              Screenshots, Figma frames, design-system components, interactive prototypes, beta builds, screen recordings, and automated screenshot associations help translators evaluate hierarchy, text fit, neighboring language, and the consequence of the action.
            </p>

            <h3>Measure Context Completeness</h3>
            <p>
              Track the percentage of new customer-facing strings that include a meaningful key, description, screen or feature reference, visual context, and placeholder definitions. Better context reduces clarification cycles and improves first-pass quality.
            </p>
          </section>

          <section className="chapter">
            <SectionHeading
              id="language-assets-ai"
              title="Apply Translation Memory, Terminology, and AI With Purpose"
              intro="Continuous releases create repeated language patterns. Approved language assets turn that repetition into consistency and efficiency."
            />

            <h3>Apply Translation Memory First</h3>
            <p>
              <a href={links.translationMemory}>Translation Memory</a> preserves previously approved language, aligns recurring messages across platforms, reduces repetitive work, and gives reviewers contextual precedent. A match should still be reconsidered when its screen, function, audience, or grammar changes.
            </p>

            <h3>Govern Product Terminology</h3>
            <p>
              <a href={links.terminology}>Terminology Management</a> controls product and feature names, interface labels, abbreviations, prohibited terms, regulated language, and market variants. Terminology should guide AI, linguists, reviewers, and automated QA rather than remain in a disconnected spreadsheet.
            </p>

            <h3>Give AI the Right Inputs</h3>
            <p>
              AI-assisted translation becomes more useful when it receives the source string, key, screenshot, product context, placeholder definitions, Translation Memory, terminology, locale instructions, style guidance, and approved neighboring text.
            </p>

            <h3>Route Content by Risk</h3>
            <DataTable
              headers={["Content Type", "Recommended Starting Route", "Why"]}
              rows={riskRoutes}
            />
            <p>
              The Stepes <a href={links.aiHuman}>AI + Human Translation Workflow</a> combines automation and professional expertise according to content purpose, audience, and consequence of error instead of applying one process to every string.
            </p>
          </section>

          <section className="chapter">
            <SectionHeading
              id="review-governance"
              title="Define Review, Approval, and Governance"
              intro="A continuous program needs a clear answer to one operational question: who is authorized to approve each language for release?"
            />
            <p>
              Translators, linguistic reviewers, product owners, regional reviewers, subject-matter experts, brand teams, legal or compliance reviewers, localization managers, and release managers may all participate. They should not all be required for every string.
            </p>

            <h3>Define Review Rules</h3>
            <ul>
              <li>Which content requires professional, regional, product, legal, or specialist approval?</li>
              <li>What turnaround is expected, and who acts when the assigned reviewer is unavailable?</li>
              <li>Who has final authority when reviewers disagree?</li>
              <li>How do approved corrections update Translation Memory, terminology, and workflow rules?</li>
            </ul>

            <h3>Prevent Reviewer Bottlenecks</h3>
            <p>
              Send smaller change-based batches, include visual context, prioritize high-risk strings, distinguish required corrections from stylistic preferences, tie deadlines to the release plan, and capture decisions for future reuse.
            </p>

            <DataTable
              caption="Illustrative responsibility framework. Adapt roles to your organization."
              headers={["Activity", "Localization Team", "Product Team", "Regional Reviewer", "Release Team"]}
              rows={roleRows}
            />
          </section>

          <section className="chapter">
            <SectionHeading
              id="quality-gates"
              title="Use Automated Quality Gates Before Build Delivery"
              intro="A translation can be linguistically correct and still break an application. Technical quality should be checked before localized resources enter the build."
            />

            <div className="quality-groups">
              {qualityGateGroups.map((group) => (
                <article key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            <div className="severity-band" aria-label="Quality issue severity levels">
              <div>
                <span>Informational Warning</span>
                <p>Review is recommended, but the issue does not automatically prevent approval.</p>
              </div>
              <div>
                <span>Required Correction</span>
                <p>The string cannot be approved until the identified issue is resolved.</p>
              </div>
              <div>
                <span>Release Blocker</span>
                <p>The resource should not enter a release because it may break functionality or create a serious meaning error.</p>
              </div>
            </div>

            <h3>Locale-Readiness Gate</h3>
            <div className="readiness-gate">
              {[
                "Required strings translated",
                "Mandatory reviews complete",
                "Critical QA issues resolved",
                "Correct resource version confirmed",
                "Required testing complete",
                "Fallback policy approved",
                "Named release owner authorizes delivery",
              ].map((item) => (
                <div key={item}><CheckIcon /><span>{item}</span></div>
              ))}
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="continuous-testing"
              title="Test According to What Changed and What Is at Risk"
              intro="Continuous localization does not require the same complete test suite for every language after every minor update. It requires appropriate coverage for the affected content and user journey."
            />

            <div className="test-phases">
              <article>
                <p className="eyebrow eyebrow-compact">Before Translation</p>
                <h3>Find Internationalization Problems Early</h3>
                <p>Use pseudolocalization, hard-coded string detection, expansion checks, RTL readiness, placeholder tests, and locale-format review.</p>
              </article>
              <article>
                <p className="eyebrow eyebrow-compact">During Translation</p>
                <h3>Review Language in Context</h3>
                <p>Use screenshots, design previews, interactive builds, representative user journeys, and immediate character-limit feedback.</p>
              </article>
              <article>
                <p className="eyebrow eyebrow-compact">Localized Build</p>
                <h3>Validate Real Product Behavior</h3>
                <p>Check linguistic accuracy, truncation, controls, locale formats, language switching, notifications, deep links, forms, payments, accessibility, RTL, and third-party components.</p>
              </article>
            </div>

            <h3>Use Risk-Based Regression</h3>
            <p>
              Testing scope should reflect what changed, user visibility, business consequence, platform, locale, device, historical defect areas, and whether shared components were affected. A help label and an identity-verification flow should not receive identical coverage.
            </p>

            <h3>Feed Production Findings Back Into the Workflow</h3>
            <p>
              Support tickets, app-store reviews, regional-team feedback, analytics, and annotated screenshots can reveal language issues that were not visible before launch. Classify the finding, correct the affected release, and update terminology, Translation Memory, context guidance, or testing rules so the same issue is less likely to recur.
            </p>
            <EditorialLink href={links.testingChecklist}>Use the Mobile App Localization Testing Checklist</EditorialLink>
          </section>

          <section className="chapter">
            <SectionHeading
              id="complete-mobile-experience"
              title="Coordinate the Complete Mobile Experience"
              intro="Users experience the app, stores, notifications, support content, and transactional communications as one product—even when those assets live in different systems."
            />
            <p>
              Define which supporting content belongs to each mobile release, who owns it, where it is published, and how its language status will be coordinated with the application build.
            </p>
            <div className="experience-map">
              <article>
                <div>
                  <p className="eyebrow eyebrow-compact">Discovery and Acquisition</p>
                  <h3>Store and Campaign Content</h3>
                </div>
                <p>Coordinate app names, subtitles, descriptions, keywords, release notes, screenshots, feature graphics, app previews, and mobile landing pages.</p>
              </article>
              <article>
                <div>
                  <p className="eyebrow eyebrow-compact">Runtime Experience</p>
                  <h3>Dynamic and Transactional Content</h3>
                </div>
                <p>Include push notifications, server-driven UI, in-app messages, subscriptions, payment messages, transactional email, and market-specific promotional content.</p>
              </article>
              <article>
                <div>
                  <p className="eyebrow eyebrow-compact">Support and Governance</p>
                  <h3>Help, Legal, and Knowledge Content</h3>
                </div>
                <p>Align help-center articles, knowledge-base content, accessibility guidance, legal disclosures, privacy language, and customer-support responses with the released product.</p>
              </article>
            </div>
            <div className="quality-note">
              <p className="eyebrow eyebrow-compact">Operating Principle</p>
              <p>A shared release plan does not require one publishing system. It requires coordinated ownership, cutoffs, approvals, and locale-readiness reporting across every customer-facing channel.</p>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="release-cadence"
              title="Match Localization to the Product’s Release Cadence"
              intro="Release planning should identify the source-ready date, localization start, string cutoff, review deadline, build availability, test window, correction cutoff, store submission, and production release."
            />
            <DataTable
              headers={["Release Model", "Localization Approach", "Typical Control Point"]}
              rows={releaseRows}
            />

            <h3>Plan for Late Strings</h3>
            <p>
              Decide in advance whether a late string can enter the current release, should move to the next release, may use an approved fallback, requires a locale-specific feature restriction, or must follow an expedited review path.
            </p>

          </section>

          <section className="chapter">
            <SectionHeading
              id="security-auditability"
              title="Protect Unreleased Product Content and Workflow Access"
              intro="Mobile resources may reveal unreleased features, interface logic, product strategy, security behavior, and proprietary terminology."
            />

            <div className="security-grid">
              <article>
                <h3>Secure Integration Practices</h3>
                <p>Use server-side credentials, approved secret storage, credential rotation, separate integration identities, revocable access, least-privilege permissions, and request tracing.</p>
              </article>
              <article>
                <h3>Role-Based Access</h3>
                <p>Separate developer, linguist, reviewer, product approver, localization manager, administrator, and read-only stakeholder permissions.</p>
              </article>
              <article>
                <h3>Environment Separation</h3>
                <p>Keep sandbox, development, staging, and production workflows distinct so test integrations cannot modify production resources.</p>
              </article>
              <article>
                <h3>Audit History</h3>
                <p>Record source imports, string changes, translation revisions, reviewer comments, approvals, QA outcomes, exports, build status, and administrative actions.</p>
              </article>
            </div>
            <EditorialLink href={links.security}>Review Stepes enterprise security</EditorialLink>
          </section>

          <section className="chapter">
            <SectionHeading
              id="localization-metrics"
              title="Measure Release Readiness, Not Just Translation Speed"
              intro="Raw word throughput does not show whether a locale is approved, technically valid, tested, or ready for release."
            />
            <div className="metric-grid">
              {metrics.map((metric) => (
                <article key={metric.title}>
                  <h3>{metric.title}</h3>
                  <ul>{metric.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>

            <div className="observability-panel">
              <div>
                <p className="eyebrow">LOCALIZATION OBSERVABILITY</p>
                <h3>Give release teams a shared view of locale status.</h3>
                <p>A useful view combines required locales, translation and review completion, critical QA issues, resource version, testing status, final approver, and release readiness.</p>
              </div>
              <div className="status-list" aria-label="Illustrative localization readiness status">
                <div><span>Translation</span><strong>Complete</strong></div>
                <div><span>Professional Review</span><strong>Complete</strong></div>
                <div><span>Critical QA Issues</span><strong>0 Open</strong></div>
                <div><span>Targeted Testing</span><strong>Passed</strong></div>
                <div><span>Release Approval</span><strong>Ready</strong></div>
              </div>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="emerging-trends"
              title="How Continuous Mobile Localization Is Evolving"
              intro="The latest workflows are becoming more event-driven, context-rich, agent-assisted, risk-adaptive, and visible to product operations."
            />
            <div className="trend-list">
              <article>
                <h3>Event-Driven Localization</h3>
                <p>Workflows increasingly respond to relevant branches, files, pull requests, release tags, status changes, and QA outcomes instead of processing every repository update.</p>
              </article>
              <article>
                <h3>IDE and Agent-Assisted Localization</h3>
                <p>Development environments are beginning to support resource discovery, translation, and variant generation. Enterprise programs still require terminology, professional validation, security, quality gates, and accountable release approval.</p>
              </article>
              <article>
                <h3>Multimodal Context</h3>
                <p>Strings are increasingly combined with screenshots, component data, user flows, runtime constraints, previous approvals, and product terminology.</p>
              </article>
              <article>
                <h3>Dynamic Locale Management</h3>
                <p>Supported-language lists are becoming a product capability that must remain synchronized with actual translation and testing readiness.</p>
              </article>
              <article>
                <h3>Risk-Adaptive Quality Control</h3>
                <p>Organizations are routing content according to visibility, confidence, consequence of error, regulation, market, and historical performance.</p>
              </article>
              <article>
                <h3>Continuous Improvement</h3>
                <p>Reviewer corrections, terminology decisions, defect findings, and user feedback update future language assets and workflow rules.</p>
              </article>
            </div>
          </section>

          <section className="chapter scenario-section">
            <SectionHeading
              id="two-week-example"
              eyebrow="ILLUSTRATIVE SCENARIO"
              title="A Two-Week Mobile Release in Practice"
              intro="A financial-services app is preparing account-security updates, a new onboarding step, revised notification preferences, app-store release notes, and fourteen target locales."
            />
            <div className="timeline">
              {timeline.map(([when, title, text]) => (
                <article key={`${when}-${title}`}>
                  <div className="timeline-date">{when}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className="scenario-lessons">
              <h3>What This Example Demonstrates</h3>
              <ul>
                <li>Localization begins before engineering is complete.</li>
                <li>Only affected content receives new translation and review.</li>
                <li>High-risk strings receive stronger professional validation.</li>
                <li>Technical defects are found before the release candidate is finalized.</li>
                <li>Product decisions improve future terminology and Translation Memory.</li>
                <li>Release managers can see locale readiness before submission.</li>
              </ul>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="implementation-roadmap"
              title="Adopt Continuous Localization Step by Step"
              intro="A controlled progression reduces implementation risk and gives the team evidence before expanding automation, languages, products, and review complexity."
            />
            <div className="roadmap">
              {roadmap.map(([title, text], index) => (
                <article key={title}>
                  <span className="roadmap-number" aria-hidden="true">{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="chapter checklist-section">
            <SectionHeading
              id="readiness-checklist"
              eyebrow="PLANNING TOOL"
              title="Continuous Localization Readiness Checklist"
              intro="Use this checklist before connecting a mobile product to a recurring localization workflow. The essential guidance remains available directly on this page."
            />
            <div className="checklist-layout">
              {checklistGroups.map((group) => (
                <ChecklistGroup key={group.title} {...group} />
              ))}
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="common-mistakes"
              title="Common Continuous Localization Mistakes"
              intro="Most failures come from unclear ownership, weak source preparation, indiscriminate automation, or missing quality and release controls."
            />
            <div className="mistakes-list">
              {mistakes.map(([mistake, correction]) => (
                <article key={mistake}>
                  <h3>{mistake}</h3>
                  <p><strong>Better approach:</strong> {correction}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="chapter support-section">
            <SectionHeading
              id="how-stepes-supports"
              title="How Stepes Supports Continuous Mobile Localization"
              intro="Stepes connects mobile translation, professional review, technical quality assurance, testing, and release-ready delivery across recurring iOS, Android, and cross-platform updates."
            />
            <div className="support-rows">
              <article><h3>Connected Localization Workflows</h3><p>Use APIs, repository workflows, structured synchronization, webhooks, scheduled exchanges, and customer-specific integration models.</p></article>
              <article><h3>Change-Based Processing</h3><p>Identify new and modified resources while preserving approved translations for unchanged content.</p></article>
              <article><h3>Context-Aware Localization</h3><p>Combine screenshots, comments, key names, metadata, character limits, placeholders, designs, and product terminology.</p></article>
              <article><h3>Language Assets and AI + Human Expertise</h3><p>Apply Translation Memory, terminology, AI assistance, and professional review according to visibility, complexity, market, and risk.</p></article>
              <article><h3>Software-Specific QA and Testing</h3><p>Validate placeholders, tags, plurals, terminology, file structure, locale completeness, accessibility, RTL, devices, and regression risks.</p></article>
              <article><h3>Enterprise Governance</h3><p>Define permissions, approvals, quality gates, security, workflow visibility, and auditable delivery.</p></article>
            </div>
            <div className="mid-cta">
              <div>
                <h3>Connect your release process with scalable translation, review, QA, and testing.</h3>
              </div>
              <div className="mid-cta-actions">
                <ButtonLink href={links.contact}>Talk to an Expert</ButtonLink>
                <ButtonLink href={links.softwareLocalizationApi} variant="secondary">Explore the API</ButtonLink>
              </div>
            </div>
          </section>

          <section className="chapter">
            <SectionHeading
              id="continuous-localization-faq"
              title="Continuous Mobile Localization FAQs"
              intro="These answers address common implementation, quality, review, versioning, and release questions."
            />
            <FAQPanel />
          </section>

          <section className="chapter sources-section" aria-labelledby="sources-and-references">
            <SectionHeading
              id="sources-and-references"
              title="Sources and References"
              intro="The platform and workflow guidance in this article draws on official technical documentation and the related Stepes service and platform resources."
            />
            <div className="source-list">
              {sources.map((source) => (
                <article key={source.href}>
                  <div>
                    <span>{source.org}</span>
                    <h3>{source.title}</h3>
                  </div>
                  <EditorialLink href={source.href} external>View source</EditorialLink>
                </article>
              ))}
            </div>
          </section>

          <section className="chapter conclusion-section" aria-labelledby="continuous-localization-conclusion">
            <SectionHeading
              id="continuous-localization-conclusion"
              title="Make Every Release Easier to Localize Than the Last"
              intro="Continuous localization succeeds when source architecture, language assets, professional judgment, technical QA, testing, governance, and release visibility work as one operating system."
            />
            <p>
              Begin with the fundamentals: externalized content, stable keys, complete default resources, useful context, clear ownership, and approved terminology. Then connect the workflow, automate the repeatable steps, route risk deliberately, and use release data to improve the next cycle.
            </p>
            <p>
              The result is not automation for its own sake. It is a more predictable way to deliver a consistent mobile experience across languages and markets as the product continues to evolve.
            </p>
          </section>

          <section className="chapter related-section" aria-labelledby="related-app-localization-resources">
            <SectionHeading
              id="related-app-localization-resources"
              title="Continue Planning Your App Localization Program"
              intro="Choose the next guide based on the decision your team needs to make."
            />
            <div className="related-grid">
              {relatedResources.map((resource) => (
                <article key={resource.href}>
                  <h3><a href={resource.href}>{resource.title}</a></h3>
                  <p>{resource.text}</p>
                  <EditorialLink href={resource.href}>{resource.action}</EditorialLink>
                </article>
              ))}
            </div>
          </section>
        </article>
      </div>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="shell final-cta-panel">
          <div>
            <p className="eyebrow">CONTINUOUS MOBILE DELIVERY</p>
            <h2 id="final-cta-title">Build Localization Into Every App Release</h2>
            <p>
              Connect iOS, Android, and cross-platform resources to a scalable workflow for translation, professional review, quality assurance, testing, and release-ready delivery.
            </p>
          </div>
          <div className="final-cta-actions">
            <ButtonLink href={links.contact}>Talk to an Expert</ButtonLink>
            <ButtonLink href={links.quote} variant="secondary">Request a Translation Quote</ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    color-scheme: light;
  }

  .stepes-guide {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --magenta-deep: #7A1542;
    --blush: #FDF2F7;
    --dark-eyebrow: #F2A7C6;
    --ink: #171727;
    --body: #414353;
    --muted: #676978;
    --line: #E3E4EA;
    --line-dark: rgba(255,255,255,.16);
    --soft: #F6F6F8;
    --panel: #FFFFFF;
    --dark: #1D1720;
    color: var(--ink);
    background: #FFFFFF;
    font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.65;
    overflow-x: clip;
  }

  .stepes-guide * { box-sizing: border-box; }
  .stepes-guide img,
  .stepes-guide svg { max-width: 100%; }
  .stepes-guide a { color: var(--magenta); text-decoration: none; }
  .stepes-guide a:hover { color: var(--magenta-dark); }
  .stepes-guide a:focus-visible,
  .stepes-guide button:focus-visible {
    outline: 3px solid rgba(193,29,99,.28);
    outline-offset: 4px;
  }
  .stepes-guide p,
  .stepes-guide li { color: var(--body); }
  .stepes-guide p { margin: 0 0 22px; font-size: 18px; }
  .stepes-guide li { font-size: 17px; }
  .stepes-guide ul { padding-left: 22px; margin: 0 0 26px; }
  .stepes-guide li + li { margin-top: 10px; }
  .stepes-guide h1,
  .stepes-guide h2,
  .stepes-guide h3 { margin: 0; color: var(--ink); font-weight: 600; line-height: 1.16; }
  .stepes-guide h1 { font-size: 48px; letter-spacing: -.035em; max-width: 920px; }
  .stepes-guide h2 { font-size: 36px; letter-spacing: -.025em; scroll-margin-top: 118px; }
  .stepes-guide h3 { font-size: 24px; letter-spacing: -.012em; }
  .stepes-guide code {
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 16px;
    background: #F2F2F5;
    border-radius: 5px;
    padding: 2px 5px;
    overflow-wrap: anywhere;
  }

  .shell {
    width: min(1280px, calc(100% - 112px));
    margin: 0 auto;
  }

  .eyebrow {
    margin: 0 0 17px !important;
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    letter-spacing: .14em;
    line-height: 1.25 !important;
    text-transform: uppercase;
  }
  .eyebrow-compact { margin-bottom: 10px !important; }
  .eyebrow-inline { display: inline-block; margin: 0 !important; }
  .eyebrow-dark { color: var(--dark-eyebrow) !important; }

  .hero-wrap {
    background: linear-gradient(135deg, #FFFFFF 8%, #FAF8FA 100%);
    padding: 24px 0 88px;
    border-bottom: 1px solid var(--line);
  }
  .breadcrumb { margin-bottom: 32px; }
  .breadcrumb ol {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 5px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .breadcrumb li {
    display: inline-flex;
    align-items: baseline;
    gap: 5px;
    min-width: 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .breadcrumb a { color: #70717C; }
  .breadcrumb-current { color: #3B3C48; font-weight: 500; overflow-wrap: anywhere; }
  .breadcrumb-separator { color: #A9AAB2; padding: 0 3px; }

  .hero-grid {
    display: block;
  }
  .hero-copy {
    max-width: 960px;
  }
  .hero-deck {
    max-width: 820px;
    margin-top: 26px !important;
    font-size: 20px !important;
    line-height: 1.62 !important;
  }
  .hero-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 9px;
    margin-top: 28px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.5;
  }
  .hero-meta span { min-width: 0; overflow-wrap: anywhere; }
  .hero-actions,
  .final-cta-actions,
  .mid-cta-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
  }
  .hero-actions { margin-top: 34px; }
  .button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    min-height: 50px;
    padding: 13px 23px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform .18s ease, background .18s ease, border-color .18s ease;
  }
  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus,
  .button-primary:focus-visible,
  .button-primary span,
  .button-primary svg,
  .button-primary path {
    color: #FFFFFF !important;
    stroke: currentColor !important;
  }
  .button-primary { background: var(--magenta); }
  .button-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); }
  .button-secondary {
    background: #FFFFFF;
    color: var(--ink) !important;
    border-color: #D5D6DD;
  }
  .button-secondary:visited { color: var(--ink) !important; }
  .button-secondary:hover { color: var(--magenta) !important; border-color: #C9A3B5; }


  .summary-section { padding: 80px 0; background: var(--blush); border-bottom: 1px solid #F0DFE7; }
  .summary-shell { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
  .summary-lead h2 { font-size: 34px; }
  .summary-lead p:not(.eyebrow) { margin-top: 20px; font-size: 18px; }
  .takeaways-list { display: grid; grid-template-columns: 1fr 1fr; }
  .takeaways-list article { padding: 0 0 28px 28px; border-left: 1px solid #E3C9D4; }
  .takeaways-list article:nth-child(n+3) { padding-top: 28px; border-top: 1px solid #E3C9D4; }
  .takeaways-list h3 { font-size: 20px; }
  .takeaways-list p { margin: 9px 0 0; font-size: 16px; line-height: 1.6; }

  .article-shell {
    display: grid;
    grid-template-columns: 260px minmax(0, 760px);
    gap: 64px;
    width: min(1120px, calc(100% - 112px));
    padding: 96px 0 112px;
    align-items: start;
  }
  .toc {
    position: sticky;
    top: 104px;
    max-height: calc(100vh - 128px);
    overflow: auto;
    padding-right: 12px;
  }
  .toc-toggle { display: none; }
  .toc-title {
    margin: 0 0 14px !important;
    color: var(--ink) !important;
    font-size: 16px !important;
    font-weight: 600;
  }
  .toc-list ol { list-style: none; padding: 0; margin: 0; border-left: 1px solid var(--line); }
  .toc-list li { margin: 0; font-size: 15px; line-height: 1.35; }
  .toc-list a {
    display: block;
    position: relative;
    padding: 7px 0 7px 18px;
    color: #62636E;
  }
  .toc-list a::before {
    content: "";
    position: absolute;
    left: -1px;
    top: 8px;
    bottom: 8px;
    width: 2px;
    background: transparent;
  }
  .toc-list a:hover { color: var(--magenta); }
  .toc-list a.active { color: var(--magenta); font-weight: 600; }
  .toc-list a.active::before { background: var(--magenta); }

  .article-content { min-width: 0; }
  .chapter { padding: 0 0 88px; }
  .chapter + .chapter { padding-top: 88px; border-top: 1px solid var(--line); }
  .first-chapter { padding-top: 0; }
  .section-heading { margin-bottom: 34px; }
  .section-heading .section-intro {
    max-width: 780px;
    margin: 22px 0 0;
    font-size: 19px;
    line-height: 1.65;
  }
  .chapter > h3 { margin: 38px 0 13px; }
  .chapter > p { max-width: 760px; }
  .chapter a:not(.button):not(.editorial-link) { font-weight: 600; }
  .chapter ul { max-width: 740px; }

  .three-points { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin: 40px 0; background: var(--line); border: 1px solid var(--line); border-radius: 22px; overflow: hidden; }
  .three-points article { background: #fff; padding: 26px; }
  .three-points h3 { font-size: 20px; }
  .three-points p { margin: 12px 0 0; font-size: 16px; }

  .table-figure { margin: 42px 0; }
  .table-figure figcaption { margin-bottom: 12px; color: var(--muted); font-size: 14px; line-height: 1.5; }
  .table-frame { border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .table-frame table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  .table-frame th,
  .table-frame td { padding: 17px 18px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--line); border-right: 1px solid var(--line); font-size: 16px; line-height: 1.52; overflow-wrap: anywhere; }
  .table-frame th { color: var(--ink); background: #F7F7F9; font-weight: 600; }
  .table-frame td { color: var(--body); }
  .table-frame th:last-child,
  .table-frame td:last-child { border-right: 0; }
  .table-frame tr:last-child td { border-bottom: 0; }

  .split-list { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 36px; }
  .split-list h3 { margin-bottom: 18px; }
  .split-list li { font-size: 16px; }

  .dark-panel {
    margin-bottom: 38px;
    padding: 46px;
    border-radius: 30px;
    color: #fff;
    background: var(--dark);
  }
  .dark-panel h2,
  .dark-panel h3 { color: #fff; }
  .dark-intro { max-width: 700px; color: #DED9DE !important; font-size: 18px !important; }
  .lifecycle { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 38px; border-top: 1px solid var(--line-dark); border-bottom: 1px solid var(--line-dark); }
  .lifecycle-stage { position: relative; padding: 32px 19px 32px 0; }
  .lifecycle-stage + .lifecycle-stage { padding-left: 19px; border-left: 1px solid var(--line-dark); }
  .lifecycle-stage:nth-child(4),
  .lifecycle-stage:nth-child(5) { border-top: 1px solid var(--line-dark); }
  .lifecycle-stage:nth-child(4) { border-left: 0; padding-left: 0; }
  .stage-number { display: inline-flex; width: 30px; height: 30px; align-items: center; justify-content: center; border-radius: 50%; background: var(--magenta); color: #fff; font-size: 14px; font-weight: 600; }
  .lifecycle h3 { margin-top: 16px; font-size: 20px; }
  .lifecycle p { margin: 10px 0 0; color: #D4CFD3 !important; font-size: 16px; line-height: 1.55; }
  .dark-note { margin: 24px 0 0 !important; color: #C8C1C6 !important; font-size: 16px !important; }

  .code-example { margin: 20px 0 32px; border: 1px solid var(--line); border-radius: 14px; padding: 18px 20px; background: #F7F7F9; overflow-wrap: anywhere; }
  .code-example span { color: #3C3D48; font-family: "SFMono-Regular", Consolas, monospace; font-size: 16px; }
  .callout { margin-top: 42px; padding: 30px; border-radius: 22px; background: var(--blush); border-left: 3px solid var(--magenta); }
  .callout h3 { font-size: 23px; }
  .callout p:not(.eyebrow) { margin: 12px 0 18px; font-size: 16px; }

  .editorial-rows { border-top: 1px solid var(--line); margin-top: 34px; }
  .editorial-rows article { display: grid; grid-template-columns: 230px 1fr; gap: 34px; padding: 27px 0; border-bottom: 1px solid var(--line); }
  .editorial-rows h3 { font-size: 20px; }
  .editorial-rows p { margin: 0; font-size: 16px; }
  .editorial-link { display: inline-flex; align-items: center; gap: 7px; min-height: 40px; color: var(--magenta); font-size: 16px; font-weight: 600; }
  .editorial-link svg { flex: 0 0 auto; transition: transform .18s ease; }
  .editorial-link:hover svg { transform: translateX(2px); }

  .branch-flow { margin: 42px 0; }
  .branch-step { position: relative; display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding-bottom: 30px; }
  .branch-step:not(:last-of-type)::after { content: ""; position: absolute; left: 21px; top: 44px; bottom: 0; width: 2px; background: #D6D6DD; }
  .branch-index { display: flex; width: 44px; height: 44px; align-items: center; justify-content: center; border: 1px solid #CCB4BF; border-radius: 50%; color: var(--magenta); background: #fff; font-size: 15px; font-weight: 600; z-index: 1; }
  .branch-step h3 { padding-top: 7px; font-size: 21px; }
  .branch-step p { margin: 8px 0 0; font-size: 16px; }
  .hotfix-path { margin-left: 64px; padding: 22px 24px; border-radius: 18px; background: #F6F6F8; }
  .hotfix-path p { margin: 8px 0 0; font-size: 16px; }

  .platform-sections { display: grid; gap: 0; margin-top: 40px; border-top: 1px solid var(--line); }
  .platform-sections > section { padding: 38px 0; border-bottom: 1px solid var(--line); }
  .platform-sections h3 { font-size: 26px; }
  .platform-sections p:not(.eyebrow) { margin-top: 17px; font-size: 17px; }
  .link-row { display: flex; flex-wrap: wrap; gap: 12px 26px; margin-top: 10px; }

  .ambiguity-example { display: grid; grid-template-columns: 180px 1fr; gap: 34px; align-items: center; margin: 38px 0; padding: 30px; border: 1px solid var(--line); border-radius: 24px; }
  .example-word { margin: 0 !important; color: var(--magenta) !important; font-size: 36px !important; font-weight: 600; text-align: center; }
  .ambiguity-example h3 { font-size: 22px; }
  .ambiguity-example p:not(.example-word) { margin: 10px 0 0; font-size: 16px; }
  .tag-list { display: flex; flex-wrap: wrap; gap: 10px; margin: 22px 0 38px; }
  .tag-list span { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; color: #4E4F5A; background: #fff; font-size: 16px; }

  .quality-groups { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; margin: 38px 0; }
  .quality-groups article { padding: 25px; border: 1px solid var(--line); border-radius: 20px; }
  .quality-groups h3 { font-size: 20px; }
  .quality-groups ul { padding-left: 18px; margin: 17px 0 0; }
  .quality-groups li { font-size: 16px; }
  .severity-band { display: grid; grid-template-columns: repeat(3, 1fr); margin: 42px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .severity-band > div { padding: 26px 22px; }
  .severity-band > div + div { border-left: 1px solid var(--line); }
  .severity-band span { color: var(--ink); font-size: 17px; font-weight: 600; }
  .severity-band p { margin: 9px 0 0; font-size: 16px; }
  .readiness-gate { display: grid; grid-template-columns: 1fr 1fr; gap: 0; margin-top: 22px; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; }
  .readiness-gate > div { display: flex; align-items: flex-start; gap: 12px; padding: 18px; border-bottom: 1px solid var(--line); font-size: 16px; color: var(--body); }
  .readiness-gate > div:nth-child(odd) { border-right: 1px solid var(--line); }
  .readiness-gate > div:nth-last-child(-n+2) { border-bottom: 0; }
  .readiness-gate svg { flex: 0 0 auto; margin-top: 2px; color: var(--magenta); }

  .test-phases { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 38px 0; }
  .test-phases article { padding: 28px; background: #F7F7F9; border-radius: 20px; }
  .test-phases h3 { font-size: 20px; }
  .test-phases p:not(.eyebrow) { margin: 12px 0 0; font-size: 16px; }

  .experience-map { margin-top: 38px; border-top: 1px solid var(--line); }
  .experience-map article { display: grid; grid-template-columns: 250px 1fr; gap: 36px; padding: 28px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .experience-map h3 { font-size: 21px; }
  .experience-map > article > p { margin: 0; font-size: 16px; }
  .quality-note { margin-top: 34px; padding: 24px 26px; border-radius: 20px; background: var(--blush); border-left: 3px solid var(--magenta); }
  .quality-note p:not(.eyebrow) { margin: 0; font-size: 16px; }

  .security-grid,
  .metric-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; margin: 38px 0; border: 1px solid var(--line); border-radius: 22px; overflow: hidden; background: var(--line); }
  .security-grid article,
  .metric-grid article { padding: 28px; background: #fff; }
  .security-grid h3,
  .metric-grid h3 { font-size: 21px; }
  .security-grid p { margin: 12px 0 0; font-size: 16px; }
  .metric-grid ul { margin: 15px 0 0; padding-left: 20px; }
  .metric-grid li { font-size: 16px; }
  .observability-panel { display: grid; grid-template-columns: 1fr .85fr; gap: 40px; padding: 34px; border-radius: 24px; background: var(--blush); }
  .observability-panel h3 { font-size: 25px; }
  .observability-panel p:not(.eyebrow) { margin: 14px 0 0; font-size: 16px; }
  .status-list { background: #fff; border: 1px solid #E7D8DF; border-radius: 16px; padding: 5px 18px; }
  .status-list div { display: flex; justify-content: space-between; gap: 16px; padding: 12px 0; border-bottom: 1px solid var(--line); font-size: 16px; }
  .status-list div:last-child { border-bottom: 0; }
  .status-list span { min-width: 0; color: var(--muted); overflow-wrap: anywhere; }
  .status-list strong { min-width: 0; color: var(--ink); font-weight: 600; overflow-wrap: anywhere; }

  .trend-list { display: grid; grid-template-columns: 1fr 1fr; gap: 0 42px; margin-top: 32px; border-top: 1px solid var(--line); }
  .trend-list article { padding: 30px 0; border-bottom: 1px solid var(--line); }
  .trend-list h3 { font-size: 21px; }
  .trend-list p { margin: 11px 0 0; font-size: 16px; }

  .scenario-section { background: #FBFAFB; padding-left: 38px; padding-right: 38px; border-radius: 28px; border-top: 0 !important; }
  .timeline { margin-top: 42px; }
  .timeline article { display: grid; grid-template-columns: 100px 1fr; gap: 26px; padding: 0 0 32px; position: relative; }
  .timeline article:not(:last-child)::before { content: ""; position: absolute; left: 83px; top: 29px; bottom: 0; width: 1px; background: #D8D8DF; }
  .timeline-date { color: var(--magenta); font-size: 15px; font-weight: 600; text-align: right; padding-top: 4px; }
  .timeline h3 { font-size: 21px; }
  .timeline p { margin: 9px 0 0; font-size: 16px; }
  .scenario-lessons { margin-left: 126px; padding: 25px 28px; background: #fff; border: 1px solid var(--line); border-radius: 18px; }
  .scenario-lessons h3 { font-size: 21px; }
  .scenario-lessons ul { margin: 17px 0 0; }
  .scenario-lessons li { font-size: 16px; }

  .roadmap { margin-top: 40px; border-top: 1px solid var(--line); }
  .roadmap article { display: grid; grid-template-columns: 52px 1fr; gap: 22px; padding: 27px 0; border-bottom: 1px solid var(--line); }
  .roadmap-number { display: flex; width: 42px; height: 42px; align-items: center; justify-content: center; border-radius: 50%; background: var(--blush); color: var(--magenta); font-size: 15px; font-weight: 600; }
  .roadmap h3 { padding-top: 7px; font-size: 21px; }
  .roadmap p { margin: 8px 0 0; font-size: 16px; }

  .checklist-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; margin-top: 38px; }
  .checklist-group { padding: 26px; border: 1px solid var(--line); border-radius: 20px; }
  .checklist-group:last-child { grid-column: 1 / -1; }
  .checklist-group h3 { font-size: 21px; }
  .checklist-group ul { list-style: none; padding: 0; margin: 18px 0 0; }
  .checklist-group li { display: flex; align-items: flex-start; gap: 12px; margin-top: 12px; font-size: 16px; }
  .check-icon { flex: 0 0 auto; color: var(--magenta); margin-top: 2px; }

  .mistakes-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .mistakes-list article { display: grid; grid-template-columns: 230px 1fr; gap: 34px; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .mistakes-list h3 { font-size: 19px; }
  .mistakes-list p { margin: 0; font-size: 16px; }
  .mistakes-list strong { color: var(--ink); font-weight: 600; }

  .support-rows { display: grid; grid-template-columns: 1fr 1fr; gap: 0 42px; margin-top: 34px; border-top: 1px solid var(--line); }
  .support-rows article { padding: 28px 0; border-bottom: 1px solid var(--line); }
  .support-rows h3 { font-size: 20px; }
  .support-rows p { margin: 10px 0 0; font-size: 16px; }
  .mid-cta { display: grid; grid-template-columns: 1fr auto; gap: 30px; align-items: center; margin-top: 44px; padding: 32px; border: 1px solid #E8D6DF; border-radius: 24px; background: var(--blush); }
  .mid-cta h3 { font-size: 24px; max-width: 500px; }
  .mid-cta-actions { justify-content: flex-end; }

  .faq-panel { margin-top: 38px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .faq-item + .faq-item { border-top: 1px solid var(--line); }
  .faq-item h3 { font-size: 18px; }
  .faq-item button { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 24px; border: 0; background: transparent; color: var(--ink); text-align: left; padding: 22px 0; font: inherit; font-weight: 600; cursor: pointer; }
  .faq-item button svg { flex: 0 0 auto; color: var(--magenta); }
  .faq-answer { padding: 0 42px 24px 0; }
  .faq-answer p { margin: 0; font-size: 16px; max-width: 720px; }

  .source-list { margin-top: 36px; border-top: 1px solid var(--line); }
  .source-list article { display: flex; align-items: center; justify-content: space-between; gap: 30px; padding: 22px 0; border-bottom: 1px solid var(--line); }
  .source-list span { color: var(--muted); font-size: 14px; }
  .source-list h3 { margin-top: 4px; font-size: 18px; overflow-wrap: anywhere; }

  .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; margin-top: 38px; border: 1px solid var(--line); border-radius: 22px; overflow: hidden; background: var(--line); }
  .related-grid article { padding: 27px; background: #fff; }
  .related-grid h3 { font-size: 20px; overflow-wrap: anywhere; }
  .related-grid h3 a { color: var(--ink); }
  .related-grid h3 a:hover { color: var(--magenta); }
  .related-grid p { margin: 12px 0 12px; font-size: 16px; }

  .final-cta { padding: 0 0 104px; background: #fff; }
  .final-cta-panel { display: grid; grid-template-columns: 1fr auto; gap: 56px; align-items: center; padding: 58px 64px; border: 1px solid #E8D6DF; border-radius: 30px; background: var(--blush); }
  .final-cta h2 { max-width: 720px; }
  .final-cta p:not(.eyebrow) { max-width: 740px; margin: 18px 0 0; font-size: 18px; }
  .final-cta-actions { justify-content: flex-end; }

  @media (max-width: 1180px) {
    .shell { width: min(1280px, calc(100% - 80px)); }
    .article-shell { width: min(1080px, calc(100% - 80px)); grid-template-columns: 235px minmax(0, 1fr); gap: 48px; }
  }

  @media (max-width: 900px) {
    .shell,
    .article-shell { width: calc(100% - 48px); }
    .hero-wrap { padding-bottom: 72px; }
    .hero-copy { max-width: 860px; }
    .summary-shell { grid-template-columns: 1fr; gap: 42px; }
    .article-shell { display: block; padding-top: 72px; }
    .toc { position: static; max-height: none; overflow: visible; padding: 0; margin-bottom: 56px; }
    .toc-toggle {
      display: flex;
      width: 100%;
      min-height: 50px;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: #fff;
      color: var(--ink);
      padding: 12px 16px;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
    }
    .toc-list { display: none; padding: 14px 0 0; }
    .toc-list.is-open { display: block; }
    .toc-title { display: none; }
    .toc-list ol { border: 1px solid var(--line); border-radius: 14px; padding: 10px 0; max-height: min(440px, 55vh); overflow: auto; overscroll-behavior: contain; }
    .toc-list li { font-size: 16px; }
    .toc-list a { min-height: 44px; padding: 10px 16px; }
    .toc-list a::before { display: none; }
    .toc-list a.active { background: var(--blush); }
    .quality-groups,
    .test-phases { grid-template-columns: 1fr; }
    .severity-band { grid-template-columns: 1fr; }
    .severity-band > div + div { border-left: 0; border-top: 1px solid var(--line); }
    .final-cta-panel,
    .mid-cta { grid-template-columns: 1fr; }
    .final-cta-actions,
    .mid-cta-actions { justify-content: flex-start; }
    .related-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (max-width: 768px) {
    .stepes-guide h1 { font-size: 42px; }
    .stepes-guide h2 { font-size: 32px; }
    .stepes-guide h3 { font-size: 22px; }
    .stepes-guide p { font-size: 17px; }
    .hero-wrap { padding-top: 22px; }
    .breadcrumb { margin-bottom: 26px; }
    .hero-deck { font-size: 18px !important; }
    .summary-section { padding: 68px 0; }
    .takeaways-list { grid-template-columns: 1fr; }
    .takeaways-list article { padding: 24px 0; border-left: 0; border-top: 1px solid #E3C9D4; }
    .takeaways-list article:first-child { border-top: 0; padding-top: 0; }
    .takeaways-list article:nth-child(n+3) { padding-top: 24px; }
    .chapter { padding-bottom: 72px; }
    .chapter + .chapter { padding-top: 72px; }
    .section-heading .section-intro { font-size: 18px; }
    .three-points,
    .split-list,
    .security-grid,
    .metric-grid,
    .trend-list,
    .support-rows,
    .checklist-layout,
    .observability-panel { grid-template-columns: 1fr; }
    .three-points { gap: 0; }
    .three-points article + article { border-top: 1px solid var(--line); }
    .three-points article { padding: 24px; }
    .split-list { gap: 20px; }
    .dark-panel { padding: 34px 28px; }
    .lifecycle { grid-template-columns: 1fr; border-top: 0; }
    .lifecycle-stage,
    .lifecycle-stage + .lifecycle-stage,
    .lifecycle-stage:nth-child(4) { padding: 26px 0; border-left: 0; border-top: 1px solid var(--line-dark); }
    .lifecycle-stage:first-child { border-top: 0; }
    .editorial-rows article,
    .experience-map article,
    .mistakes-list article { grid-template-columns: 1fr; gap: 10px; }
    .ambiguity-example { grid-template-columns: 1fr; text-align: left; }
    .example-word { text-align: left; }
    .readiness-gate { grid-template-columns: 1fr; }
    .readiness-gate > div,
    .readiness-gate > div:nth-child(odd),
    .readiness-gate > div:nth-last-child(-n+2) { border-right: 0; border-bottom: 1px solid var(--line); }
    .readiness-gate > div:last-child { border-bottom: 0; }
    .scenario-section { padding-left: 24px; padding-right: 24px; border-radius: 20px; }
    .timeline article { grid-template-columns: 78px 1fr; gap: 20px; }
    .timeline article:not(:last-child)::before { left: 63px; }
    .scenario-lessons { margin-left: 0; }
    .checklist-group:last-child { grid-column: auto; }
    .related-grid { grid-template-columns: 1fr; }
    .table-frame { overflow: visible; border: 0; border-radius: 0; }
    .table-frame table,
    .table-frame thead,
    .table-frame tbody,
    .table-frame tr,
    .table-frame th,
    .table-frame td { display: block; width: 100%; }
    .table-frame thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    .table-frame tr { margin-bottom: 16px; border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
    .table-frame td { display: grid; grid-template-columns: minmax(112px, 36%) 1fr; gap: 14px; border-right: 0; border-bottom: 1px solid var(--line); padding: 15px 16px; }
    .table-frame td::before { content: attr(data-label); color: var(--ink); font-weight: 600; }
    .table-frame tr:last-child td { border-bottom: 1px solid var(--line); }
    .table-frame td:last-child { border-bottom: 0; }
    .final-cta-panel { padding: 44px 36px; }
  }

  @media (max-width: 520px) {
    .shell,
    .article-shell { width: calc(100% - 40px); }
    .stepes-guide h1 { font-size: 38px; }
    .stepes-guide h2 { font-size: 30px; }
    .stepes-guide h3 { font-size: 20px; }
    .stepes-guide p { font-size: 17px; line-height: 1.68; }
    .hero-wrap { padding-bottom: 60px; }
    .hero-actions,
    .hero-actions .button,
    .final-cta-actions,
    .final-cta-actions .button,
    .mid-cta-actions,
    .mid-cta-actions .button { width: 100%; }
    .hero-meta span[aria-hidden="true"] { display: none; }
    .breadcrumb li:last-child { flex: 1 1 100%; }
    .status-list div { flex-wrap: wrap; }
    .summary-section { padding: 64px 0; }
    .article-shell { padding-top: 64px; padding-bottom: 88px; }
    .toc { margin-bottom: 48px; }
    .chapter { padding-bottom: 64px; }
    .chapter + .chapter { padding-top: 64px; }
    .section-heading { margin-bottom: 28px; }
    .dark-panel { padding: 30px 22px; border-radius: 22px; }
    .tag-list span { font-size: 16px; }
    .hotfix-path { margin-left: 0; }
    .ambiguity-example,
    .callout,
    .mid-cta,
    .observability-panel { padding: 24px; }
    .quality-groups article,
    .test-phases article,
    .security-grid article,
    .metric-grid article,
    .related-grid article,
    .checklist-group { padding: 22px; }
    .timeline article { grid-template-columns: 1fr; gap: 7px; padding-bottom: 26px; }
    .timeline article::before { display: none; }
    .timeline-date { text-align: left; padding: 0; }
    .roadmap article { grid-template-columns: 44px 1fr; gap: 16px; }
    .source-list article { align-items: flex-start; flex-direction: column; gap: 8px; }
    .table-frame td { grid-template-columns: 1fr; gap: 5px; }
    .faq-item button { padding: 19px 0; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding-bottom: 72px; }
    .final-cta-panel { padding: 38px 24px; border-radius: 24px; }
  }
`;
