import React from "react";

const ARROW_PATH = "M5 12h14M13 6l6 6-6 6";

function ArrowIcon({ className = "", white = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={ARROW_PATH}
        stroke={white ? "#FFFFFF" : "currentColor"}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m7 10 5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LineIcon({ name }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const paths = {
    document: (
      <g>
        <path {...common} d="M7 3.5h7l3 3V20H7z" />
        <path {...common} d="M14 3.5V7h3" />
        <path {...common} d="M9.5 11h5M9.5 14h5M9.5 17h3.5" />
      </g>
    ),
    website: (
      <g>
        <rect {...common} x="3.5" y="4" width="17" height="15.5" rx="2.5" />
        <path {...common} d="M3.5 8.5h17M7 6.25h.01M10 6.25h.01" />
        <path {...common} d="M7 12h4.5M7 15h7M15.5 11.5v4" />
      </g>
    ),
    software: (
      <g>
        <rect {...common} x="3.5" y="4" width="17" height="16" rx="2.5" />
        <path {...common} d="M8 9.5 5.8 12 8 14.5M16 9.5l2.2 2.5-2.2 2.5M13.5 8.5 10.5 15.5" />
      </g>
    ),
    technical: (
      <g>
        <path {...common} d="M13.8 4.2a4.4 4.4 0 0 0-5.2 5.6L4 14.4 9.6 20l4.6-4.6a4.4 4.4 0 0 0 5.6-5.2l-3.2 3.2-3-3z" />
      </g>
    ),
    media: (
      <g>
        <rect {...common} x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path {...common} d="m10 9 5 3-5 3z" />
        <path {...common} d="M6.5 3v2M17.5 3v2" />
      </g>
    ),
    certificate: (
      <g>
        <path {...common} d="M7 3.5h10v11H7z" />
        <path {...common} d="M9.5 7h5M9.5 10h5" />
        <circle {...common} cx="12" cy="16" r="3" />
        <path {...common} d="m10.2 18.4-.7 2.1 2.5-1 2.5 1-.7-2.1" />
      </g>
    ),
    globe: (
      <g>
        <circle {...common} cx="12" cy="12" r="8.5" />
        <path {...common} d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5M12 3.5C9.8 5.8 8.7 8.6 8.7 12s1.1 6.2 3.3 8.5" />
      </g>
    ),
    medical: (
      <g>
        <rect {...common} x="4" y="5.5" width="16" height="14" rx="3" />
        <path {...common} d="M9 5.5V4h6v1.5M12 9v6M9 12h6" />
      </g>
    ),
    shield: (
      <g>
        <path {...common} d="M12 3.5 19 6v5c0 4.6-2.7 7.6-7 9.5C7.7 18.6 5 15.6 5 11V6z" />
        <path {...common} d="m8.7 12 2.1 2.1 4.6-4.7" />
      </g>
    ),
    search: (
      <g>
        <circle {...common} cx="10.5" cy="10.5" r="6.5" />
        <path {...common} d="m15.5 15.5 4 4" />
      </g>
    ),
    workflow: (
      <g>
        <rect {...common} x="3.5" y="4" width="6" height="5" rx="1.2" />
        <rect {...common} x="14.5" y="15" width="6" height="5" rx="1.2" />
        <path {...common} d="M9.5 6.5h4a3 3 0 0 1 3 3V15M14.5 17.5h-4a3 3 0 0 1-3-3V9" />
      </g>
    ),
    quality: (
      <g>
        <circle {...common} cx="12" cy="12" r="8.5" />
        <path {...common} d="m8.5 12 2.2 2.2 4.8-4.9" />
      </g>
    ),
    people: (
      <g>
        <circle {...common} cx="9" cy="8.5" r="3" />
        <circle {...common} cx="17" cy="9.5" r="2.3" />
        <path {...common} d="M3.5 19c.4-3.6 2.2-5.5 5.5-5.5s5.1 1.9 5.5 5.5M14 14.2c2.8-.5 5.3.9 6 3.8" />
      </g>
    ),
    translate: (
      <g>
        <path {...common} d="M4 5h9M8.5 3v2M6 8.5c1.6 2.5 3.8 4.4 6.7 5.7M11.5 5c-.8 3.7-3.1 6.5-6.8 8.5" />
        <path {...common} d="m13.5 20 3.2-8 3.3 8M14.7 17h4" />
      </g>
    ),
    lock: (
      <g>
        <rect {...common} x="5" y="10" width="14" height="10" rx="2.5" />
        <path {...common} d="M8 10V7.5a4 4 0 0 1 8 0V10M12 14v2.5" />
      </g>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {paths[name] || paths.globe}
    </svg>
  );
}

const serviceGroups = [
  {
    icon: "document",
    title: "Portuguese Document Translation",
    description:
      "Translate business, legal, operational, financial, research, and regulatory documents while preserving structure, formatting, and usability.",
    items: [
      "Reports and presentations",
      "Contracts and corporate records",
      "Policies and employee communications",
      "Product literature and research content",
    ],
    href: "https://www.stepes.com/document-translation-services/",
    link: "Document Translation Services",
  },
  {
    icon: "website",
    title: "Portuguese Website Translation",
    description:
      "Build localized digital experiences for customers in Brazil, Portugal, and additional Portuguese-speaking markets.",
    items: [
      "Corporate and product websites",
      "Ecommerce and landing pages",
      "SEO metadata and navigation",
      "Help centers and customer portals",
    ],
    href: "https://www.stepes.com/website-translation-services/",
    link: "Website Translation Services",
  },
  {
    icon: "software",
    title: "Portuguese Software Localization",
    description:
      "Localize applications without disrupting technical syntax, interface context, or development and release cycles.",
    items: [
      "UI strings and mobile apps",
      "SaaS and desktop platforms",
      "Release notes and app-store content",
      "Linguistic and functional testing",
    ],
    href: "https://www.stepes.com/software-localization-services/",
    link: "Software Localization Services",
  },
  {
    icon: "technical",
    title: "Portuguese Technical Translation",
    description:
      "Protect technical meaning and terminology across the documentation used to install, operate, maintain, and service products.",
    items: [
      "User and installation manuals",
      "Engineering specifications",
      "Maintenance and safety procedures",
      "Schematics, labels, and training",
    ],
    href: "https://www.stepes.com/technical-translation-services/",
    link: "Technical Translation Services",
  },
  {
    icon: "media",
    title: "Portuguese Multimedia Localization",
    description:
      "Extend Portuguese localization to video, audio, webinars, and interactive learning with market-appropriate voices and delivery.",
    items: [
      "Subtitling and captioning",
      "Voiceover and dubbing",
      "Webinars and training videos",
      "E-learning and multimedia QA",
    ],
    href: "https://www.stepes.com/multimedia-translation-services/",
    link: "Multimedia Localization",
  },
  {
    icon: "certificate",
    title: "Certified Translation and Interpreting",
    description:
      "Support official documents, professional meetings, and specialized conversations with the appropriate Portuguese language service.",
    items: [
      "Certified document translation",
      "Business and technical meetings",
      "Remote and on-site interpreting",
      "Conferences and healthcare settings",
    ],
    href: "https://www.stepes.com/certified-translation-services/",
    link: "Certified Translation Services",
  },
];

const industries = [
  {
    title: "Healthcare and Life Sciences",
    description:
      "Medical devices, pharmaceuticals, clinical research, diagnostics, digital health, patient communications, eCOA, regulatory content, and medical software.",
    href: "https://www.stepes.com/medical-translation-services/",
    link: "Medical Translation Services",
  },
  {
    title: "Software, SaaS, and Artificial Intelligence",
    description:
      "User interfaces, mobile applications, cloud platforms, product documentation, AI assistants, multilingual data, customer support, and continuous localization.",
    href: "https://www.stepes.com/software-translation-services/",
    link: "Software and SaaS Translation",
  },
  {
    title: "Manufacturing, Engineering, and Aviation",
    description:
      "Operating manuals, work instructions, product specifications, safety documentation, maintenance procedures, training, and supply-chain communications.",
    href: "https://www.stepes.com/manufacturing-translation-services/",
    link: "Manufacturing Translation Services",
  },
  {
    title: "Energy and Natural Resources",
    description:
      "Oil and gas, renewable energy, utilities, power infrastructure, engineering documentation, environmental content, field operations, and workforce training.",
    href: "https://www.stepes.com/energy-translation-services/",
    link: "Energy Translation Services",
  },
  {
    title: "Financial Services and Fintech",
    description:
      "Banking applications, payment systems, insurance, customer communications, disclosures, compliance content, cybersecurity, and investor materials.",
    href: "https://www.stepes.com/financial-translation-services/",
    link: "Financial Translation Services",
  },
  {
    title: "Ecommerce and Retail",
    description:
      "Product catalogs, online marketplaces, storefronts, checkout experiences, campaigns, packaging, retail operations, returns, and customer support.",
    href: "https://www.stepes.com/retail-ecommerce-translation-services/",
    link: "Retail and Ecommerce Translation",
  },
  {
    title: "Legal and Compliance",
    description:
      "Commercial agreements, policies, privacy content, corporate governance, employment materials, investigations, and regulatory communications.",
    href: "https://www.stepes.com/legal-translation-services/",
    link: "Legal Translation Services",
  },
];

const comparisonRows = [
  {
    dimension: "Primary market",
    brazil: "Brazil",
    portugal: "Portugal",
  },
  {
    dimension: "Vocabulary and syntax",
    brazil: "Brazilian terminology and grammar conventions",
    portugal: "Portugal-specific terminology and grammar conventions",
  },
  {
    dimension: "Digital experience",
    brazil: "Brazilian UI, ecommerce, search, and support language",
    portugal: "Portugal-specific UI, search, and customer language",
  },
  {
    dimension: "Currency and formats",
    brazil: "Brazilian real and Brazilian date, number, and address formats",
    portugal: "Euro and Portuguese date, number, and address formats",
  },
  {
    dimension: "Regulatory language",
    brazil: "Brazilian agencies, institutions, and ANVISA terminology",
    portugal: "Portuguese and European Union institutions and terminology",
  },
  {
    dimension: "Multimedia",
    brazil: "Brazilian pronunciation, voice talent, and delivery",
    portugal: "European Portuguese pronunciation, voice talent, and delivery",
  },
];

const workflowSteps = [
  {
    title: "Define the Portuguese Market",
    description:
      "Confirm Brazil, Portugal, multiple Portuguese locales, or another Lusophone audience before language assets and reviewers are assigned.",
  },
  {
    title: "Analyze the Content",
    description:
      "Evaluate file formats, volume, subject matter, audience, reuse, risk, security, quality requirements, and delivery schedule.",
  },
  {
    title: "Prepare Terminology and References",
    description:
      "Apply existing translation memories, glossaries, style guides, screenshots, product references, and previously approved content.",
  },
  {
    title: "Select the Translation Workflow",
    description:
      "Choose human translation, AI-assisted translation, post-editing, independent review, subject-matter validation, or certified translation.",
  },
  {
    title: "Translate and Localize",
    description:
      "Native Portuguese linguists work with the approved terminology, market conventions, context, and content-specific instructions.",
  },
  {
    title: "Validate Quality",
    description:
      "Perform linguistic review, automated QA, terminology checks, numerical validation, layout review, or functional testing as required.",
  },
  {
    title: "Review and Approve",
    description:
      "Give customer reviewers a structured way to resolve terminology decisions, provide feedback, and approve the final content.",
  },
  {
    title: "Deliver and Reuse",
    description:
      "Return content in the required format and retain approved translations and terminology for future releases and related projects.",
  },
];

const reasons = [
  [
    "Brazilian and European Portuguese Expertise",
    "Stepes treats pt-BR and pt-PT as distinct locales, helping prevent mixed terminology and market-inappropriate language.",
  ],
  [
    "Native, Subject-Matter-Qualified Linguists",
    "Translators and reviewers are selected according to the intended market, content type, industry, and required expertise.",
  ],
  [
    "AI-Powered Efficiency With Human Control",
    "Use AI where it adds speed and scale, with professional linguistic governance matched to customer visibility and content risk.",
  ],
  [
    "Regulated and Technical Content Support",
    "Specialized workflows support life sciences, software, engineering, manufacturing, energy, finance, and other terminology-intensive fields.",
  ],
  [
    "Terminology and Translation Memory",
    "Approved language assets improve consistency, reuse, turnaround, and control across products, teams, markets, and channels.",
  ],
  [
    "Connected Enterprise Workflows",
    "Portals, APIs, automation, role-based approvals, quality controls, and reporting support both one-time projects and continuous programs.",
  ],
];

const useCases = [
  {
    title: "Launch a Product in Brazil",
    description:
      "Coordinate Brazilian Portuguese websites, software, product documentation, labels, marketing, training, and customer support.",
  },
  {
    title: "Prepare Medical Content for Brazil",
    description:
      "Translate IFUs, labeling, regulatory content, patient materials, clinical documents, and healthcare software with specialized controls.",
  },
  {
    title: "Localize a SaaS Platform",
    description:
      "Manage product strings, help content, release notes, app-store assets, and support content through a continuous workflow.",
  },
  {
    title: "Support Manufacturing Operations",
    description:
      "Translate manuals, work instructions, safety procedures, quality documentation, training, and employee communications.",
  },
  {
    title: "Expand Ecommerce Operations",
    description:
      "Localize product discovery, catalogs, checkout, payment messages, delivery information, returns, and customer support.",
  },
  {
    title: "Serve Brazil and Portugal",
    description:
      "Maintain separate pt-BR and pt-PT terminology, translation memories, metadata, testing, and approvals within one program.",
  },
];

const faqs = [
  {
    question: "What is the difference between Brazilian and European Portuguese?",
    answer:
      "Brazilian and European Portuguese differ in vocabulary, grammar, syntax, pronunciation, tone, forms of address, and common digital terminology. The differences are noticeable in marketing, software, ecommerce, technical documentation, and regulated content. Stepes manages the two variants as separate locales with market-specific linguists, terminology, translation memories, and review processes.",
  },
  {
    question: "Which Portuguese variant should my company use?",
    answer:
      "Content for Brazil should normally use Brazilian Portuguese, or pt-BR. Content for Portugal should use European Portuguese, or pt-PT. Content for Angola, Mozambique, and other Portuguese-speaking markets may require additional market review. Stepes confirms the country, audience, industry, and use case before configuring the workflow.",
  },
  {
    question: "Can one Portuguese translation be used in both Brazil and Portugal?",
    answer:
      "A single version may be understandable in both countries, but it is rarely the best choice for polished customer-facing or professional content. Market-specific terminology, tone, formatting, search language, and regulatory references can affect acceptance and usability. Organizations serving both markets should usually maintain separate versions.",
  },
  {
    question: "Does Stepes translate both English to Portuguese and Portuguese to English?",
    answer:
      "Yes. Stepes supports English-to-Portuguese, Portuguese-to-English, and Portuguese translation involving other supported languages. Linguists are selected according to the language direction, target locale, industry, and intended use.",
  },
  {
    question: "Does Stepes provide certified Portuguese translations?",
    answer:
      "Yes. Stepes can provide a signed certificate of translation for qualifying projects. Requirements may differ by court, regulator, university, government agency, or other receiving authority, so the intended use should be confirmed before translation.",
  },
  {
    question: "Can Stepes translate medical-device labeling for Brazil?",
    answer:
      "Yes. Stepes translates Brazilian Portuguese labels, instructions for use, user manuals, regulatory materials, safety content, and medical-device software. Workflows can include specialist translation, independent review, approved terminology, automated QA, layout validation, and certificates of translation.",
  },
  {
    question: "Does ANVISA require medical-device information in Portuguese?",
    answer:
      "Brazilian medical-device regulations require relevant label and instructions-for-use information to be available in Portuguese. Exact documentation requirements depend on the product and regulatory pathway, so companies should confirm current requirements with qualified regulatory professionals.",
  },
  {
    question: "Can Stepes localize Portuguese websites for SEO?",
    answer:
      "Yes. Portuguese website localization can include market-specific keyword research, page content, metadata, headings, navigation, calls to action, image text, forms, help content, and ongoing updates. Brazilian and European Portuguese SEO should be planned separately because search terminology and user intent can differ.",
  },
  {
    question: "Does Stepes provide Portuguese software and mobile-app localization?",
    answer:
      "Yes. Stepes supports user-interface strings, resource files, app-store content, documentation, help centers, release notes, linguistic testing, and continuous localization. Technical controls help protect placeholders, variables, tags, and other non-translatable elements.",
  },
  {
    question: "Can AI translation be used for Portuguese content?",
    answer:
      "Yes, but the workflow should reflect the content’s risk and required quality. AI may be suitable for internal or low-risk content, while customer-facing, technical, medical, legal, and regulated content normally requires professional review. Stepes applies locale-specific terminology and native validation to reduce the risk of mixed Brazilian and European Portuguese.",
  },
  {
    question: "How does Stepes prevent Brazilian and European Portuguese from being mixed?",
    answer:
      "Stepes can use separate locale codes, translation memories, glossaries, style guides, AI instructions, linguist teams, and QA rules for pt-BR and pt-PT. These controls help identify and prevent terms from the wrong market from entering the translation.",
  },
  {
    question: "Which industries do your Portuguese translators specialize in?",
    answer:
      "Stepes supports healthcare and life sciences, software and SaaS, artificial intelligence, manufacturing, engineering, aviation, energy, financial services, ecommerce, legal services, and other specialized industries. Linguists are assigned according to language qualifications and subject-matter experience.",
  },
  {
    question: "How much does Portuguese translation cost?",
    answer:
      "Portuguese translation rates vary by locale, source language, word volume, file format, subject matter, turnaround, repetition, and required review process. English-to-Portuguese translation cost can also change according to whether the content needs AI-assisted translation, professional post-editing, independent review, desktop publishing, or regulated-content controls. Translation memory can reduce the amount of repeated content requiring new translation.",
    linkHref: "https://www.stepes.com/resources/localization-guides/portuguese-translation-cost-guide/",
    linkLabel: "Portuguese Translation Cost Guide",
  },
  {
    question: "How quickly can Portuguese translation be completed?",
    answer:
      "Turnaround depends on content volume, complexity, file preparation, and quality requirements. Stepes can use multiple qualified linguists, translation memory, workflow automation, and appropriate AI assistance to accelerate large projects while maintaining terminology and review controls.",
  },
  {
    question: "Which Portuguese-speaking markets does Stepes support?",
    answer:
      "Stepes supports Brazilian Portuguese, European Portuguese, and Portuguese for additional markets such as Angola, Mozambique, Cabo Verde, Guinea-Bissau, São Tomé and Príncipe, Equatorial Guinea, and Timor-Leste. Market-specific review may be recommended depending on the audience and content.",
  },
  {
    question: "Can Stepes manage recurring Portuguese translation programs?",
    answer:
      "Yes. Stepes supports ongoing websites, software releases, product documentation, customer support, regulatory updates, marketing content, and other continuous programs. APIs, connectors, translation memory, terminology management, approval workflows, and reporting can be combined into a scalable enterprise solution.",
  },
  {
    question: "How does Stepes protect confidential Portuguese content?",
    answer:
      "Security controls can include secure file handling, role-based access, controlled reviewer permissions, defined workflows, and traceable approvals. Specific security and governance requirements are reviewed when configuring the program.",
  },
  {
    question: "Can our in-country reviewers participate in the approval process?",
    answer:
      "Yes. Your in-country linguists, local employees, product specialists, legal teams, and regulatory reviewers can participate through defined review and approval steps. Their decisions can be captured and incorporated into terminology resources for future projects.",
  },
];

function EditorialLink({ href, children }) {
  return (
    <a className="pt-editorial-link" href={href}>
      <span>{children}</span>
      <ArrowIcon />
    </a>
  );
}

function HeroVisual() {
  return (
    <div
      className="pt-hero-visual"
      role="img"
      aria-label="Conceptual Portuguese localization workflow showing Brazilian Portuguese and European Portuguese content moving through terminology, review, and approval."
    >
      <div className="pt-visual-glow pt-visual-glow-one" aria-hidden="true" />
      <div className="pt-visual-glow pt-visual-glow-two" aria-hidden="true" />
      <div className="pt-visual-shell">
        <div className="pt-visual-header">
          <div>
            <span className="pt-interface-kicker">PORTUGUESE CONTENT OPERATIONS</span>
            <strong>Market-specific localization</strong>
          </div>
          <div className="pt-live-state"><span />Active</div>
        </div>

        <div className="pt-locale-tabs" aria-hidden="true">
          <span className="is-active">pt-BR</span>
          <span>pt-PT</span>
          <span>Lusophone review</span>
        </div>

        <div className="pt-visual-workspace">
          <div className="pt-content-preview">
            <span className="pt-interface-label">SOURCE CONTENT</span>
            <strong>Launch your product with clarity.</strong>
            <p>Website · Software · Product documentation</p>
            <div className="pt-copy-lines" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="pt-flow-arrow" aria-hidden="true">
            <span />
            <ArrowIcon />
          </div>

          <div className="pt-content-preview is-localized">
            <span className="pt-interface-label">BRAZILIAN PORTUGUESE</span>
            <strong>Lance seu produto com clareza.</strong>
            <p>Terminology matched · Market tone applied</p>
            <div className="pt-quality-row">
              <span><CheckIcon />Terminology</span>
              <span><CheckIcon />Locale</span>
            </div>
          </div>
        </div>

        <div className="pt-visual-controls">
          <div>
            <span className="pt-control-icon"><LineIcon name="translate" /></span>
            <p><strong>Separate locale assets</strong><span>pt-BR and pt-PT</span></p>
          </div>
          <div>
            <span className="pt-control-icon"><LineIcon name="quality" /></span>
            <p><strong>Native expert review</strong><span>Market and subject matter</span></p>
          </div>
          <div>
            <span className="pt-control-icon"><LineIcon name="shield" /></span>
            <p><strong>Approved for delivery</strong><span>Quality checks complete</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortugueseTranslationServicesPillarWireframe() {
  return (
    <main className="pt-page">
      <style>{`
        .pt-page,
        .pt-page * {
          box-sizing: border-box;
        }

        .pt-page {
          --pt-magenta: #C11D63;
          --pt-magenta-hover: #A71954;
          --pt-magenta-dark: #7A1542;
          --pt-blush: #FDF2F7;
          --pt-dark: #17141B;
          --pt-ink: #171820;
          --pt-copy: #555B67;
          --pt-muted: #727884;
          --pt-line: #E6E7EB;
          --pt-soft: #F7F7F9;
          --pt-white: #FFFFFF;
          width: 100%;
          overflow-x: clip;
          background: #FFFFFF;
          color: var(--pt-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          -webkit-font-smoothing: antialiased;
          text-rendering: optimizeLegibility;
        }

        .pt-page a {
          color: inherit;
          text-decoration: none;
        }

        .pt-page button,
        .pt-page summary,
        .pt-page a {
          -webkit-tap-highlight-color: transparent;
        }

        .pt-shell {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }

        .pt-section {
          padding-top: 68px;
          padding-bottom: 68px;
        }

        .pt-section-soft {
          background: #F8F8FA;
        }

        .pt-section-blush {
          background: linear-gradient(180deg, #FFF9FC 0%, #FDF2F7 100%);
        }

        .pt-section-dark {
          background: var(--pt-dark);
          color: #FFFFFF;
        }

        .pt-eyebrow {
          margin: 0 0 15px;
          color: var(--pt-magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .pt-section-dark .pt-eyebrow {
          color: #F2A7C6;
        }

        .pt-page h1,
        .pt-page h2,
        .pt-page h3,
        .pt-page p {
          margin-top: 0;
        }

        .pt-page h1,
        .pt-page h2,
        .pt-page h3 {
          color: var(--pt-ink);
          font-weight: 600;
          letter-spacing: -0.035em;
        }

        .pt-page h1 {
          margin-bottom: 24px;
          font-size: 38px;
          line-height: 1.06;
        }

        .pt-page h2 {
          margin-bottom: 22px;
          font-size: 30px;
          line-height: 1.1;
        }

        .pt-page h3 {
          margin-bottom: 13px;
          font-size: 20px;
          line-height: 1.22;
        }

        .pt-section-dark h2,
        .pt-section-dark h3 {
          color: #FFFFFF;
        }

        .pt-lead,
        .pt-section-intro {
          color: var(--pt-copy);
          font-size: 18px;
          font-weight: 400;
          line-height: 1.75;
        }

        .pt-section-dark .pt-section-intro,
        .pt-section-dark p {
          color: #C8C4CD;
        }

        .pt-body,
        .pt-page li,
        .pt-page td,
        .pt-page th,
        .pt-page summary,
        .pt-page details p {
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-body {
          color: var(--pt-copy);
        }

        .pt-section-heading {
          max-width: 820px;
          margin-bottom: 46px;
        }

        .pt-section-heading.is-centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .pt-section-heading.is-centered .pt-section-intro {
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
        }

        .pt-primary-button,
        .pt-primary-button:link,
        .pt-primary-button:visited,
        .pt-primary-button:hover,
        .pt-primary-button:active,
        .pt-primary-button:focus,
        .pt-primary-button:focus-visible {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid var(--pt-magenta);
          border-radius: 999px;
          background: var(--pt-magenta);
          padding: 12px 22px;
          color: #FFFFFF !important;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          box-shadow: 0 12px 30px rgba(193, 29, 99, 0.16);
          transition: transform 180ms ease, background 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .pt-primary-button *,
        .pt-primary-button:link *,
        .pt-primary-button:visited *,
        .pt-primary-button:hover *,
        .pt-primary-button:active *,
        .pt-primary-button:focus *,
        .pt-primary-button:focus-visible * {
          color: #FFFFFF !important;
          stroke: #FFFFFF !important;
        }

        .pt-primary-button:hover {
          background: var(--pt-magenta-hover);
          border-color: var(--pt-magenta-hover);
          transform: translateY(-1px);
          box-shadow: 0 15px 34px rgba(193, 29, 99, 0.21);
        }

        .pt-secondary-button {
          display: inline-flex;
          min-height: 48px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border: 1px solid #D7D8DE;
          border-radius: 999px;
          background: #FFFFFF;
          padding: 12px 22px;
          color: #252833;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.3;
          transition: transform 180ms ease, border-color 180ms ease, color 180ms ease, box-shadow 180ms ease;
        }

        .pt-secondary-button:hover {
          border-color: rgba(193, 29, 99, 0.42);
          color: var(--pt-magenta-dark);
          transform: translateY(-1px);
          box-shadow: 0 10px 28px rgba(21, 22, 27, 0.07);
        }

        .pt-primary-button:focus-visible,
        .pt-secondary-button:focus-visible,
        .pt-editorial-link:focus-visible,
        .pt-faq-item summary:focus-visible {
          outline: 3px solid rgba(193, 29, 99, 0.25);
          outline-offset: 4px;
        }

        .pt-primary-button svg,
        .pt-secondary-button svg {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
        }

        .pt-editorial-link {
          display: inline-flex;
          min-height: 44px;
          align-items: center;
          gap: 8px;
          color: var(--pt-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .pt-editorial-link svg {
          width: 17px;
          height: 17px;
          transition: transform 180ms ease;
        }

        .pt-editorial-link:hover {
          color: var(--pt-magenta-hover);
        }

        .pt-editorial-link:hover svg {
          transform: translateX(3px);
        }

        .pt-section-dark .pt-editorial-link {
          color: #F2A7C6;
        }

        .pt-section-dark .pt-editorial-link:hover {
          color: #FFFFFF;
        }

        .pt-link-group {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 6px;
          margin-top: 23px;
        }

        .pt-link-group .pt-editorial-link {
          margin-top: 0;
        }

        .pt-hero {
          position: relative;
          overflow: hidden;
          background: #FFFFFF;
          padding-top: 76px;
          padding-bottom: 72px;
        }

        .pt-hero::before {
          position: absolute;
          top: -160px;
          right: -150px;
          width: 430px;
          height: 430px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(193, 29, 99, 0.08), rgba(193, 29, 99, 0) 68%);
          content: "";
          pointer-events: none;
        }

        .pt-hero-grid {
          position: relative;
          display: grid;
          gap: 48px;
          align-items: center;
        }

        .pt-hero-copy {
          max-width: 690px;
        }

        .pt-hero .pt-lead {
          max-width: 665px;
          margin-bottom: 30px;
        }

        .pt-hero-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .pt-hero-proof {
          display: grid;
          gap: 12px;
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--pt-line);
        }

        .pt-hero-proof span {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          color: #4F5561;
          font-size: 16px;
          line-height: 1.55;
        }

        .pt-hero-proof svg {
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          margin-top: 2px;
          color: var(--pt-magenta);
        }

        .pt-hero-visual {
          position: relative;
          min-width: 0;
          border: 1px solid #E8DDE3;
          border-radius: 30px;
          background: linear-gradient(145deg, #FFF8FB 0%, #FDF2F7 56%, #FFFFFF 100%);
          padding: 18px;
          box-shadow: 0 28px 70px rgba(35, 24, 31, 0.12);
        }

        .pt-visual-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }

        .pt-visual-glow-one {
          top: -20px;
          right: 8%;
          width: 130px;
          height: 130px;
          background: rgba(193, 29, 99, 0.08);
          filter: blur(2px);
        }

        .pt-visual-glow-two {
          bottom: 5%;
          left: -24px;
          width: 100px;
          height: 100px;
          background: rgba(122, 21, 66, 0.07);
        }

        .pt-visual-shell {
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.82);
          border-radius: 23px;
          background: rgba(255, 255, 255, 0.93);
          box-shadow: 0 16px 44px rgba(31, 25, 29, 0.08);
        }

        .pt-visual-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          padding: 20px 20px 16px;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-interface-kicker,
        .pt-interface-label {
          display: block;
          color: var(--pt-magenta);
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.12em;
        }

        .pt-visual-header strong {
          display: block;
          margin-top: 6px;
          color: #22242C;
          font-size: 17px;
          font-weight: 600;
          line-height: 1.35;
        }

        .pt-live-state {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          border-radius: 999px;
          background: #F6F7F8;
          padding: 7px 10px;
          color: #5C626D;
          font-size: 14px;
          line-height: 1;
          white-space: nowrap;
        }

        .pt-live-state > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2AA56F;
          box-shadow: 0 0 0 3px rgba(42, 165, 111, 0.12);
        }

        .pt-locale-tabs {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 13px 16px;
          border-bottom: 1px solid var(--pt-line);
          scrollbar-width: none;
        }

        .pt-locale-tabs::-webkit-scrollbar {
          display: none;
        }

        .pt-locale-tabs span {
          flex: 0 0 auto;
          border-radius: 999px;
          background: #F5F5F7;
          padding: 7px 11px;
          color: #636873;
          font-size: 14px;
          font-weight: 600;
        }

        .pt-locale-tabs span.is-active {
          background: var(--pt-magenta);
          color: #FFFFFF;
        }

        .pt-visual-workspace {
          display: grid;
          gap: 12px;
          padding: 18px;
        }

        .pt-content-preview {
          border: 1px solid var(--pt-line);
          border-radius: 18px;
          background: #FFFFFF;
          padding: 17px;
        }

        .pt-content-preview.is-localized {
          border-color: rgba(193, 29, 99, 0.24);
          background: #FFF9FC;
        }

        .pt-content-preview strong {
          display: block;
          margin-top: 9px;
          color: #22242C;
          font-size: 16px;
          line-height: 1.45;
        }

        .pt-content-preview p {
          margin: 7px 0 0;
          color: #737884;
          font-size: 14px;
          line-height: 1.5;
        }

        .pt-copy-lines {
          display: grid;
          gap: 7px;
          margin-top: 15px;
        }

        .pt-copy-lines span {
          display: block;
          height: 6px;
          border-radius: 999px;
          background: #E9EAED;
        }

        .pt-copy-lines span:nth-child(2) {
          width: 83%;
        }

        .pt-copy-lines span:nth-child(3) {
          width: 64%;
        }

        .pt-flow-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--pt-magenta);
        }

        .pt-flow-arrow > span {
          width: 28px;
          height: 1px;
          background: rgba(193, 29, 99, 0.34);
        }

        .pt-flow-arrow svg {
          width: 18px;
          height: 18px;
        }

        .pt-quality-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 14px;
        }

        .pt-quality-row span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          border-radius: 999px;
          background: #FFFFFF;
          padding: 6px 9px;
          color: #555B67;
          font-size: 14px;
          font-weight: 600;
        }

        .pt-quality-row svg {
          width: 14px;
          height: 14px;
          color: var(--pt-magenta);
        }

        .pt-visual-controls {
          display: grid;
          border-top: 1px solid var(--pt-line);
        }

        .pt-visual-controls > div {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 14px 17px;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-visual-controls > div:last-child {
          border-bottom: 0;
        }

        .pt-control-icon {
          display: inline-flex;
          width: 36px;
          height: 36px;
          flex: 0 0 36px;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--pt-blush);
          color: var(--pt-magenta);
        }

        .pt-control-icon svg {
          width: 19px;
          height: 19px;
        }

        .pt-visual-controls p {
          margin: 0;
          line-height: 1.35;
        }

        .pt-visual-controls strong,
        .pt-visual-controls span {
          display: block;
        }

        .pt-visual-controls strong {
          color: #272A32;
          font-size: 14px;
          font-weight: 600;
        }

        .pt-visual-controls p > span {
          margin-top: 3px;
          color: #7B8089;
          font-size: 14px;
        }

        .pt-trust-band {
          background: #FFFFFF;
          border-top: 1px solid var(--pt-line);
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-trust-grid {
          display: grid;
        }

        .pt-trust-item {
          padding: 22px 0;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-trust-item:last-child {
          border-bottom: 0;
        }

        .pt-trust-item strong,
        .pt-trust-item span {
          display: block;
        }

        .pt-trust-item strong {
          color: #262932;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
        }

        .pt-trust-item span {
          margin-top: 5px;
          color: #6D727D;
          font-size: 16px;
          line-height: 1.5;
        }

        .pt-overview-grid {
          display: grid;
          gap: 42px;
          align-items: start;
        }

        .pt-overview-copy .pt-body + .pt-body {
          margin-top: 20px;
        }

        .pt-stat-grid {
          display: grid;
          border-top: 1px solid var(--pt-line);
          border-left: 1px solid var(--pt-line);
        }

        .pt-stat {
          min-width: 0;
          padding: 24px;
          border-right: 1px solid var(--pt-line);
          border-bottom: 1px solid var(--pt-line);
          background: #FFFFFF;
        }

        .pt-stat strong {
          display: block;
          color: var(--pt-magenta-dark);
          font-size: 32px;
          font-weight: 600;
          letter-spacing: -0.04em;
          line-height: 1;
        }

        .pt-stat span {
          display: block;
          margin-top: 11px;
          color: #555B67;
          font-size: 16px;
          line-height: 1.55;
        }

        .pt-digital-list {
          display: grid;
          gap: 0;
          margin-top: 30px;
          border-top: 1px solid var(--pt-line);
        }

        .pt-digital-list span {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 13px 0;
          border-bottom: 1px solid var(--pt-line);
          color: #4E5460;
          font-size: 16px;
          line-height: 1.55;
        }

        .pt-digital-list svg {
          width: 18px;
          height: 18px;
          flex: 0 0 18px;
          margin-top: 3px;
          color: var(--pt-magenta);
        }

        .pt-locale-grid {
          display: grid;
          gap: 20px;
          margin-top: 42px;
        }

        .pt-locale-card {
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.045);
          padding: 27px;
        }

        .pt-locale-tag {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: rgba(242, 167, 198, 0.12);
          padding: 7px 11px;
          color: #F2A7C6;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
        }

        .pt-locale-card h3 {
          margin-top: 20px;
        }

        .pt-locale-card p {
          margin-bottom: 0;
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-comparison-wrap {
          overflow-x: auto;
          margin-top: 26px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 24px;
          background: rgba(255, 255, 255, 0.035);
        }

        .pt-comparison-table {
          width: 100%;
          min-width: 720px;
          border-collapse: collapse;
        }

        .pt-comparison-table th,
        .pt-comparison-table td {
          padding: 17px 20px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          text-align: left;
          vertical-align: top;
        }

        .pt-comparison-table tr:last-child td {
          border-bottom: 0;
        }

        .pt-comparison-table th {
          color: #FFFFFF;
          font-weight: 600;
        }

        .pt-comparison-table th:first-child,
        .pt-comparison-table td:first-child {
          width: 28%;
          color: #F2A7C6;
          font-weight: 600;
        }

        .pt-comparison-table td {
          color: #D2CED6;
        }

        .pt-comparison-mobile {
          display: none;
        }

        .pt-market-grid {
          display: grid;
          gap: 20px;
        }

        .pt-market-panel {
          border-top: 2px solid var(--pt-magenta);
          padding-top: 24px;
        }

        .pt-market-panel .pt-body {
          margin-bottom: 20px;
        }

        .pt-market-panel ul,
        .pt-service-item ul,
        .pt-regulatory-list,
        .pt-feature-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .pt-market-panel li,
        .pt-service-item li,
        .pt-regulatory-list li,
        .pt-feature-list li {
          position: relative;
          padding-left: 18px;
          color: #555B67;
        }

        .pt-market-panel li + li,
        .pt-service-item li + li,
        .pt-regulatory-list li + li,
        .pt-feature-list li + li {
          margin-top: 8px;
        }

        .pt-market-panel li::before,
        .pt-service-item li::before,
        .pt-regulatory-list li::before,
        .pt-feature-list li::before {
          position: absolute;
          top: 0.78em;
          left: 0;
          width: 6px;
          height: 1.5px;
          background: var(--pt-magenta);
          content: "";
        }

        .pt-services-list {
          overflow: hidden;
          border: 1px solid var(--pt-line);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 50px rgba(20, 22, 29, 0.05);
        }

        .pt-service-item {
          display: grid;
          gap: 18px;
          padding: 27px;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-service-item:last-child {
          border-bottom: 0;
        }

        .pt-service-head {
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .pt-icon-box {
          display: inline-flex;
          width: 46px;
          height: 46px;
          flex: 0 0 46px;
          align-items: center;
          justify-content: center;
          border-radius: 15px;
          background: var(--pt-blush);
          color: var(--pt-magenta);
        }

        .pt-icon-box svg {
          width: 23px;
          height: 23px;
        }

        .pt-service-head h3 {
          margin: 3px 0 0;
        }

        .pt-service-item .pt-body {
          margin-bottom: 17px;
        }

        .pt-service-item ul {
          display: grid;
          gap: 6px;
        }

        .pt-service-item .pt-editorial-link {
          margin-top: 18px;
        }

        .pt-industry-list {
          display: grid;
          border-top: 1px solid var(--pt-line);
        }

        .pt-industry-row {
          display: grid;
          gap: 18px;
          padding: 26px 0;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-industry-row h3 {
          margin-bottom: 0;
        }

        .pt-industry-row .pt-body {
          margin: 0;
        }

        .pt-regulatory-panel {
          overflow: hidden;
          border: 1px solid #E8D8E0;
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 22px 56px rgba(57, 29, 45, 0.08);
        }

        .pt-regulatory-layout {
          display: grid;
        }

        .pt-regulatory-copy,
        .pt-regulatory-details {
          padding: 28px;
        }

        .pt-regulatory-copy {
          background: linear-gradient(150deg, #FFF8FB 0%, #FDF2F7 100%);
        }

        .pt-regulatory-copy .pt-body + .pt-body {
          margin-top: 18px;
        }

        .pt-regulatory-quote {
          margin-top: 26px;
          border-left: 3px solid var(--pt-magenta);
          padding-left: 18px;
          color: #343640;
          font-size: 18px;
          line-height: 1.65;
        }

        .pt-regulatory-details {
          border-top: 1px solid var(--pt-line);
        }

        .pt-regulatory-details h3:not(:first-child) {
          margin-top: 30px;
        }

        .pt-regulatory-links {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 8px;
          margin-top: 26px;
        }

        .pt-digital-pair {
          display: grid;
          overflow: hidden;
          border: 1px solid var(--pt-line);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 50px rgba(20, 22, 29, 0.05);
        }

        .pt-digital-panel {
          padding: 28px;
        }

        .pt-digital-panel + .pt-digital-panel {
          border-top: 1px solid var(--pt-line);
        }

        .pt-digital-panel .pt-icon-box {
          margin-bottom: 22px;
        }

        .pt-digital-panel .pt-body {
          margin-bottom: 20px;
        }

        .pt-feature-list {
          display: grid;
          gap: 7px;
        }

        .pt-digital-panel .pt-editorial-link {
          margin-top: 23px;
        }

        .pt-digital-panel .pt-link-group .pt-editorial-link {
          margin-top: 0;
        }

        .pt-ai-layout {
          display: grid;
          gap: 28px;
        }

        .pt-ai-intro {
          max-width: 480px;
        }

        .pt-ai-intro .pt-section-intro {
          margin-bottom: 25px;
        }

        .pt-ai-risk {
          display: grid;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.11);
          border-radius: 27px;
          background: rgba(255, 255, 255, 0.04);
        }

        .pt-risk-row {
          padding: 24px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pt-risk-row:last-child {
          border-bottom: 0;
        }

        .pt-risk-level {
          display: inline-block;
          color: #F2A7C6;
          font-size: 11px;
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .pt-risk-row h3 {
          margin-top: 10px;
        }

        .pt-risk-row p {
          margin: 0;
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-ai-controls {
          display: grid;
          gap: 12px;
          margin-top: 28px;
        }

        .pt-ai-control {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .pt-ai-control:last-child {
          border-bottom: 0;
        }

        .pt-ai-control svg {
          width: 19px;
          height: 19px;
          flex: 0 0 19px;
          margin-top: 3px;
          color: #F2A7C6;
        }

        .pt-ai-control strong,
        .pt-ai-control span {
          display: block;
        }

        .pt-ai-control strong {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .pt-ai-control span {
          margin-top: 4px;
          color: #C8C4CD;
          font-size: 16px;
          line-height: 1.6;
        }

        .pt-governance-grid {
          display: grid;
          overflow: hidden;
          border: 1px solid var(--pt-line);
          border-radius: 30px;
          background: #FFFFFF;
        }

        .pt-governance-column {
          padding: 28px;
        }

        .pt-governance-column + .pt-governance-column {
          border-top: 1px solid var(--pt-line);
        }

        .pt-governance-column .pt-body {
          margin-bottom: 24px;
        }

        .pt-governance-list {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--pt-line);
        }

        .pt-governance-list > div {
          padding: 17px 0;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-governance-list strong,
        .pt-governance-list span {
          display: block;
        }

        .pt-governance-list strong {
          color: #292C34;
          font-size: 16px;
          font-weight: 600;
        }

        .pt-governance-list span {
          margin-top: 5px;
          color: #646A75;
          font-size: 16px;
          line-height: 1.65;
        }

        .pt-process {
          display: grid;
          border-top: 1px solid var(--pt-line);
        }

        .pt-process-step {
          display: grid;
          grid-template-columns: 44px minmax(0, 1fr);
          gap: 16px;
          padding: 24px 0;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-process-number {
          display: flex;
          width: 38px;
          height: 38px;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--pt-blush);
          color: var(--pt-magenta);
          font-size: 16px;
          font-weight: 600;
          line-height: 1;
        }

        .pt-process-step h3 {
          margin: 4px 0 8px;
        }

        .pt-process-step p {
          margin: 0;
          color: var(--pt-copy);
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-reason-grid {
          display: grid;
          overflow: hidden;
          border: 1px solid var(--pt-line);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 50px rgba(20, 22, 29, 0.045);
        }

        .pt-reason-item {
          padding: 27px;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-reason-item:last-child {
          border-bottom: 0;
        }

        .pt-reason-item h3 {
          margin-bottom: 10px;
        }

        .pt-reason-item p {
          margin: 0;
          color: var(--pt-copy);
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-usecase-grid {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--pt-line);
        }

        .pt-usecase {
          padding: 24px 0;
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-usecase h3 {
          margin-bottom: 9px;
        }

        .pt-usecase p {
          margin: 0;
          color: var(--pt-copy);
          font-size: 16px;
          line-height: 1.75;
        }

        .pt-faq-panel {
          overflow: hidden;
          border: 1px solid var(--pt-line);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 50px rgba(20, 22, 29, 0.045);
        }

        .pt-faq-item {
          border-bottom: 1px solid var(--pt-line);
        }

        .pt-faq-item:last-child {
          border-bottom: 0;
        }

        .pt-faq-item summary {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 24px;
          gap: 16px;
          align-items: center;
          min-height: 72px;
          padding: 21px 24px;
          color: #252831;
          font-weight: 600;
          cursor: pointer;
          list-style: none;
        }

        .pt-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .pt-faq-item summary svg {
          width: 22px;
          height: 22px;
          color: var(--pt-magenta);
          transition: transform 180ms ease;
        }

        .pt-faq-item[open] summary svg {
          transform: rotate(180deg);
        }

        .pt-faq-item p {
          max-width: 840px;
          margin: 0;
          padding: 0 24px 24px;
          color: var(--pt-copy);
        }

        .pt-faq-item .pt-editorial-link {
          margin: -10px 24px 22px;
        }

        .pt-final-section {
          padding-top: 68px;
          padding-bottom: 68px;
          background: #FFFFFF;
        }

        .pt-final-panel {
          overflow: hidden;
          border: 1px solid #E9DDE3;
          border-radius: 30px;
          background: linear-gradient(135deg, #FFF8FB 0%, #FFFFFF 48%, #FDF2F7 100%);
          padding: 32px 26px;
          box-shadow: 0 22px 60px rgba(57, 29, 45, 0.08);
          text-align: center;
        }

        .pt-final-panel .pt-section-intro {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .pt-final-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 30px;
        }

        @media (min-width: 640px) {
          .pt-shell {
            padding-left: 24px;
            padding-right: 24px;
          }

          .pt-page h1 {
            font-size: 42px;
          }

          .pt-page h2 {
            font-size: 32px;
          }

          .pt-page h3 {
            font-size: 22px;
          }

          .pt-hero {
            padding-top: 88px;
            padding-bottom: 88px;
          }

          .pt-hero-actions,
          .pt-final-actions {
            flex-direction: row;
            flex-wrap: wrap;
          }

          .pt-hero-proof {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-visual-workspace {
            grid-template-columns: minmax(0, 1fr) 44px minmax(0, 1fr);
            align-items: center;
          }

          .pt-flow-arrow {
            flex-direction: column;
          }

          .pt-flow-arrow > span {
            width: 1px;
            height: 22px;
          }

          .pt-flow-arrow svg {
            transform: rotate(90deg);
          }

          .pt-visual-controls {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-visual-controls > div {
            border-right: 1px solid var(--pt-line);
            border-bottom: 0;
          }

          .pt-visual-controls > div:last-child {
            border-right: 0;
          }

          .pt-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-trust-item {
            padding: 23px 20px;
            border-right: 1px solid var(--pt-line);
          }

          .pt-trust-item:nth-child(2n) {
            border-right: 0;
          }

          .pt-trust-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .pt-stat-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-locale-grid,
          .pt-market-grid,
          .pt-usecase-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-locale-card:last-child {
            grid-column: 1 / -1;
          }

          .pt-service-item {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            gap: 30px;
            align-items: start;
          }

          .pt-service-detail {
            padding-left: 30px;
            border-left: 1px solid var(--pt-line);
          }

          .pt-regulatory-links,
          .pt-link-group {
            flex-direction: row;
            flex-wrap: wrap;
            column-gap: 24px;
          }

          .pt-process {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-process-step:nth-child(odd) {
            padding-right: 28px;
            border-right: 1px solid var(--pt-line);
          }

          .pt-process-step:nth-child(even) {
            padding-left: 28px;
          }

          .pt-reason-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-reason-item {
            border-right: 1px solid var(--pt-line);
          }

          .pt-reason-item:nth-child(2n) {
            border-right: 0;
          }

          .pt-reason-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .pt-usecase {
            padding-right: 28px;
          }

          .pt-usecase:nth-child(even) {
            padding-left: 28px;
            padding-right: 0;
            border-left: 1px solid var(--pt-line);
          }
        }

        @media (max-width: 767px) {
          .pt-comparison-wrap {
            overflow: visible;
            border: 0;
            border-radius: 0;
            background: transparent;
          }

          .pt-comparison-table {
            display: none;
          }

          .pt-comparison-mobile {
            display: grid;
            gap: 14px;
          }

          .pt-comparison-item {
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.11);
            border-radius: 21px;
            background: rgba(255, 255, 255, 0.045);
          }

          .pt-comparison-item h3 {
            margin: 0;
            padding: 17px 18px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            color: #F2A7C6;
            font-size: 18px;
            letter-spacing: -0.02em;
          }

          .pt-comparison-market {
            padding: 17px 18px;
          }

          .pt-comparison-market + .pt-comparison-market {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .pt-comparison-market strong,
          .pt-comparison-market span {
            display: block;
          }

          .pt-comparison-market strong {
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 600;
            line-height: 1.45;
          }

          .pt-comparison-market span {
            margin-top: 7px;
            color: #D2CED6;
            font-size: 16px;
            line-height: 1.65;
          }
        }

        @media (min-width: 768px) {
          .pt-section,
          .pt-final-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }

          .pt-hero-grid {
            gap: 56px;
          }

          .pt-hero-visual {
            padding: 24px;
          }

          .pt-visual-header {
            padding: 23px 24px 18px;
          }

          .pt-visual-workspace {
            padding: 22px;
          }

          .pt-content-preview {
            padding: 20px;
          }

          .pt-locale-grid {
            gap: 24px;
          }

          .pt-locale-card,
          .pt-service-item,
          .pt-regulatory-copy,
          .pt-regulatory-details,
          .pt-digital-panel,
          .pt-governance-column,
          .pt-reason-item {
            padding: 32px;
          }

          .pt-market-grid {
            gap: 30px;
          }

          .pt-industry-row {
            grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.32fr) auto;
            align-items: center;
            gap: 28px;
            padding: 29px 0;
          }

          .pt-industry-row .pt-editorial-link {
            justify-self: end;
          }

          .pt-digital-pair {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-digital-panel + .pt-digital-panel {
            border-top: 0;
            border-left: 1px solid var(--pt-line);
          }

          .pt-ai-risk {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-risk-row {
            border-right: 1px solid rgba(255, 255, 255, 0.1);
            border-bottom: 0;
          }

          .pt-risk-row:last-child {
            border-right: 0;
          }

          .pt-governance-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-governance-column + .pt-governance-column {
            border-top: 0;
            border-left: 1px solid var(--pt-line);
          }

          .pt-final-panel {
            padding: 48px;
          }

          .pt-final-actions {
            justify-content: center;
          }
        }

        @media (min-width: 1024px) {
          .pt-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .pt-section,
          .pt-final-section {
            padding-top: 96px;
            padding-bottom: 96px;
          }

          .pt-page h1 {
            font-size: 48px;
          }

          .pt-page h2 {
            font-size: 36px;
          }

          .pt-page h3 {
            font-size: 24px;
          }

          .pt-hero {
            padding-top: 104px;
            padding-bottom: 104px;
          }

          .pt-hero-grid {
            grid-template-columns: minmax(0, 1.03fr) minmax(460px, 0.97fr);
            gap: 58px;
          }

          .pt-hero-proof {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-trust-grid {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .pt-trust-item {
            min-height: 91px;
            border-right: 1px solid var(--pt-line);
            border-bottom: 0;
          }

          .pt-trust-item:nth-child(2n) {
            border-right: 1px solid var(--pt-line);
          }

          .pt-trust-item:last-child {
            border-right: 0;
          }

          .pt-overview-grid {
            grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
            gap: 72px;
          }

          .pt-locale-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-locale-card:last-child {
            grid-column: auto;
          }

          .pt-market-grid {
            grid-template-columns: 1.2fr 0.9fr 0.9fr;
            gap: 38px;
          }

          .pt-services-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .pt-service-item {
            grid-template-columns: 1fr;
            gap: 18px;
            min-height: 100%;
            border-right: 1px solid var(--pt-line);
          }

          .pt-service-item:nth-child(2n) {
            border-right: 0;
          }

          .pt-service-item:nth-last-child(-n + 2) {
            border-bottom: 0;
          }

          .pt-service-detail {
            padding-left: 0;
            border-left: 0;
          }

          .pt-regulatory-layout {
            grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
          }

          .pt-regulatory-copy,
          .pt-regulatory-details {
            padding: 44px;
          }

          .pt-regulatory-details {
            border-top: 0;
            border-left: 1px solid var(--pt-line);
          }

          .pt-ai-layout {
            grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
            gap: 60px;
            align-items: start;
          }

          .pt-ai-risk {
            grid-template-columns: 1fr;
          }

          .pt-risk-row {
            border-right: 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }

          .pt-risk-row:last-child {
            border-bottom: 0;
          }

          .pt-process {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }

          .pt-process-step,
          .pt-process-step:nth-child(odd),
          .pt-process-step:nth-child(even) {
            grid-template-columns: 1fr;
            align-content: start;
            padding: 28px 24px;
            border-right: 1px solid var(--pt-line);
          }

          .pt-process-step:nth-child(4n) {
            border-right: 0;
          }

          .pt-process-step:nth-last-child(-n + 4) {
            border-bottom: 0;
          }

          .pt-reason-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-reason-item:nth-child(2n) {
            border-right: 1px solid var(--pt-line);
          }

          .pt-reason-item:nth-child(3n) {
            border-right: 0;
          }

          .pt-reason-item:nth-last-child(-n + 3) {
            border-bottom: 0;
          }

          .pt-usecase-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .pt-usecase,
          .pt-usecase:nth-child(even) {
            padding: 28px 28px 28px 0;
            border-left: 0;
            border-right: 1px solid var(--pt-line);
          }

          .pt-usecase:nth-child(3n + 2),
          .pt-usecase:nth-child(3n + 3) {
            padding-left: 28px;
          }

          .pt-usecase:nth-child(3n) {
            padding-right: 0;
            border-right: 0;
          }

          .pt-usecase:nth-last-child(-n + 3) {
            border-bottom: 0;
          }
        }

        @media (min-width: 1280px) {
          .pt-shell {
            padding-left: 56px;
            padding-right: 56px;
          }
        }

        @media (max-width: 389px) {
          .pt-primary-button,
          .pt-secondary-button {
            width: 100%;
          }

          .pt-hero-visual {
            padding: 12px;
            border-radius: 24px;
          }

          .pt-visual-shell {
            border-radius: 18px;
          }

          .pt-visual-header,
          .pt-visual-workspace {
            padding-left: 14px;
            padding-right: 14px;
          }

          .pt-live-state {
            display: none;
          }

          .pt-service-head {
            gap: 12px;
          }

          .pt-icon-box {
            width: 42px;
            height: 42px;
            flex-basis: 42px;
          }

          .pt-faq-item summary,
          .pt-faq-item p {
            padding-left: 19px;
            padding-right: 19px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .pt-page *,
          .pt-page *::before,
          .pt-page *::after {
            scroll-behavior: auto !important;
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <section className="pt-hero" aria-labelledby="pt-hero-title">
        <div className="pt-shell pt-hero-grid">
          <div className="pt-hero-copy">
            <p className="pt-eyebrow">Brazil · Portugal · Global Portuguese Markets</p>
            <h1 id="pt-hero-title">Portuguese Translation Services</h1>
            <p className="pt-lead">
              Professional Brazilian and European Portuguese translation for documents,
              websites, software, regulated content, technical communications, and global
              enterprise programs.
            </p>
            <p className="pt-body">
              Reach customers, patients, employees, regulators, and digital users with native
              linguistic expertise, industry-specialized translators, and secure AI-powered
              workflows designed for accuracy, consistency, and scale.
            </p>

            <div className="pt-hero-actions">
              <a
                className="pt-primary-button"
                href="https://app.stepes.com/quote/"
              >
                Get an Instant Quote
                <ArrowIcon white />
              </a>
              <a
                className="pt-secondary-button"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to an Expert
                <ArrowIcon />
              </a>
            </div>

            <div className="pt-hero-proof" aria-label="Portuguese translation capabilities">
              <span><CheckIcon />Brazilian and European Portuguese</span>
              <span><CheckIcon />AI + native linguistic expertise</span>
              <span><CheckIcon />Regulated and enterprise content</span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section className="pt-trust-band" aria-label="Stepes quality and service credentials">
        <div className="pt-shell pt-trust-grid">
          <div className="pt-trust-item">
            <strong>ISO-Certified Quality</strong>
            <span>ISO 17100 · ISO 9001 · ISO 13485</span>
          </div>
          <div className="pt-trust-item">
            <strong>Distinct Portuguese Locales</strong>
            <span>pt-BR · pt-PT · market-specific review</span>
          </div>
          <div className="pt-trust-item">
            <strong>100+ Languages</strong>
            <span>Portuguese within coordinated global programs</span>
          </div>
          <div className="pt-trust-item">
            <strong>Enterprise Workflows</strong>
            <span>AI, human review, terminology, QA, and approvals</span>
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="pt-global-business-title">
        <div className="pt-shell pt-overview-grid">
          <div className="pt-overview-copy">
            <p className="pt-eyebrow">A Global Business Language</p>
            <h2 id="pt-global-business-title">Portuguese Translation Built for Global Business</h2>
            <p className="pt-body">
              Portuguese connects organizations with customers, employees, regulators,
              healthcare professionals, and commercial partners across South America, Europe,
              Africa, and Asia. For most global companies, Brazil represents the largest
              Portuguese-language opportunity, while Portugal provides access to a highly
              connected European market and the broader European Union.
            </p>
            <p className="pt-body">
              These markets share a language, but they do not share one localization standard.
              Vocabulary, tone, terminology, regulatory language, formatting, search behavior,
              and audience expectations can differ significantly.
            </p>
            <p className="pt-body">
              Stepes helps your organization choose and deliver the right Portuguese for every
              market, content type, channel, and business objective.
            </p>
            <EditorialLink href="https://www.stepes.com/translation-languages/">
              Explore All Translation Languages
            </EditorialLink>
          </div>

          <div>
            <div className="pt-stat-grid" aria-label="Portuguese market context">
              <div className="pt-stat">
                <strong>213M+</strong>
                <span>People in Brazil, the primary commercial Portuguese market</span>
              </div>
              <div className="pt-stat">
                <strong>185M</strong>
                <span>Internet users across Brazil’s highly connected digital economy</span>
              </div>
              <div className="pt-stat">
                <strong>$2.2T+</strong>
                <span>Brazilian economic scale supporting diverse enterprise demand</span>
              </div>
              <div className="pt-stat">
                <strong>4.1%</strong>
                <span>Share of identifiable website content published in Portuguese</span>
              </div>
            </div>

            <div className="pt-digital-list">
              {[
                "Corporate websites, ecommerce, and digital marketing",
                "Mobile applications, SaaS platforms, and customer support",
                "Technical documentation, employee training, and operations",
                "Healthcare, life sciences, regulatory, legal, and financial content",
              ].map((item) => (
                <span key={item}><CheckIcon />{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-dark" aria-labelledby="pt-locale-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <p className="pt-eyebrow">Market-Specific Portuguese</p>
            <h2 id="pt-locale-title">Brazilian Portuguese and European Portuguese Are Distinct Locales</h2>
            <p className="pt-section-intro">
              Professional localization must account for differences in vocabulary, grammar,
              tone, pronunciation, digital conventions, search behavior, and regulatory
              terminology. A translation that feels natural in São Paulo may sound foreign in
              Lisbon, even when the basic meaning remains understandable.
            </p>
          </div>

          <div className="pt-locale-grid">
            <article className="pt-locale-card">
              <span className="pt-locale-tag">pt-BR</span>
              <h3>Brazilian Portuguese</h3>
              <p>
                Localized for Brazilian customers, patients, regulators, employees, and digital
                users, with Brazilian terminology, tone, formatting, search language, and
                institutional references.
              </p>
            </article>
            <article className="pt-locale-card">
              <span className="pt-locale-tag">pt-PT</span>
              <h3>European Portuguese</h3>
              <p>
                Written and reviewed specifically for Portugal, including Portugal-specific
                vocabulary, software conventions, forms of address, euro formatting, and EU-facing
                communications.
              </p>
            </article>
            <article className="pt-locale-card">
              <span className="pt-locale-tag">Lusophone Markets</span>
              <h3>Additional Lusophone Markets</h3>
              <p>
                Adapted when required for Angola, Mozambique, Cabo Verde, Guinea-Bissau, São Tomé
                and Príncipe, and other Portuguese-speaking audiences.
              </p>
            </article>
          </div>

          <div className="pt-comparison-wrap">
            <table className="pt-comparison-table">
              <thead>
                <tr>
                  <th>Localization Dimension</th>
                  <th>Brazilian Portuguese</th>
                  <th>European Portuguese</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.dimension}>
                    <td>{row.dimension}</td>
                    <td>{row.brazil}</td>
                    <td>{row.portugal}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pt-comparison-mobile" aria-label="Brazilian and European Portuguese comparison">
              {comparisonRows.map((row) => (
                <article className="pt-comparison-item" key={row.dimension}>
                  <h3>{row.dimension}</h3>
                  <div className="pt-comparison-market">
                    <strong>Brazilian Portuguese</strong>
                    <span>{row.brazil}</span>
                  </div>
                  <div className="pt-comparison-market">
                    <strong>European Portuguese</strong>
                    <span>{row.portugal}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="pt-link-group">
            <EditorialLink href="https://www.stepes.com/resources/localization-guides/brazilian-portuguese-vs-european-portuguese/">
              Brazilian Portuguese vs. European Portuguese (pt-BR vs. pt-PT)
            </EditorialLink>
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-soft" aria-labelledby="pt-markets-title">
        <div className="pt-shell">
          <div className="pt-section-heading">
            <p className="pt-eyebrow">Portuguese Markets We Support</p>
            <h2 id="pt-markets-title">One Language, Market-Specific Localization Strategies</h2>
            <p className="pt-section-intro">
              Stepes configures Portuguese translation according to the intended country,
              audience, industry, and use case rather than applying a universal Portuguese
              version across unrelated markets.
            </p>
          </div>

          <div className="pt-market-grid">
            <article className="pt-market-panel">
              <h3>Brazilian Portuguese Translation</h3>
              <p className="pt-body">
                Brazil is the commercial center of most enterprise Portuguese programs. Stepes
                supports companies entering the market, launching products, expanding local
                operations, supporting Brazilian employees, or managing continuous content.
              </p>
              <ul>
                <li>Customer experiences and digital commerce</li>
                <li>Software, SaaS, and product localization</li>
                <li>Technical, operational, and employee content</li>
                <li>Healthcare, regulatory, legal, and financial communications</li>
              </ul>
            </article>

            <article className="pt-market-panel">
              <h3>European Portuguese Translation</h3>
              <p className="pt-body">
                Content for Portugal uses native European Portuguese terminology, phrasing,
                grammar, tone, and digital conventions rather than repurposed Brazilian content.
              </p>
              <ul>
                <li>Websites, ecommerce, and software</li>
                <li>Marketing and customer support</li>
                <li>Financial, legal, and EU-facing content</li>
                <li>Technical, medical, and employee communications</li>
              </ul>
            </article>

            <article className="pt-market-panel">
              <h3>Global Lusophone Markets</h3>
              <p className="pt-body">
                Market-specific review can help adapt institutional language, terminology,
                audience expectations, and cultural context for Portuguese-speaking countries
                beyond Brazil and Portugal.
              </p>
              <ul>
                <li>Angola and Mozambique</li>
                <li>Cabo Verde and Guinea-Bissau</li>
                <li>São Tomé and Príncipe</li>
                <li>Equatorial Guinea and Timor-Leste</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="pt-services-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <p className="pt-eyebrow">Complete Language Coverage</p>
            <h2 id="pt-services-title">Portuguese Translation for Every Content Type</h2>
            <p className="pt-section-intro">
              A product launch can involve a website, interface, technical manual, campaign,
              training video, support center, and regulatory documentation. Stepes provides one
              coordinated Portuguese solution across the entire content ecosystem.
            </p>
          </div>

          <div className="pt-services-list">
            {serviceGroups.map((service) => (
              <article className="pt-service-item" key={service.title}>
                <div>
                  <div className="pt-service-head">
                    <span className="pt-icon-box"><LineIcon name={service.icon} /></span>
                    <h3>{service.title}</h3>
                  </div>
                  <p className="pt-body">{service.description}</p>
                </div>
                <div className="pt-service-detail">
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <EditorialLink href={service.href}>{service.link}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-soft" aria-labelledby="pt-industries-title">
        <div className="pt-shell">
          <div className="pt-section-heading">
            <p className="pt-eyebrow">Subject-Matter Expertise</p>
            <h2 id="pt-industries-title">Industry-Specialized Portuguese Translation</h2>
            <p className="pt-section-intro">
              Industry expertise matters when terminology carries technical, financial, legal,
              regulatory, or safety implications. Stepes assigns Portuguese linguists according
              to language credentials and subject-matter experience, then applies terminology and
              quality controls around the customer’s content.
            </p>
          </div>

          <div className="pt-industry-list">
            {industries.map((industry) => (
              <article className="pt-industry-row" key={industry.title}>
                <h3>{industry.title}</h3>
                <p className="pt-body">{industry.description}</p>
                <EditorialLink href={industry.href}>{industry.link}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-blush" aria-labelledby="pt-healthcare-title">
        <div className="pt-shell">
          <div className="pt-regulatory-panel">
            <div className="pt-regulatory-layout">
              <div className="pt-regulatory-copy">
                <p className="pt-eyebrow">Brazilian Healthcare and Life Sciences</p>
                <h2 id="pt-healthcare-title">Portuguese Translation for Brazil’s Regulated Healthcare Market</h2>
                <p className="pt-body">
                  Brazil is Latin America’s largest healthcare market, with approximately $135
                  billion in healthcare spending. For medical-device, pharmaceutical, clinical,
                  diagnostic, and digital-health organizations, Brazilian Portuguese translation
                  can be closely connected to regulatory communication, product access, patient
                  safety, and correct product use.
                </p>
                <p className="pt-body">
                  Brazilian medical-device rules require relevant labeling and instructions for
                  use to be available in Portuguese. Software as a medical device can also require
                  Portuguese-language menus, explanations, or use instructions according to the
                  applicable pathway.
                </p>
                <div className="pt-regulatory-quote">
                  Stepes helps life sciences organizations prepare accurate and consistent
                  Brazilian Portuguese content for regulatory, clinical, product, and patient
                  communications.
                </div>
              </div>

              <div className="pt-regulatory-details">
                <h3>Medical and Regulatory Content</h3>
                <ul className="pt-regulatory-list">
                  <li>Labels, packaging, and instructions for use</li>
                  <li>Regulatory submissions and technical documentation</li>
                  <li>Clinical protocols, informed consent, eCOA, and eDiary</li>
                  <li>Patient information, medical training, and pharmacovigilance</li>
                  <li>Healthcare software interfaces and digital-health content</li>
                </ul>

                <h3>Quality Controls for Regulated Content</h3>
                <ul className="pt-regulatory-list">
                  <li>Native Brazilian Portuguese medical linguists</li>
                  <li>Subject-matter review and approved medical terminology</li>
                  <li>Independent linguistic review and automated QA</li>
                  <li>Numerical, unit, label, and layout validation</li>
                  <li>Version control, documented approvals, and certificates</li>
                </ul>

                <div className="pt-regulatory-links">
                  <EditorialLink href="https://www.stepes.com/resources/localization-guides/portuguese-medical-translation-anvisa-requirements/">
                    Portuguese Medical Translation and ANVISA Guide
                  </EditorialLink>
                  <EditorialLink href="https://www.stepes.com/medical-translation-services/">
                    Medical Translation Services
                  </EditorialLink>
                  <EditorialLink href="https://www.stepes.com/certified-medical-translation-services/">
                    Certified Medical Translation
                  </EditorialLink>
                  <EditorialLink href="https://www.stepes.com/ifu-translation-services/">
                    IFU Translation Services
                  </EditorialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="pt-digital-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <p className="pt-eyebrow">Digital Localization</p>
            <h2 id="pt-digital-title">Portuguese Experiences That Support Search, Conversion, and Product Adoption</h2>
            <p className="pt-section-intro">
              Digital localization must address how people search, navigate, interact, and complete
              tasks in each market. Brazilian and European Portuguese may require separate
              keywords, metadata, terminology, interfaces, formatting, testing, and performance
              measurement.
            </p>
          </div>

          <div className="pt-digital-pair">
            <article className="pt-digital-panel">
              <span className="pt-icon-box"><LineIcon name="search" /></span>
              <h3>Portuguese Website Translation and Multilingual SEO</h3>
              <p className="pt-body">
                Brazilian website localization and European Portuguese website translation require
                more than literal wording. Each market can use different search language, customer
                expectations, digital conventions, and calls to action.
              </p>
              <ul className="pt-feature-list">
                <li>Market-specific keyword and search-intent research</li>
                <li>Titles, metadata, headings, page copy, and internal links</li>
                <li>Navigation, forms, messages, help content, and customer journeys</li>
                <li>Dedicated language URLs, hreflang, mobile parity, and crawlable content</li>
                <li>Connectors, APIs, proxy workflows, and continuous updates</li>
              </ul>
              <div className="pt-link-group">
                <EditorialLink href="https://www.stepes.com/resources/localization-guides/how-to-localize-a-website-for-brazil/">
                  How to Localize a Website for Brazil
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/website-translation-services/">
                  Website Translation Services
                </EditorialLink>
              </div>
            </article>

            <article className="pt-digital-panel">
              <span className="pt-icon-box"><LineIcon name="software" /></span>
              <h3>Portuguese Software and App Localization</h3>
              <p className="pt-body">
                Software localization combines linguistic quality with technical accuracy,
                product context, locale behavior, and functional testing across each release.
              </p>
              <ul className="pt-feature-list">
                <li>pt-BR and pt-PT resource-file localization</li>
                <li>Variables, placeholders, tags, plural rules, and length limits</li>
                <li>Screenshot and in-context translation support</li>
                <li>Truncation, layout, terminology, and functional localization QA</li>
                <li>Repository, API, and continuous localization workflows</li>
              </ul>
              <div className="pt-link-group">
                <EditorialLink href="https://www.stepes.com/resources/localization-guides/portuguese-software-app-localization/">
                  Portuguese Software and App Localization Guide
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/software-localization-services/">
                  Software Localization Services
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/app-localization-services/">
                  App Localization Services
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/developers/software-localization-api/">
                  Software Localization API
                </EditorialLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-dark" aria-labelledby="pt-ai-title">
        <div className="pt-shell pt-ai-layout">
          <div className="pt-ai-intro">
            <h2 id="pt-ai-title">AI Translation for Portuguese, Governed by Native Experts</h2>
            <p className="pt-section-intro">
              AI can accelerate Portuguese translation, but Portuguese machine translation quality
              varies by model, locale, subject matter, and available context. Fluent output is not
              automatically accurate, market-appropriate, or ready for business use. Models may mix
              Brazilian and European terminology, alter approved names, apply the wrong regulatory
              language, or select the wrong meaning for a technical term.
            </p>
            <p className="pt-body">
              Stepes matches the workflow to the content’s purpose, audience, visibility, and
              risk instead of applying the same level of automation to every file.
            </p>

            <div className="pt-ai-controls">
              {[
                ["Explicit locale configuration", "Define pt-BR or pt-PT before translation begins."],
                ["Approved language assets", "Apply glossaries, translation memories, style instructions, and do-not-translate lists."],
                ["Native linguistic validation", "Review meaning, terminology, fluency, tone, and market suitability."],
                ["Quality and governance", "Use scoring, issue classification, data security, audit history, and approval controls."],
              ].map(([title, description]) => (
                <div className="pt-ai-control" key={title}>
                  <CheckIcon />
                  <div><strong>{title}</strong><span>{description}</span></div>
                </div>
              ))}
            </div>

            <div className="pt-link-group">
              <EditorialLink href="https://www.stepes.com/resources/ai-translation-insights/evaluating-ai-translation-for-portuguese/">
                How to Evaluate AI Translation for Portuguese
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/ai-translation-services/">
                AI Translation Services
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/machine-translation-post-editing/">
                Machine Translation Post-Editing
              </EditorialLink>
              <EditorialLink href="https://www.stepes.com/resources/ai-translation-insights/">
                AI Translation Insights
              </EditorialLink>
            </div>
          </div>

          <div className="pt-ai-risk">
            <article className="pt-risk-row">
              <span className="pt-risk-level">Low-Risk Content</span>
              <h3>AI Translation With Automated Controls</h3>
              <p>
                A streamlined workflow for content used primarily for internal understanding,
                supported by language identification, terminology checks, and optional review.
              </p>
            </article>
            <article className="pt-risk-row">
              <span className="pt-risk-level">Moderate-Risk Content</span>
              <h3>AI Translation With Professional Post-Editing</h3>
              <p>
                Native Portuguese linguists review meaning, completeness, terminology, grammar,
                style, locale consistency, and audience suitability for customer-facing and
                operational content.
              </p>
            </article>
            <article className="pt-risk-row">
              <span className="pt-risk-level">High-Risk Content</span>
              <h3>Expert Translation and Independent Validation</h3>
              <p>
                Regulated, legal, safety-critical, and high-visibility content can include
                specialist translation, independent review, subject-matter validation, formal
                approval, and documented version control.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-soft" aria-labelledby="pt-governance-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <p className="pt-eyebrow">Consistency, Control, and Scale</p>
            <h2 id="pt-governance-title">Portuguese Terminology and Enterprise Translation Workflows</h2>
            <p className="pt-section-intro">
              Centralized language assets and connected workflows help keep Portuguese content
              consistent across websites, software, documentation, support, marketing, regulated
              content, departments, and release cycles.
            </p>
          </div>

          <div className="pt-governance-grid">
            <article className="pt-governance-column">
              <h3>Consistent Portuguese Terminology</h3>
              <p className="pt-body">
                Brazilian and European Portuguese resources can be maintained separately so
                approved language is reused without introducing terms from the wrong market.
              </p>
              <div className="pt-governance-list">
                <div><strong>Translation Memory</strong><span>Reuse approved translations to improve consistency, turnaround, and cost efficiency.</span></div>
                <div><strong>Terminology Management</strong><span>Control preferred, prohibited, regulated, brand, and product terms with context and approval status.</span></div>
                <div><strong>Portuguese Style Guides</strong><span>Define voice, tone, forms of address, capitalization, formatting, inclusive language, and market conventions.</span></div>
                <div><strong>Linguistic Quality Assurance</strong><span>Evaluate accuracy, completeness, grammar, fluency, terminology, style, locale, numbers, tags, and formatting.</span></div>
              </div>
              <EditorialLink href="https://www.stepes.com/terminology-management/">
                Terminology Management
              </EditorialLink>
            </article>

            <article className="pt-governance-column">
              <h3>Connected Enterprise Workflows</h3>
              <p className="pt-body">
                Stepes supports individual projects and ongoing Portuguese operations across
                teams, repositories, reviewers, products, and markets.
              </p>
              <div className="pt-governance-list">
                <div><strong>Centralized Intake</strong><span>Submit content through secure portals, file uploads, APIs, integrations, or automated workflows.</span></div>
                <div><strong>Role-Based Review and Approval</strong><span>Assign translators, editors, specialists, in-country reviewers, legal teams, and final approvers.</span></div>
                <div><strong>Reporting and Visibility</strong><span>Track project status, volume, turnaround, reuse, quality results, reviewer activity, and program spending.</span></div>
                <div><strong>Security and Governance</strong><span>Use controlled access, secure file handling, defined responsibilities, and traceable approvals for confidential content.</span></div>
              </div>
              <div className="pt-link-group">
                <EditorialLink href="https://www.stepes.com/enterprise-translation-management/">
                  Enterprise Translation Management
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/translation-workflow-automation/">
                  Translation Workflow Automation
                </EditorialLink>
                <EditorialLink href="https://www.stepes.com/resources/security-and-compliance/">
                  Security and Compliance
                </EditorialLink>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="pt-process-title">
        <div className="pt-shell">
          <div className="pt-section-heading">
            <h2 id="pt-process-title">A Portuguese Translation Workflow Matched to Your Content</h2>
            <p className="pt-section-intro">
              Every project begins with the intended market and use case. Stepes then configures
              the language resources, linguists, technology, quality controls, and review process
              around the content.
            </p>
          </div>

          <div className="pt-process">
            {workflowSteps.map((step, index) => (
              <article className="pt-process-step" key={step.title}>
                <span className="pt-process-number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-soft" aria-labelledby="pt-why-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <h2 id="pt-why-title">Why Global Companies Choose Stepes for Portuguese Translation</h2>
            <p className="pt-section-intro">
              Stepes combines native market expertise, industry specialization, language assets,
              quality controls, and connected technology to support both one-time projects and
              long-term Portuguese content programs.
            </p>
          </div>

          <div className="pt-reason-grid">
            {reasons.map(([title, description]) => (
              <article className="pt-reason-item" key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section" aria-labelledby="pt-usecases-title">
        <div className="pt-shell">
          <div className="pt-section-heading">
            <p className="pt-eyebrow">Enterprise Applications</p>
            <h2 id="pt-usecases-title">Portuguese Translation for Real Enterprise Needs</h2>
            <p className="pt-section-intro">
              Configure the program around the customer journey, product lifecycle, regulatory
              pathway, workforce, or content operation your organization needs to support.
            </p>
          </div>

          <div className="pt-usecase-grid">
            {useCases.map((item) => (
              <article className="pt-usecase" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-section pt-section-soft" aria-labelledby="pt-faq-title">
        <div className="pt-shell">
          <div className="pt-section-heading is-centered">
            <h2 id="pt-faq-title">Portuguese Translation Services FAQ</h2>
            <p className="pt-section-intro">
              Practical answers about Portuguese variants, regulated content, AI translation,
              websites, software, pricing, turnaround, security, and ongoing programs.
            </p>
          </div>

          <div className="pt-faq-panel">
            {faqs.map((faq, index) => (
              <details className="pt-faq-item" key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronIcon />
                </summary>
                <p>{faq.answer}</p>
                {faq.linkHref && faq.linkLabel ? (
                  <EditorialLink href={faq.linkHref}>{faq.linkLabel}</EditorialLink>
                ) : null}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-final-section" aria-labelledby="pt-final-title">
        <div className="pt-shell">
          <div className="pt-final-panel">
            <h2 id="pt-final-title">Translate Your Content for Brazil, Portugal, and Portuguese-Speaking Markets</h2>
            <p className="pt-section-intro">
              Whether you are entering Brazil, localizing software for Portugal, preparing
              regulated healthcare content, or managing an ongoing Portuguese program, Stepes
              combines native linguistic expertise, industry specialization, AI-powered
              workflows, terminology governance, and enterprise quality controls to help your
              organization communicate accurately and scale efficiently.
            </p>
            <div className="pt-final-actions">
              <a
                className="pt-primary-button"
                href="https://app.stepes.com/quote/"
              >
                Get an Instant Quote
                <ArrowIcon white />
              </a>
              <a
                className="pt-secondary-button"
                href="https://www.stepes.com/contact-us/"
              >
                Talk to an Expert
                <ArrowIcon />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
