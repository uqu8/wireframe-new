import React from "react";

const Arrow = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" width="18" height="18" fill="none">
    <path d="M4 10h11M11 6l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name }) => {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    content: <><path {...common} d="M7 4.5h8l3 3V20H7z"/><path {...common} d="M15 4.5V8h3M10 12h5M10 15.5h5"/></>,
    experience: <><rect {...common} x="4" y="5" width="16" height="14" rx="2.5"/><path {...common} d="M4 9h16M8 15l2.5-2.5L13 15l3-4"/></>,
    technology: <><path {...common} d="M12 3.5v4M12 16.5v4M3.5 12h4M16.5 12h4"/><circle {...common} cx="12" cy="12" r="4.5"/><path {...common} d="M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"/></>,
    operations: <><path {...common} d="M5 7h14M5 12h14M5 17h14"/><circle cx="8" cy="7" r="1.7" fill="currentColor"/><circle cx="15" cy="12" r="1.7" fill="currentColor"/><circle cx="10" cy="17" r="1.7" fill="currentColor"/></>,
    web: <><rect {...common} x="3.5" y="5" width="17" height="14" rx="2.5"/><path {...common} d="M3.5 9h17M7 7h.01M10 7h.01"/></>,
    software: <><rect {...common} x="4" y="4" width="16" height="16" rx="3"/><path {...common} d="M8 9l-2 3 2 3M16 9l2 3-2 3M13.5 8l-3 8"/></>,
    app: <><rect {...common} x="7" y="2.5" width="10" height="19" rx="2.5"/><path {...common} d="M10 5h4M11 18.5h2"/></>,
    game: <><path {...common} d="M7.5 10.5l-3 1.2-1.3 5.8c-.5 2.2 2.1 3.7 3.7 2.1l2.6-2.6h5l2.6 2.6c1.6 1.6 4.2.1 3.7-2.1l-1.3-5.8-3-1.2z"/><path {...common} d="M8 13v4M6 15h4M15.5 14h.01M18 16h.01"/></>,
    learn: <><path {...common} d="M3.5 8.5L12 4l8.5 4.5L12 13z"/><path {...common} d="M6.5 10.2V15c2 2.1 4 3 5.5 3s3.5-.9 5.5-3v-4.8M20.5 8.5v6"/></>,
    media: <><rect {...common} x="3.5" y="5" width="17" height="14" rx="3"/><path {...common} d="M10 9l5 3-5 3z"/></>,
    tm: <><path {...common} d="M5 6h10a4 4 0 010 8H9"/><path {...common} d="M9 18H6a3 3 0 010-6h9"/><path {...common} d="M9 10L6 12l3 2"/></>,
    term: <><path {...common} d="M5 5h14v14H5z"/><path {...common} d="M8 9h8M8 13h5M8 16h7"/></>,
    automation: <><circle {...common} cx="12" cy="12" r="3"/><path {...common} d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2M6 6l1.5 1.5M16.5 16.5L18 18M18 6l-1.5 1.5M7.5 16.5L6 18"/></>,
    qa: <><path {...common} d="M12 3l7 3v5c0 4.8-2.7 7.8-7 10-4.3-2.2-7-5.2-7-10V6z"/><path {...common} d="M8.5 12l2.2 2.2 4.8-5"/></>,
    visibility: <><path {...common} d="M3 12s3.5-5.5 9-5.5S21 12 21 12s-3.5 5.5-9 5.5S3 12 3 12z"/><circle {...common} cx="12" cy="12" r="2.5"/></>,
    security: <><rect {...common} x="6" y="10" width="12" height="10" rx="2"/><path {...common} d="M8.5 10V7a3.5 3.5 0 017 0v3M12 14v2"/></>,
    language: <><path {...common} d="M4 6h9M8.5 4v2c0 5-2 8-5 10M5.5 11c1.8 2 3.8 3.5 6.5 4.5M14 18l3.5-9 3.5 9M15.2 15h4.6"/></>,
    industry: <><path {...common} d="M4 19V9l6 3V7l6 3V5l4 2v12z"/><path {...common} d="M7 16h2M12 16h2M17 16h1"/></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24">{paths[name] || paths.content}</svg>;
};

const EditorialLink = ({ href, children, light = false }) => (
  <a className={`editorial-link ${light ? "light" : ""}`} href={href}>
    <span>{children}</span><Arrow />
  </a>
);

const Eyebrow = ({ children, dark = false }) => <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>;

const HeadingGroup = ({ eyebrow, title, intro, dark = false, centered = true }) => (
  <div className={`heading-group ${centered ? "centered" : ""} ${dark ? "on-dark" : ""}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const HeroArt = () => (
  <div className="hero-art" aria-hidden="true">
    <svg viewBox="0 0 640 500" role="presentation">
      <defs>
        <linearGradient id="heroFade" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#f8f2f5" />
        </linearGradient>
      </defs>
      <rect x="82" y="54" width="474" height="342" rx="32" fill="url(#heroFade)" stroke="#D8D8DE" strokeWidth="2"/>
      <rect x="109" y="82" width="420" height="45" rx="11" fill="#fff" stroke="#D8D8DE"/>
      <circle cx="132" cy="104" r="5" fill="#D8D8DE"/><circle cx="150" cy="104" r="5" fill="#D8D8DE"/><circle cx="168" cy="104" r="5" fill="#D8D8DE"/>
      <rect x="112" y="149" width="247" height="214" rx="18" fill="#fff" stroke="#D8D8DE"/>
      <rect x="383" y="149" width="146" height="100" rx="18" fill="#fff" stroke="#D8D8DE"/>
      <rect x="383" y="263" width="146" height="100" rx="18" fill="#fff" stroke="#D8D8DE"/>
      <rect x="136" y="175" width="136" height="14" rx="7" fill="#253047" opacity=".88"/>
      <rect x="136" y="204" width="190" height="8" rx="4" fill="#AEB2BC"/>
      <rect x="136" y="221" width="170" height="8" rx="4" fill="#C6C8CF"/>
      <rect x="136" y="248" width="70" height="28" rx="14" fill="#C11D63"/>
      <rect x="136" y="302" width="195" height="9" rx="4.5" fill="#C6C8CF"/>
      <rect x="136" y="320" width="152" height="9" rx="4.5" fill="#D6D8DE"/>
      <rect x="405" y="171" width="56" height="8" rx="4" fill="#253047"/>
      <rect x="405" y="189" width="97" height="7" rx="3.5" fill="#C6C8CF"/>
      <rect x="405" y="207" width="78" height="7" rx="3.5" fill="#D6D8DE"/>
      <rect x="405" y="285" width="64" height="8" rx="4" fill="#253047"/>
      <rect x="405" y="303" width="98" height="7" rx="3.5" fill="#C6C8CF"/>
      <rect x="405" y="321" width="73" height="7" rx="3.5" fill="#D6D8DE"/>
      <path d="M359 255h24" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
      <circle cx="370" cy="255" r="5" fill="#C11D63"/>
      <g transform="translate(39 190)">
        <rect width="102" height="71" rx="18" fill="#fff" stroke="#D8D8DE"/>
        <text x="18" y="31" fontSize="16" fontFamily="Arial, sans-serif" fill="#252C3A">EN</text>
        <path d="M46 35h25" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round"/><path d="M67 30l5 5-5 5" fill="none" stroke="#C11D63" strokeWidth="2"/>
        <text x="18" y="54" fontSize="15" fontFamily="Arial, sans-serif" fill="#6D7280">Source</text>
      </g>
      <g transform="translate(499 390)">
        <rect width="103" height="73" rx="18" fill="#fff" stroke="#D8D8DE"/>
        <text x="17" y="28" fontSize="15" fontFamily="Arial, sans-serif" fill="#252C3A">DE · JA · AR</text>
        <text x="17" y="53" fontSize="15" fontFamily="Arial, sans-serif" fill="#6D7280">Localized</text>
      </g>
      <path d="M139 225C178 134 271 87 367 99" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 8" fill="none" opacity=".5"/>
      <path d="M495 391C500 357 513 338 538 326" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 8" fill="none" opacity=".5"/>
      <circle cx="367" cy="99" r="5" fill="#C11D63"/>
      <circle cx="538" cy="326" r="5" fill="#C11D63"/>
    </svg>
  </div>
);

const ContinuousArt = () => (
  <div className="system-visual" aria-hidden="true">
    <div className="source-node large-node">
      <span className="node-label">SOURCE SYSTEMS</span>
      <strong>CMS · App · Repository</strong>
      <span>New and changed content</span>
    </div>
    <div className="flow-arrow">→</div>
    <div className="engine-node">
      <span className="node-label">LOCALIZATION WORKFLOW</span>
      <div className="engine-row"><span>Translation Memory</span><b>Reuse</b></div>
      <div className="engine-row"><span>Terminology</span><b>Control</b></div>
      <div className="engine-row"><span>AI + Human</span><b>Process</b></div>
      <div className="engine-row"><span>Review + QA</span><b>Validate</b></div>
    </div>
    <div className="flow-arrow">→</div>
    <div className="markets-node">
      <span className="node-label">GLOBAL RELEASE</span>
      <div className="locale-chip">de-DE</div>
      <div className="locale-chip">ja-JP</div>
      <div className="locale-chip">fr-CA</div>
      <div className="locale-chip">ar-SA</div>
    </div>
  </div>
);

const TestingArt = () => (
  <div className="testing-visual" aria-hidden="true">
    <div className="device desktop-device">
      <div className="device-bar"><span/><span/><span/></div>
      <div className="device-copy"><b>Checkout</b><i/><i/><span className="mock-button">Continuer</span></div>
      <div className="qa-tag ok">Layout Passed</div>
    </div>
    <div className="device mobile-device">
      <div className="mobile-notch"/>
      <div className="device-copy rtl"><b>إتمام الطلب</b><i/><i/><span className="mock-button">متابعة</span></div>
      <div className="qa-tag review">RTL Review</div>
    </div>
    <div className="qa-panel">
      <span className="node-label">IN-CONTEXT QA</span>
      <div><b>Linguistic</b><span>Validated</span></div>
      <div><b>Locale</b><span>Validated</span></div>
      <div><b>Responsive</b><span>In Review</span></div>
      <div><b>Functional</b><span>Validated</span></div>
    </div>
  </div>
);

const I18nArt = () => (
  <div className="i18n-visual" aria-hidden="true">
    <div className="code-panel">
      <div className="code-header"><span/><span/><span/></div>
      <pre>{`key: checkout.button\nsource: "Continue"\nlocale: {locale}\nformat: {currency}`}</pre>
    </div>
    <div className="i18n-line"><span>Internationalized resource</span><b>→</b></div>
    <div className="locale-grid">
      <div><b>EN</b><span>Continue</span></div>
      <div><b>DE</b><span>Weiter</span></div>
      <div><b>JA</b><span>続ける</span></div>
      <div className="rtl-card"><b>AR</b><span>متابعة</span></div>
    </div>
  </div>
);

const services = [
  { icon: "web", title: "Website Localization", text: "Build multilingual websites that are ready for customers, search engines, regional teams, and continuous content growth.", details: "Corporate sites, ecommerce, portals, help centers, landing pages, metadata, forms, multimedia, multilingual SEO, CMS workflows, review, testing, and ongoing updates.", href: "https://www.stepes.com/website-translation-services/" },
  { icon: "software", title: "Software Localization", text: "Make software products understandable, usable, and release-ready across languages and locales.", details: "SaaS, enterprise applications, embedded systems, UI strings, resource files, localization engineering, locale adaptation, build validation, and testing.", href: "https://www.stepes.com/software-localization-services/" },
  { icon: "app", title: "App Localization", text: "Create mobile experiences that feel designed for each market rather than translated after development.", details: "iOS, Android, onboarding, transactions, subscriptions, notifications, app-store content, resource engineering, in-context review, and device testing.", href: "https://www.stepes.com/app-localization-services/" },
  { icon: "game", title: "Game Localization", text: "Deliver engaging player experiences across languages, cultures, platforms, and ongoing releases.", details: "UI, narrative, dialogue, tutorials, items, achievements, subtitles, downloadable content, player communications, creative adaptation, and localization QA.", href: "https://www.stepes.com/gaming-translation-services/" },
  { icon: "learn", title: "eLearning Localization", text: "Give global learners access to complete, coordinated learning experiences.", details: "Courses, LMS content, assessments, narration, subtitles, video, graphics, interactive modules, course engineering, and functional QA.", href: "https://www.stepes.com/elearning-training-translation-services/" },
  { icon: "media", title: "Multimedia Localization", text: "Adapt the language audiences both hear and see across multilingual media.", details: "Video, subtitles, captions, voice-over, dubbing, transcription, on-screen text, graphics, animation, audio, timing, and technical delivery.", href: "https://www.stepes.com/multimedia-translation-services/" },
];

const lifecycle = [
  ["Connect", "Bring content into the localization workflow through supported files, content platforms, repositories, APIs, website technologies, or enterprise systems."],
  ["Prepare", "Analyze scope, locale requirements, content, internationalization considerations, translation memory, terminology, context, roles, and review requirements."],
  ["Localize", "Apply the right combination of AI translation, translation memory, professional linguists, post-editors, subject-matter specialists, and localization engineers."],
  ["Review", "Validate accuracy, fluency, terminology, tone, completeness, technical integrity, brand language, and market appropriateness."],
  ["Test", "Evaluate localized experiences in context across languages, devices, platforms, and representative user journeys."],
  ["Launch", "Deliver production-ready localized resources or return approved content into the appropriate publishing and release process."],
  ["Keep Current", "Preserve language assets, context, approvals, and review decisions so new and modified content can move through a repeatable workflow."],
];

const aiWorkflows = [
  ["AI Translation", "Accelerate large volumes of suitable, frequently updated, or time-sensitive content when quality requirements and content risk support greater automation."],
  ["AI + Human Post-Editing", "Combine machine speed with professional linguistic validation for accuracy, fluency, terminology, context, and agreed quality requirements."],
  ["Professional Human Translation", "Use qualified native-language linguists when nuance, customer experience, or communication quality requires stronger human judgment."],
  ["Subject-Matter Translation", "Match technical, legal, financial, medical, scientific, engineering, and other specialized content with professionals who understand its terminology and domain."],
  ["Transcreation", "Adapt campaigns, headlines, taglines, product positioning, and other creative content around intended impact, tone, emotion, and persuasive effect."],
];

const continuousPoints = [
  ["Connect Content at the Source", "Reduce repeated file preparation by connecting localization with the systems where content is created and managed."],
  ["Route New and Changed Content", "Focus localization effort on what actually changed while identifying reusable approved content and new content that requires translation."],
  ["Reuse Approved Language", "Preserve translation memory, terminology, style guidance, and review decisions across products, channels, and markets."],
  ["Automate Repeatable Steps", "Support content intake, analysis, assignment, translation-memory matching, notifications, review routing, status tracking, and delivery."],
  ["Keep Teams Aligned", "Connect localization, product, engineering, marketing, content, legal, regional, and other stakeholders through clearer workflow ownership."],
  ["Support Faster Global Releases", "Move localization alongside content development instead of treating it as a separate downstream phase."],
];

const testing = [
  ["Linguistic QA", "Accuracy, completeness, fluency, grammar, terminology, tone, consistency, contextual meaning, and unintended source-language content."],
  ["Visual QA", "Text expansion, truncation, overlapping elements, incorrect line breaks, alignment, unsupported fonts, layout imbalances, and other display issues."],
  ["Functional QA", "Navigation, forms, search, links, inputs, validation, account flows, transactions, notifications, dynamic content, and interactive functionality."],
  ["Locale QA", "Dates, times, currencies, numbers, measurements, names, addresses, telephone formats, sorting, and other locale-sensitive behavior."],
  ["RTL & Complex-Script QA", "Directionality, mirrored layouts, mixed-language content, alignment, rendering, input behavior, and readability."],
  ["Device & Digital Experience QA", "Browsers, operating systems, screen sizes, software environments, localized metadata, accessibility, multimedia, downloads, routing, and integrations where in scope."],
];

const enterprise = [
  ["tm", "Translation Memory", "Turn previously approved translation work into a reusable enterprise asset for consistency and faster recurring localization.", "https://www.stepes.com/translation-memory/"],
  ["term", "Terminology Management", "Control product names, technical terms, branded language, abbreviations, regulated terminology, and other high-value vocabulary.", "https://www.stepes.com/terminology-management/"],
  ["automation", "Workflow Automation", "Route multilingual content through repeatable processes based on content type, languages, teams, quality requirements, and review stages.", "https://www.stepes.com/translation-workflow-automation/"],
  ["qa", "Quality Management", "Combine language assets, automated checks, professional review, contextual validation, specialist expertise, customer review, and localization testing.", "https://www.stepes.com/translation-quality-assurance/"],
  ["visibility", "Centralized Visibility", "Give localization stakeholders clearer visibility into multilingual projects, languages, content, workflow status, reviews, and deliverables.", "https://www.stepes.com/enterprise-translation-management/"],
  ["security", "Security & Governance", "Manage enterprise content through controlled workflows designed around appropriate access, roles, content handling, review responsibilities, and organizational requirements.", "https://www.stepes.com/resources/security-and-compliance/"],
];

const industries = [
  ["Life Sciences & Healthcare", "Multilingual digital experiences, applications, training, patient and professional content, and regulated materials where terminology, accuracy, review discipline, and subject expertise matter."],
  ["Technology & Software", "SaaS platforms, applications, product interfaces, developer content, help systems, documentation, onboarding, and continuous product releases."],
  ["Manufacturing & Engineering", "Equipment interfaces, connected products, technical documentation, learning content, safety information, product support, and global operations."],
  ["Automotive & Transportation", "Vehicle and mobility experiences, embedded interfaces, technical systems, service content, customer communications, and supporting documentation."],
  ["Financial Services", "Digital financial experiences, customer communications, applications, disclosures, product information, and other content requiring precise language and controlled terminology."],
  ["Retail & Ecommerce", "Product information, merchandising, websites, apps, promotions, checkout journeys, customer support, and continuously changing ecommerce content."],
  ["Education & eLearning", "Courseware, learning platforms, assessments, training, multimedia, student content, and educational experiences."],
  ["Media & Entertainment", "Subtitles, voice content, streaming experiences, games, marketing, metadata, apps, digital platforms, and ongoing global content releases."],
];

const guides = [
  ["Localization Guides", "Understand the complete localization lifecycle across content, experience, technology, quality, and multilingual operations.", "https://www.stepes.com/resources/localization-guides/"],
  ["Website Localization Guide", "Plan website content, technical implementation, review, multilingual SEO, testing, launch, and continuous updates.", "https://www.stepes.com/resources/localization-guides/how-to-translate-a-website/"],
  ["Software Localization Guide", "Prepare interfaces, resources, terminology, engineering, QA, release workflows, and recurring software updates for international markets.", "https://www.stepes.com/resources/localization-guides/software-saas-localization-guide/"],
  ["Mobile App Localization Guide", "Prepare application architecture, resource files, context, terminology, testing, and release workflows for multilingual mobile experiences.", "https://www.stepes.com/resources/localization-guides/how-to-prepare-an-app-for-localization/"],
  ["Website Localization Testing Checklist", "Validate language, layout, responsive behavior, functionality, locale conventions, RTL support, accessibility, search visibility, and market readiness before launch.", "https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/"],
];

const faqs = [
  ["What are localization services?", "Localization services adapt content, products, and digital experiences for a specific language, locale, and market. The process typically includes translation but can also involve terminology, cultural and regional adaptation, interface considerations, localization engineering, locale formats, multimedia, in-context review, quality assurance, testing, and technical integration. For continuously updated products and content, localization can also include workflow automation, APIs, translation memory, terminology management, and recurring release support."],
  ["What is the difference between translation and localization?", "Translation primarily transfers meaning from one language into another. Localization goes further by adapting the complete experience for a particular audience and market. Depending on the content, this can include language, user-interface layouts, imagery, navigation, dates, currencies, measurements, regional conventions, multimedia, technical resources, search behavior, accessibility, and customer journeys. A translated product communicates in another language. A well-localized product is designed to work naturally in that market."],
  ["What types of content can Stepes localize?", "Stepes supports localization across websites, ecommerce experiences, software, SaaS products, enterprise applications, mobile apps, games, eLearning, multimedia, help centers, knowledge bases, digital product content, user interfaces, customer communications, and other multilingual experiences. We also support related content such as documentation, app-store content, notifications, subtitles, voice-over, product information, marketing assets, training, and support resources."],
  ["What is continuous localization?", "Continuous localization integrates translation and review into recurring content or product workflows instead of treating localization as a separate phase after source content is complete. New and changed content can be identified and moved through translation, review, QA, and delivery as websites, software, applications, documentation, or other content evolves. This approach is especially valuable for agile software development, frequently updated websites, ecommerce catalogs, support content, mobile applications, and other digital experiences with ongoing releases."],
  ["Does Stepes use AI for localization?", "Yes. Stepes supports AI-enabled localization workflows and can combine AI translation, translation memory, terminology, automated quality processes, professional post-editing, human translation, subject-matter review, and transcreation based on project requirements. The appropriate model depends on factors such as content type, audience, volume, turnaround, quality expectations, visibility, and risk."],
  ["Does Stepes provide localization testing?", "Yes. Localization testing can be configured according to the product, platform, languages, available test environment, and release requirements. Testing may include linguistic QA, visual review, functional testing, locale validation, right-to-left testing, device and browser coverage, text expansion, truncation, font rendering, navigation, forms, accessibility considerations, metadata, integrations, and other elements of the localized experience."],
  ["Can Stepes connect localization with our CMS, application, or content systems?", "Yes. Stepes supports multiple localization integration models, including APIs, website technologies, structured content, localization resource files, repositories, and enterprise content workflows. The right implementation depends on where your content lives, how frequently it changes, who owns publishing, what review stages are required, and how multilingual content needs to return to production."],
  ["What is internationalization, and when is it needed?", "Internationalization—often abbreviated as i18n—is the process of designing or preparing a digital product so it can support multiple languages and locales without requiring substantial engineering changes for every market. It can include externalizing translatable strings, supporting Unicode, planning for text expansion, handling locale-specific formats, enabling right-to-left layouts, supporting plural rules, and separating language resources from application code."],
  ["How many languages does Stepes support?", "Stepes supports professional translation and localization in more than 100 languages and regional variants. Coverage includes major European, Asian, Middle Eastern, African, and American languages as well as locale-specific combinations such as Brazilian Portuguese, Canadian French, Latin American Spanish, Simplified Chinese, and Traditional Chinese."],
  ["How do we choose the right localization workflow?", "The best workflow depends on your content, audience, technology, languages, release cadence, quality requirements, and business risk. A frequently updated help center may benefit from a highly automated AI-assisted workflow, while an important product interface may require professional linguistic review and in-context validation. Regulated or technical content may require subject-matter specialists, while global campaign messaging may benefit from transcreation."],
];

export default function StepesLocalizationServices56Wireframe() {
  return (
    <div className="stepes-localization-page">
      <style>{styles}</style>

      <main>
        <section className="hero section" id="top">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <Eyebrow>ENTERPRISE LOCALIZATION SERVICES</Eyebrow>
              <h1>Localization Services for Global Digital Experiences</h1>
              <p className="hero-lede">Stepes provides professional localization services for websites, software, mobile apps, games, eLearning, multimedia, and continuously changing digital content. We combine AI-powered translation, professional linguists, localization engineering, in-context review, testing, and connected enterprise workflows to help your digital experiences work naturally across languages and markets.</p>
              <div className="hero-actions">
                <a className="btn primary" href="https://www.stepes.com/quote/">Get a Localization Quote <Arrow /></a>
                <a className="btn secondary" href="https://www.stepes.com/localization-services/#localization-services">Explore Localization Services <Arrow /></a>
              </div>
            </div>
            <HeroArt />
          </div>
        </section>

        <section className="proof-band" aria-label="Localization service highlights">
          <div className="shell proof-grid">
            <div><strong>100+ Languages</strong><span>Professional coverage for major global markets and regional variants.</span></div>
            <div><strong>AI + Human Expertise</strong><span>Flexible workflows that combine automation with professional linguistic judgment.</span></div>
            <div><strong>Digital + Technical Localization</strong><span>Content, interfaces, resource files, multimedia, applications, and complete digital experiences.</span></div>
            <div><strong>Continuous Workflows</strong><span>Keep multilingual content aligned as websites, products, and customer experiences change.</span></div>
          </div>
        </section>

        <section className="section light-section">
          <div className="shell">
            <HeadingGroup
              eyebrow="BEYOND LANGUAGE"
              title="Localization Goes Beyond Translation"
              intro="Translation changes content from one language into another. Localization adapts the complete experience for the language, market, technology, and expectations of the people who use it."
            />
            <p className="centered-support">A website can be accurately translated but still contain search terms customers never use. A mobile app can have correct interface strings that no longer fit its buttons. A software product can support multiple languages while displaying dates, currencies, addresses, or plural forms incorrectly. Professional localization brings language, user experience, technology, and operations into one connected process so the final experience feels intentional in every market.</p>
            <div className="four-concepts">
              <article><div className="icon-box"><Icon name="content" /></div><h3>Content</h3><p>Localize what customers, employees, partners, and users read, hear, watch, and interact with—from website copy and UI strings to product information, documentation, video, audio, graphics, learning materials, and notifications.</p></article>
              <article><div className="icon-box"><Icon name="experience" /></div><h3>Experience</h3><p>Adapt navigation, layouts, imagery, calls to action, forms, user journeys, writing direction, visual hierarchy, and regional conventions so the experience feels natural locally.</p></article>
              <article><div className="icon-box"><Icon name="technology" /></div><h3>Technology</h3><p>Prepare the systems that create, store, deliver, and update multilingual content across CMS platforms, repositories, resource files, APIs, structured content, applications, and digital platforms.</p></article>
              <article><div className="icon-box"><Icon name="operations" /></div><h3>Operations</h3><p>Coordinate terminology, translation memory, translation and review, quality assurance, stakeholder approvals, localization testing, release management, and ongoing multilingual updates.</p></article>
            </div>
          </div>
        </section>

        <section className="section" id="localization-services">
          <div className="shell">
            <HeadingGroup
              title="Localize Every Digital Experience"
              intro="Your customers move between websites, applications, product interfaces, learning content, video, support resources, notifications, and other digital touchpoints. Stepes provides specialized localization services for each experience while helping organizations keep language, terminology, quality standards, and multilingual workflows connected."
            />
            <div className="service-grid">
              {services.map((s) => (
                <article className="service-card" key={s.title}>
                  <div className="service-top"><div className="icon-box"><Icon name={s.icon} /></div><h3>{s.title}</h3></div>
                  <p className="service-lead">{s.text}</p>
                  <p>{s.details}</p>
                  <EditorialLink href={s.href}>Explore {s.title}</EditorialLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section workflow-section">
          <div className="shell">
            <HeadingGroup
              eyebrow="END-TO-END WORKFLOW"
              title="One Connected Localization Lifecycle"
              intro="Successful localization is not a handoff between translation and launch. It is a connected lifecycle that begins with the source experience and continues through multilingual release and future updates."
            />
            <div className="workflow-line">
              {lifecycle.map(([title, text], i) => (
                <article className="workflow-step" key={title}>
                  <div className="step-number">{String(i + 1).padStart(2, "0")}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="support-strip">
              {['Translation Memory','Terminology Management','AI Translation','Professional Review','Localization QA','APIs & Integrations'].map(x => <span key={x}>{x}</span>)}
            </div>
          </div>
        </section>

        <section className="section dark-section">
          <div className="shell split-head-list">
            <div className="sticky-copy">
              <Eyebrow dark>AI + PROFESSIONAL EXPERTISE</Eyebrow>
              <h2>The Right Localization Workflow for Every Experience</h2>
              <p>Not every piece of content requires the same localization process. A high-volume knowledge base, product interface, regulated instruction, and global advertising campaign carry different risks and require different levels of human judgment.</p>
              <p>Stepes helps organizations select an appropriate workflow based on content type, audience, visibility, risk, volume, turnaround, brand importance, and quality requirements.</p>
              <div className="risk-callout"><strong>Quality Based on Content Risk</strong><span>The objective is not to choose between AI and humans. It is to use each where it adds the greatest value.</span></div>
            </div>
            <div className="editorial-stack on-dark-stack">
              {aiWorkflows.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section continuous-section">
          <div className="shell continuous-grid">
            <div className="continuous-copy">
              <Eyebrow>CONTINUOUS LOCALIZATION</Eyebrow>
              <h2>Localization That Moves With Your Content</h2>
              <p className="section-lede">Digital content does not stand still. Product teams ship new features. Marketing teams launch campaigns. Websites publish new pages. Ecommerce catalogs change. Support teams update knowledge bases. Training programs add new modules. Apps release new versions.</p>
              <p>If localization only begins after each source update is finished, multilingual markets can quickly fall behind. Continuous localization brings translation, review, quality assurance, and multilingual delivery closer to the content lifecycle so localization can move alongside recurring releases and updates.</p>
              <div className="link-row"><EditorialLink href="https://www.stepes.com/continuous-translation/">Explore Continuous Translation</EditorialLink><EditorialLink href="https://www.stepes.com/developers/translation-api/">Explore the Stepes Translation API</EditorialLink></div>
            </div>
            <ContinuousArt />
          </div>
          <div className="shell continuous-points">
            {continuousPoints.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section soft-dark-section">
          <div className="shell testing-grid">
            <TestingArt />
            <div className="testing-copy">
              <Eyebrow dark>LOCALIZATION QA</Eyebrow>
              <h2>Launch the Experience, Not Just the Translation</h2>
              <p className="section-lede">A translation can be linguistically accurate and still fail in the final product. Text may be truncated. A form may reject locally formatted information. A right-to-left screen may display incorrectly. Search metadata may remain in the source language.</p>
              <p>Localization testing looks beyond individual translations to validate the complete experience in context. Stepes can tailor testing scope to your product, platform, languages, release risk, audience, and available test environment.</p>
              <EditorialLink light href="https://www.stepes.com/resources/localization-guides/website-localization-testing-checklist/">Explore Website Localization Testing</EditorialLink>
            </div>
          </div>
          <div className="shell testing-list">
            {testing.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section">
          <div className="shell i18n-grid">
            <div className="i18n-copy">
              <h2>Internationalize Once. Localize Efficiently Everywhere.</h2>
              <p className="section-lede">Localization adapts an experience for individual languages and markets. Internationalization prepares the underlying product or system to support those adaptations efficiently.</p>
              <p>For software, apps, websites, and other digital products, addressing internationalization early can reduce avoidable engineering work and localization defects later in the release process.</p>
              <EditorialLink href="https://www.stepes.com/software-internationalization-services/">Explore Internationalization Services</EditorialLink>
            </div>
            <I18nArt />
          </div>
          <div className="shell i18n-list">
            {[
              ["Separate Language From Code", "Externalize translatable content so teams can update language resources without modifying executable code for every locale."],
              ["Support Unicode and Global Scripts", "Prepare products to display the character sets and scripts required by target languages."],
              ["Design for Text Expansion", "Build interfaces that can accommodate differences in word length, line wrapping, character density, and reading direction."],
              ["Handle Plurals and Grammar Correctly", "Avoid source-language assumptions that prevent applications from supporting locale-specific plural rules and grammatical structures."],
              ["Support Right-to-Left Experiences", "Plan interface behavior, alignment, navigation, icons, mixed-direction strings, and layout changes for languages such as Arabic and Hebrew."],
              ["Localize Regional Formats", "Separate language from locale-sensitive elements such as dates, currencies, numbers, units, time formats, names, addresses, and sorting behavior."],
              ["Protect Flexible Resource Architecture", "Use localization-ready resource structures, stable keys, placeholders, variables, and content models that can move efficiently through multilingual workflows."],
            ].map(([title, text]) => <article key={title}><div><h3>{title}</h3><p>{text}</p></div></article>)}
          </div>
        </section>

        <section className="section language-section">
          <div className="shell language-grid">
            <div>
              <h2>Localize for 100+ Languages and Regional Markets</h2>
              <p className="section-lede">Global language strategy is about more than selecting a language name. The right localization program considers the exact audience and locale—whether you need Brazilian or European Portuguese, Canadian or European French, Latin American or European Spanish, Simplified or Traditional Chinese, or another market-specific language variant.</p>
              <p>Stepes supports professional localization across more than 100 languages and regional variants, with linguists selected according to language pair, locale, subject matter, content type, and communication goal.</p>
              <EditorialLink href="https://www.stepes.com/translation-languages/">View All Languages</EditorialLink>
            </div>
            <div className="language-cloud">
              {['Spanish','French','Portuguese','Chinese','German','Japanese','Korean','Italian','Dutch','Polish','Arabic','Turkish','Vietnamese','Thai','Indonesian','Hindi'].map(l => <span key={l}>{l}</span>)}
            </div>
          </div>
          <div className="shell locale-variants">
            <div><strong>Spanish</strong><span>European · Latin American · U.S.</span></div>
            <div><strong>French</strong><span>European · Canadian · Belgian</span></div>
            <div><strong>Portuguese</strong><span>Brazilian · European</span></div>
            <div><strong>Chinese</strong><span>Simplified · Traditional · Hong Kong</span></div>
          </div>
          <div className="shell"><p className="language-note">Stepes also supports right-to-left languages, CJK languages, complex scripts, and multilingual programs spanning many target markets at the same time.</p></div>
        </section>

        <section className="section enterprise-section">
          <div className="shell">
            <HeadingGroup
              eyebrow="ENTERPRISE OPERATIONS"
              title="Built for Enterprise Localization"
              intro="Localization becomes more complex as content volume, languages, stakeholders, technologies, and release frequency grow. Enterprise organizations need reusable language assets, controlled workflows, quality processes, program visibility, and a scalable operating model that can support multilingual content over time."
            />
            <div className="enterprise-matrix">
              {enterprise.map(([icon, title, text, href]) => (
                <article key={title}>
                  <div className="icon-box"><Icon name={icon} /></div>
                  <div><h3>{title}</h3><p>{text}</p>{href ? <EditorialLink href={href}>Explore {title}</EditorialLink> : null}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section industry-section">
          <div className="shell industry-layout">
            <div className="industry-intro">
              <Eyebrow>DOMAIN EXPERTISE</Eyebrow>
              <h2>Localization Expertise for Specialized Industries</h2>
              <p className="section-lede">Language that works for one industry may be inappropriate for another. Product terminology, regulatory expectations, customer journeys, review requirements, content risk, and market conventions all affect how localization should be managed.</p>
              <p>Stepes supports localization programs across regulated, technical, commercial, and customer-facing industries, matching workflows and linguistic resources to the subject matter and business context.</p>
              <EditorialLink href="https://www.stepes.com/industries/">Explore Industries</EditorialLink>
            </div>
            <div className="industry-rows">
              {industries.map(([title, text]) => <article key={title}><span className="industry-rule" aria-hidden="true"/><div><h3>{title}</h3><p>{text}</p></div></article>)}
            </div>
          </div>
        </section>

        <section className="section resources-section">
          <div className="shell">
            <HeadingGroup
              eyebrow="LOCALIZATION RESOURCES"
              title="Plan Better Global Experiences"
              intro="Strong localization programs begin before the first translation is assigned. The Stepes Localization Guides provide practical guidance for teams planning, building, launching, testing, and scaling multilingual digital experiences."
            />
            <div className="resource-grid">
              {guides.map(([title, text, href], i) => <article key={title} className={i === 0 ? "featured-resource" : ""}><span className="resource-type">{i === 0 ? "GUIDE DIRECTORY" : title.includes("Checklist") ? "PRACTICAL CHECKLIST" : "PRACTICAL GUIDE"}</span><h3>{title}</h3><p>{text}</p><EditorialLink href={href}>{i === 0 ? "Explore Localization Guides" : title.includes("Checklist") ? `View ${title}` : `Read ${title}`}</EditorialLink></article>)}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="shell faq-shell">
            <div className="faq-heading">
              <h2>Localization Services FAQs</h2>
              <p>Practical answers about localization scope, AI, continuous workflows, testing, integrations, internationalization, language coverage, and workflow design.</p>
            </div>
            <div className="faq-panel">
              {faqs.map(([q,a], i) => (
                <details key={q} open={i === 0}>
                  <summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary>
                  <div className="faq-answer"><p>{a}</p></div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta section">
          <div className="shell final-cta-inner">
            <div>
              <h2>Take Your Digital Experience Global</h2>
              <p>Whether you are localizing a website, software platform, mobile app, learning program, multimedia content, or an interconnected digital ecosystem, Stepes can build a localization workflow around your content, technology, languages, quality requirements, and global growth goals.</p>
              <p>Connect intelligent automation with professional linguistic expertise. Keep terminology and language assets consistent. Validate the complete localized experience. And build multilingual workflows that continue working as your content changes.</p>
            </div>
            <div className="cta-actions">
              <a className="btn primary light-primary" href="https://www.stepes.com/quote/">Get a Localization Quote <Arrow /></a>
              <a className="btn dark-secondary" href="https://www.stepes.com/contact-us/">Talk to a Localization Expert <Arrow /></a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-localization-page {
    --ink: #202532;
    --body: #4F5665;
    --muted: #747B89;
    --line: #E2E3E8;
    --surface: #F7F7F9;
    --surface-2: #FBF7F9;
    --magenta: #C11D63;
    --magenta-deep: #9F1D55;
    --burgundy: #7A1542;
    --dark: #181B23;
    --dark-2: #20242E;
    color: var(--ink);
    background: #fff;
    font-family: "Inter Tight", "Inter", Arial, sans-serif;
    font-size: 16px;
    line-height: 1.62;
    overflow-x: clip;
  }
  .stepes-localization-page a { color: inherit; text-decoration: none; }
  .stepes-localization-page h1, .stepes-localization-page h2, .stepes-localization-page h3 { margin: 0; color: var(--ink); font-weight: 600; letter-spacing: -0.025em; line-height: 1.08; }
  .stepes-localization-page h1 { font-size: 48px; }
  .stepes-localization-page h2 { font-size: 36px; }
  .stepes-localization-page h3 { font-size: 24px; }
  .stepes-localization-page p { margin: 0; color: var(--body); font-size: 16px; }
  .shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; }
  .section { padding-top: 96px; padding-bottom: 96px; }
  .eyebrow { color: #C11D63; font-size: 11px; line-height: 1.35; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 16px; }
  .eyebrow-dark { color: #F2A7C6; }
  .heading-group { max-width: 880px; margin-bottom: 56px; }
  .heading-group.centered { text-align: center; margin-left: auto; margin-right: auto; }
  .heading-group .section-intro { max-width: 820px; margin: 18px auto 0; font-size: 18px; line-height: 1.6; }
  .heading-group.on-dark h2, .on-dark h2, .on-dark h3 { color: #fff; }
  .heading-group.on-dark .section-intro { color: #CBD0D9; }
  .section-lede { font-size: 18px !important; line-height: 1.62; }
  .centered-support { max-width: 840px; margin: -28px auto 52px !important; text-align: left; font-size: 17px !important; }

  .hero { padding-top: 104px; padding-bottom: 104px; background: linear-gradient(180deg,#fff 0%,#FCFAFB 100%); position: relative; }
  .hero:before { content: ""; position: absolute; width: 480px; height: 480px; border-radius: 50%; background: radial-gradient(circle, rgba(193,29,99,.08), rgba(193,29,99,0) 70%); right: -180px; top: -160px; pointer-events: none; }
  .hero-grid { display: grid; grid-template-columns: minmax(0,1.02fr) minmax(460px,.98fr); gap: 72px; align-items: center; }
  .hero-copy { max-width: 680px; position: relative; z-index: 2; }
  .hero h1 { max-width: 690px; }
  .hero-lede { max-width: 680px; font-size: 18px !important; line-height: 1.65; margin-top: 24px !important; }
  .hero-actions { display: flex; gap: 12px; flex-wrap: wrap; margin-top: 32px; }
  .btn { min-height: 50px; padding: 13px 22px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; font-size: 16px; line-height: 1.2; font-weight: 600; transition: transform .18s ease, background .18s ease, border-color .18s ease, box-shadow .18s ease; }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible, .editorial-link:focus-visible, summary:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
  .btn.primary, .btn.primary:visited, .btn.primary:hover, .btn.primary:active, .btn.primary:focus, .btn.primary:focus-visible { background: #C11D63; color: #fff !important; }
  .btn.primary *, .btn.primary:visited *, .btn.primary:hover *, .btn.primary:active *, .btn.primary:focus * { color: #fff !important; stroke: currentColor; }
  .btn.primary:hover { background: #A71954; box-shadow: 0 8px 24px rgba(193,29,99,.18); }
  .btn.secondary { background: #fff; color: var(--ink); border: 1px solid #D6D8DE; }
  .btn.secondary:hover { border-color: #B8BBC4; background: #FAFAFB; }
  .hero-art { position: relative; z-index: 1; }
  .hero-art svg { display: block; width: 100%; height: auto; }

  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { display: grid; grid-template-columns: repeat(4,1fr); padding-top: 28px; padding-bottom: 28px; }
  .proof-grid > div { padding: 0 26px; border-right: 1px solid var(--line); }
  .proof-grid > div:first-child { padding-left: 0; }
  .proof-grid > div:last-child { border-right: 0; padding-right: 0; }
  .proof-grid strong { display: block; font-size: 17px; line-height: 1.25; font-weight: 600; color: var(--ink); margin-bottom: 7px; }
  .proof-grid span { display: block; font-size: 16px; line-height: 1.5; color: var(--body); }

  .light-section { background: var(--surface); }
  .four-concepts { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .four-concepts article { padding: 34px 28px 36px; border-right: 1px solid var(--line); }
  .four-concepts article:first-child { padding-left: 0; }
  .four-concepts article:last-child { border-right: 0; padding-right: 0; }
  .four-concepts h3 { margin: 18px 0 12px; }
  .icon-box { width: 44px; height: 44px; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: #F8EDF2; color: #A71954; flex: 0 0 auto; }

  .service-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
  .service-card { border: 1px solid var(--line); border-radius: 26px; padding: 30px; background: #fff; min-height: 100%; display: flex; flex-direction: column; }
  .service-card:hover { border-color: #CFCFD6; box-shadow: 0 12px 36px rgba(26,29,38,.06); }
  .service-top { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
  .service-lead { color: var(--ink) !important; font-size: 17px !important; line-height: 1.55; margin-bottom: 12px !important; }
  .service-card > p:not(.service-lead) { margin-bottom: 22px !important; }
  .service-card .editorial-link { margin-top: auto; }
  .editorial-link { display: inline-flex; align-items: center; gap: 7px; width: fit-content; color: #A71954 !important; font-weight: 600; font-size: 16px; line-height: 1.3; }
  .editorial-link svg { transition: transform .18s ease; }
  .editorial-link:hover svg { transform: translateX(3px); }
  .editorial-link.light { color: #F2A7C6 !important; }

  .workflow-section { background: #FAFAFB; }
  .workflow-line { display: grid; grid-template-columns: repeat(12,1fr); border-top: 1px solid #D9DAE0; border-bottom: 1px solid #D9DAE0; }
  .workflow-step { grid-column: span 3; padding: 28px 24px 30px; border-right: 1px solid #D9DAE0; min-width: 0; }
  .workflow-step:nth-child(-n+4) { border-bottom: 1px solid #D9DAE0; }
  .workflow-step:nth-child(n+5) { grid-column: span 4; }
  .workflow-step:first-child, .workflow-step:nth-child(5) { padding-left: 0; }
  .workflow-step:nth-child(4), .workflow-step:last-child { border-right: 0; padding-right: 0; }
  .step-number { font-size: 12px; font-weight: 600; letter-spacing: .08em; color: #C11D63; margin-bottom: 24px; }
  .workflow-step h3 { font-size: 20px; margin-bottom: 12px; }
  .workflow-step p { font-size: 16px; line-height: 1.55; }
  .support-strip { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; margin-top: 28px; }
  .support-strip span { border: 1px solid #DDDEE3; border-radius: 999px; padding: 9px 14px; background: #fff; font-size: 16px; color: #5D6370; }

  .dark-section { background: var(--dark); }
  .split-head-list { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 84px; align-items: start; }
  .sticky-copy h2, .sticky-copy h3, .dark-section h2, .dark-section h3 { color: #fff; }
  .sticky-copy p, .dark-section p { color: #C8CDD6; }
  .sticky-copy h2 { margin-bottom: 22px; }
  .sticky-copy p + p { margin-top: 16px; }
  .risk-callout { margin-top: 34px; padding: 22px 24px; border-radius: 20px; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.11); }
  .risk-callout strong { display: block; color: #fff; font-size: 17px; margin-bottom: 7px; }
  .risk-callout span { display: block; color: #CDD1D9; font-size: 16px; line-height: 1.55; }
  .editorial-stack { border-top: 1px solid rgba(255,255,255,.14); }
  .editorial-stack article { padding: 28px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
  .editorial-stack h3 { margin-bottom: 10px; }
  .editorial-stack p { max-width: 720px; }

  .continuous-grid { display: grid; grid-template-columns: minmax(0,.88fr) minmax(520px,1.12fr); gap: 72px; align-items: center; }
  .continuous-copy h2 { margin-bottom: 20px; }
  .continuous-copy p + p { margin-top: 16px; }
  .link-row { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 28px; }
  .system-visual { border: 1px solid var(--line); border-radius: 28px; background: #FAFAFB; padding: 24px; min-height: 400px; display: grid; grid-template-columns: minmax(120px,.8fr) 36px minmax(190px,1.1fr) 36px minmax(120px,.75fr); align-items: center; gap: 8px; }
  .source-node, .engine-node, .markets-node { background: #fff; border: 1px solid #DCDDDF; border-radius: 20px; padding: 20px; }
  .node-label { display: block; color: #A71954; font-size: 11px; font-weight: 600; letter-spacing: .12em; margin-bottom: 12px; }
  .source-node strong { display: block; font-size: 17px; line-height: 1.3; margin-bottom: 8px; }
  .source-node span:last-child { color: var(--muted); font-size: 14px; }
  .engine-row { display: flex; justify-content: space-between; gap: 10px; padding: 10px 0; border-top: 1px solid #EEEFF2; font-size: 14px; }
  .engine-row b { font-weight: 600; color: #A71954; }
  .flow-arrow { color: #C11D63; font-size: 26px; text-align: center; }
  .locale-chip { background: #F6F6F8; border-radius: 10px; padding: 8px 10px; font-size: 14px; margin-top: 7px; color: #39404D; }
  .continuous-points { display: grid; grid-template-columns: repeat(3,1fr); margin-top: 58px; border-top: 1px solid var(--line); }
  .continuous-points article { padding: 27px 28px 4px 0; border-bottom: 1px solid var(--line); }
  .continuous-points article:nth-child(3n+2), .continuous-points article:nth-child(3n+3) { padding-left: 28px; border-left: 1px solid var(--line); }
  .continuous-points h3 { font-size: 20px; margin-bottom: 10px; }

  .soft-dark-section { background: #20242E; color: #fff; }
  .soft-dark-section h2, .soft-dark-section h3 { color: #fff; }
  .soft-dark-section p { color: #C8CDD6; }
  .testing-grid { display: grid; grid-template-columns: minmax(500px,1.1fr) minmax(0,.9fr); gap: 76px; align-items: center; }
  .testing-copy h2 { margin-bottom: 20px; }
  .testing-copy p + p { margin-top: 16px; }
  .testing-copy .editorial-link { margin-top: 26px; }
  .testing-visual { min-height: 420px; border-radius: 28px; border: 1px solid rgba(255,255,255,.12); background: #181B23; position: relative; padding: 28px; overflow: hidden; }
  .device { background: #F9F9FA; color: #222733; border-radius: 18px; box-shadow: 0 14px 35px rgba(0,0,0,.20); position: absolute; }
  .desktop-device { width: 63%; height: 250px; left: 26px; top: 58px; }
  .mobile-device { width: 155px; height: 295px; right: 26px; bottom: 22px; border-radius: 25px; }
  .device-bar { height: 30px; border-bottom: 1px solid #E5E5E8; display: flex; gap: 5px; padding: 12px; }
  .device-bar span { width: 5px; height: 5px; border-radius: 50%; background: #C7C9D0; }
  .mobile-notch { width: 50px; height: 6px; background: #C7C9D0; border-radius: 999px; margin: 12px auto; }
  .device-copy { padding: 28px; display: flex; flex-direction: column; align-items: flex-start; gap: 13px; }
  .device-copy b { font-size: 17px; }
  .device-copy i { display: block; height: 7px; width: 85%; background: #D5D7DD; border-radius: 99px; }
  .device-copy i:nth-of-type(2) { width: 63%; }
  .device-copy .mock-button { display: inline-block; border-radius: 999px; background: #C11D63; color: #fff; padding: 9px 14px; margin-top: 6px; font-size: 13px; }
  .device-copy.rtl { direction: rtl; align-items: stretch; padding: 16px; }
  .device-copy.rtl i { margin-left: auto; }
  .device-copy.rtl .mock-button { align-self: flex-end; }
  .qa-tag { position: absolute; bottom: 15px; left: 18px; font-size: 12px; font-weight: 600; border-radius: 999px; padding: 5px 9px; }
  .qa-tag.ok { color: #256D4A; background: #E5F3EC; }
  .qa-tag.review { color: #874719; background: #F8EADB; }
  .qa-panel { position: absolute; left: 46px; bottom: 22px; width: 230px; background: #fff; border-radius: 18px; padding: 18px; box-shadow: 0 14px 35px rgba(0,0,0,.18); }
  .qa-panel > div { display: flex; justify-content: space-between; gap: 10px; font-size: 13px; padding: 7px 0; border-top: 1px solid #EEEEF0; color: #3C424E; }
  .qa-panel b { font-weight: 600; }
  .qa-panel span { color: #69707C; }
  .testing-list { display: grid; grid-template-columns: repeat(3,1fr); margin-top: 58px; border-top: 1px solid rgba(255,255,255,.14); }
  .testing-list article { padding: 28px 30px 2px 0; border-bottom: 1px solid rgba(255,255,255,.14); }
  .testing-list article:nth-child(3n+2), .testing-list article:nth-child(3n+3) { padding-left: 30px; border-left: 1px solid rgba(255,255,255,.14); }
  .testing-list h3 { font-size: 20px; margin-bottom: 10px; }

  .i18n-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(520px,1.1fr); gap: 82px; align-items: center; }
  .i18n-copy h2 { margin-bottom: 20px; }
  .i18n-copy p + p { margin-top: 16px; }
  .i18n-copy .editorial-link { margin-top: 26px; }
  .i18n-visual { border-radius: 28px; border: 1px solid var(--line); background: #FAFAFB; padding: 28px; }
  .code-panel { border: 1px solid #D9DAE0; border-radius: 18px; overflow: hidden; background: #222733; }
  .code-header { display: flex; gap: 6px; padding: 13px 15px; border-bottom: 1px solid rgba(255,255,255,.1); }
  .code-header span { width: 7px; height: 7px; border-radius: 50%; background: #747A86; }
  .code-panel pre { margin: 0; padding: 22px; color: #E7E9EE; font-size: 14px; line-height: 1.75; white-space: pre-wrap; overflow-wrap: anywhere; }
  .i18n-line { display: flex; justify-content: center; align-items: center; gap: 12px; color: #7A808D; font-size: 14px; padding: 16px 0; }
  .i18n-line b { color: #C11D63; font-size: 20px; }
  .locale-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; }
  .locale-grid > div { background: #fff; border: 1px solid #DCDDDF; border-radius: 14px; padding: 13px; }
  .locale-grid b { display: block; color: #A71954; font-size: 12px; margin-bottom: 6px; }
  .locale-grid span { display: block; font-size: 14px; color: #303641; }
  .rtl-card { direction: rtl; }
  .i18n-list { display: grid; grid-template-columns: repeat(2,1fr); margin-top: 62px; border-top: 1px solid var(--line); }
  .i18n-list article { padding: 26px 26px 26px 0; border-bottom: 1px solid var(--line); }
  .i18n-list article:nth-child(even) { padding-left: 28px; border-left: 1px solid var(--line); }
  .i18n-list article:last-child { grid-column: 1 / -1; padding-left: 0; border-left: 0; }
  .i18n-list h3 { font-size: 20px; margin-bottom: 9px; }

  .language-section { background: #FAF7F9; }
  .language-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(500px,1.1fr); gap: 80px; align-items: center; }
  .language-grid h2 { margin-bottom: 20px; }
  .language-grid p + p { margin-top: 16px; }
  .language-grid .editorial-link { margin-top: 26px; }
  .language-cloud { display: flex; flex-wrap: wrap; gap: 10px; align-content: center; }
  .language-cloud span { background: #fff; border: 1px solid #DDDDE2; border-radius: 999px; padding: 11px 16px; font-size: 16px; color: #343A45; }
  .locale-variants { display: grid; grid-template-columns: repeat(4,1fr); margin-top: 54px; padding-top: 28px; border-top: 1px solid #DEDDE1; }
  .locale-variants > div { padding: 0 22px; border-right: 1px solid #DEDDE1; }
  .locale-variants > div:first-child { padding-left: 0; }
  .locale-variants > div:last-child { border-right: 0; }
  .locale-variants strong { display: block; font-size: 17px; margin-bottom: 5px; }
  .locale-variants span { font-size: 16px; color: var(--body); }
  .language-note { max-width: 900px; margin-top: 26px !important; font-size: 16px !important; }

  .enterprise-section { background: #fff; }
  .enterprise-matrix { display: grid; grid-template-columns: repeat(2,1fr); border-top: 1px solid var(--line); }
  .enterprise-matrix article { display: grid; grid-template-columns: 52px 1fr; gap: 18px; padding: 30px 32px 30px 0; border-bottom: 1px solid var(--line); }
  .enterprise-matrix article:nth-child(even) { padding-left: 32px; border-left: 1px solid var(--line); }
  .enterprise-matrix h3 { margin-bottom: 9px; }
  .enterprise-matrix .editorial-link { margin-top: 15px; }

  .industry-section { background: #F7F7F9; }
  .industry-layout { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 84px; align-items: start; }
  .industry-intro h2 { margin-bottom: 20px; }
  .industry-intro p + p { margin-top: 16px; }
  .industry-intro .editorial-link { margin-top: 26px; }
  .industry-rows { border-top: 1px solid var(--line); }
  .industry-rows article { display: grid; grid-template-columns: 4px 1fr; gap: 18px; padding: 23px 0; border-bottom: 1px solid var(--line); }
  .industry-rule { width: 3px; height: 28px; border-radius: 99px; background: #C11D63; margin-top: 1px; }
  .industry-rows h3 { font-size: 20px; margin-bottom: 8px; }

  .resources-section { background: #fff; }
  .resource-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 16px; }
  .resource-grid article { border: 1px solid var(--line); border-radius: 24px; padding: 28px; background: #fff; display: flex; flex-direction: column; min-height: 310px; }
  .resource-grid article.featured-resource { grid-column: 1 / -1; min-height: 0; background: #181B23; border-color: #181B23; }
  .resource-grid article.featured-resource h3 { color: #fff; }
  .resource-grid article.featured-resource p { color: #C8CDD6; max-width: 840px; }
  .resource-grid article.featured-resource .editorial-link { color: #F2A7C6 !important; }
  .resource-type { font-size: 11px; font-weight: 600; letter-spacing: .12em; color: #C11D63; margin-bottom: 18px; }
  .featured-resource .resource-type { color: #F2A7C6; }
  .resource-grid h3 { margin-bottom: 12px; }
  .resource-grid p { margin-bottom: 24px !important; }
  .resource-grid .editorial-link { margin-top: auto; }

  .faq-section { background: #F7F7F9; }
  .faq-shell { display: grid; grid-template-columns: minmax(300px,.55fr) minmax(0,1.45fr); gap: 70px; align-items: start; }
  .faq-heading h2 { margin-bottom: 18px; }
  .faq-heading p { max-width: 420px; }
  .faq-panel { background: #fff; border: 1px solid var(--line); border-radius: 24px; padding: 0 28px; overflow: hidden; }
  .faq-panel details { border-bottom: 1px solid var(--line); }
  .faq-panel summary { list-style: none; cursor: pointer; min-height: 68px; padding: 21px 0; display: flex; align-items: center; justify-content: space-between; gap: 24px; color: var(--ink); font-size: 18px; line-height: 1.35; font-weight: 600; }
  .faq-panel summary::-webkit-details-marker { display: none; }
  .faq-plus { width: 32px; height: 32px; border-radius: 50%; background: #F6F1F3; color: #A71954; display: flex; align-items: center; justify-content: center; font-size: 21px; font-weight: 400; flex: 0 0 auto; transition: transform .18s ease; }
  .faq-panel details[open] .faq-plus { transform: rotate(45deg); }
  .faq-answer { padding: 0 52px 24px 0; }
  .faq-answer p { max-width: 840px; font-size: 16px; line-height: 1.65; }

  .final-cta { background: #7A1542; padding-top: 82px; padding-bottom: 82px; }
  .final-cta-inner { display: grid; grid-template-columns: minmax(0,1.2fr) auto; gap: 72px; align-items: center; }
  .final-cta h2 { color: #fff; margin-bottom: 18px; }
  .final-cta p { color: #F1DEE6; max-width: 820px; }
  .final-cta p + p { margin-top: 12px; }
  .cta-actions { display: flex; flex-direction: column; align-items: stretch; gap: 12px; min-width: 240px; }
  .btn.light-primary, .btn.light-primary:visited, .btn.light-primary:hover { background: #C11D63; color: #fff !important; }
  .btn.dark-secondary { border: 1px solid rgba(255,255,255,.5); color: #fff !important; background: rgba(255,255,255,.04); }
  .btn.dark-secondary:visited, .btn.dark-secondary:hover, .btn.dark-secondary:active { color: #fff !important; }
  .btn.dark-secondary:hover { background: rgba(255,255,255,.10); border-color: #fff; }

  @media (max-width: 1180px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: minmax(0,1fr) minmax(420px,.9fr); gap: 44px; }
    .resource-grid { grid-template-columns: repeat(2,1fr); }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding-top: 80px; padding-bottom: 80px; }
    .stepes-localization-page h1 { font-size: 42px; }
    .stepes-localization-page h2 { font-size: 32px; }
    .hero-grid, .continuous-grid, .testing-grid, .i18n-grid, .language-grid, .industry-layout, .faq-shell, .split-head-list, .final-cta-inner { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; margin-left: auto; margin-right: auto; text-align: center; }
    .hero h1, .hero-lede { margin-left: auto !important; margin-right: auto !important; }
    .hero-actions { justify-content: center; }
    .continuous-copy .eyebrow, .continuous-copy h2, .testing-copy .eyebrow, .testing-copy h2, .i18n-copy .eyebrow, .i18n-copy h2, .language-grid > div:first-child .eyebrow, .language-grid > div:first-child h2, .industry-intro .eyebrow, .industry-intro h2, .final-cta h2 { text-align: center; }
    .continuous-copy .section-lede, .continuous-copy > p, .testing-copy .section-lede, .testing-copy > p, .i18n-copy .section-lede, .i18n-copy > p, .language-grid > div:first-child p, .industry-intro p, .final-cta p { text-align: left; }
    .hero-art { max-width: 700px; margin: 0 auto; }
    .proof-grid { grid-template-columns: repeat(2,1fr); }
    .proof-grid > div { padding: 20px 24px; border-bottom: 1px solid var(--line); }
    .proof-grid > div:nth-child(2) { border-right: 0; }
    .proof-grid > div:nth-last-child(-n+2) { border-bottom: 0; }
    .proof-grid > div:first-child { padding-left: 0; }
    .proof-grid > div:nth-child(3) { padding-left: 0; }
    .four-concepts { grid-template-columns: repeat(2,1fr); }
    .four-concepts article { border-bottom: 1px solid var(--line); }
    .four-concepts article:nth-child(2) { border-right: 0; }
    .four-concepts article:nth-child(3) { padding-left: 0; }
    .four-concepts article:nth-last-child(-n+2) { border-bottom: 0; }
    .service-grid { grid-template-columns: repeat(2,1fr); }
    .workflow-line { grid-template-columns: 1fr; border-bottom: 0; }
    .workflow-step, .workflow-step:nth-child(4n+1), .workflow-step:first-child { grid-column: 1 / -1; display: grid; grid-template-columns: 54px 180px 1fr; gap: 16px; align-items: start; padding: 24px 0; border-right: 0; border-bottom: 1px solid #D9DAE0; }
    .workflow-step:last-child { border-bottom: 0; }
    .step-number { margin-bottom: 0; padding-top: 3px; }
    .workflow-step h3 { margin-bottom: 0; }
    .system-visual { min-height: auto; grid-template-columns: 1fr; gap: 12px; }
    .flow-arrow { transform: rotate(90deg); }
    .continuous-points, .testing-list { grid-template-columns: repeat(2,1fr); }
    .continuous-points article:nth-child(3n+2), .continuous-points article:nth-child(3n+3), .testing-list article:nth-child(3n+2), .testing-list article:nth-child(3n+3) { padding-left: 0; border-left: 0; }
    .continuous-points article:nth-child(even), .testing-list article:nth-child(even) { padding-left: 26px; border-left: 1px solid var(--line); }
    .testing-list article:nth-child(even) { border-left-color: rgba(255,255,255,.14); }
    .testing-visual { min-height: 430px; max-width: 720px; }
    .i18n-list { grid-template-columns: 1fr; }
    .i18n-list article:nth-child(even) { padding-left: 0; border-left: 0; }
    .locale-variants { grid-template-columns: repeat(2,1fr); gap: 0; }
    .locale-variants > div { padding: 16px 20px; border-bottom: 1px solid #DEDDE1; }
    .locale-variants > div:nth-child(2) { border-right: 0; }
    .locale-variants > div:nth-last-child(-n+2) { border-bottom: 0; }
    .locale-variants > div:nth-child(3) { padding-left: 0; }
    .enterprise-matrix { grid-template-columns: 1fr; }
    .enterprise-matrix article:nth-child(even) { padding-left: 0; border-left: 0; }
    .industry-intro { max-width: 760px; }
    .cta-actions { flex-direction: row; min-width: 0; }
  }

  @media (max-width: 640px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding-top: 68px; padding-bottom: 68px; }
    .stepes-localization-page h1 { font-size: 38px; }
    .stepes-localization-page h2 { font-size: 30px; }
    .stepes-localization-page h3 { font-size: 20px; }
    .hero { padding-top: 72px; padding-bottom: 72px; }
    .hero-copy { text-align: center; }
    .hero .eyebrow { text-align: center; }
    .hero-lede { text-align: center; font-size: 18px !important; }
    .hero-actions { flex-direction: column; }
    .hero-actions .btn { width: 100%; }
    .editorial-link { min-height: 44px; align-items: center; }
    .hero-art { margin-top: 8px; }
    .heading-group.centered { text-align: center; }
    .heading-group { margin-bottom: 40px; }
    .heading-group .section-intro { font-size: 17px; }
    .centered-support { text-align: left; margin-top: -12px !important; font-size: 16px !important; }
    .proof-grid { grid-template-columns: 1fr; padding-top: 10px; padding-bottom: 10px; }
    .proof-grid > div, .proof-grid > div:first-child, .proof-grid > div:nth-child(3) { padding: 18px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .proof-grid > div:nth-last-child(-n+2) { border-bottom: 1px solid var(--line); }
    .proof-grid > div:last-child { border-bottom: 0; }
    .four-concepts, .service-grid, .continuous-points, .testing-list, .resource-grid, .locale-variants { grid-template-columns: 1fr; }
    .four-concepts article, .four-concepts article:first-child, .four-concepts article:nth-child(3), .four-concepts article:last-child { padding: 26px 0; border-right: 0; border-bottom: 1px solid var(--line); }
    .four-concepts article:nth-last-child(-n+2) { border-bottom: 1px solid var(--line); }
    .four-concepts article:last-child { border-bottom: 0; }
    .service-card { padding: 24px; border-radius: 22px; }
    .workflow-step, .workflow-step:nth-child(4n+1), .workflow-step:first-child { grid-template-columns: 42px 1fr; gap: 12px; }
    .workflow-step p { grid-column: 2; }
    .support-strip { justify-content: flex-start; }
    .split-head-list { gap: 44px; }
    .sticky-copy { text-align: left; }
    .continuous-copy .eyebrow, .continuous-copy h2, .testing-copy .eyebrow, .testing-copy h2, .i18n-copy .eyebrow, .i18n-copy h2, .language-grid > div:first-child .eyebrow, .language-grid > div:first-child h2, .industry-intro .eyebrow, .industry-intro h2 { text-align: center; }
    .continuous-copy .section-lede, .continuous-copy > p, .testing-copy .section-lede, .testing-copy > p, .i18n-copy .section-lede, .i18n-copy > p, .language-grid > div:first-child p, .industry-intro p { text-align: left; }
    .link-row { flex-direction: column; gap: 14px; }
    .system-visual { padding: 18px; border-radius: 22px; }
    .continuous-points article, .continuous-points article:nth-child(even), .testing-list article, .testing-list article:nth-child(even) { padding: 24px 0; border-left: 0; border-bottom: 1px solid var(--line); }
    .testing-list article, .testing-list article:nth-child(even) { border-bottom-color: rgba(255,255,255,.14); }
    .testing-visual { min-height: 420px; padding: 18px; }
    .desktop-device { width: calc(100% - 36px); left: 18px; top: 28px; height: 215px; }
    .mobile-device { width: 128px; height: 245px; right: 16px; bottom: 18px; }
    .qa-panel { left: 18px; bottom: 20px; width: 185px; padding: 14px; }
    .device-copy { padding: 20px; }
    .i18n-visual { padding: 18px; border-radius: 22px; }
    .locale-grid { grid-template-columns: repeat(2,1fr); }
    .i18n-list article, .i18n-list article:nth-child(even), .i18n-list article:last-child { grid-column: 1 / -1; padding: 22px 0; border-left: 0; }
    .language-cloud { justify-content: center; }
    .locale-variants > div, .locale-variants > div:nth-child(3) { padding: 16px 0; border-right: 0; border-bottom: 1px solid #DEDDE1; }
    .locale-variants > div:nth-last-child(-n+2) { border-bottom: 1px solid #DEDDE1; }
    .locale-variants > div:last-child { border-bottom: 0; }
    .enterprise-matrix article, .enterprise-matrix article:nth-child(even) { grid-template-columns: 44px 1fr; padding: 24px 0; gap: 14px; }
    .industry-layout { gap: 44px; }
    .resource-grid article { min-height: 0; }
    .faq-heading { text-align: center; }
    .faq-heading p { margin-left: auto; margin-right: auto; }
    .faq-panel { padding-left: 20px; padding-right: 20px; }
    .faq-panel summary { font-size: 17px; }
    .faq-answer { padding-right: 0; }
    .final-cta { padding-top: 68px; padding-bottom: 68px; }
    .final-cta-inner { text-align: center; gap: 34px; }
    .final-cta p { text-align: left; }
    .cta-actions { flex-direction: column; width: 100%; }
    .cta-actions .btn { width: 100%; }
  }

  @media (max-width: 360px) {
    .stepes-localization-page h1 { font-size: 36px; }
    .stepes-localization-page h2 { font-size: 29px; }
    .hero-actions .btn { padding-left: 16px; padding-right: 16px; }
    .testing-visual { min-height: 452px; padding-left: 12px; padding-right: 12px; }
    .desktop-device { width: calc(100% - 24px); left: 12px; }
    .qa-panel { width: 158px; left: 12px; }
    .mobile-device { width: 108px; right: 10px; }
  }
`;
