import React from "react";

const CAPABILITIES = [
  { icon: "refresh", label: "Continuous Content Detection" },
  { icon: "sparkles", label: "AI + Human Workflows" },
  { icon: "globe", label: "100+ Languages" },
  { icon: "search", label: "Multilingual SEO" },
  { icon: "shield", label: "Enterprise Controls" },
];

const LOCALIZATION_CHALLENGES = [
  "New content may remain untranslated.",
  "Regional sites can fall behind the source.",
  "Previously translated content may be processed again.",
  "Terminology can become inconsistent across markets.",
  "Source-language text can appear on localized pages.",
  "Development teams can become publishing bottlenecks.",
  "Local teams may lack visibility into pending updates.",
  "Website redesigns can disrupt existing translation workflows.",
];

const PROXY_FUNCTIONS = [
  {
    icon: "scan",
    title: "Identify Translatable Content",
    description:
      "Separate customer-facing language from source code, presentation, protected terms, and excluded content.",
  },
  {
    icon: "route",
    title: "Connect Translation Workflows",
    description:
      "Route new and updated text through AI translation, language assets, professional linguists, and customer review.",
  },
  {
    icon: "database",
    title: "Store and Reuse Approved Translations",
    description:
      "Preserve validated language so recurring and unchanged content does not need to be translated again.",
  },
  {
    icon: "globe",
    title: "Deliver Localized Experiences",
    description:
      "Present approved content within the design, navigation, and structure of the source website.",
  },
  {
    icon: "refresh",
    title: "Monitor Source Changes",
    description:
      "Detect new and revised website content as the source experience continues to evolve.",
  },
  {
    icon: "sliders",
    title: "Govern Publishing",
    description:
      "Determine what is translated, reviewed, approved, and released for every supported language.",
  },
];

const WORKFLOW_STAGES = [
  {
    title: "Detect",
    description: "Find new pages and changed source content.",
  },
  {
    title: "Extract",
    description:
      "Separate translatable language and metadata from code and presentation.",
  },
  {
    title: "Translate",
    description:
      "Apply AI, translation memory, terminology, or professional translation.",
  },
  {
    title: "Review",
    description: "Run automated QA and the required human approvals.",
  },
  {
    title: "Publish",
    description: "Serve approved content in the correct localized experience.",
  },
  {
    title: "Monitor",
    description: "Track changes, coverage, exceptions, and release status.",
  },
];

const CONTINUOUS_CAPABILITIES = [
  {
    title: "Automated Change Detection",
    description:
      "Identify new pages, revised text, navigation changes, and campaign updates.",
  },
  {
    title: "Incremental Translation",
    description:
      "Send only new or changed content through translation instead of reprocessing the full website.",
  },
  {
    title: "Translation Reuse",
    description:
      "Apply approved translation memory to recurring website language and shared components.",
  },
  {
    title: "Configurable Review",
    description:
      "Route high-value or sensitive updates to professional reviewers while automating lower-risk content.",
  },
  {
    title: "Controlled Publishing",
    description:
      "Publish continuously, on a schedule, or after required approvals are complete.",
  },
  {
    title: "Ongoing Coverage",
    description:
      "Maintain visibility into untranslated content, work in progress, review needs, and published languages.",
  },
];

const QUALITY_WORKFLOWS = [
  {
    title: "AI Translation",
    description:
      "High-volume, frequently changing content where speed and scale are the priority.",
  },
  {
    title: "AI Translation With Automated QA",
    description:
      "Content that benefits from terminology controls, translation memory, and machine-assisted validation.",
  },
  {
    title: "AI Translation With Human Review",
    description:
      "Customer-facing pages where accuracy, fluency, and brand voice must be professionally validated.",
  },
  {
    title: "Professional Human Translation",
    description:
      "Technical, regulated, legal, strategic, or highly visible website content.",
  },
  {
    title: "In-Market Approval",
    description:
      "Content that requires regional stakeholder review before publication.",
  },
];

const GOVERNANCE_CONTROLS = [
  "Content-based routing",
  "Translation memory",
  "Approved terminology",
  "Automated quality checks",
  "Review and approval rules",
];

const CONTEXT_REVIEW_DIMENSIONS = [
  {
    icon: "eye",
    title: "In-Context Linguistic Review",
    description:
      "Review translations alongside page structure, surrounding content, and the customer journey.",
  },
  {
    icon: "menu",
    title: "Navigation and Interface Validation",
    description:
      "Check menus, buttons, forms, labels, calls to action, and other interface language.",
  },
  {
    icon: "expand",
    title: "Text Expansion Review",
    description:
      "Identify truncation, overlap, wrapping, and layout issues caused by longer translated text.",
  },
  {
    icon: "smartphone",
    title: "Mobile and Responsive QA",
    description:
      "Validate localized content across desktop, tablet, and mobile experiences.",
  },
  {
    icon: "language",
    title: "Locale Validation",
    description:
      "Review dates, currencies, numbers, units, punctuation, capitalization, and regional conventions.",
  },
  {
    icon: "link",
    title: "Linguistic and Functional Testing",
    description:
      "Evaluate language accuracy together with links, forms, interactive elements, and page behavior.",
  },
];

const BRAND_CONTROLS = [
  {
    title: "Approved Terminology",
    description:
      "Apply preferred translations for product names, technical concepts, and market-specific language.",
  },
  {
    title: "Do-Not-Translate Rules",
    description:
      "Protect trademarks, model numbers, branded terminology, code, and other fixed content.",
  },
  {
    title: "Style and Voice Guidance",
    description:
      "Define tone, formality, capitalization, punctuation, and regional language preferences.",
  },
  {
    title: "Reviewer Decisions",
    description:
      "Capture approved linguistic choices so future website updates benefit from earlier review.",
  },
  {
    title: "Reusable Approved Content",
    description:
      "Preserve validated language across recurring modules, templates, pages, and campaigns.",
  },
  {
    title: "Cross-Channel Consistency",
    description:
      "Use the same language assets across websites, applications, documentation, and marketing content.",
  },
];

const WEB_ENVIRONMENTS = [
  {
    icon: "cms",
    title: "Traditional CMS Platforms",
    description:
      "Connect translation to centrally managed pages without repeated manual exports and imports.",
  },
  {
    icon: "code",
    title: "Headless and Composable Environments",
    description:
      "Coordinate localization across content services, frontends, and distributed publishing workflows.",
  },
  {
    icon: "browser",
    title: "Server-Rendered and Hybrid Frameworks",
    description:
      "Assess content delivered through server-side rendering, static generation, and hybrid web architectures.",
  },
  {
    icon: "javascript",
    title: "JavaScript and Interactive Content",
    description:
      "Evaluate text rendered through modern web applications, client-side experiences, and interactive components.",
  },
  {
    icon: "cart",
    title: "Ecommerce and Product Catalogs",
    description:
      "Support frequently changing products, categories, promotions, and transactional content.",
  },
  {
    icon: "database",
    title: "Content APIs and Product Feeds",
    description:
      "Coordinate structured content that enters the web experience through APIs, catalogs, and external data feeds.",
  },
  {
    icon: "form",
    title: "Forms and Conversion Flows",
    description:
      "Translate labels, instructions, validation messages, calls to action, and supporting customer journeys.",
  },
  {
    icon: "lock",
    title: "Third-Party and Protected Content",
    description:
      "Define what belongs in the proxy workflow, another integration, or an excluded content scope.",
  },
];

const SEO_CONTROLS = [
  "Dedicated language URLs",
  "Localized page titles and metadata",
  "Correct hreflang relationships",
  "Same-language canonical URLs",
  "Crawlable translated content",
  "Localized internal links",
  "XML sitemap alignment",
  "Localized structured content",
  "Search-friendly language selection",
  "Redirect and fallback planning",
];

const SECURITY_CONTROLS = [
  {
    icon: "scan",
    title: "Content Scope and Exclusions",
    description:
      "Define which domains, paths, pages, components, and content types enter the localization workflow.",
  },
  {
    icon: "users",
    title: "Roles and Permissions",
    description:
      "Control who can access content, review translations, approve changes, and manage publishing decisions.",
  },
  {
    icon: "lock",
    title: "Secure Translation Workflows",
    description:
      "Protect content as it moves between translation technology, professional linguists, reviewers, and stakeholders.",
  },
  {
    icon: "checkCircle",
    title: "Review and Approval Controls",
    description:
      "Require designated validation steps before sensitive or high-value content can be released.",
  },
  {
    icon: "database",
    title: "Language Asset Governance",
    description:
      "Manage translation memory, terminology, and approved language as controlled enterprise resources.",
  },
  {
    icon: "audit",
    title: "Activity and Audit Visibility",
    description:
      "Maintain visibility into translation, review, approval, and delivery activity across the program.",
  },
];

const PERFORMANCE_PRIORITIES = [
  {
    icon: "cloud",
    title: "Content Delivery Planning",
    description:
      "Determine how approved localized experiences should be served across target markets and web environments.",
  },
  {
    icon: "gauge",
    title: "Caching and Response Strategy",
    description:
      "Plan reusable content delivery and response behavior around the needs of the source website.",
  },
  {
    icon: "route",
    title: "Source-Site Coordination",
    description:
      "Account for dependencies between the origin website, localized content, and customer-facing language versions.",
  },
  {
    icon: "refresh",
    title: "Change and Release Management",
    description:
      "Coordinate source updates, translation releases, cache changes, and new content deployments.",
  },
  {
    icon: "expand",
    title: "Scalability and Monitoring",
    description:
      "Plan for additional traffic, languages, domains, content volumes, and operational visibility.",
  },
  {
    icon: "rollback",
    title: "Rollback and Redesign Readiness",
    description:
      "Prepare controlled release, recovery, and revalidation procedures for major website changes.",
  },
];

const ARCHITECTURE_OPTIONS = [
  {
    approach: "Website Translation Proxy",
    bestFor:
      "Rapid launch and continuous localization of customer-facing websites",
    updates: "Detected and routed through ongoing workflows",
    involvement: "Limited after initial configuration",
    featured: true,
  },
  {
    approach: "CMS Connector",
    bestFor: "Structured content managed within a supported CMS",
    updates: "Triggered through CMS workflows",
    involvement: "CMS configuration and administration",
  },
  {
    approach: "Translation API",
    bestFor: "Custom applications, services, and automated content pipelines",
    updates: "Real-time, scheduled, or event-based",
    involvement: "Developer-led integration",
  },
  {
    approach: "File-Based Workflow",
    bestFor: "Stable, periodic, or manually managed website content",
    updates: "Exported and imported as needed",
    involvement: "Manual coordination",
  },
  {
    approach: "Hybrid Architecture",
    bestFor: "Complex enterprise ecosystems with multiple content sources",
    updates: "Varies by content type and system",
    involvement: "Coordinated across systems",
  },
];

const IMPLEMENTATION_STAGES = [
  {
    title: "Discovery",
    description:
      "Align websites, audiences, languages, stakeholders, content priorities, and global objectives.",
  },
  {
    title: "Technical Assessment",
    description:
      "Review architecture, rendering, URLs, dynamic content, security, integrations, and SEO requirements.",
  },
  {
    title: "Content Audit",
    description:
      "Identify translatable content, exclusions, repeated components, legacy translations, and language assets.",
  },
  {
    title: "Pilot Deployment",
    description:
      "Validate a representative language or site section before broader production rollout.",
  },
  {
    title: "Workflow Configuration",
    description:
      "Configure AI, human review, terminology, translation memory, quality checks, and approvals.",
  },
  {
    title: "SEO and Experience Validation",
    description:
      "Test URLs, metadata, hreflang, navigation, responsive layouts, forms, and crawlability.",
  },
  {
    title: "Production Launch",
    description:
      "Release approved localized experiences according to the agreed market and language plan.",
  },
  {
    title: "Continuous Optimization",
    description:
      "Monitor source changes, coverage, quality, workflow efficiency, and expansion into new markets.",
  },
];

const ENTERPRISE_USE_CASES = [
  {
    icon: "building",
    title: "Corporate and Brand Websites",
    description:
      "Maintain a consistent enterprise narrative across customer, investor, partner, recruitment, and regional experiences.",
  },
  {
    icon: "code",
    title: "Product and SaaS Websites",
    description:
      "Keep product pages, feature releases, conversion flows, and supporting web content aligned across markets.",
  },
  {
    icon: "cart",
    title: "Ecommerce and Product Catalogs",
    description:
      "Localize changing categories, product descriptions, promotions, calls to action, and purchase journeys.",
  },
  {
    icon: "shield",
    title: "Technical and Regulated Websites",
    description:
      "Apply controlled terminology, professional review, and approval workflows to higher-risk content.",
  },
  {
    icon: "sparkles",
    title: "Marketing and Campaign Websites",
    description:
      "Launch multilingual campaigns without waiting for every update to pass through a conventional CMS process.",
  },
  {
    icon: "layers",
    title: "Multi-Brand and Multi-Site Enterprises",
    description:
      "Centralize language assets and governance across business units, domains, brands, and regional teams.",
  },
];

const OPERATIONS_VISIBILITY = [
  {
    icon: "scan",
    title: "Content Discovery",
    description:
      "See which pages and translatable elements have entered the localization workflow.",
  },
  {
    icon: "refresh",
    title: "Change Activity",
    description:
      "Identify newly detected and revised source content that requires action.",
  },
  {
    icon: "globe",
    title: "Translation Coverage",
    description:
      "Monitor progress and multilingual coverage across websites and languages.",
  },
  {
    icon: "route",
    title: "Workflow Status",
    description:
      "Understand whether content is awaiting translation, review, approval, or publication.",
  },
  {
    icon: "users",
    title: "Review Activity",
    description:
      "Track linguistic, subject-matter, customer, and in-market review requirements.",
  },
  {
    icon: "database",
    title: "Translation Memory Reuse",
    description:
      "See how approved language assets reduce repetitive translation work.",
  },
  {
    icon: "checkCircle",
    title: "Terminology and Quality",
    description:
      "Maintain visibility into approved terminology and configured quality controls.",
  },
  {
    icon: "audit",
    title: "Exceptions and History",
    description:
      "Surface untranslated, excluded, delayed, or otherwise exceptional content for follow-up.",
  },
];

const CONNECTED_PLATFORM_CAPABILITIES = [
  {
    icon: "layers",
    title: "Automation and Delivery",
    description:
      "Coordinate content capture, AI translation, workflow routing, reuse, publishing, and continuous website updates.",
  },
  {
    icon: "users",
    title: "Professional Quality",
    description:
      "Combine native-language linguists, in-context review, website QA, and market approval for customer-facing content.",
  },
  {
    icon: "database",
    title: "Enterprise Language Assets",
    description:
      "Apply translation memory, terminology, brand guidance, and reviewer decisions across every website update.",
  },
  {
    icon: "shield",
    title: "Managed Governance",
    description:
      "Connect program management, permissions, approvals, security controls, and operational visibility.",
  },
];

const FAQ_ITEMS = [
  {
    question: "What is a website translation proxy?",
    answer:
      "A website translation proxy is a localization layer between a source website and its international visitors. It identifies translatable content, connects that content to translation workflows, and delivers approved language versions while preserving the source site's design, structure, and functionality.",
  },
  {
    question: "How does the Stepes website translation proxy work?",
    answer:
      "Stepes detects and extracts translatable website content, routes it through configured AI or professional translation workflows, applies quality and approval controls, and delivers approved content within the localized website experience. The proxy can continue monitoring the source site for new and updated content.",
  },
  {
    question: "Does a translation proxy replace our CMS?",
    answer:
      "No. Your source website and CMS remain responsible for original content, structure, and the core web experience. The proxy manages localized content and delivery for each supported language.",
  },
  {
    question: "Do we need to rebuild our website for every language?",
    answer:
      "A primary benefit of the proxy approach is the ability to create localized website experiences without independently rebuilding and maintaining the complete web infrastructure for every language. Exact requirements depend on your architecture and desired integration model.",
  },
  {
    question: "What happens when the source website changes?",
    answer:
      "Stepes can detect new or revised source content and route the affected text through the appropriate translation, review, approval, and publishing workflow. Previously approved translations remain available for reuse.",
  },
  {
    question: "Can translations be reviewed before publication?",
    answer:
      "Yes. Workflows can include professional linguistic review, subject-matter validation, customer review, in-market approval, and other required controls before content is released.",
  },
  {
    question:
      "Can we use AI translation for some pages and human translation for others?",
    answer:
      "Yes. Translation workflows can be aligned with the website section, audience, content lifespan, business value, risk, target language, and required quality level.",
  },
  {
    question: "How does translation memory work with the proxy?",
    answer:
      "Approved translations are stored in translation memory and can be reused when identical or similar website content appears again. This improves consistency and reduces repetitive translation work.",
  },
  {
    question: "How does Stepes control terminology and product names?",
    answer:
      "Approved terms, product names, technical expressions, and do-not-translate instructions can be managed through terminology resources and applied throughout the website translation workflow.",
  },
  {
    question: "Is proxy-translated content visible to search engines?",
    answer:
      "A properly implemented multilingual website can provide distinct, crawlable URLs and indexable translated content for each language. The final result depends on URL architecture, rendering, metadata, hreflang, canonicalization, internal linking, and related technical settings.",
  },
  {
    question: "Does the proxy support multilingual SEO?",
    answer:
      "Stepes can coordinate the translation of page titles, meta descriptions, headings, internal links, and other search-relevant content while aligning localized pages with the organization's international URL and hreflang strategy.",
  },
  {
    question: "Can Stepes translate dynamic and JavaScript content?",
    answer:
      "Dynamic content requirements are evaluated during the technical assessment. The appropriate solution may use the website proxy, translation API, integrations, or a hybrid architecture depending on how content is generated and delivered.",
  },
  {
    question: "Can sensitive pages or content be excluded?",
    answer:
      "Yes. The localization scope can distinguish between public translatable content and pages, paths, components, or information that should be excluded or handled through a separate workflow.",
  },
  {
    question: "Can the proxy support authenticated content?",
    answer:
      "Authenticated experiences require a technical review of access, rendering, session behavior, content sensitivity, and delivery requirements. Stepes will recommend the proxy, API, connector, or hybrid approach that best fits the environment.",
  },
  {
    question: "Can we begin with one language or website section?",
    answer:
      "Yes. A controlled pilot can begin with one representative language, market, domain, or website section before the program expands.",
  },
  {
    question: "What happens during a website redesign?",
    answer:
      "Stepes reviews changes to templates, components, navigation, URL structures, rendering behavior, and content organization so the proxy configuration and localized experiences can be updated and revalidated.",
  },
  {
    question:
      "How is a website translation proxy different from a translation API?",
    answer:
      "A proxy captures and delivers localized web experiences with relatively limited recurring development work. A translation API gives developers programmatic translation capabilities for custom applications and content pipelines. Some enterprise environments use both.",
  },
  {
    question: "How is a proxy different from a CMS connector?",
    answer:
      "A CMS connector transfers structured content between a particular content management system and a translation platform. A proxy works at the website experience and delivery layer and can reduce dependence on a single CMS workflow.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "The timeline depends on website size, architecture, languages, content types, URL strategy, integrations, quality requirements, and approval workflows. A technical assessment and pilot establish a realistic production plan.",
  },
  {
    question: "Does Stepes provide ongoing professional translation services?",
    answer:
      "Yes. Stepes provides managed website translation and localization services in more than 100 languages, including professional translation, linguistic review, quality assurance, and ongoing content support.",
  },
];


const RELATED_RESOURCES = [
  {
    category: "SERVICE",
    title: "Website Translation Services",
    description:
      "Translate customer-facing web content with professional linguists, subject-matter expertise, and managed localization support.",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    category: "SOLUTION",
    title: "Website Localization",
    description:
      "Explore the strategy, workflows, quality controls, and operating model behind effective multilingual web experiences.",
    href: "https://www.stepes.com/website-localization/",
  },
  {
    category: "PLATFORM",
    title: "AI Translation Platform",
    description:
      "Combine enterprise AI translation with terminology, translation memory, professional review, and quality governance.",
    href: "https://www.stepes.com/ai-translation-platform/",
  },
  {
    category: "DEVELOPERS",
    title: "Translation API",
    description:
      "Connect translation directly to applications, content systems, and custom automated workflows.",
    href: "https://www.stepes.com/translation-api/",
  },
  {
    category: "PLATFORM",
    title: "Translation Memory",
    description:
      "Reuse approved translations across websites, languages, projects, and enterprise content channels.",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    category: "PLATFORM",
    title: "Terminology Management",
    description:
      "Manage product names, technical language, and approved multilingual terminology across global web programs.",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    category: "QUALITY",
    title: "Translation Quality Assurance",
    description:
      "Apply systematic linguistic, functional, and governance controls throughout translation and delivery.",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
  {
    category: "TRUST",
    title: "Security and Compliance",
    description:
      "Learn how Stepes protects enterprise content throughout capture, translation, review, approval, and delivery.",
    href: "https://www.stepes.com/security-and-compliance/",
  },
  {
    category: "RESOURCE",
    title: "Localization Guides",
    description:
      "Explore practical guidance for website, software, application, and digital content localization.",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
];

function LineIcon({ name, size = 22 }) {
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
    focusable: "false",
  };

  switch (name) {
    case "browser":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 8h18" />
          <path d="M7 6h.01M10 6h.01" />
          <path d="M7 12h5M7 15h8" />
        </svg>
      );
    case "refresh":
      return (
        <svg {...common}>
          <path d="M20 7v5h-5" />
          <path d="M4 17v-5h5" />
          <path d="M6.1 8.2A7 7 0 0 1 18.7 7L20 12" />
          <path d="M17.9 15.8A7 7 0 0 1 5.3 17L4 12" />
        </svg>
      );
    case "sparkles":
      return (
        <svg {...common}>
          <path d="m12 3 1.25 3.25L16.5 7.5l-3.25 1.25L12 12l-1.25-3.25L7.5 7.5l3.25-1.25L12 3Z" />
          <path d="m18.5 13 .75 1.75L21 15.5l-1.75.75L18.5 18l-.75-1.75L16 15.5l1.75-.75L18.5 13Z" />
          <path d="m5.5 13 .75 1.75L8 15.5l-1.75.75L5.5 18l-.75-1.75L3 15.5l1.75-.75L5.5 13Z" />
        </svg>
      );
    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.2 2.45 3.3 5.45 3.3 9S14.2 18.55 12 21" />
          <path d="M12 3C9.8 5.45 8.7 8.45 8.7 12S9.8 18.55 12 21" />
        </svg>
      );
    case "search":
      return (
        <svg {...common}>
          <circle cx="10.8" cy="10.8" r="6.6" />
          <path d="m16 16 4.2 4.2" />
          <path d="M7.7 10.8h6.2" />
          <path d="M10.8 7.7v6.2" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 19 6v5.4c0 4.45-2.75 7.7-7 9.6-4.25-1.9-7-5.15-7-9.6V6l7-3Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "layers":
      return (
        <svg {...common}>
          <path d="m12 3-9 5 9 5 9-5-9-5Z" />
          <path d="m3 12 9 5 9-5" />
          <path d="m3 16 9 5 9-5" />
        </svg>
      );

    case "scan":
      return (
        <svg {...common}>
          <path d="M8 4H5a1 1 0 0 0-1 1v3M16 4h3a1 1 0 0 1 1 1v3M8 20H5a1 1 0 0 1-1-1v-3M16 20h3a1 1 0 0 0 1-1v-3" />
          <rect x="7" y="8" width="10" height="8" rx="2" />
          <path d="M9 11h6M9 13.5h4" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 6h4a4 4 0 0 1 4 4v1" />
          <path d="M16 11v3a4 4 0 0 1-4 4H8" />
          <path d="m10 15-3 3 3 3" />
        </svg>
      );
    case "database":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "sliders":
      return (
        <svg {...common}>
          <path d="M4 7h10M18 7h2M4 17h2M10 17h10" />
          <circle cx="16" cy="7" r="2" />
          <circle cx="8" cy="17" r="2" />
        </svg>
      );
    case "checkCircle":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="m8 12 2.5 2.5L16 9" />
        </svg>
      );

    case "eye":
      return (
        <svg {...common}>
          <path d="M2.8 12s3.2-5.5 9.2-5.5S21.2 12 21.2 12 18 17.5 12 17.5 2.8 12 2.8 12Z" />
          <circle cx="12" cy="12" r="2.4" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M5 7h14M5 12h14M5 17h9" />
          <circle cx="18" cy="17" r="1.5" />
        </svg>
      );
    case "expand":
      return (
        <svg {...common}>
          <path d="M8 4H4v4M16 4h4v4M8 20H4v-4M16 20h4v-4" />
          <path d="m4 8 5-5M20 8l-5-5M4 16l5 5M20 16l-5 5" />
        </svg>
      );
    case "smartphone":
      return (
        <svg {...common}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.2" />
          <path d="M10 5h4M11 18.5h2" />
        </svg>
      );
    case "language":
      return (
        <svg {...common}>
          <path d="M4 5h8M8 3v2M5 9c1.2 2.1 3.1 3.8 5.5 5" />
          <path d="M11 5c-.7 3.5-2.8 6.3-6 8" />
          <path d="m14 20 3.2-8 3.2 8M15.2 17h4" />
        </svg>
      );
    case "link":
      return (
        <svg {...common}>
          <path d="m9.5 14.5 5-5" />
          <path
            d="M7.2 16.8 5.5 18.5a3.5 3.5 0 0 1-5-5l3-3a3.5 3.5 0 0 1 5 0"
            transform="translate(2 0)"
          />
          <path
            d="m14.8 7.2 1.7-1.7a3.5 3.5 0 1 1 5 5l-3 3a3.5 3.5 0 0 1-5 0"
            transform="translate(-2 0)"
          />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M4 21V5l8-3 8 3v16" />
          <path d="M8 8h1M15 8h1M8 12h1M15 12h1M8 16h1M15 16h1M10 21v-4h4v4" />
        </svg>
      );
    case "cms":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 8h18M7 12h4M7 15h7M16 12h1M16 15h1" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />
        </svg>
      );
    case "javascript":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2.5" />
          <path d="M9 8v6.5c0 1.3-.7 2-2 2M13 15c.6 1 1.5 1.5 2.7 1.5 1.3 0 2.3-.7 2.3-1.8 0-1.2-.7-1.7-2.4-2.4-1.6-.6-2.2-1.3-2.2-2.4 0-1.4 1.1-2.4 2.8-2.4 1.1 0 2 .4 2.7 1.2" />
        </svg>
      );
    case "cart":
      return (
        <svg {...common}>
          <path d="M3 4h2l2.1 10.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 1.9-1.4L21 8H7" />
          <circle cx="10" cy="19" r="1.2" />
          <circle cx="18" cy="19" r="1.2" />
        </svg>
      );
    case "form":
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="2" />
          <path d="M8 8h8M8 12h8M8 16h5" />
          <path d="m15.5 16 1.5 1.5 3-3" />
        </svg>
      );
    case "repeat":
      return (
        <svg {...common}>
          <path d="M17 2.8 20.2 6 17 9.2" />
          <path d="M4 11V9a3 3 0 0 1 3-3h13" />
          <path d="M7 21.2 3.8 18 7 14.8" />
          <path d="M20 13v2a3 3 0 0 1-3 3H4" />
        </svg>
      );
    case "lock":
      return (
        <svg {...common}>
          <rect x="4" y="10" width="16" height="11" rx="2.5" />
          <path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" />
        </svg>
      );

    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19c.6-3.2 2.5-5 5.5-5s4.9 1.8 5.5 5" />
          <circle cx="17.5" cy="9" r="2.2" />
          <path d="M15.5 14.5c2.8-.5 4.7.8 5 3.5" />
        </svg>
      );
    case "audit":
      return (
        <svg {...common}>
          <path d="M7 3h8l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
          <path d="M15 3v5h5M9 12h6M9 16h4" />
          <path d="m15.5 16.5 1.4 1.4 2.6-3" />
        </svg>
      );
    case "cloud":
      return (
        <svg {...common}>
          <path d="M7.5 18H18a4 4 0 0 0 .4-8A6.5 6.5 0 0 0 6 8.5 4.8 4.8 0 0 0 7.5 18Z" />
          <path d="M9 13h6M12 10v6" />
        </svg>
      );
    case "gauge":
      return (
        <svg {...common}>
          <path d="M4 18a8 8 0 1 1 16 0" />
          <path d="m12 14 4-4" />
          <path d="M7 18h10" />
        </svg>
      );
    case "rollback":
      return (
        <svg {...common}>
          <path d="M8 7H4V3" />
          <path d="M4.5 7.5A8 8 0 1 1 5 17" />
          <path d="M9 11h6v6H9z" />
        </svg>
      );
    case "clipboard":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4.5V3h6v1.5M9 10h6M9 14h6M9 18h4" />
        </svg>
      );
    case "arrowRight":
      return (
        <svg {...common}>
          <path d="M5 12h14" />
          <path d="m14 7 5 5-5 5" />
        </svg>
      );
    default:
      return null;
  }
}

function ArchitectureArrow() {
  return (
    <div className="wtp-architecture-arrow" aria-hidden="true">
      <LineIcon name="arrowRight" size={24} />
    </div>
  );
}

function ProxyArchitecture() {
  return (
    <div
      className="wtp-architecture"
      role="img"
      aria-label="Source website content flows through the Stepes website translation proxy into localized web experiences."
    >
      <div className="wtp-architecture-node wtp-source-node">
        <div className="wtp-node-icon">
          <LineIcon name="browser" size={24} />
        </div>
        <div>
          <span className="wtp-node-label">SOURCE</span>
          <strong>Source Website</strong>
          <small>CMS, web applications, and digital content</small>
        </div>
      </div>

      <ArchitectureArrow />

      <div className="wtp-architecture-node wtp-proxy-node">
        <div className="wtp-node-icon">
          <LineIcon name="layers" size={24} />
        </div>
        <div>
          <span className="wtp-node-label">LOCALIZATION LAYER</span>
          <strong>Stepes Website Translation Proxy</strong>
          <small>Detect, translate, review, publish, and monitor</small>
        </div>
        <div
          className="wtp-proxy-controls"
          aria-label="Connected translation controls"
        >
          <span>AI + Human</span>
          <span>Translation Memory</span>
          <span>Terminology</span>
        </div>
      </div>

      <ArchitectureArrow />

      <div className="wtp-architecture-node wtp-market-node">
        <div className="wtp-node-icon">
          <LineIcon name="globe" size={24} />
        </div>
        <div>
          <span className="wtp-node-label">DELIVERY</span>
          <strong>Localized Web Experiences</strong>
          <small>Search-ready websites for global markets</small>
        </div>
        <div
          className="wtp-language-row"
          aria-label="Example localized websites"
        >
          <span>EN</span>
          <span>DE</span>
          <span>JA</span>
          <span>ES</span>
        </div>
      </div>
    </div>
  );
}

export default function StepesWebsiteTranslationProxyWireframe() {
  return (
    <main className="wtp-page">
      <section className="wtp-hero" aria-labelledby="wtp-page-title">
        <div className="wtp-shell">
          <div className="wtp-hero-copy">
            <h1 id="wtp-page-title">
              Enterprise Website Translation Proxy for Continuous Localization
            </h1>
            <p>
              Launch, manage, and continuously update multilingual
              websites—without rebuilding your CMS or duplicating your web
              infrastructure. Stepes connects your source website to governed AI
              and professional human translation workflows while preserving
              design, functionality, brand experience, and global
              discoverability.
            </p>
            <div
              className="wtp-hero-actions"
              aria-label="Website translation proxy actions"
            >
              <a
                className="wtp-button wtp-button-primary"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to a Website Localization Expert
                <LineIcon name="arrowRight" size={18} />
              </a>
              <a
                className="wtp-button wtp-button-secondary"
                href="https://www.stepes.com/website-translation-proxy/#how-it-works"
              >
                See How the Proxy Works
              </a>
            </div>
          </div>

          <ProxyArchitecture />
        </div>
      </section>

      <section
        className="wtp-capabilities"
        aria-labelledby="wtp-capabilities-title"
      >
        <h2 id="wtp-capabilities-title" className="wtp-visually-hidden">
          Enterprise Website Translation Capabilities
        </h2>
        <div className="wtp-shell">
          <div className="wtp-capability-band">
            {CAPABILITIES.map((capability) => (
              <div className="wtp-capability" key={capability.label}>
                <span className="wtp-capability-icon">
                  <LineIcon name={capability.icon} size={22} />
                </span>
                <span>{capability.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wtp-challenge" aria-labelledby="wtp-challenge-title">
        <div className="wtp-shell">
          <div className="wtp-challenge-heading">
            <div>
              <div className="wtp-eyebrow">THE ENTERPRISE CHALLENGE</div>
              <h2 id="wtp-challenge-title">
                Website Localization Should Move as Fast as Your Website
              </h2>
            </div>
            <p className="wtp-challenge-intro">
              Enterprise websites rarely remain static. Product pages change,
              campaigns launch, legal language is updated, navigation evolves,
              and new content is published across multiple teams and systems.
            </p>
          </div>

          <div className="wtp-challenge-body">
            <div className="wtp-challenge-narrative">
              <p>
                Traditional website translation workflows struggle to keep pace.
                Content must be exported, prepared, translated, returned,
                imported, tested, and published—often through a process that
                depends heavily on developers and manual coordination.
              </p>
              <p>
                Stepes replaces these fragmented handoffs with a continuous
                localization model. Your source website remains the system of
                record while the proxy connects new and updated content to the
                right translation, review, approval, and publishing workflow.
              </p>
              <p className="wtp-key-message">
                The goal is not simply to translate your website once. It is to
                keep every market experience accurate, current, consistent, and
                ready for growth.
              </p>
            </div>

            <div
              className="wtp-challenge-list"
              aria-label="Common website localization challenges"
            >
              {LOCALIZATION_CHALLENGES.map((challenge) => (
                <div className="wtp-challenge-item" key={challenge}>
                  <span className="wtp-challenge-marker" aria-hidden="true" />
                  <span>{challenge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-definition"
        id="what-is-a-translation-proxy"
        aria-labelledby="wtp-definition-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-definition-heading">
            <div>
              <h2 id="wtp-definition-title">
                What Is a Website Translation Proxy?
              </h2>
            </div>
            <p>
              A website translation proxy is a technology layer that sits
              between your source website and international visitors. It
              identifies translatable content, connects that content to
              translation workflows, and serves approved localized versions
              while preserving the source site’s design, structure, and
              functionality.
            </p>
          </div>

          <div className="wtp-definition-layout">
            <div className="wtp-definition-copy">
              <p className="wtp-definition-lead">
                Your source website remains the system of record. The proxy
                manages the localized content associated with each language
                version, making it possible to launch and maintain multilingual
                experiences without rebuilding the complete web environment for
                every market.
              </p>
              <p>
                This separation allows web teams to continue publishing in the
                source environment while localization teams manage translation,
                language assets, quality controls, approvals, and ongoing
                updates through a connected enterprise workflow.
              </p>
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/website-translation-services/"
              >
                Explore Website Translation Services
                <LineIcon name="arrowRight" size={17} />
              </a>
            </div>

            <div
              className="wtp-proxy-functions"
              aria-label="What the website translation proxy does"
            >
              {PROXY_FUNCTIONS.map((item) => (
                <div className="wtp-proxy-function" key={item.title}>
                  <span className="wtp-proxy-function-icon">
                    <LineIcon name={item.icon} size={22} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-workflow"
        id="how-it-works"
        aria-labelledby="wtp-workflow-title"
      >
        <div className="wtp-shell">
          <div className="wtp-workflow-heading">
            <div>
              <div className="wtp-eyebrow wtp-eyebrow-dark">HOW IT WORKS</div>
              <h2 id="wtp-workflow-title">
                From Source Content to Localized Experiences—Continuously
              </h2>
            </div>
            <p>
              Stepes brings content capture, translation, quality control,
              publishing, and ongoing website maintenance into one governed
              workflow—without disconnected handoffs.
            </p>
          </div>

          <div
            className="wtp-workflow-panel"
            aria-label="Six-stage website translation proxy workflow"
          >
            {WORKFLOW_STAGES.map((stage, index) => (
              <div className="wtp-workflow-stage" key={stage.title}>
                <span className="wtp-workflow-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            ))}
          </div>

          <div
            className="wtp-workflow-links"
            aria-label="Connected Stepes platform capabilities"
          >
            <span>Connected platform capabilities:</span>
            <a href="https://www.stepes.com/ai-translation-platform/">
              AI Translation Platform
            </a>
            <a href="https://www.stepes.com/translation-memory/">
              Translation Memory
            </a>
            <a href="https://www.stepes.com/terminology-management/">
              Terminology Management
            </a>
            <a href="https://www.stepes.com/translation-quality-assurance/">
              Translation Quality Assurance
            </a>
          </div>
        </div>
      </section>

      <section
        className="wtp-continuous"
        aria-labelledby="wtp-continuous-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-continuous-heading">
            <div>
              <h2 id="wtp-continuous-title">
                Continuously Localize New and Updated Web Content
              </h2>
            </div>
            <p>
              Website translation should not restart every time a page changes.
              Stepes identifies what is new or revised, preserves approved
              language, and routes only the affected content through an
              incremental localization workflow.
            </p>
          </div>

          <div
            className="wtp-update-flow"
            aria-label="Continuous website localization update flow"
          >
            {[
              "Source Content Changes",
              "Change Detected",
              "Translation Routed",
              "Quality Approved",
              "Localized Experience Updated",
            ].map((label, index, labels) => (
              <div className="wtp-flow-fragment" key={label}>
                <div className="wtp-update-step">
                  <span className="wtp-update-dot" aria-hidden="true" />
                  <span>{label}</span>
                </div>
                {index < labels.length - 1 && (
                  <div className="wtp-update-connector" aria-hidden="true">
                    <LineIcon name="arrowRight" size={18} />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="wtp-continuous-grid">
            {CONTINUOUS_CAPABILITIES.map((item) => (
              <div className="wtp-continuous-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="wtp-quality" aria-labelledby="wtp-quality-title">
        <div className="wtp-shell">
          <div className="wtp-quality-layout">
            <div className="wtp-quality-intro">
              <div className="wtp-eyebrow">QUALITY ORCHESTRATION</div>
              <h2 id="wtp-quality-title">
                Apply the Right Translation Workflow to Every Page
              </h2>
              <p>
                Not every page has the same audience, business value, lifespan,
                or level of risk. Stepes lets enterprises align translation
                quality and human oversight with the purpose of the content
                instead of forcing every update through one rigid process.
              </p>
              <p>
                Configure workflows by website section, content type, target
                language, market, brand visibility, regulatory exposure, or
                required turnaround.
              </p>
              <div className="wtp-quality-actions">
                <a
                  className="wtp-editorial-link"
                  href="https://www.stepes.com/ai-translation-platform/"
                >
                  Explore AI Translation Platform
                  <LineIcon name="arrowRight" size={17} />
                </a>
                <a
                  className="wtp-editorial-link"
                  href="https://www.stepes.com/solutions/ai-powered-translation-workflows/"
                >
                  Explore AI + Human Workflows
                  <LineIcon name="arrowRight" size={17} />
                </a>
              </div>
            </div>

            <div
              className="wtp-quality-pathways"
              aria-label="Configurable translation workflow pathways"
            >
              <div className="wtp-quality-pathways-label">
                CONFIGURABLE QUALITY PATHS
              </div>
              {QUALITY_WORKFLOWS.map((workflow) => (
                <div className="wtp-quality-pathway" key={workflow.title}>
                  <span className="wtp-quality-node" aria-hidden="true" />
                  <div>
                    <h3>{workflow.title}</h3>
                    <p>{workflow.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="wtp-governance-strip"
            aria-label="Enterprise quality governance controls"
          >
            <div className="wtp-governance-title">
              <LineIcon name="checkCircle" size={22} />
              <span>
                Enterprise governance remains connected across every pathway.
              </span>
            </div>
            <div className="wtp-governance-controls">
              {GOVERNANCE_CONTROLS.map((control) => (
                <span key={control}>{control}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-context"
        id="in-context-review"
        aria-labelledby="wtp-context-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-context-heading">
            <div>
              <h2 id="wtp-context-title">
                Validate Language Where Customers Actually Experience It
              </h2>
            </div>
            <p>
              Website translation quality depends on more than isolated strings.
              Stepes helps your teams review language within the page,
              interface, device, and customer journey where it will ultimately
              appear.
            </p>
          </div>

          <div className="wtp-context-layout">
            <div
              className="wtp-context-preview"
              role="img"
              aria-label="Localized website review showing source content, German translation, and page-level quality checks."
            >
              <div className="wtp-preview-chrome">
                <div className="wtp-preview-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span>Localized Website Review</span>
                <span className="wtp-preview-locale">DE</span>
              </div>

              <div className="wtp-preview-pages">
                <div className="wtp-preview-page">
                  <span className="wtp-preview-label">SOURCE PAGE</span>
                  <div className="wtp-preview-nav" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Manage global content with confidence.</strong>
                  <p>
                    Connect translation, review, and publishing across every
                    market.
                  </p>
                  <span className="wtp-preview-button">
                    Explore the platform
                  </span>
                </div>

                <div className="wtp-preview-page wtp-preview-page-localized">
                  <span className="wtp-preview-label">LOCALIZED PREVIEW</span>
                  <div className="wtp-preview-nav" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>Globale Inhalte sicher verwalten.</strong>
                  <p>
                    Übersetzung, Prüfung und Veröffentlichung für jeden Markt
                    verbinden.
                  </p>
                  <span className="wtp-preview-button">
                    Plattform entdecken
                  </span>
                </div>
              </div>

              <div
                className="wtp-preview-status"
                aria-label="Page review checks"
              >
                <span>
                  <LineIcon name="checkCircle" size={17} /> Layout fit
                </span>
                <span>
                  <LineIcon name="checkCircle" size={17} /> Terminology
                </span>
                <span>
                  <LineIcon name="checkCircle" size={17} /> Links
                </span>
                <span>
                  <LineIcon name="smartphone" size={17} /> Responsive QA
                </span>
              </div>
            </div>

            <div
              className="wtp-context-dimensions"
              aria-label="Website localization quality dimensions"
            >
              {CONTEXT_REVIEW_DIMENSIONS.map((item) => (
                <div className="wtp-context-dimension" key={item.title}>
                  <span className="wtp-context-icon">
                    <LineIcon name={item.icon} size={21} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
              <a
                className="wtp-editorial-link wtp-context-link"
                href="https://www.stepes.com/translation-quality-assurance/"
              >
                Explore Translation Quality Assurance
                <LineIcon name="arrowRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="wtp-brand" aria-labelledby="wtp-brand-title">
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-brand-heading">
            <div>
              <div className="wtp-eyebrow">LANGUAGE GOVERNANCE</div>
              <h2 id="wtp-brand-title">
                Turn Brand Standards Into Enforceable Language Controls
              </h2>
            </div>
            <p>
              Connect website translation to reusable enterprise language assets
              so product names, technical terminology, tone, and approved
              wording remain consistent as content changes across markets.
            </p>
          </div>

          <div className="wtp-brand-layout">
            <div
              className="wtp-language-system"
              aria-label="Connected enterprise language assets"
            >
              <div className="wtp-language-system-label">
                CONNECTED LANGUAGE ASSETS
              </div>
              <div className="wtp-language-asset">
                <span>TM</span>
                <div>
                  <strong>Translation Memory</strong>
                  <p>
                    Reuse validated website translations across recurring and
                    similar content.
                  </p>
                </div>
              </div>
              <div className="wtp-language-asset">
                <span>TERM</span>
                <div>
                  <strong>Terminology Management</strong>
                  <p>
                    Apply approved product, technical, and market-specific
                    language.
                  </p>
                </div>
              </div>
              <div className="wtp-language-asset">
                <span>STYLE</span>
                <div>
                  <strong>Brand and Locale Guidance</strong>
                  <p>
                    Carry tone, voice, formatting, and regional preferences into
                    every workflow.
                  </p>
                </div>
              </div>
              <div className="wtp-language-outcome">
                <LineIcon name="refresh" size={22} />
                <span>
                  Every approved translation strengthens future website updates.
                </span>
              </div>
            </div>

            <div
              className="wtp-brand-controls"
              aria-label="Website language governance controls"
            >
              {BRAND_CONTROLS.map((item) => (
                <div className="wtp-brand-control" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="wtp-brand-links"
            aria-label="Stepes language asset capabilities"
          >
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/translation-memory/"
            >
              Explore Translation Memory
              <LineIcon name="arrowRight" size={17} />
            </a>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/terminology-management/"
            >
              Explore Terminology Management
              <LineIcon name="arrowRight" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="wtp-modern" aria-labelledby="wtp-modern-title">
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-modern-heading">
            <div>
              <h2 id="wtp-modern-title">
                Localize Modern Websites Without Rebuilding the Web Stack
              </h2>
            </div>
            <p>
              Enterprise websites often combine multiple content sources and
              rendering models. Stepes evaluates how your content is created,
              updated, and delivered, then configures the proxy—or a
              complementary integration—around the actual web architecture.
            </p>
          </div>

          <div
            className="wtp-modern-grid"
            aria-label="Website environments and content types"
          >
            {WEB_ENVIRONMENTS.map((item) => (
              <div className="wtp-modern-item" key={item.title}>
                <span className="wtp-modern-icon">
                  <LineIcon name={item.icon} size={23} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className="wtp-modern-guidance">
            <div>
              <strong>
                One website may require more than one localization path.
              </strong>
              <p>
                For complex ecosystems, Stepes can combine proxy delivery with
                APIs, integrations, or file-based workflows according to content
                behavior, security, and publishing needs.
              </p>
            </div>
            <div className="wtp-modern-links">
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/translation-api/"
              >
                Translation API
                <LineIcon name="arrowRight" size={17} />
              </a>
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/integrations/"
              >
                Integrations
                <LineIcon name="arrowRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-seo"
        id="multilingual-seo"
        aria-labelledby="wtp-seo-title"
      >
        <div className="wtp-shell">
          <div className="wtp-seo-heading">
            <div>
              <div className="wtp-eyebrow wtp-eyebrow-dark">
                GLOBAL DISCOVERABILITY
              </div>
              <h2 id="wtp-seo-title">
                Build Search-Ready Multilingual Websites
              </h2>
            </div>
            <p>
              Publishing translated text is only the beginning. Search engines
              must be able to discover, render, understand, and correctly
              associate each localized page with its intended language and
              market.
            </p>
          </div>

          <div className="wtp-seo-layout">
            <div className="wtp-seo-narrative">
              <p>
                Stepes helps align localized content with an international SEO
                architecture that supports dedicated language experiences,
                localized metadata, crawlable links, and clear relationships
                between equivalent pages.
              </p>
              <p>
                Strong structure and substantive market-relevant content also
                make localized pages easier for search and AI-assisted discovery
                systems to understand.
              </p>
              <div className="wtp-seo-links">
                <a href="https://www.stepes.com/website-localization/">
                  Explore Website Localization
                  <LineIcon name="arrowRight" size={17} />
                </a>
                <a href="https://www.stepes.com/resources/localization-guides/">
                  Explore Localization Guides
                  <LineIcon name="arrowRight" size={17} />
                </a>
              </div>
            </div>

            <div
              className="wtp-seo-controls"
              aria-label="Multilingual SEO implementation considerations"
            >
              {SEO_CONTROLS.map((control) => (
                <div className="wtp-seo-control" key={control}>
                  <span aria-hidden="true" />
                  <strong>{control}</strong>
                </div>
              ))}
            </div>
          </div>

          <div
            className="wtp-seo-architecture"
            aria-label="Search-ready language URL architecture"
          >
            <div className="wtp-seo-architecture-label">
              A SEARCH-READY LANGUAGE ARCHITECTURE
            </div>
            <div className="wtp-url-languages">
              <span>example.com/en/</span>
              <span>example.com/de/</span>
              <span>example.com/ja/</span>
              <span>example.com/es/</span>
            </div>
            <div className="wtp-url-connections">
              <span>Language-specific URLs</span>
              <span>hreflang connections</span>
              <span>Same-language canonicals</span>
              <span>Localized metadata</span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-security"
        id="security-and-governance"
        aria-labelledby="wtp-security-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-security-heading">
            <div>
              <div className="wtp-eyebrow">ENTERPRISE CONTROLS</div>
              <h2 id="wtp-security-title">
                Protect Content Throughout the Localization Lifecycle
              </h2>
            </div>
            <p>
              Website content can pass through capture, translation, review,
              approval, storage, and delivery before it reaches international
              visitors. Stepes connects governance to each stage rather than
              treating security as a separate final check.
            </p>
          </div>

          <div className="wtp-security-layout">
            <div
              className="wtp-security-lifecycle"
              role="img"
              aria-label="Enterprise controls remain connected across website content capture, translation, review, and delivery."
            >
              <div className="wtp-security-lifecycle-label">
                CONTROLLED LOCALIZATION LIFECYCLE
              </div>
              <div className="wtp-security-stages">
                {[
                  { icon: "scan", label: "Capture" },
                  { icon: "sparkles", label: "Translate" },
                  { icon: "eye", label: "Review" },
                  { icon: "globe", label: "Deliver" },
                ].map((stage, index, stages) => (
                  <div className="wtp-flow-fragment" key={stage.label}>
                    <div className="wtp-security-stage">
                      <span>
                        <LineIcon name={stage.icon} size={22} />
                      </span>
                      <strong>{stage.label}</strong>
                    </div>
                    {index < stages.length - 1 && (
                      <div
                        className="wtp-security-connector"
                        aria-hidden="true"
                      >
                        <LineIcon name="arrowRight" size={18} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="wtp-security-core">
                <span className="wtp-security-core-icon">
                  <LineIcon name="shield" size={28} />
                </span>
                <div>
                  <strong>Governance Stays Connected</strong>
                  <p>
                    Scope, access, language assets, human review, and approvals
                    remain part of the operating workflow from source content to
                    localized delivery.
                  </p>
                </div>
              </div>
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/security-and-compliance/"
              >
                Explore Security and Compliance
                <LineIcon name="arrowRight" size={17} />
              </a>
            </div>

            <div
              className="wtp-security-controls"
              aria-label="Website localization security and governance controls"
            >
              {SECURITY_CONTROLS.map((item) => (
                <div className="wtp-security-control" key={item.title}>
                  <span className="wtp-security-control-icon">
                    <LineIcon name={item.icon} size={21} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-performance"
        id="performance-and-continuity"
        aria-labelledby="wtp-performance-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-performance-heading">
            <div>
              <div className="wtp-eyebrow">PERFORMANCE AND CONTINUITY</div>
              <h2 id="wtp-performance-title">
                Keep Localized Experiences Fast, Reliable, and Ready to Scale
              </h2>
            </div>
            <p>
              Because a translation proxy participates in the production web
              experience, Stepes plans delivery, caching, source-site
              coordination, release management, monitoring, and future website
              changes as part of the localization architecture.
            </p>
          </div>

          <div className="wtp-performance-layout">
            <div
              className="wtp-delivery-model"
              role="img"
              aria-label="Localized delivery architecture connecting the source website, Stepes localization delivery layer, and global visitors."
            >
              <div className="wtp-delivery-label">
                LOCALIZED DELIVERY ARCHITECTURE
              </div>
              <div className="wtp-delivery-flow">
                <div className="wtp-delivery-node">
                  <span>
                    <LineIcon name="browser" size={23} />
                  </span>
                  <div>
                    <strong>Source Website</strong>
                    <small>Origin content and customer experience</small>
                  </div>
                </div>
                <div className="wtp-delivery-arrow" aria-hidden="true">
                  <LineIcon name="arrowRight" size={20} />
                </div>
                <div className="wtp-delivery-node wtp-delivery-node-featured">
                  <span>
                    <LineIcon name="cloud" size={23} />
                  </span>
                  <div>
                    <strong>Stepes Delivery Layer</strong>
                    <small>
                      Caching, releases, monitoring, and localized content
                    </small>
                  </div>
                </div>
                <div className="wtp-delivery-arrow" aria-hidden="true">
                  <LineIcon name="arrowRight" size={20} />
                </div>
                <div className="wtp-delivery-node">
                  <span>
                    <LineIcon name="globe" size={23} />
                  </span>
                  <div>
                    <strong>Global Visitors</strong>
                    <small>Localized experiences across target markets</small>
                  </div>
                </div>
              </div>
              <div className="wtp-delivery-signals">
                <span>
                  <LineIcon name="gauge" size={17} /> Fast content delivery
                </span>
                <span>
                  <LineIcon name="refresh" size={17} /> Release coordination
                </span>
                <span>
                  <LineIcon name="eye" size={17} /> Operational monitoring
                </span>
              </div>
            </div>

            <div
              className="wtp-performance-priorities"
              aria-label="Website translation proxy operational priorities"
            >
              {PERFORMANCE_PRIORITIES.map((item) => (
                <div className="wtp-performance-priority" key={item.title}>
                  <span className="wtp-performance-icon">
                    <LineIcon name={item.icon} size={21} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-architecture-options"
        id="localization-architecture"
        aria-labelledby="wtp-architecture-options-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-options-heading">
            <div>
              <div className="wtp-eyebrow">SOLUTION ARCHITECTURE</div>
              <h2 id="wtp-architecture-options-title">
                Website Translation Proxy, API, Connector, or Traditional
                Workflow?
              </h2>
            </div>
            <p>
              No single architecture is ideal for every website. Stepes
              evaluates your content model, web stack, update frequency,
              security requirements, publishing governance, SEO strategy, and
              development resources before recommending an approach.
            </p>
          </div>

          <div
            className="wtp-options-table"
            role="table"
            aria-label="Website localization architecture comparison"
          >
            <div className="wtp-options-header" role="row">
              <span role="columnheader">Approach</span>
              <span role="columnheader">Best Suited For</span>
              <span role="columnheader">Content Updates</span>
              <span role="columnheader">Technical Involvement</span>
            </div>
            {ARCHITECTURE_OPTIONS.map((option) => (
              <div
                className={`wtp-options-row${option.featured ? " wtp-options-row-featured" : ""}`}
                role="row"
                key={option.approach}
              >
                <div className="wtp-options-approach" role="rowheader">
                  {option.featured && <span>FEATURED APPROACH</span>}
                  <strong>{option.approach}</strong>
                </div>
                <div className="wtp-options-cell" role="cell">
                  <span className="wtp-options-mobile-label">
                    Best Suited For
                  </span>
                  <p>{option.bestFor}</p>
                </div>
                <div className="wtp-options-cell" role="cell">
                  <span className="wtp-options-mobile-label">
                    Content Updates
                  </span>
                  <p>{option.updates}</p>
                </div>
                <div className="wtp-options-cell" role="cell">
                  <span className="wtp-options-mobile-label">
                    Technical Involvement
                  </span>
                  <p>{option.involvement}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wtp-options-guidance">
            <div>
              <strong>The right model may combine several approaches.</strong>
              <p>
                Complex websites can use proxy delivery for public experiences,
                APIs for custom applications, connectors for structured CMS
                content, and file-based workflows for stable assets.
              </p>
            </div>
            <div className="wtp-options-links">
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/translation-api/"
              >
                Translation API
                <LineIcon name="arrowRight" size={17} />
              </a>
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/integrations/"
              >
                Integrations
                <LineIcon name="arrowRight" size={17} />
              </a>
              <a
                className="wtp-editorial-link"
                href="https://www.stepes.com/website-translation-services/"
              >
                Website Translation Services
                <LineIcon name="arrowRight" size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wtp-implementation"
        id="enterprise-implementation"
        aria-labelledby="wtp-implementation-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-implementation-heading">
            <div>
              <div className="wtp-eyebrow">ENTERPRISE ONBOARDING</div>
              <h2 id="wtp-implementation-title">
                Launch Through a Controlled Enterprise Deployment
              </h2>
            </div>
            <p>
              Stepes uses a structured implementation process to reduce risk,
              validate the localized experience, and align website translation
              with your existing web, localization, security, and publishing
              operations.
            </p>
          </div>

          <div
            className="wtp-implementation-grid"
            aria-label="Eight-stage website translation proxy implementation process"
          >
            {IMPLEMENTATION_STAGES.map((stage, index) => (
              <div className="wtp-implementation-stage" key={stage.title}>
                <span className="wtp-implementation-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="wtp-implementation-start">
            <span className="wtp-implementation-start-icon">
              <LineIcon name="clipboard" size={24} />
            </span>
            <div>
              <strong>
                Start with a representative language or site section.
              </strong>
              <p>
                Validate architecture, content capture, translation quality,
                search accessibility, responsive behavior, and publishing
                controls before expanding to additional markets.
              </p>
            </div>
            <a
              className="wtp-button wtp-button-primary"
              href="https://www.stepes.com/contact-us/"
            >
              Plan Your Website Localization Deployment
              <LineIcon name="arrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wtp-enterprise-programs"
        id="enterprise-web-programs"
        aria-labelledby="wtp-enterprise-programs-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-enterprise-programs-heading">
            <div>
              <h2 id="wtp-enterprise-programs-title">
                Support Global Websites Across Teams and Content Types
              </h2>
            </div>
            <p>
              Build one scalable localization foundation for brand, product,
              ecommerce, technical, campaign, and multi-site web programs—then
              expand it as languages, markets, and content requirements grow.
            </p>
          </div>

          <div className="wtp-enterprise-programs-intro">
            <div>
              <span className="wtp-enterprise-programs-icon">
                <LineIcon name="globe" size={25} />
              </span>
              <div>
                <strong>
                  Start with the business experience, not a rigid translation
                  model.
                </strong>
                <p>
                  Stepes can configure different workflows, language assets,
                  review requirements, and publishing controls around the role
                  each website and content type plays in your global program.
                </p>
              </div>
            </div>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/website-localization/"
            >
              Explore Website Localization
              <LineIcon name="arrowRight" size={17} />
            </a>
          </div>

          <div
            className="wtp-enterprise-use-cases"
            aria-label="Enterprise website localization use cases"
          >
            {ENTERPRISE_USE_CASES.map((item) => (
              <div className="wtp-enterprise-use-case" key={item.title}>
                <span className="wtp-enterprise-use-case-icon">
                  <LineIcon name={item.icon} size={22} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wtp-operations"
        id="global-website-operations"
        aria-labelledby="wtp-operations-title"
      >
        <div className="wtp-shell">
          <div className="wtp-operations-heading">
            <div>
              <div className="wtp-eyebrow wtp-eyebrow-dark">
                GLOBAL CONTENT VISIBILITY
              </div>
              <h2 id="wtp-operations-title">
                See What Is New, Translated, Reviewed, and Published
              </h2>
            </div>
            <p>
              Website localization should not operate as an invisible process.
              Stepes connects proxy delivery with enterprise translation
              management so teams can see what is changing, where content sits
              in the workflow, and what requires attention.
            </p>
          </div>

          <div className="wtp-operations-layout">
            <div
              className="wtp-operations-console"
              role="img"
              aria-label="Enterprise website localization operations view showing content moving through detection, translation, review, and publication."
            >
              <div className="wtp-console-header">
                <div>
                  <span className="wtp-console-status" aria-hidden="true" />
                  <strong>Global Website Operations</strong>
                </div>
                <span>PROGRAM VIEW</span>
              </div>

              <div className="wtp-console-flow" aria-hidden="true">
                <span>Detected</span>
                <i />
                <span>Translated</span>
                <i />
                <span>Reviewed</span>
                <i />
                <span>Published</span>
              </div>

              <div className="wtp-console-rows">
                <div className="wtp-console-row">
                  <div>
                    <strong>Product pages</strong>
                    <span>German website</span>
                  </div>
                  <span className="wtp-console-pill">Human review</span>
                </div>
                <div className="wtp-console-row">
                  <div>
                    <strong>Support center</strong>
                    <span>Japanese website</span>
                  </div>
                  <span className="wtp-console-pill">AI + QA</span>
                </div>
                <div className="wtp-console-row">
                  <div>
                    <strong>Campaign pages</strong>
                    <span>Spanish website</span>
                  </div>
                  <span className="wtp-console-pill wtp-console-pill-ready">
                    Ready to publish
                  </span>
                </div>
              </div>

              <div className="wtp-console-footer">
                <span>
                  <LineIcon name="refresh" size={16} /> Source changes
                </span>
                <span>
                  <LineIcon name="checkCircle" size={16} /> Quality controls
                </span>
                <span>
                  <LineIcon name="audit" size={16} /> Activity history
                </span>
              </div>
            </div>

            <div
              className="wtp-operations-capabilities"
              aria-label="Website localization operations visibility"
            >
              {OPERATIONS_VISIBILITY.map((item) => (
                <div className="wtp-operations-capability" key={item.title}>
                  <span>
                    <LineIcon name={item.icon} size={20} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="wtp-operations-link-row">
            <span>
              Connect website localization to broader program oversight,
              language assets, reviewers, and quality workflows.
            </span>
            <a href="https://www.stepes.com/enterprise-translation-management/">
              Enterprise Translation Management
              <LineIcon name="arrowRight" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wtp-connected-platform"
        id="connected-website-translation-platform"
        aria-labelledby="wtp-connected-platform-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-connected-platform-heading">
            <div>
              <div className="wtp-eyebrow">ONE CONNECTED PLATFORM</div>
              <h2 id="wtp-connected-platform-title">
                Connect Proxy Delivery to the Complete Stepes Translation Platform
              </h2>
            </div>
            <p>
              Website translation is stronger when content capture and delivery
              stay connected to governed AI, professional linguists, enterprise
              language assets, website QA, managed operations, and oversight.
            </p>
          </div>

          <div className="wtp-connected-platform-panel">
            <div className="wtp-connected-platform-core">
              <span>
                <LineIcon name="layers" size={27} />
              </span>
              <div>
                <strong>Stepes Website Translation Proxy</strong>
                <p>
                  A continuous web localization layer connected to the Stepes
                  enterprise translation platform.
                </p>
              </div>
              <div className="wtp-connected-platform-path" aria-hidden="true">
                <span>Capture</span>
                <i />
                <span>Translate</span>
                <i />
                <span>Validate</span>
                <i />
                <span>Deliver</span>
              </div>
            </div>

            <div
              className="wtp-connected-platform-grid"
              aria-label="Four connected website translation platform pillars"
            >
              {CONNECTED_PLATFORM_CAPABILITIES.map((item) => (
                <div
                  className="wtp-connected-platform-capability"
                  key={item.title}
                >
                  <span>
                    <LineIcon name={item.icon} size={21} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="wtp-connected-platform-links"
            aria-label="Explore connected Stepes platform capabilities"
          >
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/ai-translation-platform/"
            >
              AI Translation Platform
              <LineIcon name="arrowRight" size={17} />
            </a>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/translation-memory/"
            >
              Translation Memory
              <LineIcon name="arrowRight" size={17} />
            </a>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/terminology-management/"
            >
              Terminology Management
              <LineIcon name="arrowRight" size={17} />
            </a>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/translation-quality-assurance/"
            >
              Translation Quality Assurance
              <LineIcon name="arrowRight" size={17} />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wtp-faq"
        id="website-translation-proxy-faq"
        aria-labelledby="wtp-faq-title"
      >
        <div className="wtp-shell">
          <div className="wtp-faq-heading">
            <h2 id="wtp-faq-title">Website Translation Proxy FAQs</h2>
            <p>
              Explore the technology, workflows, quality controls, SEO
              considerations, and implementation decisions behind enterprise
              proxy-based website localization.
            </p>
          </div>

          <div className="wtp-faq-panel">
            {FAQ_ITEMS.map((item, index) => (
              <details
                className="wtp-faq-item"
                key={item.question}
                open={index === 0}
              >
                <summary>
                  <span>{item.question}</span>
                  <span className="wtp-faq-control" aria-hidden="true" />
                </summary>
                <div className="wtp-faq-answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="wtp-faq-followup">
            <span>
              Evaluating whether a proxy, API, connector, or hybrid architecture
              fits your website?
            </span>
            <a
              className="wtp-editorial-link"
              href="https://www.stepes.com/contact-us/"
            >
              Talk to a Website Localization Expert
              <LineIcon name="arrowRight" size={17} />
            </a>
          </div>
        </div>
      </section>


      <section
        className="wtp-resources"
        id="website-localization-resources"
        aria-labelledby="wtp-resources-title"
      >
        <div className="wtp-shell">
          <div className="wtp-section-heading wtp-resources-heading">
            <div>
              <div className="wtp-eyebrow">RELATED PLATFORM AND GUIDANCE</div>
              <h2 id="wtp-resources-title">
                Explore Website Localization Resources
              </h2>
            </div>
            <p>
              Build a connected global web program with the platform,
              professional services, language assets, quality controls, and
              practical guidance that support continuous website localization.
            </p>
          </div>

          <div
            className="wtp-resource-grid"
            aria-label="Related website localization resources"
          >
            {RELATED_RESOURCES.map((item) => (
              <article className="wtp-resource-item" key={item.title}>
                <span className="wtp-resource-category">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a className="wtp-resource-link" href={item.href}>
                  {item.title}
                  <LineIcon name="arrowRight" size={17} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wtp-final-cta"
        aria-labelledby="wtp-final-cta-title"
      >
        <div className="wtp-shell">
          <div className="wtp-final-cta-panel">
            <div className="wtp-final-cta-copy">
              <div className="wtp-eyebrow">GLOBAL WEBSITE LOCALIZATION</div>
              <h2 id="wtp-final-cta-title">
                Keep Every Market Experience Current
              </h2>
              <p>
                Connect your website to continuous translation workflows that
                combine automation, enterprise language controls, professional
                human expertise, and ongoing global content delivery. Stepes can
                help evaluate your architecture, quality requirements, and
                rollout strategy.
              </p>
            </div>
            <div
              className="wtp-final-cta-actions"
              aria-label="Website localization next steps"
            >
              <a
                className="wtp-button wtp-button-primary"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to a Website Localization Expert
                <LineIcon name="arrowRight" size={17} />
              </a>
              <a
                className="wtp-button wtp-button-secondary"
                href="https://www.stepes.com/website-translation-services/"
              >
                Explore Website Translation Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .wtp-page,
        .wtp-page * {
          box-sizing: border-box;
        }

        .wtp-flow-fragment {
          display: contents;
        }

        .wtp-page {
          --wtp-accent: #c11d63;
          --wtp-accent-dark: #a71954;
          --wtp-accent-deep: #7a1542;
          --wtp-blush: #fdf2f7;
          --wtp-ink: #17171b;
          --wtp-copy: #4c4d57;
          --wtp-muted: #6f707a;
          --wtp-border: #e5e5e9;
          --wtp-soft: #f7f7f9;
          --wtp-white: #ffffff;
          width: 100%;
          overflow-x: hidden;
          background: var(--wtp-white);
          color: var(--wtp-ink);
          font-family: Inter, "Helvetica Neue", Arial, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .wtp-page a {
          color: inherit;
          text-decoration: none;
        }

        .wtp-shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 40px;
          padding-right: 40px;
        }

        .wtp-visually-hidden {
          position: absolute !important;
          width: 1px !important;
          height: 1px !important;
          padding: 0 !important;
          margin: -1px !important;
          overflow: hidden !important;
          clip: rect(0, 0, 0, 0) !important;
          white-space: nowrap !important;
          border: 0 !important;
        }

        .wtp-eyebrow {
          margin: 0 0 16px;
          color: var(--wtp-accent);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .wtp-hero {
          position: relative;
          overflow: hidden;
          padding: 104px 0 88px;
          background:
            radial-gradient(circle at 50% 90%, rgba(193, 29, 99, 0.04), transparent 32%),
            var(--wtp-white);
        }

        .wtp-hero::before,
        .wtp-hero::after {
          position: absolute;
          content: "";
          pointer-events: none;
          border: 1px solid rgba(193, 29, 99, 0.06);
          border-radius: 999px;
        }

        .wtp-hero::before {
          width: 420px;
          height: 420px;
          top: -280px;
          left: -190px;
        }

        .wtp-hero::after {
          width: 310px;
          height: 310px;
          right: -210px;
          top: 180px;
        }

        .wtp-hero-copy {
          position: relative;
          z-index: 1;
          max-width: 930px;
          margin: 0 auto;
          text-align: center;
        }

        .wtp-hero h1 {
          max-width: 900px;
          margin: 0 auto;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          text-wrap: balance;
        }

        .wtp-hero-copy > p {
          max-width: 800px;
          margin: 26px auto 0;
          color: var(--wtp-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .wtp-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
        }

        .wtp-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease,
            border-color 180ms ease, color 180ms ease;
        }

        .wtp-button-primary,
        .wtp-button-primary:link,
        .wtp-button-primary:visited,
        .wtp-button-primary:hover,
        .wtp-button-primary:active,
        .wtp-button-primary:focus-visible {
          color: #ffffff !important;
        }

        .wtp-button-primary {
          background: var(--wtp-accent);
          box-shadow: 0 12px 26px rgba(193, 29, 99, 0.18);
        }

        .wtp-button-primary:hover {
          background: var(--wtp-accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 15px 30px rgba(193, 29, 99, 0.22);
        }

        .wtp-button-secondary {
          color: var(--wtp-ink);
          background: var(--wtp-white);
          border-color: #d7d7dc;
        }

        .wtp-button-secondary:hover {
          color: var(--wtp-accent-dark);
          border-color: #c8a5b5;
          transform: translateY(-1px);
        }

        .wtp-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        .wtp-architecture {
          position: relative;
          z-index: 1;
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) 56px minmax(0, 1.2fr) 56px minmax(0, 0.9fr);
          align-items: center;
          width: 100%;
          margin: 64px auto 0;
          padding: 28px;
          border: 1px solid var(--wtp-border);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 24px 60px rgba(28, 25, 31, 0.08);
        }

        .wtp-architecture-node {
          min-width: 0;
          min-height: 174px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          padding: 24px;
          border: 1px solid var(--wtp-border);
          border-radius: 22px;
          background: var(--wtp-white);
        }

        .wtp-architecture-node > div:first-of-type:not(.wtp-node-icon) {
          min-width: 0;
        }

        .wtp-node-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border-radius: 14px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-node-label {
          display: block;
          margin-bottom: 7px;
          color: var(--wtp-muted);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        .wtp-architecture-node strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.3;
        }

        .wtp-architecture-node small {
          display: block;
          margin-top: 7px;
          color: var(--wtp-muted);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.5;
        }

        .wtp-proxy-node {
          border-color: rgba(193, 29, 99, 0.22);
          background: linear-gradient(180deg, #ffffff 0%, #fffafd 100%);
        }

        .wtp-proxy-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-top: 2px;
        }

        .wtp-proxy-controls span,
        .wtp-language-row span {
          display: inline-flex;
          min-height: 28px;
          align-items: center;
          justify-content: center;
          padding: 5px 9px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
        }

        .wtp-proxy-controls span {
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-language-row {
          display: flex;
          gap: 6px;
          margin-top: 2px;
        }

        .wtp-language-row span {
          width: 32px;
          padding: 5px 0;
          color: #44454d;
          background: var(--wtp-soft);
          border: 1px solid var(--wtp-border);
        }

        .wtp-architecture-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #9a9ba3;
        }

        .wtp-capabilities {
          background: var(--wtp-white);
        }

        .wtp-capability-band {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 24px;
          padding: 28px 0;
          border-top: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-capability {
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: center;
          gap: 11px;
          color: #34343a;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-align: left;
        }

        .wtp-capability-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          color: var(--wtp-accent-deep);
        }

        .wtp-challenge {
          padding: 96px 0;
          background: var(--wtp-soft);
        }

        .wtp-challenge-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 72px;
          align-items: end;
        }

        .wtp-challenge h2 {
          max-width: 590px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .wtp-challenge-intro {
          max-width: 650px;
          margin: 0;
          color: var(--wtp-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .wtp-challenge-body {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          gap: 72px;
          align-items: start;
          margin-top: 58px;
          padding-top: 48px;
          border-top: 1px solid #ddddE2;
        }

        .wtp-challenge-narrative {
          max-width: 590px;
        }

        .wtp-challenge-narrative p {
          margin: 0;
          color: var(--wtp-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .wtp-challenge-narrative p + p {
          margin-top: 22px;
        }

        .wtp-challenge-narrative .wtp-key-message {
          padding-top: 22px;
          border-top: 2px solid rgba(193, 29, 99, 0.55);
          color: var(--wtp-ink);
          font-size: 18px;
          line-height: 1.62;
        }

        .wtp-challenge-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 36px;
        }

        .wtp-challenge-item {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 11px;
          min-width: 0;
          align-items: start;
          padding: 18px 0;
          border-bottom: 1px solid #ddddE2;
          color: #3d3e46;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.55;
        }

        .wtp-challenge-marker {
          width: 14px;
          height: 2px;
          margin-top: 0.72em;
          border-radius: 999px;
          background: var(--wtp-accent);
        }


        .wtp-section-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 72px;
          align-items: end;
        }

        .wtp-section-heading h2,
        .wtp-workflow-heading h2,
        .wtp-quality h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .wtp-section-heading > p,
        .wtp-workflow-heading > p {
          max-width: 680px;
          margin: 0;
          color: var(--wtp-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .wtp-editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--wtp-accent);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          transition: color 160ms ease, gap 160ms ease;
        }

        .wtp-editorial-link:visited {
          color: var(--wtp-accent);
        }

        .wtp-editorial-link:hover {
          gap: 11px;
          color: var(--wtp-accent-dark);
        }

        .wtp-editorial-link:focus-visible,
        .wtp-workflow-links a:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .wtp-definition {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-definition-heading h2 {
          max-width: 590px;
        }

        .wtp-definition-heading > div,
        .wtp-continuous-heading > div {
          align-self: end;
        }

        .wtp-definition-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 84px;
          align-items: start;
          margin-top: 60px;
          padding-top: 50px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-definition-copy {
          max-width: 560px;
        }

        .wtp-definition-copy p {
          margin: 0;
          color: var(--wtp-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .wtp-definition-copy .wtp-definition-lead {
          color: var(--wtp-ink);
          font-size: 20px;
          line-height: 1.6;
        }

        .wtp-definition-copy p + p {
          margin-top: 24px;
        }

        .wtp-definition-copy .wtp-editorial-link {
          margin-top: 25px;
        }

        .wtp-proxy-functions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 38px;
        }

        .wtp-proxy-function {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 16px;
          align-items: start;
          padding: 22px 0;
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-proxy-function-icon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-proxy-function h3,
        .wtp-continuous-item h3,
        .wtp-quality-pathway h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-proxy-function p,
        .wtp-continuous-item p,
        .wtp-quality-pathway p {
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .wtp-workflow {
          padding: 96px 0;
          background: #17151a;
          color: var(--wtp-white);
        }

        .wtp-eyebrow-dark {
          color: #f0a4c5;
        }

        .wtp-workflow-heading {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 72px;
          align-items: end;
        }

        .wtp-workflow-heading h2 {
          max-width: 690px;
        }

        .wtp-workflow-heading > p {
          color: #c8c5cb;
        }

        .wtp-workflow-panel {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .wtp-workflow-stage {
          min-width: 0;
          padding: 30px 24px 34px;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-workflow-stage:last-child {
          border-right: 0;
        }

        .wtp-workflow-number {
          display: block;
          margin-bottom: 28px;
          color: #f0a4c5;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        .wtp-workflow-stage h3 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }

        .wtp-workflow-stage p {
          margin: 11px 0 0;
          color: #bdbac1;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
        }

        .wtp-workflow-links {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px 24px;
          margin-top: 28px;
          color: #a8a5ad;
          font-size: 14px;
          line-height: 1.5;
        }

        .wtp-workflow-links span {
          font-weight: 400;
        }

        .wtp-workflow-links a {
          position: relative;
          min-height: 44px;
          display: inline-flex;
          align-items: center;
          color: #ffffff;
          font-weight: 600;
        }

        .wtp-workflow-links a::after {
          position: absolute;
          right: 0;
          bottom: 8px;
          left: 0;
          height: 1px;
          content: "";
          background: rgba(240, 164, 197, 0.6);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 160ms ease;
        }

        .wtp-workflow-links a:hover::after {
          transform: scaleX(1);
        }

        .wtp-continuous {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-continuous-heading h2 {
          max-width: 620px;
        }

        .wtp-update-flow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 32px minmax(0, 1fr) 32px minmax(0, 1fr) 32px minmax(0, 1fr) 32px minmax(0, 1fr);
          align-items: center;
          margin-top: 58px;
          padding: 24px 26px;
          border: 1px solid var(--wtp-border);
          border-radius: 24px;
          background: #fbfbfc;
        }

        .wtp-update-step {
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: center;
          gap: 10px;
          color: #34343a;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
        }

        .wtp-update-dot {
          width: 8px;
          height: 8px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--wtp-accent);
          box-shadow: 0 0 0 5px rgba(193, 29, 99, 0.09);
        }

        .wtp-update-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a3a3aa;
        }

        .wtp-continuous-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 42px;
          margin-top: 42px;
        }

        .wtp-continuous-item {
          min-width: 0;
          padding: 26px 0 28px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-quality {
          padding: 96px 0;
          background: var(--wtp-blush);
        }

        .wtp-quality-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 86px;
          align-items: start;
        }

        .wtp-quality-intro {
          max-width: 560px;
        }

        .wtp-quality-intro p {
          margin: 24px 0 0;
          color: var(--wtp-copy);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .wtp-quality-intro p + p {
          margin-top: 18px;
        }

        .wtp-quality-actions {
          display: grid;
          gap: 4px;
          justify-items: start;
          margin-top: 24px;
        }

        .wtp-quality-pathways {
          position: relative;
          padding: 30px 34px;
          border: 1px solid rgba(193, 29, 99, 0.16);
          border-radius: 28px;
          background: var(--wtp-white);
          box-shadow: 0 20px 50px rgba(56, 30, 43, 0.07);
        }

        .wtp-quality-pathways-label {
          margin-bottom: 12px;
          color: var(--wtp-muted);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .wtp-quality-pathway {
          position: relative;
          display: grid;
          grid-template-columns: 16px minmax(0, 1fr);
          gap: 14px;
          padding: 19px 0;
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-quality-pathway:last-child {
          border-bottom: 0;
        }

        .wtp-quality-node {
          width: 12px;
          height: 2px;
          margin-top: 0.68em;
          border-radius: 999px;
          background: #aaa8af;
        }

        .wtp-governance-strip {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 46px;
          align-items: center;
          margin-top: 54px;
          padding: 26px 30px;
          border-top: 1px solid rgba(193, 29, 99, 0.24);
          border-bottom: 1px solid rgba(193, 29, 99, 0.24);
        }

        .wtp-governance-title {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--wtp-accent-deep);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.5;
        }

        .wtp-governance-title svg {
          flex: 0 0 auto;
        }

        .wtp-governance-controls {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          align-items: stretch;
        }

        .wtp-governance-controls span {
          display: flex;
          min-width: 0;
          align-items: center;
          padding: 6px 14px;
          border-left: 1px solid rgba(92, 66, 78, 0.16);
          color: #5a4b52;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.45;
        }

        .wtp-governance-controls span:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .wtp-governance-controls span:last-child {
          padding-right: 0;
        }


        .wtp-context {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-context-heading h2 {
          max-width: 650px;
        }

        .wtp-context-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(0, 0.88fr);
          gap: 72px;
          align-items: start;
          margin-top: 58px;
        }

        .wtp-context-preview {
          overflow: hidden;
          border: 1px solid var(--wtp-border);
          border-radius: 28px;
          background: #fbfbfc;
          box-shadow: 0 22px 54px rgba(28, 25, 31, 0.08);
        }

        .wtp-preview-chrome {
          display: grid;
          grid-template-columns: 74px minmax(0, 1fr) 42px;
          align-items: center;
          min-height: 50px;
          padding: 0 18px;
          border-bottom: 1px solid var(--wtp-border);
          color: #53545c;
          background: var(--wtp-white);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
          text-align: center;
        }

        .wtp-preview-dots {
          display: flex;
          gap: 6px;
        }

        .wtp-preview-dots span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d7d7dc;
        }

        .wtp-preview-locale {
          display: inline-flex;
          min-height: 28px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
          font-size: 11px;
          font-weight: 600;
        }

        .wtp-preview-pages {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          padding: 22px;
        }

        .wtp-preview-page {
          min-width: 0;
          min-height: 300px;
          padding: 24px;
          border: 1px solid var(--wtp-border);
          border-radius: 20px;
          background: var(--wtp-white);
        }

        .wtp-preview-page-localized {
          border-color: rgba(193, 29, 99, 0.2);
          background: linear-gradient(180deg, #ffffff 0%, #fffafd 100%);
        }

        .wtp-preview-label {
          display: block;
          color: var(--wtp-muted);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.11em;
        }

        .wtp-preview-nav {
          display: flex;
          gap: 8px;
          margin-top: 24px;
        }

        .wtp-preview-nav span {
          display: block;
          width: 34px;
          height: 4px;
          border-radius: 999px;
          background: #ddddE2;
        }

        .wtp-preview-page strong {
          display: block;
          max-width: 260px;
          margin-top: 44px;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.25;
          letter-spacing: -0.02em;
        }

        .wtp-preview-page p {
          max-width: 300px;
          margin: 14px 0 0;
          color: var(--wtp-copy);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
        }

        .wtp-preview-button {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          margin-top: 24px;
          padding: 8px 13px;
          border-radius: 999px;
          color: #ffffff;
          background: var(--wtp-accent);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
        }

        .wtp-preview-status {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--wtp-border);
          background: var(--wtp-white);
        }

        .wtp-preview-status span {
          display: flex;
          min-width: 0;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          border-right: 1px solid var(--wtp-border);
          color: #55565e;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
        }

        .wtp-preview-status span:last-child {
          border-right: 0;
        }

        .wtp-preview-status svg {
          flex: 0 0 auto;
          color: var(--wtp-accent-deep);
        }

        .wtp-context-dimensions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 30px;
        }

        .wtp-context-dimension {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          padding: 20px 0 22px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-context-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-top: 1px;
          color: var(--wtp-accent-deep);
        }

        .wtp-context-dimension h3,
        .wtp-brand-control h3,
        .wtp-modern-item h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-context-dimension p,
        .wtp-brand-control p,
        .wtp-modern-item p {
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .wtp-context-link {
          grid-column: 1 / -1;
          width: fit-content;
          margin-top: 10px;
        }

        .wtp-brand {
          padding: 96px 0;
          background: var(--wtp-soft);
        }

        .wtp-brand-heading h2 {
          max-width: 680px;
        }

        .wtp-brand-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 78px;
          align-items: start;
          margin-top: 58px;
        }

        .wtp-language-system {
          overflow: hidden;
          border: 1px solid var(--wtp-border);
          border-radius: 28px;
          background: var(--wtp-white);
          box-shadow: 0 20px 48px rgba(28, 25, 31, 0.06);
        }

        .wtp-language-system-label {
          padding: 20px 24px;
          border-bottom: 1px solid var(--wtp-border);
          color: var(--wtp-muted);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .wtp-language-asset {
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          padding: 24px;
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-language-asset > span {
          display: inline-flex;
          min-height: 36px;
          align-items: center;
          justify-content: center;
          padding: 7px 8px;
          border-radius: 10px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.15;
          letter-spacing: 0.04em;
        }

        .wtp-language-asset strong {
          display: block;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-language-asset p {
          margin: 7px 0 0;
          color: var(--wtp-copy);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
        }

        .wtp-language-outcome {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          padding: 24px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
        }

        .wtp-language-outcome svg {
          flex: 0 0 auto;
          margin-top: 1px;
        }

        .wtp-brand-controls {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 40px;
        }

        .wtp-brand-control {
          min-width: 0;
          padding: 24px 0 26px;
          border-top: 1px solid #dcdce1;
        }

        .wtp-brand-links {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 30px;
          margin-top: 28px;
        }

        .wtp-modern {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-modern-heading h2 {
          max-width: 700px;
        }

        .wtp-modern-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 34px;
          margin-top: 58px;
        }

        .wtp-modern-item {
          min-width: 0;
          padding: 26px 0 30px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-modern-icon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          border-radius: 13px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-modern-guidance {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 50px;
          align-items: center;
          margin-top: 30px;
          padding: 30px 0;
          border-top: 2px solid rgba(193, 29, 99, 0.45);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-modern-guidance strong {
          display: block;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-modern-guidance p {
          max-width: 760px;
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .wtp-modern-links {
          display: grid;
          justify-items: start;
          gap: 2px;
        }

        .wtp-seo {
          padding: 96px 0;
          background: #17151a;
          color: var(--wtp-white);
        }

        .wtp-seo-heading {
          display: grid;
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
          gap: 72px;
          align-items: end;
        }

        .wtp-seo-heading h2 {
          max-width: 680px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .wtp-seo-heading > p {
          max-width: 680px;
          margin: 0;
          color: #c8c5cb;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.7;
        }

        .wtp-seo-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 80px;
          align-items: start;
          margin-top: 58px;
          padding-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
        }

        .wtp-seo-narrative {
          max-width: 540px;
        }

        .wtp-seo-narrative p {
          margin: 0;
          color: #c8c5cb;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }

        .wtp-seo-narrative p + p {
          margin-top: 20px;
        }

        .wtp-seo-links {
          display: grid;
          justify-items: start;
          gap: 2px;
          margin-top: 26px;
        }

        .wtp-seo-links a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
          transition: gap 160ms ease, color 160ms ease;
        }

        .wtp-seo-links a:visited {
          color: #ffffff;
        }

        .wtp-seo-links a:hover {
          gap: 11px;
          color: #f0a4c5;
        }

        .wtp-seo-links a:focus-visible {
          outline: 3px solid rgba(240, 164, 197, 0.3);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .wtp-seo-controls {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 42px;
        }

        .wtp-seo-control {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          min-height: 62px;
          padding: 18px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-seo-control > span {
          width: 13px;
          height: 2px;
          margin-top: 0.72em;
          border-radius: 999px;
          background: #f0a4c5;
        }

        .wtp-seo-control strong {
          color: #f3f1f4;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.5;
        }

        .wtp-seo-architecture {
          margin-top: 50px;
          padding: 28px 30px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.035);
        }

        .wtp-seo-architecture-label {
          color: #f0a4c5;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .wtp-url-languages,
        .wtp-url-connections {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .wtp-url-languages {
          margin-top: 22px;
        }

        .wtp-url-languages span {
          min-width: 0;
          padding: 13px 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.14);
          color: #ffffff;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.45;
          overflow-wrap: anywhere;
        }

        .wtp-url-connections {
          margin-top: 12px;
        }

        .wtp-url-connections span {
          padding: 8px 18px;
          border-left: 1px solid rgba(255, 255, 255, 0.14);
          color: #aaa7af;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.5;
        }

        .wtp-url-languages span:first-child,
        .wtp-url-connections span:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .wtp-url-languages span:last-child,
        .wtp-url-connections span:last-child {
          padding-right: 0;
        }


        .wtp-security {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-security-heading h2 {
          max-width: 680px;
        }

        .wtp-security-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 76px;
          align-items: start;
          margin-top: 58px;
        }

        .wtp-security-lifecycle {
          padding: 30px;
          border: 1px solid var(--wtp-border);
          border-radius: 28px;
          background: #fbfbfc;
          box-shadow: 0 20px 48px rgba(28, 25, 31, 0.06);
        }

        .wtp-security-lifecycle-label,
        .wtp-delivery-label {
          color: var(--wtp-muted);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .wtp-security-stages {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr) 24px minmax(0, 1fr);
          align-items: center;
          margin-top: 26px;
        }

        .wtp-security-stage {
          min-width: 0;
          text-align: center;
        }

        .wtp-security-stage > span {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-security-stage strong {
          display: block;
          margin-top: 10px;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-security-connector {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaaab1;
        }

        .wtp-security-core {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr);
          gap: 17px;
          align-items: start;
          margin-top: 28px;
          padding: 24px;
          border-top: 2px solid rgba(193, 29, 99, 0.42);
          background: var(--wtp-white);
        }

        .wtp-security-core-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-security-core strong,
        .wtp-options-guidance strong,
        .wtp-implementation-start strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-security-core p,
        .wtp-options-guidance p,
        .wtp-implementation-start p {
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .wtp-security-lifecycle > .wtp-editorial-link {
          margin-top: 20px;
        }

        .wtp-security-controls {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 38px;
        }

        .wtp-security-control {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          padding: 22px 0 24px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-security-control-icon,
        .wtp-performance-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding-top: 1px;
          color: var(--wtp-accent-deep);
        }

        .wtp-security-control h3,
        .wtp-performance-priority h3,
        .wtp-implementation-stage h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-security-control p,
        .wtp-performance-priority p,
        .wtp-implementation-stage p {
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .wtp-performance {
          padding: 96px 0;
          background: var(--wtp-soft);
        }

        .wtp-performance-heading h2 {
          max-width: 720px;
        }

        .wtp-performance-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 72px;
          align-items: start;
          margin-top: 58px;
        }

        .wtp-delivery-model {
          padding: 30px;
          border: 1px solid var(--wtp-border);
          border-radius: 28px;
          background: var(--wtp-white);
          box-shadow: 0 20px 48px rgba(28, 25, 31, 0.06);
        }

        .wtp-delivery-flow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 28px minmax(0, 1fr) 28px minmax(0, 1fr);
          align-items: center;
          margin-top: 28px;
        }

        .wtp-delivery-node {
          min-width: 0;
          min-height: 184px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 16px;
          padding: 20px;
          border: 1px solid var(--wtp-border);
          border-radius: 20px;
          background: #fbfbfc;
        }

        .wtp-delivery-node-featured {
          border-color: rgba(193, 29, 99, 0.2);
          background: linear-gradient(180deg, #ffffff 0%, #fffafd 100%);
        }

        .wtp-delivery-node > span {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-delivery-node strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-delivery-node small {
          display: block;
          margin-top: 7px;
          color: var(--wtp-muted);
          font-size: 13px;
          font-weight: 400;
          line-height: 1.5;
        }

        .wtp-delivery-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaaab1;
        }

        .wtp-delivery-signals {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 22px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-delivery-signals span {
          display: flex;
          min-width: 0;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 18px 12px 0;
          color: #55565e;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.45;
          text-align: center;
        }

        .wtp-delivery-signals svg {
          flex: 0 0 auto;
          color: var(--wtp-accent-deep);
        }

        .wtp-performance-priorities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 38px;
        }

        .wtp-performance-priority {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          padding: 22px 0 24px;
          border-top: 1px solid #dcdce1;
        }

        .wtp-architecture-options {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-options-heading h2 {
          max-width: 720px;
        }

        .wtp-options-table {
          margin-top: 58px;
          border-top: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-options-header,
        .wtp-options-row {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.35fr) minmax(0, 1fr) minmax(0, 1fr);
        }

        .wtp-options-header {
          color: var(--wtp-muted);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .wtp-options-header span {
          padding: 18px 20px;
          border-right: 1px solid var(--wtp-border);
        }

        .wtp-options-header span:first-child {
          padding-left: 0;
        }

        .wtp-options-header span:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .wtp-options-row {
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-options-row-featured {
          background: var(--wtp-blush);
        }

        .wtp-options-approach,
        .wtp-options-cell {
          min-width: 0;
          padding: 24px 20px;
          border-right: 1px solid var(--wtp-border);
        }

        .wtp-options-approach {
          padding-left: 0;
        }

        .wtp-options-row-featured .wtp-options-approach {
          padding-left: 20px;
        }

        .wtp-options-cell:last-child {
          padding-right: 0;
          border-right: 0;
        }

        .wtp-options-approach > span {
          display: block;
          margin-bottom: 7px;
          color: var(--wtp-accent-deep);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        .wtp-options-approach strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.45;
        }

        .wtp-options-cell p {
          margin: 0;
          color: var(--wtp-copy);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.6;
        }

        .wtp-options-mobile-label {
          display: none;
        }

        .wtp-options-guidance {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: center;
          margin-top: 34px;
          padding: 30px 0;
          border-top: 2px solid rgba(193, 29, 99, 0.42);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-options-links {
          display: grid;
          justify-items: start;
          gap: 2px;
        }

        .wtp-implementation {
          padding: 96px 0;
          background: var(--wtp-blush);
        }

        .wtp-implementation-heading h2 {
          max-width: 680px;
        }

        .wtp-implementation-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid rgba(106, 72, 88, 0.22);
          border-bottom: 1px solid rgba(106, 72, 88, 0.22);
        }

        .wtp-implementation-stage {
          min-width: 0;
          min-height: 230px;
          padding: 28px 24px 32px;
          border-right: 1px solid rgba(106, 72, 88, 0.18);
          border-bottom: 1px solid rgba(106, 72, 88, 0.18);
        }

        .wtp-implementation-stage:nth-child(4n) {
          border-right: 0;
        }

        .wtp-implementation-stage:nth-child(n + 5) {
          border-bottom: 0;
        }

        .wtp-implementation-number {
          display: block;
          margin-bottom: 28px;
          color: var(--wtp-accent-deep);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.1em;
        }

        .wtp-implementation-start {
          display: grid;
          grid-template-columns: 52px minmax(0, 1fr) auto;
          gap: 18px 24px;
          align-items: center;
          margin-top: 38px;
          padding: 28px 30px;
          border: 1px solid rgba(193, 29, 99, 0.18);
          border-radius: 24px;
          background: var(--wtp-white);
          box-shadow: 0 18px 42px rgba(65, 35, 50, 0.06);
        }

        .wtp-implementation-start-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-implementation-start .wtp-button {
          max-width: 290px;
          text-align: center;
        }


        .wtp-enterprise-programs {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-enterprise-programs-heading h2,
        .wtp-connected-platform-heading h2 {
          max-width: 670px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
        }

        .wtp-enterprise-programs-intro {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 40px;
          align-items: center;
          margin-top: 54px;
          padding: 28px 0;
          border-top: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-enterprise-programs-intro > div {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 18px;
          align-items: start;
          max-width: 820px;
        }

        .wtp-enterprise-programs-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 54px;
          height: 54px;
          border-radius: 17px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-enterprise-programs-intro strong {
          display: block;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-enterprise-programs-intro p {
          max-width: 720px;
          margin: 7px 0 0;
          color: var(--wtp-copy);
          font-size: 16px;
          line-height: 1.68;
        }

        .wtp-enterprise-use-cases {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 38px;
          border-top: 1px solid var(--wtp-border);
        }

        .wtp-enterprise-use-case {
          display: grid;
          grid-template-columns: 34px minmax(0, 1fr);
          gap: 16px;
          min-height: 185px;
          padding: 32px 30px 34px 0;
          border-right: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-enterprise-use-case:nth-child(3n) {
          padding-right: 0;
          padding-left: 30px;
          border-right: 0;
        }

        .wtp-enterprise-use-case:nth-child(3n + 2) {
          padding-left: 30px;
        }

        .wtp-enterprise-use-case:nth-child(n + 4) {
          border-bottom: 0;
        }

        .wtp-enterprise-use-case-icon {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 3px;
          color: var(--wtp-accent);
        }

        .wtp-enterprise-use-case h3,
        .wtp-connected-platform-capability h3,
        .wtp-operations-capability h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-enterprise-use-case p,
        .wtp-connected-platform-capability p,
        .wtp-operations-capability p {
          margin: 8px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          line-height: 1.65;
        }

        .wtp-operations {
          padding: 96px 0;
          background: #21171d;
          color: var(--wtp-white);
        }

        .wtp-operations-heading {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(360px, 0.72fr);
          gap: 72px;
          align-items: end;
        }

        .wtp-operations-heading h2 {
          max-width: 720px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
        }

        .wtp-operations-heading > p {
          max-width: 590px;
          margin: 0;
          color: rgba(255, 255, 255, 0.72);
          font-size: 18px;
          line-height: 1.65;
        }

        .wtp-operations-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
          gap: 64px;
          margin-top: 58px;
          padding-top: 48px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-operations-console {
          align-self: start;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.14);
          border-radius: 28px;
          background: rgba(255, 255, 255, 0.055);
          box-shadow: 0 26px 64px rgba(0, 0, 0, 0.22);
        }

        .wtp-console-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          min-height: 68px;
          padding: 0 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wtp-console-header > div {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .wtp-console-header strong {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-console-header > span {
          color: rgba(255, 255, 255, 0.54);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.12em;
        }

        .wtp-console-status {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #d94f88;
          box-shadow: 0 0 0 5px rgba(217, 79, 136, 0.12);
        }

        .wtp-console-flow {
          display: grid;
          grid-template-columns: max-content minmax(12px, 1fr) max-content minmax(12px, 1fr) max-content minmax(12px, 1fr) max-content;
          gap: 10px;
          align-items: center;
          padding: 22px 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wtp-console-flow span {
          color: rgba(255, 255, 255, 0.74);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.04em;
        }

        .wtp-console-flow i {
          height: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .wtp-console-rows {
          padding: 4px 24px;
        }

        .wtp-console-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 20px;
          align-items: center;
          min-height: 84px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.09);
        }

        .wtp-console-row:last-child {
          border-bottom: 0;
        }

        .wtp-console-row strong,
        .wtp-console-row span {
          display: block;
        }

        .wtp-console-row strong {
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .wtp-console-row div > span {
          margin-top: 4px;
          color: rgba(255, 255, 255, 0.56);
          font-size: 13px;
          line-height: 1.45;
        }

        .wtp-console-pill {
          padding: 7px 10px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.76);
          background: rgba(255, 255, 255, 0.06);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          white-space: nowrap;
        }

        .wtp-console-pill-ready {
          border-color: rgba(217, 79, 136, 0.36);
          color: #ffd9e8;
          background: rgba(193, 29, 99, 0.16);
        }

        .wtp-console-footer {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .wtp-console-footer span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 58px;
          padding: 10px;
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.62);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          text-align: center;
        }

        .wtp-console-footer span:last-child {
          border-right: 0;
        }

        .wtp-console-footer svg {
          color: #e16b9a;
          flex: 0 0 auto;
        }

        .wtp-operations-capabilities {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-operations-capability {
          display: grid;
          grid-template-columns: 30px minmax(0, 1fr);
          gap: 14px;
          min-height: 150px;
          padding: 26px 24px 28px 0;
          border-right: 1px solid rgba(255, 255, 255, 0.12);
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-operations-capability:nth-child(2n) {
          padding-right: 0;
          padding-left: 24px;
          border-right: 0;
        }

        .wtp-operations-capability:nth-child(n + 7) {
          border-bottom: 0;
        }

        .wtp-operations-capability > span {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 2px;
          color: #e16b9a;
        }

        .wtp-operations-capability h3 {
          color: var(--wtp-white);
        }

        .wtp-operations-capability p {
          color: rgba(255, 255, 255, 0.62);
        }

        .wtp-operations-link-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 32px;
          align-items: center;
          margin-top: 46px;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .wtp-operations-link-row > span {
          max-width: 700px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 15px;
          line-height: 1.6;
        }

        .wtp-operations-link-row a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: #f1a2c3;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.45;
          text-decoration: none;
        }

        .wtp-operations-link-row a:visited {
          color: #f1a2c3;
        }

        .wtp-operations-link-row a:hover {
          color: var(--wtp-white);
        }

        .wtp-operations-link-row a:focus-visible {
          outline: 3px solid rgba(255, 255, 255, 0.46);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .wtp-connected-platform {
          padding: 96px 0;
          background: var(--wtp-blush);
        }

        .wtp-connected-platform-panel {
          margin-top: 56px;
          overflow: hidden;
          border: 1px solid rgba(193, 29, 99, 0.12);
          border-radius: 30px;
          background: var(--wtp-white);
          box-shadow: 0 24px 70px rgba(72, 27, 49, 0.08);
        }

        .wtp-connected-platform-core {
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr) minmax(360px, 0.8fr);
          gap: 20px;
          align-items: center;
          padding: 30px 34px;
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-connected-platform-core > span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 58px;
          height: 58px;
          border-radius: 18px;
          color: var(--wtp-accent-deep);
          background: var(--wtp-blush);
        }

        .wtp-connected-platform-core strong {
          display: block;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-connected-platform-core p {
          max-width: 620px;
          margin: 6px 0 0;
          color: var(--wtp-copy);
          font-size: 15px;
          line-height: 1.6;
        }

        .wtp-connected-platform-path {
          display: grid;
          grid-template-columns: max-content minmax(14px, 1fr) max-content minmax(14px, 1fr) max-content minmax(14px, 1fr) max-content;
          gap: 8px;
          align-items: center;
        }

        .wtp-connected-platform-path span {
          color: var(--wtp-accent-deep);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .wtp-connected-platform-path i {
          height: 1px;
          background: rgba(193, 29, 99, 0.22);
        }

        .wtp-connected-platform-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
        }

        .wtp-connected-platform-capability {
          display: grid;
          grid-template-columns: 32px minmax(0, 1fr);
          gap: 14px;
          min-height: 178px;
          padding: 30px 26px 32px;
          border-right: 1px solid var(--wtp-border);
        }

        .wtp-connected-platform-capability:nth-child(4n) {
          border-right: 0;
        }

        .wtp-connected-platform-capability > span {
          display: inline-flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 2px;
          color: var(--wtp-accent);
        }

        .wtp-connected-platform-links {
          display: grid;
          grid-template-columns: repeat(4, max-content);
          gap: 12px 34px;
          align-items: center;
          justify-content: center;
          margin-top: 34px;
        }

        .wtp-faq {
          padding: 96px 0;
          background: var(--wtp-white);
        }

        .wtp-faq-heading {
          max-width: 820px;
          margin: 0 auto;
          text-align: center;
        }

        .wtp-faq-heading h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
        }

        .wtp-faq-heading p {
          max-width: 760px;
          margin: 20px auto 0;
          color: var(--wtp-copy);
          font-size: 18px;
          line-height: 1.65;
        }

        .wtp-faq-panel {
          max-width: 980px;
          margin: 54px auto 0;
          border-top: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-faq-item {
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-faq-item:last-child {
          border-bottom: 0;
        }

        .wtp-faq-item summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 24px;
          align-items: center;
          min-height: 78px;
          padding: 20px 4px;
          cursor: pointer;
          list-style: none;
          color: var(--wtp-ink);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.45;
        }

        .wtp-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .wtp-faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
          border-radius: 5px;
        }

        .wtp-faq-control {
          position: relative;
          width: 34px;
          height: 34px;
          border: 1px solid var(--wtp-border);
          border-radius: 50%;
          background: var(--wtp-white);
        }

        .wtp-faq-control::before,
        .wtp-faq-control::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 1.5px;
          background: var(--wtp-accent-deep);
          transform: translate(-50%, -50%);
          transition: transform 180ms ease;
        }

        .wtp-faq-control::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .wtp-faq-item[open] .wtp-faq-control::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .wtp-faq-answer {
          max-width: 840px;
          padding: 0 70px 24px 4px;
        }

        .wtp-faq-answer p {
          margin: 0;
          color: var(--wtp-copy);
          font-size: 16px;
          line-height: 1.7;
        }

        .wtp-faq-followup {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          max-width: 980px;
          margin: 30px auto 0;
        }

        .wtp-faq-followup > span {
          color: var(--wtp-muted);
          font-size: 15px;
          line-height: 1.6;
        }


        .wtp-resources {
          padding: 96px 0;
          background: var(--wtp-soft);
        }

        .wtp-resource-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 54px;
          overflow: hidden;
          border: 1px solid var(--wtp-border);
          border-radius: 28px;
          background: var(--wtp-white);
        }

        .wtp-resource-item {
          display: flex;
          min-height: 260px;
          flex-direction: column;
          align-items: flex-start;
          padding: 32px 30px 34px;
          border-right: 1px solid var(--wtp-border);
          border-bottom: 1px solid var(--wtp-border);
        }

        .wtp-resource-item:nth-child(3n) {
          border-right: 0;
        }

        .wtp-resource-item:nth-child(n + 7) {
          border-bottom: 0;
        }

        .wtp-resource-category {
          color: var(--wtp-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .wtp-resource-item h3 {
          margin: 16px 0 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .wtp-resource-item p {
          margin: 14px 0 0;
          color: var(--wtp-copy);
          font-size: 16px;
          line-height: 1.65;
        }

        .wtp-resource-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 22px;
          color: var(--wtp-accent);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
        }

        .wtp-resource-link svg {
          transition: transform 180ms ease;
        }

        .wtp-resource-link:hover {
          color: var(--wtp-accent-dark);
        }

        .wtp-resource-link:hover svg {
          transform: translateX(3px);
        }

        .wtp-resource-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
          border-radius: 4px;
        }

        .wtp-final-cta {
          padding: 80px 0 96px;
          background: var(--wtp-white);
        }

        .wtp-final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.35fr) minmax(340px, 0.65fr);
          gap: 64px;
          align-items: center;
          padding: 58px 60px;
          border: 1px solid #ead4de;
          border-radius: 30px;
          background: var(--wtp-blush);
        }

        .wtp-final-cta-copy {
          max-width: 760px;
        }

        .wtp-final-cta-copy h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .wtp-final-cta-copy p {
          max-width: 720px;
          margin: 20px 0 0;
          color: var(--wtp-copy);
          font-size: 18px;
          line-height: 1.68;
        }

        .wtp-final-cta-actions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
        }

        .wtp-final-cta-actions .wtp-button {
          width: 100%;
          min-height: 52px;
          padding-right: 24px;
          padding-left: 24px;
          text-align: center;
        }


        @media (min-width: 1440px) {
          .wtp-shell {
            padding-left: 56px;
            padding-right: 56px;
          }
        }

        @media (max-width: 1024px) {
          .wtp-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .wtp-hero {
            padding: 92px 0 80px;
          }

          .wtp-hero h1 {
            max-width: 790px;
            font-size: 42px;
          }

          .wtp-architecture {
            grid-template-columns: minmax(0, 0.9fr) 42px minmax(0, 1.2fr) 42px minmax(0, 0.9fr);
            padding: 20px;
          }

          .wtp-architecture-node {
            min-height: 190px;
            padding: 20px;
          }

          .wtp-capability-band {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 20px;
          }

          .wtp-capability {
            justify-content: flex-start;
          }

          .wtp-challenge-heading,
          .wtp-challenge-body {
            gap: 44px;
          }

          .wtp-challenge h2,
          .wtp-section-heading h2,
          .wtp-workflow-heading h2,
          .wtp-quality h2,
          .wtp-seo-heading h2 {
            font-size: 32px;
          }

          .wtp-section-heading,
          .wtp-workflow-heading,
          .wtp-quality-layout {
            gap: 48px;
          }

          .wtp-definition-layout {
            gap: 52px;
          }

          .wtp-workflow-panel {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .wtp-workflow-stage:nth-child(3) {
            border-right: 0;
          }

          .wtp-workflow-stage:nth-child(-n + 3) {
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .wtp-continuous-grid {
            column-gap: 30px;
          }

          .wtp-update-flow {
            padding: 22px 18px;
          }

          .wtp-update-step {
            font-size: 13px;
          }

          .wtp-governance-strip {
            grid-template-columns: minmax(0, 1fr);
            gap: 20px;
          }

          .wtp-governance-controls {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 8px;
          }

          .wtp-governance-controls span:nth-child(n + 4) {
            padding-top: 10px;
            border-top: 1px solid rgba(92, 66, 78, 0.14);
          }

          .wtp-governance-controls span:nth-child(4) {
            border-left: 0;
            padding-left: 0;
          }

          .wtp-context-layout,
          .wtp-brand-layout,
          .wtp-seo-layout {
            gap: 48px;
          }

          .wtp-context-dimensions {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-context-link {
            grid-column: auto;
          }

          .wtp-modern-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-seo-heading {
            gap: 48px;
          }


          .wtp-security-layout,
          .wtp-performance-layout {
            gap: 48px;
          }

          .wtp-security-controls,
          .wtp-performance-priorities {
            column-gap: 28px;
          }

          .wtp-delivery-flow {
            grid-template-columns: minmax(0, 1fr);
            gap: 10px;
          }

          .wtp-delivery-arrow {
            min-height: 22px;
            justify-content: flex-start;
            padding-left: 12px;
            transform: rotate(90deg);
            transform-origin: 22px center;
          }

          .wtp-delivery-node {
            min-height: 0;
          }

          .wtp-implementation-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-implementation-stage,
          .wtp-implementation-stage:nth-child(4n),
          .wtp-implementation-stage:nth-child(n + 5) {
            border-right: 1px solid rgba(106, 72, 88, 0.18);
            border-bottom: 1px solid rgba(106, 72, 88, 0.18);
          }

          .wtp-implementation-stage:nth-child(2n) {
            border-right: 0;
          }

          .wtp-implementation-stage:nth-child(n + 7) {
            border-bottom: 0;
          }

          .wtp-implementation-start {
            grid-template-columns: 52px minmax(0, 1fr);
          }

          .wtp-implementation-start .wtp-button {
            grid-column: 2;
            justify-self: start;
          }


          .wtp-enterprise-programs-heading h2,
          .wtp-operations-heading h2,
          .wtp-connected-platform-heading h2,
          .wtp-faq-heading h2 {
            font-size: 32px;
          }

          .wtp-enterprise-use-cases {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-enterprise-use-case,
          .wtp-enterprise-use-case:nth-child(3n),
          .wtp-enterprise-use-case:nth-child(3n + 2) {
            padding: 30px 28px 32px 0;
            border-right: 1px solid var(--wtp-border);
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-enterprise-use-case:nth-child(2n) {
            padding-right: 0;
            padding-left: 28px;
            border-right: 0;
          }

          .wtp-enterprise-use-case:nth-child(n + 5) {
            border-bottom: 0;
          }

          .wtp-operations-heading,
          .wtp-operations-layout {
            gap: 48px;
          }

          .wtp-connected-platform-core {
            grid-template-columns: 58px minmax(0, 1fr);
          }

          .wtp-connected-platform-path {
            grid-column: 1 / -1;
            margin-top: 4px;
          }

          .wtp-connected-platform-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-connected-platform-capability:nth-child(4n),
          .wtp-connected-platform-capability:nth-child(n + 5) {
            border-right: 1px solid var(--wtp-border);
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-connected-platform-capability:nth-child(2n) {
            border-right: 0;
          }

          .wtp-connected-platform-capability:nth-child(n + 3) {
            border-bottom: 0;
          }

          .wtp-connected-platform-links {
            grid-template-columns: repeat(2, max-content);
          }


          .wtp-resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-resource-item,
          .wtp-resource-item:nth-child(3n),
          .wtp-resource-item:nth-child(n + 7) {
            border-right: 1px solid var(--wtp-border);
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-resource-item:nth-child(2n) {
            border-right: 0;
          }

          .wtp-resource-item:last-child {
            grid-column: 1 / -1;
            min-height: 220px;
            border-right: 0;
            border-bottom: 0;
          }

          .wtp-final-cta-panel {
            grid-template-columns: minmax(0, 1fr);
            gap: 34px;
            padding: 50px 46px;
          }

          .wtp-final-cta-actions {
            max-width: 430px;
          }

        }

        @media (max-width: 820px) {
          .wtp-architecture {
            grid-template-columns: minmax(0, 1fr);
            gap: 14px;
            max-width: 620px;
          }

          .wtp-architecture-node {
            min-height: 0;
          }

          .wtp-architecture-arrow {
            min-height: 28px;
            transform: rotate(90deg);
          }

          .wtp-challenge-heading,
          .wtp-challenge-body {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-challenge-heading {
            gap: 24px;
          }

          .wtp-challenge-body {
            gap: 36px;
            margin-top: 42px;
            padding-top: 38px;
          }

          .wtp-challenge-narrative {
            max-width: 760px;
          }

          .wtp-section-heading,
          .wtp-workflow-heading,
          .wtp-definition-layout,
          .wtp-quality-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-section-heading,
          .wtp-workflow-heading {
            gap: 24px;
          }

          .wtp-definition-layout {
            gap: 36px;
            margin-top: 42px;
            padding-top: 38px;
          }

          .wtp-definition-copy {
            max-width: 760px;
          }

          .wtp-update-flow {
            grid-template-columns: minmax(0, 1fr);
            gap: 8px;
            max-width: 620px;
            margin-right: auto;
            margin-left: auto;
            padding: 24px;
          }

          .wtp-update-step {
            min-height: 46px;
            justify-content: flex-start;
            text-align: left;
          }

          .wtp-update-connector {
            min-height: 22px;
            justify-content: flex-start;
            padding-left: 2px;
            transform: rotate(90deg);
            transform-origin: 11px center;
          }

          .wtp-continuous-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-quality-layout {
            gap: 42px;
          }

          .wtp-quality-intro {
            max-width: 760px;
          }

          .wtp-context-layout,
          .wtp-brand-layout,
          .wtp-seo-heading,
          .wtp-seo-layout {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-context-layout,
          .wtp-brand-layout,
          .wtp-seo-layout {
            gap: 40px;
          }

          .wtp-seo-heading {
            gap: 24px;
          }

          .wtp-context-preview {
            max-width: 720px;
          }

          .wtp-brand-controls {
            column-gap: 30px;
          }

          .wtp-modern-guidance {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }

          .wtp-modern-links {
            grid-template-columns: repeat(2, max-content);
            gap: 8px 26px;
          }

          .wtp-seo-narrative {
            max-width: 760px;
          }


          .wtp-security-layout,
          .wtp-performance-layout {
            grid-template-columns: minmax(0, 1fr);
            gap: 40px;
          }

          .wtp-security-lifecycle,
          .wtp-delivery-model {
            max-width: 760px;
          }

          .wtp-options-header {
            display: none;
          }

          .wtp-options-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            padding: 24px 0;
          }

          .wtp-options-row-featured {
            padding-right: 20px;
            padding-left: 20px;
          }

          .wtp-options-approach,
          .wtp-options-row-featured .wtp-options-approach,
          .wtp-options-cell,
          .wtp-options-cell:last-child {
            padding: 14px 20px;
            border-right: 0;
          }

          .wtp-options-approach,
          .wtp-options-row-featured .wtp-options-approach {
            grid-column: 1 / -1;
            padding-top: 0;
            padding-left: 20px;
          }

          .wtp-options-mobile-label {
            display: block;
            margin-bottom: 6px;
            color: var(--wtp-muted);
            font-size: 10px;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          .wtp-options-guidance {
            grid-template-columns: minmax(0, 1fr);
            gap: 18px;
          }

          .wtp-options-links {
            grid-template-columns: repeat(2, max-content);
            gap: 2px 24px;
          }


          .wtp-enterprise-programs-intro,
          .wtp-operations-heading,
          .wtp-operations-layout,
          .wtp-faq-followup {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-enterprise-programs-intro,
          .wtp-faq-followup {
            gap: 20px;
          }

          .wtp-operations-heading {
            gap: 24px;
          }

          .wtp-operations-layout {
            gap: 42px;
          }

          .wtp-operations-console {
            max-width: 720px;
          }

          .wtp-connected-platform-links {
            justify-content: start;
          }

        }

        @media (max-width: 640px) {
          .wtp-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .wtp-hero {
            padding: 72px 0 64px;
          }

          .wtp-hero::before {
            width: 300px;
            height: 300px;
            top: -230px;
            left: -170px;
          }

          .wtp-hero::after {
            display: none;
          }

          .wtp-hero h1 {
            font-size: 38px;
            line-height: 1.1;
            letter-spacing: -0.03em;
          }

          .wtp-hero-copy > p {
            margin-top: 22px;
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-hero-actions {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            width: 100%;
            margin-top: 30px;
          }

          .wtp-button {
            width: 100%;
            min-height: 50px;
          }

          .wtp-architecture {
            margin-top: 46px;
            padding: 16px;
            border-radius: 24px;
          }

          .wtp-architecture-node {
            padding: 20px;
            border-radius: 20px;
          }

          .wtp-capability-band {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 0 20px;
            padding: 16px 0;
          }

          .wtp-capability {
            min-height: 62px;
            justify-content: flex-start;
            padding: 9px 0;
            font-size: 14px;
          }

          .wtp-challenge {
            padding: 68px 0;
          }

          .wtp-challenge h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .wtp-challenge-intro {
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-challenge-list {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-challenge-item {
            padding: 16px 0;
          }

          .wtp-definition,
          .wtp-workflow,
          .wtp-continuous,
          .wtp-quality {
            padding: 68px 0;
          }

          .wtp-section-heading h2,
          .wtp-workflow-heading h2,
          .wtp-quality h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .wtp-section-heading > p,
          .wtp-workflow-heading > p {
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-definition-copy .wtp-definition-lead {
            font-size: 18px;
            line-height: 1.65;
          }

          .wtp-proxy-functions {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-proxy-function {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
          }

          .wtp-proxy-function-icon {
            width: 42px;
            height: 42px;
          }

          .wtp-workflow-panel {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 42px;
          }

          .wtp-workflow-stage,
          .wtp-workflow-stage:nth-child(3),
          .wtp-workflow-stage:nth-child(-n + 3) {
            display: grid;
            grid-template-columns: 40px minmax(0, 1fr);
            column-gap: 14px;
            padding: 22px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .wtp-workflow-stage:last-child {
            border-bottom: 0;
          }

          .wtp-workflow-number {
            grid-row: 1 / span 2;
            margin: 4px 0 0;
          }

          .wtp-workflow-stage p {
            margin-top: 6px;
          }

          .wtp-workflow-links {
            display: grid;
            gap: 4px;
            align-items: start;
          }

          .wtp-workflow-links a {
            width: fit-content;
          }

          .wtp-continuous-grid {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 34px;
          }

          .wtp-continuous-item {
            padding: 22px 0 24px;
          }

          .wtp-quality-pathways {
            padding: 24px 22px;
            border-radius: 24px;
          }

          .wtp-governance-strip {
            margin-top: 40px;
            padding: 22px 0;
          }

          .wtp-governance-title {
            align-items: flex-start;
          }

          .wtp-governance-controls {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-governance-controls span,
          .wtp-governance-controls span:first-child,
          .wtp-governance-controls span:nth-child(4),
          .wtp-governance-controls span:last-child {
            width: 100%;
            min-height: 42px;
            padding: 10px 0;
            border-left: 0;
            border-top: 1px solid rgba(92, 66, 78, 0.14);
          }

          .wtp-governance-controls span:first-child {
            border-top: 0;
          }

          .wtp-context,
          .wtp-brand,
          .wtp-modern,
          .wtp-seo {
            padding: 68px 0;
          }

          .wtp-context-layout,
          .wtp-brand-layout,
          .wtp-seo-layout {
            margin-top: 42px;
          }

          .wtp-preview-chrome {
            grid-template-columns: 64px minmax(0, 1fr) 38px;
            padding: 0 14px;
          }

          .wtp-preview-pages {
            grid-template-columns: minmax(0, 1fr);
            padding: 16px;
          }

          .wtp-preview-page {
            min-height: 270px;
            padding: 20px;
          }

          .wtp-preview-status {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .wtp-preview-status span:nth-child(2) {
            border-right: 0;
          }

          .wtp-preview-status span:nth-child(-n + 2) {
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-context-dimension {
            grid-template-columns: 30px minmax(0, 1fr);
          }

          .wtp-brand-controls,
          .wtp-modern-grid,
          .wtp-seo-controls {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-language-asset {
            grid-template-columns: 52px minmax(0, 1fr);
            padding: 21px 20px;
          }

          .wtp-language-system-label,
          .wtp-language-outcome {
            padding-right: 20px;
            padding-left: 20px;
          }

          .wtp-brand-links,
          .wtp-modern-links {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 2px;
          }

          .wtp-modern-grid {
            margin-top: 42px;
          }

          .wtp-modern-item {
            padding: 24px 0 26px;
          }

          .wtp-seo-heading h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .wtp-seo-heading > p {
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-seo-layout {
            padding-top: 38px;
          }

          .wtp-seo-architecture {
            padding: 24px 20px;
          }

          .wtp-url-languages,
          .wtp-url-connections {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-url-languages span,
          .wtp-url-connections span,
          .wtp-url-languages span:first-child,
          .wtp-url-connections span:first-child,
          .wtp-url-languages span:last-child,
          .wtp-url-connections span:last-child {
            padding: 11px 0;
            border-left: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .wtp-url-languages span:last-child,
          .wtp-url-connections span:last-child {
            border-bottom: 0;
          }


          .wtp-security,
          .wtp-performance,
          .wtp-architecture-options,
          .wtp-implementation {
            padding: 68px 0;
          }

          .wtp-security-layout,
          .wtp-performance-layout,
          .wtp-options-table,
          .wtp-implementation-grid {
            margin-top: 42px;
          }

          .wtp-security-lifecycle,
          .wtp-delivery-model {
            padding: 24px 20px;
            border-radius: 24px;
          }

          .wtp-security-stages {
            grid-template-columns: minmax(0, 1fr);
            gap: 8px;
          }

          .wtp-security-stage {
            display: grid;
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 14px;
            align-items: center;
            min-height: 52px;
            text-align: left;
          }

          .wtp-security-stage strong {
            margin-top: 0;
          }

          .wtp-security-connector {
            min-height: 18px;
            justify-content: flex-start;
            padding-left: 12px;
            transform: rotate(90deg);
            transform-origin: 20px center;
          }

          .wtp-security-core {
            grid-template-columns: 44px minmax(0, 1fr);
            padding: 22px 0 0;
          }

          .wtp-security-core-icon {
            width: 44px;
            height: 44px;
          }

          .wtp-security-controls,
          .wtp-performance-priorities {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-security-control,
          .wtp-performance-priority {
            grid-template-columns: 30px minmax(0, 1fr);
          }

          .wtp-delivery-signals {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-delivery-signals span {
            min-height: 46px;
            justify-content: flex-start;
            padding: 12px 0;
            border-bottom: 1px solid var(--wtp-border);
            text-align: left;
          }

          .wtp-delivery-signals span:last-child {
            border-bottom: 0;
          }

          .wtp-options-row,
          .wtp-options-row-featured {
            grid-template-columns: minmax(0, 1fr);
            padding: 22px 0;
          }

          .wtp-options-row-featured {
            padding-right: 16px;
            padding-left: 16px;
          }

          .wtp-options-approach,
          .wtp-options-row-featured .wtp-options-approach,
          .wtp-options-cell,
          .wtp-options-cell:last-child {
            grid-column: auto;
            padding: 10px 0;
          }

          .wtp-options-links {
            display: grid;
            grid-template-columns: minmax(0, 1fr);
            gap: 2px;
          }

          .wtp-implementation-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-implementation-stage,
          .wtp-implementation-stage:nth-child(2n),
          .wtp-implementation-stage:nth-child(4n),
          .wtp-implementation-stage:nth-child(n + 5),
          .wtp-implementation-stage:nth-child(n + 7) {
            display: grid;
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
            min-height: 0;
            padding: 22px 0;
            border-right: 0;
            border-bottom: 1px solid rgba(106, 72, 88, 0.18);
          }

          .wtp-implementation-stage:last-child {
            border-bottom: 0;
          }

          .wtp-implementation-number {
            margin: 3px 0 0;
          }

          .wtp-implementation-start {
            grid-template-columns: 44px minmax(0, 1fr);
            padding: 24px 20px;
          }

          .wtp-implementation-start-icon {
            width: 44px;
            height: 44px;
          }

          .wtp-implementation-start .wtp-button {
            grid-column: 1 / -1;
            width: 100%;
            max-width: none;
            margin-top: 4px;
          }


          .wtp-enterprise-programs,
          .wtp-operations,
          .wtp-connected-platform,
          .wtp-faq {
            padding: 68px 0;
          }

          .wtp-enterprise-programs-heading h2,
          .wtp-operations-heading h2,
          .wtp-connected-platform-heading h2,
          .wtp-faq-heading h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .wtp-enterprise-programs-intro {
            margin-top: 42px;
            padding: 24px 0;
          }

          .wtp-enterprise-programs-intro > div {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 15px;
          }

          .wtp-enterprise-programs-icon {
            width: 46px;
            height: 46px;
            border-radius: 15px;
          }

          .wtp-enterprise-use-cases {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 30px;
          }

          .wtp-enterprise-use-case,
          .wtp-enterprise-use-case:nth-child(2n),
          .wtp-enterprise-use-case:nth-child(3n),
          .wtp-enterprise-use-case:nth-child(3n + 2),
          .wtp-enterprise-use-case:nth-child(n + 5) {
            min-height: 0;
            padding: 24px 0 26px;
            border-right: 0;
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-enterprise-use-case:last-child {
            border-bottom: 0;
          }

          .wtp-operations-layout {
            margin-top: 42px;
            padding-top: 38px;
          }

          .wtp-console-header,
          .wtp-console-flow,
          .wtp-console-rows {
            padding-right: 18px;
            padding-left: 18px;
          }

          .wtp-console-flow {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 8px;
          }

          .wtp-console-flow i {
            display: none;
          }

          .wtp-console-flow span {
            text-align: center;
          }

          .wtp-console-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 10px;
            align-items: start;
            padding: 18px 0;
          }

          .wtp-console-pill {
            width: fit-content;
          }

          .wtp-console-footer {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-console-footer span {
            justify-content: flex-start;
            min-height: 46px;
            padding: 10px 18px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            text-align: left;
          }

          .wtp-console-footer span:last-child {
            border-bottom: 0;
          }

          .wtp-operations-capabilities {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-operations-capability,
          .wtp-operations-capability:nth-child(2n),
          .wtp-operations-capability:nth-child(n + 7) {
            min-height: 0;
            padding: 22px 0 24px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          }

          .wtp-operations-capability:last-child {
            border-bottom: 0;
          }

          .wtp-operations-link-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 16px;
          }

          .wtp-operations-link-row a {
            width: fit-content;
          }

          .wtp-connected-platform-panel {
            margin-top: 42px;
            border-radius: 24px;
          }

          .wtp-connected-platform-core {
            grid-template-columns: 48px minmax(0, 1fr);
            padding: 24px 20px;
          }

          .wtp-connected-platform-core > span {
            width: 48px;
            height: 48px;
            border-radius: 15px;
          }

          .wtp-connected-platform-path {
            grid-template-columns: repeat(4, minmax(0, 1fr));
            gap: 8px;
          }

          .wtp-connected-platform-path i {
            display: none;
          }

          .wtp-connected-platform-path span {
            text-align: center;
          }

          .wtp-connected-platform-grid {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-connected-platform-capability,
          .wtp-connected-platform-capability:nth-child(2n),
          .wtp-connected-platform-capability:nth-child(4n),
          .wtp-connected-platform-capability:nth-child(n + 5),
          .wtp-connected-platform-capability:nth-child(n + 7) {
            min-height: 0;
            padding: 24px 20px 26px;
            border-right: 0;
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-connected-platform-capability:last-child {
            border-bottom: 0;
          }

          .wtp-connected-platform-links {
            grid-template-columns: minmax(0, 1fr);
            gap: 2px;
            margin-top: 26px;
          }

          .wtp-faq-heading p {
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-faq-panel {
            margin-top: 42px;
          }

          .wtp-faq-item summary {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 16px;
            min-height: 72px;
            padding: 18px 0;
            font-size: 16px;
          }

          .wtp-faq-control {
            width: 32px;
            height: 32px;
          }

          .wtp-faq-answer {
            padding: 0 48px 22px 0;
          }

          .wtp-faq-followup {
            margin-top: 24px;
          }


          .wtp-resources,
          .wtp-final-cta {
            padding: 68px 0;
          }

          .wtp-resource-grid {
            grid-template-columns: minmax(0, 1fr);
            margin-top: 42px;
            border-radius: 24px;
          }

          .wtp-resource-item,
          .wtp-resource-item:nth-child(2n),
          .wtp-resource-item:nth-child(3n),
          .wtp-resource-item:nth-child(n + 7),
          .wtp-resource-item:last-child {
            grid-column: auto;
            min-height: 0;
            padding: 26px 22px 28px;
            border-right: 0;
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-resource-item:last-child {
            border-bottom: 0;
          }

          .wtp-resource-item h3 {
            font-size: 20px;
          }

          .wtp-resource-link {
            margin-top: 14px;
            padding-top: 8px;
          }

          .wtp-final-cta-panel {
            gap: 30px;
            padding: 34px 22px;
            border-radius: 24px;
          }

          .wtp-final-cta-copy h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .wtp-final-cta-copy p {
            font-size: 18px;
            line-height: 1.62;
          }

          .wtp-final-cta-actions {
            max-width: none;
          }

          .wtp-final-cta-actions .wtp-button {
            width: 100%;
          }

        }

        /* Final responsive polish: preserve readable sequences, links, and controls on narrow screens. */
        @media (max-width: 640px) {
          .wtp-console-header {
            flex-wrap: wrap;
            min-height: 0;
            padding-top: 14px;
            padding-bottom: 14px;
          }

          .wtp-console-flow,
          .wtp-connected-platform-path {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
          }

          .wtp-console-flow span,
          .wtp-connected-platform-path span {
            min-width: 0;
            padding: 9px 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            overflow-wrap: anywhere;
          }

          .wtp-connected-platform-path span {
            border-color: rgba(193, 29, 99, 0.14);
            background: rgba(253, 242, 247, 0.72);
          }

          .wtp-button {
            height: auto;
            min-height: 52px;
            padding-top: 13px;
            padding-bottom: 13px;
            line-height: 1.35;
            white-space: normal;
          }

          .wtp-editorial-link,
          .wtp-workflow-links a,
          .wtp-seo-links a,
          .wtp-options-links a,
          .wtp-connected-platform-links a,
          .wtp-operations-link-row a,
          .wtp-resource-link {
            min-height: 44px;
            align-items: center;
          }

          .wtp-preview-chrome {
            min-height: 56px;
          }

          .wtp-preview-chrome > span:nth-child(2) {
            min-width: 0;
            overflow-wrap: anywhere;
          }
        }

        @media (max-width: 420px) {
          .wtp-console-flow,
          .wtp-connected-platform-path {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-faq-answer {
            padding-right: 0;
          }

          .wtp-preview-chrome {
            grid-template-columns: 48px minmax(0, 1fr) 34px;
            gap: 8px;
            padding-right: 10px;
            padding-left: 10px;
          }

          .wtp-preview-chrome > span:nth-child(2) {
            font-size: 11px;
            line-height: 1.35;
          }

          .wtp-capability-band {
            grid-template-columns: minmax(0, 1fr);
          }

          .wtp-capability {
            min-height: 56px;
            border-bottom: 1px solid var(--wtp-border);
          }

          .wtp-capability:last-child {
            border-bottom: 0;
          }

          .wtp-language-row {
            flex-wrap: wrap;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wtp-button,
          .wtp-editorial-link,
          .wtp-workflow-links a::after,
          .wtp-faq-control::before,
          .wtp-faq-control::after,
          .wtp-resource-link svg {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
