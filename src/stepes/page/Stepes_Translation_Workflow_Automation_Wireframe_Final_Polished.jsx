import React, { useState } from "react";

const workflowStages = [
  { key: "request", label: "Content Intake", detail: "Requests, files, APIs, and connected content" },
  { key: "route", label: "Workflow Routing", detail: "Rules select languages, quality, and review paths" },
  { key: "translate", label: "Translation", detail: "AI, professional human, or blended production" },
  { key: "validate", label: "Quality Validation", detail: "Terminology, completeness, and linguistic checks" },
  { key: "approve", label: "Approval", detail: "Authorized reviewers confirm release readiness" },
  { key: "deliver", label: "Delivery", detail: "Completed content returns to the required destination" },
];

const automationScope = [
  "Content intake and project creation",
  "File analysis and translation memory matching",
  "Language and market routing",
  "AI or professional human translation",
  "Terminology and style-guide application",
  "Linguistic review and quality assurance",
  "Stakeholder approvals and release controls",
  "Delivery to connected content systems",
  "Reporting, audit histories, and continuous improvement",
];

const challenges = [
  {
    title: "Repeated Project Setup",
    text: "Teams recreate requests, prepare files, and repeat instructions instead of starting from a standardized process.",
  },
  {
    title: "Inconsistent Translation Paths",
    text: "Similar content can receive different levels of translation, review, and approval depending on who manages the request.",
  },
  {
    title: "Manual Handoffs",
    text: "Files and tasks move through email, spreadsheets, shared folders, and disconnected conversations.",
  },
  {
    title: "Limited Operational Visibility",
    text: "Stakeholders struggle to see project status, ownership, pending reviews, and delivery risk across languages.",
  },
  {
    title: "Approval Bottlenecks",
    text: "Reviewers are brought in too late, follow-up is manual, and critical content waits for the right decision maker.",
  },
  {
    title: "Disconnected Language Assets",
    text: "Translation memories, terminology, style guides, and instructions are not applied consistently across projects.",
  },
  {
    title: "Uneven Quality Controls",
    text: "Terminology, completeness, formatting, and risk requirements can be missed when quality checks sit outside the workflow.",
  },
  {
    title: "Difficult Enterprise Scaling",
    text: "Processes that work for occasional projects become fragile as content, languages, teams, and delivery channels expand.",
  },
];


const lifecycleSteps = [
  {
    number: "01",
    title: "Content Trigger",
    text: "New content enters through the Stepes platform, customer portal, APIs, or supported integrations.",
  },
  {
    number: "02",
    title: "Intake and Analysis",
    text: "Files are prepared, translatable content is identified, and translation memory matches are calculated.",
  },
  {
    number: "03",
    title: "Workflow Selection",
    text: "Business rules select the right path based on content, language, audience, risk, and timing.",
  },
  {
    number: "04",
    title: "Language Assets",
    text: "Approved translation memories, terminology, style guides, and instructions are applied.",
  },
  {
    number: "05",
    title: "Translation Production",
    text: "Content moves through AI translation, professional translation, or a blended workflow.",
  },
  {
    number: "06",
    title: "Quality Validation",
    text: "Automated checks and professional review evaluate accuracy, terminology, completeness, and format.",
  },
  {
    number: "07",
    title: "Approval and Release",
    text: "Authorized stakeholders approve content or return it for revision through defined review stages.",
  },
  {
    number: "08",
    title: "Delivery and Reporting",
    text: "Completed translations reach the required destination with status, history, and performance data retained.",
  },
];

const automationCapabilities = [
  {
    label: "Intake",
    title: "Automated Request Intake",
    text: "Standardize how teams submit files, languages, deadlines, instructions, and approval requirements from the start.",
  },
  {
    label: "Analysis",
    title: "File and Content Analysis",
    text: "Identify translatable content, repeated text, translation memory matches, supported formats, and project requirements.",
  },
  {
    label: "Routing",
    title: "Project Creation and Routing",
    text: "Create projects and route them to the appropriate workflow, language team, quality level, and delivery schedule.",
  },
  {
    label: "Assignment",
    title: "Linguist and Reviewer Assignment",
    text: "Match work with qualified translators, editors, subject-matter specialists, and in-country reviewers.",
  },
  {
    label: "Coordination",
    title: "Notifications and Task Management",
    text: "Keep participants informed when content is ready for translation, review, approval, revision, or delivery.",
  },
  {
    label: "Governance",
    title: "Approval Workflows",
    text: "Define who reviews and approves content before release, with different paths for different content risks.",
  },
  {
    label: "Delivery",
    title: "Automated Delivery",
    text: "Return completed translations through the platform, APIs, connected systems, or established delivery channels.",
  },
  {
    label: "Visibility",
    title: "Operational Reporting",
    text: "Track progress, turnaround, language activity, translation memory reuse, quality results, and workflow performance.",
  },
];

const routingFactors = [
  "Content type and intended audience",
  "Business unit or requesting team",
  "Source and target language",
  "Publication channel and destination",
  "Market or geographic region",
  "Content sensitivity and business impact",
  "Regulatory or compliance requirements",
  "Required quality level",
  "Turnaround priority",
  "Approved terminology and language assets",
  "Human review requirements",
  "Stakeholder approval requirements",
];

const workflowPaths = [
  {
    label: "Speed and Scale",
    title: "High-Automation Workflows",
    text: "For high-volume, time-sensitive, or lower-risk content where rapid multilingual availability is the primary objective.",
  },
  {
    label: "Balanced Control",
    title: "AI + Human Review Workflows",
    text: "For customer-facing, product, marketing, support, and operational content that benefits from AI speed and professional validation.",
  },
  {
    label: "Expert Production",
    title: "Professional Translation Workflows",
    text: "For complex, nuanced, specialized, or brand-sensitive content requiring experienced human translators.",
  },
  {
    label: "Maximum Assurance",
    title: "High-Assurance Workflows",
    text: "For regulated, safety-critical, legal, medical, financial, or other high-risk content requiring additional review and approval.",
  },
];

const humanTouchpoints = [
  "Source-content review and preparation",
  "Terminology and glossary validation",
  "AI translation post-editing",
  "Linguistic quality assurance",
  "Subject-matter review",
  "Brand and style adaptation",
  "In-country market validation",
  "Final stakeholder approval",
];


const languageAssetGroups = [
  {
    label: "Translation Memory Automation",
    title: "Reuse Approved Translations",
    text: "Previously approved translations are identified and reused when matching or similar content appears in new projects.",
    benefits: [
      "Avoid retranslating repeated content",
      "Maintain consistency across documents and channels",
      "Accelerate multilingual turnaround",
      "Preserve approved product and brand language",
      "Increase the long-term value of multilingual content",
    ],
    linkLabel: "Learn About Translation Memory",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    label: "Terminology Automation",
    title: "Apply the Right Language from the Start",
    text: "Approved names, technical terms, product terminology, regulated expressions, and prohibited translations can be applied throughout the workflow.",
    benefits: [
      "Guide translators, reviewers, and AI systems",
      "Reduce downstream terminology corrections",
      "Protect product, brand, and regulated language",
      "Improve consistency across teams and markets",
      "Support faster review and approval",
    ],
    linkLabel: "Explore Terminology Management",
    href: "https://www.stepes.com/terminology-management/",
  },
];

const languageAssetScopes = [
  "Customer",
  "Business Unit",
  "Product",
  "Content Type",
  "Market",
];

const automatedQualityChecks = [
  "Missing or untranslated content",
  "Terminology inconsistencies",
  "Numbers, dates, and measurements",
  "Punctuation and capitalization",
  "Tags, placeholders, and variables",
  "Formatting and structural differences",
  "Repeated or inconsistent translations",
  "Content-length and completeness issues",
];

const professionalReviewDimensions = [
  "Accuracy and preservation of meaning",
  "Grammar, fluency, and readability",
  "Audience and market appropriateness",
  "Tone, style, and brand voice",
  "Subject-matter terminology",
  "Cultural relevance",
  "Regulatory or industry-specific language",
];

const connectionCapabilities = [
  {
    label: "API",
    title: "Translation API",
    text: "Send content for translation, retrieve completed translations, access project information, and connect language operations with enterprise applications.",
    linkLabel: "Explore the Translation API",
    href: "https://www.stepes.com/translation-api/",
  },
  {
    label: "Web",
    title: "Website Translation Proxy",
    text: "Support multilingual website workflows without duplicating the complete source-site infrastructure for every language.",
    linkLabel: "Explore Website Translation Proxy",
    href: "https://www.stepes.com/website-translation-proxy/",
  },
  {
    label: "Software",
    title: "Software Localization API",
    text: "Connect software, application, and digital product content with translation workflows designed for ongoing releases.",
    linkLabel: "Explore the Software Localization API",
    href: "https://www.stepes.com/software-localization-api/",
  },
  {
    label: "Enterprise",
    title: "Enterprise Integrations",
    text: "Coordinate translation with content management systems, repositories, product information systems, development environments, and customer-support platforms.",
    linkLabel: "Explore Integrations",
    href: "https://www.stepes.com/integrations/",
  },
];

const governanceControls = [
  {
    title: "User Roles and Permissions",
    text: "Control who can submit content, access projects, review translations, approve deliverables, manage language assets, and view operational information.",
  },
  {
    title: "Configurable Approval Stages",
    text: "Establish approval requirements by business unit, content type, language, market, or risk without slowing every project.",
  },
  {
    title: "Project Histories",
    text: "Maintain visibility into workflow activity, comments, revisions, approvals, and delivery status throughout the project lifecycle.",
  },
  {
    title: "Secure Content Handling",
    text: "Support enterprise requirements for confidentiality, access control, data protection, and secure translation operations.",
  },
  {
    title: "Consistent Governance",
    text: "Apply established language, quality, and approval policies across departments and regions while reflecting local business needs.",
  },
];

const approvalJourney = [
  { label: "Requestor", detail: "Submits content and requirements" },
  { label: "Language Team", detail: "Translates and validates" },
  { label: "Reviewer", detail: "Confirms quality and context" },
  { label: "Approver", detail: "Authorizes release" },
];


const contentOperations = [
  {
    label: "Documents",
    title: "Documents and Technical Content",
    text: "Automate translation for manuals, specifications, procedures, reports, technical documentation, and structured business files while preserving terminology and formatting requirements.",
    linkLabel: "Technical Translation Services",
    href: "https://www.stepes.com/technical-translation-services/",
  },
  {
    label: "Digital",
    title: "Websites and Digital Experiences",
    text: "Coordinate website translation, review, updates, and multilingual delivery as source content changes.",
    linkLabel: "Website Translation Services",
    href: "https://www.stepes.com/website-translation-services/",
  },
  {
    label: "Products",
    title: "Software and Applications",
    text: "Integrate translation into product development and release processes for interfaces, applications, software documentation, and digital experiences.",
    linkLabel: "Software Translation Services",
    href: "https://www.stepes.com/software-translation-services/",
  },
  {
    label: "Commerce",
    title: "Product and E-Commerce Content",
    text: "Scale product descriptions, catalogs, specifications, marketplace content, and supporting materials across languages and markets.",
    linkLabel: "E-Commerce Translation Services",
    href: "https://www.stepes.com/ecommerce-translation-services/",
  },
  {
    label: "Brand",
    title: "Marketing and Brand Content",
    text: "Route campaigns, web content, presentations, and creative materials through professional review, transcreation, and brand approval.",
    linkLabel: "Marketing Translation Services",
    href: "https://www.stepes.com/marketing-translation-services/",
  },
  {
    label: "Learning",
    title: "Training and eLearning",
    text: "Manage multilingual training materials, courses, assessments, narration scripts, videos, and learning-support content.",
    linkLabel: "eLearning Translation Services",
    href: "https://www.stepes.com/elearning-translation-services/",
  },
  {
    label: "Regulated",
    title: "Legal and Regulated Content",
    text: "Apply specialized translation, review, quality assurance, and approval processes to content requiring greater control and subject-matter expertise.",
    linkLabel: "Legal Translation Services",
    href: "https://www.stepes.com/legal-translation-services/",
  },
  {
    label: "Support",
    title: "Customer Support Content",
    text: "Keep help centers, knowledge bases, support articles, chatbot content, and customer communications available across languages.",
    linkLabel: "Multilingual Customer Support",
    href: "https://www.stepes.com/solutions/multilingual-customer-support/",
  },
];

const reportingDimensions = [
  {
    title: "Project and Task Status",
    text: "See where work sits across translation, review, approval, revision, and delivery.",
  },
  {
    title: "Language and Business-Unit Activity",
    text: "Understand how multilingual demand is distributed across markets, departments, and content programs.",
  },
  {
    title: "Pending Reviews and Approvals",
    text: "Identify decisions that need attention before they become delivery bottlenecks.",
  },
  {
    title: "Turnaround and Delivery Performance",
    text: "Evaluate how efficiently content moves through each stage of the workflow.",
  },
  {
    title: "Translation Memory Leverage",
    text: "Monitor how effectively approved language is being reused across new content.",
  },
  {
    title: "Content Volumes and Trends",
    text: "Track changing demand across time, languages, content types, and requesting teams.",
  },
  {
    title: "Quality Results and Recurring Issues",
    text: "Surface patterns that can inform terminology, source-content, training, and workflow improvements.",
  },
  {
    title: "Program Utilization",
    text: "Understand how teams and stakeholders are using the enterprise translation operation.",
  },
];

const enterpriseOutcomes = [
  {
    title: "Reduce Manual Administration",
    text: "Spend less time creating projects, moving files, assigning tasks, requesting updates, and coordinating routine handoffs.",
  },
  {
    title: "Accelerate Multilingual Delivery",
    text: "Move content through predefined translation, review, and approval stages with fewer delays between participants.",
  },
  {
    title: "Improve Process Consistency",
    text: "Apply repeatable workflows across departments, content types, languages, and markets.",
  },
  {
    title: "Use Language Assets More Effectively",
    text: "Automatically apply translation memories, terminology, style guides, and approved instructions to relevant content.",
  },
  {
    title: "Focus Human Expertise Where It Matters",
    text: "Use automation for repetitive operational work while directing linguists and reviewers toward high-value quality decisions.",
  },
  {
    title: "Strengthen Quality and Governance",
    text: "Build terminology, quality checks, review requirements, permissions, and approvals into the process.",
  },
  {
    title: "Scale Without Rebuilding the Workflow",
    text: "Support increasing content volumes, language combinations, business units, and delivery channels through one connected platform.",
  },
  {
    title: "Increase Operational Visibility",
    text: "Give stakeholders a clearer understanding of project progress, ownership, quality, and program performance.",
  },
];

const workflowFaqs = [
  {
    question: "What is a translation workflow?",
    answer:
      "A translation workflow is the sequence of steps used to move content from a source-language request to an approved multilingual deliverable. It may include intake, file analysis, translation memory matching, terminology application, translation, editing, quality assurance, stakeholder approval, and delivery.",
  },
  {
    question: "What is translation workflow automation?",
    answer:
      "Translation workflow automation uses software, business rules, integrations, language assets, and notifications to coordinate translation activities with less manual intervention. It can automate project creation, content routing, task assignment, quality checks, approvals, delivery, and reporting while preserving human review where required.",
  },
  {
    question: "How does workflow automation improve enterprise localization?",
    answer:
      "Automation reduces repetitive administration, standardizes processes, improves visibility, accelerates turnaround, and helps organizations apply consistent quality and governance requirements across languages and business units.",
  },
  {
    question: "Can different content types follow different translation workflows?",
    answer:
      "Yes. Organizations can establish different workflows according to content type, language, audience, risk, turnaround, quality requirements, and approval needs. Routine content may follow a highly automated path, while regulated or customer-facing content may require professional translation, independent review, and formal approval.",
  },
  {
    question: "Does workflow automation replace professional translators?",
    answer:
      "No. Workflow automation coordinates how content and tasks move through the process. Professional translators, editors, subject-matter experts, and in-country reviewers remain essential when content requires linguistic judgment, technical expertise, cultural adaptation, or high-assurance quality.",
  },
  {
    question: "Can Stepes combine AI translation with human review?",
    answer:
      "Yes. Stepes supports configurable AI and human translation workflows. AI can accelerate initial translation, while professional linguists validate accuracy, terminology, fluency, style, and market suitability according to the content’s requirements.",
  },
  {
    question: "How are translation memory and terminology used in automated workflows?",
    answer:
      "Approved translation memories and terminology databases can be applied when content enters a project. This helps reuse previous translations, maintain preferred terminology, improve consistency, and reduce repetitive work.",
  },
  {
    question: "Can translation workflows include multiple review and approval stages?",
    answer:
      "Yes. Workflows can include linguistic review, subject-matter validation, in-country review, brand approval, regulatory review, or other stakeholder stages. Approval requirements can vary by content type, market, language, or risk level.",
  },
  {
    question: "What happens when translated content fails a quality check?",
    answer:
      "The content can be returned to the appropriate translator, reviewer, or stakeholder for correction or clarification. Issues, comments, changes, and approvals remain connected to the workflow so they can be resolved before delivery.",
  },
  {
    question: "Can Stepes connect with enterprise content systems?",
    answer:
      "Stepes supports content exchange through translation APIs, website translation technology, software localization APIs, and enterprise integrations. The connection approach can be aligned with your source systems, content formats, publishing workflow, and enterprise requirements.",
  },
  {
    question: "Is workflow automation suitable for regulated content?",
    answer:
      "Yes, when the workflow is configured with the appropriate qualified linguists, quality controls, review stages, security requirements, and approvals. Regulated and high-risk content should follow a higher-assurance workflow than routine or lower-risk materials.",
  },
  {
    question: "How do organizations begin automating translation workflows?",
    answer:
      "The process typically begins by identifying content sources, current handoffs, language requirements, quality levels, stakeholders, approval rules, delivery destinations, and recurring bottlenecks. Stepes can then help design a workflow aligned with the organization’s content operations and risk requirements.",
  },
];

function ArrowIcon({ direction = "right" }) {
  const transform = direction === "down" ? "rotate(90 12 12)" : undefined;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <g transform={transform}>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </g>
    </svg>
  );
}

function StageIcon({ type }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: "false",
  };

  if (type === "request") {
    return (
      <svg {...common}>
        <path d="M4 6.5h16v12H4z" />
        <path d="M4 13h4l1.5 2h5l1.5-2h4" />
        <path d="M12 3v7" />
        <path d="m9.5 7.5 2.5 2.5 2.5-2.5" />
      </svg>
    );
  }

  if (type === "route") {
    return (
      <svg {...common}>
        <circle cx="6" cy="5" r="2" />
        <circle cx="18" cy="5" r="2" />
        <circle cx="12" cy="19" r="2" />
        <path d="M6 7v2.5A3.5 3.5 0 0 0 9.5 13h5A3.5 3.5 0 0 0 18 9.5V7" />
        <path d="M12 13v4" />
      </svg>
    );
  }

  if (type === "translate") {
    return (
      <svg {...common}>
        <path d="M2.5 5h11" />
        <path d="M7.5 2.5V5" />
        <path d="m5 8 5.5 5.5" />
        <path d="m4 14 6-6 2-3" />
        <path d="M12 21.5 17 12l5 9.5" />
        <path d="M14.2 18h5.6" />
      </svg>
    );
  }

  if (type === "validate") {
    return (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.3 2.7 7.8 7 10 4.3-2.2 7-5.7 7-10V6z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  if (type === "approve") {
    return (
      <svg {...common}>
        <rect x="5" y="4.5" width="14" height="16.5" rx="2.5" />
        <path d="M9 4.5V3h6v1.5" />
        <path d="m8.5 13 2.2 2.2 4.8-5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="m22 2-7 20-4-9-9-4z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function TranslationWorkflowAutomationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="twa-page">
      <style>{`
        .twa-page,
        .twa-page * {
          box-sizing: border-box;
        }

        .twa-page {
          --twa-accent: #c11d63;
          --twa-accent-dark: #a71954;
          --twa-accent-deep: #7a1542;
          --twa-blush: #fdf2f7;
          --twa-ink: #141827;
          --twa-text: #4f5d73;
          --twa-muted: #778398;
          --twa-line: #dfe5ec;
          --twa-soft: #f6f8fb;
          --twa-dark: #171b2a;
          --twa-dark-soft: #202638;
          --twa-white: #ffffff;
          width: 100%;
          overflow-x: clip;
          background: var(--twa-white);
          color: var(--twa-ink);
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
        }

        .twa-shell {
          width: min(100%, 1280px);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .twa-section {
          position: relative;
          padding: 96px 0;
        }

        .twa-eyebrow {
          margin: 0 0 14px;
          color: var(--twa-accent);
          font-size: 11px !important;
          font-weight: 600 !important;
          line-height: 1.4 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
        }

        .twa-page h1,
        .twa-page h2,
        .twa-page h3,
        .twa-page p {
          margin-top: 0;
        }

        .twa-page h1,
        .twa-page h2,
        .twa-page h3 {
          color: var(--twa-ink);
          font-weight: 600;
          letter-spacing: -0.025em;
        }

        .twa-page h1 {
          max-width: 980px;
          margin: 0 auto 22px;
          font-size: 48px;
          line-height: 1.1;
        }

        .twa-page h2 {
          margin-bottom: 22px;
          font-size: 36px;
          line-height: 1.18;
        }

        .twa-page h3 {
          margin-bottom: 8px;
          font-size: 24px;
          line-height: 1.25;
        }

        .twa-hero {
          padding: 104px 0 88px;
          background:
            linear-gradient(180deg, rgba(253, 242, 247, 0.72) 0%, rgba(255, 255, 255, 0) 46%),
            var(--twa-white);
        }

        .twa-hero-copy {
          max-width: 940px;
          margin: 0 auto;
          text-align: center;
        }

        .twa-hero-lede {
          max-width: 820px;
          margin: 0 auto 14px;
          color: var(--twa-text);
          font-size: 18px;
          line-height: 1.68;
        }

        .twa-hero-support {
          max-width: 760px;
          margin: 0 auto;
          color: var(--twa-muted);
          font-size: 16px;
        }

        .twa-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
          margin-top: 30px;
        }

        .twa-button {
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
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .twa-button svg,
        .twa-editorial-link svg {
          width: 17px;
          height: 17px;
          fill: none;
          stroke: currentColor;
          stroke-width: 1.8;
          stroke-linecap: round;
          stroke-linejoin: round;
          flex: 0 0 auto;
        }

        .twa-button--primary,
        .twa-button--primary:visited,
        .twa-button--primary:hover,
        .twa-button--primary:active,
        .twa-button--primary:focus-visible {
          color: #ffffff !important;
        }

        .twa-button--primary {
          background: var(--twa-accent);
          box-shadow: 0 12px 28px rgba(193, 29, 99, 0.18);
        }

        .twa-button--primary:hover {
          background: var(--twa-accent-dark);
          transform: translateY(-1px);
          box-shadow: 0 15px 32px rgba(193, 29, 99, 0.24);
        }

        .twa-button--secondary,
        .twa-button--secondary:visited {
          color: var(--twa-ink);
          border-color: #ccd4de;
          background: rgba(255, 255, 255, 0.9);
        }

        .twa-button--secondary:hover {
          color: var(--twa-accent-deep);
          border-color: #bfc8d4;
          background: #ffffff;
          transform: translateY(-1px);
        }

        .twa-button:focus-visible,
        .twa-editorial-link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 3px;
        }

        .twa-proof {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px 26px;
          margin: 28px auto 0;
          padding: 0;
          color: #667388;
          font-size: 14px;
          list-style: none;
        }

        .twa-proof li {
          position: relative;
          display: flex;
          align-items: center;
          gap: 10px;
          white-space: nowrap;
        }

        .twa-proof li:not(:first-child)::before {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #bdc7d4;
          content: "";
        }

        .twa-workflow-panel {
          margin-top: 58px;
          border: 1px solid var(--twa-line);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 24px 70px rgba(20, 24, 39, 0.08);
          overflow: hidden;
        }

        .twa-workflow-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 22px 26px;
          border-bottom: 1px solid var(--twa-line);
          background: #fbfcfe;
        }

        .twa-workflow-header .twa-eyebrow {
          margin: 0;
        }

        .twa-workflow-status {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #5e6a7e;
          font-size: 14px;
          font-weight: 600;
        }

        .twa-workflow-status::before {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #34a66f;
          box-shadow: 0 0 0 4px rgba(52, 166, 111, 0.12);
          content: "";
        }

        .twa-flow {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          padding: 38px 28px 34px;
        }

        .twa-stage {
          position: relative;
          min-width: 0;
          padding: 0 18px;
          text-align: center;
        }

        .twa-stage:not(:last-child)::after {
          position: absolute;
          top: 23px;
          right: -13px;
          width: 26px;
          border-top: 1px solid #cbd3de;
          content: "";
        }

        .twa-stage:not(:last-child)::before {
          position: absolute;
          top: 19px;
          right: -13px;
          width: 7px;
          height: 7px;
          border-top: 1px solid #cbd3de;
          border-right: 1px solid #cbd3de;
          transform: rotate(45deg);
          content: "";
        }

        .twa-stage-icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
          border: 1px solid #dce2ea;
          border-radius: 14px;
          background: #ffffff;
          color: var(--twa-accent-deep);
          box-shadow: 0 8px 20px rgba(20, 24, 39, 0.06);
        }

        .twa-stage-icon svg {
          width: 23px;
          height: 23px;
          overflow: visible;
        }

        .twa-stage-label {
          margin: 0 0 7px;
          color: var(--twa-ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .twa-stage-detail {
          margin: 0;
          color: var(--twa-muted);
          font-size: 12px;
          line-height: 1.5;
        }

        .twa-flow-paths {
          display: grid;
          grid-template-columns: 1.15fr 1fr;
          gap: 0;
          border-top: 1px solid var(--twa-line);
          background: #fbfcfe;
        }

        .twa-path-group,
        .twa-visibility {
          padding: 24px 28px;
        }

        .twa-path-group {
          border-right: 1px solid var(--twa-line);
        }

        .twa-path-title {
          margin: 0 0 12px;
          color: #687488;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .twa-path-list {
          display: flex;
          flex-wrap: wrap;
          gap: 9px;
        }

        .twa-path-chip {
          padding: 7px 11px;
          border: 1px solid #dbe1e8;
          border-radius: 999px;
          background: #ffffff;
          color: #39465b;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.2;
        }

        .twa-visibility {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          align-items: center;
          gap: 16px;
        }

        .twa-visibility-item {
          min-width: 0;
        }

        .twa-visibility-value {
          display: block;
          color: var(--twa-ink);
          font-size: 14px;
          font-weight: 600;
        }

        .twa-visibility-label {
          display: block;
          margin-top: 2px;
          color: var(--twa-muted);
          font-size: 12px;
          line-height: 1.4;
        }

        .twa-overview {
          background: var(--twa-white);
        }

        .twa-overview-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: 80px;
          align-items: start;
        }

        .twa-overview-title {
          max-width: 520px;
        }

        .twa-overview-copy {
          max-width: 760px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-overview-copy p {
          margin-bottom: 18px;
        }

        .twa-overview-copy p:last-child {
          margin-bottom: 0;
        }

        .twa-scope-panel {
          margin-top: 46px;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-scope-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 30px;
        }

        .twa-scope-item {
          position: relative;
          min-width: 0;
          padding: 24px 30px 24px 30px;
          color: #344158;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.45;
        }

        .twa-scope-item::before {
          position: absolute;
          top: 27px;
          left: 0;
          width: 17px;
          height: 17px;
          border: 1px solid #e4b8cb;
          border-radius: 50%;
          background: var(--twa-blush);
          content: "";
        }

        .twa-scope-item::after {
          position: absolute;
          top: 31px;
          left: 6px;
          width: 4px;
          height: 7px;
          border-right: 1.5px solid var(--twa-accent-deep);
          border-bottom: 1.5px solid var(--twa-accent-deep);
          transform: rotate(45deg);
          content: "";
        }

        .twa-scope-item:nth-child(n + 4) {
          border-top: 1px solid var(--twa-line);
        }


        .twa-overview-close {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          align-items: center;
          gap: 30px;
          margin-top: 30px;
        }

        .twa-overview-close p {
          max-width: 790px;
          margin: 0;
          color: var(--twa-text);
          font-size: 16px;
        }

        .twa-editorial-link,
        .twa-editorial-link:visited {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--twa-accent);
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          white-space: nowrap;
        }

        .twa-editorial-link:hover {
          color: var(--twa-accent-deep);
        }

        .twa-editorial-link:hover svg {
          transform: translateX(2px);
        }

        .twa-editorial-link svg {
          transition: transform 160ms ease;
        }

        .twa-challenges {
          background: var(--twa-dark);
          color: #ffffff;
        }

        .twa-challenges .twa-eyebrow {
          color: #f2a6c7;
        }

        .twa-challenges h2,
        .twa-challenges h3 {
          color: #ffffff;
        }

        .twa-challenge-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 80px;
          align-items: start;
        }

        .twa-challenge-copy {
          max-width: 760px;
          color: #c8d0de;
          font-size: 18px;
        }

        .twa-challenge-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 52px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .twa-challenge-item {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 14px;
          padding: 25px 0 27px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .twa-challenge-marker {
          width: 12px;
          height: 2px;
          margin-top: 11px;
          background: #dc5a93;
        }

        .twa-challenge-item h3 {
          margin-bottom: 7px;
          font-size: 18px;
          letter-spacing: -0.012em;
        }

        .twa-challenge-item p {
          margin: 0;
          color: #aeb8c8;
          font-size: 15px;
          line-height: 1.62;
        }

        .twa-challenge-summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 34px;
          align-items: center;
          margin-top: 36px;
          padding-top: 2px;
        }

        .twa-challenge-summary p {
          max-width: 900px;
          margin: 0;
          color: #dbe1eb;
          font-size: 17px;
        }

        .twa-challenges .twa-editorial-link,
        .twa-challenges .twa-editorial-link:visited {
          color: #f3a8c8;
        }

        .twa-challenges .twa-editorial-link:hover {
          color: #ffffff;
        }


        .twa-section-heading {
          max-width: 820px;
          margin: 0 auto 50px;
          text-align: center;
        }

        .twa-section-heading p:not(.twa-eyebrow) {
          max-width: 760px;
          margin: 0 auto;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-lifecycle {
          background: var(--twa-white);
        }

        .twa-lifecycle-map {
          position: relative;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-lifecycle-rail {
          position: absolute;
          top: 48px;
          right: 6.25%;
          left: 6.25%;
          height: 2px;
          background: linear-gradient(90deg, #d6dce5 0%, var(--twa-accent) 50%, #d6dce5 100%);
        }

        .twa-lifecycle-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(8, minmax(0, 1fr));
          column-gap: 12px;
        }

        .twa-lifecycle-step {
          position: relative;
          min-width: 0;
          padding: 25px 14px 32px;
          text-align: center;
        }


        .twa-lifecycle-number {
          position: relative;
          z-index: 1;
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          margin-bottom: 19px;
          border: 1px solid #dfc3cf;
          border-radius: 50%;
          background: #ffffff;
          color: var(--twa-accent-deep);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          box-shadow: 0 5px 16px rgba(20, 24, 39, 0.06);
        }

        .twa-lifecycle-step h3 {
          margin-bottom: 8px;
          font-size: 16px;
          line-height: 1.35;
          letter-spacing: -0.012em;
        }

        .twa-lifecycle-step p {
          margin: 0;
          color: var(--twa-muted);
          font-size: 13px;
          line-height: 1.55;
        }

        .twa-lifecycle-foundation {
          display: grid;
          grid-template-columns: auto repeat(4, minmax(0, 1fr));
          align-items: center;
          gap: 0;
          margin-top: 28px;
          border: 1px solid var(--twa-line);
          border-radius: 22px;
          background: #fbfcfe;
          overflow: hidden;
        }

        .twa-foundation-label,
        .twa-foundation-item {
          min-height: 74px;
          display: flex;
          align-items: center;
          padding: 16px 22px;
        }

        .twa-foundation-label {
          color: var(--twa-accent-deep);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--twa-blush);
        }

        .twa-foundation-item {
          border-left: 1px solid var(--twa-line);
          color: #435068;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .twa-automation {
          background: var(--twa-soft);
        }

        .twa-automation-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 80px;
          align-items: start;
        }

        .twa-automation-intro > p {
          max-width: 760px;
          margin: 0;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-automation-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 50px;
          border-top: 1px solid #d7dee7;
        }

        .twa-automation-item {
          display: grid;
          grid-template-columns: 90px minmax(0, 1fr);
          gap: 18px;
          padding: 26px 0 28px;
          border-bottom: 1px solid #d7dee7;
        }

        .twa-automation-label {
          padding-top: 3px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.45;
          text-transform: uppercase;
        }

        .twa-automation-item h3 {
          margin-bottom: 7px;
          font-size: 19px;
          letter-spacing: -0.014em;
        }

        .twa-automation-item p {
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
          line-height: 1.62;
        }

        .twa-routing {
          background: var(--twa-white);
        }

        .twa-routing-intro {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .twa-routing-intro > p:not(.twa-eyebrow) {
          max-width: 780px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-routing-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 56px;
          align-items: start;
        }

        .twa-routing-factors {
          border-top: 1px solid var(--twa-line);
        }

        .twa-routing-factors h3,
        .twa-paths-panel > h3 {
          margin: 0;
          padding: 20px 0;
          border-bottom: 1px solid var(--twa-line);
          font-size: 18px;
          letter-spacing: -0.012em;
        }

        .twa-factor-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 28px;
        }

        .twa-factor {
          position: relative;
          min-width: 0;
          padding: 17px 18px 17px 24px;
          border-bottom: 1px solid var(--twa-line);
          color: #435068;
          font-size: 14px;
          line-height: 1.45;
        }


        .twa-factor::before {
          position: absolute;
          top: 24px;
          left: 3px;
          width: 8px;
          height: 2px;
          background: var(--twa-accent);
          content: "";
        }

        .twa-paths-panel {
          padding: 0 30px 28px;
          border: 1px solid #ead6df;
          border-radius: 28px;
          background: linear-gradient(180deg, #fffafd 0%, #ffffff 100%);
          box-shadow: 0 18px 50px rgba(20, 24, 39, 0.06);
        }

        .twa-path-list-large {
          position: relative;
        }

        .twa-path-list-large::before {
          position: absolute;
          top: 26px;
          bottom: 26px;
          left: 9px;
          width: 2px;
          background: linear-gradient(180deg, #d9a6bb 0%, var(--twa-accent) 54%, var(--twa-accent-deep) 100%);
          content: "";
        }

        .twa-path-row {
          position: relative;
          display: grid;
          grid-template-columns: 22px minmax(0, 1fr);
          gap: 15px;
          padding: 23px 0;
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-path-row:last-child {
          border-bottom: 0;
        }

        .twa-path-dot {
          position: relative;
          z-index: 1;
          width: 12px;
          height: 12px;
          margin-top: 6px;
          margin-left: 4px;
          border: 3px solid #ffffff;
          border-radius: 50%;
          background: var(--twa-accent);
          box-shadow: 0 0 0 1px #dba7bd;
        }

        .twa-path-row:last-child .twa-path-dot {
          background: var(--twa-accent-deep);
        }

        .twa-path-row-label {
          margin: 0 0 4px;
          color: var(--twa-accent-deep);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-path-row h3 {
          margin-bottom: 6px;
          font-size: 18px;
          letter-spacing: -0.012em;
        }

        .twa-path-row p:last-child {
          margin: 0;
          color: var(--twa-text);
          font-size: 14px;
          line-height: 1.58;
        }

        .twa-routing-close {
          max-width: 900px;
          margin: 34px auto 0;
          color: var(--twa-text);
          font-size: 17px;
          text-align: center;
        }

        .twa-human {
          background: linear-gradient(180deg, var(--twa-blush) 0%, #ffffff 58%);
        }

        .twa-human-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 80px;
          align-items: start;
        }

        .twa-human-copy {
          max-width: 760px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-human-copy p {
          margin-bottom: 18px;
        }

        .twa-human-copy p:last-of-type {
          margin-bottom: 18px;
        }

        .twa-ai-model {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 48px;
          border: 1px solid #e5d2db;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 20px 55px rgba(20, 24, 39, 0.07);
          overflow: hidden;
        }

        .twa-ai-model-step {
          position: relative;
          min-width: 0;
          padding: 30px 30px 31px;
        }

        .twa-ai-model-step:not(:first-child) {
          border-left: 1px solid var(--twa-line);
        }

        .twa-ai-model-step:not(:last-child)::after {
          position: absolute;
          top: 39px;
          right: -8px;
          z-index: 1;
          width: 15px;
          height: 15px;
          border-top: 1px solid #c7cfda;
          border-right: 1px solid #c7cfda;
          background: #ffffff;
          transform: rotate(45deg);
          content: "";
        }

        .twa-ai-model-label {
          margin: 0 0 10px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-ai-model-step h3 {
          margin-bottom: 8px;
          font-size: 19px;
          letter-spacing: -0.014em;
        }

        .twa-ai-model-step p:last-child {
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
          line-height: 1.6;
        }

        .twa-touchpoints {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 24px;
          margin-top: 34px;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-touchpoint {
          position: relative;
          min-width: 0;
          padding: 20px 18px 20px 29px;
          color: #3f4b62;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.45;
        }


        .twa-touchpoint:nth-child(n + 5) {
          border-top: 1px solid var(--twa-line);
        }

        .twa-touchpoint::before {
          position: absolute;
          top: 25px;
          left: 7px;
          width: 10px;
          height: 5px;
          border-left: 1.5px solid var(--twa-accent);
          border-bottom: 1.5px solid var(--twa-accent);
          transform: rotate(-45deg);
          content: "";
        }

        .twa-human-close {
          max-width: 840px;
          margin: 30px auto 0;
          color: var(--twa-text);
          font-size: 17px;
          text-align: center;
        }


        .twa-assets {
          background: var(--twa-white);
        }

        .twa-assets-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 80px;
          align-items: start;
        }

        .twa-assets-copy {
          max-width: 760px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-assets-copy p {
          margin-bottom: 18px;
        }

        .twa-assets-copy p:last-child {
          margin-bottom: 0;
        }

        .twa-asset-columns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 48px;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-asset-column {
          min-width: 0;
          padding: 32px 42px 34px 0;
        }

        .twa-asset-column + .twa-asset-column {
          padding-right: 0;
          padding-left: 42px;
          border-left: 1px solid var(--twa-line);
        }

        .twa-asset-label {
          margin: 0 0 10px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-asset-column h3 {
          margin-bottom: 10px;
          font-size: 22px;
        }

        .twa-asset-column > p:not(.twa-asset-label) {
          margin-bottom: 22px;
          color: var(--twa-text);
          font-size: 16px;
        }

        .twa-asset-benefits {
          display: grid;
          gap: 0;
          margin: 0 0 18px;
          padding: 0;
          list-style: none;
          border-top: 1px solid var(--twa-line);
        }

        .twa-asset-benefits li {
          position: relative;
          padding: 13px 0 13px 22px;
          border-bottom: 1px solid var(--twa-line);
          color: #435068;
          font-size: 14px;
          line-height: 1.5;
        }

        .twa-asset-benefits li::before {
          position: absolute;
          top: 21px;
          left: 1px;
          width: 9px;
          height: 4px;
          border-left: 1.5px solid var(--twa-accent);
          border-bottom: 1.5px solid var(--twa-accent);
          transform: rotate(-45deg);
          content: "";
        }

        .twa-asset-application {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(420px, 0.92fr);
          gap: 44px;
          align-items: center;
          margin-top: 34px;
          padding: 28px 30px;
          border: 1px solid #ead6df;
          border-radius: 24px;
          background: linear-gradient(90deg, var(--twa-blush) 0%, #ffffff 60%);
        }

        .twa-asset-application h3 {
          margin-bottom: 6px;
          font-size: 19px;
        }

        .twa-asset-application p {
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
        }

        .twa-asset-scopes {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          border: 1px solid var(--twa-line);
          border-radius: 16px;
          background: #ffffff;
          overflow: hidden;
        }

        .twa-asset-scope {
          min-width: 0;
          padding: 13px 9px;
          color: #455268;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.35;
          text-align: center;
        }

        .twa-asset-scope:not(:first-child) {
          border-left: 1px solid var(--twa-line);
        }

        .twa-quality {
          background: var(--twa-soft);
        }

        .twa-quality-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 80px;
          align-items: start;
        }

        .twa-quality-copy {
          max-width: 760px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-quality-flow {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 46px;
          border: 1px solid #d9e0e8;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 18px 48px rgba(20, 24, 39, 0.055);
          overflow: hidden;
        }

        .twa-quality-stage {
          position: relative;
          min-width: 0;
          padding: 29px 32px 31px;
        }

        .twa-quality-stage:not(:first-child) {
          border-left: 1px solid var(--twa-line);
        }

        .twa-quality-stage:not(:last-child)::after {
          position: absolute;
          top: 39px;
          right: -8px;
          z-index: 1;
          width: 15px;
          height: 15px;
          border-top: 1px solid #c6cfda;
          border-right: 1px solid #c6cfda;
          background: #ffffff;
          transform: rotate(45deg);
          content: "";
        }

        .twa-quality-stage-label {
          margin: 0 0 9px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-quality-stage h3 {
          margin-bottom: 7px;
          font-size: 19px;
        }

        .twa-quality-stage p:last-child {
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
          line-height: 1.6;
        }

        .twa-quality-matrix {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 64px;
          margin-top: 42px;
        }

        .twa-quality-group {
          min-width: 0;
          border-top: 1px solid #d5dde7;
        }

        .twa-quality-group h3 {
          margin: 0;
          padding: 18px 0;
          border-bottom: 1px solid #d5dde7;
          font-size: 19px;
        }

        .twa-quality-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 24px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .twa-quality-list li {
          position: relative;
          min-width: 0;
          padding: 15px 16px 15px 22px;
          border-bottom: 1px solid #d5dde7;
          color: #435068;
          font-size: 14px;
          line-height: 1.45;
        }


        .twa-quality-list li::before {
          position: absolute;
          top: 23px;
          left: 1px;
          width: 8px;
          height: 2px;
          background: var(--twa-accent);
          content: "";
        }

        .twa-exception-band {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 38px;
          align-items: center;
          margin-top: 38px;
          padding: 26px 28px;
          border-left: 3px solid var(--twa-accent);
          background: #ffffff;
          box-shadow: 0 10px 35px rgba(20, 24, 39, 0.045);
        }

        .twa-exception-band h3 {
          margin-bottom: 6px;
          font-size: 19px;
        }

        .twa-exception-band p {
          max-width: 790px;
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
        }

        .twa-exception-path {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #4a566b;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .twa-exception-path span {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          padding: 7px 11px;
          border: 1px solid var(--twa-line);
          border-radius: 999px;
          background: #ffffff;
        }

        .twa-exception-path b {
          color: var(--twa-accent);
          font-weight: 600;
        }

        .twa-quality-link {
          margin-top: 22px;
        }

        .twa-connections {
          background: var(--twa-white);
        }

        .twa-connections .twa-section-heading {
          max-width: 860px;
        }

        .twa-system-map {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(280px, 0.72fr) minmax(0, 1fr);
          align-items: stretch;
          margin-top: 46px;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-system-side {
          display: grid;
          grid-template-rows: auto repeat(4, minmax(0, 1fr));
          min-width: 0;
        }

        .twa-system-side h3 {
          margin: 0;
          padding: 18px 22px;
          border-bottom: 1px solid var(--twa-line);
          color: #6a7689;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .twa-system-item {
          position: relative;
          display: flex;
          min-height: 58px;
          align-items: center;
          padding: 14px 30px 14px 22px;
          border-bottom: 1px solid var(--twa-line);
          color: #425068;
          font-size: 14px;
          font-weight: 600;
        }

        .twa-system-item:last-child {
          border-bottom: 0;
        }

        .twa-system-side--source .twa-system-item::after,
        .twa-system-side--destination .twa-system-item::before {
          position: absolute;
          top: 50%;
          width: 18px;
          border-top: 1px solid #c5ced9;
          content: "";
        }

        .twa-system-side--source .twa-system-item::after {
          right: 0;
        }

        .twa-system-side--destination .twa-system-item::before {
          left: 0;
        }

        .twa-system-center {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 24px;
          border-right: 1px solid var(--twa-line);
          border-left: 1px solid var(--twa-line);
          background: linear-gradient(180deg, var(--twa-blush) 0%, #fffafd 100%);
          text-align: center;
        }

        .twa-system-core {
          width: 100%;
          padding: 28px 20px;
          border: 1px solid #dfbdcc;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 14px 38px rgba(20, 24, 39, 0.065);
        }

        .twa-system-core-label {
          margin: 0 0 8px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-system-core h3 {
          margin-bottom: 7px;
          font-size: 20px;
        }

        .twa-system-core p:last-child {
          margin: 0;
          color: var(--twa-text);
          font-size: 14px;
        }

        .twa-connection-list {
          margin-top: 42px;
          border-top: 1px solid var(--twa-line);
        }

        .twa-connection-row {
          display: grid;
          grid-template-columns: 92px minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          padding: 23px 0;
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-connection-label {
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-connection-row h3 {
          margin-bottom: 5px;
          font-size: 18px;
        }

        .twa-connection-row p {
          max-width: 720px;
          margin: 0;
          color: var(--twa-text);
          font-size: 14px;
        }

        .twa-governance {
          background: var(--twa-dark);
          color: #ffffff;
        }

        .twa-governance .twa-eyebrow {
          color: #f2a6c7;
        }

        .twa-governance h2,
        .twa-governance h3 {
          color: #ffffff;
        }

        .twa-governance-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 80px;
          align-items: start;
        }

        .twa-governance-copy {
          max-width: 760px;
          color: #c7d0de;
          font-size: 18px;
        }

        .twa-governance-copy p {
          margin-bottom: 18px;
        }

        .twa-governance-copy p:last-child {
          margin-bottom: 0;
        }

        .twa-governance-layout {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(330px, 0.9fr);
          gap: 58px;
          align-items: start;
          margin-top: 50px;
        }

        .twa-governance-list {
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .twa-governance-item {
          display: grid;
          grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr);
          gap: 26px;
          padding: 22px 0 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.16);
        }

        .twa-governance-item h3 {
          margin: 0;
          font-size: 17px;
        }

        .twa-governance-item p {
          margin: 0;
          color: #aeb8c8;
          font-size: 14px;
          line-height: 1.6;
        }

        .twa-approval-panel {
          padding: 0 28px 28px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          border-radius: 26px;
          background: var(--twa-dark-soft);
        }

        .twa-approval-panel > h3 {
          margin: 0;
          padding: 22px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
          font-size: 19px;
        }

        .twa-approval-journey {
          position: relative;
        }

        .twa-approval-journey::before {
          position: absolute;
          top: 27px;
          bottom: 27px;
          left: 9px;
          width: 1px;
          background: linear-gradient(180deg, #d48eae 0%, var(--twa-accent) 100%);
          content: "";
        }

        .twa-approval-step {
          position: relative;
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 14px;
          padding: 19px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .twa-approval-step:last-child {
          border-bottom: 0;
        }

        .twa-approval-dot {
          position: relative;
          z-index: 1;
          width: 11px;
          height: 11px;
          margin-top: 6px;
          margin-left: 4px;
          border: 3px solid var(--twa-dark-soft);
          border-radius: 50%;
          background: #e07ca8;
          box-shadow: 0 0 0 1px rgba(242, 166, 199, 0.55);
        }

        .twa-approval-step:last-child .twa-approval-dot {
          background: #ffffff;
        }

        .twa-approval-step h3 {
          margin-bottom: 4px;
          font-size: 16px;
        }

        .twa-approval-step p {
          margin: 0;
          color: #aeb8c8;
          font-size: 13px;
        }

        .twa-governance-links {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 28px;
          margin-top: 34px;
          padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
        }

        .twa-governance .twa-editorial-link,
        .twa-governance .twa-editorial-link:visited {
          color: #f3a8c8;
        }

        .twa-governance .twa-editorial-link:hover {
          color: #ffffff;
        }



        .twa-content-operations {
          background: var(--twa-white);
        }

        .twa-content-intro {
          display: grid;
          grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
          gap: 80px;
          align-items: start;
        }

        .twa-content-copy {
          max-width: 760px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-content-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 48px;
          border-top: 1px solid var(--twa-line);
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-content-item {
          min-width: 0;
          padding: 27px 26px 29px;
        }

        .twa-content-item:not(:nth-child(4n + 1)) {
          border-left: 1px solid var(--twa-line);
        }

        .twa-content-item:nth-child(n + 5) {
          border-top: 1px solid var(--twa-line);
        }

        .twa-content-label {
          margin: 0 0 10px;
          color: var(--twa-accent);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.11em;
          line-height: 1.4;
          text-transform: uppercase;
        }

        .twa-content-item h3 {
          margin-bottom: 9px;
          font-size: 19px;
        }

        .twa-content-item > p:not(.twa-content-label) {
          margin-bottom: 18px;
          color: var(--twa-text);
          font-size: 14px;
          line-height: 1.62;
        }

        .twa-content-item .twa-editorial-link {
          min-height: 40px;
          font-size: 14px;
          white-space: normal;
        }

        .twa-reporting {
          background: var(--twa-soft);
        }

        .twa-reporting-layout {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 76px;
          align-items: start;
        }

        .twa-reporting-copy {
          position: sticky;
          top: 28px;
        }

        .twa-reporting-copy > p:not(.twa-eyebrow) {
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-reporting-copy .twa-editorial-link {
          margin-top: 10px;
        }

        .twa-reporting-panel {
          border: 1px solid #d9e0e8;
          border-radius: 28px;
          background: #ffffff;
          box-shadow: 0 20px 52px rgba(20, 24, 39, 0.06);
          overflow: hidden;
        }

        .twa-reporting-panel-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 22px;
          padding: 21px 24px;
          border-bottom: 1px solid var(--twa-line);
          background: #fbfcfe;
        }

        .twa-reporting-panel-header p {
          margin: 0;
          color: var(--twa-ink);
          font-size: 14px;
          font-weight: 600;
        }

        .twa-reporting-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #687589;
          font-size: 12px;
          font-weight: 600;
        }

        .twa-reporting-status::before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #34a66f;
          box-shadow: 0 0 0 4px rgba(52, 166, 111, 0.11);
          content: "";
        }

        .twa-reporting-dimensions {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .twa-reporting-item {
          position: relative;
          min-width: 0;
          padding: 23px 28px 24px 52px;
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-reporting-item:nth-child(even) {
          border-left: 1px solid var(--twa-line);
        }

        .twa-reporting-item:nth-last-child(-n + 2) {
          border-bottom: 0;
        }

        .twa-reporting-marker {
          position: absolute;
          top: 29px;
          left: 27px;
          width: 10px;
          height: 10px;
          border: 2px solid #cf6a98;
          border-radius: 50%;
          background: #ffffff;
        }

        .twa-reporting-item h3 {
          margin-bottom: 6px;
          font-size: 16px;
        }

        .twa-reporting-item p {
          margin: 0;
          color: var(--twa-text);
          font-size: 13px;
          line-height: 1.55;
        }

        .twa-reporting-note {
          margin: 0;
          padding: 21px 24px;
          border-top: 1px solid var(--twa-line);
          background: var(--twa-blush);
          color: #5d4b55;
          font-size: 14px;
        }

        .twa-outcomes {
          background: var(--twa-white);
        }

        .twa-outcomes-intro {
          max-width: 860px;
        }

        .twa-outcomes-intro > p:not(.twa-eyebrow) {
          max-width: 780px;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-outcomes-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 64px;
          margin-top: 46px;
          border-top: 1px solid var(--twa-line);
        }

        .twa-outcome-item {
          display: grid;
          grid-template-columns: 16px minmax(0, 1fr);
          gap: 15px;
          padding: 24px 0 26px;
          border-bottom: 1px solid var(--twa-line);
        }

        .twa-outcome-rule {
          width: 12px;
          height: 2px;
          margin-top: 11px;
          background: var(--twa-accent);
        }

        .twa-outcome-item h3 {
          margin-bottom: 6px;
          font-size: 18px;
        }

        .twa-outcome-item p {
          margin: 0;
          color: var(--twa-text);
          font-size: 14px;
          line-height: 1.62;
        }

        .twa-outcomes-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          margin-top: 32px;
          padding: 26px 28px;
          border: 1px solid #ead7e0;
          border-radius: 24px;
          background: linear-gradient(90deg, var(--twa-blush) 0%, #ffffff 68%);
        }

        .twa-outcomes-action p {
          max-width: 760px;
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
        }

        .twa-faq {
          background: var(--twa-soft);
        }

        .twa-faq-layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 72px;
          align-items: start;
        }

        .twa-faq-intro {
          position: sticky;
          top: 28px;
        }

        .twa-faq-intro > p:not(.twa-eyebrow) {
          color: var(--twa-text);
          font-size: 17px;
        }

        .twa-faq-list {
          border-top: 1px solid #d8e0e9;
        }

        .twa-faq-item {
          border-bottom: 1px solid #d8e0e9;
        }

        .twa-faq-question {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 34px;
          gap: 20px;
          width: 100%;
          min-height: 70px;
          align-items: center;
          padding: 20px 0;
          border: 0;
          background: transparent;
          color: var(--twa-ink);
          font: inherit;
          text-align: left;
          cursor: pointer;
        }

        .twa-faq-question span:first-child {
          font-size: 17px;
          font-weight: 600;
          line-height: 1.45;
        }

        .twa-faq-toggle {
          position: relative;
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid #cad3de;
          border-radius: 50%;
          background: #ffffff;
        }

        .twa-faq-toggle::before,
        .twa-faq-toggle::after {
          position: absolute;
          width: 12px;
          height: 1.5px;
          background: var(--twa-accent);
          content: "";
          transition: transform 160ms ease;
        }

        .twa-faq-toggle::after {
          transform: rotate(90deg);
        }

        .twa-faq-question[aria-expanded="true"] .twa-faq-toggle::after {
          transform: rotate(0deg);
        }

        .twa-faq-question:hover .twa-faq-toggle {
          border-color: #b9c5d2;
          background: var(--twa-blush);
        }

        .twa-faq-question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.2);
          outline-offset: 4px;
        }

        .twa-faq-answer {
          max-width: 820px;
          padding: 0 54px 22px 0;
        }

        .twa-faq-answer p {
          margin: 0;
          color: var(--twa-text);
          font-size: 15px;
          line-height: 1.7;
        }

        .twa-final-cta {
          padding: 88px 0 96px;
          background: #ffffff;
        }

        .twa-final-panel {
          position: relative;
          padding: 62px 64px;
          border: 1px solid #ead5df;
          border-radius: 30px;
          background: linear-gradient(120deg, var(--twa-blush) 0%, #ffffff 72%);
          overflow: hidden;
        }

        .twa-final-content {
          position: relative;
          z-index: 1;
          max-width: 820px;
        }

        .twa-final-content h2 {
          max-width: 760px;
          margin-bottom: 18px;
        }

        .twa-final-content > p {
          max-width: 780px;
          margin-bottom: 0;
          color: var(--twa-text);
          font-size: 18px;
        }

        .twa-final-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }


        @media (max-width: 1199px) {
          .twa-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .twa-flow {
            grid-template-columns: repeat(3, minmax(0, 1fr));
            row-gap: 34px;
          }

          .twa-stage:nth-child(3)::after,
          .twa-stage:nth-child(3)::before {
            display: none;
          }

          .twa-stage:nth-child(n + 4) {
            padding-top: 8px;
          }

          .twa-stage:nth-child(4)::after,
          .twa-stage:nth-child(5)::after {
            top: 31px;
          }

          .twa-stage:nth-child(4)::before,
          .twa-stage:nth-child(5)::before {
            top: 27px;
          }

          .twa-overview-intro,
          .twa-challenge-intro {
            gap: 52px;
          }
        }

        @media (max-width: 900px) {
          .twa-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .twa-section {
            padding: 80px 0;
          }

          .twa-hero {
            padding: 88px 0 78px;
          }

          .twa-page h1 {
            font-size: 42px;
          }

          .twa-page h2 {
            font-size: 32px;
          }

          .twa-page h3 {
            font-size: 22px;
          }

          .twa-workflow-panel {
            margin-top: 48px;
          }

          .twa-flow-paths {
            grid-template-columns: 1fr;
          }

          .twa-path-group {
            border-right: 0;
            border-bottom: 1px solid var(--twa-line);
          }

          .twa-overview-intro,
          .twa-challenge-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .twa-overview-title {
            max-width: 680px;
          }

          .twa-scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 24px;
          }

          .twa-scope-item:nth-child(n + 4) {
            border-top: 0;
          }

          .twa-scope-item:nth-child(n + 3) {
            border-top: 1px solid var(--twa-line);
          }


          .twa-overview-close,
          .twa-challenge-summary {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .twa-editorial-link {
            width: fit-content;
          }

          .twa-challenge-grid {
            column-gap: 40px;
          }
        }

        @media (max-width: 680px) {
          .twa-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .twa-section {
            padding: 68px 0;
          }

          .twa-hero {
            padding: 72px 0 64px;
          }

          .twa-page h1 {
            font-size: 38px;
            line-height: 1.12;
          }

          .twa-page h2 {
            font-size: 30px;
          }

          .twa-page h3 {
            font-size: 20px;
          }

          .twa-editorial-link {
            max-width: 100%;
            min-width: 0;
            align-items: flex-start;
            line-height: 1.45;
            white-space: normal;
          }

          .twa-editorial-link svg {
            margin-top: 3px;
          }

          .twa-hero-lede {
            font-size: 18px;
          }

          .twa-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
            margin-top: 26px;
          }

          .twa-button {
            width: 100%;
            min-height: 50px;
            padding-right: 18px;
            padding-left: 18px;
            text-align: center;
            white-space: normal;
          }

          .twa-proof {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px 14px;
            text-align: left;
          }

          .twa-proof li {
            align-items: flex-start;
            white-space: normal;
          }

          .twa-proof li::before {
            display: none;
          }

          .twa-proof li {
            padding-left: 13px;
          }

          .twa-proof li::after {
            position: absolute;
            top: 10px;
            left: 0;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: #bdc7d4;
            content: "";
          }

          .twa-workflow-panel {
            margin-top: 40px;
            border-radius: 24px;
          }

          .twa-workflow-header {
            align-items: flex-start;
            padding: 19px 18px;
          }

          .twa-workflow-status {
            max-width: 120px;
            justify-content: flex-end;
            text-align: right;
            line-height: 1.35;
          }

          .twa-flow {
            display: block;
            padding: 24px 18px 20px;
          }

          .twa-stage {
            display: grid;
            grid-template-columns: 46px minmax(0, 1fr);
            column-gap: 15px;
            padding: 0 0 25px 0 !important;
            text-align: left;
          }

          .twa-stage:not(:last-child)::after {
            top: 46px !important;
            right: auto !important;
            bottom: 2px;
            left: 22px;
            width: auto;
            height: auto;
            border-top: 0;
            border-left: 1px solid #cbd3de;
            content: "";
          }

          .twa-stage:not(:last-child)::before {
            top: auto !important;
            right: auto !important;
            bottom: 1px;
            left: 19px;
            width: 7px;
            height: 7px;
            border-top: 0;
            border-right: 1px solid #cbd3de;
            border-bottom: 1px solid #cbd3de;
            transform: rotate(45deg);
            content: "";
          }

          .twa-stage-icon {
            grid-row: 1 / span 2;
            margin: 0;
          }

          .twa-stage-label {
            align-self: end;
            margin-bottom: 4px;
            font-size: 15px;
          }

          .twa-stage-detail {
            font-size: 13px;
          }

          .twa-path-group,
          .twa-visibility {
            padding: 20px 18px;
          }

          .twa-visibility {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .twa-visibility-item {
            padding-bottom: 10px;
            border-bottom: 1px solid var(--twa-line);
          }

          .twa-visibility-item:last-child {
            padding-bottom: 0;
            border-bottom: 0;
          }

          .twa-overview-copy,
          .twa-challenge-copy {
            font-size: 17px;
          }

          .twa-scope-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
          }


          .twa-scope-item:not(:first-child) {
            border-top: 1px solid var(--twa-line);
          }

          .twa-scope-item {
            padding: 20px 18px 20px 30px;
          }

          .twa-scope-item::before {
            top: 22px;
          }

          .twa-scope-item::after {
            top: 26px;
          }

          .twa-challenge-grid {
            grid-template-columns: 1fr;
            margin-top: 38px;
          }

          .twa-challenge-item {
            padding: 22px 0 24px;
          }
        }

        @media (max-width: 360px) {
          .twa-page h1 {
            font-size: 36px;
          }

          .twa-proof {
            grid-template-columns: 1fr;
          }

          .twa-workflow-header {
            display: block;
          }

          .twa-workflow-status {
            max-width: none;
            justify-content: flex-start;
            margin-top: 12px;
            text-align: left;
          }
        }


        @media (max-width: 1199px) {
          .twa-lifecycle-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .twa-lifecycle-rail {
            display: none;
          }

          .twa-lifecycle-step:nth-child(n + 5) {
            border-top: 1px solid var(--twa-line);
          }

          .twa-lifecycle-step:nth-child(5) {
            border-left: 0;
          }

          .twa-automation-intro,
          .twa-human-intro {
            gap: 52px;
          }

          .twa-routing-layout {
            gap: 40px;
          }
        }

        @media (max-width: 900px) {
          .twa-section-heading {
            margin-bottom: 40px;
          }

          .twa-lifecycle-foundation {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .twa-foundation-label {
            grid-column: 1 / -1;
            min-height: 54px;
          }

          .twa-foundation-item {
            min-height: 64px;
            border-top: 1px solid var(--twa-line);
          }

          .twa-foundation-item:nth-child(even) {
            border-left: 0;
          }

          .twa-automation-intro,
          .twa-human-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .twa-automation-list {
            column-gap: 40px;
          }

          .twa-routing-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .twa-ai-model {
            grid-template-columns: 1fr;
          }

          .twa-ai-model-step:not(:first-child) {
            border-top: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-ai-model-step:not(:last-child)::after {
            top: auto;
            right: 50%;
            bottom: -8px;
            transform: translateX(50%) rotate(135deg);
          }

          .twa-touchpoints {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 24px;
          }


          .twa-touchpoint:nth-child(n + 3) {
            border-top: 1px solid var(--twa-line);
          }
        }

        @media (max-width: 680px) {
          .twa-section-heading {
            margin-bottom: 34px;
            text-align: left;
          }

          .twa-section-heading p:not(.twa-eyebrow) {
            font-size: 17px;
          }

          .twa-lifecycle-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
          }

          .twa-lifecycle-step {
            display: grid;
            grid-template-columns: 46px minmax(0, 1fr);
            column-gap: 16px;
            padding: 21px 0 22px;
            text-align: left;
          }

          .twa-lifecycle-step:not(:first-child),
          .twa-lifecycle-step:nth-child(n + 5) {
            border-top: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-lifecycle-number {
            grid-row: 1 / span 2;
            margin: 0;
          }

          .twa-lifecycle-step h3 {
            align-self: end;
            margin-bottom: 4px;
            font-size: 17px;
          }

          .twa-lifecycle-step p {
            font-size: 14px;
          }

          .twa-lifecycle-foundation {
            grid-template-columns: 1fr;
            border-radius: 20px;
          }

          .twa-foundation-label {
            grid-column: auto;
          }

          .twa-foundation-item,
          .twa-foundation-item:nth-child(even) {
            min-height: 56px;
            border-top: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-automation-intro > p,
          .twa-routing-intro > p:not(.twa-eyebrow),
          .twa-human-copy {
            font-size: 17px;
          }

          .twa-automation-list {
            grid-template-columns: 1fr;
            margin-top: 36px;
          }

          .twa-automation-item {
            grid-template-columns: 1fr;
            gap: 7px;
            padding: 22px 0 24px;
          }

          .twa-automation-label {
            padding-top: 0;
          }

          .twa-automation-item h3 {
            font-size: 18px;
          }

          .twa-routing-intro {
            margin-bottom: 34px;
          }

          .twa-factor-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
          }


          .twa-paths-panel {
            padding: 0 20px 20px;
            border-radius: 22px;
          }

          .twa-routing-close,
          .twa-human-close {
            font-size: 16px;
            text-align: left;
          }

          .twa-ai-model {
            margin-top: 36px;
            border-radius: 22px;
          }

          .twa-ai-model-step {
            padding: 24px 22px 25px;
          }

          .twa-touchpoints {
            grid-template-columns: 1fr;
            column-gap: 0;
          }


          .twa-touchpoint:not(:first-child) {
            border-top: 1px solid var(--twa-line);
          }
        }


        @media (max-width: 1199px) {
          .twa-assets-intro,
          .twa-quality-intro,
          .twa-governance-intro {
            gap: 54px;
          }

          .twa-asset-application {
            grid-template-columns: 1fr;
            gap: 22px;
          }

          .twa-quality-matrix {
            gap: 42px;
          }

          .twa-system-map {
            grid-template-columns: minmax(0, 1fr) minmax(245px, 0.72fr) minmax(0, 1fr);
          }

          .twa-governance-layout {
            gap: 42px;
          }

          .twa-governance-item {
            grid-template-columns: 170px minmax(0, 1fr);
          }
        }

        @media (max-width: 900px) {
          .twa-assets-intro,
          .twa-quality-intro,
          .twa-governance-intro {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .twa-asset-column {
            padding-right: 30px;
          }

          .twa-asset-column + .twa-asset-column {
            padding-left: 30px;
          }

          .twa-asset-scopes {
            grid-template-columns: repeat(5, minmax(92px, 1fr));
            overflow-x: auto;
          }

          .twa-quality-flow {
            grid-template-columns: 1fr;
          }

          .twa-quality-stage:not(:first-child) {
            border-top: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-quality-stage:not(:last-child)::after {
            top: auto;
            right: 50%;
            bottom: -8px;
            transform: translateX(50%) rotate(135deg);
          }

          .twa-quality-matrix {
            grid-template-columns: 1fr;
          }

          .twa-exception-band {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .twa-exception-path {
            flex-wrap: wrap;
          }

          .twa-system-map {
            grid-template-columns: 1fr;
          }

          .twa-system-center {
            border-top: 1px solid var(--twa-line);
            border-right: 0;
            border-bottom: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-system-side--source .twa-system-item::after,
          .twa-system-side--destination .twa-system-item::before {
            display: none;
          }

          .twa-connection-row {
            grid-template-columns: 78px minmax(0, 1fr);
          }

          .twa-connection-row .twa-editorial-link {
            grid-column: 2;
          }

          .twa-governance-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .twa-assets-copy,
          .twa-quality-copy,
          .twa-governance-copy {
            font-size: 17px;
          }

          .twa-asset-columns {
            grid-template-columns: 1fr;
            margin-top: 38px;
          }

          .twa-asset-column,
          .twa-asset-column + .twa-asset-column {
            padding: 26px 0 28px;
            border-left: 0;
          }

          .twa-asset-column + .twa-asset-column {
            border-top: 1px solid var(--twa-line);
          }

          .twa-asset-application {
            padding: 24px 20px;
            border-radius: 22px;
          }

          .twa-asset-scopes {
            grid-template-columns: 1fr;
            overflow: hidden;
          }

          .twa-asset-scope:not(:first-child) {
            border-top: 1px solid var(--twa-line);
            border-left: 0;
          }

          .twa-quality-flow {
            margin-top: 36px;
            border-radius: 22px;
          }

          .twa-quality-stage {
            padding: 24px 22px 26px;
          }

          .twa-quality-matrix {
            gap: 34px;
          }

          .twa-quality-list {
            grid-template-columns: 1fr;
            column-gap: 0;
          }


          .twa-exception-band {
            padding: 23px 20px;
          }

          .twa-exception-path {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .twa-exception-path b {
            display: none;
          }

          .twa-exception-path span {
            justify-content: center;
          }

          .twa-system-map {
            margin-top: 36px;
          }

          .twa-system-side h3,
          .twa-system-item {
            padding-right: 18px;
            padding-left: 18px;
          }

          .twa-system-center {
            padding: 24px 18px;
          }

          .twa-system-core {
            padding: 24px 18px;
            border-radius: 21px;
          }

          .twa-connection-row {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 22px 0 24px;
          }

          .twa-connection-row .twa-editorial-link {
            grid-column: 1;
            margin-top: 4px;
          }

          .twa-governance-layout {
            margin-top: 38px;
          }

          .twa-governance-item {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .twa-approval-panel {
            padding: 0 20px 22px;
            border-radius: 22px;
          }

          .twa-governance-links {
            display: grid;
            grid-template-columns: 1fr;
            gap: 4px;
          }
        }



        @media (max-width: 1199px) {
          .twa-content-intro {
            gap: 54px;
          }

          .twa-content-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .twa-content-item:not(:nth-child(4n + 1)) {
            border-left: 0;
          }

          .twa-content-item:nth-child(n + 5) {
            border-top: 0;
          }

          .twa-content-item:nth-child(even) {
            border-left: 1px solid var(--twa-line);
          }

          .twa-content-item:nth-child(n + 3) {
            border-top: 1px solid var(--twa-line);
          }

          .twa-reporting-layout {
            gap: 52px;
          }

          .twa-faq-layout {
            gap: 52px;
          }
        }

        @media (max-width: 900px) {
          .twa-content-intro,
          .twa-reporting-layout,
          .twa-faq-layout {
            grid-template-columns: 1fr;
            gap: 26px;
          }

          .twa-reporting-copy,
          .twa-faq-intro {
            position: static;
          }

          .twa-outcomes-action {
            align-items: flex-start;
          }

          .twa-final-panel {
            padding: 54px 44px;
          }
        }

        @media (max-width: 680px) {
          .twa-content-copy,
          .twa-reporting-copy > p:not(.twa-eyebrow),
          .twa-outcomes-intro > p:not(.twa-eyebrow),
          .twa-final-content > p:not(.twa-eyebrow) {
            font-size: 17px;
          }

          .twa-content-grid {
            grid-template-columns: 1fr;
            margin-top: 38px;
          }

          .twa-content-item,
          .twa-content-item:nth-child(even) {
            padding: 23px 0 25px;
            border-left: 0;
          }

          .twa-content-item:not(:first-child) {
            border-top: 1px solid var(--twa-line);
          }

          .twa-reporting-panel {
            border-radius: 22px;
          }

          .twa-reporting-panel-header {
            align-items: flex-start;
            padding: 19px 18px;
          }

          .twa-reporting-status {
            max-width: 110px;
            justify-content: flex-end;
            text-align: right;
            line-height: 1.35;
          }

          .twa-reporting-dimensions {
            grid-template-columns: 1fr;
          }

          .twa-reporting-item {
            padding: 21px 20px 22px 47px;
          }

          .twa-reporting-item:nth-child(even) {
            border-left: 0;
          }

          .twa-reporting-item:nth-last-child(-n + 2) {
            border-bottom: 1px solid var(--twa-line);
          }

          .twa-reporting-item:last-child {
            border-bottom: 0;
          }

          .twa-reporting-marker {
            top: 27px;
            left: 22px;
          }

          .twa-reporting-note {
            padding: 19px 18px;
          }

          .twa-outcomes-grid {
            grid-template-columns: 1fr;
            column-gap: 0;
            margin-top: 38px;
          }

          .twa-outcomes-action {
            display: grid;
            grid-template-columns: 1fr;
            gap: 14px;
            padding: 23px 20px;
            border-radius: 22px;
          }

          .twa-faq-question {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 14px;
            min-height: 66px;
          }

          .twa-faq-question span:first-child {
            font-size: 16px;
          }

          .twa-faq-toggle {
            width: 32px;
            height: 32px;
          }

          .twa-faq-answer {
            padding-right: 0;
          }

          .twa-final-cta {
            padding: 68px 0 72px;
          }

          .twa-final-panel {
            padding: 42px 24px;
            border-radius: 24px;
          }


          .twa-final-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .twa-final-actions .twa-button {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .twa-reporting-panel-header {
            display: block;
          }

          .twa-reporting-status {
            max-width: none;
            justify-content: flex-start;
            margin-top: 10px;
            text-align: left;
          }

          .twa-final-panel {
            padding-right: 20px;
            padding-left: 20px;
          }
        }


        @media (prefers-reduced-motion: reduce) {
          .twa-button,
          .twa-editorial-link svg {
            transition: none;
          }
        }
      `}</style>

      <section className="twa-hero" aria-labelledby="twa-hero-title">
        <div className="twa-shell">
          <div className="twa-hero-copy">
            <h1 id="twa-hero-title">Translation Workflow Automation for Enterprise Language Operations</h1>
            <p className="twa-hero-lede">
              Automate how multilingual content moves from request to delivery. Stepes connects content intake,
              workflow routing, translation memory, terminology, AI translation, professional human review,
              quality assurance, approvals, delivery, and reporting in one controlled process.
            </p>
            <p className="twa-hero-support">
              Build repeatable translation workflows that reduce manual handoffs, improve operational visibility,
              and scale across content types, languages, teams, and markets.
            </p>

            <div className="twa-actions" aria-label="Workflow automation actions">
              <a className="twa-button twa-button--primary" href="https://www.stepes.com/contact-us/">
                Request a Demo
                <ArrowIcon />
              </a>
              <a
                className="twa-button twa-button--secondary"
                href="https://www.stepes.com/enterprise-translation-management/"
              >
                Explore Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>

            <ul className="twa-proof" aria-label="Stepes platform highlights">
              <li>ISO-Certified Quality</li>
              <li>100+ Languages</li>
              <li>AI + Human Workflows</li>
              <li>Enterprise Security</li>
            </ul>
          </div>

          <div className="twa-workflow-panel" aria-label="Connected enterprise translation workflow">
            <div className="twa-workflow-header">
              <p className="twa-eyebrow">Connected Enterprise Workflow</p>
              <span className="twa-workflow-status">Controlled from request to release</span>
            </div>

            <div className="twa-flow">
              {workflowStages.map((stage) => (
                <div className="twa-stage" key={stage.key}>
                  <span className="twa-stage-icon">
                    <StageIcon type={stage.key} />
                  </span>
                  <p className="twa-stage-label">{stage.label}</p>
                  <p className="twa-stage-detail">{stage.detail}</p>
                </div>
              ))}
            </div>

            <div className="twa-flow-paths">
              <div className="twa-path-group">
                <p className="twa-path-title">Configurable Production Paths</p>
                <div className="twa-path-list">
                  <span className="twa-path-chip">AI Translation</span>
                  <span className="twa-path-chip">AI + Human Review</span>
                  <span className="twa-path-chip">Professional Translation</span>
                  <span className="twa-path-chip">High-Assurance Review</span>
                </div>
              </div>

              <div className="twa-visibility" aria-label="Workflow visibility">
                <div className="twa-visibility-item">
                  <span className="twa-visibility-value">Rules-Based</span>
                  <span className="twa-visibility-label">Routing and approvals</span>
                </div>
                <div className="twa-visibility-item">
                  <span className="twa-visibility-value">Asset-Aware</span>
                  <span className="twa-visibility-label">TM and terminology</span>
                </div>
                <div className="twa-visibility-item">
                  <span className="twa-visibility-value">Visible</span>
                  <span className="twa-visibility-label">Status and reporting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="twa-section twa-overview" aria-labelledby="twa-overview-title">
        <div className="twa-shell">
          <div className="twa-overview-intro">
            <div className="twa-overview-title">
              <p className="twa-eyebrow">Translation Process Orchestration</p>
              <h2 id="twa-overview-title">What Is Translation Workflow Automation?</h2>
            </div>

            <div className="twa-overview-copy">
              <p>
                Translation workflow automation uses connected technologies, business rules, language assets, and
                quality controls to coordinate every stage of the multilingual content lifecycle.
              </p>
              <p>
                Instead of manually creating projects, moving files, assigning linguists, applying terminology,
                requesting approvals, and tracking delivery, enterprises can establish repeatable workflows that
                automatically route content through the appropriate translation and review process.
              </p>
            </div>
          </div>

          <div className="twa-scope-panel" aria-label="Translation workflow automation capabilities">
            <div className="twa-scope-grid">
              {automationScope.map((item) => (
                <div className="twa-scope-item" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="twa-overview-close">
            <p>
              The result is a faster, more consistent, and more governable way to manage translation across the
              enterprise—while preserving professional expertise wherever content requires human judgment.
            </p>
            <a
              className="twa-editorial-link"
              href="https://www.stepes.com/ai-translation-platform/"
            >
              Explore the AI Translation Platform
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="twa-section twa-challenges" aria-labelledby="twa-challenges-title">
        <div className="twa-shell">
          <div className="twa-challenge-intro">
            <div>
              <p className="twa-eyebrow">Enterprise Scale</p>
              <h2 id="twa-challenges-title">Replace Fragmented Processes with Connected Language Operations</h2>
            </div>

            <p className="twa-challenge-copy">
              Translation programs often begin with email requests, shared folders, spreadsheets, and individual
              project coordination. These processes may work for occasional projects, but they become difficult to
              manage as content volumes, language combinations, stakeholders, and delivery channels increase.
            </p>
          </div>

          <div className="twa-challenge-grid">
            {challenges.map((challenge) => (
              <article className="twa-challenge-item" key={challenge.title}>
                <span className="twa-challenge-marker" aria-hidden="true" />
                <div>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="twa-challenge-summary">
            <p>
              Stepes brings these activities into a coordinated workflow. Each request can follow a predefined path
              based on business requirements, content risk, language, turnaround, and quality expectations—without
              forcing every project into the same translation process.
            </p>
            <a
              className="twa-editorial-link"
              href="https://www.stepes.com/enterprise-translation-management/"
            >
              Explore Enterprise Translation Management
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="twa-section twa-lifecycle" aria-labelledby="twa-lifecycle-title">
        <div className="twa-shell">
          <div className="twa-section-heading">
            <h2 id="twa-lifecycle-title">One Connected Workflow from Content Intake to Delivery</h2>
            <p>
              Stepes connects the technologies, people, language assets, and decisions required to move multilingual
              content forward through one visible, controlled process.
            </p>
          </div>

          <div className="twa-lifecycle-map" aria-label="Eight-stage translation lifecycle">
            <div className="twa-lifecycle-rail" aria-hidden="true" />
            <div className="twa-lifecycle-grid">
              {lifecycleSteps.map((step) => (
                <article className="twa-lifecycle-step" key={step.number}>
                  <span className="twa-lifecycle-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="twa-lifecycle-foundation" aria-label="Capabilities supporting every workflow stage">
            <div className="twa-foundation-label">Applied Across the Workflow</div>
            <div className="twa-foundation-item">Business Rules and Routing Logic</div>
            <div className="twa-foundation-item">Translation Memory and Terminology</div>
            <div className="twa-foundation-item">Roles, Reviews, and Approvals</div>
            <div className="twa-foundation-item">Status, History, and Reporting</div>
          </div>
        </div>
      </section>

      <section className="twa-section twa-automation" aria-labelledby="twa-automation-title">
        <div className="twa-shell">
          <div className="twa-automation-intro">
            <div>
              <h2 id="twa-automation-title">Automate Every Stage of Enterprise Translation</h2>
            </div>
            <p>
              Stepes automates the repetitive operational work surrounding translation so language specialists can
              focus on content quality, market readiness, and the decisions that require professional expertise.
            </p>
          </div>

          <div className="twa-automation-list">
            {automationCapabilities.map((item) => (
              <article className="twa-automation-item" key={item.title}>
                <span className="twa-automation-label">{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="twa-section twa-routing" aria-labelledby="twa-routing-title">
        <div className="twa-shell">
          <div className="twa-routing-intro">
            <p className="twa-eyebrow">Rules-Based Routing</p>
            <h2 id="twa-routing-title">Match Every Content Type to the Right Workflow</h2>
            <p>
              Not every piece of enterprise content requires the same translation process. Stepes uses configurable
              workflow rules to align automation, professional review, quality controls, and approval requirements
              with the content’s audience, business impact, and risk.
            </p>
          </div>

          <div className="twa-routing-layout">
            <div className="twa-routing-factors">
              <h3>Workflow Routing Can Reflect</h3>
              <div className="twa-factor-grid">
                {routingFactors.map((factor) => (
                  <div className="twa-factor" key={factor}>{factor}</div>
                ))}
              </div>
            </div>

            <div className="twa-paths-panel">
              <h3>Configurable Translation Paths</h3>
              <div className="twa-path-list-large">
                {workflowPaths.map((path) => (
                  <article className="twa-path-row" key={path.title}>
                    <span className="twa-path-dot" aria-hidden="true" />
                    <div>
                      <p className="twa-path-row-label">{path.label}</p>
                      <h3>{path.title}</h3>
                      <p>{path.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <p className="twa-routing-close">
            This risk-based approach helps your organization apply resources where they create the greatest value—
            without overprocessing routine content or under-reviewing critical materials.
          </p>
        </div>
      </section>

      <section className="twa-section twa-human" aria-labelledby="twa-human-title">
        <div className="twa-shell">
          <div className="twa-human-intro">
            <div>
              <p className="twa-eyebrow">AI + Human Workflows</p>
              <h2 id="twa-human-title">AI Speed with Human Accountability</h2>
            </div>

            <div className="twa-human-copy">
              <p>
                AI is transforming how multilingual content is produced, but enterprise translation requires more
                than fast output. Meaning, terminology, tone, cultural relevance, product context, and regulatory
                implications often require professional judgment.
              </p>
              <p>
                Stepes combines AI translation with configurable human involvement so your organization can achieve
                the right balance of speed, cost, quality, and control for each content stream.
              </p>
              <a className="twa-editorial-link" href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">
                Explore AI + Human Translation Workflows
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="twa-ai-model" aria-label="AI and human translation operating model">
            <article className="twa-ai-model-step">
              <p className="twa-ai-model-label">AI Accelerates</p>
              <h3>Rapid Translation Production</h3>
              <p>AI helps process high content volumes quickly while using approved context and language assets.</p>
            </article>
            <article className="twa-ai-model-step">
              <p className="twa-ai-model-label">Experts Validate</p>
              <h3>Professional Linguistic Judgment</h3>
              <p>Qualified linguists review meaning, terminology, fluency, style, audience fit, and subject matter.</p>
            </article>
            <article className="twa-ai-model-step">
              <p className="twa-ai-model-label">Workflow Governs</p>
              <h3>Controlled Review and Release</h3>
              <p>Rules determine where human review is required and who can approve content for delivery.</p>
            </article>
          </div>

          <div className="twa-touchpoints" aria-label="Human expertise within automated workflows">
            {humanTouchpoints.map((touchpoint) => (
              <div className="twa-touchpoint" key={touchpoint}>{touchpoint}</div>
            ))}
          </div>

          <p className="twa-human-close">
            Human review is not a workaround for automation. It is a configurable part of the workflow—applied where
            linguistic judgment, brand stewardship, market knowledge, or risk management creates measurable value.
          </p>
        </div>
      </section>


      <section className="twa-section twa-assets" aria-labelledby="twa-assets-title">
        <div className="twa-shell">
          <div className="twa-assets-intro">
            <div>
              <p className="twa-eyebrow">Language Asset Automation</p>
              <h2 id="twa-assets-title">Put Translation Memory and Terminology to Work Automatically</h2>
            </div>

            <div className="twa-assets-copy">
              <p>
                Translation memory and terminology management create value when they are consistently applied—not
                when they remain isolated in individual projects or desktop tools.
              </p>
              <p>
                Stepes brings approved language assets into the workflow automatically so your teams can improve
                consistency, reduce repetitive translation, and maintain organization-specific language across markets.
              </p>
            </div>
          </div>

          <div className="twa-asset-columns">
            {languageAssetGroups.map((group) => (
              <article className="twa-asset-column" key={group.title}>
                <p className="twa-asset-label">{group.label}</p>
                <h3>{group.title}</h3>
                <p>{group.text}</p>
                <ul className="twa-asset-benefits">
                  {group.benefits.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
                <a className="twa-editorial-link" href={group.href}>
                  {group.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="twa-asset-application">
            <div>
              <h3>Centralized Language Assets, Applied by Context</h3>
              <p>
                Translation memories, glossaries, style guides, reference materials, and project instructions can be
                organized and applied according to the content and team using them.
              </p>
            </div>
            <div className="twa-asset-scopes" aria-label="Language asset organization">
              {languageAssetScopes.map((scope) => (
                <span className="twa-asset-scope" key={scope}>{scope}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="twa-section twa-quality" aria-labelledby="twa-quality-title">
        <div className="twa-shell">
          <div className="twa-quality-intro">
            <div>
              <p className="twa-eyebrow">Embedded Quality Controls</p>
              <h2 id="twa-quality-title">Build Quality Gates into the Workflow</h2>
            </div>

            <p className="twa-quality-copy">
              Quality assurance is most effective when it is part of the translation process—not a final check after
              problems have already moved downstream. Stepes integrates automated validation, professional linguistic
              review, and approval controls throughout the workflow.
            </p>
          </div>

          <div className="twa-quality-flow" aria-label="Translation quality gate sequence">
            <article className="twa-quality-stage">
              <p className="twa-quality-stage-label">Gate 1</p>
              <h3>Automated Validation</h3>
              <p>Check terminology, completeness, numbers, formatting, tags, variables, and structural consistency.</p>
            </article>
            <article className="twa-quality-stage">
              <p className="twa-quality-stage-label">Gate 2</p>
              <h3>Professional Review</h3>
              <p>Evaluate meaning, fluency, subject matter, brand voice, cultural relevance, and market suitability.</p>
            </article>
            <article className="twa-quality-stage">
              <p className="twa-quality-stage-label">Gate 3</p>
              <h3>Approval and Release</h3>
              <p>Confirm that required checks and stakeholder decisions are complete before content is delivered.</p>
            </article>
          </div>

          <div className="twa-quality-matrix">
            <div className="twa-quality-group">
              <h3>Automated Checks Can Identify</h3>
              <ul className="twa-quality-list">
                {automatedQualityChecks.map((check) => (
                  <li key={check}>{check}</li>
                ))}
              </ul>
            </div>

            <div className="twa-quality-group">
              <h3>Professional Linguists Evaluate</h3>
              <ul className="twa-quality-list">
                {professionalReviewDimensions.map((dimension) => (
                  <li key={dimension}>{dimension}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="twa-exception-band">
            <div>
              <h3>Exception Handling Keeps Issues from Reaching Publication</h3>
              <p>
                When content fails a quality check or requires clarification, the workflow can return it to the
                appropriate translator, reviewer, project manager, or stakeholder. Comments, revisions, decisions,
                and approvals remain connected to the project.
              </p>
            </div>
            <div className="twa-exception-path" aria-label="Exception resolution path">
              <span>Flag Issue</span>
              <b>→</b>
              <span>Route to Owner</span>
              <b>→</b>
              <span>Resolve and Revalidate</span>
            </div>
          </div>

          <div className="twa-quality-link">
            <a className="twa-editorial-link" href="https://www.stepes.com/translation-quality-assurance/">
              Explore Translation Quality Assurance
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="twa-section twa-connections" aria-labelledby="twa-connections-title">
        <div className="twa-shell">
          <div className="twa-section-heading">
            <h2 id="twa-connections-title">Connect Translation to Your Content Ecosystem</h2>
            <p>
              Translation should not operate as a disconnected step between content creation and global publication.
              Stepes connects multilingual workflows with the systems your organization uses to create, manage, and
              deliver content.
            </p>
          </div>

          <div className="twa-system-map" aria-label="Enterprise content systems connected through Stepes">
            <div className="twa-system-side twa-system-side--source">
              <h3>Content Sources</h3>
              <div className="twa-system-item">Content Management Systems</div>
              <div className="twa-system-item">Document Repositories</div>
              <div className="twa-system-item">Product and Software Content</div>
              <div className="twa-system-item">Customer Support Platforms</div>
            </div>

            <div className="twa-system-center">
              <div className="twa-system-core">
                <p className="twa-system-core-label">Stepes Platform</p>
                <h3>Workflow Automation</h3>
                <p>Routes content through translation, review, approval, delivery, and reporting.</p>
              </div>
            </div>

            <div className="twa-system-side twa-system-side--destination">
              <h3>Delivery Destinations</h3>
              <div className="twa-system-item">Localized Websites</div>
              <div className="twa-system-item">Applications and Releases</div>
              <div className="twa-system-item">Published Documents</div>
              <div className="twa-system-item">Global Support Experiences</div>
            </div>
          </div>

          <div className="twa-connection-list">
            {connectionCapabilities.map((capability) => (
              <article className="twa-connection-row" key={capability.title}>
                <span className="twa-connection-label">{capability.label}</span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </div>
                <a className="twa-editorial-link" href={capability.href}>
                  {capability.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="twa-section twa-governance" aria-labelledby="twa-governance-title">
        <div className="twa-shell">
          <div className="twa-governance-intro">
            <div>
              <p className="twa-eyebrow">Enterprise Control</p>
              <h2 id="twa-governance-title">Roles, Approvals, Security, and Governance</h2>
            </div>

            <div className="twa-governance-copy">
              <p>
                Automation should improve control—not remove it. Stepes enables enterprises to define how users,
                reviewers, project managers, linguists, and stakeholders participate in multilingual workflows.
              </p>
              <p>
                Responsibilities, permissions, review stages, and release authority can be aligned with your
                organization’s operational, security, and quality requirements.
              </p>
            </div>
          </div>

          <div className="twa-governance-layout">
            <div className="twa-governance-list">
              {governanceControls.map((control) => (
                <article className="twa-governance-item" key={control.title}>
                  <h3>{control.title}</h3>
                  <p>{control.text}</p>
                </article>
              ))}
            </div>

            <aside className="twa-approval-panel" aria-label="Controlled review and approval path">
              <h3>Controlled Review and Release</h3>
              <div className="twa-approval-journey">
                {approvalJourney.map((step) => (
                  <div className="twa-approval-step" key={step.label}>
                    <span className="twa-approval-dot" aria-hidden="true" />
                    <div>
                      <h3>{step.label}</h3>
                      <p>{step.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          <div className="twa-governance-links">
            <a className="twa-editorial-link" href="https://www.stepes.com/enterprise-security/">
              Explore Enterprise Security
              <ArrowIcon />
            </a>
            <a className="twa-editorial-link" href="https://www.stepes.com/user-roles-approvals/">
              Explore User Roles and Approvals
              <ArrowIcon />
            </a>
            <a className="twa-editorial-link" href="https://www.stepes.com/security-and-compliance/">
              Visit Security and Compliance
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>


      <section className="twa-section twa-content-operations" aria-labelledby="twa-content-operations-title">
        <div className="twa-shell">
          <div className="twa-content-intro">
            <div>
              <p className="twa-eyebrow">Enterprise Content Coverage</p>
              <h2 id="twa-content-operations-title">Scale Workflows Across Content Types and Business Teams</h2>
            </div>

            <p className="twa-content-copy">
              Stepes supports multilingual workflows across enterprise content operations. Each workflow can be
              configured around the content’s audience, lifecycle, volume, quality expectations, and business risk.
            </p>
          </div>

          <div className="twa-content-grid">
            {contentOperations.map((operation) => (
              <article className="twa-content-item" key={operation.title}>
                <p className="twa-content-label">{operation.label}</p>
                <h3>{operation.title}</h3>
                <p>{operation.text}</p>
                <a className="twa-editorial-link" href={operation.href}>
                  {operation.linkLabel}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="twa-section twa-reporting" aria-labelledby="twa-reporting-title">
        <div className="twa-shell">
          <div className="twa-reporting-layout">
            <div className="twa-reporting-copy">
              <p className="twa-eyebrow">Operational Visibility</p>
              <h2 id="twa-reporting-title">Know What Is Happening from Request to Release</h2>
              <p>
                As translation activity grows across departments and markets, organizations need more than individual
                project updates. Authorized teams need visibility into the entire language operation.
              </p>
              <p>
                Reporting helps localization leaders identify bottlenecks, improve processes, plan resources, and
                communicate the value of translation across the enterprise.
              </p>
              <a className="twa-editorial-link" href="https://www.stepes.com/reporting-analytics/">
                Explore Reporting and Analytics
                <ArrowIcon />
              </a>
            </div>

            <div className="twa-reporting-panel" aria-label="Enterprise translation reporting dimensions">
              <div className="twa-reporting-panel-header">
                <p>Enterprise Translation Program</p>
                <span className="twa-reporting-status">Connected workflow visibility</span>
              </div>

              <div className="twa-reporting-dimensions">
                {reportingDimensions.map((dimension) => (
                  <article className="twa-reporting-item" key={dimension.title}>
                    <span className="twa-reporting-marker" aria-hidden="true" />
                    <h3>{dimension.title}</h3>
                    <p>{dimension.text}</p>
                  </article>
                ))}
              </div>

              <p className="twa-reporting-note">
                Use workflow data to see where delays occur, which content receives the most revision, how language
                assets are being reused, and where additional automation or human expertise would create more value.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="twa-section twa-outcomes" aria-labelledby="twa-outcomes-title">
        <div className="twa-shell">
          <div className="twa-outcomes-intro">
            <p className="twa-eyebrow">Global Content Operations</p>
            <h2 id="twa-outcomes-title">Turn Translation into a Scalable Enterprise Capability</h2>
            <p>
              By connecting content, technology, language assets, people, and quality controls, Stepes helps
              organizations build a more efficient and resilient operating model for multilingual content.
            </p>
          </div>

          <div className="twa-outcomes-grid">
            {enterpriseOutcomes.map((outcome) => (
              <article className="twa-outcome-item" key={outcome.title}>
                <span className="twa-outcome-rule" aria-hidden="true" />
                <div>
                  <h3>{outcome.title}</h3>
                  <p>{outcome.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="twa-outcomes-action">
            <p>
              Build an enterprise translation operation that can support growing content volumes and new markets
              without recreating the process for every request.
            </p>
            <a className="twa-editorial-link" href="https://www.stepes.com/solutions/global-content-operations/">
              Explore Global Content Operations
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="twa-section twa-faq" aria-labelledby="twa-faq-title">
        <div className="twa-shell">
          <div className="twa-faq-layout">
            <div className="twa-faq-intro">
              <h2 id="twa-faq-title">Translation Workflow Automation FAQ</h2>
              <p>
                Learn how workflow automation coordinates AI, professional translation, language assets, quality
                controls, approvals, integrations, and enterprise governance.
              </p>
            </div>

            <div className="twa-faq-list">
              {workflowFaqs.map((faq, index) => {
                const isOpen = openFaq === index;
                const answerId = `twa-faq-answer-${index}`;

                return (
                  <div className="twa-faq-item" key={faq.question}>
                    <button
                      className="twa-faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={answerId}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="twa-faq-toggle" aria-hidden="true" />
                    </button>

                    {isOpen && (
                      <div className="twa-faq-answer" id={answerId}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="twa-final-cta" aria-labelledby="twa-final-title">
        <div className="twa-shell">
          <div className="twa-final-panel">
            <div className="twa-final-content">
              <h2 id="twa-final-title">Build a More Connected Translation Workflow</h2>
              <p>
                Bring content intake, AI translation, professional linguists, language assets, quality assurance,
                approvals, delivery, and reporting into one coordinated enterprise process designed around your
                content, systems, teams, quality requirements, and global growth objectives.
              </p>

              <div className="twa-final-actions">
                <a className="twa-button twa-button--primary" href="https://www.stepes.com/contact-us/">
                  Talk to an Automation Expert
                  <ArrowIcon />
                </a>
                <a className="twa-button twa-button--secondary" href="https://www.stepes.com/ai-translation-platform/">
                  Explore the AI Translation Platform
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
