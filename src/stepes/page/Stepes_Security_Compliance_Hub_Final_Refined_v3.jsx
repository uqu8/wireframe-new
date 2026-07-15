import React from "react";

const ArrowIcon = ({ size = 16 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    <path
      d="M14 7L19 12L14 17"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3L19 6V11.5C19 16.1 16.1 19.4 12 21C7.9 19.4 5 16.1 5 11.5V6L12 3Z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
    <path d="M9 12L11 14L15.5 9.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ComplianceIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 3.5H17V20.5H7V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    <path d="M9.5 8H14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M9.5 12H14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M9.5 16H12.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M9.5 3.5V2.5H14.5V3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const GovernanceIcon = () => (
  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="5" r="2.25" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="5" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="19" cy="18" r="2.25" stroke="currentColor" strokeWidth="1.7" />
    <path d="M10.8 6.9L6.2 16.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M13.2 6.9L17.8 16.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path d="M7.3 18H16.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const WorkflowNode = ({ label, detail, state = "neutral" }) => (
  <div className={`sc-workflow-node sc-workflow-node--${state}`}>
    <span className="sc-workflow-dot" aria-hidden="true" />
    <div>
      <strong>{label}</strong>
      <span>{detail}</span>
    </div>
  </div>
);

const controlItems = [
  "Access Control",
  "AI Governance",
  "Language Assets",
  "Retention & Deletion",
];

const trustItems = [
  {
    title: "100+ Languages",
    text: "Support multilingual programs across major global and regional markets.",
  },
  {
    title: "ISO-Certified Quality Systems",
    text: "Apply documented translation and quality-management processes.",
  },
  {
    title: "AI + Human Workflows",
    text: "Route content according to risk, quality, confidentiality, and business requirements.",
  },
  {
    title: "Enterprise Governance",
    text: "Support defined roles, approvals, language assets, reporting, and workflow controls.",
  },
];

const frameworkItems = [
  {
    title: "Security Protects Content and Systems",
    icon: <ShieldIcon />,
    text: "Translation security includes the technical and operational controls used to protect source files, translated content, user accounts, integrations, translation memories, terminology databases, project communications, and delivery packages.",
    bullets: [
      "Authorized access and user authentication",
      "Secure file exchange and confidentiality obligations",
      "Infrastructure protection, retention, and deletion",
      "Language-asset ownership and approved AI use",
      "Incident and escalation procedures",
    ],
  },
  {
    title: "Compliance Connects Workflows to Requirements",
    icon: <ComplianceIcon />,
    text: "Compliance concerns the legal, regulatory, contractual, industry, and internal requirements that apply to a multilingual project. The appropriate workflow varies according to the content, jurisdiction, audience, data type, delivery method, and role of each organization involved.",
    note: "A process suitable for public marketing content may not be appropriate for patient information, legal records, financial communications, product labeling, or confidential corporate materials.",
  },
  {
    title: "Governance Defines How Decisions Are Made",
    icon: <GovernanceIcon />,
    text: "Governance establishes responsibility and accountability across the multilingual content lifecycle. A well-governed program defines who classifies content, approves technology, assigns human review, controls language assets, authorizes access, approves releases, and manages retention.",
    note: "Together, security, compliance, and governance create a controlled operating model for multilingual content.",
  },
];


const TopicIcon = ({ name }) => {
  const paths = {
    lock: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2.5" />
        <path d="M8 10V7.5C8 5.3 9.8 3.5 12 3.5C14.2 3.5 16 5.3 16 7.5V10" />
        <path d="M12 14V16.5" />
      </>
    ),
    ai: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="3" />
        <path d="M9 2.8V6M15 2.8V6M9 18V21.2M15 18V21.2M2.8 9H6M18 9H21.2M2.8 15H6M18 15H21.2" />
        <path d="M9.2 12H14.8M12 9.2V14.8" />
      </>
    ),
    privacy: (
      <>
        <circle cx="12" cy="8" r="3.2" />
        <path d="M6.5 20V17.8C6.5 14.8 8.9 12.5 12 12.5C15.1 12.5 17.5 14.8 17.5 17.8V20" />
        <path d="M17 5.5L19 7.5L22 4.5" />
      </>
    ),
    regulated: (
      <>
        <path d="M7 3.5H17V20.5H7V3.5Z" />
        <path d="M9.5 8H14.5M9.5 12H14.5M9.5 16H12.5" />
        <path d="M15.5 15.5L17 17L20 13.8" />
      </>
    ),
    vendor: (
      <>
        <path d="M4 20V7.5L12 3L20 7.5V20" />
        <path d="M8 20V13H16V20M8 9.5H8.01M12 9.5H12.01M16 9.5H16.01" />
        <path d="M3 20H21" />
      </>
    ),
    audit: (
      <>
        <path d="M5 5.5H12M5 10.5H12M5 15.5H9" />
        <circle cx="15.5" cy="15.5" r="4" />
        <path d="M18.5 18.5L21 21" />
      </>
    ),
    data: (
      <>
        <ellipse cx="12" cy="5.5" rx="6.5" ry="2.8" />
        <path d="M5.5 5.5V11.5C5.5 13 8.4 14.3 12 14.3C15.6 14.3 18.5 13 18.5 11.5V5.5" />
        <path d="M5.5 11.5V17.5C5.5 19 8.4 20.3 12 20.3C15.6 20.3 18.5 19 18.5 17.5V11.5" />
      </>
    ),
    access: (
      <>
        <circle cx="8" cy="8" r="3" />
        <path d="M3.8 19V17.4C3.8 14.7 5.7 12.8 8 12.8C10.3 12.8 12.2 14.7 12.2 17.4V19" />
        <path d="M14 10.5H21M18.5 8L21 10.5L18.5 13" />
      </>
    ),
    technology: (
      <>
        <rect x="4" y="5" width="16" height="11" rx="2" />
        <path d="M8 20H16M12 16V20" />
        <path d="M8 9H16M8 12H12" />
      </>
    ),
    workflow: (
      <>
        <circle cx="5" cy="6" r="2" />
        <circle cx="19" cy="12" r="2" />
        <circle cx="5" cy="18" r="2" />
        <path d="M7 6H11C14 6 14 12 17 12M7 18H11C14 18 14 12 17 12" />
      </>
    ),
    assurance: (
      <>
        <path d="M12 3L19 6V11.5C19 16 16.2 19.2 12 21C7.8 19.2 5 16 5 11.5V6L12 3Z" />
        <path d="M8.7 12L10.8 14.1L15.5 9.4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </g>
    </svg>
  );
};

const priorityItems = [
  {
    icon: "lock",
    title: "Data Security and Confidentiality",
    text: "Protect source content, translations, project communications, and supporting materials through controlled intake, authorized access, secure delivery, retention, deletion, and responsible language-asset reuse.",
    link: "Explore Data Security",
    href: "https://www.stepes.com/security-and-compliance/#data-security",
  },
  {
    icon: "ai",
    title: "AI Translation Security and Governance",
    text: "Evaluate translation models, approve technology providers, classify content, control data use, establish human oversight, and keep sensitive information out of unauthorized AI systems.",
    link: "Explore AI Translation Governance",
    href: "https://www.stepes.com/security-and-compliance/#ai-translation-security",
  },
  {
    icon: "privacy",
    title: "Privacy and Personal Information",
    text: "Build privacy considerations into multilingual workflows involving customer, patient, employee, applicant, or user information through data minimization, restricted access, and defined retention.",
    link: "Explore Translation Privacy",
    href: "https://www.stepes.com/security-and-compliance/#privacy-and-personal-information",
  },
  {
    icon: "regulated",
    title: "Regulated Content and Compliance",
    text: "Apply appropriate translation, review, approval, and documentation controls to healthcare, life sciences, financial, legal, government, and other compliance-sensitive content.",
    link: "Explore Regulated Content",
    href: "https://www.stepes.com/security-and-compliance/#regulated-content",
  },
  {
    icon: "vendor",
    title: "Vendor Risk and Procurement",
    text: "Assess provider security, linguist controls, subcontractor oversight, AI policies, language-asset ownership, documentation, service continuity, and escalation planning.",
    link: "Explore Vendor Evaluation",
    href: "https://www.stepes.com/security-and-compliance/#security-evaluation-checklist",
  },
  {
    icon: "audit",
    title: "Quality, Auditability, and Workflow Control",
    text: "Connect security with defined roles, terminology, translation memories, review stages, version control, approvals, quality records, and documented delivery.",
    link: "Explore Workflow Governance",
    href: "https://www.stepes.com/security-and-compliance/#multilingual-content-lifecycle",
  },
];

const operatingModelItems = [
  {
    icon: "data",
    title: "Protect the Data",
    text: "Classify the information entering the workflow, including visible content, metadata, comments, tracked changes, reference files, audio, terminology, and translation memories.",
  },
  {
    icon: "access",
    title: "Control Access",
    text: "Limit content access to authorized people, systems, and organizations performing an approved role, and remove access promptly when it is no longer required.",
  },
  {
    icon: "technology",
    title: "Govern the Technology",
    text: "Approve the platforms, translation engines, AI models, APIs, integrations, processing terms, and content categories permitted for each workflow.",
  },
  {
    icon: "workflow",
    title: "Standardize the Workflow",
    text: "Define how content moves through intake, translation, review, approval, delivery, retention, and reuse so teams do not create unmanaged processes.",
  },
  {
    icon: "assurance",
    title: "Maintain Assurance",
    text: "Use documented procedures, vendor qualification, project records, escalation, corrective actions, reviews, and continuous improvement to verify that controls operate as intended.",
  },
];

const lifecycleItems = [
  {
    number: "01",
    stage: "Content Intake",
    focus: "Classify content and requirements",
    text: "Confirm the content owner, intended use, target languages, sensitivity, authorized requestor, applicable requirements, metadata, and client-specific handling instructions before work begins.",
  },
  {
    number: "02",
    stage: "Workflow Design",
    focus: "Match the process to business risk",
    text: "Select the right combination of AI translation, professional translation, post-editing, specialist review, in-country approval, and quality assurance based on confidentiality, audience, impact, and consequences of error.",
  },
  {
    number: "03",
    stage: "Technology and Model Routing",
    focus: "Use approved translation technology",
    text: "Choose authorized engines or models, confirm permitted data use, apply terminology, restrict ineligible content, control integrations, and document where human review is required.",
  },
  {
    number: "04",
    stage: "Linguist and Reviewer Assignment",
    focus: "Authorize qualified human access",
    text: "Assign professionals according to language, subject matter, content sensitivity, and review responsibilities while limiting distribution to the people needed for the approved workflow.",
  },
  {
    number: "05",
    stage: "Translation and Localization",
    focus: "Protect every derivative asset",
    text: "Secure drafts, bilingual files, screenshots, comments, extracted strings, repositories, APIs, staging environments, and release permissions—not only the original source document.",
  },
  {
    number: "06",
    stage: "Review and Approval",
    focus: "Make feedback and decisions traceable",
    text: "Define review roles and version controls to prevent unauthorized changes, conflicting edits, outdated files, unapproved terminology, missing feedback, and incorrect content entering production.",
  },
  {
    number: "07",
    stage: "Delivery and Publication",
    focus: "Verify the approved release",
    text: "Confirm the correct language, version, format, destination, and recipient; validate delivery packages; and remove unintended comments, tracked changes, hidden text, or metadata where required.",
  },
  {
    number: "08",
    stage: "Retention, Reuse, and Deletion",
    focus: "Define post-project handling",
    text: "Determine how source files, translations, working files, communications, translation memories, termbases, quality records, AI output, and reference materials may be reused, archived, returned, restricted, or deleted.",
  },
];

const aiQuestions = [
  "What organization provides the underlying model or translation engine?",
  "Where and how is multilingual content processed?",
  "Is submitted content, prompt data, or output retained?",
  "Can customer data be used to train or improve the model?",
  "Can the enterprise approve or restrict specific models?",
  "Are integrations and API credentials appropriately controlled?",
  "Can confidential, personal, or regulated content be excluded?",
  "Is professional human review available when the content requires it?",
  "How are approved terminology and language assets applied?",
  "Can workflow decisions, approvals, and quality results be documented?",
  "How are changes to the model or service communicated?",
  "What happens to project data after translation is complete?",
];

const riskTiers = [
  {
    label: "Routine and Reversible",
    title: "Approved AI With Targeted Validation",
    text: "Public, low-risk, or internally informational content may be suitable for approved AI translation with automated checks or focused human review when it will not be published without further validation.",
  },
  {
    label: "Business-Sensitive",
    title: "Professional Review and Approval",
    text: "Customer-facing, brand-sensitive, contractual, technical, or operational content often requires professional post-editing, terminology control, and defined approval based on business impact and confidentiality.",
  },
  {
    label: "Regulated and High-Impact",
    title: "Qualified Human Oversight",
    text: "Medical, legal, financial, safety-related, regulatory, and other high-impact content generally requires tighter controls, specialist resources, documented quality assurance, and formal approval or validation.",
  },
];


const languageAssetItems = [
  {
    icon: "lock",
    label: "Content Protection",
    title: "Source and Translated Content",
    text: "A translation can contain the same confidential, personal, or regulated information as the source—and may be distributed to additional teams, markets, vendors, or publishing systems. Security requirements should apply to source files, drafts, review copies, and final deliverables.",
  },
  {
    icon: "data",
    label: "Reusable Language Data",
    title: "Translation Memories",
    text: "Translation memories improve consistency, speed, and cost efficiency by reusing approved bilingual segments. Because they may also contain confidential language, organizations should define ownership, permitted reuse, access, segregation, retention, export, and deletion.",
    bullets: [
      "Separate assets by client, department, or program where appropriate",
      "Exclude sensitive projects or segments from reuse when required",
      "Define export, return, and deletion rights before a vendor transition",
    ],
  },
  {
    icon: "audit",
    label: "Approved Terminology",
    title: "Terminology Databases",
    text: "Termbases may contain product names, internal terminology, medical concepts, legal language, brand guidance, or unreleased information. Access and reuse should align with the confidentiality and ownership requirements of the underlying content.",
  },
  {
    icon: "workflow",
    label: "Project Context",
    title: "Comments, Feedback, and Supporting Files",
    text: "Reviewer comments, screenshots, reference materials, audio files, test credentials, and product-roadmap information may reveal sensitive context that does not appear in the final translation. A secure workflow evaluates the complete project package, not only the primary document.",
  },
  {
    icon: "privacy",
    label: "Personal Information",
    title: "Privacy-Aware Translation",
    id: "privacy-and-personal-information",
    text: "Translation does not remove privacy obligations. Personal information remains personal information in another language, and the appropriate controls depend on the data, jurisdiction, processing role, and purpose.",
    bullets: [
      "Use data minimization, redaction, or pseudonymization where appropriate",
      "Restrict processing to approved environments and authorized users",
      "Define retention, cross-border handling, and contractual protections",
    ],
  },
];

const standardsItems = [
  {
    category: "Translation Standard",
    title: "ISO 17100 and Translation Services",
    text: "ISO 17100 establishes requirements for translation service processes, resources, and professional competencies. It can help enterprise buyers assess whether a provider follows structured production steps and defined quality controls, alongside separate security, privacy, technology, and industry requirements.",
  },
  {
    category: "Quality Management",
    title: "ISO 9001 and Quality Management",
    text: "ISO 9001 provides a framework for documented procedures, accountability, issue handling, corrective action, performance monitoring, and continuous improvement across multilingual operations.",
  },
  {
    category: "Medical Devices",
    title: "ISO 13485 and Medical-Device Quality Systems",
    text: "For medical-device content, ISO 13485 can inform document control, supplier qualification, change management, traceability, corrective action, and the handling of regulated product information within the manufacturer's broader quality system.",
  },
  {
    category: "Data Privacy",
    title: "GDPR-Sensitive Multilingual Workflows",
    text: "Translation programs involving personal data may need to address processing roles, data minimization, international transfers, contractual terms, access restrictions, retention, and data-subject rights. Privacy and legal teams should define the requirements for each workflow.",
  },
  {
    category: "Healthcare Privacy",
    title: "HIPAA-Sensitive Healthcare Translation",
    text: "Healthcare translation in the United States may involve protected health information. The required controls depend on the organizations, data, purpose, technology, access model, and contractual relationship involved in the specific workflow.",
  },
  {
    category: "Responsible AI",
    title: "AI Governance and Emerging Requirements",
    text: "AI translation governance should address model risk, data use, human oversight, transparency, quality, and intended use. Policies should be reviewed as technologies, regulatory expectations, and enterprise use cases evolve.",
  },
  {
    category: "Enterprise Requirements",
    title: "Client-Specific Security and Compliance Requirements",
    text: "Many organizations maintain requirements beyond general standards, including hosting restrictions, approved personnel, vendor assessments, segregated language assets, retention periods, secure deletion, incident timelines, business continuity, audit rights, and prohibited AI tools.",
  },
];

const industryRiskItems = [
  {
    sector: "Life Sciences",
    title: "Life Sciences and Medical Devices",
    text: "Clinical research, regulatory submissions, labeling, instructions for use, patient communications, quality systems, and pharmacovigilance may require controlled documents, qualified resources, terminology, traceability, version management, and documented approval.",
  },
  {
    sector: "Healthcare",
    title: "Healthcare",
    text: "Patient records, consent materials, medical communications, digital health applications, care instructions, and insurance information require workflows that reflect the sensitivity of health data and the impact of unclear communication.",
  },
  {
    sector: "Legal",
    title: "Legal and Compliance",
    text: "Contracts, litigation, investigations, intellectual property, employment matters, and regulatory communications may require restricted access, attorney-directed workflows, precise terminology, version control, and rapid escalation.",
  },
  {
    sector: "Financial Services",
    title: "Financial Services and Insurance",
    text: "Customer data, financial disclosures, policies, claims, anti-fraud materials, internal controls, and product communications require careful handling and jurisdiction-appropriate terminology.",
  },
  {
    sector: "Public Sector",
    title: "Government and Public Sector",
    text: "Citizen services, public notices, legal materials, emergency communications, procurement, and sensitive administrative information may carry agency-, jurisdiction-, and classification-specific requirements.",
  },
  {
    sector: "Technology",
    title: "Software, SaaS, and AI",
    text: "Localization connects content with repositories, APIs, staging systems, credentials, screenshots, user data, and release permissions. Secure programs govern both linguistic assets and the development environments around them.",
  },
  {
    sector: "Manufacturing",
    title: "Manufacturing and Technical Content",
    text: "Technical manuals, safety information, specifications, training, maintenance content, and software interfaces may expose intellectual property, unreleased products, engineering terminology, supplier data, and safety-critical instructions.",
  },
  {
    sector: "Corporate",
    title: "Corporate and Employee Communications",
    text: "Strategy, financial information, HR materials, policies, executive communications, restructuring plans, and employee records should be classified by actual sensitivity rather than treated as low risk simply because they are internal.",
  },
];

const checklistGroups = [
  {
    title: "Content and Data Handling",
    questions: [
      "How does the provider receive, store, process, and deliver content?",
      "Can sensitive projects follow a different workflow from routine content?",
      "How are metadata, comments, reference files, and extracted content handled?",
      "Are retention, deletion, and client-specific handling options clearly defined?",
    ],
  },
  {
    title: "User Access",
    questions: [
      "How are client users, project managers, linguists, reviewers, and administrators authenticated?",
      "Can access be limited by account, project, language, role, or content type?",
      "Are sensitive projects visible only to assigned personnel?",
      "How is access removed when a project or relationship ends?",
    ],
  },
  {
    title: "Linguist and Reviewer Controls",
    questions: [
      "How are linguists and reviewers qualified for the language, subject, and risk level?",
      "Are confidentiality obligations and controlled assignment procedures in place?",
      "How does the provider govern subcontracting, conflicts, and geographic restrictions?",
      "Can specialist resources or restricted assignment criteria be required?",
    ],
  },
  {
    title: "AI and Machine Translation",
    questions: [
      "Which engines or models may process client content, and can specific technologies be prohibited?",
      "Is content retained or used for model training or service improvement?",
      "Can AI use be disabled for selected projects or content categories?",
      "How are human review, model changes, and approved terminology governed?",
    ],
  },
  {
    title: "Translation Memories and Terminology",
    questions: [
      "Who owns the language assets, and how are they segregated?",
      "Can content from one customer, department, or program be reused elsewhere?",
      "Can the client export its translation memories and terminology?",
      "How are sensitive assets restricted, retained, returned, or deleted?",
    ],
  },
  {
    title: "Integrations and APIs",
    questions: [
      "What systems can connect to the translation environment?",
      "How are API credentials, permissions, logs, and monitoring managed?",
      "Can access be limited to the minimum content required?",
      "How are test and production environments separated and integrations disabled?",
    ],
  },
  {
    title: "Quality and Approval",
    questions: [
      "Which translation, editing, review, and quality-assurance stages are available?",
      "How are terminology, style, and client instructions applied?",
      "Can approval roles, version history, and quality records be maintained?",
      "How are issues documented, escalated, corrected, and prevented from recurring?",
    ],
  },
  {
    title: "Compliance and Documentation",
    questions: [
      "Which certifications, policies, and process documents are available for review?",
      "Can the provider complete security questionnaires and vendor-assurance reviews?",
      "What terms apply to data, confidentiality, AI, subcontractors, and audit rights?",
      "Can the provider supply documentation relevant to the requested workflow?",
    ],
  },
  {
    title: "Incident Management and Continuity",
    questions: [
      "How are security or confidentiality concerns reported and escalated?",
      "What notification, corrective-action, and preventive-action processes apply?",
      "How are urgent or high-volume projects reassigned securely during disruption?",
      "Are language assets, records, and business-critical support recoverable across regions?",
    ],
  },
];


const resourceGroups = [
  {
    category: "Foundational Guidance",
    description: "Build a practical baseline for provider security, confidentiality, and control of reusable language assets.",
    resources: [
      {
        title: "How to Evaluate the Security of a Translation Provider",
        text: "Examine infrastructure, user access, linguist confidentiality, AI use, language assets, integrations, retention, and incident management.",
        href: "https://www.stepes.com/resources/security-and-compliance/evaluate-translation-provider-security/",
      },
      {
        title: "Translation Confidentiality and NDA Best Practices",
        text: "Understand how confidentiality obligations, professional assignment, supporting files, and downstream delivery affect multilingual content protection.",
        href: "https://www.stepes.com/resources/security-and-compliance/translation-confidentiality-nda-best-practices/",
      },
      {
        title: "Translation Memory Security, Ownership, and Controlled Reuse",
        text: "Govern ownership, access, segregation, reuse, export, retention, and deletion for valuable bilingual language assets.",
        href: "https://www.stepes.com/resources/security-and-compliance/translation-memory-security-ownership/",
      },
    ],
  },
  {
    category: "AI and Data Governance",
    description: "Evaluate how models, human access, and post-project data handling affect enterprise translation risk.",
    resources: [
      {
        title: "Enterprise AI Translation Security: What Buyers Should Evaluate",
        text: "Review model selection, data retention, training use, approved content, human oversight, and workflow accountability.",
        href: "https://www.stepes.com/resources/security-and-compliance/enterprise-ai-translation-security/",
      },
      {
        title: "Human Access Controls in AI-Powered Translation",
        text: "Combine AI efficiency with authorized professional review while limiting unnecessary access to confidential content.",
        href: "https://www.stepes.com/resources/security-and-compliance/human-access-controls-ai-translation/",
      },
      {
        title: "Data Retention and Deletion in Multilingual Workflows",
        text: "Define how source files, translations, language assets, project records, and AI output are retained or removed.",
        href: "https://www.stepes.com/resources/security-and-compliance/data-retention-deletion-multilingual-workflows/",
      },
    ],
  },
  {
    category: "Regulated and High-Impact Content",
    description: "Apply stronger controls where privacy, regulation, safety, or business impact changes the translation risk.",
    resources: [
      {
        title: "Secure Translation Workflows for Regulated Content",
        text: "Connect content classification, specialist assignment, approved technology, review, approval, and documentation.",
        href: "https://www.stepes.com/resources/security-and-compliance/secure-translation-regulated-content/",
      },
      {
        title: "GDPR-Sensitive Translation: Practical Workflow Considerations",
        text: "Review personal data, processing roles, access, international workflows, retention, and vendor management.",
        href: "https://www.stepes.com/resources/security-and-compliance/gdpr-sensitive-translation-workflows/",
      },
      {
        title: "HIPAA-Sensitive Translation for Healthcare Content",
        text: "Identify the workflow questions healthcare organizations should address before translating protected health information.",
        href: "https://www.stepes.com/resources/security-and-compliance/hipaa-sensitive-healthcare-translation/",
      },
    ],
  },
  {
    category: "Buyer and Governance Toolkits",
    description: "Give procurement, security, localization, and program teams practical frameworks for evaluation and oversight.",
    resources: [
      {
        title: "A Procurement Checklist for Enterprise Translation Security",
        text: "Compare providers across confidentiality, technology, AI, quality, language assets, documentation, and resilience.",
        href: "https://www.stepes.com/resources/security-and-compliance/enterprise-translation-security-procurement-checklist/",
      },
      {
        title: "Audit Trails, Approvals, and Multilingual Content Governance",
        text: "Use defined roles, version histories, quality records, and approval controls to strengthen accountability.",
        href: "https://www.stepes.com/resources/security-and-compliance/multilingual-content-governance-audit-trails/",
      },
      {
        title: "Secure Translation APIs and Connected Localization Workflows",
        text: "Evaluate repositories, content systems, credentials, permissions, staging environments, and automated publishing.",
        href: "https://www.stepes.com/resources/security-and-compliance/secure-translation-apis-localization-workflows/",
      },
    ],
  },
];

const stepesSupportItems = [
  {
    title: "Enterprise Security",
    text: "Review how Stepes approaches confidential file handling, authorized access, secure workflows, language assets, infrastructure, privacy-sensitive content, and vendor assurance.",
    link: "Explore Stepes Security",
    href: "https://www.stepes.com/security/",
  },
  {
    title: "AI + Human Translation Workflows",
    text: "Match AI translation, professional post-editing, specialist review, and quality assurance to the purpose and risk of each content type.",
    link: "Explore AI + Human Workflows",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    title: "Enterprise Translation Management",
    text: "Centralize requests, workflows, terminology, translation memories, approvals, reporting, and multilingual program governance across teams and markets.",
    link: "Explore Enterprise Translation Management",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    title: "Translation Quality System",
    text: "Connect qualified linguistic resources, defined review processes, quality assurance, terminology governance, and continuous improvement.",
    link: "Explore the Stepes Quality System",
    href: "https://www.stepes.com/translation-quality-system/",
  },
  {
    title: "ISO-Certified Translation Services",
    text: "Learn how Stepes applies ISO-certified quality systems to professional translation and compliance-sensitive multilingual content.",
    link: "Review Stepes ISO Certifications",
    href: "https://www.stepes.com/iso-certified-translation-services/",
  },
  {
    title: "Enterprise Support",
    text: "Work with Stepes on security questionnaires, workflow requirements, program governance, escalation planning, and multilingual operations.",
    link: "Explore Enterprise Support",
    href: "https://www.stepes.com/enterprise-support/",
  },
];

const faqItems = [
  {
    question: "What makes translation security different from ordinary document security?",
    answer: "Translation creates additional versions, participants, systems, and reusable data assets. A source document may be processed by translation platforms, approved AI engines, professional linguists, reviewers, client approvers, APIs, and publishing systems. Security must therefore cover the full multilingual lifecycle, including derivative content, human access, language assets, comments, delivery, retention, and reuse.",
  },
  {
    question: "Can confidential content be translated with AI?",
    answer: "Potentially, but only when the selected technology and workflow meet the organization’s requirements. Enterprises should evaluate the model provider, data-processing terms, retention, training use, hosting, integration controls, permitted content, and human oversight before confidential information enters an AI-assisted workflow. Confidential content should not be submitted to unapproved public tools.",
  },
  {
    question: "Is machine translation secure?",
    answer: "Machine translation is not inherently secure or insecure. Security depends on the specific technology, deployment, contract, data flow, access model, retention policy, and operational use. An enterprise-controlled engine can operate very differently from a free public translation service, so each solution should be evaluated independently.",
  },
  {
    question: "How should translation memories be protected?",
    answer: "Translation memories should be governed as enterprise language assets. Organizations should define ownership, permitted reuse, access, segregation, export rights, retention, and deletion. Sensitive projects may require separate memories, restricted reuse, or exclusion from long-term storage.",
  },
  {
    question: "Does translation remove personal or regulated information from scope?",
    answer: "No. Translating information into another language does not change its underlying sensitivity. Personal, medical, legal, financial, employee, or regulated information may require the same or stronger controls in translated form, especially when it will be distributed to additional users, markets, or systems.",
  },
  {
    question: "What should procurement teams ask a translation provider?",
    answer: "Procurement teams should examine data handling, user access, linguist confidentiality, AI and machine translation policies, subcontractors, language-asset ownership, integrations, retention, deletion, quality systems, incident management, business continuity, and available security documentation. The assessment should reflect the organization’s actual content and workflow.",
  },
  {
    question: "Does an ISO certification guarantee translation security or regulatory compliance?",
    answer: "No single certification guarantees that every project is secure or compliant. ISO standards can provide evidence of structured quality-management or translation processes, but project-level assurance depends on the applicable requirements, content, technology, contracts, roles, controls, and intended use.",
  },
  {
    question: "Is a translation provider automatically HIPAA- or GDPR-compliant?",
    answer: "Compliance cannot be determined solely from a broad company or service claim. It depends on the data, processing roles, jurisdiction, contractual relationships, technology, access, retention, and operational controls used for a specific workflow. Privacy, security, legal, and regulatory teams should define the applicable requirements.",
  },
  {
    question: "How should regulated content be assigned to AI and human workflows?",
    answer: "Start by classifying the content according to sensitivity, intended use, audience, regulatory impact, and consequences of error. Regulated or high-impact material may require approved technology, specialist linguists, professional editing, independent review, documented quality assurance, formal approval, or validation before release.",
  },
  {
    question: "How do translation quality and security work together?",
    answer: "Quality and security both depend on controlled processes. Defined roles, qualified resources, terminology, version management, review stages, approval records, and issue escalation improve linguistic quality while reducing unauthorized changes, uncontrolled distribution, and uncertainty about which version was approved.",
  },
  {
    question: "What happens to project files after translation?",
    answer: "Post-project handling depends on the provider agreement and client requirements. Source files, working documents, translations, comments, translation memories, terminology, and quality records may follow different retention rules. Enterprises should define which assets may be reused, which must remain restricted, and which should be returned or deleted.",
  },
  {
    question: "Can Stepes support a vendor security review?",
    answer: "Stepes works with enterprise customers to review workflow, confidentiality, quality, technology, access, and program requirements. The Stepes team can also provide relevant information for procurement and vendor-assurance processes based on the requested services and project environment.",
  },
];

export default function StepesSecurityComplianceHub() {
  return (
    <main className="sc-page">
      <style>{`
        :root {
          --sc-accent: #c11d63;
          --sc-accent-dark: #9f1d55;
          --sc-accent-deep: #7a1542;
          --sc-blush: #fdf2f7;
          --sc-text: #111827;
          --sc-body: #475569;
          --sc-muted: #64748b;
          --sc-line: #e3e8ef;
          --sc-line-strong: #d7dee8;
          --sc-surface: #ffffff;
          --sc-surface-soft: #f7f9fc;
          --sc-radius-primary: 30px;
          --sc-radius-secondary: 22px;
          --sc-shadow: 0 24px 70px rgba(15, 23, 42, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .sc-page {
          min-width: 0;
          overflow-x: clip;
          background: var(--sc-surface);
          color: var(--sc-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .sc-page a {
          color: inherit;
        }

        .sc-shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-inline: 56px;
        }

        .sc-page p.sc-eyebrow {
          display: inline-block;
          margin: 0 0 18px;
          color: var(--sc-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .sc-hero {
          position: relative;
          padding: 96px 0 104px;
          background:
            radial-gradient(circle at 15% 18%, rgba(193, 29, 99, 0.055), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
        }

        .sc-hero::after {
          position: absolute;
          right: -140px;
          bottom: 40px;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(193, 29, 99, 0.08);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .sc-hero-copy {
          position: relative;
          z-index: 1;
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }

        .sc-hero .sc-eyebrow {
          text-align: center;
        }

        .sc-hero h1 {
          max-width: 920px;
          margin: 0 auto;
          color: var(--sc-text);
          font-size: 48px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.035em;
        }

        .sc-hero-intro {
          max-width: 800px;
          margin: 24px auto 0;
          color: var(--sc-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .sc-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 32px;
        }

        .sc-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          text-decoration: none;
          transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .sc-button:hover {
          transform: translateY(-1px);
        }

        .sc-button:focus-visible,
        .sc-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .sc-page .sc-button--primary,
        .sc-page .sc-button--primary:visited {
          background: var(--sc-accent);
          color: #ffffff;
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
        }

        .sc-page .sc-button--primary:hover {
          background: var(--sc-accent-dark);
          color: #ffffff;
          box-shadow: 0 14px 34px rgba(193, 29, 99, 0.24);
        }

        .sc-page .sc-button--primary:focus-visible {
          color: #ffffff;
        }

        .sc-page .sc-button--secondary,
        .sc-page .sc-button--secondary:visited {
          border-color: var(--sc-line-strong);
          background: rgba(255, 255, 255, 0.88);
          color: var(--sc-text);
        }

        .sc-page .sc-button--secondary:hover {
          border-color: #c6cfdb;
          background: #ffffff;
          color: var(--sc-text);
        }

        .sc-hero-visual {
          position: relative;
          z-index: 1;
          margin-top: 58px;
          padding: 28px;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: var(--sc-radius-primary);
          background: rgba(255, 255, 255, 0.94);
          box-shadow: var(--sc-shadow);
        }

        .sc-visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--sc-line);
        }

        .sc-visual-header strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sc-visual-header span {
          display: block;
          margin-top: 4px;
          color: var(--sc-muted);
          font-size: 14px;
          line-height: 1.45;
        }

        .sc-visual-status {
          display: inline-flex !important;
          min-height: 34px;
          align-items: center;
          gap: 8px;
          margin: 0 !important;
          padding: 7px 12px;
          border: 1px solid #eed1de;
          border-radius: 999px;
          background: var(--sc-blush);
          color: var(--sc-accent-deep) !important;
          font-size: 12px !important;
          font-weight: 600;
          white-space: nowrap;
        }

        .sc-visual-status::before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--sc-accent);
          content: "";
        }

        .sc-workflow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0;
          padding: 30px 0 26px;
        }

        .sc-workflow-node {
          position: relative;
          display: flex;
          min-width: 0;
          align-items: flex-start;
          gap: 13px;
          padding: 0 22px;
        }

        .sc-workflow-node:first-child {
          padding-left: 4px;
        }

        .sc-workflow-node:last-child {
          padding-right: 4px;
        }

        .sc-workflow-node:not(:last-child)::after {
          position: absolute;
          top: 9px;
          right: -2px;
          width: 26px;
          height: 1px;
          background: #cfd7e2;
          content: "";
          transform: translateX(50%);
        }

        .sc-workflow-dot {
          flex: 0 0 auto;
          width: 18px;
          height: 18px;
          margin-top: 1px;
          border: 5px solid #ffffff;
          border-radius: 50%;
          background: #aeb8c6;
          box-shadow: 0 0 0 1px #cfd7e2;
        }

        .sc-workflow-node--active .sc-workflow-dot,
        .sc-workflow-node--approved .sc-workflow-dot {
          background: var(--sc-accent);
          box-shadow: 0 0 0 1px rgba(193, 29, 99, 0.3);
        }

        .sc-workflow-node strong {
          display: block;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sc-workflow-node span:not(.sc-workflow-dot) {
          display: block;
          margin-top: 4px;
          color: var(--sc-muted);
          font-size: 13px;
          line-height: 1.45;
        }

        .sc-control-row {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border: 1px solid var(--sc-line);
          border-radius: 18px;
          background: var(--sc-surface-soft);
          overflow: hidden;
        }

        .sc-control-item {
          display: flex;
          min-height: 54px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 12px 14px;
          color: #334155;
          font-size: 13px;
          font-weight: 600;
          text-align: center;
        }

        .sc-control-item:not(:last-child) {
          border-right: 1px solid var(--sc-line);
        }

        .sc-control-item::before {
          width: 7px;
          height: 7px;
          border: 1.5px solid var(--sc-accent);
          border-radius: 50%;
          content: "";
        }

        .sc-section {
          padding: 96px 0;
        }

        .sc-section[id],
        .sc-ai-section[id] {
          scroll-margin-top: 96px;
        }

        .sc-section--soft {
          background: var(--sc-surface-soft);
        }

        .sc-overview-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 88px;
          align-items: start;
        }

        .sc-section h2 {
          max-width: 560px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sc-section-lead {
          max-width: 760px;
          margin: 0;
          color: var(--sc-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .sc-section-copy p {
          max-width: 760px;
          margin: 0;
          color: var(--sc-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sc-section-copy p + p {
          margin-top: 20px;
        }

        .sc-quiet-callout {
          max-width: 760px;
          margin-top: 28px;
          padding: 22px 24px;
          border-left: 3px solid var(--sc-accent);
          background: #fbf7f9;
          color: #334155;
          font-size: 16px;
          line-height: 1.65;
        }

        .sc-trust-band {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 64px;
          border-top: 1px solid var(--sc-line-strong);
          border-bottom: 1px solid var(--sc-line-strong);
        }

        .sc-trust-item {
          min-width: 0;
          padding: 28px 24px;
        }

        .sc-trust-item:first-child {
          padding-left: 0;
        }

        .sc-trust-item:last-child {
          padding-right: 0;
        }

        .sc-trust-item:not(:last-child) {
          border-right: 1px solid var(--sc-line);
        }

        .sc-trust-item h3 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sc-trust-item p {
          margin: 9px 0 0;
          color: var(--sc-muted);
          font-size: 14px;
          line-height: 1.58;
        }

        .sc-framework-layout {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 82px;
          align-items: start;
        }

        .sc-framework-intro {
          position: sticky;
          top: 32px;
        }

        .sc-framework-intro p {
          max-width: 470px;
          margin: 22px 0 0;
          color: var(--sc-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sc-framework-list {
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-framework-item {
          display: grid;
          grid-template-columns: 54px minmax(0, 1fr);
          gap: 22px;
          padding: 36px 0;
          border-bottom: 1px solid var(--sc-line-strong);
        }

        .sc-framework-icon {
          display: inline-flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          border: 1px solid #eed7e1;
          border-radius: 16px;
          background: #fff8fb;
          color: var(--sc-accent-dark);
        }

        .sc-framework-icon svg {
          width: 24px;
          height: 24px;
        }

        .sc-framework-item h3 {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .sc-framework-item p {
          max-width: 760px;
          margin: 12px 0 0;
          color: var(--sc-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sc-framework-item ul {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .sc-framework-item li {
          position: relative;
          padding-left: 18px;
          color: #334155;
          font-size: 14px;
          line-height: 1.55;
        }

        .sc-framework-item li::before {
          position: absolute;
          top: 0.62em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sc-accent);
          content: "";
        }

        .sc-framework-note {
          margin-top: 20px !important;
          padding-top: 18px;
          border-top: 1px solid var(--sc-line);
          color: #334155 !important;
          font-weight: 400;
        }

        .sc-page .sc-editorial-link,
        .sc-page .sc-editorial-link:visited {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          margin-top: 26px;
          color: var(--sc-accent-dark);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
        }

        .sc-editorial-link svg {
          transition: transform 180ms ease;
        }

        .sc-page .sc-editorial-link:hover {
          color: var(--sc-accent);
        }

        .sc-editorial-link:hover svg {
          transform: translateX(3px);
        }



        .sc-section-heading {
          max-width: 820px;
          margin: 0 auto 54px;
          text-align: center;
        }

        .sc-section-heading h2 {
          max-width: 800px;
          margin-inline: auto;
        }

        .sc-section-heading .sc-eyebrow {
          justify-content: center;
        }

        .sc-section-heading p:not(.sc-eyebrow) {
          max-width: 760px;
          margin: 22px auto 0;
          color: var(--sc-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sc-priority-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sc-line-strong);
          border-left: 1px solid var(--sc-line-strong);
        }

        .sc-priority-item {
          min-width: 0;
          padding: 34px 30px 32px;
          border-right: 1px solid var(--sc-line-strong);
          border-bottom: 1px solid var(--sc-line-strong);
          background: #ffffff;
          transition: background-color 180ms ease;
        }

        .sc-priority-item:hover {
          background: #fffbfd;
        }

        .sc-priority-icon,
        .sc-operating-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: var(--sc-blush);
          color: var(--sc-accent-dark);
        }

        .sc-priority-icon svg,
        .sc-operating-icon svg {
          width: 23px;
          height: 23px;
        }

        .sc-priority-item h3 {
          margin: 22px 0 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.014em;
        }

        .sc-priority-item p {
          margin: 13px 0 0;
          color: var(--sc-body);
          font-size: 15px;
          line-height: 1.68;
        }

        .sc-priority-item .sc-editorial-link {
          margin-top: 22px;
        }

        .sc-operating-head {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 58px;
        }

        .sc-operating-head .sc-section-lead {
          justify-self: end;
        }

        .sc-operating-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 30px;
        }

        .sc-operating-item {
          min-width: 0;
          padding-top: 28px;
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-operating-item h3 {
          margin: 20px 0 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.012em;
        }

        .sc-operating-item p {
          margin: 12px 0 0;
          color: var(--sc-body);
          font-size: 14px;
          line-height: 1.65;
        }

        .sc-operating-summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 54px;
          padding-top: 28px;
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-operating-summary p {
          max-width: 760px;
          margin: 0;
          color: #334155;
          font-size: 16px;
          line-height: 1.65;
        }

        .sc-operating-summary .sc-editorial-link {
          flex: 0 0 auto;
          margin-top: 0;
        }

        .sc-lifecycle-heading {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 52px;
        }

        .sc-lifecycle-heading .sc-section-lead {
          justify-self: end;
        }

        .sc-lifecycle-table {
          overflow: hidden;
          border: 1px solid var(--sc-line-strong);
          border-radius: var(--sc-radius-primary);
          background: #ffffff;
        }

        .sc-lifecycle-row {
          display: grid;
          grid-template-columns: minmax(190px, 0.62fr) minmax(240px, 0.8fr) minmax(0, 1.58fr);
          min-width: 0;
          align-items: center;
        }

        .sc-lifecycle-row + .sc-lifecycle-row {
          border-top: 1px solid var(--sc-line);
        }

        .sc-lifecycle-row--header {
          min-height: 54px;
          background: var(--sc-surface-soft);
        }

        .sc-lifecycle-row--header > div {
          color: var(--sc-muted);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .sc-lifecycle-row > div {
          min-width: 0;
          padding: 22px 24px;
        }

        .sc-lifecycle-row > div + div {
          border-left: 1px solid var(--sc-line);
        }

        .sc-lifecycle-stage {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sc-lifecycle-number {
          flex: 0 0 auto;
          color: var(--sc-accent-dark);
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.04em;
        }

        .sc-lifecycle-stage strong,
        .sc-lifecycle-focus strong {
          display: block;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.42;
        }

        .sc-lifecycle-detail p {
          margin: 0;
          color: var(--sc-body);
          font-size: 14px;
          line-height: 1.65;
        }

        .sc-mobile-label {
          display: none;
        }

        .sc-ai-section {
          padding: 96px 0;
          background: #17141c;
          color: #ffffff;
        }

        .sc-ai-section .sc-eyebrow {
          color: #f8d2e1;
        }

        .sc-ai-intro-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 88px;
          align-items: start;
        }

        .sc-ai-section h2 {
          max-width: 600px;
          margin: 0;
          color: #ffffff;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sc-ai-intro-copy p {
          max-width: 760px;
          margin: 0;
          color: #cbd5e1;
          font-size: 17px;
          line-height: 1.72;
        }

        .sc-ai-intro-copy p + p {
          margin-top: 20px;
        }

        .sc-ai-section .sc-editorial-link {
          color: #f5b8d0;
        }

        .sc-ai-section .sc-editorial-link:hover {
          color: #ffffff;
        }

        .sc-ai-subsection {
          margin-top: 64px;
          padding-top: 34px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .sc-ai-subsection-head {
          display: grid;
          grid-template-columns: minmax(220px, 0.45fr) minmax(0, 1.55fr);
          gap: 48px;
          align-items: start;
          margin-bottom: 30px;
        }

        .sc-ai-subsection h3 {
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sc-ai-subsection-head p {
          max-width: 780px;
          margin: 0;
          color: #aeb9c9;
          font-size: 15px;
          line-height: 1.68;
        }

        .sc-ai-questions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .sc-ai-question {
          display: grid;
          grid-template-columns: 9px minmax(0, 1fr);
          gap: 14px;
          align-content: start;
          min-width: 0;
          min-height: 112px;
          padding: 24px;
          border-right: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          color: #e2e8f0;
          font-size: 14px;
          line-height: 1.58;
        }

        .sc-ai-question::before {
          width: 9px;
          height: 2px;
          margin-top: 0.72em;
          border-radius: 999px;
          background: #dc4b87;
          content: "";
        }

        .sc-risk-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
        }

        .sc-risk-item {
          min-width: 0;
          padding: 30px 28px 32px;
        }

        .sc-risk-item:first-child {
          padding-left: 0;
        }

        .sc-risk-item:last-child {
          padding-right: 0;
        }

        .sc-risk-item + .sc-risk-item {
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .sc-risk-label {
          color: #f5b8d0;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .sc-risk-item h4 {
          margin: 14px 0 0;
          color: #ffffff;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sc-risk-item p {
          margin: 12px 0 0;
          color: #aeb9c9;
          font-size: 14px;
          line-height: 1.65;
        }

        .sc-human-oversight {
          display: grid;
          grid-template-columns: minmax(240px, 0.55fr) minmax(0, 1.45fr);
          gap: 50px;
          align-items: center;
          margin-top: 42px;
          padding: 30px 0 0;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .sc-human-oversight h3 {
          margin: 0;
          color: #ffffff;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
        }

        .sc-human-oversight p {
          max-width: 800px;
          margin: 0;
          color: #cbd5e1;
          font-size: 16px;
          line-height: 1.7;
        }


        @media (max-width: 1100px) {
          .sc-shell {
            padding-inline: 40px;
          }

          .sc-overview-grid,
          .sc-framework-layout {
            gap: 56px;
          }

          .sc-trust-item {
            padding-inline: 18px;
          }
        }

        @media (max-width: 900px) {
          .sc-shell {
            padding-inline: 24px;
          }

          .sc-hero {
            padding: 88px 0 92px;
          }

          .sc-hero h1 {
            max-width: 760px;
            font-size: 42px;
          }

          .sc-workflow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 26px 0;
          }

          .sc-workflow-node {
            padding: 0 20px;
          }

          .sc-workflow-node:nth-child(odd) {
            padding-left: 4px;
          }

          .sc-workflow-node:nth-child(even) {
            padding-right: 4px;
          }

          .sc-workflow-node:nth-child(2)::after,
          .sc-workflow-node:last-child::after {
            display: none;
          }

          .sc-control-row {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-control-item:nth-child(2) {
            border-right: 0;
          }

          .sc-control-item:nth-child(-n + 2) {
            border-bottom: 1px solid var(--sc-line);
          }

          .sc-section {
            padding: 80px 0;
          }

          .sc-section h2 {
            font-size: 32px;
          }

          .sc-overview-grid,
          .sc-framework-layout {
            grid-template-columns: 1fr;
            gap: 38px;
          }

          .sc-framework-intro {
            position: static;
          }

          .sc-framework-intro p {
            max-width: 760px;
          }

          .sc-trust-band {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-trust-item {
            padding: 26px 22px;
          }

          .sc-trust-item:first-child {
            padding-left: 22px;
          }

          .sc-trust-item:last-child {
            padding-right: 22px;
          }

          .sc-trust-item:nth-child(2) {
            border-right: 0;
          }

          .sc-trust-item:nth-child(-n + 2) {
            border-bottom: 1px solid var(--sc-line);
          }
        }

        @media (max-width: 620px) {
          .sc-shell {
            padding-inline: 20px;
          }

          .sc-hero {
            padding: 72px 0;
          }

          .sc-hero::after {
            display: none;
          }

          .sc-hero-copy {
            text-align: left;
          }

          .sc-hero .sc-eyebrow {
            justify-content: flex-start;
          }

          .sc-hero h1 {
            max-width: none;
            font-size: 38px;
            line-height: 1.12;
          }

          .sc-hero-intro {
            max-width: none;
            margin-top: 20px;
            font-size: 18px;
            line-height: 1.66;
          }

          .sc-hero-actions {
            display: grid;
            grid-template-columns: 1fr;
            margin-top: 28px;
          }

          .sc-button {
            width: 100%;
            min-height: 52px;
          }

          .sc-hero-visual {
            margin-top: 42px;
            padding: 20px;
            border-radius: 24px;
          }

          .sc-visual-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 14px;
          }

          .sc-workflow {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 24px 0;
          }

          .sc-workflow-node,
          .sc-workflow-node:first-child,
          .sc-workflow-node:last-child,
          .sc-workflow-node:nth-child(odd),
          .sc-workflow-node:nth-child(even) {
            padding: 0 0 24px 0;
          }

          .sc-workflow-node:last-child {
            padding-bottom: 0;
          }

          .sc-workflow-node:not(:last-child)::after,
          .sc-workflow-node:nth-child(2)::after {
            display: block;
            top: 21px;
            right: auto;
            bottom: 3px;
            left: 8px;
            width: 1px;
            height: auto;
            transform: none;
          }

          .sc-control-row {
            grid-template-columns: 1fr;
          }

          .sc-control-item {
            justify-content: flex-start;
            min-height: 48px;
            padding-inline: 16px;
            text-align: left;
          }

          .sc-control-item:not(:last-child),
          .sc-control-item:nth-child(2) {
            border-right: 0;
            border-bottom: 1px solid var(--sc-line);
          }

          .sc-section {
            padding: 68px 0;
          }

          .sc-section[id],
          .sc-ai-section[id] {
            scroll-margin-top: 72px;
          }

          .sc-section h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .sc-section-lead,
          .sc-framework-intro p {
            font-size: 18px;
            line-height: 1.65;
          }

          .sc-quiet-callout {
            padding: 20px;
          }

          .sc-trust-band {
            grid-template-columns: 1fr;
            margin-top: 48px;
          }

          .sc-trust-item,
          .sc-trust-item:first-child,
          .sc-trust-item:last-child {
            padding: 22px 0;
          }

          .sc-trust-item:not(:last-child),
          .sc-trust-item:nth-child(2),
          .sc-trust-item:nth-child(-n + 2) {
            border-right: 0;
            border-bottom: 1px solid var(--sc-line);
          }

          .sc-framework-item {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            padding: 30px 0;
          }

          .sc-framework-icon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
          }

          .sc-framework-icon svg {
            width: 22px;
            height: 22px;
          }

          .sc-framework-item h3 {
            font-size: 20px;
            line-height: 1.34;
          }

          .sc-framework-item p,
          .sc-framework-item ul,
          .sc-framework-note {
            grid-column: 1 / -1;
          }

          .sc-framework-item ul {
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 18px;
          }

          .sc-editorial-link {
            grid-column: 1 / -1;
            margin-top: 20px;
          }
        }

        @media (max-width: 360px) {
          .sc-hero h1 {
            font-size: 38px;
          }

          .sc-hero-visual {
            padding: 17px;
          }
        }


        @media (max-width: 1100px) {
          .sc-operating-head,
          .sc-lifecycle-heading,
          .sc-ai-intro-grid {
            gap: 56px;
          }

          .sc-operating-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sc-lifecycle-row {
            grid-template-columns: minmax(170px, 0.58fr) minmax(210px, 0.76fr) minmax(0, 1.66fr);
          }

          .sc-lifecycle-row > div {
            padding-inline: 20px;
          }
        }

        @media (max-width: 900px) {
          .sc-section-heading {
            margin-bottom: 44px;
          }

          .sc-priority-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-operating-head,
          .sc-lifecycle-heading,
          .sc-ai-intro-grid,
          .sc-ai-subsection-head,
          .sc-human-oversight {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .sc-operating-head .sc-section-lead,
          .sc-lifecycle-heading .sc-section-lead {
            justify-self: start;
          }

          .sc-operating-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-operating-summary {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .sc-lifecycle-row--header {
            display: none;
          }

          .sc-lifecycle-table {
            border-radius: 24px;
          }

          .sc-lifecycle-row {
            grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
            align-items: stretch;
          }

          .sc-lifecycle-row > div {
            padding: 20px 22px;
          }

          .sc-lifecycle-detail {
            grid-column: 1 / -1;
            border-top: 1px solid var(--sc-line);
            border-left: 0 !important;
          }

          .sc-mobile-label {
            display: block;
            margin-bottom: 7px;
            color: var(--sc-muted);
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .sc-ai-section {
            padding: 80px 0;
          }

          .sc-ai-section h2 {
            font-size: 32px;
          }

          .sc-ai-questions {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-risk-grid {
            grid-template-columns: 1fr;
          }

          .sc-risk-item,
          .sc-risk-item:first-child,
          .sc-risk-item:last-child {
            padding: 28px 0;
          }

          .sc-risk-item + .sc-risk-item {
            border-top: 1px solid rgba(255, 255, 255, 0.14);
            border-left: 0;
          }
        }

        @media (max-width: 620px) {
          .sc-section-heading {
            margin-bottom: 36px;
            text-align: left;
          }

          .sc-section-heading .sc-eyebrow {
            justify-content: flex-start;
          }

          .sc-section-heading h2,
          .sc-section-heading p:not(.sc-eyebrow) {
            margin-inline: 0;
          }

          .sc-section-heading p:not(.sc-eyebrow) {
            font-size: 18px;
            line-height: 1.65;
          }

          .sc-priority-grid {
            grid-template-columns: 1fr;
          }

          .sc-priority-item {
            padding: 28px 24px 26px;
          }

          .sc-priority-item h3 {
            font-size: 20px;
          }

          .sc-operating-head,
          .sc-lifecycle-heading {
            margin-bottom: 38px;
          }

          .sc-operating-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .sc-operating-item {
            padding-top: 24px;
          }

          .sc-operating-summary {
            margin-top: 42px;
          }

          .sc-operating-summary .sc-editorial-link {
            margin-top: 0;
          }

          .sc-lifecycle-table {
            border-radius: 20px;
          }

          .sc-lifecycle-row {
            grid-template-columns: 1fr;
          }

          .sc-lifecycle-row > div,
          .sc-lifecycle-detail {
            padding: 20px;
            border-left: 0 !important;
          }

          .sc-lifecycle-focus,
          .sc-lifecycle-detail {
            border-top: 1px solid var(--sc-line);
          }

          .sc-ai-section {
            padding: 68px 0;
          }

          .sc-ai-section h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .sc-ai-intro-copy p {
            font-size: 16px;
          }

          .sc-ai-subsection {
            margin-top: 52px;
            padding-top: 28px;
          }

          .sc-ai-questions {
            grid-template-columns: 1fr;
          }

          .sc-ai-question {
            min-height: 0;
            gap: 13px;
            padding: 20px;
          }

          .sc-human-oversight {
            margin-top: 36px;
          }
        }


        .sc-assets-head {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 88px;
          align-items: start;
          margin-bottom: 52px;
        }

        .sc-assets-head .sc-section-lead {
          justify-self: end;
        }

        .sc-assets-summary {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-bottom: 48px;
          border-top: 1px solid var(--sc-line-strong);
          border-bottom: 1px solid var(--sc-line-strong);
        }

        .sc-assets-summary span {
          min-width: 0;
          padding: 18px 20px;
          color: #334155;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.45;
          text-align: center;
        }

        .sc-assets-summary span + span {
          border-left: 1px solid var(--sc-line);
        }

        .sc-asset-list {
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-asset-row {
          display: grid;
          grid-template-columns: 58px minmax(250px, 0.62fr) minmax(0, 1.38fr);
          gap: 22px;
          align-items: start;
          padding: 34px 0;
          border-bottom: 1px solid var(--sc-line-strong);
          scroll-margin-top: 24px;
        }

        .sc-asset-icon {
          display: inline-flex;
          width: 50px;
          height: 50px;
          align-items: center;
          justify-content: center;
          border: 1px solid #eed7e1;
          border-radius: 16px;
          background: #fff8fb;
          color: var(--sc-accent-dark);
        }

        .sc-asset-icon svg {
          width: 24px;
          height: 24px;
        }

        .sc-asset-label,
        .sc-standard-category,
        .sc-industry-sector {
          display: block;
          color: var(--sc-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .sc-asset-row h3 {
          margin: 10px 0 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.014em;
        }

        .sc-asset-copy p {
          max-width: 760px;
          margin: 0;
          color: var(--sc-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sc-asset-copy ul {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px 22px;
          margin: 20px 0 0;
          padding: 0;
          list-style: none;
        }

        .sc-asset-copy li,
        .sc-checklist-questions li {
          position: relative;
          padding-left: 18px;
          color: #334155;
          font-size: 14px;
          line-height: 1.58;
        }

        .sc-asset-copy li::before,
        .sc-checklist-questions li::before {
          position: absolute;
          top: 0.68em;
          left: 0;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--sc-accent);
          content: "";
        }

        .sc-asset-links {
          display: flex;
          flex-wrap: wrap;
          gap: 26px;
          margin-top: 34px;
        }

        .sc-asset-links .sc-editorial-link {
          margin-top: 0;
        }

        .sc-standards-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 82px;
          align-items: start;
        }

        .sc-standards-intro {
          position: sticky;
          top: 32px;
        }

        .sc-standards-intro p:not(.sc-eyebrow) {
          max-width: 500px;
          margin: 22px 0 0;
          color: var(--sc-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sc-standards-note {
          margin-top: 28px;
          padding: 22px 0 0;
          border-top: 2px solid var(--sc-accent);
          color: #334155;
          font-size: 15px;
          line-height: 1.65;
        }

        .sc-standards-list {
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-standard-row {
          display: grid;
          grid-template-columns: minmax(170px, 0.42fr) minmax(0, 1.58fr);
          gap: 28px;
          padding: 30px 0;
          border-bottom: 1px solid var(--sc-line-strong);
        }

        .sc-standard-row h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.012em;
        }

        .sc-standard-row p {
          margin: 11px 0 0;
          color: var(--sc-body);
          font-size: 15px;
          line-height: 1.68;
        }

        .sc-standards-list .sc-editorial-link {
          margin-top: 28px;
        }

        .sc-industry-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 52px;
        }

        .sc-industry-intro .sc-section-lead {
          justify-self: end;
        }

        .sc-industry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--sc-line-strong);
          border-left: 1px solid var(--sc-line-strong);
        }

        .sc-industry-item {
          min-width: 0;
          padding: 30px 26px 32px;
          border-right: 1px solid var(--sc-line-strong);
          border-bottom: 1px solid var(--sc-line-strong);
          background: #ffffff;
        }

        .sc-industry-item h3 {
          margin: 12px 0 0;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.34;
          letter-spacing: -0.012em;
        }

        .sc-industry-item p {
          margin: 12px 0 0;
          color: var(--sc-body);
          font-size: 14px;
          line-height: 1.66;
        }

        .sc-industry-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 36px;
        }

        .sc-industry-footer p {
          max-width: 760px;
          margin: 0;
          color: #334155;
          font-size: 16px;
          line-height: 1.65;
        }

        .sc-industry-footer .sc-editorial-link {
          flex: 0 0 auto;
          margin-top: 0;
        }

        .sc-checklist-head {
          display: grid;
          grid-template-columns: minmax(0, 0.76fr) minmax(0, 1.24fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 52px;
        }

        .sc-checklist-head .sc-section-lead {
          justify-self: end;
        }

        .sc-checklist-panel {
          overflow: hidden;
          border: 1px solid var(--sc-line-strong);
          border-radius: var(--sc-radius-primary);
          background: #ffffff;
        }

        .sc-checklist-row {
          display: grid;
          grid-template-columns: minmax(230px, 0.46fr) minmax(0, 1.54fr);
          min-width: 0;
        }

        .sc-checklist-row + .sc-checklist-row {
          border-top: 1px solid var(--sc-line);
        }

        .sc-checklist-title {
          padding: 28px 30px;
          background: #fafbfc;
        }

        .sc-checklist-title h3 {
          margin: 0;
          font-size: 19px;
          font-weight: 600;
          line-height: 1.38;
        }

        .sc-checklist-questions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px 26px;
          margin: 0;
          padding: 28px 30px;
          border-left: 1px solid var(--sc-line);
          list-style: none;
        }

        .sc-checklist-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 34px;
          padding: 28px 30px;
          border: 1px solid #eed1de;
          border-radius: 22px;
          background: var(--sc-blush);
        }

        .sc-checklist-cta p {
          max-width: 760px;
          margin: 0;
          color: #334155;
          font-size: 16px;
          line-height: 1.65;
        }

        .sc-checklist-actions {
          display: flex;
          flex: 0 0 auto;
          flex-wrap: wrap;
          gap: 12px;
        }

        .sc-checklist-actions .sc-button {
          min-height: 46px;
        }

        @media (max-width: 1100px) {
          .sc-assets-head,
          .sc-industry-intro,
          .sc-checklist-head {
            gap: 56px;
          }

          .sc-standards-layout {
            gap: 56px;
          }

          .sc-industry-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .sc-assets-head,
          .sc-standards-layout,
          .sc-industry-intro,
          .sc-checklist-head {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .sc-assets-head .sc-section-lead,
          .sc-industry-intro .sc-section-lead,
          .sc-checklist-head .sc-section-lead {
            justify-self: start;
          }

          .sc-standards-intro {
            position: static;
          }

          .sc-assets-summary {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-assets-summary span:nth-child(3) {
            border-left: 0;
          }

          .sc-assets-summary span:nth-child(-n + 2) {
            border-bottom: 1px solid var(--sc-line);
          }

          .sc-asset-row {
            grid-template-columns: 54px minmax(210px, 0.55fr) minmax(0, 1.45fr);
            gap: 18px;
          }

          .sc-asset-copy ul {
            grid-template-columns: 1fr;
          }

          .sc-standard-row {
            grid-template-columns: minmax(150px, 0.42fr) minmax(0, 1.58fr);
          }

          .sc-industry-footer,
          .sc-checklist-cta {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }

          .sc-checklist-actions {
            width: 100%;
          }
        }

        @media (max-width: 620px) {
          .sc-assets-head,
          .sc-industry-intro,
          .sc-checklist-head {
            margin-bottom: 38px;
          }

          .sc-assets-summary {
            grid-template-columns: 1fr;
            margin-bottom: 36px;
          }

          .sc-assets-summary span {
            padding: 15px 0;
            text-align: left;
          }

          .sc-assets-summary span + span,
          .sc-assets-summary span:nth-child(3) {
            border-top: 1px solid var(--sc-line);
            border-left: 0;
          }

          .sc-assets-summary span:nth-child(-n + 2) {
            border-bottom: 0;
          }

          .sc-asset-row {
            grid-template-columns: 46px minmax(0, 1fr);
            gap: 16px;
            padding: 28px 0;
          }

          .sc-asset-icon {
            width: 44px;
            height: 44px;
            border-radius: 14px;
          }

          .sc-asset-icon svg {
            width: 22px;
            height: 22px;
          }

          .sc-asset-row h3 {
            font-size: 20px;
          }

          .sc-asset-copy {
            grid-column: 1 / -1;
          }

          .sc-asset-links {
            align-items: flex-start;
            flex-direction: column;
            gap: 0;
          }

          .sc-standards-intro p:not(.sc-eyebrow) {
            font-size: 18px;
            line-height: 1.65;
          }

          .sc-standard-row {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 26px 0;
          }

          .sc-standard-row h3 {
            font-size: 20px;
          }

          .sc-industry-grid {
            grid-template-columns: 1fr;
          }

          .sc-industry-item {
            padding: 26px 22px 28px;
          }

          .sc-industry-footer .sc-editorial-link {
            margin-top: 0;
          }

          .sc-checklist-panel {
            border-radius: 20px;
          }

          .sc-checklist-row {
            grid-template-columns: 1fr;
          }

          .sc-checklist-title {
            padding: 22px 20px;
          }

          .sc-checklist-questions {
            grid-template-columns: 1fr;
            padding: 22px 20px;
            border-top: 1px solid var(--sc-line);
            border-left: 0;
          }

          .sc-checklist-cta {
            padding: 24px 22px;
          }

          .sc-checklist-actions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .sc-checklist-actions .sc-button {
            width: 100%;
          }
        }


        .sc-resources-head {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 52px;
        }

        .sc-resources-head .sc-section-lead {
          justify-self: end;
        }

        .sc-resource-groups {
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-resource-group {
          display: grid;
          grid-template-columns: minmax(220px, 0.42fr) minmax(0, 1.58fr);
          gap: 42px;
          padding: 38px 0;
          border-bottom: 1px solid var(--sc-line-strong);
        }

        .sc-resource-category h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.34;
          letter-spacing: -0.012em;
        }

        .sc-resource-category p {
          margin: 12px 0 0;
          color: var(--sc-muted);
          font-size: 14px;
          line-height: 1.62;
        }

        .sc-resource-links {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          border-left: 1px solid var(--sc-line);
        }

        .sc-resource-link {
          display: flex;
          min-width: 0;
          min-height: 100%;
          flex-direction: column;
          padding: 0 26px;
          color: var(--sc-text);
          text-decoration: none;
        }

        .sc-resource-link + .sc-resource-link {
          border-left: 1px solid var(--sc-line);
        }

        .sc-resource-link:first-child {
          padding-left: 30px;
        }

        .sc-resource-link h4 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: -0.008em;
        }

        .sc-resource-link p {
          margin: 10px 0 0;
          color: var(--sc-body);
          font-size: 14px;
          line-height: 1.62;
        }

        .sc-resource-link span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: auto;
          padding-top: 18px;
          color: var(--sc-accent-dark);
          font-size: 14px;
          font-weight: 600;
        }

        .sc-resource-link svg {
          transition: transform 180ms ease;
        }

        .sc-resource-link:hover h4,
        .sc-resource-link:hover span {
          color: var(--sc-accent);
        }

        .sc-resource-link:hover svg {
          transform: translateX(3px);
        }

        .sc-resource-link:focus-visible {
          border-radius: 8px;
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
        }

        .sc-resources-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 36px;
        }

        .sc-resources-footer p {
          max-width: 760px;
          margin: 0;
          color: #334155;
          font-size: 16px;
          line-height: 1.65;
        }

        .sc-resources-footer .sc-editorial-link {
          flex: 0 0 auto;
          margin-top: 0;
        }

        .sc-stepes-support-head {
          max-width: 840px;
          margin-bottom: 54px;
        }

        .sc-stepes-support-head h2 {
          max-width: 760px;
        }

        .sc-stepes-support-head .sc-section-lead {
          margin-top: 22px;
        }

        .sc-stepes-support-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sc-line-strong);
          border-left: 1px solid var(--sc-line-strong);
        }

        .sc-stepes-support-item {
          display: flex;
          min-width: 0;
          min-height: 270px;
          flex-direction: column;
          padding: 32px 30px;
          border-right: 1px solid var(--sc-line-strong);
          border-bottom: 1px solid var(--sc-line-strong);
          background: #ffffff;
        }

        .sc-stepes-support-item h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.014em;
        }

        .sc-stepes-support-item p {
          margin: 14px 0 0;
          color: var(--sc-body);
          font-size: 15px;
          line-height: 1.68;
        }

        .sc-stepes-support-item .sc-editorial-link {
          margin-top: auto;
          padding-top: 22px;
        }

        .sc-faq-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.62fr) minmax(0, 1.38fr);
          gap: 82px;
          align-items: start;
        }

        .sc-faq-intro {
          position: sticky;
          top: 32px;
        }

        .sc-faq-intro p:not(.sc-eyebrow) {
          max-width: 480px;
          margin: 22px 0 0;
          color: var(--sc-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sc-faq-panel {
          overflow: hidden;
          border: 1px solid var(--sc-line-strong);
          border-radius: var(--sc-radius-primary);
          background: #ffffff;
        }

        .sc-faq-item + .sc-faq-item {
          border-top: 1px solid var(--sc-line);
        }

        .sc-faq-item summary {
          display: flex;
          min-height: 78px;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          padding: 24px 28px;
          cursor: pointer;
          list-style: none;
          color: var(--sc-text);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.45;
        }

        .sc-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .sc-faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: -3px;
        }

        .sc-faq-toggle {
          position: relative;
          flex: 0 0 auto;
          width: 30px;
          height: 30px;
          border: 1px solid var(--sc-line-strong);
          border-radius: 50%;
          background: #ffffff;
        }

        .sc-faq-toggle::before,
        .sc-faq-toggle::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 12px;
          height: 1.5px;
          border-radius: 999px;
          background: var(--sc-accent-dark);
          content: "";
          transform: translate(-50%, -50%);
          transition: transform 180ms ease, opacity 180ms ease;
        }

        .sc-faq-toggle::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .sc-faq-item[open] .sc-faq-toggle::after {
          opacity: 0;
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .sc-faq-answer {
          padding: 0 76px 26px 28px;
        }

        .sc-faq-answer p {
          max-width: 820px;
          margin: 0;
          color: var(--sc-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .sc-faq-contact {
          margin-top: 30px;
          padding-top: 24px;
          border-top: 1px solid var(--sc-line-strong);
        }

        .sc-final-cta {
          padding: 32px 0 96px;
          background: #ffffff;
        }

        .sc-final-cta-panel {
          position: relative;
          overflow: hidden;
          padding: 68px 70px;
          border: 1px solid #edd6e0;
          border-radius: var(--sc-radius-primary);
          background:
            radial-gradient(circle at 90% 15%, rgba(193, 29, 99, 0.11), transparent 30%),
            linear-gradient(135deg, #fff8fb 0%, #f7f9fc 100%);
        }

        .sc-final-cta-panel::after {
          position: absolute;
          right: -100px;
          bottom: -170px;
          width: 330px;
          height: 330px;
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: 50%;
          content: "";
          pointer-events: none;
        }

        .sc-final-cta-content {
          position: relative;
          z-index: 1;
          max-width: 850px;
        }

        .sc-final-cta h2 {
          max-width: 780px;
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .sc-final-cta-copy {
          max-width: 760px;
          margin: 22px 0 0;
          color: var(--sc-body);
          font-size: 18px;
          line-height: 1.72;
        }

        .sc-final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        @media (max-width: 1100px) {
          .sc-resources-head {
            gap: 56px;
          }

          .sc-resource-group {
            grid-template-columns: minmax(190px, 0.36fr) minmax(0, 1.64fr);
            gap: 30px;
          }

          .sc-resource-link {
            padding-inline: 20px;
          }

          .sc-resource-link:first-child {
            padding-left: 24px;
          }

          .sc-faq-layout {
            gap: 56px;
          }
        }

        @media (max-width: 900px) {
          .sc-resources-head,
          .sc-faq-layout {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .sc-resources-head .sc-section-lead {
            justify-self: start;
          }

          .sc-resource-group {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .sc-resource-links {
            border-top: 1px solid var(--sc-line);
            border-left: 0;
            padding-top: 28px;
          }

          .sc-resource-link:first-child {
            padding-left: 0;
          }

          .sc-resource-link:last-child {
            padding-right: 0;
          }

          .sc-stepes-support-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sc-faq-intro {
            position: static;
          }

          .sc-final-cta-panel {
            padding: 58px 48px;
          }

          .sc-final-cta h2 {
            font-size: 32px;
          }
        }

        @media (max-width: 620px) {
          .sc-resources-head,
          .sc-stepes-support-head {
            margin-bottom: 38px;
          }

          .sc-resource-group {
            padding: 30px 0;
          }

          .sc-resource-links {
            grid-template-columns: 1fr;
            gap: 0;
            padding-top: 0;
          }

          .sc-resource-link,
          .sc-resource-link:first-child,
          .sc-resource-link:last-child {
            padding: 24px 0;
          }

          .sc-resource-link + .sc-resource-link {
            border-top: 1px solid var(--sc-line);
            border-left: 0;
          }

          .sc-resources-footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 18px;
          }

          .sc-resources-footer .sc-editorial-link {
            margin-top: 0;
          }

          .sc-stepes-support-grid {
            grid-template-columns: 1fr;
          }

          .sc-stepes-support-item {
            min-height: 0;
            padding: 28px 24px;
          }

          .sc-stepes-support-item h3 {
            font-size: 20px;
          }

          .sc-faq-panel {
            border-radius: 20px;
          }

          .sc-faq-item summary {
            min-height: 72px;
            gap: 18px;
            padding: 22px 20px;
            font-size: 16px;
          }

          .sc-faq-answer {
            padding: 0 20px 22px;
          }

          .sc-final-cta {
            padding: 18px 0 68px;
          }

          .sc-final-cta-panel {
            padding: 46px 24px;
            border-radius: 24px;
          }

          .sc-final-cta-panel::after {
            display: none;
          }

          .sc-final-cta h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .sc-final-cta-copy {
            font-size: 18px;
            line-height: 1.65;
          }

          .sc-final-cta-actions {
            display: grid;
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <section className="sc-hero" aria-labelledby="security-compliance-title">
        <div className="sc-shell">
          <div className="sc-hero-copy">
            <p className="sc-eyebrow">Security &amp; Compliance Resources</p>
            <h1 id="security-compliance-title">Security and Compliance for Enterprise Translation</h1>
            <p className="sc-hero-intro">
              Protect multilingual content across every stage of the translation lifecycle. Explore practical guidance on translation security, AI governance, confidentiality, privacy, regulated content, vendor risk, and enterprise workflow control.
            </p>
            <div className="sc-hero-actions">
              <a
                className="sc-button sc-button--primary"
                href="https://www.stepes.com/security-and-compliance/#security-priorities"
              >
                Explore Security Topics
                <ArrowIcon />
              </a>
              <a className="sc-button sc-button--secondary" href="https://www.stepes.com/security/">
                Review Stepes Security
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="sc-hero-visual" role="group" aria-label="Controlled multilingual workflow">
            <div className="sc-visual-header">
              <div>
                <strong>Controlled Multilingual Workflow</strong>
                <span>Security follows content from intake through approved delivery.</span>
              </div>
              <span className="sc-visual-status">Governed Workflow</span>
            </div>

            <div className="sc-workflow">
              <WorkflowNode label="Content Intake" detail="Classify content and requirements" />
              <WorkflowNode label="Governed Routing" detail="Apply approved technology and access" state="active" />
              <WorkflowNode label="Translation & Review" detail="Assign qualified human oversight" state="active" />
              <WorkflowNode label="Approved Delivery" detail="Verify version, destination, and release" state="approved" />
            </div>

            <div className="sc-control-row" role="group" aria-label="Workflow controls">
              {controlItems.map((item) => (
                <div className="sc-control-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sc-section" id="enterprise-controls" aria-labelledby="enterprise-controls-title">
        <div className="sc-shell">
          <div className="sc-overview-grid">
            <div>
              <p className="sc-eyebrow">The Multilingual Risk Surface</p>
              <h2 id="enterprise-controls-title">Enterprise Translation Requires Enterprise Controls</h2>
            </div>

            <div className="sc-section-copy">
              <p className="sc-section-lead">
                Translation and localization expand the number of systems, participants, languages, versions, and data assets involved in a content workflow. Without clear governance, every additional handoff can introduce unnecessary exposure, inconsistent access, or uncertainty about how information is processed and retained.
              </p>
              <p>
                A secure multilingual program establishes appropriate controls before content enters the workflow. It defines who can access the content, which technologies may process it, what level of human review is required, how language assets may be reused, and what must happen after delivery.
              </p>
              <div className="sc-quiet-callout">
                The strongest programs classify content before translation begins, then align technology, human access, quality assurance, retention, and approval controls to the actual risk.
              </div>
            </div>
          </div>

          <div className="sc-trust-band" aria-label="Stepes enterprise capabilities">
            {trustItems.map((item) => (
              <article className="sc-trust-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-section sc-section--soft" aria-labelledby="security-compliance-governance-title">
        <div className="sc-shell">
          <div className="sc-framework-layout">
            <div className="sc-framework-intro">
              <p className="sc-eyebrow">A Connected Operating Model</p>
              <h2 id="security-compliance-governance-title">Understanding Security, Compliance, and Governance</h2>
              <p>
                These disciplines are closely connected, but each addresses a different part of an enterprise translation program. Together, they establish how multilingual content is protected, how requirements are applied, and how decisions are controlled.
              </p>
              <a className="sc-editorial-link" href="https://www.stepes.com/security-and-compliance/#multilingual-content-lifecycle">
                See the Multilingual Content Lifecycle
                <ArrowIcon />
              </a>
            </div>

            <div className="sc-framework-list">
              {frameworkItems.map((item) => (
                <article className="sc-framework-item" key={item.title}>
                  <div className="sc-framework-icon">{item.icon}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    {item.bullets ? (
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                    {item.note ? <p className="sc-framework-note">{item.note}</p> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sc-section" id="security-priorities" aria-labelledby="security-priorities-title">
        <div className="sc-shell">
          <div className="sc-section-heading">
            <p className="sc-eyebrow">Explore by Priority</p>
            <h2 id="security-priorities-title">Explore Security and Compliance by Priority</h2>
            <p>
              Build a multilingual security program around the risks, requirements, and operating decisions that matter most to your organization.
            </p>
          </div>

          <div className="sc-priority-grid">
            {priorityItems.map((item) => (
              <article className="sc-priority-item" key={item.title}>
                <div className="sc-priority-icon">
                  <TopicIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="sc-editorial-link" href={item.href}>
                  {item.link}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-section sc-section--soft" id="secure-multilingual-framework" aria-labelledby="secure-framework-title">
        <div className="sc-shell">
          <div className="sc-operating-head">
            <div>
              <p className="sc-eyebrow">Five Connected Controls</p>
              <h2 id="secure-framework-title">A Practical Framework for Secure Multilingual Operations</h2>
            </div>
            <p className="sc-section-lead">
              Secure translation depends on more than one technology or policy. Enterprises should evaluate the complete operating model across five connected areas.
            </p>
          </div>

          <div className="sc-operating-grid">
            {operatingModelItems.map((item) => (
              <article className="sc-operating-item" key={item.title}>
                <div className="sc-operating-icon">
                  <TopicIcon name={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sc-operating-summary">
            <p>
              Security is strongest when it is measurable, documented, and connected to everyday translation and localization operations.
            </p>
            <a className="sc-editorial-link" href="https://www.stepes.com/translation-quality-system/">
              Explore the Stepes Quality System
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sc-section" id="multilingual-content-lifecycle" aria-labelledby="content-lifecycle-title">
        <div className="sc-shell">
          <div className="sc-lifecycle-heading">
            <div>
              <p className="sc-eyebrow">End-to-End Workflow Control</p>
              <h2 id="content-lifecycle-title">Security Across the Multilingual Content Lifecycle</h2>
            </div>
            <p className="sc-section-lead">
              Every stage of translation introduces different decisions, participants, and information assets. Security should follow the content from intake through approved delivery and post-project handling.
            </p>
          </div>

          <div className="sc-lifecycle-table" role="table" aria-label="Security controls across the multilingual content lifecycle">
            <div className="sc-lifecycle-row sc-lifecycle-row--header" role="row">
              <div role="columnheader">Lifecycle Stage</div>
              <div role="columnheader">Control Focus</div>
              <div role="columnheader">What Enterprises Should Define</div>
            </div>
            {lifecycleItems.map((item) => (
              <article className="sc-lifecycle-row" role="row" key={item.number}>
                <div className="sc-lifecycle-stage" role="cell">
                  <span className="sc-lifecycle-number">{item.number}</span>
                  <strong>{item.stage}</strong>
                </div>
                <div className="sc-lifecycle-focus" role="cell">
                  <span className="sc-mobile-label">Control Focus</span>
                  <strong>{item.focus}</strong>
                </div>
                <div className="sc-lifecycle-detail" role="cell">
                  <span className="sc-mobile-label">What Enterprises Should Define</span>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-ai-section" id="ai-translation-security" aria-labelledby="ai-security-title">
        <div className="sc-shell">
          <div className="sc-ai-intro-grid">
            <div>
              <p className="sc-eyebrow">Responsible AI for Multilingual Content</p>
              <h2 id="ai-security-title">AI Translation Security and Governance</h2>
            </div>
            <div className="sc-ai-intro-copy">
              <p>
                AI translation can improve speed, scalability, and multilingual coverage, but enterprise adoption requires more than selecting a model with strong linguistic output.
              </p>
              <p>
                Organizations must understand how content is processed, whether it is retained, how submitted data may be used, which third parties are involved, and whether the workflow provides sufficient human oversight. A responsible program defines approved AI use before employees submit content to consumer-facing tools.
              </p>
              <a className="sc-editorial-link" href="https://www.stepes.com/ai-translation-insights/">
                Explore AI Translation Insights
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="sc-ai-subsection">
            <div className="sc-ai-subsection-head">
              <h3>Questions Every Enterprise Should Ask</h3>
              <p>
                Evaluate the complete data and workflow relationship—not only translation quality—before approving an AI translation model, engine, integration, or service.
              </p>
            </div>
            <div className="sc-ai-questions">
              {aiQuestions.map((question) => (
                <div className="sc-ai-question" key={question}>{question}</div>
              ))}
            </div>
          </div>

          <div className="sc-ai-subsection">
            <div className="sc-ai-subsection-head">
              <h3>Match the Workflow to the Risk</h3>
              <p>
                Not every document requires the same translation method. Use content sensitivity, intended use, audience, regulatory impact, and consequences of error to determine the appropriate combination of AI and human review.
              </p>
            </div>
            <div className="sc-risk-grid">
              {riskTiers.map((tier) => (
                <article className="sc-risk-item" key={tier.label}>
                  <div className="sc-risk-label">{tier.label}</div>
                  <h4>{tier.title}</h4>
                  <p>{tier.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="sc-human-oversight">
            <h3>Human Oversight Is a Control, Not an Afterthought</h3>
            <p>
              Qualified professionals evaluate meaning, terminology, context, ambiguity, cultural appropriateness, regulatory language, and the real-world consequences of a translation decision. The required level of oversight should be defined before translation begins rather than added only after a problem appears.
            </p>
          </div>
        </div>
      </section>


      <section className="sc-section" id="data-security" aria-labelledby="data-security-title">
        <div className="sc-shell">
          <div className="sc-assets-head">
            <div>
              <p className="sc-eyebrow">Protect the Complete Content Package</p>
              <h2 id="data-security-title">Data Security, Privacy, and Language Assets</h2>
            </div>
            <p className="sc-section-lead">
              Multilingual workflows create derivative files, reusable language data, reviewer context, and translated versions that can be as sensitive as the original source. Protecting the complete content package requires clear ownership, access, reuse, retention, and privacy controls.
            </p>
          </div>

          <div className="sc-assets-summary" aria-label="Multilingual assets that may require protection">
            <span>Source and translated files</span>
            <span>Translation memories and terminology</span>
            <span>Comments and supporting materials</span>
            <span>Personal and regulated information</span>
          </div>

          <div className="sc-asset-list">
            {languageAssetItems.map((item) => (
              <article className="sc-asset-row" id={item.id} key={item.title}>
                <div className="sc-asset-icon">
                  <TopicIcon name={item.icon} />
                </div>
                <div>
                  <span className="sc-asset-label">{item.label}</span>
                  <h3>{item.title}</h3>
                </div>
                <div className="sc-asset-copy">
                  <p>{item.text}</p>
                  {item.bullets ? (
                    <ul>
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="sc-asset-links">
            <a className="sc-editorial-link" href="https://www.stepes.com/security/">
              Review Stepes Security
              <ArrowIcon />
            </a>
            <a className="sc-editorial-link" href="https://www.stepes.com/translation-memory/">
              Explore Translation Memory
              <ArrowIcon />
            </a>
            <a className="sc-editorial-link" href="https://www.stepes.com/terminology-management/">
              Explore Terminology Management
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sc-section sc-section--soft" id="compliance-standards" aria-labelledby="compliance-standards-title">
        <div className="sc-shell">
          <div className="sc-standards-layout">
            <div className="sc-standards-intro">
              <p className="sc-eyebrow">Compliance and Standards Navigator</p>
              <h2 id="compliance-standards-title">Connect Standards to the Actual Multilingual Workflow</h2>
              <p>
                Standards and regulatory frameworks can help define quality, privacy, security, documentation, and operational expectations. They should be applied according to the content, industry, jurisdiction, and intended use.
              </p>
              <div className="sc-standards-note">
                No single certification guarantees that every project is secure or compliant. Project-level assurance depends on the complete workflow, applicable requirements, organizations involved, technology, contracts, and controls.
              </div>
              <a className="sc-editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">
                Review Stepes ISO Certifications
                <ArrowIcon />
              </a>
            </div>

            <div className="sc-standards-list">
              {standardsItems.map((item) => (
                <article className="sc-standard-row" key={item.title}>
                  <div className="sc-standard-category">{item.category}</div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sc-section" id="regulated-content" aria-labelledby="industry-risk-title">
        <div className="sc-shell">
          <div className="sc-industry-intro">
            <div>
              <p className="sc-eyebrow">Risk-Based Workflow Design</p>
              <h2 id="industry-risk-title">Security by Industry and Content Risk</h2>
            </div>
            <p className="sc-section-lead">
              Security and compliance requirements vary with the content, audience, jurisdiction, and consequences of error. The workflow should reflect the real operational and regulatory risk—not simply the file format or word count.
            </p>
          </div>

          <div className="sc-industry-grid">
            {industryRiskItems.map((item) => (
              <article className="sc-industry-item" key={item.title}>
                <span className="sc-industry-sector">{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sc-industry-footer">
            <p>
              Content classification should determine the approved technology, professional expertise, review model, access controls, documentation, and release process for each multilingual program.
            </p>
            <a className="sc-editorial-link" href="https://www.stepes.com/ai-human-translation-workflow/">
              Explore AI + Human Workflows
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sc-section sc-section--soft" id="security-evaluation-checklist" aria-labelledby="security-checklist-title">
        <div className="sc-shell">
          <div className="sc-checklist-head">
            <div>
              <p className="sc-eyebrow">Enterprise Buyer Checklist</p>
              <h2 id="security-checklist-title">Enterprise Translation Security Evaluation Checklist</h2>
            </div>
            <p className="sc-section-lead">
              Use these questions to evaluate a translation provider, localization platform, AI translation solution, or multilingual operating model. A strong provider should explain how its controls apply to your specific content and workflow—not only provide generic policy statements.
            </p>
          </div>

          <div className="sc-checklist-panel">
            {checklistGroups.map((group) => (
              <article className="sc-checklist-row" key={group.title}>
                <div className="sc-checklist-title">
                  <h3>{group.title}</h3>
                </div>
                <ul className="sc-checklist-questions">
                  {group.questions.map((question) => (
                    <li key={question}>{question}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="sc-checklist-cta">
            <p>
              Evaluating a complex or regulated multilingual program? Stepes can review your security questionnaire, workflow requirements, language-asset controls, quality model, and enterprise support needs.
            </p>
            <div className="sc-checklist-actions">
              <a className="sc-button sc-button--primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert
                <ArrowIcon />
              </a>
              <a className="sc-button sc-button--secondary" href="https://www.stepes.com/enterprise-support/">
                Enterprise Support
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="sc-section" id="featured-security-resources" aria-labelledby="featured-security-resources-title">
        <div className="sc-shell">
          <div className="sc-resources-head">
            <div>
              <p className="sc-eyebrow">Guides and Buyer Resources</p>
              <h2 id="featured-security-resources-title">Practical Guidance for Enterprise Multilingual Risk</h2>
            </div>
            <p className="sc-section-lead">
              Explore focused guidance for security, procurement, privacy, localization, and compliance teams. Each resource connects enterprise requirements to the people, technology, data, and approvals involved in multilingual content operations.
            </p>
          </div>

          <div className="sc-resource-groups">
            {resourceGroups.map((group) => (
              <div className="sc-resource-group" key={group.category}>
                <div className="sc-resource-category">
                  <h3>{group.category}</h3>
                  <p>{group.description}</p>
                </div>
                <div className="sc-resource-links">
                  {group.resources.map((resource) => (
                    <a className="sc-resource-link" href={resource.href} key={resource.title}>
                      <h4>{resource.title}</h4>
                      <p>{resource.text}</p>
                      <span>
                        Read the Guide
                        <ArrowIcon size={15} />
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sc-resources-footer">
            <p>
              Use the Security &amp; Compliance hub as a working reference for policy design, provider evaluation, AI governance, regulated translation, and multilingual program oversight.
            </p>
            <a className="sc-editorial-link" href="https://www.stepes.com/security-and-compliance/">
              Explore All Security and Compliance Resources
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="sc-section sc-section--soft" id="stepes-secure-operations" aria-labelledby="stepes-secure-operations-title">
        <div className="sc-shell">
          <div className="sc-stepes-support-head">
            <p className="sc-eyebrow">Stepes Enterprise Capabilities</p>
            <h2 id="stepes-secure-operations-title">How Stepes Supports Secure Multilingual Operations</h2>
            <p className="sc-section-lead">
              Stepes combines translation technology, professional linguists, documented quality processes, and enterprise workflow controls to support complex multilingual programs across teams, content types, and markets.
            </p>
          </div>

          <div className="sc-stepes-support-grid">
            {stepesSupportItems.map((item) => (
              <article className="sc-stepes-support-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="sc-editorial-link" href={item.href}>
                  {item.link}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sc-section" id="security-compliance-faq" aria-labelledby="security-compliance-faq-title">
        <div className="sc-shell">
          <div className="sc-faq-layout">
            <div className="sc-faq-intro">
              <p className="sc-eyebrow">Frequently Asked Questions</p>
              <h2 id="security-compliance-faq-title">Translation Security and Compliance Questions</h2>
              <p>
                Clarify how AI, human access, privacy, language assets, certifications, regulated content, and vendor assurance fit into a controlled multilingual workflow.
              </p>
              <div className="sc-faq-contact">
                <a className="sc-editorial-link" href="https://www.stepes.com/contact-us/">
                  Contact Our Enterprise Team
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="sc-faq-panel">
              {faqItems.map((item, index) => (
                <details className="sc-faq-item" key={item.question} open={index === 0}>
                  <summary>
                    <span>{item.question}</span>
                    <span className="sc-faq-toggle" aria-hidden="true" />
                  </summary>
                  <div className="sc-faq-answer">
                    <p>{item.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sc-final-cta" aria-labelledby="secure-multilingual-operations-title">
        <div className="sc-shell">
          <div className="sc-final-cta-panel">
            <div className="sc-final-cta-content">
              <p className="sc-eyebrow">Secure Multilingual Operations</p>
              <h2 id="secure-multilingual-operations-title">Build Security Into Every Multilingual Workflow</h2>
              <p className="sc-final-cta-copy">
                Protect confidential content, govern AI translation, control human access, manage language assets, and support compliance-sensitive communication across languages. Talk with the Stepes enterprise team about your security, privacy, quality, retention, regulatory, and workflow requirements.
              </p>
              <div className="sc-final-cta-actions">
                <a className="sc-button sc-button--primary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                  <ArrowIcon />
                </a>
                <a className="sc-button sc-button--secondary" href="https://www.stepes.com/security/">
                  Review Stepes Security
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
