const QUOTE_URL = "https://app.stepes.com/quote/";
const CONTACT_URL = "https://www.stepes.com/contact-us/";

const Icon = ({ name, size = 24 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.65",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3.5 9h17M3.5 15h17M12 3c2.3 2.3 3.5 5.3 3.5 9S14.3 18.7 12 21M12 3C9.7 5.3 8.5 8.3 8.5 12S9.7 18.7 12 21"/></>,
    document: <><path d="M6 2.8h8l4 4V21H6z"/><path d="M14 2.8V7h4M9 11h6M9 15h6M9 18h4"/></>,
    website: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M7 6h.01M10 6h.01M6.5 12h5M6.5 15h8"/></>,
    software: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18M8.5 12l-2 2 2 2M15.5 12l2 2-2 2M13 11l-2 6"/></>,
    phone: <><rect x="7" y="2.5" width="10" height="19" rx="2"/><path d="M10 5h4M11.5 18.5h1"/></>,
    technical: <><path d="M14.5 5.5l4 4M16.5 3.5l4 4M4 20l5.5-1.5L19 9l-4-4-9.5 9.5z"/><path d="M8.7 15.3l-2-2"/></>,
    marketing: <><path d="M4 13v-2l12-5v12z"/><path d="M7 14.5l1 5h3l-1-6M18 9.5c1.3.8 2 1.6 2 2.5s-.7 1.7-2 2.5"/></>,
    learning: <><path d="M3 6.5L12 3l9 3.5-9 3.5z"/><path d="M6 8.8v5.4c0 1.7 2.7 3.3 6 3.3s6-1.6 6-3.3V8.8M21 7v6"/></>,
    media: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M10 9l5 3-5 3z"/></>,
    certificate: <><path d="M7 3h10v10a5 5 0 0 1-10 0z"/><path d="M9 19l-1 3 4-2 4 2-1-3M9.5 9.5l1.5 1.5 3-3"/></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M10 9v12M6 6h.01M9 6h.01"/></>,
    life: <><path d="M12 3v18M5 12h14"/><circle cx="12" cy="12" r="9"/></>,
    healthcare: <><path d="M12 21s-7-4.3-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.7-7 10-7 10z"/><path d="M9 12h2l1-2 2 4 1-2h2"/></>,
    device: <><rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/></>,
    manufacturing: <><path d="M3 21V9l6 4V9l6 4V5h6v16z"/><path d="M7 17h2M12 17h2M17 17h2"/></>,
    finance: <><path d="M4 20h16M6 17V9M10 17V9M14 17V9M18 17V9M3 9h18L12 3z"/></>,
    legal: <><path d="M12 3v18M6 6h12M8 6l-4 7h8zM16 6l-4 7h8zM8 21h8"/></>,
    retail: <><path d="M5 8h14l-1 13H6zM8 8a4 4 0 0 1 8 0"/></>,
    energy: <><path d="M13 2L5 14h6l-1 8 9-13h-6z"/></>,
    ai: <><path d="M8 4a4 4 0 0 0-4 4v2a3 3 0 0 0 1 5.2V17a3 3 0 0 0 5 2.2M16 4a4 4 0 0 1 4 4v2a3 3 0 0 1-1 5.2V17a3 3 0 0 1-5 2.2M12 3v18M8 8h2M14 8h2M8 15h2M14 15h2"/></>,
    terminology: <><circle cx="7" cy="7" r="3"/><circle cx="17" cy="17" r="3"/><path d="M9.2 9.2l5.6 5.6M14 7h5v5M10 17H5v-5"/></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4M9 9h6v6H9z"/></>,
    portal: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 13h4M7 16h7M17 13h.01"/></>,
    api: <><path d="M8 6L3 12l5 6M16 6l5 6-5 6M14 3l-4 18"/></>,
    check: <><circle cx="12" cy="12" r="9"/><path d="M8 12l2.5 2.5L16 9"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    exchange: <><path d="M5 8h13M15 5l3 3-3 3"/><path d="M19 16H6M9 13l-3 3 3 3"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
    shield: <><path d="M12 3l8 3v5c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6z"/><path d="M8.5 12l2.2 2.2 4.8-5"/></>,
    scale: <><path d="M12 3v18M6 6h12M8 21h8"/><path d="M6 6l-3 6h6zM18 6l-3 6h6z"/></>,
  };

  return <svg {...common}>{paths[name] || paths.globe}</svg>;
};

const ArrowLink = ({ href, children, className = "" }) => (
  <a className={`editorial-link ${className}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={18} />
  </a>
);

const PrimaryButton = ({ href, children }) => (
  <a className="btn btn-primary" href={href}>
    <span>{children}</span><Icon name="arrow" size={18} />
  </a>
);

const SecondaryButton = ({ href, children }) => (
  <a className="btn btn-secondary" href={href}>
    <span>{children}</span><Icon name="arrow" size={18} />
  </a>
);

const ServiceRow = ({ icon, title, copy, items, href, linkLabel }) => (
  <article className="service-row">
    <div className="icon-box"><Icon name={icon} /></div>
    <div className="service-main">
      <h3>{title}</h3>
      <p>{copy}</p>
      <ul className="compact-list">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
    <ArrowLink href={href}>{linkLabel}</ArrowLink>
  </article>
);

const IndustryItem = ({ icon, title, copy, links }) => (
  <article className="industry-item">
    <div className="industry-head">
      <span className="industry-icon"><Icon name={icon} /></span>
      <h3>{title}</h3>
    </div>
    <p>{copy}</p>
    <div className="industry-links">
      {links.map(([href, label]) => <ArrowLink href={href} key={href}>{label}</ArrowLink>)}
    </div>
  </article>
);

const proofItems = [
  ["ISO 17100 / 9001 / 13485", "Quality systems for professional and regulated content"],
  ["French for France + Regional French", "Market-specific language instead of one generic version"],
  ["100+ Languages", "One partner for French and broader multilingual programs"],
  ["AI + Human Quality", "The right workflow for content risk, scale, and speed"],
];

const marketSignals = [
  ["France", "Reach one of the world’s largest economies with content adapted for French customers, professionals, regulators, and institutions."],
  ["Canada", "Support an important bilingual market with Canadian French handled as a distinct linguistic and commercial requirement."],
  ["Global Francophone Reach", "Connect with customers, employees, and partners across Belgium, Switzerland, Africa, and other French-speaking markets."],
];

const serviceGroups = [
  {
    eyebrow: "BUSINESS AND TECHNICAL CONTENT",
    title: "Translate the Documents That Run Your Business",
    intro: "From customer communications to highly specialized documentation, Stepes combines native-language expertise with terminology control and production-ready file handling.",
    rows: [
      {
        icon: "document",
        title: "French Document Translation",
        copy: "Translate reports, policies, contracts, manuals, presentations, training, and regulatory materials while preserving structure and intended use.",
        items: ["Microsoft Office and PDF", "Adobe InDesign and FrameMaker", "XML and structured content"],
        href: "https://www.stepes.com/french-document-translation-services/",
        linkLabel: "French Document Translation Services",
      },
      {
        icon: "technical",
        title: "French Technical Translation",
        copy: "Communicate complex products, systems, and procedures with linguists who understand the technical subject behind the words.",
        items: ["Engineering and product specifications", "Installation and service manuals", "Safety, manufacturing, and training content"],
        href: "https://www.stepes.com/technical-translation-services/",
        linkLabel: "Technical Translation Services",
      },
      {
        icon: "certificate",
        title: "Certified French Translation",
        copy: "Prepare official, legal, academic, employment, immigration, and administrative documents for formal use.",
        items: ["Certification statements", "Institution-specific deliverables", "Notarization coordination when required"],
        href: "https://www.stepes.com/certified-translation-services/",
        linkLabel: "Certified Translation Services",
      },
    ],
  },
  {
    eyebrow: "DIGITAL PRODUCTS AND EXPERIENCES",
    title: "Build Complete French Digital Experiences",
    intro: "Localize every customer touchpoint—from search and discovery to product use, help content, updates, and ongoing support.",
    rows: [
      {
        icon: "website",
        title: "French Website Translation",
        copy: "Create a natural French customer journey across corporate sites, e-commerce, landing pages, knowledge bases, forms, and metadata.",
        items: ["CMS and structured-content workflows", "French keyword and search-intent localization", "Continuous website updates"],
        href: "https://www.stepes.com/website-translation-services/",
        linkLabel: "Website Translation Services",
      },
      {
        icon: "software",
        title: "French Software and SaaS Localization",
        copy: "Keep product terminology concise and consistent across interfaces, help centers, release notes, documentation, and support content.",
        items: ["Resource files, variables, and placeholders", "Translation memory and terminology", "In-context linguistic review"],
        href: "https://www.stepes.com/software-translation-services/",
        linkLabel: "Software & SaaS Translation Services",
      },
      {
        icon: "phone",
        title: "French Mobile App Localization",
        copy: "Adapt onboarding, navigation, notifications, account experiences, support, and app-store content for French users.",
        items: ["Character-limit management", "Linguistic and functional testing", "Release-ready mobile updates"],
        href: "https://www.stepes.com/app-translation-services/",
        linkLabel: "Mobile App Translation Services",
      },
    ],
  },
  {
    eyebrow: "BRAND, LEARNING, AND MEDIA",
    title: "Make French Content Persuasive, Engaging, and Production-Ready",
    intro: "Creative and multimedia content requires more than accuracy. It must preserve the intended response while working naturally in French.",
    rows: [
      {
        icon: "marketing",
        title: "French Marketing Translation and Transcreation",
        copy: "Adapt campaigns, brand messaging, launches, digital content, and calls to action while preserving strategic intent and brand personality.",
        items: ["Campaign and website copy", "Product and sales content", "Creative review and transcreation"],
        href: "https://www.stepes.com/marketing-translation-services/",
        linkLabel: "Marketing Translation Services",
      },
      {
        icon: "learning",
        title: "French eLearning Translation",
        copy: "Localize employee training, customer education, compliance courses, assessments, voice-over, and learning-platform content.",
        items: ["Storyline and authoring formats", "Subtitles and voice-over", "Functional and linguistic QA"],
        href: "https://www.stepes.com/elearning-translation-services/",
        linkLabel: "eLearning Translation Services",
      },
      {
        icon: "media",
        title: "French Multimedia and Voice-Over",
        copy: "Coordinate transcription, script translation, subtitling, timing, voice production, on-screen text, and final media review.",
        items: ["Corporate and product video", "Training and educational media", "Marketing and customer support content"],
        href: "https://www.stepes.com/voice-over-services/",
        linkLabel: "Enterprise Voice-Over Services",
      },
      {
        icon: "layout",
        title: "French Desktop Publishing",
        copy: "Maintain professional page design when translated text changes line length, page flow, tables, labels, graphics, and typography.",
        items: ["InDesign, Illustrator, and FrameMaker", "Microsoft Office production", "Print-ready visual quality assurance"],
        href: "https://www.stepes.com/multilingual-desktop-publishing/",
        linkLabel: "Multilingual Desktop Publishing",
      },
    ],
  },
];

const industries = [
  ["life", "Life Sciences and Pharmaceuticals", "Clinical, patient-facing, regulatory, pharmacovigilance, product, and quality content supported by specialized linguistic workflows.", [["https://www.stepes.com/life-sciences-translation-services/", "Life Sciences Translation Services"]]],
  ["healthcare", "Healthcare", "Patient communications, digital health, clinical documentation, portals, training, and public-health content.", [["https://www.stepes.com/healthcare-translation-services/", "Healthcare Translation Services"]]],
  ["device", "Medical Devices", "Instructions for use, labels, software interfaces, regulatory materials, training, and quality-system documentation.", [["https://www.stepes.com/medical-device-translation-services/", "Medical Device Translation Services"]]],
  ["manufacturing", "Aerospace, Manufacturing, and Engineering", "Manuals, procedures, specifications, safety content, supply-chain communications, and technical training.", [["https://www.stepes.com/manufacturing-translation-services/", "Manufacturing Translation Services"]]],
  ["software", "Software and Technology", "Applications, websites, documentation, developer content, support, product releases, and continuous localization.", [["https://www.stepes.com/software-translation-services/", "Software & SaaS Translation Services"]]],
  ["finance", "Financial Services and Insurance", "Customer communications, reports, disclosures, digital banking, policies, claims, and fintech experiences.", [["https://www.stepes.com/financial-translation-services/", "Financial Translation Services"], ["https://www.stepes.com/insurance-translation-services/", "Insurance Translation Services"]]],
  ["legal", "Legal and Corporate Communications", "Contracts, litigation, compliance, governance, privacy, employment, and corporate policy content.", [["https://www.stepes.com/legal-translation-services/", "Legal Translation Services"]]],
  ["retail", "Retail and E-Commerce", "Product catalogs, packaging, e-commerce journeys, campaigns, loyalty content, and multilingual customer support.", [["https://www.stepes.com/retail-ecommerce-translation-services/", "Retail & E-Commerce Translation Services"]]],
  ["energy", "Energy", "Technical documentation, safety procedures, environmental materials, training, sustainability, and corporate reporting.", [["https://www.stepes.com/energy-translation-services/", "Energy Translation Services"]]],
];

const aiModes = [
  ["ai", "AI Translation", "Selected high-volume, time-sensitive, or lower-risk content where rapid access matters most."],
  ["check", "AI + Professional Post-Editing", "Scalable documentation, knowledge bases, operational content, and frequently updated information."],
  ["users", "Professional Human Translation", "Customer-facing, technical, and important business content requiring stronger contextual control."],
  ["shield", "Subject-Matter Translation and Review", "Medical, legal, financial, scientific, engineering, and regulated content."],
  ["marketing", "Transcreation", "Campaigns, advertising, launches, and brand messaging that must create the right response in French."],
  ["globe", "In-Market Validation", "Major launches, sensitive terminology, regional adaptation, and high-visibility customer experiences."],
];

const workflowModels = [
  ["document", "File-Based Translation", "Submit documents, presentations, design files, spreadsheets, XML, resource files, and multimedia scripts for managed translation and delivery."],
  ["portal", "Translation Management Portal", "Centralize submissions, project tracking, communication, review, approvals, downloads, and reporting across departments and programs."],
  ["api", "Translation API", "Connect applications, websites, content platforms, product environments, and enterprise systems to automated localization workflows."],
  ["website", "Website Localization Workflows", "Support CMS exports, structured content, APIs, proxy workflows, connectors, and continuous website updates."],
];

const qualitySteps = [
  ["Define the Target Market", "Confirm France, Canada, Belgium, Switzerland, another Francophone country, or a broader international audience."],
  ["Assess the Content", "Review source material, file formats, subject matter, audience, risk, repetition, and technical requirements."],
  ["Select the Quality Model", "Choose AI, post-editing, professional translation, specialist review, transcreation, validation, or a tailored combination."],
  ["Prepare Language Assets", "Organize translation memories, glossaries, style guidance, product references, and regional preferences."],
  ["Translate, Review, and Validate", "Apply qualified linguists, independent review, automated QA, linguistic QA, and in-context testing where appropriate."],
  ["Deliver and Improve", "Provide final content, capture approved feedback, and strengthen linguistic assets for future updates."],
];

const reasons = [
  ["globe", "Market-Specific French", "French for France, Canadian French, and other defined regional requirements—not one generic output."],
  ["users", "Native Professional Linguists", "Target-language experts with the right content, industry, and subject-matter experience."],
  ["shield", "Structured Quality Management", "Defined translation, review, validation, and QA controls matched to each content category."],
  ["ai", "AI + Human Quality", "Different workflow options for different levels of risk, visibility, volume, and speed."],
  ["memory", "Enterprise Language Technology", "Translation memory, terminology, approvals, APIs, automation, and reporting."],
  ["scale", "Scalable Delivery", "Support for individual documents, major launches, and continuously updated content programs."],
];

const faqs = [
  ["What are professional French translation services?", "Professional French translation services convert documents, websites, software, media, and specialized content into accurate, natural French using qualified linguists, terminology management, and appropriate quality review."],
  ["What is the difference between French translation and French localization?", "Translation communicates the meaning of the source in French. Localization also adapts terminology, tone, formats, measurements, currencies, cultural references, regulatory language, and user experience to the intended market."],
  ["What is the difference between French for France and Canadian French?", "The two varieties are mutually understandable, but they can differ in vocabulary, idiom, institutional terminology, consumer language, software conventions, and style. Canadian-facing content should be reviewed by Canadian French linguists."],
  ["Can one French translation be used in every French-speaking market?", "Sometimes a neutral version can support multiple markets, especially for selected technical or international content. Customer-facing, legal, regulated, marketing, software, product, and workplace content may require regional adaptation."],
  ["Does Stepes provide English-to-French and French-to-English translation?", "Yes. Stepes supports both directions for business, technical, legal, medical, financial, scientific, digital, and marketing content, with the English and French markets defined at project setup."],
  ["Does Stepes use native French translators?", "Yes. Projects are assigned to native target-language professionals with relevant subject-matter and content experience. Specialized projects can also include independent reviewers or in-market validators."],
  ["Can Stepes translate technical and regulated French content?", "Yes. We support technical, engineering, medical, life sciences, legal, financial, manufacturing, energy, and other specialized content using terminology control, qualified linguists, review, and QA workflows."],
  ["Does Stepes provide certified French translation?", "Yes. We provide certified French translations for official, legal, immigration, employment, academic, administrative, and other formal uses. Acceptance requirements should be confirmed before the project begins."],
  ["Can Stepes translate our website, software, or mobile app into French?", "Yes. Stepes localizes websites, user interfaces, applications, help centers, notifications, documentation, app-store content, release notes, and customer support materials, with optional SEO and linguistic testing."],
  ["Can AI be used for French translation?", "Yes, when the technology and quality model are appropriate for the content. Lower-risk or high-volume content may use AI or professional post-editing, while creative, regulated, technical, or high-visibility content may require human translation and specialist review."],
  ["How does Stepes maintain consistent French terminology?", "We use terminology databases, translation memory, style guidance, linguistic instructions, automated checks, and professional review. Approved customer feedback can be incorporated for future projects."],
  ["Can our French teams review translations?", "Yes. Customer reviewers can participate in terminology approval, linguistic review, validation, and final acceptance. Stepes can consolidate feedback and capture approved decisions for reuse."],
  ["How much do French translation services cost?", "Cost depends on language direction, volume, repetition, subject matter, market, file format, turnaround, translation memory, production requirements, integrations, and the level of review required."],
  ["How long does French translation take?", "Turnaround depends on volume, complexity, formats, target markets, review requirements, testing, and production. Larger projects can often be organized into phased priority deliveries."],
  ["Does Stepes provide Canadian French translation?", <>Yes. Stepes provides Canadian French translation for websites, software, documents, product content, customer communications, training, legal, financial, healthcare, and regulated content. Visit our <a href="https://www.stepes.com/canadian-french-translation-services/">Canadian French Translation Services</a> page for detailed Canada and Quebec capabilities.</>],
];

export default function FrenchTranslationServicesPillarPage() {
  return (
    <main className="stepes-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-deep: #9F1D55;
          --magenta-dark: #7A1542;
          --pink: #FDF2F7;
          --pink-line: #EBC5D5;
          --dark: #17161A;
          --ink: #25232A;
          --muted: #5E5964;
          --line: #E5E1E6;
          --soft: #F7F6F8;
          --white: #FFFFFF;
          --dark-eyebrow: #F2A7C6;
          --shadow: 0 18px 55px rgba(39, 23, 32, 0.08);
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; }
        .stepes-page {
          color: var(--ink);
          background: #fff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }
        .stepes-page a { color: inherit; }
        .stepes-page p { margin: 0; font-size: 16px; }
        .stepes-page h1, .stepes-page h2, .stepes-page h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; }
        .stepes-page h1 { font-size: 48px; line-height: 1.08; }
        .stepes-page h2 { font-size: 36px; line-height: 1.16; }
        .stepes-page h3 { font-size: 24px; line-height: 1.25; }
        .shell { width: 100%; max-width: 1392px; margin: 0 auto; padding-inline: 56px; }
        .section { padding-block: 96px; }
        .section-dense { padding-block: 80px; }
        .eyebrow {
          display: block;
          margin: 0 0 16px;
          color: var(--magenta) !important;
          font-size: 11px !important;
          line-height: 1.25 !important;
          font-weight: 600 !important;
          letter-spacing: 0.16em !important;
          text-transform: uppercase;
        }
        .eyebrow-dark { color: var(--dark-eyebrow) !important; }
        .section-intro { max-width: 800px; margin-top: 22px; color: var(--muted); font-size: 18px !important; line-height: 1.65; }
        .section-head-centered { text-align: center; max-width: 900px; margin: 0 auto 54px; }
        .section-head-centered .section-intro { margin-inline: auto; }
        .split-head { display: grid; grid-template-columns: minmax(280px, 0.85fr) minmax(420px, 1.15fr); gap: 80px; align-items: start; }
        .split-head .section-intro { margin-top: 0; }
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 50px;
          padding: 13px 22px;
          border-radius: 999px;
          font-size: 16px;
          line-height: 1;
          font-weight: 600;
          text-decoration: none;
          transition: transform .2s ease, box-shadow .2s ease, background .2s ease, border-color .2s ease;
        }
        .btn-primary,
        .btn-primary:link,
        .btn-primary:visited,
        .btn-primary:hover,
        .btn-primary:active,
        .btn-primary:focus,
        .btn-primary:focus-visible {
          color: #fff !important;
          background: var(--magenta);
          border: 1px solid var(--magenta);
        }
        .btn-primary *, .btn-primary svg { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-deep); border-color: var(--magenta-deep); transform: translateY(-1px); box-shadow: 0 12px 28px rgba(193,29,99,.22); }
        .btn-secondary { color: var(--ink); background: #fff; border: 1px solid #D9D4DA; }
        .btn-secondary:hover { border-color: #B9B0BA; transform: translateY(-1px); box-shadow: 0 10px 24px rgba(34,26,32,.08); }
        .btn:focus-visible, .editorial-link:focus-visible, details summary:focus-visible { outline: 3px solid rgba(193,29,99,.24); outline-offset: 3px; }
        .editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--magenta) !important;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          line-height: 1.4;
        }
        .editorial-link svg { transition: transform .2s ease; }
        .editorial-link:hover svg { transform: translateX(3px); }
        .hero {
          position: relative;
          padding: 104px 0 92px;
          background:
            radial-gradient(circle at 10% 10%, rgba(193,29,99,.055), transparent 27%),
            radial-gradient(circle at 90% 15%, rgba(193,29,99,.045), transparent 24%),
            linear-gradient(#fff, #fff);
        }
        .hero::after {
          content: "";
          position: absolute;
          inset: auto 0 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--line) 15%, var(--line) 85%, transparent);
        }
        .hero-inner { text-align: center; max-width: 1020px; margin: 0 auto; position: relative; z-index: 1; }
        .hero h1 { max-width: 850px; margin-inline: auto; }
        .hero-copy { max-width: 790px; margin: 26px auto 0; color: var(--muted); font-size: 18px !important; line-height: 1.7; }
        .hero-actions { display: flex; align-items: center; justify-content: center; gap: 12px; margin-top: 34px; }
        .hero-visual {
          position: relative;
          display: grid;
          grid-template-columns: minmax(0, .88fr) minmax(0, 1.12fr);
          gap: 18px;
          max-width: 970px;
          margin: 64px auto 0;
          min-height: 310px;
          padding: 18px;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: linear-gradient(135deg, #FFFFFF 0%, #FFFFFF 58%, #FDF5F8 100%);
          box-shadow: 0 22px 54px rgba(35, 27, 33, .09);
          overflow: hidden;
        }
        .hero-visual::before {
          content: "";
          position: absolute;
          top: 0;
          left: 42px;
          width: 88px;
          height: 3px;
          border-radius: 0 0 4px 4px;
          background: var(--magenta);
        }
        .hero-visual::after { display: none; }
        .language-core {
          position: relative;
          z-index: 1;
          min-width: 0;
          min-height: 274px;
          padding: 34px;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-end;
          background: linear-gradient(145deg, #242027 0%, #17151A 100%);
          color: #fff;
          box-shadow: 0 16px 34px rgba(24, 21, 26, .15);
          overflow: hidden;
        }
        .language-core::after {
          content: "FR";
          position: absolute;
          right: -14px;
          top: -28px;
          font-size: 146px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: -10px;
          color: rgba(255,255,255,.055);
          pointer-events: none;
        }
        .core-kicker {
          position: relative;
          z-index: 1;
          display: block;
          margin: 0 0 auto;
          color: #F2A7C6;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .core-code {
          position: relative;
          z-index: 1;
          display: block;
          font-size: 68px;
          line-height: .92;
          font-weight: 600;
          letter-spacing: -.055em;
        }
        .core-title {
          position: relative;
          z-index: 1;
          display: block;
          margin-top: 16px;
          font-size: 22px;
          line-height: 1.2;
          font-weight: 600;
          color: #fff;
        }
        .core-copy {
          position: relative;
          z-index: 1;
          display: block;
          max-width: 310px;
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.55;
          color: #D7D1D8;
        }
        .market-panel {
          min-width: 0;
          padding: 24px 28px 22px 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .market-panel-label {
          display: block;
          margin-bottom: 8px;
          color: var(--magenta);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 600;
          letter-spacing: .17em;
          text-transform: uppercase;
        }
        .market-list { display: flex; flex-direction: column; }
        .market-node {
          position: relative;
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 16px;
          align-items: center;
          min-width: 0;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }
        .market-node:last-child { border-bottom: 0; }
        .market-mark {
          width: 42px;
          height: 42px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          background: var(--soft);
          color: var(--magenta);
          font-size: 13px;
          line-height: 1;
          font-weight: 600;
          letter-spacing: .04em;
        }
        .market-copy { min-width: 0; }
        .market-copy strong {
          display: block;
          font-size: 17px;
          line-height: 1.3;
          font-weight: 600;
          color: var(--ink);
        }
        .market-copy span {
          display: block;
          margin-top: 5px;
          font-size: 16px;
          line-height: 1.45;
          color: var(--muted);
        }
        .proof-band { background: #fff; }
        .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-block: 1px solid var(--line); }
        .proof-item { padding: 27px 28px; min-width: 0; }
        .proof-item + .proof-item { border-left: 1px solid var(--line); }
        .proof-item strong { display: block; font-size: 16px; line-height: 1.35; font-weight: 600; }
        .proof-item span { display: block; margin-top: 7px; color: var(--muted); font-size: 16px; line-height: 1.5; }
        .market-grid { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 58px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .market-signal { padding: 30px 32px 34px 0; }
        .market-signal + .market-signal { padding-left: 32px; border-left: 1px solid var(--line); }
        .market-signal h3 { font-size: 20px; }
        .market-signal p { margin-top: 12px; color: var(--muted); }
        .regional { background: var(--soft); }
        .region-layout { display: grid; grid-template-columns: 1.15fr .85fr; gap: 28px; margin-top: 52px; }
        .region-primary {
          position: relative;
          padding: 44px;
          min-height: 530px;
          border: 1px solid var(--line);
          border-radius: 30px;
          background: #fff;
          overflow: hidden;
        }
        .region-primary::after {
          content: "FR";
          position: absolute;
          right: 28px;
          bottom: -48px;
          color: #F4EFF2;
          font-size: 230px;
          font-weight: 600;
          letter-spacing: -.08em;
          line-height: 1;
        }
        .region-primary > * { position: relative; z-index: 1; }
        .region-primary p { max-width: 640px; margin-top: 18px; color: var(--muted); font-size: 18px !important; }
        .region-points { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 30px; margin-top: 30px; max-width: 650px; }
        .region-point { display: flex; gap: 10px; align-items: flex-start; font-size: 16px; }
        .region-point svg { color: var(--magenta); flex: 0 0 auto; margin-top: 1px; }
        .region-list { border: 1px solid var(--line); border-radius: 30px; background: #fff; overflow: hidden; }
        .region-item { padding: 28px 30px; }
        .region-item + .region-item { border-top: 1px solid var(--line); }
        .region-item h3 { font-size: 21px; }
        .region-item p { margin-top: 10px; color: var(--muted); }
        .region-item .editorial-link { margin-top: 15px; }
        .canada-gateway { padding: 0 0 96px; background: var(--soft); }
        .canada-panel {
          display: grid;
          grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
          gap: 56px;
          align-items: center;
          padding: 50px 54px;
          border: 1px solid var(--pink-line);
          border-radius: 30px;
          background: var(--pink);
        }
        .canada-panel p { margin-top: 17px; max-width: 730px; color: #574B52; font-size: 17px !important; }
        .canada-differences { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px 18px; }
        .canada-difference { display: flex; align-items: center; gap: 10px; padding: 10px 0; font-size: 16px; font-weight: 600; }
        .canada-difference svg { color: var(--magenta); }
        .canada-panel .editorial-link { margin-top: 24px; }
        .service-section { background: #fff; }
        .service-group + .service-group { margin-top: 86px; }
        .group-head { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; margin-bottom: 36px; align-items: end; }
        .group-head p { color: var(--muted); font-size: 17px !important; }
        .service-table { border-top: 1px solid var(--line); }
        .service-row {
          display: grid;
          grid-template-columns: 58px minmax(0, 1fr) 245px;
          gap: 26px;
          align-items: center;
          padding: 30px 0;
          border-bottom: 1px solid var(--line);
        }
        .icon-box {
          width: 50px; height: 50px;
          display: grid; place-items: center;
          border-radius: 16px;
          background: var(--soft);
          color: var(--magenta);
        }
        .service-main h3 { font-size: 22px; }
        .service-main > p { max-width: 780px; margin-top: 9px; color: var(--muted); }
        .compact-list { display: flex; flex-wrap: wrap; gap: 8px 20px; margin: 14px 0 0; padding: 0; list-style: none; }
        .compact-list li { position: relative; padding-left: 14px; color: #49434C; font-size: 16px; }
        .compact-list li::before { content: ""; position: absolute; left: 0; top: .72em; width: 5px; height: 5px; border-radius: 50%; background: var(--magenta); transform: translateY(-50%); }
        .service-row > .editorial-link { justify-self: end; text-align: right; }
        .direction-section { background: var(--dark); color: #fff; }
        .direction-layout { display: grid; grid-template-columns: minmax(0, 1fr) 330px minmax(0, 1fr); gap: 44px; align-items: center; }
        .direction-copy p { margin-top: 18px; color: #CCC6CE; font-size: 17px !important; }
        .direction-copy ul { margin: 24px 0 0; padding: 0; list-style: none; }
        .direction-copy li { display: flex; gap: 10px; margin-top: 10px; color: #EEE9EF; }
        .direction-copy li svg { color: var(--dark-eyebrow); flex: 0 0 auto; margin-top: 2px; }
        .direction-visual {
          position: relative;
          height: 300px;
          border: 1px solid #3B363E;
          border-radius: 28px;
          display: grid;
          place-items: center;
          background: #201E23;
          overflow: hidden;
        }
        .direction-visual::before, .direction-visual::after {
          content: "";
          position: absolute;
          width: 190px; height: 190px;
          border: 1px solid #3C3740;
          border-radius: 50%;
        }
        .direction-visual::before { left: -70px; top: 55px; }
        .direction-visual::after { right: -70px; top: 55px; }
        .direction-core { position: relative; z-index: 1; text-align: center; }
        .direction-core .lang-pair { display: flex; align-items: center; justify-content: center; gap: 18px; }
        .lang-code { width: 78px; height: 78px; display: grid; place-items: center; border-radius: 50%; background: #fff; color: var(--ink); font-size: 23px; font-weight: 600; }
        .direction-core svg { color: var(--dark-eyebrow); }
        .direction-core span { display: block; margin-top: 20px; color: #CFC9D0; font-size: 14px; }
        .industries-section { background: var(--soft); }
        .industry-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .industry-item { min-height: 286px; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .industry-head { display: flex; align-items: flex-start; gap: 14px; }
        .industry-icon { width: 46px; height: 46px; flex: 0 0 auto; display: grid; place-items: center; margin-top: 1px; border-radius: 15px; background: var(--pink); color: var(--magenta); }
        .industry-head h3 { font-size: 20px; }
        .industry-item p { margin-top: 18px; color: var(--muted); }
        .industry-links { display: flex; flex-wrap: wrap; gap: 10px 18px; margin-top: 22px; }
        .industry-links .editorial-link { margin-top: 0; }
        .ai-section { background: #fff; }
        .ai-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 78px; align-items: start; }
        .ai-sticky { position: sticky; top: 30px; }
        .ai-sticky p { margin-top: 20px; color: var(--muted); font-size: 18px !important; }
        .ai-principles { margin-top: 30px; padding: 24px; border-radius: 22px; background: var(--pink); }
        .ai-principles strong { display: block; font-size: 16px; }
        .ai-principles p { margin-top: 8px; font-size: 16px !important; color: #5D5058; }
        .ai-mode-list { border-top: 1px solid var(--line); }
        .ai-mode { display: grid; grid-template-columns: 50px minmax(0,1fr); gap: 20px; padding: 28px 0; border-bottom: 1px solid var(--line); }
        .ai-mode .icon-box { width: 46px; height: 46px; border-radius: 15px; }
        .ai-mode h3 { font-size: 21px; }
        .ai-mode p { margin-top: 8px; color: var(--muted); }
        .terminology-section { background: var(--dark); color: #fff; }
        .terminology-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
        .terminology-copy > p { margin-top: 22px; color: #CBC5CC; font-size: 18px !important; }
        .terminology-links { display: flex; flex-wrap: wrap; gap: 22px; margin-top: 30px; }
        .terminology-links .editorial-link { color: var(--dark-eyebrow) !important; }
        .term-visual { padding: 30px; border-radius: 28px; background: #211F24; border: 1px solid #3B363E; }
        .term-header { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid #3B363E; }
        .term-header strong { font-size: 16px; font-weight: 600; }
        .term-status { padding: 6px 11px; border-radius: 999px; background: rgba(242,167,198,.13); color: var(--dark-eyebrow); font-size: 14px; font-weight: 600; }
        .term-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; padding: 20px 0; border-bottom: 1px solid #353139; }
        .term-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .term-label { display: block; color: #97909A; font-size: 14px; }
        .term-value { display: block; margin-top: 5px; color: #fff; font-size: 16px; font-weight: 600; }
        .workflows-section { background: #fff; }
        .workflow-panel { display: grid; grid-template-columns: 280px minmax(0,1fr); border: 1px solid var(--line); border-radius: 30px; overflow: hidden; }
        .workflow-nav { padding: 28px; background: var(--soft); border-right: 1px solid var(--line); }
        .workflow-nav strong { display: block; margin-bottom: 18px; font-size: 16px; }
        .workflow-tab { display: flex; align-items: center; gap: 11px; padding: 13px 14px; border-radius: 14px; font-size: 16px; font-weight: 600; }
        .workflow-tab + .workflow-tab { margin-top: 5px; }
        .workflow-tab.active { background: #fff; box-shadow: 0 7px 20px rgba(34,26,32,.06); color: var(--magenta); }
        .workflow-content { padding: 42px; }
        .workflow-content > p { margin-top: 16px; max-width: 760px; color: var(--muted); font-size: 17px !important; }
        .workflow-models { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0 28px; margin-top: 34px; }
        .workflow-model { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 16px; padding: 25px 0; border-top: 1px solid var(--line); }
        .workflow-model:nth-child(-n+2) { border-top: 1px solid var(--line); }
        .workflow-model .icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .workflow-model h3 { font-size: 19px; }
        .workflow-model p { margin-top: 7px; color: var(--muted); }
        .enterprise-strip { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 28px; }
        .enterprise-chip { padding: 8px 12px; border: 1px solid var(--line); border-radius: 999px; font-size: 16px; color: #4E4851; background: #fff; }
        .quality-section { background: var(--soft); }
        .quality-timeline { display: grid; grid-template-columns: repeat(3, 1fr); margin-top: 54px; border-top: 1px solid var(--line); border-left: 1px solid var(--line); background: #fff; }
        .quality-step { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 16px; align-content: start; padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .step-number { grid-row: 1 / span 2; width: 44px; height: 44px; display: grid; place-items: center; border-radius: 50%; background: var(--pink); border: 1px solid var(--pink-line); color: var(--magenta); font-size: 15px; font-weight: 600; }
        .quality-step h3 { font-size: 19px; }
        .quality-step p { margin-top: 7px; color: var(--muted); }
        .why-section { background: #fff; }
        .reason-grid { display: grid; grid-template-columns: repeat(2, 1fr); margin-top: 50px; border-top: 1px solid var(--line); }
        .reason-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 28px 28px 28px 0; border-bottom: 1px solid var(--line); }
        .reason-item:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
        .reason-item .icon-box { width: 44px; height: 44px; border-radius: 14px; }
        .reason-item h3 { font-size: 20px; }
        .reason-item p { margin-top: 7px; color: var(--muted); }
        .planning-section { background: var(--pink); }
        .planning-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 28px; margin-top: 50px; }
        .planning-panel { padding: 38px; border: 1px solid var(--pink-line); border-radius: 28px; background: #fff; }
        .planning-panel > p { margin-top: 14px; color: var(--muted); }
        .factor-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 11px 22px; margin: 25px 0 0; padding: 0; list-style: none; }
        .factor-list li { display: flex; gap: 9px; align-items: flex-start; font-size: 16px; }
        .factor-list svg { color: var(--magenta); flex: 0 0 auto; margin-top: 2px; }
        .planning-note { margin-top: 28px; padding: 20px 22px; border-left: 3px solid var(--magenta); background: rgba(255,255,255,.68); color: #534850; }
        .planning-actions { display: flex; gap: 12px; margin-top: 30px; }
        .faq-section { background: #fff; }
        .faq-wrap { max-width: 980px; margin: 48px auto 0; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
          min-height: 76px;
          padding: 20px 4px;
          cursor: pointer;
          list-style: none;
          font-size: 18px;
          font-weight: 600;
          line-height: 1.4;
        }
        .faq-item summary::-webkit-details-marker { display: none; }
        .faq-plus { width: 34px; height: 34px; flex: 0 0 auto; display: grid; place-items: center; border-radius: 50%; background: var(--soft); color: var(--magenta); transition: transform .2s ease; }
        .faq-item[open] .faq-plus { transform: rotate(45deg); }
        .faq-answer { max-width: 830px; padding: 0 54px 24px 4px; color: var(--muted); font-size: 16px; }
        .faq-answer a { color: var(--magenta); font-weight: 600; }
        .related-section { background: var(--soft); }
        .related-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; margin-top: 46px; }
        .related-column { padding-top: 22px; border-top: 2px solid var(--line); }
        .related-column:first-child { border-color: var(--magenta); }
        .related-column h3 { font-size: 20px; }
        .related-links { margin: 18px 0 0; padding: 0; list-style: none; }
        .related-links li + li { margin-top: 12px; }
        .related-links a { color: #403A43; text-decoration: none; font-size: 16px; }
        .related-links a:hover { color: var(--magenta); }
        .final-cta { background: #fff; padding: 96px 0; }
        .cta-panel {
          position: relative;
          min-height: 390px;
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(320px, .85fr);
          align-items: center;
          border-radius: 30px;
          overflow: hidden;
          background: var(--pink);
          border: 1px solid var(--pink-line);
        }
        .cta-copy { padding: 60px; position: relative; z-index: 2; }
        .cta-copy p { max-width: 690px; margin-top: 20px; color: #584D54; font-size: 18px !important; }
        .cta-actions { display: flex; gap: 12px; margin-top: 30px; }
        .cta-art {
          position: relative;
          align-self: stretch;
          min-height: 390px;
          overflow: hidden;
          isolation: isolate;
        }
        .cta-art::before {
          content: "";
          position: absolute;
          width: 470px;
          height: 470px;
          right: -120px;
          top: -72px;
          border-radius: 50%;
          background: rgba(232,189,207,.7);
          z-index: -2;
        }
        .cta-fr-system {
          position: absolute;
          inset: 24px 18px 20px 0;
          display: grid;
          place-items: center;
        }
        .cta-fr-flow {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: visible;
          color: rgba(122,21,66,.32);
        }
        .cta-fr-flow path { vector-effect: non-scaling-stroke; }
        .cta-fr-monogram {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: baseline;
          justify-content: center;
          letter-spacing: -16px;
          transform: translate(16px, 2px);
          filter: drop-shadow(0 18px 26px rgba(94,34,61,.10));
        }
        .cta-fr-monogram span {
          display: block;
          font-size: clamp(132px, 13vw, 186px);
          line-height: .8;
          font-weight: 600;
        }
        .cta-fr-f { color: #2D2930; }
        .cta-fr-r { color: var(--magenta); }
        .cta-source-card,
        .cta-target-card {
          position: absolute;
          z-index: 3;
          width: 154px;
          padding: 16px;
          border: 1px solid rgba(89,60,73,.16);
          border-radius: 20px;
          background: rgba(255,255,255,.9);
          box-shadow: 0 16px 34px rgba(73,35,52,.10);
          backdrop-filter: blur(5px);
        }
        .cta-source-card { left: 16px; top: 54px; transform: rotate(-3deg); }
        .cta-target-card { right: 6px; bottom: 42px; transform: rotate(2deg); }
        .cta-lang-label {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 42px;
          height: 28px;
          padding: 0 10px;
          border-radius: 999px;
          background: #F3EDF0;
          color: #3B343B;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: .08em;
        }
        .cta-target-card .cta-lang-label { background: var(--magenta); color: #fff; }
        .cta-mini-lines { display: grid; gap: 7px; margin-top: 14px; }
        .cta-mini-lines span {
          display: block;
          height: 5px;
          border-radius: 999px;
          background: #D9CFD4;
        }
        .cta-mini-lines span:nth-child(2) { width: 76%; }
        .cta-mini-lines span:nth-child(3) { width: 58%; }
        .cta-target-check {
          position: absolute;
          right: -10px;
          top: -10px;
          width: 34px;
          height: 34px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: var(--magenta);
          border: 1px solid var(--pink-line);
          box-shadow: 0 8px 20px rgba(73,35,52,.12);
        }
        .cta-market-tag {
          position: absolute;
          right: 54px;
          top: 62px;
          z-index: 3;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 40px;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.82);
          border: 1px solid rgba(122,21,66,.12);
          color: #51464E;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 10px 24px rgba(73,35,52,.08);
        }
        .cta-market-tag svg { color: var(--magenta); }
        .visually-hidden { position: absolute !important; width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0,0,0,0) !important; white-space: nowrap !important; border: 0 !important; }

        @media (max-width: 1100px) {
          .shell { padding-inline: 40px; }
          .proof-grid { grid-template-columns: repeat(2, 1fr); }
          .proof-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .proof-item:nth-child(4) { border-top: 1px solid var(--line); }
          .region-layout { grid-template-columns: 1fr; }
          .region-primary { min-height: 440px; }
          .region-list { display: grid; grid-template-columns: repeat(2, 1fr); }
          .region-item:nth-child(2) { border-top: 0; border-left: 1px solid var(--line); }
          .region-item:nth-child(4) { border-left: 1px solid var(--line); }
          .direction-layout { grid-template-columns: 1fr 280px 1fr; gap: 28px; }
        }

        @media (max-width: 900px) {
          .shell { padding-inline: 24px; }
          .section { padding-block: 80px; }
          .section-dense { padding-block: 72px; }
          .stepes-page h1 { font-size: 42px; }
          .stepes-page h2 { font-size: 32px; }
          .stepes-page h3 { font-size: 22px; }
          .hero { padding: 88px 0 80px; }
          .hero-visual { grid-template-columns: minmax(0, .94fr) minmax(0, 1.06fr); min-height: 300px; }
          .language-core { min-height: 264px; padding: 30px; }
          .market-panel { padding-inline: 24px; }
          .split-head, .group-head { grid-template-columns: 1fr; gap: 22px; }
          .market-grid { grid-template-columns: 1fr; }
          .market-signal { padding: 26px 0; }
          .market-signal + .market-signal { padding-left: 0; border-left: 0; border-top: 1px solid var(--line); }
          .canada-panel { grid-template-columns: 1fr; gap: 28px; }
          .service-row { grid-template-columns: 54px minmax(0,1fr); align-items: start; }
          .service-row > .editorial-link { grid-column: 2; justify-self: start; text-align: left; margin-top: 2px; }
          .direction-layout { grid-template-columns: 1fr; }
          .direction-visual { order: -1; max-width: 520px; width: 100%; margin-inline: auto; }
          .industry-grid { grid-template-columns: repeat(2, 1fr); }
          .ai-layout, .terminology-layout { grid-template-columns: 1fr; gap: 50px; }
          .ai-sticky { position: static; }
          .workflow-panel { grid-template-columns: 1fr; }
          .workflow-nav { border-right: 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 7px; }
          .workflow-nav strong { grid-column: 1 / -1; width: 100%; }
          .workflow-tab { width: 100%; }
          .workflow-tab + .workflow-tab { margin-top: 0; }
          .workflow-content { padding: 38px 34px; }
          .quality-timeline { grid-template-columns: repeat(2, 1fr); }
          .reason-grid { grid-template-columns: 1fr; }
          .reason-item:nth-child(even) { padding-left: 0; border-left: 0; }
          .planning-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .related-column:last-child { grid-column: 1 / -1; }
          .cta-panel { grid-template-columns: 1fr; }
          .cta-copy { padding: 50px 48px 18px; }
          .cta-art { min-height: 300px; }
          .cta-fr-system { inset: 16px 70px 18px; }
          .cta-fr-monogram span { font-size: clamp(126px, 24vw, 170px); }
          .cta-source-card { left: 0; top: 48px; }
          .cta-target-card { right: 0; bottom: 28px; }
          .cta-market-tag { right: 42px; top: 42px; }
        }

        @media (max-width: 640px) {
          .shell { padding-inline: 20px; }
          .section, .section-dense { padding-block: 68px; }
          .stepes-page h1 { font-size: 38px; line-height: 1.1; }
          .stepes-page h2 { font-size: 30px; line-height: 1.2; }
          .stepes-page h3 { font-size: 20px; }
          .section-intro, .hero-copy, .region-primary p, .direction-copy p, .ai-sticky p, .terminology-copy > p, .cta-copy p { font-size: 17px !important; }
          .hero { padding: 72px 0 64px; }
          .hero-actions, .planning-actions, .cta-actions { flex-direction: column; align-items: stretch; }
          .btn { width: 100%; min-height: 52px; }
          .hero-visual { grid-template-columns: 1fr; gap: 12px; margin-top: 46px; min-height: 0; padding: 12px; border-radius: 24px; }
          .hero-visual::before { left: 32px; width: 72px; }
          .language-core { min-height: 236px; padding: 28px; border-radius: 20px; }
          .language-core::after { font-size: 126px; top: -20px; }
          .core-code { font-size: 58px; }
          .core-title { font-size: 20px; }
          .market-panel { padding: 16px 18px 10px; }
          .market-node { grid-template-columns: 40px minmax(0, 1fr); gap: 14px; padding: 18px 0; }
          .market-mark { width: 40px; height: 40px; border-radius: 12px; }
          .proof-grid { grid-template-columns: 1fr; }
          .proof-item { padding: 23px 4px; }
          .proof-item + .proof-item, .proof-item:nth-child(3), .proof-item:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); }
          .regional { padding-bottom: 0; }
          .region-primary { padding: 30px 24px; min-height: auto; border-radius: 24px; }
          .region-primary::after { font-size: 150px; bottom: -22px; right: 12px; }
          .region-points { grid-template-columns: 1fr; gap: 12px; }
          .region-list { grid-template-columns: 1fr; border-radius: 24px; }
          .region-item:nth-child(2), .region-item:nth-child(4) { border-left: 0; }
          .region-item + .region-item, .region-item:nth-child(2) { border-top: 1px solid var(--line); }
          .canada-gateway { padding-bottom: 68px; }
          .canada-panel { padding: 32px 24px; border-radius: 24px; }
          .canada-differences { grid-template-columns: 1fr; gap: 0; }
          .service-group + .service-group { margin-top: 68px; }
          .service-row { grid-template-columns: 44px minmax(0,1fr); gap: 16px; padding: 26px 0; }
          .icon-box { width: 44px; height: 44px; border-radius: 14px; }
          .service-row > .editorial-link { grid-column: 1 / -1; padding-left: 60px; }
          .compact-list { display: block; }
          .compact-list li + li { margin-top: 7px; }
          .direction-visual { height: 250px; border-radius: 24px; }
          .industry-grid { grid-template-columns: 1fr; }
          .industry-item { min-height: auto; padding: 26px 24px; }
          .ai-mode { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
          .ai-mode .icon-box { width: 42px; height: 42px; }
          .term-visual { padding: 24px 20px; border-radius: 24px; }
          .term-row { grid-template-columns: 1fr; gap: 12px; }
          .workflow-panel { border-radius: 24px; }
          .workflow-nav { grid-template-columns: 1fr; padding: 22px; }
          .workflow-tab { width: 100%; }
          .workflow-content { padding: 30px 22px; }
          .workflow-models { grid-template-columns: 1fr; }
          .quality-timeline { grid-template-columns: 1fr; margin-top: 38px; border-left: 0; }
          .quality-step { grid-template-columns: 46px minmax(0,1fr); gap: 16px; padding: 24px 0; border-right: 0; }
          .quality-step:first-child { border-top: 1px solid var(--line); }
          .step-number { width: 44px; height: 44px; }
          .reason-item { grid-template-columns: 44px minmax(0,1fr); gap: 15px; padding: 24px 0; }
          .factor-list { grid-template-columns: 1fr; }
          .planning-panel { padding: 30px 24px; border-radius: 24px; }
          .faq-item summary { min-height: 72px; font-size: 17px; }
          .faq-answer { padding-right: 8px; }
          .related-grid { grid-template-columns: 1fr; }
          .related-column:last-child { grid-column: auto; }
          .related-links li + li { margin-top: 0; }
          .related-links a { display: inline-flex; align-items: center; min-height: 44px; }
          .final-cta { padding: 68px 0; }
          .cta-panel { border-radius: 24px; }
          .cta-copy { padding: 38px 24px 8px; }
          .cta-art { min-height: 245px; }
          .cta-fr-system { inset: 8px 8px 10px; }
          .cta-fr-monogram { letter-spacing: -10px; transform: translate(8px, 4px); }
          .cta-fr-monogram span { font-size: clamp(104px, 35vw, 132px); }
          .cta-source-card, .cta-target-card { width: 122px; padding: 12px; border-radius: 16px; }
          .cta-source-card { left: 0; top: 35px; }
          .cta-target-card { right: 0; bottom: 18px; }
          .cta-market-tag { right: 8px; top: 24px; min-height: 36px; padding: 7px 11px; font-size: 12px; }
          .cta-mini-lines { gap: 5px; margin-top: 10px; }
          .cta-mini-lines span { height: 4px; }
          .cta-target-check { width: 30px; height: 30px; }
        }

        @media (max-width: 360px) {
          .market-copy strong, .market-copy span { overflow-wrap: anywhere; }
          .editorial-link { overflow-wrap: anywhere; }
          .hero-visual { padding: 10px; gap: 10px; }
          .language-core { min-height: 222px; padding: 24px; }
          .market-panel { padding-inline: 14px; }
          .service-row > .editorial-link { padding-left: 0; grid-column: 1 / -1; }
          .service-main { grid-column: 2; }
          .cta-market-tag { display: none; }
          .cta-source-card, .cta-target-card { width: 108px; }
          .cta-fr-monogram span { font-size: 102px; }
        }
      `}</style>

      <section className="hero" id="top">
        <div className="shell">
          <div className="hero-inner">
            <span className="eyebrow">French for France and Global Markets</span>
            <h1>Enterprise French Translation Services</h1>
            <p className="hero-copy">Translate documents, websites, software, training, multimedia, and specialized content for France and French-speaking markets worldwide. Stepes combines native French linguists, industry expertise, terminology control, and AI-powered workflows to deliver accurate, market-ready French content at enterprise scale.</p>
            <div className="hero-actions">
              <PrimaryButton href={QUOTE_URL}>Get an Instant Quote</PrimaryButton>
              <SecondaryButton href={CONTACT_URL}>Talk to an Expert</SecondaryButton>
            </div>
          </div>

          <div className="hero-visual" aria-label="French localization across distinct global markets">
            <div className="language-core">
              <span className="core-kicker">Primary Market</span>
              <strong className="core-code">FR</strong>
              <span className="core-title">French for France</span>
              <span className="core-copy">Native-market localization for customer, product, and enterprise content.</span>
            </div>

            <div className="market-panel">
              <span className="market-panel-label">Additional Market Coverage</span>
              <div className="market-list">
                <div className="market-node">
                  <span className="market-mark">CA</span>
                  <span className="market-copy"><strong>Canada</strong><span>Dedicated Canadian French localization</span></span>
                </div>
                <div className="market-node">
                  <span className="market-mark">EU</span>
                  <span className="market-copy"><strong>Belgium + Switzerland</strong><span>Regional terminology and local conventions</span></span>
                </div>
                <div className="market-node">
                  <span className="market-mark">GL</span>
                  <span className="market-copy"><strong>Global Francophone Markets</strong><span>Country-specific or neutral French as needed</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-band" aria-label="Stepes French translation proof points">
        <div className="shell">
          <div className="proof-grid">
            {proofItems.map(([title, copy]) => <div className="proof-item" key={title}><strong>{title}</strong><span>{copy}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="french-speaking-markets">
        <div className="shell">
          <div className="split-head">
            <div>
              <h2>Connect With French-Speaking Markets Through Language That Feels Local</h2>
            </div>
            <p className="section-intro">French supports business across some of the world’s most important commercial markets. To compete effectively, your content must do more than communicate the general meaning—it should reflect the terminology, tone, formatting, and customer expectations of the people who will use it.</p>
          </div>
          <div className="market-grid">
            {marketSignals.map(([title, copy]) => <article className="market-signal" key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section regional" id="regional-french">
        <div className="shell">
          <div className="section-head-centered">
            <h2>French Localization for Distinct Markets</h2>
            <p className="section-intro">French remains mutually intelligible across regions, but vocabulary, tone, idiom, formatting, product language, and institutional terminology can vary. Stepes defines the target market before translation begins.</p>
          </div>
          <div className="region-layout">
            <article className="region-primary">
              <span className="eyebrow">PRIMARY MARKET VARIETY</span>
              <h3>French for France</h3>
              <p>Reach customers, employees, regulators, and business partners in France with contemporary professional French tailored to the content’s purpose. Our native linguists account for commercial usage, technical language, digital conventions, local formats, and customer communication styles.</p>
              <div className="region-points">
                {["Corporate and customer communications","Websites and e-commerce","Software and mobile applications","Technical and product documentation","Marketing and transcreation","Legal, medical, and regulated content"].map((item) => <div className="region-point" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
              </div>
            </article>
            <div className="region-list">
              <article className="region-item">
                <h3>Canadian French</h3>
                <p>A distinct market variety with its own terminology, preferred expressions, institutional vocabulary, and customer expectations. Detailed Canada and Quebec support is highlighted below.</p>
              </article>
              <article className="region-item">
                <h3>Belgian French</h3>
                <p>Local terminology, administrative language, numbering conventions, and consumer expressions for Belgian audiences.</p>
              </article>
              <article className="region-item">
                <h3>Swiss French</h3>
                <p>Swiss terminology and multilingual-market conventions for healthcare, finance, technology, manufacturing, and public communications.</p>
              </article>
              <article className="region-item">
                <h3>Francophone African Markets</h3>
                <p>Neutral international French, country-specific adaptation, or in-market validation based on the actual country and audience.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="canada-gateway" aria-labelledby="canada-title">
        <div className="shell">
          <div className="canada-panel">
            <div>
              <span className="eyebrow">CANADIAN FRENCH SPECIALIZATION</span>
              <h2 id="canada-title">Localizing for Canada or Quebec?</h2>
              <p>Canadian French differs from French for France across terminology, idiomatic usage, government and legal vocabulary, consumer language, software terminology, and workplace communications. Stepes provides specialized English-to-Canadian-French and Canadian-French-to-English translation for digital, product, business, and regulated content.</p>
              <ArrowLink href="https://www.stepes.com/canadian-french-translation-services/">Explore Canadian French Translation Services</ArrowLink>
            </div>
            <div className="canada-differences">
              {["Market terminology","Product language","Software vocabulary","Institutional usage","Customer communications","Regional review"].map((item) => <div className="canada-difference" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section service-section" id="services">
        <div className="shell">
          <div className="section-head-centered">
            <h2>French Translation Services for Every Customer Touchpoint</h2>
            <p className="section-intro">Create a connected French experience across documents, digital products, websites, training, media, and customer communications—supported by consistent terminology and enterprise-ready production workflows.</p>
          </div>

          {serviceGroups.map((group) => (
            <div className="service-group" key={group.title}>
              <div className="group-head">
                <div><span className="eyebrow">{group.eyebrow}</span><h2>{group.title}</h2></div>
                <p>{group.intro}</p>
              </div>
              <div className="service-table">
                {group.rows.map((row) => <ServiceRow {...row} key={row.title} />)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section direction-section" id="english-french">
        <div className="shell">
          <div className="direction-layout">
            <div className="direction-copy">
              <span className="eyebrow eyebrow-dark">ENGLISH TO FRENCH</span>
              <h2>Launch French Content With the Right Market Definition</h2>
              <p>Translate business, technical, legal, medical, scientific, digital, and marketing content into French for the specific customers and markets you need to reach.</p>
              <ul>
                {["Target-country selection","Native French linguists","Subject-matter expertise","Terminology and brand control"].map((item) => <li key={item}><Icon name="check" size={18}/><span>{item}</span></li>)}
              </ul>
            </div>
            <div className="direction-visual" aria-label="English and French translation in both directions">
              <div className="direction-core">
                <div className="lang-pair"><div className="lang-code">EN</div><Icon name="exchange" size={30}/><div className="lang-code">FR</div></div>
                <span>Professional translation in both directions</span>
              </div>
            </div>
            <div className="direction-copy">
              <span className="eyebrow eyebrow-dark">FRENCH TO ENGLISH</span>
              <h2>Bring French Knowledge Into Global English</h2>
              <p>Support cross-border collaboration, corporate reporting, research, regulatory work, legal matters, and international business communications.</p>
              <ul>
                {["U.S., UK, or Canadian English","Corporate and technical communication","Research and regulatory content","Defined review and QA workflows"].map((item) => <li key={item}><Icon name="check" size={18}/><span>{item}</span></li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section industries-section" id="industries">
        <div className="shell">
          <div className="section-head-centered">
            <h2>French Translation Expertise Across Industries</h2>
            <p className="section-intro">Specialized terminology, regulatory concepts, technical procedures, and safety-critical information require linguists who understand the industry behind the content.</p>
          </div>
          <div className="industry-grid">
            {industries.map(([icon,title,copy,links]) => <IndustryItem key={title} icon={icon} title={title} copy={copy} links={links} />)}
          </div>
        </div>
      </section>

      <section className="section ai-section" id="ai-human-workflows">
        <div className="shell">
          <div className="ai-layout">
            <div className="ai-sticky">
              <h2>AI-Powered French Translation, Matched to Content Risk</h2>
              <p>Not every piece of content needs the same production model. Stepes helps you select the right balance of AI automation, professional translation, specialist review, and in-market validation for each content category.</p>
              <div className="ai-principles">
                <strong>The workflow should reflect the content.</strong>
                <p>Audience, visibility, subject matter, regulatory or safety risk, brand sensitivity, volume, update frequency, turnaround, and lifespan all matter.</p>
              </div>
            </div>
            <div className="ai-mode-list">
              {aiModes.map(([icon,title,copy]) => <article className="ai-mode" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section terminology-section" id="terminology">
        <div className="shell">
          <div className="terminology-layout">
            <div className="terminology-copy">
              <span className="eyebrow eyebrow-dark">LANGUAGE GOVERNANCE</span>
              <h2>Consistent French Terminology Across Teams, Content, and Markets</h2>
              <p>Approved terminology, translation memory, regional language rules, and structured reviewer feedback help protect clarity across product lines, departments, content types, and long-term localization programs.</p>
              <div className="terminology-links">
                <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
                <ArrowLink href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
              </div>
            </div>
            <div className="term-visual" aria-label="Example of market-specific French terminology governance">
              <div className="term-header"><strong>Approved French Terminology</strong><span className="term-status">Governed</span></div>
              <div className="term-row"><div><span className="term-label">Source term</span><span className="term-value">Customer support</span></div><div><span className="term-label">French for France</span><span className="term-value">Service client</span></div></div>
              <div className="term-row"><div><span className="term-label">Canadian French</span><span className="term-value">Soutien à la clientèle</span></div><div><span className="term-label">Usage guidance</span><span className="term-value">Apply by destination market</span></div></div>
              <div className="term-row"><div><span className="term-label">Terminology status</span><span className="term-value">Approved</span></div><div><span className="term-label">Reuse status</span><span className="term-value">Validated for future content</span></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section workflows-section" id="enterprise-workflows">
        <div className="shell">
          <div className="section-head-centered">
            <span className="eyebrow">CONNECTED CONTENT OPERATIONS</span>
            <h2>French Localization That Fits Your Content Environment</h2>
            <p className="section-intro">Move beyond isolated file handoffs. Stepes supports individual projects, centralized enterprise programs, continuous website updates, and automated product localization.</p>
          </div>
          <div className="workflow-panel">
            <div className="workflow-nav">
              <strong>Enterprise program capabilities</strong>
              <div className="workflow-tab active"><Icon name="portal" size={20}/>Content workflows</div>
              <div className="workflow-tab"><Icon name="memory" size={20}/>Language assets</div>
              <div className="workflow-tab"><Icon name="users" size={20}/>Review and approvals</div>
              <div className="workflow-tab"><Icon name="api" size={20}/>Reporting and integrations</div>
            </div>
            <div className="workflow-content">
              <h2>Support Projects, Platforms, and Continuous Content</h2>
              <p>Choose the workflow that fits how your content is created, reviewed, released, and updated. Enterprise programs can combine multiple models under shared terminology, translation memory, quality controls, and reporting.</p>
              <div className="workflow-models">
                {workflowModels.map(([icon,title,copy]) => <article className="workflow-model" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
              </div>
              <div className="enterprise-strip">
                {["User roles and approvals","Workflow automation","Translation memory","Terminology management","Reporting and analytics","Integration flexibility"].map((item) => <span className="enterprise-chip" key={item}>{item}</span>)}
              </div>
              <div style={{marginTop:"28px",display:"flex",flexWrap:"wrap",gap:"22px"}}>
                <ArrowLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</ArrowLink>
                <ArrowLink href="https://www.stepes.com/developers/translation-api/">Translation API</ArrowLink>
                <ArrowLink href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics</ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section quality-section" id="quality-process">
        <div className="shell">
          <div className="section-head-centered">
            <h2>A French Translation Quality Process Built Around Your Content</h2>
            <p className="section-intro">Quality begins by defining what the translation must accomplish. The workflow then adapts to the audience, market, subject matter, file environment, risk, and business purpose.</p>
          </div>
          <div className="quality-timeline">
            {qualitySteps.map(([title,copy], index) => <article className="quality-step" key={title}><span className="step-number">{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section why-section" id="why-stepes">
        <div className="shell">
          <div className="split-head">
            <div><h2>Why Enterprises Choose Stepes for French Translation</h2></div>
            <p className="section-intro">Combine market-specific French, native professional linguists, subject-matter expertise, scalable delivery, and connected language technology through one global partner.</p>
          </div>
          <div className="reason-grid">
            {reasons.map(([icon,title,copy]) => <article className="reason-item" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}
          </div>
        </div>
      </section>

      <section className="section planning-section" id="planning">
        <div className="shell">
          <div className="section-head-centered">
            <h2>Plan Your French Translation Program With Confidence</h2>
            <p className="section-intro">A reliable estimate considers the content, target market, workflow, format, review requirements, and delivery model—not only the number of words.</p>
          </div>
          <div className="planning-grid">
            <article className="planning-panel">
              <h3>Factors That Affect Cost</h3>
              <p>Pricing reflects the resources and controls required to produce the right result for the intended use.</p>
              <ul className="factor-list">
                {["Language direction","Word count and repetition","Target market","Subject matter","Quality workflow","File and production format","Translation memory leverage","Testing and integrations","Customer review","Turnaround and update frequency"].map((item) => <li key={item}><Icon name="check" size={18}/><span>{item}</span></li>)}
              </ul>
            </article>
            <article className="planning-panel">
              <h3>Factors That Affect Timeline</h3>
              <p>Large or specialized programs can often be divided into priority groups and delivered in planned stages.</p>
              <ul className="factor-list">
                {["Content volume","Subject complexity","File engineering","Number of target markets","Review stages","Desktop publishing","Multimedia production","In-context testing","Customer approvals","Phased delivery priorities"].map((item) => <li key={item}><Icon name="check" size={18}/><span>{item}</span></li>)}
              </ul>
            </article>
          </div>
          <p className="planning-note">France French and Canadian French should be scoped separately when both markets require genuinely localized output. Approved content can often be adapted efficiently, but one regional version should not automatically be deployed into the other market unchanged.</p>
          <div className="planning-actions">
            <PrimaryButton href={QUOTE_URL}>Get an Instant Quote</PrimaryButton>
            <SecondaryButton href={CONTACT_URL}>Discuss an Enterprise Program</SecondaryButton>
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faqs">
        <div className="shell">
          <div className="section-head-centered">
            <h2>French Translation Services FAQs</h2>
          </div>
          <div className="faq-wrap">
            {faqs.map(([question,answer], index) => <details className="faq-item" key={question} open={index === 0}><summary><span>{question}</span><span className="faq-plus"><Icon name="plus" size={18}/></span></summary><div className="faq-answer">{typeof answer === "string" ? <p>{answer}</p> : <p>{answer}</p>}</div></details>)}
          </div>
        </div>
      </section>

      <section className="section-dense related-section" id="related-solutions">
        <div className="shell">
          <div className="split-head">
            <div><h2>Extend Your French Localization Program</h2></div>
            <p className="section-intro">Connect this language pillar with specialized market, content, industry, and platform capabilities across the Stepes website.</p>
          </div>
          <div className="related-grid">
            <div className="related-column">
              <h3>French and Language Services</h3>
              <ul className="related-links">
                <li><a href="https://www.stepes.com/canadian-french-translation-services/">Canadian French Translation Services</a></li>
                <li><a href="https://www.stepes.com/french-document-translation-services/">French Document Translation Services</a></li>
                <li><a href="https://www.stepes.com/translation-services/">Professional Translation Services</a></li>
                <li><a href="https://www.stepes.com/certified-translation-services/">Certified Translation Services</a></li>
                <li><a href="https://www.stepes.com/legal-translation-services/">Legal Translation Services</a></li>
              </ul>
            </div>
            <div className="related-column">
              <h3>Digital and Multimedia Localization</h3>
              <ul className="related-links">
                <li><a href="https://www.stepes.com/website-translation-services/">Website Translation Services</a></li>
                <li><a href="https://www.stepes.com/software-translation-services/">Software & SaaS Translation Services</a></li>
                <li><a href="https://www.stepes.com/software-localization-services/">Software Localization Services</a></li>
                <li><a href="https://www.stepes.com/elearning-translation-services/">eLearning Translation Services</a></li>
                <li><a href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</a></li>
              </ul>
            </div>
            <div className="related-column">
              <h3>Enterprise Translation Technology</h3>
              <ul className="related-links">
                <li><a href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</a></li>
                <li><a href="https://www.stepes.com/developers/translation-api/">Translation API</a></li>
                <li><a href="https://www.stepes.com/translation-memory/">Translation Memory</a></li>
                <li><a href="https://www.stepes.com/terminology-management/">Terminology Management</a></li>
                <li><a href="https://www.stepes.com/translation-reporting-analytics/">Reporting and Analytics</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="cta-title">
        <div className="shell">
          <div className="cta-panel">
            <div className="cta-copy">
              <span className="eyebrow">START YOUR FRENCH PROGRAM</span>
              <h2 id="cta-title">Translate and Localize French Content With Confidence</h2>
              <p>Reach customers across France and global French-speaking markets with content that is accurate, natural, and built for its intended audience. Start with one project or create a continuous enterprise localization program.</p>
              <div className="cta-actions">
                <PrimaryButton href={QUOTE_URL}>Get an Instant Quote</PrimaryButton>
                <SecondaryButton href={CONTACT_URL}>Talk to an Expert</SecondaryButton>
              </div>
            </div>
            <div className="cta-art" aria-hidden="true">
              <div className="cta-fr-system">
                <svg className="cta-fr-flow" viewBox="0 0 520 360" preserveAspectRatio="none">
                  <path d="M138 108 C204 62, 314 54, 382 96" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 8" />
                </svg>

                <div className="cta-source-card">
                  <span className="cta-lang-label">EN</span>
                  <div className="cta-mini-lines"><span></span><span></span><span></span></div>
                </div>

                <div className="cta-fr-monogram">
                  <span className="cta-fr-f">F</span><span className="cta-fr-r">R</span>
                </div>

                <div className="cta-market-tag"><Icon name="globe" size={18} /><span>France + Global</span></div>

                <div className="cta-target-card">
                  <span className="cta-lang-label">FR</span>
                  <div className="cta-mini-lines"><span></span><span></span><span></span></div>
                  <span className="cta-target-check"><Icon name="check" size={20} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
