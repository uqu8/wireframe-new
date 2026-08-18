// Sesen Biopharmaceutical & Biosimilar Translation Services Wireframe — v3
// Mobile, customer-facing content, internal-link, and eyebrow polish — 2026-08-16.
// Refined against Sesen Wireframe Generation Spec v1.2.

import React, { useState } from "react";

const lifecycle = [
  {
    n: "01",
    title: "Research & Product Development",
    text: "Scientific research, nonclinical studies, pharmacology, toxicology, product-development reports, and technical assessments.",
    href: "https://www.sesen.com/medical-scientific-translation-services/",
    link: "Medical & Scientific Translation Services",
  },
  {
    n: "02",
    title: "Analytical Characterization & Comparability",
    text: "Structural, physicochemical, biological, and functional characterization, analytical methods, critical quality attributes, and comparative assessments.",
  },
  {
    n: "03",
    title: "Clinical Development",
    text: "Protocols, Investigator Brochures, informed consent, patient materials, PK/PD, immunogenicity, clinical reports, and eClinical content.",
    href: "https://www.sesen.com/clinical-trial-translation-services/",
    link: "Clinical Trial Translation Services",
  },
  {
    n: "04",
    title: "CMC, Manufacturing & Quality",
    text: "CMC documentation, manufacturing procedures, analytical methods, specifications, validation, batch records, SOPs, and quality systems.",
    href: "https://www.sesen.com/cmc-document-translation-services/",
    link: "CMC Document Translation Services",
  },
  {
    n: "05",
    title: "Regulatory Submission & Health Authority Review",
    text: "BLAs, biosimilar applications, MAAs, CTD/eCTD content, briefing packages, agency correspondence, and post-approval submissions.",
    href: "https://www.sesen.com/regulatory-submission-translation-services/",
    link: "Regulatory Submission Translation Services",
  },
  {
    n: "06",
    title: "Labeling & Product Information",
    text: "Prescribing information, SmPCs, PILs, package inserts, Medication Guides, administration instructions, packaging, and labeling updates.",
    href: "https://www.sesen.com/labeling-translation-services/",
    link: "Labeling Translation Services",
  },
  {
    n: "07",
    title: "Pharmacovigilance & Post-Market Safety",
    text: "Adverse event content, safety narratives, aggregate reports, risk-management materials, safety communications, and labeling revisions.",
    href: "https://www.sesen.com/pharmacovigilance-translation-services/",
    link: "Pharmacovigilance Translation Services",
  },
  {
    n: "08",
    title: "Market Access & Lifecycle Management",
    text: "HTA and HEOR materials, payer communications, reimbursement content, medical affairs, HCP and patient education, launches, and ongoing updates.",
  },
];

const whyItems = [
  {
    title: "Scientific Complexity",
    text: "Proteins, monoclonal antibodies, recombinant products, immunological mechanisms, biological assays, biomarkers, and molecular characterization require precise scientific language and subject-matter alignment.",
  },
  {
    title: "Product & Process Interdependence",
    text: "Product characteristics and manufacturing processes are closely connected. Terminology for cell substrates, process conditions, quality attributes, analytical methods, specifications, impurities, potency, and stability must remain aligned.",
  },
  {
    title: "Cross-Document Regulatory Continuity",
    text: "The same technical concept can move from an analytical report into CMC documentation, a regulatory summary, a health authority response, product labeling, and later lifecycle updates.",
  },
  {
    title: "Global Stakeholder Complexity",
    text: "R&D, clinical, CMC, manufacturing, quality, regulatory, labeling, safety, medical affairs, market access, and local affiliate teams all depend on consistent multilingual content.",
  },
];

const innovator = [
  "Research and nonclinical documentation",
  "Product and analytical characterization",
  "Clinical development",
  "CMC and manufacturing",
  "Biologics License Application and MAA content",
  "Health authority communications",
  "Global labeling and pharmacovigilance",
  "Medical affairs, market access, and lifecycle updates",
];

const biosimilar = [
  "Reference-product documentation",
  "Comparative analytical assessments",
  "Structural and functional characterization",
  "Quality and CMC comparability",
  "Clinical pharmacology and PK/PD content",
  "Immunogenicity and clinical evidence where required",
  "Scientific justification and extrapolation",
  "351(k) BLA / biosimilar MAA content and lifecycle updates",
];

const comparability = [
  {
    n: "01",
    title: "Structural & Physicochemical Characterization",
    text: "Primary and higher-order structure, molecular characteristics, physicochemical properties, post-translational modifications, product variants, purity, impurities, and analytical characterization reports.",
  },
  {
    n: "02",
    title: "Functional & Biological Characterization",
    text: "Biological activity, potency, receptor binding, functional assays, mechanism-related attributes, and comparative biological assessments.",
  },
  {
    n: "03",
    title: "Quality & CMC Comparability",
    text: "Critical quality attributes, analytical methods, specifications, process information, control strategies, stability, product-quality comparisons, and manufacturing comparability content.",
  },
  {
    n: "04",
    title: "Clinical Pharmacology",
    text: "Pharmacokinetics, pharmacodynamics, exposure and response, PK/PD study documentation, and comparative clinical pharmacology reports and summaries.",
  },
  {
    n: "05",
    title: "Immunogenicity & Clinical Evidence",
    text: "Immunogenicity, safety, and clinical documentation aligned to the evidence needs of the individual development program, including comparative clinical evidence where required.",
  },
  {
    n: "06",
    title: "Scientific Justification & Extrapolation",
    text: "Mechanism-of-action considerations, indication-specific content, extrapolation rationale, regulatory summaries, health authority questions, and sponsor responses.",
  },
];

const cmcGroups = [
  {
    title: "Cell Line & Upstream Processing",
    text: "Cell substrates and cell banks, culture conditions, media and raw materials, fermentation and cell culture, upstream parameters, and process-development documentation.",
  },
  {
    title: "Downstream Processing",
    text: "Harvest and recovery, purification, chromatography, filtration, concentration, viral clearance or inactivation where applicable, and downstream process controls.",
  },
  {
    title: "Drug Substance & Drug Product",
    text: "Drug substance manufacture, formulation, filling and finishing, storage and handling, container-closure systems, and finished product documentation.",
  },
  {
    title: "Analytical Methods & Specifications",
    text: "Identity and potency assays, purity and impurity profiles, analytical procedures, method validation, release specifications, and stability testing and reports.",
  },
  {
    title: "Process Validation & Comparability",
    text: "Process characterization, process validation, scale-up, technology transfer, manufacturing changes, comparability assessments, and continued process verification.",
  },
  {
    title: "GMP & Quality Systems",
    text: "SOPs, master and batch records, manufacturing instructions, deviations, CAPAs, change controls, investigations, quality agreements, audits, and training.",
  },
];

const documentGroups = [
  {
    title: "Scientific & Development",
    items: [
      "Research and technical reports",
      "Nonclinical study content",
      "Pharmacology and toxicology documentation",
      "Product-development plans",
      "Scientific manuscripts and abstracts",
      "Investigator materials and technical assessments",
    ],
  },
  {
    title: "Analytical & Comparability",
    items: [
      "Analytical characterization reports",
      "Comparative analytical assessments",
      "Biosimilarity documentation",
      "Bioassay documentation",
      "Analytical procedures and method validation",
      "Comparability, stability, and product-quality reports",
    ],
  },
  {
    title: "Clinical",
    items: [
      "Clinical protocols and amendments",
      "Investigator Brochures",
      "Informed consent and patient materials",
      "Clinical pharmacology and PK/PD content",
      "Immunogenicity documentation",
      "Clinical study reports, summaries, and eClinical content",
    ],
  },
  {
    title: "Regulatory & CMC",
    items: [
      "IND and CTA supporting materials",
      "Biologics License Applications",
      "351(k) biosimilar application content",
      "MAA and CTD/eCTD documentation",
      "Quality Overall Summaries and CMC content",
      "Briefing packages and health authority responses",
    ],
  },
  {
    title: "Manufacturing & Quality",
    items: [
      "Standard Operating Procedures",
      "Batch records and manufacturing instructions",
      "Specifications and analytical methods",
      "Validation protocols and reports",
      "Deviations, CAPAs, and change controls",
      "Investigations and training materials",
    ],
  },
  {
    title: "Labeling, Safety & Commercial",
    items: [
      "Prescribing information, SmPCs, and PILs",
      "Package inserts, Medication Guides, and packaging",
      "Safety reports and risk-management materials",
      "Medical affairs content",
      "HTA and HEOR materials",
      "Payer and market-access content",
    ],
  },
];

const regulatoryColumns = [
  {
    title: "U.S. Biologics & Biosimilar Submissions",
    items: [
      "IND documentation",
      "351(a) BLA content",
      "351(k) biosimilar application content",
      "Clinical and nonclinical summaries",
      "CMC documentation",
      "Regulatory correspondence and product information",
      "Post-approval submissions and updates",
    ],
  },
  {
    title: "EU & International Marketing Applications",
    items: [
      "Marketing Authorization Applications",
      "CTD and eCTD Modules 1–5",
      "Quality documentation",
      "Nonclinical and clinical content",
      "Biosimilar comparability documentation",
      "Product information",
      "Market-specific regulatory materials",
    ],
  },
  {
    title: "Health Authority Interactions",
    items: [
      "Meeting packages",
      "Briefing documents",
      "Scientific advice materials",
      "Requests for information",
      "Deficiency questions and sponsor responses",
      "Supporting analyses",
      "Commitments and follow-up documentation",
    ],
  },
];

const clinicalItems = [
  "Protocols and amendments",
  "Investigator Brochures",
  "Informed consent and patient information",
  "Site and investigator documents",
  "Patient recruitment and engagement materials",
  "Clinical pharmacology and PK/PD",
  "Immunogenicity and safety content",
  "Clinical study reports",
  "eCOA, ePRO, and digital trial communications",
];

const clinicalTerms = [
  "Mechanism of action",
  "Biomarkers and biological endpoints",
  "Immune response and immunogenicity",
  "Dosage and administration",
  "Product-specific characteristics",
  "Reference-product terminology in biosimilar programs",
];

const labelingGroups = [
  {
    title: "Prescribing & Regulatory Product Information",
    items: ["U.S. Prescribing Information", "Summary of Product Characteristics", "Patient Information Leaflets", "Package inserts and patient information"],
  },
  {
    title: "Administration & Patient Use",
    items: ["Medication Guides", "Instructions for Use where applicable", "Administration instructions", "Patient training and support materials"],
  },
  {
    title: "Packaging & Market Content",
    items: ["Product labels", "Cartons", "Container content", "Packaging artwork text", "Market-specific mandatory content"],
  },
  {
    title: "Labeling Lifecycle Updates",
    items: ["New indications", "Safety revisions", "Product and manufacturing-related updates", "Health authority requests", "Periodic global labeling maintenance"],
  },
];

const pvGroups = [
  {
    title: "Case & Clinical Safety Content",
    items: ["Adverse event and serious adverse event reports", "ICSRs and SUSAR-related content", "Case narratives", "Safety correspondence", "Follow-up information"],
  },
  {
    title: "Aggregate Safety & Risk Management",
    items: ["DSURs", "PSURs and PBRERs", "Safety summaries", "Risk Management Plans", "Risk-minimization materials", "Benefit-risk content"],
  },
  {
    title: "Post-Market Safety Communication",
    items: ["Post-marketing surveillance materials", "Signal-related content", "Safety notices", "Healthcare professional communications", "Medical information", "Safety-driven labeling updates"],
  },
];

const marketGroups = [
  {
    title: "Market Access",
    items: ["HTA documentation", "HEOR materials", "Value dossiers", "Payer communications", "Reimbursement content", "Formulary documentation", "Tender materials"],
  },
  {
    title: "Medical Affairs",
    items: ["Medical information", "Advisory board materials", "Scientific presentations", "Publications", "Congress content", "HCP education", "Field medical materials"],
  },
  {
    title: "Global Launch & Patient Communication",
    items: ["Launch materials", "HCP communications", "Product education", "Patient education", "Patient support content", "Training", "Market-specific communications"],
  },
];

const governance = [
  {
    title: "Approved Product Terminology",
    text: "Maintain consistent translations for product and substance names, analytical and process terminology, quality attributes, clinical and regulatory terminology, and approved abbreviations.",
  },
  {
    title: "Translation Memory",
    text: "Identify and reuse approved translations where appropriate to support consistency across recurring and related documentation without unnecessary retranslation.",
  },
  {
    title: "Controlled Reference Materials",
    text: "Organize client-approved glossaries, prior translations, reference-product terminology, style guidance, regulatory precedents, product documentation, and client instructions.",
  },
  {
    title: "Version Management",
    text: "Maintain multilingual content through study amendments, analytical and CMC changes, manufacturing updates, submission revisions, labeling updates, safety changes, and recurring lifecycle work.",
  },
  {
    title: "Reviewer Feedback Capture",
    text: "Carry approved client and in-country reviewer decisions forward so the multilingual program becomes more consistent over time instead of restarting with every project.",
  },
];

const aiSteps = [
  ["01", "Content & Risk Assessment", "Review content type, intended use, regulatory relevance, complexity, language requirements, volume, timeline, and required quality controls."],
  ["02", "Terminology & Reference Alignment", "Apply approved terminology, translation memory, prior translations, product references, client instructions, and other controlled linguistic resources."],
  ["03", "SesenGPT Assistance Where Appropriate", "Use controlled AI assistance for suitable content and workflows rather than applying one automated model indiscriminately to every document type."],
  ["04", "Professional Life Sciences Linguist Review", "Review scientific meaning, terminology, regulatory context, linguistic accuracy, audience appropriateness, and cross-document consistency."],
  ["05", "AI-Assisted QA & Validation", "Check terminology, omissions, numbers, units, repeated content, structural differences, and formatting consistency."],
  ["06", "Final Human Quality Control", "Keep expert human review as a core control layer for regulated and high-impact life sciences content."],
];

const quality = [
  ["ISO-Certified Quality", "Sesen operates within certified translation and quality systems, including ISO 17100, ISO 9001, and ISO 13485, with workflow controls selected for the engagement."],
  ["Professional Life Sciences Linguists", "Projects are aligned with professional native linguists and reviewers experienced in pharmaceutical, biotechnology, medical, scientific, regulatory, manufacturing, and related content."],
  ["Terminology Governance", "Glossaries, translation memory, approved references, version control, and reviewer feedback help maintain consistent language across related projects."],
  ["Human-Reviewed AI Workflows", "AI assistance can support suitable workflows while qualified human review remains central to regulated and high-impact content."],
  ["Secure Global Infrastructure", "Sesen supports enterprise translation workflows through secure, AWS-hosted infrastructure for sensitive life sciences content and multilingual collaboration."],
  ["150+ Languages", "Support multilingual biopharmaceutical and biosimilar programs across major global markets and language groups."],
];

const reasons = [
  ["Biologics Subject-Matter Expertise", "Professional linguists and reviewers familiar with complex scientific, medical, biotechnology, pharmaceutical, and manufacturing content."],
  ["Biosimilar Comparability Support", "Multilingual continuity across reference-product comparisons, analytical characterization, CMC, clinical pharmacology, immunogenicity, and supporting regulatory evidence."],
  ["CMC & Manufacturing Continuity", "Consistent technical language across regulatory CMC content, manufacturing processes, analytical methods, quality documentation, and product changes."],
  ["Regulatory Lifecycle Support", "Translation support from development and submission through health authority communication, labeling, safety, and post-approval maintenance."],
  ["Scalable Global Workflows", "Structured delivery for individual documents, multilingual submissions, recurring manufacturing content, multi-market launches, and long-term lifecycle updates."],
  ["Technology + Human Expertise", "Terminology governance, translation memory, SesenGPT assistance where appropriate, AI-supported QA, and professional human review within one controlled workflow."],
];

const related = [
  ["Life Sciences Translation Services", "Enterprise multilingual support across clinical, regulatory, labeling, medical device, healthcare, scientific, and other regulated life sciences content.", "https://www.sesen.com/life-sciences-translation-services/"],
  ["Biotechnology Translation Services", "Broader translation support for biotechnology organizations across research, clinical development, regulatory submissions, CMC, manufacturing, labeling, and commercialization.", "https://www.sesen.com/biotechnology-translation-services/"],
  ["Pharmaceutical Translation Services", "Multilingual support across the broader drug-development lifecycle, from research and clinical programs through labeling, safety, and commercialization.", "https://www.sesen.com/pharmaceutical-translation-services/"],
  ["Clinical Trial Translation Services", "Translation for study documentation, patient-facing content, site communication, clinical reports, and multinational trial workflows.", "https://www.sesen.com/clinical-trial-translation-services/"],
  ["Regulatory Submission Translation Services", "Translation support for CTD/eCTD dossiers, regulatory applications, summaries, briefing packages, and submission-ready documentation.", "https://www.sesen.com/regulatory-submission-translation-services/"],
  ["CMC Document Translation Services", "Technical translation for Chemistry, Manufacturing, and Controls content supporting product development, manufacturing, submissions, and lifecycle management.", "https://www.sesen.com/cmc-document-translation-services/"],
  ["Labeling Translation Services", "Multilingual labeling support for regulated product information, packaging, patient content, market launches, and lifecycle updates.", "https://www.sesen.com/labeling-translation-services/"],
  ["Pharmacovigilance Translation Services", "Translation for adverse event reporting, aggregate safety documentation, risk management, post-market surveillance, and global safety communication.", "https://www.sesen.com/pharmacovigilance-translation-services/"],
  ["Medical & Scientific Translation Services", "Specialized translation for scientific research, publications, medical affairs, HCP communication, and technical life sciences content.", "https://www.sesen.com/medical-scientific-translation-services/"],
];

const faqs = [
  ["What are biopharmaceutical translation services?", "Biopharmaceutical translation services support the multilingual scientific, clinical, technical, regulatory, manufacturing, labeling, safety, and commercial content associated with biological medicines. Sesen supports biologics programs across research and product development, analytical characterization, clinical studies, CMC and manufacturing, regulatory submissions, product labeling, pharmacovigilance, medical affairs, market access, and post-approval lifecycle management."],
  ["Does Sesen provide biosimilar translation services?", "Yes. Sesen supports multilingual biosimilar programs from comparative analytical characterization and CMC documentation through clinical pharmacology, immunogenicity, clinical evidence where required, regulatory submissions, labeling, and lifecycle updates. Our role is to translate and manage multilingual content accurately and consistently within the sponsor's scientific and regulatory strategy."],
  ["What types of biologics does Sesen support?", "Sesen supports translation for a broad range of biopharmaceutical and biotechnology content, including documentation involving therapeutic proteins, monoclonal antibodies, recombinant products, immunological products, biosimilars, and other complex biological medicines. The linguistic team and workflow are selected according to the specific scientific subject matter and content requirements of each program."],
  ["Can Sesen translate biosimilar comparability documentation?", "Yes. Sesen supports documentation related to comparative analytical characterization, structural and functional properties, product quality, CMC comparability, PK/PD, immunogenicity, clinical evidence where applicable, scientific justification, and related regulatory communication. Controlled terminology and references can be maintained across related evidence streams to support multilingual consistency throughout the program."],
  ["Does Sesen translate CMC and biomanufacturing documentation?", "Yes. Sesen translates CMC, manufacturing, analytical, validation, and quality documentation for biopharmaceutical programs, including process-development documentation, analytical methods, specifications, stability reports, SOPs, manufacturing instructions, batch records, validation content, deviations, CAPAs, change controls, quality documentation, and technology-transfer materials."],
  ["Does Sesen support BLA and biosimilar regulatory submissions?", "Yes. Sesen supports multilingual content associated with biologics and biosimilar regulatory submissions, including Biologics License Applications, 351(k) biosimilar application content, Marketing Authorization Applications, CTD/eCTD documentation, CMC materials, regulatory summaries, briefing packages, health authority correspondence, and post-approval updates."],
  ["Does Sesen translate biologics and biosimilar labeling?", "Yes. Sesen supports multilingual labeling and product information for biologics and biosimilars, including prescribing information, SmPCs, patient information leaflets, package inserts, Medication Guides, administration content, packaging, market-specific product information, and ongoing labeling updates."],
  ["How does Sesen maintain terminology consistency across a biologics program?", "Sesen can maintain client-approved terminology, translation memory, product references, prior translations, style guidance, regulatory precedents, and reviewer decisions across related projects. These linguistic assets help keep scientific, CMC, clinical, regulatory, manufacturing, labeling, and safety terminology aligned as documentation evolves."],
  ["Does Sesen use AI for biopharmaceutical translation?", "Sesen uses AI-enabled translation and quality technologies within controlled workflows when appropriate to the content and intended use. SesenGPT can work alongside translation memory, terminology governance, automated quality validation, and professional life sciences linguist review. Regulated and high-impact content remains subject to human oversight appropriate to the project."],
  ["Can Sesen support ongoing biologics lifecycle updates?", "Yes. Sesen supports recurring multilingual content throughout the product lifecycle, including clinical amendments, manufacturing changes, submission updates, health authority responses, labeling revisions, safety updates, medical affairs content, and market-specific product communication. Maintained terminology and translation memory can help preserve continuity between the initial project and future updates."],
  ["Does Sesen work with both emerging biotechnology companies and global biopharma organizations?", "Yes. Sesen can support focused translation needs for emerging biotechnology and biosimilar developers as well as larger multilingual programs involving multiple departments, content streams, languages, markets, and recurring lifecycle updates."],
  ["How many languages does Sesen support?", "Sesen supports biopharmaceutical and biosimilar translation in 150+ languages, enabling scientific, clinical, regulatory, manufacturing, labeling, safety, and commercial communication across global markets."],
];

function ArrowIcon({ direction = "right" }) {
  const transform = direction === "down" ? "rotate(90 12 12)" : undefined;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" transform={transform}>
      <path d="M5 12h13M14 7l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5.5 12.4 9.7 16.6 18.5 7.8" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12h14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      {!open && <path d="M12 5v14" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />}
    </svg>
  );
}

function MoleculeIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <circle cx="9" cy="18" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="25" cy="9" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="27" cy="26" r="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="m11.7 16.6 10.4-5.8M11.9 19.4l12.2 5.2M25.5 12l1 11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <path d="M10 5.5h11l5 5v20H10z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M21 5.5v5h5M14 17h8M14 22h8M14 27h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <path d="M18 4.5 28 8v8.4c0 7-4.5 12-10 15.1-5.5-3.1-10-8.1-10-15.1V8z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="m13 17.8 3.2 3.2 6.8-7" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 36 36" aria-hidden="true" focusable="false">
      <circle cx="18" cy="18" r="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 18h25M18 5c4 4 6 8.3 6 13s-2 9-6 13M18 5c-4 4-6 8.3-6 13s2 9 6 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function HeroArt() {
  return (
    <div className="bb-hero-art" aria-label="Reference biologic and proposed biosimilar connected by comparative evidence">
      <svg viewBox="0 0 620 500" role="img" aria-labelledby="bb-hero-art-title">
        <title id="bb-hero-art-title">Reference biologic, comparative evidence, and proposed biosimilar</title>
        <defs>
          <linearGradient id="softFill" x1="0" x2="1">
            <stop offset="0" stopColor="#F7F9FD" />
            <stop offset="1" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>
        <rect x="24" y="42" width="572" height="408" rx="42" fill="url(#softFill)" stroke="#DDE4F2" />
        <circle cx="164" cy="220" r="88" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <circle cx="456" cy="220" r="88" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="2" />
        <path d="M125 191c16-34 43-43 62-23 18 18-3 36-25 36-20 1-24 19-8 34 18 17 46 9 50-17" fill="none" stroke="#3659BB" strokeWidth="5" strokeLinecap="round" />
        <path d="M420 188c18-31 44-37 61-17 16 18-4 34-25 34-21 0-25 18-9 34 18 17 45 8 49-17" fill="none" stroke="#4B6FD8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="129" cy="191" r="7" fill="#6F8BE1" />
        <circle cx="196" cy="169" r="7" fill="#3659BB" />
        <circle cx="422" cy="188" r="7" fill="#6F8BE1" />
        <circle cx="489" cy="171" r="7" fill="#4B6FD8" />
        <path d="M252 220h116" stroke="#3659BB" strokeWidth="2" strokeDasharray="8 8" />
        <path d="m354 209 14 11-14 11" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="m266 209-14 11 14 11" fill="none" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="259" y="132" width="102" height="176" rx="22" fill="#FFFFFF" stroke="#DDE4F2" />
        {[0,1,2,3,4].map((i) => (
          <g key={i} transform={`translate(278 ${157 + i * 29})`}>
            <circle cx="8" cy="8" r="4" fill={i < 2 ? "#4B6FD8" : "#C8D6FF"} />
            <line x1="21" y1="8" x2="64" y2="8" stroke={i < 2 ? "#3659BB" : "#9BA8BE"} strokeWidth="2" strokeLinecap="round" />
          </g>
        ))}
      </svg>
    </div>
  );
}

function EvidenceDiagram() {
  const labels = ["STRUCTURE", "FUNCTION", "QUALITY / CMC", "PK / PD", "IMMUNOGENICITY", "CLINICAL, WHERE REQUIRED"];
  return (
    <div className="bb-evidence-diagram" role="img" aria-label="Reference biologic to comparative evidence to proposed biosimilar">
      <div className="bb-evidence-node bb-evidence-node--side">
        <MoleculeIcon />
        <strong>REFERENCE BIOLOGIC</strong>
      </div>
      <div className="bb-evidence-connector" aria-hidden="true"><span /><span /></div>
      <div className="bb-evidence-core">
        <span className="bb-evidence-core-title">COMPARATIVE EVIDENCE</span>
        <div className="bb-evidence-labels">
          {labels.map((label) => <span key={label}>{label}</span>)}
        </div>
        <small>Controlled terminology · aligned references · multilingual consistency</small>
      </div>
      <div className="bb-evidence-connector" aria-hidden="true"><span /><span /></div>
      <div className="bb-evidence-node bb-evidence-node--side">
        <MoleculeIcon />
        <strong>PROPOSED BIOSIMILAR</strong>
      </div>
    </div>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="bb-editorial-link" href={href}>
      <span>{children}</span><ArrowIcon />
    </a>
  );
}

function Bullets({ items, compact = false }) {
  return (
    <ul className={`bb-list${compact ? " bb-list--compact" : ""}`}>
      {items.map((item) => (
        <li key={item}><span className="bb-list-check"><CheckIcon /></span><span>{item}</span></li>
      ))}
    </ul>
  );
}

function FAQItem({ item, open, onToggle, index }) {
  const [q, a] = item;
  const panelId = `bb-faq-panel-${index}`;
  const buttonId = `bb-faq-button-${index}`;
  return (
    <div className={`bb-faq-item${open ? " is-open" : ""}`}>
      <button id={buttonId} className="bb-faq-question" type="button" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span>{q}</span>
        <span className="bb-faq-icon"><PlusIcon open={open} /></span>
      </button>
      <div id={panelId} className="bb-faq-answer" role="region" aria-labelledby={buttonId} hidden={!open}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function BiopharmaceuticalBiosimilarTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="sesen-biopharma-page">
      <style>{styles}</style>

      <section className="bb-hero" aria-labelledby="bb-page-title">
        <div className="bb-shell bb-hero-grid">
          <div className="bb-hero-copy">
            <h1 id="bb-page-title">Biopharmaceutical &amp; Biosimilar Translation Services</h1>
            <p className="bb-hero-lead">Specialized translation for biologics and biosimilar programs across scientific development, comparability, clinical research, CMC and manufacturing, regulatory submissions, labeling, pharmacovigilance, and global commercialization.</p>
            <p className="bb-hero-support">Sesen helps biopharmaceutical companies manage complex multilingual content with professional life sciences linguists, controlled terminology, AI-enabled workflows, expert human review, and scalable support across 150+ languages.</p>
            <div className="bb-button-row">
              <a className="bb-button bb-button--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <ArrowIcon /></a>
              <a className="bb-button bb-button--secondary" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <ArrowIcon /></a>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="bb-trust" aria-label="Biopharmaceutical translation capabilities">
        <div className="bb-shell bb-trust-grid">
          <div className="bb-trust-item"><span className="bb-trust-icon"><MoleculeIcon /></span><div><strong>Biologics &amp; Biosimilar Expertise</strong><span>Scientific and technical translation for complex biological products</span></div></div>
          <div className="bb-trust-item"><span className="bb-trust-icon"><ShieldIcon /></span><div><strong>ISO-Certified Quality</strong><span>Structured translation, review, and quality workflows</span></div></div>
          <div className="bb-trust-item"><span className="bb-trust-icon"><DocumentIcon /></span><div><strong>Expert Human Review</strong><span>Professional life sciences linguists for regulated content</span></div></div>
          <div className="bb-trust-item"><span className="bb-trust-icon"><GlobeIcon /></span><div><strong>150+ Languages</strong><span>Multilingual support for development programs and global markets</span></div></div>
        </div>
      </section>

      <section className="bb-section bb-lifecycle" aria-labelledby="bb-lifecycle-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center bb-mobile-left-technical">
            <h2 id="bb-lifecycle-title">Translation Across the Biologics &amp; Biosimilar Lifecycle</h2>
            <p>Biological products generate highly connected scientific, clinical, manufacturing, regulatory, labeling, and safety content. Sesen helps global teams maintain multilingual consistency as this content moves across countries, submissions, manufacturing sites, and lifecycle updates.</p>
          </div>
          <div className="bb-lifecycle-grid">
            {lifecycle.map((item) => (
              <article className="bb-lifecycle-item" key={item.n}>
                <div className="bb-step-number">{item.n}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  {item.href && <EditorialLink href={item.href}>{item.link}</EditorialLink>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section bb-section--soft" aria-labelledby="bb-why-title">
        <div className="bb-shell bb-split bb-split--authority">
          <div className="bb-sticky-copy">
            <h2 id="bb-why-title" className="bb-mobile-center-heading">Why Biologics Require Specialized Translation Expertise</h2>
            <p className="bb-section-lead">Biopharmaceutical translation requires more than general pharmaceutical terminology. Biological products involve complex molecular structures, biological activity, specialized analytical methods, tightly controlled manufacturing processes, and interconnected scientific evidence that continues to evolve throughout the product lifecycle.</p>
            <p>The language used to describe that evidence must remain precise wherever it appears.</p>
          </div>
          <div className="bb-editorial-rows">
            {whyItems.map((item) => (
              <article className="bb-editorial-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section" aria-labelledby="bb-programs-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-programs-title">Specialized Support for Innovator Biologics and Biosimilars</h2>
            <p>Innovator biologics and biosimilars share many scientific and operational requirements, but their development and regulatory documentation are not identical. Sesen aligns multilingual workflows to the content, intended use, regulatory context, and stage of the product lifecycle.</p>
          </div>
          <div className="bb-dual-panel">
            <article className="bb-program-panel">
              <div className="bb-program-kicker">INNOVATOR BIOLOGICS</div>
              <h3>Support From Scientific Development Through Commercial Lifecycle</h3>
              <Bullets items={innovator} compact />
            </article>
            <article className="bb-program-panel bb-program-panel--accent">
              <div className="bb-program-kicker">BIOSIMILARS</div>
              <h3>Support for Comparative Evidence and Biosimilar Lifecycle Content</h3>
              <Bullets items={biosimilar} compact />
            </article>
          </div>
        </div>
      </section>

      <section className="bb-section bb-section--blue-tint bb-comparability" aria-labelledby="bb-comparability-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--left bb-mobile-left-technical">
            <div className="bb-eyebrow">BIOSIMILAR DEVELOPMENT</div>
            <h2 id="bb-comparability-title">Multilingual Consistency Across the Biosimilar Comparability Exercise</h2>
            <p>Biosimilar development depends on a structured comparison between the proposed biosimilar and the reference product. That comparison can extend across analytical characterization, biological function, product quality, CMC information, clinical pharmacology, immunogenicity, and other supporting evidence appropriate to the development program.</p>
            <p>When the same evidence is presented across languages, dossiers, reports, summaries, and health authority interactions, terminology needs to remain tightly controlled.</p>
          </div>
          <div className="bb-comparability-grid">
            {comparability.map((item) => (
              <article className="bb-comparability-item" key={item.n}>
                <span className="bb-comparability-n">{item.n}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            ))}
          </div>
          <p className="bb-emphasis-line">One controlled multilingual evidence framework—from analytical characterization through regulatory review.</p>
          <EvidenceDiagram />
        </div>
      </section>

      <section className="bb-section bb-cmc" aria-labelledby="bb-cmc-title">
        <div className="bb-shell">
          <div className="bb-split bb-split--intro">
            <div>
              <div className="bb-eyebrow">CMC &amp; BIOPROCESSING</div>
              <h2 id="bb-cmc-title">Multilingual Continuity Across CMC & Biomanufacturing</h2>
            </div>
            <div>
              <p className="bb-section-lead">Biologics manufacturing generates some of the most technically dense content in the product lifecycle. Scientific terminology, process terminology, analytical methods, specifications, quality attributes, and manufacturing controls may be repeated across regulatory submissions, manufacturing documentation, quality systems, and lifecycle changes.</p>
              <p>Sesen provides biologics CMC translation and biopharmaceutical manufacturing translation services designed to keep this content aligned across languages and functions.</p>
            </div>
          </div>
          <div className="bb-cmc-grid">
            {cmcGroups.map((item) => (
              <article className="bb-cmc-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
          <div className="bb-inline-callout">
            <p>The objective is not simply to translate each document accurately in isolation. It is to preserve the same controlled technical language across <strong>CMC submissions, manufacturing operations, quality systems, and future product changes.</strong></p>
            <div className="bb-inline-links">
              <EditorialLink href="https://www.sesen.com/cmc-document-translation-services/">CMC Document Translation Services</EditorialLink>
              <EditorialLink href="https://www.sesen.com/pharmaceutical-manufacturing-translation/">Pharmaceutical Manufacturing Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bb-section bb-section--soft" aria-labelledby="bb-docs-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center bb-mobile-left-technical">
            <h2 id="bb-docs-title">Biopharmaceutical &amp; Biosimilar Documents We Translate</h2>
            <p>Sesen supports scientific, clinical, technical, regulatory, manufacturing, quality, safety, and commercial documentation across biologics and biosimilar programs.</p>
          </div>
          <div className="bb-document-grid">
            {documentGroups.map((group) => (
              <article className="bb-document-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section bb-regulatory" aria-labelledby="bb-regulatory-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--left bb-mobile-left-technical">
            <div className="bb-eyebrow">GLOBAL REGULATORY</div>
            <h2 id="bb-regulatory-title">Translation for Biologics &amp; Biosimilar Regulatory Submissions</h2>
            <p>Regulatory translation for biologics requires continuity across scientific evidence, CMC documentation, clinical data, regulatory summaries, product information, and ongoing communication with health authorities. Sesen helps teams manage this content across languages without losing the approved terminology and scientific relationships established earlier in development.</p>
          </div>
          <div className="bb-three-columns">
            {regulatoryColumns.map((group) => (
              <article className="bb-column-section" key={group.title}>
                <h3>{group.title}</h3>
                <Bullets items={group.items} compact />
              </article>
            ))}
          </div>
          <div className="bb-regulatory-sequence" aria-label="Regulatory content continuity sequence">
            <span>SUBMISSION</span><ArrowIcon /><span>AUTHORITY QUESTION</span><ArrowIcon /><span>SPONSOR RESPONSE</span><ArrowIcon /><span>REVISED DOCUMENTATION</span>
          </div>
          <div className="bb-inline-links bb-inline-links--center">
            <EditorialLink href="https://www.sesen.com/regulatory-translation-services/">Regulatory Translation Services</EditorialLink>
            <EditorialLink href="https://www.sesen.com/regulatory-submission-translation-services/">Regulatory Submission Translation Services</EditorialLink>
            <EditorialLink href="https://www.sesen.com/ectd-ctd-translation-services/">CTD &amp; eCTD Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="bb-section bb-section--soft" aria-labelledby="bb-clinical-title">
        <div className="bb-shell bb-split bb-split--clinical">
          <div>
            <h2 id="bb-clinical-title" className="bb-mobile-center-heading">Multilingual Support for Global Biologics Clinical Development</h2>
            <p className="bb-section-lead">Biologics clinical programs combine standard trial documentation with highly specialized product, biological, immunological, and clinical pharmacology terminology.</p>
            <p>Sesen helps sponsors, biotechnology companies, pharmaceutical organizations, and CROs translate multinational study content while maintaining consistency with the broader scientific and regulatory program.</p>
            <EditorialLink href="https://www.sesen.com/clinical-trial-translation-services/">Clinical Trial Translation Services</EditorialLink>
          </div>
          <div className="bb-clinical-matrix">
            <div className="bb-clinical-block">
              <h3>Clinical Content We Support</h3>
              <Bullets items={clinicalItems} compact />
            </div>
            <div className="bb-clinical-block bb-clinical-block--accent">
              <h3>Biologics-Specific Terminology Control</h3>
              <Bullets items={clinicalTerms} compact />
            </div>
          </div>
        </div>
      </section>

      <section className="bb-section" aria-labelledby="bb-labeling-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-labeling-title">Global Labeling for Biologics &amp; Biosimilars</h2>
            <p>Sesen supports multilingual labeling workflows from initial product information through recurring safety, indication, manufacturing, and market-specific updates—using approved terminology, translation memory, version control, structured review, and in-context QA.</p>
          </div>
          <div className="bb-four-columns">
            {labelingGroups.map((group) => (
              <article className="bb-label-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="bb-section-link"><EditorialLink href="https://www.sesen.com/labeling-translation-services/">Labeling Translation Services</EditorialLink></div>
        </div>
      </section>

      <section className="bb-section bb-section--blue-tint" aria-labelledby="bb-pv-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-pv-title">Multilingual Safety Support Throughout the Product Lifecycle</h2>
            <p>Biologics and biosimilars continue generating safety content during clinical development and after approval. Global pharmacovigilance teams need multilingual workflows that can handle time-sensitive reporting while preserving consistent product, medical, and safety terminology.</p>
          </div>
          <div className="bb-three-columns bb-three-columns--divided">
            {pvGroups.map((group) => (
              <article className="bb-column-section" key={group.title}>
                <h3>{group.title}</h3>
                <Bullets items={group.items} compact />
              </article>
            ))}
          </div>
          <p className="bb-detail-note">For biologics, terminology may also involve immunogenicity, hypersensitivity, administration-related reactions, product-specific safety concepts, and consistent identification of reference and biosimilar products.</p>
          <div className="bb-section-link"><EditorialLink href="https://www.sesen.com/pharmacovigilance-translation-services/">Pharmacovigilance Translation Services</EditorialLink></div>
        </div>
      </section>

      <section className="bb-section" aria-labelledby="bb-market-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-market-title">Support Global Access From Approval Through Commercialization</h2>
            <p>Regulatory approval is not the end of a global biopharmaceutical translation program. Product information continues moving between health technology assessment bodies, payers, healthcare professionals, scientific communities, institutions, affiliates, and patients.</p>
          </div>
          <div className="bb-three-columns bb-market-grid">
            {marketGroups.map((group) => (
              <article className="bb-market-column" key={group.title}>
                <h3>{group.title}</h3>
                <Bullets items={group.items} compact />
              </article>
            ))}
          </div>
          <div className="bb-section-link"><EditorialLink href="https://www.sesen.com/medical-scientific-translation-services/">Medical &amp; Scientific Translation Services</EditorialLink></div>
        </div>
      </section>

      <section className="bb-section bb-governance" aria-labelledby="bb-governance-title">
        <div className="bb-shell">
          <div className="bb-governance-head">
            <div className="bb-eyebrow bb-eyebrow--dark">MULTILINGUAL CONTENT CONTROL</div>
            <h2 id="bb-governance-title">One Multilingual Content Framework Across Scientific, CMC &amp; Regulatory Teams</h2>
            <p>A product name, process parameter, assay, critical quality attribute, mechanism-of-action term, manufacturing step, or scientific conclusion can appear repeatedly across analytical reports, CMC modules, clinical documentation, manufacturing procedures, health authority responses, product labeling, and safety content.</p>
          </div>
          <div className="bb-governance-layout">
            <div className="bb-governance-rail" aria-hidden="true">
              <span>SCIENTIFIC</span><i /><span>CMC</span><i /><span>REGULATORY</span><i /><span>LABELING</span><i /><span>SAFETY</span>
            </div>
            <div className="bb-governance-rows">
              {governance.map((item) => (
                <article className="bb-governance-row" key={item.title}>
                  <span className="bb-governance-marker" aria-hidden="true"><i /></span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                </article>
              ))}
            </div>
          </div>
          <p className="bb-governance-close">The result is a multilingual content framework designed to maintain continuity as the product, evidence, documentation, and markets evolve.</p>
        </div>
      </section>

      <section className="bb-section bb-ai" aria-labelledby="bb-ai-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--left bb-mobile-left-technical">
            <div className="bb-eyebrow">CONTROLLED TECHNOLOGY</div>
            <h2 id="bb-ai-title">AI-Enabled Workflows With Expert Human Review</h2>
            <p>AI can improve the efficiency, consistency, and scalability of multilingual life sciences workflows, but regulated content should not be treated as a single undifferentiated use case. Sesen selects the translation and review approach according to the content, intended use, scientific complexity, regulatory context, language, scale, and required quality controls.</p>
          </div>
          <div className="bb-ai-flow">
            {aiSteps.map(([n, title, text], idx) => (
              <article className="bb-ai-step" key={n}>
                <span className="bb-ai-number">{n}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
                {idx < aiSteps.length - 1 && <span className="bb-ai-arrow" aria-hidden="true"><ArrowIcon /></span>}
              </article>
            ))}
          </div>
          <div className="bb-inline-callout bb-inline-callout--ai">
            <p>Sesen's approach combines <strong>professional expertise, controlled terminology, translation memory, selective AI assistance, validation-driven QA, and accountable human review.</strong></p>
            <div className="bb-inline-links">
              <EditorialLink href="https://www.sesen.com/sesengpt/">Explore SesenGPT</EditorialLink>
              <EditorialLink href="https://www.sesen.com/ai-powered-translation/">AI-Powered Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="bb-section bb-section--soft" aria-labelledby="bb-quality-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-quality-title">Quality &amp; Security for Global Biopharmaceutical Programs</h2>
            <p>Complex multilingual programs require more than accurate translation. They need repeatable quality controls, secure workflows, qualified linguistic resources, and the ability to maintain content over time.</p>
          </div>
          <div className="bb-quality-grid">
            {quality.map(([title, text], idx) => (
              <article className="bb-quality-item" key={title}>
                <span className="bb-quality-icon">{idx === 0 || idx === 4 ? <ShieldIcon /> : idx === 5 ? <GlobeIcon /> : idx === 1 ? <MoleculeIcon /> : <DocumentIcon />}</span>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section" aria-labelledby="bb-reasons-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--center">
            <h2 id="bb-reasons-title">Built for Complex, Multilingual Biologics Programs</h2>
            <p>Biopharmaceutical organizations need a language partner capable of understanding the connections between scientific evidence, manufacturing, regulatory documentation, product information, and lifecycle change.</p>
          </div>
          <div className="bb-reasons-grid">
            {reasons.map(([title, text]) => (
              <article className="bb-reason" key={title}>
                <span className="bb-reason-mark" aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section bb-related" aria-labelledby="bb-related-title">
        <div className="bb-shell">
          <div className="bb-heading-group bb-heading-group--left bb-mobile-left-technical">
            <h2 id="bb-related-title">Explore Related Life Sciences Translation Services</h2>
            <p>Connect biologics and biosimilar programs to Sesen's broader life sciences, biotechnology, pharmaceutical, clinical, regulatory, CMC, labeling, safety, and scientific expertise.</p>
          </div>
          <div className="bb-related-grid">
            {related.map(([title, text, href]) => (
              <a className="bb-related-item" href={href} key={title}>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="bb-related-arrow"><ArrowIcon /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-section bb-faq" aria-labelledby="bb-faq-title">
        <div className="bb-shell bb-faq-shell">
          <div className="bb-faq-intro">
            <h2 id="bb-faq-title">Biopharmaceutical &amp; Biosimilar Translation FAQs</h2>
            <p>Answers to common questions about multilingual biologics, biosimilar comparability, CMC, regulatory, labeling, and lifecycle translation support.</p>
          </div>
          <div className="bb-faq-list">
            {faqs.map((item, index) => (
              <FAQItem key={item[0]} item={item} index={index} open={openFaq === index} onToggle={() => setOpenFaq(openFaq === index ? -1 : index)} />
            ))}
          </div>
        </div>
      </section>

      <section className="bb-final-cta" aria-labelledby="bb-final-title">
        <div className="bb-shell bb-final-cta-inner">
          <div>
            <h2 id="bb-final-title" className="bb-mobile-center-heading">Support Your Global Biologics Program With Specialized Translation Expertise</h2>
            <p>From analytical characterization and biosimilar comparability to CMC, clinical development, global submissions, manufacturing, labeling, pharmacovigilance, and commercialization, Sesen helps biopharmaceutical teams maintain accurate and consistent multilingual content throughout the product lifecycle.</p>
          </div>
          <div className="bb-final-actions">
            <a className="bb-button bb-button--primary" href="https://www.sesen.com/contact-sales/">TALK WITH TEAM SESEN <ArrowIcon /></a>
            <a className="bb-button bb-button--light" href="https://www.sesen.com/get-a-quote/">REQUEST A QUOTE <ArrowIcon /></a>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
.sesen-biopharma-page {
  --bb-blue: #4B6FD8;
  --bb-blue-dark: #3659BB;
  --bb-blue-deep: #253F8F;
  --bb-blue-mid: #6F8BE1;
  --bb-blue-soft: #EAF0FF;
  --bb-blue-pale: #F5F7FF;
  --bb-navy: #17264D;
  --bb-ink: #111827;
  --bb-body: #46546D;
  --bb-muted: #68758B;
  --bb-border: #DDE4F2;
  --bb-divider: #E9EEF8;
  --bb-soft: #F7F9FD;
  --bb-white: #FFFFFF;
  --bb-light-blue: #C8D6FF;
  color: var(--bb-body);
  background: var(--bb-white);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  font-size: 16px;
  line-height: 1.65;
  overflow: hidden;
}
.sesen-biopharma-page * { box-sizing: border-box; }
.sesen-biopharma-page h1,
.sesen-biopharma-page h2,
.sesen-biopharma-page h3 { margin: 0; font-family: "Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; color: var(--bb-navy); font-weight: 500; }
.sesen-biopharma-page h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
.sesen-biopharma-page h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; }
.sesen-biopharma-page h3 { font-size: 23px; line-height: 1.3; }
.sesen-biopharma-page p { margin: 0; font-size: 16px; color: var(--bb-body); }
.sesen-biopharma-page a { color: inherit; }
.sesen-biopharma-page button { font: inherit; }
.sesen-biopharma-page svg { display: block; }
.bb-shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
.bb-section { padding: 96px 0; }
.bb-section--soft { background: var(--bb-soft); }
.bb-section--blue-tint { background: var(--bb-blue-pale); }
.bb-eyebrow { margin: 0 0 16px; color: var(--bb-blue-dark); font-size: 11px; font-weight: 700; line-height: 1.35; letter-spacing: .15em; text-transform: uppercase; }
.bb-eyebrow--dark { color: var(--bb-light-blue); }
.bb-heading-group { max-width: 820px; margin-bottom: 48px; }
.bb-heading-group--center { margin-left: auto; margin-right: auto; text-align: center; }
.bb-heading-group--left { max-width: 790px; }
.bb-heading-group h2 + p { margin-top: 18px; }
.bb-heading-group p + p { margin-top: 12px; }
.bb-heading-group p { font-size: 18px; line-height: 1.65; }
.bb-section-lead { font-size: 18px !important; line-height: 1.68 !important; color: #293954 !important; }
.bb-button-row { display: flex; align-items: center; gap: 12px; margin-top: 34px; flex-wrap: wrap; }
.bb-button { min-height: 50px; padding: 0 25px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; text-decoration: none; font-size: 13px; font-weight: 700; letter-spacing: .04em; line-height: 1; transition: background-color .18s ease, border-color .18s ease, transform .18s ease; border: 1px solid transparent; cursor: pointer; }
.bb-button svg { width: 17px; height: 17px; }
.bb-button:hover { transform: translateY(-1px); }
.bb-button:focus-visible,
.bb-editorial-link:focus-visible,
.bb-related-item:focus-visible,
.bb-faq-question:focus-visible { outline: 3px solid rgba(75,111,216,.28); outline-offset: 3px; }
.sesen-biopharma-page .bb-button--primary,
.sesen-biopharma-page .bb-button--primary:visited { background: var(--bb-blue); color: var(--bb-white) !important; }
.sesen-biopharma-page .bb-button--primary:hover,
.sesen-biopharma-page .bb-button--primary:focus-visible { background: var(--bb-blue-dark); color: var(--bb-white) !important; }
.sesen-biopharma-page .bb-button--primary svg { color: var(--bb-white) !important; }
.sesen-biopharma-page .bb-button--secondary,
.sesen-biopharma-page .bb-button--secondary:visited { background: var(--bb-white); color: var(--bb-ink) !important; border-color: var(--bb-border); }
.sesen-biopharma-page .bb-button--secondary:hover,
.sesen-biopharma-page .bb-button--secondary:focus-visible { background: var(--bb-blue-pale); color: var(--bb-ink) !important; border-color: #C9D5EC; }
.sesen-biopharma-page .bb-button--secondary svg { color: var(--bb-ink) !important; }
.sesen-biopharma-page .bb-button--light,
.sesen-biopharma-page .bb-button--light:visited { background: var(--bb-white); color: var(--bb-ink) !important; border-color: rgba(255,255,255,.7); }
.sesen-biopharma-page .bb-button--light:hover,
.sesen-biopharma-page .bb-button--light:focus-visible { background: #F2F5FB; color: var(--bb-ink) !important; }
.sesen-biopharma-page .bb-button--light svg { color: var(--bb-ink) !important; }
.bb-editorial-link { display: inline-flex; align-items: center; gap: 8px; margin-top: 16px; color: var(--bb-blue-dark) !important; text-decoration: none; font-size: 15px; font-weight: 650; line-height: 1.35; }
.bb-editorial-link svg { width: 16px; height: 16px; transition: transform .18s ease; }
.bb-editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
.bb-editorial-link:hover svg { transform: translateX(2px); }

/* Hero */
.bb-hero { padding: 96px 0 88px; background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%); }
.bb-hero-grid { display: grid; grid-template-columns: minmax(0, 1.02fr) minmax(440px, .98fr); gap: 60px; align-items: center; }
.bb-hero-copy { max-width: 690px; }
.bb-hero-lead { margin-top: 22px !important; color: #293954 !important; font-size: 19px !important; line-height: 1.65 !important; max-width: 680px; }
.bb-hero-support { margin-top: 14px !important; font-size: 17px !important; line-height: 1.65 !important; max-width: 665px; }
.bb-hero-art { width: 100%; min-width: 0; }
.bb-hero-art svg { width: 100%; height: auto; }

/* Trust */
.bb-trust { background: var(--bb-white); border-top: 1px solid var(--bb-divider); border-bottom: 1px solid var(--bb-divider); }
.bb-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
.bb-trust-item { min-height: 132px; padding: 27px 24px; display: flex; align-items: flex-start; gap: 14px; border-right: 1px solid var(--bb-divider); }
.bb-trust-item:last-child { border-right: 0; }
.bb-trust-icon { width: 32px; min-width: 32px; height: 32px; color: var(--bb-blue-dark); margin-top: 1px; }
.bb-trust-icon svg { width: 32px; height: 32px; }
.bb-trust-item strong { display: block; color: var(--bb-navy); font-size: 15px; line-height: 1.35; font-weight: 700; }
.bb-trust-item span span { display: block; margin-top: 5px; color: var(--bb-muted); font-size: 14px; line-height: 1.5; }

/* Lifecycle */
.bb-lifecycle-grid { position: relative; display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); background: var(--bb-white); }
.bb-lifecycle-item { min-height: 290px; padding: 29px 27px 30px; border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); display: flex; gap: 17px; }
.bb-step-number { color: var(--bb-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; line-height: 1.4; padding-top: 4px; }
.bb-lifecycle-item h3 { font-size: 21px; }
.bb-lifecycle-item p { margin-top: 11px; }

/* Shared split / authority */
.bb-split { display: grid; grid-template-columns: .82fr 1.18fr; gap: 82px; align-items: start; }
.bb-split--authority { grid-template-columns: .82fr 1.18fr; }
.bb-sticky-copy { position: sticky; top: 32px; }
.bb-sticky-copy h2 + p { margin-top: 20px; }
.bb-sticky-copy p + p { margin-top: 16px; }
.bb-editorial-rows { border-top: 1px solid var(--bb-border); }
.bb-editorial-row { display: grid; grid-template-columns: minmax(190px,.45fr) 1fr; gap: 34px; padding: 28px 0; border-bottom: 1px solid var(--bb-border); }
.bb-editorial-row h3 { font-size: 21px; }

/* Innovator vs Biosimilar */
.bb-dual-panel { display: grid; grid-template-columns: 1fr 1fr; border: 1px solid var(--bb-border); border-radius: 28px; overflow: hidden; background: var(--bb-white); }
.bb-program-panel { padding: 38px 40px 40px; }
.bb-program-panel + .bb-program-panel { border-left: 1px solid var(--bb-border); }
.bb-program-panel--accent { background: var(--bb-blue-pale); }
.bb-program-kicker { color: var(--bb-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .14em; line-height: 1.4; margin-bottom: 13px; }
.bb-program-panel h3 { font-size: 25px; max-width: 470px; }
.bb-list { list-style: none; margin: 22px 0 0; padding: 0; display: grid; gap: 12px; }
.bb-list--compact { gap: 10px; }
.bb-list li { display: flex; gap: 10px; align-items: flex-start; font-size: 16px; line-height: 1.55; color: var(--bb-body); }
.bb-list-check { width: 18px; height: 18px; min-width: 18px; margin-top: 3px; color: var(--bb-blue-dark); }
.bb-list-check svg { width: 18px; height: 18px; }

/* Comparability */
.bb-comparability-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 62px; border-top: 1px solid #CBD7EF; }
.bb-comparability-item { display: grid; grid-template-columns: 42px 1fr; gap: 16px; padding: 26px 0 28px; border-bottom: 1px solid #CBD7EF; }
.bb-comparability-n { color: var(--bb-blue-dark); font-weight: 700; font-size: 12px; padding-top: 4px; }
.bb-comparability-item h3 { font-size: 21px; }
.bb-comparability-item p { margin-top: 8px; }
.bb-emphasis-line { margin: 34px 0 0 !important; color: var(--bb-navy) !important; font-family: "Inter Tight", Inter, sans-serif; font-size: 22px !important; font-weight: 500; }
.bb-evidence-diagram { margin-top: 44px; padding: 33px 35px; display: grid; grid-template-columns: 1fr 70px 2.2fr 70px 1fr; align-items: center; gap: 8px; background: var(--bb-white); border: 1px solid var(--bb-border); border-radius: 28px; }
.bb-evidence-node { min-height: 150px; padding: 22px 18px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 14px; border: 1px solid var(--bb-border); border-radius: 20px; background: #FBFCFF; color: var(--bb-blue-dark); }
.bb-evidence-node svg { width: 46px; height: 46px; }
.bb-evidence-node strong { color: var(--bb-navy); font-size: 13px; line-height: 1.4; letter-spacing: .04em; }
.bb-evidence-connector { display: flex; align-items: center; justify-content: center; gap: 6px; }
.bb-evidence-connector span { display: block; width: 24px; height: 1px; background: var(--bb-blue-mid); position: relative; }
.bb-evidence-connector span:first-child:before,
.bb-evidence-connector span:last-child:after { content: ""; position: absolute; top: -3px; width: 7px; height: 7px; border-top: 1.5px solid var(--bb-blue-mid); border-right: 1.5px solid var(--bb-blue-mid); }
.bb-evidence-connector span:first-child:before { left: 0; transform: rotate(-135deg); }
.bb-evidence-connector span:last-child:after { right: 0; transform: rotate(45deg); }
.bb-evidence-core { padding: 25px; border-radius: 22px; background: var(--bb-blue-pale); border: 1px solid #CEDAF1; }
.bb-evidence-core-title { display: block; text-align: center; color: var(--bb-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .13em; }
.bb-evidence-labels { margin-top: 19px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 9px; }
.bb-evidence-labels span { padding: 9px 10px; border-radius: 10px; background: var(--bb-white); border: 1px solid var(--bb-border); text-align: center; color: var(--bb-navy); font-size: 11px; font-weight: 700; line-height: 1.35; }
.bb-evidence-core small { display: block; margin-top: 17px; text-align: center; color: var(--bb-muted); font-size: 13px; line-height: 1.45; }

/* CMC */
.bb-split--intro { grid-template-columns: .9fr 1.1fr; margin-bottom: 44px; }
.bb-split--intro > div:last-child p + p { margin-top: 14px; }
.bb-cmc-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); }
.bb-cmc-item { min-height: 210px; padding: 29px 28px; border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); }
.bb-cmc-item h3 { font-size: 21px; }
.bb-cmc-item p { margin-top: 10px; }
.bb-inline-callout { margin-top: 36px; padding: 26px 30px; border-radius: 20px; background: var(--bb-blue-pale); display: flex; align-items: center; justify-content: space-between; gap: 36px; }
.bb-inline-callout p { max-width: 710px; color: #293954; font-size: 17px; }
.bb-inline-links { display: flex; align-items: flex-start; flex-direction: column; min-width: 320px; }
.bb-inline-links .bb-editorial-link { margin-top: 4px; }
.bb-inline-links--center { align-items: center; flex-direction: row; justify-content: center; gap: 28px; flex-wrap: wrap; margin-top: 28px; }

/* Documents */
.bb-document-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); }
.bb-document-group { min-height: 300px; padding: 30px 30px 32px; background: var(--bb-white); border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); }
.bb-document-group h3 { font-size: 21px; }
.bb-document-group ul,
.bb-label-group ul { margin: 16px 0 0; padding: 0; list-style: none; }
.bb-document-group li,
.bb-label-group li { position: relative; padding: 5px 0 5px 16px; color: var(--bb-body); font-size: 16px; line-height: 1.45; }
.bb-document-group li:before,
.bb-label-group li:before { content: ""; position: absolute; left: 0; top: 14px; width: 5px; height: 5px; border-radius: 50%; background: var(--bb-blue-mid); }

/* Regulatory */
.bb-three-columns { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); }
.bb-column-section { padding: 30px 30px 22px 0; }
.bb-column-section + .bb-column-section { border-left: 1px solid var(--bb-border); padding-left: 30px; }
.bb-column-section h3 { font-size: 21px; }
.bb-regulatory-sequence { margin-top: 38px; min-height: 78px; padding: 18px 24px; border-radius: 18px; background: var(--bb-blue-pale); display: flex; align-items: center; justify-content: center; gap: 16px; color: var(--bb-blue-dark); }
.bb-regulatory-sequence span { font-size: 11px; font-weight: 700; letter-spacing: .09em; text-align: center; }
.bb-regulatory-sequence svg { width: 18px; height: 18px; }

/* Clinical */
.bb-split--clinical { grid-template-columns: .78fr 1.22fr; }
.bb-split--clinical > div:first-child h2 + p { margin-top: 18px; }
.bb-split--clinical > div:first-child p + p { margin-top: 14px; }
.bb-clinical-matrix { display: grid; grid-template-columns: 1fr 1fr; border-radius: 24px; overflow: hidden; border: 1px solid var(--bb-border); }
.bb-clinical-block { padding: 30px; background: var(--bb-white); }
.bb-clinical-block--accent { background: var(--bb-blue-pale); border-left: 1px solid var(--bb-border); }
.bb-clinical-block h3 { font-size: 21px; }

/* Labeling */
.bb-four-columns { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--bb-border); }
.bb-label-group { padding: 28px 28px 20px 0; }
.bb-label-group + .bb-label-group { padding-left: 28px; border-left: 1px solid var(--bb-border); }
.bb-label-group h3 { font-size: 20px; }
.bb-section-link { display: flex; justify-content: center; margin-top: 30px; }

/* PV / Market */
.bb-three-columns--divided .bb-column-section { padding-bottom: 5px; }
.bb-detail-note { max-width: 900px; margin: 28px auto 0 !important; text-align: center; color: #293954 !important; font-size: 17px !important; }
.bb-market-grid { border-top-color: var(--bb-border); }
.bb-market-column { padding: 31px 34px 10px 0; }
.bb-market-column + .bb-market-column { padding-left: 34px; border-left: 1px solid var(--bb-border); }
.bb-market-column h3 { font-size: 22px; }

/* Governance */
.bb-governance { background: var(--bb-navy); color: var(--bb-white); }
.bb-governance h2,
.bb-governance h3 { color: var(--bb-white); }
.bb-governance p { color: #D7E0F1; }
.bb-governance-head { max-width: 860px; }
.bb-governance-head h2 + p { margin-top: 18px; font-size: 18px; line-height: 1.65; }
.bb-governance-layout { margin-top: 48px; display: grid; grid-template-columns: 180px 1fr; gap: 46px; }
.bb-governance-rail { display: flex; flex-direction: column; align-items: flex-start; padding-top: 14px; }
.bb-governance-rail span { color: var(--bb-light-blue); font-size: 10px; font-weight: 700; letter-spacing: .13em; }
.bb-governance-rail i { width: 1px; height: 48px; margin: 8px 0 8px 3px; background: rgba(200,214,255,.32); }
.bb-governance-rows { border-top: 1px solid rgba(221,228,242,.25); }
.bb-governance-row { display: grid; grid-template-columns: 30px 1fr; gap: 22px; padding: 27px 0; border-bottom: 1px solid rgba(221,228,242,.22); }
.bb-governance-marker { width: 30px; padding-top: 11px; display: block; }
.bb-governance-marker i { display: block; width: 22px; height: 2px; border-radius: 999px; background: var(--bb-light-blue); opacity: .86; }
.bb-governance-row h3 { font-size: 21px; }
.bb-governance-row p { margin-top: 7px; }
.bb-governance-close { max-width: 840px; margin-top: 34px !important; color: var(--bb-white) !important; font-family: "Inter Tight", Inter, sans-serif; font-size: 22px !important; line-height: 1.55 !important; }

/* AI */
.bb-ai-flow { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); }
.bb-ai-step { position: relative; min-height: 230px; padding: 29px 31px 30px; background: var(--bb-white); border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); }
.bb-ai-number { display: block; margin-bottom: 14px; color: var(--bb-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .09em; }
.bb-ai-step h3 { font-size: 21px; }
.bb-ai-step p { margin-top: 9px; }
.bb-ai-arrow { position: absolute; right: -13px; top: 50%; transform: translateY(-50%); z-index: 2; width: 26px; height: 26px; border-radius: 50%; background: var(--bb-white); border: 1px solid var(--bb-border); display: flex; align-items: center; justify-content: center; color: var(--bb-blue-dark); }
.bb-ai-arrow svg { width: 15px; height: 15px; }
.bb-ai-step:nth-child(3) .bb-ai-arrow { display: none; }
.bb-inline-callout--ai { background: var(--bb-soft); border: 1px solid var(--bb-divider); }

/* Quality */
.bb-quality-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); background: var(--bb-white); }
.bb-quality-item { min-height: 220px; padding: 29px 30px; display: flex; gap: 17px; border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); }
.bb-quality-icon { width: 34px; min-width: 34px; height: 34px; color: var(--bb-blue-dark); }
.bb-quality-icon svg { width: 34px; height: 34px; }
.bb-quality-item h3 { font-size: 20px; }
.bb-quality-item p { margin-top: 8px; }

/* Reasons */
.bb-reasons-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); }
.bb-reason { padding: 29px 34px 30px 0; border-bottom: 1px solid var(--bb-border); }
.bb-reason:nth-child(3n + 2), .bb-reason:nth-child(3n + 3) { padding-left: 34px; border-left: 1px solid var(--bb-border); }
.bb-reason-mark { display: block; width: 34px; height: 2px; margin-bottom: 16px; border-radius: 999px; background: var(--bb-blue-mid); }
.bb-reason h3 { font-size: 21px; }
.bb-reason p { margin-top: 9px; }

/* Related */
.bb-related { background: var(--bb-soft); }
.bb-related-grid { display: grid; grid-template-columns: repeat(3, 1fr); border-top: 1px solid var(--bb-border); border-left: 1px solid var(--bb-border); }
.bb-related-item { min-height: 220px; padding: 28px 28px 25px; display: flex; align-items: flex-start; justify-content: space-between; gap: 22px; border-right: 1px solid var(--bb-border); border-bottom: 1px solid var(--bb-border); background: var(--bb-white); text-decoration: none; transition: background-color .18s ease; }
.bb-related-item:hover { background: var(--bb-blue-pale); }
.bb-related-item h3 { font-size: 20px; }
.bb-related-item p { margin-top: 9px; }
.bb-related-arrow { width: 26px; height: 26px; min-width: 26px; color: var(--bb-blue-dark); }
.bb-related-arrow svg { width: 22px; height: 22px; }

/* FAQ */
.bb-faq-shell { display: grid; grid-template-columns: .62fr 1.38fr; gap: 76px; align-items: start; }
.bb-faq-intro { position: sticky; top: 32px; }
.bb-faq-intro h2 + p { margin-top: 16px; }
.bb-faq-list { border-top: 1px solid var(--bb-border); }
.bb-faq-item { border-bottom: 1px solid var(--bb-border); }
.bb-faq-question { width: 100%; min-height: 76px; border: 0; padding: 21px 0; background: transparent; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; color: var(--bb-navy); cursor: pointer; font-family: "Inter Tight", Inter, sans-serif; font-size: 20px; font-weight: 500; line-height: 1.4; }
.bb-faq-icon { width: 34px; height: 34px; min-width: 34px; border: 1px solid var(--bb-border); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: var(--bb-blue-dark); }
.bb-faq-icon svg { width: 18px; height: 18px; }
.bb-faq-answer { padding: 0 50px 23px 0; }
.bb-faq-answer p { font-size: 16px; line-height: 1.68; }

/* Final CTA */
.bb-final-cta { padding: 78px 0; background: var(--bb-blue-deep); }
.bb-final-cta-inner { display: grid; grid-template-columns: 1.25fr .75fr; gap: 70px; align-items: center; }
.bb-final-cta h2 { color: var(--bb-white); max-width: 760px; }
.bb-final-cta p { margin-top: 16px; max-width: 790px; color: #DDE6FA; font-size: 17px; }
.bb-final-actions { display: flex; flex-direction: column; align-items: stretch; gap: 11px; justify-self: end; min-width: 270px; }

@media (max-width: 1100px) {
  .bb-shell { width: min(1280px, calc(100% - 80px)); }
  .bb-hero-grid { grid-template-columns: 1fr .82fr; gap: 38px; }
  .bb-lifecycle-grid { grid-template-columns: repeat(2, 1fr); }
  .bb-trust-grid { grid-template-columns: repeat(2, 1fr); }
  .bb-trust-item:nth-child(2) { border-right: 0; }
  .bb-trust-item:nth-child(-n+2) { border-bottom: 1px solid var(--bb-divider); }
  .bb-document-grid, .bb-cmc-grid, .bb-ai-flow, .bb-quality-grid, .bb-related-grid, .bb-reasons-grid { grid-template-columns: repeat(2, 1fr); }
  .bb-ai-step:nth-child(2) .bb-ai-arrow, .bb-ai-step:nth-child(4) .bb-ai-arrow { display: none; }
  .bb-ai-step:nth-child(3) .bb-ai-arrow { display: flex; }
  .bb-reason:nth-child(3n + 2), .bb-reason:nth-child(3n + 3) { padding-left: 0; border-left: 0; }
  .bb-reason:nth-child(even) { padding-left: 30px; border-left: 1px solid var(--bb-border); }
  .bb-evidence-diagram { grid-template-columns: 1fr 44px 1.8fr 44px 1fr; padding: 26px; }
}

@media (max-width: 900px) {
  .bb-shell { width: calc(100% - 58px); }
  .bb-section { padding: 78px 0; }
  .bb-hero { padding: 78px 0 72px; }
  .bb-hero-grid { grid-template-columns: 1fr; gap: 34px; }
  .bb-hero-copy { max-width: 760px; }
  .bb-hero-art { max-width: 660px; margin: 0 auto; }
  .bb-split, .bb-split--authority, .bb-split--intro, .bb-split--clinical, .bb-faq-shell { grid-template-columns: 1fr; gap: 42px; }
  .bb-sticky-copy, .bb-faq-intro { position: static; }
  .bb-dual-panel { grid-template-columns: 1fr; }
  .bb-program-panel + .bb-program-panel { border-left: 0; border-top: 1px solid var(--bb-border); }
  .bb-three-columns, .bb-four-columns { grid-template-columns: repeat(2, 1fr); }
  .bb-column-section:nth-child(3) { grid-column: 1 / -1; border-left: 0; border-top: 1px solid var(--bb-border); padding-left: 0; }
  .bb-label-group:nth-child(3) { border-left: 0; padding-left: 0; border-top: 1px solid var(--bb-border); padding-top: 28px; }
  .bb-label-group:nth-child(4) { border-top: 1px solid var(--bb-border); padding-top: 28px; }
  .bb-market-column:nth-child(3) { grid-column: 1 / -1; border-left: 0; border-top: 1px solid var(--bb-border); padding-left: 0; }
  .bb-governance-layout { grid-template-columns: 1fr; }
  .bb-governance-rail { flex-direction: row; align-items: center; gap: 7px; padding: 0; flex-wrap: wrap; }
  .bb-governance-rail i { width: 26px; height: 1px; margin: 0; }
  .bb-evidence-diagram { grid-template-columns: 1fr; gap: 12px; }
  .bb-evidence-connector { transform: rotate(90deg); min-height: 40px; }
  .bb-evidence-node { min-height: 115px; }
  .bb-regulatory-sequence { flex-wrap: wrap; }
  .bb-inline-callout { align-items: flex-start; flex-direction: column; }
  .bb-inline-links { min-width: 0; }
  .bb-final-cta-inner { grid-template-columns: 1fr; gap: 32px; }
  .bb-final-actions { justify-self: start; min-width: 260px; }
}

@media (max-width: 640px) {
  .bb-shell { width: calc(100% - 40px); }
  .bb-section { padding: 68px 0; }
  .bb-hero { padding: 68px 0 62px; }
  .sesen-biopharma-page h1 { font-size: 42px; }
  .sesen-biopharma-page h2 { font-size: 32px; }
  .sesen-biopharma-page h3 { font-size: 21px; }
  .bb-hero-lead { font-size: 18px !important; }
  .bb-hero-support, .bb-heading-group p, .bb-section-lead { font-size: 17px !important; }
  .bb-heading-group { margin-bottom: 36px; }
  .bb-heading-group--center:not(.bb-mobile-left-technical) h2 { text-align: center; }
  .bb-heading-group--center:not(.bb-mobile-left-technical) > p { text-align: left; }
  .bb-mobile-left-technical, .bb-mobile-left-technical h2, .bb-mobile-left-technical p { text-align: left !important; }
  .bb-mobile-center-heading { text-align: center !important; }
  .bb-button-row { flex-direction: column; align-items: stretch; }
  .bb-button { width: 100%; }
  .bb-hero-art { margin-top: 4px; max-width: 520px; }
  .bb-trust-grid { grid-template-columns: 1fr; }
  .bb-trust-item { border-right: 0; border-bottom: 1px solid var(--bb-divider); min-height: 0; padding: 22px 0; }
  .bb-trust-item:last-child { border-bottom: 0; }
  .bb-lifecycle-grid, .bb-document-grid, .bb-cmc-grid, .bb-ai-flow, .bb-quality-grid, .bb-related-grid, .bb-reasons-grid { grid-template-columns: 1fr; }
  .bb-lifecycle-item { min-height: 0; padding: 25px 22px 27px; }
  .bb-editorial-row { grid-template-columns: 1fr; gap: 9px; }
  .bb-comparability-grid { grid-template-columns: 1fr; column-gap: 0; }
  .bb-comparability-item { grid-template-columns: 34px 1fr; }
  .bb-dual-panel { border-radius: 22px; }
  .bb-program-panel { padding: 30px 24px; }
  .bb-evidence-diagram { padding: 19px; border-radius: 22px; }
  .bb-evidence-core { padding: 20px 15px; }
  .bb-evidence-labels { grid-template-columns: 1fr; }
  .bb-inline-callout { padding: 23px 22px; }
  .bb-three-columns, .bb-four-columns { grid-template-columns: 1fr; border-top: 1px solid var(--bb-border); }
  .bb-column-section, .bb-column-section + .bb-column-section, .bb-column-section:nth-child(3), .bb-market-column, .bb-market-column + .bb-market-column, .bb-market-column:nth-child(3), .bb-label-group, .bb-label-group + .bb-label-group, .bb-label-group:nth-child(3), .bb-label-group:nth-child(4) { grid-column: auto; padding: 26px 0; border-left: 0; border-top: 0; border-bottom: 1px solid var(--bb-border); }
  .bb-clinical-matrix { grid-template-columns: 1fr; }
  .bb-clinical-block--accent { border-left: 0; border-top: 1px solid var(--bb-border); }
  .bb-regulatory-sequence { align-items: flex-start; flex-direction: column; gap: 9px; }
  .bb-regulatory-sequence svg { transform: rotate(90deg); }
  .bb-inline-links--center { align-items: flex-start; flex-direction: column; gap: 6px; }
  .bb-detail-note { text-align: left; }
  .bb-governance-layout { gap: 30px; }
  .bb-governance-rail { display: none; }
  .bb-governance-row { grid-template-columns: 24px 1fr; gap: 14px; }
  .bb-governance-marker { width: 24px; }
  .bb-governance-marker i { width: 18px; }
  .bb-ai-step { min-height: 0; padding: 26px 22px 28px; }
  .bb-ai-arrow, .bb-ai-step:nth-child(3) .bb-ai-arrow { display: none !important; }
  .bb-quality-item { min-height: 0; padding: 25px 22px; }
  .bb-reason, .bb-reason:nth-child(even) { padding: 25px 0; border-left: 0; }
  .bb-related-item { min-height: 0; padding: 24px 20px; }
  .bb-faq-question { min-height: 72px; font-size: 19px; }
  .bb-faq-answer { padding-right: 0; }
  .bb-final-cta { padding: 68px 0; }
  .bb-final-actions { width: 100%; min-width: 0; }
}

@media (max-width: 360px) {
  .sesen-biopharma-page h1 { font-size: 38px; }
  .sesen-biopharma-page h2 { font-size: 30px; }
  .bb-hero-lead { font-size: 17px !important; }
  .bb-program-panel, .bb-clinical-block { padding-left: 20px; padding-right: 20px; }
}

@media (prefers-reduced-motion: reduce) {
  .sesen-biopharma-page *, .sesen-biopharma-page *::before, .sesen-biopharma-page *::after { scroll-behavior: auto !important; transition: none !important; animation: none !important; }
}
`;
