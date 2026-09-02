import React, { useState } from "react";

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  lifeSciences: "https://www.stepes.com/life-sciences-translation-services/",
  pharmaceutical: "https://www.stepes.com/pharmaceutical-translation-services/",
  medical: "https://www.stepes.com/medical-translation-services/",
  patent: "https://www.stepes.com/patent-translation-services/",
  agriculture: "https://www.stepes.com/agriculture-translation-services/",
  chemical: "https://www.stepes.com/chemical-translation-services/",
  manufacturing: "https://www.stepes.com/manufacturing-translation-services/",
  technical: "https://www.stepes.com/technical-translation-services/",
  scientific: "https://www.stepes.com/scientific-translation-services/",
  dtp: "https://www.stepes.com/multilingual-desktop-publishing/",
  fileFormats: "https://www.stepes.com/resources/file-format-support/",
  translationMemory: "https://www.stepes.com/translation-memory/",
  terminology: "https://www.stepes.com/terminology-management/",
  clinicalStudy: "https://www.stepes.com/clinical-study-translation-services/",
  security: "https://www.stepes.com/resources/security-and-compliance/",
};

const expertise = [
  {
    title: "Biopharmaceuticals & Biologics",
    icon: "molecule",
    copy: "Specialized translation for biologic medicines, monoclonal antibodies, recombinant proteins, therapeutic proteins, biosimilars, drug discovery, and biologics manufacturing.",
  },
  {
    title: "Cell & Gene Therapy",
    icon: "cell",
    copy: "Research, clinical, regulatory, CMC, manufacturing, quality, and scientific content for gene therapies, cellular therapies, viral vectors, gene editing, and regenerative medicine.",
  },
  {
    title: "Genomics & Precision Medicine",
    icon: "dna",
    copy: "Genomics, sequencing, molecular genetics, biomarkers, precision medicine, bioinformatics, genetic testing, and genomic data interpretation.",
  },
  {
    title: "Diagnostics & Molecular Testing",
    icon: "test",
    copy: "Assays, molecular diagnostics, companion diagnostics, laboratory platforms, reagents, software, product documentation, and training content.",
  },
  {
    title: "Vaccines & Immunology",
    icon: "shield",
    copy: "Scientific, clinical, and regulatory translation for vaccine development, immunology research, immune-response studies, and immunoassays.",
  },
  {
    title: "Agricultural Biotechnology",
    icon: "leaf",
    copy: "Crop genetics, biological products, seed technologies, plant research, agricultural genomics, regulatory content, training, and commercialization.",
    href: links.agriculture,
  },
  {
    title: "Industrial & Synthetic Biotechnology",
    icon: "factory",
    copy: "Fermentation, enzyme technologies, synthetic biology, biochemical production, biomaterials, bio-based manufacturing, and industrial biotech applications.",
  },
  {
    title: "Laboratory & Research Technologies",
    icon: "microscope",
    copy: "Instruments, reagents, research platforms, laboratory systems, analytical technologies, software, technical documentation, and scientific workflows.",
  },
];

const lifecycle = [
  {
    title: "Research & Discovery",
    copy: "Research protocols, assay development, laboratory procedures, manuscripts, scientific reports, posters, sequencing documentation, and collaboration materials.",
  },
  {
    title: "Preclinical & Development",
    copy: "Pharmacology, toxicology, development reports, technical assessments, study plans, product specifications, and scientific summaries.",
  },
  {
    title: "Clinical & Regulatory",
    copy: "Clinical trial protocols, investigator materials, informed consent, regulatory submissions, dossiers, safety content, and authority correspondence.",
  },
  {
    title: "Technology Transfer & Biomanufacturing",
    copy: "SOPs, work instructions, batch documentation, process descriptions, validation protocols, equipment documentation, quality records, and training.",
  },
  {
    title: "Partnering & Commercialization",
    copy: "Licensing materials, due diligence, investor presentations, corporate communication, scientific marketing, product content, and websites.",
  },
  {
    title: "Lifecycle & Global Expansion",
    copy: "New markets, updated processes, product revisions, additional applications, new indications, training updates, and multilingual content maintenance.",
  },
];

const contentGroups = [
  {
    title: "Scientific & Research",
    icon: "microscope",
    items: ["Research protocols", "Scientific manuscripts", "Laboratory procedures", "Assay documentation", "Sequencing documentation", "Scientific presentations"],
  },
  {
    title: "Clinical & Regulatory",
    icon: "clipboard",
    items: ["Clinical trial protocols", "Investigator documentation", "Informed consent materials", "Regulatory submissions", "Safety documentation", "Authority correspondence"],
  },
  {
    title: "Intellectual Property & Legal",
    icon: "patent",
    items: ["Biotechnology patents", "Patent applications", "Claims and specifications", "Prior art", "Licensing agreements", "Technology transfer agreements"],
    href: links.patent,
  },
  {
    title: "Manufacturing & Quality",
    icon: "factory",
    items: ["SOPs", "Work instructions", "Batch documentation", "Validation protocols", "QC / QA documentation", "Training materials"],
    href: links.manufacturing,
  },
  {
    title: "Product & Technical",
    icon: "document",
    items: ["Technical manuals", "Product specifications", "Laboratory guides", "Software interfaces", "Knowledge bases", "Scientific product information"],
    href: links.technical,
  },
  {
    title: "Corporate, Partner & Investor",
    icon: "presentation",
    items: ["Investor presentations", "Partnering materials", "Due diligence", "Business development content", "Websites", "Scientific marketing"],
  },
];

const scientificPrecision = [
  {
    title: "Scientific Nomenclature",
    icon: "molecule",
    copy: "Protect gene and protein names, organisms, cell lines, biomarkers, molecules, pathways, strains, assays, and other recognized scientific entities.",
  },
  {
    title: "Numbers, Units & Technical Notation",
    icon: "measure",
    copy: "Keep concentrations, dosages, ranges, temperatures, measurements, statistical values, process parameters, and scientific symbols accurate across languages.",
  },
  {
    title: "Context-Sensitive Terminology",
    icon: "context",
    copy: "Translate terms according to the biological pathway, assay, therapeutic platform, manufacturing process, diagnostic application, or technical context in which they are used.",
  },
  {
    title: "Tables, Figures & References",
    icon: "table",
    copy: "Preserve the relationships among text, figures, captions, diagrams, labels, citations, footnotes, tables, and cross-references in the final multilingual deliverable.",
  },
];

const workflows = [
  {
    level: "High-Risk & Regulated Content",
    examples: "Clinical, regulatory, patient-facing, quality, safety, and manufacturing content",
    flow: ["Professional Translation", "Independent Review", "Terminology & QA", "Final Production QA"],
  },
  {
    level: "Specialized Scientific & Technical Content",
    examples: "Research, patents, laboratory documentation, scientific communication, and technical reports",
    flow: ["Subject-Matter Translation", "Terminology Control", "Quality Review", "Final QA"],
  },
  {
    level: "High-Volume & Lower-Risk Content",
    examples: "Selected operational, recurring, or digital content where AI-assisted workflows are appropriate",
    flow: ["TM + AI Translation", "Professional Post-Editing", "Automated QA", "Delivery"],
  },
];

const qualitySteps = [
  ["Content Analysis", "Review files, languages, subject matter, audience, references, terminology, prior translations, formatting, and quality requirements."],
  ["Biotechnology Linguist Assignment", "Match translators and reviewers to the language pair, scientific specialization, content type, and intended use."],
  ["Terminology & TM Preparation", "Prepare approved glossaries, reference material, translation memory, product terminology, and client instructions."],
  ["Translation", "Translate with access to relevant terminology and reusable language assets, using AI assistance only when appropriate to the content."],
  ["Review & Quality Assurance", "Apply independent review where required and check completeness, terminology, names, numbers, units, symbols, tags, and formatting."],
  ["Final File & Production QA", "Validate multilingual layout, file integrity, content placement, and release readiness before delivery."],
];

const organizationTypes = [
  ["rocket", "Emerging Biotechnology Companies", "Scalable support for research, investor, IP, regulatory, partnering, and commercial content as programs grow internationally."],
  ["building", "Established Biotechnology & Biopharma Companies", "Connected multilingual operations for high-volume scientific, clinical, regulatory, manufacturing, product, and commercial content."],
  ["microscope", "Research Institutions & Laboratories", "Protocols, publications, laboratory documentation, research presentations, technical content, and global scientific collaboration."],
  ["network", "CROs & CDMOs", "Clinical, regulatory, quality, manufacturing, technology-transfer, and partner-facing content across complex global programs."],
  ["test", "Diagnostics & Laboratory Technology Companies", "Assays, product documentation, software, regulatory content, technical support, training, and commercialization."],
  ["leaf", "Agricultural & Industrial Biotechnology", "Research, technical, manufacturing, safety, regulatory, product, and commercial content beyond human healthcare."],
];

const reasons = [
  ["Specialized Biotechnology Expertise", "Scientific linguists matched to the language, subject area, content type, and intended use."],
  ["Connected Terminology", "Translation memory, termbases, references, and reviewer decisions help preserve scientific language across teams and markets."],
  ["Flexible Quality Workflows", "Translation and review depth can be aligned to content risk, audience, regulatory sensitivity, and complexity."],
  ["AI + Human Intelligence", "Technology improves reuse, speed, and scalability while biotechnology specialists retain scientific judgment and quality oversight."],
  ["Enterprise Scalability", "Support individual scientific files or ongoing multilingual programs spanning departments, reviewers, content streams, and markets."],
  ["Complete Multilingual Production", "Translation, terminology, file engineering, desktop publishing, QA, and final delivery can be coordinated in one workflow."],
];

const relatedServices = [
  ["Life Sciences Translation", "Clinical, regulatory, scientific, patient-facing, diagnostics, and healthcare content.", links.lifeSciences],
  ["Pharmaceutical Translation", "Pharmaceutical research, clinical development, regulatory, safety, manufacturing, labeling, and commercialization.", links.pharmaceutical],
  ["Medical Translation", "Medical, healthcare, clinical, pharmaceutical, device, scientific, and patient-facing communication.", links.medical],
  ["Patent Translation", "Biotechnology patents, prior art, claims, specifications, and supporting intellectual-property content.", links.patent],
  ["Scientific Translation", "Specialized scientific documents, publications, research content, biology, chemistry, and technical communication.", links.scientific],
  ["Technical Translation", "Technical documentation requiring subject-matter expertise, controlled terminology, and file-aware workflows.", links.technical],
  ["Agriculture Translation", "Agricultural science, crop technologies, biotechnology, equipment, food systems, and agribusiness.", links.agriculture],
  ["Chemical Translation", "Chemistry, biochemical products, materials, technical documentation, safety, and industrial applications.", links.chemical],
];

const faqs = [
  {
    q: "What is biotechnology translation?",
    a: "Biotechnology translation is the specialized translation of scientific, technical, clinical, regulatory, manufacturing, intellectual-property, product, and commercial content related to biotechnology. The field can include biologics, cell and gene therapy, genomics, diagnostics, molecular biology, biochemistry, agricultural biotechnology, synthetic biology, industrial biotechnology, laboratory technologies, and biomanufacturing. Because the content is highly specialized, effective translation requires professional language expertise together with appropriate subject-matter knowledge.",
  },
  {
    q: "What biotechnology documents can Stepes translate?",
    a: "Stepes translates biotechnology content throughout research, development, regulatory, manufacturing, and commercialization. Common materials include research protocols, scientific reports, manuscripts, patents, clinical documents, regulatory submissions, SOPs, validation documentation, manufacturing procedures, quality records, assay materials, laboratory instructions, product specifications, software content, training materials, investor presentations, websites, and scientific marketing content.",
  },
  {
    q: "How is biotechnology translation different from pharmaceutical translation?",
    a: "The two areas overlap in biologics, clinical development, regulatory documentation, manufacturing, and commercialization. Pharmaceutical translation primarily centers on medicines and their regulated lifecycle. Biotechnology spans a broader scientific ecosystem that can also include genomics, gene editing, cell therapy, diagnostics, laboratory technologies, agricultural biotechnology, synthetic biology, industrial biotechnology, biochemical processes, research platforms, and other applications of biological science and engineering.",
  },
  {
    q: "How does Stepes select biotechnology translators?",
    a: "Linguist selection can consider scientific specialization, biotechnology translation experience, document type, language pair, target market, regulatory sensitivity, client terminology, previous project performance, and review requirements. Relevant subject areas can include molecular biology, genetics, genomics, cell biology, biochemistry, immunology, microbiology, pharmacology, chemistry, bioengineering, bioprocessing, clinical research, regulatory affairs, quality, diagnostics, manufacturing, and agricultural science.",
  },
  {
    q: "How does Stepes maintain consistent biotechnology terminology?",
    a: "Stepes uses terminology management, translation memory, client references, approved translations, style guidance, and reviewer feedback to help maintain scientific terminology across documents and markets. Approved terms can be stored in multilingual terminology resources, while reusable translated content can be retained in translation memory for future updates.",
  },
  {
    q: "Can Stepes translate biotechnology patents and scientific publications?",
    a: "Yes. Stepes supports biotechnology patents, patent applications, prior art, claims, specifications, technical disclosures, research manuscripts, journal articles, abstracts, posters, white papers, and scientific presentations. Projects are assigned to linguists with relevant scientific or technical expertise, with review workflows selected according to intended use. Stepes provides translation support and does not provide patent filing or legal advice.",
  },
  {
    q: "Can AI be used for biotechnology translation?",
    a: "Yes, for appropriate content and workflows. AI can help with translation-memory matching, terminology extraction, repeated-content identification, change detection, machine translation, and automated QA. Because biotechnology content can involve specialized terminology, novel technologies, regulated information, and context-dependent meaning, Stepes combines AI with professional human expertise according to content risk, complexity, audience, and quality requirements.",
  },
  {
    q: "Can Stepes translate biotechnology manufacturing and quality documentation?",
    a: "Yes. Stepes supports SOPs, manufacturing procedures, work instructions, batch documentation, technology-transfer packages, validation protocols, QC and QA documents, equipment manuals, bioreactor documentation, process descriptions, technical specifications, and training materials. Translation memory and terminology management can also support consistency as processes, facilities, documents, and products are updated.",
  },
  {
    q: "What biotechnology file formats and languages does Stepes support?",
    a: "Stepes supports more than 100 languages and regional variants and works with common office, scientific, technical, publishing, design, and structured formats including DOCX, PPTX, XLSX, PDF, Adobe InDesign, Illustrator, XML, HTML, JSON, software resource files, and other digital formats. Multilingual desktop publishing, file engineering, graphics localization, formatting, and final production QA can be added when required.",
  },
];

function Icon({ name, size = 24 }) {
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
  switch (name) {
    case "dna":
      return <svg {...common}><path d="M7 3c5 3 5 15 10 18"/><path d="M17 3C12 6 12 18 7 21"/><path d="M8.4 6h7.2M7.2 10h9.6M7.2 14h9.6M8.4 18h7.2"/></svg>;
    case "molecule":
      return <svg {...common}><circle cx="6" cy="12" r="2.5"/><circle cx="17.5" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.3 10.8 7-3.7M8.4 13.1l7.3 3.6M17.7 8.5l.2 7"/></svg>;
    case "cell":
      return <svg {...common}><path d="M20.5 12c0 5-3.7 8.5-8.5 8.5S3.5 17 3.5 12 7.2 3.5 12 3.5 20.5 7 20.5 12Z"/><circle cx="12" cy="12" r="3"/><path d="M7.5 8.5c1-.7 2-1 3-1M15.2 15.4c.8-.5 1.3-1.1 1.8-2"/></svg>;
    case "test":
      return <svg {...common}><path d="M8 3h8M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3"/><path d="M8.2 15h7.6"/></svg>;
    case "shield":
      return <svg {...common}><path d="M12 3 5 6v5c0 4.6 2.8 8.2 7 10 4.2-1.8 7-5.4 7-10V6l-7-3Z"/><path d="m9.2 12 1.8 1.8 3.8-4"/></svg>;
    case "leaf":
      return <svg {...common}><path d="M19.5 4.5C13 4.6 7 6 5 11c-1.8 4.5 1.8 8.2 5.5 7.8 5.7-.6 8.1-7.1 9-14.3Z"/><path d="M5 20c2-5 5.3-8.5 10-11"/></svg>;
    case "factory":
      return <svg {...common}><path d="M3 21V9l6 3V9l6 3V5h4v16H3Z"/><path d="M7 16h2M12 16h2M17 16h2"/></svg>;
    case "microscope":
      return <svg {...common}><path d="m10 3 4 4-3 3-4-4 3-3Z"/><path d="M10 10c-1 2-1 4 0 6M6 21h12M8 18h8M14 7l2 2M16 9c3 2 3 7 0 9"/></svg>;
    case "clipboard":
      return <svg {...common}><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M9 9h6M9 13h6M9 17h4"/></svg>;
    case "patent":
      return <svg {...common}><path d="M7 3h7l4 4v14H7V3Z"/><path d="M14 3v5h4M10 12h5M10 16h5"/><circle cx="7" cy="17" r="3"/></svg>;
    case "document":
      return <svg {...common}><path d="M6 3h8l4 4v14H6V3Z"/><path d="M14 3v5h4M9 12h6M9 16h6"/></svg>;
    case "presentation":
      return <svg {...common}><path d="M4 4h16v11H4V4Z"/><path d="M12 15v6M8 21h8M7 11l3-3 3 2 4-4"/></svg>;
    case "measure":
      return <svg {...common}><path d="M4 18 18 4l2 2L6 20 4 18Z"/><path d="m8 16-2-2m5-1-2-2m5-1-2-2m5-1-2-2"/></svg>;
    case "context":
      return <svg {...common}><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/><path d="M12 4V2M12 22v-2M4 12H2M22 12h-2"/></svg>;
    case "table":
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M9 5v14M15 5v14"/></svg>;
    case "rocket":
      return <svg {...common}><path d="M14 4c3-1 5-1 6-1 0 2 0 4-1 6l-7 7-4-4 6-8Z"/><path d="m8 12-4 1-1 3 5 1M12 16l-1 5 3-1 2-4M9 15l-3 3"/><circle cx="15.5" cy="7.5" r="1.5"/></svg>;
    case "building":
      return <svg {...common}><path d="M4 21V7h10v14M14 11h6v10M7 10h2M7 14h2M7 18h2M17 14h1M17 18h1"/></svg>;
    case "network":
      return <svg {...common}><circle cx="5" cy="12" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="m7 11 10-4M7 13l10 4M19 8v8"/></svg>;
    default:
      return <svg {...common}><circle cx="12" cy="12" r="8"/><path d="M8 12h8M12 8v8"/></svg>;
  }
}

function ArrowLink({ href, children, className = "" }) {
  return <a className={`arrow-link ${className}`} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

function SectionHeading({ eyebrow, title, intro, align = "center" }) {
  return (
    <div className={`section-heading ${align === "left" ? "left" : "center"}`}>
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function HeroIllustration() {
  return (
    <svg className="hero-art" viewBox="0 0 620 520" role="img" aria-label="Biotechnology research, genomics, laboratory analysis, biomanufacturing, and global content connected in one scientific ecosystem">
      <defs>
        <linearGradient id="heroSoft" x1="0" x2="1"><stop offset="0" stopColor="#FDF2F7"/><stop offset="1" stopColor="#F7F8FB"/></linearGradient>
      </defs>
      <rect x="38" y="28" width="544" height="450" rx="34" fill="url(#heroSoft)" stroke="#E6E8EE"/>
      <path d="M122 252c72-96 133-133 205-111 68 20 93 108 170 86" fill="none" stroke="#D8DAE1" strokeWidth="2" strokeDasharray="7 9"/>
      <path d="M125 300c66 72 134 98 211 75 69-21 95-88 158-90" fill="none" stroke="#D8DAE1" strokeWidth="2" strokeDasharray="7 9"/>
      <g transform="translate(82 166)" stroke="#4F5664" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="72" cy="72" r="58" fill="#fff"/>
        <circle cx="72" cy="72" r="18" stroke="#C11D63"/>
        <path d="M46 38c15 7 18 18 17 28M97 46c-12 2-18 9-20 20M96 94c-15 6-25 2-31-10M44 92c8-8 15-12 25-12"/>
        <circle cx="45" cy="54" r="4" fill="#F2A7C6" stroke="none"/><circle cx="104" cy="73" r="4" fill="#F2A7C6" stroke="none"/><circle cx="56" cy="101" r="4" fill="#F2A7C6" stroke="none"/>
      </g>
      <g transform="translate(235 70)" stroke="#4F5664" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="144" height="138" rx="24" fill="#fff"/>
        <path d="M45 28c42 24 15 60 55 84"/><path d="M99 28C58 51 85 88 45 112"/>
        <path d="M52 45h40M47 62h50M47 79h50M52 96h40" stroke="#C11D63" strokeWidth="2"/>
      </g>
      <g transform="translate(386 165)" stroke="#4F5664" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="142" height="164" rx="24" fill="#fff"/>
        <path d="M46 34h48M60 34v39l-30 54h82L82 73V34"/>
        <path d="M42 111h58" stroke="#C11D63"/>
        <circle cx="46" cy="95" r="4" fill="#F2A7C6" stroke="none"/><circle cx="74" cy="101" r="5" fill="#F2A7C6" stroke="none"/>
      </g>
      <g transform="translate(220 300)" stroke="#4F5664" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="0" y="0" width="170" height="130" rx="24" fill="#fff"/>
        <path d="M31 96V58l28 14V56l28 14V35h25v61"/>
        <path d="M24 96h116"/><path d="M116 39v-9h21v66"/>
        <path d="M48 84h12M78 84h12M109 84h12" stroke="#C11D63"/>
      </g>
      <g transform="translate(422 336)" stroke="#4F5664" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="62" cy="62" r="54" fill="#fff"/>
        <path d="M20 62h84M62 8c20 20 20 88 0 108M62 8c-20 20-20 88 0 108M28 35c20 12 48 12 68 0M28 89c20-12 48-12 68 0"/>
        <path d="M92 28 106 15" stroke="#C11D63"/>
      </g>
      <g fill="#C11D63">
        <circle cx="205" cy="228" r="5"/><circle cx="393" cy="251" r="5"/><circle cx="404" cy="365" r="5"/><circle cx="331" cy="216" r="5"/>
      </g>
    </svg>
  );
}

function ConnectedLifecycleVisual() {
  const stages = ["Discovery", "Development", "Regulatory / IP", "Manufacturing", "Commercialization", "Global Growth"];
  return (
    <div className="connected-visual" aria-label="Biotechnology content lifecycle from discovery to global growth">
      <div className="connected-track" aria-hidden="true" />
      {stages.map((stage, index) => (
        <div className="connected-stage" key={stage}>
          <div className="connected-icon"><Icon name={["microscope","dna","patent","factory","presentation","network"][index]} size={24}/></div>
          <span>{stage}</span>
        </div>
      ))}
    </div>
  );
}

function TerminologyVisual() {
  return (
    <div className="term-visual" role="img" aria-label="One approved biotechnology term reused across research, patent, regulatory, manufacturing, training, and commercial content">
      <div className="term-core">
        <span className="term-kicker">APPROVED TERM</span>
        <strong>Biomarker</strong>
        <span>one controlled concept</span>
      </div>
      {["R&D", "Patent", "Regulatory", "Manufacturing", "Training", "Commercial"].map((x, i) => (
        <div className={`term-node node-${i + 1}`} key={x}>{x}</div>
      ))}
      <svg viewBox="0 0 420 350" aria-hidden="true">
        <g stroke="#D7B2C2" strokeWidth="2" strokeDasharray="5 7">
          <path d="M210 175 80 62"/><path d="M210 175 330 64"/><path d="M210 175 372 180"/>
          <path d="M210 175 324 292"/><path d="M210 175 89 290"/><path d="M210 175 48 177"/>
        </g>
      </svg>
    </div>
  );
}

function DiffVisual() {
  return (
    <div className="diff-panel" aria-label="Biotechnology document update comparison">
      <div className="diff-top"><span>Protocol_v7.docx</span><span className="status-pill">Update analysis</span></div>
      <div className="diff-summary">
        <div><strong>68%</strong><span>Approved reuse</span></div>
        <div><strong>21%</strong><span>Revised content</span></div>
        <div><strong>11%</strong><span>New content</span></div>
      </div>
      <div className="diff-doc">
        <div className="diff-line reuse"/><div className="diff-line reuse short"/>
        <div className="diff-line changed"/><div className="diff-line changed medium"/>
        <div className="diff-line reuse"/><div className="diff-line new"/>
        <div className="diff-line reuse medium"/><div className="diff-line reuse"/>
      </div>
      <div className="diff-legend"><span><i className="reuse"/>Approved</span><span><i className="changed"/>Changed</span><span><i className="new"/>New</span></div>
    </div>
  );
}

function FileVisual() {
  return (
    <div className="file-visual" role="img" aria-label="Scientific report, presentation, spreadsheet, structured data, and design files moving through multilingual production">
      <div className="file-stack">
        <div className="file-card file-a"><span>DOCX</span><strong>Scientific report</strong><i/><i/><i/></div>
        <div className="file-card file-b"><span>PPTX</span><strong>Research presentation</strong><i/><i/><i/></div>
        <div className="file-card file-c"><span>XML</span><strong>Structured content</strong><i/><i/><i/></div>
      </div>
      <div className="file-flow"><span>Translate</span><span>Engineer</span><span>Format</span><span>QA</span></div>
    </div>
  );
}

export default function BiotechnologyTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="stepes-page">
      <style>{styles}</style>

      <section className="hero section-shell">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>Biotechnology Translation Services</h1>
            <h2 className="hero-subhead">Take Biotechnology Innovation From Discovery to Global Scale</h2>
            <p>Biotechnology moves quickly from scientific discovery to research collaboration, clinical development, regulatory review, intellectual property, manufacturing, and commercialization. Across every stage, complex scientific information must remain accurate and consistent as it moves between teams, documents, languages, and global markets.</p>
            <p>Stepes combines biotechnology subject-matter expertise, professional linguists, AI-powered workflows, terminology management, translation memory, and multilingual production to help global biotech organizations translate complex scientific content accurately and consistently at scale.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={links.quote}>Get a Translation Quote <span aria-hidden="true">→</span></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to a Biotechnology Expert</a>
            </div>
          </div>
          <div className="hero-visual"><HeroIllustration/></div>
        </div>
      </section>

      <section className="proof-band">
        <div className="container proof-grid">
          {["100+ Languages", "ISO 17100", "ISO 9001:2015", "ISO 13485:2016", "Biotechnology Expertise", "AI + Human Workflows"].map((item) => <div className="proof-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="section-shell connected-section">
        <div className="container">
          <SectionHeading
            eyebrow="CONNECTED CONTENT LIFECYCLE"
            title="Biotechnology Content Is Connected From Discovery to Global Scale"
            intro="A scientific concept can begin in a protocol, assay, laboratory report, or research presentation and later appear in patents, clinical documentation, regulatory submissions, manufacturing procedures, training, investor communication, and commercial content. Stepes helps manage that multilingual content as one connected lifecycle rather than a series of isolated translation projects."
          />
          <ConnectedLifecycleVisual/>
          <div className="connected-copy-grid">
            <p>Approved terminology, previous translations, scientific references, and reviewer decisions can be carried forward as content moves from research through development, manufacturing, and global commercialization.</p>
            <p>From the laboratory to the global market, the goal is to preserve scientific meaning while keeping multilingual communication aligned across teams, documents, formats, and markets.</p>
          </div>
        </div>
      </section>

      <section className="section-shell soft-section">
        <div className="container">
          <SectionHeading
            title="Biotechnology Expertise Across Specialized Fields"
            intro="Biotechnology spans highly specialized scientific disciplines, technologies, and applications. Effective translation requires linguists who understand both the language and the science behind the terminology."
          />
          <div className="expertise-grid">
            {expertise.map((item) => (
              <article className="expertise-item" key={item.title}>
                <div className="icon-box"><Icon name={item.icon}/></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  {item.href ? <ArrowLink href={item.href}>Agriculture Translation Services</ArrowLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell lifecycle-section">
        <div className="container">
          <SectionHeading
            eyebrow="FROM RESEARCH TO COMMERCIALIZATION"
            title="Translation Across the Biotechnology Lifecycle"
            intro="Biotechnology translation requirements change as a technology advances. Stepes supports multilingual scientific, regulated, technical, operational, and commercial content from early discovery through long-term global growth."
          />
          <div className="lifecycle-list">
            {lifecycle.map((item, index) => (
              <article className="lifecycle-row" key={item.title}>
                <div className="lifecycle-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="lifecycle-body"><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
          <div className="link-cluster">
            <ArrowLink href={links.clinicalStudy}>Clinical Study Translation Services</ArrowLink>
            <ArrowLink href={links.lifeSciences}>Life Sciences Translation Services</ArrowLink>
            <ArrowLink href={links.manufacturing}>Manufacturing Translation Services</ArrowLink>
            <ArrowLink href={links.patent}>Patent Translation Services</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section-shell content-section">
        <div className="container">
          <SectionHeading
            title="Biotechnology Content We Translate"
            intro="Stepes supports scientific, regulated, technical, operational, legal, and commercial biotechnology content across departments and development stages."
          />
          <div className="content-grid">
            {contentGroups.map((group) => (
              <article className="content-group" key={group.title}>
                <div className="content-title"><Icon name={group.icon}/><h3>{group.title}</h3></div>
                <ul>{group.items.map((x) => <li key={x}>{x}</li>)}</ul>
                {group.href ? <ArrowLink href={group.href}>{group.title === "Intellectual Property & Legal" ? "Patent Translation Services" : group.title === "Manufacturing & Quality" ? "Manufacturing Translation Services" : "Technical Translation Services"}</ArrowLink> : null}
              </article>
            ))}
          </div>
          <div className="center-action"><ArrowLink href={links.contact}>Discuss Your Biotechnology Project</ArrowLink></div>
        </div>
      </section>

      <section className="section-shell precision-section">
        <div className="container split-editorial">
          <div className="sticky-copy">
            <h2>Scientific Precision From the Lab to the Global Market</h2>
            <p>Biotechnology language is dense with specialized terminology, scientific notation, abbreviations, measurements, and context-dependent meaning. A term that appears straightforward in isolation may carry a very specific meaning within a biological pathway, assay, manufacturing process, therapeutic platform, or regulatory document.</p>
          </div>
          <div className="editorial-list">
            {scientificPrecision.map((item) => (
              <article className="editorial-row" key={item.title}>
                <div className="icon-box small"><Icon name={item.icon}/></div>
                <div><h3>{item.title}</h3><p>{item.copy}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell term-section">
        <div className="container term-grid">
          <div>
            <div className="eyebrow">TERMINOLOGY GOVERNANCE</div>
            <h2>One Biotechnology Vocabulary Across Every Team and Market</h2>
            <p>Scientific terminology does not belong to one department. A term introduced by an R&D team may later appear in a patent, regulatory submission, manufacturing SOP, clinical document, training program, partner presentation, product website, and commercial campaign.</p>
            <p>Stepes helps biotechnology organizations create reusable multilingual language assets so approved terminology can follow the science instead of drifting from project to project.</p>
            <div className="term-benefits">
              <div><strong>Terminology Management</strong><span>Approved scientific terms, product and platform names, gene and protein terminology, process language, preferred translations, and do-not-translate terms.</span></div>
              <div><strong>Translation Memory</strong><span>Previously translated and approved content can be reused across recurring documentation, updates, manufacturing procedures, regulatory revisions, training, and global product content.</span></div>
              <div><strong>Reviewer Knowledge</strong><span>Approved decisions from scientists, quality teams, regulatory experts, and local reviewers can become reusable language resources for future projects.</span></div>
            </div>
            <div className="link-cluster left-links">
              <ArrowLink href={links.terminology}>Terminology Management</ArrowLink>
              <ArrowLink href={links.translationMemory}>Translation Memory</ArrowLink>
            </div>
          </div>
          <TerminologyVisual/>
        </div>
      </section>

      <section className="section-shell change-section">
        <div className="container change-grid">
          <DiffVisual/>
          <div className="change-copy">
            <div className="eyebrow">VERSION INTELLIGENCE</div>
            <h2>Biotechnology Content Changes as the Science Evolves</h2>
            <p>Research findings evolve. Protocols change. Assays are refined. Processes are optimized. Regulatory authorities provide feedback. Manufacturing scales or moves sites. Product specifications change. New applications and indications emerge.</p>
            <p>Stepes uses translation memory, file analysis, terminology resources, and workflow technology to distinguish between approved content and material that has changed.</p>
            <div className="quiet-points">
              <div><strong>Reuse what is already approved.</strong><span>Unchanged content can draw from existing translations instead of being recreated unnecessarily.</span></div>
              <div><strong>Focus on what changed.</strong><span>New or revised source content can be routed for the appropriate translation and review workflow.</span></div>
              <div><strong>Preserve terminology across versions.</strong><span>Approved scientific and product terminology remains available as documentation evolves.</span></div>
              <div><strong>Reduce rework across global updates.</strong><span>Efficient reuse helps teams maintain recurring protocols, SOPs, product content, training, and websites.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell workflow-section">
        <div className="container">
          <SectionHeading
            eyebrow="RISK-APPROPRIATE WORKFLOWS"
            title="The Right Translation Workflow for Every Biotechnology Content Type"
            intro="A biotechnology patent, manufacturing SOP, research presentation, clinical document, investor deck, and website do not carry the same linguistic risk or serve the same audience. Stepes aligns translation technology, human expertise, review, and QA to the content's purpose, complexity, audience, and regulatory sensitivity."
          />
          <div className="workflow-matrix">
            {workflows.map((workflow) => (
              <article className="workflow-row" key={workflow.level}>
                <div className="workflow-name"><h3>{workflow.level}</h3><p>{workflow.examples}</p></div>
                <div className="workflow-flow">
                  {workflow.flow.map((step, idx) => <React.Fragment key={step}><span className="flow-step">{step}</span>{idx < workflow.flow.length - 1 ? <span className="flow-arrow" aria-hidden="true">→</span> : null}</React.Fragment>)}
                </div>
              </article>
            ))}
          </div>
          <p className="workflow-note">The technology is selected around the content, not the other way around.</p>
        </div>
      </section>

      <section className="section-shell dark-section ai-section">
        <div className="container ai-grid">
          <div className="ai-copy">
            <h2>AI-Powered Biotechnology Translation With Expert Human Oversight</h2>
            <p>AI is changing how multilingual content can be analyzed, translated, and reviewed. For biotechnology organizations, however, speed must be balanced with scientific accuracy, terminology control, confidentiality, and content risk.</p>
            <p>Stepes combines AI-powered translation technology with professional biotechnology linguists so automation is used where it adds value while expert human judgment remains where it matters.</p>
            <p className="ai-governance">AI use can be aligned with your content, confidentiality, and governance requirements, with human-only or controlled workflows available where required.</p>
            <ArrowLink href={links.security} className="dark-link">Security &amp; Compliance</ArrowLink>
            <blockquote>AI accelerates the workflow. Biotechnology expertise protects the science.</blockquote>
          </div>
          <div className="ai-columns">
            <article><h3>AI and Automation Can Help With</h3><ul><li>Translation memory matching</li><li>Repeated-content identification</li><li>Terminology extraction</li><li>Change detection</li><li>First-pass translation for appropriate content</li><li>Consistency analysis</li><li>Automated linguistic QA</li><li>High-volume processing</li></ul></article>
            <article><h3>Biotechnology Experts Remain Essential For</h3><ul><li>Scientific interpretation</li><li>Ambiguous terminology</li><li>Novel technologies</li><li>Complex biological mechanisms</li><li>High-risk regulated content</li><li>Context-dependent terminology</li><li>Client-specific scientific language</li><li>Final quality decisions</li></ul></article>
          </div>
        </div>
      </section>

      <section className="section-shell linguist-section">
        <div className="container linguist-grid">
          <div>
            <h2>Biotechnology Linguists With the Right Scientific Expertise</h2>
            <p>Biotechnology translation should not be assigned solely because a translator speaks the required languages. A genomic sequencing manuscript requires different subject knowledge from a bioreactor SOP, crop biotechnology patent, immunology report, molecular diagnostic assay, or investor presentation.</p>
            <p>Stepes selects professional linguists based on language qualifications, relevant subject-matter experience, content type, audience, target market, demonstrated quality performance, client terminology, and required review workflow.</p>
          </div>
          <div className="expertise-cloud">
            {["Molecular Biology","Genetics & Genomics","Cell Biology","Biochemistry","Microbiology","Immunology","Pharmacology","Bioengineering","Bioprocessing","Chemistry","Diagnostics","Clinical Research","Regulatory Affairs","Quality Management","Biomanufacturing","Agriculture & Plant Science"].map((x) => <span key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section-shell quality-section">
        <div className="container">
          <SectionHeading
            eyebrow="QUALITY BY DESIGN"
            title="Quality Built Into the Biotechnology Translation Process"
            intro="Quality is more reliable when it is built into the workflow from the beginning instead of treated as a final proofreading step. Stepes combines subject-matter matching, terminology, translation memory, review, automated checks, and production QA to support scientific and regulated multilingual content."
          />
          <div className="quality-process">
            {qualitySteps.map(([title, copy], index) => (
              <article className="quality-step" key={title}>
                <span className="step-no">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{copy}</p></div>
              </article>
            ))}
          </div>
          <div className="iso-note"><strong>ISO-certified quality processes</strong><span>Stepes is certified to ISO 17100, ISO 9001:2015, and ISO 13485:2016, supporting disciplined quality management for scientific and regulated multilingual content.</span></div>
        </div>
      </section>

      <section className="section-shell deliverable-section">
        <div className="container deliverable-grid">
          <div>
            <div className="eyebrow">MULTILINGUAL PRODUCTION</div>
            <h2>Preserve the Scientific Deliverable, Not Just the Translation</h2>
            <p>Biotechnology documents carry more than words. Scientific reports, presentations, regulatory documents, manufacturing procedures, and product materials can contain tables, figures, charts, labels, annotations, scientific notation, structured data, and complex formatting.</p>
            <p>Stepes combines translation, file engineering, multilingual desktop publishing, graphics localization, formatting, and final production QA to help preserve the structure and usability of the complete scientific deliverable.</p>
            <div className="format-groups">
              <div><strong>Documents</strong><span>DOCX · PDF · RTF · TXT</span></div>
              <div><strong>Presentations & Data</strong><span>PPTX · XLSX</span></div>
              <div><strong>Professional Design</strong><span>Adobe InDesign · Illustrator</span></div>
              <div><strong>Structured & Digital</strong><span>XML · HTML · JSON · Software Strings</span></div>
            </div>
            <div className="link-cluster left-links"><ArrowLink href={links.dtp}>Multilingual Desktop Publishing</ArrowLink><ArrowLink href={links.fileFormats}>Translation File Format Support</ArrowLink></div>
          </div>
          <FileVisual/>
        </div>
      </section>

      <section className="section-shell language-section">
        <div className="container">
          <SectionHeading
            title="Biotechnology Translation in 100+ Languages"
            intro="Biotechnology innovation is global. Research may take place in one country, clinical development in another, manufacturing across several regions, and commercialization in markets around the world. Stepes supports more than 100 languages and regional variants through one connected workflow."
          />
          <div className="language-grid">
            <article><h3>Europe</h3><p>French · German · Italian · Spanish · Portuguese · Dutch · Polish · Czech · Danish · Swedish · Norwegian · Finnish · Greek · Romanian · Hungarian · Ukrainian</p></article>
            <article><h3>Asia Pacific</h3><p>Simplified Chinese · Traditional Chinese · Japanese · Korean · Vietnamese · Thai · Indonesian · Malay · Hindi · Bengali · Tamil and more</p></article>
            <article><h3>Americas</h3><p>Spanish · Latin American Spanish · Brazilian Portuguese · Canadian French · Canadian English and other regional language requirements</p></article>
            <article><h3>Middle East, Africa & Additional Markets</h3><p>Arabic · Hebrew · Turkish · Persian · Swahili · Afrikaans and many more</p></article>
          </div>
        </div>
      </section>

      <section className="section-shell organization-section">
        <div className="container">
          <SectionHeading
            eyebrow="ORGANIZATION FIT"
            title="Built for Biotechnology Organizations at Every Stage"
            intro="Multilingual requirements can begin long before a biotechnology product is commercialized. Stepes supports organizations from early scientific innovation through mature global operations."
          />
          <div className="organization-list">
            {organizationTypes.map(([icon, title, copy]) => (
              <article className="organization-row" key={title}><div className="icon-box"><Icon name={icon}/></div><div><h3>{title}</h3><p>{copy}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="trusted-band">
        <div className="container trusted-grid">
          <div><h2>Trusted Across Biotechnology and Life Sciences</h2><p>Stepes supports biotechnology and life sciences organizations with scientific translation, multilingual production, terminology management, and enterprise localization technology.</p></div>
          <div className="logo-wordmarks" aria-label="Biotechnology and life sciences customer logos">
            {["IUPAC","Abbott","Syngenta","Gilead","BioLife Solutions","NIBSC"].map((logo) => <span key={logo}>{logo}</span>)}
          </div>
        </div>
      </section>

      <section className="section-shell reasons-section">
        <div className="container">
          <SectionHeading title="Why Biotechnology Organizations Choose Stepes" intro="Biotechnology companies need language partners that can understand the science today and support the content as it evolves tomorrow." />
          <div className="reasons-grid">
            {reasons.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell related-section">
        <div className="container">
          <SectionHeading eyebrow="CONNECTED EXPERTISE" title="Related Biotechnology & Life Sciences Translation Services" intro="Biotechnology content frequently overlaps with other scientific, regulated, technical, and manufacturing disciplines. Explore related Stepes expertise for specialized multilingual requirements." />
          <div className="related-list">
            {relatedServices.map(([title, copy, href]) => <article key={title}><div><h3>{title}</h3><p>{copy}</p></div><ArrowLink href={href}>Explore {title}</ArrowLink></article>)}
          </div>
        </div>
      </section>

      <section className="section-shell faq-section">
        <div className="container faq-grid">
          <div className="faq-heading"><h2>Questions About Biotechnology Translation</h2><p>Find answers about biotechnology documents, specialist linguists, terminology, AI-assisted workflows, biomanufacturing, file formats, and language coverage.</p></div>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const open = openFaq === index;
              return <article className={`faq-item ${open ? "open" : ""}`} key={faq.q}>
                <button onClick={() => setOpenFaq(open ? -1 : index)} aria-expanded={open}>
                  <span>{faq.q}</span><span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
                </button>
                {open ? <div className="faq-answer"><p>{faq.a}</p></div> : null}
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container cta-grid">
          <div><h2>Take Your Biotechnology Innovation Global</h2><p>From early research and intellectual property to clinical development, regulatory submissions, biomanufacturing, and commercialization, Stepes helps biotechnology organizations keep complex scientific content accurate and connected across languages and markets.</p></div>
          <div className="cta-actions"><a className="btn btn-light" href={links.quote}>Get a Translation Quote <span aria-hidden="true">→</span></a><a className="cta-text-link" href={links.contact}>Talk to Our Biotechnology Team <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  :root {
    --magenta: #C11D63;
    --magenta-dark: #A71954;
    --burgundy: #7A1542;
    --blush: #FDF2F7;
    --dark-magenta: #F2A7C6;
    --ink: #171A21;
    --text: #40444F;
    --muted: #686E7A;
    --line: #E3E5EA;
    --soft: #F6F7F9;
    --panel: #FFFFFF;
    --dark: #171A21;
  }
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { margin: 0; }
  .stepes-page { font-family: "Inter Tight", "Inter", Arial, sans-serif; color: var(--ink); background: #fff; overflow: hidden; }
  .stepes-page a { color: inherit; overflow-wrap: anywhere; }
  .stepes-page p, .stepes-page li, .stepes-page h1, .stepes-page h2, .stepes-page h3, .stepes-page span, .stepes-page strong { overflow-wrap: break-word; }
  .container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
  .section-shell { padding: 96px 0; }
  .soft-section, .language-section { background: var(--soft); }
  .eyebrow { color: var(--magenta); font-size: 11px; line-height: 1.35; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
  h1, h2, h3, p { margin-top: 0; }
  h1, h2, h3 { font-weight: 600; letter-spacing: -.025em; }
  h1 { font-size: 48px; line-height: 1.04; margin-bottom: 18px; }
  h2 { font-size: 36px; line-height: 1.12; margin-bottom: 20px; }
  h3 { font-size: 24px; line-height: 1.18; margin-bottom: 10px; }
  p, li { font-size: 16px; line-height: 1.72; color: var(--text); }
  .section-heading { max-width: 860px; margin: 0 auto 52px; }
  .section-heading.center { text-align: center; }
  .section-heading.left { margin-left: 0; text-align: left; }
  .section-intro { max-width: 820px; margin: 0 auto; font-size: 18px; line-height: 1.65; }
  .section-heading.left .section-intro { margin-left: 0; }
  .btn { min-height: 48px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; border-radius: 999px; padding: 12px 22px; font-size: 16px; line-height: 1; font-weight: 600; text-decoration: none; transition: .2s ease; border: 1px solid transparent; }
  .btn-primary, .btn-primary:visited { background: var(--magenta); color: #fff !important; }
  .btn-primary:hover, .btn-primary:focus-visible { background: var(--magenta-dark); color: #fff !important; transform: translateY(-1px); }
  .btn-primary *, .btn-primary:visited * { color: #fff !important; }
  .btn-secondary { background: #fff; border-color: #D5D8DE; color: var(--ink); }
  .btn-secondary:hover, .btn-secondary:focus-visible { border-color: #B5BAC4; background: #FAFAFB; }
  .arrow-link { display: inline-flex; align-items: center; min-height: 44px; gap: 7px; color: var(--magenta) !important; font-size: 16px; line-height: 1.4; font-weight: 600; text-decoration: none; }
  .arrow-link span { transition: transform .2s ease; }
  .arrow-link:hover span, .arrow-link:focus-visible span { transform: translate(2px,-2px); }
  a:focus-visible, button:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }

  .hero { padding-top: 104px; padding-bottom: 96px; }
  .hero-grid { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(460px, .95fr); gap: 60px; align-items: center; }
  .hero-copy { max-width: 700px; }
  .hero-subhead { font-size: 27px; line-height: 1.22; color: #30343D; margin-bottom: 22px; }
  .hero-copy p { font-size: 18px; line-height: 1.68; max-width: 680px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .hero-visual { display: flex; justify-content: flex-end; align-items: center; }
  .hero-art { width: 100%; max-width: 600px; height: auto; }

  .proof-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .proof-grid { min-height: 86px; display: grid; grid-template-columns: repeat(6, 1fr); align-items: stretch; }
  .proof-item { display: flex; align-items: center; justify-content: center; text-align: center; padding: 20px 14px; font-size: 16px; line-height: 1.3; font-weight: 600; color: #3A3E47; border-right: 1px solid var(--line); }
  .proof-item:last-child { border-right: 0; }

  .connected-section { background: #fff; }
  .connected-visual { position: relative; display: grid; grid-template-columns: repeat(6,1fr); gap: 12px; margin: 12px 0 36px; padding: 30px 16px; }
  .connected-track { position: absolute; left: 9%; right: 9%; top: 57px; height: 2px; background: #E1E3E8; }
  .connected-stage { position: relative; z-index: 1; text-align: center; font-size: 16px; font-weight: 600; color: #363B45; }
  .connected-icon { width: 56px; height: 56px; margin: 0 auto 14px; border-radius: 50%; display: grid; place-items: center; color: var(--magenta); background: #fff; border: 1px solid #DADDE4; box-shadow: 0 6px 18px rgba(30,34,45,.06); }
  .connected-copy-grid { max-width: 980px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 48px; border-top: 1px solid var(--line); padding-top: 30px; }
  .connected-copy-grid p { margin-bottom: 0; }

  .expertise-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .expertise-item { min-width: 0; padding: 30px 26px 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: rgba(255,255,255,.64); }
  .icon-box { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 16px; color: var(--magenta); background: var(--blush); margin-bottom: 20px; }
  .icon-box.small { width: 44px; height: 44px; border-radius: 14px; margin: 0; }
  .expertise-item h3 { font-size: 21px; }
  .expertise-item p { margin-bottom: 15px; }

  .lifecycle-list { border-top: 1px solid var(--line); }
  .lifecycle-row { display: grid; grid-template-columns: 86px minmax(0,1fr); gap: 26px; padding: 30px 8px; border-bottom: 1px solid var(--line); align-items: start; }
  .lifecycle-number { color: var(--magenta); font-size: 16px; font-weight: 600; padding-top: 4px; }
  .lifecycle-body { display: grid; grid-template-columns: minmax(230px,.72fr) minmax(0,1.28fr); gap: 38px; }
  .lifecycle-body h3 { margin: 0; }
  .lifecycle-body p { margin: 0; max-width: 720px; }
  .link-cluster { display: flex; flex-wrap: wrap; gap: 26px; justify-content: center; margin-top: 34px; }
  .left-links { justify-content: flex-start; }

  .content-section { background: #fff; }
  .content-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .content-group { padding: 30px 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .content-title { display: flex; align-items: center; gap: 12px; color: var(--magenta); margin-bottom: 18px; }
  .content-title h3 { color: var(--ink); font-size: 21px; margin: 0; }
  .content-group ul { list-style: none; padding: 0; margin: 0 0 18px; display: grid; gap: 9px; }
  .content-group li { position: relative; padding-left: 17px; color: var(--text); }
  .content-group li:before { content: ""; position: absolute; width: 5px; height: 5px; border-radius: 50%; background: #B6BBC4; left: 0; top: .68em; }
  .center-action { text-align: center; margin-top: 32px; }

  .precision-section { background: #F9FAFB; }
  .split-editorial { display: grid; grid-template-columns: .88fr 1.12fr; gap: 80px; align-items: start; }
  .sticky-copy { position: sticky; top: 32px; }
  .sticky-copy p { font-size: 18px; line-height: 1.68; max-width: 560px; }
  .editorial-list { border-top: 1px solid var(--line); }
  .editorial-row { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 20px; padding: 26px 0; border-bottom: 1px solid var(--line); }
  .editorial-row h3 { font-size: 21px; margin-bottom: 8px; }
  .editorial-row p { margin: 0; }

  .term-section { background: var(--blush); }
  .term-grid { display: grid; grid-template-columns: 1fr .9fr; gap: 76px; align-items: center; }
  .term-grid > div:first-child > p { max-width: 680px; }
  .term-benefits { border-top: 1px solid #E8CFDA; margin-top: 26px; }
  .term-benefits > div { display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 24px; padding: 20px 0; border-bottom: 1px solid #E8CFDA; }
  .term-benefits strong { font-size: 16px; line-height: 1.5; }
  .term-benefits span { font-size: 16px; line-height: 1.62; color: var(--text); }
  .term-visual { position: relative; width: 100%; max-width: 470px; min-height: 390px; margin-left: auto; }
  .term-visual svg { position: absolute; inset: 0; width: 100%; height: 100%; }
  .term-core { position: absolute; z-index: 2; left: 50%; top: 50%; transform: translate(-50%,-50%); width: 180px; height: 180px; border-radius: 50%; background: #fff; border: 1px solid #E1BACB; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 0 16px 40px rgba(92,34,60,.08); text-align: center; }
  .term-core strong { font-size: 26px; margin: 5px 0; }
  .term-core span:last-child { font-size: 14px; color: var(--muted); }
  .term-kicker { color: var(--magenta); font-size: 14px; letter-spacing: .12em; font-weight: 600; }
  .term-node { position: absolute; z-index: 2; min-width: 94px; padding: 12px 14px; border-radius: 999px; background: #fff; border: 1px solid #E1BACB; text-align: center; font-size: 16px; font-weight: 600; color: #4C3440; }
  .node-1 { left: 0; top: 28px; }.node-2 { right: 0; top: 30px; }.node-3 { right: -2px; top: 160px; }.node-4 { right: 24px; bottom: 16px; }.node-5 { left: 26px; bottom: 16px; }.node-6 { left: -4px; top: 160px; }

  .change-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 76px; align-items: center; }
  .diff-panel { border-radius: 28px; border: 1px solid var(--line); background: #fff; padding: 24px; box-shadow: 0 18px 44px rgba(28,31,41,.07); }
  .diff-top { display: flex; justify-content: space-between; gap: 20px; align-items: center; padding-bottom: 20px; border-bottom: 1px solid var(--line); font-size: 16px; font-weight: 600; }
  .status-pill { padding: 8px 12px; border-radius: 999px; background: var(--blush); color: var(--magenta); font-size: 14px; }
  .diff-summary { display: grid; grid-template-columns: repeat(3,1fr); gap: 8px; padding: 22px 0; border-bottom: 1px solid var(--line); }
  .diff-summary div { padding: 10px 12px; }
  .diff-summary strong { display: block; font-size: 24px; margin-bottom: 4px; }
  .diff-summary span { font-size: 16px; color: var(--muted); }
  .diff-doc { display: grid; gap: 10px; padding: 26px 8px; }
  .diff-line { height: 9px; border-radius: 999px; background: #E6E8EC; width: 100%; }
  .diff-line.short { width: 64%; }.diff-line.medium { width: 82%; }
  .diff-line.changed { background: #F3D4E0; }.diff-line.new { background: #D9E6F7; }
  .diff-legend { display: flex; gap: 18px; flex-wrap: wrap; font-size: 14px; color: var(--muted); }
  .diff-legend span { display: inline-flex; gap: 7px; align-items: center; }
  .diff-legend i { width: 10px; height: 10px; border-radius: 50%; background: #E6E8EC; }.diff-legend i.changed { background: #F3D4E0; }.diff-legend i.new { background: #D9E6F7; }
  .change-copy p { max-width: 650px; }
  .quiet-points { border-top: 1px solid var(--line); margin-top: 26px; }
  .quiet-points > div { padding: 17px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 210px minmax(0,1fr); gap: 24px; }
  .quiet-points strong, .quiet-points span { font-size: 16px; line-height: 1.55; }
  .quiet-points span { color: var(--text); }

  .workflow-section { background: #F8F9FB; }
  .workflow-matrix { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
  .workflow-row { display: grid; grid-template-columns: .85fr 1.55fr; gap: 26px; padding: 30px; border-bottom: 1px solid var(--line); align-items: center; }
  .workflow-row:last-child { border-bottom: 0; }
  .workflow-name h3 { font-size: 21px; margin-bottom: 8px; }
  .workflow-name p { margin: 0; }
  .workflow-flow { display: flex; align-items: center; justify-content: flex-end; gap: 10px; flex-wrap: nowrap; }
  .flow-step { min-height: 46px; flex: 1 1 0; display: flex; align-items: center; justify-content: center; padding: 10px 12px; border-radius: 14px; border: 1px solid #DDE0E6; background: #FBFBFC; text-align: center; font-size: 16px; line-height: 1.3; font-weight: 600; color: #3E434D; }
  .flow-arrow { color: #A6ABB4; flex: 0 0 auto; }
  .workflow-note { text-align: center; margin: 24px 0 0; font-weight: 600; color: #4A4F59; }

  .dark-section { background: var(--dark); color: #fff; }
  .dark-section h2, .dark-section h3 { color: #fff; }
  .dark-section p, .dark-section li { color: #D0D3DA; }
  .ai-grid { display: grid; grid-template-columns: .9fr 1.1fr; gap: 72px; align-items: start; }
  .ai-copy p { font-size: 18px; line-height: 1.66; }
  .ai-copy blockquote { margin: 28px 0 0; padding: 21px 0 0; border-top: 2px solid var(--magenta); font-size: 22px; line-height: 1.45; font-weight: 600; color: #fff; }
  .ai-governance { margin-bottom: 12px; }
  .dark-link { color: #F2A7C6 !important; }
  .dark-link:hover, .dark-link:focus-visible { color: #FFFFFF !important; }
  .ai-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
  .ai-columns article { border: 1px solid #363A44; border-radius: 22px; padding: 26px; background: #1E222A; }
  .ai-columns h3 { font-size: 20px; }
  .ai-columns ul { margin: 18px 0 0; padding-left: 19px; }
  .ai-columns li { margin-bottom: 8px; }

  .linguist-grid { display: grid; grid-template-columns: .95fr 1.05fr; gap: 70px; align-items: center; }
  .linguist-grid p { max-width: 650px; }
  .expertise-cloud { display: flex; flex-wrap: wrap; align-content: center; gap: 10px; padding: 30px; border-radius: 28px; border: 1px solid var(--line); background: #FAFAFB; }
  .expertise-cloud span { font-size: 16px; line-height: 1.3; font-weight: 600; color: #454A54; border: 1px solid #DDE0E5; border-radius: 999px; background: #fff; padding: 11px 14px; }

  .quality-section { background: #F8F9FB; }
  .quality-process { display: grid; grid-template-columns: repeat(3,1fr); border-left: 1px solid var(--line); border-top: 1px solid var(--line); }
  .quality-step { padding: 28px 26px; min-height: 210px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
  .step-no { display: inline-block; color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 23px; }
  .quality-step h3 { font-size: 21px; }
  .quality-step p { margin: 0; }
  .iso-note { display: grid; grid-template-columns: 260px minmax(0,1fr); gap: 25px; margin-top: 26px; padding: 22px 0; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .iso-note strong, .iso-note span { font-size: 16px; line-height: 1.6; }.iso-note span { color: var(--text); }

  .deliverable-grid { display: grid; grid-template-columns: 1.05fr .95fr; gap: 76px; align-items: center; }
  .deliverable-grid p { max-width: 680px; }
  .format-groups { margin-top: 28px; border-top: 1px solid var(--line); }
  .format-groups > div { display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 24px; padding: 15px 0; border-bottom: 1px solid var(--line); }
  .format-groups strong, .format-groups span { font-size: 16px; line-height: 1.5; }.format-groups span { color: var(--text); }
  .file-visual { border-radius: 30px; background: #F7F8FA; border: 1px solid var(--line); padding: 34px; min-height: 430px; display: flex; flex-direction: column; justify-content: center; }
  .file-stack { position: relative; height: 300px; }
  .file-card { position: absolute; width: 72%; min-height: 170px; border-radius: 20px; border: 1px solid #DDE0E5; background: #fff; padding: 22px; box-shadow: 0 16px 32px rgba(25,29,40,.07); }
  .file-card span { color: var(--magenta); font-size: 14px; letter-spacing: .1em; font-weight: 600; }.file-card strong { display: block; margin: 10px 0 20px; font-size: 18px; }
  .file-card i { display: block; width: 88%; height: 8px; border-radius: 999px; background: #E7E9ED; margin: 10px 0; }.file-card i:nth-of-type(2) { width: 68%; }.file-card i:nth-of-type(3) { width: 78%; }
  .file-a { left: 0; top: 84px; transform: rotate(-4deg); }.file-b { right: 0; top: 18px; transform: rotate(4deg); }.file-c { left: 18%; top: 62px; z-index: 2; }
  .file-flow { display: grid; grid-template-columns: repeat(4,1fr); gap: 8px; margin-top: 10px; }
  .file-flow span { text-align: center; font-size: 16px; font-weight: 600; color: #555B66; padding-top: 12px; border-top: 2px solid #D9DDE4; }.file-flow span:last-child { border-color: var(--magenta); }

  .language-grid { display: grid; grid-template-columns: repeat(4,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); background: #fff; }
  .language-grid article { padding: 28px 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .language-grid h3 { font-size: 20px; }.language-grid p { margin: 0; }

  .organization-list { display: grid; grid-template-columns: 1fr 1fr; border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .organization-row { display: grid; grid-template-columns: 56px minmax(0,1fr); gap: 18px; padding: 30px 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .organization-row .icon-box { margin: 0; }.organization-row h3 { font-size: 21px; }.organization-row p { margin: 0; }

  .trusted-band { padding: 76px 0; background: #F7F8FA; border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .trusted-grid { display: grid; grid-template-columns: .78fr 1.22fr; gap: 66px; align-items: center; }
  .trusted-grid h2 { font-size: 32px; }.trusted-grid p { margin: 0; max-width: 520px; }
  .logo-wordmarks { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; }
  .logo-wordmarks span { min-height: 74px; display: flex; align-items: center; justify-content: center; padding: 18px; border: 1px solid #DFE2E7; border-radius: 18px; background: #fff; color: #606672; font-size: 17px; font-weight: 600; text-align: center; }

  .reasons-grid { display: grid; grid-template-columns: repeat(3,1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
  .reasons-grid article { padding: 28px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
  .reasons-grid h3 { font-size: 21px; }.reasons-grid p { margin: 0; }

  .related-section { background: #F9FAFB; }
  .related-list { border-top: 1px solid var(--line); }
  .related-list article { display: grid; grid-template-columns: minmax(0,1fr) 290px; gap: 40px; align-items: center; padding: 24px 4px; border-bottom: 1px solid var(--line); }
  .related-list h3 { font-size: 20px; margin-bottom: 6px; }.related-list p { margin: 0; max-width: 760px; }.related-list .arrow-link { justify-self: end; text-align: right; }

  .faq-grid { display: grid; grid-template-columns: .7fr 1.3fr; gap: 74px; align-items: start; }
  .faq-heading { position: sticky; top: 30px; }.faq-heading p { font-size: 18px; line-height: 1.66; }
  .faq-list { border-top: 1px solid var(--line); }
  .faq-item { border-bottom: 1px solid var(--line); }
  .faq-item button { width: 100%; min-height: 72px; padding: 20px 0; border: 0; background: transparent; display: flex; align-items: center; justify-content: space-between; gap: 28px; text-align: left; color: var(--ink); cursor: pointer; font-family: inherit; font-size: 18px; line-height: 1.42; font-weight: 600; }
  .faq-plus { flex: 0 0 34px; width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #D6D9DF; color: var(--magenta); }
  .faq-answer { padding: 0 54px 22px 0; }.faq-answer p { margin: 0; max-width: 820px; }

  .final-cta { background: var(--burgundy); color: #fff; padding: 78px 0; }
  .cta-grid { display: grid; grid-template-columns: 1fr auto; gap: 70px; align-items: center; }
  .final-cta h2 { color: #fff; margin-bottom: 14px; }.final-cta p { color: #F2DDE6; max-width: 780px; margin: 0; font-size: 18px; line-height: 1.65; }
  .cta-actions { display: flex; flex-direction: column; align-items: flex-start; gap: 16px; min-width: 245px; }
  .btn-light, .btn-light:visited { background: #fff; color: var(--burgundy) !important; }
  .btn-light:hover, .btn-light:focus-visible { background: #FFF7FA; color: var(--burgundy) !important; transform: translateY(-1px); }
  .cta-text-link { min-height: 44px; display: inline-flex; align-items: center; color: #fff !important; text-decoration: none; font-size: 16px; font-weight: 600; }

  @media (max-width: 1100px) {
    .container { width: min(1280px, calc(100% - 80px)); }
    .hero-grid { grid-template-columns: 1fr .82fr; gap: 36px; }
    .hero-art { max-width: 520px; }
    .proof-grid { grid-template-columns: repeat(3,1fr); }
    .proof-item:nth-child(3) { border-right: 0; }.proof-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
    .expertise-grid { grid-template-columns: repeat(2,1fr); }
    .content-grid { grid-template-columns: repeat(2,1fr); }
    .language-grid { grid-template-columns: repeat(2,1fr); }
    .workflow-row { grid-template-columns: 1fr; }
    .workflow-flow { justify-content: flex-start; }
    .ai-grid { grid-template-columns: 1fr; }
    .ai-columns { max-width: 900px; }
    .quality-process { grid-template-columns: repeat(2,1fr); }
    .trusted-grid { grid-template-columns: 1fr; }
    .logo-wordmarks { max-width: 820px; }
  }

  @media (max-width: 820px) {
    .container { width: calc(100% - 48px); }
    .section-shell { padding: 76px 0; }
    h1 { font-size: 42px; }.hero-subhead { font-size: 25px; } h2 { font-size: 32px; }
    .hero { padding-top: 84px; padding-bottom: 78px; }
    .hero-grid, .term-grid, .change-grid, .linguist-grid, .deliverable-grid, .faq-grid { grid-template-columns: 1fr; }
    .hero-copy { max-width: 760px; text-align: center; margin: 0 auto; }.hero-copy p { margin-left: auto; margin-right: auto; }.hero-actions { justify-content: center; }
    .hero-visual { justify-content: center; }.hero-art { max-width: 560px; }
    .connected-visual { grid-template-columns: repeat(3,1fr); row-gap: 28px; }.connected-track { display: none; }
    .connected-copy-grid { grid-template-columns: 1fr; gap: 18px; }
    .section-heading { margin-bottom: 42px; }.section-heading.center { text-align: center; }
    .split-editorial { grid-template-columns: 1fr; gap: 38px; }.sticky-copy { position: static; text-align: left; }.sticky-copy h2 { text-align: center; }.sticky-copy p { margin-left: auto; margin-right: auto; text-align: left; }
    .term-grid > div:first-child { text-align: left; }.term-grid > div:first-child > .eyebrow, .term-grid > div:first-child > h2 { text-align: center; }.term-grid > div:first-child > p { margin-left: auto; margin-right: auto; text-align: left; }.term-benefits, .term-grid .left-links { text-align: left; }.term-grid .left-links { justify-content: flex-start; }
    .term-visual { margin: 16px auto 0; }
    .change-copy { text-align: left; }.change-copy > .eyebrow, .change-copy > h2 { text-align: center; }.change-copy p { margin-left: auto; margin-right: auto; text-align: left; }.quiet-points { text-align: left; }
    .ai-copy { text-align: left; }.ai-copy > h2 { text-align: center; }.ai-copy blockquote { max-width: 650px; margin-left: auto; margin-right: auto; text-align: left; }
    .linguist-grid > div:first-child { text-align: left; }.linguist-grid > div:first-child > h2 { text-align: center; }.linguist-grid > div:first-child p { margin-left: auto; margin-right: auto; text-align: left; }
    .deliverable-grid > div:first-child { text-align: left; }.deliverable-grid > div:first-child > .eyebrow, .deliverable-grid > div:first-child > h2 { text-align: center; }.deliverable-grid > div:first-child p { margin-left: auto; margin-right: auto; text-align: left; }.format-groups { text-align: left; }.deliverable-grid .left-links { justify-content: flex-start; }
    .faq-heading { position: static; text-align: left; }.faq-heading h2, .faq-heading p { text-align: left; }
    .cta-grid { grid-template-columns: 1fr; gap: 30px; text-align: center; }.cta-actions { align-items: center; min-width: 0; }.final-cta p { margin: 0 auto; }
    .related-list article { grid-template-columns: 1fr; gap: 12px; }.related-list .arrow-link { justify-self: start; text-align: left; }
    .organization-list { grid-template-columns: 1fr; }
    .reasons-grid { grid-template-columns: repeat(2,1fr); }
  }

  @media (max-width: 620px) {
    .container { width: calc(100% - 40px); }
    .section-shell { padding: 68px 0; }
    .hero { padding-top: 72px; padding-bottom: 64px; }
    h1 { font-size: 38px; line-height: 1.06; }.hero-subhead { font-size: 23px; } h2 { font-size: 30px; } h3 { font-size: 20px; }
    .hero-copy p, .section-intro, .sticky-copy p, .ai-copy p, .faq-heading p, .final-cta p { font-size: 17px; }
    .hero-actions { flex-direction: column; }.hero-actions .btn { width: 100%; min-height: 52px; }
    .hero-visual { margin-top: 4px; }.hero-art { width: 100%; max-width: 560px; }
    .proof-grid { grid-template-columns: repeat(2,1fr); }.proof-item { min-height: 68px; border-bottom: 1px solid var(--line); }.proof-item:nth-child(2n) { border-right: 0; }.proof-item:nth-child(5), .proof-item:nth-child(6) { border-bottom: 0; }
    .connected-visual { grid-template-columns: repeat(2,1fr); padding: 12px 0 20px; }
    .expertise-grid, .content-grid, .language-grid, .quality-process, .reasons-grid { grid-template-columns: 1fr; }
    .expertise-item, .content-group, .quality-step, .reasons-grid article, .language-grid article { padding: 25px 22px; }
    .lifecycle-row { grid-template-columns: 44px minmax(0,1fr); gap: 12px; padding: 26px 0; }.lifecycle-body { grid-template-columns: 1fr; gap: 7px; }.lifecycle-number { padding-top: 2px; }
    .link-cluster { flex-direction: column; align-items: flex-start; gap: 14px; }.center-action { text-align: left; }
    .editorial-row { grid-template-columns: 46px minmax(0,1fr); gap: 14px; }
    .term-benefits > div, .quiet-points > div, .format-groups > div, .iso-note { grid-template-columns: 1fr; gap: 6px; }
    .term-visual { min-height: 390px; transform: none; }
    .diff-panel { padding: 18px; }.diff-top { align-items: flex-start; flex-direction: column; }.diff-summary { grid-template-columns: 1fr 1fr 1fr; }.diff-summary div { padding: 8px 4px; }.diff-summary strong { font-size: 20px; }.diff-summary span { font-size: 16px; line-height: 1.25; }
    .workflow-matrix { border-radius: 22px; }.workflow-row { padding: 24px 20px; }.workflow-flow { flex-direction: column; align-items: stretch; }.flow-step { flex: none; min-height: 48px; font-size: 16px; }.flow-arrow { transform: rotate(90deg); align-self: center; }
    .ai-columns { grid-template-columns: 1fr; }.ai-columns article { padding: 24px 22px; }
    .expertise-cloud { padding: 22px; border-radius: 22px; justify-content: center; }.expertise-cloud span { font-size: 16px; }
    .quality-step { min-height: 0; }.iso-note { padding: 20px 0; }
    .file-visual { padding: 22px; min-height: 390px; }.file-card { width: 82%; }.file-a { left: -3%; }.file-b { right: -3%; }.file-c { left: 9%; }.file-flow { grid-template-columns: repeat(2,1fr); gap: 12px 8px; }.file-flow span { font-size: 16px; min-height: 44px; display: flex; align-items: center; justify-content: center; }
    .organization-row { grid-template-columns: 48px minmax(0,1fr); gap: 14px; padding: 25px 20px; }
    .trusted-band { padding: 64px 0; }.trusted-grid > div:first-child { text-align: center; }.trusted-grid p { margin: 0 auto; }.logo-wordmarks { grid-template-columns: repeat(2,1fr); }.logo-wordmarks span { min-height: 64px; font-size: 16px; }
    .faq-item button { min-height: 70px; font-size: 17px; }.faq-answer { padding-right: 0; }.faq-heading { text-align: left; }
    .final-cta { padding: 68px 0; }.cta-actions { width: 100%; }.cta-actions .btn { width: 100%; min-height: 52px; }
  }

  @media (max-width: 340px) {
    .container { width: calc(100% - 40px); }
    .hero-art { width: 100%; }
    .connected-stage span { font-size: 16px; line-height: 1.25; }
    .term-visual { transform: none; min-height: 420px; width: 100%; }
    .term-core { width: 154px; height: 154px; }
    .term-core strong { font-size: 24px; }
    .term-node { min-width: 82px; padding: 10px 8px; font-size: 16px; }
    .node-1 { left: 0; top: 24px; }.node-2 { right: 0; top: 26px; }.node-3 { right: 0; top: 168px; }.node-4 { right: 4px; bottom: 18px; }.node-5 { left: 4px; bottom: 18px; }.node-6 { left: 0; top: 168px; }
    .logo-wordmarks { grid-template-columns: 1fr; }
  }
`;
