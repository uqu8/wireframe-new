import React, { useMemo, useState } from "react";

const PAGE_URL = "https://www.stepes.com/developers/software-localization-api/getting-started/";
const LINKS = {
  overview: "https://www.stepes.com/developers/software-localization-api/",
  reference: "https://www.stepes.com/developers/translation-api/reference/",
  access: "https://www.stepes.com/contact-us/",
  webhooks: "https://www.stepes.com/developers/webhooks/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  security: "https://www.stepes.com/security/",
  softwareServices: "https://www.stepes.com/software-localization-services/",
  softwareIndustry: "https://www.stepes.com/software-translation-services/",
  aiHuman: "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
  continuousLocalization: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  testingChecklist: "https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/",
  intlVsLocalization: "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/",
  auth: "https://www.stepes.com/developers/software-localization-api/authentication/",
  resourceFiles: "https://www.stepes.com/developers/software-localization-api/resource-files/",
  keysLocales: "https://www.stepes.com/developers/software-localization-api/translation-keys-locales/",
  errors: "https://www.stepes.com/developers/software-localization-api/errors-request-ids/",
  changelog: "https://www.stepes.com/developers/software-localization-api/changelog/",
};

const documentationLinks = [
  ["Getting Started", PAGE_URL],
  ["Software Localization API", LINKS.overview],
  ["API Reference", LINKS.reference],
  ["Authentication", LINKS.auth],
  ["Resource Files", LINKS.resourceFiles],
  ["Translation Keys and Locales", LINKS.keysLocales],
  ["Webhooks and Events", LINKS.webhooks],
  ["Errors and Request IDs", LINKS.errors],
  ["Changelog", LINKS.changelog],
];

const tocLinks = [
  ["What You Will Build", "overview"],
  ["Before You Begin", "before-you-begin"],
  ["Resource Model", "resource-model"],
  ["1. Configure Environment", "configure-environment"],
  ["2. Authenticate", "authenticate"],
  ["3. Create a Project", "create-project"],
  ["4. Synchronize Resources", "synchronize-resources"],
  ["5. Start and Monitor", "start-localization"],
  ["Quality Review", "quality-review"],
  ["6. Generate a Build", "generate-build"],
  ["Production Readiness", "production-readiness"],
  ["FAQ", "faq"],
];

const workflowSteps = [
  ["01", "Configure", "Set the API environment and protect your bearer API key."],
  ["02", "Authenticate", "Send the assigned API key securely with each server-side request."],
  ["03", "Create", "Define the project, locales, resource format, and workflow."],
  ["04", "Synchronize", "Import structured resources and identify changed keys."],
  ["05", "Localize", "Translate, review, validate, and monitor target-locale work."],
  ["06", "Deliver", "Generate and retrieve an approved localized build."],
];

const resourceModel = [
  ["Organization", "Enterprise governance boundary"],
  ["Workspace", "Controlled operating environment"],
  ["Project", "Product, locales, workflows, and permissions"],
  ["Repository", "Source-control connection and synchronization rules"],
  ["Branch", "Release, feature, staging, or production version"],
  ["Resource File", "Structured software localization content"],
  ["Translation Key", "Stable source-to-locale identifier"],
  ["Locale Translation", "Target value, revision, and QA state"],
  ["Review State", "Linguistic, product, and approval status"],
  ["Localized Build", "Approved package for testing or deployment"],
];

const qualityChecks = [
  ["Placeholder Validation", "Detect missing, added, renamed, reordered, or malformed runtime values."],
  ["Markup and Syntax", "Protect HTML, XML, Markdown, escape sequences, ICU messages, and application-specific structures."],
  ["Plural Completeness", "Confirm that target-language forms remain complete and technically valid."],
  ["Character Limits", "Flag translations that exceed configured interface or device constraints."],
  ["Terminology", "Apply approved product names, feature labels, technical vocabulary, and prohibited-term rules."],
  ["Locale Formats", "Review numbers, dates, times, currencies, units, separators, and punctuation."],
  ["Encoding and Characters", "Identify invalid encoding, corrupted characters, Unicode issues, and unsupported symbols."],
  ["RTL Readiness", "Support bidirectional content and right-to-left testing workflows."],
];

const formats = [
  ["Web and JavaScript", "JSON, YAML, JavaScript resource objects"],
  ["Android", "Android XML"],
  ["Apple Platforms", ".strings, .stringsdict, XLIFF"],
  ["Microsoft and .NET", "RESX"],
  ["Java", ".properties"],
  ["GNU Gettext", "PO and POT"],
  ["Flutter", "ARB"],
  ["Cross-Platform", "JSON, YAML, XML, XLIFF"],
  ["Games and Custom Software", "CSV, TSV, JSON, XML, and supported structured formats"],
];

const readinessGroups = [
  {
    title: "Credentials and Access",
    items: [
      "Store the assigned API key in an approved secrets manager.",
      "Separate sandbox and production credentials.",
      "Apply least-privilege access and use an integration identity for production automation.",
      "Document API-key rotation and revocation procedures.",
    ],
  },
  {
    title: "Request and Resource Safety",
    items: [
      "Use stable client references and documented idempotency controls.",
      "Configure timeouts, bounded retries, and request tracing.",
      "Validate source resources, stable keys, placeholders, plural structures, and source revisions.",
      "Reconcile every localized build with its project, branch, locale, and source version.",
    ],
  },
  {
    title: "Workflow and Quality Control",
    items: [
      "Match translation and review rules to customer visibility, technical complexity, and risk.",
      "Associate the correct translation memory and terminology resources.",
      "Require the appropriate reviewers, approvers, and release gates.",
      "Handle partial locale completion intentionally rather than restarting completed work.",
    ],
  },
  {
    title: "Webhooks and Operations",
    items: [
      "Verify every webhook signature against the unchanged raw request body.",
      "Store event IDs and process events idempotently.",
      "Expect duplicate, delayed, and out-of-order delivery.",
      "Keep sensitive source and target content out of unnecessary logs.",
    ],
  },
];

const faqItems = [
  {
    q: "What is a software localization API?",
    a: "A software localization API connects development systems directly to the workflows used to translate, review, validate, and deliver localized product content. It manages software-specific objects such as resource files, translation keys, branches, locales, contextual metadata, review states, quality results, and localized builds.",
  },
  {
    q: "How is the Software Localization API different from the Translation API?",
    a: "The Translation API supports broad translation automation for text, documents, files, and managed projects. The Software Localization API is designed for recurring development cycles and preserves the relationships among software resources, keys, branches, placeholders, plural structures, reviews, and release-ready builds.",
  },
  {
    q: "Can we localize only new and modified strings?",
    a: "Yes. Change-based synchronization identifies added keys and modified source values while retaining eligible approved translations for unchanged content. Project rules determine whether affected translations are reused, reviewed, regenerated, or translated again.",
  },
  {
    q: "Can developers attach screenshots and contextual guidance?",
    a: "Yes. Strings can include screenshots, developer comments, key names, source references, component information, character limits, placeholder definitions, and approved terminology so translators understand meaning, function, and interface location.",
  },
  {
    q: "Can translations receive professional human review?",
    a: "Yes. Stepes workflows can combine translation memory, terminology-guided AI translation, professional translation, post-editing, linguistic review, subject-matter validation, in-country review, product approval, and automated software quality assurance.",
  },
  {
    q: "Can the API integrate with repositories and CI/CD?",
    a: "Yes. Teams can synchronize resources, preserve branch relationships, return approved localized files through controlled repository workflows, enforce quality gates, retrieve localized builds, run automated testing, and continue deployment.",
  },
  {
    q: "Is the API suitable for regulated software?",
    a: "Stepes can support professional translation, subject-matter review, terminology governance, automated QA, approval controls, role-based access, auditability, and controlled delivery. The workflow should be configured for the product, market, content risk, validation plan, and applicable requirements.",
  },
  {
    q: "How does Software Localization API authentication work?",
    a: "Stepes uses bearer API-key authentication for server-to-server integrations. Send the assigned API key in the Authorization header, keep it out of browser code, mobile packages, source control, and logs, and use separate credentials for sandbox and production.",
  },
  {
    q: "Where can developers find exact endpoint definitions?",
    a: "The Stepes API Reference is the authoritative source for methods, paths, parameters, schemas, status codes, errors, event definitions, and integration conventions. Use the generated reference and machine-readable contracts when implementing production requests.",
  },
];

const codeExamples = {
  environment: [
    {
      label: "Shell",
      language: "bash",
      code: `export STEPES_BASE_URL="https://api.sandbox.stepes.com/v2"
export STEPES_API_KEY="YOUR_STEPES_API_KEY"`,
    },
    {
      label: "PowerShell",
      language: "powershell",
      code: `$env:STEPES_BASE_URL = "https://api.sandbox.stepes.com/v2"
$env:STEPES_API_KEY = "YOUR_STEPES_API_KEY"`,
    },
  ],
  auth: [
    {
      label: "cURL",
      language: "bash",
      code: `curl --request GET \\
  --url "$STEPES_BASE_URL/workspaces" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Accept: application/json"`,
    },
    {
      label: "Node.js",
      language: "javascript",
      code: `const response = await fetch(
  \`${"${process.env.STEPES_BASE_URL}"}/workspaces\`,
  {
    headers: {
      Authorization: \`Bearer ${"${process.env.STEPES_API_KEY}"}\`,
      Accept: "application/json"
    }
  }
);

if (!response.ok) {
  throw new Error(\`Authentication check failed: ${"${response.status}"}\`);
}

console.log(await response.json());`,
    },
    {
      label: "Python",
      language: "python",
      code: `import os
import requests

response = requests.get(
    f'{os.environ["STEPES_BASE_URL"]}/workspaces',
    headers={
        "Authorization": f'Bearer {os.environ["STEPES_API_KEY"]}',
        "Accept": "application/json",
    },
    timeout=30,
)
response.raise_for_status()
print(response.json())`,
    },
  ],
  project: [
    {
      label: "Project Configuration",
      language: "json",
      code: `{
  "name": "Account Security",
  "clientReference": "account-security-localization",
  "sourceLocale": "en-US",
  "targetLocales": ["fr-FR"],
  "defaultBranch": "main",
  "resourceFormat": "json",
  "workflow": {
    "mode": "ai_translation_with_human_review",
    "useTranslationMemory": true,
    "applyTerminology": true,
    "requireQualityValidation": true,
    "requireApprovalBeforeBuild": true
  }
}`,
    },
  ],
  source: [
    {
      label: "Source JSON",
      language: "json",
      code: `{
  "account.security.reset_password_button": "Reset password",
  "account.security.password_requirements": "Use at least {minCharacters} characters.",
  "account.security.reset_password_success": "Password reset for {username}.",
  "account.security.two_factor_auth": "Two-factor authentication"
}`,
    },
    {
      label: "Change Summary",
      language: "text",
      code: `account-security.json

+ password_requirements
  New key · localization required

~ reset_password_success
  Source updated · review required

= two_factor_auth
  Unchanged · approved translation retained

− legacy_security_question
  Removed · archived according to project policy`,
    },
  ],
  localization: [
    {
      label: "Localization Request",
      language: "json",
      code: `{
  "branch": "main",
  "resources": ["account-security.json"],
  "targetLocales": ["fr-FR"],
  "selection": {
    "mode": "changed_strings"
  },
  "workflow": {
    "mode": "ai_translation_with_human_review"
  },
  "delivery": {
    "requireApproval": true,
    "requireQualityValidation": true
  }
}`,
    },
    {
      label: "Webhook Event",
      language: "json",
      code: `{
  "id": "evt_01JEXAMPLE",
  "type": "build.generated",
  "createdAt": "2026-07-27T18:35:10Z",
  "data": {
    "projectId": "slp_01JEXAMPLE",
    "branch": "main",
    "buildId": "slb_01JEXAMPLE",
    "locales": ["fr-FR"],
    "status": "ready"
  }
}`,
    },
  ],
  output: [
    {
      label: "fr-FR JSON",
      language: "json",
      code: `{
  "account.security.reset_password_button": "Réinitialiser le mot de passe",
  "account.security.password_requirements": "Utilisez au moins {minCharacters} caractères.",
  "account.security.reset_password_success": "Le mot de passe de {username} a été réinitialisé.",
  "account.security.two_factor_auth": "Authentification à deux facteurs"
}`,
    },
  ],
};

function ArrowIcon({ direction = "right" }) {
  const rotate = direction === "down" ? 90 : 0;
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false" style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M4.5 10h10M11 6.5 14.5 10 11 13.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m6.7 12.3 3.2 3.2 7.4-7.4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function LinkArrow({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function CodeTabs({ tabs }) {
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const selected = tabs[active];
  const tabGroupId = `code-${tabs[0].label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  const copyCode = async () => {
    try {
      await navigator.clipboard.writeText(selected.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch (error) {
      setCopied(false);
    }
  };

  return (
    <div className="code-card">
      <div className="code-toolbar">
        <div className="code-tabs" role="tablist" aria-label="Code examples">
          {tabs.map((tab, index) => (
            <button
              type="button"
              role="tab"
              id={`${tabGroupId}-tab-${index}`}
              aria-controls={`${tabGroupId}-panel`}
              aria-selected={active === index}
              tabIndex={active === index ? 0 : -1}
              className={active === index ? "code-tab active" : "code-tab"}
              key={tab.label}
              onClick={() => { setActive(index); setCopied(false); }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <button className="copy-button" type="button" onClick={copyCode} aria-label={`Copy ${selected.label} code`}>
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre
        id={`${tabGroupId}-panel`}
        role="tabpanel"
        aria-labelledby={`${tabGroupId}-tab-${active}`}
        className={`language-${selected.language}`}
      ><code>{selected.code}</code></pre>
    </div>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

function DocsNavigation() {
  return (
    <aside className="docs-nav" aria-label="Software Localization API documentation">
      <div className="docs-nav-inner">
        <div className="docs-nav-label">SOFTWARE LOCALIZATION API</div>
        <nav>
          {documentationLinks.map(([label, href], index) => (
            <a key={label} href={href} className={index === 0 ? "active" : ""}>{label}</a>
          ))}
        </nav>
        <div className="docs-help">
          <span>Need implementation guidance?</span>
          <LinkArrow href={LINKS.access}>Talk to an Expert</LinkArrow>
        </div>
      </div>
    </aside>
  );
}

function MobileDocsNavigation() {
  return (
    <details className="mobile-docs">
      <summary>Software Localization API Documentation <ArrowIcon direction="down" /></summary>
      <nav>
        {documentationLinks.map(([label, href], index) => (
          <a key={label} href={href} className={index === 0 ? "active" : ""}>{label}</a>
        ))}
      </nav>
    </details>
  );
}

function OnThisPage() {
  return (
    <aside className="page-toc" aria-label="On this page">
      <div className="page-toc-inner">
        <div className="toc-label">ON THIS PAGE</div>
        <nav>
          {tocLinks.map(([label, id]) => (
            <a key={id} href={`${PAGE_URL}#${id}`}>{label}</a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const accordionId = `accordion-${String(items[0].q || items[0].title).toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  return (
    <div className="accordion">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className={`accordion-item ${open ? "open" : ""}`} key={item.q || item.title}>
            <button
              type="button"
              id={`${accordionId}-trigger-${index}`}
              aria-controls={`${accordionId}-panel-${index}`}
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              <span>{item.q || item.title}</span>
              <span className="accordion-symbol" aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
            <div
              className="accordion-panel"
              id={`${accordionId}-panel-${index}`}
              role="region"
              aria-labelledby={`${accordionId}-trigger-${index}`}
              hidden={!open}
            >
              {item.a ? <p>{item.a}</p> : (
                <ul className="check-list compact">
                  {item.items.map((text) => <li key={text}><CheckIcon /><span>{text}</span></li>)}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function SoftwareLocalizationApiGettingStartedWireframe() {
  const sampleMeta = useMemo(() => [
    ["Project", "Account Security"],
    ["Source locale", "en-US"],
    ["Target locale", "fr-FR"],
    ["Branch", "main"],
    ["Resource", "account-security.json"],
    ["Workflow", "AI translation + professional review"],
  ], []);

  return (
    <div className="stepes-wireframe">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --blush-strong: #F8E4EE;
          --ink: #10172A;
          --text: #2D374C;
          --muted: #637083;
          --line: #E4E8EF;
          --line-strong: #D7DDE7;
          --surface: #F7F9FC;
          --code: #121826;
          --white: #FFFFFF;
          --max: 1280px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .stepes-wireframe {
          color: var(--text);
          background: var(--white);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          line-height: 1.62;
          overflow-x: clip;
        }
        .stepes-wireframe a { color: inherit; }
        .stepes-wireframe button { font: inherit; }
        .stepes-wireframe svg { width: 20px; height: 20px; flex: 0 0 auto; }
        .shell { width: min(var(--max), calc(100% - 112px)); margin: 0 auto; }
        .eyebrow {
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.2 !important;
          letter-spacing: .12em !important;
          font-weight: 600 !important;
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        h1, h2, h3 { color: var(--ink); font-weight: 600; letter-spacing: -0.026em; margin: 0; }
        h1 { font-size: 48px; line-height: 1.08; }
        h2 { font-size: 36px; line-height: 1.16; }
        h3 { font-size: 24px; line-height: 1.25; }
        p { font-size: 16px; margin: 0; }
        .body-large { font-size: 18px; line-height: 1.66; }

        .hero {
          position: relative;
          padding: 104px 0 88px;
          text-align: center;
          background:
            radial-gradient(circle at 82% 24%, rgba(193, 29, 99, .075), transparent 24%),
            radial-gradient(circle at 15% 78%, rgba(167, 25, 84, .045), transparent 22%),
            #fff;
          border-bottom: 1px solid var(--line);
          overflow: hidden;
        }
        .hero::after {
          content: "";
          position: absolute;
          width: 270px;
          height: 270px;
          right: -120px;
          bottom: -160px;
          border: 1px solid rgba(193,29,99,.12);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 1; }
        .hero h1 { max-width: 900px; margin: 0 auto; }
        .hero-copy { max-width: 825px; margin: 26px auto 0; font-size: 18px; color: #344058; }
        .hero-subcopy { max-width: 760px; margin: 16px auto 0; font-size: 16px; color: var(--muted); }
        .hero-actions { display: flex; justify-content: center; flex-wrap: wrap; gap: 12px; margin-top: 32px; }
        .cta {
          min-height: 50px;
          padding: 0 24px;
          border-radius: 999px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          border: 1px solid transparent;
          transition: transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;
        }
        .cta svg { width: 18px; height: 18px; }
        .cta-primary,
        .cta-primary:link,
        .cta-primary:visited,
        .cta-primary:hover,
        .cta-primary:active,
        .cta-primary:focus,
        .cta-primary:focus-visible,
        .cta-primary span,
        .cta-primary svg,
        .cta-primary svg path {
          color: #fff !important;
          stroke: #fff !important;
          fill: none;
        }
        .cta-primary { background: var(--magenta); box-shadow: 0 12px 28px rgba(193, 29, 99, .17); }
        .cta-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 14px 34px rgba(193, 29, 99, .21); }
        .cta-secondary { background: #fff; color: var(--ink); border-color: var(--line-strong); }
        .cta-secondary:hover { border-color: #BFC7D4; transform: translateY(-1px); }
        .cta:focus-visible, .editorial-link:focus-visible, .code-tab:focus-visible, .copy-button:focus-visible, .accordion button:focus-visible, .mobile-docs summary:focus-visible {
          outline: 3px solid rgba(193,29,99,.25);
          outline-offset: 3px;
        }
        .preview-note {
          max-width: 760px;
          margin: 26px auto 0;
          padding: 14px 18px;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          gap: 11px;
          color: #556174;
          background: rgba(255,255,255,.76);
          border: 1px solid var(--line);
          border-radius: 16px;
          text-align: left;
        }
        .preview-note strong {
          flex: 0 0 auto;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.5;
          letter-spacing: .1em;
          text-transform: uppercase;
          font-weight: 600;
        }
        .preview-note span { font-size: 16px; line-height: 1.5; }

        .build-band { padding: 80px 0; background: #fff; }
        .build-panel {
          display: grid;
          grid-template-columns: minmax(0, .85fr) minmax(0, 1.15fr);
          gap: 64px;
          padding: 48px;
          border-radius: 30px;
          border: 1px solid var(--line);
          background: linear-gradient(135deg, #fff 0%, #fff 64%, #FDF6F9 100%);
          box-shadow: 0 22px 55px rgba(16, 23, 42, .06);
        }
        .build-panel .section-heading { margin: 0; }
        .build-panel h2 { max-width: 470px; }
        .build-panel .section-heading p { max-width: 530px; }
        .build-meta { border-top: 1px solid var(--line); }
        .build-meta-row {
          display: grid;
          grid-template-columns: 150px minmax(0, 1fr);
          gap: 20px;
          padding: 13px 0;
          border-bottom: 1px solid var(--line);
          align-items: baseline;
        }
        .build-meta-row span:first-child { color: var(--muted); font-size: 14px; }
        .build-meta-row strong { color: var(--ink); font-size: 16px; font-weight: 600; overflow-wrap: anywhere; }

        .workflow-strip {
          width: min(var(--max), calc(100% - 112px));
          margin: 0 auto 96px;
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }
        .workflow-step { padding: 26px 20px 28px; position: relative; }
        .workflow-step:not(:last-child)::after { content: ""; position: absolute; top: 24px; bottom: 24px; right: 0; width: 1px; background: var(--line); }
        .workflow-number { color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .08em; }
        .workflow-step h3 { font-size: 18px; margin-top: 8px; letter-spacing: -.01em; }
        .workflow-step p { color: var(--muted); font-size: 16px; line-height: 1.52; margin-top: 8px; }

        .docs-layout {
          width: min(var(--max), calc(100% - 112px));
          margin: 0 auto;
          display: grid;
          grid-template-columns: 220px minmax(0, 1fr) 190px;
          gap: 52px;
          align-items: start;
          padding-bottom: 96px;
        }
        .docs-nav-inner, .page-toc-inner { position: sticky; top: 24px; }
        .docs-nav-label, .toc-label { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .11em; margin-bottom: 16px; }
        .docs-nav nav, .page-toc nav { display: flex; flex-direction: column; }
        .docs-nav nav { border-left: 1px solid var(--line); }
        .docs-nav nav a {
          color: #596578;
          font-size: 14px;
          line-height: 1.4;
          text-decoration: none;
          padding: 8px 0 8px 16px;
          margin-left: -1px;
          border-left: 2px solid transparent;
        }
        .docs-nav nav a:hover, .docs-nav nav a.active { color: var(--ink); border-left-color: var(--magenta); font-weight: 600; }
        .docs-help { margin-top: 28px; padding: 18px; background: var(--surface); border-radius: 18px; border: 1px solid var(--line); }
        .docs-help > span { color: var(--ink); display: block; font-size: 14px; line-height: 1.45; margin-bottom: 10px; }
        .page-toc nav a { font-size: 13px; color: #6A7587; text-decoration: none; padding: 5px 0; line-height: 1.4; }
        .page-toc nav a:hover { color: var(--magenta); }
        .mobile-docs { display: none; }

        .article { min-width: 0; overflow-wrap: anywhere; }
        .article-section { padding: 0 0 84px; scroll-margin-top: 24px; }
        .article-section + .article-section { padding-top: 6px; }
        .article-section:not(:last-child) { border-bottom: 1px solid var(--line); margin-bottom: 84px; }
        .section-heading { margin-bottom: 32px; }
        .section-heading.centered { text-align: center; }
        .section-heading.centered p { margin-left: auto; margin-right: auto; }
        .section-heading p { max-width: 780px; color: #4F5C70; font-size: 18px; line-height: 1.65; margin-top: 18px; }
        .article p + p { margin-top: 16px; }
        .article h3 { margin-top: 34px; }
        .article h3 + p { margin-top: 12px; }
        .lead { font-size: 18px; color: #3D495D; }
        .quiet-note {
          border-left: 3px solid var(--magenta);
          padding: 18px 20px;
          background: var(--blush);
          border-radius: 0 16px 16px 0;
          margin: 28px 0;
        }
        .quiet-note strong { color: var(--ink); font-weight: 600; }
        .quiet-note p { font-size: 16px; }
        .callout-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; margin-top: 30px; }
        .callout-item { padding: 24px; border-radius: 20px; border: 1px solid var(--line); background: #fff; }
        .callout-item .label { color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
        .callout-item h3 { font-size: 20px; margin-top: 9px; }
        .callout-item p { margin-top: 8px; color: var(--muted); }

        .check-list { list-style: none; padding: 0; margin: 24px 0 0; display: grid; gap: 13px; }
        .check-list li { display: grid; grid-template-columns: 22px minmax(0, 1fr); gap: 11px; align-items: start; font-size: 16px; }
        .check-list svg { color: var(--magenta); width: 20px; height: 20px; margin-top: 2px; }
        .check-list.compact { margin-top: 0; }
        .process-list { list-style: none; padding: 0; margin: 24px 0 0; display: grid; border-top: 1px solid var(--line); }
        .process-list li { display: grid; grid-template-columns: 38px minmax(0, 1fr); gap: 14px; align-items: baseline; padding: 15px 0; border-bottom: 1px solid var(--line); font-size: 16px; }
        .process-number { color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .08em; }

        .resource-chain {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          padding: 22px;
          border-radius: 20px;
          background: var(--surface);
          border: 1px solid var(--line);
          margin: 28px 0 30px;
        }
        .resource-chip { background: #fff; border: 1px solid var(--line-strong); border-radius: 999px; padding: 8px 12px; color: var(--ink); font-size: 14px; font-weight: 600; }
        .resource-arrow { color: #9AA4B2; }
        .model-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); margin-top: 8px; }
        .model-item { padding: 22px 0; border-bottom: 1px solid var(--line); }
        .model-item:nth-child(odd) { padding-right: 26px; }
        .model-item:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--line); }
        .model-item strong { display: block; color: var(--ink); font-size: 17px; font-weight: 600; }
        .model-item span { color: var(--muted); font-size: 16px; }

        .step-heading { display: grid; grid-template-columns: 52px minmax(0, 1fr); gap: 18px; align-items: start; margin-bottom: 24px; }
        .step-badge { width: 52px; height: 52px; display: grid; place-items: center; border-radius: 16px; background: var(--blush); color: var(--magenta); font-size: 15px; font-weight: 600; }
        .step-heading h2 { margin-top: 4px; }
        .step-heading p { margin-top: 12px; max-width: 760px; font-size: 18px; color: #4F5C70; }
        .endpoint-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 26px 0; }
        .endpoint-box { padding: 22px; border: 1px solid var(--line); border-radius: 20px; background: #fff; }
        .endpoint-box .endpoint-label { color: var(--muted); font-size: 14px; }
        .endpoint-box code { color: var(--ink); font-weight: 600; font-size: 15px; overflow-wrap: anywhere; }

        .code-card { margin: 26px 0 30px; border-radius: 22px; overflow: hidden; background: var(--code); border: 1px solid #252E40; box-shadow: 0 18px 40px rgba(16,23,42,.1); min-width: 0; }
        .code-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 18px; padding: 11px 14px 11px 18px; border-bottom: 1px solid rgba(255,255,255,.1); background: #182033; }
        .code-tabs { display: flex; gap: 4px; min-width: 0; overflow-x: auto; }
        .code-tab { background: transparent; border: 0; color: #AEB9C8; padding: 8px 10px; border-radius: 9px; cursor: pointer; font-size: 14px; font-weight: 600; white-space: nowrap; }
        .code-tab.active { color: #fff; background: rgba(255,255,255,.09); }
        .copy-button { border: 1px solid rgba(255,255,255,.16); background: transparent; color: #fff; border-radius: 9px; min-height: 34px; padding: 0 11px; font-size: 13px; font-weight: 600; cursor: pointer; }
        pre { margin: 0; padding: 24px; overflow: auto; max-width: 100%; color: #E8EDF5; font-size: 14px; line-height: 1.65; tab-size: 2; }
        code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; }
        .inline-code { font-family: "SFMono-Regular", Consolas, monospace; background: var(--surface); border: 1px solid var(--line); padding: 2px 6px; border-radius: 7px; font-size: .92em; overflow-wrap: anywhere; }

        .context-panel { display: grid; grid-template-columns: .84fr 1.16fr; border: 1px solid var(--line); border-radius: 24px; overflow: hidden; margin: 30px 0; }
        .context-copy { padding: 28px; background: #fff; }
        .context-copy h3 { margin-top: 0; }
        .context-copy p { color: var(--muted); }
        .context-meta { padding: 28px; background: var(--surface); }
        .context-row { padding: 12px 0; border-bottom: 1px solid var(--line); }
        .context-row:last-child { border-bottom: 0; }
        .context-row span { display: block; color: var(--muted); font-size: 13px; }
        .context-row strong { display: block; color: var(--ink); font-size: 16px; font-weight: 600; margin-top: 3px; overflow-wrap: anywhere; }

        .change-board { margin: 28px 0; border-radius: 24px; border: 1px solid var(--line); overflow: hidden; }
        .change-board-head { display: flex; align-items: center; justify-content: space-between; gap: 16px; padding: 18px 22px; background: var(--surface); border-bottom: 1px solid var(--line); }
        .change-board-head strong { color: var(--ink); }
        .change-board-head span { font-size: 14px; color: var(--muted); }
        .change-row { display: grid; grid-template-columns: 34px minmax(0, 1fr) auto; gap: 14px; align-items: center; padding: 17px 22px; border-bottom: 1px solid var(--line); }
        .change-row:last-child { border-bottom: 0; }
        .change-mark { width: 26px; height: 26px; border-radius: 8px; display: grid; place-items: center; font-weight: 600; font-size: 15px; background: var(--blush); color: var(--magenta); }
        .change-row strong { color: var(--ink); font-size: 16px; overflow-wrap: anywhere; }
        .change-row p { color: var(--muted); font-size: 16px; }
        .status-pill { border-radius: 999px; padding: 6px 9px; background: var(--surface); border: 1px solid var(--line); font-size: 12px; color: #556174; white-space: nowrap; }

        .event-timeline { margin: 28px 0 24px; border-top: 1px solid var(--line); }
        .event-row { display: grid; grid-template-columns: 170px minmax(0,1fr) 90px; gap: 18px; align-items: baseline; padding: 15px 0; border-bottom: 1px solid var(--line); }
        .event-row code { color: var(--magenta-deep); font-size: 13px; overflow-wrap: anywhere; }
        .event-row span { color: var(--text); font-size: 16px; }
        .event-row time { color: var(--muted); font-size: 13px; text-align: right; }

        .quality-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); margin-top: 28px; }
        .quality-item { padding: 24px 0; border-bottom: 1px solid var(--line); }
        .quality-item:nth-child(odd) { padding-right: 28px; }
        .quality-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
        .quality-item h3 { margin: 0; font-size: 20px; }
        .quality-item p { color: var(--muted); margin-top: 8px; }
        .validation-example { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin: 28px 0; }
        .validation-box { padding: 22px; border-radius: 20px; border: 1px solid var(--line); }
        .validation-box.good { background: #F7FBF9; }
        .validation-box.bad { background: #FFF8F8; }
        .validation-box .mini-label { font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; color: var(--magenta); }
        .validation-box code { display: block; margin-top: 9px; color: var(--ink); font-size: 15px; line-height: 1.55; overflow-wrap: anywhere; }
        .validation-box p { margin-top: 9px; color: var(--muted); font-size: 16px; }

        .release-gate { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin: 30px 0; border: 1px solid var(--line); border-radius: 22px; overflow: hidden; }
        .gate-cell { padding: 22px; background: #fff; }
        .gate-cell:not(:last-child) { border-right: 1px solid var(--line); }
        .gate-cell span { color: var(--muted); font-size: 13px; }
        .gate-cell strong { display: block; color: var(--ink); font-size: 17px; margin-top: 4px; font-weight: 600; }
        .gate-cell strong.ready { color: var(--magenta-deep); }

        .split-editorial { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; margin-top: 28px; }
        .editorial-panel { padding: 28px; border-radius: 22px; border: 1px solid var(--line); background: #fff; }
        .editorial-panel h3 { margin: 0; }
        .editorial-panel p { color: var(--muted); margin-top: 10px; }
        .editorial-panel .editorial-link { margin-top: 16px; }

        .workflow-rows { margin-top: 28px; border-top: 1px solid var(--line); }
        .workflow-row { display: grid; grid-template-columns: 180px minmax(0, 1fr); gap: 28px; padding: 25px 0; border-bottom: 1px solid var(--line); align-items: baseline; }
        .workflow-row h3 { margin: 0; font-size: 19px; }
        .workflow-row p { color: var(--muted); }

        .formats-table { margin-top: 28px; border: 1px solid var(--line); border-radius: 22px; overflow: hidden; }
        .format-row { display: grid; grid-template-columns: .75fr 1.25fr; }
        .format-row > div { padding: 16px 20px; font-size: 16px; }
        .format-row:not(:last-child) { border-bottom: 1px solid var(--line); }
        .format-row > div:first-child { color: var(--ink); font-weight: 600; background: var(--surface); border-right: 1px solid var(--line); }
        .format-row > div:last-child { color: #556174; }

        .accordion { border-top: 1px solid var(--line); margin-top: 28px; }
        .accordion-item { border-bottom: 1px solid var(--line); }
        .accordion-item > button { width: 100%; border: 0; background: transparent; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 22px 2px; text-align: left; color: var(--ink); font-size: 17px; font-weight: 600; cursor: pointer; }
        .accordion-symbol { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 50%; background: var(--surface); color: var(--magenta); flex: 0 0 auto; }
        .accordion-panel { padding: 0 48px 24px 2px; }
        .accordion-panel p { color: #586477; max-width: 820px; }

        .related-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; margin-top: 28px; }
        .related-link { display: block; text-decoration: none; padding: 24px; border: 1px solid var(--line); border-radius: 20px; transition: border-color .18s ease, transform .18s ease, box-shadow .18s ease; }
        .related-link:hover { border-color: #C8CFD9; transform: translateY(-2px); box-shadow: 0 14px 30px rgba(16,23,42,.06); }
        .related-link span { color: var(--magenta); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; font-weight: 600; }
        .related-link h3 { font-size: 20px; margin-top: 8px; }
        .related-link p { color: var(--muted); margin-top: 8px; }

        .editorial-link { display: inline-flex; align-items: center; gap: 6px; color: var(--magenta) !important; font-size: 15px; font-weight: 600; text-decoration: none; }
        .editorial-link svg { width: 16px; height: 16px; transition: transform .18s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }

        .final-cta { padding: 96px 0; background: linear-gradient(135deg, #fff 0%, #FDF2F7 100%); border-top: 1px solid var(--line); }
        .final-cta-inner { width: min(var(--max), calc(100% - 112px)); margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 48px; align-items: center; }
        .final-cta h2 { max-width: 760px; }
        .final-cta p { max-width: 720px; font-size: 18px; color: #4F5C70; margin-top: 18px; }
        .final-cta-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; min-width: 235px; }
        .final-cta .editorial-link { justify-content: center; min-height: 38px; }

        @media (max-width: 1180px) {
          .shell, .workflow-strip, .docs-layout, .final-cta-inner { width: min(var(--max), calc(100% - 80px)); }
          .docs-layout { grid-template-columns: 205px minmax(0, 1fr); gap: 40px; }
          .page-toc { display: none; }
          .workflow-strip { grid-template-columns: repeat(3, minmax(0,1fr)); }
          .workflow-step:nth-child(3)::after { display: none; }
          .workflow-step:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        }

        @media (max-width: 900px) {
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .shell, .workflow-strip, .docs-layout, .final-cta-inner { width: calc(100% - 48px); }
          .hero { padding: 92px 0 76px; }
          .build-band { padding: 72px 0; }
          .build-panel { grid-template-columns: 1fr; gap: 34px; padding: 38px; }
          .workflow-strip { margin-bottom: 76px; }
          .docs-layout { display: block; padding-bottom: 80px; }
          .docs-nav { display: none; }
          .mobile-docs { display: block; margin-bottom: 52px; border: 1px solid var(--line); border-radius: 18px; background: #fff; overflow: hidden; }
          .mobile-docs summary { list-style: none; min-height: 56px; padding: 0 18px; display: flex; align-items: center; justify-content: space-between; gap: 16px; color: var(--ink); font-size: 15px; font-weight: 600; cursor: pointer; }
          .mobile-docs summary::-webkit-details-marker { display: none; }
          .mobile-docs summary svg { width: 18px; height: 18px; }
          .mobile-docs[open] summary { border-bottom: 1px solid var(--line); }
          .mobile-docs nav { display: grid; padding: 10px 18px 16px; }
          .mobile-docs nav a { text-decoration: none; color: #596578; padding: 8px 0; font-size: 15px; }
          .mobile-docs nav a.active { color: var(--magenta); font-weight: 600; }
          .article-section { padding-bottom: 72px; }
          .article-section:not(:last-child) { margin-bottom: 72px; }
          .callout-grid { grid-template-columns: 1fr; }
          .context-panel { grid-template-columns: 1fr; }
          .quality-grid, .model-grid { grid-template-columns: 1fr; }
          .model-item:nth-child(odd), .quality-item:nth-child(odd) { padding-right: 0; }
          .model-item:nth-child(even), .quality-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .release-gate { grid-template-columns: repeat(2, minmax(0,1fr)); }
          .gate-cell:nth-child(2) { border-right: 0; }
          .gate-cell:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
          .split-editorial, .related-grid { grid-template-columns: 1fr; }
          .final-cta-inner { grid-template-columns: 1fr; gap: 30px; }
          .final-cta-actions { flex-direction: row; flex-wrap: wrap; min-width: 0; }
        }

        @media (max-width: 640px) {
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          .shell, .workflow-strip, .docs-layout, .final-cta-inner { width: calc(100% - 40px); }
          .hero { padding: 72px 0 64px; }
          .hero-inner { padding: 0 20px; }
          .hero-copy { font-size: 18px; }
          .hero-actions { display: grid; grid-template-columns: 1fr; gap: 10px; }
          .cta { width: 100%; }
          .preview-note { flex-direction: column; align-items: center; text-align: center; padding: 14px 16px; }
          .build-band { padding: 64px 0; }
          .build-panel { padding: 28px 22px; border-radius: 24px; }
          .build-meta-row { grid-template-columns: 1fr; gap: 3px; }
          .workflow-strip { grid-template-columns: 1fr; margin-bottom: 64px; }
          .workflow-step { padding: 22px 18px; display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 12px; }
          .workflow-number { grid-row: 1 / 3; margin-top: 3px; }
          .workflow-step h3, .workflow-step p { margin-top: 0; }
          .workflow-step p { margin-top: 5px; }
          .workflow-step::after { display: none !important; }
          .workflow-step:not(:last-child) { border-bottom: 1px solid var(--line); }
          .mobile-docs { margin-bottom: 46px; }
          .resource-chain { display: grid; grid-template-columns: 1fr; gap: 0; padding: 16px; }
          .resource-chip { width: 100%; border-radius: 12px; padding: 10px 12px; text-align: left; }
          .resource-arrow { justify-self: center; transform: rotate(90deg); line-height: 1; padding: 4px 0; }
          .section-heading p, .step-heading p { font-size: 17px; }
          .article-section { padding-bottom: 64px; }
          .article-section:not(:last-child) { margin-bottom: 64px; }
          .step-heading { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .step-badge { width: 44px; height: 44px; border-radius: 14px; }
          .endpoint-grid, .validation-example { grid-template-columns: 1fr; }
          .code-toolbar { align-items: stretch; }
          .code-tabs { padding-bottom: 2px; }
          pre { padding: 20px; font-size: 13px; }
          .context-copy, .context-meta { padding: 22px; }
          .change-board-head { align-items: flex-start; flex-direction: column; }
          .change-row { grid-template-columns: 30px minmax(0, 1fr); }
          .status-pill { grid-column: 2; justify-self: start; }
          .event-row { grid-template-columns: 1fr; gap: 3px; }
          .event-row time { text-align: left; }
          .release-gate { grid-template-columns: 1fr; }
          .gate-cell { border-right: 0 !important; border-bottom: 1px solid var(--line); }
          .gate-cell:last-child { border-bottom: 0; }
          .workflow-row { grid-template-columns: 1fr; gap: 8px; }
          .format-row { grid-template-columns: 1fr; }
          .format-row > div:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .accordion-item > button { font-size: 16px; align-items: flex-start; }
          .accordion-panel { padding-right: 2px; }
          .final-cta { padding: 72px 0; }
          .final-cta-actions { display: grid; grid-template-columns: 1fr; }
          .related-link { padding: 22px; }
        }

        @media (max-width: 350px) {
          .hero-inner { padding: 0 18px; }
          .shell, .workflow-strip, .docs-layout, .final-cta-inner { width: calc(100% - 40px); }
          h1 { font-size: 38px; letter-spacing: -.035em; }
          .code-toolbar { flex-direction: column; gap: 8px; }
          .copy-button { align-self: flex-end; }
        }
      `}</style>

      <main>
        <section className="hero" aria-labelledby="page-title">
          <div className="hero-inner">
            <div className="eyebrow">Software Localization API</div>
            <h1 id="page-title">Complete Your First Software Localization Workflow</h1>
            <p className="hero-copy">
              Configure your environment, create a project, synchronize a structured resource file, localize changed strings, apply professional review and software-specific QA, and retrieve a release-ready localized build.
            </p>
            <p className="hero-subcopy">
              Start with a direct resource-file workflow, then extend the same foundation to repositories, branches, webhooks, localized testing, and CI/CD automation.
            </p>
            <div className="hero-actions">
              <a className="cta cta-primary" href={LINKS.reference}><span>Explore API Reference</span><ArrowIcon /></a>
              <a className="cta cta-secondary" href={LINKS.access}><span>Request API Access</span><ArrowIcon /></a>
            </div>
            <div className="preview-note" role="note">
              <strong>Preview</strong>
              <span>Use this preview guide to plan your integration. Interactive requests are enabled for approved integrations as Software Localization API access becomes available.</span>
            </div>
          </div>
        </section>

        <section className="build-band" id="overview">
          <div className="shell">
            <div className="build-panel">
              <SectionHeading
                eyebrow="What You Will Build"
                title="Localize a Software Resource From Source to Release"
                intro="This walkthrough follows an account-security JSON resource through project setup, change synchronization, French localization, professional review, quality validation, and localized build delivery."
              />
              <div className="build-meta">
                {sampleMeta.map(([label, value]) => (
                  <div className="build-meta-row" key={label}><span>{label}</span><strong>{value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="workflow-strip" aria-label="Software localization workflow overview">
          {workflowSteps.map(([number, title, text]) => (
            <div className="workflow-step" key={number}>
              <div className="workflow-number">{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>

        <div className="docs-layout">
          <DocsNavigation />
          <article className="article">
            <MobileDocsNavigation />

            <section className="article-section" id="before-you-begin">
              <SectionHeading
                title="Before You Begin"
                intro="Prepare the access, development environment, source resource, and internationalization foundation required for a reliable first integration."
              />
              <ul className="check-list">
                {["An approved Stepes Software Localization API key", "Access to the assigned sandbox or production environment", "cURL, Postman, Node.js, Python, or another server-side development environment", "A supported structured software resource file", "A defined source locale and at least one target locale", "Permission to submit the selected software content", "A secure secrets-management process", "A stable application or project reference for reconciling API activity"].map((item) => (
                  <li key={item}><CheckIcon /><span>{item}</span></li>
                ))}
              </ul>

              <div className="quiet-note">
                <p><strong>Keep credentials server-side.</strong> Do not place API keys in browser-delivered JavaScript, mobile application packages, query strings, public repositories, screenshots, issue trackers, or application logs.</p>
              </div>

              <h3>Prepare an Internationalized Resource</h3>
              <p>
                The API manages localization content; it does not replace software internationalization. Externalize user-facing strings, use stable keys, document variables and character limits, and confirm that your application can load locale-specific resources correctly.
              </p>
              <div className="callout-grid">
                <div className="callout-item"><div className="label">Structure</div><h3>Externalize Interface Text</h3><p>Keep customer-facing content in supported resource files rather than hard-coded application strings.</p></div>
                <div className="callout-item"><div className="label">Context</div><h3>Document Runtime Behavior</h3><p>Identify placeholders, plural logic, grammatical role, visual constraints, and product terminology.</p></div>
                <div className="callout-item"><div className="label">Validation</div><h3>Test Locale Loading</h3><p>Confirm that the application resolves locale-specific resources and regional formatting correctly.</p></div>
              </div>
              <LinkArrow href={LINKS.intlVsLocalization}>Internationalization vs. Localization Guide</LinkArrow>
            </section>

            <section className="article-section" id="resource-model">
              <SectionHeading
                title="Understand the Software Localization Resource Model"
                intro="Software localization preserves the relationships among products, branches, resource files, translation keys, locale values, reviews, quality results, and releases."
              />
              <div className="resource-chain" aria-label="Software localization resource relationship">
                {["Organization", "Workspace", "Project", "Repository", "Branch", "Resource File", "Translation Key", "Locale Translation", "Review State", "Localized Build"].map((item, index, array) => (
                  <React.Fragment key={item}>
                    <span className="resource-chip">{item}</span>
                    {index < array.length - 1 ? <span className="resource-arrow">→</span> : null}
                  </React.Fragment>
                ))}
              </div>
              <div className="model-grid">
                {resourceModel.map(([title, text]) => (
                  <div className="model-item" key={title}><strong>{title}</strong><span>{text}</span></div>
                ))}
              </div>
              <p className="lead" style={{ marginTop: 26 }}>
                A first implementation can begin with one workspace, one project, one branch, one resource file, and one target locale. Add repository mappings, parallel release branches, and broader workflow controls as your localization program grows.
              </p>
              <LinkArrow href={LINKS.overview}>Explore the Software Localization API</LinkArrow>
            </section>

            <section className="article-section" id="configure-environment">
              <div className="step-heading">
                <div className="step-badge">01</div>
                <div><h2>Configure Your API Environment</h2><p>Store the base URL and API key in secure environment variables so the same integration code can operate safely across assigned environments.</p></div>
              </div>
              <div className="endpoint-grid">
                <div className="endpoint-box"><div className="endpoint-label">Sandbox</div><code>https://api.sandbox.stepes.com/v2</code></div>
                <div className="endpoint-box"><div className="endpoint-label">Production</div><code>https://api.stepes.com/v2</code></div>
              </div>
              <CodeTabs tabs={codeExamples.environment} />
              <p>
                Send the assigned API key in the <span className="inline-code">Authorization</span> header using the bearer scheme. Additional headers may apply for workspace context, idempotency, tracing, or operation-specific controls.
              </p>
              <div className="quiet-note"><p>Review the API Reference for the required headers, schemas, responses, events, and error definitions for each operation.</p></div>
            </section>

            <section className="article-section" id="authenticate">
              <div className="step-heading">
                <div className="step-badge">02</div>
                <div><h2>Authenticate Your Application</h2><p>Verify bearer authentication from a secure server-side environment, then confirm the assigned environment, accessible workspace, and effective permissions.</p></div>
              </div>
              <CodeTabs tabs={codeExamples.auth} />
              <h3>Confirm the Returned Context</h3>
              <ul className="check-list">
                {["Organization and workspace", "Environment and API version", "Integration identity", "Assigned permissions", "Available software-localization capabilities"].map((item) => <li key={item}><CheckIcon /><span>{item}</span></li>)}
              </ul>
              <h3>Authentication Troubleshooting</h3>
              <p>Confirm the API key, bearer header, base URL, and target environment. Use the returned <span className="inline-code">Stepes-Request-Id</span> when troubleshooting authentication or permission failures, and rotate any key that may have been exposed.</p>
            </section>

            <section className="article-section" id="create-project">
              <div className="step-heading">
                <div className="step-badge">03</div>
                <div><h2>Create a Software Localization Project</h2><p>Define the product, source locale, target locales, resource format, workflow, language assets, review requirements, quality gates, and delivery behavior.</p></div>
              </div>
              <div className="quiet-note"><p><strong>Example project configuration.</strong> Use the operation path, field names, permissions, and validation rules provided for your assigned API version.</p></div>
              <CodeTabs tabs={codeExamples.project} />
              <h3>Choose the Right Workflow</h3>
              <p>
                An internal diagnostic message, customer-facing navigation label, payment confirmation, legal notice, and medical warning carry different levels of visibility and risk. Configure translation and review based on content type, technical complexity, target market, regulatory importance, and release requirements.
              </p>
              <div className="workflow-rows">
                {[
                  ["AI Translation", "Use controlled automation for eligible internal, diagnostic, high-frequency, or lower-risk software content."],
                  ["AI + Human Review", "Combine speed with professional linguistic review for customer-facing interfaces, onboarding, settings, notifications, and support features."],
                  ["Professional Translation", "Route regulated, safety-sensitive, legal, medical, financial, or publication-critical content to qualified linguists."],
                  ["Product Approval", "Let designated stakeholders confirm terminology, functionality, market suitability, and product intent before release."],
                ].map(([title, text]) => <div className="workflow-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
              </div>
              <div className="split-editorial">
                <div className="editorial-panel">
                  <h3>Use Translation Memory First</h3>
                  <p>Reuse approved product language across platforms, modules, versions, and markets while preserving review history.</p>
                  <LinkArrow href={LINKS.translationMemory}>Explore Translation Memory</LinkArrow>
                </div>
                <div className="editorial-panel">
                  <h3>Apply Approved Terminology</h3>
                  <p>Protect product names, feature labels, technical vocabulary, regulated terms, and words that must remain untranslated.</p>
                  <LinkArrow href={LINKS.terminology}>Explore Terminology Management</LinkArrow>
                </div>
              </div>
              <LinkArrow href={LINKS.aiHuman}>AI + Human Translation Workflows</LinkArrow>
            </section>

            <section className="article-section" id="synchronize-resources">
              <div className="step-heading">
                <div className="step-badge">04</div>
                <div><h2>Synchronize a Resource File</h2><p>Submit a complete source resource or synchronize only the new and updated content identified by your development workflow.</p></div>
              </div>
              <CodeTabs tabs={codeExamples.source} />

              <div className="context-panel">
                <div className="context-copy">
                  <h3>Add String-Level Context</h3>
                  <p>Short software strings are often ambiguous in isolation. Provide the information translators and reviewers need to understand meaning, interface location, user action, grammatical role, and technical constraints.</p>
                </div>
                <div className="context-meta">
                  <div className="context-row"><span>Translation key</span><strong>account.security.reset_password_button</strong></div>
                  <div className="context-row"><span>Source value</span><strong>Reset password</strong></div>
                  <div className="context-row"><span>Developer guidance</span><strong>Primary action on the account-security confirmation screen.</strong></div>
                  <div className="context-row"><span>Character limit</span><strong>28 characters</strong></div>
                </div>
              </div>

              <div className="change-board" aria-label="Example resource change summary">
                <div className="change-board-head"><strong>account-security.json</strong><span>4 source changes detected</span></div>
                {[
                  ["+", "password_requirements", "New string · localization required", "New"],
                  ["~", "reset_password_success", "Source updated · review required", "Modified"],
                  ["=", "two_factor_auth", "Unchanged · approved translation retained", "Retained"],
                  ["−", "legacy_security_question", "Removed · archived according to project policy", "Archived"],
                ].map(([mark, key, text, status]) => (
                  <div className="change-row" key={key}>
                    <span className="change-mark">{mark}</span>
                    <div><strong>{key}</strong><p>{text}</p></div>
                    <span className="status-pill">{status}</span>
                  </div>
                ))}
              </div>

              <h3>Validate the Imported Resource</h3>
              <p>Review file format, encoding, duplicate keys, missing values, unsupported syntax, placeholders, plurals, locale compatibility, character limits, and resource integrity before localization begins.</p>
              <div className="quiet-note"><p><strong>Do not ignore import warnings.</strong> A warning may not block synchronization, but it can still affect translation quality, build integrity, or runtime behavior.</p></div>
            </section>

            <section className="article-section" id="start-localization">
              <div className="step-heading">
                <div className="step-badge">05</div>
                <div><h2>Start and Monitor Localization</h2><p>Submit the selected branch, resource, changed strings, and target locales to the configured translation, review, approval, and quality workflow.</p></div>
              </div>
              <div className="quiet-note"><p><strong>Example localization request.</strong> Use the published operation, schema, permissions, status model, and event definitions for your assigned API version.</p></div>
              <CodeTabs tabs={codeExamples.localization} />
              <h3>What Happens After Submission</h3>
              <ol className="process-list">
                {["Reuse approved translation-memory matches.", "Apply product terminology and locale requirements.", "Generate AI translations for eligible content.", "Route selected strings to professional linguists and reviewers.", "Validate placeholders, markup, plurals, terminology, length, and locale completeness.", "Mark approved translations as eligible for a localized build."].map((item, index) => <li key={item}><span className="process-number">{String(index + 1).padStart(2, "0")}</span><span>{item}</span></li>)}
              </ol>

              <h3>Monitor Status Responsibly</h3>
              <p>Polling can support an initial sandbox integration. Increase the interval between checks, respect rate limits, stop at documented terminal states, and handle locale-specific or partial completion without restarting successful work.</p>

              <div className="event-timeline" aria-label="Example software localization events">
                {[
                  ["resource.file.imported", "Resource synchronized", "10:42:18"],
                  ["source.string.changed", "Review routing started", "10:42:21"],
                  ["translation.completed", "Target locale translated", "11:09:04"],
                  ["qa.issue.detected", "Placeholder mismatch flagged", "11:18:37"],
                  ["translation.approved", "Product approval complete", "11:32:55"],
                  ["build.generated", "Localized package ready", "11:35:10"],
                ].map(([event, text, time]) => <div className="event-row" key={event}><code>{event}</code><span>{text}</span><time>{time}</time></div>)}
              </div>
              <p>
                Production integrations should use signed webhooks for meaningful workflow events. Verify signatures against the unchanged raw request body, process every event idempotently, and expect duplicate, delayed, or out-of-order delivery.
              </p>
              <LinkArrow href={LINKS.webhooks}>Configure Webhooks and Events</LinkArrow>
            </section>

            <section className="article-section" id="quality-review">
              <SectionHeading
                eyebrow="Software-Specific QA"
                title="Review Translation and Quality Results"
                intro="A translation can be linguistically accurate and still create a software defect. Validate both language quality and technical integrity before generating a localized build."
              />
              <div className="validation-example">
                <div className="validation-box good"><div className="mini-label">Placeholder Preserved</div><code>Le mot de passe de {'{username}'} a été réinitialisé.</code><p>The runtime value remains available to the application.</p></div>
                <div className="validation-box bad"><div className="mini-label">Placeholder Missing</div><code>Le mot de passe de l’utilisateur a été réinitialisé.</code><p>The target value removes the runtime placeholder and should not pass the release gate.</p></div>
              </div>
              <div className="quality-grid">
                {qualityChecks.map(([title, text]) => <div className="quality-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
              </div>
              <div className="release-gate" aria-label="Example release gate">
                <div className="gate-cell"><span>Locale readiness</span><strong>Complete</strong></div>
                <div className="gate-cell"><span>Required reviews</span><strong>Approved</strong></div>
                <div className="gate-cell"><span>Critical QA issues</span><strong>0</strong></div>
                <div className="gate-cell"><span>Build status</span><strong className="ready">Eligible</strong></div>
              </div>
              <LinkArrow href={LINKS.quality}>Explore Translation Quality Assurance</LinkArrow>
            </section>

            <section className="article-section" id="generate-build">
              <div className="step-heading">
                <div className="step-badge">06</div>
                <div><h2>Generate and Retrieve the Localized Build</h2><p>Compile approved locale values into a technically valid package for testing, integration, or deployment.</p></div>
              </div>
              <CodeTabs tabs={codeExamples.output} />
              <p>
                The output preserves source keys, runtime placeholders, resource syntax, locale mapping, and approved terminology. Before moving it into development, confirm the project, branch, source revision, resource format, approvals, quality results, and file integrity.
              </p>
              <h3>Return the Resource to Development</h3>
              <p>A direct integration can place the completed file in the expected locale directory. A connected workflow can commit the resource to a branch, create a pull request, trigger resource linting, build the localized application, and begin visual or functional localization testing.</p>
              <div className="split-editorial">
                <div className="editorial-panel"><h3>Add Repository Automation</h3><p>Synchronize source resources, preserve branch mappings, and return approved localized files through controlled commit or pull-request workflows.</p></div>
                <div className="editorial-panel"><h3>Add Localization to CI/CD</h3><p>Detect resource changes, enforce locale readiness and QA gates, retrieve approved builds, run tests, and continue deployment.</p></div>
              </div>
              <LinkArrow href={LINKS.continuousLocalization}>Continuous Software Localization Guide</LinkArrow>
            </section>

            <section className="article-section">
              <SectionHeading
                title="Supported Software Localization Formats"
                intro="Localize structured resources across web, mobile, desktop, cloud, embedded, gaming, and cross-platform development environments."
              />
              <div className="formats-table">
                {formats.map(([platform, format]) => <div className="format-row" key={platform}><div>{platform}</div><div>{format}</div></div>)}
              </div>
              <LinkArrow href={LINKS.resourceFiles}>View Resource Files and Formats</LinkArrow>
            </section>

            <section className="article-section" id="production-readiness">
              <SectionHeading
                title="Production Readiness Checklist"
                intro="Complete a structured security, reliability, workflow, quality, webhook, monitoring, and delivery review before moving automation into production."
              />
              <Accordion items={readinessGroups} />
              <div className="split-editorial">
                <div className="editorial-panel"><h3>Security and Governance</h3><p>Protect credentials, scope access, separate environments, retain auditability, and align data handling with organizational requirements.</p><LinkArrow href={LINKS.security}>Explore Enterprise Security</LinkArrow></div>
                <div className="editorial-panel"><h3>Localization Testing</h3><p>Run linguistic, visual, functional, technical, and release-readiness checks before deployment.</p><LinkArrow href={LINKS.testingChecklist}>Software Localization Testing Checklist</LinkArrow></div>
              </div>
            </section>

            <section className="article-section" id="faq">
              <SectionHeading
                title="Software Localization API FAQ"
                intro="Review common questions about software resource synchronization, continuous localization, quality assurance, review, repositories, and deployment automation."
              />
              <Accordion items={faqItems} />
            </section>

            <section className="article-section">
              <SectionHeading
                title="Extend Your Software Localization Integration"
                intro="Use the same foundation to add deeper API definitions, event handling, language assets, testing, security, and managed localization support."
              />
              <div className="related-grid">
                {[
                  ["Developer Documentation", "API Reference", "Browse methods, schemas, responses, events, errors, and integration conventions.", LINKS.reference],
                  ["Event Automation", "Webhooks and Events", "Configure signatures, retries, idempotency, history, and failure recovery.", LINKS.webhooks],
                  ["Language Assets", "Translation Memory", "Reuse approved multilingual product content across releases and platforms.", LINKS.translationMemory],
                  ["Language Governance", "Terminology Management", "Control product names, feature labels, technical vocabulary, and regulated terms.", LINKS.terminology],
                  ["Professional Services", "Software Localization Services", "Add localization engineering, testing, project management, and expert translation.", LINKS.softwareServices],
                  ["Industry Expertise", "Software & SaaS Translation Services", "Support global software products with industry-specific translation expertise.", LINKS.softwareIndustry],
                ].map(([label, title, text, href]) => (
                  <a className="related-link" href={href} key={title}><span>{label}</span><h3>{title}</h3><p>{text}</p></a>
                ))}
              </div>
            </section>
          </article>
          <OnThisPage />
        </div>

        <section className="final-cta">
          <div className="final-cta-inner">
            <div>
              <h2>Build Localization Into Your Next Release</h2>
              <p>Connect your development workflow to Stepes and manage software localization from resource synchronization through translation, professional review, quality assurance, and release-ready delivery.</p>
            </div>
            <div className="final-cta-actions">
              <a className="cta cta-primary" href={LINKS.access}><span>Request API Access</span><ArrowIcon /></a>
              <a className="cta cta-secondary" href={LINKS.reference}><span>Explore API Reference</span><ArrowIcon /></a>
              <LinkArrow href={LINKS.access}>Talk to an Expert</LinkArrow>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
