import React, { useState } from "react";

const PAGE_URL = "https://www.stepes.com/developers/translation-api/getting-started/";

const documentationNav = [
  {
    label: "Translation API",
    href: "https://www.stepes.com/developers/translation-api/",
    children: [
      ["Getting Started", PAGE_URL, true],
      ["Core Concepts", "https://www.stepes.com/developers/translation-api/core-concepts/"],
      ["Workflows", "https://www.stepes.com/developers/translation-api/workflows/"],
      ["Files and Content", "https://www.stepes.com/developers/translation-api/files-and-content/"],
      ["Languages and Locales", "https://www.stepes.com/developers/translation-api/languages-and-locales/"],
      ["Status and Webhooks", "https://www.stepes.com/developers/translation-api/status-and-webhooks/"],
      ["Errors and Operations", "https://www.stepes.com/developers/translation-api/errors-and-operations/"],
      ["API Reference", "https://www.stepes.com/developers/translation-api/reference/"],
    ],
  },
  {
    label: "Developer Resources",
    children: [
      ["Authentication", "https://www.stepes.com/developers/authentication/"],
      ["Developer Support", "https://www.stepes.com/developers/support/"],
      ["Changelog", "https://www.stepes.com/developers/changelog/"],
      ["Security", "https://www.stepes.com/security/"],
    ],
  },
];

const tocItems = [
  ["Overview", "overview"],
  ["Before You Begin", "before-you-begin"],
  ["Resource Model", "resource-model"],
  ["Step 1: Environment", "configure-environment"],
  ["Step 2: Authentication", "authenticate"],
  ["Step 3: Create Project", "create-project"],
  ["Step 4: Monitor Status", "monitor-status"],
  ["Step 5: Retrieve Results", "retrieve-results"],
  ["File Translation", "file-translation"],
  ["Webhooks", "webhooks"],
  ["Workflow Options", "workflow-options"],
  ["Errors", "errors"],
  ["Production", "production"],
  ["Continue Building", "continue-building"],
  ["FAQ", "faq"],
];

const workflowSteps = [
  {
    title: "Configure Your Environment",
    description: "Store the base URL and credentials securely for the API environment assigned to your integration.",
  },
  {
    title: "Authenticate Your Application",
    description: "Confirm that the credential is valid and authorized for the intended account or workspace.",
  },
  {
    title: "Create a Translation Project",
    description: "Submit source content, locale information, target languages, and the required translation workflow.",
  },
  {
    title: "Monitor Translation Progress",
    description: "Track the project and its language jobs until they reach a result-bearing or terminal state.",
  },
  {
    title: "Retrieve the Completed Result",
    description: "Return translated content to the correct application record, content item, file, or release.",
  },
];

const resourceItems = [
  ["Organization", "The enterprise account and its administrative, security, and governance context."],
  ["Workspace", "A controlled environment for a team, application, business unit, product, or localization program."],
  ["Translation Project", "The top-level request connecting source content, locales, workflow requirements, and delivery settings."],
  ["Content", "The text, structured content, localization resource, or document submitted for translation."],
  ["Language Jobs", "The target-specific processing activities created for the locales included in the project."],
  ["Review Activities", "Optional human translation, post-editing, linguistic review, quality assurance, or approval steps."],
  ["Deliveries", "The completed translated text, structured response, localization package, or downloadable file."],
];

const statusRows = [
  ["Accepted", "The request passed initial validation and the project was created.", "Save the project identifier and begin monitoring."],
  ["Queued", "The project or language job is waiting to begin processing.", "Continue monitoring at the recommended interval."],
  ["Processing", "Translation or automated processing is in progress.", "Continue monitoring or wait for a webhook event."],
  ["In Review", "Human review, quality assurance, or approval is in progress.", "Do not treat the project as complete."],
  ["Completed", "All required target-language work completed successfully.", "Retrieve and validate the available results."],
  ["Partially Completed", "Some target-language jobs completed while others did not.", "Retrieve available results and inspect incomplete jobs."],
  ["Failed", "The project or job could not be completed.", "Review the error details before correcting or retrying."],
  ["Canceled", "Processing ended before completion.", "Stop polling unless the project can be resumed."],
];

const workflowOptions = [
  {
    title: "AI Translation",
    description: "Use controlled automated translation for eligible content that requires rapid, scalable multilingual processing.",
    bestFor: "High-volume, frequently updated, internal, support, or review-bound content.",
  },
  {
    title: "AI Translation with Human Review",
    description: "Combine automated translation with professional linguistic review to improve accuracy, fluency, terminology, tone, and completeness.",
    bestFor: "Customer-facing, technical, product, and recurring content requiring higher confidence.",
  },
  {
    title: "Professional Human Translation",
    description: "Route specialized, regulated, high-risk, or publication-critical content to qualified professional linguists.",
    bestFor: "Legal, medical, financial, regulatory, technical, and high-impact communications.",
  },
  {
    title: "Post-Editing and Linguistic Review",
    description: "Improve machine- or AI-generated output through professional review aligned with the intended audience and use.",
    bestFor: "Content where quality requirements exceed raw automated output but speed remains important.",
  },
  {
    title: "Quality Assurance and Approval",
    description: "Add structured checks and stakeholder approval before translated content is released to downstream systems.",
    bestFor: "Controlled publishing, regulated workflows, and enterprise governance requirements.",
  },
];

const errorRows = [
  ["400", "Invalid request", "Malformed JSON, missing fields, invalid values, or a schema mismatch.", "Correct the request before retrying."],
  ["401", "Authentication failure", "The credential is missing, invalid, expired, revoked, or presented incorrectly.", "Correct the credential or header."],
  ["403", "Insufficient permission", "The credential cannot access the requested workspace, resource, environment, or workflow.", "Use an authorized credential or update access."],
  ["404", "Resource not found", "The requested project, job, file, delivery, or workspace is unavailable to the credential.", "Confirm the identifier and account context."],
  ["409", "Conflicting request", "The request conflicts with an existing resource or previously used idempotency key.", "Retrieve the existing operation or use a new key for a new request."],
  ["413 / 422", "Content or validation error", "The file, locale, content type, or request data does not meet endpoint requirements.", "Correct the source content or configuration."],
  ["429", "Rate or usage limit", "The application exceeded a documented request, concurrency, or account limit.", "Honor retry guidance and reduce request pressure."],
  ["5xx", "Temporary service error", "A temporary platform or infrastructure condition prevented completion.", "Retry only with documented backoff behavior."],
];

const productionGroups = [
  {
    title: "Credentials and Access",
    icon: "key",
    items: [
      "Store secrets in an approved secrets manager.",
      "Separate test and production credentials.",
      "Restrict credentials to required permissions.",
      "Define credential ownership, rotation, and revocation procedures.",
      "Remove unused credentials promptly.",
    ],
  },
  {
    title: "Request Reliability",
    icon: "refresh",
    items: [
      "Use idempotency protection where supported.",
      "Apply safe retries and respect Retry-After guidance.",
      "Preserve project and request identifiers.",
      "Handle partial completion and uncertain network outcomes.",
      "Validate source versions before publishing returned content.",
    ],
  },
  {
    title: "Webhook Reliability",
    icon: "webhook",
    items: [
      "Verify every webhook signature.",
      "Respond promptly and process events asynchronously.",
      "Store processed event identifiers.",
      "Handle duplicate and out-of-order events.",
      "Retrieve current API state before critical actions.",
    ],
  },
  {
    title: "Logging and Observability",
    icon: "pulse",
    items: [
      "Log request, project, job, and event identifiers.",
      "Track response codes, error codes, latency, and final state.",
      "Monitor failed workflows and webhook deliveries.",
      "Avoid logging credentials, secrets, or unnecessary source content.",
      "Preserve enough context for effective technical support.",
    ],
  },
  {
    title: "Content Security",
    icon: "lock",
    items: [
      "Confirm the selected workflow meets data-handling requirements.",
      "Use non-sensitive sample content during testing.",
      "Limit content access to authorized workspaces and users.",
      "Review retention, deletion, regional, and downstream storage requirements.",
      "Protect secured delivery URLs and downloaded files.",
    ],
  },
  {
    title: "Version and Change Management",
    icon: "history",
    items: [
      "Use the documented API version.",
      "Monitor the developer changelog and deprecation notices.",
      "Test changes before production deployment.",
      "Maintain clear integration ownership and dependency records.",
      "Subscribe to platform-status notifications.",
    ],
  },
];

const continuationLinks = [
  ["API Reference", "Endpoint methods, parameters, schemas, responses, errors, and version-specific behavior.", "https://www.stepes.com/developers/translation-api/reference/"],
  ["Authentication", "Credential issuance, secure storage, permissions, rotation, and revocation.", "https://www.stepes.com/developers/authentication/"],
  ["Core Concepts", "Organizations, workspaces, projects, content, jobs, reviews, events, and deliveries.", "https://www.stepes.com/developers/translation-api/core-concepts/"],
  ["Files and Content", "Text, structured data, localization resources, documents, validation, and limits.", "https://www.stepes.com/developers/translation-api/files-and-content/"],
  ["Languages and Locales", "Supported languages, locale identifiers, source handling, and target-language selection.", "https://www.stepes.com/developers/translation-api/languages-and-locales/"],
  ["Translation Workflows", "AI translation, professional translation, review, quality assurance, and delivery configuration.", "https://www.stepes.com/developers/translation-api/workflows/"],
  ["Status and Webhooks", "Project states, status retrieval, event delivery, and signature verification.", "https://www.stepes.com/developers/translation-api/status-and-webhooks/"],
  ["Errors and Operations", "Structured errors, retries, idempotency, rate limits, monitoring, and production reliability.", "https://www.stepes.com/developers/translation-api/errors-and-operations/"],
  ["Developer Support", "Architecture, security, testing, deployment, and troubleshooting assistance.", "https://www.stepes.com/developers/support/"],
];

const faqItems = [
  {
    question: "How do I request access to the Stepes Translation API?",
    answer: "Contact Stepes with information about your application, content types, expected translation volume, source and target languages, required workflows, and implementation timeline. The Stepes team can help determine the appropriate account configuration, API environment, security requirements, and onboarding path.",
    link: ["Request API Access", "https://www.stepes.com/contact-us/"],
  },
  {
    question: "Is a testing or sandbox environment available?",
    answer: "Testing options depend on the API account and integration requirements. Your onboarding information identifies available environments, testing credentials, sample-content expectations, processing limits, and how testing differs from production. Do not submit confidential or regulated content until your organization has approved the environment and workflow.",
  },
  {
    question: "Should my first request use text or a file?",
    answer: "Use a short inline text request for the fastest initial test. It validates authentication, request formatting, status monitoring, and result retrieval with minimal setup. After that workflow succeeds, test a representative file if your production integration will translate documents, software resources, or structured content.",
  },
  {
    question: "Should I specify the source language?",
    answer: "Specify the source locale whenever it is known. Explicit locale information provides more predictable workflow behavior and distinguishes regional variants such as en-US and en-GB. Automatic identification may be available for supported use cases, but it should not replace known metadata in controlled production workflows.",
  },
  {
    question: "Why does the API return 202 Accepted instead of the translation?",
    answer: "Translation projects are processed asynchronously. A 202 Accepted response confirms that the request passed initial validation and entered the translation workflow. Your application can then monitor the project or receive a webhook notification when results become available.",
  },
  {
    question: "Should I poll the project or use webhooks?",
    answer: "Polling is convenient during development and initial testing. Signed webhook notifications are usually more efficient for ongoing production integrations. Many implementations use webhooks for primary event processing and status requests for reconciliation, recovery, and troubleshooting.",
  },
  {
    question: "Can one request include multiple target languages?",
    answer: "Yes. A translation project can include multiple target locales. The API may create a separate language job for each target locale while preserving a single parent project for tracking, workflow management, and delivery.",
  },
  {
    question: "Can a Translation API request include human review?",
    answer: "Yes. Depending on account configuration and project requirements, a workflow may combine AI translation, professional human translation, machine translation post-editing, linguistic review, terminology validation, quality assurance, and customer approval.",
  },
  {
    question: "Can I use translation memory and terminology through the API?",
    answer: "Translation projects can be associated with approved language assets when supported by the account and workflow. Translation memory helps reuse approved translations, while terminology resources control important product, technical, brand, and regulated language.",
  },
  {
    question: "Where can I get help with the integration?",
    answer: "Stepes Developer Support can assist with API access, authentication, environment setup, workflow design, language configuration, files, webhooks, security, error investigation, and production readiness. Include relevant request, project, and event identifiers, but never send API secrets through email or support forms.",
    link: ["Contact Developer Support", "https://www.stepes.com/developers/support/"],
  },
];

const codeExamples = {
  environment: {
    shell: `export STEPES_BASE_URL="YOUR_STEPES_API_BASE_URL"
export STEPES_API_KEY="YOUR_STEPES_API_KEY"`,
    powershell: `$env:STEPES_BASE_URL = "YOUR_STEPES_API_BASE_URL"
$env:STEPES_API_KEY = "YOUR_STEPES_API_KEY"`,
  },
  auth: {
    curl: `curl --request GET \\
  --url "$STEPES_BASE_URL/v2/account" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Accept: application/json"`,
    javascript: `const response = await fetch(
  \`${"${process.env.STEPES_BASE_URL}"}/v2/account\`,
  {
    headers: {
      Authorization: \`Bearer ${"${process.env.STEPES_API_KEY}"}\`,
      Accept: "application/json"
    }
  }
);

const account = await response.json();`,
    python: `import os
import requests

response = requests.get(
    f"{os.environ['STEPES_BASE_URL']}/v2/account",
    headers={
        "Authorization": f"Bearer {os.environ['STEPES_API_KEY']}",
        "Accept": "application/json",
    },
)

account = response.json()`,
  },
  create: {
    curl: `curl --request POST \\
  --url "$STEPES_BASE_URL/v2/translation-projects" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Content-Type: application/json" \\
  --header "Accept: application/json" \\
  --header "Idempotency-Key: first-translation-example-001" \\
  --data '{
    "clientReference": "getting-started-example",
    "sourceLocale": "en-US",
    "targetLocales": ["de-DE"],
    "content": {
      "type": "text",
      "items": [{
        "id": "support-message",
        "text": "Your order has shipped and is expected to arrive within three business days."
      }]
    },
    "workflow": { "mode": "ai_translation" },
    "metadata": { "application": "developer-quickstart" }
  }'`,
    javascript: `const response = await fetch(
  \`${"${process.env.STEPES_BASE_URL}"}/v2/translation-projects\`,
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer ${"${process.env.STEPES_API_KEY}"}\`,
      "Content-Type": "application/json",
      Accept: "application/json",
      "Idempotency-Key": "first-translation-example-001"
    },
    body: JSON.stringify({
      clientReference: "getting-started-example",
      sourceLocale: "en-US",
      targetLocales: ["de-DE"],
      content: {
        type: "text",
        items: [{
          id: "support-message",
          text: "Your order has shipped and is expected to arrive within three business days."
        }]
      },
      workflow: { mode: "ai_translation" }
    })
  }
);`,
    python: `import os
import requests

response = requests.post(
    f"{os.environ['STEPES_BASE_URL']}/v2/translation-projects",
    headers={
        "Authorization": f"Bearer {os.environ['STEPES_API_KEY']}",
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Idempotency-Key": "first-translation-example-001",
    },
    json={
        "clientReference": "getting-started-example",
        "sourceLocale": "en-US",
        "targetLocales": ["de-DE"],
        "content": {
            "type": "text",
            "items": [{
                "id": "support-message",
                "text": "Your order has shipped and is expected to arrive within three business days."
            }]
        },
        "workflow": {"mode": "ai_translation"},
    },
)`,
  },
  monitor: {
    curl: `PROJECT_ID="trp_01JEXAMPLE"

curl --request GET \\
  --url "$STEPES_BASE_URL/v2/translation-projects/$PROJECT_ID" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Accept: application/json"`,
    javascript: `const terminalStates = new Set([
  "completed",
  "partially_completed",
  "failed",
  "canceled"
]);

async function waitForProject(projectId) {
  let delay = 3000;

  while (true) {
    const response = await fetch(
      \`${"${process.env.STEPES_BASE_URL}"}/v2/translation-projects/${"${projectId}"}\`,
      {
        headers: {
          Authorization: \`Bearer ${"${process.env.STEPES_API_KEY}"}\`,
          Accept: "application/json"
        }
      }
    );

    if (!response.ok) {
      throw new Error(\`Status request failed with ${"${response.status}"}\`);
    }

    const project = await response.json();
    if (terminalStates.has(project.status)) return project;

    const retryAfter = Number(response.headers.get("retry-after"));
    const waitTime = Number.isFinite(retryAfter)
      ? retryAfter * 1000
      : delay;

    await new Promise(resolve => setTimeout(resolve, waitTime));
    delay = Math.min(delay * 2, 30000);
  }
}`,
    python: `import os
import time
import requests

TERMINAL_STATES = {
    "completed",
    "partially_completed",
    "failed",
    "canceled",
}

def wait_for_project(project_id):
    delay = 3

    while True:
        response = requests.get(
            f"{os.environ['STEPES_BASE_URL']}/v2/translation-projects/{project_id}",
            headers={
                "Authorization": f"Bearer {os.environ['STEPES_API_KEY']}",
                "Accept": "application/json",
            },
        )
        response.raise_for_status()
        project = response.json()

        if project["status"] in TERMINAL_STATES:
            return project

        retry_after = response.headers.get("Retry-After")
        time.sleep(int(retry_after) if retry_after else delay)
        delay = min(delay * 2, 30)`,
  },
  results: {
    curl: `curl --request GET \\
  --url "$STEPES_BASE_URL/v2/translation-projects/$PROJECT_ID/results" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Accept: application/json"`,
    javascript: `const response = await fetch(
  \`${"${process.env.STEPES_BASE_URL}"}/v2/translation-projects/${"${projectId}"}/results\`,
  {
    headers: {
      Authorization: \`Bearer ${"${process.env.STEPES_API_KEY}"}\`,
      Accept: "application/json"
    }
  }
);

const results = await response.json();`,
    python: `import os
import requests

response = requests.get(
    f"{os.environ['STEPES_BASE_URL']}/v2/translation-projects/{project_id}/results",
    headers={
        "Authorization": f"Bearer {os.environ['STEPES_API_KEY']}",
        "Accept": "application/json",
    },
)

results = response.json()`,
  },
};

const responseExamples = {
  auth: `{
  "id": "org_example",
  "environment": "sandbox",
  "status": "active",
  "apiVersion": "2.1"
}`,
  create: `{
  "id": "trp_01JEXAMPLE",
  "clientReference": "getting-started-example",
  "status": "accepted",
  "sourceLocale": "en-US",
  "targetLocales": ["de-DE"],
  "createdAt": "2026-07-20T15:30:00Z",
  "jobs": [{
    "id": "trj_01JEXAMPLE_DE",
    "targetLocale": "de-DE",
    "status": "queued"
  }],
  "links": {
    "self": "/v2/translation-projects/trp_01JEXAMPLE",
    "results": "/v2/translation-projects/trp_01JEXAMPLE/results"
  }
}`,
  monitor: `{
  "id": "trp_01JEXAMPLE",
  "status": "processing",
  "sourceLocale": "en-US",
  "targetLocales": ["de-DE"],
  "jobs": [{
    "id": "trj_01JEXAMPLE_DE",
    "targetLocale": "de-DE",
    "status": "processing",
    "progress": 65
  }],
  "updatedAt": "2026-07-20T15:30:18Z"
}`,
  results: `{
  "projectId": "trp_01JEXAMPLE",
  "status": "completed",
  "sourceLocale": "en-US",
  "completedAt": "2026-07-20T15:30:24Z",
  "results": [{
    "jobId": "trj_01JEXAMPLE_DE",
    "targetLocale": "de-DE",
    "status": "completed",
    "content": {
      "type": "text",
      "items": [{
        "id": "support-message",
        "translation": "Ihre Bestellung wurde versandt und wird voraussichtlich innerhalb von drei Werktagen eintreffen."
      }]
    }
  }]
}`,
  webhook: `{
  "id": "evt_01JEXAMPLE",
  "type": "translation_project.completed",
  "createdAt": "2026-07-20T15:30:24Z",
  "data": {
    "projectId": "trp_01JEXAMPLE",
    "status": "completed",
    "targetLocales": ["de-DE"],
    "resultsAvailable": true
  }
}`,
  error: `{
  "error": {
    "code": "invalid_target_locale",
    "message": "The target locale is not supported for this request.",
    "field": "targetLocales[0]",
    "requestId": "req_01JEXAMPLE",
    "documentationUrl": "https://www.stepes.com/developers/translation-api/errors-and-operations/"
  }
}`,
};

function Icon({ name, size = 20, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    chevron: <path d="m7 9 5 5 5-5" />,
    check: <path d="m5 12 4 4L19 6" />,
    info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v5" /><path d="M12 8h.01" /></>,
    copy: <><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></>,
    key: <><circle cx="8.5" cy="14.5" r="4.5" /><path d="m12 11 7-7" /><path d="m16 7 2 2" /><path d="m14 9 2 2" /></>,
    lock: <><rect x="5" y="10" width="14" height="10" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    pulse: <path d="M3 12h4l2-5 4 10 2-5h6" />,
    refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.1 8A7 7 0 0 1 18.7 7L20 12" /><path d="M17.9 16A7 7 0 0 1 5.3 17L4 12" /></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 3v5h5" /><path d="M12 7v5l3 2" /></>,
    webhook: <><circle cx="6" cy="6" r="2" /><circle cx="18" cy="12" r="2" /><circle cx="6" cy="18" r="2" /><path d="M8 6h3a5 5 0 0 1 5 5" /><path d="M8 18h3a5 5 0 0 0 5-5" /></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3" /><path d="M13 15h4" /></>,
    menu: <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>,
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={16} />
    </a>
  );
}

function Callout({ type = "note", title, children }) {
  const iconName = type === "security" ? "lock" : type === "production" ? "pulse" : "info";
  return (
    <aside className={`callout callout-${type}`}>
      <span className="callout-icon"><Icon name={iconName} size={19} /></span>
      <div>
        <strong>{title}</strong>
        <div className="callout-body">{children}</div>
      </div>
    </aside>
  );
}

function CodePanel({ panelId, examples, activeTabs, onTabChange, copiedPanel, onCopy, title, endpoint, response, responseLabel = "Example Response" }) {
  const keys = Object.keys(examples);
  const active = activeTabs[panelId] || keys[0];
  const labels = {
    curl: "cURL",
    javascript: "JavaScript",
    python: "Python",
    shell: "Shell",
    powershell: "PowerShell",
  };

  return (
    <div className="code-panel">
      <div className="code-toolbar">
        <div className="code-tabs" role="tablist" aria-label={`${title} code language`}>
          {keys.map((key) => (
            <button
              key={key}
              id={`${panelId}-tab-${key}`}
              type="button"
              role="tab"
              aria-selected={active === key}
              aria-controls={`${panelId}-tabpanel`}
              className={active === key ? "active" : ""}
              onClick={() => onTabChange(panelId, key)}
            >
              {labels[key] || key}
            </button>
          ))}
        </div>
        <button
          className="copy-button"
          type="button"
          aria-label={`Copy ${title} ${labels[active]} code`}
          onClick={() => onCopy(panelId, examples[active])}
        >
          <Icon name={copiedPanel === panelId ? "check" : "copy"} size={16} />
          <span aria-live="polite">{copiedPanel === panelId ? "Copied" : "Copy"}</span>
        </button>
      </div>

      <div className="code-heading">
        <span>{title}</span>
        {endpoint && <code>{endpoint}</code>}
      </div>
      <pre
        id={`${panelId}-tabpanel`}
        className="code-window"
        role="tabpanel"
        aria-labelledby={`${panelId}-tab-${active}`}
        tabIndex="0"
      ><code>{examples[active]}</code></pre>

      {response && (
        <div className="response-panel">
          <div className="response-label">
            <span className="response-dot" />
            <strong>{responseLabel}</strong>
          </div>
          <pre><code>{response}</code></pre>
        </div>
      )}
    </div>
  );
}

function DocsNavigation() {
  return (
    <nav className="docs-navigation" aria-label="Translation API documentation">
      <div className="docs-nav-title">Developer Documentation</div>
      {documentationNav.map((group) => (
        <div className="docs-nav-group" key={group.label}>
          <span>{group.label}</span>
          <ul>
            {group.children.map(([label, href, active]) => (
              <li key={label}>
                <a className={active ? "active" : ""} href={href}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  );
}

function OnThisPage() {
  return (
    <nav className="toc-navigation" aria-label="On this page">
      <div className="toc-title">On This Page</div>
      <ul>
        {tocItems.map(([label, id]) => (
          <li key={id}><a href={`${PAGE_URL}#${id}`}>{label}</a></li>
        ))}
      </ul>
      <div className="toc-support">
        <strong>Need Help?</strong>
        <p>Talk with Stepes about access, architecture, testing, or production readiness.</p>
        <ArrowLink href="https://www.stepes.com/developers/support/">Developer Support</ArrowLink>
      </div>
    </nav>
  );
}

export default function StepesTranslationApiGettingStartedWireframe() {
  const [activeTabs, setActiveTabs] = useState({
    environment: "shell",
    auth: "curl",
    create: "curl",
    monitor: "curl",
    results: "curl",
  });
  const [copiedPanel, setCopiedPanel] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const changeTab = (panelId, key) => {
    setActiveTabs((current) => ({ ...current, [panelId]: key }));
    setCopiedPanel("");
  };

  const copyCode = async (panelId, value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedPanel(panelId);
      window.setTimeout(() => setCopiedPanel(""), 1600);
    } catch {
      setCopiedPanel("");
    }
  };

  return (
    <div className="stepes-getting-started-page">
      <style>{styles}</style>
      <main>
        <section className="hero" id="top">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Translation API v2.1 · Getting Started</p>
              <h1>Get Started with the Stepes Translation API</h1>
              <p className="hero-lead">
                Authenticate your application, create a translation project, submit content, monitor asynchronous processing, and retrieve the completed result. The same project model scales from short text to multilingual files and AI + human translation workflows.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                  Request API Access <Icon name="arrow" size={18} />
                </a>
                <a className="button button-secondary" href="https://www.stepes.com/developers/translation-api/reference/">
                  View API Reference
                </a>
              </div>
            </div>

            <aside className="hero-quickstart" aria-label="Translation API v2.1 quickstart preview">
              <div className="hero-quickstart-head">
                <span className="hero-quickstart-icon"><Icon name="terminal" size={20} /></span>
                <div>
                  <span className="hero-quickstart-label">Quickstart Snapshot</span>
                  <strong>First Translation Request</strong>
                </div>
                <span className="hero-api-release">v2.1</span>
              </div>

              <div className="hero-request-line">
                <span>POST</span>
                <code>/v2/translation-projects</code>
              </div>

              <pre className="hero-code-preview"><code>{`{
  "sourceLocale": "en-US",
  "targetLocales": ["de-DE"],
  "content": {
    "type": "text",
    "items": [{
      "id": "support-message",
      "text": "Your order has shipped."
    }]
  }
}`}</code></pre>

              <div className="hero-response-summary">
                <span className="hero-status-dot" aria-hidden="true" />
                <strong>202 Accepted</strong>
                <span>Project created</span>
              </div>

              <div className="hero-response-meta">
                <span><strong>Project</strong> trp_01JEXAMPLE</span>
                <span><strong>Status</strong> accepted</span>
              </div>
            </aside>
          </div>

          <div className="page-metadata-wrap">
            <div className="shell page-metadata">
              <span><strong>Translation API</strong> v2.1</span>
              <span><strong>Last Reviewed</strong> July 2026</span>
              <span><strong>Examples</strong> cURL · JavaScript · Python</span>
              <span><strong>Workflow</strong> Asynchronous Project Model</span>
            </div>
          </div>
        </section>

        <details className="mobile-docs-nav shell">
          <summary><Icon name="menu" size={19} /> Browse Translation API Documentation</summary>
          <DocsNavigation />
        </details>

        <div className="shell docs-shell">
          <aside className="docs-left"><DocsNavigation /></aside>

          <article className="docs-content">
            <section className="doc-section doc-overview" id="overview">
              <h2>Complete Your First Translation Workflow</h2>
              <p className="section-lead">
                In this guide, you will submit a short English text for translation, monitor the request as it moves through the Stepes workflow, and retrieve the completed target-language result.
              </p>

              <div className="workflow-sequence" aria-label="Translation API quickstart steps">
                {workflowSteps.map((step, index) => (
                  <article key={step.title}>
                    <span className="sequence-number">{String(index + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </article>
                ))}
              </div>

              <p>
                A Stepes translation request is designed as an asynchronous workflow. Instead of keeping a connection open while translation is completed, the API accepts the request, creates the necessary language jobs, and returns a project identifier that your application can use to monitor progress.
              </p>
              <p>
                This model supports rapid automated translation as well as workflows that may include terminology controls, translation memory, professional review, quality assurance, and customer approval.
              </p>

              <div className="flow-strip" aria-label="Translation workflow">
                {[
                  "Your Application",
                  "Translation Project",
                  "Language Jobs",
                  "Quality Workflow",
                  "Multilingual Delivery",
                ].map((item, index, list) => (
                  <React.Fragment key={item}>
                    <span>{item}</span>
                    {index < list.length - 1 && <Icon name="arrow" size={15} />}
                  </React.Fragment>
                ))}
              </div>

              <ArrowLink href="https://www.stepes.com/developers/translation-api/core-concepts/">
                Explore Translation API Core Concepts
              </ArrowLink>
            </section>

            <section className="doc-section" id="before-you-begin">
              <p className="eyebrow">Prerequisites</p>
              <h2>Before You Begin</h2>
              <p className="section-lead">Prepare your account, credentials, tools, and sample content before sending the first request.</p>

              <div className="checklist-grid">
                {[
                  "An approved Stepes API account",
                  "A valid API credential",
                  "Access to the assigned testing or production environment",
                  "cURL, Postman, or a server-side programming environment",
                  "A short source-text sample",
                  "A source locale and at least one target locale",
                  "Permission to submit the selected content",
                  "A secure place to store credentials",
                ].map((item) => (
                  <div className="checklist-item" key={item}>
                    <span><Icon name="check" size={16} /></span>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <Callout type="security" title="Keep API Credentials Server-Side">
                <p>
                  Store credentials in environment variables or an approved secrets-management platform. Never expose them in browser code, mobile applications, public repositories, screenshots, shared documentation, or client-side configuration files.
                </p>
              </Callout>

              <p>
                Use separate credentials for testing and production whenever separate environments are provided. Restrict each credential to the applications, workspaces, and permissions it requires.
              </p>
              <ArrowLink href="https://www.stepes.com/developers/authentication/">
                Review Authentication and Credential Security
              </ArrowLink>
            </section>

            <section className="doc-section" id="resource-model">
              <p className="eyebrow">Core Concepts</p>
              <h2>Understand the Translation Resource Model</h2>
              <p className="section-lead">
                A Stepes API request is organized around a translation project. The project connects source content, target languages, workflow requirements, processing states, and completed deliveries.
              </p>

              <div className="resource-diagram" aria-label="Stepes Translation API resource hierarchy">
                <div className="resource-node resource-node-primary"><strong>Organization</strong><span>Account and governance</span></div>
                <span className="resource-line" aria-hidden="true" />
                <div className="resource-node"><strong>Workspace</strong><span>Team, application, or environment</span></div>
                <span className="resource-line" aria-hidden="true" />
                <div className="resource-node resource-node-project"><strong>Translation Project</strong><span>Content, locales, workflow, and delivery</span></div>
                <div className="resource-branches">
                  {[
                    "Content",
                    "Language Jobs",
                    "Reviews",
                    "Deliveries",
                  ].map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>

              <div className="definition-list">
                {resourceItems.map(([title, description]) => (
                  <article key={title}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <p>
                This guide uses one project with one inline text item and one target locale. The same model can support multiple content items, target languages, file assets, and review stages.
              </p>
              <ArrowLink href="https://www.stepes.com/developers/translation-api/core-concepts/">
                Learn More About Translation API Resources
              </ArrowLink>
            </section>

            <section className="doc-section step-section" id="configure-environment">
              <div className="step-heading">
                <span>01</span>
                <div>
                  <h2>Configure Your API Environment</h2>
                </div>
              </div>
              <p className="section-lead">
                Store the API base URL and credential as environment variables so your application can switch between testing and production without changing integration code.
              </p>

              <CodePanel
                panelId="environment"
                examples={codeExamples.environment}
                activeTabs={activeTabs}
                onTabChange={changeTab}
                copiedPanel={copiedPanel}
                onCopy={copyCode}
                title="Environment Variables"
              />

              <Callout type="note" title="API Version">
                <p>This guide covers Translation API v2.1. Request paths use the major-version <code>/v2/</code> namespace, while endpoint-specific behavior is defined in the API Reference.</p>
              </Callout>

              <h3>Standard Request Headers</h3>
              <div className="inline-code-block">
                <code>Authorization: Bearer YOUR_STEPES_API_KEY</code>
                <code>Content-Type: application/json</code>
                <code>Accept: application/json</code>
              </div>
              <p>
                The authorization header authenticates your application. Content-Type identifies the request body, and Accept identifies the preferred response format. Additional headers may be required for API version selection, workspace context, idempotency, or request tracing.
              </p>

              <Callout type="security" title="Protect Secrets in Transit and at Rest">
                <p>Never send API credentials as query-string parameters or include them in application logs.</p>
              </Callout>

              <ArrowLink href="https://www.stepes.com/developers/translation-api/environments/">
                Review Environments and Base URLs
              </ArrowLink>
            </section>

            <section className="doc-section step-section" id="authenticate">
              <div className="step-heading">
                <span>02</span>
                <div>
                  <h2>Authenticate with the API</h2>
                </div>
              </div>
              <p className="section-lead">
                Send a lightweight authenticated request before submitting content. This confirms that the credential, environment, account context, and API version are working together.
              </p>

              <CodePanel
                panelId="auth"
                examples={codeExamples.auth}
                activeTabs={activeTabs}
                onTabChange={changeTab}
                copiedPanel={copiedPanel}
                onCopy={copyCode}
                title="Verify API Access"
                endpoint="GET /v2/account"
                response={responseExamples.auth}
              />

              <div className="split-notes">
                <article>
                  <span className="status-code">401</span>
                  <h3>Unauthorized</h3>
                  <p>The API could not validate the credential. Confirm the value, header format, environment, expiration, and revocation status.</p>
                </article>
                <article>
                  <span className="status-code">403</span>
                  <h3>Forbidden</h3>
                  <p>The credential is valid but lacks permission for the requested workspace, resource, workflow, or environment.</p>
                </article>
              </div>

              <Callout type="note" title="Authentication Confirms Access, Not Every Permission">
                <p>A successful response confirms that the credential is valid for the environment. Individual workspaces, resources, and translation workflows may still require additional permissions.</p>
              </Callout>

              <ArrowLink href="https://www.stepes.com/developers/authentication/">
                View Complete Authentication Guidance
              </ArrowLink>
            </section>

            <section className="doc-section step-section" id="create-project">
              <div className="step-heading">
                <span>03</span>
                <div>
                  <h2>Create a Translation Project</h2>
                </div>
              </div>
              <p className="section-lead">
                Submit a short English support message for translation into German. The project defines the source locale, target locale, content, workflow, and application context.
              </p>

              <CodePanel
                panelId="create"
                examples={codeExamples.create}
                activeTabs={activeTabs}
                onTabChange={changeTab}
                copiedPanel={copiedPanel}
                onCopy={copyCode}
                title="Create Translation Project"
                endpoint="POST /v2/translation-projects"
                response={responseExamples.create}
                responseLabel="202 Accepted"
              />

              <h3>Understand the Request Fields</h3>
              <div className="field-table">
                {[
                  ["clientReference", "An identifier from your application or content system used to reconcile the project with a source record, release, order, or repository item."],
                  ["sourceLocale", "The known locale of the source content. Explicit locale information provides more predictable workflow behavior."],
                  ["targetLocales", "One or more requested target locales. The API may create a language job for every target locale."],
                  ["content", "The source text, structured data, localization resource, or document submitted for translation."],
                  ["workflow", "The translation, review, quality, and approval path requested for the project."],
                  ["metadata", "Optional application context used for routing or reconciliation. Do not include secrets or unnecessary sensitive data."],
                ].map(([field, description]) => (
                  <article key={field}>
                    <code>{field}</code>
                    <p>{description}</p>
                  </article>
                ))}
              </div>

              <Callout type="note" title="What 202 Accepted Means">
                <p>
                  The request passed initial validation and entered the asynchronous translation workflow. It does not mean that translation is already complete.
                </p>
              </Callout>

              <h3>Prevent Duplicate Requests</h3>
              <p>
                When the endpoint supports idempotency, reuse the same idempotency key only when retrying the same business operation with the same request data. A genuinely new translation request should receive a new key.
              </p>
              <div className="inline-code-block"><code>Idempotency-Key: first-translation-example-001</code></div>
              <ArrowLink href="https://www.stepes.com/developers/translation-api/errors-and-operations/idempotency/">
                Review Idempotent Requests
              </ArrowLink>
            </section>

            <section className="doc-section step-section" id="monitor-status">
              <div className="step-heading">
                <span>04</span>
                <div>
                  <h2>Monitor Translation Progress</h2>
                </div>
              </div>
              <p className="section-lead">
                Save the project identifier and retrieve the latest project state until processing reaches a result-bearing or terminal status.
              </p>

              <CodePanel
                panelId="monitor"
                examples={codeExamples.monitor}
                activeTabs={activeTabs}
                onTabChange={changeTab}
                copiedPanel={copiedPanel}
                onCopy={copyCode}
                title="Retrieve Project Status"
                endpoint="GET /v2/translation-projects/{projectId}"
                response={responseExamples.monitor}
              />

              <h3>Common Project States</h3>
              <div className="table-shell" role="region" aria-label="Common project states" tabIndex="0">
                <table>
                  <thead><tr><th>Status</th><th>Meaning</th><th>Application Behavior</th></tr></thead>
                  <tbody>
                    {statusRows.map(([status, meaning, behavior]) => (
                      <tr key={status}><th data-label="Status">{status}</th><td data-label="Meaning">{meaning}</td><td data-label="Application Behavior">{behavior}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3>Poll Responsibly</h3>
              <ul className="content-list">
                <li>Respect the documented polling interval.</li>
                <li>Honor the Retry-After response header when provided.</li>
                <li>Stop polling after a terminal state is reached.</li>
                <li>Apply exponential backoff after temporary failures.</li>
                <li>Set a maximum monitoring duration.</li>
                <li>Log project and request identifiers.</li>
                <li>Handle partial completion and language-specific failures.</li>
              </ul>

              <Callout type="production" title="Use Webhooks for Ongoing Production Workflows">
                <p>Polling is convenient for the first test. Signed webhook notifications are generally more efficient for event-driven production integrations.</p>
              </Callout>

              <ArrowLink href="https://www.stepes.com/developers/translation-api/status-and-webhooks/">
                Review Project Status and Webhooks
              </ArrowLink>
            </section>

            <section className="doc-section step-section" id="retrieve-results">
              <div className="step-heading">
                <span>05</span>
                <div>
                  <h2>Retrieve the Translation Result</h2>
                </div>
              </div>
              <p className="section-lead">
                When the project reaches completed or another result-bearing state, request the translated output and associate each result with the correct source item and locale.
              </p>

              <CodePanel
                panelId="results"
                examples={codeExamples.results}
                activeTabs={activeTabs}
                onTabChange={changeTab}
                copiedPanel={copiedPanel}
                onCopy={copyCode}
                title="Retrieve Project Results"
                endpoint="GET /v2/translation-projects/{projectId}/results"
                response={responseExamples.results}
              />

              <h3>Verify the Result Before Publishing</h3>
              <div className="verification-list">
                {[
                  "The project identifier matches the submitted request.",
                  "The target locale is correct.",
                  "All expected language jobs are complete.",
                  "Every required source item has a corresponding result.",
                  "The returned content type matches the submitted content.",
                  "The result belongs to the correct source version.",
                  "Any required review or approval stage is complete.",
                  "Missing, delayed, or expired delivery resources are handled safely.",
                ].map((item) => (
                  <div key={item}><Icon name="check" size={16} /><span>{item}</span></div>
                ))}
              </div>

              <div className="completion-panel">
                <span className="completion-mark"><Icon name="check" size={28} /></span>
                <div>
                  <h3>Your First Translation Workflow Is Complete</h3>
                  <p>
                    You authenticated with the API, created a project, submitted content, monitored asynchronous processing, and retrieved the completed translation.
                  </p>
                  <div className="completion-links">
                    <a href={`${PAGE_URL}#file-translation`}>Submit a File Translation</a>
                    <a href={`${PAGE_URL}#webhooks`}>Configure Webhooks</a>
                    <a href={`${PAGE_URL}#workflow-options`}>Choose a Workflow</a>
                    <a href="https://www.stepes.com/developers/translation-api/reference/">View API Reference</a>
                  </div>
                </div>
              </div>
            </section>

            <section className="doc-section" id="file-translation">
              <h2>Translate a Document or Localization File</h2>
              <p className="section-lead">
                Inline text is the fastest way to test an integration. For document translation, software localization, and content-production workflows, submit a file through the supported upload process.
              </p>

              <div className="two-column-content">
                <div>
                  <h3>Typical File Workflow</h3>
                  <ol className="numbered-list">
                    {[
                      "Create the translation project.",
                      "Upload or register the source file.",
                      "Confirm file validation.",
                      "Start or continue the configured workflow.",
                      "Monitor the project and language jobs.",
                      "Retrieve the translated file or delivery package.",
                    ].map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}
                  </ol>
                </div>
                <div className="sample-object">
                  <span className="panel-label">Example File Content</span>
                  <pre><code>{`{
  "clientReference": "product-guide-release-2026-07",
  "sourceLocale": "en-US",
  "targetLocales": ["de-DE", "fr-FR", "ja-JP"],
  "content": {
    "type": "file",
    "fileId": "fil_01JEXAMPLE",
    "fileName": "product-guide.docx"
  },
  "workflow": {
    "mode": "ai_translation_with_human_review"
  }
}`}</code></pre>
                </div>
              </div>

              <h3>File Validation</h3>
              <p>The API may validate file format, size, integrity, password protection, embedded content, extractable text, resource structure, source-language compatibility, and account limits before translation begins.</p>

              <h3>File Delivery</h3>
              <p>
                Completed files may be returned through a secured result resource or time-limited download URL. Treat delivery URLs as sensitive, download files before expiration, verify project and locale information, confirm file integrity when checksums are provided, and store translated files according to your security and retention policies.
              </p>

              <div className="link-row">
                <ArrowLink href="https://www.stepes.com/developers/translation-api/files-and-content/">Review Files and Content</ArrowLink>
                <ArrowLink href="https://www.stepes.com/developers/translation-api/files-and-content/supported-formats/">View Supported File Formats</ArrowLink>
              </div>
            </section>

            <section className="doc-section" id="webhooks">
              <p className="eyebrow">Event-Driven Processing</p>
              <h2>Replace Polling with Webhook Notifications</h2>
              <p className="section-lead">
                For production workflows, webhooks allow Stepes to notify your application when meaningful project, review, failure, and delivery events occur.
              </p>

              <div className="webhook-layout">
                <ol className="numbered-list compact">
                  {[
                    "Register a secure HTTPS endpoint.",
                    "Subscribe to the events your application needs.",
                    "Receive the event payload.",
                    "Verify the webhook signature.",
                    "Return a successful response promptly.",
                    "Process the event asynchronously.",
                    "Retrieve or reconcile the associated API resource.",
                    "Handle duplicate and out-of-order events safely.",
                  ].map((item, index) => <li key={item}><span>{index + 1}</span><p>{item}</p></li>)}
                </ol>
                <div className="sample-object dark">
                  <span className="panel-label">Example Webhook Event</span>
                  <pre><code>{responseExamples.webhook}</code></pre>
                </div>
              </div>

              <Callout type="security" title="Verify Every Webhook Before Trusting It">
                <p>
                  Verify the signature against the raw request body, signature header, assigned signing secret, and documented timestamp process before the event is trusted.
                </p>
              </Callout>

              <Callout type="production" title="Design for Retried Delivery">
                <p>
                  Store event identifiers, make processing idempotent, respond quickly, move longer work into a queue, allow for out-of-order events, and retrieve current API state before critical actions.
                </p>
              </Callout>

              <div className="link-row">
                <ArrowLink href="https://www.stepes.com/developers/translation-api/status-and-webhooks/">Configure Translation API Webhooks</ArrowLink>
                <ArrowLink href="https://www.stepes.com/developers/translation-api/status-and-webhooks/signature-verification/">Review Signature Verification</ArrowLink>
              </div>
            </section>

            <section className="doc-section" id="workflow-options">
              <p className="eyebrow">Translation Quality</p>
              <h2>Choose the Right Translation Workflow</h2>
              <p className="section-lead">
                The Stepes Translation API is designed for more than one translation method. Connect each content type to the workflow that matches its quality, speed, risk, and publishing requirements.
              </p>

              <div className="workflow-option-list">
                {workflowOptions.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div><strong>Well suited to:</strong> {item.bestFor}</div>
                  </article>
                ))}
              </div>

              <h3>Apply Translation Memory and Terminology</h3>
              <div className="asset-panels">
                <article>
                  <h3>Translation Memory</h3>
                  <p>Reuse previously approved source and target-language segments to improve consistency, accelerate updates, and reduce repeated translation work.</p>
                  <ArrowLink href="https://www.stepes.com/translation-memory/">Explore Translation Memory</ArrowLink>
                </article>
                <article>
                  <h3>Terminology Management</h3>
                  <p>Control product names, technical terms, regulated language, brand expressions, and other important concepts across languages and workflows.</p>
                  <ArrowLink href="https://www.stepes.com/terminology-management/">Explore Terminology Management</ArrowLink>
                </article>
              </div>

              <p>
                Translation projects may also include style guides, reference materials, subject-matter requirements, audience information, and customer-specific instructions. Provide only what the workflow needs and ensure that supporting materials comply with your data-handling policies.
              </p>

              <div className="link-row">
                <ArrowLink href="https://www.stepes.com/ai-human-translation-workflow/">Explore AI + Human Translation Workflows</ArrowLink>
                <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Review Translation Quality Assurance</ArrowLink>
              </div>
            </section>

            <section className="doc-section" id="errors">
              <p className="eyebrow">Troubleshooting</p>
              <h2>Understand Common API Errors</h2>
              <p className="section-lead">
                The API returns structured error information so your application can determine what happened, whether the request must be corrected, and whether a retry is appropriate.
              </p>

              <div className="sample-object error-object">
                <span className="panel-label">Structured Error Response</span>
                <pre><code>{responseExamples.error}</code></pre>
              </div>

              <p>
                Use the stable error code for programmatic handling. Use the message and field information for troubleshooting, and preserve the request identifier when contacting Stepes Developer Support.
              </p>

              <div className="table-shell" role="region" aria-label="Common API errors" tabIndex="0">
                <table>
                  <thead><tr><th>HTTP</th><th>Category</th><th>Typical Cause</th><th>Recommended Action</th></tr></thead>
                  <tbody>
                    {errorRows.map(([code, category, cause, action]) => (
                      <tr key={`${code}-${category}`}><th data-label="HTTP">{code}</th><td data-label="Category"><strong>{category}</strong></td><td data-label="Typical Cause">{cause}</td><td data-label="Recommended Action">{action}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="retry-columns">
                <article>
                  <h3>Correct Before Retrying</h3>
                  <ul className="content-list">
                    <li>Invalid credentials</li>
                    <li>Insufficient permissions</li>
                    <li>Invalid parameters</li>
                    <li>Unsupported locales or files</li>
                    <li>Validation failures</li>
                    <li>Missing required fields</li>
                  </ul>
                </article>
                <article>
                  <h3>Retry with Backoff When Appropriate</h3>
                  <ul className="content-list">
                    <li>Rate-limit responses</li>
                    <li>Temporary server errors</li>
                    <li>Network interruption</li>
                    <li>Temporary delivery unavailability</li>
                    <li>Documented retryable workflow conditions</li>
                  </ul>
                </article>
              </div>

              <ArrowLink href="https://www.stepes.com/developers/translation-api/errors-and-operations/">
                Review Errors and Operational Guidance
              </ArrowLink>
            </section>

            <section className="doc-section production-section" id="production">
              <h2>Move from Testing to Production</h2>
              <p className="section-lead">
                A successful sample request confirms that the basic connection works. Before connecting production systems and content, review the integration for security, reliability, observability, and lifecycle management.
              </p>

              <div className="production-grid">
                {productionGroups.map((group) => (
                  <article key={group.title}>
                    <div className="production-heading">
                      <Icon name={group.icon} size={22} />
                      <h3>{group.title}</h3>
                    </div>
                    <ul>
                      {group.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>

              <div className="production-links">
                <ArrowLink href="https://www.stepes.com/security/">Review Stepes Security</ArrowLink>
                <ArrowLink href="https://www.stepes.com/developers/changelog/">View the Developer Changelog</ArrowLink>
                <ArrowLink href="https://www.stepes.com/developers/support/">Contact Developer Support</ArrowLink>
              </div>
            </section>

            <section className="doc-section" id="continue-building">
              <p className="eyebrow">Developer Documentation</p>
              <h2>Continue Building</h2>
              <p className="section-lead">Use the following documentation to expand the integration from a successful quickstart into a production translation workflow.</p>

              <div className="continuation-directory">
                {continuationLinks.map(([title, description, href]) => (
                  <article key={title}>
                    <a className="continuation-link" href={href}>
                      <div>
                        <h3>{title}</h3>
                        <p>{description}</p>
                      </div>
                      <span className="continuation-action" aria-hidden="true"><Icon name="arrow" size={18} /></span>
                    </a>
                  </article>
                ))}
              </div>
            </section>

            <section className="doc-section faq-section" id="faq">
              <h2>Translation API Getting Started Questions</h2>
              <p className="section-lead">Review common onboarding questions about access, testing, asynchronous processing, language selection, human review, and integration support.</p>

              <div className="faq-panel">
                {faqItems.map((item, index) => {
                  const open = openFaq === index;
                  const answerId = `faq-answer-${index}`;
                  return (
                    <article className={open ? "open" : ""} key={item.question}>
                      <h3>
                        <button
                          type="button"
                          aria-expanded={open}
                          aria-controls={answerId}
                          onClick={() => setOpenFaq(open ? -1 : index)}
                        >
                          <span>{item.question}</span>
                          <span className="faq-control" aria-hidden="true"><Icon name="chevron" size={18} /></span>
                        </button>
                      </h3>
                      <div id={answerId} className="faq-answer" hidden={!open}>
                        <p>{item.answer}</p>
                        {item.link && <ArrowLink href={item.link[1]}>{item.link[0]}</ArrowLink>}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </article>

          <aside className="docs-right"><OnThisPage /></aside>
        </div>

        <section className="final-cta-section">
          <div className="shell final-cta-panel">
            <div>
              <p className="eyebrow">Translation API</p>
              <h2>Build Your First Translation Workflow</h2>
              <p>
                Connect your application to secure, scalable multilingual workflows supporting AI translation, professional human expertise, terminology control, quality assurance, and content delivery in more than 100 languages.
              </p>
            </div>
            <div className="final-actions">
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Request API Access <Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/developers/translation-api/reference/">
                View API Reference
              </a>
              <ArrowLink href="https://www.stepes.com/developers/support/">Contact Developer Support</ArrowLink>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    --accent: #C11D63;
    --accent-dark: #A71954;
    --accent-deep: #7A1542;
    --accent-soft: #FDF2F7;
    --accent-light: #F2A7C6;
    --ink: #171A24;
    --text: #343A4A;
    --muted: #667085;
    --border: #E4E7EC;
    --surface: #F7F8FA;
    --dark: #171A24;
    --shell: 1280px;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #FFFFFF; }

  .stepes-getting-started-page {
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    color: var(--text);
    background: #FFFFFF;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.7;
  }

  .stepes-getting-started-page a { color: inherit; text-decoration: none; }
  .shell { width: min(var(--shell), calc(100% - 112px)); margin: 0 auto; }

  .hero { background: #FFFFFF; }
  .hero-layout {
    padding-top: 92px;
    padding-bottom: 84px;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.82fr);
    align-items: center;
    gap: 72px;
  }
  .hero-copy {
    max-width: 680px;
    margin: 0;
    text-align: left;
  }
  .eyebrow {
    margin: 0 0 14px;
    color: var(--accent);
    font-size: 11px !important;
    font-weight: 600;
    letter-spacing: 0.12em;
    line-height: 1.4;
    text-transform: uppercase;
  }
  .hero h1 {
    max-width: 680px;
    margin: 0;
    color: var(--ink);
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.036em;
    line-height: 1.08;
  }
  .hero-lead {
    max-width: 670px;
    margin: 24px 0 0;
    color: #3B4252;
    font-size: 18px;
    line-height: 1.68;
  }
  .hero-actions {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    flex-wrap: wrap;
  }
  .button {
    min-height: 48px;
    padding: 12px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
    transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }
  .button:hover { transform: translateY(-1px); }
  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus-visible { color: #FFFFFF !important; }
  .button-primary { background: var(--accent); box-shadow: 0 12px 28px rgba(193, 29, 99, 0.18); }
  .button-primary:hover { background: var(--accent-dark); box-shadow: 0 14px 32px rgba(193, 29, 99, 0.22); }
  .button-secondary { border-color: #D7DBE3; color: #252A36; background: #FFFFFF; }
  .button-secondary:hover { border-color: #C3C9D3; background: #FAFAFB; }

  .button:focus-visible,
  .arrow-link:focus-visible,
  .docs-navigation a:focus-visible,
  .toc-navigation a:focus-visible,
  .completion-links a:focus-visible,
  .continuation-directory a:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.22);
    outline-offset: 3px;
  }

  .hero-quickstart {
    min-width: 0;
    padding: 24px;
    border: 1px solid #DDE1E8;
    border-radius: 26px;
    background: #F7F8FB;
    box-shadow: 0 14px 34px rgba(28, 35, 50, 0.06);
  }
  .hero-quickstart-head {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr) auto;
    align-items: center;
    gap: 12px;
  }
  .hero-quickstart-icon {
    width: 42px;
    height: 42px;
    border: 1px solid #D8DCE4;
    border-radius: 13px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #394154;
    background: #FFFFFF;
  }
  .hero-quickstart-head strong {
    display: block;
    color: var(--ink);
    font-size: 16px;
    font-weight: 600;
    line-height: 1.35;
  }
  .hero-quickstart-label {
    display: block;
    margin-bottom: 2px;
    color: #6B7280;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    line-height: 1.35;
    text-transform: uppercase;
  }
  .hero-api-release {
    padding: 6px 10px;
    border: 1px solid #E0C0CF;
    border-radius: 999px;
    color: var(--accent);
    background: #FFF8FB;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.2;
    white-space: nowrap;
  }
  .hero-request-line {
    margin-top: 22px;
    padding: 12px 14px;
    border: 1px solid #E0E3E9;
    border-radius: 14px 14px 0 0;
    display: flex;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
  }
  .hero-request-line span {
    color: var(--accent);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
  }
  .hero-request-line code {
    min-width: 0;
    color: #303747;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 13px;
    line-height: 1.4;
    overflow-wrap: anywhere;
  }
  .hero-code-preview {
    margin: 0;
    padding: 16px 18px;
    border: 1px solid #E0E3E9;
    border-top: 0;
    border-radius: 0 0 14px 14px;
    color: #3B4354;
    background: #FCFCFD;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 12.5px;
    line-height: 1.65;
    white-space: pre-wrap;
    overflow-wrap: anywhere;
  }
  .hero-response-summary {
    margin-top: 16px;
    padding: 12px 14px;
    border: 1px solid #DCE4DF;
    border-radius: 13px;
    display: flex;
    align-items: center;
    gap: 9px;
    background: #FFFFFF;
  }
  .hero-status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex: 0 0 auto;
    background: #35A866;
  }
  .hero-response-summary strong {
    color: #243229;
    font-size: 14px;
    font-weight: 600;
  }
  .hero-response-summary span:last-child {
    margin-left: auto;
    color: #697268;
    font-size: 13px;
  }
  .hero-response-meta {
    margin-top: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
  }
  .hero-response-meta span {
    color: #657083;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace;
    font-size: 12px;
    line-height: 1.45;
  }
  .hero-response-meta strong {
    margin-right: 5px;
    color: #3B4354;
    font-family: Inter, ui-sans-serif, system-ui, sans-serif;
    font-weight: 600;
  }

  .code-panel {
    min-width: 0;
    border: 1px solid #292E3A;
    border-radius: 28px;
    overflow: hidden;
    color: #F4F6F8;
    background: var(--dark);
    box-shadow: 0 24px 54px rgba(18, 24, 38, 0.15);
  }
  .code-toolbar {
    min-height: 62px;
    padding: 10px 16px 10px 18px;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .code-tabs { min-width: 0; display: flex; align-items: center; gap: 5px; overflow-x: auto; scrollbar-width: none; }
  .code-tabs::-webkit-scrollbar { display: none; }
  .code-tabs button,
  .copy-button {
    min-height: 40px;
    border: 0;
    border-radius: 999px;
    color: #AEB5C3;
    background: transparent;
    font: inherit;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
  }
  .code-tabs button { padding: 9px 13px; flex: 0 0 auto; }
  .code-tabs button:hover,
  .code-tabs button.active,
  .copy-button:hover { color: #FFFFFF; background: rgba(255,255,255,0.08); }
  .copy-button { padding: 9px 12px; display: inline-flex; align-items: center; gap: 7px; flex: 0 0 auto; }
  .code-tabs button:focus-visible,
  .copy-button:focus-visible { outline: 3px solid rgba(242,167,198,0.3); outline-offset: 2px; }
  .code-heading {
    padding: 16px 20px 0;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    color: #9098A8;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
  }
  .code-heading code { color: var(--accent-light); overflow-wrap: anywhere; }
  .code-window {
    min-height: 0;
    margin: 0;
    padding: 18px 20px 22px;
    overflow-x: auto;
    white-space: pre;
    color: #E7EBF3;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 13px;
    line-height: 1.65;
    tab-size: 2;
  }
  .response-panel {
    margin: 0 16px 16px;
    padding: 15px 16px;
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 18px;
    background: rgba(255,255,255,0.045);
  }
  .response-label { display: flex; align-items: center; gap: 9px; color: #FFFFFF; font-size: 13px; }
  .response-label strong { font-weight: 600; }
  .response-dot { width: 8px; height: 8px; border-radius: 50%; background: #65C58A; }
  .response-panel pre { margin: 12px 0 0; overflow-x: auto; white-space: pre; }
  .response-panel code { color: #CBD2DE; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; line-height: 1.6; }

  .page-metadata-wrap { border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: #FCFCFD; }
  .page-metadata { min-height: 58px; display: flex; align-items: center; justify-content: center; gap: 18px 34px; flex-wrap: wrap; }
  .page-metadata span { color: #687083; font-size: 14px; }
  .page-metadata strong { color: #353C4B; font-weight: 600; }

  .mobile-docs-nav { display: none; }
  .docs-shell {
    padding-top: 64px;
    padding-bottom: 96px;
    display: grid;
    grid-template-columns: 224px minmax(0, 1fr) 190px;
    align-items: start;
    gap: 48px;
  }
  .docs-left,
  .docs-right { position: sticky; top: 28px; }
  .docs-navigation { min-width: 0; }
  .docs-nav-title,
  .toc-title {
    margin-bottom: 17px;
    color: var(--ink);
    font-size: 14px;
    font-weight: 600;
  }
  .docs-nav-group { margin-top: 22px; }
  .docs-nav-group > span {
    display: block;
    margin-bottom: 8px;
    color: #8A92A3;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }
  .docs-navigation ul,
  .toc-navigation ul { margin: 0; padding: 0; list-style: none; }
  .docs-navigation li { margin: 2px 0; }
  .docs-navigation a {
    min-height: 38px;
    padding: 8px 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    color: #596173;
    font-size: 14px;
    line-height: 1.45;
  }
  .docs-navigation a:hover { color: var(--accent); background: var(--accent-soft); }
  .docs-navigation a.active { color: var(--accent); background: var(--accent-soft); font-weight: 600; }

  .toc-navigation { min-width: 0; }
  .toc-navigation ul { border-left: 1px solid var(--border); }
  .toc-navigation a {
    min-height: 34px;
    padding: 7px 0 7px 14px;
    display: block;
    color: #6B7280;
    font-size: 13px;
    line-height: 1.45;
  }
  .toc-navigation a:hover { color: var(--accent); }
  .toc-support { margin-top: 28px; padding: 18px; border: 1px solid var(--border); border-radius: 18px; background: var(--surface); }
  .toc-support strong { color: var(--ink); font-size: 15px; font-weight: 600; }
  .toc-support p { margin: 8px 0 4px; color: var(--muted); font-size: 14px; line-height: 1.55; }
  .toc-support .arrow-link { font-size: 13px; }

  .docs-content { min-width: 0; max-width: 780px; }
  .doc-section {
    scroll-margin-top: 32px;
    padding: 80px 0;
    border-bottom: 1px solid var(--border);
  }
  .doc-section:first-child { padding-top: 16px; }
  .doc-section:last-child { border-bottom: 0; }
  .doc-section h2 {
    max-width: 730px;
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }
  .doc-section h3 {
    margin: 38px 0 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.28;
  }
  .doc-section > p,
  .doc-section li,
  .callout-body p,
  .definition-list p,
  .workflow-option-list p,
  .asset-panels p,
  .continuation-directory p,
  .faq-answer p {
    font-size: 16px;
  }
  .doc-section > p { max-width: 760px; margin: 18px 0 0; color: var(--text); line-height: 1.75; }
  .doc-section .section-lead { margin-top: 18px; color: var(--muted); font-size: 18px; line-height: 1.7; }

  .arrow-link {
    width: fit-content;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent) !important;
    font-size: 15px;
    font-weight: 600;
  }
  .doc-section > .arrow-link { margin-top: 18px; }
  .arrow-link svg { transition: transform 160ms ease; }
  .arrow-link:hover svg { transform: translateX(3px); }
  .arrow-link:hover span { text-decoration: underline; text-underline-offset: 4px; }

  .workflow-sequence { margin-top: 34px; border-top: 1px solid var(--border); }
  .workflow-sequence article {
    min-height: 114px;
    padding: 22px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 52px minmax(0, 1fr);
    align-items: start;
    gap: 18px;
  }
  .sequence-number {
    width: 42px;
    height: 42px;
    border: 1px solid rgba(193,29,99,0.22);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
  }
  .workflow-sequence h3 { margin: 0; font-size: 20px; }
  .workflow-sequence p { margin: 7px 0 0; color: var(--muted); font-size: 16px; line-height: 1.65; }
  .flow-strip {
    margin-top: 28px;
    padding: 20px 22px;
    border: 1px solid var(--border);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    background: var(--surface);
    color: #485061;
    font-size: 16px;
    font-weight: 600;
    overflow-x: auto;
  }
  .flow-strip span { flex: 0 0 auto; }
  .flow-strip svg { color: #A5ABB7; flex: 0 0 auto; }

  .checklist-grid {
    margin-top: 34px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--border);
  }
  .checklist-item {
    min-height: 78px;
    padding: 18px 22px 18px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    align-items: start;
    gap: 12px;
  }
  .checklist-item:nth-child(even) { padding-right: 0; padding-left: 22px; border-right: 0; }
  .checklist-item span { width: 24px; height: 24px; margin-top: 1px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--accent); background: var(--accent-soft); }
  .checklist-item p { margin: 0; color: #4B5363; font-size: 16px; line-height: 1.55; }

  .callout {
    margin-top: 28px;
    padding: 20px 22px;
    border: 1px solid var(--border);
    border-radius: 20px;
    display: grid;
    grid-template-columns: 34px minmax(0, 1fr);
    gap: 14px;
    background: #FCFCFD;
  }
  .callout-security { border-color: rgba(193,29,99,0.18); background: var(--accent-soft); }
  .callout-production { border-color: #DCE1E8; background: #F5F7FA; }
  .callout-icon { width: 32px; height: 32px; border-radius: 12px; display: inline-flex; align-items: center; justify-content: center; color: var(--accent); background: #FFFFFF; }
  .callout strong { color: var(--ink); font-size: 16px; font-weight: 600; }
  .callout-body p { margin: 6px 0 0; color: #596173; line-height: 1.65; }

  .resource-diagram {
    margin-top: 34px;
    padding: 34px;
    border: 1px solid var(--border);
    border-radius: 28px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
  }
  .resource-node { width: min(420px, 100%); padding: 16px 20px; border: 1px solid var(--border); border-radius: 18px; text-align: center; background: #FFFFFF; }
  .resource-node strong, .resource-node span { display: block; }
  .resource-node strong { color: var(--ink); font-size: 17px; font-weight: 600; }
  .resource-node span { margin-top: 3px; color: var(--muted); font-size: 16px; }
  .resource-node-primary { border-color: rgba(193,29,99,0.22); background: var(--accent-soft); }
  .resource-node-project { border-color: rgba(193,29,99,0.32); box-shadow: 0 10px 24px rgba(193,29,99,0.08); }
  .resource-line { width: 1px; height: 24px; background: #C6CBD4; }
  .resource-branches { width: 100%; margin-top: 30px; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 12px; }
  .resource-branches span { min-height: 56px; padding: 12px; border: 1px solid var(--border); border-radius: 14px; display: flex; align-items: center; justify-content: center; color: #4F5768; background: #FFFFFF; text-align: center; font-size: 16px; font-weight: 600; }
  .definition-list { margin-top: 34px; border-top: 1px solid var(--border); }
  .definition-list article { padding: 20px 0; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 190px minmax(0, 1fr); gap: 26px; }
  .definition-list h3 { margin: 0; font-size: 18px; }
  .definition-list p { margin: 0; color: var(--muted); line-height: 1.65; }

  .step-heading { display: grid; grid-template-columns: 54px minmax(0,1fr); align-items: start; gap: 18px; }
  .step-heading > span { width: 46px; height: 46px; border: 1px solid rgba(193,29,99,0.24); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--accent); background: var(--accent-soft); font-size: 11px; font-weight: 600; letter-spacing: 0.08em; }
  .step-heading h2 { margin: 0; }
  .step-section > .code-panel { margin-top: 34px; }
  .inline-code-block { margin-top: 18px; padding: 18px 20px; border: 1px solid #292E3A; border-radius: 18px; display: grid; gap: 7px; overflow-x: auto; background: var(--dark); }
  .inline-code-block code { color: #E7EBF3; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 13px; white-space: pre; }

  .split-notes { margin-top: 30px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 20px; }
  .split-notes article { padding: 24px; border: 1px solid var(--border); border-radius: 20px; background: #FFFFFF; }
  .split-notes h3 { margin: 14px 0 0; font-size: 20px; }
  .split-notes p { margin: 8px 0 0; color: var(--muted); font-size: 16px; line-height: 1.65; }
  .status-code { color: var(--accent); font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; font-weight: 600; }

  .field-table { margin-top: 24px; border-top: 1px solid var(--border); }
  .field-table article { padding: 19px 0; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 180px minmax(0,1fr); gap: 24px; }
  .field-table code { color: var(--accent); font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 14px; font-weight: 600; overflow-wrap: anywhere; }
  .field-table p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.65; }

  .table-shell { margin-top: 24px; overflow-x: auto; border: 1px solid var(--border); border-radius: 20px; background: #FFFFFF; }
  table { width: 100%; min-width: 720px; border-collapse: collapse; }
  th, td { padding: 16px 18px; border-bottom: 1px solid var(--border); text-align: left; vertical-align: top; font-size: 16px; line-height: 1.55; }
  thead th { color: #4A5262; background: var(--surface); font-size: 14px; font-weight: 600; letter-spacing: 0.02em; }
  tbody th { color: var(--ink); font-weight: 600; }
  tbody td { color: #5D6576; }
  tbody tr:last-child th, tbody tr:last-child td { border-bottom: 0; }

  .content-list { margin: 18px 0 0; padding: 0; list-style: none; }
  .content-list li { position: relative; margin: 9px 0; padding-left: 24px; color: #51596A; line-height: 1.65; }
  .content-list li::before { position: absolute; top: 0.78em; left: 2px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); transform: translateY(-50%); content: ""; }

  .verification-list { margin-top: 24px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--border); }
  .verification-list > div { min-height: 78px; padding: 18px 22px 18px 0; border-right: 1px solid var(--border); border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 22px minmax(0,1fr); align-items: start; gap: 11px; color: #4F5768; font-size: 16px; line-height: 1.55; }
  .verification-list > div:nth-child(even) { padding-right: 0; padding-left: 22px; border-right: 0; }
  .verification-list svg { margin-top: 4px; color: var(--accent); }
  .completion-panel { margin-top: 34px; padding: 28px; border: 1px solid rgba(193,29,99,0.18); border-radius: 26px; display: grid; grid-template-columns: 56px minmax(0,1fr); gap: 20px; background: var(--accent-soft); }
  .completion-mark { width: 54px; height: 54px; border-radius: 18px; display: inline-flex; align-items: center; justify-content: center; color: #FFFFFF; background: var(--accent); }
  .completion-panel h3 { margin: 0; font-size: 24px; }
  .completion-panel p:not(.eyebrow) { margin: 9px 0 0; color: #596173; font-size: 16px; line-height: 1.65; }
  .completion-links { margin-top: 18px; display: flex; gap: 8px 18px; flex-wrap: wrap; }
  .completion-links a { min-height: 40px; display: inline-flex; align-items: center; color: var(--accent); font-size: 14px; font-weight: 600; }
  .completion-links a:hover { text-decoration: underline; text-underline-offset: 4px; }

  .two-column-content,
  .webhook-layout { margin-top: 34px; display: grid; grid-template-columns: minmax(0,0.9fr) minmax(360px,1.1fr); align-items: start; gap: 34px; }
  .two-column-content h3 { margin-top: 0; }
  .numbered-list { margin: 18px 0 0; padding: 0; list-style: none; border-top: 1px solid var(--border); }
  .numbered-list li { padding: 14px 0; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: 34px minmax(0,1fr); align-items: start; gap: 12px; }
  .numbered-list li > span { width: 28px; height: 28px; border: 1px solid rgba(193,29,99,0.22); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--accent); font-size: 11px; font-weight: 600; }
  .numbered-list p { margin: 1px 0 0; color: #525A6B; font-size: 16px; line-height: 1.6; }
  .numbered-list.compact li { padding: 12px 0; }
  .sample-object { min-width: 0; padding: 24px; border: 1px solid var(--border); border-radius: 24px; background: var(--surface); }
  .sample-object.dark { border-color: #292E3A; background: var(--dark); }
  .sample-object .panel-label { display: block; margin-bottom: 14px; color: var(--accent); font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; }
  .sample-object.dark .panel-label { color: var(--accent-light); }
  .sample-object pre { margin: 0; overflow-x: auto; white-space: pre; }
  .sample-object code { color: #3E4656; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; line-height: 1.65; }
  .sample-object.dark code { color: #DCE2EC; }
  .error-object { margin-top: 30px; background: #FCFCFD; }
  .link-row { margin-top: 22px; display: flex; align-items: center; gap: 8px 24px; flex-wrap: wrap; }

  .workflow-option-list { margin-top: 34px; border-top: 1px solid var(--border); }
  .workflow-option-list article { padding: 24px 0; border-bottom: 1px solid var(--border); }
  .workflow-option-list h3 { margin: 0; font-size: 22px; }
  .workflow-option-list p { max-width: 730px; margin: 8px 0 0; color: var(--muted); line-height: 1.65; }
  .workflow-option-list article > div { margin-top: 10px; color: #525A6B; font-size: 16px; line-height: 1.6; }
  .workflow-option-list strong { color: var(--ink); font-weight: 600; }
  .asset-panels { margin-top: 24px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .asset-panels article { padding: 28px 28px 28px 0; border-right: 1px solid var(--border); }
  .asset-panels article:last-child { padding-right: 0; padding-left: 28px; border-right: 0; }
  .asset-panels h3 { margin: 0; font-size: 22px; }
  .asset-panels p { margin: 9px 0 4px; color: var(--muted); line-height: 1.65; }

  .retry-columns { margin-top: 30px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px; }
  .retry-columns article { padding: 24px; border: 1px solid var(--border); border-radius: 20px; background: #FFFFFF; }
  .retry-columns h3 { margin: 0; font-size: 21px; }

  .production-section {
    width: calc(100% + 64px);
    margin-left: -32px;
    padding: 64px 32px;
    border: 0;
    border-radius: 28px;
    color: #FFFFFF;
    background: var(--dark);
  }
  .production-section h2 { color: #FFFFFF; }
  .production-section .section-lead { color: #B8BFCC; }
  .production-grid { margin-top: 36px; display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 34px; border-top: 1px solid rgba(255,255,255,0.13); }
  .production-grid article { padding: 26px 0; border-bottom: 1px solid rgba(255,255,255,0.13); }
  .production-heading { display: flex; align-items: center; gap: 12px; }
  .production-heading svg { color: var(--accent-light); }
  .production-heading h3 { margin: 0; color: #FFFFFF; font-size: 21px; }
  .production-grid ul { margin: 16px 0 0; padding: 0; list-style: none; }
  .production-grid li { position: relative; margin: 9px 0; padding-left: 20px; color: #AEB6C5; font-size: 16px; line-height: 1.55; }
  .production-grid li::before { position: absolute; top: 0.78em; left: 2px; width: 5px; height: 5px; border-radius: 50%; background: var(--accent-light); transform: translateY(-50%); content: ""; }
  .production-links { margin-top: 26px; display: flex; gap: 8px 24px; flex-wrap: wrap; }
  .production-section .arrow-link { color: var(--accent-light) !important; }

  .continuation-directory { margin-top: 34px; border-top: 1px solid var(--border); }
  .continuation-directory article { border-bottom: 1px solid var(--border); }
  .continuation-link { min-height: 108px; padding: 21px 0; display: grid; grid-template-columns: minmax(0,1fr) 44px; align-items: center; gap: 20px; }
  .continuation-directory h3 { margin: 0; font-size: 21px; transition: color 160ms ease; }
  .continuation-directory p { margin: 7px 0 0; color: var(--muted); line-height: 1.6; }
  .continuation-action { width: 42px; height: 42px; border: 1px solid var(--border); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: var(--accent); background: #FFFFFF; transition: transform 160ms ease, border-color 160ms ease, background-color 160ms ease; }
  .continuation-link:hover h3 { color: var(--accent); }
  .continuation-link:hover .continuation-action { transform: translateX(3px); border-color: rgba(193,29,99,0.24); background: var(--accent-soft); }

  .faq-panel { margin-top: 32px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .faq-panel article { border-bottom: 1px solid var(--border); }
  .faq-panel article:last-child { border-bottom: 0; }
  .faq-panel h3 { margin: 0; }
  .faq-panel button { width: 100%; min-height: 76px; padding: 19px 0; border: 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--ink); background: transparent; text-align: left; font: inherit; font-size: 18px; font-weight: 600; line-height: 1.45; cursor: pointer; }
  .faq-panel button:hover { color: var(--accent); }
  .faq-panel button:focus-visible { outline: 3px solid rgba(193,29,99,0.2); outline-offset: 4px; }
  .faq-control { width: 38px; height: 38px; border: 1px solid #D7DBE3; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; color: #737B8D; background: #FFFFFF; }
  .faq-control svg { transition: transform 170ms ease; }
  .faq-panel article.open .faq-control { color: var(--accent); border-color: rgba(193,29,99,0.24); background: var(--accent-soft); }
  .faq-panel article.open .faq-control svg { transform: rotate(180deg); }
  .faq-answer { max-width: 730px; padding: 0 64px 25px 0; }
  .faq-answer[hidden] { display: none; }
  .faq-answer p { margin: 0; color: var(--muted); line-height: 1.7; }
  .faq-answer .arrow-link { margin-top: 8px; }

  .final-cta-section { padding: 96px 0; background: #FFFFFF; }
  .final-cta-panel {
    min-height: 320px;
    padding: 54px 58px;
    border: 1px solid rgba(193,29,99,0.15);
    border-radius: 30px;
    display: grid;
    grid-template-columns: minmax(0,1fr) 280px;
    align-items: center;
    gap: 64px;
    background: linear-gradient(135deg, var(--accent-soft) 0%, #FFFFFF 62%);
  }
  .final-cta-panel h2 { max-width: 690px; margin: 0; color: var(--ink); font-size: 36px; font-weight: 600; letter-spacing: -0.028em; line-height: 1.2; }
  .final-cta-panel p:not(.eyebrow) { max-width: 760px; margin: 18px 0 0; color: var(--muted); font-size: 18px; line-height: 1.7; }
  .final-actions { display: flex; align-items: stretch; flex-direction: column; gap: 12px; }
  .final-actions .button { width: 100%; }
  .final-actions .arrow-link { margin: 0 auto; }

  @media (max-width: 1199px) {
    .shell { width: min(var(--shell), calc(100% - 80px)); }
    .hero-layout { grid-template-columns: minmax(0, 1fr) minmax(350px, 0.78fr); gap: 48px; }
    .docs-shell { grid-template-columns: 210px minmax(0,1fr); gap: 42px; }
    .docs-right { display: none; }
    .docs-content { max-width: none; }
  }

  @media (max-width: 991px) {
    .shell { width: min(var(--shell), calc(100% - 48px)); }
    .hero-layout { padding-top: 84px; padding-bottom: 76px; grid-template-columns: 1fr; gap: 42px; }
    .hero-copy { max-width: 820px; margin: 0 auto; text-align: center; }
    .hero h1 { max-width: 820px; margin: 0 auto; font-size: 42px; }
    .hero-lead { max-width: 760px; margin-left: auto; margin-right: auto; }
    .hero-actions { justify-content: center; }
    .hero-quickstart { width: 100%; max-width: 680px; margin: 0 auto; }
    .page-metadata { padding: 10px 0; }
    .mobile-docs-nav { margin-top: 28px; display: block; border: 1px solid var(--border); border-radius: 18px; background: #FFFFFF; }
    .mobile-docs-nav summary { min-height: 54px; padding: 13px 16px; display: flex; align-items: center; gap: 9px; color: var(--ink); font-size: 15px; font-weight: 600; cursor: pointer; list-style: none; }
    .mobile-docs-nav summary::-webkit-details-marker { display: none; }
    .mobile-docs-nav summary:focus-visible { outline: 3px solid rgba(193,29,99,0.2); outline-offset: 3px; }
    .mobile-docs-nav .docs-navigation { padding: 0 16px 18px; }
    .mobile-docs-nav .docs-nav-title { display: none; }
    .docs-shell { grid-template-columns: 1fr; padding-top: 24px; }
    .docs-left { display: none; }
    .docs-content { max-width: 820px; }
    .mobile-docs-nav .docs-navigation a { min-height: 44px; font-size: 15px; }
    .flow-strip { align-items: stretch; flex-direction: column; overflow: visible; }
    .flow-strip svg { transform: rotate(90deg); align-self: center; }
    .two-column-content,
    .webhook-layout { grid-template-columns: 1fr; }
    .production-section { width: 100%; margin-left: 0; }
    .final-cta-panel { min-height: 0; grid-template-columns: 1fr; gap: 34px; }
  }

  @media (max-width: 767px) {
    .shell { width: calc(100% - 40px); }
    .hero-layout { padding-top: 72px; padding-bottom: 68px; gap: 34px; }
    .hero h1 { font-size: 38px; line-height: 1.1; }
    .hero-lead { font-size: 18px; }
    .hero-actions { align-items: stretch; flex-direction: column; }
    .hero-actions .button { width: 100%; }
    .hero-quickstart { padding: 18px; border-radius: 22px; }
    .hero-quickstart-head { grid-template-columns: 38px minmax(0, 1fr); }
    .hero-quickstart-icon { width: 38px; height: 38px; }
    .hero-api-release { grid-column: 1 / -1; width: fit-content; margin-top: 2px; }
    .hero-request-line { align-items: flex-start; flex-direction: column; gap: 4px; }
    .hero-response-summary { align-items: flex-start; flex-wrap: wrap; }
    .hero-response-summary span:last-child { width: 100%; margin-left: 17px; }
    .hero-response-meta { align-items: flex-start; flex-direction: column; gap: 5px; }
    .code-panel { border-radius: 24px; }
    .code-toolbar { padding: 10px 12px; align-items: stretch; flex-direction: column; }
    .code-tabs { width: 100%; }
    .copy-button { width: fit-content; }
    .code-heading { padding: 14px 14px 0; align-items: flex-start; flex-direction: column; gap: 5px; }
    .code-window { min-height: 0; padding: 16px 14px 18px; font-size: 12px; }
    .response-panel { margin: 0 12px 12px; padding: 14px; }
    .page-metadata { align-items: center; justify-content: flex-start; flex-direction: column; gap: 7px; padding: 14px 0; }

    .docs-shell { padding-bottom: 72px; }
    .doc-section { padding: 64px 0; }
    .doc-section:first-child { padding-top: 10px; }
    .doc-section h2 { font-size: 30px; }
    .doc-section .section-lead { font-size: 18px; }
    .doc-section h3 { font-size: 20px; }

    .workflow-sequence article { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
    .sequence-number { width: 40px; height: 40px; }

    .checklist-grid,
    .verification-list { grid-template-columns: 1fr; }
    .checklist-item,
    .checklist-item:nth-child(even),
    .verification-list > div,
    .verification-list > div:nth-child(even) { padding: 18px 0; border-right: 0; }

    .resource-diagram { padding: 28px 20px; border-radius: 24px; }
    .resource-branches { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .definition-list article { grid-template-columns: 1fr; gap: 8px; }

    .step-heading { grid-template-columns: 46px minmax(0,1fr); gap: 14px; }
    .step-heading > span { width: 42px; height: 42px; }
    .split-notes,
    .asset-panels,
    .retry-columns,
    .production-grid { grid-template-columns: 1fr; }
    .split-notes article { padding: 22px; }
    .field-table article { grid-template-columns: 1fr; gap: 8px; }
    .table-shell { overflow: visible; border: 0; border-radius: 0; background: transparent; }
    .table-shell table,
    .table-shell tbody,
    .table-shell tr,
    .table-shell th,
    .table-shell td { width: 100%; min-width: 0; display: block; }
    .table-shell thead { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
    .table-shell tbody { display: grid; gap: 16px; }
    .table-shell tr { border: 1px solid var(--border); border-radius: 18px; overflow: hidden; background: #FFFFFF; }
    .table-shell th,
    .table-shell td { padding: 14px 16px; border-bottom: 1px solid var(--border); display: grid; grid-template-columns: minmax(88px, 0.38fr) minmax(0, 1fr); gap: 14px; text-align: left; }
    .table-shell th::before,
    .table-shell td::before { content: attr(data-label); color: #7A8292; font-size: 11px; font-weight: 600; letter-spacing: 0.08em; line-height: 1.45; text-transform: uppercase; }
    .table-shell tr > *:last-child { border-bottom: 0; }

    .completion-panel { padding: 24px 20px; grid-template-columns: 46px minmax(0,1fr); gap: 15px; }
    .completion-mark { width: 46px; height: 46px; border-radius: 15px; }
    .completion-panel h3 { font-size: 20px; }
    .completion-links { align-items: flex-start; flex-direction: column; }

    .sample-object { padding: 22px 18px; }
    .link-row,
    .production-links { align-items: flex-start; flex-direction: column; gap: 3px; }
    .asset-panels { border-bottom: 0; }
    .asset-panels article,
    .asset-panels article:last-child { padding: 24px 0; border-right: 0; border-bottom: 1px solid var(--border); }

    .production-section { padding: 52px 22px; border-radius: 24px; }
    .production-grid { gap: 0; }
    .continuation-link { grid-template-columns: minmax(0,1fr) 42px; }
    .faq-panel button { min-height: 72px; gap: 17px; font-size: 17px; }
    .faq-answer { padding-right: 0; }

    .final-cta-section { padding: 72px 0; }
    .final-cta-panel { padding: 40px 24px; gap: 30px; border-radius: 28px; }
    .final-cta-panel h2 { font-size: 30px; }
    .final-cta-panel p:not(.eyebrow) { font-size: 18px; }
  }

  @media (max-width: 389px) {
    .hero-code-preview { white-space: pre; overflow-x: auto; overflow-wrap: normal; }
    .resource-branches { grid-template-columns: 1fr; }
    .table-shell th,
    .table-shell td { grid-template-columns: 1fr; gap: 4px; }
    .callout { padding: 18px; grid-template-columns: 30px minmax(0,1fr); gap: 12px; }
    .callout-icon { width: 30px; height: 30px; }
    .completion-panel { grid-template-columns: 1fr; }
    .continuation-link { grid-template-columns: 1fr; }
    .continuation-action { margin-top: 4px; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .button,
    .arrow-link svg,
    .faq-control svg { transition: none; }
  }
`;
