import React, { useState } from "react";

const URLS = {
  quote: "https://app.stepes.com/quote/",
  contactSales: "https://www.stepes.com/contact-sales/",
  patent: "https://www.stepes.com/patent-translation-services/",
  chinesePatent: "https://www.stepes.com/chinese-patent-translation-services/",
  japanesePatent: "https://www.stepes.com/japanese-patent-translation-services/",
  germanPatent: "https://www.stepes.com/german-patent-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
  security: "https://www.stepes.com/security/",
};

const technologies = [
  {
    title: "Semiconductors & Electronics",
    text: "Semiconductor fabrication, integrated circuits, displays, sensors, memory systems, packaging, and electronic components.",
  },
  {
    title: "Automotive & Mobility",
    text: "Electric vehicles, vehicle electronics, autonomous systems, sensors, powertrains, and advanced mobility technologies.",
  },
  {
    title: "Batteries & Energy Storage",
    text: "Battery chemistry, electrode materials, cell architecture, charging technologies, energy storage, and battery management.",
  },
  {
    title: "Telecommunications",
    text: "Wireless communications, RF technologies, networking, mobile devices, signal processing, and emerging 5G/6G systems.",
  },
  {
    title: "AI & Software",
    text: "Machine learning, computer vision, data processing, software architecture, cybersecurity, and computer-implemented inventions.",
  },
  {
    title: "Biotechnology & Pharmaceuticals",
    text: "Biologics, therapeutics, formulations, molecular technologies, diagnostics, bioprocessing, and pharmaceutical development.",
  },
  {
    title: "Medical Devices",
    text: "Diagnostic systems, imaging, surgical devices, monitoring equipment, digital health, and other medical innovations.",
  },
  {
    title: "Advanced Manufacturing",
    text: "Robotics, industrial automation, materials engineering, mechanical systems, production equipment, and precision manufacturing.",
  },
];

const faqs = [
  {
    q: "Do you translate patents from English into Korean?",
    a: "Yes. Stepes provides English-to-Korean patent translation for applications, specifications, claims, abstracts, drawing text, amendments, prosecution materials, PCT national-phase content, and related technical documents. The workflow can be adapted to the technical field, intended use, existing patent-family terminology, and required review level.",
  },
  {
    q: "Do you translate Korean patents into English?",
    a: "Yes. We translate Korean patents and related IP documents into English for prior-art research, patentability analysis, freedom-to-operate research, litigation, invalidity investigations, competitive intelligence, technology landscaping, portfolio review, and other IP purposes. Projects can range from selected claims or passages to complete patent translations.",
  },
  {
    q: "Can Stepes support Korean PCT national-phase translation?",
    a: "Yes. Stepes supports Korean translation of PCT application content for clients and patent professionals managing national-phase work in Korea. Depending on the matter and filing instructions, translated content may include the description, claims, abstract, drawing text, amendments, and other relevant application materials. Applicants should confirm current filing requirements, deadlines, and procedural questions with qualified patent counsel or the appropriate filing professional.",
  },
  {
    q: "What is MOIP, and is it the same as KIPO?",
    a: "MOIP is Korea’s Ministry of Intellectual Property, the current national authority responsible for intellectual property administration. It replaced the former Korean Intellectual Property Office (KIPO). Because KIPO was the established name for many years, it continues to appear in older patent records, corporate documentation, search systems, and industry terminology.",
  },
  {
    q: "Can you translate Korean patent claims and specifications?",
    a: "Yes. Stepes translates complete patent specifications as well as independent and dependent claims. For Korean patent claims, we pay particular attention to defined terminology, dependencies, technical relationships, numerical information, repeated claim elements, and alignment between the claims and detailed description.",
  },
  {
    q: "Do you translate Korean prior art for patentability or freedom-to-operate research?",
    a: "Yes. Korean-to-English patent translation can support patentability searches, freedom-to-operate analysis, invalidity research, competitor monitoring, technology landscaping, and litigation preparation. Depending on your research requirements, Stepes can support screening, summaries, selected-passage translation, full patent translation, or additional review for higher-stakes use.",
  },
  {
    q: "Can you maintain terminology across Korean and English patent families?",
    a: "Yes. When appropriate reference materials are available, Stepes can use prior translations, client terminology, related applications, approved claims, bilingual glossaries, and translation memory to improve consistency across Korean and English patent-family documents. We also distinguish between terminology variation that should be harmonized and substantive source changes that need to remain visible in translation.",
  },
  {
    q: "Can you translate Korean patent prosecution documents?",
    a: "Yes. We translate Korean and English office actions, amendments, responses, examiner correspondence, claim revisions, technical supporting materials, and other prosecution-related content. When these documents relate to an existing patent application, we can reference previously established terminology to improve continuity across the matter.",
  },
  {
    q: "Can Stepes provide certified Korean patent translations when required?",
    a: "Stepes can support certified translation requirements when certification is requested for a particular project or use. Certification requirements vary by document, jurisdiction, receiving organization, and intended purpose, so clients should confirm the specific requirement with their attorney, filing professional, court, government authority, or other requesting party before translation begins.",
  },
  {
    q: "How does Stepes protect confidential or unpublished Korean patent material?",
    a: "Stepes supports secure workflows for unpublished patent applications, invention disclosures, R&D documentation, patent strategy, litigation materials, and other sensitive intellectual property. Depending on project requirements, safeguards can include controlled access, secure file handling, confidentiality procedures, NDA-based workflows, and restricted linguistic resource access.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" focusable="false">
      <path d="M4 10h11M11 6l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PatentHeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 500">
        <rect x="108" y="66" width="322" height="376" rx="24" className="art-sheet-back" />
        <rect x="152" y="38" width="338" height="390" rx="24" className="art-sheet" />
        <path d="M404 38v86h86" className="art-fold" />
        <path d="M404 38l86 86" className="art-fold-soft" />
        <rect x="196" y="92" width="112" height="34" rx="17" className="art-pill" />
        <text x="252" y="115" textAnchor="middle" className="art-korean">특허</text>
        <line x1="196" y1="160" x2="436" y2="160" className="art-line" />
        <line x1="196" y1="190" x2="404" y2="190" className="art-line muted" />
        <line x1="196" y1="220" x2="444" y2="220" className="art-line" />
        <line x1="196" y1="250" x2="374" y2="250" className="art-line muted" />
        <rect x="196" y="286" width="248" height="91" rx="14" className="claim-box" />
        <line x1="220" y1="312" x2="406" y2="312" className="art-line short" />
        <line x1="220" y1="338" x2="388" y2="338" className="art-line muted short" />
        <line x1="220" y1="364" x2="352" y2="364" className="art-line short" />
        <circle cx="478" cy="319" r="62" className="art-node" />
        <path d="M452 319h52M478 293v52" className="art-accent-stroke" />
        <circle cx="107" cy="195" r="42" className="art-mini" />
        <path d="M88 194h38M107 176v36" className="art-mini-stroke" />
        <path d="M112 388c38 28 70 42 108 48" className="art-connector" />
        <path d="M478 382c-18 24-44 41-74 49" className="art-connector" />
      </svg>
    </div>
  );
}

function ClaimsArt() {
  return (
    <div className="claims-art" aria-hidden="true">
      <div className="claims-doc">
        <div className="claims-doc-top">
          <span className="doc-tag">CLAIMS</span>
          <span className="doc-language">EN ↔ KO</span>
        </div>
        <div className="claim-line claim-primary"><span>1.</span><i /></div>
        <div className="claim-line"><span>2.</span><i /></div>
        <div className="claim-line"><span>3.</span><i /></div>
        <div className="claim-link claim-link-one" />
        <div className="claim-link claim-link-two" />
        <div className="term-chip term-a">defined term</div>
        <div className="term-chip term-b">same term</div>
        <div className="claim-note">DEPENDENCY + TERMINOLOGY</div>
      </div>
    </div>
  );
}

function FamilyDiagram() {
  return (
    <div className="family-diagram" role="img" aria-label="Patent-family terminology consistency across international filings">
      <div className="family-root">
        <span className="family-kicker">ORIGINAL APPLICATION</span>
        <strong>Core Patent Terminology</strong>
      </div>
      <div className="family-trunk" />
      <div className="family-branches">
        {[
          ["PCT", "International application"],
          ["KOREA", "MOIP national phase"],
          ["U.S.", "Related filing"],
          ["EUROPE", "Related filing"],
        ].map(([title, text]) => (
          <div className="family-node" key={title}>
            <span>{title}</span>
            <strong>{text}</strong>
          </div>
        ))}
      </div>
      <div className="family-caption">One controlled terminology record across related documents</div>
    </div>
  );
}

function FAQItem({ item, index, openIndex, setOpenIndex }) {
  const isOpen = openIndex === index;
  const panelId = `faq-panel-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className={`faq-item ${isOpen ? "is-open" : ""}`}>
      <button
        id={buttonId}
        className="faq-question"
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setOpenIndex(isOpen ? -1 : index)}
      >
        <span>{item.q}</span>
        <span className="faq-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        id={panelId}
        className="faq-answer"
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
      >
        <p>{item.a}</p>
      </div>
    </div>
  );
}

export default function StepesKoreanPatentTranslationWireframe() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="stepes-page">
      <style>{styles}</style>

      <main>
        <section className="hero-section">
          <div className="shell hero-grid">
            <div className="hero-copy">
              <h1>Korean Patent Translation Services</h1>
              <p className="hero-lede">
                Translate patents between Korean and English with the technical accuracy, terminology control, and subject-matter expertise required for global intellectual property. Stepes supports Korean patent translation for filing and prosecution, PCT national-phase work, prior-art research, IP disputes, and multilingual patent-family workflows.
              </p>
              <div className="hero-proof" aria-label="Service focus">
                <span>English ↔ Korean</span>
                <span>MOIP (Formerly KIPO)</span>
                <span>PCT National Phase</span>
                <span>Patent-Family Terminology</span>
              </div>
              <div className="hero-actions">
                <a className="btn btn-primary" href={URLS.quote}>Request a Patent Translation Quote</a>
                <a className="btn btn-secondary" href={URLS.contactSales}>Talk to an IP Translation Specialist</a>
              </div>
            </div>
            <PatentHeroArt />
          </div>
        </section>

        <section className="section white-section direction-section">
          <div className="shell editorial-split">
            <div className="section-heading editorial-heading">
              <h2>Korean Patent Translation for Filing, Research, and IP Strategy</h2>
              <p>
                Korean patent translation serves different purposes depending on the direction of translation and how the translated content will be used.
              </p>
              <p>
                As part of Stepes’ broader <a className="editorial-link inline" href={URLS.patent}>Patent Translation Services</a>, our Korean patent specialists support both directions with workflows matched to the intended use, technical field, and level of review.
              </p>
            </div>

            <div className="direction-panel">
              <article className="direction-column">
                <div className="direction-label">ENGLISH → KOREAN</div>
                <h3>For Korean Filing and Prosecution</h3>
                <p>Translate patent content for Korea-related filing workflows while preserving technical relationships, defined terminology, claim structure, and consistency across the application.</p>
                <ul className="clean-list two-col-list">
                  <li>Patent applications and specifications</li>
                  <li>Independent and dependent claims</li>
                  <li>Abstracts and drawing text</li>
                  <li>Amendments and revised claims</li>
                  <li>Patent prosecution materials</li>
                  <li>PCT national-phase content</li>
                </ul>
              </article>
              <article className="direction-column">
                <div className="direction-label">KOREAN → ENGLISH</div>
                <h3>For Research, Analysis, and IP Strategy</h3>
                <p>Make Korean patent publications accessible to international legal, research, and technology teams without translating more content than the intended use requires.</p>
                <ul className="clean-list two-col-list">
                  <li>Prior-art research</li>
                  <li>Patentability analysis</li>
                  <li>Freedom-to-operate research</li>
                  <li>Invalidity investigations</li>
                  <li>Litigation and IP disputes</li>
                  <li>Portfolio and technology reviews</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="section dark-section moip-section">
          <div className="shell moip-grid">
            <div className="section-heading dark-heading">
              <div className="eyebrow eyebrow-dark">KOREAN FILING & PCT</div>
              <h2>Korean Patent Translation for MOIP and PCT National-Phase Work</h2>
              <p>
                Korea’s intellectual property authority is the <strong>Ministry of Intellectual Property (MOIP)</strong>, which replaced the former Korean Intellectual Property Office (KIPO). Stepes supports law firms, patent teams, corporations, and filing partners with Korean patent translation for MOIP-related workflows and PCT national-phase entry.
              </p>
              <p>
                Translation requirements vary by application and filing circumstances. Stepes prepares translated patent content for attorney, patent-agent, or filing-team review while qualified patent professionals remain responsible for jurisdiction-specific filing requirements, deadlines, and legal strategy.
              </p>
            </div>

            <div className="moip-panel">
              <div className="moip-nameplate">
                <span>MOIP</span>
                <strong>Ministry of Intellectual Property</strong>
                <small>Formerly KIPO</small>
              </div>
              <div className="moip-rows">
                {[
                  ["Patent Specifications", "Technical descriptions, reference numbers, units, conditions, and process sequences."],
                  ["Patent Claims", "Defined terms, claim relationships, and consistency across the full claim set."],
                  ["Abstracts & Drawing Text", "Concise technical language aligned with the underlying application."],
                  ["Amendments & Prosecution", "Established patent terminology carried into evolving application content."],
                  ["Related Patent Families", "Reference to prior filings and approved terminology where appropriate."],
                ].map(([title, text]) => (
                  <div className="moip-row" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section white-section claims-section">
          <div className="shell claims-grid">
            <div className="section-heading mobile-center-group">
              <h2>Korean Patent Claims Require More Than Literal Translation</h2>
              <p>
                Patent claims compress complex technical and legal concepts into highly structured language. A translation can read naturally and still create problems if a component is renamed, a functional relationship changes, or a defined term varies across related claims.
              </p>
              <div className="claims-points">
                {[
                  ["Claim Structure", "Preserve dependencies, references to preceding claims, and relationships among claimed elements."],
                  ["Defined Terminology", "Maintain invention-specific terms consistently across claims and the detailed description."],
                  ["Technical Relationships", "Protect modifiers, conditions, sequences, ranges, and functional relationships across English and Korean syntax."],
                  ["Cross-Document Consistency", "Align claim language with the specification, drawings, amendments, and related patent-family documents."],
                ].map(([title, text]) => (
                  <div className="claims-point" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <ClaimsArt />
          </div>
        </section>

        <section className="section blush-section prior-art-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-center-group">
              <h2>Korean-to-English Patent Translation for Prior Art and Research</h2>
              <p>
                Korean patent literature can contain important technical and competitive information. Stepes helps patent attorneys, IP teams, researchers, and technology companies evaluate that information with translation depth matched to the importance of each document.
              </p>
            </div>

            <div className="use-case-strip" aria-label="Prior-art translation use cases">
              {[
                "Patentability",
                "Freedom to Operate",
                "Invalidity",
                "Competitor Monitoring",
                "Technology Landscaping",
                "Litigation",
                "Portfolio Review",
                "Due Diligence",
              ].map((item) => <span key={item}>{item}</span>)}
            </div>

            <div className="depth-flow">
              {[
                ["Screen", "Identify Korean-language documents that may warrant closer attention."],
                ["Summarize", "Capture the key technical concepts, claims, embodiments, or relevant findings."],
                ["Selected Passages", "Translate claims, abstracts, examples, figures, or other material sections."],
                ["Full Translation", "Translate the complete Korean patent when comprehensive English access is required."],
                ["Verified Translation", "Add further linguistic or technical review for higher-stakes use."],
              ].map(([title, text], index) => (
                <div className="depth-step" key={title}>
                  <div className="depth-marker">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section white-section prosecution-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-center-group">
              <h2>Korean Patent Prosecution and IP Dispute Translation</h2>
              <p>
                Patent language continues to evolve after filing. Stepes helps keep Korean and English terminology aligned as applications move through prosecution, analysis, and IP disputes.
              </p>
            </div>

            <div className="editorial-matrix">
              {[
                ["Office Actions and Examiner Communications", "Translate patent-office correspondence so international counsel, inventors, and in-house IP teams can understand Korea-related prosecution developments."],
                ["Amendments and Responses", "Maintain continuity with terminology used in the underlying application and prior claims as patent language changes during prosecution."],
                ["Claim Charts and Technical Analyses", "Translate structured comparisons, technical references, and supporting materials used in infringement, validity, licensing, and portfolio analysis."],
                ["Expert and Evidentiary Materials", "Support Korean-English translation of technical reports, exhibits, declarations, supporting documentation, and other IP dispute materials."],
              ].map(([title, text]) => (
                <article className="matrix-cell" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="quiet-note">
              <strong>Workflow matched to purpose.</strong>
              <span>Prosecution content may prioritize continuity with an existing application, while dispute-related material may require additional review, bilingual traceability, or coordination across a larger evidence set.</span>
            </div>
          </div>
        </section>

        <section className="section dark-section technology-section">
          <div className="shell">
            <div className="section-heading centered-heading dark-heading mobile-center-group">
              <h2>Korean Patent Translation Across Advanced Technologies</h2>
              <p>
                Accurate patent translation depends on understanding the technology well enough to recognize how terminology, components, processes, and technical relationships function within the invention.
              </p>
            </div>

            <div className="tech-grid">
              {technologies.map((tech) => (
                <article className="tech-item" key={tech.title}>
                  <h3>{tech.title}</h3>
                  <p>{tech.text}</p>
                </article>
              ))}
            </div>
            <a className="editorial-link dark-link" href={URLS.technical}>Explore Technical Translation Services <ArrowIcon /></a>
          </div>
        </section>

        <section className="section white-section family-section">
          <div className="shell family-grid">
            <FamilyDiagram />
            <div className="section-heading family-copy">
              <h2>Keep Korean Patent-Family Terminology Consistent</h2>
              <p>
                One invention may appear in a PCT application and later in Korean, U.S., European, Chinese, Japanese, and other filings. It may also generate amendments, prosecution documents, divisional applications, and years of related correspondence.
              </p>
              <p>
                Stepes helps clients maintain terminology across Korean and English patent families by using available reference material and language assets throughout the translation lifecycle.
              </p>
              <div className="family-list">
                {[
                  ["Reuse Approved Patent Terminology", "Use validated translations for recurring technical expressions, claim elements, and invention-specific terms."],
                  ["Build Korean-English Terminology Resources", "Capture preferred equivalents in bilingual glossaries for future related work."],
                  ["Reference Related Family Members", "Review earlier filings and translations when they provide useful context for recurring concepts."],
                  ["Apply Translation Memory Intelligently", "Reuse validated language while evaluating whether it remains appropriate in the new context."],
                  ["Flag Meaningful Differences", "Reflect substantive source changes rather than forcing artificial consistency across family members."],
                ].map(([title, text]) => (
                  <div className="family-list-item" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section soft-section workflow-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-left-structured">
              <h2>A Korean Patent Translation Workflow Matched to Intended Use</h2>
              <p>
                A patent translation for filing should not automatically follow the same workflow as a translation used to screen prior art. Stepes begins with the purpose of the translation and builds the workflow around it.
              </p>
            </div>
            <div className="workflow-row">
              {[
                ["01", "Define the Intended Use", "Confirm whether the translation supports filing, prosecution, prior art, research, litigation, portfolio analysis, or another IP workflow."],
                ["02", "Match Korean + Technical Expertise", "Select resources according to the language direction, patent content, subject matter, and required review level."],
                ["03", "Establish Patent-Family Terminology", "Review prior translations, related filings, client glossaries, claims, and other available reference material."],
                ["04", "Translate, Review, and QA", "Combine translation technology and professional linguistic review with terminology, technical, and document-level quality controls."],
              ].map(([num, title, text]) => (
                <article className="workflow-step" key={num}>
                  <div className="workflow-number">{num}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="ai-note">
              <strong>AI where it adds value, professional review where judgment matters.</strong>
              <span>AI-assisted translation may be incorporated when appropriate to the content and workflow, while professional reviewers evaluate the translated language according to the required quality level.</span>
            </div>
          </div>
        </section>

        <section className="section white-section quality-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-center-group">
              <h2>Quality Controls for Korean Patent Language</h2>
              <p>
                Patent translation quality depends on whether important relationships survive across the entire document, not simply whether individual sentences appear correct.
              </p>
            </div>
            <div className="quality-grid">
              {[
                ["Claims Consistency", "Check recurring claim terminology, references among claims, defined components, and relationships between independent and dependent claims."],
                ["Bilingual Terminology", "Review key Korean and English technical terms across specifications, claims, drawings, amendments, and related documents."],
                ["Technical Accuracy", "Verify technical expressions, units, process conditions, numerical information, and specialized terminology in the context of the invention."],
                ["Document Integrity", "Check reference numbers, symbols, headings, tables, drawing references, cross-references, numbering, and other structural elements."],
              ].map(([title, text]) => (
                <article className="quality-item" key={title}>
                  <div className="quality-mark" aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section blush-section security-section">
          <div className="shell security-grid">
            <div className="section-heading security-copy">
              <div className="eyebrow">CONFIDENTIAL IP</div>
              <h2>Secure Translation for Unpublished Korean Patent Content</h2>
              <p>
                Patent documents can contain some of an organization’s most valuable technical information long before the underlying invention becomes public. Stepes supports secure Korean patent translation for sensitive intellectual property and pre-publication materials.
              </p>
              <a className="editorial-link" href={URLS.security}>Explore Stepes Security <ArrowIcon /></a>
            </div>
            <div className="security-panel">
              <div className="security-content-list">
                {[
                  "Unpublished patent applications",
                  "Pre-filing invention disclosures",
                  "Confidential R&D and product roadmaps",
                  "Patent acquisition and licensing materials",
                  "Litigation strategy and confidential IP analyses",
                  "Confidential patent-family documents",
                ].map((item) => <div className="security-content-row" key={item}>{item}</div>)}
              </div>
              <div className="security-controls">
                <h3>Workflow safeguards can include</h3>
                <ul className="clean-list">
                  <li>Controlled access</li>
                  <li>Secure file handling</li>
                  <li>Confidentiality procedures</li>
                  <li>NDA-based workflows</li>
                  <li>Restricted linguistic resource access</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section white-section engagement-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-center-group">
              <h2>From One Korean Patent to Ongoing IP Programs</h2>
              <p>
                Korean patent translation needs can range from a single document to a recurring stream of applications, prosecution materials, research documents, and international patent-family content.
              </p>
            </div>
            <div className="engagement-row">
              {[
                ["Single Patent", "Translate one Korean or English patent application, publication, specification, claim set, or other IP document."],
                ["Patent Family", "Coordinate terminology and translation across related Korean and international patent-family documents."],
                ["Prior-Art Review", "Scale Korean-to-English translation from initial screening and selected passages to complete translations."],
                ["Ongoing Patent Portfolio", "Support recurring Korean filing, prosecution, research, and portfolio translation with reusable terminology resources."],
              ].map(([title, text]) => (
                <article className="engagement-item" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <p className="engagement-summary">
              For ongoing programs, centralized terminology, translation memory, workflow automation, and repeatable quality controls can improve consistency while reducing unnecessary rework.
            </p>
          </div>
        </section>

        <section className="section soft-section related-section">
          <div className="shell">
            <div className="section-heading centered-heading mobile-center-group">
              <h2>Explore Related Patent Translation Services</h2>
              <p>Extend your Korean patent work with related Stepes services for major patent jurisdictions, technical content, and legal workflows.</p>
            </div>
            <div className="related-list">
              {[
                ["Patent Translation Services", "Global filing, prosecution, prior art, litigation, and international IP portfolios.", URLS.patent],
                ["Chinese Patent Translation Services", "Chinese-English patent translation for CNIPA-related workflows, prior art, and patent families.", URLS.chinesePatent],
                ["Japanese Patent Translation Services", "English-Japanese patent translation for JPO-related workflows, Japanese prior art, and prosecution.", URLS.japanesePatent],
                ["German Patent Translation Services", "German-English patent translation for German and European IP workflows, research, and patent families.", URLS.germanPatent],
              ].map(([title, text, href]) => (
                <a className="related-row" href={href} key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <span className="related-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
            <div className="related-secondary">
              <a className="editorial-link" href={URLS.legal}>Legal Translation Services <ArrowIcon /></a>
              <a className="editorial-link" href={URLS.technical}>Technical Translation Services <ArrowIcon /></a>
            </div>
          </div>
        </section>

        <section className="section white-section faq-section">
          <div className="shell faq-layout">
            <div className="section-heading faq-heading">
              <h2>Korean Patent Translation FAQs</h2>
              <p>Common questions about English-Korean patent translation, MOIP, PCT national-phase work, prior art, prosecution, terminology, certification, and confidentiality.</p>
            </div>
            <div className="faq-panel">
              {faqs.map((item, index) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  index={index}
                  openIndex={openIndex}
                  setOpenIndex={setOpenIndex}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta-section">
          <div className="shell">
            <div className="final-cta">
              <div>
                <h2>Translate Korean Patent Content With Confidence</h2>
                <p>
                  Translate English-Korean patent applications, PCT national-phase content, prior art, prosecution documents, and patent families with technical expertise and controlled terminology. Stepes scales from one patent to ongoing IP programs.
                </p>
              </div>
              <div className="final-actions">
                <a className="btn btn-primary" href={URLS.quote}>Request a Patent Translation Quote</a>
                <a className="editorial-link cta-text-link" href={URLS.contactSales}>Talk to an IP Translation Specialist <ArrowIcon /></a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --pink-light: #F2A7C6;
    --ink: #202127;
    --body: #454851;
    --muted: #676B74;
    --line: #E4E5E9;
    --soft: #F6F7F8;
    --dark: #202126;
    --dark-2: #292A30;
    --white: #FFFFFF;
  }

  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }

  .stepes-page {
    width: 100%;
    overflow-x: clip;
    color: var(--ink);
    background: var(--white);
    font-family: "Inter Tight", "Inter", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  .stepes-page a { color: inherit; }
  .stepes-page p { margin: 0; }
  .stepes-page h1,
  .stepes-page h2,
  .stepes-page h3 { margin: 0; font-weight: 600; letter-spacing: -0.025em; }
  .stepes-page h1 { font-size: 48px; line-height: 1.04; }
  .stepes-page h2 { font-size: 36px; line-height: 1.12; }
  .stepes-page h3 { font-size: 24px; line-height: 1.2; }
  .stepes-page p,
  .stepes-page li { font-size: 16px; line-height: 1.68; color: var(--body); font-weight: 400; }

  .shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .section { padding: 96px 0; }
  .white-section { background: #fff; }
  .soft-section { background: var(--soft); }
  .blush-section { background: var(--blush); }
  .dark-section { background: var(--dark); color: #fff; }

  .section-heading { max-width: 820px; }
  .section-heading > p { margin-top: 20px; }
  .section-heading > p + p { margin-top: 14px; }
  .centered-heading { margin: 0 auto 52px; text-align: center; }
  .centered-heading > p { max-width: 790px; margin-left: auto; margin-right: auto; }

  .eyebrow {
    display: block;
    margin: 0 0 18px;
    color: var(--magenta);
    font-size: 11px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }
  .eyebrow-dark { color: var(--pink-light); }

  .btn {
    min-height: 48px;
    padding: 13px 24px;
    border-radius: 999px;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 16px;
    line-height: 1.2;
    font-weight: 600;
    transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease;
  }
  .btn:hover { transform: translateY(-1px); }
  .btn:focus-visible,
  .editorial-link:focus-visible,
  .related-row:focus-visible,
  .faq-question:focus-visible { outline: 3px solid rgba(193, 29, 99, 0.26); outline-offset: 3px; }

  .btn-primary,
  .btn-primary:link,
  .btn-primary:visited,
  .btn-primary:hover,
  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:focus-visible {
    background: var(--magenta);
    border-color: var(--magenta);
    color: #fff !important;
  }
  .btn-primary * { color: #fff !important; fill: #fff !important; stroke: #fff !important; }
  .btn-primary:hover { background: var(--magenta-dark); border-color: var(--magenta-dark); box-shadow: 0 10px 24px rgba(122, 21, 66, 0.16); }

  .btn-secondary {
    background: #fff;
    color: var(--ink);
    border-color: #D5D7DC;
  }
  .btn-secondary:hover { border-color: #BFC2C8; box-shadow: 0 8px 22px rgba(27, 28, 32, 0.07); }

  .editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: var(--magenta) !important;
    text-decoration: none;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 600;
  }
  .editorial-link.inline { display: inline; }
  .editorial-link svg { width: 18px; height: 18px; flex: 0 0 18px; }
  .editorial-link:hover { color: var(--magenta-dark) !important; }
  .dark-link { color: var(--pink-light) !important; margin-top: 34px; }
  .dark-link:hover { color: #fff !important; }

  /* Hero */
  .hero-section {
    background: linear-gradient(135deg, #fff 0%, #fff 62%, #FCF7F9 100%);
    padding: 104px 0 96px;
    border-bottom: 1px solid #EEEFF1;
  }
  .hero-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.06fr) minmax(390px, .94fr);
    gap: 54px;
    align-items: center;
  }
  .hero-copy { max-width: 690px; }
  .hero-copy h1 { max-width: 640px; }
  .hero-lede {
    max-width: 680px;
    margin-top: 24px !important;
    font-size: 18px !important;
    line-height: 1.62 !important;
    color: #3C3F47 !important;
  }
  .hero-proof {
    margin-top: 28px;
    padding: 18px 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px 28px;
    border-top: 1px solid #E2E3E7;
    border-bottom: 1px solid #E2E3E7;
  }
  .hero-proof span {
    position: relative;
    padding-left: 14px;
    color: #494C54;
    font-size: 16px;
    line-height: 1.45;
    font-weight: 600;
  }
  .hero-proof span::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--magenta);
    position: absolute;
    left: 0;
    top: 0.62em;
  }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }

  .hero-art {
    width: 100%;
    max-width: 560px;
    margin-left: auto;
    padding: 20px;
  }
  .hero-art svg { display: block; width: 100%; height: auto; overflow: visible; }
  .art-sheet-back { fill: #F1F2F4; stroke: #777B84; stroke-width: 2; }
  .art-sheet { fill: #fff; stroke: #595D66; stroke-width: 2.2; }
  .art-fold { fill: #FAEFF4; stroke: #595D66; stroke-width: 2.2; }
  .art-fold-soft { stroke: #D3B0C0; stroke-width: 1.5; fill: none; }
  .art-pill { fill: #F8E7EF; stroke: #C11D63; stroke-width: 1.6; }
  .art-korean { fill: #6A2B48; font-size: 18px; font-weight: 600; font-family: Arial, sans-serif; }
  .art-line { stroke: #676B74; stroke-width: 6; stroke-linecap: round; }
  .art-line.muted { stroke: #A6A9AF; }
  .art-line.short { stroke-width: 5; }
  .claim-box { fill: #FAFAFB; stroke: #B2B5BC; stroke-width: 1.6; }
  .art-node { fill: #fff; stroke: #6E727B; stroke-width: 2; }
  .art-accent-stroke { stroke: #C11D63; stroke-width: 6; stroke-linecap: round; }
  .art-mini { fill: #FAFAFB; stroke: #81858D; stroke-width: 2; }
  .art-mini-stroke { stroke: #777B84; stroke-width: 4; stroke-linecap: round; }
  .art-connector { fill: none; stroke: #A5A8AE; stroke-width: 2; stroke-dasharray: 5 8; stroke-linecap: round; }

  /* Direction */
  .editorial-split {
    display: grid;
    grid-template-columns: minmax(290px, .72fr) minmax(0, 1.28fr);
    gap: 72px;
    align-items: start;
  }
  .editorial-heading { position: sticky; top: 40px; }
  .direction-panel {
    border: 1px solid var(--line);
    border-radius: 30px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: #fff;
    box-shadow: 0 18px 50px rgba(31, 32, 37, 0.05);
  }
  .direction-column { padding: 38px; }
  .direction-column + .direction-column { border-left: 1px solid var(--line); }
  .direction-label {
    color: var(--magenta);
    font-size: 12px;
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: .12em;
    margin-bottom: 16px;
  }
  .direction-column p { margin-top: 16px; }
  .clean-list { list-style: none; padding: 0; margin: 22px 0 0; }
  .clean-list li { position: relative; padding-left: 18px; margin-top: 9px; }
  .clean-list li::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #969AA2;
    left: 0;
    top: 0.64em;
  }

  /* MOIP */
  .moip-grid {
    display: grid;
    grid-template-columns: minmax(0, .82fr) minmax(0, 1.18fr);
    gap: 72px;
    align-items: start;
  }
  .dark-heading h2,
  .dark-heading h3 { color: #fff; }
  .dark-heading p,
  .dark-section p { color: #D2D4D9; }
  .dark-heading strong { color: #fff; font-weight: 600; }
  .moip-panel {
    border: 1px solid #3A3C43;
    border-radius: 30px;
    overflow: hidden;
    background: var(--dark-2);
  }
  .moip-nameplate {
    padding: 28px 30px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 16px;
    align-items: center;
    border-bottom: 1px solid #3B3D43;
    background: #24252A;
  }
  .moip-nameplate span {
    font-size: 22px;
    font-weight: 600;
    color: var(--pink-light);
  }
  .moip-nameplate strong { color: #fff; font-size: 16px; font-weight: 600; }
  .moip-nameplate small { color: #BFC2C8; font-size: 14px; font-weight: 400; }
  .moip-row {
    display: grid;
    grid-template-columns: minmax(170px, .65fr) 1.35fr;
    gap: 26px;
    padding: 25px 30px;
  }
  .moip-row + .moip-row { border-top: 1px solid #3B3D43; }
  .moip-row h3 { color: #fff; font-size: 20px; line-height: 1.25; }
  .moip-row p { color: #C9CBD0; }

  /* Claims */
  .claims-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.02fr) minmax(390px, .98fr);
    gap: 70px;
    align-items: center;
  }
  .claims-points { margin-top: 34px; border-top: 1px solid var(--line); }
  .claims-point { padding: 21px 0; display: grid; grid-template-columns: 190px 1fr; gap: 24px; }
  .claims-point + .claims-point { border-top: 1px solid var(--line); }
  .claims-point h3 { font-size: 20px; }
  .claims-art { display: flex; justify-content: center; }
  .claims-doc {
    position: relative;
    width: min(100%, 440px);
    min-height: 450px;
    border: 1.5px solid #7A7E86;
    border-radius: 28px;
    background: #fff;
    box-shadow: 0 24px 60px rgba(32, 33, 39, .09);
    padding: 34px;
  }
  .claims-doc::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    right: -26px;
    bottom: -26px;
    border-radius: 50%;
    background: #F9EAF1;
    z-index: -1;
  }
  .claims-doc-top { display: flex; justify-content: space-between; align-items: center; gap: 16px; margin-bottom: 44px; }
  .doc-tag { color: var(--magenta); font-size: 12px; font-weight: 600; letter-spacing: .13em; }
  .doc-language { color: #686C74; font-size: 14px; font-weight: 600; }
  .claim-line { display: grid; grid-template-columns: 26px 1fr; align-items: center; gap: 12px; margin-bottom: 44px; position: relative; }
  .claim-line span { color: #51545C; font-size: 15px; font-weight: 600; }
  .claim-line i { display: block; height: 8px; border-radius: 8px; background: #A6A9AF; }
  .claim-line:nth-child(3) i { width: 88%; }
  .claim-line:nth-child(4) i { width: 72%; }
  .claim-primary i { background: #70747D; width: 96%; }
  .claim-link { position: absolute; left: 45px; width: 18px; border-left: 1.5px solid #C11D63; border-bottom: 1.5px solid #C11D63; border-radius: 0 0 0 8px; }
  .claim-link-one { top: 164px; height: 61px; }
  .claim-link-two { top: 252px; height: 61px; }
  .term-chip { position: absolute; right: 22px; padding: 8px 12px; border-radius: 999px; border: 1px solid #D6A5BB; background: #FFF8FB; color: #8E234F; font-size: 12px; font-weight: 600; }
  .term-a { top: 173px; }
  .term-b { top: 260px; }
  .claim-note { position: absolute; bottom: 32px; left: 34px; color: #777B84; font-size: 11px; font-weight: 600; letter-spacing: .14em; }

  /* Prior art */
  .use-case-strip {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: 1px solid #E7CFDA;
    border-radius: 24px;
    overflow: hidden;
    background: rgba(255,255,255,.65);
    margin-bottom: 38px;
  }
  .use-case-strip span {
    min-height: 58px;
    padding: 15px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #4D3741;
    font-size: 16px;
    line-height: 1.35;
    font-weight: 600;
  }
  .use-case-strip span:not(:nth-child(4n+1)) { border-left: 1px solid #E7CFDA; }
  .use-case-strip span:nth-child(n+5) { border-top: 1px solid #E7CFDA; }
  .depth-flow {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    border-top: 1px solid #DCC5CF;
    border-bottom: 1px solid #DCC5CF;
  }
  .depth-step { padding: 30px 25px 32px; position: relative; }
  .depth-step + .depth-step { border-left: 1px solid #DCC5CF; }
  .depth-marker { color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 18px; }
  .depth-step h3 { font-size: 20px; }
  .depth-step p { margin-top: 12px; }

  /* Prosecution */
  .editorial-matrix {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid var(--line);
    border-radius: 30px;
    overflow: hidden;
  }
  .matrix-cell { padding: 34px; min-height: 210px; }
  .matrix-cell:nth-child(even) { border-left: 1px solid var(--line); }
  .matrix-cell:nth-child(n+3) { border-top: 1px solid var(--line); }
  .matrix-cell h3 { font-size: 22px; }
  .matrix-cell p { margin-top: 14px; }
  .quiet-note {
    margin-top: 28px;
    padding: 22px 26px;
    border-left: 3px solid var(--magenta);
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 14px 20px;
    align-items: start;
    background: #FAFAFB;
  }
  .quiet-note strong { font-size: 16px; font-weight: 600; line-height: 1.5; }
  .quiet-note span { font-size: 16px; line-height: 1.62; color: var(--body); }

  /* Technology */
  .technology-section { background: #212227; }
  .tech-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid #3C3E44; border-bottom: 1px solid #3C3E44; }
  .tech-item { padding: 30px 26px; }
  .tech-item:not(:nth-child(4n+1)) { border-left: 1px solid #3C3E44; }
  .tech-item:nth-child(n+5) { border-top: 1px solid #3C3E44; }
  .tech-item h3 { color: #fff; font-size: 20px; }
  .tech-item p { margin-top: 12px; color: #C6C9CE; }

  /* Family */
  .family-grid { display: grid; grid-template-columns: minmax(400px, .9fr) minmax(0, 1.1fr); gap: 72px; align-items: center; }
  .family-diagram {
    border: 1px solid #D7D9DE;
    border-radius: 30px;
    padding: 34px;
    background: #FAFAFB;
    box-shadow: 0 20px 48px rgba(28,29,33,.05);
  }
  .family-root {
    border: 1px solid #A6A9B0;
    border-radius: 20px;
    background: #fff;
    padding: 22px;
    text-align: center;
  }
  .family-kicker { display: block; color: var(--magenta); font-size: 11px; font-weight: 600; letter-spacing: .13em; margin-bottom: 7px; }
  .family-root strong { font-size: 18px; font-weight: 600; }
  .family-trunk { height: 34px; width: 1px; background: #A8ABB2; margin: 0 auto; }
  .family-branches { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; position: relative; }
  .family-node {
    min-height: 100px;
    padding: 19px;
    border: 1px solid #D6D8DD;
    border-radius: 18px;
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .family-node span { color: #797D85; font-size: 11px; font-weight: 600; letter-spacing: .12em; }
  .family-node strong { margin-top: 7px; font-size: 16px; line-height: 1.4; font-weight: 600; }
  .family-caption { margin-top: 20px; padding-top: 18px; border-top: 1px solid #DADCE1; color: #585B63; font-size: 16px; line-height: 1.5; text-align: center; }
  .family-copy > p { margin-top: 18px; }
  .family-list { margin-top: 28px; border-top: 1px solid var(--line); }
  .family-list-item { padding: 18px 0; }
  .family-list-item + .family-list-item { border-top: 1px solid var(--line); }
  .family-list-item h3 { font-size: 19px; }
  .family-list-item p { margin-top: 8px; }

  /* Workflow */
  .workflow-row { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); border-top: 1px solid #D9DBDF; border-bottom: 1px solid #D9DBDF; }
  .workflow-step { padding: 30px 26px; }
  .workflow-step + .workflow-step { border-left: 1px solid #D9DBDF; }
  .workflow-number { color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 18px; }
  .workflow-step h3 { font-size: 20px; }
  .workflow-step p { margin-top: 12px; }
  .ai-note {
    max-width: 940px;
    margin: 32px auto 0;
    padding: 22px 26px;
    border-radius: 20px;
    background: #fff;
    border: 1px solid #DFE1E5;
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 24px;
  }
  .ai-note strong { font-size: 16px; line-height: 1.5; font-weight: 600; }
  .ai-note span { font-size: 16px; line-height: 1.62; color: var(--body); }

  /* Quality */
  .quality-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .quality-item { padding: 30px 26px; }
  .quality-item + .quality-item { border-left: 1px solid var(--line); }
  .quality-mark { width: 28px; height: 3px; background: var(--magenta); margin-bottom: 20px; }
  .quality-item h3 { font-size: 20px; }
  .quality-item p { margin-top: 12px; }

  /* Security */
  .security-grid { display: grid; grid-template-columns: minmax(280px, .72fr) minmax(0, 1.28fr); gap: 70px; align-items: start; }
  .security-copy .editorial-link { margin-top: 26px; }
  .security-panel {
    border: 1px solid #E3CBD6;
    border-radius: 30px;
    background: rgba(255,255,255,.66);
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr .82fr;
  }
  .security-content-list { padding: 18px 28px; }
  .security-content-row { padding: 17px 0; font-size: 16px; line-height: 1.5; color: #4E4248; }
  .security-content-row + .security-content-row { border-top: 1px solid #E9D8E0; }
  .security-controls { border-left: 1px solid #E3CBD6; padding: 30px; background: rgba(255,255,255,.42); }
  .security-controls h3 { font-size: 20px; }

  /* Engagement */
  .engagement-row { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .engagement-item { padding: 30px 26px; }
  .engagement-item + .engagement-item { border-left: 1px solid var(--line); }
  .engagement-item h3 { font-size: 20px; }
  .engagement-item p { margin-top: 12px; }
  .engagement-summary { max-width: 820px; margin: 28px auto 0 !important; text-align: center; }

  /* Related */
  .related-list { border-top: 1px solid #DADDDF; }
  .related-row {
    min-height: 110px;
    padding: 24px 6px;
    display: grid;
    grid-template-columns: 1fr 48px;
    gap: 30px;
    align-items: center;
    text-decoration: none;
    border-bottom: 1px solid #DADDDF;
  }
  .related-row h3 { font-size: 22px; color: var(--ink); }
  .related-row p { margin-top: 8px; max-width: 800px; }
  .related-arrow { width: 42px; height: 42px; border-radius: 50%; border: 1px solid #C9CBD0; display: grid; place-items: center; color: var(--magenta); transition: transform 160ms ease, border-color 160ms ease; }
  .related-arrow svg { width: 20px; height: 20px; }
  .related-row:hover .related-arrow { transform: translateX(3px); border-color: #B890A2; }
  .related-secondary { display: flex; flex-wrap: wrap; gap: 28px; margin-top: 28px; }

  /* FAQ */
  .faq-layout { display: grid; grid-template-columns: minmax(260px, .55fr) minmax(0, 1.45fr); gap: 72px; align-items: start; }
  .faq-heading { position: sticky; top: 40px; }
  .faq-panel { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-question {
    width: 100%;
    min-height: 72px;
    padding: 22px 4px;
    display: grid;
    grid-template-columns: 1fr 40px;
    gap: 20px;
    align-items: center;
    border: 0;
    background: transparent;
    color: var(--ink);
    text-align: left;
    cursor: pointer;
    font-family: inherit;
    font-size: 18px;
    line-height: 1.45;
    font-weight: 600;
  }
  .faq-plus { width: 34px; height: 34px; border-radius: 50%; border: 1px solid #D2D4D8; display: grid; place-items: center; color: var(--magenta); font-size: 23px; line-height: 1; font-weight: 400; }
  .faq-answer { padding: 0 58px 24px 4px; }
  .faq-answer p { max-width: 820px; }

  /* Final CTA */
  .final-cta-section { background: #fff; padding: 0 0 72px; }
  .final-cta {
    background: var(--blush);
    border: 1px solid #E8D2DC;
    border-radius: 30px;
    padding: 54px 58px;
    display: grid;
    grid-template-columns: minmax(0, 1.2fr) minmax(280px, .8fr);
    gap: 62px;
    align-items: center;
  }
  .final-cta h2 { max-width: 690px; }
  .final-cta p { margin-top: 18px; max-width: 760px; }
  .final-actions {
    width: min(100%, 350px);
    justify-self: end;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .final-actions .btn { width: 100%; text-align: center; }
  .cta-text-link {
    width: 100%;
    min-height: 44px;
    justify-content: center;
    text-align: center;
    color: var(--magenta) !important;
  }

  @media (max-width: 1120px) {
    .shell { padding-left: 40px; padding-right: 40px; }
    .hero-grid { grid-template-columns: minmax(0, 1.05fr) minmax(350px, .95fr); gap: 34px; }
    .hero-art { padding: 10px; }
    .depth-flow { grid-template-columns: repeat(3, 1fr); border-bottom: 0; }
    .depth-step { border-bottom: 1px solid #DCC5CF; }
    .depth-step:nth-child(4) { border-left: 0; }
    .tech-grid { grid-template-columns: repeat(2, 1fr); }
    .tech-item:nth-child(odd) { border-left: 0; }
    .tech-item:nth-child(even) { border-left: 1px solid #3C3E44; }
    .tech-item:nth-child(n+3) { border-top: 1px solid #3C3E44; }
    .quality-grid,
    .engagement-row { grid-template-columns: repeat(2, 1fr); }
    .quality-item:nth-child(odd),
    .engagement-item:nth-child(odd) { border-left: 0; }
    .quality-item:nth-child(even),
    .engagement-item:nth-child(even) { border-left: 1px solid var(--line); }
    .quality-item:nth-child(n+3),
    .engagement-item:nth-child(n+3) { border-top: 1px solid var(--line); }
  }

  @media (max-width: 900px) {
    .shell { padding-left: 24px; padding-right: 24px; }
    .section { padding: 80px 0; }
    .stepes-page h1 { font-size: 42px; }
    .stepes-page h2 { font-size: 32px; }
    .stepes-page h3 { font-size: 22px; }

    .hero-section { padding: 88px 0 80px; }
    .hero-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 780px; margin: 0 auto; text-align: center; }
    .hero-copy h1 { max-width: 720px; margin-left: auto; margin-right: auto; }
    .hero-lede { margin-left: auto !important; margin-right: auto !important; }
    .hero-proof { max-width: 650px; margin-left: auto; margin-right: auto; text-align: left; }
    .hero-actions { justify-content: center; }
    .hero-art { max-width: 520px; margin: 20px auto 0; }

    .editorial-split,
    .moip-grid,
    .claims-grid,
    .family-grid,
    .security-grid,
    .faq-layout { grid-template-columns: 1fr; gap: 48px; }
    .editorial-heading,
    .faq-heading { position: static; }

    .direction-panel { grid-template-columns: 1fr 1fr; }
    .moip-panel { max-width: 820px; }
    .claims-section .mobile-center-group { text-align: center; margin-left: auto; margin-right: auto; }
    .claims-section .mobile-center-group > p { max-width: 760px; margin-left: auto; margin-right: auto; }
    .claims-section .claims-points { text-align: left; }
    .claims-art { order: 0; }
    .family-diagram { max-width: 700px; margin: 0 auto; }
    .family-copy { max-width: 820px; margin: 0 auto; order: -1; }
    .security-panel { max-width: 820px; }

    .depth-flow { grid-template-columns: 1fr; border-bottom: 1px solid #DCC5CF; }
    .depth-step { display: grid; grid-template-columns: 42px 1fr; column-gap: 16px; padding: 22px 4px; border-left: 0 !important; border-bottom: 0; }
    .depth-step + .depth-step { border-top: 1px solid #DCC5CF; }
    .depth-marker { grid-row: 1 / span 2; margin: 2px 0 0; }
    .depth-step h3 { grid-column: 2; }
    .depth-step p { grid-column: 2; margin-top: 8px; }

    .workflow-row { grid-template-columns: repeat(2, 1fr); }
    .workflow-step:nth-child(3) { border-left: 0; border-top: 1px solid #D9DBDF; }
    .workflow-step:nth-child(4) { border-top: 1px solid #D9DBDF; }

    .final-cta { grid-template-columns: 1fr; gap: 32px; }
    .final-actions { width: min(100%, 350px); justify-self: start; }
  }

  @media (max-width: 720px) {
    .shell { padding-left: 20px; padding-right: 20px; }
    .section { padding: 68px 0; }
    .stepes-page h1 { font-size: 38px; }
    .stepes-page h2 { font-size: 30px; }
    .stepes-page h3 { font-size: 20px; }
    .stepes-page p,
    .stepes-page li { font-size: 16px; }

    .hero-section { padding: 72px 0 68px; }
    .hero-copy { text-align: center; margin: 0 auto; }
    .hero-copy h1 { margin-left: auto; margin-right: auto; max-width: 100%; }
    .hero-lede { font-size: 17px !important; }
    .hero-proof { grid-template-columns: 1fr; text-align: left; max-width: 500px; margin-left: auto; margin-right: auto; }
    .hero-actions { flex-direction: column; max-width: 500px; margin-left: auto; margin-right: auto; }
    .hero-actions .btn { width: 100%; }
    .hero-art { width: calc(100% + 8px); margin-left: -4px; padding: 0; }

    .mobile-center-group { text-align: center; margin-left: auto; margin-right: auto; }
    .mobile-center-group > p { max-width: 620px; margin-left: auto; margin-right: auto; }
    .mobile-center-group .claims-points { text-align: left; }
    .mobile-left-structured { text-align: left !important; }
    .centered-heading { margin-bottom: 40px; }

    .editorial-split,
    .moip-grid,
    .family-grid,
    .security-grid,
    .faq-layout { gap: 38px; }
    .editorial-heading,
    .family-copy,
    .security-copy,
    .faq-heading { text-align: left; }

    .direction-panel { grid-template-columns: 1fr; border-radius: 24px; }
    .direction-column { padding: 28px 24px; }
    .direction-column + .direction-column { border-left: 0; border-top: 1px solid var(--line); }

    .moip-nameplate { grid-template-columns: 1fr; gap: 7px; padding: 24px; }
    .moip-row { grid-template-columns: 1fr; gap: 8px; padding: 22px 24px; }

    .claims-grid { gap: 38px; }
    .claims-doc { min-height: 410px; padding: 28px 24px; }
    .claim-link { left: 36px; }
    .claim-note { left: 24px; }
    .claims-point { grid-template-columns: 1fr; gap: 8px; padding: 19px 0; }

    .use-case-strip { grid-template-columns: repeat(2, 1fr); border-radius: 20px; }
    .use-case-strip span { border-top: 1px solid #E7CFDA; }
    .use-case-strip span:nth-child(-n+2) { border-top: 0; }
    .use-case-strip span:nth-child(odd) { border-left: 0 !important; }
    .use-case-strip span:nth-child(even) { border-left: 1px solid #E7CFDA !important; }

    .editorial-matrix { grid-template-columns: 1fr; border-radius: 24px; }
    .matrix-cell { min-height: 0; padding: 26px 24px; }
    .matrix-cell:nth-child(even) { border-left: 0; }
    .matrix-cell + .matrix-cell { border-top: 1px solid var(--line); }
    .quiet-note { grid-template-columns: 1fr; }

    .tech-grid { grid-template-columns: 1fr; }
    .tech-item,
    .tech-item:nth-child(even),
    .tech-item:nth-child(odd) { border-left: 0; }
    .tech-item + .tech-item { border-top: 1px solid #3C3E44; }

    .family-diagram { padding: 24px; border-radius: 24px; }
    .family-branches { grid-template-columns: 1fr; }

    .workflow-row { grid-template-columns: 1fr; border-bottom: 1px solid #D9DBDF; }
    .workflow-step { display: grid; grid-template-columns: 42px 1fr; column-gap: 16px; padding: 22px 4px; border-left: 0 !important; }
    .workflow-step + .workflow-step { border-top: 1px solid #D9DBDF; }
    .workflow-number { grid-row: 1 / span 2; margin: 2px 0 0; }
    .workflow-step h3 { grid-column: 2; }
    .workflow-step p { grid-column: 2; margin-top: 8px; }
    .ai-note { grid-template-columns: 1fr; gap: 10px; padding: 22px; }

    .quality-grid,
    .engagement-row { grid-template-columns: 1fr; }
    .quality-item,
    .quality-item:nth-child(even),
    .engagement-item,
    .engagement-item:nth-child(even) { border-left: 0; }
    .quality-item + .quality-item,
    .engagement-item + .engagement-item { border-top: 1px solid var(--line); }
    .quality-item,
    .engagement-item { padding: 24px 4px; }
    .engagement-summary { text-align: left; }

    .security-panel { grid-template-columns: 1fr; border-radius: 24px; }
    .security-controls { border-left: 0; border-top: 1px solid #E3CBD6; padding: 26px; }
    .security-content-list { padding: 14px 24px; }

    .related-row { grid-template-columns: 1fr; gap: 14px; padding: 24px 2px; }
    .related-arrow { width: 38px; height: 38px; }
    .related-secondary { flex-direction: column; gap: 14px; }

    .faq-question { min-height: 70px; grid-template-columns: 1fr 38px; gap: 14px; font-size: 17px; }
    .faq-answer { padding-right: 4px; }

    .final-cta-section { padding-bottom: 48px; }
    .final-cta { padding: 38px 24px; border-radius: 24px; }
    .final-actions { width: 100%; max-width: 500px; justify-self: stretch; }
    .final-actions .btn { width: 100%; }
    .cta-text-link { width: 100%; min-height: 44px; justify-content: center; padding: 6px 0; line-height: 1.4; }
  }

  @media (max-width: 390px) {
    .hero-proof span { font-size: 16px; }
    .claims-doc { padding: 24px 19px; }
    .term-chip { right: 14px; font-size: 11px; }
    .use-case-strip span { padding-left: 10px; padding-right: 10px; }
  }

  @media (max-width: 320px) {
    .stepes-page h1 { font-size: 38px; }
    .shell { padding-left: 20px; padding-right: 20px; }
    .btn { padding-left: 18px; padding-right: 18px; }
    .hero-art { width: 100%; margin-left: 0; }
    .claims-doc { min-height: 395px; }
    .doc-language { display: none; }
    .term-chip { max-width: 88px; white-space: normal; text-align: center; }
    .use-case-strip { grid-template-columns: 1fr; }
    .use-case-strip span,
    .use-case-strip span:nth-child(even),
    .use-case-strip span:nth-child(odd) { border-left: 0 !important; border-top: 1px solid #E7CFDA; }
    .use-case-strip span:first-child { border-top: 0; }
  }
`;
