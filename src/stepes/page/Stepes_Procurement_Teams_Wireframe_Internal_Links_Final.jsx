import React from "react";

const heroCapabilities = [
  {
    title: "Supplier Qualification",
    description:
      "Support vendor evaluation, onboarding, documentation review, and pilot validation.",
  },
  {
    title: "Commercial Control",
    description:
      "Establish clearer service definitions, rate structures, invoicing requirements, and cost visibility.",
  },
  {
    title: "Quality and Security",
    description:
      "Evaluate professional resources, quality processes, confidentiality, access, and project handling.",
  },
  {
    title: "Performance Visibility",
    description:
      "Measure delivery, quality, responsiveness, volume, spend, and program health.",
  },
];

const trustItems = [
  "ISO 17100",
  "ISO 9001",
  "ISO 13485",
  "Secure Enterprise Workflows",
  "Professional Human Review",
  "100+ Languages",
];

const challengeGroups = [
  {
    label: "Supplier and Spend Fragmentation",
    items: [
      {
        title: "Fragmented Supplier Relationships",
        description:
          "Different departments and regions may engage translation providers independently, resulting in inconsistent commercial terms, service expectations, workflows, and accountability.",
      },
      {
        title: "Limited Spend Visibility",
        description:
          "Translation costs may be distributed across business units, purchase orders, currencies, content categories, and local budgets, making enterprise-wide analysis difficult.",
      },
    ],
  },
  {
    label: "Service and Risk Inconsistency",
    items: [
      {
        title: "Inconsistent Service Definitions",
        description:
          "Translation, editing, post-editing, linguistic review, validation, localization, transcreation, desktop publishing, and AI-assisted translation may be defined differently by each provider.",
      },
      {
        title: "Uneven Quality and Security Controls",
        description:
          "Suppliers may use different approaches to linguist qualification, confidentiality, terminology, review, file handling, quality assurance, and AI-enabled processing.",
      },
    ],
  },
  {
    label: "Asset and Performance Governance",
    items: [
      {
        title: "Duplicated Language Assets",
        description:
          "Translation memories, terminology databases, style guides, approved translations, and reviewer preferences can become fragmented across suppliers and departments.",
      },
      {
        title: "Unclear Performance Accountability",
        description:
          "Without common measures, procurement teams may struggle to compare on-time delivery, responsiveness, quality findings, corrective actions, reviewer experience, and overall service performance.",
      },
    ],
  },
];

const controlAreas = [
  {
    title: "Commercial Control",
    paragraphs: [
      "Establish clearer service categories, rate structures, translation-memory treatment, purchase-order requirements, invoicing procedures, currencies, turnaround expectations, and project assumptions.",
      "A defined commercial framework makes it easier to compare like-for-like services, evaluate program costs, and reduce unexpected differences between projects.",
    ],
  },
  {
    title: "Supplier Governance",
    paragraphs: [
      "Define the people, responsibilities, communication routes, approval roles, escalation paths, service expectations, and performance-review cadence behind the relationship.",
      "Procurement retains clearer oversight while business teams gain a practical way to request and manage translation work.",
    ],
  },
  {
    title: "Quality and Compliance",
    paragraphs: [
      "Align professional resource qualifications, terminology controls, translation and review steps, quality assurance, feedback handling, and documentation with the requirements of each content category.",
      "Business-critical, technical, legal, medical, financial, and regulated content can follow more controlled workflows than lower-risk internal or high-volume materials.",
    ],
  },
  {
    title: "Security and Confidentiality",
    paragraphs: [
      "Evaluate how files, project participants, review comments, translation memories, terminology assets, and final deliverables are managed throughout the multilingual lifecycle.",
      "Stepes supports restricted project access, confidentiality obligations, managed workflows, AWS-hosted infrastructure, and enterprise security review.",
    ],
  },
];

const enterpriseStandardsGroups = [
  {
    label: "Access and Routing",
    items: [
      {
        title: "Centralized Request Intake",
        paragraphs: [
          "Give approved teams one structured way to submit source files, target languages, deadlines, content information, reference materials, and service requirements.",
          "Clearer project inputs reduce unnecessary clarification and help translation work begin with a more complete scope.",
        ],
      },
      {
        title: "Defined Service Levels",
        paragraphs: [
          "Clarify the differences between professional translation, AI-assisted translation, post-editing, independent linguistic review, subject-matter review, in-context QA, desktop publishing, multimedia localization, and other services.",
          "Each request can then be routed to the appropriate production and review model.",
        ],
      },
    ],
  },
  {
    label: "Team and Review Flexibility",
    items: [
      {
        title: "Department-Specific Workflows",
        paragraphs: [
          "Support localization, marketing, product, engineering, legal, compliance, life sciences, HR, training, customer support, and regional teams within one enterprise supplier framework.",
          "Departments retain workflows appropriate to their content without creating disconnected supplier relationships.",
        ],
      },
      {
        title: "Structured Review and Approval",
        paragraphs: [
          "Coordinate internal reviewers, regional stakeholders, subject-matter experts, and final approvers through defined review stages.",
          "Review requirements can vary according to the language, department, content sensitivity, and market.",
        ],
      },
    ],
  },
  {
    label: "Assets and Program Visibility",
    items: [
      {
        title: "Controlled Language Assets",
        paragraphs: [
          "Centralize approved translation memory, terminology, style preferences, reference materials, and reviewer decisions so they can support future projects.",
          "This strengthens consistency and helps the organization retain greater control over its multilingual intellectual assets.",
        ],
      },
      {
        title: "Consolidated Program Visibility",
        paragraphs: [
          "Give authorized stakeholders a clearer view of project status, languages, deadlines, review activity, delivery history, volume, and spend.",
          "This helps procurement and business owners manage translation as an ongoing enterprise capability rather than a collection of disconnected transactions.",
        ],
      },
    ],
  },
];

const qualificationSteps = [
  {
    number: "01",
    title: "Requirements Alignment",
    lead: "Begin by defining the expected scope of the relationship:",
    bullets: [
      "Participating departments and regions",
      "Source and target languages",
      "Content types and file formats",
      "Historic and projected volumes",
      "Typical and urgent turnaround requirements",
      "Quality and review expectations",
      "Regulatory or subject-matter requirements",
      "Technology, portal, or integration needs",
      "Confidentiality and data-handling expectations",
    ],
    closing:
      "This creates a more accurate foundation for commercial, operational, and quality evaluation.",
  },
  {
    number: "02",
    title: "Quality and Security Review",
    lead: "Review the controls behind translation delivery, including:",
    bullets: [
      "Quality-system documentation",
      "Relevant ISO standards",
      "Linguist and reviewer qualification",
      "Translation and review workflows",
      "Terminology and translation-memory practices",
      "Quality assurance and issue resolution",
      "Access and confidentiality controls",
      "File transfer and project handling",
      "AI-assisted workflow requirements",
      "Retention or deletion expectations",
    ],
    closing:
      "Stepes can work with procurement, quality, and security stakeholders to clarify the operating model behind the proposed services.",
  },
  {
    number: "03",
    title: "Commercial Framework",
    lead: "Align the commercial structure with the expected program:",
    bullets: [
      "Service categories and definitions",
      "Rate structures",
      "Translation-memory leverage",
      "Minimum charges",
      "Rush or specialized-service requirements",
      "Volume assumptions",
      "Currencies and tax requirements",
      "Purchase-order procedures",
      "Invoice structure",
      "Payment terms",
    ],
    closing:
      "The goal is to create enough clarity that services and costs can be evaluated consistently across projects.",
  },
  {
    number: "04",
    title: "Pilot or Validation Project",
    paragraphs: [
      "Use representative content, languages, deadlines, and internal reviewers to test the proposed workflow.",
      "A controlled pilot can evaluate translation quality, terminology, communication, responsiveness, project management, review handling, delivery readiness, and commercial accuracy before broader adoption.",
    ],
  },
  {
    number: "05",
    title: "Contracting and Supplier Onboarding",
    lead: "Complete the documentation appropriate to the relationship, which may include:",
    bullets: [
      "Non-disclosure agreement",
      "Master services agreement",
      "Statement of work",
      "Supplier registration",
      "Quality documentation",
      "Certification information",
      "Security questionnaire",
      "Purchasing requirements",
      "Contact and escalation matrix",
    ],
    closing:
      "The exact onboarding package should reflect the client’s requirements and the services being procured.",
  },
  {
    number: "06",
    title: "Launch and Governance",
    lead: "Establish the working structure for ongoing delivery:",
    bullets: [
      "Authorized requesters",
      "Project intake routes",
      "Service and review levels",
      "Language assets",
      "Reporting requirements",
      "Escalation contacts",
      "Performance-review cadence",
      "Feedback and corrective-action procedures",
      "Expansion criteria",
    ],
    closing:
      "This creates a controlled transition from supplier approval to daily multilingual operations.",
  },
];

const totalCostLevers = [
  {
    title: "Translation Memory Reuse",
    focus:
      "Previously approved translations can be stored and reused when the same or similar content appears in future projects.",
    impact:
      "This can reduce repeated translation effort, improve consistency, and make recurring content easier to manage.",
  },
  {
    title: "Terminology Preparation",
    focus:
      "Approved glossaries help translators, reviewers, and AI-assisted workflows use consistent product names, technical terms, regulatory language, and company-specific expressions.",
    impact:
      "Resolving important terminology early can reduce reviewer changes and downstream corrections.",
  },
  {
    title: "Risk-Based Workflow Selection",
    focus: "Not every document requires the same production process.",
    impact:
      "Procurement and business stakeholders can define when content requires professional translation, independent review, subject-matter expertise, in-market validation, AI-assisted workflows, or lighter review.",
  },
  {
    title: "AI-Assisted Translation Where Appropriate",
    focus:
      "AI can support speed, analysis, routing, translation productivity, terminology application, and quality checks when aligned with the content and client requirements.",
    impact:
      "Professional human review remains available for content where accuracy, fluency, brand voice, technical meaning, or regulatory sensitivity requires expert judgment.",
  },
  {
    title: "Workflow Automation",
    focus:
      "Structured intake, project analysis, routing, translation memory, terminology, review, QA, and delivery can reduce repetitive project coordination.",
    impact:
      "Automation is most valuable when it removes avoidable administration without weakening accountability.",
  },
  {
    title: "Reduced Rework",
    focus:
      "Clear instructions, qualified resources, approved terminology, review controls, and feedback loops help reduce preventable corrections.",
    impact:
      "Validated changes can also strengthen translation memory and terminology assets for future work.",
  },
  {
    title: "Supplier and Invoice Simplification",
    focus:
      "Consolidating appropriate work under a clearer supplier framework can reduce administrative fragmentation across projects, departments, and invoices.",
    impact:
      "Stepes can also operate within preferred-supplier, dual-source, specialized-provider, or regional sourcing models when a fully consolidated structure is not appropriate.",
  },
];

const performanceAreas = [
  {
    title: "Delivery Performance",
    measures: [
      "On-time delivery",
      "Milestone performance",
      "Average turnaround",
      "Delivery readiness",
      "Late-project causes",
      "Urgent-request performance",
    ],
  },
  {
    title: "Service and Responsiveness",
    measures: [
      "Initial response time",
      "Quote turnaround",
      "Project communication",
      "Question resolution",
      "Escalation handling",
      "Stakeholder support",
    ],
  },
  {
    title: "Translation Quality",
    measures: [
      "Quality findings",
      "Issue severity",
      "Terminology findings",
      "Corrections",
      "Repeat issues",
      "Acceptance status",
    ],
    note: "Quality should be evaluated through an agreed framework rather than a single unqualified score.",
  },
  {
    title: "Corrective Action and Improvement",
    measures: [
      "Issue root cause",
      "Corrective action",
      "Terminology updates",
      "Translation-memory updates",
      "Resource changes",
      "Workflow refinements",
      "Recurrence prevention",
    ],
  },
  {
    title: "Cost and Volume",
    measures: [
      "Department",
      "Business unit",
      "Language",
      "Content type",
      "Service level",
      "Project",
      "Time period",
      "Word or file volume",
    ],
  },
  {
    title: "Language Asset Reuse",
    measures: [
      "Translation-memory leverage",
      "Repeated-content reuse",
      "Terminology coverage",
      "New approved language assets",
      "Reviewer-approved updates",
    ],
  },
  {
    title: "Review and Approval",
    measures: [
      "Reviewer cycle time",
      "Approval status",
      "Feedback patterns",
      "Open questions",
      "Number of review rounds",
      "Stakeholder participation",
    ],
  },
  {
    title: "Program Health",
    measures: [
      "Open escalations",
      "Upcoming demand",
      "Capacity requirements",
      "High-risk projects",
      "Service review actions",
      "Expansion opportunities",
    ],
  },
];

const qualityStandards = [
  {
    title: "ISO 17100",
    description:
      "Supports professional translation-service requirements, including qualified resources, project management, revision, review, and client communication.",
  },
  {
    title: "ISO 9001",
    description:
      "Supports structured quality-management practices, process consistency, customer requirements, and continual improvement.",
  },
  {
    title: "ISO 13485",
    description:
      "Supports quality-management expectations relevant to medical device and life sciences environments where controlled processes and supplier oversight are important.",
  },
];

const qualifiedResourceCriteria = [
  "Language pair",
  "Native-language expertise",
  "Subject-matter knowledge",
  "Content type",
  "Project requirements",
  "Quality expectations",
  "Review level",
];

const qualityControls = [
  "Requirements capture",
  "Reference-material review",
  "Terminology preparation",
  "Translation-memory application",
  "Translation",
  "Editing or review",
  "Automated QA",
  "Formatting checks",
  "In-context review",
  "Client review",
  "Final delivery checks",
  "Feedback capture",
];

const securityControls = [
  "Authorized project access",
  "NDA-covered language professionals",
  "Managed translation and review workflows",
  "Controlled file handling",
  "AWS-hosted infrastructure",
  "Confidentiality requirements",
  "Client-specific project instructions",
  "Enterprise security review support",
];

const aiGovernanceControls = [
  {
    title: "Where AI Can Add Value",
    lead: "AI can support:",
    bullets: [
      "File and content analysis",
      "Workflow routing",
      "Translation assistance",
      "Translation-memory matching",
      "Terminology application",
      "Repetitive-content processing",
      "Quality checks",
      "Project automation",
    ],
    closing:
      "The role of AI should be determined by the content, intended audience, confidentiality requirements, quality expectations, and business objective.",
  },
  {
    title: "How Content Is Routed",
    paragraphs: [
      "A routine internal document may follow a different workflow from a customer-facing campaign, product interface, contract, medical document, regulatory submission, or safety manual.",
      "Stepes can route content through different combinations of automation, professional translation, editing, subject-matter review, validation, and QA.",
    ],
  },
  {
    title: "When Human Review Applies",
    lead: "Professional linguists and reviewers can be used when content requires:",
    bullets: [
      "High linguistic accuracy",
      "Natural fluency",
      "Brand voice",
      "Technical precision",
      "Legal meaning",
      "Regulatory sensitivity",
      "Cultural adaptation",
      "In-market judgment",
      "Final publication quality",
    ],
    closing:
      "Human review is a governed part of the service model rather than an assumption applied identically to every project.",
  },
  {
    title: "How Language Assets Guide the Workflow",
    paragraphs: [
      "Approved translation memory, terminology, style guidance, reference content, and reviewer decisions can help guide both human and AI-assisted workflows.",
      "This helps preserve company-specific language and reduce inconsistency across projects and suppliers.",
    ],
  },
  {
    title: "How Confidentiality Requirements Are Addressed",
    paragraphs: [
      "AI-enabled workflows can be configured according to project needs, confidentiality expectations, and client instructions.",
      "Specific requirements regarding content handling, approved technology, data use, retention, access, and human review should be discussed during security review and onboarding.",
    ],
  },
  {
    title: "How Quality Is Governed",
    lead: "AI-assisted output can be supported by:",
    bullets: [
      "Terminology controls",
      "Translation memory",
      "Professional human review",
      "Automated QA",
      "Completeness checks",
      "Formatting checks",
      "Number and unit checks",
      "Client review",
      "Final delivery controls",
    ],
    closing:
      "The appropriate combination depends on the purpose and risk of the content.",
  },
];

const sourcingModelGroups = [
  {
    label: "Core Supplier Models",
    items: [
      {
        title: "Preferred Supplier Model",
        paragraphs: [
          "Use Stepes as a primary translation and localization partner across multiple departments, languages, content types, and markets.",
          "A common supplier framework can simplify governance while preserving department-specific workflows.",
        ],
      },
      {
        title: "Dual-Source Model",
        paragraphs: [
          "Use a primary and secondary supplier structure to support capacity, business continuity, benchmarking, specialized expertise, or risk management.",
          "Clear scopes and language-asset responsibilities can reduce duplication between providers.",
        ],
      },
    ],
  },
  {
    label: "Focused Rollout Models",
    items: [
      {
        title: "Specialized Supplier Model",
        paragraphs: [
          "Engage Stepes for selected content categories, industries, languages, regulated workflows, AI-assisted programs, or technology integrations alongside other approved providers.",
        ],
      },
      {
        title: "Regional or Departmental Rollout",
        paragraphs: [
          "Begin with one geography, business unit, department, or content program before extending the relationship more broadly.",
          "This allows stakeholders to validate the operating model through practical use.",
        ],
      },
    ],
  },
  {
    label: "Flexible Capacity Models",
    items: [
      {
        title: "Pilot-to-Program Model",
        paragraphs: [
          "Start with representative projects and expand after evaluating quality, service, workflow, security, commercial clarity, and stakeholder experience.",
        ],
      },
      {
        title: "Overflow and Surge Support",
        paragraphs: [
          "Use Stepes to support urgent demand, large multilingual releases, seasonal volume, or additional language capacity when existing resources are constrained.",
        ],
      },
    ],
  },
];

const enterpriseTeams = [
  {
    title: "Localization Teams",
    description:
      "Software, websites, documentation, terminology, review, and recurring release workflows.",
  },
  {
    title: "Marketing Teams",
    description:
      "Campaigns, websites, product messaging, digital content, video, and brand communications.",
  },
  {
    title: "Product and Engineering Teams",
    description:
      "Software strings, product interfaces, technical documentation, release content, and support materials.",
  },
  {
    title: "Legal and Compliance Teams",
    description:
      "Contracts, policies, filings, investigations, compliance communications, and legal records.",
  },
  {
    title: "Life Sciences Teams",
    description:
      "Clinical, medical, regulatory, labeling, patient-facing, safety, and scientific content.",
  },
  {
    title: "Training and HR Teams",
    description:
      "Employee communications, learning programs, onboarding, policies, and compliance training.",
  },
  {
    title: "Customer Support Teams",
    description:
      "Help centers, support articles, knowledge bases, customer communications, and chatbot content.",
  },
  {
    title: "Regional and Country Teams",
    description:
      "Market-specific content, internal review, local adaptation, and final approval.",
  },
];

const enterpriseContentTypes = [
  "Business documents",
  "Websites and landing pages",
  "Software strings and applications",
  "Product documentation",
  "Technical manuals",
  "Legal and compliance content",
  "Medical and life sciences materials",
  "Financial communications",
  "Training and eLearning",
  "Videos and subtitles",
  "Marketing campaigns",
  "Customer support content",
  "Internal communications",
  "Presentations and sales materials",
];

const enterpriseIndustries = [
  "Technology and software",
  "AI and machine learning",
  "Life sciences",
  "Healthcare",
  "Medical devices",
  "Financial services",
  "Insurance",
  "Legal",
  "Manufacturing",
  "Automotive",
  "Electronics",
  "Telecommunications",
  "Retail and e-commerce",
  "Government",
  "Education",
  "Energy",
  "Travel and hospitality",
  "Media and entertainment",
];

const stakeholderGroups = [
  {
    label: "Commercial and Contractual",
    items: [
      {
        title: "Procurement and Strategic Sourcing",
        description:
          "Evaluate supplier fit, service definitions, pricing, commercial terms, performance measures, scalability, and governance.",
      },
      {
        title: "Legal",
        description:
          "Review confidentiality, contractual terms, responsibilities, intellectual property, data-handling language, and liability requirements.",
      },
      {
        title: "Finance and Accounts Payable",
        description:
          "Align purchase orders, invoices, currencies, cost centers, billing contacts, tax requirements, and payment procedures.",
      },
    ],
  },
  {
    label: "Risk and Executive Assurance",
    items: [
      {
        title: "Information Security and Privacy",
        description:
          "Evaluate project access, infrastructure, file handling, AI-assisted workflows, retention, deletion, confidentiality, and client-specific controls.",
      },
      {
        title: "Quality and Compliance",
        description:
          "Review ISO documentation, professional qualifications, translation and review controls, terminology management, QA, documentation, and corrective-action procedures.",
      },
      {
        title: "Executive Sponsors",
        description:
          "Evaluate business value, risk reduction, scalability, service accountability, and support for global growth.",
      },
    ],
  },
  {
    label: "Operational Readiness",
    items: [
      {
        title: "Business and Content Owners",
        description:
          "Define quality expectations, terminology, deadlines, review roles, deliverables, and intended use.",
      },
      {
        title: "Localization and Global Content Teams",
        description:
          "Evaluate workflow fit, language assets, review processes, integrations, ongoing releases, and program scalability.",
      },
      {
        title: "IT and Engineering",
        description:
          "Review portal access, APIs, system integrations, workflow automation, user roles, and technical implementation requirements.",
      },
    ],
  },
];

const pilotSteps = [
  {
    number: "01",
    title: "Select Representative Content",
    paragraphs: [
      "Choose content that reflects the intended program, including the expected subject matter, file format, language requirements, complexity, and quality level.",
      "A pilot should be representative enough to support a meaningful decision.",
    ],
  },
  {
    number: "02",
    title: "Define Evaluation Criteria",
    lead: "Agree on the factors that will be reviewed, such as:",
    bullets: [
      "Accuracy",
      "Terminology",
      "Fluency",
      "Style",
      "Formatting",
      "Turnaround",
      "Communication",
      "Reviewer experience",
      "File handling",
      "Commercial accuracy",
      "Delivery readiness",
    ],
  },
  {
    number: "03",
    title: "Run the Proposed Workflow",
    paragraphs: [
      "Use the expected project intake, language resources, translation process, review model, QA, delivery, and communication structure.",
      "This allows the organization to test more than an isolated linguistic sample.",
    ],
  },
  {
    number: "04",
    title: "Review Findings",
    paragraphs: [
      "Collect structured feedback from procurement, content owners, internal reviewers, quality stakeholders, and other participating teams.",
      "Distinguish objective errors, terminology preferences, stylistic choices, and process observations.",
    ],
  },
  {
    number: "05",
    title: "Resolve and Improve",
    paragraphs: [
      "Review questions, update terminology or instructions, address quality findings, and identify workflow improvements.",
      "This demonstrates how the supplier responds to feedback—not only how the first delivery performs.",
    ],
  },
  {
    number: "06",
    title: "Define the Rollout",
    paragraphs: [
      "Use pilot results to confirm scope, service levels, languages, stakeholders, reporting, onboarding requirements, and expansion priorities.",
    ],
  },
];

const pilotEvaluationAreas = [
  "Translation quality",
  "Terminology consistency",
  "Subject-matter understanding",
  "Turnaround",
  "Responsiveness",
  "Project communication",
  "Scope and quote accuracy",
  "Reviewer experience",
  "Workflow fit",
  "QA effectiveness",
  "Delivery readiness",
  "Corrective-action response",
  "Expansion readiness",
];

const procurementReasons = [
  {
    title: "One Connected Translation Partner",
    description:
      "Support multiple departments, content types, languages, and service levels through a coordinated enterprise relationship.",
  },
  {
    title: "AI Speed With Professional Human Expertise",
    description:
      "Use automation where it adds value while retaining professional translation, review, and subject-matter expertise where quality demands it.",
  },
  {
    title: "Flexible Quality Models",
    description:
      "Apply different translation, review, validation, QA, and approval levels based on content risk and intended use.",
  },
  {
    title: "Greater Language Asset Control",
    description:
      "Build and reuse approved translation memory, terminology, style guidance, and reviewer decisions across ongoing programs.",
  },
  {
    title: "Enterprise Quality and Security",
    description:
      "Support supplier evaluation through documented workflows, professional resources, ISO-related quality information, confidentiality controls, and security-review collaboration.",
  },
  {
    title: "Scalable Global Coverage",
    description:
      "Support recurring and project-based multilingual content across more than 100 languages and regional variants.",
  },
  {
    title: "Program Visibility",
    description:
      "Gain clearer insight into project status, deadlines, languages, review activity, volume, spend, and delivery.",
  },
  {
    title: "Practical Supplier Onboarding",
    description:
      "Move from qualification and pilot evaluation into a defined commercial, operational, and governance framework.",
  },
];

const procurementFaqs = [
  {
    question:
      "How Should Procurement Teams Evaluate a Translation Services Provider?",
    answer: [
      "Evaluation should cover more than pricing and language count. Procurement teams should review service definitions, linguist qualifications, subject-matter expertise, translation and review workflows, terminology management, translation memory, security controls, AI use, project management, scalability, reporting, corrective-action procedures, and relevant quality standards.",
      "The provider should also be evaluated through representative content and realistic delivery requirements. A controlled pilot can reveal how well the supplier scopes work, communicates, handles reviewer feedback, manages quality, and responds when questions arise.",
    ],
  },
  {
    question: "What Should Be Included in a Translation RFP?",
    answer: [
      "A translation RFP should define the organization’s content types, languages, volumes, file formats, departments, turnaround requirements, service levels, internal review processes, technology needs, confidentiality expectations, and reporting requirements.",
      "It should also ask suppliers to explain pricing assumptions, translation-memory treatment, linguist qualification, terminology processes, AI use, quality assurance, escalation procedures, onboarding support, security controls, and performance measures. Providing representative files or scenarios helps suppliers respond with more accurate commercial and operational proposals.",
    ],
  },
  {
    question:
      "Can Stepes Support a Global Preferred-Supplier Translation Program?",
    answer: [
      "Yes. Stepes can support multiple departments, content types, languages, reviewers, and service levels within one enterprise translation framework.",
      "A preferred-supplier program can include centralized intake, agreed commercial terms, translation memory, terminology, AI and human workflows, quality controls, reporting, governance, and escalation procedures. The precise structure should be aligned during qualification and onboarding so each participating team understands how to request, review, approve, and manage multilingual work.",
    ],
  },
  {
    question: "Can Stepes Work Alongside Our Existing Translation Suppliers?",
    answer: [
      "Yes. Stepes can operate as a primary supplier, secondary supplier, specialized provider, regional partner, overflow resource, or supplier for selected content categories and workflows.",
      "During onboarding, responsibilities for translation memory, terminology, approved content, file formats, reviewer feedback, and supplier handoffs should be clearly defined. This helps reduce duplicated effort and inconsistency when more than one language service provider supports the organization.",
    ],
  },
  {
    question: "How Does Stepes Help Control Enterprise Translation Costs?",
    answer: [
      "Stepes helps address translation costs through translation-memory reuse, terminology preparation, workflow automation, AI-assisted translation where appropriate, risk-based review levels, reusable language assets, and clearer project visibility.",
      "Cost should be considered across the complete workflow, including internal administration, reviewer effort, repeated content, rework, supplier management, and delayed delivery—not only the initial per-word rate. Stepes does not need to apply the same production model to every content type, allowing services to be aligned with actual business and quality requirements.",
    ],
  },
  {
    question: "How Are Translation Memory and Terminology Assets Managed?",
    answer: [
      "Translation memory stores previously translated content so approved language can be identified and reused in future projects. Terminology management helps control company-specific, product, technical, legal, regulatory, and brand terms across languages.",
      "Stepes can apply these assets during translation, AI-assisted workflows, review, and QA. Ownership, access, maintenance, approval, export, and supplier-transition requirements should be defined in the commercial and operational agreement so the organization retains appropriate control over its multilingual assets.",
    ],
  },
  {
    question: "What Quality Standards Support Stepes Translation Services?",
    answer: [
      "The Stepes enterprise quality framework is associated with ISO 17100 for translation-service requirements, ISO 9001 for quality management, and ISO 13485 for quality-management expectations relevant to medical device environments.",
      "Stepes also uses professional linguists, project management, terminology, translation memory, review, QA, feedback capture, and continuous improvement to support multilingual quality. Relevant certification information can be discussed during supplier qualification or vendor onboarding.",
    ],
  },
  {
    question: "Can Stepes Support Enterprise Security and Vendor-Risk Reviews?",
    answer: [
      "Yes. Stepes can work with procurement and security stakeholders to review project access, confidentiality, file handling, infrastructure, AI-assisted workflows, retention expectations, and client-specific requirements.",
      "Stepes uses managed translation workflows, authorized project access, NDA-covered language professionals, and AWS-hosted infrastructure. The exact security review should be based on the content, proposed workflow, systems involved, and the organization’s supplier-risk requirements.",
    ],
  },
  {
    question: "How Does Stepes Use AI in Translation Workflows?",
    answer: [
      "Stepes uses AI-assisted technology to support translation operations, workflow automation, content analysis, routing, terminology, translation-memory matching, productivity, and quality checks where appropriate.",
      "AI is combined with professional linguists, human review, terminology controls, translation memory, and QA according to the content type, audience, quality requirements, confidentiality expectations, and business risk. Specific AI and data-handling requirements should be discussed during supplier qualification and workflow design.",
    ],
  },
  {
    question: "Can Translation Workflows Vary by Department or Content Risk?",
    answer: [
      "Yes. A global marketing campaign, software interface, internal HR document, contract, medical device IFU, training course, and support article may each require a different combination of translation, AI assistance, editing, subject-matter review, validation, QA, and approval.",
      "Stepes can support multiple service models within one enterprise relationship. Procurement establishes the overall commercial and governance framework, while content owners define the quality and review requirements appropriate to each use case.",
    ],
  },
  {
    question: "What KPIs Can Be Used to Measure a Translation Supplier?",
    answer: [
      "Common measures include on-time delivery, response time, quote turnaround, quality findings, repeat issues, corrective-action completion, reviewer cycle time, project volume, language volume, spend, translation-memory reuse, escalation handling, and stakeholder satisfaction.",
      "The best KPI framework is specific to the services being purchased. Measures should be clearly defined, consistently recorded, and reviewed in context rather than combined into an unsupported single performance score.",
    ],
  },
  {
    question: "Can Stepes Provide Documentation During Supplier Qualification?",
    answer: [
      "Stepes can discuss relevant certification information, quality processes, security practices, workflow documentation, company information, service capabilities, and onboarding requirements during supplier evaluation.",
      "The exact documentation available depends on the proposed relationship, client requirements, confidentiality arrangements, and services being evaluated. Procurement teams should identify mandatory documents early so they can be addressed before contracting and supplier setup.",
    ],
  },
  {
    question:
      "How Can We Begin With a Pilot Before Entering a Larger Agreement?",
    answer: [
      "A pilot can be scoped around representative content, languages, deadlines, internal reviewers, and quality expectations.",
      "Before launch, both parties should agree on workflow, service level, evaluation criteria, pricing, deliverables, and feedback procedures. After delivery, Stepes and the client can review translation quality, terminology, communication, turnaround, reviewer experience, commercial accuracy, and corrective-action response before deciding whether to expand the program.",
    ],
  },
  {
    question: "How Many Languages and Content Types Can Stepes Support?",
    answer: [
      "Stepes supports translation across more than 100 languages and regional variants.",
      "The company supports business documents, websites, software, technical manuals, legal and compliance content, medical and life sciences materials, financial communications, training, marketing content, multimedia, customer support, and other enterprise content types through AI-powered and professional human translation workflows.",
    ],
  },
];


const relatedResourceGroups = [
  {
    label: "Enterprise Operations",
    items: [
      {
        title: "Enterprise Translation Management",
        description:
          "Centralize translation intake, workflows, language assets, review, delivery, and reporting.",
        href: "https://www.stepes.com/enterprise-translation-management/",
      },
      {
        title: "Global Content Operations",
        description:
          "Coordinate multilingual content across departments, systems, markets, and channels.",
        href: "https://www.stepes.com/solutions/global-content-operations/",
      },
      {
        title: "Customer Translation Portal",
        description:
          "Give authorized users a structured environment for requests, communication, review, and delivery.",
        href: "https://www.stepes.com/customer-translation-portal/",
      },
      {
        title: "Workflow Automation",
        description:
          "Reduce repetitive coordination across analysis, routing, translation, review, QA, and delivery.",
        href: "https://www.stepes.com/workflow-automation/",
      },
    ],
  },
  {
    label: "Quality and Trust",
    items: [
      {
        title: "Translation Quality System",
        description:
          "See how Stepes manages quality across people, process, technology, review, and improvement.",
        href: "https://www.stepes.com/translation-quality-system/",
      },
      {
        title: "ISO Translation Standards",
        description:
          "Review the internationally recognized standards associated with Stepes translation delivery.",
        href: "https://www.stepes.com/iso-certified-translation-services/",
      },
      {
        title: "Security and Confidentiality",
        description:
          "Explore project access, file handling, infrastructure, confidentiality, and security review.",
        href: "https://www.stepes.com/security/",
      },
      {
        title: "Translation Quality Assurance",
        description:
          "Review linguistic, terminology, completeness, formatting, and delivery-readiness controls.",
        href: "https://www.stepes.com/translation-quality-assurance/",
      },
    ],
  },
  {
    label: "Language Governance",
    items: [
      {
        title: "Translation Memory",
        description:
          "Reuse approved translations to improve consistency, turnaround, and cost efficiency.",
        href: "https://www.stepes.com/translation-memory/",
      },
      {
        title: "Terminology Management",
        description:
          "Maintain approved product, technical, legal, regulatory, and brand terminology across languages.",
        href: "https://www.stepes.com/terminology-management/",
      },
      {
        title: "AI Translation and Human Review",
        description:
          "Combine AI-assisted efficiency with professional expertise and multilingual quality governance.",
        href: "https://www.stepes.com/ai-human-translation-workflow/",
      },
    ],
  },
  {
    label: "Enterprise Delivery",
    items: [
      {
        title: "Translation API",
        description:
          "Connect translation workflows with websites, applications, content systems, and recurring delivery.",
        href: "https://www.stepes.com/translation-api/",
      },
      {
        title: "Translation Languages",
        description:
          "Explore more than 100 supported languages and regional variants for global programs.",
        href: "https://www.stepes.com/translation-languages/",
      },
      {
        title: "Translation Cost Guide",
        description:
          "Understand the factors that influence translation pricing and total project cost.",
        href: "https://www.stepes.com/resources/translation-cost-guide/",
      },
      {
        title: "Case Studies",
        description:
          "Explore practical examples of multilingual delivery across industries, content, and markets.",
        href: "https://www.stepes.com/resources/case-studies/",
      },
    ],
  },
];

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="wf-arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 10h11"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="m11 6 4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const styles = `
  .stepes-procurement-wireframe {
    --wf-magenta: #c11d63;
    --wf-magenta-dark: #a71954;
    --wf-blush: #fdf2f7;
    --wf-ink: #111827;
    --wf-copy: #4b5565;
    --wf-muted: #697386;
    --wf-border: #dfe4eb;
    --wf-border-soft: #e9edf2;
    --wf-surface: #f7f9fb;
    --wf-dark: #111722;
    width: 100%;
    overflow-x: clip;
    background: #ffffff;
    color: var(--wf-ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .stepes-procurement-wireframe,
  .stepes-procurement-wireframe * {
    box-sizing: border-box;
  }

  .stepes-procurement-wireframe a {
    color: inherit;
  }

  .wf-shell {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
  }

  .wf-eyebrow {
    margin: 0 0 18px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .wf-hero {
    padding: 104px 56px 88px;
    background:
      radial-gradient(circle at 91% 4%, rgba(193, 29, 99, 0.045), transparent 25%),
      linear-gradient(180deg, #ffffff 0%, #fbfcfd 100%);
  }

  .wf-hero-copy {
    max-width: 1040px;
  }

  .wf-hero h1 {
    max-width: 930px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 48px;
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.034em;
  }

  .wf-hero-lead {
    max-width: 810px;
    margin: 28px 0 0;
    color: #2d3748;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.62;
  }

  .wf-hero-body {
    max-width: 860px;
    margin: 18px 0 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.75;
  }

  .wf-hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px 26px;
    margin-top: 34px;
  }

  .wf-button {
    min-height: 48px;
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
    transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
  }

  .wf-button:hover {
    transform: translateY(-1px);
  }

  .wf-button-primary {
    background: var(--wf-magenta);
    color: #ffffff !important;
    box-shadow: 0 12px 28px rgba(193, 29, 99, 0.18);
  }

  .wf-button-primary:hover {
    background: var(--wf-magenta-dark);
    box-shadow: 0 14px 30px rgba(167, 25, 84, 0.22);
  }

  .wf-editorial-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--wf-magenta-dark) !important;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
    text-decoration: none;
    transition: color 180ms ease;
  }

  .wf-editorial-link:hover {
    color: var(--wf-magenta) !important;
  }

  .wf-button:focus-visible,
  .wf-editorial-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.25);
    outline-offset: 3px;
  }

  .wf-arrow-icon {
    width: 18px;
    height: 18px;
    flex: 0 0 auto;
    transition: transform 180ms ease;
  }

  .wf-button:hover .wf-arrow-icon,
  .wf-editorial-link:hover .wf-arrow-icon {
    transform: translateX(3px);
  }

  .wf-hero-framework {
    margin-top: 66px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-framework-header {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 34px;
    align-items: baseline;
    padding: 24px 0 22px;
    border-bottom: 1px solid var(--wf-border-soft);
  }

  .wf-framework-header .wf-eyebrow {
    margin: 0;
  }

  .wf-framework-title {
    margin: 0;
    color: #1c2635;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.014em;
  }

  .wf-framework-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  .wf-framework-item {
    min-width: 0;
    padding: 30px 28px 32px;
  }

  .wf-framework-item:first-child {
    padding-left: 0;
  }

  .wf-framework-item:last-child {
    padding-right: 0;
  }

  .wf-framework-item + .wf-framework-item {
    border-left: 1px solid var(--wf-border-soft);
  }

  .wf-framework-item h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-framework-item p {
    margin: 10px 0 0;
    color: var(--wf-copy);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65;
  }

  .wf-trust-band {
    padding-top: 26px;
  }

  .wf-trust-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 12px 0;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .wf-trust-item {
    display: inline-flex;
    align-items: center;
    color: #263143;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.45;
  }

  .wf-trust-item:not(:last-child)::after {
    content: "";
    width: 4px;
    height: 4px;
    margin: 0 16px;
    border-radius: 50%;
    background: #b6bfca;
  }

  .wf-challenges-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-section-intro-grid,
  .wf-control-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 88px;
    align-items: start;
  }

  .wf-section-intro-grid h2,
  .wf-control-intro h2 {
    margin: 0;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-section-intro-copy,
  .wf-control-intro-copy {
    max-width: 780px;
  }

  .wf-section-intro-copy p,
  .wf-control-intro-copy p {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-section-intro-copy p {
    color: var(--wf-copy);
  }

  .wf-section-intro-copy p + p,
  .wf-control-intro-copy p + p {
    margin-top: 18px;
  }

  .wf-challenge-rows {
    margin-top: 60px;
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-challenge-row {
    display: grid;
    grid-template-columns: minmax(170px, 0.56fr) repeat(2, minmax(0, 1fr));
    column-gap: 0;
  }

  .wf-challenge-row + .wf-challenge-row {
    border-top: 1px solid #d8dee7;
  }

  .wf-challenge-label {
    margin: 0;
    padding: 34px 32px 34px 0;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.13em;
    text-transform: uppercase;
  }

  .wf-challenge-item {
    min-width: 0;
    padding: 32px 36px 34px;
    border-left: 1px solid #d8dee7;
  }

  .wf-challenge-item h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-challenge-item p {
    margin: 14px 0 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-control-section {
    padding: 96px 56px;
    background: var(--wf-dark);
    color: #ffffff;
  }

  .wf-control-intro .wf-eyebrow {
    color: #f0a4c5;
  }

  .wf-control-intro h2 {
    max-width: 610px;
    color: #ffffff;
  }

  .wf-control-intro-copy p {
    color: #cbd3df;
  }

  .wf-governance-heading {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 60px;
    color: #eef2f7;
    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  .wf-governance-heading::after {
    content: "";
    height: 1px;
    flex: 1 1 auto;
    background: rgba(255, 255, 255, 0.14);
  }

  .wf-control-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 22px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.025);
  }

  .wf-control-item {
    min-width: 0;
    padding: 40px;
  }

  .wf-control-item:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wf-control-item:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wf-control-item::before {
    content: "";
    display: block;
    width: 46px;
    height: 2px;
    margin-bottom: 22px;
    background: #d9548d;
  }

  .wf-control-item h3 {
    margin: 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-control-item p {
    margin: 14px 0 0;
    color: #c9d1dc;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-control-item p + p {
    margin-top: 14px;
  }

  .wf-quality-foundation {
    display: grid;
    grid-template-columns: 185px minmax(0, 1fr);
    gap: 34px;
    margin-top: 28px;
    padding-top: 26px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wf-quality-foundation-label {
    margin: 0;
    color: #f0a4c5;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-quality-foundation p:last-child {
    max-width: 860px;
    margin: 0;
    color: #aeb8c6;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.7;
  }


  .wf-standards-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-standards-intro {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .wf-standards-intro h2 {
    max-width: 820px;
    margin: 0 auto;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-standards-subtitle {
    margin: 22px auto 0;
    color: #222d3d;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.018em;
  }

  .wf-standards-copy {
    max-width: 820px;
    margin: 24px auto 0;
  }

  .wf-standards-copy p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-standards-copy p + p {
    margin-top: 18px;
  }

  .wf-operating-model {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 60px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-operating-lane {
    min-width: 0;
    padding: 30px 34px 34px;
  }

  .wf-operating-lane:first-child {
    padding-left: 0;
  }

  .wf-operating-lane:last-child {
    padding-right: 0;
  }

  .wf-operating-lane + .wf-operating-lane {
    border-left: 1px solid var(--wf-border-soft);
  }

  .wf-operating-label {
    margin: 0 0 26px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-operating-item + .wf-operating-item {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid var(--wf-border-soft);
  }

  .wf-operating-item h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-operating-item p {
    margin: 14px 0 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-standards-link-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 26px;
  }

  .wf-qualification-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-qualification-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 88px;
    align-items: start;
  }

  .wf-qualification-intro h2 {
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-qualification-intro-copy {
    max-width: 780px;
  }

  .wf-qualification-intro-copy h3 {
    margin: 0;
    color: #222d3d;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.018em;
  }

  .wf-qualification-intro-copy p {
    margin: 18px 0 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-qualification-intro-copy p + p {
    margin-top: 16px;
    font-size: 16px;
  }

  .wf-qualification-steps {
    margin-top: 62px;
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-qualification-step {
    display: grid;
    grid-template-columns: 86px minmax(210px, 0.72fr) minmax(0, 1.7fr);
    gap: 34px;
    align-items: start;
    padding: 38px 0 40px;
  }

  .wf-qualification-step + .wf-qualification-step {
    border-top: 1px solid #d8dee7;
  }

  .wf-step-number {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 36px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .wf-step-title {
    margin: 1px 0 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-step-body {
    min-width: 0;
  }

  .wf-step-body > p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-step-body > p + p {
    margin-top: 15px;
  }

  .wf-step-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px 28px;
    list-style: none;
    margin: 22px 0 0;
    padding: 0;
  }

  .wf-step-list li {
    position: relative;
    min-width: 0;
    padding-left: 16px;
    color: #334055;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.55;
  }

  .wf-step-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.72em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #9ca7b6;
    transform: translateY(-50%);
  }

  .wf-step-closing {
    margin-top: 22px !important;
    padding-top: 18px;
    border-top: 1px solid #e2e7ed;
    color: #2f3a4d !important;
  }

  .wf-qualification-cta {
    display: flex;
    justify-content: flex-end;
    margin-top: 32px;
  }

  .wf-cost-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-cost-intro-panel {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 78px;
    align-items: start;
    padding: 54px 56px;
    border-radius: 30px;
    background: var(--wf-dark);
    color: #ffffff;
  }

  .wf-cost-intro-panel h2 {
    max-width: 560px;
    margin: 0;
    color: #ffffff;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-cost-intro-copy {
    max-width: 780px;
  }

  .wf-cost-intro-copy p {
    margin: 0;
    color: #cbd3df;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-cost-intro-copy p + p {
    margin-top: 18px;
  }

  .wf-cost-table-wrap {
    margin-top: 38px;
    overflow: hidden;
    border: 1px solid var(--wf-border);
    border-radius: 28px;
    background: #ffffff;
  }

  .wf-cost-table {
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .wf-cost-table col:first-child {
    width: 25%;
  }

  .wf-cost-table col:nth-child(2) {
    width: 37.5%;
  }

  .wf-cost-table col:nth-child(3) {
    width: 37.5%;
  }

  .wf-cost-table thead th {
    padding: 18px 26px;
    border-bottom: 1px solid var(--wf-border);
    background: #f8fafc;
    color: #626d7f;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: 0.14em;
    text-align: left;
    text-transform: uppercase;
  }

  .wf-cost-table thead th + th,
  .wf-cost-table tbody td + td {
    border-left: 1px solid var(--wf-border-soft);
  }

  .wf-cost-table tbody tr + tr td {
    border-top: 1px solid var(--wf-border-soft);
  }

  .wf-cost-table tbody td {
    padding: 28px 26px 30px;
    vertical-align: top;
  }

  .wf-cost-table h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.014em;
  }

  .wf-cost-table p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.68;
  }


  .wf-performance-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-performance-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    gap: 84px;
    align-items: start;
  }

  .wf-performance-intro h2 {
    max-width: 600px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-performance-intro-copy {
    max-width: 790px;
  }

  .wf-performance-intro-copy p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-performance-intro-copy p + p {
    margin-top: 18px;
  }

  .wf-scorecard-heading {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 60px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-scorecard-heading::after {
    content: "";
    height: 1px;
    flex: 1 1 auto;
    background: #d8dee7;
  }

  .wf-scorecard-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 20px;
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-scorecard-item {
    min-width: 0;
    padding: 34px 38px 36px 0;
  }

  .wf-scorecard-item:nth-child(even) {
    padding-left: 38px;
    padding-right: 0;
    border-left: 1px solid #d8dee7;
  }

  .wf-scorecard-item:nth-child(n + 3) {
    border-top: 1px solid #d8dee7;
  }

  .wf-scorecard-item h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-scorecard-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 24px;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
  }

  .wf-scorecard-list li,
  .wf-trust-list-compact li,
  .wf-ai-bullet-list li {
    position: relative;
    min-width: 0;
    padding-left: 16px;
    color: #334055;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.58;
  }

  .wf-scorecard-list li::before,
  .wf-trust-list-compact li::before,
  .wf-ai-bullet-list li::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0.76em;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #9ca7b6;
    transform: translateY(-50%);
  }

  .wf-scorecard-note {
    margin: 20px 0 0;
    padding-top: 17px;
    border-top: 1px solid #e1e6ec;
    color: #4d596b;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65;
  }

  .wf-scorecard-closing {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 34px;
    margin-top: 28px;
    padding-top: 26px;
    border-top: 1px solid #d8dee7;
  }

  .wf-scorecard-closing-label {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-scorecard-closing p:last-child {
    max-width: 860px;
    margin: 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-trust-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-trust-intro {
    max-width: 900px;
    margin: 0 auto;
    text-align: center;
  }

  .wf-trust-intro h2 {
    max-width: 820px;
    margin: 0 auto;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-trust-intro-copy {
    max-width: 820px;
    margin: 26px auto 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-iso-band {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 58px;
    overflow: hidden;
    border: 1px solid #ead7e0;
    border-radius: 28px;
    background: var(--wf-blush);
  }

  .wf-iso-item {
    min-width: 0;
    padding: 34px 34px 36px;
  }

  .wf-iso-item + .wf-iso-item {
    border-left: 1px solid #ead7e0;
  }

  .wf-iso-item h3 {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-iso-item p {
    margin: 13px 0 0;
    color: #4c4050;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-iso-note {
    margin: 18px 0 0;
    color: #6d6170;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.65;
    text-align: center;
  }

  .wf-trust-controls {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 42px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-trust-column {
    min-width: 0;
    padding: 38px 42px 42px 0;
  }

  .wf-trust-column + .wf-trust-column {
    padding-left: 42px;
    padding-right: 0;
    border-left: 1px solid var(--wf-border);
  }

  .wf-trust-block + .wf-trust-block {
    margin-top: 36px;
    padding-top: 34px;
    border-top: 1px solid var(--wf-border-soft);
  }

  .wf-trust-block h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-trust-block > p {
    margin: 16px 0 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-trust-list-compact {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 26px;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
  }

  .wf-trust-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 10px 28px;
    margin-top: 28px;
  }

  .wf-ai-section {
    padding: 96px 56px;
    background: var(--wf-dark);
    color: #ffffff;
  }

  .wf-ai-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 84px;
    align-items: start;
  }

  .wf-ai-intro h2 {
    max-width: 600px;
    margin: 0;
    color: #ffffff;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-ai-intro-copy {
    max-width: 790px;
  }

  .wf-ai-intro-copy h3 {
    margin: 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.018em;
  }

  .wf-ai-intro-copy p {
    margin: 18px 0 0;
    color: #cbd3df;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-ai-governance-layout {
    display: grid;
    grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.55fr);
    gap: 52px;
    align-items: start;
    margin-top: 60px;
  }

  .wf-ai-principle {
    padding: 34px 32px 36px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-top: 3px solid #d9548d;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.035);
  }

  .wf-ai-principle-label {
    margin: 0;
    color: #f0a4c5;
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-ai-principle p:last-child {
    margin: 18px 0 0;
    color: #eef2f7;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.55;
    letter-spacing: -0.012em;
  }

  .wf-ai-controls {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wf-ai-control-row {
    display: grid;
    grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.55fr);
    gap: 34px;
    padding: 30px 0 32px;
  }

  .wf-ai-control-row + .wf-ai-control-row {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wf-ai-control-row h3 {
    margin: 0;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.014em;
  }

  .wf-ai-control-body > p {
    margin: 0;
    color: #c9d1dc;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-ai-control-body > p + p {
    margin-top: 14px;
  }

  .wf-ai-bullet-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 24px;
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
  }

  .wf-ai-bullet-list li {
    color: #d6dde7;
  }

  .wf-ai-bullet-list li::before {
    background: #d9548d;
  }

  .wf-ai-control-closing {
    margin-top: 18px !important;
    padding-top: 16px;
    border-top: 1px solid rgba(255, 255, 255, 0.11);
    color: #aeb8c6 !important;
  }

  .wf-ai-link-row {
    display: flex;
    justify-content: flex-end;
    margin-top: 28px;
  }

  .wf-ai-link-row .wf-editorial-link {
    color: #f0a4c5 !important;
  }

  .wf-ai-link-row .wf-editorial-link:hover {
    color: #ffffff !important;
  }


  .wf-sourcing-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-sourcing-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 84px;
    align-items: start;
  }

  .wf-sourcing-intro h2 {
    max-width: 620px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-sourcing-intro-copy {
    max-width: 790px;
  }

  .wf-sourcing-intro-copy p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-sourcing-intro-copy p + p {
    margin-top: 18px;
  }

  .wf-sourcing-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 60px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-sourcing-group {
    min-width: 0;
    padding: 32px 34px 36px;
  }

  .wf-sourcing-group:first-child {
    padding-left: 0;
  }

  .wf-sourcing-group:last-child {
    padding-right: 0;
  }

  .wf-sourcing-group + .wf-sourcing-group {
    border-left: 1px solid var(--wf-border-soft);
  }

  .wf-sourcing-group-label {
    margin: 0 0 26px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-sourcing-model + .wf-sourcing-model {
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid var(--wf-border-soft);
  }

  .wf-sourcing-model h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-sourcing-model p {
    margin: 14px 0 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-sourcing-principle {
    display: grid;
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 34px;
    align-items: center;
    margin-top: 30px;
    padding: 28px 32px;
    border-radius: 24px;
    background: var(--wf-blush);
  }

  .wf-sourcing-principle-label {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-sourcing-principle p:last-child {
    margin: 0;
    color: #382833;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.58;
  }

  .wf-coverage-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-coverage-intro {
    max-width: 920px;
    margin: 0 auto;
    text-align: center;
  }

  .wf-coverage-intro h2 {
    max-width: 820px;
    margin: 0 auto;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-coverage-intro p:last-child {
    max-width: 820px;
    margin: 24px auto 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-coverage-board {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(360px, 0.85fr);
    margin-top: 60px;
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-coverage-teams {
    min-width: 0;
    padding: 32px 42px 38px 0;
  }

  .wf-coverage-directories {
    min-width: 0;
    padding: 32px 0 38px 42px;
    border-left: 1px solid #d8dee7;
  }

  .wf-coverage-label {
    margin: 0 0 24px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-team-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-team-item {
    min-width: 0;
    padding: 24px 28px 26px 0;
  }

  .wf-team-item:nth-child(even) {
    padding-left: 28px;
    padding-right: 0;
    border-left: 1px solid #d8dee7;
  }

  .wf-team-item:nth-child(n + 3) {
    border-top: 1px solid #d8dee7;
  }

  .wf-team-item h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-team-item p {
    margin: 11px 0 0;
    color: var(--wf-copy);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.67;
  }

  .wf-directory-block + .wf-directory-block {
    margin-top: 34px;
    padding-top: 32px;
    border-top: 1px solid #d8dee7;
  }

  .wf-directory-block h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-directory-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 24px;
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
  }

  .wf-directory-list li {
    position: relative;
    min-width: 0;
    padding-left: 15px;
    color: var(--wf-copy);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.58;
  }

  .wf-directory-list li::before {
    content: "";
    position: absolute;
    top: 0.72em;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #9aa4b2;
  }

  .wf-language-band {
    display: grid;
    grid-template-columns: 230px minmax(0, 1fr) auto;
    gap: 30px;
    align-items: center;
    padding: 28px 0 0;
  }

  .wf-language-band h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-language-band p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.65;
  }

  .wf-stakeholder-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-stakeholder-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 84px;
    align-items: start;
  }

  .wf-stakeholder-intro h2 {
    max-width: 620px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-stakeholder-intro-copy {
    max-width: 790px;
  }

  .wf-stakeholder-intro-copy h3 {
    margin: 0;
    color: #222d3d;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.018em;
  }

  .wf-stakeholder-intro-copy p {
    margin: 18px 0 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-stakeholder-intro-copy p + p {
    margin-top: 16px;
  }

  .wf-stakeholder-matrix {
    margin-top: 60px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-stakeholder-group {
    display: grid;
    grid-template-columns: 220px repeat(3, minmax(0, 1fr));
  }

  .wf-stakeholder-group + .wf-stakeholder-group {
    border-top: 1px solid var(--wf-border);
  }

  .wf-stakeholder-group-label {
    margin: 0;
    padding: 32px 30px 34px 0;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-stakeholder-item {
    min-width: 0;
    padding: 31px 30px 34px;
    border-left: 1px solid var(--wf-border);
  }

  .wf-stakeholder-item h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-stakeholder-item p {
    margin: 12px 0 0;
    color: var(--wf-copy);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.68;
  }

  .wf-sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 1199px) {
    .wf-hero,
    .wf-challenges-section,
    .wf-control-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-section-intro-grid,
    .wf-control-intro {
      gap: 56px;
    }

    .wf-framework-item {
      padding-left: 24px;
      padding-right: 24px;
    }

    .wf-challenge-item {
      padding-left: 30px;
      padding-right: 30px;
    }
  }

  @media (max-width: 980px) {
    .wf-hero {
      padding: 88px 24px 80px;
    }

    .wf-challenges-section,
    .wf-control-section {
      padding: 88px 24px;
    }

    .wf-section-intro-grid,
    .wf-control-intro {
      grid-template-columns: 1fr;
      gap: 44px;
    }

    .wf-hero-copy,
    .wf-hero h1,
    .wf-hero-lead,
    .wf-hero-body,
    .wf-section-intro-copy,
    .wf-control-intro-copy {
      max-width: 820px;
    }

    .wf-hero h1 {
      font-size: 42px;
    }

    .wf-section-intro-grid h2,
    .wf-control-intro h2 {
      font-size: 32px;
    }

    .wf-framework-header {
      grid-template-columns: 180px minmax(0, 1fr);
    }

    .wf-framework-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wf-framework-item,
    .wf-framework-item:first-child,
    .wf-framework-item:last-child {
      padding: 28px 28px 30px;
    }

    .wf-framework-item:nth-child(odd) {
      border-left: 0;
      padding-left: 0;
      padding-right: 28px;
    }

    .wf-framework-item:nth-child(even) {
      border-left: 1px solid var(--wf-border-soft);
      padding-right: 0;
    }

    .wf-framework-item:nth-child(n + 3) {
      border-top: 1px solid var(--wf-border-soft);
    }

    .wf-challenge-row {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wf-challenge-label {
      grid-column: 1 / -1;
      padding: 28px 0 16px;
    }

    .wf-challenge-item {
      padding: 20px 30px 32px 0;
      border-left: 0;
    }

    .wf-challenge-item + .wf-challenge-item {
      padding-left: 30px;
      padding-right: 0;
      border-left: 1px solid #d8dee7;
    }
  }

  @media (max-width: 640px) {
    .wf-hero,
    .wf-challenges-section,
    .wf-control-section {
      padding-left: 20px;
      padding-right: 20px;
    }

    .wf-hero {
      padding-top: 72px;
      padding-bottom: 68px;
    }

    .wf-challenges-section,
    .wf-control-section {
      padding-top: 68px;
      padding-bottom: 68px;
    }

    .wf-eyebrow {
      margin-bottom: 15px;
    }

    .wf-hero h1 {
      font-size: 38px;
      line-height: 1.1;
      letter-spacing: -0.03em;
    }

    .wf-hero-lead,
    .wf-section-intro-copy p,
    .wf-control-intro-copy p {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-hero-actions {
      display: grid;
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 30px;
    }

    .wf-button {
      width: 100%;
      min-height: 50px;
      padding-left: 18px;
      padding-right: 18px;
      text-align: center;
    }

    .wf-editorial-link {
      width: 100%;
      min-height: 48px;
      justify-content: center;
      text-align: center;
    }

    .wf-hero-framework {
      margin-top: 48px;
    }

    .wf-framework-header {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 22px 0 20px;
    }

    .wf-framework-grid {
      grid-template-columns: 1fr;
    }

    .wf-framework-item,
    .wf-framework-item:first-child,
    .wf-framework-item:last-child,
    .wf-framework-item:nth-child(odd),
    .wf-framework-item:nth-child(even) {
      padding: 24px 0 26px;
      border-left: 0;
      border-top: 0;
    }

    .wf-framework-item + .wf-framework-item {
      border-top: 1px solid var(--wf-border-soft);
    }

    .wf-trust-band {
      padding-top: 22px;
    }

    .wf-trust-list {
      display: grid;
      grid-template-columns: 1fr;
      gap: 0;
    }

    .wf-trust-item {
      min-height: 44px;
      padding: 10px 0;
      border-bottom: 1px solid var(--wf-border-soft);
    }

    .wf-trust-item:first-child {
      border-top: 1px solid var(--wf-border-soft);
    }

    .wf-trust-item::after {
      display: none !important;
    }

    .wf-section-intro-grid,
    .wf-control-intro {
      gap: 36px;
    }

    .wf-section-intro-grid h2,
    .wf-control-intro h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-challenge-rows {
      margin-top: 44px;
    }

    .wf-challenge-row {
      grid-template-columns: 1fr;
    }

    .wf-challenge-label {
      grid-column: auto;
      padding: 26px 0 12px;
    }

    .wf-challenge-item,
    .wf-challenge-item + .wf-challenge-item {
      padding: 18px 0 28px;
      border-left: 0;
    }

    .wf-challenge-item + .wf-challenge-item {
      padding-top: 26px;
      border-top: 1px solid #d8dee7;
    }

    .wf-challenge-item h3,
    .wf-control-item h3 {
      font-size: 20px;
    }

    .wf-governance-heading {
      margin-top: 44px;
      font-size: 11px;
    }

    .wf-control-grid {
      grid-template-columns: 1fr;
      border-radius: 24px;
    }

    .wf-control-item {
      padding: 30px 24px;
      border-left: 0 !important;
      border-top: 0 !important;
    }

    .wf-control-item + .wf-control-item {
      border-top: 1px solid rgba(255, 255, 255, 0.14) !important;
    }

    .wf-quality-foundation {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 24px;
      padding-top: 24px;
    }
  }

  @media (max-width: 360px) {
    .wf-hero h1 {
      font-size: 38px;
    }

    .wf-control-item {
      padding-left: 20px;
      padding-right: 20px;
    }
  }


  @media (max-width: 1199px) {
    .wf-standards-section,
    .wf-qualification-section,
    .wf-cost-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-qualification-intro,
    .wf-cost-intro-panel {
      gap: 56px;
    }

    .wf-operating-lane {
      padding-left: 28px;
      padding-right: 28px;
    }

    .wf-qualification-step {
      grid-template-columns: 72px minmax(200px, 0.72fr) minmax(0, 1.6fr);
      gap: 28px;
    }

    .wf-step-list {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 980px) {
    .wf-standards-section,
    .wf-qualification-section,
    .wf-cost-section {
      padding: 88px 24px;
    }

    .wf-standards-intro h2,
    .wf-qualification-intro h2,
    .wf-cost-intro-panel h2 {
      font-size: 32px;
    }

    .wf-operating-model {
      grid-template-columns: 1fr;
    }

    .wf-operating-lane,
    .wf-operating-lane:first-child,
    .wf-operating-lane:last-child {
      padding: 30px 0 34px;
      border-left: 0;
    }

    .wf-operating-lane + .wf-operating-lane {
      border-top: 1px solid var(--wf-border-soft);
    }

    .wf-operating-lane {
      display: grid;
      grid-template-columns: 190px repeat(2, minmax(0, 1fr));
      gap: 28px;
    }

    .wf-operating-label {
      margin: 3px 0 0;
    }

    .wf-operating-item + .wf-operating-item {
      margin-top: 0;
      padding-top: 0;
      padding-left: 28px;
      border-top: 0;
      border-left: 1px solid var(--wf-border-soft);
    }

    .wf-qualification-intro,
    .wf-cost-intro-panel {
      grid-template-columns: 1fr;
      gap: 38px;
    }

    .wf-qualification-step {
      grid-template-columns: 66px minmax(0, 1fr);
      gap: 24px;
    }

    .wf-step-title {
      grid-column: 2;
    }

    .wf-step-body {
      grid-column: 2;
    }

    .wf-cost-intro-panel {
      padding: 46px 40px;
    }

    .wf-cost-table col:first-child {
      width: 28%;
    }

    .wf-cost-table col:nth-child(2),
    .wf-cost-table col:nth-child(3) {
      width: 36%;
    }

    .wf-cost-table thead th,
    .wf-cost-table tbody td {
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media (max-width: 640px) {
    .wf-standards-section,
    .wf-qualification-section,
    .wf-cost-section {
      padding: 68px 20px;
    }

    .wf-standards-intro {
      text-align: left;
    }

    .wf-standards-intro h2,
    .wf-qualification-intro h2,
    .wf-cost-intro-panel h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-standards-subtitle,
    .wf-qualification-intro-copy h3 {
      font-size: 20px;
    }

    .wf-standards-copy p,
    .wf-qualification-intro-copy p,
    .wf-cost-intro-copy p {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-operating-model {
      margin-top: 44px;
    }

    .wf-operating-lane {
      display: block;
      padding: 26px 0 30px !important;
    }

    .wf-operating-label {
      margin: 0 0 20px;
    }

    .wf-operating-item + .wf-operating-item {
      margin-top: 26px;
      padding-top: 26px;
      padding-left: 0;
      border-top: 1px solid var(--wf-border-soft);
      border-left: 0;
    }

    .wf-operating-item h3 {
      font-size: 20px;
    }

    .wf-standards-link-row,
    .wf-qualification-cta {
      justify-content: stretch;
    }

    .wf-standards-link-row .wf-editorial-link,
    .wf-qualification-cta .wf-button {
      width: 100%;
    }

    .wf-qualification-intro {
      gap: 34px;
    }

    .wf-qualification-steps {
      margin-top: 44px;
    }

    .wf-qualification-step {
      grid-template-columns: 54px minmax(0, 1fr);
      gap: 18px;
      padding: 30px 0 32px;
    }

    .wf-step-number {
      font-size: 30px;
    }

    .wf-step-title {
      font-size: 20px;
    }

    .wf-step-list {
      grid-template-columns: 1fr;
      gap: 10px;
    }

    .wf-cost-intro-panel {
      gap: 32px;
      padding: 38px 24px;
      border-radius: 24px;
    }

    .wf-cost-table-wrap {
      margin-top: 28px;
      border-radius: 24px;
    }

    .wf-cost-table,
    .wf-cost-table thead,
    .wf-cost-table tbody,
    .wf-cost-table tr,
    .wf-cost-table th,
    .wf-cost-table td {
      display: block;
      width: 100%;
    }

    .wf-cost-table colgroup,
    .wf-cost-table thead {
      display: none;
    }

    .wf-cost-table tbody tr + tr td:first-child {
      border-top: 1px solid var(--wf-border) !important;
    }

    .wf-cost-table tbody td,
    .wf-cost-table tbody td + td {
      padding: 22px 22px 0;
      border-left: 0;
      border-top: 0 !important;
    }

    .wf-cost-table tbody td:last-child {
      padding-bottom: 24px;
    }

    .wf-cost-table tbody td::before {
      content: attr(data-label);
      display: block;
      margin-bottom: 8px;
      color: #7a8494;
      font-size: 10px;
      font-weight: 600;
      line-height: 1.4;
      letter-spacing: 0.13em;
      text-transform: uppercase;
    }

    .wf-cost-table tbody td:first-child::before {
      display: none;
    }
  }


  @media (max-width: 1199px) {
    .wf-performance-section,
    .wf-trust-section,
    .wf-ai-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-performance-intro,
    .wf-ai-intro {
      gap: 56px;
    }

    .wf-scorecard-item {
      padding-right: 30px;
    }

    .wf-scorecard-item:nth-child(even) {
      padding-left: 30px;
    }

    .wf-ai-governance-layout {
      gap: 40px;
    }
  }

  @media (max-width: 980px) {
    .wf-performance-section,
    .wf-trust-section,
    .wf-ai-section {
      padding: 88px 24px;
    }

    .wf-performance-intro,
    .wf-ai-intro {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .wf-performance-intro h2,
    .wf-trust-intro h2,
    .wf-ai-intro h2 {
      font-size: 32px;
    }

    .wf-scorecard-list {
      grid-template-columns: 1fr;
    }

    .wf-iso-band {
      grid-template-columns: 1fr;
    }

    .wf-iso-item + .wf-iso-item {
      border-top: 1px solid #ead7e0;
      border-left: 0;
    }

    .wf-trust-controls {
      grid-template-columns: 1fr;
    }

    .wf-trust-column,
    .wf-trust-column + .wf-trust-column {
      padding: 34px 0 38px;
      border-left: 0;
    }

    .wf-trust-column + .wf-trust-column {
      border-top: 1px solid var(--wf-border);
    }

    .wf-ai-governance-layout {
      grid-template-columns: 1fr;
      gap: 34px;
    }

    .wf-ai-principle {
      max-width: 720px;
    }
  }

  @media (max-width: 640px) {
    .wf-performance-section,
    .wf-trust-section,
    .wf-ai-section {
      padding: 68px 20px;
    }

    .wf-performance-intro h2,
    .wf-trust-intro h2,
    .wf-ai-intro h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-performance-intro-copy p,
    .wf-trust-intro-copy,
    .wf-ai-intro-copy p {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-scorecard-heading {
      margin-top: 44px;
    }

    .wf-scorecard-grid {
      grid-template-columns: 1fr;
    }

    .wf-scorecard-item,
    .wf-scorecard-item:nth-child(even) {
      padding: 28px 0 30px;
      border-left: 0;
      border-top: 0;
    }

    .wf-scorecard-item + .wf-scorecard-item {
      border-top: 1px solid #d8dee7;
    }

    .wf-scorecard-item h3,
    .wf-iso-item h3,
    .wf-trust-block h3 {
      font-size: 20px;
    }

    .wf-scorecard-list,
    .wf-trust-list-compact,
    .wf-ai-bullet-list {
      grid-template-columns: 1fr;
    }

    .wf-scorecard-closing {
      grid-template-columns: 1fr;
      gap: 10px;
      margin-top: 24px;
      padding-top: 24px;
    }

    .wf-trust-intro {
      text-align: left;
    }

    .wf-trust-subtitle,
    .wf-ai-intro-copy h3 {
      font-size: 20px;
    }

    .wf-iso-band {
      margin-top: 44px;
      border-radius: 24px;
    }

    .wf-iso-item {
      padding: 28px 24px 30px;
    }

    .wf-iso-note {
      text-align: left;
    }

    .wf-trust-links,
    .wf-ai-link-row {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: stretch;
      gap: 6px;
    }

    .wf-trust-links .wf-editorial-link,
    .wf-ai-link-row .wf-editorial-link {
      width: 100%;
      justify-content: flex-start;
      text-align: left;
    }

    .wf-ai-principle {
      padding: 28px 24px 30px;
    }

    .wf-ai-principle p:last-child {
      font-size: 18px;
    }

    .wf-ai-control-row {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 26px 0 28px;
    }
  }


  @media (max-width: 1199px) {
    .wf-sourcing-section,
    .wf-coverage-section,
    .wf-stakeholder-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-sourcing-intro,
    .wf-stakeholder-intro {
      gap: 56px;
    }

    .wf-sourcing-group {
      padding-left: 28px;
      padding-right: 28px;
    }

    .wf-coverage-board {
      grid-template-columns: minmax(0, 1.05fr) minmax(330px, 0.95fr);
    }

    .wf-coverage-teams {
      padding-right: 34px;
    }

    .wf-coverage-directories {
      padding-left: 34px;
    }

    .wf-stakeholder-group {
      grid-template-columns: 190px repeat(3, minmax(0, 1fr));
    }

    .wf-stakeholder-item {
      padding-left: 24px;
      padding-right: 24px;
    }
  }

  @media (max-width: 980px) {
    .wf-sourcing-section,
    .wf-coverage-section,
    .wf-stakeholder-section {
      padding: 88px 24px;
    }

    .wf-sourcing-intro,
    .wf-stakeholder-intro {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .wf-sourcing-intro h2,
    .wf-coverage-intro h2,
    .wf-stakeholder-intro h2 {
      font-size: 32px;
    }

    .wf-sourcing-groups {
      grid-template-columns: 1fr;
    }

    .wf-sourcing-group,
    .wf-sourcing-group:first-child,
    .wf-sourcing-group:last-child {
      display: grid;
      grid-template-columns: 190px repeat(2, minmax(0, 1fr));
      gap: 28px;
      padding: 30px 0 34px;
      border-left: 0;
    }

    .wf-sourcing-group + .wf-sourcing-group {
      border-top: 1px solid var(--wf-border-soft);
      border-left: 0;
    }

    .wf-sourcing-group-label {
      margin: 3px 0 0;
    }

    .wf-sourcing-model + .wf-sourcing-model {
      margin-top: 0;
      padding-top: 0;
      padding-left: 28px;
      border-top: 0;
      border-left: 1px solid var(--wf-border-soft);
    }

    .wf-sourcing-principle {
      grid-template-columns: 190px minmax(0, 1fr);
    }

    .wf-coverage-intro {
      text-align: left;
      margin-left: 0;
    }

    .wf-coverage-intro h2,
    .wf-coverage-intro p:last-child {
      margin-left: 0;
    }

    .wf-coverage-board {
      grid-template-columns: 1fr;
    }

    .wf-coverage-teams,
    .wf-coverage-directories {
      padding: 30px 0 36px;
      border-left: 0;
    }

    .wf-coverage-directories {
      border-top: 1px solid #d8dee7;
    }

    .wf-language-band {
      grid-template-columns: 200px minmax(0, 1fr);
    }

    .wf-language-band .wf-editorial-link {
      grid-column: 2;
      justify-self: start;
    }

    .wf-stakeholder-group {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .wf-stakeholder-group-label {
      grid-column: 1 / -1;
      padding: 28px 0 16px;
    }

    .wf-stakeholder-item {
      padding: 22px 24px 30px 0;
      border-left: 0;
    }

    .wf-stakeholder-item + .wf-stakeholder-item {
      padding-left: 24px;
      border-left: 1px solid var(--wf-border);
    }
  }

  @media (max-width: 640px) {
    .wf-sourcing-section,
    .wf-coverage-section,
    .wf-stakeholder-section {
      padding: 68px 20px;
    }

    .wf-sourcing-intro h2,
    .wf-coverage-intro h2,
    .wf-stakeholder-intro h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-sourcing-intro-copy p,
    .wf-coverage-intro p:last-child,
    .wf-stakeholder-intro-copy p {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-sourcing-groups,
    .wf-coverage-board,
    .wf-stakeholder-matrix {
      margin-top: 44px;
    }

    .wf-sourcing-group,
    .wf-sourcing-group:first-child,
    .wf-sourcing-group:last-child {
      display: block;
      padding: 26px 0 30px;
    }

    .wf-sourcing-group-label {
      margin: 0 0 20px;
    }

    .wf-sourcing-model + .wf-sourcing-model {
      margin-top: 26px;
      padding-top: 26px;
      padding-left: 0;
      border-top: 1px solid var(--wf-border-soft);
      border-left: 0;
    }

    .wf-sourcing-model h3,
    .wf-directory-block h3,
    .wf-stakeholder-intro-copy h3 {
      font-size: 20px;
    }

    .wf-sourcing-principle {
      grid-template-columns: 1fr;
      gap: 10px;
      padding: 26px 24px;
    }

    .wf-sourcing-principle p:last-child {
      font-size: 17px;
    }

    .wf-team-grid {
      grid-template-columns: 1fr;
    }

    .wf-team-item,
    .wf-team-item:nth-child(even) {
      padding: 22px 0 24px;
      border-left: 0;
      border-top: 0;
    }

    .wf-team-item + .wf-team-item {
      border-top: 1px solid #d8dee7;
    }

    .wf-directory-list {
      grid-template-columns: 1fr;
    }

    .wf-language-band {
      grid-template-columns: 1fr;
      gap: 12px;
      padding-top: 26px;
    }

    .wf-language-band .wf-editorial-link {
      grid-column: auto;
      width: 100%;
      justify-content: flex-start;
      text-align: left;
    }

    .wf-stakeholder-intro {
      gap: 34px;
    }

    .wf-stakeholder-group {
      grid-template-columns: 1fr;
    }

    .wf-stakeholder-group-label {
      grid-column: auto;
      padding: 26px 0 12px;
    }

    .wf-stakeholder-item,
    .wf-stakeholder-item + .wf-stakeholder-item {
      padding: 22px 0 26px;
      border-left: 0;
    }

    .wf-stakeholder-item + .wf-stakeholder-item {
      border-top: 1px solid var(--wf-border);
    }
  }


  .wf-pilot-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-pilot-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 84px;
    align-items: start;
  }

  .wf-pilot-intro h2 {
    max-width: 620px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-pilot-intro-copy {
    max-width: 790px;
  }

  .wf-pilot-intro-copy h3 {
    margin: 0;
    color: #222d3d;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.018em;
  }

  .wf-pilot-intro-copy p {
    margin: 18px 0 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-pilot-layout {
    display: grid;
    grid-template-columns: minmax(250px, 0.66fr) minmax(0, 1.5fr);
    gap: 52px;
    align-items: start;
    margin-top: 60px;
  }

  .wf-pilot-evaluation {
    padding: 32px 30px 34px;
    border: 1px solid var(--wf-border);
    border-radius: 24px;
    background: #ffffff;
  }

  .wf-pilot-evaluation h3 {
    margin: 0;
    color: #172030;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: -0.018em;
  }

  .wf-pilot-evaluation p {
    margin: 14px 0 0;
    color: var(--wf-copy);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.68;
  }

  .wf-pilot-evaluation-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 22px;
    list-style: none;
    margin: 24px 0 0;
    padding: 0;
  }

  .wf-pilot-evaluation-list li {
    position: relative;
    min-width: 0;
    padding-left: 15px;
    color: #334055;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.58;
  }

  .wf-pilot-evaluation-list li::before {
    content: "";
    position: absolute;
    top: 0.74em;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #9aa4b2;
  }

  .wf-pilot-steps {
    border-top: 1px solid #d8dee7;
    border-bottom: 1px solid #d8dee7;
  }

  .wf-pilot-step {
    display: grid;
    grid-template-columns: 66px minmax(210px, 0.68fr) minmax(0, 1.42fr);
    gap: 28px;
    align-items: start;
    padding: 32px 0 34px;
  }

  .wf-pilot-step + .wf-pilot-step {
    border-top: 1px solid #d8dee7;
  }

  .wf-pilot-number {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
    letter-spacing: -0.03em;
  }

  .wf-pilot-step h3 {
    margin: 0;
    color: #172030;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-pilot-step-body p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-pilot-step-body p + p {
    margin-top: 13px;
  }

  .wf-pilot-step-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 9px 24px;
    list-style: none;
    margin: 18px 0 0;
    padding: 0;
  }

  .wf-pilot-step-list li {
    position: relative;
    min-width: 0;
    padding-left: 15px;
    color: #334055;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.56;
  }

  .wf-pilot-step-list li::before {
    content: "";
    position: absolute;
    top: 0.74em;
    left: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #9aa4b2;
  }

  .wf-pilot-actions {
    display: flex;
    justify-content: center;
    margin-top: 34px;
  }

  .wf-procurement-reasons-section {
    padding: 96px 56px;
    background: var(--wf-dark);
    color: #ffffff;
  }

  .wf-reasons-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
    gap: 84px;
    align-items: start;
  }

  .wf-reasons-intro h2 {
    max-width: 620px;
    margin: 0;
    color: #ffffff;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-reasons-intro-copy h3 {
    margin: 0;
    color: #ffffff;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.38;
    letter-spacing: -0.018em;
  }

  .wf-reasons-intro-copy p {
    max-width: 790px;
    margin: 18px 0 0;
    color: #cbd3df;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-reasons-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 60px;
    overflow: hidden;
    border-top: 3px solid #d9548d;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wf-reason-item {
    min-width: 0;
    padding: 32px 36px 34px 0;
  }

  .wf-reason-item:nth-child(even) {
    padding-left: 36px;
    padding-right: 0;
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wf-reason-item:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wf-reason-item h3 {
    margin: 0;
    color: #ffffff;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
    letter-spacing: -0.014em;
  }

  .wf-reason-item p {
    margin: 12px 0 0;
    color: #c9d1dc;
    font-size: 15px;
    font-weight: 400;
    line-height: 1.7;
  }

  .wf-faq-section {
    padding: 96px 56px;
    background: #ffffff;
  }

  .wf-faq-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: 84px;
    align-items: start;
  }

  .wf-faq-intro h2 {
    max-width: 600px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-faq-intro p:last-child {
    max-width: 790px;
    margin: 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-faq-panel {
    margin-top: 60px;
    border-top: 1px solid var(--wf-border);
    border-bottom: 1px solid var(--wf-border);
  }

  .wf-faq-item + .wf-faq-item {
    border-top: 1px solid var(--wf-border);
  }

  .wf-faq-item summary {
    min-height: 76px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 32px;
    gap: 28px;
    align-items: center;
    padding: 22px 0;
    color: #172030;
    cursor: pointer;
    list-style: none;
  }

  .wf-faq-item summary::-webkit-details-marker {
    display: none;
  }

  .wf-faq-question {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.014em;
  }

  .wf-faq-toggle {
    position: relative;
    width: 32px;
    height: 32px;
    border: 1px solid var(--wf-border);
    border-radius: 50%;
  }

  .wf-faq-toggle::before,
  .wf-faq-toggle::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 1.5px;
    border-radius: 2px;
    background: var(--wf-magenta-dark);
    transform: translate(-50%, -50%);
    transition: transform 180ms ease;
  }

  .wf-faq-toggle::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .wf-faq-item[open] .wf-faq-toggle::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .wf-faq-item summary:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.22);
    outline-offset: 4px;
    border-radius: 6px;
  }

  .wf-faq-answer {
    max-width: 860px;
    padding: 0 64px 28px 0;
  }

  .wf-faq-answer p {
    margin: 0;
    color: var(--wf-copy);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-faq-answer p + p {
    margin-top: 14px;
  }

  @media (max-width: 1199px) {
    .wf-pilot-section,
    .wf-procurement-reasons-section,
    .wf-faq-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-pilot-intro,
    .wf-reasons-intro,
    .wf-faq-intro {
      gap: 56px;
    }

    .wf-pilot-layout {
      gap: 40px;
    }
  }

  @media (max-width: 980px) {
    .wf-pilot-section,
    .wf-procurement-reasons-section,
    .wf-faq-section {
      padding: 88px 24px;
    }

    .wf-pilot-intro,
    .wf-reasons-intro,
    .wf-faq-intro {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .wf-pilot-intro h2,
    .wf-reasons-intro h2,
    .wf-faq-intro h2 {
      font-size: 32px;
    }

    .wf-pilot-layout {
      grid-template-columns: 1fr;
      gap: 34px;
    }

    .wf-pilot-evaluation {
      max-width: 760px;
    }

    .wf-pilot-step {
      grid-template-columns: 58px minmax(190px, 0.66fr) minmax(0, 1.34fr);
      gap: 22px;
    }
  }

  @media (max-width: 640px) {
    .wf-pilot-section,
    .wf-procurement-reasons-section,
    .wf-faq-section {
      padding: 68px 20px;
    }

    .wf-pilot-intro h2,
    .wf-reasons-intro h2,
    .wf-faq-intro h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-pilot-intro-copy h3,
    .wf-reasons-intro-copy h3 {
      font-size: 20px;
    }

    .wf-pilot-intro-copy p,
    .wf-reasons-intro-copy p,
    .wf-faq-intro p:last-child {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-pilot-layout,
    .wf-reasons-grid,
    .wf-faq-panel {
      margin-top: 44px;
    }

    .wf-pilot-evaluation {
      padding: 28px 24px 30px;
    }

    .wf-pilot-evaluation h3 {
      font-size: 20px;
    }

    .wf-pilot-evaluation-list,
    .wf-pilot-step-list {
      grid-template-columns: 1fr;
    }

    .wf-pilot-step {
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 16px;
      padding: 28px 0 30px;
    }

    .wf-pilot-number {
      font-size: 26px;
    }

    .wf-pilot-step h3 {
      font-size: 20px;
    }

    .wf-pilot-step-body {
      grid-column: 2;
    }

    .wf-pilot-actions {
      display: grid;
      grid-template-columns: 1fr;
      justify-content: stretch;
      gap: 8px;
    }

    .wf-pilot-actions .wf-button,
    .wf-pilot-actions .wf-editorial-link {
      width: 100%;
    }

    .wf-reasons-grid {
      grid-template-columns: 1fr;
    }

    .wf-reason-item,
    .wf-reason-item:nth-child(even) {
      padding: 28px 0 30px;
      border-left: 0;
      border-top: 0;
    }

    .wf-reason-item + .wf-reason-item {
      border-top: 1px solid rgba(255, 255, 255, 0.15);
    }

    .wf-faq-item summary {
      min-height: 72px;
      grid-template-columns: minmax(0, 1fr) 30px;
      gap: 18px;
      padding: 20px 0;
    }

    .wf-faq-question {
      font-size: 18px;
      line-height: 1.42;
    }

    .wf-faq-toggle {
      width: 30px;
      height: 30px;
    }

    .wf-faq-answer {
      padding: 0 0 24px;
    }
  }


  .wf-related-section {
    padding: 96px 56px;
    background: var(--wf-surface);
  }

  .wf-related-intro {
    display: grid;
    grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
    gap: 84px;
    align-items: start;
  }

  .wf-related-intro h2 {
    max-width: 650px;
    margin: 0;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-related-intro-copy {
    max-width: 790px;
    margin: 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-resource-directory {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 60px;
    border-top: 3px solid var(--wf-magenta);
    border-bottom: 1px solid #d8dee7;
  }

  .wf-resource-group {
    min-width: 0;
    padding: 30px 28px 32px;
  }

  .wf-resource-group:first-child {
    padding-left: 0;
  }

  .wf-resource-group:last-child {
    padding-right: 0;
  }

  .wf-resource-group + .wf-resource-group {
    border-left: 1px solid #d8dee7;
  }

  .wf-resource-group-label {
    margin: 0 0 18px;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-resource-link {
    min-height: 44px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 20px;
    gap: 16px;
    align-items: start;
    padding: 20px 0 22px;
    color: inherit !important;
    text-decoration: none;
  }

  .wf-resource-link + .wf-resource-link {
    border-top: 1px solid #d8dee7;
  }

  .wf-resource-link h3 {
    margin: 0;
    color: #172030;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.42;
    letter-spacing: -0.012em;
    transition: color 180ms ease;
  }

  .wf-resource-link p {
    margin: 9px 0 0;
    color: var(--wf-copy);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.62;
  }

  .wf-resource-link .wf-arrow-icon {
    margin-top: 3px;
    color: var(--wf-magenta-dark);
  }

  .wf-resource-link:hover h3 {
    color: var(--wf-magenta-dark);
  }

  .wf-resource-link:hover .wf-arrow-icon {
    transform: translateX(3px);
  }

  .wf-resource-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.22);
    outline-offset: 5px;
    border-radius: 6px;
  }

  .wf-final-cta-section {
    padding: 80px 56px 96px;
    background: #ffffff;
  }

  .wf-final-cta-panel {
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 62px 60px 56px;
    border: 1px solid #ead3df;
    border-radius: 30px;
    background: var(--wf-blush);
    text-align: center;
  }

  .wf-final-cta-panel::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--wf-magenta);
  }

  .wf-final-cta-content {
    max-width: 900px;
  }

  .wf-final-cta-content h2 {
    max-width: 800px;
    margin: 0 auto;
    color: var(--wf-ink);
    font-size: 36px;
    font-weight: 600;
    line-height: 1.16;
    letter-spacing: -0.028em;
  }

  .wf-final-cta-content > p:not(.wf-eyebrow) {
    margin: 22px 0 0;
    color: var(--wf-copy);
    font-size: 18px;
    font-weight: 400;
    line-height: 1.72;
  }

  .wf-final-cta-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px 24px;
    margin-top: 30px;
  }

  .wf-final-cta-actions .wf-button {
    min-width: 190px;
  }

  .wf-final-cta-note {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: min(100%, 900px);
    gap: 8px;
    margin-top: 28px;
    padding-top: 24px;
    border-top: 1px solid #e5c9d7;
  }

  .wf-final-cta-note-label {
    margin: 0;
    color: var(--wf-magenta-dark);
    font-size: 11px;
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .wf-final-cta-note p:last-child {
    max-width: 780px;
    margin: 0;
    color: #5c6676;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.66;
  }

  @media (max-width: 1199px) {
    .wf-related-section,
    .wf-final-cta-section {
      padding-left: 40px;
      padding-right: 40px;
    }

    .wf-related-intro {
      gap: 56px;
    }

    .wf-resource-directory {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wf-resource-group,
    .wf-resource-group:first-child,
    .wf-resource-group:last-child {
      padding: 30px 30px 32px;
    }

    .wf-resource-group:nth-child(odd) {
      padding-left: 0;
    }

    .wf-resource-group:nth-child(even) {
      padding-right: 0;
      border-left: 1px solid #d8dee7;
    }

    .wf-resource-group:nth-child(n + 3) {
      border-top: 1px solid #d8dee7;
    }

    .wf-resource-group:nth-child(3) {
      border-left: 0;
    }

    .wf-final-cta-panel {
      padding: 54px 50px 50px;
    }
  }

  @media (max-width: 980px) {
    .wf-related-section,
    .wf-final-cta-section {
      padding: 88px 24px;
    }

    .wf-related-intro {
      grid-template-columns: 1fr;
      gap: 38px;
    }

    .wf-related-intro h2,
    .wf-final-cta-content h2 {
      font-size: 32px;
    }

  }

  @media (max-width: 640px) {
    .wf-related-section,
    .wf-final-cta-section {
      padding: 68px 20px;
    }

    .wf-related-intro h2,
    .wf-final-cta-content h2 {
      font-size: 30px;
      line-height: 1.2;
    }

    .wf-related-intro-copy,
    .wf-final-cta-content > p:not(.wf-eyebrow) {
      font-size: 18px;
      line-height: 1.66;
    }

    .wf-resource-directory {
      grid-template-columns: 1fr;
      margin-top: 44px;
    }

    .wf-resource-group,
    .wf-resource-group:first-child,
    .wf-resource-group:last-child,
    .wf-resource-group:nth-child(odd),
    .wf-resource-group:nth-child(even) {
      padding: 28px 0 30px;
      border-left: 0;
    }

    .wf-resource-group + .wf-resource-group {
      border-top: 1px solid #d8dee7;
    }

    .wf-resource-link {
      grid-template-columns: minmax(0, 1fr) 18px;
      gap: 14px;
    }

    .wf-final-cta-panel {
      padding: 42px 24px 38px;
      border-radius: 24px;
    }

    .wf-final-cta-actions {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      gap: 8px;
    }

    .wf-final-cta-actions .wf-button,
    .wf-final-cta-actions .wf-editorial-link {
      width: 100%;
    }

    .wf-final-cta-note {
      gap: 10px;
      margin-top: 24px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .wf-button,
    .wf-editorial-link,
    .wf-arrow-icon {
      transition: none;
    }
  }
`;

export default function StepesProcurementTeamsWireframe() {
  return (
    <main className="stepes-procurement-wireframe">
      <style>{styles}</style>

      <section className="wf-hero" aria-labelledby="procurement-hero-title">
        <div className="wf-shell">
          <div className="wf-hero-copy">
            <p className="wf-eyebrow">Solutions for Procurement Teams</p>
            <h1 id="procurement-hero-title">
              Enterprise Translation Solutions for Procurement Teams
            </h1>
            <p className="wf-hero-lead">
              Source, qualify, and manage enterprise translation services with
              greater control over cost, quality, security, service levels, and
              multilingual delivery.
            </p>
            <p className="wf-hero-body">
              Stepes combines AI-powered translation workflows, professional
              human expertise, translation memory, terminology governance,
              quality controls, and enterprise project visibility in one
              scalable supplier relationship. Procurement and strategic sourcing
              teams can establish consistent requirements across the
              organization while giving each department the translation workflow
              appropriate to its content, audience, and business risk.
            </p>

            <div
              className="wf-hero-actions"
              aria-label="Procurement page actions"
            >
              <a
                className="wf-button wf-button-primary"
                href="https://www.stepes.com/contact-sales/"
              >
                Talk to an Expert
                <ArrowIcon />
              </a>
              <a
                className="wf-editorial-link"
                href="https://www.stepes.com/enterprise-translation-management/"
              >
                Explore Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div
            className="wf-hero-framework"
            aria-label="Enterprise supplier framework"
          >
            <div className="wf-framework-header">
              <p className="wf-eyebrow">Supplier Framework</p>
              <p className="wf-framework-title">
                Control the full translation relationship across qualification,
                commercial terms, risk, and performance.
              </p>
            </div>

            <div className="wf-framework-grid">
              {heroCapabilities.map((capability) => (
                <article className="wf-framework-item" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div
            className="wf-trust-band"
            aria-label="Enterprise translation foundation"
          >
            <ul className="wf-trust-list">
              {trustItems.map((item) => (
                <li className="wf-trust-item" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="wf-challenges-section"
        aria-labelledby="procurement-challenges-title"
      >
        <div className="wf-shell">
          <div className="wf-section-intro-grid">
            <div>
              <p className="wf-eyebrow">The Procurement Challenge</p>
              <h2 id="procurement-challenges-title">
                Translation Procurement Is More Than Comparing Per-Word Rates
              </h2>
            </div>

            <div className="wf-section-intro-copy">
              <p>
                Translation may begin as a series of individual projects, but
                procurement becomes more complex as multilingual work expands
                across departments, countries, content types, suppliers, and
                technology systems.
              </p>
              <p>
                Enterprise procurement teams need to evaluate the complete
                operating model behind translation—not only the unit rate.
                Service definitions, quality controls, language assets, security
                practices, AI use, internal review effort, supplier
                responsiveness, and long-term scalability can all affect the
                total cost and risk of multilingual content.
              </p>
            </div>
          </div>

          <div className="wf-challenge-rows">
            {challengeGroups.map((group) => (
              <div className="wf-challenge-row" key={group.label}>
                <p className="wf-challenge-label">{group.label}</p>
                {group.items.map((item) => (
                  <article className="wf-challenge-item" key={item.title}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wf-control-section"
        aria-labelledby="controlled-model-title"
      >
        <div className="wf-shell">
          <div className="wf-control-intro">
            <div>
              <p className="wf-eyebrow">Procurement Governance</p>
              <h2 id="controlled-model-title">
                A More Controlled Model for Enterprise Translation Procurement
              </h2>
            </div>

            <div className="wf-control-intro-copy">
              <p>
                Stepes helps procurement teams bring commercial management,
                multilingual operations, language technology, professional
                expertise, and enterprise controls into one coordinated supplier
                framework.
              </p>
              <p>
                The objective is not to force every department into an identical
                workflow. It is to create common standards for supplier
                governance while allowing service levels, review requirements,
                automation, and subject-matter expertise to vary according to
                the content and its intended use.
              </p>
            </div>
          </div>

          <div className="wf-governance-heading">
            Stepes Enterprise Supplier Framework
          </div>

          <div className="wf-control-grid">
            {controlAreas.map((area) => (
              <article className="wf-control-item" key={area.title}>
                <h3>{area.title}</h3>
                {area.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>

          <div className="wf-quality-foundation">
            <p className="wf-quality-foundation-label">Quality Foundation</p>
            <p>
              Stepes associates its enterprise quality framework with ISO 17100,
              ISO 9001, and ISO 13485, and supports translation across more than
              100 languages and regional variants.
            </p>
          </div>
        </div>
      </section>

      <section
        className="wf-standards-section"
        aria-labelledby="enterprise-standards-title"
      >
        <div className="wf-shell">
          <div className="wf-standards-intro">
            <h2 id="enterprise-standards-title">
              Enterprise Standards Without Slowing the Business
            </h2>
            <p className="wf-standards-subtitle">
              Standardize Translation While Supporting Every Team
            </p>
            <div className="wf-standards-copy">
              <p>
                Enterprise standards should simplify multilingual work rather
                than create another approval bottleneck.
              </p>
              <p>
                Stepes gives authorized business teams a consistent way to
                request translation while preserving the flexibility needed for
                different content types, deadlines, departments, and quality
                requirements. The Stepes enterprise platform supports
                centralized intake, AI and human workflows, terminology,
                translation memory, review, QA, delivery, and program
                visibility.
              </p>
            </div>
          </div>

          <div
            className="wf-operating-model"
            aria-label="Enterprise translation operating model"
          >
            {enterpriseStandardsGroups.map((group) => (
              <div className="wf-operating-lane" key={group.label}>
                <p className="wf-operating-label">{group.label}</p>
                {group.items.map((item) => (
                  <article className="wf-operating-item" key={item.title}>
                    <h3>{item.title}</h3>
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            ))}
          </div>

          <div className="wf-standards-link-row">
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/enterprise-translation-management/"
            >
              Explore Enterprise Translation Management
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wf-qualification-section"
        aria-labelledby="supplier-qualification-title"
      >
        <div className="wf-shell">
          <div className="wf-qualification-intro">
            <div>
              <h2 id="supplier-qualification-title">
                A Structured Translation Supplier Qualification Process
              </h2>
            </div>

            <div className="wf-qualification-intro-copy">
              <h3>Move From Initial Evaluation to Controlled Program Launch</h3>
              <p>
                Stepes supports a practical supplier qualification process that
                can be adapted to the organization’s procurement, security,
                quality, legal, finance, and operational requirements.
              </p>
              <p>
                Relevant certification and quality information can be discussed
                during supplier qualification, procurement review, and vendor
                onboarding.
              </p>
            </div>
          </div>

          <div className="wf-qualification-steps">
            {qualificationSteps.map((step) => (
              <article className="wf-qualification-step" key={step.number}>
                <p className="wf-step-number" aria-hidden="true">
                  {step.number}
                </p>
                <h3 className="wf-step-title">
                  <span className="wf-sr-only">Step {step.number}: </span>
                  {step.title}
                </h3>
                <div className="wf-step-body">
                  {step.lead && <p>{step.lead}</p>}
                  {step.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {step.bullets && (
                    <ul className="wf-step-list">
                      {step.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                  {step.closing && (
                    <p className="wf-step-closing">{step.closing}</p>
                  )}
                </div>
              </article>
            ))}
          </div>

          <div className="wf-qualification-cta">
            <a
              className="wf-button wf-button-primary"
              href="https://www.stepes.com/contact-sales/"
            >
              Discuss Supplier Qualification
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="wf-cost-section" aria-labelledby="total-cost-title">
        <div className="wf-shell">
          <div className="wf-cost-intro-panel">
            <div>
              <h2 id="total-cost-title">
                Control Total Cost, Not Just the Unit Price
              </h2>
            </div>

            <div className="wf-cost-intro-copy">
              <p>
                The lowest initial rate does not always produce the lowest
                enterprise cost.
              </p>
              <p>
                Procurement teams should also consider internal coordination,
                repeated content, reviewer effort, preventable corrections,
                supplier administration, delayed launches, inconsistent
                terminology, unused translation memory, and the operational
                impact of poor-quality delivery.
              </p>
              <p>
                Stepes helps enterprises address these cost drivers through
                reusable language assets, structured workflows, AI-enabled
                automation, professional review, and clearer program visibility.
              </p>
            </div>
          </div>

          <div className="wf-cost-table-wrap">
            <table className="wf-cost-table">
              <caption className="wf-sr-only">
                Enterprise translation total cost control levers
              </caption>
              <colgroup>
                <col />
                <col />
                <col />
              </colgroup>
              <thead>
                <tr>
                  <th scope="col">Cost Lever</th>
                  <th scope="col">What It Changes</th>
                  <th scope="col">Enterprise Value</th>
                </tr>
              </thead>
              <tbody>
                {totalCostLevers.map((lever) => (
                  <tr key={lever.title}>
                    <td data-label="Cost Lever">
                      <h3>{lever.title}</h3>
                    </td>
                    <td data-label="What It Changes">
                      <p>{lever.focus}</p>
                    </td>
                    <td data-label="Enterprise Value">
                      <p>{lever.impact}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section
        className="wf-performance-section"
        aria-labelledby="performance-visibility-title"
      >
        <div className="wf-shell">
          <div className="wf-performance-intro">
            <div>
              <h2 id="performance-visibility-title">
                Measure What Matters Across Delivery, Quality, and Service
              </h2>
            </div>

            <div className="wf-performance-intro-copy">
              <p>
                Translation supplier performance should be measured through
                agreed criteria that reflect business outcomes—not volume alone.
              </p>
              <p>
                Stepes can align reporting and service reviews with the needs of
                the client’s program, including project status, turnaround,
                language volume, review activity, spend, and delivery
                performance.
              </p>
            </div>
          </div>

          <div className="wf-scorecard-heading">
            Translation Supplier Performance Framework
          </div>

          <div className="wf-scorecard-grid">
            {performanceAreas.map((area) => (
              <article className="wf-scorecard-item" key={area.title}>
                <h3>{area.title}</h3>
                <ul className="wf-scorecard-list">
                  {area.measures.map((measure) => (
                    <li key={measure}>{measure}</li>
                  ))}
                </ul>
                {area.note && <p className="wf-scorecard-note">{area.note}</p>}
              </article>
            ))}
          </div>

          <div className="wf-scorecard-closing">
            <p className="wf-scorecard-closing-label">Program Alignment</p>
            <p>
              The final KPI framework should be agreed during onboarding so
              performance reporting reflects the actual services and priorities
              of the enterprise program.
            </p>
          </div>
        </div>
      </section>

      <section
        className="wf-trust-section"
        aria-labelledby="quality-security-title"
      >
        <div className="wf-shell">
          <div className="wf-trust-intro">
            <p className="wf-eyebrow">Quality and Security Controls</p>
            <h2 id="quality-security-title">
              Enterprise Controls Behind Every Translation Program
            </h2>
            <p className="wf-trust-intro-copy">
              Procurement teams need confidence in the people, processes,
              technology, and documentation behind multilingual delivery. Stepes
              brings professional linguists, structured project workflows,
              terminology, translation memory, quality assurance, secure
              handling, and continuous improvement into a connected quality
              system.
            </p>
          </div>

          <div
            className="wf-iso-band"
            aria-label="Internationally recognized quality standards"
          >
            {qualityStandards.map((standard) => (
              <article className="wf-iso-item" key={standard.title}>
                <h3>{standard.title}</h3>
                <p>{standard.description}</p>
              </article>
            ))}
          </div>
          <p className="wf-iso-note">
            Certification details and supporting information can be discussed
            during vendor qualification and procurement review.
          </p>

          <div className="wf-trust-controls">
            <div className="wf-trust-column">
              <article className="wf-trust-block">
                <h3>Qualified Linguists and Reviewers</h3>
                <p>Translation resources can be matched according to:</p>
                <ul className="wf-trust-list-compact">
                  {qualifiedResourceCriteria.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  For business-critical or specialized content, professional
                  review and subject-matter expertise can be incorporated into
                  the workflow.
                </p>
              </article>

              <article className="wf-trust-block">
                <h3>Structured Quality Controls</h3>
                <p>
                  Depending on project requirements, quality controls may
                  include:
                </p>
                <ul className="wf-trust-list-compact">
                  {qualityControls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  The workflow can be adjusted to reflect content risk,
                  audience, regulatory expectations, and intended use.
                </p>
              </article>
            </div>

            <div className="wf-trust-column">
              <article className="wf-trust-block">
                <h3>Secure Project Handling</h3>
                <p>Stepes supports enterprise translation security through:</p>
                <ul className="wf-trust-list-compact">
                  {securityControls.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  Security applies not only to source files but also to
                  translated content, review comments, terminology, translation
                  memory, project history, and final deliverables.
                </p>
              </article>

              <article className="wf-trust-block">
                <h3>Documentation and Oversight</h3>
                <p>
                  Project records, instructions, language assets, review
                  activity, quality findings, and delivery history can support
                  ongoing supplier governance.
                </p>
                <p>
                  Documentation requirements should be agreed at onboarding,
                  particularly for regulated, quality-sensitive, or
                  audit-relevant content.
                </p>
              </article>
            </div>
          </div>

          <div
            className="wf-trust-links"
            aria-label="Quality and security resources"
          >
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/translation-quality-system/"
            >
              Explore the Stepes Quality System
              <ArrowIcon />
            </a>
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/security/"
            >
              Review Security and Confidentiality
              <ArrowIcon />
            </a>
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/iso-certified-translation-services/"
            >
              View ISO Standards
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="wf-ai-section" aria-labelledby="ai-governance-title">
        <div className="wf-shell">
          <div className="wf-ai-intro">
            <div>
              <h2 id="ai-governance-title">
                AI-Assisted Translation With Human Governance
              </h2>
            </div>

            <div className="wf-ai-intro-copy">
              <h3>
                A Practical Governance Model for Enterprise AI Translation
              </h3>
              <p>
                Procurement teams increasingly need to understand not simply
                whether a supplier uses AI, but where it is used, how it is
                controlled, when human review applies, and how the workflow
                changes according to content risk.
              </p>
              <p>
                Stepes combines AI-assisted translation, workflow automation,
                translation memory, terminology, professional linguists, review,
                and quality assurance within one enterprise delivery model.
              </p>
            </div>
          </div>

          <div className="wf-ai-governance-layout">
            <aside
              className="wf-ai-principle"
              aria-label="Core governance principle"
            >
              <p className="wf-ai-principle-label">Core Governance Principle</p>
              <p>
                One enterprise supplier framework can support multiple
                translation workflows. AI, automation, professional translation,
                expert review, terminology, and QA are applied according to the
                content’s purpose, audience, quality requirements, and business
                risk.
              </p>
            </aside>

            <div className="wf-ai-controls">
              {aiGovernanceControls.map((control) => (
                <article className="wf-ai-control-row" key={control.title}>
                  <h3>{control.title}</h3>
                  <div className="wf-ai-control-body">
                    {control.lead && <p>{control.lead}</p>}
                    {control.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {control.bullets && (
                      <ul className="wf-ai-bullet-list">
                        {control.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                    {control.closing && (
                      <p className="wf-ai-control-closing">{control.closing}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="wf-ai-link-row">
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/ai-human-translation-workflow/"
            >
              Explore AI Translation and Human Review
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wf-sourcing-section"
        aria-labelledby="sourcing-model-title"
      >
        <div className="wf-shell">
          <div className="wf-sourcing-intro">
            <div>
              <h2 id="sourcing-model-title">
                Support the Sourcing Model That Fits Your Enterprise
              </h2>
            </div>

            <div className="wf-sourcing-intro-copy">
              <p>
                Supplier consolidation can create value, but it is not the right
                answer for every organization, department, or content category.
              </p>
              <p>
                Stepes can support different sourcing models while helping
                procurement reduce unnecessary fragmentation and establish
                clearer standards for the work assigned to Stepes.
              </p>
            </div>
          </div>

          <div className="wf-sourcing-groups">
            {sourcingModelGroups.map((group) => (
              <div className="wf-sourcing-group" key={group.label}>
                <p className="wf-sourcing-group-label">{group.label}</p>
                {group.items.map((model) => (
                  <article className="wf-sourcing-model" key={model.title}>
                    <h3>{model.title}</h3>
                    {model.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </article>
                ))}
              </div>
            ))}
          </div>

          <div className="wf-sourcing-principle">
            <p className="wf-sourcing-principle-label">
              Core Sourcing Principle
            </p>
            <p>
              Stepes helps procurement teams reduce unnecessary supplier
              fragmentation while fitting the sourcing, continuity,
              specialization, and risk-management model chosen by the
              enterprise.
            </p>
          </div>
        </div>
      </section>

      <section
        className="wf-coverage-section"
        aria-labelledby="enterprise-coverage-title"
      >
        <div className="wf-shell">
          <div className="wf-coverage-intro">
            <p className="wf-eyebrow">Enterprise Content Coverage</p>
            <h2 id="enterprise-coverage-title">
              One Translation Relationship Across Enterprise Content
            </h2>
            <p>
              Global companies create multilingual content across departments,
              systems, channels, industries, and markets. Stepes supports
              documents, websites, software, technical content, training, video,
              legal materials, medical content, financial communications,
              customer support, and other enterprise content through connected
              AI and human translation workflows.
            </p>
          </div>

          <div className="wf-coverage-board">
            <div className="wf-coverage-teams">
              <p className="wf-coverage-label">Teams We Support</p>
              <div className="wf-team-grid">
                {enterpriseTeams.map((team) => (
                  <article className="wf-team-item" key={team.title}>
                    <h3>{team.title}</h3>
                    <p>{team.description}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="wf-coverage-directories">
              <div className="wf-directory-block">
                <h3>Content We Support</h3>
                <ul className="wf-directory-list">
                  {enterpriseContentTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="wf-directory-block">
                <h3>Industries We Support</h3>
                <ul className="wf-directory-list">
                  {enterpriseIndustries.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="wf-language-band">
            <h3>Global Language Coverage</h3>
            <p>
              Stepes supports translation across more than 100 languages and
              regional variants for global, regional, and market-specific
              programs.
            </p>
            <a
              className="wf-editorial-link"
              href="https://www.stepes.com/translation-languages/"
            >
              View All Languages
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wf-stakeholder-section"
        aria-labelledby="stakeholder-approval-title"
      >
        <div className="wf-shell">
          <div className="wf-stakeholder-intro">
            <div>
              <h2 id="stakeholder-approval-title">
                Make Internal Stakeholder Approval Easier
              </h2>
            </div>

            <div className="wf-stakeholder-intro-copy">
              <h3>Built for the Teams Procurement Coordinates</h3>
              <p>
                Translation supplier approval rarely belongs to one stakeholder.
              </p>
              <p>
                Stepes helps procurement teams address the commercial, legal,
                security, quality, financial, technical, and operational
                questions that can arise during evaluation and onboarding.
              </p>
            </div>
          </div>

          <div className="wf-stakeholder-matrix">
            {stakeholderGroups.map((group) => (
              <div className="wf-stakeholder-group" key={group.label}>
                <p className="wf-stakeholder-group-label">{group.label}</p>
                {group.items.map((stakeholder) => (
                  <article
                    className="wf-stakeholder-item"
                    key={stakeholder.title}
                  >
                    <h3>{stakeholder.title}</h3>
                    <p>{stakeholder.description}</p>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wf-pilot-section"
        aria-labelledby="procurement-pilot-title"
      >
        <div className="wf-shell">
          <div className="wf-pilot-intro">
            <div>
              <p className="wf-eyebrow">Controlled Supplier Validation</p>
              <h2 id="procurement-pilot-title">
                Validate Quality, Workflow, and Service Before Scaling
              </h2>
            </div>

            <div className="wf-pilot-intro-copy">
              <h3>Begin With a Controlled Translation Pilot</h3>
              <p>
                A representative pilot can help procurement and business
                stakeholders evaluate Stepes using real content, actual
                languages, relevant deadlines, and internal review.
              </p>
              <p>
                The objective is not simply to judge a single translation. It is
                to test the complete working relationship—from scoping and
                commercial clarity through communication, translation, review,
                QA, delivery, and feedback resolution.
              </p>
            </div>
          </div>

          <div className="wf-pilot-layout">
            <aside
              className="wf-pilot-evaluation"
              aria-label="Suggested pilot evaluation areas"
            >
              <h3>Suggested Pilot Evaluation Areas</h3>
              <p>
                Agree on the decision criteria before work begins so reviewers
                can assess both linguistic quality and supplier readiness
                consistently.
              </p>
              <ul className="wf-pilot-evaluation-list">
                {pilotEvaluationAreas.map((area) => (
                  <li key={area}>{area}</li>
                ))}
              </ul>
            </aside>

            <div className="wf-pilot-steps">
              {pilotSteps.map((step) => (
                <article className="wf-pilot-step" key={step.number}>
                  <p className="wf-pilot-number">{step.number}</p>
                  <h3>{step.title}</h3>
                  <div className="wf-pilot-step-body">
                    {step.lead && <p>{step.lead}</p>}
                    {step.paragraphs?.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {step.bullets && (
                      <ul className="wf-pilot-step-list">
                        {step.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div
            className="wf-pilot-actions"
            aria-label="Pilot discussion actions"
          >
            <a
              className="wf-button wf-button-primary"
              href="https://www.stepes.com/contact-sales/"
            >
              Discuss a Procurement Pilot
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section
        className="wf-procurement-reasons-section"
        aria-labelledby="why-procurement-title"
      >
        <div className="wf-shell">
          <div className="wf-reasons-intro">
            <div>
              <h2 id="why-procurement-title">
                Why Procurement Teams Choose Stepes
              </h2>
            </div>

            <div className="wf-reasons-intro-copy">
              <h3>
                Enterprise Translation Built Around Control and Scalability
              </h3>
              <p>
                Stepes combines professional language services, enterprise
                translation technology, AI-powered workflows, translation
                memory, terminology management, quality controls, and project
                visibility within one connected delivery model.
              </p>
            </div>
          </div>

          <div className="wf-reasons-grid">
            {procurementReasons.map((reason) => (
              <article className="wf-reason-item" key={reason.title}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wf-faq-section"
        aria-labelledby="procurement-faq-title"
      >
        <div className="wf-shell">
          <div className="wf-faq-intro">
            <div>
              <h2 id="procurement-faq-title">
                Common Questions About Enterprise Translation Procurement
              </h2>
            </div>
            <p>
              Review practical guidance on supplier evaluation, translation
              RFPs, quality standards, security reviews, AI governance,
              performance measures, language assets, and controlled pilot
              programs.
            </p>
          </div>

          <div className="wf-faq-panel">
            {procurementFaqs.map((faq, index) => (
              <details
                className="wf-faq-item"
                key={faq.question}
                open={index === 0}
              >
                <summary>
                  <span className="wf-faq-question">{faq.question}</span>
                  <span className="wf-faq-toggle" aria-hidden="true" />
                </summary>
                <div className="wf-faq-answer">
                  {faq.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wf-related-section"
        aria-labelledby="related-enterprise-resources-title"
      >
        <div className="wf-shell">
          <div className="wf-related-intro">
            <div>
              <p className="wf-eyebrow">Related Solutions</p>
              <h2 id="related-enterprise-resources-title">
                Explore Translation Procurement, Quality, and Governance Resources
              </h2>
            </div>
            <p className="wf-related-intro-copy">
              Connect procurement strategy with the Stepes platform, quality
              system, security controls, language governance, and multilingual
              delivery capabilities that support enterprise translation programs.
            </p>
          </div>

          <div className="wf-resource-directory">
            {relatedResourceGroups.map((group) => (
              <div className="wf-resource-group" key={group.label}>
                <p className="wf-resource-group-label">{group.label}</p>
                {group.items.map((item) => (
                  <a
                    className="wf-resource-link"
                    href={item.href}
                    key={item.title}
                  >
                    <span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </span>
                    <ArrowIcon />
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="wf-final-cta-section"
        aria-labelledby="procurement-final-cta-title"
      >
        <div className="wf-shell">
          <div className="wf-final-cta-panel">
            <div className="wf-final-cta-content">
              <p className="wf-eyebrow">Translation Procurement</p>
              <h2 id="procurement-final-cta-title">
                Build a More Controlled Enterprise Translation Program
              </h2>
              <p>
                Whether you are qualifying a new language service provider,
                preparing a translation RFP, reviewing supplier security,
                consolidating vendors, evaluating AI-assisted workflows, or
                expanding an existing global content program, Stepes can help
                you establish a more scalable model for cost, quality, service,
                security, and multilingual delivery.
              </p>
              <p>
                Talk with our enterprise team about your departments, languages,
                content types, supplier requirements, quality expectations, and
                onboarding process.
              </p>
            </div>

            <div
              className="wf-final-cta-actions"
              aria-label="Enterprise translation procurement actions"
            >
              <a
                className="wf-button wf-button-primary"
                href="https://www.stepes.com/contact-sales/"
              >
                Talk to an Expert
                <ArrowIcon />
              </a>
              <a
                className="wf-editorial-link"
                href="https://www.stepes.com/enterprise-translation-management/"
              >
                Explore Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>

            <div className="wf-final-cta-note">
              <p className="wf-final-cta-note-label">Supplier Review Support</p>
              <p>
                Need certification, quality, security, or supplier-onboarding
                information? Include your procurement requirements when
                contacting the Stepes enterprise team.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
