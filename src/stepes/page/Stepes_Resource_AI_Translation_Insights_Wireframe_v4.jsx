import React from "react";

const PAGE_URL = "https://www.stepes.com/resources/ai-translation-insights/";
const AI_HUMAN_WORKFLOW_GUIDE_URL =
  "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/";
const AI_WEBSITE_GUIDE_URL = `${PAGE_URL}ai-website-translation-with-human-review/`;
const AI_MEDICAL_DEVICE_GUIDE_URL = `${PAGE_URL}ai-translation-for-medical-devices/`;


const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 10h11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path d="m11 5 5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const TopicIcon = ({ type }) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const icons = {
    technology: (
      <svg {...common}>
        <rect x="7" y="7" width="10" height="10" rx="2" />
        <path d="M9.5 1.8v3M14.5 1.8v3M9.5 19.2v3M14.5 19.2v3M1.8 9.5h3M1.8 14.5h3M19.2 9.5h3M19.2 14.5h3" />
        <path d="M10 10h4v4h-4z" />
      </svg>
    ),
    quality: (
      <svg {...common}>
        <path d="M12 3.2 14.6 8l5.4.8-3.9 3.8.9 5.4-5-2.6-5 2.6.9-5.4L4 8.8 9.4 8 12 3.2Z" />
        <path d="m9.2 12 1.8 1.8 3.9-4" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <path d="M16 20v-1.6a4.4 4.4 0 0 0-4.4-4.4H7.4A4.4 4.4 0 0 0 3 18.4V20" />
        <circle cx="9.5" cy="7" r="3.5" />
        <path d="M17.2 10.3a3.4 3.4 0 0 1 3.8 3.4V15" />
        <path d="M15.8 3.8a3.5 3.5 0 0 1 0 6.4" />
      </svg>
    ),
    security: (
      <svg {...common}>
        <path d="M12 2.5 19 5v5.8c0 4.8-2.9 8.6-7 10.7-4.1-2.1-7-5.9-7-10.7V5l7-2.5Z" />
        <path d="m8.8 11.8 2.1 2.1 4.3-4.6" />
      </svg>
    ),
    workflow: (
      <svg {...common}>
        <rect x="2.5" y="4" width="6" height="5" rx="1.2" />
        <rect x="15.5" y="15" width="6" height="5" rx="1.2" />
        <path d="M8.5 6.5h4.2a3 3 0 0 1 3 3V15" />
        <path d="m12.5 12.2 3.2 3.2 3.2-3.2" />
      </svg>
    ),
    business: (
      <svg {...common}>
        <path d="M4 20V10.5" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
        <path d="m3.5 8 5-4 5 4 6-5" />
      </svg>
    ),
    evaluate: (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
        <path d="m7.8 10.6 1.8 1.8 3.7-4" />
      </svg>
    ),
    lock: (
      <svg {...common}>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
        <path d="M12 14.5v2.5" />
      </svg>
    ),
    network: (
      <svg {...common}>
        <rect x="2.5" y="3" width="6" height="5" rx="1.2" />
        <rect x="15.5" y="3" width="6" height="5" rx="1.2" />
        <rect x="9" y="16" width="6" height="5" rx="1.2" />
        <path d="M5.5 8v3h13V8M12 11v5" />
      </svg>
    ),
  };

  return icons[type] ?? icons.technology;
};

const valueThemes = [
  {
    title: "Evaluate the Technology",
    description:
      "Understand how neural machine translation, generative AI, large language models, and specialized translation systems work—and where their capabilities and limitations differ.",
  },
  {
    title: "Control Quality and Risk",
    description:
      "Define the terminology, validation, human review, security, governance, and approval controls appropriate for each content type.",
  },
  {
    title: "Integrate and Scale",
    description:
      "Connect AI translation with content platforms, translation systems, enterprise workflows, and multilingual operating models.",
  },
];

const topics = [
  {
    id: "technology-and-models",
    label: "Technology",
    icon: "technology",
    title: "AI Translation Technology and Models",
    description:
      "Understand the technologies behind AI translation, including neural machine translation, large language models, multilingual and language-specific systems, prompting, training data, retrieval, and domain adaptation.",
    url: `${PAGE_URL}technology-models/`,
    action: "Explore Technology and Models",
    articles: [
      ["What Is AI Translation? An Enterprise Guide", `${PAGE_URL}what-is-ai-translation/`],
      ["Neural Machine Translation vs. Large Language Models", `${PAGE_URL}neural-machine-translation-vs-llms/`],
      ["How Large Language Models Translate Content", `${PAGE_URL}how-llms-translate-content/`],
      ["General-Purpose vs. Domain-Specific AI Translation Models", `${PAGE_URL}general-purpose-vs-domain-specific-models/`],
      ["How AI Translation Handles Context and Meaning", `${PAGE_URL}ai-translation-context-meaning/`],
      ["How Prompts and Context Affect AI Translation Quality", `${PAGE_URL}prompts-context-ai-translation/`],
      ["How Training Data Affects AI Translation Performance", `${PAGE_URL}training-data-ai-translation/`],
      ["Multilingual vs. Language-Specific AI Translation Models", `${PAGE_URL}multilingual-vs-language-specific-models/`],
    ],
  },
  {
    id: "quality-and-validation",
    label: "Quality",
    icon: "quality",
    title: "Translation Quality and Validation",
    description:
      "Evaluate whether AI-generated translations are accurate, complete, consistent, appropriate for their audience, and fit for their intended purpose—not merely fluent.",
    url: `${PAGE_URL}quality-validation/`,
    action: "Explore Quality and Validation",
    articles: [
      ["How to Evaluate AI Translation Quality", `${PAGE_URL}how-to-evaluate-ai-translation-quality/`],
      ["What Is AI Translation Validation?", `${PAGE_URL}what-is-ai-translation-validation/`],
      ["Common AI Translation Errors and How to Detect Them", `${PAGE_URL}common-ai-translation-errors/`],
      ["AI Translation Hallucinations: Causes, Detection, and Controls", `${PAGE_URL}ai-translation-hallucinations/`],
      ["Automated Translation QA vs. Human Linguistic Review", `${PAGE_URL}automated-translation-qa-vs-human-review/`],
      ["Building an AI Translation Quality Scorecard", `${PAGE_URL}ai-translation-quality-scorecard/`],
      ["Measuring Accuracy, Fluency, and Fitness for Purpose", `${PAGE_URL}translation-accuracy-fluency-fitness-for-purpose/`],
      ["Why Representative AI Translation Testing Matters", `${PAGE_URL}representative-ai-translation-testing/`],
    ],
  },
  {
    id: "human-review",
    label: "Human Review",
    icon: "people",
    title: "Human Review and Hybrid Workflows",
    description:
      "Match professional linguistic review, subject-matter validation, post-editing, and approval requirements to content risk, audience, brand impact, technical complexity, and regulatory exposure.",
    url: `${PAGE_URL}human-review-workflows/`,
    action: "Explore Human Review Workflows",
    articles: [
      ["When Does AI Translation Need Human Review?", `${PAGE_URL}when-ai-translation-needs-human-review/`],
      ["How AI and Human Review Work Together in Enterprise Translation", AI_HUMAN_WORKFLOW_GUIDE_URL],
      ["AI Translation vs. Machine Translation vs. Human Translation", `${PAGE_URL}ai-vs-machine-vs-human-translation/`],
      ["Machine Translation Post-Editing Explained", `${PAGE_URL}machine-translation-post-editing/`],
      ["How to Set Human Review Levels by Content Risk", `${PAGE_URL}human-review-levels-by-content-risk/`],
      ["The Role of Subject-Matter Experts in AI Translation Validation", `${PAGE_URL}subject-matter-experts-ai-translation-validation/`],
      ["Full Review vs. Targeted Review for AI Translation", `${PAGE_URL}full-vs-targeted-ai-translation-review/`],
      ["How Reviewer Feedback Improves Future AI Translation", `${PAGE_URL}reviewer-feedback-improves-ai-translation/`],
    ],
  },
  {
    id: "security-and-governance",
    label: "Security",
    icon: "security",
    title: "Security, Privacy, and AI Governance",
    description:
      "Establish how multilingual content may be processed, stored, accessed, retained, and shared, and define the governance needed for approved AI translation use across teams and providers.",
    url: `${PAGE_URL}security-governance/`,
    action: "Explore Security and Governance",
    articles: [
      ["Enterprise AI Translation Security and Governance Guide", `${PAGE_URL}enterprise-ai-translation-security-guide/`],
      ["Is Confidential Content Safe in AI Translation Tools?", `${PAGE_URL}confidential-content-ai-translation-tools/`],
      ["AI Translation Vendor Security and Privacy Questionnaire", `${PAGE_URL}ai-translation-vendor-security-questionnaire/`],
      ["Building an AI Translation Governance Framework", `${PAGE_URL}ai-translation-governance-framework/`],
      ["Public vs. Private AI Translation Environments", `${PAGE_URL}public-vs-private-ai-translation-environments/`],
      ["Responsible AI for Multilingual Content: Principles and Checklist", `${PAGE_URL}responsible-ai-multilingual-content/`],
      ["Controlling Access to Translation Data", `${PAGE_URL}translation-data-access-controls/`],
      ["Managing AI Translation Vendors, Models, and Third-Party Providers", `${PAGE_URL}managing-ai-translation-vendors-models-providers/`],
    ],
  },
  {
    id: "workflows-and-integration",
    label: "Integration",
    icon: "workflow",
    title: "Enterprise Workflows and Integration",
    description:
      "Connect AI translation with translation systems, content platforms, APIs, language assets, intake and routing automation, review portals, release processes, and multilingual approvals.",
    url: `${PAGE_URL}workflow-integration/`,
    action: "Explore Workflows and Integration",
    articles: [
      ["How AI and Human Review Work Together in Enterprise Translation", AI_HUMAN_WORKFLOW_GUIDE_URL],
      ["Integrating AI Translation With a TMS", `${PAGE_URL}integrating-ai-translation-with-tms/`],
      ["AI Translation APIs for Global Content", `${PAGE_URL}ai-translation-apis-global-content/`],
      ["Translation Memory in AI-Powered Workflows", `${PAGE_URL}translation-memory-ai-workflows/`],
      ["How Terminology Management Improves AI Translation", `${PAGE_URL}terminology-management-improves-ai-translation/`],
      ["Continuous Localization With AI and Human Review", `${PAGE_URL}continuous-localization-ai-human-review/`],
      ["Automating Content Intake and Routing", `${PAGE_URL}automating-content-intake-routing/`],
      ["Designing Multilingual Review and Approval Workflows", `${PAGE_URL}designing-multilingual-review-approval-workflows/`],
    ],
  },
  {
    id: "business-value-and-adoption",
    label: "Business Value",
    icon: "business",
    title: "Business Value and Adoption",
    description:
      "Build the business case for AI translation by accounting for implementation, integration, review effort, rework, governance, security, quality risk, operating cost, and measurable program performance.",
    url: `${PAGE_URL}business-value-adoption/`,
    action: "Explore Business Value and Adoption",
    articles: [
      ["How to Calculate AI Translation ROI: A Practical Framework", `${PAGE_URL}ai-translation-roi/`],
      ["The Business Case for Enterprise AI Translation", `${PAGE_URL}business-case-enterprise-ai-translation/`],
      ["AI Translation Cost Models Explained", `${PAGE_URL}ai-translation-cost-models/`],
      ["How to Select an AI Translation Provider: Evaluation Framework", `${PAGE_URL}select-ai-translation-provider/`],
      ["Enterprise AI Translation Readiness Checklist", `${PAGE_URL}enterprise-ai-translation-readiness-checklist/`],
      ["Building an AI Translation Implementation Roadmap", `${PAGE_URL}ai-translation-implementation-roadmap/`],
      ["Planning a Controlled AI Translation Pilot", `${PAGE_URL}controlled-ai-translation-pilot/`],
      ["Measuring AI Translation Program Performance Over Time", `${PAGE_URL}ai-translation-program-performance/`],
    ],
  },
];

const essentialGuides = [
  {
    label: "Foundations",
    title: "What Is AI Translation? An Enterprise Guide",
    description:
      "Understand the technologies included in AI translation, how enterprise workflows differ from consumer tools, where AI adds value, and why content risk and validation requirements vary.",
    action: "Read the Foundation Guide",
    url: `${PAGE_URL}what-is-ai-translation/`,
  },
  {
    label: "Evaluation",
    title: "How to Evaluate AI Translation for Enterprise Content",
    description:
      "Compare language quality, security, governance, workflow compatibility, human review, scalability, implementation requirements, and total business value in one enterprise evaluation framework.",
    action: "Read the Evaluation Guide",
    url: `${PAGE_URL}how-to-evaluate-ai-translation-for-enterprise-content/`,
  },
  {
    label: "Comparison",
    title: "AI Translation vs. Machine Translation vs. Human Translation",
    description:
      "Compare neural machine translation, generative AI, professional human translation, and hybrid workflows across speed, context, terminology, consistency, creativity, review, and risk.",
    action: "Compare Translation Approaches",
    url: `${PAGE_URL}ai-vs-machine-vs-human-translation/`,
  },
  {
    label: "Workflow",
    title: "How AI and Human Review Work Together in Enterprise Translation",
    description:
      "See how AI translation, translation memory, terminology management, automated QA, professional linguistic review, and subject-matter validation work together in a managed workflow.",
    action: "Explore the AI + Human Workflow",
    url: AI_HUMAN_WORKFLOW_GUIDE_URL,
  },
  {
    label: "Quality",
    title: "How to Evaluate AI Translation Quality",
    description:
      "Assess accuracy, completeness, terminology, fluency, meaning, formatting, consistency, and fitness for purpose using representative content and clearly defined criteria.",
    action: "Explore the Quality Framework",
    url: `${PAGE_URL}how-to-evaluate-ai-translation-quality/`,
  },
  {
    label: "Security",
    title: "Enterprise AI Translation Security and Governance Guide",
    description:
      "Address data processing, model use, access, retention, provider oversight, approved use, accountability, and governance before business content enters an AI translation workflow.",
    action: "Read the Security Guide",
    url: `${PAGE_URL}enterprise-ai-translation-security-guide/`,
  },
];

const businessNeeds = [
  {
    icon: "evaluate",
    title: "Evaluate AI Translation",
    description:
      "Compare technologies, providers, language performance, quality controls, security, workflows, review requirements, and total business value.",
    action: "Use the Enterprise Evaluation Guide",
    url: `${PAGE_URL}how-to-evaluate-ai-translation-for-enterprise-content/`,
  },
  {
    icon: "quality",
    title: "Improve Translation Quality",
    description:
      "Use representative testing, terminology, translation memory, automated checks, professional review, and structured validation.",
    action: "Explore Quality and Validation",
    url: `${PAGE_URL}quality-validation/`,
  },
  {
    icon: "lock",
    title: "Protect Confidential Content",
    description:
      "Assess hosting, data processing, model use, access permissions, encryption, retention, confidentiality, and provider controls.",
    action: "Explore Security and Governance",
    url: `${PAGE_URL}security-governance/`,
  },
  {
    icon: "people",
    title: "Introduce Human Validation",
    description:
      "Determine which content requires professional review, what level of validation is appropriate, and who should approve the result.",
    action: "Explore Human Review Workflows",
    url: `${PAGE_URL}human-review-workflows/`,
  },
  {
    icon: "network",
    title: "Integrate Existing Systems",
    description:
      "Connect AI translation with content platforms, TMS technology, APIs, language assets, review tools, and approval processes.",
    action: "Explore Workflow Integration",
    url: `${PAGE_URL}workflow-integration/`,
  },
  {
    icon: "business",
    title: "Scale an Enterprise Program",
    description:
      "Develop the business case, roadmap, governance, procurement criteria, performance measures, and continuous-improvement model.",
    action: "Explore Business Value and Adoption",
    url: `${PAGE_URL}business-value-adoption/`,
  },
];

const workflowProfiles = [
  {
    title: "Low-Risk, High-Volume Internal Content",
    examples: "Internal reference material, preliminary research, and low-impact knowledge content",
    workflow: "AI translation with automated quality checks",
    controls: [
      "Approved terminology",
      "Secure user access",
      "Automated completeness checks",
      "Numerical and formatting validation",
      "Clear indication that the content was machine translated",
      "User feedback capture",
    ],
  },
  {
    title: "Informational or Time-Sensitive Content",
    examples: "Internal announcements, rapidly changing operational content, and support knowledge",
    workflow: "AI translation with targeted human review",
    controls: [
      "Terminology management",
      "Review of titles, instructions, warnings, and critical statements",
      "Risk-based sampling",
      "Named-entity and number checks",
      "Escalation for uncertain passages",
    ],
  },
  {
    title: "Customer-Facing or Brand-Sensitive Content",
    examples: "Websites, product information, customer communications, and public-facing materials",
    workflow: "AI-assisted translation with full professional linguistic review",
    controls: [
      "Approved style guide",
      "Brand terminology",
      "Full linguistic review",
      "Tone and audience validation",
      "In-context review",
      "Stakeholder approval",
    ],
  },
  {
    title: "Technical or Business-Critical Content",
    examples: "User documentation, engineering content, product specifications, and operational procedures",
    workflow: "AI-assisted translation with qualified technical or subject-matter review",
    controls: [
      "Controlled terminology",
      "Translation memory",
      "Professional linguist review",
      "Subject-matter validation",
      "Numerical, unit, and reference checks",
      "Version control",
    ],
  },
  {
    title: "Legal, Financial, Medical, or Regulated Content",
    examples: "Agreements, financial reporting, medical content, regulatory documentation, and safety information",
    workflow: "Controlled translation with qualified human validation and documented approval",
    controls: [
      "Qualified linguists",
      "Domain-specific terminology",
      "Independent or second-person review where required",
      "Traceable corrections and approvals",
      "Documented quality procedures",
      "Secure content handling",
    ],
  },
  {
    title: "High-Impact Creative Content",
    examples: "Campaign messaging, slogans, creative brand content, and culturally sensitive communications",
    workflow: "Human-led translation or transcreation supported by AI and language technology",
    controls: [
      "Market and audience adaptation",
      "Creative briefing",
      "Brand review",
      "Native-market validation",
      "Stakeholder approval",
      "In-context testing",
    ],
  },
];


const controlledWorkflowSteps = [
  {
    number: "01",
    title: "Classify the Content",
    description:
      "Define the audience, purpose, confidentiality, quality expectations, business impact, and regulatory or contractual requirements. Classification helps determine which systems may process the content and how much human review is appropriate.",
  },
  {
    number: "02",
    title: "Prepare Language Assets",
    description:
      "Identify approved terminology, translation memory, previous translations, style guidance, product names, abbreviations, reference materials, and other contextual information. High-quality language assets help improve consistency and reduce avoidable variation.",
  },
  {
    number: "03",
    title: "Select the Technology and Workflow",
    description:
      "Choose the translation model, deployment environment, language resources, quality controls, and level of professional involvement appropriate for the project. The selection should reflect actual content requirements rather than applying one workflow to every use case.",
  },
  {
    number: "04",
    title: "Generate and Manage the Translation",
    description:
      "Process the content while preserving structure, formatting, metadata, variables, links, tags, version information, and project instructions. Complex formats should protect nontranslatable elements and remain compatible with the source system.",
  },
  {
    number: "05",
    title: "Validate the Output",
    description:
      "Check accuracy, completeness, approved terminology, numbers, dates, units, names, formatting, unsupported additions, omissions, meaning shifts, locale conventions, and audience suitability. Automated checks can identify many issues, but they do not replace human judgment where meaning or risk requires professional evaluation.",
  },
  {
    number: "06",
    title: "Review and Approve",
    description:
      "Route content to qualified linguists, subject-matter experts, business stakeholders, legal reviewers, or regulatory teams based on the project requirements. Approval responsibilities should remain clear when multiple teams participate in the process.",
  },
  {
    number: "07",
    title: "Measure and Improve",
    description:
      "Capture corrections, reviewer feedback, terminology decisions, quality results, and recurring error patterns. Use the findings to improve language assets, prompts, model selection, workflow rules, reviewer guidance, and future translations.",
  },
];

const controlAreas = [
  {
    label: "Quality and Validation",
    title: "Measure More Than Fluency",
    description:
      "A translation can sound natural while containing an incorrect term, omitted qualification, altered number, unsupported addition, or change in meaning. A controlled validation program should evaluate fidelity to the source as well as readability and fitness for purpose.",
    points: [
      "Representative language and content testing",
      "Defined error categories and severity levels",
      "Terminology, completeness, number, and format checks",
      "Human linguistic and subject-matter review",
      "Documented acceptance criteria and ongoing monitoring",
    ],
    links: [
      ["How to Evaluate AI Translation Quality", `${PAGE_URL}how-to-evaluate-ai-translation-quality/`],
      ["What Is AI Translation Validation?", `${PAGE_URL}what-is-ai-translation-validation/`],
      ["Measuring Accuracy, Fluency, and Fitness for Purpose", `${PAGE_URL}translation-accuracy-fluency-fitness-for-purpose/`],
      ["Automated Translation QA vs. Human Linguistic Review", `${PAGE_URL}automated-translation-qa-vs-human-review/`],
    ],
  },
  {
    label: "Security and Privacy",
    title: "Understand the Full Processing Environment",
    description:
      "Enterprise teams should know where content is processed and stored, which provider or model handles it, whether it can be used for model training, how long it is retained, who can access it, and how incidents are managed. The model name alone does not define the security posture.",
    points: [
      "Processing location, hosting, and third-party systems",
      "Encryption, role-based access, and retention controls",
      "Model-training and data-use policies",
      "Subcontractor and provider oversight",
      "Contractual, regulatory, and geographic requirements",
    ],
    links: [
      ["Enterprise AI Translation Security and Governance Guide", `${PAGE_URL}enterprise-ai-translation-security-guide/`],
      ["AI Translation Vendor Security and Privacy Questionnaire", `${PAGE_URL}ai-translation-vendor-security-questionnaire/`],
      ["Public vs. Private AI Translation Environments", `${PAGE_URL}public-vs-private-ai-translation-environments/`],
      ["Is Confidential Content Safe in AI Translation Tools?", `${PAGE_URL}confidential-content-ai-translation-tools/`],
    ],
  },
  {
    label: "Governance and Accountability",
    title: "Define Approved Use and Decision Ownership",
    description:
      "AI governance establishes which tools and providers may be used, which content is permitted, when professional review is required, how quality is accepted, and who is accountable for the final result across teams, languages, and regions.",
    points: [
      "Approved tools, providers, and permitted content",
      "Data-classification and review requirements",
      "Quality criteria, documentation, and traceability",
      "User permissions, escalation, and change management",
      "Performance monitoring and periodic reassessment",
    ],
    links: [
      ["Building an AI Translation Governance Framework", `${PAGE_URL}ai-translation-governance-framework/`],
      ["Responsible AI for Multilingual Content: Principles and Checklist", `${PAGE_URL}responsible-ai-multilingual-content/`],
      ["How to Set Human Review Levels by Content Risk", `${PAGE_URL}human-review-levels-by-content-risk/`],
      ["Managing AI Translation Vendors, Models, and Third-Party Providers", `${PAGE_URL}managing-ai-translation-vendors-models-providers/`],
    ],
  },
];

const practicalTools = [
  {
    label: "Readiness",
    title: "Enterprise AI Translation Readiness Checklist",
    description:
      "Assess whether your organization has the content, language assets, systems, stakeholders, security controls, governance, and quality criteria needed for a successful implementation.",
    action: "Use the Readiness Checklist",
    url: `${PAGE_URL}enterprise-ai-translation-readiness-checklist/`,
  },
  {
    label: "Provider Evaluation",
    title: "How to Select an AI Translation Provider: Evaluation Framework",
    description:
      "Compare providers based on model capabilities, language performance, customization, workflow support, professional services, security, integration, quality controls, reporting, and commercial terms.",
    action: "Evaluate AI Translation Providers",
    url: `${PAGE_URL}select-ai-translation-provider/`,
  },
  {
    label: "Security",
    title: "AI Translation Vendor Security and Privacy Questionnaire",
    description:
      "Review hosting, data processing, third-party models, content retention, access controls, encryption, model training, subprocessors, incident response, and compliance requirements.",
    action: "Review the Security Questions",
    url: `${PAGE_URL}ai-translation-vendor-security-questionnaire/`,
  },
  {
    label: "Quality",
    title: "Building an AI Translation Quality Scorecard",
    description:
      "Create a repeatable framework for comparing output by language, content type, error category, severity, reviewer, and intended use.",
    action: "Use the Quality Scorecard",
    url: `${PAGE_URL}ai-translation-quality-scorecard/`,
  },
  {
    label: "Business Case",
    title: "How to Calculate AI Translation ROI: A Practical Framework",
    description:
      "Estimate potential productivity improvements while accounting for setup, integration, review, rework, governance, technology, quality risk, and ongoing operational costs.",
    action: "Build the Business Case",
    url: `${PAGE_URL}ai-translation-roi/`,
  },
  {
    label: "Terminology",
    title: "AI Translation Glossary",
    description:
      "Understand neural machine translation, large language models, generative AI, translation memory, terminology management, post-editing, quality estimation, prompting, retrieval, fine-tuning, validation, and human-in-the-loop review.",
    action: "Explore the AI Translation Glossary",
    url: `${PAGE_URL}ai-translation-glossary/`,
  },
];

const enterpriseUseCases = [
  {
    title: "Websites and Digital Content",
    description:
      "Classify website content by visibility, brand sensitivity, search value, subject matter, and consequence of error, then assign the right combination of AI translation and human review.",
    action: "Plan AI Website Translation",
    url: AI_WEBSITE_GUIDE_URL,
  },
  {
    title: "Software and User Interfaces",
    description:
      "Support interface strings, release updates, help content, notifications, application workflows, and continuous localization across products and markets.",
    action: "Explore Software Localization",
    url: "https://www.stepes.com/software-localization-services/",
  },
  {
    title: "Product Information and Ecommerce",
    description:
      "Translate product descriptions, specifications, catalogs, marketplace listings, customer guidance, and structured product data at scale.",
    action: "Explore Product Content Translation",
    url: "https://www.stepes.com/product-content-translation-services/",
  },
  {
    title: "Technical Documentation",
    description:
      "Translate manuals, instructions, specifications, procedures, support documentation, and technical knowledge using controlled terminology and qualified review.",
    action: "Explore Technical Translation",
    url: "https://www.stepes.com/technical-translation-services/",
  },
  {
    title: "Training and eLearning",
    description:
      "Localize courses, learning modules, assessments, instructor materials, audio, video, subtitles, and on-screen text for multilingual learners.",
    action: "Explore eLearning Translation",
    url: "https://www.stepes.com/elearning-training-translation-services/",
  },
  {
    title: "Marketing and Communications",
    description:
      "Adapt campaign content, communications, presentations, digital assets, and brand materials with the right balance of speed, consistency, and market-specific creativity.",
    action: "Explore Marketing Translation",
    url: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    title: "Customer Support Content",
    description:
      "Translate help centers, FAQs, chat content, troubleshooting instructions, service updates, and customer communications across languages.",
    action: "Explore Customer Support Translation",
    url: "https://www.stepes.com/customer-support-translation-service/",
  },
  {
    title: "Legal and Compliance Documents",
    description:
      "Support contracts, policies, notices, filings, compliance content, and other documents where accuracy, confidentiality, and professional review are essential.",
    action: "Explore Legal Translation",
    url: "https://www.stepes.com/legal-translation-services/",
  },
  {
    title: "Financial and Investor Communications",
    description:
      "Translate reports, disclosures, presentations, shareholder communications, and financial content using terminology controls and qualified human validation.",
    action: "Explore Financial Translation",
    url: "https://www.stepes.com/financial-translation-services/",
  },
  {
    title: "Medical Devices and Regulated Content",
    description:
      "Apply AI where it improves efficiency while preserving controlled terminology, qualified human validation, document traceability, and risk-based quality controls for medical device content.",
    action: "Explore AI Translation for Medical Devices",
    url: AI_MEDICAL_DEVICE_GUIDE_URL,
  },
  {
    title: "Internal Knowledge and Employee Communications",
    description:
      "Make policies, training, announcements, procedures, and organizational knowledge available to global employees more efficiently.",
    action: "Explore Enterprise Translation",
    url: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    title: "Multimedia, Subtitles, and Voice Content",
    description:
      "Translate scripts, subtitles, captions, narration, voice-over content, and multimedia experiences while accounting for timing, context, and audience.",
    action: "Explore Multimedia Localization",
    url: "https://www.stepes.com/multimedia-translation-services/",
  },
];

const stepesApproach = [
  {
    label: "AI Efficiency",
    title: "Apply Automation Where It Adds Value",
    description:
      "AI can help accelerate translation, expand multilingual content coverage, and reduce repetitive manual work for suitable content and use cases.",
  },
  {
    label: "Expert Validation",
    title: "Use Professional Review Where It Matters",
    description:
      "Qualified linguists and subject-matter experts can validate meaning, terminology, tone, context, and suitability for customer-facing, technical, legal, financial, medical, or regulated use.",
  },
  {
    label: "Enterprise Controls",
    title: "Maintain Structure Across the Workflow",
    description:
      "Structured intake, secure content handling, terminology, translation memory, quality assurance, review routing, version management, and approvals support consistency and accountability.",
  },
  {
    label: "Flexible Delivery",
    title: "Design Workflows Around Your Content",
    description:
      "Stepes helps organizations align translation workflows with their languages, content systems, quality expectations, delivery requirements, and business risk.",
  },
];

const latestInsights = [
  {
    topic: "Enterprise Workflow",
    title: "How AI and Human Review Work Together in Enterprise Translation",
    description:
      "Learn how AI translation, translation memory, terminology management, automated QA, professional review, and subject-matter validation work together in a managed enterprise workflow.",
    url: AI_HUMAN_WORKFLOW_GUIDE_URL,
  },
  {
    topic: "Website Translation",
    title: "AI Website Translation With Human Review",
    description:
      "Classify website content by risk and route each page through focused review, full post-editing, professional translation, transcreation, or specialist validation.",
    url: AI_WEBSITE_GUIDE_URL,
  },
  {
    topic: "Medical Devices",
    title: "AI Translation for Medical Devices",
    description:
      "Understand where AI improves efficiency in medical device translation and where qualified human review, terminology control, traceability, and final-format QA remain essential.",
    url: AI_MEDICAL_DEVICE_GUIDE_URL,
  },
  {
    topic: "Enterprise Evaluation",
    title: "How to Evaluate AI Translation for Enterprise Content",
    description:
      "Use a practical framework to compare quality, security, governance, workflow compatibility, human review, scalability, and total business value.",
    url: `${PAGE_URL}how-to-evaluate-ai-translation-for-enterprise-content/`,
  },
  {
    topic: "Technology",
    title: "Neural Machine Translation vs. Large Language Models",
    description:
      "Understand how these technologies differ in architecture, context handling, customization, consistency, and enterprise workflow use.",
    url: `${PAGE_URL}neural-machine-translation-vs-llms/`,
  },
  {
    topic: "Quality",
    title: "Common AI Translation Errors and How to Detect Them",
    description:
      "Explore omissions, unsupported additions, meaning shifts, terminology errors, numerical issues, inconsistency, and other problems that fluency alone may hide.",
    url: `${PAGE_URL}common-ai-translation-errors/`,
  },
];

const faqItems = [
  {
    question: "What Is AI Translation?",
    answer: [
      "AI translation is the use of artificial intelligence technologies to translate content from one language into another. The term can include neural machine translation, multilingual large language models, generative AI, translation-specific models, automated language analysis, and AI-assisted quality controls.",
      "In enterprise environments, AI translation often forms one part of a broader workflow that may also include translation memory, approved terminology, automated QA, professional linguistic review, subject-matter validation, and stakeholder approval.",
    ],
  },
  {
    question: "How Is AI Translation Different From Machine Translation?",
    answer: [
      "Machine translation is a broad category of technology that automatically converts text from one language into another. Neural machine translation is one widely used form of AI-based machine translation.",
      "The term AI translation is sometimes used more broadly to include large language models, generative AI, context enrichment, automated quality estimation, terminology assistance, workflow routing, and other AI-supported translation processes. Enterprise teams should evaluate the actual system, model, workflow, security controls, and quality process rather than relying solely on the product label.",
    ],
  },
  {
    question: "Is AI Translation Accurate?",
    answer: [
      "AI translation can produce strong results for many language combinations and content types, but accuracy varies by source clarity, language pair, subject matter, terminology, available context, model selection, content structure, formatting, and required level of precision.",
      "Fluent output should not automatically be assumed to be accurate. Business-critical content should be evaluated against defined quality criteria and reviewed by qualified professionals where appropriate.",
    ],
  },
  {
    question: "When Does AI Translation Need Human Review?",
    answer: [
      "Human review becomes more important when content is customer-facing, brand-sensitive, technical, legal, financial, medical, regulated, safety-related, or otherwise capable of creating significant business consequences if translated incorrectly.",
      "A risk-based approach allows lower-impact content to benefit from greater automation while directing professional review toward material where errors could affect safety, compliance, reputation, revenue, legal obligations, or customer trust.",
    ],
  },
  {
    question: "Can AI Translation Be Used for Confidential Content?",
    answer: [
      "It can be, provided the processing environment, provider terms, access controls, retention policies, and data protections meet the organization’s requirements.",
      "Before using AI translation for confidential content, organizations should determine where content is processed, whether third-party models are involved, whether data may be used for model training, how long it is retained, who can access it, whether it is encrypted, and whether contractual, regulatory, and regional requirements can be met.",
    ],
  },
  {
    question: "What Is Human-in-the-Loop Translation?",
    answer: [
      "Human-in-the-loop translation combines AI- or machine-generated translation with professional human participation. Reviewers may correct meaning, apply approved terminology, verify numbers and references, improve tone, adapt content for the audience, validate technical language, review content in context, and approve it for use.",
      "The amount of human involvement can range from targeted review of selected content to complete professional validation.",
    ],
  },
  {
    question: "How Can Companies Evaluate AI Translation Quality?",
    answer: [
      "Organizations should test AI translation using representative content, relevant languages, realistic formatting, approved terminology, and clearly defined evaluation criteria.",
      "A practical evaluation should examine accuracy, completeness, terminology, fluency, grammar, consistency, numbers and units, names, formatting, locale conventions, context, and fitness for purpose. Errors should be classified by type and severity, with qualified native-language reviewers involved where professional judgment is required.",
    ],
  },
  {
    question: "How Does Terminology Improve AI Translation?",
    answer: [
      "Terminology management provides approved translations for product names, technical terms, brand language, abbreviations, regulated phrases, and other important expressions.",
      "Applying approved terminology can improve consistency, protect product and brand language, support technical accuracy, reduce reviewer corrections, and align translations across documents, channels, products, and markets.",
    ],
  },
  {
    question: "What Is the Business Value of AI Translation?",
    answer: [
      "AI translation can help organizations increase translation capacity, shorten turnaround times, expand language coverage, make more content accessible, and reduce repetitive manual effort.",
      "The strongest business case accounts for implementation, integration, professional review, quality, rework, security, governance, program management, and long-term maintenance—not only raw translation speed or the cost of generating words.",
    ],
  },
  {
    question: "How Should an Enterprise Begin Using AI Translation?",
    answer: [
      "Begin with a clearly defined pilot using representative content, a manageable number of languages, an approved processing environment, and measurable quality criteria.",
      "Identify which content can be used, who will review the translations, how issues will be categorized, and what results will determine whether the program expands. A controlled pilot helps establish realistic quality expectations, review levels, security requirements, integration needs, resource requirements, and potential productivity gains.",
    ],
  },
];

const relatedResourcePillars = [
  {
    title: "Translation Quality and Governance",
    description:
      "Explore linguistic quality assurance, terminology management, professional review, standards, metrics, consistency, approvals, and enterprise translation controls.",
    action: "Explore Translation Quality and Governance",
    url: "https://www.stepes.com/resources/translation-quality-governance/",
  },
  {
    title: "Localization Guides",
    description:
      "Learn how to localize software, websites, products, multimedia, digital experiences, and continuously updated content for international markets.",
    action: "Explore Localization Guides",
    url: "https://www.stepes.com/resources/localization-guides/",
  },
  {
    title: "Translation Guides",
    description:
      "Find practical guidance for translating documents, technical content, business materials, specialized files, audio, video, and other multilingual assets.",
    action: "Explore Translation Guides",
    url: "https://www.stepes.com/resources/translation-guides/",
  },
  {
    title: "Global Content Strategy",
    description:
      "Develop scalable operating models for multilingual content, procurement, governance, technology, ROI, organizational alignment, and global growth.",
    action: "Explore Global Content Strategy",
    url: "https://www.stepes.com/resources/global-content-strategy/",
  },
];

function EditorialLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`.trim()} href={href}>
      <span>{children}</span>
      <ArrowIcon className="editorial-link__arrow" />
    </a>
  );
}

export default function AITranslationInsightsWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="page-shell hero__shell">
          <div className="hero__copy">
            <p className="eyebrow">Resources</p>
            <h1 id="page-title">AI Translation Insights</h1>
            <p className="hero__lede">
              Explore practical guidance on AI translation technology, language models, quality validation,
              expert human review, enterprise security, governance, workflow integration, and the responsible
              adoption of multilingual AI.
            </p>
            <p className="hero__audience">
              Built for localization leaders, global content teams, product organizations, IT and security
              stakeholders, procurement professionals, and business leaders evaluating AI-powered translation.
            </p>
            <div className="hero__actions" aria-label="Page actions">
              <a className="button button--primary" href={`${PAGE_URL}#explore-ai-translation-topics`}>
                Explore AI Translation Topics
                <ArrowIcon className="button__arrow" />
              </a>
              <a className="button button--secondary" href={AI_HUMAN_WORKFLOW_GUIDE_URL}>
                Read the AI + Human Workflow Guide
                <ArrowIcon className="button__arrow" />
              </a>
            </div>
          </div>

          <article className="featured-guide" aria-labelledby="featured-guide-title">
            <div className="featured-guide__title">
              <p className="eyebrow">Featured Enterprise Guide</p>
              <h2 id="featured-guide-title">How AI and Human Review Work Together in Enterprise Translation</h2>
            </div>
            <p className="featured-guide__copy">
              See how AI translation, translation memory, terminology management, automated QA,
              professional review, and subject-matter validation work together in a controlled workflow.
            </p>
            <div className="featured-guide__action">
              <EditorialLink href={AI_HUMAN_WORKFLOW_GUIDE_URL}>
                Read the AI + Human Workflow Guide
              </EditorialLink>
            </div>
          </article>
        </div>
      </section>

      <section className="overview" aria-labelledby="overview-title">
        <div className="page-shell overview__layout">
          <div className="overview__intro">
            <h2 id="overview-title">AI Translation for Enterprise Content Operations</h2>
          </div>

          <div className="overview__content">
            <div className="overview__narrative">
              <p>
                AI translation is no longer limited to producing a quick first draft. Modern enterprise
                workflows can combine neural machine translation, generative AI, large language models,
                translation memory, approved terminology, automated quality checks, workflow orchestration,
                and professional human review.
              </p>
              <p>
                These technologies can help organizations translate more content, support additional languages,
                shorten delivery cycles, and make multilingual information available sooner. Successful adoption,
                however, requires more than selecting a model or translation tool.
              </p>
              <p>
                Enterprise value comes from applying the right combination of technology, language assets,
                quality controls, security safeguards, and human expertise to each use case.
              </p>
            </div>

            <div className="value-themes" aria-label="Enterprise AI translation priorities">
              {valueThemes.map((theme) => (
                <article className="value-theme" key={theme.title}>
                  <div className="value-theme__marker" aria-hidden="true" />
                  <div>
                    <h3>{theme.title}</h3>
                    <p>{theme.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="topics"
        id="explore-ai-translation-topics"
        aria-labelledby="topics-title"
      >
        <div className="page-shell">
          <header className="section-heading section-heading--centered">
            <p className="eyebrow">Explore by Topic</p>
            <h2 id="topics-title">Explore AI Translation Topics</h2>
            <p>
              Navigate the technologies, controls, workflows, and business considerations shaping the use of AI
              in enterprise translation.
            </p>
          </header>

          <div className="topic-directory">
            {topics.map((topic) => (
              <article className="topic-row" id={topic.id} key={topic.id}>
                <div className="topic-row__intro">
                  <div className="topic-row__icon">
                    <TopicIcon type={topic.icon} />
                  </div>
                  <div className="topic-row__intro-copy">
                    <p className="topic-label">{topic.label}</p>
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                    <EditorialLink href={topic.url}>{topic.action}</EditorialLink>
                  </div>
                </div>

                <div className="topic-row__articles" aria-label={`${topic.title} articles`}>
                  {topic.articles.map(([title, url]) => (
                    <a className="article-link" href={url} key={title}>
                      <span>{title}</span>
                      <ArrowIcon className="article-link__arrow" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="essential-guides" id="essential-ai-translation-guides" aria-labelledby="essential-guides-title">
        <div className="page-shell essential-guides__layout">
          <header className="essential-guides__intro">
            <h2 id="essential-guides-title">Start With the Essential Guides</h2>
            <p>
              New to enterprise AI translation? Begin with these foundational resources before exploring more
              specialized technologies, workflows, and governance topics.
            </p>
          </header>

          <div className="essential-guides__directory">
            {essentialGuides.map((guide) => (
              <article className="essential-guide" key={guide.title}>
                <div className="essential-guide__content">
                  <p className="topic-label">{guide.label}</p>
                  <h3>{guide.title}</h3>
                  <p>{guide.description}</p>
                  <EditorialLink href={guide.url}>{guide.action}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="business-needs" id="ai-translation-business-needs" aria-labelledby="business-needs-title">
        <div className="page-shell">
          <header className="section-heading section-heading--centered">
            <p className="eyebrow">Explore by Objective</p>
            <h2 id="business-needs-title">Find AI Translation Guidance by Business Need</h2>
            <p>
              Explore practical guidance based on the decision, risk, or operational challenge your organization
              is addressing.
            </p>
          </header>

          <div className="business-needs__grid">
            {businessNeeds.map((need) => (
              <article className="business-need" key={need.title}>
                <div className="business-need__icon">
                  <TopicIcon type={need.icon} />
                </div>
                <div className="business-need__content">
                  <h3>{need.title}</h3>
                  <p>{need.description}</p>
                  <EditorialLink href={need.url}>
                    {need.action}
                  </EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="workflow-choice" id="ai-human-translation-workflow" aria-labelledby="workflow-choice-title">
        <div className="page-shell">
          <header className="workflow-choice__intro">
            <div>
              <p className="eyebrow">Decision Framework</p>
              <h2 id="workflow-choice-title">Choosing the Right AI and Human Translation Workflow</h2>
            </div>
            <p>
              No single translation method is appropriate for every type of enterprise content. The right
              workflow depends on audience, business purpose, content lifespan, confidentiality, quality
              expectations, brand impact, regulatory exposure, and the consequences of an error.
            </p>
          </header>

          <div className="workflow-matrix" role="table" aria-label="AI and human translation workflow decision framework">
            <div className="workflow-matrix__header" role="row">
              <span role="columnheader">Content Profile</span>
              <span role="columnheader">Recommended Starting Workflow</span>
              <span role="columnheader">Typical Controls</span>
            </div>

            {workflowProfiles.map((profile) => (
              <article className="workflow-profile" role="row" key={profile.title}>
                <div className="workflow-profile__profile" role="cell">
                  <h3>{profile.title}</h3>
                  <p>{profile.examples}</p>
                </div>
                <div className="workflow-profile__workflow" role="cell">
                  <p className="workflow-profile__label">Recommended Starting Workflow</p>
                  <p>{profile.workflow}</p>
                </div>
                <div className="workflow-profile__controls" role="cell">
                  <p className="workflow-profile__label">Typical Controls</p>
                  <ul>
                    {profile.controls.map((control) => (
                      <li key={control}>{control}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="workflow-choice__footer">
            <p>
              The appropriate workflow may vary by organization, language, market, content type, and risk profile.
              Many enterprise programs use several workflow models at the same time.
            </p>
            <EditorialLink href={AI_HUMAN_WORKFLOW_GUIDE_URL}>
              Learn How AI and Human Review Work Together
            </EditorialLink>
          </div>
        </div>
      </section>

      <section
        className="controlled-workflow"
        id="controlled-enterprise-ai-translation-workflow"
        aria-labelledby="controlled-workflow-title"
      >
        <div className="page-shell">
          <header className="controlled-workflow__intro">
            <div>
              <p className="eyebrow">Enterprise Workflow</p>
              <h2 id="controlled-workflow-title">How Enterprise AI Translation Works</h2>
            </div>
            <p>
              Reliable enterprise AI translation requires more than submitting text to a model. A controlled
              workflow prepares the content, applies approved language resources, selects an appropriate method,
              validates the output, routes higher-risk content for review, and captures improvements for future use.
            </p>
          </header>

          <div className="controlled-workflow__sequence" aria-label="Seven-step enterprise AI translation workflow">
            {controlledWorkflowSteps.map((step) => (
              <article className="controlled-step" key={step.number}>
                <p className="controlled-step__number" aria-hidden="true">{step.number}</p>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="controlled-workflow__footer">
            <EditorialLink href={AI_HUMAN_WORKFLOW_GUIDE_URL}>
              Explore the Enterprise AI + Human Workflow
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="responsible-controls" id="responsible-ai-translation-controls" aria-labelledby="controls-title">
        <div className="page-shell responsible-controls__layout">
          <header className="responsible-controls__intro">
            <h2 id="controls-title">The Controls Behind Responsible AI Translation</h2>
            <p>
              Enterprise organizations need more than fast output. They need confidence that multilingual content
              is accurate, protected, traceable, and managed under appropriate controls.
            </p>
          </header>

          <div className="control-areas">
            {controlAreas.map((area) => (
              <article className="control-area" key={area.label}>
                <div className="control-area__main">
                  <p className="topic-label">{area.label}</p>
                  <h3>{area.title}</h3>
                  <p>{area.description}</p>
                  <ul>
                    {area.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div className="control-area__resources" aria-label={`${area.label} resources`}>
                  <p className="control-area__resources-label">Related Resources</p>
                  {area.links.map(([title, url]) => (
                    <a className="control-resource-link" href={url} key={title}>
                      <span>{title}</span>
                      <ArrowIcon className="control-resource-link__arrow" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="practical-tools" id="ai-translation-resources-tools" aria-labelledby="practical-tools-title">
        <div className="page-shell">
          <header className="section-heading section-heading--centered section-heading--no-eyebrow">
            <h2 id="practical-tools-title">Research, Frameworks, and Practical Tools</h2>
            <p>
              Use these resources to assess readiness, evaluate providers, plan implementation, protect content,
              and establish measurable translation quality.
            </p>
          </header>

          <div className="practical-tools__directory">
            {practicalTools.map((tool) => (
              <article className="practical-tool" key={tool.title}>
                <p className="topic-label">{tool.label}</p>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
                <EditorialLink href={tool.url}>{tool.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>


      <section className="enterprise-use-cases" id="enterprise-ai-translation-use-cases" aria-labelledby="use-cases-title">
        <div className="page-shell">
          <header className="enterprise-use-cases__intro enterprise-use-cases__intro--no-eyebrow">
            <div>
              <h2 id="use-cases-title">AI Translation Across Enterprise Content</h2>
            </div>
            <p>
              AI translation requirements vary significantly by content type. The workflow used for internal
              knowledge should not automatically be applied to legal agreements, software interfaces, technical
              instructions, marketing campaigns, or regulated documentation.
            </p>
          </header>

          <div className="use-case-directory">
            {enterpriseUseCases.map((useCase) => (
              <article className="use-case-item" key={useCase.title}>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
                <EditorialLink href={useCase.url}>{useCase.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="stepes-approach" id="stepes-ai-translation-approach" aria-labelledby="stepes-approach-title">
        <div className="page-shell stepes-approach__layout">
          <div className="stepes-approach__intro">
            <p className="eyebrow">The Stepes Approach</p>
            <h2 id="stepes-approach-title">AI-Powered Translation. Expert-Verified Quality.</h2>
            <p>
              Stepes approaches AI translation as a managed enterprise workflow—not as a one-size-fits-all
              replacement for professional language expertise.
            </p>
            <p>
              Depending on the content and business requirements, Stepes can combine AI translation, neural
              machine translation, translation memory, approved terminology, workflow automation, automated
              quality checks, professional linguists, and subject-matter review.
            </p>
            <div className="stepes-approach__links">
              <EditorialLink href="https://www.stepes.com/ai-translation-services/">
                Explore AI Translation Services
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">
                Enterprise Translation Management
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/translation-quality-system/">
                Translation Quality System
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/security/">
                Security and Compliance
              </EditorialLink>
            </div>
          </div>

          <div className="stepes-approach__principles">
            {stepesApproach.map((item) => (
              <article className="approach-principle" key={item.title}>
                <p className="approach-principle__label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="latest-insights" id="latest-ai-translation-insights" aria-labelledby="latest-insights-title">
        <div className="page-shell">
          <header className="latest-insights__intro latest-insights__intro--no-eyebrow">
            <div>
              <h2 id="latest-insights-title">Featured AI Translation Guides and Insights</h2>
            </div>
            <p>
              Explore practical guidance on AI translation technology, quality, human review, workflow design,
              specialized content, and enterprise implementation.
            </p>
          </header>

          <div className="latest-insights__directory">
            {latestInsights.map((insight) => (
              <article className="latest-insight" key={insight.title}>
                <p className="topic-label">{insight.topic}</p>
                <h3>{insight.title}</h3>
                <p>{insight.description}</p>
                <EditorialLink href={insight.url}>Read the Article</EditorialLink>
              </article>
            ))}
          </div>

          <div className="latest-insights__footer">
            <EditorialLink href={`${PAGE_URL}#explore-ai-translation-topics`}>
              Explore All AI Translation Topics
            </EditorialLink>
          </div>
        </div>
      </section>


      <section className="faq-section" id="ai-translation-faq" aria-labelledby="faq-title">
        <div className="page-shell faq-section__layout">
          <header className="faq-section__intro">
            <h2 id="faq-title">Frequently Asked Questions About AI Translation</h2>
            <p>
              Find clear answers to common questions about AI translation technology, quality, human review,
              confidentiality, terminology, business value, and enterprise adoption.
            </p>
          </header>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details className="faq-item" key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span>
                  <span className="faq-item__control" aria-hidden="true" />
                </summary>
                <div className="faq-item__answer">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="related-pillars" id="related-stepes-resources" aria-labelledby="related-pillars-title">
        <div className="page-shell">
          <header className="related-pillars__intro related-pillars__intro--no-eyebrow">
            <div>
              <h2 id="related-pillars-title">Continue Exploring Stepes Resources</h2>
            </div>
            <p>
              Build a broader understanding of translation quality, localization delivery, content preparation,
              and the operating models behind scalable multilingual programs.
            </p>
          </header>

          <div className="related-pillars__directory">
            {relatedResourcePillars.map((pillar) => (
              <article className="related-pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
                <EditorialLink href={pillar.url}>{pillar.action}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="page-shell">
          <div className="final-cta__layout">
            <div className="final-cta__copy">
              <h2 id="final-cta-title">Planning an Enterprise AI Translation Initiative?</h2>
              <p>
                Speak with Stepes about AI translation technology, translation quality, expert human review,
                security, workflow integration, and the right operating model for your multilingual content.
              </p>
              <p>
                Whether you are evaluating AI translation, improving an existing process, or scaling multilingual
                content across global teams, Stepes can help align technology, human review, security, and
                governance with your quality, speed, and business requirements.
              </p>
            </div>

            <div className="final-cta__actions">
              <a className="button button--primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert
                <ArrowIcon className="button__arrow" />
              </a>
              <a className="button button--cta-secondary" href="https://www.stepes.com/ai-translation-services/">
                Explore AI Translation Services
                <ArrowIcon className="button__arrow" />
              </a>
            </div>

            <p className="final-cta__supporting">
              AI-powered translation. Expert-verified quality. Built for global enterprise content.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}

const styles = `
  :root {
    --stepes-magenta: #c11d63;
    --stepes-magenta-dark: #9f1d55;
    --ink: #121827;
    --text: #3f4b5f;
    --muted: #667287;
    --line: #dfe4eb;
    --line-soft: #e9edf2;
    --surface: #ffffff;
    --surface-soft: #f7f8fa;
    --shadow-soft: 0 24px 70px rgba(31, 39, 51, 0.08);
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: var(--surface);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  a {
    color: inherit;
  }

  .stepes-page {
    width: 100%;
    overflow: hidden;
    background: var(--surface);
  }

  .page-shell {
    width: min(100%, 1392px);
    margin: 0 auto;
    padding-inline: 56px;
  }

  .stepes-page .eyebrow {
    margin: 0;
    color: var(--stepes-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.17em;
    text-transform: uppercase;
  }

  h1,
  h2,
  h3,
  p {
    overflow-wrap: break-word;
  }

  h1,
  h2,
  h3 {
    margin: 0;
    color: var(--ink);
    font-weight: 600;
  }

  h1 {
    margin-top: 18px;
    font-size: clamp(38px, 4vw, 48px);
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  h2 {
    font-size: 36px;
    line-height: 1.16;
    letter-spacing: -0.025em;
  }

  h3 {
    font-size: 24px;
    line-height: 1.25;
    letter-spacing: -0.015em;
  }

  p {
    margin: 0;
    color: var(--text);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.72;
  }

  .hero {
    position: relative;
    padding: 104px 0 88px;
    background:
      radial-gradient(circle at 14% 0%, rgba(193, 29, 99, 0.08), transparent 31%),
      linear-gradient(180deg, #fff 0%, #fffafd 60%, #fff 100%);
    border-bottom: 1px solid var(--line-soft);
  }

  .hero::after {
    content: "";
    position: absolute;
    inset: auto 0 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(193, 29, 99, 0.23), transparent);
    pointer-events: none;
  }

  .hero__copy {
    width: min(100%, 980px);
    margin: 0 auto;
    text-align: center;
  }

  .hero__lede {
    width: min(100%, 820px);
    margin: 26px auto 0;
    color: #39465b;
    font-size: 18px;
    line-height: 1.65;
  }

  .hero__audience {
    width: min(100%, 760px);
    margin: 16px auto 0;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.65;
  }

  .hero__actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }

  .button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.2;
    text-decoration: none;
    transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease,
      color 180ms ease, box-shadow 180ms ease;
  }

  .button:hover {
    transform: translateY(-1px);
  }

  .button:focus-visible,
  .editorial-link:focus-visible,
  .article-link:focus-visible,
  .control-resource-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: 4px;
  }

  .button--primary {
    background: var(--stepes-magenta);
    color: #fff;
    box-shadow: 0 13px 28px rgba(193, 29, 99, 0.18);
  }

  .button--primary:hover {
    background: var(--stepes-magenta-dark);
    box-shadow: 0 15px 31px rgba(159, 29, 85, 0.23);
  }

  .button--secondary {
    background: rgba(255, 255, 255, 0.84);
    border-color: #d8dde5;
    color: #20283a;
  }

  .button--secondary:hover {
    border-color: #c3cad5;
    background: #fff;
  }

  .button__arrow,
  .editorial-link__arrow,
  .article-link__arrow {
    width: 17px;
    height: 17px;
    flex: 0 0 auto;
    transition: transform 180ms ease;
  }

  .button:hover .button__arrow,
  .editorial-link:hover .editorial-link__arrow,
  .article-link:hover .article-link__arrow {
    transform: translateX(3px);
  }

  .featured-guide {
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.9fr) auto;
    align-items: center;
    gap: 44px;
    margin-top: 72px;
    padding: 34px 38px;
    border: 1px solid #e4dce1;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.91);
    box-shadow: var(--shadow-soft);
    text-align: left;
  }

  .featured-guide__title h2 {
    margin-top: 10px;
    max-width: 560px;
    font-size: 25px;
    line-height: 1.28;
  }

  .featured-guide__copy {
    color: var(--text);
    font-size: 16px;
    line-height: 1.65;
  }

  .featured-guide__action {
    min-width: 210px;
    display: flex;
    justify-content: flex-end;
  }

  .topic-row__icon svg,
  .business-need__icon svg {
    stroke: currentColor;
  }

  .hero__copy,
  .featured-guide > *,
  .overview__layout > *,
  .topic-row > *,
  .essential-guides__layout > *,
  .business-need > *,
  .workflow-choice__intro > *,
  .workflow-profile > *,
  .controlled-workflow__intro > *,
  .controlled-step > *,
  .responsible-controls__layout > *,
  .control-area > *,
  .enterprise-use-cases__intro > *,
  .stepes-approach__layout > *,
  .approach-principle > *,
  .latest-insights__intro > *,
  .faq-section__layout > *,
  .related-pillars__intro > *,
  .final-cta__layout > * {
    min-width: 0;
  }

  .button,
  .editorial-link span,
  .article-link span,
  .control-resource-link span {
    overflow-wrap: anywhere;
  }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 44px;
    color: var(--stepes-magenta-dark);
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    text-decoration: none;
  }

  .editorial-link:hover {
    color: var(--stepes-magenta);
  }

  .overview {
    padding: 96px 0;
    background: var(--surface);
  }

  .overview__layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.78fr) minmax(0, 1.5fr);
    gap: 88px;
    align-items: start;
  }

  .overview__intro {
    position: sticky;
    top: 32px;
  }

  .overview__intro h2 {
    max-width: 480px;
    margin-top: 0;
  }

  .overview__content {
    min-width: 0;
  }

  .overview__narrative {
    max-width: 780px;
  }

  .overview__narrative p {
    font-size: 18px;
    line-height: 1.72;
  }

  .overview__narrative p + p {
    margin-top: 22px;
  }

  .value-themes {
    margin-top: 44px;
    border-top: 1px solid var(--line);
  }

  .value-theme {
    display: grid;
    grid-template-columns: 3px minmax(0, 1fr);
    gap: 24px;
    padding: 28px 0;
    border-bottom: 1px solid var(--line);
  }

  .value-theme__marker {
    width: 3px;
    min-height: 52px;
    border-radius: 99px;
    background: var(--stepes-magenta);
  }

  .value-theme h3 {
    font-size: 21px;
  }

  .value-theme p {
    max-width: 720px;
    margin-top: 8px;
  }

  .topics {
    padding: 96px 0 112px;
    background: var(--surface-soft);
    border-top: 1px solid var(--line-soft);
  }

  .section-heading {
    max-width: 830px;
  }

  .section-heading--centered {
    margin: 0 auto 50px;
    text-align: center;
  }

  .section-heading h2 {
    margin-top: 14px;
  }

  .section-heading--no-eyebrow h2 {
    margin-top: 0;
  }

  .section-heading > p:last-child {
    margin: 20px auto 0;
    max-width: 760px;
    font-size: 18px;
  }

  .topic-directory {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
    box-shadow: 0 18px 52px rgba(31, 39, 51, 0.055);
  }

  .topic-row {
    display: grid;
    grid-template-columns: minmax(330px, 0.88fr) minmax(0, 1.45fr);
    gap: 56px;
    padding: 46px 48px;
  }

  .topic-row + .topic-row {
    border-top: 1px solid var(--line);
  }

  .topic-row__intro {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
  }

  .topic-row__icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    background: #f2f4f7;
    color: #3d485b;
  }

  .topic-row__icon svg {
    width: 24px;
    height: 24px;
  }

  .topic-label {
    color: var(--stepes-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .topic-row__intro h3 {
    margin-top: 9px;
  }

  .topic-row__intro-copy > p:not(.topic-label) {
    margin-top: 13px;
    color: var(--text);
  }

  .topic-row__intro .editorial-link {
    margin-top: 18px;
  }

  .topic-row__articles {
    min-width: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 36px;
    align-content: start;
  }

  .article-link {
    min-height: 58px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18px;
    gap: 12px;
    align-items: center;
    padding: 11px 0;
    border-bottom: 1px solid var(--line-soft);
    color: #2f3a4d;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.45;
    text-decoration: none;
  }

  .article-link:hover {
    color: var(--stepes-magenta-dark);
  }

  .article-link__arrow {
    color: #a8b0bd;
  }

  .article-link:hover .article-link__arrow {
    color: var(--stepes-magenta);
  }

  .essential-guides {
    padding: 104px 0;
    background: var(--surface);
  }

  .essential-guides__layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.48fr);
    gap: 88px;
    align-items: start;
  }

  .essential-guides__intro {
    position: sticky;
    top: 32px;
  }

  .essential-guides__intro h2 {
    margin-top: 0;
    max-width: 460px;
  }

  .essential-guides__intro > p:last-child {
    margin-top: 22px;
    max-width: 470px;
    font-size: 18px;
    line-height: 1.7;
  }

  .essential-guides__directory {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .essential-guide {
    min-height: 276px;
    padding: 34px 34px 34px 0;
  }

  .essential-guide:nth-child(even) {
    padding-right: 0;
    padding-left: 34px;
    border-left: 1px solid var(--line);
  }

  .essential-guide:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }

  .essential-guide h3 {
    margin-top: 9px;
    font-size: 22px;
  }

  .essential-guide__content > p:not(.topic-label) {
    margin-top: 13px;
  }

  .essential-guide .editorial-link {
    margin-top: 18px;
  }

  .business-needs {
    padding: 104px 0 110px;
    background: var(--surface-soft);
    border-top: 1px solid var(--line-soft);
    border-bottom: 1px solid var(--line-soft);
  }

  .business-needs__grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
    box-shadow: 0 18px 52px rgba(31, 39, 51, 0.05);
  }

  .business-need {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 18px;
    min-height: 266px;
    padding: 34px 30px;
  }

  .business-need:not(:nth-child(3n + 1)) {
    border-left: 1px solid var(--line);
  }

  .business-need:nth-child(n + 4) {
    border-top: 1px solid var(--line);
  }

  .business-need__icon {
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 15px;
    background: #f2f4f7;
    color: #3d485b;
  }

  .business-need__icon svg {
    width: 23px;
    height: 23px;
  }

  .business-need h3 {
    color: var(--ink);
    font-size: 21px;
  }

  .business-need p {
    margin-top: 11px;
    color: var(--text);
  }

  .business-need .editorial-link {
    margin-top: 16px;
  }

  .workflow-choice {
    padding: 104px 0 112px;
    background: var(--surface);
  }

  .workflow-choice__intro {
    display: grid;
    grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
    gap: 78px;
    align-items: end;
    margin-bottom: 48px;
  }

  .workflow-choice__intro h2 {
    margin-top: 16px;
    max-width: 590px;
  }

  .workflow-choice__intro > p {
    max-width: 720px;
    font-size: 18px;
    line-height: 1.72;
  }

  .workflow-matrix {
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
    box-shadow: 0 18px 52px rgba(31, 39, 51, 0.055);
  }

  .workflow-matrix__header {
    display: grid;
    grid-template-columns: minmax(300px, 1.08fr) minmax(250px, 0.9fr) minmax(300px, 1fr);
    gap: 34px;
    padding: 17px 34px;
    background: #f4f5f7;
    border-bottom: 1px solid var(--line);
  }

  .workflow-matrix__header span {
    color: #576276;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .workflow-profile {
    display: grid;
    grid-template-columns: minmax(300px, 1.08fr) minmax(250px, 0.9fr) minmax(300px, 1fr);
    gap: 34px;
    align-items: start;
    padding: 34px;
  }

  .workflow-profile + .workflow-profile {
    border-top: 1px solid var(--line);
  }

  .workflow-profile__profile {
    min-width: 0;
  }

  .workflow-profile h3 {
    font-size: 20px;
    line-height: 1.32;
  }

  .workflow-profile__profile p {
    margin-top: 8px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.6;
  }

  .workflow-profile__workflow {
    padding-top: 1px;
  }

  .workflow-profile__workflow > p:last-child {
    color: #273247;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.55;
  }

  .workflow-profile__label {
    display: none;
    margin-bottom: 7px;
    color: var(--stepes-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.11em;
    text-transform: uppercase;
  }

  .workflow-profile__controls ul {
    display: grid;
    gap: 7px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .workflow-profile__controls li {
    position: relative;
    padding-left: 16px;
    color: var(--text);
    font-size: 14px;
    line-height: 1.55;
  }

  .workflow-profile__controls li::before {
    content: "";
    position: absolute;
    top: 0.7em;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #9aa4b2;
  }

  .workflow-choice__footer {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 40px;
    align-items: center;
    margin-top: 30px;
    padding: 0 10px;
  }

  .workflow-choice__footer p {
    max-width: 820px;
    color: var(--muted);
    font-size: 14px;
  }


  .controlled-workflow {
    padding: 104px 0 112px;
    background: var(--surface-soft);
    border-top: 1px solid var(--line-soft);
    border-bottom: 1px solid var(--line-soft);
  }

  .controlled-workflow__intro {
    display: grid;
    grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
    gap: 78px;
    align-items: end;
    margin-bottom: 48px;
  }

  .controlled-workflow__intro h2 {
    margin-top: 16px;
    max-width: 590px;
  }

  .controlled-workflow__intro > p {
    max-width: 720px;
    font-size: 18px;
    line-height: 1.72;
  }

  .controlled-workflow__sequence {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
    box-shadow: 0 18px 52px rgba(31, 39, 51, 0.05);
  }

  .controlled-step {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
    min-height: 230px;
    padding: 34px 34px;
  }

  .controlled-step:nth-child(even) {
    border-left: 1px solid var(--line);
  }

  .controlled-step:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }

  .controlled-step:last-child:nth-child(odd) {
    grid-column: 1 / -1;
    min-height: 0;
  }

  .controlled-step__number {
    color: var(--stepes-magenta-dark);
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.08em;
  }

  .controlled-step h3 {
    font-size: 21px;
  }

  .controlled-step h3 + p {
    margin-top: 11px;
  }

  .controlled-workflow__footer {
    margin-top: 28px;
    padding-left: 8px;
  }

  .responsible-controls {
    padding: 104px 0 112px;
    background: var(--surface);
  }

  .responsible-controls__layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.5fr);
    gap: 88px;
    align-items: start;
  }

  .responsible-controls__intro {
    position: sticky;
    top: 32px;
  }

  .responsible-controls__intro h2 {
    margin-top: 0;
    max-width: 500px;
  }

  .responsible-controls__intro > p:last-child {
    margin-top: 22px;
    max-width: 470px;
    font-size: 18px;
    line-height: 1.7;
  }

  .control-areas {
    border-top: 1px solid var(--line);
  }

  .control-area {
    display: grid;
    grid-template-columns: minmax(0, 1.14fr) minmax(260px, 0.86fr);
    gap: 52px;
    padding: 40px 0;
    border-bottom: 1px solid var(--line);
  }

  .control-area h3 {
    margin-top: 9px;
    font-size: 22px;
  }

  .control-area__main > p:not(.topic-label) {
    margin-top: 13px;
  }

  .control-area__main ul {
    display: grid;
    gap: 8px;
    margin: 20px 0 0;
    padding: 0;
    list-style: none;
  }

  .control-area__main li {
    position: relative;
    padding-left: 17px;
    color: var(--text);
    font-size: 14px;
    line-height: 1.55;
  }

  .control-area__main li::before {
    content: "";
    position: absolute;
    top: 0.72em;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #9aa4b2;
  }

  .control-area__resources {
    align-self: start;
    padding-left: 30px;
    border-left: 1px solid var(--line-soft);
  }

  .control-area__resources-label {
    margin-bottom: 8px;
    color: #6a7485;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .control-resource-link {
    min-height: 50px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 17px;
    gap: 12px;
    align-items: center;
    padding: 9px 0;
    border-bottom: 1px solid var(--line-soft);
    color: #344054;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;
    text-decoration: none;
  }

  .control-resource-link:hover {
    color: var(--stepes-magenta-dark);
  }

  .control-resource-link__arrow {
    width: 17px;
    height: 17px;
    color: #a8b0bd;
    transition: transform 180ms ease, color 180ms ease;
  }

  .control-resource-link:hover .control-resource-link__arrow {
    color: var(--stepes-magenta);
    transform: translateX(3px);
  }

  .practical-tools {
    padding: 104px 0 112px;
    background: var(--surface-soft);
    border-top: 1px solid var(--line-soft);
  }

  .practical-tools__directory {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
    box-shadow: 0 18px 52px rgba(31, 39, 51, 0.05);
  }

  .practical-tool {
    min-height: 278px;
    padding: 34px 30px;
  }

  .practical-tool:not(:nth-child(3n + 1)) {
    border-left: 1px solid var(--line);
  }

  .practical-tool:nth-child(n + 4) {
    border-top: 1px solid var(--line);
  }

  .practical-tool h3 {
    margin-top: 9px;
    font-size: 21px;
  }

  .practical-tool > p:not(.topic-label) {
    margin-top: 12px;
  }

  .practical-tool .editorial-link {
    margin-top: 17px;
  }


  .enterprise-use-cases {
    padding: 104px 0 112px;
    background: var(--surface);
  }

  .enterprise-use-cases__intro,
  .latest-insights__intro {
    display: grid;
    grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
    gap: 78px;
    align-items: end;
    margin-bottom: 48px;
  }

  .enterprise-use-cases__intro h2,
  .latest-insights__intro h2 {
    margin-top: 16px;
    max-width: 590px;
  }

  .enterprise-use-cases__intro--no-eyebrow h2,
  .latest-insights__intro--no-eyebrow h2 {
    margin-top: 0;
  }

  .enterprise-use-cases__intro > p,
  .latest-insights__intro > p {
    max-width: 720px;
    font-size: 18px;
    line-height: 1.72;
  }

  .use-case-directory {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
    background: var(--surface);
  }

  .use-case-item {
    min-height: 250px;
    padding: 32px 28px;
    border-bottom: 1px solid var(--line);
  }

  .use-case-item:not(:nth-child(4n)) {
    border-right: 1px solid var(--line);
  }

  .use-case-item:nth-last-child(-n + 4) {
    border-bottom: 0;
  }

  .use-case-item h3 {
    font-size: 20px;
    line-height: 1.32;
  }

  .use-case-item > p {
    margin-top: 11px;
  }

  .use-case-item .editorial-link {
    margin-top: 16px;
  }

  .stepes-approach {
    padding: 104px 0 112px;
    background: #171d2a;
  }

  .stepes-approach__layout {
    display: grid;
    grid-template-columns: minmax(340px, 0.78fr) minmax(0, 1.22fr);
    gap: 88px;
    align-items: start;
  }

  .stepes-approach .eyebrow {
    color: #e77aa8;
  }

  .stepes-approach h2,
  .stepes-approach h3 {
    color: #ffffff;
  }

  .stepes-approach__intro h2 {
    margin-top: 16px;
    max-width: 560px;
  }

  .stepes-approach__intro > p:not(.eyebrow) {
    margin-top: 22px;
    max-width: 570px;
    color: #cbd2de;
    font-size: 18px;
    line-height: 1.72;
  }

  .stepes-approach__intro > p:not(.eyebrow) + p {
    margin-top: 18px;
    font-size: 16px;
  }

  .stepes-approach__links {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 4px 28px;
    margin-top: 30px;
    padding-top: 22px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .stepes-approach .editorial-link {
    color: #f08ab4;
  }

  .stepes-approach .editorial-link:focus-visible {
    outline-color: rgba(240, 138, 180, 0.36);
  }

  .stepes-approach__principles {
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  .approach-principle {
    display: grid;
    grid-template-columns: minmax(130px, 0.36fr) minmax(220px, 0.64fr) minmax(0, 1fr);
    gap: 26px;
    align-items: start;
    padding: 30px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .approach-principle__label {
    color: #e77aa8;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .approach-principle h3 {
    font-size: 20px;
    line-height: 1.35;
  }

  .approach-principle > p:last-child {
    color: #cbd2de;
    line-height: 1.68;
  }

  .latest-insights {
    padding: 104px 0 112px;
    background: var(--surface-soft);
    border-bottom: 1px solid var(--line-soft);
  }

  .latest-insights__directory {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .latest-insight {
    min-height: 258px;
    padding: 34px 40px 34px 0;
  }

  .latest-insight:nth-child(even) {
    padding-right: 0;
    padding-left: 40px;
    border-left: 1px solid var(--line);
  }

  .latest-insight:nth-child(n + 3) {
    border-top: 1px solid var(--line);
  }

  .latest-insight h3 {
    margin-top: 9px;
    font-size: 21px;
  }

  .latest-insight > p:not(.topic-label) {
    margin-top: 12px;
  }

  .latest-insight .editorial-link {
    margin-top: 17px;
  }

  .latest-insights__footer {
    display: flex;
    justify-content: flex-end;
    margin-top: 28px;
  }


  .faq-section {
    padding: 104px 0 112px;
    background: var(--surface);
  }

  .faq-section__layout {
    display: grid;
    grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.5fr);
    gap: 88px;
    align-items: start;
  }

  .faq-section__intro {
    position: sticky;
    top: 32px;
  }

  .faq-section__intro h2 {
    max-width: 500px;
    margin-top: 0;
  }

  .faq-section__intro > p:last-child {
    max-width: 470px;
    margin-top: 22px;
    font-size: 18px;
    line-height: 1.7;
  }

  .faq-list {
    border-top: 1px solid var(--line);
  }

  .faq-item {
    border-bottom: 1px solid var(--line);
  }

  .faq-item summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 26px;
    gap: 28px;
    align-items: center;
    min-height: 86px;
    padding: 24px 0;
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    cursor: pointer;
    list-style: none;
  }

  .faq-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-item summary:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: 4px;
    border-radius: 4px;
  }

  .faq-item__control {
    position: relative;
    width: 26px;
    height: 26px;
    border: 1px solid #cfd5df;
    border-radius: 50%;
  }

  .faq-item__control::before,
  .faq-item__control::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 1.5px;
    border-radius: 2px;
    background: #536075;
    transform: translate(-50%, -50%);
    transition: transform 180ms ease, background-color 180ms ease;
  }

  .faq-item__control::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .faq-item[open] .faq-item__control {
    border-color: #d9b4c5;
  }

  .faq-item[open] .faq-item__control::before,
  .faq-item[open] .faq-item__control::after {
    background: var(--stepes-magenta-dark);
  }

  .faq-item[open] .faq-item__control::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .faq-item__answer {
    max-width: 820px;
    padding: 0 54px 30px 0;
  }

  .faq-item__answer p {
    line-height: 1.72;
  }

  .faq-item__answer p + p {
    margin-top: 14px;
  }

  .related-pillars {
    padding: 104px 0 112px;
    background: var(--surface-soft);
    border-top: 1px solid var(--line-soft);
    border-bottom: 1px solid var(--line-soft);
  }

  .related-pillars__intro {
    display: grid;
    grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
    gap: 78px;
    align-items: end;
    margin-bottom: 48px;
  }

  .related-pillars__intro h2 {
    max-width: 600px;
    margin-top: 16px;
  }

  .related-pillars__intro--no-eyebrow h2 {
    margin-top: 0;
  }

  .related-pillars__intro > p {
    max-width: 720px;
    font-size: 18px;
    line-height: 1.72;
  }

  .related-pillars__directory {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .related-pillar {
    min-height: 260px;
    padding: 34px 30px;
  }

  .related-pillar + .related-pillar {
    border-left: 1px solid var(--line);
  }

  .related-pillar h3 {
    font-size: 21px;
    line-height: 1.35;
  }

  .related-pillar > p {
    margin-top: 12px;
  }

  .related-pillar .editorial-link {
    margin-top: 18px;
  }

  .final-cta {
    padding: 96px 0 104px;
    background: var(--surface);
  }

  .final-cta__layout {
    display: grid;
    grid-template-columns: minmax(0, 1.25fr) minmax(280px, 0.75fr);
    gap: 70px;
    align-items: center;
    padding: 56px 60px 34px;
    border: 1px solid #ead9e1;
    border-radius: 30px;
    background: linear-gradient(135deg, #fdf2f7 0%, #fff9fc 52%, #ffffff 100%);
    box-shadow: 0 22px 64px rgba(58, 38, 49, 0.08);
  }

  .final-cta h2 {
    max-width: 760px;
    margin-top: 0;
    color: var(--ink);
  }

  .final-cta__copy > p {
    max-width: 780px;
    margin-top: 21px;
    color: var(--text);
    font-size: 18px;
    line-height: 1.72;
  }

  .final-cta__copy > p + p {
    margin-top: 16px;
    color: var(--muted);
    font-size: 16px;
  }

  .final-cta__actions {
    display: grid;
    gap: 12px;
    justify-items: stretch;
  }

  .final-cta__actions .button {
    width: 100%;
  }

  .button--cta-secondary {
    color: #20283a;
    background: rgba(255, 255, 255, 0.9);
    border-color: #d6cbd1;
  }

  .button--cta-secondary:hover {
    background: #fff;
    border-color: #c9bac2;
  }

  .final-cta__supporting {
    grid-column: 1 / -1;
    margin-top: -16px;
    padding-top: 24px;
    border-top: 1px solid #e3d6dc;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.6;
  }

  @media (max-width: 1180px) {
    .page-shell {
      padding-inline: 40px;
    }

    .featured-guide {
      grid-template-columns: minmax(0, 1fr) minmax(0, 0.85fr);
      gap: 26px 42px;
    }

    .featured-guide__action {
      grid-column: 1 / -1;
      justify-content: flex-start;
      min-width: 0;
    }

    .overview__layout {
      gap: 56px;
    }

    .topic-row {
      grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1.18fr);
      gap: 40px;
      padding: 42px 40px;
    }

    .topic-row__articles {
      grid-template-columns: 1fr;
    }

    .essential-guides__layout {
      gap: 58px;
    }

    .business-needs__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .business-need:not(:nth-child(3n + 1)) {
      border-left: 0;
    }

    .business-need:nth-child(even) {
      border-left: 1px solid var(--line);
    }

    .business-need:nth-child(n + 3) {
      border-top: 1px solid var(--line);
    }

    .workflow-matrix__header,
    .workflow-profile {
      grid-template-columns: minmax(270px, 1fr) minmax(230px, 0.86fr) minmax(250px, 0.94fr);
      gap: 26px;
    }

    .responsible-controls__layout {
      gap: 58px;
    }

    .control-area {
      gap: 38px;
    }

    .use-case-directory {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .use-case-item,
    .use-case-item:not(:nth-child(4n)),
    .use-case-item:nth-last-child(-n + 4) {
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .use-case-item:not(:nth-child(3n)) {
      border-right: 1px solid var(--line);
    }

    .use-case-item:nth-last-child(-n + 3) {
      border-bottom: 0;
    }

    .stepes-approach__layout {
      gap: 58px;
    }

    .approach-principle {
      grid-template-columns: minmax(115px, 0.34fr) minmax(190px, 0.66fr) minmax(0, 1fr);
      gap: 22px;
    }
  }

  @media (max-width: 900px) {
    h2 {
      font-size: 32px;
    }

    .page-shell {
      padding-inline: 24px;
    }

    .hero {
      padding: 88px 0 80px;
    }

    .featured-guide {
      grid-template-columns: 1fr;
      margin-top: 56px;
      padding: 30px;
    }

    .featured-guide__action {
      grid-column: auto;
    }

    .overview {
      padding: 80px 0;
    }

    .overview__layout {
      grid-template-columns: 1fr;
      gap: 36px;
    }

    .overview__intro {
      position: static;
    }

    .overview__intro h2 {
      max-width: 660px;
    }

    .topics {
      padding: 80px 0 88px;
    }

    .topic-row {
      grid-template-columns: 1fr;
      gap: 30px;
      padding: 40px 32px;
    }

    .topic-row__articles {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .essential-guides,
    .business-needs,
    .workflow-choice,
    .controlled-workflow,
    .responsible-controls,
    .practical-tools,
    .enterprise-use-cases,
    .stepes-approach,
    .latest-insights {
      padding: 80px 0 88px;
    }

    .essential-guides__layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .essential-guides__intro {
      position: static;
    }

    .essential-guides__intro h2,
    .essential-guides__intro > p:last-child {
      max-width: 720px;
    }

    .workflow-choice__intro {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .workflow-choice__intro > p {
      max-width: 760px;
    }

    .workflow-matrix__header {
      display: none;
    }

    .workflow-profile {
      grid-template-columns: minmax(0, 1.06fr) minmax(0, 0.94fr);
      gap: 26px 34px;
      padding: 32px;
    }

    .workflow-profile__profile {
      grid-column: 1 / -1;
    }

    .workflow-profile__label {
      display: block;
    }

    .workflow-choice__footer {
      grid-template-columns: 1fr;
      gap: 14px;
      align-items: start;
    }

    .controlled-workflow__intro {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .controlled-workflow__intro > p {
      max-width: 760px;
    }

    .responsible-controls__layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .responsible-controls__intro {
      position: static;
    }

    .responsible-controls__intro h2,
    .responsible-controls__intro > p:last-child {
      max-width: 760px;
    }

    .practical-tools__directory {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .practical-tool:not(:nth-child(3n + 1)) {
      border-left: 0;
    }

    .practical-tool:nth-child(even) {
      border-left: 1px solid var(--line);
    }

    .practical-tool:nth-child(n + 3) {
      border-top: 1px solid var(--line);
    }

    .enterprise-use-cases__intro,
    .latest-insights__intro {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .enterprise-use-cases__intro > p,
    .latest-insights__intro > p {
      max-width: 760px;
    }

    .use-case-directory {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .use-case-item,
    .use-case-item:not(:nth-child(3n)),
    .use-case-item:nth-last-child(-n + 3) {
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .use-case-item:nth-child(odd) {
      border-right: 1px solid var(--line);
    }

    .use-case-item:nth-last-child(-n + 2) {
      border-bottom: 0;
    }

    .stepes-approach__layout {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .stepes-approach__intro h2,
    .stepes-approach__intro > p:not(.eyebrow) {
      max-width: 760px;
    }

    .approach-principle {
      grid-template-columns: minmax(130px, 0.34fr) minmax(220px, 0.66fr) minmax(0, 1fr);
    }
  }

  @media (max-width: 640px) {
    .page-shell {
      padding-inline: 20px;
    }

    h1 {
      font-size: 38px;
      line-height: 1.1;
    }

    h2 {
      font-size: 30px;
      line-height: 1.18;
    }

    h3 {
      font-size: 20px;
    }

    .hero {
      padding: 72px 0 64px;
    }

    .hero__lede {
      margin-top: 22px;
      font-size: 18px;
      line-height: 1.6;
    }

    .hero__audience {
      margin-top: 14px;
    }

    .hero__actions {
      display: grid;
      grid-template-columns: 1fr;
      margin-top: 28px;
    }

    .button {
      width: 100%;
      min-height: 52px;
      padding-inline: 18px;
    }

    .featured-guide {
      gap: 20px;
      margin-top: 44px;
      padding: 26px 22px;
      border-radius: 24px;
    }

    .featured-guide__title h2 {
      font-size: 22px;
    }

    .overview,
    .topics {
      padding: 68px 0;
    }

    .overview__layout {
      gap: 30px;
    }

    .overview__narrative p {
      font-size: 18px;
      line-height: 1.68;
    }

    .value-themes {
      margin-top: 34px;
    }

    .value-theme {
      gap: 18px;
      padding: 24px 0;
    }

    .value-theme h3 {
      font-size: 20px;
    }

    .section-heading--centered {
      margin-bottom: 34px;
    }

    .section-heading > p:last-child {
      font-size: 18px;
    }

    .topic-directory {
      margin-inline: -1px;
      border-radius: 24px;
    }

    .topic-row {
      gap: 26px;
      padding: 32px 22px;
    }

    .topic-row__intro {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 15px;
    }

    .topic-row__icon {
      width: 42px;
      height: 42px;
      border-radius: 14px;
    }

    .topic-row__icon svg {
      width: 22px;
      height: 22px;
    }

    .topic-row__articles {
      grid-template-columns: 1fr;
      column-gap: 0;
    }

    .article-link {
      min-height: 56px;
      font-size: 15px;
    }

    .essential-guides,
    .business-needs,
    .workflow-choice,
    .controlled-workflow,
    .responsible-controls,
    .practical-tools,
    .enterprise-use-cases,
    .stepes-approach,
    .latest-insights {
      padding: 68px 0;
    }

    .essential-guides__layout {
      gap: 30px;
    }

    .essential-guides__intro > p:last-child,
    .workflow-choice__intro > p {
      font-size: 18px;
      line-height: 1.68;
    }

    .essential-guides__directory {
      grid-template-columns: 1fr;
    }

    .essential-guide {
      min-height: 0;
      padding: 28px 0;
    }

    .essential-guide:nth-child(even) {
      padding: 28px 0;
      border-left: 0;
    }

    .essential-guide:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .business-needs__grid {
      grid-template-columns: 1fr;
    }

    .business-need {
      min-height: 0;
      padding: 28px 22px;
    }

    .business-need:nth-child(even) {
      border-left: 0;
    }

    .business-need:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .workflow-choice__intro {
      margin-bottom: 34px;
    }

    .workflow-matrix {
      border-radius: 24px;
    }

    .workflow-profile {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 28px 22px;
    }

    .workflow-profile__profile {
      grid-column: auto;
    }

    .workflow-choice__footer {
      padding: 0;
    }

    .controlled-workflow__intro {
      margin-bottom: 34px;
    }

    .controlled-workflow__intro > p,
    .responsible-controls__intro > p:last-child {
      font-size: 18px;
      line-height: 1.68;
    }

    .controlled-workflow__sequence {
      grid-template-columns: 1fr;
      border-radius: 24px;
    }

    .controlled-step {
      min-height: 0;
      padding: 28px 22px;
    }

    .controlled-step:nth-child(even) {
      border-left: 0;
    }

    .controlled-step:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .controlled-step:last-child:nth-child(odd) {
      grid-column: auto;
    }

    .controlled-workflow__footer {
      padding-left: 0;
    }

    .responsible-controls__layout {
      gap: 30px;
    }

    .control-area {
      grid-template-columns: 1fr;
      gap: 28px;
      padding: 32px 0;
    }

    .control-area__resources {
      padding-left: 0;
      border-left: 0;
      border-top: 1px solid var(--line-soft);
      padding-top: 20px;
    }

    .practical-tools__directory {
      grid-template-columns: 1fr;
      border-radius: 24px;
    }

    .practical-tool {
      min-height: 0;
      padding: 28px 22px;
    }

    .practical-tool:nth-child(even) {
      border-left: 0;
    }

    .practical-tool:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .enterprise-use-cases__intro,
    .latest-insights__intro {
      margin-bottom: 34px;
    }

    .enterprise-use-cases__intro > p,
    .latest-insights__intro > p,
    .stepes-approach__intro > p:not(.eyebrow) {
      font-size: 18px;
      line-height: 1.68;
    }

    .use-case-directory {
      grid-template-columns: 1fr;
      border-radius: 24px;
    }

    .use-case-item,
    .use-case-item:not(:nth-child(3n)),
    .use-case-item:nth-child(odd),
    .use-case-item:nth-last-child(-n + 2) {
      min-height: 0;
      padding: 28px 22px;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .use-case-item:last-child {
      border-bottom: 0;
    }

    .stepes-approach__layout {
      gap: 38px;
    }

    .stepes-approach__links {
      grid-template-columns: 1fr;
      gap: 2px;
    }

    .approach-principle {
      grid-template-columns: 1fr;
      gap: 9px;
      padding: 26px 0;
    }

    .approach-principle h3 {
      font-size: 20px;
    }

    .latest-insights__directory {
      grid-template-columns: 1fr;
    }

    .latest-insight,
    .latest-insight:nth-child(even) {
      min-height: 0;
      padding: 28px 0;
      border-left: 0;
    }

    .latest-insight:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .latest-insights__footer {
      justify-content: flex-start;
      margin-top: 20px;
    }
  }

  @media (max-width: 360px) {
    .featured-guide {
      padding: 24px 20px;
    }

    .topic-row {
      padding: 30px 18px;
    }

    .topic-row__intro {
      grid-template-columns: 1fr;
    }

    .topic-row__icon,
    .business-need__icon {
      width: 40px;
      height: 40px;
      border-radius: 13px;
    }

    .business-need {
      grid-template-columns: 1fr;
      gap: 15px;
      padding-inline: 20px;
    }

    .controlled-step {
      grid-template-columns: 34px minmax(0, 1fr);
      gap: 16px;
      padding-inline: 20px;
    }

    .final-cta__layout {
      padding-inline: 20px;
    }
  }


  @media (max-width: 1180px) {
    .faq-section__layout {
      gap: 58px;
    }

    .related-pillars__directory {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .related-pillar + .related-pillar {
      border-left: 0;
    }

    .related-pillar:nth-child(even) {
      border-left: 1px solid var(--line);
    }

    .related-pillar:nth-child(n + 3) {
      border-top: 1px solid var(--line);
    }
  }

  @media (max-width: 900px) {
    .faq-section,
    .related-pillars,
    .final-cta {
      padding: 80px 0 88px;
    }

    .faq-section__layout {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .faq-section__intro {
      position: static;
    }

    .faq-section__intro h2,
    .faq-section__intro > p:last-child {
      max-width: 760px;
    }

    .related-pillars__intro {
      grid-template-columns: 1fr;
      gap: 24px;
    }

    .related-pillars__intro > p {
      max-width: 760px;
    }

    .final-cta__layout {
      grid-template-columns: 1fr;
      gap: 38px;
      padding: 46px 44px 32px;
    }

    .final-cta__copy > p {
      max-width: 760px;
    }

    .final-cta__actions {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .final-cta__supporting {
      margin-top: 0;
    }
  }

  @media (max-width: 640px) {
    .faq-section,
    .related-pillars,
    .final-cta {
      padding: 68px 0;
    }

    .faq-section__layout {
      gap: 30px;
    }

    .faq-section__intro > p:last-child,
    .related-pillars__intro > p,
    .final-cta__copy > p {
      font-size: 18px;
      line-height: 1.68;
    }

    .faq-item summary {
      min-height: 76px;
      gap: 18px;
      padding: 22px 0;
      font-size: 18px;
    }

    .faq-item__answer {
      padding: 0 0 26px;
    }

    .related-pillars__intro {
      margin-bottom: 34px;
    }

    .related-pillars__directory {
      grid-template-columns: 1fr;
    }

    .related-pillar,
    .related-pillar:nth-child(even) {
      min-height: 0;
      padding: 28px 0;
      border-left: 0;
    }

    .related-pillar:nth-child(n + 2) {
      border-top: 1px solid var(--line);
    }

    .final-cta__layout {
      gap: 32px;
      padding: 34px 22px 28px;
      border-radius: 24px;
    }

    .final-cta__actions {
      grid-template-columns: 1fr;
    }

    .final-cta__supporting {
      padding-top: 22px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;
