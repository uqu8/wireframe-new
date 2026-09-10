export default function SesenCellGeneTherapyPage() {
  const modalities = [
    {
      title: 'Cell Therapies',
      icon: 'cell',
      text:
        'Support for autologous and allogeneic cell therapies, CAR-T, TCR-T, TIL, NK and engineered NK-cell approaches, stem-cell-based therapies, and other specialized cellular platforms.',
    },
    {
      title: 'Gene Therapies',
      icon: 'dna',
      text:
        'Translation for in-vivo and ex-vivo programs involving gene addition or replacement, viral and non-viral delivery, vectors, constructs, target tissues, biodistribution, and immunogenicity.',
    },
    {
      title: 'Genome Editing',
      icon: 'edit',
      text:
        'Specialized language support for CRISPR-based and other editing programs, including editing efficiency, off-target assessment, genome integrity, delivery, and nonclinical evidence.',
    },
    {
      title: 'Engineered Cells',
      icon: 'bridge',
      text:
        'Consistent terminology for genetically modified cells, gene-edited cells, vector-modified cell products, and other platforms where cell therapy and gene engineering converge.',
    },
  ];

  const lifecycle = [
    'Research & Preclinical',
    'CMC & Manufacturing',
    'Clinical Development',
    'Regulatory Submission',
    'Treatment & Patient Communication',
    'Safety & Long-Term Follow-Up',
  ];

  const clinicalGroups = [
    {
      title: 'Study Design & Scientific Documentation',
      items: 'Protocols, amendments, Investigator’s Brochures, scientific content, clinical reports, and statistical documentation.',
    },
    {
      title: 'Site & Treatment Operations',
      items: 'Site manuals, pharmacy and treatment manuals, laboratory instructions, training, and operational communications.',
    },
    {
      title: 'Consent & Patient Participation',
      items: 'ICFs, assent forms, recruitment materials, patient instructions, eConsent, diaries, and ePRO/eCOA content.',
    },
    {
      title: 'Ethics & Local Review',
      items: 'IRB and ethics committee packages, protocol summaries, responses, amendments, and supporting documents.',
    },
  ];

  const cmcGroups = [
    {
      title: 'Product & Process',
      items: 'Product descriptions, starting materials, process-development reports, critical process parameters, and critical quality attributes.',
    },
    {
      title: 'Analytical & Quality Control',
      items: 'Analytical methods, potency assays, specifications, release testing, method validation, characterization, and stability content.',
    },
    {
      title: 'Manufacturing Operations',
      items: 'SOPs, work instructions, batch records, manufacturing instructions, training materials, and technology-transfer content.',
    },
    {
      title: 'Quality Systems & Change Management',
      items: 'Deviations, CAPA, change controls, validation records, quality agreements, comparability, and lifecycle changes.',
    },
  ];

  const preclinicalGroups = [
    {
      title: 'Scientific & Nonclinical Evidence',
      items: 'Research reports, pharmacology and toxicology documentation, biodistribution studies, assay descriptions, scientific protocols, and safety assessments.',
    },
    {
      title: 'Genome-Editing Support Content',
      items: 'Language around editing strategy, targets, delivery, editing efficiency, off-target assessment, genome integrity, and associated analytical evidence.',
    },
  ];

  const safetyGroups = [
    {
      title: 'Safety Documentation',
      items: 'Adverse-event and SAE content, safety narratives, investigator safety communications, risk-management materials, and aggregate safety reports.',
    },
    {
      title: 'Long-Term Follow-Up',
      items: 'Patient follow-up materials, site communications, labeling updates, postapproval safety documentation, and lifecycle content that must remain aligned over time.',
    },
  ];

  const knowledgeBranches = [
    ['Clinical Content', 'Protocols · Investigator materials · ICFs · site content'],
    ['CMC & Manufacturing', 'Processes · assays · specifications · SOPs · quality content'],
    ['Regulatory Content', 'CTD/eCTD · applications · authority responses · labeling'],
    ['Patient & Safety', 'Patient information · treatment materials · safety · follow-up'],
  ];

  const workflows = [
    ['01', 'Program & Content Assessment', 'Confirm document families, languages, markets, audiences, source formats, timelines, and client-review needs.'],
    ['02', 'Specialized Team Assignment', 'Assign linguists and reviewers based on scientific, clinical, CMC, regulatory, safety, or patient-facing content needs.'],
    ['03', 'Terminology Foundation', 'Consolidate product nomenclature, glossaries, translation memory, abbreviations, style guidance, and reference content.'],
    ['04', 'Professional Translation', 'Use the appropriate human-led workflow for content sensitivity, complexity, intended use, and client requirements.'],
    ['05', 'Independent Review & QA', 'Review meaning, terminology, numbers, units, names, abbreviations, completeness, and audience appropriateness.'],
    ['06', 'Formatting & In-Context Review', 'Support formatted documents, labeling, patient materials, digital clinical content, and presentation-sensitive assets.'],
    ['07', 'Delivery & Language Asset Preservation', 'Deliver agreed file formats and preserve approved terminology and translation memory for future reuse.'],
    ['08', 'Lifecycle Updates', 'Support amendments, new markets, health-authority responses, manufacturing changes, labeling revisions, and safety updates.'],
  ];

  const proofPillars = [
    'Life Sciences Specialization',
    'CGT-Aware Language Workflows',
    'Program-Level Terminology Control',
    'Human Expertise + Translation Technology',
    'ISO-Certified Quality Processes',
    '150+ Language Support',
  ];

  const documents = [
    ['Research & Preclinical', 'Research reports · Pharmacology and toxicology · Biodistribution · Safety assessments · Assay documentation · Scientific manuscripts'],
    ['Clinical Development', 'Protocols · Amendments · Investigator’s Brochures · ICFs · CRFs/eCRFs · Site manuals · eCOA/ePRO · CSRs'],
    ['CMC & Manufacturing', 'CMC documentation · Process descriptions · Analytical methods · Potency assays · SOPs · Batch records · Technology transfer'],
    ['Regulatory', 'IND/CTA support · BLA/MAA content · CTD/eCTD modules · Briefing packages · Authority correspondence · Responses'],
    ['Treatment & Patient Communication', 'Collection instructions · Treatment-center materials · Patient information · Caregiver materials · Product information · Digital content'],
    ['Safety & Follow-Up', 'AE/SAE content · Safety narratives · Investigator communications · Risk-management content · Long-term follow-up · Labeling updates'],
  ];

  const faqs = [
    ['What is cell and gene therapy translation?', 'It is specialized language translation for the scientific, clinical, manufacturing, regulatory, patient-facing, and safety content associated with cellular and gene-based therapeutic products. The workflow must preserve product-specific terminology across related documents and long development timelines.'],
    ['Does Sesen support CAR-T and other engineered-cell therapy programs?', 'Yes. Sesen supports multilingual content for CAR-T and broader engineered-cell programs, including autologous and allogeneic approaches, genetically modified cells, gene-edited cells, TCR-based therapies, and other specialized cellular platforms.'],
    ['Can Sesen translate CMC and manufacturing documentation for CGT products?', 'Yes. Sesen translates process descriptions, analytical methods, specifications, potency assays, validation documentation, SOPs, batch records, technology-transfer materials, quality documents, deviations, CAPA, and change controls.'],
    ['Can Sesen support regulatory submissions for CGT products?', 'Yes. Sesen provides language translation for multilingual regulatory content supporting FDA, EMA, PMDA, Health Canada, NMPA, and other health-authority programs. Sesen supports the language layer; regulatory strategy remains with the client and its advisors.'],
    ['What is the difference between CGT translation and genomics translation?', 'Cell and gene therapy translation focuses on therapeutic-product development and lifecycle content. Genomics and precision medicine translation focuses on sequencing, NGS, biomarkers, molecular diagnostics, bioinformatics, genomic research, and genetic testing.'],
    ['Does Sesen use AI or machine translation for CGT content?', 'Sesen uses a human-led, technology-supported approach. Translation memory, terminology tools, automation, and AI-assisted quality checks can improve consistency and scale, while qualified professionals remain responsible for contextual meaning and final linguistic quality.'],
  ];

  return (
    <main className="sesen-cgt-page">
      <style>{`
        .sesen-cgt-page {
          --sesen-blue: #4B6FD8;
          --sesen-blue-dark: #3659BB;
          --sesen-deep-blue: #253F8F;
          --sesen-mid-blue: #6F8BE1;
          --sesen-soft-blue: #EAF0FF;
          --sesen-pale-blue: #F5F7FF;
          --sesen-navy: #17264D;
          --sesen-ink: #111827;
          --sesen-body: #46546D;
          --sesen-muted: #68758B;
          --sesen-border: #DDE4F2;
          --sesen-divider: #E9EEF8;
          --sesen-section: #F7F9FD;
          --sesen-light-on-dark: #C8D6FF;
          color: var(--sesen-body);
          background: #ffffff;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow-x: hidden;
        }

        .sesen-cgt-page,
        .sesen-cgt-page div,
        .sesen-cgt-page section,
        .sesen-cgt-page article,
        .sesen-cgt-page header,
        .sesen-cgt-page aside,
        .sesen-cgt-page a,
        .sesen-cgt-page p,
        .sesen-cgt-page h1,
        .sesen-cgt-page h2,
        .sesen-cgt-page h3,
        .sesen-cgt-page h4,
        .sesen-cgt-page ul,
        .sesen-cgt-page li,
        .sesen-cgt-page details,
        .sesen-cgt-page summary {
          box-sizing: border-box;
          min-width: 0;
        }

        .sesen-cgt-page a {
          color: var(--sesen-blue-dark);
          text-decoration: none;
        }

        .sesen-cgt-page a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-cgt-shell {
          width: min(1280px, 100%);
          margin: 0 auto;
          padding-left: 56px;
          padding-right: 56px;
        }

        .sesen-cgt-breadcrumb {
          padding-top: 28px;
          color: var(--sesen-muted);
          font-size: 14px;
        }

        .sesen-cgt-breadcrumb a {
          font-weight: 600;
        }

        .sesen-cgt-hero {
          padding: 72px 0 88px;
          background:
            radial-gradient(circle at 92% 12%, rgba(75, 111, 216, 0.13), transparent 34%),
            linear-gradient(180deg, #FFFFFF 0%, #F7F9FD 100%);
        }

        .sesen-cgt-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.02fr) minmax(360px, 0.98fr);
          gap: 58px;
          align-items: center;
        }

        .sesen-cgt-page .sesen-cgt-eyebrow {
          margin: 0 0 16px;
          color: var(--sesen-blue-dark);
          font-size: 11px;
          line-height: 1.4;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .sesen-cgt-hero h1,
        .sesen-cgt-page h2,
        .sesen-cgt-page h3,
        .sesen-cgt-page h4 {
          font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--sesen-navy);
          font-weight: 500;
        }

        .sesen-cgt-hero h1 {
          max-width: 700px;
          margin: 0;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-cgt-hero-lead {
          max-width: 690px;
          margin: 26px 0 0;
          color: #293954;
          font-size: 20px;
          line-height: 1.72;
        }

        .sesen-cgt-hero-copy {
          max-width: 690px;
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.72;
        }

        .sesen-cgt-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
          align-items: center;
        }

        .sesen-cgt-btn {
          display: inline-flex;
          min-height: 50px;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 999px;
          padding: 0 27px;
          font-size: 13px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.055em;
          text-transform: uppercase;
          border: 1px solid transparent;
          transition: background-color 160ms ease, border-color 160ms ease, transform 160ms ease;
        }

        .sesen-cgt-btn:hover {
          text-decoration: none;
          transform: translateY(-1px);
        }

        .sesen-cgt-btn:focus-visible,
        .sesen-cgt-page a:focus-visible,
        .sesen-cgt-page summary:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.35);
          outline-offset: 3px;
        }

        .sesen-cgt-btn-primary {
          background: var(--sesen-blue);
          color: #fff;
        }

        .sesen-cgt-btn-primary:hover {
          background: var(--sesen-blue-dark);
          color: #fff;
        }

        .sesen-cgt-btn-secondary {
          color: var(--sesen-ink);
          background: #fff;
          border-color: var(--sesen-border);
        }

        .sesen-cgt-btn-secondary:hover {
          color: var(--sesen-ink);
          background: var(--sesen-pale-blue);
          border-color: #C8D6FF;
        }

        .sesen-cgt-trust-line {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
          margin-top: 34px;
          padding-top: 24px;
          border-top: 1px solid var(--sesen-divider);
          color: #293954;
          font-size: 14px;
          line-height: 1.55;
          font-weight: 600;
        }

        .sesen-cgt-hero-art {
          position: relative;
          min-height: 460px;
          border: 1px solid var(--sesen-border);
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.72);
          box-shadow: 0 28px 70px rgba(23, 38, 77, 0.08);
          overflow: hidden;
        }

        .sesen-cgt-hero-art svg {
          display: block;
          width: 100%;
          height: 100%;
          min-height: 460px;
        }

        .sesen-cgt-section {
          padding: 96px 0;
        }

        .sesen-cgt-section-soft {
          background: var(--sesen-section);
        }

        .sesen-cgt-section-blue {
          background: linear-gradient(135deg, #17264D 0%, #253F8F 68%, #3659BB 100%);
          color: rgba(255, 255, 255, 0.84);
        }

        .sesen-cgt-section-blue h2,
        .sesen-cgt-section-blue h3,
        .sesen-cgt-section-blue h4 {
          color: #fff;
        }

        .sesen-cgt-section-blue .sesen-cgt-eyebrow {
          color: var(--sesen-light-on-dark);
        }

        .sesen-cgt-section-head {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sesen-cgt-section-head.centered {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-cgt-section-head.wide {
          max-width: 940px;
        }

        .sesen-cgt-page h2 {
          margin: 0;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-cgt-section-intro {
          margin: 18px 0 0;
          max-width: 790px;
          font-size: 18px;
          line-height: 1.72;
          color: var(--sesen-body);
        }

        .sesen-cgt-section-head.centered .sesen-cgt-section-intro {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-cgt-section-blue .sesen-cgt-section-intro,
        .sesen-cgt-section-blue p {
          color: rgba(255, 255, 255, 0.84);
        }

        .sesen-cgt-section-blue .sesen-cgt-editorial-link {
          color: var(--sesen-light-on-dark);
        }

        .sesen-cgt-section-blue .sesen-cgt-editorial-link:hover {
          color: #FFFFFF;
        }

        .sesen-cgt-lifecycle-panel {
          border: 1px solid var(--sesen-border);
          border-radius: 30px;
          padding: 34px;
          background: #fff;
          box-shadow: 0 22px 58px rgba(23, 38, 77, 0.06);
        }

        .sesen-cgt-lifecycle-track {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          gap: 0;
          position: relative;
        }

        .sesen-cgt-lifecycle-item {
          position: relative;
          padding: 22px 16px 0;
          text-align: center;
        }

        .sesen-cgt-lifecycle-item::before {
          content: "";
          position: absolute;
          top: 10px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--sesen-divider);
        }

        .sesen-cgt-lifecycle-item:first-child::before {
          left: 50%;
        }

        .sesen-cgt-lifecycle-item:last-child::before {
          right: 50%;
        }

        .sesen-cgt-lifecycle-dot {
          position: absolute;
          top: 0;
          left: calc(50% - 10px);
          width: 20px;
          height: 20px;
          border-radius: 999px;
          border: 5px solid #fff;
          background: var(--sesen-blue);
          box-shadow: 0 0 0 1px #C8D6FF;
        }

        .sesen-cgt-lifecycle-item strong {
          display: block;
          color: var(--sesen-navy);
          font-size: 15px;
          line-height: 1.45;
          font-weight: 700;
        }

        .sesen-cgt-lifecycle-note {
          margin: 28px 0 0;
          padding-top: 24px;
          border-top: 1px solid var(--sesen-divider);
          color: var(--sesen-body);
          font-size: 17px;
          line-height: 1.72;
        }

        .sesen-cgt-modality-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .sesen-cgt-modality {
          padding: 26px;
          border-radius: 26px;
          background: #fff;
          border: 1px solid var(--sesen-border);
        }

        .sesen-cgt-icon {
          display: inline-flex;
          width: 48px;
          height: 48px;
          margin-bottom: 22px;
          align-items: center;
          justify-content: center;
          border-radius: 14px;
          background: var(--sesen-soft-blue);
          color: var(--sesen-blue-dark);
        }

        .sesen-cgt-icon svg {
          width: 25px;
          height: 25px;
        }

        .sesen-cgt-modality h3,
        .sesen-cgt-info-card h3,
        .sesen-cgt-link-row h3,
        .sesen-cgt-doc-card h3 {
          margin: 0;
          font-size: 22px;
          line-height: 1.3;
        }

        .sesen-cgt-modality p,
        .sesen-cgt-info-card p,
        .sesen-cgt-link-row p,
        .sesen-cgt-doc-card p {
          margin: 14px 0 0;
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-cgt-split {
          display: grid;
          grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
          gap: 56px;
          align-items: center;
        }

        .sesen-cgt-split.reverse {
          grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
        }

        .sesen-cgt-visual-card {
          border: 1px solid var(--sesen-border);
          border-radius: 30px;
          background: #fff;
          padding: 28px;
          overflow: hidden;
          box-shadow: 0 22px 54px rgba(23, 38, 77, 0.06);
        }

        .sesen-cgt-visual-card svg {
          width: 100%;
          height: auto;
          display: block;
        }

        .sesen-cgt-graphic-mobile {
          display: none;
        }

        .sesen-cgt-mobile-flow {
          display: grid;
          gap: 12px;
        }

        .sesen-cgt-mobile-flow-step {
          position: relative;
          display: flex;
          min-height: 58px;
          align-items: center;
          justify-content: center;
          padding: 13px 16px;
          border: 1px solid var(--sesen-border);
          border-radius: 16px;
          background: var(--sesen-pale-blue);
          color: var(--sesen-navy);
          text-align: center;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
        }

        .sesen-cgt-mobile-flow-step + .sesen-cgt-mobile-flow-step::before {
          content: "↓";
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          color: var(--sesen-blue-dark);
          font-size: 15px;
          font-weight: 700;
        }

        .sesen-cgt-mobile-language-source {
          margin-bottom: 18px;
          padding: 18px;
          border-radius: 18px;
          background: var(--sesen-soft-blue);
          color: var(--sesen-navy);
          text-align: center;
          font-size: 16px;
          line-height: 1.4;
          font-weight: 700;
        }

        .sesen-cgt-mobile-language-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }

        .sesen-cgt-mobile-language-item {
          min-height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 12px;
          border: 1px solid var(--sesen-border);
          border-radius: 16px;
          background: var(--sesen-pale-blue);
          color: var(--sesen-navy);
          text-align: center;
          font-size: 15px;
          line-height: 1.35;
          font-weight: 700;
        }

        .sesen-cgt-text-stack p {
          margin: 18px 0 0;
          font-size: 17px;
          line-height: 1.72;
        }

        .sesen-cgt-link-list {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 22px;
          margin-top: 26px;
        }

        .sesen-cgt-editorial-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 15px;
          line-height: 1.45;
          font-weight: 700;
        }

        .sesen-cgt-editorial-link span {
          transition: transform 160ms ease;
        }

        .sesen-cgt-editorial-link:hover span {
          transform: translateX(3px);
        }

        .sesen-cgt-terminology {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: 44px;
          align-items: stretch;
        }

        .sesen-cgt-term-hub {
          min-height: 100%;
          border-radius: 30px;
          padding: 32px;
          border: 1px solid rgba(200, 214, 255, 0.35);
          background: rgba(255, 255, 255, 0.09);
        }

        .sesen-cgt-term-hub h3 {
          font-size: 26px;
          line-height: 1.3;
          margin: 0 0 18px;
        }

        .sesen-cgt-term-hub p {
          font-size: 17px;
          line-height: 1.72;
          margin: 0;
        }

        .sesen-cgt-term-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }

        .sesen-cgt-term-pill {
          min-height: 58px;
          display: flex;
          align-items: center;
          border-radius: 18px;
          border: 1px solid rgba(200, 214, 255, 0.28);
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          padding: 15px 17px;
          font-size: 15px;
          line-height: 1.4;
          font-weight: 600;
        }

        .sesen-cgt-two-column {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 28px;
        }

        .sesen-cgt-info-card {
          border: 1px solid var(--sesen-border);
          border-radius: 26px;
          background: #fff;
          padding: 28px;
        }

        .sesen-cgt-info-card ul {
          margin: 18px 0 0;
          padding-left: 0;
          list-style: none;
        }

        .sesen-cgt-info-card li {
          position: relative;
          margin: 11px 0 0;
          padding-left: 22px;
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-cgt-info-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65em;
          width: 7px;
          height: 7px;
          border-radius: 999px;
          background: var(--sesen-blue);
        }

        .sesen-cgt-chain {
          border: 1px solid var(--sesen-border);
          border-radius: 30px;
          background: #fff;
          padding: 34px;
        }

        .sesen-cgt-chain-flow {
          display: grid;
          grid-template-columns: repeat(7, minmax(0, 1fr));
          gap: 10px;
          margin-top: 28px;
        }

        .sesen-cgt-chain-step {
          display: flex;
          min-height: 82px;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 12px;
          border-radius: 18px;
          color: var(--sesen-navy);
          background: var(--sesen-pale-blue);
          font-size: 14px;
          line-height: 1.35;
          font-weight: 700;
        }

        .sesen-cgt-reg-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .sesen-cgt-link-panel {
          border-top: 1px solid var(--sesen-divider);
          border-bottom: 1px solid var(--sesen-divider);
          background: #fff;
        }

        .sesen-cgt-link-row {
          display: grid;
          grid-template-columns: minmax(0, 0.75fr) minmax(0, 1fr) auto;
          gap: 26px;
          align-items: center;
          padding: 28px 0;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-cgt-link-row:first-child {
          border-top: 0;
        }

        .sesen-cgt-branch-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-top: 30px;
        }

        .sesen-cgt-branch {
          border-radius: 22px;
          background: #fff;
          border: 1px solid var(--sesen-border);
          padding: 24px;
        }

        .sesen-cgt-branch strong {
          color: var(--sesen-navy);
          font-size: 17px;
          line-height: 1.4;
          font-weight: 700;
        }

        .sesen-cgt-branch p {
          margin: 12px 0 0;
          font-size: 16px;
          line-height: 1.62;
        }

        .sesen-cgt-source-panel {
          border-radius: 30px;
          border: 1px solid var(--sesen-border);
          background: #fff;
          padding: 34px;
          box-shadow: 0 22px 54px rgba(23, 38, 77, 0.05);
        }

        .sesen-cgt-source-core {
          display: grid;
          grid-template-columns: minmax(0, 0.7fr) minmax(0, 1fr);
          gap: 28px;
          align-items: center;
          padding-bottom: 30px;
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-cgt-source-label {
          border-radius: 24px;
          background: var(--sesen-pale-blue);
          padding: 28px;
        }

        .sesen-cgt-source-label strong {
          display: block;
          color: var(--sesen-navy);
          font-size: 22px;
          line-height: 1.3;
          font-weight: 700;
        }

        .sesen-cgt-source-label p,
        .sesen-cgt-source-copy {
          margin: 12px 0 0;
          font-size: 17px;
          line-height: 1.7;
        }

        .sesen-cgt-expertise-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 26px;
        }

        .sesen-cgt-expertise-block {
          border-radius: 30px;
          border: 1px solid var(--sesen-border);
          background: #fff;
          padding: 32px;
        }

        .sesen-cgt-expertise-block h3 {
          margin: 0 0 22px;
          font-size: 25px;
          line-height: 1.3;
        }

        .sesen-cgt-mini-link {
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 20px;
          padding: 19px 0;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-cgt-mini-link:first-of-type {
          border-top: 0;
        }

        .sesen-cgt-mini-link strong {
          color: var(--sesen-navy);
          font-size: 17px;
          line-height: 1.45;
        }

        .sesen-cgt-mini-link p {
          margin: 7px 0 0;
          font-size: 16px;
          line-height: 1.58;
        }

        .sesen-cgt-mini-arrow {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          align-self: start;
          justify-self: end;
          color: var(--sesen-blue-dark);
          font-size: 15px;
          line-height: 1.4;
          font-weight: 700;
          white-space: nowrap;
        }

        .sesen-cgt-mini-arrow span {
          transition: transform 160ms ease;
        }

        .sesen-cgt-mini-arrow:hover span {
          transform: translateX(3px);
        }

        .sesen-cgt-workflow {
          counter-reset: workflow;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 22px;
        }

        .sesen-cgt-workflow-step {
          position: relative;
          padding: 28px;
          border-radius: 26px;
          background: #fff;
          border: 1px solid var(--sesen-border);
        }

        .sesen-cgt-workflow-step span {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 999px;
          background: var(--sesen-soft-blue);
          color: var(--sesen-blue-dark);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.06em;
        }

        .sesen-cgt-workflow-step h3 {
          margin: 20px 0 0;
          font-size: 20px;
          line-height: 1.32;
        }

        .sesen-cgt-workflow-step p {
          margin: 12px 0 0;
          font-size: 16px;
          line-height: 1.65;
        }

        .sesen-cgt-proof-band {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-divider);
          border-bottom: 1px solid var(--sesen-divider);
        }

        .sesen-cgt-proof-item {
          min-height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          border-left: 1px solid var(--sesen-divider);
          color: var(--sesen-navy);
          font-size: 15px;
          line-height: 1.38;
          font-weight: 700;
        }

        .sesen-cgt-proof-item:first-child {
          border-left: 0;
        }

        .sesen-cgt-quality-note {
          max-width: 900px;
          margin: 28px auto 0;
          color: var(--sesen-body);
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
        }

        .sesen-cgt-doc-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 22px;
        }

        .sesen-cgt-doc-card {
          padding: 26px;
          border-radius: 24px;
          background: #fff;
          border: 1px solid var(--sesen-border);
        }

        .sesen-cgt-faq-wrap {
          max-width: 980px;
          margin: 0 auto;
          border-top: 1px solid var(--sesen-divider);
        }

        .sesen-cgt-faq-wrap details {
          border-bottom: 1px solid var(--sesen-divider);
          padding: 0;
        }

        .sesen-cgt-faq-wrap summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          cursor: pointer;
          padding: 24px 0;
          color: var(--sesen-navy);
          font-size: 19px;
          line-height: 1.45;
          font-weight: 700;
          list-style: none;
        }

        .sesen-cgt-faq-wrap summary::-webkit-details-marker {
          display: none;
        }

        .sesen-cgt-faq-wrap summary::after {
          content: "+";
          flex: 0 0 auto;
          display: inline-flex;
          width: 32px;
          height: 32px;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--sesen-soft-blue);
          color: var(--sesen-blue-dark);
          font-size: 22px;
          line-height: 1;
          font-weight: 500;
        }

        .sesen-cgt-faq-wrap details[open] summary::after {
          content: "–";
        }

        .sesen-cgt-faq-wrap details p {
          margin: 0;
          max-width: 820px;
          padding: 0 56px 24px 0;
          font-size: 16px;
          line-height: 1.72;
        }

        .sesen-cgt-final-cta {
          padding: 96px 0;
          background: #fff;
        }

        .sesen-cgt-final-box {
          border-radius: 32px;
          background: linear-gradient(135deg, #17264D 0%, #253F8F 62%, #4B6FD8 100%);
          padding: 56px;
          color: rgba(255, 255, 255, 0.86);
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 38px;
          align-items: center;
        }

        .sesen-cgt-final-box h2 {
          color: #fff;
        }

        .sesen-cgt-final-box p {
          max-width: 760px;
          margin: 18px 0 0;
          font-size: 18px;
          line-height: 1.72;
        }

        .sesen-cgt-final-actions {
          display: flex;
          flex-direction: column;
          gap: 14px;
          align-items: stretch;
        }

        @media (max-width: 1120px) {
          .sesen-cgt-shell {
            padding-left: 40px;
            padding-right: 40px;
          }

          .sesen-cgt-hero-grid,
          .sesen-cgt-split,
          .sesen-cgt-split.reverse,
          .sesen-cgt-terminology,
          .sesen-cgt-final-box {
            grid-template-columns: 1fr;
          }

          .sesen-cgt-hero-art {
            max-width: 660px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .sesen-cgt-hero .sesen-cgt-eyebrow,
          .sesen-cgt-hero h1 {
            text-align: center;
          }

          .sesen-cgt-hero h1 {
            margin-left: auto;
            margin-right: auto;
          }

          .sesen-cgt-modality-grid,
          .sesen-cgt-workflow,
          .sesen-cgt-doc-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-cgt-proof-band {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .sesen-cgt-proof-item:nth-child(4) {
            border-left: 0;
          }

          .sesen-cgt-chain-flow {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        @media (max-width: 860px) {
          .sesen-cgt-shell {
            padding-left: 30px;
            padding-right: 30px;
          }

          .sesen-cgt-section {
            padding: 76px 0;
          }

          .sesen-cgt-hero {
            padding: 54px 0 72px;
          }

          .sesen-cgt-hero h1 {
            font-size: 44px;
          }

          .sesen-cgt-hero-grid {
            gap: 42px;
          }

          .sesen-cgt-lifecycle-track,
          .sesen-cgt-reg-grid,
          .sesen-cgt-branch-grid,
          .sesen-cgt-expertise-grid,
          .sesen-cgt-two-column {
            grid-template-columns: 1fr;
          }

          .sesen-cgt-lifecycle-item {
            padding: 0 0 24px 34px;
            text-align: left;
          }

          .sesen-cgt-lifecycle-item::before {
            top: 0;
            bottom: 0;
            left: 9px;
            right: auto;
            width: 2px;
            height: auto;
          }

          .sesen-cgt-lifecycle-item:first-child::before,
          .sesen-cgt-lifecycle-item:last-child::before {
            left: 9px;
            right: auto;
          }

          .sesen-cgt-lifecycle-item:last-child::before {
            height: 12px;
          }

          .sesen-cgt-lifecycle-dot {
            left: 0;
          }

          .sesen-cgt-link-row,
          .sesen-cgt-source-core {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .sesen-cgt-chain-flow {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .sesen-cgt-shell {
            padding-left: 20px;
            padding-right: 20px;
          }

          .sesen-cgt-breadcrumb {
            padding-top: 22px;
            font-size: 13px;
          }

          .sesen-cgt-hero {
            padding: 44px 0 64px;
          }

          .sesen-cgt-hero .sesen-cgt-eyebrow,
          .sesen-cgt-hero h1 {
            text-align: center;
          }

          .sesen-cgt-hero h1 {
            max-width: none;
            font-size: 42px;
            line-height: 1.22;
          }

          .sesen-cgt-hero-lead,
          .sesen-cgt-hero-copy {
            font-size: 17px;
            line-height: 1.72;
          }

          .sesen-cgt-cta-row,
          .sesen-cgt-trust-line {
            align-items: stretch;
            flex-direction: column;
          }

          .sesen-cgt-btn {
            width: 100%;
          }

          .sesen-cgt-hero-art {
            min-height: 360px;
            border-radius: 24px;
          }

          .sesen-cgt-hero-art svg {
            min-height: 360px;
          }

          .sesen-cgt-page a,
          .sesen-cgt-term-pill,
          .sesen-cgt-chain-step,
          .sesen-cgt-mini-link {
            overflow-wrap: anywhere;
          }

          .sesen-cgt-section {
            padding: 68px 0;
          }

          .sesen-cgt-section-head {
            margin-bottom: 36px;
          }

          .sesen-cgt-section-head.center-mobile {
            text-align: center;
          }

          .sesen-cgt-section-head.center-mobile .sesen-cgt-section-intro {
            text-align: left;
          }

          .sesen-cgt-text-stack.center-mobile-heading .sesen-cgt-eyebrow,
          .sesen-cgt-text-stack.center-mobile-heading h2 {
            text-align: center;
          }

          .sesen-cgt-section-head.mobile-left {
            text-align: left;
            margin-left: 0;
            margin-right: 0;
          }

          .sesen-cgt-section-head.mobile-left .sesen-cgt-section-intro {
            margin-left: 0;
            margin-right: 0;
            text-align: left;
          }

          .sesen-cgt-graphic-desktop {
            display: none;
          }

          .sesen-cgt-graphic-mobile {
            display: block;
          }

          .sesen-cgt-final-box h2 {
            text-align: center;
          }

          .sesen-cgt-page h2 {
            font-size: 32px;
          }

          .sesen-cgt-modality-grid,
          .sesen-cgt-term-grid,
          .sesen-cgt-workflow,
          .sesen-cgt-doc-grid,
          .sesen-cgt-proof-band {
            grid-template-columns: 1fr;
          }

          .sesen-cgt-proof-item,
          .sesen-cgt-proof-item:nth-child(4) {
            min-height: 78px;
            border-left: 0;
            border-top: 1px solid var(--sesen-divider);
          }

          .sesen-cgt-proof-item:first-child {
            border-top: 0;
          }

          .sesen-cgt-lifecycle-panel,
          .sesen-cgt-visual-card,
          .sesen-cgt-chain,
          .sesen-cgt-expertise-block,
          .sesen-cgt-final-box {
            border-radius: 24px;
            padding: 24px;
          }

          .sesen-cgt-chain-flow {
            grid-template-columns: 1fr;
          }

          .sesen-cgt-mini-link {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .sesen-cgt-mini-arrow {
            justify-self: start;
          }

          .sesen-cgt-source-panel {
            border-radius: 24px;
            padding: 24px;
          }

          .sesen-cgt-faq-wrap summary {
            align-items: flex-start;
            font-size: 17px;
          }

          .sesen-cgt-faq-wrap details p {
            padding-right: 0;
          }

          .sesen-cgt-final-cta {
            padding: 72px 0;
          }

          .sesen-cgt-final-actions {
            width: 100%;
          }
        }

        @media (max-width: 360px) {
          .sesen-cgt-hero h1 {
            font-size: 38px;
          }

          .sesen-cgt-page h2 {
            font-size: 30px;
          }

          .sesen-cgt-hero-art,
          .sesen-cgt-hero-art svg {
            min-height: 320px;
          }

          .sesen-cgt-mobile-language-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-cgt-page a,
          .sesen-cgt-btn,
          .sesen-cgt-editorial-link span {
            transition: none;
          }
        }
      `}</style>

      <div className="sesen-cgt-shell sesen-cgt-breadcrumb" aria-label="Breadcrumb">
        <a href="https://www.sesen.com/">Home</a> / <a href="https://www.sesen.com/life-sciences-translation-services/">Life Sciences</a> / Cell & Gene Therapy Translation Services
      </div>

      <section className="sesen-cgt-hero">
        <div className="sesen-cgt-shell sesen-cgt-hero-grid">
          <div>
            <p className="sesen-cgt-eyebrow">Advanced Life Sciences</p>
            <h1>Cell & Gene Therapy Translation Services</h1>
            <p className="sesen-cgt-hero-lead">
              Support global cell and gene therapy programs with specialized translation across scientific research, clinical development, CMC and manufacturing, regulatory submissions, treatment workflows, patient communication, and long-term safety.
            </p>
            <p className="sesen-cgt-hero-copy">
              From autologous and allogeneic cell therapies to viral-vector gene therapies, genome editing, and next-generation engineered-cell platforms, Sesen helps life sciences teams keep complex scientific meaning and product-specific terminology accurate, consistent, and controlled across languages.
            </p>
            <div className="sesen-cgt-cta-row" aria-label="Primary actions">
              <a className="sesen-cgt-btn sesen-cgt-btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <a className="sesen-cgt-btn sesen-cgt-btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            </div>
            <div className="sesen-cgt-trust-line" aria-label="Sesen credentials">
              <span>Life Sciences Specialized</span>
              <span>150+ Languages</span>
              <span>ISO-Certified Quality</span>
              <span>Professional Human Review</span>
            </div>
          </div>

          <div className="sesen-cgt-hero-art" aria-label="Illustration of engineered cell therapy, gene editing, multilingual documentation, and patient care workflow">
            <HeroIllustration />
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head wide centered center-mobile">
            <p className="sesen-cgt-eyebrow">Connected CGT Content</p>
            <h2>One Therapy. One Multilingual Body of Knowledge.</h2>
            <p className="sesen-cgt-section-intro">
              Cell and gene therapies generate an interconnected body of scientific, manufacturing, clinical, regulatory, treatment, patient, and safety information. Consistency across documents can be as important as accuracy within any single file.
            </p>
          </div>
          <div className="sesen-cgt-lifecycle-panel">
            <div className="sesen-cgt-lifecycle-track" aria-label="Cell and gene therapy content lifecycle">
              {lifecycle.map((item) => (
                <div className="sesen-cgt-lifecycle-item" key={item}>
                  <span className="sesen-cgt-lifecycle-dot" aria-hidden="true" />
                  <strong>{item}</strong>
                </div>
              ))}
            </div>
            <p className="sesen-cgt-lifecycle-note">
              Sesen approaches cell and gene therapy translation as a connected multilingual program, helping preserve product terminology, mechanisms of action, cell and vector nomenclature, manufacturing language, clinical concepts, dosing information, safety terminology, and patient-facing explanations as the therapy progresses.
            </p>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head center-mobile">
            <h2>Specialized Translation Across Cell & Gene Therapy Modalities</h2>
            <p className="sesen-cgt-section-intro">
              CGT programs can involve living cells, genetic modification, viral or non-viral delivery, genome editing, patient-specific manufacturing, or combinations of these approaches.
            </p>
          </div>
          <div className="sesen-cgt-modality-grid">
            {modalities.map((item) => (
              <article className="sesen-cgt-modality" key={item.title}>
                <span className="sesen-cgt-icon" aria-hidden="true"><Icon name={item.icon} /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell sesen-cgt-split">
          <div className="sesen-cgt-text-stack center-mobile-heading">
            <p className="sesen-cgt-eyebrow">Converging Technologies</p>
            <h2>Where Cell Therapy and Gene Engineering Converge</h2>
            <p>
              The traditional boundary between cell therapy and gene therapy is increasingly fluid. A therapeutic cell may be collected from a patient or donor, genetically modified or edited, expanded and characterized, tested for release, transported to a treatment center, and administered as a specialized therapeutic product.
            </p>
            <p>
              Every stage can introduce terminology that must remain aligned across the target, construct, editing method, cell population, manufacturing process, release criteria, dosing strategy, administration procedure, and safety profile.
            </p>
            <div className="sesen-cgt-link-list">
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/mrna-rna-therapeutics-translation-services/">Explore mRNA & RNA Therapeutics Translation <span>→</span></a>
            </div>
          </div>
          <div className="sesen-cgt-visual-card">
            <div className="sesen-cgt-graphic-desktop"><ConvergenceGraphic /></div>
            <div className="sesen-cgt-graphic-mobile"><ConvergenceMobileFlow /></div>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-blue">
        <div className="sesen-cgt-shell sesen-cgt-terminology">
          <div className="sesen-cgt-term-hub">
            <p className="sesen-cgt-eyebrow">Terminology Governance</p>
            <h2>One CGT Vocabulary Across Every Document</h2>
            <p>
              A term translated differently across a protocol, CMC document, informed consent form, labeling document, and safety communication can create confusion even when each translation is grammatically correct. Sesen builds terminology control into the translation workflow from the beginning.
            </p>
            <div className="sesen-cgt-link-list">
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/life-sciences-translation-services/">Explore Life Sciences Translation <span>→</span></a>
            </div>
          </div>
          <div className="sesen-cgt-term-grid" aria-label="CGT terminology categories">
            {['Product and platform names', 'Cell types and targets', 'Genes, proteins, and receptors', 'Vectors and constructs', 'Mechanisms of action', 'Manufacturing steps', 'Critical quality attributes', 'Assays and analytical methods', 'Dosing and administration', 'Safety terminology', 'Clinical endpoints', 'Patient-facing explanations'].map((term) => (
              <div className="sesen-cgt-term-pill" key={term}>{term}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell sesen-cgt-split">
          <div className="sesen-cgt-text-stack center-mobile-heading">
            <h2>Scientific and Preclinical Translation for CGT Development</h2>
            <p>
              Before a cell or gene therapy reaches patients, scientific and nonclinical teams generate evidence describing how the therapeutic approach works, how the product is characterized, and how potential risks are evaluated.
            </p>
            <p>
              Sesen supports translation of research, preclinical, pharmacology, toxicology, biodistribution, assay, analytical, manuscript, and presentation content while preserving the terminology that will later carry into clinical and regulatory documents.
            </p>
            <div className="sesen-cgt-link-list">
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/medical-scientific-translation-services/">Medical & Scientific Translation <span>→</span></a>
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/biotechnology-translation-services/">Biotechnology Translation Services <span>→</span></a>
            </div>
          </div>
          <div className="sesen-cgt-two-column">
            {preclinicalGroups.map((group) => (
              <article className="sesen-cgt-info-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head">
            <h2>Clinical Trial Translation for Cell & Gene Therapy Programs</h2>
            <p className="sesen-cgt-section-intro">
              CGT trials can involve specialized eligibility criteria, treatment procedures, conditioning regimens, cell collection or administration workflows, intensive monitoring, and patient-facing explanations that require careful multilingual handling.
            </p>
          </div>
          <div className="sesen-cgt-two-column">
            {clinicalGroups.map((group) => (
              <article className="sesen-cgt-info-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
          <div className="sesen-cgt-link-list">
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/clinical-trial-translation-services/">Clinical Trial Translation Services <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/protocol-translation-services/">Protocol Translation Services <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/investigators-brochure-translation-services/">Investigator’s Brochure Translation Services <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/clinical-study-report-translation-services/">Clinical Study Report Translation Services <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head">
            <p className="sesen-cgt-eyebrow">Product & Process</p>
            <h2>CMC, Manufacturing & Quality Translation for Complex CGT Products</h2>
            <p className="sesen-cgt-section-intro">
              In cell and gene therapy, the therapeutic product and the manufacturing process can be exceptionally interconnected. Multilingual documentation must maintain exact process, material, assay, specification, and product terminology as programs advance.
            </p>
          </div>
          <div className="sesen-cgt-two-column">
            {cmcGroups.map((group) => (
              <article className="sesen-cgt-info-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
          <div className="sesen-cgt-link-list">
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/cmc-document-translation-services/">CMC Document Translation Services <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/sop-translation-services/">SOP Translation Services <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/pharmaceutical-manufacturing-translation/">Pharmaceutical Manufacturing Translation <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-chain">
            <div className="sesen-cgt-section-head">
              <p className="sesen-cgt-eyebrow">Identity & Traceability</p>
              <h2>Protect Language Integrity Across Patient-Specific Workflows</h2>
              <p className="sesen-cgt-section-intro">
                For autologous therapies and other patient-specific programs, multilingual documentation must communicate identifiers, instructions, handling requirements, process steps, and controlled text without introducing unnecessary ambiguity.
              </p>
            </div>
            <div className="sesen-cgt-chain-flow" aria-label="Patient-specific therapy workflow">
              {['Patient / Donor', 'Collection', 'Shipment', 'Manufacturing', 'Testing & Release', 'Treatment Center', 'Administration'].map((step) => (
                <div className="sesen-cgt-chain-step" key={step}>{step}</div>
              ))}
            </div>
            <p className="sesen-cgt-lifecycle-note">
              Sesen translates the controlled documentation that supports these workflows. Physical chain of custody, product release, identity verification, logistics, and clinical administration remain under the control of the responsible client and healthcare organizations.
            </p>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head">
            <h2>Regulatory Translation Across Global CGT Programs</h2>
            <p className="sesen-cgt-section-intro">
              CGT regulatory programs bring together product identity, manufacturing control, nonclinical evidence, clinical performance, benefit-risk profile, safety monitoring, and lifecycle updates. Sesen helps connect that evidence across languages.
            </p>
          </div>
          <div className="sesen-cgt-reg-grid">
            <article className="sesen-cgt-info-card">
              <h3>United States</h3>
              <p>Language support for FDA/CBER programs, IND and BLA content, CTD/eCTD submissions, briefing packages, health-authority correspondence, responses, and lifecycle content.</p>
            </article>
            <article className="sesen-cgt-info-card">
              <h3>European ATMP Programs</h3>
              <p>Translation for European advanced therapy programs, including clinical and marketing-authorization content, SmPCs, labeling, package leaflets, authority communication, and lifecycle changes.</p>
            </article>
            <article className="sesen-cgt-info-card">
              <h3>Global Health Authorities</h3>
              <p>Multilingual support for PMDA, Health Canada, NMPA, and other national or regional health-authority programs according to the markets, documents, and client instructions involved.</p>
            </article>
          </div>
          <div className="sesen-cgt-link-list">
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation <span>→</span></a>
            <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/ectd-ctd-translation-services/">CTD & eCTD Translation Services <span>→</span></a>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell sesen-cgt-split reverse">
          <div className="sesen-cgt-visual-card">
            <div className="sesen-cgt-graphic-desktop"><PatientLanguageGraphic /></div>
            <div className="sesen-cgt-graphic-mobile"><PatientLanguageMobileGraphic /></div>
          </div>
          <div className="sesen-cgt-text-stack center-mobile-heading">
            <p className="sesen-cgt-eyebrow">Patients & Caregivers</p>
            <h2>Translate Complex Science Into Clear Patient Communication</h2>
            <p>
              Cell and gene therapies can involve unfamiliar science, complex treatment pathways, important risks, specialized procedures, and extended follow-up. Patient-facing translations must remain faithful to approved source content while communicating clearly enough for patients and caregivers to understand.
            </p>
            <p>
              Sesen supports informed consent, assent, patient information, recruitment, collection instructions, treatment preparation, caregiver materials, follow-up content, safety communication, eCOA/ePRO, and digital patient content.
            </p>
            <div className="sesen-cgt-link-list">
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/informed-consent-form-translation-services/">Informed Consent Form Translation Services <span>→</span></a>
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/plain-language-summary-translation-services/">Plain Language Summary Translation <span>→</span></a>
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/ecoa-translation-services/">eCOA Translation Services <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell sesen-cgt-split">
          <div className="sesen-cgt-text-stack">
            <h2>Safety Communication and Long-Term Follow-Up</h2>
            <p>
              Translation requirements continue after administration and approval. CGT programs may require specialized post-treatment monitoring, safety communication, labeling updates, and long-term follow-up documentation.
            </p>
            <p>
              Translation memory, approved terminology, version-aware project management, and structured human review help keep new safety and follow-up content aligned with the established multilingual history of the product.
            </p>
            <div className="sesen-cgt-link-list">
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services <span>→</span></a>
              <a className="sesen-cgt-editorial-link" href="https://www.sesen.com/labeling-translation-services/">Labeling Translation Services <span>→</span></a>
            </div>
          </div>
          <div className="sesen-cgt-two-column">
            {safetyGroups.map((group) => (
              <article className="sesen-cgt-info-card" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head center-mobile">
            <h2>Cell & Gene Therapy Across Therapeutic Areas and Advanced Platforms</h2>
            <p className="sesen-cgt-section-intro">
              CGT is a therapeutic modality, not a single therapeutic area. Sesen connects cell and gene therapy expertise with the disease areas and advanced therapeutic platforms where these programs are being developed.
            </p>
          </div>
          <div className="sesen-cgt-expertise-grid">
            <div className="sesen-cgt-expertise-block">
              <h3>Therapeutic Area Connections</h3>
              <MiniLink title="Oncology" text="CAR-T, cellular immunotherapies, engineered immune-cell approaches, and cancer-directed gene therapies." href="https://www.sesen.com/oncology-translation-services/" />
              <MiniLink title="Rare Disease" text="Gene replacement, genome editing, small patient populations, and specialized patient communities." href="https://www.sesen.com/rare-disease-translation-services/" />
              <MiniLink title="Immunology & Autoimmune" text="Emerging engineered-cell applications, immune modulation, and advanced therapy research." href="https://www.sesen.com/immunology-autoimmune-translation-services/" />
              <MiniLink title="Neurology & CNS" text="Gene therapy programs for neurological and neurogenetic conditions." href="https://www.sesen.com/neurology-cns-translation-services/" />
            </div>
            <div className="sesen-cgt-expertise-block">
              <h3>Advanced Modality Connections</h3>
              <MiniLink title="Genomics & Precision Medicine" text="Sequencing, NGS, biomarkers, molecular diagnostics, genomic data, bioinformatics, and genetic testing." href="https://www.sesen.com/genomics-precision-medicine-translation-services/" />
              <MiniLink title="mRNA & RNA Therapeutics" text="mRNA, siRNA/RNAi, antisense approaches, RNA delivery, and RNA therapeutic platforms." href="https://www.sesen.com/mrna-rna-therapeutics-translation-services/" />
              <MiniLink title="Biopharmaceuticals & Biosimilars" text="Broader biologic-product development across clinical, CMC, regulatory, labeling, safety, and commercialization." href="https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/" />
              <MiniLink title="Medical & Scientific Translation" text="Scientific and medical communication across life sciences research, development, and global publication." href="https://www.sesen.com/medical-scientific-translation-services/" />
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head centered center-mobile">
            <p className="sesen-cgt-eyebrow">Program-Level Language Control</p>
            <h2>From One Source of Scientific Truth to Every Multilingual Deliverable</h2>
            <p className="sesen-cgt-section-intro">
              A CGT program may generate hundreds of related content assets over years of development. Sesen helps preserve the approved source meaning, product nomenclature, multilingual glossary, translation memory, and style guidance across the major content streams.
            </p>
          </div>
          <div className="sesen-cgt-source-panel">
            <div className="sesen-cgt-source-core">
              <div className="sesen-cgt-source-label">
                <strong>Approved Source Content</strong>
                <p>Product nomenclature · multilingual glossary · translation memory · style guidance</p>
              </div>
              <p className="sesen-cgt-source-copy">
                When a protocol is amended, manufacturing terminology changes, new safety information emerges, or another market is added, existing language assets can provide continuity instead of restarting the translation process from zero.
              </p>
            </div>
            <div className="sesen-cgt-branch-grid" aria-label="Connected CGT content streams">
              {knowledgeBranches.map(([title, text]) => (
                <div className="sesen-cgt-branch" key={title}>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head centered mobile-left">
            <h2>A Translation Workflow Built Around Your CGT Program</h2>
            <p className="sesen-cgt-section-intro">
              Instead of treating each document as an isolated transaction, Sesen can preserve terminology, translation memory, review feedback, and approved language assets as your CGT program evolves.
            </p>
          </div>
          <div className="sesen-cgt-workflow">
            {workflows.map(([num, title, text]) => (
              <article className="sesen-cgt-workflow-step" key={num}>
                <span aria-hidden="true">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head centered center-mobile">
            <h2>Quality Designed for High-Consequence Life Sciences Content</h2>
            <p className="sesen-cgt-section-intro">
              Cell and gene therapy content can combine specialized science, regulated documentation, and patient-facing communication. Sesen’s workflow focuses on scientific meaning, terminology, numerical accuracy, audience appropriateness, and lifecycle continuity.
            </p>
          </div>
          <div className="sesen-cgt-proof-band" aria-label="Sesen quality and capability proof points">
            {proofPillars.map((item) => (
              <div className="sesen-cgt-proof-item" key={item}>{item}</div>
            ))}
          </div>
          <p className="sesen-cgt-quality-note">
            Sesen combines professional life sciences linguists, independent review, terminology management, translation memory, structured QA, and final human quality control within ISO-certified translation processes designed for regulated multilingual content.
          </p>
        </div>
      </section>

      <section className="sesen-cgt-section sesen-cgt-section-soft">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head">
            <h2>Cell & Gene Therapy Documents We Translate</h2>
            <p className="sesen-cgt-section-intro">
              Sesen supports multilingual documentation across the CGT development and product lifecycle, from early research and clinical studies through manufacturing, regulatory submissions, treatment, safety, and lifecycle updates.
            </p>
          </div>
          <div className="sesen-cgt-doc-grid">
            {documents.map(([title, text]) => (
              <article className="sesen-cgt-doc-card" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-section">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-section-head mobile-left">
            <h2>Cell & Gene Therapy Translation FAQs</h2>
          </div>
          <div className="sesen-cgt-faq-wrap">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-cgt-final-cta">
        <div className="sesen-cgt-shell">
          <div className="sesen-cgt-final-box">
            <div>
              <h2>Advance Your Cell & Gene Therapy Program Globally</h2>
              <p>
                Whether you are preparing an early-stage study, expanding a multinational clinical trial, developing CMC documentation, translating manufacturing procedures, responding to a health authority, preparing patient materials, or managing lifecycle updates, Sesen can build a multilingual workflow around your CGT program.
              </p>
            </div>
            <div className="sesen-cgt-final-actions">
              <a className="sesen-cgt-btn sesen-cgt-btn-primary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE</a>
              <a className="sesen-cgt-btn sesen-cgt-btn-secondary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function MiniLink({ title, text, href }) {
  return (
    <div className="sesen-cgt-mini-link">
      <div>
        <strong>{title}</strong>
        <p>{text}</p>
      </div>
      <a className="sesen-cgt-mini-arrow" href={href} aria-label={`Explore ${title}`}>Explore <span aria-hidden="true">→</span></a>
    </div>
  );
}

function Icon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
    'aria-hidden': true,
  };

  if (name === 'dna') {
    return (
      <svg {...common}>
        <path d="M7 4c6 2 4 6 10 8" />
        <path d="M17 4c-6 2-4 6-10 8" />
        <path d="M7 12c6 2 4 6 10 8" />
        <path d="M17 12c-6 2-4 6-10 8" />
        <path d="M9.5 6.5h5" />
        <path d="M9.5 17.5h5" />
      </svg>
    );
  }

  if (name === 'edit') {
    return (
      <svg {...common}>
        <path d="M4.5 18.5l4.2-.8 9.8-9.8a2.1 2.1 0 0 0-3-3L5.7 14.7l-1.2 3.8Z" />
        <path d="M13.8 6.6l3.6 3.6" />
        <path d="M5 21h14" />
      </svg>
    );
  }

  if (name === 'bridge') {
    return (
      <svg {...common}>
        <circle cx="7.5" cy="7.5" r="3.2" />
        <circle cx="16.5" cy="16.5" r="3.2" />
        <path d="M9.8 9.8l4.4 4.4" />
        <path d="M15.5 5.5c2.3.6 3.9 2.4 4.5 4.6" />
        <path d="M8.5 18.5c-2.3-.6-3.9-2.4-4.5-4.6" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="6.2" />
      <circle cx="12" cy="12" r="1.8" />
      <path d="M4.8 8.2c2.2.7 4.8.7 7.2-.2 2.2-.8 4.7-.8 7.1-.1" />
      <path d="M5 15.9c2.2-.7 4.7-.7 7 .1 2.3.8 4.8.8 7.1.1" />
    </svg>
  );
}

function HeroIllustration() {
  return (
    <svg viewBox="0 0 560 460" role="img" aria-label="Engineered cell therapy translation workflow illustration">
      <defs>
        <linearGradient id="cgtHeroBlue" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#EAF0FF" />
          <stop offset="1" stopColor="#C8D6FF" />
        </linearGradient>
        <filter id="cgtShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="14" floodColor="#17264D" floodOpacity="0.10" />
        </filter>
      </defs>
      <rect width="560" height="460" fill="#FFFFFF" />
      <circle cx="448" cy="102" r="108" fill="#F5F7FF" />
      <circle cx="126" cy="344" r="118" fill="#F7F9FD" />
      <path d="M92 238C130 162 206 108 293 106c93-2 170 54 202 132" fill="none" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="8 10" />
      <path d="M105 251c42 62 112 101 189 99 76-2 144-43 183-107" fill="none" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="8 10" />

      <g filter="url(#cgtShadow)">
        <circle cx="195" cy="224" r="92" fill="url(#cgtHeroBlue)" stroke="#3659BB" strokeWidth="3" />
        <circle cx="191" cy="220" r="34" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="3" />
        <path d="M138 204c19 6 41 5 63-4 23-9 48-9 71 0" fill="none" stroke="#253F8F" strokeWidth="3" strokeLinecap="round" />
        <path d="M137 244c23-9 47-9 70 0s45 10 68 2" fill="none" stroke="#253F8F" strokeWidth="3" strokeLinecap="round" />
        <circle cx="146" cy="171" r="12" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="3" />
        <circle cx="245" cy="171" r="10" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="3" />
        <circle cx="261" cy="275" r="13" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="3" />
        <circle cx="130" cy="274" r="9" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="3" />
      </g>

      <g transform="translate(332 78)" filter="url(#cgtShadow)">
        <rect x="0" y="0" width="148" height="178" rx="24" fill="#FFFFFF" stroke="#DDE4F2" />
        <path d="M32 36c44 13 39 39 84 52" fill="none" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        <path d="M116 36C72 49 77 75 32 88" fill="none" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        <path d="M48 54h52" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M48 72h52" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
        <rect x="28" y="118" width="92" height="10" rx="5" fill="#EAF0FF" />
        <rect x="28" y="140" width="68" height="10" rx="5" fill="#EAF0FF" />
      </g>

      <g transform="translate(326 274)" filter="url(#cgtShadow)">
        <rect x="0" y="0" width="156" height="104" rx="22" fill="#17264D" />
        <circle cx="40" cy="52" r="23" fill="#FFFFFF" opacity="0.95" />
        <path d="M34 50l6 6 14-16" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="80" y="30" width="48" height="8" rx="4" fill="#C8D6FF" />
        <rect x="80" y="50" width="58" height="8" rx="4" fill="#FFFFFF" opacity="0.72" />
        <rect x="80" y="70" width="38" height="8" rx="4" fill="#FFFFFF" opacity="0.48" />
      </g>

      <g transform="translate(72 78)" filter="url(#cgtShadow)">
        <rect x="0" y="0" width="122" height="78" rx="22" fill="#FFFFFF" stroke="#DDE4F2" />
        <rect x="24" y="23" width="64" height="7" rx="3.5" fill="#3659BB" />
        <rect x="24" y="42" width="76" height="7" rx="3.5" fill="#C8D6FF" />
        <path d="M91 24l11 11-11 11" fill="none" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>

      <path d="M220 138c23-42 55-59 93-62" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="M310 76l-11-8m11 8l-8 11" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="M282 260c24 35 52 50 84 51" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
      <path d="M366 311l-11-8m11 8l-9 10" fill="none" stroke="#4B6FD8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function ConvergenceGraphic() {
  const steps = ['Patient / Donor Cell', 'Genetic Modification', 'Processing & Testing', 'Therapeutic Cell Product', 'Administration & Follow-Up'];
  return (
    <svg viewBox="0 0 640 360" role="img" aria-label="Cell therapy and gene engineering convergence workflow">
      <rect width="640" height="360" rx="26" fill="#FFFFFF" />
      <circle cx="80" cy="58" r="42" fill="#F5F7FF" />
      <circle cx="554" cy="288" r="60" fill="#F7F9FD" />
      <path d="M74 180h492" stroke="#DDE4F2" strokeWidth="3" strokeLinecap="round" />
      {steps.map((step, index) => {
        const x = 74 + index * 123;
        return (
          <g key={step}>
            <circle cx={x} cy="180" r="28" fill={index === 2 ? '#4B6FD8' : '#EAF0FF'} stroke={index === 2 ? '#3659BB' : '#C8D6FF'} strokeWidth="2" />
            <text x={x} y="244" textAnchor="middle" fill="#17264D" fontFamily="Inter, sans-serif" fontSize="15" fontWeight="700">
              {step.split(' ').slice(0, 2).join(' ')}
            </text>
            <text x={x} y="265" textAnchor="middle" fill="#46546D" fontFamily="Inter, sans-serif" fontSize="13">
              {step.split(' ').slice(2).join(' ')}
            </text>
          </g>
        );
      })}
      <g transform="translate(172 64)">
        <path d="M36 0c44 16 32 48 76 64" fill="none" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        <path d="M112 0C68 16 80 48 36 64" fill="none" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        <path d="M52 19h44" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M52 44h44" stroke="#C8D6FF" strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M306 118l42-42" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
      <path d="M336 72l16 1-1 16" fill="none" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}


function ConvergenceMobileFlow() {
  const steps = ['Patient / Donor Cell', 'Genetic Modification or Editing', 'Processing, Expansion & Testing', 'Therapeutic Cell Product', 'Administration & Follow-Up'];
  return (
    <div className="sesen-cgt-mobile-flow" aria-label="Cell therapy and gene engineering convergence workflow">
      {steps.map((step) => (
        <div className="sesen-cgt-mobile-flow-step" key={step}>{step}</div>
      ))}
    </div>
  );
}

function PatientLanguageMobileGraphic() {
  return (
    <div aria-label="One approved scientific concept adapted for different audiences">
      <div className="sesen-cgt-mobile-language-source">Approved Source Concept</div>
      <div className="sesen-cgt-mobile-language-grid">
        {['Regulatory Language', 'Clinical Language', 'Healthcare Professional Language', 'Patient Language'].map((label) => (
          <div className="sesen-cgt-mobile-language-item" key={label}>{label}</div>
        ))}
      </div>
    </div>
  );
}

function PatientLanguageGraphic() {
  return (
    <svg viewBox="0 0 620 420" role="img" aria-label="Scientific language adapted into regulatory clinical healthcare and patient communication">
      <rect width="620" height="420" rx="26" fill="#FFFFFF" />
      <circle cx="310" cy="128" r="64" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="3" />
      <text x="310" y="122" textAnchor="middle" fill="#17264D" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700">Approved</text>
      <text x="310" y="146" textAnchor="middle" fill="#17264D" fontFamily="Inter, sans-serif" fontSize="17" fontWeight="700">Source Concept</text>
      {[
        ['Regulatory', 120, 286],
        ['Clinical', 250, 318],
        ['HCP', 382, 318],
        ['Patient', 512, 286],
      ].map(([label, x, y]) => (
        <g key={label}>
          <path d={`M310 188 C ${x} 216, ${x} 238, ${x} ${y - 42}`} fill="none" stroke="#DDE4F2" strokeWidth="3" />
          <rect x={x - 62} y={y - 42} width="124" height="84" rx="22" fill="#F5F7FF" stroke="#DDE4F2" />
          <text x={x} y={y + 5} textAnchor="middle" fill="#17264D" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="700">{label}</text>
        </g>
      ))}
      <rect x="136" y="50" width="86" height="12" rx="6" fill="#DDE4F2" />
      <rect x="398" y="54" width="72" height="12" rx="6" fill="#EAF0FF" />
      <circle cx="104" cy="86" r="22" fill="#F7F9FD" stroke="#DDE4F2" />
      <circle cx="514" cy="100" r="18" fill="#F7F9FD" stroke="#DDE4F2" />
    </svg>
  );
}
