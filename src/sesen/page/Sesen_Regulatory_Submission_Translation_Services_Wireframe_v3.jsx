const URLS = {
  contactSales: "https://www.sesen.com/contact-sales/",
  quote: "https://www.sesen.com/get-a-quote/",
  regulatory: "https://www.sesen.com/regulatory-translation-services/",
  ctd: "https://www.sesen.com/ectd-ctd-translation-services/",
  formatting: "https://www.sesen.com/regulatory-submission-formatting/",
  cmc: "https://www.sesen.com/cmc-document-translation-services/",
  labeling: "https://www.sesen.com/drug-labeling-packaging-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  clinical: "https://www.sesen.com/clinical-trial-translation-services/",
  caseStudy: "https://www.sesen.com/resources/case-studies/regulatory-submission-translation-global-biopharma/",
  readiness: "https://www.sesen.com/resources/clinical-regulatory-knowledge/regulatory-submission-translation-readiness-checklist/",
  aiSubmission: "https://www.sesen.com/resources/ai-regulatory-insights/ai-submission-ready-regulatory-content/",
};

const workflow = [
  {
    title: "Submission Readiness",
    text: "Align submission type, target markets, languages, source status, milestones, review requirements, available references, and delivery specifications before multilingual production begins.",
  },
  {
    title: "Content & Reference Alignment",
    text: "Identify approved terminology, previous submissions, existing translations, current labeling, translation memory, study references, and other authoritative language assets.",
  },
  {
    title: "Terminology Governance",
    text: "Establish controlled product, compound, clinical, CMC, safety, and regulatory terminology that can be applied consistently across documents and languages.",
  },
  {
    title: "Specialized Translation",
    text: "Assign qualified life sciences linguists according to language pair, document type, subject matter, and intended regulatory use, with parallel workstreams where timelines require them.",
  },
  {
    title: "Regulatory & Linguistic Review",
    text: "Review meaning, terminology, consistency, completeness, and target-language quality, while integrating client, affiliate, medical, scientific, or in-country reviewers where required.",
  },
  {
    title: "Formatting & Technical Preparation",
    text: "Prepare multilingual content for the required document environment while preserving tables, headings, references, numbering, callouts, and other content relationships.",
  },
  {
    title: "Final Quality Assurance",
    text: "Check terminology, numbers, units, omissions, references, repeated content, formatting, version alignment, language completeness, and file integrity before delivery.",
  },
  {
    title: "Submission-Ready Delivery",
    text: "Reconcile final multilingual files against the agreed scope and organize deliverables for the client's required submission workflow and subsequent regulatory use.",
  },
];

const contentGroups = [
  {
    icon: "folder",
    title: "Applications & Regulatory Dossiers",
    text: "Multilingual support for major application pathways and supporting filing content.",
    items: ["IND", "NDA", "BLA", "ANDA", "MAA", "CTA", "IMPD", "Amendments, supplements, variations & renewals"],
  },
  {
    icon: "layers",
    title: "CTD & eCTD Content",
    text: "Connected translation support across the Common Technical Document framework.",
    items: ["Module 1 regional content", "Module 2 summaries", "Module 3 quality / CMC", "Module 4 nonclinical", "Module 5 clinical", "Quality Overall Summary (QOS)", "Supporting tables & references"],
    link: { label: "Explore CTD & eCTD Translation", href: URLS.ctd },
  },
  {
    icon: "clinical",
    title: "Clinical & Scientific Evidence",
    text: "Submission-related clinical and scientific documentation supporting safety and efficacy evidence.",
    items: ["Clinical study reports", "Study protocols", "Investigator brochures", "Clinical summaries", "Statistical documentation", "Supporting scientific reports"],
    link: { label: "Explore Clinical Trial Translation", href: URLS.clinical },
  },
  {
    icon: "flask",
    title: "CMC & Quality Content",
    text: "Specialized scientific and technical content where terminology continuity is especially important.",
    items: ["Manufacturing descriptions", "Specifications", "Analytical methods", "Validation documentation", "Formulation content", "Quality documentation"],
    link: { label: "Explore CMC Translation", href: URLS.cmc },
  },
  {
    icon: "label",
    title: "Product Information & Labeling",
    text: "Regulated product information that may evolve throughout regulatory review and lifecycle maintenance.",
    items: ["Prescribing information", "SmPCs", "PILs / package leaflets", "Package inserts", "Regulated product information", "Labeling updates"],
    link: { label: "Explore Labeling Translation", href: URLS.labeling },
  },
  {
    icon: "shield",
    title: "Safety & Risk Documentation",
    text: "Safety and risk-management content spanning clinical development, submission, and post-market activity.",
    items: ["RMPs", "DSURs", "PSURs / PBRERs", "Safety summaries", "Risk communication", "Supporting pharmacovigilance content"],
    link: { label: "Explore Pharmacovigilance Translation", href: URLS.pharmacovigilance },
  },
  {
    icon: "message",
    title: "Health Authority Communications & Lifecycle Content",
    text: "Language continuity for the regulatory interactions and updates that follow the initial filing.",
    items: ["Authority questions", "Requests for information", "Deficiency responses", "Clarification packages", "Amendments & variations", "Updated submission content"],
  },
];

const ctdModules = [
  ["1", "Administrative & Regional", "Region-specific content, forms, product information, and administrative documentation."],
  ["2", "Summaries & Overviews", "Quality, nonclinical, and clinical summaries that synthesize information found elsewhere in the dossier."],
  ["3", "Quality / CMC", "Drug substance, drug product, manufacturing, controls, specifications, methods, stability, and related quality content."],
  ["4", "Nonclinical", "Nonclinical study reports and supporting pharmacology, pharmacokinetic, and toxicology content."],
  ["5", "Clinical", "Clinical study reports and supporting evidence relating to safety, efficacy, and clinical development."],
];

const consistencyItems = [
  ["term", "Terminology Governance", "Document and apply approved product, clinical, scientific, CMC, safety, and regulatory terminology across the submission."],
  ["memory", "Translation Memory", "Identify and reuse previously translated and approved content where appropriate to improve continuity across recurring material."],
  ["reference", "Reference Alignment", "Bring prior submissions, approved labeling, glossaries, study documentation, and other authoritative references into the workflow."],
  ["version", "Version Control", "Maintain awareness of revised source documents, rolling updates, and multilingual files as submission content evolves."],
  ["review", "Reviewer Decisions", "Capture approved feedback so later documents and updates can benefit from language decisions already made."],
  ["qa", "Cross-Document QA", "Check recurring terminology, numbers, units, references, and repeated content across related files before delivery."],
];

const orchestration = [
  ["plan", "Submission-Level Planning", "Define multilingual scope, target markets, languages, dependencies, references, review requirements, and milestones at the program level."],
  ["parallel", "Parallel Workstreams", "Coordinate multiple documents and languages simultaneously while maintaining common terminology and quality controls."],
  ["version", "Rolling Source Updates", "Manage revised source files and staged releases without restarting the language process each time content changes."],
  ["review", "Reviewer Coordination", "Integrate regulatory, medical, scientific, affiliate, linguistic, and in-country review into structured feedback cycles."],
  ["term", "Terminology Control", "Maintain approved terminology and reviewer decisions across teams, files, versions, and languages."],
  ["visibility", "Program Visibility", "Keep teams informed about what is in translation, review, revision, formatting, QA, or ready for delivery."],
  ["check", "Final Reconciliation", "Reconcile agreed deliverables before completion so required files and languages are accounted for."],
];

const regions = [
  ["North America", "FDA · Health Canada"],
  ["Europe", "EMA · EU/EEA national authorities · MHRA · Swissmedic"],
  ["Asia-Pacific", "PMDA · NMPA · MFDS · TGA"],
  ["Latin America", "ANVISA · COFEPRIS · INVIMA · other national authorities"],
  ["Middle East & Global Markets", "Arabic and other required languages aligned with market and regulatory workflow needs"],
];

const postSubmission = [
  ["Initial Submission", "Terminology, translations, references, and language assets are established."],
  ["Authority Review", "Questions and comments can introduce new regulatory content and new timelines."],
  ["Response Package", "New language needs to remain consistent with the original dossier while accurately reflecting the response."],
  ["Updated Content", "Supporting documents, summaries, labeling, or submission sections may require revision."],
  ["Approved Language Assets", "Accepted terminology and reviewer decisions can be retained for future use."],
  ["Lifecycle Updates", "Variations, supplements, renewals, safety updates, and other changes continue the content lifecycle."],
];

const technology = [
  ["reuse", "Controlled Content Reuse", "Identify existing approved translations and recurring content that can be reused appropriately to improve consistency and reduce avoidable rework."],
  ["term", "Terminology Intelligence", "Apply approved product, clinical, scientific, CMC, safety, and regulatory terminology consistently across large document sets."],
  ["ai", "AI-Assisted Quality Checks", "Use automation and AI-assisted analysis to help flag potential issues involving terminology, numbers, units, completeness, repeated content, formatting, and references."],
  ["version", "Version-Aware Workflows", "Use translation memory and controlled language assets to manage rolling source releases, revisions, and recurring submission content."],
];

const quality = [
  ["certificate", "ISO-Certified Quality", "Sesen maintains ISO 17100, ISO 9001, and ISO 13485 certifications supporting its quality framework for life sciences translation."],
  ["expert", "Specialized Life Sciences Linguists", "Linguists are selected according to language, subject matter, content type, and project requirements."],
  ["review", "Independent Review", "Where included in the workflow, a second qualified professional reviews meaning, terminology, consistency, completeness, and target-language quality."],
  ["term", "Terminology & Reference Controls", "Approved terminology, prior translations, reference content, and reviewer decisions can be incorporated into the translation environment."],
  ["version", "Version Traceability", "Structured project workflows help maintain continuity as source files and multilingual deliverables evolve."],
  ["lock", "Secure Project Workflows", "Controlled file handling, access management, confidentiality practices, and documented project processes support sensitive regulatory content."],
];

const relatedServices = [
  ["Regulatory Translation Services", "Broader multilingual support across regulatory submissions, labeling, health authority communication, quality systems, and lifecycle content.", URLS.regulatory],
  ["CTD & eCTD Translation Services", "Specialized multilingual support across CTD modules, summaries, CMC, nonclinical, clinical, and region-specific content.", URLS.ctd],
  ["Regulatory Submission Formatting", "Technical preparation and multilingual formatting support for regulatory files and submission-related documentation.", URLS.formatting],
  ["CMC Translation Services", "Specialized translation for chemistry, manufacturing, controls, analytical, validation, quality, and related technical content.", URLS.cmc],
  ["Drug Labeling & Packaging Translation", "Translation and localization of prescribing information, SmPCs, PILs, package inserts, labels, packaging, and lifecycle updates.", URLS.labeling],
  ["Pharmacovigilance Translation Services", "Multilingual support for safety narratives, DSURs, PSURs/PBRERs, RMPs, risk communication, and drug-safety content.", URLS.pharmacovigilance],
];

const resources = [
  {
    tag: "Regulatory Readiness",
    title: "Regulatory Submission Translation Readiness Checklist",
    text: "Practical guidance for defining language scope, source readiness, terminology, review requirements, formatting, target markets, and delivery expectations before translation begins.",
    href: URLS.readiness,
  },
  {
    tag: "AI & Regulatory Operations",
    title: "AI and Submission-Ready Regulatory Content",
    text: "Explore how AI-assisted workflows can support terminology, consistency, QA, content reuse, and multilingual preparation while maintaining structured professional review.",
    href: URLS.aiSubmission,
  },
];

const faqs = [
  {
    q: "What are regulatory submission translation services?",
    a: "Regulatory submission translation services support the multilingual content used to prepare, file, review, update, and maintain regulatory submissions for global markets. Depending on the program, this can include application documents, CTD/eCTD content, CMC documentation, clinical evidence, safety information, product information, labeling, health authority correspondence, amendments, and lifecycle updates. Sesen combines specialized life sciences translation with terminology governance, independent review, version control, formatting support, quality assurance, and centralized project management.",
  },
  {
    q: "Which regulatory submission types does Sesen support?",
    a: "Sesen supports multilingual content for a wide range of regulatory applications and dossiers, including INDs, NDAs, BLAs, ANDAs, MAAs, CTAs, IMPDs, amendments, supplements, variations, renewals, and related supporting documentation. The specific language and document scope depends on the product, market, submission pathway, regulatory procedure, and stage of the product lifecycle.",
  },
  {
    q: "Does Sesen translate CTD and eCTD content?",
    a: "Yes. Sesen supports multilingual content across CTD/eCTD Modules 1–5, including administrative and regional information, summaries and overviews, CMC and quality documentation, nonclinical content, clinical content, and supporting submission materials.",
    link: { label: "CTD & eCTD Translation Services", href: URLS.ctd },
  },
  {
    q: "How does Sesen maintain terminology across regulatory submission documents?",
    a: "Sesen can align approved client glossaries, terminology databases, translation memories, previous submissions, existing translations, labeling, study references, and reviewer decisions before and during production. Controlled terminology is then applied across relevant documents and languages, while QA processes help identify potential inconsistencies in recurring terms and related content.",
  },
  {
    q: "Can Sesen support rolling submissions and source-document updates?",
    a: "Yes. Regulatory documents often change while multilingual work is already underway. Sesen can manage revised source files, rolling releases, and subsequent updates through version-aware workflows designed to retain approved terminology, translated content, reference materials, and prior reviewer decisions wherever appropriate.",
  },
  {
    q: "Can our internal regulatory or in-country reviewers participate in the translation process?",
    a: "Yes. Sesen can incorporate client regulatory teams, medical and scientific reviewers, local affiliates, and in-country reviewers into structured review workflows. Approved feedback can be captured and applied consistently to related content so reviewer decisions continue to inform subsequent documents and updates.",
  },
  {
    q: "Can Sesen support health authority questions and response packages?",
    a: "Yes. Sesen can support multilingual health authority correspondence, requests for information, deficiency responses, clarification packages, amendments, updated submission content, and related regulatory communications. When Sesen has supported the original submission, existing terminology, translation memory, references, and approved reviewer decisions can help maintain continuity during subsequent authority interactions.",
  },
  {
    q: "Does Sesen provide regulatory submission formatting?",
    a: "Yes. Sesen supports multilingual formatting and technical document preparation so translated content remains usable in the required document environment. More complex formatting requirements can be supported through Sesen's dedicated regulatory submission formatting service.",
    link: { label: "Regulatory Submission Formatting", href: URLS.formatting },
  },
  {
    q: "How does Sesen use AI in regulatory submission translation?",
    a: "Sesen uses AI and automation selectively to support functions such as terminology analysis, content reuse, consistency checking, quality assurance, and workflow efficiency. For regulated content, AI does not replace professional linguistic judgment. Qualified life sciences linguists and reviewers remain responsible for contextual translation decisions, review, and final quality control.",
  },
  {
    q: "How does Sesen manage consistency across large multilingual submissions?",
    a: "Sesen combines submission-level project management with controlled terminology, translation memory, authoritative reference materials, version management, reviewer feedback, and cross-document quality checks. These controls help keep recurring terminology, numbers, units, references, study identifiers, and other shared content aligned as documents move through translation, review, revision, and delivery.",
  },
  {
    q: "Can Sesen handle multilingual submissions with compressed timelines?",
    a: "Yes. Depending on the scope and source readiness, Sesen can organize parallel language and document workstreams to support time-sensitive regulatory programs. Early planning is especially important because terminology preparation, reference alignment, reviewer availability, source-document changes, formatting, and QA can affect the critical path.",
  },
  {
    q: "Which languages does Sesen support for regulatory submissions?",
    a: "Sesen supports regulatory translation in 150+ languages, including major European, Asian, Latin American, Middle Eastern, Nordic, and Central and Eastern European languages. Language teams are aligned according to the target market, subject matter, content type, and project requirements.",
  },
  {
    q: "What should we provide before starting a regulatory submission translation project?",
    a: "Helpful inputs include the submission type and intended markets, target languages, document inventory, source files and expected updates, regulatory timeline, existing translations, approved terminology or glossaries, current labeling or product information, relevant previous submissions, internal or in-country review requirements, and formatting and delivery specifications. For complex submissions, Sesen can review the available materials with your team and help define an appropriate multilingual workflow before production begins.",
  },
];

function Icon({ name, size = 22, strokeWidth = 1.8 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const paths = {
    arrow: <><path d="M5 12h14" /><path d="m14 7 5 5-5 5" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    folder: <><path d="M3.5 7.5h6l2 2h9v9.5a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 19z" /><path d="M3.5 7.5V5.8A1.3 1.3 0 0 1 4.8 4.5h5.4l2 2h6.5a1.8 1.8 0 0 1 1.8 1.8v1.2" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 16 9 5 9-5" /></>,
    clinical: <><path d="M7 4h10v16H7z" /><path d="M9.5 8h5" /><path d="M12 11v5" /><path d="M9.5 13.5h5" /></>,
    flask: <><path d="M9 3h6" /><path d="M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 18l-5-9V3" /><path d="M7.5 15h9" /></>,
    label: <><path d="M3.5 12V5.5h6.5L20.5 16 16 20.5z" /><path d="M7.5 9h.01" /></>,
    shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6z" /><path d="m9 12 2 2 4-5" /></>,
    message: <><path d="M4 5h16v11H8l-4 4z" /><path d="M8 9h8" /><path d="M8 12h5" /></>,
    term: <><path d="M4 5h16" /><path d="M8 5v14" /><path d="M4 19h8" /><path d="m15 16 2-5 2 5" /><path d="M15.8 14h2.4" /></>,
    memory: <><rect x="5" y="5" width="14" height="14" rx="2" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><path d="M9 9h6v6H9z" /></>,
    reference: <><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4" /><path d="M9 11h6M9 15h6" /></>,
    version: <><path d="M20 12a8 8 0 1 1-2.3-5.7" /><path d="M20 4v6h-6" /><path d="M12 8v5l3 2" /></>,
    review: <><circle cx="10" cy="10" r="5" /><path d="m14 14 5 5" /><path d="m8 10 1.5 1.5L12 8.5" /></>,
    qa: <><path d="M6 3h9l3 3v15H6z" /><path d="M15 3v4h4" /><path d="m9 14 2 2 4-5" /></>,
    plan: <><rect x="5" y="4" width="14" height="16" rx="2" /><path d="M9 2v4M15 2v4M8 10h8M8 14h5" /></>,
    parallel: <><path d="M4 7h10" /><path d="m11 4 3 3-3 3" /><path d="M20 17H10" /><path d="m13 14-3 3 3 3" /></>,
    visibility: <><path d="M2.5 12s3.5-5 9.5-5 9.5 5 9.5 5-3.5 5-9.5 5-9.5-5-9.5-5" /><circle cx="12" cy="12" r="2.5" /></>,
    reuse: <><path d="M7 7h11v11" /><path d="m18 7-4-4" /><path d="m18 7-4 4" /><path d="M17 17H6V6" /></>,
    ai: <><rect x="5" y="5" width="14" height="14" rx="3" /><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" /><path d="M9 14V10a2 2 0 0 1 4 0v4M9 12h4M16 10v4" /></>,
    certificate: <><path d="M7 3h10v12H7z" /><path d="m9 21 3-3 3 3v-6H9z" /><path d="m9.5 9 1.5 1.5 3-3" /></>,
    expert: <><circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /><path d="m17.5 5 .7 1.4 1.6.2-1.1 1.1.3 1.6-1.5-.8-1.4.8.3-1.6-1.1-1.1 1.6-.2z" /></>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /><path d="M12 14v3" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></>,
  };

  return <svg {...common}>{paths[name] || paths.check}</svg>;
}

function Button({ href, secondary = false, children }) {
  return (
    <a className={`rs-btn ${secondary ? "rs-btn-secondary" : "rs-btn-primary"}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={2} />
    </a>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="rs-editorial-link" href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={16} strokeWidth={2} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="rs-hero-art" aria-label="Illustration of a coordinated multilingual regulatory submission workflow" role="img">
      <svg viewBox="0 0 620 500" aria-hidden="true">
        <defs>
          <linearGradient id="rsDoc" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#F5F7FF" />
          </linearGradient>
          <linearGradient id="rsBlue" x1="0" x2="1">
            <stop offset="0" stopColor="#4B6FD8" />
            <stop offset="1" stopColor="#3659BB" />
          </linearGradient>
          <filter id="rsShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#17264D" floodOpacity="0.10" />
          </filter>
        </defs>
        <circle cx="330" cy="240" r="190" fill="#F5F7FF" />
        <circle cx="330" cy="240" r="145" fill="none" stroke="#DDE4F2" strokeWidth="1.5" strokeDasharray="5 9" />

        <g filter="url(#rsShadow)">
          <rect x="185" y="85" width="250" height="320" rx="26" fill="url(#rsDoc)" stroke="#DDE4F2" strokeWidth="1.5" />
          <rect x="212" y="115" width="196" height="48" rx="14" fill="#EAF0FF" />
          <rect x="232" y="133" width="88" height="10" rx="5" fill="#4B6FD8" opacity="0.88" />
          <rect x="328" y="133" width="58" height="10" rx="5" fill="#9CACD0" opacity="0.6" />

          <g>
            <rect x="220" y="188" width="168" height="34" rx="10" fill="#FFFFFF" stroke="#DDE4F2" />
            <rect x="220" y="230" width="168" height="34" rx="10" fill="#FFFFFF" stroke="#DDE4F2" />
            <rect x="220" y="272" width="168" height="34" rx="10" fill="#FFFFFF" stroke="#DDE4F2" />
            <rect x="220" y="314" width="168" height="34" rx="10" fill="#FFFFFF" stroke="#DDE4F2" />
            <rect x="220" y="356" width="168" height="34" rx="10" fill="#FFFFFF" stroke="#DDE4F2" />
            <circle cx="242" cy="205" r="9" fill="#EAF0FF" stroke="#4B6FD8" />
            <circle cx="242" cy="247" r="9" fill="#EAF0FF" stroke="#4B6FD8" />
            <circle cx="242" cy="289" r="9" fill="#EAF0FF" stroke="#4B6FD8" />
            <circle cx="242" cy="331" r="9" fill="#EAF0FF" stroke="#4B6FD8" />
            <circle cx="242" cy="373" r="9" fill="#EAF0FF" stroke="#4B6FD8" />
            <path d="M265 205h94M265 247h78M265 289h99M265 331h83M265 373h91" stroke="#9EABC1" strokeWidth="5" strokeLinecap="round" opacity="0.55" />
          </g>
        </g>

        <g>
          <circle cx="102" cy="166" r="43" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <path d="M86 159h32M86 170h24" stroke="#3659BB" strokeWidth="4" strokeLinecap="round" />
          <path d="M145 177C170 185 179 194 195 210" stroke="#6F8BE1" strokeWidth="2" fill="none" />
          <circle cx="518" cy="145" r="44" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <path d="m504 146 9 9 19-22" stroke="#3659BB" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M482 171C462 185 450 201 432 223" stroke="#6F8BE1" strokeWidth="2" fill="none" />
          <circle cx="507" cy="351" r="43" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <circle cx="507" cy="351" r="19" fill="none" stroke="#4B6FD8" strokeWidth="3" />
          <path d="M488 351h38M507 332a29 29 0 0 1 0 38M507 332a29 29 0 0 0 0 38" stroke="#4B6FD8" strokeWidth="2" fill="none" />
          <path d="M469 335C450 329 440 323 426 314" stroke="#6F8BE1" strokeWidth="2" fill="none" />
        </g>

        <g transform="translate(57 306)">
          <rect width="130" height="70" rx="18" fill="#17264D" />
          <rect x="18" y="19" width="58" height="7" rx="3.5" fill="#C8D6FF" />
          <rect x="18" y="34" width="92" height="6" rx="3" fill="#FFFFFF" opacity="0.72" />
          <rect x="18" y="48" width="72" height="6" rx="3" fill="#FFFFFF" opacity="0.42" />
        </g>

        <circle cx="153" cy="87" r="8" fill="#4B6FD8" opacity="0.75" />
        <circle cx="500" cy="244" r="6" fill="#6F8BE1" opacity="0.7" />
        <circle cx="109" cy="248" r="5" fill="#6F8BE1" opacity="0.5" />
        <path d="M140 86C180 65 220 56 262 57" stroke="#DDE4F2" strokeWidth="2" fill="none" />
        <path d="M497 244C471 242 453 247 435 255" stroke="#DDE4F2" strokeWidth="2" fill="none" />
      </svg>
    </div>
  );
}

function SectionHeading({ id, title, intro, centered = false, mobileCenter = false }) {
  return (
    <div className={`rs-heading ${centered ? "rs-heading-centered" : ""} ${mobileCenter ? "rs-mobile-center" : ""}`}>
      <h2 id={id}>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}

export default function SesenRegulatorySubmissionTranslationServicesWireframeV3() {
  return (
    <main className="rs-page">
      <style>{styles}</style>

      <section className="rs-hero" aria-labelledby="rs-page-title">
        <div className="rs-shell rs-hero-grid">
          <div className="rs-hero-copy">
            <p className="rs-eyebrow">Life Sciences Regulatory Services</p>
            <h1 id="rs-page-title">Regulatory Submission Translation Services</h1>
            <p className="rs-hero-lead">
              Specialized multilingual support for global regulatory submissions—from source-content readiness and terminology governance through translation, review, formatting, QA, and submission-ready delivery.
            </p>
            <p className="rs-hero-body">
              Sesen helps pharmaceutical, biotechnology, and life sciences organizations keep complex submission content accurate, consistent, controlled, and connected across documents, languages, versions, and health authority interactions.
            </p>
            <div className="rs-button-row">
              <Button href={URLS.contactSales}>TALK WITH TEAM SESEN</Button>
              <Button href={URLS.quote} secondary>REQUEST A QUOTE</Button>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="rs-trust" aria-label="Sesen regulatory translation credentials">
        <div className="rs-shell rs-trust-grid">
          {[
            ["Life Sciences", "Specialized"],
            ["ISO 17100", "Certified"],
            ["ISO 9001 & ISO 13485", "Certified"],
            ["150+", "Languages"],
          ].map(([top, bottom]) => (
            <div className="rs-trust-item" key={top}>
              <strong>{top}</strong>
              <span>{bottom}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rs-section rs-overview" aria-labelledby="rs-overview-title">
        <div className="rs-shell rs-overview-grid">
          <div>
            <SectionHeading
              id="rs-overview-title"
              title="A Regulatory Submission Is More Than a Collection of Documents"
              mobileCenter
            />
          </div>
          <div className="rs-overview-copy">
            <p className="rs-lead-copy">
              Regulatory submissions bring together scientific, clinical, quality, manufacturing, safety, administrative, and product information that must tell a consistent story.
            </p>
            <p>
              Product names, study identifiers, endpoints, units, CMC terminology, safety language, references, abbreviations, and approved wording can recur throughout a dossier. When materials are translated independently without coordinated controls, inconsistencies can multiply across documents and languages.
            </p>
            <p>
              Sesen approaches regulatory submission translation at the <strong>submission level</strong>—aligning terminology, source references, prior translations, language assets, versions, and reviewer decisions so multilingual content remains connected as a complete body of regulatory evidence.
            </p>
            <EditorialLink href={URLS.regulatory}>Explore Regulatory Translation Services</EditorialLink>
          </div>
        </div>

        <div className="rs-shell rs-connected-band">
          <div className="rs-connected-intro">
            <span className="rs-kicker">ONE SUBMISSION</span>
            <strong>Thousands of connected language decisions.</strong>
          </div>
          <div className="rs-connected-grid">
            {[
              ["Terminology", "Align product, clinical, CMC, safety, and regulatory terms."],
              ["References", "Use approved translations and authoritative language assets."],
              ["Versions", "Maintain continuity as source content changes."],
              ["Review", "Capture approved decisions for later documents and updates."],
            ].map(([title, text]) => (
              <div className="rs-connected-item" key={title}>
                <span className="rs-dot" aria-hidden="true" />
                <div><strong>{title}</strong><p>{text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-workflow-section" aria-labelledby="rs-workflow-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-workflow-title"
            title="From Source Content to Submission-Ready Delivery"
            intro="A controlled multilingual submission workflow connects people, terminology, content, versions, review, formatting, and delivery requirements from the beginning."
          />

          <div className="rs-workflow" role="list" aria-label="Regulatory submission translation workflow">
            {workflow.map((step, index) => (
              <article className="rs-workflow-step" key={step.title} role="listitem">
                <div className="rs-step-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="rs-step-copy">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {index === 5 ? <EditorialLink href={URLS.formatting}>Regulatory Submission Formatting</EditorialLink> : null}
                </div>
              </article>
            ))}
          </div>

          <div className="rs-workflow-continuity" aria-label="Post-submission continuity">
            <span>Authority Questions</span><Icon name="arrow" size={16} />
            <span>Clarifications</span><Icon name="arrow" size={16} />
            <span>Amendments</span><Icon name="arrow" size={16} />
            <span>Updated Content</span><Icon name="arrow" size={16} />
            <span>Lifecycle Maintenance</span>
          </div>
        </div>
      </section>

      <section className="rs-section rs-content-section" aria-labelledby="rs-content-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-content-title"
            title="Multilingual Support Across the Regulatory Submission"
            intro="Sesen supports the document categories that bring scientific evidence, product quality, clinical data, safety information, and market-specific requirements together within global regulatory programs."
            centered
            mobileCenter
          />

          <div className="rs-content-list">
            {contentGroups.map((group) => (
              <article className="rs-content-row" key={group.title}>
                <div className="rs-content-heading">
                  <div className="rs-icon-box"><Icon name={group.icon} /></div>
                  <div>
                    <h3>{group.title}</h3>
                  </div>
                </div>
                <div className="rs-content-body">
                  <p>{group.text}</p>
                  <ul className="rs-inline-list">
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {group.link ? <EditorialLink href={group.link.href}>{group.link.label}</EditorialLink> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-ctd-section" aria-labelledby="rs-ctd-title">
        <div className="rs-shell">
          <div className="rs-ctd-top">
            <SectionHeading
              id="rs-ctd-title"
              title="Maintain Alignment Across CTD and eCTD Content"
              intro="CTD modules are structurally distinct but scientifically and linguistically interconnected. Sesen helps maintain terminology, references, study identifiers, units, conclusions, and approved wording across the dossier."
            />
            <div className="rs-ctd-link"><EditorialLink href={URLS.ctd}>Explore CTD & eCTD Translation</EditorialLink></div>
          </div>

          <div className="rs-ctd-modules">
            {ctdModules.map(([number, title, text]) => (
              <article className="rs-ctd-module" key={number}>
                <div className="rs-module-number">Module {number}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="rs-ctd-bridge">
            <span>Product terminology</span><span>Study identifiers</span><span>Manufacturing terms</span><span>Endpoints</span><span>Units & references</span>
          </div>
        </div>
      </section>

      <section className="rs-section rs-consistency-section" aria-labelledby="rs-consistency-title">
        <div className="rs-shell rs-consistency-grid">
          <div className="rs-consistency-copy">
            <SectionHeading
              id="rs-consistency-title"
              title="One Submission. Connected Language Decisions."
              intro="Regulatory content can evolve over years and involve authors, functions, affiliates, reviewers, vendors, markets, and multiple submission cycles. Maintaining consistency requires a connected language system—not isolated file handling."
              mobileCenter
            />
            <div className="rs-consistency-outcome">
              <Icon name="check" size={20} strokeWidth={2.2} />
              <p><strong>The goal:</strong> a multilingual submission that reads as a coordinated body of regulatory work rather than a series of independently translated documents.</p>
            </div>
          </div>

          <div className="rs-consistency-visual">
            <div className="rs-hub">
              <span>Controlled</span>
              <strong>Language Assets</strong>
              <small>Terminology · references · approved decisions</small>
            </div>
            <div className="rs-hub-orbit" aria-hidden="true" />
            {['Module summaries','CMC','Clinical','Safety','Labeling','Authority responses'].map((item, index) => (
              <div className={`rs-hub-node rs-hub-node-${index + 1}`} key={item}>{item}</div>
            ))}
          </div>
        </div>

        <div className="rs-shell rs-consistency-list">
          {consistencyItems.map(([icon, title, text]) => (
            <article key={title}>
              <div className="rs-icon-line"><Icon name={icon} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="rs-section rs-orchestration-section" aria-labelledby="rs-orchestration-title">
        <div className="rs-shell rs-orchestration-grid">
          <div className="rs-orchestration-sticky">
            <SectionHeading
              id="rs-orchestration-title"
              title="Coordinate the Multilingual Submission as One Program"
              intro="Large submissions can contain hundreds of documents, multiple source releases, parallel language workstreams, compressed milestones, and reviewers across functions and regions."
            />
            <p className="rs-orchestration-note">
              For complex programs, Sesen can serve as the central multilingual coordination layer connecting regulated content, professional linguists, reviewers, language assets, and delivery requirements.
            </p>
          </div>
          <div className="rs-orchestration-list">
            {orchestration.map(([icon, title, text]) => (
              <article key={title}>
                <div className="rs-orchestration-icon"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-market-section" aria-labelledby="rs-market-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-market-title"
            title="Support for Global Regulatory Markets"
            intro="Translation requirements can vary by product, market, submission pathway, content type, procedure, and stage of the regulatory lifecycle. Sesen configures multilingual support around the intended submission environment rather than applying one generic process to every jurisdiction."
            centered
            mobileCenter
          />
          <div className="rs-market-panel">
            <div className="rs-market-globe"><Icon name="globe" size={62} strokeWidth={1.25} /></div>
            <div className="rs-region-list">
              {regions.map(([region, authorities]) => (
                <div className="rs-region" key={region}>
                  <strong>{region}</strong>
                  <span>{authorities}</span>
                </div>
              ))}
            </div>
          </div>
          <p className="rs-market-note">Sesen aligns the multilingual scope with your regulatory team, target market, submission pathway, document set, intended use, and applicable language requirements.</p>
        </div>
      </section>

      <section className="rs-section rs-lifecycle-section" aria-labelledby="rs-lifecycle-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-lifecycle-title"
            title="Stay Consistent Beyond the Initial Submission"
            intro="Health authority review can generate questions, requests for clarification, updated analyses, revised product information, deficiency responses, and other content that connects directly to the original filing."
            centered
            mobileCenter
          />
          <div className="rs-lifecycle-track">
            {postSubmission.map(([title, text], index) => (
              <article className="rs-lifecycle-step" key={title}>
                <div className="rs-lifecycle-node">{index + 1}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="rs-lifecycle-callout">
            <p>By maintaining terminology databases, translation memories, reference materials, reviewer decisions, and version history, Sesen can help preserve multilingual continuity from the initial submission into later regulatory interactions.</p>
          </div>
        </div>
      </section>

      <section className="rs-section rs-tech-section" aria-labelledby="rs-tech-title">
        <div className="rs-shell rs-tech-grid">
          <div className="rs-tech-copy">
            <SectionHeading
              id="rs-tech-title"
              title="Professional Regulatory Expertise, Supported by Intelligent Technology"
              intro="Technology can improve speed, consistency, and control across complex regulatory translation workflows, but regulated content still requires professional judgment."
              mobileCenter
            />
            <p>
              Sesen combines specialized life sciences linguists with translation technology, terminology management, quality automation, and AI-assisted workflows. AI supports the process; qualified human linguists and reviewers remain central to contextual decisions, review, and final quality control.
            </p>
          </div>
          <div className="rs-tech-list">
            {technology.map(([icon, title, text]) => (
              <article key={title}>
                <div className="rs-tech-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-quality-section" aria-labelledby="rs-quality-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-quality-title"
            title="Quality Controls Built for Regulated Content"
            intro="Sesen combines specialized life sciences expertise, documented quality workflows, terminology controls, review, secure project handling, and technology-enabled QA for multilingual regulatory content."
            centered
            mobileCenter
          />
          <div className="rs-quality-grid">
            {quality.map(([icon, title, text]) => (
              <article key={title}>
                <div className="rs-quality-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="rs-language-band">
            <div>
              <span className="rs-language-number">150+</span>
              <strong>Regulatory Translation Languages</strong>
            </div>
            <p>Sesen supports major European, Asian, Latin American, Middle Eastern, Nordic, and Central and Eastern European languages, with language teams aligned to the target market, subject matter, content type, and project requirements.</p>
          </div>
        </div>
      </section>

      <section className="rs-section rs-case-section" aria-labelledby="rs-case-title">
        <div className="rs-shell rs-case-panel">
          <div className="rs-case-mark" aria-hidden="true">
            <Icon name="layers" size={42} strokeWidth={1.45} />
          </div>
          <div className="rs-case-copy">
            <p className="rs-eyebrow">Case Study</p>
            <h2 id="rs-case-title">Multilingual Regulatory Submission Support for Global Biopharma</h2>
            <p>
              A global biopharmaceutical organization required coordinated multilingual support across a regulatory submission program. Sesen established a structured workflow combining specialized regulatory translation, terminology management, reference alignment, reviewer coordination, version control, quality assurance, and final formatting.
            </p>
            <p>
              The program shows how coordinated submission translation can keep language assets, reviewers, content versions, and production requirements connected throughout a complex multilingual filing.
            </p>
            <EditorialLink href={URLS.caseStudy}>Read the Regulatory Submission Case Study</EditorialLink>
          </div>
        </div>
      </section>

      <section className="rs-section rs-resources-section" aria-labelledby="rs-resources-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-resources-title"
            title="Regulatory Submission Resources"
            intro="Practical guidance for preparing, governing, reviewing, and maintaining multilingual regulatory content."
            centered
            mobileCenter
          />
          <div className="rs-resources-grid">
            {resources.map((resource) => (
              <article className="rs-resource" key={resource.title}>
                <span className="rs-resource-tag">{resource.tag}</span>
                <h3>{resource.title}</h3>
                <p>{resource.text}</p>
                <EditorialLink href={resource.href}>Read the Resource</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-related-section" aria-labelledby="rs-related-title">
        <div className="rs-shell">
          <SectionHeading
            id="rs-related-title"
            title="Related Regulatory Translation Services"
            intro="Connect submission translation with the broader clinical, regulatory, labeling, quality, and safety workflows that support the life sciences product lifecycle."
          />
          <div className="rs-related-list">
            {relatedServices.map(([title, text, href]) => (
              <a className="rs-related-row" href={href} key={title}>
                <div><h3>{title}</h3><p>{text}</p></div>
                <span className="rs-related-arrow"><Icon name="arrow" size={20} strokeWidth={2} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-section rs-faq-section" aria-labelledby="rs-faq-title">
        <div className="rs-shell rs-faq-grid">
          <div className="rs-faq-intro">
            <h2 id="rs-faq-title">Regulatory Submission Translation FAQs</h2>
            <p>Answers to common questions about submission types, CTD/eCTD content, terminology, reviewers, updates, AI-assisted workflows, formatting, timelines, and global language support.</p>
            <EditorialLink href={URLS.regulatory}>Explore Regulatory Translation Services</EditorialLink>
          </div>
          <div className="rs-faq-list">
            {faqs.map((item, index) => (
              <details className="rs-faq-item" key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="rs-faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="rs-faq-answer">
                  <p>{item.a}</p>
                  {item.link ? <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink> : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="rs-final-cta" aria-labelledby="rs-final-title">
        <div className="rs-shell rs-final-grid">
          <div>
            <h2 id="rs-final-title">Move Your Global Submission Forward With Confidence</h2>
            <p>
              Tell us about your submission type, target markets, languages, content, review process, existing language assets, formatting needs, and timeline. Sesen can help design the multilingual workflow around your regulatory program.
            </p>
          </div>
          <div className="rs-final-actions">
            <Button href={URLS.contactSales}>TALK WITH TEAM SESEN</Button>
            <Button href={URLS.quote} secondary>REQUEST A QUOTE</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .rs-page {
    --rs-blue: #4B6FD8;
    --rs-blue-dark: #3659BB;
    --rs-blue-deep: #253F8F;
    --rs-blue-mid: #6F8BE1;
    --rs-blue-soft: #EAF0FF;
    --rs-blue-pale: #F5F7FF;
    --rs-navy: #17264D;
    --rs-ink: #111827;
    --rs-body: #46546D;
    --rs-muted: #68758B;
    --rs-line: #DDE4F2;
    --rs-divider: #E9EEF8;
    --rs-surface: #F7F9FD;
    --rs-white: #FFFFFF;
    width: 100%;
    overflow: hidden;
    color: var(--rs-body);
    background: #FFFFFF;
    font-family: Inter, "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  }

  .rs-page *,
  .rs-page *::before,
  .rs-page *::after { box-sizing: border-box; }

  .rs-page a { color: inherit; }

  .rs-page .rs-shell {
    width: min(100%, 1280px);
    margin: 0 auto;
    padding-left: 56px;
    padding-right: 56px;
  }

  .rs-page .rs-section { padding: 96px 0; }

  .rs-page h1,
  .rs-page h2,
  .rs-page h3 {
    margin: 0;
    color: var(--rs-navy);
    font-family: "Inter Tight", Inter, "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-style: normal;
    font-weight: 500;
  }

  .rs-page h1 {
    max-width: 690px;
    font-size: 48px;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }

  .rs-page h2 { font-size: 36px; line-height: 1.3; }
  .rs-page h3 { font-size: 22px; line-height: 1.3; }

  .rs-page p {
    margin: 0;
    font-size: 16px;
    line-height: 1.72;
  }

  .rs-page .rs-eyebrow {
    margin-bottom: 16px !important;
    color: var(--rs-blue-dark);
    font-size: 11px !important;
    font-weight: 700;
    letter-spacing: .15em;
    line-height: 1.35 !important;
    text-transform: uppercase;
  }

  .rs-page .rs-heading { max-width: 780px; }
  .rs-page .rs-heading h2 + p { margin-top: 20px; max-width: 780px; font-size: 18px; line-height: 1.7; }
  .rs-page .rs-heading-centered { margin-left: auto; margin-right: auto; text-align: center; }
  .rs-page .rs-heading-centered h2 + p { margin-left: auto; margin-right: auto; }

  .rs-page .rs-btn {
    min-height: 50px;
    padding: 0 26px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: 1px solid transparent;
    border-radius: 999px;
    text-decoration: none;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    line-height: 1;
    transition: background-color .2s ease, border-color .2s ease, transform .2s ease;
  }
  .rs-page .rs-btn:hover { transform: translateY(-1px); }
  .rs-page .rs-btn:focus-visible,
  .rs-page .rs-editorial-link:focus-visible,
  .rs-page .rs-related-row:focus-visible,
  .rs-page .rs-faq-item summary:focus-visible { outline: 3px solid rgba(75,111,216,.34); outline-offset: 4px; }
  .rs-page .rs-btn-primary { background: var(--rs-blue); color: #FFFFFF !important; }
  .rs-page .rs-btn-primary:hover { background: var(--rs-blue-dark); }
  .rs-page .rs-btn-secondary { background: #FFFFFF; color: var(--rs-ink) !important; border-color: #C8D2E7; }
  .rs-page .rs-btn-secondary:hover { background: var(--rs-blue-pale); border-color: #AEBDE0; }

  .rs-page .rs-button-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }

  .rs-page .rs-editorial-link {
    margin-top: 16px;
    width: fit-content;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    color: var(--rs-blue-dark) !important;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.4;
    text-decoration: none;
  }
  .rs-page .rs-editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .rs-page .rs-editorial-link svg { transition: transform .2s ease; }
  .rs-page .rs-editorial-link:hover svg { transform: translateX(3px); }

  /* Hero */
  .rs-page .rs-hero {
    position: relative;
    padding: 96px 0 92px;
    background:
      radial-gradient(circle at 89% 16%, rgba(75,111,216,.11), transparent 28%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%);
  }
  .rs-page .rs-hero::after {
    content: "";
    position: absolute;
    right: -100px;
    bottom: -100px;
    width: 330px;
    height: 330px;
    border: 1px solid rgba(75,111,216,.08);
    border-radius: 50%;
    pointer-events: none;
  }
  .rs-page .rs-hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(390px, .96fr); gap: 64px; align-items: center; }
  .rs-page .rs-hero-copy { position: relative; z-index: 2; }
  .rs-page .rs-hero-lead { margin-top: 24px !important; max-width: 700px; color: #293954; font-size: 20px !important; line-height: 1.62 !important; }
  .rs-page .rs-hero-body { margin-top: 18px !important; max-width: 690px; font-size: 17px !important; }
  .rs-page .rs-hero-art { min-width: 0; display: flex; align-items: center; justify-content: center; }
  .rs-page .rs-hero-art svg { width: 100%; height: auto; display: block; }

  /* Trust */
  .rs-page .rs-trust { background: #FFFFFF; border-top: 1px solid var(--rs-divider); border-bottom: 1px solid var(--rs-divider); }
  .rs-page .rs-trust-grid { min-height: 94px; display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); align-items: center; }
  .rs-page .rs-trust-item { padding: 16px 30px; text-align: center; }
  .rs-page .rs-trust-item + .rs-trust-item { border-left: 1px solid var(--rs-divider); }
  .rs-page .rs-trust-item strong { display: block; color: var(--rs-navy); font-size: 17px; line-height: 1.25; }
  .rs-page .rs-trust-item span { display: block; margin-top: 5px; color: var(--rs-muted); font-size: 13px; line-height: 1.3; }

  /* Overview */
  .rs-page .rs-overview { background: #FFFFFF; }
  .rs-page .rs-overview-grid { display: grid; grid-template-columns: .88fr 1.12fr; gap: 92px; align-items: start; }
  .rs-page .rs-overview-copy { max-width: 720px; }
  .rs-page .rs-overview-copy p + p { margin-top: 18px; }
  .rs-page .rs-overview-copy strong { color: var(--rs-navy); }
  .rs-page .rs-lead-copy { color: #293954; font-size: 19px !important; line-height: 1.65 !important; }
  .rs-page .rs-connected-band { margin-top: 64px; display: grid; grid-template-columns: 1fr 2.2fr; gap: 54px; padding-top: 30px; padding-bottom: 30px; border-top: 1px solid var(--rs-line); border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-connected-intro { display: flex; flex-direction: column; justify-content: center; }
  .rs-page .rs-kicker { color: var(--rs-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .15em; }
  .rs-page .rs-connected-intro strong { margin-top: 8px; color: var(--rs-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; font-weight: 500; line-height: 1.35; }
  .rs-page .rs-connected-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px 36px; }
  .rs-page .rs-connected-item { display: grid; grid-template-columns: 11px 1fr; gap: 12px; align-items: start; }
  .rs-page .rs-connected-item .rs-dot { width: 8px; height: 8px; margin-top: 7px; border-radius: 50%; background: var(--rs-blue); box-shadow: 0 0 0 5px var(--rs-blue-soft); }
  .rs-page .rs-connected-item strong { color: var(--rs-navy); font-size: 16px; }
  .rs-page .rs-connected-item p { margin-top: 4px; color: var(--rs-muted); font-size: 16px !important; line-height: 1.6 !important; }

  /* Workflow */
  .rs-page .rs-workflow-section { background: var(--rs-surface); }
  .rs-page .rs-workflow-section .rs-heading { margin-bottom: 50px; }
  .rs-page .rs-workflow { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); border-top: 1px solid var(--rs-line); border-left: 1px solid var(--rs-line); background: #FFFFFF; }
  .rs-page .rs-workflow-step { min-width: 0; display: grid; grid-template-columns: 58px 1fr; gap: 18px; padding: 34px 34px 32px; border-right: 1px solid var(--rs-line); border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-step-number { padding-top: 2px; color: var(--rs-blue-dark); font-size: 13px; font-weight: 700; letter-spacing: .08em; }
  .rs-page .rs-step-copy h3 { font-size: 21px; }
  .rs-page .rs-step-copy p { margin-top: 10px; }
  .rs-page .rs-step-copy .rs-editorial-link { margin-top: 10px; }
  .rs-page .rs-workflow-continuity { margin-top: 26px; padding: 18px 24px; display: flex; align-items: center; justify-content: center; gap: 13px; flex-wrap: wrap; color: var(--rs-navy); background: var(--rs-blue-soft); border-radius: 18px; font-size: 16px; font-weight: 700; }
  .rs-page .rs-workflow-continuity svg { color: var(--rs-blue-dark); }

  /* Submission content */
  .rs-page .rs-content-section { background: #FFFFFF; }
  .rs-page .rs-content-section .rs-heading { margin-bottom: 50px; }
  .rs-page .rs-content-list { border-top: 1px solid var(--rs-line); }
  .rs-page .rs-content-row { display: grid; grid-template-columns: .9fr 1.35fr; gap: 60px; padding: 34px 0; border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-content-heading { display: grid; grid-template-columns: 48px 1fr; gap: 17px; align-items: start; }
  .rs-page .rs-icon-box { width: 44px; height: 44px; display: grid; place-items: center; color: var(--rs-blue-dark); background: var(--rs-blue-soft); border-radius: 12px; }
  .rs-page .rs-content-body > p { max-width: 720px; }
  .rs-page .rs-inline-list { margin: 17px 0 0; padding: 0; display: flex; flex-wrap: wrap; gap: 8px 9px; list-style: none; }
  .rs-page .rs-inline-list li { padding: 7px 11px; color: #36445E; background: #F8FAFD; border: 1px solid var(--rs-divider); border-radius: 999px; font-size: 16px; line-height: 1.25; }

  /* CTD */
  .rs-page .rs-ctd-section { background: var(--rs-blue-pale); }
  .rs-page .rs-ctd-top { display: flex; justify-content: space-between; gap: 50px; align-items: flex-end; }
  .rs-page .rs-ctd-top .rs-heading { max-width: 800px; }
  .rs-page .rs-ctd-link { padding-bottom: 6px; white-space: nowrap; }
  .rs-page .rs-ctd-modules { margin-top: 50px; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: stretch; }
  .rs-page .rs-ctd-module { min-width: 0; padding: 28px 22px 30px; background: #FFFFFF; border-top: 1px solid var(--rs-line); border-bottom: 1px solid var(--rs-line); border-left: 1px solid var(--rs-line); }
  .rs-page .rs-ctd-module:first-child { border-radius: 22px 0 0 22px; }
  .rs-page .rs-ctd-module:last-child { border-right: 1px solid var(--rs-line); border-radius: 0 22px 22px 0; }
  .rs-page .rs-module-number { color: var(--rs-blue-dark); font-size: 12px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .rs-page .rs-ctd-module h3 { margin-top: 12px; font-size: 19px; }
  .rs-page .rs-ctd-module p { margin-top: 10px; color: var(--rs-muted); font-size: 16px; line-height: 1.6; }
  .rs-page .rs-ctd-bridge { margin: 24px auto 0; width: fit-content; max-width: 100%; padding: 13px 18px; display: flex; justify-content: center; flex-wrap: wrap; gap: 8px 22px; color: var(--rs-navy); border-radius: 999px; background: #FFFFFF; border: 1px solid var(--rs-line); font-size: 16px; font-weight: 600; }
  .rs-page .rs-ctd-bridge span:not(:last-child)::after { content: "•"; margin-left: 22px; color: var(--rs-blue-mid); }

  /* Consistency */
  .rs-page .rs-consistency-section { background: #FFFFFF; }
  .rs-page .rs-consistency-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 72px; align-items: center; }
  .rs-page .rs-consistency-copy .rs-heading { max-width: 640px; }
  .rs-page .rs-consistency-outcome { margin-top: 28px; max-width: 640px; padding: 20px 22px; display: grid; grid-template-columns: 28px 1fr; gap: 12px; color: #293954; background: var(--rs-blue-pale); border-left: 2px solid var(--rs-blue); border-radius: 0 16px 16px 0; }
  .rs-page .rs-consistency-outcome svg { margin-top: 2px; color: var(--rs-blue-dark); }
  .rs-page .rs-consistency-outcome strong { color: var(--rs-navy); }
  .rs-page .rs-consistency-visual { position: relative; min-height: 430px; display: grid; place-items: center; }
  .rs-page .rs-hub-orbit { position: absolute; width: 340px; height: 340px; border: 1px dashed #C8D2E7; border-radius: 50%; }
  .rs-page .rs-hub { position: relative; z-index: 2; width: 190px; height: 190px; padding: 25px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #FFFFFF; border-radius: 50%; background: linear-gradient(145deg, var(--rs-navy), var(--rs-blue-deep)); box-shadow: 0 18px 44px rgba(23,38,77,.18); }
  .rs-page .rs-hub span { color: #C8D6FF; font-size: 11px; font-weight: 700; letter-spacing: .11em; text-transform: uppercase; }
  .rs-page .rs-hub strong { margin-top: 7px; font-family: "Inter Tight", Inter, sans-serif; font-size: 23px; font-weight: 500; line-height: 1.15; }
  .rs-page .rs-hub small { margin-top: 9px; color: rgba(255,255,255,.72); font-size: 11px; line-height: 1.35; }
  .rs-page .rs-hub-node { position: absolute; z-index: 3; min-width: 128px; padding: 11px 14px; text-align: center; color: var(--rs-navy); background: #FFFFFF; border: 1px solid var(--rs-line); border-radius: 999px; box-shadow: 0 8px 20px rgba(23,38,77,.07); font-size: 12px; font-weight: 700; }
  .rs-page .rs-hub-node-1 { top: 22px; left: 50%; transform: translateX(-50%); }
  .rs-page .rs-hub-node-2 { top: 103px; right: 10px; }
  .rs-page .rs-hub-node-3 { bottom: 91px; right: 8px; }
  .rs-page .rs-hub-node-4 { bottom: 20px; left: 50%; transform: translateX(-50%); }
  .rs-page .rs-hub-node-5 { bottom: 91px; left: 5px; }
  .rs-page .rs-hub-node-6 { top: 103px; left: 0; }
  .rs-page .rs-consistency-list { margin-top: 66px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--rs-line); border-left: 1px solid var(--rs-line); }
  .rs-page .rs-consistency-list article { padding: 28px; border-right: 1px solid var(--rs-line); border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-icon-line { width: 36px; height: 36px; display: grid; place-items: center; color: var(--rs-blue-dark); }
  .rs-page .rs-consistency-list h3 { margin-top: 11px; font-size: 19px; }
  .rs-page .rs-consistency-list p { margin-top: 8px; color: var(--rs-muted); }

  /* Orchestration */
  .rs-page .rs-orchestration-section { background: var(--rs-surface); }
  .rs-page .rs-orchestration-grid { display: grid; grid-template-columns: .82fr 1.18fr; gap: 84px; align-items: start; }
  .rs-page .rs-orchestration-sticky { position: sticky; top: 32px; }
  .rs-page .rs-orchestration-note { margin-top: 26px !important; padding-top: 24px; max-width: 560px; border-top: 1px solid var(--rs-line); color: #293954; font-size: 17px !important; }
  .rs-page .rs-orchestration-list { border-top: 1px solid var(--rs-line); }
  .rs-page .rs-orchestration-list article { display: grid; grid-template-columns: 48px 1fr; gap: 18px; padding: 28px 0; border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-orchestration-icon { width: 42px; height: 42px; display: grid; place-items: center; color: var(--rs-blue-dark); background: #FFFFFF; border: 1px solid var(--rs-line); border-radius: 12px; }
  .rs-page .rs-orchestration-list h3 { font-size: 20px; }
  .rs-page .rs-orchestration-list p { margin-top: 7px; }

  /* Markets */
  .rs-page .rs-market-section { background: #FFFFFF; }
  .rs-page .rs-market-section .rs-heading { max-width: 860px; }
  .rs-page .rs-market-panel { margin-top: 52px; display: grid; grid-template-columns: 240px 1fr; border: 1px solid var(--rs-line); border-radius: 28px; overflow: hidden; }
  .rs-page .rs-market-globe { display: grid; place-items: center; min-height: 330px; color: var(--rs-blue); background: linear-gradient(145deg, var(--rs-blue-pale), #EDF2FF); border-right: 1px solid var(--rs-line); }
  .rs-page .rs-region-list { padding: 12px 38px; }
  .rs-page .rs-region { display: grid; grid-template-columns: 220px 1fr; gap: 30px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--rs-divider); }
  .rs-page .rs-region:last-child { border-bottom: 0; }
  .rs-page .rs-region strong { color: var(--rs-navy); font-size: 16px; }
  .rs-page .rs-region span { color: var(--rs-muted); font-size: 16px; line-height: 1.55; }
  .rs-page .rs-market-note { margin: 22px auto 0 !important; max-width: 940px; text-align: center; color: var(--rs-muted); font-size: 16px !important; }

  /* Lifecycle */
  .rs-page .rs-lifecycle-section { background: var(--rs-blue-pale); }
  .rs-page .rs-lifecycle-section .rs-heading { max-width: 880px; }
  .rs-page .rs-lifecycle-track { margin-top: 54px; display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); align-items: start; }
  .rs-page .rs-lifecycle-step { position: relative; min-width: 0; padding: 0 15px; text-align: center; }
  .rs-page .rs-lifecycle-step::before { content: ""; position: absolute; z-index: 0; top: 22px; left: 0; width: 100%; height: 1px; background: #BCC9E8; }
  .rs-page .rs-lifecycle-step:first-child::before { left: 50%; width: 50%; }
  .rs-page .rs-lifecycle-step:last-child::before { width: 50%; }
  .rs-page .rs-lifecycle-node { position: relative; z-index: 2; margin: 0 auto; width: 44px; height: 44px; display: grid; place-items: center; color: #FFFFFF; background: var(--rs-blue); border: 6px solid var(--rs-blue-pale); border-radius: 50%; box-shadow: 0 0 0 1px #9FB1DD; font-size: 12px; font-weight: 700; }
  .rs-page .rs-lifecycle-step h3 { margin-top: 18px; font-size: 17px; }
  .rs-page .rs-lifecycle-step p { margin-top: 8px; color: var(--rs-muted); font-size: 16px; line-height: 1.58; }
  .rs-page .rs-lifecycle-callout { margin: 42px auto 0; max-width: 900px; padding: 23px 28px; text-align: center; color: #293954; background: #FFFFFF; border: 1px solid var(--rs-line); border-radius: 18px; }

  /* Technology */
  .rs-page .rs-tech-section { background: var(--rs-navy); color: #DCE4F7; }
  .rs-page .rs-tech-section .rs-heading h2 { color: #FFFFFF; }
  .rs-page .rs-tech-section .rs-heading > p { color: #C9D3E9; }
  .rs-page .rs-tech-grid { display: grid; grid-template-columns: .92fr 1.08fr; gap: 78px; align-items: start; }
  .rs-page .rs-tech-copy > p { margin-top: 24px; max-width: 610px; color: #CBD5E8; font-size: 17px; }
  .rs-page .rs-tech-list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
  .rs-page .rs-tech-list article { padding: 27px; background: rgba(255,255,255,.055); border: 1px solid rgba(200,214,255,.18); border-radius: 20px; }
  .rs-page .rs-tech-icon { width: 40px; height: 40px; display: grid; place-items: center; color: #C8D6FF; }
  .rs-page .rs-tech-list h3 { margin-top: 13px; color: #FFFFFF; font-size: 19px; }
  .rs-page .rs-tech-list p { margin-top: 9px; color: #C9D3E9; font-size: 16px; }

  /* Quality */
  .rs-page .rs-quality-section { background: #FFFFFF; }
  .rs-page .rs-quality-section .rs-heading { max-width: 830px; }
  .rs-page .rs-quality-grid { margin-top: 52px; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); border-top: 1px solid var(--rs-line); border-left: 1px solid var(--rs-line); }
  .rs-page .rs-quality-grid article { padding: 30px; border-right: 1px solid var(--rs-line); border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-quality-icon { width: 42px; height: 42px; display: grid; place-items: center; color: var(--rs-blue-dark); background: var(--rs-blue-soft); border-radius: 12px; }
  .rs-page .rs-quality-grid h3 { margin-top: 16px; font-size: 19px; }
  .rs-page .rs-quality-grid p { margin-top: 9px; color: var(--rs-muted); }
  .rs-page .rs-language-band { margin-top: 46px; padding: 30px 34px; display: grid; grid-template-columns: 280px 1fr; gap: 46px; align-items: center; background: var(--rs-surface); border-radius: 22px; }
  .rs-page .rs-language-band > div { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; align-self: center; gap: 16px; }
  .rs-page .rs-language-number { display: flex; align-items: center; min-height: 64px; color: var(--rs-blue-dark); font-family: "Inter Tight", Inter, sans-serif; font-size: 48px; font-weight: 500; line-height: 1; letter-spacing: -.5px; }
  .rs-page .rs-language-band strong { display: flex; align-items: center; min-height: 64px; max-width: 160px; color: var(--rs-navy); font-size: 16px; line-height: 1.35; }
  .rs-page .rs-language-band p { color: #46546D; }

  /* Case study */
  .rs-page .rs-case-section { padding-top: 82px; padding-bottom: 82px; background: var(--rs-blue-pale); }
  .rs-page .rs-case-panel { display: grid; grid-template-columns: 180px 1fr; gap: 54px; align-items: center; padding-top: 48px; padding-bottom: 48px; background: #FFFFFF; border: 1px solid var(--rs-line); border-radius: 28px; box-shadow: 0 14px 36px rgba(23,38,77,.06); }
  .rs-page .rs-case-mark { width: 150px; height: 150px; display: grid; place-items: center; color: var(--rs-blue); background: var(--rs-blue-soft); border-radius: 50%; }
  .rs-page .rs-case-copy { max-width: 840px; }
  .rs-page .rs-case-copy h2 { font-size: 34px; }
  .rs-page .rs-case-copy > p:not(.rs-eyebrow) { margin-top: 16px; }

  /* Resources */
  .rs-page .rs-resources-section { background: #FFFFFF; }
  .rs-page .rs-resources-section .rs-heading { max-width: 730px; }
  .rs-page .rs-resources-grid { margin-top: 48px; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 22px; }
  .rs-page .rs-resource { padding: 34px 36px; background: var(--rs-surface); border: 1px solid var(--rs-divider); border-radius: 24px; }
  .rs-page .rs-resource-tag { color: var(--rs-blue-dark); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  .rs-page .rs-resource h3 { margin-top: 11px; font-size: 24px; }
  .rs-page .rs-resource p { margin-top: 12px; }

  /* Related */
  .rs-page .rs-related-section { background: var(--rs-surface); }
  .rs-page .rs-related-section .rs-heading { margin-bottom: 42px; }
  .rs-page .rs-related-list { border-top: 1px solid var(--rs-line); }
  .rs-page .rs-related-row { min-height: 106px; padding: 25px 6px; display: grid; grid-template-columns: 1fr 44px; gap: 30px; align-items: center; border-bottom: 1px solid var(--rs-line); text-decoration: none; }
  .rs-page .rs-related-row h3 { font-size: 20px; }
  .rs-page .rs-related-row p { margin-top: 6px; max-width: 860px; color: var(--rs-muted); }
  .rs-page .rs-related-arrow { width: 42px; height: 42px; display: grid; place-items: center; color: var(--rs-blue-dark); border: 1px solid var(--rs-line); border-radius: 50%; transition: transform .2s ease, background-color .2s ease; }
  .rs-page .rs-related-row:hover .rs-related-arrow { transform: translateX(3px); background: var(--rs-blue-soft); }

  /* FAQ */
  .rs-page .rs-faq-section { background: #FFFFFF; }
  .rs-page .rs-faq-grid { display: grid; grid-template-columns: .72fr 1.28fr; gap: 82px; align-items: start; }
  .rs-page .rs-faq-intro { position: sticky; top: 32px; }
  .rs-page .rs-faq-intro > p { margin-top: 18px; max-width: 470px; }
  .rs-page .rs-faq-list { border-top: 1px solid var(--rs-line); }
  .rs-page .rs-faq-item { border-bottom: 1px solid var(--rs-line); }
  .rs-page .rs-faq-item summary { min-height: 76px; padding: 21px 0; display: grid; grid-template-columns: 1fr 34px; gap: 24px; align-items: center; color: var(--rs-navy); cursor: pointer; list-style: none; font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; font-weight: 500; line-height: 1.4; }
  .rs-page .rs-faq-item summary::-webkit-details-marker { display: none; }
  .rs-page .rs-faq-plus { width: 30px; height: 30px; display: grid; place-items: center; color: var(--rs-blue-dark); border: 1px solid var(--rs-line); border-radius: 50%; font-family: Inter, sans-serif; font-size: 20px; font-weight: 400; transition: transform .2s ease; }
  .rs-page .rs-faq-item[open] .rs-faq-plus { transform: rotate(45deg); }
  .rs-page .rs-faq-answer { padding: 0 54px 24px 0; }
  .rs-page .rs-faq-answer p { max-width: 820px; }
  .rs-page .rs-faq-answer .rs-editorial-link { margin-top: 10px; }

  /* Final CTA */
  .rs-page .rs-final-cta { padding: 76px 0; color: #DCE4F7; background: linear-gradient(115deg, var(--rs-blue-deep), var(--rs-blue-dark)); }
  .rs-page .rs-final-grid { display: grid; grid-template-columns: minmax(0, 1.2fr) minmax(370px, .8fr); gap: 70px; align-items: center; }
  .rs-page .rs-final-cta h2 { color: #FFFFFF; }
  .rs-page .rs-final-cta p { margin-top: 17px; max-width: 760px; color: #E4EAF8; font-size: 17px; }
  .rs-page .rs-final-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 12px; }
  .rs-page .rs-final-cta .rs-btn-primary { background: var(--rs-blue); color: #FFFFFF !important; border-color: rgba(255,255,255,.32); }
  .rs-page .rs-final-cta .rs-btn-primary:hover { background: #5D7FE0; }
  .rs-page .rs-final-cta .rs-btn-secondary { background: #FFFFFF; color: var(--rs-ink) !important; border-color: #FFFFFF; }
  .rs-page .rs-final-cta .rs-btn-secondary:hover { background: #F1F4FA; border-color: #F1F4FA; }

  @media (max-width: 1100px) {
    .rs-page .rs-shell { padding-left: 40px; padding-right: 40px; }
    .rs-page .rs-hero-grid { grid-template-columns: minmax(0, 1fr) minmax(350px, .8fr); gap: 38px; }
    .rs-page .rs-overview-grid { gap: 58px; }
    .rs-page .rs-ctd-modules { grid-template-columns: repeat(5, minmax(165px, 1fr)); overflow-x: auto; padding-bottom: 8px; }
    .rs-page .rs-ctd-module:first-child { border-radius: 20px 0 0 20px; }
    .rs-page .rs-ctd-module:last-child { border-radius: 0 20px 20px 0; }
    .rs-page .rs-consistency-grid { gap: 42px; }
    .rs-page .rs-hub-node-2 { right: 0; }
    .rs-page .rs-hub-node-3 { right: 0; }
    .rs-page .rs-hub-node-5 { left: 0; }
    .rs-page .rs-hub-node-6 { left: 0; }
    .rs-page .rs-orchestration-grid { gap: 56px; }
    .rs-page .rs-lifecycle-track { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 38px 0; }
    .rs-page .rs-lifecycle-step:nth-child(3)::before,
    .rs-page .rs-lifecycle-step:nth-child(6)::before { width: 50%; }
    .rs-page .rs-lifecycle-step:nth-child(4)::before { left: 50%; width: 50%; }
    .rs-page .rs-tech-grid { gap: 50px; }
    .rs-page .rs-faq-grid { gap: 54px; }
    .rs-page .rs-final-grid { grid-template-columns: 1fr; gap: 28px; }
    .rs-page .rs-final-actions { justify-content: flex-start; }
  }

  @media (max-width: 820px) {
    .rs-page .rs-shell { padding-left: 30px; padding-right: 30px; }
    .rs-page .rs-section { padding: 80px 0; }
    .rs-page .rs-hero { padding: 82px 0 76px; }
    .rs-page .rs-hero-grid { grid-template-columns: 1fr; }
    .rs-page .rs-hero-copy { max-width: 760px; }
    .rs-page .rs-hero-art { max-width: 560px; margin: 10px auto 0; }
    .rs-page .rs-trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .rs-page .rs-trust-item:nth-child(3) { border-left: 0; border-top: 1px solid var(--rs-divider); }
    .rs-page .rs-trust-item:nth-child(4) { border-top: 1px solid var(--rs-divider); }
    .rs-page .rs-overview-grid,
    .rs-page .rs-consistency-grid,
    .rs-page .rs-orchestration-grid,
    .rs-page .rs-tech-grid,
    .rs-page .rs-faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .rs-page .rs-connected-band { grid-template-columns: 1fr; gap: 28px; }
    .rs-page .rs-workflow { grid-template-columns: 1fr; }
    .rs-page .rs-content-row { grid-template-columns: 1fr; gap: 20px; }
    .rs-page .rs-ctd-top { display: block; }
    .rs-page .rs-ctd-link { margin-top: 18px; padding-bottom: 0; white-space: normal; }
    .rs-page .rs-ctd-modules { grid-template-columns: repeat(2, minmax(0, 1fr)); overflow: visible; gap: 12px; padding-bottom: 0; }
    .rs-page .rs-ctd-module,
    .rs-page .rs-ctd-module:first-child,
    .rs-page .rs-ctd-module:last-child { border: 1px solid var(--rs-line); border-radius: 16px; }
    .rs-page .rs-ctd-module:last-child { grid-column: 1 / -1; }
    .rs-page .rs-consistency-visual { max-width: 620px; width: 100%; margin: 0 auto; }
    .rs-page .rs-consistency-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .rs-page .rs-orchestration-sticky,
    .rs-page .rs-faq-intro { position: static; }
    .rs-page .rs-market-panel { grid-template-columns: 170px 1fr; }
    .rs-page .rs-market-globe { min-height: 360px; }
    .rs-page .rs-region { grid-template-columns: 165px 1fr; }
    .rs-page .rs-tech-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .rs-page .rs-quality-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .rs-page .rs-language-band { grid-template-columns: 220px 1fr; }
    .rs-page .rs-case-panel { grid-template-columns: 130px 1fr; gap: 36px; }
    .rs-page .rs-case-mark { width: 120px; height: 120px; }
    .rs-page .rs-resources-grid { grid-template-columns: 1fr; }
  }

  @media (max-width: 600px) {
    .rs-page .rs-shell { padding-left: 20px; padding-right: 20px; }
    .rs-page .rs-section { padding: 68px 0; }
    .rs-page h1 { font-size: 42px; line-height: 1.28; }
    .rs-page h2 { font-size: 32px; line-height: 1.3; }
    .rs-page h3 { line-height: 1.32; }
    .rs-page .rs-heading h2 + p { font-size: 17px; }
    .rs-page .rs-mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
    .rs-page .rs-mobile-center h2 + p { text-align: left; }
    .rs-page .rs-hero { padding: 70px 0 64px; }
    .rs-page .rs-hero-lead { font-size: 18px !important; }
    .rs-page .rs-hero-body { font-size: 16px !important; }
    .rs-page .rs-button-row { flex-direction: column; }
    .rs-page .rs-button-row .rs-btn { width: 100%; }
    .rs-page .rs-hero-art { margin-top: 4px; }
    .rs-page .rs-trust-grid { grid-template-columns: 1fr 1fr; }
    .rs-page .rs-trust-item { padding: 16px 8px; }
    .rs-page .rs-connected-grid { grid-template-columns: 1fr; }
    .rs-page .rs-workflow-step { grid-template-columns: 42px 1fr; gap: 10px; padding: 25px 20px; }
    .rs-page .rs-workflow-continuity { justify-content: flex-start; border-radius: 14px; }
    .rs-page .rs-workflow-continuity svg { transform: rotate(90deg); }
    .rs-page .rs-content-section .rs-heading,
    .rs-page .rs-lifecycle-section .rs-heading { margin-left: 0; margin-right: 0; text-align: left; }
    .rs-page .rs-content-section .rs-heading > p,
    .rs-page .rs-lifecycle-section .rs-heading > p { margin-left: 0; margin-right: 0; text-align: left; }
    .rs-page .rs-content-row { padding: 28px 0; }
    .rs-page .rs-content-heading { grid-template-columns: 44px 1fr; }
    .rs-page .rs-inline-list { gap: 7px; }
    .rs-page .rs-inline-list li { font-size: 16px; }
    .rs-page .rs-ctd-modules { grid-template-columns: 1fr; overflow: visible; gap: 12px; }
    .rs-page .rs-ctd-module,
    .rs-page .rs-ctd-module:first-child,
    .rs-page .rs-ctd-module:last-child { grid-column: auto; border: 1px solid var(--rs-line); border-radius: 16px; }
    .rs-page .rs-ctd-bridge { border-radius: 16px; justify-content: flex-start; }
    .rs-page .rs-ctd-bridge span:not(:last-child)::after { content: none; }
    .rs-page .rs-consistency-visual { min-height: 0; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; place-items: stretch; }
    .rs-page .rs-hub-orbit { display: none; }
    .rs-page .rs-hub { grid-column: 1 / -1; position: relative; width: 164px; height: 164px; margin: 0 auto 14px; }
    .rs-page .rs-hub strong { font-size: 20px; }
    .rs-page .rs-hub-node,
    .rs-page .rs-hub-node-1,
    .rs-page .rs-hub-node-2,
    .rs-page .rs-hub-node-3,
    .rs-page .rs-hub-node-4,
    .rs-page .rs-hub-node-5,
    .rs-page .rs-hub-node-6 { position: static; min-width: 0; max-width: none; width: 100%; padding: 10px 9px; transform: none; box-shadow: none; font-size: 12px; line-height: 1.35; }
    .rs-page .rs-consistency-list { grid-template-columns: 1fr; }
    .rs-page .rs-orchestration-list article { grid-template-columns: 44px 1fr; gap: 14px; }
    .rs-page .rs-market-panel { grid-template-columns: 1fr; }
    .rs-page .rs-market-globe { min-height: 130px; border-right: 0; border-bottom: 1px solid var(--rs-line); }
    .rs-page .rs-region-list { padding: 4px 20px; }
    .rs-page .rs-region { grid-template-columns: 1fr; gap: 6px; padding: 20px 0; }
    .rs-page .rs-market-note { text-align: left; }
    .rs-page .rs-lifecycle-track { grid-template-columns: 1fr; gap: 0; margin-top: 42px; }
    .rs-page .rs-lifecycle-step { padding: 0 0 26px 66px; text-align: left; min-height: 116px; }
    .rs-page .rs-lifecycle-step::before,
    .rs-page .rs-lifecycle-step:first-child::before,
    .rs-page .rs-lifecycle-step:last-child::before,
    .rs-page .rs-lifecycle-step:nth-child(3)::before,
    .rs-page .rs-lifecycle-step:nth-child(4)::before,
    .rs-page .rs-lifecycle-step:nth-child(6)::before { top: 0; left: 22px; width: 1px; height: 100%; background: #BCC9E8; }
    .rs-page .rs-lifecycle-step:last-child::before { height: 44px; }
    .rs-page .rs-lifecycle-node { position: absolute; left: 0; top: 0; }
    .rs-page .rs-lifecycle-step h3 { margin-top: 0; padding-top: 5px; }
    .rs-page .rs-lifecycle-callout { text-align: left; }
    .rs-page .rs-tech-list { grid-template-columns: 1fr; }
    .rs-page .rs-quality-grid { grid-template-columns: 1fr; }
    .rs-page .rs-language-band { grid-template-columns: 1fr; gap: 18px; padding: 26px 24px; }
    .rs-page .rs-language-band > div { grid-template-columns: auto minmax(0, 1fr); align-items: center; }
    .rs-page .rs-language-number { font-size: 44px; }
    .rs-page .rs-case-panel { display: block; padding-top: 34px; padding-bottom: 34px; }
    .rs-page .rs-case-mark { width: 92px; height: 92px; margin: 0 auto 28px; }
    .rs-page .rs-case-copy .rs-eyebrow,
    .rs-page .rs-case-copy h2 { text-align: center; }
    .rs-page .rs-case-copy h2 { font-size: 30px; }
    .rs-page .rs-resource { padding: 28px 24px; }
    .rs-page .rs-related-section .rs-heading { text-align: left; }
    .rs-page .rs-related-row { grid-template-columns: 1fr 38px; gap: 18px; padding: 23px 0; }
    .rs-page .rs-faq-answer { padding-right: 0; }
    .rs-page .rs-faq-item summary { font-size: 18px; }
    .rs-page .rs-final-cta { padding: 66px 0; }
    .rs-page .rs-final-cta h2 { text-align: center; }
    .rs-page .rs-final-actions { flex-direction: column; }
    .rs-page .rs-final-actions .rs-btn { width: 100%; }
  }

  @media (max-width: 360px) {
    .rs-page h1 { font-size: 38px; }
    .rs-page h2 { font-size: 30px; }
    .rs-page .rs-trust-grid { grid-template-columns: 1fr; }
    .rs-page .rs-language-band > div { grid-template-columns: 1fr; gap: 8px; align-items: start; }
    .rs-page .rs-language-number,
    .rs-page .rs-language-band strong { min-height: 0; }
    .rs-page .rs-language-band strong { max-width: none; }
    .rs-page .rs-trust-item + .rs-trust-item { border-left: 0; border-top: 1px solid var(--rs-divider); }
    .rs-page .rs-connected-band { margin-top: 48px; }
    .rs-page .rs-workflow-step { grid-template-columns: 1fr; }
    .rs-page .rs-step-number { padding-top: 0; }
    .rs-page .rs-content-heading { grid-template-columns: 1fr; }
    .rs-page .rs-hub { width: 148px; height: 148px; padding: 18px; }
    .rs-page .rs-hub span { font-size: 9px; }
    .rs-page .rs-hub strong { font-size: 18px; }
    .rs-page .rs-hub small { font-size: 9px; }
    .rs-page .rs-hub-node { font-size: 11px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .rs-page .rs-btn,
    .rs-page .rs-editorial-link svg,
    .rs-page .rs-related-arrow,
    .rs-page .rs-faq-plus { transition: none; }
  }`;
