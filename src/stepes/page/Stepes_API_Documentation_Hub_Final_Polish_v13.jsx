import React, { useState } from "react";

const startingPoints = [
  {
    title: "Get Started",
    description:
      "Understand the API model, prepare your environment, and complete your first translation workflow.",
    href: "https://www.stepes.com/api-documentation/getting-started/",
    link: "Explore the Quickstart",
    icon: "rocket",
  },
  {
    title: "Authentication",
    description:
      "Learn how API credentials are issued, protected, used, rotated, and revoked.",
    href: "https://www.stepes.com/api-documentation/authentication/",
    link: "View Authentication Guidance",
    icon: "key",
  },
  {
    title: "API Reference",
    description:
      "Explore endpoints, parameters, request schemas, responses, errors, and availability details.",
    href: "https://www.stepes.com/api-documentation/reference/",
    link: "Explore the API Reference",
    icon: "brackets",
  },
  {
    title: "Integration Support",
    description:
      "Work with Stepes specialists on architecture, testing, production readiness, and deployment.",
    href: "https://www.stepes.com/contact-us/",
    link: "Talk to an Integration Specialist",
    icon: "support",
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Authenticate",
    description:
      "Establish secure access with organization-approved credentials and permissions.",
  },
  {
    number: "02",
    title: "Create a Request",
    description:
      "Define the translation project, business context, and source-language requirements.",
  },
  {
    number: "03",
    title: "Submit Content",
    description:
      "Send text, structured data, localization files, or supported business documents.",
  },
  {
    number: "04",
    title: "Configure the Workflow",
    description:
      "Select target languages, translation methods, terminology, review, and delivery needs.",
  },
  {
    number: "05",
    title: "Monitor Processing",
    description:
      "Track projects, jobs, reviews, quality checks, and delivery status through the API.",
  },
  {
    number: "06",
    title: "Retrieve Results",
    description:
      "Return completed multilingual content to the system, repository, or team that needs it.",
  },
];

const lifecycle = [
  "Create",
  "Configure",
  "Submit",
  "Process",
  "Review",
  "Monitor",
  "Deliver",
  "Measure",
];

const buildCapabilities = [
  {
    title: "Submit Content Programmatically",
    description:
      "Send text, documents, localization resources, and structured content without relying on manual file transfers.",
    icon: "upload",
  },
  {
    title: "Configure Translation Requirements",
    description:
      "Define languages, workflow requirements, terminology resources, review levels, and delivery preferences.",
    icon: "settings",
  },
  {
    title: "Automate Translation Projects",
    description:
      "Create and initiate translation requests directly from applications, content platforms, and business processes.",
    icon: "automation",
  },
  {
    title: "Track Workflow Progress",
    description:
      "Monitor projects, jobs, content items, reviews, and delivery status throughout the translation lifecycle.",
    icon: "pulse",
  },
  {
    title: "Retrieve Completed Translations",
    description:
      "Return completed multilingual content to the systems, repositories, products, and teams that need it.",
    icon: "download",
  },
  {
    title: "Connect Quality Processes",
    description:
      "Integrate terminology validation, professional review, linguistic quality assurance, and customer approval.",
    icon: "quality",
  },
];

const quickstartSteps = [
  "Request and securely store your API credentials.",
  "Connect to the appropriate API environment.",
  "Authenticate your first request.",
  "Create a translation project and submit content.",
  "Monitor processing and retrieve the completed output.",
];

const codeExamples = {
  curl: `curl --request POST \\
  --url "$STEPES_API_BASE_URL/v3/projects" \\
  --header "Authorization: Bearer $STEPES_API_KEY" \\
  --header "Content-Type: application/json" \\
  --data '{
    "source_locale": "en-US",
    "target_locales": ["de-DE", "ja-JP"],
    "workflow": "translation_review",
    "content": {
      "type": "text",
      "value": "Welcome to our product."
    }
  }'`,
  javascript: `const response = await fetch(
  \`\${process.env.STEPES_API_BASE_URL}/v3/projects\`,
  {
    method: "POST",
    headers: {
      Authorization: \`Bearer \${process.env.STEPES_API_KEY}\`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      source_locale: "en-US",
      target_locales: ["de-DE", "ja-JP"],
      workflow: "translation_review",
      content: {
        type: "text",
        value: "Welcome to our product.",
      },
    }),
  }
);

const project = await response.json();`,
  python: `import os
import requests

response = requests.post(
    f"{os.environ['STEPES_API_BASE_URL']}/v3/projects",
    headers={
        "Authorization": f"Bearer {os.environ['STEPES_API_KEY']}",
        "Content-Type": "application/json",
    },
    json={
        "source_locale": "en-US",
        "target_locales": ["de-DE", "ja-JP"],
        "workflow": "translation_review",
        "content": {
            "type": "text",
            "value": "Welcome to our product.",
        },
    },
)

project = response.json()`,
};

const documentationCategories = [
  {
    title: "Getting Started",
    description:
      "Understand the API architecture, obtain access, configure your environment, and complete your first workflow.",
    icon: "rocket",
    href: "https://www.stepes.com/api-documentation/getting-started/",
    links: [
      ["API Overview", "https://www.stepes.com/api-documentation/getting-started/#api-overview"],
      ["Quickstart", "https://www.stepes.com/api-documentation/getting-started/#quickstart"],
      ["Environments and Base URLs", "https://www.stepes.com/api-documentation/getting-started/#environments-and-base-urls"],
      ["Core Concepts", "https://www.stepes.com/api-documentation/core-concepts/"],
    ],
  },
  {
    title: "Authentication and Access",
    description:
      "Authenticate requests and manage credentials securely across development and production environments.",
    icon: "key",
    href: "https://www.stepes.com/api-documentation/authentication/",
    links: [
      ["API Credentials", "https://www.stepes.com/api-documentation/authentication/#api-credentials"],
      ["Permissions and Access", "https://www.stepes.com/api-documentation/authentication/#permissions-and-access"],
      ["Credential Security", "https://www.stepes.com/api-documentation/authentication/#credential-security"],
      ["Rotation and Revocation", "https://www.stepes.com/api-documentation/authentication/#rotation-and-revocation"],
    ],
  },
  {
    title: "Translation Workflows",
    description:
      "Create, configure, submit, monitor, and complete translation projects through one workflow model.",
    icon: "workflow",
    href: "https://www.stepes.com/api-documentation/workflows/",
    links: [
      ["Create Translation Projects", "https://www.stepes.com/api-documentation/workflows/#create-projects"],
      ["Submit Translation Requests", "https://www.stepes.com/api-documentation/workflows/#submit-requests"],
      ["Configure Workflow Options", "https://www.stepes.com/api-documentation/workflows/#workflow-options"],
      ["Retrieve Status and Results", "https://www.stepes.com/api-documentation/workflows/#status-and-results"],
    ],
  },
  {
    title: "Files and Content",
    description:
      "Prepare and submit text, documents, structured content, and localization resources for translation.",
    icon: "file",
    href: "https://www.stepes.com/api-documentation/files-and-content/",
    links: [
      ["Text Submission", "https://www.stepes.com/api-documentation/files-and-content/#text-submission"],
      ["Document Upload", "https://www.stepes.com/api-documentation/files-and-content/#document-upload"],
      ["Structured Content", "https://www.stepes.com/api-documentation/files-and-content/#structured-content"],
      ["Validation and Requirements", "https://www.stepes.com/api-documentation/files-and-content/#validation-and-requirements"],
    ],
  },
  {
    title: "Languages and Locales",
    description:
      "Use consistent language and locale identifiers across requests and multilingual delivery workflows.",
    icon: "globe",
    href: "https://www.stepes.com/api-documentation/languages/",
    links: [
      ["Supported Languages", "https://www.stepes.com/api-documentation/languages/#supported-languages"],
      ["Locale Identifiers", "https://www.stepes.com/api-documentation/languages/#locale-identifiers"],
      ["Source-Language Handling", "https://www.stepes.com/api-documentation/languages/#source-language-handling"],
      ["Target-Language Selection", "https://www.stepes.com/api-documentation/languages/#target-language-selection"],
    ],
  },
  {
    title: "Project Status and Events",
    description:
      "Monitor long-running translation workflows and respond to project, job, and delivery changes.",
    icon: "pulse",
    href: "https://www.stepes.com/api-documentation/project-status/",
    links: [
      ["Project and Job States", "https://www.stepes.com/api-documentation/project-status/#project-and-job-states"],
      ["Status Retrieval", "https://www.stepes.com/api-documentation/project-status/#status-retrieval"],
      ["Processing Updates", "https://www.stepes.com/api-documentation/project-status/#processing-updates"],
      ["Delivery Notifications", "https://www.stepes.com/api-documentation/project-status/#delivery-notifications"],
    ],
  },
  {
    title: "Errors and Production Operations",
    description:
      "Build reliable integrations that handle validation, failures, retries, duplicate requests, and limits.",
    icon: "alert",
    href: "https://www.stepes.com/api-documentation/errors/",
    links: [
      ["HTTP Status Codes", "https://www.stepes.com/api-documentation/errors/#http-status-codes"],
      ["Structured Errors", "https://www.stepes.com/api-documentation/errors/#structured-errors"],
      ["Retry Guidance", "https://www.stepes.com/api-documentation/errors/#retry-guidance"],
      ["Rate and Usage Management", "https://www.stepes.com/api-documentation/rate-limits/"],
    ],
  },
  {
    title: "API Reference",
    description:
      "Explore endpoint-level documentation for every supported Stepes API resource and operation.",
    icon: "brackets",
    href: "https://www.stepes.com/api-documentation/reference/",
    links: [
      ["Endpoint Directory", "https://www.stepes.com/api-documentation/reference/#endpoint-directory"],
      ["Request and Response Schemas", "https://www.stepes.com/api-documentation/reference/#schemas"],
      ["Examples and Errors", "https://www.stepes.com/api-documentation/reference/#examples-and-errors"],
      ["Availability and Versions", "https://www.stepes.com/api-documentation/reference/#availability-and-versions"],
    ],
  },
];

const resourceFamilies = [
  {
    title: "Organizations and Workspaces",
    description:
      "Represent the teams, business units, environments, and operational areas using the Stepes platform.",
  },
  {
    title: "Projects",
    description:
      "Group related content, target languages, workflow requirements, schedules, and delivery expectations.",
  },
  {
    title: "Content and Files",
    description:
      "Represent the text, documents, localization resources, and structured data submitted for translation.",
  },
  {
    title: "Languages and Workflows",
    description:
      "Define locale requirements and control how content moves through translation, review, and approval.",
  },
  {
    title: "Jobs, Reviews, and Quality",
    description:
      "Represent language-specific processing activities, linguistic reviews, and quality evaluations.",
  },
  {
    title: "Deliveries, Events, and Usage",
    description:
      "Provide completed outputs, operational updates, and the visibility needed to manage integrations.",
  },
];

const contentInputs = [
  {
    title: "Text and Structured Content",
    description:
      "Translate interface text, database content, customer communications, product information, and structured application data.",
    icon: "database",
  },
  {
    title: "Business Documents",
    description:
      "Submit documents used by marketing, operations, legal, support, product, engineering, and other enterprise teams.",
    icon: "file",
  },
  {
    title: "Software and Application Content",
    description:
      "Connect software strings, mobile resources, release content, and localization files with automated workflows.",
    icon: "brackets",
  },
  {
    title: "Website and Digital Content",
    description:
      "Translate web pages, campaign content, product information, articles, and recurring publishing updates.",
    icon: "layout",
  },
  {
    title: "Technical Documentation",
    description:
      "Process manuals, instructions, specifications, knowledge articles, support documentation, and product materials.",
    icon: "book",
  },
  {
    title: "Recurring Content Updates",
    description:
      "Automate high-frequency translation workflows for content that changes continuously across systems and markets.",
    icon: "refresh",
  },
];

const workflowOptions = [
  {
    title: "AI Translation",
    description:
      "Accelerate multilingual processing for content suited to controlled automated translation.",
  },
  {
    title: "Professional Human Translation",
    description:
      "Route content to qualified linguists when professional translation expertise is required.",
  },
  {
    title: "Post-Editing and Linguistic Review",
    description:
      "Combine automation with review for accuracy, fluency, terminology, style, and completeness.",
  },
  {
    title: "Terminology and Translation Memory",
    description:
      "Apply approved language assets to strengthen consistency and reuse previously validated content.",
  },
  {
    title: "Subject-Matter Expertise",
    description:
      "Support technical, medical, legal, financial, and other specialized content requirements.",
  },
  {
    title: "Quality Assurance and Approval",
    description:
      "Connect structured checks, stakeholder review, and approval before multilingual delivery.",
  },
];

const integrationPatterns = [
  {
    title: "Content Management Systems",
    description:
      "Translate website, campaign, editorial, and publishing content as it is created or updated.",
    icon: "layout",
  },
  {
    title: "Software and Application Localization",
    description:
      "Connect product repositories, development workflows, application platforms, and release processes.",
    icon: "brackets",
  },
  {
    title: "Product Information Management",
    description:
      "Automate multilingual product descriptions, catalogs, attributes, specifications, and commerce content.",
    icon: "package",
  },
  {
    title: "Technical Documentation Systems",
    description:
      "Submit manuals, knowledge articles, service documentation, and recurring technical updates.",
    icon: "book",
  },
  {
    title: "Multilingual Customer Support",
    description:
      "Connect support platforms, help centers, knowledge bases, and customer communication systems.",
    icon: "support",
  },
  {
    title: "Continuous Localization",
    description:
      "Coordinate frequent content changes with automated translation, review, testing, and delivery.",
    icon: "refresh",
  },
  {
    title: "Enterprise Content Operations",
    description:
      "Standardize translation intake and delivery across departments, systems, markets, and content types.",
    icon: "workflow",
  },
];

const securityControls = [
  {
    title: "Credential Protection",
    description:
      "Store API credentials securely and restrict access to approved applications and environments.",
  },
  {
    title: "Encrypted Communication",
    description:
      "Protect content and request data during transmission between your systems and the Stepes API.",
  },
  {
    title: "Access Permissions",
    description:
      "Align API access with organizational roles, environments, and approved integration responsibilities.",
  },
  {
    title: "Credential Lifecycle",
    description:
      "Plan for credential issuance, rotation, revocation, and changes in application ownership.",
  },
  {
    title: "Environment Separation",
    description:
      "Keep development, testing, and production activity appropriately separated.",
  },
  {
    title: "Data Handling and Auditability",
    description:
      "Support traceable API activity and enterprise review of content-handling requirements.",
  },
];

const productionControls = [
  {
    title: "Asynchronous Processing",
    description:
      "Monitor translation, review, quality assurance, and approval workflows that complete over time.",
  },
  {
    title: "Structured Error Handling",
    description:
      "Use consistent response information to identify and resolve request and workflow problems.",
  },
  {
    title: "Safe Retries",
    description:
      "Recover from temporary failures without creating unintended duplicate projects or submissions.",
  },
  {
    title: "Idempotent Operations",
    description:
      "Protect workflows when network conditions or application behavior repeat the same request.",
  },
  {
    title: "Rate and Usage Management",
    description:
      "Design high-volume integrations to respond predictably to operational limits.",
  },
  {
    title: "Request Traceability",
    description:
      "Use request identifiers and logs to support monitoring, troubleshooting, and technical support.",
  },
  {
    title: "Delivery Verification",
    description:
      "Confirm that completed content is associated with the correct project, language, and source.",
  },
];

const developerTools = [
  {
    title: "Interactive API Reference",
    description:
      "Explore endpoints, parameters, schemas, responses, errors, and related operations.",
    icon: "brackets",
  },
  {
    title: "Machine-Readable API Specification",
    description:
      "Use a standardized API definition to support development tools, validation, testing, and planning.",
    icon: "specification",
  },
  {
    title: "Tested Code Examples",
    description:
      "Review practical examples for common requests and complete translation workflows.",
    icon: "code",
  },
  {
    title: "Workflow and Implementation Guides",
    description:
      "Follow task-oriented guidance that connects multiple API operations into useful business processes.",
    icon: "route",
  },
  {
    title: "Changelog and Migration Guidance",
    description:
      "Track API improvements, material changes, deprecations, replacement resources, and migration needs.",
    icon: "history",
  },
  {
    title: "API Status and Support",
    description:
      "Access operational information and the appropriate support path for production integrations.",
    icon: "pulse",
  },
];

const apiLifecycle = [
  {
    name: "Preview",
    description:
      "Available for controlled evaluation and feedback while the API contract continues to evolve.",
  },
  {
    name: "Beta",
    description:
      "Available for active implementation while final production behavior is being refined.",
  },
  {
    name: "Generally Available",
    description:
      "Production-ready, documented, and supported for enterprise implementation.",
  },
  {
    name: "Deprecated",
    description:
      "Still available during a defined transition period with replacement and migration guidance.",
  },
  {
    name: "Retired",
    description:
      "No longer available after the communicated support and migration period has ended.",
  },
];


const integrationSupportStages = [
  {
    title: "Use-Case Discovery",
    description:
      "Clarify the content, systems, languages, users, volumes, and business outcomes the integration must support.",
  },
  {
    title: "Solution Architecture",
    description:
      "Align Stepes API resources with your applications, repositories, content platforms, and security model.",
  },
  {
    title: "Workflow Design",
    description:
      "Define how translation technology, professional review, terminology, quality assurance, and approval work together.",
  },
  {
    title: "API Onboarding",
    description:
      "Prepare credentials, environments, access controls, documentation, and the initial development path.",
  },
  {
    title: "Integration Testing",
    description:
      "Validate requests, responses, files, languages, status handling, errors, and multilingual outputs.",
  },
  {
    title: "Production Launch",
    description:
      "Review reliability, monitoring, escalation, and deployment requirements before the integration goes live.",
  },
  {
    title: "Ongoing Optimization",
    description:
      "Refine workflows as content volumes, languages, systems, quality needs, and business priorities evolve.",
  },
];

const relatedCapabilities = [
  {
    title: "Translation API",
    description:
      "Learn why enterprises use Stepes APIs to connect business systems with scalable multilingual operations.",
    href: "https://www.stepes.com/translation-api/",
  },
  {
    title: "AI Translation Platform",
    description:
      "Accelerate multilingual content processing with enterprise AI translation and configurable quality controls.",
    href: "https://www.stepes.com/ai-translation-platform/",
  },
  {
    title: "Enterprise Translation Management",
    description:
      "Manage global translation demand, workflows, users, content, quality, and reporting through one platform.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    title: "Customer Translation Portal",
    description:
      "Give business teams a centralized environment for submitting, tracking, reviewing, and managing projects.",
    href: "https://www.stepes.com/customer-translation-portal/",
  },
  {
    title: "AI + Human Translation Workflow",
    description:
      "Combine the speed of AI translation with professional linguistic review and workflow governance.",
    href: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
  },
  {
    title: "Translation Memory",
    description:
      "Reuse approved translations to improve consistency, continuity, and localization efficiency.",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    title: "Terminology Management",
    description:
      "Manage approved multilingual terminology across teams, languages, systems, and content types.",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    title: "Translation Quality Assurance",
    description:
      "Apply structured translation review and quality-control processes across multilingual workflows.",
    href: "https://www.stepes.com/translation-quality-assurance/",
  },
  {
    title: "Security & Compliance",
    description:
      "Explore Stepes security, privacy, governance, and enterprise assurance practices.",
    href: "https://www.stepes.com/security-and-compliance/",
  },
];

const finalCtaIllustrationSrc = "typical_integration_flow_overview.png";

const faqItems = [
  {
    question: "What is the Stepes Translation API?",
    answer:
      "The Stepes Translation API is an enterprise integration framework for connecting applications, content systems, and business workflows with translation and localization services. It supports programmatic content submission, workflow configuration, project tracking, quality processes, and multilingual delivery.",
    href: "https://www.stepes.com/translation-api/",
    link: "Explore the Translation API",
  },
  {
    question: "Who is the Stepes API designed for?",
    answer:
      "The API is designed for software developers, solution architects, localization engineers, product teams, enterprise IT groups, DevOps teams, and organizations that need to automate recurring multilingual content workflows.",
  },
  {
    question: "Where should a developer begin?",
    answer:
      "Begin with the Stepes API quickstart. It introduces the core concepts, access requirements, authentication process, project workflow, content submission, status monitoring, and output retrieval.",
    href: "https://www.stepes.com/api-documentation/getting-started/",
    link: "Open the Quickstart",
  },
  {
    question: "How do I obtain API access?",
    answer:
      "API access is provided to approved Stepes customers and integration partners. Contact Stepes to discuss your use case, technical requirements, expected content volumes, languages, and implementation plan.",
    href: "https://www.stepes.com/contact-us/",
    link: "Request API Access",
  },
  {
    question: "Does the API support text and file translation?",
    answer:
      "The Stepes API framework supports translation workflows for text, structured content, business documents, localization resources, and other supported file types. Current requirements are documented in the Files and Content guidance.",
    href: "https://www.stepes.com/api-documentation/files-and-content/",
    link: "Review Files and Content",
  },
  {
    question: "Which languages are supported?",
    answer:
      "Stepes supports multilingual workflows across a broad range of languages and regional variants. The API documentation explains how supported languages and locale identifiers are represented in translation requests.",
    href: "https://www.stepes.com/api-documentation/languages/",
    link: "Review Languages and Locales",
  },
  {
    question: "Can a workflow include AI translation and professional human review?",
    answer:
      "Yes. Stepes workflows can combine AI translation, professional human translation, post-editing, linguistic review, terminology validation, translation memory, quality assurance, and customer approval according to the needs of the content.",
    href: "https://www.stepes.com/solutions/ai-powered-translation-workflows/",
    link: "Explore AI + Human Workflows",
  },
  {
    question: "How can an application monitor translation progress?",
    answer:
      "Applications can retrieve project, job, content, review, and delivery status through the relevant API resources. The project-status guidance explains the workflow states and recommended monitoring patterns.",
    href: "https://www.stepes.com/api-documentation/project-status/",
    link: "Review Project Status",
  },
  {
    question: "How are API credentials protected?",
    answer:
      "Credentials should be stored securely, limited to authorized applications and environments, rotated when appropriate, and never embedded in publicly accessible client-side code.",
    href: "https://www.stepes.com/api-documentation/authentication/",
    link: "Review Authentication Guidance",
  },
  {
    question: "Does Stepes provide a testing environment?",
    answer:
      "Environment availability and access requirements are documented in the getting-started guidance. Stepes integration specialists can also help customers plan and validate testing before production launch.",
    href: "https://www.stepes.com/api-documentation/getting-started/",
    link: "Review Environment Guidance",
  },
  {
    question: "How should an integration handle failed requests?",
    answer:
      "Applications should use the structured status and error information returned by the API. The operational guidance covers validation failures, authentication issues, retries, timeouts, duplicate-request prevention, and production troubleshooting.",
    href: "https://www.stepes.com/api-documentation/errors/",
    link: "Review Errors and Operations",
  },
  {
    question: "Where can I find endpoint parameters and response schemas?",
    answer:
      "The detailed API Reference contains endpoint paths, methods, parameters, request objects, response schemas, examples, errors, lifecycle status, and related operations.",
    href: "https://www.stepes.com/api-documentation/reference/",
    link: "View the API Reference",
  },
  {
    question: "How does Stepes communicate API changes?",
    answer:
      "New capabilities, material changes, deprecations, migration requirements, and retired functionality are recorded in the API changelog and the relevant technical documentation.",
    href: "https://www.stepes.com/api-documentation/changelog/",
    link: "View the API Changelog",
  },
  {
    question: "How are deprecated endpoints managed?",
    answer:
      "Deprecated endpoints remain documented during the supported transition period. Stepes provides replacement guidance, expected timelines, and migration resources so customers can update integrations in a controlled manner.",
    href: "https://www.stepes.com/api-documentation/migration-guides/",
    link: "Explore Migration Guides",
  },
  {
    question: "Does Stepes provide implementation support?",
    answer:
      "Yes. Stepes can support use-case discovery, solution architecture, workflow design, API onboarding, integration testing, production-readiness review, launch, and ongoing optimization.",
    href: "https://www.stepes.com/contact-us/",
    link: "Talk to an Integration Specialist",
  },
];

function Icon({ name, size = 22, strokeWidth = 1.7 }) {
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
    rocket: (
      <>
        <path d="M14 4c2.6-2.1 5.2-2 6-1.2.8.8.9 3.4-1.2 6l-3.6 4.4-4.4-4.4L14 4Z" />
        <path d="m10.8 8.8-4.9 1.4-2 2 4.2 1.2" />
        <path d="m15.2 13.2-1.4 4.9-2 2-1.2-4.2" />
        <path d="M8.2 15.8 5 19" />
        <circle cx="16.6" cy="6.5" r="1.5" />
      </>
    ),
    key: (
      <>
        <circle cx="8.5" cy="14.5" r="4.5" />
        <path d="m12 11 7-7" />
        <path d="m16 7 2 2" />
        <path d="m14 9 2 2" />
      </>
    ),
    brackets: (
      <>
        <path d="M8 5H5v14h3" />
        <path d="M16 5h3v14h-3" />
        <path d="m10 9-2 3 2 3" />
        <path d="m14 9 2 3-2 3" />
      </>
    ),
    support: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5Z" />
        <path d="M20 13h-3v6h2a1 1 0 0 0 1-1v-5Z" />
        <path d="M17 19c0 1.1-.9 2-2 2h-3" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    workflow: (
      <>
        <rect x="3" y="4" width="6" height="5" rx="1" />
        <rect x="15" y="4" width="6" height="5" rx="1" />
        <rect x="9" y="15" width="6" height="5" rx="1" />
        <path d="M9 6.5h6" />
        <path d="M18 9v2.5a3 3 0 0 1-3 3h-3" />
        <path d="M6 9v2.5a3 3 0 0 0 3 3h3" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4" />
        <path d="m7 9 5-5 5 5" />
        <path d="M5 14v6h14v-6" />
      </>
    ),
    settings: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6V21h-4v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H3v-4h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1L7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3V3h4v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v4H21a1.7 1.7 0 0 0-1.6 1Z" />
      </>
    ),
    automation: (
      <>
        <path d="M5 7h10" />
        <path d="m12 4 3 3-3 3" />
        <path d="M19 17H9" />
        <path d="m12 14-3 3 3 3" />
        <circle cx="5" cy="17" r="2" />
        <circle cx="19" cy="7" r="2" />
      </>
    ),
    pulse: (
      <>
        <path d="M3 12h4l2-5 4 10 2-5h6" />
      </>
    ),
    download: (
      <>
        <path d="M12 4v12" />
        <path d="m7 11 5 5 5-5" />
        <path d="M5 20h14" />
      </>
    ),
    quality: (
      <>
        <path d="m12 3 2.1 4.3L19 8l-3.5 3.4.8 4.8-4.3-2.3-4.3 2.3.8-4.8L5 8l4.9-.7L12 3Z" />
        <path d="m9.5 11.5 1.7 1.7 3.4-3.4" />
      </>
    ),
    alert: (
      <>
        <path d="M12 4 3.5 19h17L12 4Z" />
        <path d="M12 9v4" />
        <path d="M12 16h.01" />
      </>
    ),
    copy: (
      <>
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
      </>
    ),
    layout: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 9v11" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22V5.5Z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22V5.5Z" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M6.1 8A7 7 0 0 1 18.7 7L20 12" />
        <path d="M17.9 16A7 7 0 0 1 5.3 17L4 12" />
      </>
    ),
    package: (
      <>
        <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
        <path d="m4.5 7.8 7.5 4.3 7.5-4.3" />
        <path d="M12 12v9" />
      </>
    ),
    specification: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 11h6" />
        <path d="M9 15h6" />
        <path d="M9 19h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    route: (
      <>
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="6" r="2" />
        <path d="M8 18h3a3 3 0 0 0 3-3V9a3 3 0 0 1 3-3" />
      </>
    ),
    history: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    chevron: (
      <>
        <path d="m7 9 5 5 5-5" />
      </>
    ),
  };

  return <svg {...common}>{icons[name]}</svg>;
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`arrow-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

export default function StepesApiDocumentationHubWireframe() {
  const [activeCode, setActiveCode] = useState("curl");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const copyActiveExample = async () => {
    try {
      await navigator.clipboard.writeText(codeExamples[activeCode]);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="stepes-api-page">
      <style>{styles}</style>

      <main>
        {/* Section 1: Translation API Documentation */}
        <section className="hero" id="overview">
          <div className="shell hero-layout">
            <div className="hero-copy">
              <h1>Translation API Documentation</h1>

              <p className="hero-lead">
                Connect your applications, content platforms, and enterprise systems
                to scalable translation and localization workflows with the Stepes API.
              </p>

              <p className="hero-support">
                Submit multilingual content, configure translation requirements, track
                processing, retrieve completed translations, and automate global
                content operations through one consistent developer framework.
              </p>

              <div className="hero-actions">
                <a
                  className="button button-primary"
                  href="https://www.stepes.com/api-documentation/getting-started/"
                >
                  Get Started
                  <Icon name="arrow" size={18} />
                </a>

                <a
                  className="button button-secondary"
                  href="https://www.stepes.com/api-documentation/reference/"
                >
                  View API Reference
                </a>
              </div>

              <ArrowLink href="https://www.stepes.com/contact-us/" className="access-link">
                Request API Access
              </ArrowLink>

              <div className="trust-row" aria-label="API documentation highlights">
                <span>
                  <Icon name="lock" size={20} />
                  Secure API Access
                </span>
                <span>
                  <Icon name="workflow" size={20} />
                  Scalable Workflow Automation
                </span>
                <span>
                  <Icon name="globe" size={20} />
                  Enterprise Integration Support
                </span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Stepes translation API workflow">
              <div className="workflow-canvas">
                <div className="visual-label">Connected Translation Workflow</div>

                <div className="workflow-track">
                  <article className="workflow-stage">
                    <span className="workflow-stage-icon">
                      <Icon name="brackets" size={21} />
                    </span>
                    <div className="workflow-stage-copy">
                      <span className="workflow-stage-label">Input</span>
                      <strong>Enterprise System</strong>
                      <small>CMS · PIM · Application · Repository</small>
                    </div>
                  </article>

                  <div className="workflow-connector" aria-hidden="true">
                    <span />
                  </div>

                  <article className="workflow-stage workflow-stage-primary">
                    <div className="workflow-stage-badge">STEPES API</div>
                    <div className="workflow-stage-copy">
                      <strong>Translation Workflow</strong>
                      <small>Configure · Process · Review</small>
                    </div>
                  </article>

                  <div className="workflow-connector" aria-hidden="true">
                    <span />
                  </div>

                  <article className="workflow-stage">
                    <span className="workflow-stage-icon">
                      <Icon name="check" size={21} />
                    </span>
                    <div className="workflow-stage-copy">
                      <span className="workflow-stage-label">Output</span>
                      <strong>Delivered Content</strong>
                      <small>Localized · Reviewed · Ready</small>
                    </div>
                  </article>
                </div>

                <div className="request-panel">
                  <div className="request-panel-header">
                    <div>
                      <span className="request-kicker">Translation Request</span>
                      <strong>Workflow Configuration</strong>
                    </div>
                    <span className="request-state">Ready</span>
                  </div>

                  <div className="request-grid">
                    <div className="request-field">
                      <span>Source Locale</span>
                      <strong>en-US</strong>
                    </div>
                    <div className="request-field">
                      <span>Target Locales</span>
                      <strong>de-DE · ja-JP</strong>
                    </div>
                    <div className="request-field request-field-wide">
                      <span>Content</span>
                      <strong>
                        <Icon name="file" size={16} />
                        product-guide.docx
                      </strong>
                    </div>
                    <div className="request-field request-field-wide">
                      <span>Workflow</span>
                      <strong>Translation + Professional Review</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="local-nav-wrap">
            <nav className="shell local-nav" aria-label="On this page">
              <span className="local-nav-label">On This Page</span>
              <a
                className="active"
                href="https://www.stepes.com/api-documentation/#overview"
              >
                Overview
              </a>
              <a href="https://www.stepes.com/api-documentation/#quickstart">
                Quickstart
              </a>
              <a href="https://www.stepes.com/api-documentation/#documentation">
                Documentation
              </a>
              <a href="https://www.stepes.com/api-documentation/#resources">
                API Resources
              </a>
              <a href="https://www.stepes.com/api-documentation/#integrations">
                Integrations
              </a>
              <a href="https://www.stepes.com/api-documentation/#security">
                Security
              </a>
              <a href="https://www.stepes.com/api-documentation/#developer-tools">
                Developer Tools
              </a>
              <a href="https://www.stepes.com/api-documentation/#integration-support">
                Support
              </a>
              <a href="https://www.stepes.com/api-documentation/#faq">
                FAQ
              </a>
            </nav>
          </div>
        </section>

        {/* Section 2: Start with the Resources You Need */}
        <section className="starting-section" id="start-building">
          <div className="shell">
            <div className="section-intro">
              <h2>Start with the Resources You Need</h2>
              <p>
                Choose the documentation path that matches your role, technical
                requirements, and stage of implementation.
              </p>
            </div>

            <div className="starting-grid">
              {startingPoints.map((item) => (
                <article className="starting-item" key={item.title}>
                  <div className="starting-icon">
                    <Icon name={item.icon} size={23} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.href}>{item.link}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: One API Framework for Enterprise Translation Operations */}
        <section className="framework-section" id="api-framework">
          <div className="shell">
            <div className="framework-intro">
              <h2>One API Framework for Enterprise Translation Operations</h2>
              <p className="framework-lead">
                The Stepes API is designed around the complete translation lifecycle,
                not a collection of disconnected endpoints. Developers can connect
                enterprise systems once while localization and business teams apply
                the right translation, review, terminology, quality, and delivery
                workflow to each content type.
              </p>
              <ArrowLink href="https://www.stepes.com/api-documentation/core-concepts/">
                Explore Core API Concepts
              </ArrowLink>
            </div>

            <div className="lifecycle" aria-label="Stepes API lifecycle">
              {lifecycle.map((item, index) => (
                <React.Fragment key={item}>
                  <div className="lifecycle-stage">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item}</strong>
                  </div>
                  {index < lifecycle.length - 1 && (
                    <div className="lifecycle-arrow" aria-hidden="true">
                      <Icon name="arrow" size={15} />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div className="workflow-list">
              {workflowSteps.map((step) => (
                <article className="workflow-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="framework-summary">
              <div>
                <h3>From Content Submission to Multilingual Delivery</h3>
                <p>
                  Build a focused end-to-end workflow first, then expand into
                  advanced automation, quality governance, and enterprise reporting.
                </p>
              </div>

              <a
                className="button button-secondary"
                href="https://www.stepes.com/api-documentation/workflows/"
              >
                Explore Translation Workflows
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 4: Build Translation into the Systems Your Teams Already Use */}
        <section className="capabilities-section" id="capabilities">
          <div className="shell">
            <div className="section-intro">
              <h2>Build Translation into the Systems Your Teams Already Use</h2>
              <p>
                Connect multilingual workflows directly with the platforms where your
                organization creates, manages, and distributes content.
              </p>
            </div>

            <div className="capability-grid">
              {buildCapabilities.map((item) => (
                <article className="capability-item" key={item.title}>
                  <div className="capability-icon">
                    <Icon name={item.icon} size={23} />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="capability-outcome">
              <div>
                <h3>Support Global Content Operations</h3>
                <p>
                  Coordinate recurring multilingual content across departments,
                  markets, applications, and content channels through one consistent
                  API framework.
                </p>
              </div>
              <ArrowLink href="https://www.stepes.com/solutions/global-content-operations/">
                Explore Global Content Operations
              </ArrowLink>
            </div>
          </div>
        </section>

        {/* Section 5: Send Your First Translation Request */}
        <section className="quickstart-section" id="quickstart">
          <div className="shell quickstart-layout">
            <div className="quickstart-copy">
              <p className="eyebrow">Quickstart</p>
              <h2>Send Your First Translation Request</h2>
              <p className="quickstart-lead">
                Follow a focused path from secure API access to completed multilingual
                output before adding advanced workflow configuration and automation.
              </p>

              <ol className="quickstart-steps">
                {quickstartSteps.map((step, index) => (
                  <li key={step}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>

              <ArrowLink href="https://www.stepes.com/api-documentation/getting-started/">
                Follow the Complete Quickstart
              </ArrowLink>
            </div>

            <div className="code-example" aria-label="Example first translation request">
              <div className="code-toolbar">
                <div className="code-tabs" role="tablist" aria-label="Code language">
                  {[
                    ["curl", "cURL"],
                    ["javascript", "JavaScript"],
                    ["python", "Python"],
                  ].map(([key, label]) => (
                    <button
                      key={key}
                      id={`code-tab-${key}`}
                      type="button"
                      role="tab"
                      aria-selected={activeCode === key}
                      aria-controls={`code-panel-${key}`}
                      tabIndex={activeCode === key ? 0 : -1}
                      className={activeCode === key ? "active" : ""}
                      onClick={() => {
                        setActiveCode(key);
                        setCopied(false);
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>

                <button
                  className="copy-button"
                  type="button"
                  onClick={copyActiveExample}
                  aria-label="Copy code example"
                >
                  <Icon name={copied ? "check" : "copy"} size={16} />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>

              <div
                id={`code-panel-${activeCode}`}
                className="code-window"
                role="tabpanel"
                aria-labelledby={`code-tab-${activeCode}`}
              >
                <div className="code-window-label">
                  <span>Example Request</span>
                  <span>POST /v3/projects</span>
                </div>
                <pre>
                  <code>{codeExamples[activeCode]}</code>
                </pre>
              </div>

              <div className="response-preview">
                <div className="response-heading">
                  <span className="response-indicator" />
                  <strong>Example Response · 202 Accepted</strong>
                </div>
                <code>{`{
  "id": "prj_84K2",
  "status": "accepted",
  "source_locale": "en-US",
  "target_locales": ["de-DE", "ja-JP"]
}`}</code>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Documentation by Category */}
        <section className="documentation-section" id="documentation">
          <div className="shell">
            <div className="section-intro documentation-intro">
              <p className="eyebrow">Developer Documentation</p>
              <h2>Documentation by Category</h2>
              <p>
                Find the technical guidance, workflow documentation, and reference
                material needed to design, build, and operate your Stepes integration.
              </p>
            </div>

            <div className="documentation-grid">
              {documentationCategories.map((category) => (
                <article className="documentation-item" key={category.title}>
                  <div className="documentation-heading">
                    <div className="documentation-icon">
                      <Icon name={category.icon} size={22} />
                    </div>
                    <div>
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>

                  <ul>
                    {category.links.map(([label, href]) => (
                      <li key={label}>
                        <a href={href}>
                          {label}
                          <Icon name="arrow" size={15} />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <ArrowLink href={category.href}>Explore {category.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Explore the Stepes API Resource Model */}
        <section className="resource-model-section" id="resources">
          <div className="shell">
            <div className="resource-model-intro">
              <p className="eyebrow">Core API Resources</p>
              <h2>Explore the Stepes API Resource Model</h2>
              <p>
                Consistent, reusable resources make it easier to build focused
                translation requests today and expand into advanced enterprise
                localization workflows over time.
              </p>
            </div>

            <div className="resource-model-layout">
              <div className="resource-diagram" aria-label="Stepes API resource relationships">
                <div className="resource-node resource-node-primary">
                  <span>Organization</span>
                  <small>Account and governance context</small>
                </div>

                <div className="resource-connector" aria-hidden="true" />

                <div className="resource-node resource-node-secondary">
                  <span>Workspace</span>
                  <small>Team, environment, or business unit</small>
                </div>

                <div className="resource-connector" aria-hidden="true" />

                <div className="resource-node resource-node-project">
                  <span>Project</span>
                  <small>Content, languages, workflow, and delivery</small>
                </div>

                <div className="resource-branch" aria-hidden="true">
                  <span />
                </div>

                <div className="resource-children">
                  {[
                    "Content",
                    "Target Languages",
                    "Workflow",
                    "Jobs",
                    "Reviews",
                    "Deliveries",
                  ].map((item) => (
                    <div className="resource-child" key={item}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="resource-family-list">
                {resourceFamilies.map((item) => (
                  <article key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}

                <ArrowLink href="https://www.stepes.com/api-documentation/core-concepts/">
                  Explore Core API Concepts
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>


        {/* Section 8: Content and Workflow Configuration */}
        <section className="content-workflow-section" id="content-workflows">
          <div className="shell">
            <div className="section-intro content-workflow-intro">
              <p className="eyebrow">Content and Quality</p>
              <h2>Translate the Content Your Business Creates</h2>
              <p>
                Connect text, documents, software resources, digital content, and
                recurring updates with a translation workflow aligned to the
                content’s audience, purpose, subject matter, and quality requirements.
              </p>
            </div>

            <div className="content-workflow-layout">
              <div className="content-input-panel">
                <div className="subsection-heading">
                  <h3>Content Inputs</h3>
                  <p>
                    Bring multilingual processing closer to the systems where your
                    organization creates and manages content.
                  </p>
                </div>

                <div className="content-input-list">
                  {contentInputs.map((item) => (
                    <article key={item.title}>
                      <div className="content-input-icon">
                        <Icon name={item.icon} size={21} />
                      </div>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="content-resource-links">
                  <ArrowLink href="https://www.stepes.com/resources/file-format-support/">
                    File Format Support
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/languages/">
                    Supported Languages
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/resources/translation-glossary/">
                    Translation Glossary
                  </ArrowLink>
                </div>
              </div>

              <div className="workflow-config-panel">
                <div className="workflow-config-heading">
                  <span className="panel-label">Workflow Configuration</span>
                  <h3>Match the Workflow to the Content</h3>
                  <p>
                    Configure translation and review steps according to business risk,
                    turnaround requirements, subject matter, and intended use.
                  </p>
                </div>

                <div className="workflow-option-list">
                  {workflowOptions.map((item) => (
                    <article key={item.title}>
                      <span className="workflow-option-marker" aria-hidden="true">
                        <Icon name="check" size={15} />
                      </span>
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="workflow-config-note">
                  <strong>Integrate Once. Configure for Each Content Type.</strong>
                  <p>
                    Developers work with a consistent API framework while business and
                    localization teams apply the appropriate translation workflow.
                  </p>
                </div>

                <div className="workflow-config-links">
                  <ArrowLink href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">
                    AI + Human Translation Workflows
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/terminology-management/">
                    Terminology Management
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">
                    Translation Quality Assurance
                  </ArrowLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Common Integration Patterns */}
        <section className="integration-section" id="integrations">
          <div className="shell">
            <div className="section-intro integration-intro">
              <p className="eyebrow">Integration Patterns</p>
              <h2>Connect Stepes to Your Content Ecosystem</h2>
              <p>
                Use a consistent API layer to connect translation workflows with the
                enterprise systems that create, manage, publish, and support global content.
              </p>
            </div>

            <div className="integration-layout">
              <div className="integration-core">
                <span className="panel-label">Connected Translation Layer</span>
                <div className="integration-core-mark">
                  <Icon name="workflow" size={28} />
                </div>
                <h3>Stepes Translation API</h3>
                <p>
                  Submit content, configure workflows, monitor processing, and return
                  completed translations to the systems your teams already use.
                </p>
                <div className="integration-core-flow">
                  <span>Submit</span>
                  <Icon name="arrow" size={14} />
                  <span>Process</span>
                  <Icon name="arrow" size={14} />
                  <span>Deliver</span>
                </div>
              </div>

              <div className="integration-pattern-list">
                {integrationPatterns.map((item) => (
                  <article key={item.title}>
                    <div className="integration-pattern-icon">
                      <Icon name={item.icon} size={21} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="integration-links">
              <ArrowLink href="https://www.stepes.com/website-translation-proxy/">
                Website Translation Proxy
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/software-localization-api/">
                Software Localization API
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/solutions/global-content-operations/">
                Global Content Operations
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/solutions/multilingual-customer-support/">
                Multilingual Customer Support
              </ArrowLink>
            </div>
          </div>
        </section>

        {/* Section 10: Security and Production Readiness */}
        <section className="reliability-section" id="security">
          <div className="shell">
            <div className="reliability-intro">
              <p className="eyebrow eyebrow-dark">Enterprise Reliability</p>
              <h2>Build with Enterprise Security and Production Readiness</h2>
              <p>
                Plan secure access and resilient application behavior together so your
                integration can support real-world multilingual operations from testing
                through production.
              </p>
            </div>

            <div className="reliability-columns">
              <div className="reliability-column">
                <div className="reliability-column-heading">
                  <Icon name="lock" size={24} />
                  <div>
                    <h3>Authentication, Security, and Governance</h3>
                    <p>
                      Protect credentials, control access, and align API activity with
                      enterprise data-handling and governance requirements.
                    </p>
                  </div>
                </div>

                <div className="reliability-list">
                  {securityControls.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div className="reliability-column">
                <div className="reliability-column-heading">
                  <Icon name="pulse" size={24} />
                  <div>
                    <h3>Production Reliability</h3>
                    <p>
                      Design for long-running workflows, predictable failures, safe
                      recovery, traceability, and verified multilingual delivery.
                    </p>
                  </div>
                </div>

                <div className="reliability-list">
                  {productionControls.map((item) => (
                    <article key={item.title}>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>

            <div className="reliability-links">
              <ArrowLink href="https://www.stepes.com/api-documentation/authentication/">
                Authentication Documentation
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/api-documentation/errors/">
                Errors and Operational Guidance
              </ArrowLink>
              <ArrowLink href="https://www.stepes.com/security-and-compliance/">
                Security &amp; Compliance
              </ArrowLink>
            </div>
          </div>
        </section>

        {/* Section 11: Developer Tools and API Lifecycle */}
        <section className="developer-tools-section" id="developer-tools">
          <div className="shell">
            <div className="section-intro developer-tools-intro">
              <p className="eyebrow">Developer Resources</p>
              <h2>Tools for Faster Implementation</h2>
              <p>
                Bring reference material, implementation guidance, API updates, and
                lifecycle information together in one consistent developer experience.
              </p>
            </div>

            <div className="developer-tools-layout">
              <div className="developer-tool-list">
                {developerTools.map((item) => (
                  <article key={item.title}>
                    <div className="developer-tool-icon">
                      <Icon name={item.icon} size={21} />
                    </div>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}

                <div className="developer-tool-links">
                  <ArrowLink href="https://www.stepes.com/api-documentation/reference/">
                    View the API Reference
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/api-documentation/examples/">
                    Explore Code Examples
                  </ArrowLink>
                  <ArrowLink href="https://www.stepes.com/api-documentation/changelog/">
                    View the API Changelog
                  </ArrowLink>
                </div>
              </div>

              <div className="api-lifecycle-panel">
                <span className="panel-label">API Stability</span>
                <h3>Build on a Stable, Transparent API</h3>
                <p className="api-lifecycle-lead">
                  Clear lifecycle labels communicate the maturity, availability, and
                  support expectations of each API capability.
                </p>

                <div className="api-lifecycle-list">
                  {apiLifecycle.map((stage, index) => (
                    <article key={stage.name}>
                      <div className="api-lifecycle-track" aria-hidden="true">
                        <span>{String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <div>
                        <h3>{stage.name}</h3>
                        <p>{stage.description}</p>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="api-lifecycle-note">
                  <strong>Changes Are Communicated Clearly</strong>
                  <p>
                    Version information, deprecation notices, replacement guidance,
                    and migration resources help enterprise teams plan controlled updates.
                  </p>
                </div>

                <ArrowLink href="https://www.stepes.com/api-documentation/migration-guides/">
                  Explore Migration Guides
                </ArrowLink>
              </div>
            </div>
          </div>
        </section>


        {/* Section 12: Enterprise Integration Support */}
        <section className="integration-support-section" id="integration-support">
          <div className="shell">
            <div className="section-intro integration-support-intro">
              <h2>Get Support from Design Through Deployment</h2>
              <p>
                Align business goals, content workflows, system architecture, security,
                and translation operations with support from initial planning through
                production launch and ongoing optimization.
              </p>
            </div>

            <div className="support-journey">
              {integrationSupportStages.map((stage, index) => (
                <article className="support-stage" key={stage.title}>
                  <div className="support-stage-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3>{stage.title}</h3>
                    <p>{stage.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="support-cta-row">
              <div>
                <h3>Plan an Integration That Fits Your Content Operations</h3>
                <p>
                  Work with Stepes to define a practical implementation path for your
                  systems, languages, workflows, quality requirements, and production goals.
                </p>
              </div>
              <a className="button button-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Integration Specialist
                <Icon name="arrow" size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Section 13: Related Platform Capabilities */}
        <section className="platform-section" id="platform">
          <div className="shell">
            <div className="section-intro platform-intro">
              <h2>Explore the Stepes Translation Platform</h2>
              <p>
                The API Documentation hub explains how developers integrate with
                Stepes. Explore the platform capabilities that support the broader
                translation, quality, governance, and delivery workflow.
              </p>
            </div>

            <div className="platform-directory">
              {relatedCapabilities.map((item) => (
                <article className="platform-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <ArrowLink href={item.href}>Explore {item.title}</ArrowLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 14: API Documentation FAQ */}
        <section className="faq-section" id="faq">
          <div className="shell faq-layout">
            <div className="faq-intro">
              <h2>Answers for Developers and Technical Teams</h2>
              <p>
                Review common questions about API access, content support,
                authentication, workflow monitoring, production operations, and
                implementation assistance.
              </p>
              <ArrowLink href="https://www.stepes.com/contact-us/">
                Ask an Integration Question
              </ArrowLink>
            </div>

            <div className="faq-panel">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-button-${index}`;

                return (
                  <article className={`faq-item ${isOpen ? "open" : ""}`} key={item.question}>
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      >
                        <span>{item.question}</span>
                        <span className="faq-control" aria-hidden="true">
                          <Icon name="chevron" size={19} />
                        </span>
                      </button>
                    </h3>

                    <div
                      id={panelId}
                      className="faq-answer"
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                    >
                      <p>{item.answer}</p>
                      {item.href && item.link && (
                        <ArrowLink href={item.href}>{item.link}</ArrowLink>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 15: Final CTA */}
        <section className="final-cta-section" id="get-started">
          <div className="shell final-cta-panel">
            <div className="final-cta-copy">
              <h2>Build Your Translation Integration with Stepes</h2>
              <p>
                Connect your applications and enterprise content systems to scalable
                multilingual workflows supported by Stepes translation technology,
                professional linguistic expertise, terminology governance, quality
                assurance, and integration guidance.
              </p>

              <div className="final-cta-actions">
                <a
                  className="button button-primary"
                  href="https://www.stepes.com/api-documentation/getting-started/"
                >
                  Get Started
                  <Icon name="arrow" size={18} />
                </a>
                <a
                  className="button button-secondary"
                  href="https://www.stepes.com/contact-us/"
                >
                  Talk to an Integration Specialist
                </a>
              </div>
            </div>

            <div className="final-cta-visual">
              <div className="final-cta-image-frame">
                {/* Production implementation: replace this local filename with the final Stepes asset path. */}
                <img
                  className="final-cta-image"
                  src={finalCtaIllustrationSrc}
                  alt="Typical integration flow from Your System through the Stepes API to Global Content."
                />
              </div>
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
    --ink: #171A24;
    --text: #343A4A;
    --muted: #667085;
    --border: #E5E7EC;
    --surface: #F7F8FA;
    --shell: 1280px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #FFFFFF;
  }

  .stepes-api-page {
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    color: var(--text);
    background: #FFFFFF;
    font-family:
      Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
  }

  .stepes-api-page a {
    color: inherit;
    text-decoration: none;
  }

  .shell {
    width: min(var(--shell), calc(100% - 112px));
    margin: 0 auto;
  }

  .hero {
    position: relative;
    background: #FFFFFF;
  }

  .hero-layout {
    min-height: 0;
    padding-top: 96px;
    padding-bottom: 88px;
    display: block;
  }

  .hero-copy {
    max-width: 860px;
    margin: 0 auto;
    text-align: center;
  }

  .hero h1 {
    max-width: 860px;
    margin: 0 auto;
    color: var(--ink);
    font-size: 48px;
    font-weight: 600;
    letter-spacing: -0.035em;
    line-height: 1.08;
  }

  .hero-lead {
    max-width: 780px;
    margin: 24px auto 0;
    color: #3B4252;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
  }

  .hero-support {
    max-width: 760px;
    margin: 16px auto 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .hero-actions {
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
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
    font-size: 14px;
    font-weight: 600;
    line-height: 1.2;
    transition:
      transform 160ms ease,
      background-color 160ms ease,
      border-color 160ms ease,
      box-shadow 160ms ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button:focus-visible,
  .arrow-link:focus-visible,
  .local-nav a:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.22);
    outline-offset: 3px;
  }

  .button-primary,
  .button-primary:link,
  .button-primary:visited,
  .button-primary:hover,
  .button-primary:active,
  .button-primary:focus-visible {
    color: #FFFFFF !important;
  }

  .button-primary {
    background: var(--accent);
    box-shadow: 0 12px 28px rgba(193, 29, 99, 0.18);
  }

  .button-primary:hover {
    background: var(--accent-dark);
    box-shadow: 0 14px 32px rgba(193, 29, 99, 0.22);
  }

  .button-secondary {
    border-color: #D9DDE5;
    color: #252A36;
    background: #FFFFFF;
  }

  .button-secondary:hover {
    border-color: #C8CDD7;
    background: #FAFAFB;
  }

  .arrow-link {
    width: fit-content;
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--accent) !important;
    font-size: 14px;
    font-weight: 600;
  }

  .arrow-link svg {
    transition: transform 160ms ease;
  }

  .arrow-link:hover svg {
    transform: translateX(3px);
  }

  .arrow-link:hover span {
    text-decoration: underline;
    text-underline-offset: 4px;
  }

  .access-link {
    margin: 10px auto 0;
  }

  .trust-row {
    max-width: 920px;
    margin: 30px auto 0;
    padding-top: 22px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
  }

  .trust-row span {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #596173;
    font-size: 14px;
    font-weight: 400;
  }

  .trust-row svg {
    color: var(--accent);
  }

  .hero-visual {
    width: 100%;
    margin-top: 48px;
  }

  .workflow-canvas {
    position: relative;
    min-height: 0;
    padding: 36px 40px 40px;
    border: 1px solid var(--border);
    border-radius: 30px;
    overflow: hidden;
    background:
      linear-gradient(rgba(193, 29, 99, 0.032) 1px, transparent 1px),
      linear-gradient(90deg, rgba(193, 29, 99, 0.032) 1px, transparent 1px),
      #FFFFFF;
    background-size: 32px 32px;
    box-shadow: 0 24px 60px rgba(18, 24, 38, 0.09);
  }

  .visual-label {
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .workflow-track {
    margin-top: 28px;
    display: grid;
    grid-template-columns:
      minmax(0, 1fr)
      48px
      minmax(0, 1.08fr)
      48px
      minmax(0, 1fr);
    align-items: center;
    gap: 0;
  }

  .workflow-stage {
    min-width: 0;
    min-height: 118px;
    padding: 20px 22px;
    border: 1px solid var(--border);
    border-radius: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    background: #FFFFFF;
  }

  .workflow-stage-primary {
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    border-color: rgba(193, 29, 99, 0.24);
    background: linear-gradient(135deg, #FFFFFF 0%, var(--accent-soft) 100%);
  }

  .workflow-stage-icon {
    width: 42px;
    height: 42px;
    border-radius: 14px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: var(--accent);
    background: var(--accent-soft);
  }

  .workflow-stage-copy {
    min-width: 0;
  }

  .workflow-stage-copy strong,
  .workflow-stage-copy small,
  .workflow-stage-copy span {
    display: block;
  }

  .workflow-stage-label {
    margin-bottom: 6px;
    color: #8A92A3;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .workflow-stage-copy strong {
    color: var(--ink);
    font-size: 17px;
    font-weight: 600;
    line-height: 1.3;
  }

  .workflow-stage-copy small {
    margin-top: 4px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 400;
    line-height: 1.45;
  }

  .workflow-stage-badge {
    width: fit-content;
    margin-bottom: 10px;
    padding: 6px 9px;
    border-radius: 999px;
    color: var(--accent);
    border: 1px solid rgba(193, 29, 99, 0.18);
    background: rgba(255, 255, 255, 0.75);
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .workflow-connector {
    position: relative;
    width: auto;
    height: 1px;
    margin: 0 12px;
    background: #C9CDD6;
  }

  .workflow-connector span {
    position: absolute;
    top: 50%;
    right: -1px;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transform: translateY(-50%);
    background: var(--accent);
  }

  .request-panel {
    margin-top: 30px;
    padding: 24px;
    border: 1px solid #D9DDE5;
    border-radius: 24px;
    background: #171A24;
    box-shadow: 0 16px 34px rgba(18, 24, 38, 0.14);
  }

  .request-panel-header {
    padding-bottom: 16px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .request-panel-header strong,
  .request-panel-header span {
    display: block;
  }

  .request-kicker {
    color: #E6A5C1;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
  }

  .request-panel-header strong {
    margin-top: 4px;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 600;
  }

  .request-state {
    padding: 6px 10px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 999px;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 600;
    background: rgba(255, 255, 255, 0.06);
  }

  .request-grid {
    margin-top: 18px;
    display: grid;
    grid-template-columns:
      minmax(130px, 0.72fr)
      minmax(170px, 0.95fr)
      minmax(220px, 1.25fr)
      minmax(250px, 1.45fr);
    gap: 12px;
  }

  .request-field {
    min-width: 0;
    padding: 12px 13px;
    border: 1px solid rgba(255, 255, 255, 0.09);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.035);
  }

  .request-field-wide {
    grid-column: auto;
  }

  .request-field span,
  .request-field strong {
    display: block;
  }

  .request-field span {
    color: #929AAD;
    font-size: 12px;
  }

  .request-field strong {
    margin-top: 4px;
    color: #F5F6F8;
    font-size: 13px;
    font-weight: 600;
    overflow-wrap: anywhere;
  }

  .request-field strong svg {
    margin-right: 7px;
    vertical-align: -3px;
    color: #E6A5C1;
  }

  .local-nav-wrap {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: rgba(255, 255, 255, 0.97);
  }

  .local-nav {
    min-height: 60px;
    display: flex;
    align-items: center;
    gap: 28px;
    overflow-x: auto;
    scrollbar-width: none;
  }

  .local-nav::-webkit-scrollbar {
    display: none;
  }

  .local-nav-label {
    flex: 0 0 auto;
    color: #2E3442;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.10em;
    text-transform: uppercase;
  }

  .local-nav a {
    position: relative;
    min-height: 44px;
    padding: 18px 0 16px;
    flex: 0 0 auto;
    color: #626A7B;
    font-size: 14px;
    font-weight: 600;
  }

  .local-nav a:hover,
  .local-nav a.active {
    color: var(--accent);
  }

  .local-nav a.active::after {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 2px;
    background: var(--accent);
    content: "";
  }

  .starting-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .section-intro {
    max-width: 800px;
  }

  .section-intro h2,
  .framework-intro h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .section-intro > p:not(.eyebrow) {
    max-width: 760px;
    margin: 16px 0 0;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.65;
  }

  .starting-grid {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .starting-item {
    min-width: 0;
    min-height: 286px;
    padding: 30px 28px;
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
  }

  .starting-item:last-child {
    border-right: 0;
  }

  .starting-icon {
    width: 46px;
    height: 46px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--accent-soft);
  }

  .starting-item h3 {
    margin: 24px 0 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .starting-item p {
    margin: 12px 0 20px;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .starting-item .arrow-link {
    margin-top: auto;
  }

  .framework-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .framework-intro {
    max-width: 900px;
  }

  .eyebrow {
    margin: 0 0 14px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .framework-lead {
    max-width: 820px;
    margin: 20px 0 6px;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .lifecycle {
    margin-top: 46px;
    padding: 20px 22px;
    border: 1px solid var(--border);
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    background: #FFFFFF;
  }

  .lifecycle-stage {
    min-width: 84px;
    display: grid;
    gap: 4px;
    text-align: center;
  }

  .lifecycle-stage span {
    color: #A8AFBC;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .lifecycle-stage strong {
    color: #3D4454;
    font-size: 14px;
    font-weight: 600;
  }

  .lifecycle-stage:first-child strong,
  .lifecycle-stage:last-of-type strong {
    color: var(--accent);
  }

  .lifecycle-arrow {
    color: #BDC2CC;
  }

  .workflow-list {
    margin-top: 38px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .workflow-step {
    min-height: 184px;
    padding: 30px 28px 30px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .workflow-step:nth-child(3n) {
    padding-right: 0;
    padding-left: 28px;
    border-right: 0;
  }

  .workflow-step:nth-child(3n + 2) {
    padding-left: 28px;
  }

  .workflow-step:nth-child(n + 4) {
    border-bottom: 0;
  }

  .step-number {
    width: 40px;
    height: 40px;
    border: 1px solid rgba(193, 29, 99, 0.22);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
    font-size: 11px;
    font-weight: 600;
  }

  .workflow-step h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .workflow-step p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .framework-summary {
    margin-top: 34px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 36px;
  }

  .framework-summary > div {
    max-width: 760px;
  }

  .framework-summary h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .framework-summary p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }


  .capabilities-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .capabilities-section .section-intro {
    max-width: 850px;
  }

  .capability-grid {
    margin-top: 42px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .capability-item {
    min-height: 212px;
    padding: 30px 28px 30px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: 17px;
  }

  .capability-item:nth-child(3n) {
    padding-right: 0;
    padding-left: 28px;
    border-right: 0;
  }

  .capability-item:nth-child(3n + 2) {
    padding-left: 28px;
  }

  .capability-item:nth-child(n + 4) {
    border-bottom: 0;
  }

  .capability-icon {
    width: 44px;
    height: 44px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
  }

  .capability-item h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .capability-item p {
    margin: 10px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .capability-outcome {
    margin-top: 32px;
    padding-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 38px;
  }

  .capability-outcome > div {
    max-width: 780px;
  }

  .capability-outcome h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .capability-outcome p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .quickstart-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .quickstart-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.78fr) minmax(560px, 1.22fr);
    align-items: center;
    gap: 72px;
  }

  .quickstart-copy {
    max-width: 520px;
  }

  .quickstart-copy h2,
  .documentation-intro h2,
  .resource-model-intro h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .quickstart-lead,
  .resource-model-intro > p:last-child {
    margin: 18px 0 0;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .quickstart-steps {
    margin: 28px 0 12px;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--border);
  }

  .quickstart-steps li {
    min-height: 68px;
    padding: 16px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 38px minmax(0, 1fr);
    align-items: start;
    gap: 14px;
  }

  .quickstart-steps li > span {
    padding-top: 2px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }

  .quickstart-steps p {
    margin: 0;
    color: #4F5768;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  .code-example {
    min-width: 0;
    overflow: hidden;
    border: 1px solid #2A2F3B;
    border-radius: 30px;
    color: #F5F7FA;
    background: #171A24;
    box-shadow: 0 24px 54px rgba(18, 24, 38, 0.16);
  }

  .code-toolbar {
    min-height: 64px;
    padding: 0 18px 0 22px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.10);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  .code-tabs {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 6px;
  }

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

  .code-tabs button {
    padding: 9px 13px;
  }

  .code-tabs button:hover,
  .code-tabs button.active {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.08);
  }

  .code-tabs button:focus-visible,
  .copy-button:focus-visible {
    outline: 3px solid rgba(230, 165, 193, 0.30);
    outline-offset: 2px;
  }

  .copy-button {
    padding: 9px 12px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
  }

  .copy-button:hover {
    color: #FFFFFF;
    background: rgba(255, 255, 255, 0.08);
  }

  .code-window {
    min-width: 0;
  }

  .code-window-label {
    padding: 16px 22px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    color: #9098A8;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
  }

  .code-window-label span:last-child {
    color: #E6A5C1;
  }

  .code-window pre {
    min-height: 325px;
    margin: 0;
    padding: 20px 22px 24px;
    overflow-x: auto;
    white-space: pre;
    color: #E7EBF3;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 13px;
    line-height: 1.65;
    tab-size: 2;
  }

  .response-preview {
    margin: 0 18px 18px;
    padding: 16px 18px;
    border: 1px solid rgba(255, 255, 255, 0.10);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.045);
  }

  .response-heading {
    display: flex;
    align-items: center;
    gap: 9px;
    color: #FFFFFF;
    font-size: 13px;
  }

  .response-heading strong {
    font-weight: 600;
  }

  .response-indicator {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #65C58A;
  }

  .response-preview > code {
    margin-top: 12px;
    display: block;
    overflow-x: auto;
    white-space: pre;
    color: #C9D0DD;
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 12px;
    line-height: 1.6;
  }

  .documentation-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .documentation-intro {
    max-width: 820px;
  }

  .documentation-grid {
    margin-top: 46px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--border);
  }

  .documentation-item {
    min-width: 0;
    padding: 32px 36px 34px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .documentation-item:nth-child(even) {
    padding-right: 0;
    padding-left: 36px;
    border-right: 0;
  }

  .documentation-heading {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .documentation-icon {
    width: 44px;
    height: 44px;
    border-radius: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--accent-soft);
  }

  .documentation-heading h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .documentation-heading p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  .documentation-item ul {
    margin: 22px 0 10px 62px;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 22px;
    list-style: none;
  }

  .documentation-item li {
    min-width: 0;
  }

  .documentation-item li a {
    min-height: 40px;
    padding: 7px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    color: #4F5768;
    font-size: 14px;
    font-weight: 400;
  }

  .documentation-item li a:hover {
    color: var(--accent);
  }

  .documentation-item li svg {
    flex: 0 0 auto;
    color: #A4AAB6;
  }

  .documentation-item > .arrow-link {
    margin-left: 62px;
  }

  .resource-model-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .resource-model-intro {
    max-width: 860px;
  }

  .resource-model-layout {
    margin-top: 46px;
    display: grid;
    grid-template-columns: minmax(500px, 1.02fr) minmax(0, 0.98fr);
    align-items: start;
    gap: 56px;
  }

  .resource-diagram {
    min-width: 0;
    padding: 36px;
    border: 1px solid var(--border);
    border-radius: 30px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: linear-gradient(180deg, #FFFFFF 0%, #FCFCFD 100%);
    box-shadow: 0 20px 46px rgba(18, 24, 38, 0.07);
  }

  .resource-node {
    width: min(390px, 100%);
    padding: 16px 20px;
    border: 1px solid var(--border);
    border-radius: 20px;
    text-align: center;
    background: #FFFFFF;
  }

  .resource-node span,
  .resource-node small {
    display: block;
  }

  .resource-node span {
    color: var(--ink);
    font-size: 16px;
    font-weight: 600;
  }

  .resource-node small {
    margin-top: 3px;
    color: var(--muted);
    font-size: 12px;
  }

  .resource-node-primary {
    border-color: rgba(193, 29, 99, 0.24);
    background: var(--accent-soft);
  }

  .resource-node-project {
    border-color: rgba(193, 29, 99, 0.34);
    box-shadow: 0 10px 24px rgba(193, 29, 99, 0.09);
  }

  .resource-connector {
    width: 1px;
    height: 24px;
    background: #BFC5D0;
  }

  .resource-branch {
    position: relative;
    width: 100%;
    height: 30px;
  }

  .resource-branch::before {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1px;
    height: 16px;
    background: #BFC5D0;
    transform: translateX(-50%);
    content: "";
  }

  .resource-branch::after {
    position: absolute;
    bottom: 0;
    left: 12%;
    right: 12%;
    height: 1px;
    background: #BFC5D0;
    content: "";
  }

  .resource-branch span {
    display: none;
  }

  .resource-children {
    width: 100%;
    padding-top: 18px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 12px;
    row-gap: 12px;
  }

  .resource-child {
    position: relative;
    min-height: 58px;
    padding: 12px;
    border: 1px solid var(--border);
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #485061;
    background: #FFFFFF;
    text-align: center;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.35;
  }

  .resource-child:nth-child(-n + 3)::before {
    position: absolute;
    top: -19px;
    left: 50%;
    width: 1px;
    height: 18px;
    background: #BFC5D0;
    transform: translateX(-50%);
    content: "";
  }

  .resource-family-list {
    border-top: 1px solid var(--border);
  }

  .resource-family-list article {
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
  }

  .resource-family-list h3 {
    margin: 0;
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.3;
  }

  .resource-family-list p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  .resource-family-list > .arrow-link {
    margin-top: 12px;
  }


  .content-workflow-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .content-workflow-intro {
    max-width: 900px;
  }

  .content-workflow-layout {
    margin-top: 46px;
    display: grid;
    grid-template-columns: minmax(0, 0.96fr) minmax(500px, 1.04fr);
    align-items: stretch;
    gap: 48px;
  }

  .content-input-panel {
    min-width: 0;
  }

  .subsection-heading {
    max-width: 610px;
  }

  .subsection-heading h3,
  .workflow-config-heading h3,
  .integration-core h3,
  .reliability-column-heading h3,
  .api-lifecycle-panel > h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.25;
  }

  .subsection-heading p,
  .workflow-config-heading p,
  .integration-core p,
  .reliability-column-heading p,
  .api-lifecycle-lead {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .content-input-list {
    margin-top: 25px;
    border-top: 1px solid var(--border);
  }

  .content-input-list article {
    min-height: 112px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .content-input-icon,
  .integration-pattern-icon,
  .developer-tool-icon {
    width: 42px;
    height: 42px;
    border-radius: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--accent-soft);
  }

  .content-input-list h3,
  .workflow-option-list h3,
  .integration-pattern-list h3,
  .reliability-list h3,
  .developer-tool-list h3,
  .api-lifecycle-list h3 {
    margin: 0;
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.3;
  }

  .content-input-list p,
  .workflow-option-list p,
  .integration-pattern-list p,
  .reliability-list p,
  .developer-tool-list p,
  .api-lifecycle-list p {
    margin: 7px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.6;
  }

  .content-resource-links,
  .workflow-config-links,
  .integration-links,
  .reliability-links,
  .developer-tool-links {
    margin-top: 22px;
    display: flex;
    align-items: center;
    gap: 8px 24px;
    flex-wrap: wrap;
  }

  .workflow-config-panel {
    min-width: 0;
    padding: 36px;
    border: 1px solid rgba(193, 29, 99, 0.18);
    border-radius: 30px;
    background: var(--accent-soft);
  }

  .panel-label {
    display: block;
    margin-bottom: 11px;
    color: var(--accent);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
    line-height: 1.4;
    text-transform: uppercase;
  }

  .workflow-option-list {
    margin-top: 24px;
    border-top: 1px solid rgba(193, 29, 99, 0.14);
  }

  .workflow-option-list article {
    min-height: 90px;
    padding: 17px 0;
    border-bottom: 1px solid rgba(193, 29, 99, 0.14);
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    align-items: start;
    gap: 12px;
  }

  .workflow-option-marker {
    width: 24px;
    height: 24px;
    margin-top: 1px;
    border: 1px solid rgba(193, 29, 99, 0.26);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
  }

  .workflow-config-note {
    margin-top: 24px;
    padding: 18px 20px;
    border: 1px solid rgba(193, 29, 99, 0.16);
    border-radius: 20px;
    background: #FFFFFF;
  }

  .workflow-config-note strong,
  .api-lifecycle-note strong {
    color: var(--ink);
    font-size: 16px;
    font-weight: 600;
  }

  .workflow-config-note p,
  .api-lifecycle-note p {
    margin: 6px 0 0;
    color: var(--muted);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }

  .integration-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .integration-intro {
    max-width: 880px;
  }

  .integration-layout {
    margin-top: 46px;
    display: grid;
    grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
    align-items: start;
    gap: 48px;
  }

  .integration-core {
    min-height: 0;
    padding: 34px;
    border: 1px solid rgba(193, 29, 99, 0.20);
    border-radius: 30px;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    background: #FFFFFF;
    box-shadow: 0 20px 44px rgba(18, 24, 38, 0.07);
  }

  .integration-core-mark {
    width: 58px;
    height: 58px;
    margin-bottom: 22px;
    border-radius: 20px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    background: var(--accent);
  }

  .integration-core-flow {
    margin-top: 26px;
    padding-top: 20px;
    border-top: 1px solid var(--border);
    display: flex;
    align-items: center;
    gap: 9px;
    color: #555D6E;
    font-size: 13px;
    font-weight: 600;
  }

  .integration-core-flow svg {
    color: #AAB0BB;
  }

  .integration-pattern-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .integration-pattern-list article {
    min-height: 164px;
    padding: 26px 26px 26px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: start;
    gap: 15px;
  }

  .integration-pattern-list article:nth-child(even) {
    padding-right: 0;
    padding-left: 26px;
    border-right: 0;
  }

  .integration-pattern-list article:nth-last-child(-n + 2) {
    border-bottom: 0;
  }

  .integration-pattern-list article:last-child {
    grid-column: 1 / -1;
    padding-left: 0;
    border-right: 0;
    border-bottom: 0;
  }

  .reliability-section {
    padding: 96px 0;
    color: #FFFFFF;
    background: #171A24;
  }

  .reliability-intro {
    max-width: 900px;
  }

  .eyebrow-dark {
    color: #F0A9C6;
  }

  .reliability-intro h2 {
    margin: 0;
    color: #FFFFFF;
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .reliability-intro > p:last-child {
    max-width: 820px;
    margin: 18px 0 0;
    color: #B8BFCC;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .reliability-columns {
    margin-top: 46px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 56px;
  }

  .reliability-column-heading {
    min-height: 110px;
    padding-bottom: 25px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .reliability-column-heading > svg {
    margin-top: 2px;
    color: #F0A9C6;
  }

  .reliability-column-heading h3 {
    color: #FFFFFF;
  }

  .reliability-column-heading p {
    color: #AEB6C5;
  }

  .reliability-list article {
    min-height: 102px;
    padding: 18px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  }

  .reliability-list h3 {
    color: #FFFFFF;
  }

  .reliability-list p {
    color: #AEB6C5;
  }

  .reliability-links {
    margin-top: 30px;
    padding-top: 26px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .reliability-section .arrow-link {
    color: #F0A9C6 !important;
  }

  .developer-tools-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .developer-tools-intro {
    max-width: 880px;
  }

  .developer-tools-layout {
    margin-top: 46px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(470px, 0.92fr);
    align-items: start;
    gap: 56px;
  }

  .developer-tool-list {
    border-top: 1px solid var(--border);
  }

  .developer-tool-list > article {
    min-height: 112px;
    padding: 20px 0;
    border-bottom: 1px solid var(--border);
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: start;
    gap: 16px;
  }

  .api-lifecycle-panel {
    padding: 36px;
    border: 1px solid var(--border);
    border-radius: 30px;
    background: var(--surface);
  }

  .api-lifecycle-list {
    margin-top: 26px;
  }

  .api-lifecycle-list article {
    min-height: 98px;
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: stretch;
    gap: 16px;
  }

  .api-lifecycle-track {
    position: relative;
    display: flex;
    justify-content: center;
  }

  .api-lifecycle-track::after {
    position: absolute;
    top: 31px;
    bottom: -3px;
    left: 50%;
    width: 1px;
    background: #D2D6DE;
    content: "";
  }

  .api-lifecycle-list article:last-child .api-lifecycle-track::after {
    display: none;
  }

  .api-lifecycle-track span {
    position: relative;
    z-index: 2;
    width: 34px;
    height: 34px;
    border: 1px solid rgba(193, 29, 99, 0.22);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: #FFFFFF;
    font-size: 10px;
    font-weight: 600;
  }

  .api-lifecycle-list article > div:last-child {
    padding: 4px 0 22px;
    border-bottom: 1px solid var(--border);
  }

  .api-lifecycle-list article:last-child > div:last-child {
    border-bottom: 0;
  }

  .api-lifecycle-note {
    margin-top: 14px;
    padding: 18px 20px;
    border: 1px solid rgba(193, 29, 99, 0.15);
    border-radius: 20px;
    background: var(--accent-soft);
  }


  .integration-support-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .integration-support-intro {
    max-width: 900px;
  }

  .support-journey {
    position: relative;
    margin-top: 46px;
    display: grid;
    grid-template-columns: repeat(7, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .support-journey::before {
    position: absolute;
    top: 51px;
    right: 7%;
    left: 7%;
    height: 1px;
    background: #CDD1D9;
    content: "";
  }

  .support-stage {
    position: relative;
    z-index: 2;
    min-width: 0;
    padding: 30px 15px 28px;
    text-align: center;
  }

  .support-stage-marker {
    height: 43px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }

  .support-stage-marker span {
    width: 42px;
    height: 42px;
    border: 1px solid rgba(193, 29, 99, 0.24);
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--accent);
    background: var(--surface);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.06em;
  }

  .support-stage h3 {
    margin: 20px 0 0;
    color: var(--ink);
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -0.015em;
    line-height: 1.35;
  }

  .support-stage p {
    margin: 9px 0 0;
    color: var(--muted);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.6;
  }

  .support-cta-row {
    margin-top: 32px;
    padding-top: 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 42px;
  }

  .support-cta-row > div {
    max-width: 760px;
  }

  .support-cta-row h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .support-cta-row p {
    margin: 8px 0 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .platform-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .platform-intro {
    max-width: 900px;
  }

  .platform-directory {
    margin-top: 44px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .platform-item {
    min-height: 222px;
    padding: 30px 30px 30px 0;
    border-right: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    display: flex;
    flex-direction: column;
  }

  .platform-item:nth-child(3n) {
    padding-right: 0;
    padding-left: 30px;
    border-right: 0;
  }

  .platform-item:nth-child(3n + 2) {
    padding-left: 30px;
  }

  .platform-item:nth-child(n + 7) {
    border-bottom: 0;
  }

  .platform-item h3 {
    margin: 0;
    color: var(--ink);
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    line-height: 1.3;
  }

  .platform-item p {
    margin: 10px 0 16px;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .platform-item .arrow-link {
    margin-top: auto;
  }

  .faq-section {
    padding: 96px 0;
    background: var(--surface);
  }

  .faq-layout {
    display: grid;
    grid-template-columns: minmax(280px, 0.68fr) minmax(0, 1.32fr);
    align-items: start;
    gap: 72px;
  }

  .faq-intro {
    position: static;
    max-width: 420px;
  }

  .faq-intro h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .faq-intro > p:not(.eyebrow) {
    margin: 18px 0 6px;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .faq-panel {
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
  }

  .faq-item {
    border-bottom: 1px solid var(--border);
  }

  .faq-item:last-child {
    border-bottom: 0;
  }

  .faq-item h3 {
    margin: 0;
  }

  .faq-item h3 button {
    width: 100%;
    min-height: 78px;
    padding: 20px 0;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 26px;
    color: var(--ink);
    background: transparent;
    text-align: left;
    font: inherit;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.45;
    cursor: pointer;
  }

  .faq-item h3 button:hover {
    color: var(--accent);
  }

  .faq-item h3 button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.20);
    outline-offset: 4px;
  }

  .faq-control {
    width: 38px;
    height: 38px;
    border: 1px solid #D7DBE3;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    color: #737B8D;
    background: #FFFFFF;
  }

  .faq-control svg {
    transition: transform 170ms ease;
  }

  .faq-item.open .faq-control {
    color: var(--accent);
    border-color: rgba(193, 29, 99, 0.24);
    background: var(--accent-soft);
  }

  .faq-item.open .faq-control svg {
    transform: rotate(180deg);
  }

  .faq-answer {
    max-width: 840px;
    padding: 0 66px 26px 0;
  }

  .faq-answer[hidden] {
    display: none;
  }

  .faq-answer p {
    margin: 0;
    color: var(--muted);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .faq-answer .arrow-link {
    margin-top: 8px;
  }

  .final-cta-section {
    padding: 96px 0;
    background: #FFFFFF;
  }

  .final-cta-panel {
    min-height: 390px;
    padding: 58px 62px;
    border: 1px solid rgba(193, 29, 99, 0.14);
    border-radius: 30px;
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(430px, 0.92fr);
    align-items: center;
    gap: 64px;
    overflow: hidden;
    background:
      linear-gradient(135deg, var(--accent-soft) 0%, #FFFFFF 58%, #FFFFFF 100%);
  }

  .final-cta-copy {
    max-width: 700px;
  }

  .final-cta-copy h2 {
    margin: 0;
    color: var(--ink);
    font-size: 36px;
    font-weight: 600;
    letter-spacing: -0.028em;
    line-height: 1.2;
  }

  .final-cta-copy > p:not(.eyebrow) {
    margin: 18px 0 0;
    color: var(--muted);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.7;
  }

  .final-cta-actions {
    margin-top: 28px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
  }

  .final-cta-visual {
    min-width: 0;
    padding: 12px 0;
  }

  .final-cta-image-frame {
    width: 100%;
    max-width: 760px;
    margin: 0 auto;
    border-radius: 20px;
    overflow: hidden;
    background: #FFFFFF;
    box-shadow: 0 18px 44px rgba(18, 24, 38, 0.07);
  }

  .final-cta-image {
    width: 100%;
    height: auto;
    display: block;
  }

  @media (max-width: 1199px) {
    .shell {
      width: min(var(--shell), calc(100% - 80px));
    }

    .hero-layout {
      padding-top: 88px;
      padding-bottom: 82px;
    }

    .hero-copy {
      max-width: 820px;
    }

    .workflow-canvas {
      padding: 32px 30px 34px;
    }

    .workflow-track {
      grid-template-columns:
        minmax(0, 1fr)
        38px
        minmax(0, 1.08fr)
        38px
        minmax(0, 1fr);
    }

    .workflow-stage {
      min-height: 112px;
      padding: 18px;
    }

    .workflow-connector {
      margin: 0 8px;
    }

    .request-grid {
      grid-template-columns:
        minmax(120px, 0.72fr)
        minmax(150px, 0.95fr)
        minmax(190px, 1.2fr)
        minmax(210px, 1.35fr);
    }

    .starting-item {
      padding-right: 22px;
      padding-left: 22px;
    }

    .lifecycle-stage {
      min-width: 66px;
    }
  }

  @media (max-width: 991px) {
    .shell {
      width: min(var(--shell), calc(100% - 48px));
    }

    .hero-layout {
      min-height: 0;
      padding-top: 88px;
      padding-bottom: 80px;
    }

    .hero-copy {
      max-width: 760px;
    }

    .hero h1 {
      max-width: 760px;
      font-size: 42px;
    }

    .hero-visual {
      max-width: none;
      margin-top: 44px;
    }

    .workflow-track {
      grid-template-columns:
        minmax(0, 1fr)
        30px
        minmax(0, 1.08fr)
        30px
        minmax(0, 1fr);
    }

    .workflow-stage {
      padding: 16px;
    }

    .workflow-stage-copy strong {
      font-size: 15px;
    }

    .workflow-connector {
      margin: 0 6px;
    }

    .request-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .request-field-wide {
      grid-column: auto;
    }

    .starting-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .starting-item {
      border-bottom: 1px solid var(--border);
    }

    .starting-item:nth-child(2) {
      border-right: 0;
    }

    .starting-item:nth-child(n + 3) {
      border-bottom: 0;
    }

    .lifecycle {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      padding: 0;
      overflow: hidden;
      gap: 0;
    }

    .lifecycle-stage {
      min-width: 0;
      padding: 18px 10px;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .lifecycle-stage:nth-of-type(4n) {
      border-right: 0;
    }

    .lifecycle-stage:nth-last-of-type(-n + 4) {
      border-bottom: 0;
    }

    .lifecycle-arrow {
      display: none;
    }

    .workflow-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .workflow-step,
    .workflow-step:nth-child(3n),
    .workflow-step:nth-child(3n + 2) {
      padding: 28px 24px 28px 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .workflow-step:nth-child(even) {
      padding-right: 0;
      padding-left: 24px;
      border-right: 0;
    }

    .workflow-step:nth-child(n + 5) {
      border-bottom: 0;
    }
  }

  @media (max-width: 767px) {
    .shell {
      width: calc(100% - 40px);
    }

    .hero-layout {
      padding-top: 72px;
      padding-bottom: 72px;
    }

    .hero h1 {
      font-size: 38px;
      line-height: 1.1;
    }

    .hero-lead,
    .section-intro > p:not(.eyebrow),
    .framework-lead {
      font-size: 18px;
    }

    .hero-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .hero-actions .button {
      width: 100%;
    }

    .hero-copy {
      text-align: center;
    }

    .access-link {
      margin-right: auto;
      margin-left: auto;
    }

    .hero-visual {
      margin-top: 38px;
    }

    .trust-row {
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 12px;
      text-align: center;
    }

    .workflow-canvas {
      min-height: 0;
      padding: 24px 20px;
      border-radius: 28px;
    }

    .workflow-track {
      grid-template-columns: 1fr;
      gap: 12px;
    }

    .workflow-stage,
    .workflow-stage-primary {
      min-height: 0;
      border-radius: 20px;
    }

    .workflow-connector {
      width: 1px;
      height: 28px;
      margin: 0 auto;
      flex: 0 0 28px;
      background: #C9CDD6;
    }

    .workflow-connector span {
      top: auto;
      right: 50%;
      bottom: -1px;
      transform: translateX(50%);
    }

    .request-panel {
      display: none;
    }

    .request-grid {
      grid-template-columns: 1fr;
    }

    .request-field-wide {
      grid-column: auto;
    }

    .local-nav-label {
      display: none;
    }

    .local-nav {
      gap: 22px;
    }

    .starting-section,
    .framework-section {
      padding: 72px 0;
    }

    .section-intro h2,
    .framework-intro h2 {
      font-size: 30px;
    }

    .starting-grid {
      grid-template-columns: 1fr;
      margin-top: 34px;
      border-bottom: 0;
    }

    .starting-item,
    .starting-item:nth-child(2),
    .starting-item:nth-child(n + 3) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .starting-item:last-child {
      border-bottom: 0;
    }

    .starting-item h3,
    .workflow-step h3,
    .framework-summary h3 {
      font-size: 20px;
    }

    .lifecycle {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 38px;
    }

    .lifecycle-stage {
      border-bottom: 1px solid var(--border) !important;
    }

    .lifecycle-stage:nth-of-type(even) {
      border-right: 0;
    }

    .lifecycle-stage:nth-last-of-type(-n + 2) {
      border-bottom: 0 !important;
    }

    .workflow-list {
      grid-template-columns: 1fr;
      margin-top: 32px;
    }

    .workflow-step,
    .workflow-step:nth-child(3n),
    .workflow-step:nth-child(3n + 2),
    .workflow-step:nth-child(even),
    .workflow-step:nth-child(n + 5) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .workflow-step:last-child {
      border-bottom: 0;
    }

    .framework-summary {
      align-items: stretch;
      flex-direction: column;
    }

    .framework-summary .button {
      width: 100%;
    }
  }

  @media (max-width: 359px) {
    .shell {
      width: calc(100% - 40px);
    }

    .workflow-canvas {
      padding-right: 16px;
      padding-left: 16px;
    }

    .request-panel-header {
      align-items: flex-start;
      flex-direction: column;
    }
  }


  @media (max-width: 1199px) {
    .quickstart-layout {
      grid-template-columns: minmax(0, 0.82fr) minmax(520px, 1.18fr);
      gap: 46px;
    }

    .resource-model-layout {
      grid-template-columns: minmax(460px, 1fr) minmax(0, 1fr);
      gap: 42px;
    }

    .documentation-item {
      padding-right: 28px;
    }

    .documentation-item:nth-child(even) {
      padding-left: 28px;
    }
  }

  @media (max-width: 991px) {
    .capability-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .capability-item,
    .capability-item:nth-child(3n),
    .capability-item:nth-child(3n + 2) {
      padding: 28px 24px 28px 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .capability-item:nth-child(even) {
      padding-right: 0;
      padding-left: 24px;
      border-right: 0;
    }

    .capability-item:nth-child(n + 5) {
      border-bottom: 0;
    }

    .quickstart-layout {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .quickstart-copy {
      max-width: 760px;
    }

    .code-example {
      max-width: 820px;
    }

    .resource-model-layout {
      grid-template-columns: 1fr;
    }

    .resource-diagram {
      max-width: 780px;
    }
  }

  @media (max-width: 767px) {
    .capabilities-section,
    .quickstart-section,
    .documentation-section,
    .resource-model-section {
      padding: 72px 0;
    }

    .quickstart-copy h2,
    .documentation-intro h2,
    .resource-model-intro h2 {
      font-size: 30px;
    }

    .capability-grid {
      grid-template-columns: 1fr;
      margin-top: 34px;
    }

    .capability-item,
    .capability-item:nth-child(3n),
    .capability-item:nth-child(3n + 2),
    .capability-item:nth-child(even),
    .capability-item:nth-child(n + 5) {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
    }

    .capability-item:last-child {
      border-bottom: 0;
    }

    .capability-item h3,
    .capability-outcome h3,
    .documentation-heading h3 {
      font-size: 20px;
    }

    .capability-outcome {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }

    .code-toolbar {
      min-height: 0;
      padding: 14px 14px 12px;
      align-items: stretch;
      flex-direction: column;
    }

    .code-tabs {
      width: 100%;
      overflow-x: auto;
    }

    .code-tabs button {
      flex: 0 0 auto;
    }

    .copy-button {
      width: fit-content;
    }

    .code-window-label {
      padding-right: 18px;
      padding-left: 18px;
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
    }

    .code-window pre {
      min-height: 0;
      padding-right: 18px;
      padding-left: 18px;
      font-size: 12px;
    }

    .documentation-grid {
      grid-template-columns: 1fr;
      margin-top: 36px;
    }

    .documentation-item,
    .documentation-item:nth-child(even) {
      padding: 28px 0;
      border-right: 0;
    }

    .documentation-item ul {
      margin-left: 0;
      grid-template-columns: 1fr;
    }

    .documentation-item > .arrow-link {
      margin-left: 0;
    }

    .documentation-item li a,
    .arrow-link,
    .card-link {
      overflow-wrap: anywhere;
    }

    .resource-model-layout {
      margin-top: 36px;
      gap: 38px;
    }

    .resource-diagram {
      padding: 28px 20px;
      border-radius: 28px;
    }

    .resource-branch {
      width: 1px;
      height: 24px;
      margin: 0 auto;
      background: #BFC5D0;
    }

    .resource-branch::before,
    .resource-branch::after,
    .resource-child::before {
      display: none;
    }

    .resource-children {
      padding-top: 0;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 389px) {
    .capability-item {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: 14px;
    }

    .capability-icon {
      width: 40px;
      height: 40px;
      border-radius: 14px;
    }

    .code-example {
      border-radius: 26px;
    }

    .response-preview {
      margin-right: 12px;
      margin-left: 12px;
    }

    .documentation-heading {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 13px;
    }

    .documentation-icon {
      width: 40px;
      height: 40px;
      border-radius: 14px;
    }

    .resource-children {
      grid-template-columns: 1fr;
    }

    .resource-branch {
      width: 1px;
      height: 24px;
      border-top: 0;
      background: #BFC5D0;
    }

    .resource-branch::before,
    .resource-branch::after,
    .resource-child::before {
      display: none;
    }
  }


  @media (max-width: 1199px) {
    .content-workflow-layout {
      grid-template-columns: minmax(0, 0.9fr) minmax(460px, 1.1fr);
      gap: 40px;
    }

    .integration-layout {
      grid-template-columns: minmax(280px, 0.68fr) minmax(0, 1.32fr);
      gap: 38px;
    }

    .developer-tools-layout {
      grid-template-columns: minmax(0, 1fr) minmax(430px, 0.92fr);
      gap: 42px;
    }
  }

  @media (max-width: 991px) {
    .content-workflow-layout,
    .integration-layout,
    .developer-tools-layout {
      grid-template-columns: 1fr;
    }

    .content-input-panel {
      max-width: 820px;
    }

    .workflow-config-panel,
    .integration-core,
    .api-lifecycle-panel {
      max-width: 820px;
    }

    .integration-pattern-list {
      max-width: 900px;
    }

    .reliability-columns {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .reliability-column-heading {
      min-height: 0;
    }

    .reliability-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-bottom: 1px solid rgba(255, 255, 255, 0.11);
    }

    .reliability-list article {
      padding-right: 24px;
      border-right: 1px solid rgba(255, 255, 255, 0.11);
    }

    .reliability-list article:nth-child(even) {
      padding-right: 0;
      padding-left: 24px;
      border-right: 0;
    }
  }

  @media (max-width: 767px) {
    .content-workflow-section,
    .integration-section,
    .reliability-section,
    .developer-tools-section {
      padding: 72px 0;
    }

    .workflow-config-panel,
    .integration-core,
    .api-lifecycle-panel {
      padding: 28px 22px;
      border-radius: 28px;
    }

    .subsection-heading h3,
    .workflow-config-heading h3,
    .integration-core h3,
    .reliability-column-heading h3,
    .api-lifecycle-panel > h3 {
      font-size: 20px;
    }

    .content-input-list article,
    .developer-tool-list > article {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: 14px;
    }

    .content-input-icon,
    .integration-pattern-icon,
    .developer-tool-icon {
      width: 40px;
      height: 40px;
      border-radius: 14px;
    }

    .content-resource-links,
    .workflow-config-links,
    .integration-links,
    .reliability-links,
    .developer-tool-links {
      align-items: flex-start;
      flex-direction: column;
      gap: 4px;
    }

    .integration-pattern-list {
      grid-template-columns: 1fr;
    }

    .integration-pattern-list article,
    .integration-pattern-list article:nth-child(even),
    .integration-pattern-list article:last-child {
      min-height: 0;
      padding: 24px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
      grid-column: auto;
    }

    .integration-pattern-list article:last-child {
      border-bottom: 0;
    }

    .integration-core-flow {
      align-items: flex-start;
      flex-direction: column;
    }

    .integration-core-flow svg {
      transform: rotate(90deg);
    }

    .reliability-intro h2 {
      font-size: 30px;
    }

    .reliability-intro > p:last-child {
      font-size: 18px;
    }

    .reliability-list {
      grid-template-columns: 1fr;
      border-bottom: 0;
    }

    .reliability-list article,
    .reliability-list article:nth-child(even) {
      min-height: 0;
      padding: 18px 0;
      border-right: 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.11);
    }

    .api-lifecycle-list article {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: 13px;
    }
  }

  @media (max-width: 389px) {
    .workflow-config-panel,
    .integration-core,
    .api-lifecycle-panel {
      padding-right: 18px;
      padding-left: 18px;
    }

    .workflow-option-list article {
      grid-template-columns: 25px minmax(0, 1fr);
      gap: 10px;
    }
  }


  @media (max-width: 1199px) {
    .support-journey {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    .support-journey::before {
      display: none;
    }

    .support-stage {
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .support-stage:nth-child(4n) {
      border-right: 0;
    }

    .support-stage:nth-last-child(-n + 3) {
      border-bottom: 0;
    }

    .final-cta-panel {
      grid-template-columns: minmax(0, 1fr) minmax(380px, 0.9fr);
      gap: 42px;
      padding-right: 46px;
      padding-left: 46px;
    }
  }

  @media (max-width: 991px) {
    .support-journey {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .support-stage:nth-child(4n) {
      border-right: 1px solid var(--border);
    }

    .support-stage:nth-child(even) {
      border-right: 0;
    }

    .support-stage:nth-last-child(-n + 3) {
      border-bottom: 1px solid var(--border);
    }

    .support-stage:last-child {
      border-right: 0;
      border-bottom: 0;
      grid-column: 1 / -1;
    }

    .platform-directory {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .platform-item,
    .platform-item:nth-child(3n),
    .platform-item:nth-child(3n + 2) {
      padding: 28px 26px 28px 0;
      border-right: 1px solid var(--border);
      border-bottom: 1px solid var(--border);
    }

    .platform-item:nth-child(even) {
      padding-right: 0;
      padding-left: 26px;
      border-right: 0;
    }

    .platform-item:nth-child(n + 7) {
      border-bottom: 1px solid var(--border);
    }

    .platform-item:last-child {
      border-right: 0;
      border-bottom: 0;
      grid-column: 1 / -1;
    }

    .faq-layout {
      grid-template-columns: 1fr;
      gap: 42px;
    }

    .faq-intro {
      position: static;
      max-width: 780px;
    }

    .final-cta-panel {
      grid-template-columns: 1fr;
    }

    .final-cta-copy {
      max-width: 780px;
    }

    .final-cta-visual {
      max-width: 680px;
    }
  }

  @media (max-width: 767px) {
    .integration-support-section,
    .platform-section,
    .faq-section,
    .final-cta-section {
      padding: 72px 0;
    }

    .support-journey {
      grid-template-columns: 1fr;
      margin-top: 36px;
    }

    .support-stage,
    .support-stage:nth-child(even),
    .support-stage:nth-child(4n),
    .support-stage:last-child {
      min-height: 0;
      padding: 24px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
      display: grid;
      grid-template-columns: 44px minmax(0, 1fr);
      align-items: start;
      gap: 16px;
      grid-column: auto;
      text-align: left;
    }

    .support-stage:last-child {
      border-bottom: 0;
    }

    .support-stage-marker {
      height: 42px;
      justify-content: flex-start;
    }

    .support-stage h3 {
      margin-top: 0;
      font-size: 20px;
    }

    .support-stage p {
      font-size: 16px;
    }

    .support-cta-row {
      align-items: stretch;
      flex-direction: column;
      gap: 20px;
    }

    .support-cta-row h3,
    .platform-item h3 {
      font-size: 20px;
    }

    .support-cta-row .button {
      width: 100%;
    }

    .platform-directory {
      grid-template-columns: 1fr;
      margin-top: 36px;
      border-bottom: 0;
    }

    .platform-item,
    .platform-item:nth-child(3n),
    .platform-item:nth-child(3n + 2),
    .platform-item:nth-child(even),
    .platform-item:nth(n + 7),
    .platform-item:last-child {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--border);
      grid-column: auto;
    }

    .platform-item:last-child {
      border-bottom: 0;
    }

    .faq-intro h2,
    .final-cta-copy h2 {
      font-size: 30px;
    }

    .faq-intro > p:not(.eyebrow),
    .final-cta-copy > p:not(.eyebrow) {
      font-size: 18px;
    }

    .faq-item h3 button {
      min-height: 72px;
      padding: 18px 0;
      gap: 18px;
      font-size: 17px;
    }

    .faq-control {
      width: 36px;
      height: 36px;
    }

    .faq-answer {
      padding-right: 0;
    }

    .final-cta-panel {
      min-height: 0;
      padding: 40px 24px;
      border-radius: 28px;
      gap: 38px;
    }

    .final-cta-actions {
      align-items: stretch;
      flex-direction: column;
    }

    .final-cta-actions .button {
      width: 100%;
    }

    .final-cta-image-frame {
      border-radius: 16px;
      box-shadow: 0 14px 32px rgba(18, 24, 38, 0.06);
    }

  }

  @media (max-width: 389px) {
    .support-stage {
      grid-template-columns: 40px minmax(0, 1fr);
      gap: 13px;
    }

    .support-stage-marker span {
      width: 40px;
      height: 40px;
    }

    .final-cta-panel {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    .button,
    .arrow-link svg,
    .faq-control svg {
      transition: none;
    }
  }
`;
