import React from "react";

const PAGE_URL = "https://www.stepes.com/resources/research-reports/";
const CASE_STUDIES_URL = "https://www.stepes.com/resources/case-studies/";

const heroValues = [
  {
    title: "Evaluate AI Translation",
    text: "Compare automation, human validation, and professional translation requirements based on content risk.",
  },
  {
    title: "Strengthen Quality Governance",
    text: "Establish terminology, quality thresholds, review roles, and approval controls for multilingual content.",
  },
  {
    title: "Plan Global Content Operations",
    text: "Align technology, workflows, vendors, and stakeholders around scalable localization delivery.",
  },
  {
    title: "Build the Business Case",
    text: "Connect translation investment to speed, quality, reuse, risk reduction, and international growth.",
  },
];

const supportingReports = [
  {
    type: "Technical Report",
    title: "Measuring Translation Quality in the Age of Generative AI",
    description:
      "Evaluate AI-generated and human-produced translation through structured error categories, severity levels, terminology requirements, and content-specific quality thresholds.",
    topics: ["Translation Quality", "AI Evaluation", "Linguistic Validation"],
    href: `${PAGE_URL}measuring-ai-translation-quality/`,
    linkLabel: "Explore the Technical Report",
  },
  {
    type: "Executive Brief",
    title: "Security and Governance for Multilingual AI Workflows",
    description:
      "Address data handling, model selection, confidentiality, human oversight, auditability, and approval authority before scaling AI-enabled translation.",
    topics: ["AI Governance", "Security", "Compliance"],
    href: `${PAGE_URL}multilingual-ai-security-governance/`,
    linkLabel: "Read the Executive Brief",
  },
];

const researchPrinciples = [
  {
    icon: "evidence",
    title: "Evidence and Analysis",
    text: "Our publications bring together documented sources, industry practices, structured analysis, and insights from enterprise translation and localization workflows.",
  },
  {
    icon: "framework",
    title: "Practical Frameworks",
    text: "Research is translated into risk matrices, maturity models, evaluation criteria, quality scorecards, and recommendations that support real decisions.",
  },
  {
    icon: "enterprise",
    title: "Enterprise Context",
    text: "Reports consider the needs of localization, product, engineering, marketing, security, legal, procurement, quality, and executive stakeholders.",
  },
  {
    icon: "methodology",
    title: "Transparent Methodology",
    text: "Substantive publications identify their assumptions, analytical methods, referenced standards, data limitations, and publication dates.",
  },
];


const publicationTypes = [
  {
    type: "White Papers",
    description:
      "In-depth analysis of enterprise translation technology, governance, quality, security, operating models, and global content strategy.",
    href: `${PAGE_URL}?type=white-papers#latest-research`,
    linkLabel: "View White Papers",
  },
  {
    type: "Benchmark Reports",
    description:
      "Comparative findings, operational metrics, program indicators, and industry benchmarks for evaluating multilingual performance.",
    href: `${PAGE_URL}?type=benchmark-reports#latest-research`,
    linkLabel: "View Benchmark Reports",
  },
  {
    type: "Research Studies",
    description:
      "Original analysis based on surveys, structured interviews, anonymized workflow data, linguistic evaluation, or other defined research methods.",
    href: `${PAGE_URL}?type=research-studies#latest-research`,
    linkLabel: "View Research Studies",
  },
  {
    type: "Executive Briefs",
    description:
      "Focused decision support for business leaders, procurement teams, security stakeholders, technology executives, and localization program owners.",
    href: `${PAGE_URL}?type=executive-briefs#latest-research`,
    linkLabel: "View Executive Briefs",
  },
  {
    type: "Technical Reports",
    description:
      "Detailed examinations of AI model evaluation, translation quality, APIs, terminology, translation memory, automation, and localization architecture.",
    href: `${PAGE_URL}?type=technical-reports#latest-research`,
    linkLabel: "View Technical Reports",
  },
];

const latestReports = [
  {
    type: "White Paper",
    title: "The Enterprise Localization Operating Model",
    description:
      "Compare centralized, decentralized, and hybrid localization models across stakeholder ownership, workflow governance, vendor strategy, terminology, quality, and budget management.",
    audience: "Localization leaders, global content teams, product organizations, and executive sponsors",
    topics: ["Localization Strategy", "Governance", "Global Operations"],
    href: `${PAGE_URL}enterprise-localization-operating-model/`,
    linkLabel: "Read the White Paper",
  },
  {
    type: "Executive Brief",
    title: "Building the Business Case for Enterprise Translation",
    description:
      "Look beyond per-word pricing to evaluate total cost of ownership, reuse, automation, review effort, quality failures, launch speed, and customer experience.",
    audience: "Procurement, finance, localization, operations, and executive stakeholders",
    topics: ["Translation ROI", "Procurement", "Business Strategy"],
    href: `${PAGE_URL}enterprise-translation-business-case/`,
    linkLabel: "Read the Executive Brief",
  },
  {
    type: "Executive Brief",
    title: "Evaluating AI Translation Platforms and Providers",
    description:
      "Compare AI translation platforms, language service providers, and hybrid AI-plus-human solutions across models, terminology, integration, security, quality, and enterprise scale.",
    audience: "Localization, technology, procurement, security, and product teams",
    topics: ["Translation Technology", "AI Models", "Vendor Evaluation"],
    href: `${PAGE_URL}evaluating-ai-translation-platforms/`,
    linkLabel: "Read the Executive Brief",
  },
];

const researchTopics = [
  {
    icon: "ai",
    title: "AI Translation and Human Validation",
    description:
      "AI models, content-risk classification, linguistic validation, human review strategies, and scalable AI-plus-human workflows.",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
    linkLabel: "Explore AI Translation Insights",
  },
  {
    icon: "quality",
    title: "Translation Quality and Governance",
    description:
      "Quality requirements, error classification, terminology, approval authority, and the connection between linguistic quality and business risk.",
    href: "https://www.stepes.com/resources/translation-quality/",
    linkLabel: "Explore Quality & Governance",
  },
  {
    icon: "localization",
    title: "Localization Strategy and Operations",
    description:
      "Operating models, stakeholder ownership, vendor management, continuous localization, program maturity, and workflow optimization.",
    href: "https://www.stepes.com/resources/localization-guides/",
    linkLabel: "Explore Localization Guides",
  },
  {
    icon: "content",
    title: "Global Content Strategy",
    description:
      "How global organizations plan, create, govern, reuse, and adapt content while maintaining brand consistency and local relevance.",
    href: "https://www.stepes.com/resources/global-content-strategy/",
    linkLabel: "Explore Global Content Strategy",
  },
  {
    icon: "security",
    title: "Security and Compliance",
    description:
      "Security, confidentiality, access control, data governance, auditability, and compliance across enterprise translation workflows.",
    href: "https://www.stepes.com/security-and-compliance/",
    linkLabel: "Explore Security & Compliance",
  },
  {
    icon: "technology",
    title: "Translation Technology and Integration",
    description:
      "Translation APIs, enterprise management, terminology systems, translation memory, workflow automation, and connected content operations.",
    href: `${PAGE_URL}?topic=translation-technology#latest-research`,
    linkLabel: "Explore Technology Research",
  },
  {
    icon: "regulated",
    title: "Regulated and High-Risk Content",
    description:
      "Quality, validation, security, documentation, and approval requirements for life sciences, medical devices, financial, legal, and other regulated content.",
    href: `${PAGE_URL}?topic=regulated-content#latest-research`,
    linkLabel: "Explore Regulated Content Research",
  },
];

const researchFindings = [
  {
    title: "Translation Workflows Should Be Based on Content Risk",
    text: "A single AI translation policy is rarely appropriate for every type of enterprise content. Workflow requirements should reflect the consequences of inaccurate, incomplete, culturally inappropriate, or noncompliant translation.",
    related: "A Risk-Based Framework for Enterprise AI Translation",
    href: `${PAGE_URL}risk-based-enterprise-ai-translation/`,
  },
  {
    title: "Fluency Is Not the Same as Translation Quality",
    text: "AI-generated translations can sound natural while still containing terminology errors, omissions, altered meaning, unsupported additions, or subtle inaccuracies that require structured evaluation.",
    related: "Measuring Translation Quality in the Age of Generative AI",
    href: `${PAGE_URL}measuring-ai-translation-quality/`,
  },
  {
    title: "Error Severity Should Reflect Business Impact",
    text: "A stylistic preference and a mistranslated warning do not carry the same risk. Connecting error severity to user, regulatory, and business impact makes quality measurement more useful.",
    related: "Measuring Translation Quality in the Age of Generative AI",
    href: `${PAGE_URL}measuring-ai-translation-quality/`,
  },
  {
    title: "Terminology Becomes More Important as Automation Expands",
    text: "Approved terms, product names, brand language, and domain definitions help improve consistency across AI models, translation memory, linguists, workflows, and content channels.",
    related: "Terminology Management",
    relatedLabel: "Related Resource",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    title: "Governance Must Extend Beyond Model Selection",
    text: "Enterprise programs also need policies for data handling, user access, human review, quality thresholds, approval authority, auditability, and ongoing performance monitoring.",
    related: "Security and Governance for Multilingual AI Workflows",
    href: `${PAGE_URL}multilingual-ai-security-governance/`,
  },
  {
    title: "Translation Performance Should Be Measured Across Multiple Dimensions",
    text: "Per-word cost alone does not capture modern localization performance. Quality, turnaround, reuse, operational effort, release readiness, scalability, and business impact all matter.",
    related: "Building the Business Case for Enterprise Translation",
    href: `${PAGE_URL}enterprise-translation-business-case/`,
  },
];


const researchStandards = [
  {
    title: "Source Integrity",
    text: "Reports identify the principal sources, standards, industry references, operational observations, or datasets used to support the analysis and distinguish established evidence from expert interpretation.",
  },
  {
    title: "Defined Methodology",
    text: "Original studies explain how information was collected and analyzed, including relevant sample criteria, evaluation methods, scoring systems, time periods, and limitations.",
  },
  {
    title: "Expert Contribution",
    text: "Publications identify authors, contributing experts, linguistic reviewers, technology specialists, or industry subject-matter experts when their participation informs the research.",
  },
  {
    title: "Anonymization and Confidentiality",
    text: "Examples or findings derived from enterprise workflows are anonymized and aggregated where necessary to protect customer information, confidential content, and proprietary data.",
  },
  {
    title: "Version and Publication Governance",
    text: "Reports display their publication date and, when updated, a revision date or version history so readers can distinguish current findings from earlier analysis.",
  },
  {
    title: "Commercial Transparency",
    text: "When Stepes technology or professional translation experience informs a conclusion, that context is stated clearly and claims are not presented as independent findings without appropriate support.",
  },
];

const roleResearch = [
  {
    title: "Localization Leaders",
    description:
      "Develop stronger operating models, quality frameworks, terminology programs, technology strategies, vendor relationships, and governance practices.",
    topics: ["Localization operating models", "AI risk classification", "Quality and terminology governance"],
    href: `${PAGE_URL}?topic=localization-strategy#latest-research`,
    linkLabel: "Explore Localization Research",
  },
  {
    title: "Product and Engineering Teams",
    description:
      "Build localization into product development, software releases, content systems, APIs, and continuous delivery workflows.",
    topics: ["Continuous localization", "Translation APIs and integration", "Multilingual quality at release speed"],
    href: "https://www.stepes.com/solutions/product-engineering-teams/",
    linkLabel: "Product & Engineering Solutions",
  },
  {
    title: "Marketing and Content Teams",
    description:
      "Plan and govern multilingual content that preserves brand meaning while supporting local relevance, campaign speed, and content reuse.",
    topics: ["Global content strategy", "Multilingual brand governance", "Marketing translation quality"],
    href: "https://www.stepes.com/solutions/marketing-teams/",
    linkLabel: "Marketing Team Solutions",
  },
  {
    title: "Procurement Leaders",
    description:
      "Evaluate translation providers, technology models, pricing structures, service levels, quality commitments, and total cost of ownership.",
    topics: ["Supplier evaluation", "Translation cost and ROI", "Service levels and quality metrics"],
    href: "https://www.stepes.com/solutions/procurement-teams/",
    linkLabel: "Procurement Team Solutions",
  },
  {
    title: "Security, Legal, and Compliance Teams",
    description:
      "Assess data handling, confidentiality, AI governance, approval controls, auditability, and the requirements of sensitive or regulated content.",
    topics: ["Multilingual AI security", "Data access and auditability", "Regulated translation workflows"],
    href: "https://www.stepes.com/security-and-compliance/",
    linkLabel: "Security & Compliance",
  },
  {
    title: "Executive Stakeholders",
    description:
      "Connect translation and localization investments to global growth, customer experience, risk management, and operational performance.",
    topics: ["Enterprise business cases", "Localization operating models", "Global content performance"],
    href: `${PAGE_URL}enterprise-translation-business-case/`,
    linkLabel: "Enterprise Translation Business Case",
  },
];

const caseStudyApplications = [
  {
    icon: "ai",
    title: "AI Translation and Human Validation",
    text: "See how organizations combine automation with professional linguistic review to increase translation speed while maintaining the quality their content requires.",
  },
  {
    icon: "technology",
    title: "Enterprise Workflow Automation",
    text: "Explore how connected translation workflows, APIs, terminology, and translation memory reduce manual effort and support scalable global operations.",
  },
  {
    icon: "regulated",
    title: "Regulated and High-Risk Translation",
    text: "Learn how organizations manage subject-matter expertise, validation, documentation, security, and approval requirements for sensitive multilingual content.",
  },
  {
    icon: "content",
    title: "Global Product and Content Localization",
    text: "See how companies localize software, websites, documentation, marketing assets, and digital experiences for international audiences.",
  },
];

const relatedResources = [
  {
    title: "AI Translation Insights",
    description: "AI models, human validation, enterprise workflows, quality risks, security, and governance.",
    href: "https://www.stepes.com/resources/ai-translation-insights/",
  },
  {
    title: "Translation Quality & Governance",
    description: "Frameworks for defining, measuring, managing, and improving multilingual quality.",
    href: "https://www.stepes.com/resources/translation-quality/",
  },
  {
    title: "Localization Guides",
    description: "Practical guidance for websites, software, mobile applications, testing, and continuous localization.",
    href: "https://www.stepes.com/resources/localization-guides/",
  },
  {
    title: "Translation Guides",
    description: "Professional translation processes, specialized content requirements, and quality assurance practices.",
    href: "https://www.stepes.com/resources/translation-guides/",
  },
  {
    title: "Global Content Strategy",
    description: "Planning, governance, creation, localization, and optimization across markets and customer journeys.",
    href: "https://www.stepes.com/resources/global-content-strategy/",
  },
  {
    title: "Translation Glossary",
    description: "Clear definitions for translation, localization, AI, quality, technology, and global content terminology.",
    href: "https://www.stepes.com/resources/translation-glossary/",
  },
  {
    title: "Translation Cost Guide",
    description: "The factors influencing pricing, technology savings, linguistic review, and total program cost.",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    title: "File Format Support",
    description: "Document, software, multimedia, design, and structured content formats supported by Stepes.",
    href: "https://www.stepes.com/resources/file-format-support/",
  },
  {
    title: "Security & Compliance",
    description: "Controls, processes, and governance practices supporting secure enterprise translation.",
    href: "https://www.stepes.com/security-and-compliance/",
  },
  {
    title: "All Guides",
    description: "The complete Stepes library of translation, localization, technology, and global content guides.",
    href: "https://www.stepes.com/resources/guides/",
  },
];

const researchUpdateBenefits = [
  "New white papers, benchmark reports, and research studies",
  "Focused executive briefs for enterprise decision-makers",
  "Expert analysis on AI translation, quality, security, governance, and global content operations",
];

const researchInterestOptions = [
  "AI Translation and Human Validation",
  "Translation Quality and Governance",
  "Localization Strategy and Operations",
  "Security and Compliance",
  "Translation Technology",
  "Global Content Strategy",
  "Regulated Industries",
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3 8H13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M9.5 4.5L13 8L9.5 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PrincipleIcon({ name }) {
  const shared = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  if (name === "framework") {
    return (
      <svg {...shared}>
        <rect x="3.5" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="13.5" y="4" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <rect x="8.5" y="14" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7 10V12H17V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 12V14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "enterprise") {
    return (
      <svg {...shared}>
        <path d="M4 20V7.5L12 4V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M12 9L20 6V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M2.5 20H21.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M7 10H9M7 13.5H9M7 17H9M15 11H17M15 14.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "methodology") {
    return (
      <svg {...shared}>
        <path d="M7 4.5H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 4.5V9L4.5 16.2C3.7 17.9 4.9 20 6.8 20H17.2C19.1 20 20.3 17.9 19.5 16.2L16 9V4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M7 14H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M9.5 11.5H14.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M4 19.5V11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M10 19.5V7.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M16 19.5V4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M2.5 19.5H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M4 8.5L9 4.5L13 7L20 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 2.5H20V5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}


function TopicIcon({ name }) {
  const shared = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  if (name === "ai") {
    return (
      <svg {...shared}>
        <path d="M12 3L13.25 7.2L17.5 8.5L13.25 9.8L12 14L10.75 9.8L6.5 8.5L10.75 7.2L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M18.5 13L19.2 15.3L21.5 16L19.2 16.7L18.5 19L17.8 16.7L15.5 16L17.8 15.3L18.5 13Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M5.5 14.5L6.2 16.8L8.5 17.5L6.2 18.2L5.5 20.5L4.8 18.2L2.5 17.5L4.8 16.8L5.5 14.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "quality") {
    return (
      <svg {...shared}>
        <path d="M12 3.5L19 6.5V11.7C19 15.9 16.3 19 12 20.5C7.7 19 5 15.9 5 11.7V6.5L12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8.5 12L10.8 14.2L15.8 9.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  if (name === "localization") {
    return (
      <svg {...shared}>
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3.8 12H20.2M12 3.5C14.4 5.9 15.7 8.7 15.7 12C15.7 15.3 14.4 18.1 12 20.5C9.6 18.1 8.3 15.3 8.3 12C8.3 8.7 9.6 5.9 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "content") {
    return (
      <svg {...shared}>
        <path d="M5 5.5H15.5L19 9V18.5H5V5.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M15 5.5V9.5H19" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M8 12H16M8 15.5H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "security") {
    return (
      <svg {...shared}>
        <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 10V7.5C8 5.3 9.8 3.5 12 3.5C14.2 3.5 16 5.3 16 7.5V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M12 14V16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  if (name === "technology") {
    return (
      <svg {...shared}>
        <circle cx="5" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="6" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="19" cy="18" r="2.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M7.2 12H12M13.8 10.6L17.1 7.4M13.8 13.4L17.1 16.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.2" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }

  return (
    <svg {...shared}>
      <path d="M5 20V8L12 4L19 8V20" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M3 20H21M8 20V12H16V20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 8.2V8.3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

function ReportCover() {
  return (
    <div className="rr-report-art" aria-hidden="true">
      <div className="rr-report-sheet rr-report-sheet-back">
        <span>ENTERPRISE RESEARCH</span>
        <div className="rr-sheet-line rr-sheet-line-short" />
        <div className="rr-sheet-line" />
        <div className="rr-sheet-line" />
      </div>
      <div className="rr-report-sheet rr-report-sheet-front">
        <span className="rr-cover-kicker">STEPES WHITE PAPER</span>
        <strong>A Risk-Based Framework for Enterprise AI Translation</strong>
        <div className="rr-cover-grid">
          <div>
            <span>CONTENT RISK</span>
            <i />
          </div>
          <div>
            <span>HUMAN REVIEW</span>
            <i />
          </div>
          <div>
            <span>QUALITY CONTROL</span>
            <i />
          </div>
          <div>
            <span>GOVERNANCE</span>
            <i />
          </div>
        </div>
        <div className="rr-cover-footer">
          <span>Research & Reports</span>
          <span>stepes.com</span>
        </div>
      </div>
    </div>
  );
}

export default function StepesResearchReportsWireframe() {
  return (
    <main className="rr-page">
      <style>{`
        :root {
          --rr-accent: #c11d63;
          --rr-accent-dark: #9f1d55;
          --rr-deep: #17192b;
          --rr-text: #2c3043;
          --rr-muted: #62687a;
          --rr-border: #e4e6ec;
          --rr-soft: #f7f7fa;
          --rr-blush: #fdf2f7;
          --rr-white: #ffffff;
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

        .rr-page {
          overflow-x: clip;
          background: var(--rr-white);
          color: var(--rr-text);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
        }

        .rr-page a {
          color: inherit;
          text-decoration: none;
        }

        .rr-container {
          width: 100%;
          max-width: 1392px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .rr-page h1,
        .rr-page h2,
        .rr-page h3 {
          overflow-wrap: break-word;
        }

        .rr-section-header > *,
        .rr-feature-layout > *,
        .rr-flagship > *,
        .rr-framework-layout > *,
        .rr-format-layout > *,
        .rr-latest-header > *,
        .rr-topic-header > *,
        .rr-findings-header > *,
        .rr-standards-layout > *,
        .rr-role-header > *,
        .rr-application-layout > *,
        .rr-resource-header > *,
        .rr-updates-panel > * {
          min-width: 0;
        }

        .rr-eyebrow {
          margin: 0 0 18px;
          color: var(--rr-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .rr-hero {
          position: relative;
          padding: 104px 0 0;
          background:
            radial-gradient(circle at 50% -20%, rgba(193, 29, 99, 0.08), transparent 43%),
            linear-gradient(180deg, #fff 0%, #fff 76%, #fafafd 100%);
        }

        .rr-hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: var(--rr-border);
        }

        .rr-hero-copy {
          max-width: 980px;
          margin: 0 auto;
          text-align: center;
        }

        .rr-hero h1 {
          max-width: 940px;
          margin: 0 auto;
          color: #171928;
          font-size: 48px;
          font-weight: 600;
          line-height: 1.12;
          letter-spacing: -0.035em;
        }

        .rr-hero-lead {
          max-width: 810px;
          margin: 24px auto 0;
          color: var(--rr-muted);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.72;
        }

        .rr-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 34px;
        }

        .rr-btn {
          max-width: 100%;
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 22px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.25;
          text-align: center;
          white-space: normal;
          overflow-wrap: anywhere;
          touch-action: manipulation;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease, border-color 180ms ease;
        }

        .rr-btn-primary,
        .rr-btn-primary:link,
        .rr-btn-primary:visited,
        .rr-btn-primary:hover,
        .rr-btn-primary:active,
        .rr-btn-primary:focus-visible {
          color: #fff;
        }

        .rr-btn-primary {
          background: var(--rr-accent);
          box-shadow: 0 10px 25px rgba(193, 29, 99, 0.18);
        }

        .rr-btn-primary:hover {
          background: var(--rr-accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 12px 30px rgba(193, 29, 99, 0.24);
        }

        .rr-btn-secondary {
          border-color: #d9dce4;
          background: rgba(255, 255, 255, 0.92);
          color: #262a3b;
        }

        .rr-btn-secondary:hover {
          border-color: #bfc3cf;
          transform: translateY(-1px);
        }

        .rr-btn:focus-visible,
        .rr-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 3px;
        }

        .rr-arrow {
          flex: 0 0 auto;
          transition: transform 180ms ease;
        }

        .rr-btn:hover .rr-arrow,
        .rr-editorial-link:hover .rr-arrow {
          transform: translateX(3px);
        }

        .rr-value-band {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 72px;
          border: 1px solid var(--rr-border);
          border-bottom: 0;
          border-radius: 28px 28px 0 0;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 -10px 40px rgba(32, 35, 52, 0.035);
          overflow: hidden;
        }

        .rr-value-item {
          min-width: 0;
          padding: 27px 28px 29px;
        }

        .rr-value-item + .rr-value-item {
          border-left: 1px solid var(--rr-border);
        }

        .rr-value-item h3 {
          margin: 0;
          color: #242738;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .rr-value-item p {
          margin: 9px 0 0;
          color: var(--rr-muted);
          font-size: 14px;
          line-height: 1.58;
        }

        .rr-section {
          padding: 96px 0;
        }

        .rr-section[id] {
          scroll-margin-top: 96px;
        }

        .rr-section-header {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 46px;
        }

        .rr-section-header h2,
        .rr-framework-copy h2 {
          margin: 0;
          color: #1b1e2d;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .rr-section-intro {
          margin: 0 0 3px;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .rr-feature-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(360px, 0.78fr);
          gap: 28px;
          align-items: stretch;
        }

        .rr-flagship {
          display: grid;
          grid-template-columns: minmax(0, 1.12fr) minmax(260px, 0.78fr);
          gap: 38px;
          min-height: 610px;
          padding: 48px;
          border: 1px solid #f0d6e2;
          border-radius: 30px;
          background: var(--rr-blush);
          overflow: hidden;
        }

        .rr-flagship-copy {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .rr-type-label {
          margin: 0 0 18px;
          color: var(--rr-accent-dark);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .rr-flagship h3 {
          margin: 0;
          color: #191b2a;
          font-size: 32px;
          font-weight: 600;
          line-height: 1.18;
          letter-spacing: -0.025em;
        }

        .rr-flagship-description {
          margin: 22px 0 0;
          color: #555b6e;
          font-size: 16px;
          line-height: 1.7;
        }

        .rr-learning-list {
          display: grid;
          gap: 11px;
          margin: 27px 0 0;
          padding: 0;
          list-style: none;
        }

        .rr-learning-list li {
          position: relative;
          padding-left: 19px;
          color: #333749;
          font-size: 14px;
          line-height: 1.55;
        }

        .rr-learning-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.62em;
          width: 7px;
          height: 2px;
          border-radius: 99px;
          background: var(--rr-accent);
        }

        .rr-report-audience {
          margin: 28px 0 0;
          color: #656a7c;
          font-size: 13px;
          line-height: 1.55;
        }

        .rr-report-audience strong {
          color: #333748;
          font-weight: 600;
        }

        .rr-flagship-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: auto;
          padding-top: 32px;
        }

        .rr-report-art {
          position: relative;
          min-height: 420px;
          align-self: center;
        }

        .rr-report-sheet {
          position: absolute;
          border: 1px solid rgba(28, 31, 47, 0.12);
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 28px 60px rgba(69, 30, 50, 0.12);
        }

        .rr-report-sheet-back {
          inset: 32px 7px 25px 38px;
          padding: 28px;
          transform: rotate(7deg);
          color: #8a6074;
          background: #f8e5ee;
        }

        .rr-report-sheet-back span {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
        }

        .rr-sheet-line {
          height: 7px;
          margin-top: 18px;
          border-radius: 99px;
          background: rgba(122, 21, 66, 0.12);
        }

        .rr-sheet-line-short {
          width: 58%;
          margin-top: 32px;
        }

        .rr-report-sheet-front {
          inset: 0 26px 0 0;
          display: flex;
          flex-direction: column;
          padding: 32px 28px 27px;
          transform: rotate(-2deg);
        }

        .rr-cover-kicker {
          color: var(--rr-accent-dark);
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.16em;
        }

        .rr-report-sheet-front > strong {
          display: block;
          margin-top: 24px;
          color: #1d2030;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .rr-cover-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 11px;
          margin-top: 28px;
        }

        .rr-cover-grid div {
          min-height: 75px;
          padding: 13px;
          border: 1px solid #e8e9ee;
          border-radius: 13px;
          background: #fafafd;
        }

        .rr-cover-grid span {
          display: block;
          color: #74798a;
          font-size: 7px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.11em;
        }

        .rr-cover-grid i {
          display: block;
          width: 65%;
          height: 5px;
          margin-top: 19px;
          border-radius: 99px;
          background: rgba(193, 29, 99, 0.34);
        }

        .rr-cover-footer {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-top: auto;
          padding-top: 24px;
          border-top: 1px solid #e7e8ed;
          color: #767b8c;
          font-size: 9px;
        }

        .rr-supporting-list {
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--rr-border);
          border-bottom: 1px solid var(--rr-border);
        }

        .rr-supporting-report {
          display: flex;
          flex: 1 1 0;
          flex-direction: column;
          align-items: flex-start;
          padding: 32px 8px 32px 26px;
        }

        .rr-supporting-report + .rr-supporting-report {
          border-top: 1px solid var(--rr-border);
        }

        .rr-supporting-report h3 {
          margin: 0;
          color: #202333;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.28;
          letter-spacing: -0.015em;
        }

        .rr-supporting-report .rr-report-description {
          margin: 16px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.67;
        }

        .rr-topic-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 14px;
          margin-top: 20px;
          color: #6b7081;
          font-size: 12px;
          line-height: 1.4;
        }

        .rr-topic-list span {
          position: relative;
        }

        .rr-topic-list span + span::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -8px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #c4c7d0;
          transform: translateY(-50%);
        }

        .rr-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          margin-top: auto;
          padding-top: 22px;
          color: var(--rr-accent-dark) !important;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.3;
        }

        .rr-framework-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-soft);
        }

        .rr-framework-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
          gap: 92px;
          align-items: start;
        }

        .rr-framework-copy {
          position: sticky;
          top: 36px;
        }

        .rr-framework-copy p {
          max-width: 460px;
          margin: 25px 0 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-principles-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid #dfe1e8;
          border-left: 1px solid #dfe1e8;
        }

        .rr-principle {
          min-height: 275px;
          padding: 34px 34px 36px;
          border-right: 1px solid #dfe1e8;
          border-bottom: 1px solid #dfe1e8;
          background: rgba(255, 255, 255, 0.46);
        }

        .rr-principle-icon {
          width: 46px;
          height: 46px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ead3de;
          border-radius: 14px;
          background: #fff8fb;
          color: var(--rr-accent-dark);
        }

        .rr-principle h3 {
          margin: 24px 0 0;
          color: #232637;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
        }

        .rr-principle p {
          margin: 14px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.7;
        }


        .rr-format-section {
          background: var(--rr-white);
        }

        .rr-format-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.3fr);
          gap: 92px;
          align-items: start;
        }

        .rr-format-copy h2,
        .rr-topic-header h2,
        .rr-findings-header h2 {
          margin: 0;
          color: #1b1e2d;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .rr-format-copy > p:last-child {
          max-width: 460px;
          margin: 24px 0 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-format-list {
          border-top: 1px solid var(--rr-border);
        }

        .rr-format-row {
          display: grid;
          grid-template-columns: minmax(170px, 0.48fr) minmax(0, 1.1fr) minmax(150px, auto);
          gap: 28px;
          align-items: center;
          min-height: 126px;
          padding: 28px 0;
          border-bottom: 1px solid var(--rr-border);
        }

        .rr-format-row h3 {
          margin: 0;
          color: #222536;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .rr-format-row p {
          margin: 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.68;
        }

        .rr-format-row .rr-editorial-link {
          justify-self: end;
          margin-top: 0;
          padding-top: 0;
          text-align: right;
        }

        .rr-latest-section {
          background: var(--rr-deep);
          color: #fff;
        }

        .rr-latest-header {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 48px;
        }

        .rr-latest-header h2 {
          margin: 0;
          color: #fff;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .rr-latest-header > p {
          margin: 0 0 3px;
          color: #b7bbca;
          font-size: 18px;
          line-height: 1.7;
        }

        .rr-latest-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid rgba(255, 255, 255, 0.14);
          border-left: 1px solid rgba(255, 255, 255, 0.14);
        }

        .rr-latest-report {
          display: flex;
          min-height: 390px;
          flex-direction: column;
          align-items: flex-start;
          padding: 36px 38px 38px;
          border-right: 1px solid rgba(255, 255, 255, 0.14);
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.015);
        }

        .rr-latest-report > .rr-type-label {
          margin: 0 0 18px;
          color: #f3a9c8;
        }

        .rr-latest-report h3 {
          margin: 0;
          color: #fff;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.015em;
        }

        .rr-latest-report > p {
          margin: 16px 0 0;
          color: #b7bbca;
          font-size: 15px;
          line-height: 1.7;
        }

        .rr-latest-topics {
          display: flex;
          flex-wrap: wrap;
          gap: 8px 14px;
          margin-top: 22px;
          color: #989dad;
          font-size: 12px;
          line-height: 1.4;
        }

        .rr-latest-topics span {
          position: relative;
        }

        .rr-latest-topics span + span::before {
          content: "";
          position: absolute;
          top: 50%;
          left: -8px;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: #6f7484;
          transform: translateY(-50%);
        }

        .rr-latest-audience {
          margin: 22px 0 0 !important;
          color: #9499a9 !important;
          font-size: 13px !important;
          line-height: 1.6 !important;
        }

        .rr-latest-audience strong {
          color: #d7dae3;
          font-weight: 600;
        }

        .rr-dark-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          margin-top: auto;
          padding-top: 26px;
          color: #f3a9c8 !important;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.3;
        }

        .rr-dark-link:hover .rr-arrow {
          transform: translateX(3px);
        }

        .rr-dark-link:focus-visible {
          outline: 3px solid rgba(243, 169, 200, 0.3);
          outline-offset: 3px;
        }


        .rr-topic-section {
          background: var(--rr-white);
        }

        .rr-topic-header,
        .rr-findings-header {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 46px;
        }

        .rr-topic-header > p,
        .rr-findings-header > p {
          margin: 0 0 3px;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .rr-topic-grid {
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          background: var(--rr-border);
        }

        .rr-topic-item {
          grid-column: span 3;
          min-height: 315px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 34px 30px 32px;
          background: #fff;
        }

        .rr-topic-item:nth-child(n + 5) {
          grid-column: span 4;
          min-height: 292px;
        }

        .rr-topic-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ead3de;
          border-radius: 15px;
          background: #fff8fb;
          color: var(--rr-accent-dark);
        }

        .rr-topic-item h3 {
          margin: 24px 0 0;
          color: #222536;
          font-size: 21px;
          font-weight: 600;
          line-height: 1.34;
        }

        .rr-topic-item p {
          margin: 14px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.67;
        }

        .rr-topic-item .rr-editorial-link {
          margin-top: auto;
        }

        .rr-findings-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-soft);
        }

        .rr-findings-table {
          border-top: 1px solid #dfe1e8;
        }

        .rr-finding-row {
          display: grid;
          grid-template-columns: minmax(245px, 0.78fr) minmax(0, 1.18fr) minmax(185px, 0.54fr);
          gap: 42px;
          align-items: start;
          padding: 34px 0 36px;
          border-bottom: 1px solid #dfe1e8;
        }

        .rr-finding-title-wrap {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr);
          gap: 14px;
          align-items: start;
        }

        .rr-finding-marker {
          width: 9px;
          height: 2px;
          margin-top: 0.72em;
          border-radius: 99px;
          background: var(--rr-accent);
        }

        .rr-finding-row h3 {
          margin: 0;
          color: #232637;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.38;
        }

        .rr-finding-row > p {
          margin: 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.72;
        }

        .rr-finding-related {
          align-self: center;
        }

        .rr-finding-related > span {
          display: block;
          margin-bottom: 7px;
          color: #7a7f90;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .rr-finding-related .rr-editorial-link {
          min-height: 0;
          margin-top: 0;
          padding-top: 0;
          line-height: 1.5;
        }


        .rr-standards-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-white);
        }

        .rr-standards-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
          gap: 92px;
          align-items: start;
        }

        .rr-standards-copy {
          position: sticky;
          top: 36px;
        }

        .rr-standards-copy h2,
        .rr-role-header h2,
        .rr-application-copy h2,
        .rr-resource-header h2 {
          margin: 0;
          color: #1b1e2d;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .rr-standards-copy > p:not(.rr-eyebrow) {
          max-width: 470px;
          margin: 24px 0 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-standards-copy .rr-editorial-link {
          margin-top: 20px;
          padding-top: 0;
        }

        .rr-standards-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--rr-border);
          border-left: 1px solid var(--rr-border);
        }

        .rr-standard {
          min-height: 244px;
          padding: 32px 34px 34px;
          border-right: 1px solid var(--rr-border);
          border-bottom: 1px solid var(--rr-border);
          background: #fff;
        }

        .rr-standard h3 {
          margin: 0;
          color: #232637;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.34;
        }

        .rr-standard p {
          margin: 14px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .rr-role-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-soft);
        }

        .rr-role-header,
        .rr-resource-header {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(380px, 0.72fr);
          gap: 72px;
          align-items: end;
          margin-bottom: 46px;
        }

        .rr-role-header > p,
        .rr-resource-header > p {
          margin: 0 0 3px;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.7;
        }

        .rr-role-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #dfe1e8;
          border-left: 1px solid #dfe1e8;
        }

        .rr-role-item {
          min-height: 360px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding: 34px 34px 36px;
          border-right: 1px solid #dfe1e8;
          border-bottom: 1px solid #dfe1e8;
          background: rgba(255, 255, 255, 0.52);
        }


        .rr-role-item h3 {
          margin: 0;
          color: #222536;
          font-size: 23px;
          font-weight: 600;
          line-height: 1.32;
        }

        .rr-role-item > p {
          margin: 15px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.68;
        }

        .rr-role-topics {
          display: grid;
          gap: 9px;
          width: 100%;
          margin: 22px 0 0;
          padding: 0;
          list-style: none;
        }

        .rr-role-topics li {
          position: relative;
          padding-left: 18px;
          color: #4b5062;
          font-size: 14px;
          line-height: 1.5;
        }

        .rr-role-topics li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.7em;
          width: 7px;
          height: 2px;
          border-radius: 99px;
          background: #c7cad3;
        }

        .rr-role-item .rr-editorial-link {
          margin-top: auto;
        }

        .rr-application-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-white);
        }

        .rr-application-layout {
          display: grid;
          grid-template-columns: minmax(300px, 0.72fr) minmax(0, 1.28fr);
          gap: 92px;
          align-items: start;
        }

        .rr-application-copy {
          align-self: center;
        }

        .rr-application-copy > p:not(.rr-eyebrow) {
          max-width: 470px;
          margin: 24px 0 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-application-copy .rr-btn {
          margin-top: 30px;
        }

        .rr-application-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border-top: 1px solid var(--rr-border);
          border-left: 1px solid var(--rr-border);
        }

        .rr-application-item {
          min-height: 310px;
          padding: 34px 34px 36px;
          border-right: 1px solid var(--rr-border);
          border-bottom: 1px solid var(--rr-border);
          background: #fff;
        }

        .rr-application-icon {
          width: 48px;
          height: 48px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #ead3de;
          border-radius: 15px;
          background: #fff8fb;
          color: var(--rr-accent-dark);
        }

        .rr-application-item h3 {
          margin: 24px 0 0;
          color: #222536;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.34;
        }

        .rr-application-item p {
          margin: 14px 0 0;
          color: var(--rr-muted);
          font-size: 15px;
          line-height: 1.7;
        }

        .rr-resource-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-soft);
        }

        .rr-resource-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border-top: 1px solid #dfe1e8;
          border-left: 1px solid #dfe1e8;
        }

        .rr-resource-item {
          min-height: 218px;
          padding: 28px 25px 30px;
          border-right: 1px solid #dfe1e8;
          border-bottom: 1px solid #dfe1e8;
          background: rgba(255, 255, 255, 0.5);
        }

        .rr-resource-title-link {
          display: inline-flex;
          align-items: flex-start;
          gap: 8px;
          color: #242738 !important;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .rr-resource-title-link .rr-arrow {
          margin-top: 0.28em;
          color: var(--rr-accent-dark);
        }

        .rr-resource-title-link:hover {
          color: var(--rr-accent-dark) !important;
        }

        .rr-resource-title-link:hover .rr-arrow {
          transform: translateX(3px);
        }

        .rr-resource-title-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 3px;
        }

        .rr-resource-item p {
          margin: 14px 0 0;
          color: var(--rr-muted);
          font-size: 14px;
          line-height: 1.64;
        }


        .rr-updates-section {
          border-top: 1px solid var(--rr-border);
          background: var(--rr-white);
        }

        .rr-updates-panel {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(420px, 0.76fr);
          gap: 72px;
          align-items: center;
          padding: 58px;
          border: 1px solid #efd5e1;
          border-radius: 30px;
          background: linear-gradient(135deg, var(--rr-blush) 0%, #ffffff 72%);
        }

        .rr-updates-copy h2,
        .rr-final-panel h2 {
          margin: 0;
          color: #1b1e2d;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: -0.025em;
        }

        .rr-updates-copy > p:not(.rr-eyebrow) {
          max-width: 620px;
          margin: 24px 0 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-update-benefits {
          display: grid;
          gap: 12px;
          margin: 28px 0 0;
          padding: 0;
          list-style: none;
        }

        .rr-update-benefits li {
          display: grid;
          grid-template-columns: 10px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          color: #3f4355;
          font-size: 15px;
          line-height: 1.6;
        }

        .rr-update-benefits li::before {
          content: "";
          width: 8px;
          height: 2px;
          margin-top: 0.75em;
          border-radius: 99px;
          background: var(--rr-accent);
        }

        .rr-updates-form {
          padding: 32px;
          border: 1px solid var(--rr-border);
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 20px 48px rgba(36, 39, 56, 0.07);
        }

        .rr-form-field + .rr-form-field {
          margin-top: 19px;
        }

        .rr-form-field label {
          display: block;
          margin-bottom: 8px;
          color: #303446;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .rr-form-field input,
        .rr-form-field select {
          width: 100%;
          min-height: 52px;
          padding: 12px 15px;
          border: 1px solid #d8dbe4;
          border-radius: 14px;
          background: #fff;
          color: #2c3043;
          font: inherit;
          font-size: 15px;
          line-height: 1.4;
          outline: none;
          transition: border-color 180ms ease, box-shadow 180ms ease;
        }

        .rr-form-field input::placeholder {
          color: #9297a6;
        }

        .rr-form-field input:focus,
        .rr-form-field select:focus {
          border-color: var(--rr-accent);
          box-shadow: 0 0 0 3px rgba(193, 29, 99, 0.12);
        }

        .rr-updates-submit {
          width: 100%;
          margin-top: 22px;
          cursor: pointer;
          font-family: inherit;
        }

        .rr-privacy-copy {
          margin: 15px 0 0;
          color: #7a7f90;
          font-size: 12px;
          line-height: 1.55;
        }

        .rr-privacy-copy a {
          color: var(--rr-accent-dark) !important;
          font-weight: 600;
        }

        .rr-privacy-copy a:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }

        .rr-privacy-copy a:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 3px;
        }

        .rr-final-section {
          padding: 0 0 96px;
          background: var(--rr-white);
        }

        .rr-final-panel {
          padding: 76px 64px;
          border: 1px solid var(--rr-border);
          border-radius: 30px;
          background: linear-gradient(180deg, #fafafd 0%, #ffffff 100%);
          text-align: center;
        }

        .rr-final-panel h2 {
          max-width: 820px;
          margin-left: auto;
          margin-right: auto;
        }

        .rr-final-copy {
          max-width: 780px;
          margin: 24px auto 0;
          color: var(--rr-muted);
          font-size: 18px;
          line-height: 1.72;
        }

        .rr-final-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-top: 32px;
        }

        @media (max-width: 1180px) {
          .rr-container {
            padding-left: 40px;
            padding-right: 40px;
          }

          .rr-feature-layout {
            grid-template-columns: minmax(0, 1.25fr) minmax(330px, 0.75fr);
          }

          .rr-flagship {
            grid-template-columns: minmax(0, 1fr) minmax(220px, 0.66fr);
            padding: 40px;
          }

          .rr-report-sheet-front > strong {
            font-size: 21px;
          }

          .rr-framework-layout,
          .rr-format-layout,
          .rr-standards-layout,
          .rr-application-layout {
            gap: 64px;
          }

          .rr-updates-panel {
            gap: 54px;
            padding: 48px;
          }

          .rr-role-item {
            padding-left: 30px;
            padding-right: 30px;
          }

          .rr-resource-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .rr-latest-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-latest-report {
            padding-left: 32px;
            padding-right: 32px;
          }

          .rr-topic-item {
            padding-left: 26px;
            padding-right: 26px;
          }

          .rr-finding-row {
            gap: 30px;
          }
        }

        @media (max-width: 980px) {
          .rr-hero h1 {
            font-size: 42px;
          }

          .rr-value-band {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-value-item + .rr-value-item {
            border-left: 0;
          }

          .rr-value-item:nth-child(even) {
            border-left: 1px solid var(--rr-border);
          }

          .rr-value-item:nth-child(n + 3) {
            border-top: 1px solid var(--rr-border);
          }

          .rr-section-header {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .rr-section-intro {
            max-width: 760px;
          }

          .rr-feature-layout {
            grid-template-columns: 1fr;
          }

          .rr-flagship {
            min-height: 0;
            grid-template-columns: minmax(0, 1fr) minmax(260px, 0.66fr);
          }

          .rr-supporting-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-supporting-report {
            padding: 30px 28px 32px;
          }

          .rr-supporting-report + .rr-supporting-report {
            border-top: 0;
            border-left: 1px solid var(--rr-border);
          }

          .rr-framework-layout,
          .rr-standards-layout,
          .rr-application-layout {
            grid-template-columns: 1fr;
            gap: 46px;
          }

          .rr-updates-panel {
            grid-template-columns: 1fr;
            gap: 38px;
            padding: 44px;
          }

          .rr-updates-form {
            width: 100%;
            min-width: 0;
          }

          .rr-framework-copy,
          .rr-standards-copy {
            position: static;
          }

          .rr-framework-copy p,
          .rr-standards-copy > p:not(.rr-eyebrow),
          .rr-application-copy > p:not(.rr-eyebrow) {
            max-width: 780px;
          }

          .rr-format-layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .rr-format-copy > p:last-child {
            max-width: 780px;
          }

          .rr-latest-header,
          .rr-topic-header,
          .rr-findings-header,
          .rr-role-header,
          .rr-resource-header {
            grid-template-columns: 1fr;
            gap: 22px;
            align-items: start;
          }

          .rr-topic-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-topic-item,
          .rr-topic-item:nth-child(n + 5) {
            grid-column: auto;
            min-height: 300px;
          }

          .rr-finding-row {
            grid-template-columns: minmax(230px, 0.78fr) minmax(0, 1.22fr);
            gap: 24px 38px;
          }

          .rr-finding-related {
            grid-column: 2;
            align-self: start;
          }

          .rr-role-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-resource-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 768px) {
          .rr-container {
            padding-left: 24px;
            padding-right: 24px;
          }

          .rr-hero {
            padding-top: 88px;
          }

          .rr-hero h1 {
            font-size: 42px;
          }

          .rr-section {
            padding: 72px 0;
          }

          .rr-section-header h2,
          .rr-framework-copy h2,
          .rr-format-copy h2,
          .rr-latest-header h2,
          .rr-topic-header h2,
          .rr-findings-header h2,
          .rr-standards-copy h2,
          .rr-role-header h2,
          .rr-application-copy h2,
          .rr-resource-header h2,
          .rr-updates-copy h2,
          .rr-final-panel h2 {
            font-size: 32px;
          }

          .rr-flagship {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .rr-report-art {
            width: min(100%, 380px);
            min-height: 430px;
            margin: 0 auto;
          }

          .rr-flagship-actions {
            margin-top: 28px;
            padding-top: 0;
          }

          .rr-supporting-list {
            grid-template-columns: 1fr;
          }

          .rr-supporting-report + .rr-supporting-report {
            border-top: 1px solid var(--rr-border);
            border-left: 0;
          }

          .rr-principles-grid {
            grid-template-columns: 1fr;
          }

          .rr-principle {
            min-height: 0;
          }

          .rr-format-row {
            grid-template-columns: 1fr;
            gap: 10px;
            min-height: 0;
            padding: 26px 0 28px;
          }

          .rr-format-row .rr-editorial-link {
            justify-self: start;
            margin-top: 4px;
            text-align: left;
          }

          .rr-latest-grid {
            grid-template-columns: 1fr;
          }

          .rr-latest-report {
            min-height: 0;
          }

          .rr-topic-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .rr-finding-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .rr-finding-related {
            grid-column: auto;
            margin-left: 26px;
          }

          .rr-form-field input,
          .rr-form-field select {
            font-size: 16px;
          }

          .rr-standards-grid,
          .rr-application-grid {
            grid-template-columns: 1fr;
          }

          .rr-standard,
          .rr-application-item {
            min-height: 0;
          }
        }

        @media (max-width: 560px) {
          .rr-container {
            padding-left: 20px;
            padding-right: 20px;
          }

          .rr-hero {
            padding-top: 72px;
          }

          .rr-hero h1 {
            font-size: 38px;
            line-height: 1.12;
          }

          .rr-hero-lead {
            font-size: 17px;
            line-height: 1.68;
          }

          .rr-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 30px;
          }

          .rr-btn {
            width: 100%;
            min-height: 52px;
            padding-left: 18px;
            padding-right: 18px;
          }

          .rr-editorial-link,
          .rr-dark-link,
          .rr-resource-title-link {
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          .rr-value-band {
            grid-template-columns: 1fr;
            margin-top: 56px;
            border-radius: 24px 24px 0 0;
          }

          .rr-value-item {
            padding: 23px 22px 24px;
          }

          .rr-value-item:nth-child(even) {
            border-left: 0;
          }

          .rr-value-item + .rr-value-item,
          .rr-value-item:nth-child(n + 3) {
            border-top: 1px solid var(--rr-border);
          }

          .rr-section {
            padding: 68px 0;
          }

          .rr-section-header {
            margin-bottom: 34px;
          }

          .rr-section-header h2,
          .rr-framework-copy h2,
          .rr-format-copy h2,
          .rr-latest-header h2,
          .rr-topic-header h2,
          .rr-findings-header h2,
          .rr-standards-copy h2,
          .rr-role-header h2,
          .rr-application-copy h2,
          .rr-resource-header h2,
          .rr-updates-copy h2,
          .rr-final-panel h2 {
            font-size: 30px;
            line-height: 1.22;
          }

          .rr-section-intro,
          .rr-framework-copy p,
          .rr-format-copy > p:last-child,
          .rr-latest-header > p,
          .rr-topic-header > p,
          .rr-findings-header > p,
          .rr-standards-copy > p:not(.rr-eyebrow),
          .rr-role-header > p,
          .rr-application-copy > p:not(.rr-eyebrow),
          .rr-resource-header > p,
          .rr-updates-copy > p:not(.rr-eyebrow),
          .rr-final-copy {
            font-size: 17px;
          }

          .rr-flagship {
            padding: 30px 24px 28px;
            border-radius: 24px;
          }

          .rr-flagship h3 {
            font-size: 27px;
          }

          .rr-flagship-actions {
            display: grid;
            width: 100%;
          }

          .rr-report-art {
            width: 100%;
            min-height: 390px;
          }

          .rr-report-sheet-front {
            right: 14px;
          }

          .rr-report-sheet-front > strong {
            font-size: 22px;
          }

          .rr-cover-grid {
            gap: 8px;
          }

          .rr-supporting-report {
            padding: 28px 2px 30px;
          }

          .rr-supporting-report h3 {
            font-size: 21px;
          }

          .rr-framework-layout {
            gap: 38px;
          }

          .rr-principle {
            padding: 30px 26px 31px;
          }

          .rr-principle h3 {
            font-size: 21px;
          }

          .rr-format-layout,
          .rr-framework-layout {
            gap: 36px;
          }

          .rr-latest-header,
          .rr-topic-header,
          .rr-findings-header,
          .rr-role-header,
          .rr-resource-header {
            margin-bottom: 34px;
          }

          .rr-latest-report {
            padding: 30px 24px 32px;
          }

          .rr-latest-report h3 {
            font-size: 21px;
          }


          .rr-topic-grid {
            grid-template-columns: 1fr;
          }

          .rr-topic-item,
          .rr-topic-item:nth-child(n + 5) {
            min-height: 0;
            padding: 30px 24px 31px;
          }

          .rr-topic-item h3 {
            font-size: 20px;
          }

          .rr-finding-row {
            padding: 28px 0 30px;
          }

          .rr-finding-related {
            margin-left: 0;
            padding-left: 26px;
          }

          .rr-finding-row h3 {
            font-size: 19px;
          }

          .rr-standards-layout,
          .rr-application-layout {
            gap: 36px;
          }

          .rr-standard,
          .rr-application-item {
            padding: 28px 24px 30px;
          }

          .rr-standard h3,
          .rr-application-item h3 {
            font-size: 20px;
          }

          .rr-role-grid,
          .rr-resource-grid {
            grid-template-columns: 1fr;
          }

          .rr-role-item {
            min-height: 0;
            padding: 30px 24px 32px;
          }

          .rr-role-item h3 {
            font-size: 21px;
          }

          .rr-resource-item {
            min-height: 0;
            padding: 25px 22px 27px;
          }

          .rr-application-copy .rr-btn {
            width: 100%;
          }

          .rr-updates-panel {
            padding: 32px 24px;
            border-radius: 24px;
          }

          .rr-updates-form {
            padding: 25px 22px 26px;
            border-radius: 20px;
          }

          .rr-final-section {
            padding-bottom: 68px;
          }

          .rr-final-panel {
            padding: 54px 24px;
            border-radius: 24px;
          }

          .rr-final-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 28px;
          }

          .rr-final-actions .rr-btn {
            width: 100%;
          }

          .rr-topic-list,
          .rr-latest-topics {
            row-gap: 9px;
          }
        }

        @media (max-width: 360px) {
          .rr-hero h1 {
            font-size: 36px;
          }

          .rr-updates-form {
            padding-left: 18px;
            padding-right: 18px;
          }

          .rr-updates-submit {
            font-size: 14px;
          }

          .rr-report-art {
            min-height: 365px;
          }

          .rr-report-sheet-front {
            padding: 27px 22px 23px;
          }

          .rr-report-sheet-front > strong {
            font-size: 20px;
          }

          .rr-cover-grid div {
            min-height: 67px;
            padding: 10px;
          }
        }
      `}</style>

      <section className="rr-hero" aria-labelledby="rr-page-title">
        <div className="rr-container">
          <div className="rr-hero-copy">
            <p className="rr-eyebrow">Research &amp; Reports</p>
            <h1 id="rr-page-title">Translation and Localization Research for Enterprise Decision-Makers</h1>
            <p className="rr-hero-lead">
              Explore evidence-based research, strategic frameworks, benchmark reports, and expert analysis covering AI translation, multilingual quality, localization technology, security, governance, and global content operations.
            </p>
            <div className="rr-actions">
              <a className="rr-btn rr-btn-primary" href={`${PAGE_URL}#featured-research`}>
                Explore the Research Library
                <ArrowIcon className="rr-arrow" />
              </a>
              <a className="rr-btn rr-btn-secondary" href={`${PAGE_URL}#research-topics`}>
                Browse by Topic
                <ArrowIcon className="rr-arrow" />
              </a>
            </div>
          </div>

          <div className="rr-value-band" aria-label="Research decision support">
            {heroValues.map((item) => (
              <div className="rr-value-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section" id="featured-research" aria-labelledby="rr-featured-title">
        <div className="rr-container">
          <div className="rr-section-header">
            <div>
              <p className="rr-eyebrow">Featured Research</p>
              <h2 id="rr-featured-title">Research for the Decisions Shaping Enterprise Translation</h2>
            </div>
            <p className="rr-section-intro">
              Explore Stepes’ analysis of the technologies, quality models, governance practices, and operating strategies transforming modern localization.
            </p>
          </div>

          <div className="rr-feature-layout">
            <article className="rr-flagship">
              <div className="rr-flagship-copy">
                <p className="rr-type-label">White Paper</p>
                <h3>A Risk-Based Framework for Enterprise AI Translation</h3>
                <p className="rr-flagship-description">
                  Enterprise organizations are rapidly adopting AI translation, but not every content type should follow the same workflow. This report presents a structured framework for matching AI translation, linguistic validation, professional translation, quality assurance, and human approval to content risk.
                </p>
                <ul className="rr-learning-list">
                  <li>Classify content by business, customer, legal, and regulatory risk</li>
                  <li>Determine when AI-only translation, human validation, or professional translation is appropriate</li>
                  <li>Establish measurable quality thresholds and approval requirements</li>
                  <li>Align terminology, security, and governance with workflow design</li>
                </ul>
                <p className="rr-report-audience">
                  <strong>Recommended for:</strong> Localization leaders, product teams, compliance stakeholders, enterprise technology teams, and procurement professionals.
                </p>
                <div className="rr-flagship-actions">
                  <a
                    className="rr-btn rr-btn-primary"
                    href={`${PAGE_URL}risk-based-enterprise-ai-translation/`}
                  >
                    Read the White Paper
                    <ArrowIcon className="rr-arrow" />
                  </a>
                  <a
                    className="rr-btn rr-btn-secondary"
                    href={`${PAGE_URL}risk-based-enterprise-ai-translation/#download`}
                  >
                    Download the PDF
                  </a>
                </div>
              </div>
              <ReportCover />
            </article>

            <div className="rr-supporting-list">
              {supportingReports.map((report) => (
                <article className="rr-supporting-report" key={report.title}>
                  <p className="rr-type-label">{report.type}</p>
                  <h3>{report.title}</h3>
                  <p className="rr-report-description">{report.description}</p>
                  <div className="rr-topic-list" aria-label={`${report.title} topics`}>
                    {report.topics.map((topic) => (
                      <span key={topic}>{topic}</span>
                    ))}
                  </div>
                  <a className="rr-editorial-link" href={report.href}>
                    {report.linkLabel}
                    <ArrowIcon className="rr-arrow" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rr-section rr-framework-section" id="research-frameworks" aria-labelledby="rr-framework-title">
        <div className="rr-container rr-framework-layout">
          <div className="rr-framework-copy">
            <p className="rr-eyebrow">Research Approach</p>
            <h2 id="rr-framework-title">From Industry Questions to Actionable Enterprise Frameworks</h2>
            <p>
              Translation and localization decisions increasingly affect product experience, customer trust, regulatory compliance, operational efficiency, data security, and international growth. Stepes Research &amp; Reports helps organizations compare options, understand tradeoffs, establish governance, and convert complex multilingual challenges into practical action.
            </p>
          </div>

          <div className="rr-principles-grid">
            {researchPrinciples.map((principle) => (
              <article className="rr-principle" key={principle.title}>
                <span className="rr-principle-icon">
                  <PrincipleIcon name={principle.icon} />
                </span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-format-section" id="publication-types" aria-labelledby="rr-format-title">
        <div className="rr-container rr-format-layout">
          <div className="rr-format-copy">
            <h2 id="rr-format-title">Explore Research by Format</h2>
            <p>
              Choose the level of depth and analysis that best supports your role, project, or decision—from focused executive guidance to detailed technical research.
            </p>
          </div>

          <div className="rr-format-list">
            {publicationTypes.map((publication) => (
              <article className="rr-format-row" key={publication.type}>
                <h3>{publication.type}</h3>
                <p>{publication.description}</p>
                <a className="rr-editorial-link" href={publication.href}>
                  {publication.linkLabel}
                  <ArrowIcon className="rr-arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-latest-section" id="latest-research" aria-labelledby="rr-latest-title">
        <div className="rr-container">
          <div className="rr-latest-header">
            <div>
              <h2 id="rr-latest-title">More Research for Enterprise Teams</h2>
            </div>
            <p>
              Continue with reports on localization operating models, translation business cases, and evaluating AI translation platforms and providers.
            </p>
          </div>

          <div className="rr-latest-grid">
            {latestReports.map((report) => (
              <article className="rr-latest-report" key={report.title}>
                <p className="rr-type-label">{report.type}</p>
                <h3>{report.title}</h3>
                <p>{report.description}</p>
                <div className="rr-latest-topics" aria-label={`${report.title} topics`}>
                  {report.topics.map((topic) => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
                <p className="rr-latest-audience">
                  <strong>Recommended for:</strong> {report.audience}
                </p>
                <a className="rr-dark-link" href={report.href}>
                  {report.linkLabel}
                  <ArrowIcon className="rr-arrow" />
                </a>
              </article>
            ))}
          </div>

        </div>
      </section>

      <section className="rr-section rr-topic-section" id="research-topics" aria-labelledby="rr-topic-title">
        <div className="rr-container">
          <div className="rr-topic-header">
            <div>
              <p className="rr-eyebrow">Research Topics</p>
              <h2 id="rr-topic-title">Research Across the Global Content Lifecycle</h2>
            </div>
            <p>
              Explore reports aligned with the strategic, technological, and operational priorities of enterprise translation and localization programs.
            </p>
          </div>

          <div className="rr-topic-grid">
            {researchTopics.map((topic) => (
              <article className="rr-topic-item" key={topic.title}>
                <span className="rr-topic-icon">
                  <TopicIcon name={topic.icon} />
                </span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <a className="rr-editorial-link" href={topic.href}>
                  {topic.linkLabel}
                  <ArrowIcon className="rr-arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-findings-section" id="research-findings" aria-labelledby="rr-findings-title">
        <div className="rr-container">
          <div className="rr-findings-header">
            <div>
              <p className="rr-eyebrow">Key Findings</p>
              <h2 id="rr-findings-title">Insights You Can Put to Work</h2>
            </div>
            <p>
              Stepes research turns analysis into practical guidance for multilingual content quality, workflow design, governance, technology, and business performance.
            </p>
          </div>

          <div className="rr-findings-table">
            {researchFindings.map((finding) => (
              <article className="rr-finding-row" key={finding.title}>
                <div className="rr-finding-title-wrap">
                  <span className="rr-finding-marker" aria-hidden="true" />
                  <h3>{finding.title}</h3>
                </div>
                <p>{finding.text}</p>
                <div className="rr-finding-related">
                  <span>{finding.relatedLabel || "Related Research"}</span>
                  <a className="rr-editorial-link" href={finding.href}>
                    {finding.related}
                    <ArrowIcon className="rr-arrow" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-standards-section" id="research-standards" aria-labelledby="rr-standards-title">
        <div className="rr-container rr-standards-layout">
          <div className="rr-standards-copy">
            <p className="rr-eyebrow">Research Standards</p>
            <h2 id="rr-standards-title">Transparent Methods. Practical Conclusions.</h2>
            <p>
              Credible research requires more than a compelling point of view. Stepes publications make their sources, assumptions, analytical methods, expert contributions, and limitations clear so readers can evaluate the evidence behind each conclusion.
            </p>
            <a className="rr-editorial-link" href={`${PAGE_URL}research-standards/`}>
              Review Our Research Standards
              <ArrowIcon className="rr-arrow" />
            </a>
          </div>

          <div className="rr-standards-grid">
            {researchStandards.map((standard) => (
              <article className="rr-standard" key={standard.title}>
                <h3>{standard.title}</h3>
                <p>{standard.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-role-section" id="research-by-role" aria-labelledby="rr-role-title">
        <div className="rr-container">
          <div className="rr-role-header">
            <div>
              <p className="rr-eyebrow">Enterprise Decision Support</p>
              <h2 id="rr-role-title">Insights for Every Global Content Stakeholder</h2>
            </div>
            <p>
              Translation and localization decisions affect teams across the enterprise. Explore research aligned with the priorities, risks, and operating responsibilities of your role.
            </p>
          </div>

          <div className="rr-role-grid">
            {roleResearch.map((role) => (
              <article className="rr-role-item" key={role.title}>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
                <ul className="rr-role-topics">
                  {role.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <a className="rr-editorial-link" href={role.href}>
                  {role.linkLabel}
                  <ArrowIcon className="rr-arrow" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-application-section" id="customer-results" aria-labelledby="rr-application-title">
        <div className="rr-container rr-application-layout">
          <div className="rr-application-copy">
            <p className="rr-eyebrow">Customer Results</p>
            <h2 id="rr-application-title">See How Enterprise Strategies Work in Practice</h2>
            <p>
              Research provides the framework. Customer case studies show how organizations apply translation technology, professional linguistic expertise, and workflow governance to real global content challenges.
            </p>
            <a className="rr-btn rr-btn-primary" href={CASE_STUDIES_URL}>
              Explore All Case Studies
              <ArrowIcon className="rr-arrow" />
            </a>
          </div>

          <div className="rr-application-grid">
            {caseStudyApplications.map((application) => (
              <article className="rr-application-item" key={application.title}>
                <span className="rr-application-icon">
                  <TopicIcon name={application.icon} />
                </span>
                <h3>{application.title}</h3>
                <p>{application.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-resource-section" id="related-resources" aria-labelledby="rr-resource-title">
        <div className="rr-container">
          <div className="rr-resource-header">
            <div>
              <p className="rr-eyebrow">Related Resources</p>
              <h2 id="rr-resource-title">Build a Deeper Understanding of Enterprise Translation</h2>
            </div>
            <p>
              Move from strategic research to practical guidance, technical reference, and real-world examples across the Stepes Resource Center.
            </p>
          </div>

          <div className="rr-resource-grid">
            {relatedResources.map((resource) => (
              <article className="rr-resource-item" key={resource.title}>
                <a className="rr-resource-title-link" href={resource.href}>
                  <span>{resource.title}</span>
                  <ArrowIcon className="rr-arrow" />
                </a>
                <p>{resource.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rr-section rr-updates-section" id="research-updates" aria-labelledby="rr-updates-title">
        <div className="rr-container">
          <div className="rr-updates-panel">
            <div className="rr-updates-copy">
              <h2 id="rr-updates-title">Stay Informed About the Future of Translation</h2>
              <p>
                Receive new Stepes research, benchmark reports, executive briefs, and expert analysis covering enterprise AI translation, multilingual quality, localization technology, security, governance, and global content operations.
              </p>
              <ul className="rr-update-benefits">
                {researchUpdateBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <form className="rr-updates-form" onSubmit={(event) => event.preventDefault()}>
              <div className="rr-form-field">
                <label htmlFor="rr-work-email">Work Email</label>
                <input
                  id="rr-work-email"
                  name="workEmail"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="rr-form-field">
                <label htmlFor="rr-area-of-interest">Area of Interest <span aria-hidden="true">(Optional)</span></label>
                <select id="rr-area-of-interest" name="areaOfInterest" defaultValue="">
                  <option value="">Select a research topic</option>
                  {researchInterestOptions.map((interest) => (
                    <option value={interest} key={interest}>{interest}</option>
                  ))}
                </select>
              </div>
              <button className="rr-btn rr-btn-primary rr-updates-submit" type="submit">
                Subscribe to Research Updates
                <ArrowIcon className="rr-arrow" />
              </button>
              <p className="rr-privacy-copy">
                By subscribing, you agree to receive research and resource updates from Stepes. You can unsubscribe at any time. Review our{` `}
                <a href="https://www.stepes.com/privacy-policy/">Privacy Policy</a> for more information.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section className="rr-final-section" aria-labelledby="rr-final-title">
        <div className="rr-container">
          <div className="rr-final-panel">
            <h2 id="rr-final-title">Turn Research Into a Stronger Global Content Strategy</h2>
            <p className="rr-final-copy">
              Every organization has a different combination of content, languages, technology, quality expectations, security requirements, and business priorities. Speak with Stepes about aligning AI, professional linguists, workflow automation, and quality governance with the needs of your global content program.
            </p>
            <div className="rr-final-actions">
              <a className="rr-btn rr-btn-primary" href="https://www.stepes.com/contact-us/">
                Talk to a Global Content Expert
                <ArrowIcon className="rr-arrow" />
              </a>
              <a className="rr-btn rr-btn-secondary" href="https://www.stepes.com/ai-translation-platform/">
                Explore the Stepes AI Translation Platform
                <ArrowIcon className="rr-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
