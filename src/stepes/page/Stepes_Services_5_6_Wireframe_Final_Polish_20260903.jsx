import React, { useState } from "react";

const COLORS = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  blushAccent: "#F2A7C6",
  ink: "#17171A",
  body: "#414047",
  muted: "#6A6870",
  line: "#E6E3E7",
  soft: "#F7F7F8",
  white: "#FFFFFF",
  dark: "#1B1A1E",
};

const serviceFamilies = [
  {
    key: "translation",
    icon: "document",
    title: "Translation Services",
    description:
      "Translate business-critical content with professional linguists, subject-matter expertise, terminology control, translation memory, AI-enabled workflows, and quality review configured around how the content will be used.",
    detail:
      "Stepes supports everything from everyday business communications to highly specialized technical, legal, medical, financial, marketing, and intellectual-property content. Projects can be delivered through professional human translation, AI-assisted workflows, machine translation post-editing, or more rigorous review models according to quality requirements, content risk, and audience.",
    links: [
      ["Professional Translation Services", "https://www.stepes.com/translation-services/"],
      ["Certified Translation Services", "https://www.stepes.com/certified-translation-services/"],
      ["Technical Translation Services", "https://www.stepes.com/technical-translation-services/"],
      ["Legal Translation Services", "https://www.stepes.com/legal-translation-services/"],
      ["Medical Translation Services", "https://www.stepes.com/medical-translation-services/"],
      ["Financial Translation Services", "https://www.stepes.com/financial-translation-services/"],
      ["Marketing Translation Services", "https://www.stepes.com/marketing-translation-services/"],
      ["Patent Translation Services", "https://www.stepes.com/patent-translation-services/"],
    ],
    cta: ["Explore Translation Services", "https://www.stepes.com/translation-services/"],
  },
  {
    key: "localization",
    icon: "globe",
    title: "Localization Services",
    description:
      "Localization goes beyond translating words. It adapts the complete experience so content, interfaces, formats, terminology, visuals, functionality, and user journeys work naturally for people in each target market.",
    detail:
      "Stepes combines professional translation with localization engineering, internationalization support, linguistic QA, in-context review, and multilingual testing to help global teams launch and maintain digital products across languages.",
    links: [
      ["Website Translation", "https://www.stepes.com/website-translation-services/"],
      ["Software Localization", "https://www.stepes.com/software-localization-services/"],
      ["App Localization", "https://www.stepes.com/app-localization-services/"],
      ["Game Localization", "https://www.stepes.com/video-game-translation-services/"],
      ["eLearning Localization", "https://www.stepes.com/elearning-training-translation-services/"],
    ],
    cta: ["Explore Localization Services", "https://www.stepes.com/localization-services/"],
  },
  {
    key: "ai",
    icon: "spark",
    title: "AI & Data Services",
    description:
      "Build multilingual AI systems that understand, generate, and respond to language more naturally across markets.",
    detail:
      "Stepes combines professional native-language expertise with structured data workflows to create, annotate, evaluate, and improve multilingual content and language data for large language models, conversational AI, speech systems, search, enterprise AI, and other machine learning applications.",
    links: [
      ["AI Translation Services", "https://www.stepes.com/ai-translation-services/"],
      ["Machine Translation Post-Editing", "https://www.stepes.com/machine-translation-post-editing/"],
      ["LLM Evaluation Services", "https://www.stepes.com/multilingual-llm-evaluation-services/"],
      ["Multilingual AI Data Services", "https://www.stepes.com/multilingual-ai-data-services/"],
      ["Multilingual Text Annotation", "https://www.stepes.com/multilingual-text-annotation-services/"],
      ["Voice Data Collection", "https://www.stepes.com/multilingual-voice-conversation-data-collection/"],
      ["AI Output Review", "https://www.stepes.com/ai-output-review-services/"],
    ],
    cta: ["Explore Multilingual AI Data Services", "https://www.stepes.com/multilingual-ai-data-services/"],
  },
  {
    key: "production",
    icon: "layers",
    title: "Multilingual Production",
    description:
      "Translation is only part of the deliverable. Stepes turns multilingual content into finished documents, graphics, audio, video, and digital assets that are ready for publication, distribution, training, product release, or customer use.",
    detail:
      "Language and production teams work together so translated content fits the format and experience it was designed for—from publication-ready documents to synchronized multimedia experiences.",
    links: [
      ["Multilingual Desktop Publishing", "https://www.stepes.com/multilingual-desktop-publishing/"],
      ["Multimedia Localization", "https://www.stepes.com/multimedia-translation-services/"],
    ],
    cta: null,
  },
  {
    key: "interpreting",
    icon: "conversation",
    title: "Interpreting",
    description:
      "Communicate across languages in real time with professional interpreters matched to your languages, subject matter, location, communication format, and event requirements.",
    detail:
      "Stepes supports routine conversations, customer and employee interactions, business meetings, specialized appointments, international events, conferences, and other situations where people need to understand one another immediately.",
    links: [
      ["Remote Interpreting", "https://www.stepes.com/interpretation-services/"],
      ["On-Site Interpreting", "https://www.stepes.com/on-site-interpretater-services/"],
      ["Conference & Event Interpreting", "https://www.stepes.com/conference-event-interpreting/"],
    ],
    cta: ["Explore Interpreting Services", "https://www.stepes.com/interpretation-services/"],
  },
];

const contentExperiences = [
  {
    icon: "document",
    title: "Documents",
    text: "Translate reports, manuals, contracts, regulatory files, marketing collateral, training materials, and other business-critical documents while preserving terminology, formatting, and intended use.",
  },
  {
    icon: "screen",
    title: "Digital Experiences",
    text: "Make websites, software, mobile apps, ecommerce experiences, and digital products work naturally for international users across interfaces, locale requirements, user journeys, and releases.",
  },
  {
    icon: "spark",
    title: "AI & Data",
    text: "Create native-language data, annotate multilingual datasets, evaluate model responses, collect speech and conversation data, and review AI-generated content with structured human-in-the-loop workflows.",
  },
  {
    icon: "play",
    title: "Multimedia",
    text: "Bring translation, voice, subtitles, captions, graphics, on-screen text, audio, timing, and production together so every part of the audience experience remains aligned.",
  },
  {
    icon: "conversation",
    title: "Live Communication",
    text: "Support remote conversations, executive meetings, site visits, international conferences, and multilingual events with professional interpreting and coordinated delivery.",
  },
];

const operatingModel = [
  {
    icon: "bolt",
    title: "Automate What Scales",
    text: "Use AI translation, translation memory, terminology management, content processing, workflow automation, and quality checks to accelerate repeatable work and improve consistency across growing multilingual content volumes.",
  },
  {
    icon: "people",
    title: "Apply Expertise Where It Matters",
    text: "Bring professional translators, editors, reviewers, subject-matter linguists, localization specialists, interpreters, production professionals, and AI language evaluators into the workflow where human judgment creates the greatest value.",
  },
  {
    icon: "shield",
    title: "Match Quality to the Content",
    text: "Configure the right balance of AI, professional review, specialized QA, and production based on the audience, visibility, subject matter, quality expectations, and consequences of an error.",
  },
];

const enterpriseCapabilities = [
  {
    title: "Global Linguistic Expertise",
    text: "Access professional linguists across 100+ languages and regional variants, with resources matched according to language combination, locale, subject matter, content type, workflow role, and project requirements.",
    links: [
      ["Explore Our Linguists", "https://www.stepes.com/our-linguists/"],
      ["Explore Language Coverage", "https://www.stepes.com/translation-languages/"],
    ],
  },
  {
    title: "Connected Language Technology",
    text: "Turn approved translation into a reusable enterprise asset with translation memory, terminology management, AI, workflow automation, and connected delivery across recurring multilingual content operations.",
    links: [
      ["Translation Memory", "https://www.stepes.com/translation-memory/"],
      ["Terminology Management", "https://www.stepes.com/terminology-management/"],
      ["Workflow Automation", "https://www.stepes.com/translation-workflow-automation/"],
    ],
  },
  {
    title: "Quality by Design",
    text: "Configure language resources, terminology, review stages, automated checks, subject-matter expertise, acceptance requirements, and quality controls according to the content, industry, audience, and intended use.",
    links: [["Explore Translation Quality Assurance", "https://www.stepes.com/translation-quality-assurance/"]],
  },
  {
    title: "Scalable Global Delivery",
    text: "Support one-time projects, recurring translation programs, product releases, large multilingual rollouts, and continuous global content operations through one coordinated language-services partner, with centralized visibility and controlled delivery for business-critical content.",
    links: [],
  },
];

const industries = [
  ["Life Sciences & Healthcare", "Clinical, regulatory, medical, pharmaceutical, device, and patient-facing content.", "https://www.stepes.com/life-sciences-translation-services/"],
  ["Legal & Compliance", "Contracts, policies, compliance communications, investigations, litigation materials, and legal content.", "https://www.stepes.com/legal-translation-services/"],
  ["Financial Services", "Banking, insurance, investment, reporting, disclosures, investor communications, and fintech content.", "https://www.stepes.com/financial-translation-services/"],
  ["Technology & Software", "Software, SaaS, websites, mobile products, interfaces, support content, and release workflows.", "https://www.stepes.com/software-translation-services/"],
  ["Manufacturing & Engineering", "Technical manuals, specifications, safety materials, operations content, and product documentation.", "https://www.stepes.com/manufacturing-translation-services/"],
  ["Retail & Ecommerce", "Product information, catalogs, merchandising, ecommerce experiences, marketing, and customer support.", "https://www.stepes.com/retail-ecommerce-translation-services/"],
  ["Education & eLearning", "Courses, training, assessments, learning platforms, instructional content, and multimedia.", "https://www.stepes.com/education-translation-services/"],
  ["Travel & Hospitality", "Booking experiences, guest communications, service information, destination content, and travel marketing.", "https://www.stepes.com/travel-hospitality-translation-services/"],
  ["Government & Public Sector", "Public communications, official documents, community services, programs, and essential information.", "https://www.stepes.com/government-translation-services/"],
];

const faqs = [
  {
    q: "What language services does Stepes provide?",
    a: "Stepes provides professional translation, localization, AI and multilingual data services, multilingual production, and interpreting. Translation services include professional, certified, technical, legal, medical, financial, marketing, and patent translation. Localization services cover websites, software, mobile apps, games, eLearning, and other digital experiences. Stepes also provides AI translation, machine translation post-editing, multilingual AI data creation, annotation, LLM evaluation, voice data collection, and AI output review, along with multilingual desktop publishing, multimedia localization, and real-time interpreting.",
  },
  {
    q: "What is the difference between translation and localization?",
    a: "Translation converts content from one language into another while preserving its intended meaning. Localization goes further by adapting the complete content or product experience for a particular language, locale, and market. Depending on the project, that can include interfaces, layouts, images, dates, currencies, units, writing direction, terminology, cultural expectations, technical resources, user journeys, and multilingual testing.",
  },
  {
    q: "Does Stepes provide both AI translation and professional human translation?",
    a: "Yes. Stepes supports AI-enabled translation, machine translation post-editing, professional human translation, and hybrid AI + human workflows. The appropriate approach depends on factors such as content type, audience, visibility, subject matter, required turnaround, language pair, quality expectations, and business risk. Stepes helps determine the delivery model that best fits the intended use of the content.",
  },
  {
    q: "Can Stepes deliver complete multilingual files, not just translated text?",
    a: "Yes. Stepes can coordinate translation with multilingual production so customers receive finished content in the format required for use or publication. Multilingual desktop publishing can address typography, layout, text expansion, graphics, tables, page flow, right-to-left languages, and final visual QA. Multimedia localization can coordinate translation with voiceover, subtitles, captions, audio, on-screen text, graphics, timing, and related production tasks.",
  },
  {
    q: "Does Stepes provide interpreting services?",
    a: "Yes. Stepes provides professional remote, on-site, and conference and event interpreting for multilingual communication. Remote interpreting can support telephone, video, virtual meetings, interviews, and other live conversations. On-site interpreting provides in-person language support at the required location, while conference and event interpreting can include simultaneous or consecutive interpreting and broader event coordination.",
  },
  {
    q: "Can Stepes support large enterprise multilingual programs?",
    a: "Yes. Stepes supports individual translation projects as well as ongoing enterprise programs spanning multiple languages, content types, teams, markets, and release cycles. Enterprise workflows can incorporate professional linguists, AI translation, translation memory, terminology management, project-specific instructions, quality controls, stakeholder review, workflow automation, APIs, centralized project management, and multilingual production.",
  },
];

function Icon({ name, size = 24, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (name) {
    case "document":
      return <svg {...common}><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 12h6M9 16h6"/></svg>;
    case "globe":
      return <svg {...common}><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>;
    case "spark":
      return <svg {...common}><path d="M12 3l1.4 4.2L18 9l-4.6 1.8L12 15l-1.4-4.2L6 9l4.6-1.8z"/><path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></svg>;
    case "layers":
      return <svg {...common}><path d="M12 3 3 8l9 5 9-5z"/><path d="m3 12 9 5 9-5M3 16l9 5 9-5"/></svg>;
    case "conversation":
      return <svg {...common}><path d="M4 5h11a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H9l-5 4v-4a3 3 0 0 1-2-3V8a3 3 0 0 1 2-3z"/><path d="M8 9h6M8 12h4"/></svg>;
    case "screen":
      return <svg {...common}><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>;
    case "play":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/></svg>;
    case "bolt":
      return <svg {...common}><path d="m13 2-7 11h6l-1 9 7-12h-6z"/></svg>;
    case "people":
      return <svg {...common}><circle cx="9" cy="8" r="3"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5A5 5 0 0 1 21 19"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 5 6v5c0 5 3 8 7 10 4-2 7-5 7-10V6z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "arrow":
      return <svg {...common} size={18}><path d="M5 12h14M14 7l5 5-5 5"/></svg>;
    case "check":
      return <svg {...common}><path d="m5 12 4 4 10-10"/></svg>;
    default:
      return null;
  }
}

function ArrowLink({ href, children, className = "" }) {
  return (
    <a className={`editorial-link ${className}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} />
    </a>
  );
}

function ServiceLink({ href, children }) {
  return (
    <a className="service-link" href={href}>
      {children}
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="hero-visual" role="img" aria-label="Connected multilingual services across documents, digital products, AI data, multimedia, and live communication">
      <svg viewBox="0 0 640 480" aria-hidden="true">
        <defs>
          <linearGradient id="heroSoft" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#FDF2F7" />
            <stop offset="1" stopColor="#F5F4F6" />
          </linearGradient>
        </defs>
        <rect x="30" y="34" width="580" height="412" rx="52" fill="url(#heroSoft)" />

        <path d="M260 210H214M380 210h52M320 164V126M320 256v48" stroke="#C8C3C9" strokeWidth="3" fill="none" />

        <g transform="translate(72 116)">
          <rect width="172" height="188" rx="24" fill="#FFFFFF" stroke="#CFCAD0" strokeWidth="2" />
          <path d="M31 43h68M31 68h105M31 93h88M31 118h98" stroke="#545158" strokeWidth="7" strokeLinecap="round" opacity=".78" />
          <rect x="31" y="145" width="78" height="18" rx="9" fill="#F2A7C6" opacity=".84" />
        </g>

        <g transform="translate(424 78)">
          <rect width="150" height="112" rx="22" fill="#FFFFFF" stroke="#CFCAD0" strokeWidth="2" />
          <rect x="18" y="18" width="114" height="15" rx="7.5" fill="#D9D5DA" />
          <rect x="18" y="48" width="50" height="43" rx="10" fill="#F6EDF2" />
          <rect x="80" y="48" width="52" height="43" rx="10" fill="#E8E6E9" />
          <path d="m106 57 4 10 10 4-10 4-4 10-4-10-10-4 10-4z" fill="#C11D63" opacity=".82" />
        </g>

        <g transform="translate(421 286)">
          <rect width="158" height="112" rx="22" fill="#232227" />
          <circle cx="36" cy="36" r="14" fill="#F2A7C6" />
          <path d="M64 36h64M22 70h114M22 91h78" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" opacity=".8" />
        </g>

        <g transform="translate(118 332)">
          <rect width="170" height="72" rx="22" fill="#FFFFFF" stroke="#CFCAD0" strokeWidth="2" />
          <path d="M26 26h45a10 10 0 0 1 10 10v3a10 10 0 0 1-10 10H49l-14 10v-10h-9a10 10 0 0 1-10-10v-3a10 10 0 0 1 10-10z" fill="#F7EEF3" stroke="#C11D63" strokeWidth="2" />
          <path d="M103 29h42M103 44h30" stroke="#555159" strokeWidth="6" strokeLinecap="round" />
        </g>

        <g transform="translate(258 164)">
          <rect width="124" height="94" rx="28" fill="#FFFFFF" stroke="#BFB8C0" strokeWidth="2.5" />
          <text x="35" y="57" fontSize="34" fontWeight="600" fill="#4E4A51" fontFamily="Inter, Arial, sans-serif">A</text>
          <path d="M60 25v44" stroke="#D8D3D8" strokeWidth="2" />
          <text x="72" y="57" fontSize="28" fontWeight="600" fill="#C11D63" fontFamily="Arial, sans-serif">文</text>
        </g>
      </svg>
    </div>
  );
}

function AccordionItem({ item, index, open, onToggle }) {
  return (
    <div className="faq-item">
      <button
        className="faq-question"
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`faq-panel-${index}`}
        id={`faq-button-${index}`}
      >
        <span>{item.q}</span>
        <span className="faq-toggle" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div
        className={`faq-answer ${open ? "is-open" : ""}`}
        id={`faq-panel-${index}`}
        role="region"
        aria-labelledby={`faq-button-${index}`}
        aria-hidden={!open}
      >
        <div>{item.a}</div>
      </div>
    </div>
  );
}

export default function StepesServices56Wireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-services-page">
      <style>{styles}</style>

      <section className="hero section-shell" aria-labelledby="page-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1 id="page-title">Professional Language Services for Global Content and Communication</h1>
            <p className="hero-lead">
              Translate, localize, produce, evaluate, and deliver multilingual content with professional language expertise, AI-enabled workflows, and enterprise technology built for global scale.
            </p>
            <p className="hero-support">
              From documents and digital products to multimedia, AI data, and live communication, Stepes helps global organizations create accurate, consistent, and market-ready experiences across languages.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="https://app.stepes.com/quote/">
                <span>Get a Quote</span><Icon name="arrow" size={18} />
              </a>
              <a className="button button-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="proof-section" aria-label="Stepes enterprise proof points">
        <div className="shell proof-grid">
          <div className="proof-item"><strong>100+</strong><span>Languages</span></div>
          <div className="proof-item"><strong>10,000+</strong><span>Professional Linguists</span></div>
          <div className="proof-item"><strong>2,000+</strong><span>Enterprise Clients</span></div>
          <div className="proof-item"><strong>AI + Human</strong><span>Workflows</span></div>
          <div className="proof-item"><strong>ISO-Certified</strong><span>Quality Processes</span></div>
        </div>
      </section>

      <section className="services-section section-shell" aria-labelledby="services-heading">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2 id="services-heading">Explore Our Language Services</h2>
            <p>
              Global content takes many forms—and each requires the right combination of language expertise, technology, quality control, and production support. Stepes brings translation, localization, multilingual AI services, production, and interpreting together in one connected portfolio.
            </p>
          </div>

          <div className="service-explorer">
            {serviceFamilies.map((family) => (
              <article className="service-family" key={family.key}>
                <div className="service-family-title">
                  <span className="icon-box"><Icon name={family.icon} size={25} /></span>
                  <h3>{family.title}</h3>
                </div>
                <div className="service-family-body">
                  <p className="service-intro">{family.description}</p>
                  <p>{family.detail}</p>
                  <div className="service-link-grid">
                    {family.links.map(([label, href]) => (
                      <ServiceLink href={href} key={label}>{label}</ServiceLink>
                    ))}
                  </div>
                  {family.cta && (
                    <ArrowLink className="family-cta" href={family.cta[1]}>{family.cta[0]}</ArrowLink>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="experience-section section-shell" aria-labelledby="experience-heading">
        <div className="shell">
          <div className="section-heading dark-heading centered-heading">
            <h2 id="experience-heading">One Language Partner Across Every Content Experience</h2>
            <p>
              Multilingual communication rarely fits into a single file type or service category. Stepes helps connect documents, products, data, media, and live communication so terminology, language, quality standards, and market expectations stay aligned from one channel to the next.
            </p>
          </div>
          <div className="experience-grid">
            {contentExperiences.map((item) => (
              <article className="experience-item" key={item.title}>
                <span className="experience-icon"><Icon name={item.icon} size={25} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="operating-section section-shell" aria-labelledby="operating-heading">
        <div className="shell split-grid">
          <div className="split-heading">
            <div className="eyebrow">SMARTER WORKFLOWS</div>
            <h2 id="operating-heading">AI-Accelerated. Professionally Delivered.</h2>
            <p className="section-lead-left">
              The best multilingual workflow is not necessarily the one with the most automation—or the most human effort. It is the one that applies each where it creates the most value.
            </p>
            <p>
              Stepes combines AI, reusable linguistic assets, workflow technology, professional language expertise, and structured quality controls to match the delivery model to the content.
            </p>
            <div className="quiet-links">
              <ArrowLink href="https://www.stepes.com/ai-translation-services/">Explore AI Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/machine-translation-post-editing/">Explore Machine Translation Post-Editing</ArrowLink>
            </div>
          </div>
          <div className="model-list">
            {operatingModel.map((item) => (
              <article className="model-row" key={item.title}>
                <span className="model-icon"><Icon name={item.icon} size={23} /></span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="enterprise-section section-shell" aria-labelledby="enterprise-heading">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2 id="enterprise-heading">Enterprise Language Services Built to Scale</h2>
            <p>
              From a single file to thousands of assets across recurring releases, business units, specialized reviewers, and dozens of languages, Stepes combines professional expertise, reusable language assets, technology, quality controls, and managed delivery to keep multilingual operations consistent as they scale.
            </p>
          </div>
          <div className="enterprise-grid">
            {enterpriseCapabilities.map((item) => (
              <article className="enterprise-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                {item.links.length > 0 && (
                  <div className="enterprise-links">
                    {item.links.map(([label, href]) => <ArrowLink key={label} href={href}>{label}</ArrowLink>)}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="industry-section section-shell" aria-labelledby="industry-heading">
        <div className="shell">
          <div className="section-heading centered-heading">
            <h2 id="industry-heading">Specialized Expertise for Your Industry</h2>
            <p>
              The right translation depends on more than knowing two languages. Terminology, regulations, audience expectations, technical context, documentation standards, and the consequences of an error differ by industry. Stepes combines professional language services with subject-matter expertise for regulated, technical, and global business content.
            </p>
          </div>
          <div className="industry-grid">
            {industries.map(([title, text, href]) => (
              <a className="industry-row" href={href} key={title}>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                <Icon name="arrow" size={18} />
              </a>
            ))}
          </div>
          <div className="center-link"><ArrowLink href="https://www.stepes.com/industries/">Explore All Industries</ArrowLink></div>
        </div>
      </section>

      <section className="faq-section section-shell" aria-labelledby="faq-heading">
        <div className="shell faq-layout">
          <div className="faq-intro">
            <h2 id="faq-heading">Language Services FAQ</h2>
            <p>
              Find answers to common questions about Stepes translation, localization, AI language services, multilingual production, interpreting, and enterprise delivery.
            </p>
          </div>
          <div className="faq-panel">
            {faqs.map((item, index) => (
              <AccordionItem
                key={item.q}
                item={item}
                index={index}
                open={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta section-shell" aria-labelledby="cta-heading">
        <div className="shell final-cta-inner">
          <div className="cta-copy">
            <h2 id="cta-heading">Whatever You Need to Take Global, Start Here.</h2>
            <p>
              Documents, websites, software, multimedia, AI data, or live communication—tell us what you need to take global. Stepes will help you configure the languages, quality model, and workflow to fit your content and business goals.
            </p>
          </div>
          <div className="cta-actions">
            <a className="button button-primary" href="https://app.stepes.com/quote/">
              <span>Get a Quote</span><Icon name="arrow" size={18} />
            </a>
            <a className="button button-secondary" href="https://www.stepes.com/contact-sales/">Contact Sales</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .stepes-services-page, .stepes-services-page *, .stepes-services-page *::before, .stepes-services-page *::after { box-sizing: border-box; }
  .stepes-services-page {
    --magenta: ${COLORS.magenta};
    --magenta-dark: ${COLORS.magentaDark};
    --burgundy: ${COLORS.burgundy};
    --blush: ${COLORS.blush};
    --blush-accent: ${COLORS.blushAccent};
    --ink: ${COLORS.ink};
    --body: ${COLORS.body};
    --muted: ${COLORS.muted};
    --line: ${COLORS.line};
    --soft: ${COLORS.soft};
    --white: ${COLORS.white};
    --dark: ${COLORS.dark};
    font-family: "Inter Tight", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    color: var(--ink);
    background: #fff;
  }
  .stepes-services-page a { color: inherit; }
  .stepes-services-page .shell { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .stepes-services-page .section-shell { padding-top: 96px; padding-bottom: 96px; }
  .stepes-services-page .hero.section-shell { padding-top: 104px; padding-bottom: 104px; }
  .stepes-services-page h1, .stepes-services-page h2, .stepes-services-page h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: var(--ink); }
  .stepes-services-page h1 { font-size: 48px; line-height: 1.06; max-width: 760px; }
  .stepes-services-page h2 { font-size: 36px; line-height: 1.13; }
  .stepes-services-page h3 { font-size: 24px; line-height: 1.2; }
  .stepes-services-page p { margin: 0; font-size: 16px; line-height: 1.68; color: var(--body); }
  .stepes-services-page .eyebrow { font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .15em; color: var(--magenta); margin-bottom: 18px; }
  .stepes-services-page .section-heading { max-width: 820px; margin-bottom: 52px; }
  .stepes-services-page .section-heading h2 { margin-bottom: 18px; }
  .stepes-services-page .section-heading p { font-size: 18px; line-height: 1.6; }
  .stepes-services-page .centered-heading { margin-left: auto; margin-right: auto; text-align: center; }
  .stepes-services-page .button { min-height: 48px; padding: 12px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-size: 16px; line-height: 1.2; font-weight: 600; transition: transform .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease; }
  .stepes-services-page .button:focus-visible, .stepes-services-page .editorial-link:focus-visible, .stepes-services-page .industry-row:focus-visible, .stepes-services-page .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
  .stepes-services-page .button-primary, .stepes-services-page .button-primary:link, .stepes-services-page .button-primary:visited, .stepes-services-page .button-primary:hover, .stepes-services-page .button-primary:active, .stepes-services-page .button-primary:focus, .stepes-services-page .button-primary:focus-visible { background: var(--magenta); color: #fff !important; border: 1px solid var(--magenta); }
  .stepes-services-page .button-primary span, .stepes-services-page .button-primary svg, .stepes-services-page .button-primary svg * { color: #fff !important; stroke: #fff !important; }
  .stepes-services-page .button-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(122,21,66,.16); }
  .stepes-services-page .button-secondary { background: #fff; color: var(--ink); border: 1px solid #D9D5DA; }
  .stepes-services-page .button-secondary:hover { border-color: #BEB9C0; transform: translateY(-1px); }
  .stepes-services-page .editorial-link { min-height: 44px; display: inline-flex; align-items: center; gap: 7px; color: var(--magenta) !important; text-decoration: none; font-weight: 600; font-size: 16px; line-height: 1.35; width: fit-content; }
  .stepes-services-page .editorial-link svg { flex: 0 0 auto; transition: transform .18s ease; }
  .stepes-services-page .editorial-link:hover svg { transform: translateX(3px); }
  .stepes-services-page .editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; text-decoration-thickness: 1px; }
  .stepes-services-page .service-link { min-height: 44px; display: flex; align-items: center; width: 100%; color: var(--magenta) !important; text-decoration: none; font-size: 16px; line-height: 1.35; font-weight: 600; border-bottom: 1px solid #F0EDF0; transition: color .18s ease, padding-left .18s ease; }
  .stepes-services-page .service-link:hover { color: var(--magenta-dark) !important; padding-left: 3px; }
  .stepes-services-page .service-link:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 2px; }

  .stepes-services-page .hero { background: linear-gradient(180deg, #fff 0%, #FCFBFC 100%); }
  .stepes-services-page .hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(420px, .92fr); gap: 54px; align-items: center; }
  .stepes-services-page .hero-copy { min-width: 0; }
  .stepes-services-page .hero-lead { margin-top: 28px; max-width: 720px; font-size: 18px; line-height: 1.62; color: #343238; }
  .stepes-services-page .hero-support { margin-top: 16px; max-width: 700px; }
  .stepes-services-page .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .stepes-services-page .hero-visual { min-width: 0; }
  .stepes-services-page .hero-visual svg { display: block; width: 100%; height: auto; }

  .stepes-services-page .proof-section { background: #fff; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .stepes-services-page .proof-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
  .stepes-services-page .proof-item { min-height: 112px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; padding: 24px 18px; position: relative; }
  .stepes-services-page .proof-item + .proof-item::before { content: ""; position: absolute; left: 0; top: 28px; bottom: 28px; width: 1px; background: var(--line); }
  .stepes-services-page .proof-item strong { font-size: 22px; line-height: 1.2; font-weight: 600; color: var(--ink); }
  .stepes-services-page .proof-item span { margin-top: 7px; font-size: 16px; line-height: 1.4; color: var(--muted); }

  .stepes-services-page .services-section { background: #fff; }
  .stepes-services-page .service-explorer { border-top: 1px solid var(--line); }
  .stepes-services-page .service-family { display: grid; grid-template-columns: minmax(240px, .78fr) minmax(0, 1.75fr); gap: 54px; padding: 52px 0; border-bottom: 1px solid var(--line); }
  .stepes-services-page .service-family-title { display: flex; align-items: flex-start; gap: 16px; }
  .stepes-services-page .service-family-title h3 { padding-top: 5px; }
  .stepes-services-page .icon-box, .stepes-services-page .model-icon, .stepes-services-page .experience-icon { width: 48px; height: 48px; border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; }
  .stepes-services-page .icon-box { background: var(--blush); color: var(--magenta); }
  .stepes-services-page .service-intro { font-size: 18px; line-height: 1.62; color: #2E2D31; margin-bottom: 12px; }
  .stepes-services-page .service-family-body { min-width: 0; }
  .stepes-services-page .service-family-body > p:not(.service-intro) { max-width: 780px; }
  .stepes-services-page .service-link-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 34px; row-gap: 0; margin-top: 24px; }
  .stepes-services-page .family-cta { margin-top: 24px; }

  .stepes-services-page .experience-section { background: var(--dark); }
  .stepes-services-page .dark-heading h2, .stepes-services-page .experience-item h3 { color: #fff; }
  .stepes-services-page .dark-heading p, .stepes-services-page .experience-item p { color: #D5D1D6; }
  .stepes-services-page .experience-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); border-top: 1px solid rgba(255,255,255,.15); border-bottom: 1px solid rgba(255,255,255,.15); }
  .stepes-services-page .experience-item { padding: 34px 26px 36px; min-width: 0; }
  .stepes-services-page .experience-item + .experience-item { border-left: 1px solid rgba(255,255,255,.15); }
  .stepes-services-page .experience-icon { background: rgba(242,167,198,.12); color: var(--blush-accent); margin-bottom: 22px; }
  .stepes-services-page .experience-item h3 { font-size: 22px; margin-bottom: 14px; }
  .stepes-services-page .experience-item p { line-height: 1.62; }

  .stepes-services-page .operating-section { background: var(--blush); }
  .stepes-services-page .split-grid { display: grid; grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr); gap: 72px; align-items: start; }
  .stepes-services-page .split-heading { max-width: 520px; }
  .stepes-services-page .split-heading h2 { margin-bottom: 20px; }
  .stepes-services-page .split-heading > p + p { margin-top: 14px; }
  .stepes-services-page .section-lead-left { font-size: 18px; color: #2E2D31; }
  .stepes-services-page .quiet-links { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; margin-top: 26px; }
  .stepes-services-page .model-list { background: #fff; border: 1px solid #E7DDE2; border-radius: 28px; overflow: hidden; box-shadow: 0 18px 40px rgba(68,39,51,.05); }
  .stepes-services-page .model-row { display: grid; grid-template-columns: auto 1fr; gap: 18px; padding: 30px 32px; }
  .stepes-services-page .model-row + .model-row { border-top: 1px solid var(--line); }
  .stepes-services-page .model-icon { background: #FAF0F5; color: var(--magenta); }
  .stepes-services-page .model-row > div { min-width: 0; }
  .stepes-services-page .model-row h3 { font-size: 22px; margin-bottom: 10px; }

  .stepes-services-page .enterprise-section { background: #fff; }
  .stepes-services-page .enterprise-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .stepes-services-page .enterprise-item { min-width: 0; min-height: 250px; padding: 36px 38px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .stepes-services-page .enterprise-item h3 { margin-bottom: 14px; }
  .stepes-services-page .enterprise-links { display: flex; flex-direction: column; gap: 0; margin-top: 18px; }

  .stepes-services-page .industry-section { background: #F7F7F8; }
  .stepes-services-page .industry-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid #DCD9DE; border-left: 1px solid #DCD9DE; background: #fff; }
  .stepes-services-page .industry-row { min-width: 0; min-height: 176px; padding: 28px 28px 24px; border-right: 1px solid #DCD9DE; border-bottom: 1px solid #DCD9DE; text-decoration: none; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; transition: background .18s ease; }
  .stepes-services-page .industry-row > div { min-width: 0; }
  .stepes-services-page .industry-row:hover { background: #FFFCFD; }
  .stepes-services-page .industry-row svg { color: var(--magenta); flex: 0 0 auto; margin-top: 4px; transition: transform .18s ease; }
  .stepes-services-page .industry-row:hover svg { transform: translateX(3px); }
  .stepes-services-page .industry-row h3 { font-size: 20px; margin-bottom: 10px; }
  .stepes-services-page .industry-row p { color: var(--muted); }
  .stepes-services-page .center-link { margin-top: 28px; display: flex; justify-content: center; }

  .stepes-services-page .faq-section { background: #fff; }
  .stepes-services-page .faq-layout { display: grid; grid-template-columns: minmax(250px, .64fr) minmax(0, 1.36fr); gap: 72px; align-items: start; }
  .stepes-services-page .faq-intro { max-width: 390px; }
  .stepes-services-page .faq-intro h2 { margin-bottom: 18px; }
  .stepes-services-page .faq-intro p { font-size: 17px; }
  .stepes-services-page .faq-panel { border-top: 1px solid var(--line); }
  .stepes-services-page .faq-item { border-bottom: 1px solid var(--line); }
  .stepes-services-page .faq-question { width: 100%; min-height: 76px; padding: 20px 2px; border: 0; background: transparent; text-align: left; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--ink); cursor: pointer; font-family: inherit; font-size: 18px; line-height: 1.4; font-weight: 600; }
  .stepes-services-page .faq-toggle { width: 32px; height: 32px; border-radius: 50%; border: 1px solid #D6D2D7; color: var(--magenta); display: inline-flex; align-items: center; justify-content: center; flex: 0 0 auto; font-size: 22px; line-height: 1; }
  .stepes-services-page .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .22s ease; }
  .stepes-services-page .faq-answer > div { overflow: hidden; font-size: 16px; line-height: 1.7; color: var(--body); padding-right: 48px; }
  .stepes-services-page .faq-answer.is-open { grid-template-rows: 1fr; }
  .stepes-services-page .faq-answer.is-open > div { padding-bottom: 26px; }

  .stepes-services-page .final-cta { background: var(--blush); border-top: 1px solid #F0DDE6; }
  .stepes-services-page .final-cta-inner { display: grid; grid-template-columns: minmax(0, 1fr) auto; gap: 54px; align-items: center; }
  .stepes-services-page .cta-copy { max-width: 800px; }
  .stepes-services-page .cta-copy h2 { margin-bottom: 18px; }
  .stepes-services-page .cta-copy p { font-size: 18px; line-height: 1.62; }
  .stepes-services-page .cta-actions { display: flex; flex-direction: column; gap: 12px; min-width: 170px; }

  @media (max-width: 1100px) {
    .stepes-services-page .shell { padding-left: 40px; padding-right: 40px; }
    .stepes-services-page .hero-grid { grid-template-columns: minmax(0, 1.05fr) minmax(360px, .95fr); gap: 36px; }
    .stepes-services-page .experience-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .stepes-services-page .experience-item + .experience-item { border-left: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .experience-item:nth-child(4) { border-left: 0; border-top: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .experience-item:nth-child(5) { border-top: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .industry-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  @media (max-width: 900px) {
    .stepes-services-page .shell { padding-left: 24px; padding-right: 24px; }
    .stepes-services-page .section-shell { padding-top: 80px; padding-bottom: 80px; }
    .stepes-services-page .hero.section-shell { padding-top: 88px; padding-bottom: 88px; }
    .stepes-services-page h1 { font-size: 42px; }
    .stepes-services-page h2 { font-size: 32px; }
    .stepes-services-page h3 { font-size: 22px; }
    .stepes-services-page .hero-grid { grid-template-columns: 1fr; gap: 42px; }
    .stepes-services-page .hero-copy { max-width: 790px; margin: 0 auto; text-align: center; }
    .stepes-services-page .hero-copy h1, .stepes-services-page .hero-lead, .stepes-services-page .hero-support { margin-left: auto; margin-right: auto; }
    .stepes-services-page .hero-actions { justify-content: center; }
    .stepes-services-page .hero-visual { max-width: 650px; margin: 0 auto; width: 100%; }
    .stepes-services-page .experience-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .stepes-services-page .experience-item { border-top: 0; }
    .stepes-services-page .experience-item + .experience-item { border-left: 0; }
    .stepes-services-page .experience-item:nth-child(even) { border-left: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .experience-item:nth-child(n+3) { border-top: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .experience-item:nth-child(5) { grid-column: 1 / -1; border-left: 0; }
    .stepes-services-page .proof-grid { grid-template-columns: repeat(6, minmax(0, 1fr)); }
    .stepes-services-page .proof-item { grid-column: span 2; }
    .stepes-services-page .proof-item:nth-child(4), .stepes-services-page .proof-item:nth-child(5) { grid-column: span 3; border-top: 1px solid var(--line); }
    .stepes-services-page .proof-item:nth-child(4)::before { display: none; }
    .stepes-services-page .service-family { grid-template-columns: 1fr; gap: 20px; }
    .stepes-services-page .service-family-title { align-items: center; }
    .stepes-services-page .service-family-title h3 { padding-top: 0; }
    .stepes-services-page .split-grid { grid-template-columns: 1fr; gap: 38px; }
    .stepes-services-page .split-heading { max-width: 760px; margin: 0 auto; }
    .stepes-services-page .split-heading .eyebrow, .stepes-services-page .split-heading h2, .stepes-services-page .split-heading .section-lead-left { text-align: center; }
    .stepes-services-page .split-heading .section-lead-left { max-width: 700px; margin-left: auto; margin-right: auto; }
    .stepes-services-page .enterprise-grid { grid-template-columns: 1fr; }
    .stepes-services-page .enterprise-item { min-height: 0; }
    .stepes-services-page .faq-layout { grid-template-columns: 1fr; gap: 32px; }
    .stepes-services-page .faq-intro { max-width: 760px; }
    .stepes-services-page .final-cta-inner { grid-template-columns: 1fr; gap: 30px; }
    .stepes-services-page .cta-copy { max-width: 820px; margin: 0 auto; text-align: center; }
    .stepes-services-page .cta-actions { flex-direction: row; min-width: 0; justify-content: center; }
  }

  @media (max-width: 767px) {
    .stepes-services-page .shell { padding-left: 20px; padding-right: 20px; }
    .stepes-services-page .section-shell { padding-top: 68px; padding-bottom: 68px; }
    .stepes-services-page .hero.section-shell { padding-top: 72px; padding-bottom: 72px; }
    .stepes-services-page h1 { font-size: 38px; line-height: 1.08; }
    .stepes-services-page h2 { font-size: 30px; }
    .stepes-services-page h3 { font-size: 20px; }
    .stepes-services-page .hero-copy { text-align: center; }
    .stepes-services-page .hero-copy h1, .stepes-services-page .hero-lead, .stepes-services-page .hero-support { margin-left: auto; margin-right: auto; }
    .stepes-services-page .hero-lead { font-size: 18px; }
    .stepes-services-page .hero-actions { justify-content: center; }
    .stepes-services-page .hero-actions .button { min-width: 170px; }
    .stepes-services-page .section-heading { margin-bottom: 38px; }
    .stepes-services-page .section-heading p { font-size: 17px; }
    .stepes-services-page .centered-heading { text-align: center; }
    .stepes-services-page .proof-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .stepes-services-page .proof-item { grid-column: auto; min-height: 104px; padding: 22px 12px; }
    .stepes-services-page .proof-item + .proof-item::before { display: none; }
    .stepes-services-page .proof-item:nth-child(n+3) { border-top: 1px solid var(--line); }
    .stepes-services-page .proof-item:nth-child(even) { border-left: 1px solid var(--line); }
    .stepes-services-page .proof-item:nth-child(5) { grid-column: 1 / -1; border-left: 0; }
    .stepes-services-page .service-family { padding: 40px 0; }
    .stepes-services-page .service-family-title { justify-content: center; text-align: center; flex-direction: column; gap: 12px; }
    .stepes-services-page .service-family-body { text-align: left; }
    .stepes-services-page .service-link-grid { grid-template-columns: 1fr; row-gap: 0; margin-top: 20px; }
    .stepes-services-page .service-family-body .family-cta { margin-top: 20px; }
    .stepes-services-page .experience-grid { grid-template-columns: 1fr; border-bottom: 0; }
    .stepes-services-page .experience-item:nth-child(5) { grid-column: auto; }
    .stepes-services-page .experience-item { padding: 28px 0 30px; border-left: 0 !important; border-top: 1px solid rgba(255,255,255,.15); }
    .stepes-services-page .experience-item:first-child { border-top: 0; }
    .stepes-services-page .experience-item { text-align: left; }
    .stepes-services-page .model-row { padding: 26px 22px; }
    .stepes-services-page .model-row { grid-template-columns: 1fr; gap: 14px; }
    .stepes-services-page .enterprise-grid { grid-template-columns: 1fr; }
    .stepes-services-page .enterprise-item { min-height: 0; padding: 30px 24px; }
    .stepes-services-page .industry-grid { grid-template-columns: 1fr; }
    .stepes-services-page .industry-row { min-height: 0; padding: 26px 22px; }
    .stepes-services-page .faq-question { font-size: 17px; min-height: 72px; }
    .stepes-services-page .faq-answer > div { padding-right: 0; }
    .stepes-services-page .cta-copy { text-align: center; }
    .stepes-services-page .cta-actions { justify-content: center; }
  }

  @media (max-width: 420px) {
    .stepes-services-page .hero-actions, .stepes-services-page .cta-actions { flex-direction: column; width: 100%; }
    .stepes-services-page .hero-actions .button, .stepes-services-page .cta-actions .button { width: 100%; }
    .stepes-services-page .proof-grid { grid-template-columns: 1fr; }
    .stepes-services-page .proof-item { border-top: 1px solid var(--line); border-left: 0 !important; }
    .stepes-services-page .proof-item:first-child { border-top: 0; }
    .stepes-services-page .proof-item:nth-child(5) { grid-column: auto; }
    .stepes-services-page .hero-visual { margin-top: 2px; }
    .stepes-services-page .model-list { border-radius: 24px; }
    .stepes-services-page .model-row { padding: 24px 20px; }
    .stepes-services-page .industry-row { gap: 14px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .stepes-services-page *, .stepes-services-page *::before, .stepes-services-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }`;
