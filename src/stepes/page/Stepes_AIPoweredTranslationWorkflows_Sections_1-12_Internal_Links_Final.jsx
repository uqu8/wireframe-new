import React from "react";

const heroProofs = [
  {
    number: "01",
    title: "Content-Aware Workflow Design",
    text: "Match the translation process to the content’s purpose, audience, complexity, visibility, and business impact.",
  },
  {
    number: "02",
    title: "AI + Professional Expertise",
    text: "Automate repeatable work while keeping qualified linguists and subject-matter reviewers involved where judgment matters.",
  },
  {
    number: "03",
    title: "Enterprise Control",
    text: "Coordinate language assets, quality requirements, reviewer roles, approvals, and project delivery through structured workflows.",
  },
  {
    number: "04",
    title: "Connected Global Operations",
    text: "Support documents, websites, software, training, technical content, and recurring digital releases across teams and systems.",
  },
];

const designFactors = [
  {
    number: "01",
    title: "Purpose and Audience",
    text: "Who will read or use the translated content, and what action should it support? Internal communications, customer-facing websites, product experiences, legal documents, and regulated materials require different levels of linguistic refinement, subject-matter expertise, and release control.",
  },
  {
    number: "02",
    title: "Business and Content Risk",
    text: "What could happen if the translation is incomplete, unclear, inconsistent, or incorrect? Higher-impact content may require specialized linguists, independent review, controlled terminology, additional quality checks, and formal stakeholder approval.",
  },
  {
    number: "03",
    title: "Subject Matter and Linguistic Complexity",
    text: "Does the content require technical knowledge, legal interpretation, regulated terminology, creative adaptation, or a distinctive brand voice? Stepes aligns the process with the required industry knowledge, content type, language pair, target market, and intended audience.",
  },
  {
    number: "04",
    title: "Volume and Update Frequency",
    text: "Is the content a one-time document, a recurring publication, a software release, or a continuously updated knowledge base? The workflow can support individual projects, scheduled programs, high-volume production, release-based localization, or continuous multilingual delivery.",
  },
  {
    number: "05",
    title: "Existing Language Assets",
    text: "Does your organization already have approved translations, terminology, glossaries, style guides, reference materials, or regional feedback? Stepes can incorporate these assets so new content remains aligned with language your organization has already approved.",
  },
  {
    number: "06",
    title: "Systems, Stakeholders, and Approvals",
    text: "Where does the content originate, who needs to review it, and where should the completed translation go? The workflow can coordinate content owners, linguists, specialists, regional reviewers, legal stakeholders, product teams, and designated approvers.",
  },
];

const workflowPaths = [
  {
    number: "01",
    title: "AI Translation With Automated QA",
    bestFor: "High-volume, lower-risk, internal, informational, or time-sensitive content where speed and broad language coverage are the primary goals.",
    configuration: "AI supports first-pass translation while translation memory and approved terminology reinforce consistency. Automated checks help identify issues involving completeness, numbers, formatting, tags, placeholders, and terminology.",
    controls: [
      "Translation memory application",
      "Approved terminology",
      "File and format validation",
      "Automated quality checks",
      "Quality sampling",
      "Optional targeted human review",
    ],
    note: "Selected according to the content’s purpose; not a replacement for appropriate professional review of business-critical, regulated, legal, or safety-related materials.",
  },
  {
    number: "02",
    title: "AI Translation With Professional Human Review",
    bestFor: "Websites, product information, training content, customer communications, marketing materials, knowledge bases, and other customer-facing content requiring professional-quality language at scale.",
    configuration: "AI and reusable language assets accelerate the initial translation stage. Professional linguists then review the content for meaning, fluency, terminology, tone, audience fit, and contextual accuracy.",
    controls: [
      "AI-assisted first-pass translation",
      "Translation memory and terminology",
      "Professional linguistic editing",
      "Brand and style-guide review",
      "Automated and human QA",
      "Client or in-market approval",
    ],
  },
  {
    number: "03",
    title: "Professional Translation With Independent Review",
    bestFor: "Legal, financial, medical, regulatory, technical, safety-related, or business-critical content where accuracy and accountability take priority.",
    configuration: "Qualified professional linguists translate the content according to the subject matter, language, and intended use. A second linguist, specialist, or designated reviewer validates the translation before final quality assurance and approval.",
    controls: [
      "Subject-matter linguist selection",
      "Controlled terminology",
      "Independent linguistic review",
      "Completeness and formatting checks",
      "Stakeholder approval",
      "Final production QA",
    ],
  },
  {
    number: "04",
    title: "Continuous Localization and API Automation",
    bestFor: "Software, apps, websites, product platforms, support content, knowledge bases, and recurring digital releases.",
    configuration: "Content enters and exits the translation process through APIs, connectors, structured files, repositories, or recurring intake workflows. Translation, review, QA, and approval stages are assigned according to each content stream.",
    controls: [
      "Automated content intake",
      "Translation memory reuse",
      "Terminology synchronization",
      "Release-based routing",
      "Reviewer assignments",
      "Status integration",
      "Automated delivery",
    ],
    note: "Continuous localization can use any of the translation and review models above, depending on the content being processed.",
  },
];

const orchestrationStages = [
  {
    number: "01",
    title: "Analyze",
    text: "Stepes assesses the content type, format, subject matter, audience, languages, timing, quality expectations, and intended use. This establishes the requirements for the workflow before production begins.",
  },
  {
    number: "02",
    title: "Configure",
    text: "The translation method, language assets, professional resources, review stages, quality checks, your review roles, and delivery requirements are defined for the content stream.",
  },
  {
    number: "03",
    title: "Route",
    text: "Content is directed to the appropriate technology, linguists, reviewers, and approval stages based on language, subject expertise, schedule, and service level.",
  },
  {
    number: "04",
    title: "Translate and Localize",
    text: "Content moves through AI translation, professional translation, or a combined workflow, with localization engineering, transcreation, desktop publishing, or multimedia support when required.",
  },
  {
    number: "05",
    title: "Review and Validate",
    text: "Professional reviewers assess meaning, fluency, terminology, tone, completeness, formatting, and contextual suitability while automated checks identify systematic issues.",
  },
  {
    number: "06",
    title: "Approve",
    text: "Regional reviewers, legal teams, product owners, compliance personnel, and other designated stakeholders can participate at defined approval stages before release.",
  },
  {
    number: "07",
    title: "Deliver",
    text: "Completed multilingual content is returned through the required file format, portal, publishing environment, repository, or connected system.",
  },
  {
    number: "08",
    title: "Improve",
    text: "Approved translations, terminology decisions, reviewer feedback, and project findings strengthen future workflows and support more consistent delivery.",
  },
];

const orchestrationControls = [
  "Translation memory",
  "Terminology and glossaries",
  "Style and brand guidance",
  "Subject-matter qualifications",
  "Review and approval roles",
  "Automated QA rules",
  "File and format requirements",
  "Turnaround and service levels",
  "Delivery systems",
  "Reporting and project visibility",
];

const governanceCapabilities = [
  {
    number: "01",
    title: "Configurable Workflow Rules",
    text: "Define different translation and review processes for marketing, product, technical, legal, regulated, internal, and high-volume content. Rules can reflect content type, language, quality level, turnaround requirement, business unit, market, or intended use.",
  },
  {
    number: "02",
    title: "Roles and Responsibilities",
    text: "Coordinate content owners, localization managers, professional linguists, subject-matter experts, regional reviewers, project teams, and final approvers. Defined roles make responsibility for translation, review, decisions, and release clear.",
  },
  {
    number: "03",
    title: "Review and Approval Stages",
    text: "Establish the review process required before content is delivered or published. Workflows can include professional linguistic review, independent validation, in-country review, legal approval, product-owner signoff, or additional quality checks.",
  },
  {
    number: "04",
    title: "Language-Asset Governance",
    text: "Centralize translation memory, approved terminology, glossaries, style guidance, product names, and recurring language. Shared assets help maintain continuity across projects, content updates, departments, and target markets.",
  },
  {
    number: "05",
    title: "Quality Controls",
    text: "Apply automated checks, professional linguistic review, terminology validation, formatting QA, contextual evaluation, stakeholder approval, and final production checks according to each content stream’s requirements.",
  },
  {
    number: "06",
    title: "Project Records and Visibility",
    text: "Maintain visibility into requests, files, language pairs, workflow stages, reviewer activity, approvals, project status, and delivery history so stakeholders can follow multilingual content from submission through release.",
  },
  {
    number: "07",
    title: "Reporting and Continuous Improvement",
    text: "Evaluate turnaround performance, translation volumes, language-asset reuse, reviewer feedback, workflow exceptions, quality findings, and delivery progress. These insights help refine workflows as markets, content, and operational needs change.",
    wide: true,
  },
];

const enterpriseContentWorkflows = [
  {
    number: "01",
    title: "Marketing and Website Content",
    text: "Combine AI-assisted translation, approved brand terminology, professional marketing review, transcreation, SEO considerations, and in-market approval for campaigns, websites, product messaging, and ecommerce content. Frequently updated content can benefit from automation and reuse, while high-visibility messaging receives added creative and contextual attention.",
    links: [
      { label: "Marketing Translation", href: "https://www.stepes.com/marketing-translation-services/" },
      { label: "Website Localization", href: "https://www.stepes.com/website-translation-services/" },
    ],
  },
  {
    number: "02",
    title: "Software and Product Content",
    text: "Connect localization to development and product-release workflows for UI strings, apps, software, release notes, help content, and product experiences. Translation memory, product terminology, contextual review, functional QA, and connected delivery support frequent multilingual releases.",
    links: [
      { label: "Software and App Localization", href: "https://www.stepes.com/software-localization-services/" },
    ],
  },
  {
    number: "03",
    title: "Technical Documentation",
    text: "Translate manuals, specifications, instructions, SOPs, safety information, engineering documents, and support materials using technical linguists and controlled terminology. Structured QA and formatting review help preserve clarity, warnings, numbers, references, and document completeness.",
    links: [
      { label: "Technical Translation", href: "https://www.stepes.com/technical-translation-services/" },
    ],
  },
  {
    number: "04",
    title: "Legal, Financial, and Compliance Content",
    text: "Use specialist linguists, confidentiality controls, controlled terminology, independent review, and defined approvals for contracts, policies, financial communications, governance documents, and other business-critical materials. The workflow can be adapted to document purpose and organizational risk.",
    links: [
      { label: "Legal Translation", href: "https://www.stepes.com/legal-translation-services/" },
      { label: "Financial Translation", href: "https://www.stepes.com/financial-translation-services/" },
    ],
  },
  {
    number: "05",
    title: "Life Sciences and Regulated Content",
    text: "Support medical, clinical, pharmaceutical, medical-device, healthcare, and regulatory content with qualified linguists, terminology controls, structured review, formatting QA, and project traceability. Workflow requirements can align with content type, intended use, target audience, and client quality procedures.",
    links: [
      { label: "Life Sciences Translation", href: "https://www.stepes.com/life-sciences-translation-services/" },
      { label: "Medical Translation", href: "https://www.stepes.com/medical-translation-services/" },
      { label: "Medical Device Translation", href: "https://www.stepes.com/medical-device-translation-services/" },
    ],
  },
  {
    number: "06",
    title: "Training and Internal Communications",
    text: "Translate onboarding, policies, compliance training, eLearning, employee communications, and instructional content. Workflows can balance speed, readability, technical functionality, audience accessibility, multimedia requirements, and professional review according to the program’s purpose.",
    links: [
      { label: "eLearning and Training Translation", href: "https://www.stepes.com/elearning-training-translation-services/" },
    ],
  },
  {
    number: "07",
    title: "Customer Support and Knowledge Content",
    text: "Scale multilingual help centers, knowledge bases, support articles, FAQs, chatbot content, and customer communications through content-aware quality levels. Repeatable content can use greater automation, while customer-facing, escalation-sensitive, or technically complex content receives professional review.",
    links: [
      { label: "Multilingual Customer Support", href: "https://www.stepes.com/solutions/multilingual-customer-support/" },
    ],
  },
];

const connectedOperations = [
  {
    number: "01",
    title: "Centralized Request Intake",
    text: "Authorized users can submit translation requests, upload files, define languages, provide project requirements, review quotes, monitor progress, communicate with project teams, and retrieve completed content through a centralized customer environment.",
    link: {
      label: "Customer Translation Portal",
      href: "https://www.stepes.com/translation-management-portal/",
    },
  },
  {
    number: "02",
    title: "Translation APIs and Automation",
    text: "APIs can send content for translation, create requests, monitor project status, and return completed translations through connected workflows. This is especially useful for software, product, support, ecommerce, website, and other recurring digital content.",
    link: {
      label: "Translation API",
      href: "https://www.stepes.com/translation-api/",
    },
  },
  {
    number: "03",
    title: "Structured File Workflows",
    text: "Process documents, presentations, spreadsheets, localization files, XML, JSON, multimedia scripts, design exports, and other structured formats while preserving the information required for production and delivery.",
  },
  {
    number: "04",
    title: "Content Systems and Repositories",
    text: "Support translation processes connected to websites, CMS platforms, product information systems, software repositories, knowledge bases, document environments, and other enterprise content systems.",
  },
  {
    number: "05",
    title: "Multilingual Delivery",
    text: "Return completed content through the required files, repositories, publishing processes, portals, or connected systems. Delivery can support one-time projects, scheduled releases, recurring programs, or continuous localization.",
  },
];

const implementationStages = [
  {
    number: "01",
    title: "Discover",
    text: "Review content types, languages, volumes, update cycles, systems, stakeholders, quality expectations, security considerations, and business objectives.",
  },
  {
    number: "02",
    title: "Design",
    text: "Define translation paths, professional resources, language assets, review stages, approvals, quality checks, delivery methods, and stakeholder responsibilities.",
  },
  {
    number: "03",
    title: "Prepare Language Assets",
    text: "Assess and organize translation memories, glossaries, terminology, style guides, approved translations, product names, and reviewer guidance.",
  },
  {
    number: "04",
    title: "Pilot",
    text: "Test the proposed workflow using representative content, language pairs, formats, and review scenarios before broader deployment.",
  },
  {
    number: "05",
    title: "Configure and Launch",
    text: "Set up users, project structure, workflow rules, language assets, quality controls, integrations, communication processes, and delivery requirements.",
  },
  {
    number: "06",
    title: "Measure and Improve",
    text: "Review quality feedback, workflow exceptions, turnaround performance, reviewer input, terminology decisions, and language-asset reuse.",
  },
];

const whyStepesItems = [
  {
    number: "01",
    title: "Content-Aware Workflow Design",
    text: "Build the process around the content’s audience, purpose, subject matter, business impact, volume, and intended use rather than applying one standard translation model to every request.",
  },
  {
    number: "02",
    title: "AI and Professional Expertise",
    text: "Use AI to accelerate suitable work while relying on qualified linguists, subject-matter specialists, and professional reviewers for context, accuracy, nuance, and higher-impact content.",
  },
  {
    number: "03",
    title: "Reusable Language Assets",
    text: "Apply translation memory, terminology, glossaries, style guidance, and approved language across recurring projects and multilingual programs.",
  },
  {
    number: "04",
    title: "Enterprise Governance",
    text: "Coordinate workflow rules, roles, review stages, approvals, quality requirements, project records, and delivery visibility across teams.",
  },
  {
    number: "05",
    title: "Connected Operations",
    text: "Support documents, websites, software, product content, training, marketing, legal, regulated, technical, and customer-support materials through coordinated workflows.",
  },
  {
    number: "06",
    title: "Flexible Service Delivery",
    text: "Begin with an individual project, a defined content stream, or a representative pilot and scale into broader multilingual operations as your requirements grow.",
  },
  {
    number: "07",
    title: "Continuous Improvement",
    text: "Use approved translations, terminology decisions, reviewer feedback, project findings, and operational performance to strengthen future delivery.",
  },
];

const relatedSolutions = [
  {
    title: "Enterprise Translation Management",
    text: "Centralize translation intake, workflows, language assets, quality controls, approvals, reporting, and delivery across your organization.",
    label: "Enterprise Translation Management",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    title: "AI Translation Platform",
    text: "Explore the technology that brings AI translation, professional review, terminology, QA, APIs, and project visibility together.",
    label: "AI Translation Platform",
    href: "https://www.stepes.com/ai-translation-platform/",
  },
  {
    title: "Global Content Operations",
    text: "Coordinate recurring multilingual content across departments, markets, systems, channels, and release schedules.",
    label: "Global Content Operations",
    href: "https://www.stepes.com/solutions/global-content-operations/",
  },
];

const workflowFaqs = [
  {
    question: "What Is an Enterprise AI-Powered Translation Workflow?",
    answer: "An enterprise AI-powered translation workflow is a managed process that combines translation technology, reusable language assets, professional linguists, quality controls, stakeholder approvals, and connected delivery. Unlike standalone AI translation, the workflow manages how content is analyzed, routed, translated, reviewed, approved, delivered, and reused across an organization.",
  },
  {
    question: "How Does Stepes Determine the Right Workflow for Our Content?",
    answer: "Stepes reviews factors such as the content’s purpose, audience, subject matter, business impact, visibility, volume, update frequency, languages, quality requirements, available language assets, reviewer roles, and delivery systems. These factors determine the appropriate balance of AI translation, professional translation, human review, automated QA, specialist validation, and stakeholder approval.",
  },
  {
    question: "Can Different Departments Use Different Translation Workflows?",
    answer: "Yes. Marketing, product, engineering, legal, compliance, training, customer support, and life sciences teams may have different content and quality requirements. Stepes can configure distinct workflow paths for different departments or content streams while maintaining shared terminology, translation memory, governance, and program visibility.",
  },
  {
    question: "Can Each Content Type Have a Different Review and Approval Process?",
    answer: "Yes. A knowledge-base article may use a more automated workflow, while a marketing campaign may need professional brand review and a legal or regulated document may require independent specialist review and formal approval. Review requirements can be assigned by content type, language, market, business unit, or intended use.",
  },
  {
    question: "Can Stepes Use Our Existing Translation Memory, Glossaries, and Style Guides?",
    answer: "Yes. Existing translation memories, glossaries, terminology databases, style guides, approved translations, product names, and reviewer instructions can be assessed and incorporated into the workflow. Using approved language assets helps improve consistency and reduces repetitive translation work across updates and recurring programs.",
  },
  {
    question: "Can Our Regional or In-Country Reviewers Participate?",
    answer: "Yes. Regional teams, subject-matter experts, legal stakeholders, product owners, compliance personnel, and other designated reviewers can participate at defined stages. Their roles and approval responsibilities can be incorporated into the workflow according to your organization’s review model.",
  },
  {
    question: "Can Stepes Connect the Workflow to Our Existing Systems?",
    answer: "Stepes supports portal-based intake, structured file workflows, translation APIs, and connected localization processes. The appropriate approach depends on where the content is created, how frequently it changes, who reviews it, and how the completed translation needs to be returned or published.",
  },
  {
    question: "How Does Stepes Manage Translation Quality?",
    answer: "Quality controls are selected according to the content and its intended use. They may include translation memory, controlled terminology, professional linguistic review, independent review, automated checks, formatting validation, in-context testing, stakeholder approval, and final project QA. This allows lower-risk content to move efficiently while higher-impact materials receive stronger review and validation.",
  },
  {
    question: "Can the Same Program Support One-Time Projects and Continuous Localization?",
    answer: "Yes. An enterprise workflow can support individual documents, recurring projects, scheduled content programs, software releases, website updates, knowledge bases, and continuous digital localization. Each content stream can use its own translation and review path while remaining part of one coordinated program.",
  },
  {
    question: "How Does an Enterprise Translation Workflow Implementation Begin?",
    answer: "Implementation typically begins with discovery and workflow design, followed by language-asset preparation and a representative pilot. After the process, roles, quality expectations, and delivery requirements are confirmed, the workflow can be configured for production and expanded to additional languages or content types.",
  },
  {
    question: "Can the Workflow Change as Our Requirements Evolve?",
    answer: "Yes. Translation workflows should evolve as content, markets, systems, quality expectations, review teams, and business priorities change. Stepes can refine workflow rules, language assets, reviewer roles, integrations, and quality controls as the program grows.",
  },
  {
    question: "Is Every Type of Content Suitable for AI Translation?",
    answer: "No single translation method is appropriate for every type of content. AI can create significant value for suitable content, especially when supported by approved language assets and managed quality controls. High-impact, technically complex, legal, regulated, safety-related, or brand-sensitive content may require more extensive professional translation, specialist review, or formal approval.",
  },
];

const workflowStages = [
  "Analyze",
  "Configure",
  "Route",
  "Translate",
  "Review",
  "Approve",
  "Deliver",
];

function PrimaryButton({ href, children }) {
  return <a className="button button-primary" href={href}>{children}</a>;
}

function SecondaryButton({ href, children }) {
  return <a className="button button-secondary" href={href}>{children}</a>;
}

const proofLabels = {
  "Content-Aware Workflow Design": "CONTENT",
  "AI + Professional Expertise": "EXPERTISE",
  "Enterprise Control": "GOVERNANCE",
  "Connected Global Operations": "OPERATIONS",
};

const designIcons = {
  "Purpose and Audience": "audience",
  "Business and Content Risk": "shield",
  "Subject Matter and Linguistic Complexity": "expert",
  "Volume and Update Frequency": "refresh",
  "Existing Language Assets": "library",
  "Systems, Stakeholders, and Approvals": "network",
};

const workflowPathLabels = {
  "AI Translation With Automated QA": "AUTOMATED QA",
  "AI Translation With Professional Human Review": "HUMAN REVIEW",
  "Professional Translation With Independent Review": "INDEPENDENT REVIEW",
  "Continuous Localization and API Automation": "CONTINUOUS",
};

const governanceIcons = {
  "Configurable Workflow Rules": "sliders",
  "Roles and Responsibilities": "users",
  "Review and Approval Stages": "approval",
  "Language-Asset Governance": "library",
  "Quality Controls": "quality",
  "Project Records and Visibility": "visibility",
  "Reporting and Continuous Improvement": "chart",
};

const contentWorkflowIcons = {
  "Marketing and Website Content": "marketing",
  "Software and Product Content": "code",
  "Technical Documentation": "document",
  "Legal, Financial, and Compliance Content": "scale",
  "Life Sciences and Regulated Content": "medical",
  "Training and Internal Communications": "learning",
  "Customer Support and Knowledge Content": "support",
};

const connectedOperationIcons = {
  "Centralized Request Intake": "inbox",
  "Translation APIs and Automation": "code",
  "Structured File Workflows": "folder",
  "Content Systems and Repositories": "database",
  "Multilingual Delivery": "send",
};

const connectedFlowStages = [
  { label: "Connect", icon: "network" },
  { label: "Route", icon: "sliders" },
  { label: "Review", icon: "approval" },
  { label: "Publish", icon: "send" },
];

const resourceModelLabels = {
  "AI Translation": "AI",
  "Professional Review": "HUMAN",
  "Quality Controls": "QA",
};

function LineIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    audience: (
      <>
        <circle cx="12" cy="8" r="3" {...common} />
        <path d="M5.5 19c.8-3.6 3-5.4 6.5-5.4s5.7 1.8 6.5 5.4" {...common} />
        <path d="M18.5 7.2c1.7.4 2.8 1.5 3.2 3.2" {...common} />
      </>
    ),
    shield: (
      <>
        <path d="M12 3.5 19 6v5.2c0 4.4-2.5 7.5-7 9.3-4.5-1.8-7-4.9-7-9.3V6l7-2.5Z" {...common} />
        <path d="m8.7 12 2.1 2.1 4.5-4.5" {...common} />
      </>
    ),
    expert: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <path d="M3.5 19c.7-3.5 2.6-5.2 5.5-5.2 1.2 0 2.2.3 3.1.8" {...common} />
        <path d="m17 12 .9 1.8 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3.9-1.8Z" {...common} />
      </>
    ),
    refresh: (
      <>
        <path d="M19 8a7.5 7.5 0 0 0-12.8-2L4 8" {...common} />
        <path d="M4 4v4h4" {...common} />
        <path d="M5 16a7.5 7.5 0 0 0 12.8 2L20 16" {...common} />
        <path d="M20 20v-4h-4" {...common} />
      </>
    ),
    library: (
      <>
        <path d="M5 4.5h11a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3V4.5Z" {...common} />
        <path d="M8 4.5V20" {...common} />
        <path d="M11 9h5M11 13h5" {...common} />
      </>
    ),
    network: (
      <>
        <circle cx="12" cy="5" r="2.2" {...common} />
        <circle cx="5" cy="18" r="2.2" {...common} />
        <circle cx="19" cy="18" r="2.2" {...common} />
        <path d="M10.9 6.9 6.1 16M13.1 6.9l4.8 9.1M7.2 18h9.6" {...common} />
      </>
    ),
    sliders: (
      <>
        <path d="M4 7h6M14 7h6M4 17h10M18 17h2" {...common} />
        <circle cx="12" cy="7" r="2" {...common} />
        <circle cx="16" cy="17" r="2" {...common} />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" {...common} />
        <path d="M3.5 19c.7-3.5 2.5-5.2 5.5-5.2s4.8 1.7 5.5 5.2" {...common} />
        <circle cx="17" cy="9" r="2.2" {...common} />
        <path d="M16 14.2c2.7.2 4.2 1.8 4.5 4.8" {...common} />
      </>
    ),
    approval: (
      <>
        <circle cx="12" cy="12" r="8" {...common} />
        <path d="m8.3 12.2 2.4 2.4 5-5" {...common} />
      </>
    ),
    quality: (
      <>
        <path d="M12 3.5 19 6v5.2c0 4.4-2.5 7.5-7 9.3-4.5-1.8-7-4.9-7-9.3V6l7-2.5Z" {...common} />
        <path d="m9.5 12.2 1.6 1.6 3.5-3.5" {...common} />
      </>
    ),
    visibility: (
      <>
        <path d="M3.5 12s3.2-5.2 8.5-5.2 8.5 5.2 8.5 5.2-3.2 5.2-8.5 5.2S3.5 12 3.5 12Z" {...common} />
        <circle cx="12" cy="12" r="2.4" {...common} />
      </>
    ),
    chart: (
      <>
        <path d="M5 20V10M12 20V4M19 20v-7" {...common} />
        <path d="M3 20h18" {...common} />
      </>
    ),
    marketing: (
      <>
        <path d="m4 13 11-5v9L4 13Z" {...common} />
        <path d="M15 9.5c2 .2 3.5 1.7 3.5 3.5S17 16.3 15 16.5" {...common} />
        <path d="m6.5 14.2 1.2 4.3h3" {...common} />
      </>
    ),
    code: (
      <>
        <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" {...common} />
      </>
    ),
    document: (
      <>
        <path d="M6 3.5h8l4 4V20.5H6V3.5Z" {...common} />
        <path d="M14 3.5v4h4M9 12h6M9 16h6" {...common} />
      </>
    ),
    scale: (
      <>
        <path d="M12 4v16M7 20h10M5 7h14" {...common} />
        <path d="m7 7-3 5h6L7 7ZM17 7l-3 5h6l-3-5Z" {...common} />
      </>
    ),
    medical: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" {...common} />
        <path d="M12 8v8M8 12h8" {...common} />
      </>
    ),
    learning: (
      <>
        <path d="m3.5 9 8.5-4 8.5 4-8.5 4-8.5-4Z" {...common} />
        <path d="M7 11.2V16c2.7 1.8 7.3 1.8 10 0v-4.8" {...common} />
      </>
    ),
    support: (
      <>
        <path d="M5 13v-1a7 7 0 0 1 14 0v1" {...common} />
        <path d="M5 13H3.5v4H7v-4H5ZM19 13h1.5v4H17v-4h2Z" {...common} />
        <path d="M17 18.5c-1.1 1-2.8 1.5-5 1.5" {...common} />
      </>
    ),
    inbox: (
      <>
        <path d="M4 5h16v14H4V5Z" {...common} />
        <path d="M4 13h4l2 3h4l2-3h4" {...common} />
      </>
    ),
    folder: (
      <>
        <path d="M3.5 6.5h7l2 2h8v10h-17v-12Z" {...common} />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="6" rx="7" ry="3" {...common} />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" {...common} />
        <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...common} />
      </>
    ),
    send: (
      <>
        <path d="m3.5 11 17-7-6.5 16-3.2-6.8L3.5 11Z" {...common} />
        <path d="m10.8 13.2 9.7-9.2" {...common} />
      </>
    ),
  };

  return (
    <svg
      className="line-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      {icons[name] || icons.document}
    </svg>
  );
}

function WorkflowCanvas() {
  return (
    <div className="workflow-canvas" aria-label="AI-powered enterprise translation workflow">
      <div className="workflow-canvas-header">
        <div>
          <span className="panel-label">Enterprise Workflow</span>
          <h3>One connected process, configured around the content</h3>
        </div>
        <span className="workflow-status"><span aria-hidden="true" />Workflow configured</span>
      </div>

      <div className="workflow-context" aria-label="Workflow context">
        <div>
          <span>Content</span>
          <strong>Product documentation</strong>
        </div>
        <div>
          <span>Quality model</span>
          <strong>Professional human review</strong>
        </div>
        <div>
          <span>Language assets</span>
          <strong>TM + approved terminology</strong>
        </div>
        <div>
          <span>Delivery</span>
          <strong>Portal or connected delivery</strong>
        </div>
      </div>

      <div className="workflow-sequence">
        {workflowStages.map((stage, index) => (
          <div className={`workflow-stage ${index === 3 ? "selected" : ""}`} key={stage}>
            <span className="stage-marker" aria-hidden="true" />
            <strong>{stage}</strong>
            {index < workflowStages.length - 1 && <span className="stage-line" aria-hidden="true" />}
          </div>
        ))}
      </div>

      <div className="workflow-support">
        <div>
          <span className="panel-label">Workflow Controls</span>
          <p>Translation memory · Terminology · Specialist linguists · Automated QA · Client approval</p>
        </div>
        <div className="current-stage">
          <span>Active stage</span>
          <strong>Translate and localize</strong>
        </div>
      </div>
    </div>
  );
}

function DesignFactorRow({ item }) {
  return (
    <article className="design-row">
      <div className="design-icon" aria-hidden="true">
        <LineIcon name={designIcons[item.title]} />
      </div>
      <div className="design-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function WorkflowPathRow({ path }) {
  return (
    <article className="path-row">
      <div className="path-title">
        <span className="path-type">{workflowPathLabels[path.title]}</span>
        <h3>{path.title}</h3>
      </div>
      <div className="path-best">
        <span className="row-label">Best Suited For</span>
        <p>{path.bestFor}</p>
      </div>
      <div className="path-config">
        <span className="row-label">How the Workflow Is Configured</span>
        <p>{path.configuration}</p>
        <div className="control-list" aria-label="Available workflow controls">
          {path.controls.map((control) => (
            <span key={control}>{control}</span>
          ))}
        </div>
        {path.note && <p className="path-note">{path.note}</p>}
      </div>
    </article>
  );
}

function OrchestrationStage({ stage }) {
  return (
    <article className="orchestration-stage">
      <span className="orchestration-number">{stage.number}</span>
      <h3>{stage.title}</h3>
      <p>{stage.text}</p>
    </article>
  );
}

function GovernanceCapability({ item }) {
  return (
    <article className={`governance-item ${item.wide ? "governance-item-wide" : ""}`}>
      <span className="governance-icon" aria-hidden="true">
        <LineIcon name={governanceIcons[item.title]} />
      </span>
      <div>
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
    </article>
  );
}

function ContentWorkflowRow({ item }) {
  return (
    <article className="content-workflow-row">
      <div className="content-workflow-title">
        <span className="content-workflow-icon" aria-hidden="true">
          <LineIcon name={contentWorkflowIcons[item.title]} />
        </span>
        <h3>{item.title}</h3>
      </div>
      <p className="content-workflow-copy">{item.text}</p>
      <div className="content-workflow-links" aria-label={`${item.title} related services`}>
        {item.links.map((link) => (
          <a className="editorial-link" href={link.href} key={link.href}>
            {link.label} <span aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </article>
  );
}

function ConnectedOperationRow({ item }) {
  return (
    <article className="connected-operation-row">
      <div className="connected-operation-title">
        <span className="connected-operation-icon" aria-hidden="true">
          <LineIcon name={connectedOperationIcons[item.title]} />
        </span>
        <h3>{item.title}</h3>
      </div>
      <div className="connected-operation-detail">
        <p>{item.text}</p>
        {item.link && (
          <a className="editorial-link" href={item.link.href}>
            {item.link.label} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  );
}

function ImplementationStage({ item }) {
  return (
    <article className="implementation-stage">
      <div className="implementation-marker">
        <span>{item.number}</span>
      </div>
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

function WhyStepesRow({ item }) {
  return (
    <article className="why-stepes-row">
      <span className="why-stepes-marker" aria-hidden="true" />
      <h3>{item.title}</h3>
      <p>{item.text}</p>
    </article>
  );
}

function RelatedSolutionRow({ item }) {
  return (
    <article className="related-solution-row">
      <div className="related-solution-copy">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
      </div>
      <a className="editorial-link" href={item.href}>
        {item.label} <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

function FaqItem({ item, index, isOpen, onToggle }) {
  const buttonId = `faq-button-${index}`;
  const panelId = `faq-panel-${index}`;

  return (
    <article className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        className="faq-question"
        id={buttonId}
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <span className="faq-question-text">{item.question}</span>
        <span className="faq-toggle" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        className="faq-answer"
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{item.answer}</p>
      </div>
    </article>
  );
}

export default function StepesAIPoweredTranslationWorkflowsSectionsOneToTwelve() {
  const [openFaq, setOpenFaq] = React.useState(0);
  return (
    <div className="stepes-wireframe">
      <style>{`
        :root {
          --stepes-magenta: #C11D63;
          --stepes-magenta-dark: #A71954;
          --stepes-magenta-deep: #7A1542;
          --stepes-blush: #FDF2F7;
          --ink: #202024;
          --ink-soft: #505058;
          --muted: #74747D;
          --border: #E2E2E7;
          --border-strong: #D2D2D9;
          --surface: #FFFFFF;
          --surface-soft: #F7F7F9;
          --dark: #252329;
          --shell: 1280px;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }

        .stepes-wireframe {
          width: 100%;
          min-width: 0;
          overflow-x: hidden;
          background: var(--surface);
          color: var(--ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
        }

        .shell {
          width: min(100%, var(--shell));
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        a { color: inherit; }

        .hero {
          padding: 104px 0 0;
          background: linear-gradient(180deg, #FFFFFF 0%, #FCFBFC 100%);
        }

        .hero-copy {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .eyebrow,
        .panel-label,
        .row-label {
          display: block;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .eyebrow { margin: 0 0 18px; }

        h1,
        h2,
        h3,
        p { margin-top: 0; }

        .hero h1 {
          max-width: 820px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.08;
          font-weight: 600;
          letter-spacing: -.035em;
        }

        .hero-lead {
          max-width: 800px;
          margin: 24px auto 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 48px;
          padding: 0 24px;
          border-radius: 999px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: transform 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .button-primary {
          color: #FFFFFF;
          background: var(--stepes-magenta);
          border: 1px solid var(--stepes-magenta);
        }

        .button-secondary {
          color: var(--ink);
          background: #FFFFFF;
          border: 1px solid var(--border-strong);
        }

        .button-primary:hover,
        .button-primary:focus-visible {
          background: var(--stepes-magenta-dark);
          transform: translateY(-1px);
        }

        .button-secondary:hover,
        .button-secondary:focus-visible {
          border-color: #9898A1;
          transform: translateY(-1px);
        }

        .hero-support {
          margin: 18px 0 0;
          color: var(--muted);
          font-size: 14px;
        }

        .workflow-canvas {
          margin-top: 58px;
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
          box-shadow: 0 22px 55px rgba(32, 32, 36, .08);
        }

        .workflow-canvas-header {
          min-height: 122px;
          padding: 30px 34px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          border-bottom: 1px solid var(--border);
        }

        .workflow-canvas-header h3 {
          max-width: 620px;
          margin: 8px 0 0;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .workflow-status {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--ink-soft);
          font-size: 14px;
          font-weight: 600;
        }

        .workflow-status span {
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--stepes-magenta);
        }

        .workflow-context {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-bottom: 1px solid var(--border);
        }

        .workflow-context > div {
          min-width: 0;
          padding: 24px 26px;
          border-right: 1px solid var(--border);
        }

        .workflow-context > div:last-child { border-right: 0; }

        .workflow-context span,
        .current-stage span {
          display: block;
          margin-bottom: 7px;
          color: var(--muted);
          font-size: 14px;
        }

        .workflow-context strong,
        .current-stage strong {
          display: block;
          font-size: 16px;
          line-height: 1.45;
        }

        .line-icon {
          width: 22px;
          height: 22px;
          display: block;
        }

        .design-icon,
        .governance-icon,
        .content-workflow-icon,
        .connected-operation-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          color: var(--stepes-magenta-dark);
          background: #F3F3F5;
          border-radius: 12px;
        }

        .workflow-sequence {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          padding: 42px 26px 38px;
          border-bottom: 1px solid var(--border);
        }

        .workflow-stage {
          position: relative;
          min-width: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 10px;
        }

        .stage-marker {
          position: relative;
          z-index: 2;
          width: 16px;
          height: 16px;
          display: block;
          border-radius: 50%;
          border: 2px solid var(--border-strong);
          background: #FFFFFF;
        }

        .workflow-stage strong {
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .stage-line {
          position: absolute;
          top: 8px;
          left: calc(50% + 8px);
          width: calc(100% - 16px);
          height: 1px;
          background: var(--border-strong);
        }

        .workflow-stage.selected .stage-marker {
          border-color: var(--stepes-magenta);
          background: var(--stepes-magenta);
          box-shadow: 0 0 0 4px var(--stepes-blush);
        }

        .workflow-stage.selected strong { color: var(--stepes-magenta-dark); }

        .workflow-support {
          display: grid;
          grid-template-columns: 1fr 320px;
          align-items: stretch;
          background: var(--surface-soft);
        }

        .workflow-support > div { padding: 26px 30px; }
        .workflow-support p { margin: 8px 0 0; color: var(--ink-soft); font-size: 16px; }

        .current-stage {
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-left: 1px solid var(--border);
          background: var(--dark);
          color: #FFFFFF;
        }

        .current-stage span { color: rgba(255, 255, 255, .62); }

        .proof-band {
          margin-top: 48px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .proof-item {
          min-height: 170px;
          padding: 30px 28px;
          border-right: 1px solid var(--border);
        }

        .proof-item:first-child { padding-left: 0; }
        .proof-item:last-child { padding-right: 0; border-right: 0; }

        .proof-kicker {
          display: block;
          margin-bottom: 18px;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .11em;
        }

        .proof-item h3 {
          margin-bottom: 10px;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -.015em;
        }

        .proof-item p { margin: 0; color: var(--ink-soft); font-size: 14px; line-height: 1.65; }

        .section {
          padding-top: 96px;
          padding-bottom: 96px;
        }

        .section-soft {
          background: var(--surface-soft);
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .section-intro {
          display: grid;
          grid-template-columns: minmax(320px, .78fr) minmax(560px, 1.22fr);
          align-items: start;
          gap: 84px;
          margin-bottom: 50px;
        }

        .section-intro h2,
        .section-heading h2 {
          max-width: 700px;
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          font-weight: 600;
          letter-spacing: -.025em;
        }

        .section-intro-copy {
          max-width: 760px;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .section-intro-copy p { margin-bottom: 18px; }
        .section-intro-copy p:last-child { margin-bottom: 0; }

        .design-panel {
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .design-column:first-child { border-right: 1px solid var(--border); }

        .design-row {
          min-height: 240px;
          display: grid;
          grid-template-columns: 48px 1fr;
          align-items: center;
          gap: 24px;
          padding: 34px 36px;
          border-bottom: 1px solid var(--border);
        }

        .design-row:last-child { border-bottom: 0; }

        .design-icon {
          align-self: center;
        }

        .design-copy h3 {
          margin-bottom: 12px;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -.02em;
        }

        .design-copy p { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.7; }

        .design-conclusion {
          margin-top: 34px;
          padding: 30px 34px;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 54px;
          color: #FFFFFF;
          background: var(--dark);
          border-radius: 24px;
        }

        .design-conclusion h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -.02em;
        }

        .design-conclusion p { margin: 0; color: rgba(255, 255, 255, .74); font-size: 16px; line-height: 1.7; }

        .section-heading {
          max-width: 880px;
          margin-bottom: 48px;
        }

        .section-heading p:last-child {
          max-width: 800px;
          margin: 20px 0 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .path-panel {
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .path-row {
          display: grid;
          grid-template-columns: 310px 290px minmax(0, 1fr);
          align-items: stretch;
          border-bottom: 1px solid var(--border);
        }

        .path-row:last-child { border-bottom: 0; }

        .path-title,
        .path-best,
        .path-config { padding: 38px 34px; }

        .path-title,
        .path-best { border-right: 1px solid var(--border); }

        .path-title {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          background: #FCFCFD;
        }

        .path-type {
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .1em;
        }

        .path-title h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -.02em;
        }

        .row-label { margin-bottom: 12px; }

        .path-best,
        .path-config {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .path-best p,
        .path-config p { margin: 0; color: var(--ink-soft); font-size: 16px; line-height: 1.7; }

        .control-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 18px;
          margin-top: 20px;
        }

        .control-list span {
          position: relative;
          padding-left: 15px;
          color: #3F3F46;
          font-size: 14px;
          line-height: 1.5;
        }

        .control-list span::before {
          content: "";
          position: absolute;
          left: 0;
          top: .72em;
          width: 7px;
          height: 2px;
          background: var(--stepes-magenta);
        }

        .path-note {
          margin-top: 20px !important;
          padding-top: 18px;
          border-top: 1px solid var(--border);
          color: var(--muted) !important;
          font-size: 14px !important;
        }

        .section-close {
          margin-top: 34px;
          padding-top: 26px;
          border-top: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
        }

        .section-close p { max-width: 800px; margin: 0; color: var(--ink-soft); font-size: 16px; }
        .section-close-single { justify-content: flex-start; }

        .editorial-link {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--stepes-magenta-dark);
          text-decoration: none;
          font-size: 16px;
          font-weight: 600;
          white-space: nowrap;
        }

        .editorial-link span { color: var(--stepes-magenta); transition: transform 160ms ease; }
        .button:focus-visible,
        .editorial-link:focus-visible {
          outline: 2px solid currentColor;
          outline-offset: 3px;
        }
        .editorial-link:hover span,
        .editorial-link:focus-visible span { transform: translateX(3px); }

        /* SECTION 4 — WORKFLOW ORCHESTRATION */
        .section-dark {
          color: #FFFFFF;
          background: var(--dark);
        }

        .section-dark .eyebrow {
          color: #F2A4C5;
        }

        .section-dark .section-intro-copy,
        .section-dark .section-heading p:last-child {
          color: rgba(255, 255, 255, .72);
        }

        .orchestration-panel {
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, .15);
          border-radius: 30px;
          background: rgba(255, 255, 255, .035);
        }

        .orchestration-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .orchestration-stage {
          min-height: 280px;
          padding: 32px 30px 36px;
          border-right: 1px solid rgba(255, 255, 255, .13);
          border-bottom: 1px solid rgba(255, 255, 255, .13);
        }

        .orchestration-stage:nth-child(4n) {
          border-right: 0;
        }

        .orchestration-stage:nth-last-child(-n + 4) {
          border-bottom: 0;
        }

        .orchestration-number {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          margin-bottom: 36px;
          padding-left: 14px;
          border-left: 3px solid var(--stepes-magenta);
          color: #F2A4C5;
          font-size: 14px;
          font-weight: 600;
        }

        .orchestration-stage h3 {
          margin-bottom: 14px;
          color: #FFFFFF;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .orchestration-stage p {
          margin: 0;
          color: rgba(255, 255, 255, .70);
          font-size: 16px;
          line-height: 1.7;
        }

        .orchestration-controls {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          border-top: 1px solid rgba(255, 255, 255, .13);
        }

        .orchestration-controls-heading {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          padding: 26px 30px;
          border-bottom: 1px solid rgba(255, 255, 255, .13);
        }

        .orchestration-controls-heading h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .orchestration-controls-heading p {
          max-width: 620px;
          margin: 0;
          color: rgba(255, 255, 255, .66);
          font-size: 16px;
        }

        .orchestration-control {
          min-height: 86px;
          display: flex;
          align-items: center;
          padding: 20px 24px;
          border-right: 1px solid rgba(255, 255, 255, .13);
          border-bottom: 1px solid rgba(255, 255, 255, .13);
          color: rgba(255, 255, 255, .84);
          font-size: 14px;
          line-height: 1.45;
          font-weight: 600;
        }

        .orchestration-control:nth-child(5n + 1) {
          border-right: 0;
        }

        .orchestration-control:nth-child(n + 7) {
          border-bottom: 0;
        }

        /* SECTION 5 — GOVERNANCE */
        .governance-panel {
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .governance-item {
          min-height: 220px;
          display: grid;
          grid-template-columns: 42px 1fr;
          align-items: center;
          gap: 24px;
          padding: 34px 36px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .governance-item:nth-child(2n) {
          border-right: 0;
        }

        .governance-item-wide {
          grid-column: 1 / -1;
          min-height: 200px;
          border-right: 0;
        }

        .governance-panel > article:last-child {
          border-bottom: 0;
        }

        .governance-icon {
          align-self: center;
        }

        .governance-item h3 {
          margin-bottom: 12px;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .governance-item p {
          max-width: 740px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        .governance-links {
          margin-top: 34px;
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 240px 1fr;
          align-items: center;
          gap: 36px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 24px;
        }

        .governance-links h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
        }

        .governance-link-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px 30px;
        }

        /* SECTION 6 — ENTERPRISE CONTENT */
        .content-workflow-panel {
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .content-workflow-row {
          display: grid;
          grid-template-columns: 300px minmax(0, 1fr) 270px;
          align-items: center;
          min-height: 205px;
          border-bottom: 1px solid var(--border);
        }

        .content-workflow-row:last-child {
          border-bottom: 0;
        }

        .content-workflow-title,
        .content-workflow-copy,
        .content-workflow-links {
          padding: 34px 32px;
        }

        .content-workflow-title {
          align-self: stretch;
          display: grid;
          grid-template-columns: 44px 1fr;
          align-items: center;
          gap: 18px;
          background: #FCFCFD;
          border-right: 1px solid var(--border);
        }

        .content-workflow-icon {
          align-self: center;
        }

        .content-workflow-title h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .content-workflow-copy {
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        .content-workflow-links {
          align-self: stretch;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 12px;
          border-left: 1px solid var(--border);
        }

        .content-workflow-links .editorial-link {
          white-space: normal;
        }

        /* SECTION 7 — CONNECTED CONTENT OPERATIONS */
        .connected-operations-panel {
          overflow: hidden;
          display: grid;
          grid-template-columns: 360px minmax(0, 1fr);
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .connected-operations-rail {
          padding: 38px 34px;
          color: #FFFFFF;
          background: var(--dark);
        }

        .connected-operations-rail .panel-label {
          color: #F2A4C5;
        }

        .connected-operations-rail h3 {
          max-width: 280px;
          margin: 16px 0 18px;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .connected-operations-rail > p {
          margin: 0;
          color: rgba(255, 255, 255, .70);
          font-size: 16px;
          line-height: 1.7;
        }

        .connected-flow {
          margin: 36px 0;
          border-top: 1px solid rgba(255, 255, 255, .16);
          border-bottom: 1px solid rgba(255, 255, 255, .16);
        }

        .connected-flow-step {
          position: relative;
          min-height: 72px;
          display: grid;
          grid-template-columns: 42px 1fr;
          align-items: center;
          gap: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, .12);
        }

        .connected-flow-step:last-child {
          border-bottom: 0;
        }

        .connected-flow-icon {
          width: 32px;
          height: 32px;
          display: grid;
          place-items: center;
          color: #F2A4C5;
        }

        .connected-flow-icon .line-icon {
          width: 20px;
          height: 20px;
        }

        .connected-flow-step strong {
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }

        .connected-operation-row {
          min-height: 170px;
          display: grid;
          grid-template-columns: 270px minmax(0, 1fr);
          align-items: center;
          border-bottom: 1px solid var(--border);
        }

        .connected-operation-row:last-child {
          border-bottom: 0;
        }

        .connected-operation-title,
        .connected-operation-detail {
          padding: 30px 34px;
        }

        .connected-operation-title {
          align-self: stretch;
          display: grid;
          grid-template-columns: 42px 1fr;
          align-items: center;
          gap: 18px;
          background: #FCFCFD;
          border-right: 1px solid var(--border);
        }

        .connected-operation-icon {
          align-self: center;
        }

        .connected-operation-title h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .connected-operation-detail p {
          max-width: 690px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        .connected-operation-detail .editorial-link {
          margin-top: 16px;
        }

        .connected-operations-close {
          margin-top: 34px;
          padding: 28px 32px;
          display: grid;
          grid-template-columns: 270px 1fr;
          align-items: center;
          gap: 42px;
          border: 1px solid var(--border);
          border-radius: 24px;
          background: #FFFFFF;
        }

        .connected-operations-close h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.35;
          font-weight: 600;
        }

        .connected-operations-close p {
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        /* SECTION 8 — IMPLEMENTATION */
        .implementation-panel {
          overflow: hidden;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .implementation-stage {
          min-width: 0;
          min-height: 270px;
          padding: 34px 32px 36px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .implementation-stage:nth-child(3n) {
          border-right: 0;
        }

        .implementation-stage:nth-last-child(-n + 3) {
          border-bottom: 0;
        }

        .implementation-marker {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 28px;
        }

        .implementation-marker span {
          width: 44px;
          height: 44px;
          display: grid;
          place-items: center;
          color: #FFFFFF;
          background: var(--stepes-magenta);
          border-radius: 50%;
          font-size: 14px;
          font-weight: 600;
        }

        .implementation-stage h3 {
          margin: 0 0 14px;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .implementation-stage p {
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.65;
        }

        .implementation-note {
          margin-top: 34px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 54px;
          padding: 30px 34px;
          color: #FFFFFF;
          background: var(--dark);
          border-radius: 24px;
        }

        .implementation-note h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.35;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .implementation-note p {
          margin: 0;
          color: rgba(255, 255, 255, .72);
          font-size: 16px;
          line-height: 1.7;
        }

        /* SECTION 9 — WHY STEPES */
        .why-stepes-layout {
          overflow: hidden;
          display: grid;
          grid-template-columns: 390px minmax(0, 1fr);
          border: 1px solid rgba(255, 255, 255, .15);
          border-radius: 30px;
          background: rgba(255, 255, 255, .035);
        }

        .why-stepes-summary {
          padding: 42px 38px;
          border-right: 1px solid rgba(255, 255, 255, .13);
        }

        .why-stepes-summary .panel-label {
          color: #F2A4C5;
        }

        .why-stepes-summary h3 {
          margin: 18px 0 18px;
          color: #FFFFFF;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.025em;
        }

        .why-stepes-summary p {
          margin: 0;
          color: rgba(255, 255, 255, .70);
          font-size: 16px;
          line-height: 1.72;
        }

        .why-stepes-summary-line {
          margin-top: 34px;
          padding-top: 26px;
          border-top: 1px solid rgba(255, 255, 255, .14);
          color: #F2A4C5;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
        }

        .why-stepes-list {
          display: grid;
          grid-template-columns: 1fr;
        }

        .why-stepes-row {
          min-height: 140px;
          display: grid;
          grid-template-columns: 16px 260px minmax(0, 1fr);
          align-items: center;
          gap: 24px;
          padding: 26px 32px;
          border-bottom: 1px solid rgba(255, 255, 255, .13);
        }

        .why-stepes-row:last-child {
          border-bottom: 0;
        }

        .why-stepes-marker {
          width: 3px;
          height: 36px;
          display: block;
          justify-self: center;
          background: var(--stepes-magenta);
          border-radius: 2px;
        }

        .why-stepes-row h3 {
          margin: 0;
          color: #FFFFFF;
          font-size: 24px;
          line-height: 1.28;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .why-stepes-row p {
          margin: 0;
          color: rgba(255, 255, 255, .70);
          font-size: 16px;
          line-height: 1.7;
        }

        /* SECTION 10 — FEATURED RESOURCE AND RELATED SOLUTIONS */
        .resource-feature {
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) 390px;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .resource-feature-copy {
          padding: 46px 46px 48px;
        }

        .resource-feature-copy h3 {
          max-width: 650px;
          margin: 16px 0 18px;
          font-size: 24px;
          line-height: 1.22;
          font-weight: 600;
          letter-spacing: -.025em;
        }

        .resource-feature-copy > p {
          max-width: 720px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 18px;
          line-height: 1.72;
        }

        .resource-guide-topics {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 34px;
          margin: 30px 0 28px;
          padding: 24px 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }

        .resource-guide-topics span {
          position: relative;
          padding: 8px 0 8px 18px;
          color: var(--ink-soft);
          font-size: 14px;
          line-height: 1.5;
        }

        .resource-guide-topics span::before {
          content: "";
          position: absolute;
          left: 0;
          top: 1.15em;
          width: 8px;
          height: 2px;
          background: var(--stepes-magenta);
        }

        .resource-feature-visual {
          position: relative;
          overflow: hidden;
          min-height: 470px;
          padding: 38px 34px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          color: #FFFFFF;
          background: var(--dark);
          border-left: 1px solid var(--border);
        }

        .resource-feature-visual::after {
          content: "";
          position: absolute;
          right: -80px;
          bottom: -90px;
          width: 250px;
          height: 250px;
          border: 1px solid rgba(242, 164, 197, .20);
          border-radius: 50%;
        }

        .resource-feature-visual .panel-label {
          color: #F2A4C5;
        }

        .resource-model {
          position: relative;
          z-index: 1;
          margin: 30px 0;
          border-top: 1px solid rgba(255, 255, 255, .16);
          border-bottom: 1px solid rgba(255, 255, 255, .16);
        }

        .resource-model-row {
          min-height: 82px;
          display: grid;
          grid-template-columns: 72px 1fr;
          align-items: center;
          gap: 16px;
          border-bottom: 1px solid rgba(255, 255, 255, .12);
        }

        .resource-model-row:last-child {
          border-bottom: 0;
        }

        .resource-model-label {
          width: fit-content;
          min-width: 42px;
          padding: 5px 8px;
          color: #F2A4C5;
          border: 1px solid rgba(255, 255, 255, .18);
          border-radius: 999px;
          font-size: 10px;
          line-height: 1.2;
          font-weight: 600;
          letter-spacing: .08em;
          text-align: center;
        }

        .resource-model-row strong {
          font-size: 16px;
          line-height: 1.4;
          font-weight: 600;
        }

        .resource-feature-visual p {
          position: relative;
          z-index: 1;
          margin: 0;
          color: rgba(255, 255, 255, .70);
          font-size: 14px;
          line-height: 1.65;
        }

        .related-solutions {
          margin-top: 46px;
        }

        .related-solutions-heading {
          display: grid;
          grid-template-columns: 320px minmax(0, 1fr);
          align-items: end;
          gap: 60px;
          margin-bottom: 24px;
        }

        .related-solutions-heading h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .related-solutions-heading p {
          max-width: 690px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        .related-solutions-panel {
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 28px;
        }

        .related-solution-row {
          min-height: 148px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 285px;
          align-items: center;
          gap: 36px;
          padding: 30px 34px;
          border-bottom: 1px solid var(--border);
        }

        .related-solution-row:last-child {
          border-bottom: 0;
        }

        .related-solution-copy h3 {
          margin: 0 0 10px;
          font-size: 24px;
          line-height: 1.3;
          font-weight: 600;
          letter-spacing: -.02em;
        }

        .related-solution-copy p {
          max-width: 650px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.7;
        }

        .related-solution-row > .editorial-link {
          justify-self: end;
          white-space: normal;
          text-align: right;
        }

        /* SECTION 11 — FAQ */
        .faq-layout {
          max-width: 1120px;
          margin: 0 auto;
        }

        .faq-panel {
          overflow: hidden;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 30px;
        }

        .faq-item {
          border-bottom: 1px solid var(--border);
        }

        .faq-item:last-child {
          border-bottom: 0;
        }

        .faq-question {
          width: 100%;
          min-height: 104px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 42px;
          align-items: center;
          gap: 22px;
          padding: 24px 30px;
          color: var(--ink);
          background: #FFFFFF;
          border: 0;
          text-align: left;
          font: inherit;
          cursor: pointer;
        }

        .faq-question:hover {
          background: #FCFCFD;
        }

        .faq-question:focus-visible {
          background: #FCFCFD;
          outline: none;
          box-shadow: inset 0 0 0 2px var(--stepes-magenta);
        }

        .faq-question-text {
          font-size: 20px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: -.012em;
        }

        .faq-toggle {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          justify-self: end;
          color: var(--stepes-magenta-dark);
          background: #FFFFFF;
          border: 1px solid var(--border-strong);
          border-radius: 50%;
          font-size: 22px;
          line-height: 1;
          font-weight: 600;
        }

        .faq-item.is-open .faq-question {
          background: #FCFCFD;
        }

        .faq-answer {
          padding: 0 94px 30px 30px;
          background: #FCFCFD;
        }

        .faq-answer p {
          max-width: 790px;
          margin: 0;
          color: var(--ink-soft);
          font-size: 16px;
          line-height: 1.75;
        }

        /* SECTION 12 — FINAL CTA */
        .final-cta-section {
          padding: 96px 0;
          background: #FFFFFF;
        }

        .final-cta {
          position: relative;
          overflow: hidden;
          min-height: 380px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          align-items: center;
          gap: 60px;
          padding: 62px 68px;
          color: #FFFFFF;
          background: var(--dark);
          border-radius: 30px;
        }

        .final-cta::before,
        .final-cta::after {
          content: "";
          position: absolute;
          border: 1px solid rgba(242, 164, 197, .16);
          border-radius: 50%;
          pointer-events: none;
        }

        .final-cta::before {
          width: 330px;
          height: 330px;
          right: -115px;
          top: -145px;
        }

        .final-cta::after {
          width: 210px;
          height: 210px;
          right: 120px;
          bottom: -140px;
        }

        .final-cta-copy {
          position: relative;
          z-index: 1;
        }

        .final-cta .eyebrow {
          margin: 0 0 18px;
          color: #F2A4C5;
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: .12em;
        }

        .final-cta h2 {
          max-width: 750px;
          margin: 0;
          font-size: 36px;
          line-height: 1.16;
          font-weight: 600;
          letter-spacing: -.03em;
        }

        .final-cta-copy > p:not(.eyebrow) {
          max-width: 760px;
          margin: 22px 0 0;
          color: rgba(255, 255, 255, .72);
          font-size: 18px;
          line-height: 1.72;
        }

        .final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 30px;
        }

        .final-cta .button-secondary {
          color: #FFFFFF;
          background: transparent;
          border-color: rgba(255, 255, 255, .40);
        }

        .final-cta .button-secondary:hover,
        .final-cta .button-secondary:focus-visible {
          border-color: #FFFFFF;
        }

        .final-cta-aside {
          position: relative;
          z-index: 1;
          padding: 30px 28px;
          background: rgba(255, 255, 255, .055);
          border: 1px solid rgba(255, 255, 255, .14);
          border-radius: 24px;
        }

        .final-cta-aside .panel-label {
          color: #F2A4C5;
        }

        .final-cta-aside ul {
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .final-cta-aside li {
          position: relative;
          padding: 13px 0 13px 18px;
          color: rgba(255, 255, 255, .82);
          border-bottom: 1px solid rgba(255, 255, 255, .11);
          font-size: 16px;
          line-height: 1.5;
        }

        .final-cta-aside li:last-child {
          border-bottom: 0;
        }

        .final-cta-aside li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 1.45em;
          width: 8px;
          height: 2px;
          background: var(--stepes-magenta);
        }

        /* CALMER SURFACE FINISH */
        .design-panel,
        .governance-panel,
        .content-workflow-panel,
        .connected-operations-panel,
        .implementation-panel,
        .resource-feature,
        .related-solutions-panel,
        .faq-panel {
          border-color: #E5E5E9;
          box-shadow: none;
        }

        .governance-links,
        .connected-operations-close {
          box-shadow: none;
        }

        .related-solutions {
          margin-top: 40px;
        }

        .related-solution-copy p {
          max-width: 720px;
        }

        @media (max-width: 1180px) {
          .shell { padding-left: 40px; padding-right: 40px; }
          .path-row { grid-template-columns: 280px 260px minmax(0, 1fr); }
          .path-title, .path-best, .path-config { padding: 34px 28px; }
          .orchestration-stage { padding-left: 24px; padding-right: 24px; }
          .content-workflow-row { grid-template-columns: 270px minmax(0, 1fr) 240px; }
          .content-workflow-title, .content-workflow-copy, .content-workflow-links { padding-left: 26px; padding-right: 26px; }
          .connected-operations-panel { grid-template-columns: 330px minmax(0, 1fr); }
          .connected-operation-row { grid-template-columns: 240px minmax(0, 1fr); }
          .connected-operation-title, .connected-operation-detail { padding-left: 28px; padding-right: 28px; }
          .implementation-stage { padding-left: 28px; padding-right: 28px; }
          .implementation-stage h3 { font-size: 22px; }
          .why-stepes-layout { grid-template-columns: 350px minmax(0, 1fr); }
          .why-stepes-row { grid-template-columns: 16px 225px minmax(0, 1fr); padding-left: 26px; padding-right: 26px; }
          .resource-feature { grid-template-columns: minmax(0, 1fr) 350px; }
          .related-solution-row { grid-template-columns: minmax(0, 1fr) 245px; }
          .final-cta { grid-template-columns: minmax(0, 1fr) 310px; padding-left: 54px; padding-right: 54px; }
        }

        @media (max-width: 980px) {
          .shell { padding-left: 24px; padding-right: 24px; }
          .hero h1 { font-size: 42px; }
          .workflow-context { grid-template-columns: 1fr 1fr; }
          .workflow-context > div:nth-child(2) { border-right: 0; }
          .workflow-context > div:nth-child(-n+2) { border-bottom: 1px solid var(--border); }
          .workflow-support { grid-template-columns: 1fr 280px; }

          .workflow-sequence {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 30px 26px;
          }
          .workflow-stage {
            min-height: 64px;
            flex-direction: row;
            align-items: center;
            text-align: left;
            gap: 14px;
          }
          .stage-line {
            top: 40px;
            left: 8px;
            width: 1px;
            height: 24px;
          }
          .proof-band { grid-template-columns: 1fr 1fr; }
          .proof-item:nth-child(2) { border-right: 0; }
          .proof-item:nth-child(-n+2) { border-bottom: 1px solid var(--border); }
          .proof-item:nth-child(3) { padding-left: 0; }
          .section-intro { grid-template-columns: 1fr; gap: 26px; }
          .section-intro h2, .section-heading h2 { font-size: 32px; }
          .design-panel { grid-template-columns: 1fr; }
          .design-column:first-child { border-right: 0; }
          .design-column:first-child .design-row:last-child { border-bottom: 1px solid var(--border); }
          .path-row { grid-template-columns: 300px minmax(0, 1fr); }
          .path-title { grid-row: 1 / span 2; border-right: 1px solid var(--border); }
          .path-best { border-right: 0; border-bottom: 1px solid var(--border); }
          .path-config { grid-column: 2; }
          .orchestration-grid { grid-template-columns: 1fr 1fr; }
          .orchestration-stage { border-right: 1px solid rgba(255, 255, 255, .13); border-bottom: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-stage:nth-child(4n) { border-right: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-stage:nth-child(2n) { border-right: 0; }
          .orchestration-stage:nth-last-child(-n + 4) { border-bottom: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-stage:nth-last-child(-n + 2) { border-bottom: 0; }
          .orchestration-controls { grid-template-columns: repeat(2, 1fr); }
          .orchestration-control { border-right: 1px solid rgba(255, 255, 255, .13); border-bottom: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-control:nth-child(5n + 1) { border-right: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-control:nth-child(2n + 1) { border-right: 0; }
          .orchestration-control:nth-child(n + 7) { border-bottom: 1px solid rgba(255, 255, 255, .13); }
          .orchestration-control:nth-child(n + 10) { border-bottom: 0; }
          .governance-panel { grid-template-columns: 1fr; }
          .governance-item, .governance-item:nth-child(2n), .governance-item-wide { grid-column: auto; border-right: 0; border-bottom: 1px solid var(--border); }
          .governance-panel > article:nth-last-child(2):not(.governance-item-wide) { border-bottom: 1px solid var(--border); }
          .governance-panel > article:last-child { border-bottom: 0; }
          .content-workflow-row { grid-template-columns: 280px minmax(0, 1fr); }
          .content-workflow-title { grid-row: 1 / span 2; }
          .content-workflow-copy { align-self: end; }
          .content-workflow-links { grid-column: 2; align-self: start; flex-direction: row; flex-wrap: wrap; padding-top: 0; border-left: 0; }
          .connected-operations-panel { grid-template-columns: 1fr; }
          .connected-operations-rail { display: grid; grid-template-columns: minmax(250px, .85fr) minmax(0, 1.15fr); gap: 38px; align-items: start; }
          .connected-operations-rail > p { grid-column: 1; }
          .connected-flow { grid-column: 2; grid-row: 1 / span 3; margin: 0; }
          .connected-operation-row { grid-template-columns: 280px minmax(0, 1fr); }
          .connected-operations-close { grid-template-columns: 230px 1fr; gap: 32px; }
          .implementation-panel { grid-template-columns: repeat(2, 1fr); }
          .implementation-stage,
          .implementation-stage:nth-child(2n),
          .implementation-stage:nth-child(3n),
          .implementation-stage:nth-last-child(-n + 2),
          .implementation-stage:nth-last-child(-n + 3) {
            min-height: 250px;
            border-right: 1px solid var(--border);
            border-bottom: 1px solid var(--border);
          }
          .implementation-stage:nth-child(2n) { border-right: 0; }
          .implementation-stage:nth-last-child(-n + 2) { border-bottom: 0; }
          .why-stepes-layout { grid-template-columns: 1fr; }
          .why-stepes-summary { border-right: 0; border-bottom: 1px solid rgba(255, 255, 255, .13); }
          .why-stepes-row { grid-template-columns: 16px 240px minmax(0, 1fr); }
          .resource-feature { grid-template-columns: 1fr; }
          .resource-feature-visual { min-height: 350px; border-left: 0; border-top: 1px solid var(--border); }
          .resource-model { display: grid; grid-template-columns: repeat(3, 1fr); }
          .resource-model-row { min-height: 96px; display: flex; flex-direction: column; align-items: flex-start; justify-content: center; gap: 6px; padding: 14px 18px; border-right: 1px solid rgba(255, 255, 255, .12); border-bottom: 0; }
          .resource-model-row:last-child { border-right: 0; }
          .related-solutions-heading { grid-template-columns: 260px minmax(0, 1fr); gap: 36px; }
          .related-solution-row { grid-template-columns: 1fr; }
          .related-solution-row > .editorial-link { grid-column: 1; justify-self: start; text-align: left; }
          .final-cta { grid-template-columns: 1fr; }
          .final-cta h2 { font-size: 32px; }
          .final-cta-aside { max-width: 760px; }
          .final-cta-aside ul { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 26px; }
        }

        @media (max-width: 680px) {
          .shell { padding-left: 20px; padding-right: 20px; }
          .hero { padding-top: 68px; }
          .hero h1 { font-size: 38px; }
          .hero-lead { font-size: 18px; line-height: 1.65; }
          .hero-actions { flex-direction: column; }
          .button { width: 100%; }
          .workflow-canvas { margin-top: 44px; border-radius: 28px; }
          .workflow-canvas-header { align-items: flex-start; flex-direction: column; padding: 26px 22px; }
          .workflow-canvas-header h3 { font-size: 20px; }
          .workflow-context { grid-template-columns: 1fr; }
          .workflow-context > div { border-right: 0; border-bottom: 1px solid var(--border); padding: 20px 22px; }
          .workflow-context > div:last-child { border-bottom: 0; }
          .workflow-sequence { grid-template-columns: 1fr; gap: 0; padding: 28px 22px; }
          .workflow-stage { min-height: 66px; flex-direction: row; align-items: center; text-align: left; gap: 14px; }
          .stage-line { top: 41px; left: 8px; width: 1px; height: 25px; }
          .workflow-support { grid-template-columns: 1fr; }
          .current-stage { border-left: 0; border-top: 1px solid var(--border); }
          .proof-band { grid-template-columns: 1fr; }
          .proof-item, .proof-item:first-child, .proof-item:nth-child(3), .proof-item:last-child { min-height: 0; padding: 26px 0; border-right: 0; border-bottom: 1px solid var(--border); }
          .proof-item:last-child { border-bottom: 0; }
          .section { padding-top: 68px; padding-bottom: 68px; }
          .section-intro h2, .section-heading h2 { font-size: 30px; }
          .section-intro-copy, .section-heading p:last-child { font-size: 18px; }
          .design-panel, .path-panel { border-radius: 28px; }
          .design-row {
            min-height: 0;
            grid-template-columns: 40px minmax(0, 1fr);
            align-items: start;
            gap: 14px 14px;
            padding: 28px 22px;
          }
          .design-icon { width: 38px; height: 38px; margin-top: 0; }
          .design-copy { display: contents; }
          .design-copy h3 {
            grid-column: 2;
            align-self: center;
            margin: 0;
          }
          .design-copy p {
            grid-column: 1 / -1;
            margin-top: 4px;
          }
          .design-copy h3, .path-title h3, .design-conclusion h3 { font-size: 20px; }
          .design-conclusion { grid-template-columns: 1fr; gap: 14px; padding: 26px 22px; border-radius: 22px; }
          .path-row { grid-template-columns: 1fr; }
          .path-title { grid-row: auto; border-right: 0; border-bottom: 1px solid var(--border); }
          .path-best { border-bottom: 1px solid var(--border); }
          .path-config { grid-column: auto; }
          .path-title, .path-best, .path-config { padding: 28px 22px; }
          .section-close { flex-direction: column; align-items: flex-start; }
          .editorial-link {
            min-height: 44px;
            white-space: normal;
          }
          .orchestration-grid { grid-template-columns: 1fr; }
          .orchestration-stage,
          .orchestration-stage:nth-child(2n),
          .orchestration-stage:nth-child(4n),
          .orchestration-stage:nth-last-child(-n + 2),
          .orchestration-stage:nth-last-child(-n + 4) {
            min-height: 0;
            padding: 28px 22px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, .13);
          }
          .orchestration-stage:last-child { border-bottom: 0; }
          .orchestration-stage {
            display: grid;
            grid-template-columns: 46px minmax(0, 1fr);
            column-gap: 14px;
            align-items: center;
          }
          .orchestration-number {
            grid-column: 1;
            margin: 0;
            padding-left: 10px;
          }
          .orchestration-stage h3 {
            grid-column: 2;
            margin: 0;
            font-size: 20px;
          }
          .orchestration-stage p {
            grid-column: 1 / -1;
            margin-top: 16px;
          }
          .orchestration-controls { grid-template-columns: 1fr; }
          .orchestration-controls-heading { align-items: flex-start; flex-direction: column; padding: 26px 22px; }
          .orchestration-controls-heading h3 { font-size: 20px; }
          .orchestration-control,
          .orchestration-control:nth-child(2n + 1),
          .orchestration-control:nth-child(5n + 1),
          .orchestration-control:nth-child(n + 7),
          .orchestration-control:nth-child(n + 10) {
            min-height: 0;
            padding: 18px 22px;
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, .13);
          }
          .orchestration-control:last-child { border-bottom: 0; }
          .governance-panel, .content-workflow-panel { border-radius: 28px; }
          .governance-item,
          .governance-item-wide {
            min-height: 0;
            grid-template-columns: 44px 1fr;
            align-items: start;
            gap: 16px;
            padding: 28px 22px;
          }
          .governance-item > div { display: contents; }
          .governance-item h3 {
            grid-column: 2;
            align-self: center;
            margin: 0;
          }
          .governance-item p {
            grid-column: 1 / -1;
            margin-top: 4px;
          }
          .governance-item h3, .content-workflow-title h3 { font-size: 20px; }
          .governance-links { grid-template-columns: 1fr; gap: 16px; padding: 26px 22px; border-radius: 22px; }
          .governance-link-list { align-items: flex-start; flex-direction: column; gap: 10px; }
          .content-workflow-row { grid-template-columns: 1fr; min-height: 0; }
          .content-workflow-title { grid-row: auto; border-right: 0; border-bottom: 1px solid var(--border); }
          .content-workflow-copy { align-self: auto; padding-top: 26px; padding-bottom: 18px; }
          .content-workflow-links { grid-column: auto; align-self: auto; flex-direction: column; padding-top: 0; padding-bottom: 28px; border-left: 0; }
          .content-workflow-title, .content-workflow-copy, .content-workflow-links { padding-left: 22px; padding-right: 22px; }
          .connected-operations-panel,
          .implementation-panel,
          .why-stepes-layout { border-radius: 28px; }
          .connected-operations-rail { display: block; padding: 30px 22px; }
          .connected-flow { margin: 30px 0; }
          .connected-operation-row { grid-template-columns: 1fr; min-height: 0; }
          .connected-operation-title { min-height: 104px; border-right: 0; border-bottom: 1px solid var(--border); }
          .connected-operation-title,
          .connected-operation-detail { padding: 26px 22px; }
          .connected-operation-title h3 { font-size: 20px; }
          .connected-operations-close { grid-template-columns: 1fr; gap: 14px; padding: 26px 22px; border-radius: 22px; }
          .implementation-panel { grid-template-columns: 1fr; }
          .implementation-stage,
          .implementation-stage:nth-child(2n),
          .implementation-stage:nth-child(3n),
          .implementation-stage:nth-last-child(-n + 2),
          .implementation-stage:nth-last-child(-n + 3) {
            min-height: 0;
            display: grid;
            grid-template-columns: 54px 1fr;
            column-gap: 18px;
            padding: 28px 22px;
            border-right: 0;
            border-bottom: 1px solid var(--border);
          }
          .implementation-stage:last-child { border-bottom: 0; }
          .implementation-marker { grid-row: 1; margin: 0; justify-content: flex-start; }
          .implementation-marker span { width: 42px; height: 42px; }
          .implementation-stage h3 {
            grid-column: 2;
            align-self: center;
            min-height: 0;
            margin: 0;
            font-size: 20px;
          }
          .implementation-stage p {
            grid-column: 1 / -1;
            margin-top: 14px;
          }
          .implementation-note { grid-template-columns: 1fr; gap: 14px; padding: 26px 22px; border-radius: 22px; }
          .implementation-note h3 { font-size: 20px; }
          .why-stepes-summary { padding: 30px 22px; }
          .why-stepes-summary h3 { font-size: 24px; }
          .why-stepes-row {
            min-height: 0;
            grid-template-columns: 12px 1fr;
            align-items: start;
            gap: 16px;
            padding: 28px 22px;
          }
          .why-stepes-row h3 {
            grid-column: 2;
            align-self: center;
            font-size: 20px;
          }
          .why-stepes-row p {
            grid-column: 1 / -1;
            margin-top: 4px;
          }
          .resource-feature,
          .faq-panel,
          .final-cta { border-radius: 28px; }
          .resource-feature-copy { padding: 30px 22px; }
          .resource-feature-copy h3 { font-size: 24px; }
          .resource-feature-copy > p { font-size: 17px; }
          .resource-guide-topics { grid-template-columns: 1fr; gap: 0; }
          .resource-feature-visual { min-height: 0; padding: 30px 22px; }
          .resource-feature-visual::after {
            right: -130px;
            bottom: -130px;
            width: 220px;
            height: 220px;
          }
          .resource-model { grid-template-columns: 1fr; }
          .resource-model-row { min-height: 70px; display: grid; grid-template-columns: 72px 1fr; align-items: center; border-right: 0; border-bottom: 1px solid rgba(255, 255, 255, .12); padding: 10px 0; }
          .resource-model-row:last-child { border-bottom: 0; }
          .related-solutions-heading { grid-template-columns: 1fr; gap: 12px; }
          .related-solution-row { min-height: 0; grid-template-columns: 1fr; align-items: start; gap: 14px; padding: 28px 22px; }
          .related-solution-copy h3 { font-size: 20px; }
          .related-solution-row > .editorial-link { grid-column: 1; }
          .faq-question { min-height: 94px; grid-template-columns: minmax(0, 1fr) 36px; gap: 12px; padding: 22px 18px; }
          .faq-question-text { font-size: 18px; }
          .faq-toggle { width: 34px; height: 34px; font-size: 20px; }
          .faq-answer { padding: 0 18px 24px; }
          .final-cta-section { padding: 72px 0; }
          .final-cta { min-height: 0; gap: 34px; padding: 42px 22px; }
          .final-cta h2 { font-size: 30px; }
          .final-cta::before { right: -190px; top: -190px; }
          .final-cta::after { right: -90px; bottom: -180px; }
          .final-cta-copy > p { font-size: 17px; }
          .final-cta-actions { flex-direction: column; }
          .final-cta-actions .button { width: 100%; }
          .final-cta-aside { padding: 26px 22px; border-radius: 22px; }
          .final-cta-aside ul { grid-template-columns: 1fr; }

          .stepes-wireframe,
          .workflow-context strong,
          .control-list span,
          .editorial-link,
          .faq-question-text,
          .resource-model-row strong {
            overflow-wrap: anywhere;
            word-break: normal;
          }
        }
      `}</style>

      <main>
        <section className="hero">
          <div className="shell">
            <div className="hero-copy">
              <p className="eyebrow">AI-Powered Translation Workflows</p>
              <h1>The Right Translation Workflow for Every Content Need</h1>
              <p className="hero-lead">
                Stepes designs and manages AI-powered translation workflows around your content, audience, quality requirements, business risk, systems, and delivery goals. Combine AI translation, translation memory, approved terminology, professional linguists, quality assurance, stakeholder approvals, and automation in one connected enterprise process.
              </p>
              <div className="hero-actions">
                <PrimaryButton href="https://www.stepes.com/contact-sales/">Talk to an Expert</PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/solutions/ai-powered-translation-workflows/#workflow-paths">Explore How It Works</SecondaryButton>
              </div>
              <p className="hero-support">From one-time translation projects to continuous multilingual content operations.</p>
            </div>

            <WorkflowCanvas />

            <div className="proof-band">
              {heroProofs.map((item) => (
                <article className="proof-item" key={item.number}>
                  <span className="proof-kicker">{proofLabels[item.title]}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="workflow-design">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Content-Aware Workflow Design</p>
                <h2>Your Content Should Determine the Workflow</h2>
              </div>
              <div className="section-intro-copy">
                <p>
                  An internal knowledge article, global marketing campaign, product interface, legal agreement, and safety-related technical manual do not carry the same requirements. Applying one translation process to every content type can add unnecessary cost to routine content while leaving higher-impact materials without the expertise and controls they require.
                </p>
                <p>
                  Stepes begins by understanding what the content needs to accomplish. We then configure the appropriate combination of AI, reusable language assets, professional translation, specialist review, quality assurance, approvals, and delivery automation.
                </p>
              </div>
            </div>

            <div className="design-panel">
              <div className="design-column">
                {designFactors.slice(0, 3).map((item) => <DesignFactorRow item={item} key={item.number} />)}
              </div>
              <div className="design-column">
                {designFactors.slice(3).map((item) => <DesignFactorRow item={item} key={item.number} />)}
              </div>
            </div>

            <aside className="design-conclusion">
              <h3>The objective is not to maximize automation on every project.</h3>
              <p>It is to apply the right level of automation, expertise, review, and control for the content’s intended use.</p>
            </aside>
          </div>
        </section>

        <section className="section" id="workflow-paths">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Flexible Translation Models</p>
              <h2>Configure the Right Translation Path for Each Content Stream</h2>
              <p>
                Stepes supports multiple translation and localization models rather than forcing every project through a single AI or human workflow. Each path can be adapted by content type, language, market, deadline, service level, and approval requirement.
              </p>
            </div>

            <div className="path-panel">
              {workflowPaths.map((path) => <WorkflowPathRow path={path} key={path.number} />)}
            </div>

            <div className="section-close section-close-single">
              <p>Each workflow can be refined by content type, quality level, language, review responsibility, and delivery requirement.</p>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="workflow-orchestration">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">End-to-End Workflow Orchestration</p>
                <h2>From Content Analysis to Multilingual Delivery</h2>
              </div>
              <div className="section-intro-copy">
                <p>
                  Stepes brings translation technology, professional language services, quality controls, and project management into one coordinated workflow. The process can be standardized across an organization while still allowing different content types to follow different translation and review paths.
                </p>
              </div>
            </div>

            <div className="orchestration-panel">
              <div className="orchestration-grid">
                {orchestrationStages.map((stage) => (
                  <OrchestrationStage stage={stage} key={stage.number} />
                ))}
              </div>

              <div className="orchestration-controls">
                <div className="orchestration-controls-heading">
                  <h3>Controls Applied Across the Workflow</h3>
                  <p>Each control can be configured by content type, language, market, quality level, stakeholder role, and delivery requirement.</p>
                </div>
                {orchestrationControls.map((control) => (
                  <div className="orchestration-control" key={control}>{control}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="enterprise-governance">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Enterprise Governance and Control</p>
                <h2>Keep Every Translation Workflow Visible and Accountable</h2>
              </div>
              <div className="section-intro-copy">
                <p>
                  Enterprise teams need to understand how content is processed, who is responsible at each stage, what quality requirements apply, and whether the translation is ready for use.
                </p>
                <p>
                  Stepes helps organizations establish clear workflow rules, reusable language assets, reviewer responsibilities, approval stages, and delivery visibility across multilingual programs.
                </p>
              </div>
            </div>

            <div className="governance-panel">
              {governanceCapabilities.map((item) => (
                <GovernanceCapability item={item} key={item.number} />
              ))}
            </div>

            <div className="governance-links">
              <h3>Explore Enterprise Workflow Controls</h3>
              <div className="governance-link-list">
                <a className="editorial-link" href="https://www.stepes.com/enterprise-translation-management/">
                  Enterprise Translation Management <span aria-hidden="true">→</span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/help/translation-memory/">
                  Translation Memory <span aria-hidden="true">→</span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/terminology-management/">
                  Terminology Management <span aria-hidden="true">→</span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/translation-qa-services/">
                  Translation Quality Assurance <span aria-hidden="true">→</span>
                </a>
                <a className="editorial-link" href="https://www.stepes.com/security-compliance/">
                  Security and Compliance <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="enterprise-content-workflows">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Content-Specific Workflows</p>
              <h2>One Connected Approach Across Your Global Content</h2>
              <p>
                The right translation model depends not only on the language pair, but also on the content’s audience, format, lifecycle, and business purpose. Stepes configures workflows across enterprise content types while maintaining shared terminology, translation memory, quality standards, and operational visibility.
              </p>
            </div>

            <div className="content-workflow-panel">
              {enterpriseContentWorkflows.map((item) => (
                <ContentWorkflowRow item={item} key={item.number} />
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="connected-content-operations">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Integrated Multilingual Delivery</p>
                <h2>Connect Translation to the Way Your Organization Works</h2>
              </div>
              <div className="section-intro-copy">
                <p>
                  Enterprise content rarely lives in one application or follows one release process. Stepes supports translation workflows that connect content intake, production, review, approval, and delivery across teams and systems.
                </p>
              </div>
            </div>

            <div className="connected-operations-panel">
              <aside className="connected-operations-rail">
                <span className="panel-label">Connected Workflow</span>
                <h3>Content moves through one coordinated operating model.</h3>
                <p>From one-time files to recurring product releases, each stage can be aligned with the systems and stakeholders that support your global content.</p>

                <div className="connected-flow" aria-label="Connected content workflow">
                  {connectedFlowStages.map((stage) => (
                    <div className="connected-flow-step" key={stage.label}>
                      <span className="connected-flow-icon" aria-hidden="true">
                        <LineIcon name={stage.icon} />
                      </span>
                      <strong>{stage.label}</strong>
                    </div>
                  ))}
                </div>
              </aside>

              <div className="connected-operations-list">
                {connectedOperations.map((item) => (
                  <ConnectedOperationRow item={item} key={item.number} />
                ))}
              </div>
            </div>

            <aside className="connected-operations-close">
              <h3>Automation Should Support the Operating Model</h3>
              <p>The objective is not automation for its own sake. It is a translation workflow that fits naturally into the way your organization creates, reviews, approves, and publishes global content.</p>
            </aside>
          </div>
        </section>

        <section className="section" id="workflow-implementation">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">From Strategy to Production</p>
              <h2>Launch the Right Translation Workflow With Confidence</h2>
              <p>
                Stepes helps organizations move from individual translation projects to repeatable multilingual operations through a structured implementation process.
              </p>
            </div>

            <div className="implementation-panel">
              {implementationStages.map((item) => (
                <ImplementationStage item={item} key={item.number} />
              ))}
            </div>

            <aside className="implementation-note">
              <h3>Start With a Representative Content Stream</h3>
              <p>The scope can begin with one content type or a focused pilot and expand as the workflow, quality expectations, reviewer roles, and operating model are confirmed.</p>
            </aside>
          </div>
        </section>

        <section className="section section-dark" id="why-stepes">
          <div className="shell">
            <div className="section-intro">
              <div>
                <p className="eyebrow">Why Stepes</p>
                <h2>One Translation Partner. The Right Workflow for Every Content Need.</h2>
              </div>
              <div className="section-intro-copy">
                <p>
                  Stepes brings together AI-powered translation technology, professional linguists, workflow automation, language assets, quality assurance, project management, and connected delivery in one enterprise solution.
                </p>
              </div>
            </div>

            <div className="why-stepes-layout">
              <aside className="why-stepes-summary">
                <span className="panel-label">One Connected Solution</span>
                <h3>Technology, expertise, and governance working as one system.</h3>
                <p>
                  Configure the right combination of automation, professional review, enterprise controls, and managed delivery for each content stream.
                </p>
                <div className="why-stepes-summary-line">
                  From individual projects to ongoing multilingual operations.
                </div>
              </aside>

              <div className="why-stepes-list">
                {whyStepesItems.map((item) => (
                  <WhyStepesRow item={item} key={item.number} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="featured-guide">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Practical Translation Guide</p>
              <h2>Go Deeper: How AI and Human Review Work Together</h2>
              <p>
                Explore the methodology behind enterprise AI translation, professional linguistic review, reusable language assets, and content-aware quality controls.
              </p>
            </div>

            <div className="resource-feature">
              <div className="resource-feature-copy">
                <span className="panel-label">Featured Resource</span>
                <h3>AI + Human Translation Workflows: A Practical Enterprise Guide</h3>
                <p>
                  Learn how AI translation, translation memory, terminology management, automated QA, and professional human review work together across repeatable, customer-facing, and higher-impact enterprise content.
                </p>

                <div className="resource-guide-topics" aria-label="Guide topics">
                  <span>What AI does well in translation workflows</span>
                  <span>Where professional review adds value</span>
                  <span>How language assets improve consistency</span>
                  <span>How controls change with content risk</span>
                  <span>How hybrid workflows support scale</span>
                </div>

                <a
                  className="editorial-link"
                  href="https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/"
                >
                  AI + Human Translation Workflow Guide <span aria-hidden="true">→</span>
                </a>
              </div>

              <aside className="resource-feature-visual">
                <span className="panel-label">Workflow Methodology</span>
                <div className="resource-model">
                  {["AI Translation", "Professional Review", "Quality Controls"].map((item) => (
                    <div className="resource-model-row" key={item}>
                      <span className="resource-model-label">{resourceModelLabels[item]}</span>
                      <strong>{item}</strong>
                    </div>
                  ))}
                </div>
                <p>Match the level of automation and human oversight to the purpose, audience, and risk of the content.</p>
              </aside>
            </div>

            <div className="related-solutions">
              <div className="related-solutions-heading">
                <h3>Explore Related Enterprise Solutions</h3>
                <p>Connect workflow design with the platform, operating model, and program controls that support multilingual content at scale.</p>
              </div>

              <div className="related-solutions-panel">
                {relatedSolutions.map((item) => (
                  <RelatedSolutionRow item={item} key={item.href} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="workflow-faqs">
          <div className="shell">
            <div className="section-heading">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2>AI-Powered Translation Workflow FAQs</h2>
              <p>
                Understand how Stepes configures enterprise translation workflows around content, systems, reviewers, quality requirements, and delivery goals.
              </p>
            </div>

            <div className="faq-layout">
              <div className="faq-panel">
                {workflowFaqs.map((item, index) => (
                  <FaqItem
                    item={item}
                    index={index}
                    isOpen={openFaq === index}
                    onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
                    key={item.question}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="final-cta-section" id="build-your-workflow">
          <div className="shell">
            <div className="final-cta">
              <div className="final-cta-copy">
                <p className="eyebrow">Build Your Translation Workflow</p>
                <h2>Design the Right Translation Workflow for Your Global Content</h2>
                <p>
                  Talk with Stepes about your content types, languages, systems, reviewers, quality requirements, and delivery goals. We will help you determine where AI automation creates value, where professional expertise is essential, and how the complete workflow can scale across your organization.
                </p>

                <div className="final-cta-actions">
                  <PrimaryButton href="https://www.stepes.com/contact-sales/">
                    Talk to an Expert
                  </PrimaryButton>
                  <SecondaryButton href="https://www.stepes.com/online-translation-quote/">
                    Get an Instant Quote
                  </SecondaryButton>
                </div>
              </div>

              <aside className="final-cta-aside">
                <span className="panel-label">Built Around Your Needs</span>
                <ul>
                  <li>Content types and languages</li>
                  <li>Quality and review requirements</li>
                  <li>Systems and delivery channels</li>
                  <li>One-time or ongoing programs</li>
                </ul>
              </aside>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
