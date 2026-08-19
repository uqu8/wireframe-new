import React from "react";

const QA_CHECKS = [
  {
    icon: "terminology",
    title: "Terminology Checks",
    text: "Compare translated content with approved product, technical, regulatory, and brand terminology to flag missing preferred terms, prohibited variants, and inconsistent usage.",
  },
  {
    icon: "numbers",
    title: "Numbers and Numerical Consistency",
    text: "Identify missing, changed, duplicated, or incorrectly formatted numbers, including measurements, percentages, dates, times, currencies, and product references.",
  },
  {
    icon: "missing",
    title: "Missing and Untranslated Content",
    text: "Detect empty target segments, source text copied into the translation, omitted phrases, incomplete translations, and content that may have been skipped.",
  },
  {
    icon: "code",
    title: "Tags, Variables, and Placeholders",
    text: "Validate HTML tags, XML elements, software variables, placeholders, tokens, and other protected content that must remain intact.",
  },
  {
    icon: "locale",
    title: "Locale Conventions",
    text: "Check locale-specific formatting for dates, times, currencies, decimal separators, units of measurement, capitalization, and punctuation.",
  },
  {
    icon: "spelling",
    title: "Spelling and Language Conventions",
    text: "Identify spelling problems and common language issues based on the selected target language and locale.",
  },
  {
    icon: "consistency",
    title: "Translation Consistency",
    text: "Flag repeated source content translated in different ways and potential discrepancies across related files, projects, and approved language assets.",
  },
  {
    icon: "length",
    title: "Length and Display Constraints",
    text: "Surface translations that may exceed character limits or display restrictions in software, mobile applications, forms, and subtitles.",
  },
];



const LQA_FEATURES = [
  {
    title: "Custom Quality Dimensions",
    text: "Evaluate accuracy, completeness, terminology, fluency, grammar, style, locale conventions, formatting, and compliance with your instructions.",
  },
  {
    title: "Severity-Based Classification",
    text: "Classify findings as critical, major, or minor based on their effect on meaning, usability, safety, compliance, and the reader experience.",
  },
  {
    title: "Weighted Scoring and Thresholds",
    text: "Apply different weights to error types and severity levels, then set acceptance thresholds by language, content type, business unit, or risk level.",
  },
  {
    title: "Flexible Evaluation Scope",
    text: "Assess complete deliverables, representative samples, selected languages, or higher-risk segments that require additional scrutiny.",
  },
];

const LQA_SCORE_ROWS = [
  { label: "Accuracy", score: "98.0", issues: "1 major" },
  { label: "Terminology", score: "96.0", issues: "1 major" },
  { label: "Fluency", score: "97.5", issues: "2 minor" },
  { label: "Style and tone", score: "94.8", issues: "3 minor" },
];

const AI_FLOW_STEPS = [
  {
    title: "AI Translation",
    text: "Generate multilingual content using the translation approach selected for the project.",
  },
  {
    title: "Automated QA",
    text: "Check terminology, completeness, numbers, locale formatting, variables, and repeatable quality risks.",
  },
  {
    title: "Risk-Based Routing",
    text: "Route sensitive, uncertain, high-value, or exception-based content to the appropriate human reviewer.",
  },
  {
    title: "Human Validation",
    text: "Confirm meaning, context, tone, subject-matter accuracy, and readiness for approval or release.",
  },
];

const AI_REVIEW_ITEMS = [
  {
    segment: "Dosage instructions",
    finding: "Meaning and unit validation",
    status: "Human review required",
    tone: "review",
  },
  {
    segment: "Account navigation",
    finding: "Terminology and variable checks passed",
    status: "Ready for approval",
    tone: "passed",
  },
  {
    segment: "Safety warning",
    finding: "Critical-content workflow applied",
    status: "Specialist validation",
    tone: "escalate",
  },
];

const REVIEW_CAPABILITIES = [
  {
    title: "Assign the Right Reviewers",
    text: "Route content to qualified linguists, editors, subject-matter experts, in-country reviewers, terminology owners, legal teams, or final approvers.",
  },
  {
    title: "Define Roles and Review Stages",
    text: "Control who can translate, edit, comment, resolve issues, approve content, and authorize final release.",
  },
  {
    title: "Resolve and Escalate Issues",
    text: "Capture reviewer feedback in context and escalate critical errors, terminology disputes, ambiguous source content, or unresolved concerns.",
  },
  {
    title: "Maintain Review History",
    text: "Preserve revisions, comments, decisions, and approvals to support accountability and continuous quality improvement.",
  },
];

const REVIEW_STAGES = [
  { title: "Linguistic Review", detail: "Accuracy, fluency, and terminology", status: "Complete", tone: "complete" },
  { title: "Subject-Matter Review", detail: "Technical and contextual validation", status: "In progress", tone: "active" },
  { title: "In-Country Approval", detail: "Market and stakeholder review", status: "Pending", tone: "pending" },
  { title: "Final Release", detail: "Controlled authorization", status: "Pending", tone: "pending" },
];

const ASSET_FLOW_STEPS = [
  {
    label: "Foundation",
    title: "Approved Terminology and TM",
    text: "Start with governed language resources and previously validated translations.",
  },
  {
    label: "Produce",
    title: "Translation",
    text: "Apply approved language assets across professional, AI, and hybrid workflows.",
  },
  {
    label: "Check",
    title: "Quality Checks",
    text: "Identify deviations, conflicts, inconsistencies, and protected-content issues.",
  },
  {
    label: "Evaluate",
    title: "Human Review",
    text: "Evaluate meaning, context, style, and terminology decisions that require judgment.",
  },
  {
    label: "Approve",
    title: "Approved Corrections",
    text: "Resolve findings and confirm the language decisions that should be retained.",
  },
  {
    label: "Improve",
    title: "Updated Language Assets",
    text: "Feed validated corrections back into terminology and translation memory.",
  },
];


const CONTEXT_EXPERIENCES = [
  {
    icon: "website",
    title: "Websites",
    text: "Review translated pages for missing content, broken layouts, untranslated elements, locale formatting, navigation issues, and context-dependent language.",
  },
  {
    icon: "software",
    title: "Software and Mobile Applications",
    text: "Validate interface text, buttons, menus, notifications, placeholders, variables, character limits, truncation, and terminology in the product experience.",
  },
  {
    icon: "documents",
    title: "Technical and Formatted Documentation",
    text: "Check tables, diagrams, cross-references, headers, footers, callouts, pagination, labels, and layout after translation is returned to its final format.",
  },
  {
    icon: "elearning",
    title: "eLearning Content",
    text: "Review on-screen text, quizzes, interactions, narration, timing, navigation, and instructional consistency across localized courses.",
  },
  {
    icon: "video",
    title: "Video and Subtitles",
    text: "Validate subtitle accuracy, timing, readability, line breaks, character limits, speaker context, and synchronization with on-screen content.",
  },
  {
    icon: "data",
    title: "Structured and Data-Driven Content",
    text: "Check tags, product attributes, database fields, metadata, reusable components, and variables that may not appear as continuous prose.",
  },
];

const RISK_LEVELS = [
  {
    level: "Lower Risk",
    summary: "High-volume or temporary content where speed and consistency are the primary requirements.",
    examples: "Internal reference content, knowledge material, user-generated information, and temporary communications.",
    controls: ["Automated QA", "Approved terminology", "Translation memory", "Targeted sampling", "Exception-based review"],
  },
  {
    level: "Standard Business",
    summary: "Customer and employee content that benefits from professional review and defined acceptance criteria.",
    examples: "Corporate communications, product information, training content, sales materials, and support resources.",
    controls: ["Automated QA", "Professional linguistic review", "Style and brand checks", "Acceptance thresholds", "Final approval"],
  },
  {
    level: "High Impact",
    summary: "Content where translation errors could significantly affect users, operations, decisions, or brand trust.",
    examples: "Customer-facing product experiences, contractual information, financial content, and safety-related instructions.",
    controls: ["Independent revision", "Subject-matter review", "Full LQA", "Controlled approval", "In-context validation"],
  },
  {
    level: "Regulated or Critical",
    summary: "Content affecting health, safety, rights, compliance obligations, or other high-consequence outcomes.",
    examples: "Medical device documentation, clinical materials, legal content, and financial disclosures.",
    controls: ["Qualified resources", "Specialist validation", "Documented traceability", "Critical-error escalation", "Final authorization"],
  },
];

const REPORTING_METRICS = [
  { value: "96.8", label: "Program quality score", change: "Within target" },
  { value: "92%", label: "First-pass acceptance", change: "Improving" },
  { value: "14", label: "Open quality findings", change: "3 require action" },
  { value: "0", label: "Critical errors", change: "Current period" },
];

const REPORTING_ROWS = [
  { language: "German", score: 97.4, acceptance: "94%", trend: "up" },
  { language: "French", score: 96.9, acceptance: "92%", trend: "up" },
  { language: "Spanish", score: 96.1, acceptance: "91%", trend: "steady" },
  { language: "Japanese", score: 94.8, acceptance: "88%", trend: "review" },
];

const ENTERPRISE_TEAMS = [
  {
    icon: "localization",
    title: "Localization Teams",
    text: "Centralize quality rules, terminology, reviewer workflows, scorecards, language assets, and reporting across global translation programs.",
  },
  {
    icon: "product",
    title: "Product and Engineering",
    text: "Validate software strings, interface terminology, placeholders, variables, length restrictions, contextual meaning, and multilingual product experiences.",
  },
  {
    icon: "marketing",
    title: "Marketing",
    text: "Protect brand voice, campaign intent, terminology, tone, creative messaging, and market relevance across websites and promotional content.",
  },
  {
    icon: "legal",
    title: "Legal and Compliance",
    text: "Apply controlled review, terminology requirements, documented approvals, version traceability, and appropriate specialist oversight.",
  },
  {
    icon: "lifesciences",
    title: "Life Sciences",
    text: "Support quality-sensitive medical, clinical, pharmaceutical, and medical device content with qualified resources and documented review processes.",
  },
  {
    icon: "procurement",
    title: "Procurement",
    text: "Establish measurable quality expectations, standardized evaluation methods, reporting criteria, and consistent supplier oversight.",
  },
  {
    icon: "support",
    title: "Customer Support",
    text: "Maintain accurate multilingual help content, knowledge bases, chatbot responses, product instructions, and service communications.",
  },
];


const PLATFORM_CAPABILITIES = [
  {
    category: "Translate",
    title: "AI Translation Platform",
    text: "Accelerate multilingual production with controlled AI translation, governed language assets, and human validation where it matters.",
    href: "https://www.stepes.com/ai-translation-platform/",
  },
  {
    category: "Manage",
    title: "Enterprise Translation Management",
    text: "Centralize projects, languages, workflows, resources, approvals, and quality standards across global operations.",
    href: "https://www.stepes.com/enterprise-translation-management/",
  },
  {
    category: "Collaborate",
    title: "Customer Translation Portal",
    text: "Give business teams a streamlined way to submit content, monitor progress, review translations, and access deliverables.",
    href: "https://www.stepes.com/customer-translation-portal/",
  },
  {
    category: "Validate",
    title: "AI + Human Translation Workflow",
    text: "Combine AI translation with professional post-editing, linguistic review, and risk-based human oversight.",
    href: "https://www.stepes.com/ai-human-translation-workflow/",
  },
  {
    category: "Reuse",
    title: "Translation Memory",
    text: "Reuse approved translations to improve consistency, reduce repetitive work, and preserve validated language decisions.",
    href: "https://www.stepes.com/translation-memory/",
  },
  {
    category: "Standardize",
    title: "Terminology Management",
    text: "Create and enforce approved multilingual terminology across translators, AI workflows, reviewers, and content types.",
    href: "https://www.stepes.com/terminology-management/",
  },
  {
    category: "Automate",
    title: "Workflow Automation",
    text: "Trigger quality checks, route content, assign reviewers, apply approvals, and manage exceptions using defined rules.",
    href: "https://www.stepes.com/workflow-automation/",
  },
  {
    category: "Measure",
    title: "Reporting and Analytics",
    text: "Track quality performance, project activity, workflow status, recurring issues, and enterprise translation trends.",
    href: "https://www.stepes.com/translation-reporting-analytics/",
  },
  {
    category: "Govern",
    title: "User Roles and Approvals",
    text: "Control access, responsibilities, editing permissions, review stages, and final approval authority.",
    href: "https://www.stepes.com/user-roles-approvals/",
  },
  {
    category: "Protect",
    title: "Enterprise Security",
    text: "Protect multilingual content through secure workflows, controlled access, and enterprise platform safeguards.",
    href: "https://www.stepes.com/enterprise-security/",
  },
];

const READINESS_ITEMS = [
  {
    icon: "certification",
    title: "ISO-Aligned Quality Processes",
    text: "Support dependable delivery through quality processes aligned with ISO 9001, ISO 17100, and ISO 13485 requirements.",
  },
  {
    icon: "people",
    title: "Qualified Linguistic Resources",
    text: "Assign professional linguists, editors, reviewers, and subject-matter specialists based on language, content, industry, and risk.",
  },
  {
    icon: "workflow",
    title: "Documented Workflows",
    text: "Apply defined production, review, escalation, approval, and corrective-action processes to strengthen consistency and accountability.",
  },
  {
    icon: "security",
    title: "Secure Enterprise Operations",
    text: "Use role-based workflows, controlled access, and managed platform processes to protect sensitive multilingual content.",
  },
  {
    icon: "customize",
    title: "Client-Specific Quality Requirements",
    text: "Adapt quality models, terminology, reviewer roles, acceptance thresholds, workflows, and reporting to your program requirements.",
  },
  {
    icon: "languages",
    title: "100+ Languages",
    text: "Manage multilingual quality across more than 100 languages through one connected partner, platform, and operating model.",
  },
  {
    icon: "hybrid",
    title: "AI + Human Expertise",
    text: "Combine automation and AI with professional human judgment using the workflow that fits each content type and risk level.",
  },
  {
    icon: "improve",
    title: "Continuous Quality Improvement",
    text: "Turn reviewer findings and approved corrections into stronger terminology, translation memory, instructions, and future workflows.",
  },
];

const FAQS = [
  {
    question: "What is translation quality assurance?",
    answer: "Translation quality assurance is the structured process of preventing, identifying, evaluating, and resolving issues in multilingual content. It can include terminology management, automated checks, linguistic review, quality scoring, approval workflows, in-context validation, reporting, and continuous improvement.",
  },
  {
    question: "What is the difference between automated QA and linguistic quality assessment?",
    answer: "Automated QA identifies objective or rule-based issues such as missing numbers, untranslated text, terminology deviations, broken tags, placeholder errors, and inconsistent formatting. Linguistic quality assessment uses professional judgment to evaluate meaning, accuracy, fluency, tone, style, completeness, and context. Strong enterprise workflows use both.",
  },
  {
    question: "What is the difference between translation QA and proofreading?",
    answer: "Proofreading generally focuses on surface-level language issues such as spelling, grammar, punctuation, and readability. Translation QA is broader and can evaluate source-to-target accuracy, terminology, project requirements, functional behavior, final-context suitability, and defined quality thresholds.",
  },
  {
    question: "Can Stepes evaluate AI-generated translations?",
    answer: "Yes. Stepes supports human validation and structured evaluation of AI-generated translations for accuracy, completeness, fluency, terminology, style, grammar, context, and adherence to client instructions. Review levels can be adjusted according to content risk and quality requirements.",
  },
  {
    question: "Can translation quality rules be customized?",
    answer: "Yes. Quality checks, error categories, severity levels, scoring weights, acceptance thresholds, terminology requirements, reviewer roles, and approval workflows can be adapted to specific enterprise programs, content types, and risk profiles.",
  },
  {
    question: "How are translation errors classified?",
    answer: "Errors can be classified by category and severity. Categories may include accuracy, terminology, completeness, fluency, grammar, style, formatting, locale conventions, and compliance with instructions. Severity commonly includes critical, major, and minor based on the issue's impact.",
  },
  {
    question: "Does Stepes support MQM-style quality models?",
    answer: "Stepes can support structured quality models using MQM-aligned error categories and severity classifications, as well as client-specific frameworks adapted to the organization's content, audience, risk profile, and reporting requirements.",
  },
  {
    question: "Can different content types use different quality workflows?",
    answer: "Yes. Marketing campaigns, software interfaces, internal knowledge content, legal agreements, and medical device instructions may each use different controls. Workflows can be configured according to content type, audience, business impact, regulatory sensitivity, and tolerance for risk.",
  },
  {
    question: "Can our internal reviewers participate?",
    answer: "Yes. In-country reviewers, terminology owners, subject-matter experts, brand teams, legal teams, and final approvers can participate in controlled review workflows with roles and permissions matched to their responsibilities.",
  },
  {
    question: "How does translation QA work with terminology management?",
    answer: "Approved terminology provides a shared reference for translators, AI systems, reviewers, and automated checks. QA can flag missing preferred terms, prohibited variants, and inconsistent usage, while approved corrections can improve terminology resources for future projects.",
  },
  {
    question: "How does translation QA work with translation memory?",
    answer: "Translation memory stores previously approved source and target content for reuse. QA validates new and reused translations, identifies inconsistencies, and helps keep the translation memory current by incorporating approved corrections and language decisions.",
  },
  {
    question: "Does automated QA replace human review?",
    answer: "No. Automated QA is effective for detecting repeatable and objective issues, but it cannot fully evaluate meaning, intent, tone, cultural suitability, technical accuracy, or every contextual consideration. Human review remains essential for high-impact and quality-sensitive content.",
  },
  {
    question: "Can Stepes provide independent translation review?",
    answer: "Yes. Stepes provides professional translation QA services for independent bilingual review, linguistic quality evaluation, third-party assessment, specialist validation, in-context testing, and corrective editing. These services can be integrated into platform workflows or delivered independently.",
  },
  {
    question: "How can enterprises measure translation quality over time?",
    answer: "Enterprises can track quality scores, error categories, severity levels, terminology findings, pass rates, revision rates, recurring issues, reviewer feedback, and performance by language, project, content type, or workflow to identify root causes and improve future delivery.",
  },
];

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Prepare",
    text: "Establish approved terminology, translation memories, style guidance, and project-specific quality requirements.",
  },
  {
    number: "02",
    title: "Translate",
    text: "Apply professional, AI, or AI-plus-human translation based on content risk, quality expectations, timeline, and budget.",
  },
  {
    number: "03",
    title: "Check",
    text: "Run automated QA to identify terminology deviations, missing content, numerical issues, and protected-content errors.",
  },
  {
    number: "04",
    title: "Evaluate",
    text: "Use structured linguistic assessment for accuracy, fluency, terminology, style, completeness, and context.",
  },
  {
    number: "05",
    title: "Approve",
    text: "Route content to linguists, subject-matter experts, in-country reviewers, brand owners, or final approvers.",
  },
  {
    number: "06",
    title: "Improve",
    text: "Feed approved corrections back into translation memories, terminology resources, quality rules, and future workflows.",
  },
];

function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="m14 7 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (type) {
    case "terminology":
      return (
        <svg {...common}>
          <path d="M5 4.5h9.5A2.5 2.5 0 0 1 17 7v12H7.5A2.5 2.5 0 0 1 5 16.5v-12Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M5 16.5A2.5 2.5 0 0 1 7.5 14H17" stroke="currentColor" strokeWidth="1.7" />
          <path d="m10 9.5 1.4 1.4L14.5 8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "numbers":
      return (
        <svg {...common}>
          <path d="M8.5 4 6.8 20M17.2 4l-1.7 16M4 9h16M3.5 15h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "missing":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20H6V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M14 3.5V8h4M9 12h6M9 16h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "code":
      return (
        <svg {...common}>
          <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4 10.5 20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "locale":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.7 8.6 12s1.2 6.2 3.4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "spelling":
      return (
        <svg {...common}>
          <path d="M5 5h8M5 9h11M5 13h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="m14 17 2 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "consistency":
      return (
        <svg {...common}>
          <path d="M7 7h10a3 3 0 0 1 3 3v1M17 17H7a3 3 0 0 1-3-3v-1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="m17 4 3 3-3 3M7 20l-3-3 3-3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "length":
      return (
        <svg {...common}>
          <path d="M4 7h16v10H4V7Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7 7v4M10 7v2M13 7v4M16 7v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

function StatusIcon({ status }) {
  if (status === "passed") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
        <path d="m8 12 2.5 2.5L16.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.8 21 19H3L12 3.8Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M12 9v4.5M12 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}


function ExperienceIcon({ type }) {
  const common = {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (type) {
    case "website":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="17" height="16" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.5 8h17M7 6h.01M10 6h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="m9 14 2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "software":
      return (
        <svg {...common}>
          <rect x="5" y="3.5" width="14" height="17" rx="2.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9 7h6M8.5 11h7M8.5 15H13" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="m15.2 16.2 1.1 1.1 2.2-2.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "documents":
      return (
        <svg {...common}>
          <path d="M6 3.5h8l4 4V20H6V3.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M14 3.5V8h4M9 12h6M9 15h6M9 18h3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "elearning":
      return (
        <svg {...common}>
          <path d="m3.5 8.5 8.5-4 8.5 4-8.5 4-8.5-4Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6.5 10v5.5c2.7 2.1 8.3 2.1 11 0V10M20.5 9v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "video":
      return (
        <svg {...common}>
          <rect x="3.5" y="5" width="17" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
          <path d="m10 9 5 3-5 3V9Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M6.5 17h3M14.5 17h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "data":
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    default:
      return null;
  }
}

function TeamIcon({ type }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (type) {
    case "localization":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.7 8.6 12s1.2 6.2 3.4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "product":
      return (
        <svg {...common}>
          <path d="M8 8.5 4.5 12 8 15.5M16 8.5l3.5 3.5-3.5 3.5M14 5l-4 14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "marketing":
      return (
        <svg {...common}>
          <path d="M4 13.5V9.8l12-4.3v12.3L4 13.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="M8 14.8 9.5 20h3L11 15.8M18.5 8.5c1 .8 1.5 2 1.5 3.3s-.5 2.5-1.5 3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "legal":
      return (
        <svg {...common}>
          <path d="M12 3.5v16M7 6h10M5.5 8.5 3 14h5L5.5 8.5ZM18.5 8.5 16 14h5l-2.5-5.5ZM8 20h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "lifesciences":
      return (
        <svg {...common}>
          <path d="M9 3.5h6M10 3.5v5l-4.5 8A3 3 0 0 0 8.1 20h7.8a3 3 0 0 0 2.6-3.5l-4.5-8v-5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 14h8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "procurement":
      return (
        <svg {...common}>
          <path d="M6 7h14l-1.5 8h-10L6 4H3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="10" cy="19" r="1" fill="currentColor" />
          <circle cx="17" cy="19" r="1" fill="currentColor" />
          <path d="M10 11h5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "support":
      return (
        <svg {...common}>
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M4 13.5v3A1.5 1.5 0 0 0 5.5 18H7v-6H5.5A1.5 1.5 0 0 0 4 13.5ZM20 13.5v3a1.5 1.5 0 0 1-1.5 1.5H17v-6h1.5a1.5 1.5 0 0 1 1.5 1.5Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M17 18c0 1.4-1.1 2.5-2.5 2.5H12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}


function ReadinessIcon({ type }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (type) {
    case "certification":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m9 13-1 7 4-2 4 2-1-7M9.5 9l1.6 1.6L14.5 7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "people":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.8 19c.5-3.5 2.2-5.4 5.2-5.4s4.7 1.9 5.2 5.4M15 6.5a2.7 2.7 0 0 1 0 5.2M16.2 14c2.3.5 3.5 2.2 4 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <rect x="3.5" y="4" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <rect x="14.5" y="15" width="6" height="5" rx="1.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M9.5 6.5H14a3 3 0 0 1 3 3V15M14.5 17.5H10a3 3 0 0 1-3-3V9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      );
    case "security":
      return (
        <svg {...common}>
          <path d="M12 3.5 19 6v5.4c0 4.3-2.5 7.4-7 9.1-4.5-1.7-7-4.8-7-9.1V6l7-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          <path d="m8.8 12 2 2 4.4-4.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "customize":
      return (
        <svg {...common}>
          <path d="M5 6h14M5 12h14M5 18h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="9" cy="6" r="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="15" cy="12" r="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="11" cy="18" r="2" fill="#FFFFFF" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "languages":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.6 8.7 8.6 12s1.2 6.2 3.4 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "hybrid":
      return (
        <svg {...common}>
          <path d="M12 3.5v17M3.5 12h17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <path d="M5.5 6.5 8 4l2.5 2.5L8 9 5.5 6.5ZM13.5 15.5 16 13l2.5 2.5L16 18l-2.5-2.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        </svg>
      );
    case "improve":
      return (
        <svg {...common}>
          <path d="M4.5 15.5 9 11l3 3 7.5-8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 6h4.5v4.5M5 20h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

export default function TranslationQualityAssuranceWireframe() {
  return (
    <main className="stepesQaPage">
      <style>{`
        .stepesQaPage,
        .stepesQaPage * {
          box-sizing: border-box;
        }

        .stepesQaPage {
          --accent: #C11D63;
          --accent-hover: #A71954;
          --accent-deep: #7A1542;
          --blush: #FDF2F7;
          --ink: #111827;
          --body: #475569;
          --muted: #64748B;
          --line: #E2E8F0;
          --line-strong: #CBD5E1;
          --surface: #FFFFFF;
          --soft: #F8FAFC;
          --dark: #111827;
          --dark-soft: #1C2636;
          color: var(--ink);
          background: #FFFFFF;
          font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.6;
          overflow-x: hidden;
        }

        .stepesQaPage a {
          color: inherit;
          text-decoration: none;
        }

        .qaShell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .qaEyebrow {
          display: block;
          margin: 0 0 16px;
          color: var(--accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .qaEyebrowDark {
          color: #F6B9D3;
        }

        .qaHero {
          position: relative;
          padding: 104px 0 0;
          background:
            radial-gradient(circle at 88% 9%, rgba(193, 29, 99, 0.07), transparent 24%),
            linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 76%, #F8FAFC 76%, #F8FAFC 100%);
        }

        .qaHeroGrid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(460px, 0.98fr);
          gap: 64px;
          align-items: center;
        }

        .qaHeroCopy {
          min-width: 0;
          padding-bottom: 88px;
        }

        .qaHero h1 {
          max-width: 660px;
          margin: 0;
          color: var(--ink);
          font-size: 48px;
          font-weight: 600;
          line-height: 1.08;
          letter-spacing: -0.035em;
        }

        .qaHeroLead {
          max-width: 700px;
          margin: 24px 0 0;
          color: var(--body);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.65;
        }

        .qaHeroActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .qaButton {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 13px 23px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.2;
          transition: transform 160ms ease, box-shadow 160ms ease, background 160ms ease, border-color 160ms ease;
        }

        .qaButtonPrimary,
        .qaButtonPrimary:link,
        .qaButtonPrimary:visited,
        .qaButtonPrimary:hover,
        .qaButtonPrimary:active,
        .qaButtonPrimary:focus-visible {
          color: #FFFFFF;
        }

        .qaButtonPrimary {
          background: var(--accent);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.18);
        }

        .qaButtonPrimary:hover {
          background: var(--accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 14px 30px rgba(193, 29, 99, 0.24);
        }

        .qaButtonSecondary,
        .qaButtonSecondary:visited {
          color: var(--ink);
          background: #FFFFFF;
          border-color: var(--line-strong);
        }

        .qaButtonSecondary:hover {
          border-color: #94A3B8;
          transform: translateY(-1px);
        }

        .qaButton:focus-visible,
        .qaEditorialLink:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 3px;
        }

        .qaButton svg,
        .qaEditorialLink svg {
          flex: 0 0 auto;
          transition: transform 160ms ease;
        }

        .qaButton:hover svg,
        .qaEditorialLink:hover svg {
          transform: translateX(3px);
        }

        .qaHeroVisualWrap {
          min-width: 0;
          align-self: end;
          padding-bottom: 38px;
        }

        .qaWorkbench {
          overflow: hidden;
          border: 1px solid #DCE3EC;
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 28px 70px rgba(15, 23, 42, 0.13);
        }

        .qaWorkbenchTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          min-height: 66px;
          padding: 0 24px;
          border-bottom: 1px solid var(--line);
          background: #FFFFFF;
        }

        .qaWorkbenchTitle {
          min-width: 0;
        }

        .qaWorkbenchTitle strong,
        .qaWorkbenchTitle span {
          display: block;
        }

        .qaWorkbenchTitle strong {
          overflow: hidden;
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .qaWorkbenchTitle span {
          margin-top: 2px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }

        .qaScorePill {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 11px;
          border-radius: 999px;
          color: var(--accent-deep);
          background: var(--blush);
          font-size: 12px;
          font-weight: 600;
          line-height: 1;
        }

        .qaScorePill::before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          content: "";
        }

        .qaWorkbenchBody {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 172px;
          min-height: 416px;
        }

        .qaSegments {
          min-width: 0;
          padding: 22px;
          background: #FCFDFE;
        }

        .qaColumnLabels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          margin-bottom: 10px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .qaSegment {
          overflow: hidden;
          margin-top: 12px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #FFFFFF;
        }

        .qaSegmentActive {
          border-color: #E9BCD0;
          box-shadow: 0 0 0 2px rgba(193, 29, 99, 0.05);
        }

        .qaSegmentContent {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .qaTextCell {
          min-width: 0;
          padding: 16px;
          color: #334155;
          font-size: 13px;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .qaTextCell + .qaTextCell {
          border-left: 1px solid var(--line);
        }

        .qaSegmentFooter {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 9px 14px;
          padding: 10px 16px;
          border-top: 1px solid var(--line);
          color: var(--muted);
          background: #F8FAFC;
          font-size: 11px;
          line-height: 1.35;
        }

        .qaSegmentFlag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--accent-deep);
          font-weight: 600;
        }

        .qaWorkbenchSide {
          min-width: 0;
          padding: 22px 18px;
          border-left: 1px solid var(--line);
          background: #FFFFFF;
        }

        .qaSideLabel {
          margin: 0 0 14px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .qaMetric {
          padding: 13px 0;
          border-top: 1px solid var(--line);
        }

        .qaMetric:first-of-type {
          border-top: 0;
          padding-top: 0;
        }

        .qaMetric strong,
        .qaMetric span {
          display: block;
        }

        .qaMetric strong {
          color: var(--ink);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.2;
        }

        .qaMetric span {
          margin-top: 3px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.35;
        }

        .qaReviewStatus {
          margin-top: 18px;
          padding: 14px;
          border-radius: 16px;
          background: var(--blush);
        }

        .qaReviewStatus strong,
        .qaReviewStatus span {
          display: block;
        }

        .qaReviewStatus strong {
          color: var(--accent-deep);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaReviewStatus span {
          margin-top: 5px;
          color: #6B2146;
          font-size: 11px;
          line-height: 1.45;
        }

        .qaTrustStrip {
          position: relative;
          z-index: 2;
          margin-top: 26px;
          padding: 0 0 34px;
        }

        .qaTrustInner {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 20px;
          padding: 24px 0 0;
          border-top: 1px solid var(--line);
        }

        .qaTrustItem {
          min-width: 0;
        }

        .qaTrustItem strong,
        .qaTrustItem span {
          display: block;
        }

        .qaTrustItem strong {
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaTrustItem span {
          margin-top: 4px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.45;
        }

        .qaWorkflowSection {
          position: relative;
          padding: 96px 0;
          color: #FFFFFF;
          background: var(--dark);
        }

        .qaWorkflowHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaWorkflowSection h2,
        .qaChecksSection h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .qaWorkflowSection h2 {
          max-width: 540px;
          color: #FFFFFF;
        }

        .qaWorkflowIntro {
          max-width: 740px;
          margin: 0;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.65;
        }

        .qaWorkflowGrid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 0;
          margin-top: 62px;
          border-top: 1px solid #344154;
          border-bottom: 1px solid #344154;
        }

        .qaWorkflowStep {
          min-width: 0;
          padding: 30px 22px 32px;
          border-left: 1px solid #344154;
        }

        .qaWorkflowStep:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .qaWorkflowStep:last-child {
          padding-right: 0;
        }

        .qaStepNumber {
          display: block;
          margin-bottom: 17px;
          color: #F0A8C7;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.12em;
        }

        .qaWorkflowStep h3 {
          margin: 0;
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.3;
        }

        .qaWorkflowStep p {
          margin: 12px 0 0;
          color: #AEBBCD;
          font-size: 14px;
          line-height: 1.58;
        }

        .qaChecksSection {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .qaChecksHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaChecksSection h2 {
          max-width: 610px;
          color: var(--ink);
        }

        .qaChecksIntro {
          max-width: 760px;
          margin: 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaChecksLayout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 360px;
          gap: 56px;
          align-items: start;
          margin-top: 58px;
        }

        .qaChecksGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 46px;
        }

        .qaCheckItem {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 16px;
          align-items: start;
          min-width: 0;
          padding: 24px 0 26px;
          border-top: 1px solid var(--line);
        }

        .qaCheckIcon {
          display: inline-flex;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border: 1px solid #E6EAF0;
          border-radius: 14px;
          color: var(--accent-deep);
          background: #FFFFFF;
        }

        .qaCheckItem h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaCheckItem p {
          margin: 9px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaSummaryPanel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #FFFFFF;
          box-shadow: 0 18px 44px rgba(15, 23, 42, 0.07);
        }

        .qaSummaryTop {
          padding: 24px 24px 21px;
          border-bottom: 1px solid var(--line);
          background: #F8FAFC;
        }

        .qaSummaryTop .qaEyebrow {
          margin-bottom: 10px;
        }

        .qaSummaryTop h3 {
          margin: 0;
          color: var(--ink);
          font-size: 24px;
          font-weight: 600;
          line-height: 1.25;
        }

        .qaSummaryScore {
          display: flex;
          align-items: flex-end;
          gap: 7px;
          margin-top: 16px;
        }

        .qaSummaryScore strong {
          color: var(--ink);
          font-size: 42px;
          font-weight: 600;
          line-height: 1;
          letter-spacing: -0.04em;
        }

        .qaSummaryScore span {
          padding-bottom: 4px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.3;
        }

        .qaSummaryBody {
          padding: 8px 24px 4px;
        }

        .qaSummaryRow {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr) auto;
          gap: 10px;
          align-items: center;
          min-height: 58px;
          border-bottom: 1px solid var(--line);
        }

        .qaSummaryRow:last-child {
          border-bottom: 0;
        }

        .qaSummaryRowPassed {
          color: #15803D;
        }

        .qaSummaryRowReview {
          color: var(--accent-deep);
        }

        .qaSummaryRow strong {
          color: var(--ink);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaSummaryRow span:last-child {
          color: var(--muted);
          font-size: 11px;
          line-height: 1.35;
          text-align: right;
        }

        .qaSummaryNote {
          margin: 0;
          padding: 20px 24px 24px;
          color: var(--body);
          background: var(--blush);
          font-size: 13px;
          line-height: 1.58;
        }

        .qaEditorialLink {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          color: var(--accent);
          font-size: 15px;
          font-weight: 600;
        }

        .qaEditorialLink:visited {
          color: var(--accent);
        }

        .qaEditorialLink:hover {
          color: var(--accent-hover);
        }



        .qaLqaSection {
          padding: 96px 0 104px;
          background: var(--soft);
        }

        .qaLqaHeader {
          max-width: 840px;
          margin: 0 auto;
          text-align: center;
        }

        .qaLqaSection h2,
        .qaAiSection h2,
        .qaReviewSection h2,
        .qaAssetsSection h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .qaLqaSection h2,
        .qaReviewSection h2,
        .qaAssetsSection h2 {
          color: var(--ink);
        }

        .qaLqaIntro {
          max-width: 790px;
          margin: 22px auto 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaLqaLayout {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(560px, 1.22fr);
          gap: 60px;
          align-items: start;
          margin-top: 58px;
        }

        .qaLqaFeatureList {
          border-top: 1px solid var(--line);
        }

        .qaLqaFeature {
          padding: 24px 0 26px;
          border-bottom: 1px solid var(--line);
        }

        .qaLqaFeature h3 {
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaLqaFeature p {
          margin: 9px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaScorecard {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #FFFFFF;
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
        }

        .qaScorecardHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 24px 26px;
          border-bottom: 1px solid var(--line);
          background: #FFFFFF;
        }

        .qaScorecardTitle strong,
        .qaScorecardTitle span {
          display: block;
        }

        .qaScorecardTitle strong {
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaScorecardTitle span {
          margin-top: 3px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.4;
        }

        .qaScorecardDecision {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border-radius: 999px;
          color: var(--accent-deep);
          background: var(--blush);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.2;
        }

        .qaScorecardDecision::before {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent);
          content: "";
        }

        .qaScorecardOverview {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr 0.9fr;
          border-bottom: 1px solid var(--line);
          background: #FCFDFE;
        }

        .qaScorecardStat {
          min-width: 0;
          padding: 22px 24px;
          border-left: 1px solid var(--line);
        }

        .qaScorecardStat:first-child {
          border-left: 0;
        }

        .qaScorecardStat strong,
        .qaScorecardStat span {
          display: block;
        }

        .qaScorecardStat strong {
          color: var(--ink);
          font-size: 30px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .qaScorecardStat span {
          margin-top: 5px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
        }

        .qaScoreTable {
          padding: 6px 26px 10px;
        }

        .qaScoreRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 74px 100px;
          gap: 16px;
          align-items: center;
          min-height: 58px;
          border-bottom: 1px solid var(--line);
        }

        .qaScoreRow:last-child {
          border-bottom: 0;
        }

        .qaScoreRow strong {
          color: var(--ink);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaScoreValue {
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          text-align: right;
        }

        .qaIssueCount {
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
          text-align: right;
        }

        .qaScorecardFooter {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          padding: 19px 26px 22px;
          border-top: 1px solid var(--line);
          background: var(--blush);
        }

        .qaSeverityLegend {
          display: flex;
          flex-wrap: wrap;
          gap: 9px 18px;
          color: #6B2146;
          font-size: 11px;
          line-height: 1.4;
        }

        .qaSeverityLegend span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
        }

        .qaSeverityLegend i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: currentColor;
        }

        .qaSeverityCritical {
          color: var(--accent-deep);
        }

        .qaSeverityMajor {
          color: var(--accent);
        }

        .qaSeverityMinor {
          color: #A76584;
        }

        .qaThreshold {
          color: var(--accent-deep);
          font-size: 12px;
          font-weight: 600;
          text-align: right;
        }

        .qaAiSection {
          padding: 96px 0 104px;
          color: #FFFFFF;
          background: var(--dark);
        }

        .qaAiHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 88px;
          align-items: end;
        }

        .qaAiSection h2 {
          max-width: 620px;
          color: #FFFFFF;
        }

        .qaAiIntro {
          max-width: 760px;
          margin: 0;
          color: #CBD5E1;
          font-size: 18px;
          line-height: 1.65;
        }

        .qaAiFlow {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          margin-top: 60px;
          border-top: 1px solid #344154;
          border-bottom: 1px solid #344154;
        }

        .qaAiFlowStep {
          position: relative;
          min-width: 0;
          padding: 28px 26px 30px;
          border-left: 1px solid #344154;
        }

        .qaAiFlowStep:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .qaAiFlowStep:last-child {
          padding-right: 0;
        }

        .qaAiFlowStep::after {
          position: absolute;
          top: 36px;
          right: -6px;
          z-index: 1;
          width: 11px;
          height: 11px;
          border-top: 1.5px solid #8FA0B6;
          border-right: 1.5px solid #8FA0B6;
          transform: rotate(45deg);
          content: "";
        }

        .qaAiFlowStep:last-child::after {
          display: none;
        }

        .qaAiStageLabel {
          display: block;
          margin-bottom: 14px;
          color: #F0A8C7;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .qaAiFlowStep h3 {
          margin: 0;
          color: #FFFFFF;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaAiFlowStep p {
          margin: 10px 0 0;
          color: #AEBBCD;
          font-size: 14px;
          line-height: 1.58;
        }

        .qaAiValidationLayout {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(520px, 1.22fr);
          gap: 64px;
          align-items: start;
          margin-top: 58px;
        }

        .qaAiNarrative h3 {
          max-width: 480px;
          margin: 0;
          color: #FFFFFF;
          font-size: 24px;
          font-weight: 600;
          line-height: 1.3;
        }

        .qaAiNarrative p {
          max-width: 520px;
          margin: 16px 0 0;
          color: #B8C4D4;
          font-size: 16px;
          line-height: 1.65;
        }

        .qaAiSignalList {
          margin-top: 28px;
          border-top: 1px solid #344154;
        }

        .qaAiSignal {
          display: grid;
          grid-template-columns: 12px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          padding: 16px 0;
          border-bottom: 1px solid #344154;
          color: #D5DEEA;
          font-size: 14px;
          line-height: 1.55;
        }

        .qaAiSignal::before {
          width: 7px;
          height: 7px;
          margin-top: 7px;
          border-radius: 50%;
          background: #F0A8C7;
          content: "";
        }

        .qaAiReviewPanel {
          overflow: hidden;
          border: 1px solid #3B485B;
          border-radius: 26px;
          background: #182334;
        }

        .qaAiReviewTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 24px;
          border-bottom: 1px solid #344154;
        }

        .qaAiReviewTop strong,
        .qaAiReviewTop span {
          display: block;
        }

        .qaAiReviewTop strong {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaAiReviewTop span {
          margin-top: 3px;
          color: #91A0B4;
          font-size: 11px;
          line-height: 1.4;
        }

        .qaAiQueueStatus {
          flex: 0 0 auto;
          padding: 7px 10px;
          border-radius: 999px;
          color: #F6B9D3;
          background: rgba(193, 29, 99, 0.16);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
        }

        .qaAiReviewRows {
          padding: 0 24px;
        }

        .qaAiReviewRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(0, 1.2fr) 138px;
          gap: 18px;
          align-items: center;
          min-height: 76px;
          border-bottom: 1px solid #344154;
        }

        .qaAiReviewRow:last-child {
          border-bottom: 0;
        }

        .qaAiReviewRow strong {
          color: #FFFFFF;
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaAiReviewFinding {
          color: #AEBBCD;
          font-size: 12px;
          line-height: 1.45;
        }

        .qaAiReviewStatus {
          justify-self: end;
          padding: 7px 10px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.25;
          text-align: center;
        }

        .qaAiReviewStatusPassed {
          color: #BBF7D0;
          background: rgba(22, 101, 52, 0.28);
        }

        .qaAiReviewStatusReview {
          color: #FBCFE8;
          background: rgba(193, 29, 99, 0.19);
        }

        .qaAiReviewStatusEscalate {
          color: #FDE68A;
          background: rgba(161, 98, 7, 0.24);
        }

        .qaAiSection .qaEditorialLink,
        .qaAiSection .qaEditorialLink:visited {
          color: #F0A8C7;
        }

        .qaAiSection .qaEditorialLink:hover {
          color: #FFFFFF;
        }

        .qaReviewSection {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .qaReviewHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaReviewSection h2 {
          max-width: 610px;
        }

        .qaReviewIntro {
          max-width: 760px;
          margin: 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaReviewLayout {
          display: grid;
          grid-template-columns: minmax(0, 0.8fr) minmax(560px, 1.2fr);
          gap: 60px;
          align-items: start;
          margin-top: 58px;
        }

        .qaReviewCapabilityList {
          border-top: 1px solid var(--line);
        }

        .qaReviewCapability {
          padding: 22px 0 24px;
          border-bottom: 1px solid var(--line);
        }

        .qaReviewCapability h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaReviewCapability p {
          margin: 8px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaApprovalPanel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #FFFFFF;
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
        }

        .qaApprovalTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 24px 26px;
          border-bottom: 1px solid var(--line);
          background: #F8FAFC;
        }

        .qaApprovalTop strong,
        .qaApprovalTop span {
          display: block;
        }

        .qaApprovalTop strong {
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaApprovalTop span {
          margin-top: 3px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
        }

        .qaApprovalProgress {
          flex: 0 0 auto;
          color: var(--accent-deep);
          font-size: 12px;
          font-weight: 600;
        }

        .qaApprovalStages {
          padding: 4px 26px 10px;
        }

        .qaApprovalStage {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr) auto;
          gap: 15px;
          align-items: center;
          min-height: 74px;
          border-bottom: 1px solid var(--line);
        }

        .qaApprovalStage:last-child {
          border-bottom: 0;
        }

        .qaStageMarker {
          position: relative;
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
          border: 1.5px solid var(--line-strong);
          border-radius: 50%;
          background: #FFFFFF;
        }

        .qaStageMarker::after {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--line-strong);
          content: "";
        }

        .qaStageMarkerComplete {
          border-color: #22C55E;
          color: #15803D;
          background: #F0FDF4;
        }

        .qaStageMarkerComplete::after {
          width: 8px;
          height: 5px;
          border-bottom: 1.6px solid currentColor;
          border-left: 1.6px solid currentColor;
          border-radius: 0;
          background: transparent;
          transform: rotate(-45deg) translateY(-1px);
        }

        .qaStageMarkerActive {
          border-color: var(--accent);
          background: var(--blush);
        }

        .qaStageMarkerActive::after {
          background: var(--accent);
        }

        .qaApprovalStage h3 {
          margin: 0;
          color: var(--ink);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaApprovalStage p {
          margin: 3px 0 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
        }

        .qaStageStatus {
          color: var(--muted);
          font-size: 11px;
          font-weight: 600;
          text-align: right;
        }

        .qaStageStatusComplete {
          color: #15803D;
        }

        .qaStageStatusActive {
          color: var(--accent-deep);
        }

        .qaReviewComment {
          display: grid;
          grid-template-columns: 36px minmax(0, 1fr) auto;
          gap: 14px;
          align-items: center;
          margin: 0 26px 26px;
          padding: 17px 18px;
          border-radius: 18px;
          background: var(--blush);
        }

        .qaCommentIcon {
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          color: var(--accent-deep);
          background: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .qaReviewComment strong,
        .qaReviewComment span {
          display: block;
        }

        .qaReviewComment strong {
          color: var(--ink);
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaReviewComment span {
          margin-top: 3px;
          color: #6B2146;
          font-size: 11px;
          line-height: 1.45;
        }

        .qaCommentState {
          color: var(--accent-deep);
          font-size: 11px;
          font-weight: 600;
          text-align: right;
        }

        .qaAssetsSection {
          padding: 96px 0 104px;
          background: var(--blush);
        }

        .qaAssetsHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaAssetsSection h2 {
          max-width: 610px;
        }

        .qaAssetsIntro {
          max-width: 760px;
          margin: 0;
          color: #6B4054;
          font-size: 18px;
          line-height: 1.65;
        }

        .qaAssetFlow {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid #E6C7D5;
          border-bottom: 1px solid #E6C7D5;
        }

        .qaAssetStep {
          position: relative;
          min-width: 0;
          padding: 28px 22px 30px;
          border-left: 1px solid #E6C7D5;
        }

        .qaAssetStep:first-child {
          border-left: 0;
          padding-left: 0;
        }

        .qaAssetStep:last-child {
          padding-right: 0;
        }

        .qaAssetStep::after {
          position: absolute;
          top: 35px;
          right: -6px;
          z-index: 1;
          width: 11px;
          height: 11px;
          border-top: 1.5px solid #B97B98;
          border-right: 1.5px solid #B97B98;
          transform: rotate(45deg);
          content: "";
        }

        .qaAssetStep:last-child::after {
          display: none;
        }

        .qaAssetStepLabel {
          display: block;
          margin-bottom: 13px;
          color: var(--accent-deep);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .qaAssetStep h3 {
          margin: 0;
          color: var(--ink);
          font-size: 17px;
          font-weight: 600;
          line-height: 1.38;
        }

        .qaAssetStep p {
          margin: 9px 0 0;
          color: #6B4054;
          font-size: 13px;
          line-height: 1.58;
        }

        .qaAssetLinks {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          margin-top: 44px;
        }

        .qaAssetLinkBlock {
          padding-top: 23px;
          border-top: 1px solid #E6C7D5;
        }

        .qaAssetLinkBlock h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaAssetLinkBlock p {
          max-width: 540px;
          margin: 10px 0 0;
          color: #6B4054;
          font-size: 14px;
          line-height: 1.62;
        }



        .qaContextSection {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .qaContextHeader,
        .qaRiskHeader,
        .qaReportingHeader,
        .qaTeamsHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaContextSection h2,
        .qaRiskSection h2,
        .qaReportingSection h2,
        .qaTeamsSection h2 {
          margin: 0;
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .qaContextSection h2,
        .qaRiskSection h2,
        .qaTeamsSection h2 {
          max-width: 630px;
          color: var(--ink);
        }

        .qaContextIntro,
        .qaRiskIntro,
        .qaReportingIntro,
        .qaTeamsIntro {
          max-width: 760px;
          margin: 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaContextLayout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 390px;
          gap: 58px;
          align-items: start;
          margin-top: 58px;
        }

        .qaContextGrid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 46px;
          border-top: 1px solid var(--line);
        }

        .qaContextItem {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 15px;
          align-items: start;
          min-width: 0;
          padding: 24px 0 26px;
          border-bottom: 1px solid var(--line);
        }

        .qaContextIcon,
        .qaTeamIcon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid #E6EAF0;
          border-radius: 14px;
          color: var(--accent-deep);
          background: #FFFFFF;
        }

        .qaContextItem h3,
        .qaTeamItem h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaContextItem p,
        .qaTeamItem p {
          margin: 8px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaExperiencePanel {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 28px;
          background: #FFFFFF;
          box-shadow: 0 18px 48px rgba(15, 23, 42, 0.08);
        }

        .qaExperienceTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 22px 24px;
          border-bottom: 1px solid var(--line);
          background: #F8FAFC;
        }

        .qaExperienceTop strong,
        .qaExperienceTop span {
          display: block;
        }

        .qaExperienceTop strong {
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaExperienceTop span {
          margin-top: 3px;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.4;
        }

        .qaExperienceStatus {
          flex: 0 0 auto;
          padding: 7px 10px;
          border-radius: 999px;
          color: var(--accent-deep);
          background: var(--blush);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.2;
        }

        .qaExperiencePreview {
          padding: 24px;
          background: #FCFDFE;
        }

        .qaBrowserFrame {
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #FFFFFF;
        }

        .qaBrowserBar {
          display: flex;
          align-items: center;
          gap: 6px;
          min-height: 34px;
          padding: 0 13px;
          border-bottom: 1px solid var(--line);
          background: #F8FAFC;
        }

        .qaBrowserBar i {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #CBD5E1;
        }

        .qaBrowserContent {
          display: grid;
          grid-template-columns: 74px minmax(0, 1fr);
          min-height: 266px;
        }

        .qaBrowserNav {
          padding: 16px 12px;
          border-right: 1px solid var(--line);
          background: #F8FAFC;
        }

        .qaBrowserNav span {
          display: block;
          height: 7px;
          margin: 0 0 13px;
          border-radius: 999px;
          background: #DCE3EC;
        }

        .qaBrowserNav span:first-child {
          width: 72%;
          background: #D9A2BB;
        }

        .qaBrowserMain {
          min-width: 0;
          padding: 18px;
        }

        .qaPreviewHeading {
          width: 72%;
          height: 12px;
          border-radius: 999px;
          background: #334155;
        }

        .qaPreviewLine {
          height: 7px;
          margin-top: 10px;
          border-radius: 999px;
          background: #CBD5E1;
        }

        .qaPreviewLineShort {
          width: 68%;
        }

        .qaPreviewButton {
          width: 102px;
          height: 28px;
          margin-top: 18px;
          border-radius: 999px;
          background: var(--accent);
        }

        .qaPreviewFlag {
          display: grid;
          grid-template-columns: 18px minmax(0, 1fr);
          gap: 9px;
          align-items: start;
          margin-top: 21px;
          padding: 12px;
          border: 1px solid #E9BCD0;
          border-radius: 14px;
          background: var(--blush);
        }

        .qaPreviewFlag svg {
          margin-top: 1px;
          color: var(--accent-deep);
        }

        .qaPreviewFlag strong,
        .qaPreviewFlag span {
          display: block;
        }

        .qaPreviewFlag strong {
          color: var(--ink);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaPreviewFlag span {
          margin-top: 2px;
          color: #6B4054;
          font-size: 10px;
          line-height: 1.45;
        }

        .qaExperienceFooter {
          padding: 18px 24px 22px;
          border-top: 1px solid var(--line);
          background: #FFFFFF;
        }

        .qaExperienceFooter p {
          margin: 0;
          color: var(--body);
          font-size: 13px;
          line-height: 1.58;
        }

        .qaRiskSection {
          padding: 96px 0 104px;
          background: var(--soft);
        }

        .qaRiskMatrix {
          margin-top: 58px;
          border-bottom: 1px solid var(--line-strong);
        }

        .qaRiskMatrixHeader,
        .qaRiskRow {
          display: grid;
          grid-template-columns: 190px minmax(0, 1.05fr) minmax(0, 1fr) minmax(0, 1.25fr);
          gap: 28px;
        }

        .qaRiskMatrixHeader {
          padding: 0 0 14px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .qaRiskRow {
          align-items: start;
          padding: 25px 0 27px;
          border-top: 1px solid var(--line);
        }

        .qaRiskRow:first-of-type {
          border-top: 0;
        }

        .qaRiskLevel {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .qaRiskIndicator {
          display: block;
          flex: 0 0 auto;
          width: 8px;
          height: 8px;
          margin-top: 7px;
          border-radius: 50%;
          background: #94A3B8;
        }

        .qaRiskRow:nth-of-type(3) .qaRiskIndicator {
          background: #B97B98;
        }

        .qaRiskRow:nth-of-type(4) .qaRiskIndicator {
          background: var(--accent);
        }

        .qaRiskRow:nth-of-type(5) .qaRiskIndicator {
          background: var(--accent-deep);
        }

        .qaRiskLevel strong {
          color: var(--ink);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaRiskSummary,
        .qaRiskExamples {
          color: var(--body);
          font-size: 13px;
          line-height: 1.58;
        }

        .qaRiskControls {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }

        .qaRiskControl {
          display: inline-flex;
          align-items: center;
          min-height: 29px;
          padding: 5px 9px;
          border: 1px solid var(--line);
          border-radius: 999px;
          color: #334155;
          background: #FFFFFF;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.3;
        }

        .qaRiskNote {
          max-width: 840px;
          margin: 28px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaReportingSection {
          padding: 96px 0 104px;
          color: #FFFFFF;
          background: var(--dark);
        }

        .qaReportingSection h2 {
          max-width: 630px;
          color: #FFFFFF;
        }

        .qaReportingIntro {
          color: #CBD5E1;
        }

        .qaReportingLayout {
          display: grid;
          grid-template-columns: minmax(520px, 1.18fr) minmax(0, 0.82fr);
          gap: 62px;
          align-items: start;
          margin-top: 58px;
        }

        .qaAnalyticsPanel {
          overflow: hidden;
          border: 1px solid #3B485B;
          border-radius: 28px;
          background: #182334;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.18);
        }

        .qaAnalyticsTop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          padding: 22px 24px;
          border-bottom: 1px solid #344154;
        }

        .qaAnalyticsTop strong,
        .qaAnalyticsTop span {
          display: block;
        }

        .qaAnalyticsTop strong {
          color: #FFFFFF;
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaAnalyticsTop span {
          margin-top: 3px;
          color: #91A0B4;
          font-size: 11px;
          line-height: 1.4;
        }

        .qaAnalyticsPeriod {
          flex: 0 0 auto;
          padding: 7px 10px;
          border: 1px solid #48566A;
          border-radius: 999px;
          color: #D5DEEA;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.2;
        }

        .qaAnalyticsMetrics {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          border-bottom: 1px solid #344154;
        }

        .qaAnalyticsMetric {
          min-width: 0;
          padding: 20px;
          border-left: 1px solid #344154;
        }

        .qaAnalyticsMetric:first-child {
          border-left: 0;
        }

        .qaAnalyticsMetric strong,
        .qaAnalyticsMetric span,
        .qaAnalyticsMetric small {
          display: block;
        }

        .qaAnalyticsMetric strong {
          color: #FFFFFF;
          font-size: 26px;
          font-weight: 600;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .qaAnalyticsMetric span {
          margin-top: 5px;
          color: #AEBBCD;
          font-size: 10px;
          line-height: 1.4;
        }

        .qaAnalyticsMetric small {
          margin-top: 8px;
          color: #F0A8C7;
          font-size: 9px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaAnalyticsBody {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(170px, 0.85fr);
        }

        .qaLanguageTable {
          padding: 8px 22px 14px;
        }

        .qaLanguageRow {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 54px 58px 18px;
          gap: 12px;
          align-items: center;
          min-height: 54px;
          border-bottom: 1px solid #344154;
        }

        .qaLanguageRow:last-child {
          border-bottom: 0;
        }

        .qaLanguageRow strong {
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaLanguageRow span {
          color: #AEBBCD;
          font-size: 10px;
          line-height: 1.4;
          text-align: right;
        }

        .qaTrendIcon {
          justify-self: end;
          width: 14px;
          height: 14px;
          color: #86EFAC;
        }

        .qaTrendIconReview {
          color: #F0A8C7;
        }

        .qaIssueChart {
          padding: 20px 20px 18px;
          border-left: 1px solid #344154;
        }

        .qaIssueChartLabel {
          margin: 0 0 18px;
          color: #91A0B4;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .qaIssueBar {
          margin-top: 13px;
        }

        .qaIssueBar:first-of-type {
          margin-top: 0;
        }

        .qaIssueBarTop {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 6px;
          color: #D5DEEA;
          font-size: 9px;
          line-height: 1.35;
        }

        .qaIssueBarTrack {
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: #2B3749;
        }

        .qaIssueBarFill {
          height: 100%;
          border-radius: inherit;
          background: #D98AB0;
        }

        .qaReportingBenefits {
          border-top: 1px solid #344154;
        }

        .qaReportingBenefit {
          padding: 21px 0 23px;
          border-bottom: 1px solid #344154;
        }

        .qaReportingBenefit h3 {
          margin: 0;
          color: #FFFFFF;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaReportingBenefit p {
          margin: 8px 0 0;
          color: #AEBBCD;
          font-size: 14px;
          line-height: 1.62;
        }

        .qaReportingSection .qaEditorialLink,
        .qaReportingSection .qaEditorialLink:visited {
          color: #F0A8C7;
        }

        .qaReportingSection .qaEditorialLink:hover {
          color: #FFFFFF;
        }

        .qaTeamsSection {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .qaTeamsGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 34px;
          margin-top: 58px;
          border-top: 1px solid var(--line);
        }

        .qaTeamItem {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 15px;
          align-items: start;
          min-width: 0;
          padding: 26px 0 28px;
          border-bottom: 1px solid var(--line);
        }

        .qaTeamsSummary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 30px;
          align-items: center;
          margin-top: 42px;
          padding: 28px 30px;
          border: 1px solid #E9BCD0;
          border-radius: 24px;
          background: var(--blush);
        }

        .qaTeamsSummary h3 {
          margin: 0;
          color: var(--ink);
          font-size: 22px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaTeamsSummary p {
          max-width: 760px;
          margin: 8px 0 0;
          color: #6B4054;
          font-size: 14px;
          line-height: 1.62;
        }


        .qaPlatformSection {
          padding: 96px 0 104px;
          background: #F8FAFC;
        }

        .qaPlatformHeader,
        .qaReadinessHeader,
        .qaFaqHeader {
          display: grid;
          grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
          gap: 88px;
          align-items: end;
        }

        .qaPlatformSection h2,
        .qaReadinessSection h2,
        .qaFaqSection h2,
        .qaFinalCta h2 {
          margin: 0;
          color: var(--ink);
          font-size: 36px;
          font-weight: 600;
          line-height: 1.16;
          letter-spacing: -0.025em;
        }

        .qaPlatformIntro,
        .qaReadinessIntro,
        .qaFaqIntro {
          max-width: 760px;
          margin: 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaPlatformGrid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          margin-top: 58px;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .qaPlatformItem {
          min-width: 0;
          padding: 28px 24px 30px;
          border-left: 1px solid var(--line);
        }

        .qaPlatformItem:nth-child(5n + 1) {
          border-left: 0;
        }

        .qaPlatformItem:nth-child(n + 6) {
          border-top: 1px solid var(--line);
        }

        .qaPlatformItem small {
          display: block;
          margin-bottom: 11px;
          color: var(--accent-deep);
          font-size: 10px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .qaPlatformItem h3 {
          margin: 0;
          color: var(--ink);
          font-size: 19px;
          font-weight: 600;
          line-height: 1.35;
        }

        .qaPlatformItem p {
          margin: 10px 0 18px;
          color: var(--body);
          font-size: 14px;
          line-height: 1.6;
        }

        .qaPlatformItem .qaEditorialLink {
          min-height: 36px;
          margin-top: 0;
          font-size: 13px;
        }

        .qaPlatformSummary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          margin-top: 36px;
        }

        .qaPlatformSummary p {
          max-width: 780px;
          margin: 0;
          color: var(--body);
          font-size: 15px;
          line-height: 1.65;
        }

        .qaReadinessSection {
          padding: 96px 0 104px;
          background: #FFFFFF;
        }

        .qaReadinessGrid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          column-gap: 36px;
          margin-top: 58px;
          border-top: 1px solid var(--line);
        }

        .qaReadinessItem {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 15px;
          align-items: start;
          min-width: 0;
          padding: 27px 0 29px;
          border-bottom: 1px solid var(--line);
        }

        .qaReadinessIcon {
          display: inline-flex;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border: 1px solid #E9BCD0;
          border-radius: 14px;
          color: var(--accent-deep);
          background: var(--blush);
        }

        .qaReadinessItem h3 {
          margin: 0;
          color: var(--ink);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.38;
        }

        .qaReadinessItem p {
          margin: 8px 0 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.62;
        }

        .qaReadinessLinks {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 28px;
          align-items: center;
          margin-top: 38px;
          padding-top: 28px;
          border-top: 1px solid var(--line);
        }

        .qaReadinessLinks .qaEditorialLink,
        .qaFaqSupport .qaEditorialLink {
          margin-top: 0;
        }

        .qaReadinessLinks > span {
          color: var(--muted);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaFaqSection {
          padding: 96px 0 104px;
          background: #F8FAFC;
        }

        .qaFaqColumns {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 48px;
          margin-top: 58px;
          border-top: 1px solid var(--line);
        }

        .qaFaqColumn {
          min-width: 0;
        }

        .qaFaqItem {
          border-bottom: 1px solid var(--line);
        }

        .qaFaqItem summary {
          position: relative;
          display: flex;
          min-height: 78px;
          align-items: center;
          padding: 22px 44px 22px 0;
          color: var(--ink);
          cursor: pointer;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.45;
          list-style: none;
        }

        .qaFaqItem summary::-webkit-details-marker {
          display: none;
        }

        .qaFaqItem summary::before,
        .qaFaqItem summary::after {
          position: absolute;
          top: 50%;
          right: 4px;
          width: 16px;
          height: 1.5px;
          border-radius: 999px;
          background: var(--accent);
          content: "";
          transform: translateY(-50%);
          transition: transform 160ms ease;
        }

        .qaFaqItem summary::after {
          transform: translateY(-50%) rotate(90deg);
        }

        .qaFaqItem[open] summary::after {
          transform: translateY(-50%) rotate(0deg);
        }

        .qaFaqItem summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.22);
          outline-offset: 4px;
          border-radius: 8px;
        }

        .qaFaqAnswer {
          max-width: 790px;
          padding: 0 44px 24px 0;
          color: var(--body);
          font-size: 15px;
          line-height: 1.7;
        }

        .qaFaqAnswer p {
          margin: 0;
        }

        .qaFaqSupport {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 38px;
          padding: 26px 28px;
          border: 1px solid var(--line);
          border-radius: 22px;
          background: #FFFFFF;
        }

        .qaFaqSupport p {
          max-width: 760px;
          margin: 0;
          color: var(--body);
          font-size: 14px;
          line-height: 1.6;
        }

        .qaFinalSection {
          padding: 80px 0 96px;
          background: #FFFFFF;
        }

        .qaFinalCta {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
          gap: 72px;
          align-items: center;
          padding: 58px 62px;
          border: 1px solid #E9BCD0;
          border-radius: 30px;
          background: linear-gradient(135deg, #FFF9FC 0%, var(--blush) 100%);
        }

        .qaFinalCopy,
        .qaFinalProof {
          position: relative;
          z-index: 1;
          min-width: 0;
        }

        .qaFinalCta h2 {
          max-width: 690px;
        }

        .qaFinalCta p {
          max-width: 760px;
          margin: 20px 0 0;
          color: var(--body);
          font-size: 18px;
          line-height: 1.65;
        }

        .qaFinalActions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 30px;
        }

        .qaFinalProof {
          border-top: 1px solid #E6C7D5;
        }

        .qaFinalProofItem {
          display: grid;
          grid-template-columns: 24px minmax(0, 1fr);
          gap: 13px;
          align-items: start;
          padding: 18px 0;
          border-bottom: 1px solid #E6C7D5;
        }

        .qaFinalProofItem svg {
          margin-top: 2px;
          color: var(--accent);
        }

        .qaFinalProofItem strong,
        .qaFinalProofItem span {
          display: block;
        }

        .qaFinalProofItem strong {
          color: var(--ink);
          font-size: 15px;
          font-weight: 600;
          line-height: 1.4;
        }

        .qaFinalProofItem span {
          margin-top: 3px;
          color: #6B4054;
          font-size: 13px;
          line-height: 1.5;
        }

        @media (max-width: 1180px) {
          .qaShell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .qaHeroGrid {
            grid-template-columns: minmax(0, 1fr) minmax(410px, 0.92fr);
            gap: 44px;
          }

          .qaWorkflowHeader,
          .qaChecksHeader {
            gap: 56px;
          }

          .qaWorkflowStep {
            padding-left: 16px;
            padding-right: 16px;
          }

          .qaChecksLayout {
            grid-template-columns: minmax(0, 1fr) 330px;
            gap: 38px;
          }

          .qaChecksGrid {
            column-gap: 32px;
          }

          .qaLqaLayout,
          .qaReviewLayout {
            grid-template-columns: minmax(0, 0.78fr) minmax(500px, 1.22fr);
            gap: 42px;
          }

          .qaAiHeader,
          .qaReviewHeader,
          .qaAssetsHeader,
          .qaContextHeader,
          .qaRiskHeader,
          .qaReportingHeader,
          .qaTeamsHeader {
            gap: 56px;
          }

          .qaContextLayout {
            grid-template-columns: minmax(0, 1fr) 350px;
            gap: 40px;
          }

          .qaTeamsGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaContextGrid {
            column-gap: 32px;
          }

          .qaReportingLayout {
            grid-template-columns: minmax(480px, 1.15fr) minmax(0, 0.85fr);
            gap: 42px;
          }

          .qaAiValidationLayout {
            grid-template-columns: minmax(0, 0.76fr) minmax(480px, 1.24fr);
            gap: 42px;
          }

          .qaAiFlowStep,
          .qaAssetStep {
            padding-left: 18px;
            padding-right: 18px;
          }
        }

        @media (max-width: 980px) {
          .qaHero {
            padding-top: 88px;
            background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 82%, #F8FAFC 82%, #F8FAFC 100%);
          }

          .qaHeroGrid {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .qaHeroCopy {
            max-width: 820px;
            padding-bottom: 0;
          }

          .qaHero h1 {
            max-width: 760px;
            font-size: 42px;
          }

          .qaHeroVisualWrap {
            padding-bottom: 20px;
          }

          .qaTrustStrip {
            margin-top: 20px;
          }

          .qaTrustInner {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaWorkflowHeader,
          .qaChecksHeader {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .qaWorkflowSection h2,
          .qaChecksSection h2 {
            font-size: 32px;
          }

          .qaWorkflowGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaWorkflowStep:nth-child(4) {
            border-left: 0;
          }

          .qaWorkflowStep:nth-child(n + 4) {
            border-top: 1px solid #344154;
          }

          .qaWorkflowStep:first-child,
          .qaWorkflowStep:nth-child(4) {
            padding-left: 0;
          }

          .qaWorkflowStep:nth-child(3),
          .qaWorkflowStep:nth-child(6) {
            padding-right: 0;
          }

          .qaChecksLayout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .qaSummaryPanel {
            max-width: none;
          }

          .qaLqaSection h2,
          .qaAiSection h2,
          .qaReviewSection h2,
          .qaAssetsSection h2,
          .qaContextSection h2,
          .qaRiskSection h2,
          .qaReportingSection h2,
          .qaTeamsSection h2 {
            font-size: 32px;
          }

          .qaLqaLayout,
          .qaReviewLayout,
          .qaAiValidationLayout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .qaAiHeader,
          .qaReviewHeader,
          .qaAssetsHeader,
          .qaContextHeader,
          .qaRiskHeader,
          .qaReportingHeader,
          .qaTeamsHeader {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .qaContextLayout,
          .qaReportingLayout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .qaRiskMatrixHeader {
            display: none;
          }

          .qaRiskRow {
            grid-template-columns: 150px minmax(0, 1fr) minmax(0, 1fr);
          }

          .qaRiskControls {
            grid-column: 2 / -1;
          }

          .qaTeamsGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .qaAiFlow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .qaAiFlowStep:nth-child(3) {
            border-left: 0;
          }

          .qaAiFlowStep:nth-child(n + 3) {
            border-top: 1px solid #344154;
          }

          .qaAiFlowStep:nth-child(2)::after {
            display: none;
          }

          .qaAssetFlow {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaAssetStep:nth-child(4) {
            border-left: 0;
          }

          .qaAssetStep:nth-child(n + 4) {
            border-top: 1px solid #E6C7D5;
          }

          .qaAssetStep:nth-child(3)::after {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .qaShell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .qaHero {
            padding-top: 72px;
          }

          .qaHeroLead,
          .qaWorkflowIntro,
          .qaChecksIntro {
            font-size: 18px;
          }

          .qaWorkbenchBody {
            grid-template-columns: 1fr;
          }

          .qaWorkbenchSide {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 0 20px;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .qaSideLabel {
            grid-column: 1 / -1;
          }

          .qaReviewStatus {
            grid-column: 1 / -1;
          }

          .qaWorkflowSection,
          .qaChecksSection,
          .qaLqaSection,
          .qaAiSection,
          .qaReviewSection,
          .qaAssetsSection,
          .qaContextSection,
          .qaRiskSection,
          .qaReportingSection,
          .qaTeamsSection {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .qaWorkflowGrid {
            margin-top: 44px;
          }

          .qaChecksGrid {
            grid-template-columns: 1fr;
          }

          .qaScorecardOverview {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaAiReviewRow {
            grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr) 124px;
          }

          .qaAssetLinks {
            gap: 32px;
          }

          .qaContextGrid {
            grid-template-columns: 1fr;
          }

          .qaAnalyticsMetrics {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .qaAnalyticsMetric:nth-child(3) {
            border-top: 1px solid #344154;
            border-left: 0;
          }

          .qaAnalyticsMetric:nth-child(4) {
            border-top: 1px solid #344154;
          }

          .qaAnalyticsBody {
            grid-template-columns: 1fr;
          }

          .qaIssueChart {
            border-top: 1px solid #344154;
            border-left: 0;
          }

          .qaCheckItem {
            padding: 22px 0 24px;
          }
        }

        @media (max-width: 620px) {
          .qaShell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .qaHero {
            padding-top: 66px;
            background: linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 90%, #F8FAFC 90%, #F8FAFC 100%);
          }

          .qaHero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .qaHeroActions {
            display: grid;
            grid-template-columns: 1fr;
          }

          .qaButton {
            width: 100%;
            padding-left: 20px;
            padding-right: 20px;
            text-align: center;
            white-space: normal;
          }

          .qaEditorialLink {
            max-width: 100%;
            overflow-wrap: anywhere;
          }

          .qaWorkbenchTop {
            align-items: flex-start;
            padding: 18px;
          }

          .qaWorkbenchTitle strong {
            white-space: normal;
          }

          .qaScorePill {
            margin-top: 2px;
          }

          .qaSegments {
            padding: 15px;
          }

          .qaColumnLabels {
            display: none;
          }

          .qaSegmentContent {
            grid-template-columns: 1fr;
          }

          .qaTextCell + .qaTextCell {
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .qaTextCell::before {
            display: block;
            margin-bottom: 6px;
            color: var(--muted);
            font-size: 9px;
            font-weight: 600;
            line-height: 1.3;
            letter-spacing: 0.13em;
            text-transform: uppercase;
          }

          .qaTextCell:first-child::before {
            content: "Source";
          }

          .qaTextCell:last-child::before {
            content: "German (Germany)";
          }

          .qaWorkbenchSide {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 18px;
          }

          .qaSideLabel,
          .qaReviewStatus {
            grid-column: auto;
          }

          .qaMetric {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 14px;
            align-items: center;
          }

          .qaMetric span {
            margin-top: 0;
          }

          .qaTrustInner {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 22px 18px;
          }

          .qaWorkflowSection h2,
          .qaChecksSection h2,
          .qaLqaSection h2,
          .qaAiSection h2,
          .qaReviewSection h2,
          .qaAssetsSection h2,
          .qaContextSection h2,
          .qaRiskSection h2,
          .qaReportingSection h2,
          .qaTeamsSection h2 {
            font-size: 30px;
          }

          .qaWorkflowGrid {
            grid-template-columns: 1fr;
            border-bottom: 0;
          }

          .qaWorkflowStep,
          .qaWorkflowStep:first-child,
          .qaWorkflowStep:nth-child(3),
          .qaWorkflowStep:nth-child(4),
          .qaWorkflowStep:nth-child(6),
          .qaWorkflowStep:last-child {
            display: grid;
            grid-template-columns: 44px minmax(0, 1fr);
            column-gap: 16px;
            padding: 24px 0;
            border-top: 1px solid #344154;
            border-left: 0;
          }

          .qaWorkflowStep:first-child {
            border-top: 0;
          }

          .qaStepNumber {
            grid-row: 1 / span 2;
            margin: 3px 0 0;
          }

          .qaWorkflowStep h3 {
            font-size: 20px;
          }

          .qaWorkflowStep p {
            margin-top: 8px;
          }

          .qaChecksLayout,
          .qaLqaLayout,
          .qaAiValidationLayout,
          .qaReviewLayout,
          .qaAssetFlow,
          .qaContextLayout,
          .qaRiskMatrix,
          .qaReportingLayout,
          .qaTeamsGrid {
            margin-top: 44px;
          }

          .qaRiskRow {
            grid-template-columns: 1fr;
            gap: 10px;
            padding: 22px 0 24px;
          }

          .qaRiskControls {
            grid-column: auto;
            margin-top: 5px;
          }

          .qaRiskSummary::before,
          .qaRiskExamples::before,
          .qaRiskControls::before {
            display: block;
            margin-bottom: 5px;
            color: var(--muted);
            font-size: 9px;
            font-weight: 600;
            line-height: 1.35;
            letter-spacing: 0.12em;
            text-transform: uppercase;
          }

          .qaRiskSummary::before {
            content: "Quality approach";
          }

          .qaRiskExamples::before {
            content: "Typical content";
          }

          .qaRiskControls::before {
            flex-basis: 100%;
            content: "Typical controls";
          }

          .qaAnalyticsTop {
            align-items: flex-start;
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaAnalyticsMetrics {
            grid-template-columns: 1fr;
          }

          .qaAnalyticsMetric,
          .qaAnalyticsMetric:nth-child(3),
          .qaAnalyticsMetric:nth-child(4) {
            display: grid;
            grid-template-columns: 64px minmax(0, 1fr);
            gap: 4px 14px;
            align-items: center;
            border-top: 1px solid #344154;
            border-left: 0;
          }

          .qaAnalyticsMetric:first-child {
            border-top: 0;
          }

          .qaAnalyticsMetric small {
            grid-column: 2;
            margin-top: 0;
          }

          .qaLanguageTable {
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaTeamsGrid {
            grid-template-columns: 1fr;
          }

          .qaTeamsSummary {
            grid-template-columns: 1fr;
            gap: 18px;
            padding: 24px;
          }

          .qaScorecardHeader,
          .qaApprovalTop,
          .qaAiReviewTop {
            align-items: flex-start;
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaScorecardDecision,
          .qaAiQueueStatus {
            max-width: 150px;
            white-space: normal;
            text-align: center;
          }

          .qaScorecardOverview {
            grid-template-columns: 1fr;
          }

          .qaScorecardStat {
            display: grid;
            grid-template-columns: auto minmax(0, 1fr);
            gap: 14px;
            align-items: center;
            border-top: 1px solid var(--line);
            border-left: 0;
          }

          .qaScorecardStat:first-child {
            border-top: 0;
          }

          .qaScorecardStat span {
            margin-top: 0;
          }

          .qaScoreTable,
          .qaAiReviewRows,
          .qaApprovalStages {
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaScoreRow {
            grid-template-columns: minmax(0, 1fr) 58px;
            gap: 12px;
            padding: 12px 0;
          }

          .qaIssueCount {
            grid-column: 1 / -1;
            text-align: left;
          }

          .qaScorecardFooter {
            grid-template-columns: 1fr;
            gap: 14px;
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaThreshold {
            text-align: left;
          }

          .qaAiFlow {
            grid-template-columns: 1fr;
            margin-top: 44px;
            border-bottom: 0;
          }

          .qaAiFlowStep,
          .qaAiFlowStep:first-child,
          .qaAiFlowStep:last-child,
          .qaAiFlowStep:nth-child(3) {
            padding: 24px 0;
            border-top: 1px solid #344154;
            border-left: 0;
          }

          .qaAiFlowStep:first-child {
            border-top: 0;
          }

          .qaAiFlowStep::after,
          .qaAiFlowStep:nth-child(2)::after {
            display: none;
          }

          .qaAiReviewRow {
            grid-template-columns: 1fr;
            gap: 6px;
            padding: 16px 0;
          }

          .qaAiReviewStatus {
            justify-self: start;
            margin-top: 4px;
          }

          .qaApprovalStage {
            grid-template-columns: 22px minmax(0, 1fr);
            gap: 12px;
            padding: 14px 0;
          }

          .qaStageStatus {
            grid-column: 2;
            text-align: left;
          }

          .qaReviewComment {
            grid-template-columns: 36px minmax(0, 1fr);
            margin-left: 18px;
            margin-right: 18px;
          }

          .qaCommentState {
            grid-column: 2;
            text-align: left;
          }

          .qaAssetFlow {
            grid-template-columns: 1fr;
            border-bottom: 0;
          }

          .qaAssetStep,
          .qaAssetStep:first-child,
          .qaAssetStep:nth-child(4),
          .qaAssetStep:last-child {
            padding: 22px 0;
            border-top: 1px solid #E6C7D5;
            border-left: 0;
          }

          .qaAssetStep:first-child {
            border-top: 0;
          }

          .qaAssetStep::after,
          .qaAssetStep:nth-child(3)::after,
          .qaAssetStep:last-child::after {
            display: none;
          }

          .qaAssetLinks {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .qaCheckItem {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .qaContextItem,
          .qaTeamItem {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .qaContextIcon,
          .qaTeamIcon {
            width: 40px;
            height: 40px;
            border-radius: 13px;
          }

          .qaExperienceTop {
            align-items: flex-start;
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaExperiencePreview {
            padding: 18px;
          }

          .qaBrowserContent {
            grid-template-columns: 58px minmax(0, 1fr);
          }

          .qaExperienceFooter {
            padding-left: 18px;
            padding-right: 18px;
          }

          .qaLanguageRow {
            grid-template-columns: minmax(0, 1fr) 48px 18px;
          }

          .qaLanguageRow span:nth-of-type(2) {
            display: none;
          }

          .qaCheckIcon {
            width: 40px;
            height: 40px;
            border-radius: 13px;
          }
        }

        @media (max-width: 360px) {
          .qaHero h1 {
            font-size: 36px;
          }

          .qaHeroLead,
          .qaWorkflowIntro,
          .qaChecksIntro,
          .qaLqaIntro,
          .qaAiIntro,
          .qaReviewIntro,
          .qaAssetsIntro,
          .qaContextIntro,
          .qaRiskIntro,
          .qaReportingIntro,
          .qaTeamsIntro {
            font-size: 17px;
          }

          .qaContextItem,
          .qaTeamItem {
            grid-template-columns: 1fr;
          }

          .qaTrustInner {
            grid-template-columns: 1fr;
          }

          .qaScorePill {
            align-self: flex-start;
            padding-left: 9px;
            padding-right: 9px;
          }

          .qaWorkbenchTop,
          .qaScorecardHeader,
          .qaAnalyticsTop {
            flex-direction: column;
            align-items: stretch;
            gap: 12px;
          }

          .qaWorkbenchTitle strong {
            overflow: visible;
            text-overflow: clip;
          }

          .qaScorecardDecision,
          .qaAnalyticsPeriod {
            align-self: flex-start;
          }

          .qaCheckItem {
            grid-template-columns: 1fr;
          }

          .qaCheckIcon {
            margin-bottom: 2px;
          }
        }

        @media (max-width: 1180px) {
          .qaPlatformHeader,
          .qaReadinessHeader,
          .qaFaqHeader {
            gap: 56px;
          }

          .qaPlatformGrid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .qaPlatformItem:nth-child(5n + 1) {
            border-left: 1px solid var(--line);
          }

          .qaPlatformItem:nth-child(3n + 1) {
            border-left: 0;
          }

          .qaPlatformItem:nth-child(n + 4) {
            border-top: 1px solid var(--line);
          }

          .qaReadinessGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .qaFinalCta {
            gap: 48px;
            padding-left: 48px;
            padding-right: 48px;
          }
        }

        @media (max-width: 980px) {
          .qaPlatformHeader,
          .qaReadinessHeader,
          .qaFaqHeader {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .qaPlatformSection h2,
          .qaReadinessSection h2,
          .qaFaqSection h2,
          .qaFinalCta h2 {
            font-size: 32px;
          }

          .qaPlatformGrid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .qaPlatformItem:nth-child(3n + 1) {
            border-left: 1px solid var(--line);
          }

          .qaPlatformItem:nth-child(2n + 1) {
            border-left: 0;
          }

          .qaPlatformItem:nth-child(n + 3) {
            border-top: 1px solid var(--line);
          }

          .qaPlatformSummary {
            align-items: flex-start;
          }

          .qaFaqColumns {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .qaFaqColumn + .qaFaqColumn {
            border-top: 0;
          }

          .qaFinalCta {
            grid-template-columns: 1fr;
            gap: 42px;
          }
        }

        @media (max-width: 768px) {
          .qaPlatformSection,
          .qaReadinessSection,
          .qaFaqSection {
            padding-top: 72px;
            padding-bottom: 72px;
          }

          .qaFinalSection {
            padding-top: 64px;
            padding-bottom: 72px;
          }

          .qaPlatformGrid,
          .qaReadinessGrid,
          .qaFaqColumns {
            margin-top: 44px;
          }

          .qaPlatformSummary {
            flex-direction: column;
          }

          .qaFaqSupport {
            align-items: flex-start;
          }

          .qaFinalCta {
            padding: 44px 38px;
          }
        }

        @media (max-width: 620px) {
          .qaPlatformSection h2,
          .qaReadinessSection h2,
          .qaFaqSection h2,
          .qaFinalCta h2 {
            font-size: 30px;
          }

          .qaPlatformIntro,
          .qaReadinessIntro,
          .qaFaqIntro,
          .qaFinalCta p {
            font-size: 18px;
          }

          .qaPlatformGrid,
          .qaReadinessGrid {
            grid-template-columns: 1fr;
          }

          .qaPlatformItem,
          .qaPlatformItem:nth-child(2n + 1),
          .qaPlatformItem:nth-child(3n + 1),
          .qaPlatformItem:nth-child(5n + 1) {
            padding: 24px 0 26px;
            border-left: 0;
          }

          .qaPlatformItem:nth-child(n + 2) {
            border-top: 1px solid var(--line);
          }

          .qaReadinessItem {
            grid-template-columns: 40px minmax(0, 1fr);
            gap: 14px;
          }

          .qaReadinessIcon {
            width: 40px;
            height: 40px;
            border-radius: 13px;
          }

          .qaReadinessLinks {
            align-items: flex-start;
          }

          .qaFaqItem summary {
            min-height: 72px;
            padding-right: 38px;
            font-size: 16px;
          }

          .qaFaqAnswer {
            padding-right: 28px;
          }

          .qaFaqSupport {
            padding: 24px;
          }

          .qaFinalCta {
            gap: 34px;
            padding: 36px 24px;
            border-radius: 24px;
          }

          .qaFinalActions {
            display: grid;
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 360px) {
          .qaPlatformIntro,
          .qaReadinessIntro,
          .qaFaqIntro,
          .qaFinalCta p {
            font-size: 17px;
          }

          .qaReadinessItem {
            grid-template-columns: 1fr;
          }
        }

      `}</style>

      <section className="qaHero" aria-labelledby="qa-hero-title">
        <div className="qaShell">
          <div className="qaHeroGrid">
            <div className="qaHeroCopy">
              <h1 id="qa-hero-title">Translation Quality Assurance for Enterprise Language Operations</h1>
              <p className="qaHeroLead">
                Build measurable quality into every stage of your translation workflow. Stepes connects automated
                translation QA, linguistic quality assessment, approved terminology, human review, workflow controls,
                and quality reporting in one enterprise platform.
              </p>
              <div className="qaHeroActions">
                <a className="qaButton qaButtonPrimary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                  <ArrowIcon />
                </a>
                <a className="qaButton qaButtonSecondary" href="https://www.stepes.com/ai-translation-platform/">
                  Explore the AI Translation Platform
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="qaHeroVisualWrap" aria-label="Translation quality review interface">
              <div className="qaWorkbench">
                <div className="qaWorkbenchTop">
                  <div className="qaWorkbenchTitle">
                    <strong>Product Instructions · Quality Review</strong>
                    <span>English to German (Germany)</span>
                  </div>
                  <span className="qaScorePill">Quality review active</span>
                </div>

                <div className="qaWorkbenchBody">
                  <div className="qaSegments">
                    <div className="qaColumnLabels">
                      <span>Source</span>
                      <span>German (Germany)</span>
                    </div>

                    <div className="qaSegment">
                      <div className="qaSegmentContent">
                        <div className="qaTextCell">Store between 2–8°C. Do not freeze.</div>
                        <div className="qaTextCell">Bei 2–8 °C lagern. Nicht einfrieren.</div>
                      </div>
                      <div className="qaSegmentFooter">
                        <span>Terminology matched</span>
                        <span>Numbers verified</span>
                        <span>Locale format checked</span>
                      </div>
                    </div>

                    <div className="qaSegment qaSegmentActive">
                      <div className="qaSegmentContent">
                        <div className="qaTextCell">Replace cartridge every 30 days.</div>
                        <div className="qaTextCell">Kartusche alle 30 Tage austauschen.</div>
                      </div>
                      <div className="qaSegmentFooter">
                        <span className="qaSegmentFlag">Terminology review</span>
                        <span>Preferred term available</span>
                      </div>
                    </div>

                    <div className="qaSegment">
                      <div className="qaSegmentContent">
                        <div className="qaTextCell">Confirm the device ID: {"{{device_id}}"}</div>
                        <div className="qaTextCell">Geräte-ID bestätigen: {"{{device_id}}"}</div>
                      </div>
                      <div className="qaSegmentFooter">
                        <span>Protected variable retained</span>
                        <span>Content complete</span>
                      </div>
                    </div>
                  </div>

                  <aside className="qaWorkbenchSide" aria-label="Quality review summary">
                    <p className="qaSideLabel">QA Summary</p>
                    <div className="qaMetric">
                      <strong>42</strong>
                      <span>Checks passed</span>
                    </div>
                    <div className="qaMetric">
                      <strong>2</strong>
                      <span>Items for review</span>
                    </div>
                    <div className="qaMetric">
                      <strong>0</strong>
                      <span>Critical issues</span>
                    </div>
                    <div className="qaReviewStatus">
                      <strong>Human review assigned</strong>
                      <span>Terminology owner and linguistic reviewer</span>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          <div className="qaTrustStrip" aria-label="Enterprise quality credentials">
            <div className="qaTrustInner">
              <div className="qaTrustItem">
                <strong>ISO 9001</strong>
                <span>Quality management</span>
              </div>
              <div className="qaTrustItem">
                <strong>ISO 17100</strong>
                <span>Translation services</span>
              </div>
              <div className="qaTrustItem">
                <strong>ISO 13485</strong>
                <span>Medical device quality</span>
              </div>
              <div className="qaTrustItem">
                <strong>100+ Languages</strong>
                <span>Global program coverage</span>
              </div>
              <div className="qaTrustItem">
                <strong>AI + Human Workflows</strong>
                <span>Risk-matched quality control</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="qaWorkflowSection" aria-labelledby="qa-workflow-title">
        <div className="qaShell">
          <div className="qaWorkflowHeader">
            <div>
              <span className="qaEyebrow qaEyebrowDark">Quality by Design</span>
              <h2 id="qa-workflow-title">Build Quality Into the Translation Workflow</h2>
            </div>
            <p className="qaWorkflowIntro">
              Translation quality should not depend on a final proofreading step. Stepes integrates quality controls
              throughout the content lifecycle so teams can detect issues earlier, reduce avoidable rework, and apply
              consistent standards across every language.
            </p>
          </div>

          <div className="qaWorkflowGrid">
            {WORKFLOW_STEPS.map((step) => (
              <article className="qaWorkflowStep" key={step.number}>
                <span className="qaStepNumber">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="qaChecksSection" aria-labelledby="qa-checks-title">
        <div className="qaShell">
          <div className="qaChecksHeader">
            <div>
              <span className="qaEyebrow">Automated Quality Controls</span>
              <h2 id="qa-checks-title">Automated Translation QA That Catches Preventable Errors</h2>
            </div>
            <p className="qaChecksIntro">
              Configurable QA checks help localization teams identify objective and repeatable issues at scale, while
              professional reviewers focus on meaning, context, tone, and subject-matter accuracy.
            </p>
          </div>

          <div className="qaChecksLayout">
            <div>
              <div className="qaChecksGrid">
                {QA_CHECKS.map((check) => (
                  <article className="qaCheckItem" key={check.title}>
                    <span className="qaCheckIcon">
                      <CheckIcon type={check.icon} />
                    </span>
                    <div>
                      <h3>{check.title}</h3>
                      <p>{check.text}</p>
                    </div>
                  </article>
                ))}
              </div>

              <a
                className="qaEditorialLink"
                href="https://www.stepes.com/terminology-management/"
              >
                Explore Terminology Management
                <ArrowIcon />
              </a>
            </div>

            <aside className="qaSummaryPanel" aria-label="Automated translation QA summary">
              <div className="qaSummaryTop">
                <span className="qaEyebrow">Quality Snapshot</span>
                <h3>Automated QA Readiness</h3>
                <div className="qaSummaryScore">
                  <strong>42 / 44</strong>
                  <span>quality checks passed</span>
                </div>
              </div>

              <div className="qaSummaryBody">
                <div className="qaSummaryRow qaSummaryRowPassed">
                  <StatusIcon status="passed" />
                  <strong>Numbers and units</strong>
                  <span>Passed</span>
                </div>
                <div className="qaSummaryRow qaSummaryRowPassed">
                  <StatusIcon status="passed" />
                  <strong>Protected variables</strong>
                  <span>Passed</span>
                </div>
                <div className="qaSummaryRow qaSummaryRowPassed">
                  <StatusIcon status="passed" />
                  <strong>Content completeness</strong>
                  <span>Passed</span>
                </div>
                <div className="qaSummaryRow qaSummaryRowReview">
                  <StatusIcon status="review" />
                  <strong>Approved terminology</strong>
                  <span>2 reviews</span>
                </div>
              </div>

              <p className="qaSummaryNote">
                Automated checks surface repeatable issues before final review so linguists can concentrate on the
                quality decisions that require professional judgment.
              </p>
            </aside>
          </div>
        </div>
      </section>


      <section className="qaLqaSection" aria-labelledby="qa-lqa-title">
        <div className="qaShell">
          <div className="qaLqaHeader">
            <span className="qaEyebrow">Structured Linguistic Evaluation</span>
            <h2 id="qa-lqa-title">Linguistic Quality Assessment and Custom Scorecards</h2>
            <p className="qaLqaIntro">
              Turn subjective review into a consistent, measurable quality process with defined evaluation dimensions,
              severity levels, weighted scoring, and acceptance thresholds tailored to your enterprise program.
            </p>
          </div>

          <div className="qaLqaLayout">
            <div className="qaLqaFeatureList">
              {LQA_FEATURES.map((feature) => (
                <article className="qaLqaFeature" key={feature.title}>
                  <h3>{feature.title}</h3>
                  <p>{feature.text}</p>
                </article>
              ))}
            </div>

            <aside className="qaScorecard" aria-label="Linguistic quality assessment scorecard">
              <div className="qaScorecardHeader">
                <div className="qaScorecardTitle">
                  <strong>Enterprise LQA Scorecard</strong>
                  <span>MQM-aligned quality model</span>
                </div>
                <span className="qaScorecardDecision">Pass with revisions</span>
              </div>

              <div className="qaScorecardOverview">
                <div className="qaScorecardStat">
                  <strong>96.2</strong>
                  <span>Weighted quality score</span>
                </div>
                <div className="qaScorecardStat">
                  <strong>0</strong>
                  <span>Critical errors</span>
                </div>
                <div className="qaScorecardStat">
                  <strong>7</strong>
                  <span>Total findings</span>
                </div>
              </div>

              <div className="qaScoreTable">
                {LQA_SCORE_ROWS.map((row) => (
                  <div className="qaScoreRow" key={row.label}>
                    <strong>{row.label}</strong>
                    <span className="qaScoreValue">{row.score}</span>
                    <span className="qaIssueCount">{row.issues}</span>
                  </div>
                ))}
              </div>

              <div className="qaScorecardFooter">
                <div className="qaSeverityLegend" aria-label="Error severity legend">
                  <span className="qaSeverityCritical"><i /> Critical</span>
                  <span className="qaSeverityMajor"><i /> Major</span>
                  <span className="qaSeverityMinor"><i /> Minor</span>
                </div>
                <span className="qaThreshold">Acceptance threshold: 95.0</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="qaAiSection" aria-labelledby="qa-ai-title">
        <div className="qaShell">
          <div className="qaAiHeader">
            <div>
              <span className="qaEyebrow qaEyebrowDark">AI Quality Validation</span>
              <h2 id="qa-ai-title">Validate AI-Generated Translations With Human Expertise</h2>
            </div>
            <p className="qaAiIntro">
              Fluent AI output is not always validated output. Stepes combines automated controls with professional
              linguistic review to identify subtle meaning shifts, unsupported terminology, omissions, contextual
              errors, and other risks before multilingual content is approved.
            </p>
          </div>

          <div className="qaAiFlow" aria-label="AI translation quality validation workflow">
            {AI_FLOW_STEPS.map((step, index) => (
              <article className="qaAiFlowStep" key={step.title}>
                <span className="qaAiStageLabel">Stage {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="qaAiValidationLayout">
            <div className="qaAiNarrative">
              <h3>Match Human Oversight to Content Risk</h3>
              <p>
                Apply streamlined validation to routine content while directing sensitive, high-impact, or
                context-dependent translations to the reviewers best qualified to make the final quality decision.
              </p>
              <div className="qaAiSignalList">
                <div className="qaAiSignal">Accuracy or completeness concerns detected during automated or sampled review</div>
                <div className="qaAiSignal">Approved terminology conflicts or ambiguous source-language meaning</div>
                <div className="qaAiSignal">Customer-facing, safety-related, legal, regulated, or brand-sensitive content</div>
                <div className="qaAiSignal">Software strings and short-form content that require product or visual context</div>
              </div>
              <a className="qaEditorialLink" href="https://www.stepes.com/ai-human-translation-workflow/">
                Explore AI + Human Translation Workflows
                <ArrowIcon />
              </a>
            </div>

            <aside className="qaAiReviewPanel" aria-label="AI translation review routing">
              <div className="qaAiReviewTop">
                <div>
                  <strong>AI Translation Validation Queue</strong>
                  <span>Risk-based review decisions across multilingual content</span>
                </div>
                <span className="qaAiQueueStatus">3 review paths</span>
              </div>

              <div className="qaAiReviewRows">
                {AI_REVIEW_ITEMS.map((item) => (
                  <div className="qaAiReviewRow" key={item.segment}>
                    <strong>{item.segment}</strong>
                    <span className="qaAiReviewFinding">{item.finding}</span>
                    <span className={`qaAiReviewStatus qaAiReviewStatus${item.tone.charAt(0).toUpperCase() + item.tone.slice(1)}`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="qaReviewSection" aria-labelledby="qa-review-title">
        <div className="qaShell">
          <div className="qaReviewHeader">
            <div>
              <span className="qaEyebrow">Governed Human Review</span>
              <h2 id="qa-review-title">Human Review and Controlled Approval Workflows</h2>
            </div>
            <p className="qaReviewIntro">
              Enterprise quality requires clear ownership, accountable decisions, and efficient collaboration. Stepes
              brings professional linguists and your internal stakeholders into a connected review process with defined
              roles, escalation paths, and approval authority.
            </p>
          </div>

          <div className="qaReviewLayout">
            <div className="qaReviewCapabilityList">
              {REVIEW_CAPABILITIES.map((capability) => (
                <article className="qaReviewCapability" key={capability.title}>
                  <h3>{capability.title}</h3>
                  <p>{capability.text}</p>
                </article>
              ))}
            </div>

            <aside className="qaApprovalPanel" aria-label="Controlled translation review workflow">
              <div className="qaApprovalTop">
                <div>
                  <strong>Product Documentation Review</strong>
                  <span>English to German · Controlled approval workflow</span>
                </div>
                <span className="qaApprovalProgress">Stage 2 of 4</span>
              </div>

              <div className="qaApprovalStages">
                {REVIEW_STAGES.map((stage) => (
                  <div className="qaApprovalStage" key={stage.title}>
                    <span className={`qaStageMarker qaStageMarker${stage.tone.charAt(0).toUpperCase() + stage.tone.slice(1)}`} aria-hidden="true" />
                    <div>
                      <h3>{stage.title}</h3>
                      <p>{stage.detail}</p>
                    </div>
                    <span className={`qaStageStatus qaStageStatus${stage.tone.charAt(0).toUpperCase() + stage.tone.slice(1)}`}>
                      {stage.status}
                    </span>
                  </div>
                ))}
              </div>

              <div className="qaReviewComment">
                <span className="qaCommentIcon" aria-hidden="true">?</span>
                <div>
                  <strong>Terminology decision required</strong>
                  <span>Confirm the approved German term before final in-country approval.</span>
                </div>
                <span className="qaCommentState">Assigned to terminology owner</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="qaAssetsSection" aria-labelledby="qa-assets-title">
        <div className="qaShell">
          <div className="qaAssetsHeader">
            <div>
              <span className="qaEyebrow">Continuous Quality Improvement</span>
              <h2 id="qa-assets-title">Connect Quality With Terminology and Translation Memory</h2>
            </div>
            <p className="qaAssetsIntro">
              Translation quality improves when every project builds on approved language assets. Stepes connects QA,
              human review, terminology management, and translation memory so validated corrections strengthen future
              multilingual content rather than remaining isolated in one project.
            </p>
          </div>

          <div className="qaAssetFlow" aria-label="Continuous language asset quality loop">
            {ASSET_FLOW_STEPS.map((step) => (
              <article className="qaAssetStep" key={step.title}>
                <span className="qaAssetStepLabel">{step.label}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div className="qaAssetLinks">
            <div className="qaAssetLinkBlock">
              <h3>Govern Approved Terminology</h3>
              <p>
                Apply preferred terms, product names, technical language, and prohibited variants across translators,
                AI workflows, reviewers, and content types.
              </p>
              <a className="qaEditorialLink" href="https://www.stepes.com/terminology-management/">
                Explore Terminology Management
                <ArrowIcon />
              </a>
            </div>

            <div className="qaAssetLinkBlock">
              <h3>Reuse Validated Translations</h3>
              <p>
                Preserve approved language decisions, improve consistency, and incorporate accepted corrections into
                translation memory for future projects.
              </p>
              <a className="qaEditorialLink" href="https://www.stepes.com/translation-memory/">
                Explore Translation Memory
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>


      <section className="qaContextSection" aria-labelledby="qa-context-title">
        <div className="qaShell">
          <div className="qaContextHeader">
            <div>
              <h2 id="qa-context-title">Validate Quality in the Final Content Experience</h2>
            </div>
            <p className="qaContextIntro">
              A translation may be linguistically correct in a bilingual file and still fail after it is integrated,
              formatted, published, or displayed. Stepes helps teams identify visual, functional, and contextual issues
              that isolated text review cannot reveal.
            </p>
          </div>

          <div className="qaContextLayout">
            <div className="qaContextGrid">
              {CONTEXT_EXPERIENCES.map((item) => (
                <article className="qaContextItem" key={item.title}>
                  <span className="qaContextIcon">
                    <ExperienceIcon type={item.icon} />
                  </span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="qaExperiencePanel" aria-label="In-context website quality review">
              <div className="qaExperienceTop">
                <div>
                  <strong>Localized Website Preview</strong>
                  <span>German · Product onboarding page</span>
                </div>
                <span className="qaExperienceStatus">2 findings</span>
              </div>

              <div className="qaExperiencePreview">
                <div className="qaBrowserFrame">
                  <div className="qaBrowserBar" aria-hidden="true">
                    <i /><i /><i />
                  </div>
                  <div className="qaBrowserContent">
                    <div className="qaBrowserNav" aria-hidden="true">
                      <span /><span /><span /><span />
                    </div>
                    <div className="qaBrowserMain">
                      <div className="qaPreviewHeading" aria-hidden="true" />
                      <div className="qaPreviewLine" aria-hidden="true" />
                      <div className="qaPreviewLine qaPreviewLineShort" aria-hidden="true" />
                      <div className="qaPreviewButton" aria-hidden="true" />
                      <div className="qaPreviewFlag">
                        <StatusIcon status="review" />
                        <div>
                          <strong>Button label exceeds the display width</strong>
                          <span>Review a shorter approved translation before release.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="qaExperienceFooter">
                <p>
                  Combine platform quality controls with professional linguistic testing and specialist review for the
                  content experiences that require it.
                </p>
                <a className="qaEditorialLink" href="https://www.stepes.com/translation-qa-services/">
                  Explore Translation QA Services
                  <ArrowIcon />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="qaRiskSection" aria-labelledby="qa-risk-title">
        <div className="qaShell">
          <div className="qaRiskHeader">
            <div>
              <span className="qaEyebrow">Risk-Based Quality Governance</span>
              <h2 id="qa-risk-title">Apply the Right Quality Gates to Every Content Type</h2>
            </div>
            <p className="qaRiskIntro">
              Not every translation requires the same level of review. Stepes helps enterprises align quality controls
              with the potential impact of an error, supporting faster delivery for routine content and additional
              safeguards for high-impact or compliance-sensitive materials.
            </p>
          </div>

          <div className="qaRiskMatrix" role="table" aria-label="Risk-based translation quality controls">
            <div className="qaRiskMatrixHeader" role="row">
              <span role="columnheader">Content Risk</span>
              <span role="columnheader">Quality Approach</span>
              <span role="columnheader">Typical Content</span>
              <span role="columnheader">Typical Controls</span>
            </div>

            {RISK_LEVELS.map((risk) => (
              <div className="qaRiskRow" role="row" key={risk.level}>
                <div className="qaRiskLevel" role="cell">
                  <span className="qaRiskIndicator" aria-hidden="true" />
                  <strong>{risk.level}</strong>
                </div>
                <div className="qaRiskSummary" role="cell">{risk.summary}</div>
                <div className="qaRiskExamples" role="cell">{risk.examples}</div>
                <div className="qaRiskControls" role="cell">
                  {risk.controls.map((control) => (
                    <span className="qaRiskControl" key={control}>{control}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="qaRiskNote">
            Quality workflows can be configured by language, market, content category, audience, business unit, or
            risk profile so that review effort is directed where professional judgment creates the greatest value.
          </p>
        </div>
      </section>

      <section className="qaReportingSection" aria-labelledby="qa-reporting-title">
        <div className="qaShell">
          <div className="qaReportingHeader">
            <div>
              <span className="qaEyebrow qaEyebrowDark">Program-Level Visibility</span>
              <h2 id="qa-reporting-title">Measure Translation Quality Across Your Global Program</h2>
            </div>
            <p className="qaReportingIntro">
              Move beyond individual corrections with reporting that shows where issues occur, how often they recur,
              and whether multilingual performance is improving across languages, projects, content types, and workflows.
            </p>
          </div>

          <div className="qaReportingLayout">
            <aside className="qaAnalyticsPanel" aria-label="Enterprise translation quality analytics dashboard">
              <div className="qaAnalyticsTop">
                <div>
                  <strong>Enterprise Quality Overview</strong>
                  <span>Quality performance across active language workflows</span>
                </div>
                <span className="qaAnalyticsPeriod">Program dashboard</span>
              </div>

              <div className="qaAnalyticsMetrics">
                {REPORTING_METRICS.map((metric) => (
                  <div className="qaAnalyticsMetric" key={metric.label}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                    <small>{metric.change}</small>
                  </div>
                ))}
              </div>

              <div className="qaAnalyticsBody">
                <div className="qaLanguageTable" aria-label="Quality performance by language">
                  {REPORTING_ROWS.map((row) => (
                    <div className="qaLanguageRow" key={row.language}>
                      <strong>{row.language}</strong>
                      <span>{row.score}</span>
                      <span>{row.acceptance}</span>
                      <svg
                        className={`qaTrendIcon ${row.trend === "review" ? "qaTrendIconReview" : ""}`}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        {row.trend === "up" ? (
                          <path d="M3 11 7 7l2.5 2.5L13 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        ) : row.trend === "steady" ? (
                          <path d="M3 8h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        ) : (
                          <path d="M8 3.2 14 13H2L8 3.2Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
                        )}
                      </svg>
                    </div>
                  ))}
                </div>

                <div className="qaIssueChart" aria-label="Quality findings by category">
                  <p className="qaIssueChartLabel">Findings by Category</p>
                  {[
                    ["Terminology", "38%"],
                    ["Accuracy", "29%"],
                    ["Style", "20%"],
                    ["Formatting", "13%"],
                  ].map(([label, share]) => (
                    <div className="qaIssueBar" key={label}>
                      <div className="qaIssueBarTop"><span>{label}</span><span>{share}</span></div>
                      <div className="qaIssueBarTrack"><div className="qaIssueBarFill" style={{ width: share }} /></div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            <div className="qaReportingBenefits">
              <article className="qaReportingBenefit">
                <h3>Compare Quality by Language and Content</h3>
                <p>Review quality scores, error severity, acceptance rates, and rework across markets, projects, and content categories.</p>
              </article>
              <article className="qaReportingBenefit">
                <h3>Identify Recurring Root Causes</h3>
                <p>Use terminology findings, reviewer comments, and repeated error patterns to improve instructions, language assets, and source content.</p>
              </article>
              <article className="qaReportingBenefit">
                <h3>Monitor Trends Over Time</h3>
                <p>Understand whether quality performance, first-pass acceptance, and corrective actions are improving across successive projects.</p>
              </article>
              <article className="qaReportingBenefit">
                <h3>Strengthen Program Governance</h3>
                <p>Give localization leaders and enterprise stakeholders a clearer view of quality thresholds, exceptions, and program-level priorities.</p>
              </article>
              <a className="qaEditorialLink" href="https://www.stepes.com/enterprise-translation-management/">
                Explore Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="qaTeamsSection" aria-labelledby="qa-teams-title">
        <div className="qaShell">
          <div className="qaTeamsHeader">
            <div>
              <span className="qaEyebrow">Enterprise Quality at Scale</span>
              <h2 id="qa-teams-title">Support Quality Across Teams and Content</h2>
            </div>
            <p className="qaTeamsIntro">
              Translation quality requirements differ across departments, audiences, and content experiences. Stepes
              enables teams to apply shared enterprise standards while adapting workflows to their specific responsibilities.
            </p>
          </div>

          <div className="qaTeamsGrid">
            {ENTERPRISE_TEAMS.map((team) => (
              <article className="qaTeamItem" key={team.title}>
                <span className="qaTeamIcon">
                  <TeamIcon type={team.icon} />
                </span>
                <div>
                  <h3>{team.title}</h3>
                  <p>{team.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="qaTeamsSummary">
            <div>
              <h3>One Quality Framework, Adapted to Every Team</h3>
              <p>
                Connect shared terminology, quality models, review roles, language assets, and reporting without forcing
                every department into the same translation workflow.
              </p>
            </div>
            <a className="qaButton qaButtonPrimary" href="https://www.stepes.com/contact-us/">
              Talk to an Expert
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>


      <section className="qaPlatformSection" aria-labelledby="qa-platform-title">
        <div className="qaShell">
          <div className="qaPlatformHeader">
            <div>
              <span className="qaEyebrow">Connected Stepes Platform</span>
              <h2 id="qa-platform-title">Make Quality Part of Every Language Operation</h2>
            </div>
            <p className="qaPlatformIntro">
              Translation Quality Assurance connects with the broader Stepes platform so quality controls, language
              assets, automation, review, approvals, security, and reporting work together rather than as isolated steps.
            </p>
          </div>

          <div className="qaPlatformGrid">
            {PLATFORM_CAPABILITIES.map((capability) => (
              <article className="qaPlatformItem" key={capability.title}>
                <small>{capability.category}</small>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <a className="qaEditorialLink" href={capability.href}>
                  Explore {capability.title}
                  <ArrowIcon />
                </a>
              </article>
            ))}
          </div>

          <div className="qaPlatformSummary">
            <p>
              Together, these capabilities help enterprises manage translation quality as an integrated part of global
              content operations—not as a disconnected final inspection.
            </p>
            <a className="qaButton qaButtonSecondary" href="https://www.stepes.com/ai-translation-platform/">
              Explore the Stepes Platform
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="qaReadinessSection" aria-labelledby="qa-readiness-title">
        <div className="qaShell">
          <div className="qaReadinessHeader">
            <div>
              <span className="qaEyebrow">Enterprise Quality Foundation</span>
              <h2 id="qa-readiness-title">Quality, Security, and Operational Readiness</h2>
            </div>
            <p className="qaReadinessIntro">
              Translation quality depends on qualified people, repeatable processes, secure technology, governed
              language assets, and continuous improvement. Stepes brings these elements together to support dependable
              enterprise language operations.
            </p>
          </div>

          <div className="qaReadinessGrid">
            {READINESS_ITEMS.map((item) => (
              <article className="qaReadinessItem" key={item.title}>
                <span className="qaReadinessIcon">
                  <ReadinessIcon type={item.icon} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="qaReadinessLinks" aria-label="Related quality and trust resources">
            <span>Explore related quality resources:</span>
            <a className="qaEditorialLink" href="https://www.stepes.com/translation-quality-system/">
              Translation Quality System <ArrowIcon />
            </a>
            <a className="qaEditorialLink" href="https://www.stepes.com/iso-certified-translation-services/">
              ISO Certifications <ArrowIcon />
            </a>
            <a className="qaEditorialLink" href="https://www.stepes.com/security-and-compliance/">
              Security &amp; Compliance <ArrowIcon />
            </a>
            <a className="qaEditorialLink" href="https://www.stepes.com/resources/translation-quality/">
              Translation Quality &amp; Governance <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="qaFaqSection" aria-labelledby="qa-faq-title">
        <div className="qaShell">
          <div className="qaFaqHeader">
            <div>
              <h2 id="qa-faq-title">Common Questions About Enterprise Translation Quality</h2>
            </div>
            <p className="qaFaqIntro">
              Learn how automated QA, linguistic quality assessment, human review, terminology, translation memory,
              risk-based workflows, and quality reporting work together across an enterprise translation program.
            </p>
          </div>

          <div className="qaFaqColumns">
            {[FAQS.slice(0, 7), FAQS.slice(7)].map((column, columnIndex) => (
              <div className="qaFaqColumn" key={`faq-column-${columnIndex + 1}`}>
                {column.map((faq, itemIndex) => (
                  <details className="qaFaqItem" key={faq.question} open={columnIndex === 0 && itemIndex === 0}>
                    <summary>{faq.question}</summary>
                    <div className="qaFaqAnswer"><p>{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            ))}
          </div>

          <div className="qaFaqSupport">
            <p>
              Need an independent bilingual review, third-party translation assessment, in-context testing, or
              specialist validation? Stepes professional QA services can be integrated into your platform workflow.
            </p>
            <a className="qaEditorialLink" href="https://www.stepes.com/translation-qa-services/">
              Explore Translation QA Services
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section className="qaFinalSection" aria-labelledby="qa-final-title">
        <div className="qaShell">
          <div className="qaFinalCta">
            <div className="qaFinalCopy">
              <span className="qaEyebrow">Enterprise Translation Quality</span>
              <h2 id="qa-final-title">Build Measurable Quality Into Every Translation Workflow</h2>
              <p>
                Connect automated QA, approved terminology, translation memory, structured linguistic evaluation,
                human expertise, controlled approvals, and quality reporting across your enterprise language operations.
              </p>
              <div className="qaFinalActions">
                <a className="qaButton qaButtonPrimary" href="https://www.stepes.com/contact-us/">
                  Talk to an Expert
                  <ArrowIcon />
                </a>
                <a className="qaButton qaButtonSecondary" href="https://www.stepes.com/ai-translation-platform/">
                  Explore the Stepes Platform
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="qaFinalProof" aria-label="Connected translation quality controls">
              {[
                ["Automated Quality Checks", "Identify repeatable issues before content reaches final review."],
                ["Human Linguistic Validation", "Apply professional judgment to meaning, context, tone, and risk."],
                ["Governed Language Assets", "Strengthen consistency with approved terminology and translation memory."],
                ["Measurable Quality Reporting", "Track scores, findings, acceptance, and improvement across your program."],
              ].map(([title, text]) => (
                <div className="qaFinalProofItem" key={title}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
                    <path d="m8 12 2.5 2.5L16.5 8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
