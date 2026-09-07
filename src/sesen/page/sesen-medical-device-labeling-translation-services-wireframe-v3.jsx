import React from "react";

const SesenMedicalDeviceLabelingWireframe = () => {
  const scopeGroups = [
    {
      title: "On-Product Labels",
      description: "Translate concise, space-sensitive content while preserving technical meaning, safety information, and product identification.",
      items: [
        "Device labels and nameplates",
        "Product and model information",
        "Warnings and precautions",
        "Safety statements",
        "Operating and handling information",
        "Control and component labels",
        "Storage and environmental information",
        "Symbols and associated explanatory text",
      ],
    },
    {
      title: "Packaging & Product Identification",
      description: "Maintain accurate multilingual content across cartons, inserts, packaging, and structured product-identification elements.",
      items: [
        "Primary and secondary packaging",
        "Outer cartons and packaging inserts",
        "Model and catalog information",
        "Storage and handling instructions",
        "Product identifiers",
        "Manufacturer and market-specific information",
        "UDI-related multilingual labeling content",
        "Barcode-adjacent and variable-data content",
      ],
    },
    {
      title: "Instructions & User Information",
      description: "Support detailed device instructions while keeping terminology aligned with labels, packaging, and other approved product content.",
      items: [
        "Instructions for Use (IFUs)",
        "Directions for Use (DFUs)",
        "User and operator manuals",
        "Quick-reference guides",
        "Installation instructions",
        "Maintenance and service instructions",
        "Troubleshooting information",
        "Warnings, cautions, procedures, tables, and diagrams",
      ],
      link: {
        label: "Explore IFU Translation Services",
        href: "https://www.sesen.com/ifu-translation-services/",
      },
    },
    {
      title: "Electronic & Digital Labeling",
      description: "Support controlled multilingual content as product information moves from paper into electronic and structured delivery formats.",
      items: [
        "Electronic Instructions for Use",
        "Web-based product instructions",
        "Electronic labeling",
        "PDF, HTML, and XML content",
        "Structured multilingual product information",
        "Online user documentation",
        "Digital instructions and help content",
        "Selected device UI content tied to approved labeling",
      ],
    },
    {
      title: "Labeling Updates & Lifecycle Content",
      description: "Maintain multilingual labeling as products, markets, safety information, and presentation formats evolve over time.",
      items: [
        "Product launch labeling",
        "New-language rollouts",
        "Country and market expansion",
        "Product and design changes",
        "Safety and regulatory labeling updates",
        "New models and SKUs",
        "Packaging redesigns",
        "eIFU migration and periodic maintenance",
      ],
    },
  ];

  const workflowSteps = [
    {
      number: "01",
      title: "Source & Terminology Preparation",
      text: "Source files, approved terminology, existing translations, product references, translation memory, style requirements, and project instructions are aligned before multilingual production begins.",
    },
    {
      number: "02",
      title: "Specialized Medical Device Translation",
      text: "Professional linguists with relevant medical-device, technical, clinical, or regulatory expertise translate the content for its intended audience and use.",
    },
    {
      number: "03",
      title: "Independent Review & Linguistic QA",
      text: "Review focuses on meaning, completeness, terminology, readability, warnings, instructions, numbers, units, and source-target consistency.",
    },
    {
      number: "04",
      title: "Multilingual Artwork & DTP",
      text: "Translated content is placed into labels, cartons, inserts, manuals, IFUs, and other required production formats while accounting for text expansion and script-specific layout needs.",
    },
    {
      number: "05",
      title: "In-Context Linguistic QA",
      text: "Language is reviewed within final or near-final layout to identify truncation, placement, rendering, line-break, terminology, and visual-context issues that may not be visible in a bilingual file.",
      link: {
        label: "Explore Label Review & In-Context QA",
        href: "https://www.sesen.com/label-review-in-context-qa/",
      },
    },
    {
      number: "06",
      title: "Final Delivery & Version Control",
      text: "Approved multilingual files are delivered in the required formats, with terminology, translation memory, reviewer decisions, and relevant history retained to support future updates where appropriate.",
    },
  ];

  const finalQaChecks = [
    "Missing or truncated text",
    "Incorrect line breaks",
    "Source-target discrepancies",
    "Inconsistent terminology",
    "Number or unit discrepancies",
    "Altered product identifiers",
    "Misplaced warnings or instructions",
    "Text expansion and crowding",
    "Symbol-to-text alignment",
    "Incorrect fonts or character rendering",
    "Right-to-left layout issues",
    "CJK typography problems",
    "Inconsistent content across related SKUs",
    "Version discrepancies",
    "Formatting that changes or obscures meaning",
  ];

  const lifecycleSteps = [
    {
      number: "01",
      title: "Product Launch",
      text: "Coordinate complete multilingual labeling sets for simultaneous or phased introductions across launch markets.",
    },
    {
      number: "02",
      title: "Market Expansion",
      text: "Add countries and languages while preserving approved terminology, prior reviewer decisions, and established product language.",
    },
    {
      number: "03",
      title: "Product & Design Changes",
      text: "Update affected multilingual content while avoiding unnecessary retranslation of previously approved material.",
    },
    {
      number: "04",
      title: "Safety & Regulatory Updates",
      text: "Coordinate revised warnings, precautions, instructions, and other changed product information across affected languages and assets.",
    },
    {
      number: "05",
      title: "Digital & eIFU Migration",
      text: "Maintain multilingual content continuity as approved information moves into electronic or structured formats.",
    },
    {
      number: "06",
      title: "Ongoing Label Maintenance",
      text: "Retain terminology, translation memory, reviewer feedback, and version history across recurring labeling revisions.",
    },
  ];

  const qualityControls = [
    {
      title: "Terminology Control",
      text: "Approved medical, technical, product, and safety terminology is managed through glossaries, termbases, translation memory, and reference content.",
    },
    {
      title: "Numeric & Unit Verification",
      text: "Numbers, measurements, dates, units, codes, and other structured elements can be checked systematically alongside human linguistic review.",
    },
    {
      title: "Warning & Instruction Review",
      text: "Warnings, cautions, contraindications, procedures, and operating instructions receive focused review for meaning and consistency.",
    },
    {
      title: "Cross-Asset Consistency",
      text: "Related language can be compared across labels, cartons, IFUs, eIFUs, digital content, and product variants to reduce unintended discrepancies.",
    },
    {
      title: "Layout & Rendering QA",
      text: "Final-context review addresses text expansion, clipping, font behavior, complex scripts, and visual relationships that can affect meaning.",
    },
    {
      title: "Version & Change Control",
      text: "Previously approved multilingual content can be separated from changed content so reviewers can focus attention where it is needed.",
    },
  ];

  const qualityInfrastructure = [
    {
      title: "ISO 17100 Certified",
      text: "Certified translation-services processes support structured translator qualification, review, workflow management, and quality assurance.",
    },
    {
      title: "ISO 9001:2015 Certified",
      text: "Quality-management processes support repeatable operations, continuous improvement, and disciplined controls across multilingual programs.",
    },
    {
      title: "ISO 13485:2016 Certified",
      text: "Sesen's quality infrastructure includes a quality-management framework relevant to organizations and workflows serving the medical-device environment.",
    },
    {
      title: "Professional Medical Linguists",
      text: "Projects are matched with professional native-language linguists based on language pair, subject matter, content type, and intended audience.",
    },
    {
      title: "Structured Review & QA",
      text: "Translation, bilingual review, terminology management, automated QA, formatting checks, and client review can be configured around program needs.",
    },
    {
      title: "Secure AWS-Hosted Infrastructure",
      text: "Secure project and content infrastructure supports controlled multilingual operations, file handling, and enterprise program management.",
    },
  ];

  const programCapabilities = [
    {
      title: "Multiple Products & SKUs",
      text: "Coordinate shared terminology while maintaining the distinctions required between products, models, configurations, and generations.",
    },
    {
      title: "Global Language Rollouts",
      text: "Manage simultaneous or phased translation across 150+ languages according to launch timing and market priorities.",
    },
    {
      title: "Reviewer Coordination",
      text: "Capture and apply client and in-country reviewer feedback consistently rather than allowing decisions to remain fragmented across individual files.",
    },
    {
      title: "Multilingual Artwork Management",
      text: "Coordinate translation with labels, cartons, IFUs, inserts, and other production files so language and layout workflows remain connected.",
    },
    {
      title: "Recurring Updates",
      text: "Reuse approved content and terminology across revisions while isolating new or modified content for focused translation and review.",
    },
    {
      title: "Centralized Project Coordination",
      text: "One Sesen program team can coordinate languages, files, terminology, schedules, reviewers, DTP, QA, and delivery across complex initiatives.",
    },
  ];

  const differentiators = [
    {
      title: "Medical Device Specialization",
      text: "Regulated medical, technical, labeling, safety, and user-facing device content supported by specialized life sciences teams.",
    },
    {
      title: "Connected Terminology",
      text: "Maintain product meaning across labels, packaging, IFUs/eIFUs, digital content, related device UI, and successive revisions.",
    },
    {
      title: "Translation Through Final Artwork",
      text: "Support can extend from specialized translation and review through multilingual DTP and final-context linguistic QA.",
    },
    {
      title: "Controlled Change Management",
      text: "Translation memory, terminology resources, version comparison, and reviewer history support recurring updates and market expansion.",
    },
    {
      title: "ISO-Certified Quality Infrastructure",
      text: "ISO 17100, ISO 9001, and ISO 13485 certifications support structured, repeatable multilingual workflows.",
    },
    {
      title: "Global Program Scale",
      text: "150+ language support with centralized program management, professional linguists, AI-assisted technology, and secure infrastructure.",
    },
  ];

  const relatedServices = [
    {
      title: "IFU Translation Services",
      text: "Specialized translation of IFUs, DFUs, user manuals, eIFUs, warnings, procedural content, and other medical-device user documentation.",
      href: "https://www.sesen.com/ifu-translation-services/",
      link: "Explore IFU Translation Services",
    },
    {
      title: "IVD Translation Services",
      text: "Translation for in vitro diagnostic labeling, IFUs, regulatory documentation, performance content, scientific materials, and global IVD programs.",
      href: "https://www.sesen.com/ivd-translation-services/",
      link: "Explore IVD Translation Services",
    },
    {
      title: "Label Review & In-Context QA",
      text: "Linguistic review within final labels, packaging, IFUs, and artwork to identify contextual, layout, terminology, and rendering issues before release.",
      href: "https://www.sesen.com/label-review-in-context-qa/",
      link: "Explore In-Context QA",
    },
    {
      title: "Medical Device Translation Services",
      text: "Translation across the wider medical-device lifecycle, including regulatory, clinical, labeling, technical, software, training, and post-market content.",
      href: "https://www.sesen.com/medical-device-translation-services/",
      link: "Explore Medical Device Translation Services",
    },
    {
      title: "Labeling Translation Services",
      text: "Explore Sesen's broader life sciences labeling services across medical devices, pharmaceuticals, packaging, patient information, and regulated labeling workflows.",
      href: "https://www.sesen.com/labeling-translation-services/",
      link: "Explore Labeling Translation Services",
    },
    {
      title: "Clinical & Medical Software Localization",
      text: "Localization of medical software, device interfaces, clinical systems, connected-device content, and related user experiences.",
      href: "https://www.sesen.com/clinical-medical-software-localization-services/",
      link: "Explore Medical Software Localization",
    },
  ];

  const faqs = [
    {
      q: "What is medical device labeling translation?",
      a: "Medical device labeling translation is the specialized translation and localization of information supplied with or presented on a medical device and its related packaging or user information. Depending on the product, this can include device labels, cartons, IFUs, eIFUs, user manuals, warnings, precautions, product identification, storage information, packaging inserts, and selected digital labeling content. Because the same product information often appears across multiple assets, effective medical device labeling translation also requires terminology management, version control, formatting, and cross-content consistency.",
    },
    {
      q: "What types of medical device labeling does Sesen translate?",
      a: "Sesen translates device labels, packaging and cartons, IFUs and DFUs, eIFUs, user manuals, operating instructions, installation and maintenance instructions, warnings and precautions, product identification content, UDI-related multilingual text, storage information, packaging inserts, and selected digital labeling content. We also provide multilingual DTP, final-format linguistic QA, terminology management, and ongoing update support.",
    },
    {
      q: "Does Sesen translate IFUs and eIFUs?",
      a: "Yes. Sesen translates Instructions for Use, Directions for Use, user manuals, and electronic IFUs for medical devices and diagnostic products. We support both individual IFU projects and complex multilingual programs involving repeated updates, structured digital content, terminology management, and final-format QA.",
    },
    {
      q: "Can Sesen support medical device labels and packaging in final artwork?",
      a: "Yes. Sesen provides multilingual desktop publishing and formatting support for labels, cartons, inserts, IFUs, and related medical-device content. We can also perform in-context linguistic QA on final or near-final artwork to identify issues such as truncated text, incorrect line breaks, terminology inconsistencies, missing content, number discrepancies, font problems, complex-script rendering, and source-target differences.",
    },
    {
      q: "How does Sesen maintain consistency between labels, packaging, and IFUs?",
      a: "Sesen uses client-approved terminology, glossaries, translation memory, prior approved translations, product reference materials, reviewer feedback, and structured QA to maintain terminology and meaning across related assets. These resources help reduce unnecessary linguistic variation while still allowing wording to be adapted appropriately for each context.",
    },
    {
      q: "Can Sesen support labeling updates and product revisions?",
      a: "Yes. Sesen supports new product launches, new-market rollouts, product and design changes, safety updates, packaging changes, new models and SKUs, regulatory labeling revisions, eIFU migration, and ongoing multilingual label maintenance. Translation memory and version-management workflows can help identify reusable approved content and distinguish it from new or changed text requiring translation and review.",
    },
    {
      q: "Does Sesen support UDI-related medical device labeling?",
      a: "Yes. Sesen supports translation of multilingual content associated with device labels and packages that contain UDI and other product identification information. The UDI itself and other controlled identifiers are not treated as ordinary translatable language. Our workflows are designed to preserve identifiers, product codes, numbers, barcodes, and other protected content while translating and reviewing the language around them.",
    },
    {
      q: "Which languages does Sesen support for medical device labeling?",
      a: "Sesen supports medical device labeling translation across 150+ languages, including major European, Asian, Middle Eastern, African, and Latin American markets. Language availability and workflow design depend on the language pair, medical-device subject matter, content type, target audience, and project requirements.",
    },
    {
      q: "Does Sesen use AI for medical device labeling translation?",
      a: "Sesen uses AI-assisted technology where it can add measurable value to a controlled multilingual workflow, including terminology analysis, translation-memory leverage, version comparison, consistency checks, numeric QA, and, when appropriate and approved, translation assistance. Regulated labeling content is reviewed by professional linguists with relevant medical-device expertise. AI supports the workflow; it does not replace expert human responsibility for final linguistic quality.",
    },
  ];

  const Arrow = () => (
    <svg viewBox="0 0 16 16" aria-hidden="true" className="sesen-mdl-arrow">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const Check = () => (
    <svg viewBox="0 0 18 18" aria-hidden="true" className="sesen-mdl-check">
      <circle cx="9" cy="9" r="8" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="m5.3 9 2.3 2.3 5.1-5.2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const HeroArtwork = () => (
    <div className="sesen-mdl-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 520">
        <circle cx="308" cy="258" r="218" fill="#F5F7FF" />
        <circle cx="308" cy="258" r="168" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />

        <g transform="translate(227 130)">
          <rect x="0" y="0" width="162" height="206" rx="25" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
          <rect x="21" y="25" width="120" height="40" rx="10" fill="#EAF0FF" />
          <path d="M46 45h69" stroke="#3659BB" strokeWidth="5" strokeLinecap="round" />
          <rect x="25" y="86" width="112" height="54" rx="10" fill="#F7F9FD" stroke="#DDE4F2" />
          <circle cx="51" cy="113" r="13" fill="#4B6FD8" opacity="0.13" />
          <path d="M45 113h12M51 107v12" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <path d="M73 105h47M73 120h34" stroke="#68758B" strokeWidth="5" strokeLinecap="round" />
          <path d="M25 164h88M25 180h65" stroke="#AEBBD5" strokeWidth="6" strokeLinecap="round" />
        </g>

        <g transform="translate(60 118)">
          <path d="M12 31 84 0l58 26-73 31z" fill="#EAF0FF" stroke="#6F8BE1" strokeWidth="2" />
          <path d="M12 31v99l57 33V57z" fill="#FFFFFF" stroke="#6F8BE1" strokeWidth="2" />
          <path d="M69 57v106l73-35V26z" fill="#F7F9FD" stroke="#6F8BE1" strokeWidth="2" />
          <rect x="28" y="67" width="28" height="44" rx="4" fill="#F5F7FF" stroke="#DDE4F2" />
          <path d="M34 78h16M34 89h13M34 100h18" stroke="#3659BB" strokeWidth="3" strokeLinecap="round" />
        </g>

        <g transform="translate(405 98)">
          <path d="M18 0h103l18 23v139H18z" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M121 0v23h18" fill="#F5F7FF" stroke="#DDE4F2" strokeWidth="2" />
          <path d="M42 43h67M42 60h50" stroke="#17264D" strokeWidth="5" strokeLinecap="round" opacity="0.75" />
          <rect x="42" y="82" width="75" height="48" rx="8" fill="#EAF0FF" />
          <path d="M55 99h49M55 114h36" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(70 337)">
          <rect x="0" y="0" width="151" height="91" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <rect x="18" y="17" width="115" height="57" rx="8" fill="#F7F9FD" />
          <path d="M30 34h65M30 49h85M30 63h54" stroke="#68758B" strokeWidth="4" strokeLinecap="round" />
        </g>

        <g transform="translate(404 337)">
          <rect x="0" y="0" width="151" height="91" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
          <circle cx="38" cy="45" r="18" fill="#EAF0FF" />
          <path d="M30 45h16M38 37v16" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <path d="M67 34h57M67 49h44M67 64h35" stroke="#68758B" strokeWidth="4" strokeLinecap="round" />
        </g>

        <path d="M197 190c20 2 28 3 44 14M389 190c19-8 28-11 41-12M203 350c16-13 29-22 48-32M371 319c19 11 30 20 43 31" fill="none" stroke="#6F8BE1" strokeWidth="2.4" strokeLinecap="round" strokeDasharray="4 8" />
        <circle cx="241" cy="204" r="4" fill="#4B6FD8" />
        <circle cx="428" cy="178" r="4" fill="#4B6FD8" />
        <circle cx="250" cy="318" r="4" fill="#4B6FD8" />
        <circle cx="414" cy="350" r="4" fill="#4B6FD8" />
      </svg>
    </div>
  );

  return (
    <main className="sesen-mdl-page">
      <style>{`
        .sesen-mdl-page {
          --sesen-mdl-primary: #4B6FD8;
          --sesen-mdl-primary-dark: #3659BB;
          --sesen-mdl-deep-blue: #253F8F;
          --sesen-mdl-mid-blue: #6F8BE1;
          --sesen-mdl-soft-blue: #EAF0FF;
          --sesen-mdl-pale-blue: #F5F7FF;
          --sesen-mdl-navy: #17264D;
          --sesen-mdl-ink: #111827;
          --sesen-mdl-body: #46546D;
          --sesen-mdl-muted: #68758B;
          --sesen-mdl-border: #DDE4F2;
          --sesen-mdl-divider: #E9EEF8;
          --sesen-mdl-soft-bg: #F7F9FD;
          --sesen-mdl-white: #FFFFFF;
          --sesen-mdl-light-blue: #C8D6FF;
          background: var(--sesen-mdl-white);
          color: var(--sesen-mdl-body);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.65;
          overflow: hidden;
        }

        .sesen-mdl-page *,
        .sesen-mdl-page *::before,
        .sesen-mdl-page *::after {
          box-sizing: border-box;
        }

        .sesen-mdl-page a {
          color: inherit;
        }

        .sesen-mdl-page .sesen-mdl-container {
          width: min(1280px, calc(100% - 112px));
          margin: 0 auto;
        }

        .sesen-mdl-page .sesen-mdl-section {
          position: relative;
          padding: 96px 0;
        }

        .sesen-mdl-page .sesen-mdl-section--dense {
          padding: 80px 0;
        }

        .sesen-mdl-page .sesen-mdl-soft {
          background: var(--sesen-mdl-soft-bg);
        }

        .sesen-mdl-page .sesen-mdl-pale {
          background: var(--sesen-mdl-pale-blue);
        }

        .sesen-mdl-page .sesen-mdl-dark {
          background: var(--sesen-mdl-navy);
          color: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-heading-wrap {
          max-width: 820px;
          margin-bottom: 48px;
        }

        .sesen-mdl-page .sesen-mdl-heading-wrap--center {
          margin-left: auto;
          margin-right: auto;
          text-align: center;
        }

        .sesen-mdl-page .sesen-mdl-eyebrow {
          margin: 0 0 14px;
          color: var(--sesen-mdl-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          line-height: 1.35;
          text-transform: uppercase;
        }

        .sesen-mdl-page .sesen-mdl-dark .sesen-mdl-eyebrow {
          color: var(--sesen-mdl-light-blue);
        }

        .sesen-mdl-page h1,
        .sesen-mdl-page h2,
        .sesen-mdl-page h3 {
          margin-top: 0;
          color: var(--sesen-mdl-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-style: normal;
          font-stretch: normal;
          font-weight: 500;
        }

        .sesen-mdl-page .sesen-mdl-dark h2,
        .sesen-mdl-page .sesen-mdl-dark h3 {
          color: #FFFFFF;
        }

        .sesen-mdl-page h1 {
          margin-bottom: 22px;
          font-size: 48px;
          line-height: 1.3;
          letter-spacing: -0.5px;
        }

        .sesen-mdl-page h2 {
          margin-bottom: 18px;
          font-size: 36px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-mdl-page h3 {
          margin-bottom: 10px;
          font-size: 23px;
          line-height: 1.3;
          letter-spacing: normal;
        }

        .sesen-mdl-page p {
          margin: 0 0 18px;
          color: var(--sesen-mdl-body);
          font-size: 16px;
          line-height: 1.7;
        }

        .sesen-mdl-page .sesen-mdl-dark p {
          color: #D9E3FA;
        }

        .sesen-mdl-page .sesen-mdl-lead {
          max-width: 790px;
          color: #293954;
          font-size: 19px;
          line-height: 1.7;
        }

        .sesen-mdl-page .sesen-mdl-heading-wrap--center .sesen-mdl-lead {
          margin-left: auto;
          margin-right: auto;
        }

        .sesen-mdl-page .sesen-mdl-dark .sesen-mdl-lead {
          color: #E8EEFF;
        }

        .sesen-mdl-page .sesen-mdl-btn-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 26px;
          border: 1px solid transparent;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.035em;
          line-height: 1;
          text-decoration: none;
          text-transform: uppercase;
          transition: background-color 180ms ease, border-color 180ms ease, transform 180ms ease;
        }

        .sesen-mdl-page .sesen-mdl-btn:hover {
          transform: translateY(-1px);
        }

        .sesen-mdl-page .sesen-mdl-btn--primary {
          background: var(--sesen-mdl-primary);
          color: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-btn--primary:hover {
          background: var(--sesen-mdl-primary-dark);
        }

        .sesen-mdl-page .sesen-mdl-btn--secondary {
          background: #FFFFFF;
          color: var(--sesen-mdl-ink);
          border-color: #C9D4EA;
        }

        .sesen-mdl-page .sesen-mdl-btn--secondary:hover {
          background: var(--sesen-mdl-pale-blue);
          border-color: #AEBDE0;
        }

        .sesen-mdl-page .sesen-mdl-btn:focus-visible,
        .sesen-mdl-page .sesen-mdl-link:focus-visible,
        .sesen-mdl-page summary:focus-visible {
          outline: 3px solid rgba(75, 111, 216, 0.34);
          outline-offset: 3px;
        }

        .sesen-mdl-page .sesen-mdl-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--sesen-mdl-primary-dark);
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
        }

        .sesen-mdl-page .sesen-mdl-link:hover {
          text-decoration: underline;
          text-underline-offset: 4px;
        }

        .sesen-mdl-page .sesen-mdl-arrow {
          width: 16px;
          height: 16px;
          flex: 0 0 auto;
        }

        .sesen-mdl-page .sesen-mdl-check {
          width: 18px;
          height: 18px;
          flex: 0 0 auto;
          margin-top: 3px;
          color: var(--sesen-mdl-primary-dark);
        }

        .sesen-mdl-page .sesen-mdl-plain-list {
          list-style: none;
          margin: 20px 0 0;
          padding: 0;
        }

        .sesen-mdl-page .sesen-mdl-plain-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 6px 0;
          color: var(--sesen-mdl-body);
          font-size: 16px;
        }

        .sesen-mdl-page .sesen-mdl-plain-list li::before {
          content: "";
          width: 5px;
          height: 5px;
          flex: 0 0 auto;
          margin-top: 10px;
          border-radius: 50%;
          background: var(--sesen-mdl-primary);
        }

        /* Hero */
        .sesen-mdl-page .sesen-mdl-hero {
          padding: 96px 0 94px;
          background:
            radial-gradient(circle at 88% 18%, rgba(75, 111, 216, 0.09), transparent 31%),
            #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-hero-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(420px, 0.92fr);
          gap: 68px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-hero-copy {
          max-width: 710px;
        }

        .sesen-mdl-page .sesen-mdl-hero-copy .sesen-mdl-lead {
          max-width: 690px;
          margin-bottom: 16px;
          font-size: 20px;
          line-height: 1.66;
        }

        .sesen-mdl-page .sesen-mdl-hero-support {
          max-width: 675px;
          margin-bottom: 30px;
        }

        .sesen-mdl-page .sesen-mdl-hero-art {
          width: min(100%, 575px);
          margin-left: auto;
        }

        .sesen-mdl-page .sesen-mdl-hero-art svg {
          width: 100%;
          height: auto;
          display: block;
        }

        /* Trust band */
        .sesen-mdl-page .sesen-mdl-trust {
          border-top: 1px solid var(--sesen-mdl-divider);
          border-bottom: 1px solid var(--sesen-mdl-divider);
          background: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-trust-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 22px;
          align-items: center;
          padding: 23px 0;
        }

        .sesen-mdl-page .sesen-mdl-trust-item {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          color: var(--sesen-mdl-navy);
          font-size: 14px;
          font-weight: 600;
          text-align: center;
        }

        .sesen-mdl-page .sesen-mdl-trust-dot {
          width: 7px;
          height: 7px;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--sesen-mdl-primary);
        }

        /* Connected labeling */
        .sesen-mdl-page .sesen-mdl-connected-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.88fr) minmax(0, 1.12fr);
          gap: 78px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-connected-copy {
          max-width: 570px;
        }

        .sesen-mdl-page .sesen-mdl-connected-map {
          position: relative;
          min-height: 520px;
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 30px;
          background: #FFFFFF;
          box-shadow: 0 18px 52px rgba(23, 38, 77, 0.06);
          overflow: hidden;
        }

        .sesen-mdl-page .sesen-mdl-connected-map::before {
          content: "";
          position: absolute;
          inset: 48px;
          border-radius: 50%;
          border: 1px dashed #B9C8E7;
        }

        .sesen-mdl-page .sesen-mdl-connected-core {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 196px;
          height: 196px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          padding: 26px;
          border: 1px solid #B7C6E8;
          border-radius: 50%;
          background: var(--sesen-mdl-soft-blue);
          color: var(--sesen-mdl-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
          line-height: 1.3;
          text-align: center;
          z-index: 2;
        }

        .sesen-mdl-page .sesen-mdl-connected-node {
          position: absolute;
          width: 164px;
          padding: 16px 18px;
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 18px;
          background: #FFFFFF;
          color: var(--sesen-mdl-navy);
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          box-shadow: 0 10px 28px rgba(23, 38, 77, 0.05);
          z-index: 2;
        }

        .sesen-mdl-page .sesen-mdl-connected-node--a { left: 26px; top: 62px; }
        .sesen-mdl-page .sesen-mdl-connected-node--b { right: 26px; top: 62px; }
        .sesen-mdl-page .sesen-mdl-connected-node--c { left: 14px; top: 232px; }
        .sesen-mdl-page .sesen-mdl-connected-node--d { right: 14px; top: 232px; }
        .sesen-mdl-page .sesen-mdl-connected-node--e { left: 84px; bottom: 42px; }
        .sesen-mdl-page .sesen-mdl-connected-node--f { right: 84px; bottom: 42px; }

        .sesen-mdl-page .sesen-mdl-connected-line {
          position: absolute;
          left: 50%;
          top: 50%;
          width: 280px;
          height: 1px;
          background: #B7C6E8;
          transform-origin: left center;
          z-index: 1;
        }

        .sesen-mdl-page .sesen-mdl-connected-line--1 { transform: rotate(-142deg); }
        .sesen-mdl-page .sesen-mdl-connected-line--2 { transform: rotate(-38deg); }
        .sesen-mdl-page .sesen-mdl-connected-line--3 { transform: rotate(180deg); width: 286px; }
        .sesen-mdl-page .sesen-mdl-connected-line--4 { transform: rotate(0deg); width: 286px; }
        .sesen-mdl-page .sesen-mdl-connected-line--5 { transform: rotate(137deg); width: 260px; }
        .sesen-mdl-page .sesen-mdl-connected-line--6 { transform: rotate(43deg); width: 260px; }

        /* Scope matrix */
        .sesen-mdl-page .sesen-mdl-scope-grid {
          display: grid;
          grid-template-columns: repeat(6, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-mdl-border);
          border-left: 1px solid var(--sesen-mdl-border);
          background: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-scope-group {
          grid-column: span 2;
          padding: 34px 32px 36px;
          border-right: 1px solid var(--sesen-mdl-border);
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-scope-group:nth-child(4),
        .sesen-mdl-page .sesen-mdl-scope-group:nth-child(5) {
          grid-column: span 3;
        }

        .sesen-mdl-page .sesen-mdl-scope-group h3 {
          font-size: 21px;
        }

        .sesen-mdl-page .sesen-mdl-scope-group > p {
          margin-bottom: 16px;
          color: var(--sesen-mdl-muted);
        }

        .sesen-mdl-page .sesen-mdl-scope-group .sesen-mdl-plain-list {
          margin-top: 0;
          margin-bottom: 20px;
        }

        /* Terminology continuity */
        .sesen-mdl-page .sesen-mdl-continuity-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 72px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-continuity-chain {
          display: grid;
          gap: 0;
          border-top: 1px solid rgba(200, 214, 255, 0.26);
        }

        .sesen-mdl-page .sesen-mdl-continuity-item {
          display: grid;
          grid-template-columns: 42px 1fr;
          gap: 18px;
          align-items: center;
          padding: 18px 0;
          border-bottom: 1px solid rgba(200, 214, 255, 0.22);
        }

        .sesen-mdl-page .sesen-mdl-continuity-marker {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(200, 214, 255, 0.36);
          border-radius: 50%;
          color: #DCE6FF;
          font-size: 12px;
          font-weight: 700;
        }

        .sesen-mdl-page .sesen-mdl-continuity-item strong {
          display: block;
          margin-bottom: 3px;
          color: #FFFFFF;
          font-size: 16px;
          font-weight: 600;
        }

        .sesen-mdl-page .sesen-mdl-continuity-item span {
          color: #BFCBEC;
          font-size: 16px;
          line-height: 1.55;
        }

        .sesen-mdl-page .sesen-mdl-continuity-note {
          margin-top: 28px;
          padding: 20px 22px;
          border-left: 2px solid var(--sesen-mdl-light-blue);
          color: #E8EEFF;
          font-size: 16px;
        }

        /* Workflow */
        .sesen-mdl-page .sesen-mdl-workflow-grid {
          display: grid;
          grid-template-columns: minmax(290px, 0.72fr) minmax(0, 1.28fr);
          gap: 74px;
          align-items: start;
        }

        .sesen-mdl-page .sesen-mdl-workflow-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-mdl-page .sesen-mdl-workflow-list {
          margin-left: 24px;
          border-left: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-workflow-step {
          position: relative;
          padding: 0 0 42px 58px;
        }

        .sesen-mdl-page .sesen-mdl-workflow-step:last-child {
          padding-bottom: 0;
        }

        .sesen-mdl-page .sesen-mdl-workflow-number {
          position: absolute;
          left: -25px;
          top: 0;
          width: 50px;
          height: 50px;
          display: grid;
          place-items: center;
          border: 1px solid #B9C7E7;
          border-radius: 50%;
          background: #FFFFFF;
          color: var(--sesen-mdl-primary-dark);
          font-size: 12px;
          font-weight: 700;
        }

        .sesen-mdl-page .sesen-mdl-workflow-step h3 {
          margin-bottom: 8px;
        }

        .sesen-mdl-page .sesen-mdl-workflow-step p {
          max-width: 740px;
          margin-bottom: 10px;
        }

        /* Final artwork QA */
        .sesen-mdl-page .sesen-mdl-artwork-grid {
          display: grid;
          grid-template-columns: 0.88fr 1.12fr;
          gap: 76px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-artwork-visual {
          min-height: 540px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 46px;
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 30px;
          background: var(--sesen-mdl-pale-blue);
          overflow: hidden;
        }

        .sesen-mdl-page .sesen-mdl-label-sheet {
          width: min(100%, 430px);
          padding: 28px;
          position: relative;
          border: 1px solid #CAD5EB;
          border-radius: 20px;
          background: #FFFFFF;
          box-shadow: 0 18px 46px rgba(23, 38, 77, 0.08);
        }

        .sesen-mdl-page .sesen-mdl-label-chip {
          display: inline-flex;
          padding: 5px 10px;
          border-radius: 999px;
          background: var(--sesen-mdl-soft-blue);
          color: var(--sesen-mdl-primary-dark);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .sesen-mdl-page .sesen-mdl-label-title {
          width: 58%;
          height: 10px;
          margin-top: 24px;
          border-radius: 999px;
          background: var(--sesen-mdl-navy);
        }

        .sesen-mdl-page .sesen-mdl-label-line {
          height: 7px;
          margin-top: 13px;
          border-radius: 999px;
          background: #C3CEE2;
        }

        .sesen-mdl-page .sesen-mdl-label-warning {
          margin-top: 24px;
          padding: 18px;
          border: 1px solid var(--sesen-mdl-divider);
          border-radius: 12px;
          background: #F7F9FD;
        }

        .sesen-mdl-page .sesen-mdl-label-warning-head {
          width: 44%;
          height: 8px;
          border-radius: 999px;
          background: var(--sesen-mdl-primary-dark);
        }

        .sesen-mdl-page .sesen-mdl-label-marker {
          position: absolute;
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--sesen-mdl-primary);
          color: #FFFFFF;
          font-size: 12px;
          font-weight: 700;
          box-shadow: 0 9px 24px rgba(54, 89, 187, 0.24);
        }

        .sesen-mdl-page .sesen-mdl-label-marker--one { right: -18px; top: 84px; }
        .sesen-mdl-page .sesen-mdl-label-marker--two { left: -18px; top: 218px; }
        .sesen-mdl-page .sesen-mdl-label-marker--three { right: 28px; bottom: -18px; }

        .sesen-mdl-page .sesen-mdl-artwork-callouts {
          width: min(100%, 470px);
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .sesen-mdl-page .sesen-mdl-artwork-callout {
          display: flex;
          align-items: center;
          gap: 8px;
          min-height: 46px;
          padding: 10px 12px;
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 12px;
          background: #FFFFFF;
          color: var(--sesen-mdl-body);
          font-size: 13px;
          font-weight: 600;
          line-height: 1.35;
        }

        .sesen-mdl-page .sesen-mdl-artwork-callout strong {
          width: 24px;
          height: 24px;
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          border-radius: 50%;
          background: var(--sesen-mdl-soft-blue);
          color: var(--sesen-mdl-primary-dark);
          font-size: 11px;
          font-weight: 700;
        }

        .sesen-mdl-page .sesen-mdl-qa-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px 28px;
          margin-top: 28px;
        }

        .sesen-mdl-page .sesen-mdl-qa-item {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          color: var(--sesen-mdl-body);
          font-size: 16px;
        }

        /* UDI */
        .sesen-mdl-page .sesen-mdl-udi-grid {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 72px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-udi-panel {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1px solid rgba(200, 214, 255, 0.23);
          border-radius: 28px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.05);
        }

        .sesen-mdl-page .sesen-mdl-udi-column {
          padding: 30px 30px 32px;
        }

        .sesen-mdl-page .sesen-mdl-udi-column + .sesen-mdl-udi-column {
          border-left: 1px solid rgba(200, 214, 255, 0.2);
        }

        .sesen-mdl-page .sesen-mdl-udi-column h3 {
          margin-bottom: 18px;
        }

        .sesen-mdl-page .sesen-mdl-udi-column ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sesen-mdl-page .sesen-mdl-udi-column li {
          padding: 8px 0;
          color: #DCE5FA;
          font-size: 16px;
          border-bottom: 1px solid rgba(200, 214, 255, 0.13);
        }

        .sesen-mdl-page .sesen-mdl-udi-column li:last-child {
          border-bottom: 0;
        }

        .sesen-mdl-page .sesen-mdl-udi-rule {
          margin-top: 26px;
          color: #FFFFFF;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 23px;
          font-weight: 500;
        }

        /* Lifecycle */
        .sesen-mdl-page .sesen-mdl-lifecycle-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid #C9D5ED;
          border-left: 1px solid #C9D5ED;
        }

        .sesen-mdl-page .sesen-mdl-lifecycle-step {
          min-height: 244px;
          padding: 30px 30px 32px;
          border-right: 1px solid #C9D5ED;
          border-bottom: 1px solid #C9D5ED;
          background: rgba(255,255,255,0.58);
        }

        .sesen-mdl-page .sesen-mdl-lifecycle-number {
          margin-bottom: 18px;
          color: var(--sesen-mdl-primary-dark);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
        }

        .sesen-mdl-page .sesen-mdl-lifecycle-step h3 {
          font-size: 20px;
        }

        /* Devices / IVD */
        .sesen-mdl-page .sesen-mdl-product-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 30px;
          overflow: hidden;
          background: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-product-panel {
          padding: 42px 44px;
        }

        .sesen-mdl-page .sesen-mdl-product-panel + .sesen-mdl-product-panel {
          border-left: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-product-panel h3 {
          font-size: 25px;
        }

        /* Global markets */
        .sesen-mdl-page .sesen-mdl-market-grid {
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-mdl-page .sesen-mdl-market-list {
          border-top: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-market-item {
          display: grid;
          grid-template-columns: 150px 1fr;
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-market-name {
          color: var(--sesen-mdl-primary-dark);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.035em;
        }

        .sesen-mdl-page .sesen-mdl-market-item p {
          margin: 0;
        }

        /* Quality controls */
        .sesen-mdl-page .sesen-mdl-quality-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          border-top: 1px solid var(--sesen-mdl-border);
          border-left: 1px solid var(--sesen-mdl-border);
          background: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-quality-item {
          padding: 32px 30px;
          border-right: 1px solid var(--sesen-mdl-border);
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-quality-item h3 {
          font-size: 20px;
        }

        .sesen-mdl-page .sesen-mdl-quality-item p {
          margin-bottom: 0;
        }

        /* Quality infrastructure */
        .sesen-mdl-page .sesen-mdl-infra-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 44px;
          border-top: 1px solid #C9D5ED;
        }

        .sesen-mdl-page .sesen-mdl-infra-item {
          padding: 26px 0 28px;
          border-bottom: 1px solid #C9D5ED;
        }

        .sesen-mdl-page .sesen-mdl-infra-item h3 {
          font-size: 20px;
        }

        .sesen-mdl-page .sesen-mdl-infra-note {
          margin-top: 28px;
          padding: 20px 24px;
          border-left: 2px solid var(--sesen-mdl-primary);
          background: rgba(255, 255, 255, 0.62);
          color: var(--sesen-mdl-body);
          font-size: 16px;
        }

        /* AI */
        .sesen-mdl-page .sesen-mdl-ai-grid {
          display: grid;
          grid-template-columns: 0.86fr 1.14fr;
          gap: 72px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-ai-panel {
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 28px;
          background: #FFFFFF;
          overflow: hidden;
        }

        .sesen-mdl-page .sesen-mdl-ai-row {
          display: grid;
          grid-template-columns: 190px 1fr;
          gap: 24px;
          padding: 22px 26px;
          border-bottom: 1px solid var(--sesen-mdl-divider);
        }

        .sesen-mdl-page .sesen-mdl-ai-row:last-child {
          border-bottom: 0;
        }

        .sesen-mdl-page .sesen-mdl-ai-row strong {
          color: var(--sesen-mdl-navy);
          font-size: 16px;
          font-weight: 600;
        }

        .sesen-mdl-page .sesen-mdl-ai-row span {
          color: var(--sesen-mdl-body);
          font-size: 16px;
          line-height: 1.6;
        }

        .sesen-mdl-page .sesen-mdl-ai-anchor {
          margin-top: 26px;
          color: var(--sesen-mdl-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 21px;
          font-weight: 500;
          line-height: 1.45;
        }

        /* Program management */
        .sesen-mdl-page .sesen-mdl-program-grid {
          display: grid;
          grid-template-columns: 0.78fr 1.22fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-mdl-page .sesen-mdl-program-stat {
          margin-top: 32px;
          padding: 24px 26px;
          border: 1px solid var(--sesen-mdl-border);
          border-radius: 22px;
          background: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-program-stat strong {
          display: block;
          margin-bottom: 5px;
          color: var(--sesen-mdl-primary-dark);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 30px;
          font-weight: 500;
        }

        .sesen-mdl-page .sesen-mdl-program-stat span {
          color: var(--sesen-mdl-body);
          font-size: 16px;
        }

        .sesen-mdl-page .sesen-mdl-program-list {
          border-top: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-program-item {
          display: grid;
          grid-template-columns: minmax(190px, 0.72fr) minmax(0, 1.28fr);
          gap: 30px;
          padding: 25px 0;
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-program-item h3 {
          margin: 0;
          font-size: 20px;
        }

        .sesen-mdl-page .sesen-mdl-program-item p {
          margin: 0;
        }

        /* Differentiators */
        .sesen-mdl-page .sesen-mdl-diff-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0 42px;
          border-top: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-diff-item {
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-diff-item h3 {
          font-size: 20px;
        }

        /* Related services */
        .sesen-mdl-page .sesen-mdl-services-list {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: 56px;
          border-top: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-service-row {
          padding: 28px 0 30px;
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-service-row h3 {
          font-size: 21px;
          margin-bottom: 8px;
        }

        .sesen-mdl-page .sesen-mdl-service-row p {
          margin-bottom: 13px;
        }

        /* FAQ */
        .sesen-mdl-page .sesen-mdl-faq-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 76px;
          align-items: start;
        }

        .sesen-mdl-page .sesen-mdl-faq-intro {
          position: sticky;
          top: 28px;
        }

        .sesen-mdl-page .sesen-mdl-faq-list {
          border-top: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-faq-item {
          border-bottom: 1px solid var(--sesen-mdl-border);
        }

        .sesen-mdl-page .sesen-mdl-faq-item summary {
          cursor: pointer;
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 34px;
          gap: 22px;
          align-items: center;
          padding: 24px 0;
          color: var(--sesen-mdl-navy);
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-size: 19px;
          font-weight: 500;
          line-height: 1.4;
        }

        .sesen-mdl-page .sesen-mdl-faq-item summary::-webkit-details-marker {
          display: none;
        }

        .sesen-mdl-page .sesen-mdl-faq-icon {
          width: 30px;
          height: 30px;
          position: relative;
          border: 1px solid #C5D0E6;
          border-radius: 50%;
        }

        .sesen-mdl-page .sesen-mdl-faq-icon::before,
        .sesen-mdl-page .sesen-mdl-faq-icon::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: var(--sesen-mdl-primary-dark);
        }

        .sesen-mdl-page .sesen-mdl-faq-icon::before {
          width: 10px;
          height: 1.5px;
        }

        .sesen-mdl-page .sesen-mdl-faq-icon::after {
          width: 1.5px;
          height: 10px;
          transition: transform 160ms ease;
        }

        .sesen-mdl-page .sesen-mdl-faq-item[open] .sesen-mdl-faq-icon::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }

        .sesen-mdl-page .sesen-mdl-faq-answer {
          max-width: 840px;
          padding: 0 48px 24px 0;
        }

        .sesen-mdl-page .sesen-mdl-faq-answer p {
          margin: 0;
          font-size: 16px;
        }

        /* Final CTA */
        .sesen-mdl-page .sesen-mdl-final {
          padding: 88px 0;
          background:
            radial-gradient(circle at 86% 28%, rgba(111, 139, 225, 0.26), transparent 33%),
            var(--sesen-mdl-deep-blue);
        }

        .sesen-mdl-page .sesen-mdl-final-grid {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 58px;
          align-items: center;
        }

        .sesen-mdl-page .sesen-mdl-final h2 {
          max-width: 820px;
          margin-bottom: 14px;
          color: #FFFFFF;
        }

        .sesen-mdl-page .sesen-mdl-final p {
          max-width: 800px;
          margin-bottom: 0;
          color: #E1E9FC;
          font-size: 18px;
        }

        .sesen-mdl-page .sesen-mdl-final .sesen-mdl-btn-row {
          justify-content: flex-end;
        }

        @media (max-width: 1360px) {
          .sesen-mdl-page .sesen-mdl-container {
            width: min(1280px, calc(100% - 80px));
          }

          .sesen-mdl-page .sesen-mdl-hero-grid,
          .sesen-mdl-page .sesen-mdl-connected-grid,
          .sesen-mdl-page .sesen-mdl-continuity-grid,
          .sesen-mdl-page .sesen-mdl-artwork-grid,
          .sesen-mdl-page .sesen-mdl-udi-grid,
          .sesen-mdl-page .sesen-mdl-ai-grid {
            gap: 52px;
          }
        }

        @media (max-width: 1080px) {
          .sesen-mdl-page .sesen-mdl-hero-grid {
            grid-template-columns: minmax(0, 1fr) minmax(370px, 0.85fr);
            gap: 44px;
          }

          .sesen-mdl-page .sesen-mdl-connected-grid,
          .sesen-mdl-page .sesen-mdl-continuity-grid,
          .sesen-mdl-page .sesen-mdl-artwork-grid,
          .sesen-mdl-page .sesen-mdl-udi-grid,
          .sesen-mdl-page .sesen-mdl-ai-grid,
          .sesen-mdl-page .sesen-mdl-program-grid {
            grid-template-columns: 1fr 1fr;
            gap: 46px;
          }


          .sesen-mdl-page .sesen-mdl-scope-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-mdl-page .sesen-mdl-scope-group,
          .sesen-mdl-page .sesen-mdl-scope-group:nth-child(4),
          .sesen-mdl-page .sesen-mdl-scope-group:nth-child(5) {
            grid-column: span 1;
          }

          .sesen-mdl-page .sesen-mdl-quality-grid,
          .sesen-mdl-page .sesen-mdl-infra-grid,
          .sesen-mdl-page .sesen-mdl-diff-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .sesen-mdl-page .sesen-mdl-connected-map {
            min-height: 500px;
          }

          .sesen-mdl-page .sesen-mdl-connected-node {
            width: 145px;
            padding: 14px;
          }
        }

        @media (max-width: 900px) {
          .sesen-mdl-page .sesen-mdl-section {
            padding: 76px 0;
          }

          .sesen-mdl-page .sesen-mdl-section--dense {
            padding: 70px 0;
          }

          .sesen-mdl-page .sesen-mdl-hero {
            padding: 76px 0;
          }

          .sesen-mdl-page .sesen-mdl-hero-grid,
          .sesen-mdl-page .sesen-mdl-connected-grid,
          .sesen-mdl-page .sesen-mdl-continuity-grid,
          .sesen-mdl-page .sesen-mdl-workflow-grid,
          .sesen-mdl-page .sesen-mdl-artwork-grid,
          .sesen-mdl-page .sesen-mdl-udi-grid,
          .sesen-mdl-page .sesen-mdl-market-grid,
          .sesen-mdl-page .sesen-mdl-ai-grid,
          .sesen-mdl-page .sesen-mdl-program-grid,
          .sesen-mdl-page .sesen-mdl-faq-grid,
          .sesen-mdl-page .sesen-mdl-final-grid {
            grid-template-columns: 1fr;
          }

          .sesen-mdl-page .sesen-mdl-hero-copy {
            max-width: 780px;
          }

          .sesen-mdl-page .sesen-mdl-hero-art {
            width: min(100%, 540px);
            margin: 10px auto 0;
          }

          .sesen-mdl-page .sesen-mdl-workflow-intro,
          .sesen-mdl-page .sesen-mdl-faq-intro {
            position: static;
          }

          .sesen-mdl-page .sesen-mdl-connected-copy {
            max-width: 760px;
          }

          .sesen-mdl-page .sesen-mdl-connected-map {
            min-height: 520px;
          }

          .sesen-mdl-page .sesen-mdl-artwork-visual {
            max-width: 620px;
          }

          .sesen-mdl-page .sesen-mdl-final .sesen-mdl-btn-row {
            justify-content: flex-start;
          }
        }

        @media (max-width: 768px) {
          .sesen-mdl-page .sesen-mdl-container {
            width: calc(100% - 56px);
          }

          .sesen-mdl-page h1 {
            font-size: 42px;
          }

          .sesen-mdl-page h2 {
            font-size: 32px;
          }

          .sesen-mdl-page h3 {
            font-size: 21px;
          }

          .sesen-mdl-page .sesen-mdl-lead,
          .sesen-mdl-page .sesen-mdl-hero-copy .sesen-mdl-lead {
            font-size: 18px;
          }

          .sesen-mdl-page .sesen-mdl-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px 22px;
          }

          .sesen-mdl-page .sesen-mdl-trust-item {
            justify-content: flex-start;
            text-align: left;
          }

          .sesen-mdl-page .sesen-mdl-scope-grid,
          .sesen-mdl-page .sesen-mdl-lifecycle-grid,
          .sesen-mdl-page .sesen-mdl-quality-grid,
          .sesen-mdl-page .sesen-mdl-infra-grid,
          .sesen-mdl-page .sesen-mdl-diff-grid,
          .sesen-mdl-page .sesen-mdl-services-list,
          .sesen-mdl-page .sesen-mdl-product-grid {
            grid-template-columns: 1fr;
          }

          .sesen-mdl-page .sesen-mdl-product-panel + .sesen-mdl-product-panel {
            border-left: 0;
            border-top: 1px solid var(--sesen-mdl-border);
          }

          .sesen-mdl-page .sesen-mdl-qa-list {
            grid-template-columns: 1fr;
          }

          .sesen-mdl-page .sesen-mdl-program-item {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .sesen-mdl-page .sesen-mdl-ai-row {
            grid-template-columns: 160px 1fr;
          }

          .sesen-mdl-page .sesen-mdl-market-item {
            grid-template-columns: 118px minmax(0, 1fr);
            gap: 20px;
          }

          .sesen-mdl-page .sesen-mdl-connected-map {
            min-height: auto;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 24px;
          }

          .sesen-mdl-page .sesen-mdl-connected-map::before,
          .sesen-mdl-page .sesen-mdl-connected-line {
            display: none;
          }

          .sesen-mdl-page .sesen-mdl-connected-core {
            position: static;
            width: auto;
            height: auto;
            min-height: 110px;
            transform: none;
            grid-column: 1 / -1;
            border-radius: 20px;
          }

          .sesen-mdl-page .sesen-mdl-connected-node {
            position: static;
            width: auto;
            min-height: 70px;
            display: grid;
            place-items: center;
          }

          /* v1.2 mobile alignment: center only standalone section heading groups. */
          .sesen-mdl-page .sesen-mdl-mobile-center {
            margin-left: auto;
            margin-right: auto;
            text-align: center;
          }

          .sesen-mdl-page .sesen-mdl-mobile-center > p:not(.sesen-mdl-eyebrow),
          .sesen-mdl-page .sesen-mdl-mobile-center > .sesen-mdl-ai-anchor,
          .sesen-mdl-page .sesen-mdl-mobile-center > .sesen-mdl-continuity-note,
          .sesen-mdl-page .sesen-mdl-mobile-center > .sesen-mdl-program-stat {
            text-align: left;
          }

          .sesen-mdl-page .sesen-mdl-final .sesen-mdl-btn-row {
            justify-content: center;
          }

          /* Workflows, technical/regulatory content, directories, and FAQs retain a strong left reading axis. */
          .sesen-mdl-page .sesen-mdl-mobile-left {
            text-align: left;
          }
        }

        @media (max-width: 560px) {
          .sesen-mdl-page .sesen-mdl-container {
            width: calc(100% - 40px);
          }

          .sesen-mdl-page .sesen-mdl-section {
            padding: 68px 0;
          }

          .sesen-mdl-page .sesen-mdl-section--dense {
            padding: 64px 0;
          }

          .sesen-mdl-page .sesen-mdl-hero {
            padding: 68px 0 64px;
          }

          .sesen-mdl-page .sesen-mdl-heading-wrap {
            margin-bottom: 36px;
          }

          .sesen-mdl-page .sesen-mdl-btn-row {
            display: grid;
            grid-template-columns: 1fr;
            width: 100%;
          }

          .sesen-mdl-page .sesen-mdl-btn {
            width: 100%;
          }

          .sesen-mdl-page .sesen-mdl-trust-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }

          .sesen-mdl-page .sesen-mdl-trust-item {
            padding: 13px 0;
            border-bottom: 1px solid var(--sesen-mdl-divider);
          }

          .sesen-mdl-page .sesen-mdl-trust-item:last-child {
            border-bottom: 0;
          }

          .sesen-mdl-page .sesen-mdl-connected-map {
            grid-template-columns: 1fr;
            padding: 20px;
          }

          .sesen-mdl-page .sesen-mdl-connected-core {
            grid-column: auto;
          }

          .sesen-mdl-page .sesen-mdl-scope-group,
          .sesen-mdl-page .sesen-mdl-product-panel,
          .sesen-mdl-page .sesen-mdl-udi-column {
            padding: 28px 24px;
          }

          .sesen-mdl-page .sesen-mdl-workflow-list {
            margin-left: 19px;
          }

          .sesen-mdl-page .sesen-mdl-workflow-step {
            padding-left: 46px;
          }

          .sesen-mdl-page .sesen-mdl-workflow-number {
            left: -20px;
            width: 40px;
            height: 40px;
          }

          .sesen-mdl-page .sesen-mdl-artwork-visual {
            min-height: 450px;
            padding: 30px 22px;
          }

          .sesen-mdl-page .sesen-mdl-artwork-callouts {
            grid-template-columns: 1fr;
          }

          .sesen-mdl-page .sesen-mdl-udi-panel {
            grid-template-columns: 1fr;
          }

          .sesen-mdl-page .sesen-mdl-udi-column + .sesen-mdl-udi-column {
            border-left: 0;
            border-top: 1px solid rgba(200, 214, 255, 0.2);
          }

          .sesen-mdl-page .sesen-mdl-ai-row,
          .sesen-mdl-page .sesen-mdl-market-item {
            grid-template-columns: 1fr;
            gap: 7px;
          }

          .sesen-mdl-page .sesen-mdl-faq-item summary {
            grid-template-columns: 1fr 30px;
            gap: 14px;
            padding: 22px 0;
            font-size: 18px;
          }

          .sesen-mdl-page .sesen-mdl-faq-answer {
            padding-right: 0;
          }

          .sesen-mdl-page .sesen-mdl-market-name,
          .sesen-mdl-page .sesen-mdl-link,
          .sesen-mdl-page .sesen-mdl-udi-column li,
          .sesen-mdl-page .sesen-mdl-continuity-item span {
            overflow-wrap: anywhere;
          }

          .sesen-mdl-page .sesen-mdl-final {
            padding: 68px 0;
          }
        }

        @media (max-width: 360px) {
          .sesen-mdl-page h1 {
            font-size: 38px;
          }

          .sesen-mdl-page h2 {
            font-size: 30px;
          }

          .sesen-mdl-page .sesen-mdl-artwork-visual {
            padding-left: 18px;
            padding-right: 18px;
          }

          .sesen-mdl-page .sesen-mdl-hero-art {
            width: 100%;
            margin-left: 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .sesen-mdl-page .sesen-mdl-btn,
          .sesen-mdl-page .sesen-mdl-faq-icon::after {
            transition: none;
          }
        }
      `}</style>

      <section className="sesen-mdl-hero">
        <div className="sesen-mdl-container sesen-mdl-hero-grid">
          <div className="sesen-mdl-hero-copy">
            <h1>Medical Device Labeling Translation Services</h1>
            <p className="sesen-mdl-lead">
              Translate, format, review, and maintain multilingual medical device labeling with the terminology control, linguistic precision, and lifecycle consistency required for global products.
            </p>
            <p className="sesen-mdl-hero-support">
              Sesen provides specialized medical device labeling translation services for device labels, packaging, Instructions for Use (IFUs), electronic IFUs, UDI-related content, safety information, and digital labeling across 150+ languages. Our workflows combine professional medical-device linguists, terminology governance, multilingual artwork support, in-context linguistic QA, and AI-assisted quality controls to help global teams keep labeling accurate and consistent from product launch through ongoing updates.
            </p>
            <div className="sesen-mdl-btn-row">
              <a className="sesen-mdl-btn sesen-mdl-btn--primary" href="https://www.sesen.com/get-a-quote/">
                REQUEST A QUOTE <Arrow />
              </a>
              <a className="sesen-mdl-btn sesen-mdl-btn--secondary" href="https://www.sesen.com/contact-sales/">
                TALK WITH TEAM SESEN
              </a>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-mdl-trust" aria-label="Medical device labeling capabilities">
        <div className="sesen-mdl-container sesen-mdl-trust-grid">
          {[
            "Medical Device Specialization",
            "ISO 17100 · ISO 9001 · ISO 13485",
            "150+ Languages",
            "Professional Human Review",
            "Labeling & In-Context QA",
          ].map((item) => (
            <div className="sesen-mdl-trust-item" key={item}>
              <span className="sesen-mdl-trust-dot" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-soft">
        <div className="sesen-mdl-container sesen-mdl-connected-grid">
          <div className="sesen-mdl-connected-copy sesen-mdl-mobile-center">
            <p className="sesen-mdl-eyebrow">Connected Labeling</p>
            <h2>Medical Device Labeling Is Connected Product Content</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling rarely exists as a single document. The same device name, warning, instruction, technical term, measurement, or safety statement may appear across multiple product touchpoints.
            </p>
            <p>
              Each asset has its own format and purpose, but the underlying product information must remain aligned. Sesen approaches medical device labeling translation as a connected multilingual content system—helping organizations maintain controlled terminology and meaning across labeling touchpoints while accommodating the space, format, usability, and market-specific requirements of each asset.
            </p>
            <p>
              Managing these relationships together can reduce terminology drift, inconsistent warnings, duplicated review effort, and avoidable discrepancies between related product materials.
            </p>
            <a className="sesen-mdl-link" href="https://www.sesen.com/labeling-translation-services/">
              Explore Labeling Translation Services <Arrow />
            </a>
          </div>

          <div className="sesen-mdl-connected-map" aria-label="Connected medical device labeling content">
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--1" />
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--2" />
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--3" />
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--4" />
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--5" />
            <div className="sesen-mdl-connected-line sesen-mdl-connected-line--6" />
            <div className="sesen-mdl-connected-core">Approved Product Content & Terminology</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--a">Device Labels</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--b">Packaging & Cartons</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--c">IFUs & eIFUs</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--d">Digital Labeling</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--e">Related Device UI</div>
            <div className="sesen-mdl-connected-node sesen-mdl-connected-node--f">Future Revisions</div>
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-left">
            <h2>Medical Device Labeling Content We Translate</h2>
            <p className="sesen-mdl-lead">
              Sesen supports multilingual labeling across physical, digital, user-facing, and lifecycle content for medical devices and diagnostic products.
            </p>
          </div>

          <div className="sesen-mdl-scope-grid">
            {scopeGroups.map((group) => (
              <article className="sesen-mdl-scope-group" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="sesen-mdl-plain-list">
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
                {group.link && (
                  <a className="sesen-mdl-link" href={group.link.href}>
                    {group.link.label} <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-dark">
        <div className="sesen-mdl-container sesen-mdl-continuity-grid">
          <div className="sesen-mdl-mobile-center">
            <h2>Maintain Consistency Across Every Labeling Touchpoint</h2>
            <p className="sesen-mdl-lead">
              A safety warning should not communicate one meaning on a carton and another in the IFU. A device component should not acquire different names because it appears in separate files.
            </p>
            <p>
              Sesen can use approved terminology, client glossaries, translation memory, product naming conventions, reviewer decisions, prior approved translations, and reference materials to maintain continuity across related labeling assets and successive releases.
            </p>
            <div className="sesen-mdl-continuity-note">
              Consistency does not mean forcing identical wording everywhere. A short device label, a detailed IFU, and a software display may require different formulations. The goal is controlled terminology, accurate meaning, and an intentional relationship between each touchpoint.
            </div>
          </div>

          <div className="sesen-mdl-continuity-chain" aria-label="Terminology continuity across labeling assets">
            {[
              ["01", "Approved Terminology", "Client terminology, nomenclature, approved translations, and reference content establish a controlled linguistic foundation."],
              ["02", "Device Label", "Space-sensitive product and safety language remains aligned with the approved terminology system."],
              ["03", "Packaging", "Cartons and inserts preserve the same product concepts while adapting to packaging context."],
              ["04", "IFU / eIFU", "Detailed instructions reuse approved concepts while allowing the language needed for usability and procedure."],
              ["05", "Digital / Related UI", "Selected digital and interface content stays consistent with product labeling where the same concepts recur."],
              ["06", "Future Revision", "Approved language and reviewer decisions can carry forward as products and markets evolve."],
            ].map(([n, title, text]) => (
              <div className="sesen-mdl-continuity-item" key={title}>
                <div className="sesen-mdl-continuity-marker">{n}</div>
                <div><strong>{title}</strong><span>{text}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container sesen-mdl-workflow-grid">
          <div className="sesen-mdl-workflow-intro sesen-mdl-mobile-left">
            <h2>From Source Content to Final Label</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling quality depends on more than translated text. Language must remain accurate after it enters the final label, carton, insert, IFU, or electronic format.
            </p>
            <p>
              Sesen supports a controlled workflow from source preparation through final-context linguistic review, with review depth configured around content risk, client requirements, languages, and project scope.
            </p>
          </div>

          <div className="sesen-mdl-workflow-list">
            {workflowSteps.map((step) => (
              <article className="sesen-mdl-workflow-step" key={step.number}>
                <div className="sesen-mdl-workflow-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {step.link && (
                  <a className="sesen-mdl-link" href={step.link.href}>
                    {step.link.label} <Arrow />
                  </a>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-pale">
        <div className="sesen-mdl-container sesen-mdl-artwork-grid">
          <div className="sesen-mdl-artwork-visual">
            <div className="sesen-mdl-label-sheet" aria-hidden="true">
              <span className="sesen-mdl-label-chip">Final Label Artwork</span>
              <div className="sesen-mdl-label-title" />
              <div className="sesen-mdl-label-line" style={{ width: "88%" }} />
              <div className="sesen-mdl-label-line" style={{ width: "68%" }} />
              <div className="sesen-mdl-label-warning">
                <div className="sesen-mdl-label-warning-head" />
                <div className="sesen-mdl-label-line" style={{ width: "94%" }} />
                <div className="sesen-mdl-label-line" style={{ width: "78%" }} />
              </div>
              <div className="sesen-mdl-label-line" style={{ width: "82%" }} />
              <div className="sesen-mdl-label-line" style={{ width: "58%" }} />
              <div className="sesen-mdl-label-warning">
                <div className="sesen-mdl-label-line" style={{ width: "72%", marginTop: 0 }} />
                <div className="sesen-mdl-label-line" style={{ width: "91%" }} />
              </div>
              <div className="sesen-mdl-label-marker sesen-mdl-label-marker--one">1</div>
              <div className="sesen-mdl-label-marker sesen-mdl-label-marker--two">2</div>
              <div className="sesen-mdl-label-marker sesen-mdl-label-marker--three">3</div>
            </div>
            <div className="sesen-mdl-artwork-callouts" aria-label="Examples of final label QA checks">
              <div className="sesen-mdl-artwork-callout"><strong>1</strong><span>Text fit & wrapping</span></div>
              <div className="sesen-mdl-artwork-callout"><strong>2</strong><span>Warning placement</span></div>
              <div className="sesen-mdl-artwork-callout"><strong>3</strong><span>Identifier integrity</span></div>
            </div>
          </div>

          <div className="sesen-mdl-mobile-left">
            <h2>Quality Checks Where Language Meets the Final Label</h2>
            <p className="sesen-mdl-lead">
              Medical device labels create localization constraints that ordinary documents do not. Limited physical space, text expansion, multiple languages, complex scripts, symbols, identifiers, and fixed artwork can all affect how correct language performs in context.
            </p>
            <p>
              A linguistically accurate sentence can still become problematic after layout. Sesen's final-format linguistic QA can help identify issues before final delivery or release.
            </p>

            <div className="sesen-mdl-qa-list">
              {finalQaChecks.map((item) => (
                <div className="sesen-mdl-qa-item" key={item}><Check /><span>{item}</span></div>
              ))}
            </div>

            <p style={{ marginTop: 26 }}>
              This review focuses on linguistic accuracy and content integrity in final context. Regulatory approval and final labeling compliance remain the responsibility of the manufacturer and its designated regulatory teams.
            </p>
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-dark">
        <div className="sesen-mdl-container sesen-mdl-udi-grid">
          <div className="sesen-mdl-mobile-left">
            <h2>Protect Product Identification Through Multilingual Labeling</h2>
            <p className="sesen-mdl-lead">
              UDI, model information, product codes, barcodes, dates, measurements, and other structured data require a different localization approach from ordinary prose.
            </p>
            <p>
              Some elements need translation. Others must remain exactly as supplied. Sesen applies controlled workflows designed to distinguish between the two while preserving the relationship between identifiers and surrounding multilingual text.
            </p>
            <div className="sesen-mdl-udi-rule">Translate what should change. Protect what should not.</div>
          </div>

          <div className="sesen-mdl-udi-panel">
            <div className="sesen-mdl-udi-column">
              <h3>Translate & Review</h3>
              <ul>
                <li>Product descriptions</li>
                <li>Warnings and explanatory language</li>
                <li>Storage and handling text</li>
                <li>Associated labeling instructions</li>
                <li>Market-specific information where applicable</li>
              </ul>
            </div>
            <div className="sesen-mdl-udi-column">
              <h3>Preserve & Verify</h3>
              <ul>
                <li>UDI and controlled identifiers</li>
                <li>Model and catalog numbers</li>
                <li>Serial or lot-related fields</li>
                <li>Barcodes and variable data</li>
                <li>Numbers, dates, and units as specified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-pale">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-left">
            <h2>Manage Medical Device Labeling Across the Product Lifecycle</h2>
            <p className="sesen-mdl-lead">
              The first multilingual launch is only one stage of a global labeling program. Products change, markets are added, safety information evolves, packaging is redesigned, new models appear, and digital delivery expands.
            </p>
            <p>
              Sesen helps medical device companies manage controlled multilingual change while retaining approved terminology, reviewer decisions, and reusable content over time.
            </p>
          </div>

          <div className="sesen-mdl-lifecycle-grid">
            {lifecycleSteps.map((step) => (
              <article className="sesen-mdl-lifecycle-step" key={step.number}>
                <div className="sesen-mdl-lifecycle-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 28 }}>
            <a className="sesen-mdl-link" href="https://www.sesen.com/life-sciences-labeling-workspace/">
              Explore the Sesen Labeling Workspace <Arrow />
            </a>
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-center">
            <h2>Medical Device & IVD Labeling Programs</h2>
            <p className="sesen-mdl-lead">
              Sesen supports labeling translation for a broad range of medical technologies, from focused product-label projects to multilingual systems involving devices, software, diagnostics, user instructions, and multiple product configurations.
            </p>
          </div>

          <div className="sesen-mdl-product-grid">
            <article className="sesen-mdl-product-panel">
              <h3>Medical Devices</h3>
              <p>
                Our teams support labeling for diagnostic and therapeutic devices, surgical and procedural products, imaging systems, monitoring equipment, connected devices, patient-use products, professional-use systems, laboratory equipment, and complex product families.
              </p>
              <p>
                Workflows are configured according to terminology, intended audience, content risk, file format, and review requirements rather than treating every device category the same.
              </p>
            </article>

            <article className="sesen-mdl-product-panel">
              <h3>In Vitro Diagnostics</h3>
              <p>
                IVD labeling may combine scientific terminology, specimen information, warnings, operating instructions, performance-related concepts, product identification, packaging, and detailed IFUs.
              </p>
              <p>
                Sesen supports multilingual IVD labels, packaging, IFUs/eIFUs, and related product information while maintaining terminology continuity across diagnostic content.
              </p>
              <a className="sesen-mdl-link" href="https://www.sesen.com/ivd-translation-services/">
                Explore IVD Translation Services <Arrow />
              </a>
            </article>
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-soft">
        <div className="sesen-mdl-container sesen-mdl-market-grid">
          <div className="sesen-mdl-mobile-left">
            <h2>Support for Global Medical Device Labeling Programs</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling requirements vary by market, device, intended user, product configuration, and regulatory pathway. Successful global programs therefore require more than translating a source label into a standard list of languages.
            </p>
            <p>
              Sesen works with medical device organizations to implement multilingual workflows around manufacturer-defined market and regulatory requirements. Specific legal and regulatory determinations remain with the manufacturer's regulatory team; Sesen builds the multilingual workflow around those requirements and approved references.
            </p>
            <a className="sesen-mdl-link" href="https://www.sesen.com/regulatory-translation-services/">
              Explore Regulatory Translation Services <Arrow />
            </a>
          </div>

          <div className="sesen-mdl-market-list">
            {[
              ["U.S. FDA", "Support multilingual content workflows for global device programs that coexist with U.S. labeling requirements, including labels, packaging, instructions, safety content, and UDI-related information."],
              ["EU MDR", "Under the EU Medical Device Regulation, information supplied with a device must be provided in the official Union language or languages determined by the Member State in which the device is made available. Sesen supports multilingual labels, IFUs, packaging, user information, and recurring updates across European markets."],
              ["EU IVDR", "Support multilingual IVD labeling and IFU workflows while coordinating scientific and diagnostic terminology across related content."],
              ["Electronic IFUs", "The EU eIFU framework permits electronic rather than paper Instructions for Use for MDR devices intended for professional users when the applicable conditions are met. Where professional-use devices may also reasonably be used by lay persons, instructions intended for those lay users remain subject to paper requirements. Sesen supports the multilingual content, structured formats, terminology, version management, and linguistic QA for eIFU programs."],
              ["Additional Markets", "Support medical device labeling across 150+ languages for programs spanning North America, Europe, Asia-Pacific, Latin America, the Middle East, Africa, and other international markets."],
            ].map(([name, text]) => (
              <div className="sesen-mdl-market-item" key={name}>
                <div className="sesen-mdl-market-name">{name}</div>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-center">
            <h2>Quality Controls for Safety-Critical Device Labeling</h2>
            <p className="sesen-mdl-lead">
              Labeling content often combines short text with disproportionately high consequences. One number, warning, direction, or terminology error can affect multiple assets and markets.
            </p>
          </div>

          <div className="sesen-mdl-quality-grid">
            {qualityControls.map((item) => (
              <article className="sesen-mdl-quality-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-pale">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-center">
            <h2>Quality Infrastructure for Regulated Medical Device Content</h2>
            <p className="sesen-mdl-lead">
              Sesen combines specialized life sciences expertise with certified quality systems and controlled multilingual processes.
            </p>
          </div>

          <div className="sesen-mdl-infra-grid">
            {qualityInfrastructure.map((item) => (
              <article className="sesen-mdl-infra-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sesen-mdl-infra-note">
            ISO certification supports Sesen's quality infrastructure and process discipline; it does not replace the manufacturer's regulatory review or constitute certification of an individual label's compliance.
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-soft">
        <div className="sesen-mdl-container sesen-mdl-ai-grid">
          <div className="sesen-mdl-mobile-center">
            <h2>AI-Assisted Workflows With Professional Human Review</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling contains exactly the type of content where technology can be highly useful—and where uncontrolled automation can introduce unacceptable risk.
            </p>
            <p>
              Sesen uses AI and language technologies to strengthen defined parts of the multilingual workflow while retaining professional human review for regulated labeling content.
            </p>
            <div className="sesen-mdl-ai-anchor">
              Technology supports consistency, visibility, reuse, and efficiency. Professional medical linguists remain responsible for final linguistic quality.
            </div>
            <div style={{ marginTop: 24 }}>
              <a className="sesen-mdl-link" href="https://www.sesen.com/sesengpt/">
                Explore SesenGPT <Arrow />
              </a>
            </div>
          </div>

          <div className="sesen-mdl-ai-panel">
            {[
              ["Terminology Intelligence", "Identify recurring medical, technical, and product terminology and compare translated content against approved resources."],
              ["Translation Memory & Reuse", "Identify relevant previously translated content to help maintain consistency across product families, markets, and revisions."],
              ["Version Comparison", "Help distinguish changed from unchanged content so teams can focus attention on the portions that have actually been updated."],
              ["Numeric & Consistency QA", "Support checks for numbers, units, repeated language, terminology, missing content, and selected formatting patterns."],
              ["AI-Assisted Translation", "For appropriate content and client-approved workflows, SesenGPT can support controlled translation assistance within a professional-review process."],
              ["Expert Human Validation", "Professional medical linguists review regulated labeling for meaning, terminology, readability, and contextual accuracy before final delivery."],
            ].map(([title, text]) => (
              <div className="sesen-mdl-ai-row" key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container sesen-mdl-program-grid">
          <div className="sesen-mdl-mobile-center">
            <h2>Coordinate Complex Multilingual Labeling Programs</h2>
            <p className="sesen-mdl-lead">
              A global device manufacturer may be managing many languages, product families, SKUs, regional variants, packaging configurations, reviewer groups, source formats, and recurring changes at the same time.
            </p>
            <p>
              Sesen provides centralized multilingual program support designed for that complexity, from one-time labeling projects to ongoing enterprise programs.
            </p>
            <div className="sesen-mdl-program-stat">
              <strong>150+ Languages</strong>
              <span>Global language support for launches, expansion, recurring revisions, and connected product-content programs.</span>
            </div>
          </div>

          <div className="sesen-mdl-program-list">
            {programCapabilities.map((item) => (
              <article className="sesen-mdl-program-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-section--dense sesen-mdl-pale">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-heading-wrap--center sesen-mdl-mobile-center">
            <h2>Built for Complex Global Medical Device Labeling</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling translation requires more than language coverage. It requires an understanding of how product information moves across content, formats, markets, and time.
            </p>
          </div>

          <div className="sesen-mdl-diff-grid">
            {differentiators.map((item) => (
              <article className="sesen-mdl-diff-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section">
        <div className="sesen-mdl-container">
          <div className="sesen-mdl-heading-wrap sesen-mdl-mobile-left">
            <h2>Explore Related Medical Device & Labeling Services</h2>
            <p className="sesen-mdl-lead">
              Medical device labeling sits at the intersection of Sesen's broader labeling and medical-device expertise. Explore the umbrella services and specialized workflows that connect to global device labeling programs.
            </p>
          </div>

          <div className="sesen-mdl-services-list">
            {relatedServices.map((service) => (
              <article className="sesen-mdl-service-row" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a className="sesen-mdl-link" href={service.href}>
                  {service.link} <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-section sesen-mdl-soft">
        <div className="sesen-mdl-container sesen-mdl-faq-grid">
          <div className="sesen-mdl-faq-intro sesen-mdl-mobile-left">
            <h2>Medical Device Labeling Translation FAQ</h2>
            <p className="sesen-mdl-lead">
              Common questions about medical device label translation, IFUs and eIFUs, artwork, terminology, updates, UDI-related content, languages, and AI-assisted workflows.
            </p>
          </div>

          <div className="sesen-mdl-faq-list">
            {faqs.map((faq, index) => (
              <details className="sesen-mdl-faq-item" key={faq.q} open={index === 0}>
                <summary>
                  <span>{faq.q}</span>
                  <span className="sesen-mdl-faq-icon" aria-hidden="true" />
                </summary>
                <div className="sesen-mdl-faq-answer">
                  <p>{faq.a}</p>
                  {index === 2 && (
                    <div style={{ marginTop: 14 }}>
                      <a className="sesen-mdl-link" href="https://www.sesen.com/ifu-translation-services/">
                        Explore IFU Translation Services <Arrow />
                      </a>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sesen-mdl-final">
        <div className="sesen-mdl-container sesen-mdl-final-grid">
          <div className="sesen-mdl-final-copy sesen-mdl-mobile-center">
            <h2>Plan Your Global Medical Device Labeling Program</h2>
            <p>
              Whether you are preparing a new product launch, expanding into additional markets, updating safety information, moving IFUs into electronic formats, or managing a recurring global labeling program, Sesen can build a multilingual workflow around your products, languages, formats, and review requirements.
            </p>
          </div>
          <div className="sesen-mdl-btn-row">
            <a className="sesen-mdl-btn sesen-mdl-btn--primary" href="https://www.sesen.com/get-a-quote/">
              REQUEST A QUOTE <Arrow />
            </a>
            <a className="sesen-mdl-btn sesen-mdl-btn--secondary" href="https://www.sesen.com/contact-sales/">
              TALK WITH TEAM SESEN
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SesenMedicalDeviceLabelingWireframe;
