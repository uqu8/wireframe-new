import React, { useState } from "react";

const STEPS = [
  {
    number: "01",
    title: "Connect Your Software Project",
    body:
      "Define the source locale, target locales, resource formats, workflow rules, terminology, review requirements, access permissions, and delivery settings for a repeatable localization program.",
  },
  {
    number: "02",
    title: "Synchronize Files and Keys",
    body:
      "Push complete resource files or submit only new and changed strings while preserving the relationships among files, keys, branches, locales, and translations.",
  },
  {
    number: "03",
    title: "Add Technical and Visual Context",
    body:
      "Attach key names, developer comments, screenshots, source references, character limits, placeholder definitions, and product terminology so every string can be translated in context.",
  },
  {
    number: "04",
    title: "Translate and Review",
    body:
      "Route content through translation memory, terminology-guided AI translation, professional post-editing, linguistic review, subject-matter validation, and product approval.",
  },
  {
    number: "05",
    title: "Run Automated Quality Checks",
    body:
      "Validate placeholders, markup, plural structures, terminology, locale completeness, character limits, and other software-specific requirements before release.",
  },
  {
    number: "06",
    title: "Deliver Release-Ready Resources",
    body:
      "Generate localized builds, retrieve approved files, trigger downstream testing, create commits or pull requests, and continue deployment workflows through events and APIs.",
  },
];

const RESOURCE_OBJECTS = [
  {
    title: "Projects",
    body:
      "The parent container for products, languages, resources, workflows, permissions, and delivery settings.",
  },
  {
    title: "Repositories",
    body:
      "Connections between source-controlled resources and the localization environment, with configurable mappings and synchronization rules.",
  },
  {
    title: "Branches",
    body:
      "Parallel localization versions aligned with feature, staging, production, regional, and long-term-support development branches.",
  },
  {
    title: "Resource Files",
    body:
      "Structured localization files associated with a project, platform, module, branch, source locale, and target locale.",
  },
  {
    title: "Translation Keys",
    body:
      "Stable identifiers that connect source strings with translations, metadata, screenshots, and review history.",
  },
  {
    title: "Strings and Translations",
    body:
      "Source content and target-language values with workflow status, revision history, quality results, and approval state.",
  },
  {
    title: "Locales",
    body:
      "Language-and-region configurations that support market-specific terminology, formatting, product behavior, and regulatory language.",
  },
  {
    title: "Jobs, Builds, and Exports",
    body:
      "Defined localization work and generated delivery packages prepared for testing, integration, or deployment.",
  },
];

const CONTEXT_ITEMS = [
  {
    icon: "key",
    title: "Key Names and Source References",
    body:
      "Identify the feature, screen, module, or component in which a string appears so short labels are not translated in isolation.",
  },
  {
    icon: "comment",
    title: "Developer Comments",
    body:
      "Explain meaning, user action, grammatical role, space constraints, protected terminology, and runtime behavior.",
  },
  {
    icon: "image",
    title: "Screenshots and Visual Context",
    body:
      "Associate strings with the interface so linguists can evaluate neighboring content, hierarchy, available space, and intended interaction.",
  },
  {
    icon: "measure",
    title: "Character and Display Limits",
    body:
      "Guide translation for buttons, tabs, menus, notifications, mobile screens, embedded interfaces, and other constrained layouts.",
  },
  {
    icon: "code",
    title: "Variables and Placeholders",
    body:
      "Protect runtime elements such as {username}, %1$s, {{count}}, {0}, and ${total} while translating the surrounding content.",
  },
  {
    icon: "globe",
    title: "Plurals, Grammar, and Terminology",
    body:
      "Preserve locale-specific plural structures, ICU-style messages, approved product names, interface labels, and technical vocabulary.",
  },
];

const QA_ITEMS = [
  ["Placeholder Validation", "Detect missing, added, renamed, reordered, or malformed runtime variables."],
  ["Tag and Markup Validation", "Protect HTML, XML, Markdown, escape sequences, and application-specific syntax."],
  ["Missing Translation Detection", "Identify required keys without an approved value for one or more target locales."],
  ["Plural-Form Validation", "Confirm that the grammatical variants required by each locale remain complete and technically valid."],
  ["Character-Length Checks", "Flag translations that exceed configured interface or display constraints."],
  ["Terminology Validation", "Detect prohibited or inconsistent product terminology before localized resources are built."],
  ["Locale-Format Checks", "Review numbers, dates, times, currencies, units, separators, percentages, and punctuation."],
  ["Encoding and Character Checks", "Identify corrupted characters, invalid encoding, unsupported characters, and Unicode issues."],
  ["RTL Readiness", "Support Arabic, Hebrew, and other right-to-left localization requirements and testing workflows."],
  ["Duplicate and Conflicting Keys", "Find collisions and inconsistent resource definitions before they reach a localized build."],
];

const FILE_FORMATS = [
  ["Web and JavaScript", "JSON, YAML, JavaScript resource objects"],
  ["Android", "Android XML"],
  ["Apple Platforms", ".strings, .stringsdict, XLIFF"],
  ["Microsoft and .NET", "RESX"],
  ["Java", ".properties"],
  ["GNU Gettext", "PO and POT"],
  ["Flutter", "ARB"],
  ["Cross-Platform Frameworks", "JSON, YAML, XML, XLIFF"],
  ["Games and Custom Software", "CSV, TSV, JSON, XML, and structured custom formats"],
];

const USE_CASES = [
  {
    icon: "cloud",
    title: "SaaS and Cloud Applications",
    body:
      "Continuously localize dashboards, onboarding, account settings, notifications, billing interfaces, support features, and new product functionality across frequent releases.",
  },
  {
    icon: "mobile",
    title: "Mobile Applications",
    body:
      "Coordinate iOS and Android resources through one workflow while preserving platform-specific files, variables, plural structures, and review requirements.",
  },
  {
    icon: "building",
    title: "Enterprise Software",
    body:
      "Manage multilingual content across product suites, modules, customer portals, administrative tools, and regional editions with controlled access and approvals.",
  },
  {
    icon: "chip",
    title: "Embedded and Connected Products",
    body:
      "Localize device controls, equipment displays, companion applications, and constrained interfaces with technical validation and character-limit controls.",
  },
  {
    icon: "game",
    title: "Games and Interactive Products",
    body:
      "Manage interface strings, dialogue, gameplay terminology, platform-specific resources, and release branches with linguistic and cultural review.",
  },
  {
    icon: "shield",
    title: "Regulated Software",
    body:
      "Apply professional review, terminology governance, automated QA, controlled approval, and auditable delivery to safety-sensitive and regulated products.",
  },
];

const RESOURCES = [
  {
    title: "Getting Started",
    body: "Configure authentication and complete your first software-localization workflow.",
    href: "https://www.stepes.com/developers/software-localization-api/getting-started/",
  },
  {
    title: "API Reference",
    body: "Explore software-localization resources, parameters, schemas, responses, and events.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/software-localization",
  },
  {
    title: "Authentication",
    body: "Secure server-side requests and manage API credentials across environments.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/authentication",
  },
  {
    title: "Resource Files",
    body: "Review software-resource formats, import behavior, and localized export requirements.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/software-resource-files",
  },
  {
    title: "Translation Keys and Locales",
    body: "Manage source strings, locale values, metadata, context, and workflow state.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/translation-keys",
  },
  {
    title: "Webhooks and Events",
    body: "Respond to resource, translation, review, QA, build, and export events.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/webhooks-and-events",
  },
  {
    title: "Errors and Request IDs",
    body: "Diagnose failed requests and build reliable retry and tracing behavior.",
    href: "https://www.stepes.com/developers/translation-api/reference/#tag/errors",
  },
  {
    title: "Changelog",
    body: "Track additions, improvements, changes, and deprecations across the Stepes API.",
    href: "https://www.stepes.com/developers/translation-api/changelog/",
  },
];

const FAQS = [
  {
    question: "What is the difference between a Translation API and a Software Localization API?",
    answer:
      "A Translation API is a general-purpose interface for submitting text, documents, files, and business content to a translation workflow. A Software Localization API is designed around software projects, resource files, translation keys, strings, locales, branches, contextual metadata, reviews, and localized builds. Use the Translation API for broad translation automation and the Software Localization API for continuous, release-driven product localization.",
  },
  {
    question: "Can the API support continuous localization?",
    answer:
      "Yes. Development systems can synchronize changed resources, start localization workflows, monitor progress, respond to webhook events, and retrieve approved localized files so localization can operate alongside development rather than after it.",
  },
  {
    question: "Can we localize only new or modified strings?",
    answer:
      "Yes. Change-based synchronization identifies new keys and modified source strings while preserving approved translations for unchanged content. Workflow rules determine whether affected translations should be retained, reviewed, regenerated, or fully retranslated.",
  },
  {
    question: "Which software localization file formats are supported?",
    answer:
      "Representative formats include JSON, YAML, Android XML, Apple strings resources, XLIFF, RESX, Java properties, PO, POT, ARB, CSV, TSV, and XML. The file-format documentation provides the latest supported formats and processing requirements.",
  },
  {
    question: "How does the API protect variables and placeholders?",
    answer:
      "Placeholder definitions remain associated with each software string. Automated QA identifies missing, added, modified, reordered, or incorrectly structured variables before translations are approved or included in a build.",
  },
  {
    question: "Does the API support plural forms and ICU messages?",
    answer:
      "Yes. Software strings can preserve plural and select structures required by the application and target locale. Quality checks confirm that required language-specific variants remain complete and technically valid.",
  },
  {
    question: "Can we attach screenshots or context to strings?",
    answer:
      "Yes. Strings can include screenshots, developer comments, key names, source references, character limits, component details, and other contextual metadata so linguists understand meaning, function, and interface location.",
  },
  {
    question: "Can translations receive professional human review?",
    answer:
      "Yes. Workflows can combine translation memory, terminology-guided AI translation, professional post-editing, linguistic review, subject-matter validation, and product-team approval based on content type, visibility, risk, and target market.",
  },
  {
    question: "How are localized resources returned?",
    answer:
      "Approved translations can be compiled into localized resource files or builds that preserve file names, directory structures, keys, locale mappings, placeholders, and technical syntax. Applications can retrieve completed packages or respond to export-ready events.",
  },
  {
    question: "Can the API integrate with GitHub, GitLab, or Bitbucket?",
    answer:
      "Software-localization workflows can connect with common source-control environments through supported repository integrations or direct API-based automation. Teams can synchronize resources, maintain branch relationships, and return localized files through commit or pull-request workflows.",
  },
  {
    question: "Can we integrate localization into CI/CD?",
    answer:
      "Yes. CI/CD pipelines can detect resource changes, synchronize strings, check translation readiness, retrieve approved builds, and initiate localized testing or deployment.",
  },
  {
    question: "Is the API suitable for regulated software?",
    answer:
      "Yes. Stepes supports structured translation, professional review, terminology governance, automated QA, approval controls, access management, and auditability. Workflows can be configured according to content risk, regulatory requirements, and validation needs.",
  },
  {
    question: "Does the Software Localization API use the same authentication as the Translation API?",
    answer:
      "Yes. Both products share a consistent Stepes developer foundation, including versioning, bearer authentication, request IDs, errors, environments, and webhook conventions.",
  },
  {
    question: "Where can developers find endpoint documentation?",
    answer:
      "Complete technical definitions are available in the Stepes API Reference under the Software Localization endpoint group.",
  },
];

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 23 }) {
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
  };

  const paths = {
    key: <><circle cx="8" cy="15" r="4" /><path d="M11 12l8-8M16 7l2 2M14 9l2 2" /></>,
    comment: <><path d="M4 5h16v11H9l-5 4V5z" /><path d="M8 9h8M8 12h5" /></>,
    image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="9" r="1.5" /><path d="M4 17l5-5 4 4 2-2 5 5" /></>,
    measure: <><path d="M4 18L18 4l2 2L6 20H4v-2z" /><path d="M14 8l2 2M11 11l2 2M8 14l2 2" /></>,
    code: <><path d="M8 9l-3 3 3 3M16 9l3 3-3 3M14 6l-4 12" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></>,
    cloud: <><path d="M7 18h10a4 4 0 00.5-8A6 6 0 006 8.5 4.5 4.5 0 007 18z" /></>,
    mobile: <><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M10 5h4M11 19h2" /></>,
    building: <><path d="M4 21V7l8-4 8 4v14M8 10h2M14 10h2M8 14h2M14 14h2M10 21v-3h4v3" /></>,
    chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3M10 10h4v4h-4z" /></>,
    game: <><path d="M8 8h8a5 5 0 014.7 6.7l-1 3a2 2 0 01-3.4.8L14 16h-4l-2.3 2.5a2 2 0 01-3.4-.8l-1-3A5 5 0 018 8z" /><path d="M8 11v4M6 13h4M16 12h.01M18 14h.01" /></>,
    shield: <><path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3z" /><path d="M9 12l2 2 4-4" /></>,
    repo: <><path d="M5 4h10a2 2 0 012 2v14H7a2 2 0 01-2-2V4z" /><path d="M7 17h10M9 8h4M9 11h5" /></>,
    sync: <><path d="M20 7h-5V2M4 17h5v5M19 11a7 7 0 00-12-4L4 10M5 13a7 7 0 0012 4l3-3" /></>,
    bot: <><rect x="5" y="7" width="14" height="11" rx="3" /><path d="M9 11h.01M15 11h.01M9 15h6M12 7V4M10 4h4" /></>,
    check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
    webhook: <><circle cx="7" cy="7" r="3" /><circle cx="17" cy="7" r="3" /><circle cx="12" cy="17" r="3" /><path d="M9.5 8.5l1.5 5M14.5 8.5l-1.5 5M10 7h4" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 018 0v3M12 14v2" /></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`sla-eyebrow${dark ? " sla-eyebrow-dark" : ""}`}>{children}</div>;
}

function TextLink({ href, children, className = "" }) {
  return (
    <a className={`sla-text-link ${className}`} href={href}>
      <span>{children}</span>
      <ArrowIcon size={15} />
    </a>
  );
}

function FaqItem({ item, index, openIndex, setOpenIndex }) {
  const open = openIndex === index;
  return (
    <div className={`sla-faq-item${open ? " is-open" : ""}`}>
      <button
        className="sla-faq-button"
        type="button"
        aria-expanded={open}
        aria-controls={`sla-faq-panel-${index}`}
        onClick={() => setOpenIndex(open ? -1 : index)}
      >
        <span>{item.question}</span>
        <span className="sla-faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        id={`sla-faq-panel-${index}`}
        className="sla-faq-panel"
        hidden={!open}
      >
        <p>{item.answer}</p>
        {index === FAQS.length - 1 && (
          <TextLink href="https://www.stepes.com/developers/translation-api/reference/#tag/software-localization">
            Explore API Reference
          </TextLink>
        )}
      </div>
    </div>
  );
}

export default function StepesSoftwareLocalizationApiHubWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sla-page">
      <style>{styles}</style>

      <section className="sla-hero" aria-labelledby="sla-page-title">
        <div className="sla-shell sla-hero-inner">
          <div className="sla-hero-copy">
            <Eyebrow>Software Localization API</Eyebrow>
            <h1 id="sla-page-title">Automate Software Localization Across Every Release</h1>
            <p className="sla-hero-lead">
              Connect Stepes directly to your software development workflow. Synchronize resource files and translation keys, localize new and updated strings, apply product terminology and contextual guidance, coordinate AI and professional human review, and return release-ready localized content through one enterprise API.
            </p>
            <p className="sla-hero-secondary">
              Move localization from a manual handoff at the end of development to a continuous process that operates alongside every product release.
            </p>
            <div className="sla-hero-actions">
              <a className="sla-button sla-button-primary" href="https://www.stepes.com/developers/software-localization-api/getting-started/">
                <span>View Getting Started</span>
                <ArrowIcon />
              </a>
              <a className="sla-button sla-button-secondary" href="https://www.stepes.com/developers/translation-api/reference/#tag/software-localization">
                <span>Explore API Reference</span>
                <ArrowIcon />
              </a>
            </div>
            <TextLink href="https://www.stepes.com/contact-us/" className="sla-hero-text-link">
              Talk to an Expert
            </TextLink>
          </div>

          <div className="sla-hero-visual" aria-label="Continuous software localization workflow illustration">
            <div className="sla-visual-topbar">
              <span className="sla-window-dot" />
              <span className="sla-window-dot" />
              <span className="sla-window-dot" />
              <span className="sla-visual-title">release/global-launch</span>
            </div>
            <div className="sla-flow-grid">
              <div className="sla-flow-node sla-flow-source">
                <div className="sla-icon-box"><Icon name="repo" /></div>
                <div>
                  <strong>Repository</strong>
                  <span>42 strings changed</span>
                </div>
              </div>
              <div className="sla-flow-arrow" aria-hidden="true"><ArrowIcon size={19} /></div>
              <div className="sla-flow-node sla-flow-active">
                <div className="sla-icon-box"><Icon name="sync" /></div>
                <div>
                  <strong>Stepes API</strong>
                  <span>Resources synchronized</span>
                </div>
              </div>
              <div className="sla-flow-arrow" aria-hidden="true"><ArrowIcon size={19} /></div>
              <div className="sla-flow-node">
                <div className="sla-icon-box"><Icon name="bot" /></div>
                <div>
                  <strong>AI + Human</strong>
                  <span>12 locales in review</span>
                </div>
              </div>
              <div className="sla-flow-arrow" aria-hidden="true"><ArrowIcon size={19} /></div>
              <div className="sla-flow-node">
                <div className="sla-icon-box"><Icon name="check" /></div>
                <div>
                  <strong>Localized Build</strong>
                  <span>Release ready</span>
                </div>
              </div>
            </div>
            <div className="sla-preview-panel">
              <div className="sla-preview-header">
                <div>
                  <span className="sla-ui-label">Selected Key</span>
                  <strong>account.security.reset_password_button</strong>
                </div>
                <span className="sla-status">Approved</span>
              </div>
              <div className="sla-preview-columns">
                <div>
                  <span className="sla-ui-label">Source · en-US</span>
                  <p>Reset password</p>
                </div>
                <div>
                  <span className="sla-ui-label">French · fr-FR</span>
                  <p>Réinitialiser le mot de passe</p>
                </div>
              </div>
              <div className="sla-preview-meta">
                <span>TM matched</span>
                <span>Terminology applied</span>
                <span>Placeholder check passed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sla-proof" aria-label="Enterprise software localization proof points">
        <div className="sla-shell sla-proof-grid">
          {[
            ["Enterprise API", "Built for connected localization operations"],
            ["100+ Languages", "Global product coverage"],
            ["AI + Human Workflows", "Automation with expert review"],
            ["ISO-Certified Quality", "Structured quality management"],
            ["Secure Operations", "Governed access and delivery"],
          ].map(([title, body]) => (
            <div className="sla-proof-item" key={title}>
              <strong>{title}</strong>
              <span>{body}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sla-section sla-overview" aria-labelledby="sla-what-is-title">
        <div className="sla-shell sla-split-intro">
          <div>
            <Eyebrow>Software-Aware Automation</Eyebrow>
            <h2 id="sla-what-is-title">What Is a Software Localization API?</h2>
          </div>
          <div className="sla-overview-copy">
            <p className="sla-intro">
              A software localization API connects software development systems directly to the workflows used to translate, review, validate, and deliver localized product content.
            </p>
            <p>
              Instead of manually exporting language files, sending spreadsheets, consolidating feedback, and importing translations before each release, development teams can manage localization programmatically. Applications and automation pipelines can synchronize resource files, create or update translation keys, assign target locales, submit changed content for localization, monitor progress, and retrieve approved language resources.
            </p>
            <p>
              A software localization API also preserves the technical relationships ordinary text translation can lose, including file structures, keys, variables, placeholders, plural variants, markup, character limits, screenshots, branch relationships, terminology, and review status.
            </p>
          </div>
        </div>
        <div className="sla-shell sla-definition-band">
          <div>
            <h3>From Translation Requests to Continuous Product Localization</h3>
            <p>
              A general Translation API sends documents, files, text, and business content into a translation workflow. A Software Localization API is designed around recurring development cycles and the software objects required to deliver technically valid, contextually accurate, deployment-ready language resources.
            </p>
          </div>
          <div className="sla-definition-tags" aria-label="Software localization objects">
            {[
              "Projects",
              "Resource Files",
              "Translation Keys",
              "Locales",
              "Branches",
              "Review States",
              "Localized Builds",
            ].map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </section>

      <section className="sla-section sla-tint" aria-labelledby="sla-compare-title">
        <div className="sla-shell">
          <div className="sla-section-head sla-section-head-centered">
            <Eyebrow>Choose the Right Developer Solution</Eyebrow>
            <h2 id="sla-compare-title">Translation API or Software Localization API?</h2>
            <p>
              Stepes provides distinct developer solutions for general translation automation and continuous product localization. The right choice depends on the content, workflow, and delivery model your systems need to support.
            </p>
          </div>

          <div className="sla-comparison-wrap" role="region" aria-label="Translation API and Software Localization API comparison">
            <table className="sla-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Requirement</th>
                  <th scope="col">Translation API</th>
                  <th scope="col">Software Localization API</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Translate documents, files, or business content", "Primary use case", "Used when connected to software workflows"],
                  ["Create and manage translation projects", "Yes", "Through software-specific projects and jobs"],
                  ["Synchronize translation keys", "Not the primary model", "Core capability"],
                  ["Preserve resource-file structure", "File dependent", "Core capability"],
                  ["Associate screenshots and UI context", "General project instructions", "String-level and component-level context"],
                  ["Validate variables, placeholders, and plurals", "General content validation", "Software-specific validation"],
                  ["Connect repositories and CI/CD", "Custom integration", "Primary integration model"],
                  ["Manage branches and releases", "Not the primary model", "Designed for release-driven localization"],
                  ["Return localized software bundles", "Possible for submitted files", "Primary output"],
                  ["Coordinate professional human review", "Yes", "Yes, with software-specific workflow routing"],
                ].map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">{row[0]}</th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sla-choice-row">
            <div className="sla-choice-item">
              <span className="sla-choice-label">Documents and Enterprise Content</span>
              <h3>Use the Translation API</h3>
              <p>Submit documents, text, and managed translation projects; automate enterprise content workflows; and retrieve completed results.</p>
              <TextLink href="https://www.stepes.com/developers/translation-api/">Explore the Translation API</TextLink>
            </div>
            <div className="sla-choice-item sla-choice-selected">
              <span className="sla-choice-label">Software Strings and Releases</span>
              <h3>Use the Software Localization API</h3>
              <p>Synchronize software resources, preserve technical structures, manage branches and locales, and generate release-ready localized files.</p>
              <TextLink href="https://www.stepes.com/developers/software-localization-api/getting-started/">View Getting Started</TextLink>
            </div>
            <div className="sla-choice-item">
              <span className="sla-choice-label">Managed Engineering and Testing</span>
              <h3>Use Software Localization Services</h3>
              <p>Add localization engineering, in-context linguistic testing, internationalization support, and end-to-end delivery for complex software programs.</p>
              <TextLink href="https://www.stepes.com/software-localization-services/">Explore Software Localization Services</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-workflow-title">
        <div className="sla-shell">
          <div className="sla-section-head">
            <Eyebrow>Continuous Localization Workflow</Eyebrow>
            <h2 id="sla-workflow-title">Build Localization Into Your Software Delivery Lifecycle</h2>
            <p>
              Continuous localization lets translated content progress alongside product development instead of waiting for a separate phase after engineering is complete.
            </p>
          </div>
          <div className="sla-workflow">
            {STEPS.map((step, index) => (
              <article className="sla-workflow-step" key={step.number}>
                <div className="sla-step-top">
                  <span className="sla-step-number">{step.number}</span>
                  {index < STEPS.length - 1 && <span className="sla-step-rule" aria-hidden="true" />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section sla-dark" aria-labelledby="sla-resource-title">
        <div className="sla-shell">
          <div className="sla-dark-head">
            <div>
              <Eyebrow dark>Software Resource Model</Eyebrow>
              <h2 id="sla-resource-title">Manage the Objects Software Teams Actually Use</h2>
            </div>
            <p>
              The Stepes Software Localization API uses a software-specific model built for structured content, recurring updates, controlled review, and multilingual releases.
            </p>
          </div>
          <div className="sla-resource-model" aria-label="Software localization resource model">
            {["Project", "Branch", "Resource File", "Translation Key", "Locale Translation", "Review State", "Localized Build"].map((item, index, array) => (
              <div className={`sla-resource-node${index < array.length - 1 ? " has-next" : ""}`} key={item}>
                <span>{item}</span>
                {index < array.length - 1 && <span className="sla-resource-connector" aria-hidden="true"><ArrowIcon size={16} /></span>}
              </div>
            ))}
          </div>
          <div className="sla-resource-grid">
            {RESOURCE_OBJECTS.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-integrate-title">
        <div className="sla-shell sla-integrations-layout">
          <div className="sla-integrations-copy">
            <Eyebrow>Repositories and CI/CD</Eyebrow>
            <h2 id="sla-integrate-title">Integrate Localization With the Tools Your Developers Already Use</h2>
            <p className="sla-intro">
              Software localization should operate within the development environment, not require engineers to step outside it for every update.
            </p>
            <div className="sla-divided-list">
              <div>
                <h3>Connect Source-Control Workflows</h3>
                <p>Import source resources, map branches, detect changed files, push approved localized files, and support commit or pull-request delivery across common repository workflows.</p>
              </div>
              <div>
                <h3>Add Localization to CI/CD</h3>
                <p>Trigger localization after resource changes, check locale readiness, validate required translations, retrieve approved builds, and continue automated testing or deployment.</p>
              </div>
              <div>
                <h3>Build on a Consistent Developer Foundation</h3>
                <p>Use shared Stepes conventions for versioning, authentication, request IDs, environments, errors, and event handling across translation and software-localization workflows.</p>
              </div>
            </div>
          </div>

          <div className="sla-code-panel" aria-label="Stepes API foundation configuration example">
            <div className="sla-code-tabs">
              <span className="is-active">API Foundation</span>
              <span>Sandbox</span>
              <span>Production</span>
            </div>
            <pre><code>{`const stepes = {
  version: "v2",
  production: "https://api.stepes.com/v2",
  sandbox: "https://api.sandbox.stepes.com/v2",
  headers: {
    Authorization: "Bearer YOUR_STEPES_API_KEY",
    "Content-Type": "application/json"
  }
};`}</code></pre>
            <div className="sla-code-meta">
              <div>
                <span className="sla-ui-label">API Platform</span>
                <strong>Stepes API 2.1</strong>
              </div>
              <div>
                <span className="sla-ui-label">Public Major Version</span>
                <strong>v2</strong>
              </div>
              <div>
                <span className="sla-ui-label">Authentication</span>
                <strong>Bearer API Key</strong>
              </div>
            </div>
            <TextLink href="https://www.stepes.com/developers/translation-api/reference/#tag/authentication">
              Review Authentication
            </TextLink>
          </div>
        </div>
      </section>

      <section className="sla-section sla-tint" aria-labelledby="sla-delta-title">
        <div className="sla-shell sla-delta-layout">
          <div className="sla-delta-visual" aria-label="Change-based localization illustration">
            <div className="sla-delta-file-header">
              <div>
                <span className="sla-ui-label">Resource Update</span>
                <strong>account-security.json</strong>
              </div>
              <span className="sla-status sla-status-neutral">42 changes</span>
            </div>
            {[
              ["+", "password_requirements", "New string", "needs localization"],
              ["~", "reset_password_success", "Source updated", "review required"],
              ["=", "two_factor_auth", "Unchanged", "approved translations retained"],
              ["−", "legacy_security_question", "Removed", "archived"],
            ].map(([symbol, key, state, detail]) => (
              <div className={`sla-delta-row sla-delta-${symbol === "+" ? "add" : symbol === "~" ? "change" : symbol === "−" ? "remove" : "same"}`} key={key}>
                <span className="sla-delta-symbol">{symbol}</span>
                <div>
                  <strong>{key}</strong>
                  <span>{state} · {detail}</span>
                </div>
              </div>
            ))}
            <div className="sla-delta-summary">
              <span><strong>2</strong> require localization</span>
              <span><strong>1</strong> retained</span>
              <span><strong>1</strong> archived</span>
            </div>
          </div>

          <div className="sla-delta-copy">
            <Eyebrow>Change-Based Synchronization</Eyebrow>
            <h2 id="sla-delta-title">Localize New and Updated Strings Without Reprocessing Everything</h2>
            <p className="sla-intro">
              Software changes incrementally. Your localization workflow should do the same.
            </p>
            <p>
              The API identifies added keys and modified source content, preserves approved translations for unchanged strings, reuses translation memory, and manages removed keys according to project policy.
            </p>
            <ul className="sla-check-list">
              <li>Reduce duplicated translation work</li>
              <li>Preserve approved content across releases</li>
              <li>Shorten localization cycles</li>
              <li>Minimize manual file reconciliation</li>
              <li>Improve release predictability</li>
              <li>Control localization costs</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-context-title">
        <div className="sla-shell">
          <div className="sla-section-head sla-section-head-centered">
            <Eyebrow>Context-Aware Translation</Eyebrow>
            <h2 id="sla-context-title">Improve Translation Accuracy With String-Level Context</h2>
            <p>
              A short software string can have several meanings when viewed by itself. Context helps linguists understand what the string means, where it appears, and how it must behave in the interface.
            </p>
          </div>
          <div className="sla-context-grid">
            {CONTEXT_ITEMS.map((item) => (
              <article className="sla-context-item" key={item.title}>
                <div className="sla-icon-box sla-icon-box-light"><Icon name={item.icon} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="sla-placeholder-band">
            <div>
              <span className="sla-ui-label">Protected Runtime Values</span>
              <div className="sla-code-chips">
                {["{username}", "%1$s", "{{count}}", "{0}", "${total}"].map((item) => <code key={item}>{item}</code>)}
              </div>
            </div>
            <div>
              <h3>Protect the Code. Translate the Experience.</h3>
              <p>Stepes keeps variables and syntax intact while linguists translate the surrounding user-facing content.</p>
              <TextLink href="https://www.stepes.com/terminology-management/">Explore Terminology Management</TextLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sla-section sla-ai-section" aria-labelledby="sla-ai-title">
        <div className="sla-shell sla-ai-layout">
          <div className="sla-ai-copy">
            <Eyebrow>AI + Professional Review</Eyebrow>
            <h2 id="sla-ai-title">Apply the Right Level of Review to Every Software String</h2>
            <p className="sla-intro">
              An internal diagnostic message, a customer-facing checkout button, a legal disclosure, and a medical-device warning carry different levels of visibility and risk.
            </p>
            <p>
              Stepes lets organizations combine automation and professional linguistic expertise according to each content category, market, and release requirement.
            </p>
            <TextLink href="https://www.stepes.com/ai-human-translation-workflow/">Explore AI + Human Translation Workflows</TextLink>
          </div>
          <div className="sla-routing-panel">
            <div className="sla-routing-row">
              <span className="sla-routing-marker">TM</span>
              <div>
                <h3>Approved Translation Memory First</h3>
                <p>Reuse validated product language across platforms, modules, versions, and markets.</p>
              </div>
            </div>
            <div className="sla-routing-row">
              <span className="sla-routing-marker">AI</span>
              <div>
                <h3>Terminology-Guided AI Translation</h3>
                <p>Generate context-aware first-pass translations using approved terminology, prior translations, locale requirements, and string metadata.</p>
              </div>
            </div>
            <div className="sla-routing-row">
              <span className="sla-routing-marker">R</span>
              <div>
                <h3>Risk-Based Workflow Routing</h3>
                <p>Route content according to product visibility, string type, target market, confidence level, regulatory importance, and customer-defined rules.</p>
              </div>
            </div>
            <div className="sla-routing-row">
              <span className="sla-routing-marker">H</span>
              <div>
                <h3>Professional Linguistic Review</h3>
                <p>Add native linguists, subject-matter specialists, in-country reviewers, and product approvers when human validation is required.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-qa-title">
        <div className="sla-shell">
          <div className="sla-section-head">
            <Eyebrow>Software-Specific Quality Assurance</Eyebrow>
            <h2 id="sla-qa-title">Prevent Localization Defects Before Release</h2>
            <p>
              A translation can be linguistically correct and still cause a software defect. Stepes validates the technical and linguistic details required to keep localized resources usable, complete, and release ready.
            </p>
          </div>
          <div className="sla-qa-layout">
            <div className="sla-qa-grid">
              {QA_ITEMS.map(([title, body]) => (
                <article className="sla-qa-item" key={title}>
                  <span className="sla-qa-check"><Icon name="check" size={20} /></span>
                  <div>
                    <h3>{title}</h3>
                    <p>{body}</p>
                  </div>
                </article>
              ))}
            </div>
            <aside className="sla-qa-summary">
              <Eyebrow>Release Gate</Eyebrow>
              <h3>Only Approved, Validated Content Enters the Build</h3>
              <p>
                Workflow controls can prevent strings from entering an approved localization package until required reviews, automated checks, and stakeholder approvals are complete.
              </p>
              <div className="sla-qa-score">
                <div>
                  <span className="sla-ui-label">Locale Readiness</span>
                  <strong>12 of 12</strong>
                </div>
                <div>
                  <span className="sla-ui-label">Critical QA Issues</span>
                  <strong>0</strong>
                </div>
                <div>
                  <span className="sla-ui-label">Build Status</span>
                  <strong>Release ready</strong>
                </div>
              </div>
              <TextLink href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</TextLink>
            </aside>
          </div>
        </div>
      </section>

      <section className="sla-section sla-tint" aria-labelledby="sla-formats-title">
        <div className="sla-shell sla-formats-layout">
          <div>
            <Eyebrow>File Formats and Platforms</Eyebrow>
            <h2 id="sla-formats-title">Support the Resource Formats Your Teams Already Use</h2>
            <p className="sla-intro">
              Localize structured resources across web, mobile, desktop, cloud, embedded, gaming, and cross-platform development environments.
            </p>
            <div className="sla-platform-list">
              {["Web Applications", "iOS and macOS", "Android", "Desktop Software", "SaaS and Cloud", "Embedded Interfaces", "Games", "Regulated Software"].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <TextLink href="https://www.stepes.com/file-formats/">View Supported File Formats</TextLink>
          </div>
          <div className="sla-format-table-wrap" role="region" aria-label="Representative software localization file formats">
            <table className="sla-format-table">
              <thead>
                <tr>
                  <th scope="col">Development Ecosystem</th>
                  <th scope="col">Representative Formats</th>
                </tr>
              </thead>
              <tbody>
                {FILE_FORMATS.map(([ecosystem, formats]) => (
                  <tr key={ecosystem}>
                    <th scope="row">{ecosystem}</th>
                    <td>{formats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="sla-section sla-events-dark" aria-labelledby="sla-events-title">
        <div className="sla-shell sla-events-layout">
          <div>
            <Eyebrow dark>Webhooks and Events</Eyebrow>
            <h2 id="sla-events-title">Keep Every System Updated With Localization Events</h2>
            <p className="sla-intro">
              Resource imports, translation, review, QA, builds, testing, and deployment often happen asynchronously. Webhooks let connected systems respond when meaningful localization events occur.
            </p>
            <ul className="sla-event-principles">
              <li>Typed events with unique identifiers</li>
              <li>Signed HMAC-SHA-256 payloads</li>
              <li>Retry behavior and idempotent processing</li>
              <li>Delivery timestamps and request tracing</li>
              <li>CloudEvents-structured JSON</li>
              <li>AsyncAPI event contract and OpenAPI request definitions</li>
            </ul>
            <TextLink href="https://www.stepes.com/developers/translation-api/reference/#tag/webhooks-and-events" className="sla-text-link-on-dark">
              Explore Webhooks and Events
            </TextLink>
          </div>
          <div className="sla-event-stream" aria-label="Representative software localization events">
            {[
              ["resource.file.imported", "Resource synchronized", "10:42:18"],
              ["source.string.changed", "Review routing started", "10:42:21"],
              ["translation.completed", "12 locales translated", "11:09:04"],
              ["qa.issue.detected", "Placeholder mismatch flagged", "11:18:37"],
              ["translation.approved", "Product approval complete", "11:32:55"],
              ["build.generated", "Localized package ready", "11:35:10"],
            ].map(([event, description, time], index) => (
              <div className="sla-event-row" key={event}>
                <span className={`sla-event-dot${index === 5 ? " is-final" : ""}`} />
                <div>
                  <code>{event}</code>
                  <span>{description}</span>
                </div>
                <time>{time}</time>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-security-title">
        <div className="sla-shell">
          <div className="sla-security-intro">
            <div>
              <h2 id="sla-security-title">Enterprise Controls for Business-Critical Software</h2>
            </div>
            <p>
              Software resource files may contain unreleased product information, proprietary terminology, feature names, user-interface logic, and other sensitive business content. Stepes provides the operational controls required to govern localization across products, teams, and environments.
            </p>
          </div>
          <div className="sla-security-matrix">
            {[
              ["Server-Side Authentication", "Protect API keys and keep credentials out of client-side code, public repositories, mobile applications, and browser-delivered scripts."],
              ["Scoped Access", "Limit integrations to the projects, environments, locales, and actions they require."],
              ["Role-Based Permissions", "Separate developer, linguist, reviewer, product approver, administrator, and read-only responsibilities."],
              ["Encryption", "Protect localization data while it is transmitted and stored."],
              ["Auditability", "Record imports, source changes, translation revisions, reviews, approvals, QA outcomes, builds, exports, and administrative actions."],
              ["Environment Separation", "Keep sandbox, development, staging, and production workflows distinct."],
              ["Credential Management", "Rotate and revoke credentials, separate integration identities, and avoid personal credentials for production automation."],
              ["Data Governance", "Support organizational policies for retention, deletion, regional processing, access, and regulatory obligations."],
            ].map(([title, body]) => (
              <article className="sla-security-item" key={title}>
                <span className="sla-security-marker" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="sla-inline-links">
            <TextLink href="https://www.stepes.com/security/">Explore Enterprise Security</TextLink>
            <TextLink href="https://www.stepes.com/iso-certifications/">View ISO Certifications</TextLink>
          </div>
        </div>
      </section>

      <section className="sla-section sla-tint" aria-labelledby="sla-use-cases-title">
        <div className="sla-shell">
          <div className="sla-section-head sla-section-head-centered">
            <h2 id="sla-use-cases-title">Built for Every Type of Software Product</h2>
            <p>
              Apply the same connected localization foundation across digital products, enterprise systems, applications, devices, games, and regulated software environments.
            </p>
          </div>
          <div className="sla-use-case-grid">
            {USE_CASES.map((item) => (
              <article className="sla-use-case" key={item.title}>
                <div className="sla-use-case-icon"><Icon name={item.icon} size={25} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-practice-title">
        <div className="sla-shell sla-practice-layout">
          <div className="sla-practice-copy">
            <Eyebrow>Localization in Practice</Eyebrow>
            <h2 id="sla-practice-title">A Typical Continuous Localization Workflow</h2>
            <p className="sla-intro">
              Consider a SaaS company preparing a multilingual release after its development team adds new account-security settings and updates several interface messages.
            </p>
            <p>
              The updated resource files are committed to a feature branch. The localization pipeline then detects the changes, synchronizes affected keys, preserves approved translations, applies terminology and translation memory, routes sensitive strings to professional review, validates the localized resources, and generates files for testing.
            </p>
          </div>
          <div className="sla-practice-phases" aria-label="Typical continuous localization workflow phases">
            {[
              {
                label: "Commit",
                title: "Detect and Synchronize",
                body: "Detect modified resource files, synchronize new and changed translation keys, preserve approved translations for unchanged strings, and attach the developer comments and screenshots needed for context.",
              },
              {
                label: "Localize",
                title: "Translate, Review, and Validate",
                body: "Apply translation memory and approved terminology, use AI translation for eligible content, route sensitive strings to professional reviewers, and validate placeholders, markup, length, and locale completeness.",
              },
              {
                label: "Release",
                title: "Build and Return",
                body: "Generate approved localized resources for testing, return them to the development workflow, and preserve the translation, QA, review, and delivery history for the release.",
              },
            ].map((phase) => (
              <article className="sla-practice-phase" key={phase.label}>
                <span>{phase.label}</span>
                <h3>{phase.title}</h3>
                <p>{phase.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section sla-start-section" aria-labelledby="sla-start-title">
        <div className="sla-shell">
          <div className="sla-start-head">
            <div>
              <Eyebrow>Developer Onboarding</Eyebrow>
              <h2 id="sla-start-title">Start Your First Software Localization Workflow</h2>
            </div>
            <p>
              Begin with a straightforward integration path, then extend the same foundation to complex enterprise localization programs.
            </p>
          </div>
          <div className="sla-start-grid">
            {[
              ["Request API Access", "Create approved credentials for your Stepes account and select the appropriate environment."],
              ["Review Authentication", "Configure your server-side application to use bearer authentication with the sandbox or production API."],
              ["Create a Project", "Define source and target locales, resource structure, workflow, terminology, and review requirements."],
              ["Synchronize Resources", "Upload or connect a supported software resource and create the corresponding translation keys."],
              ["Start Localization", "Submit selected files, branches, keys, or changed strings to the required locales and workflow."],
              ["Monitor and Deliver", "Track translation and review, respond to events, generate a localized build, and retrieve deployment-ready files."],
            ].map(([title, body], index) => (
              <article className="sla-start-item" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
          <div className="sla-start-actions">
            <a className="sla-button sla-button-primary" href="https://www.stepes.com/developers/software-localization-api/getting-started/">
              <span>Follow the Getting Started Guide</span>
              <ArrowIcon />
            </a>
            <TextLink href="https://www.stepes.com/developers/translation-api/reference/#tag/software-localization">
              Explore the Software Localization API Reference
            </TextLink>
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-why-title">
        <div className="sla-shell">
          <div className="sla-section-head">
            <Eyebrow>Why Stepes</Eyebrow>
            <h2 id="sla-why-title">One Localization API, From Automation to Expert Review</h2>
            <p>
              Stepes combines a developer-focused software localization model with the linguistic, quality, and enterprise capabilities required to move products into global markets.
            </p>
          </div>
          <div className="sla-why-rows">
            {[
              ["Software-Specific Localization Workflows", "Work with projects, branches, files, keys, strings, locales, reviews, and localized builds instead of disconnected text."],
              ["AI and Professional Linguists in One Workflow", "Automate eligible content while retaining expert review for important, customer-facing, technical, or regulated strings."],
              ["Translation Memory and Terminology", "Reuse approved translations and maintain consistent product language across platforms, modules, releases, and markets."],
              ["Technical Quality Assurance", "Validate placeholders, plurals, tags, markup, resource completeness, character limits, and other software-specific requirements."],
              ["Enterprise Governance", "Control access, workflow routing, approvals, environments, audit records, and delivery across global teams."],
              ["Managed Localization Support", "Supplement API automation with localization engineering, testing, project management, in-country review, and professional translation."],
            ].map(([title, body]) => (
              <article className="sla-why-row" key={title}>
                <span className="sla-why-marker" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section sla-resources-section" aria-labelledby="sla-resources-title">
        <div className="sla-shell">
          <div className="sla-section-head sla-section-head-centered">
            <h2 id="sla-resources-title">Build With the Stepes Software Localization API</h2>
            <p>
              Move from product evaluation to implementation with technical guidance, reference definitions, event documentation, and operational resources.
            </p>
          </div>
          <div className="sla-resource-links">
            {RESOURCES.map((item) => (
              <a className="sla-resource-link" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <span className="sla-resource-arrow"><ArrowIcon size={18} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sla-section" aria-labelledby="sla-faq-title">
        <div className="sla-shell sla-faq-layout">
          <div className="sla-faq-intro">
            <h2 id="sla-faq-title">Software Localization API FAQ</h2>
            <p>
              Review common questions about continuous localization, software resource formats, workflow automation, technical QA, review, and API integration.
            </p>
          </div>
          <div className="sla-faq-list">
            {FAQS.map((item, index) => (
              <FaqItem
                key={item.question}
                item={item}
                index={index}
                openIndex={openFaq}
                setOpenIndex={setOpenFaq}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="sla-final-cta" aria-labelledby="sla-final-title">
        <div className="sla-shell">
          <div className="sla-final-panel">
            <div>
              <Eyebrow>Software Localization API</Eyebrow>
              <h2 id="sla-final-title">Build Localization Into Your Next Release</h2>
              <p>
                Connect your development workflow to Stepes and automate software localization from resource synchronization through translation, professional review, quality assurance, and release-ready delivery.
              </p>
            </div>
            <div className="sla-final-actions">
              <a className="sla-button sla-button-primary" href="https://www.stepes.com/developers/software-localization-api/getting-started/">
                <span>View Getting Started</span>
                <ArrowIcon />
              </a>
              <a className="sla-button sla-button-secondary" href="https://www.stepes.com/contact-us/">
                <span>Talk to an Expert</span>
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --sla-magenta: #c11d63;
    --sla-magenta-dark: #9f1d55;
    --sla-magenta-deep: #7a1542;
    --sla-blush: #fdf2f7;
    --sla-light-magenta: #f2a7c6;
    --sla-ink: #101426;
    --sla-body: #47546a;
    --sla-muted: #68758b;
    --sla-line: #dfe4ec;
    --sla-line-strong: #cfd6e1;
    --sla-surface: #ffffff;
    --sla-surface-soft: #f7f8fb;
    --sla-dark: #101526;
    --sla-dark-2: #171d31;
    --sla-dark-text: #d9deea;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  .sla-page section, .sla-page div, .sla-page article, .sla-page aside { min-width: 0; }
  body { margin: 0; }

  .sla-page {
    width: 100%;
    overflow-x: clip;
    background: var(--sla-surface);
    color: var(--sla-ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .sla-page a { color: inherit; text-decoration: none; }
  .sla-page button, .sla-page a { -webkit-tap-highlight-color: transparent; }
  .sla-shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .sla-section { padding: 96px 0; }
  .sla-tint { background: var(--sla-surface-soft); }

  .sla-eyebrow {
    margin: 0 0 18px;
    color: var(--sla-magenta-dark);
    font-size: 11px;
    line-height: 1.4;
    font-weight: 600;
    letter-spacing: .17em;
    text-transform: uppercase;
  }
  .sla-eyebrow-dark { color: var(--sla-light-magenta); }

  .sla-page h1, .sla-page h2, .sla-page h3 {
    margin: 0;
    color: var(--sla-ink);
    font-weight: 600;
    letter-spacing: -.025em;
  }
  .sla-page h1 { font-size: 48px; line-height: 1.08; }
  .sla-page h2 { font-size: 36px; line-height: 1.14; }
  .sla-page h3 { font-size: 24px; line-height: 1.24; }
  .sla-page p, .sla-page li, .sla-page td, .sla-page th {
    font-size: 16px;
    line-height: 1.72;
  }
  .sla-page p { margin: 0; color: var(--sla-body); }
  .sla-intro { font-size: 18px !important; line-height: 1.68 !important; color: #344157 !important; }

  .sla-section-head { max-width: 820px; margin-bottom: 48px; }
  .sla-section-head h2 { margin-bottom: 20px; }
  .sla-section-head > p { max-width: 760px; }
  .sla-section-head-centered { margin-left: auto; margin-right: auto; text-align: center; }
  .sla-section-head-centered > p { margin: 0 auto; }

  .sla-button {
    min-height: 48px;
    text-align: center;
    padding: 13px 22px;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 600;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  }
  .sla-page .sla-button-primary,
  .sla-page .sla-button-primary:visited,
  .sla-page .sla-button-primary:hover,
  .sla-page .sla-button-primary:active,
  .sla-page .sla-button-primary:focus-visible {
    color: #ffffff;
  }
  .sla-page .sla-button-primary {
    background: var(--sla-magenta);
    box-shadow: 0 10px 26px rgba(193, 29, 99, .18);
  }
  .sla-page .sla-button-primary:hover { background: var(--sla-magenta-dark); transform: translateY(-1px); }
  .sla-page .sla-button-secondary { background: #ffffff; border-color: #d9dee7; color: var(--sla-ink); }
  .sla-page .sla-button-secondary:hover { border-color: #b7bfcd; transform: translateY(-1px); }
  .sla-button:focus-visible, .sla-text-link:focus-visible, .sla-resource-link:focus-visible, .sla-faq-button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .26);
    outline-offset: 3px;
  }

  .sla-page .sla-text-link {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--sla-magenta-dark);
    font-size: 16px;
    line-height: 1.4;
    font-weight: 600;
  }
  .sla-page .sla-text-link span { min-width: 0; overflow-wrap: anywhere; }
  .sla-page .sla-text-link svg { flex: 0 0 auto; transition: transform .2s ease; }
  .sla-page .sla-text-link:hover svg { transform: translateX(3px); }
  .sla-page .sla-text-link-on-dark { color: var(--sla-light-magenta); }

  .sla-hero { position: relative; overflow-x: clip; padding: 104px 0 94px; background: linear-gradient(180deg, #fff 0%, #fff 68%, #fafbfc 100%); }
  .sla-hero::after {
    content: "";
    position: absolute;
    width: min(420px, 100vw);
    height: min(420px, 100vw);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(193, 29, 99, .08) 0%, rgba(193, 29, 99, 0) 72%);
    right: 0;
    top: 0;
    pointer-events: none;
  }
  .sla-hero-inner { display: block; }
  .sla-hero-copy { position: relative; z-index: 1; max-width: 980px; margin: 0 auto 54px; text-align: center; }
  .sla-hero-copy h1 { max-width: 920px; margin: 0 auto 24px; }
  .sla-hero-lead { max-width: 860px; margin: 0 auto; font-size: 18px !important; line-height: 1.7 !important; color: #344157 !important; }
  .sla-hero-secondary { max-width: 780px; margin: 15px auto 0 !important; }
  .sla-hero-actions { display: flex; flex-wrap: wrap; justify-content: center; gap: 13px; margin-top: 32px; }
  .sla-hero-text-link { margin-top: 21px; }

  .sla-hero-visual {
    position: relative;
    z-index: 1;
    border: 1px solid #dbe0e8;
    border-radius: 28px;
    background: #ffffff;
    box-shadow: 0 26px 70px rgba(31, 38, 58, .12);
    overflow: hidden;
    max-width: 1120px;
    margin: 0 auto;
  }
  .sla-visual-topbar {
    min-height: 46px;
    padding: 0 18px;
    display: flex;
    align-items: center;
    gap: 7px;
    border-bottom: 1px solid #e5e8ee;
    background: #f8f9fb;
  }
  .sla-window-dot { width: 8px; height: 8px; border-radius: 50%; background: #c6ccd7; }
  .sla-visual-title { margin-left: 10px; color: #626f84; font-size: 14px; line-height: 1.4; }
  .sla-flow-grid { padding: 24px 22px 18px; display: grid; grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr; gap: 9px; align-items: center; }
  .sla-flow-node { min-width: 0; min-height: 115px; padding: 16px 12px; border: 1px solid #e1e5ec; border-radius: 18px; background: #ffffff; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
  .sla-flow-active { border-color: rgba(193, 29, 99, .28); background: var(--sla-blush); }
  .sla-flow-node strong { display: block; font-size: 15px; line-height: 1.35; font-weight: 600; }
  .sla-flow-node span { display: block; margin-top: 4px; color: var(--sla-muted); font-size: 14px; line-height: 1.45; }
  .sla-flow-arrow { color: #9ca6b7; }
  .sla-icon-box { width: 40px; height: 40px; display: inline-flex; align-items: center; justify-content: center; border-radius: 12px; background: #f1f3f7; color: var(--sla-magenta-dark); }
  .sla-icon-box-light { background: var(--sla-blush); }
  .sla-preview-panel { margin: 0 22px 22px; padding: 20px; border-radius: 20px; background: var(--sla-dark); color: #ffffff; }
  .sla-preview-header { display: flex; justify-content: space-between; gap: 18px; align-items: flex-start; padding-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,.13); }
  .sla-preview-header strong { display: block; margin-top: 5px; font-size: 15px; line-height: 1.45; overflow-wrap: anywhere; }
  .sla-ui-label { display: block; color: var(--sla-muted); font-size: 14px; line-height: 1.4; font-weight: 400; overflow-wrap: anywhere; }
  .sla-preview-panel .sla-ui-label { color: #aeb7c8; }
  .sla-status { flex: 0 0 auto; padding: 7px 10px; border-radius: 999px; background: rgba(242, 167, 198, .16); color: #ffd9e8; font-size: 14px; line-height: 1.2; font-weight: 600; }
  .sla-status-neutral { background: #eef1f5; color: #516078; }
  .sla-preview-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; padding: 18px 0; }
  .sla-preview-columns > div + div { padding-left: 22px; border-left: 1px solid rgba(255,255,255,.13); }
  .sla-preview-columns p { margin-top: 6px; color: #ffffff; font-size: 16px; line-height: 1.5; }
  .sla-preview-meta { display: flex; flex-wrap: wrap; gap: 8px; }
  .sla-preview-meta span { padding: 6px 9px; border-radius: 8px; background: rgba(255,255,255,.08); color: #cbd2df; font-size: 14px; line-height: 1.3; }

  .sla-proof { border-top: 1px solid var(--sla-line); border-bottom: 1px solid var(--sla-line); background: #ffffff; }
  .sla-proof-grid { display: grid; grid-template-columns: repeat(5, 1fr); }
  .sla-proof-item { min-height: 116px; padding: 26px 22px; display: flex; flex-direction: column; justify-content: center; }
  .sla-proof-item + .sla-proof-item { border-left: 1px solid var(--sla-line); }
  .sla-proof-item strong { font-size: 16px; line-height: 1.4; font-weight: 600; }
  .sla-proof-item span { margin-top: 6px; color: var(--sla-muted); font-size: 14px; line-height: 1.45; }

  .sla-split-intro { display: grid; grid-template-columns: .8fr 1.2fr; gap: 88px; align-items: start; }
  .sla-split-intro h2 { max-width: 490px; }
  .sla-overview-copy { max-width: 760px; }
  .sla-overview-copy p + p { margin-top: 18px; }
  .sla-definition-band { margin-top: 54px; }
  .sla-definition-band > div:first-child { padding: 34px 36px; border: 1px solid var(--sla-line); border-radius: 28px 28px 0 0; background: #ffffff; }
  .sla-definition-band h3 { margin-bottom: 12px; }
  .sla-definition-band p { max-width: 910px; }
  .sla-definition-tags { padding: 22px 28px; display: flex; flex-wrap: wrap; gap: 10px; border: 1px solid var(--sla-line); border-top: 0; border-radius: 0 0 28px 28px; background: var(--sla-surface-soft); }
  .sla-definition-tags span { padding: 8px 11px; border: 1px solid #dbe0e8; border-radius: 999px; background: #ffffff; color: #3f4d63; font-size: 14px; line-height: 1.3; }

  .sla-comparison-wrap { overflow: hidden; border: 1px solid var(--sla-line); border-radius: 24px; background: #ffffff; }
  .sla-comparison-table { width: 100%; min-width: 0; table-layout: fixed; border-collapse: collapse; }
  .sla-comparison-table th, .sla-comparison-table td { padding: 18px 20px; text-align: left; vertical-align: top; border-bottom: 1px solid var(--sla-line); }
  .sla-comparison-table thead th { background: #f8f9fb; color: #334057; font-weight: 600; }
  .sla-comparison-table th:first-child { width: 38%; }
  .sla-comparison-table tbody th { color: var(--sla-ink); font-weight: 600; }
  .sla-comparison-table td { color: var(--sla-body); overflow-wrap: anywhere; }
  .sla-comparison-table th + th, .sla-comparison-table td + td { border-left: 1px solid var(--sla-line); }
  .sla-comparison-table tr:last-child th, .sla-comparison-table tr:last-child td { border-bottom: 0; }
  .sla-comparison-table thead th:last-child { color: var(--sla-magenta-dark); background: var(--sla-blush); }
  .sla-comparison-table tbody td:last-child { background: rgba(253, 242, 247, .52); }
  .sla-choice-row { margin-top: 34px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--sla-line); border-bottom: 1px solid var(--sla-line); }
  .sla-choice-item { padding: 30px 28px 32px; }
  .sla-choice-item + .sla-choice-item { border-left: 1px solid var(--sla-line); }
  .sla-choice-item h3 { margin: 7px 0 12px; }
  .sla-choice-item p { margin-bottom: 18px; }
  .sla-choice-label { color: var(--sla-muted); font-size: 14px; line-height: 1.4; }
  .sla-choice-selected { background: #ffffff; box-shadow: inset 0 3px 0 var(--sla-magenta); }

  .sla-workflow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid var(--sla-line); }
  .sla-workflow-step { padding: 34px 32px 38px 0; border-bottom: 1px solid var(--sla-line); }
  .sla-workflow-step:nth-child(3n+2), .sla-workflow-step:nth-child(3n+3) { padding-left: 32px; border-left: 1px solid var(--sla-line); }
  .sla-step-top { display: flex; align-items: center; gap: 12px; margin-bottom: 22px; }
  .sla-step-number { color: var(--sla-magenta-dark); font-size: 14px; line-height: 1.2; font-weight: 600; }
  .sla-step-rule { flex: 1; height: 2px; background: linear-gradient(90deg, rgba(193,29,99,.45), rgba(193,29,99,0)); }
  .sla-workflow-step h3 { margin-bottom: 12px; font-size: 22px; }

  .sla-dark { background: var(--sla-dark); color: #ffffff; }
  .sla-dark h2, .sla-dark h3 { color: #ffffff; }
  .sla-dark p { color: var(--sla-dark-text); }
  .sla-dark-head { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: end; }
  .sla-dark-head p { max-width: 650px; }
  .sla-resource-model { margin: 44px 0 52px; padding: 22px; display: grid; grid-template-columns: repeat(7, minmax(0, 1fr)); gap: 18px; border: 1px solid rgba(255,255,255,.12); border-radius: 24px; background: var(--sla-dark-2); }
  .sla-resource-node { position: relative; min-width: 0; min-height: 74px; padding: 13px 14px; border: 1px solid rgba(255,255,255,.13); border-radius: 12px; color: #ffffff; background: rgba(255,255,255,.04); display: flex; align-items: center; justify-content: center; text-align: center; }
  .sla-resource-node > span:first-child { font-size: 14px; line-height: 1.35; font-weight: 600; overflow-wrap: anywhere; }
  .sla-resource-node:first-child, .sla-resource-node:last-child { border-color: rgba(242,167,198,.38); background: rgba(193,29,99,.12); }
  .sla-resource-connector { position: absolute; z-index: 2; right: -18px; top: 50%; transform: translateY(-50%); width: 24px; height: 24px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--sla-dark-2); color: #8f9aad; }
  .sla-resource-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid rgba(255,255,255,.13); }
  .sla-resource-grid article { padding: 30px 26px 30px 0; border-bottom: 1px solid rgba(255,255,255,.13); }
  .sla-resource-grid article:nth-child(4n+2), .sla-resource-grid article:nth-child(4n+3), .sla-resource-grid article:nth-child(4n+4) { padding-left: 26px; border-left: 1px solid rgba(255,255,255,.13); }
  .sla-resource-grid h3 { margin-bottom: 10px; font-size: 20px; }

  .sla-integrations-layout { display: grid; grid-template-columns: 1fr .9fr; gap: 76px; align-items: start; }
  .sla-integrations-copy h2 { max-width: 650px; margin-bottom: 20px; }
  .sla-integrations-copy > p { max-width: 700px; }
  .sla-divided-list { margin-top: 34px; border-top: 1px solid var(--sla-line); }
  .sla-divided-list > div { padding: 24px 0; border-bottom: 1px solid var(--sla-line); }
  .sla-divided-list h3 { margin-bottom: 9px; font-size: 20px; }
  .sla-code-panel { border: 1px solid #dce1e9; border-radius: 28px; background: #ffffff; box-shadow: 0 22px 58px rgba(28, 35, 55, .1); overflow: hidden; }
  .sla-code-tabs { display: flex; flex-wrap: wrap; gap: 4px; padding: 12px; background: #f6f7f9; border-bottom: 1px solid #e2e6ec; }
  .sla-code-tabs span { padding: 8px 11px; border-radius: 9px; color: #667389; font-size: 14px; line-height: 1.3; }
  .sla-code-tabs .is-active { background: #ffffff; color: var(--sla-ink); box-shadow: 0 1px 4px rgba(16,20,38,.08); }
  .sla-code-panel pre { margin: 0; padding: 28px; overflow: hidden; white-space: pre-wrap; overflow-wrap: anywhere; word-break: break-word; background: var(--sla-dark); color: #e8ecf4; font-size: 14px; line-height: 1.65; }
  .sla-code-panel code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; }
  .sla-code-meta { display: grid; grid-template-columns: 1.5fr .8fr 1fr; gap: 0; border-bottom: 1px solid var(--sla-line); }
  .sla-code-meta > div { padding: 18px 20px; }
  .sla-code-meta > div + div { border-left: 1px solid var(--sla-line); }
  .sla-code-meta strong { display: block; margin-top: 5px; font-size: 15px; line-height: 1.45; font-weight: 600; }
  .sla-code-panel > .sla-text-link { margin: 20px 22px 22px; }

  .sla-delta-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 78px; align-items: center; }
  .sla-delta-copy h2 { margin-bottom: 20px; }
  .sla-delta-copy p + p { margin-top: 14px; }
  .sla-delta-visual { border: 1px solid var(--sla-line); border-radius: 28px; background: #ffffff; box-shadow: 0 18px 44px rgba(28,35,55,.08); overflow: hidden; }
  .sla-delta-file-header { padding: 20px 22px; display: flex; align-items: center; justify-content: space-between; gap: 14px; border-bottom: 1px solid var(--sla-line); background: #fafbfc; }
  .sla-delta-file-header strong { display: block; margin-top: 4px; font-size: 16px; line-height: 1.45; }
  .sla-delta-row { min-height: 76px; padding: 17px 22px; display: flex; align-items: center; gap: 16px; border-bottom: 1px solid var(--sla-line); }
  .sla-delta-symbol { width: 30px; height: 30px; display: inline-flex; align-items: center; justify-content: center; border-radius: 9px; font-size: 17px; line-height: 1; font-weight: 600; }
  .sla-delta-add .sla-delta-symbol { background: #edf8f2; color: #1d7650; }
  .sla-delta-change .sla-delta-symbol { background: #fff6df; color: #8b6612; }
  .sla-delta-remove .sla-delta-symbol { background: #f6f0f2; color: #8b4d64; }
  .sla-delta-same .sla-delta-symbol { background: #eef1f5; color: #5f6c80; }
  .sla-delta-row > div { min-width: 0; }
  .sla-delta-row strong { display: block; font-size: 15px; line-height: 1.35; overflow-wrap: anywhere; }
  .sla-delta-row div > span { display: block; margin-top: 4px; color: var(--sla-muted); font-size: 14px; line-height: 1.4; }
  .sla-delta-summary { padding: 16px 22px; display: flex; flex-wrap: wrap; gap: 10px 20px; background: #fafbfc; }
  .sla-delta-summary span { color: #59667a; font-size: 14px; line-height: 1.4; }
  .sla-check-list { margin: 28px 0 0; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 13px 22px; list-style: none; }
  .sla-check-list li { position: relative; padding-left: 26px; color: #344157; }
  .sla-check-list li::before { content: ""; position: absolute; left: 0; top: .56em; width: 12px; height: 7px; border-left: 2px solid var(--sla-magenta); border-bottom: 2px solid var(--sla-magenta); transform: rotate(-45deg); }

  .sla-context-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--sla-line); }
  .sla-context-item { padding: 32px 28px 34px 0; display: grid; grid-template-columns: 46px 1fr; gap: 18px; border-bottom: 1px solid var(--sla-line); }
  .sla-context-item:nth-child(3n+2), .sla-context-item:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid var(--sla-line); }
  .sla-context-item h3 { margin-bottom: 9px; font-size: 20px; }
  .sla-placeholder-band { margin-top: 42px; padding: 28px 30px; display: grid; grid-template-columns: .9fr 1.1fr; gap: 56px; align-items: center; border: 1px solid rgba(193,29,99,.18); border-radius: 24px; background: var(--sla-blush); }
  .sla-code-chips { margin-top: 11px; display: flex; flex-wrap: wrap; gap: 9px; }
  .sla-code-chips code { padding: 8px 10px; border: 1px solid rgba(193,29,99,.17); border-radius: 9px; background: #ffffff; color: #6f2346; font-size: 14px; line-height: 1.3; }
  .sla-placeholder-band h3 { margin-bottom: 8px; font-size: 22px; }
  .sla-placeholder-band p { margin-bottom: 13px; }

  .sla-ai-section { background: linear-gradient(180deg, #ffffff 0%, #faf7f9 100%); }
  .sla-ai-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 78px; align-items: center; }
  .sla-ai-copy h2 { margin-bottom: 20px; }
  .sla-ai-copy p + p { margin-top: 14px; }
  .sla-ai-copy .sla-text-link { margin-top: 22px; }
  .sla-routing-panel { border-top: 1px solid var(--sla-line); }
  .sla-routing-row { padding: 26px 0; display: grid; grid-template-columns: 46px 1fr; gap: 18px; border-bottom: 1px solid var(--sla-line); }
  .sla-routing-marker { width: 42px; height: 42px; display: inline-flex; align-items: center; justify-content: center; border-radius: 50%; background: var(--sla-blush); color: var(--sla-magenta-dark); font-size: 13px; line-height: 1; font-weight: 600; }
  .sla-routing-row h3 { margin-bottom: 8px; font-size: 20px; }

  .sla-qa-layout { display: grid; grid-template-columns: 1.35fr .65fr; gap: 48px; align-items: start; }
  .sla-qa-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--sla-line); }
  .sla-qa-item { padding: 25px 24px 27px 0; display: grid; grid-template-columns: 28px 1fr; gap: 14px; border-bottom: 1px solid var(--sla-line); }
  .sla-qa-item:nth-child(even) { padding-left: 24px; border-left: 1px solid var(--sla-line); }
  .sla-qa-check { margin-top: 1px; color: var(--sla-magenta-dark); }
  .sla-qa-item h3 { margin-bottom: 7px; font-size: 19px; }
  .sla-qa-summary { padding: 30px; border-radius: 28px; background: var(--sla-dark); color: #ffffff; }
  .sla-qa-summary h3 { color: #ffffff; margin-bottom: 14px; }
  .sla-qa-summary p { color: var(--sla-dark-text); }
  .sla-qa-score { margin: 25px 0 22px; border-top: 1px solid rgba(255,255,255,.13); }
  .sla-qa-score > div { padding: 16px 0; display: flex; justify-content: space-between; gap: 18px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.13); }
  .sla-qa-score .sla-ui-label { color: #aeb7c8; }
  .sla-qa-score strong { color: #ffffff; font-size: 15px; line-height: 1.4; font-weight: 600; text-align: right; }
  .sla-page .sla-qa-summary .sla-text-link { color: var(--sla-light-magenta); }

  .sla-formats-layout { display: grid; grid-template-columns: .75fr 1.25fr; gap: 72px; align-items: start; }
  .sla-formats-layout h2 { margin-bottom: 20px; }
  .sla-platform-list { margin: 30px 0 24px; display: flex; flex-wrap: wrap; gap: 10px; }
  .sla-platform-list span { padding: 9px 12px; border: 1px solid #d9dee7; border-radius: 999px; background: #ffffff; color: #425067; font-size: 14px; line-height: 1.3; }
  .sla-format-table-wrap { overflow: hidden; border: 1px solid var(--sla-line); border-radius: 24px; background: #ffffff; }
  .sla-format-table { width: 100%; min-width: 0; table-layout: fixed; border-collapse: collapse; }
  .sla-format-table th, .sla-format-table td { padding: 17px 20px; text-align: left; border-bottom: 1px solid var(--sla-line); }
  .sla-format-table thead th { background: #f8f9fb; color: #334057; font-weight: 600; }
  .sla-format-table tbody th { width: 43%; color: var(--sla-ink); font-weight: 600; }
  .sla-format-table td { color: var(--sla-body); overflow-wrap: anywhere; }
  .sla-format-table tr:last-child th, .sla-format-table tr:last-child td { border-bottom: 0; }

  .sla-events-dark { background: #13192b; }
  .sla-events-dark h2 { color: #ffffff; margin-bottom: 20px; }
  .sla-events-dark p, .sla-events-dark li { color: var(--sla-dark-text); }
  .sla-events-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 76px; align-items: center; }
  .sla-event-principles { margin: 28px 0 24px; padding: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 12px 22px; list-style: none; }
  .sla-event-principles li { position: relative; padding-left: 22px; }
  .sla-event-principles li::before { content: ""; position: absolute; left: 0; top: .72em; width: 7px; height: 2px; background: var(--sla-light-magenta); }
  .sla-event-stream { padding: 16px 24px; border: 1px solid rgba(255,255,255,.12); border-radius: 26px; background: #0d1221; }
  .sla-event-row { min-height: 72px; display: grid; grid-template-columns: 16px minmax(0, 1fr) auto; gap: 14px; align-items: center; border-bottom: 1px solid rgba(255,255,255,.1); }
  .sla-event-row:last-child { border-bottom: 0; }
  .sla-event-dot { width: 9px; height: 9px; border-radius: 50%; background: #7d8799; box-shadow: 0 0 0 4px rgba(255,255,255,.04); }
  .sla-event-dot.is-final { background: var(--sla-light-magenta); box-shadow: 0 0 0 4px rgba(242,167,198,.12); }
  .sla-event-row > div { min-width: 0; }
  .sla-event-row code { display: block; color: #ffffff; font-size: 14px; line-height: 1.35; overflow-wrap: anywhere; word-break: break-word; }
  .sla-event-row div > span { display: block; margin-top: 4px; color: #aeb7c8; font-size: 14px; line-height: 1.35; }
  .sla-event-row time { color: #8791a4; font-size: 14px; line-height: 1.3; }

  .sla-security-intro { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: end; }
  .sla-security-intro p { max-width: 650px; }
  .sla-security-matrix { margin-top: 46px; display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--sla-line); }
  .sla-security-item { position: relative; padding: 31px 28px 31px 0; border-bottom: 1px solid var(--sla-line); }
  .sla-security-item:nth-child(even) { padding-left: 32px; border-left: 1px solid var(--sla-line); }
  .sla-security-marker { width: 22px; height: 2px; display: block; margin-bottom: 16px; background: var(--sla-magenta); }
  .sla-security-item h3 { margin-bottom: 8px; font-size: 20px; }
  .sla-inline-links { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 20px 34px; }

  .sla-use-case-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .sla-use-case { min-height: 278px; padding: 28px; border: 1px solid var(--sla-line); border-radius: 22px; background: #ffffff; }
  .sla-use-case-icon { width: 46px; height: 46px; display: inline-flex; align-items: center; justify-content: center; border-radius: 14px; background: var(--sla-blush); color: var(--sla-magenta-dark); }
  .sla-use-case h3 { margin: 22px 0 10px; font-size: 21px; }

  .sla-practice-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 80px; align-items: start; }
  .sla-practice-copy h2 { margin-bottom: 20px; }
  .sla-practice-copy p + p { margin-top: 16px; }
  .sla-practice-phases { border-top: 1px solid var(--sla-line); }
  .sla-practice-phase { position: relative; padding: 27px 0 29px 42px; border-bottom: 1px solid var(--sla-line); }
  .sla-practice-phase::before { content: ""; position: absolute; left: 0; top: 34px; width: 22px; height: 2px; background: var(--sla-magenta); }
  .sla-practice-phase > span { display: block; margin-bottom: 8px; color: var(--sla-magenta-dark); font-size: 14px; line-height: 1.35; font-weight: 600; text-transform: uppercase; letter-spacing: .08em; }
  .sla-practice-phase h3 { margin-bottom: 9px; font-size: 21px; }
  .sla-practice-phase p { color: #344157; }

  .sla-start-section { background: var(--sla-blush); }
  .sla-start-head { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: end; }
  .sla-start-head p { max-width: 650px; }
  .sla-start-grid { margin-top: 42px; display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid rgba(193,29,99,.18); }
  .sla-start-item { padding: 30px 28px 32px 0; border-bottom: 1px solid rgba(193,29,99,.18); }
  .sla-start-item:nth-child(3n+2), .sla-start-item:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid rgba(193,29,99,.18); }
  .sla-start-item > span { display: block; color: var(--sla-magenta-dark); font-size: 14px; line-height: 1.3; font-weight: 600; }
  .sla-start-item h3 { margin: 15px 0 9px; font-size: 20px; }
  .sla-start-actions { margin-top: 34px; display: flex; align-items: center; flex-wrap: wrap; gap: 18px 28px; }

  .sla-why-rows { border-top: 1px solid var(--sla-line); }
  .sla-why-row { min-height: 122px; padding: 27px 0; display: grid; grid-template-columns: 28px .8fr 1.2fr; gap: 24px; align-items: center; border-bottom: 1px solid var(--sla-line); }
  .sla-why-marker { width: 22px; height: 2px; display: block; background: var(--sla-magenta); }
  .sla-why-row h3 { font-size: 21px; }
  .sla-why-row p { max-width: 680px; }

  .sla-resources-section { background: #f8f9fb; }
  .sla-resource-links { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--sla-line); background: #ffffff; }
  .sla-resource-link { min-height: 152px; padding: 26px 28px; display: flex; align-items: center; justify-content: space-between; gap: 24px; border-bottom: 1px solid var(--sla-line); transition: background .2s ease; }
  .sla-resource-link:nth-child(even) { border-left: 1px solid var(--sla-line); }
  .sla-resource-link:hover { background: var(--sla-blush); }
  .sla-resource-link h3 { margin-bottom: 8px; font-size: 21px; }
  .sla-resource-link > div { min-width: 0; }
  .sla-resource-link p { max-width: 520px; overflow-wrap: anywhere; }
  .sla-resource-arrow { flex: 0 0 auto; width: 38px; height: 38px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #d7dce5; border-radius: 50%; color: var(--sla-magenta-dark); transition: transform .2s ease, border-color .2s ease; }
  .sla-resource-link:hover .sla-resource-arrow { transform: translateX(3px); border-color: rgba(193,29,99,.35); }

  .sla-faq-layout { display: grid; grid-template-columns: .62fr 1.38fr; gap: 72px; align-items: start; }
  .sla-faq-intro { position: sticky; top: 28px; }
  .sla-faq-intro h2 { margin-bottom: 18px; }
  .sla-faq-list { border-top: 1px solid var(--sla-line); }
  .sla-faq-item { border-bottom: 1px solid var(--sla-line); }
  .sla-faq-button { width: 100%; min-height: 78px; padding: 22px 0; display: flex; align-items: center; justify-content: space-between; gap: 22px; border: 0; background: transparent; color: var(--sla-ink); text-align: left; cursor: pointer; }
  .sla-faq-button > span:first-child { min-width: 0; overflow-wrap: anywhere; font-size: 18px; line-height: 1.45; font-weight: 600; }
  .sla-faq-plus { flex: 0 0 auto; width: 34px; height: 34px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid #d6dce5; border-radius: 50%; color: var(--sla-magenta-dark); font-size: 22px; line-height: 1; font-weight: 400; }
  .sla-faq-panel { padding: 0 54px 24px 0; }
  .sla-faq-panel p { max-width: 820px; }
  .sla-faq-panel .sla-text-link { margin-top: 16px; }

  .sla-final-cta { padding: 0 0 96px; background: #ffffff; }
  .sla-final-panel { padding: 52px 56px; display: grid; grid-template-columns: 1.2fr .8fr; gap: 56px; align-items: center; border: 1px solid rgba(193,29,99,.18); border-radius: 30px; background: linear-gradient(135deg, #fff 0%, var(--sla-blush) 100%); box-shadow: 0 20px 55px rgba(28,35,55,.08); }
  .sla-final-panel h2 { margin-bottom: 14px; }
  .sla-final-panel p { max-width: 770px; }
  .sla-final-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 12px; }

  @media (max-width: 1120px) {
    .sla-shell { padding-left: 40px; padding-right: 40px; }
    .sla-hero-copy { max-width: 920px; }
    .sla-hero-visual { max-width: 1040px; }
    .sla-proof-grid { grid-template-columns: repeat(3, 1fr); }
    .sla-proof-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--sla-line); }
    .sla-proof-item:nth-child(5) { border-top: 1px solid var(--sla-line); }
    .sla-resource-grid { grid-template-columns: repeat(2, 1fr); }
    .sla-resource-grid article:nth-child(4n+2), .sla-resource-grid article:nth-child(4n+3), .sla-resource-grid article:nth-child(4n+4) { padding-left: 0; border-left: 0; }
    .sla-resource-grid article:nth-child(even) { padding-left: 26px; border-left: 1px solid rgba(255,255,255,.13); }
    .sla-integrations-layout, .sla-delta-layout, .sla-ai-layout, .sla-qa-layout, .sla-formats-layout, .sla-events-layout, .sla-practice-layout { gap: 52px; }
    .sla-use-case-grid { grid-template-columns: repeat(2, 1fr); }
    .sla-final-panel { grid-template-columns: 1fr; }
    .sla-final-actions { justify-content: flex-start; }
  }

  @media (max-width: 900px) {
    .sla-shell { padding-left: 24px; padding-right: 24px; }
    .sla-section { padding: 80px 0; }
    .sla-page h1 { font-size: 42px; }
    .sla-page h2 { font-size: 32px; }
    .sla-page h3 { font-size: 22px; }
    .sla-hero { padding: 88px 0 80px; }
    .sla-flow-grid { grid-template-columns: 1fr 1fr; gap: 12px; }
    .sla-flow-arrow { display: none; }
    .sla-flow-node { min-height: 105px; }
    .sla-proof-grid { grid-template-columns: repeat(2, 1fr); }
    .sla-proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--sla-line); }
    .sla-proof-item:nth-child(4) { border-left: 1px solid var(--sla-line); }
    .sla-proof-item:nth-child(5) { grid-column: 1 / -1; border-left: 0; }
    .sla-split-intro, .sla-dark-head, .sla-integrations-layout, .sla-delta-layout, .sla-ai-layout, .sla-formats-layout, .sla-events-layout, .sla-security-intro, .sla-start-head, .sla-practice-layout, .sla-faq-layout { grid-template-columns: 1fr; gap: 34px; }
    .sla-choice-row { grid-template-columns: 1fr; }
    .sla-choice-item + .sla-choice-item { border-left: 0; border-top: 1px solid var(--sla-line); }
    .sla-comparison-wrap { border-radius: 22px; }
    .sla-comparison-table { min-width: 0; }
    .sla-comparison-table thead { display: none; }
    .sla-comparison-table, .sla-comparison-table tbody, .sla-comparison-table tr,
    .sla-comparison-table th, .sla-comparison-table td { display: block; width: 100%; }
    .sla-comparison-table tbody tr { padding: 24px 26px; border-bottom: 1px solid var(--sla-line); }
    .sla-comparison-table tbody tr:last-child { border-bottom: 0; }
    .sla-comparison-table tbody th, .sla-comparison-table tbody td { width: 100%; padding: 0; border: 0; background: transparent; }
    .sla-comparison-table th:first-child, .sla-comparison-table tbody th { width: 100%; overflow-wrap: anywhere; }
    .sla-comparison-table tbody th { margin-bottom: 15px; font-size: 18px; }
    .sla-comparison-table tbody td { padding-top: 12px; color: var(--sla-body); }
    .sla-comparison-table tbody td::before { display: block; margin-bottom: 4px; color: var(--sla-muted); font-size: 14px; line-height: 1.35; font-weight: 600; }
    .sla-comparison-table tbody td:nth-child(2)::before { content: "Translation API"; }
    .sla-comparison-table tbody td:nth-child(3)::before { content: "Software Localization API"; color: var(--sla-magenta-dark); }
    .sla-workflow { grid-template-columns: 1fr 1fr; }
    .sla-workflow-step:nth-child(3n+2), .sla-workflow-step:nth-child(3n+3) { padding-left: 0; border-left: 0; }
    .sla-workflow-step:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--sla-line); }
    .sla-resource-model { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    .sla-resource-connector { display: none; }
    .sla-resource-grid, .sla-context-grid, .sla-start-grid { grid-template-columns: 1fr 1fr; }
    .sla-resource-grid article:nth-child(even) { padding-left: 26px; border-left: 1px solid rgba(255,255,255,.13); }
    .sla-context-item:nth-child(3n+2), .sla-context-item:nth-child(3n+3) { padding-left: 0; border-left: 0; }
    .sla-context-item:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--sla-line); }
    .sla-start-item:nth-child(3n+2), .sla-start-item:nth-child(3n+3) { padding-left: 0; border-left: 0; }
    .sla-start-item:nth-child(even) { padding-left: 26px; border-left: 1px solid rgba(193,29,99,.18); }
    .sla-placeholder-band { grid-template-columns: 1fr; gap: 24px; }
    .sla-qa-layout { grid-template-columns: 1fr; }
    .sla-qa-summary { max-width: 620px; }
    .sla-security-matrix { grid-template-columns: 1fr; }
    .sla-security-item:nth-child(even) { padding-left: 0; border-left: 0; }
    .sla-why-row { grid-template-columns: 28px 1fr; }
    .sla-why-row p { grid-column: 2; }
    .sla-faq-intro { position: static; }
    .sla-final-panel { padding: 44px 36px; }
  }

  @media (max-width: 640px) {
    .sla-shell { padding-left: 20px; padding-right: 20px; }
    .sla-section { padding: 68px 0; }
    .sla-page h1 { font-size: 38px; line-height: 1.1; }
    .sla-page h2 { font-size: 30px; line-height: 1.16; }
    .sla-page h3 { font-size: 20px; }
    .sla-hero { padding: 72px 0 66px; }
    .sla-hero-copy { margin-bottom: 38px; }
    .sla-hero-actions { flex-direction: column; align-items: stretch; }
    .sla-button { width: 100%; min-height: 50px; }
    .sla-hero-text-link { min-height: 44px; }
    .sla-hero-visual { border-radius: 22px; }
    .sla-visual-title { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .sla-flow-grid { grid-template-columns: 1fr; padding: 18px; }
    .sla-flow-node { min-height: 92px; flex-direction: row; align-items: center; justify-content: flex-start; }
    .sla-preview-panel { margin: 0 18px 18px; padding: 18px; }
    .sla-preview-header { flex-direction: column; }
    .sla-preview-columns { grid-template-columns: 1fr; gap: 15px; }
    .sla-preview-columns > div + div { padding-left: 0; padding-top: 15px; border-left: 0; border-top: 1px solid rgba(255,255,255,.13); }
    .sla-proof-grid { grid-template-columns: 1fr; }
    .sla-proof-item:nth-child(5) { grid-column: auto; }
    .sla-proof-item { min-height: 96px; padding: 23px 0; }
    .sla-proof-item + .sla-proof-item,
    .sla-proof-item:nth-child(3), .sla-proof-item:nth-child(4), .sla-proof-item:nth-child(5) { border-left: 0; border-top: 1px solid var(--sla-line); }
    .sla-section-head { margin-bottom: 38px; }
    .sla-definition-band > div:first-child { padding: 26px 22px; border-radius: 22px 22px 0 0; }
    .sla-definition-tags { padding: 18px; border-radius: 0 0 22px 22px; }
    .sla-comparison-table tbody tr { padding: 22px; }
    .sla-format-table-wrap { overflow: hidden; border-radius: 20px; }
    .sla-format-table { min-width: 0; }
    .sla-format-table thead { display: none; }
    .sla-format-table, .sla-format-table tbody, .sla-format-table tr,
    .sla-format-table th, .sla-format-table td { display: block; width: 100%; }
    .sla-format-table tbody tr { padding: 20px 22px; border-bottom: 1px solid var(--sla-line); }
    .sla-format-table tbody tr:last-child { border-bottom: 0; }
    .sla-format-table tbody th, .sla-format-table tbody td { width: 100%; padding: 0; border: 0; }
    .sla-format-table tbody th { margin-bottom: 6px; }
    .sla-choice-item { padding: 26px 0; }
    .sla-workflow { grid-template-columns: 1fr; }
    .sla-workflow-step, .sla-workflow-step:nth-child(even) { padding: 28px 0; border-left: 0; }
    .sla-step-rule { height: 1px; }
    .sla-resource-model { margin: 36px 0 42px; padding: 16px; grid-template-columns: 1fr; border-radius: 20px; }
    .sla-resource-node { min-height: 58px; justify-content: flex-start; text-align: left; }
    .sla-resource-node.has-next::after { content: ""; position: absolute; left: 28px; bottom: -13px; width: 1px; height: 13px; background: rgba(242,167,198,.32); }
    .sla-resource-grid, .sla-context-grid, .sla-start-grid { grid-template-columns: 1fr; }
    .sla-resource-grid article, .sla-resource-grid article:nth-child(even) { padding: 25px 0; border-left: 0; }
    .sla-context-item, .sla-context-item:nth-child(even) { padding: 26px 0; border-left: 0; }
    .sla-code-panel { border-radius: 22px; }
    .sla-code-panel pre { padding: 22px 18px; font-size: 14px; line-height: 1.6; }
    .sla-code-meta { grid-template-columns: 1fr; }
    .sla-code-meta > div + div { border-left: 0; border-top: 1px solid var(--sla-line); }
    .sla-delta-visual { border-radius: 22px; }
    .sla-delta-file-header { align-items: flex-start; }
    .sla-delta-summary { flex-direction: column; }
    .sla-check-list { grid-template-columns: 1fr; }
    .sla-placeholder-band { padding: 24px 22px; }
    .sla-routing-row { grid-template-columns: 42px 1fr; }
    .sla-qa-grid { grid-template-columns: 1fr; }
    .sla-qa-item, .sla-qa-item:nth-child(even) { padding: 23px 0; border-left: 0; }
    .sla-qa-summary { padding: 26px 22px; border-radius: 22px; }
    .sla-platform-list { gap: 8px; }
    .sla-event-principles { grid-template-columns: 1fr; }
    .sla-event-stream { padding: 10px 18px; border-radius: 22px; }
    .sla-event-row { grid-template-columns: 15px minmax(0, 1fr); padding: 14px 0; }
    .sla-event-row time { grid-column: 2; }
    .sla-security-item { padding: 25px 0; }
    .sla-use-case-grid { grid-template-columns: 1fr; }
    .sla-use-case { min-height: 0; padding: 25px 22px; }
    .sla-practice-phase { padding-left: 34px; }
    .sla-practice-phase::before { width: 18px; }
    .sla-start-item, .sla-start-item:nth-child(even) { padding: 25px 0; border-left: 0; }
    .sla-start-actions { align-items: stretch; }
    .sla-start-actions .sla-text-link { min-height: 44px; }
    .sla-why-row { grid-template-columns: 42px 1fr; gap: 14px; }
    .sla-resource-links { grid-template-columns: 1fr; }
    .sla-resource-link { min-height: 0; padding: 24px 0; }
    .sla-resource-link:nth-child(even) { border-left: 0; }
    .sla-resource-arrow { margin-right: 2px; }
    .sla-faq-button { min-height: 72px; padding: 20px 0; align-items: flex-start; }
    .sla-faq-button > span:first-child { font-size: 17px; }
    .sla-faq-plus { width: 32px; height: 32px; }
    .sla-faq-panel { padding-right: 0; }
    .sla-final-cta { padding-bottom: 68px; }
    .sla-final-panel { padding: 36px 24px; border-radius: 24px; }
    .sla-inline-links { flex-direction: column; align-items: flex-start; gap: 10px; }
    .sla-inline-links .sla-text-link { min-height: 44px; }
    .sla-final-actions { flex-direction: column; }
  }

  @media (max-width: 360px) {
    .sla-page h1 { font-size: 38px; }
    .sla-page h2 { font-size: 30px; }
    .sla-hero { padding-top: 66px; }
    .sla-delta-file-header { flex-direction: column; }
    .sla-code-chips code { max-width: 100%; overflow-wrap: anywhere; }
    .sla-code-tabs span { padding-left: 8px; padding-right: 8px; }
  }
`;
