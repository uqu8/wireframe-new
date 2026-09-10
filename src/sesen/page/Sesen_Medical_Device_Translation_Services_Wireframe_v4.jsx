const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const IFU_URL = "https://www.sesen.com/ifu-translation-services/";
const LABELING_URL = "https://www.sesen.com/labeling-translation-services/";
const REGULATORY_URL = "https://www.sesen.com/regulatory-translation-services/";
const CLINICAL_TRIAL_URL = "https://www.sesen.com/clinical-trial-translation-services/";
const MEDICAL_SOFTWARE_URL = "https://www.sesen.com/medical-device-software-localization/";
const QUALITY_URL = "https://www.sesen.com/quality-compliance-security/";
const SESENGPT_URL = "https://www.sesen.com/sesengpt/";
const LIFE_SCIENCES_URL = "https://www.sesen.com/life-sciences-translation-services/";
const MEDICAL_SCIENTIFIC_URL = "https://www.sesen.com/medical-scientific-translation-services/";
const SERVICES_URL = "https://www.sesen.com/services/";
const IVD_CASE_STUDY_URL = "https://www.sesen.com/resources/case-studies/labeling-translation-in-vitro-diagnostics/";
const CLASS_III_CASE_STUDY_URL = "https://www.sesen.com/resources/case-studies/ifu-localization-class-iii-medical-device/";

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
    arrow: (
      <>
        <path d="M5 12h13" />
        <path d="m14 7 5 5-5 5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    file: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h5" />
        <path d="M10 12h5" />
        <path d="M10 16h5" />
      </>
    ),
    label: (
      <>
        <path d="M20 13 13 20 4 11V4h7z" />
        <circle cx="8.3" cy="8.3" r="1.2" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h4" />
        <path d="M7 11h8" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v5l-5 9a2.6 2.6 0 0 0 2.3 4h9.4a2.6 2.6 0 0 0 2.3-4l-5-9V3" />
        <path d="M7.7 15h8.6" />
      </>
    ),
    training: (
      <>
        <path d="M4 5h16v11H4z" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
        <path d="m9 10 2 2 4-4" />
      </>
    ),
    recycle: (
      <>
        <path d="M8 7 5 10 2 7" />
        <path d="M5 10a7 7 0 0 1 12-4" />
        <path d="m16 17 3-3 3 3" />
        <path d="M19 14a7 7 0 0 1-12 4" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 0 1 0 18" />
        <path d="M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    award: (
      <>
        <circle cx="12" cy="8" r="5" />
        <path d="m9 13-1 8 4-2 4 2-1-8" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.1.1l2-2a5 5 0 0 0-7.1-7.1l-1.1 1.1" />
        <path d="M14 11a5 5 0 0 0-7.1-.1l-2 2A5 5 0 0 0 12 20l1.1-1.1" />
      </>
    ),
    memory: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M6.1 9A7 7 0 0 1 18 6l2 1" />
        <path d="M17.9 15A7 7 0 0 1 6 18l-2-1" />
      </>
    ),
    comment: (
      <>
        <path d="M21 12a8.4 8.4 0 0 1-9 8 9.4 9.4 0 0 1-3.7-.8L3 21l1.7-4.6A8 8 0 1 1 21 12Z" />
        <path d="M8 12h8" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    translate: (
      <>
        <path d="M4 5h7" />
        <path d="M7.5 3v2" />
        <path d="M5 9c1.7 2.1 4.3 3.8 7 4.6" />
        <path d="M10 5c-.7 3.5-2.4 6.1-5 8" />
        <path d="m14 19 3.5-9 3.5 9" />
        <path d="M15.4 16h4.2" />
      </>
    ),
    qa: (
      <>
        <path d="M5 4h14v16H5z" />
        <path d="m8 9 1.5 1.5L12 8" />
        <path d="M14 9h2" />
        <path d="m8 15 1.5 1.5L12 14" />
        <path d="M14 15h2" />
      </>
    ),
    surgical: (
      <>
        <path d="m5 19 4-4" />
        <path d="m8 16 9-9 2 2-9 9" />
        <path d="M15 5 18 2l4 4-3 3" />
        <path d="m3 21 3-1-2-2z" />
      </>
    ),
    implant: (
      <>
        <path d="M8 3v18" />
        <path d="M16 3v18" />
        <path d="M8 7h8" />
        <path d="M8 17h8" />
        <path d="M10 12h4" />
      </>
    ),
    cloud: (
      <>
        <path d="M17.5 19H7a5 5 0 1 1 1.3-9.8A6 6 0 0 1 20 11a4 4 0 0 1-2.5 8Z" />
        <path d="M12 11v6" />
        <path d="m9.5 13.5 2.5-2.5 2.5 2.5" />
      </>
    ),
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`smd-button${secondary ? " smd-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`smd-editorial-link${light ? " smd-editorial-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="smd-hero-art" aria-hidden="true">
      <svg viewBox="0 0 610 520" fill="none">
        <defs>
          <linearGradient id="smdHeroSurface" x1="84" y1="44" x2="528" y2="476" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F7FF" />
            <stop offset="1" stopColor="#EAF0FF" />
          </linearGradient>
          <linearGradient id="smdHeroDevice" x1="208" y1="126" x2="399" y2="389" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6F8BE1" />
            <stop offset="1" stopColor="#3659BB" />
          </linearGradient>
          <filter id="smdHeroShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="18" stdDeviation="20" floodColor="#253F8F" floodOpacity="0.12" />
          </filter>
        </defs>

        <path d="M94 252C94 134 189 39 307 39s213 95 213 213-95 213-213 213S94 370 94 252Z" fill="url(#smdHeroSurface)" />
        <path d="M120 252h374" stroke="#D6E0F5" strokeWidth="1.2" />
        <path d="M307 61c49 55 74 119 74 191s-25 136-74 191" stroke="#D6E0F5" strokeWidth="1.2" />
        <path d="M307 61c-49 55-74 119-74 191s25 136 74 191" stroke="#D6E0F5" strokeWidth="1.2" />
        <ellipse cx="307" cy="252" rx="182" ry="78" stroke="#D6E0F5" strokeWidth="1.2" />

        <g filter="url(#smdHeroShadow)">
          <rect x="228" y="130" width="158" height="244" rx="32" fill="white" stroke="#C9D6F0" />
          <rect x="247" y="154" width="120" height="79" rx="15" fill="#F6F8FD" stroke="#D7E1F5" />
          <path d="M270 187h73" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M270 204h48" stroke="#96A9DF" strokeWidth="2" strokeLinecap="round" />
          <circle cx="272" cy="275" r="14" fill="#EAF0FF" stroke="#BFCDF0" />
          <circle cx="342" cy="275" r="14" fill="#EAF0FF" stroke="#BFCDF0" />
          <path d="m267 275 4 4 7-9" stroke="#3659BB" strokeWidth="2" />
          <path d="M336 275h12" stroke="#3659BB" strokeWidth="2" />
          <path d="M270 320h74" stroke="#D3DDF2" strokeWidth="2" strokeLinecap="round" />
          <path d="M281 343h52" stroke="url(#smdHeroDevice)" strokeWidth="4" strokeLinecap="round" />
        </g>

        <path d="M211 184 168 159" stroke="#6F8BE1" strokeWidth="1.8" strokeDasharray="5 6" />
        <path d="M398 181 443 155" stroke="#6F8BE1" strokeWidth="1.8" strokeDasharray="5 6" />
        <path d="M215 330 165 356" stroke="#6F8BE1" strokeWidth="1.8" strokeDasharray="5 6" />
        <path d="M397 333 446 358" stroke="#6F8BE1" strokeWidth="1.8" strokeDasharray="5 6" />

        <g filter="url(#smdHeroShadow)">
          <rect x="102" y="116" width="98" height="76" rx="20" fill="white" stroke="#CDD9F2" />
          <path d="M126 139h30l14 14v19h-44z" stroke="#3659BB" strokeWidth="1.8" />
          <path d="M156 139v15h14" stroke="#3659BB" strokeWidth="1.8" />
          <path d="M135 162h24" stroke="#91A5DE" strokeWidth="1.7" />
        </g>

        <g filter="url(#smdHeroShadow)">
          <rect x="420" y="112" width="92" height="78" rx="20" fill="white" stroke="#CDD9F2" />
          <path d="M443 135h45v32h-45z" stroke="#3659BB" strokeWidth="1.8" />
          <path d="M451 176h29" stroke="#91A5DE" strokeWidth="1.8" />
          <path d="M465 167v9" stroke="#91A5DE" strokeWidth="1.8" />
          <circle cx="467" cy="151" r="7" fill="#EAF0FF" stroke="#3659BB" />
        </g>

        <g filter="url(#smdHeroShadow)">
          <rect x="104" y="331" width="96" height="78" rx="20" fill="white" stroke="#CDD9F2" />
          <path d="m126 350 18-7 18 7v12c0 13-7 22-18 28-11-6-18-15-18-28z" stroke="#3659BB" strokeWidth="1.8" />
          <path d="m136 363 6 6 11-13" stroke="#3659BB" strokeWidth="1.8" />
        </g>

        <g filter="url(#smdHeroShadow)">
          <rect x="421" y="332" width="93" height="78" rx="20" fill="white" stroke="#CDD9F2" />
          <path d="M442 350h50" stroke="#3659BB" strokeWidth="1.8" />
          <path d="M442 363h39" stroke="#91A5DE" strokeWidth="1.8" />
          <path d="M442 376h31" stroke="#91A5DE" strokeWidth="1.8" />
          <circle cx="489" cy="377" r="7" fill="#EAF0FF" stroke="#3659BB" />
        </g>
      </svg>
    </div>
  );
}

function TerminologyArt() {
  const nodes = [
    { x: 58, y: 50, w: 124, label: "IFUs" },
    { x: 258, y: 38, w: 132, label: "Labeling" },
    { x: 443, y: 80, w: 128, label: "Software" },
    { x: 458, y: 221, w: 138, label: "Training" },
    { x: 246, y: 262, w: 168, label: "Technical Docs" },
    { x: 43, y: 210, w: 155, label: "Post-Market" },
  ];

  return (
    <div className="smd-terminology-art" aria-hidden="true">
      <svg viewBox="0 0 640 360" fill="none">
        <defs>
          <filter id="smdTermShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="9" stdDeviation="12" floodColor="#253F8F" floodOpacity="0.08" />
          </filter>
        </defs>
        <path d="M320 181 120 88M320 181 324 76M320 181 507 117M320 181 526 259M320 181 330 299M320 181 121 248" stroke="#AFC0E8" strokeWidth="1.7" strokeDasharray="5 6" />
        {nodes.map((node) => (
          <g key={node.label} filter="url(#smdTermShadow)">
            <rect x={node.x} y={node.y} width={node.w} height="58" rx="16" fill="white" stroke="#D1DCF2" />
            <circle cx={node.x + 23} cy={node.y + 29} r="8" fill="#EAF0FF" stroke="#6F8BE1" />
            <text x={node.x + 42} y={node.y + 35} fill="#17264D" fontFamily="Inter, Arial, sans-serif" fontSize="14" fontWeight="600">{node.label}</text>
          </g>
        ))}
        <g filter="url(#smdTermShadow)">
          <circle cx="320" cy="181" r="72" fill="#17264D" />
          <circle cx="320" cy="181" r="55" fill="#253F8F" />
          <path d="M294 166h52M294 180h41M294 194h47" stroke="#C8D6FF" strokeWidth="2" strokeLinecap="round" />
          <text x="320" y="220" textAnchor="middle" fill="white" fontFamily="Inter, Arial, sans-serif" fontSize="13" fontWeight="700">APPROVED</text>
          <text x="320" y="237" textAnchor="middle" fill="#C8D6FF" fontFamily="Inter, Arial, sans-serif" fontSize="12" fontWeight="600">TERMINOLOGY</text>
        </g>
      </svg>
    </div>
  );
}

const trustItems = [
  { icon: "flask", label: "Life Sciences Specialization" },
  { icon: "award", label: "ISO 17100 · ISO 9001 · ISO 13485" },
  { icon: "globe", label: "150+ Languages" },
  { icon: "users", label: "Professional Human Review" },
];

const regulatedPrinciples = [
  {
    title: "Technical Precision",
    text: "Product specifications, operating instructions, warnings, procedures, measurements, device functions, and technical concepts must remain accurate and understandable across languages.",
  },
  {
    title: "Regulatory Context",
    text: "IFUs, labeling, software content, technical documentation, clinical evidence, and post-market materials often sit inside broader regulated product and quality workflows.",
  },
  {
    title: "User & Patient Safety",
    text: "Instructions, warnings, contraindications, precautions, alarms, and procedural language must communicate clearly to the people who use, operate, maintain, or interact with the device.",
  },
  {
    title: "Product Terminology",
    text: "Approved terminology needs to remain consistent across product families, markets, documents, software releases, and successive content versions.",
  },
];

const contentGroups = [
  {
    icon: "file",
    title: "Instructions for Use & User Guidance",
    body: "Accurate, readable IFUs help clinicians, patients, technicians, caregivers, and other users understand how a device is intended to be operated, handled, maintained, and used safely.",
    items: ["Instructions for Use (IFUs) and DFUs", "User and operator manuals", "Quick-reference and quick-start guides", "Installation and maintenance instructions", "Warnings, precautions, and contraindications", "Electronic Instructions for Use (eIFU)", "Recurring IFU revisions and updates"],
    link: { label: "Explore IFU Translation Services", href: IFU_URL },
  },
  {
    icon: "label",
    title: "Medical Device Labeling & Packaging",
    body: "Sesen helps keep critical product information aligned with device documentation and approved terminology across tightly constrained multilingual layouts.",
    items: ["Device labels and packaging", "Cartons and package inserts", "Safety information and warnings", "Product claims and handling information", "UDI-related labeling content", "Digital labeling", "Market-specific labeling updates"],
    link: { label: "Explore Labeling Translation Services", href: LABELING_URL },
  },
  {
    icon: "layers",
    title: "Regulatory & Technical Documentation",
    body: "Support multilingual documentation across development, conformity assessment, registration, quality management, change control, and ongoing market support.",
    items: ["Technical documentation and technical files", "Regulatory submission materials", "Device descriptions and specifications", "Risk management documentation", "Quality system content", "Verification and validation materials", "Regulatory correspondence and product updates"],
    link: { label: "Explore Regulatory Translation Services", href: REGULATORY_URL },
  },
  {
    icon: "monitor",
    title: "Software, SaMD & Connected Devices",
    body: "Localize software-driven device experiences while preserving context, terminology, interface constraints, and alignment with physical and digital product documentation.",
    items: ["Device user interfaces", "Embedded software", "Software as a Medical Device (SaMD)", "Connected medical devices", "Mobile medical applications", "Clinician dashboards", "Cybersecurity and software lifecycle documentation", "Alerts, help content, and release materials"],
    link: { label: "Explore Medical Device Software Localization", href: MEDICAL_SOFTWARE_URL },
  },
  {
    icon: "shield",
    title: "Clinical, Safety & Human Factors Content",
    body: "Support evidence and documentation connecting device performance with intended users, clinical environments, product safety, and usability.",
    items: ["Clinical investigation materials", "Clinical evaluation and performance content", "Usability studies and human factors", "Risk and safety documentation", "Patient and user materials", "Investigator and site documentation", "Questionnaires and study-related instruments"],
    link: { label: "Explore Clinical Trial Translation Services", href: CLINICAL_TRIAL_URL },
  },
  {
    icon: "training",
    title: "Training, Service & Product Support",
    body: "Extend approved product language into training and support materials used by healthcare professionals, technicians, service teams, and other device users.",
    items: ["Product and HCP training", "Technical training and eLearning", "Installation materials", "Service documentation", "Troubleshooting content", "Technical bulletins", "Multimedia and audiovisual training"],
  },
  {
    icon: "recycle",
    title: "Post-Market & Lifecycle Content",
    body: "Manage multilingual communication after launch as evidence, product information, software, labeling, and safety content evolve over time.",
    items: ["Post-market surveillance (PMS)", "Post-market clinical follow-up (PMCF)", "Complaint documentation", "Field and safety communications", "Corrective-action content", "Revised IFUs and labeling", "Software and product lifecycle updates"],
    featured: true,
  },
];

const lifecycle = [
  {
    number: "01",
    title: "Product Development",
    body: "Build multilingual readiness early by establishing consistent product language before it spreads across downstream content.",
    items: ["Risk and usability documentation", "Design and product specifications", "Early technical documentation", "Software and interface content", "Terminology development"],
    emphasis: "Establish consistent device terminology early.",
  },
  {
    number: "02",
    title: "Clinical & Regulatory",
    body: "Support the documentation used to evaluate, substantiate, document, and communicate device safety and performance.",
    items: ["Clinical investigation materials", "Clinical evaluation documentation", "Performance documentation", "Regulatory submissions", "Technical files and quality content"],
    emphasis: "Maintain meaning as the regulated product record develops.",
  },
  {
    number: "03",
    title: "Labeling & Launch",
    body: "Coordinate the multilingual content users and markets encounter when the product is commercialized.",
    items: ["IFUs and DFUs", "Device labeling and packaging", "Software and UI", "eIFU", "Training and product support"],
    emphasis: "Synchronize languages, files, reviewers, and release schedules.",
  },
  {
    number: "04",
    title: "Post-Market Support",
    body: "Maintain multilingual consistency as products, evidence, requirements, and safety information evolve after launch.",
    items: ["PMS and PMCF materials", "Complaints and field communications", "Safety and corrective-action updates", "Updated IFUs and labels", "Software and product revisions"],
    emphasis: "Update what changed while protecting approved content.",
  },
];

const focusAreas = [
  {
    label: "IFU Translation",
    title: "Instructions That Stay Accurate Across Languages and Revisions",
    body: "IFUs combine technical procedures, safety information, device terminology, diagrams, measurements, tables, warnings, and user-facing instructions in a single controlled document.",
    items: ["Technical meaning and procedural clarity", "Warnings and precautions", "Approved terminology", "Cross-reference integrity", "Version alignment", "Multilingual layout quality", "Print and eIFU readiness"],
    link: { label: "Explore IFU Translation Services", href: IFU_URL },
  },
  {
    label: "Labeling & Packaging",
    title: "Translation That Works in the Final Layout",
    body: "Labels and packaging place critical information into highly constrained layouts where text expansion, symbols, product identifiers, market language, and artwork all interact.",
    items: ["Translation and professional review", "Terminology harmonization", "Multilingual DTP", "Artwork adaptation", "In-context linguistic QA", "Version comparison and final-format checks"],
    link: { label: "Explore Labeling Translation Services", href: LABELING_URL },
  },
  {
    label: "Medical Device Software",
    title: "Context-Aware Localization for UI, SaMD and Connected Devices",
    body: "A short source string can mean different things depending on the screen, workflow, user role, device state, or character limit. Software language must work in the interface and remain aligned with the product ecosystem.",
    items: ["UI and embedded software strings", "SaMD and connected-device experiences", "Context and character limits", "Terminology alignment", "Software lifecycle, release, and update workflows", "In-context review"],
    link: { label: "Explore Medical Device Software Localization", href: MEDICAL_SOFTWARE_URL },
  },
];

const terminologyControls = [
  { icon: "link", title: "Approved Device Terminology", body: "Create and maintain product-specific glossaries for device names, components, functions, procedures, warnings, UI terminology, technical concepts, and recurring regulated language." },
  { icon: "memory", title: "Translation Memory", body: "Reuse previously translated and reviewed language across recurring content, product families, and future updates where appropriate." },
  { icon: "refresh", title: "Version & Delta Management", body: "Identify changed source content and focus translation and review on affected segments while protecting unchanged approved language." },
  { icon: "comment", title: "Reviewer Feedback", body: "Capture approved client and in-country reviewer decisions so they become reusable knowledge rather than isolated comments in individual files." },
];

const qualitySteps = [
  { number: "01", title: "Content & Workflow Analysis", body: "Review source content, file formats, language requirements, terminology, translation memories, reference materials, timelines, and reviewer expectations." },
  { number: "02", title: "Linguist Assignment", body: "Assign professional native-language linguists with relevant medical, scientific, technical, regulatory, or device-domain experience." },
  { number: "03", title: "Terminology Preparation", body: "Extract, align, or confirm key terminology before translation, particularly for recurring product concepts and safety-sensitive language." },
  { number: "04", title: "Translation", body: "Translate using approved terminology, relevant references, translation memory, and appropriate technology." },
  { number: "05", title: "Professional Review", body: "Qualified reviewers evaluate accuracy, meaning, terminology, readability, consistency, and suitability for the intended audience and content type." },
  { number: "06", title: "Linguistic & Automated QA", body: "Quality checks help identify terminology, numbers, missing content, inconsistent translations, tags, formatting, and version discrepancies." },
  { number: "07", title: "Formatting & In-Context Review", body: "For IFUs, labels, software, packaging, and other layout-sensitive content, review can extend into the final environment." },
  { number: "08", title: "Final Validation & Delivery", body: "Incorporate approved feedback, perform final checks, and deliver the required multilingual files and supporting project documentation." },
];

const aiPrinciples = [
  { icon: "search", title: "Selective AI Application", body: "Sesen evaluates content type, risk, language pair, terminology maturity, translation history, intended use, and client requirements before determining how AI should be used." },
  { icon: "translate", title: "Terminology-Guided Translation", body: "Approved terminology, translation memory, product references, and existing multilingual assets can help guide AI-assisted output before professional review." },
  { icon: "users", title: "Expert Human Review", body: "Professional medical linguists evaluate meaning, technical terminology, readability, warnings, instructions, contextual accuracy, and market-specific language." },
  { icon: "qa", title: "AI-Assisted QA", body: "Automated checks can help surface terminology inconsistencies, number mismatches, missing content, formatting issues, and cross-document differences." },
];

const deviceTypes = [
  { icon: "flask", title: "Diagnostic & Monitoring Devices", body: "IVD, laboratory and diagnostic systems, patient monitoring technologies, diagnostic imaging, ophthalmic devices, testing platforms, and related software and documentation." },
  { icon: "surgical", title: "Surgical & Therapeutic Devices", body: "Surgical systems, instruments, therapeutic equipment, procedural technologies, and related IFUs, labeling, technical content, software, and training." },
  { icon: "implant", title: "Implantable & Orthopedic Devices", body: "High-sensitivity documentation for implantable, cardiovascular, orthopedic, and other device systems where precise terminology and user instructions are especially important." },
  { icon: "cloud", title: "Digital & Connected Medical Devices", body: "SaMD, connected devices, digitally enabled medical technologies, applications, clinician interfaces, patient-facing software, and AI-enabled device ecosystems." },
];

const globalItems = [
  { title: "150+ Languages", body: "Support for established and emerging medical-device markets across Europe, the Americas, Asia-Pacific, the Middle East, and other regions." },
  { title: "Regional Language Adaptation", body: "Support appropriate regional terminology, language variants, market conventions, and approved client preferences." },
  { title: "Reviewer Coordination", body: "Structure feedback from client teams, subject-matter experts, in-country reviewers, and other designated stakeholders." },
  { title: "Simultaneous Multilingual Releases", body: "Coordinate multiple languages and file types around launches, labeling updates, software releases, and post-market communications." },
  { title: "Recurring Programs", body: "Maintain terminology, translation memory, reviewer history, and workflow knowledge across ongoing product families and content updates." },
];

const whySesen = [
  { title: "Medical Device Expertise", body: "Professional linguists and reviewers selected for medical, technical, scientific, regulatory, and device-related content." },
  { title: "Lifecycle Continuity", body: "Translation support from development and clinical evaluation through labeling, software deployment, launch, and post-market updates." },
  { title: "Terminology Governance", body: "Structured terminology, translation memory, and reviewer feedback help maintain consistency across documents, languages, and product versions." },
  { title: "Quality-Controlled Workflows", body: "ISO-certified processes, professional review, QA, formatting checks, and project documentation support regulated multilingual operations." },
  { title: "Technology with Oversight", body: "SesenGPT, translation memory, terminology technology, and automated QA strengthen workflows while professional expertise remains central." },
  { title: "Global Program Management", body: "Centralized coordination across 150+ languages, file types, markets, reviewers, releases, and recurring content programs." },
];

const relatedServices = [
  { title: "Regulatory Translation Services", body: "Translation for regulatory submissions, technical documentation, quality content, authority correspondence, and regulated product workflows.", href: REGULATORY_URL },
  { title: "Clinical Trial Translation Services", body: "Support for device clinical investigations, study documentation, patient-facing materials, site content, and clinical evidence.", href: CLINICAL_TRIAL_URL },
  { title: "Medical & Scientific Translation Services", body: "Specialized translation for scientific, medical, research, technical, medical-affairs, publication, and education content.", href: MEDICAL_SCIENTIFIC_URL },
  { title: "Life Sciences Translation Services", body: "Explore Sesen's broader support for pharmaceutical, biotechnology, medical device, CRO, healthcare, and regulated life sciences organizations.", href: LIFE_SCIENCES_URL },
];

const faqs = [
  {
    q: "What are medical device translation services?",
    a: "Medical device translation services cover the translation and localization of multilingual content used throughout the medical-device lifecycle. This can include Instructions for Use, labeling, packaging, software interfaces, technical documentation, clinical and regulatory materials, risk and safety content, training, and post-market communications. Unlike general technical translation, medical-device translation often requires specialized terminology, version control, professional review, formatting validation, and alignment across interconnected regulated content.",
  },
  {
    q: "Does Sesen translate IFUs and medical device labeling?",
    a: "Yes. Sesen supports translation and localization of IFUs, DFUs, user manuals, device labels, packaging, package inserts, warnings, precautions, safety information, eIFUs, and related user documentation. Workflows can incorporate terminology management, translation memory, professional medical-device review, multilingual DTP, in-context QA, and version-controlled updates.",
  },
  {
    q: "Can Sesen localize medical device software and SaMD?",
    a: "Yes. Sesen supports localization for embedded device interfaces, Software as a Medical Device, connected devices, mobile applications, clinician dashboards, patient apps, digital-health platforms, alerts, help content, and software release materials. Software localization can include terminology management, contextual review, character-limit considerations, linguistic QA, and alignment with corresponding terminology used in IFUs, labeling, and other product documentation.",
  },
  {
    q: "How does Sesen maintain terminology consistency across device documentation?",
    a: "Sesen can establish and maintain product-specific terminology resources that capture approved device names, components, functions, warnings, procedures, UI terms, and other recurring language. These resources work together with translation memory, client references, reviewer feedback, and QA processes to help keep terminology consistent across IFUs, labels, software, technical documentation, training, and post-market content.",
  },
  {
    q: "How does Sesen manage updated IFUs, labels, and product revisions?",
    a: "For recurring content, Sesen can use translation memory and version-comparison workflows to identify source changes and reuse previously translated and approved content where appropriate. This delta-based approach helps teams focus translation and review effort on what has actually changed while reducing unnecessary variation in unchanged content. Reviewer feedback and updated terminology can also be incorporated into future versions.",
  },
  {
    q: "Does Sesen use AI for medical device translation?",
    a: "Sesen applies AI-assisted translation selectively. Before determining the appropriate workflow, we consider content type, risk profile, language pair, existing terminology, translation history, client requirements, and intended use. For suitable content, SesenGPT and AI-assisted QA can help improve consistency and efficiency. Professional medical linguists review and validate content according to the agreed quality workflow. For regulated medical-device content, Sesen treats AI as controlled workflow technology rather than a replacement for qualified professional review.",
  },
  {
    q: "What quality controls does Sesen use for regulated medical device content?",
    a: "Depending on project requirements, Sesen's workflows can include source-content analysis, terminology preparation, qualified linguist assignment, translation, professional review, linguistic QA, automated QA, formatting checks, in-context review, client reviewer coordination, and final validation. Sesen maintains ISO 17100, ISO 9001:2015, and ISO 13485:2016 certifications as part of its quality infrastructure for multilingual life sciences services.",
  },
  {
    q: "How many languages does Sesen support for medical device translation?",
    a: "Sesen supports medical-device translation and localization in 150+ languages, including multilingual programs spanning Europe, North America, Latin America, Asia-Pacific, the Middle East, and other global markets. For multinational programs, Sesen can coordinate language variants, terminology, reviewers, translation memories, file production, and simultaneous or phased releases through a centralized workflow.",
  },
];

export default function SesenMedicalDeviceTranslationServicesWireframeV4() {
  return (
    <main className="smd-page">
      <style>{styles}</style>

      <section className="smd-hero" aria-labelledby="smd-page-title">
        <div className="smd-shell smd-hero-grid">
          <div className="smd-hero-copy">
            <p className="smd-eyebrow">Medical Devices</p>
            <h1 id="smd-page-title">Medical Device Translation Services</h1>
            <p className="smd-hero-lead">
              Sesen helps medical device companies translate and localize regulated content across the product lifecycle — from development and clinical evaluation through regulatory submission, product launch, software deployment, and post-market support.
            </p>
            <p className="smd-hero-body">
              Our specialized medical device translation services support IFUs, labeling and packaging, technical documentation, regulatory materials, software and SaMD, clinical content, training, and post-market communications with terminology-controlled, quality-focused workflows built for global life sciences organizations.
            </p>
            <div className="smd-button-row">
              <Button href={CONTACT_SALES_URL}>CONTACT SALES</Button>
              <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="smd-trust-band" aria-label="Sesen medical device translation capabilities">
        <div className="smd-shell smd-trust-grid">
          {trustItems.map((item) => (
            <div className="smd-trust-item" key={item.label}>
              <Icon name={item.icon} size={20} strokeWidth={1.65} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="smd-section smd-authority-section" aria-labelledby="smd-authority-title">
        <div className="smd-shell smd-authority-grid">
          <div className="smd-authority-copy">
            <p className="smd-eyebrow">Regulated Device Content</p>
            <h2 id="smd-authority-title">Translation Built for Regulated Medical Device Content</h2>
            <p className="smd-section-lead">
              Medical device translation is not the same as general technical translation. Device content often sits at the intersection of engineering, clinical evidence, regulatory requirements, product safety, usability, software, and patient or healthcare-professional communication.
            </p>
            <p>
              A translated term may appear in an IFU, device label, software interface, training module, technical document, and post-market communication. A warning may need to remain precise across multiple formats and revisions. A software update may introduce new strings that must remain aligned with approved terminology already used elsewhere in the product ecosystem.
            </p>
            <p>
              Sesen helps medical device organizations manage this complexity with specialized linguistic expertise, terminology governance, translation memory, professional review, multilingual quality assurance, and controlled version-management workflows.
            </p>
          </div>
          <div className="smd-principles" aria-label="Medical device translation requirements">
            {regulatedPrinciples.map((item) => (
              <article className="smd-principle" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
            <div className="smd-authority-callout">
              <span>One device.</span>
              <strong>Hundreds of multilingual content touchpoints.</strong>
              <p>Sesen helps keep them connected.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="smd-section smd-content-section" aria-labelledby="smd-content-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered">
            <h2 id="smd-content-title">Medical Device Content Across Every Critical Workflow</h2>
            <p>
              Sesen supports multilingual content throughout medical device development, regulatory review, market authorization, commercialization, product use, and ongoing lifecycle management. Rather than treating each file as an isolated translation project, we help teams maintain terminology and content continuity across related documents, systems, product versions, and markets.
            </p>
          </header>

          <div className="smd-content-grid">
            {contentGroups.map((group) => (
              <article className={`smd-content-item${group.featured ? " smd-content-item-featured" : ""}`} key={group.title}>
                <div className="smd-content-icon"><Icon name={group.icon} size={24} /></div>
                <div className="smd-content-main">
                  <h3>{group.title}</h3>
                  <p>{group.body}</p>
                  <ul>
                    {group.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  {group.link && <EditorialLink href={group.link.href}>{group.link.label}</EditorialLink>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smd-section smd-lifecycle-section" aria-labelledby="smd-lifecycle-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered smd-lifecycle-head">
            <p className="smd-eyebrow">Lifecycle Continuity</p>
            <h2 id="smd-lifecycle-title">Translation Across the Medical Device Lifecycle</h2>
            <p>
              Multilingual requirements do not begin with a final IFU and end at product launch. Device content evolves continuously as products move from development into clinical and regulatory programs, commercialization, and ongoing market support.
            </p>
          </header>

          <div className="smd-lifecycle-track">
            {lifecycle.map((stage) => (
              <article className="smd-lifecycle-stage" key={stage.number}>
                <div className="smd-stage-number">{stage.number}</div>
                <div className="smd-stage-line" aria-hidden="true" />
                <h3>{stage.title}</h3>
                <p>{stage.body}</p>
                <ul>{stage.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <strong>{stage.emphasis}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smd-section smd-focus-section" aria-labelledby="smd-focus-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered">
            <h2 id="smd-focus-title">Where Accuracy, Consistency and User Experience Converge</h2>
            <p>
              IFUs, labeling, and device software are high-control environments where linguistic quality, regulatory context, usability, formatting, and version management must work together.
            </p>
          </header>

          <div className="smd-focus-grid">
            {focusAreas.map((area) => (
              <article className="smd-focus-item" key={area.label}>
                <p className="smd-item-label">{area.label}</p>
                <h3>{area.title}</h3>
                <p>{area.body}</p>
                <ul>{area.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <EditorialLink href={area.link.href}>{area.link.label}</EditorialLink>
              </article>
            ))}
          </div>

          <div className="smd-focus-bridge">
            <span>Connected content requires connected terminology.</span>
            <strong>One product term should not become five different translations because it appears in five different systems.</strong>
          </div>
        </div>
      </section>

      <section className="smd-section smd-terminology-section" aria-labelledby="smd-terminology-title">
        <div className="smd-shell smd-terminology-grid">
          <div className="smd-terminology-copy">
            <p className="smd-eyebrow">Enterprise Content Control</p>
            <h2 id="smd-terminology-title">Terminology and Version Control Across Every Product Touchpoint</h2>
            <p className="smd-section-lead">
              Medical device content changes continuously. An IFU is revised. A warning is updated. A new software release introduces additional strings. Packaging changes. Reviewer feedback modifies approved language. A new product model reuses content from an existing family.
            </p>
            <p>
              Without centralized terminology and translation assets, small changes can introduce inconsistencies across languages and documents. Sesen helps medical device organizations manage recurring multilingual content with structured terminology, translation memory, reviewer feedback, and controlled version workflows.
            </p>
            <div className="smd-terminology-flow" aria-label="Connected device content">
              <span>IFUs</span><i aria-hidden="true">→</i><span>Labeling</span><i aria-hidden="true">→</i><span>Software</span><i aria-hidden="true">→</i><span>Technical Documentation</span><i aria-hidden="true">→</i><span>Training</span><i aria-hidden="true">→</i><span>Post-Market</span>
            </div>
          </div>
          <TerminologyArt />
        </div>

        <div className="smd-shell smd-controls-grid">
          {terminologyControls.map((item) => (
            <article className="smd-control-item" key={item.title}>
              <div className="smd-control-icon"><Icon name={item.icon} size={22} /></div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="smd-section smd-quality-section" aria-labelledby="smd-quality-title">
        <div className="smd-shell">
          <div className="smd-quality-intro">
            <div>
              <h2 id="smd-quality-title">Quality Controls Designed for Regulated Content</h2>
            </div>
            <div>
              <p className="smd-section-lead">
                Medical device translation requires more than a final spell-check. Sesen combines specialized linguistic expertise, ISO-certified processes, terminology controls, professional review, automated QA, and project documentation to support regulated and safety-sensitive device content.
              </p>
              <p>Our quality approach can be adapted to the content type, intended audience, project requirements, and level of risk.</p>
            </div>
          </div>

          <div className="smd-quality-steps">
            {qualitySteps.map((step) => (
              <article className="smd-quality-step" key={step.number}>
                <span>{step.number}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="smd-quality-proof">
            <div className="smd-quality-proof-copy">
              <h3>ISO-Certified Quality Infrastructure</h3>
              <p>Sesen's quality infrastructure supports multilingual life sciences programs with professional review, documented controls, secure infrastructure, and medical-device-relevant quality practices.</p>
              <EditorialLink href={QUALITY_URL}>View Quality, Compliance & Security</EditorialLink>
            </div>
            <div className="smd-quality-proof-list">
              <span><Icon name="award" size={20} /> ISO 17100 — Translation Services</span>
              <span><Icon name="award" size={20} /> ISO 9001:2015 — Quality Management</span>
              <span><Icon name="award" size={20} /> ISO 13485:2016 — Medical Device Quality Management</span>
              <span><Icon name="cloud" size={20} /> Secure AWS-Hosted Infrastructure</span>
              <span><Icon name="users" size={20} /> Professional Native Medical Linguists</span>
              <span><Icon name="shield" size={20} /> Controlled Multilingual Workflows</span>
            </div>
          </div>
        </div>
      </section>

      <section className="smd-section smd-ai-section" aria-labelledby="smd-ai-title">
        <div className="smd-shell smd-ai-grid">
          <div className="smd-ai-copy">
            <p className="smd-eyebrow smd-eyebrow-dark">SesenGPT</p>
            <h2 id="smd-ai-title">AI-Assisted Workflows with Professional Human Validation</h2>
            <p className="smd-ai-lead">
              AI can improve the efficiency and visibility of multilingual medical-device workflows — but regulated content requires judgment about where and how AI should be applied.
            </p>
            <p>
              For suitable content, SesenGPT and related AI-enabled technologies can support translation, terminology, consistency checking, repetitive-content processing, and multilingual QA. The objective is not uncontrolled automation.
            </p>
            <div className="smd-ai-statement">
              <strong>AI is a workflow advantage.</strong>
              <span>Professional medical-device expertise remains central to quality.</span>
            </div>
            <EditorialLink href={SESENGPT_URL} light>Explore SesenGPT</EditorialLink>
          </div>
          <div className="smd-ai-principles">
            {aiPrinciples.map((item) => (
              <article key={item.title}>
                <div><Icon name={item.icon} size={22} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
            <div className="smd-ai-validation">
              <Icon name="check" size={22} strokeWidth={2} />
              <div>
                <strong>Final Human Validation</strong>
                <span>Final deliverables remain subject to the professional review and validation required by the agreed workflow.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="smd-section smd-device-types-section" aria-labelledby="smd-device-types-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered">
            <h2 id="smd-device-types-title">Supporting Medical Devices Across Product Categories</h2>
            <p>
              Sesen provides translation and localization support across a broad range of medical-device technologies and product environments while maintaining the same core focus on controlled terminology, expert review, and lifecycle continuity.
            </p>
          </header>
          <div className="smd-device-types-grid">
            {deviceTypes.map((item) => (
              <article className="smd-device-type" key={item.title}>
                <div><Icon name={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
          <p className="smd-device-types-close">
            Whatever the product category, the underlying requirement is similar: <strong>the multilingual content should remain connected to the same approved product language throughout the lifecycle.</strong>
          </p>
        </div>
      </section>

      <section className="smd-section smd-global-section" aria-labelledby="smd-global-title">
        <div className="smd-shell smd-global-grid">
          <div className="smd-global-intro">
            <p className="smd-eyebrow">Global Program Delivery</p>
            <h2 id="smd-global-title">One Device Program. Multiple Markets. Consistent Execution.</h2>
            <p className="smd-section-lead">
              Global medical device launches can involve dozens of languages, multiple document types, overlapping regulatory timelines, software releases, product variants, reviewers, and successive content updates.
            </p>
            <p>
              Sesen provides centralized multilingual program support across 150+ languages, helping medical device organizations coordinate global and regional requirements without losing control of terminology, versioning, and quality.
            </p>
            <EditorialLink href={LIFE_SCIENCES_URL}>Explore Life Sciences Translation Services</EditorialLink>
          </div>
          <div className="smd-global-list">
            {globalItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
            <div className="smd-global-callout">A global device program should become easier to manage as multilingual knowledge accumulates — not restart with every new file.</div>
          </div>
        </div>
      </section>

      <section className="smd-section smd-proof-section" aria-labelledby="smd-proof-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered">
            <p className="smd-eyebrow">Program Proof</p>
            <h2 id="smd-proof-title">Medical Device Translation in Practice</h2>
            <p>Two representative medical-device programs show how terminology governance, multilingual production, and in-context validation work in practice.</p>
          </header>

          <div className="smd-case-grid">
            <article className="smd-case">
              <div className="smd-case-top">
                <span>IVD Labeling & Packaging</span>
                <strong>15 Languages</strong>
              </div>
              <h3>Coordinated Labeling Across EU, APAC and LATAM Markets</h3>
              <p>
                A global manufacturer of in-vitro diagnostic systems engaged Sesen to support a multilingual labeling program spanning 15 languages. The program included IFUs, carton labels, blister-pack content, and safety information across multiple product configurations.
              </p>
              <div className="smd-case-tags">
                <span>Terminology Harmonization</span><span>Multilingual DTP</span><span>Version Control</span><span>In-Context QA</span>
              </div>
              <p className="smd-case-outcome">The workflow aligned IFU and packaging content across markets while supporting coordinated multilingual delivery for the global product-line expansion.</p>
              <EditorialLink href={IVD_CASE_STUDY_URL}>Read the IVD Labeling Case Study</EditorialLink>
            </article>

            <article className="smd-case smd-case-featured">
              <div className="smd-case-top">
                <span>Class III Medical Device IFUs</span>
                <strong>24 EU Languages</strong>
              </div>
              <h3>Submission-Ready IFUs for an Implantable Cardiac Device</h3>
              <p>
                A U.S.-based MedTech company preparing an implantable cardiac device for European market authorization needed highly technical IFUs localized into 24 EU languages while maintaining terminology consistency across related product families and legacy documentation.
              </p>
              <div className="smd-case-tags">
                <span>Specialized Linguists</span><span>Terminology Control</span><span>Multilingual Layout</span><span>Final In-Context QA</span>
              </div>
              <p className="smd-case-outcome">The resulting 24-language IFU package was delivered in submission-ready format, and the client's notified body approved the translations without revisions.</p>
              <EditorialLink href={CLASS_III_CASE_STUDY_URL}>Read the Class III IFU Case Study</EditorialLink>
            </article>
          </div>
        </div>
      </section>

      <section className="smd-section smd-why-section" aria-labelledby="smd-why-title">
        <div className="smd-shell">
          <header className="smd-section-head smd-section-head-centered">
            <h2 id="smd-why-title">A Specialized Partner for Global Medical Device Programs</h2>
            <p>Medical-device organizations need more than language coverage. They need a multilingual partner that understands how regulated content connects across people, products, systems, and time.</p>
          </header>
          <div className="smd-why-grid">
            {whySesen.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="smd-section smd-related-section" aria-labelledby="smd-related-title">
        <div className="smd-shell smd-related-grid">
          <div className="smd-related-intro">
            <p className="smd-eyebrow">Related Services</p>
            <h2 id="smd-related-title">Connected Expertise Across Life Sciences</h2>
            <p>
              Medical-device translation frequently intersects with other regulated content disciplines. Sesen's broader life sciences specialization helps multilingual programs connect related workflows rather than manage each requirement in isolation.
            </p>
            <EditorialLink href={SERVICES_URL}>View All Sesen Services</EditorialLink>
          </div>
          <div className="smd-related-list">
            {relatedServices.map((item) => (
              <a href={item.href} key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <Icon name="arrow" size={19} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="smd-section smd-faq-section" aria-labelledby="smd-faq-title">
        <div className="smd-shell smd-faq-grid">
          <div className="smd-faq-intro">
            <h2 id="smd-faq-title">Medical Device Translation Services FAQ</h2>
            <p>Answers to common questions about IFUs, labeling, software localization, terminology control, version management, AI-assisted workflows, quality, and global language support.</p>
          </div>
          <div className="smd-faq-list">
            {faqs.map((item, index) => (
              <details className="smd-faq-item" key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="smd-faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="smd-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="smd-final-cta" aria-labelledby="smd-final-title">
        <div className="smd-shell smd-final-grid">
          <div>
            <h2 id="smd-final-title">Bring Your Medical Device Content to Global Markets with Confidence</h2>
            <p>
              From an early terminology strategy to a multilingual IFU release, a localized software interface, or a recurring global labeling program, Sesen helps medical device organizations manage multilingual content with the specialization, controls, and continuity regulated products demand.
            </p>
            <p className="smd-final-proof">Medical-device expertise · terminology governance · professional human review · ISO-certified quality processes · controlled AI-enabled workflows · scalable multilingual delivery</p>
          </div>
          <div className="smd-final-actions">
            <Button href={CONTACT_SALES_URL}>CONTACT SALES</Button>
            <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .smd-page {
    --smd-brand: #4B6FD8;
    --smd-brand-dark: #3659BB;
    --smd-brand-deep: #253F8F;
    --smd-brand-mid: #6F8BE1;
    --smd-brand-soft: #EAF0FF;
    --smd-brand-pale: #F5F7FF;
    --smd-navy: #17264D;
    --smd-ink: #111827;
    --smd-slate: #46546D;
    --smd-muted: #68758B;
    --smd-line: #DDE4F2;
    --smd-line-soft: #E9EEF8;
    --smd-soft: #F7F9FD;
    --smd-white: #FFFFFF;
    --smd-shadow: 0 22px 60px rgba(31,53,102,.08);
    --smd-radius-lg: 28px;
    --smd-radius-md: 20px;
    width: 100%;
    overflow-x: clip;
    background: var(--smd-white);
    color: var(--smd-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .smd-page, .smd-page * { box-sizing: border-box; }
  .smd-page * { min-width: 0; }
  .smd-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .smd-page h1, .smd-page h2, .smd-page h3, .smd-page p { margin-top: 0; }
  .smd-page h1, .smd-page h2, .smd-page h3 {
    color: var(--smd-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-style: normal;
    font-stretch: 100%;
    font-weight: 500;
    letter-spacing: normal;
  }
  .smd-page h1 { margin-bottom: 20px; font-size: 48px; line-height: 1.3; letter-spacing: -0.5px; }
  .smd-page h2 { margin-bottom: 22px; font-size: 36px; line-height: 1.3; }
  .smd-page h3 { margin-bottom: 11px; font-size: 22px; line-height: 1.3; }
  .smd-page p, .smd-page li { color: var(--smd-slate); font-size: 16px; line-height: 1.72; }
  .smd-page button, .smd-page input, .smd-page select, .smd-page textarea { font: inherit; }
  .smd-page ul { margin: 0; padding: 0; list-style: none; }

  .smd-page a:focus-visible,
  .smd-page button:focus-visible,
  .smd-page summary:focus-visible {
    outline: 3px solid rgba(75,111,216,.32);
    outline-offset: 3px;
  }

  .smd-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .smd-section { padding: 96px 0; }
  .smd-section-lead { color: #293954 !important; font-size: 18px !important; line-height: 1.65 !important; }

  .smd-eyebrow,
  .smd-item-label {
    margin-bottom: 16px !important;
    color: var(--smd-brand-dark) !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: .15em !important;
    text-transform: uppercase;
  }
  .smd-eyebrow-dark { color: #C8D6FF !important; }

  .smd-button-row { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 30px; }
  .smd-button {
    min-height: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 0 24px;
    border: 1px solid var(--smd-brand);
    border-radius: 999px;
    color: #FFFFFF !important;
    background: var(--smd-brand);
    box-shadow: 0 10px 24px rgba(75,111,216,.15);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
    transition: background .18s ease, border-color .18s ease, box-shadow .18s ease;
  }
  .smd-button:hover { background: var(--smd-brand-dark); border-color: var(--smd-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.20); }
  .smd-button-secondary { color: var(--smd-ink) !important; background: white; border-color: #C9D5EF; box-shadow: none; }
  .smd-button-secondary:hover { color: var(--smd-ink) !important; background: var(--smd-brand-soft); border-color: #B7C6E8; box-shadow: none; }
  .smd-button svg, .smd-editorial-link svg, .smd-related-list a > svg { transition: transform .2s ease; }
  .smd-button:hover svg, .smd-editorial-link:hover svg, .smd-related-list a:hover > svg { transform: translateX(3px); }

  .smd-editorial-link {
    display: inline-flex;
    width: fit-content;
    align-items: center;
    gap: 9px;
    color: var(--smd-brand-dark) !important;
    font-size: 14px;
    font-weight: 700;
  }
  .smd-editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .smd-editorial-link-light { color: white !important; }

  .smd-section-head { max-width: 820px; margin-bottom: 54px; }
  .smd-section-head > p:last-child { margin-bottom: 0; font-size: 18px; }
  .smd-section-head-centered { margin-inline: auto; text-align: center; }

  .smd-hero {
    position: relative;
    overflow: hidden;
    padding: 92px 0 98px;
    background:
      radial-gradient(circle at 87% 11%, rgba(75,111,216,.11), transparent 27%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%);
  }
  .smd-hero::after {
    content: "";
    position: absolute;
    right: 0;
    top: 7%;
    width: 22%;
    height: 64%;
    opacity: .38;
    background-image: radial-gradient(circle, rgba(75,111,216,.20) 1px, transparent 1.25px);
    background-size: 14px 14px;
    -webkit-mask-image: linear-gradient(110deg, transparent, #000 44%, transparent 95%);
    mask-image: linear-gradient(110deg, transparent, #000 44%, transparent 95%);
    pointer-events: none;
  }
  .smd-hero-grid { position: relative; z-index: 1; display: grid; grid-template-columns: minmax(0,1.08fr) minmax(410px,.92fr); gap: 64px; align-items: center; }
  .smd-hero-copy { max-width: 700px; }
  .smd-hero-lead { margin-bottom: 18px !important; color: #293954 !important; font-size: 20px !important; line-height: 1.58 !important; }
  .smd-hero-body { max-width: 690px; margin-bottom: 0; font-size: 17px !important; }
  .smd-hero-art { width: 100%; max-width: 555px; justify-self: end; }
  .smd-hero-art svg { display: block; width: 100%; height: auto; }

  .smd-trust-band { border-top: 1px solid var(--smd-line); border-bottom: 1px solid var(--smd-line); background: #FFFFFF; }
  .smd-trust-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 28px; padding-block: 25px; align-items: start; }
  .smd-trust-item { display: flex; align-items: flex-start; gap: 10px; color: #34435F; font-size: 16px; font-weight: 600; line-height: 1.45; }
  .smd-trust-item svg { flex: 0 0 auto; margin-top: 2px; color: var(--smd-brand-dark); }

  .smd-authority-section { background: white; }
  .smd-authority-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(420px,.95fr); gap: 78px; align-items: start; }
  .smd-authority-copy { max-width: 690px; }
  .smd-authority-copy > p:last-child { margin-bottom: 0; }
  .smd-principles { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); border-top: 1px solid var(--smd-line); border-left: 1px solid var(--smd-line); }
  .smd-principle { min-height: 210px; padding: 26px; border-right: 1px solid var(--smd-line); border-bottom: 1px solid var(--smd-line); }
  .smd-principle h3 { font-size: 20px; }
  .smd-principle p { margin-bottom: 0; }
  .smd-authority-callout { grid-column: 1 / -1; padding: 28px 30px; border-right: 1px solid var(--smd-line); border-bottom: 1px solid var(--smd-line); background: var(--smd-brand-pale); }
  .smd-authority-callout span, .smd-authority-callout strong { display: block; font-family: "Inter Tight", Inter, sans-serif; color: var(--smd-navy); font-weight: 500; line-height: 1.25; }
  .smd-authority-callout span { font-size: 21px; }
  .smd-authority-callout strong { margin-top: 3px; font-size: 28px; }
  .smd-authority-callout p { margin: 8px 0 0; color: var(--smd-brand-dark); font-weight: 700; }

  .smd-content-section { background: var(--smd-soft); }
  .smd-content-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 70px; }
  .smd-content-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 34px 0; border-top: 1px solid #D2DBEB; }
  .smd-content-icon { display: grid; place-items: center; width: 44px; height: 44px; border: 1px solid #D9E2F3; border-radius: 13px; color: var(--smd-brand-dark); background: white; }
  .smd-content-main h3 { font-size: 23px; }
  .smd-content-main > p { margin-bottom: 17px; }
  .smd-content-main ul { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 7px 20px; margin-bottom: 17px; }
  .smd-content-main li { position: relative; padding-left: 16px; }
  .smd-content-main li::before { content: ""; position: absolute; left: 0; top: .74em; width: 5px; height: 5px; border-radius: 50%; background: var(--smd-brand-mid); }
  .smd-content-item-featured { grid-column: 1 / -1; margin-top: 4px; padding: 30px 28px; border: 1px solid #D2DBEB; border-radius: 20px; background: white; }
  .smd-content-item-featured .smd-content-main { display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); column-gap: 42px; align-items: start; }
  .smd-content-item-featured .smd-content-main h3,
  .smd-content-item-featured .smd-content-main > p { grid-column: 1; }
  .smd-content-item-featured .smd-content-main ul { grid-column: 2; grid-row: 1 / span 3; margin: 0; padding-left: 30px; border-left: 1px solid var(--smd-line-soft); }

  .smd-lifecycle-section { position: relative; background: white; }
  .smd-lifecycle-head { max-width: 870px; }
  .smd-lifecycle-track { position: relative; display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 0; margin-top: 10px; }
  .smd-lifecycle-track::before { content: ""; position: absolute; left: 8%; right: 8%; top: 31px; height: 1px; background: #C7D3EB; }
  .smd-lifecycle-stage { position: relative; padding: 0 25px 8px; }
  .smd-stage-number { position: relative; z-index: 2; display: grid; place-items: center; width: 62px; height: 62px; margin: 0 0 27px; border: 1px solid #BFCDEA; border-radius: 50%; color: var(--smd-brand-dark); background: white; font-size: 14px; font-weight: 700; }
  .smd-lifecycle-stage h3 { font-size: 23px; }
  .smd-lifecycle-stage > p { min-height: 112px; }
  .smd-lifecycle-stage ul { display: grid; gap: 7px; margin: 20px 0 21px; padding-top: 19px; border-top: 1px solid var(--smd-line-soft); }
  .smd-lifecycle-stage li { position: relative; padding-left: 15px; }
  .smd-lifecycle-stage li::before { content: ""; position: absolute; left: 0; top: .75em; width: 5px; height: 5px; border-radius: 50%; background: #839ADF; }
  .smd-lifecycle-stage > strong { display: block; color: var(--smd-navy); font-size: 16px; line-height: 1.55; }

  .smd-focus-section { background: linear-gradient(180deg, #F7F9FD 0%, #F3F6FD 100%); }
  .smd-focus-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 28px; }
  .smd-focus-item { display: flex; flex-direction: column; padding: 32px; border: 1px solid #D9E2F2; border-radius: 24px; background: white; }
  .smd-focus-item h3 { font-size: 25px; }
  .smd-focus-item > p:not(.smd-item-label) { margin-bottom: 20px; }
  .smd-focus-item ul { display: grid; gap: 8px; margin-bottom: 24px; padding: 19px 0 0; border-top: 1px solid var(--smd-line-soft); }
  .smd-focus-item li { position: relative; padding-left: 18px; }
  .smd-focus-item li::before { content: ""; position: absolute; left: 0; top: .62em; width: 8px; height: 8px; border: 2px solid var(--smd-brand-mid); border-radius: 50%; }
  .smd-focus-item .smd-editorial-link { margin-top: auto; }
  .smd-focus-bridge { display: grid; grid-template-columns: minmax(0,.55fr) minmax(0,1.45fr); gap: 40px; align-items: center; margin-top: 34px; padding: 28px 32px; border-left: 2px solid var(--smd-brand); background: #EEF3FF; }
  .smd-focus-bridge span { color: var(--smd-brand-dark); font-size: 13px; font-weight: 700; letter-spacing: .08em; text-transform: uppercase; }
  .smd-focus-bridge strong { color: var(--smd-navy); font-family: "Inter Tight", Inter, sans-serif; font-size: 24px; font-weight: 500; line-height: 1.4; }

  .smd-terminology-section { background: white; }
  .smd-terminology-grid { display: grid; grid-template-columns: minmax(0,1fr) minmax(440px,.95fr); gap: 70px; align-items: center; }
  .smd-terminology-copy { max-width: 690px; }
  .smd-terminology-flow { display: flex; flex-wrap: wrap; gap: 7px 10px; align-items: center; margin-top: 28px; padding-top: 23px; border-top: 1px solid var(--smd-line); }
  .smd-terminology-flow span { color: #30415D; font-size: 14px; font-weight: 700; }
  .smd-terminology-flow i { color: var(--smd-brand-mid); font-style: normal; }
  .smd-terminology-art { display: grid; place-items: center; min-height: 395px; border: 1px solid #DCE5F4; border-radius: 28px; background: linear-gradient(145deg, #F8FAFF, #F1F5FD); overflow: hidden; }
  .smd-terminology-art svg { width: 100%; height: auto; }
  .smd-controls-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 30px; margin-top: 66px; padding-top: 34px; border-top: 1px solid var(--smd-line); }
  .smd-control-icon { display: grid; place-items: center; width: 42px; height: 42px; margin-bottom: 18px; border-radius: 12px; color: var(--smd-brand-dark); background: var(--smd-brand-soft); }
  .smd-control-item h3 { font-size: 20px; }
  .smd-control-item p { margin-bottom: 0; }

  .smd-quality-section { background: var(--smd-soft); }
  .smd-quality-intro { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 82px; align-items: end; margin-bottom: 55px; }
  .smd-quality-intro > div:last-child p:last-child { margin-bottom: 0; }
  .smd-quality-steps { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 70px; border-top: 1px solid #CCD6E8; }
  .smd-quality-step { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 18px; padding: 28px 0 29px; border-bottom: 1px solid #CCD6E8; }
  .smd-quality-step > span { color: var(--smd-brand-dark); font-size: 13px; font-weight: 700; letter-spacing: .08em; }
  .smd-quality-step h3 { font-size: 20px; }
  .smd-quality-step p { margin-bottom: 0; }
  .smd-quality-proof { display: grid; grid-template-columns: minmax(0,.8fr) minmax(0,1.2fr); gap: 64px; margin-top: 52px; padding: 36px 38px; border: 1px solid #D4DFF2; border-radius: 26px; background: white; box-shadow: var(--smd-shadow); }
  .smd-quality-proof-copy h3 { font-size: 27px; }
  .smd-quality-proof-copy p { margin-bottom: 20px; }
  .smd-quality-proof-list { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 15px 28px; align-content: center; }
  .smd-quality-proof-list span { display: flex; align-items: flex-start; gap: 9px; color: #34435F; font-size: 16px; font-weight: 600; line-height: 1.5; }
  .smd-quality-proof-list svg { flex: 0 0 auto; margin-top: 1px; color: var(--smd-brand-dark); }

  .smd-ai-section { position: relative; overflow: hidden; background: radial-gradient(circle at 82% 14%, rgba(111,139,225,.28), transparent 24%), linear-gradient(118deg, #17264D 0%, #253F8F 58%, #2E4F9D 100%); }
  .smd-ai-section::after { content: ""; position: absolute; right: 0; top: 0; width: 30%; height: 100%; opacity: .24; background-image: radial-gradient(circle, rgba(255,255,255,.4) 1px, transparent 1.1px); background-size: 13px 13px; -webkit-mask-image: linear-gradient(90deg, transparent, #000); mask-image: linear-gradient(90deg, transparent, #000); }
  .smd-ai-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 74px; align-items: start; }
  .smd-ai-copy h2, .smd-ai-copy p { color: white; }
  .smd-ai-copy > p:not(.smd-eyebrow) { color: #E2E8F8; }
  .smd-ai-lead { color: white !important; font-size: 18px !important; }
  .smd-ai-statement { margin: 28px 0 25px; padding: 22px 0 0; border-top: 1px solid rgba(255,255,255,.18); }
  .smd-ai-statement strong, .smd-ai-statement span { display: block; }
  .smd-ai-statement strong { margin-bottom: 5px; color: white; font-family: "Inter Tight", Inter, sans-serif; font-size: 25px; font-weight: 500; }
  .smd-ai-statement span { color: #C8D6FF; font-size: 16px; font-weight: 600; }
  .smd-ai-principles { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 0; border-top: 1px solid rgba(255,255,255,.18); border-left: 1px solid rgba(255,255,255,.18); }
  .smd-ai-principles article { padding: 26px 25px; border-right: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); background: rgba(255,255,255,.035); }
  .smd-ai-principles article > div { display: grid; place-items: center; width: 40px; height: 40px; margin-bottom: 17px; border-radius: 12px; color: #DCE6FF; background: rgba(255,255,255,.08); }
  .smd-ai-principles h3 { color: white; font-size: 20px; }
  .smd-ai-principles p { margin-bottom: 0; color: #D8E0F3; }
  .smd-ai-validation { grid-column: 1 / -1; display: grid; grid-template-columns: 40px minmax(0,1fr); gap: 14px; padding: 22px 24px; border-right: 1px solid rgba(255,255,255,.18); border-bottom: 1px solid rgba(255,255,255,.18); color: white; background: rgba(255,255,255,.075); }
  .smd-ai-validation > svg { margin-top: 1px; color: #C8D6FF; }
  .smd-ai-validation strong, .smd-ai-validation span { display: block; }
  .smd-ai-validation strong { margin-bottom: 4px; font-size: 16px; }
  .smd-ai-validation span { color: #E1E8F7; font-size: 16px; line-height: 1.6; }

  .smd-device-types-section { background: white; }
  .smd-device-types-grid { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); border-top: 1px solid var(--smd-line); border-left: 1px solid var(--smd-line); }
  .smd-device-type { min-height: 290px; padding: 28px; border-right: 1px solid var(--smd-line); border-bottom: 1px solid var(--smd-line); }
  .smd-device-type > div { display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 23px; color: var(--smd-brand-dark); border-radius: 12px; background: var(--smd-brand-soft); }
  .smd-device-type h3 { font-size: 21px; }
  .smd-device-type p { margin-bottom: 0; }
  .smd-device-types-close { max-width: 900px; margin: 35px auto 0; text-align: center; font-size: 17px !important; }
  .smd-device-types-close strong { color: var(--smd-navy); }

  .smd-global-section { background: var(--smd-brand-pale); }
  .smd-global-grid { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 84px; align-items: start; }
  .smd-global-intro { position: sticky; top: 28px; }
  .smd-global-intro .smd-editorial-link { margin-top: 10px; }
  .smd-global-list { border-top: 1px solid #C9D5EB; }
  .smd-global-list article { display: grid; grid-template-columns: minmax(180px,.36fr) minmax(0,.64fr); gap: 38px; padding: 25px 0 26px; border-bottom: 1px solid #C9D5EB; }
  .smd-global-list h3 { margin-bottom: 0; font-size: 20px; }
  .smd-global-list p { margin-bottom: 0; }
  .smd-global-callout { margin-top: 27px; padding: 24px 26px; border-left: 2px solid var(--smd-brand); color: var(--smd-navy); background: white; font-family: "Inter Tight", Inter, sans-serif; font-size: 21px; font-weight: 500; line-height: 1.45; }

  .smd-proof-section { background: white; }
  .smd-case-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 30px; }
  .smd-case { display: flex; flex-direction: column; min-height: 530px; padding: 34px; border: 1px solid #D9E2F2; border-radius: 26px; background: #FCFDFF; }
  .smd-case-featured { background: linear-gradient(145deg, #F5F7FF 0%, #EDF2FF 100%); border-color: #C7D4EE; }
  .smd-case-top { display: flex; justify-content: space-between; gap: 20px; align-items: flex-start; margin-bottom: 26px; }
  .smd-case-top span { color: var(--smd-brand-dark); font-size: 11px; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; }
  .smd-case-top strong { color: var(--smd-navy); font-size: 14px; white-space: nowrap; }
  .smd-case h3 { max-width: 540px; font-size: 27px; }
  .smd-case-tags { display: flex; flex-wrap: wrap; gap: 8px; margin: 8px 0 24px; }
  .smd-case-tags span { padding: 7px 10px; border: 1px solid #CCD8EF; border-radius: 999px; color: #3A4A67; background: white; font-size: 12px; font-weight: 600; }
  .smd-case-outcome { padding-top: 18px; border-top: 1px solid #D3DDF0; color: #293954 !important; font-weight: 600; }
  .smd-case .smd-editorial-link { margin-top: auto; }

  .smd-why-section { background: var(--smd-soft); }
  .smd-why-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); column-gap: 58px; }
  .smd-why-grid article { padding: 28px 0 30px; border-top: 1px solid #CCD6E8; }
  .smd-why-grid h3 { font-size: 21px; }
  .smd-why-grid p { margin-bottom: 0; }

  .smd-related-section { background: white; }
  .smd-related-grid { display: grid; grid-template-columns: minmax(0,.66fr) minmax(0,1.34fr); gap: 84px; align-items: start; }
  .smd-related-intro { max-width: 440px; }
  .smd-related-list { border-top: 1px solid #CCD6E8; }
  .smd-related-list a { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 28px; align-items: center; padding: 25px 0; border-bottom: 1px solid #CCD6E8; }
  .smd-related-list h3 { margin-bottom: 6px; font-size: 20px; transition: color .18s ease; }
  .smd-related-list p { margin-bottom: 0; }
  .smd-related-list a > svg { color: var(--smd-brand-dark); }
  .smd-related-list a:hover h3 { color: var(--smd-brand-dark); }

  .smd-faq-section { background: var(--smd-soft); }
  .smd-faq-grid { display: grid; grid-template-columns: minmax(0,.7fr) minmax(0,1.3fr); gap: 80px; align-items: start; }
  .smd-faq-intro { position: sticky; top: 28px; max-width: 430px; }
  .smd-faq-intro > p:not(.smd-eyebrow) { margin-bottom: 24px; font-size: 17px; }
  .smd-faq-list { border-top: 1px solid #CCD6E8; }
  .smd-faq-item { border-bottom: 1px solid #CCD6E8; }
  .smd-faq-item summary { list-style: none; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; min-height: 80px; padding: 22px 0; cursor: pointer; color: var(--smd-navy); font-size: 18px; font-weight: 650; line-height: 1.4; }
  .smd-faq-item summary::-webkit-details-marker { display: none; }
  .smd-faq-plus { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--smd-brand-dark); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
  .smd-faq-item[open] .smd-faq-plus { transform: rotate(45deg); }
  .smd-faq-answer { padding: 0 46px 27px 0; }
  .smd-faq-answer p { margin-bottom: 0; }

  .smd-final-cta { position: relative; overflow: hidden; padding: 82px 0; background: radial-gradient(circle at 80% 20%, rgba(255,255,255,.12), transparent 22%), linear-gradient(108deg, #17264D 0%, #253F8F 58%, #2E4F9D 100%); }
  .smd-final-cta::after { content: ""; position: absolute; right: 0; top: 0; width: 30%; height: 100%; opacity: .38; background-image: radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1.2px); background-size: 13px 13px; -webkit-mask-image: linear-gradient(90deg, transparent, #000); mask-image: linear-gradient(90deg, transparent, #000); }
  .smd-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.2fr) auto; gap: 66px; align-items: center; }
  .smd-final-cta h2 { max-width: 760px; margin-bottom: 16px; color: white; }
  .smd-final-cta p { max-width: 800px; color: #E4EAF8; font-size: 17px; }
  .smd-final-proof { margin-bottom: 0 !important; color: #C8D6FF !important; font-size: 16px !important; font-weight: 600; line-height: 1.65 !important; }
  .smd-final-actions { display: grid; gap: 12px; min-width: 235px; }
  .smd-final-actions .smd-button { width: 100%; }

  @media (max-width: 1120px) {
    .smd-shell { padding-inline: 40px; }
    .smd-hero-grid { grid-template-columns: minmax(0,1fr) minmax(360px,.9fr); gap: 42px; }
    .smd-authority-grid { grid-template-columns: minmax(0,1fr) minmax(380px,.92fr); gap: 50px; }
    .smd-content-grid { column-gap: 46px; }
    .smd-lifecycle-stage { padding-inline: 18px; }
    .smd-focus-item { padding: 27px; }
    .smd-terminology-grid { grid-template-columns: minmax(0,1fr) minmax(390px,.9fr); gap: 46px; }
    .smd-controls-grid { gap: 22px; }
    .smd-global-grid, .smd-related-grid { gap: 56px; }
  }

  @media (max-width: 900px) {
    .smd-shell { padding-inline: 30px; }
    .smd-section { padding: 80px 0; }
    .smd-hero { padding: 72px 0 78px; }
    .smd-hero-grid { grid-template-columns: 1fr; gap: 38px; }
    .smd-hero-copy { max-width: 760px; }
    .smd-hero-art { max-width: 520px; justify-self: center; }
    .smd-trust-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px 30px; }
    .smd-authority-grid { grid-template-columns: 1fr; gap: 42px; }
    .smd-authority-copy { max-width: 760px; }
    .smd-content-grid { grid-template-columns: 1fr; }
    .smd-content-item { padding-block: 30px; }
    .smd-content-item-featured { grid-column: auto; padding: 28px 26px; }
    .smd-content-item-featured .smd-content-main { grid-template-columns: 1fr; }
    .smd-content-item-featured .smd-content-main ul { grid-column: 1; grid-row: auto; padding: 18px 0 0; border-top: 1px solid var(--smd-line-soft); border-left: 0; }
    .smd-lifecycle-track { grid-template-columns: repeat(2, minmax(0,1fr)); row-gap: 46px; }
    .smd-lifecycle-track::before { display: none; }
    .smd-lifecycle-stage { padding-inline: 16px; }
    .smd-lifecycle-stage > p { min-height: auto; }
    .smd-focus-grid { grid-template-columns: 1fr; }
    .smd-focus-item { min-height: 0; }
    .smd-focus-bridge { grid-template-columns: 1fr; gap: 10px; }
    .smd-terminology-grid { grid-template-columns: 1fr; gap: 42px; }
    .smd-terminology-copy { max-width: 760px; }
    .smd-terminology-art { min-height: 340px; }
    .smd-controls-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .smd-quality-intro { grid-template-columns: 1fr; gap: 10px; }
    .smd-quality-steps { grid-template-columns: 1fr; }
    .smd-quality-proof { grid-template-columns: 1fr; gap: 30px; }
    .smd-ai-grid { grid-template-columns: 1fr; gap: 42px; }
    .smd-device-types-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
    .smd-global-grid { grid-template-columns: 1fr; gap: 44px; }
    .smd-global-intro { position: static; max-width: 760px; }
    .smd-case-grid { grid-template-columns: 1fr; }
    .smd-case { min-height: 0; }
    .smd-why-grid { grid-template-columns: repeat(2, minmax(0,1fr)); column-gap: 40px; }
    .smd-related-grid { grid-template-columns: 1fr; gap: 40px; }
    .smd-related-intro { max-width: 680px; }
    .smd-faq-grid { grid-template-columns: 1fr; gap: 42px; }
    .smd-faq-intro { position: static; max-width: 700px; }
    .smd-final-grid { grid-template-columns: 1fr; gap: 30px; }
    .smd-final-actions { grid-template-columns: repeat(2, minmax(0,1fr)); max-width: 520px; min-width: 0; }
  }

  @media (max-width: 640px) {
    .smd-shell { padding-inline: 20px; }
    .smd-section { padding: 68px 0; }
    .smd-page h1 { font-size: 42px; }
    .smd-page h2 { font-size: 32px; }
    .smd-page h3 { font-size: 21px; }
    .smd-hero { padding: 58px 0 64px; }
    .smd-hero-lead { font-size: 18px !important; }
    .smd-hero-body { font-size: 16px !important; }
    .smd-button-row { display: grid; grid-template-columns: 1fr; }
    .smd-button { width: 100%; }
    .smd-trust-grid { grid-template-columns: 1fr; gap: 13px; }
    .smd-section-head { margin-bottom: 42px; }
    .smd-section-head-centered { text-align: center; }
    .smd-section-head-centered > p { text-align: left; }
    .smd-content-section .smd-section-head-centered { text-align: left; }
    .smd-device-types-section .smd-section-head-centered h2,
    .smd-proof-section .smd-section-head-centered h2,
    .smd-why-section .smd-section-head-centered h2 { text-align: center; }

    .smd-authority-copy .smd-eyebrow,
    .smd-authority-copy h2,
    .smd-terminology-copy .smd-eyebrow,
    .smd-terminology-copy h2,
    .smd-quality-intro h2,
    .smd-global-intro .smd-eyebrow,
    .smd-global-intro h2,
    .smd-related-intro .smd-eyebrow,
    .smd-related-intro h2,
    .smd-faq-intro h2 {
      text-align: left;
    }

    .smd-lifecycle-head { text-align: left; }
    .smd-lifecycle-head > p { text-align: left; }

    .smd-principles { grid-template-columns: 1fr; }
    .smd-authority-callout { grid-column: auto; }
    .smd-authority-callout strong { font-size: 24px; }
    .smd-content-item { grid-template-columns: 42px minmax(0,1fr); gap: 14px; }
    .smd-content-icon { width: 40px; height: 40px; }
    .smd-content-main ul { grid-template-columns: 1fr; }
    .smd-content-item-featured { padding: 23px 20px; }
    .smd-lifecycle-track { grid-template-columns: 1fr; gap: 0; }
    .smd-lifecycle-stage { display: grid; grid-template-columns: 50px minmax(0,1fr); column-gap: 16px; padding: 0 0 34px; }
    .smd-stage-number { grid-row: 1 / span 5; width: 46px; height: 46px; margin: 0; }
    .smd-lifecycle-stage h3, .smd-lifecycle-stage > p, .smd-lifecycle-stage ul, .smd-lifecycle-stage > strong { grid-column: 2; }
    .smd-lifecycle-stage ul { margin-top: 14px; }
    .smd-focus-item { padding: 24px 22px; border-radius: 20px; }
    .smd-focus-bridge { padding: 23px 21px; }
    .smd-focus-bridge strong { font-size: 21px; }
    .smd-terminology-art { min-height: 270px; border-radius: 22px; }
    .smd-controls-grid { grid-template-columns: 1fr; gap: 0; margin-top: 46px; }
    .smd-control-item { display: grid; grid-template-columns: 42px minmax(0,1fr); column-gap: 14px; padding: 24px 0; border-bottom: 1px solid var(--smd-line); }
    .smd-control-icon { grid-row: 1 / span 2; width: 38px; height: 38px; margin: 0; }
    .smd-control-item h3, .smd-control-item p { grid-column: 2; }
    .smd-quality-step { grid-template-columns: 40px minmax(0,1fr); gap: 14px; }
    .smd-quality-proof { padding: 26px 22px; border-radius: 21px; }
    .smd-quality-proof-list { grid-template-columns: 1fr; }
    .smd-ai-principles { grid-template-columns: 1fr; }
    .smd-ai-validation { grid-column: auto; }
    .smd-device-types-grid { grid-template-columns: 1fr; }
    .smd-device-type { min-height: 0; }
    .smd-device-types-close { text-align: left; }
    .smd-global-list article { grid-template-columns: 1fr; gap: 5px; padding: 23px 0; }
    .smd-case { padding: 26px 22px; border-radius: 21px; }
    .smd-case-top { display: grid; gap: 7px; }
    .smd-case-top strong { white-space: normal; }
    .smd-why-grid { grid-template-columns: 1fr; }
    .smd-related-list a { gap: 16px; }
    .smd-faq-item summary { min-height: 72px; font-size: 16px; }
    .smd-faq-answer { padding-right: 0; }
    .smd-final-cta { padding: 66px 0; }
    .smd-final-cta h2 { text-align: center; }
    .smd-final-actions { grid-template-columns: 1fr; }
  }

  @media (max-width: 360px) {
    .smd-page h1 { font-size: 38px; }
    .smd-page h2 { font-size: 30px; }
    .smd-hero { padding-top: 54px; }
    .smd-authority-callout strong { font-size: 22px; }
    .smd-lifecycle-stage { grid-template-columns: 44px minmax(0,1fr); column-gap: 12px; }
    .smd-stage-number { width: 42px; height: 42px; }
    .smd-content-item { grid-template-columns: 38px minmax(0,1fr); column-gap: 12px; }
    .smd-content-icon { width: 36px; height: 36px; }
    .smd-focus-item { padding-inline: 19px; }
    .smd-terminology-flow { gap: 5px 7px; }
    .smd-button { padding-inline: 20px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .smd-page *, .smd-page *::before, .smd-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
