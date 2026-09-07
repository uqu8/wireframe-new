import React, { useState } from "react";

const quoteUrl = "https://app.stepes.com/quote/";
const contactUrl = "https://www.stepes.com/contact-us/";

const links = {
  patent: "https://www.stepes.com/patent-translation-services/",
  japanese: "https://www.stepes.com/japanese-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  tm: "https://www.stepes.com/translation-memory/",
  security: "https://www.stepes.com/security/",
  pct: "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/",
  claims: "https://www.stepes.com/resources/translation-guides/patent-claims-translation-quality-checklist/",
  priorArt: "https://www.stepes.com/resources/translation-guides/prior-art-translation-patentability-fto-invalidity/",
  aiPatent: "https://www.stepes.com/resources/ai-translation-insights/ai-patent-translation-research-vs-filing-grade/",
};

function ArrowIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 3.75h7l3 3V20.25H7V3.75Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M14 3.75v3h3M9.5 10h5M9.5 13h5M9.5 16h3.25" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="5.7" stroke="currentColor" strokeWidth="1.55" />
      <path d="m15.1 15.1 4.15 4.15" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3.5 18.2 6v4.65c0 4.25-2.45 7.55-6.2 9.85-3.75-2.3-6.2-5.6-6.2-9.85V6L12 3.5Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="m9.25 12 1.8 1.8 3.75-4" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ChipIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="6.5" y="6.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.55" />
      <path d="M9.5 9.5h5v5h-5zM9 3.5v3M12 3.5v3M15 3.5v3M9 17.5v3M12 17.5v3M15 17.5v3M3.5 9h3M3.5 12h3M3.5 15h3M17.5 9h3M17.5 12h3M17.5 15h3" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m5 14 1.4-4.1A2 2 0 0 1 8.3 8.5h7.4a2 2 0 0 1 1.9 1.4L19 14" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M4 14h16v3.25a1.25 1.25 0 0 1-1.25 1.25H5.25A1.25 1.25 0 0 1 4 17.25V14Z" stroke="currentColor" strokeWidth="1.55" strokeLinejoin="round" />
      <path d="M7 18.5v1.25M17 18.5v1.25M7.5 15.75h1M15.5 15.75h1" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4.5V2.75M8 7h8a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <path d="M9.5 11h.01M14.5 11h.01M9.5 15h5M3.5 11v4M20.5 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BioIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 3.5c0 5 8 5 8 10s-8 5-8 7M16 3.5c0 5-8 5-8 10s8 5 8 7M9.2 6.4h5.6M8.3 10h7.4M8.3 15h7.4M9.2 18.6h5.6" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
    </svg>
  );
}

function FlaskIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 3.5h6M10 3.5v5l-5.2 8.6a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 8.5v-5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.3 15h9.4" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function Eyebrow({ children, dark = false }) {
  return <div className={dark ? "eyebrow eyebrow-dark" : "eyebrow"}>{children}</div>;
}

function TextLink({ href, children, inverse = false }) {
  return (
    <a className={inverse ? "text-link text-link-inverse" : "text-link"} href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function SectionHeading({ eyebrow, title, intro, dark = false, center = false, mobileLeft = false, id }) {
  return (
    <div className={`section-heading ${center ? "section-heading-center" : ""} ${mobileLeft ? "mobile-left" : ""} ${dark ? "on-dark" : ""}`} id={id}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 470" fill="none">
        <rect x="80" y="68" width="300" height="350" rx="22" fill="#FFFFFF" stroke="#4B5058" strokeWidth="2.2" />
        <path d="M326 68h54v55" stroke="#4B5058" strokeWidth="2.2" />
        <path d="m326 68 54 55h-54V68Z" fill="#F7EDF2" stroke="#4B5058" strokeWidth="2.2" strokeLinejoin="round" />
        <rect x="112" y="104" width="64" height="26" rx="13" fill="#FDF2F7" />
        <text x="144" y="121" textAnchor="middle" fontSize="12" fontWeight="700" fill="#A71954" fontFamily="Arial, sans-serif">JP PATENT</text>
        <path d="M112 157h218M112 181h188M112 205h206" stroke="#7A7F86" strokeWidth="2" strokeLinecap="round" />
        <path d="M112 239h128" stroke="#4B5058" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M112 263h210M112 287h192M112 311h205M112 335h155" stroke="#858A91" strokeWidth="2" strokeLinecap="round" />
        <rect x="111" y="361" width="98" height="30" rx="15" fill="#FDF2F7" stroke="#E6C6D4" />
        <text x="160" y="380" textAnchor="middle" fontSize="11" fontWeight="700" fill="#8A234F" fontFamily="Arial, sans-serif">CLAIMS</text>
        <rect x="220" y="361" width="123" height="30" rx="15" fill="#F7F7F8" stroke="#D9DBDE" />
        <text x="281.5" y="380" textAnchor="middle" fontSize="11" fontWeight="700" fill="#4B5058" fontFamily="Arial, sans-serif">SPECIFICATION</text>

        <circle cx="431" cy="148" r="77" fill="#FAF4F7" stroke="#D7B6C4" strokeWidth="1.5" />
        <path d="M402 151h58M431 122v58" stroke="#4B5058" strokeWidth="2" strokeLinecap="round" opacity=".32" />
        <rect x="404" y="121" width="54" height="54" rx="10" fill="#FFFFFF" stroke="#4B5058" strokeWidth="2" />
        <path d="M417 136h28M417 147h20M417 158h25" stroke="#6D7279" strokeWidth="2" strokeLinecap="round" />
        <circle cx="459" cy="194" r="28" fill="#C11D63" />
        <text x="459" y="199" textAnchor="middle" fontSize="15" fontWeight="700" fill="#fff" fontFamily="Arial, sans-serif">JPO</text>

        <path d="M381 259c26-19 64-20 91-2" stroke="#4B5058" strokeWidth="2" strokeLinecap="round" />
        <path d="M466 249l9 9-12 4" stroke="#4B5058" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="385" y="283" width="125" height="86" rx="18" fill="#FFFFFF" stroke="#4B5058" strokeWidth="2" />
        <text x="447.5" y="309" textAnchor="middle" fontSize="11" fontWeight="700" fill="#A71954" fontFamily="Arial, sans-serif">PCT → JAPAN</text>
        <path d="M408 327h80M408 344h61" stroke="#777C83" strokeWidth="2" strokeLinecap="round" />
        <circle cx="398" cy="408" r="30" fill="#FFFFFF" stroke="#4B5058" strokeWidth="2" />
        <path d="m389 409 7 7 13-15" stroke="#A71954" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M353 407h15M428 407h44" stroke="#B3B6BB" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

const faqs = [
  {
    q: "What documents can Stepes translate for Japanese patent filings?",
    a: "Stepes translates patent applications, claims, specifications or descriptions, abstracts, text in drawings, amendments, prosecution correspondence, related technical documents, priority materials, and other patent content according to client and counsel instructions. We also support Japanese-to-English translation of JPO documents, published patents, prior art, prosecution histories, and other intellectual property materials."
  },
  {
    q: "Do PCT applications entering Japan require Japanese translation?",
    a: "For a PCT international application filed in a foreign language, current JPO guidance generally requires Japanese translations of the description, claims, text matter contained in drawings, and abstract when entering the Japanese national phase. Translation requirements can also apply to relevant PCT amendments. Applicants should confirm the exact requirements for their application with Japanese patent counsel or their filing representative."
  },
  {
    q: "What is the deadline for entering the PCT national phase in Japan?",
    a: "Current JPO guidance states that the general time limit for national-phase entry in Japan is 30 months from the priority date. The JPO also provides a special translation time provision in certain circumstances when national documents are submitted during the final two months of that period. Because filing circumstances vary, applicants should rely on their patent counsel or filing representative for application-specific deadline and procedural advice."
  },
  {
    q: "Does Stepes translate Japanese patents into English for prior-art research?",
    a: "Yes. Stepes provides Japanese-to-English translation for patentability research, freedom-to-operate review, invalidity analysis, competitor monitoring, technology landscaping, due diligence, licensing, litigation support, and other IP research. The workflow can range from document screening and summaries to selected-passage or full professional translation."
  },
  {
    q: "How do you maintain consistency in Japanese patent claims?",
    a: "We combine patent-family references, approved terminology, translation memory, technical subject-matter expertise, professional review, and automated QA. Review can include recurring defined terms, claim dependencies, modifiers, numbers, units, ranges, reference numerals, and consistency between claims, specifications, tables, and drawings."
  },
  {
    q: "Can Stepes translate JPO office communications and prosecution documents?",
    a: "Yes. Stepes translates JPO-related prosecution materials and attorney-prepared content according to client instructions, including notices and office communications, cited references, amendments, written opinions, revised claims, and related technical documentation. Legal strategy and formal representation remain the responsibility of the client's patent professionals."
  },
  {
    q: "Can Stepes work with our Japanese patent attorney or filing representative?",
    a: "Yes. We can follow terminology, formatting, reference materials, workflow requirements, and project instructions supplied by the client's Japanese patent attorney, IP law firm, in-house counsel, or filing representative. This collaboration is particularly useful for recurring filings and patent families where terminology and prior translation decisions need to remain consistent."
  },
  {
    q: "How do you maintain Japanese terminology across an international patent family?",
    a: "Stepes can build project- or client-specific terminology resources using related patent documents, previous translations, approved terms, technical references, counsel feedback, and reviewer comments. Translation memory identifies previously translated material, while professional linguists determine whether prior translations remain appropriate for the new context."
  },
  {
    q: "Can AI be used for Japanese patent translation?",
    a: "Yes, when the use case is appropriate. AI can improve efficiency for prior-art screening, document triage, terminology extraction, version comparison, translation-memory matching, repetitive portfolio content, and automated QA. Higher-impact content such as filing-oriented claims and specifications, prosecution documents, certified translations, litigation evidence, and decision-critical prior art should use professional human translation and review appropriate to their intended use."
  },
  {
    q: "Can Stepes provide certified Japanese patent translations?",
    a: "Yes. When certification is required, Stepes can provide certification documentation according to the stated project requirements and can scope additional formalities when requested. Clients should provide any specific court, agency, law-firm, or jurisdictional requirements when requesting the quote so the appropriate certification workflow can be confirmed."
  },
  {
    q: "How much does Japanese patent translation cost?",
    a: "Japanese patent translation pricing depends on the language direction, document length, technical complexity, intended use, review level, source-file format, drawings or specialized content, certification requirements, patent-family leverage, and delivery schedule. Because filing-oriented patent translation can require a different workflow from prior-art screening or internal research, Stepes scopes each project according to its actual requirements rather than applying one universal patent rate."
  },
  {
    q: "How long does a Japanese patent translation take?",
    a: "Turnaround depends on document length, technical subject, language direction, review requirements, formatting, available reference materials, and urgency. Large or time-sensitive projects can often be planned in phases or assigned additional qualified resources. Providing the source files, intended use, target date, existing patent-family translations, and counsel instructions when requesting a quote allows Stepes to recommend an appropriate production schedule."
  }
];

export default function JapanesePatentTranslationWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  const technicalAreas = [
    { icon: <ChipIcon />, title: "Semiconductors & Electronics", text: "Patent translation for semiconductor devices, circuits, sensors, displays, electronic components, optical systems, chip architectures, fabrication processes, and related hardware." },
    { icon: <CarIcon />, title: "Automotive & Mobility", text: "Support for EV technology, batteries, power systems, ADAS, autonomous driving, vehicle electronics, controls, mechanical systems, safety technologies, and manufacturing innovations." },
    { icon: <RobotIcon />, title: "Robotics & Advanced Manufacturing", text: "Japanese patent translation for industrial robotics, automation, machinery, motion control, production systems, mechatronics, manufacturing processes, tooling, and smart-factory technologies." },
    { icon: <CodeIcon />, title: "Software & Artificial Intelligence", text: "Technical expertise for software architectures, computer systems, cloud technologies, algorithms, data processing, cybersecurity, AI and machine learning, embedded software, and digital platforms." },
    { icon: <BioIcon />, title: "Pharmaceuticals & Biotechnology", text: "Translation of patents involving pharmaceutical compounds, formulations, biological systems, diagnostics, medical technology, drug development, biotechnology, and laboratory methods." },
    { icon: <FlaskIcon />, title: "Chemicals & Advanced Materials", text: "Patent translation for chemical compounds, polymers, coatings, formulations, industrial chemistry, material properties, manufacturing methods, composites, and specialty materials." },
  ];

  const workflow = [
    ["Intended-Use and Scope Review", "We determine whether the translation supports filing, prosecution, prior-art research, legal review, litigation, licensing, due diligence, portfolio management, certification, or another purpose."],
    ["Japanese and Technical Assignment", "The project is assigned to qualified language professionals with Japanese expertise and relevant experience in the underlying technology or scientific discipline."],
    ["Patent-Family and Terminology Preparation", "Existing patent-family documents, previous translations, client glossaries, technical references, approved terminology, and counsel instructions are incorporated into the working language resources."],
    ["Professional Translation", "The translator works with attention to technical meaning, claims, defined terms, dependencies, repeated terminology, numbers, units, references, drawings, formulas, tables, and document structure."],
    ["Independent Review", "Where required by the selected workflow, a qualified second linguist or reviewer checks meaning, completeness, terminology, technical relationships, and consistency."],
    ["Automated and Final-Format QA", "Technology-assisted checks help identify omissions, inconsistent terminology, number issues, formatting problems, reference inconsistencies, and other potential defects before delivery."],
  ];

  return (
    <main className="jp-patent-page">
      <style>{styles}</style>

      <section className="hero section-pad">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>JAPAN / JPO PATENT TRANSLATION</Eyebrow>
            <h1>Japanese Patent Translation Services</h1>
            <p className="hero-lede">Translate Japanese patents with the technical precision, terminology control, and professional review required for global intellectual property workflows. Stepes provides English-to-Japanese and Japanese-to-English patent translation for JPO-related work, PCT national-phase entry, patent applications, claims, specifications, prosecution documents, prior art, and international patent families.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={quoteUrl}>Request a Japanese Patent Translation Quote <ArrowIcon /></a>
              <a className="button button-secondary" href={contactUrl}>Talk to an IP Translation Specialist <ArrowIcon /></a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="proof-band" aria-label="Japanese patent translation capabilities">
        <div className="shell proof-grid">
          {[
            ["ISO 17100", "Translation Quality"],
            ["English ↔ Japanese", "Technical Patent Linguists"],
            ["JPO + PCT", "Workflow Support"],
            ["AI + Human", "Controlled Review"],
          ].map(([a,b]) => <div className="proof-item" key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell overview-grid">
          <div className="sticky-heading">
            <SectionHeading title="Japanese Patent Translation for JPO and Global IP Workflows" />
            <div className="sticky-links"><TextLink href={links.patent}>Patent Translation Services</TextLink><TextLink href={links.japanese}>Japanese Translation Services</TextLink></div>
          </div>
          <div className="overview-content">
            <p className="body-large">Japanese patent translation sits at the intersection of language, technology, and intellectual property. The same patent may need to communicate complex engineering or scientific concepts across applications, claims, specifications, drawings, amendments, prosecution correspondence, prior art, and related filings in multiple jurisdictions.</p>
            <p>Stepes supports English↔Japanese patent translation around the <strong>intended use of the document</strong>. A translation prepared for Japanese patent filing or prosecution requires a different level of terminology control and review from a translation used to screen Japanese prior art. Litigation, licensing, due diligence, and portfolio analysis can introduce different requirements again.</p>
            <div className="intent-panel">
              <div>
                <span className="intent-label">FILING & PROSECUTION</span>
                <h3>Professional translation with controlled review</h3>
                <p>Professional patent translation, technical subject-matter expertise, terminology management, independent review, and final quality assurance.</p>
              </div>
              <div>
                <span className="intent-label">RESEARCH & PRIOR ART</span>
                <h3>Translation depth matched to the decision</h3>
                <p>Scale from rapid document screening to summary translation, selected passages, or complete professionally reviewed translation.</p>
              </div>
            </div>
            <p>This purpose-built approach helps patent attorneys, IP law firms, corporate legal teams, R&D organizations, patent researchers, and technology companies obtain the right level of Japanese translation for the decision they need to make.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="shell split-section">
          <div className="split-copy">
            <SectionHeading title="English-to-Japanese Patent Translation for Filing and Prosecution" />
            <p className="body-large">Translating an English-language patent into Japanese requires more than finding technically correct equivalents. The translation must maintain the relationships established across claims, descriptions, drawings, definitions, examples, components, processes, numerical ranges, and related documents.</p>
            <p>Stepes provides professional English-to-Japanese patent translation for applications prepared for Japanese filing and prosecution workflows, including claims, specifications or descriptions, abstracts, text in drawings, amendments, prosecution correspondence, and related technical documentation.</p>
            <p>Our Japanese patent linguists work with the source patent, available patent-family materials, existing translations, client glossaries, technical references, and instructions from patent counsel or the filing representative. Terminology is controlled from the beginning so the same components, processes, limitations, and defined concepts remain consistent throughout the translated document.</p>
          </div>
          <div className="editorial-rows">
            {[
              ["Patent Applications and Specifications", "Patent specifications frequently combine highly technical explanations with carefully structured language. Stepes assigns Japanese translators according to both the language pair and the technical subject matter, helping preserve meaning across claims, figures, reference numerals, abbreviations, formulas, and supporting content."],
              ["Patent Claims", "Claims receive particular attention because small linguistic differences can change how technical relationships are understood. Review covers recurring terms, independent and dependent claim relationships, modifiers, numbers, units, ranges, antecedent references, reference numerals, and consistency with the specification and drawings."],
              ["Amendments and Prosecution Materials", "When claims or specifications change during prosecution, revised language must remain aligned with the surrounding patent record. Stepes can work from previous translations and attorney instructions to identify changed content and maintain terminology consistency."],
            ].map(([title,text]) => <div className="editorial-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            <div className="legal-note">Final claim strategy, interpretation of Japanese patent law, filing decisions, and jurisdiction-specific legal requirements remain the responsibility of the client and its patent counsel or filing representative.</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading title="Japanese-to-English Patent Translation for IP Research and Legal Review" intro="Japanese patents are an important source of technical information for companies researching competitors, evaluating patentability, reviewing freedom to operate, assessing technology landscapes, conducting due diligence, or managing global patent portfolios." center mobileLeft />
          <p className="centered-support">Not every Japanese patent found during research needs the same translation workflow. Stepes provides multiple levels of depth so IP and technical teams can match translation effort to the importance of the document.</p>
          <div className="depth-grid">
            {[
              ["Document Screening", "Rapidly determine whether a Japanese patent or technical disclosure appears relevant enough for deeper review."],
              ["Summary Translation", "Understand the invention, major claims, technical approach, examples, and potentially relevant disclosures without translating every section."],
              ["Selected-Passage Translation", "Translate specific claims, embodiments, examples, tables, figures, prosecution passages, or other sections identified by counsel or researchers."],
              ["Full Professional Translation", "Produce a complete English translation for detailed technical, legal, portfolio, or business review."],
              ["Independent Verification", "Add a second professional review when translated content will support decision-critical analysis, a formal legal process, or another higher-risk use."],
            ].map(([title,text],i) => <div className="depth-item" key={title}><div className="depth-index">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <div className="section-link-row"><TextLink href={links.priorArt}>Prior Art Translation for Patentability, FTO, and Invalidity</TextLink></div>
        </div>
      </section>

      <section className="section-pad pct-section">
        <div className="shell pct-grid">
          <div>
            <SectionHeading title="PCT National Phase Translation for Japan" />
            <p className="body-large">International applicants using the Patent Cooperation Treaty frequently require Japanese translation when entering the national phase in Japan.</p>
            <p>Current Japan Patent Office guidance states that the time limit for entering the Japanese national phase is generally <strong>30 months from the priority date</strong>. For a PCT application filed in a foreign language, the JPO identifies the description, claims, text matter contained in drawings, and abstract among the content requiring Japanese translation. Applicable PCT amendments may introduce additional translation requirements.</p>
            <p>Stepes supports PCT-to-Japan translation with coordinated terminology and technical review across the application package. Our teams can work with the international application, related family documents, existing terminology, amendments, previous translations, and instructions supplied by the client's Japanese patent counsel or filing representative.</p>
            <div className="section-link-row"><TextLink href={links.pct}>PCT Patent Translation and National Phase Guide</TextLink></div>
          </div>
          <div className="pct-panel">
            <div className="pct-docs">
              <span className="intent-label">CORE TRANSLATION CONTENT</span>
              {[
                "Description / specification",
                "Claims",
                "Text matter in drawings",
                "Abstract",
                "Applicable amendments and related materials",
              ].map(item => <div className="check-row" key={item}><span className="check-dot">✓</span><span>{item}</span></div>)}
            </div>
            <div className="deadline-box">
              <span className="deadline-kicker">GENERAL NATIONAL-PHASE TIME LIMIT</span>
              <div className="deadline-number">30</div>
              <div className="deadline-unit">months from the priority date</div>
              <p>The JPO also describes a special translation time provision for certain national-phase documents submitted during the final two months of the general period.</p>
            </div>
            <p className="pct-caution">Filing requirements and timing can depend on the individual application and procedural circumstances. Applicants should confirm forms, deadlines, and required documents with Japanese patent counsel or their filing representative.</p>
            <a className="button button-secondary button-wide" href={contactUrl}>Discuss a PCT Japan Translation Project <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="section-pad claims-section">
        <div className="shell">
          <SectionHeading eyebrow="CLAIMS & SPECIFICATIONS" title="Translating Japanese Patent Claims Without Losing Technical Relationships" intro="English and Japanese organize information differently. In ordinary communication, context can often resolve those differences. Patent claims leave much less room for ambiguity." dark center />
          <div className="claims-grid">
            <div className="claims-copy">
              <p>English-to-Japanese and Japanese-to-English patent translation may require careful decisions about modifier attachment, omitted or context-dependent subjects, component relationships, technical compounds, terminology, claim dependencies, abbreviations, and the way information is distributed across a sentence.</p>
              <p>A phrase that appears linguistically natural in isolation can still create problems if it changes which component performs an action, what a modifier describes, how a limitation relates to the surrounding claim, or whether a repeated technical term continues to represent the same concept.</p>
              <p>Stepes therefore approaches Japanese claims as part of an interconnected patent document. The objective is not stylistic creativity. It is to preserve technical meaning, internal relationships, defined terminology, and consistency for professional review.</p>
              <TextLink href={links.claims} inverse>Patent Claims Translation Quality Checklist</TextLink>
            </div>
            <div className="relationship-map">
              {[
                ["CLAIMS", "Dependencies · Limitations · Defined terms"],
                ["SPECIFICATION", "Components · Embodiments · Methods"],
                ["DRAWINGS", "Figures · Labels · Reference numerals"],
                ["TECHNICAL NOTATION", "Numbers · Units · Formulas · Symbols"],
              ].map(([a,b]) => <div className="relation-row" key={a}><div className="relation-node"><span /></div><div><h3>{a}</h3><p>{b}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell term-grid">
          <div>
            <SectionHeading title="Consistent Japanese Terminology Across Patent Families" />
            <p className="body-large">Patent terminology rarely ends with a single document. A technology company may use the same invention terminology across an international application, Japanese national-phase filing, related foreign applications, amendments, prosecution correspondence, internal technical materials, licensing documents, and subsequent patent families.</p>
            <p>Stepes helps clients build reusable English↔Japanese patent terminology around the inventions and portfolios they manage. Resources can include approved component names, defined terms, scientific nomenclature, abbreviations, technical phrases, preferred Japanese equivalents, previous counsel-approved translations, patent-family references, and reviewer comments.</p>
            <div className="inline-links"><TextLink href={links.terminology}>Terminology Management</TextLink><TextLink href={links.tm}>Translation Memory</TextLink></div>
          </div>
          <div className="language-assets-panel">
            <div className="asset-top">PATENT FAMILY LANGUAGE ASSETS</div>
            <div className="asset-layer">
              <span>Approved terminology</span><span>Previous translations</span><span>Counsel instructions</span>
            </div>
            <div className="asset-arrow">↓</div>
            <div className="asset-core">
              <strong>English ↔ Japanese Patent Knowledge</strong>
              <span>Claims · Components · Scientific terms · Abbreviations · Reviewer feedback</span>
            </div>
            <div className="asset-arrow">↓</div>
            <div className="asset-bottom">
              <span>New application</span><span>Amendment</span><span>Prosecution</span><span>Related family</span>
            </div>
          </div>
        </div>
        <div className="shell two-column-detail">
          <div className="detail-block">
            <h3>Translation Memory for Related Patent Content</h3>
            <p>Translation memory identifies matching or similar material that has already been translated. It can improve consistency and reduce repetitive work, but patent memory should not be applied mechanically. Reused language is reviewed against changed claims, new context, technical relationships, and project instructions before it is accepted.</p>
          </div>
          <div className="detail-block">
            <h3>AI-Assisted Patent Workflows With Human Control</h3>
            <p>AI can assist with terminology extraction, document triage, version comparison, repetitive-content identification, translation-memory matching, and automated QA. Higher-impact filing, prosecution, certified, litigation, and decision-critical content remains subject to qualified human translation and review according to the required workflow.</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="shell prosecution-grid">
          <div className="prosecution-visual" aria-hidden="true">
            <div className="office-doc office-doc-back"><span>APPLICATION</span></div>
            <div className="office-doc office-doc-mid"><span>CLAIMS</span></div>
            <div className="office-doc office-doc-front">
              <span className="doc-kicker">JPO PROSECUTION</span>
              <strong>Office communication</strong>
              <div className="doc-line w90"/><div className="doc-line w75"/><div className="doc-line w84"/>
              <div className="doc-highlight">Terminology aligned to the patent record</div>
            </div>
          </div>
          <div>
            <SectionHeading title="Translation Support for JPO Prosecution and Office Communications" />
            <p className="body-large">Patent translation needs can continue well beyond the original application.</p>
            <p>During examination, JPO communications may identify issues associated with claims, cited documents, novelty, inventive step, clarity, support, or other examination considerations. Formal notices of reasons for refusal can lead to written opinions, amendments, revised claims, cited references, and supporting technical materials.</p>
            <p>Stepes supports the translation of JPO prosecution content and related attorney-prepared materials according to client instructions. These projects can require comparison across the originally filed application, existing translation, current claims, cited references, examiner communication, proposed amendments, and attorney instructions.</p>
            <p>Our workflow helps maintain approved terminology between those materials so a component or technical concept does not acquire unnecessary linguistic variation as the prosecution record develops.</p>
            <div className="legal-note">Stepes provides translation support according to instructions from the client and patent professionals handling the matter. We do not provide patent prosecution strategy or legal representation before the JPO.</div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="shell">
          <SectionHeading title="Japanese Prior Art Translation for Patent Research" intro="A relevant Japanese-language document can influence decisions far beyond Japan. Patent attorneys, R&D organizations, technology companies, and research teams use Japanese patents and technical publications when evaluating patentability, freedom to operate, validity, competitive technology, portfolio acquisition, licensing opportunities, and product-development risks." center mobileLeft />
          <div className="prior-flow">
            {[
              ["Screen", "Determine whether a Japanese patent appears relevant to the technology, claims, or research question."],
              ["Summarize", "Create an English overview of the invention, technical approach, principal disclosures, claims, or requested content."],
              ["Translate Selected Content", "Focus professional translation on claims, embodiments, examples, tables, drawings, experimental results, or cited passages."],
              ["Translate the Full Document", "Produce a complete professional translation when the patent requires detailed technical or legal analysis."],
              ["Verify", "Add independent human review when the English translation will support a significant legal, R&D, licensing, investment, or portfolio decision."],
            ].map(([title,text],i) => <div className="prior-step" key={title}><div className="prior-number">{i+1}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
          <div className="center-actions">
            <a className="button button-secondary" href={contactUrl}>Discuss a Japanese Prior Art Project <ArrowIcon /></a>
            <TextLink href={links.priorArt}>Prior Art Translation Guide</TextLink>
          </div>
        </div>
      </section>

      <section className="section-pad technical-section">
        <div className="shell">
          <SectionHeading title="Technical Expertise for Japanese Patents" intro="Patent translators must understand the technology they are translating. Stepes matches English↔Japanese language expertise with subject-matter experience appropriate to each patent and supporting document." center />
          <div className="tech-grid">
            {technicalAreas.map(({icon,title,text}) => <div className="tech-item" key={title}><div className="icon-box">{icon}</div><div><h3>{title}</h3><p>{text}</p></div></div>)}
          </div>
          <div className="section-link-row"><TextLink href={links.technical}>Technical Translation Services</TextLink></div>
        </div>
      </section>

      <section className="section-pad bg-white workflow-section">
        <div className="shell">
          <SectionHeading title="A Japanese Patent Translation Workflow Built Around Intended Use" intro="Stepes configures each Japanese patent translation according to the document, language direction, technical discipline, intended use, confidentiality level, available reference materials, delivery format, and required review." center mobileLeft />
          <div className="workflow-grid">
            {workflow.map(([title,text],i) => <div className="workflow-step" key={title}><div className="workflow-number">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
          <p className="workflow-foot">For recurring patent programs, approved client and reviewer feedback can be incorporated into terminology and translation-memory resources for subsequent applications, prosecution documents, and related patent-family work.</p>
        </div>
      </section>

      <section className="section-pad security-section">
        <div className="shell security-grid">
          <div>
            <SectionHeading title="Secure Handling of Unpublished Japanese Patent Content" dark />
            <p className="body-large">Patent projects can contain some of an organization's most sensitive information, including unpublished inventions, R&D results, product designs, formulas, algorithms, experimental data, proprietary manufacturing methods, licensing information, and litigation materials.</p>
            <p>Stepes supports confidential patent translation through controlled project workflows, secure file exchange, restricted access, project-specific permissions, confidentiality requirements, and client-defined handling instructions.</p>
            <p>AI use should reflect the confidentiality and risk profile of the content. Unpublished inventions and other confidential IP should not be submitted indiscriminately to public AI translation services. Stepes applies automation within the selected production and security workflow rather than treating every patent document as generic AI input.</p>
            <TextLink href={links.security} inverse>Stepes Enterprise Security</TextLink>
          </div>
          <div className="security-matrix">
            {[
              [<DocumentIcon />, "Files", "Source files, target files, patent-family materials, and final deliverables handled through controlled workflows."],
              [<ShieldIcon />, "Access", "Limit project access to authorized managers, translators, reviewers, and approved stakeholders."],
              [<SearchIcon />, "AI Governance", "Apply automation according to content sensitivity, intended use, and selected production controls."],
              [<ChipIcon />, "Language Assets", "Protect terminology, translation memory, reviewer feedback, and reusable patent knowledge."],
            ].map(([icon,title,text]) => <div className="security-item" key={title}><div className="security-icon">{icon}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section-pad bg-soft">
        <div className="shell">
          <SectionHeading title="From One Japanese Patent to a Global Patent Portfolio" intro="Japanese patent translation may begin with a single document and evolve into an ongoing multilingual IP program." center />
          <div className="scale-grid">
            <div className="scale-item"><span>ONE-OFF NEEDS</span><h3>Focused patent support</h3><p>A single Japanese prior-art document, urgent prosecution translation, or one PCT national-phase filing.</p></div>
            <div className="scale-item"><span>PATENT FAMILIES</span><h3>Continuity across related content</h3><p>Recurring applications, amendments, prosecution materials, and multilingual national-phase documents coordinated with shared terminology.</p></div>
            <div className="scale-item"><span>ENTERPRISE PROGRAMS</span><h3>Centralized multilingual IP workflows</h3><p>Translation memory, terminology, multi-jurisdiction coordination, common quality standards, and secure project management across global portfolios.</p></div>
          </div>
          <div className="portfolio-summary">
            <div>
              <h3>Build Reusable Patent Knowledge</h3>
              <p>For recurring Japanese patent programs, approved terminology and previous translations can become reusable intellectual assets. Teams can maintain a controlled bilingual record of how important components, concepts, materials, processes, abbreviations, and defined terms have been translated instead of rebuilding those decisions for every filing or amendment.</p>
            </div>
            <div>
              <h3>Coordinate Multilingual Patent Programs</h3>
              <p>For organizations managing multiple patent markets, Stepes can coordinate Japanese alongside other languages through a centralized patent translation workflow with shared terminology, translation memory, review requirements, and delivery planning.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white related-section">
        <div className="shell">
          <SectionHeading title="Related Patent and Japanese Translation Services" center />
          <div className="related-grid">
            {[
              ["Patent Translation Services", "Global patent translation for applications, claims, specifications, prosecution, prior art, litigation, certification, PCT workflows, and multilingual patent families.", links.patent],
              ["Japanese Translation Services", "Enterprise English↔Japanese translation across technical, legal, medical, software, business, and customer-facing content.", links.japanese],
              ["PCT Patent Translation & National Phase Guide", "Guidance for planning translation across international applications, national-phase entry, amendments, priority documentation, and multilingual patent families.", links.pct],
              ["Patent Claims Translation Quality Checklist", "A practical framework for reviewing defined terms, dependencies, references, numbers, terminology, drawings, completeness, and final-file consistency.", links.claims],
              ["Prior Art Translation", "Flexible foreign-language patent translation for patentability, freedom-to-operate, invalidity, technology landscaping, portfolio analysis, and research.", links.priorArt],
              ["Technical Translation Services", "Specialized translation for engineering, software, electronics, manufacturing, life sciences, chemicals, automotive technology, and other technical disciplines.", links.technical],
            ].map(([title,text,href]) => <a className="related-row" href={href} key={title}><div><h3>{title}</h3><p>{text}</p></div><span className="related-arrow"><ArrowIcon size={18} /></span></a>)}
          </div>
        </div>
      </section>

      <section className="section-pad faq-section bg-soft">
        <div className="shell faq-grid">
          <div className="faq-heading">
            <SectionHeading title="Japanese Patent Translation FAQs" />
            <p>Practical answers about JPO and PCT workflows, prior art, terminology, AI, certification, pricing, and turnaround.</p>
          </div>
          <div className="faq-panel">
            {faqs.map((item,i) => {
              const open = openFaq === i;
              return (
                <div className="faq-item" key={item.q}>
                  <button className="faq-button" onClick={() => setOpenFaq(open ? -1 : i)} aria-expanded={open} aria-controls={`faq-${i}`}>
                    <span>{item.q}</span><span className="faq-plus">{open ? "−" : "+"}</span>
                  </button>
                  <div id={`faq-${i}`} className={`faq-answer ${open ? "open" : ""}`}><p>{item.a}</p></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white resources-section">
        <div className="shell">
          <SectionHeading eyebrow="RESOURCE CENTER" title="Japanese Patent Translation Guidance and Resources" intro="International patent translation works best when language planning begins before a filing or review deadline. Explore Stepes guidance for PCT national-phase translation, patent claims, prior art, AI-assisted patent research, terminology management, and multilingual patent quality." center />
          <div className="resource-grid">
            {[
              ["PCT Patent Translation and National Phase Guide", "Understand how translation fits into PCT applications, national-phase workflows, priority documents, amendments, and coordinated international patent families.", links.pct, "Explore the PCT Guide"],
              ["Patent Claims Translation Quality Checklist", "Review the linguistic and technical details that deserve attention across claims, specifications, drawings, terminology, numbers, units, and references.", links.claims, "View the Claims Checklist"],
              ["Prior Art Translation for Patentability, FTO, and Invalidity", "Learn when document screening, summary translation, selected-passage translation, complete professional translation, or independent verification makes sense.", links.priorArt, "Explore Prior Art Translation"],
              ["AI Patent Translation: Research Use vs. Filing-Grade Translation", "See where AI can accelerate patent research and multilingual workflows, and where qualified human translation and technical review remain essential.", links.aiPatent, "Explore AI Patent Translation"],
            ].map(([title,text,href,label]) => <div className="resource-item" key={title}><h3>{title}</h3><p>{text}</p><TextLink href={href}>{label}</TextLink></div>)}
          </div>
        </div>
      </section>

      <section className="final-cta section-pad">
        <div className="shell final-cta-panel">
          <div>
            <h2>Translate Japanese Patents With Technical Precision</h2>
            <p>Work with Stepes for English-to-Japanese and Japanese-to-English patent translation built around the purpose of your documents, from JPO and PCT filing support to prosecution, prior-art research, patent families, and global portfolio management.</p>
            <p>Our Japanese patent linguists combine subject-matter expertise, controlled terminology, translation technology, professional review, and secure workflows to help your IP team communicate complex inventions clearly across languages.</p>
          </div>
          <div className="final-actions">
            <a className="button button-primary" href={quoteUrl}>Request a Japanese Patent Translation Quote <ArrowIcon /></a>
            <a className="button button-secondary" href={contactUrl}>Talk to an IP Translation Specialist <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .jp-patent-page {
    --magenta: #C11D63;
    --magenta-deep: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --dark: #17191D;
    --dark-2: #202329;
    --text: #22252A;
    --muted: #5F646B;
    --line: #E2E4E7;
    --soft: #F7F7F8;
    --eyebrow-dark: #F2A7C6;
    color: var(--text);
    background: #fff;
    font-family: "Inter Tight", Inter, Arial, sans-serif;
    overflow-x: hidden;
  }
  .jp-patent-page a { color: inherit; }
  .jp-patent-page h1, .jp-patent-page h2, .jp-patent-page h3, .jp-patent-page p, .jp-patent-page span { overflow-wrap: break-word; }
  .shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
  .section-pad { padding: 96px 0; }
  .bg-white { background: #fff; }
  .bg-soft { background: var(--soft); }
  h1, h2, h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; color: #191B1F; }
  h1 { font-size: 48px; line-height: 1.05; max-width: 680px; }
  h2 { font-size: 36px; line-height: 1.12; }
  h3 { font-size: 24px; line-height: 1.2; }
  p { font-size: 16px; line-height: 1.7; margin: 0 0 18px; color: var(--muted); }
  .body-large, .hero-lede, .section-intro { font-size: 18px; line-height: 1.65; }
  strong { color: #2D3035; }
  .eyebrow { margin-bottom: 15px; font-size: 11px; line-height: 1.2; font-weight: 600; letter-spacing: .13em; text-transform: uppercase; color: var(--magenta); }
  .eyebrow-dark { color: var(--eyebrow-dark); }
  .section-heading { max-width: 820px; margin-bottom: 36px; }
  .section-heading h2 { max-width: 820px; }
  .section-heading .section-intro { margin-top: 20px; max-width: 820px; }
  .section-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
  .section-heading-center h2, .section-heading-center .section-intro { margin-left: auto; margin-right: auto; }
  .section-heading.on-dark h2, .section-heading.on-dark .section-intro { color: #fff; }
  .section-heading.on-dark .section-intro { color: #C9CDD2; }
  .button { min-height: 50px; border-radius: 999px; padding: 0 23px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-size: 16px; line-height: 1.2; font-weight: 600; text-align: center; overflow-wrap: anywhere; transition: transform .2s ease, border-color .2s ease, background .2s ease; }
  .button:hover { transform: translateY(-1px); }
  .button:focus-visible, .text-link:focus-visible, .related-row:focus-visible, .faq-button:focus-visible { outline: 3px solid rgba(193,29,99,.28); outline-offset: 3px; }
  .button-primary, .button-primary:visited, .button-primary:hover, .button-primary:active, .button-primary:focus { background: var(--magenta); color: #fff !important; border: 1px solid var(--magenta); }
  .button-primary svg, .button-primary svg path { color: #fff !important; stroke: #fff !important; }
  .button-primary:hover { background: #A71954; border-color: #A71954; }
  .button-secondary { background: #fff; color: #1F2226; border: 1px solid #D1D4D8; }
  .button-secondary:hover { border-color: #AEB2B8; }
  .button-wide { width: 100%; }
  .text-link { display: inline-flex; align-items: center; gap: 7px; min-height: 44px; color: var(--magenta) !important; text-decoration: none; font-size: 16px; font-weight: 600; overflow-wrap: anywhere; }
  .text-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .text-link svg { transition: transform .2s ease; }
  .text-link:hover svg { transform: translateX(3px); }
  .text-link-inverse { color: #F6B3CF !important; }

  .hero { padding-top: 104px; padding-bottom: 104px; background: linear-gradient(180deg, #fff 0%, #FCFAFB 100%); }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.07fr) minmax(420px, .93fr); align-items: center; gap: 70px; }
  .hero-copy { max-width: 760px; }
  .hero-lede { margin: 24px 0 28px; max-width: 730px; color: #51565D; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
  .hero-art { width: 100%; max-width: 560px; justify-self: end; }
  .hero-art svg { width: 100%; height: auto; display: block; }

  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
  .proof-item { padding: 22px 24px; display: flex; flex-direction: column; gap: 5px; border-right: 1px solid var(--line); }
  .proof-item:first-child { padding-left: 0; }
  .proof-item:last-child { border-right: 0; }
  .proof-item strong { font-size: 17px; font-weight: 600; }
  .proof-item span { font-size: 16px; color: #6B7077; }

  .overview-grid { display: grid; grid-template-columns: minmax(320px, .76fr) minmax(0, 1.24fr); gap: 92px; align-items: start; }
  .sticky-heading { position: sticky; top: 32px; }
  .overview-content { max-width: 820px; }
  .intent-panel { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--line); border-radius: 28px; overflow: hidden; margin: 30px 0; background: #fff; }
  .intent-panel > div { padding: 28px; }
  .intent-panel > div + div { border-left: 1px solid var(--line); }
  .intent-label { display: block; font-size: 11px; font-weight: 600; letter-spacing: .12em; color: var(--magenta); margin-bottom: 12px; }
  .intent-panel h3 { font-size: 22px; margin-bottom: 10px; }
  .intent-panel p { margin-bottom: 0; }

  .split-section { display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 76px; }
  .split-copy { max-width: 650px; }
  .editorial-rows { border-top: 1px solid #D8DBDF; }
  .editorial-row { padding: 27px 0; border-bottom: 1px solid #D8DBDF; }
  .editorial-row h3 { font-size: 22px; margin-bottom: 10px; }
  .editorial-row p { margin-bottom: 0; }
  .legal-note { font-size: 16px; line-height: 1.65; color: #5B4B52; background: #F9EDF2; border-radius: 20px; padding: 20px 22px; margin-top: 24px; border: 1px solid #EACDD9; }

  .centered-support { max-width: 840px; margin: -16px auto 40px; text-align: center; font-size: 17px; }
  .depth-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .depth-item { padding: 30px 24px; border-right: 1px solid var(--line); }
  .depth-item:last-child { border-right: 0; }
  .depth-index { font-size: 12px; color: var(--magenta); font-weight: 600; margin-bottom: 18px; letter-spacing: .08em; }
  .depth-item h3 { font-size: 20px; margin-bottom: 12px; }
  .depth-item p { margin-bottom: 0; }
  .section-link-row { margin-top: 26px; display: flex; justify-content: center; }

  .pct-section { background: var(--blush); }
  .pct-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(400px, .98fr); gap: 76px; align-items: start; }
  .pct-panel { background: #fff; border: 1px solid #E8D7DF; border-radius: 30px; padding: 32px; box-shadow: 0 20px 50px rgba(95,37,63,.06); }
  .pct-docs { padding-bottom: 24px; border-bottom: 1px solid var(--line); }
  .check-row { display: flex; gap: 12px; align-items: flex-start; font-size: 16px; line-height: 1.55; padding: 8px 0; }
  .check-dot { color: var(--magenta); font-weight: 700; line-height: 1.45; }
  .deadline-box { padding: 26px 0 20px; }
  .deadline-kicker { display: block; font-size: 11px; font-weight: 600; letter-spacing: .12em; color: #6A5960; }
  .deadline-number { font-size: 72px; line-height: .95; letter-spacing: -.05em; font-weight: 600; color: #272A2E; margin-top: 16px; }
  .deadline-unit { font-size: 18px; color: #383B40; margin: 6px 0 15px; }
  .deadline-box p { margin: 0; }
  .pct-caution { padding: 18px 0; border-top: 1px solid var(--line); }

  .claims-section { background: var(--dark); color: #fff; }
  .claims-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(420px, 1.08fr); gap: 80px; align-items: center; }
  .claims-copy p { color: #C8CCD1; }
  .relationship-map { border: 1px solid #3A3E45; border-radius: 30px; background: var(--dark-2); overflow: hidden; }
  .relation-row { display: grid; grid-template-columns: 48px 1fr; gap: 16px; padding: 24px 26px; border-bottom: 1px solid #383C43; align-items: start; }
  .relation-row:last-child { border-bottom: 0; }
  .relation-node { width: 38px; height: 38px; border-radius: 50%; border: 1px solid #5A5F67; display: grid; place-items: center; }
  .relation-node span { width: 8px; height: 8px; border-radius: 50%; background: #F2A7C6; display: block; }
  .relation-row h3 { color: #fff; font-size: 18px; letter-spacing: .03em; }
  .relation-row p { color: #AEB3BA; margin: 6px 0 0; }

  .term-grid { display: grid; grid-template-columns: minmax(0, 1fr) minmax(420px, 1fr); gap: 78px; align-items: center; }
  .inline-links { display: flex; gap: 28px; flex-wrap: wrap; }
  .sticky-links { display: flex; flex-direction: column; align-items: flex-start; gap: 2px; }
  .language-assets-panel { border: 1px solid var(--line); border-radius: 30px; padding: 30px; background: linear-gradient(180deg,#fff 0%,#FAFAFB 100%); }
  .asset-top { text-align: center; font-size: 11px; font-weight: 600; letter-spacing: .12em; color: var(--magenta); margin-bottom: 20px; }
  .asset-layer, .asset-bottom { display: grid; grid-template-columns: repeat(3,1fr); gap: 10px; }
  .asset-layer span, .asset-bottom span { background: #fff; border: 1px solid var(--line); border-radius: 14px; padding: 13px 10px; text-align: center; font-size: 16px; line-height: 1.45; color: #555A61; }
  .asset-bottom { grid-template-columns: repeat(4,1fr); }
  .asset-arrow { text-align: center; padding: 12px 0; color: #9A9EA4; }
  .asset-core { border-radius: 22px; background: #FDF2F7; border: 1px solid #E8C5D4; padding: 24px; text-align: center; }
  .asset-core strong { display: block; margin-bottom: 8px; font-size: 20px; }
  .asset-core span { font-size: 16px; color: #6C5961; line-height: 1.55; }
  .two-column-detail { margin-top: 54px; display: grid; grid-template-columns: 1fr 1fr; gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .detail-block { padding: 30px 36px 30px 0; }
  .detail-block + .detail-block { border-left: 1px solid var(--line); padding-left: 36px; }
  .detail-block h3 { font-size: 22px; margin-bottom: 12px; }
  .detail-block p { margin-bottom: 0; }

  .prosecution-grid { display: grid; grid-template-columns: minmax(400px, .92fr) minmax(0,1.08fr); gap: 84px; align-items: center; }
  .prosecution-visual { min-height: 440px; position: relative; }
  .office-doc { position: absolute; width: 330px; height: 360px; border-radius: 24px; border: 1px solid #D9DCE0; background: #fff; box-shadow: 0 20px 40px rgba(20,25,30,.05); }
  .office-doc-back { left: 15px; top: 28px; transform: rotate(-7deg); background: #FAFAFB; }
  .office-doc-mid { left: 68px; top: 18px; transform: rotate(4deg); background: #FEFEFE; }
  .office-doc-back span, .office-doc-mid span { position: absolute; top: 30px; left: 30px; font-size: 11px; letter-spacing: .12em; color: #7A7F86; font-weight: 600; }
  .office-doc-front { left: 48px; top: 52px; padding: 32px; }
  .doc-kicker { font-size: 11px; font-weight: 600; color: var(--magenta); letter-spacing: .12em; display: block; margin-bottom: 28px; }
  .office-doc-front strong { font-size: 24px; display: block; margin-bottom: 28px; }
  .doc-line { height: 2px; background: #B2B6BB; border-radius: 2px; margin: 17px 0; }
  .w90 { width: 90%; }.w75 { width: 75%; }.w84 { width: 84%; }
  .doc-highlight { margin-top: 40px; background: var(--blush); border-radius: 14px; padding: 16px; font-size: 16px; color: #6F4557; line-height: 1.5; }

  .prior-flow { max-width: 980px; margin: 46px auto 0; border-top: 1px solid var(--line); }
  .prior-step { display: grid; grid-template-columns: 58px 190px 1fr; gap: 22px; padding: 25px 0; border-bottom: 1px solid var(--line); align-items: start; }
  .prior-number { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); font-weight: 600; font-size: 13px; }
  .prior-step h3 { grid-column: 2; font-size: 21px; padding-top: 8px; }
  .prior-step > div:last-child { display: contents; }
  .prior-step p { grid-column: 3; margin: 6px 0 0; }
  .center-actions { margin-top: 34px; display: flex; justify-content: center; gap: 20px; align-items: center; flex-wrap: wrap; }

  .technical-section { background: #FBFBFC; }
  .tech-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .tech-item { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 48px 1fr; gap: 17px; background: #fff; }
  .icon-box { width: 44px; height: 44px; border-radius: 14px; background: var(--blush); display: grid; place-items: center; color: #6F5962; }
  .icon-box svg { width: 23px; height: 23px; }
  .tech-item h3 { font-size: 20px; margin: 3px 0 10px; }
  .tech-item p { margin-bottom: 0; }

  .workflow-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .workflow-step { padding: 30px 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .workflow-number { font-size: 12px; color: var(--magenta); letter-spacing: .1em; font-weight: 600; margin-bottom: 18px; }
  .workflow-step h3 { font-size: 20px; line-height: 1.25; margin-bottom: 10px; }
  .workflow-step p { margin-bottom: 0; }
  .workflow-foot { max-width: 850px; text-align: left; margin: 32px auto 0; }

  .security-section { background: #191B1F; }
  .security-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(420px,.92fr); gap: 84px; align-items: center; }
  .security-grid p { color: #C6CBD1; }
  .security-matrix { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid #393D44; border-radius: 28px; overflow: hidden; background: #202329; }
  .security-item { padding: 28px; border-right: 1px solid #393D44; border-bottom: 1px solid #393D44; }
  .security-item:nth-child(2n) { border-right: 0; }
  .security-item:nth-child(n+3) { border-bottom: 0; }
  .security-icon { width: 44px; height: 44px; border-radius: 14px; background: #2B2E34; display: grid; place-items: center; color: #F2A7C6; margin-bottom: 18px; }
  .security-icon svg { width: 23px; height: 23px; }
  .security-item h3 { color: #fff; font-size: 20px; margin-bottom: 9px; }
  .security-item p { margin: 0; color: #AEB4BB; }

  .scale-grid { display: grid; grid-template-columns: repeat(3,1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
  .scale-item { padding: 32px; border-right: 1px solid var(--line); }
  .scale-item:last-child { border-right: 0; }
  .scale-item > span { display: block; font-size: 11px; font-weight: 600; letter-spacing: .12em; color: var(--magenta); margin-bottom: 14px; }
  .scale-item h3 { font-size: 22px; margin-bottom: 12px; }
  .scale-item p { margin-bottom: 0; }
  .portfolio-summary { display: grid; grid-template-columns: 1fr 1fr; margin-top: 38px; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .portfolio-summary > div { padding: 30px 36px 30px 0; }
  .portfolio-summary > div + div { border-left: 1px solid var(--line); padding-left: 36px; padding-right: 0; }
  .portfolio-summary h3 { font-size: 22px; margin-bottom: 12px; }
  .portfolio-summary p { margin-bottom: 0; }

  .related-grid { border-top: 1px solid var(--line); }
  .related-row { text-decoration: none; display: grid; grid-template-columns: 1fr 44px; gap: 24px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .related-row h3 { font-size: 22px; margin-bottom: 8px; transition: color .2s ease; }
  .related-row p { max-width: 880px; margin-bottom: 0; }
  .related-arrow { width: 42px; height: 42px; border-radius: 50%; border: 1px solid #DADDE1; display: grid; place-items: center; color: var(--magenta); transition: transform .2s ease, border-color .2s ease; }
  .related-row:hover h3 { color: var(--magenta); }
  .related-row:hover .related-arrow { transform: translateX(3px); border-color: #C6A5B3; }

  .faq-grid { display: grid; grid-template-columns: minmax(280px,.68fr) minmax(0,1.32fr); gap: 84px; align-items: start; }
  .faq-heading { position: sticky; top: 32px; }
  .faq-panel { background: #fff; border: 1px solid #DDE0E3; border-radius: 28px; overflow: hidden; }
  .faq-item { border-bottom: 1px solid #E1E3E6; }
  .faq-item:last-child { border-bottom: 0; }
  .faq-button { width: 100%; min-height: 72px; border: 0; background: transparent; padding: 20px 24px; display: grid; grid-template-columns: 1fr 32px; gap: 16px; text-align: left; align-items: center; font: inherit; color: #202328; cursor: pointer; }
  .faq-button span:first-child { font-size: 18px; font-weight: 600; line-height: 1.35; }
  .faq-plus { font-size: 24px; color: var(--magenta); text-align: center; font-weight: 400; }
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .22s ease; }
  .faq-answer > p { overflow: hidden; margin: 0; padding: 0 24px; }
  .faq-answer.open { grid-template-rows: 1fr; }
  .faq-answer.open > p { padding: 0 24px 24px; }

  .resource-grid { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .resource-item { padding: 30px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .resource-item h3 { font-size: 22px; margin-bottom: 10px; }
  .resource-item p { margin-bottom: 14px; }

  .final-cta { background: var(--blush); padding-top: 80px; padding-bottom: 80px; }
  .final-cta-panel { background: #fff; border: 1px solid #E6D3DC; border-radius: 30px; padding: 52px 56px; display: grid; grid-template-columns: minmax(0,1.25fr) minmax(340px,.75fr); gap: 64px; align-items: center; box-shadow: 0 20px 50px rgba(95,37,63,.05); }
  .final-cta h2 { margin-bottom: 18px; }
  .final-cta p { max-width: 770px; }
  .final-cta p:last-child { margin-bottom: 0; }
  .final-actions { display: flex; flex-direction: column; gap: 12px; align-items: stretch; }
  .final-actions .button { width: 100%; }

  @media (max-width: 1100px) {
    .shell { width: min(1280px, calc(100% - 80px)); }
    .hero-grid { grid-template-columns: minmax(0,1.05fr) minmax(360px,.95fr); gap: 40px; }
    .depth-grid { grid-template-columns: repeat(3,1fr); border-left: 1px solid var(--line); }
    .depth-item { border-bottom: 1px solid var(--line); }
    .depth-item:nth-child(3) { border-right: 0; }
    .depth-item:nth-child(4), .depth-item:nth-child(5) { border-bottom: 0; }
  }

  @media (max-width: 900px) {
    .shell { width: calc(100% - 48px); }
    .section-pad { padding: 80px 0; }
    h1 { font-size: 42px; }
    h2 { font-size: 32px; }
    h3 { font-size: 22px; }
    .hero { padding: 88px 0; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { text-align: center; margin: 0 auto; }
    .hero-copy h1 { margin-left: auto; margin-right: auto; }
    .hero-lede { margin-left: auto; margin-right: auto; }
    .hero-actions { justify-content: center; }
    .hero-art { max-width: 520px; justify-self: center; }
    .proof-grid { grid-template-columns: 1fr 1fr; }
    .proof-item:nth-child(2) { border-right: 0; }
    .proof-item:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
    .proof-item:first-child { padding-left: 24px; }
    .overview-grid, .split-section, .pct-grid, .claims-grid, .term-grid, .prosecution-grid, .security-grid, .faq-grid, .final-cta-panel { grid-template-columns: 1fr; gap: 48px; }
    .depth-grid { grid-template-columns: repeat(2, minmax(0,1fr)); border-right: 1px solid var(--line); }
    .depth-item { border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
    .depth-item:nth-child(2n) { border-right: 0; }
    .depth-item:nth-child(3) { border-right: 1px solid var(--line); }
    .depth-item:nth-child(4) { border-bottom: 1px solid var(--line); }
    .depth-item:nth-child(5) { grid-column: 1 / -1; border-right: 0; border-bottom: 0; }
    .workflow-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .sticky-heading, .faq-heading { position: static; }
    .overview-grid > .sticky-heading .section-heading,
    .pct-grid > div:first-child .section-heading,
    .term-grid > div:first-child .section-heading,
    .prosecution-grid > div:last-child .section-heading { text-align: center; margin-left: auto; margin-right: auto; }
    .overview-grid > .sticky-heading .sticky-links { align-items: center; }
    .overview-grid > .sticky-heading .text-link { display: flex; width: fit-content; }
    .intent-panel { grid-template-columns: 1fr; }
    .intent-panel > div + div { border-left: 0; border-top: 1px solid var(--line); }
    .tech-grid { grid-template-columns: 1fr 1fr; }
    .scale-grid { grid-template-columns: 1fr; }
    .scale-item { border-right: 0; border-bottom: 1px solid var(--line); }
    .scale-item:last-child { border-bottom: 0; }
    .portfolio-summary { grid-template-columns: 1fr; }
    .portfolio-summary > div { padding: 28px 0; }
    .portfolio-summary > div + div { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
    .final-cta-panel { padding: 42px; }
    .final-cta-panel > div:first-child { text-align: center; }
    .final-cta-panel p { text-align: left; }
    .office-doc-front { left: 12%; }
    .office-doc-back { left: 6%; }
    .office-doc-mid { left: 18%; }
  }

  @media (max-width: 680px) {
    .shell { width: calc(100% - 40px); }
    .section-pad { padding: 68px 0; }
    h1 { font-size: 38px; text-align: center; }
    h2 { font-size: 30px; }
    h3 { font-size: 20px; }
    .hero { padding: 72px 0; }
    .hero-copy { text-align: center; }
    .hero-lede { font-size: 18px; text-align: center; }
    .hero-actions { flex-direction: column; }
    .hero-actions .button { width: 100%; }
    .hero-art { max-width: 420px; }
    .proof-grid { grid-template-columns: 1fr; }
    .proof-item { border-right: 0; border-bottom: 1px solid var(--line); padding: 18px 0; }
    .proof-item:first-child { padding-left: 0; }
    .proof-item:last-child { border-bottom: 0; }
    .section-heading { margin-bottom: 30px; }
    .section-heading-center { text-align: center; margin-left: auto; margin-right: auto; }
    .section-heading-center .section-intro { text-align: center; }
    .section-heading-center.mobile-left { text-align: left; margin-left: 0; margin-right: 0; }
    .section-heading-center.mobile-left h2, .section-heading-center.mobile-left .section-intro { margin-left: 0; margin-right: 0; text-align: left; }
    .section-heading.on-dark.section-heading-center { text-align: center; }
    .overview-content p, .split-copy p, .pct-grid p, .claims-copy p, .term-grid p, .prosecution-grid p, .security-grid p { text-align: left; }
    .depth-grid { grid-template-columns: 1fr; border-right: 1px solid var(--line); }
    .depth-item:nth-child(5) { grid-column: auto; }
    .depth-item { border-right: 0; border-bottom: 1px solid var(--line) !important; }
    .depth-item:last-child { border-bottom: 0 !important; }
    .depth-index { margin-bottom: 10px; }
    .centered-support { text-align: left; margin-top: 0; }
    .pct-panel { padding: 24px 20px; border-radius: 24px; }
    .deadline-number { font-size: 62px; }
    .relationship-map { border-radius: 24px; }
    .relation-row { grid-template-columns: 42px 1fr; padding: 20px; }
    .asset-layer, .asset-bottom { grid-template-columns: 1fr; }
    .two-column-detail { grid-template-columns: 1fr; }
    .detail-block { padding: 25px 0; }
    .detail-block + .detail-block { border-left: 0; border-top: 1px solid var(--line); padding-left: 0; }
    .prosecution-visual { min-height: 360px; }
    .office-doc { width: 250px; height: 300px; }
    .office-doc-front { left: 10%; padding: 24px; }
    .office-doc-mid { left: 19%; }
    .office-doc-back { left: 4%; }
    .prior-step { grid-template-columns: 48px 1fr; gap: 16px; }
    .prior-step > div:last-child { display: block; }
    .prior-step h3, .prior-step p { grid-column: auto; padding-top: 0; }
    .prior-step p { margin-top: 8px; }
    .tech-grid { grid-template-columns: 1fr; }
    .tech-item { padding: 24px 20px; }
    .workflow-grid { grid-template-columns: 1fr; }
    .workflow-step { padding: 24px 20px; }
    .security-matrix { grid-template-columns: 1fr; }
    .security-item { border-right: 0 !important; border-bottom: 1px solid #393D44 !important; }
    .security-item:last-child { border-bottom: 0 !important; }
    .related-row { grid-template-columns: 1fr 42px; }
    .related-row p { font-size: 16px; }
    .faq-button { padding: 19px 20px; }
    .faq-answer.open > p { padding: 0 20px 22px; }
    .resource-grid { grid-template-columns: 1fr; }
    .final-cta { padding: 64px 0; }
    .final-cta-panel { padding: 34px 24px; border-radius: 24px; }
    .final-cta-panel h2 { text-align: center; }
    .final-actions .button { min-height: 52px; }
  }

  @media (max-width: 360px) {
    .shell { width: calc(100% - 40px); }
    .hero-art { max-width: 340px; }
    .office-doc { width: 225px; }
    .office-doc-front { left: 6%; }
    .office-doc-mid { left: 15%; }
    .office-doc-back { left: 0; }
    .tech-item { grid-template-columns: 42px 1fr; gap: 14px; }
    .icon-box { width: 40px; height: 40px; }
  }
`;
