import React from "react";

const qualityTopics = [
  {
    title: "Translation Quality Management",
    description:
      "Define requirements, quality levels, responsibilities, workflows, and acceptance criteria across the translation lifecycle.",
    href: "https://www.stepes.com/resources/translation-quality-management/",
    featured: true,
  },
  {
    title: "Linguistic Quality Assurance",
    description:
      "Evaluate accuracy, fluency, terminology, style, completeness, and locale conventions through structured review.",
    href: "https://www.stepes.com/resources/linguistic-quality-assurance/",
    icon: "check",
  },
  {
    title: "Terminology & Style Governance",
    description:
      "Manage approved terminology, style guides, product language, brand voice, and multilingual language assets.",
    href: "https://www.stepes.com/resources/terminology-governance/",
    icon: "terms",
  },
  {
    title: "Human Review & Approval",
    description:
      "Design effective translator, editor, subject-matter expert, in-country reviewer, and final-approval workflows.",
    href: "https://www.stepes.com/resources/human-translation-review/",
    icon: "people",
  },
  {
    title: "AI Translation Quality",
    description:
      "Test AI output, identify risks, route content for human validation, and monitor quality over time.",
    href: "https://www.stepes.com/resources/ai-translation-quality/",
    icon: "ai",
  },
  {
    title: "Standards & Frameworks",
    description:
      "Understand ISO standards, MQM, evaluation methodologies, sampling, and quality specifications.",
    href: "https://www.stepes.com/resources/translation-quality-standards/",
    icon: "standards",
  },
  {
    title: "Metrics & Continuous Improvement",
    description:
      "Track error patterns, quality scores, reviewer feedback, corrective actions, and program-level performance.",
    href: "https://www.stepes.com/resources/translation-quality-metrics/",
    icon: "metrics",
  },
];

const qualityPrinciples = [
  {
    title: "Fit for Purpose",
    description:
      "Quality requirements should reflect the content, audience, business risk, and consequences of an error—not a single universal workflow.",
    icon: "target",
  },
  {
    title: "More Than Accuracy",
    description:
      "Strong multilingual content also depends on terminology, tone, completeness, readability, cultural suitability, formatting, and function.",
    icon: "layers",
  },
  {
    title: "Governed for Consistency",
    description:
      "Clear ownership, approval rights, language-asset controls, reviewer roles, and escalation paths make quality repeatable at scale.",
    icon: "governance",
  },
];

const lifecycle = ["Define", "Prepare", "Produce", "Evaluate", "Approve", "Improve"];

const qualityFramework = [
  {
    step: "01",
    title: "Define",
    description:
      "Clarify the content purpose, audience, language requirements, business risk, quality expectations, and acceptance criteria before translation begins.",
  },
  {
    step: "02",
    title: "Prepare",
    description:
      "Organize approved terminology, translation memory, style guidance, reference materials, and source-content instructions for consistent execution.",
  },
  {
    step: "03",
    title: "Produce",
    description:
      "Select the right combination of professional translation, AI assistance, post-editing, specialist expertise, and workflow automation.",
  },
  {
    step: "04",
    title: "Evaluate",
    description:
      "Apply linguistic review, automated QA, terminology checks, completeness checks, functional testing, and in-context validation as appropriate.",
  },
  {
    step: "05",
    title: "Approve",
    description:
      "Define who can accept, reject, revise, or escalate translated content and document the decisions required for release.",
  },
  {
    step: "06",
    title: "Improve",
    description:
      "Turn corrections, reviewer decisions, terminology updates, and recurring findings into better language assets and future performance.",
  },
];

const measurementDimensions = [
  "Accuracy and preservation of meaning",
  "Completeness and omissions",
  "Terminology consistency",
  "Fluency and readability",
  "Grammar and language conventions",
  "Tone and style",
  "Locale and cultural appropriateness",
  "Numbers, dates, units, and names",
  "Formatting and file integrity",
  "Functional and in-context performance",
];

const evaluationMethods = [
  {
    title: "Error Categories & Severity",
    description:
      "Group findings by type and assign severity according to their impact. Critical, major, and minor classifications should reflect business and user consequences—not personal preference.",
  },
  {
    title: "Sampling or Full Review",
    description:
      "Use representative sampling when it provides dependable evidence, and require full review when content risk, regulatory obligations, or release consequences demand it.",
  },
  {
    title: "Scores, Thresholds & Trends",
    description:
      "Agree on scoring rules and acceptance thresholds before evaluation. Track recurring error patterns and performance over time instead of treating one score as the complete quality story.",
  },
];

const lqaExamples = [
  {
    category: "Accuracy",
    severity: "Major",
    finding: "Meaning partially changed",
    action: "Correct the segment and review similar content",
  },
  {
    category: "Terminology",
    severity: "Minor",
    finding: "Approved term not used",
    action: "Update the translation and reinforce the glossary",
  },
  {
    category: "Completeness",
    severity: "Critical",
    finding: "Safety instruction omitted",
    action: "Stop release and perform a complete review",
  },
  {
    category: "Style",
    severity: "Minor",
    finding: "Tone conflicts with the style guide",
    action: "Revise the content and update reviewer guidance",
  },
];

const governanceRows = [
  {
    area: "Quality Requirements",
    decision: "What level of quality, evidence, and review does the content require?",
    role: "Content or program owner",
  },
  {
    area: "Terminology",
    decision: "Which multilingual terms are approved, changed, restricted, or retired?",
    role: "Terminology owner or subject-matter expert",
  },
  {
    area: "Reviewer Roles",
    decision: "Which decisions belong to linguists, specialists, regional teams, or brand owners?",
    role: "Localization or quality lead",
  },
  {
    area: "Approval Authority",
    decision: "Who can approve release, request revision, or escalate an unresolved issue?",
    role: "Authorized business owner",
  },
  {
    area: "Language Assets",
    decision: "How are glossaries, translation memories, style guides, and references maintained?",
    role: "Language-asset owner",
  },
  {
    area: "Exceptions & Escalation",
    decision: "How are market-specific exceptions, disagreements, and recurring issues resolved?",
    role: "Program owner with regional stakeholders",
  },
  {
    area: "Quality Accountability",
    decision: "Which records, metrics, corrective actions, and follow-up reviews are required?",
    role: "Localization or quality lead",
  },
];

const riskLevels = [
  {
    level: "Lower Risk",
    examples: "Internal knowledge, working drafts, and high-volume support content",
    controls:
      "AI-assisted translation, automated QA, terminology controls, and selective human sampling",
  },
  {
    level: "Moderate Risk",
    examples: "Product information, training materials, and general website content",
    controls:
      "Professional review, glossary enforcement, formatting checks, and in-context validation where needed",
  },
  {
    level: "High Risk",
    examples: "Contracts, safety information, brand campaigns, and public financial content",
    controls:
      "Specialist translators, independent revision, subject-matter review, and controlled approval",
  },
  {
    level: "Regulated or Critical",
    examples: "Medical labeling, clinical content, regulatory submissions, and critical legal documentation",
    controls:
      "Documented workflows, qualified specialists, traceability, stringent review, and final authorization",
  },
];

const aiGovernanceControls = [
  {
    title: "Representative Evaluation",
    description:
      "Test AI translation with real content, relevant language pairs, difficult terminology, and representative use cases—not generic sample sentences alone.",
  },
  {
    title: "Source and Context Quality",
    description:
      "Provide clear source content, product context, audience information, and instructions so the system has the information needed to preserve meaning.",
  },
  {
    title: "Language-Asset Controls",
    description:
      "Apply approved terminology, translation memory, style guidance, product names, and do-not-translate rules to improve consistency.",
  },
  {
    title: "Risk-Based Human Routing",
    description:
      "Determine which output can proceed with automated checks, which requires professional review, and which needs specialist or regulated approval.",
  },
  {
    title: "AI-Specific Error Detection",
    description:
      "Check for omissions, additions, unsupported interpretations, inconsistent terminology, factual distortion, and fluent output that masks meaning errors.",
  },
  {
    title: "Ongoing Monitoring",
    description:
      "Reassess quality as models, prompts, source content, terminology, and business requirements change over time.",
  },
];

const qualityStandards = [
  {
    code: "ISO 17100",
    title: "Requirements for Translation Services",
    description:
      "Defines requirements for the core processes, resources, and other aspects needed to deliver translation services that meet applicable specifications.",
  },
  {
    code: "ISO 5060:2024",
    title: "Evaluation of Translation Output",
    description:
      "Provides guidance for evaluating human translation, post-edited machine translation, and unedited machine translation, including evaluator competence, sampling, error types, penalty points, scores, and quality ratings.",
  },
  {
    code: "ISO 18587",
    title: "Full Human Post-Editing of Machine Translation",
    description:
      "Sets requirements for the process of full human post-editing of machine translation output and for the competencies of post-editors.",
  },
  {
    code: "MQM",
    title: "Multidimensional Quality Metrics",
    description:
      "Offers an analytic evaluation framework with configurable error categories and severity levels for human, machine, and AI-generated translation.",
  },

];

const featuredQualityGuide = {
  label: "Enterprise Guide",
  title: "Translation Quality Management: A Practical Enterprise Guide",
  description:
    "Build a complete quality framework around requirements, ownership, language assets, workflow design, evaluation, approval, and continuous improvement.",
  topics: ["Quality requirements", "Workflow governance", "Measurement", "Continuous improvement"],
  href: "https://www.stepes.com/resources/translation-quality-management/",
};

const supportingQualityGuides = [
  {
    label: "Linguistic Quality Assurance",
    title: "LQA Methods, Metrics, and Scorecards",
    description:
      "Understand error categories, severity, sampling, scoring, acceptance thresholds, and corrective action.",
    href: "https://www.stepes.com/resources/linguistic-quality-assurance/",
  },
  {
    label: "MQM",
    title: "How to Measure Translation Quality With MQM",
    description:
      "Apply configurable error typologies and severity levels without treating one score as the entire quality story.",
    href: "https://www.stepes.com/resources/mqm-translation-quality/",
  },
  {
    label: "Quality Operations",
    title: "Translation Quality Assurance vs. Quality Control",
    description:
      "Clarify how planning, process assurance, linguistic evaluation, final inspection, and release control work together.",
    href: "https://www.stepes.com/resources/translation-quality-assurance-vs-quality-control/",
  },
  {
    label: "Terminology Governance",
    title: "Terminology Governance for Global Organizations",
    description:
      "Create ownership, approval, versioning, market input, and change-control processes for multilingual terminology.",
    href: "https://www.stepes.com/resources/terminology-governance/",
  },
  {
    label: "AI + Human Review",
    title: "Human Review Models for AI-Assisted Translation",
    description:
      "Match post-editing, validation, sampling, specialist review, and escalation to content risk and intended use.",
    href: "https://www.stepes.com/resources/human-review-ai-translation/",
  },
];

const qualityTools = [
  {
    type: "Template",
    title: "Translation Quality Requirements Brief",
    description:
      "Document content purpose, audience, languages, risk, workflow, reviewers, evidence, and acceptance criteria before work begins.",
    href: "https://www.stepes.com/resources/translation-quality-requirements-template/",
    icon: "framework",
  },
  {
    type: "Template",
    title: "LQA Scorecard",
    description:
      "Structure error categories, severity, weighting, reviewer comments, corrective actions, and final disposition.",
    href: "https://www.stepes.com/resources/lqa-scorecard-template/",
    icon: "metrics",
  },
  {
    type: "Worksheet",
    title: "Translation Risk-Assessment Matrix",
    description:
      "Match content purpose and business consequences to translation methods, review depth, and approval controls.",
    href: "https://www.stepes.com/resources/translation-risk-assessment-matrix/",
    icon: "target",
  },
  {
    type: "Template",
    title: "Reviewer Feedback Form",
    description:
      "Separate objective errors, terminology decisions, style preferences, and market-specific changes for clearer resolution.",
    href: "https://www.stepes.com/resources/translation-reviewer-feedback-template/",
    icon: "people",
  },
  {
    type: "Checklist",
    title: "Terminology Governance Checklist",
    description:
      "Define term ownership, approval states, version control, language coverage, change history, and stakeholder responsibilities.",
    href: "https://www.stepes.com/resources/terminology-governance-checklist/",
    icon: "terms",
  },
  {
    type: "Template",
    title: "Multilingual Style Guide",
    description:
      "Align tone, grammar, punctuation, units, product names, brand conventions, locale guidance, and approved examples.",
    href: "https://www.stepes.com/resources/multilingual-style-guide-template/",
    icon: "layers",
  },
];

const qualityPracticeScenarios = [
  {
    label: "Global Product Content",
    title: "Govern Terminology Across Products and Markets",
    context:
      "Product teams, regional stakeholders, and content owners need consistent naming across software, documentation, support, and marketing.",
    risk:
      "Uncontrolled terminology can create contradictory customer experiences, repeated corrections, and reviewer disputes.",
    controls:
      "Use a centralized termbase, documented ownership, approval states, market consultation, translation-memory updates, and controlled change history.",
    evidence:
      "Approved terms, decision records, version history, exception logs, and recurring terminology reports show how language decisions are governed.",
  },
  {
    label: "Regulated Content",
    title: "Create Traceable Review for Medical and Regulatory Translation",
    context:
      "Patient-facing, labeling, clinical, and regulatory content requires qualified expertise, controlled review, and documented authorization.",
    risk:
      "Omissions, ambiguous safety language, or inconsistent terminology can affect understanding, delay approval, or create compliance concerns.",
    controls:
      "Classify content risk, assign qualified linguists, use independent review and subject-matter input, control revisions, and define final approval authority.",
    evidence:
      "Review records, issue resolution, language-asset updates, version history, and documented approval provide traceability before release.",
  },
  {
    label: "Software Localization",
    title: "Validate Language in the Product Experience",
    context:
      "Interface strings, help content, release notes, and product terminology must work together across languages and product states.",
    risk:
      "Text can be linguistically correct yet fail in context through truncation, broken variables, tag errors, or inconsistent product language.",
    controls:
      "Combine context-rich translation, terminology checks, automated QA, pseudo-localization, and in-product linguistic and functional validation.",
    evidence:
      "Resolved QA findings, in-context review records, approved screenshots, release decisions, and updated language assets support repeatable releases.",
  },
];


const qualitySupportGroups = [
  {
    title: "Quality Systems & Trust",
    description:
      "Connect translation quality requirements with documented processes, recognized standards, security controls, and organizational accountability.",
    links: [
      {
        title: "Explore the Stepes Translation Quality System",
        description:
          "See how requirements, qualified linguists, review, QA, documentation, and continuous improvement work together.",
        href: "https://www.stepes.com/translation-quality-system/",
      },
      {
        title: "Review Stepes ISO Certifications",
        description:
          "Understand the standards and quality-management practices that support dependable multilingual delivery.",
        href: "https://www.stepes.com/iso-certified-translation-services/",
      },
      {
        title: "Learn About Enterprise Security",
        description:
          "Explore how secure workflows, access controls, and data-handling practices support trusted translation operations.",
        href: "https://www.stepes.com/security/",
      },
    ],
  },
  {
    title: "Technology & Language Assets",
    description:
      "Use quality technology and governed language assets to improve consistency, reduce preventable errors, and preserve approved decisions.",
    links: [
      {
        title: "Automate Translation Quality Assurance",
        description:
          "Apply automated checks for terminology, numbers, tags, formatting, completeness, and other detectable issues.",
        href: "https://www.stepes.com/translation-quality-assurance/",
      },
      {
        title: "Govern Multilingual Terminology",
        description:
          "Create approved terminology, ownership, version control, and change-management processes across languages.",
        href: "https://www.stepes.com/terminology-management/",
      },
      {
        title: "Reuse Approved Translation Memory",
        description:
          "Preserve validated translations and improve consistency across recurring content, teams, and releases.",
        href: "https://www.stepes.com/translation-memory/",
      },
    ],
  },
  {
    title: "Workflows & Operations",
    description:
      "Match people, technology, review depth, and governance controls to the purpose and risk of your multilingual content.",
    links: [
      {
        title: "Combine AI Translation With Human Review",
        description:
          "Route multilingual content through the right mix of AI assistance, professional validation, and specialist approval.",
        href: "https://www.stepes.com/ai-human-translation-workflow/",
      },
      {
        title: "Manage Enterprise Translation Programs",
        description:
          "Coordinate multilingual requests, assets, workflows, approvals, reporting, and stakeholder responsibilities at scale.",
        href: "https://www.stepes.com/enterprise-translation-management/",
      },
      {
        title: "Explore Professional Translation QA Services",
        description:
          "Use qualified linguistic review and structured quality evaluation for business-critical multilingual content.",
        href: "https://www.stepes.com/translation-qa-services/",
      },
    ],
  },
];

const translationQualityFaqs = [
  {
    question: "What is translation quality?",
    answer:
      "Translation quality is the degree to which multilingual content fulfills its intended purpose. It can include accuracy, completeness, terminology, fluency, tone, cultural suitability, formatting, functionality, and compliance with agreed requirements.",
  },
  {
    question: "What is translation quality management?",
    answer:
      "Translation quality management is the coordinated process of defining requirements, preparing language assets, selecting workflows, evaluating output, approving content, documenting decisions, and improving future performance. It treats quality as a lifecycle rather than a final proofreading step.",
  },
  {
    question: "What is translation quality governance?",
    answer:
      "Translation quality governance defines who owns requirements, terminology, language assets, review decisions, approvals, exceptions, and corrective actions. Clear decision rights help organizations maintain consistent standards while allowing qualified local and subject-matter judgment.",
  },
  {
    question: "What is linguistic quality assurance?",
    answer:
      "Linguistic quality assurance, or LQA, is the structured evaluation of translated content against defined criteria. Reviewers may classify issues by category and severity, document findings, calculate scores where appropriate, and connect corrections to terminology, workflow, or training improvements.",
  },
  {
    question: "What is the difference between translation QA and quality control?",
    answer:
      "Quality assurance focuses on the processes and controls designed to prevent quality problems, such as requirements, qualified resources, terminology, workflow rules, and automated checks. Quality control focuses more directly on inspecting or evaluating the translated output before release.",
  },
  {
    question: "How is translation quality measured?",
    answer:
      "Translation quality can be measured through error categories, severity levels, weighted scores, error density, sampling, pass-or-fail thresholds, reviewer findings, functional checks, and trend analysis. The method should reflect the content, audience, business risk, and purpose of the evaluation.",
  },
  {
    question: "What is an MQM score?",
    answer:
      "An MQM score is derived from a configured Multidimensional Quality Metrics evaluation using selected error categories, severity levels, weights, and a defined sample. Because MQM is configurable, the score is meaningful only when the typology, weighting, sample, and acceptance threshold are clearly documented.",
  },
  {
    question: "Can automated metrics replace human translation evaluation?",
    answer:
      "Automated checks can efficiently identify missing content, number inconsistencies, terminology mismatches, tag problems, formatting issues, and other detectable patterns. Qualified human evaluation remains essential for meaning, context, tone, ambiguity, cultural suitability, and nuanced business or regulatory risk.",
  },
  {
    question: "How should organizations evaluate AI translation quality?",
    answer:
      "Evaluate AI translation with representative content, relevant language pairs, difficult terminology, realistic context, and defined acceptance criteria. Combine automated QA with human review, analyze AI-specific risks such as omissions or unsupported interpretations, and continue monitoring as models, prompts, content, and requirements change.",
  },
  {
    question: "Does every translation require human review?",
    answer:
      "Not every translation requires the same review depth. The appropriate level of human oversight depends on the intended use, audience, content risk, quality expectations, contractual commitments, and regulatory requirements. High-risk and regulated content typically requires more stringent review and approval.",
  },
  {
    question: "How can translation quality be maintained across many languages?",
    answer:
      "Use shared requirements, qualified language professionals, governed terminology, translation memory, style guidance, clear reviewer roles, automated checks, local-market expertise, and consistent performance reporting. Central governance should create alignment without preventing justified language- or market-specific decisions.",
  },
  {
    question: "Who should approve multilingual terminology?",
    answer:
      "Terminology approval usually involves language specialists, subject-matter experts, product or content owners, brand teams, and legal or compliance stakeholders where relevant. A designated terminology owner should document the final decision, approved status, language coverage, and future changes.",
  },
  {
    question: "How should in-country reviewer feedback be managed?",
    answer:
      "Give reviewers clear instructions and distinguish objective errors from terminology decisions, style preferences, source-content questions, and market-specific changes. Document decision rights, resolve conflicts through an agreed escalation path, and update approved language assets so validated feedback improves future content.",
  },
  {
    question: "What is the difference between ISO 17100, ISO 5060, and ISO 18587?",
    answer:
      "ISO 17100 addresses requirements for translation services, resources, and processes. ISO 5060 provides guidance for evaluating human translation, post-edited machine translation, and unedited machine translation output. ISO 18587 addresses full human post-editing of machine translation and the competencies expected of post-editors.",
  },
];


function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path d="M3.75 9H14.25" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M10.25 5L14.25 9L10.25 13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineIcon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    framework: (
      <svg {...common}>
        <rect x="3.5" y="4" width="7" height="6" rx="1.4" />
        <rect x="13.5" y="4" width="7" height="6" rx="1.4" />
        <rect x="8.5" y="14" width="7" height="6" rx="1.4" />
        <path d="M7 10V12H17V10" />
        <path d="M12 12V14" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="M8 4.5H6.5A2.5 2.5 0 0 0 4 7v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2.5 2.5 0 0 0-2.5-2.5H16" />
        <path d="M9 4.5a3 3 0 0 1 6 0v1H9v-1Z" />
        <path d="m8 13 2.5 2.5L16 10" />
      </svg>
    ),
    terms: (
      <svg {...common}>
        <path d="M5 5.5h14" />
        <path d="M8 5.5v13" />
        <path d="M5 18.5h6" />
        <path d="M14 10.5h5" />
        <path d="M14 14.5h4" />
        <path d="M14 18.5h5" />
      </svg>
    ),
    people: (
      <svg {...common}>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.6-3.4 2.4-5 5.5-5s4.9 1.6 5.5 5" />
        <circle cx="17" cy="9" r="2.2" />
        <path d="M15.5 14.5c2.9-.3 4.6 1.2 5 4.5" />
      </svg>
    ),
    ai: (
      <svg {...common}>
        <rect x="5" y="5" width="14" height="14" rx="3" />
        <path d="M9 9.5h.01" />
        <path d="M15 9.5h.01" />
        <path d="M9 14c1.9 1.5 4.1 1.5 6 0" />
        <path d="M9 2v3" />
        <path d="M15 2v3" />
        <path d="M2 9h3" />
        <path d="M19 9h3" />
      </svg>
    ),
    standards: (
      <svg {...common}>
        <path d="M12 3.5 19 7v5c0 4.2-2.5 7-7 8.5C7.5 19 5 16.2 5 12V7l7-3.5Z" />
        <path d="m8.5 12 2.2 2.2 4.8-5" />
      </svg>
    ),
    metrics: (
      <svg {...common}>
        <path d="M4 19.5V5" />
        <path d="M4 19.5h16" />
        <path d="m7 15 3-3 3 2 5-6" />
        <circle cx="7" cy="15" r=".9" fill="currentColor" stroke="none" />
        <circle cx="10" cy="12" r=".9" fill="currentColor" stroke="none" />
        <circle cx="13" cy="14" r=".9" fill="currentColor" stroke="none" />
        <circle cx="18" cy="8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
    target: (
      <svg {...common}>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m14.8 9.2 4.5-4.5" />
        <path d="M16.5 4.7h2.8v2.8" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3.5 8 4.5-8 4.5L4 8l8-4.5Z" />
        <path d="m4 12 8 4.5 8-4.5" />
        <path d="m4 16 8 4.5 8-4.5" />
      </svg>
    ),
    governance: (
      <svg {...common}>
        <circle cx="12" cy="6" r="2.5" />
        <circle cx="6" cy="17" r="2.5" />
        <circle cx="18" cy="17" r="2.5" />
        <path d="M10.8 8.2 7.2 14.8" />
        <path d="m13.2 8.2 3.6 6.6" />
        <path d="M8.5 17h7" />
      </svg>
    ),
  };

  return icons[name] || icons.framework;
}

export default function TranslationQualityGovernanceHub() {
  return (
    <main className="tqg-page">
      <style>{`
        .tqg-page {
          --tqg-ink: #101828;
          --tqg-body: #445166;
          --tqg-muted: #66758c;
          --tqg-border: #e4e9f0;
          --tqg-soft-border: #eef1f5;
          --tqg-surface: #f7f9fc;
          --tqg-accent: #c11d63;
          --tqg-accent-dark: #9f1d55;
          --tqg-accent-soft: #fdf2f7;
          --tqg-white: #ffffff;
          width: 100%;
          overflow-x: clip;
          background: var(--tqg-white);
          color: var(--tqg-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .tqg-page,
        .tqg-page *,
        .tqg-page *::before,
        .tqg-page *::after {
          box-sizing: border-box;
        }

        .tqg-page h1,
        .tqg-page h2,
        .tqg-page h3,
        .tqg-page p,
        .tqg-page li,
        .tqg-page a,
        .tqg-page span {
          overflow-wrap: break-word;
        }

        .tqg-page img,
        .tqg-page svg {
          max-width: 100%;
        }

        .tqg-page [class*="__content"],
        .tqg-page [class*="__copy"],
        .tqg-page [class*="__intro"],
        .tqg-page [class*="__title"] {
          min-width: 0;
        }

        .tqg-page section[id] {
          scroll-margin-top: 28px;
        }

        .tqg-page a {
          text-decoration-thickness: from-font;
        }

        .tqg-shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .tqg-hero {
          position: relative;
          padding: 108px 0 92px;
          background:
            radial-gradient(circle at 50% 0%, rgba(193, 29, 99, 0.055), transparent 38%),
            linear-gradient(180deg, #ffffff 0%, #ffffff 78%, #fbfcfe 100%);
        }

        .tqg-hero__content {
          max-width: 960px;
          margin: 0 auto;
          text-align: center;
        }

        .tqg-hero h1 {
          max-width: 940px;
          margin: 0 auto;
          font-size: 48px;
          line-height: 1.08;
          letter-spacing: -0.035em;
          font-weight: 600;
        }

        .tqg-hero__lead {
          max-width: 820px;
          margin: 26px auto 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-hero__support {
          max-width: 770px;
          margin: 12px auto 0;
          color: var(--tqg-muted);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .tqg-hero__actions {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .tqg-button {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 13px 24px;
          border-radius: 999px;
          border: 1px solid transparent;
          text-decoration: none;
          font-size: 14px;
          line-height: 1.2;
          font-weight: 600;
          white-space: nowrap;
          transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .tqg-button:hover {
          transform: translateY(-1px);
        }

        .tqg-button:focus-visible,
        .tqg-editorial-link:focus-visible,
        .tqg-topic:focus-visible,
        .tqg-guide-row:focus-visible,
        .tqg-support__link:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .tqg-page .tqg-button--primary,
        .tqg-page .tqg-button--primary:visited {
          background: var(--tqg-accent);
          color: var(--tqg-white);
          box-shadow: 0 10px 24px rgba(193, 29, 99, 0.17);
        }

        .tqg-page .tqg-button--primary:hover {
          background: var(--tqg-accent-dark);
          color: var(--tqg-white);
          box-shadow: 0 12px 28px rgba(159, 29, 85, 0.22);
        }

        .tqg-page .tqg-button--secondary,
        .tqg-page .tqg-button--secondary:visited {
          background: rgba(255, 255, 255, 0.92);
          border-color: #dfe4eb;
          color: var(--tqg-accent-dark);
        }

        .tqg-page .tqg-button--secondary:hover {
          border-color: rgba(193, 29, 99, 0.28);
          background: var(--tqg-white);
          color: var(--tqg-accent);
        }

        .tqg-lifecycle {
          position: relative;
          max-width: 1120px;
          margin: 58px auto 0;
          padding: 27px 30px;
          border: 1px solid var(--tqg-border);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.96);
          box-shadow: 0 18px 44px rgba(16, 24, 40, 0.055);
        }

        .tqg-lifecycle__label {
          margin: 0 0 22px;
          color: var(--tqg-accent-dark);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
          text-align: center;
        }

        .tqg-lifecycle__track {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          position: relative;
        }

        .tqg-lifecycle__track::before {
          content: "";
          position: absolute;
          top: 10px;
          left: calc(100% / 12);
          right: calc(100% / 12);
          height: 2px;
          background: linear-gradient(90deg, rgba(193, 29, 99, 0.16), rgba(193, 29, 99, 0.7), rgba(193, 29, 99, 0.16));
        }

        .tqg-lifecycle__step {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          min-width: 0;
          color: var(--tqg-body);
          font-size: 14px;
          line-height: 1.3;
          font-weight: 600;
        }

        .tqg-lifecycle__dot {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          border: 6px solid var(--tqg-white);
          background: var(--tqg-accent);
          box-shadow: 0 0 0 1px rgba(193, 29, 99, 0.2);
        }

        .tqg-overview {
          padding: 96px 0;
          background: var(--tqg-white);
        }

        .tqg-overview__intro {
          display: grid;
          grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr);
          gap: 80px;
          align-items: start;
        }

        .tqg-section-kicker {
          display: block;
          margin: 0 0 14px;
          color: var(--tqg-accent-dark);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .tqg-overview h2,
        .tqg-topics h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
        }

        .tqg-overview__copy {
          max-width: 760px;
        }

        .tqg-overview__copy p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-overview__copy p + p {
          margin-top: 18px;
        }

        .tqg-principles {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 60px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-principle {
          position: relative;
          padding: 36px 34px 38px;
        }

        .tqg-principle:first-child {
          padding-left: 0;
        }

        .tqg-principle:last-child {
          padding-right: 0;
        }

        .tqg-principle + .tqg-principle {
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-principle__head {
          display: flex;
          align-items: center;
          gap: 13px;
        }

        .tqg-icon-surface {
          display: inline-flex;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: var(--tqg-accent-soft);
          color: var(--tqg-accent-dark);
        }

        .tqg-principle h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .tqg-principle p {
          margin: 18px 0 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.72;
          font-weight: 400;
        }


        .tqg-page .tqg-editorial-link,
        .tqg-page .tqg-editorial-link:visited {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 7px;
          color: var(--tqg-accent-dark);
          text-decoration: none;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 600;
        }

        .tqg-editorial-link svg {
          transition: transform 180ms ease;
        }

        .tqg-page .tqg-editorial-link:hover {
          color: var(--tqg-accent);
        }

        .tqg-editorial-link:hover svg {
          transform: translateX(3px);
        }

        .tqg-topics {
          padding: 96px 0;
          background: #fafbfd;
          border-top: 1px solid var(--tqg-soft-border);
        }

        .tqg-topics__header {
          display: grid;
          grid-template-columns: minmax(300px, 0.8fr) minmax(0, 1.2fr);
          gap: 88px;
          align-items: end;
          margin-bottom: 50px;
        }

        .tqg-topics__intro {
          max-width: 720px;
          margin: 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-topic-feature {
          margin-bottom: 1px;
        }

        .tqg-topic {
          display: grid;
          min-width: 0;
          color: inherit;
          text-decoration: none;
          transition: background-color 180ms ease, transform 180ms ease;
        }

        .tqg-topic--featured {
          grid-template-columns: minmax(0, 1fr) 28px;
          align-items: center;
          column-gap: 24px;
          min-height: 136px;
          padding: 30px 32px;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: 24px;
          background: var(--tqg-accent-soft);
        }

        .tqg-topic--featured:hover {
          background: #fbeaf2;
          transform: translateY(-1px);
        }

        .tqg-topic--featured .tqg-topic__icon {
          display: none !important;
        }

        .tqg-topic--featured .tqg-topic__content {
          grid-column: 1;
          grid-row: 1;
          align-self: center;
          min-width: 0;
        }

        .tqg-topic--featured .tqg-topic__arrow {
          grid-column: 2;
          grid-row: 1;
          align-self: center;
          justify-self: end;
        }

        .tqg-topic-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 26px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-topic--standard {
          grid-template-columns: 44px minmax(0, 1fr) 28px;
          grid-template-rows: auto;
          align-items: start;
          column-gap: 18px;
          min-height: 216px;
          padding: 32px 28px 32px 0;
        }

        .tqg-topic--standard:nth-child(3n + 2),
        .tqg-topic--standard:nth-child(3n + 3) {
          padding-left: 30px;
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-topic--standard:nth-child(n + 4) {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-topic--standard:hover {
          background: rgba(255, 255, 255, 0.62);
        }

        .tqg-topic__icon {
          display: inline-flex;
          grid-column: 1;
          grid-row: 1;
          align-self: start;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--tqg-white);
          color: var(--tqg-accent-dark);
          box-shadow: inset 0 0 0 1px var(--tqg-border);
        }

        .tqg-topic__content {
          min-width: 0;
        }

        .tqg-topic--standard .tqg-topic__content {
          grid-column: 2;
          grid-row: 1;
          align-self: start;
          margin: 0;
        }

        .tqg-topic h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.3;
          letter-spacing: -0.014em;
          font-weight: 600;
          transition: color 180ms ease;
        }

        .tqg-topic p {
          margin: 10px 0 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.66;
          font-weight: 400;
        }

        .tqg-page .tqg-topic__arrow {
          width: 18px;
          height: 18px;
          color: #98a2b3 !important;
          transition: color 180ms ease, transform 180ms ease;
        }

        .tqg-topic--standard .tqg-topic__arrow {
          grid-column: 3;
          grid-row: 1;
          align-self: center;
          justify-self: end;
          margin: 0;
        }

        .tqg-topic:hover h3 {
          color: var(--tqg-accent-dark);
        }

        .tqg-page .tqg-topic:hover .tqg-topic__arrow {
          color: #667085 !important;
          transform: translateX(3px);
        }



        .tqg-framework,
        .tqg-measurement,
        .tqg-governance {
          padding: 96px 0;
        }

        .tqg-framework,
        .tqg-governance {
          background: var(--tqg-white);
        }

        .tqg-measurement {
          background: #fafbfd;
          border-top: 1px solid var(--tqg-soft-border);
          border-bottom: 1px solid var(--tqg-soft-border);
        }

        .tqg-section-header {
          display: grid;
          grid-template-columns: minmax(300px, 0.82fr) minmax(0, 1.18fr);
          gap: 88px;
          align-items: start;
        }

        .tqg-framework h2,
        .tqg-measurement h2,
        .tqg-governance h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
        }

        .tqg-section-intro {
          max-width: 760px;
          margin: 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-framework__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 54px;
          overflow: hidden;
          border: 1px solid var(--tqg-border);
          border-radius: 28px;
          background: var(--tqg-white);
        }

        .tqg-framework__step {
          min-height: 238px;
          padding: 34px 32px 36px;
          border-right: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-framework__step:nth-child(3n) {
          border-right: 0;
        }

        .tqg-framework__step:nth-child(n + 4) {
          border-bottom: 0;
        }

        .tqg-framework__number {
          display: block;
          margin-bottom: 28px;
          color: var(--tqg-accent-dark);
          font-size: 13px;
          line-height: 1;
          letter-spacing: 0.08em;
          font-weight: 600;
        }

        .tqg-framework__step h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.28;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .tqg-framework__step p {
          margin: 14px 0 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .tqg-framework__link-row {
          margin-top: 30px;
        }

        .tqg-measurement__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
          gap: 42px;
          align-items: stretch;
          margin-top: 54px;
        }

        .tqg-dimensions {
          overflow: hidden;
          border: 1px solid var(--tqg-border);
          border-radius: 24px;
          background: var(--tqg-white);
        }

        .tqg-dimensions__head {
          padding: 28px 30px 24px;
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-dimensions__head h3,
        .tqg-scorecard__heading h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.3;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .tqg-dimensions__head p,
        .tqg-scorecard__heading p {
          margin: 10px 0 0;
          color: var(--tqg-muted);
          font-size: 14px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-dimensions__grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .tqg-dimension {
          display: flex;
          min-height: 72px;
          align-items: center;
          gap: 13px;
          padding: 18px 24px;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.45;
          font-weight: 600;
        }

        .tqg-dimension:nth-child(even) {
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-dimension:nth-child(n + 3) {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-dimension__marker {
          flex: 0 0 auto;
          width: 9px;
          height: 9px;
          border: 2px solid var(--tqg-accent);
          border-radius: 50%;
          background: var(--tqg-white);
        }

        .tqg-evaluation-methods {
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-evaluation-method {
          padding: 26px 0 28px;
        }

        .tqg-evaluation-method + .tqg-evaluation-method {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-evaluation-method h3 {
          margin: 0;
          font-size: 20px;
          line-height: 1.35;
          letter-spacing: -0.01em;
          font-weight: 600;
        }

        .tqg-evaluation-method p {
          margin: 10px 0 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        .tqg-scorecard {
          margin-top: 52px;
        }

        .tqg-scorecard__heading {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 28px;
          margin-bottom: 22px;
        }

        .tqg-scorecard__heading p {
          max-width: 420px;
          margin: 0;
          text-align: right;
        }

        .tqg-scorecard__table {
          overflow: hidden;
          border: 1px solid var(--tqg-border);
          border-radius: 22px;
          background: var(--tqg-white);
        }

        .tqg-scorecard__header,
        .tqg-scorecard__row {
          display: grid;
          grid-template-columns: 0.9fr 0.65fr 1.35fr 1.45fr;
        }

        .tqg-scorecard__header {
          background: #f4f6f9;
          color: var(--tqg-muted);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .tqg-scorecard__row {
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;
        }

        .tqg-scorecard__row + .tqg-scorecard__row {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-scorecard__cell {
          min-width: 0;
          padding: 18px 20px;
          border-left: 1px solid var(--tqg-border);
          overflow-wrap: anywhere;
        }

        .tqg-scorecard__cell:first-child {
          border-left: 0;
        }

        .tqg-scorecard__row .tqg-scorecard__cell:first-child,
        .tqg-scorecard__row .tqg-scorecard__cell:nth-child(2) {
          color: var(--tqg-ink);
          font-weight: 600;
        }

        .tqg-governance__lead {
          display: grid;
          grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
          gap: 42px;
          align-items: center;
          margin-top: 52px;
          padding: 34px 38px;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: 24px;
          background: var(--tqg-accent-soft);
        }

        .tqg-governance__lead h3 {
          margin: 0;
          font-size: 24px;
          line-height: 1.32;
          letter-spacing: -0.015em;
          font-weight: 600;
        }

        .tqg-governance__lead p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .tqg-governance__table {
          margin-top: 34px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-governance__header,
        .tqg-governance__row {
          display: grid;
          grid-template-columns: minmax(190px, 0.82fr) minmax(0, 1.55fr) minmax(190px, 0.9fr);
          column-gap: 34px;
        }

        .tqg-governance__header {
          padding: 17px 0;
          color: var(--tqg-muted);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .tqg-governance__row {
          align-items: center;
          padding: 24px 0;
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-governance__area {
          margin: 0;
          color: var(--tqg-ink);
          font-size: 18px;
          line-height: 1.4;
          font-weight: 600;
        }

        .tqg-governance__decision,
        .tqg-governance__role {
          margin: 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.6;
          font-weight: 400;
        }

        .tqg-governance__role {
          color: var(--tqg-muted);
        }

        .tqg-governance__links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 28px;
        }

        .tqg-governance__links p {
          max-width: 680px;
          margin: 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-governance__link-group {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }



        .tqg-risk,
        .tqg-ai-governance,
        .tqg-standards {
          padding: 96px 0;
        }

        .tqg-risk,
        .tqg-standards {
          background: var(--tqg-white);
        }

        .tqg-risk {
          border-top: 1px solid var(--tqg-soft-border);
        }

        .tqg-risk h2,
        .tqg-ai-governance h2,
        .tqg-standards h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
        }

        .tqg-risk__matrix {
          margin-top: 52px;
          overflow: hidden;
          border: 1px solid var(--tqg-border);
          border-radius: 24px;
          background: var(--tqg-white);
        }

        .tqg-risk__header,
        .tqg-risk__row {
          display: grid;
          grid-template-columns: minmax(170px, 0.65fr) minmax(0, 1.08fr) minmax(0, 1.55fr);
        }

        .tqg-risk__header {
          background: #f4f6f9;
          color: var(--tqg-muted);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.11em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .tqg-risk__row {
          align-items: stretch;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.62;
          font-weight: 400;
        }

        .tqg-risk__row + .tqg-risk__row {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-risk__cell {
          display: flex;
          min-width: 0;
          align-items: center;
          padding: 24px 26px;
          border-left: 1px solid var(--tqg-border);
          overflow-wrap: anywhere;
        }

        .tqg-risk__cell:first-child {
          border-left: 0;
        }

        .tqg-risk__level {
          color: var(--tqg-ink);
          font-size: 18px;
          line-height: 1.38;
          font-weight: 600;
        }

        .tqg-risk__row:last-child {
          background: linear-gradient(90deg, rgba(253, 242, 247, 0.88), rgba(253, 242, 247, 0.35));
        }

        .tqg-risk__row:last-child .tqg-risk__level {
          color: var(--tqg-accent-dark);
        }

        .tqg-risk__principle {
          display: grid;
          grid-template-columns: minmax(230px, 0.62fr) minmax(0, 1.38fr);
          gap: 48px;
          align-items: center;
          margin-top: 32px;
          padding: 28px 32px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
          background: #fafbfd;
        }

        .tqg-risk__principle h3 {
          margin: 0;
          color: var(--tqg-accent-dark);
          font-size: 22px;
          line-height: 1.34;
          letter-spacing: -0.014em;
          font-weight: 600;
        }

        .tqg-risk__principle p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .tqg-ai-governance {
          position: relative;
          overflow: hidden;
          background: #111827;
          color: var(--tqg-white);
        }

        .tqg-ai-governance::before {
          content: "";
          position: absolute;
          top: -230px;
          right: -170px;
          width: 520px;
          height: 520px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.17), transparent 68%);
          pointer-events: none;
        }

        .tqg-ai-governance .tqg-shell {
          position: relative;
          z-index: 1;
        }

        .tqg-ai-governance .tqg-section-kicker {
          color: #f2a6c5;
        }

        .tqg-ai-governance .tqg-section-intro {
          color: #c8d0de;
        }

        .tqg-ai-governance__statement {
          display: grid;
          grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
          gap: 72px;
          align-items: start;
          margin-top: 54px;
          padding-top: 32px;
          border-top: 2px solid rgba(193, 29, 99, 0.68);
        }

        .tqg-ai-governance__statement h3 {
          margin: 0;
          font-size: 28px;
          line-height: 1.28;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .tqg-ai-governance__statement p {
          margin: 0;
          color: #c8d0de;
          font-size: 17px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-ai-controls {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          margin-top: 46px;
          border-top: 1px solid rgba(255, 255, 255, 0.13);
          border-bottom: 1px solid rgba(255, 255, 255, 0.13);
        }

        .tqg-ai-control {
          min-height: 178px;
          padding: 30px 34px 32px 0;
        }

        .tqg-ai-control:nth-child(even) {
          padding-left: 36px;
          border-left: 1px solid rgba(255, 255, 255, 0.13);
        }

        .tqg-ai-control:nth-child(n + 3) {
          border-top: 1px solid rgba(255, 255, 255, 0.13);
        }

        .tqg-ai-control h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.35;
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .tqg-ai-control p {
          margin: 11px 0 0;
          color: #b9c3d2;
          font-size: 16px;
          line-height: 1.68;
          font-weight: 400;
        }

        .tqg-ai-governance__links {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 30px;
        }

        .tqg-ai-governance__links p {
          max-width: 580px;
          margin: 0;
          color: #b9c3d2;
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-ai-governance__link-group {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 10px 24px;
          flex-wrap: wrap;
        }

        .tqg-page .tqg-editorial-link--dark,
        .tqg-page .tqg-editorial-link--dark:visited {
          color: #f4b3cf;
        }

        .tqg-page .tqg-editorial-link--dark:hover {
          color: var(--tqg-white);
        }

        .tqg-standards {
          border-bottom: 1px solid var(--tqg-soft-border);
        }

        .tqg-standards__lead {
          display: grid;
          grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
          gap: 62px;
          align-items: start;
          margin-top: 52px;
        }

        .tqg-standards__lead h3 {
          margin: 0;
          font-size: 27px;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .tqg-standards__lead p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 17px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-standards__list {
          margin-top: 42px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-standard {
          display: grid;
          grid-template-columns: minmax(155px, 0.48fr) minmax(0, 1.52fr);
          gap: 38px;
          align-items: start;
          padding: 29px 0 31px;
        }

        .tqg-standard + .tqg-standard {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-standard__code {
          align-self: start;
          margin: 0;
          padding-top: 2px;
          color: var(--tqg-accent-dark);
          font-size: 16px;
          line-height: 1.4;
          letter-spacing: 0.01em;
          font-weight: 600;
        }

        .tqg-standard__content h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.34;
          letter-spacing: -0.014em;
          font-weight: 600;
        }

        .tqg-standard__content p {
          max-width: 820px;
          margin: 10px 0 0;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.7;
          font-weight: 400;
        }

        .tqg-standards__related {
          display: grid;
          grid-template-columns: minmax(250px, 0.72fr) minmax(0, 1.28fr);
          gap: 62px;
          align-items: center;
          margin-top: 34px;
          padding: 30px 32px;
          border-radius: 22px;
          background: var(--tqg-accent-soft);
        }

        .tqg-standards__related h3 {
          margin: 0;
          font-size: 21px;
          line-height: 1.35;
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .tqg-standards__related p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.68;
          font-weight: 400;
        }

        .tqg-standards__links {
          display: flex;
          align-items: center;
          gap: 24px;
          margin-top: 26px;
          flex-wrap: wrap;
        }


        .tqg-guides,
        .tqg-tools,
        .tqg-practice {
          padding: 96px 0;
        }

        .tqg-guides {
          background: var(--tqg-surface);
          border-bottom: 1px solid var(--tqg-soft-border);
        }

        .tqg-tools {
          background: var(--tqg-white);
        }

        .tqg-practice {
          background: #fbfcfe;
          border-top: 1px solid var(--tqg-soft-border);
        }

        .tqg-guides h2,
        .tqg-tools h2,
        .tqg-practice h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
        }

        .tqg-guides__layout {
          display: grid;
          grid-template-columns: minmax(0, 1.03fr) minmax(0, 0.97fr);
          gap: 72px;
          align-items: stretch;
          margin-top: 54px;
        }

        .tqg-guide-feature {
          position: relative;
          display: flex;
          min-width: 0;
          flex-direction: column;
          justify-content: space-between;
          min-height: 520px;
          padding: 42px 42px 38px;
          overflow: hidden;
          border: 1px solid rgba(193, 29, 99, 0.16);
          border-radius: 28px;
          background: var(--tqg-white);
          box-shadow: 0 16px 38px rgba(16, 24, 40, 0.045);
        }

        .tqg-guide-feature::after {
          content: "";
          position: absolute;
          right: -76px;
          bottom: -98px;
          width: 270px;
          height: 270px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.11), transparent 69%);
          pointer-events: none;
        }

        .tqg-guide-feature__content,
        .tqg-guide-feature__footer {
          position: relative;
          z-index: 1;
        }

        .tqg-guide-feature__label,
        .tqg-guide-row__label,
        .tqg-tool__type,
        .tqg-practice__label,
        .tqg-practice__detail-label {
          display: block;
          color: var(--tqg-accent-dark);
          font-size: 11px;
          line-height: 1.4;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          font-weight: 600;
        }

        .tqg-tool__type,
        .tqg-practice__detail-label {
          color: var(--tqg-muted);
        }

        .tqg-guide-feature h3 {
          max-width: 560px;
          margin: 20px 0 0;
          font-size: 31px;
          line-height: 1.24;
          letter-spacing: -0.022em;
          font-weight: 600;
        }

        .tqg-guide-feature__description {
          max-width: 600px;
          margin: 20px 0 0;
          color: var(--tqg-body);
          font-size: 17px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-guide-feature__topics {
          display: flex;
          align-items: center;
          gap: 8px 18px;
          margin: 28px 0 0;
          padding: 0;
          flex-wrap: wrap;
          list-style: none;
        }

        .tqg-guide-feature__topics li {
          position: relative;
          color: var(--tqg-muted);
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
        }

        .tqg-guide-feature__topics li + li {
          padding-left: 18px;
        }

        .tqg-guide-feature__topics li + li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          width: 4px;
          height: 4px;
          margin-top: -2px;
          border-radius: 50%;
          background: rgba(193, 29, 99, 0.46);
        }

        .tqg-guide-feature__footer {
          margin-top: 54px;
          padding-top: 24px;
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-guides__list {
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-guide-row {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 24px;
          align-items: center;
          min-height: 104px;
          padding: 22px 0;
          color: inherit;
          text-decoration: none;
          transition: background-color 180ms ease;
        }

        .tqg-guide-row + .tqg-guide-row {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-guide-row h3 {
          margin: 7px 0 0;
          font-size: 20px;
          line-height: 1.38;
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .tqg-guide-row p {
          margin: 8px 0 0;
          color: var(--tqg-body);
          font-size: 14px;
          line-height: 1.58;
          font-weight: 400;
        }

        .tqg-guide-row__action {
          display: inline-flex;
          width: 36px;
          height: 36px;
          align-items: center;
          justify-content: center;
          color: #98a2b3;
          transition: color 180ms ease, transform 180ms ease;
        }

        .tqg-guide-row:hover {
          background: rgba(255, 255, 255, 0.56);
        }

        .tqg-guide-row:hover h3 {
          color: var(--tqg-accent-dark);
        }

        .tqg-guide-row:hover .tqg-guide-row__action {
          color: #667085;
          transform: translateX(3px);
        }

        .tqg-guides__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 30px;
        }

        .tqg-guides__footer p {
          max-width: 720px;
          margin: 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-tools__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 52px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-tool {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          gap: 18px;
          align-items: start;
          min-width: 0;
          min-height: 220px;
          padding: 32px 30px;
          color: inherit;
          text-decoration: none;
          transition: background-color 180ms ease;
        }

        .tqg-tool:nth-child(3n + 2),
        .tqg-tool:nth-child(3n + 3) {
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-tool:nth-child(n + 4) {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-tool:hover {
          background: #fbfcfe;
        }

        .tqg-tool:focus-visible,
        .tqg-guide-row:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: -3px;
        }

        .tqg-tool__icon {
          display: inline-flex;
          width: 46px;
          height: 46px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          color: var(--tqg-accent-dark);
          background: var(--tqg-white);
          box-shadow: inset 0 0 0 1px var(--tqg-border);
        }

        .tqg-tool__content {
          min-width: 0;
        }

        .tqg-tool h3 {
          margin: 8px 0 0;
          font-size: 20px;
          line-height: 1.38;
          letter-spacing: -0.012em;
          font-weight: 600;
        }

        .tqg-tool p {
          margin: 10px 0 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-tool__arrow {
          margin-top: 2px;
          color: #98a2b3;
          transition: color 180ms ease, transform 180ms ease;
        }

        .tqg-tool:hover .tqg-tool__arrow {
          color: #667085;
          transform: translateX(3px);
        }

        .tqg-tools__note {
          max-width: 820px;
          margin: 26px 0 0;
          color: var(--tqg-muted);
          font-size: 14px;
          line-height: 1.62;
          font-weight: 400;
        }

        .tqg-practice__lead {
          display: grid;
          grid-template-columns: minmax(260px, 0.72fr) minmax(0, 1.28fr);
          gap: 62px;
          align-items: start;
          margin-top: 52px;
          padding: 32px 0 30px;
          border-top: 2px solid rgba(193, 29, 99, 0.62);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-practice__lead h3 {
          margin: 0;
          font-size: 27px;
          line-height: 1.3;
          letter-spacing: -0.02em;
          font-weight: 600;
        }

        .tqg-practice__lead p {
          margin: 0;
          color: var(--tqg-body);
          font-size: 17px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-practice__rows {
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-practice__row {
          display: grid;
          grid-template-columns: minmax(250px, 0.68fr) minmax(0, 1.32fr);
          gap: 56px;
          align-items: start;
          padding: 38px 0 40px;
        }

        .tqg-practice__title,
        .tqg-practice__details,
        .tqg-practice__detail {
          align-self: start;
        }

        .tqg-practice__row + .tqg-practice__row {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-practice__title h3 {
          margin: 10px 0 0;
          font-size: 23px;
          line-height: 1.34;
          letter-spacing: -0.016em;
          font-weight: 600;
        }

        .tqg-practice__context {
          margin: 14px 0 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-practice__details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0;
          align-items: start;
          padding-top: 0;
        }

        .tqg-practice__detail {
          min-width: 0;
          padding: 0 26px;
        }

        .tqg-practice__label,
        .tqg-practice__detail-label {
          margin: 0;
          padding: 0;
        }

        .tqg-practice__detail:first-child {
          padding-left: 0;
        }

        .tqg-practice__detail + .tqg-practice__detail {
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-practice__detail p {
          margin: 9px 0 0;
          color: var(--tqg-body);
          font-size: 14px;
          line-height: 1.62;
          font-weight: 400;
        }

        .tqg-practice__footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 28px;
          margin-top: 30px;
        }

        .tqg-practice__footer p {
          max-width: 720px;
          margin: 0;
          color: var(--tqg-muted);
          font-size: 14px;
          line-height: 1.62;
          font-weight: 400;
        }

        .tqg-practice__links {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
        }




        .tqg-support,
        .tqg-faq,
        .tqg-final-cta {
          padding: 96px 0;
        }

        .tqg-support {
          background: var(--tqg-white);
          border-top: 1px solid var(--tqg-soft-border);
        }

        .tqg-faq {
          background: #fafbfd;
          border-top: 1px solid var(--tqg-soft-border);
          border-bottom: 1px solid var(--tqg-soft-border);
        }

        .tqg-final-cta {
          background: var(--tqg-white);
        }

        .tqg-support h2,
        .tqg-faq h2,
        .tqg-final-cta h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.18;
          letter-spacing: -0.026em;
          font-weight: 600;
        }

        .tqg-support__grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          margin-top: 54px;
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-support__group {
          min-width: 0;
          padding: 34px 34px 36px;
        }

        .tqg-support__group:first-child {
          padding-left: 0;
        }

        .tqg-support__group:last-child {
          padding-right: 0;
        }

        .tqg-support__group + .tqg-support__group {
          border-left: 1px solid var(--tqg-border);
        }

        .tqg-support__group h3 {
          margin: 0;
          font-size: 23px;
          line-height: 1.34;
          letter-spacing: -0.016em;
          font-weight: 600;
        }

        .tqg-support__group-intro {
          min-height: 82px;
          margin: 13px 0 0;
          color: var(--tqg-body);
          font-size: 15px;
          line-height: 1.65;
          font-weight: 400;
        }

        .tqg-support__links {
          margin-top: 28px;
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-support__link {
          display: block;
          min-width: 0;
          padding: 23px 0 25px;
          color: inherit;
          text-decoration: none;
        }

        .tqg-support__link + .tqg-support__link {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-support__link-title {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 14px;
          align-items: center;
          color: var(--tqg-ink);
          font-size: 16px;
          line-height: 1.45;
          font-weight: 600;
          transition: color 180ms ease;
        }

        .tqg-support__link-title svg {
          color: #98a2b3;
          transition: color 180ms ease, transform 180ms ease;
        }

        .tqg-support__link p {
          margin: 9px 30px 0 0;
          color: var(--tqg-muted);
          font-size: 14px;
          line-height: 1.62;
          font-weight: 400;
        }

        .tqg-support__link:hover .tqg-support__link-title {
          color: var(--tqg-accent-dark);
        }

        .tqg-support__link:hover .tqg-support__link-title svg {
          color: #667085;
          transform: translateX(3px);
        }

        .tqg-faq__question:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.24);
          outline-offset: 4px;
        }

        .tqg-faq__layout {
          display: grid;
          grid-template-columns: minmax(280px, 0.68fr) minmax(0, 1.32fr);
          gap: 86px;
          align-items: start;
        }

        .tqg-faq__intro {
          position: sticky;
          top: 32px;
        }

        .tqg-faq__intro p {
          margin: 22px 0 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-faq__links {
          display: flex;
          align-items: flex-start;
          flex-direction: column;
          gap: 4px;
          margin-top: 26px;
        }

        .tqg-faq__panel {
          border-top: 1px solid var(--tqg-border);
          border-bottom: 1px solid var(--tqg-border);
        }

        .tqg-faq__item + .tqg-faq__item {
          border-top: 1px solid var(--tqg-border);
        }

        .tqg-faq__question {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 36px;
          gap: 24px;
          align-items: center;
          min-height: 86px;
          padding: 23px 0;
          cursor: pointer;
          list-style: none;
          color: var(--tqg-ink);
          font-size: 19px;
          line-height: 1.45;
          font-weight: 600;
        }

        .tqg-faq__question::-webkit-details-marker {
          display: none;
        }

        .tqg-faq__indicator {
          position: relative;
          display: inline-flex;
          width: 34px;
          height: 34px;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--tqg-border);
          border-radius: 50%;
          background: var(--tqg-white);
          transition: border-color 180ms ease, background-color 180ms ease;
        }

        .tqg-faq__indicator::before,
        .tqg-faq__indicator::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 1.5px;
          border-radius: 999px;
          background: var(--tqg-accent-dark);
          transition: transform 180ms ease;
        }

        .tqg-faq__indicator::after {
          transform: rotate(90deg);
        }

        .tqg-faq__item[open] .tqg-faq__indicator {
          border-color: rgba(193, 29, 99, 0.22);
          background: var(--tqg-accent-soft);
        }

        .tqg-faq__item[open] .tqg-faq__indicator::after {
          transform: rotate(0deg);
        }

        .tqg-faq__answer {
          max-width: 840px;
          margin: -4px 58px 0 0;
          padding: 0 0 28px;
          color: var(--tqg-body);
          font-size: 16px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-final-cta__panel {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 52px;
          align-items: center;
          padding: 62px 68px;
          overflow: hidden;
          border: 1px solid rgba(193, 29, 99, 0.14);
          border-radius: 30px;
          background:
            radial-gradient(circle at 88% 15%, rgba(193, 29, 99, 0.09), transparent 34%),
            linear-gradient(135deg, #fff 0%, #fff 46%, #fdf2f7 100%);
        }

        .tqg-final-cta__content {
          max-width: 760px;
        }

        .tqg-final-cta__content p {
          margin: 20px 0 0;
          color: var(--tqg-body);
          font-size: 18px;
          line-height: 1.72;
          font-weight: 400;
        }

        .tqg-final-cta__actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          flex-wrap: wrap;
        }

        @media (max-width: 1100px) {
          .tqg-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .tqg-overview__intro,
          .tqg-topics__header,
          .tqg-section-header {
            gap: 56px;
          }

          .tqg-framework__step {
            padding-left: 26px;
            padding-right: 26px;
          }

          .tqg-measurement__layout {
            grid-template-columns: minmax(0, 1fr) minmax(300px, 0.86fr);
            gap: 34px;
          }

          .tqg-governance__header,
          .tqg-governance__row {
            column-gap: 26px;
          }

          .tqg-principle {
            padding-left: 24px;
            padding-right: 24px;
          }

          .tqg-topic-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tqg-topic--standard,
          .tqg-topic--standard:nth-child(3n + 2),
          .tqg-topic--standard:nth-child(3n + 3) {
            grid-template-columns: 44px minmax(0, 1fr) 28px;
            align-items: start;
            column-gap: 18px;
            padding: 30px 26px;
            border-left: 0;
            border-top: 0;
          }

          .tqg-topic--standard:nth-child(even) {
            border-left: 1px solid var(--tqg-border);
          }

          .tqg-topic--standard:nth-child(n + 3) {
            border-top: 1px solid var(--tqg-border);
          }
        }

        @media (max-width: 1100px) {
          .tqg-risk__header,
          .tqg-risk__row {
            grid-template-columns: minmax(160px, 0.62fr) minmax(0, 1fr) minmax(0, 1.38fr);
          }

          .tqg-ai-governance__statement {
            gap: 54px;
          }

          .tqg-standards__lead,
          .tqg-standards__related {
            gap: 48px;
          }
        }

        @media (max-width: 820px) {
          .tqg-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .tqg-hero {
            padding: 92px 0 80px;
          }

          .tqg-hero h1 {
            font-size: 42px;
          }

          .tqg-lifecycle {
            margin-top: 52px;
          }

          .tqg-overview,
          .tqg-topics,
          .tqg-framework,
          .tqg-measurement,
          .tqg-governance {
            padding: 80px 0;
          }

          .tqg-overview__intro,
          .tqg-topics__header,
          .tqg-section-header {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .tqg-framework__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tqg-framework__step,
          .tqg-framework__step:nth-child(3n),
          .tqg-framework__step:nth-child(n + 4) {
            border-right: 0;
            border-bottom: 1px solid var(--tqg-border);
          }

          .tqg-framework__step:nth-child(odd) {
            border-right: 1px solid var(--tqg-border);
          }

          .tqg-framework__step:nth-child(n + 5) {
            border-bottom: 0;
          }

          .tqg-measurement__layout {
            grid-template-columns: 1fr;
          }

          .tqg-scorecard__heading {
            align-items: start;
          }

          .tqg-governance__lead {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .tqg-governance__header {
            display: none;
          }

          .tqg-governance__row {
            grid-template-columns: minmax(170px, 0.82fr) minmax(0, 1.18fr);
            gap: 18px 28px;
            padding: 26px 0;
          }

          .tqg-governance__area {
            grid-row: 1 / span 2;
          }

          .tqg-governance__decision,
          .tqg-governance__role {
            position: relative;
            padding-left: 96px;
          }

          .tqg-governance__decision::before,
          .tqg-governance__role::before {
            position: absolute;
            left: 0;
            top: 2px;
            color: var(--tqg-muted);
            font-size: 10px;
            line-height: 1.4;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .tqg-governance__decision::before {
            content: "Decision";
          }

          .tqg-governance__role::before {
            content: "Accountable";
          }

          .tqg-governance__links {
            align-items: flex-start;
            flex-direction: column;
          }

          .tqg-overview h2,
          .tqg-topics h2,
          .tqg-framework h2,
          .tqg-measurement h2,
          .tqg-governance h2 {
            font-size: 32px;
          }

          .tqg-principles {
            grid-template-columns: 1fr;
            margin-top: 50px;
          }

          .tqg-principle,
          .tqg-principle:first-child,
          .tqg-principle:last-child {
            padding: 30px 0;
          }

          .tqg-principle + .tqg-principle {
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-topic-grid {
            grid-template-columns: 1fr;
          }

          .tqg-topic--standard,
          .tqg-topic--standard:nth-child(3n + 2),
          .tqg-topic--standard:nth-child(3n + 3),
          .tqg-topic--standard:nth-child(even),
          .tqg-topic--standard:nth-child(n + 3) {
            grid-template-columns: 44px minmax(0, 1fr) 28px;
            grid-template-rows: auto;
            align-items: start;
            column-gap: 18px;
            min-height: 0;
            padding: 28px 0;
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-topic--standard:first-child {
            border-top: 0;
          }

          .tqg-topic--standard .tqg-topic__arrow {
            align-self: center;
          }
        }

        @media (max-width: 820px) {
          .tqg-risk,
          .tqg-ai-governance,
          .tqg-standards {
            padding: 80px 0;
          }

          .tqg-risk h2,
          .tqg-ai-governance h2,
          .tqg-standards h2 {
            font-size: 32px;
          }

          .tqg-risk__principle,
          .tqg-ai-governance__statement,
          .tqg-standards__lead,
          .tqg-standards__related {
            grid-template-columns: 1fr;
          }

          .tqg-risk__principle,
          .tqg-ai-governance__statement,
          .tqg-standards__lead,
          .tqg-standards__related {
            gap: 18px;
          }

          .tqg-risk__header {
            display: none;
          }

          .tqg-risk__row {
            display: block;
            padding: 10px 0;
          }

          .tqg-risk__cell {
            display: grid;
            grid-template-columns: 150px minmax(0, 1fr);
            gap: 20px;
            padding: 12px 24px;
            border-left: 0;
          }

          .tqg-risk__cell::before {
            content: attr(data-label);
            color: var(--tqg-muted);
            font-size: 10px;
            line-height: 1.4;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .tqg-risk__level {
            font-size: 17px;
          }

          .tqg-ai-controls {
            grid-template-columns: 1fr;
          }

          .tqg-ai-control,
          .tqg-ai-control:nth-child(even),
          .tqg-ai-control:nth-child(n + 3) {
            min-height: 0;
            padding: 28px 0;
            border-left: 0;
            border-top: 1px solid rgba(255, 255, 255, 0.13);
          }

          .tqg-ai-control:first-child {
            border-top: 0;
          }

          .tqg-ai-governance__links {
            align-items: flex-start;
            flex-direction: column;
          }

          .tqg-ai-governance__link-group {
            justify-content: flex-start;
          }
        }

        @media (max-width: 620px) {
          .tqg-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .tqg-hero {
            padding: 72px 0 68px;
          }

          .tqg-hero h1 {
            font-size: 38px;
            line-height: 1.1;
          }

          .tqg-hero__lead {
            margin-top: 22px;
            font-size: 18px;
            line-height: 1.65;
          }

          .tqg-hero__support {
            font-size: 16px;
          }

          .tqg-hero__actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
            margin-top: 30px;
          }

          .tqg-button {
            width: 100%;
            min-height: 50px;
            white-space: normal;
          }

          .tqg-lifecycle {
            margin-top: 42px;
            padding: 26px 24px;
            border-radius: 24px;
          }

          .tqg-lifecycle__label {
            margin-bottom: 18px;
            text-align: left;
          }

          .tqg-lifecycle__track {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .tqg-lifecycle__track::before {
            top: 16px;
            bottom: 16px;
            left: 10px;
            right: auto;
            width: 2px;
            height: auto;
            background: linear-gradient(180deg, rgba(193, 29, 99, 0.16), rgba(193, 29, 99, 0.7), rgba(193, 29, 99, 0.16));
          }

          .tqg-lifecycle__step {
            min-height: 48px;
            flex-direction: row;
            align-items: center;
            gap: 14px;
            justify-content: flex-start;
          }

          .tqg-lifecycle__dot {
            flex: 0 0 auto;
          }

          .tqg-overview,
          .tqg-topics,
          .tqg-framework,
          .tqg-measurement,
          .tqg-governance {
            padding: 68px 0;
          }

          .tqg-overview h2,
          .tqg-topics h2,
          .tqg-framework h2,
          .tqg-measurement h2,
          .tqg-governance h2 {
            font-size: 30px;
          }

          .tqg-overview__copy p,
          .tqg-topics__intro,
          .tqg-section-intro {
            font-size: 18px;
            line-height: 1.66;
          }

          .tqg-framework__grid {
            grid-template-columns: 1fr;
            margin-top: 42px;
          }

          .tqg-framework__step,
          .tqg-framework__step:nth-child(3n),
          .tqg-framework__step:nth-child(n + 4),
          .tqg-framework__step:nth-child(odd),
          .tqg-framework__step:nth-child(n + 5) {
            min-height: 0;
            padding: 28px 24px 30px;
            border-right: 0;
            border-bottom: 1px solid var(--tqg-border);
          }

          .tqg-framework__step:last-child {
            border-bottom: 0;
          }

          .tqg-framework__number {
            margin-bottom: 18px;
          }

          .tqg-framework__step h3,
          .tqg-dimensions__head h3,
          .tqg-scorecard__heading h3,
          .tqg-governance__lead h3 {
            font-size: 20px;
          }

          .tqg-measurement__layout {
            margin-top: 42px;
          }

          .tqg-dimensions__head {
            padding: 24px 22px 22px;
          }

          .tqg-dimensions__grid {
            grid-template-columns: 1fr;
          }

          .tqg-dimension,
          .tqg-dimension:nth-child(even),
          .tqg-dimension:nth-child(n + 3) {
            min-height: 0;
            padding: 18px 22px;
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-dimension:first-child {
            border-top: 0;
          }

          .tqg-scorecard {
            margin-top: 42px;
          }

          .tqg-scorecard__heading {
            align-items: flex-start;
            flex-direction: column;
            gap: 10px;
          }

          .tqg-scorecard__heading p {
            max-width: none;
            text-align: left;
          }

          .tqg-scorecard__header {
            display: none;
          }

          .tqg-scorecard__row {
            display: block;
            padding: 10px 0;
          }

          .tqg-scorecard__cell {
            display: grid;
            grid-template-columns: 104px minmax(0, 1fr);
            gap: 14px;
            padding: 10px 18px;
            border-left: 0;
          }

          .tqg-scorecard__cell::before {
            content: attr(data-label);
            color: var(--tqg-muted);
            font-size: 10px;
            line-height: 1.4;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            font-weight: 600;
          }

          .tqg-governance__lead {
            margin-top: 42px;
            padding: 28px 24px;
          }

          .tqg-governance__row {
            display: block;
            padding: 26px 0;
          }

          .tqg-governance__area {
            font-size: 20px;
          }

          .tqg-governance__decision,
          .tqg-governance__role {
            margin-top: 16px;
            padding-left: 0;
            padding-top: 22px;
          }

          .tqg-governance__decision::before,
          .tqg-governance__role::before {
            top: 0;
          }

          .tqg-governance__link-group {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .tqg-principles {
            margin-top: 42px;
          }

          .tqg-principle__head {
            align-items: flex-start;
          }

          .tqg-principle h3 {
            font-size: 20px;
          }

          .tqg-topics__header {
            margin-bottom: 38px;
          }

          .tqg-topic--featured {
            grid-template-columns: minmax(0, 1fr) auto;
            align-items: center;
            min-height: 0;
            padding: 26px 22px;
          }

          .tqg-topic--featured .tqg-topic__arrow {
            grid-column: 2;
            grid-row: 1;
            align-self: center;
            margin-top: 0;
          }

          .tqg-topic--standard {
            grid-template-columns: auto minmax(0, 1fr) auto;
          }

          .tqg-topic h3 {
            font-size: 20px;
          }

          .tqg-topic p {
            line-height: 1.62;
          }
        }

        @media (max-width: 620px) {
          .tqg-risk,
          .tqg-ai-governance,
          .tqg-standards {
            padding: 68px 0;
          }

          .tqg-risk h2,
          .tqg-ai-governance h2,
          .tqg-standards h2 {
            font-size: 30px;
          }

          .tqg-risk__matrix,
          .tqg-ai-governance__statement,
          .tqg-standards__lead {
            margin-top: 42px;
          }

          .tqg-risk__cell {
            display: block;
            padding: 12px 20px;
          }

          .tqg-risk__cell::before {
            display: block;
            margin-bottom: 7px;
          }

          .tqg-risk__row {
            padding: 12px 0;
          }

          .tqg-risk__principle {
            margin-top: 26px;
            padding: 26px 22px;
          }

          .tqg-risk__principle h3,
          .tqg-standard__content h3,
          .tqg-standards__related h3,
          .tqg-ai-control h3 {
            font-size: 20px;
          }

          .tqg-ai-governance__statement h3,
          .tqg-standards__lead h3 {
            font-size: 24px;
          }

          .tqg-ai-governance__statement {
            padding-top: 26px;
          }

          .tqg-ai-governance__link-group,
          .tqg-standards__links {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }

          .tqg-standard {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 25px 0 27px;
          }

          .tqg-standards__related {
            padding: 26px 22px;
          }
        }

        @media (max-width: 360px) {
          .tqg-hero h1 {
            font-size: 36px;
          }

          .tqg-lifecycle {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 1100px) {
          .tqg-guides__layout {
            gap: 48px;
          }

          .tqg-guide-feature {
            padding-left: 34px;
            padding-right: 34px;
          }

          .tqg-tool {
            padding-left: 24px;
            padding-right: 24px;
          }

          .tqg-practice__row {
            gap: 38px;
          }

          .tqg-practice__detail {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 820px) {
          .tqg-guides,
          .tqg-tools,
          .tqg-practice {
            padding: 80px 0;
          }

          .tqg-guides h2,
          .tqg-tools h2,
          .tqg-practice h2 {
            font-size: 32px;
          }

          .tqg-guides__layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .tqg-guide-feature {
            min-height: 0;
          }

          .tqg-tools__grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .tqg-tool,
          .tqg-tool:nth-child(3n + 2),
          .tqg-tool:nth-child(3n + 3),
          .tqg-tool:nth-child(n + 4) {
            border-left: 0;
            border-top: 0;
          }

          .tqg-tool:nth-child(even) {
            border-left: 1px solid var(--tqg-border);
          }

          .tqg-tool:nth-child(n + 3) {
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-practice__lead,
          .tqg-practice__row {
            grid-template-columns: 1fr;
          }

          .tqg-practice__lead {
            gap: 18px;
          }

          .tqg-practice__row {
            gap: 28px;
          }
        }

        @media (max-width: 620px) {
          .tqg-guides,
          .tqg-tools,
          .tqg-practice {
            padding: 68px 0;
          }

          .tqg-guides h2,
          .tqg-tools h2,
          .tqg-practice h2 {
            font-size: 30px;
          }

          .tqg-guides__layout,
          .tqg-tools__grid,
          .tqg-practice__lead {
            margin-top: 42px;
          }

          .tqg-guide-feature {
            padding: 30px 24px 26px;
            border-radius: 24px;
          }

          .tqg-guide-feature h3 {
            font-size: 27px;
          }

          .tqg-guide-feature__topics {
            align-items: flex-start;
            flex-direction: column;
            gap: 8px;
          }

          .tqg-guide-feature__topics li + li {
            padding-left: 0;
          }

          .tqg-guide-feature__topics li + li::before {
            display: none;
          }

          .tqg-guide-feature__footer {
            margin-top: 38px;
          }

          .tqg-guide-row {
            gap: 16px;
            padding: 24px 0;
          }

          .tqg-guides__footer,
          .tqg-practice__footer {
            align-items: flex-start;
            flex-direction: column;
          }

          .tqg-tools__grid {
            grid-template-columns: 1fr;
          }

          .tqg-tool,
          .tqg-tool:nth-child(even),
          .tqg-tool:nth-child(n + 3) {
            min-height: 0;
            padding: 28px 0;
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-tool:first-child {
            border-top: 0;
          }

          .tqg-practice__lead h3 {
            font-size: 24px;
          }

          .tqg-practice__row {
            padding: 32px 0 34px;
          }

          .tqg-practice__title h3 {
            font-size: 21px;
          }

          .tqg-practice__details {
            grid-template-columns: 1fr;
          }

          .tqg-practice__detail,
          .tqg-practice__detail:first-child {
            padding: 20px 0;
          }

          .tqg-practice__detail:first-child {
            padding-top: 0;
          }

          .tqg-practice__detail + .tqg-practice__detail {
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-practice__links {
            align-items: flex-start;
            flex-direction: column;
            gap: 4px;
          }
        }

        @media (max-width: 360px) {
          .tqg-guide-row {
            grid-template-columns: minmax(0, 1fr) 32px;
          }

          .tqg-guide-row__action {
            justify-self: end;
          }

          .tqg-tool {
            grid-template-columns: 42px minmax(0, 1fr);
          }

          .tqg-tool__arrow {
            grid-column: 2;
            justify-self: start;
            margin-top: 10px;
          }
        }

        @media (max-width: 1100px) {
          .tqg-support__group {
            padding-left: 26px;
            padding-right: 26px;
          }

          .tqg-faq__layout {
            gap: 58px;
          }

          .tqg-final-cta__panel {
            padding: 54px 48px;
          }
        }

        @media (max-width: 820px) {
          .tqg-support,
          .tqg-faq,
          .tqg-final-cta {
            padding: 80px 0;
          }

          .tqg-support h2,
          .tqg-faq h2,
          .tqg-final-cta h2 {
            font-size: 32px;
          }

          .tqg-support__grid {
            grid-template-columns: 1fr;
          }

          .tqg-support__group,
          .tqg-support__group:first-child,
          .tqg-support__group:last-child {
            padding: 34px 0 36px;
          }

          .tqg-support__group:first-child {
            padding-top: 0;
          }

          .tqg-support__group:last-child {
            padding-bottom: 0;
          }

          .tqg-support__group + .tqg-support__group {
            border-left: 0;
            border-top: 1px solid var(--tqg-border);
          }

          .tqg-support__group-intro {
            min-height: 0;
            max-width: 720px;
          }

          .tqg-faq__layout {
            grid-template-columns: 1fr;
            gap: 42px;
          }

          .tqg-faq__intro {
            position: static;
          }

          .tqg-faq__intro p {
            max-width: 760px;
          }

          .tqg-final-cta__panel {
            grid-template-columns: 1fr;
            gap: 34px;
          }

          .tqg-final-cta__actions {
            justify-content: flex-start;
          }
        }

        @media (max-width: 620px) {
          .tqg-support,
          .tqg-faq,
          .tqg-final-cta {
            padding: 68px 0;
          }

          .tqg-support h2,
          .tqg-faq h2,
          .tqg-final-cta h2 {
            font-size: 30px;
          }

          .tqg-support__grid {
            margin-top: 42px;
          }

          .tqg-support__group h3 {
            font-size: 21px;
          }

          .tqg-support__link {
            padding: 21px 0 23px;
          }

          .tqg-support__link-title {
            font-size: 16px;
          }

          .tqg-faq__layout {
            gap: 34px;
          }

          .tqg-faq__intro p {
            font-size: 18px;
            line-height: 1.66;
          }

          .tqg-faq__question {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 16px;
            min-height: 76px;
            padding: 20px 0;
            font-size: 18px;
          }

          .tqg-faq__indicator {
            width: 32px;
            height: 32px;
          }

          .tqg-faq__answer {
            margin-right: 0;
            padding-bottom: 24px;
          }

          .tqg-final-cta__panel {
            padding: 38px 24px;
            border-radius: 24px;
          }

          .tqg-final-cta__content p {
            font-size: 18px;
            line-height: 1.66;
          }

          .tqg-final-cta__actions {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .tqg-page section[id] {
            scroll-margin-top: 16px;
          }

          .tqg-section-header,
          .tqg-overview__intro,
          .tqg-topics__header {
            gap: 22px;
          }

          .tqg-topic,
          .tqg-tool,
          .tqg-guide-row,
          .tqg-support__link,
          .tqg-editorial-link {
            -webkit-tap-highlight-color: transparent;
          }

          .tqg-topic--featured {
            gap: 14px;
          }

          .tqg-topic--standard {
            gap: 0 14px;
          }

          .tqg-scorecard__table,
          .tqg-risk__matrix,
          .tqg-dimensions,
          .tqg-guide-feature,
          .tqg-final-cta__panel {
            max-width: 100%;
          }

          .tqg-editorial-link,
          .tqg-support__link-title,
          .tqg-guide-row,
          .tqg-tool {
            min-width: 0;
          }

          .tqg-support__link p {
            margin-right: 0;
          }

          .tqg-ai-governance__link-group,
          .tqg-standards__links,
          .tqg-practice__links,
          .tqg-faq__links {
            width: 100%;
          }

          .tqg-final-cta__actions .tqg-button {
            width: 100%;
          }
        }

        @media (max-width: 390px) {
          .tqg-hero h1 {
            font-size: 36px;
            letter-spacing: -0.03em;
          }

          .tqg-hero__lead {
            font-size: 17px;
          }

          .tqg-lifecycle {
            padding-left: 20px;
            padding-right: 20px;
          }

          .tqg-topic--featured {
            grid-template-columns: minmax(0, 1fr) auto;
            padding: 24px 20px;
          }

          .tqg-topic--featured .tqg-topic__content {
            grid-column: 1;
            grid-row: 1;
            margin-top: 0;
          }

          .tqg-topic--featured .tqg-topic__arrow {
            grid-column: 2;
            grid-row: 1;
            align-self: center;
            justify-self: end;
            margin: 0;
          }

          .tqg-topic--standard,
          .tqg-topic--standard:nth-child(3n + 2),
          .tqg-topic--standard:nth-child(3n + 3),
          .tqg-topic--standard:nth-child(even),
          .tqg-topic--standard:nth-child(n + 3) {
            grid-template-columns: 44px minmax(0, 1fr);
            grid-template-rows: auto auto;
            align-items: start;
            gap: 0 14px;
          }

          .tqg-topic--standard .tqg-topic__icon {
            grid-column: 1;
            grid-row: 1;
          }

          .tqg-topic--standard .tqg-topic__content {
            grid-column: 2;
            grid-row: 1;
            margin-top: 0;
          }

          .tqg-topic--standard .tqg-topic__arrow {
            grid-column: 2;
            grid-row: 2;
            justify-self: start;
            align-self: start;
            margin: 14px 0 0;
          }

          .tqg-scorecard__cell {
            grid-template-columns: 88px minmax(0, 1fr);
            gap: 12px;
            padding-left: 14px;
            padding-right: 14px;
          }

          .tqg-guide-row {
            grid-template-columns: minmax(0, 1fr) 32px;
            gap: 12px;
          }

          .tqg-guide-row__action {
            justify-self: end;
          }

          .tqg-tool {
            grid-template-columns: 42px minmax(0, 1fr);
            gap: 14px;
          }

          .tqg-tool__icon {
            width: 42px;
            height: 42px;
          }

          .tqg-tool__arrow {
            grid-column: 2;
            justify-self: start;
            margin-top: 10px;
          }

          .tqg-final-cta__panel {
            padding-left: 20px;
            padding-right: 20px;
          }
        }

        @media (max-width: 320px) {
          .tqg-hero h1 {
            font-size: 34px;
          }

          .tqg-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .tqg-scorecard__cell {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .tqg-scorecard__cell::before {
            margin-bottom: 1px;
          }

          .tqg-governance__decision,
          .tqg-governance__role {
            padding-top: 20px;
          }

          .tqg-risk__cell {
            padding-left: 18px;
            padding-right: 18px;
          }
        }


      `}</style>

      {/* 1. Hero */}
      <section className="tqg-hero" aria-labelledby="tqg-page-title">
        <div className="tqg-shell">
          <div className="tqg-hero__content">
            <h1 id="tqg-page-title">Translation Quality &amp; Governance</h1>
            <p className="tqg-hero__lead">
              Practical guidance for defining translation quality, governing terminology and review,
              measuring linguistic performance, validating AI output, and improving multilingual
              content across teams, languages, and markets.
            </p>
            <p className="tqg-hero__support">
              Build fit-for-purpose quality programs that connect business requirements, language
              assets, people, technology, evaluation, approval, and continuous improvement.
            </p>

            <div className="tqg-hero__actions" aria-label="Translation quality resources">
              <a
                className="tqg-button tqg-button--primary"
                href="https://www.stepes.com/resources/translation-quality/#quality-topics"
              >
                Explore Quality Topics
                <ArrowIcon />
              </a>
              <a
                className="tqg-button tqg-button--secondary"
                href="https://www.stepes.com/resources/translation-quality/#featured-quality-guides"
              >
                Browse Featured Guides
              </a>
            </div>
          </div>

          <div className="tqg-lifecycle" aria-label="Continuous translation quality lifecycle">
            <p className="tqg-lifecycle__label">From Requirements to Improvement</p>
            <div className="tqg-lifecycle__track">
              {lifecycle.map((stage) => (
                <div className="tqg-lifecycle__step" key={stage}>
                  <span className="tqg-lifecycle__dot" aria-hidden="true" />
                  <span>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Translation Quality Is a System, Not a Final Check */}
      <section className="tqg-overview" aria-labelledby="quality-system-heading">
        <div className="tqg-shell">
          <div className="tqg-overview__intro">
            <div>
              <span className="tqg-section-kicker">The Enterprise View</span>
              <h2 id="quality-system-heading">Translation Quality Is a System, Not a Final Check</h2>
            </div>

            <div className="tqg-overview__copy">
              <p>
                Translation quality is not determined by one score, one reviewer, or one check at the
                end of a project. It begins with understanding the purpose, audience, risk, and
                requirements of the content.
              </p>
              <p>
                It continues through terminology preparation, workflow selection, translation,
                evaluation, approval, and the reuse of validated feedback. When these elements work
                together, quality becomes more consistent, measurable, and scalable.
              </p>
            </div>
          </div>

          <div className="tqg-principles">
            {qualityPrinciples.map((principle) => (
              <article className="tqg-principle" key={principle.title}>
                <div className="tqg-principle__head">
                  <span className="tqg-icon-surface">
                    <LineIcon name={principle.icon} />
                  </span>
                  <h3>{principle.title}</h3>
                </div>
                <p>{principle.description}</p>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Explore Translation Quality by Topic */}
      <section id="quality-topics" className="tqg-topics" aria-labelledby="quality-topics-heading">
        <div className="tqg-shell">
          <div className="tqg-topics__header">
            <div>
              <span className="tqg-section-kicker">Explore the Resource Hub</span>
              <h2 id="quality-topics-heading">Explore Translation Quality by Topic</h2>
            </div>
            <p className="tqg-topics__intro">
              Find practical guidance for planning, evaluating, governing, and improving multilingual
              quality—from enterprise requirements and terminology ownership to AI validation and
              performance measurement.
            </p>
          </div>

          <div className="tqg-topic-feature">
            {qualityTopics
              .filter((topic) => topic.featured)
              .map((topic) => (
                <a className="tqg-topic tqg-topic--featured" href={topic.href} key={topic.title}>
                  <div className="tqg-topic__content">
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>
                  <ArrowIcon className="tqg-topic__arrow" />
                </a>
              ))}
          </div>

          <div className="tqg-topic-grid">
            {qualityTopics
              .filter((topic) => !topic.featured)
              .map((topic) => (
                <a className="tqg-topic tqg-topic--standard" href={topic.href} key={topic.title}>
                  <span className="tqg-topic__icon">
                    <LineIcon name={topic.icon} />
                  </span>
                  <div className="tqg-topic__content">
                    <h3>{topic.title}</h3>
                    <p>{topic.description}</p>
                  </div>
                  <ArrowIcon className="tqg-topic__arrow" />
                </a>
              ))}
          </div>
        </div>
      </section>

      {/* 4. A Practical Framework for Enterprise Translation Quality */}
      <section className="tqg-framework" aria-labelledby="quality-framework-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <h2 id="quality-framework-heading">A Practical Enterprise Quality Framework</h2>
            </div>
            <p className="tqg-section-intro">
              Reliable quality starts before translation and continues after approval. A connected
              framework helps every team understand what is required, which controls apply, who makes
              decisions, and how validated feedback improves future multilingual content.
            </p>
          </div>

          <div className="tqg-framework__grid">
            {qualityFramework.map((item) => (
              <article className="tqg-framework__step" key={item.step}>
                <span className="tqg-framework__number" aria-hidden="true">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="tqg-framework__link-row">
            <a className="tqg-editorial-link" href="https://www.stepes.com/translation-quality-system/">
              Explore the Stepes Translation Quality System
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 5. How Translation Quality Is Measured */}
      <section className="tqg-measurement" aria-labelledby="quality-measurement-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Quality Evaluation</span>
              <h2 id="quality-measurement-heading">How Translation Quality Is Measured</h2>
            </div>
            <p className="tqg-section-intro">
              Translation quality cannot always be reduced to one universal percentage. The right
              evaluation method should reflect the content, audience, business risk, sample size, and
              purpose of the assessment.
            </p>
          </div>

          <div className="tqg-measurement__layout">
            <div className="tqg-dimensions">
              <div className="tqg-dimensions__head">
                <h3>What Quality Evaluation Can Examine</h3>
                <p>Evaluation criteria should be selected and weighted according to the content and its intended use.</p>
              </div>
              <div className="tqg-dimensions__grid">
                {measurementDimensions.map((dimension) => (
                  <div className="tqg-dimension" key={dimension}>
                    <span className="tqg-dimension__marker" aria-hidden="true" />
                    <span>{dimension}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="tqg-evaluation-methods">
              {evaluationMethods.map((method) => (
                <article className="tqg-evaluation-method" key={method.title}>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="tqg-scorecard">
            <div className="tqg-scorecard__heading">
              <div>
                <h3>An Illustrative LQA Scorecard</h3>
                <p>Structured findings connect each issue to its business impact and corrective action.</p>
              </div>
              <p>This example illustrates a review format. Categories, severity rules, and thresholds should be defined for each program.</p>
            </div>

            <div className="tqg-scorecard__table" role="table" aria-label="Illustrative linguistic quality assurance scorecard">
              <div className="tqg-scorecard__header" role="row">
                <div className="tqg-scorecard__cell" role="columnheader">Category</div>
                <div className="tqg-scorecard__cell" role="columnheader">Severity</div>
                <div className="tqg-scorecard__cell" role="columnheader">Finding</div>
                <div className="tqg-scorecard__cell" role="columnheader">Corrective Action</div>
              </div>
              {lqaExamples.map((item) => (
                <div className="tqg-scorecard__row" role="row" key={`${item.category}-${item.finding}`}>
                  <div className="tqg-scorecard__cell" data-label="Category" role="cell">{item.category}</div>
                  <div className="tqg-scorecard__cell" data-label="Severity" role="cell">{item.severity}</div>
                  <div className="tqg-scorecard__cell" data-label="Finding" role="cell">{item.finding}</div>
                  <div className="tqg-scorecard__cell" data-label="Corrective Action" role="cell">{item.action}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Govern Translation Quality Across Teams and Markets */}
      <section className="tqg-governance" aria-labelledby="quality-governance-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Enterprise Governance</span>
              <h2 id="quality-governance-heading">Govern Translation Quality Across Teams and Markets</h2>
            </div>
            <p className="tqg-section-intro">
              Quality becomes repeatable when ownership and decision rights are clear. Enterprise
              governance connects global standards with local expertise while preserving terminology,
              language assets, approval authority, and accountability.
            </p>
          </div>

          <div className="tqg-governance__lead">
            <h3>Global Standards Should Guide Quality Without Silencing Local Judgment</h3>
            <p>
              Central teams can define requirements, shared assets, and reporting while regional
              specialists confirm linguistic and market suitability. Clear escalation paths prevent
              preferences from becoming bottlenecks and help approved decisions improve future work.
            </p>
          </div>

          <div className="tqg-governance__table" role="table" aria-label="Translation quality governance responsibilities">
            <div className="tqg-governance__header" role="row">
              <div role="columnheader">Governance Area</div>
              <div role="columnheader">Core Decision</div>
              <div role="columnheader">Typical Accountable Role</div>
            </div>
            {governanceRows.map((item) => (
              <div className="tqg-governance__row" role="row" key={item.area}>
                <h3 className="tqg-governance__area" role="cell">{item.area}</h3>
                <p className="tqg-governance__decision" role="cell">{item.decision}</p>
                <p className="tqg-governance__role" role="cell">{item.role}</p>
              </div>
            ))}
          </div>

          <div className="tqg-governance__links">
            <p>
              Exact roles vary by organization and content risk, but every program benefits from documented ownership, controlled language assets, and clear approval paths.
            </p>
            <div className="tqg-governance__link-group">
              <a className="tqg-editorial-link" href="https://www.stepes.com/terminology-management/">
                Terminology Management
                <ArrowIcon />
              </a>
              <a className="tqg-editorial-link" href="https://www.stepes.com/enterprise-translation-management/">
                Enterprise Translation Management
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Match Quality Controls to Content Risk */}
      <section id="quality-by-risk" className="tqg-risk" aria-labelledby="quality-risk-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Risk-Based Quality</span>
              <h2 id="quality-risk-heading">Match Quality Controls to Content Risk</h2>
            </div>
            <p className="tqg-section-intro">
              Different content carries different consequences when an error occurs. A risk-based
              framework helps organizations apply the right combination of technology, linguistic
              expertise, review depth, documentation, and approval without treating every project the
              same way.
            </p>
          </div>

          <div className="tqg-risk__matrix" role="table" aria-label="Risk-based translation quality controls">
            <div className="tqg-risk__header" role="row">
              <div className="tqg-risk__cell" role="columnheader">Content Risk</div>
              <div className="tqg-risk__cell" role="columnheader">Example Content</div>
              <div className="tqg-risk__cell" role="columnheader">Typical Quality Controls</div>
            </div>
            {riskLevels.map((item) => (
              <div className="tqg-risk__row" role="row" key={item.level}>
                <div className="tqg-risk__cell tqg-risk__level" data-label="Content Risk" role="cell">
                  {item.level}
                </div>
                <div className="tqg-risk__cell" data-label="Example Content" role="cell">
                  {item.examples}
                </div>
                <div className="tqg-risk__cell" data-label="Typical Controls" role="cell">
                  {item.controls}
                </div>
              </div>
            ))}
          </div>

          <div className="tqg-risk__principle">
            <h3>Risk-Based Quality Is Not Lower Quality</h3>
            <p>
              It means matching controls, review depth, and evidence to the purpose of the content and
              the consequences of an error. Every workflow should still preserve meaning, required
              terminology, completeness, and usability.
            </p>
          </div>
        </div>
      </section>

      {/* 8. AI Translation Quality Requires Human Governance */}
      <section id="ai-quality-governance" className="tqg-ai-governance" aria-labelledby="ai-quality-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">AI Quality Governance</span>
              <h2 id="ai-quality-heading">AI Translation Quality Requires Human Governance</h2>
            </div>
            <p className="tqg-section-intro">
              AI can increase translation speed and scale, but dependable enterprise use requires more
              than fluent output. Quality depends on representative testing, strong language assets,
              risk-based human oversight, secure workflows, and continuous monitoring.
            </p>
          </div>

          <div className="tqg-ai-governance__statement">
            <h3>Fluency Is Not the Same as Verified Quality</h3>
            <p>
              AI-generated translation can read naturally while omitting content, changing meaning,
              introducing unsupported interpretations, or applying terminology inconsistently. Human
              governance determines how output is tested, when it can be used, who must review it, and
              what evidence is required before release.
            </p>
          </div>

          <div className="tqg-ai-controls">
            {aiGovernanceControls.map((item) => (
              <article className="tqg-ai-control" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>

          <div className="tqg-ai-governance__links">
            <p>
              Connect AI evaluation with the broader controls used to manage translation workflows,
              language assets, human review, security, and enterprise accountability.
            </p>
            <div className="tqg-ai-governance__link-group">
              <a className="tqg-editorial-link tqg-editorial-link--dark" href="https://www.stepes.com/resources/ai-translation-insights/">
                AI Translation Insights
                <ArrowIcon />
              </a>
              <a className="tqg-editorial-link tqg-editorial-link--dark" href="https://www.stepes.com/ai-human-translation-workflow/">
                AI + Human Translation Workflow
                <ArrowIcon />
              </a>
              <a className="tqg-editorial-link tqg-editorial-link--dark" href="https://www.stepes.com/translation-quality-assurance/">
                Translation Quality Assurance
                <ArrowIcon />
              </a>
              <a className="tqg-editorial-link tqg-editorial-link--dark" href="https://www.stepes.com/security/">
                Security &amp; Compliance
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Translation Quality Standards and Frameworks */}
      <section id="quality-standards" className="tqg-standards" aria-labelledby="quality-standards-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <h2 id="quality-standards-heading">Translation Quality Standards and Frameworks</h2>
            </div>
            <p className="tqg-section-intro">
              Standards and evaluation frameworks address different parts of the quality lifecycle.
              Understanding their roles helps organizations select appropriate service requirements,
              evaluation methods, post-editing controls, and quality-management practices.
            </p>
          </div>

          <div className="tqg-standards__lead">
            <h3>Use Standards to Clarify Requirements—not Replace Judgment</h3>
            <p>
              International standards, client specifications, internal policies, industry obligations,
              and content-specific risk controls should work together. No single framework determines
              the right workflow for every language, audience, technology, or business use case.
            </p>
          </div>

          <div className="tqg-standards__list">
            {qualityStandards.map((item) => (
              <article className="tqg-standard" key={item.code}>
                <p className="tqg-standard__code">{item.code}</p>
                <div className="tqg-standard__content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="tqg-standards__related">
            <h3>Related Quality-Management Standards</h3>
            <p>
              ISO 9001 and ISO 13485 can support broader organizational and industry-specific quality
              systems. They complement—but do not replace—translation-specific service, evaluation,
              post-editing, and client requirements.
            </p>
          </div>

          <div className="tqg-standards__links">
            <a className="tqg-editorial-link" href="https://www.stepes.com/iso-certified-translation-services/">
              Review Stepes ISO Certifications
              <ArrowIcon />
            </a>
            <a className="tqg-editorial-link" href="https://www.stepes.com/resources/translation-quality-standards/">
              Explore Translation Quality Standards
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>


      {/* 10. Featured Translation Quality Guides */}
      <section id="featured-quality-guides" className="tqg-guides" aria-labelledby="quality-guides-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Featured Quality Resources</span>
              <h2 id="quality-guides-heading">Featured Translation Quality Guides</h2>
            </div>
            <p className="tqg-section-intro">
              Go deeper into the methods, decisions, and operating models behind dependable multilingual
              quality. These guides connect practical implementation with standards, measurement,
              terminology governance, and human oversight.
            </p>
          </div>

          <div className="tqg-guides__layout">
            <article className="tqg-guide-feature">
              <div className="tqg-guide-feature__content">
                <span className="tqg-guide-feature__label">{featuredQualityGuide.label}</span>
                <h3>{featuredQualityGuide.title}</h3>
                <p className="tqg-guide-feature__description">{featuredQualityGuide.description}</p>
                <ul className="tqg-guide-feature__topics" aria-label="Guide topics">
                  {featuredQualityGuide.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
              <div className="tqg-guide-feature__footer">
                <a className="tqg-editorial-link" href={featuredQualityGuide.href}>
                  Explore the Enterprise Guide
                  <ArrowIcon />
                </a>
              </div>
            </article>

            <div className="tqg-guides__list">
              {supportingQualityGuides.map((guide) => (
                <a className="tqg-guide-row" href={guide.href} key={guide.title}>
                  <span>
                    <span className="tqg-guide-row__label">{guide.label}</span>
                    <h3>{guide.title}</h3>
                    <p>{guide.description}</p>
                  </span>
                  <span className="tqg-guide-row__action" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="tqg-guides__footer">
            <p>
              Together, these resources provide a practical path from quality planning and evaluation
              to terminology governance, AI validation, reviewer alignment, and measurable improvement.
            </p>
            <a className="tqg-editorial-link" href="https://www.stepes.com/resources/translation-quality/#quality-tools">
              Explore Quality Tools and Templates
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      {/* 11. Translation Quality Tools and Templates */}
      <section id="quality-tools" className="tqg-tools" aria-labelledby="quality-tools-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Practical Resources</span>
              <h2 id="quality-tools-heading">Translation Quality Tools and Templates</h2>
            </div>
            <p className="tqg-section-intro">
              Turn quality principles into repeatable working practices. Use these resources to define
              requirements, assess risk, structure linguistic review, govern terminology, and give
              reviewers clearer guidance.
            </p>
          </div>

          <div className="tqg-tools__grid">
            {qualityTools.map((tool) => (
              <a className="tqg-tool" href={tool.href} key={tool.title}>
                <span className="tqg-tool__icon">
                  <LineIcon name={tool.icon} size={23} />
                </span>
                <span className="tqg-tool__content">
                  <span className="tqg-tool__type">{tool.type}</span>
                  <h3>{tool.title}</h3>
                  <p>{tool.description}</p>
                </span>
                <ArrowIcon className="tqg-tool__arrow" />
              </a>
            ))}
          </div>

          <p className="tqg-tools__note">
            Each resource includes practical guidance for adapting the template to your content,
            workflow, reviewers, quality requirements, and broader translation governance program.
          </p>
        </div>
      </section>

      {/* 12. Translation Quality in Practice */}
      <section id="quality-in-practice" className="tqg-practice" aria-labelledby="quality-practice-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Enterprise Applications</span>
              <h2 id="quality-practice-heading">Translation Quality in Practice</h2>
            </div>
            <p className="tqg-section-intro">
              Quality becomes credible when requirements, ownership, review, evidence, and improvement
              are connected to real content risks. These common enterprise applications show how the
              framework can be adapted without forcing every project into the same workflow.
            </p>
          </div>

          <div className="tqg-practice__lead">
            <h3>From Quality Principles to Verifiable Controls</h3>
            <p>
              A strong quality program does more than describe a process. It shows what was required,
              which controls were applied, who made key decisions, what evidence was retained, and how
              approved feedback strengthens future multilingual content.
            </p>
          </div>

          <div className="tqg-practice__rows">
            {qualityPracticeScenarios.map((scenario) => (
              <article className="tqg-practice__row" key={scenario.title}>
                <div className="tqg-practice__title">
                  <span className="tqg-practice__label">{scenario.label}</span>
                  <h3>{scenario.title}</h3>
                  <p className="tqg-practice__context">{scenario.context}</p>
                </div>
                <div className="tqg-practice__details">
                  <div className="tqg-practice__detail">
                    <span className="tqg-practice__detail-label">Quality Risk</span>
                    <p>{scenario.risk}</p>
                  </div>
                  <div className="tqg-practice__detail">
                    <span className="tqg-practice__detail-label">Governance &amp; Controls</span>
                    <p>{scenario.controls}</p>
                  </div>
                  <div className="tqg-practice__detail">
                    <span className="tqg-practice__detail-label">Evidence of Control</span>
                    <p>{scenario.evidence}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="tqg-practice__footer">
            <p>
              These examples illustrate common quality patterns rather than a universal prescription.
              The right controls depend on content purpose, audience, language, risk, contractual terms,
              and regulatory requirements.
            </p>
            <div className="tqg-practice__links">
              <a className="tqg-editorial-link" href="https://www.stepes.com/case-studies/">
                Explore Stepes Case Studies
                <ArrowIcon />
              </a>
              <a className="tqg-editorial-link" href="https://www.stepes.com/translation-quality-system/">
                Explore the Stepes Quality System
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* 13. How Stepes Supports Enterprise Translation Quality */}
      <section className="tqg-support" aria-labelledby="stepes-quality-support-heading">
        <div className="tqg-shell">
          <div className="tqg-section-header">
            <div>
              <span className="tqg-section-kicker">Stepes Quality Capabilities</span>
              <h2 id="stepes-quality-support-heading">How Stepes Supports Enterprise Translation Quality</h2>
            </div>
            <p className="tqg-section-intro">
              Connect quality requirements, language assets, secure technology, qualified human review,
              and enterprise governance through a coordinated multilingual operating model. Explore the
              Stepes capabilities that support quality from planning through release and improvement.
            </p>
          </div>

          <div className="tqg-support__grid">
            {qualitySupportGroups.map((group) => (
              <section className="tqg-support__group" aria-labelledby={`support-${group.title.replace(/\s+/g, "-").toLowerCase()}`} key={group.title}>
                <h3 id={`support-${group.title.replace(/\s+/g, "-").toLowerCase()}`}>{group.title}</h3>
                <p className="tqg-support__group-intro">{group.description}</p>
                <div className="tqg-support__links">
                  {group.links.map((link) => (
                    <a className="tqg-support__link" href={link.href} key={link.title}>
                      <span className="tqg-support__link-title">
                        <span>{link.title}</span>
                        <ArrowIcon />
                      </span>
                      <p>{link.description}</p>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Translation Quality and Governance FAQ */}
      <section className="tqg-faq" aria-labelledby="translation-quality-faq-heading">
        <div className="tqg-shell">
          <div className="tqg-faq__layout">
            <div className="tqg-faq__intro">
              <h2 id="translation-quality-faq-heading">Translation Quality and Governance FAQ</h2>
              <p>
                Find clear answers to common questions about quality management, linguistic evaluation,
                AI validation, reviewer responsibilities, terminology ownership, and translation standards.
              </p>
              <div className="tqg-faq__links">
                <a className="tqg-editorial-link" href="https://www.stepes.com/resources/translation-quality-management/">
                  Translation Quality Management Guide
                  <ArrowIcon />
                </a>
                <a className="tqg-editorial-link" href="https://www.stepes.com/resources/linguistic-quality-assurance/">
                  Linguistic Quality Assurance Guide
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="tqg-faq__panel">
              {translationQualityFaqs.map((item) => (
                <details className="tqg-faq__item" key={item.question}>
                  <summary className="tqg-faq__question">
                    <span>{item.question}</span>
                    <span className="tqg-faq__indicator" aria-hidden="true" />
                  </summary>
                  <p className="tqg-faq__answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <section className="tqg-final-cta" aria-labelledby="translation-quality-cta-heading">
        <div className="tqg-shell">
          <div className="tqg-final-cta__panel">
            <div className="tqg-final-cta__content">
              <span className="tqg-section-kicker">Build Your Quality Program</span>
              <h2 id="translation-quality-cta-heading">Build a Stronger Quality Framework for Global Content</h2>
              <p>
                Connect terminology governance, AI-assisted workflows, professional human review,
                quality measurement, and enterprise controls around the purpose and risk of your multilingual content.
              </p>
            </div>
            <div className="tqg-final-cta__actions">
              <a className="tqg-button tqg-button--primary" href="https://www.stepes.com/contact-us/">
                Talk to Our Team
                <ArrowIcon />
              </a>
              <a className="tqg-button tqg-button--secondary" href="https://www.stepes.com/translation-quality-system/">
                Explore the Stepes Quality System
              </a>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
