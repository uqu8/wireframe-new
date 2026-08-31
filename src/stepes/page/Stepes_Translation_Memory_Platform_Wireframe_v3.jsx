import React, { useState } from "react";

const URLS = {
  contact: "https://www.stepes.com/contact-us/",
  enterpriseManagement: "https://www.stepes.com/enterprise-translation-management/",
  aiPlatform: "https://www.stepes.com/ai-translation-platform/",
  aiHumanWorkflow: "https://www.stepes.com/ai-human-translation-workflow/",
  terminology: "https://www.stepes.com/terminology-management/",
  quality: "https://www.stepes.com/translation-quality-assurance/",
  workflowAutomation: "https://www.stepes.com/translation-workflow-automation/",
  reporting: "https://www.stepes.com/translation-reporting-analytics/",
  customerPortal: "https://www.stepes.com/translation-management-portal/",
  security: "https://www.stepes.com/security/",
  userRoles: "https://www.stepes.com/translation-approval-workflows/",
  translationApi: "https://www.stepes.com/developers/translation-api/",
  softwareApi: "https://www.stepes.com/developers/software-localization-api/",
  websiteProxy: "https://www.stepes.com/website-translation-proxy/",
  softwareLocalization: "https://www.stepes.com/software-localization-services/",
  technicalTranslation: "https://www.stepes.com/technical-translation-services/",
  lifeSciences: "https://www.stepes.com/life-sciences-translation-services/",
  legalTranslation: "https://www.stepes.com/legal-translation-services/",
  websiteTranslation: "https://www.stepes.com/website-translation-services/",
  customerSupport: "https://www.stepes.com/solutions/multilingual-customer-support/",
};

const valuePoints = [
  {
    icon: "reuse",
    title: "Reuse Approved Translations",
    text: "Preserve trusted bilingual content and make it available for future translation projects.",
  },
  {
    icon: "consistency",
    title: "Improve Language Consistency",
    text: "Apply approved wording across products, departments, channels, and global markets.",
  },
  {
    icon: "speed",
    title: "Accelerate Multilingual Delivery",
    text: "Reduce repetitive translation work and focus review on new or changed content.",
  },
  {
    icon: "control",
    title: "Retain Control of Language Assets",
    text: "Centralize multilingual intellectual property instead of leaving it scattered across projects and providers.",
  },
];

const memorySteps = [
  {
    title: "Translate and Review",
    text: "New content moves through the appropriate AI, professional translation, and review workflow.",
  },
  {
    title: "Approve Bilingual Content",
    text: "Validated source and target segments become trusted language assets for the organization.",
  },
  {
    title: "Store and Organize",
    text: "Approved translations are structured by language, product, domain, market, or program.",
  },
  {
    title: "Identify Future Matches",
    text: "Stepes detects identical or similar content when new projects enter the platform.",
  },
  {
    title: "Reuse, Adapt, and Update",
    text: "The right translation is reused or reviewed in context, and final approvals strengthen the memory.",
  },
];

const matchingTypes = [
  {
    label: "Exact Match",
    score: "100%",
    text: "Identical source content can reuse a previously approved translation when project and context requirements align.",
  },
  {
    label: "In-Context Match",
    score: "Context verified",
    text: "Both the wording and surrounding content match a previously approved use, supporting higher-confidence reuse.",
  },
  {
    label: "Similar Match",
    score: "Fuzzy",
    text: "A related translation gives linguists a strong starting point while preserving human review for the differences.",
  },
  {
    label: "New Content",
    score: "No suitable match",
    text: "Content moves through the appropriate AI, human, or hybrid translation workflow and becomes reusable after approval.",
  },
];

const aiWorkflow = [
  {
    title: "Analyze Content",
    text: "Identify reusable language and genuinely new material.",
  },
  {
    title: "Apply Language Assets",
    text: "Use approved translation memory and terminology requirements.",
  },
  {
    title: "Translate New Content",
    text: "Route suitable content to AI, human translation, or a hybrid workflow.",
  },
  {
    title: "Review in Context",
    text: "Native linguists and subject-matter reviewers validate meaning and market fit.",
  },
  {
    title: "Assure Quality",
    text: "Apply linguistic and technical QA before final approval.",
  },
  {
    title: "Strengthen the Memory",
    text: "Return approved bilingual content to the enterprise language asset base.",
  },
];

const governanceItems = [
  {
    icon: "structure",
    title: "Structured Memory Organization",
    text: "Align memories with brands, products, departments, content domains, language pairs, markets, or regulated programs.",
  },
  {
    icon: "roles",
    title: "Roles and Permissions",
    text: "Control who can view, search, manage, approve, import, or export language assets across enterprise teams.",
  },
  {
    icon: "approval",
    title: "Approval and Trust",
    text: "Differentiate approved translations from drafts, legacy content, AI output, market variants, and deprecated language.",
  },
  {
    icon: "updates",
    title: "Updates and Corrections",
    text: "Incorporate newly approved language while preventing outdated translations from remaining the preferred option.",
  },
];

const optimizationItems = [
  {
    title: "Consolidate Historical Assets",
    text: "Bring translation memories from multiple providers, desktop applications, teams, and legacy systems into a more connected environment.",
  },
  {
    title: "Resolve Duplicate and Conflicting Content",
    text: "Identify competing translations, inconsistent language, and overlapping resources that can weaken future reuse.",
  },
  {
    title: "Retire Outdated Language",
    text: "Manage obsolete product names, terminology, brand language, market variants, and legacy translations as requirements evolve.",
  },
  {
    title: "Maintain Long-Term Relevance",
    text: "Keep language assets organized and trustworthy as products, regulations, content programs, and global teams change.",
  },
];

const outcomes = [
  {
    title: "Faster Multilingual Delivery",
    text: "Reduce the amount of content that must be translated from the beginning across recurring releases and updates.",
  },
  {
    title: "More Consistent Global Content",
    text: "Reuse established language across products, channels, departments, and markets.",
  },
  {
    title: "Less Repetitive Work",
    text: "Let linguists and reviewers focus on new, changed, complex, or high-risk material.",
  },
  {
    title: "Stronger Brand Control",
    text: "Combine translation memory with terminology resources to reinforce approved product and brand language.",
  },
  {
    title: "Better Program Continuity",
    text: "Preserve institutional language knowledge as teams, technologies, and providers change.",
  },
  {
    title: "Greater Long-Term Return",
    text: "Turn each approved translation into an asset that can contribute value to future projects.",
  },
];

const useCases = [
  {
    icon: "software",
    title: "Software and Product Releases",
    text: "Reuse approved UI strings, onboarding content, release notes, help text, and documentation across versions.",
    link: "Software Localization Services",
    href: URLS.softwareLocalization,
  },
  {
    icon: "document",
    title: "Technical Documentation",
    text: "Maintain consistent procedures, specifications, warnings, component names, and recurring instructions.",
    link: "Technical Translation Services",
    href: URLS.technicalTranslation,
  },
  {
    icon: "regulated",
    title: "Life Sciences and Regulated Content",
    text: "Preserve approved language across related medical, clinical, regulatory, and quality documentation.",
    link: "Life Sciences Translation",
    href: URLS.lifeSciences,
  },
  {
    icon: "legal",
    title: "Legal and Compliance Content",
    text: "Support consistent use of clauses, policies, notices, definitions, and standardized disclosures where appropriate.",
    link: "Legal Translation Services",
    href: URLS.legalTranslation,
  },
  {
    icon: "website",
    title: "Websites and Digital Marketing",
    text: "Maintain approved product language, navigation, calls to action, and campaign messaging as digital content evolves.",
    link: "Website Translation Services",
    href: URLS.websiteTranslation,
  },
  {
    icon: "support",
    title: "Customer Support and Knowledge Bases",
    text: "Reuse established troubleshooting instructions, answers, product language, and service notifications.",
    link: "Multilingual Customer Support",
    href: URLS.customerSupport,
  },
];

const platformLinks = [
  {
    title: "Enterprise Translation Management",
    text: "Coordinate multilingual content, teams, approvals, language assets, and program requirements.",
    href: URLS.enterpriseManagement,
  },
  {
    title: "Terminology Management",
    text: "Govern approved product names, technical terms, definitions, and specialized vocabulary.",
    href: URLS.terminology,
  },
  {
    title: "AI + Human Translation Workflow",
    text: "Combine automation with professional language expertise and review based on content requirements.",
    href: URLS.aiHumanWorkflow,
  },
  {
    title: "Translation Quality Assurance",
    text: "Apply systematic linguistic and technical quality controls throughout the translation lifecycle.",
    href: URLS.quality,
  },
  {
    title: "Workflow Automation",
    text: "Automate content routing, project creation, approvals, notifications, and delivery.",
    href: URLS.workflowAutomation,
  },
  {
    title: "Reporting & Analytics",
    text: "Understand multilingual volume, workflows, performance, and language asset utilization.",
    href: URLS.reporting,
  },
  {
    title: "Customer Translation Portal",
    text: "Give authorized teams centralized access to projects, files, collaboration, and language resources.",
    href: URLS.customerPortal,
  },
  {
    title: "Translation API",
    text: "Connect Stepes translation workflows and language assets with enterprise applications and content systems.",
    href: URLS.translationApi,
  },
];

const faqs = [
  {
    question: "What is translation memory?",
    answer:
      "Translation memory is a structured bilingual database that stores source content together with its approved translation. When the same or similar source content appears in a future project, the stored translation can be reused directly or reviewed and adapted for the new context.",
  },
  {
    question: "How is translation memory different from machine translation?",
    answer:
      "Translation memory reuses translations that were previously created and approved. Machine translation generates a new translation using an automated language system. Stepes can use both in the same workflow: translation memory identifies trusted existing content, while AI or professional linguists translate suitable new material.",
  },
  {
    question: "How is translation memory different from a glossary?",
    answer:
      "Translation memory stores complete bilingual segments such as sentences, headings, and interface strings. A glossary or terminology database manages individual terms, product names, definitions, approved translations, and usage guidance. The two resources work together to improve consistency and quality.",
  },
  {
    question: "Does translation memory replace professional translators?",
    answer:
      "No. Translation memory reduces repetitive work and gives linguists useful context, but human review may still be required to confirm that a previous translation is accurate and appropriate for the new audience, market, product version, or regulatory setting.",
  },
  {
    question: "Can translation memory be used with AI translation?",
    answer:
      "Yes. Translation memory provides approved organization-specific language that can strengthen governed AI translation workflows. Stepes combines language assets with terminology, AI translation, professional review, and quality assurance according to project requirements.",
  },
  {
    question: "Can existing translation memories be imported?",
    answer:
      "Existing bilingual resources can be reviewed and prepared for use within Stepes workflows. Common resources may include TMX, XLIFF, and structured bilingual files. The appropriate process depends on the format, language pair, content quality, and intended use.",
  },
  {
    question: "Can memories from multiple providers be consolidated?",
    answer:
      "Yes. Historical memories can be evaluated and consolidated into a more centralized language asset environment. The process may include file conversion, alignment review, duplicate handling, terminology evaluation, domain organization, and quality assessment.",
  },
  {
    question: "Does translation memory guarantee translation quality?",
    answer:
      "No technology can guarantee that a previous translation is correct in every future context. Stepes combines translation memory with terminology controls, professional review, and translation quality assurance when contextual validation is required.",
  },
  {
    question: "Which content benefits most from translation memory?",
    answer:
      "Translation memory is especially valuable for content that repeats, evolves, or is released in versions, including software, technical documentation, websites, product information, legal content, regulated materials, and customer support knowledge bases.",
  },
  {
    question: "Does translation memory reduce translation costs?",
    answer:
      "Translation memory can reduce repetitive translation effort by identifying content that has already been translated. The commercial impact depends on reusable volume, language pair, content type, required review level, and the workflow selected for each project.",
  },
];

function Icon({ name, size = 24 }) {
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

  const paths = {
    reuse: (
      <>
        <path d="M7 7h8.5a4.5 4.5 0 0 1 0 9H13" />
        <path d="m7 7 3-3M7 7l3 3" />
        <path d="M17 17H8.5a4.5 4.5 0 0 1 0-9H11" />
        <path d="m17 17-3 3m3-3-3-3" />
      </>
    ),
    consistency: (
      <>
        <path d="M5 6h14M5 12h10M5 18h14" />
        <path d="m17 11 2 2 3-4" />
      </>
    ),
    speed: (
      <>
        <path d="M4 13a8 8 0 1 1 16 0" />
        <path d="m12 13 4-4" />
        <path d="M7 18h10" />
      </>
    ),
    control: (
      <>
        <path d="M12 3 5 6v5c0 4.6 2.9 8 7 10 4.1-2 7-5.4 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.5-4" />
      </>
    ),
    structure: (
      <>
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="9" y="14" width="6" height="6" rx="1" />
        <path d="M7 10v2h10v-2M12 12v2" />
      </>
    ),
    roles: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 19c.7-3.2 2.5-5 5.5-5s4.8 1.8 5.5 5" />
        <path d="M16 11h5M18.5 8.5v5" />
      </>
    ),
    approval: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m8 12 2.5 2.5L16.5 9" />
      </>
    ),
    updates: (
      <>
        <path d="M20 11a8 8 0 1 0-2.3 5.7" />
        <path d="M20 5v6h-6" />
      </>
    ),
    software: (
      <>
        <rect x="3" y="4" width="18" height="15" rx="2" />
        <path d="M3 8h18M7 6h.01M10 6h.01" />
        <path d="m9 13 2 2 4-4" />
      </>
    ),
    document: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5M9 12h6M9 16h6" />
      </>
    ),
    regulated: (
      <>
        <path d="M12 3v18M3 12h18" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
    legal: (
      <>
        <path d="M12 3v18M6 6h12M5 9l-3 6h6L5 9Zm14 0-3 6h6l-3-6Z" />
      </>
    ),
    website: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    support: (
      <>
        <path d="M4 13a8 8 0 0 1 16 0" />
        <path d="M4 13v5h4v-5H4Zm12 0v5h4v-5h-4Z" />
        <path d="M16 19c-1 1.3-2.3 2-4 2" />
      </>
    ),
  };

  return <svg {...common}>{paths[name] || paths.approval}</svg>;
}

function Arrow({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 10h11" />
      <path d="m11 6 4 4-4 4" />
    </svg>
  );
}

function EditorialLink({ href, children, inverse = false }) {
  return (
    <a className={`editorial-link${inverse ? " inverse" : ""}`} href={href}>
      <span>{children}</span>
      <Arrow size={17} />
    </a>
  );
}

function SectionHeader({ eyebrow, title, intro, align = "left", dark = false }) {
  return (
    <div className={`section-header ${align === "center" ? "center" : ""}`}>
      {eyebrow ? <p className={`eyebrow${dark ? " dark" : ""}`}>{eyebrow}</p> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function TranslationMemoryWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="tm-page">
      <style>{styles}</style>

      <section className="hero">
        <div className="shell hero-copy">
          <h1>Turn Every Approved Translation Into a Reusable Enterprise Language Asset</h1>
          <p className="hero-intro">
            Stepes Translation Memory centralizes, manages, and securely reuses approved bilingual content across projects, teams, content types, and languages. Improve consistency, accelerate multilingual delivery, and connect trusted language assets to AI and human translation workflows.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={URLS.contact}>
              <span>Talk to an Expert</span>
              <Arrow />
            </a>
            <a className="button secondary" href={URLS.enterpriseManagement}>
              <span>Explore Enterprise Translation Management</span>
              <Arrow />
            </a>
          </div>
        </div>

        <div className="shell">
          <div className="memory-console" aria-label="Translation memory matching example">
            <div className="console-topbar">
              <div>
                <span className="console-kicker">Enterprise Translation Memory</span>
                <strong>Approved bilingual assets in context</strong>
              </div>
              <div className="console-meta">
                <span>English → German</span>
                <span className="status-dot">Approved assets</span>
              </div>
            </div>
            <div className="console-grid console-head" aria-hidden="true">
              <span>Source content</span>
              <span>Approved translation</span>
              <span>Match</span>
            </div>
            <div className="console-grid console-row selected">
              <div>
                <span className="mobile-label">Source content</span>
                <p>Connect your device to begin setup.</p>
              </div>
              <div>
                <span className="mobile-label">Approved translation</span>
                <p>Verbinden Sie Ihr Gerät, um die Einrichtung zu starten.</p>
              </div>
              <div className="match-cell">
                <span className="mobile-label">Match</span>
                <span className="match-badge exact">100% match</span>
              </div>
            </div>
            <div className="console-grid console-row">
              <div>
                <span className="mobile-label">Source content</span>
                <p>Review and accept the updated privacy notice.</p>
              </div>
              <div>
                <span className="mobile-label">Approved translation</span>
                <p>Prüfen und akzeptieren Sie den aktualisierten Datenschutzhinweis.</p>
              </div>
              <div className="match-cell">
                <span className="mobile-label">Match</span>
                <span className="match-badge context">In context</span>
              </div>
            </div>
            <div className="console-grid console-row">
              <div>
                <span className="mobile-label">Source content</span>
                <p>Download the latest product safety guide.</p>
              </div>
              <div>
                <span className="mobile-label">Previous translation</span>
                <p>Laden Sie den aktuellen Leitfaden zur Produktsicherheit herunter.</p>
              </div>
              <div className="match-cell">
                <span className="mobile-label">Match</span>
                <span className="match-badge similar">86% similar</span>
              </div>
            </div>
            <div className="console-footer">
              <span>Trusted language assets are applied before new content enters translation and review.</span>
              <span className="console-count"><strong>3</strong> reusable segments identified</span>
            </div>
          </div>
        </div>
      </section>

      <section className="value-strip" aria-label="Translation memory benefits">
        <div className="shell value-grid">
          {valuePoints.map((item) => (
            <article className="value-item" key={item.title}>
              <div className="icon-box"><Icon name={item.icon} /></div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section white">
        <div className="shell split overview-split">
          <div>
            <SectionHeader
              eyebrow="How Translation Memory Works"
              title="Turn Past Translation Work Into Future Value"
              intro="Translation memory is a structured bilingual repository that stores source content together with its approved translation. Unlike ordinary document storage, it preserves the relationship between the source and target language so trusted content can be reused systematically."
            />
            <p className="body-copy">
              When identical or similar source content appears in a new project, Stepes surfaces the relevant approved translation. It can be reused when appropriate or presented to a professional linguist for contextual review and adaptation.
            </p>
            <p className="body-copy">
              Every finalized project can add new approved bilingual knowledge, creating a continuous language asset lifecycle that becomes more valuable over time.
            </p>
          </div>
          <div className="process-list">
            {memorySteps.map((step, index) => (
              <div className="process-step" key={step.title}>
                <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell split asset-split">
          <div className="asset-map" aria-label="Enterprise language asset organization example">
            <div className="asset-map-header">
              <span className="eyebrow">Centralized Language Assets</span>
              <strong>Organize the right memory around the way your enterprise operates.</strong>
            </div>
            <div className="asset-map-core">
              <div className="memory-core">
                <span>Approved</span>
                <strong>Translation Memory</strong>
                <small>Reusable multilingual knowledge</small>
              </div>
              <div className="asset-orbit orbit-one">Product lines</div>
              <div className="asset-orbit orbit-two">Business units</div>
              <div className="asset-orbit orbit-three">Language pairs</div>
              <div className="asset-orbit orbit-four">Markets</div>
              <div className="asset-orbit orbit-five">Content domains</div>
              <div className="asset-orbit orbit-six">Regulated programs</div>
            </div>
            <div className="asset-map-footer">
              <span>One connected asset layer</span>
              <span>Multiple governed applications</span>
            </div>
          </div>

          <div>
            <SectionHeader
              eyebrow="Enterprise Language Assets"
              title="One Source of Truth for Approved Multilingual Content"
              intro="Translation memories are often fragmented across local teams, desktop applications, individual projects, content systems, and language service providers. Stepes brings these resources into a connected enterprise translation environment."
            />
            <p className="body-copy">
              Organize approved bilingual content by business unit, brand, product, department, content type, language pair, market, website, application, or long-term program. This structure helps ensure that the right language assets are applied to the right content.
            </p>
            <p className="body-copy">
              Approved translations reflect years of investment in product knowledge, regulatory review, legal approval, brand strategy, and subject-matter expertise. Centralization preserves that institutional language knowledge even as teams, technologies, and providers change.
            </p>
            <EditorialLink href={URLS.enterpriseManagement}>Explore Enterprise Translation Management</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="shell">
          <div className="split matching-intro">
            <SectionHeader
              eyebrow="Intelligent Matching"
              title="Reuse the Right Translation in the Right Context"
              intro="Not every translation memory match should be treated the same way. Stepes identifies how closely new content aligns with previously approved translations so the appropriate level of reuse and human review can be applied."
            />
            <div className="matching-note">
              <strong>Focus human expertise where it adds the most value.</strong>
              <p>Let linguists and reviewers concentrate on genuinely new, changed, complex, or high-risk material instead of retranslating unchanged content.</p>
            </div>
          </div>
          <div className="match-table">
            {matchingTypes.map((item) => (
              <article className="match-row" key={item.label}>
                <div className="match-title">
                  <h3>{item.label}</h3>
                  <span>{item.score}</span>
                </div>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark workflow-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Governed AI + Human Workflow"
            title="Trusted Language Assets for AI and Human Translation"
            intro="Translation memory does not compete with AI translation or professional linguists. It provides the trusted, organization-specific language layer that strengthens both within one governed workflow."
            align="center"
            dark
          />
          <div className="asset-inputs">
            <span>Approved translation memory</span>
            <span>Enterprise terminology</span>
            <span>Project instructions</span>
          </div>
          <div className="workflow-grid">
            {aiWorkflow.map((step, index) => (
              <article className="workflow-step" key={step.title}>
                <span className="workflow-number">{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
          <div className="workflow-links">
            <EditorialLink href={URLS.aiHumanWorkflow} inverse>AI + Human Translation Workflow</EditorialLink>
            <EditorialLink href={URLS.aiPlatform} inverse>AI Translation Platform</EditorialLink>
            <EditorialLink href={URLS.quality} inverse>Translation Quality Assurance</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="shell">
          <SectionHeader
            title="Content-Level Reuse Meets Term-Level Control"
            intro="Translation memory and terminology management solve different enterprise language challenges. Together, they create a stronger foundation for AI systems, linguists, reviewers, and global content teams."
            align="center"
          />
          <div className="comparison-panel">
            <div className="comparison-column">
              <div className="comparison-heading">
                <span>Translation Memory</span>
                <strong>Approved content in context</strong>
              </div>
              <ul>
                <li>Stores bilingual sentences, headings, interface strings, and content segments.</li>
                <li>Supports reuse of previously translated and approved material.</li>
                <li>Improves consistency across repeated and similar content.</li>
                <li>Grows continuously through completed translation projects.</li>
                <li>Helps accelerate translation, review, and recurring releases.</li>
              </ul>
            </div>
            <div className="comparison-divider" aria-hidden="true"><span>+</span></div>
            <div className="comparison-column terminology-column">
              <div className="comparison-heading">
                <span>Terminology Management</span>
                <strong>Approved vocabulary and usage</strong>
              </div>
              <ul>
                <li>Governs terms, product names, abbreviations, and specialized concepts.</li>
                <li>Defines preferred translations and prohibited or outdated variants.</li>
                <li>Provides definitions, context, and usage guidance.</li>
                <li>Supports brand, technical, and regulatory language control.</li>
                <li>Guides AI systems, linguists, reviewers, and content teams.</li>
              </ul>
            </div>
          </div>
          <div className="comparison-footer">
            <p>Translation memory preserves how complete content has been translated in the past. Terminology management defines how important concepts should be expressed consistently in the future.</p>
            <EditorialLink href={URLS.terminology}>Explore Terminology Management</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell split ownership-split">
          <div>
            <SectionHeader
              title="Keep Control of Your Multilingual Intellectual Property"
              intro="Approved translations reflect investment in language expertise, product knowledge, compliance review, brand development, and global market experience. Stepes helps organizations maintain visibility and control over these valuable assets."
            />
            <ul className="check-list">
              <li>Preserve and reuse approved bilingual content across eligible projects.</li>
              <li>Align memories with brands, products, departments, languages, and programs.</li>
              <li>Consolidate historical assets created by multiple teams and providers.</li>
              <li>Import existing translation resources and export language assets when required.</li>
              <li>Maintain program continuity when systems, teams, or providers change.</li>
            </ul>
          </div>
          <div className="portability-panel">
            <div className="portability-head">
              <span className="eyebrow">Portable by Design</span>
              <h3>Bring existing language resources into a governed enterprise environment.</h3>
            </div>
            <div className="format-grid">
              <div><strong>TMX</strong><span>Translation memory exchange</span></div>
              <div><strong>XLIFF</strong><span>Structured bilingual content</span></div>
              <div><strong>Bilingual files</strong><span>Workflow-ready source and target content</span></div>
              <div><strong>Legacy assets</strong><span>Resources from providers and desktop tools</span></div>
            </div>
            <div className="portability-note">
              <Icon name="control" size={26} />
              <p>Plan migration around language pair, content quality, domain, and the workflows where each asset will be used.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="shell">
          <SectionHeader
            eyebrow="Enterprise Governance"
            title="Govern Translation Memory Across Teams and Programs"
            intro="Enterprise translation memory requires more than automatically storing translated sentences. Language assets must be organized, trusted, maintained, and applied according to business, linguistic, technical, and security requirements."
            align="center"
          />
          <div className="governance-grid">
            {governanceItems.map((item) => (
              <article className="governance-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="quiet-links centered-links">
            <EditorialLink href={URLS.userRoles}>User Roles &amp; Approvals</EditorialLink>
            <EditorialLink href={URLS.security}>Enterprise Security</EditorialLink>
            <EditorialLink href={URLS.customerPortal}>Customer Translation Portal</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section maintenance-section">
        <div className="shell split maintenance-split">
          <SectionHeader
            title="Keep Language Assets Accurate, Relevant, and Ready for Reuse"
            intro="Long-running translation programs can accumulate language from multiple systems, providers, teams, and time periods. Active maintenance protects the quality and long-term value of enterprise translation memory."
          />
          <div className="optimization-list">
            {optimizationItems.map((item) => (
              <article className="optimization-row" key={item.title}>
                <span className="row-marker" aria-hidden="true" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="shell">
          <SectionHeader
            eyebrow="Compounding Program Value"
            title="Build More Value Across Every Translation Program"
            intro="Translation memory creates immediate value by identifying reusable content, but its greatest advantage develops over time as each approved project expands the organization’s trusted multilingual knowledge base."
            align="center"
          />
          <div className="outcomes-grid">
            {outcomes.map((item) => (
              <article className="outcome-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section use-cases-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Enterprise Use Cases"
            title="Built for Content That Evolves, Repeats, and Scales"
            intro="Translation memory is especially valuable for enterprise content that is frequently updated, reused, versioned, or distributed across multiple markets."
            align="center"
          />
          <div className="use-case-grid">
            {useCases.map((item) => (
              <article className="use-case" key={item.title}>
                <div className="icon-box"><Icon name={item.icon} /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <EditorialLink href={item.href}>{item.link}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section white continuous-section">
        <div className="shell split continuous-split">
          <div>
            <SectionHeader
              eyebrow="Continuous Localization"
              title="Keep Approved Language Available as Content Changes"
              intro="Modern enterprise content is rarely static. Software, websites, support content, product information, and documentation can change every day. Translation memory helps each update enter the right workflow."
            />
            <div className="change-legend">
              <div><span className="legend-dot unchanged" /><strong>Unchanged content</strong><p>Apply an approved translation when context and requirements align.</p></div>
              <div><span className="legend-dot modified" /><strong>Modified content</strong><p>Use a similar previous translation as the basis for contextual review.</p></div>
              <div><span className="legend-dot new" /><strong>New content</strong><p>Route content to AI, professional translation, or a hybrid workflow.</p></div>
              <div><span className="legend-dot review" /><strong>High-risk content</strong><p>Require additional linguistic, legal, medical, or subject-matter review.</p></div>
            </div>
            <EditorialLink href={URLS.workflowAutomation}>Explore Translation Workflow Automation</EditorialLink>
          </div>
          <div className="systems-panel">
            <p className="eyebrow">Connected Content Operations</p>
            <h3>Bring translation memory closer to the systems where content is created.</h3>
            <div className="system-lines">
              <div><span>Content management</span><Arrow /></div>
              <div><span>Software repositories</span><Arrow /></div>
              <div><span>Product information</span><Arrow /></div>
              <div><span>Knowledge bases</span><Arrow /></div>
            </div>
            <div className="system-core">
              <span>Stepes Translation Memory</span>
              <strong>Analyze → Translate → Review → Approve → Reuse</strong>
            </div>
            <div className="system-links">
              <EditorialLink href={URLS.translationApi}>Translation API</EditorialLink>
              <EditorialLink href={URLS.websiteProxy}>Website Translation Proxy</EditorialLink>
              <EditorialLink href={URLS.softwareApi}>Software Localization API</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section insight-section">
        <div className="shell insight-grid">
          <article className="insight-panel">
            <p className="eyebrow">Translation Quality</p>
            <h2>Improve Consistency Without Losing Context</h2>
            <p>
              Translation memory reduces inconsistent retranslations and makes approved language visible across teams. Stepes combines reuse with terminology controls, professional review, and systematic quality assurance because a previous translation may still require adaptation for a new market, audience, product version, or regulatory setting.
            </p>
            <EditorialLink href={URLS.quality}>Translation Quality Assurance</EditorialLink>
          </article>
          <article className="insight-panel blush-panel">
            <p className="eyebrow">Program Visibility</p>
            <h2>Understand How Language Assets Support Your Program</h2>
            <p>
              Translation memory data can help teams understand recurring content, reusable volume, language asset growth, workflow planning, and areas that may require consolidation or maintenance. Combined with broader reporting, this supports forecasting, governance, and continuous improvement.
            </p>
            <EditorialLink href={URLS.reporting}>Reporting &amp; Analytics</EditorialLink>
          </article>
        </div>
      </section>

      <section className="section platform-section">
        <div className="shell">
          <SectionHeader
            eyebrow="Connected Stepes Platform"
            title="Translation Memory Works Better as Part of One Enterprise System"
            intro="Connect approved language assets with the workflows, controls, APIs, quality processes, and reporting required to operate multilingual content at scale."
            align="center"
            dark
          />
          <div className="platform-links-grid">
            {platformLinks.map((item) => (
              <a className="platform-link" href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <Arrow />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section white faq-section">
        <div className="shell faq-layout">
          <div className="faq-intro">
            <SectionHeader
              title="Common Questions About Enterprise Translation Memory"
              intro="Understand how translation memory supports approved content reuse, AI translation, human review, terminology, quality, and long-term language asset ownership."
            />
            <EditorialLink href={URLS.contact}>Discuss Your Translation Memory Requirements</EditorialLink>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div className={`faq-item${isOpen ? " open" : ""}`} key={item.question}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  <div id={`faq-answer-${index}`} className="faq-answer" hidden={!isOpen}>
                    <p>{item.answer}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="final-cta-section">
        <div className="shell">
          <div className="final-cta">
            <div className="cta-copy">
              <h2>Build More Value Into Every Translation</h2>
              <p>
                Centralize trusted bilingual content, reuse approved language, and connect translation memory with AI, professional linguists, terminology, quality assurance, workflow automation, and reporting.
              </p>
              <div className="hero-actions cta-actions">
                <a className="button primary" href={URLS.contact}>
                  <span>Talk to an Expert</span>
                  <Arrow />
                </a>
                <a className="button secondary" href={URLS.aiPlatform}>
                  <span>Explore the AI Translation Platform</span>
                  <Arrow />
                </a>
              </div>
            </div>
            <div className="cta-visual" aria-hidden="true">
              <svg className="cta-memory-illustration" viewBox="0 0 520 330" fill="none">
                <defs>
                  <marker id="cta-arrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M1 1 9 5 1 9" className="cta-arrowhead" />
                  </marker>
                </defs>

                <path className="cta-feedback" d="M455 274C438 316 337 323 280 286" markerEnd="url(#cta-arrow)" />
                <path className="cta-connector" d="M145 100h48" markerEnd="url(#cta-arrow)" />
                <path className="cta-connector" d="M145 230h48" markerEnd="url(#cta-arrow)" />
                <path className="cta-connector" d="M340 112h43" markerEnd="url(#cta-arrow)" />
                <path className="cta-connector" d="M340 165h43" markerEnd="url(#cta-arrow)" />
                <path className="cta-connector" d="M340 218h43" markerEnd="url(#cta-arrow)" />

                <g className="cta-language-card">
                  <rect x="18" y="55" width="128" height="92" rx="20" />
                  <rect x="31" y="70" width="34" height="24" rx="12" className="cta-language-chip" />
                  <text x="48" y="87" textAnchor="middle">EN</text>
                  <path d="M31 111h91M31 126h68" />
                </g>

                <g className="cta-language-card approved-card">
                  <rect x="18" y="184" width="128" height="92" rx="20" />
                  <rect x="31" y="199" width="34" height="24" rx="12" className="cta-language-chip" />
                  <text x="48" y="216" textAnchor="middle">DE</text>
                  <circle cx="119" cy="211" r="10" className="cta-approved-dot" />
                  <path d="m114 211 4 4 7-8" className="cta-check" />
                  <path d="M31 240h91M31 255h74" />
                </g>

                <g className="cta-memory-stack">
                  <rect x="194" y="48" width="146" height="230" rx="30" className="cta-memory-surface" />
                  <path d="M194 96h146" />
                  <circle cx="267" cy="84" r="24" className="cta-memory-core" />
                  <text x="267" y="91" textAnchor="middle" className="cta-tm-label">TM</text>
                  <g className="cta-memory-row">
                    <rect x="214" y="118" width="106" height="38" rx="12" />
                    <circle cx="231" cy="137" r="6" />
                    <path d="M245 131h55M245 143h40" />
                  </g>
                  <g className="cta-memory-row">
                    <rect x="214" y="166" width="106" height="38" rx="12" />
                    <circle cx="231" cy="185" r="6" />
                    <path d="M245 179h55M245 191h47" />
                  </g>
                  <g className="cta-memory-row">
                    <rect x="214" y="214" width="106" height="38" rx="12" />
                    <circle cx="231" cy="233" r="6" />
                    <path d="M245 227h55M245 239h36" />
                  </g>
                </g>

                <g className="cta-output-card">
                  <rect x="384" y="78" width="118" height="68" rx="18" />
                  <path d="m410 101 3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" className="cta-output-icon" />
                  <path d="M431 105h48M431 119h36" />
                </g>
                <g className="cta-output-card">
                  <rect x="384" y="132" width="118" height="68" rx="18" />
                  <circle cx="410" cy="157" r="9" className="cta-output-icon" />
                  <path d="M397 184c2-10 8-15 13-15s11 5 13 15" className="cta-output-icon" />
                  <path d="M431 153h48M431 167h36" />
                </g>
                <g className="cta-output-card">
                  <rect x="384" y="186" width="118" height="68" rx="18" />
                  <path d="M410 205 423 211v10c0 9-5 16-13 20-8-4-13-11-13-20v-10l13-6Z" className="cta-output-icon" />
                  <path d="m404 221 5 5 8-10" className="cta-output-icon" />
                  <path d="M431 207h48M431 221h36" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .tm-page {
    --magenta: #C11D63;
    --magenta-deep: #9F1D55;
    --magenta-dark: #7A1542;
    --blush: #FDF2F7;
    --blush-strong: #F9E7F0;
    --dark: #171720;
    --dark-soft: #23232E;
    --ink: #171A2A;
    --text: #3F4659;
    --muted: #687084;
    --line: #E1E5EC;
    --line-dark: rgba(255,255,255,.14);
    --white: #FFFFFF;
    color: var(--ink);
    background: var(--white);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    font-size: 16px;
    line-height: 1.65;
    overflow-x: clip;
  }

  .tm-page,
  .tm-page * {
    box-sizing: border-box;
  }

  .tm-page h1,
  .tm-page h2,
  .tm-page h3,
  .tm-page p,
  .tm-page ul {
    margin-top: 0;
  }

  .tm-page h1,
  .tm-page h2,
  .tm-page h3 {
    color: var(--ink);
    font-weight: 600;
    letter-spacing: -0.025em;
    line-height: 1.14;
  }

  .tm-page h1 {
    max-width: 1050px;
    margin: 0 auto 24px;
    font-size: 48px;
  }

  .tm-page h2 {
    margin-bottom: 22px;
    font-size: 36px;
  }

  .tm-page h3 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  .tm-page p,
  .tm-page li {
    font-size: 16px;
    color: var(--text);
    overflow-wrap: break-word;
  }

  .button span,
  .editorial-link span,
  .platform-link h3 {
    overflow-wrap: anywhere;
  }

  .tm-page a {
    color: var(--magenta);
    text-decoration: none;
  }

  .tm-page a:focus-visible,
  .tm-page button:focus-visible {
    outline: 3px solid rgba(193, 29, 99, .24);
    outline-offset: 4px;
  }

  .shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section {
    padding-top: 96px;
    padding-bottom: 96px;
  }

  .white { background: #fff; }
  .soft { background: #F7F8FA; }

  .split {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 72px;
    align-items: center;
  }

  .eyebrow {
    margin-bottom: 15px;
    color: var(--magenta) !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.35 !important;
    letter-spacing: .18em !important;
    text-transform: uppercase;
  }

  .eyebrow.dark {
    color: #F2A7C6 !important;
  }

  .section-header {
    max-width: 760px;
  }

  .section-header.center {
    max-width: 850px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }

  .section-intro {
    margin-bottom: 0;
    font-size: 18px !important;
    line-height: 1.7;
    color: var(--text);
  }

  .body-copy {
    max-width: 740px;
    margin: 22px 0 0;
  }

  .button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 22px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.25;
    transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
  }

  .button:hover {
    transform: translateY(-2px);
  }

  .button.primary,
  .button.primary:link,
  .button.primary:visited,
  .button.primary:hover,
  .button.primary:active,
  .button.primary:focus,
  .button.primary:focus-visible,
  .button.primary span,
  .button.primary svg {
    color: #fff !important;
    fill: none;
    stroke: #fff !important;
  }

  .button.primary {
    background: var(--magenta);
    box-shadow: 0 12px 28px rgba(193, 29, 99, .20);
  }

  .button.primary:hover,
  .button.primary:focus-visible {
    background: var(--magenta-deep);
    box-shadow: 0 15px 30px rgba(159, 29, 85, .24);
  }

  .button.secondary,
  .button.secondary:link,
  .button.secondary:visited {
    color: var(--ink);
    background: #fff;
    border-color: #D8DDE6;
  }

  .button.secondary:hover,
  .button.secondary:focus-visible {
    color: var(--magenta);
    border-color: rgba(193, 29, 99, .44);
  }

  .editorial-link {
    min-height: 44px;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: var(--magenta) !important;
    font-size: 16px;
    font-weight: 600;
  }

  .editorial-link svg {
    transition: transform .2s ease;
  }

  .editorial-link:hover svg {
    transform: translateX(3px);
  }

  .editorial-link.inverse,
  .editorial-link.inverse:visited {
    color: #F2A7C6 !important;
  }

  .hero {
    padding: 104px 0 88px;
    background:
      radial-gradient(circle at 50% 0%, rgba(253, 242, 247, .92), rgba(255,255,255,0) 38%),
      #fff;
    border-bottom: 1px solid var(--line);
  }

  .hero-copy {
    text-align: center;
  }

  .hero-intro {
    max-width: 830px;
    margin: 0 auto;
    color: var(--text);
    font-size: 18px !important;
    line-height: 1.7;
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 14px;
    margin-top: 34px;
  }

  .memory-console {
    margin-top: 58px;
    overflow: hidden;
    border: 1px solid #DDE2EA;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 24px 70px rgba(28, 32, 48, .10);
  }

  .console-topbar {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    padding: 24px 28px;
    background: #FBFBFC;
    border-bottom: 1px solid var(--line);
  }

  .console-topbar > div:first-child {
    display: grid;
    gap: 2px;
  }

  .console-kicker {
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .console-topbar strong {
    font-size: 18px;
    font-weight: 600;
  }

  .console-meta {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
  }

  .console-meta span {
    padding: 7px 11px;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--text);
    background: #fff;
    font-size: 14px;
  }

  .console-meta .status-dot {
    color: #2B6646;
    border-color: #CFE4D8;
    background: #F2FAF5;
  }

  .console-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 150px;
    gap: 28px;
    align-items: center;
  }

  .console-head {
    padding: 13px 28px;
    color: var(--muted);
    background: #fff;
    border-bottom: 1px solid var(--line);
    font-size: 14px;
    font-weight: 600;
  }

  .console-row {
    position: relative;
    min-height: 98px;
    padding: 20px 28px;
    border-bottom: 1px solid var(--line);
  }

  .console-row.selected {
    background: #FEF8FB;
  }

  .console-row.selected::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 3px;
    background: var(--magenta);
  }

  .console-row p {
    margin: 0;
    color: var(--ink);
    line-height: 1.55;
  }

  .mobile-label {
    display: none;
    margin-bottom: 6px;
    color: var(--muted);
    font-size: 14px;
    font-weight: 600;
  }

  .match-cell {
    display: flex;
    justify-content: flex-start;
  }

  .match-badge {
    display: inline-flex;
    align-items: center;
    min-height: 34px;
    padding: 7px 10px;
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
  }

  .match-badge.exact {
    color: #20623E;
    background: #EAF7EF;
  }

  .match-badge.context {
    color: #7A1542;
    background: #FBEAF2;
  }

  .match-badge.similar {
    color: #765C19;
    background: #FFF6D8;
  }

  .console-footer {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    padding: 18px 28px;
    color: var(--muted);
    background: #FBFBFC;
    font-size: 14px;
  }

  .console-count {
    color: var(--ink);
  }

  .console-count strong {
    color: var(--magenta);
    font-size: 18px;
  }

  .value-strip {
    background: #fff;
  }

  .value-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-bottom: 1px solid var(--line);
  }

  .value-item {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 15px;
    padding: 32px 26px;
    border-right: 1px solid var(--line);
  }

  .value-item:first-child { padding-left: 0; }
  .value-item:last-child { padding-right: 0; border-right: 0; }

  .value-item h3 {
    margin-bottom: 8px;
    font-size: 18px;
    letter-spacing: -0.015em;
  }

  .value-item p {
    margin-bottom: 0;
    line-height: 1.55;
  }

  .icon-box {
    width: 42px;
    height: 42px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: var(--magenta);
    background: var(--blush);
    border: 1px solid #F0D7E3;
    border-radius: 14px;
  }

  .overview-split {
    grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
    gap: 88px;
    align-items: start;
  }

  .process-list {
    border-top: 1px solid var(--line);
  }

  .process-step {
    display: grid;
    grid-template-columns: 56px minmax(0, 1fr);
    gap: 20px;
    padding: 22px 0;
    border-bottom: 1px solid var(--line);
  }

  .step-number {
    padding-top: 4px;
    color: var(--magenta);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .08em;
  }

  .process-step h3 {
    margin-bottom: 7px;
    font-size: 20px;
  }

  .process-step p {
    margin-bottom: 0;
  }

  .asset-split {
    grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
  }

  .asset-map {
    overflow: hidden;
    border: 1px solid #E0E3E9;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 20px 55px rgba(31, 35, 48, .07);
  }

  .asset-map-header {
    display: grid;
    gap: 2px;
    padding: 24px 26px;
    border-bottom: 1px solid var(--line);
  }

  .asset-map-header .eyebrow {
    margin-bottom: 8px;
  }

  .asset-map-header strong {
    font-size: 18px;
    line-height: 1.45;
  }

  .asset-map-core {
    position: relative;
    min-height: 430px;
    overflow: hidden;
    background:
      radial-gradient(circle at center, rgba(253,242,247,.95) 0 22%, rgba(253,242,247,.45) 23% 42%, rgba(255,255,255,0) 43%),
      linear-gradient(#fff, #fff);
  }

  .asset-map-core::before,
  .asset-map-core::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 330px;
    height: 330px;
    transform: translate(-50%, -50%);
    border: 1px solid #EDD6E1;
    border-radius: 50%;
  }

  .asset-map-core::after {
    width: 240px;
    height: 240px;
    border-style: dashed;
  }

  .memory-core {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 176px;
    height: 176px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    transform: translate(-50%, -50%);
    border: 1px solid #E8C4D5;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0 18px 45px rgba(193,29,99,.14);
  }

  .memory-core span {
    color: var(--magenta);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
  }

  .memory-core strong {
    max-width: 120px;
    margin: 6px 0;
    font-size: 19px;
    line-height: 1.2;
  }

  .memory-core small {
    max-width: 130px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.35;
  }

  .asset-orbit {
    position: absolute;
    z-index: 3;
    min-width: 120px;
    padding: 9px 12px;
    text-align: center;
    color: var(--text);
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 999px;
    box-shadow: 0 8px 22px rgba(30,34,47,.07);
    font-size: 14px;
    font-weight: 600;
  }

  .orbit-one { top: 36px; left: 50%; transform: translateX(-50%); }
  .orbit-two { top: 105px; right: 38px; }
  .orbit-three { bottom: 103px; right: 38px; }
  .orbit-four { bottom: 36px; left: 50%; transform: translateX(-50%); }
  .orbit-five { bottom: 103px; left: 38px; }
  .orbit-six { top: 105px; left: 38px; }

  .asset-map-footer {
    display: flex;
    justify-content: space-between;
    gap: 18px;
    padding: 18px 26px;
    color: var(--muted);
    background: #FBFBFC;
    border-top: 1px solid var(--line);
    font-size: 14px;
  }

  .matching-intro {
    grid-template-columns: minmax(0, 1.14fr) minmax(320px, .86fr);
    gap: 84px;
    align-items: end;
    margin-bottom: 46px;
  }

  .matching-note {
    padding: 25px 28px;
    background: var(--blush);
    border-left: 3px solid var(--magenta);
    border-radius: 0 22px 22px 0;
  }

  .matching-note strong {
    display: block;
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 600;
  }

  .matching-note p {
    margin-bottom: 0;
  }

  .match-table {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  .match-row {
    min-height: 270px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 28px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .match-title {
    display: block;
  }

  .match-title h3 {
    margin-bottom: 12px;
    font-size: 21px;
  }

  .match-title span {
    display: inline-flex;
    padding: 6px 10px;
    color: var(--magenta-dark);
    background: var(--blush);
    border-radius: 999px;
    font-size: 14px;
    font-weight: 600;
    white-space: nowrap;
  }

  .match-row p {
    margin: 24px 0 0;
  }

  .dark {
    color: #fff;
    background: var(--dark);
  }

  .dark h2,
  .dark h3,
  .dark .section-intro,
  .dark p {
    color: #fff;
  }

  .dark .section-intro,
  .dark p {
    color: #CDD0DB;
  }

  .workflow-section {
    position: relative;
    overflow: hidden;
  }

  .workflow-section::before {
    content: "";
    position: absolute;
    top: -260px;
    left: 50%;
    width: 680px;
    height: 680px;
    transform: translateX(-50%);
    border: 1px solid rgba(242,167,198,.13);
    border-radius: 50%;
  }

  .workflow-section .shell {
    position: relative;
    z-index: 1;
  }

  .asset-inputs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin: 38px 0 26px;
  }

  .asset-inputs span {
    padding: 8px 12px;
    color: #F2A7C6;
    border: 1px solid rgba(242,167,198,.25);
    border-radius: 999px;
    background: rgba(242,167,198,.06);
    font-size: 14px;
    font-weight: 600;
  }

  .workflow-grid {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    border-top: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
  }

  .workflow-step {
    min-height: 240px;
    padding: 27px 20px 25px;
    border-right: 1px solid var(--line-dark);
  }

  .workflow-step:last-child { border-right: 0; }

  .workflow-number {
    display: block;
    margin-bottom: 38px;
    color: #F2A7C6;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: .08em;
  }

  .workflow-step h3 {
    margin-bottom: 12px;
    color: #fff;
    font-size: 19px;
    letter-spacing: -0.015em;
  }

  .workflow-step p {
    margin-bottom: 0;
    line-height: 1.55;
  }

  .workflow-links {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 18px 34px;
    margin-top: 28px;
  }

  .comparison-panel {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 86px minmax(0, 1fr);
    margin-top: 48px;
    overflow: hidden;
    border: 1px solid var(--line);
    border-radius: 30px;
  }

  .comparison-column {
    padding: 40px;
  }

  .terminology-column {
    background: #FAFAFB;
  }

  .comparison-heading {
    padding-bottom: 24px;
    border-bottom: 1px solid var(--line);
  }

  .comparison-heading span {
    display: block;
    margin-bottom: 6px;
    color: var(--magenta);
    font-size: 14px;
    font-weight: 600;
  }

  .comparison-heading strong {
    font-size: 24px;
    font-weight: 600;
  }

  .comparison-column ul {
    display: grid;
    gap: 16px;
    margin: 26px 0 0;
    padding: 0;
    list-style: none;
  }

  .comparison-column li {
    position: relative;
    padding-left: 22px;
  }

  .comparison-column li::before {
    content: "";
    position: absolute;
    top: .72em;
    left: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--magenta);
  }

  .comparison-divider {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--magenta);
    background: var(--blush);
    border-left: 1px solid #F0D8E3;
    border-right: 1px solid #F0D8E3;
  }

  .comparison-divider span {
    width: 42px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E8BFD2;
    border-radius: 50%;
    background: #fff;
    font-size: 24px;
  }

  .comparison-footer {
    max-width: 860px;
    margin: 28px auto 0;
    text-align: center;
  }

  .comparison-footer p {
    margin-bottom: 0;
    font-size: 18px;
  }

  .ownership-split {
    grid-template-columns: minmax(0, .9fr) minmax(0, 1.1fr);
    gap: 88px;
    align-items: start;
  }

  .check-list {
    display: grid;
    gap: 15px;
    margin: 28px 0 0;
    padding: 0;
    list-style: none;
  }

  .check-list li {
    position: relative;
    padding-left: 31px;
  }

  .check-list li::before {
    content: "✓";
    position: absolute;
    top: 0;
    left: 0;
    color: var(--magenta);
    font-weight: 600;
  }

  .portability-panel {
    overflow: hidden;
    border: 1px solid #E4DCE1;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 20px 50px rgba(27,31,43,.07);
  }

  .portability-head {
    padding: 30px;
    background: var(--blush);
    border-bottom: 1px solid #EED6E2;
  }

  .portability-head .eyebrow {
    margin-bottom: 12px;
  }

  .portability-head h3 {
    max-width: 490px;
    margin-bottom: 0;
  }

  .format-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .format-grid > div {
    min-height: 142px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;
    padding: 24px 28px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .format-grid > div:nth-child(2n) { border-right: 0; }
  .format-grid > div:nth-last-child(-n+2) { border-bottom: 0; }

  .format-grid strong {
    color: var(--ink);
    font-size: 20px;
    font-weight: 600;
  }

  .format-grid span {
    color: var(--text);
    font-size: 16px;
  }

  .portability-note {
    display: grid;
    grid-template-columns: 32px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 24px 28px;
    color: var(--magenta);
    background: #FBFBFC;
    border-top: 1px solid var(--line);
  }

  .portability-note p {
    margin: 0;
  }

  .governance-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 48px;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .governance-item {
    padding: 32px 28px;
    border-right: 1px solid var(--line);
  }

  .governance-item:last-child { border-right: 0; }

  .governance-item h3 {
    margin-top: 22px;
    font-size: 20px;
  }

  .governance-item p {
    margin-bottom: 0;
  }

  .quiet-links {
    display: flex;
    flex-wrap: wrap;
    gap: 16px 32px;
    margin-top: 22px;
  }

  .quiet-links .editorial-link {
    margin-top: 0;
  }

  .centered-links {
    justify-content: center;
  }

  .maintenance-section {
    background: #FAFAFB;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .maintenance-split {
    grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
    gap: 88px;
    align-items: start;
  }

  .optimization-list {
    border-top: 1px solid var(--line);
  }

  .optimization-row {
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 17px;
    padding: 22px 0;
    border-bottom: 1px solid var(--line);
  }

  .row-marker {
    width: 10px;
    height: 3px;
    margin-top: 11px;
    background: var(--magenta);
    border-radius: 999px;
  }

  .optimization-row h3 {
    margin-bottom: 7px;
    font-size: 20px;
  }

  .optimization-row p {
    margin-bottom: 0;
  }

  .outcomes-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 48px;
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  .outcome-item {
    min-height: 210px;
    padding: 32px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .outcome-item h3 {
    font-size: 21px;
  }

  .outcome-item p {
    margin-bottom: 0;
  }

  .use-cases-section {
    background: #F7F8FA;
  }

  .use-case-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 34px;
    margin-top: 48px;
  }

  .use-case {
    min-height: 330px;
    padding: 30px 0 28px;
    border-top: 1px solid var(--line);
  }

  .use-case h3 {
    margin-top: 22px;
    font-size: 21px;
  }

  .use-case p {
    margin-bottom: 0;
  }

  .use-case .editorial-link {
    margin-top: 16px;
  }

  .continuous-split {
    grid-template-columns: minmax(0, .92fr) minmax(0, 1.08fr);
    align-items: start;
  }

  .change-legend {
    display: grid;
    gap: 16px;
    margin: 30px 0 0;
  }

  .change-legend > div {
    display: grid;
    grid-template-columns: 14px minmax(145px, .48fr) minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    padding-bottom: 16px;
    border-bottom: 1px solid var(--line);
  }

  .change-legend strong {
    font-size: 16px;
    font-weight: 600;
  }

  .change-legend p {
    margin-bottom: 0;
  }

  .legend-dot {
    width: 9px;
    height: 9px;
    margin-top: 8px;
    border-radius: 50%;
  }

  .legend-dot.unchanged { background: #3D8A60; }
  .legend-dot.modified { background: #C3952D; }
  .legend-dot.new { background: var(--magenta); }
  .legend-dot.review { background: #5367A9; }

  .systems-panel {
    overflow: hidden;
    padding: 36px;
    border: 1px solid #DDE1E8;
    border-radius: 30px;
    background: #FAFAFB;
  }

  .systems-panel .eyebrow {
    margin-bottom: 12px;
  }

  .systems-panel h3 {
    max-width: 570px;
  }

  .system-lines {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
    margin: 26px 0 16px;
  }

  .system-lines > div {
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 11px 14px;
    color: var(--text);
    background: #fff;
    border: 1px solid var(--line);
    border-radius: 14px;
    font-size: 16px;
    font-weight: 600;
  }

  .system-lines svg {
    color: var(--magenta);
  }

  .system-core {
    display: grid;
    gap: 4px;
    padding: 24px;
    color: #fff;
    background: var(--dark);
    border-radius: 20px;
  }

  .system-core span {
    color: #F2A7C6;
    font-size: 14px;
    font-weight: 600;
  }

  .system-core strong {
    font-size: 18px;
    font-weight: 600;
  }

  .system-links {
    display: flex;
    flex-wrap: wrap;
    gap: 4px 22px;
    margin-top: 12px;
  }

  .system-links .editorial-link {
    margin-top: 8px;
  }

  .insight-section {
    padding-top: 0;
    background: #fff;
  }

  .insight-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
  }

  .insight-panel {
    min-height: 410px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 44px;
    border: 1px solid var(--line);
    border-radius: 28px;
    background: #FAFAFB;
  }

  .insight-panel h2 {
    font-size: 30px;
  }

  .insight-panel p:not(.eyebrow) {
    margin-bottom: 0;
  }

  .insight-panel .editorial-link {
    margin-top: auto;
    padding-top: 20px;
  }

  .blush-panel {
    background: var(--blush);
    border-color: #EDD7E2;
  }

  .platform-section {
    color: #fff;
    background: var(--dark);
  }

  .platform-section h2,
  .platform-section h3,
  .platform-section p {
    color: #fff;
  }

  .platform-section .section-intro,
  .platform-section p {
    color: #CDD0DB;
  }

  .platform-links-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 46px;
    border-top: 1px solid var(--line-dark);
    border-left: 1px solid var(--line-dark);
  }

  .platform-link,
  .platform-link:visited {
    min-height: 230px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 24px;
    align-items: start;
    padding: 30px 26px;
    color: #fff !important;
    border-right: 1px solid var(--line-dark);
    border-bottom: 1px solid var(--line-dark);
    transition: background .2s ease;
  }

  .platform-link:hover,
  .platform-link:focus-visible {
    background: rgba(255,255,255,.045);
  }

  .platform-link h3 {
    margin-bottom: 8px;
    font-size: 20px;
  }

  .platform-link p {
    max-width: none;
    margin-bottom: 0;
  }

  .platform-link > svg {
    align-self: end;
    color: #F2A7C6;
    transition: transform .2s ease;
  }

  .platform-link:hover > svg {
    transform: translateX(4px);
  }

  .faq-layout {
    display: grid;
    grid-template-columns: minmax(0, .72fr) minmax(0, 1.28fr);
    gap: 72px;
    align-items: start;
  }

  .faq-intro {
    position: sticky;
    top: 28px;
  }

  .faq-panel {
    border-top: 1px solid var(--line);
  }

  .faq-item {
    border-bottom: 1px solid var(--line);
  }

  .faq-item button {
    width: 100%;
    min-height: 76px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: center;
    padding: 20px 0;
    color: var(--ink);
    background: transparent;
    border: 0;
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    font-weight: 600;
  }

  .faq-icon {
    flex: 0 0 auto;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--magenta);
    background: var(--blush);
    border-radius: 50%;
    font-size: 20px;
    line-height: 1;
  }

  .faq-answer {
    max-width: 800px;
    padding: 0 56px 22px 0;
  }

  .faq-answer[hidden] {
    display: none;
  }

  .faq-answer p {
    margin-bottom: 0;
  }

  .final-cta-section {
    padding: 0 0 96px;
    background: #fff;
  }

  .final-cta {
    min-height: 440px;
    display: grid;
    grid-template-columns: minmax(0, 1.12fr) minmax(300px, .88fr);
    gap: 50px;
    align-items: center;
    overflow: hidden;
    padding: 64px;
    border: 1px solid #EDD7E2;
    border-radius: 30px;
    background: var(--blush);
  }

  .cta-copy h2 {
    max-width: 680px;
    font-size: 38px;
  }

  .cta-copy > p {
    max-width: 670px;
    margin-bottom: 0;
    font-size: 18px;
  }

  .cta-actions {
    justify-content: flex-start;
  }

  .cta-visual {
    position: relative;
    min-height: 330px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cta-memory-illustration {
    width: min(100%, 520px);
    height: auto;
    overflow: visible;
  }

  .cta-memory-illustration path,
  .cta-memory-illustration circle,
  .cta-memory-illustration rect {
    vector-effect: non-scaling-stroke;
  }

  .cta-connector {
    stroke: #A94772;
    stroke-width: 1.8;
    stroke-linecap: round;
  }

  .cta-feedback {
    stroke: #C46A92;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-dasharray: 5 7;
  }

  .cta-arrowhead {
    fill: none;
    stroke: #A94772;
    stroke-width: 1.6;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .cta-language-card rect,
  .cta-output-card rect,
  .cta-memory-surface {
    fill: rgba(255,255,255,.94);
    stroke: #DAB4C6;
    stroke-width: 1.2;
  }

  .cta-language-card path,
  .cta-output-card > path:not(.cta-output-icon) {
    stroke: #9B8790;
    stroke-width: 1.5;
    stroke-linecap: round;
  }

  .cta-language-chip {
    fill: #FDF2F7 !important;
    stroke: #E9C4D5 !important;
  }

  .cta-language-card text {
    fill: #8B315A;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
  }

  .cta-approved-dot {
    fill: #E8F4ED;
    stroke: #8EB89E !important;
  }

  .cta-check {
    stroke: #3F7857 !important;
    stroke-width: 1.8 !important;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .cta-memory-stack > path,
  .cta-memory-row path {
    stroke: #A58F99;
    stroke-width: 1.4;
    stroke-linecap: round;
  }

  .cta-memory-core {
    fill: var(--magenta);
    stroke: var(--magenta);
  }

  .cta-tm-label {
    fill: #fff;
    font-family: inherit;
    font-size: 21px;
    font-weight: 600;
  }

  .cta-memory-row rect {
    fill: #FCF8FA;
    stroke: #E7CFDA;
    stroke-width: 1;
  }

  .cta-memory-row circle {
    fill: #F2A7C6;
    stroke: none;
  }

  .cta-output-icon {
    fill: none;
    stroke: #B34073 !important;
    stroke-width: 1.7 !important;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 1180px) {
    .shell {
      padding-left: 40px;
      padding-right: 40px;
    }

    .final-cta {
      padding: 54px;
    }
  }

  @media (max-width: 1040px) {
    .platform-links-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .platform-link,
    .platform-link:visited {
      min-height: 180px;
    }

    .workflow-grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .workflow-step:nth-child(3) { border-right: 0; }
    .workflow-step:nth-child(-n+3) { border-bottom: 1px solid var(--line-dark); }
  }

  @media (max-width: 900px) {
    .shell {
      padding-left: 24px;
      padding-right: 24px;
    }

    .section {
      padding-top: 80px;
      padding-bottom: 80px;
    }

    .tm-page h1 { font-size: 42px; }
    .tm-page h2 { font-size: 32px; }
    .tm-page h3 { font-size: 22px; }

    .split,
    .overview-split,
    .asset-split,
    .matching-intro,
    .ownership-split,
    .maintenance-split,
    .continuous-split,
    .faq-layout {
      grid-template-columns: 1fr;
      gap: 48px;
    }

    .value-grid,
    .governance-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .value-item:nth-child(2),
    .governance-item:nth-child(2) {
      border-right: 0;
    }

    .value-item:nth-child(-n+2),
    .governance-item:nth-child(-n+2) {
      border-bottom: 1px solid var(--line);
    }

    .value-item:first-child,
    .value-item:nth-child(3) {
      padding-left: 0;
    }

    .value-item:nth-child(2),
    .value-item:last-child {
      padding-right: 0;
    }

    .console-grid {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr) 130px;
      gap: 18px;
    }

    .matching-intro {
      align-items: start;
    }

    .match-table {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .match-row {
      min-height: 230px;
    }

    .comparison-panel {
      grid-template-columns: 1fr;
    }

    .comparison-divider {
      min-height: 70px;
      border: 0;
      border-top: 1px solid #F0D8E3;
      border-bottom: 1px solid #F0D8E3;
    }

    .outcomes-grid,
    .use-case-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .insight-grid {
      grid-template-columns: 1fr;
    }

    .platform-links-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .faq-intro {
      position: static;
    }

    .final-cta {
      grid-template-columns: 1fr;
      padding: 48px;
    }

    .cta-visual {
      min-height: 280px;
    }
  }

  @media (max-width: 680px) {
    .shell {
      padding-left: 20px;
      padding-right: 20px;
    }

    .section {
      padding-top: 68px;
      padding-bottom: 68px;
    }

    .hero {
      padding: 78px 0 68px;
    }

    .tm-page h1 {
      font-size: 38px;
      line-height: 1.11;
    }

    .tm-page h2 {
      font-size: 30px;
    }

    .tm-page h3 {
      font-size: 20px;
    }

    .hero-intro,
    .section-intro,
    .cta-copy > p {
      font-size: 17px !important;
    }

    .hero-actions {
      display: grid;
      grid-template-columns: 1fr;
      gap: 12px;
      width: 100%;
    }

    .button {
      width: 100%;
      min-height: 52px;
      padding-left: 18px;
      padding-right: 18px;
      text-align: center;
      white-space: normal;
    }

    .memory-console {
      margin-top: 44px;
      border-radius: 24px;
    }

    .console-topbar {
      display: grid;
      align-items: start;
      padding: 22px 20px;
    }

    .console-meta {
      flex-wrap: wrap;
    }

    .console-head {
      display: none;
    }

    .console-grid {
      grid-template-columns: 1fr;
      gap: 14px;
    }

    .console-row {
      min-height: 0;
      padding: 22px 20px;
    }

    .mobile-label {
      display: block;
    }

    .match-cell {
      display: block;
    }

    .console-footer {
      display: grid;
      padding: 19px 20px;
    }

    .value-grid,
    .governance-grid,
    .outcomes-grid,
    .use-case-grid,
    .platform-links-grid {
      grid-template-columns: 1fr;
    }

    .value-item,
    .value-item:first-child,
    .value-item:nth-child(2),
    .value-item:nth-child(3),
    .value-item:last-child {
      padding: 26px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .value-item:last-child { border-bottom: 0; }

    .process-step {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 14px;
    }

    .asset-map-core {
      min-height: 0;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px;
      padding: 24px 20px;
    }

    .asset-map-core::before,
    .asset-map-core::after {
      display: none;
    }

    .memory-core {
      position: relative;
      inset: auto;
      grid-column: 1 / -1;
      width: 166px;
      height: 166px;
      margin: 0 auto 8px;
      transform: none;
    }

    .asset-orbit,
    .orbit-one,
    .orbit-two,
    .orbit-three,
    .orbit-four,
    .orbit-five,
    .orbit-six {
      position: static;
      inset: auto;
      min-width: 0;
      max-width: none;
      min-height: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 9px 10px;
      transform: none;
      white-space: normal;
      text-align: center;
      line-height: 1.25;
    }

    .asset-map-footer {
      display: grid;
      padding: 17px 20px;
    }

    .match-table {
      grid-template-columns: 1fr;
      border-left: 0;
    }

    .match-row {
      min-height: 0;
      padding: 24px 0;
      border-right: 0;
    }

    .match-title {
      display: block;
    }

    .match-row p {
      margin-top: 16px;
    }

    .workflow-grid {
      grid-template-columns: 1fr;
      border-bottom: 0;
    }

    .workflow-step,
    .workflow-step:nth-child(3) {
      min-height: 0;
      display: grid;
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 4px 14px;
      padding: 22px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line-dark);
    }

    .workflow-number {
      grid-row: 1 / span 2;
      margin-bottom: 0;
      padding-top: 3px;
    }

    .workflow-step h3 {
      margin-bottom: 5px;
    }

    .workflow-links {
      justify-content: flex-start;
      gap: 4px 22px;
    }

    .comparison-column {
      padding: 28px 22px;
    }

    .comparison-heading strong {
      font-size: 21px;
    }

    .format-grid {
      grid-template-columns: 1fr;
    }

    .format-grid > div,
    .format-grid > div:nth-child(2n),
    .format-grid > div:nth-last-child(-n+2) {
      min-height: 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .format-grid > div:last-child { border-bottom: 0; }

    .governance-item,
    .governance-item:nth-child(2) {
      padding: 28px 0;
      border-right: 0;
      border-bottom: 1px solid var(--line);
    }

    .governance-item:last-child { border-bottom: 0; }

    .outcomes-grid {
      border-left: 0;
    }

    .outcome-item {
      min-height: 0;
      padding: 26px 0;
      border-right: 0;
    }

    .use-case-grid {
      gap: 0;
    }

    .use-case {
      min-height: 0;
    }

    .change-legend > div {
      grid-template-columns: 14px minmax(0, 1fr);
      gap: 8px 13px;
    }

    .change-legend p {
      grid-column: 2;
    }

    .systems-panel {
      padding: 28px 22px;
      border-radius: 24px;
    }

    .system-lines {
      grid-template-columns: 1fr;
    }

    .insight-panel {
      min-height: 0;
      padding: 32px 24px;
      border-radius: 24px;
    }

    .insight-panel h2 {
      font-size: 28px;
    }

    .platform-link,
    .platform-link:visited {
      min-height: 0;
      grid-template-columns: minmax(0, 1fr) auto;
      padding: 24px 0;
      border-right: 0;
    }

    .faq-item button {
      min-height: 72px;
      font-size: 17px;
    }

    .faq-answer {
      padding-right: 0;
    }

    .final-cta-section {
      padding-bottom: 68px;
    }

    .final-cta {
      min-height: 0;
      gap: 30px;
      padding: 38px 22px;
      border-radius: 24px;
    }

    .cta-copy h2 {
      font-size: 32px;
    }

    .cta-visual {
      min-height: 0;
      padding-top: 4px;
      transform: none;
    }

    .cta-memory-illustration {
      width: 100%;
      max-width: 460px;
    }
  }

  @media (max-width: 390px) {
    .tm-page h1 {
      font-size: 38px;
    }

    .tm-page h2,
    .cta-copy h2 {
      font-size: 30px;
    }

    .asset-map-core {
      gap: 10px;
      padding-left: 16px;
      padding-right: 16px;
    }

    .asset-orbit {
      min-height: 56px;
      padding: 9px 8px;
      font-size: 14px;
    }

    .cta-memory-illustration {
      width: calc(100% + 8px);
      margin-left: -4px;
      margin-right: -4px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .tm-page *,
    .tm-page *::before,
    .tm-page *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
    }
  }
`;

export default TranslationMemoryWireframe;
