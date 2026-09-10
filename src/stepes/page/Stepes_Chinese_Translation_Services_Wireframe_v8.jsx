import React from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#9F1D55",
  magentaDeep: "#7A1542",
  blush: "#FDF2F7",
  blushStrong: "#F8E5EE",
  darkEyebrow: "#F2A7C6",
  ink: "#17141A",
  inkSoft: "#38323B",
  muted: "#6E6670",
  line: "#E7E2E7",
  panel: "#F7F5F7",
  dark: "#211B23",
  white: "#FFFFFF",
};

const markets = [
  {
    market: "Mainland China",
    written: "Simplified Chinese for Mainland China",
    spoken: "Mandarin / Putonghua",
    content: "Regulatory documents, labeling, manuals, software, ecommerce, medical and technical content",
    code: "zh-CN",
  },
  {
    market: "Taiwan",
    written: "Traditional Chinese for Taiwan",
    spoken: "Mandarin",
    content: "Medical, technical, financial, legal, software and customer-facing content",
    code: "zh-TW",
  },
  {
    market: "Hong Kong",
    written: "Traditional Chinese for Hong Kong",
    spoken: "Primarily Cantonese; Mandarin and English may also apply",
    content: "Legal, financial, healthcare, government, corporate and customer communications",
    code: "zh-HK",
  },
  {
    market: "Singapore",
    written: "Simplified Chinese for Singapore",
    spoken: "Mandarin within a multilingual environment",
    content: "Corporate communications, digital services, ecommerce, training and customer support",
    code: "zh-SG",
  },
  {
    market: "United States",
    written: "Simplified, Traditional or both, based on the audience",
    spoken: "Mandarin, Cantonese or another Chinese variety",
    content: "Healthcare, insurance, financial, legal, government and community-facing information",
    code: "US",
  },
];

const regulated = [
  {
    icon: "medical",
    title: "Medical, Pharmaceutical and Life Sciences",
    body: "Clinical, regulatory and patient-facing Chinese translation supported by therapeutic-area expertise, controlled terminology, independent review and fit-for-purpose validation.",
    items: ["Clinical trial and COA content", "Medical-device IFUs and labeling", "Safety, quality and regulatory documents"],
    links: [
      ["Medical Translation Services", "https://www.stepes.com/medical-translation-services/"],
      ["Linguistic Validation", "https://www.stepes.com/linguistic-validation-services/"],
    ],
  },
  {
    icon: "healthcare",
    title: "Healthcare and Patient Communication",
    body: "Accessible Chinese-language communication for patients, members and communities across print, portals, mobile experiences, recorded media and interpretation.",
    items: ["Patient forms and instructions", "Benefits and member communications", "Mandarin and Cantonese interpretation"],
    links: [["Healthcare Translation Services", "https://www.stepes.com/healthcare-translation-services/"]],
  },
  {
    icon: "legal",
    title: "Legal, Patent and Compliance Content",
    body: "Precise Chinese translation for documents where jurisdiction, defined terms, evidence handling and secure workflow management are essential.",
    items: ["Contracts, litigation and arbitration", "Patents and intellectual property", "Compliance and regulatory investigations"],
    links: [["Legal Translation Services", "https://www.stepes.com/legal-translation-services/"]],
  },
  {
    icon: "finance",
    title: "Financial Services and Insurance",
    body: "Market-specific Chinese terminology for banking, insurance, investment, risk and compliance communications across Hong Kong, Mainland China, Taiwan, Singapore and U.S. audiences.",
    items: ["Financial and investor communications", "Policies, claims and member notices", "Audit and due-diligence materials"],
    links: [["Financial Translation Services", "https://www.stepes.com/financial-translation-services/"]],
  },
];

const workflow = [
  {
    title: "Define the Audience and Locale",
    body: "Confirm the target market, written Chinese locale, spoken-language needs, audience, intended use and delivery channel.",
  },
  {
    title: "Assess Content and Risk",
    body: "Evaluate subject matter, regulatory or legal importance, volume, format, repetition, publishing requirements and review level.",
  },
  {
    title: "Assign Qualified Linguists",
    body: "Select translators and reviewers by native locale, language direction, industry expertise, document type and required qualifications.",
  },
  {
    title: "Prepare Language Assets",
    body: "Centralize approved glossaries, style guides, translation memories, product names, references and previously validated content.",
  },
  {
    title: "Translate and Review",
    body: "Apply the appropriate combination of professional translation, AI assistance, post-editing, independent review and subject-matter validation.",
  },
  {
    title: "Complete Final QA",
    body: "Verify terminology, numbers, names, warnings, tags, links, fonts, visual layout and file integrity before delivery.",
  },
];

const qaChecks = [
  "Incorrect market or institutional terminology",
  "Simplified characters remaining in a Traditional Chinese file",
  "Mainland terms used in Taiwan or Hong Kong",
  "Ambiguous or incorrect character conversion",
  "Inconsistent names, product terms, numbers or units",
  "Broken tags, variables, links or cross-references",
  "Missing fonts, truncated interface text or layout errors",
];

const enterpriseCapabilities = [
  ["Market-specific teams", "Separate linguistic resources for Mainland China, Taiwan, Hong Kong, Singapore, U.S. audiences and Chinese-to-English translation."],
  ["Centralized language assets", "Shared translation memories, approved terminology and market-specific style guides across products, departments and releases."],
  ["Connected workflows", "API, CMS and software localization support for recurring content, agile releases and continuous localization."],
  ["Governed collaboration", "Role-based review, client approvals, secure file exchange and coordinated multi-department delivery."],
  ["Operational visibility", "Project dashboards, reporting, quality tracking and cost analysis for enterprise language programs."],
];

const whyStepes = [
  {
    icon: "globe",
    title: "Market-Specific Chinese Expertise",
    body: "Simplified and Traditional Chinese, Mainland China, Taiwan, Hong Kong, Singapore, U.S. audiences, Mandarin, Cantonese and translation in both directions.",
  },
  {
    icon: "expert",
    title: "Specialized Linguists",
    body: "Subject-matter expertise for medical, legal, financial, manufacturing, software, ecommerce, government and customer communication.",
  },
  {
    icon: "ai",
    title: "AI-Powered Translation Technology",
    body: "Translation memory, terminology management, AI-assisted translation, automated QA, workflow automation, APIs and reporting.",
  },
  {
    icon: "quality",
    title: "Enterprise Quality Management",
    body: "Qualified resources, independent review, controlled terminology, in-context validation and final linguistic and production QA.",
  },
  {
    icon: "delivery",
    title: "End-to-End Language Services",
    body: "Translation, localization, interpretation, multimedia, desktop publishing, software testing and production-ready delivery.",
  },
];

const quoteInputs = [
  "Source and target language",
  "Target market and audience",
  "Simplified or Traditional Chinese, when known",
  "Mandarin or Cantonese requirements",
  "Content type, industry and intended use",
  "Editable source files and reference materials",
  "Existing translations, glossaries or style guides",
  "Certification, review and approval requirements",
  "Requested delivery date",
];

const faqs = [
  {
    q: "What is the difference between Simplified and Traditional Chinese?",
    a: "Simplified and Traditional Chinese are different written forms. Simplified Chinese is primarily used in Mainland China and Singapore. Traditional Chinese is used in Taiwan, Hong Kong and many overseas Chinese communities. The difference extends beyond character appearance: terminology, product names, institutional language, writing conventions and style also vary by market. Professional translation should therefore be localized for the target audience rather than produced through character conversion alone.",
  },
  {
    q: "Is Mandarin the same as Simplified Chinese?",
    a: "No. Mandarin is a spoken Chinese variety, while Simplified Chinese is a writing system. Mandarin-speaking audiences may read Simplified or Traditional Chinese depending on the market. Mainland China generally uses Simplified Chinese, while Taiwan generally uses Traditional Chinese, even though Mandarin is widely spoken in both places.",
  },
  {
    q: "Is Cantonese the same as Traditional Chinese?",
    a: "No. Cantonese is a spoken Chinese variety, while Traditional Chinese is a writing system. Hong Kong audiences commonly speak Cantonese and use Traditional Chinese for formal written communication. Taiwan also uses Traditional Chinese, but Mandarin is the predominant spoken language. This distinction is important for interpretation, voice-over, subtitles, interviews and conversational content.",
  },
  {
    q: "Which Chinese version should I use for Mainland China?",
    a: "Most content intended for Mainland China should use Simplified Chinese localized for Mainland terminology and conventions. Mandarin, or Putonghua, is generally appropriate for interpretation, narration and other spoken content. Regulated materials, product labeling, technical documentation, software and ecommerce content may also require market-specific terminology and compliance review.",
  },
  {
    q: "What type of Chinese is used in Taiwan?",
    a: "Taiwan uses Traditional Chinese with Taiwan-specific terminology and writing conventions. Mandarin is the primary spoken language for most professional and public communication. Taiwan content should not be created solely by converting Mainland Simplified Chinese because medical, legal, financial, technical, software and consumer terminology can differ significantly.",
  },
  {
    q: "What type of Chinese is used in Hong Kong?",
    a: "Hong Kong normally uses Traditional Chinese for formal written content. Cantonese is the primary spoken language for most residents and is often required for interpretation, voice-over, interviews, customer service and conversational media. Hong Kong terminology can differ from both Taiwan and Mainland China, especially in legal, financial, healthcare and government content.",
  },
  {
    q: "Do I need a separate Chinese translation for Singapore?",
    a: "A Singapore-specific version may be appropriate when the content is customer-facing, institutional, regulated or highly market-specific. Singapore commonly uses Simplified Chinese, but terminology, bilingual context, tone, public-sector language and consumer expectations can differ from Mainland China. Stepes can assess whether full localization, targeted adaptation or local linguistic review is the most efficient approach.",
  },
  {
    q: "Should U.S. organizations use Simplified or Traditional Chinese?",
    a: "The right choice depends on the audience. Some U.S. communities primarily use Simplified Chinese, while others prefer Traditional Chinese. National healthcare, insurance, government, financial or customer-service programs may need both. Spoken-language services may also require separate Mandarin and Cantonese support. Audience demographics, location, channel and existing community preferences should guide the decision.",
  },
  {
    q: "Can Simplified Chinese be automatically converted to Traditional Chinese?",
    a: "Automated conversion can be useful as an initial technical step, but it does not create a fully localized translation. Some character mappings depend on context, and terminology differs among Mainland China, Taiwan and Hong Kong. Conversion does not reliably resolve product names, legal terms, medical vocabulary, institutional language, tone, search behavior or market conventions. A qualified target-market linguist should review and localize the content.",
  },
  {
    q: "Does Stepes translate Chinese documents into English?",
    a: "Yes. Stepes provides Chinese-to-English translation for regulatory, legal, medical, scientific, technical, financial, manufacturing and corporate content. Common projects include patents, contracts, clinical reports, regulatory correspondence, supplier documentation, engineering specifications, financial statements, due-diligence files, quality records and litigation materials.",
  },
  {
    q: "How does Stepes translate regulated Chinese content?",
    a: "We begin by identifying the market, audience, content type, intended use and level of risk. Stepes then assigns appropriate subject-matter linguists, prepares approved terminology, selects the required translation workflow and applies independent review and quality assurance. Projects may also include client review, certification statements, desktop publishing and final production checks.",
  },
  {
    q: "Can AI be used for Chinese translation?",
    a: "Yes, when the workflow is appropriate for the content and risk level. AI-assisted translation can improve speed and scalability for repetitive or frequently updated content, especially when grounded in approved terminology and translation memory. Regulated, legal, patient-facing, safety-critical or brand-sensitive content generally requires greater human involvement. Stepes matches AI, professional translation, review and validation to the project’s purpose.",
  },
  {
    q: "Does Stepes provide Mandarin and Cantonese interpretation?",
    a: "Yes. Stepes provides Mandarin and Cantonese interpretation for business meetings, healthcare communication, legal matters, conferences, interviews, training, customer service and other professional settings. Services can include remote, telephone, video and on-site interpretation depending on the engagement.",
  },
  {
    q: "Does Stepes provide Chinese typesetting and desktop publishing?",
    a: "Yes. Stepes provides Chinese desktop publishing for Word, PowerPoint, PDF, InDesign, Illustrator, FrameMaker and technical documentation. Our teams manage fonts, line breaks, punctuation, tables, graphics, screenshots, bookmarks, cross-references and final output. Finished files can receive both linguistic and visual QA.",
  },
];

function Icon({ name, size = 24 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a14 14 0 0 1 0 18" /><path d="M12 3a14 14 0 0 0 0 18" /></>,
    medical: <><path d="M8 3h8v5h5v8h-5v5H8v-5H3V8h5z" /></>,
    healthcare: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8z" /></>,
    legal: <><path d="M12 3v18" /><path d="M5 6h14" /><path d="m5 6-3 6h6z" /><path d="m19 6-3 6h6z" /><path d="M7 21h10" /></>,
    finance: <><path d="M3 10h18" /><path d="M5 10v8" /><path d="M9 10v8" /><path d="M15 10v8" /><path d="M19 10v8" /><path d="M2 21h20" /><path d="m12 3 9 5H3z" /></>,
    expert: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="m17 5 2-2" /><path d="m7 5-2-2" /></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 15h6" /><path d="M12 2v3" /><path d="M12 19v3" /><path d="M2 12h3" /><path d="M19 12h3" /></>,
    quality: <><path d="M12 3 5 6v5c0 4.8 2.9 8.6 7 10 4.1-1.4 7-5.2 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
    delivery: <><path d="M3 7h11v10H3z" /><path d="M14 10h4l3 3v4h-7z" /><circle cx="7" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></>,
    code: <><path d="m8 9-3 3 3 3" /><path d="m16 9 3 3-3 3" /><path d="m14 5-4 14" /></>,
    document: <><path d="M6 2h8l4 4v16H6z" /><path d="M14 2v6h6" /><path d="M9 13h6" /><path d="M9 17h6" /></>,
    documentExchange: <>
      <text x="1.6" y="17.1" fontSize="14" fontWeight="600" fill="currentColor" stroke="none" fontFamily="'Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif">文</text>
      <text x="14.2" y="17.25" fontSize="14.2" fontWeight="600" fill="currentColor" stroke="none" fontFamily="Inter,Arial,sans-serif">A</text>
    </>,
    audio: <><path d="M11 5 6 9H3v6h3l5 4z" /><path d="M15 9a4 4 0 0 1 0 6" /><path d="M18 6a8 8 0 0 1 0 12" /></>,
    factory: <><path d="M3 21V9l6 3V8l6 4V6l6 4v11z" /><path d="M7 17h2" /><path d="M13 17h2" /><path d="M19 17h2" /></>,
    language: <><path d="M4 5h10" /><path d="M9 3v2c0 5-3 8-6 10" /><path d="M6 9c2 3 4 5 7 6" /><path d="m15 19 4-10 4 10" /><path d="M17 15h4" /></>,
    layout: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18" /><path d="M9 9v12" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function ArrowLink({ href, children, inverse = false }) {
  return (
    <a className={`editorial-link${inverse ? " inverse" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={18} />
    </a>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="button primary" href={href}>
      <span>{children}</span><Icon name="arrow" size={18} />
    </a>
  );
}

function SecondaryButton({ href, children, inverse = false }) {
  return (
    <a className={`button secondary${inverse ? " inverse" : ""}`} href={href}>
      <span>{children}</span><Icon name="arrow" size={18} />
    </a>
  );
}

function Eyebrow({ children, dark = false }) {
  return <p className={`eyebrow${dark ? " dark" : ""}`}>{children}</p>;
}

function SectionIntro({ eyebrow, title, body, center = false, dark = false, id }) {
  return (
    <div className={`section-intro${center ? " center" : ""}${dark ? " on-dark" : ""}`} id={id}>
      {eyebrow && <Eyebrow dark={dark}>{eyebrow}</Eyebrow>}
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function CheckList({ items, compact = false }) {
  return (
    <ul className={`check-list${compact ? " compact" : ""}`}>
      {items.map((item) => (
        <li key={item}><span className="check"><Icon name="check" size={17} /></span><span>{item}</span></li>
      ))}
    </ul>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Chinese localization workflow preview">
      <div className="hero-art-topline">
        <span className="window-dots"><i /><i /><i /></span>
        <span>Chinese localization workspace</span>
      </div>
      <div className="hero-art-grid">
        <div className="art-sidebar">
          <span className="art-label">TARGET MARKETS</span>
          <div className="locale active"><b>CN</b><span>Mainland China<small>简体中文</small></span></div>
          <div className="locale"><b>TW</b><span>Taiwan<small>繁體中文</small></span></div>
          <div className="locale"><b>HK</b><span>Hong Kong<small>繁體中文</small></span></div>
          <div className="locale"><b>SG</b><span>Singapore<small>简体中文</small></span></div>
        </div>
        <div className="art-main">
          <div className="art-badges"><span>Medical device</span><span>Human review</span></div>
          <div className="content-pair">
            <div className="content-block source">
              <span className="art-label">SOURCE · ENGLISH</span>
              <strong>Safety and operating instructions</strong>
              <p>Review all warnings before installing or operating the device.</p>
            </div>
            <div className="flow-arrow"><Icon name="arrow" size={20} /></div>
            <div className="content-block target">
              <span className="art-label">TARGET · ZH-CN</span>
              <strong>安全与操作说明</strong>
              <p>安装或操作设备前，请仔细阅读所有警告信息。</p>
            </div>
          </div>
          <div className="art-qa">
            <div><span className="qa-icon"><Icon name="quality" size={18} /></span><span><b>Terminology verified</b><small>Approved device glossary applied</small></span></div>
            <span className="qa-status">READY FOR REVIEW</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MarketMatrix() {
  return (
    <div className="market-matrix" role="table" aria-label="Chinese language market guide">
      <div className="market-head" role="row">
        <span role="columnheader">Market</span>
        <span role="columnheader">Written Chinese</span>
        <span role="columnheader">Spoken Language</span>
        <span role="columnheader">Typical Content</span>
      </div>
      {markets.map((m) => (
        <div className="market-row" role="row" key={m.market}>
          <div className="market-cell market-name" role="cell" data-label="Market">
            <span className="market-code">{m.code}</span>
            <strong>{m.market}</strong>
          </div>
          <div className="market-cell" role="cell" data-label="Written Chinese">{m.written}</div>
          <div className="market-cell" role="cell" data-label="Spoken Language">{m.spoken}</div>
          <div className="market-cell" role="cell" data-label="Typical Content">{m.content}</div>
        </div>
      ))}
    </div>
  );
}

function ChineseTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-shell" id="top">
        <div className="hero-layout">
          <div className="hero-copy">
            <h1>Enterprise Chinese Translation Services</h1>
            <p className="hero-lede">Reach Chinese-speaking audiences with accurate, market-specific translation for regulated documents, technical content, software, websites, ecommerce, multimedia and customer communications.</p>
            <p>Stepes supports Simplified and Traditional Chinese across Mainland China, Taiwan, Hong Kong, Singapore and the United States—together with Mandarin, Cantonese and professional Chinese-to-English translation.</p>
            <div className="hero-actions">
              <PrimaryButton href="https://app.stepes.com/quote/">Get a Translation Quote</PrimaryButton>
              <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to an Expert</SecondaryButton>
            </div>
            <div className="hero-proof">
              <span><Icon name="language" size={20} />Simplified + Traditional</span>
              <span><Icon name="audio" size={20} />Mandarin + Cantonese</span>
              <span><Icon name="ai" size={20} />AI + Human Expertise</span>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="trust-strip" aria-label="Stepes quality credentials">
        <div className="shell trust-row">
          {[
            ["ISO 17100", "Translation quality"],
            ["ISO 9001", "Quality management"],
            ["ISO 13485", "Medical-device quality"],
            ["100+ Languages", "Global coverage"],
            ["AI + Human", "Controlled workflows"],
          ].map(([title, desc]) => (
            <div className="trust-item" key={title}><strong>{title}</strong><span>{desc}</span></div>
          ))}
        </div>
      </section>

      <section className="section section-shell intro-authority">
        <div className="split-heading">
          <div>
            <Eyebrow>MULTI-MARKET EXPERTISE</Eyebrow>
            <h2>Chinese Translation for Multiple Markets, Audiences and Industries</h2>
          </div>
          <div className="split-copy">
            <p className="large">Chinese is not one uniform language requirement. The right solution depends on the written locale, spoken language, market, audience, industry, communication channel and intended use.</p>
            <p>Stepes helps enterprises manage three major demand areas: market-specific Chinese translation for international business, Chinese language access for U.S. communities, and Chinese-to-English translation for cross-border regulatory, legal, scientific, financial and technical content.</p>
            <ArrowLink href="https://www.stepes.com/translation-languages/">Explore All Translation Languages</ArrowLink>
          </div>
        </div>
        <div className="demand-band">
          <div>
            <span className="demand-icon"><Icon name="globe" size={22} /></span>
            <h3>International Markets</h3>
            <p>Product labeling, registration, technical content, software, ecommerce and corporate communication for Mainland China, Taiwan, Hong Kong and Singapore.</p>
          </div>
          <div>
            <span className="demand-icon"><Icon name="healthcare" size={22} /></span>
            <h3>U.S. Language Access</h3>
            <p>Healthcare, insurance, legal, financial, government and customer-facing communication for diverse Chinese-speaking communities.</p>
          </div>
          <div>
            <span className="demand-icon"><Icon name="documentExchange" size={26} /></span>
            <h3>Chinese-to-English Content</h3>
            <p>Regulatory records, clinical documents, patents, contracts, supplier materials, technical specifications and corporate information.</p>
          </div>
        </div>
        <p className="source-note">U.S. language-access context: In the 2018–2022 American Community Survey, Chinese languages collectively were the second-most common non-English language group spoken at home. More than half of Chinese speakers did not report speaking English “very well.”</p>
      </section>

      <section className="section section-shell variant-section" id="chinese-variants">
        <SectionIntro
          eyebrow="CHINESE VARIANT GUIDE"
          title="Choose the Right Chinese Variant for Every Market"
          body="Simplified and Traditional Chinese are written forms. Mandarin and Cantonese are spoken language varieties. They are related decisions, but they are not interchangeable."
          center
        />
        <MarketMatrix />
        <div className="variant-detail-grid">
          <article>
            <span className="detail-tag">MAINLAND CHINA</span>
            <h3>Simplified Chinese + Mandarin</h3>
            <p>Use locally accepted terminology and conventions for product labeling, regulatory materials, medical content, technical manuals, software, ecommerce and customer communication. Product-specific requirements should be reviewed for the applicable sector and intended use.</p>
          </article>
          <article>
            <span className="detail-tag">TAIWAN</span>
            <h3>Traditional Chinese + Mandarin</h3>
            <p>Taiwan uses its own technical, medical, legal, institutional and consumer terminology. A Taiwan version should be localized by qualified Taiwan Chinese linguists rather than created through simple character conversion.</p>
          </article>
          <article>
            <span className="detail-tag">HONG KONG</span>
            <h3>Traditional Chinese + Cantonese</h3>
            <p>Formal written content normally uses Hong Kong Traditional Chinese. Interpretation, voice, interviews and conversational content often require Cantonese, with distinct vocabulary and usage considerations.</p>
          </article>
          <article>
            <span className="detail-tag">SINGAPORE + U.S.</span>
            <h3>Audience-Led Localization</h3>
            <p>Singapore commonly uses Simplified Chinese in a multilingual environment. U.S. programs may need Simplified, Traditional or both, along with separate Mandarin and Cantonese support.</p>
          </article>
        </div>
        <div className="conversion-callout">
          <div className="callout-icon"><Icon name="language" size={28} /></div>
          <div>
            <h3>Script Conversion Is Not Complete Localization</h3>
            <p>Automated conversion can change many characters, but it does not reliably resolve regional terminology, product names, legal and medical language, institutional vocabulary, tone, search terminology or local usage. Stepes combines language technology with review by qualified target-market linguists.</p>
          </div>
        </div>
      </section>

      <section className="section section-shell writing-systems">
        <div className="two-panel-header">
          <div>
            <Eyebrow>WRITTEN CHINESE</Eyebrow>
            <h2>Simplified and Traditional Chinese Translation Services</h2>
          </div>
          <p>Stepes assigns linguists according to the target market—not only the script—so terminology, style and local expectations remain appropriate for each audience.</p>
        </div>
        <div className="writing-grid">
          <article className="writing-panel simplified">
            <div className="writing-title-row"><span className="writing-mark">简</span><div><span className="detail-tag">SIMPLIFIED CHINESE</span><h3>Localized for Mainland China, Singapore and Selected Global Audiences</h3></div></div>
            <p>Professional Simplified Chinese translation for regulated documents, product information, technical materials, websites, software, ecommerce, corporate communication and U.S. language-access programs.</p>
            <CheckList items={["Mainland- and Singapore-specific terminology", "Medical, legal, technical and digital expertise", "Terminology management and market review"]} />
          </article>
          <article className="writing-panel traditional">
            <div className="writing-title-row"><span className="writing-mark">繁</span><div><span className="detail-tag">TRADITIONAL CHINESE</span><h3>Distinct Localization for Taiwan, Hong Kong and Overseas Audiences</h3></div></div>
            <p>Professional Traditional Chinese translation for regulatory, legal, medical, financial, technical, software, public-information and customer-facing content.</p>
            <CheckList items={["Separate Taiwan and Hong Kong locales", "Regional terminology and institutional language", "Cantonese considerations for spoken content"]} />
          </article>
        </div>
      </section>

      <section className="section section-shell direction-section">
        <SectionIntro
          title="English-to-Chinese and Chinese-to-English Translation"
          body="Stepes helps global organizations communicate with Chinese-speaking audiences while enabling Chinese-origin content to reach regulators, courts, partners, researchers and customers around the world."
        />
        <div className="direction-grid">
          <article className="direction-panel">
            <div className="direction-top"><span>EN</span><Icon name="arrow" size={22} /><span>中文</span></div>
            <h3>English-to-Chinese Translation</h3>
            <p>Market-specific localization for product labeling, medical-device instructions, clinical and patient materials, manuals, software, websites, legal and financial content, marketing and multimedia.</p>
            <CheckList compact items={["Separate market versions when required", "Consistent product and brand terminology", "Human review matched to content risk"]} />
          </article>
          <article className="direction-panel">
            <div className="direction-top"><span>中文</span><Icon name="arrow" size={22} /><span>EN</span></div>
            <h3>Chinese-to-English Translation</h3>
            <p>Precise professional English for regulatory submissions, clinical and scientific records, patents, litigation, financial due diligence, supplier documentation, engineering specifications and quality records.</p>
            <CheckList compact items={["Clear interpretation of compressed source phrasing", "Subject-matter and document-type matching", "Fit-for-purpose legal, regulatory and technical review"]} />
          </article>
        </div>
      </section>

      <section className="section regulated-section">
        <div className="section-shell">
          <SectionIntro
            title="Chinese Translation for Regulated and High-Risk Content"
            body="High-impact materials require qualified linguists, controlled terminology, independent review, traceable workflows, secure handling and delivery matched to the content’s purpose."
          />
          <div className="regulated-list">
            {regulated.map((item) => (
              <article className="regulated-row" key={item.title}>
                <div className="regulated-icon"><Icon name={item.icon} size={24} /></div>
                <div className="regulated-copy">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <CheckList compact items={item.items} />
                </div>
                <div className="regulated-links">
                  {item.links.map(([label, href]) => <ArrowLink key={label} href={href}>{label}</ArrowLink>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-shell technical-section">
        <div className="technical-layout">
          <div className="technical-copy">
            <h2>Chinese Technical and Manufacturing Translation</h2>
            <p className="large">Chinese translation supports global product development, manufacturing, supply chains, installation, operation, maintenance and quality management in both directions.</p>
            <p>Stepes translates user manuals, engineering specifications, work instructions, safety content, quality records, supplier documentation, technical drawings, software documentation, automotive materials, electronics content and industrial-equipment information.</p>
            <CheckList items={["Product terminology and part-name control", "Numbers, units, warnings and cross-references", "Structured files, tags and repeated content", "Linguistic and visual production QA"]} />
            <div className="inline-links">
              <ArrowLink href="https://www.stepes.com/technical-translation-services/">Technical Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/manufacturing-translation-services/">Manufacturing Translation Services</ArrowLink>
            </div>
          </div>
          <div className="technical-visual" aria-label="Technical Chinese content workflow">
            <div className="tech-sheet">
              <div className="tech-sheet-header"><span><Icon name="factory" size={20} /> Product Manual</span><b>ZH-CN</b></div>
              <div className="tech-diagram">
                <svg viewBox="0 0 340 188" role="img" aria-label="Industrial equipment diagram">
                  <rect x="86" y="44" width="166" height="96" rx="12" fill="#F2EFF2" stroke="#BBB3BC" />
                  <rect x="111" y="64" width="116" height="54" rx="8" fill="#FFFFFF" stroke="#D5CFD6" />
                  <path d="M135 92h68M169 70v44" stroke="#8D858F" strokeWidth="2" />
                  <circle cx="86" cy="92" r="16" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
                  <circle cx="252" cy="92" r="16" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2" />
                  <path d="M30 36h66M244 32h70M28 150h78M234 154h80" stroke="#AFA7B0" />
                  <path d="M96 36 86 76M244 32l8 44M106 150l16-30M234 154l-16-34" stroke="#AFA7B0" />
                </svg>
                <span className="diagram-label l1">安全联锁装置</span>
                <span className="diagram-label l2">控制面板</span>
                <span className="diagram-label l3">维护入口</span>
                <span className="diagram-label l4">紧急停止按钮</span>
              </div>
              <div className="tech-status"><span><Icon name="check" size={16} /> 42 terminology checks passed</span><span><Icon name="layout" size={16} /> Layout verified</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section digital-section">
        <div className="section-shell">
          <SectionIntro
            title="Chinese Website, Software and Ecommerce Localization"
            body="Chinese users need to navigate, understand, search, register, purchase and obtain support naturally in their preferred market version—not simply see English replaced with Chinese characters."
            center
          />
          <div className="digital-grid">
            <article>
              <div className="digital-icon"><Icon name="globe" size={24} /></div>
              <h3>Website Localization</h3>
              <p>Market-specific navigation, calls to action, search terms, forms, user journeys, metadata, images, downloads and legal or regulatory content.</p>
              <ArrowLink href="https://www.stepes.com/website-translation-services/">Website Translation Services</ArrowLink>
            </article>
            <article>
              <div className="digital-icon"><Icon name="code" size={24} /></div>
              <h3>Software and App Localization</h3>
              <p>User interfaces, mobile apps, SaaS, embedded systems, error messages, onboarding, accessibility labels, resource files and in-context testing.</p>
              <ArrowLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</ArrowLink>
            </article>
            <article>
              <div className="digital-icon"><Icon name="delivery" size={24} /></div>
              <h3>Ecommerce Localization</h3>
              <p>Product names, descriptions, attributes, catalogs, checkout, customer service, marketplace listings, returns, warranties and automated messages.</p>
              <ArrowLink href="https://www.stepes.com/retail-ecommerce-translation-services/">Retail and Ecommerce Translation</ArrowLink>
            </article>
          </div>
          <div className="digital-note">
            <strong>In-context Chinese review matters.</strong>
            <span>Stepes tests terminology, string length, punctuation, variables, line breaks, visual hierarchy and user experience across the localized interface.</span>
          </div>
        </div>
      </section>

      <section className="section section-shell access-section">
        <div className="access-layout">
          <div className="access-stat">
            <span className="stat-kicker">U.S. LANGUAGE ACCESS</span>
            <strong>51.8%</strong>
            <p>of people who spoke Chinese at home did not report speaking English “very well” in the 2018–2022 ACS.</p>
            <span className="source-note">Source: U.S. Census Bureau</span>
          </div>
          <div className="access-copy">
            <h2>Chinese Language Access for U.S. Communities</h2>
            <p className="large">Chinese-speaking communities in the United States include people with different regional, linguistic, cultural and generational backgrounds. Some audiences prefer Simplified Chinese, others Traditional Chinese, and many programs need both.</p>
            <p>Stepes helps healthcare providers, government agencies, insurers, financial institutions, law firms, educational organizations and customer-service teams support vital documents, portals, mobile applications, notices, recorded messages, accessible media and Mandarin or Cantonese interpretation.</p>
            <div className="access-options">
              <div><span>Simplified Chinese</span><small>Audience and community dependent</small></div>
              <div><span>Traditional Chinese</span><small>Audience and community dependent</small></div>
              <div><span>Mandarin</span><small>Interpretation, audio and voice</small></div>
              <div><span>Cantonese</span><small>Interpretation, audio and voice</small></div>
            </div>
            <p className="guardrail">Language-access requirements vary by organization, program, jurisdiction, audience and applicable policy. Stepes helps build practical workflows aligned with your communication needs and operating requirements.</p>
            <div className="inline-links">
              <ArrowLink href="https://www.stepes.com/healthcare-translation-services/">Healthcare Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/interpretation-services/">Interpretation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section spoken-section">
        <div className="section-shell">
          <SectionIntro
            title="Mandarin and Cantonese Interpretation, Voice and Multimedia"
            body="Mandarin and Cantonese are distinct spoken varieties. The right choice depends on the participants, market, community and communication setting."
          />
          <div className="spoken-layout">
            <div className="spoken-main">
              <article>
                <div className="spoken-label"><span>普通话</span><small>MAINLAND CHINA + TAIWAN + SINGAPORE</small></div>
                <h3>Mandarin Language Services</h3>
                <p>Remote and on-site interpretation, business meetings, conferences, clinical interviews, market research, customer service, voice-over, narration, transcription, subtitling and eLearning.</p>
                <ArrowLink href="https://www.stepes.com/mandarin-translation-services/">Mandarin Language Services</ArrowLink>
              </article>
              <article>
                <div className="spoken-label"><span>粵語</span><small>HONG KONG + U.S. COMMUNITIES</small></div>
                <h3>Cantonese Language Services</h3>
                <p>Hong Kong business communication, U.S. healthcare and community programs, legal and financial meetings, interpretation, voice-over, transcription, subtitling and conversational content.</p>
                <ArrowLink href="https://www.stepes.com/cantonese-translation-services/">Cantonese Language Services</ArrowLink>
              </article>
            </div>
            <aside className="media-panel">
              <div className="media-wave" aria-hidden="true">
                {[20,34,52,28,68,44,30,58,76,42,60,34,48,24,40,64,38,22].map((h, i) => <i style={{height: `${h}%`}} key={i} />)}
              </div>
              <h3>Chinese Multimedia Localization</h3>
              <p>Translation, transcription, timing, subtitles, voice talent, recording, audio engineering, on-screen text replacement and final media QA.</p>
              <div className="inline-links vertical">
                <ArrowLink inverse href="https://www.stepes.com/multimedia-translation-services/">Multimedia Localization Services</ArrowLink>
                <ArrowLink inverse href="https://www.stepes.com/voice-over-services/">Voice-Over Services</ArrowLink>
                <ArrowLink inverse href="https://www.stepes.com/interpretation-services/">Interpretation Services</ArrowLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-shell publishing-section">
        <div className="publishing-layout">
          <div className="publishing-visual" aria-label="Chinese document publishing preview">
            <div className="doc-shadow back" />
            <div className="doc-shadow mid" />
            <div className="doc-page">
              <div className="doc-brand"><span>STEPES</span><b>ZH-TW</b></div>
              <div className="doc-rule" />
              <h4>產品安全與操作指南</h4>
              <p>本指南說明設備的安裝、操作與維護要求。</p>
              <div className="doc-layout-grid">
                <div className="doc-image"><Icon name="factory" size={40} /></div>
                <div className="doc-lines"><i /><i /><i /><i /></div>
              </div>
              <div className="doc-table"><span /><span /><span /><span /><span /><span /></div>
              <div className="doc-footer"><span>Stepes multilingual publishing</span><span>12</span></div>
            </div>
          </div>
          <div className="publishing-copy">
            <Eyebrow>DOCUMENT PRODUCTION</Eyebrow>
            <h2>Chinese Document Translation and Multilingual Publishing</h2>
            <p className="large">Chinese text can affect page composition, tables, diagrams, callouts, interface labels, font behavior and visual hierarchy.</p>
            <p>Stepes supports Word, PowerPoint, Excel, PDF, InDesign, Illustrator, FrameMaker, XML, DITA, structured content, scanned documents, forms and technical drawings.</p>
            <CheckList items={["Chinese font selection and embedding", "Line breaks, punctuation and character spacing", "Tables, graphics, screenshots and cross-references", "Print, digital and final PDF quality assurance"]} />
            <div className="inline-links">
              <ArrowLink href="https://www.stepes.com/document-translation-services/">Document Translation Services</ArrowLink>
              <ArrowLink href="https://www.stepes.com/multilingual-desktop-publishing/">Multilingual Desktop Publishing</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="section ai-section">
        <div className="section-shell">
          <div className="ai-layout">
            <div className="ai-copy">
              <h2>AI-Powered Chinese Translation with Professional Human Review</h2>
              <p className="large">Enterprise AI translation works best when technology, terminology, human expertise and quality controls are matched to the content’s purpose and risk.</p>
              <p>Stepes evaluates the subject matter, audience, market, volume, repetition, regulatory or legal importance, existing translation assets, deadline, security requirements and required quality level before selecting the workflow.</p>
              <div className="ai-links">
                <ArrowLink inverse href="https://www.stepes.com/ai-machine-learning-translation-services/">AI and Machine Learning Translation</ArrowLink>
                <ArrowLink inverse href="https://www.stepes.com/terminology-management/">Terminology Management</ArrowLink>
                <ArrowLink inverse href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
              </div>
            </div>
            <div className="ai-model">
              <div className="ai-model-header"><span>Workflow fit assessment</span><span className="live-dot">CONTROLLED</span></div>
              <div className="risk-row"><span>High-volume product content</span><b>AI + post-editing</b></div>
              <div className="risk-row"><span>Internal knowledge content</span><b>AI-assisted</b></div>
              <div className="risk-row"><span>Medical-device IFU</span><b>Human translation + review</b></div>
              <div className="risk-row"><span>Patient consent material</span><b>Human + validation</b></div>
              <div className="risk-row"><span>Contract or patent</span><b>Specialist human workflow</b></div>
              <div className="ai-model-footer"><Icon name="quality" size={20} /><span>Terminology, review and QA controls applied to every selected workflow.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell workflow-section">
        <SectionIntro
          title="A Quality-Controlled Chinese Translation Process"
          body="Every project begins with the audience and intended use, then applies the appropriate language resources, technology, review and production controls."
          center
        />
        <div className="workflow-grid">
          {workflow.map((step, index) => (
            <article className="workflow-step" key={step.title}>
              <span className="step-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
        <div className="qa-panel">
          <div>
            <Eyebrow>CHINESE-SPECIFIC QA</Eyebrow>
            <h3>Common Quality Checks</h3>
            <p>Our review can identify linguistic, locale, technical and production issues that generic bilingual review may miss.</p>
          </div>
          <div className="qa-list">
            {qaChecks.map((item) => <span key={item}><Icon name="check" size={16} />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section enterprise-section">
        <div className="section-shell">
          <div className="enterprise-layout">
            <div className="enterprise-copy">
              <Eyebrow>PROGRAM GOVERNANCE</Eyebrow>
              <h2>Enterprise Chinese Translation at Scale</h2>
              <p className="large">A mature Chinese translation program may include multiple markets, business units, content systems, reviewers and release schedules.</p>
              <p>Stepes coordinates these requirements within one managed program while preserving the linguistic distinctions each audience needs.</p>
              <ArrowLink href="https://www.stepes.com/contact-us/">Talk to Our Enterprise Team</ArrowLink>
            </div>
            <div className="enterprise-list">
              {enterpriseCapabilities.map(([title, body]) => (
                <div className="enterprise-row" key={title}><h3>{title}</h3><p>{body}</p></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell why-section">
        <SectionIntro
          title="Why Enterprises Choose Stepes for Chinese Translation"
          body="Stepes combines regional language expertise, specialized linguists, translation technology and end-to-end production in one scalable enterprise solution."
          center
        />
        <div className="why-grid">
          {whyStepes.map((item) => (
            <article key={item.title}>
              <div className="why-icon"><Icon name={item.icon} size={24} /></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section quote-section">
        <div className="section-shell">
          <div className="quote-layout">
            <div className="quote-copy">
              <Eyebrow>PROJECT PLANNING</Eyebrow>
              <h2>What to Provide for an Accurate Chinese Translation Quote</h2>
              <p>These details help our team recommend the right locale, linguists, workflow, quality level and production approach.</p>
              <div className="quote-actions">
                <PrimaryButton href="https://app.stepes.com/quote/">Start Your Quote</PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/contact-us/">Ask a Language Expert</SecondaryButton>
              </div>
            </div>
            <div className="quote-list">
              {quoteInputs.map((item) => <span key={item}><Icon name="check" size={17} />{item}</span>)}
              <div className="variant-help"><strong>Not sure which Chinese variant you need?</strong><p>Tell us where the content will be used, who needs to understand it, and whether it will be read, heard or both. We can recommend the appropriate written locale and spoken-language service.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-shell faq-section">
        <SectionIntro
          title="Chinese Translation Services FAQs"
          body="Clear answers to the questions enterprises most often ask about Chinese variants, markets, workflows and language services."
        />
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <details key={faq.q} open={index === 0}>
              <summary><span>{faq.q}</span><span className="faq-control" aria-hidden="true" /></summary>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </details>
          ))}
        </div>
      </section>

      <section className="final-cta section-shell">
        <div className="final-cta-panel">
          <div className="final-copy">
            <h2>Translate Chinese Content with Confidence</h2>
            <p>Whether you are translating regulated documents for Mainland China, localizing software for Taiwan, preparing financial communications for Hong Kong, supporting Chinese-speaking communities in the United States, or translating Chinese technical records into English, Stepes can build the right solution.</p>
            <div className="final-actions">
              <PrimaryButton href="https://app.stepes.com/quote/">Get a Translation Quote</PrimaryButton>
              <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to an Expert</SecondaryButton>
            </div>
          </div>
          <div className="team-art" aria-label="Stepes Chinese localization team illustration">
            <svg viewBox="0 0 470 300" role="img" aria-label="Localization professionals collaborating">
              <path d="M40 250c28-42 64-63 108-63h176c46 0 82 21 106 63" fill="#F8E5EE" />
              <rect x="150" y="158" width="172" height="86" rx="16" fill="#FFFFFF" stroke="#DCD5DC" />
              <path d="M178 181h52M178 199h98M178 217h72" stroke="#BDB5BE" strokeWidth="4" strokeLinecap="round" />
              <rect x="252" y="178" width="45" height="45" rx="10" fill="#FDF2F7" />
              <path d="m266 202 7 7 12-16" stroke="#C11D63" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="112" cy="103" r="34" fill="#D7D1D8" />
              <path d="M76 186c0-38 15-60 36-60s36 22 36 60" fill="#A59DA7" />
              <path d="M86 91c7-28 43-30 53 0-6-7-17-12-27-12-11 0-20 4-26 12z" fill="#5D5660" />
              <circle cx="357" cy="103" r="34" fill="#D7D1D8" />
              <path d="M321 186c0-38 15-60 36-60s36 22 36 60" fill="#817985" />
              <path d="M329 91c8-29 43-31 55-1-9-7-18-11-28-11-11 0-20 4-27 12z" fill="#4F4852" />
              <circle cx="235" cy="73" r="38" fill="#DED8DF" />
              <path d="M194 163c0-44 17-70 41-70s41 26 41 70" fill="#C11D63" />
              <path d="M202 61c7-32 48-36 65-3-10-7-21-12-33-12-13 0-24 5-32 15z" fill="#5A535C" />
              <path d="M67 248h336" stroke="#BEB6BF" strokeWidth="2" />
              <circle cx="67" cy="248" r="5" fill="#C11D63" />
              <circle cx="403" cy="248" r="5" fill="#C11D63" />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-page {
    --magenta: ${C.magenta};
    --magenta-dark: ${C.magentaDark};
    --magenta-deep: ${C.magentaDeep};
    --blush: ${C.blush};
    --blush-strong: ${C.blushStrong};
    --dark-eyebrow: ${C.darkEyebrow};
    --ink: ${C.ink};
    --ink-soft: ${C.inkSoft};
    --muted: ${C.muted};
    --line: ${C.line};
    --panel: ${C.panel};
    --dark: ${C.dark};
    --white: ${C.white};
    width: 100%;
    overflow: hidden;
    background: #fff;
    color: var(--ink);
    font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.66;
  }
  .stepes-page h1, .stepes-page h2, .stepes-page h3, .stepes-page h4, .stepes-page p { margin-top: 0; overflow-wrap: anywhere; }
  .stepes-page :where(section, div, article, aside) { min-width: 0; }
  .stepes-page h1, .stepes-page h2, .stepes-page h3 { font-weight: 600; letter-spacing: -0.025em; color: var(--ink); }
  .stepes-page h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 690px; }
  .stepes-page h2 { font-size: 36px; line-height: 1.16; margin-bottom: 22px; }
  .stepes-page h3 { font-size: 24px; line-height: 1.25; margin-bottom: 13px; }
  .stepes-page p { font-size: 16px; line-height: 1.7; color: var(--ink-soft); margin-bottom: 20px; }
  .stepes-page p.large, .stepes-page .hero-lede { font-size: 18px; line-height: 1.65; }
  .stepes-page a { text-decoration: none; overflow-wrap: anywhere; }
  .shell, .section-shell { width: min(100%, 1392px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  .eyebrow {
    margin: 0 0 18px !important;
    font-size: 11px !important;
    line-height: 1.2 !important;
    font-weight: 600 !important;
    letter-spacing: 0.14em !important;
    text-transform: uppercase !important;
    color: var(--magenta) !important;
  }
  .eyebrow.dark { color: var(--dark-eyebrow) !important; }
  .section-intro { max-width: 820px; margin-bottom: 54px; }
  .section-intro.center { text-align: center; margin-left: auto; margin-right: auto; }
  .section-intro p { max-width: 790px; margin-bottom: 0; }
  .section-intro.center p { margin-left: auto; margin-right: auto; }
  .section-intro.on-dark h2, .section-intro.on-dark p { color: #fff; }

  .button {
    min-height: 48px;
    border-radius: 999px;
    padding: 13px 22px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
  }
  .button.primary,
  .button.primary:link,
  .button.primary:visited,
  .button.primary:hover,
  .button.primary:active,
  .button.primary:focus,
  .button.primary:focus-visible,
  .button.primary span,
  .button.primary svg { color: #fff !important; stroke: #fff !important; fill: none; }
  .button.primary { background: var(--magenta); border: 1px solid var(--magenta); box-shadow: 0 10px 24px rgba(193,29,99,.17); }
  .button.primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); transform: translateY(-1px); }
  .button.secondary { color: var(--ink); background: #fff; border: 1px solid #D8D2D9; }
  .button.secondary:hover { border-color: #AEA5B0; transform: translateY(-1px); }
  .button.secondary.inverse { background: transparent; color: #fff; border-color: rgba(255,255,255,.32); }
  .button:focus-visible, .editorial-link:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.26); outline-offset: 3px; }

  .editorial-link { color: var(--magenta); display: inline-flex; align-items: center; gap: 7px; font-size: 16px; font-weight: 600; min-height: 44px; }
  .editorial-link svg { transition: transform .2s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link.inverse,
  .editorial-link.inverse:link,
  .editorial-link.inverse:visited,
  .editorial-link.inverse:hover,
  .editorial-link.inverse:active,
  .editorial-link.inverse:focus,
  .editorial-link.inverse:focus-visible,
  .editorial-link.inverse span,
  .editorial-link.inverse svg { color: #fff !important; stroke: #fff !important; }

  .hero { padding-top: 104px; padding-bottom: 96px; background: radial-gradient(circle at 83% 22%, #FDF2F7 0, #fff 44%); }
  .hero-layout { display: grid; grid-template-columns: minmax(0, .9fr) minmax(500px, 1.1fr); gap: 64px; align-items: center; }
  .hero-copy > p:not(.eyebrow) { max-width: 690px; }
  .hero-actions { display: flex; gap: 14px; margin-top: 32px; flex-wrap: wrap; }
  .hero-proof { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 32px; padding-top: 26px; border-top: 1px solid var(--line); }
  .hero-proof span { display: inline-flex; align-items: center; gap: 8px; font-size: 16px; color: var(--ink-soft); font-weight: 600; }
  .hero-proof svg { color: var(--magenta); }
  .hero-art { background: #fff; border: 1px solid #E4DEE5; border-radius: 30px; box-shadow: 0 28px 70px rgba(43,31,42,.12); overflow: hidden; min-width: 0; }
  .hero-art-topline { height: 48px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; padding: 0 18px; font-size: 14px; color: var(--muted); }
  .window-dots { display: flex; gap: 6px; }
  .window-dots i { width: 7px; height: 7px; border-radius: 50%; background: #CFC8D0; }
  .hero-art-grid { display: grid; grid-template-columns: 165px 1fr; min-height: 420px; }
  .art-sidebar { background: #F7F5F7; padding: 24px 14px; border-right: 1px solid var(--line); }
  .art-label { display: block; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .1em; color: #766E78; margin-bottom: 14px; }
  .locale { display: grid; grid-template-columns: 34px 1fr; gap: 9px; align-items: center; padding: 11px 9px; border-radius: 12px; margin-bottom: 7px; color: var(--ink-soft); }
  .locale.active { background: #fff; box-shadow: 0 4px 12px rgba(38,28,37,.07); }
  .locale b { display: grid; place-items: center; height: 32px; border-radius: 8px; background: #EAE5EA; font-size: 12px; color: #615962; }
  .locale.active b { background: var(--blush); color: var(--magenta); }
  .locale span { font-size: 13px; line-height: 1.25; font-weight: 600; }
  .locale small { display: block; font-size: 12px; color: #887F89; margin-top: 3px; font-weight: 400; }
  .art-main { padding: 26px; display: flex; flex-direction: column; }
  .art-badges { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
  .art-badges span { font-size: 12px; color: #655D67; border: 1px solid var(--line); border-radius: 999px; padding: 6px 10px; }
  .content-pair { display: grid; grid-template-columns: 1fr 26px 1fr; gap: 12px; align-items: stretch; flex: 1; }
  .content-block { border: 1px solid var(--line); border-radius: 18px; padding: 20px; background: #fff; }
  .content-block.target { border-color: #E7C2D2; background: #FFF9FB; }
  .content-block strong { display: block; font-size: 17px; line-height: 1.4; margin-bottom: 14px; }
  .content-block p { font-size: 16px; line-height: 1.65; color: #635C65; }
  .flow-arrow { display: grid; place-items: center; color: var(--magenta); }
  .art-qa { margin-top: 16px; background: #F7F5F7; border-radius: 14px; padding: 13px 14px; display: flex; justify-content: space-between; gap: 12px; align-items: center; }
  .art-qa > div { display: flex; align-items: center; gap: 10px; }
  .qa-icon { width: 32px; height: 32px; border-radius: 9px; display: grid; place-items: center; background: #fff; color: var(--magenta); }
  .art-qa b { display: block; font-size: 13px; }
  .art-qa small { display: block; font-size: 12px; color: #7B737D; margin-top: 1px; }
  .qa-status { font-size: 10px; font-weight: 600; letter-spacing: .08em; color: #4D835F; background: #EAF6EE; border-radius: 999px; padding: 6px 9px; white-space: nowrap; }

  .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .trust-row { display: grid; grid-template-columns: repeat(5, 1fr); }
  .trust-item { padding: 24px 22px; border-right: 1px solid var(--line); }
  .trust-item:first-child { padding-left: 0; }
  .trust-item:last-child { border-right: 0; }
  .trust-item strong { display: block; font-size: 16px; font-weight: 600; }
  .trust-item span { display: block; font-size: 14px; color: var(--muted); margin-top: 2px; }

  .split-heading { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 80px; align-items: start; }
  .split-heading h2 { max-width: 530px; }
  .split-copy p { max-width: 720px; }
  .demand-band { margin-top: 64px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: repeat(3, 1fr); }
  .demand-band > div { padding: 36px 34px; border-right: 1px solid var(--line); }
  .demand-band > div:first-child { padding-left: 0; }
  .demand-band > div:last-child { border-right: 0; }
  .demand-icon { width: 46px; height: 46px; display: grid; place-items: center; border-radius: 14px; background: var(--blush); color: var(--magenta); margin-bottom: 20px; border: 1px solid rgba(193,29,99,.06); }
  .demand-band h3 { font-size: 21px; }
  .demand-band p { margin-bottom: 0; }
  .source-note { font-size: 14px !important; line-height: 1.6 !important; color: #777078 !important; margin: 24px 0 0 !important; }

  .variant-section { background: #fff; }
  .market-matrix { border: 1px solid var(--line); border-radius: 24px; overflow: hidden; box-shadow: 0 14px 36px rgba(38,27,36,.05); }
  .market-head, .market-row { display: grid; grid-template-columns: .8fr 1.15fr 1.05fr 1.55fr; }
  .market-head { background: #F4F1F4; }
  .market-head span { font-size: 12px; font-weight: 600; letter-spacing: .05em; text-transform: uppercase; color: #69616B; padding: 16px 18px; border-right: 1px solid var(--line); }
  .market-row { border-top: 1px solid var(--line); }
  .market-cell { padding: 19px 18px; border-right: 1px solid var(--line); font-size: 16px; color: var(--ink-soft); }
  .market-cell:last-child, .market-head span:last-child { border-right: 0; }
  .market-name { display: flex; align-items: center; gap: 12px; }
  .market-name strong { font-size: 16px; line-height: 1.3; }
  .market-code { min-width: 48px; height: 30px; display: grid; place-items: center; border-radius: 8px; background: var(--blush); color: var(--magenta); font-size: 11px; font-weight: 600; }
  .variant-detail-grid { display: grid; grid-template-columns: repeat(4, 1fr); margin-top: 64px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .variant-detail-grid article { padding: 32px 28px; border-right: 1px solid var(--line); }
  .variant-detail-grid article:first-child { padding-left: 0; }
  .variant-detail-grid article:last-child { border-right: 0; }
  .detail-tag { font-size: 11px; font-weight: 600; letter-spacing: .11em; color: var(--magenta); display: block; margin-bottom: 12px; }
  .variant-detail-grid h3 { font-size: 20px; }
  .variant-detail-grid p { margin-bottom: 0; }
  .conversion-callout { margin-top: 40px; display: grid; grid-template-columns: 56px 1fr; gap: 20px; padding: 28px 30px; border-radius: 22px; background: var(--blush); align-items: start; }
  .callout-icon { width: 52px; height: 52px; display: grid; place-items: center; background: #fff; border-radius: 14px; color: var(--magenta); }
  .conversion-callout h3 { font-size: 21px; margin-bottom: 8px; }
  .conversion-callout p { margin: 0; }

  .two-panel-header { display: grid; grid-template-columns: 1.05fr .95fr; gap: 80px; align-items: end; margin-bottom: 46px; }
  .two-panel-header p { max-width: 620px; margin-bottom: 5px; }
  .writing-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .writing-panel { border: 1px solid var(--line); border-radius: 28px; padding: 36px; }
  .writing-panel.simplified { background: #fff; }
  .writing-panel.traditional { background: #F9F7F9; }
  .writing-title-row { display: grid; grid-template-columns: 64px 1fr; gap: 20px; align-items: start; }
  .writing-mark { width: 64px; height: 64px; display: grid; place-items: center; border-radius: 18px; background: var(--blush); color: var(--magenta); font-size: 28px; font-weight: 600; }
  .writing-panel h3 { font-size: 22px; }
  .check-list { list-style: none; padding: 0; margin: 24px 0 0; display: grid; gap: 12px; }
  .check-list.compact { gap: 9px; margin-top: 18px; }
  .check-list li { display: grid; grid-template-columns: 24px 1fr; gap: 10px; align-items: start; font-size: 16px; color: var(--ink-soft); }
  .check { width: 22px; height: 22px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); margin-top: 2px; }

  .direction-section { background: #FBFAFB; }
  .direction-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
  .direction-panel { background: #fff; border: 1px solid var(--line); border-radius: 28px; padding: 36px; }
  .direction-top { display: flex; align-items: center; gap: 14px; color: var(--magenta); margin-bottom: 24px; }
  .direction-top span { min-width: 54px; height: 42px; display: grid; place-items: center; border-radius: 12px; background: var(--blush); font-size: 14px; font-weight: 600; }

  .regulated-section { background: #F6F3F6; }
  .regulated-list { border-top: 1px solid #DCD6DD; }
  .regulated-row { display: grid; grid-template-columns: 56px minmax(0,1fr) 240px; gap: 24px; align-items: start; padding: 34px 0; border-bottom: 1px solid #DCD6DD; }
  .regulated-icon { width: 48px; height: 48px; border-radius: 14px; display: grid; place-items: center; background: #fff; color: var(--magenta); border: 1px solid #E5DFE6; }
  .regulated-copy h3 { margin-bottom: 8px; }
  .regulated-copy p { max-width: 760px; }
  .regulated-links { display: flex; flex-direction: column; align-items: flex-start; align-self: center; padding-top: 2px; }

  .technical-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 72px; align-items: center; }
  .technical-copy > p { max-width: 660px; }
  .inline-links { display: flex; flex-wrap: wrap; gap: 10px 28px; margin-top: 24px; }
  .inline-links.vertical { flex-direction: column; align-items: flex-start; gap: 0; }
  .technical-visual { min-width: 0; }
  .tech-sheet { background: #fff; border: 1px solid var(--line); border-radius: 28px; box-shadow: 0 24px 60px rgba(38,28,37,.1); overflow: hidden; }
  .tech-sheet-header { height: 58px; padding: 0 22px; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; }
  .tech-sheet-header span { display: flex; align-items: center; gap: 9px; font-size: 15px; font-weight: 600; }
  .tech-sheet-header b { color: var(--magenta); background: var(--blush); border-radius: 8px; padding: 5px 9px; font-size: 12px; }
  .tech-diagram { position: relative; padding: 18px 24px 8px; min-height: 250px; }
  .tech-diagram svg { width: 100%; height: auto; display: block; }
  .diagram-label { position: absolute; font-size: 12px; color: #635C65; background: #fff; padding: 4px 7px; border-radius: 6px; box-shadow: 0 3px 9px rgba(0,0,0,.06); }
  .diagram-label.l1 { left: 8%; top: 17%; }
  .diagram-label.l2 { right: 6%; top: 15%; }
  .diagram-label.l3 { left: 7%; bottom: 10%; }
  .diagram-label.l4 { right: 6%; bottom: 9%; }
  .tech-status { border-top: 1px solid var(--line); background: #F8F6F8; display: flex; gap: 22px; padding: 14px 20px; }
  .tech-status span { display: inline-flex; align-items: center; gap: 7px; color: #5D5760; font-size: 13px; }
  .tech-status svg { color: var(--magenta); }

  .digital-section { background: #F8F6F8; }
  .digital-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid #DDD7DE; border-bottom: 1px solid #DDD7DE; }
  .digital-grid article { padding: 36px 32px; border-right: 1px solid #DDD7DE; }
  .digital-grid article:first-child { padding-left: 0; }
  .digital-grid article:last-child { border-right: 0; }
  .digital-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 14px; background: #fff; color: var(--magenta); margin-bottom: 24px; }
  .digital-note { margin-top: 38px; border-radius: 20px; padding: 24px 28px; background: #fff; border: 1px solid #E3DEE4; display: grid; grid-template-columns: 240px 1fr; gap: 24px; align-items: center; }
  .digital-note strong { font-size: 18px; }
  .digital-note span { font-size: 16px; color: var(--ink-soft); }

  .access-layout { display: grid; grid-template-columns: 340px 1fr; gap: 72px; align-items: stretch; }
  .access-stat { background: var(--magenta-deep); border-radius: 28px; padding: 36px; color: #fff; display: flex; flex-direction: column; justify-content: center; }
  .stat-kicker { font-size: 11px; font-weight: 600; letter-spacing: .12em; color: var(--dark-eyebrow); }
  .access-stat strong { font-size: 72px; line-height: 1; font-weight: 600; margin: 22px 0 18px; letter-spacing: -.05em; }
  .access-stat p { color: #fff; font-size: 17px; line-height: 1.55; }
  .access-stat .source-note { color: #E1CBD5 !important; margin-top: auto !important; }
  .access-copy h2 { max-width: 700px; }
  .access-options { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); margin-top: 30px; }
  .access-options div { padding: 18px 16px 18px 0; border-bottom: 1px solid var(--line); }
  .access-options div:nth-child(odd) { border-right: 1px solid var(--line); }
  .access-options div:nth-child(even) { padding-left: 20px; }
  .access-options span { display: block; font-size: 16px; font-weight: 600; }
  .access-options small { display: block; font-size: 16px; line-height: 1.5; color: var(--muted); margin-top: 3px; }
  .guardrail { background: #F7F5F7; border-radius: 14px; padding: 16px 18px; margin: 24px 0 0 !important; }

  .spoken-section { background: #FBFAFB; }
  .spoken-layout { display: grid; grid-template-columns: 1.2fr .8fr; gap: 36px; }
  .spoken-main { display: grid; grid-template-columns: repeat(2, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
  .spoken-main article { padding: 36px; }
  .spoken-main article + article { border-left: 1px solid var(--line); }
  .spoken-label { display: flex; align-items: baseline; justify-content: space-between; gap: 16px; padding-bottom: 20px; margin-bottom: 24px; border-bottom: 1px solid var(--line); }
  .spoken-label span { font-size: 27px; color: var(--magenta); font-weight: 600; }
  .spoken-label small { font-size: 11px; line-height: 1.35; font-weight: 600; letter-spacing: .1em; color: var(--magenta); text-align: right; }
  .media-panel { background: var(--magenta-deep); border-radius: 28px; padding: 34px; color: #fff; }
  .media-panel h3, .media-panel p { color: #fff; }
  .media-wave { height: 78px; display: flex; align-items: center; gap: 4px; margin-bottom: 28px; }
  .media-wave i { display: block; width: 5px; border-radius: 4px; background: var(--dark-eyebrow); min-height: 12px; }

  .publishing-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 80px; align-items: center; }
  .publishing-visual { position: relative; min-height: 520px; display: grid; place-items: center; }
  .doc-shadow { position: absolute; width: 310px; height: 430px; border-radius: 18px; border: 1px solid #DED8DF; background: #F5F2F5; }
  .doc-shadow.back { transform: rotate(-7deg) translate(-30px, 8px); }
  .doc-shadow.mid { transform: rotate(5deg) translate(28px, -2px); background: #FBFAFB; }
  .doc-page { position: relative; z-index: 2; width: 330px; min-height: 455px; padding: 27px; border-radius: 18px; background: #fff; border: 1px solid #DCD6DD; box-shadow: 0 24px 55px rgba(43,31,42,.13); }
  .doc-brand { display: flex; justify-content: space-between; align-items: center; font-size: 12px; }
  .doc-brand span { color: var(--magenta); font-weight: 600; letter-spacing: .08em; }
  .doc-brand b { background: var(--blush); color: var(--magenta); padding: 5px 8px; border-radius: 7px; }
  .doc-rule { height: 2px; background: var(--magenta); margin: 18px 0 22px; }
  .doc-page h4 { font-size: 22px; line-height: 1.35; margin-bottom: 10px; }
  .doc-page p { font-size: 14px; line-height: 1.6; }
  .doc-layout-grid { display: grid; grid-template-columns: 90px 1fr; gap: 14px; margin: 22px 0; }
  .doc-image { height: 86px; border-radius: 10px; background: #F1EEF1; display: grid; place-items: center; color: #918993; }
  .doc-lines { display: grid; gap: 9px; align-content: center; }
  .doc-lines i { height: 6px; border-radius: 6px; background: #DED9DF; }
  .doc-lines i:nth-child(2) { width: 82%; }
  .doc-lines i:nth-child(3) { width: 92%; }
  .doc-lines i:nth-child(4) { width: 66%; }
  .doc-table { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid #E1DCE2; }
  .doc-table span { height: 38px; border-right: 1px solid #E1DCE2; border-bottom: 1px solid #E1DCE2; }
  .doc-table span:nth-child(3n) { border-right: 0; }
  .doc-table span:nth-child(n+4) { border-bottom: 0; }
  .doc-footer { margin-top: 28px; padding-top: 14px; border-top: 1px solid #E1DCE2; display: flex; justify-content: space-between; font-size: 11px; color: #847B86; }

  .ai-section { background: var(--dark); color: #fff; }
  .ai-layout { display: grid; grid-template-columns: .95fr 1.05fr; gap: 70px; align-items: center; }
  .ai-copy h2, .ai-copy p { color: #fff; }
  .ai-copy p { max-width: 690px; }
  .ai-links { display: flex; flex-direction: column; align-items: flex-start; margin-top: 28px; }
  .ai-model { border: 1px solid rgba(255,255,255,.13); border-radius: 26px; overflow: hidden; background: rgba(255,255,255,.045); }
  .ai-model-header { padding: 18px 20px; border-bottom: 1px solid rgba(255,255,255,.12); display: flex; align-items: center; justify-content: space-between; font-size: 15px; font-weight: 600; }
  .live-dot { font-size: 10px; letter-spacing: .08em; color: #CFEBD6; background: rgba(93,172,111,.18); border-radius: 999px; padding: 6px 9px; }
  .risk-row { display: grid; grid-template-columns: 1fr auto; gap: 18px; padding: 18px 20px; border-bottom: 1px solid rgba(255,255,255,.09); align-items: center; }
  .risk-row span { font-size: 16px; color: #EEE9EF; }
  .risk-row b { font-size: 16px; line-height: 1.45; color: var(--dark-eyebrow); font-weight: 600; text-align: right; }
  .ai-model-footer { display: flex; gap: 10px; align-items: center; padding: 18px 20px; color: #D9D2DB; font-size: 16px; line-height: 1.5; }
  .ai-model-footer svg { color: var(--dark-eyebrow); flex: 0 0 auto; }

  .workflow-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .workflow-step { padding: 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); min-height: 250px; }
  .step-number { display: block; font-size: 14px; font-weight: 600; color: var(--magenta); margin-bottom: 38px; }
  .workflow-step h3 { font-size: 21px; }
  .workflow-step p { margin-bottom: 0; }
  .qa-panel { margin-top: 40px; background: #F7F5F7; border-radius: 26px; padding: 34px; display: grid; grid-template-columns: 300px 1fr; gap: 42px; align-items: start; }
  .qa-panel h3 { font-size: 23px; }
  .qa-panel > div > p { margin-bottom: 0; }
  .qa-list { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px 22px; }
  .qa-list span { display: grid; grid-template-columns: 20px 1fr; align-items: start; gap: 9px; font-size: 16px; color: var(--ink-soft); }
  .qa-list svg { color: var(--magenta); margin-top: 4px; }

  .enterprise-section { background: #F8F6F8; }
  .enterprise-layout { display: grid; grid-template-columns: .85fr 1.15fr; gap: 78px; align-items: start; }
  .enterprise-copy { position: sticky; top: 24px; }
  .enterprise-copy .editorial-link { margin-top: 10px; }
  .enterprise-list { border-top: 1px solid #DCD6DD; }
  .enterprise-row { display: grid; grid-template-columns: 230px 1fr; gap: 28px; padding: 27px 0; border-bottom: 1px solid #DCD6DD; }
  .enterprise-row h3 { font-size: 19px; margin: 0; }
  .enterprise-row p { margin: 0; }

  .why-grid { display: grid; grid-template-columns: repeat(6, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .why-grid article { grid-column: span 2; padding: 34px 30px; border-right: 1px solid var(--line); }
  .why-grid article:first-child, .why-grid article:nth-child(4) { padding-left: 0; }
  .why-grid article:nth-child(3), .why-grid article:nth-child(5) { border-right: 0; }
  .why-grid article:nth-child(n+4) { grid-column: span 3; border-top: 1px solid var(--line); }
  .why-icon { width: 48px; height: 48px; display: grid; place-items: center; background: var(--blush); border-radius: 14px; color: var(--magenta); margin-bottom: 24px; }
  .why-grid h3 { font-size: 20px; line-height: 1.32; }

  .quote-section { background: #FBF4F7; }
  .quote-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: start; }
  .quote-copy { max-width: 570px; }
  .quote-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .quote-list { background: #fff; border: 1px solid #E9DCE2; border-radius: 26px; padding: 30px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px 22px; }
  .quote-list > span { display: grid; grid-template-columns: 22px 1fr; gap: 10px; align-items: start; font-size: 16px; color: var(--ink-soft); }
  .quote-list > span svg { color: var(--magenta); margin-top: 4px; }
  .variant-help { grid-column: 1 / -1; border-top: 1px solid var(--line); padding-top: 22px; margin-top: 6px; }
  .variant-help strong { font-size: 18px; }
  .variant-help p { margin: 6px 0 0; }

  .faq-section { padding-bottom: 80px; }
  .faq-list { border-top: 1px solid var(--line); }
  .faq-list details { border-bottom: 1px solid var(--line); }
  .faq-list summary { list-style: none; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 30px; padding: 24px 0; min-height: 74px; font-size: 18px; line-height: 1.45; font-weight: 600; color: var(--ink); }
  .faq-list summary::-webkit-details-marker { display: none; }
  .faq-control { flex: 0 0 auto; width: 34px; height: 34px; border: 1px solid #DAD4DB; border-radius: 50%; position: relative; }
  .faq-control::before, .faq-control::after { content: ""; position: absolute; left: 9px; right: 9px; top: 16px; height: 1.5px; background: var(--magenta); }
  .faq-control::after { transform: rotate(90deg); transition: transform .2s ease; }
  details[open] .faq-control::after { transform: rotate(0); }
  .faq-answer { max-width: 840px; padding: 0 0 26px; }
  .faq-answer p { margin: 0; font-size: 16px; }

  .final-cta { padding-top: 16px; padding-bottom: 96px; }
  .final-cta-panel { min-height: 380px; border-radius: 30px; background: linear-gradient(120deg, #FFF 0%, #FFF 56%, #FDF2F7 100%); border: 1px solid #E5DEE5; overflow: hidden; display: grid; grid-template-columns: 1.15fr .85fr; align-items: center; box-shadow: 0 22px 54px rgba(42,30,41,.08); }
  .final-copy { padding: 56px; }
  .final-copy h2 { max-width: 620px; }
  .final-copy p { max-width: 700px; }
  .final-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 28px; }
  .team-art { align-self: end; padding: 24px 24px 0 0; }
  .team-art svg { width: 100%; display: block; }

  @media (max-width: 1180px) {
    .shell, .section-shell { padding-left: 40px; padding-right: 40px; }
    .hero-layout { grid-template-columns: minmax(0,1fr) minmax(430px,.95fr); gap: 42px; }
    .hero-art-grid { grid-template-columns: 145px 1fr; }
    .variant-detail-grid { grid-template-columns: repeat(2, 1fr); }
    .variant-detail-grid article:nth-child(2) { border-right: 0; }
    .variant-detail-grid article:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .variant-detail-grid article:nth-child(3) { padding-left: 0; }
    .why-grid { grid-template-columns: repeat(2, 1fr); }
    .why-grid article, .why-grid article:nth-child(n+4) { grid-column: auto; border-top: 0; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); padding: 32px 28px; }
    .why-grid article:nth-child(odd) { padding-left: 0; }
    .why-grid article:nth-child(even) { border-right: 0; }
    .why-grid article:last-child { grid-column: 1 / -1; border-right: 0; border-bottom: 0; padding-left: 0; }
    .why-grid article:nth-last-child(2) { border-bottom: 1px solid var(--line); }
  }

  @media (max-width: 980px) {
    .shell, .section-shell { padding-left: 24px; padding-right: 24px; }
    .section { padding-top: 80px; padding-bottom: 80px; }
    .stepes-page h1 { font-size: 42px; }
    .stepes-page h2 { font-size: 32px; }
    .stepes-page h3 { font-size: 22px; }
    .hero { padding-top: 88px; padding-bottom: 80px; }
    .hero-layout { grid-template-columns: 1fr; }
    .hero-copy { max-width: 780px; }
    .hero-art { max-width: 760px; }
    .trust-row { grid-template-columns: repeat(3, 1fr); }
    .trust-item:nth-child(3) { border-right: 0; }
    .trust-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
    .trust-item:nth-child(4) { padding-left: 0; }
    .trust-item:nth-child(5) { grid-column: span 2; border-right: 0; }
    .split-heading, .two-panel-header, .technical-layout, .publishing-layout, .ai-layout, .enterprise-layout, .quote-layout { grid-template-columns: 1fr; gap: 40px; }
    .demand-band { grid-template-columns: 1fr; }
    .demand-band > div { border-right: 0; border-bottom: 1px solid var(--line); padding: 28px 0; }
    .demand-band > div:last-child { border-bottom: 0; }
    .market-head, .market-row { grid-template-columns: .85fr 1.15fr 1fr 1.35fr; }
    .market-head span, .market-cell { padding-left: 13px; padding-right: 13px; }
    .writing-grid, .direction-grid { grid-template-columns: 1fr; }
    .regulated-row { grid-template-columns: 50px 1fr; }
    .regulated-links { grid-column: 2; flex-direction: row; flex-wrap: wrap; gap: 0 24px; }
    .digital-grid { grid-template-columns: 1fr; }
    .digital-grid article { border-right: 0; border-bottom: 1px solid #DDD7DE; padding: 30px 0; }
    .digital-grid article:last-child { border-bottom: 0; }
    .access-layout { grid-template-columns: 300px 1fr; gap: 42px; }
    .spoken-layout { grid-template-columns: 1fr; }
    .workflow-grid { grid-template-columns: repeat(2, 1fr); }
    .qa-panel { grid-template-columns: 1fr; }
    .enterprise-copy { position: static; }
    .final-cta-panel { grid-template-columns: 1fr; }
    .team-art { max-width: 560px; justify-self: end; margin-top: -25px; }
  }


  @media (max-width: 860px) {
    .market-matrix { border: 0; box-shadow: none; overflow: visible; display: grid; gap: 14px; }
    .market-head { display: none; }
    .market-row { display: block; border: 1px solid var(--line); border-radius: 18px; overflow: hidden; background: #fff; }
    .market-cell { border-right: 0; border-bottom: 1px solid var(--line); padding: 16px 18px 16px 142px; min-height: 58px; position: relative; }
    .market-cell::before { content: attr(data-label); position: absolute; left: 18px; top: 17px; width: 110px; font-size: 11px; line-height: 1.4; font-weight: 600; letter-spacing: .07em; text-transform: uppercase; color: #777078; }
    .market-cell:last-child { border-bottom: 0; }
    .market-name { align-items: flex-start; }
    .hero-art-grid { grid-template-columns: 1fr; min-height: 0; }
    .art-sidebar { border-right: 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 6px; padding: 14px; }
    .art-sidebar > .art-label { grid-column: 1 / -1; }
    .locale { grid-template-columns: 1fr; padding: 8px; margin-bottom: 0; text-align: center; }
    .art-sidebar .locale:first-of-type { grid-column: 1; }
    .locale b { width: 100%; }
    .locale span { display: none; }
    .access-layout { grid-template-columns: 1fr; gap: 40px; }
    .access-stat { min-height: 300px; }
  }

  @media (max-width: 760px) {
    .section { padding-top: 68px; padding-bottom: 68px; }
    .stepes-page h1 { font-size: 38px; }
    .stepes-page h2 { font-size: 30px; }
    .stepes-page h3 { font-size: 20px; }
    .stepes-page p.large, .stepes-page .hero-lede { font-size: 18px; }
    .hero { padding-top: 72px; padding-bottom: 68px; }
    .hero-actions, .quote-actions, .final-actions { flex-direction: column; align-items: stretch; }
    .hero-actions .button, .quote-actions .button, .final-actions .button { width: 100%; }
    .hero-proof { display: grid; grid-template-columns: 1fr; gap: 12px; }
    .content-pair { grid-template-columns: 1fr; }
    .flow-arrow { transform: rotate(90deg); min-height: 22px; }
    .art-qa { align-items: flex-start; flex-direction: column; }
    .trust-row { grid-template-columns: repeat(2, 1fr); }
    .trust-item { border-bottom: 1px solid var(--line); padding: 20px 14px; }
    .trust-item:nth-child(2n) { border-right: 0; }
    .trust-item:nth-child(3) { border-right: 1px solid var(--line); }
    .trust-item:nth-child(4) { padding-left: 14px; }
    .trust-item:nth-child(5) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
    .variant-detail-grid { grid-template-columns: 1fr; }
    .variant-detail-grid article { padding: 26px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .variant-detail-grid article:nth-child(3) { padding-left: 0; }
    .variant-detail-grid article:last-child { border-bottom: 0; }
    .conversion-callout { grid-template-columns: 1fr; padding: 24px; }
    .writing-panel, .direction-panel { padding: 26px; }
    .writing-title-row { grid-template-columns: 52px 1fr; gap: 15px; }
    .writing-mark { width: 52px; height: 52px; font-size: 23px; }
    .regulated-row { grid-template-columns: 44px 1fr; gap: 15px; }
    .regulated-icon { width: 42px; height: 42px; }
    .regulated-links { grid-column: 1 / -1; }
    .technical-layout { gap: 48px; }
    .tech-status { flex-direction: column; gap: 8px; }
    .digital-note { grid-template-columns: 1fr; gap: 8px; }
    .access-options { grid-template-columns: 1fr; }
    .access-options div:nth-child(odd) { border-right: 0; }
    .access-options div:nth-child(even) { padding-left: 0; }
    .spoken-main { grid-template-columns: 1fr; }
    .spoken-main article + article { border-left: 0; border-top: 1px solid var(--line); }
    .publishing-visual { min-height: 460px; transform: scale(.92); transform-origin: center; }
    .workflow-grid { grid-template-columns: 1fr; border-right: 1px solid var(--line); }
    .workflow-step { min-height: 0; padding: 28px; }
    .step-number { margin-bottom: 22px; }
    .qa-list { grid-template-columns: 1fr; }
    .enterprise-row { grid-template-columns: 1fr; gap: 8px; }
    .why-grid { grid-template-columns: 1fr; }
    .why-grid article, .why-grid article:nth-child(n+4), .why-grid article:last-child { grid-column: auto; border-right: 0; border-top: 0; border-bottom: 1px solid var(--line); padding: 28px 0; }
    .why-grid article:last-child { border-bottom: 0; }
    .quote-list { grid-template-columns: 1fr; padding: 24px; }
    .final-copy { padding: 38px 28px 24px; }
    .team-art { margin-top: 0; padding: 0 10px; }
  }

  @media (max-width: 430px) {
    .shell, .section-shell { padding-left: 20px; padding-right: 20px; }
    .hero-art-topline span:last-child { display: none; }
    .art-main { padding: 18px; }
    .content-block { padding: 16px; }
    .trust-row { grid-template-columns: 1fr; }
    .trust-item, .trust-item:nth-child(4) { border-right: 0 !important; padding-left: 0; padding-right: 0; }
    .trust-item:nth-child(5) { grid-column: auto; border-bottom: 0; }
    .market-cell { padding-left: 18px; padding-top: 42px; }
    .market-cell::before { top: 14px; width: auto; }
    .writing-panel, .direction-panel { padding: 22px; }
    .writing-title-row { grid-template-columns: 1fr; }
    .spoken-label { flex-direction: column; align-items: flex-start; gap: 7px; }
    .spoken-label small { text-align: left; }
    .spoken-main article, .media-panel { padding: 26px; }
    .publishing-visual { transform: none; margin-left: 0; margin-right: 0; min-height: 420px; width: 100%; overflow: hidden; }
    .doc-page { width: min(100%, 300px); min-height: 420px; padding: 22px; }
    .doc-shadow { width: 230px; height: 370px; }
    .doc-shadow.back { transform: rotate(-4deg) translate(-10px, 8px); }
    .doc-shadow.mid { transform: rotate(4deg) translate(10px, -2px); }
    .access-stat strong { font-size: 62px; }
    .risk-row { grid-template-columns: 1fr; gap: 6px; }
    .risk-row b { text-align: left; }
    .ai-model-header { align-items: flex-start; gap: 10px; }
    .live-dot { white-space: nowrap; }
    .faq-list summary { align-items: flex-start; gap: 16px; }
    .faq-control { margin-top: 2px; }
    .final-cta { padding-bottom: 72px; }
  }
`;

export default ChineseTranslationServicesWireframe;
