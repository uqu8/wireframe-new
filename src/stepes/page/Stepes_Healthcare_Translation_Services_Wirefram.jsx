import React, { useState } from "react";

const BASE = "https://www.stepes.com";
const QUOTE_URL = "https://app.stepes.com/quote/";

const Arrow = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="m5 12 4 4L19 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Icon = ({ name }) => {
  const common = { stroke: "currentColor", strokeWidth: 1.65, strokeLinecap: "round", strokeLinejoin: "round" };
  const paths = {
    hospital: <><path d="M4 21V8h16v13M9 8V3h6v5M8 13h2m4 0h2M8 17h2m4 0h2M11 21v-4h2v4" {...common} /></>,
    clinic: <><path d="M5 21V5h14v16M9 9h6m-3-3v6M8 15h2m4 0h2M10 21v-3h4v3" {...common} /></>,
    community: <><path d="M12 21s7-3.5 7-10V5l-7-2-7 2v6c0 6.5 7 10 7 10Z" {...common} /><path d="M8.5 11.5h7M12 8v7" {...common} /></>,
    heart: <><path d="M20.8 4.6a5.4 5.4 0 0 0-7.6 0L12 5.8l-1.2-1.2a5.4 5.4 0 0 0-7.6 7.6L12 21l8.8-8.8a5.4 5.4 0 0 0 0-7.6Z" {...common} /></>,
    home: <><path d="m3 11 9-8 9 8M5 10v11h14V10M9 21v-6h6v6" {...common} /></>,
    pharmacy: <><path d="M7 3h10v4H7zM6 7h12v14H6z" {...common} /><path d="M9 13h6m-3-3v6" {...common} /></>,
    digital: <><rect x="5" y="2" width="14" height="20" rx="2" {...common} /><path d="M9 6h6m-5 12h4M9 11h6m-6 3h4" {...common} /></>,
    clarity: <><path d="M4 4h16v12H8l-4 4V4Z" {...common} /><path d="M8 8h8m-8 4h5" {...common} /></>,
    terminology: <><path d="M4 5h16M4 12h10M4 19h16" {...common} /><path d="M18 9v6m-3-3h6" {...common} /></>,
    qa: <><path d="M9 11l2 2 4-4" {...common} /><circle cx="12" cy="12" r="9" {...common} /></>,
    security: <><rect x="5" y="10" width="14" height="11" rx="2" {...common} /><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3" {...common} /></>,
    globe: <><circle cx="12" cy="12" r="9" {...common} /><path d="M3 12h18M12 3c2.4 2.5 3.6 5.5 3.6 9S14.4 18.5 12 21M12 3c-2.4 2.5-3.6 5.5-3.6 9S9.6 18.5 12 21" {...common} /></>,
    people: <><circle cx="9" cy="8" r="3" {...common} /><path d="M3.5 20c.6-4 2.5-6 5.5-6s4.9 2 5.5 6M17 9a2.5 2.5 0 1 1 0 5M16 15c2.5.2 4 1.8 4.5 5" {...common} /></>,
    workflow: <><circle cx="6" cy="6" r="2" {...common} /><circle cx="18" cy="12" r="2" {...common} /><circle cx="6" cy="18" r="2" {...common} /><path d="M8 6h4a6 6 0 0 1 6 6M16 12h-4a6 6 0 0 0-6 6" {...common} /></>,
    document: <><path d="M6 2h8l4 4v16H6z" {...common} /><path d="M14 2v5h5M9 12h6m-6 4h6" {...common} /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" {...common} /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" {...common} /></>,
    speed: <><path d="M5 19a9 9 0 1 1 14 0" {...common} /><path d="m12 12 5-3M3 15h3m12 0h3M12 3v3" {...common} /></>,
  };
  return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">{paths[name] || paths.globe}</svg>;
};

function HealthcareHeroArt() {
  return (
    <svg className="hero-art-svg" viewBox="0 0 620 520" fill="none" role="img" aria-label="Multilingual healthcare communication connecting patients, clinicians, and digital care">
      <defs>
        <linearGradient id="heroBlush" x1="70" y1="80" x2="525" y2="475" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDF2F7" />
          <stop offset="1" stopColor="#FFF" />
        </linearGradient>
      </defs>
      <circle cx="310" cy="258" r="228" fill="url(#heroBlush)" />
      <path d="M80 414c70-26 126-25 178 2 54 28 113 29 178 2 39-16 73-17 104-6" stroke="#D7DCE3" strokeWidth="2" strokeLinecap="round" />
      <path d="M183 361V205h250v156" stroke="#596271" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M211 205v-58h194v58" stroke="#596271" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M276 147v-35h64v35M295 129h26M308 116v26" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M221 243h42v38h-42zM284 243h49v38h-49zM354 243h49v38h-49zM221 302h42v38h-42zM354 302h49v38h-49z" stroke="#7B8492" strokeWidth="2.4" />
      <path d="M286 361v-61h46v61" stroke="#596271" strokeWidth="3" />
      <path d="M309 300v61" stroke="#D7DCE3" strokeWidth="2" />
      <circle cx="154" cy="251" r="31" fill="#fff" stroke="#7B8492" strokeWidth="2.4" />
      <path d="M142 252c5 7 10 10 13 10 4 0 9-4 14-12M143 243h22" stroke="#596271" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M119 347c4-42 16-65 35-65 19 0 31 23 35 65" stroke="#596271" strokeWidth="3" strokeLinecap="round" />
      <path d="M126 346h57" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <circle cx="462" cy="249" r="30" fill="#fff" stroke="#7B8492" strokeWidth="2.4" />
      <path d="M451 251c4 6 8 9 12 9 4 0 8-3 12-9M451 242h23" stroke="#596271" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M430 347c4-42 15-65 33-65 18 0 29 23 33 65" stroke="#596271" strokeWidth="3" strokeLinecap="round" />
      <path d="M438 346h51" stroke="#C11D63" strokeWidth="3" strokeLinecap="round" />
      <path d="M463 282v33m-13-17h26" stroke="#7B8492" strokeWidth="2.4" strokeLinecap="round" />
      <rect x="65" y="118" width="139" height="78" rx="20" fill="#fff" stroke="#D7DCE3" strokeWidth="2" />
      <path d="M92 145h72M92 165h45" stroke="#7B8492" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M177 157c-7 0-13-6-13-13s6-13 13-13 13 6 13 13c0 11-13 22-13 22s-13-11-13-22" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="177" cy="144" r="3" fill="#C11D63" />
      <rect x="417" y="93" width="139" height="93" rx="22" fill="#fff" stroke="#D7DCE3" strokeWidth="2" />
      <path d="M445 122h83M445 143h60M445 164h41" stroke="#7B8492" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M437 195 420 214l2-25" fill="#fff" stroke="#D7DCE3" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="89" cy="405" r="24" fill="#fff" stroke="#D7DCE3" strokeWidth="2" />
      <path d="M78 405h22M89 394v22" stroke="#C11D63" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="531" cy="392" r="31" fill="#fff" stroke="#D7DCE3" strokeWidth="2" />
      <circle cx="531" cy="392" r="15" stroke="#7B8492" strokeWidth="2" />
      <path d="M516 392h30M531 377c4 4 6 9 6 15s-2 11-6 15M531 377c-4 4-6 9-6 15s2 11 6 15" stroke="#7B8492" strokeWidth="1.8" />
      <path d="M204 147c41-55 106-80 175-66M441 205c41 21 67 49 80 84M192 400c41 48 103 70 165 61" stroke="#C11D63" strokeWidth="2" strokeDasharray="5 9" strokeLinecap="round" />
      <circle cx="204" cy="147" r="5" fill="#C11D63" /><circle cx="441" cy="205" r="5" fill="#C11D63" /><circle cx="357" cy="461" r="5" fill="#C11D63" />
    </svg>
  );
}

function TeamPhotoPlaceholder() {
  return (
    <div className="team-photo-placeholder" role="img" aria-label="Placeholder for the Stepes four-person team photo">
      {/* Leo: replace this placeholder with the approved Stepes four-person team photo. */}
      <div className="team-photo-placeholder-inner">
        <svg width="42" height="42" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="9" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m5.5 17 4.3-4 3.1 2.8 2.3-2 3.3 3.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="team-photo-label">Stepes Team Photo</span>
        <span className="team-photo-subtext">Four-person team image placeholder</span>
      </div>
    </div>
  );
}

function CTAButton({ href, children, secondary = false }) {
  return (
    <a className={secondary ? "btn btn-secondary" : "btn btn-primary"} href={href}>
      <span>{children}</span><Arrow />
    </a>
  );
}

function TextLink({ href, children }) {
  return <a className="text-link" href={href}><span>{children}</span><Arrow size={17} /></a>;
}

function SectionIntro({ eyebrow, title, children, align = "left", dark = false }) {
  return (
    <div className={`section-intro ${align === "center" ? "center" : ""}`}>
      {eyebrow && <p className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-lead">{children}</p>}
    </div>
  );
}

const journey = [
  {
    title: "Access and Registration",
    description: "Help patients begin their care experience with information in the language they understand best.",
    items: ["Appointment and scheduling communications", "Registration and intake forms", "Patient rights and responsibilities", "Eligibility and financial-assistance information", "Facility signage and wayfinding", "Email and SMS reminders"],
  },
  {
    title: "Diagnosis and Treatment",
    description: "Communicate diagnoses, procedures, treatment options, and care requirements with accurate, audience-appropriate language.",
    items: ["Diagnostic and procedure information", "Informed consent materials", "Medication and pharmacy instructions", "Treatment and care plans", "Preparation instructions", "Patient education materials"],
  },
  {
    title: "Discharge and Continuing Care",
    description: "Support patients after a visit, procedure, or hospital stay with clear next-step information.",
    items: ["Discharge and aftercare instructions", "Home-care guidance", "Referral information", "Rehabilitation materials", "Chronic-care management content", "Follow-up communications"],
  },
  {
    title: "Digital Engagement",
    description: "Give multilingual patients a consistent experience across the digital systems they use to manage their care.",
    items: ["Patient portals", "Healthcare websites", "Mobile health applications", "Telehealth platforms", "Secure patient messages", "Digital intake tools"],
  },
];

const organizations = [
  ["hospital", "Hospitals and Health Systems", "Coordinate multilingual communication across departments, facilities, digital platforms, and patient populations."],
  ["clinic", "Clinics and Outpatient Networks", "Translate registration, care instructions, referrals, education, scheduling, and follow-up content."],
  ["community", "Community and Public Health", "Reach multilingual communities with prevention, screening, emergency, and wellness information."],
  ["heart", "Behavioral Health Providers", "Handle sensitive assessments, treatment information, education, and care-coordination content with appropriate tone."],
  ["home", "Home Health and Senior Care", "Support patients, caregivers, and families with care plans, safety materials, and continuing-care communication."],
  ["pharmacy", "Pharmacies and Laboratories", "Translate medication information, test instructions, specimen guidance, safety information, and patient notices."],
  ["digital", "Digital Health and Virtual Care", "Localize applications, portals, telehealth interfaces, notifications, and connected-care experiences."],
];

const contentGroups = [
  {
    title: "Patient-Facing Content",
    description: "Materials that help patients access services, understand their care, and follow clinical instructions.",
    items: ["Patient education materials", "Intake and registration forms", "Informed consent documents", "Treatment and care plans", "Medication instructions", "Diagnostic and procedure information", "Discharge and aftercare instructions", "Rights and grievance information", "Patient surveys and assessments"],
  },
  {
    title: "Clinical and Operational Content",
    description: "Multilingual resources for healthcare teams, facilities, quality programs, and community outreach.",
    items: ["Clinical policies and procedures", "Care protocols and workflows", "Staff training and onboarding", "Health and safety materials", "Quality-management documentation", "Standard operating procedures", "Emergency response materials", "Public health communications", "Facility information"],
  },
  {
    title: "Digital Healthcare Content",
    description: "Localized experiences across the platforms patients and healthcare teams use every day.",
    items: ["Patient portals", "Healthcare websites", "Mobile health applications", "Telehealth platforms", "Digital intake forms", "Automated reminders", "Secure messages", "Chatbots and virtual assistants", "Multimedia patient education"],
  },
];

const workflowTiers = [
  ["workflow", "High-Volume Operational Content", "AI-assisted translation, translation memory, terminology enforcement, professional post-editing, and automated QA for suitable recurring content."],
  ["people", "Patient-Facing Communication", "Healthcare-specialized translation or thorough human post-editing, terminology review, linguistic QA, and final-format validation."],
  ["security", "Critical or Complex Content", "Qualified human translation, independent linguistic review, controlled terminology, and documented quality stages for higher-risk materials."],
  ["digital", "Healthcare Software and Interfaces", "Protected resource-file processing, interface translation, character-limit management, RTL validation, and functional linguistic QA."],
];

const qualityItems = [
  ["people", "Healthcare-Specialized Language Teams", "Translators and reviewers are selected according to language pair, content type, subject matter, audience, and quality requirements."],
  ["terminology", "Terminology Management", "Customer glossaries keep medical terms, patient-facing expressions, acronyms, facility names, warnings, and brand language consistent."],
  ["layers", "Translation Memory", "Approved translations are reused across recurring content to improve consistency, speed, and cost efficiency."],
  ["document", "Healthcare Style Guides", "Multilingual guidance defines tone, reading level, inclusive language, abbreviations, dates, measurements, and brand voice."],
  ["qa", "Automated Quality Assurance", "Checks identify number discrepancies, terminology deviations, missing text, tag errors, formatting changes, and untranslated content."],
  ["clarity", "Human Linguistic Review", "Professional reviewers evaluate meaning, fluency, terminology, completeness, tone, and audience suitability."],
];

const chooseItems = [
  ["people", "Healthcare-Specialized Teams", "Language professionals are assigned according to the healthcare subject, content type, audience, and project requirements."],
  ["workflow", "AI-Powered, Human-Governed Workflows", "AI accelerates suitable content while qualified professionals govern terminology, context, patient clarity, and quality."],
  ["digital", "Documents and Digital Experiences", "One coordinated program can support forms, portals, apps, messages, multimedia, training, and operational content."],
  ["layers", "Centralized Language Assets", "Glossaries, translation memories, style guides, and approved translations support consistency across every channel."],
  ["speed", "Scalable Multilingual Production", "Stepes supports individual documents, urgent requests, multilingual launches, recurring updates, and ongoing programs."],
  ["qa", "In-Context Quality Assurance", "Translations can be reviewed in final layouts and interfaces to identify issues hidden in isolated bilingual text."],
  ["security", "Secure Online Collaboration", "Coordinate project intake, files, reviews, approvals, and delivery through controlled online workflows."],
  ["globe", "100+ Languages", "Support healthcare communication across major global languages, regional variants, and right-to-left markets."],
];

const programSteps = [
  ["Assess the Content", "Identify the audience, languages, intended use, complexity, privacy needs, and appropriate review level."],
  ["Prepare Terminology and Files", "Import approved glossaries and translation memory, identify protected content, and prepare source files."],
  ["Select the Workflow", "Choose the right combination of AI, professional translation, post-editing, independent review, formatting, and in-context QA."],
  ["Translate and Review", "Assign healthcare-specialized linguists and apply approved terminology, style, and quality requirements."],
  ["Validate the Final Content", "Review documents, forms, applications, and digital experiences in their final or near-final context."],
  ["Preserve Approved Language Assets", "Store approved terminology and translations for future updates, related materials, and recurring healthcare content."],
];

const related = [
  ["Medical Translation Services", "Specialized translation for medical documents and broader healthcare content.", `${BASE}/medical-translation-services/`],
  ["Medical Interpretation Services", "Real-time communication for appointments, consultations, procedures, and virtual care.", `${BASE}/medical-interpretation-services/`],
  ["Digital Health Translation", "Localization for patient applications, connected-care platforms, websites, and portals.", `${BASE}/digital-health-translation/`],
  ["Telehealth Translation Services", "Multilingual interfaces, appointment communications, support resources, and virtual-care content.", `${BASE}/telehealth-translation-services/`],
  ["Informed Consent Form Translation", "Controlled terminology and qualified review for clear, accurate consent documentation.", `${BASE}/informed-consent-form-translation-services/`],
  ["Insurance Translation Services", "Member communications, benefits, coverage, claims, policies, and insurance portals.", `${BASE}/insurance-translation-services/`],
  ["Life Sciences Translation Services", "Pharmaceutical, biotechnology, clinical research, regulatory, and scientific content.", `${BASE}/life-sciences-translation-services/`],
  ["Medical Device Translation Services", "IFUs, labeling, software, technical documentation, packaging, and regulatory content.", `${BASE}/medical-device-translation-services/`],
];

const faqs = [
  ["What is healthcare translation?", "Healthcare translation is the translation and localization of written, recorded, and digital content used to deliver healthcare services and communicate with patients. It includes patient education, hospital forms, clinical and administrative documents, discharge instructions, websites, portals, applications, telehealth platforms, staff training, and public health communications."],
  ["What is the difference between healthcare translation and medical translation?", "Healthcare translation centers on care delivery, patient communication, hospital and clinic operations, language access, community health, and digital patient experiences. Medical translation is a broader specialized service that can also include scientific, technical, pharmaceutical, regulatory, and medical-device content."],
  ["What healthcare documents can Stepes translate?", "Stepes translates patient-facing, clinical, administrative, operational, educational, and digital healthcare content, including intake forms, consent documents, patient education, care plans, medication instructions, discharge information, policies, staff training, websites, portals, applications, notifications, and public health materials."],
  ["What is the difference between healthcare translation and medical interpreting?", "Translation supports written, recorded, and digital content. Interpreting supports live spoken or signed communication during appointments, consultations, procedures, admissions, discharge discussions, telehealth visits, and other patient-provider interactions."],
  ["Does Stepes use AI for healthcare translation?", "Yes. Stepes uses AI within a controlled, risk-based translation model. Suitable content may use AI-assisted translation followed by professional review, while critical or complex content may require qualified human translation and an independent linguistic review."],
  ["When should healthcare content receive independent human review?", "Independent review should be considered when complexity, sensitivity, patient rights, clinical meaning, or potential risk calls for an additional safeguard. Examples include informed consent, complex treatment information, safety instructions, and high-impact patient communications."],
  ["How does Stepes maintain consistent medical terminology?", "Stepes uses multilingual glossaries, translation memory, style guides, terminology checks, automated QA, and professional reviewer oversight. Approved terminology and translations can be reused across departments, facilities, documents, portals, and applications."],
  ["Can Stepes translate patient portals and healthcare applications?", "Yes. Services can include resource-file processing, interface translation, placeholder protection, character-limit adaptation, screenshot review, right-to-left support, and functional linguistic QA for portals, mobile apps, websites, telehealth systems, notifications, and digital intake tools."],
  ["How does Stepes protect confidential healthcare information?", "Stepes can configure security, access, confidentiality, and content-handling controls according to the project, including secure file transfer, encrypted transmission, controlled permissions, confidentiality agreements, approved linguist access, secure workspaces, and PHI-aware procedures."],
  ["Can Stepes support urgent or high-volume healthcare translation?", "Yes. Stepes supports urgent requests, large multilingual projects, recurring updates, and enterprise healthcare translation programs. Schedules depend on content volume, languages, complexity, source-file readiness, review stages, formatting, and digital testing requirements."],
  ["Which healthcare languages does Stepes support?", "Stepes supports more than 100 languages, including Spanish, Chinese, Vietnamese, Arabic, Korean, Russian, Portuguese, French, Haitian Creole, Tagalog, Polish, Urdu, Punjabi, Japanese, and many others. Regional variants and country-specific terminology can be addressed for the intended audience."],
  ["What does Stepes need to prepare a quote?", "An accurate quotation typically requires source files or representative samples, source and target languages, content volume, intended audience and use, delivery date, file formats, review requirements, formatting or testing needs, and any security or confidentiality requirements."],
];

function FAQItem({ question, answer, open, onClick, id }) {
  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={open} aria-controls={`faq-${id}`}>
        <span>{question}</span>
        <span className="faq-plus" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div id={`faq-${id}`} className="faq-answer" hidden={!open}>
        <p>{answer}</p>
      </div>
    </div>
  );
}

export default function HealthcareTranslationServicesWireframe() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main className="page-shell">
      <style>{`
        :root {
          --magenta: #C11D63;
          --magenta-dark: #A71954;
          --magenta-deep: #7A1542;
          --blush: #FDF2F7;
          --pink-light: #F2A7C6;
          --ink: #151925;
          --text: #3F4857;
          --muted: #667085;
          --line: #E2E6EC;
          --soft: #F7F8FA;
          --dark: #171A22;
          --white: #FFFFFF;
        }
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #fff; color: var(--ink); font-family: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; }
        a { color: inherit; }
        button, a { -webkit-tap-highlight-color: transparent; }
        .page-shell { overflow-x: hidden; background: #fff; }
        .container { width: min(1280px, calc(100% - 112px)); margin: 0 auto; }
        .section { padding: 96px 0; }
        .section-dense { padding: 80px 0; }
        .soft-section { background: var(--soft); }
        .blush-section { background: linear-gradient(180deg, #FFF 0%, var(--blush) 100%); }
        .dark-section { background: var(--dark); color: #fff; }
        h1, h2, h3, p { margin-top: 0; overflow-wrap: anywhere; }
        h1, h2, h3 { font-weight: 600; letter-spacing: -0.025em; }
        h1 { font-size: 48px; line-height: 1.08; margin-bottom: 24px; max-width: 700px; }
        h2 { font-size: 36px; line-height: 1.16; margin-bottom: 22px; }
        h3 { font-size: 24px; line-height: 1.25; margin-bottom: 12px; }
        p, li { font-size: 16px; line-height: 1.7; color: var(--text); }
        .dark-section p, .dark-section li { color: #D9DEE7; }
        .body-large { font-size: 18px; line-height: 1.68; }
        .eyebrow { margin: 0 0 14px; color: var(--magenta) !important; font-size: 11px !important; line-height: 1.35 !important; font-weight: 600 !important; letter-spacing: .17em !important; text-transform: uppercase; }
        .eyebrow-dark { color: var(--pink-light) !important; }
        .section-intro { max-width: 800px; margin-bottom: 48px; }
        .section-intro.center { text-align: center; margin-left: auto; margin-right: auto; }
        .section-intro h2 { max-width: 760px; }
        .section-intro.center h2, .section-intro.center .section-lead { margin-left: auto; margin-right: auto; }
        .section-lead { font-size: 18px; line-height: 1.68; max-width: 800px; margin-bottom: 0; }
        .btn-row { display: flex; gap: 14px; flex-wrap: wrap; }
        .btn { min-height: 50px; max-width: 100%; padding: 0 24px; border-radius: 999px; display: inline-flex; align-items: center; justify-content: center; gap: 10px; font-size: 16px; font-weight: 600; text-decoration: none; border: 1px solid transparent; transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease; }
        .btn-primary, .btn-primary:link, .btn-primary:visited, .btn-primary:hover, .btn-primary:active, .btn-primary:focus, .btn-primary:focus-visible { background: var(--magenta); color: #fff !important; }
        .btn-primary *, .btn-primary svg, .btn-primary path { color: #fff !important; stroke: #fff !important; }
        .btn-primary:hover { background: var(--magenta-dark); transform: translateY(-1px); box-shadow: 0 10px 24px rgba(193,29,99,.18); }
        .btn-primary:focus-visible, .btn-secondary:focus-visible, .text-link:focus-visible, .faq-question:focus-visible { outline: 3px solid rgba(193,29,99,.22); outline-offset: 3px; }
        .btn-secondary { background: #fff; color: var(--ink); border-color: #D4D9E1; }
        .btn-secondary:hover { border-color: #B9C0CB; transform: translateY(-1px); }
        .text-link { color: var(--magenta); max-width: 100%; display: inline-flex; align-items: center; gap: 8px; font-size: 16px; font-weight: 600; text-decoration: none; min-height: 44px; }
        .text-link span { min-width: 0; overflow-wrap: anywhere; }
        .text-link svg { flex: 0 0 auto; transition: transform .2s ease; }
        .text-link:hover svg { transform: translateX(3px); }

        /* Hero */
        .hero { padding: 96px 0 84px; background: #fff; }
        .hero-grid { display: grid; grid-template-columns: minmax(0, 1.04fr) minmax(430px, .96fr); gap: 56px; align-items: center; }
        .hero-grid > *, .clarity-grid > *, .digital-grid > *, .program-grid > *, .language-band > *, .cta-box > * { min-width: 0; }
        .hero-copy .body-large { max-width: 700px; margin-bottom: 32px; }
        .hero-art { min-height: 500px; display: flex; align-items: center; justify-content: center; }
        .hero-art-svg { width: 100%; max-width: 610px; height: auto; }
        .hero-note { display: flex; align-items: center; gap: 12px; margin-top: 28px; color: var(--muted); font-size: 16px; }
        .hero-note svg { color: var(--magenta); flex: 0 0 auto; }

        /* Trust */
        .trust-band { border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); background: #fff; }
        .trust-grid { min-height: 96px; display: grid; grid-template-columns: repeat(6, 1fr); align-items: stretch; }
        .trust-item { padding: 24px 20px; display: flex; align-items: center; justify-content: center; text-align: center; border-right: 1px solid var(--line); font-size: 16px; line-height: 1.45; font-weight: 600; color: #414958; }
        .trust-item:last-child { border-right: 0; }

        /* Journey */
        .journey-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .journey-item { padding: 34px 28px 36px; border-right: 1px solid var(--line); position: relative; }
        .journey-item:last-child { border-right: 0; }
        .journey-marker { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; background: var(--blush); color: var(--magenta); font-weight: 600; margin-bottom: 22px; }
        .journey-item h3 { font-size: 21px; }
        .journey-item > p { min-height: 82px; }
        .clean-list { list-style: none; padding: 0; margin: 24px 0 0; }
        .clean-list li { display: grid; grid-template-columns: 18px minmax(0, 1fr); gap: 10px; margin-bottom: 10px; }
        .clean-list li::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--magenta); margin-top: 10px; }

        /* Organizations */
        .org-layout { display: grid; grid-template-columns: minmax(260px, .78fr) minmax(0, 1.22fr); gap: 72px; align-items: start; }
        .org-intro { position: sticky; top: 30px; }
        .org-list { border-top: 1px solid var(--line); }
        .org-row { display: grid; grid-template-columns: 58px minmax(180px, .48fr) minmax(0, 1fr); gap: 22px; align-items: center; padding: 26px 0; border-bottom: 1px solid var(--line); }
        .icon-box { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; background: #fff; border: 1px solid var(--line); color: var(--magenta); }
        .org-row h3 { font-size: 20px; margin: 0; }
        .org-row p { margin: 0; }

        /* Content groups */
        .content-grid { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid #333845; border-radius: 28px; overflow: hidden; }
        .content-col { padding: 38px 34px 40px; border-right: 1px solid #333845; }
        .content-col:last-child { border-right: 0; }
        .content-col h3 { color: #fff; }
        .content-col .clean-list li::before { background: var(--pink-light); }

        /* Clarity */
        .clarity-grid { display: grid; grid-template-columns: minmax(0, .92fr) minmax(420px, 1.08fr); gap: 72px; align-items: center; }
        .clarity-panel { background: var(--blush); border-radius: 28px; padding: 38px; }
        .clarity-row { display: grid; grid-template-columns: 48px minmax(0, 1fr); gap: 18px; padding: 23px 0; border-bottom: 1px solid #EBCFDB; }
        .clarity-row:first-child { padding-top: 0; }
        .clarity-row:last-child { padding-bottom: 0; border-bottom: 0; }
        .clarity-row .icon-box { width: 44px; height: 44px; background: #fff; }
        .clarity-row h3 { font-size: 19px; margin-bottom: 6px; }
        .clarity-row p { margin: 0; }

        /* Digital mockup */
        .digital-grid { display: grid; grid-template-columns: minmax(0, .9fr) minmax(480px, 1.1fr); gap: 70px; align-items: center; }
        .digital-copy .body-large { margin-bottom: 22px; }
        .digital-links { display: grid; gap: 6px; margin-top: 24px; }
        .portal-mockup { background: #fff; border: 1px solid var(--line); border-radius: 28px; box-shadow: 0 22px 60px rgba(24,32,47,.10); overflow: hidden; }
        .mockup-top { height: 62px; padding: 0 24px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid var(--line); }
        .mockup-brand { display: flex; align-items: center; gap: 10px; font-size: 16px; font-weight: 600; }
        .mockup-cross { width: 30px; height: 30px; border-radius: 9px; background: var(--blush); color: var(--magenta); display: grid; place-items: center; font-size: 20px; line-height: 1; }
        .mockup-lang { padding: 7px 12px; border-radius: 999px; background: #F3F5F8; color: #505969; font-size: 14px; }
        .mockup-body { display: grid; grid-template-columns: 150px minmax(0, 1fr); min-height: 405px; }
        .mockup-side { background: #F8F9FB; border-right: 1px solid var(--line); padding: 24px 15px; }
        .mockup-nav { padding: 11px 12px; margin-bottom: 6px; border-radius: 10px; color: #667085; font-size: 16px; }
        .mockup-nav.active { background: var(--blush); color: var(--magenta); font-weight: 600; }
        .mockup-main { padding: 28px; }
        .mockup-main h3 { font-size: 22px; margin-bottom: 8px; }
        .mockup-meta { font-size: 14px; color: #7A8493; margin-bottom: 22px; }
        .appointment { border: 1px solid var(--line); border-radius: 18px; padding: 20px; margin-bottom: 16px; }
        .appointment-head { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 16px; }
        .appointment-title { font-size: 16px; font-weight: 600; }
        .status-pill { padding: 6px 10px; border-radius: 999px; background: #EFF8F3; color: #267A4C; font-size: 13px; font-weight: 600; white-space: nowrap; }
        .appointment-line { height: 8px; border-radius: 999px; background: #E9ECF1; margin-bottom: 10px; }
        .appointment-line.short { width: 62%; }
        .mockup-actions { display: grid; grid-template-columns: repeat(2, 1fr); gap: 14px; }
        .mockup-action { min-height: 72px; border-radius: 16px; background: #F7F8FA; border: 1px solid var(--line); padding: 16px; font-size: 16px; font-weight: 600; color: #475061; }

        /* Workflow */
        .workflow-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .workflow-card { background: #fff; border: 1px solid var(--line); border-radius: 22px; padding: 30px 26px; }
        .workflow-icon { width: 48px; height: 48px; border-radius: 16px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); margin-bottom: 22px; }
        .workflow-card h3 { font-size: 20px; }
        .workflow-card p { margin-bottom: 0; }
        .workflow-note { margin-top: 34px; padding: 22px 26px; border-left: 3px solid var(--magenta); background: #fff; font-size: 17px; line-height: 1.65; color: var(--text); }

        /* Quality */
        .quality-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .quality-item { display: grid; grid-template-columns: 54px minmax(0, 1fr); gap: 20px; padding: 32px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .quality-item h3 { font-size: 20px; margin-bottom: 8px; }
        .quality-item p { margin: 0; }

        /* Security & access */
        .trust-layout { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .trust-panel { border-radius: 28px; padding: 42px; }
        .security-panel { background: var(--dark); color: #fff; }
        .trust-panel.security-panel p, .trust-panel.security-panel li { color: #F4F7FB !important; }
        .access-panel { background: var(--blush); }
        .trust-panel h2 { font-size: 31px; }
        .trust-panel .clean-list { margin-top: 24px; columns: 2; column-gap: 28px; }
        .trust-panel .clean-list li { break-inside: avoid; }
        .security-panel .clean-list li::before { background: var(--pink-light); }
        .trust-panel .text-link { margin-top: 20px; }
        .trust-panel.security-panel .text-link { color: #FFD3E4 !important; }
        .trust-panel.security-panel h2 { color: #FFFFFF !important; }

        /* Translation vs interpreting */
        .dual-grid { display: grid; grid-template-columns: repeat(2, 1fr); border: 1px solid var(--line); border-radius: 28px; overflow: hidden; }
        .dual-panel { padding: 42px; }
        .dual-panel:first-child { border-right: 1px solid var(--line); }
        .dual-icon { width: 54px; height: 54px; border-radius: 18px; display: grid; place-items: center; background: var(--blush); color: var(--magenta); margin-bottom: 24px; }

        /* Languages */
        .language-band { display: grid; grid-template-columns: minmax(280px, .75fr) minmax(0, 1.25fr); gap: 64px; align-items: center; }
        .language-cloud { display: flex; flex-wrap: wrap; gap: 12px; }
        .language-chip { padding: 11px 15px; border-radius: 999px; border: 1px solid var(--line); background: #fff; font-size: 16px; color: #475061; }

        /* Why choose */
        .choose-grid { display: grid; grid-template-columns: repeat(4, 1fr); border-top: 1px solid var(--line); border-left: 1px solid var(--line); }
        .choose-item { padding: 30px 26px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
        .choose-item .icon-box { margin-bottom: 22px; }
        .choose-item h3 { font-size: 19px; }
        .choose-item p { margin-bottom: 0; }

        /* Program */
        .program-grid { display: grid; grid-template-columns: minmax(300px, .7fr) minmax(0, 1.3fr); gap: 80px; align-items: start; }
        .program-copy { position: sticky; top: 30px; }
        .program-steps { border-top: 1px solid #353A47; }
        .program-step { display: grid; grid-template-columns: 56px minmax(210px, .48fr) minmax(0, 1fr); gap: 20px; align-items: start; padding: 28px 0; border-bottom: 1px solid #353A47; }
        .program-number { color: var(--pink-light); font-weight: 600; }
        .program-step h3 { font-size: 20px; color: #fff; margin: 0; }
        .program-step p { margin: 0; }
        .program-links { margin-top: 30px; display: flex; flex-wrap: wrap; gap: 18px 28px; }
        .program-links .text-link { color: var(--pink-light); }

        /* Related */
        .related-grid { display: grid; grid-template-columns: repeat(2, 1fr); border-top: 1px solid var(--line); }
        .related-item { padding: 28px 28px 28px 0; border-bottom: 1px solid var(--line); }
        .related-item:nth-child(odd) { border-right: 1px solid var(--line); padding-right: 34px; }
        .related-item:nth-child(even) { padding-left: 34px; }
        .related-item h3 { font-size: 20px; }
        .related-item p { margin-bottom: 12px; }

        /* FAQ */
        .faq-shell { border: 1px solid var(--line); border-radius: 28px; overflow: hidden; background: #fff; }
        .faq-item { border-bottom: 1px solid var(--line); }
        .faq-item:last-child { border-bottom: 0; }
        .faq-question { width: 100%; min-height: 76px; padding: 22px 28px; border: 0; background: #fff; display: flex; align-items: center; justify-content: space-between; gap: 24px; text-align: left; color: var(--ink); font: inherit; font-size: 18px; line-height: 1.45; font-weight: 600; cursor: pointer; }
        .faq-question:hover { background: #FCFCFD; }
        .faq-plus { width: 34px; height: 34px; border-radius: 50%; display: grid; place-items: center; border: 1px solid var(--line); color: var(--magenta); flex: 0 0 auto; font-size: 21px; font-weight: 400; }
        .faq-answer { padding: 0 86px 26px 28px; }
        .faq-answer p { max-width: 840px; margin: 0; }

        /* Final CTA */
        .final-cta { width: 100%; padding: 96px 0; background: var(--blush); border-top: 1px solid #EED5E1; border-bottom: 1px solid #EED5E1; }
        .cta-box { width: 100%; display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(420px, .95fr); gap: 76px; align-items: center; }
        .cta-box h2 { max-width: 720px; }
        .cta-box .section-lead { max-width: 720px; margin-bottom: 28px; }
        .team-photo-placeholder { width: 100%; min-height: 360px; border-radius: 24px; border: 2px dashed #D2A0B8; background: #FFFFFF; display: grid; place-items: center; color: #A71954; }
        .team-photo-placeholder-inner { padding: 32px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; gap: 10px; }
        .team-photo-label { color: var(--ink); font-size: 18px; line-height: 1.4; font-weight: 600; }
        .team-photo-subtext { color: #667085; font-size: 16px; line-height: 1.55; }


        @media (max-width: 1180px) {
          .container { width: min(1280px, calc(100% - 80px)); }
          .hero-grid { grid-template-columns: minmax(0, 1fr) minmax(380px, .9fr); gap: 34px; }
          .journey-grid { grid-template-columns: repeat(2, 1fr); }
          .journey-item:nth-child(2) { border-right: 0; }
          .journey-item:nth-child(-n+2) { border-bottom: 1px solid var(--line); }
          .workflow-grid, .choose-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-panel .clean-list { columns: 1; }
        }

        @media (max-width: 900px) {
          .container { width: calc(100% - 48px); }
          .section { padding: 80px 0; }
          .section-dense { padding: 72px 0; }
          h1 { font-size: 42px; }
          h2 { font-size: 32px; }
          h3 { font-size: 22px; }
          .hero { padding: 80px 0 72px; }
          .hero-grid { grid-template-columns: 1fr; }
          .hero-copy { max-width: 760px; }
          .hero-art { min-height: auto; max-width: 620px; margin: 20px auto 0; }
          .trust-grid { grid-template-columns: repeat(3, 1fr); }
          .trust-item { min-height: 96px; border-bottom: 1px solid var(--line); }
          .trust-item:nth-child(3n) { border-right: 0; }
          .trust-item:nth-child(n+4) { border-bottom: 0; }
          .content-grid { grid-template-columns: 1fr; }
          .content-col { border-right: 0; border-bottom: 1px solid #333845; }
          .content-col:last-child { border-bottom: 0; }
          .org-layout, .clarity-grid, .digital-grid, .program-grid, .language-band { grid-template-columns: 1fr; gap: 48px; }
          .org-intro, .program-copy { position: static; }
          .org-row { grid-template-columns: 54px minmax(0, 1fr); }
          .org-row p { grid-column: 2; }
          .digital-grid { align-items: start; }
          .portal-mockup { max-width: 680px; }
          .trust-layout { grid-template-columns: 1fr; }
          .dual-grid { grid-template-columns: 1fr; }
          .dual-panel:first-child { border-right: 0; border-bottom: 1px solid var(--line); }
          .quality-grid { grid-template-columns: 1fr; }
          .related-grid { grid-template-columns: 1fr; }
          .related-item:nth-child(odd) { border-right: 0; padding-right: 0; }
          .related-item:nth-child(even) { padding-left: 0; }
          .cta-box { grid-template-columns: 1fr; gap: 44px; }
          .team-photo-placeholder { width: min(100%, 620px); min-height: 330px; }
        }

        @media (max-width: 640px) {
          .container { width: calc(100% - 40px); }
          .section { padding: 68px 0; }
          .section-dense { padding: 64px 0; }
          h1 { font-size: 38px; }
          h2 { font-size: 30px; }
          h3 { font-size: 20px; }
          p, li { font-size: 16px; }
          .body-large, .section-lead { font-size: 18px; }
          .hero { padding: 68px 0 62px; }
          .hero-grid { gap: 20px; }
          .hero-copy .body-large { margin-bottom: 26px; }
          .btn-row { display: grid; grid-template-columns: 1fr; }
          .btn { width: 100%; min-height: 52px; }
          .hero-art { margin-top: 8px; }
          .trust-grid { grid-template-columns: repeat(2, 1fr); }
          .trust-item { min-height: 88px; padding: 20px 12px; border-right: 1px solid var(--line); border-bottom: 1px solid var(--line); }
          .trust-item:nth-child(3n) { border-right: 1px solid var(--line); }
          .trust-item:nth-child(even) { border-right: 0; }
          .trust-item:nth-child(n+4) { border-bottom: 1px solid var(--line); }
          .trust-item:nth-last-child(-n+2) { border-bottom: 0; }
          .section-intro { margin-bottom: 36px; }
          .journey-grid { grid-template-columns: 1fr; }
          .journey-item { border-right: 0 !important; border-bottom: 1px solid var(--line); padding: 30px 0; }
          .journey-item:last-child { border-bottom: 0; }
          .journey-item > p { min-height: 0; }
          .org-layout, .clarity-grid, .digital-grid, .program-grid, .language-band { gap: 38px; }
          .org-row { grid-template-columns: 48px minmax(0, 1fr); gap: 14px; padding: 24px 0; }
          .icon-box { width: 44px; height: 44px; }
          .content-grid { border-radius: 22px; }
          .content-col { padding: 30px 24px; }
          .clarity-panel { padding: 28px 22px; border-radius: 22px; }
          .clarity-row { grid-template-columns: 44px minmax(0, 1fr); gap: 14px; }
          .portal-mockup { border-radius: 22px; }
          .mockup-body { grid-template-columns: 1fr; }
          .mockup-side { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 6px; border-right: 0; border-bottom: 1px solid var(--line); padding: 12px; }
          .mockup-nav { margin: 0; min-height: 44px; display: flex; align-items: center; white-space: normal; }
          .mockup-main { padding: 22px; }
          .mockup-actions { grid-template-columns: 1fr; }
          .workflow-grid, .choose-grid { grid-template-columns: 1fr; }
          .workflow-card { padding: 26px 22px; }
          .quality-item { grid-template-columns: 46px minmax(0, 1fr); padding: 26px 20px; gap: 14px; }
          .trust-panel { padding: 32px 24px; border-radius: 22px; }
          .trust-panel h2 { font-size: 28px; }
          .trust-panel .clean-list { columns: 1; }
          .dual-panel { padding: 32px 24px; }
          .language-cloud { gap: 9px; }
          .language-chip { padding: 10px 13px; }
          .choose-item { padding: 28px 22px; }
          .program-step { grid-template-columns: 42px minmax(0, 1fr); gap: 14px; padding: 25px 0; }
          .program-step p { grid-column: 2; }
          .program-links { display: grid; gap: 6px; }
          .related-item { padding: 25px 0 !important; }
          .faq-shell { border-radius: 22px; }
          .faq-question { padding: 20px; font-size: 17px; min-height: 72px; }
          .faq-answer { padding: 0 20px 24px; }
          .faq-plus { width: 32px; height: 32px; }
          .final-cta { padding: 68px 0; }
          .cta-box { gap: 30px; }
          .team-photo-placeholder { width: 100%; min-height: 270px; border-radius: 20px; }
          .team-photo-placeholder-inner { padding: 24px; }
        }

        @media (max-width: 360px) {
          .hero-copy h1 { font-size: 38px; }
          .mockup-top { height: auto; min-height: 62px; padding: 14px 18px; gap: 10px; }
          .mockup-main { padding: 18px; }
          .appointment-head { display: grid; }
          .status-pill { justify-self: start; }
        }
      `}</style>

      <section className="hero" aria-labelledby="page-title">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 id="page-title">Healthcare Translation Services for Hospitals, Health Systems, and Digital Care</h1>
            <p className="body-large">Deliver clear, accurate, and culturally appropriate communication to multilingual patients across every stage of care. Stepes translates patient-facing, clinical, administrative, operational, and digital healthcare content in 100+ languages through secure, AI-powered workflows governed by healthcare-specialized linguists.</p>
            <div className="btn-row">
              <CTAButton href={QUOTE_URL}>Request a Translation Quote</CTAButton>
              <CTAButton href={`${BASE}/contact-us/`} secondary>Talk to a Healthcare Expert</CTAButton>
            </div>
            <div className="hero-note"><Check /><span>Documents, portals, apps, patient communications, and ongoing healthcare programs</span></div>
          </div>
          <div className="hero-art"><HealthcareHeroArt /></div>
        </div>
      </section>

      <section className="trust-band" aria-label="Healthcare translation trust signals">
        <div className="container trust-grid">
          {['ISO 17100 Translation Quality','ISO 9001 Quality Management','ISO 13485 Medical Device Quality','100+ Languages','AI + Human Review','Secure Workflows'].map(item => <div className="trust-item" key={item}>{item}</div>)}
        </div>
      </section>

      <section className="section" id="patient-journey">
        <div className="container">
          <SectionIntro eyebrow="The Patient Journey" title="Multilingual Communication Across Every Stage of Care" align="center">
            Every patient interaction depends on information people can understand and use. Stepes helps healthcare organizations maintain clear, consistent multilingual communication from initial access through treatment, discharge, continuing care, and digital engagement.
          </SectionIntro>
          <div className="journey-grid">
            {journey.map((item, index) => (
              <article className="journey-item" key={item.title}>
                <div className="journey-marker">{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul className="clean-list">{item.items.map(x => <li key={x}>{x}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container org-layout">
          <div className="org-intro">
            <p className="eyebrow">Healthcare Organizations</p>
            <h2>Healthcare Translation for Every Care Environment</h2>
            <p className="section-lead">Stepes supports individual projects, urgent communication needs, recurring departmental requests, and enterprise-wide multilingual content programs across the healthcare delivery ecosystem.</p>
          </div>
          <div className="org-list">
            {organizations.map(([icon, title, description]) => (
              <article className="org-row" key={title}>
                <div className="icon-box"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <SectionIntro eyebrow="Healthcare Content" title="Translation Services Across Documents, Operations, and Digital Care" dark>
            Healthcare content appears across documents, digital systems, facilities, multimedia, and ongoing patient communication. Stepes combines translation, localization engineering, multilingual publishing, terminology management, and linguistic quality assurance within one coordinated workflow.
          </SectionIntro>
          <div className="content-grid">
            {contentGroups.map(group => (
              <article className="content-col" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <ul className="clean-list">{group.items.map(item => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container clarity-grid">
          <div>
            <p className="eyebrow">Patient Understanding</p>
            <h2>Translation Designed for Clarity and Usability</h2>
            <p className="section-lead">Accurate terminology is essential in healthcare, but linguistic accuracy alone does not always make information easy for a patient to understand or use. Stepes translates with attention to the audience, purpose, reading context, and action the patient may need to take.</p>
            <p>Our linguists preserve clinical meaning while producing clear, natural language appropriate for patients, caregivers, clinicians, administrators, and members of the public. Customer-approved terminology and reading-level requirements guide every language.</p>
          </div>
          <div className="clarity-panel">
            {[
              ["clarity", "Plain Language Without Loss of Meaning", "Follow approved reading level, sentence structure, tone, and patient terminology while preserving clinical meaning."],
              ["terminology", "Patient and Professional Terminology", "Distinguish between professional medical language and approved patient-facing expressions without losing consistency."],
              ["qa", "Numbers, Dosages, Dates, and Instructions", "Apply automated and human checks to measurements, dates, units, phone numbers, warnings, and numbered instructions."],
              ["digital", "Final-Format Usability", "Review content in forms, applications, portals, brochures, and patient instructions for text expansion, truncation, layout, and readability."],
            ].map(([icon,title,description]) => (
              <article className="clarity-row" key={title}>
                <div className="icon-box"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blush-section">
        <div className="container digital-grid">
          <div className="digital-copy">
            <h2>Localized Digital Healthcare Experiences</h2>
            <p className="body-large">Healthcare delivery increasingly extends across websites, patient portals, mobile applications, virtual-care platforms, automated communications, and connected systems. These experiences require more than isolated string translation.</p>
            <p>Stepes localizes digital healthcare content with attention to user intent, interface context, technical structure, terminology, privacy-sensitive workflows, writing direction, and on-screen presentation.</p>
            <ul className="clean-list">
              <li>Patient portal and mobile health app localization</li>
              <li>Healthcare website and telehealth interface translation</li>
              <li>Character limits, placeholders, tags, and resource-file protection</li>
              <li>Screenshot review, RTL support, and functional linguistic QA</li>
              <li>Continuous localization for recurring releases and content updates</li>
            </ul>
            <div className="digital-links">
              <TextLink href={`${BASE}/digital-health-translation/`}>Digital Health Translation</TextLink>
              <TextLink href={`${BASE}/telehealth-translation-services/`}>Telehealth Translation Services</TextLink>
              <TextLink href={`${BASE}/software-localization-services/`}>Software Localization Services</TextLink>
            </div>
          </div>
          <div className="portal-mockup" aria-label="Multilingual patient portal in Spanish">
            <div className="mockup-top">
              <div className="mockup-brand"><span className="mockup-cross">+</span><span>Patient Portal</span></div>
              <span className="mockup-lang">Español</span>
            </div>
            <div className="mockup-body">
              <div className="mockup-side">
                {['Inicio','Citas','Mensajes','Resultados','Medicamentos'].map((x,i)=><div key={x} className={`mockup-nav ${i===1?'active':''}`}>{x}</div>)}
              </div>
              <div className="mockup-main">
                <h3>Próxima cita</h3>
                <div className="mockup-meta">Martes, 11 de agosto · 10:30 a. m.</div>
                <div className="appointment">
                  <div className="appointment-head"><span className="appointment-title">Consulta de seguimiento</span><span className="status-pill">Confirmada</span></div>
                  <div className="appointment-line"></div><div className="appointment-line short"></div>
                </div>
                <div className="appointment">
                  <div className="appointment-head"><span className="appointment-title">Instrucciones para la visita</span><span className="status-pill">Disponible</span></div>
                  <div className="appointment-line"></div><div className="appointment-line"></div><div className="appointment-line short"></div>
                </div>
                <div className="mockup-actions"><div className="mockup-action">Enviar un mensaje seguro</div><div className="mockup-action">Ver documentos</div></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionIntro eyebrow="Risk-Based Workflow" title="AI-Powered Healthcare Translation With the Right Level of Human Review" align="center">
            Healthcare content varies significantly in complexity, sensitivity, audience, and potential risk. Stepes combines AI translation, translation memory, controlled terminology, healthcare linguists, automated QA, and independent review according to each project’s intended use.
          </SectionIntro>
          <div className="workflow-grid">
            {workflowTiers.map(([icon,title,description])=>(
              <article className="workflow-card" key={title}>
                <div className="workflow-icon"><Icon name={icon} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="workflow-note">AI provides valuable speed and scalability, but it does not replace the healthcare knowledge, contextual judgment, and accountability of qualified language professionals. The final workflow is selected after reviewing the source, audience, languages, complexity, and customer requirements.</div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Quality Assurance" title="Consistent Healthcare Terminology, From First Translation to Final Review">
            Centralized terminology and approved language assets help healthcare organizations maintain consistency across patient forms, clinical documents, websites, portals, applications, training, and live support channels.
          </SectionIntro>
          <div className="quality-grid">
            {qualityItems.map(([icon,title,description])=>(
              <article className="quality-item" key={title}>
                <div className="icon-box"><Icon name={icon} /></div>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
          <div style={{marginTop: 26}}><TextLink href={`${BASE}/translation-quality-assurance/`}>Translation Quality Assurance</TextLink></div>
        </div>
      </section>

      <section className="section-dense">
        <div className="container trust-layout">
          <article className="trust-panel security-panel">
            <h2>Secure Workflows for Sensitive Healthcare Content</h2>
            <p>Healthcare translation may involve confidential patient information, internal policies, clinical content, unreleased technology, or other sensitive materials. Stepes works with customers to establish project-specific security, access, confidentiality, hosting, and content-handling requirements.</p>
            <ul className="clean-list">
              {['Secure file transfer','Encrypted data transmission','Role-based access','Controlled user permissions','Confidentiality agreements','Approved linguist access','Secure project workspaces','Customer-defined retention requirements','PHI-aware procedures','Controlled review and approval'].map(x=><li key={x}>{x}</li>)}
            </ul>
            <TextLink href={`${BASE}/contact-us/`}>Discuss Your Security Requirements</TextLink>
          </article>
          <article className="trust-panel access-panel">
            <h2>Supporting Healthcare Language Access</h2>
            <p>Healthcare organizations may need to provide meaningful access for people with limited English proficiency under applicable federal, state, local, contractual, or organizational requirements.</p>
            <p>Stepes supports written language-access programs through qualified translators, prioritized patient materials, centralized terminology, translation memory, multilingual document production, digital localization, recurring updates, and quality-controlled review workflows.</p>
            <p>Requirements vary by organization and program. Healthcare providers should work with their legal, compliance, and language-access teams to determine the appropriate approach.</p>
            <TextLink href={`${BASE}/contact-us/`}>Plan a Healthcare Language Program</TextLink>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro eyebrow="Complete Communication" title="Translation and Interpreting for Healthcare">
            Healthcare organizations often require both written translation and real-time interpreting. The two services support the same goal of multilingual communication while addressing different points of the patient experience.
          </SectionIntro>
          <div className="dual-grid">
            <article className="dual-panel">
              <div className="dual-icon"><Icon name="document" /></div>
              <h3>Healthcare Translation</h3>
              <p>Translation supports written, recorded, and digital content such as patient documents, forms, educational materials, websites, portals, applications, messages, videos, and clinical or operational resources.</p>
              <p>Translated materials can be reviewed, approved, formatted, published, and reused across the organization.</p>
              <TextLink href={`${BASE}/medical-translation-services/`}>Medical Translation Services</TextLink>
            </article>
            <article className="dual-panel">
              <div className="dual-icon"><Icon name="people" /></div>
              <h3>Medical Interpreting</h3>
              <p>Interpreting supports live spoken or signed communication during appointments, consultations, admissions, procedures, discharge discussions, care coordination, behavioral health sessions, patient-support calls, and telehealth visits.</p>
              <TextLink href={`${BASE}/medical-interpretation-services/`}>Medical Interpretation Services</TextLink>
            </article>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container language-band">
          <div>
            <p className="eyebrow">Global Language Coverage</p>
            <h2>Healthcare Translation in 100+ Languages</h2>
            <p>Stepes supports major European, Asian, African, Middle Eastern, and Latin American languages, including regional variants, right-to-left languages, multilingual desktop publishing, and digital interface localization.</p>
            <TextLink href={`${BASE}/translation-languages/`}>Explore All Translation Languages</TextLink>
          </div>
          <div className="language-cloud" aria-label="Frequently requested healthcare languages">
            {['Spanish','Simplified Chinese','Traditional Chinese','Vietnamese','Arabic','Korean','Russian','Portuguese','French','Haitian Creole','Tagalog','Polish','Urdu','Punjabi','Japanese'].map(x=><span className="language-chip" key={x}>{x}</span>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro title="Why Healthcare Organizations Choose Stepes" align="center">
            Healthcare organizations need language services that can support accuracy, speed, security, digital transformation, and ongoing multilingual demand. Stepes brings these capabilities together within one coordinated translation environment.
          </SectionIntro>
          <div className="choose-grid">
            {chooseItems.map(([icon,title,description])=>(
              <article className="choose-item" key={title}>
                <div className="icon-box"><Icon name={icon} /></div><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container program-grid">
          <div className="program-copy">
            <p className="eyebrow eyebrow-dark">Ongoing Programs</p>
            <h2>Built for Continuous Healthcare Translation</h2>
            <p className="section-lead">New forms, policy updates, portal releases, patient campaigns, training content, and care communications create a steady flow of multilingual work. Stepes helps healthcare organizations establish a repeatable program that becomes more consistent and efficient over time.</p>
            <div className="program-links">
              <TextLink href={`${BASE}/translation-management-portal/`}>Translation Management Portal</TextLink>
              <TextLink href={`${BASE}/contact-us/`}>Talk to Our Healthcare Team</TextLink>
            </div>
          </div>
          <div className="program-steps">
            {programSteps.map(([title,description],i)=>(
              <article className="program-step" key={title}>
                <div className="program-number">0{i+1}</div><h3>{title}</h3><p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionIntro title="Explore Specialized Healthcare and Medical Language Services">
            Connect your healthcare program with the Stepes services that match your content, audience, technology, and regulatory needs.
          </SectionIntro>
          <div className="related-grid">
            {related.map(([title,description,href])=>(
              <article className="related-item" key={title}><h3>{title}</h3><p>{description}</p><TextLink href={href}>{title}</TextLink></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionIntro title="Healthcare Translation Services FAQ" />
          <div className="faq-shell">
            {faqs.map(([q,a],i)=><FAQItem key={q} id={i} question={q} answer={a} open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container">
          <div className="cta-box">
            <div>
              <h2>Build a Better Multilingual Healthcare Experience</h2>
              <p className="section-lead">Give patients, caregivers, healthcare professionals, and communities access to clear, consistent communication across documents, digital platforms, and every stage of care.</p>
              <div className="btn-row">
                <CTAButton href={QUOTE_URL}>Request a Translation Quote</CTAButton>
                <CTAButton href={`${BASE}/contact-us/`} secondary>Talk to a Healthcare Expert</CTAButton>
              </div>
            </div>
            <TeamPhotoPlaceholder />
          </div>
        </div>
      </section>
    </main>
  );
}
