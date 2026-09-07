import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  Braces,
  Check,
  ChevronDown,
  CircleCheckBig,
  Code2,
  FileCheck2,
  FileDiff,
  Globe2,
  Languages,
  Layers3,
  Link2,
  ListChecks,
  MessageSquareText,
  RefreshCw,
  SearchCheck,
  ShieldCheck,
  Tags,
  TestTube2,
  Workflow,
  Zap,
} from "lucide-react";

const canonicalUrl =
  "https://www.stepes.com/resources/localization-guides/continuous-software-localization/";
const sectionUrl = (id) => `${canonicalUrl}#${id}`;

const links = {
  localizationGuides: "https://www.stepes.com/resources/localization-guides/",
  completeGuide:
    "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/",
  testingChecklist:
    "https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/",
  internationalization:
    "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/",
  softwareLocalizationServices: "https://www.stepes.com/software-localization-services/",
  softwareSaas: "https://www.stepes.com/software-translation-services/",
  softwareLocalizationApi: "https://www.stepes.com/developers/software-localization-api/",
  translationMemory: "https://www.stepes.com/translation-memory-management/",
  terminology: "https://www.stepes.com/terminology-management/",
  translationQa: "https://www.stepes.com/translation-quality-assurance/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  integrations: "https://www.stepes.com/integrations/",
  contact: "https://www.stepes.com/contact-us/",
  aiHumanWorkflow:
    "https://www.stepes.com/resources/translation-guides/ai-human-translation-workflows/",
};

const tocItems = [
  { id: "what-is-continuous-software-localization", label: "What Continuous Localization Means" },
  { id: "why-traditional-workflows-fall-behind", label: "Why Traditional Workflows Fall Behind" },
  { id: "prepare-software", label: "Prepare Software for Continuous Localization" },
  { id: "release-loop", label: "Build the Continuous Localization Loop" },
  { id: "manage-content-changes", label: "Manage New and Modified Strings" },
  { id: "language-assets", label: "Use Translation Memory and Terminology" },
  { id: "risk-routing", label: "Route AI and Human Review" },
  { id: "translation-context", label: "Give Linguists the Right Context" },
  { id: "quality-across-releases", label: "Protect Quality Across Releases" },
  { id: "branches-and-releases", label: "Coordinate Branches and Versions" },
  { id: "roles-and-governance", label: "Define Roles and Governance" },
  { id: "performance-metrics", label: "Measure Performance" },
  { id: "implementation-roadmap", label: "Implement in Phases" },
  { id: "maturity-model", label: "Assess Localization Maturity" },
  { id: "failure-modes", label: "Avoid Common Failure Modes" },
  { id: "readiness-checklist", label: "Readiness Checklist" },
  { id: "frequently-asked-questions", label: "Frequently Asked Questions" },
];

const takeaways = [
  {
    title: "Build Localization Into Product Delivery",
    text: "Continuous localization keeps multilingual content aligned with recurring development and release cycles instead of waiting for large end-of-cycle handoffs.",
  },
  {
    title: "Treat Automation as One Layer",
    text: "Source readiness, language assets, context, review rules, quality controls, ownership, and reporting are as important as system connections.",
  },
  {
    title: "Handle Changes Intelligently",
    text: "New, modified, unchanged, and obsolete strings should follow different processing and approval rules.",
  },
  {
    title: "Route by Risk",
    text: "AI, professional translation, specialist review, and testing should be matched to content visibility, ambiguity, and business impact.",
  },
  {
    title: "Make Readiness Visible",
    text: "Localization status should inform release decisions rather than remain a separate translation milestone.",
  },
  {
    title: "Pilot Before You Scale",
    text: "Standardize the current process, prove the workflow with a controlled product and language set, then expand gradually.",
  },
];

const lifecycleStages = [
  {
    number: "01",
    title: "Source Change",
    text: "A product, engineering, UX, or content team creates or updates customer-facing software content.",
    icon: Code2,
  },
  {
    number: "02",
    title: "Change Detection",
    text: "The workflow identifies new, modified, unchanged, and obsolete strings at the correct file, key, branch, or version.",
    icon: FileDiff,
  },
  {
    number: "03",
    title: "Content Validation",
    text: "Files, keys, placeholders, tags, source completeness, and required context are checked before translation begins.",
    icon: SearchCheck,
  },
  {
    number: "04",
    title: "Language Assets",
    text: "Approved Translation Memory, terminology, style guidance, and project instructions are applied.",
    icon: Tags,
  },
  {
    number: "05",
    title: "Translation and Review",
    text: "Content follows the route appropriate to its risk, visibility, novelty, market, and available context.",
    icon: Languages,
  },
  {
    number: "06",
    title: "Automated QA",
    text: "Rule-based checks validate technical structure, placeholders, tags, terminology, and other predictable conditions.",
    icon: FileCheck2,
  },
  {
    number: "07",
    title: "In-Context Validation",
    text: "Linguists and QA teams review the localized experience in a build, preview, screenshot, or staging environment.",
    icon: TestTube2,
  },
  {
    number: "08",
    title: "Localized Build",
    text: "Approved resources return to the correct repository, branch, build, or content environment with technical integrity preserved.",
    icon: Braces,
  },
  {
    number: "09",
    title: "Multilingual Release",
    text: "Translation, quality, technical, and market requirements are included in the product release decision.",
    icon: Globe2,
  },
  {
    number: "10",
    title: "Feedback and Improvement",
    text: "Corrections and approved decisions strengthen future language assets, context, source content, and routing rules.",
    icon: RefreshCw,
  },
];

const changeRows = [
  ["New string", "Translate, review, validate, and test according to the content route."],
  ["Minor nonsemantic edit", "Confirm whether the existing translation remains valid before creating unnecessary rework."],
  ["Meaning-changing edit", "Retranslate and complete the required linguistic and product review."],
  ["Placeholder or variable change", "Run structural validation and linguistic review because grammar or message behavior may change."],
  ["Approved terminology change", "Update affected translations and related language assets under controlled ownership."],
  ["Removed string", "Mark the content obsolete and retain appropriate version or audit history."],
  ["Unchanged approved string", "Preserve the validated translation without unnecessary retranslation."],
  ["Unverified legacy string", "Validate the translation before allowing automatic reuse in a current release."],
];

const routingRows = [
  {
    category: "Repetitive, Lower-Risk Content",
    examples: "Routine settings, recurring labels, and low-impact status messages",
    route:
      "Approved reuse, automation or AI assistance where suitable, automated QA, and targeted validation.",
  },
  {
    category: "Standard Customer-Facing Content",
    examples: "Navigation, onboarding instructions, notifications, and general feature descriptions",
    route:
      "Professional translation or AI-assisted translation with professional human review and quality assurance.",
  },
  {
    category: "High-Visibility Product Content",
    examples: "Core user journeys, first-run experiences, conversion screens, and primary dashboards",
    route: "Experienced product linguist review plus in-context validation.",
  },
  {
    category: "High-Risk Content",
    examples: "Security, privacy, legal, financial, medical, regulated, or safety-related language",
    route:
      "Qualified subject-matter translation, independent review where required, controlled approval, and testing.",
  },
  {
    category: "Novel or Ambiguous Content",
    examples: "New features, compressed UX copy, brand language, and unfamiliar interactions",
    route: "Human translation with complete context and access to product clarification.",
  },
  {
    category: "Previously Approved Content",
    examples: "Established strings with verified meaning and unchanged product context",
    route: "Preserve the approved translation and validate only when its context changes.",
  },
];

const roleRows = [
  ["Product Managers", "Define market and release priorities, confirm scope, resolve product decisions, and align feature timing."],
  ["Developers and Localization Engineers", "Externalize content, maintain files and keys, protect technical elements, implement integrations, and resolve build issues."],
  ["UX Writers and Content Designers", "Create localization-ready source content, provide context, maintain product language, and resolve ambiguity."],
  ["Localization Program Managers", "Design workflows, coordinate languages, manage exceptions, maintain visibility, and track readiness."],
  ["Translators and Linguistic Reviewers", "Translate and review content, apply approved language assets, raise questions, and validate market suitability."],
  ["Quality Assurance Teams", "Perform linguistic, cosmetic, functional, locale, and regression testing and verify corrections."],
  ["Regional Stakeholders", "Provide market expertise and complete defined reviews without bypassing terminology and workflow controls."],
  ["Release Managers", "Include localization status in release decisions and coordinate version and deployment requirements."],
  ["Security, Legal, or Regulatory Stakeholders", "Review sensitive or regulated content according to defined risk and approval requirements."],
];

const metricGroups = [
  {
    title: "Delivery",
    icon: Zap,
    items: [
      "Time from source approval to localized completion",
      "Percentage of required languages ready by release",
      "Localization delay relative to the source release",
      "Emergency or out-of-cycle localization volume",
    ],
  },
  {
    title: "Reuse and Efficiency",
    icon: RefreshCw,
    items: [
      "Approved Translation Memory reuse",
      "New, modified, unchanged, and obsolete string mix",
      "Average review effort and queue time",
      "Rework caused by source changes or missing context",
    ],
  },
  {
    title: "Quality",
    icon: ShieldCheck,
    items: [
      "Issues by category and severity",
      "Terminology and placeholder compliance",
      "Reopened strings and recurring defects",
      "Issues found before release versus after release",
    ],
  },
  {
    title: "Workflow Health",
    icon: Workflow,
    items: [
      "Time waiting for clarification",
      "Integration and build failures",
      "Unresolved ownership issues",
      "Exceptions to the standard workflow",
    ],
  },
];

const implementationPhases = [
  {
    number: "01",
    title: "Assess and Standardize",
    text: "Document the current workflow, identify delays and manual handoffs, review internationalization readiness, stabilize files and terminology, assign owners, and select baseline metrics.",
  },
  {
    number: "02",
    title: "Connect and Pilot",
    text: "Choose one product area and a manageable language set. Connect source changes to localization, retain approval controls, return resources to a testable destination, and document exceptions.",
  },
  {
    number: "03",
    title: "Introduce Risk-Based Routing",
    text: "Classify content by visibility, complexity, novelty, and business impact. Define routes for reuse, AI assistance, professional translation, specialist review, and escalation.",
  },
  {
    number: "04",
    title: "Integrate Quality and Release Gates",
    text: "Add automated validation, in-context review, regression testing, and clear blocking conditions. Make localization readiness visible alongside other release requirements.",
  },
  {
    number: "05",
    title: "Scale and Optimize",
    text: "Expand to more products and languages after the pilot is stable. Improve context, refine thresholds, strengthen reporting, and use performance data to remove bottlenecks.",
  },
];

const maturityRows = [
  ["Reactive", "Late handoffs, manual files, limited context, and localized releases that frequently lag.", "Document the current workflow and assign ownership."],
  ["Repeatable", "Standard files, recurring batches, basic terminology, and defined reviewers.", "Stabilize source content and language assets."],
  ["Connected", "Automated synchronization, change detection, and structured delivery.", "Add contextual metadata and risk-based routing."],
  ["Governed", "Quality gates, approval controls, terminology governance, and reporting.", "Improve measurement and exception management."],
  ["Optimized", "Context-rich workflows, scalable automation, and measurable improvement across releases.", "Continue refining thresholds, source quality, and market feedback."],
];

const failureRows = [
  ["Automating an unstable process", "Existing ownership and quality problems move faster.", "Standardize the workflow before automating it."],
  ["Treating every string equally", "High-risk content may receive too little review while low-risk content receives too much.", "Route content according to risk and product impact."],
  ["Translating unstable source strings", "Repeated edits create rework and invalidate approvals.", "Establish source approval and change-control rules."],
  ["Providing insufficient context", "Linguists make avoidable assumptions and reviewers reopen work.", "Attach screenshots, metadata, comments, and user context."],
  ["Reusing unvalidated Translation Memory", "Legacy errors spread into new releases.", "Apply approval status, cleanup, and governance."],
  ["Allowing uncontrolled regional rewrites", "Terminology and meaning become inconsistent.", "Define reviewer scope, criteria, and turnaround expectations."],
  ["Bypassing QA for frequent releases", "Structural, linguistic, and visual defects reach users.", "Automate repeatable checks and retain targeted human validation."],
  ["Ignoring branch strategy", "Translations may be lost, duplicated, or applied to the wrong version.", "Align localization objects with branches and releases."],
  ["Measuring only translated volume", "Volume does not demonstrate readiness or quality.", "Track delay, readiness, exceptions, reuse, and defects."],
  ["Scaling too quickly", "An unproven workflow spreads across products and languages.", "Pilot, measure, correct, and expand gradually."],
];

const checklistGroups = [
  {
    title: "Product and Source Readiness",
    items: [
      "User-facing content is externalized.",
      "Resource files use stable structures and persistent translation keys.",
      "Variables, placeholders, tags, and technical syntax are protected.",
      "The product supports relevant locale behavior and writing directions.",
      "Interfaces accommodate different scripts and text lengths.",
      "Source strings follow consistent content standards.",
    ],
  },
  {
    title: "Language Assets",
    items: [
      "Translation Memory has an accountable owner.",
      "Approved product terminology is available.",
      "Legacy translations have been reviewed appropriately.",
      "Obsolete content can be identified and managed.",
      "Language-asset updates follow a controlled approval process.",
    ],
  },
  {
    title: "Workflow",
    items: [
      "New and modified content can be detected.",
      "Source validation occurs before translation.",
      "Strings can follow different routes according to risk.",
      "Clarifications have visible owners and reusable answers.",
      "Translations return to the correct project, version, or branch.",
      "Workflow exceptions are recorded and resolved.",
    ],
  },
  {
    title: "Quality and Governance",
    items: [
      "Structural checks are automated where appropriate.",
      "Linguistic review and release-blocking criteria are documented.",
      "In-context validation and regression testing are available.",
      "Product, engineering, localization, QA, regional, and release responsibilities are assigned.",
      "High-risk content has controlled approval requirements.",
      "Localization readiness and performance are reviewed regularly.",
    ],
  },
];

const faqs = [
  {
    question: "What Is Continuous Software Localization?",
    answer:
      "Continuous software localization is an operating model that keeps translated software content aligned with recurring product changes and releases. It connects change detection, Translation Memory, terminology, translation, review, quality assurance, localized builds, and release coordination in one repeatable process.",
  },
  {
    question: "Is Continuous Localization the Same as Localization Automation?",
    answer:
      "No. Automation reduces manual handoffs and connects systems, but a complete continuous localization model also requires internationalization readiness, source-content standards, language assets, context, review criteria, quality controls, ownership, and release governance.",
  },
  {
    question: "Does Continuous Localization Require CI/CD?",
    answer:
      "Not necessarily. Continuous localization can integrate with continuous integration and continuous delivery pipelines, but it can also support scheduled release trains, sprint-based delivery, weekly updates, or other recurring development models. The essential requirement is a repeatable connection between product changes and localization.",
  },
  {
    question: "Should Every Source Change Trigger Translation Immediately?",
    answer:
      "No. Organizations may use source-approval stages, localization windows, batching thresholds, feature status, or risk rules. A draft string for an experimental feature and an urgent security instruction should not be handled identically.",
  },
  {
    question: "Can AI Translation Be Used for Continuous Software Localization?",
    answer:
      "Yes, where the content, language pair, quality requirements, and business risk make it appropriate. AI-assisted translation should operate with approved terminology, Translation Memory, automated checks, and professional human review wherever accuracy, nuance, or product impact requires it.",
  },
  {
    question: "How Should Modified Strings Be Handled?",
    answer:
      "Modified strings should be evaluated according to the nature of the change. A punctuation correction may not affect the translation, while a change to meaning, terminology, variables, instructions, or legal significance may require retranslation and review.",
  },
  {
    question: "How Do Translation Memory and Terminology Support Continuous Localization?",
    answer:
      "Translation Memory preserves approved language for reuse across updates, while Terminology Management defines how important product concepts should be translated and used. Together they reduce repetitive work, improve consistency, guide AI-assisted translation, and support reviewer decisions.",
  },
  {
    question: "Does Continuous Localization Eliminate String Freezes?",
    answer:
      "No. Short, controlled string freezes may still support final testing, regulated approval, mobile-store submission, or a coordinated global launch. Continuous localization reduces the need for long freezes caused by late translation backlogs.",
  },
  {
    question: "How Can Teams Prevent Review From Delaying Every Release?",
    answer:
      "Use risk-based routing, preserve unchanged approved content, provide adequate context, define reviewer scope, establish turnaround expectations, and avoid sending every string through the same approval process.",
  },
  {
    question: "What Is the Best Way to Start?",
    answer:
      "Begin with one controlled product area and a manageable language set. Standardize the current workflow, assign owners, connect content changes to localization, preserve review controls, define measurable release criteria, and scale only after the pilot is reliable.",
  },
];

const relatedResources = [
  {
    eyebrow: "FLAGSHIP GUIDE",
    title: "The Complete Guide to Software and SaaS Localization",
    text: "Plan a multilingual program across product interfaces, websites, onboarding, documentation, support, testing, and recurring releases.",
    href: links.completeGuide,
  },
  {
    eyebrow: "QUALITY & TESTING",
    title: "Software Localization Testing Checklist",
    text: "Review linguistic, cosmetic, functional, layout, encoding, and locale behavior before localized software reaches users.",
    href: links.testingChecklist,
  },
  {
    eyebrow: "GLOBAL PRODUCT READINESS",
    title: "Internationalization vs. Localization",
    text: "Understand how internationalization prepares software for global use and how localization adapts the experience for each market.",
    href: links.internationalization,
  },
  {
    eyebrow: "DEVELOPER RESOURCE",
    title: "Software Localization API",
    text: "Connect resource files, translation keys, branches, locales, review states, quality checks, and localized builds.",
    href: links.softwareLocalizationApi,
  },
];

const sourceLinks = [
  {
    title: "Internationalization and Localization",
    organization: "World Wide Web Consortium (W3C)",
    href: "https://www.w3.org/International/questions/qa-i18n",
    external: true,
  },
  {
    title: "Unicode Common Locale Data Repository",
    organization: "Unicode Consortium",
    href: "https://cldr.unicode.org/",
    external: true,
  },
  {
    title: "Software Localization API",
    organization: "Stepes",
    href: links.softwareLocalizationApi,
    external: false,
  },
  {
    title: "Translation Workflow Automation",
    organization: "Stepes",
    href: links.workflowAutomation,
    external: false,
  },
  {
    title: "Software Localization Services",
    organization: "Stepes",
    href: links.softwareLocalizationServices,
    external: false,
  },
];

function Eyebrow({ children, dark = false }) {
  return (
    <p
      className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${
        dark ? "text-[#F2A7C6]" : "text-[#C11D63]"
      }`}
    >
      {children}
    </p>
  );
}

function TextLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-1.5 font-semibold text-[#C11D63] underline decoration-[#C11D63]/25 underline-offset-4 transition hover:text-[#9F1D55] hover:decoration-[#9F1D55]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/35 focus-visible:ring-offset-4"
    >
      {children}
      {external ? <ArrowUpRight className="h-4 w-4 shrink-0" /> : <ArrowRight className="h-4 w-4 shrink-0" />}
    </a>
  );
}

function CheckItem({ children, compact = false }) {
  return (
    <li className={`flex items-start gap-3 text-slate-700 ${compact ? "text-[16px] leading-7" : "text-[17px] leading-8"}`}>
      <span className={`${compact ? "mt-[7px]" : "mt-[8px]"} flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#FDF2F7]`}>
        <Check className="h-3 w-3 stroke-[2.2] text-[#C11D63]" aria-hidden="true" />
      </span>
      <span>{children}</span>
    </li>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false }) {
  return (
    <div className="max-w-[800px]">
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] sm:text-[32px] lg:text-[36px] ${
          dark ? "text-white" : "text-slate-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-5 max-w-[780px] text-[17px] leading-8 sm:text-[18px] ${dark ? "text-slate-300" : "text-slate-600"}`}>
          {intro}
        </p>
      ) : null}
    </div>
  );
}

function ResponsiveTable({ headers, rows, className = "" }) {
  return (
    <div className={`wide-module overflow-hidden rounded-[24px] border border-[#E5E8ED] bg-white ${className}`}>
      <table className="responsive-table w-full border-collapse text-left">
        <thead>
          <tr className="bg-[#F8F9FB]">
            {headers.map((header) => (
              <th key={header} scope="col" className="border-b border-[#E5E8ED] px-6 py-4 text-[16px] font-semibold leading-6 text-slate-950">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={`${row[0]}-${rowIndex}`} className="border-b border-[#ECEEF2] last:border-b-0">
              {row.map((cell, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  data-label={headers[cellIndex]}
                  className={`px-6 py-5 text-[16px] leading-7 ${cellIndex === 0 ? "font-semibold text-slate-950" : "text-slate-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function StepesContinuousSoftwareLocalizationResourceGuideWireframe() {
  const [tocOpen, setTocOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(tocItems[0].id);

  useEffect(() => {
    const elements = tocItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!elements.length || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -70% 0px", threshold: [0, 1] }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased">
      <style>{`
        html { scroll-behavior: smooth; }
        .article-copy p + p { margin-top: 1.25rem; }
        .article-copy h3 { scroll-margin-top: 112px; }
        .wide-module { width: 100%; }
        details.faq-item > summary::-webkit-details-marker { display: none; }
        details.faq-item > summary { list-style: none; }
        details.faq-item[open] .faq-chevron { transform: rotate(180deg); }
        @media (min-width: 1200px) {
          .wide-module { width: calc(100% + 64px); margin-left: -32px; }
        }
        @media (max-width: 767px) {
          .responsive-table,
          .responsive-table thead,
          .responsive-table tbody,
          .responsive-table tr,
          .responsive-table th,
          .responsive-table td { display: block; width: 100%; }
          .responsive-table thead { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
          .responsive-table tr { padding: 18px 20px; border-bottom: 1px solid #ECEEF2; }
          .responsive-table tr:last-child { border-bottom: 0; }
          .responsive-table td { padding: 0; border: 0; }
          .responsive-table td + td { margin-top: 14px; }
          .responsive-table td::before {
            content: attr(data-label);
            display: block;
            margin-bottom: 4px;
            color: #C11D63;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            line-height: 1.4;
            text-transform: uppercase;
          }
        }
      `}</style>

      {/* Guide Hero */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_5%,rgba(193,29,99,0.08),transparent_31%),radial-gradient(circle_at_88%_35%,rgba(193,29,99,0.055),transparent_29%)]" />
        <div className="relative mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-[80px] sm:px-6 md:px-10 md:py-[92px] lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-14 lg:py-[104px]">
          <div className="max-w-[760px]">
            <Eyebrow>Localization Guide</Eyebrow>
            <h1 className="mt-5 max-w-[720px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[48px]">
              Continuous Software Localization
            </h1>
            <p className="mt-6 max-w-[720px] text-[18px] leading-8 text-slate-600">
              Learn how to connect recurring software development with translation, review,
              terminology, quality assurance, and coordinated multilingual releases.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[14px] font-medium text-slate-500">
              <span className="inline-flex items-center gap-2">
                <BookOpenText className="h-4 w-4 text-[#C11D63]" aria-hidden="true" />
                Workflow and Technology Guide
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" aria-hidden="true" />
              <span>Software &amp; SaaS Localization</span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={sectionUrl("what-is-continuous-software-localization")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(193,29,99,0.16)] transition hover:bg-[#A71954] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/40 focus-visible:ring-offset-4"
              >
                Explore the Guide
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={sectionUrl("readiness-checklist")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9DEE5] bg-white px-6 py-3 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/35 hover:text-[#9F1D55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 focus-visible:ring-offset-4"
              >
                Jump to the Checklist
                <ListChecks className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none">
            <div className="absolute -inset-8 rounded-full bg-[#FDF2F7]/70 blur-3xl" aria-hidden="true" />
            <div className="relative rounded-[30px] border border-[#E6E9EE] bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center justify-between border-b border-[#ECEEF2] pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C11D63]">Continuous Release Loop</p>
                  <p className="mt-2 text-[18px] font-semibold text-slate-950">From source change to global release</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7]">
                  <RefreshCw className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                </div>
              </div>

              <div className="relative mt-6 space-y-3">
                {[
                  { icon: Code2, title: "Detect Product Changes", detail: "New and modified strings" },
                  { icon: Languages, title: "Translate and Review", detail: "Language assets and risk routing" },
                  { icon: SearchCheck, title: "Validate the Experience", detail: "Automated and in-context QA" },
                  { icon: Globe2, title: "Coordinate the Release", detail: "Build readiness and feedback" },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="relative flex items-center gap-4 rounded-[18px] border border-[#ECEEF2] bg-[#FCFCFD] p-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#E5E8ED]">
                        <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[16px] font-semibold leading-6 text-slate-950">{item.title}</p>
                        <p className="mt-0.5 text-[14px] leading-6 text-slate-500">{item.detail}</p>
                      </div>
                      <span className="ml-auto text-[12px] font-semibold text-slate-400">0{index + 1}</span>
                    </div>
                  );
                })}
                <div className="flex items-center justify-center gap-2 pt-2 text-[14px] font-semibold text-[#9F1D55]">
                  <RefreshCw className="h-4 w-4" aria-hidden="true" />
                  Every release improves the next
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="border-y border-[#ECEEF2] bg-[#FCFCFD]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-16">
            <div>
              <Eyebrow>Key Takeaways</Eyebrow>
              <h2 className="mt-4 max-w-[420px] text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                A Reliable Operating Model, Not Just a Faster Handoff
              </h2>
              <p className="mt-5 max-w-[440px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                The strongest programs connect product architecture, language assets, human
                judgment, quality controls, and release governance.
              </p>
            </div>

            <div className="grid gap-x-10 gap-y-0 sm:grid-cols-2">
              {takeaways.map((item, index) => (
                <div key={item.title} className={`py-5 ${index > 1 ? "border-t border-[#E5E8ED]" : index > 0 ? "sm:border-0" : ""} ${index === 1 ? "border-t border-[#E5E8ED] sm:border-t-0" : ""}`}>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FDF2F7] text-[12px] font-semibold text-[#C11D63]">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-[18px] font-semibold leading-7 text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-[16px] leading-7 text-slate-600">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mobile and Tablet TOC */}
      <section className="bg-white lg:hidden">
        <div className="mx-auto w-full max-w-[1280px] px-5 pt-10 sm:px-6 md:px-10">
          <div className="rounded-[20px] border border-[#E5E8ED] bg-white shadow-sm">
            <button
              type="button"
              aria-expanded={tocOpen}
              aria-controls="mobile-guide-toc"
              onClick={() => setTocOpen((value) => !value)}
              className="flex min-h-14 w-full items-center justify-between gap-4 rounded-[20px] px-5 py-4 text-left text-[16px] font-semibold text-slate-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/35"
            >
              <span className="inline-flex items-center gap-2">
                <ListChecks className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                In This Guide
              </span>
              <ChevronDown className={`h-5 w-5 text-slate-500 transition ${tocOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {tocOpen ? (
              <nav id="mobile-guide-toc" aria-label="Guide sections" className="border-t border-[#ECEEF2] px-5 py-3">
                {tocItems.map((item) => (
                  <a
                    key={item.id}
                    href={sectionUrl(item.id)}
                    onClick={() => setTocOpen(false)}
                    className="flex min-h-11 items-center border-b border-[#F0F1F4] py-2.5 text-[16px] font-medium leading-6 text-slate-700 last:border-b-0 hover:text-[#C11D63] focus:outline-none focus-visible:text-[#C11D63]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            ) : null}
          </div>
        </div>
      </section>

      {/* Main Article */}
      <section className="bg-white">
        <div className="mx-auto grid w-full max-w-[1168px] gap-12 px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:grid-cols-[252px_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:py-24 xl:px-0">
          <aside className="hidden lg:block">
            <nav aria-label="Guide sections" className="sticky top-28 border-l border-[#E5E8ED] pl-5">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.15em] text-slate-400">In This Guide</p>
              <div className="space-y-1">
                {tocItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={sectionUrl(item.id)}
                      aria-current={isActive ? "location" : undefined}
                      className={`relative block py-2 text-[15px] leading-6 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 ${
                        isActive ? "font-semibold text-[#C11D63]" : "font-medium text-slate-500 hover:text-slate-900"
                      }`}
                    >
                      {isActive ? <span className="absolute -left-[21px] top-2.5 h-5 w-[2px] rounded-full bg-[#C11D63]" aria-hidden="true" /> : null}
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>
          </aside>

          <main className="min-w-0 article-copy">
            <article>
              <section id="what-is-continuous-software-localization" className="scroll-mt-[112px] border-b border-[#ECEEF2] pb-16 md:pb-20">
                <SectionHeading
                  title="What Is Continuous Software Localization?"
                  intro="Continuous software localization is the ongoing synchronization of source-product changes with translated product resources through a connected, repeatable, and governed workflow."
                />
                <div className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  <p>
                    The process identifies new or changed software content, validates its technical structure,
                    applies approved language assets, routes work through the appropriate translation and review
                    steps, performs quality checks, and returns approved localized resources for testing and release.
                  </p>
                  <p>
                    Localization is broader than interface translation. It can include locale-specific formats,
                    writing direction, plural behavior, sorting, addresses, currencies, dates, times, input methods,
                    legal requirements, and other market adaptations. Internationalization prepares the product
                    architecture to support these requirements, while localization adapts the product for a
                    particular language and locale.
                  </p>
                </div>

                <div className="mt-10 grid gap-8 border-y border-[#ECEEF2] py-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Continuous Does Not Mean Immediate</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Teams may still use release trains, approval stages, batching thresholds, language-specific
                      schedules, market requirements, and short string freezes. The defining feature is a reliable
                      recurring system, not instant publication of every edit.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Continuous Is More Than Automation</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      An integration can move files, but a complete operating model also needs stable source
                      content, governed language assets, context, review criteria, quality controls, version
                      alignment, exception handling, and accountable owners.
                    </p>
                  </div>
                </div>

                <ResponsiveTable
                  className="mt-10"
                  headers={["Traditional Batch Localization", "Continuous Software Localization"]}
                  rows={[
                    ["Localization begins near the end of development", "Localization operates alongside recurring development"],
                    ["Large, periodic file handoffs", "Incremental processing of new and changed content"],
                    ["Manual extraction and reintegration", "Connected repositories, APIs, integrations, or managed synchronization"],
                    ["Complete files are repeatedly reviewed", "Approved unchanged translations are preserved"],
                    ["Context is assembled after questions arise", "Context travels with strings and translation keys"],
                    ["Translation status is tracked separately", "Localization readiness is connected to product releases"],
                    ["Quality is concentrated near launch", "Automated and human checks operate throughout the cycle"],
                  ]}
                />

                <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  For the broader strategy, content scope, internationalization, testing, and operating considerations,
                  see <TextLink href={links.completeGuide}>The Complete Guide to Software and SaaS Localization</TextLink>.
                </p>
              </section>

              <section id="why-traditional-workflows-fall-behind" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Why Traditional Localization Workflows Fall Behind"
                  intro="The central problem is rarely translation speed alone. Delays often come from disconnected systems, unstable source content, incomplete context, late reviewer involvement, and unclear release ownership."
                />

                <div className="mt-10 max-w-[760px] space-y-10">
                  {[
                    ["Large Batches Create Late Pressure", "When teams wait until a feature or release is nearly complete, a large volume of content arrives at once. Translators and reviewers have less time to understand the product, resolve questions, validate terminology, and test the localized experience."],
                    ["Localization Starts Too Late", "Late localization compresses source clarification, terminology decisions, linguistic review, build integration, visual testing, issue correction, and regression review. It can also expose internationalization defects when interface changes are most expensive."],
                    ["Manual Handoffs Increase Version Risk", "Exporting, renaming, emailing, downloading, merging, and reimporting files creates opportunities to translate an outdated resource, omit new content, overwrite approved translations, damage syntax, or deliver to the wrong branch."],
                    ["Strings Arrive Without Meaningful Context", "Short labels such as “Open,” “Apply,” or “Home” may be nouns, verbs, commands, navigation labels, statuses, or feature names. A linguistically valid translation can still be wrong for the product experience."],
                    ["Reviewers Become Bottlenecks", "Unchanged strings, low-risk messages, terminology decisions, and high-impact journeys often enter one undifferentiated queue. Risk routing helps reviewers focus on decisions that genuinely require judgment."],
                    ["Multilingual Readiness Has No Clear Owner", "Development may consider a feature complete when the source build passes, while localization may consider work complete when strings are translated. Without shared release gates, each team can finish its task while the localized product remains unready."],
                  ].map(([title, text]) => (
                    <div key={title} className="grid gap-3 border-t border-[#ECEEF2] pt-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                      <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.02em] text-slate-950 sm:text-[22px]">{title}</h3>
                      <p className="text-[17px] leading-8 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[22px] border border-[#F0D7E2] bg-[#FDF2F7] px-6 py-6 sm:px-8">
                  <Eyebrow>Practical Signal</Eyebrow>
                  <p className="mt-3 text-[18px] font-semibold leading-8 text-slate-950">
                    A product may need continuous localization when language releases repeatedly lag,
                    translators receive last-minute batches, reviewers become bottlenecks, or teams cannot
                    reliably identify what changed.
                  </p>
                </div>
              </section>

              <section id="prepare-software" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Prepare Software for Continuous Localization"
                  intro="Continuous localization begins before the first automated trigger. The product, source content, and language assets must be structured so recurring changes can move safely through the workflow."
                />

                <div className="mt-10 max-w-[760px] space-y-10">
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Externalize User-Facing Content</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                      Translatable text should be separated from source code and stored in supported resource
                      structures such as JSON, XML, properties files, resource bundles, mobile string resources,
                      databases, or structured content repositories. Externalization lets linguists work without
                      editing application logic and helps automation distinguish translatable content from protected
                      technical elements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Use Stable Translation Keys</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                      A stable key provides a persistent identity for a source string and can connect it to
                      translations, screenshots, metadata, comments, review history, character limits, and product
                      components. Keys should not change simply because source wording is edited.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    <div>
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Avoid String Concatenation</h3>
                      <p className="mt-4 text-[17px] leading-8 text-slate-600">
                        Building a sentence from independently translated fragments can fail in languages with
                        different word order, gender, case, or plural rules. Provide complete messages and use
                        locale-aware structures wherever possible.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Protect Variables and Markup</h3>
                      <p className="mt-4 text-[17px] leading-8 text-slate-600">
                        Placeholders should be identifiable, technically protected, explained to linguists, included
                        in automated validation, and tested with realistic values because they may influence grammar
                        differently across languages.
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Support Locale-Aware Behavior</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                      Software may need to support local conventions for dates, time zones, numbers, currencies,
                      measurement units, plural categories, sorting, names, addresses, writing direction, and input
                      methods. These requirements should be addressed in product architecture rather than deferred
                      until translation begins.
                    </p>
                  </div>

                  <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                    <div>
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Design Flexible Interfaces</h3>
                      <p className="mt-4 text-[17px] leading-8 text-slate-600">
                        Plan for text expansion and contraction, multiline labels, responsive layouts, font and glyph
                        coverage, right-to-left interfaces, and content embedded in images.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950 sm:text-[24px]">Improve the Source Before Translation</h3>
                      <p className="mt-4 text-[17px] leading-8 text-slate-600">
                        Use clear source strings, approved product terminology, complete messages, and developer notes
                        for ambiguous content. Repeated translator questions often reveal source-content weaknesses.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="wide-module mt-12 rounded-[26px] border border-[#E5E8ED] bg-[#FCFCFD] p-6 sm:p-8">
                  <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-12">
                    <div>
                      <Eyebrow>Product Readiness</Eyebrow>
                      <h3 className="mt-3 text-[26px] font-semibold leading-[1.15] tracking-[-0.03em] text-slate-950">Questions to Answer Before Connecting the Workflow</h3>
                    </div>
                    <div className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
                      {[
                        "Is customer-facing content externalized?",
                        "Are translation keys stable and connected to context?",
                        "Can placeholders and resource syntax be validated?",
                        "Does the product support relevant locale behavior?",
                        "Can layouts accommodate different scripts and text lengths?",
                        "Is a localized build, preview, or staging environment available?",
                        "Are source strings consistent and approved?",
                        "Are product, localization, QA, and release owners defined?",
                      ].map((item) => (
                        <div key={item} className="flex items-start gap-3 border-t border-[#E5E8ED] pt-4 text-[16px] leading-7 text-slate-700">
                          <CircleCheckBig className="mt-1 h-5 w-5 shrink-0 text-[#C11D63]" aria-hidden="true" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  Explore the deeper technical distinction in <TextLink href={links.internationalization}>Internationalization vs. Localization</TextLink>.
                </p>
              </section>

              <section id="release-loop" className="wide-module scroll-mt-[112px] py-16 md:py-20">
                <div className="overflow-hidden rounded-[30px] bg-slate-950 px-6 py-10 sm:px-8 sm:py-12 lg:px-10">
                  <SectionHeading
                    eyebrow="Core Framework"
                    dark
                    title="Build the Continuous Localization Release Loop"
                    intro="A reliable workflow preserves traceability from the original source change through language production, testing, release, and future reuse."
                  />

                  <div className="mt-10 grid gap-0 md:grid-cols-2 xl:grid-cols-5">
                    {lifecycleStages.map((stage, index) => {
                      const Icon = stage.icon;
                      return (
                        <div
                          key={stage.title}
                          className={`relative border-slate-800 px-0 py-6 md:px-6 ${
                            index > 0 ? "border-t md:border-t-0" : ""
                          } ${index % 2 === 1 ? "md:border-l" : ""} ${index >= 2 ? "md:border-t xl:border-t-0" : ""} ${index > 0 ? "xl:border-l" : ""}`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.08] ring-1 ring-white/10">
                              <Icon className="h-5 w-5 text-[#F2A7C6]" aria-hidden="true" />
                            </div>
                            <span className="text-[12px] font-semibold tracking-[0.14em] text-slate-500">{stage.number}</span>
                          </div>
                          <h3 className="mt-5 text-[19px] font-semibold leading-7 text-white">{stage.title}</h3>
                          <p className="mt-3 text-[16px] leading-7 text-slate-300">{stage.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex flex-col gap-4 border-t border-slate-800 pt-7 sm:flex-row sm:items-center sm:justify-between">
                    <p className="max-w-[680px] text-[16px] leading-7 text-slate-300">
                      The model is a loop because corrections, reviewer decisions, terminology updates, and release
                      feedback improve every future cycle.
                    </p>
                    <a
                      href={links.workflowAutomation}
                      className="inline-flex shrink-0 items-center gap-2 text-[16px] font-semibold text-[#F2A7C6] transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F2A7C6]/40"
                    >
                      Explore Workflow Automation
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </section>

              <section id="manage-content-changes" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Manage New, Modified, and Obsolete Strings"
                  intro="A continuous localization system should evaluate the type and significance of each change instead of treating an entire resource file as new."
                />

                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">New and Modified Content</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-700">
                      New strings generally require validation, context, terminology application, translation,
                      review, and testing. Modified strings require more judgment because a punctuation edit, a
                      terminology change, a revised variable, and a reversed instruction do not have the same impact.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Unchanged and Obsolete Content</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-700">
                      Approved unchanged translations should normally be preserved. Removed strings should be marked
                      appropriately so they do not reappear accidentally, while version history is retained when
                      products require rollback, auditability, or support for legacy releases.
                    </p>
                  </div>
                </div>

                <ResponsiveTable className="mt-10" headers={["Change Type", "Typical Handling"]} rows={changeRows} />

                <div className="mt-10 max-w-[760px] rounded-[22px] border-l-2 border-[#C11D63] bg-[#FCFCFD] px-6 py-5">
                  <p className="text-[17px] font-semibold leading-8 text-slate-950">
                    Evaluate semantic impact instead of automatically approving every existing translation or
                    automatically retranslating every edited source string.
                  </p>
                </div>
              </section>

              <section id="language-assets" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Use Translation Memory and Terminology as Operational Controls"
                  intro="In a continuous environment, language assets do more than reduce repetitive work. They help recurring releases preserve approved product language and remain governable."
                />

                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
                  <div className="border-t border-[#E5E8ED] pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7]">
                        <Layers3 className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                      </div>
                      <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Translation Memory</h3>
                    </div>
                    <p className="mt-5 text-[17px] leading-8 text-slate-700">
                      Translation Memory stores approved source-and-target segments for reuse. It can preserve
                      established interface language, identify exact and partial matches, maintain continuity across
                      releases, accelerate review, and improve cost predictability.
                    </p>
                    <p className="mt-5 text-[17px] leading-8 text-slate-700">
                      A large memory is not automatically reliable. Governance should address approval status,
                      product ownership, domain separation, duplicates, revision history, obsolete content, and
                      periodic cleanup.
                    </p>
                    <div className="mt-6">
                      <TextLink href={links.translationMemory}>Explore Translation Memory Management</TextLink>
                    </div>
                  </div>

                  <div className="border-t border-[#E5E8ED] pt-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7]">
                        <Tags className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                      </div>
                      <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Terminology Management</h3>
                    </div>
                    <p className="mt-5 text-[17px] leading-8 text-slate-700">
                      A multilingual termbase may contain product and feature names, approved translations,
                      prohibited terms, definitions, abbreviations, capitalization rules, usage examples,
                      market-specific alternatives, reviewer notes, and approval status.
                    </p>
                    <p className="mt-5 text-[17px] leading-8 text-slate-700">
                      Terminology should guide production early rather than being corrected repeatedly after strings
                      have already moved through several languages and reviews.
                    </p>
                    <div className="mt-6">
                      <TextLink href={links.terminology}>Explore Terminology Management</TextLink>
                    </div>
                  </div>
                </div>

                <div className="mt-10 rounded-[22px] bg-[#F8F9FB] px-6 py-6 sm:px-8">
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">Language Assets Need Accountable Owners</h3>
                  <p className="mt-3 max-w-[760px] text-[17px] leading-8 text-slate-600">
                    Decisions about adding, changing, approving, or retiring product language should not remain in
                    disconnected emails or undocumented reviewer edits. Ownership makes reuse safer and future
                    releases more consistent.
                  </p>
                </div>
              </section>

              <section id="risk-routing" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Route AI and Human Review According to Risk"
                  intro="A password-reset instruction, a decorative tooltip, a safety warning, a billing disclosure, and a core onboarding screen have different consequences if their language is unclear or incorrect."
                />

                <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  The strongest workflows route content according to customer impact, visibility, legal or
                  regulatory significance, source clarity, terminology sensitivity, target market, language-pair
                  performance, available context, and prior quality history.
                </p>

                <div className="wide-module mt-10 overflow-hidden rounded-[26px] border border-[#E5E8ED] bg-white">
                  <div className="border-b border-[#E5E8ED] bg-[#FCFCFD] px-6 py-5 sm:px-8">
                    <Eyebrow>Review and Release Routing Matrix</Eyebrow>
                    <h3 className="mt-2 text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Match the Workflow to the Content</h3>
                  </div>
                  <div>
                    {routingRows.map((row, index) => (
                      <div key={row.category} className="grid gap-4 border-b border-[#ECEEF2] px-6 py-6 last:border-b-0 sm:px-8 lg:grid-cols-[0.8fr_0.9fr_1.3fr] lg:gap-8">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63] lg:hidden">Content Category</p>
                          <h4 className="mt-1 text-[18px] font-semibold leading-7 text-slate-950 lg:mt-0">{row.category}</h4>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63] lg:hidden">Examples</p>
                          <p className="mt-1 text-[16px] leading-7 text-slate-600 lg:mt-0">{row.examples}</p>
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63] lg:hidden">Recommended Route</p>
                          <p className="mt-1 text-[16px] leading-7 text-slate-700 lg:mt-0">{row.route}</p>
                        </div>
                        <span className="sr-only">Row {index + 1}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 max-w-[760px]">
                  <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">AI Should Operate Inside a Managed Workflow</h3>
                  <p className="mt-4 text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                    AI-assisted translation can improve throughput for suitable recurring content, but fluent output
                    should not automatically be treated as release-ready. A managed AI + Human Translation Workflow
                    can combine approved language assets, AI-generated first-pass translation, automated quality
                    checks, professional linguistic review, subject-matter validation, and stakeholder approval.
                  </p>
                  <div className="mt-6">
                    <TextLink href={links.aiHumanWorkflow}>Explore AI + Human Translation Workflows</TextLink>
                  </div>
                </div>
              </section>

              <section id="translation-context" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Give Translators and Reviewers the Right Context"
                  intro="Context should travel with the string instead of being reconstructed after a translation problem appears."
                />

                <div className="mt-10 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Useful String-Level Context</h3>
                    <ul className="mt-5 space-y-3">
                      {[
                        "Screenshots, screen recordings, or design references",
                        "Feature, page, and component names",
                        "Translation keys and developer comments",
                        "Preceding, following, and reused strings",
                        "User persona, action, and expected response",
                        "Character limits and text-function labels",
                        "Placeholder definitions and plural behavior",
                        "Product previews or test environments",
                      ].map((item) => (
                        <CheckItem key={item} compact>{item}</CheckItem>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-[24px] border border-[#E5E8ED] bg-[#FCFCFD] p-6 sm:p-8">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-[#E5E8ED]">
                      <MessageSquareText className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Create a Controlled Clarification Process</h3>
                    <ol className="mt-5 space-y-4">
                      {[
                        "Allow linguists to submit questions against the relevant string.",
                        "Route each question to the appropriate product or content owner.",
                        "Record the approved answer and make it visible across languages.",
                        "Update source guidance or terminology when the answer has broader value.",
                      ].map((item, index) => (
                        <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
                          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FDF2F7] text-[12px] font-semibold text-[#C11D63]">{index + 1}</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-10 border-l-2 border-[#C11D63] pl-6">
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950 sm:text-[22px]">Use Questions to Improve the Source Product</h3>
                  <p className="mt-3 max-w-[760px] text-[17px] leading-8 text-slate-600">
                    Recurring questions are valuable operational data. They may indicate unclear source writing,
                    weak key naming, missing metadata, inconsistent terminology, or an interface that does not
                    communicate its purpose clearly.
                  </p>
                </div>
              </section>

              <section id="quality-across-releases" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Protect Quality Across Frequent Releases"
                  intro="Frequent releases do not remove the need for quality assurance. They change how quality should be distributed across the workflow."
                />

                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
                  {[
                    {
                      title: "Automated Structural Checks",
                      icon: FileCheck2,
                      text: "Validate missing translations, damaged placeholders, changed numbers, tag integrity, empty values, invalid characters, malformed files, terminology rules, and unexpected length.",
                    },
                    {
                      title: "Linguistic Quality Review",
                      icon: Languages,
                      text: "Evaluate accuracy, completeness, grammar, fluency, terminology, tone, consistency, locale suitability, variable handling, and plural behavior.",
                    },
                    {
                      title: "Cosmetic and Visual QA",
                      icon: SearchCheck,
                      text: "Review truncation, clipping, overlap, line wrapping, control sizing, spacing, font support, right-to-left layout, and responsive behavior.",
                    },
                    {
                      title: "Functional and Locale QA",
                      icon: TestTube2,
                      text: "Test navigation, forms, localized search, sorting, dates, currencies, input methods, locale selection, notifications, authentication, and payment flows where relevant.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="border-t border-[#E5E8ED] pt-6">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7]">
                            <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                          </div>
                          <h3 className="text-[21px] font-semibold leading-7 tracking-[-0.02em] text-slate-950 sm:text-[22px]">{item.title}</h3>
                        </div>
                        <p className="mt-5 text-[17px] leading-8 text-slate-600">{item.text}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 grid gap-8 border-y border-[#ECEEF2] py-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Regression Review</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Previously approved translations can fail after shared components, fonts, placeholders, design
                      systems, responsive behavior, string reuse, or locale-handling logic changes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Release Gates</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Define required content completion, high-risk review, terminology compliance, critical defect
                      resolution, localized build availability, in-context validation, and market approval.
                    </p>
                  </div>
                </div>

                <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  A translated file is not automatically a release-ready product. Use the detailed <TextLink href={links.testingChecklist}>Software Localization Testing Checklist</TextLink> to plan linguistic, visual, functional, and locale validation.
                </p>
              </section>

              <section id="branches-and-releases" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Coordinate Branches, Versions, and Multilingual Releases"
                  intro="The localization workflow should reflect the organization’s actual development and release model."
                />

                <div className="mt-10 space-y-0 border-y border-[#E5E8ED]">
                  {[
                    ["Mainline or Trunk-Based Development", "Localization can synchronize approved resource changes as they enter the main development stream, while rules still distinguish unfinished features, feature flags, and content that should not reach production."],
                    ["Feature Branches", "Teams need rules for when feature content enters localization, how duplicated strings are handled, what happens when a feature is abandoned, how translations are merged, and which context belongs to each branch."],
                    ["Release Branches", "Version-specific translations and testing may be required. A fix approved for a future release may not be appropriate for an older supported version."],
                    ["Hotfixes", "Urgent changes need an accelerated but controlled path that identifies affected languages, required reviewers, feasible testing, and how corrections return to other active branches."],
                    ["Multiple Supported Versions", "Enterprise platforms, regulated software, customer-specific deployments, mobile applications, and long-term-support products may need to preserve the relationship between translations and several active versions."],
                  ].map(([title, text]) => (
                    <div key={title} className="grid gap-3 border-b border-[#E5E8ED] py-6 last:border-b-0 sm:grid-cols-[230px_1fr] sm:gap-8">
                      <h3 className="text-[20px] font-semibold leading-7 tracking-[-0.02em] text-slate-950 sm:text-[22px]">{title}</h3>
                      <p className="text-[17px] leading-8 text-slate-600">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
                  <div className="rounded-[22px] bg-[#FCFCFD] p-6 sm:p-7">
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">Simultaneous and Staggered Releases</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Simultaneous launches support global consistency but require stronger coordination. Staggered
                      delivery may be appropriate when market priorities, approval requirements, language resources,
                      risks, or deployment schedules differ. The important requirement is transparent status.
                    </p>
                  </div>
                  <div className="rounded-[22px] bg-[#FCFCFD] p-6 sm:p-7">
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">String Freezes Still Have a Role</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Short, controlled freezes can support final testing, store submissions, regulated approval, and
                      coordinated launches. The objective is to avoid long disruptive freezes caused by delayed
                      localization, not to remove every point of stability.
                    </p>
                  </div>
                </div>

                <div className="mt-10 rounded-[22px] border border-[#F0D7E2] bg-[#FDF2F7] px-6 py-6 sm:px-8">
                  <p className="text-[18px] font-semibold leading-8 text-slate-950">
                    A language is ready only when its required translation, review, quality, technical, and market
                    conditions are met—not simply when translation is marked complete.
                  </p>
                </div>
              </section>

              <section id="roles-and-governance" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Define Roles, Ownership, and Governance"
                  intro="Continuous software localization is a shared operating discipline. Clear ownership prevents work from becoming trapped between product, engineering, localization, review, and release teams."
                />

                <ResponsiveTable className="mt-10" headers={["Role", "Core Responsibilities"]} rows={roleRows} />

                <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Establish Decision Rights</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Define who can approve source strings, change terminology, accept a Translation Memory match,
                      approve a target translation, waive a quality check, classify an issue, accept release risk,
                      and authorize a language for deployment.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[24px] font-semibold leading-8 tracking-[-0.025em] text-slate-950">Control Access to Sensitive Content</h3>
                    <p className="mt-4 text-[17px] leading-8 text-slate-600">
                      Unreleased features, proprietary technical information, security-related content, customer
                      data, and regulated interfaces may require customer-specific access, confidentiality,
                      approval, communication, and delivery controls.
                    </p>
                  </div>
                </div>
              </section>

              <section id="performance-metrics" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Measure Continuous Localization Performance"
                  intro="Word volume alone does not show whether multilingual products are current, efficient, reliable, or ready for release."
                />

                <div className="wide-module mt-10 grid gap-px overflow-hidden rounded-[26px] border border-[#E5E8ED] bg-[#E5E8ED] md:grid-cols-2">
                  {metricGroups.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.title} className="bg-white p-6 sm:p-8">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7]">
                            <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                          </div>
                          <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">{group.title}</h3>
                        </div>
                        <ul className="mt-5 space-y-3">
                          {group.items.map((item) => (
                            <CheckItem key={item} compact>{item}</CheckItem>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  Select a focused set of measures that supports decisions. Reporting should expose delay, rework,
                  quality risk, and workflow bottlenecks rather than create another administrative burden.
                </p>
              </section>

              <section id="implementation-roadmap" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Implement Continuous Localization in Phases"
                  intro="Organizations do not need to automate every product, language, and release at once. A phased implementation reduces risk and creates room to improve the operating model before expanding it."
                />

                <div className="wide-module mt-10">
                  {implementationPhases.map((phase) => (
                    <div key={phase.title} className="grid gap-4 border-t border-[#E5E8ED] py-7 sm:grid-cols-[84px_230px_1fr] sm:gap-7">
                      <span className="text-[13px] font-semibold tracking-[0.15em] text-[#C11D63]">PHASE {phase.number}</span>
                      <h3 className="text-[21px] font-semibold leading-7 tracking-[-0.02em] text-slate-950 sm:text-[22px]">{phase.title}</h3>
                      <p className="text-[17px] leading-8 text-slate-600">{phase.text}</p>
                    </div>
                  ))}
                  <div className="border-t border-[#E5E8ED]" />
                </div>

                <div className="mt-10 rounded-[22px] border-l-2 border-[#C11D63] bg-[#FCFCFD] px-6 py-5 sm:px-8">
                  <p className="text-[18px] font-semibold leading-8 text-slate-950">
                    Automation should expand only after the underlying workflow is reliable, measurable, and clear to
                    every team that contributes to a multilingual release.
                  </p>
                </div>
              </section>

              <section id="maturity-model" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Assess Your Continuous Localization Maturity"
                  intro="Maturity does not mean maximizing automation. It means applying the right systems, context, controls, and ownership to each product, content type, and market."
                />
                <ResponsiveTable className="mt-10" headers={["Stage", "Operating Characteristics", "Recommended Next Step"]} rows={maturityRows} />
              </section>

              <section id="failure-modes" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Avoid Common Failure Modes"
                  intro="Continuous localization improves speed and control only when teams correct the underlying process rather than automating its weaknesses."
                />
                <ResponsiveTable className="mt-10" headers={["Failure Mode", "Why It Creates Problems", "Better Approach"]} rows={failureRows} />
              </section>

              <section id="readiness-checklist" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  eyebrow="Practical Planning Tool"
                  title="Continuous Localization Readiness Checklist"
                  intro="Use this checklist to identify the product, workflow, quality, and governance foundations required before scaling a continuous localization program."
                />

                <div className="wide-module mt-10 grid gap-px overflow-hidden rounded-[26px] border border-[#E5E8ED] bg-[#E5E8ED] md:grid-cols-2">
                  {checklistGroups.map((group) => (
                    <div key={group.title} className="bg-white p-6 sm:p-8">
                      <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.02em] text-slate-950">{group.title}</h3>
                      <ul className="mt-5 space-y-3">
                        {group.items.map((item) => (
                          <CheckItem key={item} compact>{item}</CheckItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="frequently-asked-questions" className="scroll-mt-[112px] border-b border-[#ECEEF2] py-16 md:py-20">
                <SectionHeading
                  title="Frequently Asked Questions"
                  intro="Practical answers to common questions about continuous software localization, automation, review, releases, and implementation."
                />

                <div className="mt-10 overflow-hidden rounded-[24px] border border-[#E5E8ED] bg-white">
                  {faqs.map((faq, index) => (
                    <details key={faq.question} className="faq-item group border-b border-[#ECEEF2] last:border-b-0" open={index === 0}>
                      <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-5 px-5 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C11D63]/35 sm:px-7">
                        <span className="text-[17px] font-semibold leading-7 text-slate-950 sm:text-[18px]">{faq.question}</span>
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F8F9FB]">
                          <ChevronDown className="faq-chevron h-4 w-4 text-slate-500 transition" aria-hidden="true" />
                        </span>
                      </summary>
                      <div className="px-5 pb-6 sm:px-7">
                        <p className="max-w-[800px] text-[16px] leading-7 text-slate-600">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              <section className="py-16 md:py-20">
                <SectionHeading
                  title="Keep Every Language Aligned With Every Release"
                  intro="Continuous software localization works best when product architecture, source content, language assets, automation, professional review, quality assurance, and release governance operate as one connected system."
                />
                <div className="mt-8 max-w-[760px] text-[17px] leading-8 text-slate-700 sm:text-[18px]">
                  <p>
                    The goal is not to move every string through the fastest possible workflow. It is to give each
                    product change the right level of translation, validation, and control while keeping
                    multilingual releases current.
                  </p>
                  <p>
                    Start by assessing product readiness, stabilizing the current process, and selecting a controlled
                    pilot. Once the workflow reliably identifies changes, applies approved language assets, routes
                    content by risk, validates localized builds, and reports release readiness, it can expand across
                    more languages, teams, and products.
                  </p>
                </div>
              </section>

              {/* Sources */}
              <section aria-labelledby="sources-title" className="border-t border-[#ECEEF2] py-12">
                <Eyebrow>Sources and References</Eyebrow>
                <h2 id="sources-title" className="mt-3 text-[26px] font-semibold leading-9 tracking-[-0.03em] text-slate-950">Authoritative Technical and Product References</h2>
                <div className="mt-6 divide-y divide-[#ECEEF2] border-y border-[#ECEEF2]">
                  {sourceLinks.map((source) => (
                    <a
                      key={source.title}
                      href={source.href}
                      {...(source.external ? { target: "_blank", rel: "noreferrer" } : {})}
                      className="flex items-center justify-between gap-5 py-4 text-slate-700 transition hover:text-[#C11D63] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30"
                    >
                      <span>
                        <span className="block text-[16px] font-semibold leading-7">{source.title}</span>
                        <span className="block text-[14px] leading-6 text-slate-500">{source.organization}</span>
                      </span>
                      {source.external ? (
                        <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      ) : (
                        <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                      )}
                    </a>
                  ))}
                </div>
              </section>
            </article>
          </main>
        </div>
      </section>

      {/* Related Resources */}
      <section className="border-y border-[#ECEEF2] bg-[#FCFCFD]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow>Continue Planning</Eyebrow>
              <h2 className="mt-4 max-w-[680px] text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">Related Software Localization Resources</h2>
            </div>
            <TextLink href={links.localizationGuides}>Explore All Localization Guides</TextLink>
          </div>

          <div className="mt-10 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {relatedResources.map((resource, index) => (
              <a
                key={resource.title}
                href={resource.href}
                className={`group border-t border-[#E1E5EA] py-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 ${index > 1 ? "md:mt-0" : ""}`}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63]">{resource.eyebrow}</p>
                <div className="mt-3 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-[22px] font-semibold leading-8 tracking-[-0.025em] text-slate-950 transition group-hover:text-[#9F1D55]">{resource.title}</h3>
                    <p className="mt-3 max-w-[520px] text-[16px] leading-7 text-slate-600">{resource.text}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#C11D63] transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="relative overflow-hidden rounded-[30px] border border-[#F0D7E2] bg-[#FDF2F7] px-6 py-12 sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/55 blur-3xl" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-[760px]">
                <Eyebrow>Plan Your Localization Workflow</Eyebrow>
                <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">Build Localization Into Your Product Delivery Process</h2>
                <p className="mt-5 max-w-[720px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                  Connect recurring software updates with professional translation, AI-assisted workflows,
                  language-asset reuse, quality assurance, and coordinated multilingual releases.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href={links.contact}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3 text-[16px] font-semibold text-white shadow-[0_10px_30px_rgba(193,29,99,0.16)] transition hover:bg-[#A71954] hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/40 focus-visible:ring-offset-4"
                >
                  Talk to a Software Localization Expert
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={links.softwareLocalizationApi}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D9B8C7] bg-white px-6 py-3 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/45 hover:text-[#9F1D55] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 focus-visible:ring-offset-4"
                >
                  Explore the Software Localization API
                  <Link2 className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
