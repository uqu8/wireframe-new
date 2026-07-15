import React, { useMemo, useState } from "react";

const ArrowIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M4 9h9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    <path
      d="m10 5 4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="11" cy="11" r="9.25" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="m7.2 11 2.35 2.35L14.9 8"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DocumentIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M7.5 3.75h7.25l4 4v14.5H7.5V3.75Z"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinejoin="round"
    />
    <path d="M14.75 3.75v4h4" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
    <path d="M10.25 12h5.5M10.25 15.5h5.5M10.25 19h3.25" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
  </svg>
);

const GlobeIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="13" cy="13" r="9.25" stroke="currentColor" strokeWidth="1.55" />
    <path d="M3.95 13h18.1" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    <path
      d="M13 3.75c2.55 2.45 3.85 5.54 3.85 9.25S15.55 19.8 13 22.25C10.45 19.8 9.15 16.71 9.15 13S10.45 6.2 13 3.75Z"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinejoin="round"
    />
  </svg>
);

const WorkflowIcon = () => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3.75" y="4.25" width="6" height="5.5" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
    <rect x="16.25" y="16.25" width="6" height="5.5" rx="1.4" stroke="currentColor" strokeWidth="1.55" />
    <path d="M9.75 7h3.1a4.9 4.9 0 0 1 4.9 4.9v4.35" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    <path d="m15.75 14.35 2 2 2-2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const SparklesIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13 2.75c.55 4.4 2.85 6.7 7.25 7.25-4.4.55-6.7 2.85-7.25 7.25-.55-4.4-2.85-6.7-7.25-7.25 4.4-.55 6.7-2.85 7.25-7.25Z"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.25 16.25c.25 2.05 1.45 3.25 3.5 3.5-2.05.25-3.25 1.45-3.5 3.5-.25-2.05-1.45-3.25-3.5-3.5 2.05-.25 3.25-1.45 3.5-3.5Z"
      stroke="currentColor"
      strokeWidth="1.45"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShieldCheckIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <path
      d="M13 3.25 21 6.4v5.8c0 5.15-3.1 8.75-8 10.55-4.9-1.8-8-5.4-8-10.55V6.4L13 3.25Z"
      stroke="currentColor"
      strokeWidth="1.55"
      strokeLinejoin="round"
    />
    <path
      d="m9.2 12.8 2.45 2.45 5.2-5.2"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LockIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="5" y="11" width="16" height="11" rx="2.4" stroke="currentColor" strokeWidth="1.55" />
    <path d="M8.5 11V8a4.5 4.5 0 0 1 9 0v3" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    <path d="M13 15.5v3" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
  </svg>
);

const GovernanceIcon = ({ size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 26 26"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <rect x="3.75" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="15.25" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <rect x="9.5" y="16" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="M7.25 10v2.25H13M18.75 10v2.25H13M13 12.25V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);


const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle cx="8.7" cy="8.7" r="5.45" stroke="currentColor" strokeWidth="1.55" />
    <path d="m12.75 12.75 4 4" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
  </svg>
);

const TopicIcon = ({ type, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
    focusable: "false",
  };

  if (type === "software") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m9 9-2 2 2 2M15 9l2 2-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "life-sciences") {
    return (
      <svg {...common}>
        <path d="M9 3h6M10 3v5.1L5.4 17a2.7 2.7 0 0 0 2.4 4h8.4a2.7 2.7 0 0 0 2.4-4L14 8.1V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.4 15h9.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "medical-device") {
    return (
      <svg {...common}>
        <rect x="5" y="3" width="14" height="18" rx="2.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 7h6M9 17h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 9.5v5M9.5 12h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "manufacturing") {
    return (
      <svg {...common}>
        <path d="M3 21V9l6 3V8l6 4V5l6 4v12H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 17h2M12 17h2M17 17h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "financial") {
    return (
      <svg {...common}>
        <path d="M3 9h18L12 3 3 9Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 21h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "legal") {
    return (
      <svg {...common}>
        <path d="M12 3v18M7 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="m7 6-4 7h8L7 6ZM17 6l-4 7h8l-4-7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 21h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "retail") {
    return (
      <svg {...common}>
        <path d="M4 7h16l-1 14H5L4 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8 9V6a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "education") {
    return (
      <svg {...common}>
        <path d="m3 9 9-5 9 5-9 5-9-5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M6.5 11v5.1c2.8 2.2 8.2 2.2 11 0V11M21 10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "ai") {
    return (
      <svg {...common}>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.65 5.65l2.1 2.1M16.25 16.25l2.1 2.1M18.35 5.65l-2.1 2.1M7.75 16.25l-2.1 2.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    );
  }

  if (type === "website") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 12h18M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.4-3.8-9S9.5 5.4 12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    );
  }

  if (type === "enterprise") {
    return (
      <svg {...common}>
        <rect x="3" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="14" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 7h2a5 5 0 0 1 5 5v2M14.5 12.5 17 15l2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 5h16v14H4V5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

const evidenceItems = [
  {
    title: "Business Context",
    text: "Understand the customer challenge, audience, markets, and operational priorities behind the engagement.",
  },
  {
    title: "Workflow Detail",
    text: "See how language expertise, technology, review, and quality assurance work together in practice.",
  },
  {
    title: "Meaningful Outcomes",
    text: "Explore the operational, linguistic, and business impact supported by documented project evidence.",
  },
];

const programSignals = [
  {
    icon: <DocumentIcon />,
    title: "Content and Scope",
    text: "Languages, formats, audiences, delivery cadence, and stakeholder requirements.",
  },
  {
    icon: <WorkflowIcon />,
    title: "Workflow and Governance",
    text: "Translation approach, professional review, language assets, quality controls, and approvals.",
  },
  {
    icon: <GlobeIcon />,
    title: "Global Business Value",
    text: "How the program supports launches, quality, consistency, efficiency, and multilingual scale.",
  },
];

const featuredHighlights = [
  "Continuous localization for recurring product updates",
  "In-context review for software and digital experiences",
  "Terminology, translation memory, and quality assurance",
  "Workflows designed for SaaS, medical devices, fintech, and gaming",
];


const caseStudyCollections = [
  {
    group: "Industry",
    icon: "software",
    tag: "Software and SaaS",
    title: "Software and SaaS Localization",
    text: "Explore multilingual product, interface, help content, and recurring release workflows for global software experiences.",
    href: "https://www.stepes.com/resources/case-studies/software-localization/",
  },
  {
    group: "Industry",
    icon: "life-sciences",
    tag: "Life Sciences",
    title: "Life Sciences and Clinical Content",
    text: "Review approaches for clinical, research, regulatory, training, and patient-facing content across languages.",
    href: "https://www.stepes.com/resources/case-studies/life-sciences-translation/",
  },
  {
    group: "Industry",
    icon: "medical-device",
    tag: "Medical Devices",
    title: "Medical Device Content and Software",
    text: "See how regulated product documentation, labeling, software, and training content can be localized together.",
    href: "https://www.stepes.com/resources/case-studies/medical-device-localization/",
  },
  {
    group: "Solution",
    icon: "ai",
    tag: "AI + Human Review",
    title: "AI Translation and Human Validation",
    text: "Explore professional review, terminology checks, structured error analysis, and quality assurance for AI-generated translation.",
    href: "https://www.stepes.com/resources/case-studies/ai-translation-human-validation/",
  },
  {
    group: "Solution",
    icon: "website",
    tag: "Digital Content",
    title: "Website and Digital Content Localization",
    text: "Discover workflows for multilingual websites, landing pages, product content, metadata, and ongoing digital updates.",
    href: "https://www.stepes.com/resources/case-studies/website-localization/",
  },
  {
    group: "Solution",
    icon: "enterprise",
    tag: "Enterprise Operations",
    title: "Enterprise Translation Management",
    text: "See how global teams connect requests, language assets, reviewers, reporting, and quality controls in one operating model.",
    href: "https://www.stepes.com/resources/case-studies/enterprise-translation-management/",
  },
  {
    group: "Business Outcome",
    icon: "website",
    tag: "Global Launches",
    title: "Faster Multilingual Launches",
    text: "Explore programs designed to coordinate translation and quality assurance with product, regulatory, and campaign timelines.",
    href: "https://www.stepes.com/resources/case-studies/global-launches/",
  },
  {
    group: "Business Outcome",
    icon: "medical-device",
    tag: "Quality and Governance",
    title: "Translation Quality and Terminology Control",
    text: "Review how language assets, professional validation, approval paths, and quality controls support consistent multilingual content.",
    href: "https://www.stepes.com/resources/case-studies/translation-quality-governance/",
  },
  {
    group: "Business Outcome",
    icon: "enterprise",
    tag: "Operational Efficiency",
    title: "Workflow Automation and Content Reuse",
    text: "See how connected workflows and reusable language assets can reduce repetitive work across recurring translation programs.",
    href: "https://www.stepes.com/resources/case-studies/workflow-automation/",
  },
];

const filterOptions = [
  { label: "All", value: "All" },
  { label: "Industry", value: "Industry" },
  { label: "Solution", value: "Solution" },
  { label: "Outcomes", value: "Business Outcome" },
];

const industryItems = [
  {
    icon: "life-sciences",
    title: "Life Sciences",
    text: "Clinical, research, regulatory, training, and patient-facing content.",
    href: "https://www.stepes.com/resources/case-studies/life-sciences-translation/",
  },
  {
    icon: "medical-device",
    title: "Medical Devices",
    text: "Product software, instructions for use, labeling, and technical documentation.",
    href: "https://www.stepes.com/resources/case-studies/medical-device-localization/",
  },
  {
    icon: "software",
    title: "Software and SaaS",
    text: "Applications, interfaces, help content, release communications, and digital products.",
    href: "https://www.stepes.com/resources/case-studies/software-localization/",
  },
  {
    icon: "manufacturing",
    title: "Manufacturing",
    text: "Technical manuals, product documentation, training, engineering, and safety content.",
    href: "https://www.stepes.com/resources/case-studies/manufacturing-translation/",
  },
  {
    icon: "financial",
    title: "Financial Services",
    text: "Digital products, customer communications, terminology, validation, and security.",
    href: "https://www.stepes.com/resources/case-studies/financial-services-translation/",
  },
  {
    icon: "legal",
    title: "Legal",
    text: "Contracts, compliance, corporate communications, and sensitive multilingual documents.",
    href: "https://www.stepes.com/resources/case-studies/legal-translation/",
  },
  {
    icon: "retail",
    title: "Retail and E-Commerce",
    text: "Product content, websites, campaigns, customer journeys, and digital commerce.",
    href: "https://www.stepes.com/resources/case-studies/retail-ecommerce-localization/",
  },
  {
    icon: "education",
    title: "Education and eLearning",
    text: "Courses, platforms, multimedia, assessments, and instructional content.",
    href: "https://www.stepes.com/resources/case-studies/education-elearning-localization/",
  },
];

const solutionItems = [
  {
    title: "AI Translation and Human Review",
    text: "Professional validation, structured error analysis, terminology control, and human quality assurance.",
    href: "https://www.stepes.com/resources/case-studies/ai-translation-human-validation/",
    linkLabel: "AI Translation Case Studies",
  },
  {
    title: "Enterprise Translation Management",
    text: "Centralized requests, language assets, stakeholder review, reporting, and multilingual governance.",
    href: "https://www.stepes.com/resources/case-studies/enterprise-translation-management/",
    linkLabel: "Enterprise Translation Case Studies",
  },
  {
    title: "Software and App Localization",
    text: "Product development, interface review, continuous releases, localization testing, and global delivery.",
    href: "https://www.stepes.com/resources/case-studies/software-localization/",
    linkLabel: "Software Localization Case Studies",
  },
  {
    title: "Website Localization",
    text: "Websites, landing pages, product content, metadata, and ongoing digital publishing workflows.",
    href: "https://www.stepes.com/resources/case-studies/website-localization/",
    linkLabel: "Website Localization Case Studies",
  },
  {
    title: "Medical and Regulatory Translation",
    text: "Regulated documentation, labeling, clinical materials, medical content, and patient communications.",
    href: "https://www.stepes.com/resources/case-studies/medical-regulatory-translation/",
    linkLabel: "Medical Translation Case Studies",
  },
  {
    title: "Technical Translation",
    text: "Manuals, specifications, engineering documentation, safety content, and product support materials.",
    href: "https://www.stepes.com/resources/case-studies/technical-documentation-translation/",
    linkLabel: "Technical Translation Case Studies",
  },
  {
    title: "Multimedia and eLearning Localization",
    text: "Voice-over, subtitles, videos, interactive training, courses, and multilingual media experiences.",
    href: "https://www.stepes.com/resources/case-studies/multimedia-elearning-localization/",
    linkLabel: "Multimedia Localization Case Studies",
  },
  {
    title: "Multilingual Content Operations",
    text: "Connected people, processes, language assets, and technology for recurring translation at scale.",
    href: "https://www.stepes.com/resources/case-studies/global-content-operations/",
    linkLabel: "Global Content Operations Case Studies",
  },
];

const outcomeItems = [
  {
    title: "Accelerate Global Launches",
    text: "Coordinate translation, review, quality assurance, and delivery with product releases, regulatory timelines, campaigns, and market-entry plans.",
  },
  {
    title: "Improve Translation Quality",
    text: "Apply the right level of professional review, linguistic validation, terminology governance, and quality assurance for each content type.",
  },
  {
    title: "Increase Content Consistency",
    text: "Reuse approved terminology and translation memory across teams, languages, content types, and recurring programs.",
  },
  {
    title: "Reduce Manual Work",
    text: "Streamline file handling, routing, content reuse, stakeholder review, status tracking, and system-to-system exchange.",
  },
  {
    title: "Strengthen Governance and Control",
    text: "Create clearer workflows, responsibilities, approval paths, access controls, reporting, and quality standards.",
  },
  {
    title: "Scale Across Languages and Markets",
    text: "Support growing content volumes and additional languages without adding unnecessary operational complexity.",
  },
];

const caseStudyAnatomyItems = [
  {
    title: "Customer Context",
    text: "An overview of the organization, industry, audiences, markets, and business environment behind the work.",
  },
  {
    title: "The Challenge",
    text: "The content, language, workflow, technology, quality, or scale issues the customer needed to address.",
  },
  {
    title: "Project Scope",
    text: "Languages, markets, content types, file formats, approximate volumes, delivery cadence, and stakeholder requirements.",
  },
  {
    title: "The Stepes Solution",
    text: "The translation workflow, professional resources, technology, integrations, review process, and quality controls used.",
  },
  {
    title: "Quality and Governance",
    text: "Linguistic standards, terminology resources, approval processes, access controls, and quality assurance measures.",
  },
  {
    title: "Results",
    text: "Verified operational, linguistic, customer, or business outcomes supported by approved project evidence.",
  },
  {
    title: "Lessons and Best Practices",
    text: "Practical insights that other organizations can apply to similar translation and localization challenges.",
  },
];

const enterpriseWorkflowSteps = [
  {
    title: "Content and Workflow Assessment",
    text: "Review content, languages, audiences, systems, timelines, quality expectations, and business risk.",
  },
  {
    title: "Language Asset Preparation",
    text: "Evaluate translation memories, glossaries, style guides, reference materials, and approved content for reuse.",
  },
  {
    title: "Workflow Design",
    text: "Define the right combination of AI translation, professional translation, post-editing, validation, and QA.",
  },
  {
    title: "Linguist and Reviewer Assignment",
    text: "Select qualified native linguists and subject-matter resources for the language, industry, and content type.",
  },
  {
    title: "Translation and Validation",
    text: "Translate, review, validate, and check content against approved terminology, instructions, and quality criteria.",
  },
  {
    title: "In-Context and Functional QA",
    text: "Review translations in software, websites, formatted files, multimedia, or other final-use environments.",
  },
  {
    title: "Delivery and Integration",
    text: "Return content in the required format or deliver it through connected platforms, APIs, and repositories.",
  },
  {
    title: "Continuous Improvement",
    text: "Use language assets, feedback, quality findings, and workflow data to improve future performance.",
  },
];

const aiTechnologyItems = [
  "AI or machine translation",
  "Translation memory matching",
  "Content reuse across recurring programs",
];

const humanOversightItems = [
  "Professional post-editing",
  "Native-language linguistic review",
  "Subject-matter validation",
  "Terminology and glossary checks",
  "Structured translation error classification",
  "In-context review",
  "Functional and cosmetic localization testing",
  "Final quality assurance",
];

const enterpriseControlGroups = [
  {
    icon: <ShieldCheckIcon />,
    title: "Language Quality",
    text: "Qualified language resources and controls designed around the content, audience, and intended use.",
    items: [
      "Qualified native-language linguists",
      "Industry and subject-matter expertise",
      "Translation memory and terminology governance",
      "Linguistic and automated quality checks",
      "In-context validation",
    ],
  },
  {
    icon: <LockIcon />,
    title: "Security and Access",
    text: "Operational safeguards that support secure handling of multilingual content throughout the workflow.",
    items: [
      "Role-based access and project permissions",
      "Secure file exchange",
      "Controlled reviewer and stakeholder access",
      "Customer-specific handling requirements",
    ],
  },
  {
    icon: <GovernanceIcon />,
    title: "Program Governance",
    text: "Defined processes that help global teams maintain visibility, accountability, and continuous improvement.",
    items: [
      "Documented review and approval workflows",
      "Version and change management",
      "Project reporting and issue tracking",
      "Feedback, corrective action, and continuous improvement",
    ],
  },
];

const customerPerspectiveItems = [
  {
    title: "Why Stepes Was Chosen",
    text: "Understand the business, workflow, quality, technology, and partnership priorities that shaped the customer’s decision.",
  },
  {
    title: "How the Program Worked",
    text: "See how customer stakeholders, Stepes program teams, linguists, reviewers, and technology came together across the engagement.",
  },
  {
    title: "What Changed",
    text: "Learn which operational improvements, working practices, and next-stage opportunities created the greatest value for the customer.",
  },
];

const featuredCaseStudyCollections = [
  {
    label: "Product and Engineering Teams",
    title: "Software, App, and Continuous Localization",
    text: "Explore product interfaces, applications, technical content, APIs, release workflows, in-context review, and localization testing.",
    href: "https://www.stepes.com/resources/case-studies/software-localization/",
    linkLabel: "Explore Product Localization Case Studies",
  },
  {
    label: "Life Sciences and Medical Device Teams",
    title: "Regulated Content and Product Localization",
    text: "Review programs involving medical documentation, product software, labeling, clinical content, patient materials, and linguistic validation.",
    href: "https://www.stepes.com/resources/case-studies/medical-device-localization/",
    linkLabel: "Explore Regulated Content Case Studies",
  },
  {
    label: "Marketing and Digital Teams",
    title: "Websites, Campaigns, and Digital Experiences",
    text: "See how organizations localize websites, product content, campaigns, multimedia, metadata, and recurring global digital updates.",
    href: "https://www.stepes.com/resources/case-studies/website-localization/",
    linkLabel: "Explore Marketing Localization Case Studies",
  },
  {
    label: "Localization and Global Content Teams",
    title: "Enterprise Translation Operations",
    text: "Discover approaches to terminology governance, translation memory, workflow automation, reporting, quality, and multilingual scale.",
    href: "https://www.stepes.com/resources/case-studies/global-content-operations/",
    linkLabel: "Explore Enterprise Localization Case Studies",
  },
];

const relatedExpertiseItems = [
  {
    title: "Translation Guides",
    text: "Practical guidance for planning, managing, reviewing, and improving professional translation programs.",
    href: "https://www.stepes.com/resources/translation-guides/",
    linkLabel: "Explore Translation Guides",
  },
  {
    title: "Localization Guides",
    text: "Strategies for localizing websites, software, applications, digital products, and global content experiences.",
    href: "https://www.stepes.com/resources/localization-guides/",
    linkLabel: "Explore Localization Guides",
  },
  {
    title: "AI Translation Insights",
    text: "Enterprise perspectives on AI translation, professional validation, terminology governance, risk, and quality.",
    href: "https://www.stepes.com/ai-translation-insights/",
    linkLabel: "Explore AI Translation Insights",
  },
  {
    title: "Translation Quality Resources",
    text: "Explore linguistic quality assurance, review methodologies, terminology control, metrics, and continuous improvement.",
    href: "https://www.stepes.com/resources/translation-quality-resources/",
    linkLabel: "Explore Quality Resources",
  },
  {
    title: "Global Content Strategy",
    text: "Connect multilingual content strategy, translation operations, technology, governance, and international execution.",
    href: "https://www.stepes.com/resources/global-content-strategy/",
    linkLabel: "Explore Global Content Strategy",
  },
  {
    title: "Security and Compliance",
    text: "Review the safeguards, controls, and operational practices that support secure enterprise translation workflows.",
    href: "https://www.stepes.com/security-and-compliance/",
    linkLabel: "Explore Security and Compliance",
  },
];

const faqItems = [
  {
    question: "What is a translation case study?",
    answer: "A translation case study is an in-depth account of how an organization addressed a specific multilingual content or localization challenge. It typically explains the business need, project scope, workflow, quality controls, technology, and results.",
  },
  {
    question: "What types of projects are included in Stepes case studies?",
    answer: "Stepes case studies may cover software and app localization, website localization, technical translation, medical and regulatory content, AI translation review, multimedia localization, multilingual marketing, linguistic validation, and enterprise translation management.",
  },
  {
    question: "Which industries does Stepes support?",
    answer: "Stepes supports organizations across life sciences, healthcare, medical devices, financial services, legal, software and SaaS, manufacturing, automotive, electronics, telecommunications, retail, education, energy, government, and other global industries.",
  },
  {
    question: "Do the case studies include named customers?",
    answer: "Some case studies identify the customer and include an approved logo or quotation. Others are anonymized because of confidentiality, security, contractual, or regulatory requirements, with the customer’s identity clearly described as withheld.",
  },
  {
    question: "Are the results in each case study verified?",
    answer: "Yes. Published performance metrics and customer quotations are supported by documented project information. When a page uses an anonymized or illustrative example, it identifies that distinction clearly.",
  },
  {
    question: "How does Stepes measure translation success?",
    answer: "The most relevant measures depend on the project. They may include translation quality, terminology consistency, turnaround time, release efficiency, reviewer effort, content reuse, workflow visibility, issue reduction, market coverage, or customer experience.",
  },
  {
    question: "Does Stepes use AI translation?",
    answer: "Yes. Stepes supports AI-powered translation workflows with professional human review and validation. The appropriate workflow depends on the content, audience, business purpose, quality requirements, and level of risk.",
  },
  {
    question: "Can Stepes use our existing translation memory and glossary?",
    answer: "Yes. Stepes can evaluate, clean, import, maintain, and apply existing translation memories, glossaries, style guides, and approved language assets to improve consistency and reduce unnecessary retranslation.",
  },
  {
    question: "Can Stepes integrate with our content or localization systems?",
    answer: "Stepes supports API-based and system-connected translation workflows for websites, software, applications, repositories, content platforms, and other enterprise environments. Integration requirements are assessed during workflow planning.",
  },
  {
    question: "How can we discuss a project similar to one of these case studies?",
    answer: "Share your content types, languages, approximate volume, timeline, workflow, and quality requirements with the Stepes team. We can review your needs and recommend an appropriate translation and localization approach.",
  },
];


export default function StepesCaseStudiesHub() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState(0);

  const visibleCollections = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return caseStudyCollections.filter((item) => {
      const matchesFilter = activeFilter === "All" || item.group === activeFilter;
      const matchesSearch =
        !normalizedSearch ||
        `${item.tag} ${item.title} ${item.text}`.toLowerCase().includes(normalizedSearch);

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="case-studies-page">
      <style>{`
        :root {
          --stepes-magenta: #c11d63;
          --stepes-magenta-dark: #9f1d55;
          --stepes-magenta-deep: #7a1542;
          --stepes-blush: #fdf2f7;
          --stepes-blush-strong: #fae9f1;
          --ink-900: #131827;
          --ink-800: #20283a;
          --ink-700: #374157;
          --ink-600: #59657b;
          --ink-500: #758096;
          --line: #e4e8ef;
          --line-strong: #d7dde7;
          --surface-soft: #f7f9fc;
          --white: #ffffff;
          --shadow-soft: 0 22px 60px rgba(25, 31, 45, 0.08);
        }

        * {
          box-sizing: border-box;
        }

        .cs-sr-only {
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

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
        }

        .case-studies-page {
          width: 100%;
          overflow-x: clip;
          overflow-y: visible;
          color: var(--ink-900);
          background: var(--white);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .case-studies-page a {
          color: inherit;
          text-decoration: none;
        }

        .cs-shell {
          width: min(100%, 1392px);
          margin: 0 auto;
          padding-inline: 56px;
        }

        .cs-hero {
          position: relative;
          padding: 104px 0 88px;
          background: linear-gradient(180deg, #ffffff 0%, #ffffff 72%, #fcfcfd 100%);
        }

        .cs-hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .cs-hero h1 {
          max-width: 980px;
          margin: 0;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          text-wrap: balance;
        }

        .cs-hero-copy {
          max-width: 800px;
          margin: 24px auto 0;
          color: var(--ink-600);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .cs-hero-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 34px;
        }

        .cs-button {
          display: inline-flex;
          min-height: 52px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 24px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
          transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .cs-button svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .cs-button:hover svg,
        .cs-button:focus-visible svg {
          transform: translateX(3px);
        }

        .cs-button-primary,
        .cs-button-primary:link,
        .cs-button-primary:visited,
        .cs-button-primary:hover,
        .cs-button-primary:active,
        .cs-button-primary:focus-visible {
          color: #ffffff;
        }

        .cs-button-primary {
          background: var(--stepes-magenta);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
        }

        .cs-button-primary:hover {
          background: var(--stepes-magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 16px 34px rgba(193, 29, 99, 0.24);
        }

        .cs-button-secondary {
          color: var(--ink-900);
          background: #ffffff;
          border-color: var(--line-strong);
        }

        .cs-button-secondary:hover {
          border-color: #c5ccd8;
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(25, 31, 45, 0.08);
        }

        .cs-button:focus-visible,
        .cs-text-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.2);
          outline-offset: 3px;
        }

        .cs-hero-evidence {
          width: 100%;
          max-width: 1168px;
          margin-top: 68px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .cs-evidence-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .cs-evidence-item {
          position: relative;
          min-width: 0;
          padding: 28px 32px 30px;
          text-align: left;
        }

        .cs-evidence-item + .cs-evidence-item::before {
          position: absolute;
          top: 24px;
          bottom: 24px;
          left: 0;
          width: 1px;
          content: "";
          background: var(--line);
        }

        .cs-evidence-item h3 {
          margin: 0;
          color: var(--ink-900);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-evidence-item p {
          margin: 10px 0 0;
          color: var(--ink-600);
          font-size: 14px;
          font-weight: 400;
          line-height: 1.65;
        }

        .cs-section {
          padding: 96px 0;
        }

        .cs-section-overview {
          background: #ffffff;
        }

        .cs-overview-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 88px;
          align-items: start;
        }

        .cs-section-heading {
          position: sticky;
          top: 32px;
        }

        .cs-eyebrow {
          display: block;
          margin: 0 0 16px;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .cs-section h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .cs-overview-lead {
          margin: 0;
          color: var(--ink-800);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .cs-overview-copy {
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.78;
        }

        .cs-program-signals {
          margin-top: 40px;
          border-top: 1px solid var(--line);
        }

        .cs-signal-row {
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }

        .cs-signal-icon {
          display: flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          background: var(--stepes-blush);
          border-radius: 14px;
        }

        .cs-signal-content h3 {
          margin: 0;
          color: var(--ink-900);
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-signal-content p {
          max-width: 650px;
          margin: 7px 0 0;
          color: var(--ink-600);
          font-size: 16px;
          font-weight: 400;
          line-height: 1.68;
        }

        .cs-feature-section {
          padding: 80px 0 96px;
          background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);
        }

        .cs-feature-panel {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 0.96fr) minmax(0, 1.04fr);
          min-height: 530px;
          border: 1px solid #f1d8e4;
          border-radius: 30px;
          background: var(--stepes-blush);
          box-shadow: var(--shadow-soft);
        }

        .cs-feature-panel::after {
          position: absolute;
          z-index: -1;
          right: -150px;
          bottom: -178px;
          width: 440px;
          height: 440px;
          content: "";
          border: 1px solid rgba(193, 29, 99, 0.13);
          border-radius: 50%;
        }

        .cs-feature-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 66px 60px 66px 64px;
        }

        .cs-feature-copy h2 {
          max-width: 540px;
        }

        .cs-feature-intro {
          max-width: 610px;
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.72;
        }

        .cs-feature-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 18px;
          margin-top: 28px;
          color: var(--ink-700);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .cs-feature-meta span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .cs-feature-meta span::before {
          width: 5px;
          height: 5px;
          content: "";
          background: var(--stepes-magenta);
          border-radius: 50%;
        }

        .cs-feature-link {
          margin-top: 34px;
          align-self: flex-start;
        }

        .cs-feature-visual-wrap {
          display: flex;
          align-items: center;
          padding: 42px 42px 42px 0;
        }

        .cs-feature-visual {
          width: 100%;
          padding: 30px;
          border: 1px solid rgba(122, 21, 66, 0.14);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.92);
          box-shadow: 0 18px 50px rgba(95, 34, 64, 0.1);
          backdrop-filter: blur(8px);
        }

        .cs-visual-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding-bottom: 22px;
          border-bottom: 1px solid var(--line);
        }

        .cs-visual-label {
          margin: 0;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .cs-visual-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--ink-600);
          font-size: 13px;
          font-weight: 600;
        }

        .cs-visual-status::before {
          width: 8px;
          height: 8px;
          content: "";
          background: var(--stepes-magenta);
          border-radius: 50%;
          box-shadow: 0 0 0 4px rgba(193, 29, 99, 0.1);
        }

        .cs-visual-title {
          margin: 24px 0 0;
          color: var(--ink-900);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.015em;
        }

        .cs-visual-summary {
          margin: 12px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.65;
        }

        .cs-highlight-list {
          display: grid;
          gap: 0;
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--line);
        }

        .cs-highlight-list li {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          padding: 16px 0;
          color: var(--ink-700);
          font-size: 14px;
          line-height: 1.55;
          border-bottom: 1px solid var(--line);
        }

        .cs-highlight-list svg {
          margin-top: 1px;
          color: var(--stepes-magenta-dark);
        }

        .cs-text-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--stepes-magenta-dark) !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          transition: color 180ms ease;
        }

        .cs-text-link svg {
          transition: transform 180ms ease;
        }

        .cs-text-link:hover {
          color: var(--stepes-magenta-deep) !important;
        }

        .cs-text-link:hover svg,
        .cs-text-link:focus-visible svg {
          transform: translateX(3px);
        }


        .cs-library-section {
          padding: 96px 0;
          background: var(--surface-soft);
        }

        .cs-library-section h2,
        .cs-industry-section h2,
        .cs-solution-section h2,
        .cs-outcomes-section h2,
        .cs-anatomy-section h2,
        .cs-workflow-section h2,
        .cs-ai-section h2,
        .cs-controls-section h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .cs-library-header {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 88px;
          align-items: end;
        }

        .cs-library-intro {
          max-width: 700px;
          margin: 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-library-controls {
          display: grid;
          grid-template-columns: minmax(280px, 1fr) auto;
          gap: 18px;
          align-items: center;
          margin-top: 42px;
          padding: 18px;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 12px 34px rgba(25, 31, 45, 0.05);
        }

        .cs-search-field {
          position: relative;
          min-width: 0;
        }

        .cs-search-field svg {
          position: absolute;
          top: 50%;
          left: 18px;
          color: var(--ink-500);
          transform: translateY(-50%);
          pointer-events: none;
        }

        .cs-search-input {
          width: 100%;
          min-height: 48px;
          padding: 12px 18px 12px 50px;
          color: var(--ink-900);
          border: 1px solid var(--line-strong);
          border-radius: 999px;
          background: #ffffff;
          font: inherit;
          font-size: 15px;
          line-height: 1.4;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }

        .cs-search-input::placeholder {
          color: var(--ink-500);
        }

        .cs-search-input:focus {
          border-color: rgba(193, 29, 99, 0.65);
          box-shadow: 0 0 0 4px rgba(193, 29, 99, 0.1);
        }

        .cs-filter-group {
          display: flex;
          flex-wrap: wrap;
          justify-content: flex-end;
          gap: 8px;
        }

        .cs-filter-button {
          min-height: 44px;
          padding: 10px 16px;
          color: var(--ink-700);
          border: 1px solid transparent;
          border-radius: 999px;
          background: transparent;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          cursor: pointer;
          transition: color 180ms ease, background-color 180ms ease, border-color 180ms ease;
        }

        .cs-filter-button:hover {
          color: var(--stepes-magenta-dark);
          background: var(--stepes-blush);
        }

        .cs-filter-button[aria-pressed="true"] {
          color: var(--stepes-magenta-dark);
          border-color: #f0cfde;
          background: var(--stepes-blush);
        }

        .cs-filter-button:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 2px;
        }

        .cs-results-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 28px;
        }

        .cs-results-count {
          margin: 0;
          color: var(--ink-600);
          font-size: 14px;
          line-height: 1.5;
        }

        .cs-results-count strong {
          color: var(--ink-900);
          font-weight: 600;
        }

        .cs-clear-button {
          min-height: 44px;
          padding: 8px 0;
          color: var(--stepes-magenta-dark);
          border: 0;
          background: transparent;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .cs-clear-button:hover {
          color: var(--stepes-magenta-deep);
        }

        .cs-collection-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
          margin-top: 22px;
        }

        .cs-collection-card {
          display: flex;
          min-width: 0;
          min-height: 310px;
          flex-direction: column;
          padding: 30px;
          border: 1px solid var(--line);
          border-radius: 24px;
          background: #ffffff;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .cs-collection-card:hover {
          border-color: #edc9d9;
          transform: translateY(-3px);
          box-shadow: 0 18px 42px rgba(25, 31, 45, 0.08);
        }

        .cs-collection-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .cs-collection-icon {
          display: flex;
          width: 48px;
          height: 48px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          background: var(--stepes-blush);
          border-radius: 15px;
        }

        .cs-collection-group {
          color: var(--ink-500);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .cs-collection-tag {
          margin: 24px 0 0;
          color: var(--stepes-magenta-dark);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .cs-collection-card h3 {
          margin: 10px 0 0;
          color: var(--ink-900);
          font-size: 23px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.015em;
        }

        .cs-collection-card p {
          margin: 14px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.68;
        }

        .cs-collection-card .cs-text-link {
          margin-top: auto;
          padding-top: 22px;
        }

        .cs-empty-state {
          grid-column: 1 / -1;
          padding: 52px 28px;
          text-align: center;
          border: 1px dashed var(--line-strong);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.72);
        }

        .cs-empty-state h3 {
          margin: 0;
          font-size: 22px;
          font-weight: 600;
        }

        .cs-empty-state p {
          max-width: 560px;
          margin: 12px auto 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.65;
        }

        .cs-industry-section {
          padding: 96px 0;
          background: #ffffff;
        }

        .cs-industry-header,
        .cs-solution-header {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 88px;
          align-items: end;
        }

        .cs-section-intro {
          max-width: 720px;
          margin: 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-industry-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 48px;
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .cs-industry-item {
          display: flex;
          min-width: 0;
          min-height: 280px;
          flex-direction: column;
          padding: 30px 28px 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: #ffffff;
        }

        .cs-industry-icon {
          display: flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          background: var(--stepes-blush);
          border-radius: 14px;
        }

        .cs-industry-item h3 {
          margin: 22px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-industry-item p {
          margin: 10px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.65;
        }

        .cs-industry-item .cs-text-link {
          margin-top: auto;
          padding-top: 20px;
          font-size: 15px;
        }

        .cs-solution-section {
          padding: 96px 0;
          background: var(--surface-soft);
        }

        .cs-solution-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 48px;
          border-top: 1px solid var(--line-strong);
        }

        .cs-solution-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 28px;
          align-items: center;
          min-width: 0;
          padding: 28px 0;
          border-bottom: 1px solid var(--line-strong);
        }

        .cs-solution-item h3 {
          margin: 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-solution-item p {
          max-width: 520px;
          margin: 9px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.65;
        }

        .cs-solution-item .cs-text-link {
          flex: 0 0 auto;
          font-size: 15px;
          white-space: nowrap;
        }

        .cs-outcomes-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 96px 0;
          color: #ffffff;
          background:
            radial-gradient(circle at 84% 18%, rgba(193, 29, 99, 0.22) 0, rgba(193, 29, 99, 0) 29%),
            #171923;
        }

        .cs-outcomes-section::after {
          position: absolute;
          z-index: -1;
          right: -210px;
          bottom: -250px;
          width: 520px;
          height: 520px;
          content: "";
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .cs-outcomes-header {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 88px;
          align-items: end;
        }

        .cs-outcomes-section .cs-eyebrow {
          color: #f3a9c9;
        }

        .cs-outcomes-section h2 {
          color: #ffffff;
        }

        .cs-outcomes-intro {
          max-width: 720px;
          margin: 0;
          color: #c8ccda;
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .cs-outcome-item {
          min-width: 0;
          min-height: 235px;
          padding: 34px 30px;
          border-right: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .cs-outcome-rule {
          display: block;
          width: 34px;
          height: 3px;
          margin-bottom: 24px;
          background: var(--stepes-magenta);
          border-radius: 999px;
        }

        .cs-outcome-item h3 {
          margin: 0;
          color: #ffffff;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-outcome-item p {
          margin: 12px 0 0;
          color: #c8ccda;
          font-size: 15px;
          line-height: 1.68;
        }


        .cs-anatomy-section {
          padding: 96px 0;
          background: #ffffff;
        }

        .cs-anatomy-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 88px;
          align-items: start;
        }

        .cs-anatomy-intro {
          max-width: 520px;
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-anatomy-list {
          border-top: 1px solid var(--line-strong);
        }

        .cs-anatomy-row {
          display: grid;
          grid-template-columns: minmax(180px, 0.58fr) minmax(0, 1.42fr);
          gap: 34px;
          align-items: start;
          padding: 25px 0;
          border-bottom: 1px solid var(--line-strong);
        }

        .cs-anatomy-row h3 {
          margin: 0;
          color: var(--ink-900);
          font-size: 20px;
          font-weight: 600;
          line-height: 1.4;
        }

        .cs-anatomy-row p {
          margin: 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.7;
        }

        .cs-workflow-section {
          padding: 96px 0;
          background: var(--surface-soft);
        }

        .cs-workflow-header {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          gap: 88px;
          align-items: end;
        }

        .cs-workflow-intro {
          max-width: 730px;
          margin: 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-workflow-panel {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 50px;
          overflow: hidden;
          border: 1px solid var(--line-strong);
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 16px 44px rgba(25, 31, 45, 0.05);
        }

        .cs-workflow-step {
          position: relative;
          min-width: 0;
          min-height: 245px;
          padding: 30px 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .cs-workflow-step:nth-child(4n) {
          border-right: 0;
        }

        .cs-workflow-step:nth-last-child(-n + 4) {
          border-bottom: 0;
        }

        .cs-workflow-number {
          display: inline-flex;
          min-width: 42px;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          color: var(--stepes-magenta-dark);
          border: 1px solid #efcddd;
          border-radius: 999px;
          background: var(--stepes-blush);
          font-size: 13px;
          font-weight: 600;
          line-height: 1;
        }

        .cs-workflow-step h3 {
          margin: 22px 0 0;
          color: var(--ink-900);
          font-size: 20px;
          font-weight: 600;
          line-height: 1.38;
        }

        .cs-workflow-step p {
          margin: 11px 0 0;
          color: var(--ink-600);
          font-size: 14px;
          line-height: 1.68;
        }

        .cs-ai-section {
          padding: 96px 0;
          background: #ffffff;
        }

        .cs-ai-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          overflow: hidden;
          border: 1px solid #f0d6e2;
          border-radius: 30px;
          background: var(--stepes-blush);
        }

        .cs-ai-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 58px 64px 64px;
        }

        .cs-ai-icon {
          display: flex;
          width: 54px;
          height: 54px;
          align-items: center;
          justify-content: center;
          margin-bottom: 26px;
          color: var(--stepes-magenta-dark);
          border: 1px solid #efcddd;
          border-radius: 18px;
          background: #ffffff;
        }

        .cs-ai-copy h2 {
          max-width: 560px;
        }

        .cs-ai-copy p {
          max-width: 590px;
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-ai-copy .cs-text-link {
          margin-top: 30px;
          align-self: flex-start;
        }

        .cs-ai-matrix {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin: 34px;
          border: 1px solid rgba(122, 21, 66, 0.14);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.94);
          box-shadow: 0 18px 44px rgba(95, 34, 64, 0.08);
        }

        .cs-ai-column {
          min-width: 0;
          padding: 34px 30px;
        }

        .cs-ai-column + .cs-ai-column {
          border-left: 1px solid var(--line);
        }

        .cs-ai-column-label {
          margin: 0;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .cs-ai-column h3 {
          margin: 11px 0 0;
          color: var(--ink-900);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.36;
        }

        .cs-ai-list {
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--line);
        }

        .cs-ai-list li {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          padding: 14px 0;
          color: var(--ink-700);
          border-bottom: 1px solid var(--line);
          font-size: 14px;
          line-height: 1.55;
        }

        .cs-ai-list li::before {
          width: 7px;
          height: 7px;
          margin-top: 7px;
          content: "";
          background: var(--stepes-magenta);
          border-radius: 50%;
        }

        .cs-controls-section {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          padding: 96px 0;
          color: #ffffff;
          background:
            radial-gradient(circle at 10% 96%, rgba(193, 29, 99, 0.18) 0, rgba(193, 29, 99, 0) 30%),
            #171923;
        }

        .cs-controls-section::after {
          position: absolute;
          z-index: -1;
          top: -210px;
          right: -170px;
          width: 430px;
          height: 430px;
          content: "";
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 50%;
        }

        .cs-controls-header {
          display: grid;
          grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr);
          gap: 88px;
          align-items: end;
        }


        .cs-controls-section h2 {
          color: #ffffff;
        }

        .cs-controls-intro {
          max-width: 720px;
          margin: 0;
          color: #c8ccda;
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-controls-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 50px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .cs-control-group {
          min-width: 0;
          padding: 36px 32px 34px;
          border-right: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .cs-control-icon {
          display: flex;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
          color: #f3a9c9;
          border: 1px solid rgba(243, 169, 201, 0.28);
          border-radius: 16px;
          background: rgba(193, 29, 99, 0.11);
        }

        .cs-control-group h3 {
          margin: 24px 0 0;
          color: #ffffff;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-control-group > p {
          margin: 12px 0 0;
          color: #c8ccda;
          font-size: 15px;
          line-height: 1.68;
        }

        .cs-control-list {
          margin: 24px 0 0;
          padding: 0;
          list-style: none;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
        }

        .cs-control-list li {
          display: grid;
          grid-template-columns: 16px minmax(0, 1fr);
          gap: 10px;
          align-items: start;
          padding: 13px 0;
          color: #e1e4ec;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          font-size: 14px;
          line-height: 1.55;
        }

        .cs-control-list li::before {
          width: 6px;
          height: 6px;
          margin-top: 7px;
          content: "";
          background: var(--stepes-magenta);
          border-radius: 50%;
        }

        .cs-controls-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 18px 28px;
          margin-top: 36px;
        }

        .cs-controls-section .cs-text-link {
          color: #f3a9c9 !important;
        }

        .cs-controls-section .cs-text-link:hover {
          color: #ffffff !important;
        }


        .cs-perspectives-section,
        .cs-featured-collections-section,
        .cs-related-expertise-section,
        .cs-faq-section {
          padding: 96px 0;
        }

        .cs-perspectives-section,
        .cs-related-expertise-section {
          background: #ffffff;
        }

        .cs-featured-collections-section,
        .cs-faq-section {
          background: var(--surface-soft);
        }

        .cs-perspectives-section h2,
        .cs-featured-collections-section h2,
        .cs-related-expertise-section h2,
        .cs-faq-section h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .cs-perspectives-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: #ffffff;
          box-shadow: var(--shadow-soft);
        }

        .cs-perspectives-copy {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 64px 58px;
        }

        .cs-perspectives-copy > p {
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-perspectives-copy .cs-text-link {
          align-self: flex-start;
          margin-top: 26px;
        }

        .cs-perspective-list {
          display: grid;
          align-content: center;
          padding: 28px 56px;
          background: var(--stepes-blush);
        }

        .cs-perspective-item {
          padding: 28px 0;
          border-bottom: 1px solid #edd7e1;
        }

        .cs-perspective-item:last-child {
          border-bottom: 0;
        }

        .cs-perspective-item h3 {
          margin: 0;
          color: var(--ink-900);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-perspective-item p {
          margin: 10px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.68;
        }

        .cs-featured-collections-header,
        .cs-related-expertise-header {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 88px;
          align-items: end;
        }

        .cs-featured-collections-intro,
        .cs-related-expertise-intro {
          max-width: 720px;
          margin: 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-featured-collections-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 48px;
          border-top: 1px solid var(--line-strong);
          border-left: 1px solid var(--line-strong);
        }

        .cs-featured-collection-item {
          display: flex;
          min-width: 0;
          min-height: 276px;
          flex-direction: column;
          padding: 38px 40px;
          border-right: 1px solid var(--line-strong);
          border-bottom: 1px solid var(--line-strong);
          background: #ffffff;
        }

        .cs-featured-collection-label {
          margin: 0;
          color: var(--stepes-magenta-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.11em;
          text-transform: uppercase;
        }

        .cs-featured-collection-item h3 {
          margin: 16px 0 0;
          color: var(--ink-900);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.34;
          letter-spacing: -0.015em;
        }

        .cs-featured-collection-item > p:not(.cs-featured-collection-label) {
          margin: 14px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.68;
        }

        .cs-featured-collection-item .cs-text-link {
          margin-top: auto;
          padding-top: 22px;
        }

        .cs-related-expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 48px;
          border-top: 1px solid var(--line-strong);
        }

        .cs-expertise-item {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 22px 30px;
          align-items: center;
          padding: 28px 0;
          border-bottom: 1px solid var(--line);
        }

        .cs-expertise-item h3 {
          margin: 0;
          color: var(--ink-900);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-expertise-item p {
          margin: 9px 0 0;
          color: var(--ink-600);
          font-size: 15px;
          line-height: 1.68;
        }

        .cs-expertise-item .cs-text-link {
          justify-self: end;
          font-size: 15px;
        }

        .cs-faq-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr);
          gap: 88px;
          align-items: start;
        }

        .cs-faq-header {
          position: sticky;
          top: 32px;
        }

        .cs-faq-header > p {
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-faq-list {
          border-top: 1px solid var(--line-strong);
        }

        .cs-faq-item {
          border-bottom: 1px solid var(--line-strong);
        }

        .cs-faq-item h3 {
          margin: 0;
        }

        .cs-faq-question {
          display: grid;
          width: 100%;
          grid-template-columns: minmax(0, 1fr) 30px;
          gap: 24px;
          align-items: center;
          min-height: 76px;
          padding: 20px 0;
          color: var(--ink-900);
          border: 0;
          background: transparent;
          font: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          text-align: left;
          cursor: pointer;
        }

        .cs-faq-question:hover {
          color: var(--stepes-magenta-dark);
        }

        .cs-faq-question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.18);
          outline-offset: 4px;
          border-radius: 8px;
        }

        .cs-faq-toggle-icon {
          position: relative;
          display: block;
          width: 28px;
          height: 28px;
          color: var(--stepes-magenta-dark);
          border: 1px solid #e4bfd0;
          border-radius: 50%;
        }

        .cs-faq-toggle-icon::before,
        .cs-faq-toggle-icon::after {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 1.5px;
          content: "";
          background: currentColor;
          border-radius: 999px;
          transform: translate(-50%, -50%);
          transition: transform 180ms ease;
        }

        .cs-faq-toggle-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .cs-faq-question[aria-expanded="true"] .cs-faq-toggle-icon::after {
          transform: translate(-50%, -50%) rotate(0deg);
        }

        .cs-faq-answer {
          max-width: 820px;
          padding: 0 54px 24px 0;
        }

        .cs-faq-answer p {
          margin: 0;
          color: var(--ink-600);
          font-size: 16px;
          line-height: 1.75;
        }

        .cs-final-cta-section {
          padding: 96px 0;
          background: #ffffff;
        }

        .cs-final-cta-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: 72px;
          align-items: center;
          padding: 68px 72px;
          border: 1px solid #ead7e0;
          border-radius: 30px;
          background: linear-gradient(135deg, #ffffff 0%, var(--stepes-blush) 100%);
          box-shadow: 0 22px 60px rgba(78, 29, 53, 0.08);
        }

        .cs-final-cta-copy h2 {
          max-width: 720px;
          margin: 0;
          color: var(--ink-900);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .cs-final-cta-copy p {
          max-width: 760px;
          margin: 22px 0 0;
          color: var(--ink-600);
          font-size: 17px;
          line-height: 1.75;
        }

        .cs-final-cta-actions {
          display: flex;
          width: min(100%, 390px);
          flex-direction: column;
          gap: 14px;
          justify-self: end;
        }

        .cs-final-cta-actions .cs-button {
          width: 100%;
          min-height: 54px;
          padding-inline: 22px;
          line-height: 1.25;
          text-align: center;
        }


        @media (max-width: 1180px) {
          .cs-shell {
            padding-inline: 40px;
          }

          .cs-overview-grid {
            gap: 64px;
          }

          .cs-library-header,
          .cs-industry-header,
          .cs-solution-header,
          .cs-outcomes-header,
          .cs-workflow-header,
          .cs-controls-header,
          .cs-featured-collections-header,
          .cs-related-expertise-header {
            gap: 64px;
          }

          .cs-faq-grid {
            gap: 64px;
          }

          .cs-anatomy-grid {
            gap: 64px;
          }

          .cs-ai-copy {
            padding: 58px 44px 58px 48px;
          }

          .cs-ai-matrix {
            margin: 30px;
          }

          .cs-collection-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-industry-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .cs-solution-grid {
            column-gap: 42px;
          }

          .cs-feature-copy {
            padding: 58px 44px 58px 48px;
          }

          .cs-feature-visual-wrap {
            padding-right: 30px;
          }
        }

        @media (max-width: 900px) {
          .cs-shell {
            padding-inline: 24px;
          }

          .cs-hero {
            padding: 92px 0 78px;
          }

          .cs-hero h1 {
            max-width: 820px;
            font-size: 42px;
          }

          .cs-evidence-item {
            padding-inline: 22px;
          }

          .cs-section {
            padding: 80px 0;
          }

          .cs-overview-grid {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .cs-section-heading {
            position: static;
            max-width: 740px;
          }

          .cs-section h2,
          .cs-library-section h2,
          .cs-industry-section h2,
          .cs-solution-section h2,
          .cs-outcomes-section h2,
          .cs-anatomy-section h2,
          .cs-workflow-section h2,
          .cs-ai-section h2,
          .cs-controls-section h2,
          .cs-perspectives-section h2,
          .cs-featured-collections-section h2,
          .cs-related-expertise-section h2,
          .cs-faq-section h2 {
            font-size: 32px;
          }

          .cs-feature-panel {
            grid-template-columns: 1fr;
          }

          .cs-library-section,
          .cs-industry-section,
          .cs-solution-section,
          .cs-outcomes-section,
          .cs-anatomy-section,
          .cs-workflow-section,
          .cs-ai-section,
          .cs-controls-section,
          .cs-perspectives-section,
          .cs-featured-collections-section,
          .cs-related-expertise-section,
          .cs-faq-section {
            padding: 80px 0;
          }

          .cs-final-cta-section {
            padding: 80px 0;
          }

          .cs-final-cta-panel {
            grid-template-columns: 1fr;
            gap: 34px;
            padding: 56px 52px;
          }

          .cs-final-cta-copy h2 {
            font-size: 32px;
          }

          .cs-final-cta-actions {
            justify-self: start;
          }

          .cs-library-header,
          .cs-industry-header,
          .cs-solution-header,
          .cs-outcomes-header,
          .cs-workflow-header,
          .cs-controls-header,
          .cs-featured-collections-header,
          .cs-related-expertise-header {
            grid-template-columns: 1fr;
            gap: 24px;
            align-items: start;
          }

          .cs-perspectives-panel,
          .cs-faq-grid {
            grid-template-columns: 1fr;
          }

          .cs-perspectives-copy {
            padding: 52px 48px 34px;
          }

          .cs-perspective-list {
            padding: 18px 48px 34px;
          }

          .cs-faq-grid {
            gap: 38px;
          }

          .cs-faq-header {
            position: static;
            max-width: 720px;
          }

          .cs-anatomy-grid,
          .cs-ai-panel {
            grid-template-columns: 1fr;
          }

          .cs-anatomy-grid {
            gap: 42px;
          }

          .cs-workflow-panel {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-workflow-step:nth-child(4n) {
            border-right: 1px solid var(--line);
          }

          .cs-workflow-step:nth-child(2n) {
            border-right: 0;
          }

          .cs-workflow-step:nth-last-child(-n + 4) {
            border-bottom: 1px solid var(--line);
          }

          .cs-workflow-step:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .cs-ai-copy {
            padding: 56px 48px 26px;
          }

          .cs-ai-matrix {
            margin: 18px 48px 48px;
          }

          .cs-controls-grid {
            grid-template-columns: 1fr;
            border-left: 0;
          }

          .cs-control-group {
            display: grid;
            grid-template-columns: 56px minmax(0, 0.78fr) minmax(0, 1.22fr);
            gap: 20px 24px;
            align-items: start;
            padding-inline: 0;
            border-right: 0;
          }

          .cs-control-group h3 {
            margin-top: 0;
          }

          .cs-control-group > p {
            grid-column: 2;
          }

          .cs-control-list {
            grid-column: 3;
            grid-row: 1 / span 2;
            margin-top: 0;
          }

          .cs-library-controls {
            grid-template-columns: 1fr;
          }

          .cs-filter-group {
            justify-content: flex-start;
          }

          .cs-industry-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-solution-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
          }

          .cs-outcomes-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-feature-copy {
            padding: 56px 48px 28px;
          }

          .cs-feature-visual-wrap {
            padding: 20px 48px 48px;
          }
        }

        @media (max-width: 700px) {
          .cs-hero {
            padding: 76px 0 64px;
          }


          .cs-hero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .cs-hero-copy {
            margin-top: 20px;
          }

          .cs-hero-actions {
            width: 100%;
            margin-top: 30px;
          }

          .cs-button {
            width: 100%;
          }

          .cs-hero-evidence {
            margin-top: 50px;
          }

          .cs-evidence-grid {
            grid-template-columns: 1fr;
          }

          .cs-evidence-item {
            padding: 24px 0 26px;
          }

          .cs-evidence-item + .cs-evidence-item::before {
            top: 0;
            right: 0;
            bottom: auto;
            left: 0;
            width: auto;
            height: 1px;
          }

          .cs-section,
          .cs-feature-section,
          .cs-library-section,
          .cs-industry-section,
          .cs-solution-section,
          .cs-outcomes-section,
          .cs-anatomy-section,
          .cs-workflow-section,
          .cs-ai-section,
          .cs-controls-section,
          .cs-perspectives-section,
          .cs-featured-collections-section,
          .cs-related-expertise-section,
          .cs-faq-section {
            padding: 68px 0;
          }

          .cs-final-cta-section {
            padding: 68px 0;
          }

          .cs-final-cta-panel {
            gap: 30px;
            padding: 46px 30px;
            border-radius: 24px;
          }

          .cs-final-cta-copy h2 {
            font-size: 30px;
            line-height: 1.18;
          }

          .cs-final-cta-actions {
            width: 100%;
          }

          .cs-library-controls {
            margin-top: 32px;
            padding: 14px;
            border-radius: 20px;
          }

          .cs-filter-group {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;
            gap: 8px;
            padding: 2px;
          }

          .cs-filter-button {
            width: auto;
            flex: 0 0 auto;
            white-space: nowrap;
          }

          .cs-results-bar {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .cs-collection-grid,
          .cs-industry-grid,
          .cs-outcomes-grid {
            grid-template-columns: 1fr;
          }

          .cs-collection-card {
            min-height: 0;
          }

          .cs-industry-grid,
          .cs-outcomes-grid {
            border-left: 0;
          }

          .cs-industry-item {
            min-height: 0;
            padding-inline: 0;
            border-right: 0;
          }

          .cs-outcome-item {
            min-height: 0;
            padding-inline: 0;
            border-right: 0;
          }

          .cs-solution-item {
            grid-template-columns: 1fr;
            gap: 10px;
            align-items: start;
          }

          .cs-solution-item .cs-text-link {
            justify-self: start;
          }

          .cs-section h2,
          .cs-library-section h2,
          .cs-industry-section h2,
          .cs-solution-section h2,
          .cs-outcomes-section h2,
          .cs-anatomy-section h2,
          .cs-workflow-section h2,
          .cs-ai-section h2,
          .cs-controls-section h2,
          .cs-perspectives-section h2,
          .cs-featured-collections-section h2,
          .cs-related-expertise-section h2,
          .cs-faq-section h2 {
            font-size: 30px;
            line-height: 1.18;
          }

          .cs-overview-lead,
          .cs-feature-intro {
            font-size: 17px;
          }

          .cs-feature-copy {
            padding: 44px 28px 22px;
          }

          .cs-feature-visual-wrap {
            padding: 18px 20px 28px;
          }

          .cs-feature-visual {
            padding: 24px;
          }

          .cs-visual-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .cs-feature-link {
            align-self: stretch;
          }

          .cs-feature-link.cs-button {
            width: 100%;
          }

          .cs-anatomy-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 22px 0;
          }

          .cs-workflow-panel {
            grid-template-columns: 1fr;
            margin-top: 38px;
            border-radius: 24px;
          }

          .cs-workflow-step,
          .cs-workflow-step:nth-child(4n),
          .cs-workflow-step:nth-child(2n),
          .cs-workflow-step:nth-last-child(-n + 4),
          .cs-workflow-step:nth-last-child(-n + 2) {
            min-height: 0;
            border-right: 0;
            border-bottom: 1px solid var(--line);
          }

          .cs-workflow-step:last-child {
            border-bottom: 0;
          }

          .cs-ai-copy {
            padding: 44px 28px 20px;
          }

          .cs-ai-matrix {
            grid-template-columns: 1fr;
            margin: 16px 20px 28px;
          }

          .cs-ai-column + .cs-ai-column {
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .cs-control-group {
            display: block;
            padding: 30px 0;
          }

          .cs-control-group h3 {
            margin-top: 20px;
          }

          .cs-control-list {
            margin-top: 22px;
          }

          .cs-controls-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .cs-perspectives-panel {
            border-radius: 24px;
          }

          .cs-perspectives-copy {
            padding: 42px 28px 26px;
          }

          .cs-perspective-list {
            padding: 8px 28px 26px;
          }

          .cs-featured-collections-grid,
          .cs-related-expertise-grid {
            grid-template-columns: 1fr;
          }

          .cs-featured-collections-grid {
            border-left: 0;
          }

          .cs-featured-collection-item {
            min-height: 0;
            padding: 30px 0;
            border-right: 0;
          }

          .cs-expertise-item {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .cs-expertise-item .cs-text-link {
            justify-self: start;
          }

          .cs-faq-question {
            grid-template-columns: minmax(0, 1fr) 28px;
            gap: 18px;
            font-size: 17px;
          }

          .cs-faq-answer {
            padding-right: 0;
          }
        }

        @media (max-width: 480px) {
          .cs-shell {
            padding-inline: 20px;
          }

          .cs-hero h1 {
            font-size: 38px;
            letter-spacing: -0.03em;
          }

          .cs-signal-row {
            grid-template-columns: 44px minmax(0, 1fr);
            gap: 14px;
          }

          .cs-signal-content h3 {
            font-size: 20px;
          }

          .cs-feature-panel {
            border-radius: 24px;
          }

          .cs-feature-copy {
            padding-inline: 22px;
          }

          .cs-feature-visual-wrap {
            padding-inline: 14px;
          }

          .cs-feature-visual {
            padding: 21px;
            border-radius: 20px;
          }

          .cs-library-controls {
            padding: 12px;
          }

          .cs-final-cta-panel {
            padding: 40px 22px;
          }

          .cs-collection-card {
            padding: 26px 22px;
          }

          .cs-industry-item h3,
          .cs-solution-item h3 {
            font-size: 20px;
          }

          .cs-outcome-item h3 {
            font-size: 21px;
          }

          .cs-ai-panel,
          .cs-workflow-panel {
            border-radius: 24px;
          }

          .cs-ai-copy {
            padding-inline: 22px;
          }

          .cs-ai-matrix {
            margin-inline: 14px;
          }

          .cs-ai-column {
            padding: 28px 22px;
          }

          .cs-workflow-step {
            padding: 26px 22px;
          }

          .cs-perspectives-copy,
          .cs-perspective-list {
            padding-inline: 22px;
          }

          .cs-faq-question {
            min-height: 70px;
          }

          .cs-visual-title {
            font-size: 22px;
          }
        }

        @media (max-width: 340px) {
          .cs-hero h1 {
            font-size: 36px;
          }

          .cs-hero-copy,
          .cs-overview-lead,
          .cs-feature-intro {
            font-size: 17px;
          }

          .cs-signal-row {
            grid-template-columns: 1fr;
          }

          .cs-signal-icon {
            margin-bottom: 2px;
          }

          .cs-feature-meta {
            flex-direction: column;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }

          .cs-button,
          .cs-button svg,
          .cs-text-link,
          .cs-text-link svg,
          .cs-faq-toggle-icon::before,
          .cs-faq-toggle-icon::after {
            transition: none;
          }
        }
      `}</style>

      <section className="cs-hero" aria-labelledby="case-studies-hero-title">
        <div className="cs-shell cs-hero-inner">
          <h1 id="case-studies-hero-title">Translation and Localization Case Studies</h1>
          <p className="cs-hero-copy">
            See how global organizations use Stepes to improve multilingual quality, accelerate market launches,
            streamline translation workflows, and manage content securely across languages, teams, and systems.
          </p>

          <div className="cs-hero-actions" aria-label="Case studies page actions">
            <a
              className="cs-button cs-button-primary"
              href="https://www.stepes.com/resources/case-studies/#case-studies-library"
            >
              Explore Case Studies
              <ArrowIcon />
            </a>
            <a className="cs-button cs-button-secondary" href="https://www.stepes.com/contact-us/">
              Talk to an Expert
              <ArrowIcon />
            </a>
          </div>

          <div className="cs-hero-evidence" aria-label="What Stepes case studies include">
            <div className="cs-evidence-grid">
              {evidenceItems.map((item) => (
                <article className="cs-evidence-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section cs-section-overview" aria-labelledby="real-world-results-title">
        <div className="cs-shell cs-overview-grid">
          <header className="cs-section-heading">
            <h2 id="real-world-results-title">Real-World Translation Programs. Meaningful Business Results.</h2>
          </header>

          <div>
            <p className="cs-overview-lead">
              Enterprise translation is rarely a single document or one-time project. It is an ongoing operational
              challenge involving content owners, localization teams, linguists, reviewers, technology platforms,
              quality standards, and regional stakeholders.
            </p>
            <p className="cs-overview-copy">
              Stepes helps organizations turn these moving parts into connected multilingual workflows. Our
              translation and localization case studies show how businesses address practical challenges across
              software, websites, technical documentation, regulated content, marketing, training, customer support,
              and other global communications.
            </p>
            <p className="cs-overview-copy">
              Each story provides a closer look at the business need, project scope, language requirements,
              translation workflow, quality controls, and operational approach behind the engagement. Whether an
              organization needs to launch in new markets, improve translation quality, validate AI-generated
              content, automate recurring localization, or establish greater control over global content, these case
              studies show how technology, professional linguists, and program governance work together.
            </p>

            <div className="cs-program-signals" aria-label="What each case study explores">
              {programSignals.map((item) => (
                <article className="cs-signal-row" key={item.title}>
                  <div className="cs-signal-icon">{item.icon}</div>
                  <div className="cs-signal-content">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-feature-section" id="featured-case-study" aria-labelledby="featured-case-study-title">
        <div className="cs-shell">
          <div className="cs-feature-panel">
            <div className="cs-feature-copy">
              <span className="cs-eyebrow">Featured Collection</span>
              <h2 id="featured-case-study-title">See Enterprise Software Localization in Practice</h2>
              <p className="cs-feature-intro">
                Explore how Stepes supports multilingual software and digital product experiences with continuous
                localization workflows, in-context review, professional linguists, and release-ready quality
                assurance.
              </p>

              <div className="cs-feature-meta" aria-label="Featured collection topics">
                <span>Software and SaaS</span>
                <span>Continuous Localization</span>
                <span>Quality Assurance</span>
              </div>

              <a
                className="cs-button cs-button-primary cs-feature-link"
                href="https://www.stepes.com/resources/case-studies/software-localization/"
              >
                Explore Software Localization Case Studies
                <ArrowIcon />
              </a>
            </div>

            <div className="cs-feature-visual-wrap">
              <article className="cs-feature-visual" aria-label="Featured software localization case study overview">
                <div className="cs-visual-header">
                  <p className="cs-visual-label">Software Localization</p>
                  <span className="cs-visual-status">Featured Collection</span>
                </div>

                <h3 className="cs-visual-title">Connected Workflows for Global Software Experiences</h3>
                <p className="cs-visual-summary">
                  A closer look at the people, language assets, review steps, and quality controls that help product
                  teams localize recurring software releases across markets.
                </p>

                <ul className="cs-highlight-list">
                  {featuredHighlights.map((item) => (
                    <li key={item}>
                      <CheckIcon />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  className="cs-text-link"
                  href="https://www.stepes.com/software-localization-services/"
                >
                  Explore Software Localization Services
                  <ArrowIcon />
                </a>
              </article>
            </div>
          </div>
        </div>

      </section>

      <section className="cs-library-section" id="case-studies-library" aria-labelledby="case-study-library-title">
        <div className="cs-shell">
          <div className="cs-library-header">
            <header>
              <h2 id="case-study-library-title">Browse Translation and Localization Case Studies</h2>
            </header>
            <p className="cs-library-intro">
              Find experience relevant to your industry, translation requirements, and business objectives. Explore
              how multilingual programs are structured across different content types, technology environments,
              quality expectations, and operating models.
            </p>
          </div>

          <div className="cs-library-controls" aria-label="Case study filters">
            <label className="cs-search-field">
              <span className="cs-sr-only">Search case study collections</span>
              <SearchIcon />
              <input
                className="cs-search-input"
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search case studies"
              />
            </label>

            <div className="cs-filter-group" aria-label="Filter by case study type">
              {filterOptions.map((option) => (
                <button
                  className="cs-filter-button"
                  type="button"
                  aria-pressed={activeFilter === option.value}
                  onClick={() => setActiveFilter(option.value)}
                  key={option.value}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          <div className="cs-results-bar">
            <p className="cs-results-count" aria-live="polite">
              Showing <strong>{visibleCollections.length}</strong> case study {visibleCollections.length === 1 ? "collection" : "collections"}
            </p>
            {(activeFilter !== "All" || searchTerm) && (
              <button
                className="cs-clear-button"
                type="button"
                onClick={() => {
                  setActiveFilter("All");
                  setSearchTerm("");
                }}
              >
                Clear filters
              </button>
            )}
          </div>

          <div className="cs-collection-grid">
            {visibleCollections.length > 0 ? (
              visibleCollections.map((item) => (
                <article className="cs-collection-card" key={`${item.group}-${item.title}`}>
                  <div className="cs-collection-topline">
                    <div className="cs-collection-icon">
                      <TopicIcon type={item.icon} />
                    </div>
                    <span className="cs-collection-group">{item.group}</span>
                  </div>
                  <p className="cs-collection-tag">{item.tag}</p>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <a className="cs-text-link" href={item.href}>
                    View {item.tag} Case Studies
                    <ArrowIcon />
                  </a>
                </article>
              ))
            ) : (
              <div className="cs-empty-state">
                <h3>No Matching Collections</h3>
                <p>Try a broader search term or clear the current filter to continue exploring the case study library.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="cs-industry-section" id="case-studies-by-industry" aria-labelledby="industry-case-studies-title">
        <div className="cs-shell">
          <div className="cs-industry-header">
            <header>
              <h2 id="industry-case-studies-title">Translation Experience Across Global Industries</h2>
            </header>
            <p className="cs-section-intro">
              Every industry has its own terminology, content workflows, risk profile, and audience expectations. See
              how Stepes adapts translation programs to different operational, technical, and quality requirements.
            </p>
          </div>

          <div className="cs-industry-grid">
            {industryItems.map((item) => (
              <article className="cs-industry-item" key={item.title}>
                <div className="cs-industry-icon">
                  <TopicIcon type={item.icon} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="cs-text-link" href={item.href}>
                  Explore {item.title} Case Studies
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-solution-section" id="case-studies-by-solution" aria-labelledby="solution-case-studies-title">
        <div className="cs-shell">
          <div className="cs-solution-header">
            <header>
              <h2 id="solution-case-studies-title">See How Stepes Solves Specific Translation Challenges</h2>
            </header>
            <p className="cs-section-intro">
              From AI-generated translation review to continuous localization, explore how workflows can be designed
              around the content, audience, level of risk, technology environment, and business objective.
            </p>
          </div>

          <div className="cs-solution-grid">
            {solutionItems.map((item) => (
              <article className="cs-solution-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <a className="cs-text-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-outcomes-section" id="business-outcomes" aria-labelledby="business-outcomes-title">
        <div className="cs-shell">
          <div className="cs-outcomes-header">
            <header>
              <h2 id="business-outcomes-title">Business Outcomes That Matter</h2>
            </header>
            <p className="cs-outcomes-intro">
              Successful localization is measured by more than translated words. The strongest multilingual programs
              improve how content moves through the business and reaches customers, employees, partners, and global
              markets.
            </p>
          </div>

          <div className="cs-outcomes-grid">
            {outcomeItems.map((item) => (
              <article className="cs-outcome-item" key={item.title}>
                <span className="cs-outcome-rule" aria-hidden="true" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-anatomy-section" id="case-study-structure" aria-labelledby="case-study-structure-title">
        <div className="cs-shell cs-anatomy-grid">
          <header>
            <h2 id="case-study-structure-title">What You Will Find in Every Case Study</h2>
            <p className="cs-anatomy-intro">
              Stepes case studies are designed to help localization, product, marketing, legal, procurement, quality,
              and business leaders understand how a multilingual program works in practice—not just what a provider
              says it can do.
            </p>
          </header>

          <div className="cs-anatomy-list">
            {caseStudyAnatomyItems.map((item) => (
              <article className="cs-anatomy-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-workflow-section" id="connected-global-content-operations" aria-labelledby="connected-workflow-title">
        <div className="cs-shell">
          <div className="cs-workflow-header">
            <header>
              <h2 id="connected-workflow-title">From Translation Requests to Connected Global Content Operations</h2>
            </header>
            <p className="cs-workflow-intro">
              Stepes does not force every organization into the same translation model. Workflows are designed around
              the content, how often it changes, who reviews it, where it is stored, and how the translated content
              will be used.
            </p>
          </div>

          <div className="cs-workflow-panel" aria-label="Typical enterprise translation workflow">
            {enterpriseWorkflowSteps.map((step, index) => (
              <article className="cs-workflow-step" key={step.title}>
                <span className="cs-workflow-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-ai-section" id="ai-human-translation" aria-labelledby="ai-human-translation-title">
        <div className="cs-shell">
          <div className="cs-ai-panel">
            <div className="cs-ai-copy">
              <div className="cs-ai-icon">
                <SparklesIcon />
              </div>
              <h2 id="ai-human-translation-title">AI-Powered Translation With Professional Human Oversight</h2>
              <p>
                AI translation can help organizations process multilingual content more quickly, but different
                content carries different levels of complexity and risk. Stepes combines translation technology with
                professional human expertise to align speed, quality, cost, and oversight with the intended use of
                the content.
              </p>
              <a className="cs-text-link" href="https://www.stepes.com/ai-human-translation-workflow/">
                Explore AI + Human Translation Workflows
                <ArrowIcon />
              </a>
            </div>

            <div className="cs-ai-matrix" aria-label="AI translation and professional review capabilities">
              <article className="cs-ai-column">
                <p className="cs-ai-column-label">Technology Layer</p>
                <h3>Accelerate and Reuse</h3>
                <ul className="cs-ai-list">
                  {aiTechnologyItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="cs-ai-column">
                <p className="cs-ai-column-label">Professional Oversight</p>
                <h3>Validate and Assure Quality</h3>
                <ul className="cs-ai-list">
                  {humanOversightItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-controls-section" id="quality-security-governance" aria-labelledby="enterprise-controls-title">
        <div className="cs-shell">
          <div className="cs-controls-header">
            <header>
              <h2 id="enterprise-controls-title">Quality, Security, and Governance Built Into the Workflow</h2>
            </header>
            <p className="cs-controls-intro">
              Global organizations need confidence that multilingual content is handled consistently, securely, and
              according to clearly defined processes. Stepes adapts workflow controls to the sensitivity, complexity,
              and intended use of each content program.
            </p>
          </div>

          <div className="cs-controls-grid">
            {enterpriseControlGroups.map((group) => (
              <article className="cs-control-group" key={group.title}>
                <div className="cs-control-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="cs-control-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="cs-controls-actions">
            <a className="cs-text-link" href="https://www.stepes.com/translation-quality-assurance/">
              Explore Translation Quality Assurance
              <ArrowIcon />
            </a>
            <a className="cs-text-link" href="https://www.stepes.com/security-and-compliance/">
              Learn About Security and Compliance
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="cs-perspectives-section" id="customer-perspectives" aria-labelledby="customer-perspectives-title">
        <div className="cs-shell">
          <div className="cs-perspectives-panel">
            <div className="cs-perspectives-copy">
              <span className="cs-eyebrow">Customer Perspectives</span>
              <h2 id="customer-perspectives-title">The Decisions and Collaboration Behind the Work</h2>
              <p>
                Selected Stepes case studies include perspectives from the teams involved, offering a clearer view of
                why the program was structured as it was, how collaboration worked, and what changed as the
                engagement developed.
              </p>
              <a
                className="cs-text-link"
                href="https://www.stepes.com/resources/case-studies/#case-studies-library"
              >
                Browse the Case Study Library
                <ArrowIcon />
              </a>
            </div>

            <div className="cs-perspective-list">
              {customerPerspectiveItems.map((item) => (
                <article className="cs-perspective-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="cs-featured-collections-section"
        id="featured-case-study-collections"
        aria-labelledby="featured-case-study-collections-title"
      >
        <div className="cs-shell">
          <div className="cs-featured-collections-header">
            <header>
              <span className="cs-eyebrow">Explore by Team</span>
              <h2 id="featured-case-study-collections-title">Featured Case Study Collections</h2>
            </header>
            <p className="cs-featured-collections-intro">
              Find case studies aligned with the teams, content, workflows, and business priorities most relevant to
              your organization.
            </p>
          </div>

          <div className="cs-featured-collections-grid">
            {featuredCaseStudyCollections.map((item) => (
              <article className="cs-featured-collection-item" key={item.title}>
                <p className="cs-featured-collection-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <a className="cs-text-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-related-expertise-section" id="related-expertise" aria-labelledby="related-expertise-title">
        <div className="cs-shell">
          <div className="cs-related-expertise-header">
            <header>
              <span className="cs-eyebrow">Related Expertise</span>
              <h2 id="related-expertise-title">Go Deeper Into the Strategies Behind the Results</h2>
            </header>
            <p className="cs-related-expertise-intro">
              Case studies show how multilingual programs work in practice. Stepes guides and insights explain the
              strategies, workflows, technology, quality controls, and governance behind those outcomes.
            </p>
          </div>

          <div className="cs-related-expertise-grid">
            {relatedExpertiseItems.map((item) => (
              <article className="cs-expertise-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <a className="cs-text-link" href={item.href}>
                  {item.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-faq-section" id="frequently-asked-questions" aria-labelledby="case-study-faq-title">
        <div className="cs-shell cs-faq-grid">
          <header className="cs-faq-header">
            <h2 id="case-study-faq-title">Frequently Asked Questions</h2>
            <p>
              Learn more about the projects, industries, workflows, evidence standards, and enterprise translation
              capabilities represented in the Stepes case study collection.
            </p>
          </header>

          <div className="cs-faq-list">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              const answerId = `case-study-faq-answer-${index}`;

              return (
                <article className="cs-faq-item" key={item.question}>
                  <h3>
                    <button
                      className="cs-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <span className="cs-faq-toggle-icon" aria-hidden="true" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="cs-faq-answer" id={answerId}>
                      <p>{item.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cs-final-cta-section" aria-labelledby="case-studies-final-cta-title">
        <div className="cs-shell">
          <div className="cs-final-cta-panel">
            <div className="cs-final-cta-copy">
              <h2 id="case-studies-final-cta-title">Build a Multilingual Program Around Your Business</h2>
              <p>
                Bring together AI-powered translation, professional linguists, enterprise workflow technology,
                language assets, quality assurance, and program support in a solution aligned with your content,
                systems, teams, and global priorities. Let’s discuss how Stepes can help you improve multilingual
                quality, accelerate global content delivery, and scale translation with greater control.
              </p>
            </div>

            <div className="cs-final-cta-actions">
              <a className="cs-button cs-button-primary" href="https://www.stepes.com/contact-us/">
                Talk to an Expert
                <ArrowIcon />
              </a>
              <a
                className="cs-button cs-button-secondary"
                href="https://www.stepes.com/enterprise-translation-management/"
              >
                Explore Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
