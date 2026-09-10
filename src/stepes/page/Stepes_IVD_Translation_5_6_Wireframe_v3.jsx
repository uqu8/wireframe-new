import React from "react";

const C = {
  ink: "#17171a",
  body: "#3f3f46",
  muted: "#6b6b73",
  border: "#e6e4e7",
  soft: "#f7f6f7",
  blush: "#fdf2f7",
  magenta: "#c11d63",
  magentaDark: "#9f1d55",
  burgundy: "#7a1542",
  eyebrowDark: "#f2a7c6",
  white: "#ffffff",
  dark: "#1c1a1d",
};

const iconPaths = {
  science: <><path d="M9 3h6M10 3v5l-4.5 8a3 3 0 0 0 2.6 4.5h7.8a3 3 0 0 0 2.6-4.5L14 8V3"/><path d="M8 14h8"/></>,
  file: <><path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6M9 16h6"/></>,
  workflow: <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M8 6h8M7.5 8l3.3 7M16.5 8l-3.3 7"/></>,
  software: <><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 21h8M12 18v3M7 9l2 2-2 2M12 13h5"/></>,
  terms: <><path d="M4 6h16M4 12h10M4 18h16"/><circle cx="17" cy="12" r="3"/></>,
  lifecycle: <><path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 5v6h-6"/></>,
  shield: <><path d="M12 3l7 3v5c0 5-3.2 8-7 10-3.8-2-7-5-7-10V6z"/><path d="m9 12 2 2 4-5"/></>,
  globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></>,
  lab: <><path d="M8 3h8M9 3v6l-4 7a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 16l-4-7V3"/><path d="M7 15h10"/></>,
  user: <><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></>,
  check: <path d="m5 12 4 4L19 6"/>,
  arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
};

function Icon({ name, size = 22 }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {iconPaths[name] || iconPaths.check}
    </svg>
  );
}

function SectionHeading({ eyebrow, title, intro, centered = false, dark = false, className = "" }) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""} ${className}`.trim()}>
      {eyebrow ? <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function EditorialLink({ href, children }) {
  return <a className="editorial-link" href={href}>{children}<Icon name="arrow" size={17} /></a>;
}

const contentGroups = [
  {
    title: "Regulatory and Technical Documentation",
    icon: "file",
    copy: "Support global regulatory and quality programs with accurate, controlled translations of technical and scientific documentation.",
    items: ["Technical documentation", "Regulatory submissions and supporting documents", "Performance evaluation documentation", "Analytical and clinical performance materials", "Scientific validity documentation", "Declarations and certificates", "SOPs and quality documentation", "Verification and validation materials", "Manufacturing and technical procedures", "Post-market and field communications"],
  },
  {
    title: "IVD Labeling and Product Instructions",
    icon: "shield",
    copy: "Translate the information users rely on to identify, handle, store, prepare, operate, and use diagnostic products correctly.",
    items: ["Instructions for Use (IFUs)", "Package inserts", "Kit, reagent, and instrument labels", "Packaging content", "Warnings and precautions", "Quick-reference guides", "Operator instructions", "Storage and handling instructions", "Symbols and accompanying text"],
  },
  {
    title: "Assay and Laboratory Content",
    icon: "lab",
    copy: "Support laboratories and diagnostic workflows with linguists who understand the terminology and procedures behind IVD testing.",
    items: ["Assay protocols", "Reagent documentation", "Specimen collection instructions", "Sample preparation procedures", "Laboratory procedures", "Calibration and quality-control documentation", "Reference materials", "Laboratory training", "Troubleshooting and service content"],
  },
  {
    title: "Instruments, Software, and Digital Content",
    icon: "software",
    copy: "Keep the physical and digital sides of the diagnostic experience aligned across languages.",
    items: ["Analyzer interfaces", "Instrument software", "Diagnostic applications", "Result displays and dashboards", "Middleware", "Embedded help", "Alerts and error messages", "Setup and installation workflows", "Software release documentation"],
  },
  {
    title: "Training and Commercial Content",
    icon: "user",
    copy: "Extend the same terminology and product knowledge into the materials that educate customers, support users, and bring IVD products to market.",
    items: ["Product training", "eLearning courses", "Service and maintenance training", "Scientific presentations", "Product brochures", "Websites", "Sales enablement", "Launch content", "Customer-support materials", "Multimedia content"],
  },
];

const technologies = [
  ["Molecular Diagnostics", "PCR, nucleic acid testing, molecular assays, infectious-disease testing, and related scientific and product documentation."],
  ["Immunodiagnostics and Immunoassays", "Multilingual content for antibody-, antigen-, and immunoassay-based products, reagents, testing procedures, and instruments."],
  ["Clinical Chemistry", "Translation for analyzers, reagents, assays, controls, calibrators, laboratory procedures, and supporting documentation."],
  ["Hematology and Coagulation", "Technical and product translation for diagnostic instruments, reagents, workflows, and laboratory professionals."],
  ["Microbiology and Infectious Disease", "Translation of testing systems, specimen procedures, assay content, laboratory documentation, and user instructions."],
  ["Genetic and Genomic Diagnostics", "Specialized language support for genetic tests, genomic diagnostic workflows, sequencing-related applications, and associated product content."],
  ["Companion Diagnostics", "Consistent translation of diagnostic content used to support therapeutic selection, patient stratification, and related clinical workflows."],
  ["Pathology and Digital Pathology", "Localization for pathology technologies, imaging workflows, digital pathology platforms, software, and technical content."],
  ["Blood Screening", "Translation for blood-screening systems, reagents, instruments, procedures, product labeling, and regulated documentation."],
  ["Point-of-Care Diagnostics", "Multilingual content for portable, rapid, and near-patient testing systems used outside centralized laboratories."],
  ["Self-Testing and Consumer Diagnostics", "User-centered translation for products designed for patients and consumers, where clarity and correct interpretation are especially important."],
  ["Laboratory Automation", "Localization for integrated analyzers, robotic workflows, middleware, connected instruments, software, and total laboratory automation systems."],
];

const workflow = [
  ["Define Markets, Languages, and Content", "Confirm target markets, languages, intended users, source revisions, file formats, content types, publishing requirements, and review responsibilities."],
  ["Prepare Source Content and Language Assets", "Analyze source files and organize approved terminology, translation memories, previous translations, style guidance, product references, and other relevant materials."],
  ["Translate With IVD Expertise", "Assign qualified linguists and configure professional, AI-assisted, and hybrid workflows according to the content, intended use, quality requirements, and risk."],
  ["Review and Quality Check", "Evaluate terminology, meaning, completeness, numbers, units, formatting, tags, protected content, and other project-specific quality criteria."],
  ["Validate in Final Context", "Review the actual label, IFU, PDF, interface, software build, or other final content experience where project requirements call for in-context validation."],
  ["Release and Reuse Approved Language", "Retain validated translations, terminology decisions, and approved corrections in translation memory and language assets for future revisions."],
];

const quality = [
  ["Qualified Linguists", "Select translators and reviewers based on language expertise, medical and scientific knowledge, project requirements, and content risk."],
  ["Terminology Governance", "Apply approved IVD, product, scientific, technical, and regulatory terminology consistently across translators, AI workflows, reviewers, and content types."],
  ["Translation Memory", "Reuse previously validated translations to improve consistency across document revisions, recurring content, software releases, and future projects."],
  ["Automated QA", "Identify objective issues such as missing content, numerical discrepancies, terminology deviations, untranslated segments, tags, variables, and formatting inconsistencies."],
  ["Professional Human Review", "Use qualified reviewers to evaluate meaning, context, fluency, scientific accuracy, intended-user clarity, and other issues that require judgment."],
  ["Final-Format Validation", "Review multilingual labels, PDFs, software interfaces, graphics, and other finished content experiences to identify issues that appear only after integration or formatting."],
];

const why = [
  ["IVD Subject-Matter Expertise", "Professional linguists experienced in medical, scientific, diagnostic, technical, and regulated content."],
  ["Regulated Content Experience", "Controlled workflows for labeling, IFUs, technical documentation, regulatory materials, laboratory content, and other high-impact product information."],
  ["Documents + Software", "One multilingual program across reagent labels, IFUs, instrument interfaces, diagnostic applications, training, and support."],
  ["Controlled Terminology", "Consistent IVD vocabulary across products, documents, software, languages, reviewers, and releases."],
  ["Scalable Global Releases", "Coordinate multiple languages and content types without rebuilding the translation process for every new market or product update."],
  ["AI + Human Quality", "Apply translation automation where it creates value while routing higher-impact content to qualified professional reviewers and specialists."],
  ["ISO-Certified Processes", "Support demanding life sciences and medical-device translation programs with processes aligned with ISO 13485, ISO 17100, and ISO 9001."],
];

const faqs = [
  ["What are IVD translation services?", "In vitro diagnostics translation services specialize in translating and localizing content associated with diagnostic reagents, assays, instruments, systems, and software used to examine specimens taken from the human body. IVD translation can include labels, IFUs, package inserts, reagent documentation, assay protocols, technical documentation, regulatory materials, instrument software, training, laboratory procedures, websites, and other product content."],
  ["What IVD documents can Stepes translate?", "Stepes translates IFUs, labels, package inserts, assay and reagent documentation, technical files, performance documentation, regulatory materials, SOPs, laboratory procedures, quality documentation, instrument manuals, software interfaces, training materials, eLearning, websites, and commercial content. We can also support multilingual desktop publishing and software localization."],
  ["Can Stepes translate IVD labels and Instructions for Use?", "Yes. Stepes translates IVD labels, package inserts, IFUs, reagent information, warnings, storage instructions, specimen procedures, operating information, calibration and quality-control content, limitations, result information, and related product documentation. Workflows can include professional translation, independent review, terminology control, translation-memory reuse, numerical QA, multilingual formatting, and final-format validation."],
  ["Does Stepes support EU IVDR language requirements?", "Yes. Stepes supports multilingual IVD documentation for products distributed in European markets, including labels, IFUs, self-testing and near-patient information, technical and regulatory materials, and software or interface content where required. Applicable language requirements can vary by country, product, intended user, content type, and other factors. Manufacturers remain responsible for identifying the requirements that apply to each product and market; Stepes helps execute the defined multilingual scope."],
  ["Can Stepes translate point-of-care and self-testing devices?", "Yes. Stepes translates point-of-care, near-patient, and self-testing diagnostic content for professional and lay users, including specimen collection, setup, test procedures, software prompts, warnings, troubleshooting, result displays, result interpretation instructions, training, and supporting product information."],
  ["Can Stepes localize IVD instrument software?", "Yes. Stepes localizes analyzer interfaces, embedded software, diagnostic applications, touchscreens, result displays, alerts, error messages, online help, middleware, and connected diagnostic platforms. Workflows can support resource files, terminology, variables and placeholders, character constraints, screenshots, linguistic review, and in-context QA."],
  ["How does Stepes maintain IVD terminology across languages?", "Stepes can create multilingual terminology databases that define approved IVD, scientific, product, software, and regulatory terminology. Approved terms are made available across translation, AI-assisted workflows, professional review, and QA so the same concept can remain consistent across labels, IFUs, assays, instruments, software, training, and supporting content."],
  ["Does Stepes use AI for IVD translation?", "Stepes supports professional human translation, AI-assisted translation, and hybrid AI + human workflows. The appropriate model depends on the content, audience, consequences of error, quality expectations, timeline, and client requirements. Regulated, safety-related, patient-facing, or other high-impact materials can receive stronger professional and specialist review."],
  ["How does Stepes manage IVD translation updates?", "Stepes uses translation memory, terminology management, workflow automation, and version-aware processes to support recurring IVD updates. Previously approved translations can be reused where appropriate, while new or modified content is identified for translation and review. Validated corrections and terminology decisions can then be retained for future releases."],
];

function HeroArtwork() {
  return (
    <div className="hero-art" aria-hidden="true">
      <div className="art-blush" />
      <div className="analyzer">
        <div className="screen"><span/><span/><span/></div>
        <div className="slot"><i/><i/><i/></div>
        <div className="analyzer-foot" />
      </div>
      <div className="cartridge"><span/><span/></div>
      <div className="vial"><span/></div>
      <svg className="molecule" viewBox="0 0 160 110">
        <path d="M20 75 C50 25, 95 95, 140 35" />
        <circle cx="20" cy="75" r="6"/><circle cx="66" cy="51" r="6"/><circle cx="102" cy="69" r="6"/><circle cx="140" cy="35" r="6"/>
      </svg>
      <div className="result-panel"><span className="result-line wide"/><span className="result-line"/><span className="result-line short"/><b/></div>
      <div className="dot d1"/><div className="dot d2"/><div className="dot d3"/>
    </div>
  );
}

function LabelArtwork() {
  return (
    <div className="label-art" aria-hidden="true">
      <div className="label-sheet">
        <div className="fake-heading"/>
        <div className="fake-line long"/><div className="fake-line"/><div className="fake-line short"/>
        <div className="warning-row"><span>!</span><i/><i/></div>
        <div className="data-grid"><i/><i/><i/><i/></div>
      </div>
      <div className="label-vial"><span/></div>
      <div className="label-strip"><i/><i/><i/></div>
    </div>
  );
}

function TermsArtwork() {
  return (
    <div className="terms-art" aria-hidden="true">
      <svg className="term-flow" viewBox="0 0 520 360">
        <path d="M72 90 C150 88, 165 138, 242 142 S342 112, 448 126" />
        <path d="M92 276 C168 266, 188 216, 258 220 S350 262, 438 246" />
        <path d="M258 142 C250 164, 252 194, 258 220" />
      </svg>
      <div className="term-node n1"><Icon name="lab"/><span>Assay & Reagent</span></div>
      <div className="term-node n2"><Icon name="file"/><span>Label & IFU</span></div>
      <div className="term-core"><strong>Approved IVD Terms</strong><span>One controlled vocabulary</span></div>
      <div className="term-node n3"><Icon name="software"/><span>Instrument UI</span></div>
      <div className="term-node n4"><Icon name="user"/><span>Training & Support</span></div>
      <div className="term-chip tc1">Analyte</div>
      <div className="term-chip tc2">Calibrator</div>
      <div className="term-chip tc3">Reference interval</div>
    </div>
  );
}

export default function StepesIVDTranslationWireframe() {
  return (
    <main className="page">
      <style>{styles}</style>

      <section className="hero section">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">IN VITRO DIAGNOSTICS</div>
            <h1>In Vitro Diagnostics (IVD) Translation Services</h1>
            <p className="hero-lede">Translate complex IVD content with the scientific accuracy, terminology consistency, and quality controls global diagnostic products demand. Stepes helps in vitro diagnostics companies localize labeling, Instructions for Use, assay and reagent documentation, instrument software, regulatory content, training, and technical materials in 100+ languages.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote</a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to an IVD Translation Expert</a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="proof-band" aria-label="Stepes IVD translation credentials">
        <div className="shell proof-grid">
          {[['ISO 13485:2016','Medical Device Quality'],['ISO 17100','Translation Services'],['ISO 9001:2015','Quality Management'],['100+ Languages','Global Market Coverage'],['AI + Human Workflows','Risk-Matched Quality']].map(([a,b]) => <div className="proof-item" key={a}><strong>{a}</strong><span>{b}</span></div>)}
        </div>
      </section>

      <section className="section">
        <div className="shell overview-grid">
          <SectionHeading title="Specialized Translation for the IVD Product Ecosystem" intro="In vitro diagnostics bring together science, regulated product information, laboratory workflows, physical devices, software, and increasingly connected digital experiences." className="mobile-center" />
          <div className="overview-copy">
            <p>Translating this content requires more than language fluency. It requires an understanding of how information moves across an IVD product and how a terminology or numerical error in one place can affect many others.</p>
            <p>Stepes provides specialized IVD translation services for diagnostic manufacturers, laboratories, medical technology companies, and life sciences organizations. Our professional linguists combine medical and scientific subject-matter expertise with translation memory, controlled terminology, automated quality assurance, and configurable human review.</p>
          </div>
        </div>
        <div className="shell capability-rows">
          {[
            ["science","Scientific Precision","Translate analytes, biomarkers, reagents, specimens, controls, calibrators, testing methodologies, and diagnostic performance with appropriate subject-matter expertise."],
            ["file","Regulated Product Content","Manage multilingual labeling, IFUs, technical documentation, regulatory materials, quality content, and supporting product information through controlled workflows."],
            ["workflow","Laboratory and User Workflows","Preserve the meaning of specimen collection, sample preparation, testing procedures, instrument operation, calibration, quality control, troubleshooting, and result interpretation."],
            ["software","Instruments and Digital Systems","Localize analyzer interfaces, diagnostic applications, instrument software, result displays, middleware, alerts, help content, and connected laboratory experiences."],
            ["terms","Terminology Continuity","Keep approved IVD terminology aligned across labels, IFUs, instruments, software, training, regulatory documentation, websites, and support materials."],
            ["lifecycle","Lifecycle Control","Reuse validated language intelligently as assays, labels, software, documentation, and market requirements evolve across product releases."],
          ].map(([icon,title,copy]) => <div className="cap-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></div>)}
        </div>
      </section>

      <section className="section soft">
        <div className="shell">
          <SectionHeading title="IVD Content We Translate" intro="IVD products generate complex multilingual content throughout development, regulatory preparation, commercialization, and post-market updates. Stepes connects these content streams so teams can maintain quality without managing each document or system in isolation." centered className="mobile-center" />
          <div className="content-groups">
            {contentGroups.map((g) => <article className="content-group" key={g.title}><div className="group-head"><div className="icon-box"><Icon name={g.icon}/></div><div><h3>{g.title}</h3><p>{g.copy}</p></div></div><ul>{g.items.map(x => <li key={x}>{x}</li>)}</ul></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell regulatory-grid">
          <div className="reg-copy">
            <SectionHeading title="Multilingual IVD Content for Global Regulatory Markets" intro="IVD language requirements can vary by market, intended user, device type, content, and delivery format. A scalable translation program starts by defining where the product will be distributed, who will use it, which information must be localized, and how translated content will be reviewed and released." className="mobile-center" />
            <p>Stepes supports IVD manufacturers with multilingual regulatory and product documentation across Europe, North America, Asia-Pacific, Latin America, the Middle East, and other international markets. We combine life sciences linguists, terminology management, translation memory, quality controls, and multilingual production to keep complex market releases organized.</p>
            <EditorialLink href="https://www.stepes.com/medical-device-translation-services/">Medical Device Translation Services</EditorialLink>
          </div>
          <div className="reg-panel">
            <h3>EU IVDR Language Support</h3>
            <p>For IVD products under Regulation (EU) 2017/746, applicable language requirements are defined by the markets where a device is made available. Stepes helps manufacturers execute the approved multilingual scope across content such as:</p>
            <ul className="check-list">
              {["Labels and Instructions for Use","Self-testing and near-patient instructions","Product and safety information","Technical and regulatory documentation","Declarations and supporting materials","Software and graphic user interface content where localization is required","Market-specific product communications"].map(x => <li key={x}><Icon name="check" size={18}/><span>{x}</span></li>)}
            </ul>
            <div className="reg-note">Regulatory and language requirements vary by product and market. Stepes provides professional translation and localization services and does not provide legal or regulatory advice. Manufacturers remain responsible for determining the requirements applicable to their products.</div>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell split-art">
          <div className="split-copy">
            <SectionHeading title="Translate IVD Labels and Instructions Without Losing Critical Meaning" intro="IVD labels and IFUs contain dense scientific, technical, and operational information. Product names, intended use, warnings, reagent information, specimen requirements, storage conditions, calibration procedures, test limitations, and result information must remain accurate while also being understandable to the intended user." className="mobile-center" />
            <h3>Protect Scientific and Operational Meaning</h3>
            <div className="two-col-list">
              {["Intended purpose and intended use","Product and reagent identification","Warnings and precautions","Specimen types and collection requirements","Reagent ingredients and concentrations","Preparation, dilution, and reconstitution","Storage temperatures and conditions","Calibration and quality-control procedures","Operating procedures and test limitations","Expected or reference values","Performance information and result interpretation","Product, lot, and revision identifiers"].map(x => <span key={x}>{x}</span>)}
            </div>
            <h3>Treat Numbers as Critical Content</h3>
            <p>Stepes quality workflows can check numbers, measurements, percentages, temperatures, times, concentrations, dates, product references, and other structured content for unexpected differences between source and target. Human reviewers then evaluate whether terminology, context, and meaning remain appropriate for the product and intended user.</p>
            <h3>Validate the Final Deliverable</h3>
            <p>Stepes supports multilingual desktop publishing and final-format QA for labels, package inserts, PDFs, diagrams, tables, and other production files to identify issues such as text expansion, misplaced content, formatting errors, or bidirectional-language problems before release.</p>
            <EditorialLink href="https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation-guide/">Medical Device IFU Translation Guide</EditorialLink>
          </div>
          <LabelArtwork />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading title="Translation Expertise Across IVD Technologies" intro="Different diagnostic technologies create different linguistic and technical demands. Stepes supports a broad range of IVD products with translation workflows matched to the technology, documentation, intended users, and markets involved." centered className="mobile-center" />
          <div className="tech-grid">
            {technologies.map(([title,copy]) => <div className="tech-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell poc-grid">
          <div>
            <SectionHeading title="Clear IVD Translation From the Laboratory to the Point of Care" intro="Diagnostic testing is no longer confined to a centralized laboratory. IVD products may be used by laboratory scientists, clinicians, nurses, pharmacists, technicians, caregivers, or patients themselves." className="mobile-center" />
            <p>The translation must reflect the knowledge and context of the intended user while preserving approved scientific and operating meaning. Stepes helps IVD companies translate point-of-care, near-patient, and self-testing content across the complete user experience.</p>
          </div>
          <div className="audience-stack">
            <div><span>LAB</span><h3>For Laboratory Professionals</h3><p>Technically precise assay procedures, reagent information, instrument instructions, calibration, quality-control documentation, maintenance procedures, and troubleshooting.</p></div>
            <div><span>CARE</span><h3>For Healthcare and Near-Patient Users</h3><p>Clear setup, specimen collection, device operation, software prompts, warnings, result displays, and procedural content for decentralized testing environments.</p></div>
            <div><span>HOME</span><h3>For Patients and Consumers</h3><p>Readable, usable translation of test preparation, specimen collection, procedural steps, warnings, limitations, result interpretation, and follow-up information without weakening approved meaning.</p></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell software-grid">
          <div className="software-copy">
            <SectionHeading title="Localize the Digital Experience Behind Modern Diagnostics" intro="Modern IVD systems increasingly connect assays and reagents with intelligent instruments, touchscreen interfaces, applications, middleware, cloud systems, and data-driven workflows." className="mobile-center" />
            <p>Stepes localizes IVD software alongside the documentation and terminology that support it, helping product teams maintain one coherent multilingual experience across physical and digital touchpoints.</p>
            <EditorialLink href="https://www.stepes.com/software-localization-services/">Software Localization Services</EditorialLink>
          </div>
          <div className="software-panel">
            <div className="software-title"><Icon name="software"/><h3>IVD Software We Localize</h3></div>
            <div className="software-list">{["Analyzer and instrument interfaces","Embedded software","Diagnostic applications","Touchscreen workflows","Result dashboards","Alerts and warnings","Error messages","Setup and configuration","Online help","Middleware","Laboratory workflow interfaces","Connected diagnostic platforms","Software release notes","Supporting user documentation"].map(x => <span key={x}>{x}</span>)}</div>
            <div className="software-callout"><strong>Context + in-product review</strong><p>Product references, screenshots, descriptions, string IDs, character limits, variables, placeholders, and final-interface review help linguists translate short software strings accurately and catch issues that standalone files cannot reveal.</p></div>
          </div>
        </div>
      </section>

      <section className="section blush">
        <div className="shell split-art terms-split">
          <TermsArtwork />
          <div className="split-copy">
            <SectionHeading title="One IVD Vocabulary Across Every Product Touchpoint" intro="IVD terminology rarely stays in one document. A single approved concept can appear across the assay, reagent label, IFU, instrument interface, software, training, regulatory documentation, website, and customer support." className="mobile-center" />
            <p>Stepes uses terminology management to create and maintain controlled multilingual vocabulary for analytes, biomarkers, antibodies, antigens, enzymes, primers, reagents, controls, calibrators, specimen types, assay names, measurement units, reference intervals, instrument components, result classifications, product names, and abbreviations.</p>
            <h3>From Glossary to Governed Terminology</h3>
            <p>A useful IVD termbase can include definitions, context, product associations, approved equivalents, prohibited variants, abbreviations, status, usage notes, and language-specific guidance. Approved terminology can then be applied across translation, AI-assisted workflows, professional review, and QA.</p>
            <EditorialLink href="https://www.stepes.com/terminology-management/">Terminology Management</EditorialLink>
          </div>
        </div>
      </section>

      <section className="section workflow-section">
        <div className="shell">
          <SectionHeading title="Keep Every Language Aligned With Every IVD Release" intro="IVD localization is rarely a one-time event. Assays change. Labels are revised. Software evolves. New markets are added. Product instructions and regulatory content are updated. Stepes helps manage multilingual updates as a controlled lifecycle instead of repeatedly retranslating content from the beginning." centered={false} />
          <div className="workflow-grid">
            {workflow.map(([title,copy],i) => <div className="workflow-step" key={title}><div className="step-no">{String(i+1).padStart(2,'0')}</div><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="workflow-summary"><p>This approach allows unchanged or previously approved content to be reused where appropriate while directing translation and review effort toward new or modified content. The result is faster multilingual updates without sacrificing control over terminology, consistency, or release quality.</p></div>
        </div>
      </section>

      <section className="section ai-section soft">
        <div className="shell">
          <SectionHeading title="Use AI Where It Adds Speed. Keep Experts Where Accuracy Matters." intro="AI is transforming translation, but regulated IVD content should not be treated as one uniform content category. Lower-risk reference content does not carry the same consequences as a product label, self-testing instruction, or safety-critical operating step." centered className="mobile-center" />
          <div className="ai-grid">
            <div className="ai-column"><h3>AI-Assisted Efficiency</h3><p>AI and translation automation can accelerate suitable high-volume or repetitive content through first-pass translation, translation-memory reuse, approved terminology application, repetitive-content processing, automated completeness checks, numerical QA, and workflow routing.</p></div>
            <div className="ai-column focus"><h3>Professional IVD Review</h3><p>Professional medical and scientific linguists review content where context, technical meaning, terminology, user comprehension, and product knowledge require human judgment, including source-to-target accuracy, IVD terminology, scientific meaning, numbers and units, warnings, instructions, and final readiness.</p></div>
            <div className="ai-column"><h3>Specialist Validation</h3><p>Regulated, safety-related, patient-facing, or otherwise high-consequence IVD content can be routed through stronger review and approval models, including independent linguistic revision, subject-matter review, in-country review, client approval, and final-context validation.</p></div>
          </div>
          <p className="ai-close">The objective is not to maximize AI use. It is to apply the right level of technology and human expertise to each content type so IVD companies can gain efficiency while protecting quality where errors matter most.</p>
          <EditorialLink href="https://www.stepes.com/ai-human-translation-workflow/">AI + Human Translation Workflow</EditorialLink>
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell">
          <SectionHeading eyebrow="QUALITY & CONTROL" title="Quality Designed for Regulated IVD Content" intro="Translation quality is most dependable when it is built into the workflow from the beginning rather than added as a final proofreading step. Stepes combines ISO-certified processes, professional linguists, controlled language assets, automated QA, human review, and final-content validation to support demanding IVD translation programs." dark />
          <div className="quality-grid">
            {quality.map(([title,copy]) => <div className="quality-item" key={title}><h3>{title}</h3><p>{copy}</p></div>)}
          </div>
          <div className="dark-bottom"><div className="iso-line"><strong>ISO 13485:2016</strong><strong>ISO 17100</strong><strong>ISO 9001:2015</strong></div><EditorialLink href="https://www.stepes.com/translation-quality-assurance/">Translation Quality Assurance</EditorialLink></div>
        </div>
      </section>

      <section className="section languages-section">
        <div className="shell">
          <SectionHeading title="IVD Translation in 100+ Languages" intro="Launch diagnostic products across international markets with professional IVD translation and localization in more than 100 languages. Stepes can coordinate multilingual releases across languages, content types, and formats while maintaining common terminology, translation memory, quality requirements, and project governance." centered className="mobile-center" />
          <div className="languages-grid">{["Spanish","French","German","Italian","Portuguese","Dutch","Swedish","Danish","Norwegian","Finnish","Polish","Czech","Romanian","Greek","Chinese","Japanese","Korean","Thai","Vietnamese","Indonesian","Arabic","Hebrew","Turkish","Hindi"].map(x => <span key={x}>{x}</span>)}</div>
          <div className="more-languages">and many more.</div>
        </div>
      </section>

      <section className="section soft">
        <div className="shell why-grid">
          <SectionHeading title="Why IVD Companies Choose Stepes" intro="Bring specialized language expertise, controlled workflows, software localization, terminology governance, and scalable global delivery together in one IVD translation program." className="mobile-center" />
          <div className="why-rows">{why.map(([title,copy]) => <div className="why-row" key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="section related-section">
        <div className="shell">
          <SectionHeading title="Related Translation Expertise" intro="Extend the same quality, terminology, and lifecycle controls into the broader medical-device, life sciences, MedTech, software, and IFU content surrounding your IVD portfolio." centered className="mobile-center" />
          <div className="related-list">
            {[
              ["Medical Device Translation Services","Translate IFUs, labeling, technical documentation, software, training, regulatory materials, and other medical-device content across global markets.","https://www.stepes.com/medical-device-translation-services/","Medical Device Translation"],
              ["Life Sciences Translation Services","Support clinical, regulatory, scientific, medical-device, diagnostic, and commercial content across the broader life sciences lifecycle.","https://www.stepes.com/life-sciences-translation-services/","Life Sciences Translation"],
              ["MedTech Translation Services","Localize connected devices, diagnostics, digital health technologies, software-driven products, and emerging healthcare innovations.","https://www.stepes.com/medtech-translation-services/","MedTech Translation"],
              ["Software Localization Services","Localize IVD instrument interfaces, applications, digital workflows, software strings, online help, and connected product experiences.","https://www.stepes.com/software-localization-services/","Software Localization"],
              ["Medical Device IFU Translation Guide","Plan multilingual IFUs around market requirements, terminology, review, publishing, revision management, and final-format QA.","https://www.stepes.com/resources/translation-guides/medical-device-ifu-translation-guide/","Medical Device IFU Guide"],
            ].map(([title,copy,href,linkLabel]) => <div className="related-row" key={title}><div><h3>{title}</h3><p>{copy}</p></div><EditorialLink href={href}>{linkLabel}</EditorialLink></div>)}
          </div>
        </div>
      </section>

      <section className="section faq-section soft">
        <div className="shell faq-shell">
          <SectionHeading title="Frequently Asked Questions About IVD Translation" />
          <div className="faq-panel">
            {faqs.map(([q,a],i) => <details key={q} open={i===0}><summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><div className="faq-answer"><p>{a}</p></div></details>)}
          </div>
        </div>
      </section>

      <section className="section final-cta-section">
        <div className="shell final-cta">
          <div><h2>Ready to Take Your IVD Products Into More Markets?</h2><p>From assays and reagents to labeling, IFUs, instrument software, laboratory workflows, and regulatory documentation, Stepes helps IVD companies manage multilingual product content with greater accuracy, consistency, speed, and control.</p></div>
          <div className="final-actions"><a className="btn btn-primary" href="https://app.stepes.com/quote/">Get a Quote</a><a className="btn btn-secondary" href="https://www.stepes.com/contact-sales/">Talk to an IVD Translation Expert</a></div>
        </div>
      </section>
    </main>
  );
}

const styles = `
:root{font-family:"Inter Tight",Inter,Arial,sans-serif;color:${C.ink};background:#fff}.page{overflow:hidden;background:#fff}.page *{box-sizing:border-box}.page a{color:inherit}.shell{width:min(1280px,calc(100% - 112px));margin:0 auto}.section{padding:96px 0}.soft{background:${C.soft}}.blush{background:${C.blush}}h1,h2,h3,p{margin-top:0}h1,h2,h3{font-weight:600;letter-spacing:-.025em;color:${C.ink}}h1{font-size:48px;line-height:1.06;margin-bottom:24px;max-width:720px}h2{font-size:36px;line-height:1.12;margin-bottom:18px}h3{font-size:24px;line-height:1.18;margin-bottom:10px}p,li,.content-group li,.two-col-list span,.software-list span{font-size:16px;line-height:1.65;color:${C.body};font-weight:400}.section-intro{font-size:18px;line-height:1.6;max-width:800px;margin-bottom:0}.section-heading{max-width:820px;margin-bottom:44px}.section-heading.centered{text-align:center;margin-left:auto;margin-right:auto}.section-heading.centered .section-intro{margin-left:auto;margin-right:auto}.eyebrow{font-size:11px;line-height:1.2;font-weight:600;letter-spacing:.14em;color:${C.magenta};margin-bottom:14px}.eyebrow-dark{color:${C.eyebrowDark}}.hero{padding:104px 0 96px;background:linear-gradient(180deg,#fff 0%,#fff 72%,#fcfafb 100%)}.hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);align-items:center;gap:64px}.hero-lede{font-size:18px;line-height:1.65;max-width:700px;margin-bottom:32px}.hero-actions,.final-actions{display:flex;gap:14px;flex-wrap:wrap}.btn{min-height:48px;border-radius:999px;padding:13px 22px;font-size:16px;line-height:1.2;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;border:1px solid transparent;transition:.2s ease}.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:${C.magenta};color:#fff!important}.btn-primary:hover{background:${C.magentaDark};transform:translateY(-1px)}.btn-secondary{background:#fff;border-color:#d8d5d9;color:${C.ink}}.btn-secondary:hover{border-color:#aaa5ab}.btn:focus-visible,.editorial-link:focus-visible,summary:focus-visible{outline:3px solid #f2a7c6;outline-offset:3px}.hero-art{height:480px;position:relative;border-radius:30px;background:#f8f6f7;overflow:hidden;border:1px solid #eee9ec}.art-blush{position:absolute;width:330px;height:330px;border-radius:50%;background:#f7dce8;right:-90px;top:-110px}.analyzer{position:absolute;width:260px;height:245px;left:115px;top:105px;background:#5b5b61;border-radius:28px 28px 20px 20px;box-shadow:0 22px 50px rgba(30,25,30,.12)}.screen{position:absolute;left:34px;top:34px;width:128px;height:76px;border-radius:10px;background:#eceaed;padding:14px}.screen span{height:7px;border-radius:7px;background:#c2bec4;display:block;margin-bottom:9px}.screen span:nth-child(2){width:78%}.screen span:nth-child(3){width:56%;background:${C.magenta}}.slot{position:absolute;right:26px;bottom:34px;display:flex;gap:8px}.slot i{width:22px;height:56px;border-radius:7px;background:#77757b}.slot i:nth-child(2){background:${C.magentaDark}}.analyzer-foot{position:absolute;left:35px;right:35px;height:16px;bottom:-15px;background:#454449;border-radius:0 0 14px 14px}.cartridge{position:absolute;width:122px;height:54px;right:66px;bottom:86px;background:#fff;border-radius:12px;transform:rotate(-10deg);box-shadow:0 15px 35px rgba(25,20,25,.13);border:1px solid #e2dfe2}.cartridge:after{content:"";position:absolute;width:26px;height:26px;border:6px solid #bbb6bc;border-radius:50%;right:15px;top:14px}.cartridge span{position:absolute;height:6px;background:${C.magenta};left:16px;top:18px;width:42px;border-radius:6px}.cartridge span+span{top:30px;width:60px;background:#aaa6ac}.vial{position:absolute;left:48px;bottom:58px;width:54px;height:115px;background:#fff;border:1px solid #d9d5d9;border-radius:12px 12px 18px 18px;box-shadow:0 14px 30px rgba(25,20,25,.11)}.vial:before{content:"";position:absolute;left:6px;right:6px;top:-18px;height:24px;border-radius:7px 7px 3px 3px;background:#55545a}.vial span{position:absolute;left:7px;right:7px;bottom:14px;height:45px;border-radius:8px;background:#f0b8d0}.molecule{position:absolute;width:155px;right:25px;top:35px;fill:none;stroke:#78757b;stroke-width:2.5}.molecule circle{fill:#fff;stroke:${C.magentaDark};stroke-width:3}.result-panel{position:absolute;right:48px;top:144px;width:150px;height:115px;background:#fff;border-radius:16px;border:1px solid #e6e1e5;padding:20px;box-shadow:0 14px 32px rgba(25,20,25,.1)}.result-line{height:6px;background:#bbb7bc;border-radius:6px;display:block;width:70%;margin-bottom:10px}.result-line.wide{width:90%}.result-line.short{width:50%}.result-panel b{position:absolute;right:18px;bottom:16px;width:28px;height:28px;border-radius:50%;background:${C.magenta}}.dot{position:absolute;border-radius:50%;background:${C.magentaDark};opacity:.75}.d1{width:8px;height:8px;left:50px;top:65px}.d2{width:12px;height:12px;right:34px;bottom:48px}.d3{width:6px;height:6px;left:405px;bottom:34px}.proof-band{border-top:1px solid ${C.border};border-bottom:1px solid ${C.border};background:#fff}.proof-grid{display:grid;grid-template-columns:repeat(5,1fr)}.proof-item{padding:26px 24px;text-align:center;border-right:1px solid ${C.border}}.proof-item:last-child{border-right:0}.proof-item strong{display:block;font-size:16px;font-weight:600;color:${C.ink};margin-bottom:5px}.proof-item span{font-size:14px;color:${C.muted}}.overview-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:90px;align-items:start}.overview-grid .section-heading{margin-bottom:0}.overview-copy p:first-child{font-size:18px;line-height:1.65}.capability-rows{margin-top:64px;display:grid;grid-template-columns:1fr 1fr;column-gap:54px}.cap-row{display:grid;grid-template-columns:46px 1fr;gap:16px;padding:28px 0;border-top:1px solid ${C.border}}.cap-row h3{margin-bottom:8px}.cap-row p{margin:0}.icon-box{width:42px;height:42px;border-radius:14px;background:#f7e8ef;color:${C.magentaDark};display:flex;align-items:center;justify-content:center;flex:0 0 auto}.content-groups{border-top:1px solid ${C.border}}.content-group{display:grid;grid-template-columns:.9fr 1.1fr;gap:48px;padding:34px 0;border-bottom:1px solid ${C.border}}.group-head{display:grid;grid-template-columns:46px 1fr;gap:16px}.group-head p{margin:0}.content-group ul{margin:0;padding:0;list-style:none;columns:2;column-gap:36px}.content-group li{break-inside:avoid;margin:0 0 10px;padding-left:15px;position:relative}.content-group li:before{content:"";position:absolute;left:0;top:.72em;width:5px;height:5px;border-radius:50%;background:${C.magenta}}.regulatory-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:72px;align-items:start}.reg-copy .section-heading{margin-bottom:26px}.reg-panel{border:1px solid ${C.border};border-radius:28px;padding:40px;background:#fff;box-shadow:0 18px 45px rgba(40,30,37,.05)}.check-list{list-style:none;padding:0;margin:24px 0}.check-list li{display:grid;grid-template-columns:20px 1fr;gap:11px;padding:10px 0;border-bottom:1px solid #eeecef}.check-list li svg{color:${C.magenta};margin-top:4px}.reg-note{font-size:16px;line-height:1.6;color:${C.muted};padding-top:18px}.editorial-link{font-size:16px;font-weight:600;color:${C.magenta}!important;text-decoration:none;display:inline-flex;align-items:center;gap:7px;margin-top:8px;min-height:44px;max-width:100%}.editorial-link:hover{text-decoration:underline;text-underline-offset:4px}.split-art{display:grid;grid-template-columns:1.08fr .92fr;gap:72px;align-items:center}.split-copy .section-heading{margin-bottom:30px}.split-copy h3{margin-top:30px}.two-col-list{display:grid;grid-template-columns:1fr 1fr;gap:8px 24px}.two-col-list span{position:relative;padding-left:16px}.two-col-list span:before{content:"";position:absolute;left:0;top:.72em;width:5px;height:5px;background:${C.magenta};border-radius:50%}.label-art{position:relative;height:500px;border-radius:30px;background:#fff;border:1px solid #eadde3;overflow:hidden}.label-sheet{position:absolute;width:270px;height:350px;background:#fff;left:100px;top:70px;border-radius:18px;box-shadow:0 22px 55px rgba(60,35,48,.13);border:1px solid #e7e1e4;padding:32px}.fake-heading{height:18px;width:62%;background:#57565b;border-radius:8px;margin-bottom:24px}.fake-line{height:8px;width:80%;background:#d1cdd1;border-radius:7px;margin-bottom:12px}.fake-line.long{width:100%}.fake-line.short{width:54%}.warning-row{margin-top:30px;padding:14px;border-radius:12px;background:#fdf2f7;display:grid;grid-template-columns:25px 1fr 1fr;gap:8px;align-items:center}.warning-row span{width:25px;height:25px;background:${C.magenta};color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:600}.warning-row i{height:7px;background:#c8c2c7;border-radius:5px}.data-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:26px}.data-grid i{height:42px;background:#f3f1f2;border-radius:8px}.label-vial{position:absolute;right:54px;bottom:62px;width:70px;height:152px;border-radius:14px 14px 20px 20px;background:#fdfdfd;border:1px solid #d9d4d7;box-shadow:0 14px 35px rgba(60,35,48,.1)}.label-vial:before{content:"";position:absolute;left:8px;right:8px;top:-25px;height:32px;background:#57565b;border-radius:9px 9px 4px 4px}.label-vial span{position:absolute;left:8px;right:8px;bottom:18px;height:56px;background:#edb4cc;border-radius:10px}.label-strip{position:absolute;right:28px;top:82px;width:150px;height:70px;border-radius:14px;background:#56555b;transform:rotate(8deg);padding:18px}.label-strip i{display:block;height:6px;background:#eee;border-radius:5px;margin-bottom:8px}.label-strip i:nth-child(2){width:75%}.label-strip i:nth-child(3){width:50%;background:#efb0cc}.tech-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid ${C.border};border-left:1px solid ${C.border}}.tech-item{padding:28px 28px 30px;border-right:1px solid ${C.border};border-bottom:1px solid ${C.border};min-height:210px}.tech-item p{margin:0}.poc-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:76px;align-items:start}.poc-grid .section-heading{margin-bottom:24px}.audience-stack{border-top:1px solid ${C.border}}.audience-stack>div{display:grid;grid-template-columns:64px 1fr;column-gap:18px;padding:26px 0;border-bottom:1px solid ${C.border}}.audience-stack span{grid-row:1/3;font-size:11px;font-weight:600;letter-spacing:.1em;color:${C.magenta};padding-top:5px}.audience-stack h3{margin-bottom:6px}.audience-stack p{margin:0}.software-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px;align-items:start}.software-copy .section-heading{margin-bottom:25px}.software-panel{border-radius:30px;background:#202024;color:#fff;padding:38px}.software-panel h3,.software-panel strong{color:#fff}.software-panel p,.software-list span{color:#d7d4d8}.software-title{display:flex;align-items:center;gap:12px;color:${C.eyebrowDark};margin-bottom:26px}.software-title h3{margin:0}.software-list{display:grid;grid-template-columns:1fr 1fr;gap:0 28px}.software-list span{padding:12px 0;border-top:1px solid #3d3a40}.software-callout{margin-top:28px;border-top:2px solid ${C.magenta};padding-top:22px}.software-callout strong{font-size:18px}.software-callout p{margin:8px 0 0}.terms-split{grid-template-columns:.88fr 1.12fr}.terms-art{height:460px;position:relative;border-radius:30px;background:#fff;border:1px solid #eadde3;overflow:hidden}.term-flow{position:absolute;inset:0;width:100%;height:100%;fill:none;stroke:#d8c9d0;stroke-width:2}.term-node,.term-core,.term-chip{position:absolute;z-index:2;background:#fff;border:1px solid #ddd6da;box-shadow:0 12px 30px rgba(50,30,42,.07)}.term-node{min-width:150px;min-height:68px;border-radius:18px;padding:14px 16px;display:flex;align-items:center;gap:11px;color:#5d5a5f}.term-node span{font-size:14px;line-height:1.25;font-weight:600;color:${C.ink}}.term-core{left:50%;top:50%;transform:translate(-50%,-50%);width:190px;border-radius:22px;padding:20px 22px;background:${C.magenta};border:0;color:#fff}.term-core strong,.term-core span{display:block;color:#fff}.term-core strong{font-size:17px;line-height:1.25;font-weight:600;margin-bottom:5px}.term-core span{font-size:14px;line-height:1.35}.n1{left:38px;top:54px}.n2{right:34px;top:91px}.n3{left:54px;bottom:54px}.n4{right:34px;bottom:40px}.term-chip{border-radius:999px;padding:8px 12px;font-size:14px;line-height:1;font-weight:600;color:${C.magentaDark};box-shadow:none;background:${C.blush}}.tc1{left:185px;top:50px}.tc2{right:174px;bottom:70px}.tc3{left:180px;bottom:32px}.workflow-section .section-heading{max-width:950px}.workflow-grid{border-top:1px solid ${C.border}}.workflow-step{display:grid;grid-template-columns:72px 330px minmax(0,1fr);gap:26px;align-items:start;padding:30px 0;border-bottom:1px solid ${C.border}}.step-no{font-size:18px;color:${C.magenta};font-weight:600;padding-top:2px}.workflow-step h3{margin:0}.workflow-step p{margin:0;max-width:720px}.workflow-summary{display:grid;grid-template-columns:72px 330px minmax(0,1fr);gap:26px;margin-top:34px}.workflow-summary p{grid-column:3;max-width:720px;margin:0}.ai-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border:1px solid ${C.border};border-radius:30px;overflow:hidden;background:#fff}.ai-column{padding:36px;border-right:1px solid ${C.border}}.ai-column:last-child{border-right:0}.ai-column.focus{background:#fcf5f8}.ai-column p{margin:0}.ai-close{max-width:850px;margin:30px 0 18px}.dark-section{background:${C.dark};color:#fff}.dark-section h2,.dark-section h3{color:#fff}.dark-section .section-intro,.dark-section p{color:#d2cfd3}.quality-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #3c393e;border-left:1px solid #3c393e}.quality-item{padding:28px;border-right:1px solid #3c393e;border-bottom:1px solid #3c393e}.quality-item p{margin:0}.dark-bottom{display:flex;align-items:center;justify-content:space-between;gap:30px;margin-top:34px}.iso-line{display:flex;gap:28px;flex-wrap:wrap}.iso-line strong{font-size:16px;color:#fff}.dark-section .editorial-link{color:${C.eyebrowDark}!important}.languages-grid{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid ${C.border};border-left:1px solid ${C.border}}.languages-grid span{font-size:16px;font-weight:600;padding:18px;border-right:1px solid ${C.border};border-bottom:1px solid ${C.border};text-align:center}.more-languages{text-align:center;font-size:16px;color:${C.muted};margin-top:20px}.why-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:72px}.why-grid .section-heading{margin-bottom:0}.why-rows{border-top:1px solid ${C.border}}.why-row{display:grid;grid-template-columns:260px 1fr;gap:28px;padding:24px 0;border-bottom:1px solid ${C.border}}.why-row h3{margin:0}.why-row p{margin:0}.related-list{border-top:1px solid ${C.border}}.related-row{display:grid;grid-template-columns:1fr auto;gap:40px;align-items:center;padding:28px 0;border-bottom:1px solid ${C.border}}.related-row h3{margin-bottom:6px}.related-row p{margin:0;max-width:760px}.related-row .editorial-link{margin:0;white-space:nowrap}.faq-shell{display:grid;grid-template-columns:.72fr 1.28fr;gap:72px;align-items:start}.faq-shell .section-heading{margin-bottom:0}.faq-panel{border:1px solid ${C.border};border-radius:28px;overflow:hidden}.faq-panel details{border-bottom:1px solid ${C.border};background:#fff}.faq-panel details:last-child{border-bottom:0}.faq-panel summary{list-style:none;cursor:pointer;min-height:72px;padding:22px 24px;display:flex;align-items:center;justify-content:space-between;gap:20px;font-size:18px;font-weight:600;color:${C.ink}}.faq-panel summary::-webkit-details-marker{display:none}.faq-plus{font-size:26px;font-weight:400;color:${C.magenta};transition:.2s}.faq-panel details[open] .faq-plus{transform:rotate(45deg)}.faq-answer{padding:0 24px 24px;max-width:840px}.faq-answer p{margin:0}.final-cta-section{padding-top:20px;padding-bottom:96px;background:#fff}.final-cta{background:${C.blush};border:1px solid #eddce4;border-radius:30px;padding:58px 64px;display:grid;grid-template-columns:1fr auto;gap:48px;align-items:center}.final-cta h2{margin-bottom:14px}.final-cta p{font-size:18px;max-width:760px;margin-bottom:0}.final-actions{justify-content:flex-end}.dark-section .editorial-link svg{color:currentColor}
@media(max-width:1100px){.shell{width:min(1280px,calc(100% - 80px))}.hero-grid{grid-template-columns:1fr .9fr;gap:40px}.hero-art{height:430px}.analyzer{left:78px;top:98px}.content-group{grid-template-columns:1fr 1.1fr}.tech-grid{grid-template-columns:repeat(2,1fr)}.languages-grid{grid-template-columns:repeat(4,1fr)}.workflow-step,.workflow-summary{grid-template-columns:60px 280px minmax(0,1fr);gap:22px}.final-cta{grid-template-columns:1fr}.final-actions{justify-content:flex-start}}
@media(max-width:900px){.shell{width:calc(100% - 48px)}.section{padding:80px 0}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero{padding:90px 0 80px}.hero-grid,.overview-grid,.regulatory-grid,.split-art,.poc-grid,.software-grid,.why-grid,.faq-shell{grid-template-columns:1fr}.hero-copy{text-align:center}.hero-copy h1,.hero-lede{margin-left:auto;margin-right:auto}.hero-actions{justify-content:center}.hero-art{max-width:620px;width:100%;margin:20px auto 0}.proof-grid{grid-template-columns:repeat(2,1fr)}.proof-item{border-top:1px solid ${C.border}}.proof-item:nth-child(-n+2){border-top:0}.proof-item:nth-child(2n){border-right:0}.proof-item:nth-child(2n+1){border-right:1px solid ${C.border}}.proof-item:last-child{grid-column:1/-1;border-right:0}.overview-grid{gap:32px}.overview-grid .section-heading,.why-grid .section-heading,.faq-shell .section-heading{margin-bottom:0}.capability-rows{grid-template-columns:1fr}.content-group{grid-template-columns:1fr;gap:22px}.content-group ul{columns:2}.regulatory-grid,.split-art,.poc-grid,.software-grid,.why-grid,.faq-shell{gap:48px}.terms-split .terms-art{order:2}.terms-split .split-copy{order:1}.workflow-step,.workflow-summary{grid-template-columns:60px minmax(0,1fr);gap:18px}.workflow-step h3{grid-column:2;margin-bottom:8px}.workflow-step p{grid-column:2}.workflow-summary p{grid-column:2}.ai-grid{grid-template-columns:1fr}.ai-column{border-right:0;border-bottom:1px solid ${C.border}}.ai-column:last-child{border-bottom:0}.quality-grid{grid-template-columns:repeat(2,1fr)}.languages-grid{grid-template-columns:repeat(4,1fr)}.why-row{grid-template-columns:220px 1fr}.final-cta{padding:50px}.final-actions{justify-content:flex-start}.section-heading.mobile-center,.section-heading.centered{text-align:center;margin-left:auto;margin-right:auto}.section-heading.mobile-center .section-intro{margin-left:auto;margin-right:auto}.overview-copy,.reg-copy>p,.split-copy>p,.poc-grid>div>p,.software-copy>p,.terms-split .split-copy>p{max-width:760px}}
@media(max-width:640px){.shell{width:calc(100% - 40px)}.section{padding:68px 0}h1{font-size:38px;line-height:1.08}h2{font-size:30px}h3{font-size:20px}.hero{padding:74px 0 66px}.hero-lede,.section-intro,.final-cta p{font-size:18px}.hero-actions,.final-actions{flex-direction:column}.btn{width:100%}.hero-art{height:360px}.art-blush{width:260px;height:260px}.analyzer{width:205px;height:195px;left:76px;top:90px}.screen{left:25px;top:26px;width:102px;height:60px;padding:11px}.slot{right:20px;bottom:27px}.slot i{width:17px;height:44px}.cartridge{width:92px;height:43px;right:27px;bottom:63px}.cartridge:after{width:21px;height:21px;border-width:5px;top:11px}.vial{left:28px;bottom:45px;width:44px;height:92px}.result-panel{right:24px;top:105px;width:115px;height:91px;padding:15px}.molecule{right:10px;top:20px;width:120px}.d3{display:none}.proof-grid{grid-template-columns:1fr 1fr}.proof-item{padding:20px 14px}.proof-item:nth-child(-n+2){border-top:0}.proof-item:nth-child(2n){border-right:0}.proof-item:nth-child(2n+1){border-right:1px solid ${C.border}}.proof-item:last-child{grid-column:1/-1;border-right:0}.cap-row{grid-template-columns:42px 1fr}.content-group ul{columns:1}.reg-panel{padding:28px 22px}.two-col-list{grid-template-columns:1fr}.label-art,.terms-art{height:360px}.label-sheet{width:210px;height:275px;left:38px;top:52px;padding:25px}.label-strip{right:12px;top:65px;width:120px}.label-vial{right:27px;bottom:38px;width:58px;height:124px}.tech-grid{grid-template-columns:1fr}.tech-item{min-height:auto}.audience-stack>div{grid-template-columns:1fr}.audience-stack span{grid-row:auto;margin-bottom:8px}.software-panel{padding:28px 22px}.software-list{grid-template-columns:1fr}.term-node{min-width:0;width:112px;min-height:54px;padding:10px 11px;border-radius:15px;gap:8px}.term-node span{font-size:12px}.term-node svg{width:18px;height:18px}.n1{left:14px;top:28px}.n2{right:14px;top:68px}.n3{left:14px;bottom:68px}.n4{right:14px;bottom:28px}.term-core{width:150px;padding:15px 16px}.term-core strong{font-size:14px}.term-core span{font-size:12px}.term-chip{display:none}.workflow-section .section-heading{text-align:left}.workflow-step,.workflow-summary{grid-template-columns:48px minmax(0,1fr);padding:24px 0}.workflow-summary{padding-top:28px}.workflow-summary p{grid-column:1/-1}.ai-section .section-heading{text-align:center}.quality-grid{grid-template-columns:1fr}.dark-bottom{align-items:flex-start;flex-direction:column}.iso-line{gap:14px 22px}.languages-grid{grid-template-columns:repeat(2,1fr)}.why-row{grid-template-columns:1fr;gap:8px}.related-row{grid-template-columns:1fr;gap:10px}.related-row .editorial-link{white-space:normal}.faq-shell{gap:28px}.faq-shell .section-heading{text-align:left}.faq-panel summary{font-size:17px;padding:20px}.faq-answer{padding:0 20px 22px}.final-cta-section{padding-bottom:68px}.final-cta{padding:38px 24px;border-radius:24px}.section-heading{margin-bottom:34px}.section-heading.mobile-center{text-align:center}.section-heading.mobile-center .section-intro{margin-left:auto;margin-right:auto}.workflow-section .section-heading,.faq-shell .section-heading{text-align:left}.hero-art,.label-art,.terms-art{overflow:hidden}}
@media(max-width:390px){
  .hero-art{height:330px}
  .hero-art .molecule,.hero-art .result-panel,.hero-art .d2,.hero-art .d3{display:none}
  .analyzer{width:190px;height:182px;left:50%;top:82px;transform:translateX(-50%)}
  .screen{left:24px;top:24px;width:96px;height:56px;padding:10px}
  .screen span{height:6px;margin-bottom:7px}
  .slot{right:18px;bottom:25px;gap:6px}
  .slot i{width:16px;height:40px}
  .analyzer-foot{left:26px;right:26px;height:13px;bottom:-12px}
  .vial{left:22px;bottom:32px;width:42px;height:88px}
  .cartridge{width:88px;height:42px;right:18px;bottom:44px}
  .cartridge:after{width:19px;height:19px;border-width:4px;right:10px;top:11px}
  .cartridge span{left:12px;top:14px;width:30px;height:5px}
  .cartridge span+span{top:25px;width:43px}
  .label-art{height:330px}
  .label-sheet{width:190px;height:250px;left:20px;top:40px;padding:22px}
  .label-strip{right:10px;top:54px;width:108px;height:58px;padding:14px}
  .label-vial{right:20px;bottom:28px;width:52px;height:112px}
  .terms-art{height:300px}
  .term-flow,.term-chip{display:none}
  .term-node{width:105px;min-height:54px;padding:9px 10px}
  .n1{left:10px;top:18px}.n2{right:10px;top:18px}.n3{left:10px;bottom:18px}.n4{right:10px;bottom:18px}
  .term-core{width:148px;padding:14px 15px}
  .proof-item strong{font-size:15px}
  .proof-item span{font-size:14px}
  .faq-panel summary{gap:12px}
  .related-row,.why-row,.workflow-step,.workflow-summary{min-width:0}
  .editorial-link,.related-row h3,.related-row p,.faq-panel summary span:first-child{overflow-wrap:anywhere}
}

`;
