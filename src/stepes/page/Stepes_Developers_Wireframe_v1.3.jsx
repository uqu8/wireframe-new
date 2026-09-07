import React, { useState } from "react";

const LINKS = {
  developers: "https://www.stepes.com/developers/",
  quickstart: "https://www.stepes.com/developers/translation-api/quickstart/",
  translationApi: "https://www.stepes.com/developers/translation-api/",
  apiReference: "https://www.stepes.com/developers/translation-api/api-reference/",
  authentication: "https://www.stepes.com/developers/translation-api/authentication/",
  tools: "https://www.stepes.com/developers/tools/",
  guides: "https://www.stepes.com/developers/guides/",
  changelog: "https://www.stepes.com/developers/changelog/",
  status: "https://www.stepes.com/developers/status/",
  migration: "https://www.stepes.com/developers/migration-guides/",
  websiteProxy: "https://www.stepes.com/website-translation-proxy/",
  softwareApi: "https://www.stepes.com/developers/software-localization-api/",
  integrations: "https://www.stepes.com/developers/integrations/",
  integrationModels: "https://www.stepes.com/developers/integration-models/",
  production: "https://www.stepes.com/developers/production-guidance/",
  security: "https://www.stepes.com/security-compliance/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  cmsGuide: "https://www.stepes.com/developers/guides/cms-translation-integration/",
  continuousGuide: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  cicdGuide: "https://www.stepes.com/developers/guides/software-localization-ci-cd/",
  hybridGuide: "https://www.stepes.com/developers/guides/hybrid-translation-architecture/",
  examples: "https://www.stepes.com/developers/examples/",
  openapi: "https://www.stepes.com/developers/translation-api/openapi/",
  statusEvents: "https://www.stepes.com/developers/translation-api/status-and-events/",
  errors: "https://www.stepes.com/developers/translation-api/errors/",
  contact: "https://www.stepes.com/contact-us/",
};

const quickLinks = [
  ["Quickstart", LINKS.quickstart],
  ["API Reference", LINKS.apiReference],
  ["SDKs & Tools", LINKS.tools],
  ["Changelog", LINKS.changelog],
  ["Platform Status", LINKS.status],
];

const integrationPaths = [
  {
    title: "Translation API",
    bestFor: "Applications, content systems, and automated multilingual workflows",
    description:
      "Submit content, configure translation and review requirements, monitor processing, and return approved multilingual content programmatically.",
    href: LINKS.translationApi,
    action: "Explore the Translation API",
  },
  {
    title: "Website Translation Proxy",
    bestFor: "Continuously updated websites and managed localized delivery",
    description:
      "Detect source-site changes, connect them to translation workflows, and deliver synchronized localized experiences without duplicating the CMS architecture.",
    href: LINKS.websiteProxy,
    action: "Explore Website Translation Proxy",
  },
  {
    title: "Software Localization API",
    bestFor: "Application strings, software resources, and release pipelines",
    description:
      "Connect repositories and product-release workflows to translation, terminology, linguistic review, quality assurance, and localized resource delivery.",
    href: LINKS.softwareApi,
    action: "Explore the Software Localization API",
  },
  {
    title: "Enterprise Integrations",
    bestFor: "CMS, PIM, DAM, repositories, and connected content operations",
    description:
      "Coordinate APIs, connectors, events, and workflow automation across the systems that create, govern, and publish global content.",
    href: LINKS.integrations,
    action: "Explore Enterprise Integrations",
  },
];

const docColumns = [
  {
    title: "Start Building",
    links: [
      ["Translation API Quickstart", LINKS.quickstart],
      ["Authentication and Access", LINKS.authentication],
      ["Choose an Integration Model", LINKS.integrationModels],
      ["Developer Guides", LINKS.guides],
    ],
  },
  {
    title: "Reference and Tools",
    links: [
      ["Interactive API Reference", LINKS.apiReference],
      ["SDKs, CLI, and Postman", LINKS.tools],
      ["Code Examples", LINKS.examples],
      ["OpenAPI Specification", LINKS.openapi],
    ],
  },
  {
    title: "Operate in Production",
    links: [
      ["Production Guidance", LINKS.production],
      ["Changelog", LINKS.changelog],
      ["Migration Guides", LINKS.migration],
      ["Platform Status", LINKS.status],
    ],
  },
];

const comparisonRows = [
  ["Custom application workflows", "Primary fit", "Website-focused", "Software-focused", "Strong fit"],
  ["Continuous website localization", "Custom integration", "Primary fit", "Not intended", "Connected CMS workflows"],
  ["Software strings and resources", "Supported", "Not intended", "Primary fit", "Strong fit"],
  ["CMS, PIM, or DAM connectivity", "Strong fit", "Website-focused", "Software-focused", "Primary fit"],
  ["Publishing model", "Application-controlled", "Managed website delivery", "Release pipelines", "Connected-system workflow"],
  ["Hybrid enterprise architecture", "Supported", "Supported", "Supported", "Supported"],
];

const platformFlow = [
  ["Connect and Authenticate", "Establish secure access for applications, services, websites, repositories, and enterprise content systems."],
  ["Submit or Detect Content", "Send text, structured content, files, and software resources—or identify new website content automatically."],
  ["Apply Language Intelligence", "Use model routing, context, translation memory, terminology, style rules, and quality signals."],
  ["Orchestrate Translation and Review", "Coordinate AI translation, professional linguists, specialist review, approval, and quality assurance."],
  ["Deliver and Observe", "Return localized content, trigger publishing or release workflows, and monitor events, logs, and delivery status."],
];

const architectureSources = [
  "Applications and Services",
  "CMS, PIM, and DAM",
  "Websites and Repositories",
];

const architectureCore = [
  ["Integration Layer", "Translation API · Website Translation Proxy · Software Localization API · Enterprise Connectors"],
  ["Shared Language Services", "Model routing · Translation memory · Terminology · Style rules · Quality intelligence"],
  ["Workflow and Governance", "AI + human workflows · Review and approval · Security · Auditability · Reporting"],
];

const architectureDestinations = [
  "Return to Source Systems",
  "Localized Web Delivery",
  "Application and Software Releases",
];

const capabilityGroups = [
  {
    title: "Translation Intelligence",
    description:
      "Route content by language, domain, risk, quality target, speed, and cost. Apply context, adaptive examples, translation memory, terminology, style rules, and brand controls.",
    links: [
      ["Translation Memory", LINKS.translationMemory],
      ["Terminology Management", LINKS.terminology],
    ],
  },
  {
    title: "Workflow Orchestration",
    description:
      "Combine AI translation, professional human translation, post-editing, subject-matter review, in-country review, customer approval, and automated quality assurance.",
    links: [
      ["AI + Human Translation", LINKS.aiHuman],
      ["Workflow Automation", LINKS.workflowAutomation],
    ],
  },
  {
    title: "Developer Operations",
    description:
      "Support synchronous and asynchronous processing, batch operations, signed webhooks, event subscriptions, retries, idempotency, structured errors, and verified delivery.",
    links: [
      ["Status and Events", LINKS.statusEvents],
      ["Errors and Troubleshooting", LINKS.errors],
    ],
  },
  {
    title: "Enterprise Control",
    description:
      "Manage organizations, workspaces, environments, service accounts, role-based access, auditability, usage visibility, quality governance, and multilingual program reporting.",
    links: [
      ["Security & Compliance", LINKS.security],
      ["Translation Quality Assurance", LINKS.quality],
    ],
  },
];

const productionRows = [
  ["Security and identity", "Scoped credentials, service accounts, SSO, role-based access, key rotation, encryption, and audit logs"],
  ["Reliability", "Structured errors, safe retries, idempotency, rate-limit guidance, timeouts, and delivery verification"],
  ["Observability", "Request IDs, event logs, metrics, usage dashboards, alerts, and platform status visibility"],
  ["API lifecycle", "Versioned contracts, backward-compatibility guidance, changelogs, deprecation notices, and migration paths"],
  ["Governance", "Workflow permissions, approved language assets, review ownership, retention controls, and release readiness"],
  ["Enterprise support", "Architecture review, onboarding, testing, production launch, escalation, and ongoing optimization"],
];

const implementationGuides = [
  ["CMS Translation Integration", "Connect structured content and publishing workflows to governed localization operations.", "CMS Integration Guide", LINKS.cmsGuide],
  ["Continuous Website Localization", "Design an operating model for recurring website updates and localized delivery.", "Continuous Localization Guide", LINKS.continuousGuide],
  ["Software Localization in CI/CD", "Integrate software strings, quality checks, and localized resources into release pipelines.", "Software Localization CI/CD Guide", LINKS.cicdGuide],
  ["Hybrid Translation Architecture", "Coordinate APIs, proxy localization, connectors, and shared language assets across systems.", "Hybrid Architecture Guide", LINKS.hybridGuide],
];

const lifecycleLinks = [
  ["Changelog", "Review developer platform releases and documentation updates", LINKS.changelog],
  ["Migration Guides", "Plan version changes, deprecations, and replacement workflows", LINKS.migration],
  ["Platform Status", "Check current developer service availability", LINKS.status],
];

const faqs = [
  {
    question: "What can developers build with Stepes?",
    answer:
      "Developers can connect applications, websites, software repositories, content platforms, and enterprise systems to multilingual workflows that combine translation intelligence, automation, professional review, quality assurance, and governed delivery.",
  },
  {
    question: "How do I choose between the Translation API and Website Translation Proxy?",
    answer:
      "Use the Translation API when your application or content system needs programmatic workflow control. Use Website Translation Proxy when the primary requirement is continuous detection, translation, and delivery of localized website content. Enterprise architectures may use both.",
  },
  {
    question: "Can Stepes support AI translation with professional human review?",
    answer:
      "Yes. Workflows can combine AI translation, professional post-editing, human translation, subject-matter review, in-country review, customer approval, and linguistic quality assurance based on content type and risk.",
  },
  {
    question: "How are long-running translation workflows monitored?",
    answer:
      "Developers can use machine-readable status resources, polling, signed webhooks, event subscriptions, delivery callbacks, retry controls, and request-level logs to monitor translation, review, approval, and delivery.",
  },
  {
    question: "What developer tools are available?",
    answer:
      "The Stepes developer platform includes a self-service sandbox, interactive API reference, OpenAPI specifications, official SDKs, CLI tools, Postman collections, code examples, webhook testing, and AI-ready documentation resources.",
  },
  {
    question: "Can Stepes help design and launch an enterprise integration?",
    answer:
      "Yes. Stepes works with development, product, localization, and enterprise technology teams on architecture, workflow design, technical onboarding, controlled testing, production readiness, launch, and ongoing optimization.",
  },
];

function ArrowIcon({ size = 17 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m14 7 5 5-5 5" />
    </svg>
  );
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`button ${secondary ? "button-secondary" : "button-primary"}`} href={href}>
      <span>{children}</span>
      <ArrowIcon size={18} />
    </a>
  );
}

function TextLink({ href, children, light = false }) {
  return (
    <a className={`text-link${light ? " text-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function SectionIntro({ eyebrow, title, text, center = false, dark = false }) {
  return (
    <div className={`section-intro${center ? " section-intro-center" : ""}${dark ? " section-intro-dark" : ""}`}>
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function StepesDevelopersWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="developers-page">
      <style>{`
        :root {
          --magenta: #c11d63;
          --magenta-dark: #9f1d55;
          --magenta-light: #f2a7c6;
          --blush: #fdf2f7;
          --ink: #18181b;
          --ink-soft: #414149;
          --muted: #696973;
          --line: #e4e4e9;
          --panel: #f7f7f9;
          --dark: #17171c;
          --white: #fff;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .developers-page {
          width: 100%;
          overflow: hidden;
          background: var(--white);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.6;
        }
        .developers-page a { color: inherit; }
        .developers-page a:focus-visible,
        .developers-page button:focus-visible {
          outline: 3px solid rgba(193,29,99,.25);
          outline-offset: 4px;
        }
        .container {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        h1, h2, h3, p { margin-top: 0; }
        h1, h2, h3, p, a, span, strong, dt, dd { overflow-wrap: break-word; }
        svg { flex: 0 0 auto; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -.025em; line-height: 1.12; }
        h1 { max-width: 930px; margin: 0 auto 24px; font-size: 48px; }
        h2 { margin-bottom: 20px; font-size: 36px; }
        h3 { margin-bottom: 12px; font-size: 24px; }
        p { margin-bottom: 0; color: var(--ink-soft); font-size: 16px; }
        .body-large { font-size: 18px; line-height: 1.72; }
        .eyebrow {
          margin-bottom: 16px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .14em;
          line-height: 1.3;
          text-transform: uppercase;
        }
        .section-intro { max-width: 820px; margin-bottom: 48px; }
        .section-intro p { max-width: 780px; font-size: 18px; line-height: 1.7; }
        .section-intro-center { margin-left: auto; margin-right: auto; text-align: center; }
        .section-intro-center p { margin-left: auto; margin-right: auto; }
        .section-intro-dark h2 { color: var(--white); }
        .section-intro-dark p { color: #d1d1d8; }
        .section-intro-dark .eyebrow,
        .dark .eyebrow { color: var(--magenta-light); }

        .button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
        }
        .button:hover { transform: translateY(-2px); }
        .button-primary,
        .button-primary:visited,
        .button-primary:hover,
        .button-primary:active,
        .button-primary:focus-visible { color: #fff !important; }
        .button-primary { background: var(--magenta); box-shadow: 0 12px 28px rgba(193,29,99,.18); }
        .button-primary:hover { background: var(--magenta-dark); }
        .button-secondary,
        .button-secondary:visited,
        .button-secondary:hover,
        .button-secondary:active,
        .button-secondary:focus-visible { color: var(--ink) !important; }
        .button-secondary { border: 1px solid #d3d3da; background: #fff; }
        .button-secondary:hover { border-color: #a9a9b3; background: #fafafa; }
        .text-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .text-link svg { transition: transform .2s ease; }
        .text-link:hover svg { transform: translateX(4px); }
        .text-link-light { color: var(--magenta-light) !important; }

        /* 1. Hero */
        .hero {
          padding: 108px 0 0;
          background: #fff;
          text-align: center;
        }
        .hero-copy { max-width: 960px; margin: 0 auto; }
        .hero-copy .body-large { max-width: 820px; margin: 0 auto; }
        .hero-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 34px; }
        .developer-quicklinks {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 4px 30px;
          margin-top: 52px;
          padding: 24px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .developer-quicklinks a {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          color: var(--ink-soft);
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .developer-quicklinks a span,
        .docs-list a span,
        .text-link span { min-width: 0; }
        .developer-quicklinks a:hover { color: var(--magenta); }

        /* 2. Integration paths */
        .integration-section { background: #fff; }
        .integration-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }
        .integration-item {
          min-height: 290px;
          padding: 34px 36px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .integration-kicker {
          margin-bottom: 7px;
          color: var(--magenta);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: .12em;
          line-height: 1.3;
          text-transform: uppercase;
        }
        .integration-best {
          min-height: 54px;
          margin-bottom: 18px;
          color: var(--ink-soft);
          font-size: 17px;
          line-height: 1.55;
        }
        .integration-item > p:not(.integration-best) { min-height: 78px; }
        .integration-item .text-link { margin-top: 18px; }

        /* 3. Documentation gateway */
        .docs-section { background: var(--dark); color: #fff; }
        .docs-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255,255,255,.15);
          border-left: 1px solid rgba(255,255,255,.15);
        }
        .docs-column {
          min-height: 315px;
          padding: 32px;
          border-right: 1px solid rgba(255,255,255,.15);
          border-bottom: 1px solid rgba(255,255,255,.15);
        }
        .docs-column h3 { color: #fff; }
        .docs-list { margin-top: 22px; }
        .docs-list a {
          display: flex;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          border-top: 1px solid rgba(255,255,255,.12);
          color: #e9e9ee;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
        }
        .docs-list a:first-child { border-top: 0; }
        .docs-list a:hover { color: var(--magenta-light); }
        .docs-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 36px;
          margin-top: 32px;
        }
        .docs-footer p { max-width: 760px; color: #ceced6; }

        /* 4. Comparison */
        .comparison-section { background: var(--panel); }
        .comparison-table { overflow: hidden; border: 1px solid #dddde3; border-radius: 28px; background: #fff; }
        .comparison-row { display: grid; grid-template-columns: 1.45fr repeat(4, minmax(0, 1fr)); }
        .comparison-row > div {
          min-width: 0;
          padding: 18px 16px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          font-size: 16px;
          line-height: 1.45;
        }
        .comparison-row > div:last-child { border-right: 0; }
        .comparison-row:last-child > div { border-bottom: 0; }
        .comparison-head { background: #202026; color: #fff; }
        .comparison-head > div { border-color: rgba(255,255,255,.14); font-weight: 600; }
        .comparison-row > div:first-child { font-weight: 600; }
        .comparison-row > div:not(:first-child) { text-align: center; }
        .comparison-mobile { display: none; }
        .comparison-footer { display: flex; justify-content: space-between; gap: 30px; align-items: flex-start; margin-top: 26px; }
        .comparison-footer p { max-width: 760px; }

        /* 5. Platform flow */
        .flow-section { background: #fff; }
        .platform-flow {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .flow-stage { position: relative; min-height: 250px; padding: 30px 24px 30px 0; border-right: 1px solid var(--line); }
        .flow-stage:not(:first-child) { padding-left: 24px; }
        .flow-stage:last-child { padding-right: 0; border-right: 0; }
        .flow-index { display: block; margin-bottom: 20px; color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .1em; }
        .flow-stage h3 { font-size: 21px; }
        .flow-stage p { color: var(--muted); }
        .flow-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 30px; }

        /* 6. Capabilities */
        .capabilities-section { background: var(--panel); }
        .capability-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #dcdce2;
        }
        .capability-group {
          min-height: 285px;
          padding: 34px 38px 34px 0;
          border-bottom: 1px solid #dcdce2;
        }
        .capability-group:nth-child(even) { padding-left: 38px; border-left: 1px solid #dcdce2; }
        .capability-group p { max-width: 520px; }
        .capability-links { display: flex; flex-wrap: wrap; gap: 8px 22px; margin-top: 22px; }

        /* 7. Production */
        .production-section { background: #fff; }
        .production-table { border-top: 1px solid var(--line); }
        .production-row {
          display: grid;
          grid-template-columns: minmax(220px, .72fr) minmax(0, 1.8fr);
          gap: 44px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }
        .production-row strong { font-size: 18px; font-weight: 600; }
        .production-actions { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 26px; }

        /* 8. Architecture and guides */
        .architecture-section { background: var(--dark); color: #fff; }
        .architecture-layout { display: grid; grid-template-columns: 1.05fr .95fr; gap: 72px; align-items: start; }
        .architecture-copy h2 { color: #fff; }
        .architecture-copy > p { max-width: 650px; color: #d1d1d8; font-size: 18px; line-height: 1.7; }
        .architecture-map { margin-top: 38px; }
        .architecture-source-grid,
        .architecture-destination-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .architecture-node {
          display: flex;
          min-height: 68px;
          align-items: center;
          justify-content: center;
          padding: 14px 12px;
          border: 1px solid rgba(255,255,255,.17);
          border-radius: 16px;
          color: #ececf1;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
        }
        .architecture-node-output { border-color: rgba(242,167,198,.34); background: rgba(193,29,99,.08); }
        .architecture-connector { display: flex; height: 38px; justify-content: center; }
        .architecture-connector span { width: 1px; height: 100%; background: rgba(242,167,198,.55); }
        .architecture-core {
          overflow: hidden;
          border: 1px solid rgba(242,167,198,.35);
          border-radius: 22px;
          background: rgba(255,255,255,.025);
        }
        .architecture-core-title {
          padding: 16px 20px;
          border-bottom: 1px solid rgba(255,255,255,.15);
          color: var(--magenta-light);
          font-size: 16px;
          font-weight: 600;
          letter-spacing: .02em;
          text-align: center;
        }
        .architecture-layer {
          padding: 18px 20px;
          border-bottom: 1px solid rgba(255,255,255,.12);
        }
        .architecture-layer:last-child { border-bottom: 0; }
        .architecture-layer strong { display: block; color: #fff; font-size: 17px; font-weight: 600; }
        .architecture-layer p { margin-top: 5px; color: #c9c9d1; line-height: 1.6; }
        .guide-list { border-top: 1px solid rgba(255,255,255,.15); }
        .guide-item { padding: 23px 0; border-bottom: 1px solid rgba(255,255,255,.15); }
        .guide-item h3 { color: #fff; font-size: 20px; }
        .guide-item p { margin-bottom: 12px; color: #c9c9d1; }

        /* 9. Lifecycle and resources */
        .lifecycle-section { background: #fff; }
        .lifecycle-layout { display: grid; grid-template-columns: .88fr 1.12fr; gap: 82px; align-items: start; }
        .lifecycle-copy p { max-width: 520px; font-size: 18px; line-height: 1.7; }
        .lifecycle-links { border-top: 1px solid var(--line); }
        .lifecycle-link {
          display: grid;
          grid-template-columns: 160px minmax(0, 1fr) 24px;
          gap: 24px;
          align-items: center;
          min-height: 82px;
          border-bottom: 1px solid var(--line);
          color: inherit;
          text-decoration: none;
        }
        .lifecycle-link span { color: var(--magenta); font-size: 16px; font-weight: 600; }
        .lifecycle-link p { color: var(--ink); font-size: 16px; line-height: 1.5; }
        .lifecycle-link:hover svg { transform: translateX(4px); }
        .lifecycle-link svg { color: var(--magenta); transition: transform .2s ease; }

        /* 10. FAQ and CTA */
        .faq-section { background: var(--panel); }
        .faq-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 92px; align-items: start; }
        .faq-intro { position: sticky; top: 32px; }
        .faq-intro p { max-width: 460px; font-size: 18px; line-height: 1.7; }
        .faq-list { border-top: 1px solid #dcdce2; }
        .faq-item { border-bottom: 1px solid #dcdce2; }
        .faq-question {
          display: grid;
          width: 100%;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 20px;
          align-items: center;
          padding: 23px 0;
          border: 0;
          background: transparent;
          color: var(--ink);
          font: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          text-align: left;
          cursor: pointer;
        }
        .faq-toggle { color: var(--magenta); font-size: 25px; font-weight: 400; text-align: right; }
        .faq-answer { padding: 0 54px 24px 0; }
        .faq-answer p { line-height: 1.72; }
        .final-cta { padding: 80px 0; background: #fff; }
        .final-cta-shell {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 52px;
          align-items: center;
          padding: 46px 50px;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: var(--blush);
        }
        .final-cta-shell h2 { margin-bottom: 14px; }
        .final-cta-shell p { max-width: 700px; font-size: 18px; }
        .final-actions { display: flex; flex-direction: column; gap: 12px; min-width: 260px; }

        @media (max-width: 1100px) {
          .container { padding-left: 40px; padding-right: 40px; }
          .architecture-layout { gap: 48px; }
          .lifecycle-layout { gap: 56px; }
        }

        @media (max-width: 920px) {
          .container { padding-left: 24px; padding-right: 24px; }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding-top: 88px; }
          .integration-item { min-height: 0; padding: 30px; }
          .docs-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .docs-column { min-height: 0; }
          .docs-column:last-child { grid-column: 1 / -1; }
          .docs-footer { align-items: flex-start; flex-direction: column; }
          .comparison-table { display: none; }
          .comparison-mobile { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; }
          .comparison-card { padding: 24px; border: 1px solid #dddde3; border-radius: 22px; background: #fff; }
          .comparison-card h3 { margin-bottom: 16px; }
          .comparison-card dl { margin: 0; }
          .comparison-card dl > div { display: grid; grid-template-columns: 1fr; gap: 4px; padding: 12px 0; border-bottom: 1px solid var(--line); }
          .comparison-card dl > div:last-child { border-bottom: 0; }
          .comparison-card dt, .comparison-card dd { margin: 0; font-size: 16px; }
          .comparison-card dt { color: var(--muted); }
          .comparison-card dd { font-weight: 600; text-align: left; }
          .comparison-footer { flex-direction: column; gap: 14px; }
          .platform-flow { grid-template-columns: 1fr; border-bottom: 0; }
          .flow-stage,
          .flow-stage:not(:first-child),
          .flow-stage:nth-child(4) {
            display: grid;
            min-height: 0;
            grid-template-columns: 46px minmax(0, 1fr);
            column-gap: 18px;
            padding: 24px 0;
            border-right: 0;
            border-top: 0;
            border-bottom: 1px solid var(--line);
          }
          .flow-index { grid-row: 1 / span 2; margin: 4px 0 0; }
          .flow-stage h3 { margin-bottom: 7px; }
          .capability-grid { grid-template-columns: 1fr; }
          .capability-group,
          .capability-group:nth-child(even) { min-height: 0; padding: 30px 0; border-left: 0; }
          .architecture-layout,
          .lifecycle-layout,
          .faq-layout { grid-template-columns: 1fr; gap: 48px; }
          .faq-intro { position: static; }
          .final-cta-shell { grid-template-columns: 1fr; }
          .final-actions { min-width: 0; flex-direction: row; }
        }

        @media (max-width: 720px) {
          .container { padding-left: 20px; padding-right: 20px; }
          .section, .section-dense { padding: 68px 0; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .body-large, .section-intro p, .architecture-copy > p, .lifecycle-copy p, .faq-intro p, .final-cta-shell p { font-size: 17px; }
          .hero { padding-top: 72px; }
          .hero-actions { flex-direction: column; }
          .hero-actions .button { width: 100%; }
          .developer-quicklinks { justify-content: flex-start; gap: 2px 20px; text-align: left; }
          .integration-grid { grid-template-columns: 1fr; }
          .integration-item { padding: 27px 22px; }
          .docs-grid { grid-template-columns: 1fr; }
          .docs-column:last-child { grid-column: auto; }
          .integration-best,
          .integration-item > p:not(.integration-best) { min-height: 0; }
          .docs-column { padding: 27px 22px; }
          .docs-footer .button { width: 100%; }
          .comparison-mobile { grid-template-columns: 1fr; }
          .production-row { grid-template-columns: 1fr; gap: 7px; padding: 21px 0; }
          .architecture-source-grid,
          .architecture-destination-grid { grid-template-columns: 1fr; }
          .lifecycle-link { grid-template-columns: 1fr 24px; gap: 10px 16px; padding: 17px 0; }
          .lifecycle-link span { grid-column: 1; }
          .lifecycle-link p { grid-column: 1; }
          .lifecycle-link svg { grid-column: 2; grid-row: 1 / span 2; }
          .faq-question { font-size: 17px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 68px 0; }
          .final-cta-shell { padding: 34px 24px; }
          .final-actions { flex-direction: column; }
          .final-actions .button { width: 100%; }
        }

        @media (max-width: 390px) {
          .developer-quicklinks { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0 14px; }
          .developer-quicklinks a { align-items: flex-start; }
          .comparison-card { padding: 22px 20px; }
          .comparison-card dl > div { grid-template-columns: 1fr; gap: 4px; }
          .comparison-card dd { text-align: left; }
          .architecture-layer { padding: 17px 16px; }
          .architecture-core-title { padding: 15px 16px; }
        }

        @media (max-width: 340px) {
          .developer-quicklinks { grid-template-columns: 1fr; }
          .flow-stage,
          .flow-stage:not(:first-child),
          .flow-stage:nth-child(4) { grid-template-columns: 38px minmax(0, 1fr); column-gap: 14px; }
          .final-cta-shell { padding-left: 20px; padding-right: 20px; }
        }
      `}</style>

      <section className="hero" id="developers-overview">
        <div className="container">
          <div className="hero-copy">
            <h1>Stepes Developer Platform</h1>
            <p className="body-large">
              Build translation and localization into applications, websites, software products, and enterprise content systems with Stepes APIs, integration technologies, and configurable AI + human workflows.
            </p>
            <div className="hero-actions">
              <Button href={LINKS.quickstart}>Start Building</Button>
              <Button href={LINKS.translationApi} secondary>Explore the Translation API</Button>
            </div>
          </div>
          <nav className="developer-quicklinks" aria-label="Developer quick links">
            {quickLinks.map(([label, href]) => (
              <a href={href} key={label}><span>{label}</span><ArrowIcon size={15} /></a>
            ))}
          </nav>
        </div>
      </section>

      <section className="section integration-section" id="integration-paths">
        <div className="container">
          <SectionIntro
            title="Choose the Right Translation Integration"
            text="Select the integration model that fits your system architecture, content lifecycle, developer ownership, review requirements, and publishing process—or combine several within a connected enterprise environment."
          />
          <div className="integration-grid">
            {integrationPaths.map((item) => (
              <article className="integration-item" key={item.title}>
                <div className="integration-kicker">Best For</div>
                <p className="integration-best">{item.bestFor}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <TextLink href={item.href}>{item.action}</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section docs-section dark" id="documentation">
        <div className="container">
          <SectionIntro
            eyebrow="DEVELOPER DOCUMENTATION"
            title="Start With the Resource You Need"
            text="Find the resources you need to evaluate, build, launch, and maintain your Stepes integration—from the quickstart and API reference to production guidance and lifecycle updates."
            dark
          />
          <div className="docs-grid">
            {docColumns.map((column) => (
              <article className="docs-column" key={column.title}>
                <h3>{column.title}</h3>
                <div className="docs-list">
                  {column.links.map(([label, href]) => (
                    <a href={href} key={label}><span>{label}</span><ArrowIcon /></a>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="docs-footer">
            <p>
              Build with a self-service sandbox, tested code examples, official SDKs, CLI tools, Postman collections, webhook testing, machine-readable specifications, and AI-ready documentation.
            </p>
            <Button href={LINKS.quickstart} secondary>Open the Quickstart</Button>
          </div>
        </div>
      </section>

      <section className="section comparison-section" id="compare-integration-models">
        <div className="container">
          <SectionIntro
            title="Compare Translation Integration Models"
            text="Use this framework to identify the strongest starting point for your systems, content lifecycle, development resources, and publishing model."
          />
          <div className="comparison-table" role="table" aria-label="Translation integration model comparison">
            <div className="comparison-row comparison-head" role="row">
              <div role="columnheader">Requirement</div>
              <div role="columnheader">Translation API</div>
              <div role="columnheader">Website Proxy</div>
              <div role="columnheader">Software API</div>
              <div role="columnheader">Enterprise Integrations</div>
            </div>
            {comparisonRows.map((row) => (
              <div className="comparison-row" role="row" key={row[0]}>
                {row.map((cell, index) => (
                  <div role={index === 0 ? "rowheader" : "cell"} key={`${row[0]}-${cell}`}>{cell}</div>
                ))}
              </div>
            ))}
          </div>
          <div className="comparison-mobile" aria-label="Translation integration model comparison for mobile">
            {["Translation API", "Website Translation Proxy", "Software Localization API", "Enterprise Integrations"].map((name, modelIndex) => (
              <article className="comparison-card" key={name}>
                <h3>{name}</h3>
                <dl>
                  {comparisonRows.map((row) => (
                    <div key={row[0]}><dt>{row[0]}</dt><dd>{row[modelIndex + 1]}</dd></div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <div className="comparison-footer">
            <p>Hybrid architectures can combine APIs, proxy delivery, software localization, and enterprise system integrations while sharing language assets and governance.</p>
            <TextLink href={LINKS.integrationModels}>Compare Integration Approaches</TextLink>
          </div>
        </div>
      </section>

      <section className="section flow-section" id="platform-workflow">
        <div className="container">
          <SectionIntro
            eyebrow="CONNECTED WORKFLOW"
            title="From Source Content to Governed Multilingual Delivery"
            text="Move content through a clear technical lifecycle—from secure access and submission to language intelligence, review, delivery, and operational visibility."
          />
          <div className="platform-flow">
            {platformFlow.map(([title, text], index) => (
              <article className="flow-stage" key={title}>
                <span className="flow-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="flow-links">
            <TextLink href={LINKS.workflowAutomation}>Workflow Automation</TextLink>
            <TextLink href={LINKS.translationMemory}>Translation Memory</TextLink>
            <TextLink href={LINKS.terminology}>Terminology Management</TextLink>
            <TextLink href={LINKS.quality}>Translation Quality Assurance</TextLink>
          </div>
        </div>
      </section>

      <section className="section capabilities-section" id="platform-capabilities">
        <div className="container">
          <SectionIntro
            eyebrow="CORE CAPABILITIES"
            title="Build More Than Translation Requests"
            text="Use a unified developer platform for language intelligence, configurable AI + human workflows, event-driven operations, and enterprise governance."
          />
          <div className="capability-grid">
            {capabilityGroups.map((group) => (
              <article className="capability-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="capability-links">
                  {group.links.map(([label, href]) => <TextLink href={href} key={label}>{label}</TextLink>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section production-section" id="production-readiness">
        <div className="container">
          <SectionIntro
            title="Operate Translation Integrations With Enterprise Control"
            text="Move from a successful prototype to a resilient production system with clear standards for identity, reliability, observability, lifecycle management, governance, and support."
          />
          <div className="production-table">
            {productionRows.map(([title, text]) => (
              <div className="production-row" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="production-actions">
            <TextLink href={LINKS.security}>Review Security &amp; Compliance</TextLink>
            <TextLink href={LINKS.production}>Read Production Guidance</TextLink>
          </div>
        </div>
      </section>

      <section className="section architecture-section dark" id="reference-architecture">
        <div className="container architecture-layout">
          <div className="architecture-copy">
            <div className="eyebrow">REFERENCE ARCHITECTURE</div>
            <h2>One Developer Platform Across Your Content Architecture</h2>
            <p>
              Use the right integration method for each system while sharing language intelligence, workflow governance, security, and operational visibility across the enterprise.
            </p>
            <div className="architecture-map" aria-label="Hybrid enterprise translation architecture">
              <div className="architecture-source-grid">
                {architectureSources.map((source) => (
                  <div className="architecture-node" key={source}>{source}</div>
                ))}
              </div>
              <div className="architecture-connector" aria-hidden="true"><span /></div>
              <div className="architecture-core">
                <div className="architecture-core-title">Stepes Developer Platform</div>
                {architectureCore.map(([title, text]) => (
                  <div className="architecture-layer" key={title}>
                    <strong>{title}</strong>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <div className="architecture-connector" aria-hidden="true"><span /></div>
              <div className="architecture-destination-grid">
                {architectureDestinations.map((destination) => (
                  <div className="architecture-node architecture-node-output" key={destination}>{destination}</div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="eyebrow">IMPLEMENTATION GUIDES</div>
            <div className="guide-list">
              {implementationGuides.map(([title, text, action, href]) => (
                <article className="guide-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <TextLink href={href} light>{action}</TextLink>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-dense lifecycle-section" id="developer-updates">
        <div className="container lifecycle-layout">
          <div className="lifecycle-copy">
            <div className="eyebrow">PLATFORM LIFECYCLE</div>
            <h2>Keep Your Integration Current</h2>
            <p>Track releases, documentation changes, deprecations, migration requirements, and current service availability in one place.</p>
          </div>
          <div className="lifecycle-links">
            {lifecycleLinks.map(([label, text, href]) => (
              <a className="lifecycle-link" href={href} key={label}>
                <span>{label}</span>
                <p>{text}</p>
                <ArrowIcon size={18} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="developers-faq">
        <div className="container faq-layout">
          <div className="faq-intro">
            <h2>Developer Platform FAQs</h2>
            <p>Find concise answers about integration models, AI + human workflows, developer operations, tooling, and enterprise implementation.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <article className="faq-item" key={faq.question}>
                  <button
                    className="faq-question"
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  {isOpen && <div className="faq-answer" id={`faq-answer-${index}`}><p>{faq.answer}</p></div>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta" id="start-building">
        <div className="container">
          <div className="final-cta-shell">
            <div>
              <h2>Start Building Your Translation Integration</h2>
              <p>Begin with the Translation API quickstart or work with Stepes to design the right architecture for your systems, languages, quality requirements, and global content operations.</p>
            </div>
            <div className="final-actions">
              <Button href={LINKS.quickstart}>Start Building</Button>
              <Button href={LINKS.contact} secondary>Talk to an Integration Specialist</Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
