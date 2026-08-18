import React, { useState } from "react";
import {
  AlignLeft,
  ArrowRight,
  BadgeCheck,
  Blocks,
  BookOpenText,
  Braces,
  Bug,
  Check,
  CheckCircle2,
  ChevronDown,
  Cloud,
  Code2,
  Cpu,
  Database,
  FileJson,
  GitBranch,
  Globe2,
  Languages,
  Laptop,
  LayoutTemplate,
  LockKeyhole,
  MessageSquareText,
  MonitorSmartphone,
  Repeat2,
  Rocket,
  ScanSearch,
  SearchCheck,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Tags,
  TestTube2,
  UsersRound,
  Workflow,
} from "lucide-react";

const BRAND = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  navy: "#172443",
  text: "#273554",
  muted: "#64708a",
  line: "#dce2ec",
  soft: "#f6f8fc",
  blush: "#fff5f8",
  dark: "#111b35",
};

const absolute = (path) => `https://www.stepes.com${path}`;

const trustItems = [
  {
    icon: BadgeCheck,
    title: "ISO-Certified Workflows",
    text: "Documented translation and quality processes",
  },
  {
    icon: Languages,
    title: "100+ Languages",
    text: "Global and regional language coverage",
  },
  {
    icon: MonitorSmartphone,
    title: "In-Context Localization",
    text: "Translation and review with product context",
  },
  {
    icon: Sparkles,
    title: "AI + Human Quality",
    text: "Automation supported by professional validation",
  },
];

const localizationPillars = [
  {
    icon: MessageSquareText,
    title: "Linguistic Adaptation",
    text: "Translate interface content so it is accurate, concise, natural, and appropriate for each user and product context.",
  },
  {
    icon: Braces,
    title: "Technical Localization",
    text: "Prepare and process resource files while protecting variables, placeholders, tags, keys, markup, and nontranslatable elements.",
  },
  {
    icon: Globe2,
    title: "Locale Adaptation",
    text: "Address dates, times, currencies, numbers, units, names, addresses, plural rules, and writing direction.",
  },
  {
    icon: SearchCheck,
    title: "Product Validation",
    text: "Review localized content in the interface and test multilingual builds for linguistic, visual, technical, and functional issues.",
  },
];

const contentGroups = [
  {
    icon: LayoutTemplate,
    title: "Navigation and Interface Components",
    text: "The controls and visual language users rely on to navigate and operate your product.",
    items: [
      "Menus, navigation, tabs, and headings",
      "Buttons, calls to action, labels, and forms",
      "Filters, search controls, and tooltips",
      "Dialogs, modal windows, settings, and preferences",
      "Dashboards, administrative consoles, and role-based interfaces",
    ],
  },
  {
    icon: Workflow,
    title: "User Journeys and Product Workflows",
    text: "Complete task-based experiences, not isolated strings without product meaning.",
    items: [
      "Account creation, sign-in, and onboarding",
      "Profile, permission, and account management",
      "Search, discovery, checkout, and payments",
      "Subscription, billing, upload, and approval workflows",
      "Reporting, analytics, support, and issue resolution",
    ],
  },
  {
    icon: Bug,
    title: "System Messages and Dynamic Content",
    text: "System-generated language that must remain clear while preserving application logic.",
    items: [
      "Error, validation, status, and warning messages",
      "Notifications, confirmations, and alerts",
      "Empty states and permission messages",
      "Progress indicators and dynamic labels",
      "System prompts and transactional messages",
    ],
  },
  {
    icon: BookOpenText,
    title: "Embedded Product Assistance",
    text: "Guidance that uses the same terminology and interaction language as the software itself.",
    items: [
      "Embedded help and contextual instructions",
      "Setup guidance and installation content",
      "Feature descriptions and guided workflows",
      "Accessibility labels and product FAQs",
      "Release notes and product-specific knowledge content",
    ],
  },
];

const engineeringChecks = [
  "Identify translatable and protected content",
  "Review file structure, segmentation, and output requirements",
  "Protect variables, tags, placeholders, keys, and markup",
  "Flag hard-coded strings and concatenated sentences",
  "Support plurals, gender, formality, and grammatical logic",
  "Validate encoding, fonts, text direction, and locale behavior",
  "Prepare localized files for reintegration and build testing",
];

const contextBenefits = [
  {
    title: "Visual Product Context",
    text: "Screenshots, prototypes, screen recordings, design references, test environments, and live interfaces show where each string appears.",
  },
  {
    title: "String Metadata",
    text: "Developer comments, string IDs, screen names, character limits, user roles, and feature information clarify meaning and constraints.",
  },
  {
    title: "Questions and Resolution",
    text: "Ambiguous strings are routed for clarification instead of being resolved through guesswork, and approved decisions are preserved for reuse.",
  },
  {
    title: "In-Product Review",
    text: "Localized strings are reviewed within the software environment to confirm meaning, tone, terminology, and text fit after reintegration.",
  },
];

const governanceItems = [
  {
    icon: Tags,
    title: "Product Terminology",
    text: "Define approved translations for product names, features, navigation labels, commands, technical concepts, user roles, and protected terms.",
    link: { label: "Explore Terminology Management", href: absolute("/terminology-management/") },
  },
  {
    icon: Database,
    title: "Translation Memory",
    text: "Reuse previously translated and approved strings where they remain appropriate, helping improve consistency and reduce unnecessary retranslation.",
    link: { label: "Explore Translation Memory", href: absolute("/translation-memory/") },
  },
  {
    icon: AlignLeft,
    title: "Product Style and Voice",
    text: "Maintain language-specific guidance for tone, formality, capitalization, punctuation, abbreviations, inclusive language, and interface conventions.",
  },
];

const formats = [
  "JSON",
  "XML",
  "XLIFF",
  "YAML / YML",
  "PO / POT",
  "RESX",
  "Java Properties",
  "Apple Strings",
  "Apple String Catalogs",
  "Android XML",
  "CSV / XLSX",
  "HTML",
  "JavaScript Resources",
  "Custom Resource Formats",
];

const platforms = [
  {
    icon: Cloud,
    title: "Web and SaaS Applications",
    text: "Browser-based platforms, portals, dashboards, administrative interfaces, subscriptions, and cloud software.",
  },
  {
    icon: Laptop,
    title: "Desktop Software",
    text: "Software products for Windows, macOS, Linux, and other desktop environments.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    text: "iOS and Android interfaces, onboarding, notifications, permissions, subscriptions, and device-specific experiences.",
    link: { label: "Explore App Localization", href: absolute("/app-localization-services/") },
  },
  {
    icon: Blocks,
    title: "Enterprise Platforms",
    text: "ERP, CRM, workforce, finance, reporting, operations, and other internal or customer-facing business systems.",
  },
  {
    icon: Cpu,
    title: "Embedded and Connected Products",
    text: "Connected devices, industrial systems, embedded software, control panels, equipment, and hardware-linked digital experiences.",
  },
  {
    icon: ShieldCheck,
    title: "Regulated Software",
    text: "Products requiring additional terminology control, documentation, review, quality records, or alignment with regulated content.",
  },
];

const workflowSteps = [
  {
    title: "Assess the Product and Source Content",
    text: "Review the product scope, resource files, target locales, release requirements, available context, existing language assets, testing access, and expected deliverables. Identify internationalization risks before they become late-stage release issues.",
  },
  {
    title: "Prepare Files, Terminology, and Context",
    text: "Protect technical elements, prepare translation memories and glossaries, and connect screenshots, metadata, developer comments, character limits, and product references to the translatable content.",
  },
  {
    title: "Translate With Product and Locale Context",
    text: "Professional linguists localize interface content using approved terminology, product context, language guidance, and locale-specific requirements for plurals, gender, formatting, and writing direction.",
  },
  {
    title: "Review Language and Run Automated QA",
    text: "Validate meaning, fluency, grammar, terminology, consistency, completeness, formatting, tag integrity, numbers, placeholders, and variables before localized files move into the product build.",
  },
  {
    title: "Integrate, Test, and Resolve Issues",
    text: "Support reintegration and review multilingual builds for linguistic, cosmetic, locale-specific, and functional issues. Track corrections through retesting and regression review.",
  },
  {
    title: "Approve the Release and Maintain Language Assets",
    text: "Deliver approved files and retain translation memory, terminology, style decisions, and issue history so future updates can move through the same controlled workflow.",
  },
];

const qaTypes = [
  {
    icon: MessageSquareText,
    title: "Linguistic QA",
    text: "Accuracy, fluency, terminology, tone, contextual meaning, completeness, variable treatment, and consistency across screens.",
    items: ["Meaning and grammar", "Terminology and tone", "Untranslated content", "Cross-screen consistency"],
  },
  {
    icon: LayoutTemplate,
    title: "Cosmetic QA",
    text: "How localized content appears within responsive layouts, devices, browsers, and writing systems.",
    items: ["Truncation and overlap", "Line breaks and spacing", "Fonts and characters", "RTL and alignment"],
  },
  {
    icon: TestTube2,
    title: "Functional Localization Testing",
    text: "Whether localized content and locale settings interfere with the intended user experience or product behavior.",
    items: ["Navigation and controls", "Forms and validation", "Search and sorting", "Locale-sensitive workflows"],
  },
  {
    icon: Repeat2,
    title: "Regression Review",
    text: "Confirmation that corrections remain fixed and have not introduced new issues elsewhere in the interface.",
    items: ["Issue retesting", "Build comparison", "Correction validation", "Release readiness"],
  },
];

const releaseModels = [
  {
    icon: Rocket,
    eyebrow: "DEFINED RELEASES",
    title: "Project-Based Software Localization",
    text: "A structured engagement for a new product, major version, new language rollout, platform migration, interface redesign, or defined localization backlog.",
    items: [
      "New product and market launches",
      "Major releases and platform migrations",
      "Interface redesigns and legacy updates",
      "Regulated product submissions",
      "Defined files, languages, testing, and delivery milestones",
    ],
  },
  {
    icon: GitBranch,
    eyebrow: "ONGOING DELIVERY",
    title: "Continuous Software Localization",
    text: "A recurring workflow that keeps multilingual products aligned with agile sprints, frequent string updates, and ongoing releases.",
    items: [
      "Separate new and modified content",
      "Reuse approved terminology and translation memory",
      "Coordinate recurring translation and review",
      "Reduce end-of-cycle localization backlogs",
      "Track issues and approvals across releases",
    ],
  },
];

const aiHumanItems = [
  {
    icon: Sparkles,
    title: "AI-Assisted Translation",
    text: "Create productive first-pass translations for suitable content and accelerate recurring, high-volume software updates.",
  },
  {
    icon: Database,
    title: "Language Asset Reuse",
    text: "Apply approved translation memory, terminology, and style guidance so new releases remain consistent with established product language.",
  },
  {
    icon: ScanSearch,
    title: "Automated Quality Checks",
    text: "Flag missing translations, tag changes, number mismatches, inconsistent terms, and placeholder problems before build integration.",
  },
  {
    icon: UsersRound,
    title: "Professional Product Validation",
    text: "Native-speaking linguists validate meaning, context, tone, usability, cultural fit, and high-risk product journeys before approval.",
  },
];

const whyStepes = [
  {
    icon: MonitorSmartphone,
    title: "Built Around the Product Experience",
    text: "Localize interface language within real user journeys, technical constraints, product roles, and release requirements rather than treating strings as disconnected text.",
  },
  {
    icon: Code2,
    title: "Engineering and Linguistic Expertise",
    text: "Connect file preparation, code-aware safeguards, professional translation, locale adaptation, and reintegration support in one coordinated workflow.",
  },
  {
    icon: SearchCheck,
    title: "Quality From Strings to Builds",
    text: "Combine automated checks, linguistic review, in-context validation, cosmetic QA, functional testing, and regression review according to product risk.",
  },
  {
    icon: Repeat2,
    title: "Flexible Delivery Across Releases",
    text: "Support a defined launch, a new language rollout, a major version, or continuous updates while preserving approved language assets for future development.",
  },
];

const relatedCapabilities = [
  {
    title: "Software & SaaS Translation Services",
    text: "Coordinate multilingual experiences across products, websites, documentation, onboarding, training, marketing, and customer support.",
    href: absolute("/software-translation-services/"),
  },
  {
    title: "Product & Engineering Solutions",
    text: "Bring terminology, review, localization QA, and release coordination earlier into product-development workflows.",
    href: absolute("/product-engineering-translation-solutions/"),
  },
  {
    title: "App Localization Services",
    text: "Localize iOS and Android interfaces, onboarding, notifications, subscriptions, app-store content, and mobile experiences.",
    href: absolute("/app-localization-services/"),
  },
  {
    title: "Technical Translation Services",
    text: "Align user guides, administrator documentation, specifications, implementation content, and release documentation with the product.",
    href: absolute("/technical-translation-services/"),
  },
  {
    title: "Software Localization API",
    text: "Connect product content and release workflows through APIs, repository integrations, webhooks, and localization automation.",
    href: absolute("/developers/software-localization-api/"),
  },
  {
    title: "Translation Quality Assurance",
    text: "Apply structured linguistic, technical, in-context, functional, and compliance-focused quality processes.",
    href: absolute("/translation-quality-assurance/"),
  },
];

const faqs = [
  {
    question: "What is software localization?",
    answer:
      "Software localization is the process of adapting a software product for a specific language and locale. It includes translation of user-facing text as well as technical preparation, locale formatting, terminology management, interface adaptation, reintegration, and testing. The objective is a product that reads naturally, displays correctly, supports local conventions, and functions properly for users in the target market.",
  },
  {
    question: "What is the difference between software translation and software localization?",
    answer:
      "Software translation converts interface text from one language into another. Software localization has a broader scope and may also address text expansion, layout, fonts, encoding, dates, currencies, measurements, plural forms, writing direction, graphics, input behavior, sorting, technical file structure, and product testing. Translation is central to localization, but it is not the complete process.",
  },
  {
    question: "What software content can Stepes localize?",
    answer:
      "Stepes localizes interfaces, menus, navigation, buttons, labels, forms, settings, dashboards, error messages, system notifications, prompts, onboarding flows, billing experiences, embedded help, accessibility labels, administrative interfaces, installation content, and release notes. Related documentation, mobile applications, websites, and customer-support content can be coordinated through the appropriate Stepes service.",
  },
  {
    question: "Which software resource files can Stepes process?",
    answer:
      "Stepes supports common software localization formats such as JSON, XML, XLIFF, YAML, PO, POT, RESX, Java Properties, Apple Strings, Apple String Catalogs, Android XML, CSV, XLSX, and HTML. Custom or proprietary formats can be assessed during project scoping to determine the safest and most efficient processing workflow.",
  },
  {
    question: "Can Stepes work directly with software resource files?",
    answer:
      "Yes. Stepes can analyze and process software resource files while protecting nontranslatable elements such as keys, variables, tags, placeholders, formatting codes, and markup. The expected output format, technical validation, and reintegration responsibilities are confirmed before localization begins.",
  },
  {
    question: "How does Stepes protect code, tags, and placeholders?",
    answer:
      "Stepes combines file preparation, protected-content rules, automated QA, and human review to identify changes to code-related elements. Checks can flag deleted, added, reordered, or modified variables, tags, placeholders, numbers, and other technical components that could affect display or functionality.",
  },
  {
    question: "What is in-context software localization?",
    answer:
      "In-context software localization gives linguists access to the environment or visual references where interface text appears. Context may include screenshots, prototypes, screen recordings, developer comments, string metadata, design files, test environments, or live product interfaces. This helps linguists understand meaning, user intent, text-length restrictions, and surrounding content before approving the translation.",
  },
  {
    question: "Can Stepes localize strings that have character limits?",
    answer:
      "Yes. Character limits can be included in the localization workflow when that information is available. Linguists adapt translations for the available space while preserving meaning and usability. Final text fit should also be validated within the localized build because font, layout, device, and language characteristics affect actual display.",
  },
  {
    question: "Does Stepes provide software localization testing?",
    answer:
      "Yes. Testing can include linguistic QA, cosmetic QA, locale validation, functional localization testing, and regression review. The exact scope depends on the product, available environment, devices or browsers, target languages, release risk, and client responsibilities.",
  },
  {
    question: "What is the difference between linguistic, cosmetic, and functional QA?",
    answer:
      "Linguistic QA evaluates accuracy, grammar, fluency, terminology, tone, completeness, and contextual meaning. Cosmetic QA checks how translations appear, including truncation, line breaks, overlap, spacing, fonts, alignment, and writing direction. Functional QA verifies that localization does not interfere with navigation, forms, controls, search, transactions, input behavior, links, or other product functions.",
  },
  {
    question: "Can Stepes support right-to-left languages?",
    answer:
      "Yes. Stepes supports right-to-left languages, including Arabic and Hebrew. A complete RTL workflow may include translation, bidirectional text review, mirrored layouts, interface alignment, punctuation, mixed-direction content, fonts, numbers, icons, navigation, input fields, and functional testing. The software itself must also be technically prepared for RTL behavior.",
  },
  {
    question: "Can Stepes support Asian languages and double-byte characters?",
    answer:
      "Yes. Stepes supports Chinese, Japanese, Korean, and other languages that may require expanded character support, appropriate fonts, input methods, line-breaking rules, and locale-specific interface review. Encoding and display should be validated in the final product environment.",
  },
  {
    question: "Can Stepes reuse our existing translations?",
    answer:
      "Yes. Existing translation memories, glossaries, bilingual files, approved software strings, style guides, and legacy translations can be reviewed for reuse. Reuse is evaluated in context because an older translation may be correct but no longer appropriate for a redesigned feature, updated user journey, or new product voice.",
  },
  {
    question: "Can Stepes support continuous software releases?",
    answer:
      "Yes. Stepes can support recurring localization workflows for products that release frequently. New and modified strings can move through translation, review, quality assurance, and delivery while approved language assets are reused across versions. Product teams can also connect technical automation through the Stepes Software Localization API.",
  },
  {
    question: "How long does a software localization project take?",
    answer:
      "The schedule depends on word and string volume, target languages, file readiness, product complexity, available context, review requirements, testing scope, release date, and whether internationalization issues must first be resolved. Stepes reviews these factors during assessment and proposes a schedule aligned with the release plan.",
  },
  {
    question: "How is software localization priced?",
    answer:
      "Pricing depends on the language combination, word volume, translation-memory leverage, linguistic workflow, engineering requirements, file complexity, in-context review, testing scope, and turnaround time. Stepes provides a detailed quotation after reviewing the source files and project requirements.",
  },
  {
    question: "What does Stepes need to prepare a software localization quote?",
    answer:
      "The most useful starting materials include source resource files or representative samples, source and target languages, approximate word or string count, product type and platform, screenshots or product access, existing translation memories and glossaries, required review and testing scope, delivery expectations, release schedule, and any security or regulatory requirements.",
  },
];

function ArrowLink({ href, children, light = false }) {
  return (
    <a className={`arrow-link${light ? " arrow-link--light" : ""}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={2} aria-hidden="true" />
    </a>
  );
}

function Button({ href, children, secondary = false, light = false }) {
  return (
    <a
      className={`button${secondary ? " button--secondary" : ""}${light ? " button--light" : ""}`}
      href={href}
    >
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.1} aria-hidden="true" />
    </a>
  );
}

function SectionHeader({ eyebrow, title, text, align = "left", light = false, id }) {
  return (
    <div className={`section-header section-header--${align}${light ? " section-header--light" : ""}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2 id={id}>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

function CheckList({ items, light = false }) {
  return (
    <ul className={`check-list${light ? " check-list--light" : ""}`}>
      {items.map((item) => (
        <li key={item}>
          <span className="check-dot" aria-hidden="true">
            <Check size={14} strokeWidth={2.5} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="shell hero-inner">
        <h1>Software Localization Services for Release-Ready Global Products</h1>
        <p className="hero-lead">
          Localize software interfaces, resource files, embedded help, and multilingual builds with professional linguists, localization engineering, in-context review, and product-focused quality assurance.
        </p>
        <p>
          Stepes helps product and engineering teams protect code integrity, resolve ambiguous UI strings, support locale-specific behavior, and deliver software that reads naturally, displays correctly, and functions as intended in every target language.
        </p>
        <div className="hero-actions">
          <Button href={absolute("/contact-us/")}>Talk to an Expert</Button>
          <Button href={absolute("/software-localization-services/#software-localization-process")} secondary>Explore Our Process</Button>
        </div>
      </div>
    </section>
  );
}

function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Software localization capabilities">
      <div className="shell trust-grid">
        {trustItems.map(({ icon: Icon, title, text }) => (
          <div className="trust-item" key={title}>
            <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
            <div>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function BeyondTranslation() {
  return (
    <section className="section section--white">
      <div className="shell">
        <SectionHeader
          eyebrow="PRODUCT-READY LOCALIZATION"
          title="Software Localization Goes Beyond Translation"
          text="Software translation converts interface text from one language into another. Software localization adapts the complete product experience for the language, region, technical environment, and expectations of each target locale."
          align="center"
        />
        <p className="center-support">
          Stepes brings linguistic adaptation, resource-file engineering, locale requirements, terminology control, multilingual build review, and software testing into one coordinated workflow so product teams can release with fewer disconnected handoffs.
        </p>
        <div className="pillar-grid">
          {localizationPillars.map(({ icon: Icon, title, text }) => (
            <article className="pillar-item" key={title}>
              <div className="icon-line"><Icon size={26} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductContent() {
  return (
    <section className="section section--soft">
      <div className="shell">
        <SectionHeader
          eyebrow="SOFTWARE PRODUCT CONTENT"
          title="Localize Every User-Facing Product Experience"
          text="Software users encounter language throughout navigation, workflows, system feedback, account management, and product assistance. Stepes localizes the content users need to understand the product, complete tasks, resolve issues, and move confidently through each experience."
        />
        <div className="content-groups">
          {contentGroups.map(({ icon: Icon, title, text, items }) => (
            <article className="content-row" key={title}>
              <div className="content-row-heading">
                <span className="icon-box"><Icon size={24} strokeWidth={1.8} aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
              <CheckList items={items} />
            </article>
          ))}
        </div>
        <div className="inline-note">
          <BookOpenText size={22} strokeWidth={1.8} aria-hidden="true" />
          <p>
            For larger manuals, administrator guides, implementation content, and product documentation programs, Stepes can align software localization with dedicated <a href={absolute("/technical-translation-services/")}>Technical Translation Services</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

function EngineeringPanel() {
  return (
    <div className="engineering-visual" aria-label="Localized resource file with protected technical elements">
      <div className="engineering-window">
        <div className="window-bar">
          <div className="window-dots"><span /><span /><span /></div>
          <span>product-interface.fr-FR.json</span>
        </div>
        <div className="code-lines" aria-hidden="true">
          <div><span className="code-pink">"checkout.title"</span><span>: </span><span className="code-light">"Finaliser votre commande"</span></div>
          <div><span className="code-pink">"cart.items"</span><span>: </span><span className="code-light">"{`{{count}}`} articles"</span></div>
          <div><span className="code-pink">"billing.total"</span><span>: </span><span className="code-light">"Total : {`{{currency}}`}"</span></div>
          <div><span className="code-pink">"error.payment"</span><span>: </span><span className="code-light">"Essayez un autre moyen"</span></div>
          <div><span className="code-pink">"status.saved"</span><span>: </span><span className="code-light">"Modifications enregistrées"</span></div>
        </div>
        <div className="engineering-status">
          <div><CheckCircle2 size={18} /> Variables protected</div>
          <div><CheckCircle2 size={18} /> Keys locked</div>
          <div><CheckCircle2 size={18} /> QA checks passed</div>
        </div>
      </div>
      <div className="engineering-float engineering-float--one">
        <FileJson size={18} /> JSON
      </div>
      <div className="engineering-float engineering-float--two">
        <Braces size={18} /> Placeholders
      </div>
      <div className="engineering-float engineering-float--three">
        <ShieldCheck size={18} /> Protected
      </div>
    </div>
  );
}

function LocalizationEngineering() {
  return (
    <section className="section section--dark">
      <div className="shell split-grid split-grid--wide">
        <div>
          <SectionHeader
            eyebrow="LOCALIZATION ENGINEERING"
            title="Protect Product Integrity From Source Files to Multilingual Builds"
            text="Software files contain more than translatable language. Resource keys, variables, tags, markup, escape sequences, character limits, conditional text, and application logic must remain intact throughout production."
            light
          />
          <p className="dark-support">
            Stepes localization engineering helps prepare content, protect technical elements, support language-specific logic, and return localized files in the structure required for testing and release.
          </p>
          <CheckList items={engineeringChecks} light />
          <div className="section-actions">
            <ArrowLink href={absolute("/contact-us/")} light>Discuss Your File Requirements</ArrowLink>
          </div>
        </div>
        <EngineeringPanel />
      </div>
    </section>
  );
}

function InContextLocalization() {
  return (
    <section className="section section--white">
      <div className="shell split-grid split-grid--context">
        <div className="context-ui" aria-label="In-context localization preview">
          <div className="context-browser">
            <div className="window-bar window-bar--light">
              <div className="window-dots"><span /><span /><span /></div>
              <span>Product checkout</span>
            </div>
            <div className="context-screen">
              <div className="context-sidebar">
                <span className="context-logo" />
                <span /><span /><span /><span />
              </div>
              <div className="context-main">
                <div className="context-title" />
                <div className="context-description" />
                <div className="context-form">
                  <div /><div /><div />
                </div>
                <div className="context-button">Finaliser la commande</div>
              </div>
              <div className="context-panel">
                <span className="context-panel-label">STRING CONTEXT</span>
                <strong>checkout.complete</strong>
                <span><b>Source:</b> Complete your order</span>
                <span><b>French:</b> Finaliser la commande</span>
                <span>Button · Checkout · 24 characters maximum</span>
                <span>User action: Submit payment</span>
              </div>
            </div>
          </div>
          <div className="context-callout">
            <MessageSquareText size={19} />
            <span>“Complete” is an action here, so the French uses “Finaliser,” not a status equivalent.</span>
          </div>
        </div>
        <div>
          <SectionHeader
            eyebrow="IN-CONTEXT UI LOCALIZATION"
            title="Give Linguists the Context Behind Every String"
            text="Software strings are often short, reused, and separated from the screens where users see them. A word such as “Apply,” “Order,” “Home,” or “Record” can have several valid translations depending on its function."
          />
          <div className="context-benefits">
            {contextBenefits.map(({ title, text }) => (
              <article key={title}>
                <span className="context-bullet" aria-hidden="true" />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
          <ArrowLink href={absolute("/software-ui-localization-in-context-translation/")}>Explore In-Context UI Localization</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function Governance() {
  return (
    <section className="section section--blush">
      <div className="shell">
        <SectionHeader
          eyebrow="PRODUCT LANGUAGE GOVERNANCE"
          title="Maintain Consistent Product Language Across Every Release"
          text="Product terminology changes as software evolves. New features are introduced, interfaces are updated, and teams create related documentation and support content. Stepes maintains an approved language foundation so each release builds on previous decisions instead of starting over."
          align="center"
        />
        <div className="governance-grid">
          {governanceItems.map(({ icon: Icon, title, text, link }) => (
            <article className="governance-item" key={title}>
              <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              {link ? <ArrowLink href={link.href}>{link.label}</ArrowLink> : null}
            </article>
          ))}
        </div>
        <div className="cross-content">
          <div>
            <strong>Cross-Content Alignment</strong>
            <p>Keep interface language aligned with embedded help, technical documentation, onboarding, release communications, training, and customer support.</p>
          </div>
          <ArrowLink href={absolute("/software-translation-services/")}>Explore Software & SaaS Translation Services</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function FormatsAndPlatforms() {
  return (
    <section className="section section--white">
      <div className="shell">
        <div className="format-platform-grid">
          <div className="format-column">
            <SectionHeader
              eyebrow="RESOURCE FILES"
              title="Work Directly With Software Localization Formats"
              text="Stepes supports common resource files as well as custom exports and proprietary structures. Compatibility, technical requirements, and expected outputs are confirmed during project assessment."
            />
            <div className="format-tags">
              {formats.map((format) => <span key={format}>{format}</span>)}
            </div>
            <ArrowLink href={absolute("/file-formats/")}>Explore File Format Support</ArrowLink>
          </div>
          <div className="platform-column">
            <SectionHeader
              eyebrow="PRODUCT ENVIRONMENTS"
              title="Support Software Across Platforms and Use Cases"
              text="Localize user experiences across browser-based, desktop, mobile, embedded, enterprise, and regulated software environments."
            />
            <div className="platform-list">
              {platforms.map(({ icon: Icon, title, text, link }) => (
                <article key={title}>
                  <Icon size={23} strokeWidth={1.8} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {link ? <ArrowLink href={link.href}>{link.label}</ArrowLink> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section section--soft" id="software-localization-process">
      <div className="shell">
        <SectionHeader
          eyebrow="RELEASE WORKFLOW"
          title="A Software Localization Process Built Around Product Delivery"
          text="Every product, file structure, release model, and quality requirement is different. Stepes configures the workflow around your software environment, target languages, review responsibilities, testing access, and release schedule."
          align="center"
        />
        <div className="timeline">
          {workflowSteps.map(({ title, text }, index) => (
            <article className="timeline-step" key={title}>
              <div className="timeline-number">{String(index + 1).padStart(2, "0")}</div>
              <div className="timeline-line" aria-hidden="true" />
              <div className="timeline-copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="center-actions">
          <Button href={absolute("/contact-us/")}>Plan Your Software Localization</Button>
        </div>
      </div>
    </section>
  );
}

function QualityAssurance() {
  return (
    <section className="section section--white">
      <div className="shell">
        <SectionHeader
          eyebrow="SOFTWARE LOCALIZATION QA"
          title="Test Localized Software Before It Reaches Users"
          text="A linguistically accurate resource file does not guarantee a release-ready product. Issues may appear only after translations are integrated into the interface and tested with real layouts, data, workflows, devices, and locale settings."
          align="center"
        />
        <div className="qa-grid">
          {qaTypes.map(({ icon: Icon, title, text, items }) => (
            <article className="qa-item" key={title}>
              <Icon size={28} strokeWidth={1.7} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <CheckList items={items} />
            </article>
          ))}
        </div>
        <div className="locale-band">
          <div>
            <span className="eyebrow">LOCALE AND TECHNICAL VALIDATION</span>
            <h3>Validate the Behaviors That Change From Market to Market</h3>
          </div>
          <div className="locale-tags">
            {[
              "Dates and times",
              "Time zones",
              "Currencies",
              "Numbers and separators",
              "Measurement units",
              "Names and addresses",
              "Calendars",
              "Character encoding",
              "Input methods",
              "Right-to-left behavior",
            ].map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
        <div className="center-actions">
          <ArrowLink href={absolute("/translation-quality-assurance/")}>Explore Translation Quality Assurance</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ReleaseModels() {
  return (
    <section className="section section--dark release-section">
      <div className="shell">
        <SectionHeader
          title="Project-Based and Continuous Software Localization"
          text="Choose a structured localization engagement for a defined release or an ongoing workflow that keeps multilingual products aligned with frequent development cycles."
          align="center"
          light
        />
        <div className="release-grid">
          {releaseModels.map(({ icon: Icon, eyebrow, title, text, items }) => (
            <article className="release-item" key={title}>
              <div className="release-heading">
                <Icon size={30} strokeWidth={1.7} aria-hidden="true" />
                <div>
                  <span className="eyebrow release-eyebrow">{eyebrow}</span>
                  <h3>{title}</h3>
                </div>
              </div>
              <p>{text}</p>
              <CheckList items={items} light />
            </article>
          ))}
        </div>
        <div className="api-bridge">
          <div>
            <strong>Connect localization to your development workflow</strong>
            <p>Automate handoffs between product development and localization with repository connections, APIs, webhooks, and CI/CD-ready workflows.</p>
          </div>
          <Button href={absolute("/developers/software-localization-api/")} light>Explore Software Localization API</Button>
        </div>
      </div>
    </section>
  );
}

function AIHuman() {
  return (
    <section className="section section--blush">
      <div className="shell">
        <SectionHeader
          eyebrow="AI + HUMAN WORKFLOWS"
          title="Use AI Where It Adds Speed and Human Expertise Where It Protects Quality"
          text="Software localization includes content with different levels of complexity and risk. Stepes combines automation and professional review so each string receives the level of attention its context, visibility, and product impact require."
          align="center"
        />
        <div className="ai-grid">
          {aiHumanItems.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <span className="ai-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="center-support center-support--narrow">
          Stepes configures the quality model by content type, product risk, audience, and business importance rather than applying one workflow indiscriminately to every string.
        </p>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section className="section section--white">
      <div className="shell security-grid">
        <div className="security-copy">
          <SectionHeader
            eyebrow="QUALITY, SECURITY, AND CONTROL"
            title="Controlled Localization for Confidential and Regulated Products"
            text="Software localization may involve unreleased features, proprietary technical information, security-related content, customer data, or regulated product interfaces. Stepes works with customer-specific requirements to establish appropriate access, review, communication, quality, and delivery controls."
          />
          <div className="security-actions">
            <ArrowLink href={absolute("/security/")}>Explore Enterprise Security</ArrowLink>
            <ArrowLink href={absolute("/iso-certifications/")}>View ISO Certifications</ArrowLink>
          </div>
        </div>
        <div className="security-list">
          {[
            [LockKeyhole, "Controlled Project Access", "Limit project participation, file access, review responsibilities, and approval permissions to authorized stakeholders."],
            [ShieldCheck, "Confidential Content Handling", "Incorporate confidentiality requirements and nondisclosure agreements into project setup for unreleased or sensitive content."],
            [UsersRound, "Defined Review and Approval", "Include product owners, subject-matter experts, regional teams, and customer reviewers in structured workflows."],
            [BadgeCheck, "Documented Quality Processes", "Document quality requirements, review stages, issue handling, and delivery expectations for consistency and accountability."],
          ].map(([Icon, title, text]) => (
            <article key={title}>
              <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyStepes() {
  return (
    <section className="section section--soft">
      <div className="shell">
        <SectionHeader
          title="A Software Localization Partner Built for Product Teams"
          text="Give product, engineering, localization, and regional teams one coordinated path from source files to validated multilingual releases."
          align="center"
        />
        <div className="why-grid">
          {whyStepes.map(({ icon: Icon, title, text }) => (
            <article key={title}>
              <div className="why-icon"><Icon size={25} strokeWidth={1.7} aria-hidden="true" /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedCapabilities() {
  return (
    <section className="section section--white">
      <div className="shell">
        <SectionHeader
          title="Connect Software Localization With the Complete Product Experience"
          text="Software localization focuses on the product itself. Stepes also supports the content, systems, teams, and workflows surrounding multilingual product delivery."
        />
        <div className="related-grid">
          {relatedCapabilities.map(({ title, text, href }) => (
            <a className="related-item" href={href} key={title}>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
              <ArrowRight size={22} strokeWidth={1.8} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="section section--soft">
      <div className="shell faq-layout">
        <div className="faq-intro">
          <SectionHeader
            title="Questions About Localizing Software Products"
            text="Explore common questions about resource files, localization engineering, in-context translation, testing, continuous releases, schedules, and pricing."
          />
          <ArrowLink href={absolute("/contact-us/")}>Ask Our Team About Your Software</ArrowLink>
        </div>
        <div className="faq-list">
          {faqs.map(({ question, answer }, index) => {
            const open = openIndex === index;
            return (
              <article className={`faq-item${open ? " is-open" : ""}`} key={question}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`faq-panel-${index}`}
                  onClick={() => setOpenIndex(open ? -1 : index)}
                >
                  <span>{question}</span>
                  <ChevronDown size={21} strokeWidth={1.8} aria-hidden="true" />
                </button>
                <div id={`faq-panel-${index}`} className="faq-answer" hidden={!open}>
                  <p>{answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-orb final-orb--one" aria-hidden="true" />
      <div className="final-orb final-orb--two" aria-hidden="true" />
      <div className="shell final-cta-inner">
        <div>
          <div className="eyebrow">READY FOR GLOBAL RELEASE</div>
          <h2>Build a Software Experience That Works in Every Language</h2>
          <p>
            Localize your interface, resource files, embedded product content, and multilingual builds through one coordinated workflow for translation, engineering, quality assurance, and release delivery.
          </p>
        </div>
        <div className="final-actions">
          <Button href={absolute("/contact-us/")}>Contact Our Team</Button>
          <Button href={absolute("/software-translation-services/")} secondary>Explore Software & SaaS Solutions</Button>
        </div>
      </div>
    </section>
  );
}

export default function SoftwareLocalizationServicesWireframe() {
  return (
    <div className="page">
      <style>{styles}</style>
      <main>
        <Hero />
        <TrustStrip />
        <BeyondTranslation />
        <ProductContent />
        <LocalizationEngineering />
        <InContextLocalization />
        <Governance />
        <FormatsAndPlatforms />
        <Process />
        <QualityAssurance />
        <ReleaseModels />
        <AIHuman />
        <Security />
        <WhyStepes />
        <RelatedCapabilities />
        <FAQ />
        <FinalCTA />
      </main>
    </div>
  );
}

const styles = `
  :root {
    color-scheme: light;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    background: #ffffff;
    color: ${BRAND.text};
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; background: #ffffff; }
  button, a { font: inherit; }
  a { color: inherit; }
  img, svg { display: block; max-width: 100%; }

  .page {
    min-width: 0;
    overflow-x: clip;
    background: #ffffff;
    color: ${BRAND.text};
  }

  .shell {
    width: 100%;
    max-width: 1392px;
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .hero {
    position: relative;
    overflow: hidden;
    padding: 76px 0 72px;
    background: #ffffff;
  }

  .hero-glow {
    position: absolute;
    width: 900px;
    height: 520px;
    left: 50%;
    top: -330px;
    transform: translateX(-50%);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(193,29,99,0.105) 0%, rgba(193,29,99,0.035) 48%, rgba(193,29,99,0) 74%);
    pointer-events: none;
  }

  .hero-inner {
    position: relative;
    max-width: 1120px;
    text-align: center;
  }

  .eyebrow {
    color: ${BRAND.magenta};
    font-size: 13px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: 0.075em;
    text-transform: uppercase;
  }

  h1, h2, h3, p { margin-top: 0; }

  h1 {
    margin-bottom: 28px;
    color: ${BRAND.navy};
    font-size: clamp(43px, 4.45vw, 61px);
    line-height: 1.035;
    font-weight: 600;
    letter-spacing: -0.045em;
  }

  .hero h1 {
    max-width: 980px;
    margin: 0 auto 28px;
  }

  .hero p {
    max-width: 840px;
    margin: 0 auto 18px;
    color: #40506f;
    font-size: 18px;
    line-height: 1.7;
  }

  .hero .hero-lead {
    max-width: 900px;
    color: #263654;
    font-size: 19px;
    line-height: 1.65;
  }

  .hero-actions,
  .section-actions,
  .final-actions,
  .security-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    align-items: center;
  }

  .hero-actions { justify-content: center; margin-top: 36px; }

  .button {
    min-height: 56px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    padding: 15px 25px;
    border: 1px solid ${BRAND.magenta};
    border-radius: 999px;
    background: ${BRAND.magenta};
    color: #ffffff;
    text-decoration: none;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.01em;
    box-shadow: 0 13px 32px rgba(193,29,99,0.16);
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .button:hover {
    transform: translateY(-1px);
    background: ${BRAND.magentaDark};
    box-shadow: 0 15px 34px rgba(193,29,99,0.21);
  }

  .button--secondary {
    background: #ffffff;
    color: ${BRAND.navy};
    border-color: #d6dce6;
    box-shadow: none;
  }

  .button--secondary:hover {
    background: #fff7fa;
    border-color: #f2b1c9;
    color: ${BRAND.magenta};
    box-shadow: none;
  }

  .button--light {
    background: #ffffff;
    color: ${BRAND.navy};
    border-color: #ffffff;
    box-shadow: none;
  }

  .button--light:hover {
    background: #fff0f5;
    color: ${BRAND.magenta};
  }

  .trust-strip {
    border-top: 1px solid #e6eaf0;
    border-bottom: 1px solid #e6eaf0;
    background: #ffffff;
  }

  .trust-grid {
    min-height: 126px;
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    align-items: center;
  }

  .trust-item {
    min-width: 0;
    display: flex;
    align-items: flex-start;
    gap: 13px;
    padding: 0 28px;
  }

  .trust-item:first-child { padding-left: 0; }
  .trust-item:last-child { padding-right: 0; }
  .trust-item + .trust-item { border-left: 1px solid #e2e6ed; }
  .trust-item svg { flex: 0 0 auto; margin-top: 2px; color: ${BRAND.magenta}; }
  .trust-item strong { display: block; margin-bottom: 5px; color: ${BRAND.navy}; font-size: 15px; }
  .trust-item span { display: block; color: ${BRAND.muted}; font-size: 13px; line-height: 1.55; }

  .section { padding: 100px 0; }
  .section--white { background: #ffffff; }
  .section--soft { background: ${BRAND.soft}; }
  .section--blush { background: ${BRAND.blush}; }
  .section--dark { background: ${BRAND.dark}; color: #ffffff; }

  .section-header { max-width: 760px; }
  .section-header--center { margin-left: auto; margin-right: auto; text-align: center; }
  .section-header .eyebrow { margin-bottom: 16px; }

  .section-header h2 {
    margin-bottom: 22px;
    color: ${BRAND.navy};
    font-size: clamp(34px, 3.3vw, 48px);
    line-height: 1.12;
    font-weight: 600;
    letter-spacing: -0.037em;
  }

  .section-header p,
  .center-support,
  .dark-support {
    margin-bottom: 0;
    color: ${BRAND.muted};
    font-size: 17px;
    line-height: 1.72;
  }

  .section-header--light h2 { color: #ffffff; }
  .section-header--light p, .dark-support { color: #c8d0e0; }
  .section-header--light .eyebrow, .section--dark > .shell > .section-header .eyebrow { color: #F2A7C6; }

  .center-support {
    max-width: 850px;
    margin: 24px auto 0;
    text-align: center;
  }

  .center-support--narrow { max-width: 760px; margin-top: 38px; }

  .pillar-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 62px;
    border-top: 1px solid ${BRAND.line};
    border-bottom: 1px solid ${BRAND.line};
  }

  .pillar-item {
    position: relative;
    min-width: 0;
    padding: 36px 28px 40px;
  }

  .pillar-item:first-child { padding-left: 0; }
  .pillar-item:last-child { padding-right: 0; }
  .pillar-item + .pillar-item { border-left: 1px solid ${BRAND.line}; }
  .icon-line { width: 48px; height: 48px; display: grid; place-items: center; margin-bottom: 22px; border-radius: 14px; background: #fff0f5; color: ${BRAND.magenta}; }
  .pillar-item h3, .governance-item h3, .qa-item h3, .why-grid h3, .related-item h3, .platform-list h3, .security-list h3, .ai-grid h3 {
    margin-bottom: 12px;
    color: ${BRAND.navy};
    font-size: 20px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: -0.018em;
  }
  .pillar-item p, .governance-item p, .qa-item p, .why-grid p, .related-item p, .platform-list p, .security-list p, .ai-grid p {
    margin-bottom: 0;
    color: ${BRAND.muted};
    font-size: 15px;
    line-height: 1.7;
  }

  .content-groups { margin-top: 58px; border-top: 1px solid ${BRAND.line}; }
  .content-row {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 70px;
    padding: 34px 0;
    border-bottom: 1px solid ${BRAND.line};
  }
  .content-row-heading { display: flex; align-items: flex-start; gap: 18px; }
  .icon-box {
    flex: 0 0 auto;
    width: 46px;
    height: 46px;
    display: grid;
    place-items: center;
    border-radius: 13px;
    background: #ffffff;
    border: 1px solid #e1e6ee;
    color: ${BRAND.magenta};
  }
  .content-row h3 { margin-bottom: 9px; color: ${BRAND.navy}; font-size: 21px; line-height: 1.35; font-weight: 600; }
  .content-row p { margin: 0; color: ${BRAND.muted}; font-size: 15px; line-height: 1.7; }

  .check-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 11px;
  }
  .check-list li { display: flex; align-items: flex-start; gap: 11px; color: #40506d; font-size: 15px; line-height: 1.55; }
  .check-dot {
    flex: 0 0 auto;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    margin-top: 1px;
    border-radius: 50%;
    background: #fff0f5;
    color: ${BRAND.magenta};
  }
  .check-list--light li { color: #d9dfeb; }
  .check-list--light .check-dot { background: rgba(193,29,99,0.18); color: #F2A7C6; }

  .inline-note {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-top: 34px;
    padding: 20px 22px;
    border: 1px solid #dde3eb;
    border-radius: 14px;
    background: #ffffff;
  }
  .inline-note svg { flex: 0 0 auto; color: ${BRAND.magenta}; margin-top: 2px; }
  .inline-note p { margin: 0; color: ${BRAND.muted}; font-size: 15px; line-height: 1.65; }
  .inline-note a { color: ${BRAND.magenta}; font-weight: 600; text-decoration: none; }

  .split-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); align-items: center; gap: 80px; }
  .split-grid--wide { grid-template-columns: minmax(0, 0.88fr) minmax(430px, 1.12fr); }
  .dark-support { margin-top: 20px; }
  .section--dark .check-list { margin-top: 30px; }
  .section--dark .section-actions { margin-top: 34px; }

  .engineering-visual { position: relative; min-height: 510px; display: grid; place-items: center; }
  .engineering-window {
    width: min(100%, 555px);
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.18);
    border-radius: 18px;
    background: #182643;
    box-shadow: 0 28px 70px rgba(0,0,0,0.23);
  }
  .window-bar {
    min-height: 48px;
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 0 18px;
    border-bottom: 1px solid rgba(255,255,255,0.11);
    color: #aeb8ca;
    font-size: 14px;
  }
  .window-dots { display: flex; gap: 6px; }
  .window-dots span { width: 8px; height: 8px; border-radius: 50%; background: #7d879b; }
  .window-dots span:first-child { background: ${BRAND.magenta}; }
  .code-lines { display: grid; gap: 18px; padding: 36px 30px 34px; color: #778299; font-family: "SFMono-Regular", Consolas, "Liberation Mono", monospace; font-size: 14px; line-height: 1.6; }
  .code-pink { color: #F2A7C6; }
  .code-light { color: #dbe2ee; }
  .engineering-status { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,0.1); }
  .engineering-status div { min-width: 0; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 17px 10px; color: #d6deeb; font-size: 14px; line-height: 1.45; text-align: center; }
  .engineering-status div + div { border-left: 1px solid rgba(255,255,255,0.1); }
  .engineering-status svg { color: #F2A7C6; }
  .engineering-float {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
    border-radius: 999px;
    background: #ffffff;
    color: ${BRAND.navy};
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 14px 34px rgba(0,0,0,0.18);
  }
  .engineering-float svg { color: ${BRAND.magenta}; }
  .engineering-float--one { left: 1%; top: 14%; }
  .engineering-float--two { right: 0; top: 29%; }
  .engineering-float--three { left: 8%; bottom: 12%; }

  .split-grid--context { grid-template-columns: minmax(440px, 1.03fr) minmax(0, 0.97fr); }
  .context-ui { position: relative; min-width: 0; padding: 18px 24px 44px 0; }
  .context-browser { overflow: hidden; border: 1px solid #d9dfe8; border-radius: 18px; background: #ffffff; box-shadow: 0 24px 55px rgba(24,36,67,0.10); }
  .window-bar--light { border-bottom-color: #e5e9ef; color: #7d8797; background: #fafbfc; }
  .context-screen { min-height: 370px; display: grid; grid-template-columns: 70px minmax(0,1fr) 220px; }
  .context-sidebar { display: flex; flex-direction: column; align-items: center; gap: 22px; padding: 21px 0; background: #f7f8fb; border-right: 1px solid #e4e8ef; }
  .context-sidebar span { width: 23px; height: 5px; border-radius: 999px; background: #c4cad3; }
  .context-sidebar .context-logo { width: 28px; height: 28px; border-radius: 8px; background: #fff0f5; border: 1px solid #f09dba; }
  .context-main { padding: 38px 28px; }
  .context-title { width: 65%; height: 17px; margin-bottom: 13px; border-radius: 999px; background: #293856; }
  .context-description { width: 88%; height: 8px; margin-bottom: 34px; border-radius: 999px; background: #d7dce4; }
  .context-form { display: grid; gap: 14px; }
  .context-form div { height: 43px; border: 1px solid #dde2e9; border-radius: 8px; }
  .context-button { width: 190px; margin-top: 24px; padding: 13px 16px; border-radius: 999px; background: ${BRAND.magenta}; color: #ffffff; font-size: 14px; line-height: 1.35; font-weight: 600; text-align: center; }
  .context-panel { display: flex; flex-direction: column; gap: 14px; padding: 24px 18px; background: #fff7fa; border-left: 1px solid #f3cada; color: #5f6b82; font-size: 14px; line-height: 1.55; }
  .context-panel-label { color: ${BRAND.magenta}; font-size: 11px; line-height: 1.4; font-weight: 600; letter-spacing: 0.12em; }
  .context-panel strong { color: ${BRAND.navy}; font-size: 14px; overflow-wrap: anywhere; }
  .context-panel b { color: ${BRAND.navy}; font-weight: 600; }
  .context-callout {
    position: absolute;
    right: 0;
    bottom: 0;
    max-width: 300px;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 15px 18px;
    border: 1px solid #f2bed1;
    border-radius: 13px;
    background: #ffffff;
    color: #4a5872;
    font-size: 13px;
    line-height: 1.5;
    box-shadow: 0 16px 36px rgba(24,36,67,0.11);
  }
  .context-callout svg { flex: 0 0 auto; color: ${BRAND.magenta}; }
  .context-benefits { display: grid; gap: 21px; margin: 33px 0 30px; }
  .context-benefits article { display: flex; align-items: flex-start; gap: 15px; }
  .context-bullet { flex: 0 0 auto; width: 10px; height: 10px; margin-top: 8px; border: 2px solid ${BRAND.magenta}; border-radius: 50%; }
  .context-benefits h3 { margin-bottom: 5px; color: ${BRAND.navy}; font-size: 17px; font-weight: 600; }
  .context-benefits p { margin: 0; color: ${BRAND.muted}; font-size: 14px; line-height: 1.65; }

  .arrow-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    padding: 6px 0;
    color: ${BRAND.magenta};
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
  }
  .arrow-link:hover { color: ${BRAND.magentaDark}; }
  .arrow-link--light { color: #ffffff; }

  .governance-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0; margin-top: 58px; border-top: 1px solid #efcbd8; border-bottom: 1px solid #efcbd8; }
  .governance-item { padding: 36px 34px; }
  .governance-item:first-child { padding-left: 0; }
  .governance-item:last-child { padding-right: 0; }
  .governance-item + .governance-item { border-left: 1px solid #efcbd8; }
  .governance-item > svg { margin-bottom: 22px; color: ${BRAND.magenta}; }
  .governance-item .arrow-link { margin-top: 20px; }
  .cross-content { display: flex; align-items: center; justify-content: space-between; gap: 30px; margin-top: 34px; padding: 22px 0 0; }
  .cross-content > div { max-width: 700px; }
  .cross-content strong { color: ${BRAND.navy}; font-size: 16px; }
  .cross-content p { margin: 6px 0 0; color: ${BRAND.muted}; font-size: 14px; line-height: 1.65; }

  .format-platform-grid { display: grid; grid-template-columns: minmax(0, 0.84fr) minmax(0, 1.16fr); gap: 80px; align-items: start; }
  .format-tags { display: flex; flex-wrap: wrap; gap: 10px; margin: 34px 0 28px; }
  .format-tags span, .locale-tags span { padding: 10px 14px; border: 1px solid #dce1e9; border-radius: 999px; background: #ffffff; color: #44526c; font-size: 16px; line-height: 1.35; font-weight: 600; }
  .platform-list { margin-top: 38px; border-top: 1px solid ${BRAND.line}; }
  .platform-list article { display: flex; align-items: flex-start; gap: 15px; padding: 20px 0; border-bottom: 1px solid ${BRAND.line}; }
  .platform-list article > svg { flex: 0 0 auto; color: ${BRAND.magenta}; margin-top: 3px; }
  .platform-list h3 { margin-bottom: 5px; font-size: 17px; }
  .platform-list p { font-size: 14px; }
  .platform-list .arrow-link { margin-top: 10px; }

  .timeline { max-width: 980px; margin: 62px auto 0; }
  .timeline-step { display: grid; grid-template-columns: 62px 1px minmax(0,1fr); gap: 24px; min-height: 132px; }
  .timeline-number { width: 52px; height: 52px; display: grid; place-items: center; border-radius: 50%; background: #ffffff; border: 1px solid #dce2ea; color: ${BRAND.magenta}; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; }
  .timeline-line { width: 1px; height: 100%; background: #d9dfe8; }
  .timeline-step:last-child .timeline-line { background: linear-gradient(#d9dfe8 0 44px, transparent 44px); }
  .timeline-copy { padding: 5px 0 34px; }
  .timeline-copy h3 { margin-bottom: 9px; color: ${BRAND.navy}; font-size: 20px; font-weight: 600; }
  .timeline-copy p { margin: 0; color: ${BRAND.muted}; font-size: 15px; line-height: 1.7; }
  .center-actions { display: flex; justify-content: center; margin-top: 36px; }

  .qa-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 56px; border-top: 1px solid ${BRAND.line}; border-bottom: 1px solid ${BRAND.line}; }
  .qa-item { min-width: 0; padding: 34px 27px 38px; }
  .qa-item:first-child { padding-left: 0; }
  .qa-item:last-child { padding-right: 0; }
  .qa-item + .qa-item { border-left: 1px solid ${BRAND.line}; }
  .qa-item > svg { margin-bottom: 22px; color: ${BRAND.magenta}; }
  .qa-item .check-list { margin-top: 22px; gap: 8px; }
  .qa-item .check-list li { font-size: 13px; }
  .qa-item .check-dot { width: 19px; height: 19px; }
  .locale-band { display: grid; grid-template-columns: minmax(0, 0.72fr) minmax(0, 1.28fr); gap: 50px; align-items: center; margin-top: 48px; padding: 34px 38px; border-radius: 18px; background: ${BRAND.soft}; }
  .locale-band .eyebrow { margin-bottom: 12px; }
  .locale-band h3 { margin: 0; color: ${BRAND.navy}; font-size: 25px; line-height: 1.35; font-weight: 600; }
  .locale-tags { display: flex; flex-wrap: wrap; gap: 9px; }

  .release-section .section-header { max-width: 820px; }
  .release-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0; margin-top: 58px; border-top: 1px solid rgba(255,255,255,0.16); border-bottom: 1px solid rgba(255,255,255,0.16); }
  .release-item { padding: 40px 40px 44px 0; }
  .release-item + .release-item { padding-left: 40px; padding-right: 0; border-left: 1px solid rgba(255,255,255,0.16); }
  .release-heading { display: flex; align-items: flex-start; gap: 17px; }
  .release-heading > svg { flex: 0 0 auto; color: #F2A7C6; }
  .release-heading span { display: block; margin-bottom: 8px; color: #F2A7C6; font-size: 11px; font-weight: 600; letter-spacing: 0.09em; }
  .release-heading h3 { margin: 0; color: #ffffff; font-size: 25px; line-height: 1.3; font-weight: 600; }
  .release-item > p { margin: 24px 0 25px; color: #c8d0e0; font-size: 15px; line-height: 1.7; }
  .api-bridge { display: flex; align-items: center; justify-content: space-between; gap: 30px; margin-top: 36px; padding: 28px 30px; border: 1px solid rgba(255,255,255,0.14); border-radius: 17px; background: rgba(255,255,255,0.045); }
  .api-bridge > div { max-width: 720px; }
  .api-bridge strong { color: #ffffff; font-size: 17px; }
  .api-bridge p { margin: 7px 0 0; color: #bdc7d9; font-size: 14px; line-height: 1.65; }

  .ai-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0; margin-top: 55px; border-top: 1px solid #efcad8; }
  .ai-grid article { display: flex; align-items: flex-start; gap: 16px; padding: 30px 32px 30px 0; border-bottom: 1px solid #efcad8; }
  .ai-grid article:nth-child(2n) { padding-left: 32px; border-left: 1px solid #efcad8; }
  .ai-icon { flex: 0 0 auto; width: 42px; height: 42px; display: grid; place-items: center; border-radius: 12px; background: #ffffff; color: ${BRAND.magenta}; }
  .ai-grid h3 { margin-bottom: 6px; font-size: 17px; }
  .ai-grid p { font-size: 14px; }

  .security-grid { display: grid; grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr); gap: 72px; align-items: center; }
  .security-actions { margin-top: 30px; gap: 24px; }
  .security-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid ${BRAND.line}; border-left: 1px solid ${BRAND.line}; }
  .security-list article { min-width: 0; display: flex; align-items: flex-start; gap: 16px; padding: 26px 24px; border-right: 1px solid ${BRAND.line}; border-bottom: 1px solid ${BRAND.line}; }
  .security-list article > svg { flex: 0 0 auto; margin-top: 3px; color: ${BRAND.magenta}; }
  .security-list h3 { margin-bottom: 7px; font-size: 17px; }
  .security-list p { font-size: 14px; }

  .why-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0; margin-top: 58px; border-top: 1px solid ${BRAND.line}; }
  .why-grid article { display: grid; grid-template-columns: 52px minmax(0,1fr); grid-template-rows: auto auto; column-gap: 18px; padding: 30px 32px 30px 0; border-bottom: 1px solid ${BRAND.line}; }
  .why-grid article:nth-child(2n) { padding-left: 32px; border-left: 1px solid ${BRAND.line}; }
  .why-icon { grid-row: 1 / 3; width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; background: #ffffff; border: 1px solid #e1e6ed; color: ${BRAND.magenta}; }
  .why-grid h3 { grid-column: 2; margin-bottom: 8px; }
  .why-grid p { grid-column: 2; }

  .related-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); margin-top: 48px; border-top: 1px solid ${BRAND.line}; border-left: 1px solid ${BRAND.line}; }
  .related-item { min-width: 0; min-height: 210px; display: flex; align-items: flex-start; justify-content: space-between; gap: 18px; padding: 30px; border-right: 1px solid ${BRAND.line}; border-bottom: 1px solid ${BRAND.line}; text-decoration: none; transition: background 180ms ease; }
  .related-item:hover { background: #fff7fa; }
  .related-item > svg { flex: 0 0 auto; color: ${BRAND.magenta}; margin-top: 2px; }
  .related-item h3 { margin-bottom: 12px; font-size: 19px; }
  .related-item p { font-size: 14px; }

  .faq-layout { display: grid; grid-template-columns: minmax(0, 0.68fr) minmax(0, 1.32fr); gap: 80px; align-items: start; }
  .faq-intro { position: sticky; top: 30px; }
  .faq-intro .button { margin-top: 30px; }
  .faq-list { border-top: 1px solid #d9dfe8; }
  .faq-item { border-bottom: 1px solid #d9dfe8; }
  .faq-item button { width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 22px 0; border: 0; background: transparent; color: ${BRAND.navy}; text-align: left; font-size: 16px; line-height: 1.45; font-weight: 600; cursor: pointer; }
  .faq-item button svg { flex: 0 0 auto; color: ${BRAND.magenta}; transition: transform 180ms ease; }
  .faq-item.is-open button svg { transform: rotate(180deg); }
  .faq-answer { padding: 0 36px 23px 0; }
  .faq-answer p { margin: 0; color: ${BRAND.muted}; font-size: 15px; line-height: 1.72; }

  .final-cta { position: relative; overflow: hidden; padding: 86px 0; background: linear-gradient(135deg, #fff5f8 0%, #ffffff 58%, #f8f9fc 100%); border-top: 1px solid #f1d8e1; }
  .final-orb { position: absolute; border-radius: 50%; background: rgba(193,29,99,0.065); }
  .final-orb--one { width: 310px; height: 310px; right: -90px; top: -140px; }
  .final-orb--two { width: 160px; height: 160px; left: 6%; bottom: -90px; }
  .final-cta-inner { position: relative; display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(330px, 0.85fr); gap: 80px; align-items: center; }
  .final-cta .eyebrow { margin-bottom: 15px; }
  .final-cta h2 { margin-bottom: 20px; color: ${BRAND.navy}; font-size: clamp(36px, 3.7vw, 52px); line-height: 1.1; font-weight: 600; letter-spacing: -0.04em; }
  .final-cta p { max-width: 760px; margin: 0; color: ${BRAND.muted}; font-size: 17px; line-height: 1.72; }
  .final-actions { justify-content: flex-end; }


  @media (max-width: 1120px) {
    .trust-item { padding-inline: 18px; }
    .split-grid, .security-grid, .format-platform-grid { gap: 55px; }
    .final-cta-inner { gap: 50px; }
  }

  @media (max-width: 980px) {
    .shell { width: min(100% - 40px, 900px); }
    .hero { padding: 62px 0 58px; }
    h1 { font-size: clamp(40px, 5.4vw, 52px); }
    .hero p { font-size: 16px; }
    .hero .hero-lead { font-size: 18px; }
    .trust-grid { grid-template-columns: repeat(2, minmax(0,1fr)); padding: 18px 0; }
    .trust-item { min-height: 78px; padding: 16px 20px; }
    .trust-item:first-child { padding-left: 20px; }
    .trust-item:last-child { padding-right: 20px; }
    .trust-item + .trust-item { border-left: 0; }
    .trust-item:nth-child(2n) { border-left: 1px solid #e2e6ed; }
    .trust-item:nth-child(n+3) { border-top: 1px solid #e2e6ed; }
    .section { padding: 82px 0; }
    .pillar-grid, .qa-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .pillar-item:nth-child(3), .pillar-item:nth-child(4), .qa-item:nth-child(3), .qa-item:nth-child(4) { border-top: 1px solid ${BRAND.line}; }
    .pillar-item:nth-child(3), .qa-item:nth-child(3) { border-left: 0; padding-left: 0; }
    .pillar-item:nth-child(2), .qa-item:nth-child(2) { padding-right: 0; }
    .pillar-item:nth-child(4), .qa-item:nth-child(4) { padding-right: 0; }
    .content-row { gap: 38px; }
    .split-grid, .split-grid--wide, .split-grid--context, .security-grid, .format-platform-grid { grid-template-columns: 1fr; }
    .engineering-visual { min-height: 460px; }
    .split-grid--context { gap: 58px; }
    .context-ui { max-width: 720px; margin: 0 auto; }
    .format-platform-grid { gap: 68px; }
    .governance-grid { grid-template-columns: 1fr; border-bottom: 0; }
    .governance-item, .governance-item:first-child, .governance-item:last-child { padding: 30px 0; border-bottom: 1px solid #efcbd8; }
    .governance-item + .governance-item { border-left: 0; }
    .cross-content { align-items: flex-start; }
    .locale-band { grid-template-columns: 1fr; gap: 28px; }
    .ai-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .ai-grid article { padding: 26px 24px 26px 0; }
    .ai-grid article:nth-child(2n) { padding-left: 24px; border-left: 1px solid #efcad8; }
    .why-grid, .related-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .why-grid article { padding: 28px 24px 28px 0; }
    .why-grid article:nth-child(2n) { padding-left: 24px; }
    .faq-layout { grid-template-columns: 1fr; gap: 48px; }
    .faq-intro { position: static; }
    .final-cta-inner { grid-template-columns: 1fr; }
    .final-actions { justify-content: flex-start; }
  }

  @media (max-width: 760px) {
    .shell { width: min(100% - 32px, 680px); }
    .hero { padding: 50px 0 38px; }
    h1 { font-size: clamp(39px, 10vw, 51px); }
    .hero p, .hero .hero-lead { font-size: 16px; }
    .button { min-height: 52px; padding: 13px 20px; }
    .section { padding: 72px 0; }
    .section-header h2 { font-size: clamp(32px, 8vw, 42px); }
    .section-header p, .center-support, .dark-support { font-size: 16px; }
    .pillar-grid, .qa-grid { grid-template-columns: 1fr; }
    .pillar-item, .pillar-item:first-child, .pillar-item:last-child, .qa-item, .qa-item:first-child, .qa-item:last-child { padding: 30px 0; border-left: 0; border-top: 1px solid ${BRAND.line}; }
    .pillar-item:first-child, .qa-item:first-child { border-top: 0; }
    .content-row { grid-template-columns: 1fr; gap: 24px; }
    .engineering-visual { min-height: 420px; }
    .engineering-status { grid-template-columns: 1fr; }
    .engineering-status div + div { border-left: 0; border-top: 1px solid rgba(255,255,255,0.1); }
    .engineering-float { display: none; }
    .context-ui { padding: 0 0 46px; }
    .context-screen { grid-template-columns: 54px minmax(0,1fr); }
    .context-panel { grid-column: 1 / -1; border-left: 0; border-top: 1px solid #f3cada; }
    .context-callout { right: 12px; }
    .cross-content { flex-direction: column; }
    .timeline-step { grid-template-columns: 54px 1px minmax(0,1fr); gap: 16px; }
    .timeline-number { width: 46px; height: 46px; }
    .release-grid { grid-template-columns: 1fr; }
    .release-item, .release-item + .release-item { padding: 34px 0; border-left: 0; }
    .release-item + .release-item { border-top: 1px solid rgba(255,255,255,0.16); }
    .api-bridge { align-items: flex-start; flex-direction: column; }
    .ai-grid { grid-template-columns: 1fr; }
    .ai-grid article, .ai-grid article:nth-child(2n) { padding: 25px 0; border-left: 0; }
    .why-grid, .related-grid { grid-template-columns: 1fr; }
    .why-grid article, .why-grid article:nth-child(2n) { padding: 26px 0; border-left: 0; }
    .security-list { grid-template-columns: 1fr; border-left: 0; }
    .security-list article { padding: 24px 0; border-right: 0; }
    .related-grid { border-left: 0; }
    .related-item { min-height: auto; padding: 26px 0; border-right: 0; }
  }

  @media (max-width: 520px) {
    .shell { width: min(100% - 28px, 460px); }
    .hero { padding-top: 44px; }
    h1 { font-size: clamp(36px, 11.2vw, 45px); line-height: 1.055; }
    .hero-actions, .final-actions { align-items: stretch; flex-direction: column; }
    .hero-actions .button, .final-actions .button { width: 100%; }
    .trust-grid { grid-template-columns: 1fr; padding: 0; }
    .trust-item, .trust-item:first-child, .trust-item:last-child { min-height: auto; padding: 18px 0; }
    .trust-item:nth-child(2n) { border-left: 0; }
    .trust-item + .trust-item { border-top: 1px solid #e2e6ed; }
    .section { padding: 64px 0; }
    .section-header h2 { font-size: clamp(31px, 9.4vw, 39px); }
    .pillar-grid { margin-top: 44px; }
    .content-row-heading { gap: 13px; }
    .icon-box { width: 42px; height: 42px; }
    .inline-note { padding: 17px; }
    .engineering-visual { min-height: auto; margin-top: 18px; }
    .code-lines { padding: 27px 18px; font-size: 14px; overflow: hidden; }
    .context-main { padding: 30px 18px; }
    .context-button { width: min(100%, 210px); }
    .context-sidebar { display: none; }
    .context-screen { grid-template-columns: 1fr; }
    .context-panel { grid-column: auto; }
    .context-callout { position: relative; right: auto; bottom: auto; max-width: none; margin: -12px 12px 0; }
    .format-tags span, .locale-tags span { font-size: 16px; }
    .timeline-step { grid-template-columns: 44px minmax(0,1fr); gap: 15px; min-height: auto; }
    .timeline-line { display: none; }
    .timeline-number { width: 42px; height: 42px; }
    .timeline-copy { padding-bottom: 30px; }
    .locale-band { padding: 26px 21px; }
    .release-heading h3 { font-size: 22px; }
    .api-bridge { padding: 24px 20px; }
    .faq-item button { font-size: 16px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 70px 0; }
    .final-cta h2 { font-size: clamp(34px, 9.8vw, 42px); }
  }


  /* Stepes Wireframe Generation Spec v1.5 safeguards */
  strong { font-weight: 600; }

  .hero { padding: 104px 0 96px; }
  .section { padding: 96px 0; }
  .section--dense { padding: 80px 0; }

  .eyebrow,
  .section-header .eyebrow,
  .final-cta .eyebrow,
  .locale-band .eyebrow,
  .release-eyebrow {
    color: #C11D63;
    font-size: 11px;
    line-height: 1.4;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    opacity: 1;
  }

  .section--dark .eyebrow,
  .section-header--light .eyebrow,
  .release-eyebrow {
    color: #F2A7C6;
  }

  h1 {
    font-size: 48px;
    line-height: 1.08;
    font-weight: 600;
  }

  .section-header h2,
  .final-cta h2 {
    font-size: 36px;
    line-height: 1.16;
    font-weight: 600;
  }

  h3,
  .pillar-item h3,
  .content-row h3,
  .context-benefits h3,
  .governance-item h3,
  .qa-item h3,
  .why-grid h3,
  .related-item h3,
  .platform-list h3,
  .security-list h3,
  .ai-grid h3,
  .timeline-copy h3,
  .release-heading h3,
  .locale-band h3 {
    font-size: 24px;
    line-height: 1.32;
    font-weight: 600;
  }

  .pillar-item p,
  .content-row p,
  .check-list li,
  .inline-note p,
  .context-benefits p,
  .governance-item p,
  .cross-content p,
  .platform-list p,
  .timeline-copy p,
  .qa-item p,
  .qa-item .check-list li,
  .release-item > p,
  .api-bridge p,
  .ai-grid p,
  .security-list p,
  .why-grid p,
  .related-item p,
  .faq-answer p {
    font-size: 16px;
    line-height: 1.7;
  }

  .hero p,
  .hero .hero-lead,
  .section-header p,
  .center-support,
  .dark-support,
  .final-cta p {
    font-size: 18px;
    line-height: 1.7;
  }

  .hero .hero-lead { font-size: 18px; }
  .section-header p { max-width: 820px; }
  .faq-answer { max-width: 840px; }

  .context-callout,
  .arrow-link,
  .faq-item button {
    font-size: 16px;
  }

  .engineering-status div,
  .engineering-float,
  .window-bar,
  .code-lines,
  .context-button,
  .context-panel,
  .context-panel strong {
    font-size: 14px;
  }

  .context-panel-label {
    color: #C11D63;
    font-size: 11px;
    line-height: 1.4;
    font-weight: 600;
    letter-spacing: 0.12em;
    opacity: 1;
  }

  .format-tags span,
  .locale-tags span {
    font-size: 16px;
  }

  .code-lines div {
    overflow-wrap: anywhere;
    word-break: break-word;
  }

  .trust-item strong,
  .trust-item span {
    font-size: 16px;
    line-height: 1.55;
  }

  .button {
    font-size: 16px;
    font-weight: 600;
  }

  .button:not(.button--secondary):not(.button--light),
  .button:not(.button--secondary):not(.button--light):link,
  .button:not(.button--secondary):not(.button--light):visited,
  .button:not(.button--secondary):not(.button--light):hover,
  .button:not(.button--secondary):not(.button--light):active,
  .button:not(.button--secondary):not(.button--light):focus,
  .button:not(.button--secondary):not(.button--light):focus-visible,
  .button:not(.button--secondary):not(.button--light) span,
  .button:not(.button--secondary):not(.button--light) svg {
    color: #ffffff !important;
    fill: none;
    stroke: #ffffff !important;
  }

  .button:focus-visible,
  .arrow-link:focus-visible,
  .related-item:focus-visible,
  .faq-item button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.28);
    outline-offset: 3px;
  }

  .release-heading span.release-eyebrow {
    display: block;
    margin-bottom: 8px;
    color: #F2A7C6;
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.12em;
  }

  @media (max-width: 1439px) {
    .shell {
      width: 100%;
      max-width: 1360px;
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (max-width: 900px) {
    .hero { padding: 88px 0 80px; }
    .hero-glow { width: 720px; height: 440px; top: -300px; }

    .shell {
      width: 100%;
      max-width: none;
      padding-left: 24px;
      padding-right: 24px;
    }

    h1 { font-size: 42px; }
    .section-header h2,
    .final-cta h2 { font-size: 32px; }
    h3,
    .pillar-item h3,
    .content-row h3,
    .context-benefits h3,
    .governance-item h3,
    .qa-item h3,
    .why-grid h3,
    .related-item h3,
    .platform-list h3,
    .security-list h3,
    .ai-grid h3,
    .timeline-copy h3,
    .release-heading h3,
    .locale-band h3 { font-size: 22px; }
  }

  @media (max-width: 600px) {
    .shell {
      width: 100%;
      padding-left: 20px;
      padding-right: 20px;
    }

    .hero { padding: 72px 0 64px; }
    .hero-glow { width: 520px; height: 360px; top: -250px; }
    .hero h1 { margin-bottom: 24px; }
    .hero p { max-width: 100%; }
    .hero-actions { margin-top: 30px; }
    .section { padding: 68px 0; }
    h1 { font-size: 38px; }
    .section-header h2,
    .final-cta h2 { font-size: 30px; }
    h3,
    .pillar-item h3,
    .content-row h3,
    .context-benefits h3,
    .governance-item h3,
    .qa-item h3,
    .why-grid h3,
    .related-item h3,
    .platform-list h3,
    .security-list h3,
    .ai-grid h3,
    .timeline-copy h3,
    .release-heading h3,
    .locale-band h3 { font-size: 20px; }

    .hero-actions .button,
    .final-actions .button { min-height: 52px; width: 100%; }
  }

  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`;
