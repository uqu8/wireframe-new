const INDUSTRIES_URL = "https://www.sesen.com/industries/";
const LIFE_SCIENCES_URL = "https://www.sesen.com/life-sciences-translation-services/";
const CONTACT_SALES_URL = "https://www.sesen.com/contact-sales/";
const QUOTE_URL = "https://www.sesen.com/get-a-quote/";

const PHARMA_URL = "https://www.sesen.com/pharmaceuticals/";
const BIOTECH_URL = "https://www.sesen.com/biotechnology-translation-services/";
const MEDICAL_DEVICE_URL = "https://www.sesen.com/medical-device-translation-services/";
const CRO_URL = "https://www.sesen.com/cro-translation-services/";
const HEALTHCARE_URL = "https://www.sesen.com/healthcare-hospital-translation-services/";
const DIGITAL_HEALTH_URL = "https://www.sesen.com/telemedicine-digital-health-translation/";
const PUBLIC_HEALTH_URL = "https://www.sesen.com/regulatory-government-translation-services/";

const CLINICAL_DEVELOPMENT_URL = "https://www.sesen.com/clinical-development-translation-services/";
const REGULATORY_AFFAIRS_URL = "https://www.sesen.com/regulatory-affairs-translation-services/";
const MEDICAL_AFFAIRS_URL = "https://www.sesen.com/medical-affairs-translation-services/";
const PHARMACOVIGILANCE_URL = "https://www.sesen.com/pharmacovigilance-translation-services/";
const GENOMICS_URL = "https://www.sesen.com/genomics-gene-therapy-translation-services/";
const LABELING_URL = "https://www.sesen.com/labeling-translation-services/";
const SOFTWARE_URL = "https://www.sesen.com/clinical-medical-software-localization-services/";
const SERVICES_URL = "https://www.sesen.com/services/";
const PATIENT_URL = "https://www.sesen.com/patient-facing-materials-translation/";
const AI_URL = "https://www.sesen.com/ai/";

const RESOURCES_URL = "https://www.sesen.com/resources/";
const CLINICAL_KNOWLEDGE_URL = "https://www.sesen.com/resources/clinical-regulatory-knowledge/";
const AI_INSIGHTS_URL = "https://www.sesen.com/resources/ai-regulatory-insights/";
const CASE_STUDIES_URL = "https://www.sesen.com/resources/case-studies/";
const WHITE_PAPERS_URL = "https://www.sesen.com/resources/white-papers-ebooks/";
const GLOSSARIES_URL = "https://www.sesen.com/resources/glossaries-style-guides/";

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
    pharma: (
      <>
        <path d="M8 4h8" />
        <path d="M9 4v3" />
        <path d="M15 4v3" />
        <rect x="6" y="7" width="12" height="13" rx="2.6" />
        <path d="M9.2 12h5.6" />
        <path d="M10.4 15.2a2.8 2.8 0 0 0 3.2 0" />
      </>
    ),
    biotech: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v5.2L5.8 16a3.4 3.4 0 0 0 3 5h6.4a3.4 3.4 0 0 0 3-5L14 8.2V3" />
        <path d="M8.2 15h7.6" />
        <circle cx="10" cy="17.6" r=".8" />
        <circle cx="13.4" cy="18.3" r=".8" />
        <path d="M15.8 10.6c1.8 1.1 1.8 3.3 3.4 4.4" />
        <path d="M19.2 10.6c-1.8 1.1-1.8 3.3-3.4 4.4" />
      </>
    ),
    meddevice: (
      <>
        <rect x="6" y="3" width="12" height="18" rx="2.6" />
        <path d="M9 7h6" />
        <path d="m8.7 13h1.9l1.6-2.7 2.2 5.2 1.5-2.5H18" />
        <path d="M10 17.8h4" />
      </>
    ),
    cro: (
      <>
        <path d="M8 4h8" />
        <rect x="6.5" y="5.5" width="11" height="14.5" rx="2.2" />
        <path d="M9.4 10h5.2" />
        <path d="M9.4 13.5h3.1" />
        <path d="m13.8 15.2 1.5 1.5 2.7-3" />
      </>
    ),
    healthcare: (
      <>
        <path d="M5 21V8h14v13" />
        <path d="M9 3h6v5H9z" />
        <path d="M12 10v4" />
        <path d="M10 12h4" />
        <path d="M8 21v-4h8v4" />
      </>
    ),
    digitalhealth: (
      <>
        <rect x="4" y="5" width="12.5" height="14" rx="2.6" />
        <path d="m7.4 12h1.7l1.2-2.5 2 5 1.2-2.3h1.5" />
        <path d="M19 8.2c1.2.9 1.9 2.3 1.9 3.8" />
        <path d="M18 10.2c.7.5 1.1 1.3 1.1 2" />
      </>
    ),
    publichealth: (
      <>
        <path d="M4 8h16" />
        <path d="M6 8V6l6-3 6 3v2" />
        <path d="M7.5 8v8" />
        <path d="M12 8v8" />
        <path d="M16.5 8v8" />
        <path d="M5 19h14" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 19 6v5c0 4.8-2.8 8-7 10-4.2-2-7-5.2-7-10V6z" />
        <path d="m9 12 2 2 4-5" />
      </>
    ),
    microscope: (
      <>
        <path d="m9 3 4 4" />
        <path d="m10 4-3 3 5 5 3-3" />
        <path d="M7 13a6 6 0 0 0 10 4" />
        <path d="M4 21h16" />
        <path d="M15 9a5 5 0 0 1 2 9" />
      </>
    ),
    patient: (
      <>
        <circle cx="12" cy="7" r="3.5" />
        <path d="M5 21a7 7 0 0 1 14 0" />
        <path d="M16.5 12.5h4" />
        <path d="M18.5 10.5v4" />
      </>
    ),
    regulation: (
      <>
        <path d="M6 3h9l3 3v15H6z" />
        <path d="M15 3v4h4" />
        <path d="M9 11h6" />
        <path d="M9 15h4" />
        <path d="m15 17 1.3 1.3L19 15.5" />
      </>
    ),
    megaphone: (
      <>
        <path d="m3 11 13-5v12L3 13z" />
        <path d="M16 10a4 4 0 0 1 0 4" />
        <path d="m6 14 1.2 5h3L9 13" />
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
    building: (
      <>
        <path d="M4 21V5l8-3 8 3v16" />
        <path d="M8 21v-5h8v5" />
        <path d="M8 8h.01" />
        <path d="M12 8h.01" />
        <path d="M16 8h.01" />
        <path d="M8 12h.01" />
        <path d="M12 12h.01" />
        <path d="M16 12h.01" />
      </>
    ),
    network: (
      <>
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="12" cy="5" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <circle cx="12" cy="19" r="2.5" />
        <path d="m7 10 3-3" />
        <path d="m14 7 3 3" />
        <path d="m17 14-3 3" />
        <path d="m10 17-3-3" />
      </>
    ),
    book: (
      <>
        <path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H11v17H7.5A3.5 3.5 0 0 0 4 22z" />
        <path d="M20 5.5A3.5 3.5 0 0 0 16.5 2H13v17h3.5A3.5 3.5 0 0 1 20 22z" />
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
    check: <path d="m5 12 4 4L19 6" />,
  };

  return <svg {...common}>{icons[name] || icons.arrow}</svg>;
}

function Button({ href, children, secondary = false }) {
  return (
    <a className={`sih-button${secondary ? " sih-button-secondary" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function EditorialLink({ href, children, light = false }) {
  return (
    <a className={`sih-editorial-link${light ? " sih-editorial-link-light" : ""}`} href={href}>
      <span>{children}</span>
      <Icon name="arrow" size={17} strokeWidth={1.8} />
    </a>
  );
}

function HeroEcosystemArt() {
  return (
    <div className="sih-hero-art" aria-hidden="true">
      <svg viewBox="0 0 610 540" fill="none">
        <defs>
          <linearGradient id="sihHeroSurface" x1="85" y1="35" x2="515" y2="500" gradientUnits="userSpaceOnUse">
            <stop stopColor="#F5F7FF" />
            <stop offset="1" stopColor="#EAF0FF" />
          </linearGradient>
          <linearGradient id="sihHeroStroke" x1="115" y1="80" x2="500" y2="465" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3659BB" />
            <stop offset="1" stopColor="#6F8BE1" />
          </linearGradient>
          <filter id="sihHeroShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="15" floodColor="#253F8F" floodOpacity="0.11" />
          </filter>
        </defs>

        <circle cx="306" cy="267" r="221" fill="url(#sihHeroSurface)" />
        <circle cx="306" cy="267" r="177" stroke="#D7E1F6" strokeWidth="1.4" />
        <circle cx="306" cy="267" r="128" stroke="#D7E1F6" strokeWidth="1.2" strokeDasharray="4 7" />
        <path d="M93 267h426" stroke="#D9E3F7" strokeWidth="1.2" />
        <path d="M306 55v424" stroke="#D9E3F7" strokeWidth="1.2" />
        <ellipse cx="306" cy="267" rx="211" ry="79" stroke="#D9E3F7" strokeWidth="1.2" />
        <ellipse cx="306" cy="267" rx="106" ry="209" stroke="#D9E3F7" strokeWidth="1.2" />

        <path d="M178 140 249 213" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M431 143 363 214" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M486 282 389 269" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M426 404 361 329" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M179 401 250 329" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />
        <path d="M125 278 222 268" stroke="url(#sihHeroStroke)" strokeWidth="2" strokeDasharray="5 7" />

        <g filter="url(#sihHeroShadow)">
          <rect x="221" y="198" width="170" height="144" rx="27" fill="white" stroke="#C9D7F2" />
          <rect x="244" y="222" width="122" height="18" rx="9" fill="#EAF0FF" />
          <path d="M248 258h116" stroke="#CFDAF1" strokeWidth="2" />
          <path d="M248 278h87" stroke="#CFDAF1" strokeWidth="2" />
          <path d="M248 298h104" stroke="#CFDAF1" strokeWidth="2" />
          <circle cx="263" cy="319" r="5" fill="#4B6FD8" />
          <path d="M276 319h76" stroke="#6F8BE1" strokeWidth="2" />
          <path d="M273 230h14" stroke="#3659BB" strokeWidth="2" />
          <path d="m280 224 7 6-7 6" stroke="#3659BB" strokeWidth="2" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="157" cy="126" r="42" fill="white" stroke="#CAD7F4" />
          <path d="M142 111c12 8 12 23 30 31" stroke="#3659BB" strokeWidth="2" />
          <path d="M172 111c-12 8-12 23-30 31" stroke="#3659BB" strokeWidth="2" />
          <path d="M148 118h18M147 129h20M149 138h16" stroke="#6F8BE1" strokeWidth="1.6" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="454" cy="126" r="42" fill="white" stroke="#CAD7F4" />
          <path d="M438 126h32" stroke="#3659BB" strokeWidth="2" />
          <path d="M454 110v32" stroke="#3659BB" strokeWidth="2" />
          <circle cx="454" cy="126" r="22" stroke="#6F8BE1" strokeWidth="1.6" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="508" cy="288" r="42" fill="white" stroke="#CAD7F4" />
          <rect x="493" y="268" width="30" height="40" rx="5" stroke="#3659BB" strokeWidth="2" />
          <path d="M499 289h4l2-5 4 10 3-6h6" stroke="#6F8BE1" strokeWidth="1.8" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="449" cy="421" r="42" fill="white" stroke="#CAD7F4" />
          <path d="M437 404h24l5 5v27h-29z" stroke="#3659BB" strokeWidth="2" />
          <path d="M461 404v7h7" stroke="#3659BB" strokeWidth="2" />
          <path d="M443 417h17M443 423h12" stroke="#6F8BE1" strokeWidth="1.7" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="162" cy="418" r="42" fill="white" stroke="#CAD7F4" />
          <path d="M145 433v-28h34v28" stroke="#3659BB" strokeWidth="2" />
          <path d="M157 398h10v17h-10z" stroke="#3659BB" strokeWidth="2" />
          <path d="M162 401v10M157 406h10" stroke="#6F8BE1" strokeWidth="1.7" />
        </g>

        <g filter="url(#sihHeroShadow)">
          <circle cx="106" cy="286" r="42" fill="white" stroke="#CAD7F4" />
          <path d="M106 266 121 272v11c0 10-6 17-15 22-9-5-15-12-15-22v-11z" stroke="#3659BB" strokeWidth="2" />
          <path d="m99 285 5 5 10-12" stroke="#6F8BE1" strokeWidth="2" />
        </g>

        <circle cx="518" cy="181" r="5" fill="#4B6FD8" opacity=".65" />
        <circle cx="95" cy="357" r="4" fill="#6F8BE1" opacity=".7" />
        <circle cx="374" cy="65" r="4" fill="#3659BB" opacity=".45" />
      </svg>
    </div>
  );
}

const sectors = [
  {
    icon: "pharma",
    title: "Pharmaceuticals",
    description:
      "Support multilingual drug programs across clinical development, regulatory submissions, labeling, pharmacovigilance, medical affairs, market access, and commercialization while maintaining terminology and product-language continuity across the lifecycle.",
    focus: "Clinical Development · Regulatory Submissions · Drug Labeling · Pharmacovigilance · Medical Affairs · Commercialization",
    action: "Pharmaceutical Translation",
    href: PHARMA_URL,
  },
  {
    icon: "biotech",
    title: "Biotechnology",
    description:
      "Translate highly specialized scientific and regulated content across research, preclinical development, biologics, genomics, cell and gene therapy, CMC, clinical programs, manufacturing, and global commercialization.",
    focus: "Research & Preclinical · Biologics · Genomics · Cell & Gene Therapy · Clinical Development · CMC · Regulatory Affairs",
    action: "Biotechnology Translation",
    href: BIOTECH_URL,
  },
  {
    icon: "meddevice",
    title: "Medical Devices",
    description:
      "Connect technical precision with usability and regulated product communication across IFUs, device labeling, technical documentation, software interfaces, training, quality content, regulatory documentation, and post-market updates.",
    focus: "IFUs · Device Labeling · Technical Documentation · Software & UI · Regulatory Content · Training · Post-Market",
    action: "Medical Device Translation",
    href: MEDICAL_DEVICE_URL,
  },
  {
    icon: "cro",
    title: "CROs & Clinical Research",
    description:
      "Coordinate multilingual clinical content across sponsors, CROs, investigators, sites, ethics committees, regulators, vendors, and participants with terminology and version-aware workflows built for global studies.",
    focus: "Study Startup · ICFs · Protocols · Patient Content · Site Documentation · eCOA · Amendments · Global Study Operations",
    action: "CRO Translation",
    href: CRO_URL,
  },
  {
    icon: "healthcare",
    title: "Healthcare & Hospitals",
    description:
      "Support clear multilingual communication between patients, clinicians, hospitals, health systems, and digital care environments across patient education, care instructions, clinical documentation, portals, telehealth, and training.",
    focus: "Patient Communication · EHR Content · Care Instructions · Patient Portals · Telehealth · Clinical Training",
    action: "Healthcare Translation",
    href: HEALTHCARE_URL,
  },
  {
    icon: "digitalhealth",
    title: "Digital Health & Healthcare Technology",
    description:
      "Localize software-driven healthcare experiences across digital therapeutics, medical software, mobile health applications, patient portals, eCOA systems, clinician dashboards, connected devices, and supporting product documentation.",
    focus: "Digital Health · SaMD · eHealth & mHealth · Patient Portals · eCOA · Clinical Software · Connected Health",
    action: "Digital Health Translation",
    href: DIGITAL_HEALTH_URL,
  },
  {
    icon: "publichealth",
    title: "Public Health, Regulatory & Government",
    description:
      "Provide specialized multilingual support for health authorities, public health organizations, government healthcare programs, policy teams, and related institutions communicating scientific, regulatory, compliance, and public-facing health information.",
    focus: "Health Authorities · Public Health · Policy · Regulatory Communication · Health Education · Global Programs",
    action: "Public Health & Government",
    href: PUBLIC_HEALTH_URL,
  },
];

const lifecycleStages = [
  {
    title: "Research & Discovery",
    description: "Scientific research, preclinical documentation, early terminology, technical collaboration, and emerging therapeutic concepts.",
  },
  {
    title: "Clinical Development",
    description: "Protocols, ICFs, investigator content, patient materials, eCOA, site documentation, amendments, and study communication.",
  },
  {
    title: "Regulatory Approval",
    description: "Submissions, health authority correspondence, controlled product information, labeling-related content, and market-specific updates.",
  },
  {
    title: "Launch & Market Access",
    description: "Labeling, packaging, medical affairs, training, digital experiences, patient education, market access, and launch communication.",
  },
  {
    title: "Post-Market & Safety",
    description: "Pharmacovigilance, safety communication, labeling revisions, product updates, software releases, and lifecycle maintenance.",
  },
];

const lifecycleSectors = [
  { name: "Pharmaceuticals", start: 1, end: 6, range: "Research through post-market and safety" },
  { name: "Biotechnology", start: 1, end: 6, range: "Research through post-market and commercialization" },
  { name: "Medical Devices", start: 1, end: 6, range: "Development through regulatory, launch, and post-market" },
  { name: "CROs & Clinical Research", start: 2, end: 4, range: "Clinical development through regulatory support" },
  { name: "Digital Health", start: 2, end: 6, range: "Clinical, regulatory, launch, and ongoing product updates" },
];

const contentRequirements = [
  {
    icon: "microscope",
    title: "Scientific & Research Content",
    body:
      "Research language can be highly specialized and still evolving. Biotechnology, genomics, cell and gene therapy, molecular biology, and other advanced fields require scientific understanding as well as linguistic judgment. Strong terminology governance early in development can provide a reliable foundation for downstream clinical, regulatory, manufacturing, and commercial content.",
  },
  {
    icon: "patient",
    title: "Clinical & Patient Content",
    body:
      "Clinical content must preserve scientific meaning while remaining appropriate for investigators, sites, study teams, and participants. Patient-facing materials add requirements around comprehension, cultural appropriateness, validation, and consistent communication across ICFs, eCOA, digital trial tools, patient education, and healthcare environments.",
  },
  {
    icon: "regulation",
    title: "Regulatory & Product Content",
    body:
      "Regulatory and product translation requires controlled terminology, source-to-target alignment, version management, and awareness of how translated content will be reviewed, reused, structured, or updated. Product information increasingly moves across documents, formats, systems, releases, and markets rather than remaining in isolated files.",
  },
  {
    icon: "megaphone",
    title: "Digital & Commercial Content",
    body:
      "Digital health platforms, medical software, patient applications, connected devices, training programs, medical communications, and commercial assets must work in context. Language needs to fit interfaces, workflows, graphics, instructional environments, and approved product terminology while preserving a coherent experience across markets.",
  },
];

const domains = [
  {
    title: "Clinical Development",
    body: "Study startup, protocols, informed consent, patient materials, eCOA, site documentation, clinical reports, and global study operations.",
    href: CLINICAL_DEVELOPMENT_URL,
  },
  {
    title: "Regulatory Affairs",
    body: "Submissions, health authority communication, compliance content, labeling updates, responses, and controlled regulatory documentation.",
    href: REGULATORY_AFFAIRS_URL,
  },
  {
    title: "Medical Affairs",
    body: "Scientific exchange, publications, congress materials, medical information, field medical resources, training, and professional education.",
    href: MEDICAL_AFFAIRS_URL,
  },
  {
    title: "Pharmacovigilance & Drug Safety",
    body: "Adverse-event content, safety narratives, aggregate reports, risk-management materials, safety communication, and post-market surveillance.",
    href: PHARMACOVIGILANCE_URL,
  },
  {
    title: "Genomics, Cell & Gene Therapy",
    body: "Scientific and clinical translation for genomics, molecular medicine, gene editing, cellular therapies, advanced therapeutics, and emerging terminology.",
    href: GENOMICS_URL,
  },
  {
    title: "Labeling, IFUs & Product Information",
    body: "Controlled translation for pharmaceutical labeling, medical device labeling, IFUs, packaging, patient information, warnings, and lifecycle revisions.",
    href: LABELING_URL,
  },
  {
    title: "Digital Health & Medical Software",
    body: "Localization for medical software, clinical applications, SaMD, patient portals, eCOA, healthcare interfaces, apps, and connected-health experiences.",
    href: SOFTWARE_URL,
  },
  {
    title: "Quality, Manufacturing & Training",
    body: "Multilingual support for SOPs, quality documentation, manufacturing content, work instructions, technical communication, and training programs.",
    href: SERVICES_URL,
  },
  {
    title: "Patient & Healthcare Communication",
    body: "Translation, localization, and validation for patient education, recruitment, consent, care information, digital engagement, and other patient-facing content.",
    href: PATIENT_URL,
  },
];

const organizations = [
  {
    icon: "microscope",
    title: "Research & Academic Institutions",
    body: "Multilingual support for international research collaboration, scientific communication, protocols, publications, presentations, ethics-related content, and global academic programs.",
  },
  {
    icon: "users",
    title: "Life Sciences Consulting Firms",
    body: "Translation support for organizations advising clients across regulatory strategy, clinical development, quality, market access, commercialization, due diligence, and lifecycle management.",
  },
  {
    icon: "building",
    title: "Health Authorities & Public Organizations",
    body: "Specialized language support for regulatory communication, public health programs, policies, guidance, health education, international programs, and other institutional content.",
  },
  {
    icon: "network",
    title: "Technology & Service Partners",
    body: "Localization and multilingual content support for clinical technology companies, health technology providers, medical communications organizations, platforms, and specialized life sciences service partners.",
  },
];

const workflows = [
  { title: "Clinical", text: "Studies, participants, sites, investigators, eCOA, and clinical operations" },
  { title: "Regulatory", text: "Submissions, authority communication, compliance, and controlled documentation" },
  { title: "Labeling", text: "Product information, IFUs, packaging, warnings, and lifecycle updates" },
  { title: "Safety", text: "Pharmacovigilance, adverse events, risk communication, and surveillance" },
  { title: "Medical Affairs", text: "Scientific exchange, publications, medical information, and education" },
  { title: "Digital", text: "Clinical platforms, patient portals, medical software, apps, and interfaces" },
  { title: "Training & Commercial", text: "Training, product education, market access, launch, and global communication" },
];

const aiWorkflow = [
  {
    title: "Professional Life Sciences Linguists",
    body: "Qualified native linguists are selected according to language, subject matter, content type, and target market.",
  },
  {
    title: "Terminology & Approved Content",
    body: "Glossaries, style guides, translation memory, product references, and approved translations establish the language foundation.",
  },
  {
    title: "Controlled AI Assistance",
    body: "SesenGPT and AI-assisted tools can support suitable drafting, consistency checking, terminology, comparison, and workflow efficiency.",
  },
  {
    title: "Structured Quality Review",
    body: "Professional editing, multilingual QA, terminology checks, formatting checks, and reviewer coordination support consistency and completeness.",
  },
  {
    title: "Expert Human Validation",
    body: "Professional human review remains central to meaning, nuance, regulatory context, patient readability, and final quality decisions.",
  },
];

const trustItems = [
  { icon: "shield", title: "Life Sciences Only", text: "Specialized multilingual workflows for regulated life sciences content." },
  { icon: "award", title: "ISO-Certified Processes", text: "ISO 17100 · ISO 9001 · ISO 13485" },
  { icon: "users", title: "Professional Native Medical Linguists", text: "Subject-matter expertise aligned to content and market." },
  { icon: "globe", title: "150+ Languages", text: "Global support across clinical, regulatory, device, healthcare, and digital content." },
  { icon: "lock", title: "Secure Enterprise Infrastructure", text: "AWS-hosted infrastructure for confidential multilingual workflows." },
];

const resourceLinks = [
  {
    title: "AI & Regulatory Insights",
    body: "Responsible AI workflows, validation, terminology intelligence, human review, and multilingual quality governance.",
    href: AI_INSIGHTS_URL,
  },
  {
    title: "Case Studies & Success Stories",
    body: "Examples spanning clinical research, regulatory submissions, labeling, medical devices, digital health, and AI-assisted workflows.",
    href: CASE_STUDIES_URL,
  },
  {
    title: "White Papers & E-Books",
    body: "In-depth guidance on life sciences translation strategy, regulated workflows, quality, validation, and enterprise multilingual operations.",
    href: WHITE_PAPERS_URL,
  },
  {
    title: "Glossaries & Style Guides",
    body: "Terminology resources for consistent pharmaceutical, biotechnology, medical device, CRO, healthcare, and patient-facing content.",
    href: GLOSSARIES_URL,
  },
];

const faqs = [
  {
    q: "What life sciences sectors does Sesen support?",
    a:
      "Sesen supports pharmaceutical companies, biotechnology organizations, medical device manufacturers, CROs and clinical research teams, hospitals and healthcare organizations, digital health and healthcare technology companies, public health organizations, regulatory and government-related teams, research institutions, and other organizations operating across the life sciences ecosystem.",
  },
  {
    q: "Does Sesen specialize exclusively in life sciences?",
    a:
      "Yes. Sesen focuses exclusively on life sciences translation and localization. This specialization allows our linguistic resources, terminology processes, quality controls, and technology-enabled workflows to be designed around clinical, regulatory, scientific, medical device, healthcare, patient-facing, and other regulated life sciences content.",
  },
  {
    q: "How does translation differ across pharmaceutical, biotechnology, and medical device content?",
    a:
      "Each sector has different content types, terminology, audiences, regulatory contexts, and lifecycle requirements. Pharmaceutical programs connect clinical research with submissions, labeling, pharmacovigilance, medical affairs, and commercialization. Biotechnology programs may involve rapidly evolving scientific terminology, advanced therapies, CMC, and preclinical research. Medical device translation combines technical and regulatory content with IFUs, labeling, software, usability information, training, and post-market communication.",
  },
  {
    q: "Can Sesen support content across the complete product lifecycle?",
    a:
      "Yes. Sesen supports multilingual content from research and clinical development through regulatory approval, labeling, launch, medical affairs, commercial communication, pharmacovigilance, and post-market updates. For recurring programs, terminology management, translation memory, reviewer coordination, version control, and approved-content reuse can help maintain consistency as documents and products evolve.",
  },
  {
    q: "Does Sesen support digital health and software-based medical products?",
    a:
      "Yes. Sesen localizes digital health platforms, clinical and medical software, patient portals, eHealth and mHealth applications, eCOA systems, telemedicine platforms, connected health experiences, device software, and supporting documentation. Localization can include translation, terminology management, UI adaptation, in-context linguistic review, software-string management, and multilingual QA depending on the product and workflow.",
  },
  {
    q: "How many languages does Sesen support?",
    a:
      "Sesen supports translation and localization across 150+ languages, with workflows designed for clinical, regulatory, labeling, medical device, healthcare, scientific, digital, and commercial life sciences content. Language availability and workflow requirements can be matched to the content type, market, language pair, and intended use.",
  },
];

export default function SesenIndustriesLifeSciencesSectorsHubWireframeV3() {
  return (
    <main className="sih-page">
      <style>{styles}</style>

      <section className="sih-hero" aria-labelledby="sih-page-title">
        <div className="sih-shell sih-hero-grid">
          <div className="sih-hero-copy">
            <p className="sih-eyebrow">Life Sciences Sectors</p>
            <h1 id="sih-page-title">Translation Expertise Across the Life Sciences Ecosystem</h1>
            <p className="sih-hero-lead">
              Sesen helps pharmaceutical, biotechnology, medical device, clinical research, healthcare,
              digital health, and public health organizations manage multilingual content across the life sciences lifecycle.
            </p>
            <p className="sih-hero-body">
              From scientific research and clinical development to regulatory approval, product launch,
              patient communication, and post-market operations, our specialized language workflows are built
              around the content, terminology, and quality requirements of global life sciences.
            </p>
            <div className="sih-button-row">
              <Button href={`${INDUSTRIES_URL}#sectors`}>EXPLORE LIFE SCIENCES SECTORS</Button>
              <Button href={LIFE_SCIENCES_URL} secondary>LIFE SCIENCES TRANSLATION SERVICES</Button>
            </div>
            <div className="sih-hero-proof" aria-label="Sesen life sciences capabilities">
              <span><Icon name="check" size={15} strokeWidth={2} /> Life sciences only</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> 150+ languages</span>
              <span><Icon name="check" size={15} strokeWidth={2} /> Expert human review</span>
            </div>
          </div>
          <HeroEcosystemArt />
        </div>
      </section>

      <section className="sih-section sih-overview" aria-labelledby="sih-overview-title">
        <div className="sih-shell sih-overview-grid">
          <div className="sih-overview-heading">
            <h2 id="sih-overview-title">One Translation Partner Across a Complex Life Sciences Landscape</h2>
          </div>
          <div className="sih-overview-copy">
            <p className="sih-lead-copy">
              Life sciences may be one industry, but its multilingual content is anything but uniform.
            </p>
            <p>
              A clinical trial informed consent form has different linguistic and usability requirements from a
              pharmaceutical submission. A medical device IFU must communicate instructions and safety information
              differently from a scientific manuscript. A patient portal requires a different localization workflow
              from pharmacovigilance documentation, while emerging biotechnology content can introduce terminology
              long before standardized translations exist.
            </p>
            <p>
              Sesen brings these requirements into one specialized life sciences language framework. We align
              professional linguistic expertise with the purpose, audience, regulatory context, content type, and
              target market of each project—helping global teams preserve meaning and terminology as information moves
              between research, clinical, regulatory, product, healthcare, and commercial environments.
            </p>
            <div className="sih-audience-line" aria-label="Life sciences content audiences">
              <span>Regulators</span><span>Investigators</span><span>Healthcare Professionals</span>
              <span>Patients</span><span>Product Users</span><span>Research Teams</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sih-section sih-sectors" id="sectors" aria-labelledby="sih-sectors-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-section-head-split">
            <div>
              <h2 id="sih-sectors-title">Explore Life Sciences Sectors</h2>
            </div>
            <p>
              Sesen supports organizations that research, develop, test, regulate, manufacture, deliver, and support
              medicines, devices, therapies, healthcare technologies, and patient care. Our sector specialization
              helps match multilingual workflows to the scientific, clinical, technical, regulatory, and patient-facing
              realities of each environment.
            </p>
          </header>

          <div className="sih-sector-directory">
            {sectors.map((sector) => (
              <article className="sih-sector-row" key={sector.title}>
                <div className="sih-sector-icon"><Icon name={sector.icon} size={24} strokeWidth={1.65} /></div>
                <div className="sih-sector-title"><h3>{sector.title}</h3></div>
                <div className="sih-sector-content">
                  <p>{sector.description}</p>
                  <p className="sih-sector-focus">{sector.focus}</p>
                </div>
                <div className="sih-sector-action">
                  <EditorialLink href={sector.href}>{sector.action}</EditorialLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-section sih-lifecycle" aria-labelledby="sih-lifecycle-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-lifecycle-head">
            <p className="sih-eyebrow">From Discovery to Post-Market</p>
            <h2 id="sih-lifecycle-title">Multilingual Content Across the Life Sciences Lifecycle</h2>
            <p>
              Scientific concepts developed during research can become clinical terminology. Clinical terminology can
              move into regulatory submissions. Approved language can later appear in labeling, training, digital
              products, medical communications, and safety updates. Sesen helps organizations maintain multilingual
              continuity as content evolves across the lifecycle.
            </p>
          </header>

          <div className="sih-lifecycle-stages" aria-label="Life sciences lifecycle stages">
            {lifecycleStages.map((stage, index) => (
              <article className="sih-lifecycle-stage" key={stage.title}>
                <div className="sih-stage-top">
                  <span className="sih-stage-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="sih-stage-node" aria-hidden="true" />
                </div>
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </article>
            ))}
          </div>

          <div className="sih-lifecycle-map" aria-label="How life sciences sectors intersect the lifecycle">
            <div className="sih-map-heading">
              <strong>Where Sectors Intersect the Lifecycle</strong>
              <span>A high-level view of where multilingual content commonly appears for each sector.</span>
            </div>
            <div className="sih-map-stage-labels" aria-hidden="true">
              <span>Research</span><span>Clinical</span><span>Regulatory</span><span>Launch</span><span>Post-Market</span>
            </div>
            {lifecycleSectors.map((item) => (
              <div className="sih-map-row" key={item.name}>
                <strong>{item.name}</strong>
                <div className="sih-map-track">
                  <span className="sih-map-bar" style={{ gridColumn: `${item.start} / ${item.end}` }} />
                </div>
                <span className="sih-map-mobile-range">{item.range}</span>
              </div>
            ))}
            <p className="sih-map-note">
              Healthcare delivery and public health span care, access, education, policy, and ongoing communication rather
              than a single product-development pathway, so they are represented elsewhere in the sector architecture.
            </p>
          </div>
        </div>
      </section>

      <section className="sih-section sih-requirements" aria-labelledby="sih-requirements-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-section-head-split">
            <div>
              <h2 id="sih-requirements-title">Different Sectors. Different Content Requirements.</h2>
            </div>
            <p>
              Specialized life sciences translation is not interchangeable across sectors. The intended audience,
              scientific maturity, regulatory context, potential risk, document function, and downstream use all
              influence how multilingual content should be translated, reviewed, validated, and maintained.
            </p>
          </header>

          <div className="sih-requirement-grid">
            {contentRequirements.map((item) => (
              <article className="sih-requirement-item" key={item.title}>
                <div className="sih-requirement-icon"><Icon name={item.icon} size={24} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-section sih-domains" aria-labelledby="sih-domains-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-domain-head">
            <h2 id="sih-domains-title">Specialized Expertise for Complex Life Sciences Content</h2>
            <p>
              Life sciences sectors overlap through specialized functions that carry content from one organization,
              department, or lifecycle stage to another. Explore deeper Sesen expertise across these interconnected domains.
            </p>
          </header>

          <div className="sih-domain-list">
            {domains.map((item) => (
              <article className="sih-domain-item" key={item.title}>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <EditorialLink href={item.href}>Explore {item.title}</EditorialLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-section sih-organizations" aria-labelledby="sih-organizations-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-section-head-split sih-on-dark">
            <div>
              <h2 id="sih-organizations-title">Supporting Organizations Across Life Sciences</h2>
            </div>
            <p>
              Not every organization advancing global health is a pharmaceutical, biotechnology, or medical device
              company. Sesen also supports the research institutions, advisors, public organizations, and technology
              partners that connect the broader life sciences ecosystem.
            </p>
          </header>

          <div className="sih-organization-grid">
            {organizations.map((item) => (
              <article className="sih-organization-item" key={item.title}>
                <div className="sih-organization-icon"><Icon name={item.icon} size={23} /></div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-section sih-workflows" aria-labelledby="sih-workflows-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-workflow-head">
            <h2 id="sih-workflows-title">Keep Multilingual Content Connected Across Teams and Markets</h2>
            <p>
              Life sciences content rarely stays inside one department. A term introduced in a protocol can later
              appear in a regulatory submission, label, medical information response, training module, patient website,
              software interface, or safety communication. Sesen helps preserve continuity as language moves across
              interconnected workflows.
            </p>
          </header>

          <div className="sih-workflow-rail" aria-label="Connected life sciences translation workflows">
            {workflows.map((item, index) => (
              <article className="sih-workflow-node" key={item.title}>
                <div className="sih-workflow-marker">
                  <span>{index + 1}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="sih-workflow-note">
            <Icon name="network" size={25} />
            <p>
              Approved terminology, translation memory, style guides, reference content, reviewer feedback, and
              version-aware workflows help preserve consistency across these connections instead of allowing every
              document or department to develop its own multilingual vocabulary.
            </p>
          </div>
        </div>
      </section>

      <section className="sih-section sih-human-ai" aria-labelledby="sih-human-ai-title">
        <div className="sih-shell sih-human-ai-grid">
          <div className="sih-human-ai-copy">
            <h2 id="sih-human-ai-title">Professional Expertise Supported by Smarter Translation Workflows</h2>
            <p className="sih-lead-copy">
              Life sciences teams increasingly have access to powerful AI and language technologies. The opportunity is
              not simply to automate more translation—it is to use technology intelligently within workflows that
              preserve accuracy, context, terminology, traceability, and professional accountability.
            </p>
            <p>
              Sesen combines professional life sciences linguists with translation memory, approved terminology,
              client references, automated quality checks, and controlled AI assistance to support efficient
              multilingual production without making unreviewed AI output the quality standard.
            </p>
            <EditorialLink href={AI_URL}>Explore AI-Enabled Life Sciences Translation</EditorialLink>
          </div>

          <div className="sih-ai-workflow" aria-label="Sesen AI-enabled human translation workflow">
            {aiWorkflow.map((item, index) => (
              <article className="sih-ai-step" key={item.title}>
                <span className="sih-ai-step-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-trust-band" aria-label="Sesen enterprise life sciences capabilities">
        <div className="sih-shell sih-trust-inner">
          <div className="sih-trust-heading">Built for Regulated Global Life Sciences Content</div>
          <div className="sih-trust-grid">
            {trustItems.map((item) => (
              <div className="sih-trust-item" key={item.title}>
                <Icon name={item.icon} size={21} strokeWidth={1.6} />
                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-section sih-services-bridge" aria-labelledby="sih-services-title">
        <div className="sih-shell sih-services-panel">
          <div className="sih-services-copy">
            <h2 id="sih-services-title">Looking for Life Sciences Translation Services?</h2>
            <p>
              This page helps you find Sesen expertise by life sciences sector. If you are looking for translation support
              by content type or service, explore our complete Life Sciences Translation Services—from clinical and
              regulatory content to labeling, safety, medical device documentation, software, training, and commercial programs.
            </p>
            <Button href={LIFE_SCIENCES_URL}>EXPLORE LIFE SCIENCES TRANSLATION SERVICES</Button>
          </div>
          <div className="sih-services-list" aria-label="Life sciences translation capabilities">
            <span>Clinical Trial Translation</span>
            <span>Regulatory Translation</span>
            <span>Drug & Device Labeling</span>
            <span>IFU Translation</span>
            <span>Pharmacovigilance</span>
            <span>Medical Affairs</span>
            <span>Patient Communication</span>
            <span>Digital Health & Software</span>
            <span>Training & Multimedia</span>
            <span>Global Commercial Content</span>
          </div>
        </div>
      </section>

      <section className="sih-section sih-resources" aria-labelledby="sih-resources-title">
        <div className="sih-shell">
          <header className="sih-section-head sih-section-head-split">
            <div>
              <h2 id="sih-resources-title">Life Sciences Translation Knowledge & Insights</h2>
            </div>
            <p>
              Explore practical guidance for clinical, regulatory, labeling, quality, AI-enabled, terminology, and
              multilingual content workflows. Sesen's resource ecosystem is designed to help life sciences teams plan
              global content with greater consistency, transparency, and control.
            </p>
          </header>

          <div className="sih-resource-layout">
            <article className="sih-resource-feature">
              <div className="sih-resource-feature-icon"><Icon name="book" size={28} /></div>
              <p className="sih-item-eyebrow">Featured Knowledge Hub</p>
              <h3>Clinical & Regulatory Knowledge</h3>
              <p>
                Practical guidance for clinical trial translation, regulatory submission readiness, labeling quality,
                terminology governance, AI-assisted review, and multilingual content workflows for regulated life sciences teams.
              </p>
              <EditorialLink href={CLINICAL_KNOWLEDGE_URL}>Explore Clinical & Regulatory Knowledge</EditorialLink>
            </article>

            <div className="sih-resource-list">
              {resourceLinks.map((item) => (
                <article className="sih-resource-row" key={item.title}>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                  <EditorialLink href={item.href}>Explore {item.title}</EditorialLink>
                </article>
              ))}
              <div className="sih-resource-all">
                <EditorialLink href={RESOURCES_URL}>Explore All Sesen Resources</EditorialLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sih-section sih-faq" aria-labelledby="sih-faq-title">
        <div className="sih-shell sih-faq-grid">
          <div className="sih-faq-intro">
            <h2 id="sih-faq-title">Life Sciences Sectors FAQs</h2>
            <p>
              Answers to common questions about Sesen's sector focus, lifecycle support, digital health capabilities,
              professional expertise, and global language coverage.
            </p>
            <EditorialLink href={LIFE_SCIENCES_URL}>Explore Life Sciences Translation Services</EditorialLink>
          </div>

          <div className="sih-faq-list">
            {faqs.map((item, index) => (
              <details className="sih-faq-item" key={item.q} open={index === 0}>
                <summary>
                  <span>{item.q}</span>
                  <span className="sih-faq-plus" aria-hidden="true">+</span>
                </summary>
                <div className="sih-faq-answer"><p>{item.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sih-final-cta" aria-labelledby="sih-final-title">
        <div className="sih-shell sih-final-grid">
          <div className="sih-final-copy">
            <h2 id="sih-final-title">Connect Your Life Sciences Content Across Languages and Markets</h2>
            <p>
              Whether you are preparing a clinical study, advancing a therapy through regulatory review, launching a
              medical device, expanding a digital health platform, communicating with patients, or managing an ongoing
              global content program, Sesen can help you build the right multilingual workflow.
            </p>
          </div>
          <div className="sih-final-actions">
            <Button href={CONTACT_SALES_URL}>CONTACT SALES</Button>
            <Button href={QUOTE_URL} secondary>REQUEST A QUOTE</Button>
          </div>
        </div>
      </section>
    </main>
  );
}

const styles = `
  .sih-page {
    --sih-brand: #4B6FD8;
    --sih-brand-dark: #3659BB;
    --sih-brand-deep: #253F8F;
    --sih-brand-mid: #6F8BE1;
    --sih-brand-soft: #EAF0FF;
    --sih-brand-pale: #F5F7FF;
    --sih-navy: #17264D;
    --sih-ink: #111827;
    --sih-slate: #46546D;
    --sih-muted: #68758B;
    --sih-line: #DDE4F2;
    --sih-line-soft: #E9EEF8;
    --sih-white: #FFFFFF;
    --sih-soft: #F7F9FD;
    --sih-shadow: 0 22px 60px rgba(31, 53, 102, 0.08);
    --sih-radius-lg: 28px;
    --sih-radius-md: 20px;
    width: 100%;
    overflow-x: clip;
    background: var(--sih-white);
    color: var(--sih-ink);
    font-family: Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 16px;
    line-height: 1.68;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  .sih-page,
  .sih-page * { box-sizing: border-box; }
  .sih-page * { min-width: 0; }
  .sih-page a { color: inherit; text-decoration: none; overflow-wrap: anywhere; }
  .sih-page h1,
  .sih-page h2,
  .sih-page h3,
  .sih-page p { margin-top: 0; }
  .sih-page h1,
  .sih-page h2,
  .sih-page h3 {
    color: var(--sih-navy);
    font-family: "Inter Tight", Inter, "Aptos", "Segoe UI", ui-sans-serif, system-ui, sans-serif;
    font-stretch: 100%;
    font-style: normal;
  }
  .sih-page h1 {
    margin-bottom: 18px;
    font-size: 48px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: -0.5px;
  }
  .sih-page h2 {
    margin-bottom: 22px;
    font-size: 36px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: normal;
  }
  .sih-page h3 {
    margin-bottom: 11px;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    letter-spacing: normal;
  }
  .sih-page p { color: var(--sih-slate); font-size: 16px; line-height: 1.72; }

  .sih-page a:focus-visible,
  .sih-page summary:focus-visible {
    outline: 3px solid rgba(75,111,216,.32);
    outline-offset: 3px;
  }

  .sih-shell { width: min(100%, 1280px); margin: 0 auto; padding-inline: 56px; }
  .sih-section { padding: 96px 0; }
  .sih-section-head { max-width: 820px; margin-bottom: 54px; }
  .sih-section-head > p:last-child { margin-bottom: 0; font-size: 18px; }
  .sih-section-head-split {
    max-width: none;
    display: grid;
    grid-template-columns: minmax(0,.9fr) minmax(0,1.1fr);
    gap: 82px;
    align-items: end;
  }
  .sih-section-head-split > p { margin-bottom: 2px; font-size: 17px; }

  .sih-eyebrow,
  .sih-item-eyebrow {
    margin-bottom: 16px !important;
    color: var(--sih-brand-dark) !important;
    font-size: 11px !important;
    font-weight: 700 !important;
    line-height: 1.35 !important;
    letter-spacing: .15em !important;
    text-transform: uppercase;
  }
  .sih-lead-copy { color: #293954 !important; font-size: 19px !important; line-height: 1.63 !important; }

  .sih-button-row { display: flex; flex-wrap: wrap; gap: 12px; }
  .sih-button {
    display: inline-flex;
    min-height: 50px;
    align-items: center;
    justify-content: center;
    gap: 11px;
    padding: 0 24px;
    border: 1px solid var(--sih-brand);
    border-radius: 999px;
    color: #FFFFFF !important;
    background: var(--sih-brand);
    box-shadow: 0 10px 24px rgba(75,111,216,.16);
    transition: background .18s ease, border-color .18s ease, transform .18s ease, box-shadow .18s ease;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: .035em;
    text-transform: uppercase;
  }
  .sih-button:hover { background: var(--sih-brand-dark); border-color: var(--sih-brand-dark); box-shadow: 0 12px 28px rgba(54,89,187,.20); }
  .sih-button-secondary { color: var(--sih-ink) !important; background: white; border-color: #C9D5EF; box-shadow: none; }
  .sih-button-secondary:hover { color: var(--sih-ink) !important; background: var(--sih-brand-soft); border-color: #B7C6E8; box-shadow: none; }
  .sih-button svg,
  .sih-editorial-link svg { transition: transform .2s ease; }
  .sih-button:hover svg,
  .sih-editorial-link:hover svg { transform: translateX(3px); }

  .sih-editorial-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    width: fit-content;
    color: var(--sih-brand-dark) !important;
    font-size: 14px;
    font-weight: 700;
    line-height: 1.5;
  }
  .sih-editorial-link:hover span { text-decoration: underline; text-underline-offset: 3px; }
  .sih-editorial-link-light { color: #FFFFFF !important; }

  .sih-hero {
    position: relative;
    overflow: hidden;
    padding: 92px 0 100px;
    background:
      radial-gradient(circle at 88% 10%, rgba(75,111,216,.11), transparent 30%),
      linear-gradient(180deg, #FFFFFF 0%, #FCFDFF 100%);
  }
  .sih-hero::after {
    content: "";
    position: absolute;
    right: -4%;
    top: 6%;
    width: 28%;
    height: 68%;
    opacity: .36;
    background-image: radial-gradient(circle, rgba(75,111,216,.20) 1px, transparent 1.25px);
    background-size: 14px 14px;
    mask-image: linear-gradient(110deg, transparent, #000 45%, transparent 97%);
    pointer-events: none;
  }
  .sih-hero-grid {
    display: grid;
    grid-template-columns: minmax(0,1.06fr) minmax(410px,.94fr);
    gap: 70px;
    align-items: center;
  }
  .sih-hero-copy { position: relative; z-index: 2; max-width: 720px; }
  .sih-hero-lead { max-width: 690px; margin-bottom: 17px !important; color: #293954 !important; font-size: 20px !important; line-height: 1.58 !important; }
  .sih-hero-body { max-width: 700px; margin-bottom: 31px !important; font-size: 17px !important; }
  .sih-hero-proof { display: flex; flex-wrap: wrap; gap: 12px 22px; margin-top: 27px; color: var(--sih-slate); font-size: 16px; font-weight: 600; }
  .sih-hero-proof span { display: inline-flex; align-items: center; gap: 7px; }
  .sih-hero-proof svg { color: var(--sih-brand); }
  .sih-hero-art { position: relative; z-index: 1; width: 100%; max-width: 570px; justify-self: end; }
  .sih-hero-art svg { display: block; width: 100%; height: auto; }

  .sih-overview { background: #FFFFFF; }
  .sih-overview-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 100px; align-items: start; }
  .sih-overview-heading { max-width: 500px; }
  .sih-overview-copy { max-width: 760px; }
  .sih-overview-copy p { margin-bottom: 18px; }
  .sih-audience-line { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 30px; padding-top: 25px; border-top: 1px solid var(--sih-line); }
  .sih-audience-line span { padding: 7px 11px; border-radius: 999px; color: #34435F; background: var(--sih-brand-pale); font-size: 13px; font-weight: 600; line-height: 1.35; }

  .sih-sectors { background: var(--sih-soft); }
  .sih-sector-directory { border-top: 1px solid #CCD7E9; }
  .sih-sector-row {
    display: grid;
    grid-template-columns: 54px 195px minmax(0,1fr) 235px;
    gap: 22px;
    align-items: start;
    padding: 31px 0 32px;
    border-bottom: 1px solid #CCD7E9;
    background: transparent;
  }
  .sih-sector-icon { display: grid; place-items: center; width: 44px; height: 44px; color: var(--sih-brand-dark); border: 1px solid #D5E0F4; border-radius: 13px; background: #FFFFFF; }
  .sih-sector-title h3 { margin: 7px 0 0; font-size: 24px; }
  .sih-sector-content p { margin-bottom: 9px; }
  .sih-sector-focus { margin-bottom: 0 !important; color: #59677F !important; font-size: 16px !important; font-weight: 600; line-height: 1.55 !important; }
  .sih-sector-action { display: flex; justify-content: flex-end; padding-top: 8px; }
  .sih-sector-action .sih-editorial-link { text-align: right; justify-content: flex-end; white-space: nowrap; }

  .sih-lifecycle { background: linear-gradient(180deg, #FFFFFF 0%, #F7F9FD 100%); }
  .sih-lifecycle-head { max-width: 880px; }
  .sih-lifecycle-stages { position: relative; display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 26px; margin-top: 58px; }
  .sih-lifecycle-stages::before { content: none; }
  .sih-lifecycle-stage { position: relative; padding-top: 49px; }
  .sih-lifecycle-stage:not(:last-child)::after { content: ""; position: absolute; z-index: 0; top: 18px; left: 9px; width: calc(100% + 26px); height: 2px; background: linear-gradient(90deg, #6F8BE1, #4B6FD8); }
  .sih-stage-top { position: absolute; z-index: 1; top: 0; left: 0; right: 0; height: 37px; display: flex; align-items: center; justify-content: space-between; }
  .sih-stage-number { position: absolute; left: 0; top: -14px; color: var(--sih-brand-dark); font-size: 11px; font-weight: 700; letter-spacing: .08em; }
  .sih-stage-node { position: absolute; left: 0; top: 9px; width: 18px; height: 18px; border: 5px solid #FFFFFF; border-radius: 50%; background: var(--sih-brand); box-shadow: 0 0 0 1px #AFC0E6; }
  .sih-lifecycle-stage h3 { min-height: 58px; font-size: 20px; }
  .sih-lifecycle-stage p { margin-bottom: 0; color: #59677F; font-size: 16px; line-height: 1.62; }

  .sih-lifecycle-map { margin-top: 66px; padding: 30px 32px 32px; border: 1px solid #D6E0F1; border-radius: var(--sih-radius-lg); background: #FFFFFF; box-shadow: 0 16px 42px rgba(31,53,102,.055); }
  .sih-map-heading { display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 25px; align-items: baseline; margin-bottom: 22px; }
  .sih-map-heading strong { color: var(--sih-navy); font-size: 17px; }
  .sih-map-heading span { color: var(--sih-muted); font-size: 14px; }
  .sih-map-stage-labels { display: grid; grid-template-columns: 190px repeat(5,minmax(0,1fr)); gap: 0; margin-bottom: 6px; padding-left: 0; }
  .sih-map-stage-labels::before { content: ""; }
  .sih-map-stage-labels span { padding: 0 8px 9px; color: #6A778D; font-size: 11px; font-weight: 700; letter-spacing: .04em; text-align: center; text-transform: uppercase; }
  .sih-map-row { display: grid; grid-template-columns: 190px minmax(0,1fr); gap: 0; align-items: center; min-height: 48px; border-top: 1px solid var(--sih-line-soft); }
  .sih-map-row > strong { padding-right: 18px; color: #33425E; font-size: 14px; font-weight: 650; }
  .sih-map-track { position: relative; display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); align-items: center; min-height: 48px; background-image: linear-gradient(to right, transparent calc(100% - 1px), #E7ECF5 calc(100% - 1px)); background-size: 20% 100%; }
  .sih-map-bar { height: 10px; margin-inline: 6px; border-radius: 999px; background: linear-gradient(90deg, #6F8BE1, #4B6FD8); box-shadow: 0 3px 10px rgba(75,111,216,.16); }
  .sih-map-mobile-range { display: none; }
  .sih-map-note { margin: 20px 0 0 !important; padding-top: 18px; border-top: 1px solid var(--sih-line-soft); color: #68758B !important; font-size: 14px !important; line-height: 1.6 !important; }

  .sih-requirements { background: #FFFFFF; }
  .sih-requirement-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid var(--sih-line); border-bottom: 1px solid var(--sih-line); }
  .sih-requirement-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 20px; padding: 34px 38px 36px 0; }
  .sih-requirement-item:nth-child(odd) { padding-right: 52px; border-right: 1px solid var(--sih-line); }
  .sih-requirement-item:nth-child(even) { padding-left: 42px; }
  .sih-requirement-item:nth-child(n+3) { border-top: 1px solid var(--sih-line); }
  .sih-requirement-icon { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 12px; color: var(--sih-brand-dark); background: var(--sih-brand-pale); }
  .sih-requirement-item p { margin-bottom: 0; }

  .sih-domains { background: var(--sih-soft); }
  .sih-domain-head { max-width: 800px; }
  .sih-domain-list { display: grid; grid-template-columns: repeat(3,minmax(0,1fr)); column-gap: 0; border-top: 1px solid #D5DEED; }
  .sih-domain-item { display: flex; flex-direction: column; align-items: flex-start; padding: 29px 30px 31px; border-bottom: 1px solid #D5DEED; }
  .sih-domain-item:nth-child(3n+1) { padding-left: 0; border-right: 1px solid #D5DEED; }
  .sih-domain-item:nth-child(3n+2) { border-right: 1px solid #D5DEED; }
  .sih-domain-item:nth-child(3n) { padding-right: 0; }
  .sih-domain-item h3 { font-size: 20px; }
  .sih-domain-item p { flex: 1; margin-bottom: 17px; color: #59677F; }
  .sih-domain-item .sih-editorial-link { margin-top: auto; font-size: 13px; }

  .sih-organizations { color: #FFFFFF; background: radial-gradient(circle at 82% 10%, rgba(255,255,255,.10), transparent 27%), linear-gradient(120deg, #17264D 0%, #253F8F 68%, #2E4F9D 100%); }
  .sih-on-dark h2 { color: #FFFFFF; }
  .sih-on-dark > p { color: #DCE4F7; }
  .sih-organization-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); border-top: 1px solid rgba(255,255,255,.18); }
  .sih-organization-item { display: grid; grid-template-columns: 48px minmax(0,1fr); gap: 20px; padding: 31px 34px 33px 0; border-bottom: 1px solid rgba(255,255,255,.18); }
  .sih-organization-item:nth-child(odd) { padding-right: 50px; border-right: 1px solid rgba(255,255,255,.18); }
  .sih-organization-item:nth-child(even) { padding-left: 42px; }
  .sih-organization-icon { display: grid; place-items: center; width: 43px; height: 43px; color: #D6E1FF; border: 1px solid rgba(255,255,255,.17); border-radius: 13px; background: rgba(255,255,255,.08); }
  .sih-organization-item h3 { color: #FFFFFF; }
  .sih-organization-item p { margin-bottom: 0; color: #D8E1F4; }

  .sih-workflows { background: #FFFFFF; }
  .sih-workflow-head { max-width: 900px; }
  .sih-workflow-rail { display: grid; grid-template-columns: repeat(7,minmax(0,1fr)); gap: 0; margin-top: 54px; border-top: 1px solid #C8D5EB; border-bottom: 1px solid #C8D5EB; }
  .sih-workflow-node { position: relative; padding: 31px 18px 30px 0; }
  .sih-workflow-node:not(:last-child) { border-right: 1px solid #E2E8F3; }
  .sih-workflow-node:not(:first-child) { padding-left: 18px; }
  .sih-workflow-marker { display: flex; align-items: center; gap: 8px; margin-bottom: 20px; }
  .sih-workflow-marker span { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #BFCDE8; border-radius: 50%; color: var(--sih-brand-dark); background: #FFFFFF; font-size: 12px; font-weight: 700; }
  .sih-workflow-node:not(:last-child) .sih-workflow-marker::after { content: ""; height: 1px; flex: 1; background: #BFCDE8; }
  .sih-workflow-node h3 { min-height: 53px; font-size: 18px; }
  .sih-workflow-node p { margin-bottom: 0; color: #617087; font-size: 16px; line-height: 1.6; }
  .sih-workflow-note { display: grid; grid-template-columns: 42px minmax(0,1fr); gap: 18px; align-items: start; max-width: 930px; margin-top: 38px; padding: 21px 24px; border-radius: 18px; background: var(--sih-brand-pale); }
  .sih-workflow-note svg { margin-top: 2px; color: var(--sih-brand-dark); }
  .sih-workflow-note p { margin-bottom: 0; color: #3F4F6B; }

  .sih-human-ai { background: linear-gradient(145deg, #F7F9FD 0%, #EEF3FF 100%); }
  .sih-human-ai-grid { display: grid; grid-template-columns: minmax(0,.82fr) minmax(0,1.18fr); gap: 82px; align-items: start; }
  .sih-human-ai-copy { max-width: 560px; padding-top: 5px; }
  .sih-human-ai-copy p { margin-bottom: 18px; }
  .sih-human-ai-copy .sih-editorial-link { margin-top: 6px; }
  .sih-ai-workflow { overflow: hidden; border: 1px solid #D4DFF1; border-radius: var(--sih-radius-lg); background: #FFFFFF; box-shadow: var(--sih-shadow); }
  .sih-ai-step { display: grid; grid-template-columns: 50px minmax(0,1fr); gap: 18px; padding: 24px 28px; }
  .sih-ai-step + .sih-ai-step { border-top: 1px solid var(--sih-line-soft); }
  .sih-ai-step-number { display: grid; place-items: center; width: 36px; height: 36px; border-radius: 50%; color: var(--sih-brand-dark); background: var(--sih-brand-soft); font-size: 11px; font-weight: 700; letter-spacing: .04em; }
  .sih-ai-step h3 { margin-bottom: 6px; font-size: 19px; }
  .sih-ai-step p { margin-bottom: 0; color: #5A6880; }

  .sih-trust-band { background: #FFFFFF; border-top: 1px solid var(--sih-line); border-bottom: 1px solid var(--sih-line); }
  .sih-trust-inner { padding-block: 27px 29px; }
  .sih-trust-heading { margin-bottom: 23px; color: var(--sih-navy); font-size: 17px; font-weight: 700; }
  .sih-trust-grid { display: grid; grid-template-columns: repeat(5,minmax(0,1fr)); gap: 25px; }
  .sih-trust-item { display: grid; grid-template-columns: 24px minmax(0,1fr); gap: 10px; align-items: start; }
  .sih-trust-item svg { color: var(--sih-brand-dark); margin-top: 1px; }
  .sih-trust-item strong { display: block; margin-bottom: 4px; color: #34435F; font-size: 14px; line-height: 1.45; }
  .sih-trust-item span { display: block; color: #66738A; font-size: 13px; line-height: 1.5; }

  .sih-services-bridge { background: #FFFFFF; }
  .sih-services-panel { display: grid; grid-template-columns: minmax(0,1.04fr) minmax(0,.96fr); gap: 70px; align-items: center; padding-top: 64px; padding-bottom: 64px; border-radius: var(--sih-radius-lg); background: linear-gradient(135deg, #F5F7FF 0%, #EAF0FF 100%); }
  .sih-services-copy { padding-left: 38px; }
  .sih-services-copy p { max-width: 650px; margin-bottom: 29px; font-size: 17px; }
  .sih-services-list { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 0; padding-right: 38px; border-top: 1px solid #CCD8ED; }
  .sih-services-list span { padding: 14px 14px 14px 0; border-bottom: 1px solid #CCD8ED; color: #3C4C68; font-size: 16px; font-weight: 650; line-height: 1.45; }
  .sih-services-list span:nth-child(even) { padding-left: 18px; border-left: 1px solid #CCD8ED; }

  .sih-resources { background: var(--sih-soft); }
  .sih-resource-layout { display: grid; grid-template-columns: minmax(0,.78fr) minmax(0,1.22fr); gap: 64px; align-items: stretch; }
  .sih-resource-feature { display: flex; flex-direction: column; padding: 36px; border: 1px solid #D6E0F1; border-radius: var(--sih-radius-lg); background: #FFFFFF; box-shadow: 0 16px 44px rgba(31,53,102,.055); }
  .sih-resource-feature-icon { display: grid; place-items: center; width: 50px; height: 50px; margin-bottom: 26px; border-radius: 14px; color: var(--sih-brand-dark); background: var(--sih-brand-soft); }
  .sih-resource-feature h3 { font-size: 27px; }
  .sih-resource-feature > p:not(.sih-item-eyebrow) { flex: 1; font-size: 17px; }
  .sih-resource-list { border-top: 1px solid #D2DCEB; }
  .sih-resource-row { display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 28px; align-items: center; padding: 24px 0 25px; border-bottom: 1px solid #D2DCEB; }
  .sih-resource-row h3 { margin-bottom: 6px; font-size: 20px; }
  .sih-resource-row p { margin-bottom: 0; color: #5D6B82; }
  .sih-resource-row .sih-editorial-link { white-space: nowrap; font-size: 13px; }
  .sih-resource-all { padding-top: 24px; }

  .sih-faq { background: #FFFFFF; }
  .sih-faq-grid { display: grid; grid-template-columns: minmax(0,.72fr) minmax(0,1.28fr); gap: 82px; align-items: start; }
  .sih-faq-intro { position: sticky; top: 28px; max-width: 430px; }
  .sih-faq-intro > p { margin-bottom: 25px; font-size: 17px; }
  .sih-faq-list { border-top: 1px solid #CCD6E8; }
  .sih-faq-item { border-bottom: 1px solid #CCD6E8; }
  .sih-faq-item summary { list-style: none; display: grid; grid-template-columns: minmax(0,1fr) auto; gap: 20px; align-items: center; min-height: 80px; padding: 22px 0; cursor: pointer; color: var(--sih-navy); font-size: 18px; font-weight: 650; line-height: 1.42; }
  .sih-faq-item summary::-webkit-details-marker { display: none; }
  .sih-faq-plus { display: grid; place-items: center; width: 30px; height: 30px; border: 1px solid #C9D4E8; border-radius: 50%; color: var(--sih-brand-dark); font-size: 19px; font-weight: 400; transition: transform .2s ease; }
  .sih-faq-item[open] .sih-faq-plus { transform: rotate(45deg); }
  .sih-faq-answer { padding: 0 46px 26px 0; }
  .sih-faq-answer p { margin-bottom: 0; }

  .sih-final-cta { position: relative; overflow: hidden; padding: 84px 0; color: #FFFFFF; background: radial-gradient(circle at 78% 20%, rgba(255,255,255,.12), transparent 24%), linear-gradient(108deg, #17264D 0%, #253F8F 58%, #2E4F9D 100%); }
  .sih-final-cta::after { content: ""; position: absolute; right: 0; top: 0; width: 32%; height: 100%; opacity: .38; background-image: radial-gradient(circle, rgba(255,255,255,.25) 1px, transparent 1.2px); background-size: 13px 13px; mask-image: linear-gradient(90deg, transparent, #000); }
  .sih-final-grid { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0,1.22fr) auto; gap: 65px; align-items: center; }
  .sih-final-copy h2 { max-width: 780px; margin-bottom: 17px; color: #FFFFFF; }
  .sih-final-copy p { max-width: 790px; margin-bottom: 0; color: #E6ECFA; font-size: 17px; }
  .sih-final-actions { display: grid; gap: 12px; min-width: 245px; }
  .sih-final-actions .sih-button { width: 100%; }

  @media (max-width: 1160px) {
    .sih-shell { padding-inline: 40px; }
    .sih-hero-grid { grid-template-columns: minmax(0,1.05fr) minmax(360px,.95fr); gap: 44px; }
    .sih-sector-row { grid-template-columns: 52px 170px minmax(0,1fr) 210px; gap: 18px; }
    .sih-sector-action .sih-editorial-link { white-space: normal; }
    .sih-domain-list { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sih-domain-item,
    .sih-domain-item:nth-child(3n+1),
    .sih-domain-item:nth-child(3n+2),
    .sih-domain-item:nth-child(3n) { padding: 28px 30px 30px; border-right: 0; }
    .sih-domain-item:nth-child(odd) { padding-left: 0; border-right: 1px solid #D5DEED; }
    .sih-domain-item:nth-child(even) { padding-right: 0; }
    .sih-workflow-node { padding-right: 13px; }
    .sih-workflow-node:not(:first-child) { padding-left: 13px; }
    .sih-workflow-node h3 { font-size: 17px; }
    .sih-trust-grid { gap: 18px; }
    .sih-services-panel { gap: 45px; }
  }

  @media (max-width: 980px) {
    .sih-shell { padding-inline: 30px; }
    .sih-section { padding: 80px 0; }
    .sih-hero { padding: 72px 0 82px; }
    .sih-hero-grid { grid-template-columns: 1fr; gap: 42px; }
    .sih-hero-copy { max-width: 780px; }
    .sih-hero-art { max-width: 540px; justify-self: center; }
    .sih-overview-grid { grid-template-columns: 1fr; gap: 22px; }
    .sih-overview-heading { max-width: 700px; }
    .sih-section-head-split { grid-template-columns: 1fr; gap: 10px; }
    .sih-sector-row { grid-template-columns: 48px 210px minmax(0,1fr); }
    .sih-sector-action { grid-column: 3; justify-content: flex-start; padding-top: 0; }
    .sih-sector-action .sih-editorial-link { text-align: left; justify-content: flex-start; }
    .sih-lifecycle-stages { grid-template-columns: 1fr; gap: 0; margin-top: 46px; padding-left: 24px; }
    .sih-lifecycle-stages::before { content: none; }
    .sih-lifecycle-stage { padding: 0 0 34px 34px; }
    .sih-lifecycle-stage:not(:last-child)::after { display: block; top: 11px; left: -15px; width: 2px; height: 100%; background: linear-gradient(180deg, #6F8BE1, #4B6FD8); }
    .sih-stage-top { left: -24px; top: -2px; width: 28px; height: 28px; }
    .sih-stage-number { display: none; }
    .sih-stage-node { left: 0; top: 4px; }
    .sih-lifecycle-stage h3 { min-height: 0; margin-bottom: 7px; }
    .sih-lifecycle-stage p { font-size: 16px; }
    .sih-organization-grid { grid-template-columns: 1fr; }
    .sih-organization-item:nth-child(odd),
    .sih-organization-item:nth-child(even) { padding: 28px 0; border-right: 0; }
    .sih-workflow-rail { grid-template-columns: repeat(2,minmax(0,1fr)); }
    .sih-workflow-node { padding: 28px 24px 28px 0; border-bottom: 1px solid #E2E8F3; }
    .sih-workflow-node:not(:first-child) { padding-left: 24px; }
    .sih-workflow-node:nth-child(even) { border-right: 0; }
    .sih-workflow-node:last-child { border-right: 0; border-bottom: 0; }
    .sih-workflow-node h3 { min-height: 0; }
    .sih-workflow-node:not(:last-child) .sih-workflow-marker::after { display: none; }
    .sih-human-ai-grid { grid-template-columns: 1fr; gap: 46px; }
    .sih-human-ai-copy { max-width: 760px; }
    .sih-trust-grid { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px 34px; }
    .sih-services-panel { grid-template-columns: 1fr; gap: 38px; padding-top: 52px; padding-bottom: 52px; }
    .sih-services-copy { padding: 0 34px; }
    .sih-services-list { padding: 0 34px; }
    .sih-resource-layout { grid-template-columns: 1fr; gap: 40px; }
    .sih-faq-grid { grid-template-columns: 1fr; gap: 44px; }
    .sih-faq-intro { position: static; max-width: 700px; }
    .sih-final-grid { grid-template-columns: 1fr; gap: 32px; }
    .sih-final-actions { grid-template-columns: repeat(2,minmax(0,1fr)); min-width: 0; max-width: 530px; }
  }

  @media (max-width: 760px) {
    .sih-domain-list { grid-template-columns: 1fr; }
    .sih-domain-item,
    .sih-domain-item:nth-child(3n+1),
    .sih-domain-item:nth-child(3n+2),
    .sih-domain-item:nth-child(3n),
    .sih-domain-item:nth-child(odd),
    .sih-domain-item:nth-child(even) { padding: 26px 0 27px; border-right: 0; }
    .sih-requirement-grid { grid-template-columns: 1fr; }
    .sih-requirement-item,
    .sih-requirement-item:nth-child(odd),
    .sih-requirement-item:nth-child(even) { padding: 28px 0; border-right: 0; border-top: 1px solid var(--sih-line); }
    .sih-requirement-item:first-child { border-top: 0; }
    .sih-map-heading { grid-template-columns: 1fr; gap: 4px; }
    .sih-map-stage-labels { display: none; }
    .sih-map-row { grid-template-columns: 1fr; gap: 6px; padding: 15px 0; }
    .sih-map-track { display: none; }
    .sih-map-mobile-range { display: block; color: #65728A; font-size: 14px; }
    .sih-resource-row { grid-template-columns: 1fr; gap: 10px; }
    .sih-resource-row .sih-editorial-link { white-space: normal; }
  }

  @media (max-width: 640px) {
    .sih-shell { padding-inline: 20px; }
    .sih-section { padding: 68px 0; }
    .sih-page h1 { font-size: 42px; }
    .sih-page h2 { font-size: 32px; }
    .sih-page h3 { font-size: 21px; }
    .sih-hero { padding: 58px 0 66px; }
    .sih-hero-lead { font-size: 18px !important; }
    .sih-button-row { display: grid; grid-template-columns: 1fr; }
    .sih-button { width: 100%; }
    .sih-hero-proof { display: grid; gap: 8px; }
    .sih-sector-row { grid-template-columns: 44px minmax(0,1fr); gap: 14px; padding: 25px 0 27px; }
    .sih-sector-title { align-self: center; }
    .sih-sector-title h3 { margin: 0; font-size: 22px; }
    .sih-sector-content,
    .sih-sector-action { grid-column: 1 / -1; }
    .sih-sector-content { padding-top: 3px; }
    .sih-lifecycle-map { padding: 24px 20px; border-radius: 21px; }
    .sih-requirement-item { grid-template-columns: 43px minmax(0,1fr); gap: 15px; }
    .sih-domain-item { grid-template-columns: 1fr; gap: 10px; }
    .sih-domain-item .sih-editorial-link { white-space: normal; }
    .sih-organization-item { grid-template-columns: 43px minmax(0,1fr); gap: 15px; }
    .sih-workflow-rail { grid-template-columns: 1fr; border-bottom: 0; }
    .sih-workflow-node,
    .sih-workflow-node:not(:first-child) { padding: 24px 0; border-right: 0; border-bottom: 1px solid #E2E8F3; }
    .sih-workflow-note { grid-template-columns: 34px minmax(0,1fr); padding: 19px 18px; }
    .sih-ai-step { grid-template-columns: 42px minmax(0,1fr); gap: 13px; padding: 21px 18px; }
    .sih-ai-step-number { width: 34px; height: 34px; }
    .sih-trust-grid { grid-template-columns: 1fr; gap: 18px; }
    .sih-services-panel { margin-inline: 0; padding-top: 42px; padding-bottom: 42px; border-radius: 22px; }
    .sih-services-copy { padding: 0 20px; }
    .sih-services-list { grid-template-columns: 1fr; padding: 0 20px; }
    .sih-services-list span:nth-child(even) { padding-left: 0; border-left: 0; }
    .sih-resource-feature { padding: 26px 22px; border-radius: 22px; }
    .sih-resource-feature h3 { font-size: 24px; }
    .sih-faq-item summary { min-height: 72px; font-size: 16px; }
    .sih-faq-answer { padding-right: 0; }
    .sih-final-cta { padding: 66px 0; }
    .sih-final-actions { grid-template-columns: 1fr; }
  }

  @media (max-width: 360px) {
    .sih-page h1 { font-size: 38px; }
    .sih-page h2 { font-size: 30px; }
    .sih-hero { padding-top: 54px; }
    .sih-sector-row { grid-template-columns: 40px minmax(0,1fr); gap: 12px; }
    .sih-sector-icon { width: 38px; height: 38px; border-radius: 11px; }
    .sih-requirement-item,
    .sih-organization-item { grid-template-columns: 40px minmax(0,1fr); gap: 12px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .sih-page *,
    .sih-page *::before,
    .sih-page *::after { scroll-behavior: auto !important; transition: none !important; }
  }
`;
