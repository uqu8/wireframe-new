/* Sesen Digital Health Localization wireframe v4 — self-contained; no external image/SVG imports. */
const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";
const MEDICAL_DEVICE_URL = "https://www.sesen.com/medical-device-translation-services/";
const CLINICAL_SOFTWARE_URL = "https://www.sesen.com/clinical-medical-software-localization-services/";
const LINGUISTIC_VALIDATION_URL = "https://www.sesen.com/linguistic-validation-services/";
const HEALTHCARE_URL = "https://www.sesen.com/healthcare-hospital-translation-services/";
const HYBRID_URL = "https://www.sesen.com/hybrid-translation-life-sciences/";
const AI_QA_URL = "https://www.sesen.com/ai-validation-qa-life-sciences/";
const QUALITY_URL = "https://www.sesen.com/quality-compliance-security/";

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
    mobile: (
      <>
        <rect x="6.5" y="2.5" width="11" height="19" rx="2.2" />
        <path d="M10 5h4" />
        <path d="M11 18.5h2" />
      </>
    ),
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8" />
        <path d="M12 16v4" />
      </>
    ),
    heart: (
      <path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" />
    ),
    device: (
      <>
        <rect x="4" y="5" width="16" height="14" rx="3" />
        <path d="M8 12h2l1.4-3 2.2 6 1.4-3H17" />
      </>
    ),
    video: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="m16 10 5-3v10l-5-3" />
      </>
    ),
    activity: (
      <>
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </>
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="2" />
        <path d="M9 4V2h6v2" />
        <path d="M8.5 9h7" />
        <path d="M8.5 13h7" />
        <path d="M8.5 17h4" />
      </>
    ),
    code: (
      <>
        <path d="m8 8-4 4 4 4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 5-4 14" />
      </>
    ),
    database: (
      <>
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
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
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z" />
        <path d="m9 12 2 2 4-5" />
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
    lock: (
      <>
        <rect x="4" y="10" width="16" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    language: (
      <>
        <path d="M4 5h7" />
        <path d="M7.5 3v2" />
        <path d="M5 9c1.7 2.1 4.3 3.8 7 4.6" />
        <path d="M10 5c-.7 3.5-2.4 6.1-5 8" />
        <path d="m14 19 3.5-9 3.5 9" />
        <path d="M15.4 16h4.2" />
      </>
    ),
    accessibility: (
      <>
        <circle cx="12" cy="4" r="2" />
        <path d="M5 8h14" />
        <path d="M12 6v6" />
        <path d="m8 21 4-9 4 9" />
        <path d="M7 13 4 19" />
        <path d="m17 13 3 6" />
      </>
    ),
    layers: (
      <>
        <path d="m12 2 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5" />
        <path d="m3 17 9 5 9-5" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    refresh: (
      <>
        <path d="M20 7v5h-5" />
        <path d="M4 17v-5h5" />
        <path d="M6.1 8A7 7 0 0 1 18 6l2 1" />
        <path d="M17.9 16A7 7 0 0 1 6 18l-2-1" />
      </>
    ),
    file: (
      <>
        <path d="M6 3h8l4 4v14H6z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6" />
        <path d="M9 17h5" />
      </>
    ),
    spark: (
      <>
        <path d="m12 2 1.4 4.6L18 8l-4.6 1.4L12 14l-1.4-4.6L6 8l4.6-1.4L12 2Z" />
        <path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z" />
      </>
    ),
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`sdh-button${secondary ? " sdh-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`sdh-editorial-link${light ? " sdh-editorial-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function HeroArt() {
  return (
    <div className="sdh-hero-art" aria-hidden="true">
      <svg viewBox="0 0 650 540" fill="none">
        <defs>
          <linearGradient id="sdhHeroSurface" x1="78" y1="42" x2="574" y2="498" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F8FAFF" />
            <stop offset="1" stopColor="#EEF3FF" />
          </linearGradient>
          <linearGradient id="sdhHeroBlue" x1="124" y1="93" x2="524" y2="455" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3659BB" />
            <stop offset="1" stopColor="#6F8BE1" />
          </linearGradient>
          <filter id="sdhHeroShadow" x="-20%" y="-20%" width="140%" height="150%">
            <feDropShadow dx="0" dy="18" stdDeviation="17" floodColor="#253F8F" floodOpacity="0.12" />
          </filter>
        </defs>

        <path d="M91 99c47-60 130-88 216-70 75 16 117 67 190 71 61 4 112 44 120 105 7 55-24 97-50 139-29 47-29 101-76 132-49 33-113 28-165 20-63-10-127 5-180-34-55-40-69-111-75-174-6-67-23-132 20-189Z" fill="url(#sdhHeroSurface)" />
        <path d="M179 172 272 219" stroke="#B8C7EB" strokeWidth="2" strokeDasharray="5 7" />
        <path d="m391 221 82-60" stroke="#B8C7EB" strokeWidth="2" strokeDasharray="5 7" />
        <path d="m195 362 90-62" stroke="#B8C7EB" strokeWidth="2" strokeDasharray="5 7" />
        <path d="m390 307 89 65" stroke="#B8C7EB" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M308 260h39" stroke="#91A6DB" strokeWidth="2" strokeDasharray="4 6" />

        <g filter="url(#sdhHeroShadow)">
          <rect x="244" y="178" width="183" height="145" rx="24" fill="white" stroke="#C7D4F0" />
          <rect x="262" y="198" width="147" height="14" rx="7" fill="#EAF0FF" />
          <circle cx="276" cy="205" r="4" fill="#4B6FD8" />
          <path d="M291 205h76" stroke="#AAB8D8" strokeWidth="2" strokeLinecap="round" />
          <path d="M264 235h61" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <path d="M264 252h98" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <path d="M264 269h82" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <rect x="264" y="287" width="62" height="17" rx="8.5" fill="#4B6FD8" />
          <path d="M340 295.5h44" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g filter="url(#sdhHeroShadow)">
          <rect x="111" y="117" width="110" height="211" rx="24" fill="white" stroke="#C7D4F0" />
          <rect x="121" y="134" width="90" height="154" rx="14" fill="#F7F9FD" />
          <circle cx="166" cy="305" r="7" stroke="#A9B6D3" strokeWidth="1.5" />
          <path d="M140 164c10-12 29-12 40 0" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M138 180h55" stroke="#CDD8EA" strokeWidth="2" strokeLinecap="round" />
          <path d="M138 197h41" stroke="#CDD8EA" strokeWidth="2" strokeLinecap="round" />
          <rect x="137" y="222" width="58" height="30" rx="10" fill="#EAF0FF" />
          <path d="M148 237h36" stroke="#4B6FD8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="187" cy="151" r="5" fill="#4B6FD8" />
        </g>

        <g filter="url(#sdhHeroShadow)">
          <rect x="438" y="107" width="139" height="108" rx="19" fill="white" stroke="#C7D4F0" />
          <rect x="453" y="124" width="109" height="15" rx="7.5" fill="#EAF0FF" />
          <path d="M454 163h24l8-20 15 40 10-20h35" stroke="url(#sdhHeroBlue)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M454 195h65" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g filter="url(#sdhHeroShadow)">
          <rect x="425" y="338" width="153" height="94" rx="20" fill="white" stroke="#C7D4F0" />
          <circle cx="462" cy="385" r="21" fill="#EAF0FF" />
          <path d="M452 386h8l5-12 8 24 5-12h9" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M499 367h54" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <path d="M499 384h43" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <path d="M499 401h35" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
        </g>

        <g filter="url(#sdhHeroShadow)">
          <rect x="100" y="353" width="128" height="82" rx="20" fill="white" stroke="#C7D4F0" />
          <path d="M118 379h28" stroke="#3659BB" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M118 395h58" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <path d="M118 411h43" stroke="#CAD5E9" strokeWidth="2" strokeLinecap="round" />
          <circle cx="195" cy="393" r="14" fill="#EAF0FF" />
          <path d="m188 393 5 5 9-11" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        <g transform="translate(224 78)">
          <rect width="125" height="40" rx="20" fill="white" stroke="#D0DBF1" />
          <path d="M18 20h25" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round" />
          <path d="m36 14 7 6-7 6" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <text x="55" y="25" fill="#3659BB" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">EN → DE</text>
        </g>

        <circle cx="80" cy="209" r="5" fill="#6F8BE1" opacity=".72" />
        <circle cx="600" cy="283" r="6" fill="#4B6FD8" opacity=".72" />
        <circle cx="360" cy="477" r="4" fill="#3659BB" opacity=".52" />
      </svg>
    </div>
  );
}

function ExperienceMap() {
  return (
    <div className="sdh-experience-map" aria-hidden="true">
      <svg viewBox="0 0 720 430" fill="none">
        <defs>
          <linearGradient id="sdhExpBlue" x1="120" y1="60" x2="608" y2="367" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3659BB" />
            <stop offset="1" stopColor="#6F8BE1" />
          </linearGradient>
        </defs>
        <circle cx="360" cy="214" r="88" fill="#F5F7FF" stroke="#C9D5EE" />
        <circle cx="360" cy="214" r="61" fill="white" stroke="#D7E0F2" />
        <rect x="319" y="177" width="82" height="73" rx="17" fill="#EAF0FF" />
        <path d="M342 194h36" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
        <path d="M337 211h47" stroke="#B8C6E4" strokeWidth="2" strokeLinecap="round" />
        <path d="M337 226h31" stroke="#B8C6E4" strokeWidth="2" strokeLinecap="round" />
        <rect x="337" y="235" width="27" height="7" rx="3.5" fill="#4B6FD8" />

        <path d="M277 175 190 124" stroke="#B7C6E7" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M443 175 531 123" stroke="#B7C6E7" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M269 251 174 314" stroke="#B7C6E7" strokeWidth="2" strokeDasharray="5 7" />
        <path d="m449 251 94 65" stroke="#B7C6E7" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M360 126V68" stroke="#B7C6E7" strokeWidth="2" strokeDasharray="5 7" />

        <g>
          <circle cx="164" cy="108" r="54" fill="white" stroke="#D5DFF2" />
          <circle cx="164" cy="96" r="14" stroke="#3659BB" strokeWidth="2" />
          <path d="M137 134c3-18 15-27 27-27s24 9 27 27" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <text x="164" y="163" fill="#17264D" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">PATIENT</text>
        </g>

        <g>
          <circle cx="555" cy="108" r="54" fill="white" stroke="#D5DFF2" />
          <circle cx="555" cy="94" r="12" stroke="#3659BB" strokeWidth="2" />
          <path d="M531 128c3-16 13-24 24-24s21 8 24 24" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <path d="M547 127h16" stroke="#6F8BE1" strokeWidth="2" />
          <text x="555" y="163" fill="#17264D" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">CLINICIAN</text>
        </g>

        <g>
          <circle cx="145" cy="334" r="54" fill="white" stroke="#D5DFF2" />
          <rect x="121" y="308" width="48" height="44" rx="10" stroke="#3659BB" strokeWidth="2" />
          <path d="M130 331h8l4-11 8 22 5-11h7" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="145" y="386" fill="#17264D" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">CONNECTED DEVICE</text>
        </g>

        <g>
          <circle cx="574" cy="334" r="54" fill="white" stroke="#D5DFF2" />
          <path d="M548 330h52" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" />
          <path d="M558 317h32" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
          <path d="M558 343h32" stroke="#6F8BE1" strokeWidth="2" strokeLinecap="round" />
          <text x="574" y="386" fill="#17264D" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="12" fontWeight="700">HEALTH PLATFORM</text>
        </g>

        <g>
          <circle cx="360" cy="51" r="39" fill="white" stroke="#D5DFF2" />
          <path d="M339 52h42" stroke="url(#sdhExpBlue)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="m372 44 9 8-9 8" stroke="#3659BB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <text x="360" y="21" fill="#17264D" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="700">MULTILINGUAL CONTENT</text>
        </g>
      </svg>
    </div>
  );
}

function ConnectedSystemsArt() {
  return (
    <div className="sdh-connected-art" aria-hidden="true">
      <div className="sdh-connected-node sdh-connected-node-patient">
        <span className="sdh-connected-icon"><Icon name="mobile" size={22} /></span>
        <strong>Patient App</strong>
        <small>Instructions · alerts · forms</small>
      </div>
      <div className="sdh-connected-line sdh-connected-line-a" />
      <div className="sdh-connected-node sdh-connected-node-platform">
        <span className="sdh-connected-icon"><Icon name="layers" size={22} /></span>
        <strong>Health Platform</strong>
        <small>Shared terminology · workflows</small>
      </div>
      <div className="sdh-connected-line sdh-connected-line-b" />
      <div className="sdh-connected-node sdh-connected-node-data">
        <span className="sdh-connected-icon"><Icon name="database" size={22} /></span>
        <strong>EHR / EMR</strong>
        <small>Human-facing data labels</small>
      </div>
      <div className="sdh-connected-line sdh-connected-line-c" />
      <div className="sdh-connected-node sdh-connected-node-clinician">
        <span className="sdh-connected-icon"><Icon name="monitor" size={22} /></span>
        <strong>Clinician Interface</strong>
        <small>Clinical language · alerts</small>
      </div>
    </div>
  );
}

const trustItems = [
  { icon: "heart", label: "Life Sciences Specialization" },
  { icon: "users", label: "Professional Medical Linguists" },
  { icon: "award", label: "ISO 17100 · ISO 9001 · ISO 13485" },
  { icon: "lock", label: "Secure, Controlled Workflows" },
  { icon: "globe", label: "150+ Languages" },
];

const productGroups = [
  {
    icon: "device",
    title: "SaMD & Medical Device Software",
    body: "Localization for Software as a Medical Device, device software functions, embedded interfaces, diagnostic and monitoring software, treatment-related software, and device companion applications.",
    detail: "UI strings · prompts · alerts · measurements · instructions · safety-related language",
    link: MEDICAL_DEVICE_URL,
    action: "Medical Device Translation Services",
  },
  {
    icon: "mobile",
    title: "Patient & mHealth Applications",
    body: "Create multilingual mobile experiences for patient onboarding, medication management, symptom tracking, appointments, health information, care guidance, reminders, notifications, and support.",
    detail: "Mobile context · locale behavior · dynamic strings · user comprehension",
  },
  {
    icon: "heart",
    title: "Digital Therapeutics",
    body: "Localize therapeutic software, treatment journeys, patient instructions, behavioral intervention content, adherence messaging, assessments, and progress information with consistent patient-facing terminology.",
    detail: "Treatment content · patient guidance · assessments · adherence messaging",
  },
  {
    icon: "video",
    title: "Telehealth & Virtual Care",
    body: "Support multilingual patient intake, registration, scheduling, consultation interfaces, messaging, questionnaires, care instructions, clinician workflows, follow-up, and help content.",
    detail: "Patient journey · clinician workflow · virtual-care communication",
  },
  {
    icon: "activity",
    title: "Remote Patient Monitoring & Connected Health",
    body: "Localize connected-device applications, wearables, device setup, measurement labels, monitoring dashboards, patient alerts, clinician notifications, and home-health experiences.",
    detail: "Devices · wearables · measurements · monitoring · notifications",
  },
  {
    icon: "clipboard",
    title: "Clinical Platforms, Patient Portals & Digital Trial Systems",
    body: "Support multilingual content across EHR/EMR-connected platforms, clinician dashboards, patient portals, clinical workflow software, eCOA/ePRO systems, and healthcare data interfaces.",
    detail: "Clinical software · patient portals · eCOA/ePRO · healthcare workflows",
    link: CLINICAL_SOFTWARE_URL,
    action: "Clinical & Medical Software Localization",
  },
];

const contentLayers = [
  {
    icon: "monitor",
    title: "Interface Content",
    items: ["Navigation and menus", "Buttons and labels", "Forms and dialogs", "Status and error messages"],
  },
  {
    icon: "heart",
    title: "Patient-Facing Content",
    items: ["Onboarding and instructions", "Health education", "Treatment and adherence messaging", "Reminders and notifications"],
  },
  {
    icon: "clipboard",
    title: "Clinical Content",
    items: ["Clinical terminology", "Assessments and measurements", "Patient-reported information", "Treatment-related content"],
  },
  {
    icon: "shield",
    title: "Device & Safety Content",
    items: ["Warnings and precautions", "Device prompts", "Setup instructions", "Safety-related language"],
  },
  {
    icon: "refresh",
    title: "Support & Release Content",
    items: ["Help centers and FAQs", "Training", "Release notes", "Product updates"],
  },
];

const workflowSteps = [
  {
    title: "Digital Health Product",
    text: "Start with the product, users, intended use, and the environments in which the content appears.",
    icon: "device",
  },
  {
    title: "Content & Context",
    text: "Prepare source files, screenshots, terminology, user roles, constraints, references, and existing language assets.",
    icon: "layers",
  },
  {
    title: "Translation & Localization",
    text: "Apply qualified life sciences linguists, terminology management, translation memory, and appropriate localization technology.",
    icon: "language",
  },
  {
    title: "Linguistic Validation",
    text: "Use formal validation where digital products include eCOA, ePRO, questionnaires, symptom scales, or other outcome instruments.",
    icon: "clipboard",
  },
  {
    title: "In-Context QA",
    text: "Review multilingual content inside screens and builds for context, truncation, variables, formatting, RTL behavior, and usability.",
    icon: "search",
  },
  {
    title: "Global Release",
    text: "Maintain approved language assets, versions, terminology, updates, and multilingual release continuity as the product evolves.",
    icon: "globe",
  },
];

const qaPillars = [
  {
    icon: "clipboard",
    title: "Linguistic Validation for eCOA & ePRO",
    body: "When digital products contain clinical outcome instruments, Sesen can support instrument-specific validation workflows, reconciliation, review, cognitive debriefing support where required, harmonization, documentation, and electronic-screen review.",
    link: LINGUISTIC_VALIDATION_URL,
    action: "Explore Linguistic Validation",
  },
  {
    icon: "search",
    title: "In-Context Linguistic Review",
    body: "Review localized mobile screens, desktop interfaces, device displays, screenshots, menus, alerts, forms, dynamic strings, and error states to identify issues that are difficult to see in isolated resource files.",
  },
  {
    icon: "accessibility",
    title: "Multilingual Accessibility",
    body: "Account for text expansion, RTL presentation, localized labels, screen-reader-facing language, navigation text, locale formatting, and other language considerations within digital experiences designed around current WCAG accessibility guidance.",
  },
];

const practiceScenarios = [
  {
    label: "PATIENT EXPERIENCE",
    title: "Global Patient App Launch",
    challenge: "A patient-facing application is expanding into multiple markets with onboarding, navigation, instructions, reminders, health information, and support content.",
    approach: "Professional localization · terminology governance · structured string processing · translation-memory reuse · in-context review · release coordination",
  },
  {
    label: "RISK-SENSITIVE SOFTWARE",
    title: "Multilingual SaMD Release",
    challenge: "A software product combines standard UI content with treatment-related instructions, measurements, alerts, and other clinically significant language.",
    approach: "Content classification · life sciences linguists · controlled terminology · risk-sensitive review · technical string QA · interface review",
  },
  {
    label: "DIGITAL CLINICAL OUTCOMES",
    title: "eCOA Digital Deployment",
    challenge: "A digital clinical platform needs multilingual patient-reported instruments presented accurately within electronic screens and workflows.",
    approach: "Instrument-specific linguistic validation · reconciliation · cognitive debriefing support where required · screen review · documentation",
  },
];

const relatedServices = [
  {
    title: "Clinical & Medical Software Localization",
    body: "Localization engineering, software strings, structured files, UI translation, software QA, and multilingual releases for clinical and medical applications.",
    href: CLINICAL_SOFTWARE_URL,
  },
  {
    title: "Linguistic Validation Services",
    body: "Structured validation for COAs, eCOAs, ePRO instruments, patient questionnaires, symptom scales, and other clinical outcome measures.",
    href: LINGUISTIC_VALIDATION_URL,
  },
  {
    title: "Medical Device Translation Services",
    body: "Translation for medical-device software, IFUs, labeling, technical documentation, regulatory content, training, and post-market communications.",
    href: MEDICAL_DEVICE_URL,
  },
  {
    title: "Healthcare & Hospital Translation Services",
    body: "Language support for healthcare organizations managing multilingual medical, patient-facing, operational, and healthcare communications.",
    href: HEALTHCARE_URL,
  },
];

const faqs = [
  {
    q: "What is digital health localization?",
    a: "Digital health localization adapts healthcare software, mobile applications, patient portals, clinician interfaces, connected-device experiences, and related content for users in different languages and markets. A complete program can include software-resource processing, terminology management, medical linguistic review, locale adaptation, in-context QA, accessibility considerations, linguistic validation where required, and ongoing multilingual release support.",
  },
  {
    q: "What is the difference between eHealth and mHealth localization?",
    a: "eHealth is a broad category covering digital technologies used to support healthcare delivery and health information, while mHealth focuses more specifically on healthcare experiences delivered through smartphones, tablets, wearables, and other mobile technologies. Sesen supports both within a broader digital health localization framework.",
  },
  {
    q: "What types of digital health products can Sesen localize?",
    a: "Sesen supports patient mobile apps, SaMD, medical device software, digital therapeutics, telehealth platforms, patient portals, remote patient monitoring systems, connected devices and wearables, clinician platforms, EHR/EMR-connected applications, eCOA/ePRO systems, and clinical workflow software. The localization workflow is tailored to the product, content, users, intended use, and market requirements.",
  },
  {
    q: "How is SaMD localization different from ordinary app localization?",
    a: "SaMD and other clinically significant medical software can contain language that affects treatment, diagnosis, monitoring, patient understanding, or safe product use. Some content may therefore require stronger subject-matter expertise, controlled terminology, deeper human review, additional QA, and more structured documentation than ordinary consumer application content.",
  },
  {
    q: "Can Sesen localize eCOA and ePRO applications?",
    a: "Yes. Sesen provides specialized eCOA and ePRO translation and linguistic-validation support for clinical outcome assessments, patient-reported outcome instruments, questionnaires, symptom scales, diaries, and related digital clinical content. When formal validation is required, the workflow can extend beyond conventional UI localization into reconciliation, back translation, cognitive debriefing support, harmonization, documentation, and electronic-screen review as appropriate.",
  },
  {
    q: "Does Sesen provide in-context testing for digital health applications?",
    a: "Sesen can provide linguistic and in-context QA using screenshots, localized builds, device screens, or other customer-provided product context. Review can identify truncation, incorrect context, layout issues, terminology inconsistencies, variables, date and number formatting, RTL presentation, navigation labels, alerts, and error messages. Technical product testing and software validation remain with the appropriate product or development teams unless specifically included in the agreed scope.",
  },
  {
    q: "How does Sesen manage frequent digital health software updates?",
    a: "Sesen can support continuous and incremental localization through translation memory, terminology governance, structured software resources, version-aware workflows, recurring QA, and multilingual release coordination. Previously approved language can be reused where appropriate while new or changed content moves through the required translation and review workflow.",
  },
  {
    q: "Can Sesen localize right-to-left languages such as Arabic?",
    a: "Yes. Localization for right-to-left languages can include linguistic translation plus in-context review of text direction, layout, navigation, interface components, numbers, mixed-direction strings, and screen presentation. Sesen can work with customer product and development teams to identify linguistic and visual issues within the localized experience.",
  },
  {
    q: "Does Sesen support healthcare systems that use HL7 and FHIR?",
    a: "Yes. Sesen can localize human-facing content within healthcare platforms and workflows that exchange information using standards such as HL7 and FHIR. This can include interfaces, labels, terminology, patient-facing information, clinician-facing language, messages, and related multilingual content. Sesen provides language localization rather than technical HL7/FHIR implementation or interoperability certification.",
  },
  {
    q: "How does Sesen use AI for digital health localization?",
    a: "Sesen uses AI selectively within controlled multilingual workflows. Depending on the content and project requirements, AI can assist with translation drafting, terminology analysis, repetitive content processing, and quality checks. Professional linguists and subject-matter reviewers remain central where medical meaning, patient comprehension, clinical significance, or product risk requires human judgment.",
  },
];

export default function SesenDigitalHealthLocalizationWireframeV4() {
  return (
    <main className="sdh-page">
      <style>{styles}</style>

      <section className="sdh-hero" aria-labelledby="sdh-page-title">
        <div className="sdh-shell sdh-hero-grid">
          <div className="sdh-hero-copy">
            <h1 id="sdh-page-title">Digital Health Localization Services for eHealth, mHealth, and SaMD</h1>
            <p className="sdh-hero-lead">
              Bring patient apps, clinician interfaces, medical software, connected devices, telehealth platforms,
              and other digital health products to global users with specialized life sciences localization.
            </p>
            <p className="sdh-hero-body">
              Sesen combines professional medical linguists, terminology governance, localization engineering,
              in-context quality assurance, and structured multilingual workflows to help digital health teams
              deliver clear, consistent experiences across languages, devices, and markets.
            </p>
            <div className="sdh-button-row">
              <Button href={QUOTE_URL}>REQUEST A QUOTE</Button>
              <Button href={CONTACT_SALES_URL} secondary>TALK WITH TEAM SESEN</Button>
            </div>
            <div className="sdh-hero-proof" aria-label="Digital health localization capabilities">
              <span><Icon name="check" size={15} strokeWidth={2} /> Patient &amp; clinician experiences</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> SaMD &amp; medical software</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> Validation &amp; in-context QA</span>
            </div>
          </div>
          <HeroArt />
        </div>
      </section>

      <section className="sdh-trust-band" aria-label="Sesen digital health localization trust signals">
        <div className="sdh-shell sdh-trust-grid">
          {trustItems.map((item) => (
            <div className="sdh-trust-item" key={item.label}>
              <Icon name={item.icon} size={20} strokeWidth={1.65} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="sdh-section sdh-experience-section" aria-labelledby="sdh-experience-title">
        <div className="sdh-shell sdh-experience-grid">
          <div className="sdh-experience-copy">
            <h2 id="sdh-experience-title">Localization Across the Digital Health Experience</h2>
            <p className="sdh-section-lead">
              Digital health increasingly connects patients, clinicians, software, medical devices, healthcare
              systems, and data through a single user experience. Every screen, instruction, alert, questionnaire,
              notification, and workflow can become part of that experience.
            </p>
            <p>
              Sesen helps digital health organizations localize the language layer across these connected
              touchpoints so clinical meaning, user comprehension, product terminology, interface behavior, and
              release continuity work coherently across markets.
            </p>
            <div className="sdh-experience-points">
              <div><strong>Patient experiences</strong><span>Apps, portals, therapeutics, symptom tracking, eCOA/ePRO, remote monitoring</span></div>
              <div><strong>Clinical experiences</strong><span>Dashboards, telehealth, decision support, EHR/EMR-connected workflows</span></div>
              <div><strong>Connected experiences</strong><span>Wearables, medical devices, companion apps, cloud-based health platforms</span></div>
            </div>
          </div>
          <ExperienceMap />
        </div>
      </section>

      <section className="sdh-section sdh-products-section" aria-labelledby="sdh-products-title">
        <div className="sdh-shell">
          <header className="sdh-section-head sdh-section-head-split">
            <div>
              <h2 id="sdh-products-title">Digital Health Products We Localize</h2>
            </div>
            <p>
              From standalone patient applications to regulated medical software and connected-care ecosystems,
              Sesen supports multilingual content across a broad range of healthcare technologies.
            </p>
          </header>

          <div className="sdh-products-grid">
            {productGroups.map((item) => (
              <article className="sdh-product-item" key={item.title}>
                <div className="sdh-icon-surface"><Icon name={item.icon} size={24} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <div className="sdh-product-detail">{item.detail}</div>
                {item.link && <EditorialLink href={item.link}>{item.action}</EditorialLink>}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-content-section" aria-labelledby="sdh-content-title">
        <div className="sdh-shell sdh-content-grid">
          <div className="sdh-content-copy">
            <p className="sdh-eyebrow">The Language Layer</p>
            <h2 id="sdh-content-title">Localize More Than the Interface</h2>
            <p className="sdh-section-lead">
              A digital health product is more than buttons and menus. The same application may contain patient
              instructions, clinical terminology, safety information, questionnaires, device messages,
              educational content, and support materials.
            </p>
            <p>
              Sesen helps organizations manage these interconnected content layers through a unified multilingual
              workflow, keeping approved terminology and recurring language aligned as the product evolves.
            </p>
            <div className="sdh-content-note">
              <Icon name="layers" size={22} />
              <span>One product can contain content with very different clinical significance, review needs, and localization risk.</span>
            </div>
          </div>

          <div className="sdh-layer-stack">
            {contentLayers.map((layer) => (
              <article className="sdh-layer-row" key={layer.title}>
                <div className="sdh-layer-icon"><Icon name={layer.icon} size={20} /></div>
                <div>
                  <h3>{layer.title}</h3>
                  <div className="sdh-layer-items">
                    {layer.items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="sdh-risk-wrap" aria-labelledby="sdh-risk-title">
            <header className="sdh-section-head sdh-risk-head">
              <p className="sdh-eyebrow">Risk-Aware Localization</p>
              <h2 id="sdh-risk-title">The Right Localization Workflow for Every Content Type</h2>
              <p>
                Not every string inside a digital health product carries the same clinical meaning or patient impact.
                Sesen can adapt translation, review, validation, and QA depth to the content's intended use, context,
                audience, risk, and applicable requirements.
              </p>
            </header>

            <div className="sdh-risk-continuum">
              <div className="sdh-risk-axis" aria-hidden="true"><span /></div>
              <article className="sdh-risk-level">
                <span className="sdh-risk-marker">01</span>
                <div>
                  <p className="sdh-risk-label">Experience Content</p>
                  <h3>Natural, Consistent Product Experiences</h3>
                  <p>Navigation, general interface labels, help content, settings, and nonclinical notifications.</p>
                  <strong>Focus: UX · product terminology · context · efficient multilingual delivery</strong>
                </div>
              </article>
              <article className="sdh-risk-level">
                <span className="sdh-risk-marker">02</span>
                <div>
                  <p className="sdh-risk-label">Patient-Facing Health Content</p>
                  <h3>Medical Accuracy and Patient Comprehension</h3>
                  <p>Patient instructions, health information, adherence messaging, treatment onboarding, and care guidance.</p>
                  <strong>Focus: medical expertise · readability · terminology control · expert review</strong>
                </div>
              </article>
              <article className="sdh-risk-level sdh-risk-level-high">
                <span className="sdh-risk-marker">03</span>
                <div>
                  <p className="sdh-risk-label">Clinical &amp; Risk-Sensitive Content</p>
                  <h3>Deeper Controls Where Clinical Meaning Matters</h3>
                  <p>Safety information, device prompts, treatment-related instructions, clinical assessments, and outcome instruments.</p>
                  <strong>Focus: subject-matter expertise · controlled terminology · validation · rigorous in-context QA</strong>
                </div>
              </article>
            </div>

            <div className="sdh-risk-footer">
              <span>Workflow depth can increase with content significance:</span>
              <div>Subject-Matter Expertise</div><Icon name="arrow" size={15} /><div>Human Review</div><Icon name="arrow" size={15} /><div>Terminology Governance</div><Icon name="arrow" size={15} /><div>Validation</div><Icon name="arrow" size={15} /><div>In-Context QA</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-workflow-section" aria-labelledby="sdh-workflow-title">
        <div className="sdh-shell">
          <header className="sdh-section-head sdh-workflow-head">
            <p className="sdh-eyebrow">End-to-End Workflow</p>
            <h2 id="sdh-workflow-title">A Structured Workflow From Digital Health Product to Global Release</h2>
            <p>
              Effective digital health localization begins before the first string is translated and continues
              beyond translation itself. Sesen coordinates the linguistic, technical, contextual, and quality
              steps needed to move multilingual digital experiences toward release.
            </p>
          </header>

          <div className="sdh-workflow-grid">
            {workflowSteps.map((step, index) => (
              <article className="sdh-workflow-step" key={step.title}>
                <div className="sdh-workflow-top">
                  <span className="sdh-step-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sdh-workflow-icon"><Icon name={step.icon} size={21} /></span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                {index < workflowSteps.length - 1 && <span className="sdh-workflow-arrow" aria-hidden="true"><Icon name="arrow" size={19} /></span>}
              </article>
            ))}
          </div>

          <div className="sdh-workflow-callout">
            <div>
              <strong>When digital products include validated clinical outcome instruments, the workflow can extend into formal linguistic validation and electronic-screen review.</strong>
              <span>eCOA · ePRO · COA · patient questionnaires · symptom scales</span>
            </div>
            <EditorialLink href={LINGUISTIC_VALIDATION_URL}>Explore Linguistic Validation</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-engineering-section" aria-labelledby="sdh-engineering-title">
        <div className="sdh-shell">
          <div className="sdh-engineering-grid">
            <div className="sdh-engineering-main">
              <p className="sdh-eyebrow">Localization Engineering</p>
              <h2 id="sdh-engineering-title">Built for Modern Digital Health Software</h2>
              <p className="sdh-section-lead">
                Digital health localization operates at the intersection of language and software engineering.
                Sesen supports structured content and development workflows that help multilingual assets move
                efficiently through product release cycles.
              </p>

              <div className="sdh-engineering-rows">
                <article>
                  <span className="sdh-row-icon"><Icon name="code" size={22} /></span>
                  <div><h3>Structured Localization Content</h3><p>Work with formats and resources such as JSON, XML, XLIFF, YAML, CSV, iOS strings, Android resources, resource bundles, and structured exports.</p></div>
                </article>
                <article>
                  <span className="sdh-row-icon"><Icon name="shield" size={22} /></span>
                  <div><h3>Protect the Code Around the Language</h3><p>Preserve and validate variables, placeholders, tags, string identifiers, markup, character limits, formatting, and other nontranslatable elements.</p></div>
                </article>
                <article>
                  <span className="sdh-row-icon"><Icon name="mobile" size={22} /></span>
                  <div><h3>Mobile, Web &amp; Cross-Platform Products</h3><p>Support localization workflows for iOS, Android, web applications, React Native, Flutter, and other structured software environments.</p></div>
                </article>
                <article>
                  <span className="sdh-row-icon"><Icon name="refresh" size={22} /></span>
                  <div><h3>Continuous Localization</h3><p>Keep pace with incremental releases through translation-memory reuse, terminology continuity, version-aware workflows, recurring QA, and multilingual release coordination.</p></div>
                </article>
              </div>
              <EditorialLink href={CLINICAL_SOFTWARE_URL}>Explore Clinical &amp; Medical Software Localization</EditorialLink>
            </div>

            <aside className="sdh-engineering-panel" aria-label="Software localization environment">
              <div className="sdh-panel-top">
                <span>Digital health localization environment</span>
                <small>Structured content · context · versioning</small>
              </div>
              <div className="sdh-code-window">
                <div className="sdh-code-tabs"><span className="active">strings.json</span><span>screens</span><span>terms</span></div>
                <div className="sdh-code-lines">
                  <p><span>"medication.reminder"</span><b>:</b> <em>"Take your prescribed dose"</em></p>
                  <p><span>"device.status"</span><b>:</b> <em>"Measurement complete"</em></p>
                  <p><span>"patient.alert"</span><b>:</b> <em>"Contact your care team"</em></p>
                  <p><span>"trend.label"</span><b>:</b> <em>"7-day trend"</em></p>
                </div>
              </div>
              <div className="sdh-code-checks">
                <div><Icon name="check" size={15} /><span>Terminology aligned</span></div>
                <div><Icon name="check" size={15} /><span>Variables protected</span></div>
                <div><Icon name="check" size={15} /><span>Context available</span></div>
                <div><Icon name="check" size={15} /><span>QA ready</span></div>
              </div>
            </aside>
          </div>
          <div className="sdh-connected-subsection" aria-labelledby="sdh-connected-title">
            <div className="sdh-connected-grid">
              <ConnectedSystemsArt />
          <div className="sdh-connected-copy">
            <p className="sdh-eyebrow">Interoperable Health Environments</p>
            <h2 id="sdh-connected-title">Localization for Connected Health Systems</h2>
            <p className="sdh-section-lead">
              Modern healthcare experiences rarely exist inside a single application. Digital products may
              connect with EHRs, EMRs, clinical systems, patient portals, medical devices, and other healthcare platforms.
            </p>
            <p>
              Sesen localizes the <strong>human-facing language layer</strong> within these environments—including
              interfaces, terminology, instructions, labels, messages, and patient- or clinician-facing content.
            </p>
            <div className="sdh-connected-note">
              <strong>Support for healthcare environments using HL7 &amp; FHIR</strong>
              <p>
                Sesen can manage multilingual content within environments using HL7 and FHIR (Fast Healthcare
                Interoperability Resources) while keeping the distinction clear: our role is language localization,
                not technical interoperability implementation or certification.
              </p>
            </div>
            <div className="sdh-inline-list">
              <span>Consistent terminology</span>
              <span>Localized UI content</span>
              <span>Patient-facing information</span>
              <span>Clinician-facing language</span>
              <span>Data labels &amp; descriptions</span>
              <span>Cross-platform linguistic QA</span>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-validation-section" aria-labelledby="sdh-validation-title">
        <div className="sdh-shell">
          <header className="sdh-section-head sdh-validation-head">
            <h2 id="sdh-validation-title">Validate Language Where Patients and Clinicians Experience It</h2>
            <p>
              A translation may be linguistically correct in isolation and still fail inside the finished product.
              Digital-health quality therefore extends into validation, visual context, device behavior, accessibility,
              and the real user experience.
            </p>
          </header>

          <div className="sdh-validation-grid">
            {qaPillars.map((item) => (
              <article className="sdh-validation-item" key={item.title}>
                <div className="sdh-validation-icon"><Icon name={item.icon} size={25} /></div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                {item.link && <EditorialLink href={item.link}>{item.action}</EditorialLink>}
              </article>
            ))}
          </div>

          <div className="sdh-context-checks" aria-label="In-context QA considerations">
            <span>Text expansion</span><span>Truncation</span><span>Line wrapping</span><span>Dynamic variables</span><span>Numbers &amp; units</span><span>Dates &amp; times</span><span>RTL presentation</span><span>Navigation</span><span>Error states</span><span>Screen context</span>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-expertise-section" aria-labelledby="sdh-expertise-title">
        <div className="sdh-shell">
          <div className="sdh-expertise-head">
            <div>
              <p className="sdh-eyebrow sdh-eyebrow-dark">Professional Expertise + Technology</p>
              <h2 id="sdh-expertise-title">Professional Expertise for Digital Health Content</h2>
            </div>
            <p>
              Medical terminology, patient comprehension, software context, clinical meaning, interface constraints,
              and product risk all require judgment. Technology supports the workflow; qualified language professionals
              remain central to quality.
            </p>
          </div>

          <div className="sdh-expertise-grid">
            <article>
              <span className="sdh-dark-icon"><Icon name="users" size={23} /></span>
              <h3>Life Sciences Linguists</h3>
              <p>Professional linguists selected for relevant medical, clinical, technical, and life sciences expertise.</p>
            </article>
            <article>
              <span className="sdh-dark-icon"><Icon name="language" size={23} /></span>
              <h3>Terminology Governance</h3>
              <p>Manage approved product, medical, clinical, and brand terminology across screens, content, releases, and reviewer feedback.</p>
            </article>
            <article>
              <span className="sdh-dark-icon"><Icon name="database" size={23} /></span>
              <h3>Translation Memory</h3>
              <p>Reuse previously approved language where appropriate to support consistency, efficient updates, and release continuity.</p>
            </article>
            <article>
              <span className="sdh-dark-icon"><Icon name="spark" size={23} /></span>
              <h3>AI-Assisted Workflows With Human Oversight</h3>
              <p>Use AI selectively for suitable drafting, terminology analysis, repetitive content processing, and quality checks—with expert review where medical meaning and product risk require it.</p>
            </article>
          </div>

          <div className="sdh-expertise-actions">
            <EditorialLink href={HYBRID_URL} light>Hybrid Translation for Life Sciences</EditorialLink>
            <EditorialLink href={AI_QA_URL} light>AI Validation &amp; QA for Life Sciences</EditorialLink>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-security-section" aria-labelledby="sdh-security-title">
        <div className="sdh-shell sdh-security-grid">
          <div className="sdh-security-copy">
            <p className="sdh-eyebrow">Security &amp; Governance</p>
            <h2 id="sdh-security-title">Secure Workflows for Sensitive Digital Health Content</h2>
            <p className="sdh-section-lead">
              Digital-health localization can involve sensitive healthcare, clinical, product, and patient-facing
              information. Sesen supports multilingual programs through controlled workflows designed for regulated
              and privacy-sensitive life sciences environments.
            </p>
            <p>
              Sesen supports customers operating in environments shaped by healthcare privacy, medical-device,
              data-protection, and regional market requirements—including HIPAA- and GDPR-sensitive workflows and,
              where applicable, programs shaped by FDA medical-device/software expectations and EU MDR requirements.
              Localization helps address multilingual content needs within these environments; compliance of the finished
              product depends on the product, intended use, market, customer processes, and applicable requirements.
            </p>
            <EditorialLink href={QUALITY_URL}>Quality, Compliance &amp; Security</EditorialLink>
          </div>

          <div className="sdh-security-list">
            <article><Icon name="lock" size={22} /><div><h3>Secure Content Handling</h3><p>Structured processes for receiving, managing, reviewing, and delivering customer content.</p></div></article>
            <article><Icon name="users" size={22} /><div><h3>Controlled Access</h3><p>Project access managed according to workflow and customer requirements.</p></div></article>
            <article><Icon name="refresh" size={22} /><div><h3>Version &amp; Review Management</h3><p>Maintain continuity across source revisions, translation updates, linguistic review, and multilingual releases.</p></div></article>
            <article><Icon name="shield" size={22} /><div><h3>Traceable Quality Workflows</h3><p>Coordinate translation, terminology decisions, review, QA, and delivery through defined project processes.</p></div></article>
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-practice-section" aria-labelledby="sdh-practice-title">
        <div className="sdh-shell">
          <header className="sdh-section-head sdh-section-head-split">
            <div>
              <h2 id="sdh-practice-title">Digital Health Localization in Practice</h2>
            </div>
            <p>
              Every digital health program brings together a different mix of users, content, technology, risk, and
              release requirements. These common program patterns show how Sesen can combine localization,
              validation, QA, and release support around the needs of the product.
            </p>
          </header>

          <div className="sdh-practice-grid">
            {practiceScenarios.map((item) => (
              <article className="sdh-practice-item" key={item.title}>
                <p className="sdh-item-eyebrow">{item.label}</p>
                <h3>{item.title}</h3>
                <div className="sdh-practice-row"><strong>Challenge</strong><p>{item.challenge}</p></div>
                <div className="sdh-practice-row"><strong>Localization approach</strong><p>{item.approach}</p></div>
              </article>
            ))}
          </div>
          <div className="sdh-global-subsection" aria-labelledby="sdh-global-title">
            <div className="sdh-global-grid">
            <div>
              <p className="sdh-eyebrow">Global Delivery</p>
              <h2 id="sdh-global-title">Digital Health Localization for Global Markets</h2>
              <p className="sdh-section-lead">
                A product designed for global patients and healthcare professionals must adapt to more than different words.
                Sesen supports digital health localization across 150+ languages with language- and locale-specific controls
                throughout the multilingual product experience.
              </p>
            </div>
            <div className="sdh-global-matrix">
              <div><strong>Language &amp; Terminology</strong><span>Medical terminology · product terminology · regional variants · patient-friendly language</span></div>
              <div><strong>Interface Behavior</strong><span>Text expansion · character sets · line wrapping · RTL presentation · mobile constraints</span></div>
              <div><strong>Locale Conventions</strong><span>Dates · times · numbers · decimal separators · units · address conventions</span></div>
              <div><strong>Global Release</strong><span>Language assets · regional review · version updates · terminology reuse · new-market expansion</span></div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <section className="sdh-section sdh-related-section" aria-labelledby="sdh-related-title">
        <div className="sdh-shell">
          <header className="sdh-section-head">
            <h2 id="sdh-related-title">Related Digital Health &amp; Life Sciences Services</h2>
            <p>
              Digital health localization often intersects with medical-device content, clinical software,
              patient-reported instruments, and broader healthcare communications.
            </p>
          </header>
          <div className="sdh-related-list">
            {relatedServices.map((item) => (
              <a className="sdh-related-row" href={item.href} key={item.title}>
                <div><h3>{item.title}</h3><p>{item.body}</p></div>
                <span className="sdh-related-arrow"><Icon name="arrow" size={21} /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="sdh-section sdh-faq-section" aria-labelledby="sdh-faq-title">
        <div className="sdh-shell sdh-faq-grid">
          <div className="sdh-faq-intro">
            <h2 id="sdh-faq-title">Digital Health Localization FAQs</h2>
            <p>
              Learn how Sesen approaches eHealth, mHealth, SaMD, eCOA/ePRO, connected systems, in-context QA,
              continuous localization, RTL languages, and controlled AI-assisted workflows.
            </p>
            <EditorialLink href={CONTACT_SALES_URL}>Talk With Team Sesen</EditorialLink>
          </div>

          <div className="sdh-faq-list">
            {faqs.map((item, index) => (
              <details className="sdh-faq-item" key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="sdh-faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="sdh-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sdh-final-cta" aria-labelledby="sdh-final-title">
        <div className="sdh-shell sdh-final-grid">
          <div>
            <h2 id="sdh-final-title">Build Multilingual Digital Health Experiences for Global Patients and Clinicians</h2>
            <p>
              From patient apps and SaMD to clinician platforms, connected devices, telehealth, eCOA, and digital
              therapeutics, Sesen helps life sciences organizations manage the language layer behind global digital health products.
            </p>
          </div>
          <div className="sdh-final-actions">
            <Button href={QUOTE_URL}>REQUEST A QUOTE</Button>
            <Button href={CONTACT_SALES_URL} secondary>TALK WITH TEAM SESEN</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .sdh-page {
    --sdh-brand: #4B6FD8;
    --sdh-brand-dark: #3659BB;
    --sdh-brand-deep: #253F8F;
    --sdh-brand-mid: #6F8BE1;
    --sdh-brand-soft: #EAF0FF;
    --sdh-brand-pale: #F5F7FF;
    --sdh-navy: #17264D;
    --sdh-ink: #111827;
    --sdh-slate: #46546D;
    --sdh-muted: #68758B;
    --sdh-line: #DDE4F2;
    --sdh-line-soft: #E9EEF8;
    --sdh-white: #FFFFFF;
    --sdh-soft: #F7F9FD;
    --sdh-shadow: 0 22px 60px rgba(31, 53, 102, 0.08);
    --sdh-radius-lg: 28px;
    --sdh-radius-md: 20px;
    width: 100%;
    overflow-x: clip;
    background: var(--sdh-white);
    color: var(--sdh-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .sdh-page, .sdh-page * { box-sizing: border-box; }
  .sdh-page * { min-width: 0; }
  .sdh-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .sdh-page h1, .sdh-page h2, .sdh-page h3, .sdh-page p { margin-top: 0; }
  .sdh-page h1, .sdh-page h2, .sdh-page h3 {
    color: var(--sdh-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-stretch: 100%;
    font-style: normal;
  }
  .sdh-page h1 { margin-bottom: 20px; font-size: 48px; font-weight: 500; line-height: 1.3; letter-spacing: -0.5px; }
  .sdh-page h2 { margin-bottom: 22px; font-size: 36px; font-weight: 500; line-height: 1.3; letter-spacing: normal; }
  .sdh-page h3 { margin-bottom: 12px; font-size: 22px; font-weight: 500; line-height: 1.3; letter-spacing: normal; }
  .sdh-page p { color: var(--sdh-slate); font-size: 16px; line-height: 1.72; }
  .sdh-page strong { color: inherit; }

  .sdh-page a:focus-visible,
  .sdh-page summary:focus-visible {
    outline: 3px solid rgba(75,111,216,.32);
    outline-offset: 3px;
  }

  .sdh-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .sdh-section { padding: 96px 0; }
  .sdh-section-head { max-width: 820px; margin-bottom: 54px; }
  .sdh-section-head > p:last-child { margin-bottom: 0; font-size: 18px; }
  .sdh-section-head-split { max-width: none; display: grid; grid-template-columns: minmax(0,.92fr) minmax(0,1.08fr); gap: 80px; align-items: end; }
  .sdh-section-head-split > p { margin-bottom: 4px; font-size: 17px; }
  .sdh-section-lead { color: #293954 !important; font-size: 18px !important; line-height: 1.66 !important; }

  .sdh-eyebrow,
  .sdh-item-eyebrow,
  .sdh-risk-label {
    margin-bottom: 16px !important;
    color: var(--sdh-brand-dark) !important;
    font-family: Inter, "Segoe UI", sans-serif;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: .15em !important;
    text-transform: uppercase;
  }
  .sdh-eyebrow-dark { color: #C8D6FF !important; }

  .sdh-button-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .sdh-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 0 24px;
    border: 1px solid var(--sdh-brand);
    border-radius: 999px;
    color: #FFFFFF !important;
    background: var(--sdh-brand);
    box-shadow: 0 10px 24px rgba(75,111,216,.16);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
    transition: background .18s ease, border-color .18s ease, transform .18s ease, box-shadow .18s ease;
  }
  .sdh-button:hover { background: var(--sdh-brand-dark); border-color: var(--sdh-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.20); }
  .sdh-button-secondary { color: var(--sdh-ink) !important; background: white; border-color: #C9D5EF; box-shadow: none; }
  .sdh-button-secondary:hover { color: var(--sdh-ink) !important; background: var(--sdh-brand-soft); border-color: #B7C6E8; box-shadow: none; }
  .sdh-button svg, .sdh-editorial-link svg, .sdh-related-arrow svg { transition: transform .2s ease; }
  .sdh-button:hover svg, .sdh-editorial-link:hover svg, .sdh-related-row:hover .sdh-related-arrow svg { transform: translateX(3px); }

  .sdh-editorial-link { display: inline-flex; align-items: center; gap: 9px; width: fit-content; color: var(--sdh-brand-dark) !important; font-size: 14px; font-weight: 700; }
  .sdh-editorial-link:hover span { text-decoration: underline; text-underline-offset: 4px; }
  .sdh-editorial-link-light { color: #FFFFFF !important; }

  .sdh-hero {
    position: relative;
    padding: 94px 0 102px;
    background:
      radial-gradient(circle at 91% 5%, rgba(75,111,216,.11), transparent 30%),
      linear-gradient(180deg, #FFFFFF 0%, #FBFCFF 100%);
  }
  .sdh-hero::after {
    content: "";
    position: absolute;
    right: 0;
    top: 15%;
    width: 20%;
    height: 55%;
    opacity: .35;
    background-image: radial-gradient(circle, rgba(75,111,216,.18) 1px, transparent 1.25px);
    background-size: 14px 14px;
    mask-image: linear-gradient(110deg, transparent, #000 44%, transparent 95%);
    pointer-events: none;
  }
  .sdh-hero-grid { display: grid; grid-template-columns: minmax(0,1.06fr) minmax(410px,.94fr); gap: 58px; align-items: center; }
  .sdh-hero-copy { position: relative; z-index: 2; max-width: 700px; }
  .sdh-hero-lead { max-width: 690px; margin-bottom: 17px !important; color: #293954 !important; font-size: 20px !important; line-height: 1.58 !important; }
  .sdh-hero-body { max-width: 700px; margin-bottom: 30px !important; }
  .sdh-hero-proof { display: flex; flex-wrap: wrap; gap: 12px 21px; margin-top: 26px; color: #46546D; font-size: 16px; font-weight: 600; }
  .sdh-hero-proof span { display: inline-flex; align-items: center; gap: 7px; }
  .sdh-hero-proof svg { color: var(--sdh-brand); }
  .sdh-hero-art { position: relative; z-index: 1; width: 100%; max-width: 560px; justify-self: end; }
  .sdh-hero-art svg { display: block; width: 100%; height: auto; }

  .sdh-trust-band { border-top: 1px solid var(--sdh-line); border-bottom: 1px solid var(--sdh-line); background: #FFFFFF; }
  .sdh-trust-grid { display: grid; grid-template-columns: repeat(5, minmax(0,1fr)); gap: 24px; align-items: start; padding-block: 25px; }
  .sdh-trust-item { display: flex; align-items: flex-start; gap: 10px; color: #34435F; font-size: 15px; font-weight: 600; line-height: 1.48; }
  .sdh-trust-item svg { flex: 0 0 auto; margin-top: 1px; color: var(--sdh-brand-dark); }

  .sdh-experience-section { background: #FFFFFF; }
  .sdh-experience-grid { display: grid; grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr); gap: 76px; align-items: center; }
  .sdh-experience-copy { max-width: 570px; }
  .sdh-experience-points { display: grid; gap: 0; margin-top: 30px; border-top: 1px solid var(--sdh-line); }
  .sdh-experience-points > div { display: grid; grid-template-columns: 165px minmax(0,1fr); gap: 20px; padding: 17px 0; border-bottom: 1px solid var(--sdh-line-soft); }
  .sdh-experience-points strong { color: var(--sdh-navy); font-size: 15px; font-weight: 650; }
  .sdh-experience-points span { color: var(--sdh-slate); font-size: 16px; line-height: 1.55; }
  .sdh-experience-map { min-height: 430px; display: grid; place-items: center; overflow: hidden; border: 1px solid #DEE6F3; border-radius: var(--sdh-radius-lg); background: linear-gradient(145deg,#FAFCFF,#F4F7FD); }
  .sdh-experience-map svg { display: block; width: 100%; height: auto; }

  .sdh-products-section { background: var(--sdh-soft); }
  .sdh-products-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); column-gap: 48px; row-gap: 0; }
  .sdh-product-item { position: relative; min-height: 355px; display: flex; flex-direction: column; padding: 30px 0 32px; border-top: 1px solid #D4DDEB; }
  .sdh-product-item::before { content: ""; position: absolute; left: 0; top: -1px; width: 34px; height: 2px; background: var(--sdh-brand); }
  .sdh-icon-surface { display: inline-grid; place-items: center; width: 46px; height: 46px; margin-bottom: 20px; border-radius: 13px; color: var(--sdh-brand-dark); background: #FFFFFF; border: 1px solid #DDE5F2; }
  .sdh-product-item h3 { font-size: 23px; }
  .sdh-product-item > p { margin-bottom: 18px; }
  .sdh-product-detail { margin-top: auto; padding-top: 16px; border-top: 1px solid #E2E8F2; color: #60708B; font-size: 14px; line-height: 1.55; }
  .sdh-product-item .sdh-editorial-link { margin-top: 15px; }

  .sdh-content-section { background: #FFFFFF; }
  .sdh-content-grid { display: grid; grid-template-columns: minmax(0,.83fr) minmax(0,1.17fr); gap: 84px; align-items: start; }
  .sdh-content-copy { max-width: 525px; }
  .sdh-content-note { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 14px; align-items: start; margin-top: 28px; padding: 18px; border: 1px solid #DCE5F4; border-radius: 16px; background: var(--sdh-brand-pale); color: #32425E; font-size: 16px; line-height: 1.55; }
  .sdh-content-note svg { color: var(--sdh-brand-dark); }
  .sdh-layer-stack { border-top: 1px solid #CED8E8; }
  .sdh-layer-row { display: grid; grid-template-columns: 52px minmax(0,1fr); gap: 24px; padding: 25px 0 27px; border-bottom: 1px solid #DDE4EF; }
  .sdh-layer-icon { display: grid; place-items: center; width: 40px; height: 40px; margin-top: 1px; border: 1px solid #DCE5F2; border-radius: 12px; color: var(--sdh-brand-dark); background: var(--sdh-brand-pale); }
  .sdh-layer-row h3 { margin-bottom: 14px; font-size: 23px; }
  .sdh-layer-items { display: flex; flex-wrap: wrap; gap: 8px; }
  .sdh-layer-items span { padding: 7px 10px; border: 1px solid #E0E6F0; border-radius: 9px; background: #FBFCFE; color: #53627B; font-size: 13px; line-height: 1.35; }

  .sdh-risk-wrap { grid-column: 1 / -1; margin-top: 76px; padding: 54px 52px 50px; border: 1px solid #DCE4F2; border-radius: var(--sdh-radius-lg); background: linear-gradient(180deg,#F5F7FF 0%,#F9FAFD 100%); }
  .sdh-risk-head { max-width: 870px; margin-bottom: 44px; }
  .sdh-risk-continuum { position: relative; display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 44px; margin-top: 18px; }
  .sdh-risk-axis { position: absolute; left: 7%; right: 7%; top: 28px; height: 2px; background: linear-gradient(90deg,#BFCBE6,#8EA4DA,#3659BB); }
  .sdh-risk-axis span { position: absolute; right: -1px; top: -4px; width: 10px; height: 10px; border-top: 2px solid var(--sdh-brand-dark); border-right: 2px solid var(--sdh-brand-dark); transform: rotate(45deg); }
  .sdh-risk-level { position: relative; padding-top: 62px; }
  .sdh-risk-marker { position: absolute; top: 8px; left: 0; display: grid; place-items: center; width: 40px; height: 40px; border: 1px solid #BFCBE5; border-radius: 50%; background: #FFFFFF; color: var(--sdh-brand-dark); font-weight: 700; box-shadow: 0 8px 20px rgba(37,63,143,.08); }
  .sdh-risk-level-high .sdh-risk-marker { color: #FFFFFF; background: var(--sdh-brand-dark); border-color: var(--sdh-brand-dark); }
  .sdh-risk-level h3 { font-size: 22px; }
  .sdh-risk-level strong { display: block; color: #44536D; font-size: 16px; line-height: 1.6; font-weight: 650; }
  .sdh-risk-footer { display: flex; flex-wrap: wrap; align-items: center; gap: 8px 10px; margin-top: 52px; padding-top: 24px; border-top: 1px solid #D5DEED; color: #53617A; font-size: 13px; }
  .sdh-risk-footer > span { margin-right: 6px; color: var(--sdh-navy); font-size: 14px; font-weight: 650; }
  .sdh-risk-footer > div { padding: 6px 9px; border-radius: 8px; background: #FFFFFF; border: 1px solid #DBE3F0; }
  .sdh-risk-footer svg { color: #8093C4; }

  .sdh-workflow-section { background: #FFFFFF; }
  .sdh-workflow-head { max-width: 900px; }
  .sdh-workflow-grid { display: grid; grid-template-columns: repeat(6,minmax(0,1fr)); gap: 14px; }
  .sdh-workflow-step { position: relative; min-height: 310px; padding: 20px 16px 24px; border-top: 1px solid #CCD6E8; }
  .sdh-workflow-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 28px; }
  .sdh-step-number { color: var(--sdh-brand-dark); font-size: 12px; font-weight: 700; letter-spacing: .1em; }
  .sdh-workflow-icon { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 11px; color: var(--sdh-brand-dark); background: var(--sdh-brand-soft); }
  .sdh-workflow-step h3 { font-size: 19px; }
  .sdh-workflow-step p { margin-bottom: 0; font-size: 16px; line-height: 1.64; }
  .sdh-workflow-arrow { position: absolute; right: -17px; top: 29px; z-index: 2; display: grid; place-items: center; width: 26px; height: 26px; border-radius: 50%; color: #8A9CC5; background: #FFFFFF; border: 1px solid #D5DEEC; }
  .sdh-workflow-callout { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 40px; align-items: center; margin-top: 38px; padding: 24px 28px; border: 1px solid #D9E2F2; border-radius: 18px; background: var(--sdh-brand-pale); }
  .sdh-workflow-callout strong { display: block; margin-bottom: 5px; color: var(--sdh-navy); font-size: 16px; line-height: 1.5; }
  .sdh-workflow-callout span { color: #61708A; font-size: 14px; }

  .sdh-engineering-section { background: var(--sdh-soft); }
  .sdh-engineering-grid { display: grid; grid-template-columns: minmax(0,1.08fr) minmax(360px,.92fr); gap: 64px; align-items: center; }
  .sdh-engineering-main { max-width: 650px; }
  .sdh-engineering-rows { margin: 34px 0 26px; border-top: 1px solid #D5DDEB; }
  .sdh-engineering-rows article { display: grid; grid-template-columns: 46px minmax(0,1fr); gap: 17px; padding: 21px 0; border-bottom: 1px solid #DDE4EF; }
  .sdh-row-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; color: var(--sdh-brand-dark); background: #FFFFFF; border: 1px solid #DDE5F2; }
  .sdh-engineering-rows h3 { margin-bottom: 6px; font-size: 20px; }
  .sdh-engineering-rows p { margin-bottom: 0; font-size: 16px; }
  .sdh-engineering-panel { overflow: hidden; border: 1px solid #D7E0F0; border-radius: var(--sdh-radius-lg); background: #FFFFFF; box-shadow: var(--sdh-shadow); }
  .sdh-panel-top { display: grid; gap: 2px; padding: 22px 24px; border-bottom: 1px solid #E0E6F0; }
  .sdh-panel-top span { color: var(--sdh-navy); font-size: 15px; font-weight: 700; }
  .sdh-panel-top small { color: var(--sdh-muted); font-size: 13px; }
  .sdh-code-window { margin: 22px; border: 1px solid #DDE4EF; border-radius: 16px; background: #FAFBFD; overflow: hidden; }
  .sdh-code-tabs { display: flex; gap: 6px; padding: 10px 12px; border-bottom: 1px solid #E1E7F0; background: #F4F7FB; }
  .sdh-code-tabs span { padding: 5px 8px; border-radius: 6px; color: #71809A; font-size: 11px; }
  .sdh-code-tabs .active { color: var(--sdh-brand-dark); background: #FFFFFF; font-weight: 700; }
  .sdh-code-lines { padding: 16px 17px; }
  .sdh-code-lines p { margin-bottom: 11px; color: #596780; font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace; font-size: 12px; line-height: 1.55; }
  .sdh-code-lines p:last-child { margin-bottom: 0; }
  .sdh-code-lines span { color: #3659BB; }
  .sdh-code-lines b { color: #7F8DA6; font-weight: 400; }
  .sdh-code-lines em { color: #33425E; font-style: normal; }
  .sdh-code-checks { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 12px 16px; padding: 0 24px 24px; }
  .sdh-code-checks div { display: flex; align-items: center; gap: 7px; color: #4F5E77; font-size: 13px; font-weight: 600; }
  .sdh-code-checks svg { color: var(--sdh-brand); }

  .sdh-connected-subsection { margin-top: 76px; padding-top: 76px; border-top: 1px solid #D6DFED; }
  .sdh-connected-grid { display: grid; grid-template-columns: minmax(0,1.05fr) minmax(0,.95fr); gap: 76px; align-items: center; }
  .sdh-connected-art { position: relative; min-height: 500px; border: 1px solid #DCE5F3; border-radius: var(--sdh-radius-lg); background: linear-gradient(145deg,#F8FAFF,#F2F6FD); overflow: hidden; }
  .sdh-connected-art::before { content: ""; position: absolute; inset: 11% 12%; border-radius: 50%; border: 1px dashed #D6E0F2; }
  .sdh-connected-node { position: absolute; z-index: 2; width: 210px; padding: 16px 16px 15px; border: 1px solid #D6E0F1; border-radius: 16px; background: rgba(255,255,255,.96); box-shadow: 0 12px 28px rgba(35,61,120,.08); }
  .sdh-connected-node strong, .sdh-connected-node small { display: block; }
  .sdh-connected-node strong { margin-top: 8px; color: var(--sdh-navy); font-size: 14px; }
  .sdh-connected-node small { margin-top: 3px; color: #697791; font-size: 11px; line-height: 1.4; }
  .sdh-connected-icon { display: grid; place-items: center; width: 37px; height: 37px; border-radius: 10px; color: var(--sdh-brand-dark); background: var(--sdh-brand-soft); }
  .sdh-connected-node-patient { left: 7%; top: 11%; }
  .sdh-connected-node-platform { right: 7%; top: 25%; }
  .sdh-connected-node-data { left: 12%; bottom: 12%; }
  .sdh-connected-node-clinician { right: 8%; bottom: 11%; }
  .sdh-connected-line { position: absolute; z-index: 1; height: 2px; background: #AEBFE2; transform-origin: left center; }
  .sdh-connected-line-a { width: 180px; left: 36%; top: 29%; transform: rotate(17deg); }
  .sdh-connected-line-b { width: 165px; left: 30%; top: 57%; transform: rotate(-27deg); }
  .sdh-connected-line-c { width: 180px; left: 42%; bottom: 28%; transform: rotate(14deg); }
  .sdh-connected-copy { max-width: 560px; }
  .sdh-connected-note { margin: 26px 0 24px; padding: 20px 22px; border-left: 2px solid var(--sdh-brand); background: var(--sdh-brand-pale); }
  .sdh-connected-note strong { display: block; margin-bottom: 8px; color: var(--sdh-navy); font-size: 16px; }
  .sdh-connected-note p { margin-bottom: 0; font-size: 16px; }
  .sdh-inline-list { display: flex; flex-wrap: wrap; gap: 8px; }
  .sdh-inline-list span { padding: 7px 10px; border: 1px solid #DDE4EF; border-radius: 9px; color: #5B6981; background: #FFFFFF; font-size: 13px; }

  .sdh-validation-section { background: #FFFFFF; }
  .sdh-validation-head { max-width: 890px; }
  .sdh-validation-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 0; border-top: 1px solid #D2DCEB; border-bottom: 1px solid #D2DCEB; }
  .sdh-validation-item { padding: 32px 30px 34px; border-right: 1px solid #D2DCEB; }
  .sdh-validation-item:first-child { padding-left: 0; }
  .sdh-validation-item:last-child { padding-right: 0; border-right: 0; }
  .sdh-validation-icon { display: grid; place-items: center; width: 46px; height: 46px; margin-bottom: 22px; border-radius: 13px; color: var(--sdh-brand-dark); background: #FFFFFF; border: 1px solid #DCE4F2; }
  .sdh-validation-item h3 { font-size: 23px; }
  .sdh-validation-item p { margin-bottom: 18px; }
  .sdh-context-checks { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 32px; }
  .sdh-context-checks span { padding: 8px 11px; border: 1px solid #DCE4F1; border-radius: 9px; color: #52617A; background: #FFFFFF; font-size: 13px; font-weight: 600; }

  .sdh-expertise-section { color: #FFFFFF; background: radial-gradient(circle at 80% 10%,rgba(255,255,255,.09),transparent 25%),linear-gradient(135deg,#17264D 0%,#253F8F 62%,#3659BB 100%); }
  .sdh-expertise-section h2, .sdh-expertise-section h3 { color: #FFFFFF; }
  .sdh-expertise-section p { color: #DDE5F7; }
  .sdh-expertise-head { display: grid; grid-template-columns: minmax(0,.95fr) minmax(0,1.05fr); gap: 80px; align-items: end; margin-bottom: 54px; }
  .sdh-expertise-head > p { margin-bottom: 6px; font-size: 17px; }
  .sdh-expertise-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 32px; }
  .sdh-expertise-grid article { padding-top: 26px; border-top: 1px solid rgba(255,255,255,.22); }
  .sdh-dark-icon { display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 19px; border-radius: 12px; color: #FFFFFF; background: rgba(255,255,255,.09); border: 1px solid rgba(255,255,255,.16); }
  .sdh-expertise-grid h3 { font-size: 21px; }
  .sdh-expertise-grid p { margin-bottom: 0; font-size: 16px; }
  .sdh-expertise-actions { display: flex; flex-wrap: wrap; gap: 18px 28px; margin-top: 40px; padding-top: 26px; border-top: 1px solid rgba(255,255,255,.18); }

  .sdh-security-section { background: #FFFFFF; }
  .sdh-security-grid { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); gap: 82px; align-items: start; }
  .sdh-security-copy { max-width: 550px; }
  .sdh-security-list { border-top: 1px solid #CED8E8; }
  .sdh-security-list article { display: grid; grid-template-columns: 44px minmax(0,1fr); gap: 18px; padding: 24px 0; border-bottom: 1px solid #DDE4EF; }
  .sdh-security-list > article > svg { color: var(--sdh-brand-dark); }
  .sdh-security-list h3 { margin-bottom: 6px; font-size: 20px; }
  .sdh-security-list p { margin-bottom: 0; }

  .sdh-practice-section { background: var(--sdh-soft); }
  .sdh-practice-grid { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); gap: 28px; }
  .sdh-practice-item { padding: 27px 27px 28px; border: 1px solid #DCE4F1; border-radius: 20px; background: #FFFFFF; }
  .sdh-practice-item h3 { font-size: 23px; }
  .sdh-practice-row { padding-top: 18px; margin-top: 18px; border-top: 1px solid #E4EAF3; }
  .sdh-practice-row strong { display: block; margin-bottom: 6px; color: var(--sdh-navy); font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: .08em; }
  .sdh-practice-row p { margin-bottom: 0; font-size: 16px; }

  .sdh-global-subsection { margin-top: 76px; padding-top: 76px; border-top: 1px solid #D6DFED; }
  .sdh-global-grid { display: grid; grid-template-columns: minmax(0,.86fr) minmax(0,1.14fr); gap: 82px; align-items: start; }
  .sdh-global-matrix { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid #CFD9E8; }
  .sdh-global-matrix div { min-height: 160px; padding: 23px 22px 25px 0; border-bottom: 1px solid #DEE5EF; }
  .sdh-global-matrix div:nth-child(odd) { padding-right: 28px; border-right: 1px solid #DEE5EF; }
  .sdh-global-matrix div:nth-child(even) { padding-left: 28px; }
  .sdh-global-matrix strong { display: block; margin-bottom: 9px; color: var(--sdh-navy); font-size: 17px; }
  .sdh-global-matrix span { color: #5B6981; font-size: 16px; line-height: 1.65; }

  .sdh-related-section { background: var(--sdh-brand-pale); }
  .sdh-related-list { border-top: 1px solid #CAD6EA; }
  .sdh-related-row { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 30px; align-items: center; padding: 24px 0 25px; border-bottom: 1px solid #D4DEED; }
  .sdh-related-row h3 { margin-bottom: 6px; font-size: 21px; transition: color .18s ease; }
  .sdh-related-row p { max-width: 820px; margin-bottom: 0; }
  .sdh-related-arrow { display: grid; place-items: center; width: 44px; height: 44px; border-radius: 50%; color: var(--sdh-brand-dark); background: #FFFFFF; border: 1px solid #D3DEEF; }
  .sdh-related-row:hover h3 { color: var(--sdh-brand-dark); }

  .sdh-faq-section { background: #FFFFFF; }
  .sdh-faq-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 78px; align-items: start; }
  .sdh-faq-intro { max-width: 430px; }
  .sdh-faq-intro > p:not(.sdh-eyebrow) { margin-bottom: 24px; font-size: 17px; }
  .sdh-faq-list { border-top: 1px solid #CCD6E8; }
  .sdh-faq-item { border-bottom: 1px solid #CCD6E8; }
  .sdh-faq-item summary { list-style: none; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; min-height: 80px; padding: 22px 0; cursor: pointer; color: var(--sdh-navy); font-size: 18px; font-weight: 650; line-height: 1.4; }
  .sdh-faq-item summary::-webkit-details-marker { display: none; }
  .sdh-faq-plus { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--sdh-brand-dark); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
  .sdh-faq-item[open] .sdh-faq-plus { transform: rotate(45deg); }
  .sdh-faq-answer { padding: 0 46px 26px 0; }
  .sdh-faq-answer p { margin-bottom: 0; }

  .sdh-final-cta { position: relative; overflow: hidden; padding: 82px 0; color: white; background: radial-gradient(circle at 78% 22%, rgba(255,255,255,.12), transparent 23%), linear-gradient(108deg, #17264D 0%, #253F8F 58%, #2E4F9D 100%); }
  .sdh-final-cta::after { content: ""; position: absolute; right: 0; top: 0; width: 32%; height: 100%; opacity: .42; background-image: radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1.2px); background-size: 13px 13px; mask-image: linear-gradient(90deg, transparent, #000); }
  .sdh-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.2fr) auto; gap: 60px; align-items: center; }
  .sdh-final-cta h2 { max-width: 800px; margin-bottom: 17px; color: #FFFFFF; }
  .sdh-final-cta p { max-width: 800px; margin-bottom: 0; color: #E7ECFA; font-size: 17px; }
  .sdh-final-actions { display: grid; gap: 12px; min-width: 248px; }
  .sdh-final-actions .sdh-button { width: 100%; }

  @media (max-width: 1120px) {
    .sdh-shell { padding-inline: 40px; }
    .sdh-hero-grid { grid-template-columns: minmax(0,1.04fr) minmax(360px,.96fr); gap: 38px; }
    .sdh-trust-grid { grid-template-columns: repeat(3,minmax(0,1fr)); }
    .sdh-products-grid { column-gap: 32px; }
    .sdh-workflow-grid { grid-template-columns: repeat(3,minmax(0,1fr)); row-gap: 24px; }
    .sdh-workflow-step { min-height: 250px; }
    .sdh-workflow-arrow { display: none; }
    .sdh-expertise-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  }

  @media (max-width: 900px) {
    .sdh-section { padding: 80px 0; }
    .sdh-shell { padding-inline: 30px; }
    .sdh-hero { padding: 72px 0 80px; }
    .sdh-hero-grid { grid-template-columns: 1fr; gap: 38px; }
    .sdh-hero-copy { max-width: 760px; }
    .sdh-hero-art { max-width: 560px; justify-self: center; }
    .sdh-section-head-split, .sdh-experience-grid, .sdh-content-grid, .sdh-engineering-grid, .sdh-connected-grid, .sdh-security-grid, .sdh-global-grid, .sdh-expertise-head { grid-template-columns: 1fr; gap: 36px; }
    .sdh-risk-wrap { padding: 44px 36px 42px; }
    .sdh-connected-subsection, .sdh-global-subsection { margin-top: 64px; padding-top: 64px; }
    .sdh-experience-copy, .sdh-content-copy, .sdh-engineering-main, .sdh-connected-copy, .sdh-security-copy { max-width: 760px; }
    .sdh-trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sdh-products-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sdh-workflow-grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sdh-risk-continuum { grid-template-columns: 1fr; gap: 0; }
    .sdh-risk-axis { left: 19px; right: auto; top: 27px; bottom: 34px; width: 2px; height: auto; background: linear-gradient(180deg,#BFCBE6,#8EA4DA,#3659BB); }
    .sdh-risk-axis span { right: -4px; top: auto; bottom: -1px; transform: rotate(135deg); }
    .sdh-risk-level { min-height: 0; padding: 0 0 34px 68px; }
    .sdh-risk-marker { top: 0; }
    .sdh-risk-footer { margin-top: 18px; }
    .sdh-connected-art { order: 2; min-height: 470px; }
    .sdh-validation-grid { grid-template-columns: 1fr; border-bottom: 0; }
    .sdh-validation-item, .sdh-validation-item:first-child, .sdh-validation-item:last-child { padding: 28px 0; border-right: 0; border-bottom: 1px solid #D2DCEB; }
    .sdh-practice-grid { grid-template-columns: 1fr; }
    .sdh-practice-item { display: grid; grid-template-columns: minmax(190px,.48fr) minmax(0,1.52fr); column-gap: 28px; }
    .sdh-practice-item .sdh-item-eyebrow, .sdh-practice-item h3 { grid-column: 1; }
    .sdh-practice-row { grid-column: 2; margin-top: 0; }
    .sdh-faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .sdh-faq-intro { max-width: 700px; }
    .sdh-final-grid { grid-template-columns: 1fr; gap: 30px; }
    .sdh-final-actions { grid-template-columns: repeat(2,minmax(0,1fr)); max-width: 540px; min-width: 0; }
  }

  @media (max-width: 640px) {
    .sdh-shell { padding-inline: 20px; }
    .sdh-section { padding: 68px 0; }
    .sdh-page h1 { font-size: 42px; }
    .sdh-page h2 { font-size: 32px; }
    .sdh-page h3 { font-size: 21px; }
    .sdh-hero { padding: 58px 0 66px; }
    .sdh-hero-lead { font-size: 18px !important; }
    .sdh-button-row { display: grid; grid-template-columns: 1fr; }
    .sdh-button { width: 100%; }
    .sdh-hero-proof { display: grid; gap: 8px; }
    .sdh-trust-grid { grid-template-columns: 1fr; gap: 14px; }
    .sdh-trust-item { min-height: 0; }
    .sdh-experience-points > div { grid-template-columns: 1fr; gap: 4px; }
    .sdh-experience-map { min-height: 320px; }
    .sdh-products-grid { grid-template-columns: 1fr; }
    .sdh-product-item { min-height: 0; }
    .sdh-layer-row { grid-template-columns: 42px minmax(0,1fr); gap: 14px; }
    .sdh-risk-wrap { margin-top: 58px; padding: 30px 20px 28px; border-radius: 22px; }
    .sdh-connected-subsection, .sdh-global-subsection { margin-top: 54px; padding-top: 54px; }
    .sdh-layer-items { display: grid; }
    .sdh-risk-footer { display: grid; grid-template-columns: 1fr; }
    .sdh-risk-footer svg { transform: rotate(90deg); margin-left: 18px; }
    .sdh-workflow-grid { grid-template-columns: 1fr; gap: 0; }
    .sdh-workflow-step { min-height: 0; padding: 22px 0 26px; border-bottom: 1px solid #DCE3EF; }
    .sdh-workflow-top { margin-bottom: 16px; }
    .sdh-workflow-callout { grid-template-columns: 1fr; gap: 16px; padding: 21px 20px; }
    .sdh-engineering-panel { border-radius: 22px; }
    .sdh-code-window { margin: 16px; }
    .sdh-code-tabs { overflow-x: auto; scrollbar-width: none; }
    .sdh-code-tabs::-webkit-scrollbar { display: none; }
    .sdh-code-lines p { overflow-wrap: anywhere; }
    .sdh-code-checks { grid-template-columns: 1fr; padding: 0 18px 20px; }
    .sdh-connected-art { min-height: 500px; }
    .sdh-connected-node { width: 175px; }
    .sdh-connected-node-patient { left: 5%; top: 7%; }
    .sdh-connected-node-platform { right: 5%; top: 28%; }
    .sdh-connected-node-data { left: 5%; bottom: 27%; }
    .sdh-connected-node-clinician { right: 5%; bottom: 6%; }
    .sdh-connected-line-a, .sdh-connected-line-b, .sdh-connected-line-c { display: none; }
    .sdh-expertise-grid { grid-template-columns: 1fr; }
    .sdh-practice-item { display: block; }
    .sdh-practice-row { margin-top: 18px; }
    .sdh-global-matrix { grid-template-columns: 1fr; }
    .sdh-global-matrix div, .sdh-global-matrix div:nth-child(odd), .sdh-global-matrix div:nth-child(even) { min-height: 0; padding: 20px 0; border-right: 0; }
    .sdh-related-row { gap: 18px; }
    .sdh-related-arrow { width: 40px; height: 40px; }
    .sdh-faq-item summary { min-height: 72px; font-size: 16px; }
    .sdh-faq-answer { padding-right: 0; }
    .sdh-final-cta { padding: 66px 0; }
    .sdh-final-actions { grid-template-columns: 1fr; }
  }

  @media (max-width: 360px) {
    .sdh-page h1 { font-size: 38px; }
    .sdh-page h2 { font-size: 30px; }
    .sdh-hero { padding-top: 54px; }
    .sdh-connected-art { min-height: 470px; }
    .sdh-connected-node { width: 158px; padding: 14px; }
    .sdh-connected-node strong { font-size: 13px; }
    .sdh-risk-wrap { padding-inline: 18px; }
    .sdh-connected-node small { font-size: 10.5px; }
    .sdh-related-row { grid-template-columns: 1fr; }
    .sdh-related-arrow { justify-self: start; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sdh-page *, .sdh-page *::before, .sdh-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
