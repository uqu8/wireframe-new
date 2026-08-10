import React, { useState } from "react";

export const pageMeta = {
  title: "Professional German Translation Services | Stepes",
  description:
    "Enterprise German translation services for technical, regulated, digital, and business-critical content. English-to-German and German-to-English expertise with AI-enabled workflows and human quality controls.",
  canonical: "https://www.stepes.com/german-translation-services/",
};

const ArrowIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CheckIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name, size = 24 }) => {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true };
  const p = { stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round" };
  const icons = {
    document: <svg {...common}><path {...p} d="M7 3h7l4 4v14H7z"/><path {...p} d="M14 3v5h5M10 12h5M10 16h5"/></svg>,
    software: <svg {...common}><rect {...p} x="3" y="4" width="18" height="16" rx="2"/><path {...p} d="M3 9h18M8 14l-2 2 2 2M16 14l2 2-2 2M13 13l-2 6"/></svg>,
    medical: <svg {...common}><path {...p} d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11Z"/><path {...p} d="M9 13h6M12 10v6"/></svg>,
    legal: <svg {...common}><path {...p} d="M12 3v18M5 6h14M7 6l-3 7h6L7 6ZM17 6l-3 7h6l-3-7ZM8 21h8"/></svg>,
    training: <svg {...common}><path {...p} d="m3 9 9-5 9 5-9 5-9-5Z"/><path {...p} d="M7 12v4c3 2 7 2 10 0v-4M21 9v6"/></svg>,
    media: <svg {...common}><rect {...p} x="3" y="5" width="18" height="14" rx="2"/><path {...p} d="m10 9 5 3-5 3V9Z"/></svg>,
    engineering: <svg {...common}><circle {...p} cx="12" cy="12" r="3"/><path {...p} d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"/></svg>,
    automotive: <svg {...common}><path {...p} d="M5 16h14l-1.5-5H6.5L5 16Z"/><path {...p} d="M7 11 9 7h6l2 4M4 16v3M20 16v3"/><circle {...p} cx="7" cy="17" r="1"/><circle {...p} cx="17" cy="17" r="1"/></svg>,
    energy: <svg {...common}><path {...p} d="M13 2 6 13h6l-1 9 7-12h-6l1-8Z"/></svg>,
    globe: <svg {...common}><circle {...p} cx="12" cy="12" r="9"/><path {...p} d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></svg>,
    terminology: <svg {...common}><path {...p} d="M4 5h10M4 9h8M4 13h6M16 16l4-4M16 12l4 4M4 19h8"/></svg>,
    api: <svg {...common}><path {...p} d="M8 9 4 12l4 3M16 9l4 3-4 3M14 5l-4 14"/></svg>,
    analytics: <svg {...common}><path {...p} d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></svg>,
    review: <svg {...common}><path {...p} d="M4 4h16v12H8l-4 4V4Z"/><path {...p} d="M8 9h8M8 12h5"/></svg>,
    memory: <svg {...common}><rect {...p} x="5" y="5" width="14" height="14" rx="2"/><path {...p} d="M9 9h6v6H9zM9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>,
    quality: <svg {...common}><path {...p} d="m12 3 7 3v5c0 4.6-2.9 8-7 10-4.1-2-7-5.4-7-10V6l7-3Z"/><path {...p} d="m9 12 2 2 4-4"/></svg>,
  };
  return icons[name] || icons.document;
};

const Eyebrow = ({ children, dark = false }) => <p className={`eyebrow${dark ? " eyebrowDark" : ""}`}>{children}</p>;

const PrimaryButton = ({ href, children }) => (
  <a className="button buttonPrimary" href={href}>
    <span>{children}</span><ArrowIcon />
  </a>
);

const SecondaryButton = ({ href, children, dark = false }) => (
  <a className={`button buttonSecondary${dark ? " buttonSecondaryDark" : ""}`} href={href}>
    <span>{children}</span><ArrowIcon />
  </a>
);

const EditorialLink = ({ href, children, inverse = false }) => (
  <a className={`editorialLink${inverse ? " editorialLinkInverse" : ""}`} href={href}>
    <span>{children}</span><ArrowIcon size={17} />
  </a>
);

const SectionHeader = ({ eyebrow, title, intro, align = "left", dark = false }) => (
  <div className={`sectionHeader sectionHeader${align === "center" ? "Center" : "Left"}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2>{title}</h2>
    {intro ? <p className={dark ? "intro introInverse" : "intro"}>{intro}</p> : null}
  </div>
);

const services = [
  {
    icon: "engineering",
    title: "German Technical Translation",
    body: "Operating manuals, installation instructions, service documentation, engineering specifications, safety content, product catalogs, technical training, and structured documentation translated with subject-matter precision.",
    link: "https://www.stepes.com/german-technical-translation-services/",
    label: "German Technical Translation Services",
  },
  {
    icon: "document",
    title: "German Document Translation",
    body: "Complete translation and production for Word, PowerPoint, Excel, PDF, InDesign, FrameMaker, MadCap Flare, XML, DITA, XLIFF, scanned documents, and graphics-rich files.",
    link: "https://www.stepes.com/document-translation-services/",
    label: "Document Translation Services",
  },
  {
    icon: "globe",
    title: "German Website Localization",
    body: "Corporate websites, e-commerce, support centers, knowledge bases, product pages, campaigns, metadata, and German SEO content localized for real customer intent and market conventions.",
    link: "https://www.stepes.com/website-translation-services/",
    label: "Website Translation Services",
  },
  {
    icon: "software",
    title: "German Software and SaaS Localization",
    body: "User interfaces, mobile apps, SaaS platforms, help systems, release notes, developer content, and continuous product updates localized with variable protection, terminology control, and in-context QA.",
    link: "https://www.stepes.com/software-localization-services/",
    label: "Software Localization Services",
  },
  {
    icon: "medical",
    title: "German Medical and Regulatory Translation",
    body: "IFUs, labels, clinical materials, medical-device software, regulatory submissions, quality-system documentation, pharmaceutical content, and patient communications supported by specialized workflows.",
    link: "https://www.stepes.com/german-medical-translation-services/",
    label: "German Medical Translation Services",
  },
  {
    icon: "legal",
    title: "German Legal and Compliance Translation",
    body: "Commercial agreements, corporate records, litigation, privacy, employment, intellectual property, due diligence, compliance policies, and regulatory correspondence translated for their intended legal context.",
    link: "https://www.stepes.com/legal-translation-services/",
    label: "Legal Translation Services",
  },
  {
    icon: "training",
    title: "German eLearning and Training",
    body: "Technical, compliance, safety, product, and employee training localized across course content, assessments, voice-over, subtitles, on-screen text, and learning-management environments.",
    link: "https://www.stepes.com/elearning-training-translation-services/",
    label: "eLearning Translation Services",
  },
  {
    icon: "media",
    title: "German Multimedia and Desktop Publishing",
    body: "Voice-over, subtitling, transcription, multimedia engineering, multilingual typesetting, technical graphics, page-flow correction, and final visual QA for production-ready deliverables.",
    link: "https://www.stepes.com/multilingual-desktop-publishing/",
    label: "Multilingual Desktop Publishing",
  },
];

const industries = [
  { icon: "engineering", title: "Manufacturing and Engineering", body: "Technical documentation, industrial software, service content, work instructions, safety procedures, training, and supplier communications across the product lifecycle." },
  { icon: "medical", title: "Medical Devices and Life Sciences", body: "Medical-device, pharmaceutical, clinical, healthcare, and regulatory content supported by terminology, review depth, and quality controls aligned to intended use." },
  { icon: "automotive", title: "Automotive and Electric Mobility", body: "Vehicle interfaces, diagnostics, owner and service manuals, battery and charging systems, technician training, connected-vehicle content, and supplier documentation." },
  { icon: "software", title: "Software, SaaS, and Technology", body: "Enterprise applications, mobile products, cloud platforms, cybersecurity, knowledge bases, developer content, support, and continuous localization for frequent releases." },
  { icon: "legal", title: "Legal, Compliance, and IP", body: "International transactions, contracts, patents, data privacy, employment, litigation, regulatory matters, governance, and internal investigations." },
  { icon: "energy", title: "Chemicals, Energy, and Environment", body: "Safety data sheets, product and plant documentation, technical specifications, environmental reporting, renewable-energy systems, regulatory communications, and workforce training." },
];

const languageChallenges = [
  { title: "Compound Words and Technical Terminology", body: "German can form multiple plausible compound terms for the same concept. A governed termbase helps keep components, warnings, product features, and technical processes consistent across software, manuals, websites, and support content." },
  { title: "Formal and Informal Address", body: "The choice between Sie and du affects pronouns, verbs, tone, and the customer relationship. Stepes applies the approved brand and audience strategy consistently across channels." },
  { title: "Grammar and Sentence Structure", body: "Case, gender, agreement, word order, embedded clauses, and long noun phrases require translators to understand complete technical and business context rather than translate isolated words." },
  { title: "Text Expansion and Interface Constraints", body: "German often needs more characters than English. Concise terminology, screenshot review, layout adjustment, and functional QA help preserve accuracy without breaking buttons, tables, diagrams, labels, or mobile screens." },
  { title: "Dates, Numbers, Units, and Formatting", body: "Decimal separators, dates, times, currencies, measurements, quotation marks, abbreviations, and nonbreaking spaces are adapted to the target market, industry, and customer style guide." },
  { title: "Inclusive and Audience-Appropriate Language", body: "German organizations use different approaches to inclusive language. Stepes follows the customer’s approved policy and helps define a practical convention when one has not yet been established." },
];

const workflow = [
  { number: "01", title: "AI Translation", body: "Rapid understanding and lower-risk internal or high-volume operational content." },
  { number: "02", title: "AI + Human Review", body: "Knowledge bases, support, product information, and frequently updated digital content." },
  { number: "03", title: "Professional Translation", body: "Technical, legal, medical, regulatory, marketing, and high-visibility customer content." },
  { number: "04", title: "Independent Review", body: "Publication-critical or high-risk content requiring editing, proofreading, and expanded QA." },
];

const qualitySteps = [
  { title: "Content and Risk Assessment", body: "We review the language direction, audience, market, subject matter, intended use, file format, source quality, turnaround, and review requirements." },
  { title: "Linguist and Subject-Matter Matching", body: "Resources are selected for target-language expertise, German locale, industry knowledge, content type, technical complexity, and required tools." },
  { title: "Terminology and Reference Preparation", body: "Glossaries, style guides, translation memory, product references, screenshots, and do-not-translate instructions are prepared before production." },
  { title: "Translation and Human Review", body: "The agreed workflow may use professional translation, AI-assisted translation, independent editing, proofreading, or a combination matched to content risk." },
  { title: "Automated Quality Checks", body: "Terminology, numbers, units, tags, variables, placeholders, punctuation, omissions, inconsistencies, and untranslated text are checked systematically." },
  { title: "Linguistic, Visual, and Functional QA", body: "Final review can include bilingual QA, target proofreading, document-layout review, in-context software testing, link checks, subtitle timing, and multimedia QA." },
  { title: "Feedback Integration", body: "Approved customer feedback is incorporated into terminology, style guides, translation memory, and future project instructions." },
];

const faqs = [
  ["Do you provide both English-to-German and German-to-English translation?", "Yes. English-to-German translation supports companies entering German-speaking markets, while German-to-English translation helps German organizations commercialize products, transfer technical knowledge, and communicate internationally."],
  ["What is the difference between German for Germany and Austrian German?", "Both use standard written German, but differences can occur in terminology, institutional language, legal usage, healthcare, consumer products, and customer communications. Stepes can determine whether targeted adaptation or a separate Austrian version is appropriate."],
  ["What is Swiss Standard German?", "Swiss Standard German is the written form commonly used in professional, governmental, educational, technical, and commercial communication in German-speaking Switzerland. It has distinct spelling and terminology conventions, including ss instead of ß."],
  ["Do German translations require more space than English?", "They often can. German compound words and grammatical structures may increase character length, affecting software interfaces, tables, diagrams, slides, packaging, and subtitles. We address this through concise translation, layout adjustment, and in-context review."],
  ["How do you keep German terminology consistent?", "Stepes can create a centralized termbase with approved terms, definitions, context, abbreviations, prohibited alternatives, and market variants. Terminology is available during translation and can be checked automatically across connected content."],
  ["Can Stepes translate German technical manuals and structured content?", "Yes. We translate operating instructions, service documentation, engineering specifications, safety materials, product catalogs, training, and structured formats including DITA XML, FrameMaker, MadCap Flare, HTML, Markdown, and XLIFF."],
  ["Do you provide German medical and regulatory translation?", "Yes. Stepes translates medical-device, pharmaceutical, clinical, healthcare, and regulatory content. Workflows can include specialist translation, independent review, terminology management, formatting, and quality assurance."],
  ["Can AI be used for German translation?", "Yes, when appropriate for the content and intended use. AI can support lower-risk, internal, high-volume, or time-sensitive content. Technical, legal, medical, regulatory, safety, or high-visibility content may require professional translation or human review."],
  ["Can Stepes localize software and SaaS products into German?", "Yes. We translate interfaces, mobile applications, SaaS platforms, notifications, help content, release notes, developer documentation, and app-store content, with options for terminology management, screenshot review, in-context QA, and continuous localization."],
  ["How much does German translation cost?", "Pricing depends on word count, language direction, subject matter, workflow, translation-memory reuse, file format, formatting, engineering, review level, and turnaround. Straightforward projects can use an instant quote; complex programs receive customized scoping."],
  ["How long does German translation take?", "Turnaround depends on volume, complexity, formatting, terminology readiness, review requirements, and delivery sequence. Stepes supports standard, expedited, phased, rolling, and continuous-delivery models."],
  ["Can our German employees review translations?", "Yes. Customer reviewers can participate in controlled review and approval workflows. Approved feedback can then update terminology, style guides, and translation memory for future projects."],
];

function GermanSystemVisual() {
  return (
    <div className="heroVisual" aria-label="German enterprise content localization system illustration">
      <div className="heroVisualGlow" />
      <div className="visualTopline">
        <span>GERMAN CONTENT SYSTEM</span>
        <span className="visualStatus"><i /> MARKET READY</span>
      </div>
      <div className="visualCanvas">
        <div className="visualDocument">
          <div className="visualDocumentHeader"><span>Technical manual</span><span>DE</span></div>
          <div className="visualLine visualLineWide" />
          <div className="visualLine" />
          <div className="visualDiagram">
            <svg viewBox="0 0 220 124" role="img" aria-label="Technical content diagram">
              <path d="M18 93 61 43h67l31 31h43" fill="none" stroke="#76808c" strokeWidth="2" />
              <rect x="45" y="28" width="88" height="55" rx="8" fill="#fff" stroke="#cbd1d8" />
              <circle cx="88" cy="55" r="13" fill="#fdf2f7" stroke="#c11d63" strokeWidth="2" />
              <path d="M88 42v26M75 55h26" stroke="#c11d63" strokeWidth="2" />
              <path d="M133 55h33M166 55v22" fill="none" stroke="#76808c" strokeWidth="2" />
              <circle cx="166" cy="83" r="6" fill="#fff" stroke="#76808c" strokeWidth="2" />
            </svg>
          </div>
          <div className="visualTermRow"><span>Sicherheits­abschaltung</span><span>Approved</span></div>
        </div>
        <div className="visualSide">
          <div className="visualCard visualCardActive">
            <span className="visualCardLabel">Terminology</span>
            <strong>Safety shutoff</strong>
            <span>Sicherheitsabschaltung</span>
          </div>
          <div className="visualCard">
            <span className="visualCardLabel">Locale</span>
            <strong>de-DE</strong>
            <span>Germany</span>
          </div>
          <div className="visualCard">
            <span className="visualCardLabel">Quality</span>
            <strong>Checks complete</strong>
            <span>No open issues</span>
          </div>
        </div>
      </div>
      <div className="visualFooter">
        <span><CheckIcon size={16} /> Variables protected</span>
        <span><CheckIcon size={16} /> Terminology approved</span>
        <span><CheckIcon size={16} /> Layout verified</span>
      </div>
    </div>
  );
}

function TerminologyMockup() {
  return (
    <div className="termMockup">
      <div className="termTopbar">
        <div><span className="termDot" /><strong>German Product Terminology</strong></div>
        <span className="termCount">Approved terminology library</span>
      </div>
      <div className="termTable" role="table" aria-label="German terminology examples">
        <div className="termRow termHeader" role="row">
          <span>Source term</span><span>Approved German</span><span>Context</span><span>Status</span>
        </div>
        <div className="termRow" role="row">
          <span data-label="Source term">Safety shutoff</span><strong data-label="Approved German">Sicherheitsabschaltung</strong><span data-label="Context">Control system</span><span data-label="Status" className="termApproved">Approved</span>
        </div>
        <div className="termRow" role="row">
          <span data-label="Source term">Charging port</span><strong data-label="Approved German">Ladeanschluss</strong><span data-label="Context">Vehicle UI</span><span data-label="Status" className="termApproved">Approved</span>
        </div>
        <div className="termRow" role="row">
          <span data-label="Source term">Device history record</span><strong data-label="Approved German">Gerätehistorie</strong><span data-label="Context">Quality system</span><span data-label="Status" className="termReview">Needs context</span>
        </div>
        <div className="termRow" role="row">
          <span data-label="Source term">Stepes</span><strong data-label="Approved German">Stepes</strong><span data-label="Context">Brand name</span><span data-label="Status" className="termLocked">Locked</span>
        </div>
      </div>
      <div className="termFooter">
        <span><Icon name="quality" size={18} /> Automated terminology checks enabled</span>
        <span>German market preferences saved</span>
      </div>
    </div>
  );
}

function EnterpriseMockup() {
  return (
    <div className="enterpriseMockup">
      <div className="enterpriseNav">
        <strong>German Program Overview</strong>
        <span>Connected content workflow</span>
      </div>
      <div className="enterpriseMetrics">
        <div><span>CONTENT</span><strong>Connected</strong><small>product and content streams</small></div>
        <div><span>REUSE</span><strong>Governed</strong><small>approved language assets</small></div>
        <div><span>DELIVERY</span><strong>Visible</strong><small>status, review, and handoffs</small></div>
      </div>
      <div className="enterpriseBody">
        <div className="enterpriseProjects">
          <div className="projectRow projectHeader"><span>Content stream</span><span>Progress</span><span>Status</span></div>
          <div className="projectRow"><span>Software release</span><span className="projectProgress" aria-label="Progress"><i style={{ width: "86%" }} /></span><b>Market review</b></div>
          <div className="projectRow"><span>Service manual update</span><span className="projectProgress" aria-label="Progress"><i style={{ width: "72%" }} /></span><b>Translation</b></div>
          <div className="projectRow"><span>German help center</span><span className="projectProgress" aria-label="Progress"><i style={{ width: "100%" }} /></span><b>Delivered</b></div>
          <div className="projectRow"><span>Product launch campaign</span><span className="projectProgress" aria-label="Progress"><i style={{ width: "58%" }} /></span><b>In progress</b></div>
        </div>
        <div className="enterpriseActivity">
          <span className="visualCardLabel">REVIEW ACTIVITY</span>
          <strong>Reviewer decisions captured</strong>
          <p>Approved updates flow into terminology and translation memory for future reuse.</p>
          <div className="activityTags"><span>Market</span><span>Product</span><span>Legal</span></div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer, index, open, onToggle }) {
  const panelId = `german-faq-panel-${index}`;
  const buttonId = `german-faq-button-${index}`;
  return (
    <div className={`faqItem${open ? " faqItemOpen" : ""}`}>
      <button type="button" id={buttonId} className="faqQuestion" onClick={onToggle} aria-expanded={open} aria-controls={panelId}>
        <span>{question}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
      </button>
      <div id={panelId} className="faqAnswer" role="region" aria-labelledby={buttonId} hidden={!open}><p>{answer}</p></div>
    </div>
  );
}

export default function GermanTranslationServicesPage() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      <style>{styles}</style>
      <main className="germanPage">
        <section className="hero" id="top">
          <div className="shell heroGrid">
            <div className="heroCopy">
              <h1>Professional German Translation Services</h1>
              <p className="heroLead">Translate technical, regulated, digital, and business-critical content between German and English with native-language linguists, industry specialists, AI-enabled workflows, and enterprise quality controls.</p>
              <div className="heroActions">
                <PrimaryButton href="https://app.stepes.com/quote/">Get an Instant Quote</PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to an Expert</SecondaryButton>
              </div>
              <div className="heroAssurance">
                <span><CheckIcon /> English to German</span>
                <span><CheckIcon /> German to English</span>
                <span><CheckIcon /> DACH market expertise</span>
              </div>
            </div>
            <GermanSystemVisual />
          </div>
        </section>

        <section className="trustStrip" aria-label="Stepes quality and delivery capabilities">
          <div className="shell trustGrid">
            {["ISO 17100", "ISO 9001", "ISO 13485", "100+ Languages", "AI + Human Expertise"].map((item) => <div key={item}>{item}</div>)}
          </div>
        </section>

        <section className="section marketSection" id="german-market">
          <div className="shell marketGrid">
            <div>
              <h2>Reach Germany and German-Speaking Markets With Confidence</h2>
            </div>
            <div className="marketCopy">
              <p className="intro">Germany is Europe’s largest economy and one of the world’s most important markets for advanced manufacturing, medical technology, software, automotive engineering, chemicals, energy, and industrial innovation.</p>
              <p>For companies entering Germany, professional translation supports product adoption, regulatory readiness, digital engagement, and long-term customer relationships. For German organizations expanding internationally, accurate German-to-English translation helps transfer technical knowledge and communicate with customers, partners, regulators, and employees worldwide.</p>
              <div className="marketFacts">
                <div><strong>Europe’s largest economy</strong><span>A central market for global enterprise growth</span></div>
                <div><strong>Leading medtech market</strong><span>High-value medical and regulatory content</span></div>
                <div><strong>Major digital language</strong><span>German is used by approximately 5.9% of websites with a known content language</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="dach-localization">
          <div className="shell">
            <SectionHeader title="German Localization for Germany, Austria, and Switzerland" intro="Written German is widely understood across German-speaking Europe, but terminology, spelling, institutional language, formatting, tone, and customer expectations can vary by market." align="center" />
            <div className="dachGrid">
              <article className="dachPanel dachPrimary">
                <span className="localeCode">de-DE</span>
                <h3>German for Germany</h3>
                <p>The primary locale for most commercial, technical, software, medical, regulatory, and customer-facing programs.</p>
                <ul><li>Technical and manufacturing content</li><li>Software and digital products</li><li>Medical and regulated materials</li><li>Business, legal, and customer communications</li></ul>
              </article>
              <article className="dachPanel">
                <span className="localeCode">de-AT</span>
                <h3>Austrian German</h3>
                <p>Targeted adaptation for Austrian terminology, institutional usage, healthcare, legal language, consumer products, and customer communications.</p>
                <p className="panelNote">Stepes helps determine when local adaptation adds value and when a shared German version can be used efficiently.</p>
              </article>
              <article className="dachPanel">
                <span className="localeCode">de-CH</span>
                <h3>Swiss Standard German</h3>
                <p>Professional written German adapted for Swiss spelling, terminology, formatting, regulatory conventions, and multilingual market requirements.</p>
                <p className="panelNote">Swiss Standard German uses <strong>ss</strong> rather than <strong>ß</strong> and is distinct from spoken Swiss German dialects.</p>
              </article>
            </div>
            <div className="dachFooter"><span>Also supporting German-language content for Liechtenstein, Luxembourg, and German-speaking Belgium.</span></div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="shell">
            <SectionHeader title="German Translation Services for Every Content Type" intro="Enterprise content spans documents, software, websites, training, regulatory files, multimedia, and connected product experiences. Stepes manages the complete German content lifecycle." />
            <div className="serviceRows">
              {services.map((service) => (
                <article className="serviceRow" key={service.title}>
                  <div className="iconBox"><Icon name={service.icon} /></div>
                  <div>
                    <h3>{service.title}</h3>
                    <p>{service.body}</p>
                  </div>
                  <EditorialLink href={service.link}>{service.label}</EditorialLink>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section darkSection languageDirections" id="language-directions">
          <div className="shell">
            <SectionHeader title="Expert English-to-German and German-to-English Translation" intro="Stepes helps international organizations enter German-speaking markets and enables German companies to commercialize products and transfer knowledge worldwide." dark />
            <div className="directionGrid">
              <article>
                <span className="directionLabel">EN → DE</span>
                <h3>English-to-German Translation</h3>
                <p>Natural German for product launches, technical documentation, software, medical content, websites, legal materials, training, marketing, and customer support.</p>
                <ul><li>Native German target-language linguists</li><li>Market-appropriate terminology and tone</li><li>Consistency across connected content</li></ul>
              </article>
              <article>
                <span className="directionLabel">DE → EN</span>
                <h3>German-to-English Translation</h3>
                <p>Clear English for engineering documentation, scientific reports, global regulatory use, patents, legal content, supplier materials, corporate communications, and international knowledge transfer.</p>
                <ul><li>Accurate interpretation of long noun phrases</li><li>Subject knowledge for technical ambiguity</li><li>Readable English without loss of meaning</li></ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section" id="german-language-expertise">
          <div className="shell complexityGrid">
            <div className="complexityIntro">
              <h2>Built for the Linguistic Complexity of German</h2>
              <p>German structure affects terminology, interface design, document layout, readability, and consistency. Our process addresses these issues before they become downstream quality problems.</p>
            </div>
            <div className="complexityRows">
              {languageChallenges.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="industries">
          <div className="shell">
            <SectionHeader title="German Translation Expertise for High-Value Industries" intro="We combine German language expertise with specialized resources for sectors where terminology, usability, safety, and regulatory accuracy matter most." align="center" />
            <div className="industryGrid">
              {industries.map((industry) => (
                <article className="industryItem" key={industry.title}>
                  <div className="industryIcon"><Icon name={industry.icon} /></div>
                  <h3>{industry.title}</h3>
                  <p>{industry.body}</p>
                </article>
              ))}
            </div>
            <div className="additionalIndustries"><strong>Additional expertise:</strong><span>Aerospace</span><span>Banking</span><span>Insurance</span><span>Retail</span><span>Telecommunications</span><span>Travel</span><span>Media</span><span>Professional Services</span></div>
          </div>
        </section>

        <section className="section terminologySection" id="terminology-management">
          <div className="shell termGrid">
            <div className="termCopy">
              <h2>Control German Terminology Across Products and Content</h2>
              <p className="intro">A centralized German termbase keeps product names, technical terms, abbreviations, interface language, medical terminology, and market variants consistent across every customer touchpoint.</p>
              <div className="checkList">
                {["Approved German and English equivalents", "Definitions, context, and usage examples", "Do-not-translate and prohibited terms", "German, Austrian, and Swiss market variants", "Automated terminology checks", "Reviewer decisions captured for reuse"].map((item) => <span key={item}><CheckIcon />{item}</span>)}
              </div>
              <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
            </div>
            <TerminologyMockup />
          </div>
        </section>

        <section className="section darkSection workflowSection" id="ai-human-workflows">
          <div className="shell">
            <SectionHeader eyebrow="RISK-BASED DELIVERY" title="The Right German Translation Workflow for Every Content Type" intro="Stepes matches AI, professional linguists, review depth, terminology, and quality controls to the audience, purpose, risk, lifecycle, and business value of each content type." dark align="center" />
            <div className="workflowGrid">
              {workflow.map((step) => <article key={step.number}><span className="workflowNumber">{step.number}</span><h3>{step.title}</h3><p>{step.body}</p></article>)}
            </div>
            <div className="workflowFooter">
              <span>No one-size-fits-all workflow</span>
              <EditorialLink href="https://www.stepes.com/ai-machine-learning-translation-services/" inverse>AI and Machine Learning Translation</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section memorySection" id="translation-memory">
          <div className="shell memoryGrid">
            <div className="memoryVisual">
              <div className="memoryCore"><Icon name="memory" size={32} /><strong>Approved German Content</strong><span>Translation memory + terminology</span></div>
              <div className="memoryOrbit orbitOne"><span>Manuals</span></div>
              <div className="memoryOrbit orbitTwo"><span>Software</span></div>
              <div className="memoryOrbit orbitThree"><span>Websites</span></div>
              <div className="memoryOrbit orbitFour"><span>Training</span></div>
            </div>
            <div>
              <h2>Reuse Approved German Content Across Product Generations</h2>
              <p className="intro">Translation memory identifies previously approved content across updates, manuals, software releases, websites, regulatory submissions, and training programs.</p>
              <p>Stepes combines translation memory with terminology and linguistic review so reuse improves speed, consistency, and cost efficiency without introducing outdated or contextually unsuitable translations.</p>
              <EditorialLink href="https://www.stepes.com/translation-memory/">Translation Memory</EditorialLink>
            </div>
          </div>
        </section>

        <section className="section sectionSoft" id="enterprise-workflows">
          <div className="shell">
            <SectionHeader title="Manage German Translation at Enterprise Scale" intro="Centralize German content across teams, product lines, reviewers, systems, and release schedules with connected workflows and clear program visibility." />
            <div className="enterpriseLayout">
              <div className="enterpriseCapabilities">
                <article><Icon name="document" /><div><h3>Translation Management Portal</h3><p>Manage requests, files, quotes, status, deliveries, review, user access, and language assets in one place.</p><EditorialLink href="https://www.stepes.com/translation-management-portal/">Translation Management Portal</EditorialLink></div></article>
                <article><Icon name="api" /><div><h3>Translation API</h3><p>Connect content systems and applications for automated submission, status tracking, file exchange, and delivery.</p><EditorialLink href="https://www.stepes.com/developers/translation-api/">Translation API</EditorialLink></div></article>
                <article><Icon name="review" /><div><h3>Customer Review and Approval</h3><p>Capture reviewer comments, approvals, terminology decisions, and feedback in a controlled workflow.</p></div></article>
                <article><Icon name="analytics" /><div><h3>Reporting and Analytics</h3><p>Track volume, spend, turnaround, reuse, status, and demand across business units and content programs.</p><EditorialLink href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting and Analytics</EditorialLink></div></article>
              </div>
              <EnterpriseMockup />
            </div>
          </div>
        </section>

        <section className="section" id="quality-process">
          <div className="shell qualityGrid">
            <div className="qualityIntro">
              <h2>Quality Controls Built Around Your German Content</h2>
              <p>Translation quality depends on understanding the content, selecting the right resources, preparing terminology, defining the workflow, checking the output, and incorporating customer feedback.</p>
            </div>
            <div className="qualityTimeline">
              {qualitySteps.map((step, index) => (
                <article key={step.title}>
                  <span className="qualityNumber">{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{step.title}</h3><p>{step.body}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section whySection" id="why-stepes">
          <div className="shell">
            <SectionHeader title="Why Enterprises Choose Stepes for German Translation" intro="Stepes combines language expertise, subject-matter resources, flexible workflows, and connected technology to support individual projects and global programs." align="center" />
            <div className="whyGrid">
              <article><Icon name="engineering" /><h3>Subject-Matter Expertise</h3><p>Specialized German resources for technical, medical, legal, software, manufacturing, and regulated content.</p></article>
              <article><Icon name="quality" /><h3>AI + Human Workflows</h3><p>Workflows configured for each content type’s audience, risk, quality requirements, and business purpose.</p></article>
              <article><Icon name="terminology" /><h3>Language Governance</h3><p>Terminology, translation memory, style guides, automated QA, and reviewer feedback managed across programs.</p></article>
              <article><Icon name="api" /><h3>Scalable Technology</h3><p>Portals, APIs, continuous localization, in-context review, reporting, and complete content production.</p></article>
            </div>
          </div>
        </section>

        <section className="section sectionSoft commercialSection" id="pricing-turnaround">
          <div className="shell commercialGrid">
            <article>
              <h2>German Translation Pricing</h2>
              <p>Costs depend on word count, language direction, subject matter, workflow, review level, translation-memory reuse, file format, engineering, desktop publishing, multimedia production, and turnaround.</p>
              <ul><li>Instant quoting for straightforward file-based projects</li><li>Customized scoping for technical, medical, legal, software, and enterprise programs</li><li>Translation-memory analysis for approved content reuse</li><li>Complete production estimates for layout, testing, or multimedia</li></ul>
              <PrimaryButton href="https://app.stepes.com/quote/">Get an Instant Quote</PrimaryButton>
            </article>
            <article>
              <h2>Turnaround and Delivery Planning</h2>
              <p>Delivery schedules reflect content volume, complexity, file preparation, terminology readiness, review requirements, formatting, engineering, and review and approval timing.</p>
              <div className="deliveryOptions">
                <span>Standard delivery</span><span>Expedited delivery</span><span>Phased delivery</span><span>Rolling delivery</span><span>Continuous localization</span>
              </div>
              <p className="commercialNote">For large programs, priority content can be delivered first while the remaining files continue through translation, review, and production.</p>
            </article>
          </div>
        </section>

        <section className="section faqSection" id="faqs">
          <div className="shell faqGrid">
            <div className="faqIntro">
              <h2>German Translation FAQs</h2>
              <p>Practical answers about German locales, workflows, terminology, formats, pricing, review, and delivery.</p>
              <SecondaryButton href="https://www.stepes.com/contact-us/">Ask Our German Team</SecondaryButton>
            </div>
            <div className="faqPanel">
              {faqs.map(([question, answer], index) => <FAQItem key={question} question={question} answer={answer} index={index} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />)}
            </div>
          </div>
        </section>

        <section className="relatedSection" id="related-resources">
          <div className="shell relatedGrid">
            <div><h2>Explore German Translation Solutions</h2></div>
            <div className="relatedLinks">
              <EditorialLink href="https://www.stepes.com/german-technical-translation-services/">German Technical Translation</EditorialLink>
              <EditorialLink href="https://www.stepes.com/german-medical-translation-services/">German Medical Translation</EditorialLink>
              <EditorialLink href="https://www.stepes.com/software-translation-services/">Software &amp; SaaS Translation Services</EditorialLink>
              <EditorialLink href="https://www.stepes.com/translation-languages/">Translation Languages</EditorialLink>
            </div>
          </div>
        </section>

        <section className="finalCta">
          <div className="shell finalCtaGrid">
            <div className="finalCtaCopy">
              <h2>Translate Your German Content With Confidence</h2>
              <p>Combine native German linguists, industry expertise, AI-enabled workflows, terminology governance, and enterprise quality controls for everything from individual documents to global content programs.</p>
              <div className="heroActions">
                <PrimaryButton href="https://app.stepes.com/quote/">Get an Instant Quote</PrimaryButton>
                <SecondaryButton href="https://www.stepes.com/contact-us/">Talk to Our German Team</SecondaryButton>
              </div>
            </div>
            <div className="ctaArt" aria-hidden="true">
              <svg viewBox="0 0 500 280" fill="none">
                <path d="M53 230c59-18 81-91 145-91 45 0 55 37 104 37 51 0 67-72 147-84" stroke="#c11d63" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="122" cy="91" r="37" fill="#fdf2f7" stroke="#c11d63" strokeWidth="3"/>
                <circle cx="287" cy="76" r="32" fill="#f7f8fa" stroke="#8d96a0" strokeWidth="3"/>
                <circle cx="404" cy="151" r="38" fill="#fdf2f7" stroke="#c11d63" strokeWidth="3"/>
                <path d="M65 220c14-58 42-87 84-87s71 31 84 87M232 220c10-51 34-77 68-77 37 0 60 25 72 77M338 220c13-43 36-65 70-65 30 0 54 21 67 65" fill="#fff" stroke="#8d96a0" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M138 92c-6 15-26 15-32 0M299 76c-5 13-22 13-27 0M416 152c-7 15-26 15-32 0" stroke="#8d96a0" strokeWidth="3" strokeLinecap="round"/>
                <path d="M197 47h82M197 59h54M354 35h80M354 47h55" stroke="#cbd1d8" strokeWidth="3" strokeLinecap="round"/>
                <circle cx="180" cy="47" r="5" fill="#c11d63"/><circle cx="337" cy="35" r="5" fill="#c11d63"/>
              </svg>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const styles = `
:root{--magenta:#C11D63;--magenta-dark:#9F1D55;--magenta-deep:#7A1542;--blush:#FDF2F7;--pink-light:#F2A7C6;--ink:#171A1F;--body:#4F5661;--muted:#6F7782;--line:#E3E6EA;--soft:#F6F7F9;--dark:#181A20;--dark-panel:#22252D;--white:#FFFFFF;--shadow:0 22px 60px rgba(24,26,32,.09);}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:#fff;color:var(--ink);font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;-webkit-font-smoothing:antialiased}
a{color:inherit}
button{font:inherit}
.germanPage{overflow:hidden;background:#fff}
.shell{width:min(100%,1392px);max-width:1392px;margin:0 auto;padding-left:56px;padding-right:56px}
.section{padding:96px 0}
.sectionSoft{background:var(--soft)}
.eyebrow{margin:0 0 16px!important;color:var(--magenta)!important;font-size:11px!important;line-height:1.35!important;font-weight:600!important;letter-spacing:.15em!important;text-transform:uppercase!important}
.eyebrowDark{color:var(--pink-light)!important}
h1,h2,h3{margin:0;color:var(--ink);font-weight:600;letter-spacing:-.028em}
h1{font-size:48px;line-height:1.06;max-width:650px}
h2{font-size:36px;line-height:1.14}
h3{font-size:24px;line-height:1.24;letter-spacing:-.02em}
p{margin:0;color:var(--body);font-size:16px;line-height:1.72}
.intro{font-size:18px;line-height:1.68;color:#363C45}
.introInverse{color:#D8DCE3}
.sectionHeader{margin-bottom:52px}
.sectionHeaderLeft{max-width:820px}
.sectionHeaderCenter{text-align:center;max-width:920px;margin-left:auto;margin-right:auto}
.sectionHeader h2{max-width:760px}
.sectionHeaderCenter h2,.sectionHeaderCenter .intro{margin-left:auto;margin-right:auto}
.sectionHeader .intro{margin-top:20px;max-width:820px}
.button{min-height:50px;display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:13px 22px;border-radius:999px;text-decoration:none;font-size:15px;font-weight:600;transition:.2s ease;white-space:nowrap}
.buttonPrimary,.buttonPrimary:link,.buttonPrimary:visited{background:var(--magenta);color:#fff!important;border:1px solid var(--magenta);box-shadow:0 10px 28px rgba(193,29,99,.2)}
.buttonPrimary *{color:#fff!important;stroke:#fff!important}
.buttonPrimary:hover,.buttonPrimary:focus-visible{background:var(--magenta-dark);color:#fff!important;border-color:var(--magenta-dark);transform:translateY(-1px)}
.buttonPrimary:active{background:var(--magenta-deep);color:#fff!important;transform:translateY(0)}
.buttonSecondary{background:#fff;color:#262B33;border:1px solid #D6DAE0}
.buttonSecondary:hover,.buttonSecondary:focus-visible{border-color:#AEB5BE;background:#FAFAFB;transform:translateY(-1px)}
.buttonSecondaryDark{background:transparent;color:#fff;border-color:#555C68}
.buttonSecondaryDark:hover,.buttonSecondaryDark:focus-visible{background:#272B34;border-color:#757E8B}
.button:focus-visible,.editorialLink:focus-visible,.faqQuestion:focus-visible{outline:3px solid rgba(193,29,99,.24);outline-offset:3px}
.editorialLink{display:inline-flex;align-items:center;gap:7px;color:var(--magenta);font-size:16px;font-weight:600;text-decoration:none;line-height:1.4}
.editorialLink svg{transition:transform .2s ease}
.editorialLink:hover svg{transform:translateX(3px)}
.editorialLinkInverse{color:#fff}
.hero{padding:102px 0 94px;background:linear-gradient(180deg,#fff 0%,#fff 72%,#FBFBFC 100%)}
.heroGrid{display:grid;grid-template-columns:minmax(0,1fr) minmax(450px,.88fr);gap:72px;align-items:center}
.heroLead{font-size:18px;line-height:1.72;max-width:675px;margin-top:24px;color:#424954}
.heroActions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}
.heroAssurance{display:flex;flex-wrap:wrap;gap:18px 24px;margin-top:28px}
.heroAssurance span{display:flex;align-items:center;gap:8px;color:#525A65;font-size:16px}
.heroAssurance svg{color:var(--magenta)}
.heroVisual{position:relative;min-height:520px;background:#F7F8FA;border:1px solid #E0E4E8;border-radius:30px;padding:24px;box-shadow:var(--shadow);overflow:hidden}
.heroVisualGlow{position:absolute;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(193,29,99,.11),rgba(193,29,99,0) 69%);right:-90px;top:-100px}
.visualTopline,.visualFooter{position:relative;display:flex;align-items:center;justify-content:space-between;font-size:11px;letter-spacing:.1em;font-weight:600;color:#6B737E}
.visualStatus{display:flex;align-items:center;gap:7px;color:#44504A}.visualStatus i{width:7px;height:7px;border-radius:50%;background:#3D9A67}
.visualCanvas{position:relative;display:grid;grid-template-columns:1.28fr .72fr;gap:14px;margin-top:25px;min-width:0}
.visualDocument{min-width:0;max-width:100%;background:#fff;border:1px solid #DCE1E6;border-radius:20px;padding:18px;min-height:360px}
.visualDocumentHeader{display:flex;justify-content:space-between;font-size:13px;color:#69717C}.visualDocumentHeader span:last-child{color:var(--magenta);font-weight:600}
.visualLine{height:8px;background:#E8EBEE;border-radius:5px;margin-top:13px;width:66%}.visualLineWide{width:89%;margin-top:23px}
.visualDiagram{margin-top:22px;padding:8px;background:#FAFAFB;border-radius:14px}.visualDiagram svg{display:block;width:100%;height:auto}
.visualTermRow{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-top:20px;padding:12px 13px;border:1px solid #E3E6EA;border-radius:12px;font-size:14px;color:#3A414A}.visualTermRow span:first-child{min-width:0;overflow-wrap:anywhere}.visualTermRow span:last-child{color:#2E8055;font-weight:600}
.visualSide{min-width:0;max-width:100%;display:flex;flex-direction:column;gap:12px}
.visualCard{min-width:0;max-width:100%;padding:16px;background:#fff;border:1px solid #DCE1E6;border-radius:16px;min-height:99px}.visualCardActive{border-color:#D78BB0;background:#FFF8FB}
.visualCardLabel{display:block;color:#7B838D;font-size:10px;letter-spacing:.11em;font-weight:600;margin-bottom:9px}.visualCard strong{display:block;font-size:14px;color:#2D333B;margin-bottom:5px}.visualCard>span:last-child{font-size:12px;color:#68717C;line-height:1.35}
.visualFooter{margin-top:22px;justify-content:flex-start;gap:16px;flex-wrap:wrap;letter-spacing:0;font-size:11px}.visualFooter span{display:flex;align-items:center;gap:5px}.visualFooter svg{color:#2E8055}
.trustStrip{border-top:1px solid var(--line);border-bottom:1px solid var(--line);background:#fff}
.trustGrid{display:grid;grid-template-columns:repeat(5,1fr)}.trustGrid div{padding:21px 12px;text-align:center;font-size:13px;font-weight:600;color:#4E5660;border-right:1px solid var(--line)}.trustGrid div:last-child{border-right:0}
.marketGrid{display:grid;grid-template-columns:minmax(320px,.74fr) minmax(0,1.26fr);gap:95px;align-items:start}
.marketGrid h2{max-width:520px}.marketCopy>p+p{margin-top:18px;max-width:760px}
.marketFacts{display:grid;grid-template-columns:repeat(3,1fr);margin-top:38px;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.marketFacts div{padding:24px 22px 24px 0;border-right:1px solid var(--line)}.marketFacts div+div{padding-left:22px}.marketFacts div:last-child{border-right:0}.marketFacts strong{display:block;font-size:17px;line-height:1.35;color:#23282F;font-weight:600}.marketFacts span{display:block;margin-top:8px;color:#69717B;font-size:16px;line-height:1.55}
.dachGrid{display:grid;grid-template-columns:1.12fr 1fr 1fr;gap:20px}.dachPanel{background:#fff;border:1px solid #DEE2E6;border-radius:24px;padding:32px}.dachPrimary{border-top:3px solid var(--magenta)}.localeCode{display:inline-flex;align-items:center;justify-content:center;padding:7px 10px;background:#F1F3F5;border-radius:8px;color:#535B66;font-size:12px;font-weight:600;letter-spacing:.06em}.dachPanel h3{margin-top:22px}.dachPanel p{margin-top:14px}.dachPanel ul{margin:20px 0 0;padding:0;list-style:none}.dachPanel li{position:relative;padding-left:18px;margin-top:10px;color:#4F5661;font-size:16px;line-height:1.5}.dachPanel li:before{content:"";position:absolute;left:0;top:.68em;width:6px;height:6px;border-radius:50%;background:var(--magenta)}.panelNote{padding-top:18px;border-top:1px solid var(--line)}.dachFooter{margin-top:22px;text-align:center;color:#606974;font-size:16px;line-height:1.55}
.serviceRows{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.serviceRow{display:grid;grid-template-columns:54px minmax(0,1fr);gap:18px 18px;padding:34px 34px 34px 0;border-bottom:1px solid var(--line);position:relative}.serviceRow:nth-child(odd){border-right:1px solid var(--line);padding-right:42px}.serviceRow:nth-child(even){padding-left:42px}.serviceRow .editorialLink{grid-column:2}.serviceRow h3{margin-top:2px}.serviceRow p{margin-top:12px}.iconBox{width:48px;height:48px;border-radius:14px;background:#F4F5F7;color:#4D5662;display:flex;align-items:center;justify-content:center}
.darkSection{background:var(--dark);color:#fff}.darkSection h2,.darkSection h3{color:#fff}.darkSection p{color:#CDD2D9}
.directionGrid{display:grid;grid-template-columns:1fr 1fr;border:1px solid #3A3E47;border-radius:28px;overflow:hidden}.directionGrid article{padding:40px}.directionGrid article+article{border-left:1px solid #3A3E47}.directionLabel{display:inline-block;color:var(--pink-light);font-size:13px;font-weight:600;letter-spacing:.14em;margin-bottom:20px}.directionGrid p{margin-top:16px}.directionGrid ul{margin:22px 0 0;padding:0;list-style:none}.directionGrid li{position:relative;padding-left:18px;margin-top:10px;color:#D9DDE3;font-size:16px;line-height:1.55}.directionGrid li:before{content:"";position:absolute;left:0;top:.7em;width:6px;height:6px;border-radius:50%;background:var(--pink-light)}
.complexityGrid{display:grid;grid-template-columns:minmax(300px,.75fr) minmax(0,1.25fr);gap:92px;align-items:start}.complexityIntro{position:sticky;top:32px}.complexityIntro p{margin-top:20px;max-width:520px}.complexityRows{border-top:1px solid var(--line)}.complexityRows article{display:grid;grid-template-columns:minmax(230px,.72fr) minmax(0,1.28fr);gap:36px;padding:29px 0;border-bottom:1px solid var(--line)}.complexityRows p{line-height:1.68}
.industryGrid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #DDE1E5;border-left:1px solid #DDE1E5;background:#fff;border-radius:26px;overflow:hidden}.industryItem{padding:32px;border-right:1px solid #DDE1E5;border-bottom:1px solid #DDE1E5;min-height:280px}.industryIcon{width:44px;height:44px;display:flex;align-items:center;justify-content:center;color:var(--magenta);border:1px solid #E0E3E7;border-radius:13px;background:#fff}.industryItem h3{margin-top:22px}.industryItem p{margin-top:13px}.additionalIndustries{display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:12px 20px;margin-top:28px;color:#626B76;font-size:16px;line-height:1.5}.additionalIndustries strong{color:#2C3239;font-weight:600}.additionalIndustries span{position:relative}.additionalIndustries span+span:before{content:"";position:absolute;left:-11px;top:.48em;width:3px;height:3px;border-radius:50%;background:#A6ADB5}
.termGrid{display:grid;grid-template-columns:minmax(330px,.78fr) minmax(0,1.22fr);gap:74px;align-items:center}.termCopy .intro{margin-top:20px}.checkList{display:grid;gap:12px;margin:28px 0}.checkList span{display:flex;align-items:flex-start;gap:11px;color:#454D57;font-size:16px;line-height:1.5}.checkList svg{color:var(--magenta);flex:0 0 auto;margin-top:2px}
.termMockup{border:1px solid #DDE1E5;border-radius:28px;background:#fff;box-shadow:var(--shadow);overflow:hidden}.termTopbar{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--line);font-size:14px;color:#2D333B}.termTopbar>div{display:flex;align-items:center;gap:9px}.termDot{width:8px;height:8px;border-radius:50%;background:var(--magenta)}.termCount{color:#707985;font-size:12px}.termTable{padding:0 22px}.termRow{display:grid;grid-template-columns:1.1fr 1.35fr .9fr .72fr;gap:14px;padding:17px 0;border-bottom:1px solid var(--line);align-items:center;font-size:14px;color:#5B6470}.termRow strong{color:#272D34;font-size:14px}.termHeader{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#7A838D}.termApproved,.termReview,.termLocked{justify-self:start;border-radius:999px;padding:5px 8px;font-size:10px;font-weight:600}.termApproved{background:#EAF6EF;color:#2D7A51}.termReview{background:#FFF4E2;color:#916420}.termLocked{background:#F1F2F4;color:#545D67}.termFooter{display:flex;justify-content:space-between;gap:18px;padding:17px 22px;background:#F8F9FA;color:#68717B;font-size:11px}.termFooter span:first-child{display:flex;align-items:center;gap:8px}.termFooter svg{color:var(--magenta)}
.workflowGrid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid #3B3F48;border-bottom:1px solid #3B3F48}.workflowGrid article{padding:34px 28px 34px 0;border-right:1px solid #3B3F48}.workflowGrid article+article{padding-left:28px}.workflowGrid article:last-child{border-right:0}.workflowNumber{display:block;color:var(--pink-light);font-size:13px;font-weight:600;letter-spacing:.13em;margin-bottom:20px}.workflowGrid p{margin-top:13px}.workflowFooter{display:flex;justify-content:space-between;align-items:center;margin-top:26px;color:#AEB5BE;font-size:16px}
.memoryGrid{display:grid;grid-template-columns:1fr 1fr;gap:90px;align-items:center}.memoryGrid h2{max-width:580px}.memoryGrid .intro{margin-top:20px}.memoryGrid p+p{margin-top:18px}.memoryGrid .editorialLink{margin-top:26px}.memoryVisual{position:relative;min-height:480px;background:#F7F8FA;border:1px solid #E0E4E8;border-radius:30px;display:flex;align-items:center;justify-content:center;overflow:hidden}.memoryVisual:before,.memoryVisual:after{content:"";position:absolute;border:1px solid #D9DEE3;border-radius:50%}.memoryVisual:before{width:315px;height:315px}.memoryVisual:after{width:430px;height:430px}.memoryCore{position:relative;z-index:2;width:190px;height:190px;border-radius:50%;background:#fff;border:2px solid var(--magenta);box-shadow:0 18px 50px rgba(24,26,32,.08);display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:25px}.memoryCore svg{color:var(--magenta)}.memoryCore strong{font-size:16px;margin-top:12px}.memoryCore span{font-size:12px;color:#6D7680;margin-top:7px}.memoryOrbit{position:absolute;z-index:3;padding:10px 13px;background:#fff;border:1px solid #DDE1E5;border-radius:10px;box-shadow:0 8px 25px rgba(24,26,32,.07);font-size:13px;font-weight:600;color:#4A525D}.orbitOne{top:56px;left:84px}.orbitTwo{top:95px;right:54px}.orbitThree{bottom:70px;right:74px}.orbitFour{bottom:90px;left:55px}
.enterpriseLayout{display:grid;grid-template-columns:.86fr 1.14fr;gap:54px;align-items:center}.enterpriseCapabilities{border-top:1px solid #DDE1E5}.enterpriseCapabilities article{display:grid;grid-template-columns:34px minmax(0,1fr);gap:18px;padding:23px 0;border-bottom:1px solid #DDE1E5}.enterpriseCapabilities>article>svg{color:var(--magenta);margin-top:2px}.enterpriseCapabilities h3{font-size:20px}.enterpriseCapabilities p{margin-top:8px}.enterpriseCapabilities .editorialLink{margin-top:12px}
.enterpriseMockup{background:#fff;border:1px solid #DCE0E4;border-radius:28px;box-shadow:var(--shadow);overflow:hidden}.enterpriseNav{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--line);font-size:13px}.enterpriseNav span{color:#6F7883}.enterpriseMetrics{display:grid;grid-template-columns:repeat(3,1fr);border-bottom:1px solid var(--line)}.enterpriseMetrics div{padding:20px 22px;border-right:1px solid var(--line)}.enterpriseMetrics div:last-child{border-right:0}.enterpriseMetrics span{display:block;font-size:9px;letter-spacing:.12em;color:#7A838E;font-weight:600}.enterpriseMetrics strong{display:block;font-size:24px;margin-top:7px}.enterpriseMetrics small{display:block;font-size:11px;color:#737C87;margin-top:4px}.enterpriseBody{display:grid;grid-template-columns:1.45fr .55fr}.enterpriseProjects{padding:0 22px}.projectRow{display:grid;grid-template-columns:1.25fr .9fr .65fr;gap:13px;align-items:center;padding:16px 0;border-bottom:1px solid var(--line);font-size:12px;color:#58616C}.projectHeader{font-size:9px;text-transform:uppercase;letter-spacing:.11em;font-weight:600;color:#7A838E}.projectProgress{display:block;height:6px;background:#EEF0F2;border-radius:4px;overflow:hidden}.projectProgress i{display:block;height:100%;background:#C7CBD1;border-radius:4px}.projectRow b{font-weight:600;color:#4E5761;font-size:11px}.enterpriseActivity{padding:22px;border-left:1px solid var(--line);background:#FAFAFB}.enterpriseActivity strong{display:block;font-size:16px;line-height:1.45}.enterpriseActivity p{font-size:16px;line-height:1.6;margin-top:9px}.activityTags{display:flex;flex-wrap:wrap;gap:7px;margin-top:20px}.activityTags span{display:inline-flex;align-items:center;justify-content:center;padding:7px 9px;border-radius:999px;background:#EDEFF2;color:#555E68;font-size:10px;font-weight:600}.activityTags span:first-child{background:var(--blush);color:var(--magenta)}
.qualityGrid{display:grid;grid-template-columns:minmax(300px,.72fr) minmax(0,1.28fr);gap:92px;align-items:start}.qualityIntro{position:sticky;top:32px}.qualityIntro p{margin-top:20px}.qualityTimeline{position:relative}.qualityTimeline:before{content:"";position:absolute;left:22px;top:18px;bottom:20px;width:1px;background:#D9DDE1}.qualityTimeline article{position:relative;display:grid;grid-template-columns:46px minmax(0,1fr);gap:24px;padding:0 0 31px}.qualityTimeline article:last-child{padding-bottom:0}.qualityNumber{position:relative;z-index:2;width:46px;height:46px;border-radius:50%;border:1px solid #D7DCE0;background:#fff;display:flex;align-items:center;justify-content:center;color:var(--magenta);font-size:12px;font-weight:600}.qualityTimeline h3{font-size:21px;margin-top:8px}.qualityTimeline p{margin-top:9px;max-width:720px}
.whySection{background:#fff}.whyGrid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.whyGrid article{padding:32px 30px;border-right:1px solid var(--line)}.whyGrid article:last-child{border-right:0}.whyGrid svg{color:var(--magenta)}.whyGrid h3{font-size:20px;margin-top:20px}.whyGrid p{margin-top:11px}
.commercialGrid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.commercialGrid>article{background:#fff;border:1px solid #DDE1E5;border-radius:28px;padding:40px}.commercialGrid h2{font-size:32px}.commercialGrid p{margin-top:17px}.commercialGrid ul{margin:24px 0 28px;padding:0;list-style:none}.commercialGrid li{position:relative;padding-left:20px;margin-top:12px;color:#4F5661;font-size:16px;line-height:1.55}.commercialGrid li:before{content:"";position:absolute;left:0;top:.68em;width:6px;height:6px;border-radius:50%;background:var(--magenta)}.deliveryOptions{display:flex;flex-wrap:wrap;gap:10px;margin-top:26px}.deliveryOptions span{padding:9px 12px;border-radius:9px;background:#F2F3F5;color:#4F5862;font-size:16px;font-weight:600}.commercialNote{padding-top:24px;border-top:1px solid var(--line)}
.faqGrid{display:grid;grid-template-columns:minmax(300px,.68fr) minmax(0,1.32fr);gap:80px;align-items:start}.faqIntro{position:sticky;top:32px}.faqIntro p{margin-top:18px;max-width:430px}.faqIntro .button{margin-top:28px}.faqPanel{border-top:1px solid var(--line)}.faqItem{border-bottom:1px solid var(--line)}.faqQuestion{width:100%;overflow:hidden;display:flex;align-items:center;justify-content:space-between;gap:24px;padding:25px 0;background:transparent;border:0;text-align:left;color:#242A31;font-size:18px;font-weight:600;cursor:pointer}.faqQuestion svg{flex:0 0 auto;transition:transform .2s ease;color:#707984}.faqItemOpen .faqQuestion svg{transform:rotate(45deg);color:var(--magenta)}.faqAnswer{padding:0 54px 25px 0}.faqAnswer p{max-width:820px}
.relatedSection{padding:70px 0;border-top:1px solid var(--line);background:#FAFAFB}.relatedGrid{display:grid;grid-template-columns:.75fr 1.25fr;gap:70px;align-items:center}.relatedGrid h2{font-size:30px}.relatedLinks{display:grid;grid-template-columns:1fr 1fr;gap:20px 38px}.relatedLinks .editorialLink{padding-bottom:12px;border-bottom:1px solid #DDE1E5;justify-content:space-between}
.finalCta{padding:84px 0;background:linear-gradient(105deg,#FDF2F7 0%,#F7F8FA 72%);border-top:1px solid var(--line)}.finalCtaGrid{display:grid;grid-template-columns:1.08fr .92fr;gap:50px;align-items:center;overflow:hidden}.finalCtaCopy{padding-left:8px}.finalCta h2{font-size:40px;max-width:620px}.finalCta p{font-size:18px;max-width:690px;margin-top:18px}.ctaArt svg{display:block;width:100%;height:auto;max-height:300px}
@media(max-width:1120px){.shell{padding-left:40px;padding-right:40px}.heroGrid{grid-template-columns:1fr 430px;gap:44px}.heroVisual{min-height:490px}.marketGrid,.complexityGrid,.qualityGrid{gap:60px}.termGrid{gap:50px}.enterpriseLayout{grid-template-columns:1fr}.enterpriseMockup{max-width:850px}.whyGrid{grid-template-columns:1fr 1fr}.whyGrid article:nth-child(2){border-right:0}.whyGrid article:nth-child(-n+2){border-bottom:1px solid var(--line)}.industryGrid{grid-template-columns:1fr 1fr}.workflowGrid{grid-template-columns:1fr 1fr}.workflowGrid article:nth-child(2){border-right:0}.workflowGrid article:nth-child(-n+2){border-bottom:1px solid #3B3F48}.workflowGrid article:nth-child(3){padding-left:0}.termRow{grid-template-columns:1fr 1.2fr .85fr .72fr;gap:12px}}
@media(max-width:900px){.shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero{padding:84px 0 76px}.heroGrid{grid-template-columns:1fr}.heroCopy{max-width:760px}.heroVisual{max-width:760px;width:100%;min-height:auto}.trustGrid{grid-template-columns:repeat(3,1fr)}.trustGrid div:nth-child(3){border-right:0}.trustGrid div:nth-child(-n+3){border-bottom:1px solid var(--line)}.trustGrid div:nth-child(4){grid-column:1/2}.marketGrid,.complexityGrid,.qualityGrid,.termGrid,.memoryGrid,.faqGrid,.relatedGrid,.finalCtaGrid{grid-template-columns:1fr;gap:50px}.complexityIntro,.qualityIntro,.faqIntro{position:static}.dachGrid{grid-template-columns:1fr}.serviceRows{grid-template-columns:1fr}.serviceRow:nth-child(odd){border-right:0;padding-right:0}.serviceRow:nth-child(even){padding-left:0}.directionGrid{grid-template-columns:1fr}.directionGrid article+article{border-left:0;border-top:1px solid #3A3E47}.industryGrid{grid-template-columns:1fr 1fr}.enterpriseBody{grid-template-columns:1fr}.enterpriseActivity{border-left:0;border-top:1px solid var(--line)}.commercialGrid{grid-template-columns:1fr}.relatedLinks{grid-template-columns:1fr 1fr}.finalCtaGrid{padding-top:0;padding-bottom:0}.finalCtaCopy{padding-left:0}.ctaArt{max-width:650px;margin:0 auto}.finalCta{padding-bottom:0}.marketFacts{grid-template-columns:1fr}.marketFacts div,.marketFacts div+div{padding:19px 0;border-right:0;border-bottom:1px solid var(--line)}.marketFacts div:last-child{border-bottom:0}.memoryVisual{min-height:430px}.complexityRows article{grid-template-columns:1fr;gap:10px}.workflowFooter{align-items:flex-start;gap:18px}.termTable{padding:0 20px;overflow:visible}.termHeader{display:none}.termRow{min-width:0;grid-template-columns:1fr 1fr;gap:16px 24px;padding:20px 0;align-items:start}.termRow [data-label]{min-width:0;overflow-wrap:anywhere}.termRow [data-label]:before{content:attr(data-label);display:block;margin-bottom:5px;color:#7A838D;font-size:10px;line-height:1.3;font-weight:600;letter-spacing:.1em;text-transform:uppercase}.termApproved,.termReview,.termLocked{justify-self:start}.finalCta h2{font-size:36px}}
@media(max-width:640px){.shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}.hero{padding:70px 0 64px}.heroActions{flex-direction:column}.heroActions .button{width:100%}.heroAssurance{display:grid;gap:12px}.heroVisual{border-radius:24px;padding:18px}.visualCanvas{grid-template-columns:1fr}.visualSide{display:grid;grid-template-columns:1fr 1fr}.visualCard:last-child{grid-column:1/-1}.visualFooter{display:grid;gap:9px}.trustGrid{grid-template-columns:1fr 1fr}.trustGrid div{border-bottom:1px solid var(--line)!important}.trustGrid div:nth-child(even){border-right:0}.trustGrid div:last-child{grid-column:1/-1;border-bottom:0!important}.sectionHeader{margin-bottom:36px}.dachPanel{padding:26px 22px}.serviceRow{grid-template-columns:46px minmax(0,1fr);padding:28px 0}.serviceRow .editorialLink{grid-column:2;margin-left:0;min-height:44px}.iconBox{width:44px;height:44px}.directionGrid article{padding:28px 22px}.industryGrid{grid-template-columns:1fr}.industryItem{min-height:0;padding:27px 23px}.additionalIndustries{justify-content:flex-start}.workflowGrid{grid-template-columns:1fr}.workflowGrid article,.workflowGrid article+article,.workflowGrid article:nth-child(3){padding:26px 0;border-right:0;border-bottom:1px solid #3B3F48}.workflowGrid article:last-child{border-bottom:0}.workflowFooter{flex-direction:column}.memoryVisual{min-height:360px}.memoryVisual:before{width:260px;height:260px}.memoryVisual:after{width:340px;height:340px}.memoryCore{width:160px;height:160px}.orbitOne{top:34px;left:24px}.orbitTwo{top:66px;right:16px}.orbitThree{bottom:47px;right:20px}.orbitFour{bottom:65px;left:18px}.termMockup{border-radius:22px}.termTopbar{align-items:flex-start;gap:10px;flex-direction:column}.termFooter{flex-direction:column}.enterpriseMetrics{grid-template-columns:1fr}.enterpriseMetrics div{border-right:0;border-bottom:1px solid var(--line)}.enterpriseMetrics div:last-child{border-bottom:0}.projectHeader{display:none}.projectRow{grid-template-columns:1fr;gap:10px;padding:18px 0}.projectRow>span:first-child{font-size:14px;font-weight:600;color:#30363E}.projectRow b{display:block;font-size:12px;color:#5B6470}.projectProgress{width:100%}.qualityTimeline article{gap:16px}.qualityTimeline h3{font-size:20px}.whyGrid{grid-template-columns:1fr}.whyGrid article{border-right:0!important;border-bottom:1px solid var(--line)!important;padding:28px 0}.whyGrid article:last-child{border-bottom:0!important}.commercialGrid>article{padding:30px 23px}.commercialGrid h2{font-size:28px}.faqQuestion{font-size:17px;padding:22px 0}.faqAnswer{padding-right:0}.relatedLinks{grid-template-columns:1fr}.relatedSection{padding:60px 0}.finalCta{padding-top:58px}.finalCtaGrid{padding-top:0}.finalCta h2{font-size:32px}.finalCta p{font-size:17px}.ctaArt{margin-left:-10px;margin-right:-10px}.termTable{padding:0 18px}.termRow{min-width:0;grid-template-columns:1fr;gap:13px}.termFooter{font-size:12px}.editorialLink{min-height:44px}.heroLead,.intro{font-size:18px}.marketCopy p,.dachPanel p,.serviceRow p,.directionGrid p,.complexityRows p,.industryItem p,.termCopy p,.workflowGrid p,.memoryGrid p,.enterpriseCapabilities p,.qualityTimeline p,.whyGrid p,.commercialGrid p,.faqAnswer p{font-size:16px}}
@media(max-width:360px){.visualTopline{align-items:flex-start;gap:8px;flex-direction:column}.visualSide{grid-template-columns:1fr}.visualCard:last-child{grid-column:auto}.visualTermRow{align-items:flex-start;flex-direction:column}.memoryOrbit{font-size:11px;padding:8px 9px}.orbitOne{left:9px}.orbitTwo{right:7px}.orbitThree{right:8px}.orbitFour{left:6px}.heroVisual{padding:15px}.visualDocument{padding:14px}.button{padding-left:18px;padding-right:18px}}
`;
