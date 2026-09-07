const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";

const links = {
  clinicalTrial: "https://www.sesen.com/clinical-trial-translation-services/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
  regulatorySubmission: "https://www.sesen.com/regulatory-submission-translation-services/",
  linguisticValidation: "https://www.sesen.com/linguistic-validation-services/",
  ecoa: "https://www.sesen.com/ecoa-translation-services/",
  icf: "https://www.sesen.com/informed-consent-form-translation-services/",
  protocol: "https://www.sesen.com/protocol-translation-services/",
  ib: "https://www.sesen.com/investigators-brochure-translation-services/",
  csr: "https://www.sesen.com/clinical-study-report-translation-services/",
  pharmacovigilance: "https://www.sesen.com/pharmacovigilance-translation-services/",
  pro: "https://www.sesen.com/clinical-trial-translation-services/pro-questionnaire-translations/",
  diary: "https://www.sesen.com/clinical-trial-translation-services/patient-diary-translations/",
  siteTraining: "https://www.sesen.com/clinical-trial-translation-services/site-training-materials-translation/",
  medicalSoftware: "https://www.sesen.com/clinical-medical-software-localization-services/",
  plainLanguage: "https://www.sesen.com/plain-language-summary-translation-services/",
  elearning: "https://www.sesen.com/elearning-training-translation-services/",
  rareDisease: "https://www.sesen.com/rare-disease-translation-services/",
  immunology: "https://www.sesen.com/immunology-autoimmune-translation-services/",
  cellGene: "https://www.sesen.com/cell-gene-therapy-translation-services/",
  mrnaRna: "https://www.sesen.com/mrna-rna-translation-services/",
  biopharma: "https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/",
};

const assessmentTypes = [
  {
    icon: "person",
    title: "Patient-Reported Outcomes",
    body: "Translate PRO and ePRO instruments that capture symptoms, function, treatment experience, quality of life, and other information reported directly by participants.",
  },
  {
    icon: "clinical",
    title: "Clinician-Reported Outcomes",
    body: "Support ClinRO instruments, rating scales, examination content, and administration guidance used by trained healthcare professionals or investigators.",
  },
  {
    icon: "caregiver",
    title: "Observer-Reported Outcomes",
    body: "Translate ObsRO content used by caregivers, parents, or other observers when patients cannot fully report aspects of their own condition.",
  },
  {
    icon: "activity",
    title: "Performance Outcomes",
    body: "Support PerfO measures and instructions involving standardized tasks designed to assess cognitive, physical, or functional performance.",
  },
  {
    icon: "brain",
    title: "Cognitive & Functional Assessments",
    body: "Manage language for neuropsychological, cognitive, behavioral, motor, functional, and disease-specific instruments where wording and administration context matter.",
  },
  {
    icon: "device",
    title: "eCOA & Digital Assessments",
    body: "Prepare assessments for electronic delivery while accounting for response options, interface constraints, instructions, context, and multilingual implementation.",
  },
];

const diseaseGroups = [
  {
    title: "Neurodegenerative Diseases",
    tags: ["Alzheimer's disease", "Parkinson's disease", "ALS", "Huntington's disease", "Dementia-related disorders"],
    body: "Support content spanning disease staging, cognition, function, motor symptoms, biomarkers, caregiver observations, long-term progression, safety, and patient communication.",
  },
  {
    title: "Epilepsy & Seizure Disorders",
    tags: ["Seizure frequency", "Patient diaries", "Caregiver reporting", "eCOA", "Safety"],
    body: "Translate content involving seizure frequency and severity, patient and caregiver reporting, diaries, eCOA, medication instructions, clinical assessments, and adverse-event reporting.",
  },
  {
    title: "Multiple Sclerosis & Neuroimmunology",
    tags: ["Disease activity", "Relapses", "Imaging", "Biomarkers", "Patient outcomes"],
    body: "Support multilingual content involving neurological function, relapses, disease activity, imaging, biomarkers, patient outcomes, and immune-mediated disease mechanisms.",
    link: { label: "Immunology & Autoimmune Translation Services", href: links.immunology },
  },
  {
    title: "Neuromuscular & Genetic Neurological Disorders",
    tags: ["Motor function", "Genetics", "Pediatric populations", "Caregiver participation", "Long-term follow-up"],
    body: "Support inherited neurological and neuromuscular disease programs involving specialized genetic terminology, motor function, caregiver participation, pediatric populations, and emerging therapeutic approaches.",
    link: { label: "Rare Disease Translation Services", href: links.rareDisease },
  },
  {
    title: "Movement Disorders",
    tags: ["Motor assessments", "ClinRO", "PerfO", "Functional measures"],
    body: "Translate clinician-rated scales, motor and functional assessments, patient-reported content, study documentation, training materials, and related content for movement-disorder programs.",
  },
  {
    title: "Migraine, Headache & Neurological Pain",
    tags: ["Symptom reporting", "Frequency", "Severity", "Quality of life", "Patient diaries"],
    body: "Support symptom diaries, frequency and severity measures, patient-reported outcomes, quality-of-life instruments, study instructions, clinical content, and patient communications.",
  },
  {
    title: "Cerebrovascular & Other Neurological Conditions",
    tags: ["Neurological function", "Clinical assessments", "Patient communication", "Regulatory content"],
    body: "Support specialized neurological content across a broader range of CNS development programs, with workflows adapted to the disease area, document type, audience, and intended use.",
  },
  {
    title: "Neuropsychiatric CNS Programs",
    tags: ["Cognition", "Behavior", "Psychiatric symptoms", "Neurobehavioral outcomes"],
    body: "Support selected CNS programs involving cognition, behavior, psychiatric symptoms, or neurobehavioral outcomes through specialized assessments, patient content, clinical documentation, and related multilingual communications.",
  },
];

const evidenceStreams = [
  {
    icon: "dna",
    title: "Molecular & Genetic Evidence",
    body: "Genomic, biomarker, mechanism-of-action, target, pathway, and molecular content for specialized neurological development programs.",
  },
  {
    icon: "scan",
    title: "Imaging & Biomarkers",
    body: "Imaging endpoints, laboratory biomarkers, diagnostic concepts, disease staging, and related clinical documentation.",
  },
  {
    icon: "clipboard",
    title: "Clinical Assessments",
    body: "Neurological examinations, rating scales, clinician observations, cognitive assessments, motor measures, and functional endpoints.",
  },
  {
    icon: "people",
    title: "Patient & Caregiver Experience",
    body: "Symptom reports, quality-of-life measures, diaries, questionnaires, caregiver observations, and other patient-centered evidence.",
  },
  {
    icon: "steps",
    title: "Functional Outcomes",
    body: "Assessments of cognition, movement, communication, daily activities, and other functional outcomes.",
  },
];

const raterRows = [
  ["Rater Manuals & Reference Guides", "Administration procedures, definitions, scoring guidance, examples, reference criteria, and related instructions."],
  ["Site Training Materials", "Investigator presentations, training modules, quick-reference materials, certification content, study manuals, and ongoing training updates."],
  ["Assessment Instructions", "Participant-facing, administrator-facing, and system-based instructions aligned with approved assessment terminology."],
  ["Version-Controlled Updates", "Amendments and revisions coordinated so multilingual sites can move to updated content without losing terminology continuity."],
  ["Reviewer Alignment", "Approved sponsor, clinician, instrument-owner, or in-country reviewer decisions captured and applied consistently where appropriate."],
];

const digitalItems = [
  ["eCOA & ePRO", "Questions, response scales, instructions, reminders, labels, and supporting content for electronic clinical outcome assessments."],
  ["Mobile & Web-Based Study Tools", "Participant and clinician interfaces localized with attention to screen space, navigation, context, consistency, and approved clinical terminology."],
  ["Remote Assessment Instructions", "Clear multilingual instructions for study activities performed outside traditional sites."],
  ["Wearables & Connected Technologies", "User-facing instructions, supporting documentation, study communications, and related digital content where connected technologies are part of the clinical workflow."],
  ["In-Context Quality Review", "Translated language evaluated where participants and study teams will actually see it, not only as isolated text."],
];

const modalityItems = [
  ["Small Molecules", "Established pharmacological approaches remain important across neurological and CNS development programs."],
  ["Biologics & Monoclonal Antibodies", "Specialized scientific, clinical, safety, and patient language around biologic mechanisms, biomarkers, and administration."],
  ["Gene Therapy & Genome Editing", "Genetic variants, vectors, molecular targets, eligibility criteria, long-term follow-up, and complex patient communication."],
  ["Antisense & RNA-Based Therapies", "Specialized nucleic-acid terminology, disease mechanisms, precision strategies, and patient-facing explanations."],
  ["Biomarker-Guided Development", "Terminology connecting molecular evidence, imaging, disease staging, selection criteria, and clinical outcomes."],
];

const lifecycleStages = [
  {
    phase: "Study Design",
    items: ["Protocols", "Synopses", "Investigator's Brochures", "Scientific & development content"],
    links: [
      ["Protocol Translation", links.protocol],
      ["Investigator's Brochure Translation", links.ib],
    ],
  },
  {
    phase: "Patient & Site Execution",
    items: ["Informed consent forms", "Patient & caregiver materials", "Recruitment content", "Site & rater training"],
    links: [["ICF Translation", links.icf]],
  },
  {
    phase: "Clinical Outcome Measurement",
    items: ["COA & eCOA", "Questionnaires & rating scales", "Patient diaries", "Cognitive & functional assessments"],
    links: [
      ["PRO & Questionnaire Translation", links.pro],
      ["Patient Diary Translation", links.diary],
    ],
  },
  {
    phase: "Safety",
    items: ["Adverse-event content", "Case narratives", "Safety reports", "Risk-management and investigator communications"],
    links: [["Pharmacovigilance Translation", links.pharmacovigilance]],
  },
  {
    phase: "Study Reporting",
    items: ["Clinical study reports", "Narratives", "Tables, figures & appendices", "Plain-language study results"],
    links: [
      ["Clinical Study Report Translation", links.csr],
      ["Plain Language Summary Translation", links.plainLanguage],
    ],
  },
  {
    phase: "Regulatory Submission",
    items: ["CTD / eCTD content", "Health-authority responses", "Submission documentation", "Product information where relevant"],
    links: [["Regulatory Submission Translation", links.regulatorySubmission]],
  },
  {
    phase: "Medical & Scientific Communication",
    items: ["Scientific communication", "Medical education", "Publications", "HCP and patient communication"],
    links: [["Medical & Scientific Translation", links.medicalScientific]],
  },
];

const terminologyItems = [
  "Disease names & stages",
  "Anatomy & symptoms",
  "Biomarkers & imaging terms",
  "Endpoint & assessment names",
  "Scoring & administration terminology",
  "Investigational product language",
  "Mechanisms of action",
  "Dosing & safety concepts",
  "Genetic terminology",
  "Approved translations & reviewer decisions",
];

const workflowSteps = [
  ["Content & Context Review", "Review the CNS indication, intended audience and use, source content, languages, existing terminology, file formats, and downstream requirements."],
  ["CNS Terminology Preparation", "Identify established disease terminology, assessment names, product language, reference translations, glossaries, and approved resources."],
  ["Specialized Translation", "Assign professional linguistic resources appropriate to the language pair and neurological, medical, clinical, scientific, or regulatory requirements."],
  ["Independent Linguistic Review", "Where required, a qualified second professional reviews accuracy, completeness, terminology, consistency, and communication."],
  ["Clinical & Contextual QA", "Check translated content against related study materials, terminology, quantitative information, instructions, response structures, and context."],
  ["Validation or Implementation", "Add linguistic validation, harmonization, cognitive debriefing, eCOA implementation, software localization, DTP, or in-context review where appropriate."],
  ["Technology-Assisted QA", "Use structured checks to help identify terminology inconsistencies, numerical issues, omissions, formatting problems, and repeated-content deviations."],
  ["Final Quality Control & Delivery", "Review completed multilingual content against project requirements and prepare version-controlled deliverables for clinical, regulatory, patient, scientific, or digital use."],
];

const qualityItems = [
  ["Linguistic Accuracy", "Preserve source meaning, terminology, nuance, instructions, qualifications, and clinical intent."],
  ["Clinical Consistency", "Align disease concepts, endpoints, assessments, procedures, product terminology, and related study language."],
  ["Numerical Accuracy", "Check doses, units, measurements, timepoints, percentages, scoring ranges, frequencies, dates, tables, and other quantitative information."],
  ["Terminology Control", "Apply approved terminology consistently across documents, languages, study phases, and revisions."],
  ["Contextual Accuracy", "Review how translated content works within questionnaires, forms, eCOA screens, tables, diagrams, training assets, and formatted deliverables."],
  ["Completeness & Version Integrity", "Check for omissions and untranslated content while managing amendments so updated language does not disrupt approved content unnecessarily."],
];

const globalItems = [
  ["150+ Languages", "Global language coverage for study populations, sites, regulators, patients, caregivers, and healthcare professionals."],
  ["Centralized Program Management", "Coordinate related CNS content through consistent workflows, terminology resources, review decisions, and project governance."],
  ["Reusable Linguistic Assets", "Build translation memory, glossaries, approved-language resources, and reference libraries that grow with the program."],
  ["Coordinated Updates", "Manage protocol amendments, assessment revisions, safety changes, training updates, and other evolving content across languages."],
];

const relatedAreas = [
  {
    title: "Rare Disease",
    body: "Many neurological and neuromuscular disorders involve small patient populations, genetic etiologies, natural-history evidence, and substantial caregiver participation.",
    href: links.rareDisease,
    linkLabel: "Rare Disease Translation Services",
  },
  {
    title: "Immunology & Autoimmune Disease",
    body: "Multiple sclerosis, neuroinflammation, and other immune-mediated neurological conditions connect CNS development with immunology.",
    href: links.immunology,
    linkLabel: "Immunology & Autoimmune Translation Services",
  },
  {
    title: "Cell & Gene Therapy",
    body: "Genetically targeted neurological therapies can introduce specialized terminology across molecular science, informed consent, long-term follow-up, safety, and regulatory content.",
    href: links.cellGene,
    linkLabel: "Cell & Gene Therapy Translation Services",
  },
  {
    title: "mRNA & RNA Therapeutics",
    body: "Antisense oligonucleotides and other RNA-based approaches expand the strategies used to address genetically defined disease mechanisms.",
    href: links.mrnaRna,
    linkLabel: "mRNA & RNA Translation Services",
  },
  {
    title: "Biopharmaceuticals",
    body: "Biologics and monoclonal antibodies require consistent scientific, clinical, regulatory, and product terminology across neurological development programs.",
    href: links.biopharma,
    linkLabel: "Biopharmaceutical & Biosimilar Translation Services",
  },
];

const whyItems = [
  ["Life Sciences Specialization", "Focused multilingual support across pharmaceutical, biotechnology, clinical research, regulatory, healthcare, medical technology, and scientific environments."],
  ["CNS-Aligned Subject-Matter Expertise", "Linguistic resources matched to the language combination, neurological subject matter, content type, audience, and intended use."],
  ["Clinical Outcome Assessment Expertise", "Structured support for PRO, ClinRO, ObsRO, PerfO, eCOA, questionnaires, diaries, symptom scales, and linguistic validation."],
  ["Program-Level Terminology Control", "Glossaries, translation memory, approved language, reviewer feedback, and technology-assisted QA help maintain consistency."],
  ["Connected Clinical & Regulatory Coverage", "Support multilingual content from study design and patient participation through safety, reporting, regulatory submission, and Medical Affairs."],
  ["Human Expertise + Smarter Workflows", "Professional linguists and reviewers remain responsible for meaning and context, supported by technology for consistency, reuse, and issue detection."],
];

const faqs = [
  {
    q: "What types of neurological and CNS content does Sesen translate?",
    a: "Sesen supports clinical, scientific, regulatory, patient-facing, safety, training, digital, and Medical Affairs content across neurological and CNS programs. Common materials include protocols, investigator's brochures, ICFs, clinical outcome assessments, questionnaires, patient diaries, eCOA content, rater materials, site training, pharmacovigilance content, clinical study reports, regulatory submissions, and scientific communications.",
  },
  {
    q: "Does Sesen translate neurological clinical outcome assessments?",
    a: "Yes. Sesen supports patient-reported outcomes (PROs), clinician-reported outcomes (ClinROs), observer-reported outcomes (ObsROs), performance outcomes (PerfOs), eCOA/ePRO, cognitive assessments, functional scales, symptom measures, patient diaries, and related clinical outcome assessment content. When an instrument requires more than standard translation, Sesen can provide a structured linguistic-validation workflow appropriate to the project requirements.",
  },
  {
    q: "How does Sesen support multilingual CNS clinical trials?",
    a: "Sesen can coordinate multilingual content across the study lifecycle, including protocols, ICFs, patient and caregiver materials, assessments, site and rater content, digital study tools, safety documentation, study reports, and regulatory submissions. Program-level terminology resources, translation memory, controlled review, and version-aware workflows help keep related content aligned as the study evolves.",
  },
  {
    q: "Can Sesen support patient and caregiver materials for neurological studies?",
    a: "Yes. CNS programs may depend on communication with both participants and caregivers, particularly when cognition, communication, development, mobility, or disease progression affects a patient's ability to report independently. Sesen supports patient information, informed consent, caregiver instructions, questionnaires, diaries, observer-reported assessments, educational content, and related study materials with language appropriate to the intended audience.",
  },
  {
    q: "Can Sesen localize eCOA and digital neurological assessments?",
    a: "Yes. Sesen supports eCOA, ePRO, digital questionnaires, study applications, remote-assessment instructions, and related clinical software content. Services can include translation, linguistic validation where required, terminology management, contextual review, interface-aware localization, and multilingual implementation support.",
  },
  {
    q: "Does Sesen support neurological rare-disease and genetic-medicine programs?",
    a: "Yes. Many neurological programs intersect with rare disease, inherited disorders, molecular diagnostics, gene therapy, genome editing, and RNA-based approaches. Sesen can support specialized scientific, clinical, patient-facing, safety, and regulatory content while maintaining terminology across related documents.",
  },
  {
    q: "How does Sesen maintain CNS terminology across a global program?",
    a: "Sesen can create and maintain program glossaries, translation memory, approved-language resources, reference libraries, and reviewer decisions. These assets help maintain consistent terminology across protocols, assessments, ICFs, site materials, safety content, reports, submissions, and subsequent revisions.",
  },
  {
    q: "Can Sesen support protocol amendments and ongoing study updates?",
    a: "Yes. Version-aware workflows can identify changed and reused content, leverage approved translations where appropriate, and coordinate multilingual revisions across related study assets. This helps preserve previously approved language while focusing linguistic review on content that has changed.",
  },
];

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M3 8h9M8.5 3.5 13 8l-4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 24 }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const paths = {
    person: <><circle cx="12" cy="7" r="3" {...common} /><path d="M5.8 20c.8-4 3-6 6.2-6s5.4 2 6.2 6" {...common} /></>,
    clinical: <><rect x="5" y="4" width="14" height="16" rx="2" {...common} /><path d="M9 4.2V3h6v1.2M9 9h6M9 13h6M9 17h4" {...common} /></>,
    caregiver: <><circle cx="9" cy="8" r="2.5" {...common} /><circle cx="16.5" cy="9" r="2.2" {...common} /><path d="M4.5 20c.5-4 2.2-6 4.8-6 2.4 0 4 1.4 4.7 4.2M13.2 14.2c2.8.2 4.6 2 5.2 5.8" {...common} /></>,
    activity: <><path d="M3 12h4l2-6 4 12 2.2-6H21" {...common} /></>,
    brain: <><path d="M10.8 4.1A3.5 3.5 0 0 0 5 6.8a3.3 3.3 0 0 0 .8 6.5A3.7 3.7 0 0 0 11.5 19V5.2" {...common} /><path d="M13.2 4.1A3.5 3.5 0 0 1 19 6.8a3.3 3.3 0 0 1-.8 6.5A3.7 3.7 0 0 1 12.5 19V5.2M8 9.2c1.5.1 2.6.8 3.5 2M16 9.2c-1.5.1-2.6.8-3.5 2" {...common} /></>,
    device: <><rect x="7" y="2.8" width="10" height="18.4" rx="2.2" {...common} /><path d="M10 6h4M10 16h4" {...common} /></>,
    dna: <><path d="M7 3c6 3 4 15 10 18M17 3C11 6 13 18 7 21M8.5 7h7M8.5 17h7M9.5 12h5" {...common} /></>,
    scan: <><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" {...common} /><circle cx="12" cy="12" r="4" {...common} /></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2" {...common} /><path d="M9 4V2.8h6V4M8.5 9h7M8.5 13h7M8.5 17h5" {...common} /></>,
    people: <><circle cx="8" cy="8" r="2.5" {...common} /><circle cx="16.5" cy="8.8" r="2.2" {...common} /><path d="M3.5 20c.6-4 2.1-6 4.5-6 2.5 0 4 2 4.6 6M13 14.2c3.2.1 5.3 2 5.8 5.8" {...common} /></>,
    steps: <><path d="M4 19h5v-5h5V9h6" {...common} /></>,
    globe: <><circle cx="12" cy="12" r="9" {...common} /><path d="M3.5 12h17M12 3c2.5 2.4 3.8 5.4 3.8 9S14.5 18.6 12 21M12 3C9.5 5.4 8.2 8.4 8.2 12s1.3 6.6 3.8 9" {...common} /></>,
    check: <><circle cx="12" cy="12" r="9" {...common} /><path d="m8 12.2 2.5 2.5 5.5-5.7" {...common} /></>,
    network: <><circle cx="6" cy="7" r="2" {...common} /><circle cx="18" cy="6" r="2" {...common} /><circle cx="12" cy="18" r="2" {...common} /><path d="m8 7 8-1M7.3 8.7l3.5 7.3M16.8 7.8l-3.5 8.2" {...common} /></>,
    language: <><path d="M4 5h8M8 3v2c0 4-2 7-5 9M6 10c1.5 2 3.5 3.5 6 4" {...common} /><path d="m14 20 3-8 3 8M15 17h4" {...common} /></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {paths[name] || paths.check}
    </svg>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a className="snc-btn snc-btn--primary" href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a className="snc-btn snc-btn--secondary" href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function EditorialLink({ href, children }) {
  return (
    <a className="snc-text-link" href={href}>
      <span>{children}</span><Arrow size={14} />
    </a>
  );
}

function HeroArtwork() {
  return (
    <div className="snc-hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 560" role="img">
        <defs>
          <linearGradient id="sncHeroWash" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#F7F9FD" />
            <stop offset="100%" stopColor="#EAF0FF" />
          </linearGradient>
        </defs>
        <rect x="30" y="28" width="560" height="500" rx="48" fill="url(#sncHeroWash)" />
        <path d="M271 123c-43-22-98-3-111 42-4 14-3 28 1 41-26 11-42 35-42 64 0 36 26 65 59 71-6 45 28 82 70 82 17 0 33-6 45-16V146c-7-10-14-17-22-23Z" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
        <path d="M349 123c43-22 98-3 111 42 4 14 3 28-1 41 26 11 42 35 42 64 0 36-26 65-59 71 6 45-28 82-70 82-17 0-33-6-45-16V146c7-10 14-17 22-23Z" fill="#FFFFFF" stroke="#3659BB" strokeWidth="3" />
        <path d="M248 183c20 2 35 12 45 28M232 245c28-1 48 12 61 35M245 330c18-2 33 6 48 24" fill="none" stroke="#8EA3D8" strokeWidth="2" strokeLinecap="round" />
        <path d="M372 183c-20 2-35 12-45 28M388 245c-28-1-48 12-61 35M375 330c-18-2-33 6-48 24" fill="none" stroke="#8EA3D8" strokeWidth="2" strokeLinecap="round" />
        <g fill="#4B6FD8">
          <circle cx="238" cy="181" r="6" /><circle cx="278" cy="208" r="6" /><circle cx="224" cy="246" r="6" /><circle cx="272" cy="279" r="6" /><circle cx="245" cy="329" r="6" /><circle cx="281" cy="355" r="6" />
          <circle cx="382" cy="181" r="6" /><circle cx="342" cy="208" r="6" /><circle cx="396" cy="246" r="6" /><circle cx="348" cy="279" r="6" /><circle cx="375" cy="329" r="6" /><circle cx="339" cy="355" r="6" />
        </g>
        <g transform="translate(70 112)">
          <rect width="116" height="66" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <circle cx="26" cy="24" r="10" fill="#EAF0FF" />
          <path d="M21 24h10M26 19v10" stroke="#3659BB" strokeWidth="1.6" strokeLinecap="round" />
          <text x="18" y="52" fill="#17264D" fontSize="14" fontFamily="Inter,Arial,sans-serif" fontWeight="600">COA</text>
        </g>
        <g transform="translate(440 112)">
          <rect width="116" height="66" rx="16" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <rect x="20" y="15" width="17" height="25" rx="3" fill="none" stroke="#3659BB" strokeWidth="1.5" />
          <circle cx="28.5" cy="35" r="1" fill="#3659BB" />
          <text x="49" y="32" fill="#17264D" fontSize="14" fontFamily="Inter,Arial,sans-serif" fontWeight="600">eCOA</text>
        </g>
        <g transform="translate(62 386)">
          <rect width="148" height="76" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <circle cx="29" cy="25" r="9" fill="none" stroke="#3659BB" strokeWidth="1.5" />
          <path d="M17 54c2-13 8-18 12-18 5 0 10 5 12 18" fill="none" stroke="#3659BB" strokeWidth="1.5" />
          <text x="52" y="31" fill="#17264D" fontSize="14" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Patient</text>
          <text x="52" y="50" fill="#68758B" fontSize="12" fontFamily="Inter,Arial,sans-serif">experience</text>
        </g>
        <g transform="translate(410 386)">
          <rect width="148" height="76" rx="18" fill="#FFFFFF" stroke="#DDE4F2" strokeWidth="1.5" />
          <path d="M18 22h24M18 31h24M18 40h15" fill="none" stroke="#3659BB" strokeWidth="1.5" strokeLinecap="round" />
          <text x="52" y="31" fill="#17264D" fontSize="14" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Clinical</text>
          <text x="52" y="50" fill="#68758B" fontSize="12" fontFamily="Inter,Arial,sans-serif">evidence</text>
        </g>
        <path d="M185 144c35 8 52 15 70 28M437 144c-35 8-52 15-70 28M206 417c26-18 43-29 71-34M414 417c-26-18-43-29-71-34" fill="none" stroke="#B9C7E7" strokeWidth="1.5" strokeDasharray="4 6" />
      </svg>
    </div>
  );
}

function EndpointVisual() {
  const nodes = [
    ["Clinical concept", "Cognition · function · symptoms"],
    ["Assessment", "PRO · ClinRO · ObsRO · PerfO"],
    ["Languages", "Validated multilingual versions"],
    ["Global study use", "Aligned assessment meaning across markets"],
  ];
  return (
    <div className="snc-endpoint-visual" aria-label="Clinical concept to multilingual endpoint flow">
      {nodes.map((node, index) => (
        <div className="snc-endpoint-node" key={node[0]}>
          <div className="snc-endpoint-index">{String(index + 1).padStart(2, "0")}</div>
          <div><strong>{node[0]}</strong><span>{node[1]}</span></div>
          {index < nodes.length - 1 && <div className="snc-endpoint-arrow" aria-hidden="true"><Arrow size={18} /></div>}
        </div>
      ))}
    </div>
  );
}

function StakeholderArt() {
  return (
    <div className="snc-stakeholder-art" aria-hidden="true">
      <svg viewBox="0 0 560 420" role="img">
        <rect x="20" y="20" width="520" height="380" rx="34" fill="#F7F9FD" />
        <circle cx="280" cy="210" r="62" fill="#FFFFFF" stroke="#4B6FD8" strokeWidth="2" />
        <path d="M250 205h60M258 190h44M263 220h34" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
        <text x="280" y="250" textAnchor="middle" fill="#17264D" fontSize="14" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Shared clinical concept</text>
        <g transform="translate(62 78)">
          <circle cx="70" cy="64" r="31" fill="#FFFFFF" stroke="#B9C7E7" strokeWidth="1.5" />
          <circle cx="70" cy="54" r="10" fill="none" stroke="#3659BB" strokeWidth="1.7" />
          <path d="M50 91c4-18 12-27 20-27s16 9 20 27" fill="none" stroke="#3659BB" strokeWidth="1.7" />
          <text x="70" y="123" textAnchor="middle" fill="#17264D" fontSize="16" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Patient</text>
        </g>
        <g transform="translate(360 70)">
          <circle cx="70" cy="64" r="31" fill="#FFFFFF" stroke="#B9C7E7" strokeWidth="1.5" />
          <circle cx="63" cy="52" r="8" fill="none" stroke="#3659BB" strokeWidth="1.6" />
          <circle cx="78" cy="56" r="7" fill="none" stroke="#3659BB" strokeWidth="1.6" />
          <path d="M47 88c3-14 10-21 16-21 6 0 12 6 15 18M72 71c10 0 17 6 20 18" fill="none" stroke="#3659BB" strokeWidth="1.6" />
          <text x="70" y="123" textAnchor="middle" fill="#17264D" fontSize="16" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Caregiver</text>
        </g>
        <g transform="translate(210 266)">
          <circle cx="70" cy="52" r="31" fill="#FFFFFF" stroke="#B9C7E7" strokeWidth="1.5" />
          <path d="M52 46h36M52 57h29M52 68h23" stroke="#3659BB" strokeWidth="1.6" strokeLinecap="round" />
          <text x="70" y="108" textAnchor="middle" fill="#17264D" fontSize="16" fontFamily="Inter,Arial,sans-serif" fontWeight="600">Clinician / Rater</text>
        </g>
        <path d="M179 149c41 18 60 28 75 42M381 149c-41 18-60 28-75 42M280 272v-25" fill="none" stroke="#8EA3D8" strokeWidth="2" strokeDasharray="5 6" />
        <g fill="#4B6FD8"><circle cx="223" cy="169" r="5" /><circle cx="337" cy="169" r="5" /><circle cx="280" cy="258" r="5" /></g>
      </svg>
    </div>
  );
}

function TerminologyVisual() {
  return (
    <div className="snc-term-visual" aria-label="One CNS vocabulary across connected documents">
      <div className="snc-term-hub">
        <Icon name="language" size={28} />
        <strong>Controlled CNS terminology</strong>
        <span>Approved language · TM · reviewer decisions</span>
      </div>
      <div className="snc-term-track">
        {["Protocol", "COA", "ICF", "Site", "Safety", "CSR", "Submission"].map((item) => (
          <div className="snc-term-doc" key={item}><span>{item}</span></div>
        ))}
      </div>
    </div>
  );
}

export default function SesenNeurologyCNSTranslationServicesWireframeV3() {
  return (
    <main className="snc-page">
      <style>{`
        .snc-page {
          --snc-blue: #4B6FD8;
          --snc-blue-dark: #3659BB;
          --snc-deep-blue: #253F8F;
          --snc-mid-blue: #6F8BE1;
          --snc-soft-blue: #EAF0FF;
          --snc-pale-blue: #F5F7FF;
          --snc-navy: #17264D;
          --snc-ink: #111827;
          --snc-body: #46546D;
          --snc-muted: #68758B;
          --snc-border: #DDE4F2;
          --snc-divider: #E9EEF8;
          --snc-surface: #F7F9FD;
          --snc-white: #FFFFFF;
          --snc-light-eyebrow: #C8D6FF;
          color: var(--snc-body);
          background: var(--snc-white);
          font-family: Inter, Arial, sans-serif;
          font-size: 16px;
          line-height: 1.68;
          overflow-x: clip;
        }

        .snc-page *, .snc-page *::before, .snc-page *::after { box-sizing: border-box; }
        .snc-page a { color: inherit; }
        .snc-page svg { display: block; max-width: 100%; }
        .snc-page .snc-shell { width: min(1280px, calc(100% - 112px)); margin: 0 auto; min-width: 0; }
        .snc-page .snc-section { padding: 96px 0; position: relative; }
        .snc-page .snc-section--dense { padding: 80px 0; }
        .snc-page .snc-section--soft { background: var(--snc-surface); }
        .snc-page .snc-section--blue-soft { background: var(--snc-pale-blue); }
        .snc-page .snc-section--dark { background: var(--snc-navy); color: #E8EEFF; }
        .snc-page .snc-section--dark h2,
        .snc-page .snc-section--dark h3 { color: #FFFFFF; }
        .snc-page .snc-section--dark p { color: #D8E1F7; }

        .snc-page h1, .snc-page h2, .snc-page h3 {
          margin: 0;
          font-family: "Inter Tight", Inter, Arial, sans-serif;
          font-weight: 500;
          color: var(--snc-navy);
          text-wrap: balance;
        }
        .snc-page h1 { font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
        .snc-page h2 { font-size: 36px; line-height: 1.3; letter-spacing: 0; }
        .snc-page h3 { font-size: 22px; line-height: 1.3; }
        .snc-page p { margin: 0; font-size: 16px; color: var(--snc-body); }
        .snc-page .snc-lead { font-size: 19px; line-height: 1.65; color: #293954; }
        .snc-page .snc-muted { color: var(--snc-muted); }

        .snc-page .snc-eyebrow {
          margin: 0 0 14px;
          font-family: Inter, Arial, sans-serif;
          font-size: 11px !important;
          font-weight: 700 !important;
          line-height: 1.35 !important;
          letter-spacing: 0.15em !important;
          text-transform: uppercase !important;
          color: var(--snc-blue-dark) !important;
        }
        .snc-page .snc-section--dark .snc-eyebrow { color: var(--snc-light-eyebrow) !important; }

        .snc-page .snc-heading { max-width: 820px; margin-bottom: 48px; }
        .snc-page .snc-heading--center { margin-left: auto; margin-right: auto; text-align: center; }
        .snc-page .snc-heading h2 + p { margin-top: 20px; }
        .snc-page .snc-heading--center p { margin-left: auto; margin-right: auto; max-width: 760px; }

        .snc-page .snc-btn-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
        .snc-page .snc-btn {
          min-height: 50px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 0 26px;
          border-radius: 999px;
          border: 1px solid transparent;
          font-size: 13px;
          font-weight: 700;
          line-height: 1;
          letter-spacing: 0.035em;
          text-decoration: none;
          transition: background .2s ease, border-color .2s ease, transform .2s ease;
        }
        .snc-page .snc-btn:hover { transform: translateY(-1px); }
        .snc-page .snc-btn:focus-visible,
        .snc-page .snc-text-link:focus-visible,
        .snc-page summary:focus-visible { outline: 3px solid rgba(75,111,216,.28); outline-offset: 3px; }
        .snc-page .snc-btn--primary { background: var(--snc-blue); color: #FFFFFF !important; }
        .snc-page .snc-btn--primary:hover { background: var(--snc-blue-dark); }
        .snc-page .snc-btn--secondary { background: #FFFFFF; color: var(--snc-ink) !important; border-color: #C8D3EA; }
        .snc-page .snc-btn--secondary:hover { background: var(--snc-pale-blue); border-color: #AEBDE0; }
        .snc-page .snc-text-link {
          display: inline-flex; align-items: center; gap: 7px;
          width: fit-content; max-width: 100%;
          align-self: flex-start; justify-self: start;
          color: var(--snc-blue-dark); font-weight: 650; text-decoration: none;
          overflow-wrap: anywhere;
        }
        .snc-page .snc-text-link > span { min-width: 0; }
        .snc-page .snc-text-link:hover { text-decoration: underline; text-underline-offset: 4px; }

        /* Hero */
        .snc-page .snc-hero { padding: 96px 0 86px; background: linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%); }
        .snc-page .snc-hero-grid { display: grid; grid-template-columns: minmax(0, 1.03fr) minmax(420px, .97fr); gap: 62px; align-items: center; }
        .snc-page .snc-hero-copy { min-width: 0; max-width: 690px; }
        .snc-page .snc-hero-copy .snc-lead { margin-top: 24px; max-width: 680px; }
        .snc-page .snc-hero-support { margin-top: 17px; max-width: 670px; font-size: 17px; }
        .snc-page .snc-hero-proof {
          display: flex; flex-wrap: wrap; gap: 10px 22px; margin-top: 28px; padding-top: 24px;
          border-top: 1px solid var(--snc-divider); color: var(--snc-muted); font-size: 14px;
        }
        .snc-page .snc-hero-proof span { display: inline-flex; align-items: center; gap: 7px; }
        .snc-page .snc-hero-proof svg { color: var(--snc-blue-dark); }
        .snc-page .snc-hero-art { width: 100%; min-width: 0; }

        /* Trust band */
        .snc-page .snc-trust { border-top: 1px solid var(--snc-divider); border-bottom: 1px solid var(--snc-divider); }
        .snc-page .snc-trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); }
        .snc-page .snc-trust-item { padding: 24px 28px; display: flex; align-items: center; gap: 12px; min-width: 0; }
        .snc-page .snc-trust-item + .snc-trust-item { border-left: 1px solid var(--snc-divider); }
        .snc-page .snc-trust-item svg { color: var(--snc-blue-dark); flex: 0 0 auto; }
        .snc-page .snc-trust-item strong { display: block; color: var(--snc-navy); font-size: 15px; font-weight: 650; line-height: 1.35; }
        .snc-page .snc-trust-item span { display: block; color: var(--snc-muted); font-size: 13px; line-height: 1.35; margin-top: 3px; }

        /* Authority */
        .snc-page .snc-authority-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 80px; align-items: start; }
        .snc-page .snc-authority-copy .snc-lead { margin-top: 22px; }
        .snc-page .snc-authority-copy p + p { margin-top: 18px; }
        .snc-page .snc-authority-pillars { border-top: 1px solid var(--snc-border); }
        .snc-page .snc-authority-pillar { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 18px; padding: 25px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-icon-tile { width: 44px; height: 44px; border-radius: 12px; display: grid; place-items: center; background: var(--snc-soft-blue); color: var(--snc-blue-dark); }
        .snc-page .snc-authority-pillar strong { display: block; color: var(--snc-navy); font-size: 18px; font-weight: 650; }
        .snc-page .snc-authority-pillar p { margin-top: 6px; }

        /* Endpoint */
        .snc-page .snc-endpoint-grid { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 70px; align-items: center; }
        .snc-page .snc-endpoint-copy .snc-lead { margin-top: 20px; }
        .snc-page .snc-endpoint-copy p + p { margin-top: 17px; }
        .snc-page .snc-endpoint-visual { background: #FFFFFF; border: 1px solid var(--snc-border); border-radius: 28px; padding: 30px; box-shadow: 0 16px 44px rgba(23,38,77,.06); }
        .snc-page .snc-endpoint-node { position: relative; display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 14px; padding: 18px 0; min-width: 0; }
        .snc-page .snc-endpoint-node + .snc-endpoint-node { border-top: 1px solid var(--snc-divider); }
        .snc-page .snc-endpoint-index { width: 36px; height: 36px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #B9C7E7; color: var(--snc-blue-dark); font-size: 11px; font-weight: 700; }
        .snc-page .snc-endpoint-node strong { display: block; color: var(--snc-navy); font-weight: 650; }
        .snc-page .snc-endpoint-node span { display: block; margin-top: 2px; color: var(--snc-muted); font-size: 14px; }
        .snc-page .snc-endpoint-arrow { position: absolute; right: 0; top: 27px; color: var(--snc-blue); }
        .snc-page .snc-assessment-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0; margin-top: 56px; border-top: 1px solid var(--snc-border); border-left: 1px solid var(--snc-border); }
        .snc-page .snc-assessment-item { padding: 28px; border-right: 1px solid var(--snc-border); border-bottom: 1px solid var(--snc-border); min-width: 0; }
        .snc-page .snc-assessment-item svg { color: var(--snc-blue-dark); }
        .snc-page .snc-assessment-item h3 { font-size: 20px; margin-top: 16px; }
        .snc-page .snc-assessment-item p { margin-top: 10px; }
        .snc-page .snc-assessment-link { margin-top: 30px; display: flex; justify-content: center; }

        /* Stakeholders */
        .snc-page .snc-stakeholder-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; align-items: center; }
        .snc-page .snc-stakeholder-copy .snc-lead { margin-top: 20px; }
        .snc-page .snc-stakeholder-copy > p + p { margin-top: 16px; }
        .snc-page .snc-audience-list { margin-top: 30px; border-top: 1px solid var(--snc-border); }
        .snc-page .snc-audience-row { display: grid; grid-template-columns: 170px minmax(0,1fr); gap: 28px; padding: 22px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-audience-row strong { color: var(--snc-navy); font-weight: 650; }
        .snc-page .snc-stakeholder-links { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 12px 22px; }

        /* Disease */
        .snc-page .snc-disease-list { border-top: 1px solid var(--snc-border); }
        .snc-page .snc-disease-row { display: grid; grid-template-columns: minmax(230px,.72fr) minmax(0,1.28fr); gap: 58px; padding: 30px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-disease-row h3 { font-size: 22px; }
        .snc-page .snc-disease-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 14px; }
        .snc-page .snc-disease-tags span { padding: 5px 10px; border-radius: 999px; background: var(--snc-soft-blue); color: var(--snc-blue-dark); font-size: 13px; font-weight: 600; }
        .snc-page .snc-disease-body p { max-width: 760px; }
        .snc-page .snc-disease-body .snc-text-link { margin-top: 12px; }

        /* Evidence */
        .snc-page .snc-evidence-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 80px; align-items: start; }
        .snc-page .snc-evidence-intro { position: sticky; top: 28px; }
        .snc-page .snc-evidence-intro .snc-lead { margin-top: 20px; }
        .snc-page .snc-evidence-streams { position: relative; }
        .snc-page .snc-evidence-stream { display: grid; grid-template-columns: 54px minmax(0,1fr); gap: 20px; padding: 24px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-evidence-stream:first-child { border-top: 1px solid var(--snc-border); }
        .snc-page .snc-evidence-stream strong { display: block; color: var(--snc-navy); font-size: 18px; font-weight: 650; }
        .snc-page .snc-evidence-stream p { margin-top: 6px; }

        /* Rater */
        .snc-page .snc-rater-layout { display: grid; grid-template-columns: minmax(300px,.72fr) minmax(0,1.28fr); gap: 70px; align-items: start; }
        .snc-page .snc-rater-intro { position: sticky; top: 28px; }
        .snc-page .snc-rater-intro .snc-lead { margin-top: 20px; }
        .snc-page .snc-rater-list { border-top: 1px solid var(--snc-border); }
        .snc-page .snc-rater-row { display: grid; grid-template-columns: minmax(180px,.68fr) minmax(0,1.32fr); gap: 30px; padding: 24px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-rater-row strong { color: var(--snc-navy); font-weight: 650; }
        .snc-page .snc-guardrail { margin-top: 30px; padding: 20px 22px; border-left: 2px solid var(--snc-blue); background: rgba(234,240,255,.6); }
        .snc-page .snc-guardrail p { color: #394968; }
        .snc-page .snc-rater-links { margin-top: 26px; display: flex; flex-wrap: wrap; gap: 12px 22px; }
        .snc-page .snc-rater-support { margin-top: 16px; }

        /* Digital */
        .snc-page .snc-digital-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 68px; align-items: center; }
        .snc-page .snc-digital-copy .snc-lead { margin-top: 20px; }
        .snc-page .snc-digital-list { margin-top: 30px; border-top: 1px solid var(--snc-border); }
        .snc-page .snc-digital-row { padding: 18px 0; border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-digital-row strong { display: block; color: var(--snc-navy); font-weight: 650; }
        .snc-page .snc-digital-row span { display: block; margin-top: 5px; }
        .snc-page .snc-device-visual { min-width: 0; display: grid; grid-template-columns: 1fr 1fr; gap: 18px; align-items: end; }
        .snc-page .snc-phone { padding: 22px; background: #FFFFFF; border: 1px solid #C7D3EA; border-radius: 28px; box-shadow: 0 18px 42px rgba(23,38,77,.06); }
        .snc-page .snc-phone--small { transform: translateY(34px); }
        .snc-page .snc-phone-top { height: 9px; width: 54px; border-radius: 999px; background: #C9D3E8; margin: 0 auto 22px; }
        .snc-page .snc-phone-label { font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; color: var(--snc-blue-dark); }
        .snc-page .snc-phone h3 { margin-top: 9px; font-size: 20px; }
        .snc-page .snc-scale { display: grid; grid-template-columns: repeat(5,1fr); gap: 7px; margin-top: 22px; }
        .snc-page .snc-scale span { height: 34px; border-radius: 8px; border: 1px solid var(--snc-border); display: grid; place-items: center; color: var(--snc-muted); font-size: 12px; }
        .snc-page .snc-scale span:nth-child(3) { background: var(--snc-soft-blue); color: var(--snc-blue-dark); border-color: #B6C6E8; font-weight: 700; }
        .snc-page .snc-phone-line { height: 7px; border-radius: 999px; background: #E4EAF5; margin-top: 14px; }
        .snc-page .snc-phone-line.short { width: 65%; }
        .snc-page .snc-device-note { margin-top: 22px; padding: 16px; }
        .snc-page .snc-device-note p { font-size: 14px; }

        /* Modalities */
        .snc-page .snc-modalities-grid { display: grid; grid-template-columns: minmax(0,.88fr) minmax(0,1.12fr); gap: 70px; align-items: start; }
        .snc-page .snc-modalities-intro .snc-lead { margin-top: 20px; color: #EEF2FF; }
        .snc-page .snc-modalities-intro p + p { margin-top: 16px; }
        .snc-page .snc-modalities-list { border-top: 1px solid rgba(200,214,255,.22); }
        .snc-page .snc-modality-row { padding: 22px 0; border-bottom: 1px solid rgba(200,214,255,.22); }
        .snc-page .snc-modality-row strong { display: block; color: #FFFFFF; font-size: 18px; font-weight: 650; }
        .snc-page .snc-modality-row span { display: block; color: #D8E1F7; margin-top: 5px; }
        .snc-page .snc-modality-links { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 10px 22px; }
        .snc-page .snc-section--dark .snc-text-link { color: #DCE6FF; }

        /* Lifecycle */
        .snc-page .snc-lifecycle { position: relative; border-top: 1px solid var(--snc-border); }
        .snc-page .snc-life-row { display: grid; grid-template-columns: 64px 220px minmax(0,1fr) 280px; gap: 24px; padding: 26px 0; border-bottom: 1px solid var(--snc-border); align-items: start; }
        .snc-page .snc-life-index { width: 42px; height: 42px; border-radius: 50%; display: grid; place-items: center; border: 1px solid #B9C7E7; color: var(--snc-blue-dark); font-size: 11px; font-weight: 700; }
        .snc-page .snc-life-phase { color: var(--snc-navy); font-size: 18px; font-weight: 650; }
        .snc-page .snc-life-items { display: flex; flex-wrap: wrap; gap: 8px 10px; }
        .snc-page .snc-life-items span { color: var(--snc-body); }
        .snc-page .snc-life-items span:not(:last-child)::after { content: "·"; margin-left: 10px; color: #A3B1CC; }
        .snc-page .snc-life-links { display: grid; gap: 7px; justify-items: start; }
        .snc-page .snc-life-links .snc-text-link { font-size: 16px; }

        /* Terminology */
        .snc-page .snc-term-grid { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 70px; align-items: center; }
        .snc-page .snc-term-copy .snc-lead { margin-top: 20px; }
        .snc-page .snc-term-copy p + p { margin-top: 16px; }
        .snc-page .snc-term-list { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        .snc-page .snc-term-list span { padding: 7px 11px; border-radius: 999px; background: #FFFFFF; border: 1px solid var(--snc-border); color: var(--snc-body); font-size: 13px; }
        .snc-page .snc-term-visual { padding: 30px; border: 1px solid var(--snc-border); border-radius: 28px; background: #FFFFFF; }
        .snc-page .snc-term-hub { display: grid; justify-items: center; text-align: center; padding: 24px; border-radius: 20px; background: var(--snc-soft-blue); color: var(--snc-blue-dark); }
        .snc-page .snc-term-hub strong { color: var(--snc-navy); margin-top: 10px; font-size: 18px; font-weight: 650; }
        .snc-page .snc-term-hub span { color: var(--snc-muted); font-size: 13px; margin-top: 4px; }
        .snc-page .snc-term-track { position: relative; display: grid; grid-template-columns: repeat(7,minmax(0,1fr)); gap: 7px; margin-top: 26px; }
        .snc-page .snc-term-track::before { content: ""; position: absolute; left: 5%; right: 5%; top: 19px; height: 1px; background: #B9C7E7; z-index: 0; }
        .snc-page .snc-term-doc { position: relative; z-index: 1; text-align: center; min-width: 0; }
        .snc-page .snc-term-doc::before { content: ""; display: block; width: 39px; height: 39px; margin: 0 auto 8px; border-radius: 12px; background: #FFFFFF; border: 1px solid #B9C7E7; }
        .snc-page .snc-term-doc span { color: var(--snc-navy); font-size: 12px; font-weight: 650; overflow-wrap: anywhere; }

        /* Workflow */
        .snc-page .snc-workflow-grid { display: grid; grid-template-columns: minmax(300px,.7fr) minmax(0,1.3fr); gap: 72px; align-items: start; }
        .snc-page .snc-workflow-intro { position: sticky; top: 28px; }
        .snc-page .snc-workflow-intro .snc-lead { margin-top: 20px; }
        .snc-page .snc-workflow-note { margin-top: 24px; padding: 20px 22px; background: var(--snc-pale-blue); border-left: 2px solid var(--snc-blue); }
        .snc-page .snc-workflow-note strong { color: var(--snc-navy); }
        .snc-page .snc-workflow-list { border-left: 1px solid var(--snc-border); margin-left: 24px; }
        .snc-page .snc-workflow-step { position: relative; padding: 0 0 38px 58px; }
        .snc-page .snc-workflow-step:last-child { padding-bottom: 0; }
        .snc-page .snc-workflow-number { position: absolute; left: -25px; top: 0; width: 50px; height: 50px; border-radius: 50%; display: grid; place-items: center; background: #FFFFFF; border: 1px solid #B9C7E7; color: var(--snc-blue-dark); font-size: 11px; font-weight: 700; }
        .snc-page .snc-workflow-step h3 { font-size: 21px; padding-top: 3px; }
        .snc-page .snc-workflow-step p { margin-top: 8px; max-width: 710px; }

        /* Quality */
        .snc-page .snc-quality-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid var(--snc-border); border-left: 1px solid var(--snc-border); }
        .snc-page .snc-quality-item { padding: 28px; border-right: 1px solid var(--snc-border); border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-quality-item h3 { font-size: 20px; }
        .snc-page .snc-quality-item p { margin-top: 9px; }
        .snc-page .snc-quality-note { margin-top: 32px; max-width: 900px; padding: 22px 0 0; border-top: 1px solid var(--snc-border); }
        .snc-page .snc-quality-note strong { color: var(--snc-navy); }

        /* Global */
        .snc-page .snc-global-layout { display: grid; grid-template-columns: minmax(0,.76fr) minmax(0,1.24fr); gap: 74px; align-items: start; }
        .snc-page .snc-global-intro .snc-lead { margin-top: 20px; }
        .snc-page .snc-global-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--snc-border); border-left: 1px solid var(--snc-border); }
        .snc-page .snc-global-item { padding: 26px; border-right: 1px solid var(--snc-border); border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-global-item strong { display: block; color: var(--snc-navy); font-size: 19px; font-weight: 650; }
        .snc-page .snc-global-item p { margin-top: 7px; }
        .snc-page .snc-cert-line { margin-top: 26px; padding-top: 22px; border-top: 1px solid var(--snc-border); color: var(--snc-muted); font-size: 14px; }
        .snc-page .snc-cert-line strong { color: var(--snc-navy); font-weight: 650; }

        /* Related */
        .snc-page .snc-related-list { border-top: 1px solid rgba(200,214,255,.25); }
        .snc-page .snc-related-row { display: grid; grid-template-columns: 230px minmax(0,1fr) 270px; gap: 30px; padding: 28px 0; border-bottom: 1px solid rgba(200,214,255,.25); align-items: center; }
        .snc-page .snc-related-row h3 { font-size: 21px; }
        .snc-page .snc-related-row p { margin: 0; }
        .snc-page .snc-related-row .snc-text-link { justify-self: end; width: fit-content; }

        /* Why */
        .snc-page .snc-why-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); border-top: 1px solid var(--snc-border); border-left: 1px solid var(--snc-border); }
        .snc-page .snc-why-item { padding: 28px; border-right: 1px solid var(--snc-border); border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-why-item h3 { font-size: 20px; }
        .snc-page .snc-why-item p { margin-top: 9px; }

        /* FAQ */
        .snc-page .snc-faq-grid { display: grid; grid-template-columns: minmax(280px,.72fr) minmax(0,1.28fr); gap: 72px; align-items: start; }
        .snc-page .snc-faq-intro { position: sticky; top: 28px; }
        .snc-page .snc-faq-intro .snc-lead { margin-top: 20px; }
        .snc-page .snc-faq-list { border-top: 1px solid var(--snc-border); }
        .snc-page .snc-faq-item { border-bottom: 1px solid var(--snc-border); }
        .snc-page .snc-faq-item summary { list-style: none; cursor: pointer; display: grid; grid-template-columns: minmax(0,1fr) 32px; gap: 20px; align-items: center; padding: 24px 0; color: var(--snc-navy); font-family: "Inter Tight",Inter,Arial,sans-serif; font-size: 20px; font-weight: 500; }
        .snc-page .snc-faq-item summary::-webkit-details-marker { display: none; }
        .snc-page .snc-faq-icon { position: relative; width: 26px; height: 26px; border-radius: 50%; border: 1px solid #B9C7E7; }
        .snc-page .snc-faq-icon::before,
        .snc-page .snc-faq-icon::after { content: ""; position: absolute; top: 50%; left: 50%; width: 10px; height: 1.5px; background: var(--snc-blue-dark); transform: translate(-50%,-50%); }
        .snc-page .snc-faq-icon::after { transform: translate(-50%,-50%) rotate(90deg); transition: transform .18s ease; }
        .snc-page .snc-faq-item[open] .snc-faq-icon::after { transform: translate(-50%,-50%) rotate(0deg); }
        .snc-page .snc-faq-answer { padding: 0 48px 24px 0; max-width: 820px; }

        /* Final CTA */
        .snc-page .snc-final { padding: 82px 0; background: linear-gradient(135deg, #17264D 0%, #253F8F 100%); }
        .snc-page .snc-final-grid { display: grid; grid-template-columns: minmax(0,1.2fr) minmax(320px,.8fr); gap: 64px; align-items: center; }
        .snc-page .snc-final h2 { color: #FFFFFF; }
        .snc-page .snc-final p { color: #DDE6FB; margin-top: 20px; max-width: 820px; font-size: 18px; }
        .snc-page .snc-final .snc-btn-row { margin-top: 0; justify-content: flex-end; }
        .snc-page .snc-final .snc-btn--secondary { border-color: #FFFFFF; }

        @media (max-width: 1180px) {
          .snc-page .snc-shell { width: min(1280px, calc(100% - 80px)); }
          .snc-page .snc-hero-grid { grid-template-columns: minmax(0,1.05fr) minmax(380px,.95fr); gap: 42px; }
          .snc-page .snc-life-row { grid-template-columns: 52px 190px minmax(0,1fr) 230px; }
        }

        @media (max-width: 1080px) {
          .snc-page .snc-hero { padding: 84px 0 78px; }
          .snc-page .snc-hero-grid { grid-template-columns: 1fr; gap: 42px; }
          .snc-page .snc-hero-copy { max-width: 760px; margin-left: auto; margin-right: auto; }
          .snc-page .snc-hero-copy .snc-eyebrow,
          .snc-page .snc-hero-copy h1 { text-align: center; }
          .snc-page .snc-hero-copy .snc-lead,
          .snc-page .snc-hero-support { text-align: left; }
          .snc-page .snc-hero-art { width: min(100%, 590px); margin: 10px auto 0; }
        }

        @media (max-width: 980px) {
          .snc-page .snc-section { padding: 80px 0; }
          .snc-page .snc-section--dense { padding: 72px 0; }
          .snc-page .snc-hero { padding: 78px 0; }
          .snc-page .snc-authority-grid,
          .snc-page .snc-endpoint-grid,
          .snc-page .snc-stakeholder-grid,
          .snc-page .snc-evidence-grid,
          .snc-page .snc-rater-layout,
          .snc-page .snc-digital-grid,
          .snc-page .snc-modalities-grid,
          .snc-page .snc-term-grid,
          .snc-page .snc-workflow-grid,
          .snc-page .snc-global-layout,
          .snc-page .snc-faq-grid,
          .snc-page .snc-final-grid { grid-template-columns: 1fr; }
          .snc-page .snc-stakeholder-copy { order: 1; }
          .snc-page .snc-stakeholder-art { order: 2; width: min(100%, 560px); margin: 0 auto; }
          .snc-page .snc-evidence-intro,
          .snc-page .snc-rater-intro,
          .snc-page .snc-workflow-intro,
          .snc-page .snc-faq-intro { position: static; }
          .snc-page .snc-assessment-grid,
          .snc-page .snc-quality-grid,
          .snc-page .snc-why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .snc-page .snc-life-row { grid-template-columns: 48px 180px minmax(0,1fr); }
          .snc-page .snc-life-links { grid-column: 3; }
          .snc-page .snc-related-row { grid-template-columns: 200px minmax(0,1fr); }
          .snc-page .snc-related-row .snc-text-link { grid-column: 2; justify-self: start; }
          .snc-page .snc-final .snc-btn-row { justify-content: flex-start; }
        }

        @media (max-width: 768px) {
          .snc-page .snc-shell { width: calc(100% - 56px); }
          .snc-page h1 { font-size: 42px; }
          .snc-page h2 { font-size: 32px; }
          .snc-page h3 { font-size: 21px; }
          .snc-page .snc-lead { font-size: 18px; }
          .snc-page .snc-authority-copy > h2,
          .snc-page .snc-endpoint-copy > .snc-eyebrow,
          .snc-page .snc-endpoint-copy > h2,
          .snc-page .snc-stakeholder-copy > h2,
          .snc-page .snc-digital-copy > h2,
          .snc-page .snc-modalities-intro > .snc-eyebrow,
          .snc-page .snc-modalities-intro > h2,
          .snc-page .snc-term-copy > h2,
          .snc-page .snc-final-copy > h2 { text-align: center; }
          .snc-page .snc-hero-art { width: min(100%, 520px); }
          .snc-page .snc-trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .snc-page .snc-trust-item:nth-child(3) { border-left: none; border-top: 1px solid var(--snc-divider); }
          .snc-page .snc-trust-item:nth-child(4) { border-top: 1px solid var(--snc-divider); }
          .snc-page .snc-assessment-grid { grid-template-columns: 1fr 1fr; }
          .snc-page .snc-disease-row { grid-template-columns: 1fr; gap: 14px; }
          .snc-page .snc-audience-row,
          .snc-page .snc-rater-row { grid-template-columns: 1fr; gap: 6px; }
          .snc-page .snc-device-visual { max-width: 560px; margin: 0 auto; }
          .snc-page .snc-global-grid { grid-template-columns: 1fr; }
          .snc-page .snc-life-row { grid-template-columns: 48px minmax(0,1fr); gap: 12px 18px; }
          .snc-page .snc-life-phase { grid-column: 2; }
          .snc-page .snc-life-items,
          .snc-page .snc-life-links { grid-column: 2; }
          .snc-page .snc-term-track { grid-template-columns: repeat(4,minmax(0,1fr)); row-gap: 18px; }
          .snc-page .snc-term-track::before { display: none; }
          .snc-page .snc-related-row { grid-template-columns: 1fr; gap: 10px; }
          .snc-page .snc-related-row .snc-text-link { grid-column: 1; }
          .snc-page .snc-why-grid,
          .snc-page .snc-quality-grid { grid-template-columns: 1fr 1fr; }
          .snc-page .snc-final .snc-btn-row { margin-top: 10px; justify-content: center; }

          .snc-page .snc-mobile-center { text-align: center; margin-left: auto; margin-right: auto; }
          .snc-page .snc-mobile-center .snc-lead { text-align: left; }
          .snc-page .snc-disease-heading,
          .snc-page .snc-rater-intro,
          .snc-page .snc-workflow-intro,
          .snc-page .snc-faq-intro { text-align: left; }
        }

        @media (max-width: 560px) {
          .snc-page .snc-shell { width: calc(100% - 40px); }
          .snc-page .snc-section { padding: 68px 0; }
          .snc-page .snc-section--dense { padding: 64px 0; }
          .snc-page .snc-hero { padding: 68px 0; }
          .snc-page .snc-heading { margin-bottom: 36px; }
          .snc-page .snc-btn-row { display: grid; grid-template-columns: 1fr; }
          .snc-page .snc-btn { width: 100%; min-height: 50px; }
          .snc-page .snc-hero-proof { display: grid; gap: 10px; }
          .snc-page .snc-trust-grid { grid-template-columns: 1fr; }
          .snc-page .snc-trust-item + .snc-trust-item { border-left: none; border-top: 1px solid var(--snc-divider); }
          .snc-page .snc-assessment-grid,
          .snc-page .snc-quality-grid,
          .snc-page .snc-why-grid { grid-template-columns: 1fr; }
          .snc-page .snc-assessment-item,
          .snc-page .snc-quality-item,
          .snc-page .snc-why-item { padding: 24px 22px; }
          .snc-page .snc-endpoint-visual { padding: 22px; }
          .snc-page .snc-endpoint-arrow { display: none; }
          .snc-page .snc-disease-tags { gap: 6px; }
          .snc-page .snc-device-visual { grid-template-columns: 1fr; }
          .snc-page .snc-phone--small { transform: none; }
          .snc-page .snc-term-visual { padding: 22px; }
          .snc-page .snc-term-track { grid-template-columns: repeat(2,minmax(0,1fr)); }
          .snc-page .snc-workflow-list { margin-left: 18px; }
          .snc-page .snc-workflow-step { padding-left: 48px; }
          .snc-page .snc-life-items { display: block; }
          .snc-page .snc-life-items span { display: block; padding: 2px 0; }
          .snc-page .snc-life-items span:not(:last-child)::after { display: none; }
          .snc-page .snc-faq-answer { padding-right: 0; }
          .snc-page .snc-final { padding: 68px 0; }
        }

        @media (max-width: 360px) {
          .snc-page h1 { font-size: 38px; }
          .snc-page h2 { font-size: 30px; }
          .snc-page .snc-hero-art { width: 100%; margin-left: auto; margin-right: auto; }
          .snc-page .snc-workflow-list { margin-left: 14px; }
          .snc-page .snc-workflow-step { padding-left: 42px; }
          .snc-page .snc-workflow-number { left: -22px; width: 44px; height: 44px; }
          .snc-page .snc-life-row { grid-template-columns: 40px minmax(0,1fr); gap: 12px 14px; }
          .snc-page .snc-life-index { width: 38px; height: 38px; }
          .snc-page .snc-faq-item summary { gap: 14px; font-size: 19px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .snc-page .snc-btn { transition: none; }
          .snc-page .snc-faq-icon::after { transition: none; }
        }
      `}</style>

      <section className="snc-hero" aria-labelledby="snc-title">
        <div className="snc-shell snc-hero-grid">
          <div className="snc-hero-copy">
            <p className="snc-eyebrow">Therapeutic Area Expertise</p>
            <h1 id="snc-title">Neurology &amp; CNS Translation Services</h1>
            <p className="snc-lead">
              Advance neurological and CNS programs globally with specialized translation that helps preserve scientific meaning, clinical assessment consistency, and clear communication across patients, caregivers, study sites, and regulatory teams.
            </p>
            <p className="snc-hero-support">
              From neurological endpoints and clinical outcome assessments to protocols, eCOA, patient materials, safety content, and regulatory submissions, Sesen provides connected multilingual support across the CNS development lifecycle.
            </p>
            <div className="snc-btn-row">
              <PrimaryButton href={QUOTE_URL}>REQUEST A QUOTE</PrimaryButton>
              <SecondaryButton href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</SecondaryButton>
            </div>
            <div className="snc-hero-proof" aria-label="Neurology and CNS translation capabilities">
              <span><Icon name="brain" size={16} /> Neurological endpoints &amp; COAs</span>
              <span><Icon name="people" size={16} /> Patient, caregiver &amp; rater content</span>
              <span><Icon name="globe" size={16} /> Global clinical &amp; regulatory workflows</span>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="snc-trust" aria-label="Sesen life sciences translation credentials">
        <div className="snc-shell snc-trust-grid">
          <div className="snc-trust-item"><Icon name="brain" /><div><strong>Life Sciences Specialization</strong><span>Clinical, medical, scientific &amp; regulatory content</span></div></div>
          <div className="snc-trust-item"><Icon name="globe" /><div><strong>150+ Languages</strong><span>Scalable multilingual program support</span></div></div>
          <div className="snc-trust-item"><Icon name="check" /><div><strong>ISO-Certified Processes</strong><span>ISO 17100 · ISO 9001 · ISO 13485</span></div></div>
          <div className="snc-trust-item"><Icon name="people" /><div><strong>Human Expert Review</strong><span>Technology-supported quality workflows</span></div></div>
        </div>
      </section>

      <section className="snc-section snc-section--soft">
        <div className="snc-shell snc-authority-grid">
          <div className="snc-authority-copy">
            <h2>CNS Development Depends on More Than Accurate Terminology</h2>
            <p className="snc-lead">
              Neurological disease can be measured through cognition, memory, movement, behavior, symptoms, function, quality of life, caregiver observations, clinician assessments, imaging, biomarkers, and disease progression.
            </p>
            <p>
              A subtle difference in an assessment instruction may affect how a participant interprets a question. A terminology change can create inconsistency between a protocol and an eCOA instrument. Patient, caregiver, investigator, and regulatory materials may describe the same underlying clinical concept for very different audiences.
            </p>
            <p>
              Sesen helps CNS teams manage those relationships across languages so scientific meaning, assessment intent, patient communication, and approved terminology remain connected throughout a global program.
            </p>
          </div>
          <div className="snc-authority-pillars">
            {[
              ["brain", "Scientific Meaning", "Preserve neurological, anatomical, molecular, clinical, and pharmacological concepts across specialized scientific and clinical content."],
              ["clipboard", "Assessment Meaning", "Maintain the intended meaning of cognitive, behavioral, functional, symptom, and performance measures across languages and formats."],
              ["person", "Patient Understanding", "Communicate complex study concepts appropriately to participants and caregivers while staying aligned with the underlying clinical content."],
              ["network", "Program Consistency", "Keep terminology and approved language coordinated across assessments, protocols, patient materials, safety content, reports, and submissions."],
            ].map(([icon,title,body]) => (
              <div className="snc-authority-pillar" key={title}>
                <div className="snc-icon-tile"><Icon name={icon} /></div>
                <div><strong>{title}</strong><p>{body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--blue-soft">
        <div className="snc-shell">
          <div className="snc-endpoint-grid">
            <div className="snc-endpoint-copy">
              <p className="snc-eyebrow">Endpoint Consistency</p>
              <h2>One Neurological Endpoint Across Every Language</h2>
              <p className="snc-lead">
                Neurology and CNS studies often depend on clinical outcome assessments that capture changes a laboratory test alone cannot fully describe.
              </p>
              <p>
                A study may measure memory, cognition, speech, motor performance, seizure activity, fatigue, pain, behavior, activities of daily living, disease severity, or caregiver-observed change. The wording used to ask a question, explain a task, describe a response option, or instruct a rater can therefore carry clinical importance.
              </p>
              <p>
                Sesen supports multilingual clinical outcome assessment content with workflows designed to preserve intended meaning while controlling terminology and linguistic variation across markets.
              </p>
            </div>
            <EndpointVisual />
          </div>

          <div className="snc-assessment-grid">
            {assessmentTypes.map((item) => (
              <article className="snc-assessment-item" key={item.title}>
                <Icon name={item.icon} />
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <div className="snc-assessment-link">
            <EditorialLink href={links.linguisticValidation}>Explore Linguistic Validation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell snc-stakeholder-grid">
          <StakeholderArt />
          <div className="snc-stakeholder-copy">
            <h2>Clear CNS Communication Across Patients, Caregivers, and Clinical Teams</h2>
            <p className="snc-lead">
              Neurological disease can change how people understand, remember, communicate, move, or report what they experience.
            </p>
            <p>
              Depending on the condition and study design, communication may involve the patient, a parent or caregiver, an observer, an investigator, a clinician, a trained rater, or several of these groups at once. Each audience needs language appropriate to its role while the underlying clinical concepts remain aligned.
            </p>
            <div className="snc-audience-list">
              <div className="snc-audience-row"><strong>Patient Communication</strong><p>Informed consent, study instructions, questionnaires, diaries, ePRO content, educational materials, recruitment content, and other patient-facing communications.</p></div>
              <div className="snc-audience-row"><strong>Caregiver &amp; Observer Communication</strong><p>Caregiver instructions, ObsRO instruments, questionnaires, study information, and related content where an observer contributes to understanding the patient's condition.</p></div>
              <div className="snc-audience-row"><strong>Investigator &amp; Rater Communication</strong><p>Investigator guidance, rater manuals, scoring instructions, administration guidance, site reference materials, and clinical training content.</p></div>
            </div>
            <div className="snc-stakeholder-links">
              <EditorialLink href={links.icf}>Informed Consent Form Translation</EditorialLink>
              <EditorialLink href={links.clinicalTrial}>Clinical Trial Translation Services</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--soft">
        <div className="snc-shell">
          <div className="snc-heading snc-mobile-center snc-disease-heading">
            <h2>Translation Expertise Across Neurological and CNS Disorders</h2>
            <p className="snc-lead">
              Neurological disorders span different disease mechanisms, patient populations, clinical manifestations, outcome measures, and treatment approaches. Sesen supports multilingual programs across major CNS indications with linguistic resources matched to the scientific and clinical requirements of the content.
            </p>
          </div>
          <div className="snc-disease-list">
            {diseaseGroups.map((item) => (
              <article className="snc-disease-row" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <div className="snc-disease-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
                <div className="snc-disease-body">
                  <p>{item.body}</p>
                  {item.link && <EditorialLink href={item.link.href}>{item.link.label}</EditorialLink>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell snc-evidence-grid">
          <div className="snc-evidence-intro snc-mobile-center">
            <p className="snc-eyebrow">Multidimensional Evidence</p>
            <h2>From Biomarkers to Behavior and Everyday Function</h2>
            <p className="snc-lead">
              Modern CNS development can combine molecular or genetic evidence with imaging, laboratory biomarkers, clinician assessments, patient reports, caregiver observations, cognitive performance, and everyday function.
            </p>
          </div>
          <div className="snc-evidence-streams">
            {evidenceStreams.map((item) => (
              <div className="snc-evidence-stream" key={item.title}>
                <div className="snc-icon-tile"><Icon name={item.icon} /></div>
                <div><strong>{item.title}</strong><p>{item.body}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--blue-soft">
        <div className="snc-shell snc-rater-layout">
          <div className="snc-rater-intro">
            <p className="snc-eyebrow">Rater &amp; Site Consistency</p>
            <h2>Supporting Consistent Assessments Across Global Study Sites</h2>
            <p className="snc-lead">
              Some CNS assessments depend on standardized administration as well as standardized content.
            </p>
            <p className="snc-rater-support">
              Investigators and raters may need to present instructions consistently, apply scoring criteria correctly, understand translated terminology, and work from the same approved version of an assessment or training resource.
            </p>
            <div className="snc-guardrail"><p>Controlled multilingual language does not replace clinical training or instrument validation. It helps reduce avoidable linguistic variation as study content moves across languages and sites.</p></div>
            <div className="snc-rater-links">
              <EditorialLink href={links.siteTraining}>Site Training Materials Translation</EditorialLink>
              <EditorialLink href={links.elearning}>eLearning &amp; Training Translation</EditorialLink>
            </div>
          </div>
          <div className="snc-rater-list">
            {raterRows.map(([title,body]) => <div className="snc-rater-row" key={title}><strong>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell snc-digital-grid">
          <div className="snc-digital-copy">
            <h2>CNS Assessments Across Digital and Decentralized Trials</h2>
            <p className="snc-lead">
              eCOA platforms, mobile study applications, digital diaries, remote assessments, wearables, and connected technologies can extend neurological data collection beyond the traditional clinic visit.
            </p>
            <div className="snc-digital-list">
              {digitalItems.map(([title,body]) => <div className="snc-digital-row" key={title}><strong>{title}</strong><span>{body}</span></div>)}
            </div>
            <div className="snc-stakeholder-links">
              <EditorialLink href={links.ecoa}>eCOA Translation Services</EditorialLink>
              <EditorialLink href={links.medicalSoftware}>Clinical &amp; Medical Software Localization</EditorialLink>
            </div>
          </div>
          <div className="snc-device-visual" aria-hidden="true">
            <div className="snc-phone">
              <div className="snc-phone-top" />
              <div className="snc-phone-label">ePRO Assessment</div>
              <h3>How severe is your fatigue today?</h3>
              <div className="snc-scale"><span>0</span><span>1</span><span>2</span><span>3</span><span>4</span></div>
              <div className="snc-phone-line" /><div className="snc-phone-line short" />
            </div>
            <div className="snc-phone snc-phone--small">
              <div className="snc-phone-top" />
              <div className="snc-phone-label">Rater Instructions</div>
              <h3>Assessment instructions</h3>
              <div className="snc-phone-line" /><div className="snc-phone-line" /><div className="snc-phone-line short" />
              <div className="snc-guardrail snc-device-note"><p>Approved terminology and response structures stay aligned across interfaces.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--dark">
        <div className="snc-shell snc-modalities-grid">
          <div className="snc-modalities-intro">
            <p className="snc-eyebrow">Evolving CNS Science</p>
            <h2>New Therapeutic Modalities Are Changing CNS Development</h2>
            <p className="snc-lead">
              Neurological drug development increasingly spans both established pharmacological approaches and therapies designed around more specific biological or genetic mechanisms.
            </p>
            <p>
              These programs can introduce highly specialized molecular terminology, genetic nomenclature, novel mechanisms of action, complex administration procedures, long-term follow-up, specialized safety language, and new patient-communication challenges.
            </p>
            <div className="snc-modality-links">
              <EditorialLink href={links.rareDisease}>Rare Disease Translation Services</EditorialLink>
              <EditorialLink href={links.cellGene}>Cell &amp; Gene Therapy Translation Services</EditorialLink>
              <EditorialLink href={links.mrnaRna}>mRNA &amp; RNA Translation Services</EditorialLink>
              <EditorialLink href={links.biopharma}>Biopharmaceutical &amp; Biosimilar Translation Services</EditorialLink>
            </div>
          </div>
          <div className="snc-modalities-list">
            {modalityItems.map(([title,body]) => <div className="snc-modality-row" key={title}><strong>{title}</strong><span>{body}</span></div>)}
          </div>
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell">
          <div className="snc-heading snc-mobile-center">
            <p className="snc-eyebrow">Connected Content</p>
            <h2>One CNS Language Across the Clinical Development Lifecycle</h2>
            <p className="snc-lead">
              A neurological program does not produce isolated documents. Terminology introduced in early scientific and protocol content may later appear in assessments, patient materials, investigator training, safety documentation, study reports, regulatory submissions, and Medical Affairs communications.
            </p>
          </div>
          <div className="snc-lifecycle">
            {lifecycleStages.map((stage,index) => (
              <div className="snc-life-row" key={stage.phase}>
                <div className="snc-life-index">{String(index + 1).padStart(2,"0")}</div>
                <div className="snc-life-phase">{stage.phase}</div>
                <div className="snc-life-items">{stage.items.map(item => <span key={item}>{item}</span>)}</div>
                <div className="snc-life-links">{stage.links.map(([label,href]) => <EditorialLink href={href} key={label}>{label}</EditorialLink>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--soft">
        <div className="snc-shell snc-term-grid">
          <div className="snc-term-copy">
            <h2>One CNS Vocabulary Across Every Document and Market</h2>
            <p className="snc-lead">
              Neurological development creates terminology that needs to remain stable long after the first translation is delivered.
            </p>
            <p>
              Disease stages, anatomical terms, symptoms, biomarkers, endpoint names, scoring language, investigational products, mechanisms of action, dosing, genetic terminology, and safety concepts may recur across hundreds of related assets.
            </p>
            <p>
              Sesen builds reusable linguistic assets around the program rather than treating every document as a new translation.
            </p>
            <div className="snc-term-list">{terminologyItems.map(item => <span key={item}>{item}</span>)}</div>
          </div>
          <TerminologyVisual />
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell snc-workflow-grid">
          <div className="snc-workflow-intro">
            <h2>A Controlled Workflow for Global CNS Programs</h2>
            <p className="snc-lead">
              Different neurological content carries different risks and requirements. Sesen adapts translation and review according to the disease area, content type, intended audience, intended use, language combination, validation requirements, format, and client specifications.
            </p>
            <div className="snc-workflow-note"><p><strong>Built around the content, not a one-size-fits-all workflow.</strong> A neurological questionnaire, protocol amendment, caregiver guide, gene-therapy ICF, eCOA screen, and clinical study report may require different combinations of professional expertise, validation, technology, and quality control.</p></div>
          </div>
          <div className="snc-workflow-list">
            {workflowSteps.map(([title,body],index) => (
              <div className="snc-workflow-step" key={title}>
                <div className="snc-workflow-number">{String(index + 1).padStart(2,"0")}</div>
                <h3>{title}</h3><p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--blue-soft">
        <div className="snc-shell">
          <div className="snc-heading snc-mobile-center">
            <h2>Quality Controls Built for High-Stakes Clinical Language</h2>
            <p className="snc-lead">
              Strong CNS translation requires more than fluent target-language text. Quality must address scientific concepts, assessment context, numerical information, related documents, and the downstream use of the content.
            </p>
          </div>
          <div className="snc-quality-grid">
            {qualityItems.map(([title,body]) => <article className="snc-quality-item" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
          <div className="snc-quality-note"><p><strong>Human linguistic judgment remains central.</strong> Translation technology, terminology systems, translation memory, and automated QA support consistency and efficiency without replacing the professional expertise required for specialized CNS content.</p></div>
        </div>
      </section>

      <section className="snc-section snc-section--dense">
        <div className="snc-shell snc-global-layout">
          <div className="snc-global-intro snc-mobile-center">
            <h2>Global CNS Studies Without Fragmented Language Workflows</h2>
            <p className="snc-lead">
              Multicountry neurological programs can produce large volumes of interconnected content across languages, sites, platforms, reviewers, and study phases. Sesen helps sponsors and CROs centralize those multilingual workflows.
            </p>
            <div className="snc-cert-line"><strong>ISO-certified processes:</strong> ISO 17100 · ISO 9001 · ISO 13485</div>
          </div>
          <div className="snc-global-grid">
            {globalItems.map(([title,body]) => <div className="snc-global-item" key={title}><strong>{title}</strong><p>{body}</p></div>)}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--dark">
        <div className="snc-shell">
          <div className="snc-heading snc-heading--center snc-mobile-center">
            <p className="snc-eyebrow">Connected Therapeutic Expertise</p>
            <h2>CNS Development Often Crosses Therapeutic Boundaries</h2>
            <p className="snc-lead">
              Neurological programs increasingly intersect with rare disease, immunology, biologics, and advanced genetic and RNA-based therapies. Sesen helps clients manage content across those boundaries without fragmenting the multilingual strategy.
            </p>
          </div>
          <div className="snc-related-list">
            {relatedAreas.map(item => (
              <div className="snc-related-row" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <EditorialLink href={item.href}>{item.linkLabel}</EditorialLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-section snc-section--soft snc-section--dense">
        <div className="snc-shell">
          <div className="snc-heading snc-heading--center snc-mobile-center">
            <h2>Why Life Sciences Teams Choose Sesen for CNS Translation</h2>
            <p className="snc-lead">
              Specialized human expertise, clinical and regulatory depth, terminology governance, and scalable multilingual workflows come together around the needs of each CNS program.
            </p>
          </div>
          <div className="snc-why-grid">
            {whyItems.map(([title,body]) => <article className="snc-why-item" key={title}><h3>{title}</h3><p>{body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="snc-section">
        <div className="snc-shell snc-faq-grid">
          <div className="snc-faq-intro">
            <h2>Neurology &amp; CNS Translation FAQs</h2>
            <p className="snc-lead">
              Common questions about multilingual neurological clinical trials, clinical outcome assessments, patient and caregiver materials, digital assessments, terminology, and ongoing CNS programs.
            </p>
          </div>
          <div className="snc-faq-list">
            {faqs.map((faq,index) => (
              <details className="snc-faq-item" key={faq.q} open={index === 0}>
                <summary><span>{faq.q}</span><span className="snc-faq-icon" aria-hidden="true" /></summary>
                <div className="snc-faq-answer"><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="snc-final">
        <div className="snc-shell snc-final-grid">
          <div className="snc-final-copy">
            <h2>Keep Your CNS Program Consistent Across Every Language</h2>
            <p>
              From neurological assessments and patient communication to clinical documentation, safety content, digital trials, and global regulatory submissions, Sesen helps CNS teams manage multilingual content as one connected program.
            </p>
          </div>
          <div className="snc-btn-row">
            <PrimaryButton href={QUOTE_URL}>REQUEST A QUOTE</PrimaryButton>
            <SecondaryButton href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</SecondaryButton>
          </div>
        </div>
      </section>
    </main>
  );
}
