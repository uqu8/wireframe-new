import React from "react";

const SesenLabelingTranslationServicesWireframe = () => {
  const ecosystemGroups = [
    {
      title: "Product & Regulatory Labeling",
      items: [
        "Product information",
        "Prescribing information",
        "SmPC content",
        "Package inserts",
        "Patient Information Leaflets (PILs)",
        "Medication guides",
        "Market-specific product information",
        "Labeling supplements and updates",
      ],
    },
    {
      title: "Medical Device & Diagnostic Labeling",
      items: [
        "Device labels",
        "IVD labels",
        "IFUs and eIFUs",
        "User and operating instructions",
        "Safety information",
        "Warnings and precautions",
        "Symbols and explanatory content",
        "Digital labeling",
      ],
    },
    {
      title: "Packaging & Artwork",
      items: [
        "Cartons",
        "Container labels",
        "Primary and secondary packaging",
        "Blister packs",
        "Bottles and vials",
        "Inserts and leaflets",
        "Artwork-linked text",
        "Market-specific packaging",
      ],
    },
    {
      title: "Patient & HCP Information",
      items: [
        "Patient-facing product information",
        "Healthcare professional information",
        "Safe-use instructions",
        "Administration guidance",
        "Warnings and precautions",
        "Patient instructions",
        "Product education related to safe use",
      ],
    },
    {
      title: "Digital & Electronic Labeling",
      items: [
        "Electronic product information",
        "eIFUs",
        "Digital labels",
        "Web-based product information",
        "PDF labeling",
        "Structured and electronic labeling content",
        "Product information delivered through digital channels",
      ],
    },
    {
      title: "Lifecycle & Safety Updates",
      items: [
        "Safety-driven revisions",
        "Product information updates",
        "Post-approval changes",
        "New language additions",
        "Market expansion",
        "Packaging revisions",
        "Product extensions",
        "Recurring global labeling maintenance",
      ],
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Source & Version Review",
      text: "We begin by understanding what is changing and how the translated content will be used. Source files, prior versions, references, artwork, target languages, markets, and delivery requirements are reviewed to establish the appropriate workflow.",
      detail: "For update projects, version-aware review helps identify changed content while preserving relevant previously approved material.",
    },
    {
      number: "02",
      title: "Terminology Alignment",
      text: "Product terminology should remain consistent wherever it appears. Sesen can incorporate client-approved glossaries, existing translations, translation memories, product names, medical and regulatory terminology, safety language, style guides, and market preferences.",
      detail: "Terminology governance is especially valuable when the same concepts recur across product information, packaging, patient materials, IFUs, regulatory documents, and successive labeling updates.",
    },
    {
      number: "03",
      title: "Specialized Life Sciences Translation",
      text: "Content is assigned to professional linguists suited to the language pair, subject matter, audience, and intended use, with attention to clinical and technical meaning, safety-critical language, readability, and approved references.",
      detail: "For regulated labeling, the goal is precise, controlled multilingual communication appropriate to the content and audience.",
    },
    {
      number: "04",
      title: "Independent Review & Quality Assurance",
      text: "Structured review can address meaning, completeness, terminology, product names, numbers, units, warnings, repeated content, source-to-target correspondence, formatting, and client-specific requirements.",
      detail: "Sesen combines professional human review with technology-assisted QA to help reviewers focus on potential risk areas.",
    },
    {
      number: "05",
      title: "Multilingual Artwork & Formatting",
      text: "A correct translation must also work inside the actual label, carton, leaflet, IFU, or digital format. Our multilingual production teams support localized layouts while accounting for text expansion, typography, tables, callouts, line breaks, page flow, and script-specific requirements.",
      detail: "The aim is to preserve hierarchy, readability, and production integrity across target-language formats.",
    },
    {
      number: "06",
      title: "In-Context Linguistic QA",
      text: "Some issues only become visible after translated text is placed into its final layout. In-context review can help identify truncation, missing content, poor line breaks, misplaced language, inconsistent terminology, formatting shifts, and visual ambiguity.",
      detail: "This final-context perspective is particularly important for labels, cartons, packaging, IFUs, and other space-constrained or safety-sensitive materials.",
    },
    {
      number: "07",
      title: "Controlled Delivery & Update Support",
      text: "Final files are prepared in the required formats for the client's review, regulatory, production, publishing, or market workflow.",
      detail: "For recurring programs, terminology assets, translation memories, approved references, and prior translations can support subsequent labeling revisions and language expansion.",
    },
  ];

  const maintenanceItems = [
    {
      title: "Version-Aware Updates",
      text: "Distinguish revised content from unchanged material so teams can focus translation and review while retaining consistency with existing approved language.",
    },
    {
      title: "Translation Memory Reuse",
      text: "Reuse relevant approved content across labeling revisions, IFU updates, product families, related packaging, additional languages, and recurring safety content.",
    },
    {
      title: "Terminology Governance",
      text: "Maintain consistent product names, indications, warnings, instructions, device components, safety statements, and regulatory terminology across languages.",
    },
    {
      title: "Cross-Asset Consistency",
      text: "Help keep product information, patient materials, cartons, product labels, IFUs, and digital labeling aligned as connected content.",
    },
    {
      title: "New Markets & Languages",
      text: "Carry established terminology, approved references, and product knowledge forward when a labeling program expands into additional markets.",
    },
    {
      title: "Reviewer Feedback Management",
      text: "Capture approved client and in-market language decisions so they can inform future updates instead of being rediscovered in each new project.",
    },
  ];

  const aiChecks = [
    "Terminology inconsistencies",
    "Numeric and unit discrepancies",
    "Missing or added content",
    "Repeated-content mismatches",
    "Version differences",
    "Formatting and structural anomalies",
  ];

  const humanDecisions = [
    "Linguistic meaning and nuance",
    "Product-specific terminology",
    "Clinical and technical context",
    "Appropriateness for the intended audience",
    "Resolution of flagged differences",
    "Final linguistic decisions",
  ];

  const services = [
    {
      title: "Drug Labeling & Packaging Translation",
      text: "Pharmaceutical and biotechnology product information, patient leaflets, cartons, packaging, safety updates, and market-specific labeling.",
      href: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
      link: "Explore Drug Labeling",
    },
    {
      title: "Medical Device Labeling Translation",
      text: "Medical device and diagnostic labels, packaging, safety information, IVD labeling, digital labeling, and market updates.",
      href: "https://www.sesen.com/medical-device-labeling-translation-services/",
      link: "Explore Medical Device Labeling",
    },
    {
      title: "IFU Translation Services",
      text: "Multilingual IFUs and eIFUs with terminology control, formatting support, update management, and linguistic QA.",
      href: "https://www.sesen.com/ifu-translation-services/",
      link: "Explore IFU Translation",
    },
    {
      title: "Label Review & In-Context QA",
      text: "Linguistic review of translated content within final or near-final packaging, labels, artwork, IFUs, and other formatted materials.",
      href: "https://www.sesen.com/label-review-in-context-qa/",
      link: "Explore In-Context QA",
    },
    {
      title: "Medical Packaging Translation & Formatting",
      text: "Translation, typesetting, formatting, and artwork support for cartons, labels, inserts, packaging, and production-sensitive content.",
      href: "https://www.sesen.com/medical-packaging-design-translation-formatting/",
      link: "Explore Packaging Services",
    },
    {
      title: "Life Sciences Labeling Workspace",
      text: "A centralized environment for recurring multilingual labeling translation, validation, terminology, versions, review, approvals, and lifecycle maintenance.",
      href: "https://www.sesen.com/life-sciences-labeling-workspace/",
      link: "Explore the Labeling Workspace",
    },
  ];

  const qualityItems = [
    {
      title: "Life Sciences Specialization",
      text: "Sesen focuses on life sciences translation and localization across pharmaceutical, biotechnology, medical device, CRO, healthcare, and related regulated environments.",
    },
    {
      title: "Professional Native Linguists",
      text: "Projects can be matched with native-language professionals whose medical, scientific, pharmaceutical, technical, or regulatory experience fits the content and audience.",
    },
    {
      title: "ISO-Certified Quality",
      text: "Quality processes support structured translation, review, documentation, and regulated-content workflows for global life sciences programs.",
    },
    {
      title: "Terminology & Translation Memory",
      text: "Approved glossaries, translation memory, style guides, product references, and client-specific rules help maintain consistency across recurring labeling programs.",
    },
    {
      title: "Version & Change Control",
      text: "Version-aware workflows support labeling revisions, IFU updates, safety changes, regulatory updates, and ongoing multilingual product communication.",
    },
    {
      title: "Secure Enterprise Delivery",
      text: "Controlled project workflows support confidential product information, unpublished regulatory materials, proprietary terminology, and pre-launch content.",
    },
  ];

  const faqs = [
    {
      q: "What are labeling translation services?",
      a: "Labeling translation services adapt regulated product labeling from a source language into one or more target languages while preserving meaning, terminology, safety information, product information, formatting requirements, and relevant market context. In life sciences, this can include pharmaceutical product information, patient leaflets, medical device labels, IFUs, eIFUs, packaging, cartons, warnings, digital labeling, and related product content.",
    },
    {
      q: "How is life sciences labeling translation different from general translation?",
      a: "Life sciences labeling often contains safety-critical, technical, medical, and regulated information. In addition to linguistic accuracy, teams may need to control approved terminology, numbers, units, warnings, product identifiers, versions, reference materials, formatting, artwork, and consistency across related labeling assets. That makes specialized expertise, structured review, terminology management, and in-context QA particularly important.",
    },
    {
      q: "Does Sesen support both pharmaceutical and medical device labeling?",
      a: "Yes. Sesen supports pharmaceutical, biotechnology, medical device, IVD, and related life sciences labeling programs, with dedicated service workflows for drug labeling, medical device labeling, IFUs, packaging, and in-context QA.",
    },
    {
      q: "Can Sesen translate IFUs and eIFUs?",
      a: "Yes. Sesen provides specialized IFU translation services for medical devices, diagnostics, and related products, including multilingual formatting, terminology consistency, updates, and in-context review. Sesen can also support electronic IFUs and other digital labeling content.",
    },
    {
      q: "Can Sesen work with packaging and artwork files?",
      a: "Yes. Sesen supports multilingual formatting and artwork-sensitive workflows for labels, cartons, packaging, leaflets, inserts, IFUs, and other formatted life sciences content. In-context QA can also be performed after translated text is placed into final or near-final artwork.",
    },
    {
      q: "How does Sesen manage recurring labeling updates across multiple languages?",
      a: "Sesen can use version-aware workflows, terminology resources, translation memory, approved reference content, and structured review to support recurring labeling changes. Existing approved translations can be reused where appropriate while changed content receives focused translation and review.",
    },
    {
      q: "Can Sesen support labeling translation for global markets?",
      a: "Yes. Sesen supports more than 150 languages. The exact workflow depends on the product, target markets, intended audience, applicable requirements, source materials, and client-approved regulatory references.",
    },
    {
      q: "How does Sesen use AI in labeling translation?",
      a: "AI-enabled technology can assist with terminology comparison, numeric checks, missing-content detection, repeated-content consistency, version review, and multilingual QA. For regulated labeling, professional human expertise remains central: qualified linguists and project teams evaluate findings in context and make the final linguistic decisions.",
    },
    {
      q: "Can Sesen review translations after they are placed into final label artwork?",
      a: "Yes. Sesen's in-context QA services help evaluate translated content in final or near-final layouts and can help identify issues involving truncation, text expansion, line breaks, misplaced content, formatting, terminology, and the relationship between language and visual presentation.",
    },
    {
      q: "Can Sesen support an ongoing global labeling program?",
      a: "Yes. Sesen supports both individual labeling projects and recurring multilingual programs involving multiple products, languages, markets, revisions, and reviewers. The Sesen Labeling Workspace can centralize multilingual labeling translation, validation, version tracking, review, approvals, delivery history, and lifecycle management.",
    },
  ];

  const Arrow = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="sesen-labeling-arrow">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Check = () => (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="sesen-labeling-check">
      <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="m5.3 9 2.3 2.3 5.1-5.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const HeroArtwork = () => (
    <div className="sesen-labeling-hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 520" role="img">
        <defs>
          <linearGradient id="sesenLabelSoft" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F5F7FF" />
            <stop offset="100%" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>
        <circle cx="292" cy="255" r="205" fill="url(#sesenLabelSoft)" />
        <circle cx="292" cy="255" r="154" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />

        <g transform="translate(215 132)">
          <rect x="0" y="0" width="154" height="196" rx="18" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
          <rect x="24" y="26" width="73" height="10" rx="5" fill="#17264D" opacity="0.92" />
          <rect x="24" y="52" width="106" height="7" rx="3.5" fill="#A8B6D6" />
          <rect x="24" y="69" width="92" height="7" rx="3.5" fill="#C4CEE3" />
          <rect x="24" y="96" width="106" height="48" rx="8" fill="#F5F7FF" stroke="#DDE4F2" />
          <circle cx="47" cy="120" r="12" fill="#4B6FD8" opacity="0.12" />
          <path d="M42 120h10M47 115v10" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <rect x="68" y="109" width="47" height="6" rx="3" fill="#6F8BE1" />
          <rect x="68" y="124" width="34" height="6" rx="3" fill="#C4CEE3" />
          <rect x="24" y="162" width="84" height="7" rx="3.5" fill="#C4CEE3" />
        </g>

        <g transform="translate(68 105)">
          <rect x="0" y="0" width="120" height="118" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M28 32h64M28 49h48" stroke="#68758B" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
          <rect x="28" y="70" width="64" height="23" rx="6" fill="#EAF0FF" />
          <path d="M39 82h42" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(390 110)">
          <path d="M25 0h96l18 25v113H25z" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M121 0v25h18" fill="#F5F7FF" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="45" y="45" width="71" height="7" rx="3.5" fill="#68758B" />
          <rect x="45" y="62" width="54" height="7" rx="3.5" fill="#B8C3DA" />
          <rect x="45" y="84" width="75" height="30" rx="7" fill="#EAF0FF" />
          <path d="M58 99h48" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(70 315)">
          <rect x="0" y="0" width="136" height="90" rx="15" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="0" y="0" width="136" height="20" rx="15" fill="#4B6FD8" opacity="0.13" />
          <rect x="21" y="39" width="64" height="7" rx="3.5" fill="#17264D" opacity="0.8" />
          <rect x="21" y="56" width="91" height="7" rx="3.5" fill="#B8C3DA" />
        </g>

        <g transform="translate(392 315)">
          <rect x="0" y="0" width="136" height="92" rx="15" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="18" y="18" width="100" height="56" rx="8" fill="#F5F7FF" />
          <circle cx="40" cy="46" r="11" fill="#4B6FD8" opacity="0.15" />
          <path d="M35 46h10M40 41v10" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <rect x="61" y="35" width="42" height="6" rx="3" fill="#68758B" />
          <rect x="61" y="51" width="31" height="6" rx="3" fill="#C4CEE3" />
        </g>

        <path d="M188 166C208 166 211 171 228 181M369 185c15-8 26-13 45-13M199 350c24-17 31-23 45-33M364 320c19 10 28 18 42 32" fill="none" stroke="#6F8BE1" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 8" />
        <circle cx="225" cy="179" r="4" fill="#4B6FD8" />
        <circle cx="412" cy="172" r="4" fill="#4B6FD8" />
        <circle cx="243" cy="316" r="4" fill="#4B6FD8" />
        <circle cx="407" cy="351" r="4" fill="#4B6FD8" />
      </svg>
    </div>
  );

  return (
    <main className="sesen-labeling-page">
      <style>{`
        .sesen-labeling-page {
          --sesen-label-primary: #4B6FD8;
          --sesen-label-primary-dark: #3659BB;
          --sesen-label-deep-blue: #253F8F;
          --sesen-label-mid-blue: #6F8BE1;
          --sesen-label-soft-blue: #EAF0FF;
          --sesen-label-pale-blue: #F5F7FF;
          --sesen-label-navy: #17264D;
          --sesen-label-ink: #111827;
          --sesen-label-body: #46546D;
          --sesen-label-muted: #68758B;
          --sesen-label-border: #DDE4F2;
          --sesen-label-divider: #E9EEF8;
          --sesen-label-soft-bg: #F7F9FD;
          --sesen-label-white: #FFFFFF;
          --sesen-label-light-blue: #C8D6FF;
          color: var(--sesen-label-body);
          background: var(--sesen-label-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .sesen-labeling-page *,
        .sesen-labeling-page *::before,
        .sesen-labeling-page *::after {
          box-sizing: border-box;
        }

        .sesen-labeling-page a {
          color: inherit;
        }

        .sesen-labeling-page .sesen-labeling-container {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .sesen-labeling-page .sesen-labeling-section {
          padding: 96px 0;
          position: relative;
        }

        .sesen-labeling-page .sesen-labeling-section--dense {
          padding: 80px 0;
        }

        .sesen-labeling-page .sesen-labeling-soft {
          background: var(--sesen-label-soft-bg);
        }

        .sesen-labeling-page .sesen-labeling-pale {
          background: var(--sesen-label-pale-blue);
        }

        .sesen-labeling-page .sesen-labeling-dark {
          background: var(--sesen-label-navy);
          color: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-heading-wrap {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sesen-labeling-page .sesen-labeling-heading-wrap--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-labeling-page .sesen-labeling-eyebrow {
          margin: 0 0 14px;
          color: var(--sesen-label-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .sesen-labeling-page .sesen-labeling-dark .sesen-labeling-eyebrow {
          color: var(--sesen-label-light-blue);
        }

        .sesen-labeling-page h1,
        .sesen-labeling-page h2,
        .sesen-labeling-page h3 {
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          color: var(--sesen-label-navy);
          font-style: normal;
          font-stretch: 100%;
          font-weight: 500;
          margin-top: 0;
        }

        .sesen-labeling-page .sesen-labeling-dark h2,
        .sesen-labeling-page .sesen-labeling-dark h3 {
          color: #FFFFFF;
        }

        .sesen-labeling-page h1 {
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
          margin-bottom: 22px;
        }

        .sesen-labeling-page h2 {
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
          margin-bottom: 18px;
        }

        .sesen-labeling-page h3 {
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: normal;
          margin-bottom: 10px;
        }

        .sesen-labeling-page p {
          margin: 0 0 18px;
          color: var(--sesen-label-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .sesen-labeling-page .sesen-labeling-dark p {
          color: #D9E3FA;
        }

        .sesen-labeling-page .sesen-labeling-lead {
          font-size: 19px;
          line-height: 1.7;
          color: #293954;
          max-width: 760px;
        }

        .sesen-labeling-page .sesen-labeling-heading-wrap--center .sesen-labeling-lead {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-labeling-page .sesen-labeling-dark .sesen-labeling-lead {
          color: #E7EDFC;
        }

        .sesen-labeling-page .sesen-labeling-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.035em;
          line-height: 1;
          text-transform: uppercase;
          text-decoration: none;
          border: 1px solid transparent;
          transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .sesen-labeling-page .sesen-labeling-btn:hover {
          transform: translateY(-1px);
        }

        .sesen-labeling-page .sesen-labeling-btn:focus-visible,
        .sesen-labeling-page .sesen-labeling-link:focus-visible,
        .sesen-labeling-page summary:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.34);
          outline-offset: 3px;
        }

        .sesen-labeling-page .sesen-labeling-btn--primary {
          background: var(--sesen-label-primary);
          color: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-btn--primary:hover {
          background: var(--sesen-label-primary-dark);
        }

        .sesen-labeling-page .sesen-labeling-btn--secondary {
          background: #FFFFFF;
          color: var(--sesen-label-ink);
          border-color: #C9D4EA;
        }

        .sesen-labeling-page .sesen-labeling-btn--secondary:hover {
          background: var(--sesen-label-pale-blue);
          border-color: #AEBDE0;
        }

        .sesen-labeling-page .sesen-labeling-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sesen-label-primary-dark);
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .sesen-labeling-page .sesen-labeling-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-labeling-page .sesen-labeling-arrow {
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
        }

        .sesen-labeling-page .sesen-labeling-check {
          width: 18px;
          height: 18px;
          color: var(--sesen-label-primary-dark);
          flex: 0 0 auto;
          margin-top: 3px;
        }

        /* Hero */
        .sesen-labeling-page .sesen-labeling-hero {
          padding: 94px 0 92px;
          background:
            radial-gradient(circle at 87% 14%, rgba(75, 111, 216, 0.09), transparent 29%),
            #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.06fr) minmax(420px, 0.94fr);
          gap: 72px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-hero-copy {
          max-width: 700px;
        }

        .sesen-labeling-page .sesen-labeling-hero-copy .sesen-labeling-lead {
          font-size: 20px;
          line-height: 1.66;
          margin-bottom: 16px;
          color: #293954;
        }

        .sesen-labeling-page .sesen-labeling-hero-copy .sesen-labeling-support {
          max-width: 660px;
          margin-bottom: 30px;
        }

        .sesen-labeling-page .sesen-labeling-hero-art {
          width: min(100%, 560px);
          margin-left: auto;
        }

        .sesen-labeling-page .sesen-labeling-hero-art svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Trust strip */
        .sesen-labeling-page .sesen-labeling-trust {
          border-top: 1px solid var(--sesen-label-divider);
          border-bottom: 1px solid var(--sesen-label-divider);
          background: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-trust-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }

        .sesen-labeling-page .sesen-labeling-trust-item {
          padding: 25px 24px;
          text-align: center;
          position: relative;
          color: var(--sesen-label-navy);
          font-size: 16px;
          font-weight: 600;
        }

        .sesen-labeling-page .sesen-labeling-trust-item::after {
          content: "";
          display: block;
          width: 28px;
          height: 2px;
          margin: 10px auto 0;
          border-radius: 999px;
          background: var(--sesen-label-soft-blue);
        }

        /* Authority */
        .sesen-labeling-page .sesen-labeling-authority-grid {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 78px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-authority-copy {
          max-width: 560px;
        }

        .sesen-labeling-page .sesen-labeling-flow {
          padding: 28px 30px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-label-border);
          border-radius: 28px;
          box-shadow: 0 18px 50px rgba(23, 38, 77, 0.06);
        }

        .sesen-labeling-page .sesen-labeling-flow-row {
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 16px;
          align-items: start;
          padding: 18px 0;
          position: relative;
        }

        .sesen-labeling-page .sesen-labeling-flow-row + .sesen-labeling-flow-row {
          border-top: 1px solid var(--sesen-label-divider);
        }

        .sesen-labeling-page .sesen-labeling-flow-node {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--sesen-label-soft-blue);
          color: var(--sesen-label-primary-dark);
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 700;
        }

        .sesen-labeling-page .sesen-labeling-flow-row h3 {
          font-size: 19px;
          margin-bottom: 4px;
        }

        .sesen-labeling-page .sesen-labeling-flow-row p {
          margin: 0;
          color: var(--sesen-label-muted);
        }

        /* Pathways */
        .sesen-labeling-page .sesen-labeling-pathways {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--sesen-label-border);
          border-radius: 30px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-pathway {
          padding: 42px 44px 40px;
        }

        .sesen-labeling-page .sesen-labeling-pathway + .sesen-labeling-pathway {
          border-left: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-pathway-kicker {
          width: 46px;
          height: 6px;
          border-radius: 999px;
          background: var(--sesen-label-primary);
          margin-bottom: 26px;
        }

        .sesen-labeling-page .sesen-labeling-pathway ul,
        .sesen-labeling-page .sesen-labeling-ecosystem-list,
        .sesen-labeling-page .sesen-labeling-plain-list,
        .sesen-labeling-page .sesen-labeling-artwork-list {
          list-style: none;
          padding: 0;
          margin: 22px 0 26px;
        }

        .sesen-labeling-page .sesen-labeling-pathway li,
        .sesen-labeling-page .sesen-labeling-plain-list li,
        .sesen-labeling-page .sesen-labeling-artwork-list li {
          display: flex;
          gap: 9px;
          align-items: flex-start;
          padding: 7px 0;
          color: var(--sesen-label-body);
        }

        .sesen-labeling-page .sesen-labeling-pathway li::before,
        .sesen-labeling-page .sesen-labeling-plain-list li::before,
        .sesen-labeling-page .sesen-labeling-artwork-list li::before {
          content: "";
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--sesen-label-primary);
          margin-top: 10px;
          flex: 0 0 auto;
        }

        /* Ecosystem */
        .sesen-labeling-page .sesen-labeling-ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-label-border);
          border-left: 1px solid var(--sesen-label-border);
          background: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-group {
          padding: 32px 30px;
          border-right: 1px solid var(--sesen-label-border);
          border-bottom: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-group h3 {
          font-size: 21px;
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-list {
          margin: 18px 0 0;
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-list li {
          padding: 4px 0;
          color: var(--sesen-label-body);
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-note {
          margin-top: 24px;
          padding: 22px 26px;
          border-left: 2px solid var(--sesen-label-primary);
          background: rgba(255,255,255,0.62);
          color: var(--sesen-label-body);
          font-size: 16px;
        }

        .sesen-labeling-page .sesen-labeling-ecosystem-note strong {
          color: var(--sesen-label-navy);
          font-weight: 600;
        }

        .sesen-labeling-page .sesen-labeling-related-expertise {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px 18px;
          margin-top: 26px;
          padding-top: 22px;
          border-top: 1px solid var(--sesen-label-border);
          font-size: 16px;
        }

        .sesen-labeling-page .sesen-labeling-related-expertise span {
          color: var(--sesen-label-muted);
          font-weight: 600;
        }

        .sesen-labeling-page .sesen-labeling-related-expertise a {
          color: var(--sesen-label-primary-dark);
          font-weight: 600;
          text-decoration: none;
        }

        .sesen-labeling-page .sesen-labeling-related-expertise a:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        /* Workflow */
        .sesen-labeling-page .sesen-labeling-workflow-grid {
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1.28fr);
          gap: 70px;
          align-items: start;
        }

        .sesen-labeling-page .sesen-labeling-workflow-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-intro .sesen-labeling-lead {
          font-size: 18px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-list {
          border-left: 1px solid var(--sesen-label-border);
          margin-left: 24px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-step {
          position: relative;
          padding: 0 0 40px 56px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-step:last-child {
          padding-bottom: 0;
        }

        .sesen-labeling-page .sesen-labeling-workflow-number {
          position: absolute;
          left: -25px;
          top: 0;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #FFFFFF;
          border: 1px solid #B9C7E7;
          color: var(--sesen-label-primary-dark);
          font-size: 12px;
          font-weight: 700;
        }

        .sesen-labeling-page .sesen-labeling-workflow-step h3 {
          margin-bottom: 8px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-step p {
          max-width: 720px;
          margin-bottom: 8px;
        }

        .sesen-labeling-page .sesen-labeling-workflow-detail {
          color: var(--sesen-label-muted) !important;
        }

        /* Maintenance */
        .sesen-labeling-page .sesen-labeling-maintenance-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 64px;
          align-items: start;
        }

        .sesen-labeling-page .sesen-labeling-connected-mini {
          margin-top: 34px;
          padding: 24px 26px;
          background: #FFFFFF;
          border: 1px solid var(--sesen-label-border);
          border-radius: 22px;
        }

        .sesen-labeling-page .sesen-labeling-connected-mini-label {
          margin-bottom: 14px;
          color: var(--sesen-label-primary-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.09em;
          text-transform: uppercase;
        }

        .sesen-labeling-page .sesen-labeling-connected-chain {
          display: flex;
          flex-wrap: wrap;
          gap: 7px 9px;
          align-items: center;
          color: var(--sesen-label-navy);
          font-size: 14px;
          font-weight: 600;
          line-height: 1.45;
        }

        .sesen-labeling-page .sesen-labeling-connected-chain span:nth-child(even) {
          color: var(--sesen-label-mid-blue);
        }

        .sesen-labeling-page .sesen-labeling-maintenance-list {
          border-top: 1px solid #C9D5ED;
        }

        .sesen-labeling-page .sesen-labeling-maintenance-item {
          display: grid;
          grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr);
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid #C9D5ED;
        }

        .sesen-labeling-page .sesen-labeling-maintenance-item h3 {
          font-size: 19px;
          margin: 0;
        }

        .sesen-labeling-page .sesen-labeling-maintenance-item p {
          margin: 0;
        }

        /* Workspace */
        .sesen-labeling-page .sesen-labeling-workspace-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 72px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-workspace-panel {
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(200,214,255,0.22);
          border-radius: 28px;
          padding: 28px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(200,214,255,0.18);
        }

        .sesen-labeling-page .sesen-labeling-workspace-title {
          color: #FFFFFF;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 18px;
          font-weight: 500;
        }

        .sesen-labeling-page .sesen-labeling-workspace-status {
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(75,111,216,0.22);
          color: #DCE6FF;
          font-size: 12px;
          font-weight: 600;
        }

        .sesen-labeling-page .sesen-labeling-workspace-rows {
          padding-top: 12px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-row {
          display: grid;
          grid-template-columns: 1.15fr 0.65fr 0.7fr;
          gap: 12px;
          align-items: center;
          padding: 14px 0;
          border-bottom: 1px solid rgba(200,214,255,0.13);
          color: #E8EEFF;
          font-size: 14px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-row:last-child {
          border-bottom: 0;
        }

        .sesen-labeling-page .sesen-labeling-workspace-row span:nth-child(2),
        .sesen-labeling-page .sesen-labeling-workspace-row span:nth-child(3) {
          color: #BFCBEC;
          font-size: 13px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-features {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 24px;
          margin: 28px 0 30px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-feature {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: #E2E9FC;
          font-size: 16px;
        }

        .sesen-labeling-page .sesen-labeling-workspace-feature .sesen-labeling-check {
          color: var(--sesen-label-light-blue);
        }

        /* Artwork */
        .sesen-labeling-page .sesen-labeling-artwork-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 76px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-artwork-visual {
          min-height: 490px;
          position: relative;
          background: var(--sesen-label-pale-blue);
          border: 1px solid var(--sesen-label-border);
          border-radius: 30px;
          overflow: hidden;
          padding: 42px;
        }

        .sesen-labeling-page .sesen-labeling-artboard {
          width: 78%;
          min-height: 354px;
          margin: 12px auto 0;
          background: #FFFFFF;
          border: 1px solid #CDD7EA;
          border-radius: 18px;
          box-shadow: 0 18px 42px rgba(23,38,77,0.08);
          padding: 30px 28px;
          position: relative;
        }

        .sesen-labeling-page .sesen-labeling-artboard-chip {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 999px;
          background: var(--sesen-label-soft-blue);
          color: var(--sesen-label-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .sesen-labeling-page .sesen-labeling-artboard-line {
          height: 8px;
          border-radius: 999px;
          background: #C3CEE2;
          margin-top: 15px;
        }

        .sesen-labeling-page .sesen-labeling-artboard-line--dark {
          background: var(--sesen-label-navy);
          width: 58%;
          margin-top: 26px;
        }

        .sesen-labeling-page .sesen-labeling-artboard-line--blue {
          background: var(--sesen-label-mid-blue);
          width: 72%;
        }

        .sesen-labeling-page .sesen-labeling-artboard-box {
          margin-top: 22px;
          padding: 18px;
          border-radius: 12px;
          background: #F7F9FD;
          border: 1px solid var(--sesen-label-divider);
        }

        .sesen-labeling-page .sesen-labeling-artboard-marker {
          position: absolute;
          min-height: 34px;
          padding: 0 12px;
          border-radius: 999px;
          background: var(--sesen-label-primary);
          color: #FFFFFF;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          line-height: 1;
          font-weight: 700;
          letter-spacing: 0.02em;
          white-space: nowrap;
          box-shadow: 0 9px 24px rgba(54,89,187,0.20);
        }

        .sesen-labeling-page .sesen-labeling-artboard-marker--one {
          right: 20px;
          top: 72px;
        }

        .sesen-labeling-page .sesen-labeling-artboard-marker--two {
          left: 18px;
          bottom: 72px;
        }

        .sesen-labeling-page .sesen-labeling-artwork-subsection {
          padding-top: 20px;
          margin-top: 26px;
          border-top: 1px solid var(--sesen-label-divider);
        }

        .sesen-labeling-page .sesen-labeling-artwork-subsection h3 {
          font-size: 20px;
        }

        /* AI */
        .sesen-labeling-page .sesen-labeling-ai-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          margin-top: 44px;
        }

        .sesen-labeling-page .sesen-labeling-ai-column {
          background: #FFFFFF;
          border: 1px solid var(--sesen-label-border);
          border-radius: 24px;
          padding: 30px;
        }

        .sesen-labeling-page .sesen-labeling-ai-column h3 {
          margin-bottom: 18px;
        }

        .sesen-labeling-page .sesen-labeling-ai-list {
          display: grid;
          gap: 13px;
        }

        .sesen-labeling-page .sesen-labeling-ai-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          color: var(--sesen-label-body);
        }

        .sesen-labeling-page .sesen-labeling-ai-anchor {
          margin: 28px auto 0;
          padding: 18px 24px;
          max-width: 720px;
          border-top: 1px solid #C9D5ED;
          border-bottom: 1px solid #C9D5ED;
          color: var(--sesen-label-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 22px;
          font-weight: 500;
          text-align: center;
        }

        /* Regulatory */
        .sesen-labeling-page .sesen-labeling-reg-grid {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 70px;
          align-items: start;
        }

        .sesen-labeling-page .sesen-labeling-reg-list {
          display: grid;
          gap: 0;
          border-top: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-reg-item {
          display: grid;
          grid-template-columns: 124px 1fr;
          gap: 26px;
          padding: 23px 0;
          border-bottom: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-reg-name {
          color: var(--sesen-label-primary-dark);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .sesen-labeling-page .sesen-labeling-reg-item p {
          margin: 0;
        }

        /* Quality */
        .sesen-labeling-page .sesen-labeling-quality-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-label-border);
          border-left: 1px solid var(--sesen-label-border);
          background: #FFFFFF;
        }

        .sesen-labeling-page .sesen-labeling-quality-item {
          padding: 32px 30px;
          border-right: 1px solid var(--sesen-label-border);
          border-bottom: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-quality-item h3 {
          font-size: 20px;
        }

        .sesen-labeling-page .sesen-labeling-quality-item p {
          margin-bottom: 0;
        }

        /* Services */
        .sesen-labeling-page .sesen-labeling-services-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 56px;
          border-top: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-service-row {
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-service-row h3 {
          font-size: 21px;
          margin-bottom: 8px;
        }

        .sesen-labeling-page .sesen-labeling-service-row p {
          margin-bottom: 13px;
        }

        /* Connected assets */
        .sesen-labeling-page .sesen-labeling-assets-grid {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 76px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-asset-map {
          position: relative;
          padding: 18px 0;
        }

        .sesen-labeling-page .sesen-labeling-asset-track {
          position: absolute;
          left: 24px;
          top: 44px;
          bottom: 44px;
          width: 1px;
          background: #AFC0E6;
        }

        .sesen-labeling-page .sesen-labeling-asset-node {
          position: relative;
          display: grid;
          grid-template-columns: 48px 1fr;
          gap: 18px;
          align-items: center;
          min-height: 76px;
        }

        .sesen-labeling-page .sesen-labeling-asset-dot {
          width: 18px;
          height: 18px;
          margin-left: 15px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 4px solid var(--sesen-label-primary);
          z-index: 1;
        }

        .sesen-labeling-page .sesen-labeling-asset-node strong {
          color: var(--sesen-label-navy);
          font-size: 17px;
          font-weight: 600;
        }

        .sesen-labeling-page .sesen-labeling-asset-proof {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0 36px;
          border-top: 1px solid #C9D5ED;
          margin-top: 32px;
        }

        .sesen-labeling-page .sesen-labeling-asset-proof-item {
          padding: 21px 0;
          border-bottom: 1px solid #C9D5ED;
        }

        .sesen-labeling-page .sesen-labeling-asset-proof-item strong {
          display: block;
          margin-bottom: 5px;
          color: var(--sesen-label-navy);
          font-size: 16px;
        }

        .sesen-labeling-page .sesen-labeling-asset-proof-item span {
          color: var(--sesen-label-body);
          font-size: 16px;
        }

        /* Why Sesen */
        .sesen-labeling-page .sesen-labeling-why-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          column-gap: 40px;
          border-top: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-why-item {
          padding: 26px 0 28px;
          border-bottom: 1px solid var(--sesen-label-divider);
        }

        .sesen-labeling-page .sesen-labeling-why-item h3 {
          font-size: 19px;
          margin-bottom: 7px;
        }

        .sesen-labeling-page .sesen-labeling-why-item p {
          margin: 0;
          color: var(--sesen-label-body);
          font-size: 16px;
        }

        /* FAQ */
        .sesen-labeling-page .sesen-labeling-faq-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-labeling-page .sesen-labeling-faq-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-labeling-page .sesen-labeling-faq-list {
          border-top: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-faq-item {
          border-bottom: 1px solid var(--sesen-label-border);
        }

        .sesen-labeling-page .sesen-labeling-faq-item summary {
          cursor: pointer;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 34px;
          gap: 22px;
          align-items: center;
          padding: 24px 0;
          color: var(--sesen-label-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.4;
        }

        .sesen-labeling-page .sesen-labeling-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .sesen-labeling-page .sesen-labeling-faq-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #C5D0E6;
          position: relative;
        }

        .sesen-labeling-page .sesen-labeling-faq-icon::before,
        .sesen-labeling-page .sesen-labeling-faq-icon::after {
          content: "";
          position: absolute;
          background: var(--sesen-label-primary-dark);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        .sesen-labeling-page .sesen-labeling-faq-icon::before {
          width: 10px;
          height: 1.5px;
        }

        .sesen-labeling-page .sesen-labeling-faq-icon::after {
          width: 1.5px;
          height: 10px;
          transition: transform 160ms ease;
        }

        .sesen-labeling-page .sesen-labeling-faq-item[open] .sesen-labeling-faq-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .sesen-labeling-page .sesen-labeling-faq-answer {
          max-width: 820px;
          padding: 0 48px 24px 0;
        }

        .sesen-labeling-page .sesen-labeling-faq-answer p {
          margin: 0;
          font-size: 16px;
        }

        /* Final CTA */
        .sesen-labeling-page .sesen-labeling-final {
          padding: 88px 0;
          background:
            radial-gradient(circle at 84% 30%, rgba(111,139,225,0.24), transparent 32%),
            var(--sesen-label-deep-blue);
        }

        .sesen-labeling-page .sesen-labeling-final-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 56px;
          align-items: center;
        }

        .sesen-labeling-page .sesen-labeling-final h2 {
          color: #FFFFFF;
          margin-bottom: 14px;
          max-width: 800px;
        }

        .sesen-labeling-page .sesen-labeling-final p {
          color: #E1E9FC;
          max-width: 760px;
          margin-bottom: 0;
          font-size: 18px;
        }

        .sesen-labeling-page .sesen-labeling-final .sesen-labeling-btn-row {
          justify-content: flex-end;
        }

        /* Responsive */
        @media (max-width: 1360px) {
          .sesen-labeling-page .sesen-labeling-container {
            width: min(1280px, calc(100% - 80px));
          }
          .sesen-labeling-page .sesen-labeling-hero-grid {
            gap: 48px;
          }
        }

        @media (max-width: 1080px) {
          .sesen-labeling-page .sesen-labeling-hero-grid,
          .sesen-labeling-page .sesen-labeling-authority-grid,
          .sesen-labeling-page .sesen-labeling-workspace-grid,
          .sesen-labeling-page .sesen-labeling-artwork-grid,
          .sesen-labeling-page .sesen-labeling-assets-grid {
            grid-template-columns: 1fr 1fr;
            gap: 44px;
          }

          .sesen-labeling-page .sesen-labeling-hero-art {
            width: 100%;
          }

          .sesen-labeling-page .sesen-labeling-ecosystem-grid,
          .sesen-labeling-page .sesen-labeling-quality-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-labeling-page .sesen-labeling-why-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 34px;
          }

          .sesen-labeling-page .sesen-labeling-artboard {
            width: 88%;
          }
        }

        @media (max-width: 900px) {
          .sesen-labeling-page .sesen-labeling-section {
            padding: 76px 0;
          }

          .sesen-labeling-page .sesen-labeling-section--dense {
            padding: 70px 0;
          }

          .sesen-labeling-page .sesen-labeling-hero {
            padding: 76px 0;
          }

          .sesen-labeling-page .sesen-labeling-hero-grid,
          .sesen-labeling-page .sesen-labeling-authority-grid,
          .sesen-labeling-page .sesen-labeling-workflow-grid,
          .sesen-labeling-page .sesen-labeling-maintenance-grid,
          .sesen-labeling-page .sesen-labeling-workspace-grid,
          .sesen-labeling-page .sesen-labeling-artwork-grid,
          .sesen-labeling-page .sesen-labeling-reg-grid,
          .sesen-labeling-page .sesen-labeling-assets-grid,
          .sesen-labeling-page .sesen-labeling-faq-grid,
          .sesen-labeling-page .sesen-labeling-final-grid {
            grid-template-columns: 1fr;
          }

          .sesen-labeling-page .sesen-labeling-hero-copy {
            max-width: 760px;
          }

          .sesen-labeling-page .sesen-labeling-hero-art {
            width: min(100%, 520px);
            margin: 10px auto 0;
          }

          .sesen-labeling-page .sesen-labeling-authority-copy {
            max-width: 760px;
          }

          .sesen-labeling-page .sesen-labeling-assets-copy {
            order: 1;
          }

          .sesen-labeling-page .sesen-labeling-asset-map {
            order: 2;
          }

          .sesen-labeling-page .sesen-labeling-workflow-intro,
          .sesen-labeling-page .sesen-labeling-faq-intro {
            position: static;
          }

          .sesen-labeling-page .sesen-labeling-maintenance-item {
            grid-template-columns: 0.82fr 1.18fr;
          }

          .sesen-labeling-page .sesen-labeling-services-list {
            column-gap: 34px;
          }

          .sesen-labeling-page .sesen-labeling-final .sesen-labeling-btn-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .sesen-labeling-page .sesen-labeling-container {
            width: calc(100% - 56px);
          }

          .sesen-labeling-page h1 {
            font-size: 42px;
          }

          .sesen-labeling-page h2 {
            font-size: 32px;
          }

          .sesen-labeling-page h3 {
            font-size: 21px;
          }

          .sesen-labeling-page .sesen-labeling-lead,
          .sesen-labeling-page .sesen-labeling-hero-copy .sesen-labeling-lead {
            font-size: 18px;
          }

          .sesen-labeling-page .sesen-labeling-trust-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .sesen-labeling-page .sesen-labeling-trust-item:nth-child(3),
          .sesen-labeling-page .sesen-labeling-trust-item:nth-child(4) {
            border-top: 1px solid var(--sesen-label-divider);
          }


          .sesen-labeling-page .sesen-labeling-pathways,
          .sesen-labeling-page .sesen-labeling-ai-grid,
          .sesen-labeling-page .sesen-labeling-services-list {
            grid-template-columns: 1fr;
          }

          .sesen-labeling-page .sesen-labeling-pathway + .sesen-labeling-pathway {
            border-left: 0;
            border-top: 1px solid var(--sesen-label-border);
          }

          .sesen-labeling-page .sesen-labeling-maintenance-item {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sesen-labeling-page .sesen-labeling-reg-item {
            grid-template-columns: 104px 1fr;
            gap: 20px;
          }

          .sesen-labeling-page .sesen-labeling-artwork-visual {
            min-height: 430px;
          }

          /* v1.2: center standalone mobile section titles without forcing substantive copy to center */
          .sesen-labeling-page .sesen-labeling-mobile-center {
            text-align: left;
            margin-left: auto;
            margin-right: auto;
          }

          .sesen-labeling-page .sesen-labeling-mobile-center > .sesen-labeling-eyebrow,
          .sesen-labeling-page .sesen-labeling-mobile-center > h2 {
            text-align: center;
          }

          .sesen-labeling-page .sesen-labeling-mobile-center > .sesen-labeling-lead {
            text-align: left;
          }

          /* Information-dense, workflow, regulatory, directory, FAQ headings intentionally remain left aligned */
          .sesen-labeling-page .sesen-labeling-mobile-left {
            text-align: left;
          }
        }

        @media (max-width: 640px) {
          .sesen-labeling-page .sesen-labeling-ecosystem-grid,
          .sesen-labeling-page .sesen-labeling-quality-grid,
          .sesen-labeling-page .sesen-labeling-workspace-features,
          .sesen-labeling-page .sesen-labeling-asset-proof,
          .sesen-labeling-page .sesen-labeling-why-grid {
            grid-template-columns: 1fr;
          }

          .sesen-labeling-page .sesen-labeling-why-grid {
            column-gap: 0;
          }
        }

        @media (max-width: 560px) {
          .sesen-labeling-page .sesen-labeling-container {
            width: calc(100% - 40px);
          }

          .sesen-labeling-page .sesen-labeling-section {
            padding: 68px 0;
          }

          .sesen-labeling-page .sesen-labeling-section--dense {
            padding: 64px 0;
          }

          .sesen-labeling-page .sesen-labeling-hero {
            padding: 68px 0 64px;
          }

          .sesen-labeling-page .sesen-labeling-heading-wrap {
            margin-bottom: 36px;
          }

          .sesen-labeling-page .sesen-labeling-btn-row {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .sesen-labeling-page .sesen-labeling-btn {
            width: 100%;
          }

          .sesen-labeling-page .sesen-labeling-trust-grid {
            grid-template-columns: 1fr;
          }

          .sesen-labeling-page .sesen-labeling-trust-item {
            padding: 17px 20px;
          }

          .sesen-labeling-page .sesen-labeling-trust-item + .sesen-labeling-trust-item {
            border-top: 1px solid var(--sesen-label-divider);
          }


          .sesen-labeling-page .sesen-labeling-flow,
          .sesen-labeling-page .sesen-labeling-pathway,
          .sesen-labeling-page .sesen-labeling-ai-column,
          .sesen-labeling-page .sesen-labeling-workspace-panel {
            padding: 24px 22px;
          }

          .sesen-labeling-page .sesen-labeling-flow-row {
            grid-template-columns: 42px 1fr;
            gap: 12px;
          }

          .sesen-labeling-page .sesen-labeling-flow-node {
            width: 36px;
            height: 36px;
          }

          .sesen-labeling-page .sesen-labeling-workflow-list {
            margin-left: 19px;
          }

          .sesen-labeling-page .sesen-labeling-workflow-step {
            padding-left: 45px;
          }

          .sesen-labeling-page .sesen-labeling-workflow-number {
            left: -20px;
            width: 40px;
            height: 40px;
          }

          .sesen-labeling-page .sesen-labeling-workspace-row {
            grid-template-columns: 1fr auto;
            gap: 5px 12px;
          }

          .sesen-labeling-page .sesen-labeling-workspace-row span:first-child {
            grid-column: 1 / -1;
            color: #FFFFFF;
            font-weight: 600;
          }

          .sesen-labeling-page .sesen-labeling-workspace-row span:nth-child(3) {
            display: block;
            text-align: right;
          }

          .sesen-labeling-page .sesen-labeling-artwork-visual {
            min-height: 390px;
            padding: 26px 16px;
          }

          .sesen-labeling-page .sesen-labeling-artboard {
            width: 90%;
            min-height: 320px;
            padding: 24px 20px;
          }

          .sesen-labeling-page .sesen-labeling-reg-item {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .sesen-labeling-page .sesen-labeling-faq-item summary {
            grid-template-columns: 1fr 30px;
            gap: 14px;
            padding: 22px 0;
            font-size: 18px;
          }

          .sesen-labeling-page .sesen-labeling-faq-answer {
            padding-right: 0;
          }

          .sesen-labeling-page .sesen-labeling-final {
            padding: 68px 0;
          }
        }

        @media (max-width: 360px) {
          .sesen-labeling-page h1 {
            font-size: 38px;
          }

          .sesen-labeling-page h2 {
            font-size: 30px;
          }

          .sesen-labeling-page .sesen-labeling-hero-art {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-labeling-page .sesen-labeling-btn {
            transition: none;
          }
        }
      `}</style>

      <section className="sesen-labeling-hero">
        <div className="sesen-labeling-container sesen-labeling-hero-grid">
          <div className="sesen-labeling-hero-copy">
            <h1>Labeling Translation Services for Global Life Sciences</h1>
            <p className="sesen-labeling-lead">
              Specialized multilingual labeling support for pharmaceutical, biotechnology, medical device, diagnostic, and other regulated life sciences organizations.
            </p>
            <p className="sesen-labeling-support">
              From product information and patient leaflets to device labels, IFUs, packaging, artwork, and digital labeling, Sesen helps global teams keep multilingual content accurate, consistent, and controlled across languages, formats, markets, and product lifecycle changes. Our workflows connect specialized translation, terminology management, professional review, multilingual formatting, and in-context QA.
            </p>
            <div className="sesen-labeling-btn-row">
              <a className="sesen-labeling-btn sesen-labeling-btn--primary" href="https://www.sesen.com/contact-sales/">
                TALK WITH TEAM SESEN <Arrow />
              </a>
              <a className="sesen-labeling-btn sesen-labeling-btn--secondary" href="https://www.sesen.com/get-a-quote/">
                GET A QUOTE
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-labeling-trust" aria-label="Labeling translation capabilities">
        <div className="sesen-labeling-container sesen-labeling-trust-grid">
          <div className="sesen-labeling-trust-item">Life Sciences Specialization</div>
          <div className="sesen-labeling-trust-item">ISO-Certified Quality</div>
          <div className="sesen-labeling-trust-item">150+ Languages</div>
          <div className="sesen-labeling-trust-item">In-Context QA</div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-soft">
        <div className="sesen-labeling-container sesen-labeling-authority-grid">
          <div className="sesen-labeling-authority-copy sesen-labeling-mobile-center">
            <p className="sesen-labeling-eyebrow">Connected Labeling</p>
            <h2>Global Labeling Requires More Than Accurate Translation</h2>
            <p className="sesen-labeling-lead">
              A label rarely exists as an isolated piece of content. Approved product information can flow through packaging, patient communication, instructions, digital channels, and future safety updates.
            </p>
            <p>
              When one source changes, the impact can extend across multiple assets, languages, and markets. Sesen supports this complexity through multilingual workflows designed to maintain terminology, meaning, formatting, and version consistency from source content through final labeling and future revisions.
            </p>
            <p>
              The objective is not simply to translate each document correctly. It is to help keep the entire multilingual labeling ecosystem aligned as the product evolves.
            </p>
          </div>

          <div className="sesen-labeling-flow" aria-label="Multilingual labeling lifecycle">
            {[
              ["01", "Approved Source Content", "Product information, controlled source files, approved terminology, and labeling references."],
              ["02", "Translation & Terminology", "Specialized translation supported by glossaries, translation memory, references, and linguistic rules."],
              ["03", "Artwork & Formatting", "Localized content adapted to the space, structure, typography, and production requirements of the target format."],
              ["04", "In-Context QA", "Language reviewed within final or near-final labels, packaging, IFUs, and other layouts."],
              ["05", "Market Use", "Multilingual content prepared for the appropriate client review, regulatory, production, or market workflow."],
              ["06", "Lifecycle Updates", "New safety information, product changes, additional markets, and future labeling versions managed with continuity."],
            ].map(([n, title, text]) => (
              <div className="sesen-labeling-flow-row" key={title}>
                <div className="sesen-labeling-flow-node">{n}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-mobile-center">
            <h2>Specialized Labeling Translation Across the Life Sciences</h2>
            <p className="sesen-labeling-lead">
              Different products have different labeling requirements, audiences, risk profiles, formats, and regulatory pathways. Sesen supports distinct labeling ecosystems without treating every regulated product the same.
            </p>
          </div>

          <div className="sesen-labeling-pathways">
            <article className="sesen-labeling-pathway">
              <div className="sesen-labeling-pathway-kicker" />
              <h3>Pharmaceutical & Biotechnology Labeling</h3>
              <p>
                Support multilingual product information, patient communication, packaging, safety language, and commercial supply across global pharmaceutical and biotechnology markets.
              </p>
              <ul>
                <li>Prescribing and product information</li>
                <li>SmPCs, package inserts, PILs, and medication guides</li>
                <li>Carton, container, and primary/secondary packaging</li>
                <li>Investigational product labeling</li>
                <li>Biologic and advanced-therapy product information</li>
                <li>Warnings, contraindications, precautions, and safety language</li>
                <li>Post-approval labeling changes</li>
                <li>Market-specific labeling updates</li>
              </ul>
              <a className="sesen-labeling-link" href="https://www.sesen.com/drug-labeling-packaging-translation-services/">
                Explore Drug Labeling & Packaging Translation <Arrow />
              </a>
            </article>

            <article className="sesen-labeling-pathway">
              <div className="sesen-labeling-pathway-kicker" />
              <h3>Medical Device & IVD Labeling</h3>
              <p>
                Support multilingual device and diagnostic labeling that combines technical content, safety information, operating instructions, symbols, product identifiers, packaging, software references, and user-facing information.
              </p>
              <ul>
                <li>Medical device and IVD labels</li>
                <li>Device packaging</li>
                <li>IFUs and eIFUs</li>
                <li>User and operating instructions</li>
                <li>Warnings, precautions, and contraindications</li>
                <li>Safety information and quick-start instructions</li>
                <li>Software and on-device text</li>
                <li>Digital and market-specific labeling</li>
              </ul>
              <a className="sesen-labeling-link" href="https://www.sesen.com/medical-device-labeling-translation-services/">
                Explore Medical Device Labeling Translation <Arrow />
              </a>
              <span aria-hidden="true" style={{ display: "block", height: 8 }} />
              <a className="sesen-labeling-link" href="https://www.sesen.com/ifu-translation-services/">
                Explore IFU Translation Services <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-pale">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-mobile-center">
            <h2>Multilingual Content Across the Labeling Ecosystem</h2>
            <p className="sesen-labeling-lead">
              Global labeling extends well beyond the text printed directly on a product. Sesen helps life sciences teams translate and manage connected content across print, packaging, instructions, patient communication, professional information, and digital channels.
            </p>
          </div>

          <div className="sesen-labeling-ecosystem-grid">
            {ecosystemGroups.map((group) => (
              <article className="sesen-labeling-ecosystem-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul className="sesen-labeling-ecosystem-list">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="sesen-labeling-ecosystem-note">
            <strong>Print and digital labeling increasingly need to work as one content system.</strong> As product information moves across physical packaging, PDFs, eIFUs, electronic product information, and other digital channels, terminology and version continuity become even more important.
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section">
        <div className="sesen-labeling-container sesen-labeling-workflow-grid">
          <div className="sesen-labeling-workflow-intro sesen-labeling-mobile-left">
            <h2>A Controlled Workflow from Source Content to Final Labeling</h2>
            <p className="sesen-labeling-lead">
              Regulated labeling translation requires more than linguistic fluency. It requires control over terminology, versions, safety-critical information, numbers, formatting, artwork, and related content.
            </p>
            <p>
              Sesen adapts the workflow to the content type, product, languages, markets, file formats, client requirements, and intended downstream use.
            </p>
          </div>

          <div className="sesen-labeling-workflow-list">
            {workflowSteps.map((step) => (
              <article className="sesen-labeling-workflow-step" key={step.number}>
                <div className="sesen-labeling-workflow-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <p className="sesen-labeling-workflow-detail">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-pale">
        <div className="sesen-labeling-container sesen-labeling-maintenance-grid">
          <div className="sesen-labeling-mobile-center">
            <p className="sesen-labeling-eyebrow">Lifecycle Management</p>
            <h2>Keep Multilingual Labeling Synchronized as Products Evolve</h2>
            <p className="sesen-labeling-lead">
              The first translation is only one moment in the labeling lifecycle. Safety updates, regulatory changes, manufacturing changes, product extensions, new markets, and additional languages can create a chain of multilingual dependencies.
            </p>
            <p>
              Sesen helps global labeling teams manage those changes without treating every revision as an entirely new project.
            </p>

            <div className="sesen-labeling-connected-mini">
              <div className="sesen-labeling-connected-mini-label">Connected Content</div>
              <div className="sesen-labeling-connected-chain">
                <span>Product Information</span><span>↔</span><span>Patient Leaflet</span><span>↔</span><span>Carton</span><span>↔</span><span>Product Label</span><span>↔</span><span>IFU</span><span>↔</span><span>Digital Labeling</span>
              </div>
            </div>
          </div>

          <div className="sesen-labeling-maintenance-list">
            {maintenanceItems.map((item) => (
              <article className="sesen-labeling-maintenance-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-dark">
        <div className="sesen-labeling-container sesen-labeling-workspace-grid">
          <div className="sesen-labeling-mobile-center">
            <p className="sesen-labeling-eyebrow">Recurring Labeling Programs</p>
            <h2>Manage Recurring Global Labeling in One Controlled Workspace</h2>
            <p className="sesen-labeling-lead">
              Organizations with frequent labeling changes often need more than project-by-project file exchange.
            </p>
            <p>
              The Sesen Life Sciences Labeling Workspace provides a centralized environment for multilingual labeling translation, validation, review, version tracking, approvals, and ongoing lifecycle updates.
            </p>

            <div className="sesen-labeling-workspace-features">
              {["Product-level organization", "Language and market views", "Terminology management", "Translation memory", "AI-assisted quality checks", "Professional linguist review", "Numeric and terminology validation", "Version comparison", "Stakeholder review", "Approval traceability", "Delivery history", "Audit-ready records"].map((item) => (
                <div className="sesen-labeling-workspace-feature" key={item}>
                  <Check />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a className="sesen-labeling-btn sesen-labeling-btn--secondary" href="https://www.sesen.com/life-sciences-labeling-workspace/">
              EXPLORE THE LABELING WORKSPACE <Arrow />
            </a>
          </div>

          <div className="sesen-labeling-workspace-panel" aria-label="Illustrative labeling workspace interface">
            <div className="sesen-labeling-workspace-head">
              <span className="sesen-labeling-workspace-title">Global Labeling Program</span>
              <span className="sesen-labeling-workspace-status">Controlled</span>
            </div>
            <div className="sesen-labeling-workspace-rows">
              <div className="sesen-labeling-workspace-row"><span>Product Information</span><span>12 languages</span><span>Version 4.2</span></div>
              <div className="sesen-labeling-workspace-row"><span>Patient Leaflet</span><span>12 languages</span><span>In review</span></div>
              <div className="sesen-labeling-workspace-row"><span>Carton & Packaging</span><span>8 markets</span><span>Validated</span></div>
              <div className="sesen-labeling-workspace-row"><span>IFU / eIFU</span><span>18 languages</span><span>Version 7.1</span></div>
              <div className="sesen-labeling-workspace-row"><span>Safety Update</span><span>6 assets</span><span>New change</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section">
        <div className="sesen-labeling-container sesen-labeling-artwork-grid">
          <div className="sesen-labeling-artwork-visual" aria-hidden="true">
            <div className="sesen-labeling-artboard">
              <span className="sesen-labeling-artboard-chip">Final Artwork</span>
              <div className="sesen-labeling-artboard-line sesen-labeling-artboard-line--dark" />
              <div className="sesen-labeling-artboard-line" style={{ width: "86%" }} />
              <div className="sesen-labeling-artboard-line" style={{ width: "68%" }} />
              <div className="sesen-labeling-artboard-box">
                <div className="sesen-labeling-artboard-line sesen-labeling-artboard-line--blue" style={{ marginTop: 0 }} />
                <div className="sesen-labeling-artboard-line" style={{ width: "92%" }} />
                <div className="sesen-labeling-artboard-line" style={{ width: "73%" }} />
              </div>
              <div className="sesen-labeling-artboard-line" style={{ width: "80%" }} />
              <div className="sesen-labeling-artboard-line" style={{ width: "58%" }} />
              <div className="sesen-labeling-artboard-marker sesen-labeling-artboard-marker--one">Layout fit</div>
              <div className="sesen-labeling-artboard-marker sesen-labeling-artboard-marker--two">Identifier check</div>
            </div>
          </div>

          <div className="sesen-labeling-mobile-left">
            <p className="sesen-labeling-eyebrow">Artwork & Final Context</p>
            <h2>Protect Labeling Quality Beyond the Translated Text</h2>
            <p className="sesen-labeling-lead">
              A translation can be linguistically correct in a bilingual file and still contain problems in final artwork.
            </p>
            <p>
              Labels and packaging create demanding conditions for multilingual content. Space is limited, text length changes between languages, and warnings, strengths, symbols, identifiers, tables, and instructions may need to remain aligned across several components.
            </p>

            <div className="sesen-labeling-artwork-subsection">
              <h3>Multilingual DTP & Artwork Support</h3>
              <p>Support localized labels, cartons, inserts, leaflets, IFUs, PDFs, and artwork-linked files while preserving hierarchy, readability, and visual structure.</p>
              <a className="sesen-labeling-link" href="https://www.sesen.com/medical-packaging-design-translation-formatting/">
                Explore Medical Packaging Translation & Formatting <Arrow />
              </a>
            </div>

            <div className="sesen-labeling-artwork-subsection">
              <h3>In-Context Linguistic Review</h3>
              <p>Review translated language in its actual layout to help identify truncation, text expansion, line-break problems, misplaced content, visual ambiguity, and formatting inconsistencies.</p>
              <a className="sesen-labeling-link" href="https://www.sesen.com/label-review-in-context-qa/">
                Explore Label Review & In-Context QA <Arrow />
              </a>
            </div>

            <div className="sesen-labeling-artwork-subsection">
              <h3>UDI, Identifier & Artwork Integrity</h3>
              <p>Translate what requires translation while protecting content that must remain unchanged or structurally controlled.</p>
              <ul className="sesen-labeling-artwork-list">
                <li>Product and part numbers</li>
                <li>Model and lot-related fields</li>
                <li>Measurements, dates, and numeric information</li>
                <li>UDI-related identifiers and barcodes</li>
                <li>Controlled symbols</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-pale">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-heading-wrap--center sesen-labeling-mobile-center">
            <p className="sesen-labeling-eyebrow">Human-Controlled Technology</p>
            <h2>AI-Assisted Quality Checks. Expert Human Decisions.</h2>
            <p className="sesen-labeling-lead">
              AI can strengthen labeling workflows when it is used for the right tasks and within appropriate controls. Sesen uses technology to support professional reviewers—not replace expert judgment.
            </p>
          </div>

          <div className="sesen-labeling-ai-grid">
            <article className="sesen-labeling-ai-column">
              <h3>AI-Assisted QA Can Help Surface</h3>
              <div className="sesen-labeling-ai-list">
                {aiChecks.map((item) => (
                  <div className="sesen-labeling-ai-item" key={item}><Check /><span>{item}</span></div>
                ))}
              </div>
            </article>
            <article className="sesen-labeling-ai-column">
              <h3>Human Expertise Remains Responsible For</h3>
              <div className="sesen-labeling-ai-list">
                {humanDecisions.map((item) => (
                  <div className="sesen-labeling-ai-item" key={item}><Check /><span>{item}</span></div>
                ))}
              </div>
            </article>
          </div>

          <div className="sesen-labeling-ai-anchor">Technology helps surface potential issues. Life sciences experts evaluate and resolve them.</div>
        </div>
      </section>

      <section className="sesen-labeling-section">
        <div className="sesen-labeling-container sesen-labeling-reg-grid">
          <div className="sesen-labeling-mobile-left">
            <h2>Support for Regulated Labeling Across Global Markets</h2>
            <p className="sesen-labeling-lead">
              Labeling requirements vary by product category, intended user, market, regulatory pathway, presentation, and local-language requirements. There is no universal global labeling template.
            </p>
            <p>
              Sesen supports multilingual labeling workflows using client-approved source content, regulatory references, terminology, and market requirements appropriate to each engagement.
            </p>
            <p>
              Our role is to help clients prepare accurate, consistent multilingual content that supports their applicable regulatory, quality, production, and market processes—not to confer regulatory approval.
            </p>
          </div>

          <div className="sesen-labeling-reg-list">
            {[
              ["FDA", "U.S. product- and context-specific labeling workflows supported with client-approved references and applicable requirements."],
              ["EMA / QRD", "European medicinal product information, multilingual terminology, and market-specific product-information workflows."],
              ["EU MDR", "Medical device labeling and information workflows for applicable European device requirements and market languages."],
              ["EU IVDR", "IVD labeling, instructions, safety information, and multilingual market requirements."],
              ["MHRA", "United Kingdom product-information and labeling workflows supported according to applicable client requirements."],
              ["PMDA", "Japanese labeling and product-information workflows supported with appropriate linguistic and market expertise."],
              ["Other Markets", "Country- and region-specific labeling workflows supported according to product, language, and client requirements."],
            ].map(([name, text]) => (
              <div className="sesen-labeling-reg-item" key={name}>
                <div className="sesen-labeling-reg-name">{name}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-soft">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-mobile-center">
            <h2>Quality Controls Designed for High-Stakes Life Sciences Content</h2>
            <p className="sesen-labeling-lead">
              Life sciences labeling can communicate how a product is prescribed, administered, stored, operated, interpreted, or used safely. That requires a quality model designed for regulated content.
            </p>
          </div>

          <div className="sesen-labeling-quality-grid">
            {qualityItems.map((item) => (
              <article className="sesen-labeling-quality-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="sesen-labeling-related-expertise" aria-label="Related life sciences translation services">
            <span>Related expertise:</span>
            <a href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services</a>
            <a href="https://www.sesen.com/pharmaceutical-translation-services/">Pharmaceutical Translation Services</a>
            <a href="https://www.sesen.com/medical-device-translation-services/">Medical Device Translation Services</a>
            <a href="https://www.sesen.com/life-sciences-translation-services/">Life Sciences Translation Services</a>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-mobile-left">
            <h2>Specialized Services for Every Part of the Labeling Workflow</h2>
            <p className="sesen-labeling-lead">
              Global labeling programs often require several connected language and production capabilities. Explore specialized Sesen services based on your product, content, and workflow.
            </p>
          </div>

          <div className="sesen-labeling-services-list">
            {services.map((service) => (
              <article className="sesen-labeling-service-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="sesen-labeling-link" href={service.href}>{service.link} <Arrow /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-pale">
        <div className="sesen-labeling-container sesen-labeling-assets-grid">
          <div className="sesen-labeling-asset-map" aria-label="Connected labeling assets">
            <div className="sesen-labeling-asset-track" />
            {["Product Information / SmPC", "Patient Information / PIL", "Carton & Packaging", "Primary Product Label", "IFU / eIFU", "Digital Labeling", "Safety & Lifecycle Updates"].map((item) => (
              <div className="sesen-labeling-asset-node" key={item}>
                <div className="sesen-labeling-asset-dot" />
                <strong>{item}</strong>
              </div>
            ))}
          </div>

          <div className="sesen-labeling-assets-copy sesen-labeling-mobile-center">
            <p className="sesen-labeling-eyebrow">Program-Level Consistency</p>
            <h2>One Labeling Program. Many Connected Assets.</h2>
            <p className="sesen-labeling-lead">
              A single product or safety change can affect an interconnected set of multilingual assets. When these materials are translated independently, terminology, versions, and approved wording can gradually diverge.
            </p>
            <p>
              A connected multilingual labeling workflow helps preserve continuity by managing relationships between content—not simply processing a sequence of disconnected files.
            </p>

            <div className="sesen-labeling-asset-proof">
              <div className="sesen-labeling-asset-proof-item"><strong>Terminology Governance</strong><span>Maintain consistent product, medical, regulatory, and safety terminology wherever it appears.</span></div>
              <div className="sesen-labeling-asset-proof-item"><strong>Translation Memory</strong><span>Reuse relevant approved translations instead of recreating recurring language during every update.</span></div>
              <div className="sesen-labeling-asset-proof-item"><strong>Version Awareness</strong><span>Identify what changed, what remains approved, and what downstream multilingual content may require attention.</span></div>
              <div className="sesen-labeling-asset-proof-item"><strong>In-Context QA</strong><span>Review language within the actual label, package, IFU, or digital presentation.</span></div>
              <div className="sesen-labeling-asset-proof-item"><strong>Centralized Program Management</strong><span>Coordinate languages, files, reviewers, updates, and delivery across the broader product labeling ecosystem.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-section--dense">
        <div className="sesen-labeling-container">
          <div className="sesen-labeling-heading-wrap sesen-labeling-heading-wrap--center sesen-labeling-mobile-center">
            <h2>A Specialized Partner for Global Labeling Programs</h2>
            <p className="sesen-labeling-lead">
              Whether you are translating one new label or managing recurring updates across a global product portfolio, Sesen can adapt the workflow to your program.
            </p>
          </div>

          <div className="sesen-labeling-why-grid">
            <article className="sesen-labeling-why-item"><h3>Life Sciences Focus</h3><p>Specialized workflows for regulated pharmaceutical, biotechnology, medical device, diagnostic, and related content.</p></article>
            <article className="sesen-labeling-why-item"><h3>150+ Languages</h3><p>Global language coverage for product launches, market expansion, and recurring labeling programs.</p></article>
            <article className="sesen-labeling-why-item"><h3>Human Expertise + Technology</h3><p>Professional linguists and reviewers supported by terminology tools, translation memory, automation, and AI-assisted QA.</p></article>
            <article className="sesen-labeling-why-item"><h3>Artwork & In-Context QA</h3><p>Support can continue through multilingual layout and final-context review instead of ending with bilingual text.</p></article>
            <article className="sesen-labeling-why-item"><h3>Lifecycle Support</h3><p>Support initial launches, safety updates, version changes, new languages, packaging revisions, and ongoing maintenance.</p></article>
            <article className="sesen-labeling-why-item"><h3>Scalable Program Management</h3><p>Support individual assignments, coordinated multi-language launches, and recurring global labeling programs.</p></article>
          </div>
        </div>
      </section>

      <section className="sesen-labeling-section sesen-labeling-soft">
        <div className="sesen-labeling-container sesen-labeling-faq-grid">
          <div className="sesen-labeling-faq-intro sesen-labeling-mobile-left">
            <h2>Labeling Translation FAQs</h2>
            <p className="sesen-labeling-lead">
              Common questions about multilingual labeling, regulated life sciences content, updates, artwork, and ongoing global programs.
            </p>
          </div>

          <div className="sesen-labeling-faq-list">
            {faqs.map((faq, index) => (
              <details className="sesen-labeling-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="sesen-labeling-faq-icon" aria-hidden="true" />
                </summary>
                <div className="sesen-labeling-faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-labeling-final">
        <div className="sesen-labeling-container sesen-labeling-final-grid">
          <div className="sesen-labeling-mobile-center">
            <h2>Simplify Global Labeling Across Languages, Markets, and Product Lifecycles</h2>
            <p>
              Whether you are preparing a new global launch, adding markets, translating an IFU, updating safety information, revising packaging, or building a more scalable multilingual labeling program, Team Sesen is ready to help.
            </p>
          </div>
          <div className="sesen-labeling-btn-row">
            <a className="sesen-labeling-btn sesen-labeling-btn--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <Arrow /></a>
            <a className="sesen-labeling-btn sesen-labeling-btn--secondary" href="https://www.sesen.com/get-a-quote/">GET A QUOTE</a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SesenLabelingTranslationServicesWireframe;
