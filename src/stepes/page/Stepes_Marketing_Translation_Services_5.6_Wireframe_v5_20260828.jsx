import React from "react";

const links = {
  quote: "https://www.stepes.com/online-translation-services/",
  sales: "https://www.stepes.com/contact-sales/",
  marketingTeams: "https://www.stepes.com/solutions/marketing-teams/",
  website: "https://www.stepes.com/website-translation-services/",
  transcreation: "https://www.stepes.com/transcreation-services/",
  video: "https://www.stepes.com/video-translation-services/",
  api: "https://www.stepes.com/developers/translation-api/",
  enterprise: "https://www.stepes.com/enterprise-translation-management/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  translation: "https://www.stepes.com/translation-services/",
};

const Icon = ({ name, size = 24 }) => {
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
    web: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 8h18"/><path d="M7 6h.01"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></>,
    ads: <><path d="M4 15h3l8 4V5L7 9H4z"/><path d="M7 9v6"/><path d="M18 8.5c1 .8 1.5 2 1.5 3.5S19 14.7 18 15.5"/></>,
    social: <><circle cx="12" cy="12" r="3"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><path d="M7 8.2 9.5 10"/><path d="m17 8.2-2.5 1.8"/><path d="M12 15v4"/></>,
    video: <><rect x="3" y="5" width="14" height="14" rx="2"/><path d="m17 10 4-2v8l-4-2z"/><path d="m9 9 4 3-4 3z"/></>,
    sales: <><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></>,
    pr: <><path d="M5 4h14v16H5z"/><path d="M8 8h8M8 12h8M8 16h5"/><path d="M3 7v10"/></>,
    event: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 9h18"/><path d="m8 14 2 2 5-5"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
    spark: <><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4z"/><path d="m18.5 14 .8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8z"/></>,
    human: <><circle cx="12" cy="7" r="3"/><path d="M5.5 21c.7-5 2.8-7.5 6.5-7.5s5.8 2.5 6.5 7.5"/></>,
    pen: <><path d="m4 20 4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10z"/><path d="m14 7 3 3"/></>,
    brand: <><path d="M4 17V7l8-4 8 4v10l-8 4z"/><path d="M8 10h8M8 14h5"/></>,
    terms: <><path d="M4 5h16M4 10h10M4 15h16M4 20h8"/></>,
    memory: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 8h8v8H8z"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></>,
    review: <><circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5"/><path d="m7.5 10 1.7 1.7 3.4-3.4"/></>,
    search: <><circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/></>,
    code: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14"/></>,
    api: <><path d="M7 8h10M7 12h10M7 16h6"/><circle cx="4" cy="8" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="16" r="1"/><path d="m17 15 3 3-3 3"/></>,
    file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 16 9 5 9-5"/></>,
    industry: <><rect x="3" y="10" width="18" height="11" rx="1"/><path d="M7 10V6h4v4M14 10V3h4v7M7 15h2M12 15h2M17 15h1"/></>,
    medical: <><path d="M8 4h8v4h4v12H4V8h4z"/><path d="M10 8V6h4v2"/><path d="M12 11v6M9 14h6"/></>,
    software: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18"/><path d="m9 11-2 2 2 2M15 11l2 2-2 2"/><path d="M8 21h8M12 18v3"/></>,
    manufacturing: <><path d="M3 21V10l6 3v-3l6 3V7l6 3v11z"/><path d="M7 17h2M12 17h2M17 17h2"/><path d="M18 7V3h2v5"/></>,
    automotive: <><path d="m5 15 1.5-4.5A2 2 0 0 1 8.4 9h7.2a2 2 0 0 1 1.9 1.5L19 15"/><path d="M4 15h16v4H4z"/><circle cx="7" cy="19" r="1.5"/><circle cx="17" cy="19" r="1.5"/><path d="M7 13h10"/></>,
    finance: <><path d="M4 20h16"/><path d="M6 17v-5h3v5M11 17V8h3v9M16 17V4h3v13"/><path d="m5 8 4-3 4 2 6-4"/></>,
    retail: <><path d="M5 8h14l-1 12H6z"/><path d="M9 8a3 3 0 0 1 6 0"/><path d="M9 13h6M12 10v6"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    chevron: <><path d="m8 10 4 4 4-4"/></>,
  };
  return <svg {...common}>{icons[name] || icons.check}</svg>;
};

const SectionHeader = ({ eyebrow, title, intro, centered = true, dark = false }) => (
  <div className={`section-heading ${centered ? "centered-heading" : ""} ${dark ? "dark-heading" : ""}`}>
    {eyebrow && <div className="eyebrow">{eyebrow}</div>}
    <h2>{title}</h2>
    {intro && <p className="section-intro">{intro}</p>}
  </div>
);

const ArrowLink = ({ href, children, inverse = false }) => (
  <a className={`arrow-link ${inverse ? "inverse" : ""}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={18} />
  </a>
);

const channelItems = [
  ["web", "Websites & Landing Pages", "Campaign pages, microsites, product pages, forms, calls to action, metadata, and digital experiences."],
  ["mail", "Email & Marketing Automation", "Campaign emails, nurture programs, newsletters, subject lines, and recurring customer communications."],
  ["ads", "Paid Media & Advertising", "Paid search, display advertising, campaign headlines, and concise promotional copy with tight creative constraints."],
  ["social", "Social Media", "Organic and paid social content adapted for platform, audience, tone, cultural context, and campaign cadence."],
  ["video", "Video & Multimedia", "Scripts, subtitles, captions, voiceover, on-screen text, graphics, and multilingual production."],
  ["sales", "Sales & Marketing Collateral", "Brochures, presentations, case studies, sell sheets, datasheets, catalogs, and sales enablement."],
  ["pr", "PR & Corporate Communications", "Press releases, announcements, thought leadership, executive communications, and customer stories."],
  ["event", "Events & Product Launches", "Launch materials, event presentations, signage, promotional assets, and supporting campaign content."],
];

const contentGroups = [
  ["Digital Marketing Content", "Websites and landing pages, campaign pages, marketing emails, nurture programs, digital advertising, social media, app marketing, blogs, digital publications, and customer-facing online experiences."],
  ["Brand & Creative Content", "Campaign messaging, brand stories, headlines, slogans, taglines, promotional copy, product positioning, creative concepts, and market-facing corporate messaging."],
  ["Product & Sales Marketing", "Product launches, brochures, datasheets, catalogs, presentations, case studies, white papers, sales enablement materials, customer stories, and product marketing content."],
  ["Public Relations & Communications", "Press releases, media materials, newsletters, executive communications, corporate announcements, public-facing communications, and thought leadership."],
  ["Video & Multimedia", "Marketing videos, promotional films, scripts, subtitles, closed captions, voiceover, dubbing, on-screen text, animations, graphics, and social video."],
  ["Print, Events & Creative Production", "Brochures, posters, event materials, exhibition content, direct mail, presentations, promotional graphics, signage, and multilingual marketing collateral."],
];

const workflowModels = [
  ["spark", "AI-Assisted Translation + Human Review", "For high-volume or recurring marketing content where speed, scale, consistency, and professional validation all matter.", "Product content · Campaign variants · Recurring web updates · Structured marketing data"],
  ["human", "Professional Marketing Translation", "For customer-facing content where fluency, terminology, brand voice, and persuasive writing need expert attention.", "Brochures · Corporate content · Case studies · Press releases · Sales materials"],
  ["globe", "Marketing Localization", "For experiences that require language plus local conventions, audience expectations, calls to action, digital context, and channel adaptation.", "Websites · Landing pages · Ecommerce · Social campaigns · Customer journeys"],
  ["pen", "Transcreation", "For high-impact creative content where reproducing the effect of the original matters more than staying close to its wording.", "Taglines · Slogans · Headlines · Brand campaigns · Advertising · Wordplay"],
];

const brandItems = [
  ["brand", "Brand & Style Guidelines", "Capture tone, audience, writing preferences, preferred expressions, campaign guidance, and market-specific instructions."],
  ["terms", "Terminology Management", "Maintain approved product names, feature names, services, industry concepts, campaign language, and company terminology."],
  ["memory", "Translation Memory", "Reuse approved language across related assets, recurring campaigns, website updates, and future projects."],
  ["human", "Dedicated Linguistic Expertise", "Build continuity with professional linguists familiar with your company, products, audience, and previous marketing decisions."],
  ["review", "Reviewer Feedback Loops", "Capture approved regional and in-market feedback so language decisions support future content instead of disappearing inside one project."],
];

const launchSteps = [
  ["Understand the Campaign", "Define audience, target markets, campaign objectives, channels, tone, launch timing, content dependencies, and creative requirements."],
  ["Prepare the Brand Language", "Gather glossaries, style guides, translation memory, previous campaigns, approved terminology, SEO keywords, and reference content."],
  ["Select the Localization Route", "Match each asset to AI + human review, professional translation, localization, transcreation, multilingual SEO, or a blended workflow."],
  ["Translate and Adapt", "Assign qualified linguists, marketing writers, subject specialists, and transcreation experts according to content purpose and industry."],
  ["Review in Context", "Evaluate localized content in websites, landing pages, advertising formats, subtitles, presentations, brochures, and other production environments."],
  ["Validate With Local Stakeholders", "Support regional teams, brand managers, and in-market reviewers through structured feedback and approval workflows."],
  ["Produce and Deliver", "Deliver through standard files, structured content, website workflows, APIs, multilingual desktop publishing, or multimedia production."],
  ["Reuse What Works", "Capture approved translations, terminology, corrections, and reviewer decisions as reusable language assets for future campaigns."],
];

const qaItems = [
  ["Linguistic Accuracy", "Meaning, grammar, terminology, completeness, numbers, and language-specific conventions."],
  ["Brand Alignment", "Tone, positioning, product language, approved messaging, and consistency with related campaign assets."],
  ["Creative Effectiveness", "Headlines, calls to action, promotional language, readability, and persuasive impact in the target market."],
  ["Visual Fit", "Text expansion, typography, line breaks, layout limits, graphic text, and right-to-left languages."],
  ["Cultural Relevance", "References, imagery relationships, phrasing, and other elements that may require local adaptation."],
  ["Functional Context", "Buttons, forms, metadata, navigation, subtitles, and other elements whose meaning depends on how they function."],
];

const contextChecks = [
  ["Brand tone", "Aligned with the approved brand voice"],
  ["CTA clarity", "Clear and natural for German readers"],
  ["Headline fit", "Fits the approved two-line layout"],
  ["Terminology", "Matches approved product terminology"],
  ["Visual context", "Copy works with the campaign creative"],
  ["Local relevance", "Reviewed for target-market fit"],
];

const industryItems = [
  ["medical", "Life Sciences & Healthcare", "Patient-facing communication, healthcare marketing, medical product content, and corporate communication where specialized terminology and audience clarity must coexist."],
  ["software", "Technology & Software", "Product messaging, SaaS content, websites, launches, customer stories, campaigns, and digital experiences for fast-changing products."],
  ["manufacturing", "Manufacturing & Engineering", "Complex products, technologies, equipment, and capabilities translated into clear customer-facing marketing without losing technical meaning."],
  ["automotive", "Automotive & Mobility", "Product launches, digital experiences, mobility services, dealer communication, customer marketing, and technical product messaging."],
  ["finance", "Financial & Professional Services", "Customer-facing communication, thought leadership, digital content, campaigns, and service messaging where clarity and credibility matter."],
  ["retail", "Retail & Ecommerce", "Product marketing, ecommerce content, promotional campaigns, customer communications, social content, and high-volume digital experiences."],
];

const marketingOperations = [
  ["Campaigns & launches", "Continuous localization"],
  ["Websites & digital content", "Continuous updates"],
  ["Videos & multimedia", "Managed production"],
  ["Sales enablement", "Reusable content"],
  ["Regional review", "Structured approvals"],
  ["Brand language assets", "Reusable across markets"],
];

const relatedServices = [
  ["Marketing Teams", "Centralize campaign localization, brand language, review, and multilingual content operations across global marketing organizations.", links.marketingTeams],
  ["Website Translation Services", "Translate websites, landing pages, metadata, digital experiences, and continuous updates with multilingual SEO and enterprise workflows.", links.website],
  ["Transcreation Services", "Adapt slogans, advertising, campaign concepts, headlines, and other creative content for local-market impact.", links.transcreation],
  ["Video Translation Services", "Localize scripts, subtitles, voiceover, captions, on-screen text, and multilingual video production.", links.video],
  ["Multilingual Desktop Publishing", "Carry translated brochures, presentations, catalogs, graphics, and other designed assets through multilingual layout and production.", links.dtp],
  ["Translation API", "Connect translation workflows with content systems and recurring digital content through programmatic automation.", links.api],
  ["Enterprise Translation Management", "Centralize multilingual requests, AI and human workflows, terminology, translation memory, approvals, quality, delivery, and reporting.", links.enterprise],
];

const faqs = [
  ["What are marketing translation services?", "Marketing translation services adapt customer-facing marketing content from one language into another while preserving meaning, tone, brand voice, terminology, and the purpose of the original message. Because marketing is designed to influence customer behavior, the work may also include localization, multilingual SEO, creative adaptation, transcreation, and production services."],
  ["What is the difference between marketing translation and marketing localization?", "Marketing translation focuses on producing accurate, natural target-language content. Marketing localization takes a broader view and can also adapt regional conventions, cultural references, calls to action, imagery context, digital elements, terminology, search behavior, layout, and other parts of the customer experience. Many global campaigns require both."],
  ["What is the difference between marketing translation and transcreation?", "Professional marketing translation preserves meaning, tone, and persuasive intent while staying reasonably close to the source. Transcreation gives the linguist greater creative freedom to recreate the effect of the original message. It is especially useful for taglines, slogans, headlines, advertising, humor, wordplay, and other creative concepts that do not translate directly."],
  ["Does every marketing asset need transcreation?", "No. Product brochures, case studies, press releases, product descriptions, and recurring website updates may be best handled through professional translation or an AI-assisted workflow with expert review. A tagline or global campaign concept may justify transcreation. Selecting the right level of creative adaptation helps balance impact, speed, and cost."],
  ["Can AI be used for marketing translation?", "Yes, when it is used within an appropriate workflow. AI translation can improve speed and scalability for high-volume, recurring, or structured marketing content. Professional review can then validate language, brand voice, terminology, and local relevance, while highly creative assets can be routed to professional marketing linguists or transcreation specialists."],
  ["How does Stepes maintain brand consistency across languages?", "Stepes uses multilingual terminology, style guidance, translation memory, approved messaging, professional linguist continuity, and reviewer feedback to create a reusable brand-language foundation. These resources help keep product names, company terminology, tone, preferred expressions, and campaign language aligned across markets and channels."],
  ["Does Stepes provide multilingual SEO translation?", "Yes. Stepes supports multilingual SEO localization for websites, landing pages, digital marketing, and other search-facing content. This can include local-market keyword research or validation, page titles, meta descriptions, headings, body copy, calls to action, anchor text, product terminology, and other SEO-relevant content."],
  ["What types of marketing content can Stepes translate?", "Stepes supports websites, landing pages, digital advertising, email marketing, social media, brochures, presentations, catalogs, press releases, case studies, sales materials, product launches, brand messaging, videos, subtitles, voiceover, event materials, promotional graphics, and many other forms of customer-facing marketing content."],
  ["Can our regional or in-market teams review the translations?", "Yes. Stepes can support client reviewers, regional marketing teams, subject-matter stakeholders, and in-market language reviewers as part of the approval workflow. Approved feedback can also be captured in terminology, translation memory, and style guidance so future content benefits from decisions that have already been made."],
  ["Can Stepes support ongoing global marketing campaigns?", "Yes. Stepes supports recurring and continuous marketing localization programs using translation management, translation memory, terminology, AI-assisted workflows, professional human review, APIs, and other workflow options. New content can build on previously approved language rather than being managed as unrelated translation projects."],
];

function HeroArtwork() {
  return (
    <div className="hero-art" aria-label="Connected multilingual marketing campaign across digital, video, social, and print channels" role="img">
      <svg viewBox="0 0 650 520" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path className="art-soft" d="M87 289c44-106 125-171 244-195 102-21 186 13 250 85" />
        <path className="art-soft" d="M77 332c62 81 146 125 252 132 98 7 178-19 242-77" />
        <rect className="art-panel" x="176" y="94" width="314" height="214" rx="18"/>
        <path className="art-line" d="M176 135h314"/>
        <circle className="art-accent-fill" cx="204" cy="115" r="5"/>
        <circle className="art-muted-fill" cx="222" cy="115" r="5"/>
        <circle className="art-muted-fill" cx="240" cy="115" r="5"/>
        <rect className="art-muted" x="208" y="164" width="120" height="12" rx="6"/>
        <rect className="art-accent" x="208" y="190" width="194" height="15" rx="7"/>
        <rect className="art-muted" x="208" y="219" width="172" height="10" rx="5"/>
        <rect className="art-muted" x="208" y="239" width="134" height="10" rx="5"/>
        <rect className="art-accent-fill" x="208" y="265" width="92" height="24" rx="12"/>
        <rect className="art-panel" x="63" y="198" width="104" height="183" rx="18"/>
        <path className="art-line" d="M82 229h66"/>
        <circle className="art-accent" cx="115" cy="276" r="24"/>
        <path className="art-accent" d="m107 268 17 9-17 10z"/>
        <path className="art-muted" d="M86 320h58M86 340h44M86 358h51"/>
        <rect className="art-panel" x="498" y="194" width="112" height="154" rx="18"/>
        <circle className="art-accent" cx="554" cy="235" r="19"/>
        <path className="art-accent" d="M544 244c4-10 16-10 20 0"/>
        <circle className="art-accent" cx="554" cy="230" r="6"/>
        <path className="art-muted" d="M519 278h70M519 296h56M519 314h64"/>
        <path className="art-line" d="M167 277h23M475 253h23M418 310v28"/>
        <circle className="art-accent-fill" cx="190" cy="277" r="4"/>
        <circle className="art-accent-fill" cx="475" cy="253" r="4"/>
        <circle className="art-accent-fill" cx="418" cy="338" r="4"/>
        <rect className="art-panel" x="290" y="338" width="257" height="104" rx="15"/>
        <path className="art-muted" d="M316 365h102M316 386h154M316 407h123"/>
        <path className="art-accent" d="M493 361h28v28h-28z"/>
        <path className="art-accent" d="m500 377 6 6 10-13"/>
        <path className="art-accent" d="M121 173c24-35 55-60 91-76"/>
        <path className="art-accent" d="M493 117c37 12 66 34 88 66"/>
        <circle className="art-accent-fill" cx="116" cy="181" r="5"/>
        <circle className="art-accent-fill" cx="586" cy="190" r="5"/>
        <g className="lang-chips">
          <rect className="chip" x="116" y="99" width="55" height="28" rx="14"/>
          <text x="143" y="118" textAnchor="middle">EN</text>
          <rect className="chip" x="487" y="76" width="55" height="28" rx="14"/>
          <text x="514" y="95" textAnchor="middle">DE</text>
          <rect className="chip" x="554" y="362" width="55" height="28" rx="14"/>
          <text x="581" y="381" textAnchor="middle">JA</text>
          <rect className="chip" x="205" y="402" width="55" height="28" rx="14"/>
          <text x="232" y="421" textAnchor="middle">FR</text>
        </g>
      </svg>
    </div>
  );
}

function CampaignMap() {
  return (
    <div className="campaign-map" aria-label="One global campaign branching into eight connected marketing channels" role="img">
      <div className="campaign-core">
        <span>GLOBAL</span>
        <strong>CAMPAIGN</strong>
        <small>Brand voice · message · terminology</small>
      </div>
      <div className="network-node node-a"><Icon name="web"/><span>Web</span></div>
      <div className="network-node node-b"><Icon name="mail"/><span>Email</span></div>
      <div className="network-node node-c"><Icon name="ads"/><span>Paid Media</span></div>
      <div className="network-node node-d"><Icon name="social"/><span>Social</span></div>
      <div className="network-node node-e"><Icon name="video"/><span>Video</span></div>
      <div className="network-node node-f"><Icon name="sales"/><span>Sales</span></div>
      <div className="network-node node-g"><Icon name="pr"/><span>PR</span></div>
      <div className="network-node node-h"><Icon name="event"/><span>Events</span></div>
      <svg className="map-lines" viewBox="0 0 620 440" preserveAspectRatio="none" aria-hidden="true">
        <path d="M132 54 200 190M132 158 200 204M132 262 200 218M132 366 200 232M420 190 488 54M420 204 488 158M420 218 488 262M420 232 488 366"/>
      </svg>
    </div>
  );
}

function BrandVisual() {
  return (
    <div className="brand-visual" aria-label="Shared brand language flowing to multiple localized marketing outputs" role="img">
      <div className="brand-source">
        <div className="brand-source-mark"><Icon name="brand" size={28}/></div>
        <span>SHARED LANGUAGE ASSETS</span>
        <strong>One Brand Voice</strong>
        <div className="source-tags"><em>Style</em><em>Terms</em><em>TM</em><em>Review</em></div>
      </div>
      <div className="brand-flow" aria-hidden="true"><span></span><span></span><span></span></div>
      <div className="brand-outputs">
        {["English · Global", "French · France", "German · Germany", "Japanese · Japan"].map((label, i) => (
          <div className="brand-output" key={label}>
            <b>{label}</b>
            <span className={`output-line line-${i + 1}`}></span>
            <span className="output-line short"></span>
            <small>Locally natural · globally aligned</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContextMockup() {
  return (
    <div className="context-ui">
      <div className="ui-topbar">
        <div><span></span><span></span><span></span></div>
        <small>Campaign Preview · German</small>
        <b>Ready for Review</b>
      </div>
      <div className="ui-body">
        <div className="ui-preview">
          <div className="preview-kicker">PRODUKTLAUNCH</div>
          <div className="preview-title">Eine klare Botschaft,<br/>für den Markt.</div>
          <div className="preview-copy"></div>
          <div className="preview-copy short"></div>
          <div className="preview-cta">Mehr erfahren</div>
          <div className="preview-art" aria-hidden="true">
            <div className="preview-art-back"></div>
            <div className="preview-art-card">
              <span className="preview-art-label">DE</span>
              <span className="preview-art-symbol"><Icon name="spark" size={20}/></span>
              <span className="preview-art-line wide"></span>
              <span className="preview-art-line"></span>
              <span className="preview-art-accent"></span>
            </div>
          </div>
        </div>
        <div className="ui-review">
          <div className="review-head"><span>IN-CONTEXT QA</span><b>6 checks</b></div>
          {contextChecks.map(([title, detail]) => (
            <div className="review-row" key={title}>
              <span className="review-check"><Icon name="check" size={15}/></span>
              <div><b>{title}</b><small>{detail}</small></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MarketingTranslationServices56() {
  return (
    <main className="marketing-page">
      <style>{styles}</style>

      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Marketing Translation Services for Global Campaigns</h1>
            <p className="hero-lede">Turn global campaigns into locally relevant customer experiences with professional marketing translation services built for every language, market, channel, and content format.</p>
            <p className="hero-support">Stepes combines professional marketing linguists, transcreation specialists, AI-enabled translation workflows, terminology management, multilingual SEO, and creative production to help global brands move faster without losing the voice, message, and impact that make their marketing work.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
              <a className="btn btn-secondary" href={links.sales}>Talk to an Expert</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-grid">
          <div><strong>100+ Languages</strong><span>Professional coverage for major global markets.</span></div>
          <div><strong>AI + Human Workflows</strong><span>The right translation approach for each type of content.</span></div>
          <div><strong>Translation, Localization & Transcreation</strong><span>From accurate content to high-impact creative adaptation.</span></div>
          <div><strong>Digital, Print & Multimedia</strong><span>Connected marketing content across channels and formats.</span></div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-overview">
          <div className="sticky-copy">
            <div className="eyebrow">GLOBAL BRAND COMMUNICATION</div>
            <h2>Global Marketing Is More Than Translating Words</h2>
          </div>
          <div className="overview-copy">
            <p className="lead">A successful campaign does more than communicate information. It creates interest, builds trust, differentiates a brand, and moves customers to act.</p>
            <p>Those goals do not automatically carry over when words are translated from one language into another. Marketing translation must preserve the purpose behind the content—including brand voice, creative intent, product terminology, audience expectations, calls to action, and the relationship between the message and the customer experience around it.</p>
            <p>A sentence can be linguistically correct and still sound unnatural, overly literal, culturally disconnected, or simply unconvincing in another market.</p>
            <p>Stepes provides professional marketing translation and localization services designed around how global marketing actually works. Depending on the content, we can apply professional human translation, AI-assisted translation with expert review, localization, multilingual SEO, or full transcreation.</p>
            <div className="editorial-note"><span></span><p>Successful marketing localization carries the purpose of the campaign—not simply the source-language wording—into each market.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionHeader eyebrow="CONNECTED CAMPAIGNS" title="Your Campaign Doesn't Live in One File" intro="Global marketing moves across channels. Stepes helps approved terminology, brand voice, and core messaging stay connected while each asset is adapted for its local purpose." />
          <div className="campaign-layout">
            <CampaignMap />
            <div className="channel-list">
              {channelItems.map(([icon, title, text]) => (
                <div className="channel-row" key={title}>
                  <div className="icon-box"><Icon name={icon}/></div>
                  <div><h3>{title}</h3><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-closing">One campaign. Every channel. Every market. <strong>Stepes helps keep them connected.</strong></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeader title="Marketing Content We Translate and Localize" intro="Across those channels—from individual assets to continuous global content programs—Stepes supports digital, creative, commercial, communications, multimedia, and print marketing workflows." />
          <div className="content-groups">
            {contentGroups.map(([title, text], i) => (
              <article className="content-group" key={title}>
                <span className="quiet-icon"><Icon name={["web","pen","sales","pr","video","file"][i]}/></span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
          <p className="center-note">Whatever the format, the objective is the same: create marketing content that feels intentional in the target language rather than visibly translated from another one.</p>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <SectionHeader eyebrow="WORKFLOW ROUTING" title="The Right Language Workflow for Every Marketing Asset" intro="A high-volume product description and a global campaign slogan carry very different creative risks. Stepes matches the localization approach to content purpose, visibility, complexity, scale, audience, and brand sensitivity." dark />
          <div className="workflow-models">
            {workflowModels.map(([icon, title, text, examples]) => (
              <article className="workflow-model" key={title}>
                <div className="workflow-model-head"><span><Icon name={icon}/></span><h3>{title}</h3></div>
                <p>{text}</p>
                <small>{examples}</small>
              </article>
            ))}
          </div>
          <div className="dark-callout">The better question is not simply whether marketing content should be translated by AI or by people. <strong>It is which combination of technology, linguistic expertise, creative adaptation, and review will produce the right result for this content and market.</strong></div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container ai-grid">
          <div className="ai-copy">
            <h2>AI Speed Where It Helps. Human Creativity Where It Matters.</h2>
            <p className="lead">AI has changed what is possible in multilingual marketing. High-volume content can move faster, recurring updates can be processed more efficiently, and approved language assets can support greater reuse.</p>
            <p>But marketing effectiveness still depends on tone, clarity, relevance, personality, emotion, cultural context, and creative execution. Stepes brings AI translation and professional human expertise together within a flexible marketing localization workflow. Technology can accelerate language production; brand decisions, approvals, and creative judgment remain with people.</p>
            <ArrowLink href={links.enterprise}>Explore Enterprise Translation Management</ArrowLink>
          </div>
          <div className="ai-process">
            <div className="ai-process-line"></div>
            <div className="ai-step"><span><Icon name="spark"/></span><div><h3>Scale High-Volume Content Efficiently</h3><p>Accelerate recurring campaigns, product descriptions, structured marketing data, digital updates, and other multilingual content produced at scale.</p></div></div>
            <div className="ai-step"><span><Icon name="memory"/></span><div><h3>Reuse Approved Language</h3><p>Apply translation memory, terminology, and existing content so teams do not rebuild every translation from the beginning.</p></div></div>
            <div className="ai-step"><span><Icon name="human"/></span><div><h3>Add Professional Marketing Review</h3><p>Validate meaning, fluency, terminology, tone, and local-market appropriateness according to the visibility and business importance of each asset.</p></div></div>
            <div className="ai-step"><span><Icon name="pen"/></span><div><h3>Bring in Creative Expertise</h3><p>Route headlines, advertising, brand storytelling, slogans, and launches to marketing linguists or transcreation specialists when creative impact matters most.</p></div></div>
          </div>
        </div>
      </section>

      <section className="section section-soft brand-section">
        <div className="container brand-grid">
          <div className="brand-copy">
            <div className="eyebrow">BRAND GOVERNANCE</div>
            <h2>One Brand Voice Across Every Language</h2>
            <p className="lead">Global brands need consistency—but not sameness. Marketing should feel natural to customers in each market while remaining recognizably part of the same company, product, and brand.</p>
            <p>Stepes helps turn approved brand language into a reusable multilingual foundation that can support campaigns, websites, launches, and recurring content across markets.</p>
          </div>
          <BrandVisual />
          <div className="brand-list">
            {brandItems.map(([icon, title, text]) => (
              <div className="brand-row" key={title}><span><Icon name={icon}/></span><div><h3>{title}</h3><p>{text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section transcreation-section">
        <div className="container transcreation-grid">
          <div className="transcreation-visual" aria-hidden="true">
            <div className="quote-mark">“</div>
            <div className="creative-copy source"><span>ORIGINAL IDEA</span><strong>Make every moment count.</strong></div>
            <div className="creative-arrow"><Icon name="arrow"/></div>
            <div className="creative-copy local"><span>LOCAL CREATIVE INTENT</span><strong>Meaning rebuilt for the market.</strong></div>
          </div>
          <div className="transcreation-copy">
            <div className="eyebrow">CREATIVE ADAPTATION</div>
            <h2>Transcreation for High-Impact Marketing Content</h2>
            <p className="lead">Some marketing ideas cannot simply be translated. A slogan may depend on rhythm, a headline may rely on a double meaning, and a campaign may use humor or cultural references with no direct equivalent in another language.</p>
            <p>Transcreation recreates the intent and creative effect of marketing content for a specific language and culture. Stepes uses it selectively for campaign headlines and concepts, advertising, slogans and taglines, product launches, brand storytelling, promotional video scripts, humor, wordplay, and other high-visibility creative assets.</p>
            <p>Not every marketing asset needs transcreation. Applying it where it matters—and using more efficient workflows where it does not—helps global teams balance creative quality, speed, and cost.</p>
            <ArrowLink href={links.transcreation}>Explore Transcreation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white launch-section">
        <div className="container">
          <SectionHeader eyebrow="END-TO-END LOCALIZATION" title="From Campaign Brief to Multilingual Launch" intro="Stepes connects campaign objectives, brand language, translation technology, professional linguists, creative review, production, and market feedback in a structured workflow that can scale from one campaign to continuous global marketing operations." />
          <div className="launch-timeline">
            {launchSteps.map(([title, text], i) => (
              <article className="launch-row" key={title}>
                <div className="launch-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="launch-title"><span>{i < 2 ? "DISCOVER" : i < 4 ? "LOCALIZE" : i < 6 ? "REVIEW" : "DELIVER"}</span><h3>{title}</h3></div>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container context-grid">
          <div className="context-copy">
            <h2>Marketing Translation Isn't Finished Until It Works in Context</h2>
            <p className="lead">A translation may look perfect in a text document and still fail when it appears in the final creative.</p>
            <p>A headline can become too long for the hero banner. A call to action can lose its energy. Text expansion can disrupt a brochure. A subtitle can become difficult to read. A phrase that works in isolation can conflict with the image beside it.</p>
            <p>Stepes supports in-context review so translated content can be evaluated in the experience customers actually see.</p>
          </div>
          <ContextMockup />
          <div className="qa-grid">
            {qaItems.map(([title, text]) => <div className="qa-item" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section seo-section">
        <div className="container seo-grid">
          <div className="seo-visual">
            <div className="search-card source-search"><span>SOURCE MARKET</span><div><Icon name="search" size={20}/><b>enterprise translation platform</b></div><small>Source concept and customer intent</small></div>
            <div className="seo-path"><span></span><span></span><span></span></div>
            <div className="search-card local-search"><span>TARGET MARKET</span><div><Icon name="globe" size={20}/><b>Local search language</b></div><small>Validated terminology · market context · search intent</small></div>
            <div className="seo-meta"><b>SEO CONTENT LAYER</b><span>Title</span><span>Meta</span><span>H1</span><span>CTA</span><span>Anchor</span></div>
          </div>
          <div className="seo-copy">
            <div className="eyebrow">MULTILINGUAL SEO</div>
            <h2>Translate Search Intent, Not Just Keywords</h2>
            <p className="lead">Customers in different countries do not always search for the same products using direct translations of the same words.</p>
            <p>Terminology changes by region. Search behavior changes. Industry language evolves differently. A keyword with strong demand in one market may have little value when translated literally into another language.</p>
            <p>Stepes can support target-market keyword research or validation, local search terminology, page titles, meta descriptions, headings, body content, calls to action, anchor text, product terminology, image alt text, URL slugs where appropriate, and other search-facing content.</p>
            <p>The goal is not to reproduce English SEO in another language. It is to create market-relevant content that answers the same customer need in the way local audiences actually express it.</p>
            <ArrowLink href={links.website}>Explore Website Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container workflow-connect-grid">
          <div className="workflow-connect-copy">
            <div className="eyebrow">CONTINUOUS CONTENT</div>
            <h2>Keep Multilingual Content Moving With Your Marketing</h2>
            <p className="lead">Global marketing rarely happens one project at a time. Websites change, campaigns launch, product teams release new features, sales materials are revised, and regional teams request updates.</p>
            <p>Stepes supports flexible localization workflows that reduce manual coordination while maintaining visibility over terminology, review, quality, and delivery.</p>
            <ArrowLink href={links.api}>Explore the Stepes Translation API</ArrowLink>
          </div>
          <div className="workflow-connect-list">
            <div><span><Icon name="file"/></span><h3>File-Based Translation</h3><p>Upload presentations, documents, design files, spreadsheets, video, and other marketing assets through a managed project workflow.</p></div>
            <div><span><Icon name="code"/></span><h3>Structured Content</h3><p>Support recurring and high-volume content through CSV, XML, JSON, and other structured content exchanges.</p></div>
            <div><span><Icon name="layers"/></span><h3>CMS & Content Workflows</h3><p>Coordinate translation and publishing handoffs for websites and continuously updated digital experiences.</p></div>
            <div><span><Icon name="api"/></span><h3>Translation API</h3><p>Connect multilingual content workflows programmatically for recurring content exchange and enterprise automation.</p></div>
            <div><span><Icon name="memory"/></span><h3>Continuous Marketing Programs</h3><p>Support ongoing campaigns, launches, and content programs through repeatable workflows and reusable language assets.</p></div>
          </div>
        </div>
      </section>

      <section className="section production-section">
        <div className="container production-grid">
          <article className="production-feature video-feature">
            <div className="feature-icon"><Icon name="video" size={30}/></div>
            <h2>Marketing Video and Multimedia Localization</h2>
            <p>Stepes helps companies adapt campaign videos, product launches, customer stories, social content, explainers, executive communications, and other audiovisual marketing for global audiences.</p>
            <p>Multilingual video workflows can support script translation, transcription, subtitles, closed captions, voiceover, dubbing, on-screen text, graphic localization, timing, and final quality review.</p>
            <p>Because subtitle length, voice timing, graphics, and campaign language influence one another, multimedia localization works best as a connected production process.</p>
            <ArrowLink href={links.video}>Explore Video Translation Services</ArrowLink>
          </article>
          <article className="production-feature dtp-feature">
            <div className="feature-icon"><Icon name="file" size={30}/></div>
            <div className="eyebrow">MULTILINGUAL PRODUCTION</div>
            <h2>Deliver Finished Marketing Assets, Not Just Translated Text</h2>
            <p>Translation often changes the visual structure of marketing content. Text can expand, typography changes across scripts, graphics may need recreation, and right-to-left languages can require different page composition.</p>
            <p>Stepes provides multilingual desktop publishing and production support for brochures, catalogs, datasheets, presentations, posters, event materials, promotional graphics, PDFs, and other designed assets, including workflows for Adobe InDesign, Illustrator, Photoshop, Acrobat/PDF, Microsoft PowerPoint, and other agreed source formats.</p>
            <p>Production can address typography, text expansion, line breaks, graphic text, local fonts, right-to-left layout, tables, callouts, image placement, and final visual QA.</p>
            <ArrowLink href={links.dtp}>Explore Multilingual Desktop Publishing</ArrowLink>
          </article>
        </div>
      </section>

      <section className="section section-soft industry-section">
        <div className="container">
          <SectionHeader title="Marketing Expertise Meets Industry Expertise" intro="Strong marketing translation requires an understanding of the customer—and often an understanding of the product itself. Stepes combines marketing language expertise with industry specialization so content remains both engaging and credible." />
          <div className="industry-grid">
            {industryItems.map(([icon, title, text]) => (
              <article className="industry-item" key={title}>
                <span className="industry-icon"><Icon name={icon}/></span><h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section marketing-teams-section">
        <div className="container teams-grid">
          <div className="teams-copy">
            <div className="eyebrow">ENTERPRISE MARKETING OPERATIONS</div>
            <h2>Built for Global Marketing Teams</h2>
            <p className="lead">Global marketing teams rarely struggle because they have only one document to translate. The challenge is coordinating content across regions, languages, agencies, stakeholders, launch dates, and channels while keeping the brand consistent and the workflow manageable.</p>
            <p>Stepes supports enterprise marketing organizations that need a more connected way to manage multilingual content—from isolated projects to ongoing programs—through centralized workflows, reusable brand language assets, AI-assisted scale, professional review, and structured regional feedback.</p>
            <ArrowLink href={links.marketingTeams}>Explore Solutions for Marketing Teams</ArrowLink>
          </div>
          <div className="teams-panel">
            <div className="teams-panel-head"><span>CONNECTED MARKETING OPERATIONS</span><b>One connected localization program</b></div>
            <div className="teams-rows">
              {marketingOperations.map(([title, status]) => (
                <div key={title}><span className="team-status"><Icon name="check" size={15}/></span><b>{title}</b><small>{status}</small></div>
              ))}
            </div>
            <div className="teams-footer"><span>AI-assisted scale</span><span>Professional review</span><span>Program visibility</span></div>
          </div>
        </div>
      </section>

      <section className="section section-white related-section">
        <div className="container">
          <SectionHeader title="Connected Services for Global Marketing" intro="Global marketing localization often spans several specialized language and content workflows. Stepes brings these capabilities together so teams can build the right solution around each campaign and content program." />
          <div className="related-list">
            {relatedServices.map(([title, text, href]) => (
              <a className="related-row" href={href} key={title}>
                <div><h3>{title}</h3><p>{text}</p></div><span className="related-arrow"><Icon name="arrow"/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container faq-layout">
          <div className="faq-title">
            <h2>Marketing Translation Services FAQ</h2>
            <p>Answers to common questions about marketing translation, localization, transcreation, AI-assisted workflows, brand consistency, SEO, and global campaign operations.</p>
          </div>
          <div className="faq-panel">
            {faqs.map(([q, a], i) => (
              <details className="faq-item" key={q} open={i === 0}>
                <summary>
                  <span>{q}</span><span className="faq-toggle"><Icon name="chevron"/></span>
                </summary>
                <div className="faq-answer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-inner">
          <div>
            <h2>Take Your Next Campaign Global</h2>
            <p>Whether you are translating a single marketing asset, launching across multiple countries, localizing a global website, or building an ongoing multilingual marketing program, Stepes can help you choose the right workflow for every type of content.</p>
          </div>
          <div className="final-actions">
            <a className="btn btn-primary cta-white" href={links.quote}>Get a Translation Quote <Icon name="arrow" size={18}/></a>
            <a className="btn btn-on-dark" href={links.sales}>Talk to a Marketing Translation Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-deep: #A71954;
    --burgundy: #7A1542;
    --pink-soft: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #17181B;
    --ink-2: #2C2E33;
    --body: #4A4D55;
    --muted: #727680;
    --line: #E4E5E8;
    --soft: #F6F6F7;
    --white: #FFFFFF;
    --dark: #17171A;
    --dark-2: #222227;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .marketing-page { font-family: Inter, "Inter Tight", Arial, sans-serif; color: var(--ink); background: #fff; overflow: hidden; }
  .marketing-page a { color: inherit; }
  .marketing-page p { margin: 0; font-size: 16px; line-height: 1.72; color: var(--body); font-weight: 400; overflow-wrap: break-word; }
  .marketing-page h1, .marketing-page h2, .marketing-page h3 { margin: 0; font-family: "Inter Tight", Inter, Arial, sans-serif; font-weight: 600; letter-spacing: -0.025em; }
  .marketing-page h1 { font-size: 48px; line-height: 1.06; max-width: 720px; }
  .marketing-page h2 { font-size: 36px; line-height: 1.12; }
  .marketing-page h3 { font-size: 24px; line-height: 1.24; }
  .container { width: 100%; max-width: 1280px; margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding: 96px 0; }
  .section-white { background: #fff; }
  .section-light { background: #fff; }
  .section-soft { background: var(--soft); }
  .eyebrow { font-size: 11px !important; line-height: 1.2 !important; font-weight: 600 !important; letter-spacing: .13em !important; color: var(--magenta) !important; text-transform: uppercase; margin-bottom: 16px; }
  .section-heading { max-width: 850px; margin-bottom: 52px; }
  .section-heading.centered-heading { text-align: center; margin-left: auto; margin-right: auto; }
  .section-heading .section-intro { max-width: 800px; margin-top: 20px; font-size: 18px; line-height: 1.65; }
  .section-heading.centered-heading .section-intro { margin-left: auto; margin-right: auto; }
  .lead { font-size: 18px !important; line-height: 1.66 !important; color: #373A41 !important; }

  .hero { padding: 104px 0 96px; background: linear-gradient(180deg, #fff 0%, #fff 66%, #FBF8FA 100%); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(440px, .97fr); gap: 62px; align-items: center; }
  .hero-lede { font-size: 20px !important; line-height: 1.56 !important; color: #34363C !important; max-width: 700px; margin-top: 26px !important; }
  .hero-support { max-width: 700px; margin-top: 17px !important; }
  .hero-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
  .btn { min-height: 48px; padding: 13px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; text-decoration: none; text-align: center; white-space: normal; font-size: 16px; font-weight: 600; transition: .2s ease; border: 1px solid transparent; }
  .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
  .btn-primary *, .btn-primary:visited *, .btn-primary:hover *, .btn-primary:active *, .btn-primary:focus *, .btn-primary:focus-visible * { color: #fff !important; stroke: #fff !important; }
  .btn-primary:hover { background: var(--magenta-deep); transform: translateY(-1px); }
  .btn-secondary { border-color: #D6D7DA; background: #fff; color: #25272C !important; }
  .btn-secondary:hover { border-color: #BFC1C6; background: #F8F8F9; transform: translateY(-1px); }
  .btn:focus-visible, .arrow-link:focus-visible, .related-row:focus-visible, .faq-item summary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
  .hero-art { width: 100%; max-width: 590px; margin-left: auto; }
  .hero-art svg { width: 100%; height: auto; display: block; }
  .art-panel { stroke: #80838B; stroke-width: 1.7; fill: #fff; }
  .art-line { stroke: #8C8F96; stroke-width: 1.6; }
  .art-muted { stroke: #8C8F96; stroke-width: 1.6; fill: none; }
  .art-accent { stroke: var(--magenta); stroke-width: 2; fill: none; }
  .art-accent-fill { fill: var(--magenta); }
  .art-muted-fill { fill: #A8ABB0; }
  .art-soft { stroke: #D8D9DD; stroke-width: 1.2; stroke-dasharray: 5 8; }
  .lang-chips .chip { stroke: var(--magenta); fill: #fff; stroke-width: 1.5; }
  .lang-chips text { font-size: 14px; font-weight: 600; fill: var(--magenta); letter-spacing: .05em; }

  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); padding-top: 25px; padding-bottom: 25px; }
  .proof-grid > div { padding: 2px 24px; border-right: 1px solid var(--line); }
  .proof-grid > div:first-child { padding-left: 0; }
  .proof-grid > div:last-child { border-right: none; padding-right: 0; }
  .proof-grid strong { display: block; font-size: 16px; line-height: 1.3; margin-bottom: 7px; font-weight: 600; }
  .proof-grid span { display: block; font-size: 16px; line-height: 1.45; color: var(--muted); }

  .split-overview { display: grid; grid-template-columns: minmax(320px,.8fr) minmax(0,1.2fr); gap: 96px; align-items: start; }
  .sticky-copy { max-width: 470px; }
  .overview-copy { max-width: 790px; }
  .overview-copy p + p { margin-top: 18px; }
  .editorial-note { display: grid; grid-template-columns: 34px 1fr; gap: 16px; margin-top: 32px; padding-top: 28px; border-top: 1px solid var(--line); align-items: start; }
  .editorial-note > span { height: 2px; width: 34px; background: var(--magenta); margin-top: 13px; }
  .editorial-note p { font-size: 18px; line-height: 1.58; color: #2E3035; }

  .campaign-layout { display: grid; grid-template-columns: minmax(430px,.92fr) minmax(0,1.08fr); gap: 70px; align-items: center; }
  .campaign-map { position: relative; height: 440px; max-width: 620px; margin: 0 auto; }
  .campaign-core { position: absolute; width: 220px; height: 142px; left: 50%; top: 50%; transform: translate(-50%,-50%); z-index: 3; border-radius: 28px; background: #fff; border: 1px solid #DADBE0; box-shadow: 0 20px 45px rgba(20,20,23,.08); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; }
  .campaign-core span { font-size: 11px; letter-spacing: .13em; color: var(--magenta); font-weight: 600; }
  .campaign-core strong { font-size: 22px; margin-top: 5px; }
  .campaign-core small { font-size: 14px; line-height: 1.35; color: var(--muted); max-width: 160px; margin-top: 8px; }
  .network-node { position: absolute; z-index: 2; width: 132px; min-height: 64px; padding: 10px 2px; display: flex; align-items: center; justify-content: flex-start; gap: 10px; color: var(--magenta); }
  .network-node span { color: #34363B; font-size: 14px; font-weight: 600; line-height: 1.25; }
  .node-a{left:0;top:18px}.node-b{left:0;top:122px}.node-c{left:0;top:226px}.node-d{left:0;top:330px}
  .node-e{right:0;top:18px}.node-f{right:0;top:122px}.node-g{right:0;top:226px}.node-h{right:0;top:330px}
  .map-lines { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 1; }
  .map-lines path { stroke: #D7D8DC; stroke-width: 1.3; fill: none; }
  .channel-list { border-top: 1px solid #DADBE0; }
  .channel-row { display: grid; grid-template-columns: 50px 1fr; gap: 18px; padding: 22px 0; border-bottom: 1px solid #DADBE0; align-items: start; }
  .icon-box, .quiet-icon { color: var(--magenta); }
  .icon-box { width: 42px; height: 42px; border-radius: 13px; background: #fff; border: 1px solid #E2E2E5; display: grid; place-items: center; }
  .channel-row h3 { font-size: 18px; margin-bottom: 6px; }
  .channel-row p { line-height: 1.58; }
  .section-closing { margin-top: 46px; text-align: center; font-size: 18px; color: #404249; }

  .content-groups { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); }
  .content-group { display: grid; grid-template-columns: 44px 1fr; gap: 18px; padding: 32px 30px 32px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .content-group:nth-child(odd) { border-right: 1px solid var(--line); }
  .content-group:nth-child(even) { padding-left: 30px; }
  .quiet-icon { width: 38px; height: 38px; border: 1px solid #E0E1E4; border-radius: 12px; display: grid; place-items: center; background: #FAFAFB; }
  .content-group h3 { font-size: 20px; margin-bottom: 9px; }
  .center-note { max-width: 820px; margin: 38px auto 0 !important; text-align: center; font-size: 18px !important; color: #303238 !important; }

  .section-dark { background: var(--dark); color: #fff; }
  .dark-heading h2, .section-dark h3 { color: #fff; }
  .dark-heading .eyebrow, .section-dark .eyebrow { color: var(--pink-light) !important; }
  .dark-heading .section-intro, .section-dark p { color: #C7C8CD; }
  .workflow-models { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid #34343A; }
  .workflow-model { padding: 34px 34px 34px 0; border-bottom: 1px solid #34343A; }
  .workflow-model:nth-child(odd) { border-right: 1px solid #34343A; }
  .workflow-model:nth-child(even) { padding-left: 34px; }
  .workflow-model-head { display: flex; align-items: center; gap: 16px; }
  .workflow-model-head > span { width: 44px; height: 44px; border-radius: 13px; background: #242429; border: 1px solid #393940; display: grid; place-items: center; color: var(--pink-light); flex: 0 0 auto; }
  .workflow-model h3 { font-size: 21px; }
  .workflow-model p { margin-top: 14px; }
  .workflow-model small { display: block; font-size: 16px; color: #9799A2; line-height: 1.55; margin-top: 14px; }
  .dark-callout { margin-top: 40px; border-left: 3px solid var(--magenta); padding: 4px 0 4px 24px; max-width: 930px; color: #D8D9DD; font-size: 18px; line-height: 1.65; }
  .dark-callout strong { color: #fff; font-weight: 600; }

  .ai-grid { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 92px; align-items: center; }
  .ai-copy { max-width: 520px; }
  .ai-copy .lead { margin-top: 22px !important; }
  .ai-copy p + p { margin-top: 16px; }
  .arrow-link { display: inline-flex; align-items: center; gap: 7px; margin-top: 24px; color: var(--magenta) !important; text-decoration: none; font-weight: 600; font-size: 16px; min-height: 44px; }
  .arrow-link svg { transition: transform .18s ease; }
  .arrow-link:hover svg { transform: translateX(4px); }
  .ai-process { position: relative; }
  .ai-process-line { position: absolute; width: 1px; background: #E0E1E4; left: 21px; top: 22px; bottom: 22px; }
  .ai-step { position: relative; z-index: 2; display: grid; grid-template-columns: 44px 1fr; gap: 20px; padding: 0 0 26px; }
  .ai-step:last-child { padding-bottom: 0; }
  .ai-step > span { width: 44px; height: 44px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: var(--pink-soft); border: 1px solid #F0D8E3; }
  .ai-step h3 { font-size: 19px; margin-bottom: 7px; }

  .brand-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 66px 82px; align-items: start; }
  .brand-copy { max-width: 520px; }
  .brand-copy .lead { margin-top: 22px !important; }
  .brand-copy p + p { margin-top: 16px; }
  .brand-visual { min-height: 365px; border: 1px solid #DEDFE2; background: #fff; border-radius: 28px; padding: 34px; display: grid; grid-template-columns: .8fr 60px 1.2fr; align-items: center; box-shadow: 0 14px 34px rgba(26,27,30,.045); }
  .brand-source { text-align: center; padding: 24px 18px; border-radius: 20px; background: #FBF7F9; border: 1px solid #EBD8E1; }
  .brand-source-mark { width: 54px; height: 54px; border-radius: 17px; background: #fff; color: var(--magenta); display: grid; place-items: center; margin: 0 auto 15px; border: 1px solid #E7D1DC; }
  .brand-source > span { display: block; color: var(--magenta); font-size: 11px; letter-spacing: .12em; font-weight: 600; }
  .brand-source strong { display: block; font-size: 20px; margin-top: 6px; }
  .source-tags { display: flex; gap: 5px; justify-content: center; flex-wrap: wrap; margin-top: 13px; }
  .source-tags em { font-style: normal; font-size: 14px; padding: 5px 8px; border-radius: 999px; background: #fff; border: 1px solid #E4DDE0; color: #62646A; }
  .brand-flow { display: flex; flex-direction: column; gap: 28px; align-items: stretch; }
  .brand-flow span { height: 1px; background: #D8D9DD; position: relative; }
  .brand-flow span::after { content: ""; position: absolute; right: -1px; top: -3px; border-left: 6px solid #BFC1C6; border-top: 3.5px solid transparent; border-bottom: 3.5px solid transparent; }
  .brand-outputs { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .brand-output { padding: 15px; border: 1px solid #E1E2E5; border-radius: 15px; min-height: 122px; }
  .brand-output b { font-size: 14px; }
  .output-line { display: block; height: 6px; background: #C7C9CE; border-radius: 3px; margin-top: 16px; width: 78%; }
  .output-line.short { width: 54%; margin-top: 8px; background: #D8D9DD; }
  .brand-output small { display: block; font-size: 14px; color: var(--muted); margin-top: 14px; line-height: 1.35; }
  .brand-list { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid #DADBE0; }
  .brand-row { padding: 25px 20px 0; border-right: 1px solid #DADBE0; }
  .brand-row:first-child { padding-left: 0; }
  .brand-row:last-child { border-right: none; padding-right: 0; }
  .brand-row > span { color: var(--magenta); display: inline-block; margin-bottom: 15px; }
  .brand-row h3 { font-size: 18px; margin-bottom: 7px; }
  .brand-row p { line-height: 1.55; }

  .transcreation-section { background: var(--pink-soft); }
  .transcreation-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 84px; align-items: center; }
  .transcreation-visual { min-height: 390px; position: relative; border: 1px solid #E6CBD7; border-radius: 30px; background: #fff; padding: 50px 46px; display: flex; flex-direction: column; justify-content: center; overflow: hidden; }
  .quote-mark { position: absolute; right: 24px; top: -16px; font-family: Georgia, serif; font-size: 170px; line-height: 1; color: #F4DDE7; }
  .creative-copy { position: relative; z-index: 2; }
  .creative-copy span { display: block; font-size: 11px; letter-spacing: .12em; font-weight: 600; color: var(--magenta); margin-bottom: 8px; }
  .creative-copy strong { font-size: 26px; line-height: 1.25; max-width: 360px; display: block; }
  .creative-copy.source strong { color: #686A70; }
  .creative-copy.local strong { color: #1E2024; }
  .creative-arrow { width: 44px; height: 44px; border-radius: 50%; color: var(--magenta); border: 1px solid #E2AFC5; display: grid; place-items: center; margin: 28px 0; }
  .transcreation-copy .lead { margin-top: 22px !important; }
  .transcreation-copy p + p { margin-top: 16px; }

  .launch-timeline { border-top: 1px solid var(--line); }
  .launch-row { display: grid; grid-template-columns: 78px 310px 1fr; gap: 28px; align-items: center; padding: 25px 0; border-bottom: 1px solid var(--line); }
  .launch-number { font-size: 20px; color: var(--magenta); font-weight: 600; letter-spacing: .02em; }
  .launch-title span { display: block; font-size: 14px; letter-spacing: .12em; font-weight: 600; color: #8A8C93; margin-bottom: 5px; }
  .launch-title h3 { font-size: 19px; }
  .launch-row p { line-height: 1.6; }

  .context-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 68px; align-items: center; }
  .context-copy { max-width: 500px; }
  .context-copy .lead { margin-top: 22px !important; }
  .context-copy p + p { margin-top: 16px; }
  .context-ui { border: 1px solid #D8D9DD; border-radius: 26px; overflow: hidden; background: #fff; box-shadow: 0 18px 44px rgba(20,21,24,.07); }
  .ui-topbar { height: 54px; padding: 0 18px; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; border-bottom: 1px solid #E5E6E8; background: #FAFAFB; }
  .ui-topbar > div { display: flex; gap: 6px; }
  .ui-topbar > div span { width: 8px; height: 8px; border-radius: 50%; background: #C8CACF; }
  .ui-topbar small { font-size: 14px; color: #676A72; }
  .ui-topbar > b { justify-self: end; font-size: 14px; color: var(--magenta); padding: 5px 9px; border-radius: 999px; background: var(--pink-soft); border: 1px solid #E9C5D6; }
  .ui-body { display: grid; grid-template-columns: 1.08fr .92fr; min-height: 440px; }
  .ui-preview { position: relative; padding: 44px 34px; background: #F5F5F6; overflow: hidden; }
  .preview-kicker { font-size: 11px; letter-spacing: .13em; font-weight: 600; color: var(--magenta); }
  .preview-title { margin-top: 15px; font-size: 28px; font-weight: 600; line-height: 1.12; max-width: 300px; letter-spacing: -.03em; position: relative; z-index: 2; }
  .preview-copy { height: 8px; background: #BFC2C7; width: 54%; border-radius: 4px; margin-top: 20px; position: relative; z-index: 2; }
  .preview-copy.short { width: 42%; margin-top: 9px; }
  .preview-cta { display: inline-block; margin-top: 22px; padding: 9px 14px; border-radius: 999px; background: var(--magenta); color: #fff; font-size: 14px; font-weight: 600; position: relative; z-index: 2; }
  .preview-art { position: absolute; left: 50%; right: auto; bottom: 38px; width: 244px; height: 210px; transform: translateX(-50%); }
  .preview-art-back { position: absolute; inset: 28px 0 0 20px; border: 1px solid #D0D2D7; border-radius: 22px; background: #FFFFFF; transform: rotate(-5deg); }
  .preview-art-card { position: absolute; inset: 0 22px 18px 0; border: 1.5px solid #858890; border-radius: 22px; background: #FAFAFB; padding: 18px; transform: rotate(4deg); box-shadow: 0 10px 24px rgba(22,23,27,.05); }
  .preview-art-label { display: block; font-size: 11px; letter-spacing: .12em; font-weight: 600; color: var(--magenta); }
  .preview-art-symbol { width: 42px; height: 42px; margin-top: 15px; border-radius: 14px; display: grid; place-items: center; color: var(--magenta); background: var(--pink-soft); border: 1px solid #E9C5D6; }
  .preview-art-line { display: block; width: 62%; height: 6px; margin-top: 9px; border-radius: 999px; background: #C7C9CE; }
  .preview-art-line.wide { width: 82%; margin-top: 16px; }
  .preview-art-accent { display: block; width: 34px; height: 4px; margin-top: 14px; border-radius: 999px; background: var(--magenta); }
  .ui-review { padding: 22px 22px 10px; }
  .review-head { display: flex; align-items: center; justify-content: space-between; padding-bottom: 15px; border-bottom: 1px solid #E6E7E9; }
  .review-head span { font-size: 14px; letter-spacing: .12em; color: #7C7F87; font-weight: 600; }
  .review-head b { font-size: 14px; color: var(--magenta); }
  .review-row { display: grid; grid-template-columns: 28px 1fr; gap: 10px; padding: 14px 0; border-bottom: 1px solid #ECEDEF; align-items: start; }
  .review-check { width: 24px; height: 24px; border-radius: 8px; background: var(--pink-soft); color: var(--magenta); border: 1px solid #E9C5D6; display: grid; place-items: center; }
  .review-row b { display: block; font-size: 16px; margin-bottom: 4px; }
  .review-row small { display: block; font-size: 16px; line-height: 1.42; color: #747780; }
  .qa-grid { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid #DADBE0; margin-top: 4px; }
  .qa-item { padding: 26px 28px 0 0; border-right: 1px solid #DADBE0; }
  .qa-item:nth-child(3), .qa-item:nth-child(6) { border-right: none; padding-right: 0; }
  .qa-item:nth-child(4), .qa-item:nth-child(5), .qa-item:nth-child(6) { border-top: 1px solid #DADBE0; margin-top: 25px; padding-top: 25px; }
  .qa-item h3 { font-size: 18px; margin-bottom: 6px; }
  .qa-item p { line-height: 1.55; }

  .seo-section { background: #fff; }
  .seo-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 88px; align-items: center; }
  .seo-copy .lead { margin-top: 22px !important; }
  .seo-copy p + p { margin-top: 16px; }
  .seo-visual { position: relative; min-height: 440px; padding: 42px; border-radius: 30px; background: #F6F6F7; border: 1px solid #E2E3E6; display: flex; flex-direction: column; justify-content: center; }
  .search-card { position: relative; z-index: 2; max-width: 390px; border: 1px solid #D9DADE; border-radius: 18px; background: #fff; padding: 18px 20px; box-shadow: 0 10px 25px rgba(20,20,23,.045); }
  .search-card > span { font-size: 14px; letter-spacing: .12em; font-weight: 600; color: #85878E; }
  .search-card > div { display: flex; gap: 10px; align-items: center; margin-top: 10px; color: #656870; }
  .search-card b { color: #282A2F; font-size: 16px; }
  .search-card small { display: block; color: #7B7E85; font-size: 14px; margin-top: 10px; }
  .local-search { margin-left: auto; border-color: #E3BBCD; }
  .local-search > span { color: var(--magenta); }
  .seo-path { height: 82px; width: 54%; margin: 0 auto; position: relative; }
  .seo-path::before { content:""; position:absolute; left:50%; top:0; bottom:0; width:1px; background:#C9CBD0; }
  .seo-path span { position:absolute; width:7px; height:7px; background:var(--magenta); border-radius:50%; left:calc(50% - 3px); }
  .seo-path span:nth-child(1){top:14px}.seo-path span:nth-child(2){top:38px}.seo-path span:nth-child(3){top:62px}
  .seo-meta { margin-top: 26px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  .seo-meta b { width: 100%; font-size: 14px; letter-spacing: .12em; color: #81838A; margin-bottom: 3px; }
  .seo-meta span { font-size: 14px; padding: 6px 9px; border: 1px solid #DADBE0; border-radius: 999px; background: #fff; color: #656870; }

  .workflow-connect-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 86px; align-items: start; }
  .workflow-connect-copy { max-width: 490px; }
  .workflow-connect-copy .lead { margin-top: 22px !important; }
  .workflow-connect-copy p + p { margin-top: 16px; }
  .workflow-connect-list { border-top: 1px solid var(--line); }
  .workflow-connect-list > div { display: grid; grid-template-columns: 44px 230px 1fr; gap: 18px; align-items: start; padding: 22px 0; border-bottom: 1px solid var(--line); }
  .workflow-connect-list > div > span { width: 40px; height: 40px; border-radius: 12px; display: grid; place-items: center; border: 1px solid #E0E1E4; color: var(--magenta); background: #FAFAFB; }
  .workflow-connect-list h3 { font-size: 18px; padding-top: 7px; }
  .workflow-connect-list p { line-height: 1.55; }

  .production-section { background: #F4F4F5; }
  .production-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  .production-feature { background: #fff; border: 1px solid #DEDFE2; border-radius: 28px; padding: 42px; min-height: 520px; }
  .feature-icon { width: 56px; height: 56px; border-radius: 17px; display: grid; place-items: center; margin-bottom: 30px; color: var(--magenta); border: 1px solid #E8CCD9; background: var(--pink-soft); }
  .production-feature h2 { font-size: 31px; max-width: 500px; }
  .production-feature p { margin-top: 17px; }

  .industry-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid #DADBE0; }
  .industry-item { padding: 30px 26px 30px 0; border-right: 1px solid #DADBE0; border-bottom: 1px solid #DADBE0; }
  .industry-item:nth-child(3n) { border-right: none; padding-right: 0; }
  .industry-item:nth-child(3n+2) { padding-left: 26px; }
  .industry-item:nth-child(3n+3) { padding-left: 26px; }
  .industry-item:nth-last-child(-n+3) { border-bottom: none; }
  .industry-icon { color: var(--magenta); display: grid; place-items: center; width: 38px; height: 38px; margin-bottom: 14px; }
  .industry-item h3 { font-size: 19px; margin-bottom: 8px; }
  .industry-item p { line-height: 1.56; }

  .marketing-teams-section { background: #222226; color: #fff; }
  .teams-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 78px; align-items: center; }
  .teams-copy .eyebrow { color: var(--pink-light) !important; }
  .teams-copy h2 { color: #fff; }
  .teams-copy .lead, .teams-copy p { color: #C9CAD0 !important; }
  .teams-copy .lead { margin-top: 22px !important; }
  .teams-copy p + p { margin-top: 16px; }
  .arrow-link.inverse { color: var(--pink-light) !important; }
  .teams-copy .arrow-link { color: var(--pink-light) !important; }
  .teams-panel { border: 1px solid #3A3A40; background: #18181B; border-radius: 28px; overflow: hidden; }
  .teams-panel-head { padding: 23px 24px; border-bottom: 1px solid #37373D; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
  .teams-panel-head span { font-size: 11px; letter-spacing: .12em; color: var(--pink-light); font-weight: 600; }
  .teams-panel-head b { font-size: 16px; color: #fff; line-height: 1.35; }
  .teams-rows { padding: 7px 24px; }
  .teams-rows > div { display: grid; grid-template-columns: 28px minmax(0,1fr) minmax(150px,auto); gap: 12px 18px; padding: 18px 0; border-bottom: 1px solid #303036; align-items: center; }
  .teams-rows > div:last-child { border-bottom: none; }
  .team-status { width: 24px; height: 24px; border-radius: 8px; display: grid; place-items: center; background: rgba(193,29,99,.16); color: var(--pink-light); border: 1px solid rgba(242,167,198,.2); }
  .teams-rows b { font-size: 16px; line-height: 1.4; }
  .teams-rows small { font-size: 16px; line-height: 1.4; color: #AEB0B7; }
  .teams-footer { padding: 16px 24px; border-top: 1px solid #37373D; display: flex; gap: 8px; flex-wrap: wrap; }
  .teams-footer span { font-size: 16px; line-height: 1.35; color: #C6C7CC; border: 1px solid #3D3D43; border-radius: 999px; padding: 7px 11px; }

  .related-list { border-top: 1px solid var(--line); }
  .related-row { display: grid; grid-template-columns: 1fr 54px; gap: 25px; padding: 24px 0; border-bottom: 1px solid var(--line); align-items: center; text-decoration: none; }
  .related-row h3 { font-size: 19px; margin-bottom: 6px; transition: color .18s ease; }
  .related-row p { max-width: 830px; line-height: 1.55; }
  .related-arrow { width: 44px; height: 44px; border-radius: 50%; border: 1px solid #DCDDDF; display: grid; place-items: center; color: var(--magenta); transition: .18s ease; }
  .related-row:hover h3 { color: var(--magenta); }
  .related-row:hover .related-arrow { transform: translateX(4px); border-color: #D9A2BA; }

  .faq-section { background: #F6F6F7; }
  .faq-layout { display: grid; grid-template-columns: 340px 1fr; gap: 88px; align-items: start; }
  .faq-title { position: sticky; top: 32px; }
  .faq-title p { margin-top: 18px; }
  .faq-panel { background: #fff; border: 1px solid #DEDFE2; border-radius: 24px; padding: 0 24px; }
  .faq-item { border-bottom: 1px solid #E4E5E8; }
  .faq-item:last-child { border-bottom: none; }
  .faq-item summary { width: 100%; min-height: 72px; padding: 18px 0; display: flex; align-items: center; justify-content: space-between; gap: 20px; text-align: left; color: #25272C; cursor: pointer; list-style: none; }
  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary::marker { content: ""; }
  .faq-item summary > span:first-child { font-size: 17px; line-height: 1.45; font-weight: 600; }
  .faq-toggle { flex: 0 0 auto; width: 34px; height: 34px; border-radius: 50%; border: 1px solid #DDDEE1; display: grid; place-items: center; color: #65676E; transition: .18s ease; }
  .faq-item[open] .faq-toggle { color: var(--magenta); transform: rotate(180deg); border-color: #E2AFC5; }
  .faq-answer { padding: 0 50px 22px 0; }
  .faq-answer p { max-width: 840px; }

  .final-cta { background: var(--burgundy); padding: 78px 0; color: #fff; }
  .final-cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 60px; align-items: center; }
  .final-cta h2 { color: #fff; max-width: 650px; }
  .final-cta p { color: #F0DCE5; max-width: 760px; margin-top: 17px; font-size: 18px; line-height: 1.62; }
  .final-actions { display: flex; flex-direction: column; gap: 11px; align-items: stretch; min-width: 290px; }
  .final-cta .btn-primary, .final-cta .btn-primary:visited, .final-cta .btn-primary:hover, .final-cta .btn-primary:focus { background: var(--magenta); color: #fff !important; }
  .btn-on-dark { border-color: rgba(255,255,255,.38); color: #fff !important; background: transparent; }
  .btn-on-dark:hover { border-color: #fff; background: rgba(255,255,255,.07); }

  @media (max-width: 1180px) {
    .container { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: 1fr .92fr; gap: 40px; }
    .brand-list { grid-template-columns: repeat(3,1fr); }
    .brand-row { border-bottom: 1px solid #DADBE0; padding: 25px 22px; }
    .brand-row:first-child { padding-left: 0; }
    .brand-row:nth-child(3) { border-right: none; }
    .brand-row:nth-child(4) { padding-left: 0; border-bottom: none; }
    .brand-row:nth-child(5) { border-bottom: none; border-right: none; }
    .workflow-connect-list > div { grid-template-columns: 44px 190px 1fr; }
  }

  @media (max-width: 900px) {
    .container { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .marketing-page h1 { font-size: 42px; }
    .marketing-page h2 { font-size: 32px; }
    .marketing-page h3 { font-size: 22px; }
    .hero { padding: 88px 0 82px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; margin: 0 auto; text-align: center; }
    .hero-copy .hero-lede, .hero-copy .hero-support { margin-left: auto !important; margin-right: auto !important; }
    .hero-actions { justify-content: center; }
    .hero-art { max-width: 620px; margin: 20px auto 0; }
    .proof-grid { grid-template-columns: 1fr 1fr; }
    .proof-grid > div { padding: 18px 24px; border-bottom: 1px solid var(--line); }
    .proof-grid > div:nth-child(2) { border-right: none; }
    .proof-grid > div:nth-child(3), .proof-grid > div:nth-child(4) { border-bottom: none; }
    .proof-grid > div:nth-child(3) { padding-left: 0; }
    .split-overview, .ai-grid, .transcreation-grid, .seo-grid, .workflow-connect-grid, .teams-grid, .faq-layout { grid-template-columns: 1fr; gap: 44px; }
    .sticky-copy, .ai-copy, .brand-copy, .transcreation-copy, .context-copy, .seo-copy, .workflow-connect-copy, .teams-copy { max-width: 800px; margin-left: auto; margin-right: auto; }
    .sticky-copy { text-align: center; }
    .sticky-copy .eyebrow { text-align: center; }
    .ai-copy .eyebrow, .ai-copy h2,
    .brand-copy .eyebrow, .brand-copy h2,
    .transcreation-copy .eyebrow, .transcreation-copy h2,
    .context-copy .eyebrow, .context-copy h2,
    .seo-copy .eyebrow, .seo-copy h2,
    .workflow-connect-copy .eyebrow, .workflow-connect-copy h2,
    .teams-copy .eyebrow, .teams-copy h2 { text-align: center; }
    .ai-copy p, .brand-copy p, .transcreation-copy p, .context-copy p, .seo-copy p, .workflow-connect-copy p, .teams-copy p { text-align: left; }
    .campaign-layout { grid-template-columns: 1fr; gap: 40px; }
    .campaign-map { width: 100%; max-width: 620px; }
    .channel-list { display: grid; grid-template-columns: 1fr 1fr; }
    .channel-row:nth-child(odd) { padding-right: 20px; border-right: 1px solid #DADBE0; }
    .channel-row:nth-child(even) { padding-left: 20px; }
    .workflow-models { grid-template-columns: 1fr; }
    .workflow-model { border-right: none !important; padding: 28px 0 !important; }
    .brand-grid { grid-template-columns: 1fr; gap: 38px; }
    .brand-visual { max-width: 760px; width: 100%; margin: 0 auto; }
    .brand-list { grid-column: auto; }
    .context-grid { grid-template-columns: 1fr; gap: 40px; }
    .context-ui { max-width: 780px; width: 100%; margin: 0 auto; }
    .qa-grid { grid-column: auto; }
    .launch-row { grid-template-columns: 64px 250px 1fr; gap: 22px; }
    .production-grid { grid-template-columns: 1fr; }
    .production-feature { min-height: 0; }
    .industry-grid { grid-template-columns: 1fr 1fr; }
    .industry-item, .industry-item:nth-child(3n+2), .industry-item:nth-child(3n+3) { padding: 27px 22px; border-right: 1px solid #DADBE0; border-bottom: 1px solid #DADBE0; }
    .industry-item:nth-child(odd) { padding-left: 0; }
    .industry-item:nth-child(even) { border-right: none; padding-right: 0; }
    .industry-item:nth-last-child(-n+3) { border-bottom: 1px solid #DADBE0; }
    .industry-item:nth-last-child(-n+2) { border-bottom: none; }
    .faq-title { position: static; text-align: center; max-width: 720px; margin: 0 auto; }
    .faq-title .eyebrow { text-align: center; }
    .final-cta-inner { grid-template-columns: 1fr; text-align: center; }
    .final-cta p { margin-left: auto; margin-right: auto; }
    .final-actions { width: min(100%, 360px); margin: 0 auto; }
  }

  @media (max-width: 720px) {
    .section { padding: 68px 0; }
    .container { padding-left: 20px; padding-right: 20px; }
    .marketing-page h1 { font-size: 38px; }
    .marketing-page h2 { font-size: 30px; }
    .marketing-page h3 { font-size: 20px; }
    .hero { padding: 72px 0 64px; }
    .hero-lede { font-size: 18px !important; }
    .hero-actions { flex-direction: column; }
    .hero-actions .btn { width: 100%; min-height: 50px; }
    .hero-art { margin-top: 8px; }
    .proof-grid { grid-template-columns: 1fr; padding-top: 0; padding-bottom: 0; }
    .proof-grid > div, .proof-grid > div:first-child, .proof-grid > div:nth-child(3) { padding: 18px 0; border-right: none; border-bottom: 1px solid var(--line); }
    .proof-grid > div:last-child { border-bottom: none; }
    .section-heading { margin-bottom: 38px; }
    .section-heading.centered-heading, .sticky-copy, .faq-title { text-align: center; }
    .ai-copy .eyebrow, .ai-copy h2, .brand-copy .eyebrow, .brand-copy h2, .transcreation-copy .eyebrow, .transcreation-copy h2, .context-copy .eyebrow, .context-copy h2, .seo-copy .eyebrow, .seo-copy h2, .workflow-connect-copy .eyebrow, .workflow-connect-copy h2, .teams-copy .eyebrow, .teams-copy h2 { text-align: center; }
    .ai-copy p, .brand-copy p, .transcreation-copy p, .context-copy p, .seo-copy p, .workflow-connect-copy p, .teams-copy p { text-align: left; }
    .section-heading .section-intro { font-size: 17px; }
    .overview-copy, .channel-row p, .content-group p, .workflow-model p, .brand-row p, .qa-item p, .industry-item p, .related-row p, .faq-answer p { text-align: left; }
    .campaign-map { height: auto; width: 100%; max-width: 620px; margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
    .campaign-core { position: static; transform: none; grid-column: 1 / -1; width: 100%; height: auto; min-height: 118px; }
    .network-node { position: static; width: 100%; min-height: 58px; padding: 8px 4px; }
    .map-lines { display: none; }
    .channel-list { grid-template-columns: 1fr; }
    .channel-row:nth-child(odd), .channel-row:nth-child(even) { padding: 20px 0; border-right: none; }
    .content-groups { grid-template-columns: 1fr; }
    .content-group, .content-group:nth-child(odd), .content-group:nth-child(even) { padding: 24px 0; border-right: none; }
    .center-note { text-align: left; font-size: 17px !important; }
    .ai-process-line { left: 20px; }
    .brand-visual { grid-template-columns: 1fr; gap: 18px; padding: 24px; }
    .brand-flow { flex-direction: row; justify-content: center; gap: 22px; height: 34px; }
    .brand-flow span { width: 1px; height: 34px; }
    .brand-flow span::after { top: auto; bottom: -1px; right: -3px; border-left: 3.5px solid transparent; border-right: 3.5px solid transparent; border-top: 6px solid #BFC1C6; border-bottom: none; }
    .brand-outputs { grid-template-columns: 1fr 1fr; }
    .brand-list { grid-template-columns: 1fr; border-top: 1px solid #DADBE0; }
    .brand-row, .brand-row:first-child, .brand-row:nth-child(4), .brand-row:nth-child(5) { padding: 22px 0; border-right: none; border-bottom: 1px solid #DADBE0; display: grid; grid-template-columns: 34px 1fr; gap: 14px; }
    .brand-row:last-child { border-bottom: none; }
    .brand-row > span { margin: 2px 0 0; }
    .transcreation-visual { padding: 36px 28px; min-height: 330px; }
    .creative-copy strong { font-size: 22px; }
    .launch-row { grid-template-columns: 50px 1fr; align-items: start; gap: 14px; padding: 22px 0; }
    .launch-title { padding-top: 1px; }
    .launch-row > p { grid-column: 2; }
    .ui-body { grid-template-columns: 1fr; }
    .ui-preview { min-height: 430px; }
    .preview-art { left: 50%; right: auto; bottom: 28px; width: 220px; height: 190px; transform: translateX(-50%); }
    .preview-art-card { padding: 15px; }
    .preview-art-symbol { width: 36px; height: 36px; margin-top: 12px; }
    .ui-review { border-top: 1px solid #E5E6E8; }
    .qa-grid { grid-template-columns: 1fr; }
    .qa-item, .qa-item:nth-child(3), .qa-item:nth-child(6), .qa-item:nth-child(4), .qa-item:nth-child(5) { padding: 20px 0; border-right: none; border-top: none; border-bottom: 1px solid #DADBE0; margin-top: 0; }
    .qa-item:last-child { border-bottom: none; }
    .seo-visual { min-height: 390px; padding: 28px 20px; }
    .workflow-connect-list > div { grid-template-columns: 42px 1fr; gap: 14px; }
    .workflow-connect-list h3 { padding-top: 7px; }
    .workflow-connect-list p { grid-column: 2; }
    .production-feature { padding: 30px 24px; border-radius: 24px; }
    .production-feature h2 { font-size: 28px; }
    .industry-grid { grid-template-columns: 1fr; }
    .industry-item, .industry-item:nth-child(3n+2), .industry-item:nth-child(3n+3), .industry-item:nth-child(odd), .industry-item:nth-child(even), .industry-item:nth-last-child(-n+2) { padding: 22px 0; border-right: none; border-bottom: 1px solid #DADBE0; }
    .industry-item:last-child { border-bottom: none; }
    .teams-rows > div { grid-template-columns: 28px 1fr; gap: 10px 14px; }
    .teams-rows small { grid-column: 2; }
    .teams-panel-head { align-items: flex-start; flex-direction: column; gap: 6px; }
    .related-row { grid-template-columns: 1fr; gap: 10px; }
    .related-arrow { width: 40px; height: 40px; }
    .faq-panel { padding: 0 18px; }
    .faq-item summary { min-height: 68px; gap: 14px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding: 66px 0; }
  }

  @media (max-width: 390px) {
    .hero-copy h1 { letter-spacing: -.035em; }
    .campaign-map { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .brand-outputs { grid-template-columns: 1fr; }
    .ui-topbar { grid-template-columns: 1fr auto; }
    .ui-topbar > div { display: none; }
    .ui-topbar small { justify-self: start; }
    .preview-title { font-size: 25px; max-width: 230px; }
    .preview-art { left: 50%; right: auto; bottom: 24px; width: 205px; height: 176px; transform: translateX(-50%); }
    .seo-visual { padding: 24px 16px; }
    .production-feature { padding: 28px 20px; }
  }

  @media (max-width: 320px) {
    .marketing-page h1 { font-size: 36px; }
    .marketing-page h2 { font-size: 29px; }
    .container { padding-left: 20px; padding-right: 20px; }
    .campaign-map { grid-template-columns: 1fr; }
    .preview-art { left: 50%; right: auto; bottom: 22px; width: 188px; height: 162px; transform: translateX(-50%); }
    .ui-topbar { height: auto; min-height: 78px; grid-template-columns: 1fr; gap: 7px; padding: 12px 14px; }
    .ui-topbar > b { justify-self: start; }
    .transcreation-visual { padding: 30px 20px; }
    .creative-copy strong { font-size: 20px; }
    .final-actions { min-width: 0; }
  }
`;

export default MarketingTranslationServices56;
