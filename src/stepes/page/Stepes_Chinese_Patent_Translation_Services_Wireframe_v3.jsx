import React from "react";

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  patent: "https://www.stepes.com/patent-translation-services/",
  chinese: "https://www.stepes.com/chinese-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  terminology: "https://www.stepes.com/terminology-management/",
  memory: "https://www.stepes.com/translation-memory/",
  security: "https://www.stepes.com/security/",
  pctGuide: "https://www.stepes.com/resources/translation-guides/pct-patent-translation-national-phase-guide/",
  priorArtGuide: "https://www.stepes.com/resources/translation-guides/prior-art-translation-patentability-fto-invalidity/",
};

const directions = [
  {
    kicker: "EN → 简体中文",
    title: "English-to-Chinese Patent Translation",
    copy:
      "Translate patent content into professional Simplified Chinese for Mainland China-related patent work, including applications entering the Chinese national phase and other CNIPA-facing materials.",
    items: [
      "Patent applications and specifications",
      "Independent and dependent claims",
      "Abstracts, drawing text, and figure labels",
      "Amended claims and prosecution materials",
      "Priority and patent-family documents",
    ],
  },
  {
    kicker: "简体中文 → EN",
    title: "Chinese-to-English Patent Translation",
    copy:
      "Translate Chinese patents and related IP materials into precise professional English for attorneys, researchers, engineers, licensing teams, and corporate decision-makers.",
    items: [
      "Chinese patent publications",
      "Prior art and patentability research",
      "Freedom-to-operate and invalidity review",
      "Portfolio analysis and due diligence",
      "Prosecution histories and dispute support",
    ],
  },
];

const claimFactors = [
  ["Defined Terms", "Keep approved Chinese equivalents consistent across claims, specifications, drawings, amendments, and related applications."],
  ["Modifier Scope", "Restructure long English technical phrases carefully so relationships between limitations, properties, processes, and components remain clear."],
  ["Claim Dependencies", "Preserve the relationship between independent claims and the limitations incorporated by dependent claims."],
  ["Antecedent References", "Maintain consistent references to previously introduced components, structures, processes, and concepts."],
  ["Numbers, Ranges & Units", "Check numerical values, ranges, tolerances, units, formulas, symbols, and figure references with the same care as terminology."],
  ["Claims-to-Specification Consistency", "Align claim terminology with descriptions, embodiments, examples, drawings, and the abstract."],
];

const docGroups = [
  {
    title: "Patent Filing & Prosecution",
    items: ["Patent applications", "Claims", "Specifications and descriptions", "Abstracts", "Drawing text and figure labels", "Amendments", "Office actions and responses", "Search and examination materials"],
  },
  {
    title: "Patent Research & Analysis",
    items: ["Published Chinese patents", "Patent applications", "Prior art", "Patent search results", "Selected claims and passages", "Technical disclosures", "Portfolio materials", "Competitive patent intelligence"],
  },
  {
    title: "Patent Disputes & Commercial IP",
    items: ["Claim charts", "Expert reports", "Technical exhibits", "Patent-related discovery", "Prosecution histories", "Licensing documents", "Patent assignments", "Due-diligence materials"],
  },
];

const priorArtLevels = [
  ["Document Screening", "Rapid AI-assisted or linguist-supported translation helps determine whether a Chinese document appears relevant enough for deeper review."],
  ["Summary Translation", "A focused English overview provides more detail about the disclosed invention, technical approach, or potentially relevant findings."],
  ["Selected-Passage Translation", "Translate claims, embodiments, examples, tables, or other passages identified by counsel or researchers."],
  ["Full Professional Translation", "For decision-critical documents, provide complete professional translation with subject-matter matching and additional review."],
];

const expertise = [
  ["bio", "Biotechnology & Pharmaceuticals", "Biologics, small molecules, formulations, molecular biology, genetics, cell and gene technologies, manufacturing processes, and related life-science inventions."],
  ["chem", "Chemistry & Advanced Materials", "Chemical compounds, reaction processes, polymers, coatings, materials science, batteries, industrial chemistry, and terminology-intensive patent content."],
  ["med", "Medical Devices & Diagnostics", "Diagnostic technologies, surgical systems, implantable devices, imaging, sensors, monitoring systems, and laboratory equipment."],
  ["code", "Software, AI & Electronics", "Software architectures, machine learning, data processing, computing systems, electronics, control systems, algorithms, and digital technologies."],
  ["chip", "Telecommunications & Semiconductors", "Wireless systems, network protocols, communications technologies, integrated circuits, semiconductor manufacturing, photonics, and electronic components."],
  ["gear", "Mechanical, Automotive & Industrial Engineering", "Mechanical systems, robotics, industrial automation, manufacturing equipment, automotive technologies, energy systems, and advanced engineering."],
];

const workflow = [
  ["Patent and Intended-Use Review", "Review language direction, technical field, patent family, China-related use, filing or research purpose, timing, formats, and counsel instructions."],
  ["Technical Linguist Assignment", "Match English-Chinese patent professionals to the relevant scientific or engineering subject matter and required review level."],
  ["Terminology and Reference Preparation", "Organize related patents, previous translations, client terminology, translation memories, and counsel-approved language."],
  ["Professional Translation and Independent Review", "Review claims, specifications, defined terms, numbers, references, drawings, completeness, and internal consistency."],
  ["Final QA and Secure Delivery", "Verify terminology, numbering, figures, formatting, file integrity, and requested supporting documentation before delivery."],
];

const faqs = [
  ["Does a PCT application need to be translated into Chinese to enter the Chinese national phase?", "For international applications not already proceeding in Chinese, current WIPO guidance requires the international application translation for China national-phase entry to be furnished in Chinese. The exact materials required depend on the PCT route and whether the application has been amended. Applicants should confirm current filing requirements with patent counsel or their filing representative."],
  ["What parts of a PCT patent application are translated for China national-phase entry?", "Current WIPO guidance identifies the request, description, claims, text matter in drawings, and abstract among the translated content. Where claims or other applicable parts have been amended, additional material may be required depending on the circumstances and the basis on which the applicant wishes to proceed."],
  ["What is the deadline for entering the PCT national phase in China?", "Current WIPO guidance lists a standard time limit of 30 months from the priority date under PCT Articles 22 and 39(1). It also describes a limited late-entry mechanism before 32 months when the required acts are completed and the prescribed surcharge is paid. Patent deadlines are legally significant, so applicants should confirm the date applicable to their application with qualified patent counsel."],
  ["Does Stepes translate Chinese patents into English for prior-art research?", "Yes. Stepes provides Chinese-to-English patent translation for patentability research, freedom-to-operate analysis, invalidity research, competitive intelligence, technology landscaping, due diligence, litigation, and other IP analysis. Translation depth can range from screening and summaries to selected passages and full professional translation."],
  ["How does Stepes maintain terminology across English and Chinese patent families?", "Stepes can use related patents, approved translations, glossaries, bilingual termbases, translation memory, technical references, and reviewer feedback to maintain consistent terminology across claims, specifications, drawings, prosecution materials, and related applications."],
  ["Can Stepes translate patent claims, drawings, formulas, and tables?", "Yes. Stepes translates patent claims, descriptions, drawing text, figure labels, tables, formulas, and other technical content. Files are reviewed before translation to determine the appropriate handling, technical expertise, formatting requirements, and QA."],
  ["Do Chinese patent translations need to be certified?", "Not every China-related patent translation requires certification. Formalities depend on the document, intended use, proceeding, receiving authority, and instructions from patent counsel or the filing representative. Stepes can provide certification statements or coordinate other requested documentation when appropriate for the project."],
  ["Does Stepes provide Chinese patent filing or legal advice?", "No. Stepes provides linguistic, technical, formatting, quality-assurance, and multilingual workflow support. Patent counsel and filing representatives remain responsible for legal interpretation, claims strategy, jurisdiction-specific requirements, filing decisions, deadlines, and final approval of materials submitted to a patent authority."],
];

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
  if (name === "search") return <svg {...common}><circle cx="11" cy="11" r="6"/><path d="m16 16 4 4"/><path d="M8.5 11h5"/></svg>;
  if (name === "shield") return <svg {...common}><path d="M12 3 5 6v5c0 4.5 2.7 7.8 7 10 4.3-2.2 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.8 3.6-4"/></svg>;
  if (name === "bio") return <svg {...common}><path d="M9 3v5l-4 7a4 4 0 0 0 3.5 6h7a4 4 0 0 0 3.5-6l-4-7V3"/><path d="M8 13h8"/><path d="M10 3h4"/></svg>;
  if (name === "chem") return <svg {...common}><path d="M8 3h8"/><path d="M10 3v6l-5 8a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-8V3"/><path d="M8 15h8"/></svg>;
  if (name === "med") return <svg {...common}><path d="M9 4h6l1 3h3v13H5V7h3l1-3Z"/><path d="M12 10v6M9 13h6"/></svg>;
  if (name === "code") return <svg {...common}><path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14"/></svg>;
  if (name === "chip") return <svg {...common}><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 1v4M15 1v4M9 19v4M15 19v4M1 9h4M1 15h4M19 9h4M19 15h4"/></svg>;
  if (name === "gear") return <svg {...common}><circle cx="12" cy="12" r="3"/><path d="M19 13.5v-3l-2-.7a6.6 6.6 0 0 0-.7-1.6l.9-1.9-2.1-2.1-1.9.9a6.6 6.6 0 0 0-1.6-.7L10.5 2h-3l-.7 2a6.6 6.6 0 0 0-1.6.7l-1.9-.9-2.1 2.1.9 1.9a6.6 6.6 0 0 0-.7 1.6L0 10.5v3l2 .7c.2.6.4 1.1.7 1.6l-.9 1.9 2.1 2.1 1.9-.9c.5.3 1 .5 1.6.7l.7 2h3l.7-2c.6-.2 1.1-.4 1.6-.7l1.9.9 2.1-2.1-.9-1.9c.3-.5.5-1 .7-1.6l2-.7Z" transform="translate(2 -1) scale(.84)"/></svg>;
  return <svg {...common}><path d="M6 3h9l3 3v15H6z"/><path d="M15 3v4h4M9 11h6M9 15h6"/></svg>;
}

function Arrow() {
  return <span className="arrow" aria-hidden="true">→</span>;
}

function SectionHead({ eyebrow, title, intro, className = "" }) {
  return (
    <div className={`sectionHead ${className}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="sectionIntro">{intro}</p> : null}
    </div>
  );
}

function TextLink({ href, children }) {
  return <a className="textLink" href={href}>{children}<Arrow /></a>;
}

function Bullets({ items }) {
  return <ul className="bulletList">{items.map((item) => <li key={item}>{item}</li>)}</ul>;
}

export default function StepesChinesePatentTranslationWireframe() {
  return (
    <main className="stepesPage">
      <style>{styles}</style>

      <section className="hero" id="top">
        <div className="shell heroGrid">
          <div className="heroCopy">
            <div className="eyebrow">CNIPA &amp; PCT NATIONAL PHASE SUPPORT</div>
            <h1>Chinese Patent Translation Services</h1>
            <p className="heroLead">Translate patents between English and Chinese with the technical precision, terminology control, and professional review required for high-value intellectual property.</p>
            <p className="heroBody">Stepes supports CNIPA-facing applications, PCT national-phase entry in China, patent prosecution, Chinese prior art, patent-family management, IP research, and cross-border disputes through secure English-to-Chinese and Chinese-to-English workflows.</p>
            <div className="heroActions">
              <a className="btn btnPrimary" href={links.quote}>Get a Quote <Arrow /></a>
              <a className="btn btnSecondary" href={links.contact}>Contact Us</a>
            </div>
            <div className="heroSignals" aria-label="Chinese patent translation coverage">
              <span>English ↔ Simplified Chinese</span>
              <span>CNIPA / PCT</span>
              <span>Professional Human Review</span>
            </div>
          </div>

          <div className="heroArt" aria-hidden="true">
            <div className="artGrid" />
            <div className="patentSheet sheetBack">
              <div className="sheetMeta">PATENT FAMILY</div>
              <div className="line wide"/><div className="line"/><div className="line mid"/>
              <div className="figureBox"><span>A</span><i/><i/><i/></div>
              <div className="line wide"/><div className="line short"/>
            </div>
            <div className="patentSheet sheetFront">
              <div className="sheetTop"><span>CLAIMS</span><span>CNIPA</span></div>
              <div className="claimRow"><b>1.</b><p>A system comprising a sensor assembly configured to...</p></div>
              <div className="claimRow chinese"><b>1.</b><p>一种系统，包括被配置为……的传感器组件</p></div>
              <div className="claimRow"><b>2.</b><p>The system of claim 1, wherein...</p></div>
              <div className="termStrip"><span>sensor assembly</span><strong>↔</strong><span>传感器组件</span></div>
            </div>
            <div className="artBadge"><span>EN</span><strong>↔</strong><span>中文</span></div>
          </div>
        </div>
      </section>

      <section className="section overview">
        <div className="shell splitIntro">
          <div>
            <h2>Chinese Patent Translation for Global IP Teams</h2>
          </div>
          <div className="overviewCopy">
            <p className="lead">Patent translation between English and Chinese sits at the intersection of language, technical subject matter, patent-document structure, and intended use.</p>
            <p>The translation must preserve how an invention is described across claims, specifications, drawings, abstracts, amendments, and related documents while accounting for significant differences between English and Chinese terminology, syntax, and technical expression.</p>
            <p>Stepes supports patent attorneys, IP law firms, corporate legal departments, R&amp;D organizations, inventors, research teams, and global companies with China-related patent translation throughout the intellectual property lifecycle.</p>
            <TextLink href={links.patent}>Patent Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="section dark directionSection">
        <div className="shell">
          <SectionHead title="English-to-Chinese and Chinese-to-English Patent Translation" intro="The direction of translation often reflects a different patent workflow. Stepes supports both China-facing filing and prosecution needs and Chinese-origin research, review, and legal analysis." />
          <div className="directionGrid">
            {directions.map((d) => (
              <article className="directionPane" key={d.title}>
                <div className="directionKicker">{d.kicker}</div>
                <h3>{d.title}</h3>
                <p>{d.copy}</p>
                <Bullets items={d.items} />
              </article>
            ))}
          </div>
          <div className="localeNote">
            <strong>Mainland China, Taiwan, and Hong Kong are separate patent jurisdictions.</strong>
            <p>This page focuses primarily on Mainland China, Simplified Chinese, and CNIPA-related workflows. Stepes also supports Traditional Chinese patent and intellectual property content for Taiwan and Hong Kong according to the applicable market and project requirements.</p>
            <TextLink href={links.chinese}>Chinese Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="section pctSection" id="pct-national-phase">
        <div className="shell">
          <SectionHead title="PCT National Phase Translation for China" intro="For international applications not already proceeding in Chinese, current WIPO guidance requires the applicable national-phase application content to be furnished in Chinese for entry before the China National Intellectual Property Administration." />
          <div className="factBand">
            <div className="fact"><span>Required Language</span><strong>Chinese</strong></div>
            <div className="fact"><span>Standard Time Limit</span><strong>30 months</strong><small>from the priority date under current WIPO guidance</small></div>
            <div className="fact"><span>Typical Translated Content</span><strong>Request · Description · Claims</strong><small>plus drawing text, abstract, and applicable amended material</small></div>
          </div>
          <div className="pctBody">
            <div className="pctMain">
              <h3>China National-Phase Translation Built for Completeness</h3>
              <p>Current WIPO guidance identifies Chinese as the required translation language for international applications entering the Chinese national phase. Depending on the applicable PCT route and amendment history, translated content can include the request, description, claims, text appearing in drawings, abstract, and relevant amended material.</p>
              <p>Stepes supports these projects with structured English-to-Chinese patent translation workflows built around application completeness, technical terminology, claim consistency, and instructions from patent counsel or the filing representative.</p>
              <h3>Start Translation Before the Filing Deadline</h3>
              <p>Large applications can contain specialized terminology, long claim sets, drawings, formulas, sequence-related content, and extensive descriptions. Beginning translation early creates time to review terminology, compare related patent-family documents, resolve questions, incorporate counsel feedback, and complete final QA.</p>
              <h3>Managing Amendments and Translation Changes</h3>
              <p>Patent language can evolve between the international application and national-phase entry. Stepes reviews supplied source materials and project instructions to identify the correct content for translation and maintain alignment across related versions. Current WIPO guidance also provides a mechanism for correcting errors in the Chinese translation by reference to the international application as originally filed.</p>
              <TextLink href={links.pctGuide}>PCT Patent Translation and National Phase Guide</TextLink>
            </div>
            <aside className="legalNote">
              <div className="iconBox"><Icon name="shield" /></div>
              <h3>Translation Support, Not Patent Legal Advice</h3>
              <p>Patent-office requirements and deadlines can change and depend on the application. Stepes provides linguistic, technical, formatting, and translation-workflow support. Patent counsel and filing representatives remain responsible for jurisdiction-specific legal requirements, filing strategy, deadlines, and final submission decisions.</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section claimsSection scan">
        <div className="shell claimsGrid">
          <div className="claimsCopy">
            <div className="eyebrow">CLAIM PRECISION</div>
            <h2>Translating Patent Claims Between English and Chinese</h2>
            <p className="sectionIntro">Patent claims require more than literal equivalence. English and Chinese organize technical information differently, so the translation must preserve grammatical relationships, dependencies, references, and terminology across the complete claim set.</p>
            <div className="claimRows">
              {claimFactors.map(([title, copy]) => (
                <div className="claimFactor" key={title}>
                  <span className="factorMark" />
                  <div><h3>{title}</h3><p>{copy}</p></div>
                </div>
              ))}
            </div>
            <div className="chinaTermNote">
              <strong>CNIPA terminology discipline</strong>
              <p>For CNIPA-facing work, established Chinese scientific and technical terminology should be used where prescribed and available. When a generally accepted Chinese equivalent does not exist, project instructions may also require the original-language term to be indicated. Stepes follows the source materials and instructions supplied by your patent counsel or filing representative.</p>
            </div>
          </div>
          <aside className="claimVisual">
            <div className="claimVisualTop"><span>CLAIM REVIEW</span><span className="status">CONTROLLED</span></div>
            <div className="sourceBlock">
              <small>ENGLISH SOURCE</small>
              <p><mark>a sensor assembly</mark> configured to detect a signal and transmit the signal to a control module...</p>
            </div>
            <div className="bridge"><span>Terminology</span><span>Structure</span><span>References</span></div>
            <div className="sourceBlock target">
              <small>SIMPLIFIED CHINESE</small>
              <p>包括<mark>传感器组件</mark>，所述传感器组件被配置为检测信号并将所述信号传输至控制模块……</p>
            </div>
            <div className="qualityRows"><span>Defined term</span><b>Matched</b><span>Antecedent reference</span><b>Checked</b><span>Number / unit QA</span><b>Checked</b></div>
          </aside>
        </div>
      </section>

      <section className="section termsSection">
        <div className="shell">
          <SectionHead title="Consistent Chinese Terminology Across Patent Families" intro="A single invention can appear across international applications, national-phase filings, related applications, office actions, amendments, licensing documents, and disputes. Controlled terminology helps keep the same technical concept from drifting across that family." />
          <div className="termsGrid">
            <div className="termbaseMock">
              <div className="mockHeader"><span>BILINGUAL PATENT TERMBASE</span><span>EN ↔ 中文</span></div>
              <div className="termRow head"><span>English</span><span>Simplified Chinese</span><span>Status</span></div>
              <div className="termRow"><span>sensor assembly</span><span>传感器组件</span><b>Approved</b></div>
              <div className="termRow"><span>control module</span><span>控制模块</span><b>Approved</b></div>
              <div className="termRow"><span>signal processor</span><span>信号处理器</span><b>Approved</b></div>
              <div className="termFoot">Patent-family references · definitions · reviewer comments · preferred variants</div>
            </div>
            <div className="termEditorial">
              <div className="editorialRow"><h3>Bilingual Patent Terminology</h3><p>Record approved English and Chinese equivalents for defined claim terms, component names, process steps, scientific terminology, abbreviations, product terminology, and recurring expressions.</p><TextLink href={links.terminology}>Terminology Management</TextLink></div>
              <div className="editorialRow"><h3>Translation Memory for Related Patents</h3><p>Reuse appropriate approved content from related applications while checking wording, context, technical meaning, and changed claims rather than accepting matches mechanically.</p><TextLink href={links.memory}>Translation Memory</TextLink></div>
              <div className="editorialRow"><h3>Reviewer and Counsel Feedback</h3><p>Carry approved terminology from patent counsel, internal IP teams, inventors, engineers, and previous reviews into subsequent patent-family content.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section docSection scan">
        <div className="shell">
          <SectionHead title="Chinese Patent Documents and IP Content We Translate" intro="Stepes supports Chinese patent translation across filing, prosecution, research, dispute, and commercialization workflows. The translation approach is matched to how each document will be used." />
          <div className="docGrid">
            {docGroups.map((group, i) => (
              <div className="docColumn" key={group.title}>
                <div className="docIcon"><Icon name={i === 1 ? "search" : i === 2 ? "shield" : "doc"}/></div>
                <h3>{group.title}</h3>
                <Bullets items={group.items}/>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section priorSection">
        <div className="shell priorGrid">
          <div className="priorIntro">
            <div className="eyebrow">CHINESE → ENGLISH RESEARCH</div>
            <h2>Chinese Prior Art Translation for Patent Research</h2>
            <p>Chinese-language patents and technical publications can contain important information for patentability, freedom-to-operate, invalidity, technology landscaping, portfolio due diligence, competitive research, and commercialization decisions.</p>
            <p>Stepes supports staged Chinese-to-English workflows so patent teams can increase translation depth as the relevance of a document becomes clearer.</p>
            <div className="useCases"><span>Patentability</span><span>FTO</span><span>Invalidity</span><span>Due Diligence</span><span>Technology Landscape</span></div>
          </div>
          <div className="priorPath">
            {priorArtLevels.map(([title, copy], i) => (
              <div className="priorLevel" key={title}>
                <div className="levelDot" aria-hidden="true" />
                <div><small>{i === 0 ? "BROAD REVIEW" : i === priorArtLevels.length - 1 ? "DECISION-CRITICAL" : "DEEPER REVIEW"}</small><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section prosecutionSection scan">
        <div className="shell">
          <SectionHead title="Chinese Patent Translation for Prosecution and IP Disputes" intro="Patent work often continues long after the initial application. Stepes supports Chinese and English translation for prosecution histories, office actions, amendments, disputes, licensing matters, and cross-border legal review." />
          <div className="twoRows">
            <article>
              <h3>Patent Prosecution Translation</h3>
              <p>Translate CNIPA office actions, examination materials, applicant responses, amendments, Chinese prosecution histories, foreign-language prior art, attorney correspondence, and supporting technical materials.</p>
              <p>Terminology can be aligned with the original application and related patent-family content to maintain continuity throughout prosecution.</p>
            </article>
            <article>
              <h3>Patent Litigation and Dispute Support</h3>
              <p>Support cross-border legal teams with Chinese patents and applications, claim charts, expert reports, technical exhibits, discovery materials, prosecution records, prior art, licensing documents, and attorney-directed document sets.</p>
              <p>Certification, translator statements, notarization, or other formal documentation can be provided when specifically requested or required for the particular proceeding or receiving authority.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section expertiseSection">
        <div className="shell">
          <SectionHead title="Technical Expertise for Complex Chinese Patents" intro="Patent translators must understand the underlying technology well enough to recognize relationships that may not be obvious from individual words alone. Stepes matches projects by language direction, patent experience, technical subject matter, and review requirements." />
          <div className="expertiseGrid">
            {expertise.map(([icon, title, copy]) => (
              <div className="expertiseItem" key={title}>
                <div className="iconBox soft"><Icon name={icon}/></div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
          <TextLink href={links.technical}>Technical Translation Services</TextLink>
        </div>
      </section>

      <section className="section workflowSection dark scan">
        <div className="shell">
          <SectionHead title="A Chinese Patent Translation Workflow Built Around Intended Use" intro="The level of translation, review, terminology control, and QA should reflect the technical content and the consequence of the translation." />
          <div className="workflow">
            {workflow.map(([title, copy], i) => (
              <div className="workflowStep" key={title}>
                <div className="stepNum">0{i + 1}</div>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section techSection">
        <div className="shell techGrid">
          <div className="techIntro">
            <h2>Technology Supporting Chinese Patent Translation</h2>
            <p className="sectionIntro">Technology can improve efficiency and consistency across large patent programs when it is applied according to the risk and intended use of the content.</p>
          </div>
          <div className="techRows">
            <div className="techRow"><h3>Translation Memory</h3><p>Identify previously approved or similar bilingual content across related patents, recurring descriptions, abstracts, amendments, and portfolio documentation. Matches are reviewed in context.</p></div>
            <div className="techRow"><h3>Terminology Management</h3><p>Maintain approved English-to-Chinese terminology across claims, specifications, prosecution content, and related patent families.</p></div>
            <div className="techRow"><h3>Controlled AI Assistance</h3><p>Use AI selectively for prior-art screening, document triage, terminology extraction, version comparison, repetitive patent-family content, and automated QA. Filing-oriented claims, sensitive inventions, prosecution content, litigation evidence, and decision-critical prior art receive appropriate professional human control.</p></div>
          </div>
        </div>
      </section>

      <section className="section securitySection dark">
        <div className="shell securityGrid">
          <div>
            <h2>Secure Chinese Patent Translation for Confidential IP</h2>
            <p className="sectionIntro">Patent translation can involve unpublished inventions, proprietary research, trade secrets, confidential prosecution strategy, licensing information, and sensitive litigation materials.</p>
            <TextLink href={links.security}>Stepes Translation Security</TextLink>
          </div>
          <div className="securityMatrix">
            {["Controlled project access", "Secure file exchange and delivery", "Confidentiality agreements", "Dedicated project teams", "Role-based collaboration", "Controlled language assets", "Secure reference handling", "Coordinated review and approval"].map((item) => <div key={item}><Icon name="shield" size={19}/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section quoteSection scan">
        <div className="shell quoteGrid">
          <div>
            <h2>What We Need to Quote Your Chinese Patent Translation</h2>
            <p className="sectionIntro">A few project details help us recommend the right workflow and prepare an accurate quote.</p>
            <a className="btn btnPrimary" href={links.quote}>Upload Patent Documents <Arrow /></a>
          </div>
          <div className="quoteList">
            {["Source files or patent publication number", "Source and target languages", "English-to-Chinese or Chinese-to-English direction", "Intended use of the translation", "Relevant jurisdiction", "CNIPA or PCT national-phase context, if applicable", "Requested deadline", "Related patent-family documents", "Previous translations", "Terminology lists or glossaries", "Counsel or filing-representative instructions", "Requested review level", "Certification or documentation request, if applicable", "Required delivery format"].map((item) => <div className="quoteItem" key={item}><span className="check">✓</span><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section faqSection scan">
        <div className="shell faqGrid">
          <div className="faqIntro">
            <h2>Chinese Patent Translation FAQs</h2>
            <p>Answers to common questions about CNIPA-related translation, PCT national-phase entry, Chinese prior art, terminology, and professional review.</p>
          </div>
          <div className="faqPanel">
            {faqs.map(([q, a], i) => (
              <details key={q} open={i === 0}>
                <summary><span>{q}</span><span className="plus" aria-hidden="true">+</span></summary>
                <div className="faqAnswer"><p>{a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section resourcesSection">
        <div className="shell">
          <SectionHead title="Patent Translation Guidance for China and Global IP Teams" intro="Continue from China-specific patent translation into broader filing, prior-art, patent-program, and Chinese-language guidance." />
          <div className="resourceRows">
            <a href={links.patent}><div><h3>Patent Translation Services</h3><p>Professional patent translation for filing, prosecution, prior art, litigation, patent families, and multilingual programs across global jurisdictions.</p></div><Arrow /></a>
            <a href={links.pctGuide}><div><h3>PCT Patent Translation and National Phase Guide</h3><p>Plan translation for international applications, national-phase entry, priority documents, amendments, and coordinated multilingual patent families.</p></div><Arrow /></a>
            <a href={links.priorArtGuide}><div><h3>Prior Art Translation for Patentability, FTO, and Invalidity</h3><p>Choose the right translation depth for document screening, summaries, selected passages, full professional translation, and decision-critical patent research.</p></div><Arrow /></a>
            <a href={links.chinese}><div><h3>Chinese Translation Services</h3><p>Understand Simplified Chinese, Traditional Chinese, regional language requirements, and professional Chinese translation for global business and technical content.</p></div><Arrow /></a>
          </div>
        </div>
      </section>

      <section className="finalCta">
        <div className="shell">
          <div className="ctaBox">
            <div className="ctaCopy">
              <h2>Translate Your Chinese Patent Content With Technical Precision</h2>
              <p>Whether you are preparing an English-language patent for China, reviewing Chinese prior art, managing a bilingual patent family, responding to prosecution materials, or supporting a cross-border IP matter, Stepes provides professional Chinese patent translation built around your technical field and intended use.</p>
            </div>
            <div className="ctaActions">
              <a className="btn btnPrimary" href={links.quote}>Get a Quote <Arrow /></a>
              <a className="btn btnSecondary" href={links.contact}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  *{box-sizing:border-box}
  html{scroll-behavior:smooth}
  body{margin:0}
  .stepesPage{--magenta:#C11D63;--magenta-dark:#A71954;--burgundy:#7A1542;--blush:#FDF2F7;--pink:#F2A7C6;--ink:#17191d;--body:#34373d;--muted:#62666e;--line:#e6e7ea;--soft:#f7f7f8;--dark:#17191d;--dark2:#22252b;font-family:Inter,Arial,sans-serif;color:var(--ink);background:#fff;line-height:1.62}
  .shell{width:100%;max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
  .section{padding:96px 0}
  h1,h2,h3{font-family:"Inter Tight",Inter,Arial,sans-serif;font-weight:600;margin:0;color:inherit;letter-spacing:-.025em}
  h1{font-size:48px;line-height:1.05;max-width:760px}
  h2{font-size:36px;line-height:1.12}
  h3{font-size:24px;line-height:1.25;letter-spacing:-.018em}
  p{font-size:16px;line-height:1.7;color:var(--body);margin:0 0 18px}
  .lead{font-size:18px;line-height:1.65;color:var(--ink)}
  .eyebrow{font-size:11px;line-height:1.2;letter-spacing:.14em;font-weight:600;color:var(--magenta);margin:0 0 18px;text-transform:uppercase}
  .dark{background:var(--dark);color:#fff}
  .dark p{color:#e0e2e6}
  .dark .eyebrow{color:var(--pink)}
  .sectionHead{max-width:820px;margin:0 auto 52px;text-align:center}
  .sectionHead .sectionIntro{max-width:790px;margin:18px auto 0;font-size:18px}
  .sectionIntro{font-size:18px;max-width:780px;margin-top:18px}
  .btn{display:inline-flex;align-items:center;justify-content:center;gap:10px;min-height:48px;padding:12px 24px;border-radius:999px;font-size:16px;font-weight:600;text-decoration:none;transition:.2s ease;white-space:nowrap}
  .btnPrimary,.btnPrimary:visited,.btnPrimary:hover,.btnPrimary:active,.btnPrimary:focus,.btnPrimary:focus-visible{background:var(--magenta);color:#fff!important;border:1px solid var(--magenta)}
  .btnPrimary:hover{background:var(--magenta-dark);transform:translateY(-1px)}
  .btnSecondary{background:#fff;color:#17191d;border:1px solid #d8d9dd}
  .btnSecondary:hover{border-color:#b8bbc2;background:#fafafa}
  .btn:focus-visible,.textLink:focus-visible,.resourceRows a:focus-visible,summary:focus-visible{outline:3px solid rgba(193,29,99,.28);outline-offset:4px}
  .arrow{display:inline-block;transition:transform .2s ease}
  a:hover .arrow{transform:translateX(3px)}
  .textLink{display:inline-flex;align-items:center;gap:8px;color:var(--magenta);font-size:16px;font-weight:600;text-decoration:none;margin-top:8px}
  .dark .textLink{color:var(--pink)}
  .bulletList{list-style:none;margin:22px 0 0;padding:0}
  .bulletList li{position:relative;padding-left:20px;margin:9px 0;font-size:16px;color:var(--body)}
  .bulletList li:before{content:"";position:absolute;left:0;top:.72em;width:6px;height:6px;border-radius:50%;background:var(--magenta);transform:translateY(-50%)}
  .dark .bulletList li{color:#e0e2e6}.dark .bulletList li:before{background:var(--pink)}

  .hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#fbfbfc 100%);overflow:hidden}
  .heroGrid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(420px,.92fr);gap:72px;align-items:center}
  .heroLead{font-size:20px;line-height:1.58;color:#2f3238;max-width:710px;margin:24px 0 16px}
  .heroBody{font-size:17px;max-width:720px}
  .heroActions{display:flex;gap:12px;margin-top:30px}
  .heroSignals{display:flex;flex-wrap:wrap;gap:0;margin-top:32px;color:#5d626b;font-size:14px}
  .heroSignals span{padding:0 16px;border-left:1px solid #d7d9dd}.heroSignals span:first-child{padding-left:0;border-left:0}
  .heroArt{position:relative;min-height:520px}
  .artGrid{position:absolute;inset:25px 0 5px 25px;border-radius:30px;background-image:linear-gradient(#eceef1 1px,transparent 1px),linear-gradient(90deg,#eceef1 1px,transparent 1px);background-size:28px 28px;opacity:.7}
  .patentSheet{position:absolute;background:#fff;border:1px solid #dfe1e5;border-radius:22px;box-shadow:0 22px 55px rgba(26,28,33,.11);padding:26px}
  .sheetBack{width:62%;height:67%;right:4%;top:8%;transform:rotate(5deg);opacity:.78}
  .sheetFront{width:76%;min-height:72%;left:2%;top:19%;padding:30px}
  .sheetMeta,.sheetTop{font-size:11px;letter-spacing:.13em;font-weight:600;color:#7d8189}.sheetTop{display:flex;justify-content:space-between;margin-bottom:26px}.sheetTop span:last-child{color:var(--magenta)}
  .line{height:7px;border-radius:999px;background:#e7e8eb;margin:14px 0;width:72%}.line.wide{width:92%}.line.mid{width:58%}.line.short{width:40%}
  .figureBox{height:95px;border:1px solid #e4e5e8;border-radius:14px;margin:22px 0;display:flex;align-items:center;justify-content:center;gap:12px}.figureBox span{width:34px;height:34px;border-radius:50%;display:grid;place-items:center;border:1px solid #cfd2d7}.figureBox i{width:42px;height:1px;background:#cfd2d7}
  .claimRow{display:grid;grid-template-columns:28px 1fr;gap:8px;padding:16px 0;border-top:1px solid #ececef}.claimRow p{font-size:14px;line-height:1.55;margin:0;color:#50545c}.claimRow b{font-size:14px}.claimRow.chinese p{font-size:15px;color:#24272d}
  .termStrip{display:flex;align-items:center;justify-content:space-between;gap:10px;background:var(--blush);padding:12px 14px;border-radius:12px;margin-top:18px;font-size:13px;color:#6c3150}.termStrip strong{color:var(--magenta)}
  .artBadge{position:absolute;right:0;bottom:20px;display:flex;align-items:center;gap:10px;padding:13px 18px;border-radius:999px;background:var(--dark);color:#fff;font-size:14px;box-shadow:0 16px 34px rgba(20,22,26,.18)}.artBadge strong{color:var(--pink)}

  .splitIntro{display:grid;grid-template-columns:.85fr 1.15fr;gap:96px;align-items:start}
  .splitIntro h2{max-width:520px}.overviewCopy{max-width:700px}.overviewCopy p:last-of-type{margin-bottom:12px}

  .directionSection{background:linear-gradient(135deg,#17191d 0%,#22242a 100%)}
  .directionGrid{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #3a3d44;border-bottom:1px solid #3a3d44}
  .directionPane{padding:46px 54px 48px 0}.directionPane+ .directionPane{border-left:1px solid #3a3d44;padding-left:54px;padding-right:0}
  .directionKicker{font-size:14px;color:var(--pink);font-weight:600;margin-bottom:14px}.directionPane h3{font-size:28px;margin-bottom:18px}.directionPane p{max-width:520px}
  .localeNote{margin-top:42px;max-width:920px}.localeNote strong{display:block;font-size:18px;margin-bottom:8px}.localeNote p{margin-bottom:6px}

  .pctSection{background:#fff}
  .factBand{display:grid;grid-template-columns:.8fr .8fr 1.4fr;border:1px solid var(--line);border-radius:24px;overflow:hidden;margin-bottom:56px}
  .fact{padding:26px 30px}.fact+.fact{border-left:1px solid var(--line)}.fact span{display:block;font-size:14px;font-weight:600;color:#777b83;text-transform:uppercase;letter-spacing:.08em}.fact strong{display:block;font-size:22px;margin:5px 0 2px}.fact small{display:block;font-size:16px;line-height:1.5;color:#555960}
  .pctBody{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(300px,.6fr);gap:64px;align-items:start}.pctMain{max-width:790px}.pctMain h3{margin:34px 0 12px}.pctMain h3:first-child{margin-top:0}
  .legalNote{background:var(--blush);border-radius:24px;padding:30px;position:sticky;top:24px}.iconBox{width:46px;height:46px;border-radius:14px;background:#fff;color:var(--magenta);display:grid;place-items:center;border:1px solid #f0dbe5;margin-bottom:20px}.legalNote h3{font-size:21px;margin-bottom:12px}.legalNote p{margin:0;color:#5c3d4c}

  .claimsSection{background:#f7f7f8}
  .claimsGrid{display:grid;grid-template-columns:1.05fr .95fr;gap:80px;align-items:start}.claimsCopy h2{max-width:610px}.claimsCopy .sectionIntro{max-width:650px}
  .claimRows{margin-top:36px}.claimFactor{display:grid;grid-template-columns:14px 1fr;gap:16px;padding:24px 0;border-top:1px solid #dddfe3}.factorMark{width:7px;height:7px;border-radius:50%;background:var(--magenta);margin-top:10px}.claimFactor h3{font-size:20px;margin-bottom:7px}.claimFactor p{margin:0;max-width:650px}.chinaTermNote{margin-top:30px;padding:24px 26px;border:1px solid #ead7e0;border-radius:20px;background:var(--blush)}.chinaTermNote strong{display:block;font-family:"Inter Tight",Inter,Arial,sans-serif;font-size:18px;font-weight:600;margin-bottom:7px}.chinaTermNote p{margin:0;color:#5d4552}
  .claimVisual{background:#fff;border:1px solid #dedfe3;border-radius:28px;padding:28px;box-shadow:0 20px 50px rgba(30,31,36,.06);position:sticky;top:24px}.claimVisualTop{display:flex;justify-content:space-between;align-items:center;font-size:14px;letter-spacing:.1em;font-weight:600;color:#747983;margin-bottom:26px}.status{color:var(--magenta);background:var(--blush);padding:6px 10px;border-radius:999px}.sourceBlock{border:1px solid #e3e4e7;border-radius:18px;padding:22px}.sourceBlock small{font-size:14px;letter-spacing:.1em;color:#777b83;font-weight:600}.sourceBlock p{font-size:16px;margin:10px 0 0;color:#2e3137}.sourceBlock mark{background:#fbe4ee;color:#6d183e;padding:1px 3px;border-radius:4px}.sourceBlock.target{background:#fbfbfc}.bridge{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;padding:16px 0}.bridge span{font-size:14px;border:1px solid #e1e2e5;border-radius:999px;padding:5px 9px;color:#666b73;background:#fff}.qualityRows{display:grid;grid-template-columns:1fr auto;gap:9px 18px;margin-top:22px;padding-top:20px;border-top:1px solid #e8e9eb;font-size:14px}.qualityRows span{color:#6b7078}.qualityRows b{color:#2d6e51;font-weight:600}

  .termsSection{background:#fff}.termsGrid{display:grid;grid-template-columns:1fr .92fr;gap:70px;align-items:start}.termbaseMock{border:1px solid #dddfe3;border-radius:28px;overflow:hidden;box-shadow:0 18px 45px rgba(24,26,30,.05)}.mockHeader{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:18px 22px;background:#202329;color:#fff;font-size:14px;letter-spacing:.09em;font-weight:600}.mockHeader span:last-child{color:var(--pink)}.termRow{display:grid;grid-template-columns:1fr 1fr 90px;gap:14px;align-items:center;padding:17px 22px;border-top:1px solid #ececef;font-size:16px}.termRow.head{font-size:14px;color:#777b83;background:#fafafa;text-transform:uppercase;letter-spacing:.06em}.termRow b{font-size:14px;color:#2d6e51}.termFoot{padding:16px 22px;background:var(--blush);font-size:14px;color:#7b4860}.termEditorial{border-top:1px solid var(--line)}.editorialRow{padding:26px 0;border-bottom:1px solid var(--line)}.editorialRow h3{font-size:21px;margin-bottom:8px}.editorialRow p{margin-bottom:4px}

  .docSection{background:#fafafa}.docGrid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.docColumn{padding:36px 38px}.docColumn+ .docColumn{border-left:1px solid var(--line)}.docColumn:first-child{padding-left:0}.docColumn:last-child{padding-right:0}.docIcon{color:var(--magenta);margin-bottom:18px}.docColumn h3{font-size:21px}.docColumn .bulletList{margin-top:18px}

  .priorSection{background:#fff}.priorGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:88px;align-items:start}.priorIntro{position:sticky;top:24px}.priorIntro h2{margin-bottom:20px}.useCases{display:flex;gap:8px;flex-wrap:wrap;margin-top:26px}.useCases span{font-size:16px;padding:7px 11px;border-radius:999px;background:#f5f5f6;color:#555a62;border:1px solid #e7e8ea}.priorPath{border-left:1px solid #d9dbe0;padding-left:34px}.priorLevel{position:relative;display:grid;grid-template-columns:1fr;padding:0 0 38px 8px}.levelDot{position:absolute;width:11px;height:11px;border-radius:50%;background:var(--magenta);left:-40px;top:7px;box-shadow:0 0 0 6px #fff}.priorLevel small{font-size:14px;letter-spacing:.09em;color:#8a8e95;font-weight:600}.priorLevel h3{font-size:21px;margin:5px 0 8px}.priorLevel p{margin:0;max-width:650px}

  .prosecutionSection{background:var(--blush)}.twoRows{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #ead7e0;border-bottom:1px solid #ead7e0}.twoRows article{padding:42px 52px 42px 0}.twoRows article+article{padding-left:52px;border-left:1px solid #ead7e0}.twoRows h3{margin-bottom:13px}.twoRows p:last-child{margin-bottom:0}

  .expertiseSection{background:#fff}.expertiseGrid{display:grid;grid-template-columns:1fr 1fr;gap:0 52px;border-top:1px solid var(--line);margin-bottom:28px}.expertiseItem{display:grid;grid-template-columns:50px 1fr;gap:18px;padding:28px 0;border-bottom:1px solid var(--line)}.iconBox.soft{width:44px;height:44px;background:var(--blush);border-color:#f4e3eb}.expertiseItem h3{font-size:20px;margin-bottom:7px}.expertiseItem p{margin:0}

  .workflowSection{background:#1b1d22}.workflowSection .sectionHead{text-align:left;margin-left:0;max-width:800px}.workflowSection .sectionHead .sectionIntro{margin-left:0}.workflow{border-top:1px solid #3a3d44}.workflowStep{display:grid;grid-template-columns:90px 1fr;gap:32px;padding:28px 0;border-bottom:1px solid #3a3d44}.stepNum{font-size:16px;font-weight:600;color:var(--pink);padding-top:4px}.workflowStep h3{font-size:21px;margin-bottom:7px}.workflowStep p{margin:0;max-width:850px}

  .techSection{background:#fff}.techGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:88px;align-items:start}.techGrid>div:first-child{position:sticky;top:24px}.techRows{border-top:1px solid var(--line)}.techRow{padding:28px 0;border-bottom:1px solid var(--line)}.techRow h3{font-size:21px;margin-bottom:8px}.techRow p{margin:0}

  .securitySection{background:#202329}.securityGrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:90px;align-items:center}.securityGrid .textLink{margin-top:12px}.securityMatrix{display:grid;grid-template-columns:1fr 1fr;border:1px solid #3b3e45;border-radius:24px;overflow:hidden}.securityMatrix div{display:flex;align-items:center;gap:12px;min-height:76px;padding:18px 20px;border-bottom:1px solid #3b3e45;color:#ebedf1;font-size:16px}.securityMatrix div:nth-child(odd){border-right:1px solid #3b3e45}.securityMatrix div:nth-last-child(-n+2){border-bottom:0}.securityMatrix svg{color:var(--pink);flex:0 0 auto}

  .quoteSection{background:#fafafa}.quoteGrid{display:grid;grid-template-columns:.82fr 1.18fr;gap:88px;align-items:start}.quoteGrid>div:first-child{position:sticky;top:24px}.quoteGrid .btn{margin-top:16px}.quoteList{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid var(--line)}.quoteItem{display:flex;gap:12px;align-items:flex-start;padding:17px 16px 17px 0;border-bottom:1px solid var(--line);font-size:16px}.quoteItem:nth-child(even){padding-left:22px;border-left:1px solid var(--line)}.check{color:var(--magenta);font-weight:600;line-height:1.5}

  .faqSection{background:#fff}.faqGrid{display:grid;grid-template-columns:.62fr 1.38fr;gap:80px;align-items:start}.faqIntro{position:sticky;top:24px}.faqIntro h2{margin-bottom:18px}.faqPanel{border-top:1px solid var(--line)}details{border-bottom:1px solid var(--line)}summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:20px;align-items:center;padding:23px 0;font-family:"Inter Tight",Inter,Arial,sans-serif;font-size:19px;font-weight:600;line-height:1.35}summary::-webkit-details-marker{display:none}.plus{width:32px;height:32px;border:1px solid #d9dbe0;border-radius:50%;display:grid;place-items:center;color:var(--magenta);flex:0 0 auto;transition:.2s ease}details[open] .plus{transform:rotate(45deg)}.faqAnswer{padding:0 50px 22px 0}.faqAnswer p{font-size:16px;max-width:800px;margin:0}

  .resourcesSection{background:#f7f7f8}.resourceRows{border-top:1px solid #dfe1e4}.resourceRows a{display:grid;grid-template-columns:1fr 36px;gap:20px;align-items:center;padding:25px 0;border-bottom:1px solid #dfe1e4;color:inherit;text-decoration:none}.resourceRows h3{font-size:20px;margin-bottom:6px}.resourceRows p{margin:0;max-width:860px}.resourceRows .arrow{color:var(--magenta);font-size:22px}.resourceRows a:hover h3{color:var(--magenta)}

  .finalCta{padding:80px 0 88px;background:#fff}.ctaBox{background:var(--blush);border:1px solid #f1dce6;border-radius:30px;padding:58px 64px;display:grid;grid-template-columns:1.25fr .75fr;gap:60px;align-items:center}.ctaCopy h2{max-width:700px}.ctaCopy p{font-size:17px;max-width:760px;margin:18px 0 0}.ctaActions{display:flex;justify-content:flex-end;gap:12px;flex-wrap:wrap}

  @media(max-width:1280px){.shell{padding-left:40px;padding-right:40px}.heroGrid{gap:52px}.termsGrid,.claimsGrid{gap:54px}}
  @media(max-width:1000px){
    .shell{padding-left:24px;padding-right:24px}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}.heroGrid{grid-template-columns:1fr .8fr;gap:36px}.heroArt{min-height:470px}.sheetFront{width:86%;left:0}.sheetBack{width:70%}
    .splitIntro,.pctBody,.claimsGrid,.termsGrid,.priorGrid,.techGrid,.securityGrid,.quoteGrid,.faqGrid{grid-template-columns:1fr;gap:42px}.splitIntro{gap:28px}.splitIntro>div:first-child{text-align:center}.splitIntro h2{max-width:760px;margin:auto}.overviewCopy{max-width:780px;margin:auto}
    .sectionHead{text-align:center}.scan .sectionHead{text-align:left;margin-left:0}.scan .sectionHead .sectionIntro{margin-left:0;margin-right:0}.pctBody .legalNote,.claimVisual,.priorIntro,.techGrid>div:first-child,.quoteGrid>div:first-child,.faqIntro{position:static}.claimVisual{max-width:700px;margin:auto}.termsGrid{gap:40px}.docGrid{grid-template-columns:1fr 1fr}.docColumn:last-child{grid-column:1/-1;border-left:0;border-top:1px solid var(--line);padding-left:0}.priorIntro{text-align:center;max-width:780px;margin:auto}.priorIntro p{text-align:left}.useCases{justify-content:center}.techIntro{text-align:center}.techIntro .sectionIntro{margin-left:auto;margin-right:auto}.securityGrid>div:first-child{text-align:center}.securityGrid .sectionIntro{margin-left:auto;margin-right:auto}.securityGrid .textLink{justify-content:center}.quoteGrid>div:first-child{text-align:left}.faqGrid{gap:34px}.faqIntro{max-width:760px}
    .ctaBox{grid-template-columns:1fr;gap:30px}.ctaActions{justify-content:flex-start}
  }
  @media(max-width:768px){
    .section{padding:72px 0}.hero{padding:80px 0 72px}h1{font-size:42px}h2{font-size:32px}.heroGrid{grid-template-columns:1fr}.heroCopy{text-align:center}.heroCopy h1,.heroLead,.heroBody{margin-left:auto;margin-right:auto}.heroActions{justify-content:center}.heroSignals{justify-content:center}.heroArt{min-height:460px;max-width:560px;width:100%;margin:10px auto 0}.directionGrid{grid-template-columns:1fr}.directionPane,.directionPane+.directionPane{padding:34px 0;border-left:0}.directionPane+.directionPane{border-top:1px solid #3a3d44}.factBand{grid-template-columns:1fr}.fact+.fact{border-left:0;border-top:1px solid var(--line)}.docGrid{grid-template-columns:1fr}.docColumn,.docColumn:first-child,.docColumn:last-child{padding:28px 0;grid-column:auto;border-left:0}.docColumn+.docColumn{border-left:0;border-top:1px solid var(--line)}.expertiseGrid{grid-template-columns:1fr}.securityMatrix{grid-template-columns:1fr}.securityMatrix div:nth-child(odd){border-right:0}.securityMatrix div:nth-last-child(-n+2){border-bottom:1px solid #3b3e45}.securityMatrix div:last-child{border-bottom:0}.quoteList{grid-template-columns:1fr}.quoteItem:nth-child(even){padding-left:0;border-left:0}.twoRows{grid-template-columns:1fr}.twoRows article,.twoRows article+article{padding:30px 0;border-left:0}.twoRows article+article{border-top:1px solid #ead7e0}.termRow{grid-template-columns:1fr 1fr}.termRow span:last-of-type,.termRow b{grid-column:2}.termRow.head span:last-child{display:none}.workflowStep{grid-template-columns:64px 1fr;gap:20px}.textLink{min-height:44px}.ctaBox{padding:46px 36px}
    .sectionHead{text-align:center}.scan .sectionHead{text-align:left;margin-left:0}.scan .sectionHead .sectionIntro{margin-left:0}.claimsCopy{text-align:left}.claimsCopy .eyebrow,.claimsCopy h2{text-align:left}.priorIntro{text-align:center}.priorIntro p{text-align:left}
  }
  @media(max-width:600px){
    .shell{padding-left:20px;padding-right:20px}.section{padding:68px 0}.hero{padding:68px 0 64px}h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}.heroLead{font-size:18px}.heroBody{font-size:16px}.heroActions{flex-direction:column}.heroActions .btn{width:100%}.heroSignals{display:grid;gap:8px}.heroSignals span{border:0;padding:0}.heroArt{min-height:390px}.artGrid{inset:18px 0 0 10px}.sheetFront{width:90%;padding:22px;top:16%}.sheetBack{width:68%;height:62%}.claimRow{padding:12px 0}.claimRow p{font-size:14px}.claimRow.chinese p{font-size:15px}.termStrip{font-size:12px}.artBadge{right:4px;bottom:4px}.sectionHead{margin-bottom:38px}.sectionHead .sectionIntro,.sectionIntro{font-size:17px}.directionPane h3{font-size:23px}.fact{padding:22px}.pctBody{gap:32px}.legalNote{padding:24px}.claimsGrid{gap:34px}.claimVisual{padding:20px;border-radius:22px}.bridge{justify-content:flex-start}.termRow.head{display:none}.termRow{grid-template-columns:1fr;gap:5px;font-size:16px;padding:16px}.termRow span:last-of-type,.termRow b{grid-column:1}.termRow b{margin-top:2px}.mockHeader{padding:16px}.termFoot{font-size:14px;padding:14px 16px}.docColumn h3,.expertiseItem h3,.workflowStep h3,.techRow h3,.priorLevel h3{font-size:20px}.priorPath{padding-left:26px}.levelDot{left:-32px}.expertiseItem{grid-template-columns:44px 1fr;gap:14px}.workflowStep{grid-template-columns:46px 1fr;gap:14px}.stepNum{font-size:14px}.securityMatrix div{min-height:68px}.faqGrid{gap:24px}summary{font-size:18px;padding:20px 0}.faqAnswer{padding-right:0}.ctaBox{padding:36px 24px;border-radius:24px}.ctaActions{flex-direction:column}.ctaActions .btn{width:100%}.finalCta{padding:64px 0 72px}
  }
  @media(max-width:360px){.heroArt{min-height:350px}.sheetFront{width:94%;left:0}.sheetBack{right:0}.termStrip{gap:6px;padding:10px 11px}.termStrip span{font-size:11px}.claimVisualTop{gap:8px}.status{padding:5px 7px}.qualityRows{grid-template-columns:1fr}.qualityRows b{margin-top:-6px;margin-bottom:4px}.workflowStep{grid-template-columns:1fr}.stepNum{padding:0}.expertiseItem{grid-template-columns:1fr}.iconBox.soft{margin-bottom:2px}}
`;
