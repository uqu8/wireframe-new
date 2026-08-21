// Sesen Clinical Study Report Translation Services Wireframe — v4
import React, { useState } from "react";

const PAGE = "sesen-csr-page";

const Icon = ({ name, size = 22 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    check: <><path d="M5 12.5l4 4L19 6.5" /></>,
    shield: <><path d="M12 3l7 3v5c0 4.7-2.9 8.2-7 10-4.1-1.8-7-5.3-7-10V6l7-3z"/><path d="M9 12l2 2 4-4"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.5 3.4 5.5 3.4 9S14.2 18.5 12 21c-2.2-2.5-3.4-5.5-3.4-9S9.8 5.5 12 3z"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    cloud: <><path d="M5 18h13a4 4 0 0 0 .7-7.94A7 7 0 0 0 5.3 8.5 5 5 0 0 0 5 18z"/></>,
    file: <><path d="M6 2h8l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    chart: <><path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/></>,
    layers: <><path d="M12 2l9 5-9 5-9-5 9-5z"/><path d="M3 12l9 5 9-5M3 17l9 5 9-5"/></>,
    link: <><path d="M10 13a5 5 0 0 0 7.5.5l2-2a5 5 0 0 0-7-7l-1.2 1.2"/><path d="M14 11a5 5 0 0 0-7.5-.5l-2 2a5 5 0 0 0 7 7l1.2-1.2"/></>,
    table: <><rect x="3" y="4" width="18" height="16" rx="1"/><path d="M3 9h18M8 4v16M14 4v16"/></>,
    heart: <><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></>,
    arrows: <><path d="M5 7h11M13 4l3 3-3 3M19 17H8M11 14l-3 3 3 3"/></>,
    spark: <><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3z"/><path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15z"/></>,
    building: <><path d="M3 21h18M5 21V8l7-4 7 4v13M9 21v-5h6v5M8 11h1M12 11h1M16 11h1"/></>,
    dna: <><path d="M7 3c0 7 10 7 10 18M17 3C17 10 7 10 7 21M8.5 6h7M8 10h8M8 14h8M8.5 18h7"/></>,
    translate: <><path d="M4 5h9M8.5 3v2M6 8c1.5 2.7 3.7 4.8 6.5 6.2M11 8c-1.4 3-3.8 5.4-7 7"/><path d="M14 20l3.5-8 3.5 8M15.3 17h4.4"/></>,
    arrow: <><path d="M5 12h14M14 7l5 5-5 5"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
  };
  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const ArrowLink = ({ href, children }) => (
  <a className="csr-editorial-link" href={href}>
    <span>{children}</span><Icon name="arrow" size={18} />
  </a>
);

const HeroIllustration = () => (
  <svg className="csr-hero-art" viewBox="0 0 560 520" role="img" aria-label="Clinical evidence flowing into a structured clinical study report and regulatory submission">
    <circle cx="295" cy="248" r="196" fill="#F5F7FF" />
    <circle cx="390" cy="116" r="54" fill="#EAF0FF" />
    <circle cx="102" cy="332" r="42" fill="#EAF0FF" />

    <g fill="#FFFFFF" stroke="#AEBBD2" strokeWidth="2.2">
      <rect x="188" y="82" width="222" height="316" rx="18" />
      <rect x="162" y="108" width="222" height="316" rx="18" fill="#FDFEFF" />
    </g>

    <g stroke="#17264D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M203 150h124" />
      <path d="M203 171h82" />
      <path d="M203 207h143" />
      <path d="M203 225h143" />
      <path d="M203 243h106" />
      <rect x="203" y="276" width="142" height="76" rx="8" />
      <path d="M203 300h142M250 276v76M299 276v76" />
      <path d="M205 378h114" />
    </g>

    <g stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M205 130h84" />
      <path d="M228 336l24-18 20 9 26-32 25 12" />
      <circle cx="252" cy="318" r="4" fill="#4B6FD8" stroke="none" />
      <circle cx="272" cy="327" r="4" fill="#4B6FD8" stroke="none" />
      <circle cx="298" cy="295" r="4" fill="#4B6FD8" stroke="none" />
    </g>

    <g transform="translate(50 96)">
      <rect width="110" height="92" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <g transform="translate(20 18)" stroke="#3659BB" strokeWidth="2.7" fill="none" strokeLinecap="round">
        <path d="M0 52h68" />
        <path d="M7 44l15-18 16 7 17-22 10 10" />
        <circle cx="22" cy="26" r="3" fill="#4B6FD8" stroke="none" />
        <circle cx="38" cy="33" r="3" fill="#4B6FD8" stroke="none" />
        <circle cx="55" cy="11" r="3" fill="#4B6FD8" stroke="none" />
      </g>
    </g>

    <g transform="translate(410 190)">
      <rect width="108" height="108" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <g transform="translate(23 25)" stroke="#3659BB" strokeWidth="2.6" fill="none">
        <path d="M10 52V28M29 52V12M48 52V22M2 52h58" />
      </g>
    </g>

    <g transform="translate(49 364)">
      <rect width="130" height="94" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
      <g transform="translate(24 19)" fill="none" stroke="#3659BB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M39 4c-8 0-14 6-14 14 0 12 14 22 14 22s14-10 14-22c0-8-6-14-14-14z" />
        <path d="M16 47h45" />
        <path d="M1 47h8" />
      </g>
    </g>

    <g stroke="#7F8DA8" strokeWidth="2" fill="none" strokeDasharray="6 7">
      <path d="M160 142h25" />
      <path d="M385 242h25" />
      <path d="M176 404h40" />
    </g>

    <g transform="translate(375 382)">
      <rect width="132" height="72" rx="36" fill="#17264D" />
      <circle cx="38" cy="36" r="17" fill="#4B6FD8" />
      <path d="M31 36h14M40 29l7 7-7 7" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <text x="66" y="32" fill="#FFFFFF" fontSize="12" fontFamily="Inter, Arial, sans-serif" fontWeight="700">MODULE</text>
      <text x="66" y="48" fill="#C8D6FF" fontSize="17" fontFamily="Inter Tight, Arial, sans-serif" fontWeight="500">5</text>
    </g>
  </svg>
);

const FlowGraphic = () => {
  const items = [
    { label: "Protocol", note: "Study objectives, design & endpoints", icon: "file" },
    { label: "Clinical Data", note: "CRFs & study observations", icon: "table" },
    { label: "Statistical Analysis", note: "Methods, populations & outputs", icon: "chart" },
    { label: "Clinical Study Report", note: "Integrated efficacy & safety evidence", icon: "layers", featured: true },
    { label: "CTD / eCTD Module 5", note: "Regulatory clinical content", icon: "building" },
  ];
  return (
    <div className="csr-flow" role="group" aria-label="Clinical evidence to regulatory submission workflow">
      {items.map((item, i) => (
        <div className={`csr-flow-item ${item.featured ? "is-featured" : ""}`} key={item.label}>
          <div className="csr-flow-icon"><Icon name={item.icon} /></div>
          <div>
            <strong>{item.label}</strong>
            <span>{item.note}</span>
          </div>
          {i < items.length - 1 && <div className="csr-flow-arrow" aria-hidden="true"><Icon name="arrow" /></div>}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const trust = [
    ["ISO 17100", "Translation quality processes", "check"],
    ["ISO 9001:2015", "Quality management", "shield"],
    ["Terminology Governance", "Study-wide consistency", "link"],
    ["150+ Languages", "Global clinical programs", "globe"],
    ["Life Sciences Expertise", "Professional native linguists", "people"],
    ["Secure Infrastructure", "AWS-hosted platform", "cloud"],
  ];

  const layers = [
    {
      title: "Study Background, Objectives & Design",
      icon: "file",
      intro: "Preserve the language that defines why and how the study was conducted.",
      items: ["Study rationale and background", "Primary and secondary objectives", "Study design and investigational plan", "Study populations", "Inclusion and exclusion criteria", "Treatment groups and randomization", "Investigational product administration", "Dosing and treatment schedules", "Study procedures and assessments", "Protocol deviations and changes in study conduct"],
    },
    {
      title: "Statistical Methods & Analysis",
      icon: "chart",
      intro: "Maintain specialized terminology and the relationships between narrative descriptions and numerical results.",
      items: ["Statistical analysis methods", "Analysis populations", "Sample size descriptions", "Primary and secondary endpoint analyses", "Covariate and subgroup analyses", "Missing-data methodology", "Sensitivity analyses", "Treatment comparisons", "Confidence intervals", "Statistical significance descriptions", "Exploratory analyses", "Statistical conclusions"],
    },
    {
      title: "Efficacy Results",
      icon: "arrows",
      intro: "Keep endpoint terminology and the relationship between narrative results and supporting data consistent.",
      items: ["Primary and secondary efficacy analyses", "Endpoint results", "Treatment-group comparisons", "Subgroup analyses", "Baseline and demographic context", "Individual patient data references", "Sensitivity and exploratory results", "Efficacy conclusions"],
    },
    {
      title: "Safety Evaluation",
      icon: "heart",
      intro: "Translate medically sensitive safety content while preserving patient, exposure, and outcome relationships.",
      items: ["Extent of exposure", "Adverse events and treatment-emergent adverse events", "Serious adverse events", "Deaths and significant medical events", "Discontinuations", "Clinical laboratory evaluations", "Vital signs and physical findings", "Other safety observations", "Safety analyses and conclusions"],
    },
    {
      title: "Patient Narratives",
      icon: "people",
      intro: "Preserve chronology, treatment relationships, clinical terminology, and patient outcomes within individual narratives.",
      items: ["Deaths", "Serious adverse events", "Clinically significant events", "Discontinuations where narratives are included", "Patient-level medical histories", "Concomitant therapies", "Laboratory findings", "Patient outcomes"],
    },
    {
      title: "Tables, Listings, Figures & Appendices",
      icon: "layers",
      intro: "Carry structured and supporting content into the target language without losing its relationship to the core report.",
      items: ["Statistical and safety tables", "Patient listings", "Figures and graphs", "Captions, legends and footnotes", "Abbreviations and cross-references", "Protocols and amendments", "Sample case report forms", "Statistical documentation", "Patient data listings", "Study-specific supporting documents"],
    },
  ];

  const ich = [
    ["Synopsis", "Concise study summaries, results, numerical information, and key conclusions."],
    ["Study Objectives & Investigational Plan", "Study design, endpoints, patient selection, treatment methodology, assessments, and analytical planning."],
    ["Study Patients", "Patient disposition, protocol deviations, demographic characteristics, and analysis populations."],
    ["Efficacy Evaluation", "Endpoint terminology, statistical descriptions, treatment comparisons, and supporting data."],
    ["Safety Evaluation", "Exposure, adverse events, laboratory findings, clinically significant events, narratives, and safety conclusions."],
    ["Discussion & Overall Conclusions", "The relationship between study findings, scientific interpretation, and source conclusions."],
    ["Tables, Figures & References", "Accurate cross-referencing between narrative findings and supporting displays."],
    ["Appendices", "Supporting study materials, patient-level information, and related documents aligned with report terminology."],
  ];

  const workflow = [
    ["Content & Project Assessment", "Review source files, CSR structure, target languages, intended use, tables, figures, appendices, formatting, schedule, terminology, reference content, and reviewer requirements."],
    ["Terminology & Reference Preparation", "Incorporate sponsor glossaries, study terminology, protocol and SAP terminology, previous translations, translation memories, style guides, and approved reviewer feedback where available."],
    ["Specialized Clinical Translation", "Assign professional native life sciences linguists suited to the therapeutic area, scientific complexity, statistical content, target market, and language variant."],
    ["Independent Review", "Verify accuracy, completeness, clinical and statistical terminology, scientific meaning, treatment-group references, efficacy and safety language, and consistency."],
    ["Data, Number & Cross-Reference QA", "Check numbers, units, percentages, statistical notation, terminology, omissions, table and figure references, section references, repetitions, and abbreviations."],
    ["Formatting & Document QA", "Review headings, numbering, tables, figures, captions, footnotes, page structure, appendices, cross-references, and layout integrity where formatted deliverables are required."],
    ["Final Human Quality Review", "Complete final verification against defined project requirements before delivery and incorporate approved reviewer feedback into controlled resources when appropriate."],
  ];

  const services = [
    ["Clinical Trial Translation Services", "Multilingual support across the clinical trial lifecycle, from study startup through reporting and closeout.", "https://www.sesen.com/clinical-trial-translation-services/"],
    ["Clinical Study Documentation Translation Services", "Translation for the interconnected documentation used by sponsors, CROs, investigators, sites, and regulatory teams.", "https://www.sesen.com/clinical-study-translation-services/"],
    ["Protocol Translation Services", "Maintain study objectives, endpoint definitions, procedures, and treatment terminology across languages.", "https://www.sesen.com/protocol-translation-services/"],
    ["Investigator Brochure Translation Services", "Translate scientific, nonclinical, clinical, and safety information for investigators and global study teams.", "https://www.sesen.com/investigators-brochure-translation-services/"],
    ["Case Report Form Translation Services", "Connect multilingual clinical data collection terminology with the documentation that defines and interprets those data.", "https://www.sesen.com/clinical-trial-translation-services/crf-translations/"],
    ["Pharmacovigilance Translation Services", "Support adverse event, aggregate safety, and post-market pharmacovigilance content beyond the CSR.", "https://www.sesen.com/pharmacovigilance-translation-services/"],
    ["Regulatory Submission Translation Services", "Coordinate multilingual regulatory documentation across submission programs and global health authority workflows.", "https://www.sesen.com/regulatory-submission-translation-services/"],
    ["CTD/eCTD Translation Services", "Support multilingual content organized for CTD and eCTD workflows, including clinical content associated with Module 5.", "https://www.sesen.com/ctd-ectd-translation-services/"],
    ["Medical & Scientific Translation Services", "Support scientific, medical affairs, research, and publication content that may draw on or communicate clinical study findings.", "https://www.sesen.com/medical-scientific-translation-services/"],
  ];

  const faq = [
    ["What is Clinical Study Report translation?", "Clinical Study Report translation is the specialized translation of a CSR from one language into another while preserving its scientific meaning, clinical terminology, statistical content, safety information, document structure, and relationships with supporting study data. Because these components are interconnected, CSR translation benefits from coordinated terminology management and quality control across the complete report."],
    ["What parts of a Clinical Study Report can Sesen translate?", "Sesen can support complete CSRs as well as selected sections and associated content, including the synopsis, study background and objectives, investigational plan, patient disposition, statistical methodology, efficacy and safety analyses, patient narratives, tables, listings and figures, discussion and conclusions, references, appendices, and associated clinical study documentation."],
    ["Does Sesen support Clinical Study Reports structured according to ICH E3?", "Yes. Sesen supports translation of Clinical Study Reports organized according to the ICH E3 structure. Our workflows are designed to preserve section organization, clinical and statistical terminology, internal cross-references, tables and figures, safety and efficacy content, and relationships with supporting appendices. Specific translation and submission requirements depend on the applicable market, authority, submission, and intended use."],
    ["Can Sesen translate tables, listings, figures, and statistical content?", "Yes. CSR projects can include tables, listings, figures, statistical text, footnotes, legends, captions, and associated numerical content. Sesen applies linguistic, numerical, and formatting QA to help maintain source-target relationships involving treatment groups, endpoints, percentages, units, statistical notation, table references, and figure references."],
    ["How does Sesen maintain consistency between the CSR, protocol, SAP, and other study documents?", "Where reference content is available, Sesen can use approved translations, study-specific glossaries, translation memory, style guides, sponsor terminology, and previously reviewed documentation to maintain continuity across the study. Cross-document QA can also help identify terminology differences that require human review."],
    ["Can Sesen support CSR translation for CTD and eCTD submissions?", "Yes. Sesen can support CSR translation when multilingual Clinical Study Reports or related clinical content are required as part of a specific regulatory program. Clinical Study Reports and related information are organized within Module 5 of the Common Technical Document. Translation requirements vary by jurisdiction and submission context, so workflows are defined around the requirements applicable to the specific program."],
    ["Does Sesen translate patient safety narratives within Clinical Study Reports?", "Yes. Sesen translates patient narratives describing deaths, serious adverse events, other significant medical events, discontinuations, relevant laboratory abnormalities, medical histories, treatments, and outcomes where these narratives form part of the CSR or related study documentation. Narratives are reviewed in context because meaning often depends on chronology and the relationship between treatment, event, intervention, and outcome."],
    ["Can Sesen handle large or multilingual Clinical Study Report projects?", "Yes. Sesen supports large CSRs, multiple target languages, complex appendices, report updates, parallel production, sponsor review, and phased delivery when appropriate. Centralized project management, translation memory, terminology governance, and coordinated QA help maintain consistency as project volume and language count increase."],
    ["Does Sesen use AI for Clinical Study Report translation?", "Sesen uses AI-enabled and automated technology selectively within life sciences translation workflows, including quality checks that can help identify potential terminology inconsistencies, number discrepancies, omissions, repeated-content variations, and cross-reference issues. Professional linguists and reviewers remain responsible for clinical context, translation decisions, ambiguity resolution, scientific meaning, and final linguistic quality."],
  ];

  return (
    <main className={PAGE}>
      <style>{styles}</style>

      <section className="csr-hero">
        <div className="csr-shell csr-hero-grid">
          <div className="csr-hero-copy">
            <div className="csr-eyebrow">CLINICAL DEVELOPMENT &amp; REGULATORY REPORTING</div>
            <h1>Clinical Study Report Translation Services</h1>
            <p className="csr-hero-lead">Preserve the scientific, statistical, and regulatory integrity of Clinical Study Reports across languages with specialized translation services built for global clinical development.</p>
            <p className="csr-hero-support">Sesen helps pharmaceutical, biotechnology, and CRO teams translate complete Clinical Study Reports (CSRs), individual sections, patient narratives, tables, listings, figures, and appendices with professional native life sciences linguists, structured terminology management, AI-assisted quality checks, and expert human review—helping maintain scientific meaning, numerical integrity, and cross-document consistency across global clinical and regulatory programs.</p>
            <div className="csr-actions">
              <a className="csr-btn csr-btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <a className="csr-btn csr-btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            </div>
          </div>
          <div className="csr-hero-visual"><HeroIllustration /></div>
        </div>
      </section>

      <section className="csr-trust" aria-label="Sesen quality and capability credentials">
        <div className="csr-shell csr-trust-grid">
          {trust.map(([title, note, icon]) => (
            <div className="csr-trust-item" key={title}>
              <div className="csr-trust-icon"><Icon name={icon} size={20} /></div>
              <div><strong>{title}</strong><span>{note}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="csr-section csr-overview">
        <div className="csr-shell csr-split-wide">
          <div>
            <div className="csr-eyebrow">INTEGRATED CLINICAL EVIDENCE</div>
            <h2>Translate the Complete Scientific Story of a Clinical Study</h2>
          </div>
          <div className="csr-rich-copy">
            <p>A Clinical Study Report brings together the design, conduct, analysis, results, and interpretation of a clinical study in one highly structured scientific record. Translating that record requires more than accurate medical terminology. Relationships established throughout the study must remain clear across languages.</p>
            <p>Sesen provides specialized clinical study report translation services designed to preserve these relationships from study methodology and patient populations through statistical analyses, efficacy findings, safety evaluations, patient narratives, tables, figures, and supporting appendices.</p>
            <p>Whether you are translating a complete CSR for international regulatory use, selected sections for regional requirements, or updated content for an ongoing development program, we help maintain scientific meaning and terminology across the full report.</p>
            <div className="csr-link-row">
              <ArrowLink href="https://www.sesen.com/clinical-trial-translation-services/">Clinical Trial Translation Services</ArrowLink>
              <ArrowLink href="https://www.sesen.com/clinical-study-translation-services/">Clinical Study Documentation Translation Services</ArrowLink>
            </div>
          </div>
        </div>
        <div className="csr-shell csr-evidence-band">
          {[ ["Study Design","Objectives, endpoints, populations & procedures","file"], ["Study Conduct","Patient disposition, exposure & execution","people"], ["Statistical Analysis","Methods, endpoints & analytical results","chart"], ["Efficacy","Outcome results & treatment comparisons","arrows"], ["Safety","Adverse events & safety evaluation","heart"], ["Supporting Evidence","Narratives, TLFs, references & appendices","layers"] ].map(([t,n,i]) => (
            <div className="csr-evidence-item" key={t}><Icon name={i}/><strong>{t}</strong><span>{n}</span></div>
          ))}
        </div>
      </section>

      <section className="csr-section csr-soft">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable">
            <h2>Translation Across Every Layer of the Clinical Study Report</h2>
            <p>Clinical Study Reports contain scientific and technical content from multiple disciplines. Sesen brings these content types into a coordinated translation workflow so terminology, numbers, references, and scientific relationships remain consistent across the report.</p>
          </div>
          <div className="csr-layer-list">
            {layers.map((layer) => (
              <article className="csr-layer-row" key={layer.title}>
                <div className="csr-layer-icon" aria-hidden="true"><Icon name={layer.icon} /></div>
                <div className="csr-layer-main">
                  <h3>{layer.title}</h3>
                  <p>{layer.intro}</p>
                </div>
                <ul>
                  {layer.items.map(item => <li key={item}><span className="csr-dot"></span>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell csr-ich-grid">
          <div className="csr-ich-intro">
            <h2>Clinical Study Report Translation Aligned With ICH E3 Structure</h2>
            <p>ICH E3 provides a harmonized framework for the structure and content of Clinical Study Reports. A report prepared around that framework connects study administration and methodology with efficacy, safety, statistical analysis, supporting tables, and appendices.</p>
            <p>Sesen supports multilingual CSRs while preserving the organization and relationships established within the source report.</p>
            <div className="csr-callout"><Icon name="shield"/><p><strong>Our role is to preserve the source.</strong> Sesen does not change the scientific structure or conclusions of the CSR; we carry them accurately and consistently into each required language.</p></div>
          </div>
          <div className="csr-ich-stack" role="group" aria-label="ICH E3 clinical study report content structure">
            {ich.map(([title, text], index) => (
              <div className="csr-ich-row" key={title}>
                <span>{String(index + 1).padStart(2,"0")}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-section csr-deep">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable csr-on-dark">
            <h2>Keep the CSR Aligned With the Rest of the Clinical Documentation Set</h2>
            <p>A Clinical Study Report is written at the end of a long chain of clinical documentation. Its terminology, endpoints, treatment descriptions, statistical concepts, and safety language frequently originate in documents created much earlier in the study.</p>
          </div>
          <div className="csr-doc-chain">
            {[
              ["Protocol & Amendments", "Study design, objectives, endpoints, procedures"],
              ["Statistical Analysis Plan", "Analysis definitions, methodologies, populations, endpoints"],
              ["CRFs & Clinical Data", "Structured study observations and patient data"],
              ["Safety Documentation", "Adverse events, exposure, and patient-level findings"],
              ["Clinical Study Report", "Integrated study methodology, efficacy, safety, and conclusions"],
            ].map(([title, note], i) => (
              <React.Fragment key={title}>
                <div className={`csr-doc-node ${i === 4 ? "is-final" : ""}`}>
                  <strong>{title}</strong><span>{note}</span>
                </div>
                {i < 4 && <div className="csr-chain-arrow"><Icon name="arrow" size={20}/></div>}
              </React.Fragment>
            ))}
          </div>
          <div className="csr-dark-copy">
            <p>Sesen uses project-specific glossaries, translation memory, approved reference translations, sponsor terminology, and cross-document quality checks to help keep multilingual study content aligned. Existing approved translations can be incorporated into the CSR workflow to reduce unnecessary terminology variation and improve continuity across the study.</p>
            <div className="csr-dark-links">
              <ArrowLink href="https://www.sesen.com/protocol-translation-services/">Protocol Translation Services</ArrowLink>
              <ArrowLink href="https://www.sesen.com/clinical-trial-translation-services/crf-translations/">Case Report Form Translation Services</ArrowLink>
              <ArrowLink href="https://www.sesen.com/investigators-brochure-translation-services/">Investigator Brochure Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell csr-data-grid">
          <div className="csr-data-visual" aria-hidden="true">
            <div className="csr-report-mini">
              <div className="csr-mini-head"><span></span><span></span></div>
              <div className="csr-mini-chart"><i></i><i></i><i></i><i></i></div>
              <div className="csr-mini-table">
                {Array.from({length: 12}).map((_,i)=><span key={i}></span>)}
              </div>
              <div className="csr-qa-tag tag-a">Numbers</div>
              <div className="csr-qa-tag tag-b">Treatment Groups</div>
              <div className="csr-qa-tag tag-c">Cross-References</div>
            </div>
          </div>
          <div className="csr-data-copy">
            <h2>Protect the Integrity of Statistical Content, Tables, Listings, and Figures</h2>
            <p>In a Clinical Study Report, a linguistically correct sentence can still create risk if a number, unit, treatment group, table reference, or statistical qualifier no longer matches the source. That is why CSR quality control must look beyond prose.</p>
            <div className="csr-data-list">
              {[
                ["Numerical & Statistical Content", "Numbers, percentages, decimal values, units, sample sizes, denominators, treatment identifiers, dose values, time points, p-values, confidence intervals, statistical symbols, and endpoint labels."],
                ["Tables & Listings", "Row and column relationships, headers, patient or population labels, footnotes, abbreviations, treatment arms, repeated terminology, and numerical alignment."],
                ["Figures & Graphs", "Figure titles, axis labels, legends, captions, annotations, cross-references, and supporting explanatory text."],
                ["Cross-Reference Integrity", "Table numbers, figure numbers, section numbers, appendix references, repeated headings, and internal document references."],
              ].map(([t,n]) => <div key={t}><h3>{t}</h3><p>{n}</p></div>)}
            </div>
            <p className="csr-note">Sesen does not recalculate clinical statistics or reinterpret study data as part of translation. We focus on preserving the information and relationships contained in the approved source.</p>
          </div>
        </div>
      </section>

      <section className="csr-section csr-soft">
        <div className="csr-shell csr-narrative-grid">
          <div className="csr-narrative-copy">
            <h2>Translate Patient Narratives and Safety Findings With Clinical Precision</h2>
            <p>Patient narratives can be among the most clinically sensitive content in a Clinical Study Report. A single narrative may combine a participant's medical history, study treatment, adverse events, concomitant medications, diagnostic information, laboratory findings, chronology, intervention, and eventual outcome.</p>
            <p>Clinical meaning often depends on <strong>when</strong> something happened, <strong>what treatment preceded it</strong>, <strong>how the event evolved</strong>, and <strong>what action followed</strong>. Our reviewers assess translated narratives in context so that temporal relationships, causality language, treatment references, and medical terminology remain faithful to the source.</p>
            <ArrowLink href="https://www.sesen.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services</ArrowLink>
          </div>
          <div className="csr-narrative-panel">
            <div className="csr-timeline-line"></div>
            {[
              ["Medical History", "Relevant baseline conditions and prior therapies"],
              ["Study Treatment", "Dose, exposure, and treatment timing"],
              ["Clinical Event", "AE/SAE, symptoms, laboratory or diagnostic findings"],
              ["Intervention", "Treatment interruption, concomitant therapy, or other action"],
              ["Outcome", "Resolution, ongoing event, withdrawal, or other documented result"],
            ].map(([t,n],i)=><div className="csr-narrative-step" key={t}><span>{i+1}</span><div><strong>{t}</strong><p>{n}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable">
            <div className="csr-eyebrow">CLINICAL TO REGULATORY CONTINUITY</div>
            <h2>Carry Clinical Evidence From the Study Report Into the Regulatory Submission</h2>
            <p>A completed CSR may become part of a wider regulatory content ecosystem in which clinical evidence is summarized, referenced, reviewed, and reused across submission materials. Maintaining language consistently across those materials can help global regulatory teams manage complex multilingual dossiers more efficiently.</p>
          </div>
          <FlowGraphic />
          <div className="csr-reg-copy">
            <p>The Common Technical Document organizes clinical study reports and related information within <strong>Module 5</strong>, creating an important connection between study-level reporting and the broader regulatory dossier. When translations are required for a particular market, submission, review process, or global program, Sesen can coordinate CSR terminology with related clinical and regulatory content.</p>
            <div className="csr-reg-links">
              <ArrowLink href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services</ArrowLink>
              <ArrowLink href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation Services</ArrowLink>
              <ArrowLink href="https://www.sesen.com/ctd-ectd-translation-services/">CTD/eCTD Translation Services</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <section className="csr-section csr-soft csr-workflow-section">
        <div className="csr-shell">
          <div className="csr-section-head csr-technical">
            <h2>A Controlled Workflow for Complex Clinical Study Reports</h2>
            <p>Large CSRs may contain hundreds of pages of interconnected scientific content, embedded tables, figures, appendices, repeated terminology, and extensive internal references. Sesen uses a controlled workflow designed around the actual complexity of the report.</p>
          </div>
          <div className="csr-workflow">
            {workflow.map(([title, text], index) => (
              <div className="csr-work-step" key={title}>
                <div className="csr-work-marker"><span>{String(index + 1).padStart(2,"0")}</span></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell csr-ai-grid">
          <div className="csr-ai-copy">
            <h2>AI-Assisted Quality Checks With Expert Human Review</h2>
            <p>Clinical Study Reports are particularly well suited to targeted technology-assisted QA because the content contains large volumes of repeated terminology, numbers, cross-references, abbreviations, structured data, and related scientific concepts.</p>
            <p>Sesen uses SesenGPT and automated quality tools selectively to help reviewers identify potential inconsistencies more efficiently, while qualified human experts remain responsible for translation, clinical context, and final language decisions.</p>
            <div className="csr-ai-principle"><Icon name="spark"/><p><strong>AI helps identify potential risk.</strong> Clinical language experts decide how that risk should be resolved.</p></div>
          </div>
          <div className="csr-ai-matrix">
            {[
              ["Terminology", "Differences in repeated clinical, statistical, safety, or product terminology."],
              ["Numbers & Units", "Potential source-target discrepancies involving numerical content."],
              ["Completeness", "Possible omitted or inconsistent content requiring reviewer attention."],
              ["Cross-References", "Tables, figures, sections, and related internal references."],
              ["Abbreviations", "Inconsistent use or expansion of specialized abbreviations."],
              ["Repeated Content", "Variations where equivalent source language appears multiple times."],
              ["Formatting", "Potential structural anomalies in complex multilingual documents."],
              ["Human Review", "Context, ambiguity, terminology decisions, scientific meaning, and final approval."],
            ].map(([t,n],i)=><div className={`csr-ai-cell ${i===7 ? "human" : ""}`} key={t}><span>{i===7 ? <Icon name="people"/> : <Icon name="check"/>}</span><div><h3>{t}</h3><p>{n}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="csr-section csr-soft">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable">
            <h2>Manage Large Reports, Updates, and Multilingual CSR Programs With Control</h2>
            <p>CSR translation can quickly become a content-management challenge when reports are large, multiple languages move in parallel, appendices are extensive, or sections change during review. Sesen supports both individual reports and broader multilingual programs.</p>
          </div>
          <div className="csr-program-grid">
            {[
              ["Complete CSR Translation", "Coordinate the complete report—including narrative content, tables, figures, and selected appendices—within a unified terminology and quality framework."],
              ["Partial CSR Translation", "Translate specific sections, narratives, appendices, or supporting content when the project does not require a complete translated report."],
              ["CSR Updates", "Use translation memory and controlled terminology to manage revised report content while maintaining consistency with previously approved translations."],
              ["Multilingual Programs", "Coordinate multiple target languages through centralized project management, terminology governance, and common quality requirements."],
              ["Sponsor & In-Country Review", "Manage reviewer comments, approved terminology changes, feedback consolidation, and subsequent updates across languages."],
              ["Rolling Delivery", "Structure large assignments into controlled delivery phases when project requirements and source readiness make phased delivery appropriate."],
            ].map(([t,n])=><div className="csr-program-item" key={t}><div className="csr-program-icon"><Icon name="check"/></div><div><h3>{t}</h3><p>{n}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable">
            <h2>Built for Sponsors, CROs, and Global Study Teams</h2>
          </div>
          <div className="csr-audience-grid">
            {[
              ["Pharmaceutical & Biotechnology Sponsors", "Support global clinical development programs with controlled translation of study reports, related documentation, and multilingual updates across markets.", "dna"],
              ["Contract Research Organizations", "Scale CSR translation across sponsor programs, therapeutic areas, languages, and timelines while maintaining project-specific terminology and quality requirements.", "globe"],
              ["Clinical Development & Medical Writing Teams", "Preserve the terminology and scientific relationships established during study design, analysis, and report development.", "file"],
              ["Regulatory Affairs Teams", "Coordinate translated CSR content with the broader regulatory documentation needed for international submissions and review.", "building"],
              ["Biostatistics & Data-Facing Teams", "Maintain the presentation of statistical terminology, treatment populations, numerical findings, and supporting tables without altering the underlying analysis.", "chart"],
            ].map(([t,n,i])=><div className="csr-audience-item" key={t}><div><Icon name={i}/></div><h3>{t}</h3><p>{n}</p></div>)}
          </div>
        </div>
      </section>

      <section className="csr-section csr-deep csr-expertise">
        <div className="csr-shell csr-expertise-grid">
          <div>
            <h2>Clinical Translation Expertise Across Therapeutic Areas</h2>
            <p>Clinical Study Reports require translators to understand the scientific context behind the terminology they translate. For each project, linguist and reviewer selection can reflect the therapeutic area, clinical content, language pair, and complexity of the report.</p>
            <p>This subject-matter alignment is especially important where the same term may carry different implications depending on disease area, treatment modality, endpoint definition, or clinical context.</p>
          </div>
          <div className="csr-therapy-list">
            {["Oncology","Hematology","Neurology & CNS","Cardiovascular Disease","Immunology","Infectious Diseases","Endocrinology & Metabolic Disease","Respiratory Disease","Rare Diseases","Other Specialized Clinical Programs"].map(item=><span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell csr-language-grid">
          <div className="csr-language-stat">
            <span>150+</span>
            <strong>Languages</strong>
            <p>for global clinical and regulatory programs</p>
          </div>
          <div className="csr-language-copy">
            <div className="csr-eyebrow">GLOBAL DELIVERY</div>
            <h2>Clinical Study Report Translation in 150+ Languages</h2>
            <p>Global clinical development requires more than broad language coverage. It requires consistent scientific communication when the same report moves across languages, markets, reviewers, and regulatory workflows.</p>
            <p>Sesen supports Clinical Study Report translation across 150+ languages through centralized multilingual project management and life sciences-focused linguistic resources.</p>
            <ul className="csr-two-col-list">
              {["Study-specific terminology across languages","Consistent product and endpoint terminology","Appropriate regional language variants","Centralized translation memory","Coordinated project schedules","Standardized review requirements","Cross-language QA","Controlled reviewer feedback"].map(i=><li key={i}><Icon name="check" size={18}/>{i}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="csr-section csr-soft csr-related">
        <div className="csr-shell">
          <div className="csr-section-head csr-technical">
            <div className="csr-eyebrow">RELATED CLINICAL &amp; REGULATORY SERVICES</div>
            <h2>Connect CSR Translation With the Complete Clinical Documentation Workflow</h2>
            <p>Clinical Study Report translation is strongest when terminology and approved language remain connected to the documents and workflows surrounding the report.</p>
          </div>
          <div className="csr-service-list">
            {services.map(([title,text,url]) => (
              <a className="csr-service-row" href={url} key={title}>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="csr-service-arrow"><Icon name="arrow"/></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="csr-section">
        <div className="csr-shell">
          <div className="csr-section-head csr-centerable">
            <h2>Why Life Sciences Teams Choose Sesen for CSR Translation</h2>
            <p>Clinical Study Reports sit at the intersection of clinical operations, medical writing, biostatistics, safety, and regulatory affairs. Sesen brings the language, process, and technology capabilities needed to manage that complexity in a coordinated workflow.</p>
          </div>
          <div className="csr-why-grid">
            {[
              ["Life Sciences Specialization", "Translation and localization for regulated clinical, regulatory, labeling, medical device, healthcare, and scientific environments.", "dna"],
              ["Professional Native Life Sciences Linguists", "Qualified native-language linguists with relevant experience in clinical, medical, scientific, and regulatory content.", "people"],
              ["Terminology Governance", "Glossaries, translation memory, sponsor terminology, approved references, and reviewer feedback to keep language consistent.", "link"],
              ["Human-Reviewed Quality", "Structured translation and independent review provide human accountability for complex clinical content.", "check"],
              ["AI-Assisted Quality Validation", "Technology-assisted checks help surface potential terminology, number, completeness, reference, and structured-content issues for review.", "spark"],
              ["ISO-Certified Processes", "Quality processes certified to ISO 17100, ISO 9001:2015, and ISO 13485:2016.", "shield"],
              ["Secure Infrastructure", "AWS-hosted infrastructure and controlled workflows support secure management of sensitive life sciences content.", "cloud"],
              ["Global Language Coverage", "Support across 150+ languages, from individual-market projects to coordinated multilingual programs.", "globe"],
            ].map(([t,n,i])=><div className="csr-why-item" key={t}><div className="csr-why-icon"><Icon name={i}/></div><div><h3>{t}</h3><p>{n}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="csr-section csr-soft csr-faq-section">
        <div className="csr-shell csr-faq-grid">
          <div className="csr-faq-intro">
            <h2>Clinical Study Report Translation FAQs</h2>
            <p>Find answers to common questions about scope, ICH E3 structure, statistical content, cross-document consistency, regulatory use, scale, and AI-assisted workflows.</p>
            <a className="csr-btn csr-btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
          </div>
          <div className="csr-faq-list">
            {faq.map(([q,a],i) => {
              const open = openFaq === i;
              return (
                <div className={`csr-faq-item ${open ? "is-open" : ""}`} key={q}>
                  <button
                    type="button"
                    id={`csr-faq-question-${i}`}
                    className="csr-faq-question"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    aria-expanded={open}
                    aria-controls={`csr-faq-answer-${i}`}
                  >
                    <span>{q}</span><span className="csr-faq-toggle"><Icon name={open ? "minus" : "plus"} size={18}/></span>
                  </button>
                  {open && (
                    <div
                      id={`csr-faq-answer-${i}`}
                      className="csr-faq-answer"
                      role="region"
                      aria-labelledby={`csr-faq-question-${i}`}
                    ><p>{a}</p></div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="csr-final-wrap">
        <div className="csr-shell">
          <div className="csr-final-cta">
            <div>
              <h2>Translate Your Clinical Study Report With Scientific and Regulatory Confidence</h2>
              <p>Clinical Study Reports bring together some of the most complex content generated during clinical development—from study design and statistical analysis to efficacy, safety, patient narratives, tables, figures, and supporting evidence. Sesen helps global life sciences teams carry that information accurately across languages with specialized clinical linguists, controlled terminology, human review, and technology-assisted quality checks.</p>
              <p>Send us your CSR, target languages, timeline, and available reference materials. Team Sesen will review the scope and recommend a translation workflow aligned with your clinical, regulatory, and delivery requirements.</p>
            </div>
            <div className="csr-final-actions">
              <a className="csr-btn csr-btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <a className="csr-btn csr-btn-light" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const styles = `
.${PAGE} {
  --csr-blue: #4B6FD8;
  --csr-blue-dark: #3659BB;
  --csr-deep-blue: #253F8F;
  --csr-navy: #17264D;
  --csr-ink: #111827;
  --csr-body: #46546D;
  --csr-muted: #68758B;
  --csr-border: #DDE4F2;
  --csr-divider: #E9EEF8;
  --csr-soft-blue: #EAF0FF;
  --csr-pale-blue: #F5F7FF;
  --csr-soft: #F7F9FD;
  --csr-white: #FFFFFF;
  --csr-light-blue: #C8D6FF;
  color: var(--csr-body);
  background: var(--csr-white);
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow-x: clip;
}
.${PAGE} *, .${PAGE} *::before, .${PAGE} *::after { box-sizing: border-box; }
.${PAGE} a { color: inherit; }
.${PAGE} img, .${PAGE} svg { max-width: 100%; }
.${PAGE} h1, .${PAGE} h2, .${PAGE} h3 { margin: 0; font-family: "Inter Tight", Inter, Arial, sans-serif; color: var(--csr-navy); font-weight: 500; }
.${PAGE} h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
.${PAGE} h2 { font-size: 36px; line-height: 1.3; letter-spacing: normal; }
.${PAGE} h3 { font-size: 22px; line-height: 1.3; }
.${PAGE} p { margin: 0; }
.${PAGE} ul { margin: 0; padding: 0; list-style: none; }
.${PAGE} button, .${PAGE} a { -webkit-tap-highlight-color: transparent; }
.${PAGE} button:focus-visible, .${PAGE} a:focus-visible { outline: 3px solid rgba(75,111,216,.36); outline-offset: 3px; }

.${PAGE} .csr-shell { width: min(100%, 1280px); margin: 0 auto; padding-left: 56px; padding-right: 56px; min-width: 0; }
.${PAGE} .csr-section { padding: 96px 0; }
.${PAGE} .csr-soft { background: var(--csr-soft); }
.${PAGE} .csr-deep { background: var(--csr-navy); color: #E4EAF7; }
.${PAGE} .csr-deep h2, .${PAGE} .csr-deep h3, .${PAGE} .csr-deep strong { color: var(--csr-white); }
.${PAGE} .csr-deep .csr-eyebrow { color: var(--csr-light-blue); }
.${PAGE} .csr-eyebrow { color: var(--csr-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .15em; line-height: 1.4; text-transform: uppercase; margin-bottom: 18px; }
.${PAGE} .csr-section-head { max-width: 820px; margin-bottom: 48px; }
.${PAGE} .csr-section-head h2 { margin-bottom: 20px; }
.${PAGE} .csr-section-head > p { font-size: 18px; line-height: 1.7; max-width: 800px; }
.${PAGE} .csr-section-head.csr-centerable { margin-left: auto; margin-right: auto; text-align: center; }
.${PAGE} .csr-on-dark > p { color: #CDD7EC; }

.${PAGE} .csr-hero { padding: 96px 0 92px; background: #FFFFFF; position: relative; }
.${PAGE} .csr-hero-grid { display: grid; grid-template-columns: minmax(0, 1.08fr) minmax(410px, .92fr); gap: 56px; align-items: center; }
.${PAGE} .csr-hero-copy { min-width: 0; max-width: 700px; }
.${PAGE} .csr-hero-copy h1 { margin-bottom: 24px; max-width: 690px; }
.${PAGE} .csr-hero-lead { font-size: 20px; line-height: 1.6; color: #293954; margin-bottom: 16px; }
.${PAGE} .csr-hero-support { font-size: 17px; line-height: 1.7; margin-bottom: 12px; }
.${PAGE} .csr-actions { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 30px; }
.${PAGE} .csr-btn { min-height: 50px; display: inline-flex; max-width:100%; align-items: center; justify-content: center; border-radius: 999px; padding: 0 26px; font-size: 13px; line-height: 1; font-weight: 700; letter-spacing: .035em; text-decoration: none; transition: background-color .2s ease, border-color .2s ease, transform .2s ease; }
.${PAGE} .csr-btn:hover { transform: translateY(-1px); }
.${PAGE} .csr-btn-primary { background: var(--csr-blue); color: #FFFFFF; border: 1px solid var(--csr-blue); }
.${PAGE} .csr-btn-primary:hover { background: var(--csr-blue-dark); border-color: var(--csr-blue-dark); }
.${PAGE} .csr-btn-secondary { background: #FFFFFF; color: var(--csr-ink); border: 1px solid #C8D2E4; }
.${PAGE} .csr-btn-secondary:hover { background: var(--csr-pale-blue); border-color: #AEBBD2; }
.${PAGE} .csr-hero-visual { min-width: 0; display: flex; justify-content: center; }
.${PAGE} .csr-hero-art { width: 100%; max-width: 520px; height: auto; display: block; }

.${PAGE} .csr-trust { border-top: 1px solid var(--csr-divider); border-bottom: 1px solid var(--csr-divider); background: #FFFFFF; }
.${PAGE} .csr-trust-grid { display: grid; grid-template-columns: repeat(6, minmax(0,1fr)); }
.${PAGE} .csr-trust-item { min-width: 0; display: flex; gap: 11px; align-items: center; padding: 24px 10px; }
.${PAGE} .csr-trust-item:first-child { padding-left: 0; }
.${PAGE} .csr-trust-icon { width: 34px; height: 34px; border-radius: 12px; background: var(--csr-pale-blue); color: var(--csr-blue-dark); display: grid; place-items: center; flex: 0 0 auto; }
.${PAGE} .csr-trust-item strong { display: block; color: var(--csr-navy); font-size: 14px; line-height: 1.3; margin-bottom: 4px; }
.${PAGE} .csr-trust-item span { display: block; color: var(--csr-muted); font-size: 13px; line-height: 1.4; }

.${PAGE} .csr-split-wide { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 90px; align-items: start; }
.${PAGE} .csr-split-wide h2 { max-width: 520px; }
.${PAGE} .csr-rich-copy { max-width: 760px; min-width: 0; }
.${PAGE} .csr-rich-copy p { font-size: 17px; margin-bottom: 16px; }
.${PAGE} .csr-link-row { display: flex; gap: 26px; flex-wrap: wrap; margin-top: 28px; }
.${PAGE} .csr-editorial-link { display: inline-flex; align-items: center; gap: 8px; color: var(--csr-blue-dark); font-size: 16px; font-weight: 700; line-height: 1.35; text-decoration: none; overflow-wrap: anywhere; }
.${PAGE} .csr-editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
.${PAGE} .csr-editorial-link svg { flex: 0 0 auto; transition: transform .2s ease; }
.${PAGE} .csr-editorial-link:hover svg { transform: translateX(2px); }
.${PAGE} .csr-evidence-band { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); margin-top: 62px; padding-top: 34px; border-top: 1px solid var(--csr-divider); }
.${PAGE} .csr-evidence-item { min-width: 0; padding: 0 18px; border-right: 1px solid var(--csr-divider); }
.${PAGE} .csr-evidence-item:first-child { padding-left: 0; }
.${PAGE} .csr-evidence-item:last-child { border-right: 0; padding-right: 0; }
.${PAGE} .csr-evidence-item > svg { color: var(--csr-blue-dark); margin-bottom: 14px; }
.${PAGE} .csr-evidence-item strong { display: block; color: var(--csr-navy); font-size: 16px; line-height: 1.35; margin-bottom: 7px; }
.${PAGE} .csr-evidence-item span { display: block; color: var(--csr-muted); font-size: 16px; line-height: 1.5; }

.${PAGE} .csr-layer-list { border-top: 1px solid var(--csr-border); }
.${PAGE} .csr-layer-row { display: grid; grid-template-columns: 56px minmax(250px,.7fr) minmax(0,1.3fr); gap: 34px; padding: 38px 0; border-bottom: 1px solid var(--csr-border); align-items: start; }
.${PAGE} .csr-layer-icon { width: 42px; height: 42px; border-radius: 14px; background: var(--csr-pale-blue); color: var(--csr-blue-dark); display: grid; place-items: center; }
.${PAGE} .csr-layer-main h3 { margin-bottom: 10px; }
.${PAGE} .csr-layer-main p { font-size: 16px; }
.${PAGE} .csr-layer-row ul { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px 22px; min-width: 0; }
.${PAGE} .csr-layer-row li { min-width: 0; display: flex; gap: 9px; font-size: 16px; line-height: 1.5; color: var(--csr-body); }
.${PAGE} .csr-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--csr-blue); flex: 0 0 6px; margin-top: .56em; }

.${PAGE} .csr-ich-grid { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 86px; align-items: start; }
.${PAGE} .csr-ich-intro { position: sticky; top: 24px; min-width: 0; }
.${PAGE} .csr-ich-intro h2 { margin-bottom: 20px; }
.${PAGE} .csr-ich-intro > p { font-size: 17px; margin-bottom: 16px; }
.${PAGE} .csr-callout { margin-top: 32px; padding: 22px 24px; border: 1px solid var(--csr-border); border-radius: 20px; background: var(--csr-pale-blue); display: flex; gap: 14px; }
.${PAGE} .csr-callout svg { color: var(--csr-blue-dark); flex: 0 0 auto; margin-top: 2px; }
.${PAGE} .csr-callout p { font-size: 16px; }
.${PAGE} .csr-ich-stack { border-top: 1px solid var(--csr-border); }
.${PAGE} .csr-ich-row { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 22px; padding: 24px 0; border-bottom: 1px solid var(--csr-border); }
.${PAGE} .csr-ich-row > span { width: 36px; height: 36px; border-radius: 50%; background: var(--csr-pale-blue); color: var(--csr-blue-dark); display: grid; place-items: center; font-size: 11px; font-weight: 700; }
.${PAGE} .csr-ich-row h3 { font-size: 19px; margin-bottom: 6px; }
.${PAGE} .csr-ich-row p { font-size: 16px; }

.${PAGE} .csr-doc-chain { display:grid; grid-template-columns:minmax(0,1fr) 24px minmax(0,1fr) 24px minmax(0,1fr) 24px minmax(0,1fr) 24px minmax(0,1fr); gap:8px; align-items:stretch; margin-top:50px; }
.${PAGE} .csr-doc-node { min-width: 0; padding: 24px 20px; border: 1px solid rgba(200,214,255,.23); border-radius: 18px; background: rgba(255,255,255,.055); }
.${PAGE} .csr-doc-node strong { display: block; font-size: 16px; margin-bottom: 6px; }
.${PAGE} .csr-doc-node span { display: block; color: #B9C6DE; font-size: 16px; line-height: 1.5; }
.${PAGE} .csr-doc-node.is-final { background: var(--csr-blue); border-color: var(--csr-blue); }
.${PAGE} .csr-doc-node.is-final span { color: #EDF2FF; }
.${PAGE} .csr-chain-arrow { color:var(--csr-light-blue); display:grid; place-items:center; padding:0; }
.${PAGE} .csr-dark-copy { max-width: 930px; margin: 38px auto 0; text-align: center; }
.${PAGE} .csr-dark-copy > p { color: #CDD7EC; font-size: 16px; }
.${PAGE} .csr-dark-links { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 24px; }
.${PAGE} .csr-deep .csr-editorial-link { color: var(--csr-light-blue); }

.${PAGE} .csr-data-grid { display: grid; grid-template-columns: minmax(360px,.8fr) minmax(0,1.2fr); gap: 80px; align-items: center; }
.${PAGE} .csr-data-visual { min-width: 0; display: flex; justify-content: center; }
.${PAGE} .csr-report-mini { width: min(100%, 450px); min-height: 520px; border: 1px solid var(--csr-border); border-radius: 28px; background: #FFFFFF; box-shadow: 0 20px 50px rgba(23,38,77,.07); padding: 44px 38px; position: relative; }
.${PAGE} .csr-mini-head { display: grid; gap: 12px; margin-bottom: 34px; }
.${PAGE} .csr-mini-head span { display: block; height: 9px; border-radius: 999px; background: #C8D2E4; width: 72%; }
.${PAGE} .csr-mini-head span:last-child { width: 45%; background: #E0E7F3; }
.${PAGE} .csr-mini-chart { height: 130px; border-left: 1px solid #AEBBD2; border-bottom: 1px solid #AEBBD2; display: flex; align-items: flex-end; gap: 22px; padding: 0 20px 0 28px; }
.${PAGE} .csr-mini-chart i { width: 44px; border-radius: 8px 8px 0 0; background: #D8E1F7; display: block; }
.${PAGE} .csr-mini-chart i:nth-child(1){height:42%;} .${PAGE} .csr-mini-chart i:nth-child(2){height:70%;background:#9FB2EB;} .${PAGE} .csr-mini-chart i:nth-child(3){height:54%;} .${PAGE} .csr-mini-chart i:nth-child(4){height:82%;background:var(--csr-blue);}
.${PAGE} .csr-mini-table { display: grid; grid-template-columns: repeat(3,1fr); margin-top: 38px; border: 1px solid #CFD8E7; }
.${PAGE} .csr-mini-table span { height: 38px; border-right: 1px solid #CFD8E7; border-bottom: 1px solid #CFD8E7; }
.${PAGE} .csr-mini-table span:nth-child(3n){border-right:0;} .${PAGE} .csr-mini-table span:nth-last-child(-n+3){border-bottom:0;}
.${PAGE} .csr-qa-tag { position: absolute; border-radius: 999px; background: var(--csr-navy); color: #FFFFFF; padding: 9px 14px; font-size: 11px; font-weight: 700; box-shadow: 0 10px 24px rgba(23,38,77,.14); }
.${PAGE} .tag-a { top: 128px; right: -28px; } .${PAGE} .tag-b { top: 265px; left: -35px; } .${PAGE} .tag-c { bottom: 60px; right: -38px; }
.${PAGE} .csr-data-copy h2 { margin-bottom: 20px; }
.${PAGE} .csr-data-copy > p { font-size: 17px; margin-bottom: 22px; }
.${PAGE} .csr-data-list { border-top: 1px solid var(--csr-border); }
.${PAGE} .csr-data-list > div { padding: 20px 0; border-bottom: 1px solid var(--csr-border); display: grid; grid-template-columns: minmax(190px,.7fr) minmax(0,1.3fr); gap: 26px; }
.${PAGE} .csr-data-list h3 { font-size: 18px; }
.${PAGE} .csr-data-list p { font-size: 16px; }
.${PAGE} .csr-note { margin-top: 24px; padding-left: 18px; border-left: 2px solid var(--csr-blue); color: #3C4B66; font-size: 16px !important; }

.${PAGE} .csr-narrative-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(360px,.8fr); gap: 88px; align-items: center; }
.${PAGE} .csr-narrative-copy h2 { margin-bottom: 20px; }
.${PAGE} .csr-narrative-copy > p { font-size: 17px; margin-bottom: 17px; }
.${PAGE} .csr-narrative-copy .csr-editorial-link { margin-top: 10px; }
.${PAGE} .csr-narrative-panel { position: relative; min-width: 0; padding: 24px 0 24px 40px; }
.${PAGE} .csr-timeline-line { position: absolute; left: 55px; top: 44px; bottom: 44px; width: 1px; background: #B7C5DD; }
.${PAGE} .csr-narrative-step { position: relative; display: grid; grid-template-columns: 32px minmax(0,1fr); gap: 22px; margin-bottom: 26px; }
.${PAGE} .csr-narrative-step:last-child { margin-bottom: 0; }
.${PAGE} .csr-narrative-step > span { width: 32px; height: 32px; border-radius: 50%; background: var(--csr-blue); color: #FFFFFF; display: grid; place-items: center; font-size: 11px; font-weight: 700; z-index: 1; }
.${PAGE} .csr-narrative-step strong { display: block; color: var(--csr-navy); margin-bottom: 4px; }
.${PAGE} .csr-narrative-step p { font-size: 16px; color: var(--csr-muted); }

.${PAGE} .csr-flow { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:34px; align-items:stretch; margin:56px 0 38px; }
.${PAGE} .csr-flow-item { min-width:0; height:100%; padding:22px 18px; border:1px solid var(--csr-border); border-radius:18px; background:#FFFFFF; position:relative; }
.${PAGE} .csr-flow-item.is-featured { background:var(--csr-pale-blue); border-color:#B9C8EF; }
.${PAGE} .csr-flow-icon { color:var(--csr-blue-dark); margin-bottom:12px; }
.${PAGE} .csr-flow-item strong { display:block; color:var(--csr-navy); font-size:16px; line-height:1.35; margin-bottom:6px; }
.${PAGE} .csr-flow-item span { display:block; color:var(--csr-muted); font-size:16px; line-height:1.5; }
.${PAGE} .csr-flow-arrow { position:absolute; top:50%; right:-29px; transform:translateY(-50%); width:24px; height:24px; display:grid; place-items:center; color:#9AABC9; }
.${PAGE} .csr-reg-copy { max-width: 950px; margin: 0 auto; text-align: center; }
.${PAGE} .csr-reg-copy > p { font-size: 16px; }
.${PAGE} .csr-reg-links { display: flex; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 22px; }

.${PAGE} .csr-workflow-section .csr-section-head { margin-bottom: 54px; }
.${PAGE} .csr-workflow { position: relative; max-width: 1010px; margin: 0 auto; }
.${PAGE} .csr-workflow::before { content:""; position:absolute; left:31px; top:31px; bottom:31px; width:1px; background:#B9C8E2; }
.${PAGE} .csr-work-step { position: relative; display: grid; grid-template-columns: 64px minmax(0,1fr); gap: 28px; padding: 0 0 34px; }
.${PAGE} .csr-work-step:last-child { padding-bottom: 0; }
.${PAGE} .csr-work-marker { z-index:1; }
.${PAGE} .csr-work-marker span { width: 62px; height: 62px; border-radius: 50%; background: #FFFFFF; border: 1px solid #B9C8E2; color: var(--csr-blue-dark); display:grid; place-items:center; font-size:12px; font-weight:700; box-shadow:0 7px 20px rgba(23,38,77,.05); }
.${PAGE} .csr-work-step > div:last-child { padding-top: 8px; min-width:0; }
.${PAGE} .csr-work-step h3 { margin-bottom: 8px; }
.${PAGE} .csr-work-step p { font-size: 16px; max-width: 850px; }

.${PAGE} .csr-ai-grid { display: grid; grid-template-columns: minmax(0,.75fr) minmax(0,1.25fr); gap: 80px; align-items: start; }
.${PAGE} .csr-ai-copy h2 { margin-bottom: 20px; }
.${PAGE} .csr-ai-copy > p { font-size: 17px; margin-bottom: 16px; }
.${PAGE} .csr-ai-principle { margin-top: 30px; padding: 20px 22px; border: 1px solid var(--csr-border); background: var(--csr-pale-blue); border-radius: 20px; display:flex; gap:14px; }
.${PAGE} .csr-ai-principle svg { color:var(--csr-blue-dark); flex:0 0 auto; }
.${PAGE} .csr-ai-principle p { font-size:16px; }
.${PAGE} .csr-ai-matrix { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border-top:1px solid var(--csr-border); border-left:1px solid var(--csr-border); }
.${PAGE} .csr-ai-cell { min-width:0; padding:22px; border-right:1px solid var(--csr-border); border-bottom:1px solid var(--csr-border); display:flex; gap:13px; }
.${PAGE} .csr-ai-cell > span { width:34px; height:34px; border-radius:12px; background:var(--csr-pale-blue); color:var(--csr-blue-dark); display:grid; place-items:center; flex:0 0 auto; }
.${PAGE} .csr-ai-cell.human { background:#F4F7FF; }
.${PAGE} .csr-ai-cell h3 { font-size:17px; margin-bottom:5px; }
.${PAGE} .csr-ai-cell p { font-size:16px; color:var(--csr-muted); }

.${PAGE} .csr-program-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:56px; border-top:1px solid var(--csr-border); }
.${PAGE} .csr-program-item { min-width:0; display:grid; grid-template-columns:42px minmax(0,1fr); gap:16px; padding:27px 0; border-bottom:1px solid var(--csr-border); background:transparent; }
.${PAGE} .csr-program-icon { width:38px; height:38px; border-radius:12px; background:var(--csr-pale-blue); color:var(--csr-blue-dark); display:grid; place-items:center; }
.${PAGE} .csr-program-item h3 { font-size:19px; margin-bottom:9px; }
.${PAGE} .csr-program-item p { font-size:16px; }

.${PAGE} .csr-audience-grid { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); border-top:1px solid var(--csr-border); border-bottom:1px solid var(--csr-border); }
.${PAGE} .csr-audience-item { min-width:0; padding:28px 22px; border-right:1px solid var(--csr-border); }
.${PAGE} .csr-audience-item:last-child { border-right:0; }
.${PAGE} .csr-audience-item > div { color:var(--csr-blue-dark); margin-bottom:16px; }
.${PAGE} .csr-audience-item h3 { font-size:18px; margin-bottom:9px; }
.${PAGE} .csr-audience-item p { font-size:16px; }

.${PAGE} .csr-expertise-grid { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:86px; align-items:center; }
.${PAGE} .csr-expertise-grid h2 { margin-bottom:20px; }
.${PAGE} .csr-expertise-grid p { color:#CDD7EC; font-size:17px; margin-bottom:16px; }
.${PAGE} .csr-therapy-list { display:flex; flex-wrap:wrap; gap:12px; }
.${PAGE} .csr-therapy-list span { border:1px solid rgba(200,214,255,.25); border-radius:999px; padding:11px 15px; color:#EEF3FF; font-size:14px; background:rgba(255,255,255,.04); }

.${PAGE} .csr-language-grid { display:grid; grid-template-columns:minmax(280px,.55fr) minmax(0,1.45fr); gap:90px; align-items:center; }
.${PAGE} .csr-language-stat { border-right:1px solid var(--csr-border); padding:22px 60px 22px 0; }
.${PAGE} .csr-language-stat > span { display:block; font-family:"Inter Tight",Inter,Arial,sans-serif; font-size:82px; font-weight:500; line-height:1; letter-spacing:-2px; color:var(--csr-blue-dark); }
.${PAGE} .csr-language-stat strong { display:block; font-family:"Inter Tight",Inter,Arial,sans-serif; font-size:30px; font-weight:500; color:var(--csr-navy); margin-top:8px; }
.${PAGE} .csr-language-stat p { color:var(--csr-muted); margin-top:8px; }
.${PAGE} .csr-language-copy h2 { margin-bottom:20px; }
.${PAGE} .csr-language-copy > p { font-size:17px; margin-bottom:14px; }
.${PAGE} .csr-two-col-list { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px 24px; margin-top:24px; }
.${PAGE} .csr-two-col-list li { display:flex; gap:9px; align-items:flex-start; font-size:16px; }
.${PAGE} .csr-two-col-list svg { color:var(--csr-blue-dark); flex:0 0 auto; margin-top:3px; }

.${PAGE} .csr-service-list { border-top:1px solid var(--csr-border); }
.${PAGE} .csr-service-row { display:grid; grid-template-columns:minmax(0,1fr) 46px; gap:30px; align-items:center; padding:25px 0; border-bottom:1px solid var(--csr-border); text-decoration:none; min-width:0; }
.${PAGE} .csr-service-row h3 { font-size:20px; margin-bottom:5px; transition:color .2s ease; overflow-wrap:anywhere; }
.${PAGE} .csr-service-row p { font-size:16px; max-width:840px; color:var(--csr-body); overflow-wrap:anywhere; }
.${PAGE} .csr-service-arrow { width:42px; height:42px; border:1px solid #C7D2E4; border-radius:50%; display:grid; place-items:center; color:var(--csr-blue-dark); transition:background .2s ease, color .2s ease, transform .2s ease; }
.${PAGE} .csr-service-row:hover h3 { color:var(--csr-blue-dark); }
.${PAGE} .csr-service-row:hover .csr-service-arrow { background:var(--csr-blue); border-color:var(--csr-blue); color:#fff; transform:translateX(2px); }

.${PAGE} .csr-why-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); border-top:1px solid var(--csr-border); }
.${PAGE} .csr-why-item { min-width:0; display:grid; grid-template-columns:48px minmax(0,1fr); gap:18px; padding:26px 32px 26px 0; border-bottom:1px solid var(--csr-border); }
.${PAGE} .csr-why-item:nth-child(odd) { border-right:1px solid var(--csr-border); padding-right:40px; }
.${PAGE} .csr-why-item:nth-child(even) { padding-left:40px; }
.${PAGE} .csr-why-icon { width:42px; height:42px; border-radius:14px; background:var(--csr-pale-blue); color:var(--csr-blue-dark); display:grid; place-items:center; }
.${PAGE} .csr-why-item h3 { font-size:19px; margin-bottom:7px; }
.${PAGE} .csr-why-item p { font-size:16px; }

.${PAGE} .csr-faq-grid { display:grid; grid-template-columns:minmax(280px,.55fr) minmax(0,1.45fr); gap:84px; align-items:start; }
.${PAGE} .csr-faq-intro { position:sticky; top:24px; }
.${PAGE} .csr-faq-intro h2 { margin-bottom:18px; }
.${PAGE} .csr-faq-intro p { font-size:16px; margin-bottom:24px; }
.${PAGE} .csr-faq-list { border-top:1px solid var(--csr-border); }
.${PAGE} .csr-faq-item { border-bottom:1px solid var(--csr-border); }
.${PAGE} .csr-faq-question { width:100%; min-height:72px; padding:19px 0; background:transparent; border:0; display:flex; justify-content:space-between; gap:24px; align-items:center; text-align:left; color:var(--csr-navy); font-family:"Inter Tight",Inter,Arial,sans-serif; font-size:19px; font-weight:500; line-height:1.35; cursor:pointer; }
.${PAGE} .csr-faq-question > span:first-child { min-width:0; }
.${PAGE} .csr-faq-toggle { width:34px; height:34px; border:1px solid #C7D2E4; border-radius:50%; color:var(--csr-blue-dark); display:grid; place-items:center; flex:0 0 auto; }
.${PAGE} .csr-faq-answer { padding:0 54px 23px 0; }
.${PAGE} .csr-faq-answer p { font-size:16px; }

.${PAGE} .csr-final-wrap { padding:0 0 96px; background:#FFFFFF; }
.${PAGE} .csr-final-cta { background:linear-gradient(125deg,#17264D 0%,#253F8F 100%); border-radius:30px; padding:58px 62px; display:grid; grid-template-columns:minmax(0,1.45fr) minmax(250px,.55fr); gap:60px; align-items:center; color:#E2E9F7; overflow:hidden; position:relative; }
.${PAGE} .csr-final-cta::after { content:""; position:absolute; width:300px; height:300px; border-radius:50%; border:1px solid rgba(200,214,255,.12); right:-110px; top:-120px; }
.${PAGE} .csr-final-cta h2 { color:#FFFFFF; margin-bottom:18px; }
.${PAGE} .csr-final-cta p { color:#D5DFF2; font-size:16px; margin-bottom:12px; max-width:820px; }
.${PAGE} .csr-final-actions { display:flex; flex-direction:column; gap:12px; align-items:stretch; position:relative; z-index:1; }
.${PAGE} .csr-btn-light { background:#FFFFFF; color:var(--csr-ink); border:1px solid #FFFFFF; }
.${PAGE} .csr-btn-light:hover { background:#EEF3FF; }

@media (max-width: 1160px) {
  .${PAGE} .csr-shell { padding-left:40px; padding-right:40px; }
  .${PAGE} .csr-hero-grid { grid-template-columns:minmax(0,1fr) minmax(360px,.8fr); gap:38px; }
  .${PAGE} .csr-flow { grid-template-columns:repeat(6,minmax(0,1fr)); gap:24px; }
  .${PAGE} .csr-flow-item { grid-column:span 2; }
  .${PAGE} .csr-flow-item:nth-child(4) { grid-column:2 / span 2; }
  .${PAGE} .csr-flow-item:nth-child(5) { grid-column:4 / span 2; }
  .${PAGE} .csr-flow-arrow { display:none; }
}

@media (max-width: 980px) {
  .${PAGE} .csr-section { padding:82px 0; }
  .${PAGE} .csr-hero { padding:82px 0; }
  .${PAGE} .csr-hero-grid { grid-template-columns:1fr; gap:42px; }
  .${PAGE} .csr-hero-copy { max-width:820px; margin-left:auto; margin-right:auto; }
  .${PAGE} .csr-hero-copy .csr-eyebrow, .${PAGE} .csr-hero-copy h1 { text-align:center; }
  .${PAGE} .csr-hero-copy h1 { margin-left:auto; margin-right:auto; }
  .${PAGE} .csr-hero-visual { max-width:560px; margin:0 auto; }
  .${PAGE} .csr-trust-grid { grid-template-columns:repeat(3,minmax(0,1fr)); }
  .${PAGE} .csr-trust-item:nth-child(-n+3) { border-bottom:1px solid var(--csr-divider); }
  .${PAGE} .csr-evidence-band { grid-template-columns:repeat(3,minmax(0,1fr)); row-gap:28px; }
  .${PAGE} .csr-evidence-item:nth-child(3) { border-right:0; }
  .${PAGE} .csr-split-wide, .${PAGE} .csr-ich-grid, .${PAGE} .csr-data-grid, .${PAGE} .csr-narrative-grid, .${PAGE} .csr-ai-grid, .${PAGE} .csr-expertise-grid, .${PAGE} .csr-language-grid, .${PAGE} .csr-faq-grid { grid-template-columns:1fr; gap:54px; }
  .${PAGE} .csr-ich-intro, .${PAGE} .csr-faq-intro { position:static; }
  .${PAGE} .csr-layer-row { grid-template-columns:44px minmax(0,1fr); }
  .${PAGE} .csr-layer-row ul { grid-column:2; }
  .${PAGE} .csr-doc-chain { grid-template-columns:1fr; gap:0; max-width:760px; margin-left:auto; margin-right:auto; }
  .${PAGE} .csr-chain-arrow { transform:rotate(90deg); padding:8px 0; }
  .${PAGE} .csr-data-visual { order:2; }
  .${PAGE} .csr-data-copy { order:1; }
  .${PAGE} .csr-flow { grid-template-columns:1fr; gap:34px; max-width:760px; margin-left:auto; margin-right:auto; }
  .${PAGE} .csr-flow-item, .${PAGE} .csr-flow-item:nth-child(4), .${PAGE} .csr-flow-item:nth-child(5) { grid-column:auto; }
  .${PAGE} .csr-flow-arrow { display:grid; top:auto; right:auto; bottom:-29px; left:50%; transform:translateX(-50%) rotate(90deg); }
  .${PAGE} .csr-audience-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .${PAGE} .csr-audience-item { border-bottom:1px solid var(--csr-border); }
  .${PAGE} .csr-audience-item:nth-child(even) { border-right:0; }
  .${PAGE} .csr-audience-item:last-child { border-right:0; border-bottom:0; }
  .${PAGE} .csr-language-stat { border-right:0; border-bottom:1px solid var(--csr-border); padding:0 0 36px; }
  .${PAGE} .csr-final-cta { grid-template-columns:1fr; gap:34px; }
  .${PAGE} .csr-final-actions { flex-direction:row; }
}

@media (max-width: 768px) {
  .${PAGE} .csr-shell { padding-left:28px; padding-right:28px; }
  .${PAGE} h1 { font-size:42px; }
  .${PAGE} h2 { font-size:32px; }
  .${PAGE} .csr-hero-copy .csr-eyebrow, .${PAGE} .csr-hero-copy h1 { text-align:center; }
  .${PAGE} .csr-hero-grid { gap:36px; }
  .${PAGE} .csr-trust-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .${PAGE} .csr-trust-item:nth-child(-n+4) { border-bottom:1px solid var(--csr-divider); }
  .${PAGE} .csr-evidence-band { grid-template-columns:repeat(2,minmax(0,1fr)); }
  .${PAGE} .csr-evidence-item:nth-child(2), .${PAGE} .csr-evidence-item:nth-child(4) { border-right:0; }
  .${PAGE} .csr-evidence-item:nth-child(3) { border-right:1px solid var(--csr-divider); }
  .${PAGE} .csr-layer-row { grid-template-columns:44px minmax(0,1fr); gap:20px; }
  .${PAGE} .csr-layer-row ul { grid-template-columns:1fr; }
  .${PAGE} .csr-data-list > div { grid-template-columns:1fr; gap:7px; }
  .${PAGE} .csr-ai-matrix { grid-template-columns:1fr; }
  .${PAGE} .csr-program-grid { grid-template-columns:1fr; column-gap:0; }
  .${PAGE} .csr-audience-grid { grid-template-columns:1fr; border-bottom:0; }
  .${PAGE} .csr-audience-item { border-right:0 !important; border-bottom:1px solid var(--csr-border) !important; padding:24px 0; }
  .${PAGE} .csr-audience-item:last-child { border-bottom:0 !important; }
  .${PAGE} .csr-why-grid { grid-template-columns:1fr; }
  .${PAGE} .csr-why-item, .${PAGE} .csr-why-item:nth-child(odd), .${PAGE} .csr-why-item:nth-child(even) { border-right:0; padding:24px 0; }
  .${PAGE} .csr-two-col-list { grid-template-columns:1fr; }
  .${PAGE} .csr-final-cta { padding:48px 40px; }
}

@media (max-width: 600px) {
  .${PAGE} .csr-shell { padding-left:20px; padding-right:20px; }
  .${PAGE} .csr-section { padding:68px 0; }
  .${PAGE} .csr-hero { padding:70px 0 62px; }
  .${PAGE} h1 { font-size:42px; line-height:1.22; }
  .${PAGE} h2 { font-size:32px; line-height:1.28; }
  .${PAGE} h3 { font-size:21px; }
  .${PAGE} .csr-hero-copy .csr-eyebrow, .${PAGE} .csr-hero-copy h1 { text-align:center; }
  .${PAGE} .csr-hero-copy { max-width:none; }
  .${PAGE} .csr-hero-lead { font-size:18px; }
  .${PAGE} .csr-hero-support { font-size:16px; }
  .${PAGE} .csr-actions { flex-direction:column; }
  .${PAGE} .csr-actions .csr-btn { width:100%; }
  .${PAGE} .csr-hero-visual { width:100%; max-width:440px; }
  .${PAGE} .csr-section-head.csr-centerable { text-align:center; }
  .${PAGE} .csr-section-head.csr-centerable > p { text-align:left; }
  .${PAGE} .csr-section-head.csr-technical, .${PAGE} .csr-workflow-section .csr-section-head, .${PAGE} .csr-related .csr-section-head, .${PAGE} .csr-faq-intro { text-align:left; }
  .${PAGE} .csr-section-head { margin-bottom:38px; }
  .${PAGE} .csr-section-head > p { font-size:16px; }
  .${PAGE} .csr-split-wide > div:first-child { text-align:center; }
  .${PAGE} .csr-split-wide > div:first-child h2 { margin-left:auto; margin-right:auto; }
  .${PAGE} .csr-rich-copy { text-align:left; }
  .${PAGE} .csr-link-row { flex-direction:column; gap:14px; }
  .${PAGE} .csr-trust-grid { grid-template-columns:1fr; }
  .${PAGE} .csr-trust-item { padding:18px 0; border-bottom:1px solid var(--csr-divider) !important; }
  .${PAGE} .csr-trust-item:last-child { border-bottom:0 !important; }
  .${PAGE} .csr-evidence-band { grid-template-columns:1fr; margin-top:44px; }
  .${PAGE} .csr-evidence-item { padding:18px 0; border-right:0 !important; border-bottom:1px solid var(--csr-divider); }
  .${PAGE} .csr-evidence-item:last-child { border-bottom:0; }
  .${PAGE} .csr-layer-row { grid-template-columns:44px minmax(0,1fr); gap:14px 16px; padding:30px 0; }
  .${PAGE} .csr-layer-row ul { grid-column:1 / -1; margin-top:8px; }
  .${PAGE} .csr-ich-intro h2, .${PAGE} .csr-ich-intro .csr-eyebrow { text-align:left; }
  .${PAGE} .csr-ich-row { grid-template-columns:40px minmax(0,1fr); gap:14px; }
  .${PAGE} .csr-doc-chain { margin-top:38px; }
  .${PAGE} .csr-dark-copy { text-align:left; }
  .${PAGE} .csr-dark-links { justify-content:flex-start; flex-direction:column; gap:14px; }
  .${PAGE} .csr-report-mini { min-height:450px; padding:32px 26px; width:calc(100% - 20px); }
  .${PAGE} .csr-mini-chart { gap:12px; padding-left:18px; padding-right:12px; }
  .${PAGE} .csr-mini-chart i { width:30px; }
  .${PAGE} .csr-qa-tag { position:static; display:inline-block; margin:14px 6px 0 0; box-shadow:none; }
  .${PAGE} .csr-narrative-panel { padding-left:0; }
  .${PAGE} .csr-timeline-line { left:15px; }
  .${PAGE} .csr-reg-copy { text-align:left; }
  .${PAGE} .csr-reg-links { justify-content:flex-start; flex-direction:column; gap:14px; }
  .${PAGE} .csr-workflow::before { left:23px; }
  .${PAGE} .csr-work-step { grid-template-columns:48px minmax(0,1fr); gap:18px; }
  .${PAGE} .csr-work-marker span { width:46px; height:46px; }
  .${PAGE} .csr-work-step > div:last-child { padding-top:3px; }
  .${PAGE} .csr-program-item { padding:24px 0; }
  .${PAGE} .csr-language-stat > span { font-size:68px; }
  .${PAGE} .csr-language-stat strong { font-size:28px; }
  .${PAGE} .csr-service-row { grid-template-columns:minmax(0,1fr); gap:12px; padding:22px 0; }
  .${PAGE} .csr-service-arrow { width:38px; height:38px; }
  .${PAGE} .csr-faq-question { font-size:18px; align-items:flex-start; }
  .${PAGE} .csr-faq-answer { padding-right:0; }
  .${PAGE} .csr-faq-intro .csr-btn { width:100%; }
  .${PAGE} .csr-final-wrap { padding-bottom:68px; }
  .${PAGE} .csr-final-cta { padding:42px 24px; border-radius:24px; }
  .${PAGE} .csr-expertise-grid > div:first-child .csr-eyebrow, .${PAGE} .csr-expertise-grid > div:first-child h2, .${PAGE} .csr-language-copy .csr-eyebrow, .${PAGE} .csr-language-copy h2 { text-align:center; }
  .${PAGE} .csr-final-cta h2 { text-align:center; }
  .${PAGE} .csr-final-actions { flex-direction:column; }
  .${PAGE} .csr-final-actions .csr-btn { width:100%; }
}

@media (max-width: 360px) {
  .${PAGE} h1 { font-size:38px; }
  .${PAGE} h2 { font-size:30px; }
  .${PAGE} .csr-btn { padding-left:20px; padding-right:20px; }
  .${PAGE} .csr-ich-row { grid-template-columns:34px minmax(0,1fr); }
  .${PAGE} .csr-ich-row > span { width:32px; height:32px; }
  .${PAGE} .csr-ai-cell { padding:18px; }
  .${PAGE} .csr-final-cta { padding:38px 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .${PAGE} *, .${PAGE} *::before, .${PAGE} *::after { scroll-behavior:auto !important; transition:none !important; animation:none !important; }
}
`;

export default App;
