import React from "react";

const palette = {
  accent: "#C11D63",
  accentDark: "#A71954",
  accentDeep: "#7A1542",
  blush: "#FDF2F7",
  ink: "#17151A",
  body: "#4E4852",
  muted: "#716A74",
  line: "#E8E3E8",
  lineStrong: "#D8D1D8",
  soft: "#F7F5F7",
  white: "#FFFFFF",
};

function Icon({ name, size = 22 }) {
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
    globe: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3.5 9h17M3.5 15h17M12 3c2.2 2.5 3.3 5.5 3.3 9S14.2 18.5 12 21M12 3C9.8 5.5 8.7 8.5 8.7 12s1.1 6.5 3.3 9" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="m12 3 1.35 3.65L17 8l-3.65 1.35L12 13l-1.35-3.65L7 8l3.65-1.35L12 3Z" />
        <path d="m18.5 13.5.75 2.25 2.25.75-2.25.75-.75 2.25-.75-2.25-2.25-.75 2.25-.75.75-2.25Z" />
        <path d="m5.25 13 .65 1.85 1.85.65-1.85.65L5.25 18l-.65-1.85-1.85-.65 1.85-.65L5.25 13Z" />
      </svg>
    ),
    search: (
      <svg {...common}>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </svg>
    ),
    code: (
      <svg {...common}>
        <path d="m8.5 8-4 4 4 4M15.5 8l4 4-4 4M13.5 5l-3 14" />
      </svg>
    ),
    refresh: (
      <svg {...common}>
        <path d="M20 7v5h-5" />
        <path d="M18.2 16.5A8 8 0 1 1 20 12" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M12 3 5 6v5c0 4.6 2.8 8.1 7 10 4.2-1.9 7-5.4 7-10V6l-7-3Z" />
        <path d="m9.2 12 1.8 1.8 3.9-4" />
      </svg>
    ),
    content: (
      <svg {...common}>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 8h8M8 12h8M8 16h5" />
      </svg>
    ),
    compass: (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2.1 4.9-4.9 2.1 2.1-4.9 4.9-2.1Z" />
      </svg>
    ),
    cart: (
      <svg {...common}>
        <path d="M3 5h2l2.2 9h9.9l2-6H6.2" />
        <circle cx="9" cy="19" r="1" />
        <circle cx="17" cy="19" r="1" />
      </svg>
    ),
    support: (
      <svg {...common}>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2" />
        <path d="M4 13h3v6H5a1 1 0 0 1-1-1v-5ZM20 13h-3v6h2a1 1 0 0 0 1-1v-5Z" />
        <path d="M17 19c0 1.1-.9 2-2 2h-3" />
      </svg>
    ),
    scale: (
      <svg {...common}>
        <path d="M12 3v18M5 6h14M7 6l-3 6h6L7 6ZM17 6l-3 6h6l-3-6ZM8 21h8" />
      </svg>
    ),
    layers: (
      <svg {...common}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </svg>
    ),
    users: (
      <svg {...common}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    trend: (
      <svg {...common}>
        <path d="M3 17 9 11l4 4 8-9" />
        <path d="M15 6h6v6" />
      </svg>
    ),
    rocket: (
      <svg {...common}>
        <path d="M14 5c2.5-2.5 5.4-2 5.4-2s.5 2.9-2 5.4l-5.7 5.7-4.8-4.8L14 5Z" />
        <path d="m9.6 11.9-3.7.4-3.1 3.1 5.1.7M12.1 14.4l-.4 3.7-3.1 3.1-.7-5.1" />
        <circle cx="15.6" cy="6.8" r="1.5" />
      </svg>
    ),
    megaphone: (
      <svg {...common}>
        <path d="m3 11 14-6v14L3 13v-2Z" />
        <path d="M6 14v5h4v-3.3M17 9c2 0 4 1 4 3s-2 3-4 3" />
      </svg>
    ),
    monitor: (
      <svg {...common}>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
        <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
      </svg>
    ),
    plug: (
      <svg {...common}>
        <path d="M8 3v5M16 3v5M6 8h12v2a6 6 0 0 1-6 6v5M9 21h6" />
      </svg>
    ),
    upload: (
      <svg {...common}>
        <path d="M12 16V4M7 9l5-5 5 5" />
        <path d="M5 14v5h14v-5" />
      </svg>
    ),
    check: (
      <svg {...common}>
        <path d="m5 12 4 4L19 6" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M5 12h14M14 7l5 5-5 5" />
      </svg>
    ),
  };

  return icons[name] || icons.globe;
}

const proofItems = [
  { title: "100+ Languages", text: "Professional coverage for major global markets." },
  { title: "AI + Human Quality", text: "The right workflow for each content type." },
  { title: "Multilingual SEO", text: "Search-ready content for local audiences." },
  { title: "Flexible Integrations", text: "CMS, API, proxy, and file-based options." },
  { title: "Continuous Updates", text: "Keep every language aligned as content changes." },
  { title: "Enterprise Governance", text: "Centralized terminology, QA, and approvals." },
];

const challenges = [
  {
    icon: "content",
    title: "Streamline Content Handoffs",
    text: "Move website content through a coordinated translation workflow that reduces repetitive preparation and disconnected file exchanges.",
  },
  {
    icon: "layers",
    title: "Preserve Structure and Context",
    text: "Keep page relationships, metadata, reusable fields, and publishing context connected throughout translation and review.",
  },
  {
    icon: "refresh",
    title: "Keep Multilingual Sites Current",
    text: "Translate new and revised content through repeatable update workflows instead of relaunching the entire website.",
  },
  {
    icon: "shield",
    title: "Govern Quality Across Markets",
    text: "Centralize terminology, translation memory, approvals, and QA so every regional website stays aligned with your brand.",
  },
];

const scopeItems = [
  {
    icon: "content",
    title: "Page Content and Calls to Action",
    text: "Headlines, body copy, product and service descriptions, banners, forms, buttons, and conversion content.",
  },
  {
    icon: "compass",
    title: "Navigation and Search Elements",
    text: "Menus, page titles, meta descriptions, headings, internal links, image alt text, and URL slugs.",
  },
  {
    icon: "cart",
    title: "Commerce and Interface Content",
    text: "Catalogs, product attributes, checkout flows, customer accounts, notifications, labels, and validation messages.",
  },
  {
    icon: "support",
    title: "Support and Resource Libraries",
    text: "Knowledge bases, FAQs, help articles, blog posts, videos, captions, transcripts, downloadable files, and training content.",
  },
  {
    icon: "scale",
    title: "Legal and Regulated Information",
    text: "Privacy notices, terms, consent language, safety information, disclosures, and other high-risk website content.",
  },
  {
    icon: "code",
    title: "Dynamic and Structured Content",
    text: "CMS fields, web application strings, authenticated content, structured data, and content delivered through APIs.",
  },
];

const comparisonRows = [
  {
    label: "Primary Focus",
    translation: "Converts website content into another language while preserving meaning, tone, and intent.",
    localization: "Adapts the broader digital experience for a specific market and audience.",
  },
  {
    label: "Typical Scope",
    translation: "Page copy, navigation, metadata, forms, interface text, and downloadable content.",
    localization: "May also include imagery, formats, layouts, functionality, local conventions, and regulatory needs.",
  },
  {
    label: "Delivery",
    translation: "Can be delivered through files, structured content, CMS workflows, or APIs.",
    localization: "Can include integration, publishing, multilingual SEO, testing, and continuous updates.",
  },
  {
    label: "Best Fit",
    translation: "Straightforward informational content and programs that retain publishing internally.",
    localization: "Customer-facing, transactional, regulated, or market-specific digital experiences.",
  },
];

const businessBenefits = [
  {
    icon: "globe",
    title: "Enter New Markets More Confidently",
    text: "Give international buyers the information they need to understand your company, products, services, and value proposition.",
  },
  {
    icon: "users",
    title: "Improve the Customer Experience",
    text: "Help customers research, navigate, purchase, and request support in a language they understand.",
  },
  {
    icon: "layers",
    title: "Strengthen Global Brand Consistency",
    text: "Use shared terminology, translation memory, and review workflows to align language across regions and channels.",
  },
  {
    icon: "search",
    title: "Increase International Search Visibility",
    text: "Build locally relevant pages around the terms and search intent customers use in each target market.",
  },
  {
    icon: "megaphone",
    title: "Support Global Sales and Marketing",
    text: "Equip regional teams with approved, on-brand content for campaigns, events, launches, and lead generation.",
  },
  {
    icon: "support",
    title: "Make Digital Content More Accessible",
    text: "Provide clearer language access for customers, patients, employees, suppliers, and community audiences.",
  },
  {
    icon: "rocket",
    title: "Accelerate International Launches",
    text: "Move multilingual website content alongside product, software, documentation, and campaign localization.",
  },
  {
    icon: "shield",
    title: "Maintain Legal and Regulatory Clarity",
    text: "Translate privacy, safety, product, and required information through content-appropriate quality workflows.",
  },
];

const contentCategories = [
  {
    icon: "globe",
    title: "Corporate and Brand Content",
    text: "Present your organization, purpose, capabilities, leadership, and global presence in natural, market-ready language.",
    examples: "Homepages, company pages, leadership profiles, sustainability, careers, and news",
  },
  {
    icon: "megaphone",
    title: "Marketing and Demand Generation",
    text: "Adapt persuasive content to preserve brand voice, communicate benefits clearly, and support conversion.",
    examples: "Campaign pages, solution content, customer stories, events, forms, and calls to action",
  },
  {
    icon: "cart",
    title: "Ecommerce and Transactional Content",
    text: "Support the customer journey from product discovery through purchase, account management, and post-sale service.",
    examples: "Catalogs, attributes, promotions, checkout, payments, shipping, returns, and notifications",
  },
  {
    icon: "monitor",
    title: "Product, SaaS, and Web Applications",
    text: "Keep marketing language, interface terminology, onboarding, account content, and release workflows aligned.",
    examples: "Dashboards, settings, tooltips, errors, onboarding, subscriptions, and billing",
  },
  {
    icon: "support",
    title: "Support and Knowledge Content",
    text: "Scale frequently changing help content through translation memory, terminology controls, and continuous workflows.",
    examples: "Knowledge bases, FAQs, troubleshooting, documentation, release notes, and training",
  },
  {
    icon: "scale",
    title: "Legal, Compliance, and Regulated Content",
    text: "Route higher-risk content to specialized linguists, controlled review, and traceable approval processes.",
    examples: "Privacy, terms, disclosures, safety information, medical content, and product labeling",
  },
];

const translationModels = [
  {
    icon: "upload",
    title: "Translation-Only Delivery",
    summary: "Your team exports website content and receives translated files or structured content for publishing.",
    bestFor: "Smaller sites, one-time projects, and teams with in-house web support",
    advantage: "Straightforward setup with direct publishing control for your web team",
  },
  {
    icon: "plug",
    title: "CMS-Connected Translation",
    summary: "Content moves between your CMS and the Stepes workflow through an integration or structured exchange.",
    bestFor: "Enterprise websites, frequent updates, and distributed marketing teams",
    advantage: "Fewer manual handoffs while preserving content structure and metadata",
  },
  {
    icon: "code",
    title: "API-Based Continuous Translation",
    summary: "Content is submitted and returned programmatically through a translation API or custom integration.",
    bestFor: "Headless CMS, web applications, digital products, and continuous delivery",
    advantage: "Scalable, event-driven localization embedded in publishing workflows",
  },
  {
    icon: "globe",
    title: "Website Translation Proxy",
    summary: "A managed layer can create and serve multilingual versions without storing every translation in the source CMS.",
    bestFor: "Faster multilingual deployment and websites where direct integration is difficult",
    advantage: "Reduced source-site changes and lighter demands on your web team",
  },
  {
    icon: "sparkles",
    title: "Fully Managed Localization",
    summary: "Stepes coordinates assessment, translation, review, SEO, testing, launch support, and ongoing updates.",
    bestFor: "Complex global launches and organizations without dedicated localization resources",
    advantage: "One accountable partner across the complete website localization lifecycle",
  },
];

const decisionFactors = [
  { title: "Website Architecture", text: "CMS, headless, ecommerce, custom application, or static environment" },
  { title: "Update Frequency", text: "One-time launch, scheduled releases, or continuous publishing" },
  { title: "Team Capacity", text: "Available marketing, localization, engineering, and regional review support" },
  { title: "Control and Governance", text: "Publishing ownership, approvals, security, and reporting requirements" },
];

function ArrowLink({ href, children }) {
  return (
    <a className="wts-editorial-link" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function BrowserFrame({ locale = "EN", title, copy, button, compact = false }) {
  return (
    <div className={`wts-browser ${compact ? "wts-browser--compact" : ""}`}>
      <div className="wts-browser__bar">
        <span className="wts-browser__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="wts-browser__path">yourwebsite.com/{locale.toLowerCase()}</span>
        <span className="wts-browser__locale">{locale}</span>
      </div>
      <div className="wts-browser__body">
        <span className="wts-browser__eyebrow">DIGITAL EXPERIENCE</span>
        <strong>{title}</strong>
        <p>{copy}</p>
        <span className="wts-browser__button">{button}</span>
      </div>
    </div>
  );
}

function HeroWorkflowVisual() {
  return (
    <div className="wts-hero-visual" aria-label="Illustration of website content moving through the Stepes translation workflow into localized websites">
      <div className="wts-visual-column wts-visual-column--source">
        <span className="wts-visual-label">SOURCE WEBSITE</span>
        <BrowserFrame
          locale="EN"
          title="Built for Global Growth"
          copy="One source website, ready for every market."
          button="Explore Solutions"
        />
      </div>

      <div className="wts-orchestration">
        <div className="wts-orchestration__icon">
          <Icon name="sparkles" size={24} />
        </div>
        <strong>Stepes Translation Workflow</strong>
        <div className="wts-orchestration__rail" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="wts-orchestration__labels">
          <span>Connect</span>
          <span>Translate</span>
          <span>Review</span>
          <span>Publish</span>
        </div>
        <div className="wts-orchestration__assets">
          <span>Terminology</span>
          <span>Translation Memory</span>
          <span>Quality Assurance</span>
        </div>
      </div>

      <div className="wts-visual-column wts-visual-column--localized">
        <span className="wts-visual-label">LOCALIZED EXPERIENCES</span>
        <div className="wts-localized-stack">
          <BrowserFrame locale="FR" title="Conçu pour grandir" copy="Une expérience claire pour chaque marché." button="Découvrir" compact />
          <BrowserFrame locale="JA" title="世界市場への成長を支援" copy="各市場に最適なウェブ体験。" button="詳しく見る" compact />
          <BrowserFrame locale="ES" title="Creado para crecer" copy="Una experiencia local para cada mercado." button="Explorar" compact />
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="wts-hero" aria-labelledby="wts-hero-title">
      <div className="wts-shell">
        <div className="wts-hero__copy">
          <h1 id="wts-hero-title">Website Translation Services for Global Growth</h1>
          <p className="wts-hero__lead">
            Translate and localize your website for global audiences with AI-powered automation, professional linguists, multilingual SEO, flexible integrations, and continuous updates—all managed through one enterprise-ready workflow.
          </p>
          <div className="wts-hero__actions">
            <a className="wts-button wts-button--primary" href="https://www.stepes.com/contact-us/">
              Talk to a Website Translation Expert
              <Icon name="arrow" size={18} />
            </a>
            <a className="wts-button wts-button--secondary" href="https://www.stepes.com/website-translation-services/get-a-quote/">
              Get a Website Translation Quote
            </a>
          </div>
          <p className="wts-hero__support">Corporate websites, ecommerce stores, SaaS platforms, customer portals, knowledge bases, and digital experiences in 100+ languages.</p>
        </div>

        <HeroWorkflowVisual />

        <div className="wts-proof-band" aria-label="Enterprise website translation capabilities">
          {proofItems.map((item) => (
            <div className="wts-proof-item" key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnterpriseSection() {
  return (
    <section className="wts-section wts-enterprise" aria-labelledby="wts-enterprise-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">MODERN MULTILINGUAL OPERATIONS</p>
            <h2 id="wts-enterprise-title">Professional Website Translation Built for Modern Enterprises</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              A multilingual website is more than a collection of translated pages. It is a global customer experience that must remain accurate, persuasive, technically reliable, easy to navigate, and consistent with your brand.
            </p>
            <p>
              Stepes connects content discovery, translation, review, testing, deployment, and ongoing updates in one coordinated workflow—helping marketing, localization, product, engineering, legal, and regional teams work through a scalable global content program.
            </p>
          </div>
        </div>

        <div className="wts-enterprise-panel">
          <div className="wts-enterprise-panel__intro">
            <div className="wts-icon-surface">
              <Icon name="globe" size={25} />
            </div>
            <h3>One Connected Website Localization Program</h3>
            <p>
              Coordinate translation, review, testing, publishing, and ongoing updates through a repeatable operation designed for continued international growth.
            </p>
            <ArrowLink href="https://www.stepes.com/enterprise-translation-management/">Enterprise Translation Management</ArrowLink>
          </div>

          <div className="wts-challenge-list">
            {challenges.map((item) => (
              <article className="wts-challenge-row" key={item.title}>
                <div className="wts-challenge-row__icon">
                  <Icon name={item.icon} size={22} />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DefinitionSection() {
  return (
    <section className="wts-section wts-definition" aria-labelledby="wts-definition-title">
      <div className="wts-shell">
        <div className="wts-definition__top">
          <div className="wts-definition__title">
            <p className="wts-eyebrow">SERVICE SCOPE</p>
            <h2 id="wts-definition-title">What Are Website Translation Services?</h2>
          </div>
          <div className="wts-definition__definition">
            <p className="wts-definition__lead">
              Website translation services convert website content from one language into one or more target languages while preserving its meaning, purpose, tone, and usability.
            </p>
            <p>
              A complete service can extend far beyond visible webpage copy. Stepes can support the search, interface, commerce, legal, support, multimedia, and structured content that together form the full multilingual digital experience.
            </p>
          </div>
        </div>

        <div className="wts-scope-grid">
          {scopeItems.map((item) => (
            <article className="wts-scope-item" key={item.title}>
              <div className="wts-scope-item__head">
                <div className="wts-scope-item__icon">
                  <Icon name={item.icon} size={22} />
                </div>
                <h3>{item.title}</h3>
              </div>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="wts-definition__footer">
          <div className="wts-definition__footer-copy">
            <Icon name="check" size={21} />
            <p>
              Some organizations need content translation only. Others need technical integration, multilingual SEO, localization testing, deployment, and continuous updates. <strong>Stepes supports both requirements.</strong>
            </p>
          </div>
          <ArrowLink href="https://www.stepes.com/website-translation-services/#website-translation-models">Compare Website Translation Models</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="wts-section wts-comparison" aria-labelledby="wts-comparison-title">
      <div className="wts-shell">
        <div className="wts-centered-heading">
          <h2 id="wts-comparison-title">Website Translation vs. Website Localization</h2>
          <p>
            Website translation makes your content available in another language. Website localization adapts the complete digital experience for the expectations of each market.
          </p>
        </div>

        <div className="wts-comparison-matrix" role="table" aria-label="Comparison of website translation and website localization">
          <div className="wts-comparison-matrix__header" role="row">
            <span aria-hidden="true" />
            <div role="columnheader">
              <div className="wts-comparison-matrix__icon"><Icon name="content" size={22} /></div>
              <strong>Website Translation</strong>
              <span>Accurate multilingual content</span>
            </div>
            <div role="columnheader">
              <div className="wts-comparison-matrix__icon"><Icon name="globe" size={22} /></div>
              <strong>Website Localization</strong>
              <span>A market-ready digital experience</span>
            </div>
          </div>

          {comparisonRows.map((row) => (
            <div className="wts-comparison-matrix__row" role="row" key={row.label}>
              <strong role="rowheader">{row.label}</strong>
              <p role="cell">{row.translation}</p>
              <p role="cell">{row.localization}</p>
            </div>
          ))}
        </div>

        <div className="wts-comparison-callout">
          <div className="wts-comparison-callout__icon"><Icon name="check" size={22} /></div>
          <p>
            <strong>Translation is the foundation; localization completes the experience.</strong> Stepes helps you apply the right level of language adaptation, technical integration, SEO, and quality assurance to every content type and market.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="wts-section wts-benefits" aria-labelledby="wts-benefits-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split wts-section-heading--dark">
          <div>
            <p className="wts-eyebrow wts-eyebrow--dark">GLOBAL BUSINESS VALUE</p>
            <h2 id="wts-benefits-title">Why Translate Your Website?</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Your website is often the first place international audiences evaluate your organization. Professional translation makes that experience easier to understand, trust, and act on in every target market.
            </p>
          </div>
        </div>

        <div className="wts-benefit-grid">
          {businessBenefits.map((item) => (
            <article className="wts-benefit-item" key={item.title}>
              <div className="wts-benefit-item__icon"><Icon name={item.icon} size={22} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContentScopeSection() {
  return (
    <section className="wts-section wts-content-scope" aria-labelledby="wts-content-scope-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">CONTENT STRATEGY</p>
            <h2 id="wts-content-scope-title">Every Website Has a Different Translation Scope</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Not every webpage carries the same business value, visibility, update frequency, or risk. Stepes helps classify content so each category receives the appropriate translation, review, and localization workflow.
            </p>
          </div>
        </div>

        <div className="wts-content-category-grid">
          {contentCategories.map((item) => (
            <article className="wts-content-category" key={item.title}>
              <div className="wts-content-category__icon"><Icon name={item.icon} size={22} /></div>
              <div className="wts-content-category__body">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="wts-content-category__examples">
                  <span>Typical content</span>
                  <p>{item.examples}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="wts-scope-principle">
          <span className="wts-scope-principle__marker" aria-hidden="true" />
          <p>
            Scope can be prioritized by market relevance, traffic, customer journey, conversion value, regulatory risk, and launch phase—so resources are concentrated where they create the greatest value.
          </p>
        </div>
      </div>
    </section>
  );
}

function TranslationModelsSection() {
  return (
    <section className="wts-section wts-models" id="website-translation-models" aria-labelledby="wts-models-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <h2 id="wts-models-title">Choose the Right Website Translation Model</h2>
          <p>
            The best workflow depends on your website architecture, content volume, publishing process, update frequency, team capacity, and desired level of control. Stepes adapts to your environment rather than forcing every website into one delivery model.
          </p>
        </div>

        <div className="wts-model-matrix" role="table" aria-label="Comparison of website translation delivery models">
          <div className="wts-model-matrix__header" role="row">
            <span role="columnheader">Translation Model</span>
            <span role="columnheader">How It Works</span>
            <span role="columnheader">Best For</span>
            <span role="columnheader">Key Advantage</span>
          </div>
          {translationModels.map((model) => (
            <article className="wts-model-row" role="row" key={model.title}>
              <div className="wts-model-row__title" role="rowheader">
                <div className="wts-model-row__icon"><Icon name={model.icon} size={22} /></div>
                <h3>{model.title}</h3>
              </div>
              <div className="wts-model-row__cell" role="cell">
                <span>How It Works</span>
                <p>{model.summary}</p>
              </div>
              <div className="wts-model-row__cell" role="cell">
                <span>Best For</span>
                <p>{model.bestFor}</p>
              </div>
              <div className="wts-model-row__cell" role="cell">
                <span>Key Advantage</span>
                <p>{model.advantage}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wts-decision-panel">
          <div className="wts-decision-panel__intro">
            <div className="wts-decision-panel__icon"><Icon name="compass" size={24} /></div>
            <div>
              <h3>How Stepes Helps You Choose</h3>
              <p>We assess the factors that determine the most practical balance of speed, quality, control, cost, and scalability.</p>
            </div>
          </div>
          <div className="wts-decision-factors">
            {decisionFactors.map((factor) => (
              <div className="wts-decision-factor" key={factor.title}>
                <strong>{factor.title}</strong>
                <span>{factor.text}</span>
              </div>
            ))}
          </div>
          <ArrowLink href="https://www.stepes.com/contact-us/">Plan Your Website Translation Workflow</ArrowLink>
        </div>
      </div>
    </section>
  );
}


const qualityRoutes = [
  {
    label: "AI TRANSLATION",
    title: "Fast Language Access at Scale",
    text: "Create fast multilingual access for high-volume, time-sensitive, or lower-risk website content.",
    fit: "Support archives, user-generated content, employee-facing pages, and rapidly changing informational content",
  },
  {
    label: "AI + POST-EDITING",
    title: "Balanced Speed and Professional Quality",
    text: "Professional linguists refine AI output for accuracy, fluency, terminology, completeness, and usability.",
    fit: "Product descriptions, knowledge bases, general corporate content, and large-volume programs",
  },
  {
    label: "HUMAN TRANSLATION",
    title: "Brand-Ready Professional Translation",
    text: "Native-language professionals translate high-value content with full attention to audience, tone, context, and brand voice.",
    fit: "Homepages, product launches, solution pages, campaigns, and conversion-focused content",
  },
  {
    label: "SPECIALIST TRANSLATION",
    title: "Expertise for High-Risk Content",
    text: "Subject-matter linguists handle technical, legal, medical, financial, scientific, and regulated content.",
    fit: "Safety information, disclosures, specifications, legal terms, and regulated product content",
  },
  {
    label: "TRANSCREATION",
    title: "Creative Adaptation for Local Markets",
    text: "Creative language specialists recreate the impact of high-value marketing copy for each audience and culture.",
    fit: "Campaign headlines, slogans, calls to action, brand statements, and market-specific landing pages",
  },
];

const processSteps = [
  {
    phase: "DISCOVER",
    title: "Discovery and Website Assessment",
    text: "Define target markets, website architecture, business goals, update frequency, stakeholders, security needs, and desired launch timing.",
  },
  {
    phase: "DISCOVER",
    title: "Content Inventory and Scope Definition",
    text: "Identify public pages, metadata, forms, structured fields, documents, media, dynamic content, and any content that should remain untranslated.",
  },
  {
    phase: "DESIGN",
    title: "Workflow and Integration Design",
    text: "Confirm how content will move through files, a CMS, APIs, proxy delivery, scheduled exports, or a custom localization workflow.",
  },
  {
    phase: "PREPARE",
    title: "SEO and Language Preparation",
    text: "Prepare target-market keywords, terminology, style guidance, translation memory, reference content, and market-specific instructions.",
  },
  {
    phase: "TRANSLATE",
    title: "Translation and Localization",
    text: "Apply the approved combination of AI, professional linguists, specialists, post-editors, and creative adaptation to each content type.",
  },
  {
    phase: "VALIDATE",
    title: "Linguistic Review and Quality Assurance",
    text: "Review accuracy, completeness, terminology, fluency, brand voice, search language, and automated quality findings.",
  },
  {
    phase: "APPROVE",
    title: "In-Market Review and Approval",
    text: "Coordinate your authorized reviewers, consolidate feedback, resolve terminology decisions, and preserve approved language for future updates.",
  },
  {
    phase: "TEST",
    title: "In-Context Website QA",
    text: "Check translated pages for truncation, layout defects, untranslated text, navigation issues, character rendering, forms, and responsive behavior.",
  },
  {
    phase: "LAUNCH",
    title: "Deployment and Launch Support",
    text: "Deliver translation-ready content or support publishing, language selection, metadata, navigation, prelaunch validation, and postlaunch issue resolution.",
  },
  {
    phase: "OPTIMIZE",
    title: "Continuous Translation and Optimization",
    text: "Keep multilingual websites current through repeatable updates, translation memory, terminology maintenance, reporting, and periodic audits.",
  },
];

const processStages = [
  { label: "PLAN", title: "Define the Program", steps: processSteps.slice(0, 2) },
  { label: "PREPARE", title: "Build the Workflow Foundation", steps: processSteps.slice(2, 4) },
  { label: "TRANSLATE", title: "Create and Validate the Content", steps: processSteps.slice(4, 6) },
  { label: "REVIEW", title: "Approve and Test the Experience", steps: processSteps.slice(6, 8) },
  { label: "LAUNCH", title: "Launch and Keep It Current", steps: processSteps.slice(8, 10) },
];

const continuousCapabilities = [
  {
    icon: "refresh",
    title: "Translate Only What Changed",
    text: "Use content comparison and translation memory to identify new or revised text while preserving approved translations.",
  },
  {
    icon: "plug",
    title: "Automate Content Intake",
    text: "Move updates through CMS workflows, APIs, scheduled exports, structured files, proxy technology, or direct content submission.",
  },
  {
    icon: "rocket",
    title: "Route Content by Priority",
    text: "Apply expedited, specialist, standard, or economical workflows according to urgency, visibility, and risk.",
  },
  {
    icon: "users",
    title: "Coordinate Global Releases",
    text: "Track language status, reviewer progress, approvals, open questions, and launch dependencies across markets.",
  },
  {
    icon: "shield",
    title: "Prevent Multilingual Content Drift",
    text: "Use ongoing monitoring and periodic audits to identify outdated, missing, or inconsistent localized content.",
  },
];

const seoCapabilities = [
  {
    title: "Multilingual Keyword Research",
    text: "Identify the natural, commercially relevant terms customers use in each language and regional market.",
  },
  {
    title: "Search-Intent Localization",
    text: "Adapt headings and supporting copy when a literal translation does not match local search behavior or buyer expectations.",
  },
  {
    title: "Search-Ready Page Elements",
    text: "Localize titles, descriptions, headings, body copy, alt text, link anchors, structured fields, and calls to action.",
  },
  {
    title: "Language-Specific URLs",
    text: "Support stable, accessible URL structures for each language version through directories, subdomains, or market domains.",
  },
  {
    title: "Hreflang and Internal Linking",
    text: "Coordinate language mapping and localized navigation so search engines and users reach the appropriate version of each page.",
  },
  {
    title: "Content Parity and Market Relevance",
    text: "Distinguish global content, regional adaptations, market-exclusive pages, and content intentionally excluded from translation.",
  },
];

function AiHumanSection() {
  return (
    <section className="wts-section wts-ai-human" id="ai-human-website-translation" aria-labelledby="wts-ai-human-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">QUALITY MATCHED TO CONTENT RISK</p>
            <h2 id="wts-ai-human-title">AI + Human Website Translation</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              A homepage headline, legal notice, support article, product specification, and archived blog post should not automatically receive the same translation process.
            </p>
            <p>
              Stepes aligns AI automation, professional linguists, subject-matter expertise, and creative adaptation with the audience, visibility, risk, volume, and shelf life of each webpage.
            </p>
          </div>
        </div>

        <div className="wts-quality-guide" aria-hidden="true">
          <span>Scale and immediacy</span>
          <i />
          <span>Brand nuance and risk control</span>
        </div>

        <div className="wts-quality-spectrum">
          {qualityRoutes.map((route) => (
            <article className="wts-quality-route" key={route.label}>
              <span className="wts-quality-route__label">{route.label}</span>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <div className="wts-quality-route__fit">
                <span>Best suited to</span>
                <p>{route.fit}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wts-review-band">
          <div className="wts-review-band__icon"><Icon name="users" size={23} /></div>
          <div>
            <h3>Bring In-Market Review Into One Governed Workflow</h3>
            <p>
              Local teams can validate market terminology, brand preferences, product language, and regulatory requirements within an organized approval workflow. Stepes consolidates decisions and carries approved language into terminology and translation memory.
            </p>
          </div>
          <ArrowLink href="https://www.stepes.com/solutions/ai-powered-translation-workflows/">Explore AI + Human Translation Workflows</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function TranslationProcessSection() {
  return (
    <section className="wts-section wts-process" id="website-translation-process" aria-labelledby="wts-process-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <p className="wts-eyebrow">FROM DISCOVERY TO CONTINUOUS OPERATIONS</p>
          <h2 id="wts-process-title">The Stepes Website Translation Process</h2>
          <p>
            Successful website translation connects business objectives, technology, language quality, publishing, and long-term maintenance before translation begins.
          </p>
        </div>

        <div className="wts-process-stages">
          {processStages.map((stage, stageIndex) => (
            <section className="wts-process-stage" aria-label={`${stage.label}: ${stage.title}`} key={stage.label}>
              <div className="wts-process-stage__heading">
                <span>STAGE {String(stageIndex + 1).padStart(2, "0")}</span>
                <h3>{stage.title}</h3>
              </div>
              <div className="wts-process-stage__steps">
                {stage.steps.map((step, stepIndex) => {
                  const stepNumber = stageIndex * 2 + stepIndex + 1;
                  return (
                    <article className="wts-process-step" key={step.title}>
                      <div className="wts-process-step__number" aria-hidden="true">{String(stepNumber).padStart(2, "0")}</div>
                      <div className="wts-process-step__body">
                        <span>{step.phase}</span>
                        <h3>{step.title}</h3>
                        <p>{step.text}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>

        <div className="wts-process-footer">
          <p>
            The process can be scaled for a focused website launch or configured as an ongoing enterprise localization program across languages, brands, business units, and regional teams.
          </p>
          <ArrowLink href="https://www.stepes.com/contact-us/">Plan Your Website Translation Program</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function ContinuousWorkflowVisual() {
  return (
    <div className="wts-continuous-visual" aria-label="Illustration of continuous website translation from content updates through multilingual publishing">
      <div className="wts-continuous-visual__header">
        <div>
          <span>CONTINUOUS WEBSITE OPERATIONS</span>
          <strong>Global Content Update</strong>
        </div>
        <span className="wts-continuous-visual__status">Workflow active</span>
      </div>

      <div className="wts-update-card">
        <div className="wts-update-card__icon"><Icon name="content" size={21} /></div>
        <div>
          <span>Source update detected</span>
          <strong>Product launch page revised</strong>
          <p>New headline, three feature sections, metadata, and two calls to action</p>
        </div>
      </div>

      <div className="wts-continuous-flow" aria-hidden="true">
        <div>
          <span>01</span>
          <strong>Compare</strong>
          <small>Changed content only</small>
        </div>
        <i />
        <div>
          <span>02</span>
          <strong>Route</strong>
          <small>Quality by content risk</small>
        </div>
        <i />
        <div>
          <span>03</span>
          <strong>Approve</strong>
          <small>Regional review where needed</small>
        </div>
        <i />
        <div>
          <span>04</span>
          <strong>Publish</strong>
          <small>Coordinated language release</small>
        </div>
      </div>

      <div className="wts-language-status">
        <div><span>French</span><strong>Ready to publish</strong></div>
        <div><span>German</span><strong>In review</strong></div>
        <div><span>Japanese</span><strong>Translation complete</strong></div>
      </div>
    </div>
  );
}

function ContinuousTranslationSection() {
  return (
    <section className="wts-section wts-continuous" id="continuous-website-translation" aria-labelledby="wts-continuous-title">
      <div className="wts-shell">
        <div className="wts-continuous-layout">
          <div className="wts-continuous-copy">
            <p className="wts-eyebrow">ALWAYS-CURRENT MULTILINGUAL CONTENT</p>
            <h2 id="wts-continuous-title">Continuous Website Translation</h2>
            <p className="wts-continuous-copy__lead">
              Modern websites change every day. Stepes turns those changes into a repeatable multilingual operation so localized experiences do not fall behind the source website.
            </p>

            <div className="wts-continuous-capabilities">
              {continuousCapabilities.map((item) => (
                <article className="wts-continuous-capability" key={item.title}>
                  <div className="wts-continuous-capability__icon"><Icon name={item.icon} size={21} /></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <ArrowLink href="https://www.stepes.com/solutions/global-content-operations/">Explore Global Content Operations</ArrowLink>
          </div>
          <ContinuousWorkflowVisual />
        </div>
      </div>
    </section>
  );
}

function SearchArchitectureVisual() {
  return (
    <div className="wts-search-visual" aria-label="Illustration of multilingual keyword research, localized pages, and international search discovery">
      <div className="wts-search-query">
        <div className="wts-search-query__icon"><Icon name="search" size={20} /></div>
        <div>
          <span>TARGET-MARKET SEARCH</span>
          <strong>Market-specific search phrase</strong>
        </div>
      </div>
      <div className="wts-search-connector" aria-hidden="true"><span /><span /><span /></div>
      <div className="wts-search-page">
        <div className="wts-search-page__url">/fr/services/traduction-de-sites-web/</div>
        <strong>Localized page aligned with search intent</strong>
        <p>Search-ready title, headings, copy, internal links, metadata, and calls to action</p>
        <div className="wts-search-page__signals">
          <span>Localized URL</span>
          <span>Hreflang mapped</span>
          <span>Internal links aligned</span>
        </div>
      </div>
      <div className="wts-search-markets">
        <div><span>FR</span><strong>France</strong></div>
        <div><span>DE</span><strong>Germany</strong></div>
        <div><span>JP</span><strong>Japan</strong></div>
      </div>
    </div>
  );
}

function MultilingualSeoSection() {
  return (
    <section className="wts-section wts-seo" id="multilingual-seo" aria-labelledby="wts-seo-title">
      <div className="wts-shell">
        <div className="wts-seo-top">
          <div className="wts-seo-copy">
            <p className="wts-eyebrow wts-eyebrow--dark">INTERNATIONAL SEARCH VISIBILITY</p>
            <h2 id="wts-seo-title">Multilingual SEO for Every Target Market</h2>
            <p>
              Translating a page does not automatically make it relevant for the terms customers use in another language. Stepes connects language quality with local search intent so multilingual content can be discovered, understood, and acted on.
            </p>
          </div>
          <SearchArchitectureVisual />
        </div>

        <div className="wts-seo-grid">
          {seoCapabilities.map((item) => (
            <article className="wts-seo-item" key={item.title}>
              <span className="wts-seo-item__marker" aria-hidden="true" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="wts-seo-footer">
          <p>
            Multilingual SEO is an ongoing content discipline. Keywords, competitors, product language, and customer behavior evolve, so high-value international pages benefit from periodic review and optimization.
          </p>
          <ArrowLink href="https://www.stepes.com/resources/global-content-strategy/">Explore Global Content Strategy</ArrowLink>
        </div>
      </div>
    </section>
  );
}


const technologyGroups = [
  {
    icon: "layers",
    title: "Content Management Systems",
    text: "Support enterprise, open-source, cloud-based, and custom CMS environments through the most practical content exchange model.",
  },
  {
    icon: "code",
    title: "Headless and Composable Architecture",
    text: "Translate structured content while preserving fields, identifiers, metadata, reusable components, and publishing states.",
  },
  {
    icon: "cart",
    title: "Ecommerce Platforms",
    text: "Handle catalogs, categories, product attributes, promotions, checkout content, accounts, and transactional messaging.",
  },
  {
    icon: "monitor",
    title: "Custom Websites and Web Applications",
    text: "Work with content stored in databases, repositories, resource files, structured formats, and proprietary systems.",
  },
  {
    icon: "plug",
    title: "Connected Content Systems",
    text: "Coordinate website content from DAM, PIM, marketing automation, support, learning, and documentation platforms.",
  },
  {
    icon: "database",
    title: "Structured and File-Based Content",
    text: "Protect formatting, tags, variables, code, and nontranslatable elements across common digital publishing formats.",
  },
];

const integrationQuestions = [
  "Where is your website content stored?",
  "How does content move into publishing?",
  "Which teams review and approve each language?",
  "How frequently does the source website change?",
];

const qaCapabilities = [
  {
    icon: "content",
    title: "Linguistic Quality Assurance",
    text: "Review accuracy, completeness, fluency, grammar, terminology, brand voice, style, and audience suitability.",
    checks: "Language accuracy · Brand voice · Market appropriateness",
  },
  {
    icon: "check",
    title: "Automated Translation QA",
    text: "Identify missing translations, terminology deviations, number mismatches, tag errors, and formatting inconsistencies at scale.",
    checks: "Terminology · Tags and variables · Completeness",
  },
  {
    icon: "search",
    title: "In-Context Review",
    text: "Evaluate translated content within the page, interface, screenshot, or preview where customers will experience it.",
    checks: "Page purpose · Visual hierarchy · Conversion intent",
  },
  {
    icon: "monitor",
    title: "Visual and Responsive QA",
    text: "Check text expansion, wrapping, spacing, alignment, fonts, navigation, forms, and layouts across screen sizes.",
    checks: "Desktop · Tablet · Mobile",
  },
  {
    icon: "plug",
    title: "Functional Localization Testing",
    text: "Validate language selectors, links, downloads, search, filters, forms, checkout flows, and interactive components.",
    checks: "Navigation · Forms · Customer journeys",
  },
  {
    icon: "globe",
    title: "Right-to-Left and Market Validation",
    text: "Review directionality, mixed-language content, local terminology, market requirements, and regional usability.",
    checks: "RTL behavior · Local conventions · In-market approval",
  },
];

const industryGroups = [
  {
    label: "REGULATED INDUSTRIES",
    title: "Accuracy, Traceability, and Subject-Matter Expertise",
    text: "Specialized workflows support customer-facing content where terminology, clarity, review, and accountability are critical.",
    industries: [
      { name: "Life Sciences", href: "https://www.stepes.com/life-sciences-translation-services/", description: "Scientific, clinical, patient, professional, and corporate content" },
      { name: "Healthcare", href: "https://www.stepes.com/healthcare-translation-services/", description: "Patient education, service information, access, and community resources" },
      { name: "Medical Devices", href: "https://www.stepes.com/medical-device-translation-services/", description: "Product, safety, clinical, regulatory, and professional content" },
      { name: "Financial Services", href: "https://www.stepes.com/financial-translation-services/", description: "Banking, investment, fintech, disclosures, portals, and customer education" },
      { name: "Insurance", href: "https://www.stepes.com/insurance-translation-services/", description: "Policies, claims, underwriting, disclosures, websites, and customer portals" },
      { name: "Legal", href: "https://www.stepes.com/legal-translation-services/", description: "Practice areas, attorney profiles, client resources, insights, and legal information" },
      { name: "Government and Public Sector", href: "https://www.stepes.com/government-translation-services/", description: "Public services, forms, notices, safety, and community information" },
    ],
  },
  {
    label: "TECHNOLOGY AND MANUFACTURING",
    title: "Connected Language Across Products and Digital Experiences",
    text: "Align website language with software, documentation, product data, technical terminology, and continuous release cycles.",
    industries: [
      { name: "Software and SaaS", href: "https://www.stepes.com/software-translation-services/", description: "Product pages, interfaces, developer content, help centers, and releases" },
      { name: "AI and Machine Learning", href: "https://www.stepes.com/ai-machine-learning-translation-services/", description: "Platforms, model capabilities, governance, trust, and developer resources" },
      { name: "Manufacturing and Engineering", href: "https://www.stepes.com/manufacturing-translation-services/", description: "Catalogs, specifications, distributor content, safety, and service" },
      { name: "Automotive and Mobility", href: "https://www.stepes.com/automotive-translation-services/", description: "Products, features, ownership, connected services, and mobility platforms" },
    ],
  },
  {
    label: "GLOBAL BUSINESS",
    title: "Market-Ready Content That Supports Customer Action",
    text: "Combine natural language, brand adaptation, search relevance, and scalable updates for fast-moving customer experiences.",
    industries: [
      { name: "Retail", href: "https://www.stepes.com/retail-translation-services/", description: "Products, promotions, stores, loyalty, customer service, and omnichannel content" },
      { name: "Ecommerce", href: "https://www.stepes.com/ecommerce-translation-services/", description: "Product catalogs, search, checkout, delivery, returns, and customer support" },
      { name: "Travel and Hospitality", href: "https://www.stepes.com/travel-translation-services/", description: "Destinations, properties, booking, guest information, and experiences" },
      { name: "Education and eLearning", href: "https://www.stepes.com/education-translation-services/", description: "Programs, admissions, portals, training, research, and policies" },
    ],
  },
];

const governanceCapabilities = [
  {
    label: "REUSE",
    title: "Translation Memory",
    text: "Retain approved source and target-language segments for consistent reuse across pages, releases, and related content.",
  },
  {
    label: "CONTROL",
    title: "Terminology Management",
    text: "Define approved brand, product, technical, legal, and search terminology—including terms that must remain untranslated.",
  },
  {
    label: "VOICE",
    title: "Multilingual Style Guides",
    text: "Document tone, formality, capitalization, punctuation, units, audience, and market conventions for each language.",
  },
  {
    label: "APPROVAL",
    title: "Reviewer Governance",
    text: "Organize roles, deadlines, feedback categories, terminology escalation, final ownership, and reusable reviewer decisions.",
  },
  {
    label: "ALIGNMENT",
    title: "Cross-Content Consistency",
    text: "Keep website language aligned with software, mobile apps, documentation, campaigns, training, support, and legal content.",
  },
];

function TechnologyEcosystemVisual() {
  return (
    <div className="wts-tech-visual" aria-label="Illustration of website content systems connecting to a flexible Stepes translation workflow">
      <div className="wts-tech-visual__header">
        <div>
          <span>YOUR WEBSITE ECOSYSTEM</span>
          <strong>Connect Content Without Rebuilding Your Stack</strong>
        </div>
        <span className="wts-tech-visual__status">Flexible connection model</span>
      </div>

      <div className="wts-tech-sources">
        <div><Icon name="layers" size={19} /><span>CMS</span></div>
        <div><Icon name="code" size={19} /><span>Headless</span></div>
        <div><Icon name="cart" size={19} /><span>Ecommerce</span></div>
        <div><Icon name="monitor" size={19} /><span>Custom Web</span></div>
      </div>

      <div className="wts-tech-connection" aria-hidden="true">
        <i /><i /><i /><i />
      </div>

      <div className="wts-tech-workflow">
        <div className="wts-tech-workflow__icon"><Icon name="sparkles" size={23} /></div>
        <div>
          <span>STEPES TRANSLATION WORKFLOW</span>
          <strong>Files · APIs · Connected Workflows · Proxy Delivery</strong>
        </div>
      </div>

      <div className="wts-tech-output">
        <div><span>FR</span><strong>French</strong></div>
        <div><span>DE</span><strong>German</strong></div>
        <div><span>JA</span><strong>Japanese</strong></div>
        <div><span>AR</span><strong>Arabic</strong></div>
      </div>
    </div>
  );
}

function TechnologySupportSection() {
  return (
    <section className="wts-section wts-technology" id="website-technology-support" aria-labelledby="wts-technology-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">CMS, ECOMMERCE, AND DIGITAL PLATFORMS</p>
            <h2 id="wts-technology-title">Website Translation That Works With Your Technology</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Your translation workflow should fit the way your organization stores, reviews, and publishes content. Stepes supports flexible delivery for traditional CMS platforms, headless architecture, ecommerce sites, web applications, customer portals, and custom environments.
            </p>
          </div>
        </div>

        <div className="wts-technology-layout">
          <TechnologyEcosystemVisual />
          <div className="wts-technology-groups">
            {technologyGroups.map((item) => (
              <article className="wts-technology-group" key={item.title}>
                <div className="wts-technology-group__icon"><Icon name={item.icon} size={21} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wts-integration-discovery">
          <div className="wts-integration-discovery__intro">
            <div className="wts-integration-discovery__icon"><Icon name="compass" size={23} /></div>
            <div>
              <h3>Integration Discovery Starts With Your Content Operations</h3>
              <p>Stepes evaluates the practical questions that determine a scalable workflow before recommending a connection model.</p>
            </div>
          </div>
          <div className="wts-integration-questions">
            {integrationQuestions.map((question) => <span key={question}>{question}</span>)}
          </div>
          <div className="wts-integration-links">
            <ArrowLink href="https://www.stepes.com/api-documentation/">Translation API Documentation</ArrowLink>
            <ArrowLink href="https://www.stepes.com/resources/file-format-support/">Explore File Format Support</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityReviewVisual() {
  return (
    <div className="wts-qa-visual" aria-label="Illustration of a localized website being reviewed across linguistic, visual, responsive, and functional quality layers">
      <div className="wts-qa-visual__bar">
        <span className="wts-browser__dots" aria-hidden="true"><i /><i /><i /></span>
        <span>Localized Website Review</span>
        <strong>6 quality layers</strong>
      </div>
      <div className="wts-qa-visual__body">
        <div className="wts-qa-page-preview">
          <span className="wts-qa-page-preview__eyebrow">GLOBAL PRODUCT EXPERIENCE</span>
          <strong>Clear content. Natural language. Reliable journeys.</strong>
          <div className="wts-qa-page-preview__lines" aria-hidden="true"><i /><i /><i /></div>
          <span className="wts-qa-page-preview__button">Request Information</span>
          <div className="wts-qa-annotation wts-qa-annotation--one"><Icon name="check" size={14} />Terminology verified</div>
          <div className="wts-qa-annotation wts-qa-annotation--two"><Icon name="monitor" size={14} />Responsive layout checked</div>
          <div className="wts-qa-annotation wts-qa-annotation--three"><Icon name="plug" size={14} />Form flow validated</div>
        </div>
        <div className="wts-qa-summary">
          <span>REVIEW SUMMARY</span>
          <div><strong>Language</strong><small>Accuracy and voice</small><Icon name="check" size={16} /></div>
          <div><strong>Layout</strong><small>Desktop to mobile</small><Icon name="check" size={16} /></div>
          <div><strong>Function</strong><small>Links and journeys</small><Icon name="check" size={16} /></div>
          <div><strong>Market</strong><small>Local validation</small><Icon name="check" size={16} /></div>
        </div>
      </div>
    </div>
  );
}

function QualityAssuranceSection() {
  return (
    <section className="wts-section wts-qa" id="website-localization-testing" aria-labelledby="wts-qa-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <p className="wts-eyebrow">QUALITY IN THE COMPLETE DIGITAL EXPERIENCE</p>
          <h2 id="wts-qa-title">Website Translation Quality Assurance and Localization Testing</h2>
          <p>
            A translation can be linguistically accurate and still fail on the website. Stepes evaluates language together with context, layout, responsive behavior, functionality, and local-market expectations.
          </p>
        </div>

        <div className="wts-qa-layout">
          <QualityReviewVisual />
          <div className="wts-qa-capabilities">
            {qaCapabilities.map((item) => (
              <article className="wts-qa-capability" key={item.title}>
                <div className="wts-qa-capability__icon"><Icon name={item.icon} size={21} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <span>{item.checks}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wts-qa-footer">
          <p>
            Testing scope is matched to the website’s complexity, languages, customer journeys, regulatory risk, and launch requirements. High-value pages can receive deeper validation while routine content follows a more streamlined path.
          </p>
          <ArrowLink href="https://www.stepes.com/translation-quality-assurance/">Explore Translation Quality Assurance</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="wts-section wts-industries" id="website-translation-industries" aria-labelledby="wts-industries-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <h2 id="wts-industries-title">Website Translation Expertise Across Industries</h2>
          <p>
            Different industries require different combinations of subject-matter expertise, terminology control, creative adaptation, technical integration, and risk management. Stepes configures the workflow around the content your audiences need to understand and trust.
          </p>
        </div>

        <div className="wts-industry-columns">
          {industryGroups.map((group) => (
            <section className="wts-industry-column" aria-label={group.label} key={group.label}>
              <p className="wts-eyebrow">{group.label}</p>
              <h3>{group.title}</h3>
              <p className="wts-industry-column__intro">{group.text}</p>
              <div className="wts-industry-list">
                {group.industries.map((industry) => (
                  <a className="wts-industry-link" href={industry.href} key={industry.name}>
                    <span>
                      <strong>{industry.name}</strong>
                      <small>{industry.description}</small>
                    </span>
                    <Icon name="arrow" size={17} />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

function LanguageAssetsVisual() {
  return (
    <div className="wts-language-visual" aria-label="Illustration of translation memory, terminology, style guidance, and reviewer decisions creating consistent multilingual content">
      <div className="wts-language-visual__top">
        <div><Icon name="database" size={20} /><span>Translation Memory</span></div>
        <div><Icon name="content" size={20} /><span>Terminology</span></div>
      </div>
      <div className="wts-language-visual__connector" aria-hidden="true"><i /><i /></div>
      <div className="wts-language-visual__core">
        <div className="wts-language-visual__core-icon"><Icon name="sparkles" size={24} /></div>
        <span>SHARED LANGUAGE FOUNDATION</span>
        <strong>Approved Multilingual Content</strong>
        <p>Consistent language that becomes more valuable with every website release</p>
      </div>
      <div className="wts-language-visual__connector wts-language-visual__connector--bottom" aria-hidden="true"><i /><i /></div>
      <div className="wts-language-visual__top">
        <div><Icon name="megaphone" size={20} /><span>Style Guides</span></div>
        <div><Icon name="users" size={20} /><span>Reviewer Decisions</span></div>
      </div>
      <div className="wts-language-visual__channels">
        <span>Website</span><span>Software</span><span>Documentation</span><span>Support</span>
      </div>
    </div>
  );
}

function GovernanceSection() {
  return (
    <section className="wts-section wts-governance" id="website-language-governance" aria-labelledby="wts-governance-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">CONSISTENT LANGUAGE AT ENTERPRISE SCALE</p>
            <h2 id="wts-governance-title">Translation Memory, Terminology, and Brand Governance</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Multilingual websites reuse product names, navigation, legal language, calls to action, specifications, and brand messages across thousands of pages. Centralized language assets help every team build on approved work instead of creating new variations.
            </p>
          </div>
        </div>

        <div className="wts-governance-layout">
          <LanguageAssetsVisual />
          <div className="wts-governance-capabilities">
            {governanceCapabilities.map((item) => (
              <article className="wts-governance-capability" key={item.title}>
                <span>{item.label}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wts-governance-footer">
          <div>
            <h3>One Approved Language System Across Customer Touchpoints</h3>
            <p>Connect website terminology with software, apps, documentation, campaigns, sales materials, training, support, and legal content.</p>
          </div>
          <div className="wts-governance-links">
            <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
            <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}


const securityCapabilities = [
  {
    icon: "shield",
    label: "PROTECTION",
    title: "Secure Content Handling",
    text: "Configure access, transfer, collaboration, confidentiality, and retention around the requirements of your website program.",
  },
  {
    icon: "users",
    label: "ACCESS",
    title: "Role-Based Participation",
    text: "Give project owners, linguists, reviewers, developers, legal teams, and regional approvers the visibility appropriate to their role.",
  },
  {
    icon: "check",
    label: "QUALITY",
    title: "Structured Quality Management",
    text: "Connect professional review, language assets, automated QA, documented procedures, and accountable project delivery.",
  },
  {
    icon: "trend",
    label: "VISIBILITY",
    title: "Program Reporting",
    text: "Track language status, content volume, turnaround, review progress, approvals, quality findings, and delivery milestones.",
  },
  {
    icon: "layers",
    label: "GOVERNANCE",
    title: "Enterprise-Wide Control",
    text: "Coordinate translation memory, terminology, workflow rules, linguistic resources, approvals, and reporting across brands and business units.",
  },
];

const stepesAdvantages = [
  {
    icon: "layers",
    title: "One Partner Across the Digital Experience",
    text: "Coordinate website content with software, documentation, multimedia, training, and other multilingual customer touchpoints.",
  },
  {
    icon: "plug",
    title: "Technology That Fits Your Environment",
    text: "Choose file-based, CMS-connected, API, proxy, structured-content, or fully managed workflows around your existing stack.",
  },
  {
    icon: "sparkles",
    title: "Quality Matched to Each Content Type",
    text: "Combine AI, post-editing, professional translation, specialist review, transcreation, and in-market validation according to content risk.",
  },
];

const supportingAdvantages = [
  { title: "Professional Linguists", text: "Native-language specialists with relevant subject-matter and content experience." },
  { title: "Multilingual SEO", text: "Localized keywords, metadata, headings, links, and search intent for target markets." },
  { title: "Continuous Localization", text: "Repeatable workflows that keep multilingual websites aligned as source content changes." },
  { title: "Enterprise Language Assets", text: "Centralized translation memory, terminology, and style guidance across teams and channels." },
  { title: "Website Quality Assurance", text: "Linguistic, in-context, visual, responsive, functional, and market validation." },
  { title: "100+ Languages", text: "Consistent program management for major markets and regional language variants." },
];

const costFactors = [
  { title: "Content Volume", text: "The amount of new, repeated, and previously translated website content." },
  { title: "Target Languages", text: "The number of languages, regional variants, and market-specific requirements." },
  { title: "Content Complexity", text: "Technical, legal, medical, regulated, creative, or highly specialized material." },
  { title: "Quality Workflow", text: "AI translation, post-editing, professional translation, specialist review, or transcreation." },
  { title: "Multilingual SEO", text: "Keyword research, search-intent adaptation, metadata, and market-specific content planning." },
  { title: "Technology and Integration", text: "CMS connections, APIs, proxy configuration, automation, and engineering support." },
  { title: "Testing Scope", text: "Linguistic, visual, responsive, functional, right-to-left, and market validation." },
  { title: "Ongoing Updates", text: "The frequency, urgency, and operating model for continuous multilingual content." },
];

const timelineStages = [
  { title: "Assess", text: "Confirm languages, content scope, technology, risk, SEO, and launch priorities." },
  { title: "Configure", text: "Prepare integrations, language assets, roles, workflows, and approval paths." },
  { title: "Translate", text: "Run languages in parallel through the approved AI and human quality routes." },
  { title: "Validate", text: "Complete linguistic, in-context, visual, functional, and market review." },
  { title: "Launch", text: "Deliver or publish approved content and move into the ongoing update workflow." },
];

const faqItems = [
  {
    question: "What are website translation services?",
    answer: "Website translation services convert website content into one or more target languages while preserving meaning, purpose, tone, and usability. A complete program may also include metadata, forms, structured CMS content, documents, multimedia, quality assurance, publishing support, and ongoing updates.",
  },
  {
    question: "What is the difference between website translation and website localization?",
    answer: "Website translation focuses on converting content into another language. Website localization adapts the broader digital experience for a market, which can include culture, search behavior, imagery, layouts, formats, functionality, and regional requirements. Stepes supports both.",
  },
  {
    question: "How much does it cost to translate a website?",
    answer: "Cost depends on translatable content volume, languages, repetition, subject matter, quality level, multilingual SEO, integration, testing, and update frequency. A website assessment produces a more reliable estimate than page count alone.",
  },
  {
    question: "How long does website translation take?",
    answer: "Timing depends on website size, language count, content readiness, integration, review, testing, and launch sequencing. Languages can often proceed in parallel, and high-priority pages can be launched first through a phased approach.",
  },
  {
    question: "Can Stepes translate our entire website or only selected pages?",
    answer: "Both. Stepes can translate complete websites or prioritize the pages, products, resources, and customer journeys with the greatest market value, traffic, risk, or launch importance.",
  },
  {
    question: "Can Stepes work with our CMS or headless architecture?",
    answer: "Yes. Depending on the system, content can move through files, structured exports, connected workflows, APIs, proxy technology, or custom integration. Stepes assesses how your content is stored, reviewed, published, and updated before recommending an approach.",
  },
  {
    question: "Can you translate dynamic or logged-in website content?",
    answer: "Yes, when the content can be securely exported, submitted through an API, accessed through an approved workflow, or reviewed in a suitable test environment. The technical and security requirements are defined during discovery.",
  },
  {
    question: "Is AI translation suitable for a company website?",
    answer: "AI translation can be effective for selected high-volume or lower-risk content. High-visibility brand, conversion, legal, technical, medical, or regulated pages may require professional or specialist human translation. Stepes assigns the workflow by content type and risk.",
  },
  {
    question: "Does Stepes use professional human translators?",
    answer: "Yes. Stepes provides professional translation, specialist translation, editing, AI post-editing, transcreation, linguistic review, and in-market validation. Human expertise can be combined with AI automation according to the quality requirement.",
  },
  {
    question: "Does Stepes provide multilingual SEO?",
    answer: "Yes. Services can include target-language keyword research, search-intent localization, metadata, headings, page copy, internal links, image alt text, URL slugs, and coordination with your SEO and web teams.",
  },
  {
    question: "Can our local teams review translations?",
    answer: "Yes. Stepes can organize reviewer access, deadlines, feedback, terminology decisions, version control, and final approval so local knowledge becomes a reusable part of the language program.",
  },
  {
    question: "How are future website updates translated?",
    answer: "Updates can enter translation through a CMS workflow, API, proxy solution, structured export, scheduled process, or direct content submission. Translation memory helps reuse approved content while new and changed text follows the appropriate review path.",
  },
  {
    question: "Does Stepes provide website localization testing?",
    answer: "Yes. Testing can include linguistic, in-context, visual, responsive, functional, right-to-left, navigation, form, link, checkout, and market validation according to the website’s complexity and risk.",
  },
  {
    question: "Which languages does Stepes support?",
    answer: "Stepes supports more than 100 languages, including major European, Asian, Middle Eastern, African, and Latin American languages as well as market-specific variants such as Canadian French, Brazilian Portuguese, and Simplified and Traditional Chinese.",
  },
];


const featuredWebsiteResource = {
  icon: "compass",
  label: "FEATURED GUIDE",
  title: "How to Translate a Website",
  text: "Plan the complete website translation journey—from content assessment and workflow selection to multilingual SEO, quality assurance, launch, and continuous updates.",
  href: "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/",
};

const featuredGuideOutline = [
  { title: "Assess", text: "Content, markets, and priorities" },
  { title: "Connect", text: "CMS, API, files, or proxy" },
  { title: "Translate", text: "AI + human quality routes" },
  { title: "Launch", text: "SEO, QA, and continuous updates" },
];

const websiteResources = [
  {
    icon: "layers",
    label: "FOUNDATIONAL GUIDE",
    title: "Website Translation vs. Website Localization",
    text: "Understand when language conversion is sufficient and when the complete digital experience requires market adaptation.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-vs-localization/",
  },
  {
    icon: "search",
    label: "INTERNATIONAL SEARCH",
    title: "Multilingual SEO Guide",
    text: "Connect translated content with local keywords, search intent, metadata, URLs, internal links, and international site architecture.",
    href: "https://www.stepes.com/resources/global-content-strategy/multilingual-seo-guide/",
  },
  {
    icon: "sparkles",
    label: "AI + HUMAN QUALITY",
    title: "AI Website Translation With Human Review",
    text: "Learn how to route different website content types through AI, post-editing, professional translation, and specialist review.",
    href: "https://www.stepes.com/resources/ai-translation-insights/ai-website-translation-with-human-review/",
  },
  {
    icon: "shield",
    label: "QUALITY ASSURANCE",
    title: "Website Localization Testing Checklist",
    text: "Review the linguistic, visual, responsive, functional, right-to-left, and market checks needed before launch.",
    href: "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/",
  },
  {
    icon: "plug",
    label: "TECHNOLOGY PLANNING",
    title: "CMS, API, and Proxy Translation Workflows",
    text: "Compare the primary technical models for moving website content through translation, review, publishing, and updates.",
    href: "https://www.stepes.com/resources/localization-guides/website-translation-workflows/",
  },
  {
    icon: "trend",
    label: "BUDGET PLANNING",
    title: "Website Translation Cost Guide",
    text: "Understand how content, languages, quality, integrations, SEO, testing, and update frequency shape the investment.",
    href: "https://www.stepes.com/resources/translation-cost-guide/",
  },
  {
    icon: "refresh",
    label: "ONGOING OPERATIONS",
    title: "Continuous Website Localization",
    text: "Build a repeatable process for translating new and revised content without allowing regional websites to fall behind.",
    href: "https://www.stepes.com/resources/localization-guides/continuous-website-localization/",
  },
];

const finalCtaInputs = [
  "Your website URL",
  "Target languages and markets",
  "Priority pages or customer journeys",
  "Desired launch schedule",
  "CMS or website technology",
  "Quality, SEO, and update requirements",
];

function EnterpriseControlVisual() {
  return (
    <div className="wts-control-visual" aria-label="Illustration of secure website content moving through controlled roles, quality checks, approvals, and multilingual release">
      <div className="wts-control-visual__header">
        <div>
          <span>ENTERPRISE CONTROL FRAMEWORK</span>
          <strong>Protected From Intake to Release</strong>
        </div>
        <span className="wts-control-visual__status"><Icon name="shield" size={15} /> Controlled workflow</span>
      </div>

      <div className="wts-control-flow">
        <div className="wts-control-node">
          <div><Icon name="upload" size={20} /></div>
          <span>CONTENT INTAKE</span>
          <strong>Approved Sources</strong>
          <small>Files · CMS · API · Proxy</small>
        </div>
        <div className="wts-control-flow__arrow" aria-hidden="true"><Icon name="arrow" size={19} /></div>
        <div className="wts-control-node wts-control-node--active">
          <div><Icon name="shield" size={20} /></div>
          <span>CONTROLLED WORKFLOW</span>
          <strong>Roles and Quality</strong>
          <small>Access · QA · Review · Approval</small>
        </div>
        <div className="wts-control-flow__arrow" aria-hidden="true"><Icon name="arrow" size={19} /></div>
        <div className="wts-control-node">
          <div><Icon name="globe" size={20} /></div>
          <span>MULTILINGUAL RELEASE</span>
          <strong>Approved Delivery</strong>
          <small>Status · Reporting · Auditability</small>
        </div>
      </div>

      <div className="wts-control-metrics">
        <div><span>ACCESS</span><strong>Role-based</strong></div>
        <div><span>LANGUAGE ASSETS</span><strong>Centralized</strong></div>
        <div><span>APPROVALS</span><strong>Traceable</strong></div>
        <div><span>REPORTING</span><strong>Program-wide</strong></div>
      </div>
    </div>
  );
}

function SecurityControlSection() {
  return (
    <section className="wts-section wts-security" id="enterprise-security-control" aria-labelledby="wts-security-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">SECURITY, QUALITY, AND OPERATIONAL CONTROL</p>
            <h2 id="wts-security-title">Enterprise Control for Multilingual Website Programs</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Website programs may involve confidential launches, technical content, legal information, regulated material, and multiple business teams. Stepes brings access, quality, language assets, approvals, and reporting into one governed operating model.
            </p>
          </div>
        </div>

        <div className="wts-security-layout">
          <EnterpriseControlVisual />
          <div className="wts-security-capabilities">
            {securityCapabilities.map((item) => (
              <article className="wts-security-capability" key={item.title}>
                <div className="wts-security-capability__icon"><Icon name={item.icon} size={20} /></div>
                <div>
                  <span>{item.label}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="wts-certification-band">
          <div className="wts-certification-band__intro">
            <span>QUALITY FRAMEWORK</span>
            <strong>Internationally Recognized Management Standards</strong>
          </div>
          <div className="wts-certification-band__items">
            <div><strong>ISO 17100</strong><span>Professional Translation Services</span></div>
            <div><strong>ISO 9001</strong><span>Quality Management Systems</span></div>
            <div><strong>ISO 13485</strong><span>Medical Device Quality Management</span></div>
          </div>
          <div className="wts-certification-band__links">
            <ArrowLink href="https://www.stepes.com/security-and-compliance/">Security and Compliance</ArrowLink>
            <ArrowLink href="https://www.stepes.com/iso-certifications/">ISO Certifications</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyStepesSection() {
  return (
    <section className="wts-section wts-why-stepes wts-dark-section" id="why-stepes-website-translation" aria-labelledby="wts-why-stepes-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <p className="wts-eyebrow">A SCALABLE PARTNER FOR GLOBAL DIGITAL CONTENT</p>
          <h2 id="wts-why-stepes-title">Why Companies Choose Stepes for Website Translation</h2>
          <p>
            Stepes combines professional language expertise, enterprise translation technology, flexible delivery models, and long-term multilingual content operations in one coordinated solution.
          </p>
        </div>

        <div className="wts-advantage-primary">
          {stepesAdvantages.map((item) => (
            <article className="wts-advantage-primary__item" key={item.title}>
              <div><Icon name={item.icon} size={24} /></div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className="wts-advantage-supporting">
          {supportingAdvantages.map((item) => (
            <article key={item.title}>
              <Icon name="check" size={17} />
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </article>
          ))}
        </div>

        <div className="wts-advantage-footer">
          <p>From a focused website launch to continuous localization across brands and markets, Stepes can evolve the workflow as your global program grows.</p>
          <ArrowLink href="https://www.stepes.com/why-stepes/">Discover Why Stepes</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function CostTimelineSection() {
  return (
    <section className="wts-section wts-cost-timeline" id="website-translation-cost-timeline" aria-labelledby="wts-cost-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">PLANNING YOUR PROGRAM</p>
            <h2 id="wts-cost-title">Website Translation Cost and Timeline</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Website translation is shaped by content, technology, quality, testing, and operating requirements—not page count alone. Stepes reviews the complete program before recommending the most efficient scope and delivery model.
            </p>
          </div>
        </div>

        <div className="wts-cost-layout">
          <div className="wts-cost-factors">
            <div className="wts-cost-subheading">
              <span>WHAT SHAPES THE ESTIMATE</span>
              <h3>Eight Factors That Influence Cost</h3>
            </div>
            <div className="wts-cost-factor-grid">
              {costFactors.map((item) => (
                <article key={item.title}>
                  <Icon name="check" size={16} />
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>

          <div className="wts-timeline-panel">
            <div className="wts-timeline-panel__header">
              <span>IMPLEMENTATION PATH</span>
              <h3>Build the Timeline Around Readiness and Risk</h3>
              <p>Languages can often proceed in parallel, while phased launches prioritize the most valuable pages and markets first.</p>
            </div>
            <div className="wts-timeline-stages">
              {timelineStages.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
            <div className="wts-timeline-note">
              <Icon name="refresh" size={20} />
              <p><strong>After launch:</strong> move new and revised content into a repeatable continuous translation workflow.</p>
            </div>
          </div>
        </div>

        <div className="wts-assessment-band">
          <div>
            <p className="wts-eyebrow">START WITH A WEBSITE ASSESSMENT</p>
            <h3>Share Your Website, Languages, Technology, and Launch Goals</h3>
            <p>Stepes will review the scope and recommend an appropriate workflow, quality model, timeline, and estimate.</p>
          </div>
          <div className="wts-assessment-band__actions">
            <a className="wts-button wts-button--primary" href="https://www.stepes.com/contact-us/">Request a Website Translation Assessment <Icon name="arrow" size={18} /></a>
            <ArrowLink href="https://www.stepes.com/resources/translation-cost-guide/">Translation Cost Guide</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="wts-section wts-faq" id="website-translation-faq" aria-labelledby="wts-faq-title">
      <div className="wts-shell">
        <div className="wts-centered-heading wts-centered-heading--wide">
          <h2 id="wts-faq-title">Website Translation Services FAQs</h2>
          <p>Explore practical answers about scope, technology, AI, quality, multilingual SEO, cost, timing, updates, and testing.</p>
        </div>

        <div className="wts-faq-panel">
          {faqItems.map((item, index) => (
            <details className="wts-faq-item" key={item.question} open={index === 0}>
              <summary>
                <span>{item.question}</span>
                <i aria-hidden="true" />
              </summary>
              <div className="wts-faq-item__answer"><p>{item.answer}</p></div>
            </details>
          ))}
        </div>

        <div className="wts-faq-footer">
          <p>Have a question about your website, CMS, target markets, or quality requirements?</p>
          <ArrowLink href="https://www.stepes.com/contact-us/">Talk to a Website Translation Expert</ArrowLink>
        </div>
      </div>
    </section>
  );
}



function WebsiteResourcesSection() {
  return (
    <section className="wts-section wts-resources" id="website-translation-resources" aria-labelledby="wts-resources-title">
      <div className="wts-shell">
        <div className="wts-section-heading wts-section-heading--split">
          <div>
            <p className="wts-eyebrow">WEBSITE TRANSLATION RESOURCES</p>
            <h2 id="wts-resources-title">Build a Stronger Multilingual Website Strategy</h2>
          </div>
          <div className="wts-section-heading__copy">
            <p>
              Explore practical guidance for planning, connecting, translating, optimizing, testing, and continuously managing multilingual websites.
            </p>
          </div>
        </div>

        <div className="wts-resource-layout">
          <a className="wts-resource-feature" href={featuredWebsiteResource.href}>
            <div className="wts-resource-feature__icon"><Icon name={featuredWebsiteResource.icon} size={25} /></div>
            <span className="wts-resource-feature__label">{featuredWebsiteResource.label}</span>
            <h3>{featuredWebsiteResource.title}</h3>
            <p>{featuredWebsiteResource.text}</p>
            <div className="wts-resource-feature__outline" aria-label="Topics covered in the guide">
              {featuredGuideOutline.map((item, index) => (
                <div key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <span className="wts-resource-action">Read the Guide <Icon name="arrow" size={17} /></span>
          </a>

          <div className="wts-resource-index">
            {websiteResources.map((resource) => (
              <a className="wts-resource-row" href={resource.href} key={resource.title}>
                <div className="wts-resource-row__icon"><Icon name={resource.icon} size={20} /></div>
                <div className="wts-resource-row__copy">
                  <span>{resource.label}</span>
                  <h3>{resource.title}</h3>
                  <p>{resource.text}</p>
                </div>
                <Icon name="arrow" size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="wts-resource-footer">
          <p>Explore additional guidance on localization, translation quality, AI workflows, and global content strategy.</p>
          <ArrowLink href="https://www.stepes.com/resources/">Visit the Stepes Resource Center</ArrowLink>
        </div>
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="wts-section wts-final-cta" id="start-website-translation" aria-labelledby="wts-final-cta-title">
      <div className="wts-shell">
        <div className="wts-final-cta__panel">
          <div className="wts-final-cta__copy">
            <h2 id="wts-final-cta-title">Take Your Website Global With Stepes</h2>
            <p>
              Create multilingual digital experiences that are accurate, engaging, search-ready, and easier to manage. Stepes can help you choose the right combination of translation, localization, technology, SEO, quality assurance, and continuous updates.
            </p>
            <div className="wts-final-cta__actions">
              <a className="wts-button wts-button--primary" href="https://www.stepes.com/contact-us/">
                Talk to a Website Translation Expert
                <Icon name="arrow" size={18} />
              </a>
              <a className="wts-button wts-button--secondary" href="https://www.stepes.com/website-translation-services/get-a-quote/">
                Get a Website Translation Quote
              </a>
            </div>
            <span className="wts-final-cta__support">From a focused market launch to continuous enterprise localization in 100+ languages.</span>
          </div>

          <div className="wts-final-cta__inputs">
            <span className="wts-final-cta__label">WHAT TO SHARE WITH OUR TEAM</span>
            <div className="wts-final-cta__input-grid">
              {finalCtaInputs.map((item) => (
                <div key={item}>
                  <span><Icon name="check" size={16} /></span>
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <p>Stepes will review your requirements and recommend a workflow, quality model, timeline, and estimate aligned with your goals.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


const styles = `
  .wts-page,
  .wts-page * {
    box-sizing: border-box;
  }

  .wts-page {
    width: 100%;
    min-width: 0;
    overflow-x: clip;
    background: ${palette.white};
    color: ${palette.ink};
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .wts-page a {
    color: inherit;
  }

  .wts-page p,
  .wts-page h1,
  .wts-page h2,
  .wts-page h3 {
    margin: 0;
  }

  .wts-shell {
    width: min(100%, 1392px);
    margin: 0 auto;
    padding-inline: 56px;
  }

  .wts-eyebrow {
    margin: 0 0 18px !important;
    color: ${palette.accentDark} !important;
    font-size: 11px !important;
    font-weight: 600 !important;
    line-height: 1.25 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
  }

  .wts-hero {
    position: relative;
    padding: 104px 0 0;
    background:
      radial-gradient(circle at 50% -15%, rgba(193, 29, 99, 0.09), transparent 33%),
      linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 72%, #FAF8FA 100%);
  }

  .wts-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.58;
    background-image:
      linear-gradient(rgba(30, 24, 31, 0.028) 1px, transparent 1px),
      linear-gradient(90deg, rgba(30, 24, 31, 0.028) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: linear-gradient(to bottom, black 0%, transparent 64%);
  }

  .wts-hero__copy {
    position: relative;
    z-index: 1;
    max-width: 940px;
    margin: 0 auto;
    text-align: center;
  }

  .wts-hero h1 {
    max-width: 880px;
    margin: 0 auto;
    font-size: 48px;
    font-weight: 600;
    line-height: 1.08;
    letter-spacing: -0.035em;
  }

  .wts-hero__lead {
    max-width: 830px;
    margin: 26px auto 0 !important;
    color: ${palette.body};
    font-size: 18px;
    line-height: 1.72;
  }

  .wts-hero__actions {
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-top: 32px;
  }

  .wts-button {
    display: inline-flex;
    min-height: 52px;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 13px 24px;
    border: 1px solid transparent;
    border-radius: 999px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.25;
    text-decoration: none;
    transition: transform 180ms ease, background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .wts-button--primary,
  .wts-button--primary:link,
  .wts-button--primary:visited,
  .wts-button--primary:hover,
  .wts-button--primary:active,
  .wts-button--primary:focus-visible {
    color: #FFFFFF !important;
  }

  .wts-button--primary {
    background: ${palette.accent};
    box-shadow: 0 12px 28px rgba(122, 21, 66, 0.16);
  }

  .wts-button--primary:hover {
    background: ${palette.accentDark};
    transform: translateY(-1px);
  }

  .wts-button--secondary {
    color: ${palette.ink} !important;
    background: rgba(255, 255, 255, 0.88);
    border-color: ${palette.lineStrong};
  }

  .wts-button--secondary:hover {
    border-color: #BBAFB8;
    background: ${palette.white};
    transform: translateY(-1px);
  }

  .wts-button:focus-visible,
  .wts-editorial-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.2);
    outline-offset: 4px;
  }

  .wts-hero__support {
    max-width: 720px;
    margin: 20px auto 0 !important;
    color: ${palette.muted};
    font-size: 14px;
    line-height: 1.6;
  }

  .wts-hero-visual {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 280px minmax(0, 1fr);
    gap: 24px;
    align-items: center;
    margin-top: 60px;
    padding: 32px;
    border: 1px solid ${palette.line};
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.93);
    box-shadow: 0 28px 70px rgba(50, 37, 48, 0.08);
  }

  .wts-visual-column {
    min-width: 0;
  }

  .wts-visual-label {
    display: block;
    margin-bottom: 12px;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.12em;
  }

  .wts-browser {
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 22px;
    background: ${palette.white};
    box-shadow: 0 16px 36px rgba(36, 27, 34, 0.06);
  }

  .wts-browser__bar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 12px;
    align-items: center;
    min-height: 42px;
    padding: 9px 12px;
    border-bottom: 1px solid ${palette.line};
    background: #FBFAFB;
  }

  .wts-browser__dots {
    display: flex;
    gap: 4px;
  }

  .wts-browser__dots i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #CFC8CF;
  }

  .wts-browser__path {
    overflow: hidden;
    color: ${palette.muted};
    font-size: 11px;
    line-height: 1.2;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .wts-browser__locale {
    display: inline-flex;
    min-width: 28px;
    height: 24px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${palette.line};
    border-radius: 999px;
    color: ${palette.accentDeep};
    background: ${palette.blush};
    font-size: 10px;
    font-weight: 600;
  }

  .wts-browser__body {
    min-height: 244px;
    padding: 30px;
    background:
      linear-gradient(120deg, rgba(253, 242, 247, 0.95), rgba(255, 255, 255, 0.5) 52%),
      ${palette.white};
  }

  .wts-browser__eyebrow {
    display: block;
    margin-bottom: 16px;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: 0.11em;
  }

  .wts-browser__body strong {
    display: block;
    max-width: 290px;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.14;
    letter-spacing: -0.025em;
  }

  .wts-browser__body p {
    max-width: 290px;
    margin-top: 14px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-browser__button {
    display: inline-flex;
    margin-top: 22px;
    padding: 9px 14px;
    border-radius: 999px;
    color: ${palette.white};
    background: ${palette.accent};
    font-size: 11px;
    font-weight: 600;
  }

  .wts-browser--compact {
    border-radius: 18px;
    box-shadow: none;
  }

  .wts-browser--compact .wts-browser__bar {
    min-height: 34px;
    padding: 6px 9px;
  }

  .wts-browser--compact .wts-browser__body {
    min-height: 132px;
    padding: 16px 18px;
  }

  .wts-browser--compact .wts-browser__eyebrow {
    display: none;
  }

  .wts-browser--compact .wts-browser__body strong {
    font-size: 16px;
    line-height: 1.2;
  }

  .wts-browser--compact .wts-browser__body p {
    margin-top: 8px !important;
    font-size: 11px;
    line-height: 1.45;
  }

  .wts-browser--compact .wts-browser__button {
    margin-top: 12px;
    padding: 6px 10px;
    font-size: 9px;
  }

  .wts-localized-stack {
    display: grid;
    gap: 10px;
  }

  .wts-orchestration {
    position: relative;
    min-width: 0;
    padding: 26px 22px;
    border: 1px solid ${palette.line};
    border-radius: 24px;
    background: ${palette.soft};
    text-align: center;
  }

  .wts-orchestration::before,
  .wts-orchestration::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 25px;
    height: 1px;
    background: ${palette.lineStrong};
  }

  .wts-orchestration::before { left: -25px; }
  .wts-orchestration::after { right: -25px; }

  .wts-orchestration__icon {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    color: ${palette.accent};
    background: ${palette.white};
    box-shadow: 0 8px 20px rgba(49, 34, 45, 0.07);
  }

  .wts-orchestration > strong {
    display: block;
    margin-top: 15px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-orchestration__rail {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    margin: 22px 9px 0;
    height: 2px;
    background: #D9D2D8;
  }

  .wts-orchestration__rail span {
    justify-self: center;
    width: 9px;
    height: 9px;
    border: 2px solid ${palette.accent};
    border-radius: 50%;
    background: ${palette.white};
  }

  .wts-orchestration__labels {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3px;
    margin-top: 10px;
  }

  .wts-orchestration__labels span {
    color: ${palette.muted};
    font-size: 10px;
    font-weight: 600;
  }

  .wts-orchestration__assets {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px;
    margin-top: 22px;
  }

  .wts-orchestration__assets span {
    padding: 6px 8px;
    border: 1px solid ${palette.line};
    border-radius: 999px;
    color: ${palette.body};
    background: ${palette.white};
    font-size: 10px;
    line-height: 1.2;
  }

  .wts-proof-band {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    margin-top: 44px;
    border-top: 1px solid ${palette.line};
    border-bottom: 1px solid ${palette.line};
    background: rgba(255, 255, 255, 0.72);
  }

  .wts-proof-item {
    min-width: 0;
    padding: 25px 20px 28px;
  }

  .wts-proof-item + .wts-proof-item {
    border-left: 1px solid ${palette.line};
  }

  .wts-proof-item strong {
    display: block;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-proof-item span {
    display: block;
    margin-top: 7px;
    color: ${palette.muted};
    font-size: 12px;
    line-height: 1.48;
  }

  .wts-section {
    padding: 96px 0;
  }

  .wts-section-heading--split {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1fr);
    gap: 96px;
    align-items: start;
  }

  .wts-section h2 {
    max-width: 640px;
    font-size: 36px;
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: -0.028em;
  }

  .wts-section-heading__copy {
    max-width: 710px;
  }

  .wts-section-heading__copy p,
  .wts-definition__definition p {
    color: ${palette.body};
    font-size: 16px;
    line-height: 1.75;
  }

  .wts-section-heading__copy p + p,
  .wts-definition__definition p + p {
    margin-top: 18px !important;
  }

  .wts-enterprise {
    background: ${palette.white};
  }

  .wts-enterprise-panel {
    display: grid;
    grid-template-columns: minmax(300px, 0.7fr) minmax(0, 1.3fr);
    gap: 0;
    margin-top: 56px;
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 30px;
    background: ${palette.white};
  }

  .wts-enterprise-panel__intro {
    padding: 42px;
    background: ${palette.soft};
  }

  .wts-icon-surface {
    display: inline-flex;
    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    color: ${palette.accent};
    background: ${palette.white};
    box-shadow: 0 9px 22px rgba(45, 33, 42, 0.07);
  }

  .wts-enterprise-panel__intro h3 {
    max-width: 390px;
    margin-top: 24px;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.24;
    letter-spacing: -0.018em;
  }

  .wts-enterprise-panel__intro p {
    max-width: 400px;
    margin-top: 18px !important;
    color: ${palette.body};
    font-size: 16px;
    line-height: 1.72;
  }

  .wts-editorial-link {
    display: inline-flex;
    min-height: 44px;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
    color: ${palette.accentDark} !important;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
    text-decoration: none;
  }

  .wts-editorial-link svg {
    transition: transform 180ms ease;
  }

  .wts-editorial-link:hover svg {
    transform: translateX(3px);
  }

  .wts-challenge-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    padding: 10px 42px;
  }

  .wts-challenge-row {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 32px 24px;
  }

  .wts-challenge-row:nth-child(odd) {
    padding-left: 0;
    border-right: 1px solid ${palette.line};
  }

  .wts-challenge-row:nth-child(even) {
    padding-right: 0;
  }

  .wts-challenge-row:nth-child(n + 3) {
    border-top: 1px solid ${palette.line};
  }

  .wts-challenge-row__icon,
  .wts-scope-item__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${palette.line};
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.white};
  }

  .wts-challenge-row h3,
  .wts-scope-item h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-challenge-row p,
  .wts-scope-item p {
    margin-top: 9px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-definition {
    border-top: 1px solid ${palette.line};
    background: #FBFAFB;
  }

  .wts-definition__top {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
    gap: 96px;
    align-items: start;
  }

  .wts-definition__lead {
    color: ${palette.ink} !important;
    font-size: 20px !important;
    line-height: 1.58 !important;
  }

  .wts-scope-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 56px;
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-scope-item {
    min-width: 0;
    padding: 34px 30px 36px;
  }

  .wts-scope-item:not(:nth-child(3n + 1)) {
    border-left: 1px solid ${palette.line};
  }

  .wts-scope-item:nth-child(n + 4) {
    border-top: 1px solid ${palette.line};
  }

  .wts-scope-item__head {
    display: flex;
    gap: 14px;
    align-items: center;
  }

  .wts-scope-item__icon {
    flex: 0 0 auto;
    background: ${palette.white};
  }

  .wts-scope-item__head + p {
    margin-top: 16px !important;
  }

  .wts-definition__footer {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    margin-top: 34px;
  }

  .wts-definition__footer-copy {
    display: grid;
    grid-template-columns: 30px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    max-width: 760px;
    color: ${palette.body};
  }

  .wts-definition__footer-copy svg {
    margin-top: 3px;
    color: ${palette.accent};
  }

  .wts-definition__footer-copy p {
    font-size: 15px;
    line-height: 1.65;
  }

  .wts-definition__footer-copy strong {
    color: ${palette.ink};
    font-weight: 600;
  }

  .wts-definition__footer .wts-editorial-link {
    flex: 0 0 auto;
    margin-top: 0;
  }


  .wts-centered-heading {
    max-width: 830px;
    margin: 0 auto;
    text-align: center;
  }

  .wts-centered-heading--wide {
    max-width: 900px;
  }

  .wts-centered-heading h2 {
    max-width: none;
  }

  .wts-centered-heading > p:last-child {
    max-width: 790px;
    margin: 22px auto 0 !important;
    color: ${palette.body};
    font-size: 17px;
    line-height: 1.75;
  }

  .wts-comparison {
    background: ${palette.white};
  }

  .wts-comparison-matrix {
    margin-top: 54px;
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
  }

  .wts-comparison-matrix__header,
  .wts-comparison-matrix__row {
    display: grid;
    grid-template-columns: 190px repeat(2, minmax(0, 1fr));
  }

  .wts-comparison-matrix__header {
    background: ${palette.soft};
  }

  .wts-comparison-matrix__header > div {
    min-width: 0;
    padding: 28px 30px;
    border-left: 1px solid ${palette.line};
  }

  .wts-comparison-matrix__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 1px solid ${palette.line};
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.white};
  }

  .wts-comparison-matrix__header strong {
    display: block;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
  }

  .wts-comparison-matrix__header span {
    display: block;
    margin-top: 6px;
    color: ${palette.muted};
    font-size: 13px;
    line-height: 1.45;
  }

  .wts-comparison-matrix__row {
    border-top: 1px solid ${palette.line};
  }

  .wts-comparison-matrix__row > strong,
  .wts-comparison-matrix__row > p {
    min-width: 0;
    padding: 25px 30px;
  }

  .wts-comparison-matrix__row > strong {
    display: flex;
    align-items: flex-start;
    color: ${palette.ink};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.5;
  }

  .wts-comparison-matrix__row > p {
    border-left: 1px solid ${palette.line};
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.65;
  }

  .wts-comparison-callout {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    max-width: 900px;
    margin: 28px auto 0;
    padding: 24px 28px;
    border-radius: 20px;
    background: ${palette.blush};
  }

  .wts-comparison-callout__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: ${palette.accent};
    background: ${palette.white};
  }

  .wts-comparison-callout p {
    color: ${palette.body};
    font-size: 16px;
    line-height: 1.7;
  }

  .wts-comparison-callout strong {
    color: ${palette.ink};
    font-weight: 600;
  }

  .wts-benefits {
    position: relative;
    overflow: hidden;
    background: #211C22;
    color: ${palette.white};
  }

  .wts-benefits::before {
    content: "";
    position: absolute;
    width: 620px;
    height: 620px;
    top: -390px;
    right: -220px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    pointer-events: none;
  }

  .wts-benefits .wts-shell {
    position: relative;
    z-index: 1;
  }

  .wts-section-heading--dark h2 {
    color: ${palette.white};
  }

  .wts-eyebrow--dark {
    color: #F3B9D1 !important;
  }

  .wts-section-heading--dark .wts-section-heading__copy p {
    color: #CBC4CB;
  }

  .wts-benefit-grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    margin-top: 58px;
    border-top: 1px solid rgba(255, 255, 255, 0.13);
    border-bottom: 1px solid rgba(255, 255, 255, 0.13);
  }

  .wts-benefit-item {
    min-width: 0;
    padding: 34px 30px 38px;
  }

  .wts-benefit-item:not(:nth-child(4n + 1)) {
    border-left: 1px solid rgba(255, 255, 255, 0.11);
  }

  .wts-benefit-item:nth-child(n + 5) {
    border-top: 1px solid rgba(255, 255, 255, 0.11);
  }

  .wts-benefit-item__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: #F3B9D1;
    background: rgba(255, 255, 255, 0.07);
  }

  .wts-benefit-item h3 {
    margin-top: 20px;
    color: ${palette.white};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-benefit-item p {
    margin-top: 10px !important;
    color: #BFB8BF;
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-content-scope {
    background: ${palette.white};
  }

  .wts-content-category-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 56px;
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-content-category {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 18px;
    align-items: start;
    min-width: 0;
    padding: 34px 34px 36px;
  }

  .wts-content-category:nth-child(even) {
    border-left: 1px solid ${palette.line};
  }

  .wts-content-category:nth-child(n + 3) {
    border-top: 1px solid ${palette.line};
  }

  .wts-content-category__icon {
    display: inline-flex;
    width: 44px;
    height: 44px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${palette.line};
    border-radius: 15px;
    color: ${palette.accentDark};
    background: ${palette.blush};
  }

  .wts-content-category h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-content-category__body > p {
    margin-top: 10px !important;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.68;
  }

  .wts-content-category__examples {
    margin-top: 18px;
    padding-top: 16px;
    border-top: 1px solid ${palette.line};
  }

  .wts-content-category__examples span {
    display: block;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .wts-content-category__examples p {
    margin-top: 7px !important;
    color: ${palette.muted};
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-scope-principle {
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    max-width: 940px;
    margin: 30px auto 0;
  }

  .wts-scope-principle__marker {
    width: 13px;
    height: 3px;
    margin-top: 10px;
    border-radius: 999px;
    background: ${palette.accent};
  }

  .wts-scope-principle p {
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.68;
  }

  .wts-models {
    border-top: 1px solid ${palette.line};
    background: #F8F6F8;
  }











  .wts-decision-panel {
    display: grid;
    grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.45fr) auto;
    gap: 34px;
    align-items: center;
    margin-top: 30px;
    padding: 30px 34px;
    border: 1px solid ${palette.line};
    border-radius: 24px;
    background: ${palette.white};
  }

  .wts-decision-panel__intro {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 15px;
    align-items: start;
  }

  .wts-decision-panel__icon {
    display: inline-flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${palette.accent};
    background: ${palette.blush};
  }

  .wts-decision-panel h3 {
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-decision-panel__intro p {
    margin-top: 7px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-decision-factors {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-left: 1px solid ${palette.line};
  }

  .wts-decision-factor {
    min-width: 0;
    padding: 8px 20px;
  }

  .wts-decision-factor:nth-child(even) {
    border-left: 1px solid ${palette.line};
  }

  .wts-decision-factor:nth-child(n + 3) {
    margin-top: 12px;
    padding-top: 20px;
    border-top: 1px solid ${palette.line};
  }

  .wts-decision-factor strong {
    display: block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-decision-factor span {
    display: block;
    margin-top: 5px;
    color: ${palette.muted};
    font-size: 12px;
    line-height: 1.48;
  }

  .wts-decision-panel > .wts-editorial-link {
    margin-top: 0;
    white-space: nowrap;
  }


  .wts-ai-human {
    border-top: 1px solid ${palette.line};
    background: ${palette.white};
  }

  .wts-quality-spectrum {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    margin-top: 56px;
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
  }

  .wts-quality-route {
    min-width: 0;
    padding: 31px 25px 32px;
  }

  .wts-quality-route + .wts-quality-route {
    border-left: 1px solid ${palette.line};
  }

  .wts-quality-route__label {
    display: block;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-quality-route h3 {
    margin-top: 17px;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.34;
  }

  .wts-quality-route > p {
    margin-top: 12px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-quality-route__fit {
    margin-top: 22px;
    padding-top: 17px;
    border-top: 1px solid ${palette.line};
  }

  .wts-quality-route__fit span {
    display: block;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .wts-quality-route__fit p {
    margin-top: 7px !important;
    color: ${palette.muted};
    font-size: 12px;
    line-height: 1.52;
  }

  .wts-review-band {
    display: grid;
    grid-template-columns: 50px minmax(0, 1fr) auto;
    gap: 20px;
    align-items: center;
    margin-top: 30px;
    padding: 28px 32px;
    border-radius: 24px;
    background: ${palette.blush};
  }

  .wts-review-band__icon {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    color: ${palette.accent};
    background: ${palette.white};
  }

  .wts-review-band h3 {
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-review-band p {
    max-width: 760px;
    margin-top: 7px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.62;
  }

  .wts-review-band .wts-editorial-link {
    margin-top: 0;
    white-space: nowrap;
  }

  .wts-process {
    border-top: 1px solid ${palette.line};
    background: #F8F6F8;
  }


  .wts-process-step {
    display: grid;
    grid-template-columns: 58px minmax(0, 1fr);
    gap: 20px;
    align-items: start;
    min-width: 0;
    padding: 31px 34px 34px;
  }



  .wts-process-step__number {
    color: ${palette.accentDark};
    font-size: 24px;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.03em;
  }

  .wts-process-step__body > span {
    display: block;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-process-step h3 {
    margin-top: 9px;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-process-step p {
    margin-top: 9px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-process-footer {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    align-items: center;
    margin-top: 30px;
  }

  .wts-process-footer p {
    max-width: 800px;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.68;
  }

  .wts-process-footer .wts-editorial-link {
    flex: 0 0 auto;
    margin-top: 0;
  }

  .wts-continuous {
    background: ${palette.white};
  }

  .wts-continuous-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(480px, 1.12fr);
    gap: 70px;
    align-items: center;
  }

  .wts-continuous-copy h2 {
    max-width: 560px;
  }

  .wts-continuous-copy__lead {
    max-width: 650px;
    margin-top: 22px !important;
    color: ${palette.body};
    font-size: 17px;
    line-height: 1.72;
  }

  .wts-continuous-capabilities {
    margin-top: 34px;
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-continuous-capability {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 15px;
    align-items: start;
    padding: 20px 0;
  }

  .wts-continuous-capability + .wts-continuous-capability {
    border-top: 1px solid ${palette.line};
  }

  .wts-continuous-capability__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.blush};
  }

  .wts-continuous-capability h3 {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-continuous-capability p {
    margin-top: 6px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-continuous-visual {
    min-width: 0;
    padding: 30px;
    border: 1px solid ${palette.line};
    border-radius: 30px;
    background: #F8F6F8;
    box-shadow: 0 24px 60px rgba(47, 35, 44, 0.07);
  }

  .wts-continuous-visual__header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    padding-bottom: 22px;
    border-bottom: 1px solid ${palette.line};
  }

  .wts-continuous-visual__header span:first-child {
    display: block;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-continuous-visual__header strong {
    display: block;
    margin-top: 6px;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.3;
  }

  .wts-continuous-visual__status {
    flex: 0 0 auto;
    padding: 8px 11px;
    border-radius: 999px;
    color: #3E6B4D !important;
    background: #EAF4ED;
    font-size: 11px !important;
    font-weight: 600;
    letter-spacing: 0 !important;
  }

  .wts-update-card {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    margin-top: 24px;
    padding: 20px;
    border: 1px solid ${palette.line};
    border-radius: 20px;
    background: ${palette.white};
  }

  .wts-update-card__icon {
    display: inline-flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${palette.accent};
    background: ${palette.blush};
  }

  .wts-update-card span {
    display: block;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .wts-update-card strong {
    display: block;
    margin-top: 6px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-update-card p {
    margin-top: 6px !important;
    color: ${palette.muted};
    font-size: 12px;
    line-height: 1.5;
  }

  .wts-continuous-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 18px minmax(0, 1fr) 18px minmax(0, 1fr) 18px minmax(0, 1fr);
    gap: 4px;
    align-items: center;
    margin-top: 26px;
  }

  .wts-continuous-flow > div {
    min-width: 0;
    text-align: center;
  }

  .wts-continuous-flow > div > span {
    display: inline-flex;
    width: 28px;
    height: 28px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: ${palette.white};
    background: ${palette.accent};
    font-size: 10px;
    font-weight: 600;
  }

  .wts-continuous-flow strong {
    display: block;
    margin-top: 9px;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-continuous-flow small {
    display: block;
    margin-top: 4px;
    color: ${palette.muted};
    font-size: 10px;
    line-height: 1.4;
  }

  .wts-continuous-flow i {
    height: 1px;
    background: ${palette.lineStrong};
  }

  .wts-language-status {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 26px;
  }

  .wts-language-status > div {
    min-width: 0;
    padding: 14px;
    border: 1px solid ${palette.line};
    border-radius: 14px;
    background: ${palette.white};
  }

  .wts-language-status span,
  .wts-language-status strong {
    display: block;
  }

  .wts-language-status span {
    color: ${palette.ink};
    font-size: 12px;
    font-weight: 600;
  }

  .wts-language-status strong {
    margin-top: 5px;
    color: ${palette.muted};
    font-size: 10px;
    font-weight: 400;
    line-height: 1.4;
  }

  .wts-seo {
    position: relative;
    overflow: hidden;
    background: #211C22;
    color: ${palette.white};
  }

  .wts-seo::before {
    content: "";
    position: absolute;
    width: 720px;
    height: 720px;
    right: -360px;
    bottom: -470px;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 50%;
    pointer-events: none;
  }

  .wts-seo .wts-shell {
    position: relative;
    z-index: 1;
  }

  .wts-seo-top {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(470px, 1.12fr);
    gap: 76px;
    align-items: center;
  }

  .wts-seo h2 {
    color: ${palette.white};
  }

  .wts-seo-copy > p:last-child {
    max-width: 650px;
    margin-top: 22px !important;
    color: #CBC4CB;
    font-size: 17px;
    line-height: 1.72;
  }

  .wts-search-visual {
    min-width: 0;
    padding: 28px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 28px;
    background: rgba(255, 255, 255, 0.055);
  }

  .wts-search-query {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
    padding: 16px 18px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.07);
  }

  .wts-search-query__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: #F3B9D1;
    background: rgba(255, 255, 255, 0.08);
  }

  .wts-search-query span {
    display: block;
    color: #F3B9D1;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-search-query strong {
    display: block;
    margin-top: 5px;
    color: ${palette.white};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-search-connector {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 180px;
    height: 26px;
    margin: 0 auto;
  }

  .wts-search-connector span {
    border-left: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wts-search-connector span:last-child {
    border-right: 1px solid rgba(255, 255, 255, 0.15);
  }

  .wts-search-page {
    padding: 22px;
    border: 1px solid rgba(255, 255, 255, 0.13);
    border-radius: 20px;
    background: #FFFFFF;
  }

  .wts-search-page__url {
    overflow-wrap: anywhere;
    color: ${palette.accentDark};
    font-size: 11px;
    line-height: 1.45;
  }

  .wts-search-page > strong {
    display: block;
    margin-top: 10px;
    color: ${palette.ink};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-search-page > p {
    margin-top: 8px !important;
    color: ${palette.body};
    font-size: 12px;
    line-height: 1.52;
  }

  .wts-search-page__signals {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-top: 16px;
  }

  .wts-search-page__signals span {
    padding: 6px 8px;
    border-radius: 999px;
    color: ${palette.body};
    background: ${palette.soft};
    font-size: 9px;
    line-height: 1.25;
  }

  .wts-search-markets {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 8px;
    margin-top: 14px;
  }

  .wts-search-markets > div {
    display: flex;
    gap: 9px;
    align-items: center;
    min-width: 0;
    padding: 11px 12px;
    border: 1px solid rgba(255, 255, 255, 0.11);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.055);
  }

  .wts-search-markets span {
    display: inline-flex;
    width: 28px;
    height: 28px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: #F3B9D1;
    background: rgba(255, 255, 255, 0.08);
    font-size: 9px;
    font-weight: 600;
  }

  .wts-search-markets strong {
    min-width: 0;
    color: ${palette.white};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-seo-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 60px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wts-seo-item {
    display: grid;
    grid-template-columns: 18px minmax(0, 1fr);
    gap: 13px;
    align-items: start;
    min-width: 0;
    padding: 30px 26px 32px;
  }

  .wts-seo-item:not(:nth-child(3n + 1)) {
    border-left: 1px solid rgba(255, 255, 255, 0.11);
  }

  .wts-seo-item:nth-child(n + 4) {
    border-top: 1px solid rgba(255, 255, 255, 0.11);
  }

  .wts-seo-item__marker {
    width: 12px;
    height: 3px;
    margin-top: 10px;
    border-radius: 999px;
    background: #D96C9A;
  }

  .wts-seo-item h3 {
    color: ${palette.white};
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-seo-item p {
    margin-top: 9px !important;
    color: #BFB8BF;
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-seo-footer {
    display: flex;
    justify-content: space-between;
    gap: 42px;
    align-items: center;
    margin-top: 30px;
  }

  .wts-seo-footer p {
    max-width: 820px;
    color: #CBC4CB;
    font-size: 15px;
    line-height: 1.68;
  }

  .wts-seo .wts-editorial-link {
    flex: 0 0 auto;
    margin-top: 0;
    color: #F3B9D1 !important;
  }


  /* Sections 4-11 polish */
  .wts-benefits::before,
  .wts-seo::before {
    display: none;
  }

  .wts-benefits {
    box-shadow: inset 0 3px 0 rgba(193, 29, 99, 0.78);
  }

  .wts-model-matrix {
    margin-top: 54px;
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
  }

  .wts-model-matrix__header,
  .wts-model-row {
    display: grid;
    grid-template-columns: minmax(220px, 0.95fr) minmax(260px, 1.2fr) minmax(230px, 1fr) minmax(230px, 1fr);
  }

  .wts-model-matrix__header {
    background: ${palette.soft};
  }

  .wts-model-matrix__header > span {
    padding: 17px 24px;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .wts-model-matrix__header > span + span {
    border-left: 1px solid ${palette.line};
  }

  .wts-model-row {
    min-width: 0;
    border-top: 1px solid ${palette.line};
  }

  .wts-model-row__title,
  .wts-model-row__cell {
    min-width: 0;
    padding: 25px 24px;
  }

  .wts-model-row__title {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 14px;
    align-items: center;
  }

  .wts-model-row__cell {
    border-left: 1px solid ${palette.line};
  }

  .wts-model-row__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.blush};
  }

  .wts-model-row h3 {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.36;
  }

  .wts-model-row__cell > span {
    display: none;
  }

  .wts-model-row__cell p {
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-quality-guide {
    display: grid;
    grid-template-columns: auto minmax(80px, 1fr) auto;
    gap: 16px;
    align-items: center;
    margin-top: 52px;
    color: ${palette.muted};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.07em;
    text-transform: uppercase;
  }

  .wts-quality-guide i {
    position: relative;
    height: 1px;
    background: ${palette.lineStrong};
  }

  .wts-quality-guide i::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 7px;
    height: 7px;
    border-top: 1px solid ${palette.accentDark};
    border-right: 1px solid ${palette.accentDark};
    transform: translateY(-50%) rotate(45deg);
  }

  .wts-quality-spectrum {
    margin-top: 18px;
  }

  .wts-process-stages {
    margin-top: 56px;
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-process-stage {
    display: grid;
    grid-template-columns: 190px minmax(0, 1fr);
    min-width: 0;
  }

  .wts-process-stage + .wts-process-stage {
    border-top: 1px solid ${palette.line};
  }

  .wts-process-stage__heading {
    padding: 30px 28px 32px 0;
  }

  .wts-process-stage__heading > span {
    display: block;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-process-stage__heading h3 {
    margin-top: 10px;
    font-size: 19px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-process-stage__steps {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-left: 1px solid ${palette.line};
  }

  .wts-process-stage__steps .wts-process-step {
    padding: 30px 30px 32px;
  }

  .wts-process-stage__steps .wts-process-step + .wts-process-step {
    border-left: 1px solid ${palette.line};
  }

  .wts-process-stage__steps .wts-process-step:nth-child(n) {
    border-top: 0;
  }

  .wts-seo {
    box-shadow: inset 0 3px 0 rgba(193, 29, 99, 0.72);
  }




  .wts-technology {
    background: #FAF8FA;
  }

  .wts-technology-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(0, 1.08fr);
    gap: 50px;
    align-items: start;
    margin-top: 58px;
  }

  .wts-tech-visual {
    min-width: 0;
    padding: 28px;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
    box-shadow: 0 20px 48px rgba(45, 32, 42, 0.06);
  }

  .wts-tech-visual__header {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: flex-start;
    padding-bottom: 22px;
    border-bottom: 1px solid ${palette.line};
  }

  .wts-tech-visual__header > div > span,
  .wts-tech-workflow span,
  .wts-qa-summary > span {
    display: block;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.12em;
  }

  .wts-tech-visual__header > div > strong {
    display: block;
    max-width: 330px;
    margin-top: 8px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-tech-visual__status {
    flex: 0 0 auto;
    padding: 7px 10px;
    border: 1px solid ${palette.line};
    border-radius: 999px;
    color: ${palette.body};
    background: ${palette.soft};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;
  }

  .wts-tech-sources,
  .wts-tech-output {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 8px;
    margin-top: 24px;
  }

  .wts-tech-sources > div {
    display: grid;
    place-items: center;
    min-width: 0;
    min-height: 76px;
    padding: 12px 7px;
    border: 1px solid ${palette.line};
    border-radius: 16px;
    color: ${palette.accentDark};
    background: ${palette.soft};
    text-align: center;
  }

  .wts-tech-sources span {
    margin-top: 7px;
    color: ${palette.ink};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
  }

  .wts-tech-connection {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    width: calc(100% - 48px);
    height: 30px;
    margin: 0 auto;
  }

  .wts-tech-connection i {
    justify-self: center;
    width: 1px;
    height: 30px;
    background: ${palette.lineStrong};
  }

  .wts-tech-workflow {
    display: grid;
    grid-template-columns: 48px minmax(0, 1fr);
    gap: 15px;
    align-items: center;
    padding: 18px;
    border: 1px solid #E8C8D7;
    border-radius: 18px;
    background: ${palette.blush};
  }

  .wts-tech-workflow__icon {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${palette.accent};
    background: ${palette.white};
  }

  .wts-tech-workflow strong {
    display: block;
    margin-top: 6px;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.45;
  }

  .wts-tech-output > div {
    display: flex;
    min-width: 0;
    min-height: 50px;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border: 1px solid ${palette.line};
    border-radius: 14px;
    background: ${palette.white};
  }

  .wts-tech-output span {
    display: inline-flex;
    width: 26px;
    height: 26px;
    flex: 0 0 auto;
    align-items: center;
    justify-content: center;
    border-radius: 9px;
    color: ${palette.accentDark};
    background: ${palette.blush};
    font-size: 9px;
    font-weight: 600;
  }

  .wts-tech-output strong {
    overflow: hidden;
    font-size: 10px;
    font-weight: 600;
    line-height: 1.2;
    text-overflow: ellipsis;
  }

  .wts-technology-groups {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border-top: 1px solid ${palette.line};
    border-bottom: 1px solid ${palette.line};
  }

  .wts-technology-group {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 14px;
    align-items: start;
    padding: 26px 24px;
  }

  .wts-technology-group:nth-child(odd) {
    padding-left: 0;
    border-right: 1px solid ${palette.line};
  }

  .wts-technology-group:nth-child(even) {
    padding-right: 0;
  }

  .wts-technology-group:nth-child(n + 3) {
    border-top: 1px solid ${palette.line};
  }

  .wts-technology-group__icon,
  .wts-qa-capability__icon {
    display: inline-flex;
    width: 42px;
    height: 42px;
    align-items: center;
    justify-content: center;
    border: 1px solid ${palette.line};
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.white};
  }

  .wts-technology-group h3,
  .wts-qa-capability h3 {
    font-size: 17px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-technology-group p,
  .wts-qa-capability p {
    margin-top: 8px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.62;
  }

  .wts-integration-discovery {
    display: grid;
    grid-template-columns: minmax(260px, 0.8fr) minmax(0, 1.15fr) auto;
    gap: 30px;
    align-items: center;
    margin-top: 42px;
    padding: 28px 30px;
    border: 1px solid ${palette.line};
    border-radius: 24px;
    background: ${palette.white};
  }

  .wts-integration-discovery__intro {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr);
    gap: 15px;
    align-items: start;
  }

  .wts-integration-discovery__icon {
    display: inline-flex;
    width: 46px;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${palette.accent};
    background: ${palette.blush};
  }

  .wts-integration-discovery h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-integration-discovery p {
    margin-top: 7px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-integration-questions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 18px;
  }

  .wts-integration-questions span {
    position: relative;
    padding-left: 14px;
    color: ${palette.body};
    font-size: 12px;
    line-height: 1.45;
  }

  .wts-integration-questions span::before {
    content: "";
    position: absolute;
    top: 0.56em;
    left: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: ${palette.accent};
  }

  .wts-integration-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .wts-integration-links .wts-editorial-link {
    margin-top: 0;
  }

  .wts-integration-links .wts-editorial-link + .wts-editorial-link {
    margin-top: 4px;
  }

  .wts-qa {
    background: ${palette.white};
  }

  .wts-qa-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
    gap: 52px;
    align-items: start;
    margin-top: 58px;
  }

  .wts-qa-visual {
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
    box-shadow: 0 22px 54px rgba(43, 31, 40, 0.07);
  }

  .wts-qa-visual__bar {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 14px;
    align-items: center;
    min-height: 48px;
    padding: 10px 14px;
    border-bottom: 1px solid ${palette.line};
    background: #FBFAFB;
  }

  .wts-qa-visual__bar > span:nth-child(2) {
    color: ${palette.body};
    font-size: 11px;
    font-weight: 600;
    text-align: center;
  }

  .wts-qa-visual__bar > strong {
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
  }

  .wts-qa-visual__body {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 150px;
    min-height: 480px;
  }

  .wts-qa-page-preview {
    position: relative;
    min-width: 0;
    padding: 54px 30px;
    background: linear-gradient(135deg, ${palette.blush}, ${palette.white} 62%);
  }

  .wts-qa-page-preview__eyebrow {
    display: block;
    color: ${palette.accentDark};
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.11em;
  }

  .wts-qa-page-preview > strong {
    display: block;
    max-width: 330px;
    margin-top: 15px;
    font-size: 25px;
    font-weight: 600;
    line-height: 1.18;
    letter-spacing: -0.02em;
  }

  .wts-qa-page-preview__lines {
    display: grid;
    gap: 8px;
    max-width: 300px;
    margin-top: 20px;
  }

  .wts-qa-page-preview__lines i {
    height: 7px;
    border-radius: 999px;
    background: #E5DFE4;
  }

  .wts-qa-page-preview__lines i:nth-child(2) { width: 88%; }
  .wts-qa-page-preview__lines i:nth-child(3) { width: 68%; }

  .wts-qa-page-preview__button {
    display: inline-flex;
    margin-top: 24px;
    padding: 9px 14px;
    border-radius: 999px;
    color: ${palette.white};
    background: ${palette.accent};
    font-size: 10px;
    font-weight: 600;
  }

  .wts-qa-annotation {
    position: absolute;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 7px 9px;
    border: 1px solid #E4CCD7;
    border-radius: 999px;
    color: ${palette.accentDeep};
    background: rgba(255, 255, 255, 0.94);
    box-shadow: 0 8px 22px rgba(55, 37, 50, 0.08);
    font-size: 9px;
    font-weight: 600;
    line-height: 1.2;
  }

  .wts-qa-annotation--one { top: 30px; right: 18px; }
  .wts-qa-annotation--two { bottom: 102px; left: 22px; }
  .wts-qa-annotation--three { right: 18px; bottom: 40px; }

  .wts-qa-summary {
    padding: 28px 16px;
    border-left: 1px solid ${palette.line};
    background: ${palette.soft};
  }

  .wts-qa-summary > div {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 3px 8px;
    align-items: center;
    padding: 16px 0;
    border-bottom: 1px solid ${palette.line};
  }

  .wts-qa-summary > div strong {
    font-size: 12px;
    font-weight: 600;
  }

  .wts-qa-summary > div small {
    grid-column: 1;
    color: ${palette.muted};
    font-size: 10px;
    line-height: 1.35;
  }

  .wts-qa-summary > div svg {
    grid-column: 2;
    grid-row: 1 / 3;
    color: ${palette.accent};
  }

  .wts-qa-capabilities {
    border-top: 1px solid ${palette.line};
    border-bottom: 1px solid ${palette.line};
  }

  .wts-qa-capability {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 22px 0;
  }

  .wts-qa-capability + .wts-qa-capability {
    border-top: 1px solid ${palette.line};
  }

  .wts-qa-capability > div:last-child > span {
    display: block;
    margin-top: 10px;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-qa-footer {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    align-items: center;
    margin-top: 42px;
    padding-top: 28px;
    border-top: 1px solid ${palette.line};
  }

  .wts-qa-footer > p {
    max-width: 760px;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.7;
  }

  .wts-qa-footer .wts-editorial-link {
    flex: 0 0 auto;
    margin-top: 0;
  }

  .wts-industries {
    background: ${palette.soft};
  }

  .wts-industry-columns {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 58px;
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-industry-column {
    min-width: 0;
    padding: 38px 34px 40px;
  }

  .wts-industry-column:first-child { padding-left: 0; }
  .wts-industry-column:last-child { padding-right: 0; }
  .wts-industry-column + .wts-industry-column { border-left: 1px solid ${palette.lineStrong}; }

  .wts-industry-column > .wts-eyebrow {
    margin-bottom: 14px !important;
  }

  .wts-industry-column > h3 {
    font-size: 23px;
    font-weight: 600;
    line-height: 1.28;
    letter-spacing: -0.018em;
  }

  .wts-industry-column__intro {
    margin-top: 15px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.65;
  }

  .wts-industry-list {
    margin-top: 28px;
    border-top: 1px solid ${palette.line};
  }

  .wts-industry-link {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 16px;
    align-items: center;
    min-height: 72px;
    padding: 15px 0;
    border-bottom: 1px solid ${palette.line};
    color: ${palette.ink} !important;
    text-decoration: none;
  }

  .wts-industry-link strong,
  .wts-industry-link small {
    display: block;
  }

  .wts-industry-link strong {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-industry-link small {
    margin-top: 4px;
    color: ${palette.muted};
    font-size: 11px;
    line-height: 1.45;
  }

  .wts-industry-link svg {
    color: ${palette.accentDark};
    transition: transform 180ms ease;
  }

  .wts-industry-link:hover strong { color: ${palette.accentDark}; }
  .wts-industry-link:hover svg { transform: translateX(3px); }
  .wts-industry-link:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.2);
    outline-offset: 4px;
  }

  .wts-governance {
    background: ${palette.white};
  }

  .wts-governance-layout {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
    gap: 58px;
    align-items: center;
    margin-top: 58px;
  }

  .wts-language-visual {
    padding: 30px;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.soft};
  }

  .wts-language-visual__top {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }

  .wts-language-visual__top > div {
    display: flex;
    min-height: 62px;
    align-items: center;
    gap: 10px;
    padding: 14px;
    border: 1px solid ${palette.line};
    border-radius: 16px;
    color: ${palette.accentDark};
    background: ${palette.white};
  }

  .wts-language-visual__top span {
    color: ${palette.ink};
    font-size: 12px;
    font-weight: 600;
    line-height: 1.3;
  }

  .wts-language-visual__connector {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 28px;
  }

  .wts-language-visual__connector i {
    justify-self: center;
    width: 1px;
    height: 28px;
    background: ${palette.lineStrong};
  }

  .wts-language-visual__core {
    padding: 28px 24px;
    border: 1px solid #E6C5D4;
    border-radius: 22px;
    background: ${palette.blush};
    text-align: center;
  }

  .wts-language-visual__core-icon {
    display: inline-flex;
    width: 48px;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    color: ${palette.accent};
    background: ${palette.white};
  }

  .wts-language-visual__core > span {
    display: block;
    margin-top: 14px;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.12em;
  }

  .wts-language-visual__core > strong {
    display: block;
    margin-top: 7px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
  }

  .wts-language-visual__core > p {
    max-width: 360px;
    margin: 8px auto 0 !important;
    color: ${palette.body};
    font-size: 12px;
    line-height: 1.5;
  }

  .wts-language-visual__channels {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 7px;
    margin-top: 22px;
  }

  .wts-language-visual__channels span {
    padding: 8px 5px;
    border-radius: 999px;
    color: ${palette.body};
    background: ${palette.white};
    font-size: 9px;
    font-weight: 600;
    text-align: center;
  }

  .wts-governance-capabilities {
    border-top: 1px solid ${palette.line};
    border-bottom: 1px solid ${palette.line};
  }

  .wts-governance-capability {
    display: grid;
    grid-template-columns: 92px minmax(0, 1fr);
    gap: 24px;
    align-items: start;
    padding: 24px 0;
  }

  .wts-governance-capability + .wts-governance-capability {
    border-top: 1px solid ${palette.line};
  }

  .wts-governance-capability > span {
    padding-top: 4px;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.12em;
  }

  .wts-governance-capability h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-governance-capability p {
    margin-top: 7px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.62;
  }

  .wts-governance-footer {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    align-items: center;
    margin-top: 46px;
    padding: 30px;
    border: 1px solid ${palette.line};
    border-radius: 24px;
    background: ${palette.soft};
  }

  .wts-governance-footer h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-governance-footer p {
    max-width: 700px;
    margin-top: 8px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.6;
  }

  .wts-governance-links {
    display: flex;
    flex: 0 0 auto;
    gap: 24px;
  }

  .wts-governance-links .wts-editorial-link {
    margin-top: 0;
  }



  .wts-resources {
    border-top: 1px solid ${palette.line};
    background: ${palette.white};
  }

  .wts-resource-layout {
    display: grid;
    grid-template-columns: minmax(320px, 0.78fr) minmax(0, 1.22fr);
    gap: 30px;
    align-items: start;
    margin-top: 56px;
  }

  .wts-resource-feature {
    display: flex;
    min-width: 0;
    flex-direction: column;
    padding: 40px;
    border: 1px solid #F0D9E4;
    border-radius: 28px;
    color: ${palette.ink} !important;
    background: ${palette.blush};
    text-decoration: none;
    transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
  }

  .wts-resource-feature:hover {
    transform: translateY(-2px);
    border-color: #DEB7C9;
    box-shadow: 0 18px 42px rgba(78, 45, 65, 0.08);
  }

  .wts-resource-feature:focus-visible,
  .wts-resource-row:focus-visible {
    outline: 3px solid rgba(193, 29, 99, 0.2);
    outline-offset: 4px;
  }

  .wts-resource-feature__icon {
    display: inline-flex;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    border-radius: 17px;
    color: ${palette.accent};
    background: ${palette.white};
  }

  .wts-resource-feature__label {
    display: block;
    margin-top: 34px;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.12em;
  }

  .wts-resource-feature h3 {
    max-width: 430px;
    margin-top: 13px;
    font-size: 27px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: -0.02em;
  }

  .wts-resource-feature > p {
    max-width: 480px;
    margin-top: 17px !important;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.7;
  }

  .wts-resource-feature__outline {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 26px;
    border-top: 1px solid rgba(193, 29, 99, 0.15);
    border-bottom: 1px solid rgba(193, 29, 99, 0.15);
  }

  .wts-resource-feature__outline > div {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    min-width: 0;
    padding: 17px 14px 17px 0;
  }

  .wts-resource-feature__outline > div:nth-child(even) {
    padding-left: 16px;
    border-left: 1px solid rgba(193, 29, 99, 0.15);
  }

  .wts-resource-feature__outline > div:nth-child(n + 3) {
    border-top: 1px solid rgba(193, 29, 99, 0.15);
  }

  .wts-resource-feature__outline > div > span {
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.08em;
  }

  .wts-resource-feature__outline strong {
    display: block;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-resource-feature__outline p {
    margin-top: 4px !important;
    color: ${palette.muted};
    font-size: 11px;
    line-height: 1.45;
  }

  .wts-resource-action {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 28px;
    color: ${palette.accentDark};
    font-size: 14px;
    font-weight: 600;
    line-height: 1.3;
  }

  .wts-resource-feature:hover .wts-resource-action svg {
    transform: translateX(3px);
  }

  .wts-resource-action svg,
  .wts-resource-row > svg {
    flex: 0 0 auto;
    transition: transform 180ms ease;
  }

  .wts-resource-index {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    overflow: hidden;
    border: 1px solid ${palette.line};
    border-radius: 28px;
    background: ${palette.white};
  }

  .wts-resource-row {
    display: grid;
    grid-template-columns: 42px minmax(0, 1fr) 18px;
    gap: 15px;
    align-items: start;
    min-width: 0;
    padding: 25px 24px 27px;
    color: ${palette.ink} !important;
    text-decoration: none;
    transition: background-color 180ms ease;
  }

  .wts-resource-row:nth-child(even) {
    border-left: 1px solid ${palette.line};
  }

  .wts-resource-row:nth-child(n + 3) {
    border-top: 1px solid ${palette.line};
  }

  .wts-resource-row:last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }

  .wts-resource-row:hover {
    background: #FCFAFC;
  }

  .wts-resource-row:hover > svg {
    transform: translateX(3px);
  }

  .wts-resource-row__icon {
    display: inline-flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.soft};
  }

  .wts-resource-row__copy > span {
    display: block;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.1em;
  }

  .wts-resource-row h3 {
    margin-top: 8px;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-resource-row p {
    margin-top: 7px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-resource-row > svg {
    margin-top: 3px;
    color: ${palette.accentDark};
  }

  .wts-resource-footer {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
    margin-top: 30px;
    padding-inline: 4px;
  }

  .wts-resource-footer > p {
    max-width: 760px;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.6;
  }

  .wts-final-cta {
    border-top: 1px solid ${palette.line};
    background: #F8F6F8;
  }

  .wts-final-cta__panel {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(390px, 0.92fr);
    gap: 64px;
    align-items: center;
    padding: 60px 64px;
    border: 1px solid #E9D8E1;
    border-radius: 30px;
    background: linear-gradient(135deg, #FFFFFF 0%, #FDF2F7 100%);
    box-shadow: 0 24px 60px rgba(55, 39, 50, 0.06);
  }

  .wts-final-cta__copy h2 {
    max-width: 650px;
  }

  .wts-final-cta__copy > p:not(.wts-eyebrow) {
    max-width: 720px;
    margin-top: 22px !important;
    color: ${palette.body};
    font-size: 17px;
    line-height: 1.72;
  }

  .wts-final-cta__actions {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    margin-top: 30px;
  }

  .wts-final-cta__support {
    display: block;
    margin-top: 18px;
    color: ${palette.muted};
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-final-cta__inputs {
    min-width: 0;
    padding: 32px;
    border: 1px solid rgba(193, 29, 99, 0.12);
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.86);
  }

  .wts-final-cta__label {
    display: block;
    color: ${palette.accentDark};
    font-size: 11px;
    font-weight: 600;
    line-height: 1.25;
    letter-spacing: 0.12em;
  }

  .wts-final-cta__input-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-top: 19px;
    border-top: 1px solid ${palette.line};
    border-bottom: 1px solid ${palette.line};
  }

  .wts-final-cta__input-grid > div {
    display: grid;
    grid-template-columns: 24px minmax(0, 1fr);
    gap: 10px;
    align-items: start;
    min-width: 0;
    padding: 16px 12px 16px 0;
  }

  .wts-final-cta__input-grid > div:nth-child(even) {
    padding-left: 18px;
    border-left: 1px solid ${palette.line};
  }

  .wts-final-cta__input-grid > div:nth-child(n + 3) {
    border-top: 1px solid ${palette.line};
  }

  .wts-final-cta__input-grid > div > span {
    display: inline-flex;
    width: 23px;
    height: 23px;
    align-items: center;
    justify-content: center;
    margin-top: 1px;
    border-radius: 8px;
    color: ${palette.accent};
    background: ${palette.blush};
  }

  .wts-final-cta__input-grid strong {
    font-size: 13px;
    font-weight: 600;
    line-height: 1.5;
  }

  .wts-final-cta__inputs > p {
    margin-top: 19px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.62;
  }

  @media (max-width: 1180px) {
    .wts-shell {
      padding-inline: 40px;
    }

    .wts-hero-visual {
      grid-template-columns: minmax(0, 1fr) 240px minmax(0, 1fr);
      gap: 20px;
      padding: 26px;
    }

    .wts-browser__body {
      padding: 24px;
    }

    .wts-proof-band {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .wts-proof-item:nth-child(4) {
      border-left: 0;
    }

    .wts-proof-item:nth-child(n + 4) {
      border-top: 1px solid ${palette.line};
    }

    .wts-section-heading--split,
    .wts-definition__top {
      gap: 64px;
    }

    .wts-enterprise-panel {
      grid-template-columns: minmax(280px, 0.78fr) minmax(0, 1.22fr);
    }

    .wts-enterprise-panel__intro,
    .wts-challenge-list {
      padding-inline: 32px;
    }

    .wts-benefit-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-benefit-item:not(:nth-child(4n + 1)) {
      border-left: 0;
    }

    .wts-benefit-item:nth-child(even) {
      border-left: 1px solid rgba(255, 255, 255, 0.11);
    }

    .wts-benefit-item:nth-child(n + 3) {
      border-top: 1px solid rgba(255, 255, 255, 0.11);
    }





    .wts-model-matrix__header,
    .wts-model-row {
      grid-template-columns: minmax(230px, 0.9fr) minmax(0, 1.35fr) minmax(0, 1fr);
    }

    .wts-model-matrix__header > span:last-child {
      display: none;
    }

    .wts-model-row__cell:last-child {
      grid-column: 2 / -1;
      padding-top: 0;
      border-left: 1px solid ${palette.line};
    }

    .wts-model-row__cell:last-child > span {
      display: block;
      margin-bottom: 5px;
      color: ${palette.accentDark};
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .wts-decision-panel {
      grid-template-columns: minmax(250px, 0.8fr) minmax(0, 1.2fr);
    }

    .wts-decision-panel > .wts-editorial-link {
      grid-column: 1 / -1;
      justify-self: flex-end;
    }

    .wts-quality-spectrum {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    .wts-quality-route + .wts-quality-route {
      border-left: 0;
    }

    .wts-quality-route:not(:nth-child(3n + 1)) {
      border-left: 1px solid ${palette.line};
    }

    .wts-quality-route:nth-child(n + 4) {
      border-top: 1px solid ${palette.line};
    }

    .wts-review-band {
      grid-template-columns: 50px minmax(0, 1fr);
    }

    .wts-review-band .wts-editorial-link {
      grid-column: 1 / -1;
      justify-self: flex-end;
    }

    .wts-continuous-layout,
    .wts-seo-top {
      grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
      gap: 46px;
    }
  }

  @media (max-width: 920px) {
    .wts-hero {
      padding-top: 92px;
    }

    .wts-hero h1 {
      font-size: 42px;
    }

    .wts-hero-visual {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      align-items: stretch;
    }

    .wts-orchestration {
      grid-column: 1 / -1;
      grid-row: 2;
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 18px;
      align-items: center;
      text-align: left;
    }

    .wts-orchestration::before,
    .wts-orchestration::after {
      display: none;
    }

    .wts-orchestration__icon {
      grid-row: 1 / 4;
    }

    .wts-orchestration > strong {
      margin-top: 0;
    }

    .wts-orchestration__rail,
    .wts-orchestration__labels {
      width: 100%;
    }

    .wts-orchestration__assets {
      grid-column: 1 / -1;
      justify-content: flex-start;
      margin-top: 18px;
    }

    .wts-section {
      padding: 80px 0;
    }

    .wts-section h2 {
      font-size: 32px;
    }

    .wts-section-heading--split,
    .wts-definition__top {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .wts-enterprise-panel {
      grid-template-columns: 1fr;
    }

    .wts-enterprise-panel__intro {
      padding: 36px;
      border-bottom: 1px solid ${palette.line};
    }

    .wts-challenge-list {
      padding: 8px 36px;
    }

    .wts-scope-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-scope-item:not(:nth-child(3n + 1)) {
      border-left: 0;
    }

    .wts-scope-item:nth-child(even) {
      border-left: 1px solid ${palette.line};
    }

    .wts-scope-item:nth-child(n + 3) {
      border-top: 1px solid ${palette.line};
    }

    .wts-definition__footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 14px;
    }

    .wts-comparison-matrix__header,
    .wts-comparison-matrix__row {
      grid-template-columns: 150px repeat(2, minmax(0, 1fr));
    }

    .wts-comparison-matrix__header > div,
    .wts-comparison-matrix__row > strong,
    .wts-comparison-matrix__row > p {
      padding-inline: 22px;
    }

    .wts-content-category-grid {
      grid-template-columns: 1fr;
    }

    .wts-content-category:nth-child(even) {
      border-left: 0;
    }

    .wts-content-category:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }





    .wts-model-matrix__header {
      display: none;
    }

    .wts-model-row {
      grid-template-columns: minmax(210px, 0.78fr) minmax(0, 1.22fr);
      padding: 0;
    }

    .wts-model-row__title {
      grid-row: 1 / 4;
      align-content: start;
      border-right: 1px solid ${palette.line};
    }

    .wts-model-row__cell,
    .wts-model-row__cell:last-child {
      grid-column: 2;
      padding: 18px 22px;
      border-left: 0;
    }

    .wts-model-row__cell + .wts-model-row__cell {
      border-top: 1px solid ${palette.line};
    }

    .wts-model-row__cell > span,
    .wts-model-row__cell:last-child > span {
      display: block;
      margin-bottom: 5px;
      color: ${palette.accentDark};
      font-size: 10px;
      font-weight: 600;
      line-height: 1.25;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .wts-process-stage {
      grid-template-columns: 150px minmax(0, 1fr);
    }

    .wts-process-stage__steps {
      grid-template-columns: 1fr;
    }

    .wts-process-stage__steps .wts-process-step + .wts-process-step {
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-decision-panel {
      grid-template-columns: 1fr;
      align-items: start;
    }

    .wts-decision-factors {
      border-top: 1px solid ${palette.line};
      border-left: 0;
      padding-top: 20px;
    }

    .wts-decision-panel > .wts-editorial-link {
      grid-column: auto;
      justify-self: start;
    }

    .wts-quality-spectrum {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-quality-route:not(:nth-child(3n + 1)) {
      border-left: 0;
    }

    .wts-quality-route:nth-child(even) {
      border-left: 1px solid ${palette.line};
    }

    .wts-quality-route:nth-child(n + 3) {
      border-top: 1px solid ${palette.line};
    }

    .wts-review-band .wts-editorial-link {
      justify-self: start;
    }

    .wts-continuous-layout,
    .wts-seo-top {
      grid-template-columns: 1fr;
    }



    .wts-process-footer,
    .wts-seo-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 14px;
    }

    .wts-continuous-visual {
      max-width: 720px;
      width: 100%;
      margin: 0 auto;
    }

    .wts-seo-top {
      gap: 42px;
    }

    .wts-search-visual {
      max-width: 720px;
      width: 100%;
    }

    .wts-seo-grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-seo-item:not(:nth-child(3n + 1)) {
      border-left: 0;
    }

    .wts-seo-item:nth-child(even) {
      border-left: 1px solid rgba(255, 255, 255, 0.11);
    }

    .wts-seo-item:nth-child(n + 3) {
      border-top: 1px solid rgba(255, 255, 255, 0.11);
    }
  }

  @media (max-width: 700px) {
    .wts-shell {
      padding-inline: 24px;
    }

    .wts-hero {
      padding-top: 76px;
    }

    .wts-hero__actions {
      flex-direction: column;
      align-items: stretch;
    }

    .wts-button {
      width: 100%;
    }

    .wts-hero-visual {
      grid-template-columns: 1fr;
      gap: 24px;
      margin-top: 48px;
      padding: 22px;
      border-radius: 26px;
    }

    .wts-orchestration {
      grid-column: auto;
      grid-row: auto;
    }

    .wts-proof-band {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-top: 36px;
    }

    .wts-proof-item:nth-child(odd) {
      border-left: 0;
    }

    .wts-proof-item:nth-child(even) {
      border-left: 1px solid ${palette.line};
    }

    .wts-proof-item:nth-child(n + 3) {
      border-top: 1px solid ${palette.line};
    }

    .wts-challenge-list {
      grid-template-columns: 1fr;
      padding: 8px 30px;
    }

    .wts-challenge-row,
    .wts-challenge-row:nth-child(odd),
    .wts-challenge-row:nth-child(even) {
      padding: 26px 0;
      border-right: 0;
    }

    .wts-challenge-row:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }

    .wts-scope-grid {
      grid-template-columns: 1fr;
    }

    .wts-scope-item,
    .wts-scope-item:nth-child(even) {
      padding: 30px 0;
      border-left: 0;
    }

    .wts-scope-item:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }

    .wts-comparison-matrix {
      border-radius: 24px;
    }

    .wts-comparison-matrix__header {
      display: none;
    }

    .wts-comparison-matrix__row {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0 24px;
    }

    .wts-comparison-matrix__row:first-of-type {
      border-top: 0;
    }

    .wts-comparison-matrix__row > strong,
    .wts-comparison-matrix__row > p {
      padding: 0;
      border-left: 0;
    }

    .wts-comparison-matrix__row > strong {
      padding-top: 26px;
      color: ${palette.accentDark};
      font-size: 13px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .wts-comparison-matrix__row > p {
      position: relative;
      padding-top: 30px;
      font-size: 14px;
    }

    .wts-comparison-matrix__row > p::before {
      position: absolute;
      top: 8px;
      left: 0;
      color: ${palette.ink};
      font-size: 12px;
      font-weight: 600;
      line-height: 1.3;
    }

    .wts-comparison-matrix__row > p:nth-of-type(1)::before {
      content: "Website Translation";
    }

    .wts-comparison-matrix__row > p:nth-of-type(2)::before {
      content: "Website Localization";
    }

    .wts-comparison-matrix__row > p:last-child {
      padding-bottom: 26px;
    }

    .wts-comparison-callout {
      grid-template-columns: 42px minmax(0, 1fr);
      padding: 22px;
    }

    .wts-benefit-grid {
      grid-template-columns: 1fr;
    }

    .wts-benefit-item,
    .wts-benefit-item:nth-child(even) {
      padding: 28px 0;
      border-left: 0;
    }

    .wts-benefit-item:nth-child(n + 2) {
      border-top: 1px solid rgba(255, 255, 255, 0.11);
    }

    .wts-content-category {
      padding-inline: 0;
    }


    .wts-model-row {
      display: block;
      padding: 24px;
    }

    .wts-model-row__title {
      grid-row: auto;
      padding: 0 0 20px;
      border-right: 0;
    }

    .wts-model-row__cell,
    .wts-model-row__cell:last-child {
      grid-column: auto;
      padding: 16px 0;
      border-left: 0;
      border-top: 1px solid ${palette.line};
    }

    .wts-process-stage {
      grid-template-columns: 1fr;
    }

    .wts-process-stage__heading {
      padding: 26px 0 20px;
    }

    .wts-process-stage__steps {
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-process-stage__steps .wts-process-step {
      padding-inline: 0;
    }

    .wts-quality-guide {
      grid-template-columns: 1fr;
      gap: 8px;
      text-align: center;
    }

    .wts-quality-guide i {
      width: 76%;
      margin: 0 auto;
    }

    .wts-decision-factors {
      grid-template-columns: 1fr;
    }

    .wts-decision-factor,
    .wts-decision-factor:nth-child(even) {
      padding: 16px 0;
      border-left: 0;
    }

    .wts-decision-factor:nth-child(n + 2) {
      margin-top: 0;
      border-top: 1px solid ${palette.line};
    }

    .wts-quality-spectrum {
      grid-template-columns: 1fr;
    }

    .wts-quality-route,
    .wts-quality-route:nth-child(even) {
      border-left: 0;
    }

    .wts-quality-route:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }

    .wts-review-band {
      grid-template-columns: 46px minmax(0, 1fr);
      padding: 24px;
    }

    .wts-process-step {
      padding-inline: 0;
    }

    .wts-continuous-flow {
      grid-template-columns: 1fr;
      gap: 10px;
      align-items: stretch;
    }

    .wts-continuous-flow i {
      width: 1px;
      height: 18px;
      margin: 0 auto;
    }

    .wts-continuous-flow > div {
      display: grid;
      grid-template-columns: 34px minmax(0, 1fr);
      column-gap: 12px;
      align-items: center;
      text-align: left;
    }

    .wts-continuous-flow > div > span {
      grid-row: 1 / 3;
    }

    .wts-continuous-flow strong {
      margin-top: 0;
    }

    .wts-language-status,
    .wts-seo-grid {
      grid-template-columns: 1fr;
    }

    .wts-seo-item,
    .wts-seo-item:nth-child(even) {
      border-left: 0;
    }

    .wts-seo-item:nth-child(n + 2) {
      border-top: 1px solid rgba(255, 255, 255, 0.11);
    }
  }

  @media (max-width: 480px) {
    .wts-shell {
      padding-inline: 20px;
    }

    .wts-hero {
      padding-top: 68px;
    }

    .wts-hero h1 {
      font-size: 38px;
      line-height: 1.1;
    }

    .wts-hero__lead {
      font-size: 18px;
      line-height: 1.62;
    }

    .wts-hero-visual {
      padding: 16px;
      border-radius: 24px;
    }

    .wts-browser__body {
      min-height: 220px;
      padding: 24px 20px;
    }

    .wts-orchestration {
      display: block;
      padding: 24px 18px;
      text-align: center;
    }

    .wts-orchestration__icon {
      margin: 0 auto;
    }

    .wts-orchestration > strong {
      margin-top: 14px;
    }

    .wts-orchestration__assets {
      justify-content: center;
    }

    .wts-proof-band {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-proof-item,
    .wts-proof-item:nth-child(even),
    .wts-proof-item:nth-child(odd) {
      padding: 20px 14px;
    }

    .wts-proof-item:nth-child(odd) {
      padding-left: 0;
      border-left: 0;
    }

    .wts-proof-item:nth-child(even) {
      padding-right: 0;
      border-left: 1px solid ${palette.line};
    }

    .wts-proof-item:nth-child(n + 3) {
      border-top: 1px solid ${palette.line};
    }

    .wts-section {
      padding: 68px 0;
    }

    .wts-section h2 {
      font-size: 30px;
      line-height: 1.18;
    }

    .wts-section-heading__copy p,
    .wts-definition__definition p {
      font-size: 16px;
    }

    .wts-enterprise-panel {
      margin-top: 42px;
      border-radius: 24px;
    }

    .wts-enterprise-panel__intro,
    .wts-challenge-list {
      padding-inline: 24px;
    }

    .wts-enterprise-panel__intro h3 {
      font-size: 20px;
    }

    .wts-challenge-row {
      grid-template-columns: 42px minmax(0, 1fr);
      gap: 14px;
    }

    .wts-definition__lead {
      font-size: 18px !important;
    }

    .wts-definition__footer-copy {
      grid-template-columns: 26px minmax(0, 1fr);
    }

    .wts-centered-heading > p:last-child {
      font-size: 16px;
    }

    .wts-comparison-matrix__row {
      padding-inline: 20px;
    }

    .wts-comparison-callout {
      grid-template-columns: 1fr;
    }

    .wts-comparison-callout__icon {
      margin-bottom: 2px;
    }

    .wts-content-category {
      grid-template-columns: 44px minmax(0, 1fr);
      gap: 15px;
    }

    .wts-content-category h3 {
      font-size: 18px;
    }


    .wts-model-row {
      padding: 22px 20px;
    }

    .wts-process-stage__heading h3 {
      font-size: 18px;
    }

    .wts-decision-panel {
      padding: 26px 22px;
    }

    .wts-decision-panel__intro {
      grid-template-columns: 44px minmax(0, 1fr);
    }

    .wts-review-band {
      grid-template-columns: 1fr;
    }

    .wts-review-band .wts-editorial-link {
      grid-column: auto;
    }

    .wts-process-step {
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 15px;
    }

    .wts-process-step__number {
      font-size: 21px;
    }

    .wts-continuous-visual,
    .wts-search-visual {
      padding: 22px;
      border-radius: 24px;
    }

    .wts-continuous-visual__header {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }

    .wts-update-card {
      grid-template-columns: 42px minmax(0, 1fr);
      padding: 17px;
    }

    .wts-search-markets {
      grid-template-columns: 1fr;
    }

    .wts-search-markets > div {
      min-height: 48px;
    }
  }

  @media (max-width: 359px) {
    .wts-proof-band {
      grid-template-columns: 1fr;
    }

    .wts-proof-item,
    .wts-proof-item:nth-child(even),
    .wts-proof-item:nth-child(odd) {
      padding: 19px 0;
      border-left: 0;
    }

    .wts-proof-item:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }
  }

  @media (max-width: 340px) {
    .wts-hero h1 {
      font-size: 36px;
    }

    .wts-button {
      padding-inline: 18px;
    }

    .wts-challenge-row {
      grid-template-columns: 1fr;
    }

    .wts-challenge-row__icon {
      margin-bottom: 2px;
    }

    .wts-content-category,
    .wts-decision-panel__intro,
    .wts-process-step,
    .wts-continuous-capability,
    .wts-update-card,
    .wts-search-query {
      grid-template-columns: 1fr;
    }

    .wts-quality-route {
      padding-inline: 20px;
    }

    .wts-process-step__number,
    .wts-process-step__body {
      min-width: 0;
    }

    .wts-search-connector {
      width: 130px;
    }
  }

  @media (max-width: 1180px) {
    .wts-technology-layout,
    .wts-qa-layout,
    .wts-governance-layout {
      gap: 38px;
    }

    .wts-integration-discovery {
      grid-template-columns: minmax(250px, 0.9fr) minmax(0, 1.1fr);
    }

    .wts-integration-links {
      grid-column: 1 / -1;
      flex-direction: row;
      gap: 24px;
    }

    .wts-industry-column {
      padding-inline: 26px;
    }
  }

  @media (max-width: 920px) {
    .wts-technology-layout,
    .wts-qa-layout,
    .wts-governance-layout {
      grid-template-columns: 1fr;
    }

    .wts-technology-groups {
      margin-top: 6px;
    }

    .wts-tech-visual,
    .wts-qa-visual,
    .wts-language-visual {
      max-width: 760px;
      width: 100%;
      margin-inline: auto;
    }

    .wts-qa-visual__body {
      min-height: 430px;
    }

    .wts-industry-columns {
      grid-template-columns: 1fr;
    }

    .wts-industry-column,
    .wts-industry-column:first-child,
    .wts-industry-column:last-child {
      padding: 36px 0;
    }

    .wts-industry-column + .wts-industry-column {
      border-top: 1px solid ${palette.lineStrong};
      border-left: 0;
    }

    .wts-industry-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0 30px;
    }

    .wts-governance-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 18px;
    }
  }

  @media (max-width: 700px) {
    .wts-technology-layout,
    .wts-qa-layout,
    .wts-governance-layout,
    .wts-industry-columns {
      margin-top: 44px;
    }

    .wts-tech-visual,
    .wts-language-visual {
      padding: 22px;
      border-radius: 24px;
    }

    .wts-tech-sources,
    .wts-tech-output {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-tech-connection {
      grid-template-columns: repeat(2, 1fr);
      height: 24px;
    }

    .wts-tech-connection i {
      height: 24px;
    }

    .wts-tech-connection i:nth-child(n + 3) {
      display: none;
    }

    .wts-technology-groups {
      grid-template-columns: 1fr;
    }

    .wts-technology-group,
    .wts-technology-group:nth-child(odd),
    .wts-technology-group:nth-child(even) {
      padding: 22px 0;
      border-right: 0;
    }

    .wts-technology-group:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }

    .wts-integration-discovery {
      grid-template-columns: 1fr;
      gap: 22px;
      padding: 24px;
    }

    .wts-integration-links {
      grid-column: auto;
      flex-direction: column;
      gap: 0;
    }

    .wts-qa-visual__body {
      grid-template-columns: 1fr;
      min-height: 0;
    }

    .wts-qa-page-preview {
      min-height: 390px;
    }

    .wts-qa-summary {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0 18px;
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-qa-summary > span {
      grid-column: 1 / -1;
      margin-bottom: 6px;
    }

    .wts-qa-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 16px;
    }

    .wts-industry-list {
      grid-template-columns: 1fr;
    }

    .wts-language-visual__channels {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-governance-footer {
      padding: 24px;
    }

    .wts-governance-links {
      align-items: flex-start;
      flex-direction: column;
      gap: 0;
    }
  }

  @media (max-width: 480px) {
    .wts-tech-visual__header {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }

    .wts-tech-workflow {
      grid-template-columns: 42px minmax(0, 1fr);
      padding: 15px;
    }

    .wts-tech-workflow__icon {
      width: 42px;
      height: 42px;
    }

    .wts-integration-discovery__intro,
    .wts-technology-group,
    .wts-qa-capability {
      grid-template-columns: 42px minmax(0, 1fr);
    }

    .wts-integration-questions {
      grid-template-columns: 1fr;
    }

    .wts-qa-visual__bar {
      grid-template-columns: auto 1fr;
    }

    .wts-qa-visual__bar > strong {
      display: none;
    }

    .wts-qa-page-preview {
      min-height: 420px;
      padding: 48px 22px;
    }

    .wts-qa-page-preview > strong {
      font-size: 22px;
    }

    .wts-qa-annotation--one { top: 18px; right: 12px; }
    .wts-qa-annotation--two { bottom: 112px; left: 14px; }
    .wts-qa-annotation--three { right: 12px; bottom: 42px; }

    .wts-qa-summary {
      grid-template-columns: 1fr;
    }

    .wts-qa-summary > span {
      grid-column: 1;
    }

    .wts-industry-column > h3 {
      font-size: 21px;
    }

    .wts-language-visual__top {
      grid-template-columns: 1fr;
    }

    .wts-language-visual__connector {
      grid-template-columns: 1fr;
      height: 22px;
    }

    .wts-language-visual__connector i {
      height: 22px;
    }

    .wts-language-visual__connector i:nth-child(2) {
      display: none;
    }

    .wts-governance-capability {
      grid-template-columns: 1fr;
      gap: 7px;
    }

    .wts-governance-capability > span {
      padding-top: 0;
    }
  }


  /* Sections 16–19 */
  .wts-security {
    background: ${palette.soft};
  }

  .wts-security-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
    gap: 64px;
    align-items: center;
    margin-top: 58px;
  }

  .wts-control-visual {
    min-width: 0;
    padding: 30px;
    border: 1px solid ${palette.lineStrong};
    border-radius: 28px;
    background: ${palette.white};
    box-shadow: 0 24px 60px rgba(47, 28, 39, 0.08);
  }

  .wts-control-visual__header {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    align-items: flex-start;
    padding-bottom: 24px;
    border-bottom: 1px solid ${palette.line};
  }

  .wts-control-visual__header > div > span,
  .wts-control-node > span,
  .wts-control-metrics span,
  .wts-certification-band__intro > span,
  .wts-cost-subheading > span,
  .wts-timeline-panel__header > span {
    display: block;
    color: ${palette.accentDark};
    font-size: 10px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.12em;
  }

  .wts-control-visual__header strong {
    display: block;
    margin-top: 7px;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-control-visual__status {
    display: inline-flex;
    flex: 0 0 auto;
    gap: 7px;
    align-items: center;
    min-height: 32px;
    padding: 7px 11px;
    border-radius: 999px;
    color: ${palette.accentDeep};
    background: ${palette.blush};
    font-size: 11px;
    font-weight: 600;
    white-space: nowrap;
  }

  .wts-control-flow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 26px minmax(0, 1fr) 26px minmax(0, 1fr);
    gap: 10px;
    align-items: center;
    padding: 34px 0;
  }

  .wts-control-node {
    min-width: 0;
    min-height: 184px;
    padding: 22px 16px;
    border: 1px solid ${palette.line};
    border-radius: 20px;
    text-align: center;
    background: ${palette.white};
  }

  .wts-control-node--active {
    border-color: rgba(193, 29, 99, 0.22);
    background: ${palette.blush};
  }

  .wts-control-node > div {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    margin: 0 auto 17px;
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.blush};
  }

  .wts-control-node--active > div {
    color: ${palette.white};
    background: ${palette.accent};
  }

  .wts-control-node > strong {
    display: block;
    margin-top: 7px;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-control-node > small {
    display: block;
    margin-top: 8px;
    color: ${palette.muted};
    font-size: 11px;
    line-height: 1.5;
  }

  .wts-control-flow__arrow {
    color: ${palette.muted};
    text-align: center;
  }

  .wts-control-metrics {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-top: 1px solid ${palette.line};
  }

  .wts-control-metrics > div {
    min-width: 0;
    padding: 20px 14px 0;
    text-align: center;
  }

  .wts-control-metrics > div + div {
    border-left: 1px solid ${palette.line};
  }

  .wts-control-metrics strong {
    display: block;
    margin-top: 5px;
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-security-capabilities {
    border-top: 1px solid ${palette.lineStrong};
    border-bottom: 1px solid ${palette.lineStrong};
  }

  .wts-security-capability {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 22px 0;
  }

  .wts-security-capability + .wts-security-capability {
    border-top: 1px solid ${palette.line};
  }

  .wts-security-capability__icon {
    display: grid;
    place-items: center;
    width: 42px;
    height: 42px;
    border-radius: 14px;
    color: ${palette.accentDark};
    background: ${palette.white};
    border: 1px solid ${palette.line};
  }

  .wts-security-capability span {
    display: block;
    color: ${palette.accentDark};
    font-size: 9px;
    font-weight: 600;
    line-height: 1.3;
    letter-spacing: 0.12em;
  }

  .wts-security-capability h3 {
    margin-top: 5px !important;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-security-capability p {
    margin-top: 6px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.6;
  }

  .wts-certification-band {
    display: grid;
    grid-template-columns: minmax(210px, 0.8fr) minmax(0, 1.4fr) auto;
    gap: 32px;
    align-items: center;
    margin-top: 52px;
    padding: 28px 30px;
    border: 1px solid ${palette.lineStrong};
    border-radius: 24px;
    background: ${palette.white};
  }

  .wts-certification-band__intro strong {
    display: block;
    margin-top: 7px;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-certification-band__items {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .wts-certification-band__items > div {
    min-width: 0;
    padding: 0 22px;
  }

  .wts-certification-band__items > div + div {
    border-left: 1px solid ${palette.line};
  }

  .wts-certification-band__items strong,
  .wts-certification-band__items span {
    display: block;
  }

  .wts-certification-band__items strong {
    font-size: 15px;
    font-weight: 600;
  }

  .wts-certification-band__items span {
    margin-top: 5px;
    color: ${palette.muted};
    font-size: 11px;
    line-height: 1.45;
  }

  .wts-certification-band__links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .wts-why-stepes {
    background: #211A21;
  }

  .wts-why-stepes h2 {
    color: ${palette.white} !important;
  }

  .wts-why-stepes .wts-centered-heading > p:last-child {
    color: rgba(255, 255, 255, 0.7);
  }

  .wts-advantage-primary {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin-top: 58px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wts-advantage-primary__item {
    padding: 38px 34px;
  }

  .wts-advantage-primary__item + .wts-advantage-primary__item {
    border-left: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wts-advantage-primary__item > div {
    display: grid;
    place-items: center;
    width: 48px;
    height: 48px;
    border-radius: 16px;
    color: #FFD6E6;
    background: rgba(193, 29, 99, 0.19);
  }

  .wts-advantage-primary__item h3 {
    margin-top: 22px !important;
    color: ${palette.white};
    font-size: 22px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-advantage-primary__item p {
    margin-top: 10px !important;
    color: rgba(255, 255, 255, 0.68);
    font-size: 15px;
    line-height: 1.65;
  }

  .wts-advantage-supporting {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 34px;
    margin-top: 42px;
  }

  .wts-advantage-supporting article {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    padding: 24px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.11);
  }

  .wts-advantage-supporting article > svg {
    margin-top: 3px;
    color: #F09ABD;
  }

  .wts-advantage-supporting h3 {
    color: ${palette.white};
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-advantage-supporting p {
    margin-top: 6px !important;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-advantage-footer {
    display: flex;
    justify-content: space-between;
    gap: 36px;
    align-items: center;
    margin-top: 42px;
    padding-top: 30px;
    border-top: 1px solid rgba(255, 255, 255, 0.14);
  }

  .wts-advantage-footer > p {
    max-width: 760px;
    color: rgba(255, 255, 255, 0.7);
    font-size: 15px;
    line-height: 1.65;
  }

  .wts-why-stepes .wts-editorial-link {
    color: #F09ABD !important;
  }

  .wts-cost-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.05fr) minmax(420px, 0.95fr);
    gap: 62px;
    align-items: start;
    margin-top: 58px;
  }

  .wts-cost-subheading h3,
  .wts-timeline-panel__header h3 {
    margin-top: 8px !important;
    font-size: 24px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-cost-factor-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0 28px;
    margin-top: 28px;
    border-top: 1px solid ${palette.lineStrong};
  }

  .wts-cost-factor-grid article {
    display: grid;
    grid-template-columns: 21px minmax(0, 1fr);
    gap: 11px;
    align-items: start;
    padding: 23px 0;
    border-bottom: 1px solid ${palette.line};
  }

  .wts-cost-factor-grid article > svg {
    margin-top: 3px;
    color: ${palette.accentDark};
  }

  .wts-cost-factor-grid h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-cost-factor-grid p {
    margin-top: 6px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-timeline-panel {
    padding: 30px;
    border: 1px solid ${palette.lineStrong};
    border-radius: 28px;
    background: ${palette.soft};
  }

  .wts-timeline-panel__header > p {
    margin-top: 10px !important;
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.6;
  }

  .wts-timeline-stages {
    margin-top: 28px;
    border-top: 1px solid ${palette.lineStrong};
  }

  .wts-timeline-stages article {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 16px;
    align-items: start;
    padding: 20px 0;
  }

  .wts-timeline-stages article + article {
    border-top: 1px solid ${palette.line};
  }

  .wts-timeline-stages article > span {
    color: ${palette.accentDark};
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: 0.08em;
  }

  .wts-timeline-stages h3 {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.4;
  }

  .wts-timeline-stages p {
    margin-top: 5px !important;
    color: ${palette.body};
    font-size: 13px;
    line-height: 1.58;
  }

  .wts-timeline-note {
    display: grid;
    grid-template-columns: 28px minmax(0, 1fr);
    gap: 12px;
    align-items: start;
    margin-top: 20px;
    padding: 18px;
    border-radius: 18px;
    color: ${palette.accentDeep};
    background: ${palette.blush};
  }

  .wts-timeline-note p {
    font-size: 13px;
    line-height: 1.55;
  }

  .wts-assessment-band {
    display: flex;
    justify-content: space-between;
    gap: 48px;
    align-items: center;
    margin-top: 54px;
    padding: 34px 36px;
    border: 1px solid ${palette.lineStrong};
    border-radius: 26px;
    background: ${palette.white};
    box-shadow: 0 20px 50px rgba(47, 28, 39, 0.06);
  }

  .wts-assessment-band > div:first-child {
    max-width: 710px;
  }

  .wts-assessment-band h3 {
    font-size: 23px;
    font-weight: 600;
    line-height: 1.35;
  }

  .wts-assessment-band > div:first-child > p:last-child {
    margin-top: 8px !important;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.6;
  }

  .wts-assessment-band__actions {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .wts-faq {
    background: ${palette.soft};
  }

  .wts-faq-panel {
    max-width: 980px;
    margin: 54px auto 0;
    border: 1px solid ${palette.lineStrong};
    border-radius: 28px;
    background: ${palette.white};
    overflow: hidden;
  }

  .wts-faq-item + .wts-faq-item {
    border-top: 1px solid ${palette.line};
  }

  .wts-faq-item summary {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 28px;
    gap: 24px;
    align-items: center;
    min-height: 78px;
    padding: 22px 28px;
    cursor: pointer;
    list-style: none;
    font-size: 17px;
    font-weight: 600;
    line-height: 1.45;
  }

  .wts-faq-item summary::-webkit-details-marker {
    display: none;
  }

  .wts-faq-item summary:focus-visible {
    position: relative;
    z-index: 1;
    outline: 3px solid rgba(193, 29, 99, 0.24);
    outline-offset: -3px;
  }

  .wts-faq-item summary i {
    position: relative;
    display: block;
    width: 28px;
    height: 28px;
    border: 1px solid ${palette.lineStrong};
    border-radius: 50%;
  }

  .wts-faq-item summary i::before,
  .wts-faq-item summary i::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 1px;
    background: ${palette.accentDark};
    transform: translate(-50%, -50%);
    transition: transform 160ms ease;
  }

  .wts-faq-item summary i::after {
    transform: translate(-50%, -50%) rotate(90deg);
  }

  .wts-faq-item[open] summary i::after {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  .wts-faq-item[open] summary {
    color: ${palette.accentDeep};
  }

  .wts-faq-item__answer {
    padding: 0 72px 26px 28px;
  }

  .wts-faq-item__answer p {
    max-width: 840px;
    color: ${palette.body};
    font-size: 15px;
    line-height: 1.68;
  }

  .wts-faq-footer {
    display: flex;
    justify-content: space-between;
    gap: 32px;
    align-items: center;
    max-width: 980px;
    margin: 26px auto 0;
    padding-inline: 4px;
  }

  .wts-faq-footer > p {
    color: ${palette.body};
    font-size: 14px;
    line-height: 1.55;
  }

  @media (max-width: 1180px) {
    .wts-security-layout,
    .wts-cost-layout {
      gap: 42px;
    }

    .wts-certification-band {
      grid-template-columns: 1fr 1.6fr;
    }

    .wts-certification-band__links {
      grid-column: 1 / -1;
      flex-direction: row;
      gap: 24px;
    }
  }

  @media (max-width: 920px) {
    .wts-security-layout,
    .wts-cost-layout {
      grid-template-columns: 1fr;
    }

    .wts-control-visual {
      max-width: 760px;
      width: 100%;
      margin-inline: auto;
    }

    .wts-advantage-primary {
      grid-template-columns: 1fr;
    }

    .wts-advantage-primary__item + .wts-advantage-primary__item {
      border-top: 1px solid rgba(255, 255, 255, 0.14);
      border-left: 0;
    }

    .wts-advantage-supporting {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-assessment-band {
      align-items: flex-start;
      flex-direction: column;
      gap: 22px;
    }
  }

  @media (max-width: 700px) {
    .wts-security-layout,
    .wts-cost-layout {
      margin-top: 44px;
    }

    .wts-control-visual {
      padding: 22px;
      border-radius: 24px;
    }

    .wts-control-visual__header {
      align-items: flex-start;
      flex-direction: column;
      gap: 12px;
    }

    .wts-control-flow {
      grid-template-columns: 1fr;
      padding: 26px 0;
    }

    .wts-control-node {
      min-height: 0;
    }

    .wts-control-flow__arrow {
      transform: rotate(90deg);
    }

    .wts-control-metrics {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .wts-control-metrics > div {
      padding: 17px 10px;
    }

    .wts-control-metrics > div:nth-child(odd) {
      border-left: 0;
    }

    .wts-control-metrics > div:nth-child(n + 3) {
      border-top: 1px solid ${palette.line};
    }

    .wts-certification-band {
      grid-template-columns: 1fr;
      padding: 24px;
    }

    .wts-certification-band__items {
      grid-template-columns: 1fr;
    }

    .wts-certification-band__items > div,
    .wts-certification-band__items > div + div {
      padding: 16px 0;
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-certification-band__links {
      grid-column: auto;
      flex-direction: column;
      gap: 0;
    }

    .wts-advantage-primary {
      margin-top: 44px;
    }

    .wts-advantage-primary__item {
      padding: 30px 0;
    }

    .wts-advantage-supporting {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .wts-advantage-footer,
    .wts-faq-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 14px;
    }

    .wts-cost-factor-grid {
      grid-template-columns: 1fr;
    }

    .wts-timeline-panel,
    .wts-assessment-band {
      padding: 24px;
      border-radius: 24px;
    }

    .wts-faq-panel {
      margin-top: 44px;
      border-radius: 24px;
    }
  }

  @media (max-width: 480px) {
    .wts-security-capability {
      grid-template-columns: 42px minmax(0, 1fr);
    }

    .wts-control-metrics {
      grid-template-columns: 1fr;
    }

    .wts-control-metrics > div,
    .wts-control-metrics > div + div,
    .wts-control-metrics > div:nth-child(odd) {
      padding: 16px 0;
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-control-metrics > div:first-child {
      border-top: 0;
    }

    .wts-assessment-band__actions,
    .wts-assessment-band__actions .wts-button {
      width: 100%;
    }

    .wts-assessment-band__actions .wts-button {
      justify-content: center;
      text-align: center;
    }

    .wts-faq-item summary {
      grid-template-columns: minmax(0, 1fr) 28px;
      gap: 15px;
      min-height: 70px;
      padding: 20px;
      font-size: 16px;
    }

    .wts-faq-item__answer {
      padding: 0 20px 22px;
    }

    .wts-faq-item__answer p {
      font-size: 14px;
    }
  }


  @media (max-width: 1100px) {
    .wts-resource-layout {
      grid-template-columns: minmax(290px, 0.7fr) minmax(0, 1.3fr);
      gap: 24px;
    }

    .wts-resource-feature {
      padding: 34px;
    }

    .wts-resource-row {
      grid-template-columns: 38px minmax(0, 1fr) 18px;
      gap: 13px;
      padding: 23px 20px 24px;
    }

    .wts-final-cta__panel {
      gap: 42px;
      padding: 52px 48px;
    }
  }

  @media (max-width: 920px) {
    .wts-resource-layout,
    .wts-final-cta__panel {
      grid-template-columns: 1fr;
    }

    .wts-resource-feature {
      min-height: 420px;
    }

    .wts-final-cta__inputs {
      max-width: 760px;
    }
  }

  @media (max-width: 700px) {
    .wts-resource-layout {
      margin-top: 44px;
    }

    .wts-resource-feature {
      min-height: 0;
      padding: 30px;
      border-radius: 24px;
    }

    .wts-resource-feature__outline {
      grid-template-columns: 1fr;
    }

    .wts-resource-feature__outline > div,
    .wts-resource-feature__outline > div:nth-child(even),
    .wts-resource-feature__outline > div:nth-child(n + 3) {
      padding: 15px 0;
      border-left: 0;
      border-top: 1px solid rgba(193, 29, 99, 0.15);
    }

    .wts-resource-feature__outline > div:first-child {
      border-top: 0;
    }

    .wts-resource-index {
      grid-template-columns: 1fr;
      border-radius: 24px;
    }

    .wts-resource-row,
    .wts-resource-row:nth-child(even),
    .wts-resource-row:nth-child(n + 3) {
      grid-column: auto;
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-resource-row:first-child {
      border-top: 0;
    }

    .wts-resource-footer {
      align-items: flex-start;
      flex-direction: column;
      gap: 14px;
    }

    .wts-final-cta__panel {
      gap: 34px;
      padding: 36px 30px;
      border-radius: 26px;
    }

    .wts-final-cta__inputs {
      padding: 26px;
    }
  }

  @media (max-width: 480px) {
    .wts-resource-feature {
      padding: 26px 24px;
    }

    .wts-resource-feature h3 {
      font-size: 24px;
    }

    .wts-resource-row {
      grid-template-columns: 38px minmax(0, 1fr);
      padding: 22px 20px 23px;
    }

    .wts-resource-row > svg {
      display: none;
    }

    .wts-final-cta__panel {
      padding: 32px 22px;
    }

    .wts-final-cta__actions,
    .wts-final-cta__actions .wts-button {
      width: 100%;
    }

    .wts-final-cta__actions .wts-button {
      text-align: center;
    }

    .wts-final-cta__inputs {
      padding: 23px 20px;
    }

    .wts-final-cta__input-grid {
      grid-template-columns: 1fr;
    }

    .wts-final-cta__input-grid > div,
    .wts-final-cta__input-grid > div:nth-child(even),
    .wts-final-cta__input-grid > div:nth-child(n + 3) {
      padding: 15px 0;
      border-top: 1px solid ${palette.line};
      border-left: 0;
    }

    .wts-final-cta__input-grid > div:first-child {
      border-top: 0;
    }
  }


  @media (max-width: 480px) {
    .wts-decision-panel,
    .wts-review-band {
      min-width: 0;
    }

    .wts-decision-panel__intro,
    .wts-decision-panel__intro > div,
    .wts-decision-factors,
    .wts-review-band > div:not(.wts-review-band__icon) {
      min-width: 0;
      width: 100%;
    }

    .wts-decision-factors {
      grid-template-columns: 1fr;
    }

    .wts-decision-factor,
    .wts-decision-factor:nth-child(even),
    .wts-decision-factor:nth-child(n + 3) {
      margin-top: 0;
      padding: 16px 0;
      border-left: 0;
    }

    .wts-decision-factor:nth-child(n + 2) {
      border-top: 1px solid ${palette.line};
    }

    .wts-decision-panel > .wts-editorial-link,
    .wts-review-band .wts-editorial-link {
      max-width: 100%;
      white-space: normal;
    }

    .wts-decision-panel .wts-editorial-link span,
    .wts-review-band .wts-editorial-link span {
      min-width: 0;
      overflow-wrap: anywhere;
    }
  }


  /* Full-page typography readability pass
     Customer-facing explanations and decision guidance use a 16px minimum.
     Compact interface labels and genuine metadata remain smaller by design. */
  .wts-hero__support,
  .wts-challenge-row p,
  .wts-scope-item p,
  .wts-definition__footer-copy p,
  .wts-comparison-matrix__row > p,
  .wts-content-category__body > p,
  .wts-content-category__examples p,
  .wts-scope-principle p,
  .wts-model-row__cell p,
  .wts-decision-panel__intro p,
  .wts-decision-factor strong,
  .wts-decision-factor span,
  .wts-quality-route > p,
  .wts-quality-route__fit p,
  .wts-review-band p,
  .wts-process-step p,
  .wts-process-footer p,
  .wts-continuous-capability p,
  .wts-technology-group p,
  .wts-qa-capability p,
  .wts-integration-discovery p,
  .wts-integration-questions span,
  .wts-qa-footer > p,
  .wts-industry-column__intro,
  .wts-industry-link small,
  .wts-governance-capability p,
  .wts-governance-footer p,
  .wts-security-capability p,
  .wts-cost-factor-grid p,
  .wts-timeline-panel__header > p,
  .wts-timeline-stages p,
  .wts-timeline-note p,
  .wts-assessment-band > div:first-child > p:last-child,
  .wts-faq-item__answer p,
  .wts-faq-footer > p,
  .wts-resource-feature > p,
  .wts-resource-row p,
  .wts-resource-footer > p,
  .wts-final-cta__input-grid strong,
  .wts-final-cta__inputs > p {
    color: ${palette.body};
    font-size: 16px;
    line-height: 1.65;
  }

  .wts-benefit-item p,
  .wts-seo-item p,
  .wts-seo-footer p,
  .wts-advantage-primary__item p,
  .wts-advantage-supporting p,
  .wts-advantage-footer > p {
    font-size: 16px;
    line-height: 1.65;
  }

  .wts-benefit-item p,
  .wts-seo-item p {
    color: #D2CBD2;
  }

  .wts-seo-footer p,
  .wts-advantage-primary__item p,
  .wts-advantage-supporting p,
  .wts-advantage-footer > p {
    color: rgba(255, 255, 255, 0.76);
  }

  .wts-industry-link {
    min-height: 88px;
    padding-block: 18px;
  }

  .wts-industry-link strong {
    font-size: 17px;
    line-height: 1.38;
  }

  .wts-industry-link small {
    margin-top: 6px;
    color: ${palette.body};
    line-height: 1.55;
  }

  .wts-comparison-matrix__header span,
  .wts-proof-item span {
    font-size: 14px;
    line-height: 1.5;
  }

  .wts-comparison-matrix__row > strong,
  .wts-proof-item strong,
  .wts-editorial-link {
    font-size: 15px;
  }

  .wts-browser__body p,
  .wts-update-card p,
  .wts-search-page > p,
  .wts-language-visual__core > p,
  .wts-resource-feature__outline p,
  .wts-certification-band__items span {
    font-size: 14px;
    line-height: 1.55;
  }

  .wts-update-card strong,
  .wts-search-query strong,
  .wts-resource-feature__outline strong {
    font-size: 15px;
    line-height: 1.45;
  }

  .wts-continuous-flow strong,
  .wts-control-metrics strong {
    font-size: 14px;
    line-height: 1.4;
  }

  .wts-continuous-flow small,
  .wts-language-status strong {
    font-size: 12px;
    line-height: 1.45;
  }

  .wts-language-status span,
  .wts-search-markets strong,
  .wts-language-visual__top span,
  .wts-control-node > small {
    font-size: 13px;
    line-height: 1.5;
  }

  .wts-search-page__signals span,
  .wts-language-visual__channels span,
  .wts-tech-output strong {
    font-size: 11px;
    line-height: 1.35;
  }

  .wts-tech-workflow strong {
    font-size: 14px;
    line-height: 1.5;
  }

  .wts-certification-band__items strong {
    font-size: 16px;
  }

  .wts-qa-capability > div:last-child > span {
    color: ${palette.accentDark};
    font-size: 14px;
    line-height: 1.5;
  }

  .wts-security-capability span {
    font-size: 11px;
  }

  .wts-resource-feature__outline strong,
  .wts-final-cta__support {
    font-size: 15px;
  }

  .wts-final-cta__support {
    color: ${palette.body};
    line-height: 1.6;
  }

  @media (max-width: 920px) {
    .wts-quality-route,
    .wts-model-row__cell,
    .wts-industry-link,
    .wts-resource-row {
      min-width: 0;
    }
  }

  @media (max-width: 700px) {
    .wts-industry-link {
      min-height: 0;
      padding-block: 21px;
    }

    .wts-industry-link strong {
      font-size: 18px;
    }

    .wts-industry-link small {
      font-size: 16px;
      overflow-wrap: anywhere;
    }

    .wts-quality-route,
    .wts-model-row,
    .wts-resource-row {
      padding-top: 28px;
      padding-bottom: 28px;
    }
  }

`;

export default function WebsiteTranslationServicesWireframe() {
  return (
    <main className="wts-page">
      <style>{styles}</style>
      <HeroSection />
      <EnterpriseSection />
      <DefinitionSection />
      <ComparisonSection />
      <BenefitsSection />
      <ContentScopeSection />
      <TranslationModelsSection />
      <AiHumanSection />
      <TranslationProcessSection />
      <ContinuousTranslationSection />
      <MultilingualSeoSection />
      <TechnologySupportSection />
      <QualityAssuranceSection />
      <IndustriesSection />
      <GovernanceSection />
      <SecurityControlSection />
      <WhyStepesSection />
      <CostTimelineSection />
      <FaqSection />
      <WebsiteResourcesSection />
      <FinalCtaSection />
    </main>
  );
}
