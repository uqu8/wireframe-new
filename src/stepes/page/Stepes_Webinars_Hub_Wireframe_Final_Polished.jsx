import React, { useMemo, useState } from "react";

const ArrowIcon = ({ size = 18 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M5 12h14M14 7l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlayIcon = ({ size = 28 }) => (
  <svg
    aria-hidden="true"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M9 7.5v9l7-4.5-7-4.5Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinejoin="round"
    />
  </svg>
);

const CheckIcon = () => (
  <svg aria-hidden="true" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="m4.5 10.4 3.2 3.2 7.8-7.8"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="7.3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M10 6.1v4.3l2.9 1.7"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TranscriptIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none">
    <rect x="3.3" y="2.9" width="13.4" height="14.2" rx="2.2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M6.3 7h7.4M6.3 10h7.4M6.3 13h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ShareIcon = () => (
  <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none">
    <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="14.6" cy="15" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="m6.8 9 5.9-3M6.8 11l5.9 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);


const SearchIcon = () => (
  <svg aria-hidden="true" width="19" height="19" viewBox="0 0 20 20" fill="none">
    <circle cx="8.7" cy="8.7" r="5.6" stroke="currentColor" strokeWidth="1.6" />
    <path d="m12.9 12.9 3.5 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

const TopicIcon = ({ type }) => {
  const icons = {
    ai: (
      <>
        <path d="M12 3.2 13.7 8l4.8 1.7-4.8 1.7L12 16.2l-1.7-4.8-4.8-1.7L10.3 8 12 3.2Z" />
        <path d="M19 14.4l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z" />
      </>
    ),
    quality: (
      <>
        <path d="M12 3.2 19 6v5.2c0 4.5-2.8 7.4-7 9.6-4.2-2.2-7-5.1-7-9.6V6l7-2.8Z" />
        <path d="m8.3 12.1 2.3 2.3 5-5" />
      </>
    ),
    strategy: (
      <>
        <circle cx="12" cy="12" r="8.2" />
        <circle cx="12" cy="12" r="3.3" />
        <path d="M14.4 9.6 19.8 4.2M16.7 4.2h3.1v3.1" />
      </>
    ),
    operations: (
      <>
        <rect x="3.5" y="4.2" width="6.2" height="6.2" rx="1.3" />
        <rect x="14.3" y="4.2" width="6.2" height="6.2" rx="1.3" />
        <rect x="8.9" y="14.2" width="6.2" height="6.2" rx="1.3" />
        <path d="M9.7 7.3h4.6M6.6 10.4v2.2c0 1 .8 1.8 1.8 1.8h.5M17.4 10.4v2.2c0 1-.8 1.8-1.8 1.8h-.5" />
      </>
    ),
    technology: (
      <>
        <path d="M8.2 8.2 4.4 12l3.8 3.8M15.8 8.2l3.8 3.8-3.8 3.8M13.8 5.2l-3.6 13.6" />
      </>
    ),
    regulated: (
      <>
        <path d="M7.4 3.5h9.2v3H20v14H4v-14h3.4v-3Z" />
        <path d="M9.2 3.5h5.6M12 9v7M8.5 12.5h7" />
      </>
    ),
    marketing: (
      <>
        <path d="M4 12.8V9.2l11-4.5v12.6L4 12.8Z" />
        <path d="M15 9h3a2 2 0 0 1 0 4h-3M6.6 14l1.2 5h3.7l-1.4-3.6" />
      </>
    ),
    security: (
      <>
        <rect x="5" y="10" width="14" height="10" rx="2" />
        <path d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};



const RoleIcon = ({ type }) => {
  const icons = {
    localization: (
      <>
        <path d="M4.2 5.2h9.4v7.2H8.7l-3.3 2.7v-2.7H4.2V5.2Z" />
        <path d="M10.4 10.1h9.4v7.2h-1.2V20l-3.3-2.7h-4.9v-7.2Z" />
        <path d="M7.1 8.8h3.6M13.2 13.8h3.6" />
      </>
    ),
    marketing: (
      <>
        <path d="M4 12.8V9.2l11-4.5v12.6L4 12.8Z" />
        <path d="M15 9h3a2 2 0 0 1 0 4h-3M6.6 14l1.2 5h3.7l-1.4-3.6" />
      </>
    ),
    product: (
      <>
        <path d="M8.3 7.8 4.2 12l4.1 4.2M15.7 7.8l4.1 4.2-4.1 4.2M13.8 4.5l-3.6 15" />
      </>
    ),
    lifeSciences: (
      <>
        <path d="M8 3.5h8v4H8v-4Z" />
        <path d="M6 7.5h12v13H6v-13Z" />
        <path d="M12 10.2v7M8.5 13.7h7" />
      </>
    ),
    legal: (
      <>
        <path d="M12 3.2 19 6v5.2c0 4.5-2.8 7.4-7 9.6-4.2-2.2-7-5.1-7-9.6V6l7-2.8Z" />
        <path d="m8.3 12.1 2.3 2.3 5-5" />
      </>
    ),
    procurement: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
        <path d="M9 4V2.8h6V4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};

const LearningResourceIcon = ({ type }) => {
  const icons = {
    chapters: (
      <>
        <path d="M5 6h14M5 12h14M5 18h14" />
        <path d="M3 6h.1M3 12h.1M3 18h.1" />
      </>
    ),
    transcript: (
      <>
        <rect x="5" y="3.5" width="14" height="17" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </>
    ),
    takeaways: (
      <>
        <path d="M7 4h10v16H7V4Z" />
        <path d="m9.2 9.5 1.6 1.6 3.4-3.4M9.2 15h5" />
      </>
    ),
    guides: (
      <>
        <path d="M4.5 5.2c2.7-.8 5-.5 7.5 1v13c-2.5-1.5-4.8-1.8-7.5-1V5.2Z" />
        <path d="M19.5 5.2c-2.7-.8-5-.5-7.5 1v13c2.5-1.5 4.8-1.8 7.5-1V5.2Z" />
      </>
    ),
    solutions: (
      <>
        <rect x="3.5" y="4.2" width="6.2" height="6.2" rx="1.3" />
        <rect x="14.3" y="4.2" width="6.2" height="6.2" rx="1.3" />
        <rect x="8.9" y="14.2" width="6.2" height="6.2" rx="1.3" />
        <path d="M9.7 7.3h4.6M6.6 10.4v2.2c0 1 .8 1.8 1.8 1.8h.5M17.4 10.4v2.2c0 1-.8 1.8-1.8 1.8h-.5" />
      </>
    ),
    related: (
      <>
        <rect x="4" y="5" width="10" height="14" rx="2" />
        <path d="m10 9 4 3-4 3V9ZM16 7h4v10h-4" />
      </>
    ),
  };

  return (
    <svg aria-hidden="true" width="23" height="23" viewBox="0 0 24 24" fill="none">
      <g stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round">
        {icons[type]}
      </g>
    </svg>
  );
};

const trustItems = [
  "AI + Human Workflows",
  "100+ Languages",
  "ISO 17100",
  "ISO 9001",
  "ISO 13485",
  "Enterprise Security & Governance",
];

const learningOutcomes = [
  "Determine when raw AI translation is appropriate—and when human review is essential.",
  "Use terminology controls, confidence signals, and structured evaluation to improve quality.",
  "Match translation workflows to content risk, audience expectations, and regulatory needs.",
  "Build governance for security, accountability, and measurable performance at scale.",
];

const heroFeatures = [
  { icon: <ClockIcon />, label: "Watch at your own pace" },
  { icon: <TranscriptIcon />, label: "Review searchable transcripts" },
  { icon: <ShareIcon />, label: "Share insights across your team" },
];


const guidancePillars = [
  {
    label: "Flexible Learning",
    title: "Learn at Your Own Pace",
    description:
      "Watch each session when it fits your schedule. Pause, revisit key chapters, review the transcript, and share relevant insights with colleagues across your organization.",
  },
  {
    label: "Actionable Guidance",
    title: "Apply Practical Frameworks",
    description:
      "Move beyond high-level trends with useful guidance on translation workflows, quality evaluation, terminology, security, localization technology, and global content operations.",
  },
  {
    label: "Enterprise Perspective",
    title: "Connect Strategy With Execution",
    description:
      "Understand how multilingual strategy, AI technology, human expertise, and operational governance work together to produce dependable business outcomes.",
  },
];

const webinarTopics = [
  {
    icon: "ai",
    title: "AI Translation",
    description:
      "Evaluate AI translation models, combine automation with professional linguists, manage content risk, and improve multilingual quality.",
    href: "https://www.stepes.com/resources/webinars/?topic=ai-translation#webinar-library",
    linkLabel: "View AI Translation Webinars",
  },
  {
    icon: "quality",
    title: "Translation Quality & Governance",
    description:
      "Explore quality measurement, linguistic validation, terminology compliance, review workflows, and enterprise accountability.",
    href: "https://www.stepes.com/resources/webinars/?topic=translation-quality#webinar-library",
    linkLabel: "View Quality & Governance Webinars",
  },
  {
    icon: "strategy",
    title: "Localization Strategy",
    description:
      "Build scalable localization programs that support international growth, customer experience, and organizational alignment.",
    href: "https://www.stepes.com/resources/webinars/?topic=localization-strategy#webinar-library",
    linkLabel: "View Localization Strategy Webinars",
  },
  {
    icon: "operations",
    title: "Global Content Operations",
    description:
      "Coordinate people, processes, technology, content systems, and performance data across global markets.",
    href: "https://www.stepes.com/resources/webinars/?topic=global-content-operations#webinar-library",
    linkLabel: "View Global Content Operations Webinars",
  },
  {
    icon: "technology",
    title: "Technology & Integrations",
    description:
      "Explore translation APIs, content connectors, automation, translation memory, terminology systems, and multilingual testing.",
    href: "https://www.stepes.com/resources/webinars/?topic=localization-technology#webinar-library",
    linkLabel: "View Technology Webinars",
  },
  {
    icon: "regulated",
    title: "Regulated Industries",
    description:
      "Access practical guidance for medical device, life sciences, healthcare, legal, financial, and compliance-sensitive content.",
    href: "https://www.stepes.com/resources/webinars/?topic=regulated-industries#webinar-library",
    linkLabel: "View Regulated Industry Webinars",
  },
  {
    icon: "marketing",
    title: "Multilingual Marketing",
    description:
      "Localize websites, campaigns, digital experiences, and customer communications while protecting brand voice and market relevance.",
    href: "https://www.stepes.com/resources/webinars/?topic=multilingual-marketing#webinar-library",
    linkLabel: "View Multilingual Marketing Webinars",
  },
  {
    icon: "security",
    title: "Security & Compliance",
    description:
      "Understand how data protection, access controls, auditability, and responsible AI practices support secure translation.",
    href: "https://www.stepes.com/resources/webinars/?topic=security-compliance#webinar-library",
    linkLabel: "View Security & Compliance Webinars",
  },
];

const webinars = [
  {
    topic: "AI Translation",
    industry: "All Industries",
    audience: "Localization Teams",
    sessionType: "Expert Briefing",
    title: "From AI Output to Enterprise-Ready Translation",
    description:
      "Combine AI translation, terminology controls, confidence signals, professional review, and quality governance for enterprise-ready multilingual content.",
    duration: "32 min",
    href: "https://www.stepes.com/resources/webinars/from-ai-output-to-enterprise-ready-translation/",
    series: "ai-translation-briefings",
    tone: "one",
  },
  {
    topic: "AI Translation",
    industry: "All Industries",
    audience: "Enterprise Leaders",
    sessionType: "Strategy Session",
    title: "Choosing the Right AI Translation Workflow by Content Risk",
    description:
      "Match raw AI translation, post-editing, full human review, and specialist validation to content risk, audience, and business impact.",
    duration: "28 min",
    href: "https://www.stepes.com/resources/webinars/ai-translation-workflow-by-content-risk/",
    series: "ai-translation-briefings",
    tone: "two",
  },
  {
    topic: "Translation Quality & Governance",
    industry: "All Industries",
    audience: "Localization Teams",
    sessionType: "Masterclass",
    title: "Measuring Translation Quality at Enterprise Scale",
    description:
      "Use structured error classification, severity scoring, sampling, and performance data to improve multilingual quality at scale.",
    duration: "41 min",
    href: "https://www.stepes.com/resources/webinars/measure-translation-quality-enterprise-scale/",
    series: "ai-translation-briefings",
    tone: "three",
  },
  {
    topic: "Security & Compliance",
    industry: "All Industries",
    audience: "Legal & Compliance",
    sessionType: "Expert Briefing",
    title: "Secure AI Translation: Governance, Privacy, and Human Oversight",
    description:
      "Evaluate data handling, model selection, access controls, human oversight, auditability, and responsible AI workflow design.",
    duration: "35 min",
    href: "https://www.stepes.com/resources/webinars/secure-ai-translation-governance/",
    series: "ai-translation-briefings",
    tone: "four",
  },
  {
    topic: "Global Content Operations",
    industry: "All Industries",
    audience: "Enterprise Leaders",
    sessionType: "Leadership Session",
    title: "Building a Scalable Global Content Operating Model",
    description:
      "Coordinate localization teams, regional stakeholders, content owners, technology, suppliers, and quality processes in one operating model.",
    duration: "38 min",
    href: "https://www.stepes.com/resources/webinars/scalable-global-content-operating-model/",
    series: "global-content-leadership",
    tone: "two",
  },
  {
    topic: "Technology & Integrations",
    industry: "Software & Technology",
    audience: "Product & Engineering",
    sessionType: "Workshop",
    title: "Continuous Localization for Websites, Software, and Mobile Apps",
    description:
      "Connect APIs, repositories, content systems, linguistic review, and in-context testing for faster multilingual releases.",
    duration: "44 min",
    href: "https://www.stepes.com/resources/webinars/continuous-localization-websites-software-mobile-apps/",
    series: "localization-technology-workshops",
    tone: "one",
  },
  {
    topic: "Multilingual Marketing",
    industry: "All Industries",
    audience: "Marketing Teams",
    sessionType: "Strategy Session",
    title: "Multilingual Website Strategy: Localization, SEO, and Conversion",
    description:
      "Align website architecture, multilingual SEO, localized user experience, terminology, and market relevance to improve international performance.",
    duration: "36 min",
    href: "https://www.stepes.com/resources/webinars/multilingual-website-localization-seo-conversion/",
    series: "global-content-leadership",
    tone: "three",
  },
  {
    topic: "Localization Strategy",
    industry: "All Industries",
    audience: "Enterprise Leaders",
    sessionType: "Executive Briefing",
    title: "Turning Localization Into Measurable Business Value",
    description:
      "Connect multilingual content to market expansion, customer satisfaction, product adoption, efficiency, and revenue growth.",
    duration: "31 min",
    href: "https://www.stepes.com/resources/webinars/localization-business-value/",
    series: "global-content-leadership",
    tone: "four",
  },
  {
    topic: "Regulated Industries",
    industry: "Medical Devices",
    audience: "Life Sciences Teams",
    sessionType: "Masterclass",
    title: "Medical Device Localization: From IFUs to Global Regulatory Readiness",
    description:
      "Strengthen terminology, linguistic QA, documentation controls, and specialized review across medical device content.",
    duration: "46 min",
    href: "https://www.stepes.com/resources/webinars/medical-device-localization-regulatory-readiness/",
    series: "regulated-content-masterclasses",
    tone: "one",
  },
  {
    topic: "Regulated Industries",
    industry: "Life Sciences & Healthcare",
    audience: "Life Sciences Teams",
    sessionType: "Quality Session",
    title: "Managing Translation Quality for Life Sciences and Healthcare Content",
    description:
      "Build reliable workflows for patient-facing, clinical, healthcare, regulatory, and other sensitive multilingual information.",
    duration: "43 min",
    href: "https://www.stepes.com/resources/webinars/life-sciences-translation-quality/",
    series: "regulated-content-masterclasses",
    tone: "two",
  },
  {
    topic: "Technology & Integrations",
    industry: "All Industries",
    audience: "Product & Engineering",
    sessionType: "Workshop",
    title: "Building an Enterprise Translation Technology Stack",
    description:
      "Connect translation management, APIs, content systems, linguistic assets, AI models, quality tools, and reporting platforms.",
    duration: "40 min",
    href: "https://www.stepes.com/resources/webinars/enterprise-translation-technology-stack/",
    series: "localization-technology-workshops",
    tone: "three",
  },
  {
    topic: "Translation Quality & Governance",
    industry: "All Industries",
    audience: "Localization Teams",
    sessionType: "Masterclass",
    title: "Terminology Governance Across AI and Human Translation Workflows",
    description:
      "Create, validate, maintain, and deploy multilingual terminology across AI engines, linguists, content systems, and global teams.",
    duration: "34 min",
    href: "https://www.stepes.com/resources/webinars/terminology-governance-ai-human-workflows/",
    series: "ai-translation-briefings",
    tone: "four",
  },
];

const webinarSeries = [
  {
    label: "AI + Quality",
    title: "Stepes AI Translation Briefings",
    description:
      "Practical guidance on AI translation models, human validation, workflow design, quality measurement, terminology, governance, and responsible enterprise adoption.",
    slug: "ai-translation-briefings",
    href: "https://www.stepes.com/resources/webinars/?series=ai-translation-briefings#webinar-library",
  },
  {
    label: "Global Strategy",
    title: "Global Content Leadership Sessions",
    description:
      "Strategic discussions for leaders responsible for international growth, global customer experience, localization operations, and multilingual performance.",
    slug: "global-content-leadership",
    href: "https://www.stepes.com/resources/webinars/?series=global-content-leadership#webinar-library",
  },
  {
    label: "Regulated Content",
    title: "Regulated Content Masterclasses",
    description:
      "Focused sessions addressing quality, terminology, compliance, documentation, and risk management for specialized and regulated content.",
    slug: "regulated-content-masterclasses",
    href: "https://www.stepes.com/resources/webinars/?series=regulated-content-masterclasses#webinar-library",
  },
  {
    label: "Technology",
    title: "Localization Technology Workshops",
    description:
      "Practical sessions covering translation APIs, integrations, workflow automation, continuous localization, terminology, testing, and translation data.",
    slug: "localization-technology-workshops",
    href: "https://www.stepes.com/resources/webinars/?series=localization-technology-workshops#webinar-library",
  },
];



const topicQueryMap = {
  "ai-translation": "AI Translation",
  "translation-quality": "Translation Quality & Governance",
  "localization-strategy": "Localization Strategy",
  "global-content-operations": "Global Content Operations",
  "localization-technology": "Technology & Integrations",
  "regulated-industries": "Regulated Industries",
  "multilingual-marketing": "Multilingual Marketing",
  "security-compliance": "Security & Compliance",
};

const audienceQueryMap = {
  "localization-teams": "Localization Teams",
  "marketing-teams": "Marketing Teams",
  "product-engineering": "Product & Engineering",
  "life-sciences": "Life Sciences Teams",
  "legal-compliance": "Legal & Compliance",
  procurement: "Procurement Leaders",
};

const getInitialWebinarFilters = () => {
  if (typeof window === "undefined") {
    return { topic: "All Topics", audience: "All Roles", series: "" };
  }

  const params = new URLSearchParams(window.location.search);
  const series = params.get("series") || "";
  const validSeries = webinarSeries.some((item) => item.slug === series) ? series : "";

  return {
    topic: topicQueryMap[params.get("topic")] || "All Topics",
    audience: audienceQueryMap[params.get("audience")] || "All Roles",
    series: validSeries,
  };
};

const webinarAudiences = [
  {
    icon: "localization",
    title: "Localization Teams",
    description:
      "Improve workflow design, vendor management, terminology, linguistic quality, automation, reporting, and stakeholder coordination.",
    href: "https://www.stepes.com/resources/webinars/?audience=localization-teams#webinar-library",
    linkLabel: "View Localization Team Webinars",
  },
  {
    icon: "marketing",
    title: "Marketing Teams",
    description:
      "Localize campaigns, websites, brand messaging, creative content, and customer journeys for international markets.",
    href: "https://www.stepes.com/resources/webinars/?audience=marketing-teams#webinar-library",
    linkLabel: "View Marketing Webinars",
  },
  {
    icon: "product",
    title: "Product & Engineering Teams",
    description:
      "Explore continuous localization, translation APIs, software internationalization, multilingual interfaces, release automation, and testing.",
    href: "https://www.stepes.com/resources/webinars/?audience=product-engineering#webinar-library",
    linkLabel: "View Product & Engineering Webinars",
  },
  {
    icon: "lifeSciences",
    title: "Life Sciences Teams",
    description:
      "Access guidance on regulated content, medical terminology, linguistic validation, patient communications, documentation, and QA.",
    href: "https://www.stepes.com/resources/webinars/?audience=life-sciences#webinar-library",
    linkLabel: "View Life Sciences Webinars",
  },
  {
    icon: "legal",
    title: "Legal & Compliance Teams",
    description:
      "Understand the processes, controls, security requirements, and specialized expertise needed for high-risk multilingual content.",
    href: "https://www.stepes.com/resources/webinars/?audience=legal-compliance#webinar-library",
    linkLabel: "View Legal & Compliance Webinars",
  },
  {
    icon: "procurement",
    title: "Procurement Leaders",
    description:
      "Evaluate translation partners, compare service models, measure performance, manage costs, and establish scalable enterprise agreements.",
    href: "https://www.stepes.com/resources/webinars/?audience=procurement#webinar-library",
    linkLabel: "View Procurement Webinars",
  },
];

const webinarExperts = [
  {
    label: "AI + Quality",
    title: "AI Translation and Quality Experts",
    description:
      "Explore how AI models, human reviewers, terminology assets, quality frameworks, and performance data work together to deliver reliable translation outcomes.",
  },
  {
    label: "Operations",
    title: "Localization Operations Leaders",
    description:
      "Learn how to structure global programs, coordinate stakeholders, improve workflows, and scale multilingual content across teams and markets.",
  },
  {
    label: "Technology",
    title: "Language Technology Practitioners",
    description:
      "Gain practical insights into APIs, integrations, automation, translation memory, terminology systems, multilingual testing, and continuous localization.",
  },
  {
    label: "Industry Expertise",
    title: "Industry and Regulatory Specialists",
    description:
      "Understand the quality, documentation, terminology, security, and compliance considerations affecting regulated and specialized content.",
  },
  {
    label: "Language Expertise",
    title: "Professional Linguists and Reviewers",
    description:
      "See how language expertise, cultural knowledge, subject-matter understanding, and in-context review improve translation accuracy and usability.",
  },
];

const webinarLearningResources = [
  {
    icon: "chapters",
    title: "Video Chapters",
    description:
      "Move directly to the topics most relevant to your role, project, or business challenge.",
  },
  {
    icon: "transcript",
    title: "Full Webinar Transcripts",
    description:
      "Read or search the complete session transcript, revisit key explanations, and share knowledge across your team.",
  },
  {
    icon: "takeaways",
    title: "Key Takeaways",
    description:
      "Review concise summaries of the most important ideas, recommendations, and practical actions from each session.",
  },
  {
    icon: "guides",
    title: "Companion Guides and Checklists",
    description:
      "Continue learning with related guides, templates, checklists, white papers, and planning resources.",
  },
  {
    icon: "solutions",
    title: "Related Solutions and Services",
    description:
      "Connect expert guidance with the Stepes translation services, technology, and enterprise workflows relevant to your needs.",
  },
  {
    icon: "related",
    title: "Additional Webinars",
    description:
      "Build a learning path around AI translation, quality, localization operations, technology, or industry requirements.",
  },
];

const privateWorkshopBenefits = [
  "Evaluate current translation and localization processes.",
  "Identify workflow, quality, or technology gaps.",
  "Compare AI and human translation options.",
  "Define content-risk and review requirements.",
  "Align stakeholders around a scalable global content strategy.",
  "Establish practical next steps for implementation.",
];


const relatedResources = [
  {
    title: "All Guides",
    description:
      "Access the complete collection of Stepes translation, localization, quality, technology, and global content guides.",
    href: "https://www.stepes.com/resources/guides/",
    linkLabel: "Explore All Guides",
  },
  {
    title: "White Papers",
    description:
      "Explore in-depth analysis of AI translation, enterprise localization, multilingual quality, and global content transformation.",
    href: "https://www.stepes.com/resources/white-papers/",
    linkLabel: "View White Papers",
  },
  {
    title: "Case Studies",
    description:
      "See how organizations improve translation quality, accelerate multilingual delivery, and support global business operations.",
    href: "https://www.stepes.com/resources/case-studies/",
    linkLabel: "Read Case Studies",
  },
  {
    title: "AI Translation Insights",
    description:
      "Understand the opportunities, risks, quality requirements, and governance practices shaping enterprise AI translation.",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
    linkLabel: "Explore AI Translation Insights",
  },
  {
    title: "Translation Quality & Governance",
    description:
      "Learn how enterprises establish measurable quality standards, linguistic controls, review processes, and program accountability.",
    href: "https://www.stepes.com/resources/translation-quality/",
    linkLabel: "Explore Quality & Governance",
  },
  {
    title: "Global Content Strategy",
    description:
      "Explore the operating models, technology, processes, and organizational practices behind scalable international content programs.",
    href: "https://www.stepes.com/resources/global-content-strategy/",
    linkLabel: "Explore Global Content Strategy",
  },
];

const webinarFaqs = [
  {
    question: "Are Stepes webinars available on demand?",
    answer:
      "Yes. Stepes webinars are designed primarily as on-demand learning resources, so you can watch them when it is convenient for you and revisit individual sessions as needed.",
  },
  {
    question: "Do I need to register to watch a webinar?",
    answer:
      "Most Stepes webinars can be accessed directly from their individual session pages. Certain downloadable resources, private sessions, or specialized content may request basic business information.",
  },
  {
    question: "Who are Stepes webinars designed for?",
    answer:
      "The webinar library supports localization professionals, marketing leaders, product and engineering teams, life sciences organizations, legal and compliance professionals, procurement teams, and executives responsible for global content or international growth.",
  },
  {
    question: "What topics do the webinars cover?",
    answer:
      "Stepes webinars cover AI translation, professional human review, translation quality, terminology management, localization strategy, global content operations, multilingual marketing, language technology, security, compliance, and regulated industries.",
  },
  {
    question: "Are transcripts and captions available?",
    answer:
      "Where available, Stepes webinar pages include captions, searchable transcripts, key takeaways, and chapter navigation, making sessions easier to review, share, and access across global teams.",
  },
  {
    question: "Can I share a webinar with colleagues?",
    answer:
      "Yes. You can share the URL of any public webinar page with colleagues, stakeholders, and project teams. Related transcripts and resources can also support internal discussions and planning.",
  },
  {
    question: "How often are new webinars added?",
    answer:
      "Stepes adds new expert sessions throughout the year as translation technologies, global content practices, quality requirements, and industry needs continue to evolve.",
  },
  {
    question: "Do Stepes webinars include technology demonstrations?",
    answer:
      "Some localization technology workshops include platform, workflow, API, integration, or automation demonstrations. Other sessions focus on strategy, quality, governance, and industry best practices.",
  },
  {
    question: "Can Stepes provide a private webinar or workshop for our organization?",
    answer:
      "Yes. Stepes can arrange private briefings and working sessions tailored to your organization’s content, systems, markets, quality requirements, and localization objectives.",
  },
];

export default function StepesWebinarsHubWireframe() {
  const [initialFilters] = useState(() => getInitialWebinarFilters());
  const [searchQuery, setSearchQuery] = useState("");
  const [topicFilter, setTopicFilter] = useState(initialFilters.topic);
  const [industryFilter, setIndustryFilter] = useState("All Industries");
  const [audienceFilter, setAudienceFilter] = useState(initialFilters.audience);
  const [sessionFilter, setSessionFilter] = useState("All Session Types");
  const [seriesFilter, setSeriesFilter] = useState(initialFilters.series);
  const [showAllWebinars, setShowAllWebinars] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const topicOptions = ["All Topics", ...new Set(webinars.map((webinar) => webinar.topic))];
  const industryOptions = [
    "All Industries",
    ...new Set(
      webinars
        .map((webinar) => webinar.industry)
        .filter((industry) => industry !== "All Industries")
    ),
  ];
  const audienceOptions = ["All Roles", ...new Set(webinars.map((webinar) => webinar.audience))];
  const sessionOptions = [
    "All Session Types",
    ...new Set(webinars.map((webinar) => webinar.sessionType)),
  ];

  const filteredWebinars = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return webinars.filter((webinar) => {
      const matchesSearch =
        !normalizedQuery ||
        [
          webinar.title,
          webinar.description,
          webinar.topic,
          webinar.industry,
          webinar.audience,
          webinar.series,
        ]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesTopic = topicFilter === "All Topics" || webinar.topic === topicFilter;
      const matchesIndustry =
        industryFilter === "All Industries" || webinar.industry === industryFilter;
      const matchesAudience = audienceFilter === "All Roles" || webinar.audience === audienceFilter;
      const matchesSession =
        sessionFilter === "All Session Types" || webinar.sessionType === sessionFilter;
      const matchesSeries = !seriesFilter || webinar.series === seriesFilter;

      return (
        matchesSearch &&
        matchesTopic &&
        matchesIndustry &&
        matchesAudience &&
        matchesSession &&
        matchesSeries
      );
    });
  }, [searchQuery, topicFilter, industryFilter, audienceFilter, sessionFilter, seriesFilter]);

  const filtersActive =
    Boolean(searchQuery.trim()) ||
    topicFilter !== "All Topics" ||
    industryFilter !== "All Industries" ||
    audienceFilter !== "All Roles" ||
    sessionFilter !== "All Session Types" ||
    Boolean(seriesFilter);

  const visibleWebinars =
    showAllWebinars || filtersActive ? filteredWebinars : filteredWebinars.slice(0, 6);

  const resetFilters = () => {
    setSearchQuery("");
    setTopicFilter("All Topics");
    setIndustryFilter("All Industries");
    setAudienceFilter("All Roles");
    setSessionFilter("All Session Types");
    setSeriesFilter("");
    setShowAllWebinars(false);
  };

  const activeSeries = webinarSeries.find((series) => series.slug === seriesFilter);

  return (
    <main className="stepes-webinars">
      <style>{`
        .stepes-webinars,
        .stepes-webinars * {
          box-sizing: border-box;
        }

        .stepes-webinars {
          --stepes-accent: #c11d63;
          --stepes-accent-dark: #a71954;
          --stepes-accent-deep: #7a1542;
          --stepes-blush: #fdf2f7;
          --stepes-ink: #111827;
          --stepes-body: #475569;
          --stepes-muted: #6b7280;
          --stepes-border: #e5e9f0;
          --stepes-border-strong: #d8dee8;
          --stepes-surface: #f7f9fc;
          --stepes-dark: #151821;
          --stepes-dark-2: #202430;
          width: 100%;
          overflow-x: clip;
          background: #ffffff;
          color: var(--stepes-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
            "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .stepes-webinars a {
          color: inherit;
          text-decoration: none;
        }

        .stepes-webinars h1,
        .stepes-webinars h2,
        .stepes-webinars h3,
        .stepes-webinars p,
        .stepes-webinars a,
        .stepes-webinars button,
        .stepes-webinars input,
        .stepes-webinars select {
          min-width: 0;
        }

        .stepes-webinars h1,
        .stepes-webinars h2,
        .stepes-webinars h3,
        .webinars-editorial-link,
        .webinar-card__title-link {
          overflow-wrap: break-word;
        }

        .stepes-webinars button,
        .stepes-webinars a {
          -webkit-tap-highlight-color: transparent;
        }


        .sr-only {
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

        .webinars-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .webinars-eyebrow {
          margin: 0 0 18px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .webinars-button {
          min-height: 52px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 13px 23px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          text-align: center;
          white-space: normal;
          transition: transform 180ms ease, background-color 180ms ease,
            border-color 180ms ease, box-shadow 180ms ease;
        }

        .webinars-button svg {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .webinars-button:hover svg {
          transform: translateX(3px);
        }

        .webinars-button:focus-visible,
        .webinars-editorial-link:focus-visible,
        .featured-video-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .webinars-button--primary,
        .webinars-button--primary:link,
        .webinars-button--primary:visited,
        .webinars-button--primary:hover,
        .webinars-button--primary:active,
        .webinars-button--primary:focus-visible {
          color: #ffffff;
        }

        .webinars-button--primary {
          background: var(--stepes-accent);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.2);
        }

        .webinars-button--primary:hover {
          background: var(--stepes-accent-dark);
          box-shadow: 0 14px 32px rgba(167, 25, 84, 0.24);
          transform: translateY(-1px);
        }

        .webinars-button--secondary {
          color: #252b37;
          background: rgba(255, 255, 255, 0.92);
          border-color: var(--stepes-border-strong);
        }

        .webinars-button--secondary:hover {
          background: #ffffff;
          border-color: #bfc7d3;
          transform: translateY(-1px);
        }

        .webinars-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--stepes-accent);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .webinars-editorial-link svg {
          transition: transform 180ms ease;
        }

        .webinars-editorial-link:hover {
          color: var(--stepes-accent-dark);
        }

        .webinars-editorial-link:hover svg {
          transform: translateX(3px);
        }

        /* Section 1: Hero */
        .webinars-hero {
          position: relative;
          isolation: isolate;
          padding: 108px 0 92px;
          background:
            radial-gradient(ellipse 68% 44% at 50% -4%, rgba(193, 29, 99, 0.095), transparent 72%),
            linear-gradient(180deg, #ffffff 0%, #fbfcfe 100%);
          border-bottom: 1px solid var(--stepes-border);
        }

        .webinars-hero::after {
          content: "";
          position: absolute;
          z-index: -1;
          left: 50%;
          bottom: 0;
          width: min(72vw, 960px);
          height: 1px;
          transform: translateX(-50%);
          background: linear-gradient(90deg, transparent, rgba(193, 29, 99, 0.34), transparent);
        }

        .webinars-hero__inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .webinars-hero h1 {
          max-width: 1000px;
          margin: 0;
          color: #0c1220;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
          text-wrap: balance;
        }

        .webinars-hero__lead {
          max-width: 805px;
          margin: 26px auto 0;
          color: var(--stepes-body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .webinars-hero__actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
        }

        .webinars-hero__topics {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 10px 16px;
          margin-top: 42px;
          color: #5c6676;
          font-size: 14px;
          line-height: 1.4;
        }

        .webinars-hero__topics span {
          position: relative;
          white-space: nowrap;
        }

        .webinars-hero__topics span:not(:last-child)::after {
          content: "";
          position: absolute;
          top: 50%;
          right: -10px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #aeb6c2;
          transform: translateY(-50%);
        }

        .webinars-hero__features {
          width: min(100%, 850px);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 52px;
          padding-top: 26px;
          border-top: 1px solid rgba(218, 223, 232, 0.95);
        }

        .hero-feature {
          min-width: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 18px;
          color: #3f4857;
          font-size: 14px;
          line-height: 1.45;
        }

        .hero-feature + .hero-feature {
          border-left: 1px solid var(--stepes-border);
        }

        .hero-feature__icon {
          width: 34px;
          height: 34px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex: 0 0 auto;
          border: 1px solid #eadbe2;
          border-radius: 50%;
          color: var(--stepes-accent-deep);
          background: rgba(253, 242, 247, 0.7);
        }

        /* Section 2: Trust strip */
        .webinars-trust {
          padding: 34px 0;
          background: #ffffff;
          border-bottom: 1px solid var(--stepes-border);
        }

        .webinars-trust__layout {
          display: grid;
          grid-template-columns: minmax(300px, 1.3fr) minmax(0, 2.7fr);
          align-items: stretch;
          gap: 38px;
        }

        .webinars-trust__intro {
          display: flex;
          align-items: center;
          padding-right: 38px;
          border-right: 1px solid var(--stepes-border);
        }

        .webinars-trust__intro p {
          max-width: 390px;
          margin: 0;
          color: #3f4857;
          font-size: 15px;
          line-height: 1.65;
        }

        .webinars-trust__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .trust-item {
          display: flex;
          align-items: center;
          min-height: 48px;
          padding: 8px 20px;
          color: #252c38;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .trust-item:nth-child(2),
        .trust-item:nth-child(3),
        .trust-item:nth-child(5),
        .trust-item:nth-child(6) {
          border-left: 1px solid var(--stepes-border);
        }

        .trust-item:nth-child(n + 4) {
          border-top: 1px solid var(--stepes-border);
        }

        /* Section 3: Featured webinar */
        .featured-webinar {
          padding: 96px 0;
          background: #f7f9fc;
        }

        .featured-webinar__header {
          max-width: 790px;
          margin-bottom: 36px;
        }

        .featured-webinar__header h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .featured-webinar__header p:not(.webinars-eyebrow) {
          max-width: 740px;
          margin: 18px 0 0;
          color: var(--stepes-body);
          font-size: 18px;
          line-height: 1.68;
        }

        .featured-card {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(430px, 0.92fr);
          overflow: hidden;
          border: 1px solid #e0e5ec;
          border-radius: 30px;
          background: #ffffff;
          box-shadow: 0 24px 70px rgba(19, 28, 45, 0.08);
        }

        .featured-card__media {
          min-width: 0;
          padding: 30px;
          background: #ffffff;
        }

        .featured-video-link {
          position: relative;
          min-height: 510px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          padding: 28px;
          border-radius: 24px;
          color: #ffffff;
          background:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(145deg, #151821 0%, #202430 58%, #181b24 100%);
          background-size: 42px 42px, 42px 42px, auto;
          isolation: isolate;
        }

        .featured-video-link::before {
          content: "";
          position: absolute;
          z-index: -1;
          inset: auto -14% -24% 20%;
          height: 58%;
          background: linear-gradient(135deg, transparent 0%, rgba(193, 29, 99, 0.22) 100%);
          transform: skewY(-10deg);
        }

        .featured-video__top,
        .featured-video__bottom {
          position: relative;
          z-index: 2;
        }

        .featured-video__top {
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .featured-video__series {
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.17em;
          text-transform: uppercase;
        }

        .featured-video__badge {
          align-self: flex-start;
          flex: 0 0 auto;
          padding: 7px 11px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.84);
          background: rgba(255, 255, 255, 0.07);
          font-size: 11px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
          backdrop-filter: blur(8px);
        }

        .featured-video__center {
          position: absolute;
          z-index: 3;
          top: 50%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          transform: translate(-50%, -50%);
        }

        .featured-video__play {
          width: 82px;
          height: 82px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.62);
          border-radius: 50%;
          color: var(--stepes-accent);
          background: #ffffff;
          box-shadow: 0 18px 38px rgba(0, 0, 0, 0.24);
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .featured-video-link:hover .featured-video__play {
          transform: scale(1.04);
          box-shadow: 0 22px 46px rgba(0, 0, 0, 0.3);
        }

        .featured-video__watch {
          color: rgba(255, 255, 255, 0.82);
          font-size: 13px;
          font-weight: 600;
        }

        .featured-video__bottom {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: end;
          gap: 24px;
        }

        .featured-video__title {
          max-width: 470px;
          margin: 0;
          color: #ffffff;
          font-size: 28px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
          text-wrap: balance;
        }

        .featured-video__duration {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding-bottom: 3px;
          color: rgba(255, 255, 255, 0.76);
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
        }

        .featured-card__content {
          min-width: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 58px 54px 58px 28px;
        }

        .featured-card__content h3 {
          margin: 0;
          color: #111827;
          font-size: 30px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .featured-card__summary {
          margin: 20px 0 0;
          color: var(--stepes-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .featured-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 10px 20px;
          margin-top: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--stepes-border);
          color: #5b6574;
          font-size: 14px;
        }

        .featured-meta span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .featured-meta span + span {
          position: relative;
        }

        .featured-meta span + span::before {
          content: "";
          width: 3px;
          height: 3px;
          margin-right: 3px;
          border-radius: 50%;
          background: #a8b0bc;
        }

        .featured-learning {
          margin-top: 24px;
        }

        .featured-learning__label {
          margin: 0 0 14px;
          color: #283140;
          font-size: 14px;
          font-weight: 600;
        }

        .featured-learning ul {
          display: grid;
          gap: 12px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .featured-learning li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          color: #4d5766;
          font-size: 14px;
          line-height: 1.55;
        }

        .featured-learning li svg {
          margin-top: 2px;
          color: var(--stepes-accent);
        }

        .featured-card__actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px 22px;
          margin-top: 30px;
        }


        /* Section 4: Expert guidance */
        .webinar-guidance {
          padding: 96px 0;
          background: #ffffff;
        }

        .webinar-guidance__header {
          max-width: 810px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .webinar-guidance__header h2,
        .webinar-topics__header h2,
        .webinar-library__header h2,
        .webinar-series__header h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .webinar-guidance__header p:not(.webinars-eyebrow),
        .webinar-library__header p:not(.webinars-eyebrow),
        .webinar-series__header p:not(.webinars-eyebrow) {
          max-width: 790px;
          margin: 18px auto 0;
          color: var(--stepes-body);
          font-size: 18px;
          line-height: 1.68;
        }

        .guidance-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--stepes-border);
          border-bottom: 1px solid var(--stepes-border);
        }

        .guidance-item {
          min-width: 0;
          padding: 38px 38px 42px;
        }

        .guidance-item + .guidance-item {
          border-left: 1px solid var(--stepes-border);
        }

        .guidance-item__label {
          margin: 0 0 16px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .guidance-item h3 {
          margin: 0;
          color: #1a2230;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.018em;
        }

        .guidance-item p:last-child {
          margin: 16px 0 0;
          color: var(--stepes-body);
          font-size: 16px;
          line-height: 1.72;
        }

        /* Section 5: Browse by topic */
        .webinar-topics {
          padding: 96px 0;
          color: #ffffff;
          background:
            radial-gradient(circle at 8% 6%, rgba(193, 29, 99, 0.2), transparent 30%),
            linear-gradient(145deg, #151821 0%, #1c202a 62%, #161922 100%);
        }

        .webinar-topics__layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.74fr) minmax(0, 1.76fr);
          gap: 74px;
          align-items: start;
        }

        .webinar-topics__header {
          position: sticky;
          top: 28px;
          max-width: 390px;
        }

        .webinar-topics .webinars-eyebrow {
          color: #f4a8c8;
        }

        .webinar-topics__header h2 {
          color: #ffffff;
        }

        .webinar-topics__header p:not(.webinars-eyebrow) {
          margin: 20px 0 0;
          color: rgba(255, 255, 255, 0.7);
          font-size: 17px;
          line-height: 1.72;
        }

        .topic-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.13);
        }

        .topic-item {
          min-width: 0;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 31px 30px 33px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .topic-item:nth-child(even) {
          padding-right: 0;
          padding-left: 30px;
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .topic-item__icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #f4a8c8;
          border: 1px solid rgba(244, 168, 200, 0.28);
          border-radius: 15px;
          background: rgba(193, 29, 99, 0.08);
        }

        .topic-item h3 {
          margin: 0;
          color: #ffffff;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.012em;
        }

        .topic-item p {
          margin: 10px 0 0;
          color: rgba(255, 255, 255, 0.66);
          font-size: 15px;
          line-height: 1.66;
        }

        .topic-item .webinars-editorial-link {
          margin-top: 16px;
          color: #f4a8c8;
          font-size: 14px;
        }

        .topic-item .webinars-editorial-link:hover {
          color: #ffffff;
        }

        /* Section 6: Webinar library */
        .webinar-library {
          padding: 96px 0;
          background: #ffffff;
          scroll-margin-top: 24px;
        }

        .webinar-library__header {
          max-width: 820px;
          margin-bottom: 38px;
        }

        .webinar-library__header p:not(.webinars-eyebrow) {
          margin-left: 0;
        }

        .webinar-filters {
          display: grid;
          grid-template-columns: minmax(280px, 1.4fr) repeat(4, minmax(150px, 0.72fr)) auto;
          gap: 10px;
          align-items: center;
          padding: 16px;
          border: 1px solid var(--stepes-border);
          border-radius: 22px;
          background: #f8fafc;
        }

        .webinar-search {
          position: relative;
          min-width: 0;
        }

        .webinar-search svg {
          position: absolute;
          top: 50%;
          left: 16px;
          color: #7a8493;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .webinar-search input,
        .webinar-filter-select {
          width: 100%;
          height: 48px;
          border: 1px solid #d9dfe8;
          border-radius: 13px;
          color: #27303d;
          background: #ffffff;
          font: inherit;
          font-size: 14px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .webinar-search input {
          padding: 0 15px 0 45px;
        }

        .webinar-search input::placeholder {
          color: #7b8594;
        }

        .webinar-filter-select {
          padding: 0 34px 0 13px;
          cursor: pointer;
        }

        .webinar-search input:focus,
        .webinar-filter-select:focus {
          border-color: rgba(193, 29, 99, 0.68);
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.12);
        }

        .webinar-reset {
          min-height: 46px;
          padding: 0 14px;
          border: 0;
          color: var(--stepes-accent);
          background: transparent;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          cursor: pointer;
        }

        .webinar-reset:hover {
          color: var(--stepes-accent-dark);
        }

        .webinar-reset:focus-visible,
        .webinar-load-more:focus-visible,
        .webinar-card__media:focus-visible,
        .webinar-card__title-link:focus-visible,
        .series-item .webinars-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
        }

        .webinar-library__status {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-top: 25px;
          color: #657080;
          font-size: 14px;
        }

        .webinar-library__status strong {
          color: #27303d;
          font-weight: 600;
        }

        .webinar-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px;
          margin-top: 24px;
        }

        .webinar-card {
          min-width: 0;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #e0e5ec;
          border-radius: 24px;
          background: #ffffff;
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .webinar-card:hover {
          transform: translateY(-3px);
          border-color: #d2d8e2;
          box-shadow: 0 18px 44px rgba(18, 27, 44, 0.09);
        }

        .webinar-card__media {
          position: relative;
          min-height: 205px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 22px;
          overflow: hidden;
          color: #ffffff;
          isolation: isolate;
        }

        .webinar-card__media::before {
          content: "";
          position: absolute;
          left: 22px;
          right: 22px;
          bottom: 0;
          height: 2px;
          background: linear-gradient(90deg, rgba(244, 168, 200, 0.72), transparent 72%);
        }

        .webinar-card__media--one {
          background: linear-gradient(145deg, #191d28 0%, #332033 100%);
        }

        .webinar-card__media--two {
          background: linear-gradient(145deg, #222835 0%, #172433 100%);
        }

        .webinar-card__media--three {
          background: linear-gradient(145deg, #25222d 0%, #3b2333 100%);
        }

        .webinar-card__media--four {
          background: linear-gradient(145deg, #18242b 0%, #292331 100%);
        }

        .webinar-card__media-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .webinar-card__topic {
          max-width: 72%;
          color: rgba(255, 255, 255, 0.72);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .webinar-card__ondemand {
          flex: 0 0 auto;
          padding: 6px 9px;
          border: 1px solid rgba(255, 255, 255, 0.17);
          border-radius: 999px;
          color: rgba(255, 255, 255, 0.82);
          background: rgba(255, 255, 255, 0.06);
          font-size: 10px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          white-space: nowrap;
        }

        .webinar-card__play {
          width: 54px;
          height: 54px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          border-radius: 50%;
          color: var(--stepes-accent);
          background: #ffffff;
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.22);
          transition: transform 180ms ease;
        }

        .webinar-card__media:hover .webinar-card__play {
          transform: scale(1.05);
        }

        .webinar-card__body {
          min-width: 0;
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 25px 25px 26px;
        }

        .webinar-card__type {
          margin: 0;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .webinar-card h3 {
          margin: 12px 0 0;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.33;
          letter-spacing: -0.016em;
        }

        .webinar-card__title-link:hover {
          color: var(--stepes-accent-dark);
        }

        .webinar-card__description {
          margin: 14px 0 0;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.67;
        }

        .webinar-card__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          margin-top: auto;
          padding-top: 22px;
        }

        .webinar-card__duration {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #697383;
          font-size: 13px;
          font-weight: 600;
        }

        .webinar-card__footer .webinars-editorial-link {
          font-size: 14px;
        }

        .webinar-library__empty {
          grid-column: 1 / -1;
          padding: 54px 24px;
          border: 1px solid var(--stepes-border);
          border-radius: 22px;
          text-align: center;
          color: var(--stepes-body);
          background: #f8fafc;
        }

        .webinar-library__empty h3 {
          margin: 0;
          color: #1e2734;
          font-size: 22px;
          font-weight: 600;
        }

        .webinar-library__empty p {
          margin: 10px auto 0;
          max-width: 560px;
        }

        .webinar-library__load {
          display: flex;
          justify-content: center;
          margin-top: 34px;
        }

        .webinar-load-more {
          min-height: 50px;
          padding: 12px 22px;
          border: 1px solid #d6dce5;
          border-radius: 999px;
          color: #28313f;
          background: #ffffff;
          font: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 180ms ease, transform 180ms ease, box-shadow 180ms ease;
        }

        .webinar-load-more:hover {
          transform: translateY(-1px);
          border-color: #bcc5d2;
          box-shadow: 0 9px 22px rgba(18, 27, 44, 0.07);
        }

        /* Section 7: Signature series */
        .webinar-series {
          padding: 96px 0;
          background: #f7f9fc;
          border-top: 1px solid var(--stepes-border);
        }

        .webinar-series__header {
          max-width: 820px;
          margin-bottom: 46px;
        }

        .webinar-series__header p:not(.webinars-eyebrow) {
          margin-left: 0;
        }

        .series-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .series-item {
          min-width: 0;
          display: flex;
          flex-direction: column;
          padding: 34px 30px 38px;
        }

        .series-item + .series-item {
          border-left: 1px solid var(--stepes-border-strong);
        }

        .series-item__label {
          margin: 0 0 16px;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .series-item h3 {
          margin: 0;
          color: #182130;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.31;
          letter-spacing: -0.015em;
        }

        .series-item p:not(.series-item__label) {
          margin: 15px 0 24px;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.69;
        }

        .series-item .webinars-editorial-link {
          margin-top: auto;
        }



        /* Section 8: Webinars by role */
        .webinar-audiences {
          padding: 96px 0;
          background: #ffffff;
        }

        .webinar-audiences__layout {
          display: grid;
          grid-template-columns: minmax(290px, 0.72fr) minmax(0, 1.78fr);
          gap: 72px;
          align-items: start;
        }

        .webinar-audiences__header {
          position: sticky;
          top: 28px;
          max-width: 410px;
        }

        .webinar-audiences__header h2,
        .webinar-experts__header h2,
        .webinar-learning__header h2,
        .private-workshop__content h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .webinar-audiences__header p:not(.webinars-eyebrow),
        .webinar-experts__header p:not(.webinars-eyebrow),
        .webinar-learning__header p:not(.webinars-eyebrow),
        .private-workshop__content > p:not(.webinars-eyebrow) {
          margin: 19px 0 0;
          color: var(--stepes-body);
          font-size: 17px;
          line-height: 1.72;
        }

        .audience-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--stepes-border-strong);
        }

        .audience-item {
          min-width: 0;
          display: grid;
          grid-template-columns: 48px minmax(0, 1fr);
          gap: 18px;
          padding: 31px 30px 34px 0;
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .audience-item:nth-child(even) {
          padding-right: 0;
          padding-left: 30px;
          border-left: 1px solid var(--stepes-border-strong);
        }

        .audience-item__icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--stepes-accent-deep);
          border: 1px solid #eadbe2;
          border-radius: 15px;
          background: rgba(253, 242, 247, 0.72);
        }

        .audience-item h3 {
          margin: 0;
          color: #182130;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.014em;
        }

        .audience-item p {
          margin: 10px 0 0;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.67;
        }

        .audience-item .webinars-editorial-link {
          margin-top: 16px;
          font-size: 14px;
        }

        /* Section 9: Featured experts */
        .webinar-experts {
          padding: 96px 0;
          background: #f7f9fc;
          border-top: 1px solid var(--stepes-border);
          border-bottom: 1px solid var(--stepes-border);
        }

        .webinar-experts__header {
          display: grid;
          grid-template-columns: minmax(320px, 0.82fr) minmax(0, 1.18fr);
          gap: 70px;
          align-items: end;
          margin-bottom: 44px;
        }

        .webinar-experts__header p:not(.webinars-eyebrow) {
          max-width: 670px;
          margin: 0;
        }

        .expertise-list {
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .expertise-item {
          display: grid;
          grid-template-columns: minmax(145px, 0.42fr) minmax(260px, 0.76fr) minmax(0, 1.42fr);
          gap: 30px;
          align-items: center;
          padding: 27px 10px;
        }

        .expertise-item + .expertise-item {
          border-top: 1px solid var(--stepes-border);
        }

        .expertise-item__label {
          margin: 0;
          color: var(--stepes-accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .expertise-item h3 {
          margin: 0;
          color: #182130;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.34;
          letter-spacing: -0.014em;
        }

        .expertise-item p:last-child {
          margin: 0;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.68;
        }

        /* Section 10: Practical learning resources */
        .webinar-learning {
          padding: 96px 0;
          background: #ffffff;
        }

        .webinar-learning__layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.76fr) minmax(0, 1.64fr);
          gap: 72px;
          align-items: start;
        }

        .webinar-learning__header {
          max-width: 420px;
        }

        .learning-resource-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .learning-resource-item {
          min-width: 0;
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 16px;
          padding: 30px 28px 32px 0;
        }

        .learning-resource-item:nth-child(even) {
          padding-right: 0;
          padding-left: 28px;
          border-left: 1px solid var(--stepes-border);
        }

        .learning-resource-item:nth-child(n + 3) {
          border-top: 1px solid var(--stepes-border);
        }

        .learning-resource-item__icon {
          width: 44px;
          height: 44px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: var(--stepes-accent-deep);
          border: 1px solid #eadbe2;
          border-radius: 14px;
          background: rgba(253, 242, 247, 0.68);
        }

        .learning-resource-item h3 {
          margin: 0;
          color: #182130;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.34;
          letter-spacing: -0.012em;
        }

        .learning-resource-item p {
          margin: 10px 0 0;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.66;
        }

        /* Section 11: Private workshop */
        .webinar-private-workshop {
          padding: 96px 0;
          background: #f7f9fc;
          border-top: 1px solid var(--stepes-border);
        }

        .private-workshop {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(380px, 0.92fr);
          overflow: hidden;
          border: 1px solid #eadbe2;
          border-radius: 30px;
          background:
            radial-gradient(circle at 5% 0%, rgba(193, 29, 99, 0.08), transparent 37%),
            linear-gradient(135deg, #fffafd 0%, #ffffff 58%);
          box-shadow: 0 22px 60px rgba(31, 39, 55, 0.07);
        }

        .private-workshop__content {
          padding: 58px 62px 60px;
        }

        .private-workshop__content > p:not(.webinars-eyebrow) {
          max-width: 650px;
        }

        .private-workshop__actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px 22px;
          margin-top: 32px;
        }

        .private-workshop__benefits {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 52px 54px;
          border-left: 1px solid #eadbe2;
          background: rgba(255, 255, 255, 0.7);
        }

        .private-workshop__benefits h3 {
          margin: 0 0 20px;
          color: #182130;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.014em;
        }

        .private-workshop__benefits ul {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .private-workshop__benefits li {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 11px;
          align-items: start;
          color: #4d5766;
          font-size: 15px;
          line-height: 1.55;
        }

        .private-workshop__benefits li svg {
          margin-top: 2px;
          color: var(--stepes-accent);
        }




        /* Section 12: Related resources */
        .webinar-related-resources {
          padding: 96px 0;
          background: #ffffff;
        }

        .related-resources__header {
          max-width: 820px;
          margin-bottom: 44px;
        }

        .related-resources__header h2,
        .webinar-updates__content h2,
        .webinar-faq__header h2,
        .webinar-final-cta__content h2 {
          margin: 0;
          color: #111827;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
          text-wrap: balance;
        }

        .related-resources__header > p,
        .webinar-updates__content > p:not(.webinars-eyebrow),
        .webinar-faq__header > p,
        .webinar-final-cta__content > p {
          margin: 18px 0 0;
          color: var(--stepes-body);
          font-size: 18px;
          line-height: 1.68;
        }

        .related-resources__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .related-resource-item {
          min-width: 0;
          padding: 32px 32px 34px 0;
        }

        .related-resource-item:nth-child(2),
        .related-resource-item:nth-child(3),
        .related-resource-item:nth-child(5),
        .related-resource-item:nth-child(6) {
          padding-left: 32px;
          border-left: 1px solid var(--stepes-border);
        }

        .related-resource-item:nth-child(n + 4) {
          border-top: 1px solid var(--stepes-border);
        }

        .related-resource-item h3 {
          margin: 0;
          color: #182130;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.32;
          letter-spacing: -0.014em;
        }

        .related-resource-item p {
          margin: 12px 0 0;
          color: var(--stepes-body);
          font-size: 15px;
          line-height: 1.67;
        }

        .related-resource-item .webinars-editorial-link {
          margin-top: 18px;
          font-size: 14px;
        }

        /* Section 13: Webinar updates */
        .webinar-updates {
          padding: 96px 0;
          background: #f7f9fc;
          border-top: 1px solid var(--stepes-border);
          border-bottom: 1px solid var(--stepes-border);
        }

        .webinar-updates__panel {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(520px, 1.08fr);
          gap: 64px;
          align-items: center;
          padding: 56px 60px;
          border: 1px solid #eadbe2;
          border-radius: 30px;
          background:
            radial-gradient(circle at 0% 0%, rgba(193, 29, 99, 0.08), transparent 35%),
            linear-gradient(135deg, #fffafd 0%, #ffffff 62%);
          box-shadow: 0 20px 56px rgba(31, 39, 55, 0.06);
        }

        .webinar-updates__content {
          max-width: 520px;
        }

        .webinar-updates__note {
          margin: 20px 0 0;
          color: #2f3948;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.55;
        }

        .webinar-updates__form {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .webinar-form-field {
          display: grid;
          gap: 7px;
        }

        .webinar-form-field label {
          color: #374151;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
        }

        .webinar-form-field input {
          width: 100%;
          height: 50px;
          padding: 0 15px;
          border: 1px solid #d9dfe8;
          border-radius: 13px;
          color: #27303d;
          background: #ffffff;
          font: inherit;
          font-size: 15px;
          outline: none;
          transition: border-color 160ms ease, box-shadow 160ms ease;
        }

        .webinar-form-field input:focus {
          border-color: rgba(193, 29, 99, 0.68);
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.12);
        }

        .webinar-updates__form-footer {
          grid-column: 1 / -1;
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 4px;
        }

        .webinar-updates__consent {
          flex: 1;
          margin: 0;
          color: #697383;
          font-size: 12px;
          line-height: 1.55;
        }

        .webinar-updates__form .webinars-button {
          flex: 0 0 auto;
          border: 0;
          cursor: pointer;
        }

        /* Section 14: FAQ */
        .webinar-faq {
          padding: 96px 0;
          background: #ffffff;
        }

        .webinar-faq__layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.48fr);
          gap: 76px;
          align-items: start;
        }

        .webinar-faq__header {
          position: sticky;
          top: 28px;
          max-width: 410px;
        }

        .webinar-faq__header .webinars-editorial-link {
          margin-top: 24px;
        }

        .webinar-faq__list {
          border-top: 1px solid var(--stepes-border-strong);
          border-bottom: 1px solid var(--stepes-border-strong);
        }

        .webinar-faq__item + .webinar-faq__item {
          border-top: 1px solid var(--stepes-border);
        }

        .webinar-faq__item h3 {
          margin: 0;
        }

        .webinar-faq__question {
          width: 100%;
          min-height: 76px;
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 22px;
          align-items: center;
          padding: 20px 0;
          border: 0;
          color: #182130;
          background: transparent;
          text-align: left;
          font: inherit;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.45;
          cursor: pointer;
        }

        .webinar-faq__question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 5px;
        }

        .webinar-faq__toggle {
          width: 34px;
          height: 34px;
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          justify-self: end;
          border: 1px solid #e0d4da;
          border-radius: 50%;
          color: var(--stepes-accent-deep);
          background: #fffafd;
        }

        .webinar-faq__toggle::before,
        .webinar-faq__toggle::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 1.5px;
          border-radius: 2px;
          background: currentColor;
          transition: transform 180ms ease;
        }

        .webinar-faq__toggle::after {
          transform: rotate(90deg);
        }

        .webinar-faq__question[aria-expanded="true"] .webinar-faq__toggle::after {
          transform: rotate(0deg);
        }

        .webinar-faq__answer {
          max-width: 780px;
          padding: 0 66px 24px 0;
          color: var(--stepes-body);
          font-size: 16px;
          line-height: 1.72;
        }

        .webinar-faq__answer p {
          margin: 0;
        }

        /* Section 15: Final CTA */
        .webinar-final-cta {
          padding: 32px 0 96px;
          background: #ffffff;
        }

        .webinar-final-cta__panel {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 48px;
          align-items: center;
          padding: 58px 62px;
          border: 1px solid #eadbe2;
          border-radius: 30px;
          background:
            radial-gradient(circle at 100% 0%, rgba(193, 29, 99, 0.085), transparent 38%),
            linear-gradient(135deg, #fffafd 0%, #ffffff 66%);
          box-shadow: 0 20px 56px rgba(31, 39, 55, 0.06);
        }

        .webinar-final-cta__content {
          max-width: 790px;
        }

        .webinar-final-cta__content > p {
          max-width: 760px;
        }

        .webinar-final-cta__support {
          margin-top: 20px;
          color: #465162;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.55;
        }

        .webinar-final-cta__actions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 12px;
          min-width: 250px;
        }

        .webinar-final-cta__actions .webinars-button,
        .webinar-final-cta__actions .webinars-button:link,
        .webinar-final-cta__actions .webinars-button:visited {
          width: 100%;
        }


        @media (max-width: 1199px) {
          .webinars-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .featured-card {
            grid-template-columns: minmax(0, 1.02fr) minmax(390px, 0.98fr);
          }

          .featured-card__media {
            padding: 24px;
          }

          .featured-card__content {
            padding: 48px 44px 48px 20px;
          }

          .webinar-audiences__layout,
          .webinar-learning__layout {
            gap: 52px;
          }

          .expertise-item {
            grid-template-columns: minmax(125px, 0.4fr) minmax(230px, 0.72fr) minmax(0, 1.38fr);
            gap: 24px;
          }

          .private-workshop {
            grid-template-columns: minmax(0, 1fr) minmax(350px, 0.86fr);
          }

          .private-workshop__content {
            padding: 52px 48px 54px;
          }

          .private-workshop__benefits {
            padding: 48px 42px;
          }
        }

        @media (max-width: 900px) {
          .webinars-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .webinars-hero {
            padding: 92px 0 78px;
          }

          .webinars-hero h1 {
            max-width: 820px;
            font-size: 42px;
          }

          .webinars-trust__layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .webinars-trust__intro {
            padding: 0 0 22px;
            border-right: 0;
            border-bottom: 1px solid var(--stepes-border);
          }

          .webinars-trust__intro p {
            max-width: 680px;
          }

          .featured-webinar {
            padding: 80px 0;
          }

          .featured-webinar__header h2 {
            font-size: 32px;
          }

          .featured-card {
            grid-template-columns: 1fr;
          }

          .featured-card__media {
            padding: 24px 24px 0;
          }

          .featured-video-link {
            min-height: 460px;
          }

          .featured-card__content {
            padding: 42px 48px 50px;
          }

          .webinar-audiences,
          .webinar-experts,
          .webinar-learning,
          .webinar-private-workshop {
            padding: 80px 0;
          }

          .webinar-audiences__layout,
          .webinar-learning__layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .webinar-audiences__header {
            position: static;
            max-width: 760px;
          }

          .webinar-learning__header {
            max-width: 760px;
          }

          .webinar-audiences__header h2,
          .webinar-experts__header h2,
          .webinar-learning__header h2,
          .private-workshop__content h2 {
            font-size: 32px;
          }

          .webinar-experts__header {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .webinar-experts__header p:not(.webinars-eyebrow) {
            max-width: 760px;
          }

          .expertise-item {
            grid-template-columns: minmax(125px, 0.34fr) minmax(0, 1fr);
            gap: 10px 24px;
            align-items: start;
          }

          .expertise-item p:last-child {
            grid-column: 2;
          }

          .private-workshop {
            grid-template-columns: 1fr;
          }

          .private-workshop__benefits {
            border-top: 1px solid #eadbe2;
            border-left: 0;
          }
        }

        @media (max-width: 640px) {
          .webinars-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .webinars-hero {
            padding: 72px 0 64px;
          }

          .webinars-eyebrow {
            margin-bottom: 16px;
          }

          .webinars-hero h1 {
            width: 100%;
            font-size: 38px;
            line-height: 1.1;
          }

          .webinars-hero__lead {
            margin-top: 22px;
            font-size: 18px;
            line-height: 1.62;
          }

          .webinars-hero__actions {
            width: 100%;
            margin-top: 30px;
          }

          .webinars-hero__actions .webinars-button {
            width: 100%;
          }

          .webinars-hero__topics {
            gap: 8px 14px;
            margin-top: 34px;
          }

          .webinars-hero__topics span:not(:last-child)::after {
            right: -9px;
          }

          .webinars-hero__features {
            grid-template-columns: 1fr;
            gap: 0;
            margin-top: 38px;
            padding-top: 8px;
          }

          .hero-feature {
            justify-content: flex-start;
            min-height: 58px;
            padding: 10px 0;
            text-align: left;
          }

          .hero-feature + .hero-feature {
            border-top: 1px solid var(--stepes-border);
            border-left: 0;
          }

          .webinars-trust {
            padding: 30px 0;
          }

          .webinars-trust__grid {
            grid-template-columns: 1fr;
          }

          .trust-item {
            min-height: 52px;
            padding: 12px 0;
          }

          .trust-item:nth-child(2),
          .trust-item:nth-child(3),
          .trust-item:nth-child(5),
          .trust-item:nth-child(6) {
            border-left: 0;
          }

          .trust-item:nth-child(n + 2) {
            border-top: 1px solid var(--stepes-border);
          }

          .featured-webinar {
            padding: 72px 0;
          }

          .featured-webinar__header {
            margin-bottom: 28px;
          }

          .featured-webinar__header h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .featured-webinar__header p:not(.webinars-eyebrow) {
            font-size: 17px;
            line-height: 1.65;
          }

          .featured-card {
            border-radius: 24px;
          }

          .featured-card__media {
            padding: 14px 14px 0;
          }

          .featured-video-link {
            min-height: 340px;
            padding: 22px;
            border-radius: 19px;
          }

          .featured-video__top {
            align-items: flex-start;
          }

          .featured-video__play {
            width: 70px;
            height: 70px;
          }

          .featured-video__bottom {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .featured-video__title {
            font-size: 23px;
          }

          .featured-card__content {
            padding: 36px 26px 40px;
          }

          .featured-card__content h3 {
            font-size: 25px;
          }

          .featured-meta {
            display: grid;
            gap: 8px;
          }

          .featured-meta span + span::before {
            display: none;
          }

          .featured-card__actions {
            align-items: stretch;
          }

          .featured-card__actions .webinars-button {
            width: 100%;
          }

          .webinars-editorial-link {
            min-height: 44px;
            align-items: center;
            padding: 8px 0;
          }

          .webinar-audiences,
          .webinar-experts,
          .webinar-learning,
          .webinar-private-workshop {
            padding: 72px 0;
          }

          .webinar-audiences__header h2,
          .webinar-experts__header h2,
          .webinar-learning__header h2,
          .private-workshop__content h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .webinar-audiences__header p:not(.webinars-eyebrow),
          .webinar-experts__header p:not(.webinars-eyebrow),
          .webinar-learning__header p:not(.webinars-eyebrow),
          .private-workshop__content > p:not(.webinars-eyebrow) {
            font-size: 17px;
            line-height: 1.65;
          }

          .audience-grid,
          .learning-resource-grid {
            grid-template-columns: 1fr;
          }

          .audience-item,
          .audience-item:nth-child(even),
          .learning-resource-item,
          .learning-resource-item:nth-child(even) {
            padding: 27px 0 29px;
            border-left: 0;
          }

          .audience-item:nth-child(n + 2),
          .learning-resource-item:nth-child(n + 2) {
            border-top: 1px solid var(--stepes-border);
          }

          .expertise-item {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 25px 0 27px;
          }

          .expertise-item p:last-child {
            grid-column: auto;
          }

          .expertise-item h3 {
            margin-top: 2px;
          }

          .private-workshop {
            border-radius: 24px;
          }

          .private-workshop__content,
          .private-workshop__benefits {
            padding: 36px 26px 40px;
          }

          .private-workshop__actions {
            align-items: stretch;
          }

          .private-workshop__actions .webinars-button {
            width: 100%;
          }
        }

        @media (max-width: 390px) {
          .webinars-hero h1 {
            font-size: 36px;
          }

          .webinars-hero__topics {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 9px 12px;
            width: 100%;
          }

          .featured-video-link {
            min-height: 310px;
          }

          .webinars-hero__topics span:not(:last-child)::after {
            display: none;
          }

          .featured-video-link {
            min-height: 360px;
            padding: 19px;
          }

          .featured-video__badge {
            display: none;
          }

          .featured-video__center {
            top: 47%;
          }

          .featured-card__content {
            padding: 32px 22px 36px;
          }
        }


        @media (max-width: 1199px) {
          .webinar-filters {
            grid-template-columns: minmax(260px, 1.35fr) repeat(2, minmax(160px, 0.8fr));
          }

          .webinar-reset {
            justify-self: start;
          }

          .series-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .series-item:nth-child(3) {
            border-left: 0;
          }

          .series-item:nth-child(n + 3) {
            border-top: 1px solid var(--stepes-border-strong);
          }
        }

        @media (max-width: 900px) {
          .webinar-guidance,
          .webinar-topics,
          .webinar-library,
          .webinar-series {
            padding: 80px 0;
          }

          .webinar-guidance__header h2,
          .webinar-topics__header h2,
          .webinar-library__header h2,
          .webinar-series__header h2 {
            font-size: 32px;
          }

          .guidance-grid {
            grid-template-columns: 1fr;
          }

          .guidance-item {
            padding: 31px 24px 34px;
          }

          .guidance-item + .guidance-item {
            border-top: 1px solid var(--stepes-border);
            border-left: 0;
          }

          .webinar-topics__layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .webinar-topics__header {
            position: static;
            max-width: 740px;
          }

          .webinar-filters {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .webinar-search {
            grid-column: 1 / -1;
          }

          .webinar-reset {
            grid-column: 1 / -1;
            justify-self: stretch;
            text-align: center;
          }

          .webinar-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .webinar-guidance,
          .webinar-topics,
          .webinar-library,
          .webinar-series {
            padding: 72px 0;
          }

          .webinar-guidance__header,
          .webinar-library__header,
          .webinar-series__header {
            margin-bottom: 32px;
          }

          .webinar-guidance__header h2,
          .webinar-topics__header h2,
          .webinar-library__header h2,
          .webinar-series__header h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .webinar-guidance__header p:not(.webinars-eyebrow),
          .webinar-library__header p:not(.webinars-eyebrow),
          .webinar-series__header p:not(.webinars-eyebrow) {
            font-size: 17px;
            line-height: 1.65;
          }

          .guidance-item {
            padding: 28px 0 31px;
          }

          .topic-grid {
            grid-template-columns: 1fr;
          }

          .topic-item,
          .topic-item:nth-child(even) {
            padding: 27px 0 29px;
            border-left: 0;
          }

          .webinar-filters {
            grid-template-columns: 1fr;
            padding: 13px;
            border-radius: 18px;
          }

          .webinar-search input,
          .webinar-filter-select {
            height: 50px;
          }

          .webinar-reset {
            min-height: 44px;
            justify-self: stretch;
            text-align: center;
          }

          .webinar-library__status {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .webinar-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .webinar-card__media {
            min-height: 220px;
          }

          .series-grid {
            grid-template-columns: 1fr;
          }

          .series-item,
          .series-item:nth-child(3) {
            padding: 28px 0 31px;
            border-left: 0;
          }

          .series-item:nth-child(n + 2) {
            border-top: 1px solid var(--stepes-border-strong);
          }
        }

        @media (max-width: 390px) {
          .topic-item {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 15px;
          }

          .topic-item__icon {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .webinar-card__body {
            padding: 23px 21px 24px;
          }

          .webinar-card__footer {
            align-items: flex-start;
            flex-direction: column;
            gap: 12px;
          }

          .audience-item {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 15px;
          }

          .audience-item__icon {
            width: 42px;
            height: 42px;
            border-radius: 13px;
          }

          .learning-resource-item {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .learning-resource-item__icon {
            width: 40px;
            height: 40px;
            border-radius: 12px;
          }

          .private-workshop__content,
          .private-workshop__benefits {
            padding-right: 22px;
            padding-left: 22px;
          }
        }



        @media (max-width: 1199px) {
          .webinar-updates__panel {
            grid-template-columns: minmax(0, 0.86fr) minmax(460px, 1.14fr);
            gap: 48px;
            padding: 52px 48px;
          }

          .webinar-faq__layout {
            gap: 58px;
          }

          .webinar-final-cta__panel {
            padding: 54px 50px;
          }
        }

        @media (max-width: 900px) {
          .webinar-related-resources,
          .webinar-updates,
          .webinar-faq {
            padding: 80px 0;
          }

          .related-resources__header h2,
          .webinar-updates__content h2,
          .webinar-faq__header h2,
          .webinar-final-cta__content h2 {
            font-size: 32px;
          }

          .related-resources__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .related-resource-item:nth-child(3),
          .related-resource-item:nth-child(5) {
            padding-left: 0;
            border-left: 0;
          }

          .related-resource-item:nth-child(3),
          .related-resource-item:nth-child(4) {
            border-top: 1px solid var(--stepes-border);
          }

          .related-resource-item:nth-child(even) {
            padding-left: 30px;
            border-left: 1px solid var(--stepes-border);
          }

          .webinar-updates__panel,
          .webinar-faq__layout,
          .webinar-final-cta__panel {
            grid-template-columns: 1fr;
          }

          .webinar-updates__content {
            max-width: 760px;
          }

          .webinar-faq__layout {
            gap: 40px;
          }

          .webinar-faq__header {
            position: static;
            max-width: 760px;
          }

          .webinar-final-cta {
            padding-bottom: 80px;
          }

          .webinar-final-cta__actions {
            flex-direction: row;
            flex-wrap: wrap;
            min-width: 0;
          }

          .webinar-final-cta__actions .webinars-button {
            width: auto;
          }
        }

        @media (max-width: 640px) {
          .webinar-related-resources,
          .webinar-updates,
          .webinar-faq {
            padding: 72px 0;
          }

          .related-resources__header {
            margin-bottom: 30px;
          }

          .related-resources__header h2,
          .webinar-updates__content h2,
          .webinar-faq__header h2,
          .webinar-final-cta__content h2 {
            font-size: 30px;
            line-height: 1.2;
          }

          .related-resources__header > p,
          .webinar-updates__content > p:not(.webinars-eyebrow),
          .webinar-faq__header > p,
          .webinar-final-cta__content > p {
            font-size: 17px;
            line-height: 1.65;
          }

          .related-resources__grid {
            grid-template-columns: 1fr;
          }

          .related-resource-item,
          .related-resource-item:nth-child(2),
          .related-resource-item:nth-child(3),
          .related-resource-item:nth-child(4),
          .related-resource-item:nth-child(5),
          .related-resource-item:nth-child(6),
          .related-resource-item:nth-child(even) {
            padding: 27px 0 29px;
            border-left: 0;
          }

          .related-resource-item:nth-child(n + 2) {
            border-top: 1px solid var(--stepes-border);
          }

          .webinar-updates__panel,
          .webinar-final-cta__panel {
            padding: 36px 26px 40px;
            border-radius: 24px;
          }

          .webinar-updates__form {
            grid-template-columns: 1fr;
            margin-top: 4px;
          }

          .webinar-updates__form-footer {
            align-items: stretch;
            flex-direction: column;
            gap: 14px;
          }

          .webinar-updates__form .webinars-button {
            width: 100%;
          }

          .webinar-faq__question {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 16px;
            min-height: 72px;
            padding: 18px 0;
            font-size: 17px;
          }

          .webinar-faq__toggle {
            width: 32px;
            height: 32px;
          }

          .webinar-faq__answer {
            padding: 0 48px 22px 0;
          }

          .webinar-final-cta {
            padding: 16px 0 72px;
          }

          .webinar-final-cta__actions {
            align-items: stretch;
            flex-direction: column;
          }

          .webinar-final-cta__actions .webinars-button {
            width: 100%;
          }
        }

        @media (max-width: 390px) {
          .webinar-updates__panel,
          .webinar-final-cta__panel {
            padding-right: 22px;
            padding-left: 22px;
          }

          .webinar-faq__answer {
            padding-right: 0;
          }
        }


        @media (prefers-reduced-motion: reduce) {
          .stepes-webinars *,
          .stepes-webinars *::before,
          .stepes-webinars *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      {/* 1. Hero */}
      <section className="webinars-hero" aria-labelledby="webinars-page-title">
        <div className="webinars-shell webinars-hero__inner">
          <h1 id="webinars-page-title">
            On-Demand Webinars for Translation, Localization, and Global Content
          </h1>
          <p className="webinars-hero__lead">
            Explore expert-led sessions on AI translation, multilingual quality,
            localization strategy, language technology, regulated content, and scalable
            global content operations. Access practical guidance whenever it fits your
            schedule—and apply it across your organization.
          </p>

          <div className="webinars-hero__actions" aria-label="Webinar page actions">
            <a
              className="webinars-button webinars-button--primary"
              href="https://www.stepes.com/resources/webinars/#webinar-library"
            >
              Browse All Webinars
              <ArrowIcon />
            </a>
            <a
              className="webinars-button webinars-button--secondary"
              href="https://www.stepes.com/resources/webinars/#featured-webinar"
            >
              Watch the Featured Webinar
              <ArrowIcon />
            </a>
          </div>

          <div className="webinars-hero__topics" aria-label="Webinar topics">
            <span>AI Translation</span>
            <span>Quality &amp; Governance</span>
            <span>Localization Technology</span>
            <span>Regulated Content</span>
          </div>

          <div className="webinars-hero__features">
            {heroFeatures.map((feature) => (
              <div className="hero-feature" key={feature.label}>
                <span className="hero-feature__icon">{feature.icon}</span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Trust strip */}
      <section className="webinars-trust" aria-label="Stepes webinar expertise and credentials">
        <div className="webinars-shell webinars-trust__layout">
          <div className="webinars-trust__intro">
            <p>
              Practical insights from a global translation and localization partner
              supporting enterprise content across more than 100 languages.
            </p>
          </div>
          <div className="webinars-trust__grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured webinar */}
      <section
        className="featured-webinar"
        id="featured-webinar"
        aria-labelledby="featured-webinar-title"
      >
        <div className="webinars-shell">
          <header className="featured-webinar__header">
            <p className="webinars-eyebrow">Featured Webinar</p>
            <h2 id="featured-webinar-title">
              Practical Guidance for Enterprise AI Translation
            </h2>
            <p>
              Start with a focused expert briefing on the controls, workflows, and
              governance needed to turn AI-generated translations into dependable
              multilingual content.
            </p>
          </header>

          <article className="featured-card">
            <div className="featured-card__media">
              <a
                className="featured-video-link"
                href="https://www.stepes.com/resources/webinars/from-ai-output-to-enterprise-ready-translation/"
                aria-label="Watch From AI Output to Enterprise-Ready Translation"
              >
                <div className="featured-video__top">
                  <span className="featured-video__series">
                    Stepes AI Translation Briefings
                  </span>
                  <span className="featured-video__badge">On Demand</span>
                </div>

                <div className="featured-video__center">
                  <span className="featured-video__play">
                    <PlayIcon />
                  </span>
                  <span className="featured-video__watch">Watch Webinar</span>
                </div>

                <div className="featured-video__bottom">
                  <h3 className="featured-video__title">
                    From AI Output to Enterprise-Ready Translation
                  </h3>
                  <span className="featured-video__duration">
                    <ClockIcon />
                    32 min
                  </span>
                </div>
              </a>
            </div>

            <div className="featured-card__content">
              <p className="webinars-eyebrow">AI Translation · Expert Briefing</p>
              <h3>From AI Output to Enterprise-Ready Translation</h3>
              <p className="featured-card__summary">
                Learn how model selection, terminology controls, human validation,
                quality measurement, and governance work together to produce accurate,
                consistent, secure, and business-ready multilingual content.
              </p>

              <div className="featured-meta" aria-label="Webinar details">
                <span>On-Demand Expert Briefing</span>
                <span>
                  <ClockIcon />
                  32 minutes
                </span>
              </div>

              <div className="featured-learning">
                <p className="featured-learning__label">What You Will Learn</p>
                <ul>
                  {learningOutcomes.map((outcome) => (
                    <li key={outcome}>
                      <CheckIcon />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="featured-card__actions">
                <a
                  className="webinars-button webinars-button--primary"
                  href="https://www.stepes.com/resources/webinars/from-ai-output-to-enterprise-ready-translation/"
                >
                  Watch the Webinar
                  <ArrowIcon />
                </a>
                <a
                  className="webinars-editorial-link"
                  href="https://www.stepes.com/resources/ai-translation-insights/"
                >
                  Explore AI Translation Insights
                  <ArrowIcon size={16} />
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* 4. Expert guidance */}
      <section className="webinar-guidance" aria-labelledby="webinar-guidance-title">
        <div className="webinars-shell">
          <header className="webinar-guidance__header">
            <h2 id="webinar-guidance-title">Expert Guidance, Available When You Need It</h2>
            <p>
              Translation and localization decisions increasingly affect customer experience,
              regulatory readiness, product delivery, brand consistency, and global growth.
              Stepes webinars turn complex multilingual challenges into practical guidance for
              enterprise teams.
            </p>
          </header>

          <div className="guidance-grid">
            {guidancePillars.map((pillar) => (
              <article className="guidance-item" key={pillar.title}>
                <p className="guidance-item__label">{pillar.label}</p>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Browse webinars by topic */}
      <section className="webinar-topics" aria-labelledby="webinar-topics-title">
        <div className="webinars-shell webinar-topics__layout">
          <header className="webinar-topics__header">
            <p className="webinars-eyebrow">Browse by Topic</p>
            <h2 id="webinar-topics-title">Find Guidance for Your Global Content Priorities</h2>
            <p>
              Explore expert sessions by subject to find practical perspectives relevant to
              your technology, content, industry, and business objectives.
            </p>
          </header>

          <div className="topic-grid">
            {webinarTopics.map((topic) => (
              <article className="topic-item" key={topic.title}>
                <span className="topic-item__icon">
                  <TopicIcon type={topic.icon} />
                </span>
                <div>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                  <a className="webinars-editorial-link" href={topic.href}>
                    {topic.linkLabel}
                    <ArrowIcon size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. On-demand webinar library */}
      <section
        className="webinar-library"
        id="webinar-library"
        aria-labelledby="webinar-library-title"
      >
        <div className="webinars-shell">
          <header className="webinar-library__header">
            <h2 id="webinar-library-title">Explore Translation and Localization Webinars</h2>
            <p>
              Search the Stepes webinar library for expert guidance on AI translation,
              localization operations, multilingual technology, translation quality, global
              content strategy, and regulated content.
            </p>
          </header>

          <div className="webinar-filters" role="group" aria-label="Filter webinars">
            <label className="webinar-search">
              <span className="sr-only">Search webinars</span>
              <SearchIcon />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => {
                  setSearchQuery(event.target.value);
                  setShowAllWebinars(false);
                }}
                placeholder="Search webinars"
              />
            </label>

            <select
              className="webinar-filter-select"
              aria-label="Filter by topic"
              value={topicFilter}
              onChange={(event) => {
                setTopicFilter(event.target.value);
                setShowAllWebinars(false);
              }}
            >
              {topicOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <select
              className="webinar-filter-select"
              aria-label="Filter by industry"
              value={industryFilter}
              onChange={(event) => {
                setIndustryFilter(event.target.value);
                setShowAllWebinars(false);
              }}
            >
              {industryOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <select
              className="webinar-filter-select"
              aria-label="Filter by business role"
              value={audienceFilter}
              onChange={(event) => {
                setAudienceFilter(event.target.value);
                setShowAllWebinars(false);
              }}
            >
              {audienceOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <select
              className="webinar-filter-select"
              aria-label="Filter by session type"
              value={sessionFilter}
              onChange={(event) => {
                setSessionFilter(event.target.value);
                setShowAllWebinars(false);
              }}
            >
              {sessionOptions.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>

            <button className="webinar-reset" type="button" onClick={resetFilters}>
              Reset Filters
            </button>
          </div>

          <div className="webinar-library__status" aria-live="polite">
            <span>
              <strong>{filteredWebinars.length}</strong>{" "}
              {filteredWebinars.length === 1 ? "webinar" : "webinars"} available
            </span>
            <span>
              {activeSeries ? `${activeSeries.title} · ` : ""}
              On-demand access · Transcripts and key takeaways
            </span>
          </div>

          <div className="webinar-grid">
            {visibleWebinars.length > 0 ? (
              visibleWebinars.map((webinar) => (
                <article className="webinar-card" key={webinar.title}>
                  <a
                    className={`webinar-card__media webinar-card__media--${webinar.tone}`}
                    href={webinar.href}
                    aria-label={`Watch ${webinar.title}`}
                  >
                    <span className="webinar-card__media-top">
                      <span className="webinar-card__topic">{webinar.topic}</span>
                      <span className="webinar-card__ondemand">On Demand</span>
                    </span>
                    <span className="webinar-card__play">
                      <PlayIcon size={22} />
                    </span>
                  </a>

                  <div className="webinar-card__body">
                    <p className="webinar-card__type">{webinar.sessionType}</p>
                    <h3>
                      <a className="webinar-card__title-link" href={webinar.href}>
                        {webinar.title}
                      </a>
                    </h3>
                    <p className="webinar-card__description">{webinar.description}</p>
                    <div className="webinar-card__footer">
                      <span className="webinar-card__duration">
                        <ClockIcon />
                        {webinar.duration}
                      </span>
                      <a className="webinars-editorial-link" href={webinar.href}>
                        Watch Webinar
                        <ArrowIcon size={16} />
                      </a>
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <div className="webinar-library__empty">
                <h3>No webinars match these filters</h3>
                <p>
                  Reset the filters or try a broader search to explore more translation and
                  localization sessions.
                </p>
              </div>
            )}
          </div>

          {!showAllWebinars && !filtersActive && filteredWebinars.length > 6 && (
            <div className="webinar-library__load">
              <button
                className="webinar-load-more"
                type="button"
                onClick={() => setShowAllWebinars(true)}
              >
                Load More Webinars
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 7. Signature webinar series */}
      <section className="webinar-series" aria-labelledby="webinar-series-title">
        <div className="webinars-shell">
          <header className="webinar-series__header">
            <p className="webinars-eyebrow">Signature Webinar Series</p>
            <h2 id="webinar-series-title">Build Expertise Through Connected Sessions</h2>
            <p>
              Choose a focused series and follow related sessions on the strategic, operational,
              technical, and regulatory challenges shaping global content programs.
            </p>
          </header>

          <div className="series-grid">
            {webinarSeries.map((series) => (
              <article className="series-item" key={series.title}>
                <p className="series-item__label">{series.label}</p>
                <h3>{series.title}</h3>
                <p>{series.description}</p>
                <a className="webinars-editorial-link" href={series.href}>
                  Explore {series.title}
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* 8. Find webinars for your role */}
      <section className="webinar-audiences" aria-labelledby="webinar-audiences-title">
        <div className="webinars-shell webinar-audiences__layout">
          <header className="webinar-audiences__header">
            <p className="webinars-eyebrow">Webinars by Role</p>
            <h2 id="webinar-audiences-title">Guidance for Every Global Content Stakeholder</h2>
            <p>
              Translation and localization programs succeed when teams across the organization
              share clear goals, processes, and quality expectations. Explore sessions shaped
              around the priorities of your role.
            </p>
          </header>

          <div className="audience-grid">
            {webinarAudiences.map((audience) => (
              <article className="audience-item" key={audience.title}>
                <span className="audience-item__icon">
                  <RoleIcon type={audience.icon} />
                </span>
                <div>
                  <h3>{audience.title}</h3>
                  <p>{audience.description}</p>
                  <a className="webinars-editorial-link" href={audience.href}>
                    {audience.linkLabel}
                    <ArrowIcon size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Learn from experts */}
      <section className="webinar-experts" aria-labelledby="webinar-experts-title">
        <div className="webinars-shell">
          <header className="webinar-experts__header">
            <div>
              <h2 id="webinar-experts-title">Practical Expertise Across the Localization Lifecycle</h2>
            </div>
            <p>
              Stepes webinars bring together professionals who understand the strategic,
              technical, linguistic, and operational dimensions of global content—from AI
              translation and quality governance to regulated workflows and multilingual delivery.
            </p>
          </header>

          <div className="expertise-list">
            {webinarExperts.map((expert) => (
              <article className="expertise-item" key={expert.title}>
                <p className="expertise-item__label">{expert.label}</p>
                <h3>{expert.title}</h3>
                <p>{expert.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. More than a video library */}
      <section className="webinar-learning" aria-labelledby="webinar-learning-title">
        <div className="webinars-shell webinar-learning__layout">
          <header className="webinar-learning__header">
            <p className="webinars-eyebrow">Built for Practical Learning</p>
            <h2 id="webinar-learning-title">More Than a Video Library</h2>
            <p>
              Each Stepes webinar page helps you find, understand, and apply the information
              that matters to your organization—not simply watch a recording.
            </p>
          </header>

          <div className="learning-resource-grid">
            {webinarLearningResources.map((resource) => (
              <article className="learning-resource-item" key={resource.title}>
                <span className="learning-resource-item__icon">
                  <LearningResourceIcon type={resource.icon} />
                </span>
                <div>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Private workshops */}
      <section className="webinar-private-workshop" aria-labelledby="private-workshop-title">
        <div className="webinars-shell">
          <div className="private-workshop">
            <div className="private-workshop__content">
              <p className="webinars-eyebrow">Private Enterprise Workshops</p>
              <h2 id="private-workshop-title">Bring the Conversation to Your Organization</h2>
              <p>
                Some localization challenges require a discussion centered on your content,
                systems, stakeholders, markets, and risk requirements. Stepes can provide private
                briefings and working sessions on AI translation, multilingual quality,
                localization technology, global content operations, and regulated workflows.
              </p>

              <div className="private-workshop__actions">
                <a
                  className="webinars-button webinars-button--primary"
                  href="https://www.stepes.com/contact-us/"
                >
                  Request a Private Workshop
                  <ArrowIcon />
                </a>
                <a
                  className="webinars-editorial-link"
                  href="https://www.stepes.com/enterprise-translation-management/"
                >
                  Explore Enterprise Translation Management
                  <ArrowIcon size={16} />
                </a>
              </div>
            </div>

            <aside className="private-workshop__benefits" aria-label="Private workshop outcomes">
              <h3>A Private Session Can Help Your Team</h3>
              <ul>
                {privateWorkshopBenefits.map((benefit) => (
                  <li key={benefit}>
                    <CheckIcon />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>


      {/* 12. Related resources */}
      <section className="webinar-related-resources" aria-labelledby="related-resources-title">
        <div className="webinars-shell">
          <header className="related-resources__header">
            <h2 id="related-resources-title">Continue Exploring Stepes Resources</h2>
            <p>
              Expand your research with practical guides, customer examples, expert analysis,
              and in-depth resources covering translation, localization, quality, technology,
              and global content strategy.
            </p>
          </header>

          <div className="related-resources__grid">
            {relatedResources.map((resource) => (
              <article className="related-resource-item" key={resource.title}>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a className="webinars-editorial-link" href={resource.href}>
                  {resource.linkLabel}
                  <ArrowIcon size={16} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Webinar updates */}
      <section className="webinar-updates" aria-labelledby="webinar-updates-title">
        <div className="webinars-shell">
          <div className="webinar-updates__panel">
            <div className="webinar-updates__content">
              <p className="webinars-eyebrow">New Expert Sessions</p>
              <h2 id="webinar-updates-title">Stay Informed About New Stepes Webinars</h2>
              <p>
                Receive announcements when Stepes publishes new sessions on AI translation,
                localization technology, multilingual quality, regulated content, and global
                content strategy.
              </p>
              <p className="webinar-updates__note">
                No event overload—just practical multilingual insights and new on-demand sessions.
              </p>
            </div>

            <form
              className="webinar-updates__form"
              onSubmit={(event) => event.preventDefault()}
              aria-label="Subscribe to webinar updates"
            >
              <div className="webinar-form-field">
                <label htmlFor="webinar-first-name">First Name</label>
                <input id="webinar-first-name" name="firstName" type="text" autoComplete="given-name" required />
              </div>
              <div className="webinar-form-field">
                <label htmlFor="webinar-last-name">Last Name</label>
                <input id="webinar-last-name" name="lastName" type="text" autoComplete="family-name" required />
              </div>
              <div className="webinar-form-field">
                <label htmlFor="webinar-email">Business Email</label>
                <input id="webinar-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="webinar-form-field">
                <label htmlFor="webinar-company">Company</label>
                <input id="webinar-company" name="company" type="text" autoComplete="organization" required />
              </div>
              <div className="webinar-updates__form-footer">
                <p className="webinar-updates__consent">
                  By submitting this form, you agree to receive relevant Stepes resources and
                  webinar updates. You may unsubscribe at any time.
                </p>
                <button className="webinars-button webinars-button--primary" type="submit">
                  Subscribe to Webinar Updates
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 14. FAQ */}
      <section className="webinar-faq" aria-labelledby="webinar-faq-title">
        <div className="webinars-shell webinar-faq__layout">
          <header className="webinar-faq__header">
            <h2 id="webinar-faq-title">Translation and Localization Webinar FAQ</h2>
            <p>
              Find answers about on-demand access, topics, transcripts, technology demonstrations,
              and private sessions for enterprise teams.
            </p>
            <a className="webinars-editorial-link" href="https://www.stepes.com/contact-us/">
              Contact the Stepes Team
              <ArrowIcon size={16} />
            </a>
          </header>

          <div className="webinar-faq__list">
            {webinarFaqs.map((faq, index) => {
              const isOpen = openFaq === index;
              const answerId = `webinar-faq-answer-${index}`;

              return (
                <article className="webinar-faq__item" key={faq.question}>
                  <h3>
                    <button
                      className="webinar-faq__question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="webinar-faq__toggle" aria-hidden="true" />
                    </button>
                  </h3>
                  {isOpen && (
                    <div className="webinar-faq__answer" id={answerId}>
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <section className="webinar-final-cta" aria-labelledby="webinar-final-cta-title">
        <div className="webinars-shell">
          <div className="webinar-final-cta__panel">
            <div className="webinar-final-cta__content">
              <h2 id="webinar-final-cta-title">
                Turn Webinar Insights Into a Practical Global Content Strategy
              </h2>
              <p>
                Every organization has a different mix of content, technology, languages,
                stakeholders, quality expectations, and business priorities. Speak with a Stepes
                expert about how AI translation, professional linguists, localization technology,
                and enterprise governance can support your global content goals.
              </p>
              <p className="webinar-final-cta__support">
                Build faster, more reliable multilingual workflows with the right combination of
                technology, language expertise, and global content strategy.
              </p>
            </div>

            <div className="webinar-final-cta__actions">
              <a
                className="webinars-button webinars-button--primary"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to a Stepes Expert
                <ArrowIcon />
              </a>
              <a
                className="webinars-button webinars-button--secondary"
                href="https://www.stepes.com/resources/"
              >
                Explore the Resource Center
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
