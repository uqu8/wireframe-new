import React from "react";

const CANONICAL =
  "https://www.stepes.com/resources/localization-guides/continuous-website-localization/";

const COLORS = {
  accent: "#C11D63",
  accentDark: "#A71954",
  accentDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F9E5EE",
  accentLight: "#F2A7C6",
  ink: "#17151A",
  text: "#433D46",
  muted: "#6E6670",
  border: "#E7E2E7",
  soft: "#F7F6F7",
  dark: "#211A20",
};

const tocGroups = [
  {
    title: "Understand the Model",
    items: [
      ["key-takeaways", "Key Takeaways"],
      ["why-localized-websites-fall-behind", "Why Localized Websites Fall Behind"],
      ["what-continuous-website-localization-means", "What Continuous Website Localization Means"],
      ["continuous-localization-operating-loop", "The Continuous Localization Operating Loop"],
    ],
  },
  {
    title: "Build the Operation",
    items: [
      ["detect-and-prioritize-website-changes", "Detect and Prioritize Website Changes"],
      ["translate-incrementally-without-losing-context", "Translate Incrementally Without Losing Context"],
      ["route-automation-and-human-review-by-risk", "Route Automation and Human Review by Risk"],
      ["synchronize-multilingual-releases", "Synchronize Multilingual Releases"],
      ["build-continuous-quality-assurance-into-the-process", "Build Continuous Quality Assurance Into the Process"],
      ["define-ownership-and-governance", "Define Ownership and Governance"],
      ["measure-localization-freshness-and-performance", "Measure Localization Freshness and Performance"],
      ["choose-technology-that-supports-continuous-operations", "Choose Technology That Supports Continuous Operations"],
    ],
  },
  {
    title: "Plan and Improve",
    items: [
      ["continuous-localization-maturity-model", "Continuous Localization Maturity Model"],
      ["continuous-localization-implementation-roadmap", "Implementation Roadmap"],
      ["common-continuous-localization-failure-points", "Common Failure Points"],
      ["continuous-website-localization-checklist", "Continuous Website Localization Checklist"],
      ["frequently-asked-questions", "Frequently Asked Questions"],
    ],
  },
];

const takeaways = [
  {
    title: "Treat Localization as an Operating Model",
    body: "Continuous localization connects source publishing, translation, review, release management, quality assurance, and monitoring. It is more than a faster translation method.",
  },
  {
    title: "Route Changes According to Risk",
    body: "A safety notice, campaign page, product update, metadata revision, and stylistic edit should not receive the same priority or review level.",
  },
  {
    title: "Connect Detection to Ownership",
    body: "Finding a source change matters only when someone decides whether it applies to each market, when it must be localized, and who owns the next action.",
  },
  {
    title: "Reuse Approved Language With Context",
    body: "Translation memory and terminology reduce repeated work, but matches still need to be evaluated against the page, audience, market, and meaning of the change.",
  },
  {
    title: "Define Release Policies by Content Class",
    body: "Some updates require simultaneous global publication. Others are better handled through controlled windows, market-priority releases, or rolling publication.",
  },
  {
    title: "Measure Freshness, Coverage, and Quality",
    body: "Track how current every language site is, where gaps remain, how long updates take, which exceptions are open, and whether live pages meet quality expectations.",
  },
];

const comparisonRows = [
  ["Change discovery", "Manual or periodic", "Systematic and recurring"],
  ["Translation scope", "Large batches", "Incremental updates"],
  ["Workflow setup", "Rebuilt for each project", "Predefined routing rules"],
  ["Quality assurance", "Concentrated around launch", "Triggered throughout the content lifecycle"],
  ["Operational ownership", "Often unclear after delivery", "Assigned across content, localization, web, and regional teams"],
  ["Program visibility", "Translation delivery status", "Coverage, freshness, publication, quality, and exceptions"],
];

const operatingLoop = [
  {
    title: "Detect",
    description: "Identify content that has been created, revised, deleted, redirected, or structurally changed.",
    output: "A normalized change queue",
  },
  {
    title: "Classify",
    description: "Determine what changed, which markets are affected, and whether localization is required.",
    output: "A localization-ready record",
  },
  {
    title: "Prioritize",
    description: "Assign urgency, service level, and release expectations according to risk and business impact.",
    output: "An approved priority",
  },
  {
    title: "Route",
    description: "Select the appropriate translation, review, approval, and exception path.",
    output: "A defined production route",
  },
  {
    title: "Translate and Review",
    description: "Produce localized content, apply language assets, perform required review, and resolve exceptions.",
    output: "Approved localized content",
  },
  {
    title: "Release",
    description: "Publish through simultaneous, controlled-window, market-priority, or rolling release models.",
    output: "Live multilingual updates",
  },
  {
    title: "Monitor and Improve",
    description: "Verify freshness, quality, functionality, and search readiness, then feed findings into the next cycle.",
    output: "Corrective actions and improvements",
  },
];

const priorityRows = [
  {
    category: "Safety, legal, security, or compliance update",
    urgency: "Immediate",
    risk: "High",
    response: "Expedited specialist translation, approval, publication, and live-page verification.",
  },
  {
    category: "Product, service, or pricing change",
    urgency: "High",
    risk: "High",
    response: "Release-linked translation with professional review and clear publication ownership.",
  },
  {
    category: "Global campaign or announcement",
    urgency: "Date-driven",
    risk: "Medium to high",
    response: "Planned multilingual release with sufficiently stable source content and confirmed reviewers.",
  },
  {
    category: "Navigation, form, or conversion content",
    urgency: "High",
    risk: "Medium",
    response: "Rapid translation followed by visual and functional validation.",
  },
  {
    category: "SEO title, description, or structured page data",
    urgency: "With page update",
    risk: "Medium",
    response: "Localize and validate as part of the same page release.",
  },
  {
    category: "Customer support or instructional content",
    urgency: "Impact-based",
    risk: "Medium",
    response: "Prioritize according to traffic, product use, customer consequence, and support demand.",
  },
  {
    category: "Evergreen guide or resource update",
    urgency: "Routine",
    risk: "Low to medium",
    response: "Use a rolling update or planned batch according to market value.",
  },
  {
    category: "Minor stylistic source edit",
    urgency: "Low",
    risk: "Low",
    response: "Evaluate whether a corresponding target-language change is necessary.",
  },
];

const changeMethods = [
  {
    icon: "layout",
    title: "CMS-Based Detection",
    body: "Use publishing events, version comparisons, localization status fields, content-entry revisions, or connector-generated translation jobs.",
  },
  {
    icon: "code",
    title: "API or Repository Detection",
    body: "Use content API events, changed identifiers, repository commits, deployment notifications, and structured data comparisons.",
  },
  {
    icon: "globe",
    title: "Website Translation Proxy Detection",
    body: "Identify newly encountered pages, changed source text, and updated website components as content is served or scanned.",
  },
  {
    icon: "calendar",
    title: "Scheduled or File-Based Detection",
    body: "Use recurring exports, website inventories, campaign calendars, page-comparison reports, and standardized request forms.",
  },
];

const incrementalColumns = [
  {
    title: "Preserve Page and Change Context",
    body: "Give translators and reviewers the full page, neighboring content, the previous source and translation, the reason for the change, intended audience, and any visual or technical constraints.",
    bullets: [
      "Page and component location",
      "Previous approved translation",
      "Associated buttons, images, and forms",
      "Market, audience, and content purpose",
    ],
  },
  {
    title: "Reuse Translation Memory Carefully",
    body: "Use exact and fuzzy matches to reduce repeated work, but review them when the surrounding context, product meaning, legal requirements, or target market has changed.",
    bullets: [
      "Exact and fuzzy match reuse",
      "Repeated component consistency",
      "Context and market verification",
      "Outdated match identification",
    ],
    link: ["Translation Memory", "https://www.stepes.com/translation-memory/"],
  },
  {
    title: "Keep Terminology Current",
    body: "Maintain approved brand, product, technical, and regulated language as an active business asset with clear proposal, approval, market applicability, and retirement rules.",
    bullets: [
      "Mandatory, preferred, and prohibited terms",
      "Language and market applicability",
      "Approval and effective dates",
      "Reviewer decisions and conflict handling",
    ],
    link: ["Terminology Management", "https://www.stepes.com/terminology-management/"],
  },
];

const routingRows = [
  {
    profile: "Repetitive, stable, low-risk content",
    path: "Approved translation memory reuse or AI-assisted translation",
    review: "Automated checks, spot review, or exception-based review",
  },
  {
    profile: "Standard informational website content",
    path: "AI-assisted translation",
    review: "Professional linguistic review",
  },
  {
    profile: "Marketing and brand content",
    path: "AI-assisted or professional translation",
    review: "Linguistic review with brand and market guidance",
  },
  {
    profile: "High-visibility campaign content",
    path: "Professional or carefully controlled AI-assisted translation",
    review: "Linguistic and in-market review",
  },
  {
    profile: "Product-critical or technical content",
    path: "Qualified professional translation",
    review: "Technical or subject-matter review",
  },
  {
    profile: "Legal, regulated, or safety-related content",
    path: "Specialist translation",
    review: "Formal expert review and documented approval",
  },
  {
    profile: "Urgent correction",
    path: "Expedited route appropriate to the content risk",
    review: "Minimum defined approval authority plus post-publication verification",
  },
];

const exceptions = [
  "Insufficient source context",
  "Terminology conflict",
  "Low-confidence AI output",
  "Failed content extraction",
  "Missing variables or placeholders",
  "Unsupported formatting or language combination",
  "Reviewer disagreement",
  "Blocked publication",
  "Urgent content that cannot complete the standard route",
];

const releaseModels = [
  {
    label: "Simultaneous Global Release",
    description: "The source and required localized versions publish together.",
    bestFor: "Major product launches, global campaigns, legal changes, safety communications, and coordinated announcements.",
    requirement: "Stable source content, adequate lead time, confirmed language coverage, available reviewers, and controlled late changes.",
  },
  {
    label: "Controlled Localization Window",
    description: "The source publishes first and localized versions follow within an agreed service window.",
    bestFor: "Routine product updates, standard marketing pages, corporate resources, and editorial content.",
    requirement: "Visible service levels, differentiated targets by content type or language, and reliable status tracking.",
  },
  {
    label: "Market-Priority Release",
    description: "Priority regions publish first according to commercial, customer, legal, or operational need.",
    bestFor: "Phased market strategies, unequal demand, limited review resources, and region-specific launches.",
    requirement: "Defined prioritization criteria and a controlled process for market exceptions.",
  },
  {
    label: "Rolling Continuous Release",
    description: "Each language publishes when translation and required review are complete.",
    bestFor: "High-volume content, modular websites, frequent updates, and independent language publishing.",
    requirement: "Reliable automated routing, language-status visibility, and effective exception handling.",
  },
];

const qaLayers = [
  {
    icon: "check",
    title: "Automated Content Checks",
    body: "Identify untranslated text, missing translations, terminology violations, damaged placeholders, malformed tags, inconsistent numbers, length issues, and missing metadata.",
  },
  {
    icon: "language",
    title: "Linguistic Quality",
    body: "Evaluate accuracy, completeness, fluency, grammar, terminology, tone, consistency, market suitability, and the clarity of calls to action.",
  },
  {
    icon: "screen",
    title: "Visual and Responsive Quality",
    body: "Check text expansion, truncation, line breaks, font support, mobile display, right-to-left behavior, component integrity, and image-text alignment.",
  },
  {
    icon: "cursor",
    title: "Functional Quality",
    body: "Validate navigation, language switching, forms, search, authentication, checkout or conversion paths, downloads, confirmation messages, and regional routing.",
  },
  {
    icon: "search",
    title: "Multilingual SEO Quality",
    body: "Validate localized URLs, titles and descriptions, canonicals, reciprocal hreflang, indexability, internal links, redirects, structured data, and sitemap inclusion.",
  },
];

const roles = [
  {
    title: "Global Content Owner",
    body: "Approves source content, communicates release plans, identifies affected products and markets, and reduces unnecessary late-stage changes.",
  },
  {
    title: "Localization Program Owner",
    body: "Owns the operating model, language coverage, service levels, workflow governance, escalations, reporting, and continuous improvement.",
  },
  {
    title: "Website or CMS Team",
    body: "Maintains integrations, supports content exchange, controls publishing permissions, preserves language relationships, and resolves technical exceptions.",
  },
  {
    title: "Translation and Review Team",
    body: "Produces and reviews localized content, applies terminology, records linguistic decisions, and escalates source or quality concerns.",
  },
  {
    title: "Regional Stakeholders",
    body: "Confirm market relevance, provide local context, approve designated sensitive content, and report issues from the live regional experience.",
  },
  {
    title: "SEO and Analytics Teams",
    body: "Define international search requirements, monitor localized visibility, identify technical search issues, and connect content operations with performance.",
  },
];

const responsibilityRows = [
  ["Detect source changes", "Global Content", "Web / CMS", "Localization Program"],
  ["Determine market relevance", "Localization Program", "Global and Regional Teams", "Localization Program"],
  ["Assign priority and service level", "Localization Program", "Content, Regional, SEO", "Localization Program"],
  ["Translate and review", "Translation and Review", "Regional or Subject-Matter Expert when required", "Localization Program"],
  ["Publish localized content", "Web / CMS", "Localization Program", "Web / CMS"],
  ["Validate live pages", "Web, Language, and SEO Owners", "Regional Teams", "Localization Program"],
  ["Resolve exceptions", "Assigned Technical or Language Owner", "Relevant Stakeholders", "Localization Program"],
  ["Report performance", "Localization Program", "Web, Quality, Regional, SEO", "Localization Program"],
];

const governanceDecisions = [
  "Which changes trigger localization",
  "Which content is required in each language",
  "Which markets may opt out",
  "Acceptable source-to-localized publication delays",
  "Required review levels by content type",
  "Who may approve publication",
  "How urgent changes are escalated",
  "How regional exceptions are handled",
  "Who owns translation memory and terminology",
  "How blocked work is resolved and reported",
];

const metrics = [
  {
    icon: "coverage",
    title: "Content Coverage",
    question: "Is the required website content available in each market?",
    examples: "Required pages, missing components, metadata completion, and coverage by customer journey.",
  },
  {
    icon: "clock",
    title: "Update Latency",
    question: "How far behind the source site is each language?",
    examples: "Average and median delay, overdue updates, open-change age, and service-level attainment.",
  },
  {
    icon: "shield",
    title: "Quality Status",
    question: "Are serious linguistic, technical, or functional issues open?",
    examples: "Defect severity, terminology compliance, rework, recurring issues, and live-page defects.",
  },
  {
    icon: "alert",
    title: "Open Exceptions",
    question: "Which updates are blocked, and why?",
    examples: "Technical failures, review delays, missing context, terminology conflicts, and approval bottlenecks.",
  },
  {
    icon: "flag",
    title: "Market Readiness",
    question: "Are priority pages current for upcoming releases and campaigns?",
    examples: "Language readiness, market-specific gaps, launch dependencies, and unresolved high-priority content.",
  },
];

const measurementGroups = [
  {
    title: "Throughput and Cycle Time",
    bullets: [
      "Changes processed during the period",
      "Detection-to-routing time",
      "Translation and review cycle time",
      "Approval and publication waiting time",
      "Emergency-update response time",
    ],
  },
  {
    title: "Reuse and Operational Efficiency",
    bullets: [
      "Translation memory reuse",
      "Repeated content avoided",
      "Automated routing rate",
      "Human-review routing rate",
      "Exception and manual-handoff rates",
    ],
  },
  {
    title: "Business Performance",
    bullets: [
      "Localized organic traffic",
      "Search visibility",
      "Conversions and engagement",
      "Campaign readiness",
      "Regional content performance",
    ],
  },
];

const technologyCapabilities = [
  "Source-content change detection",
  "Incremental content exchange",
  "Page and component context",
  "Language-status tracking",
  "Translation memory and terminology",
  "Risk-based workflow automation",
  "Reviewer collaboration and approval",
  "Version and release visibility",
  "Exception alerts and quality checks",
  "Reporting and auditability",
];

const technologyPatterns = [
  {
    title: "CMS Connectors",
    body: "Connect structured content entries and language variants directly to translation workflows, especially when localization status should remain visible inside the CMS.",
  },
  {
    title: "Translation APIs",
    body: "Connect custom websites, repositories, product systems, and automated content pipelines through flexible programmatic exchange.",
    link: ["Translation API", "https://www.stepes.com/translation-api/"],
  },
  {
    title: "Website Translation Proxy",
    body: "Support multilingual deployment while reducing source-system development, with continued attention to content coverage, SEO, review, and editorial control.",
    link: ["Website Translation Proxy", "https://www.stepes.com/website-translation-proxy/"],
  },
  {
    title: "Structured File and Hybrid Workflows",
    body: "Use repeatable exports, stable identifiers, version comparison, and reliable reintegration, or combine models across different websites and content systems.",
  },
];

const maturityLevels = [
  {
    level: "Reactive",
    body: "Changes are found manually, requests are inconsistent, ownership is unclear, and localized sites contain significant gaps.",
    next: "Inventory content and languages, assign ownership, and establish a recurring update process.",
  },
  {
    level: "Scheduled",
    body: "Updates are collected periodically, request and review processes are defined, and basic translation memory is reused.",
    next: "Improve change classification, service levels, and language-status visibility.",
  },
  {
    level: "Integrated",
    body: "A connector, API, proxy, or structured exchange supports incremental localization, automated routing, coordinated releases, and reporting.",
    next: "Strengthen exception handling, quality analytics, and regional governance.",
  },
  {
    level: "Optimized",
    body: "Automation is risk-based, language assets are governed, sites are reliably synchronized, and performance data drives improvement.",
    next: "Optimize content selection, market value, recurring quality patterns, and business outcomes.",
  },
];

const roadmap = [
  {
    title: "Establish Visibility",
    body: "Inventory websites, domains, languages, owners, publishing processes, existing workflows, current coverage, and priority content gaps.",
  },
  {
    title: "Define Governance",
    body: "Set localization triggers, risk categories, responsibilities, review levels, release policies, service levels, escalation paths, and reporting measures.",
  },
  {
    title: "Connect the Workflow",
    body: "Choose the technical model, configure change detection, maintain stable identifiers, connect language assets, provide context, and test exceptions.",
  },
  {
    title: "Run a Controlled Pilot",
    body: "Use one website or business unit, representative languages and content categories, measurable service levels, and end-to-end live-page validation.",
  },
  {
    title: "Scale the Program",
    body: "Add languages and sites gradually, standardize onboarding, refine routing rules, automate repeatable checks, expand reporting, and document procedures.",
  },
  {
    title: "Optimize Continuously",
    body: "Use data to reduce recurring delays, unnecessary approvals, poor source content, missing terminology, repetitive defects, and low-value work.",
  },
];

const failurePoints = [
  {
    title: "Translating Every Detected Change Automatically",
    problem: "Technical changes and low-value edits create unnecessary translation work and review noise.",
    correction: "Detect broadly, then filter and classify changes before translation.",
  },
  {
    title: "Waiting for Large Translation Batches",
    problem: "Language sites remain outdated while teams wait for enough content to justify a project.",
    correction: "Process priority changes incrementally and reserve batching for appropriate lower-risk content.",
  },
  {
    title: "Treating Every Content Type the Same",
    problem: "Routine pages receive excessive review while critical content may not receive specialist attention.",
    correction: "Route content according to risk, visibility, complexity, and customer consequence.",
  },
  {
    title: "Publishing Source Changes Without a Localization Policy",
    problem: "Products, campaigns, pricing, or legal information become inconsistent across markets.",
    correction: "Define simultaneous, controlled-window, market-priority, and rolling release policies by content class.",
  },
  {
    title: "Applying Translation Memory Without Context",
    problem: "A stored match may be inappropriate for the current page, product, audience, or market.",
    correction: "Provide page context and require review when meaning, risk, or use has changed.",
  },
  {
    title: "Depending on Regional Review Without Deadlines",
    problem: "Content can remain in review indefinitely.",
    correction: "Define reviewer scope, target response times, escalation procedures, and fallback approval authority.",
  },
  {
    title: "Tracking Delivery but Not Publication",
    problem: "Approved content may never reach the correct live page.",
    correction: "Track the workflow through reintegration, publishing, and live-page verification.",
  },
  {
    title: "Excluding SEO and Metadata",
    problem: "The page may be translated while its title, description, URL, structured data, and internal links remain incomplete.",
    correction: "Treat customer-facing and technical page elements as part of the same localization record.",
  },
  {
    title: "Automating Before Governance Is Defined",
    problem: "Technology accelerates unclear decisions and produces more exceptions.",
    correction: "Define triggers, ownership, review rules, and release policies before scaling automation.",
  },
];

const checklistGroups = [
  {
    title: "Content Visibility",
    items: [
      "Document every source website, language version, and market variant.",
      "Assign a named owner to each website and content area.",
      "Detect new and revised content reliably.",
      "Track deleted pages, redirects, and structural changes.",
      "Keep changes associated with the correct source page or component.",
      "Record language and market applicability.",
    ],
  },
  {
    title: "Prioritization",
    items: [
      "Define content categories and risk levels.",
      "Document translation triggers.",
      "Set priority and service-level rules.",
      "Create an expedited route for urgent and high-risk content.",
      "Allow low-value changes to be filtered, deferred, or grouped.",
      "Record regional content exceptions.",
    ],
  },
  {
    title: "Translation and Review",
    items: [
      "Maintain translation memory and approved terminology.",
      "Provide page, market, and change context.",
      "Define AI and human-review thresholds.",
      "Require specialist review for appropriate content.",
      "Escalate low-confidence content and other exceptions.",
      "Capture linguistic decisions for future reuse.",
    ],
  },
  {
    title: "Release and Quality",
    items: [
      "Define release policies by content category.",
      "Give required reviewers clear deadlines.",
      "Assign publication ownership.",
      "Compare source and localized status.",
      "Include metadata, links, redirects, and related components.",
      "Verify the live page after publication.",
      "Run automated, linguistic, visual, functional, and SEO checks at the appropriate cadence.",
    ],
  },
  {
    title: "Governance and Improvement",
    items: [
      "Document central and regional responsibilities.",
      "Agree on service levels.",
      "Apply appropriate security and access controls.",
      "Assign owners for translation memory and terminology.",
      "Make exceptions and escalations auditable.",
      "Review operational metrics regularly.",
      "Update the operating model as websites, markets, and technology change.",
    ],
  },
];

const faqs = [
  {
    question: "What Is Continuous Website Localization?",
    answer: "Continuous website localization is an ongoing process for detecting source-site changes, deciding which markets and languages require updates, translating and reviewing incremental content, coordinating publication, and monitoring localized websites after release. It also includes prioritization, governance, quality assurance, release management, and performance measurement.",
  },
  {
    question: "Is Continuous Localization the Same as Continuous Translation?",
    answer: "No. Continuous translation focuses primarily on moving new content into translation. Continuous localization also addresses market applicability, content prioritization, terminology, translation memory, human-review requirements, publishing, testing, multilingual SEO, governance, and live-site monitoring.",
  },
  {
    question: "Does Continuous Localization Require a CMS Connector?",
    answer: "No. A CMS connector can make change detection and content exchange more efficient, but a translation API, website translation proxy, structured file exchange, scheduled exports, and hybrid workflows can also support continuous operations. The defining feature is a dependable ongoing operating model.",
  },
  {
    question: "Should Every Source-Site Change Be Translated?",
    answer: "No. Teams should determine whether a change is customer-facing, meaningful, market-relevant, and appropriate for each language. Technical edits, stylistic changes, and market-specific content may not require localization everywhere.",
  },
  {
    question: "Can AI Translate All Ongoing Website Updates?",
    answer: "AI can accelerate many repetitive, lower-risk, and high-volume website translation tasks. Human review remains important when content is highly visible, persuasive, technical, legally significant, regulated, safety-related, or capable of materially affecting the customer. The route should be selected according to risk.",
  },
  {
    question: "How Quickly Should Localized Websites Be Updated?",
    answer: "There is no universal service level. Safety or legal corrections may require immediate action, major launches may require simultaneous publication, product content may use one-day or multi-day windows, and evergreen resources may follow a rolling schedule. The target should reflect urgency, market value, and the consequence of delay.",
  },
  {
    question: "How Do Translation Memory and Terminology Support Continuous Localization?",
    answer: "Translation memory helps identify previously translated content that may be reused or adapted. Terminology management helps maintain approved brand, product, technical, and regulated language. Both can improve consistency and reduce repeated work, but both require maintenance and contextual review.",
  },
  {
    question: "Should All Languages Be Released at the Same Time?",
    answer: "Not necessarily. Simultaneous publication is valuable for major launches, legal updates, and coordinated campaigns. Routine content may be better suited to controlled localization windows, market-priority releases, or rolling publication.",
  },
  {
    question: "How Can We Tell Whether Localized Websites Are Falling Behind?",
    answer: "Track required content coverage, source-to-localized publication delay, overdue priority updates, missing pages and components, open exceptions, localized metadata coverage, live-page freshness, and content completed within service-level targets.",
  },
  {
    question: "Who Should Own Continuous Website Localization?",
    answer: "A named localization program owner should coordinate the operating model, with clearly assigned responsibilities across global content, web or CMS operations, translation and review teams, regional stakeholders, SEO specialists, and publishing owners.",
  },
  {
    question: "What Is the Best Way to Start?",
    answer: "Start with one website or content area. Document its publishing process, language coverage, current gaps, stakeholders, and update frequency. Define priority categories and service levels, then pilot an incremental workflow with a small group of representative languages.",
  },
];

const sources = [
  {
    title: "Localized Versions of Your Pages",
    organization: "Google Search Central",
    description: "Guidance on hreflang, reciprocal language relationships, and methods for identifying localized page variants.",
    url: "https://developers.google.com/search/docs/specialty/international/localized-versions",
  },
  {
    title: "Managing Multi-Regional and Multilingual Sites",
    organization: "Google Search Central",
    description: "Guidance on language-specific URLs, visible page language, navigation between language versions, and international targeting.",
    url: "https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites",
  },
  {
    title: "Canonical URL Guidance",
    organization: "Google Search Central",
    description: "Recommendations for canonical consistency, same-language canonical targets, and internal links to canonical URLs.",
    url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
  },
  {
    title: "Language on the Web",
    organization: "W3C Internationalization",
    description: "Guidance on declaring document and in-page language information for language-sensitive processing and accessibility.",
    url: "https://www.w3.org/International/getting-started/language",
  },
];

const relatedResources = [
  {
    category: "Technology Planning",
    title: "Website Translation Workflows",
    description: "Compare CMS, translation API, proxy, and file-based approaches for moving website content through translation and publishing.",
    url: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    category: "End-to-End Planning",
    title: "How to Translate a Website",
    description: "Plan the complete website translation journey from assessment and workflow selection through testing, launch, and ongoing operations.",
    url: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
  },
  {
    category: "AI + Human Quality",
    title: "AI Website Translation With Human Review",
    description: "Route website content through AI translation, post-editing, professional translation, and specialist review according to risk.",
    url: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    category: "Quality Assurance",
    title: "Website Localization Testing Checklist",
    description: "Validate linguistic, visual, responsive, functional, right-to-left, and market-specific website quality.",
    url: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    category: "International Search",
    title: "Multilingual SEO Guide",
    description: "Connect localized content with international keywords, URLs, metadata, internal links, hreflang, and site architecture.",
    url: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
  {
    category: "Budget Planning",
    title: "Translation Cost Guide",
    description: "Understand the content, language, quality, integration, testing, and update-frequency factors that shape translation budgets.",
    url: "https://www.stepes.com/resources/translation-cost-guide/",
  },
];

function Icon({ name, size = 22, className = "" }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    className,
  };

  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
    chevron: <path d="m8 10 4 4 4-4"/>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/><path d="M9 9v11"/></>,
    code: <><path d="m8 9-3 3 3 3"/><path d="m16 9 3 3-3 3"/><path d="m14 5-4 14"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18"/><path d="M12 3a15 15 0 0 0 0 18"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/><path d="M3 10h18"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="m8 12 2.5 2.5L16 9"/></>,
    language: <><path d="M4 5h7"/><path d="M7.5 3v2"/><path d="M5 9c1.5 2.4 3.8 4.3 7 5.5"/><path d="M10 5c-.8 4-3 7-6 9"/><path d="m14 19 3-8 3 8"/><path d="M15 16h4"/></>,
    screen: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8"/><path d="M12 18v3"/></>,
    cursor: <><path d="m5 3 14 9-6 2-2 6z"/><path d="m13 14 4 4"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></>,
    coverage: <><rect x="3" y="4" width="7" height="7" rx="1"/><rect x="14" y="4" width="7" height="7" rx="1"/><rect x="3" y="15" width="7" height="5" rx="1"/><rect x="14" y="15" width="7" height="5" rx="1"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.8 2.8 8 7 10 4.2-2 7-5.2 7-10V6z"/><path d="m9 12 2 2 4-4"/></>,
    alert: <><path d="M12 3 2.8 20h18.4z"/><path d="M12 9v4"/><path d="M12 17h.01"/></>,
    flag: <><path d="M5 21V4"/><path d="M5 5h11l-2 4 2 4H5"/></>,
    refresh: <><path d="M20 11a8 8 0 0 0-14.8-4"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14.8 4"/><path d="M20 20v-5h-5"/></>,
    external: <><path d="M14 4h6v6"/><path d="m10 14 10-10"/><path d="M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6"/></>,
  };

  return <svg {...common}>{paths[name] || paths.arrow}</svg>;
}

function ArrowLink({ href, children, external = false, className = "" }) {
  return (
    <a
      className={`editorialLink ${className}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <span>{children}</span>
      <Icon name={external ? "external" : "arrow"} size={17} />
    </a>
  );
}

function SectionIntro({ id, title, children, align = "left", eyebrow }) {
  return (
    <div className={`sectionIntro sectionIntro--${align}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 id={id}>{title}</h2>
      {children ? <div className="sectionDeck">{children}</div> : null}
    </div>
  );
}

function ResponsiveTable({ columns, rows, rowKey = "category", labels }) {
  return (
    <div className="responsiveTable">
      <div className="tableView" aria-hidden="false">
        <table>
          <thead>
            <tr>
              {columns.map((column) => <th key={column.key}>{column.label}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row[rowKey] || index}>
                {columns.map((column) => <td key={column.key}>{row[column.key]}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mobileRecords">
        {rows.map((row, index) => (
          <article className="mobileRecord" key={row[rowKey] || index}>
            {columns.map((column, columnIndex) => (
              <div className="mobileRecordRow" key={column.key}>
                <div className="mobileRecordLabel">{labels?.[column.key] || column.label}</div>
                <div className={columnIndex === 0 ? "mobileRecordPrimary" : "mobileRecordValue"}>{row[column.key]}</div>
              </div>
            ))}
          </article>
        ))}
      </div>
    </div>
  );
}

function HeroVisual() {
  return (
    <div className="heroVisual" role="img" aria-label="Continuous website localization operating loop illustration">
      <div className="heroVisualHeader">
        <span>Source Website</span>
        <span className="heroVisualStatus"><i /> Continuously Monitored</span>
      </div>
      <div className="sourcePage">
        <div className="sourcePageTop">
          <div className="sourceBrand" />
          <div className="sourceNav"><span/><span/><span/></div>
        </div>
        <div className="sourceContent">
          <div className="sourceCopy">
            <span className="line lineStrong" />
            <span className="line" />
            <span className="line lineShort" />
          </div>
          <div className="sourceImage" />
        </div>
        <div className="changeTag">3 content changes detected</div>
      </div>
      <div className="visualFlow" aria-hidden="true">
        <span>Detect</span><i/><span>Route</span><i/><span>Release</span>
      </div>
      <div className="languageSites">
        {["FR", "DE", "JA"].map((language, index) => (
          <div className="languageSite" key={language}>
            <div className="languageSiteTop">
              <span>{language}</span>
              <b>{index === 1 ? "Review" : "Current"}</b>
            </div>
            <div className="languageLines"><i/><i/><i/></div>
          </div>
        ))}
      </div>
      <div className="visualFooter">
        <span><i className="dot dotCurrent"/> 2 languages current</span>
        <span><i className="dot dotReview"/> 1 in review</span>
      </div>
    </div>
  );
}

export default function ContinuousWebsiteLocalizationGuide() {
  return (
    <main className="stepesGuide">
      <style>{styles}</style>

      <section className="hero sectionShell">
        <div className="heroCopy">
          <div className="eyebrow">ONGOING OPERATIONS</div>
          <h1>Continuous Website Localization</h1>
          <p className="heroDeck">
            Build a repeatable process for detecting, translating, reviewing, publishing, and monitoring new website content without allowing localized sites to fall behind.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href={`${CANONICAL}#continuous-localization-operating-loop`}>
              <span>View the Operating Loop</span>
              <Icon name="arrow" size={18} />
            </a>
            <a className="buttonSecondary" href="https://www.stepes.com/website-translation-services/">
              <span>Website Translation</span>
              <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
        <HeroVisual />
      </section>

      <section className="utilityBand">
        <div className="sectionShell utilityGrid">
          <div><span>RESOURCE TYPE</span><strong>Localization Guide</strong></div>
          <div><span>CORE FRAMEWORK</span><strong>7-Stage Operating Loop</strong></div>
          <div><span>PRACTICAL TOOLS</span><strong>Priority and Review Matrices</strong></div>
          <div><span>IMPLEMENTATION</span><strong>Maturity Model and Checklist</strong></div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="key-takeaways">
        <SectionIntro id="key-takeaways" title="Key Takeaways" align="center">
          A continuous localization program keeps the right website content current in the right markets by connecting content change detection with accountable routing, review, release, and monitoring.
        </SectionIntro>
        <div className="takeawayGrid">
          {takeaways.map((item) => (
            <article className="takeaway" key={item.title}>
              <div className="takeawayMarker" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="comparisonPanel">
          <div className="comparisonLead">
            <h3>From Translation Projects to Continuous Operations</h3>
            <p>Moving from periodic projects to an ongoing operating model changes how updates are discovered, routed, measured, and owned.</p>
          </div>
          <div className="comparisonRows">
            <div className="comparisonHeader"><span>Operating Area</span><span>Project-Based</span><span>Continuous</span></div>
            {comparisonRows.map((row) => (
              <div className="comparisonRow" key={row[0]}>
                <strong>{row[0]}</strong><span>{row[1]}</span><span>{row[2]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contentsSection sectionBlock">
        <div className="sectionShell">
          <SectionIntro id="in-this-guide" title="In This Guide" align="center">
            Move from the operating principles to workflow design, governance, measurement, implementation, and practical checks.
          </SectionIntro>
          <nav className="desktopContents" aria-label="Guide sections">
            {tocGroups.map((group) => (
              <div className="contentsGroup" key={group.title}>
                <h3>{group.title}</h3>
                {group.items.map(([id, label]) => (
                  <a href={`${CANONICAL}#${id}`} key={id}>
                    <span className="tocMarker" aria-hidden="true" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            ))}
          </nav>
          <details className="mobileContents">
            <summary><span>In This Guide</span><Icon name="chevron" size={20}/></summary>
            <nav aria-label="Guide sections on mobile">
              {tocGroups.map((group) => (
                <div className="mobileContentsGroup" key={group.title}>
                  <h3>{group.title}</h3>
                  {group.items.map(([id, label]) => (
                    <a
                    href={`${CANONICAL}#${id}`}
                    key={id}
                    onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}
                  >
                    {label}
                  </a>
                  ))}
                </div>
              ))}
            </nav>
          </details>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="why-localized-websites-fall-behind">
        <div className="editorialSplit">
          <div>
            <SectionIntro id="why-localized-websites-fall-behind" title="Why Localized Websites Fall Behind">
              Localized websites rarely become outdated because an organization deliberately abandons them. They fall behind because source publishing and localization operate as separate processes.
            </SectionIntro>
            <p className="bodyLarge">
              A central marketing team may update a product page without notifying the localization team. A regional reviewer may not know that approval is waiting. Translated metadata may be omitted from a CMS request. A completed translation may remain unpublished because responsibility for reintegration was never assigned.
            </p>
            <p>
              Over time, small gaps accumulate: new pages exist only in the source language, localized pricing no longer matches the offer, navigation points to outdated destinations, product terminology diverges, and regional pages retain old calls to action.
            </p>
          </div>
          <aside className="definitionCallout">
            <div className="eyebrow">KEY CONCEPT</div>
            <h3>The Localization Gap</h3>
            <p>The difference between what is current on the source website and what is complete, accurate, approved, and available across every required language site.</p>
            <div className="impactList">
              {["Inconsistent product information", "Delayed international campaigns", "Incomplete customer journeys", "Weaker international search visibility", "Avoidable translation duplication", "Legal or compliance concerns"].map((item) => (
                <div key={item}><Icon name="arrow" size={17}/><span>{item}</span></div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="definitionSection sectionBlock">
        <div className="sectionShell definitionLayout">
          <div>
            <SectionIntro id="what-continuous-website-localization-means" title="What Continuous Website Localization Means">
              Continuous website localization is a coordinated process for identifying source-site changes, determining what requires localization, routing incremental content through the appropriate translation and review path, publishing approved updates, and monitoring language sites over time.
            </SectionIntro>
            <p>
              A mature program brings together change detection, market applicability, prioritization, translation memory, terminology, AI-assisted translation, professional human review, specialist approval, release coordination, exception handling, quality assurance, reporting, and governance.
            </p>
            <ArrowLink href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">Website Translation Workflows</ArrowLink>
          </div>
          <div className="doesNotMean">
            <h3>Continuous Localization Does Not Mean</h3>
            {[
              "Every source edit must be translated immediately",
              "Every language follows the same service level",
              "All content is translated automatically",
              "Human review is eliminated",
              "Every market publishes simultaneously",
              "One technical integration model is mandatory",
            ].map((item) => (
              <div className="doesNotRow" key={item}><span aria-hidden="true">×</span><p>{item}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="loopSection sectionBlock" aria-labelledby="continuous-localization-operating-loop">
        <div className="sectionShell">
          <div className="darkIntro">
            <div className="eyebrow eyebrowDark">THE CORE FRAMEWORK</div>
            <h2 id="continuous-localization-operating-loop">The Continuous Localization Operating Loop</h2>
            <p>A dependable program connects seven stages in a recurring cycle, supported by governance, security, terminology, translation memory, reporting, and quality controls.</p>
          </div>
          <div className="loopGrid">
            {operatingLoop.map((stage, index) => (
              <article className="loopStage" key={stage.title}>
                <div className="loopTop">
                  <span className="loopNumber">{String(index + 1).padStart(2, "0")}</span>
                  {index < operatingLoop.length - 1 ? <Icon name="arrow" size={18} className="loopArrow"/> : null}
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className="loopOutput"><span>Output</span><strong>{stage.output}</strong></div>
              </article>
            ))}
          </div>
          <div className="loopReturn">
            <Icon name="refresh" size={19} />
            <p><strong>Monitor and Improve feeds the next Detect cycle.</strong> New findings, exceptions, and source changes become the next change queue.</p>
          </div>
          <div className="loopControls">
            {[
              "Governance and ownership",
              "Translation memory and terminology",
              "Security and access controls",
              "Quality assurance and reporting",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="detect-and-prioritize-website-changes">
        <SectionIntro id="detect-and-prioritize-website-changes" title="Detect and Prioritize Website Changes" align="center">
          Change detection is the starting point, but detecting everything is not the same as translating everything. A useful process separates meaningful customer-facing changes from updates that do not require localization.
        </SectionIntro>
        <div className="methodGrid">
          {changeMethods.map((method) => (
            <article className="methodItem" key={method.title}>
              <div className="iconBox"><Icon name={method.icon}/></div>
              <h3>{method.title}</h3>
              <p>{method.body}</p>
            </article>
          ))}
        </div>
        <div className="recordCallout">
          <div>
            <div className="eyebrow">ACTIONABLE CHANGE RECORD</div>
            <h3>Give Every Change Enough Context to Move</h3>
          </div>
          <div className="recordFields">
            {["Source URL or content ID", "Content owner", "Target markets and languages", "Description of the change", "Intended publication date", "Risk and priority", "Required review route", "Localized publication status"].map((field) => (
              <span key={field}>{field}</span>
            ))}
          </div>
        </div>
        <div className="wideModule">
          <div className="moduleHeading">
            <h3>Content Priority and Response Matrix</h3>
            <p>Use the content type, urgency, and consequence of delay to establish the starting response.</p>
          </div>
          <ResponsiveTable
            columns={[
              { key: "category", label: "Content Category" },
              { key: "urgency", label: "Typical Urgency" },
              { key: "risk", label: "Typical Risk" },
              { key: "response", label: "Recommended Response" },
            ]}
            rows={priorityRows}
          />
          <div className="recommendationLine"><strong>Recommended principle:</strong> Automate detection, but govern the response.</div>
        </div>
      </section>

      <section className="incrementalSection sectionBlock" aria-labelledby="translate-incrementally-without-losing-context">
        <div className="sectionShell">
          <SectionIntro id="translate-incrementally-without-losing-context" title="Translate Incrementally Without Losing Context" align="center">
            Incremental translation focuses effort on new and changed content instead of repeatedly translating complete pages. The process must reduce repeated work without reducing linguistic understanding.
          </SectionIntro>
          <div className="incrementalGrid">
            {incrementalColumns.map((column) => (
              <article className="incrementalColumn" key={column.title}>
                <h3>{column.title}</h3>
                <p>{column.body}</p>
                <ul>
                  {column.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                {column.link ? <ArrowLink href={column.link[1]}>{column.link[0]}</ArrowLink> : null}
              </article>
            ))}
          </div>
          <div className="qualityNote">
            <div className="eyebrow">QUALITY NOTE</div>
            <p>A single changed word may affect terminology, grammar, agreement, tone, or meaning elsewhere on the page. Preserve enough context to evaluate the complete customer experience.</p>
          </div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="route-automation-and-human-review-by-risk">
        <SectionIntro id="route-automation-and-human-review-by-risk" title="Route Automation and Human Review by Risk">
          Continuous localization works best when routine content moves efficiently while high-impact content receives the human judgment it requires.
        </SectionIntro>
        <div className="routingIntro">
          <div>
            <p className="bodyLarge">A universal translation path either over-processes low-risk content or under-protects customer-critical content. Risk-based routing creates a more useful balance.</p>
            <div className="criteriaChips">
              {["Customer visibility", "Business impact", "Legal exposure", "Safety implications", "Brand sensitivity", "Technical complexity", "Content lifespan", "Market importance", "Consequence of error"].map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <aside className="routingAside">
            <h3>Automation Should Surface Judgment</h3>
            <p>Use automation to move predictable work efficiently and make unpredictable work easier to find, assign, and resolve.</p>
            <ArrowLink href="https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/">AI Website Translation With Human Review</ArrowLink>
          </aside>
        </div>
        <div className="wideModule routingMatrix">
          <div className="moduleHeading">
            <h3>Risk-Based Translation and Review Matrix</h3>
            <p>The recommended route is a starting point. Actual review should reflect the content, market, business consequence, and approval requirements.</p>
          </div>
          <ResponsiveTable
            rowKey="profile"
            columns={[
              { key: "profile", label: "Content Profile" },
              { key: "path", label: "Recommended Translation Path" },
              { key: "review", label: "Typical Review Level" },
            ]}
            rows={routingRows}
          />
        </div>
        <div className="exceptionPanel">
          <div>
            <div className="eyebrow">EXCEPTION HANDLING</div>
            <h3>Do Not Let Automation Fail Silently</h3>
            <p>Each exception should have a visible status, assigned owner, target response time, defined escalation path, and auditable resolution.</p>
          </div>
          <div className="exceptionList">
            {exceptions.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="releaseSection sectionBlock" aria-labelledby="synchronize-multilingual-releases">
        <div className="sectionShell">
          <SectionIntro id="synchronize-multilingual-releases" title="Synchronize Multilingual Releases" align="center">
            Release synchronization does not always require every language to publish at the same moment. Choose a policy that reflects urgency, customer impact, legal significance, campaign timing, review capacity, and market priority.
          </SectionIntro>
          <div className="releaseGrid">
            {releaseModels.map((model) => (
              <article className="releaseCard" key={model.label}>
                <h3>{model.label}</h3>
                <p className="releaseDescription">{model.description}</p>
                <div className="releaseField"><span>Best suited for</span><p>{model.bestFor}</p></div>
                <div className="releaseField"><span>Operational requirement</span><p>{model.requirement}</p></div>
              </article>
            ))}
          </div>
          <div className="readinessBand">
            <div>
              <div className="eyebrow">RELEASE READINESS</div>
              <h3>Confirm the Complete Publishing Record</h3>
            </div>
            <ul>
              {["Source content is approved or sufficiently stable", "Affected languages and markets are identified", "Required terminology and dependencies are available", "Review and approval are recorded", "Content maps to the correct page or component", "Metadata, internal links, redirects, and deleted content are addressed", "Publication ownership and correction procedures are clear"].map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="build-continuous-quality-assurance-into-the-process">
        <div className="qualityLayout">
          <div className="qualityLead">
            <SectionIntro id="build-continuous-quality-assurance-into-the-process" title="Build Continuous Quality Assurance Into the Process">
              Website localization quality is not a single prelaunch event. It must continue as pages, components, integrations, and language versions change.
            </SectionIntro>
            <p className="bodyLarge">Use automated controls for repeatable defects and targeted human review for accuracy, clarity, market suitability, visual quality, functionality, and search readiness.</p>
            <div className="qualityLinks">
              <ArrowLink href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">Website Localization Testing Checklist</ArrowLink>
              <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/">Multilingual SEO Guide</ArrowLink>
            </div>
          </div>
          <div className="qaRows">
            {qaLayers.map((layer) => (
              <article className="qaRow" key={layer.title}>
                <div className="iconBox"><Icon name={layer.icon}/></div>
                <div><h3>{layer.title}</h3><p>{layer.body}</p></div>
              </article>
            ))}
          </div>
        </div>
        <div className="seoReference">
          <div>
            <div className="eyebrow">MULTILINGUAL SEO CONTROLS</div>
            <h3>Keep Technical Search Elements in the Same Change Workflow</h3>
          </div>
          <p>Maintain language-specific URLs, localized titles and descriptions, reciprocal <code>hreflang</code>, self-referencing canonicals, crawlability, internal links, redirects, structured data, sitemaps, and HTML language declarations as part of the page record.</p>
        </div>
      </section>

      <section className="governanceSection sectionBlock" aria-labelledby="define-ownership-and-governance">
        <div className="sectionShell">
          <SectionIntro id="define-ownership-and-governance" title="Define Ownership and Governance" align="center">
            Continuous localization becomes unreliable when responsibilities are assumed rather than assigned. Each activity needs a clear accountable owner and a practical escalation path.
          </SectionIntro>
          <div className="rolesGrid">
            {roles.map((role) => (
              <article className="roleItem" key={role.title}>
                <h3>{role.title}</h3>
                <p>{role.body}</p>
              </article>
            ))}
          </div>
          <div className="wideModule responsibilityModule">
            <div className="moduleHeading">
              <h3>Responsibility Framework</h3>
              <p>The exact assignments will vary, but every activity should have one clear accountable owner.</p>
            </div>
            <div className="responsiveTable">
              <div className="tableView">
                <table>
                  <thead><tr><th>Activity</th><th>Responsible</th><th>Consulted or Supporting</th><th>Accountable</th></tr></thead>
                  <tbody>
                    {responsibilityRows.map((row) => <tr key={row[0]}>{row.map((cell) => <td key={cell}>{cell}</td>)}</tr>)}
                  </tbody>
                </table>
              </div>
              <div className="mobileRecords">
                {responsibilityRows.map((row) => (
                  <article className="mobileRecord" key={row[0]}>
                    {["Activity", "Responsible", "Consulted or Supporting", "Accountable"].map((label, index) => (
                      <div className="mobileRecordRow" key={label}><div className="mobileRecordLabel">{label}</div><div className={index === 0 ? "mobileRecordPrimary" : "mobileRecordValue"}>{row[index]}</div></div>
                    ))}
                  </article>
                ))}
              </div>
            </div>
          </div>
          <div className="governanceDecisionGrid">
            <div className="governanceLead">
              <h3>Governance Decisions to Make Explicit</h3>
              <p>Clear rules make routine work faster and exceptions easier to resolve.</p>
              <ArrowLink href="https://www.stepes.com/security-and-compliance/">Security and Compliance</ArrowLink>
            </div>
            <div className="governanceList">
              {governanceDecisions.map((item) => <div key={item}><span aria-hidden="true"/><p>{item}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="metricsSection sectionBlock" aria-labelledby="measure-localization-freshness-and-performance">
        <div className="sectionShell">
          <SectionIntro id="measure-localization-freshness-and-performance" title="Measure Localization Freshness and Performance" align="center">
            Translation volume and turnaround provide only a partial view. The more important question is whether customers in each market can access current, complete, accurate, and functional content.
          </SectionIntro>
          <div className="dashboardGrid">
            {metrics.map((metric) => (
              <article className="dashboardItem" key={metric.title}>
                <div className="dashboardIcon"><Icon name={metric.icon}/></div>
                <h3>{metric.title}</h3>
                <strong>{metric.question}</strong>
                <p>{metric.examples}</p>
              </article>
            ))}
          </div>
          <div className="measurementGrid">
            {measurementGroups.map((group) => (
              <article className="measurementGroup" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="metricsNote"><strong>Use metrics to guide decisions.</strong><span>Do not reward speed at the expense of quality or encourage teams to translate content that does not serve a market need.</span></div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="choose-technology-that-supports-continuous-operations">
        <div className="technologyHeader">
          <SectionIntro id="choose-technology-that-supports-continuous-operations" title="Choose Technology That Supports Continuous Operations">
            CMS connectors, translation APIs, website translation proxy technology, structured file exchange, and hybrid workflows can all support continuous localization. The operating requirements should determine the technical model.
          </SectionIntro>
          <div className="capabilityPanel">
            <h3>Capabilities to Evaluate</h3>
            <div className="capabilityList">
              {technologyCapabilities.map((item) => <div key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
            </div>
          </div>
        </div>
        <div className="technologyRows">
          {technologyPatterns.map((pattern) => (
            <article className="technologyRow" key={pattern.title}>
              <h3>{pattern.title}</h3>
              <p>{pattern.body}</p>
              {pattern.link ? <ArrowLink href={pattern.link[1]}>{pattern.link[0]}</ArrowLink> : <span />}
            </article>
          ))}
        </div>
        <div className="technologyHandoff">
          <p>Need to compare the workflow models in detail?</p>
          <ArrowLink href="https://www.stepes.com/resources/localization-guides/website-translation-workflows/">Compare Website Translation Workflows</ArrowLink>
        </div>
      </section>

      <section className="maturitySection sectionBlock" aria-labelledby="continuous-localization-maturity-model">
        <div className="sectionShell">
          <SectionIntro id="continuous-localization-maturity-model" title="Continuous Localization Maturity Model" align="center">
            Organizations do not need to implement full automation at once. Advance according to website complexity, change volume, content risk, language scale, and internal capacity.
          </SectionIntro>
          <div className="maturityGrid">
            {maturityLevels.map((level, index) => (
              <article className="maturityLevel" key={level.level}>
                <div className="maturityNumber">{index + 1}</div>
                <h3>{level.level}</h3>
                <p>{level.body}</p>
                <div className="maturityNext"><span>Recommended Next Step</span><p>{level.next}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="continuous-localization-implementation-roadmap">
        <SectionIntro id="continuous-localization-implementation-roadmap" title="Implementation Roadmap" align="center">
          Build visibility and governance first, then connect technology, pilot the end-to-end process, scale deliberately, and improve the model with operational data.
        </SectionIntro>
        <div className="roadmapGrid">
          {roadmap.map((step, index) => (
            <article className="roadmapStep" key={step.title}>
              <div className="roadmapHead"><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3></div>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="pilotCallout">
          <div className="eyebrow">PILOT DESIGN</div>
          <h3>Test the Complete Operating Model, Not Only Translation</h3>
          <p>Use a representative website, a small group of languages, several content classes, at least one high-priority release, measurable service levels, controlled regional participation, and live-page validation. Difficult cases often reveal the most important process gaps.</p>
        </div>
      </section>

      <section className="failureSection sectionBlock" aria-labelledby="common-continuous-localization-failure-points">
        <div className="sectionShell">
          <SectionIntro id="common-continuous-localization-failure-points" title="Common Failure Points" align="center">
            Most breakdowns come from unclear decisions and incomplete ownership rather than translation alone.
          </SectionIntro>
          <div className="failureList">
            {failurePoints.map((item) => (
              <article className="failureItem" key={item.title}>
                <h3>{item.title}</h3>
                <div className="failurePair">
                  <div><span>Why It Fails</span><p>{item.problem}</p></div>
                  <div><span>Better Approach</span><p>{item.correction}</p></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="checklistSection sectionBlock" aria-labelledby="continuous-website-localization-checklist">
        <div className="sectionShell">
          <div className="checklistHeader">
            <SectionIntro id="continuous-website-localization-checklist" title="Continuous Website Localization Checklist">
              Use this checklist to assess whether your program can reliably detect changes, route work, publish multilingual updates, maintain quality, and improve over time.
            </SectionIntro>
            <div className="checklistCount"><strong>32</strong><span>operational checks across five workstreams</span></div>
          </div>
          <div className="checklistGrid">
            {checklistGroups.map((group) => (
              <article className="checklistGroup" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}><span className="checkMarker" aria-hidden="true"/><span>{item}</span></li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionBlock sectionShell" aria-labelledby="frequently-asked-questions">
        <SectionIntro id="frequently-asked-questions" title="Frequently Asked Questions" align="center">
          Practical answers to common questions about operating, automating, reviewing, and measuring continuous website localization.
        </SectionIntro>
        <div className="faqPanel">
          {faqs.map((faq, index) => (
            <details key={faq.question} open={index === 0}>
              <summary>
                <span>{faq.question}</span>
                <span className="faqIcon" aria-hidden="true" />
              </summary>
              <div className="faqAnswer"><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="sourcesSection sectionBlock">
        <div className="sectionShell sourcesLayout">
          <div className="sourcesLead">
            <h2 id="sources-and-references">Sources and References</h2>
            <p>Authoritative guidance supporting the multilingual SEO, canonical, language-targeting, and web-language recommendations in this guide.</p>
          </div>
          <div className="sourceList">
            {sources.map((source) => (
              <article className="sourceItem" key={source.title}>
                <div>
                  <a href={source.url} target="_blank" rel="noreferrer">{source.title}<Icon name="external" size={16}/></a>
                  <span>{source.organization}</span>
                </div>
                <p>{source.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="conclusionSection sectionBlock sectionShell">
        <div className="conclusionCopy">
          <h2>Keep Every Language Site Moving With Your Business</h2>
          <p>Continuous localization is not about translating every source edit instantly. It is about ensuring the right content remains current in the right markets through a dependable balance of automation, professional review, release governance, and quality control.</p>
          <p>Begin by making website changes visible. Define which updates matter, assign ownership, establish realistic service levels, and choose a workflow that supports incremental translation without losing context or oversight.</p>
        </div>
        <aside className="conclusionActions">
          <div className="eyebrow">A PRACTICAL STARTING POINT</div>
          <h3>Map one website, define priority content classes, and pilot the complete source-to-live-page workflow.</h3>
          <ArrowLink href={`${CANONICAL}#continuous-localization-implementation-roadmap`}>Review the Implementation Roadmap</ArrowLink>
        </aside>
      </section>

      <section className="relatedSection sectionBlock">
        <div className="sectionShell">
          <SectionIntro id="related-resources" title="Related Website Translation Resources" align="center">
            Continue with the guide that best matches your next planning, technology, quality, search, or budget decision.
          </SectionIntro>
          <div className="relatedGrid">
            {relatedResources.map((resource) => (
              <article className="relatedItem" key={resource.title}>
                <div className="eyebrow">{resource.category}</div>
                <h3><a href={resource.url}><span>{resource.title}</span><Icon name="arrow" size={18} /></a></h3>
                <p>{resource.description}</p>
              </article>
            ))}
          </div>
          <div className="relatedFooter">
            <ArrowLink href="https://www.stepes.com/resources/localization-guides/">Explore Localization Guides</ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/guides/">Browse All Guides</ArrowLink>
          </div>
        </div>
      </section>

      <section className="finalCta sectionBlock">
        <div className="sectionShell finalCtaInner">
          <div>
            <h2>Plan a Continuous Website Localization Program</h2>
            <p>Connect your website publishing process with the right mix of change detection, translation technology, professional review, release governance, and multilingual quality assurance.</p>
          </div>
          <div className="finalCtaActions">
            <a className="buttonPrimary" href="https://www.stepes.com/contact-us/">
              <span>Talk to an Expert</span>
              <Icon name="arrow" size={18}/>
            </a>
            <a className="buttonSecondary" href="https://www.stepes.com/website-translation-services/">
              <span>Website Translation</span>
              <Icon name="arrow" size={18}/>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
:root {
  --accent: ${COLORS.accent};
  --accent-dark: ${COLORS.accentDark};
  --accent-deep: ${COLORS.accentDeep};
  --accent-light: ${COLORS.accentLight};
  --blush: ${COLORS.blush};
  --blush-strong: ${COLORS.blushStrong};
  --ink: ${COLORS.ink};
  --text: ${COLORS.text};
  --muted: ${COLORS.muted};
  --border: ${COLORS.border};
  --soft: ${COLORS.soft};
  --dark: ${COLORS.dark};
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; }
.stepesGuide {
  width: 100%;
  overflow-x: clip;
  color: var(--ink);
  background: #fff;
  font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 18px;
  line-height: 1.68;
  -webkit-font-smoothing: antialiased;
}
.stepesGuide :where(section, div, article, aside, nav, ul, li) { min-width: 0; }
.stepesGuide h1,
.stepesGuide h2,
.stepesGuide h3,
.stepesGuide p,
.stepesGuide li,
.stepesGuide a,
.mobileRecordValue,
.mobileRecordPrimary { overflow-wrap: break-word; }
.stepesGuide h1,
.stepesGuide h2,
.stepesGuide h3,
.stepesGuide p { margin-top: 0; }
.stepesGuide h1,
.stepesGuide h2,
.stepesGuide h3 { font-weight: 600; letter-spacing: -0.025em; color: var(--ink); }
.stepesGuide h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 650px; }
.stepesGuide h2 { font-size: 36px; line-height: 1.18; margin-bottom: 22px; scroll-margin-top: 120px; }
.stepesGuide h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
.stepesGuide p { color: var(--text); }
.stepesGuide a { color: inherit; }
.stepesGuide code { font-size: .92em; background: #f4f1f3; border-radius: 6px; padding: 2px 6px; }
.sectionShell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
.sectionBlock { padding-top: 96px; padding-bottom: 96px; }
.eyebrow {
  font-size: 11px;
  line-height: 1.3;
  letter-spacing: .12em;
  font-weight: 600;
  color: var(--accent);
  text-transform: uppercase;
  margin-bottom: 14px;
}
.eyebrowDark { color: var(--accent-light); }
.sectionIntro { max-width: 820px; margin-bottom: 48px; }
.sectionIntro--center { margin-left: auto; margin-right: auto; text-align: center; }
.sectionDeck { font-size: 19px; line-height: 1.65; color: var(--text); }
.sectionDeck p:last-child { margin-bottom: 0; }
.bodyLarge { font-size: 19px; line-height: 1.65; }
.editorialLink {
  display: inline-flex;
  align-items: center;
  gap: 9px;
  color: var(--accent) !important;
  text-decoration: none;
  font-size: 16px;
  line-height: 1.35;
  font-weight: 600;
  min-height: 44px;
}
.editorialLink svg { transition: transform .2s ease; flex: 0 0 auto; }
.editorialLink:hover svg,
.editorialLink:focus-visible svg { transform: translateX(3px); }
.editorialLink:focus-visible,
.buttonPrimary:focus-visible,
.buttonSecondary:focus-visible,
.mobileContents summary:focus-visible,
.faqPanel summary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
.buttonPrimary,
.buttonSecondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 52px;
  padding: 14px 24px;
  border-radius: 999px;
  font-size: 16px;
  line-height: 1.25;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
  white-space: normal;
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.buttonPrimary,
.buttonPrimary:visited,
.buttonPrimary:hover,
.buttonPrimary:active,
.buttonPrimary:focus-visible { color: #fff !important; }
.buttonPrimary { background: var(--accent); border: 1px solid var(--accent); box-shadow: 0 10px 24px rgba(193,29,99,.16); }
.buttonPrimary:hover { background: var(--accent-dark); border-color: var(--accent-dark); transform: translateY(-1px); }
.buttonSecondary { background: #fff; color: var(--ink) !important; border: 1px solid #d8d1d7; }
.buttonSecondary:visited { color: var(--ink) !important; }
.buttonSecondary:hover { border-color: var(--accent); transform: translateY(-1px); }

.hero {
  min-height: 700px;
  padding-top: 104px;
  padding-bottom: 104px;
  display: grid;
  grid-template-columns: minmax(0, .95fr) minmax(480px, 1.05fr);
  align-items: center;
  gap: 72px;
}
.heroCopy { padding-right: 16px; }
.heroDeck { font-size: 20px; line-height: 1.62; max-width: 680px; margin-bottom: 34px; }
.heroActions { display: flex; flex-wrap: wrap; gap: 14px; }
.heroVisual {
  position: relative;
  min-height: 520px;
  padding: 24px;
  border-radius: 30px;
  border: 1px solid #eadde4;
  background: linear-gradient(145deg, #fff 0%, #fdf5f8 100%);
  box-shadow: 0 30px 80px rgba(55,35,47,.10);
  overflow: hidden;
}
.heroVisual::before {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: rgba(193,29,99,.06);
  right: 18px;
  top: 18px;
  pointer-events: none;
}
.heroVisualHeader,
.visualFooter { display: flex; justify-content: space-between; align-items: center; gap: 16px; position: relative; z-index: 1; font-size: 14px; color: var(--muted); }
.heroVisualHeader > span:first-child { font-weight: 600; color: var(--ink); }
.heroVisualStatus { display: inline-flex; align-items: center; gap: 7px; }
.heroVisualStatus i { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 5px rgba(193,29,99,.10); }
.sourcePage { position: relative; z-index: 1; margin-top: 18px; background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 18px; }
.sourcePageTop { display: flex; align-items: center; justify-content: space-between; padding-bottom: 15px; border-bottom: 1px solid var(--border); }
.sourceBrand { width: 88px; height: 10px; border-radius: 6px; background: var(--ink); }
.sourceNav { display: flex; gap: 9px; }
.sourceNav span { width: 30px; height: 6px; background: #d9d4d8; border-radius: 6px; }
.sourceContent { display: grid; grid-template-columns: 1.2fr .8fr; gap: 18px; padding: 26px 0 22px; }
.sourceCopy { display: flex; flex-direction: column; gap: 12px; justify-content: center; }
.line { height: 9px; border-radius: 8px; background: #d7d1d6; width: 92%; }
.lineStrong { height: 13px; background: var(--ink); width: 78%; }
.lineShort { width: 66%; }
.sourceImage { min-height: 108px; border-radius: 14px; background: linear-gradient(135deg, #f9e8ef, #eee9ec); position: relative; overflow: hidden; }
.sourceImage::after { content: ""; position: absolute; width: 100px; height: 100px; border: 1px solid rgba(193,29,99,.22); border-radius: 50%; right: 8px; bottom: -40px; }
.changeTag { display: inline-flex; font-size: 14px; line-height: 1.3; font-weight: 600; color: var(--accent); background: var(--blush); border-radius: 999px; padding: 9px 13px; }
.visualFlow { position: relative; z-index: 1; display: flex; justify-content: center; align-items: center; gap: 10px; padding: 19px 0; font-size: 14px; font-weight: 600; color: var(--muted); }
.visualFlow i { width: 34px; height: 10px; background: #cfc7cc; clip-path: polygon(0 46%, 78% 46%, 78% 8%, 100% 50%, 78% 92%, 78% 54%, 0 54%); }
.languageSites { position: relative; z-index: 1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.languageSite { background: #fff; border: 1px solid var(--border); border-radius: 16px; padding: 14px; }
.languageSiteTop { display: flex; align-items: center; justify-content: space-between; gap: 8px; font-size: 14px; }
.languageSiteTop > span { font-weight: 600; color: var(--ink); }
.languageSiteTop b { font-size: 12px; color: var(--accent); font-weight: 600; }
.languageLines { display: flex; flex-direction: column; gap: 7px; margin-top: 16px; }
.languageLines i { height: 6px; border-radius: 5px; background: #ded9dc; }
.languageLines i:nth-child(2) { width: 85%; }
.languageLines i:nth-child(3) { width: 68%; }
.visualFooter { margin-top: 18px; justify-content: flex-start; gap: 20px; }
.visualFooter span { display: inline-flex; align-items: center; gap: 7px; }
.dot { width: 7px; height: 7px; border-radius: 50%; display: inline-block; }
.dotCurrent { background: var(--accent); }
.dotReview { background: #ad9fa7; }

.utilityBand { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: #fff; }
.utilityGrid { display: grid; grid-template-columns: repeat(4, 1fr); padding-top: 24px; padding-bottom: 24px; }
.utilityGrid > div { padding: 0 26px; border-right: 1px solid var(--border); }
.utilityGrid > div:first-child { padding-left: 0; }
.utilityGrid > div:last-child { padding-right: 0; border-right: 0; }
.utilityGrid span { display: block; font-size: 11px; line-height: 1.3; letter-spacing: .1em; font-weight: 600; color: var(--accent); margin-bottom: 6px; }
.utilityGrid strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; }

.takeawayGrid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--border); margin-bottom: 56px; }
.takeaway { display: grid; grid-template-columns: 14px 1fr; gap: 18px; padding: 30px 32px 30px 0; border-bottom: 1px solid var(--border); }
.takeaway:nth-child(odd) { border-right: 1px solid var(--border); padding-right: 42px; }
.takeaway:nth-child(even) { padding-left: 42px; }
.takeawayMarker { width: 8px; height: 8px; border-radius: 50%; background: var(--accent); margin-top: 9px; }
.takeaway h3 { font-size: 20px; margin-bottom: 8px; }
.takeaway p { font-size: 16px; line-height: 1.6; margin-bottom: 0; }
.comparisonPanel { background: var(--blush); border: 1px solid #f0dbe4; border-radius: 28px; padding: 42px; display: grid; grid-template-columns: .72fr 1.28fr; gap: 54px; }
.comparisonLead h3 { font-size: 28px; }
.comparisonLead p { font-size: 16px; margin-bottom: 0; }
.comparisonRows { border-top: 1px solid #e5ccd7; }
.comparisonHeader,
.comparisonRow { display: grid; grid-template-columns: .9fr 1fr 1fr; gap: 18px; padding: 15px 0; border-bottom: 1px solid #e5ccd7; align-items: center; }
.comparisonHeader { font-size: 16px; font-weight: 600; color: var(--accent); }
.comparisonRow { font-size: 16px; line-height: 1.45; }
.comparisonRow strong { font-weight: 600; }
.comparisonRow span { color: var(--text); }

.contentsSection { background: var(--soft); }
.desktopContents { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 56px; max-width: 1120px; margin: 0 auto; }
.contentsGroup h3 { font-size: 18px; padding-bottom: 16px; border-bottom: 1px solid #dcd7da; margin-bottom: 4px; }
.contentsGroup a { display: grid; grid-template-columns: 10px 1fr; gap: 12px; align-items: start; min-height: 48px; padding: 13px 0; border-bottom: 1px solid #e5e1e4; color: var(--text); text-decoration: none; font-size: 16px; line-height: 1.4; }
.contentsGroup a:hover { color: var(--accent); }
.tocMarker { width: 6px; height: 6px; border-radius: 50%; background: #968b92; margin-top: 8px; }
.contentsGroup a:hover .tocMarker { background: var(--accent); }
.mobileContents { display: none; background: #fff; border: 1px solid var(--border); border-radius: 20px; overflow: hidden; max-width: 900px; margin: 0 auto; }
.mobileContents summary { list-style: none; display: flex; justify-content: space-between; align-items: center; gap: 16px; min-height: 56px; padding: 16px 18px; font-size: 17px; font-weight: 600; cursor: pointer; }
.mobileContents summary::-webkit-details-marker { display: none; }
.mobileContents[open] summary svg { transform: rotate(180deg); }
.mobileContents nav { padding: 0 18px 18px; }
.mobileContentsGroup { padding-top: 18px; }
.mobileContentsGroup h3 { font-size: 16px; color: var(--accent); margin-bottom: 6px; }
.mobileContentsGroup a { display: block; min-height: 44px; padding: 11px 0; border-bottom: 1px solid var(--border); color: var(--text); font-size: 16px; line-height: 1.4; text-decoration: none; }

.editorialSplit { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(360px,.65fr); gap: 80px; align-items: start; }
.definitionCallout { background: var(--blush); border: 1px solid #efd7e1; border-radius: 28px; padding: 38px; }
.definitionCallout h3 { font-size: 28px; }
.definitionCallout > p { font-size: 17px; }
.impactList { margin-top: 28px; padding-top: 12px; border-top: 1px solid #ead0db; }
.impactList > div { display: grid; grid-template-columns: 18px 1fr; gap: 10px; align-items: start; padding: 13px 0; border-bottom: 1px solid #ead0db; color: var(--text); font-size: 16px; }
.impactList svg { color: var(--accent); margin-top: 4px; }

.definitionSection { background: #fbfafb; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.definitionLayout { display: grid; grid-template-columns: 1.1fr .75fr; gap: 84px; align-items: center; }
.definitionLayout p { max-width: 760px; }
.doesNotMean { background: #fff; border: 1px solid var(--border); border-radius: 24px; padding: 32px; }
.doesNotMean h3 { font-size: 22px; }
.doesNotRow { display: grid; grid-template-columns: 24px 1fr; gap: 12px; padding: 13px 0; border-bottom: 1px solid var(--border); align-items: start; }
.doesNotRow:last-child { border-bottom: 0; }
.doesNotRow > span { color: var(--accent); font-size: 24px; line-height: 1; font-weight: 400; }
.doesNotRow p { font-size: 16px; line-height: 1.5; margin-bottom: 0; }

.loopSection { background: var(--dark); color: #fff; }
.loopSection h2,
.loopSection h3 { color: #fff; }
.darkIntro { max-width: 840px; margin-bottom: 56px; }
.darkIntro p { color: #d6ced4; font-size: 19px; }
.loopGrid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.14); border-left: 1px solid rgba(255,255,255,.14); }
.loopStage { padding: 28px; min-height: 286px; border-right: 1px solid rgba(255,255,255,.14); border-bottom: 1px solid rgba(255,255,255,.14); display: flex; flex-direction: column; }
.loopStage:nth-child(n+5) { grid-column: span 1; }
.loopStage:nth-child(5) { grid-column-start: 1; }
.loopStage:last-child { grid-column: span 2; }
.loopTop { display: flex; justify-content: space-between; align-items: center; margin-bottom: 22px; }
.loopNumber { font-size: 14px; font-weight: 600; color: var(--accent-light); }
.loopArrow { color: #7f7179; }
.loopStage h3 { font-size: 21px; margin-bottom: 10px; }
.loopStage > p { font-size: 16px; line-height: 1.58; color: #d6ced4; margin-bottom: 24px; }
.loopOutput { margin-top: auto; padding-top: 18px; border-top: 1px solid rgba(255,255,255,.12); }
.loopOutput span { display: block; font-size: 16px; color: #9f929a; margin-bottom: 4px; }
.loopOutput strong { display: block; color: #fff; font-size: 16px; line-height: 1.45; font-weight: 600; }
.loopReturn { display: flex; align-items: center; justify-content: center; gap: 12px; max-width: 860px; margin: 24px auto 0; padding: 16px 20px; border-radius: 18px; background: rgba(255,255,255,.045); border: 1px solid rgba(255,255,255,.12); }
.loopReturn svg { flex: 0 0 auto; color: var(--accent-light); }
.loopReturn p { font-size: 16px; line-height: 1.5; color: #d9d1d6; margin-bottom: 0; }
.loopReturn strong { color: #fff; font-weight: 600; }
.loopControls { display: grid; grid-template-columns: repeat(4,1fr); margin-top: 18px; gap: 14px; }
.loopControls span { font-size: 16px; line-height: 1.4; color: #d9d1d6; padding: 14px 16px; border: 1px solid rgba(255,255,255,.14); border-radius: 999px; text-align: center; }

.methodGrid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 30px; margin-bottom: 56px; }
.methodItem { padding-top: 26px; border-top: 2px solid var(--accent); }
.iconBox { width: 46px; height: 46px; border-radius: 14px; display: flex; align-items: center; justify-content: center; color: var(--accent); background: var(--blush); margin-bottom: 20px; }
.methodItem h3 { font-size: 20px; }
.methodItem p { font-size: 16px; line-height: 1.6; margin-bottom: 0; }
.recordCallout { display: grid; grid-template-columns: .65fr 1.35fr; gap: 52px; padding: 36px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-bottom: 56px; }
.recordCallout h3 { font-size: 26px; }
.recordFields { display: grid; grid-template-columns: repeat(2,1fr); gap: 12px 26px; }
.recordFields span { font-size: 16px; padding: 13px 0; border-bottom: 1px solid var(--border); }
.wideModule { margin-top: 12px; }
.moduleHeading { display: flex; align-items: end; justify-content: space-between; gap: 40px; margin-bottom: 24px; }
.moduleHeading h3 { font-size: 28px; margin-bottom: 0; }
.moduleHeading p { max-width: 600px; font-size: 16px; margin-bottom: 0; }
.responsiveTable { width: 100%; }
.tableView { border: 1px solid var(--border); border-radius: 22px; overflow: hidden; }
.stepesGuide table { width: 100%; border-collapse: collapse; table-layout: fixed; }
.stepesGuide th,
.stepesGuide td { padding: 18px 20px; text-align: left; vertical-align: top; font-size: 16px; line-height: 1.5; border-bottom: 1px solid var(--border); }
.stepesGuide th { font-weight: 600; color: var(--ink); background: #f7f5f6; }
.stepesGuide td { color: var(--text); }
.stepesGuide tr:last-child td { border-bottom: 0; }
.stepesGuide th + th,
.stepesGuide td + td { border-left: 1px solid var(--border); }
.mobileRecords { display: none; }
.recommendationLine { display: flex; gap: 8px; flex-wrap: wrap; padding: 20px 22px; margin-top: 16px; border-radius: 16px; background: var(--blush); font-size: 16px; color: var(--text); }
.recommendationLine strong { color: var(--accent); }

.incrementalSection { background: #fbfafb; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.incrementalGrid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 38px; }
.incrementalColumn { border-top: 2px solid var(--accent); padding-top: 28px; }
.incrementalColumn h3 { font-size: 22px; }
.incrementalColumn p,
.incrementalColumn li { font-size: 16px; }
.incrementalColumn ul { list-style: none; margin: 24px 0 16px; padding: 0; }
.incrementalColumn li { position: relative; padding: 10px 0 10px 20px; border-bottom: 1px solid var(--border); }
.incrementalColumn li::before { content: ""; position: absolute; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); left: 0; top: 19px; }
.qualityNote { display: grid; grid-template-columns: 130px 1fr; gap: 26px; align-items: start; margin-top: 54px; padding: 28px 32px; background: var(--blush); border-radius: 22px; }
.qualityNote .eyebrow { margin: 7px 0 0; }
.qualityNote p { font-size: 17px; margin-bottom: 0; }

.routingIntro { display: grid; grid-template-columns: 1.15fr .65fr; gap: 64px; margin-bottom: 54px; }
.criteriaChips { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 24px; }
.criteriaChips span { font-size: 16px; line-height: 1.3; padding: 9px 13px; border-radius: 999px; background: #f4f1f3; color: var(--text); }
.routingAside { border-left: 3px solid var(--accent); padding-left: 28px; align-self: start; }
.routingAside h3 { font-size: 22px; }
.routingAside p { font-size: 16px; }
.routingMatrix table th:first-child { width: 28%; }
.routingMatrix table th:nth-child(2) { width: 36%; }
.exceptionPanel { display: grid; grid-template-columns: .7fr 1.3fr; gap: 48px; padding: 38px; margin-top: 46px; border-radius: 28px; background: var(--blush); border: 1px solid #efd7e1; }
.exceptionPanel h3 { font-size: 26px; }
.exceptionPanel p { font-size: 16px; }
.exceptionList { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 26px; }
.exceptionList span { font-size: 16px; padding: 12px 0; border-bottom: 1px solid #ead0da; }

.releaseSection { background: var(--soft); }
.releaseGrid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 20px; }
.releaseCard { background: #fff; border: 1px solid var(--border); border-radius: 24px; padding: 28px; }
.releaseCard h3 { font-size: 20px; min-height: 52px; }
.releaseDescription { font-size: 16px; min-height: 78px; }
.releaseField { padding-top: 18px; margin-top: 18px; border-top: 1px solid var(--border); }
.releaseField > span { display: block; font-size: 16px; font-weight: 600; color: var(--accent); margin-bottom: 7px; }
.releaseField p { font-size: 16px; line-height: 1.55; margin-bottom: 0; }
.readinessBand { display: grid; grid-template-columns: .58fr 1.42fr; gap: 54px; margin-top: 48px; padding: 40px; background: #fff; border: 1px solid var(--border); border-radius: 28px; }
.readinessBand h3 { font-size: 26px; }
.readinessBand ul { columns: 2; column-gap: 44px; margin: 0; padding: 0; list-style: none; }
.readinessBand li { position: relative; break-inside: avoid; font-size: 16px; line-height: 1.5; padding: 10px 0 10px 22px; border-bottom: 1px solid var(--border); }
.readinessBand li::before { content: ""; position: absolute; left: 0; top: 18px; width: 7px; height: 7px; border-radius: 50%; background: var(--accent); }

.qualityLayout { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; }
.qualityLead { position: sticky; top: 120px; align-self: start; }
.qualityLinks { display: flex; flex-direction: column; align-items: flex-start; margin-top: 22px; }
.qaRows { border-top: 1px solid var(--border); }
.qaRow { display: grid; grid-template-columns: 58px 1fr; gap: 22px; padding: 28px 0; border-bottom: 1px solid var(--border); align-items: start; }
.qaRow .iconBox { margin-bottom: 0; }
.qaRow h3 { font-size: 21px; }
.qaRow p { font-size: 16px; margin-bottom: 0; }
.seoReference { display: grid; grid-template-columns: .7fr 1.3fr; gap: 52px; padding: 36px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); margin-top: 56px; }
.seoReference h3 { font-size: 25px; }
.seoReference p { font-size: 17px; margin-bottom: 0; }

.governanceSection { background: #fbfafb; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.rolesGrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0 42px; border-top: 1px solid var(--border); }
.roleItem { padding: 28px 0; border-bottom: 1px solid var(--border); }
.roleItem h3 { font-size: 20px; }
.roleItem p { font-size: 16px; margin-bottom: 0; }
.responsibilityModule { margin-top: 64px; }
.responsibilityModule table th:first-child { width: 24%; }
.governanceDecisionGrid { display: grid; grid-template-columns: .65fr 1.35fr; gap: 58px; margin-top: 56px; padding: 40px; background: #fff; border: 1px solid var(--border); border-radius: 28px; }
.governanceLead h3 { font-size: 26px; }
.governanceLead p { font-size: 16px; }
.governanceList { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 26px; }
.governanceList > div { display: grid; grid-template-columns: 12px 1fr; gap: 12px; align-items: start; padding: 12px 0; border-bottom: 1px solid var(--border); }
.governanceList > div span { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); margin-top: 10px; }
.governanceList p { font-size: 16px; margin-bottom: 0; }

.metricsSection { background: #fff; }
.dashboardGrid { display: grid; grid-template-columns: repeat(5,1fr); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
.dashboardItem { padding: 28px 24px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.dashboardIcon { width: 42px; height: 42px; border-radius: 13px; display: flex; align-items: center; justify-content: center; color: var(--accent); background: var(--blush); margin-bottom: 18px; }
.dashboardItem h3 { font-size: 19px; }
.dashboardItem strong { display: block; font-size: 16px; line-height: 1.45; margin-bottom: 11px; }
.dashboardItem p { font-size: 16px; line-height: 1.55; margin-bottom: 0; }
.measurementGrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 38px; margin-top: 52px; }
.measurementGroup { border-top: 2px solid var(--accent); padding-top: 24px; }
.measurementGroup h3 { font-size: 21px; }
.measurementGroup ul { list-style: none; padding: 0; margin: 0; }
.measurementGroup li { font-size: 16px; padding: 10px 0; border-bottom: 1px solid var(--border); }
.metricsNote { display: flex; gap: 12px; align-items: baseline; padding: 24px 28px; margin-top: 46px; background: var(--blush); border-radius: 20px; font-size: 16px; }
.metricsNote strong { color: var(--accent); white-space: nowrap; }
.metricsNote span { color: var(--text); }

.technologyHeader { display: grid; grid-template-columns: 1.05fr .75fr; gap: 72px; align-items: start; }
.capabilityPanel { padding: 34px; background: var(--blush); border: 1px solid #efd8e1; border-radius: 26px; }
.capabilityPanel h3 { font-size: 22px; }
.capabilityList { display: grid; grid-template-columns: repeat(2,1fr); gap: 0 20px; }
.capabilityList > div { display: grid; grid-template-columns: 20px 1fr; gap: 10px; align-items: start; padding: 10px 0; border-bottom: 1px solid #ead0da; font-size: 16px; }
.capabilityList svg { color: var(--accent); margin-top: 3px; }
.technologyRows { margin-top: 52px; border-top: 1px solid var(--border); }
.technologyRow { display: grid; grid-template-columns: .45fr 1.1fr .45fr; gap: 36px; align-items: center; padding: 28px 0; border-bottom: 1px solid var(--border); }
.technologyRow h3 { font-size: 20px; margin-bottom: 0; }
.technologyRow p { font-size: 16px; margin-bottom: 0; }
.technologyRow .editorialLink { justify-self: end; text-align: right; }
.technologyHandoff { display: flex; align-items: center; justify-content: space-between; gap: 24px; padding: 26px 30px; margin-top: 36px; border-radius: 20px; background: var(--soft); }
.technologyHandoff p { font-size: 17px; margin-bottom: 0; }

.maturitySection { background: var(--blush); }
.maturityGrid { display: grid; grid-template-columns: repeat(4,1fr); gap: 20px; }
.maturityLevel { background: #fff; border: 1px solid #ecd9e1; border-radius: 24px; padding: 28px; display: flex; flex-direction: column; }
.maturityNumber { width: 36px; height: 36px; display: flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--accent); color: #fff; font-size: 15px; font-weight: 600; margin-bottom: 20px; }
.maturityLevel h3 { font-size: 22px; }
.maturityLevel > p { font-size: 16px; }
.maturityNext { margin-top: auto; padding-top: 20px; border-top: 1px solid var(--border); }
.maturityNext span { display: block; font-size: 16px; font-weight: 600; color: var(--accent); margin-bottom: 7px; }
.maturityNext p { font-size: 16px; margin-bottom: 0; }

.roadmapGrid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--border); border-left: 1px solid var(--border); }
.roadmapStep { min-height: 232px; padding: 30px; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.roadmapHead { display: flex; align-items: baseline; gap: 15px; margin-bottom: 15px; }
.roadmapHead > span { font-size: 14px; color: var(--accent); font-weight: 600; }
.roadmapHead h3 { font-size: 21px; margin-bottom: 0; }
.roadmapStep p { font-size: 16px; margin-bottom: 0; }
.pilotCallout { max-width: 960px; margin: 52px auto 0; padding: 36px 40px; border-left: 3px solid var(--accent); background: var(--soft); }
.pilotCallout h3 { font-size: 26px; }
.pilotCallout p { font-size: 17px; margin-bottom: 0; }

.failureSection { background: #fbfafb; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.failureList { border-top: 1px solid var(--border); }
.failureItem { display: grid; grid-template-columns: minmax(220px,.8fr) minmax(0,1fr) minmax(0,1fr); gap: 34px; align-items: start; padding: 28px 0; border-bottom: 1px solid var(--border); }
.failureItem h3 { font-size: 19px; line-height: 1.35; margin-bottom: 0; }
.failurePair { display: contents; }
.failurePair > div { padding-left: 22px; border-left: 1px solid var(--border); }
.failurePair span { display: block; font-size: 16px; font-weight: 600; color: var(--accent); margin-bottom: 6px; }
.failurePair p { font-size: 16px; line-height: 1.55; color: var(--text); margin-bottom: 0; }

.checklistSection { background: var(--blush); }
.checklistHeader { display: grid; grid-template-columns: 1.3fr .45fr; gap: 60px; align-items: end; }
.checklistCount { padding: 26px 28px; background: #fff; border: 1px solid #ecd8e1; border-radius: 22px; }
.checklistCount strong { display: block; font-size: 44px; line-height: 1; color: var(--accent); margin-bottom: 8px; }
.checklistCount span { display: block; font-size: 16px; line-height: 1.45; color: var(--text); }
.checklistGrid { display: grid; grid-template-columns: repeat(2,1fr); gap: 28px; }
.checklistGroup { background: #fff; border: 1px solid #ecd8e1; border-radius: 24px; padding: 30px; }
.checklistGroup:last-child { grid-column: 1 / -1; }
.checklistGroup h3 { font-size: 22px; padding-bottom: 16px; border-bottom: 1px solid var(--border); }
.checklistGroup ul { list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(2,1fr); gap: 0 28px; }
.checklistGroup:not(:last-child) ul { grid-template-columns: 1fr; }
.checklistGroup li { display: grid; grid-template-columns: 20px 1fr; gap: 11px; align-items: start; padding: 11px 0; border-bottom: 1px solid var(--border); font-size: 16px; line-height: 1.5; }
.checkMarker { width: 16px; height: 16px; border: 1px solid #b9afb5; border-radius: 4px; margin-top: 4px; position: relative; }
.checkMarker::after { content: ""; position: absolute; width: 6px; height: 3px; border-left: 1.5px solid var(--accent); border-bottom: 1.5px solid var(--accent); transform: rotate(-45deg); left: 4px; top: 4px; }

.faqPanel { max-width: 960px; margin: 0 auto; border-top: 1px solid var(--border); }
.faqPanel details { border-bottom: 1px solid var(--border); }
.faqPanel summary { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 20px; min-width: 0; min-height: 72px; padding: 20px 4px; cursor: pointer; font-size: 18px; line-height: 1.45; font-weight: 600; color: var(--ink); }
.faqPanel summary > span:first-child { min-width: 0; overflow-wrap: anywhere; }
.faqPanel summary::-webkit-details-marker { display: none; }
.faqIcon { flex: 0 0 auto; width: 30px; height: 30px; border-radius: 50%; display: flex; align-items: center; justify-content: center; background: var(--blush); color: var(--accent); font-size: 21px; }
.faqIcon::before { content: "+"; line-height: 1; transition: transform .2s ease; }
.faqPanel details[open] .faqIcon::before { transform: rotate(45deg); }
.faqAnswer { max-width: 840px; padding: 0 50px 24px 4px; }
.faqAnswer p { font-size: 16px; line-height: 1.65; margin-bottom: 0; }

.sourcesSection { background: #fbfafb; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
.sourcesLayout { display: grid; grid-template-columns: .6fr 1.4fr; gap: 70px; }
.sourcesLead h2 { font-size: 32px; }
.sourcesLead p { font-size: 16px; }
.sourceList { border-top: 1px solid var(--border); }
.sourceItem { display: grid; grid-template-columns: .7fr 1.3fr; gap: 34px; padding: 24px 0; border-bottom: 1px solid var(--border); }
.sourceItem a { display: inline-flex; align-items: flex-start; gap: 8px; min-height: 44px; font-size: 17px; line-height: 1.4; font-weight: 600; color: var(--accent); text-decoration: none; }
.sourceItem span { display: block; margin-top: 5px; font-size: 14px; color: var(--muted); }
.sourceItem p { font-size: 16px; margin-bottom: 0; }

.conclusionSection { display: grid; grid-template-columns: 1.1fr .7fr; gap: 84px; align-items: start; }
.conclusionCopy h2 { max-width: 720px; }
.conclusionCopy p { max-width: 760px; }
.conclusionActions { padding: 34px; border-radius: 24px; background: var(--soft); border: 1px solid var(--border); }
.conclusionActions h3 { font-size: 22px; }

.relatedSection { background: #fbfafb; border-top: 1px solid var(--border); }
.relatedGrid { display: grid; grid-template-columns: repeat(3,1fr); gap: 0 34px; border-top: 1px solid var(--border); }
.relatedItem { padding: 30px 0; border-bottom: 1px solid var(--border); }
.relatedItem h3 { font-size: 21px; }
.relatedItem h3 a { display: inline-flex; align-items: flex-start; gap: 8px; min-height: 44px; text-decoration: none; }
.relatedItem h3 a span { min-width: 0; overflow-wrap: anywhere; }
.relatedItem h3 a svg { flex: 0 0 auto; color: var(--accent); transition: transform .2s ease; }
.relatedItem h3 a:hover { color: var(--accent); }
.relatedItem h3 a:hover svg,
.relatedItem h3 a:focus-visible svg { transform: translateX(3px); }
.relatedItem p { font-size: 16px; min-height: 76px; margin-bottom: 0; }
.relatedFooter { display: flex; justify-content: center; gap: 28px; margin-top: 38px; }

.finalCta { background: var(--blush); padding-top: 80px; padding-bottom: 80px; border-top: 1px solid #efd8e2; }
.finalCtaInner { display: grid; grid-template-columns: 1.15fr .85fr; gap: 70px; align-items: center; }
.finalCta h2 { font-size: 36px; max-width: 720px; }
.finalCta p { font-size: 18px; max-width: 760px; margin-bottom: 0; }
.finalCtaActions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; }
.finalCtaActions a { width: 100%; }

@media (max-width: 1180px) {
  .sectionShell { width: min(1280px, calc(100% - 80px)); }
  .hero { grid-template-columns: .9fr 1.1fr; gap: 48px; }
  .heroVisual { min-height: 500px; }
  .releaseGrid { grid-template-columns: repeat(2,1fr); }
  .releaseCard h3,
  .releaseDescription { min-height: 0; }
  .dashboardGrid { grid-template-columns: repeat(3,1fr); }
  .dashboardItem:nth-child(4), .dashboardItem:nth-child(5) { min-height: 280px; }
}

@media (max-width: 960px) {
  .sectionShell { width: calc(100% - 48px); }
  .sectionBlock { padding-top: 80px; padding-bottom: 80px; }
  .desktopContents { display: none; }
  .mobileContents { display: block; }
  .stepesGuide h1 { font-size: 42px; }
  .stepesGuide h2 { font-size: 32px; }
  .hero { min-height: auto; grid-template-columns: 1fr; padding-top: 88px; padding-bottom: 80px; }
  .heroCopy { max-width: 820px; }
  .heroVisual { max-width: 760px; width: 100%; }
  .utilityGrid { grid-template-columns: repeat(2,1fr); gap: 0; }
  .utilityGrid > div { padding: 20px 22px; border-bottom: 1px solid var(--border); }
  .utilityGrid > div:nth-child(2) { border-right: 0; }
  .utilityGrid > div:nth-child(3) { padding-left: 0; border-bottom: 0; }
  .utilityGrid > div:nth-child(4) { border-right: 0; border-bottom: 0; }
  .comparisonPanel { grid-template-columns: 1fr; }
  .editorialSplit,
  .definitionLayout,
  .routingIntro,
  .qualityLayout,
  .technologyHeader,
  .conclusionSection,
  .finalCtaInner { grid-template-columns: 1fr; }
  .definitionCallout { max-width: 680px; }
  .loopGrid { grid-template-columns: repeat(2,1fr); }
  .loopStage:nth-child(5) { grid-column-start: auto; }
  .loopControls { grid-template-columns: repeat(2,1fr); }
  .methodGrid { grid-template-columns: repeat(2,1fr); }
  .incrementalGrid { grid-template-columns: 1fr; }
  .incrementalColumn { display: grid; grid-template-columns: .75fr 1.25fr; gap: 30px; }
  .incrementalColumn h3 { grid-column: 1; }
  .incrementalColumn > p { grid-column: 1; }
  .incrementalColumn ul { grid-column: 2; grid-row: 1 / span 3; margin-top: 0; }
  .incrementalColumn .editorialLink { grid-column: 1; }
  .qualityLead { position: static; }
  .rolesGrid { grid-template-columns: repeat(2,1fr); }
  .dashboardGrid { grid-template-columns: repeat(2,1fr); }
  .dashboardItem:nth-child(4), .dashboardItem:nth-child(5) { min-height: 0; }
  .maturityGrid { grid-template-columns: repeat(2,1fr); }
  .roadmapGrid { grid-template-columns: repeat(2,1fr); }
  .relatedGrid { grid-template-columns: repeat(2,1fr); }
  .relatedItem p { min-height: 0; }
  .tableView { display: none; }
  .mobileRecords { display: grid; gap: 16px; }
  .mobileRecord { background: #fff; border: 1px solid var(--border); border-radius: 20px; padding: 20px; }
  .mobileRecordRow { display: grid; grid-template-columns: minmax(140px,.5fr) minmax(0,1fr); gap: 22px; padding: 11px 0; border-bottom: 1px solid var(--border); }
  .mobileRecordRow:last-child { border-bottom: 0; }
  .mobileRecordLabel { font-size: 16px; font-weight: 600; color: var(--accent); }
  .mobileRecordPrimary { font-size: 17px; line-height: 1.5; font-weight: 600; }
  .mobileRecordValue { font-size: 16px; line-height: 1.55; color: var(--text); overflow-wrap: anywhere; }
  .moduleHeading { align-items: start; flex-direction: column; gap: 12px; }
  .failureItem { grid-template-columns: .72fr 1.28fr; gap: 30px; }
  .failurePair { display: grid; grid-template-columns: 1fr; gap: 18px; }
  .failurePair > div { padding-left: 0; padding-top: 14px; border-left: 0; border-top: 1px solid var(--border); }
}


@media (max-width: 840px) {
  .incrementalColumn { display: block; }
  .incrementalColumn h3,
  .incrementalColumn > p,
  .incrementalColumn ul,
  .incrementalColumn .editorialLink { grid-column: auto; grid-row: auto; }
  .incrementalColumn ul { margin-top: 24px; }
  .exceptionPanel,
  .readinessBand,
  .seoReference,
  .governanceDecisionGrid,
  .checklistHeader,
  .sourcesLayout { grid-template-columns: 1fr; }
  .exceptionPanel,
  .readinessBand,
  .governanceDecisionGrid { gap: 28px; }
  .readinessBand ul { columns: 1; }
  .checklistHeader { gap: 0; }
  .checklistCount { max-width: 320px; margin-bottom: 36px; }
  .sourcesLayout { gap: 30px; }
  .failureItem { grid-template-columns: 1fr; gap: 18px; }
  .failurePair { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px; }
  .failurePair > div { padding-left: 0; padding-top: 14px; border-left: 0; border-top: 1px solid var(--border); }
}

@media (max-width: 767px) {
  .sectionShell { width: calc(100% - 40px); }
  .sectionBlock { padding-top: 68px; padding-bottom: 68px; }
  .sectionIntro { margin-bottom: 38px; }
  .stepesGuide { font-size: 17px; }
  .stepesGuide h1 { font-size: 38px; }
  .stepesGuide h2 { font-size: 30px; }
  .stepesGuide h3 { font-size: 20px; }
  .sectionDeck { font-size: 17px; }
  .bodyLarge { font-size: 17px; }
  .hero { width: calc(100% - 40px); padding-top: 70px; padding-bottom: 64px; gap: 48px; }
  .heroDeck { font-size: 18px; }
  .heroActions { flex-direction: column; }
  .heroActions a { width: 100%; min-width: 0; }
  .heroVisual { min-height: 0; padding: 18px; border-radius: 24px; overflow: hidden; }
  .sourcePage { padding: 16px; }
  .sourceContent { grid-template-columns: 1fr; }
  .sourceImage { display: none; }
  .visualFlow { gap: 7px; }
  .visualFlow i { width: 20px; }
  .languageSites { grid-template-columns: 1fr; }
  .languageSite { display: grid; grid-template-columns: .55fr 1fr; align-items: center; }
  .languageLines { margin-top: 0; }
  .visualFooter { flex-direction: column; align-items: flex-start; gap: 6px; }
  .changeTag { white-space: normal; max-width: 100%; }
  .utilityGrid { grid-template-columns: 1fr; }
  .utilityGrid > div { padding: 18px 0; border-right: 0; border-bottom: 1px solid var(--border) !important; }
  .utilityGrid > div:last-child { border-bottom: 0 !important; }
  .takeawayGrid { grid-template-columns: 1fr; }
  .takeaway,
  .takeaway:nth-child(odd),
  .takeaway:nth-child(even) { border-right: 0; padding: 24px 0; }
  .comparisonPanel { padding: 28px 22px; gap: 32px; }
  .comparisonHeader { display: none; }
  .comparisonRow { grid-template-columns: 1fr; gap: 6px; padding: 18px 0; }
  .comparisonRow strong { font-size: 17px; }
  .comparisonRow span { position: relative; padding-left: 110px; font-size: 16px; }
  .comparisonRow span:nth-child(2)::before { content: "Project-Based"; }
  .comparisonRow span:nth-child(3)::before { content: "Continuous"; }
  .comparisonRow span::before { position: absolute; left: 0; top: 0; width: 98px; font-size: 16px; font-weight: 600; color: var(--accent); }
  .editorialSplit { gap: 44px; }
  .definitionCallout { padding: 28px 24px; }
  .definitionLayout { gap: 44px; }
  .doesNotMean { padding: 24px 20px; }
  .loopGrid { grid-template-columns: 1fr; border-left: 0; }
  .loopStage { min-height: 0; padding: 26px 0; border-right: 0; }
  .loopStage:last-child { grid-column: span 1; }
  .loopTop { justify-content: flex-start; gap: 18px; }
  .loopArrow { transform: rotate(90deg); }
  .loopStage:last-child .loopArrow { display: none; }
  .loopReturn { align-items: flex-start; justify-content: flex-start; }
  .loopControls { grid-template-columns: 1fr; }
  .loopControls span { text-align: left; }
  .methodGrid { grid-template-columns: 1fr; gap: 32px; }
  .recordCallout { grid-template-columns: 1fr; gap: 20px; }
  .recordFields { grid-template-columns: 1fr; }
  .mobileRecordRow { grid-template-columns: 1fr; gap: 5px; }
  .incrementalColumn { display: block; }
  .qualityNote { grid-template-columns: 1fr; gap: 10px; padding: 24px 22px; }
  .qualityNote .eyebrow { margin-top: 0; }
  .routingIntro { gap: 40px; }
  .criteriaChips span { font-size: 16px; }
  .routingAside { padding-left: 22px; }
  .exceptionPanel { grid-template-columns: 1fr; gap: 24px; padding: 28px 22px; }
  .exceptionList { grid-template-columns: 1fr; }
  .releaseGrid { grid-template-columns: 1fr; }
  .readinessBand { grid-template-columns: 1fr; gap: 20px; padding: 28px 22px; }
  .readinessBand ul { columns: 1; }
  .qualityLayout { gap: 42px; }
  .qaRow { grid-template-columns: 48px 1fr; gap: 16px; }
  .qaRow .iconBox { width: 42px; height: 42px; }
  .seoReference { grid-template-columns: 1fr; gap: 18px; }
  .rolesGrid { grid-template-columns: 1fr; }
  .governanceDecisionGrid { grid-template-columns: 1fr; gap: 24px; padding: 28px 22px; }
  .governanceList { grid-template-columns: 1fr; }
  .dashboardGrid { grid-template-columns: 1fr; border-left: 0; }
  .dashboardItem { border-left: 1px solid var(--border); }
  .measurementGrid { grid-template-columns: 1fr; }
  .metricsNote { align-items: flex-start; flex-direction: column; }
  .metricsNote strong { white-space: normal; }
  .capabilityPanel { padding: 26px 22px; }
  .capabilityList { grid-template-columns: 1fr; }
  .technologyRow { grid-template-columns: 1fr; gap: 10px; padding: 24px 0; }
  .technologyRow .editorialLink { justify-self: start; text-align: left; }
  .technologyHandoff { flex-direction: column; align-items: flex-start; }
  .maturityGrid { grid-template-columns: 1fr; }
  .roadmapGrid { grid-template-columns: 1fr; border-left: 0; }
  .roadmapStep { min-height: 0; border-left: 1px solid var(--border); }
  .pilotCallout { padding: 28px 24px; }
  .failureItem { grid-template-columns: 1fr; gap: 18px; padding: 26px 0; }
  .failurePair { gap: 14px; }
  .checklistHeader { grid-template-columns: 1fr; gap: 0; }
  .checklistCount { margin-bottom: 34px; }
  .checklistGrid { grid-template-columns: 1fr; }
  .checklistGroup:last-child { grid-column: auto; }
  .checklistGroup { padding: 26px 22px; }
  .checklistGroup ul { grid-template-columns: 1fr; }
  .faqPanel summary { font-size: 17px; min-height: 66px; padding: 18px 0; }
  .faqAnswer { padding-left: 0; padding-right: 12px; }
  .sourcesLayout { grid-template-columns: 1fr; gap: 28px; }
  .sourceItem { grid-template-columns: 1fr; gap: 12px; }
  .relatedGrid { grid-template-columns: 1fr; }
  .relatedFooter { flex-direction: column; align-items: flex-start; gap: 4px; }
  .finalCta { padding-top: 68px; padding-bottom: 68px; }
  .finalCta h2 { font-size: 30px; }
  .finalCtaActions { width: 100%; }
  .finalCtaActions .buttonPrimary,
  .finalCtaActions .buttonSecondary { min-height: 56px; padding-left: 20px; padding-right: 20px; }
}

@media (max-width: 360px) {
  .sectionShell,
  .hero { width: calc(100% - 40px); }
  .heroActions .buttonPrimary,
  .heroActions .buttonSecondary,
  .finalCtaActions .buttonPrimary,
  .finalCtaActions .buttonSecondary { font-size: 16px; padding-left: 16px; padding-right: 16px; }
  .heroVisualHeader { align-items: flex-start; flex-direction: column; gap: 8px; }
  .visualFlow span { font-size: 13px; }
  .comparisonRow span { padding-left: 0; padding-top: 24px; }
  .comparisonRow span::before { width: auto; }
}
`;
