// Sesen Immunology & Autoimmune Disease Translation Services Wireframe v3
// Responsive, content, internal-link, eyebrow, and disease-area layout refinement pass.
const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const LIFE_SCIENCES_URL = "https://www.sesen.com/life-sciences-translation-services/";
const MED_SCI_URL = "https://www.sesen.com/medical-scientific-translation-services/";
const BIOTECH_URL = "https://www.sesen.com/biotechnology-translation-services/";
const CLINICAL_URL = "https://www.sesen.com/clinical-trial-translation-services/";
const ICF_URL = "https://www.sesen.com/informed-consent-form-translation-services/";
const CSR_URL = "https://www.sesen.com/clinical-study-report-translation-services/";
const LING_VALIDATION_URL = "https://www.sesen.com/linguistic-validation-services/";
const ECOA_URL = "https://www.sesen.com/ecoa-translation-services/";
const REGULATORY_URL = "https://www.sesen.com/regulatory-translation-services/";
const ECTD_URL = "https://www.sesen.com/ectd-ctd-translation-services/";
const LABELING_URL = "https://www.sesen.com/labeling-translation-services/";
const PV_URL = "https://www.sesen.com/pharmacovigilance-translation-services/";
const MED_AFFAIRS_URL = "https://www.sesen.com/medical-affairs-translation-services/";
const BIOPHARMA_URL = "https://www.sesen.com/biopharmaceutical-biosimilar-translation-services/";
const CELL_GENE_URL = "https://www.sesen.com/cell-gene-therapy-translation-services/";
const MRNA_RNA_URL = "https://www.sesen.com/mrna-rna-therapeutics-translation-services/";

function Icon({ name, size = 24, strokeWidth = 1.7 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    focusable: false,
  };

  const icons = {
    arrow: <><path d="M5 12h13" /><path d="m14 7 5 5-5 5" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18" /><path d="M12 3a15 15 0 0 1 0 18" /><path d="M12 3a15 15 0 0 0 0 18" /></>,
    shield: <><path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z" /><path d="m9 12 2 2 4-5" /></>,
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
    file: <><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v5h5" /><path d="M10 12h5M10 16h5" /></>,
    layers: <><path d="m12 2 9 5-9 5-9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /><path d="M15 9 21 3" /><path d="M17 3h4v4" /></>,
    molecule: <><circle cx="6" cy="12" r="2.5" /><circle cx="17" cy="6" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="m8.2 10.8 6.4-3.5M8.3 13l7.4 3M17.3 8.5l.5 6" /></>,
    cell: <><path d="M12 3c5.3 0 9 3.6 9 8.9 0 4.9-3.5 9.1-8.5 9.1C7 21 3 17.5 3 12.2 3 6.6 6.5 3 12 3Z" /><path d="M9.2 9.3c1.3-2 4.5-2 5.7-.1 1.1 1.8.2 4.4-1.7 5.2-2.1.9-4.5-.3-4.9-2.4-.2-1 .1-1.9.9-2.7Z" /><path d="M6.2 7.5h.01M17.8 11h.01M7.3 16.2h.01M15.8 17h.01" /></>,
    antibody: <><path d="M12 21v-7" /><path d="M12 14 6 7" /><path d="M12 14l6-7" /><path d="M6 7 4 3M6 7 9 4M18 7l2-4M18 7l-3-3" /></>,
    patient: <><circle cx="12" cy="7" r="3" /><path d="M5 21c.5-5 3-8 7-8s6.5 3 7 8" /><path d="M8.5 17h7" /></>,
    chart: <><path d="M4 20V9M10 20V4M16 20v-7M22 20H2" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
    spark: <><path d="m12 3 1.2 4.2L17 9l-3.8 1.8L12 15l-1.2-4.2L7 9l3.8-1.8z" /><path d="m19 15 .7 2.3L22 18l-2.3.7L19 21l-.7-2.3L16 18l2.3-.7z" /></>,
    refresh: <><path d="M20 7v5h-5" /><path d="M4 17v-5h5" /><path d="M6.1 8.4A7 7 0 0 1 18 7l2 5M18 15.6A7 7 0 0 1 6 17l-2-5" /></>,
    language: <><path d="M4 5h8M8 3v2M5 9c1.7 2.1 4.3 3.8 7 4.6M10 5c-.7 3.5-2.4 6.1-5 8" /><path d="m14 19 3.5-9 3.5 9M15.4 16h4.2" /></>,
    pulse: <><path d="M3 12h4l2-6 4 12 2-6h6" /></>,
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`sia-button${secondary ? " sia-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.9} />
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`sia-link${light ? " sia-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={16} strokeWidth={1.9} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="sia-hero-art" aria-hidden="true">
      <svg viewBox="0 0 600 520" fill="none">
        <defs>
          <linearGradient id="siaHeroPanel" x1="80" y1="40" x2="520" y2="470" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFF" />
            <stop offset="1" stopColor="#EEF3FF" />
          </linearGradient>
          <filter id="siaShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="16" stdDeviation="18" floodColor="#253F8F" floodOpacity="0.10" />
          </filter>
        </defs>
        <path d="M78 91c0-31 25-56 56-56h306c31 0 56 25 56 56v336c0 31-25 56-56 56H134c-31 0-56-25-56-56V91Z" fill="url(#siaHeroPanel)" stroke="#DDE5F5" />
        <path d="M132 131h328" stroke="#D7E1F5" strokeWidth="1.4" />
        <path d="M132 382h328" stroke="#D7E1F5" strokeWidth="1.4" />
        <path d="M170 162c42 14 67 31 93 64M429 167c-41 10-67 31-92 58M170 353c42-12 66-28 94-60M430 352c-40-10-69-29-93-59" stroke="#9BB0E6" strokeWidth="1.8" strokeDasharray="5 7" />

        <g filter="url(#siaShadow)">
          <path d="M300 167c63 0 111 43 111 101 0 62-43 111-109 111-67 0-114-45-114-107 0-61 46-105 112-105Z" fill="#FFFFFF" stroke="#BFCDEB" strokeWidth="1.6" />
          <path d="M302 208c29 0 50 20 50 47 0 29-20 52-50 52-31 0-52-21-52-50 0-29 21-49 52-49Z" fill="#EAF0FF" stroke="#4B6FD8" strokeWidth="2.2" />
          <path d="M280 247c9-15 31-19 45-6 13 12 10 33-5 43-16 11-38 4-44-13-3-8-1-17 4-24Z" stroke="#3659BB" strokeWidth="2" />
          <circle cx="266" cy="219" r="5" fill="#6F8BE1" />
          <circle cx="343" cy="326" r="4" fill="#4B6FD8" />
          <circle cx="365" cy="233" r="5" fill="#86A0E9" />
          <circle cx="242" cy="314" r="4" fill="#6F8BE1" />
        </g>

        <g filter="url(#siaShadow)">
          <rect x="105" y="113" width="132" height="82" rx="20" fill="#FFFFFF" stroke="#CAD7F1" />
          <path d="M165 170v-26M165 145l-16-19M165 145l17-20M149 126l-6-12M149 126l12-10M182 125l7-12M182 125l-12-9" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <text x="122" y="181" fill="#46546D" fontSize="12" fontFamily="Inter, sans-serif">Antibody / Target</text>
        </g>

        <g filter="url(#siaShadow)">
          <rect x="368" y="108" width="126" height="87" rx="20" fill="#FFFFFF" stroke="#CAD7F1" />
          <circle cx="409" cy="146" r="8" stroke="#3659BB" strokeWidth="2" />
          <circle cx="451" cy="130" r="6" stroke="#6F8BE1" strokeWidth="2" />
          <circle cx="451" cy="164" r="6" stroke="#4B6FD8" strokeWidth="2" />
          <path d="m417 142 27-10M417 151l27 11M451 136v22" stroke="#9BB0E6" strokeWidth="1.8" />
          <text x="384" y="183" fill="#46546D" fontSize="12" fontFamily="Inter, sans-serif">Pathway / Biomarker</text>
        </g>

        <g filter="url(#siaShadow)">
          <rect x="102" y="337" width="143" height="82" rx="20" fill="#FFFFFF" stroke="#CAD7F1" />
          <path d="M126 362h36M126 376h52M126 390h43" stroke="#B7C5E6" strokeWidth="2" strokeLinecap="round" />
          <path d="m191 369 7 7 13-16" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="120" y="407" fill="#46546D" fontSize="12" fontFamily="Inter, sans-serif">Clinical Evidence</text>
        </g>

        <g filter="url(#siaShadow)">
          <rect x="359" y="338" width="143" height="84" rx="20" fill="#FFFFFF" stroke="#CAD7F1" />
          <path d="M389 367h28M389 382h43M389 397h35" stroke="#B7C5E6" strokeWidth="2" strokeLinecap="round" />
          <path d="M453 360h19v19h-19z" stroke="#3659BB" strokeWidth="2" />
          <path d="m458 369 4 4 7-9" stroke="#4B6FD8" strokeWidth="1.8" />
          <text x="379" y="410" fill="#46546D" fontSize="12" fontFamily="Inter, sans-serif">Regulatory / Patient</text>
        </g>

        <path d="M293 150v-26h54" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
        <path d="m341 119 6 5-6 5" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="233" y="111" fill="#3659BB" fontSize="11" fontWeight="700" letterSpacing="1.5" fontFamily="Inter, sans-serif">IMMUNE SCIENCE → GLOBAL LANGUAGE</text>
      </svg>
    </div>
  );
}

function DiseaseMap() {
  const groups = [
    ["Rheumatology", "Rheumatoid arthritis · systemic lupus erythematosus (SLE) · Sjögren's disease · systemic sclerosis · inflammatory myopathies"],
    ["Dermatology", "Psoriasis · psoriatic arthritis · atopic dermatitis · hidradenitis suppurativa"],
    ["Gastroenterology", "Inflammatory bowel disease (IBD) · Crohn's disease · ulcerative colitis"],
    ["Neuroimmunology", "Multiple sclerosis · myasthenia gravis · neuromyelitis optica spectrum disorder (NMOSD)"],
    ["Endocrinology", "Type 1 diabetes · autoimmune endocrine conditions"],
    ["Respiratory & Allergy", "Inflammatory · allergic · other immune-mediated conditions"],
  ];

  return (
    <div className="sia-disease-map" aria-label="Immunology connects multiple disease areas through shared mechanisms, targets, biomarkers, and terminology">
      <div className="sia-disease-hub">
        <div className="sia-disease-hub-icon"><Icon name="cell" size={34} strokeWidth={1.6} /></div>
        <div className="sia-disease-hub-copy">
          <strong>Immunology</strong>
          <span>Shared biology can connect programs across specialties and indications.</span>
        </div>
        <div className="sia-disease-shared" aria-label="Shared immunology concepts">
          <span>Mechanisms</span>
          <span>Targets</span>
          <span>Biomarkers</span>
          <span>Terminology</span>
        </div>
      </div>
      <div className="sia-disease-branches">
        {groups.map(([title, diseaseText]) => (
          <div className="sia-disease-branch" key={title}>
            <strong>{title}</strong>
            <span>{diseaseText}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MechanismDiagram() {
  const steps = [
    ["target", "Target", "Immune cell, receptor, cytokine or pathway"],
    ["molecule", "Pathway", "Biological interaction and signaling context"],
    ["pulse", "Response", "Biomarker, pharmacodynamic or immune effect"],
    ["chart", "Clinical Effect", "Endpoint, disease activity, safety or outcome"],
  ];
  return (
    <div className="sia-mechanism-diagram" aria-label="Target to clinical effect pathway">
      {steps.map(([icon, title, text], index) => (
        <div className="sia-mechanism-step" key={title}>
          <div className="sia-mechanism-icon"><Icon name={icon} size={23} /></div>
          <strong>{title}</strong>
          <span>{text}</span>
          {index < steps.length - 1 && <Icon name="arrow" size={18} strokeWidth={1.6} />}
        </div>
      ))}
    </div>
  );
}

function TerminologyFlow() {
  const nodes = [
    ["Scientific Source", "Mechanism · target · biomarker"],
    ["Protocol & IB", "Endpoints · eligibility · safety"],
    ["ICF & Patient", "Understandable participant language"],
    ["COA / eCOA", "Concepts · scales · response options"],
    ["Clinical Study Report", "Methods · efficacy · safety · TLFs"],
    ["Regulatory Submission", "Dossiers · summaries · authority questions"],
    ["Safety & Labeling", "Risks · product information · lifecycle"],
    ["Medical Affairs", "Publications · congresses · scientific exchange"],
  ];

  return (
    <div className="sia-term-flow" aria-label="One immunology vocabulary across the content lifecycle">
      <div className="sia-term-rail" aria-hidden="true" />
      {nodes.map(([title, text], index) => (
        <div className="sia-term-node" key={title}>
          <span className="sia-term-index">{String(index + 1).padStart(2, "0")}</span>
          <div>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        </div>
      ))}
      <div className="sia-term-foundation">
        <Icon name="layers" size={20} />
        <strong>Controlled terminology · translation memory · approved references · reviewer decisions</strong>
      </div>
    </div>
  );
}

function OutcomeMockup() {
  return (
    <div className="sia-ecoa-mock" aria-label="Electronic clinical outcome assessment example">
      <div className="sia-ecoa-top">
        <span>Patient-Reported Outcome</span>
        <span>Visit 6 · Today</span>
      </div>
      <div className="sia-ecoa-body">
        <span className="sia-ecoa-kicker">Daily Symptom Check</span>
        <strong>How severe was your fatigue today?</strong>
        <div className="sia-scale">
          {["None", "Mild", "Moderate", "Severe", "Very severe"].map((label, index) => (
            <div className="sia-scale-option" key={label}>
              <span className={index === 2 ? "sia-scale-dot sia-scale-dot-active" : "sia-scale-dot"} />
              <small>{label}</small>
            </div>
          ))}
        </div>
        <div className="sia-ecoa-review">
          <Icon name="check" size={16} strokeWidth={2} />
          <span>Concept · response scale · screen context · patient comprehension</span>
        </div>
      </div>
    </div>
  );
}

function TherapeuticProgression() {
  const stages = [
    ["Established & Targeted", "Conventional immunomodulation", "Mechanism-appropriate clinical language"],
    ["Targeted Biologics", "Antibodies · cytokines · receptors · FcRn · complement", "Product, pathway and immunogenicity terminology"],
    ["Advanced Immune Modulation", "Selective small molecules · bispecific / multispecific approaches", "Target interaction, safety and response language"],
    ["Emerging / Investigational", "CAR-T · CAAR-T · Treg · in-vivo engineering · RNA-enabled tolerance", "New terminology across science, manufacturing, clinical and patient content"],
  ];
  return (
    <div className="sia-therapy-progression" aria-label="Immunology therapeutic progression">
      {stages.map(([label, title, text], index) => (
        <div className="sia-therapy-stage" key={title}>
          <span className="sia-therapy-label">{label}</span>
          <strong>{title}</strong>
          <p>{text}</p>
          {index < stages.length - 1 && <span className="sia-therapy-arrow" aria-hidden="true">→</span>}
        </div>
      ))}
    </div>
  );
}

function Workflow() {
  const steps = [
    ["01", "Content & Intended-Use Review", "Understand the indication, development stage, audience, content type, languages, references, timeline, and intended use."],
    ["02", "Specialized Resource Assignment", "Align professional native linguists and reviewers with the relevant medical, scientific, clinical, regulatory, or patient-facing content."],
    ["03", "Terminology & Reference Preparation", "Apply approved terminology, product language, glossaries, translation memory, previous translations, protocols, and client instructions."],
    ["04", "Translation", "Translate within the correct scientific, clinical, regulatory, safety, or patient context."],
    ["05", "Independent Linguistic Review", "Review meaning, terminology, completeness, consistency, language quality, and audience appropriateness according to the project workflow."],
    ["06", "Structured & Assisted QA", "Check terminology, numbers, units, omissions, repeated content, formatting, tags, and other detectable risks."],
    ["07", "In-Context Review When Required", "Review formatted documents, eCOA screens, digital content, patient materials, or other content where presentation affects quality."],
    ["08", "Client Review & Decision Capture", "Coordinate feedback and capture approved terminology and language decisions for appropriate reuse."],
    ["09", "Final Human Quality Control", "Complete final checks before the multilingual content is released."],
  ];

  return (
    <div className="sia-workflow-list">
      {steps.map(([number, title, text]) => (
        <article className="sia-workflow-step" key={number}>
          <span className="sia-workflow-number">{number}</span>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

const trustItems = [
  ["globe", "150+ Languages", "Global and regional immunology programs"],
  ["shield", "ISO-Certified Processes", "ISO 17100 · ISO 9001 · ISO 13485"],
  ["users", "Life Sciences Expertise", "Professional medical and scientific linguists"],
  ["layers", "Terminology Governance", "Consistency across studies, documents, indications, and versions"],
  ["check", "Human-Led Quality", "Independent review and final human quality control"],
];

const precisionPillars = [
  ["target", "Mechanistic Precision", "Preserve relationships among immune cells, targets, pathways, biomarkers, and therapeutic mechanisms."],
  ["file", "Clinical Context", "Use terminology appropriate to the indication, study design, endpoint, intended audience, and way the content will be used."],
  ["layers", "Terminology Continuity", "Carry approved language across protocols, assessments, regulatory content, safety, labeling, and Medical Affairs."],
  ["chart", "Data & Numerical Integrity", "Apply structured checks to doses, laboratory values, units, percentages, tables, scales, and other high-risk numerical content."],
];

const scientificTopics = [
  "Innate & adaptive immunity",
  "B-cell & T-cell biology",
  "Regulatory immune cells",
  "Antigen recognition & presentation",
  "Antibodies & autoantibodies",
  "Cytokines & chemokines",
  "Receptor biology",
  "Inflammatory signaling pathways",
  "Complement biology",
  "Immune tolerance & dysregulation",
  "Immunophenotyping & biomarkers",
  "PK / PD · immunogenicity · mechanism of action",
];

const clinicalGroups = [
  ["Study Startup", ["Clinical trial protocols", "Protocol synopses", "Investigator Brochures", "Study procedures", "Eligibility criteria", "Laboratory & biomarker content", "Pharmacy / site manuals", "Investigator training"]],
  ["Regulatory & Ethics Review", ["Clinical trial application materials", "Protocol summaries", "Informed consent forms", "Assent forms", "Patient information sheets", "Privacy documentation", "IRB / ethics committee materials"]],
  ["Recruitment & Patient Communication", ["Recruitment materials", "Pre-screening content", "Patient outreach", "Study education", "Enrollment communication", "Consent / re-consent content"]],
  ["Study Execution & Reporting", ["Study manuals", "Patient diaries", "Questionnaires", "CRFs / eCRFs", "Digital trial content", "Safety communication", "Protocol amendments", "Clinical Study Reports", "Plain-language summaries"]],
];

const outcomeTypes = [
  ["PRO / ePRO", "Patient-reported outcomes, symptom questionnaires, quality-of-life instruments, diaries, and treatment-satisfaction measures."],
  ["ClinRO", "Clinician-reported scales and structured assessments used to evaluate disease activity, symptoms, function, or response."],
  ["ObsRO", "Observer-reported assessments when caregivers, parents, study partners, or other observers contribute patient information."],
  ["PerfO", "Performance-based measures using standardized tasks or activities that require consistent instructions and scoring context."],
  ["eCOA", "Digital assessment content across applications, web platforms, tablets, handheld devices, reminders, help text, and navigation."],
];

const regulatoryStages = [
  ["Clinical Evidence", "Studies, reports, endpoints, safety and scientific conclusions"],
  ["Regulatory Dossier", "CTD/eCTD content, summaries and supporting documentation"],
  ["Authority Questions", "Requests for information, sponsor responses and supporting analyses"],
  ["Approval & Labeling", "Product information, SmPCs, PILs and market-specific labeling"],
  ["Lifecycle Updates", "Variations, new evidence, safety revisions and indication changes"],
];

const patientItems = [
  "Disease mechanisms",
  "Investigational therapies",
  "Immune-system effects",
  "Study procedures",
  "Laboratory testing",
  "Treatment schedules",
  "Potential risks and benefits",
  "Infection risks",
  "Contraception / pregnancy requirements",
  "Safety monitoring",
  "Symptom reporting",
  "Long-term follow-up",
  "Study results",
];

const safetyItems = [
  "Adverse-event and serious adverse-event documentation",
  "Safety narratives and ICSRs",
  "SUSAR-related content",
  "DSURs · PSUR / PBRER materials",
  "Investigator safety communications",
  "Risk-management documentation",
  "Regulatory safety communication",
  "Safety-driven labeling updates",
];

const medicalAffairsItems = [
  ["Scientific Publications", "Manuscripts, abstracts, posters, publication summaries, and evidence materials."],
  ["Congress & Symposium", "Scientific presentations, speaker materials, handouts, and congress communication."],
  ["MSL & Field Medical", "Training, scientific slide decks, field tools, discussion guides, and approved resources."],
  ["Advisory Boards & KOLs", "Briefing materials, discussion guides, expert communication, summaries, and follow-up documentation."],
  ["Medical Information", "Standard response documents, scientific response content, product inquiries, and regional communication."],
  ["HEOR & RWE", "Outcomes research, real-world evidence, value communication, and observational-study content."],
];

const changeSteps = [
  ["Compare Versions", "Identify content that has been added, removed, or modified."],
  ["Reuse Approved Language", "Preserve approved translations when the source has not changed."],
  ["Translate the Delta", "Focus linguistic effort on new or revised content instead of unnecessarily retranslating the full document."],
  ["Carry Terminology Forward", "Maintain product, mechanism, endpoint, safety, and study terminology across versions."],
  ["Review Updated Context", "Check whether source changes affect surrounding language, cross-references, formatting, or downstream content."],
  ["Update the Knowledge Base", "Capture approved terminology and reviewer decisions for future documents, studies, indications, and markets."],
];

const audiences = [
  ["Pharmaceutical Companies", "Multilingual support from clinical development and regulatory submission through labeling, safety, Medical Affairs, market access, and commercialization."],
  ["Biotechnology Companies", "Translation for innovative immunology platforms, emerging modalities, multi-indication development, and rapidly evolving scientific content."],
  ["CROs", "Scalable study-startup, patient, eCOA, linguistic-validation, amendment, safety, and clinical-operations support."],
  ["Clinical & Translational Research Teams", "Specialized translation for biomarker programs, scientific research, clinical documentation, publications, and international collaboration."],
  ["Regulatory & Safety Teams", "Controlled multilingual workflows for submissions, authority communication, labeling, pharmacovigilance, and lifecycle updates."],
  ["Medical Affairs Teams", "Consistent scientific communication across publications, congresses, field medical, expert engagement, medical information, and global affiliates."],
];

const services = [
  ["Clinical Trial Translation Services", "Global study documents, patient-facing content, site operations, amendments, safety, digital trials, and reporting.", CLINICAL_URL, "Explore Clinical Trial Translation"],
  ["Linguistic Validation Services", "COA, eCOA, ePRO, questionnaires, symptom scales, cognitive debriefing, and multilingual validation workflows.", LING_VALIDATION_URL, "Explore Linguistic Validation"],
  ["Regulatory Translation Services", "Regulated dossiers, submissions, health authority communication, labeling, and lifecycle updates.", REGULATORY_URL, "Explore Regulatory Translation"],
  ["Pharmacovigilance Translation Services", "Case content, safety narratives, aggregate reporting, risk communication, and drug-safety operations.", PV_URL, "Explore Pharmacovigilance"],
  ["Medical Affairs Translation Services", "Publications, congresses, MSL programs, medical information, HEOR/RWE, and global evidence exchange.", MED_AFFAIRS_URL, "Explore Medical Affairs"],
  ["Biopharmaceutical & Biosimilar Translation", "Scientific, clinical, CMC, regulatory, labeling, and lifecycle support for complex biological products.", BIOPHARMA_URL, "Explore Biopharmaceutical Translation"],
  ["Cell & Gene Therapy Translation Services", "Language support for engineered cell therapies, genetic technologies, advanced clinical programs, and patient communication.", CELL_GENE_URL, "Explore Cell & Gene Therapy"],
  ["mRNA & RNA Therapeutics Translation Services", "Language support for RNA science, delivery systems, emerging immune-tolerance research, clinical development, and regulated communication.", MRNA_RNA_URL, "Explore mRNA & RNA Therapeutics"],
];

const faqs = [
  {
    q: "What are immunology and autoimmune disease translation services?",
    a: "Immunology and autoimmune disease translation services provide specialized multilingual support for scientific, clinical, regulatory, safety, patient-facing, and Medical Affairs content related to the immune system, autoimmune disorders, inflammatory diseases, and immune-modulating therapies. These projects often require controlled terminology for immune cells, antibodies, cytokines, receptors, biomarkers, pathways, disease-activity measures, mechanisms of action, clinical endpoints, and therapeutic response.",
  },
  {
    q: "What autoimmune and immune-mediated disease areas does Sesen support?",
    a: "Sesen can support translation programs across rheumatology, dermatology, gastroenterology, neuroimmunology, endocrinology, respiratory and allergic disease, and other immune-mediated therapeutic areas. Representative conditions include rheumatoid arthritis, systemic lupus erythematosus, Sjögren's disease, systemic sclerosis, inflammatory myopathies, psoriasis, psoriatic arthritis, atopic dermatitis, Crohn's disease, ulcerative colitis, multiple sclerosis, myasthenia gravis, type 1 diabetes, and other autoimmune or inflammatory diseases.",
  },
  {
    q: "What documents can Sesen translate for immunology clinical trials?",
    a: "Sesen supports protocols, protocol amendments, Investigator Brochures, informed consent forms, assent forms, clinical study documents, CRFs/eCRFs, site manuals, laboratory and pharmacy manuals, ethics committee materials, patient recruitment content, patient diaries, questionnaires, eCOA/ePRO content, safety communication, Clinical Study Reports, trial result summaries, and other clinical research materials.",
  },
  {
    q: "How does Sesen maintain immunology terminology across documents?",
    a: "Sesen can develop and maintain program-specific glossaries, translation memories, approved terminology, product language, acronyms, reference content, do-not-translate instructions, and reviewer decisions. These assets help keep language aligned as scientific concepts move from research and clinical development into regulatory submissions, safety documentation, labeling, Medical Affairs, and patient communication.",
  },
  {
    q: "Can Sesen support multiple autoimmune indications for the same therapeutic platform?",
    a: "Yes. Multi-indication programs benefit from centralized terminology and translation-memory management. Approved language relating to the mechanism, therapeutic target, product, administration, safety, and other shared concepts can be reused where appropriate, while indication-specific endpoints, assessments, disease terminology, and patient communication are managed separately.",
  },
  {
    q: "Does Sesen provide COA, eCOA, and ePRO translation for autoimmune studies?",
    a: "Yes. Sesen provides translation and linguistic validation support for PRO, ePRO, eCOA, ClinRO, ObsRO, PerfO, symptom scales, quality-of-life measures, patient diaries, and other clinical outcome assessments. Depending on project requirements, workflows may include forward translation, reconciliation, back translation, harmonization, cognitive debriefing, screenshot review, in-context review, and validation documentation.",
  },
  {
    q: "Can Sesen support regulatory submissions for immunology products?",
    a: "Yes. Sesen supports multilingual regulatory content including submission documents, CTD/eCTD content, clinical and scientific summaries, health authority correspondence, requests for information, sponsor responses, labeling, product information, and lifecycle updates. The specific workflow is adapted to the target market, authority, document type, sponsor procedures, and project requirements.",
  },
  {
    q: "Does Sesen translate content for biologics and emerging autoimmune therapies?",
    a: "Yes. Sesen supports scientific, clinical, regulatory, patient, and other life sciences content related to biologics, targeted small molecules, advanced antibody technologies, engineered cell therapies, gene-based technologies, and emerging RNA-enabled approaches. For experimental modalities, translations should preserve both the scientific meaning and the distinction between established treatment and investigational development.",
  },
  {
    q: "How does Sesen translate complex autoimmune information for patients?",
    a: "Patient-facing translation requires both accuracy and readability. Sesen's professional life sciences linguists preserve clinically important meaning while adapting sentence structure, terminology, and communication for the intended audience. Work may include informed consent forms, recruitment materials, education, visit instructions, eConsent, patient applications, treatment information, questionnaires, and plain-language study results.",
  },
  {
    q: "How does Sesen handle protocol amendments and recurring content updates?",
    a: "Sesen can compare source versions, identify changed content, preserve approved translations for unchanged text, translate required updates, carry controlled terminology forward, and apply linguistic and quality review to the revised version. Translation memory and terminology management help manage amendments as controlled multilingual updates rather than repeatedly starting from the beginning.",
  },
  {
    q: "Does Sesen use AI for immunology translation?",
    a: "Sesen uses language technology and AI-assisted tools where they can support translation-memory reuse, terminology consistency, quality checks, version comparison, workflow efficiency, and other appropriate tasks. Professional linguists remain responsible for scientific meaning, contextual judgment, patient readability, terminology decisions, and final linguistic quality. Workflows can be adapted to client requirements regarding AI and translation technology.",
  },
];

export default function SesenImmunologyAutoimmuneWireframeV3() {
  return (
    <main className="sia-page">
      <style>{styles}</style>

      <section className="sia-hero" aria-labelledby="sia-page-title">
        <div className="sia-shell sia-hero-grid">
          <div className="sia-hero-copy">
            <p className="sia-eyebrow">Therapeutic Area Expertise</p>
            <h1 id="sia-page-title">Immunology &amp; Autoimmune Disease Translation Services</h1>
            <p className="sia-hero-lead">
              Translate complex immunology programs with the scientific precision, terminology control, and multilingual quality required across clinical development, regulatory submissions, patient communication, safety, Medical Affairs, and emerging immune-modulating therapies.
            </p>
            <p className="sia-hero-body">
              Sesen supports pharmaceutical companies, biotechnology organizations, CROs, and global life sciences teams across autoimmune and immune-mediated diseases, helping preserve the meaning behind mechanisms, biomarkers, endpoints, disease activity, therapeutic targets, and patient outcomes in 150+ languages.
            </p>
            <div className="sia-button-row">
              <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
              <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="sia-trust-band" aria-label="Immunology translation capabilities">
        <div className="sia-shell sia-trust-grid">
          {trustItems.map(([icon, title, text]) => (
            <div className="sia-trust-item" key={title}>
              <Icon name={icon} size={21} strokeWidth={1.7} />
              <div><strong>{title}</strong><span>{text}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-complex-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <h2 id="sia-complex-title">When the Immune System Is Complex, Language Has to Stay Precise</h2>
            <p className="sia-lead">
              Immunology is built on relationships. An immune cell interacts with a receptor. A signaling pathway affects a biological response. A biomarker helps characterize disease activity. A therapeutic target connects a mechanism of action to an expected clinical effect. Those relationships have to remain intact when the science moves into another language.
            </p>
          </div>
          <div className="sia-precision-grid">
            {precisionPillars.map(([icon, title, text]) => (
              <article className="sia-precision-item" key={title}>
                <div className="sia-icon-surface"><Icon name={icon} size={23} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="sia-inline-note">
            <div>
              <strong>Scientific meaning depends on context.</strong>
              <span>Sesen combines specialized human expertise with controlled terminology, translation memory, reference management, structured review, and assisted quality assurance.</span>
            </div>
            <EditorialLink href={MED_SCI_URL}>Medical &amp; Scientific Translation Services</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sia-section sia-soft" aria-labelledby="sia-disease-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <p className="sia-eyebrow">Therapeutic Area Coverage</p>
            <h2 id="sia-disease-title">One Immune System. Many Disease Areas.</h2>
            <p className="sia-lead">
              Autoimmune and immune-mediated inflammatory diseases (IMIDs) cross conventional medical specialties, yet many programs share interconnected immune mechanisms, terminology, biomarkers, therapeutic targets, and clinical-development challenges.
            </p>
          </div>
          <DiseaseMap />
          <div className="sia-disease-caption">
            <p>
              A therapeutic target may move from one indication to another. A biomarker used in one study may reappear in another. A mechanism established in scientific documentation may later need to remain recognizable in protocols, clinical outcome assessments, regulatory submissions, labeling, and patient communication.
            </p>
            <p className="sia-emphasis-line">Different indications require different language. The underlying science still needs to remain connected.</p>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-science-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-split sia-mobile-center">
            <div>
              <h2 id="sia-science-title">Translate Complex Immune Science Without Losing the Mechanism</h2>
            </div>
            <p>
              Immunology terminology is rarely meaningful in isolation. Scientific understanding depends on how cells, molecules, pathways, targets, biomarkers, and clinical observations relate to one another.
            </p>
          </div>
          <MechanismDiagram />
          <div className="sia-science-grid">
            <div className="sia-topic-cloud" aria-label="Immunology scientific topics">
              {scientificTopics.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="sia-science-copy">
              <h3>Context Travels With the Term</h3>
              <p>
                The goal is not simply to find an equivalent term in another language. Translation needs to preserve how the target, pathway, biological response, and clinical effect relate to each other.
              </p>
              <p>
                That context can appear in research reports, preclinical documentation, biomarker strategies, protocols, Investigator Brochures, regulatory dossiers, manuscripts, abstracts, posters, presentations, and patient-facing explanations.
              </p>
              <div className="sia-related-links">
                <span className="sia-related-label">Related expertise</span>
                <div className="sia-link-row">
                  <EditorialLink href={MED_SCI_URL}>Medical &amp; Scientific Translation</EditorialLink>
                  <EditorialLink href={BIOTECH_URL}>Biotechnology Translation</EditorialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sia-section sia-pale" aria-labelledby="sia-term-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <p className="sia-eyebrow">Terminology Governance</p>
            <h2 id="sia-term-title">One Immunology Vocabulary Across Every Document</h2>
            <p className="sia-lead">
              The same receptor, cytokine, immune-cell population, biomarker, assay, endpoint, disease-activity concept, safety event, product term, or mechanism of action can appear repeatedly across the product lifecycle. Language should not drift as the evidence moves downstream.
            </p>
          </div>
          <TerminologyFlow />
          <div className="sia-term-benefits">
            <div><strong>Approved terminology</strong><span>Product, mechanism, disease, biomarker, assay, endpoint, and safety language.</span></div>
            <div><strong>Translation memory</strong><span>Reuse previously approved content where the source and context remain appropriate.</span></div>
            <div><strong>Controlled references</strong><span>Glossaries, prior translations, protocols, product references, style guidance, and do-not-translate rules.</span></div>
            <div><strong>Reviewer decision capture</strong><span>Carry approved client and in-country reviewer choices into future content.</span></div>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-multi-title">
        <div className="sia-shell sia-split">
          <div className="sia-copy-block sia-mobile-center">
            <p className="sia-eyebrow">Multi-Indication Development</p>
            <h2 id="sia-multi-title">One Therapeutic Platform Can Span Multiple Autoimmune Diseases</h2>
            <p className="sia-lead">
              Modern immunology development is increasingly organized around biological targets and therapeutic mechanisms that may extend across traditional disease boundaries.
            </p>
            <p>
              A B-cell-directed therapy, receptor-targeting biologic, pathway inhibitor, complement-targeted treatment, or other immune-modulating approach may be studied across different autoimmune indications. Each indication can introduce its own populations, endpoints, disease-activity measures, safety considerations, investigators, regulatory pathways, and patient communication.
            </p>
            <p className="sia-quote-line">One mechanism. Multiple indications. One controlled multilingual knowledge base.</p>
          </div>
          <div className="sia-multi-panel" aria-label="Multi-indication multilingual program model">
            <div className="sia-multi-core"><Icon name="target" size={30} /><strong>Shared Mechanism</strong><span>Product · target · MoA · core safety language</span></div>
            <div className="sia-multi-arrow">↓</div>
            <div className="sia-multi-indications">
              <span>Rheumatology</span><span>Neuroimmunology</span><span>Dermatology / GI</span>
            </div>
            <div className="sia-multi-arrow">↓</div>
            <div className="sia-multi-assets">
              <span>Protocols</span><span>Endpoints</span><span>COA</span><span>Regulatory</span><span>Patient</span><span>Safety</span>
            </div>
            <div className="sia-multi-foundation">Terminology · TM · approved references · version control</div>
          </div>
        </div>
      </section>

      <section className="sia-section sia-soft" aria-labelledby="sia-clinical-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-split sia-mobile-left">
            <div>
              <h2 id="sia-clinical-title">Clinical Trial Translation Built Around the Immunology Program</h2>
            </div>
            <p>
              Immunology trials can combine complex disease biology, biomarkers, treatment schedules, eligibility criteria, immunogenicity, disease-activity assessments, patient-reported symptoms, laboratory testing, safety monitoring, and recurring protocol amendments.
            </p>
          </div>
          <div className="sia-clinical-groups">
            {clinicalGroups.map(([title, items], index) => (
              <article className="sia-clinical-group" key={title}>
                <div className="sia-clinical-number">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{title}</h3>
                  <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <div className="sia-audience-flow" aria-label="Clinical trial audience flow">
            {['Sponsor', 'CRO', 'Site', 'Investigator', 'Participant', 'Health Authority'].map((item, index, arr) => (
              <span key={item}>{item}{index < arr.length - 1 && <b aria-hidden="true">→</b>}</span>
            ))}
          </div>
          <div className="sia-related-links sia-related-links-center">
            <span className="sia-related-label">Related Sesen services</span>
            <div className="sia-link-row">
              <EditorialLink href={CLINICAL_URL}>Clinical Trial Translation</EditorialLink>
              <EditorialLink href={ICF_URL}>Informed Consent Translation</EditorialLink>
              <EditorialLink href={CSR_URL}>Clinical Study Report Translation</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-outcomes-title">
        <div className="sia-shell sia-outcome-grid">
          <div className="sia-copy-block sia-mobile-center">
            <p className="sia-eyebrow">COA &amp; Linguistic Validation</p>
            <h2 id="sia-outcomes-title">Measure the Patient Experience Across Languages</h2>
            <p className="sia-lead">
              Autoimmune and inflammatory diseases can affect patients in ways that laboratory values alone cannot fully describe: pain, fatigue, stiffness, mobility, physical function, itching, sleep, gastrointestinal symptoms, daily activities, treatment burden, quality of life, and disease flares.
            </p>
            <p>
              Clinical outcome assessments may combine patient-reported, clinician-reported, observer-reported, performance-based, and electronic measures. The translated instrument needs to preserve the concept being measured, not simply the words on the screen.
            </p>
            <div className="sia-related-links">
              <span className="sia-related-label">Related Sesen services</span>
              <div className="sia-link-row">
                <EditorialLink href={LING_VALIDATION_URL}>Linguistic Validation</EditorialLink>
                <EditorialLink href={ECOA_URL}>eCOA Translation</EditorialLink>
              </div>
            </div>
          </div>
          <OutcomeMockup />
        </div>
        <div className="sia-shell sia-outcome-types">
          {outcomeTypes.map(([title, text]) => (
            <div className="sia-outcome-type" key={title}><strong>{title}</strong><span>{text}</span></div>
          ))}
        </div>
        <div className="sia-shell sia-validation-ribbon">
          <strong>Conceptual equivalence, not just linguistic accuracy</strong>
          <span>Forward translation · reconciliation · back translation where required · harmonization · cognitive debriefing · screenshot review · decision tracking</span>
        </div>
      </section>

      <section className="sia-section sia-pale" aria-labelledby="sia-reg-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-left">
            <p className="sia-eyebrow">Regulatory Lifecycle</p>
            <h2 id="sia-reg-title">Carry Immunology Evidence Into Global Regulatory Submissions</h2>
            <p className="sia-lead">
              By the time an immunology product enters regulatory review, its scientific language has already developed across research, clinical studies, manufacturing documentation, safety reporting, and product strategy. Regulatory translation should preserve those relationships.
            </p>
          </div>
          <div className="sia-reg-flow">
            {regulatoryStages.map(([title, text], index) => (
              <div className="sia-reg-stage" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <p className="sia-reg-note">
            Translation and review workflows are adapted to the authority, jurisdiction, document type, submission requirements, sponsor procedures, and approved references rather than assuming one universal regulatory pathway.
          </p>
          <div className="sia-related-links sia-related-links-center">
            <span className="sia-related-label">Related Sesen services</span>
            <div className="sia-link-row">
              <EditorialLink href={REGULATORY_URL}>Regulatory Translation</EditorialLink>
              <EditorialLink href={ECTD_URL}>CTD &amp; eCTD Translation</EditorialLink>
              <EditorialLink href={LABELING_URL}>Life Sciences Labeling Translation</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sia-section sia-advanced" aria-labelledby="sia-advanced-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <h2 id="sia-advanced-title">Where Immunology and Advanced Therapeutics Converge</h2>
            <p className="sia-lead">
              The therapeutic landscape for autoimmune and immune-mediated disease continues to move toward increasingly selective ways of modifying, suppressing, redirecting, or potentially rebalancing the immune response. Global language programs need to evolve with the science.
            </p>
          </div>
          <TherapeuticProgression />
          <div className="sia-advanced-grid">
            <article>
              <h3>Targeted Biologics</h3>
              <p>Multilingual content involving monoclonal antibodies, cytokine- and receptor-targeted therapies, B-cell-directed therapies, FcRn approaches, complement-targeted therapies, and other pathway-specific biologics.</p>
            </article>
            <article>
              <h3>Bispecific &amp; Multispecific Immune Approaches</h3>
              <p>Specialized terminology spanning antibody engineering, target-cell biology, immune-cell engagement, safety monitoring, and clinical response, including investigational T-cell-engaging approaches being explored in autoimmune disease.</p>
            </article>
            <article>
              <h3>Engineered Cell Therapies</h3>
              <p>Language support for investigational CAR-T, CAAR-T, regulatory T-cell, other engineered immune-cell, autologous, allogeneic, and next-generation in-vivo approaches, including programs exploring deep immune-cell depletion and immune reset.</p>
            </article>
            <article>
              <h3>Emerging Immune-Tolerance &amp; RNA-Enabled Approaches</h3>
              <p>Preclinical and emerging programs involving antigen-specific tolerance, autoantigen delivery, mRNA/LNP platforms, in-vivo immune-cell programming, regulatory pathways, and precision immunoengineering.</p>
            </article>
          </div>
          <div className="sia-advanced-note">
            <Icon name="shield" size={22} />
            <p><strong>Scientific precision includes development status.</strong> Emerging modalities should be communicated accurately without implying that investigational approaches are established standard autoimmune care.</p>
          </div>
          <div className="sia-related-links sia-related-links-center">
            <span className="sia-related-label">Related advanced-therapy expertise</span>
            <div className="sia-link-row">
              <EditorialLink href={CELL_GENE_URL}>Cell &amp; Gene Therapy Translation</EditorialLink>
              <EditorialLink href={BIOPHARMA_URL}>Biopharmaceutical &amp; Biosimilar Translation</EditorialLink>
              <EditorialLink href={MRNA_RNA_URL}>mRNA &amp; RNA Therapeutics Translation</EditorialLink>
            </div>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-patient-title">
        <div className="sia-shell sia-dual-editorial">
          <article className="sia-editorial-block sia-mobile-center">
            <div className="sia-editorial-icon"><Icon name="patient" size={28} /></div>
            <h2 id="sia-patient-title">Explain Complex Immune Science in Language Patients Can Understand</h2>
            <p className="sia-lead">
              A patient should not need to speak the language of an immunologist to understand what participation in a study involves. Yet the underlying science cannot simply disappear from the translation.
            </p>
            <div className="sia-chip-list">
              {patientItems.map((item) => <span key={item}>{item}</span>)}
            </div>
            <p>Scientific accuracy and patient comprehension should work together across informed consent, patient education, recruitment, digital communication, treatment instructions, and plain-language trial results.</p>
            <div className="sia-related-links">
              <span className="sia-related-label">Related patient communication services</span>
              <div className="sia-link-row">
                <EditorialLink href={ICF_URL}>Informed Consent Translation</EditorialLink>
                <EditorialLink href="https://www.sesen.com/plain-language-summary-translation-services/">Plain-Language Summary Translation</EditorialLink>
              </div>
            </div>
          </article>
          <article className="sia-editorial-block sia-editorial-block-border sia-mobile-center" aria-labelledby="sia-safety-title">
            <div className="sia-editorial-icon"><Icon name="shield" size={28} /></div>
            <h2 id="sia-safety-title">Keep Immunology Safety Communication Consistent Across Languages</h2>
            <p className="sia-lead">
              Safety terminology can evolve from first-in-human studies through post-approval use, moving across clinical reports, safety systems, investigator communication, aggregate reports, regulatory submissions, risk-management content, and labeling.
            </p>
            <ul className="sia-clean-list">{safetyItems.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="sia-related-links">
              <span className="sia-related-label">Related Sesen service</span>
              <EditorialLink href={PV_URL}>Pharmacovigilance Translation</EditorialLink>
            </div>
          </article>
        </div>
      </section>

      <section className="sia-section sia-soft" aria-labelledby="sia-medaff-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-split sia-mobile-center">
            <div>
              <p className="sia-eyebrow">Medical Affairs</p>
              <h2 id="sia-medaff-title">Carry Immunology Evidence Beyond the Submission</h2>
            </div>
            <p>
              Regulatory approval is not the end of scientific communication. Medical Affairs teams need to explain mechanisms, clinical evidence, disease state, safety, outcomes, and evolving data to healthcare professionals, experts, affiliates, field teams, and other scientific stakeholders around the world.
            </p>
          </div>
          <div className="sia-medaff-grid">
            {medicalAffairsItems.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="sia-related-links">
            <span className="sia-related-label">Related Sesen service</span>
            <EditorialLink href={MED_AFFAIRS_URL}>Medical Affairs Translation</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-change-title">
        <div className="sia-shell sia-change-grid">
          <div className="sia-copy-block sia-sticky-copy">
            <p className="sia-eyebrow">Program Change Control</p>
            <h2 id="sia-change-title">Keep Every Language Aligned as the Program Changes</h2>
            <p className="sia-lead">
              Autoimmune and inflammatory drug-development programs can evolve over many years. Protocols are amended. New cohorts and indications are added. Safety information changes. Investigator Brochures are revised. Authorities ask new questions. Labeling evolves. Additional markets and languages are introduced.
            </p>
            <div className="sia-change-path">Version 1 <span>→</span> Amendment <span>→</span> New Indication <span>→</span> Submission <span>→</span> Label Update <span>→</span> Global Rollout</div>
          </div>
          <div className="sia-change-list">
            {changeSteps.map(([title, text]) => (
              <article key={title}><Icon name="refresh" size={19} /><div><h3>{title}</h3><p>{text}</p></div></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sia-section sia-pale" aria-labelledby="sia-workflow-title">
        <div className="sia-shell sia-workflow-grid">
          <div className="sia-copy-block sia-sticky-copy">
            <p className="sia-eyebrow">Quality Workflow</p>
            <h2 id="sia-workflow-title">A Translation Workflow Designed Around Scientific Risk</h2>
            <p className="sia-lead">
              A scientific manuscript, an informed consent form, a regulatory response, an eCOA instrument, and a training presentation do not carry identical language risks.
            </p>
            <p>Sesen adapts the multilingual workflow to the content, intended audience, regulatory context, languages, timeline, and quality requirements.</p>
            <div className="sia-workflow-proof">
              <span>Professional Linguists</span><b>+</b><span>Controlled Terminology</span><b>+</b><span>Translation Memory</span><b>+</b><span>Assisted QA</span><b>+</b><span>Human Review</span>
            </div>
          </div>
          <Workflow />
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-human-title">
        <div className="sia-shell sia-human-grid">
          <div className="sia-human-visual" aria-hidden="true">
            <div className="sia-human-core"><Icon name="users" size={31} /><strong>Human Expertise</strong><span>Scientific meaning · context · judgment · final quality</span></div>
            <div className="sia-human-divider">supported by</div>
            <div className="sia-tech-row">
              <span><Icon name="layers" size={19} />Terminology</span>
              <span><Icon name="refresh" size={19} />TM &amp; Reuse</span>
              <span><Icon name="spark" size={19} />Assisted QA</span>
              <span><Icon name="file" size={19} />Version Comparison</span>
            </div>
          </div>
          <div className="sia-copy-block sia-mobile-center">
            <h2 id="sia-human-title">Human Expertise Where Scientific Judgment Matters</h2>
            <p className="sia-lead">Language technology can make global immunology programs more consistent and scalable. It should not replace the scientific judgment needed to understand what the content means.</p>
            <p>Technology can support terminology matching, translation-memory reuse, repeated-content identification, version comparison, numerical checks, consistency analysis, completeness checks, and workflow automation.</p>
            <p>Professional linguists and reviewers remain responsible for scientific context, medical meaning, ambiguous terminology, mechanism-of-action language, clinical interpretation, regulatory context, patient readability, cultural appropriateness, reviewer decisions, and final linguistic quality.</p>
          </div>
        </div>
      </section>

      <section className="sia-section sia-soft" aria-labelledby="sia-audience-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <h2 id="sia-audience-title">Multilingual Support Across the Immunology Development Ecosystem</h2>
          </div>
          <div className="sia-audience-grid">
            {audiences.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-services-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-split sia-mobile-left">
            <div>
              <h2 id="sia-services-title">Connected Translation Services for Global Immunology Programs</h2>
            </div>
            <p>Immunology programs cross traditional content boundaries. Sesen's specialized life sciences services connect the clinical, regulatory, scientific, safety, patient, and digital content generated throughout development.</p>
          </div>
          <div className="sia-service-list">
            {services.map(([title, text, href, linkLabel]) => (
              <article className="sia-service-row" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="sia-service-action"><EditorialLink href={href}>{linkLabel}</EditorialLink></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sia-global" aria-labelledby="sia-global-title">
        <div className="sia-shell sia-global-grid">
          <div className="sia-mobile-center">
            <p className="sia-eyebrow">Global Program Control</p>
            <h2 id="sia-global-title">Immunology Translation in 150+ Languages</h2>
            <p>Global immunology development can involve multiple countries, regional language variants, clinical sites, ethics committees, health authorities, investigators, patient populations, affiliates, and reviewers, all working from source content that continues to change.</p>
            <p>The challenge is not only translation volume. It is keeping scientific meaning, approved terminology, reviewer decisions, and current versions aligned across the program.</p>
            <div className="sia-related-links sia-related-links-light">
              <span className="sia-related-label">Related Sesen expertise</span>
              <EditorialLink href={LIFE_SCIENCES_URL} light>Life Sciences Translation Services</EditorialLink>
            </div>
          </div>
          <div className="sia-global-controls">
            <div><Icon name="language" size={22} /><strong>Regional Language Control</strong><span>Manage language variants, market terminology, and country-specific communication within one program framework.</span></div>
            <div><Icon name="layers" size={22} /><strong>Shared Language Assets</strong><span>Use governed terminology, translation memory, approved references, and reusable content across markets.</span></div>
            <div><Icon name="users" size={22} /><strong>Reviewer Coordination</strong><span>Capture decisions from sponsors, affiliates, in-country reviewers, and other authorized stakeholders.</span></div>
            <div><Icon name="file" size={22} /><strong>Version Alignment</strong><span>Keep multilingual content synchronized as studies, indications, safety information, and product content change.</span></div>
            <div><Icon name="globe" size={22} /><strong>Scalable Global Delivery</strong><span>Coordinate professional language resources across 150+ languages as programs expand into additional markets.</span></div>
          </div>
        </div>
      </section>

      <section className="sia-section" aria-labelledby="sia-why-title">
        <div className="sia-shell">
          <div className="sia-heading sia-heading-center sia-mobile-center">
            <p className="sia-eyebrow">Why Sesen</p>
            <h2 id="sia-why-title">Language Infrastructure for the Full Immunology Lifecycle</h2>
            <p className="sia-lead">Scientific breakthroughs depend on specialized knowledge. Global communication requires a language infrastructure capable of preserving that knowledge as it moves between people, documents, systems, countries, and development stages.</p>
          </div>
          <div className="sia-why-grid">
            <div><strong>Life Sciences Specialization</strong><span>Scientific, clinical, regulatory, safety, patient, and medical communication.</span></div>
            <div><strong>ISO-Certified Quality Systems</strong><span>ISO 17100 · ISO 9001 · ISO 13485.</span></div>
            <div><strong>Professional Native Linguists</strong><span>Resources aligned to subject matter, language, audience, and project requirements.</span></div>
            <div><strong>Terminology Governance</strong><span>Glossaries, translation memory, references, reviewer decisions, and controlled terminology.</span></div>
            <div><strong>Human-Led Quality</strong><span>Independent linguistic review and final human quality control for high-stakes content.</span></div>
            <div><strong>Intelligent Language Technology</strong><span>Translation memory, terminology tools, workflow automation, and AI-assisted quality support.</span></div>
            <div><strong>Secure Workflow Controls</strong><span>Controlled project workflows designed for sensitive life sciences content.</span></div>
            <div><strong>Connected Lifecycle Expertise</strong><span>Clinical, regulatory, safety, patient, scientific, and Medical Affairs content supported within one language program.</span></div>
          </div>
        </div>
      </section>

      <section className="sia-section sia-faq" aria-labelledby="sia-faq-title">
        <div className="sia-shell sia-faq-grid">
          <div className="sia-faq-intro">
            <h2 id="sia-faq-title">Immunology &amp; Autoimmune Translation FAQ</h2>
            <p>Answers to common questions about therapeutic-area expertise, clinical content, linguistic validation, regulatory support, terminology governance, multi-indication development, and language technology.</p>
            <div className="sia-related-links">
              <span className="sia-related-label">Related Sesen expertise</span>
              <EditorialLink href={LIFE_SCIENCES_URL}>Life Sciences Translation Services</EditorialLink>
            </div>
          </div>
          <div className="sia-faq-list">
            {faqs.map((item, index) => (
              <details className="sia-faq-item" key={item.q} open={index === 0}>
                <summary><span>{item.q}</span><span className="sia-faq-plus" aria-hidden="true">+</span></summary>
                <div className="sia-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sia-final-cta" aria-labelledby="sia-final-title">
        <div className="sia-shell sia-final-grid">
          <div>
            <h2 id="sia-final-title">Translate Immunology Programs With Scientific Precision</h2>
            <p>
              Whether you are translating one critical clinical document, launching a multinational autoimmune study, preparing a global regulatory submission, expanding a therapeutic platform into additional indications, or developing the next generation of immune-modulating therapies, the language surrounding the science needs to remain accurate and connected.
            </p>
            <span className="sia-final-micro">Tell us about your indication, content, languages, development stage, and timeline.</span>
          </div>
          <div className="sia-final-actions">
            <Button href={CONTACT_SALES_URL}>TALK WITH TEAM SESEN</Button>
            <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .sia-page {
    --sia-brand: #4B6FD8;
    --sia-brand-dark: #3659BB;
    --sia-brand-deep: #253F8F;
    --sia-brand-mid: #6F8BE1;
    --sia-brand-soft: #EAF0FF;
    --sia-brand-pale: #F5F7FF;
    --sia-navy: #17264D;
    --sia-ink: #111827;
    --sia-slate: #46546D;
    --sia-muted: #68758B;
    --sia-line: #DDE4F2;
    --sia-line-soft: #E9EEF8;
    --sia-soft: #F7F9FD;
    --sia-white: #FFFFFF;
    --sia-shadow: 0 24px 64px rgba(37,63,143,.09);
    --sia-radius-lg: 28px;
    --sia-radius-md: 20px;
    width: 100%;
    overflow-x: clip;
    background: var(--sia-white);
    color: var(--sia-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .sia-page, .sia-page * { box-sizing: border-box; }
  .sia-page * { min-width: 0; }
  .sia-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .sia-page h1, .sia-page h2, .sia-page h3, .sia-page p { margin-top: 0; }
  .sia-page h1, .sia-page h2, .sia-page h3 {
    color: var(--sia-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-stretch: 100%;
    font-style: normal;
  }
  .sia-page h1 { margin-bottom: 20px; font-size: 48px; font-weight: 500; line-height: 1.3; letter-spacing: -0.5px; }
  .sia-page h2 { margin-bottom: 21px; font-size: 36px; font-weight: 500; line-height: 1.3; letter-spacing: normal; }
  .sia-page h3 { margin-bottom: 11px; font-size: 22px; font-weight: 500; line-height: 1.3; letter-spacing: normal; }
  .sia-page p { color: var(--sia-slate); font-size: 16px; line-height: 1.72; }
  .sia-page ul { margin: 0; padding: 0; }

  .sia-page a:focus-visible, .sia-page summary:focus-visible {
    outline: 3px solid rgba(75,111,216,.32);
    outline-offset: 3px;
  }

  .sia-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .sia-section { padding: 96px 0; }
  .sia-soft { background: var(--sia-soft); }
  .sia-pale { background: var(--sia-brand-pale); }

  .sia-page .sia-eyebrow {
    margin: 0 0 16px !important;
    color: var(--sia-brand-dark) !important;
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: .15em !important;
    text-transform: uppercase !important;
  }

  .sia-heading { max-width: 820px; margin-bottom: 52px; }
  .sia-heading-center { margin-inline: auto; text-align: center; }
  .sia-heading-center .sia-lead { margin-inline: auto; }
  .sia-heading-split { max-width: none; display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 78px; align-items: end; }
  .sia-heading-split > p { margin-bottom: 5px; font-size: 17px; }
  .sia-lead { max-width: 820px; color: #293954 !important; font-size: 18px !important; line-height: 1.68 !important; }
  .sia-copy-block { max-width: 610px; }
  .sia-copy-block .sia-lead { font-size: 18px !important; }

  .sia-button-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .sia-button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 24px;
    border: 1px solid var(--sia-brand);
    border-radius: 999px;
    color: #FFFFFF !important;
    background: var(--sia-brand);
    box-shadow: 0 10px 24px rgba(75,111,216,.16);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
    transition: background .18s ease, border-color .18s ease, box-shadow .18s ease, transform .18s ease;
  }
  .sia-button:hover { background: var(--sia-brand-dark); border-color: var(--sia-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.21); }
  .sia-button-secondary { color: var(--sia-ink) !important; background: #FFFFFF; border-color: #C9D5EF; box-shadow: none; }
  .sia-button-secondary:hover { color: var(--sia-ink) !important; background: var(--sia-brand-soft); border-color: #B8C7E8; box-shadow: none; }
  .sia-button svg, .sia-link svg { transition: transform .18s ease; }
  .sia-button:hover svg, .sia-link:hover svg { transform: translateX(3px); }

  .sia-link { display: inline-flex; width: auto; max-width: max-content; align-self: flex-start; justify-self: start; align-items: center; gap: 8px; color: var(--sia-brand-dark) !important; font-size: 15px; font-weight: 700; line-height: 1.45; }
  .sia-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
  .sia-link-light { color: #FFFFFF !important; }
  .sia-link-row { display: flex; flex-wrap: wrap; gap: 12px 24px; align-items: center; }
  .sia-link-row-center { justify-content: center; margin-top: 34px; }
  .sia-related-links { display: grid; gap: 8px; margin-top: 24px; }
  .sia-related-links-center { justify-items: center; margin-top: 34px; text-align: center; }
  .sia-related-label { color: var(--sia-muted); font-size: 13px; font-weight: 600; line-height: 1.4; }
  .sia-related-links-light .sia-related-label { color: #C8D6FF; }
  .sia-related-links-center .sia-link-row { justify-content: center; }

  .sia-hero {
    position: relative;
    overflow: hidden;
    padding: 94px 0 100px;
    background: radial-gradient(circle at 87% 17%, rgba(75,111,216,.10), transparent 27%), linear-gradient(180deg,#FFFFFF 0%,#FCFDFF 100%);
  }
  .sia-hero::after {
    content: "";
    position: absolute;
    right: 2%;
    bottom: 0;
    width: 30%;
    height: 23%;
    opacity: .34;
    background-image: linear-gradient(90deg, rgba(75,111,216,.18) 1px, transparent 1px), linear-gradient(rgba(75,111,216,.18) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: linear-gradient(110deg, transparent, #000 40%, transparent 96%);
    pointer-events: none;
  }
  .sia-hero-grid { display: grid; grid-template-columns: minmax(0,1.08fr) minmax(390px,.92fr); gap: 62px; align-items: center; }
  .sia-hero-copy { position: relative; z-index: 2; max-width: 720px; }
  .sia-hero-lead { max-width: 710px; margin-bottom: 17px !important; color: #293954 !important; font-size: 20px !important; line-height: 1.58 !important; }
  .sia-hero-body { max-width: 710px; margin-bottom: 31px !important; font-size: 17px !important; }
  .sia-hero-art { position: relative; z-index: 1; width: 100%; max-width: 560px; justify-self: end; }
  .sia-hero-art svg { display: block; width: 100%; height: auto; }

  .sia-trust-band { border-top: 1px solid var(--sia-line); border-bottom: 1px solid var(--sia-line); background: #FFFFFF; }
  .sia-trust-grid { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 26px; padding-block: 25px; }
  .sia-trust-item { display: grid; grid-template-columns: 28px minmax(0,1fr); gap: 10px; align-items: start; }
  .sia-trust-item svg { color: var(--sia-brand-dark); margin-top: 2px; }
  .sia-trust-item strong { display: block; margin-bottom: 2px; color: var(--sia-navy); font-size: 15px; line-height: 1.4; }
  .sia-trust-item span { display: block; color: var(--sia-muted); font-size: 13px; line-height: 1.45; }

  .sia-precision-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 32px; }
  .sia-precision-item { padding-top: 26px; border-top: 1px solid #CFD8EA; }
  .sia-icon-surface { width: 45px; height: 45px; display: grid; place-items: center; margin-bottom: 20px; border-radius: 13px; color: var(--sia-brand-dark); background: var(--sia-brand-soft); }
  .sia-precision-item p { margin-bottom: 0; }
  .sia-inline-note { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 40px; align-items: center; margin-top: 50px; padding: 23px 26px; border: 1px solid var(--sia-line); border-radius: 18px; background: #FFFFFF; }
  .sia-inline-note strong, .sia-inline-note span { display: block; }
  .sia-inline-note strong { margin-bottom: 3px; color: var(--sia-navy); font-size: 16px; }
  .sia-inline-note span { color: var(--sia-slate); font-size: 16px; line-height: 1.55; }

  .sia-split { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 76px; align-items: center; }
  .sia-split-wide { grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); }
  .sia-emphasis-line, .sia-quote-line { margin-top: 28px !important; padding-left: 17px; border-left: 2px solid var(--sia-brand); color: var(--sia-navy) !important; font-weight: 600; }

  .sia-disease-map { overflow: hidden; border: 1px solid #D9E2F3; border-radius: var(--sia-radius-lg); background: #FFFFFF; box-shadow: 0 18px 50px rgba(37,63,143,.06); }
  .sia-disease-hub { display: grid; grid-template-columns: 52px minmax(220px,.72fr) minmax(0,1.28fr); gap: 18px 22px; align-items: center; padding: 25px 28px; border-bottom: 1px solid #D9E2F3; background: linear-gradient(100deg,#F9FBFF 0%,#F2F6FF 100%); }
  .sia-disease-hub-icon { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 15px; color: var(--sia-brand-dark); background: #FFFFFF; border: 1px solid #D3DDF0; }
  .sia-disease-hub-copy strong, .sia-disease-hub-copy span { display: block; }
  .sia-disease-hub-copy strong { margin-bottom: 3px; color: var(--sia-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 27px; font-weight: 500; line-height: 1.25; }
  .sia-disease-hub-copy span { color: var(--sia-slate); font-size: 16px; line-height: 1.5; }
  .sia-disease-shared { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; }
  .sia-disease-shared span { min-height: 42px; display: grid; place-items: center; padding: 7px 10px; border: 1px solid #D7E1F2; border-radius: 12px; color: #405270; background: #FFFFFF; font-size: 14px; font-weight: 650; line-height: 1.3; text-align: center; }
  .sia-disease-branches { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); }
  .sia-disease-branch { min-height: 155px; padding: 24px 25px 25px; border-right: 1px solid #E1E7F2; border-bottom: 1px solid #E1E7F2; background: #FFFFFF; }
  .sia-disease-branch:nth-child(3n) { border-right: 0; }
  .sia-disease-branch:nth-last-child(-n+3) { border-bottom: 0; }
  .sia-disease-branch strong, .sia-disease-branch span { display: block; overflow-wrap: anywhere; }
  .sia-disease-branch strong { margin-bottom: 8px; color: var(--sia-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 19px; font-weight: 500; line-height: 1.3; }
  .sia-disease-branch span { color: var(--sia-slate); font-size: 16px; line-height: 1.52; }
  .sia-disease-caption { display: grid; grid-template-columns: minmax(0,1.18fr) minmax(290px,.82fr); gap: 48px; align-items: start; margin-top: 28px; }
  .sia-disease-caption > p { margin-bottom: 0; }
  .sia-disease-caption .sia-emphasis-line { margin-top: 0 !important; }

  .sia-mechanism-diagram { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 0; margin: 0 0 52px; border-top: 1px solid var(--sia-line); border-bottom: 1px solid var(--sia-line); }
  .sia-mechanism-step { position: relative; display: grid; grid-template-columns: 48px minmax(0,1fr); column-gap: 13px; align-items: center; padding: 25px 30px 25px 0; }
  .sia-mechanism-step > svg { position: absolute; right: 10px; color: #9AACD5; }
  .sia-mechanism-icon { grid-row: 1 / span 2; width: 43px; height: 43px; display: grid; place-items: center; color: var(--sia-brand-dark); border-radius: 13px; background: var(--sia-brand-soft); }
  .sia-mechanism-step strong { color: var(--sia-navy); font-size: 16px; }
  .sia-mechanism-step span { color: var(--sia-muted); font-size: 16px; line-height: 1.45; }
  .sia-science-grid { display: grid; grid-template-columns: minmax(0,1.08fr) minmax(330px,.92fr); gap: 60px; align-items: start; }
  .sia-topic-cloud { display: flex; flex-wrap: wrap; gap: 10px; }
  .sia-topic-cloud span, .sia-chip-list span { padding: 8px 11px; border: 1px solid #D5DEEF; border-radius: 999px; color: #40506C; background: #FBFCFF; font-size: 16px; line-height: 1.35; }
  .sia-science-copy { padding-left: 28px; border-left: 1px solid var(--sia-line); }
  .sia-science-copy p { margin-bottom: 16px; }

  .sia-term-flow { position: relative; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 16px; padding-bottom: 76px; }
  .sia-term-rail { position: absolute; left: 4%; right: 4%; top: 70px; height: 1px; background: #C8D5EF; }
  .sia-term-node { position: relative; z-index: 2; min-height: 132px; padding: 22px 18px; border: 1px solid #D7E1F1; border-radius: 18px; background: #FFFFFF; }
  .sia-term-node::after { content: ""; position: absolute; left: 50%; bottom: -17px; width: 1px; height: 17px; background: #B8C9E8; }
  .sia-term-index { display: inline-block; margin-bottom: 13px; color: var(--sia-brand-dark); font-size: 11px; font-weight: 700; letter-spacing: .08em; }
  .sia-term-node strong, .sia-term-node span { display: block; }
  .sia-term-node strong { margin-bottom: 5px; color: var(--sia-navy); font-size: 16px; line-height: 1.4; }
  .sia-term-node span { color: var(--sia-muted); font-size: 16px; line-height: 1.45; }
  .sia-term-foundation { position: absolute; left: 5%; right: 5%; bottom: 0; min-height: 48px; display: flex; align-items: center; justify-content: center; gap: 10px; padding: 10px 16px; border-radius: 999px; color: var(--sia-brand-dark); background: #E9EFFF; font-size: 16px; text-align: center; }
  .sia-term-benefits { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 24px; margin-top: 42px; padding-top: 34px; border-top: 1px solid #D7E1F2; }
  .sia-term-benefits strong, .sia-term-benefits span { display: block; }
  .sia-term-benefits strong { margin-bottom: 5px; color: var(--sia-navy); font-size: 16px; }
  .sia-term-benefits span { color: var(--sia-slate); font-size: 16px; line-height: 1.5; }

  .sia-multi-panel { padding: 34px; border: 1px solid #D9E2F3; border-radius: var(--sia-radius-lg); background: linear-gradient(145deg,#FCFDFF,#F2F6FF); box-shadow: var(--sia-shadow); }
  .sia-multi-core { display: grid; place-items: center; gap: 6px; max-width: 330px; margin: 0 auto; padding: 22px; border-radius: 19px; background: #FFFFFF; border: 1px solid #D3DFF3; color: var(--sia-brand-dark); text-align: center; }
  .sia-multi-core strong { color: var(--sia-navy); font-size: 19px; }
  .sia-multi-core span { color: var(--sia-muted); font-size: 13px; }
  .sia-multi-arrow { margin: 9px 0; color: #8FA4D5; text-align: center; font-size: 20px; }
  .sia-multi-indications, .sia-multi-assets { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 10px; }
  .sia-multi-indications span, .sia-multi-assets span { display: grid; place-items: center; min-height: 48px; padding: 8px; border: 1px solid #D5DEEF; border-radius: 13px; background: #FFFFFF; color: #34435F; font-size: 14px; font-weight: 600; text-align: center; }
  .sia-multi-assets { grid-template-columns: repeat(3,minmax(0,1fr)); }
  .sia-multi-assets span { min-height: 42px; font-size: 13px; font-weight: 500; }
  .sia-multi-foundation { margin-top: 16px; padding: 11px 14px; border-radius: 12px; color: #324566; background: #E9EFFF; font-size: 13px; font-weight: 650; text-align: center; }

  .sia-clinical-groups { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid #D4DDEC; }
  .sia-clinical-group { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 19px; padding: 32px 34px 34px 0; border-bottom: 1px solid #D4DDEC; }
  .sia-clinical-group:nth-child(odd) { padding-right: 50px; }
  .sia-clinical-group:nth-child(even) { padding-left: 50px; border-left: 1px solid #D4DDEC; }
  .sia-clinical-number { display: grid; place-items: center; width: 43px; height: 43px; border-radius: 50%; color: var(--sia-brand-dark); background: #FFFFFF; border: 1px solid #C9D6EE; font-size: 12px; font-weight: 700; }
  .sia-clinical-group ul { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 7px 22px; list-style: none; }
  .sia-clinical-group li { position: relative; padding-left: 13px; color: var(--sia-slate); font-size: 16px; line-height: 1.45; }
  .sia-clinical-group li::before { content: ""; position: absolute; left: 0; top: .65em; width: 4px; height: 4px; border-radius: 50%; background: var(--sia-brand-mid); }
  .sia-audience-flow { display: flex; flex-wrap: wrap; justify-content: center; gap: 7px 13px; margin-top: 36px; color: var(--sia-navy); font-size: 14px; font-weight: 650; }
  .sia-audience-flow span { display: inline-flex; gap: 13px; }
  .sia-audience-flow b { color: #92A5D4; font-weight: 400; }

  .sia-outcome-grid { display: grid; grid-template-columns: minmax(0,.95fr) minmax(420px,1.05fr); gap: 70px; align-items: center; }
  .sia-ecoa-mock { overflow: hidden; border: 1px solid #CBD7EE; border-radius: 28px; background: #FFFFFF; box-shadow: var(--sia-shadow); }
  .sia-ecoa-top { min-height: 54px; display: flex; align-items: center; justify-content: space-between; gap: 20px; padding: 0 24px; color: #DCE5FB; background: var(--sia-navy); font-size: 12px; font-weight: 650; }
  .sia-ecoa-body { padding: 32px 30px 28px; }
  .sia-ecoa-kicker { display: block; margin-bottom: 10px; color: var(--sia-brand-dark); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  .sia-ecoa-body > strong { display: block; max-width: 430px; color: var(--sia-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; font-weight: 500; line-height: 1.35; }
  .sia-scale { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 10px; margin: 34px 0 28px; }
  .sia-scale-option { display: grid; justify-items: center; gap: 8px; }
  .sia-scale-dot { width: 24px; height: 24px; border: 2px solid #B8C7E5; border-radius: 50%; background: #FFFFFF; }
  .sia-scale-dot-active { border: 7px solid var(--sia-brand); }
  .sia-scale-option small { color: var(--sia-muted); font-size: 11px; line-height: 1.25; text-align: center; }
  .sia-ecoa-review { display: flex; gap: 9px; align-items: flex-start; padding: 14px 16px; border-radius: 12px; color: #3C4E6C; background: #F1F5FF; font-size: 13px; line-height: 1.45; }
  .sia-ecoa-review svg { flex: 0 0 auto; margin-top: 1px; color: var(--sia-brand-dark); }
  .sia-outcome-types { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 22px; margin-top: 58px; }
  .sia-outcome-type { padding-top: 22px; border-top: 1px solid var(--sia-line); }
  .sia-outcome-type strong, .sia-outcome-type span { display: block; }
  .sia-outcome-type strong { margin-bottom: 7px; color: var(--sia-navy); font-size: 17px; }
  .sia-outcome-type span { color: var(--sia-slate); font-size: 16px; line-height: 1.52; }
  .sia-validation-ribbon { display: grid; grid-template-columns: minmax(240px,.7fr) minmax(0,1.3fr); gap: 34px; align-items: center; margin-top: 42px; padding-top: 30px; border-top: 1px solid var(--sia-line); }
  .sia-validation-ribbon strong { color: var(--sia-navy); font-size: 17px; }
  .sia-validation-ribbon span { color: var(--sia-slate); font-size: 16px; line-height: 1.6; }

  .sia-reg-flow { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); border-top: 1px solid #C8D5ED; border-bottom: 1px solid #C8D5ED; }
  .sia-reg-stage { position: relative; padding: 27px 24px 27px 0; }
  .sia-reg-stage + .sia-reg-stage { padding-left: 24px; border-left: 1px solid #D5DEEF; }
  .sia-reg-stage > span { display: block; margin-bottom: 11px; color: var(--sia-brand-dark); font-size: 11px; font-weight: 700; }
  .sia-reg-stage strong { display: block; margin-bottom: 6px; color: var(--sia-navy); font-size: 16px; }
  .sia-reg-stage p { margin-bottom: 0; font-size: 16px; line-height: 1.5; }
  .sia-reg-note { max-width: 900px; margin: 30px auto 0 !important; color: #526079 !important; text-align: center; }

  .sia-advanced { background: linear-gradient(180deg,#FFFFFF 0%,#F5F7FF 58%,#FFFFFF 100%); }
  .sia-therapy-progression { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 14px; margin: 0 0 48px; }
  .sia-therapy-stage { position: relative; min-height: 200px; padding: 24px 21px; border: 1px solid #D5DFF1; border-radius: 18px; background: #FFFFFF; }
  .sia-therapy-label { display: block; margin-bottom: 18px; color: var(--sia-brand-dark); font-size: 11px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .sia-therapy-stage strong { display: block; margin-bottom: 8px; color: var(--sia-navy); font-size: 17px; line-height: 1.4; }
  .sia-therapy-stage p { margin-bottom: 0; font-size: 16px; line-height: 1.52; }
  .sia-therapy-arrow { display: none; }
  .sia-advanced-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0 58px; border-top: 1px solid var(--sia-line); }
  .sia-advanced-grid article { padding: 28px 0; border-bottom: 1px solid var(--sia-line); }
  .sia-advanced-grid p { margin-bottom: 0; }
  .sia-advanced-note { display: flex; gap: 13px; align-items: flex-start; max-width: 880px; margin: 38px auto 0; padding: 17px 20px; border-radius: 14px; background: #EAF0FF; }
  .sia-advanced-note svg { flex: 0 0 auto; margin-top: 3px; color: var(--sia-brand-dark); }
  .sia-advanced-note p { margin-bottom: 0; color: #384B6C; }

  .sia-dual-editorial { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 66px; }
  .sia-editorial-block { position: relative; }
  .sia-editorial-block-border { padding-left: 64px; border-left: 1px solid var(--sia-line); }
  .sia-editorial-icon { width: 50px; height: 50px; display: grid; place-items: center; margin-bottom: 24px; border-radius: 15px; color: var(--sia-brand-dark); background: var(--sia-brand-soft); }
  .sia-chip-list { display: flex; flex-wrap: wrap; gap: 8px; margin: 25px 0; }
  .sia-clean-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 8px 20px; margin: 24px 0 25px !important; list-style: none; }
  .sia-clean-list li { position: relative; padding-left: 14px; color: var(--sia-slate); font-size: 16px; line-height: 1.5; }
  .sia-clean-list li::before { content: ""; position: absolute; left: 0; top: .68em; width: 4px; height: 4px; border-radius: 50%; background: var(--sia-brand); }

  .sia-medaff-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0 42px; margin-bottom: 28px; border-top: 1px solid #D8E0ED; }
  .sia-medaff-grid article { padding: 26px 0; border-bottom: 1px solid #D8E0ED; }
  .sia-medaff-grid p { margin-bottom: 0; }

  .sia-change-grid, .sia-workflow-grid { display: grid; grid-template-columns: minmax(320px,.72fr) minmax(0,1.28fr); gap: 78px; align-items: start; }
  .sia-sticky-copy { position: sticky; top: 28px; }
  .sia-change-path { display: flex; flex-wrap: wrap; gap: 5px 8px; margin-top: 26px; color: var(--sia-navy); font-size: 14px; font-weight: 650; line-height: 1.6; }
  .sia-change-path span { color: #879BCB; }
  .sia-change-list { border-top: 1px solid var(--sia-line); }
  .sia-change-list article { display: grid; grid-template-columns: 28px minmax(0,1fr); gap: 15px; padding: 24px 0; border-bottom: 1px solid var(--sia-line); }
  .sia-change-list svg { color: var(--sia-brand-dark); margin-top: 3px; }
  .sia-change-list h3 { margin-bottom: 5px; font-size: 19px; }
  .sia-change-list p { margin-bottom: 0; }

  .sia-workflow-list { border-top: 1px solid #CBD7EB; }
  .sia-workflow-step { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 19px; padding: 24px 0; border-bottom: 1px solid #CBD7EB; }
  .sia-workflow-number { display: grid; place-items: center; width: 43px; height: 43px; border-radius: 50%; color: var(--sia-brand-dark); background: #FFFFFF; border: 1px solid #C6D4ED; font-size: 11px; font-weight: 700; }
  .sia-workflow-step h3 { margin-bottom: 5px; font-size: 19px; }
  .sia-workflow-step p { margin-bottom: 0; }
  .sia-workflow-proof { display: flex; flex-wrap: wrap; gap: 5px 9px; margin-top: 27px; padding-top: 22px; border-top: 1px solid #D3DDEF; color: #44546F; font-size: 13px; font-weight: 650; }
  .sia-workflow-proof b { color: #9AADD7; font-weight: 400; }

  .sia-human-grid { display: grid; grid-template-columns: minmax(0,1.08fr) minmax(0,.92fr); gap: 72px; align-items: center; }
  .sia-human-visual { padding: 36px; border: 1px solid #D7E1F1; border-radius: var(--sia-radius-lg); background: linear-gradient(145deg,#FAFCFF,#F1F5FF); box-shadow: var(--sia-shadow); }
  .sia-human-core { display: grid; justify-items: center; gap: 7px; padding: 31px 24px; border-radius: 20px; color: var(--sia-brand-dark); background: #FFFFFF; border: 1px solid #D4DFF1; text-align: center; }
  .sia-human-core strong { color: var(--sia-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; font-weight: 500; }
  .sia-human-core span { color: var(--sia-muted); font-size: 14px; }
  .sia-human-divider { padding: 14px 0; color: #7B8BAA; font-size: 12px; font-weight: 700; letter-spacing: .08em; text-align: center; text-transform: uppercase; }
  .sia-tech-row { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
  .sia-tech-row span { display: flex; align-items: center; gap: 9px; min-height: 50px; padding: 10px 13px; border: 1px solid #D5DFF1; border-radius: 13px; color: #3E4F6E; background: #FFFFFF; font-size: 14px; font-weight: 600; }
  .sia-tech-row svg { color: var(--sia-brand-dark); }

  .sia-audience-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0 42px; border-top: 1px solid #D6DFEC; }
  .sia-audience-grid article { padding: 27px 0; border-bottom: 1px solid #D6DFEC; }
  .sia-audience-grid p { margin-bottom: 0; }

  .sia-service-list { border-top: 1px solid var(--sia-line); }
  .sia-service-row { display: grid; grid-template-columns: minmax(240px,.7fr) minmax(0,1.15fr) auto; gap: 38px; align-items: center; padding: 24px 0; border-bottom: 1px solid var(--sia-line); }
  .sia-service-row h3, .sia-service-row p { margin-bottom: 0; }
  .sia-service-action { display: flex; align-items: center; justify-content: flex-start; min-width: 0; }
  .sia-service-row h3 { font-size: 19px; }
  .sia-service-row p { font-size: 16px; }

  .sia-global { padding: 88px 0; color: #FFFFFF; background: linear-gradient(115deg,#17264D 0%,#253F8F 58%,#2D4B9A 100%); }
  .sia-global .sia-eyebrow { color: #C8D6FF !important; }
  .sia-global h2 { color: #FFFFFF; }
  .sia-global p { color: #E2E8F8; }
  .sia-global-grid { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 78px; align-items: center; }
  .sia-global-grid > div:first-child p { max-width: 520px; }
  .sia-global-controls { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 1px; background: rgba(255,255,255,.16); border: 1px solid rgba(255,255,255,.12); }
  .sia-global-controls div { display: grid; grid-template-columns: 31px minmax(0,1fr); gap: 8px 11px; padding: 22px; background: rgba(23,38,77,.48); }
  .sia-global-controls div:last-child { grid-column: 1 / -1; }
  .sia-global-controls svg { grid-row: 1 / span 2; color: #C8D6FF; }
  .sia-global-controls strong { color: #FFFFFF; font-size: 15px; }
  .sia-global-controls span { color: #D5DDF0; font-size: 16px; line-height: 1.48; }

  .sia-why-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 24px 30px; }
  .sia-why-grid div { padding-top: 22px; border-top: 1px solid var(--sia-line); }
  .sia-why-grid strong, .sia-why-grid span { display: block; }
  .sia-why-grid strong { margin-bottom: 6px; color: var(--sia-navy); font-size: 16px; }
  .sia-why-grid span { color: var(--sia-slate); font-size: 16px; line-height: 1.5; }

  .sia-faq { background: var(--sia-soft); }
  .sia-faq-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 80px; align-items: start; }
  .sia-faq-intro { position: sticky; top: 28px; max-width: 430px; }
  .sia-faq-intro > p:not(.sia-eyebrow) { margin-bottom: 24px; font-size: 17px; }
  .sia-faq-list { border-top: 1px solid #CBD5E7; }
  .sia-faq-item { border-bottom: 1px solid #CBD5E7; }
  .sia-faq-item summary { min-height: 78px; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; padding: 21px 0; color: var(--sia-navy); cursor: pointer; font-size: 18px; font-weight: 650; line-height: 1.4; list-style: none; }
  .sia-faq-item summary::-webkit-details-marker { display: none; }
  .sia-faq-item summary::marker { content: ""; }
  .sia-faq-list, .sia-faq-item, .sia-faq-item summary { width: 100%; max-width: 100%; }
  .sia-faq-item summary { overflow-wrap: anywhere; }
  .sia-faq-plus { width: 30px; height: 30px; display: grid; place-items: center; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--sia-brand-dark); font-size: 19px; font-weight: 400; transition: transform .18s ease; }
  .sia-faq-item[open] .sia-faq-plus { transform: rotate(45deg); }
  .sia-faq-answer { padding: 0 48px 26px 0; }
  .sia-faq-answer p { margin-bottom: 0; }

  .sia-final-cta { position: relative; overflow: hidden; padding: 84px 0; background: radial-gradient(circle at 84% 22%, rgba(255,255,255,.12), transparent 24%), linear-gradient(110deg,#253F8F 0%,#3659BB 100%); }
  .sia-final-cta::after { content: ""; position: absolute; right: 0; bottom: -45%; width: 340px; height: 340px; border: 1px solid rgba(255,255,255,.12); border-radius: 50%; pointer-events: none; }
  .sia-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.25fr) auto; gap: 60px; align-items: center; }
  .sia-final-cta h2 { max-width: 760px; color: #FFFFFF; }
  .sia-final-cta p { max-width: 800px; margin-bottom: 15px; color: #E8EDFB; font-size: 17px; }
  .sia-final-micro { color: #C8D6FF; font-size: 14px; font-weight: 600; }
  .sia-final-actions { min-width: 238px; display: grid; gap: 12px; }
  .sia-final-actions .sia-button { width: 100%; }

  @media (max-width: 1120px) {
    .sia-shell { padding-inline: 40px; }
    .sia-hero-grid { grid-template-columns: minmax(0,1.04fr) minmax(330px,.96fr); gap: 38px; }
    .sia-trust-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
    .sia-precision-grid { gap: 24px; }
    .sia-disease-hub { grid-template-columns: 52px minmax(190px,.7fr) minmax(0,1.3fr); }
    .sia-disease-branch { padding-inline: 21px; }
    .sia-outcome-grid { grid-template-columns: minmax(0,.95fr) minmax(370px,1.05fr); gap: 46px; }
    .sia-service-row { grid-template-columns: minmax(210px,.8fr) minmax(0,1.2fr) auto; gap: 26px; }
  }

  @media (max-width: 940px) {
    .sia-page h1 { font-size: 44px; }
    .sia-page h2 { font-size: 34px; }
    .sia-shell { padding-inline: 30px; }
    .sia-section { padding: 80px 0; }
    .sia-hero { padding: 76px 0 82px; }
    .sia-hero-grid { grid-template-columns: 1fr; gap: 42px; }
    .sia-hero-copy { max-width: 780px; }
    .sia-hero-copy .sia-eyebrow, .sia-hero-copy h1 { text-align: center; }
    .sia-hero-art { max-width: 540px; justify-self: center; }
    .sia-mobile-center { text-align: left; }
    .sia-mobile-center .sia-eyebrow, .sia-mobile-center h2 { text-align: center; }
    .sia-mobile-center .sia-editorial-icon { margin-inline: auto; }
    .sia-heading-center.sia-mobile-center .sia-lead { margin-inline: auto; text-align: left; }
    .sia-mobile-left, .sia-mobile-left .sia-eyebrow, .sia-mobile-left h2, .sia-mobile-left .sia-lead { text-align: left; }
    .sia-heading-split { grid-template-columns: 1fr; gap: 8px; }
    .sia-split, .sia-split-wide, .sia-outcome-grid, .sia-human-grid { grid-template-columns: 1fr; gap: 48px; }
    .sia-copy-block { max-width: 760px; }
    .sia-disease-hub { grid-template-columns: 52px minmax(0,1fr); }
    .sia-disease-shared { grid-column: 1 / -1; grid-template-columns: repeat(4,minmax(0,1fr)); }
    .sia-disease-branches { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-disease-branch:nth-child(3n) { border-right: 1px solid #E1E7F2; }
    .sia-disease-branch:nth-child(2n) { border-right: 0; }
    .sia-disease-branch:nth-last-child(-n+3) { border-bottom: 1px solid #E1E7F2; }
    .sia-disease-branch:nth-last-child(-n+2) { border-bottom: 0; }
    .sia-disease-caption { grid-template-columns: 1fr; gap: 18px; }
    .sia-term-flow { grid-template-columns: repeat(2,minmax(0,1fr)); padding-bottom: 78px; }
    .sia-term-rail { display: none; }
    .sia-term-node::after { display: none; }
    .sia-term-benefits { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-clinical-groups { grid-template-columns: 1fr; }
    .sia-clinical-group:nth-child(odd), .sia-clinical-group:nth-child(even) { padding: 28px 0; border-left: 0; }
    .sia-outcome-grid { align-items: start; }
    .sia-ecoa-mock { max-width: 650px; }
    .sia-outcome-types { grid-template-columns: repeat(3,minmax(0,1fr)); }
    .sia-reg-flow { grid-template-columns: repeat(2,minmax(0,1fr)); border-bottom: 0; }
    .sia-reg-stage { padding: 24px 26px 24px 0; border-bottom: 1px solid #D5DEEF; }
    .sia-reg-stage + .sia-reg-stage { padding-left: 26px; }
    .sia-reg-stage:nth-child(3), .sia-reg-stage:nth-child(5) { padding-left: 0; border-left: 0; }
    .sia-therapy-progression { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-therapy-arrow { display: none; }
    .sia-dual-editorial { grid-template-columns: 1fr; gap: 54px; }
    .sia-editorial-block-border { padding-left: 0; padding-top: 54px; border-left: 0; border-top: 1px solid var(--sia-line); }
    .sia-medaff-grid, .sia-audience-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-change-grid, .sia-workflow-grid { grid-template-columns: 1fr; gap: 44px; }
    .sia-sticky-copy { position: static; max-width: 760px; }
    .sia-global-grid, .sia-faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .sia-faq-intro { position: static; max-width: 760px; }
    .sia-why-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-final-grid { grid-template-columns: 1fr; gap: 30px; }
    .sia-final-actions { grid-template-columns: repeat(2,minmax(0,1fr)); max-width: 520px; min-width: 0; }
  }

  @media (max-width: 720px) {
    .sia-trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-precision-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-mechanism-diagram { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-mechanism-step:nth-child(2) > svg { display: none; }
    .sia-science-grid { grid-template-columns: 1fr; gap: 38px; }
    .sia-science-copy { padding-left: 0; padding-top: 30px; border-left: 0; border-top: 1px solid var(--sia-line); }
    .sia-disease-hub { padding: 22px; }
    .sia-disease-shared { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-outcome-types { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-validation-ribbon { grid-template-columns: 1fr; gap: 8px; }
    .sia-service-row { grid-template-columns: 1fr; gap: 7px; }
    .sia-service-row .sia-link { margin-top: 3px; }
    .sia-service-action { margin-top: 2px; }
    .sia-global-controls { grid-template-columns: 1fr; }
    .sia-global-controls div:last-child { grid-column: auto; }
  }

  @media (max-width: 640px) {
    .sia-shell { padding-inline: 20px; }
    .sia-section { padding: 68px 0; }
    .sia-page h1 { font-size: 42px; }
    .sia-page h2 { font-size: 32px; }
    .sia-page h3 { font-size: 21px; }
    .sia-hero { padding: 62px 0 68px; }
    .sia-hero-copy .sia-eyebrow { text-align: center; }
    .sia-hero-copy h1 { text-align: center; }
    .sia-hero-lead { font-size: 18px !important; }
    .sia-button-row { display: grid; grid-template-columns: 1fr; }
    .sia-button { width: 100%; }
    .sia-hero-art { max-width: 500px; margin-inline: auto; }
    .sia-heading { margin-bottom: 40px; }
    .sia-mobile-center { text-align: left; }
    .sia-mobile-center .sia-eyebrow, .sia-mobile-center h2 { text-align: center; }
    .sia-mobile-center .sia-editorial-icon { margin-inline: auto; }
    .sia-heading-center.sia-mobile-center .sia-lead { margin-inline: auto; text-align: left; }
    .sia-mobile-left, .sia-mobile-left .sia-eyebrow, .sia-mobile-left h2, .sia-mobile-left .sia-lead { text-align: left; }
    .sia-trust-grid { grid-template-columns: 1fr; gap: 16px; }
    .sia-trust-item span { font-size: 14px; }
    .sia-precision-grid { grid-template-columns: 1fr; gap: 0; }
    .sia-precision-item { display: grid; grid-template-columns: 46px minmax(0,1fr); column-gap: 14px; padding: 23px 0; }
    .sia-precision-item .sia-icon-surface { grid-row: 1 / span 2; width: 42px; height: 42px; margin-bottom: 0; }
    .sia-precision-item h3, .sia-precision-item p { grid-column: 2; }
    .sia-inline-note { grid-template-columns: 1fr; gap: 14px; padding: 20px; }
    .sia-disease-map { border-radius: 22px; }
    .sia-disease-hub { grid-template-columns: 44px minmax(0,1fr); gap: 14px; padding: 20px; }
    .sia-disease-hub-icon { width: 44px; height: 44px; }
    .sia-disease-hub-copy strong { font-size: 24px; }
    .sia-disease-shared { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sia-disease-branches { grid-template-columns: 1fr; }
    .sia-disease-branch { min-height: 0; padding: 20px 18px 21px; border-right: 0 !important; border-bottom: 1px solid #E1E7F2 !important; }
    .sia-disease-branch:last-child { border-bottom: 0 !important; }
    .sia-disease-caption { margin-top: 22px; }
    .sia-mechanism-diagram { grid-template-columns: 1fr; }
    .sia-mechanism-step { padding: 21px 0; border-bottom: 1px solid var(--sia-line-soft); }
    .sia-mechanism-step:last-child { border-bottom: 0; }
    .sia-mechanism-step > svg { display: none; }
    .sia-topic-cloud span, .sia-chip-list span { font-size: 16px; }
    .sia-term-flow { grid-template-columns: 1fr; gap: 10px; padding-bottom: 92px; }
    .sia-term-node { min-height: 0; }
    .sia-term-foundation { left: 0; right: 0; border-radius: 14px; }
    .sia-term-benefits { grid-template-columns: 1fr; gap: 18px; }
    .sia-multi-panel { padding: 22px 16px; border-radius: 22px; }
    .sia-multi-indications, .sia-multi-assets { grid-template-columns: 1fr; }
    .sia-clinical-group { grid-template-columns: 44px minmax(0,1fr); gap: 14px; }
    .sia-clinical-number { width: 39px; height: 39px; }
    .sia-clinical-group ul { grid-template-columns: 1fr; }
    .sia-audience-flow { justify-content: flex-start; }
    .sia-link-row-center { justify-content: flex-start; }
    .sia-related-links-center { justify-items: start; text-align: left; }
    .sia-related-links-center .sia-link-row { justify-content: flex-start; }
    .sia-ecoa-body { padding: 25px 18px 22px; }
    .sia-ecoa-top { padding: 0 18px; }
    .sia-ecoa-body > strong { font-size: 22px; }
    .sia-scale { grid-template-columns: 1fr; gap: 10px; }
    .sia-scale-option { grid-template-columns: 26px minmax(0,1fr); justify-items: start; align-items: center; }
    .sia-outcome-types { grid-template-columns: 1fr; }
    .sia-reg-flow { grid-template-columns: 1fr; }
    .sia-reg-stage, .sia-reg-stage + .sia-reg-stage, .sia-reg-stage:nth-child(3), .sia-reg-stage:nth-child(5) { padding: 22px 0; border-left: 0; }
    .sia-reg-note { text-align: left; }
    .sia-therapy-progression { grid-template-columns: 1fr; }
    .sia-therapy-stage { min-height: 0; }
    .sia-advanced-grid { grid-template-columns: 1fr; }
    .sia-clean-list { grid-template-columns: 1fr; }
    .sia-medaff-grid, .sia-audience-grid { grid-template-columns: 1fr; gap: 0; }
    .sia-change-list article, .sia-workflow-step { grid-template-columns: 43px minmax(0,1fr); gap: 13px; }
    .sia-human-visual { padding: 20px 16px; border-radius: 22px; }
    .sia-tech-row { grid-template-columns: 1fr; }
    .sia-why-grid { grid-template-columns: 1fr; gap: 18px; }
    .sia-global { padding: 68px 0; }
    .sia-faq-item summary { min-height: 72px; font-size: 16px; }
    .sia-faq-answer { padding-right: 0; }
    .sia-final-cta { padding: 68px 0; }
    .sia-final-cta h2 { text-align: center; }
    .sia-final-actions { grid-template-columns: 1fr; }
  }

  @media (max-width: 360px) {
    .sia-page h1 { font-size: 38px; }
    .sia-page h2 { font-size: 30px; }
    .sia-hero { padding-top: 56px; }
    .sia-term-foundation { font-size: 16px; }
    .sia-final-micro { display: block; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sia-page *, .sia-page *::before, .sia-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
