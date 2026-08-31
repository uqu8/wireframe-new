import React, { useState } from "react";

const Icon = ({ name, size = 22 }) => {
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

  const paths = {
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9z"/></>,
    flask: <><path d="M9 3h6M10 3v5l-5 8.5A3 3 0 0 0 7.6 21h8.8a3 3 0 0 0 2.6-4.5L14 8V3"/><path d="M7.6 15h8.8"/></>,
    shield: <><path d="M12 3 5 6v5c0 4.5 2.8 8.2 7 10 4.2-1.8 7-5.5 7-10V6l-7-3z"/><path d="m9 12 2 2 4-5"/></>,
    layers: <><path d="m12 3 8 4-8 4-8-4 8-4z"/><path d="m4 12 8 4 8-4M4 17l8 4 8-4"/></>,
    document: <><path d="M7 3h7l4 4v14H7z"/><path d="M14 3v5h5M10 12h5M10 16h5"/></>,
    label: <><path d="M4 7V4h3l11 11-5 5L2 9l2-2z"/><circle cx="6" cy="6" r="1"/></>,
    refresh: <><path d="M20 7v5h-5"/><path d="M4 17v-5h5"/><path d="M6.1 8a7 7 0 0 1 11.5-1.6L20 9M4 15l2.4 2.6A7 7 0 0 0 18 16"/></>,
    search: <><circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/></>,
    database: <><ellipse cx="12" cy="5" rx="7" ry="3"/><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"/></>,
    check: <path d="m5 12 4 4 10-10"/>,
    chevron: <path d="m9 6 6 6-6 6"/>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <path d="M5 12h14"/>,
    arrow: <><path d="M5 12h14"/><path d="m14 7 5 5-5 5"/></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
};

const ArrowLink = ({ href, children, className = "" }) => (
  <a className={`editorial-link ${className}`} href={href}>
    <span>{children}</span><Icon name="arrow" size={17}/>
  </a>
);

const Eyebrow = ({ children, dark = false }) => (
  <div className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>{children}</div>
);

const HeadingGroup = ({ eyebrow, title, intro, dark = false, align = "center", mobileLeft = false, id }) => (
  <div className={`heading-group heading-${align}${dark ? " heading-dark" : ""}${mobileLeft ? " mobile-left" : ""}`}>
    {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
    <h2 id={id}>{title}</h2>
    {intro ? <p className="section-intro">{intro}</p> : null}
  </div>
);

const HeroArtwork = () => (
  <div className="hero-art" aria-label="Illustration of multilingual Safety Data Sheet translation and chemical hazard communication">
    <svg viewBox="0 0 660 520" role="img" aria-labelledby="heroArtTitle heroArtDesc">
      <title id="heroArtTitle">Multilingual Safety Data Sheet translation</title>
      <desc id="heroArtDesc">A Safety Data Sheet, chemical structures, hazard information, language markers, and a global connection.</desc>
      <defs>
        <linearGradient id="paperGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff"/>
          <stop offset="100%" stopColor="#FDF2F7"/>
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#23171d" floodOpacity="0.10"/>
        </filter>
      </defs>
      <circle cx="517" cy="132" r="74" fill="#FDF2F7"/>
      <circle cx="125" cy="403" r="54" fill="#F8F5F6"/>
      <path d="M124 119c75-58 162-78 248-47 99 35 150 121 155 205" fill="none" stroke="#D8D2D5" strokeWidth="2" strokeDasharray="6 8"/>
      <path d="M88 349c49 46 107 67 176 62" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round"/>

      <g filter="url(#softShadow)">
        <path d="M197 77h208l72 72v287H197z" fill="url(#paperGlow)" stroke="#BBB2B7" strokeWidth="2"/>
        <path d="M405 77v76h72" fill="#FAE7EF" stroke="#BBB2B7" strokeWidth="2"/>
        <rect x="229" y="118" width="122" height="16" rx="8" fill="#2D262A"/>
        <rect x="229" y="149" width="173" height="8" rx="4" fill="#B8B0B4"/>
        <rect x="229" y="169" width="144" height="8" rx="4" fill="#D3CDD0"/>
        <rect x="229" y="205" width="214" height="52" rx="10" fill="#F7F4F5" stroke="#D8D2D5"/>
        <rect x="244" y="219" width="24" height="24" rx="5" fill="#fff" stroke="#C11D63" strokeWidth="2"/>
        <path d="m250 231 6 6 8-12" fill="none" stroke="#C11D63" strokeWidth="2"/>
        <rect x="282" y="220" width="118" height="7" rx="3.5" fill="#4B4247"/>
        <rect x="282" y="236" width="88" height="7" rx="3.5" fill="#C5BEC2"/>
        <rect x="229" y="281" width="90" height="10" rx="5" fill="#C11D63"/>
        <rect x="229" y="305" width="196" height="7" rx="3.5" fill="#B9B1B5"/>
        <rect x="229" y="322" width="181" height="7" rx="3.5" fill="#D3CDD0"/>
        <rect x="229" y="339" width="201" height="7" rx="3.5" fill="#D3CDD0"/>
        <rect x="229" y="373" width="69" height="28" rx="14" fill="#FDF2F7"/>
        <text x="263.5" y="392" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700" fill="#C11D63">EN</text>
        <rect x="309" y="373" width="69" height="28" rx="14" fill="#F7F4F5"/>
        <text x="343.5" y="392" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700" fill="#494046">FR</text>
        <rect x="389" y="373" width="69" height="28" rx="14" fill="#F7F4F5"/>
        <text x="423.5" y="392" textAnchor="middle" fontSize="12" fontFamily="Arial, sans-serif" fontWeight="700" fill="#494046">DE</text>
      </g>

      <g transform="translate(94 100)" fill="none" stroke="#4B4247" strokeWidth="2">
        <circle cx="0" cy="0" r="7" fill="#fff"/>
        <circle cx="56" cy="-22" r="7" fill="#fff"/>
        <circle cx="93" cy="25" r="7" fill="#fff"/>
        <circle cx="44" cy="61" r="7" fill="#fff"/>
        <path d="M6-2 49-20M61-17l27 37M88 30 50 57M39 56 4 6"/>
      </g>

      <g transform="translate(485 229)">
        <rect width="99" height="99" rx="22" fill="#fff" stroke="#CFC7CB" strokeWidth="2"/>
        <path d="M49.5 17 79 31v21c0 16-11.4 27-29.5 33C31.4 79 20 68 20 52V31l29.5-14z" fill="#FDF2F7" stroke="#C11D63" strokeWidth="2"/>
        <path d="m38 51 8 8 16-20" fill="none" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </g>

      <g transform="translate(87 304)">
        <rect width="93" height="64" rx="18" fill="#fff" stroke="#CFC7CB" strokeWidth="2"/>
        <text x="23" y="27" fontSize="14" fontWeight="700" fontFamily="Arial, sans-serif" fill="#30292D">H314</text>
        <path d="M22 41h49" stroke="#C11D63" strokeWidth="3" strokeLinecap="round"/>
      </g>
      <path d="M177 336h34" stroke="#C11D63" strokeWidth="2" strokeLinecap="round"/>
      <path d="m202 328 9 8-9 8" fill="none" stroke="#C11D63" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      <g transform="translate(493 367)">
        <circle cx="42" cy="42" r="39" fill="#fff" stroke="#CFC7CB" strokeWidth="2"/>
        <ellipse cx="42" cy="42" rx="18" ry="39" fill="none" stroke="#C11D63" strokeWidth="1.8"/>
        <path d="M3 42h78M9 25h66M9 59h66" fill="none" stroke="#B8B0B4" strokeWidth="1.5"/>
      </g>
    </svg>
  </div>
);

const trustItems = [
  { icon: "globe", title: "100+ Languages", text: "Global SDS translation coverage" },
  { icon: "flask", title: "Chemical Expertise", text: "Specialized technical linguists and reviewers" },
  { icon: "shield", title: "ISO Quality Processes", text: "Controlled professional translation workflows" },
  { icon: "layers", title: "Enterprise Scale", text: "From individual SDSs to global document portfolios" },
];

const scopeLevels = [
  {
    title: "SDS Translation",
    text: "Faithful translation of approved source Safety Data Sheets while preserving technical meaning, chemical terminology, hazard information, numerical values, standardized language, and document structure.",
  },
  {
    title: "SDS Translation + Market Localization",
    text: "Target-market language adaptation, approved terminology, standardized regulatory phrases, formatting requirements, and alignment with related safety documentation—coordinated with your regulatory or compliance teams when market-specific decisions are required.",
  },
  {
    title: "Enterprise SDS Localization Programs",
    text: "Centralized terminology, translation memory, revisions, language assets, workflow management, quality assurance, and multilingual delivery for organizations managing large, continuously changing SDS portfolios.",
  },
];

const regulatoryRegions = [
  {
    title: "United Nations GHS",
    text: "The Globally Harmonized System provides an international foundation for chemical hazard classification and communication through standardized concepts such as labels and Safety Data Sheets. The UN's current published edition is GHS Revision 11, while jurisdictions may adopt different revisions through their own regulatory systems.",
    tag: "Global framework",
  },
  {
    title: "United States — OSHA HazCom",
    text: "OSHA's updated Hazard Communication Standard uses the standardized 16-section SDS format and further aligns U.S. hazard communication requirements with GHS Revision 7. Accurate multilingual content supports clear workplace communication while maintaining consistency with the approved English source.",
    tag: "United States",
  },
  {
    title: "European Union — REACH & CLP",
    text: "REACH governs important aspects of chemical registration and safety communication, while the evolving CLP framework addresses classification, labeling, and packaging. SDSs and applicable exposure scenarios may also be subject to official-language requirements in the recipient market.",
    tag: "EU / EEA",
  },
  {
    title: "Canada — WHMIS",
    text: "Canada requires Safety Data Sheet information in both English and French. Stepes supports bilingual SDS programs with professional Canadian French translation and terminology management designed for technical and safety-critical content.",
    tag: "Canada",
  },
  {
    title: "UK & International Markets",
    text: "Chemical manufacturers operating across the UK, Asia-Pacific, Latin America, the Middle East, and other regions may encounter different adopted GHS revisions, language obligations, terminology conventions, and supplemental requirements.",
    tag: "Global markets",
  },
];

const sdsGroups = [
  {
    range: "01–04",
    title: "Identification, Hazards, Composition & First Aid",
    items: [
      ["1. Identification", "Product identifiers, recommended uses, supplier information, restrictions on use, and emergency contact details."],
      ["2. Hazard Identification", "Hazard classifications, signal words, hazard and precautionary statements, pictograms, and supplemental hazard information."],
      ["3. Composition / Ingredients", "Chemical identities, synonyms, concentrations, concentration ranges, CAS information, and related technical data."],
      ["4. First-Aid Measures", "Exposure-specific first-aid instructions and the intended medical or emergency guidance."],
    ],
  },
  {
    range: "05–08",
    title: "Emergency Response, Handling & Exposure Control",
    items: [
      ["5. Fire-Fighting Measures", "Extinguishing media, specific hazards, combustion products, and protective measures for firefighters."],
      ["6. Accidental Release Measures", "Spill procedures, personal precautions, containment methods, and environmental precautions."],
      ["7. Handling and Storage", "Safe handling procedures, incompatibilities, storage conditions, temperatures, and precautions."],
      ["8. Exposure Controls / PPE", "Exposure limits, engineering controls, respiratory protection, gloves, eye protection, and other PPE requirements."],
    ],
  },
  {
    range: "09–12",
    title: "Properties, Reactivity, Toxicology & Ecology",
    items: [
      ["9. Physical and Chemical Properties", "pH, flash point, vapor pressure, density, solubility, viscosity, and other technical values."],
      ["10. Stability and Reactivity", "Chemical stability, hazardous reactions, incompatible materials, and decomposition products."],
      ["11. Toxicological Information", "Routes of exposure, acute and chronic effects, symptoms, toxicity, sensitization, and other health information."],
      ["12. Ecological Information", "Ecotoxicity, persistence, degradation, bioaccumulation, mobility, and environmental information."],
    ],
  },
  {
    range: "13–16",
    title: "Disposal, Transport, Regulations & Document Control",
    items: [
      ["13. Disposal Considerations", "Waste treatment and disposal information translated consistently with the approved source."],
      ["14. Transport Information", "UN numbers, proper shipping names, hazard classes, packing groups, and transport terminology."],
      ["15. Regulatory Information", "Regulatory references and safety, health, or environmental information preserved without unintended interpretation."],
      ["16. Other Information", "Revision dates, change histories, abbreviations, references, and document provenance."],
    ],
  },
];

const services = [
  ["Safety Data Sheet Translation", "Complete multilingual translation of SDS documents for manufacturers, importers, exporters, industrial suppliers, laboratories, and global product companies.", "document"],
  ["MSDS Translation & Legacy Updates", "Translation and updating of legacy Material Safety Data Sheet content while preserving approved terminology and supporting migration into modern SDS workflows.", "refresh"],
  ["Multilingual SDS Formatting & DTP", "Professional layout of tables, section headings, technical values, warnings, lists, symbols, headers, and language-expanded content.", "layers"],
  ["Extended SDS & Exposure Scenarios", "Translation of extended Safety Data Sheets, exposure scenarios, risk-management information, annexes, and related technical content.", "globe"],
  ["SDS Revision & Update Translation", "Reuse approved translation assets, focus on changed content, and maintain consistency as formulations, product data, or source SDSs evolve.", "refresh"],
  ["SDS & Labeling Consistency", "Align shared product identifiers, signal words, hazard statements, precautionary statements, and safety terminology across SDSs, labels, and packaging.", "label"],
];

const accuracyItems = [
  "Chemical and substance names",
  "Mixture and formulation terminology",
  "CAS and EC identifiers",
  "Concentrations and concentration ranges",
  "Hazard classes and categories",
  "Signal words and hazard statements",
  "Precautionary statements",
  "Exposure limits",
  "Units, measurements, and temperatures",
  "Personal protective equipment terminology",
  "First-aid and fire-fighting instructions",
  "Toxicological and ecological information",
  "Storage requirements",
  "Transport classifications and UN numbers",
  "Emergency information",
  "Revision dates and version information",
];

const industries = [
  ["Industrial & Specialty Chemicals", "Solvents, intermediates, additives, catalysts, reagents, processing chemicals, and specialty formulations.", "https://www.stepes.com/chemical-translation-services/", "Chemical Translation Services"],
  ["Petrochemicals, Energy & Oil and Gas", "Fuels, lubricants, process chemicals, drilling products, refinery chemicals, treatment products, and specialty fluids."],
  ["Polymers, Plastics & Composites", "Resins, monomers, additives, plasticizers, colorants, masterbatches, adhesives, coatings, and engineered materials.", "https://www.stepes.com/plastics-translation-services/", "Plastics Translation Services"],
  ["Paints, Coatings, Adhesives & Sealants", "Paints, inks, protective coatings, surface treatments, adhesives, sealants, resins, and curing agents."],
  ["Pharmaceutical, Biotech & Laboratory Chemicals", "Reagents, compounds, solvents, cleaning chemicals, laboratory materials, and manufacturing inputs used across research and production.", "https://www.stepes.com/biotechnology-translation-services/", "Biotechnology Translation Services"],
  ["Agrochemicals, Pesticides & Fertilizers", "Fertilizers, pesticides, herbicides, fungicides, crop-protection products, adjuvants, and agricultural formulations."],
  ["Automotive & Electric Vehicles", "Coatings, adhesives, lubricants, coolants, cleaners, battery materials, production fluids, and specialty compounds.", "https://www.stepes.com/automotive-translation-services/", "Automotive Translation Services"],
  ["Batteries & Energy Storage", "Electrolytes, cathode and anode materials, solvents, binders, additives, and other battery manufacturing materials."],
  ["Electronics & Semiconductor Manufacturing", "Process chemicals, gases, solvents, photoresists, cleaning agents, etchants, and other specialized materials.", "https://www.stepes.com/electronics-translation-services/", "Electronics Translation Services"],
  ["Manufacturing & Industrial Operations", "Lubricants, machining fluids, cleaners, coatings, coolants, solvents, adhesives, and hazardous workplace materials.", "https://www.stepes.com/manufacturing-translation-services/", "Manufacturing Translation Services"],
  ["Cleaning & Consumer Chemical Products", "Industrial cleaners, maintenance chemicals, detergents, disinfecting products, and household chemical formulations."],
  ["Cosmetics & Personal Care Ingredients", "Fragrances, preservatives, solvents, surfactants, colorants, active ingredients, and formulation raw materials."],
  ["Construction Chemicals", "Adhesives, sealants, coatings, resins, concrete additives, waterproofing products, insulation chemicals, and specialty compounds."],
  ["Advanced Materials", "Nanomaterials, engineered compounds, composites, specialty polymers, electronic materials, and high-performance coatings.", "https://www.stepes.com/materials-science-translation-services/", "Materials Science Translation Services"],
];

const marketRequirements = [
  ["United States", "English SDS information is required under OSHA, while employers may maintain additional-language copies to support multilingual hazard communication."],
  ["Canada", "WHMIS requires SDS information in both English and French, creating a defined bilingual documentation requirement for suppliers."],
  ["European Union / EEA", "SDSs may need to be supplied in an official language of the recipient market, creating significant multilingual requirements across Europe."],
  ["Asia-Pacific", "China, Japan, South Korea, Taiwan, Australia, Southeast Asia, and other markets implement hazard communication through national systems and language requirements."],
  ["Latin America", "International suppliers may need Spanish or Portuguese SDS documentation aligned with the requirements of specific destination markets."],
];

const techFeatures = [
  ["AI-Enabled Translation Workflows", "Support content analysis, terminology recognition, repetitive-content handling, initial translation workflows, and automated quality checks."],
  ["Translation Memory", "Reuse previously approved multilingual content when identical or similar source language appears across product families and revisions."],
  ["Controlled Terminology", "Maintain approved chemical, hazard, PPE, manufacturing, and company-specific terminology consistently across documents."],
  ["Automated Quality Assurance", "Flag potential issues involving numbers, units, terminology, omissions, inconsistencies, punctuation, and formatting."],
  ["Professional Human Review", "Evaluate technical meaning, context, terminology, ambiguity, fluency, and safety-critical instructions before delivery."],
];

const enterpriseItems = [
  ["Centralized Terminology", "Maintain approved chemical, technical, and company-specific terminology across product families, languages, business units, and markets."],
  ["Translation Memory Reuse", "Leverage approved content across related documents and revisions instead of translating recurring SDS text from scratch."],
  ["Revision Management", "Keep multilingual versions synchronized as source SDSs change and focus translation effort on revised content where appropriate."],
  ["Version Control", "Maintain clearer alignment among source versions, translated files, regional variants, labels, packaging, and related technical documentation."],
  ["Portfolio-Wide Consistency", "Use shared language assets to keep recurring chemical and hazard communication consistent across hundreds or thousands of documents."],
  ["Translation Program Visibility", "Centralize multilingual requests, workflow status, language assets, project activity, and reporting for global content teams."],
];

const workflow = [
  ["Source Assessment", "Review source documents, target languages, markets, versions, file formats, existing glossaries, and formatting requirements."],
  ["Terminology Preparation", "Identify chemical, technical, regulatory, and customer-specific terminology and prepare reusable language assets."],
  ["Translation & Localization", "Assign professional linguists based on language pair and subject-matter expertise, supported by translation technology."],
  ["Chemical & Linguistic Review", "Review terminology, accuracy, context, consistency, readability, and safety-critical meaning."],
  ["Automated Quality Assurance", "Check numbers, units, terminology, omissions, recurring content, punctuation, and formatting patterns."],
  ["Layout & In-Context QA", "Verify section structure, tables, lists, symbols, values, language expansion, and overall document readability."],
  ["Delivery & Asset Retention", "Deliver final files and retain approved translation memory and terminology for future revisions and related content."],
];

const qualityItems = [
  ["Subject-Matter Linguists", "Professionals selected for language expertise and relevant experience in chemistry, materials, manufacturing, pharmaceuticals, energy, electronics, automotive, environmental science, or related fields."],
  ["Terminology Control", "Approved multilingual terms can be captured and reused across SDSs, labels, technical documents, and future revisions."],
  ["Structured Review", "Translation and review depth can be configured according to project complexity, content risk, customer requirements, and workflow needs."],
  ["Data-Focused QA", "Quality checks address numerical values, identifiers, units, abbreviations, terminology, and structured content as well as linguistic quality."],
  ["Traceable Translation Assets", "Translation memories and terminology resources create continuity across projects and product revisions."],
  ["Secure Enterprise Workflows", "Controlled professional translation workflows support organizations handling confidential technical and business information."],
];

const connectedDocs = [
  ["Chemical Translation Services", "https://www.stepes.com/chemical-translation-services/"],
  ["Labeling Translation Services", "https://www.stepes.com/labeling-translation-services/"],
  ["Technical Translation Services", "https://www.stepes.com/technical-translation-services/"],
  ["Datasheet Translation Services", "https://www.stepes.com/datasheet-translation-services/"],
  ["Safety Document Translation Services", "https://www.stepes.com/safety-document-translation-services/"],
  ["Manufacturing Translation Services", "https://www.stepes.com/manufacturing-translation-services/"],
];

const resources = [
  ["SDS vs. MSDS: What's the Difference?", "Why the industry moved from Material Safety Data Sheets to the standardized SDS format, what changed, and why MSDS remains a common purchasing term.", "https://www.stepes.com/resources/translation-guides/sds-vs-msds-whats-the-difference/", "Read the SDS vs. MSDS Guide"],
  ["SDS Language Requirements by Country", "How SDS language obligations differ among major chemical markets and what global suppliers should consider when planning multilingual programs.", "https://www.stepes.com/resources/translation-guides/sds-language-requirements-by-country/", "Explore SDS Language Requirements"],
  ["GHS Safety Data Sheet Translation Guide", "How GHS influences hazard communication, SDS structure, standardized terminology, and multilingual chemical documentation.", "https://www.stepes.com/resources/translation-guides/ghs-safety-data-sheet-translation-guide/", "Read the GHS Translation Guide"],
  ["OSHA HazCom SDS Translation Guide", "How OSHA's Hazard Communication Standard applies to U.S. Safety Data Sheets and multilingual workplace communication.", "https://www.stepes.com/resources/translation-guides/osha-hazcom-sds-translation-guide/", "Read the OSHA HazCom Guide"],
  ["REACH and CLP SDS Translation Guide", "The relationship between Safety Data Sheets, REACH, CLP, European language requirements, and multilingual chemical communication.", "https://www.stepes.com/resources/translation-guides/reach-clp-sds-translation-guide/", "Read the REACH & CLP Guide"],
  ["How to Prepare Safety Data Sheets for Translation", "Improve translation quality, turnaround, terminology consistency, and document control before localization begins.", "https://www.stepes.com/resources/translation-guides/how-to-prepare-safety-data-sheets-for-translation/", "Prepare SDS Files for Translation"],
  ["SDS Translation Quality Checklist", "A practical checklist for terminology, numbers, units, hazard language, formatting, version control, and multilingual QA.", "https://www.stepes.com/resources/translation-guides/sds-translation-quality-checklist/", "View the SDS Quality Checklist"],
];

const faqs = [
  ["What is SDS translation?", "SDS translation is the professional translation of a Safety Data Sheet from one language into another while preserving the technical meaning, chemical terminology, numerical data, hazard information, document structure, and safety instructions of the source. High-quality SDS translation typically requires specialized linguists, terminology management, quality assurance, and careful handling of structured technical content."],
  ["What is the difference between an SDS and an MSDS?", "MSDS stands for Material Safety Data Sheet, while SDS stands for Safety Data Sheet. MSDS was widely used under earlier hazard communication systems. SDS became the standardized term associated with GHS-based hazard communication and the harmonized 16-section format. Because many companies still use the older terminology, Stepes supports both SDS translation and MSDS translation requests."],
  ["Do Safety Data Sheets need to be translated?", "Language requirements depend on the market and applicable regulations. Canada requires SDS information in English and French, European requirements can involve an official language of the recipient market, and the United States requires English SDS information while allowing employers to maintain additional-language copies. Companies should determine the applicable requirements for each product and destination market as part of their regulatory process."],
  ["Which languages are required for Safety Data Sheets?", "There is no single global list. Requirements depend on the country or region where the chemical is supplied, applicable hazard communication regulations, official languages, and the company's role in the supply chain. Stepes supports SDS translation in over 100 languages and can work with your regulatory team to execute the language requirements identified for your markets."],
  ["Does GHS require the exact same SDS in every country?", "No. GHS provides a globally harmonized framework, but individual jurisdictions implement it through their own laws and regulations and may adopt different revisions or market-specific requirements. One translated SDS should not automatically be assumed to satisfy every international market."],
  ["What is the difference between SDS translation and regulatory adaptation?", "SDS translation focuses on accurately rendering approved source content into another language. Regulatory adaptation may involve additional market-specific decisions concerning classifications, mandatory information, standardized phrases, formatting, local references, or other requirements. Stepes defines project scope clearly and can work with customers' regulatory teams or designated specialists when regulatory decisions fall outside the translation scope."],
  ["Can AI be used to translate Safety Data Sheets?", "AI can support content analysis, repetitive text, terminology recognition, translation reuse, initial translation, quality checks, and workflow automation. Because SDSs contain technical terminology, structured data, hazard communication, and safety-critical instructions, Stepes combines AI-enabled technology with professional human translation and review appropriate to the quality and risk requirements of the project."],
  ["How do you maintain consistent chemical terminology across SDS translations?", "Stepes uses terminology management and translation memory to capture approved multilingual terms and previously translated content. These assets help linguists and reviewers maintain consistent terminology across related SDSs, product families, labels, technical documents, and future revisions."],
  ["Can Stepes translate large SDS portfolios into multiple languages?", "Yes. Stepes supports enterprise programs involving large document volumes, multiple languages, recurring revisions, and ongoing multilingual requirements. Our solutions combine centralized workflows, translation memory, terminology management, professional linguists, automated QA, and enterprise translation technologies."],
  ["How are SDS revisions and updates handled?", "When a source SDS changes, Stepes can compare new content against existing translation assets, reuse approved translations where appropriate, translate revised content, and maintain terminology consistency across versions. This can be significantly more efficient than retranslating every document from scratch."],
  ["Can Stepes translate extended Safety Data Sheets and exposure scenarios?", "Yes. Stepes supports translation of extended Safety Data Sheets, exposure scenarios, risk-management information, annexes, and related technical content for customers managing European and international chemical documentation."],
];

function FAQItem({ question, answer, open, onToggle }) {
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={onToggle} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-icon"><Icon name={open ? "minus" : "plus"} size={20}/></span>
      </button>
      {open ? <div className="faq-answer"><p>{answer}</p></div> : null}
    </div>
  );
}

export default function SDSPageWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sds-page">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --burgundy: #7A1542;
          --blush: #FDF2F7;
          --light-pink: #F2A7C6;
          --ink: #231E21;
          --text: #4B4448;
          --muted: #716A6E;
          --line: #E5E0E2;
          --soft: #F8F6F7;
          --panel: #FCFBFB;
          --dark: #1D181B;
          --dark-2: #282126;
          --radius-lg: 30px;
          --radius-md: 22px;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          color: var(--ink);
          background: #fff;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .sds-page { overflow-x: clip; background: #fff; color: var(--ink); }
        .sds-page a { color: inherit; }
        .container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        .section-soft { background: var(--soft); }
        .section-blush { background: linear-gradient(180deg, #fff 0%, var(--blush) 100%); }
        .section-dark { background: var(--dark); color: #fff; }
        .eyebrow { color: var(--magenta); font-size: 11px; line-height: 1.3; font-weight: 600; letter-spacing: .14em; text-transform: uppercase; margin-bottom: 14px; }
        .eyebrow-dark { color: var(--light-pink); }
        h1, h2, h3, h4, p { margin-top: 0; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 22px; max-width: 720px; }
        h2 { font-size: 36px; line-height: 1.14; margin-bottom: 18px; }
        h3 { font-size: 24px; line-height: 1.22; margin-bottom: 12px; }
        h4 { font-size: 17px; line-height: 1.3; font-weight: 600; margin-bottom: 7px; }
        p { color: var(--text); font-size: 16px; line-height: 1.72; }
        .body-large { font-size: 18px; line-height: 1.7; }
        .heading-group { max-width: 820px; margin-bottom: 46px; }
        .heading-center { text-align: center; margin-left: auto; margin-right: auto; }
        .heading-left { text-align: left; }
        .heading-dark h2 { color: #fff; }
        .heading-dark .section-intro { color: #D6CFD3; }
        .section-intro { font-size: 18px; line-height: 1.66; max-width: 800px; margin: 0 auto; color: var(--text); }
        .heading-left .section-intro { margin-left: 0; }
        .editorial-link { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--magenta) !important; text-decoration: none; font-weight: 600; font-size: 16px; }
        .editorial-link svg { transition: transform .18s ease; }
        .editorial-link:hover svg, .editorial-link:focus-visible svg { transform: translateX(3px); }
        .editorial-link:hover span, .editorial-link:focus-visible span { text-decoration: underline; text-underline-offset: 4px; }
        .btn { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 50px; padding: 0 22px; border-radius: 999px; font-size: 16px; font-weight: 600; text-decoration: none; transition: transform .18s ease, background .18s ease, box-shadow .18s ease; }
        .btn-primary, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .btn-primary span, .btn-primary svg, .btn-primary svg * { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover, .btn-primary:focus-visible { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193,29,99,.18); }
        .btn-secondary { background: #fff; border: 1px solid #D8D1D4; color: var(--ink) !important; }
        .btn-secondary:hover, .btn-secondary:focus-visible { border-color: #B7ADB2; transform: translateY(-1px); }
        a:focus-visible, button:focus-visible { outline: 3px solid rgba(193,29,99,.25); outline-offset: 3px; }
        .hero { padding: 102px 0 78px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, .96fr) minmax(480px, .9fr); align-items: center; gap: 66px; }
        .hero-copy { max-width: 720px; }
        .hero-copy .body-large { max-width: 680px; margin-bottom: 28px; }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }
        .hero-micro { margin-top: 22px; display: flex; align-items: center; gap: 10px; color: var(--muted); font-size: 16px; }
        .hero-micro svg { color: var(--magenta); flex: 0 0 auto; }
        .hero-art { width: 100%; min-height: 430px; display: grid; place-items: center; border-radius: var(--radius-lg); background: linear-gradient(135deg, #FCFBFB 0%, #fff 57%, #FDF2F7 100%); border: 1px solid #ECE7E9; overflow: hidden; }
        .hero-art svg { display: block; width: 100%; height: auto; }
        .trust-strip { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 30px; padding: 30px 0; }
        .trust-item { display: grid; grid-template-columns: 38px 1fr; gap: 13px; align-items: start; }
        .trust-icon { width: 38px; height: 38px; border-radius: 12px; display: grid; place-items: center; color: var(--magenta); background: var(--blush); }
        .trust-item h3 { font-size: 17px; margin: 1px 0 4px; letter-spacing: -.01em; }
        .trust-item p { font-size: 16px; line-height: 1.45; color: var(--muted); margin: 0; }
        .editorial-split { display: grid; grid-template-columns: .78fr 1.22fr; gap: 82px; align-items: start; }
        .sticky-copy { position: sticky; top: 32px; }
        .sticky-copy h2 { max-width: 480px; }
        .sticky-copy p { max-width: 520px; }
        .marker-list { border-top: 1px solid var(--line); }
        .marker-row { display: grid; grid-template-columns: 18px 1fr; gap: 16px; padding: 22px 0; border-bottom: 1px solid var(--line); }
        .marker { width: 8px; height: 8px; border-radius: 50%; background: var(--magenta); margin-top: 9px; }
        .marker-row h3 { font-size: 20px; margin-bottom: 7px; }
        .marker-row p { margin-bottom: 0; }
        .scope-band { background: var(--soft); }
        .scope-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .scope-item { padding: 34px; }
        .scope-item + .scope-item { border-left: 1px solid var(--line); }
        .scope-item h3 { font-size: 22px; }
        .scope-item p { margin: 0; }
        .scope-kicker { display: inline-flex; align-items: center; gap: 8px; color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 18px; }
        .scope-kicker span { width: 7px; height: 7px; border-radius: 50%; background: var(--magenta); }
        .reg-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 52px; border-top: 1px solid var(--line); }
        .reg-item { padding: 28px 0 30px; border-bottom: 1px solid var(--line); }
        .reg-tag { color: var(--magenta); font-size: 14px; font-weight: 600; margin-bottom: 9px; }
        .reg-item h3 { font-size: 22px; }
        .reg-item p { margin-bottom: 0; }
        .reg-item.reg-wide { grid-column: 1 / -1; display: grid; grid-template-columns: .68fr 1.32fr; gap: 52px; }
        .reg-item.reg-wide .reg-tag { margin-top: 4px; }
        .reg-callout { margin-top: 36px; border-radius: var(--radius-md); background: var(--blush); padding: 24px 28px; display: grid; grid-template-columns: auto 1fr; gap: 18px; align-items: start; }
        .reg-callout-icon { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 14px; background: #fff; color: var(--magenta); }
        .reg-callout h3 { font-size: 19px; margin-bottom: 5px; }
        .reg-callout p { margin: 0; }
        .sds-groups { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 24px; }
        .sds-group { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 32px; background: #fff; }
        .sds-group-top { display: flex; align-items: flex-start; justify-content: space-between; gap: 22px; padding-bottom: 22px; border-bottom: 1px solid var(--line); }
        .sds-group-range { font-size: 13px; color: var(--magenta); font-weight: 600; letter-spacing: .08em; }
        .sds-group h3 { font-size: 22px; max-width: 410px; margin-bottom: 0; }
        .sds-list { margin-top: 4px; }
        .sds-row { padding: 18px 0; border-bottom: 1px solid var(--line); }
        .sds-row:last-child { border-bottom: 0; padding-bottom: 0; }
        .sds-row h4 { margin-bottom: 5px; }
        .sds-row p { margin-bottom: 0; line-height: 1.58; }
        .principle { margin-top: 36px; display: flex; justify-content: center; }
        .principle-inner { border-top: 2px solid var(--magenta); padding-top: 16px; font-size: 20px; font-weight: 600; text-align: center; }
        .services-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 54px; border-top: 1px solid var(--line); }
        .service-row { display: grid; grid-template-columns: 46px 1fr; gap: 18px; padding: 27px 0; border-bottom: 1px solid var(--line); }
        .service-icon { width: 44px; height: 44px; display: grid; place-items: center; border-radius: 14px; color: var(--magenta); background: var(--blush); }
        .service-row h3 { font-size: 20px; }
        .service-row p { margin: 0; }
        .accuracy-wrap { display: grid; grid-template-columns: .72fr 1.28fr; gap: 72px; align-items: start; }
        .accuracy-callout { padding: 34px; border-radius: var(--radius-lg); background: var(--ink); color: #fff; position: sticky; top: 32px; }
        .accuracy-callout .eyebrow { color: var(--light-pink); }
        .accuracy-callout h2 { color: #fff; }
        .accuracy-callout p { color: #D9D2D6; }
        .accuracy-statement { margin-top: 26px; padding-top: 20px; border-top: 2px solid var(--magenta); font-size: 20px; line-height: 1.45; font-weight: 600; }
        .accuracy-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 26px; border-top: 1px solid var(--line); }
        .accuracy-item { min-height: 68px; padding: 20px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 20px 1fr; gap: 12px; align-items: start; font-size: 16px; line-height: 1.55; }
        .accuracy-item svg { color: var(--magenta); margin-top: 2px; }
        .industry-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 56px; border-top: 1px solid var(--line); }
        .industry-row { padding: 26px 0; border-bottom: 1px solid var(--line); }
        .industry-row h3 { font-size: 20px; margin-bottom: 8px; }
        .industry-row p { margin-bottom: 8px; }
        .market-layout { display: grid; grid-template-columns: .78fr 1.22fr; gap: 74px; align-items: start; }
        .market-intro h2 { max-width: 470px; }
        .market-intro .body-large { max-width: 510px; }
        .market-list { border-top: 1px solid var(--line); }
        .market-row { display: grid; grid-template-columns: 180px 1fr; gap: 26px; padding: 24px 0; border-bottom: 1px solid var(--line); }
        .market-row h3 { font-size: 18px; margin: 1px 0 0; }
        .market-row p { margin: 0; }
        .market-cta { margin-top: 30px; padding: 24px 26px; background: #fff; border: 1px solid var(--line); border-radius: var(--radius-md); }
        .market-cta p { margin-bottom: 7px; }
        .tech-layout { display: grid; grid-template-columns: .9fr 1.1fr; gap: 70px; align-items: center; }
        .tech-copy h2 { max-width: 560px; color: #fff; }
        .tech-copy > p { color: #D7D0D4; max-width: 580px; }
        .tech-links { display: flex; flex-wrap: wrap; gap: 24px; margin-top: 20px; }
        .tech-links .editorial-link { color: var(--light-pink) !important; }
        .tech-panel { border: 1px solid #453840; border-radius: var(--radius-lg); background: var(--dark-2); overflow: hidden; box-shadow: 0 22px 70px rgba(0,0,0,.16); }
        .tech-panel-header { padding: 18px 22px; border-bottom: 1px solid #443740; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
        .tech-panel-title { font-size: 15px; font-weight: 600; color: #fff; }
        .tech-panel-status { font-size: 13px; color: #D7D0D4; display: inline-flex; align-items: center; gap: 8px; }
        .status-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--light-pink); }
        .tech-panel-body { padding: 10px 24px 22px; }
        .tech-row { display: grid; grid-template-columns: 38px 1fr; gap: 14px; padding: 18px 0; border-bottom: 1px solid #40343B; }
        .tech-row:last-child { border-bottom: 0; }
        .tech-row-icon { width: 36px; height: 36px; border-radius: 12px; display: grid; place-items: center; background: #342A30; color: var(--light-pink); }
        .tech-row h3 { font-size: 17px; color: #fff; margin: 0 0 4px; letter-spacing: -.01em; }
        .tech-row p { font-size: 16px; line-height: 1.55; color: #CFC7CB; margin: 0; }
        .tech-footer-note { margin-top: 22px; padding-top: 18px; border-top: 2px solid var(--magenta); color: #fff; font-size: 17px; line-height: 1.55; font-weight: 600; }
        .enterprise-top { display: grid; grid-template-columns: .78fr 1.22fr; gap: 74px; align-items: end; margin-bottom: 46px; }
        .enterprise-top .heading-group { margin: 0; }
        .enterprise-top .body-large { margin: 0; max-width: 640px; }
        .enterprise-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .enterprise-item { padding: 30px; min-height: 236px; }
        .enterprise-item:nth-child(1), .enterprise-item:nth-child(2), .enterprise-item:nth-child(4), .enterprise-item:nth-child(5) { border-right: 1px solid var(--line); }
        .enterprise-item:nth-child(-n+3) { border-bottom: 1px solid var(--line); }
        .enterprise-item h3 { font-size: 20px; }
        .enterprise-item p { margin-bottom: 0; }
        .enterprise-links { display: flex; flex-wrap: wrap; justify-content: center; gap: 26px; margin-top: 34px; }
        .workflow-shell { border-top: 1px solid var(--line); }
        .workflow-row { display: grid; grid-template-columns: 78px 290px 1fr; gap: 28px; padding: 25px 0; border-bottom: 1px solid var(--line); align-items: start; }
        .workflow-num { font-size: 20px; font-weight: 600; color: var(--magenta); padding-top: 1px; }
        .workflow-row h3 { font-size: 20px; margin: 0; }
        .workflow-row p { margin: 0; }
        .quality-layout { display: grid; grid-template-columns: .76fr 1.24fr; gap: 74px; align-items: start; }
        .quality-heading { position: sticky; top: 32px; }
        .quality-heading h2 { max-width: 470px; }
        .quality-list { border-top: 1px solid var(--line); }
        .quality-row { padding: 24px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 220px 1fr; gap: 30px; }
        .quality-row h3 { font-size: 18px; margin: 0; }
        .quality-row p { margin: 0; }
        .quality-note { margin-top: 28px; padding: 22px 24px; border-left: 3px solid var(--magenta); background: var(--blush); border-radius: 0 18px 18px 0; }
        .quality-note p { margin: 0; }
        .connected-layout { display: grid; grid-template-columns: 1fr .92fr; gap: 74px; align-items: center; }
        .connected-copy h2 { max-width: 600px; }
        .doc-cloud { border: 1px solid var(--line); border-radius: var(--radius-lg); padding: 28px; background: #fff; }
        .doc-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 22px; }
        .doc-item { padding: 16px 0; border-bottom: 1px solid var(--line); display: grid; grid-template-columns: 18px 1fr; gap: 10px; align-items: start; font-size: 16px; }
        .doc-item .marker { margin-top: 8px; width: 6px; height: 6px; }
        .connected-links { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 8px 24px; }
        .language-panel { border: 1px solid var(--line); border-radius: var(--radius-lg); overflow: hidden; background: #fff; }
        .language-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); }
        .language-col { padding: 30px; }
        .language-col + .language-col { border-left: 1px solid var(--line); }
        .language-col h3 { font-size: 19px; }
        .language-col p { margin: 0; }
        .language-footer { padding: 22px 28px; border-top: 1px solid var(--line); background: var(--soft); display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .language-footer p { margin: 0; }
        .why-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 22px; }
        .why-item { padding: 26px 0; border-top: 2px solid #D8D1D4; }
        .why-item h3 { font-size: 20px; }
        .why-item p { margin: 0; }
        .resources-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0 50px; border-top: 1px solid var(--line); }
        .resource-row { padding: 26px 0; border-bottom: 1px solid var(--line); }
        .resource-row h3 { font-size: 20px; margin-bottom: 8px; }
        .resource-row p { margin-bottom: 9px; }
        .resources-footer { display: flex; justify-content: center; margin-top: 28px; }
        .faq-wrap { max-width: 980px; margin: 0 auto; border-top: 1px solid var(--line); }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-question { width: 100%; min-height: 72px; padding: 20px 0; background: transparent; border: 0; color: var(--ink); display: flex; justify-content: space-between; align-items: center; gap: 30px; text-align: left; font: inherit; font-size: 18px; line-height: 1.45; font-weight: 600; cursor: pointer; }
        .faq-icon { width: 34px; height: 34px; flex: 0 0 34px; display: grid; place-items: center; border-radius: 50%; background: var(--blush); color: var(--magenta); }
        .faq-answer { padding: 0 62px 24px 0; }
        .faq-answer p { margin: 0; max-width: 820px; }
        .final-cta { padding: 80px 0; background: var(--burgundy); color: #fff; }
        .cta-inner { display: grid; grid-template-columns: 1.16fr .84fr; align-items: center; gap: 60px; }
        .cta-inner h2 { color: #fff; max-width: 700px; margin-bottom: 16px; }
        .cta-inner p { color: #F4E8EE; font-size: 18px; max-width: 720px; margin-bottom: 0; }
        .cta-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 12px; }
        .final-cta .btn-primary, .final-cta .btn-primary:visited, .final-cta .btn-primary:hover, .final-cta .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .final-cta .btn-secondary { color: #fff !important; border-color: rgba(255,255,255,.45); background: rgba(255,255,255,.08); }
        .final-cta .btn-secondary:hover { background: rgba(255,255,255,.14); border-color: rgba(255,255,255,.7); }

        @media (max-width: 1199px) {
          .container { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: 1fr 1fr; gap: 46px; }
          .hero-art { min-height: 380px; }
          .trust-grid { gap: 20px; }
          .editorial-split, .accuracy-wrap, .market-layout, .enterprise-top, .quality-layout { gap: 52px; }
          .enterprise-grid { grid-template-columns: repeat(2, 1fr); }
          .enterprise-item { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; }
          .enterprise-item:nth-child(odd) { border-right: 1px solid var(--line) !important; }
          .enterprise-item:nth-last-child(-n+2) { border-bottom: 0 !important; }
          .language-grid { grid-template-columns: repeat(2, 1fr); }
          .language-col:nth-child(3) { border-left: 0; border-top: 1px solid var(--line); }
          .language-col:nth-child(4) { border-top: 1px solid var(--line); }
        }

        @media (max-width: 900px) {
          .container { width: calc(100% - 48px); }
          .section { padding: 82px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 88px 0 72px; }
          .hero-grid { grid-template-columns: 1fr; gap: 46px; }
          .hero-copy { max-width: 760px; text-align: center; margin: 0 auto; }
          .hero-copy h1, .hero-copy .body-large { margin-left: auto; margin-right: auto; }
          .hero-actions { justify-content: center; }
          .hero-micro { justify-content: center; }
          .hero-art { max-width: 720px; margin: 0 auto; min-height: 0; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); gap: 26px 36px; }
          .editorial-split, .accuracy-wrap, .market-layout, .enterprise-top, .quality-layout, .connected-layout, .tech-layout { grid-template-columns: 1fr; gap: 42px; }
          .sticky-copy, .accuracy-callout, .quality-heading { position: static; }
          .editorial-split > .sticky-copy, .market-intro, .connected-copy { text-align: center; }
          .editorial-split > .sticky-copy > p, .market-intro > .body-large, .connected-copy > .body-large { text-align: left; }
          .market-cta { text-align: left; }
          .quality-heading { text-align: left; }
          .editorial-split > .sticky-copy p, .market-intro .body-large, .quality-heading p, .connected-copy p { margin-left: auto; margin-right: auto; max-width: 760px; }
          .scope-grid { grid-template-columns: 1fr; }
          .scope-item + .scope-item { border-left: 0; border-top: 1px solid var(--line); }
          .reg-grid { grid-template-columns: 1fr; gap: 0; }
          .reg-item.reg-wide { grid-column: auto; grid-template-columns: 1fr; gap: 8px; }
          .sds-groups, .services-grid, .industry-grid, .resources-grid { grid-template-columns: 1fr; }
          .services-grid, .industry-grid, .resources-grid { gap: 0; }
          .accuracy-grid { grid-template-columns: repeat(2, 1fr); }
          .market-row { grid-template-columns: 150px 1fr; }
          .tech-copy { text-align: center; }
          .tech-copy h2, .tech-copy > p { margin-left: auto; margin-right: auto; }
          .tech-copy > p { text-align: left; }
          .tech-links { justify-content: center; }
          .enterprise-top { text-align: center; }
          .enterprise-top .heading-group { margin: 0 auto; text-align: center; }
          .enterprise-top .body-large { margin: 0 auto; text-align: left; }
          .workflow-row { grid-template-columns: 64px 230px 1fr; gap: 22px; }
          .connected-links { justify-content: center; }
          .why-grid { grid-template-columns: 1fr; }
          .accuracy-callout { max-width: 760px; margin-left: auto; margin-right: auto; }
          .cta-inner { grid-template-columns: 1fr; text-align: center; gap: 28px; }
          .cta-inner h2, .cta-inner p { margin-left: auto; margin-right: auto; }
          .cta-actions { justify-content: center; }
        }

        @media (max-width: 640px) {
          .container { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .section-dense { padding: 64px 0; }
          h1 { font-size: 38px; line-height: 1.1; }
          h2 { font-size: 30px; line-height: 1.16; }
          h3 { font-size: 20px; }
          p { font-size: 16px; }
          .body-large, .section-intro { font-size: 18px; }
          .heading-group { margin-bottom: 36px; }
          .heading-group:not(.mobile-left) { text-align: center; margin-left: auto; margin-right: auto; }
          .heading-group.mobile-left { text-align: left; margin-left: 0; margin-right: 0; }
          .hero { padding: 72px 0 58px; }
          .hero-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
          .btn { width: 100%; min-height: 52px; }
          .hero-micro { justify-content: center; text-align: center; max-width: 360px; margin-left: auto; margin-right: auto; }
          .hero-art { border-radius: 24px; }
          .trust-grid { grid-template-columns: 1fr; gap: 20px; }
          .trust-item { grid-template-columns: 40px 1fr; }
          .editorial-split > .sticky-copy, .market-intro, .connected-copy { text-align: center; }
          .quality-heading { text-align: left; }
          .marker-row { padding: 20px 0; }
          .scope-item { padding: 26px 24px; }
          .reg-grid { grid-template-columns: 1fr; }
          .reg-item.reg-wide { grid-column: auto; }
          .reg-callout { grid-template-columns: 1fr; }
          .reg-callout-icon { margin: 0 auto; }
          .reg-callout > div:last-child { text-align: left; }
          .sds-group { padding: 24px 20px; border-radius: 24px; }
          .sds-group-top { display: block; }
          .sds-group-range { margin-bottom: 8px; }
          .principle-inner { font-size: 18px; }
          .service-row { grid-template-columns: 42px 1fr; gap: 14px; }
          .accuracy-callout { padding: 28px 24px; text-align: left; }
          .accuracy-callout h2 { font-size: 30px; }
          .accuracy-grid { grid-template-columns: 1fr; }
          .industry-row { padding: 23px 0; }
          .market-row { grid-template-columns: 1fr; gap: 7px; }
          .market-row h3 { font-size: 20px; }
          .market-cta { padding: 22px 20px; }
          .tech-panel-body { padding-left: 18px; padding-right: 18px; }
          .tech-row { grid-template-columns: 36px 1fr; gap: 12px; }
          .enterprise-grid { grid-template-columns: 1fr; }
          .enterprise-item { border-right: 0 !important; border-bottom: 1px solid var(--line) !important; min-height: auto; padding: 26px 22px; }
          .enterprise-item:last-child { border-bottom: 0 !important; }
          .enterprise-links { align-items: flex-start; flex-direction: column; gap: 4px; }
          .workflow-row { grid-template-columns: 46px 1fr; gap: 14px; padding: 24px 0; }
          .workflow-row p { grid-column: 2; }
          .workflow-row h3 { font-size: 20px; }
          .quality-row { grid-template-columns: 1fr; gap: 7px; }
          .quality-note { padding: 20px; }
          .doc-list { grid-template-columns: 1fr; }
          .language-grid { grid-template-columns: 1fr; }
          .language-col, .language-col:nth-child(3), .language-col:nth-child(4) { border-left: 0; border-top: 1px solid var(--line); padding: 24px 22px; }
          .language-col:first-child { border-top: 0; }
          .language-footer { align-items: flex-start; flex-direction: column; padding: 22px; }
          .why-grid { grid-template-columns: 1fr; }
          .faq-question { align-items: flex-start; min-height: 68px; padding: 19px 0; font-size: 18px; }
          .faq-answer { padding-right: 0; }
          .final-cta { padding: 68px 0; }
          .cta-actions { display: grid; grid-template-columns: 1fr; width: 100%; }
        }

        @media (max-width: 360px) {
          .container { width: calc(100% - 40px); }
          h1 { font-size: 38px; }
          .hero-art svg { width: 110%; max-width: none; }
          .tech-panel-header { align-items: flex-start; flex-direction: column; }
        }
      `}</style>

      <section className="hero" id="top">
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>Chemical & Materials Localization</Eyebrow>
            <h1>SDS Translation Services for Global Chemical Compliance</h1>
            <p className="body-large">Translate Safety Data Sheets accurately across languages, markets, and product portfolios with specialized chemical linguists, controlled terminology, AI-enabled workflows, and professional human quality assurance.</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Request a Quote</span><Icon name="arrow" size={17}/></a>
              <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
            </div>
            <div className="hero-micro"><Icon name="check" size={18}/><span>Safety Data Sheets (SDS), formerly known as Material Safety Data Sheets (MSDS), translated in 100+ languages.</span></div>
          </div>
          <HeroArtwork/>
        </div>
      </section>

      <section className="trust-strip" aria-label="SDS translation capabilities">
        <div className="container trust-grid">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.title}>
              <div className="trust-icon"><Icon name={item.icon}/></div>
              <div><h3>{item.title}</h3><p>{item.text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="why-accuracy-matters">
        <div className="container editorial-split">
          <div className="sticky-copy">
            <h2>Safety Information Has No Room for Ambiguity</h2>
            <p className="body-large">Safety Data Sheets communicate information that workers, customers, distributors, emergency responders, transportation teams, environmental professionals, and regulatory stakeholders may rely on to handle chemical products safely.</p>
            <ArrowLink href="https://www.stepes.com/chemical-translation-services/">Chemical Translation Services</ArrowLink>
          </div>
          <div>
            <p>Unlike general business documents, SDSs combine technical language with structured hazard communication. A seemingly small translation error can change the meaning of a first-aid instruction, personal protective equipment requirement, storage condition, exposure limit, hazard statement, or emergency response procedure.</p>
            <div className="marker-list">
              <div className="marker-row"><span className="marker"/><div><h3>Chemical Subject-Matter Expertise</h3><p>Professional linguists experienced in chemistry, chemical engineering, materials science, manufacturing, life sciences, environmental science, and related technical fields help preserve the intended meaning of specialized content.</p></div></div>
              <div className="marker-row"><span className="marker"/><div><h3>Controlled Hazard Communication</h3><p>Hazard statements, precautionary language, emergency instructions, PPE terminology, and other safety-critical content require consistency across the complete document.</p></div></div>
              <div className="marker-row"><span className="marker"/><div><h3>Numerical and Document Integrity</h3><p>Identifiers, concentrations, units, temperatures, classifications, transport information, section structure, and revision data must remain intact throughout translation and formatting.</p></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section scope-band" id="sds-localization">
        <div className="container">
          <HeadingGroup eyebrow="Translation Scope" title="SDS Translation Is More Than Converting Words" intro="Global chemical companies use “SDS translation” to describe different needs—from faithful translation of an approved source document to market localization and ongoing enterprise portfolio management."/>
          <div className="scope-grid">
            {scopeLevels.map((item, index) => (
              <article className="scope-item" key={item.title}>
                <div className="scope-kicker"><span/>{index === 0 ? "Approved source" : index === 1 ? "Market language" : "Program scale"}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="global-regulations">
        <div className="container">
          <HeadingGroup eyebrow="Global Regulatory Context" title="Navigating SDS Requirements Across Global Markets" intro="GHS provides an international framework for hazard communication, but countries and regions implement chemical safety requirements through their own regulatory systems, adoption schedules, and language rules."/>
          <div className="reg-grid">
            {regulatoryRegions.map((item, index) => (
              <article className={`reg-item${index === regulatoryRegions.length - 1 ? " reg-wide" : ""}`} key={item.title}>
                <div className="reg-tag">{item.tag}</div>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <div className="reg-callout">
            <div className="reg-callout-icon"><Icon name="refresh"/></div>
            <div><h3>Regulations Evolve. Your Multilingual Content Needs to Evolve With Them.</h3><p>GHS revisions and regional frameworks do not move in lockstep. Stepes helps companies update translated language assets efficiently as source SDSs, product information, terminology, or market requirements change—without treating every revision as an entirely new project.</p></div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="16-sds-sections">
        <div className="container">
          <HeadingGroup title="Precision Across All 16 SDS Sections" intro="Every section presents different linguistic and technical risks. Stepes approaches the SDS as a structured safety document rather than a collection of unrelated sentences."/>
          <div className="sds-groups">
            {sdsGroups.map((group) => (
              <article className="sds-group" key={group.range}>
                <div className="sds-group-top"><div className="sds-group-range">SECTIONS {group.range}</div><h3>{group.title}</h3></div>
                <div className="sds-list">
                  {group.items.map(([title, text]) => <div className="sds-row" key={title}><h4>{title}</h4><p>{text}</p></div>)}
                </div>
              </article>
            ))}
          </div>
          <div className="principle"><div className="principle-inner">Translate the language. Preserve the data. Protect the meaning.</div></div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <HeadingGroup title="Complete SDS Translation and Localization Solutions" intro="Stepes supports the full multilingual lifecycle of Safety Data Sheets—from initial translation and formatting to exposure scenarios, document revisions, and cross-document terminology consistency."/>
          <div className="services-grid">
            {services.map(([title, text, icon]) => (
              <article className="service-row" key={title}>
                <div className="service-icon"><Icon name={icon}/></div>
                <div><h3>{title}</h3><p>{text}</p>{title === "SDS & Labeling Consistency" ? <ArrowLink href="https://www.stepes.com/labeling-translation-services/">Labeling Translation Services</ArrowLink> : null}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="data-level-accuracy">
        <div className="container accuracy-wrap">
          <div className="accuracy-callout">
            <h2>Chemical Translation Accuracy at the Data Level</h2>
            <p>High-quality SDS translation depends as much on what should not change as on the words that must be translated. Numerical strings, chemical identifiers, units, controlled phrases, and technical terminology require different quality controls from ordinary prose.</p>
            <div className="accuracy-statement">Translate language.<br/>Preserve data.</div>
          </div>
          <div className="accuracy-grid">
            {accuracyItems.map((item) => <div className="accuracy-item" key={item}><Icon name="check" size={18}/><span>{item}</span></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="industries">
        <div className="container">
          <HeadingGroup title="SDS Translation Across Chemical and Materials Industries" intro="Safety Data Sheets support global commerce across basic chemicals, advanced materials, manufacturing, life sciences, energy, electronics, automotive production, and rapidly growing technology sectors."/>
          <div className="industry-grid">
            {industries.map(([title, text, href, label]) => (
              <article className="industry-row" key={title}>
                <h3>{title}</h3><p>{text}</p>
                {href ? <ArrowLink href={href}>{label}</ArrowLink> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-blush" id="language-requirements">
        <div className="container market-layout">
          <div className="market-intro">
            <Eyebrow>Global Language Strategy</Eyebrow>
            <h2>Multilingual SDS Requirements for Global Markets</h2>
            <p className="body-large">A single English Safety Data Sheet is not sufficient for every international market. Language obligations depend on where products are supplied, how local regulations implement hazard communication, and which official languages apply.</p>
            <div className="market-cta"><p><strong>Need help planning a multilingual SDS program?</strong> Our team can help scope languages, file volumes, formats, and translation workflows around the markets identified by your regulatory team.</p><ArrowLink href="https://www.stepes.com/contact-us/">Talk to Our Chemical Translation Team</ArrowLink></div>
          </div>
          <div className="market-list">
            {marketRequirements.map(([title, text]) => <div className="market-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="ai-human-expertise">
        <div className="container tech-layout">
          <div className="tech-copy">
            <Eyebrow dark>AI + Human Expertise</Eyebrow>
            <h2>Technology for Scale. Human Expertise for Safety-Critical Content.</h2>
            <p className="body-large">AI is transforming professional translation through better content analysis, automation, terminology recognition, translation reuse, and quality checking. For Safety Data Sheets, the goal is not automation for its own sake—it is greater efficiency with the right level of expert control.</p>
            <div className="tech-links">
              <ArrowLink href="https://www.stepes.com/ai-machine-learning-translation-services/">AI & Machine Learning Translation</ArrowLink>
              <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
            </div>
            <div className="tech-footer-note">Automation manages scale and repetition. Experts protect meaning and safety.</div>
          </div>
          <div className="tech-panel" aria-label="SDS translation workflow">
            <div className="tech-panel-header"><div className="tech-panel-title">SDS Translation Workflow</div><div className="tech-panel-status"><span className="status-dot"/>Human-reviewed</div></div>
            <div className="tech-panel-body">
              {techFeatures.map(([title, text], index) => <div className="tech-row" key={title}><div className="tech-row-icon"><Icon name={["search","database","layers","shield","check"][index]}/></div><div><h3>{title}</h3><p>{text}</p></div></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="enterprise">
        <div className="container">
          <div className="enterprise-top">
            <HeadingGroup eyebrow="Enterprise SDS Programs" title="Scale SDS Translation Across Global Product Portfolios" align="left"/>
            <p className="body-large">For a company with one SDS, translation is a document project. For a multinational manufacturer with thousands of products, dozens of languages, and continuous revisions, it is a multilingual content operation.</p>
          </div>
          <div className="enterprise-grid">
            {enterpriseItems.map(([title, text]) => <article className="enterprise-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className="enterprise-links">
            <ArrowLink href="https://www.stepes.com/translation-management-portal/">Customer Translation Portal</ArrowLink>
            <ArrowLink href="https://www.stepes.com/translation-memory/">Translation Memory</ArrowLink>
            <ArrowLink href="https://www.stepes.com/translation-reporting-analytics/">Translation Reporting & Analytics</ArrowLink>
          </div>
        </div>
      </section>

      <section className="section" id="workflow">
        <div className="container">
          <HeadingGroup title="A Controlled Workflow From Source SDS to Multilingual Delivery" intro="A repeatable process protects terminology, data, structure, and context from beginning to end while creating reusable language assets for future updates." align="left" mobileLeft/>
          <div className="workflow-shell">
            {workflow.map(([title, text], index) => <div className="workflow-row" key={title}><div className="workflow-num">{String(index + 1).padStart(2,"0")}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="quality">
        <div className="container quality-layout">
          <div className="quality-heading">
            <Eyebrow>Quality & Governance</Eyebrow>
            <h2>Quality Processes Built for Regulated Content</h2>
            <p className="body-large">Stepes combines professional linguists, subject-matter expertise, ISO-certified quality processes, terminology management, translation memory, structured review, automated QA, and secure workflows for safety-critical multilingual content.</p>
            <ArrowLink href="https://www.stepes.com/iso-certified-translation-services/">ISO-Certified Translation Services</ArrowLink>
          </div>
          <div>
            <div className="quality-list">
              {qualityItems.map(([title, text]) => <div className="quality-row" key={title}><h3>{title}</h3><p>{text}</p></div>)}
            </div>
            <div className="quality-note"><p><strong>Translation supports regulatory compliance; it does not replace product classification, regulatory authoring, or legal responsibility.</strong> Stepes works with approved source documentation and can collaborate with your internal regulatory teams and designated specialists when market-specific regulatory decisions are required.</p></div>
          </div>
        </div>
      </section>

      <section className="section" id="connected-content">
        <div className="container connected-layout">
          <div className="connected-copy">
            <h2>Keep SDS, Labels, and Technical Documentation Aligned</h2>
            <p className="body-large">Safety Data Sheets rarely exist in isolation. Shared terminology and translation memories help ensure the same product, chemical, hazard, process, or safety instruction is communicated consistently wherever it appears.</p>
            <div className="connected-links">{connectedDocs.map(([label, href]) => <ArrowLink key={label} href={href}>{label}</ArrowLink>)}</div>
          </div>
          <div className="doc-cloud">
            <h3>One Multilingual Content Ecosystem</h3>
            <p>Maintain language consistency across related product safety, manufacturing, regulatory, and technical documentation.</p>
            <div className="doc-list">
              {["Safety Data Sheets","Chemical and product labels","Packaging and artwork","Technical Data Sheets","Product specifications","SOPs and work instructions","Handling and safety manuals","Environmental and regulatory documents","Transport documentation","Laboratory and manufacturing documentation"].map((item) => <div className="doc-item" key={item}><span className="marker"/><span>{item}</span></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft" id="languages">
        <div className="container">
          <HeadingGroup title="SDS Translation in 100+ Languages" intro="Stepes supports major commercial, manufacturing, scientific, and industrial languages through one centralized multilingual workflow."/>
          <div className="language-panel">
            <div className="language-grid">
              <div className="language-col"><h3>Europe</h3><p>German, French, Spanish, Italian, Portuguese, Dutch, Polish, Czech, Slovak, Romanian, Hungarian, Bulgarian, Croatian, Slovenian, Greek, Danish, Swedish, Norwegian, Finnish, Baltic languages, and more.</p></div>
              <div className="language-col"><h3>Asia-Pacific</h3><p>Simplified Chinese, Traditional Chinese, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Hindi, and other languages used across major manufacturing and chemical markets.</p></div>
              <div className="language-col"><h3>Americas</h3><p>Latin American Spanish, Brazilian Portuguese, Canadian French, U.S. Spanish, and additional languages for organizations operating throughout North and South America.</p></div>
              <div className="language-col"><h3>Middle East & Global Markets</h3><p>Arabic, Hebrew, Turkish, and additional languages supporting established and emerging international chemical and manufacturing markets.</p></div>
            </div>
            <div className="language-footer"><p>Coordinate large language sets with shared terminology, quality standards, and revision processes.</p><ArrowLink href="https://www.stepes.com/translation-languages/">Explore All Translation Languages</ArrowLink></div>
          </div>
        </div>
      </section>

      <section className="section" id="why-stepes">
        <div className="container">
          <HeadingGroup title="Built for High-Stakes Multilingual Technical Content" intro="Stepes brings the specialist language expertise, reusable translation assets, and enterprise delivery model needed to keep critical SDS content accurate and maintainable over time."/>
          <div className="why-grid">
            {[
              ["Specialized Chemical Expertise", "Professional linguists and reviewers bring the technical knowledge needed for chemical, materials, manufacturing, life sciences, energy, and other SDS-intensive content."],
              ["Governed Multilingual Reuse", "Translation memory, controlled terminology, revision management, and QA help preserve approved language across recurring documents and product families."],
              ["Global Delivery at Scale", "Coordinate 100+ languages, multi-market updates, formatted deliverables, and enterprise program visibility through one connected translation partner."],
            ].map(([title, text]) => <article className="why-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="resources">
        <div className="container">
          <HeadingGroup title="Practical Guides for Global SDS Programs" intro="Explore focused resources covering terminology, regulatory frameworks, language requirements, preparation, and quality practices behind multilingual Safety Data Sheets."/>
          <div className="resources-grid">
            {resources.map(([title, text, href, action]) => <article className="resource-row" key={title}><h3>{title}</h3><p>{text}</p><ArrowLink href={href}>{action}</ArrowLink></article>)}
          </div>
          <div className="resources-footer"><ArrowLink href="https://www.stepes.com/resources/translation-guides/">Explore All Translation Guides</ArrowLink></div>
        </div>
      </section>

      <section className="section" id="faq">
        <div className="container">
          <HeadingGroup title="Frequently Asked Questions About SDS Translation" align="left" mobileLeft/>
          <div className="faq-wrap">
            {faqs.map(([question, answer], index) => <FAQItem key={question} question={question} answer={answer} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)}/>)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container cta-inner">
          <div>
            <h2>Translate Your Safety Data Sheets With Confidence</h2>
            <p>Whether you need one Safety Data Sheet translated for a new market or an enterprise solution for thousands of multilingual SDSs, Stepes combines chemical expertise, modern translation technology, terminology management, and structured quality assurance to help you communicate critical safety information at global scale.</p>
          </div>
          <div className="cta-actions">
            <a className="btn btn-primary" href="https://app.stepes.com/quote/"><span>Request a Quote</span><Icon name="arrow" size={17}/></a>
            <a className="btn btn-secondary" href="https://www.stepes.com/contact-us/">Talk to an Expert</a>
          </div>
        </div>
      </section>
    </main>
  );
}
