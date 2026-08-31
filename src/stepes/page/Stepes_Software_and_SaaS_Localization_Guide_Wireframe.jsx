import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Check,
  CheckCircle2,
  ChevronDown,
  CloudCog,
  Code2,
  Database,
  ExternalLink,
  FileCode2,
  GitBranch,
  Globe2,
  Languages,
  LayoutTemplate,
  Link2,
  ListChecks,
  MessageSquareText,
  MonitorSmartphone,
  RefreshCw,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TestTube2,
  Users2,
  Workflow,
  Zap,
} from "lucide-react";

const CANONICAL_URL =
  "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/";

const tocGroups = [
  {
    title: "Understand the Opportunity",
    items: [
      ["what-is-localization", "What Is Software and SaaS Localization?"],
      ["why-localization-matters", "Why Software Localization Matters"],
      ["what-to-localize", "What Should You Localize?"],
      ["what-makes-saas-different", "What Makes SaaS Localization Different?"],
    ],
  },
  {
    title: "Plan and Build",
    items: [
      ["internationalization-ready", "Build an Internationalization-Ready Product"],
      ["localization-strategy", "Create a Localization Strategy"],
      ["prepare-strings", "Prepare Strings and Source Content"],
      ["localization-workflow", "Design the End-to-End Workflow"],
      ["development-stack", "Connect Localization to Development"],
    ],
  },
  {
    title: "Deliver and Improve",
    items: [
      ["translation-model", "Choose the Right Translation Model"],
      ["language-assets", "Build Reusable Language Assets"],
      ["localization-testing", "Test Localized Software"],
      ["continuous-localization", "Establish Continuous Localization"],
      ["market-launch", "Launch in a New Market"],
      ["measure-performance", "Measure Localization Performance"],
      ["common-mistakes", "Common Localization Mistakes"],
      ["localization-checklist", "Software Localization Checklist"],
      ["frequently-asked-questions", "Frequently Asked Questions"],
    ],
  },
];

const takeaways = [
  {
    title: "Localize the customer journey, not only the interface.",
    text: "Connect product UI, websites, onboarding, documentation, support, training, billing, legal content, and recurring communications into one coherent experience.",
  },
  {
    title: "Internationalization should begin before translation.",
    text: "Externalized strings, Unicode support, flexible layouts, plural handling, locale-aware formats, and right-to-left readiness prevent avoidable reengineering.",
  },
  {
    title: "Use different quality routes for different content risks.",
    text: "A product button, API guide, marketing headline, support article, and privacy policy should not automatically follow the same translation and review workflow.",
  },
  {
    title: "Keep localization connected to product delivery.",
    text: "Repositories, APIs, integrations, content systems, and CI/CD workflows reduce manual handoffs and keep multilingual releases synchronized.",
  },
  {
    title: "Test the experience in context.",
    text: "Linguistic accuracy alone cannot reveal truncation, broken variables, incorrect locale behavior, right-to-left defects, or workflow failures.",
  },
  {
    title: "Treat every release as part of a learning loop.",
    text: "Approved corrections, support findings, product analytics, and regional feedback should improve terminology, translation memory, source content, and future releases.",
  },
];

const customerJourney = [
  ["Discovery", "Websites, search, campaigns"],
  ["Evaluation", "Pricing, demos, comparisons"],
  ["Trial", "Registration, setup, product tours"],
  ["Product Use", "UI, notifications, workflows"],
  ["Support", "Help content, chat, service updates"],
  ["Renewal", "Billing, adoption, account messaging"],
  ["Expansion", "New features, teams, and markets"],
];

const saasComparison = [
  {
    criterion: "Release cadence",
    traditional: "Scheduled versions or major releases",
    saas: "Weekly, daily, or continuous changes",
  },
  {
    criterion: "Deployment model",
    traditional: "Installed or versioned distributions",
    saas: "Cloud-based, multi-tenant environments",
  },
  {
    criterion: "Content ownership",
    traditional: "Often concentrated in product and documentation teams",
    saas: "Distributed across product, engineering, growth, support, legal, and customer success",
  },
  {
    criterion: "Customer journey",
    traditional: "Product and documentation centered",
    saas: "Website, trial, onboarding, product, billing, support, renewal, and expansion",
  },
  {
    criterion: "Localization operations",
    traditional: "Project-based localization around releases",
    saas: "Incremental localization connected to ongoing development",
  },
  {
    criterion: "Testing approach",
    traditional: "Release-focused validation",
    saas: "Recurring in-context, regression, and locale-readiness checks",
  },
];

const lifecycle = [
  ["01", "Plan", "Define markets, locales, audiences, scope, goals, and release expectations."],
  ["02", "Prepare", "Assess internationalization, source content, resources, context, terminology, and systems."],
  ["03", "Translate and Adapt", "Apply translation memory, AI, professional linguists, post-editing, and market adaptation appropriately."],
  ["04", "Integrate", "Return localized content to applications, repositories, websites, documentation, and support systems."],
  ["05", "Review and Test", "Validate linguistic, visual, functional, technical, and locale-specific quality."],
  ["06", "Launch", "Coordinate product builds with websites, documentation, support, legal content, and regional teams."],
  ["07", "Improve", "Use feedback, analytics, and approved corrections to strengthen future releases."],
];

const qualityRoutes = [
  {
    content: "High-visibility product UI",
    route: "Translation memory + professional linguist + in-context QA",
    qualification: "Prioritize usability, terminology, and release-critical workflows.",
  },
  {
    content: "Technical documentation",
    route: "Specialist translation + technical review",
    qualification: "Protect code, variables, commands, and product-specific terminology.",
  },
  {
    content: "Marketing campaigns",
    route: "Transcreation + brand review",
    qualification: "Adapt persuasive intent, calls to action, and market relevance.",
  },
  {
    content: "High-volume support content",
    route: "AI or MT + professional post-editing",
    qualification: "Scale efficiently while retaining customer-facing clarity.",
  },
  {
    content: "Legal or regulated content",
    route: "Specialized human translation + independent review",
    qualification: "Use controlled approvals and subject-matter expertise.",
  },
  {
    content: "Low-risk internal content",
    route: "Automated translation with limited validation",
    qualification: "Apply only when the audience and consequences support a lighter workflow.",
  },
];

const checklistGroups = [
  {
    title: "Strategy",
    items: [
      "Define target markets and exact locales.",
      "Identify business goals and customer outcomes.",
      "Prioritize product areas and supporting content.",
      "Map the complete customer journey.",
      "Establish quality tiers and launch criteria.",
      "Assign roles, approvals, and ownership.",
    ],
  },
  {
    title: "Product Readiness",
    items: [
      "Externalize user-facing strings.",
      "Support Unicode and required writing systems.",
      "Avoid string concatenation.",
      "Implement plural and grammatical variation.",
      "Design flexible interfaces and right-to-left behavior.",
      "Use locale-aware dates, numbers, currencies, and units.",
      "Define language selection, fallback, and pseudolocalization.",
    ],
  },
  {
    title: "Content Preparation",
    items: [
      "Inventory content sources and owners.",
      "Improve source-language clarity and consistency.",
      "Create terminology and style guidance.",
      "Provide screenshots, comments, and string context.",
      "Protect variables, markup, and placeholders.",
      "Validate resource files and remove obsolete content.",
    ],
  },
  {
    title: "Workflow and Technology",
    items: [
      "Define the source of truth for each content type.",
      "Connect repositories, APIs, and content systems.",
      "Configure translation memory and terminology management.",
      "Select production methods according to content risk.",
      "Automate routine handoffs while preserving approval controls.",
      "Track versions, exceptions, and locale readiness.",
    ],
  },
  {
    title: "Quality Assurance",
    items: [
      "Perform linguistic, visual, functional, technical, and locale testing.",
      "Review content in the application whenever possible.",
      "Validate variables, tags, syntax, plurals, and file integrity.",
      "Classify defects by severity and ownership.",
      "Retest critical and major corrections.",
      "Document release exit criteria.",
    ],
  },
  {
    title: "Launch and Improvement",
    items: [
      "Coordinate product and supporting-content releases.",
      "Prepare regional reviewers and customer-support teams.",
      "Confirm legal, security, and operational readiness.",
      "Monitor post-launch feedback and product behavior.",
      "Update terminology, translation memory, and source guidance.",
      "Expand continuous localization as the program matures.",
    ],
  },
];

const faqItems = [
  {
    question: "What is SaaS localization?",
    answer:
      "SaaS localization adapts a cloud-based software product and its connected customer experience for specific languages and locales. It can include the product interface, onboarding, website, documentation, support, billing, marketing, legal content, and recurring product communications.",
  },
  {
    question: "How is software localization different from software translation?",
    answer:
      "Software translation changes content from one language to another. Software localization also addresses interface design, regional formats, cultural expectations, writing direction, technical functionality, and the complete in-product user experience.",
  },
  {
    question: "What is the difference between internationalization and localization?",
    answer:
      "Internationalization prepares the product to support multiple languages and locales. Localization adapts that product for a particular market. Internationalization is primarily a product and engineering responsibility, while localization includes linguistic, cultural, technical, integration, and quality activities.",
  },
  {
    question: "What parts of a SaaS product should be localized first?",
    answer:
      "Most companies begin with customer-critical workflows such as registration, onboarding, navigation, core features, account settings, billing, essential documentation, support, and required legal content. Priorities should reflect customer demand, product usage, market opportunity, and launch risk.",
  },
  {
    question: "How does continuous software localization work?",
    answer:
      "Continuous localization detects new and changed content as the product evolves, routes it through translation and review, returns approved content to the development environment, and supports recurring multilingual releases. It is commonly connected to repositories, APIs, content systems, and CI/CD workflows.",
  },
  {
    question: "What software localization file formats are commonly used?",
    answer:
      "Common formats include JSON, YAML, XML, XLIFF, PO, POT, RESX, Apple strings, Android XML, ARB, CSV, Java properties, and structured spreadsheets. The format should preserve keys, variables, tags, comments, and other metadata required by the application.",
  },
  {
    question: "How do translation memory and terminology improve software localization?",
    answer:
      "Translation memory reuses approved translations across releases and related content. Terminology management defines how product names, features, and technical concepts should be translated. Together, they improve consistency, efficiency, and reviewer alignment.",
  },
  {
    question: "Can AI be used to translate software and SaaS products?",
    answer:
      "Yes. AI translation can support high-volume and rapidly changing content, particularly when it is connected to terminology, translation memory, context, and professional review. The level of human validation should reflect the content’s visibility, complexity, and business risk.",
  },
  {
    question: "How is localized software tested?",
    answer:
      "Localized software should undergo linguistic, visual, functional, technical, and locale-specific testing. Reviewers should evaluate the actual interface whenever possible, including navigation, layouts, placeholders, regional formats, language switching, and complete user workflows.",
  },
  {
    question: "How do you prevent translations from breaking variables and placeholders?",
    answer:
      "Variables, tags, and placeholders should be identified and protected before translation. Automated checks can verify that they remain present and correctly formatted. Linguists should also receive descriptions explaining what each variable represents.",
  },
  {
    question: "How long does a software localization project take?",
    answer:
      "The schedule depends on content volume, number of languages, product readiness, integration method, review requirements, and testing scope. A well-internationalized product with structured files and established terminology can be localized more efficiently than a product requiring manual extraction and redesign.",
  },
  {
    question: "How much does software localization cost?",
    answer:
      "Cost depends on languages, word volume, content complexity, translation method, engineering requirements, testing coverage, and release frequency. Translation-memory reuse, content preparation, automation, and changed-string detection can improve cost efficiency over time.",
  },
  {
    question: "Should software localization be managed in-house or outsourced?",
    answer:
      "Many companies use a hybrid model. Internal teams own product strategy, terminology, priorities, and approvals, while a specialized localization partner provides linguistic resources, technology, engineering support, quality assurance, and scalable multilingual production.",
  },
];

const relatedGuides = [
  {
    category: "Continuous Delivery",
    title: "Continuous Software Localization",
    description:
      "Connect localization to agile development, changed-content detection, review, and recurring multilingual releases.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-software-localization/",
  },
  {
    category: "Quality and Testing",
    title: "Software Localization Testing Checklist",
    description:
      "Validate linguistic, visual, functional, technical, and locale-specific quality before release.",
    href: "https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/",
  },
  {
    category: "Global Product Readiness",
    title: "Internationalization vs. Localization",
    description:
      "Understand how technical readiness and market adaptation work together across the product lifecycle.",
    href: "https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/",
  },
  {
    category: "Implementation Tool",
    title: "Internationalization Readiness Checklist",
    description:
      "Assess strings, layouts, writing systems, regional formats, locale handling, and product behavior.",
    href: "https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/",
  },
];

function TextLink({ href, children, external = false }) {
  return (
    <a
      href={href}
      className="font-semibold text-[#B5195A] underline decoration-[#B5195A]/25 underline-offset-4 transition hover:text-[#8E1447] hover:decoration-[#8E1447]/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 focus-visible:ring-offset-2"
    >
      {children}
      {external ? <ExternalLink className="ml-1 inline h-3.5 w-3.5" aria-hidden="true" /> : null}
    </a>
  );
}

function BulletList({ items, className = "" }) {
  return (
    <ul className={`mt-5 space-y-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[17px] leading-8 text-slate-600">
          <span
            className="mt-[0.78rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C11D63]"
            aria-hidden="true"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }) {
  return (
    <ul className="mt-5 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-600">
          <Check className="mt-[0.28rem] h-4 w-4 shrink-0 text-[#C11D63]" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function H3({ children }) {
  return (
    <h3 className="mt-10 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-slate-950 sm:text-[24px]">
      {children}
    </h3>
  );
}

function Paragraph({ children, className = "" }) {
  return <p className={`mt-5 text-[17px] leading-8 text-slate-600 sm:text-[18px] ${className}`}>{children}</p>;
}

function SectionHeading({ id, children, intro }) {
  return (
    <header className="scroll-mt-28" id={id}>
      <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
        {children}
      </h2>
      {intro ? (
        <p className="mt-5 max-w-[800px] text-[18px] leading-8 text-slate-600 sm:text-[19px]">
          {intro}
        </p>
      ) : null}
    </header>
  );
}

function ArticleSection({ children, className = "" }) {
  return (
    <section className={`border-t border-slate-200/80 py-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-[760px]">{children}</div>
    </section>
  );
}

function ComparisonTable({ rows }) {
  return (
    <div className="mt-9">
      <div className="hidden overflow-hidden rounded-[24px] border border-slate-200 bg-white md:block">
        <table className="w-full table-fixed border-collapse text-left">
          <thead className="bg-slate-50">
            <tr>
              <th className="w-[24%] px-5 py-4 text-[16px] font-semibold leading-6 text-slate-950">Comparison</th>
              <th className="w-[38%] px-5 py-4 text-[16px] font-semibold leading-6 text-slate-950">Traditional Software</th>
              <th className="w-[38%] px-5 py-4 text-[16px] font-semibold leading-6 text-slate-950">SaaS</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.criterion} className="border-t border-slate-200 align-top">
                <th className="px-5 py-5 text-[16px] font-semibold leading-7 text-slate-900">{row.criterion}</th>
                <td className="px-5 py-5 text-[16px] leading-7 text-slate-600">{row.traditional}</td>
                <td className="px-5 py-5 text-[16px] leading-7 text-slate-600">{row.saas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-4 md:hidden">
        {rows.map((row) => (
          <div key={row.criterion} className="rounded-[22px] border border-slate-200 bg-white p-5">
            <p className="text-[18px] font-semibold leading-7 text-slate-950">{row.criterion}</p>
            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-[16px] font-semibold text-slate-900">Traditional Software</dt>
                <dd className="mt-1 text-[16px] leading-7 text-slate-600">{row.traditional}</dd>
              </div>
              <div>
                <dt className="text-[16px] font-semibold text-slate-900">SaaS</dt>
                <dd className="mt-1 text-[16px] leading-7 text-slate-600">{row.saas}</dd>
              </div>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

function FAQItem({ item, open, onToggle, index }) {
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-t border-slate-200 first:border-t-0">
      <button
        id={buttonId}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-5 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30 focus-visible:ring-inset"
      >
        <span className="text-[17px] font-semibold leading-7 text-slate-950 sm:text-[18px]">{item.question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-6 pr-10 text-[16px] leading-8 text-slate-600"
      >
        {item.answer}
      </div>
    </div>
  );
}

export default function StepesSoftwareAndSaaSLocalizationGuideWireframe() {
  const [tocOpen, setTocOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="overflow-x-clip bg-white text-slate-950">
      <section className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#FFFFFF_0%,#FCFCFD_100%)]">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-12 px-5 py-20 sm:px-6 md:px-10 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:px-14 lg:py-28">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C11D63]">Localization Guide</p>
            <h1 className="mt-5 max-w-[760px] text-[38px] font-semibold leading-[1.04] tracking-[-0.045em] text-slate-950 sm:text-[42px] lg:text-[48px]">
              The Complete Guide to Software and SaaS Localization
            </h1>
            <p className="mt-6 max-w-[760px] text-[18px] leading-8 text-slate-600 sm:text-[19px]">
              Learn how to internationalize, translate, integrate, test, launch, and continuously improve software products for global markets without separating localization from the way your product is built and delivered.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[14px] leading-6 text-slate-500">
              <span className="inline-flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-[#C11D63]" aria-hidden="true" />
                End-to-end planning framework
              </span>
              <span className="inline-flex items-center gap-2">
                <ListChecks className="h-4 w-4 text-[#C11D63]" aria-hidden="true" />
                Practical launch checklist
              </span>
              <span className="inline-flex items-center gap-2">
                <Workflow className="h-4 w-4 text-[#C11D63]" aria-hidden="true" />
                Product, engineering, and localization guidance
              </span>
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`${CANONICAL_URL}#guide-summary`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#C11D63] px-6 py-3.5 text-[16px] font-semibold !text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/35 focus-visible:ring-offset-2 visited:!text-white active:!text-white"
              >
                Explore the Guide
                <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
              </a>
              <a
                href={`${CANONICAL_URL}#localization-checklist`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3.5 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/35 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25 focus-visible:ring-offset-2"
              >
                Jump to the Checklist
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0">
            <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_22px_70px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63]">Global Product System</p>
                  <p className="mt-2 text-[19px] font-semibold leading-7 text-slate-950">One connected localization lifecycle</p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF2F7]">
                  <Globe2 className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  [Code2, "Product Readiness", "Internationalization and structured content"],
                  [GitBranch, "Connected Delivery", "Repositories, APIs, and release workflows"],
                  [Languages, "Language Quality", "Terminology, translation, and review"],
                  [TestTube2, "Market Readiness", "In-context testing and launch assurance"],
                ].map(([Icon, title, text]) => (
                  <div key={title} className="rounded-[20px] bg-slate-50 p-4">
                    <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                    <p className="mt-3 text-[16px] font-semibold leading-6 text-slate-950">{title}</p>
                    <p className="mt-1 text-[14px] leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 rounded-[20px] border border-[#EFC5D7] bg-[#FDF2F7] p-4">
                <RefreshCw className="h-5 w-5 shrink-0 text-[#C11D63]" aria-hidden="true" />
                <p className="text-[15px] font-semibold leading-6 text-slate-800">Measure, learn, and improve with every release.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="guide-summary" className="scroll-mt-28 bg-[#FDF7FA]">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:gap-14">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C11D63]">Executive Summary</p>
              <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Build Localization Into the Product Lifecycle
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                The strongest programs connect technical readiness, product language, translation, quality assurance, release operations, and customer feedback rather than managing localization as an isolated final step.
              </p>
            </div>

            <div className="border-y border-[#E7C9D6]">
              {takeaways.map((item, index) => (
                <div
                  key={item.title}
                  className="grid gap-3 border-b border-[#E7C9D6] py-6 last:border-b-0 sm:grid-cols-[42px_1fr] sm:gap-5"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[15px] font-semibold text-[#C11D63] shadow-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold leading-7 text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-[16px] leading-7 text-slate-600">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <div className="md:hidden">
            <button
              type="button"
              aria-expanded={tocOpen}
              aria-controls="mobile-guide-contents"
              onClick={() => setTocOpen((value) => !value)}
              className="flex min-h-12 w-full items-center justify-between gap-4 rounded-[20px] border border-slate-200 bg-white px-5 py-4 text-left text-[17px] font-semibold text-slate-950 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/30"
            >
              In This Guide
              <ChevronDown className={`h-5 w-5 transition-transform ${tocOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            <div id="mobile-guide-contents" hidden={!tocOpen} className="mt-4 rounded-[22px] border border-slate-200 bg-slate-50 p-5">
              <div className="space-y-7">
                {tocGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-[16px] font-semibold text-slate-950">{group.title}</p>
                    <ul className="mt-3 space-y-2">
                      {group.items.map(([id, label]) => (
                        <li key={id}>
                          <a
                            href={`${CANONICAL_URL}#${id}`}
                            onClick={() => setTocOpen(false)}
                            className="flex min-h-11 items-start gap-3 py-2 text-[16px] leading-7 text-slate-600 hover:text-[#B5195A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
                          >
                            <span className="mt-[0.62rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C11D63]" aria-hidden="true" />
                            <span>{label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">In This Guide</h2>
            <div className="mt-9 grid gap-10 border-y border-slate-200 py-9 md:grid-cols-3">
              {tocGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-[17px] font-semibold leading-7 text-slate-950">{group.title}</h3>
                  <ul className="mt-4 space-y-3">
                    {group.items.map(([id, label]) => (
                      <li key={id}>
                        <a
                          href={`${CANONICAL_URL}#${id}`}
                          className="flex items-start gap-3 text-[16px] leading-7 text-slate-600 transition hover:text-[#B5195A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
                        >
                          <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#C11D63]" aria-hidden="true" />
                          <span>{label}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-[1080px] px-5 sm:px-6 md:px-10 lg:px-14">
        <ArticleSection className="border-t-0 pt-4 md:pt-8">
          <SectionHeading
            id="what-is-localization"
            intro="Software localization adapts a digital product for the language, cultural expectations, technical requirements, and regional conventions of a specific market."
          >
            What Is Software and SaaS Localization?
          </SectionHeading>
          <Paragraph>
            Translation is an important part of localization, but localization extends beyond words. It can affect interface layouts, date and currency formats, writing direction, terminology, imagery, input fields, subscription experiences, and product functionality.
          </Paragraph>
          <Paragraph>
            A localized software experience can include user interface strings, navigation, settings, error messages, onboarding, help centers, websites, customer support, release notes, training, legal content, and account or billing experiences.
          </Paragraph>

          <H3>Software Translation vs. Software Localization</H3>
          <Paragraph>
            Software translation changes content from one language to another. Software localization adapts the complete product experience for a particular locale.
          </Paragraph>

          <div className="mt-8 overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-7">
                <p className="text-[18px] font-semibold text-slate-950">Software Translation</p>
                <CheckList
                  items={[
                    "Translates interface strings and supporting content.",
                    "Focuses primarily on linguistic accuracy.",
                    "May be completed outside the application.",
                    "Can be managed as a defined project.",
                    "Produces translated content.",
                  ]}
                />
              </div>
              <div className="border-t border-slate-200 bg-slate-50 p-6 md:border-l md:border-t-0 md:p-7">
                <p className="text-[18px] font-semibold text-slate-950">Software Localization</p>
                <CheckList
                  items={[
                    "Adapts language, design, functionality, and regional behavior.",
                    "Addresses linguistic, cultural, technical, and usability requirements.",
                    "Requires in-context integration and testing.",
                    "Often continues throughout the product lifecycle.",
                    "Produces a market-ready user experience.",
                  ]}
                />
              </div>
            </div>
          </div>

          <Paragraph>
            A button label may be translated correctly but still fail in the product because it is truncated, appears in the wrong context, or is combined with untranslated content. Localization identifies and resolves those issues.
          </Paragraph>

          <H3>Internationalization, Localization, and Globalization</H3>
          <Paragraph>
            Internationalization, often abbreviated as i18n, prepares a product so it can support multiple languages and locales. Localization, or l10n, adapts that product for a specific locale. Globalization coordinates the broader business, product, and regional strategy.
          </Paragraph>

          <div className="mt-8 space-y-4">
            {[
              [Code2, "Internationalization", "Make the product technically adaptable through architecture, content modeling, design, and engineering."],
              [Languages, "Localization", "Adapt language, culture, regional behavior, integration, and quality for a specific locale."],
              [Globe2, "Globalization", "Coordinate the overall strategy for operating products and customer experiences across markets."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex items-start gap-4 border-b border-slate-200 pb-5 last:border-b-0 last:pb-0">
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDF2F7]">
                  <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[18px] font-semibold leading-7 text-slate-950">{title}</p>
                  <p className="mt-1 text-[16px] leading-7 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <H3>What Is a Locale?</H3>
          <Paragraph>
            A locale represents a specific combination of language, region, and formatting conventions. Spanish for Spain and Spanish for Mexico share a language, but they may use different terminology, tone, date formats, commercial conventions, and user expectations. Defining target locales clearly prevents teams from treating one language as a single universal experience.
          </Paragraph>

          <p className="mt-7 rounded-[18px] border-l-2 border-[#C11D63] bg-slate-50 px-5 py-4 text-[16px] leading-7 text-slate-600">
            The <TextLink href="https://www.w3.org/International/questions/qa-i18n" external>W3C overview of internationalization and localization</TextLink> provides a useful standards-based introduction to these concepts.
          </p>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="why-localization-matters"
            intro="Localization is a product and customer-experience discipline that affects whether international customers can discover, understand, adopt, and continue using software."
          >
            Why Software Localization Matters
          </SectionHeading>

          {[
            [MonitorSmartphone, "Improve Product Usability", "Customers need to understand navigation, settings, permissions, forms, alerts, billing options, and error messages. Clear localized content helps users complete tasks accurately and confidently."],
            [Search, "Support Global Customer Acquisition", "Localization helps prospective customers discover and evaluate a product through multilingual pages, search content, pricing, trial experiences, campaigns, demonstrations, and sales materials."],
            [Rocket, "Strengthen Product Adoption", "Localized onboarding, embedded guidance, documentation, training, and support make it easier for customers to learn the product and reach value quickly."],
            [RefreshCw, "Improve Customer Retention", "Customers continue evaluating a product after purchase through new features, account changes, billing notices, support issues, security updates, and release communications."],
            [Users2, "Reduce Organizational Fragmentation", "Shared terminology, translation memory, quality standards, and governance prevent product, marketing, support, and regional teams from creating inconsistent language independently."],
            [Globe2, "Prepare for Sustainable Global Growth", "Early technical and operational decisions determine whether future languages can be added efficiently or require repeated extraction, retranslation, redesign, and manual coordination."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="mt-8 grid gap-4 border-b border-slate-200 pb-8 last:border-b-0 last:pb-0 sm:grid-cols-[44px_1fr]">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7]">
                <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[22px] font-semibold leading-7 text-slate-950">{title}</h3>
                <p className="mt-3 text-[17px] leading-8 text-slate-600">{text}</p>
              </div>
            </div>
          ))}
        </ArticleSection>

        <section className="border-t border-slate-200/80 py-16 md:py-20">
          <div className="mx-auto max-w-[900px]">
            <SectionHeading
              id="what-to-localize"
              intro="Plan localization across the complete customer journey rather than limiting the program to interface strings."
            >
              What Should a Software or SaaS Company Localize?
            </SectionHeading>

            <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2">
              {[
                [LayoutTemplate, "Product Interfaces and In-App Content", ["Navigation, menus, dashboards, and settings", "Buttons, forms, notifications, alerts, and errors", "Search, account controls, permissions, and billing", "Embedded help, tooltips, empty states, and role-based experiences"]],
                [Search, "Websites and Digital Acquisition", ["Product, feature, solution, pricing, and comparison pages", "Trial registration and conversion forms", "Campaign landing pages and customer stories", "Multilingual SEO and regional announcements"]],
                [Rocket, "Onboarding and Customer Communications", ["Welcome screens, setup instructions, and guided tours", "Tutorials, checklists, and lifecycle emails", "Product announcements, usage reminders, and upgrades", "Renewal communications and release notes"]],
                [FileCode2, "Documentation and Developer Content", ["User and administrator guides", "Knowledge bases and implementation instructions", "API, SDK, integration, and developer documentation", "Troubleshooting, configuration, and command-line messages"]],
                [MessageSquareText, "Customer Support", ["Help centers, FAQs, and support macros", "Chatbot knowledge and embedded assistance", "Troubleshooting and escalation procedures", "Service notifications and status communications"]],
                [Sparkles, "Marketing, Sales, and Education", ["Campaigns, presentations, demos, and customer stories", "White papers, webinars, and product videos", "Training courses and certification programs", "Subtitles, voice-over, and partner materials"]],
                [ShieldCheck, "Legal, Privacy, Security, and Compliance", ["Terms of service and privacy policies", "Data-processing and licensing information", "Security documentation and trust-center content", "Subscription agreements and market-specific disclosures"]],
              ].map(([Icon, title, items]) => (
                <div key={title} className="border-t border-slate-200 pt-6">
                  <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                  <h3 className="mt-4 text-[21px] font-semibold leading-7 text-slate-950">{title}</h3>
                  <BulletList items={items} />
                </div>
              ))}
            </div>

            <div className="mt-14 rounded-[28px] border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#C11D63]">Customer Journey Localization Map</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
                {customerJourney.map(([stage, text], index) => (
                  <div key={stage} className="relative rounded-[18px] bg-white p-4 shadow-sm">
                    <span className="text-[13px] font-semibold text-[#C11D63]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-[16px] font-semibold leading-6 text-slate-950">{stage}</p>
                    <p className="mt-1 text-[14px] leading-6 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-[16px] leading-7 text-slate-600">
                A product may technically be available in a language while still delivering a fragmented experience when only one or two stages are localized.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 py-16 md:py-20">
          <div className="mx-auto max-w-[980px]">
            <SectionHeading
              id="what-makes-saas-different"
              intro="SaaS products share the foundations of software localization, but their release cadence, operating model, customer journey, and distributed content ownership require a more continuous approach."
            >
              What Makes SaaS Localization Different?
            </SectionHeading>

            <div className="mx-auto max-w-[760px]">
              <H3>Frequent and Continuous Releases</H3>
              <Paragraph>
                SaaS products can change weekly, daily, or continuously through feature development, interface redesigns, A/B testing, product experiments, bug fixes, updated onboarding, new pricing, and regional feature availability. Localization must identify new and changed content without repeatedly processing every existing string.
              </Paragraph>

              <H3>Cloud-Based and Multi-Tenant Products</H3>
              <Paragraph>
                Shared infrastructure can support administrators, end users, managers, developers, configurable modules, role-based content, customer-specific terminology, and white-label experiences. A single product may contain several distinct user journeys with different localization priorities.
              </Paragraph>

              <H3>Subscription and Billing Experiences</H3>
              <Paragraph>
                SaaS localization often includes free trials, freemium plans, upgrades, downgrades, billing cycles, renewals, cancellation flows, tax information, currency presentation, account limits, and usage notifications. These experiences require both linguistic clarity and regional appropriateness.
              </Paragraph>

              <H3>Product-Led Growth</H3>
              <Paragraph>
                Customers may discover the product, create an account, complete setup, evaluate features, and upgrade without speaking to a company representative. The website, product, onboarding, documentation, billing, and support experience must therefore work together in each target language.
              </Paragraph>

              <H3>Connected Product Ecosystems</H3>
              <Paragraph>
                SaaS ecosystems may include web and mobile applications, APIs, integrations, developer portals, help centers, customer communities, product academies, email communications, and status pages. Localization should preserve consistent terminology across these connected environments.
              </Paragraph>

              <H3>Distributed Content Ownership and Experimentation</H3>
              <Paragraph>
                Product managers, developers, marketers, support teams, technical writers, legal teams, and regional offices may all create customer-facing content. Feature flags and experiments also introduce temporary or rapidly changing strings. Programs need shared governance and practical rules based on audience size, experiment duration, market importance, customer impact, and content risk.
              </Paragraph>
            </div>

            <ComparisonTable rows={saasComparison} />
          </div>
        </section>

        <ArticleSection>
          <SectionHeading
            id="internationalization-ready"
            intro="Internationalization creates the technical foundation for localization and should be considered during product architecture, interface design, content modeling, and development."
          >
            Build an Internationalization-Ready Product
          </SectionHeading>

          {[
            [Braces, "Separate User-Facing Content From Code", "Externalize strings into structured resource files or content systems so they can be extracted, translated, versioned, reviewed, reused, tested, and updated. Stable keys also improve tracking and translation-memory reuse."],
            [Code2, "Use Unicode and Appropriate Character Support", "Confirm character encoding, font coverage, input behavior, search behavior, data storage, normalization, rendering, and mixed-language content for the writing systems your target locales require."],
            [Link2, "Avoid String Concatenation", "Do not build sentences from fragments that assume English word order. Translators should receive complete messages with variables embedded in context whenever practical."],
            [Languages, "Support Pluralization and Grammatical Variation", "Plan for plural categories, gender, case, formality, and select messages. Structured message formats help preserve complete translatable units while supporting grammar."],
            [LayoutTemplate, "Design Flexible Interfaces", "Allow for text expansion, line wrapping, variable button widths, longer labels, different font metrics, responsive layouts, and additional vertical space."],
            [MonitorSmartphone, "Prepare for Right-to-Left Languages", "Test interface mirroring, navigation direction, alignment, bidirectional text, icons, inputs, numbers, punctuation, charts, and mixed-direction content inside the product."],
            [Settings2, "Make Regional Formats Locale-Aware", "Manage dates, times, time zones, numbers, decimal separators, currencies, units, addresses, names, phone numbers, sorting, and collation programmatically whenever possible."],
            [Globe2, "Support Language Selection and Locale Fallback", "Define how account, browser, device, organization, regional domain, and user choices determine the locale. Missing translations should fall back predictably without creating confusing mixed-language screens."],
            [TestTube2, "Use Pseudolocalization", "Simulate text expansion, altered characters, and directionality before translation to reveal hard-coded strings, truncation, encoding problems, missing character support, and layout assumptions."],
          ].map(([Icon, title, text]) => (
            <div key={title} className="mt-9 grid gap-4 sm:grid-cols-[42px_1fr]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDF2F7]">
                <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-[21px] font-semibold leading-7 text-slate-950">{title}</h3>
                <p className="mt-2 text-[17px] leading-8 text-slate-600">{text}</p>
              </div>
            </div>
          ))}

          <p className="mt-10 rounded-[22px] border border-[#EFC5D7] bg-[#FDF2F7] p-6 text-[16px] leading-8 text-slate-700">
            Continue with the <TextLink href="https://www.stepes.com/resources/localization-guides/internationalization-readiness-checklist/">Internationalization Readiness Checklist</TextLink> for an implementation-focused review, or read <TextLink href="https://www.stepes.com/resources/localization-guides/internationalization-vs-localization/">Internationalization vs. Localization</TextLink> for a deeper conceptual comparison.
          </p>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="localization-strategy"
            intro="A successful program begins with clear market priorities, a realistic scope, risk-based quality levels, and defined ownership."
          >
            Create a Software Localization Strategy
          </SectionHeading>

          <H3>Prioritize Markets and Locales</H3>
          <Paragraph>
            Market selection should consider existing product usage, customer requests, revenue potential, website traffic, competitive conditions, partner demand, support readiness, legal requirements, product fit, and localization effort. Different locales may require different launch scopes.
          </Paragraph>

          <H3>Define the Localization Scope</H3>
          <Paragraph>
            Classify content by launch importance so teams can make responsible decisions without treating every piece of content as equally urgent.
          </Paragraph>
          <div className="mt-7 overflow-hidden rounded-[24px] border border-slate-200">
            {[
              ["Launch-Critical", "Core workflows, onboarding, account management, billing, essential support, and required legal content."],
              ["Customer-Critical", "Documentation, help articles, training, and lifecycle communications."],
              ["Growth-Supporting", "Marketing campaigns, customer stories, webinars, and broader search content."],
              ["Long-Tail", "Historical documentation, rarely used features, and low-traffic content."],
            ].map(([priority, text], index) => (
              <div key={priority} className={`grid gap-2 p-5 sm:grid-cols-[170px_1fr] ${index ? "border-t border-slate-200" : ""}`}>
                <p className="text-[16px] font-semibold leading-7 text-slate-950">{priority}</p>
                <p className="text-[16px] leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <H3>Map the Complete Customer Journey</H3>
          <Paragraph>
            Identify every point where customers encounter language, including discovery, evaluation, registration, trial, onboarding, daily use, administration, support, billing, renewal, and expansion. Journey mapping exposes gaps that a basic string inventory may miss.
          </Paragraph>

          <H3>Establish Quality Tiers</H3>
          <Paragraph>
            A product button, technical guide, advertising headline, privacy policy, and high-volume support article have different purposes and risks. Define workflows for high-visibility product UI, technical documentation, marketing, support, internal content, and legal or regulated materials.
          </Paragraph>

          <H3>Define Roles and Governance</H3>
          <Paragraph>
            Document who owns source preparation, terminology, translation, review, QA, integration, approval, and release decisions across product, engineering, localization, design, marketing, support, legal, security, regional teams, and language partners.
          </Paragraph>

          <H3>Establish Success Measures</H3>
          <Paragraph>
            Define how locale readiness, turnaround time, quality, translation-memory reuse, review efficiency, support trends, product adoption, customer feedback, and cost will be evaluated before localization begins.
          </Paragraph>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="prepare-strings"
            intro="Clear source content, structured resources, protected technical elements, and useful context improve first-pass quality and reduce unnecessary review."
          >
            Prepare Software Strings and Source Content
          </SectionHeading>

          <H3>Create a Content and String Inventory</H3>
          <Paragraph>
            Identify where customer-facing content originates, including code repositories, resource files, content management systems, design platforms, documentation tools, support platforms, marketing systems, learning platforms, mobile projects, and API documentation environments. Record the owner, format, update frequency, target locales, and release process for each source.
          </Paragraph>

          <H3>Improve Source Content Before Translation</H3>
          <BulletList
            items={[
              "Resolve ambiguous labels, inconsistent terminology, unclear pronouns, and incomplete sentences.",
              "Remove duplicate strings, embedded text, excessive abbreviations, and unnecessary capitalization.",
              "Improve unclear error messages and review character limits that are more restrictive than the interface requires.",
              "Keep approved product naming consistent across the UI, website, documentation, support, and training.",
            ]}
          />

          <H3>Provide Context</H3>
          <Paragraph>
            Short strings can have several meanings. The word “Home,” for example, could refer to a navigation destination, a residence, a keyboard key, or a starting dashboard. Useful context includes the string key, screen or feature name, developer comment, screenshot, character limit, user action, grammatical role, related strings, protected terminology, and intended audience.
          </Paragraph>

          <H3>Protect Variables, Tags, and Placeholders</H3>
          <Paragraph>
            Software content may include technical elements that must remain intact throughout translation. Linguists should also understand what each element represents so it can be positioned correctly in the target language.
          </Paragraph>
          <div className="mt-6 flex flex-wrap gap-2">
            {["{username}", "%1$s", "{{count}}", "${total}", "<strong>", "XML tags", "Markdown", "Escape characters"].map((item) => (
              <code key={item} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-[15px] text-slate-700">
                {item}
              </code>
            ))}
          </div>

          <H3>Validate Localization File Formats</H3>
          <Paragraph>
            Common formats include JSON, YAML, XML, XLIFF, PO and POT, RESX, Apple strings, Android XML, ARB, CSV, Java properties, and structured spreadsheets. Files should be tested for valid syntax, unique keys, correct encoding, protected placeholders, complete source content, consistent metadata, and successful import and export.
          </Paragraph>

          <p className="mt-9 rounded-[22px] border border-slate-200 bg-slate-50 p-6 text-[16px] leading-8 text-slate-700">
            The <TextLink href="https://www.stepes.com/developers/software-localization-api/">Stepes Software Localization API</TextLink> supports connected workflows for structured resources, including strings, keys, placeholders, screenshots, branches, and localized builds. For a deeper preparation process, use the <TextLink href="https://www.stepes.com/resources/localization-guides/software-string-preparation-checklist/">Software String Preparation Checklist</TextLink>.
          </p>
        </ArticleSection>
      </article>

      <section className="bg-slate-950">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="mx-auto max-w-[920px] text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#F2A7C6]">The Software Localization Lifecycle</p>
            <h2 id="localization-workflow" className="scroll-mt-28 mt-4 text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[32px] lg:text-[36px]">
              Design the End-to-End Localization Workflow
            </h2>
            <p className="mx-auto mt-5 max-w-[800px] text-[18px] leading-8 text-slate-300">
              A scalable workflow connects business planning, product readiness, translation, integration, quality assurance, launch, and continuous improvement.
            </p>
          </div>

          <ol className="mx-auto mt-12 max-w-[1040px]">
            {lifecycle.map(([number, title, text], index) => (
              <li key={title} className="relative grid gap-4 border-t border-white/15 py-7 sm:grid-cols-[64px_220px_1fr] sm:gap-6">
                <span className="text-[18px] font-semibold text-[#F2A7C6]">{number}</span>
                <h3 className="text-[21px] font-semibold leading-7 text-white">{title}</h3>
                <p className="text-[16px] leading-7 text-slate-300">{text}</p>
                {index < lifecycle.length - 1 ? (
                  <span className="absolute bottom-[-5px] left-[26px] hidden h-2.5 w-2.5 rounded-full bg-[#C11D63] sm:block" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <article className="mx-auto w-full max-w-[1080px] px-5 sm:px-6 md:px-10 lg:px-14">
        <ArticleSection className="border-t-0">
          <SectionHeading
            id="development-stack"
            intro="Localization becomes faster and more dependable when it remains connected to the systems where product and content teams work."
          >
            Connect Localization to the Software Development Stack
          </SectionHeading>

          <H3>Select a Source of Truth</H3>
          <Paragraph>
            Each content type should have a clearly defined source of truth, such as a Git repository for product resources, a content management system for website pages, a documentation platform for user guides, a support platform for help content, or a design system for prototype strings. Localization should synchronize with these environments rather than create disconnected copies.
          </Paragraph>

          <H3>Repositories and Branches</H3>
          <Paragraph>
            Define which main, development, feature, release, and long-term support branches are translated, when strings become stable enough to process, and how approved translations move between versions. Changed-string detection helps teams translate new or modified content while preserving approved translations for unchanged strings.
          </Paragraph>

          <H3>APIs, Connectors, and Integrations</H3>
          <Paragraph>
            Integrations can automate content extraction, project creation, resource synchronization, translation assignment, status updates, review notifications, delivery, and webhook events. The goal is to reduce repetitive handoffs without removing control over quality and approval.
          </Paragraph>

          <H3>CI/CD Integration</H3>
          <Paragraph>
            A localization-enabled pipeline may detect changed resources, validate strings and placeholders, send new content for localization, retrieve approved translations, build localized versions, run automated checks, trigger in-context review, and confirm locale readiness. Languages do not always need to release simultaneously when locale-specific criteria are clear.
          </Paragraph>

          <H3>Translation Management Systems</H3>
          <Paragraph>
            A translation management system can coordinate content, target languages, translation memory, terminology, linguists, reviewers, quality checks, approvals, reporting, and delivery. It should connect to the broader product environment rather than function as an isolated destination.
          </Paragraph>

          <H3>Automate Without Losing Control</H3>
          <Paragraph>
            Routine movement can be automated, while ambiguous strings, high-visibility content, legal or regulated materials, product terminology, marketing language, low-confidence translations, critical interface changes, and final release approval retain appropriate human oversight.
          </Paragraph>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {[
              [PlugIcon, "Explore Localization Integrations", "https://www.stepes.com/integrations/"],
              [Zap, "Explore Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
            ].map(([Icon, label, href]) => (
              <a
                key={label}
                href={href}
                className="flex items-center justify-between gap-4 rounded-[20px] border border-slate-200 bg-white p-5 text-[16px] font-semibold leading-7 text-slate-900 shadow-sm transition hover:border-[#C11D63]/30 hover:text-[#B5195A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
              >
                <span className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                  {label}
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </ArticleSection>

        <section className="border-t border-slate-200/80 py-16 md:py-20">
          <div className="mx-auto max-w-[960px]">
            <SectionHeading
              id="translation-model"
              intro="There is no single production method that is appropriate for every software content type. Route content according to audience, visibility, complexity, and risk."
            >
              Choose the Right Translation and Review Model
            </SectionHeading>

            <div className="mx-auto max-w-[760px]">
              <H3>Professional Human Translation</H3>
              <Paragraph>
                Professional translation is often appropriate for high-visibility product interfaces, complex technical content, brand-sensitive messaging, legal and security materials, regulated content, and markets requiring significant adaptation. Linguists should receive product context, terminology, and reference materials.
              </Paragraph>

              <H3>AI Translation With Human Review</H3>
              <Paragraph>
                AI translation can support large or frequently changing volumes. Professional review remains important when content affects customer decisions, usability, brand perception, technical accuracy, security, legal obligations, or regulated workflows.
              </Paragraph>

              <H3>Machine Translation Post-Editing</H3>
              <Paragraph>
                Light post-editing may focus on basic comprehensibility and serious-error removal. Full post-editing aims for fluent, accurate, publication-quality content. The correct route depends on purpose, audience, visibility, and risk.
              </Paragraph>

              <H3>Translation Memory Reuse</H3>
              <Paragraph>
                Translation memory stores approved source and target segments to improve consistency, turnaround, cost efficiency, and cross-release continuity. Exact matches should still be checked when context changes because the same source string can require a different translation in another workflow.
              </Paragraph>

              <H3>Transcreation</H3>
              <Paragraph>
                Transcreation adapts meaning and persuasive intent for campaign headlines, product positioning, slogans, calls to action, launch messaging, brand content, and customer stories. It is most useful when market impact matters more than close linguistic correspondence.
              </Paragraph>
            </div>

            <div className="mt-12 hidden overflow-hidden rounded-[24px] border border-slate-200 md:block">
              <table className="w-full table-fixed border-collapse text-left">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="w-[25%] px-5 py-4 text-[16px] font-semibold text-slate-950">Content Type</th>
                    <th className="w-[39%] px-5 py-4 text-[16px] font-semibold text-slate-950">Recommended Starting Route</th>
                    <th className="w-[36%] px-5 py-4 text-[16px] font-semibold text-slate-950">Additional Consideration</th>
                  </tr>
                </thead>
                <tbody>
                  {qualityRoutes.map((row) => (
                    <tr key={row.content} className="border-t border-slate-200 align-top">
                      <th className="px-5 py-5 text-[16px] font-semibold leading-7 text-slate-900">{row.content}</th>
                      <td className="px-5 py-5 text-[16px] leading-7 text-slate-600">{row.route}</td>
                      <td className="px-5 py-5 text-[16px] leading-7 text-slate-600">{row.qualification}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-10 space-y-4 md:hidden">
              {qualityRoutes.map((row) => (
                <div key={row.content} className="rounded-[22px] border border-slate-200 bg-white p-5">
                  <h3 className="text-[19px] font-semibold leading-7 text-slate-950">{row.content}</h3>
                  <p className="mt-4 text-[16px] font-semibold text-slate-900">Recommended Starting Route</p>
                  <p className="mt-1 text-[16px] leading-7 text-slate-600">{row.route}</p>
                  <p className="mt-4 text-[16px] font-semibold text-slate-900">Additional Consideration</p>
                  <p className="mt-1 text-[16px] leading-7 text-slate-600">{row.qualification}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ArticleSection>
          <SectionHeading
            id="language-assets"
            intro="Reusable product language assets improve consistency across applications, websites, documentation, support, training, and recurring releases."
          >
            Build Reusable Product Language Assets
          </SectionHeading>

          <div className="mt-10 space-y-9">
            {[
              [BookOpen, "Terminology Management", "Maintain product names, feature names, technical terms, approved translations, definitions, prohibited translations, usage notes, and market-specific guidance. A feature rename should be reflected across the UI, documentation, support, marketing, and training."],
              [Database, "Translation Memory", "Preserve approved language across product releases, websites, documentation, support, training, marketing, and customer communications. This is especially valuable when large portions of content remain unchanged between releases."],
              [FileCode2, "Product Style Guides", "Define tone, formality, voice, capitalization, punctuation, interface conventions, abbreviations, product naming, inclusive language, and market-specific writing preferences."],
              [MonitorSmartphone, "Context and Reference Materials", "Provide screenshots, demonstrations, design files, user personas, documentation, feature descriptions, workflow diagrams, customer terminology, and previous releases to improve first-pass understanding."],
              [MessageSquareText, "Reviewer Feedback", "Move approved corrections out of isolated email threads and spreadsheets. Update translation memory, terminology, style guides, source-writing guidance, product notes, quality instructions, and reviewer training."],
            ].map(([Icon, title, text]) => (
              <div key={title} className="grid gap-4 sm:grid-cols-[44px_1fr]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FDF2F7]">
                  <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-[22px] font-semibold leading-7 text-slate-950">{title}</h3>
                  <p className="mt-3 text-[17px] leading-8 text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            <TextLink href="https://www.stepes.com/terminology-management/">Explore terminology management</TextLink>
            <TextLink href="https://www.stepes.com/translation-memory/">Explore translation memory</TextLink>
          </div>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="localization-testing"
            intro="Translation review alone cannot confirm whether localized software works correctly. Test the language, interface, functionality, technical integrity, and regional behavior together."
          >
            Test Localized Software Before Release
          </SectionHeading>

          {[
            [Languages, "Linguistic Testing", ["Accuracy, fluency, grammar, spelling, and completeness", "Terminology, tone, consistency, and contextual meaning", "Locale appropriateness and audience fit"]],
            [LayoutTemplate, "Visual and Cosmetic Testing", ["Truncation, overlap, line breaks, spacing, and alignment", "Font support, icons, right-to-left display, and component sizing", "Responsive behavior across relevant screen sizes"]],
            [MonitorSmartphone, "Functional Testing", ["Navigation, forms, search, links, and input fields", "Language switching, notifications, account workflows, and permissions", "Payment flows, file handling, exports, and role-based experiences"]],
            [Braces, "Technical Validation", ["Placeholder, tag, syntax, encoding, and file integrity", "Plural forms, missing strings, duplicate keys, and invalid escapes", "Automated checks before localized content reaches production"]],
            [Globe2, "Locale Testing", ["Dates, times, time zones, numbers, currencies, and taxes", "Units, addresses, names, phone numbers, and sorting", "Subscription language and other regional conventions"]],
            [TestTube2, "In-Context Review", ["Available space, surrounding content, and user action", "Screen purpose, visual hierarchy, workflow sequence, and related terms", "Preview environments, screenshots, and localized builds"]],
          ].map(([Icon, title, items]) => (
            <div key={title} className="mt-9 border-b border-slate-200 pb-8 last:border-b-0 last:pb-0">
              <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-[#C11D63]" aria-hidden="true" />
                <h3 className="text-[22px] font-semibold leading-7 text-slate-950">{title}</h3>
              </div>
              <BulletList items={items} />
            </div>
          ))}

          <H3>Defect Classification and Resolution</H3>
          <div className="mt-6 space-y-3">
            {[
              ["Critical", "Prevents task completion, creates legal or safety risk, or makes the product unusable."],
              ["Major", "Materially affects meaning, functionality, or customer understanding."],
              ["Minor", "Does not block use but reduces linguistic or visual quality."],
            ].map(([label, text]) => (
              <div key={label} className="grid gap-2 rounded-[18px] bg-slate-50 p-5 sm:grid-cols-[110px_1fr]">
                <p className="text-[16px] font-semibold text-slate-950">{label}</p>
                <p className="text-[16px] leading-7 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
          <Paragraph>
            Each issue should include a clear description, screenshot, location, reproduction steps, expected result, suggested correction, owner, and resolution status. Critical and major issues should be retested before release.
          </Paragraph>

          <p className="mt-9 rounded-[22px] border border-[#EFC5D7] bg-[#FDF2F7] p-6 text-[16px] leading-8 text-slate-700">
            Use the <TextLink href="https://www.stepes.com/resources/localization-guides/software-localization-testing-checklist/">Software Localization Testing Checklist</TextLink> for a detailed pre-release procedure, and explore Stepes <TextLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</TextLink> capabilities.
          </p>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="continuous-localization"
            intro="Continuous localization processes new and changed product content throughout the release cycle instead of waiting for development to finish."
          >
            Establish Continuous Localization
          </SectionHeading>

          <H3>Detect New and Updated Content</H3>
          <Paragraph>
            Distinguish among new, modified, deleted, unchanged, moved, and experimental strings so only content that requires action enters the workflow.
          </Paragraph>

          <H3>Synchronize Localization With Development</H3>
          <Paragraph>
            Localization can be triggered by repository updates, pull requests, release branches, content publishing, scheduled synchronization, or product milestones. The right model depends on release frequency and when strings become stable enough to translate.
          </Paragraph>

          <H3>Preserve Approved Content</H3>
          <Paragraph>
            Approved translations for unchanged strings should remain available. When source content changes, preserve its relationship with the prior translation so linguists can update it rather than start again.
          </Paragraph>

          <H3>Automate Routine Steps</H3>
          <BulletList
            items={[
              "Imports and changed-string detection",
              "Project creation and translation-memory matching",
              "Terminology checks, assignments, and notifications",
              "Status updates, exports, and build delivery",
            ]}
          />

          <H3>Retain Human Quality Gates</H3>
          <Paragraph>
            Professional review may remain necessary for high-impact changes, ambiguous source content, new product terminology, legal or regulated content, low-confidence AI output, new customer journeys, and major interface redesigns. Automated workflows should route exceptions to the appropriate people.
          </Paragraph>

          <H3>Coordinate Multilingual Releases</H3>
          <Paragraph>
            Define locale readiness through translation completion, review approval, build availability, QA status, open-defect severity, documentation readiness, and support readiness so product teams can make informed release decisions.
          </Paragraph>

          <H3>Build a Feedback Loop</H3>
          <Paragraph>
            Continuous localization should feed product findings back into source strings, interface design, terminology, translation memory, style guidance, internationalization practices, and future testing.
          </Paragraph>

          <p className="mt-9 rounded-[22px] border border-slate-200 bg-slate-50 p-6 text-[16px] leading-8 text-slate-700">
            Read the dedicated <TextLink href="https://www.stepes.com/resources/localization-guides/continuous-software-localization/">Continuous Software Localization Guide</TextLink> for a deeper implementation framework.
          </p>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="market-launch"
            intro="A market-ready launch coordinates the product with the websites, pricing, onboarding, documentation, support, training, legal content, and customer communications that surround it."
          >
            Launch a SaaS Product in a New Market
          </SectionHeading>

          <H3>Confirm Market and Product Readiness</H3>
          <BulletList
            items={[
              "Define the exact target locale and market requirements.",
              "Confirm core workflows are internationalized.",
              "Inventory required product and supporting content.",
              "Prepare terminology, translation memory, reviewers, and approvals.",
              "Confirm testing environments, legal requirements, support coverage, and measurement plans.",
            ]}
          />

          <H3>Start With a Controlled Pilot</H3>
          <Paragraph>
            A pilot can focus on one language, product module, customer journey, regional website, or representative user group. Choose a scope large enough to reveal real operational issues but small enough to manage carefully.
          </Paragraph>

          <H3>Coordinate the Complete Launch Experience</H3>
          <Paragraph>
            Align the product interface, website, pricing, registration, onboarding, documentation, support, training, marketing, legal content, and customer communications. Releasing these components at different times can create a fragmented experience.
          </Paragraph>

          <H3>Use In-Market Review Appropriately</H3>
          <Paragraph>
            Define what regional reviewers evaluate, when they review it, which criteria they apply, how feedback is submitted, who resolves disagreements, and how approved changes update shared language assets. Unstructured review can create delays and subjective rework.
          </Paragraph>

          <H3>Establish Launch Criteria</H3>
          <BulletList
            items={[
              "Translation and terminology approval are complete.",
              "Critical workflows have passed linguistic and functional testing.",
              "No unresolved critical defects remain.",
              "Required legal, documentation, support, and regional content is ready.",
              "Locale settings and analytics have been validated.",
            ]}
          />

          <H3>Plan Post-Launch Support</H3>
          <Paragraph>
            Monitor customer feedback, support tickets, missing translations, product analytics, terminology questions, interface defects, regional requests, and adoption patterns. Early feedback can reveal issues that were not visible before release.
          </Paragraph>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="measure-performance"
            intro="Evaluate localization across operations, quality, and customer outcomes, then use the findings to improve source content, workflows, testing, and future launches."
          >
            Measure Localization Performance
          </SectionHeading>

          <H3>Program and Operational Metrics</H3>
          <BulletList
            items={[
              "Turnaround time, on-time delivery, and review cycle time",
              "Translation-memory reuse and automation rate",
              "Cost by locale, content type, and product area",
              "Manual handoffs and locale readiness by release",
            ]}
          />

          <H3>Quality Metrics</H3>
          <BulletList
            items={[
              "Defect rate and critical or major issue counts",
              "Escaped defects, rework, and recurring error categories",
              "Terminology compliance and reviewer agreement",
              "Locale completeness and unresolved issue severity",
            ]}
          />

          <H3>Product and Customer Metrics</H3>
          <BulletList
            items={[
              "Activation and feature adoption by locale",
              "Trial conversion and task completion",
              "Documentation usage and support contact rates",
              "Customer feedback, renewal patterns, and regional engagement",
            ]}
          />

          <Paragraph>
            Product outcomes should be interpreted carefully because pricing, market fit, product availability, competition, and other factors can influence the same measures. Localization data is most useful when it produces specific improvements to market priorities, source writing, terminology, routing, reviewer training, testing coverage, and product design.
          </Paragraph>
        </ArticleSection>

        <section className="border-t border-slate-200/80 py-16 md:py-20">
          <div className="mx-auto max-w-[900px]">
            <SectionHeading
              id="common-mistakes"
              intro="Most software localization problems are not isolated translation errors. They begin with technical readiness, unclear ownership, incomplete scope, disconnected workflows, or insufficient in-context quality assurance."
            >
              Common Software Localization Mistakes
            </SectionHeading>

            <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
              {[
                ["Treating localization as the final step", "Include localization requirements during product planning, architecture, and design."],
                ["Localizing only the interface", "Map the complete customer journey, including website, onboarding, billing, documentation, support, and legal content."],
                ["Confusing language with locale", "Define exact target locales and regional requirements."],
                ["Hard-coding strings and formats", "Externalize content and use locale-aware formatting."],
                ["Concatenating sentence fragments", "Provide complete translatable messages with structured variables."],
                ["Providing strings without context", "Include comments, screenshots, feature names, and grammatical information."],
                ["Failing to manage terminology", "Maintain approved product language across product, documentation, marketing, support, and training."],
                ["Using the same workflow for every content type", "Apply risk-based quality tiers."],
                ["Relying only on linguistic review", "Perform visual, functional, technical, and locale testing."],
                ["Managing recurring releases through spreadsheets", "Connect localization to repositories, APIs, and source systems."],
                ["Leaving regional feedback unstructured", "Define review criteria and update shared language assets with approved changes."],
                ["Launching without localized support", "Include help content, support workflows, and service communications in the launch plan."],
                ["Retranslating unchanged content", "Use translation memory and changed-content detection."],
                ["Publishing unvalidated AI output", "Match professional review to content visibility, complexity, and risk."],
                ["Failing to assign ownership", "Define responsibility for every stage from source readiness through release."],
              ].map(([mistake, better], index) => (
                <div key={mistake} className="grid gap-3 py-6 sm:grid-cols-[42px_1fr] sm:gap-5">
                  <span className="text-[15px] font-semibold text-[#C11D63]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-[19px] font-semibold leading-7 text-slate-950">{mistake}</h3>
                    <p className="mt-2 text-[16px] leading-7 text-slate-600">
                      <span className="font-semibold text-slate-900">Better approach:</span> {better}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200/80 py-16 md:py-20">
          <div className="mx-auto max-w-[1000px]">
            <SectionHeading
              id="localization-checklist"
              intro="Use this checklist to assess product readiness, program design, workflow integration, quality assurance, and launch operations."
            >
              Software and SaaS Localization Checklist
            </SectionHeading>

            <div className="mt-10 grid gap-px overflow-hidden rounded-[28px] border border-slate-200 bg-slate-200 md:grid-cols-2">
              {checklistGroups.map((group) => (
                <div key={group.title} className="bg-white p-6 sm:p-7">
                  <h3 className="text-[20px] font-semibold leading-7 text-slate-950">{group.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-600">
                        <CheckCircle2 className="mt-[0.25rem] h-4 w-4 shrink-0 text-[#C11D63]" aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ArticleSection>
          <SectionHeading
            id="frequently-asked-questions"
            intro="These answers address the planning, technical, quality, timing, and operating questions teams most often encounter when preparing a multilingual software product."
          >
            Frequently Asked Questions
          </SectionHeading>

          <div className="mt-9 rounded-[24px] border border-slate-200 bg-white px-5 sm:px-7">
            {faqItems.map((item, index) => (
              <FAQItem
                key={item.question}
                item={item}
                index={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq((current) => (current === index ? -1 : index))}
              />
            ))}
          </div>
        </ArticleSection>

        <ArticleSection>
          <SectionHeading
            id="sources-and-references"
            intro="These authoritative resources provide additional technical context for internationalization, character support, and global software design."
          >
            Sources and References
          </SectionHeading>

          <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200">
            {[
              ["Internationalization and Localization", "World Wide Web Consortium (W3C)", "An introduction to designing products for localization and adapting them for specific languages, cultures, and markets.", "https://www.w3.org/International/questions/qa-i18n"],
              ["The Unicode Standard", "Unicode Consortium", "The foundational character-encoding standard used to represent and process text across modern software systems and writing systems.", "https://www.unicode.org/standard/standard.html"],
            ].map(([title, organization, description, href]) => (
              <div key={title} className="py-6">
                <a
                  href={href}
                  className="inline-flex items-center gap-2 text-[18px] font-semibold leading-7 text-[#B5195A] underline decoration-[#B5195A]/25 underline-offset-4 transition hover:text-[#8E1447] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
                >
                  {title}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <p className="mt-2 text-[16px] font-semibold text-slate-900">{organization}</p>
                <p className="mt-2 text-[16px] leading-7 text-slate-600">{description}</p>
              </div>
            ))}
          </div>
        </ArticleSection>
      </article>

      <section className="bg-slate-50">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:gap-14">
            <div>
              <h2 className="text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                Continue Building Your Software Localization Program
              </h2>
              <p className="mt-5 text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                Use these focused guides to deepen the technical, operational, and quality decisions introduced in this pillar resource.
              </p>
              <a
                href="https://www.stepes.com/resources/localization-guides/"
                className="mt-7 inline-flex items-center gap-2 text-[16px] font-semibold text-[#B5195A] transition hover:text-[#8E1447] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
              >
                Explore All Localization Guides
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
              {relatedGuides.map((guide) => (
                <a
                  key={guide.title}
                  href={guide.href}
                  className="group border-t border-slate-300 py-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#C11D63]">{guide.category}</p>
                  <h3 className="mt-3 text-[20px] font-semibold leading-7 text-slate-950 transition group-hover:text-[#B5195A]">{guide.title}</h3>
                  <p className="mt-3 text-[16px] leading-7 text-slate-600">{guide.description}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[16px] font-semibold text-[#B5195A]">
                    Read the Guide
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-5 py-16 sm:px-6 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="overflow-hidden rounded-[30px] border border-[#E8CBD8] bg-[linear-gradient(135deg,#FDF2F7_0%,#FFFFFF_52%,#FAF4F7_100%)] p-8 shadow-[0_18px_60px_rgba(15,23,42,0.05)] sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
              <div>
                <h2 className="max-w-[760px] text-[30px] font-semibold leading-[1.1] tracking-[-0.035em] text-slate-950 sm:text-[32px] lg:text-[36px]">
                  Build a Localization Program That Moves With Your Product
                </h2>
                <p className="mt-5 max-w-[780px] text-[17px] leading-8 text-slate-600 sm:text-[18px]">
                  Stepes helps software and SaaS companies localize product interfaces, websites, documentation, onboarding, support, training, marketing, and recurring releases through connected technology, professional linguists, terminology management, in-context review, and localization testing.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <a
                  href="https://www.stepes.com/contact-us/"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-[#C11D63] px-6 py-3.5 text-[16px] font-semibold !text-white shadow-[0_12px_30px_rgba(193,29,99,0.18)] transition hover:bg-[#A71954] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/35 focus-visible:ring-offset-2 visited:!text-white active:!text-white"
                >
                  Talk to an Expert
                  <ArrowRight className="h-4 w-4 text-white" aria-hidden="true" />
                </a>
                <a
                  href="https://www.stepes.com/software-translation-services/"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-slate-300 bg-white px-6 py-3.5 text-[16px] font-semibold text-slate-800 shadow-sm transition hover:border-[#C11D63]/35 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C11D63]/25 focus-visible:ring-offset-2"
                >
                  Explore Software &amp; SaaS Services
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function PlugIcon(props) {
  return <CloudCog {...props} />;
}
