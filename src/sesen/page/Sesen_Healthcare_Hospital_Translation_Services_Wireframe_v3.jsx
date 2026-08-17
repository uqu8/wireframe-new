import React from "react";

const LINKS = {
  contactSales: "https://www.sesen.com/contact-sales/",
  quote: "https://www.sesen.com/get-a-quote/",
  ehealth: "https://www.sesen.com/ehealth-mhealth-localization-services/",
  patientFacing: "https://www.sesen.com/patient-facing-materials-translation/",
  clinicalTrials: "https://www.sesen.com/clinical-trial-translation-services/",
  pharmaceutical: "https://www.sesen.com/pharmaceutical-translation-services/",
  medicalDevice: "https://www.sesen.com/medical-device-translation-services/",
  lifeSciences: "https://www.sesen.com/life-sciences-translation-services/",
  resources: "https://www.sesen.com/resources/",
  interpreting: "https://www.sesen.com/interpreting-services/",
  quality: "https://www.sesen.com/quality-assurance/",
  medicalScientific: "https://www.sesen.com/medical-scientific-translation-services/",
};

function Arrow({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Icon({ name, size = 22 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    patient: <><circle cx="12" cy="7" r="3" {...common}/><path d="M5.5 20c.7-4 3-6 6.5-6s5.8 2 6.5 6" {...common}/></>,
    document: <><path d="M7 3h7l4 4v14H7z" {...common}/><path d="M14 3v5h5M10 12h5M10 16h5" {...common}/></>,
    language: <><path d="M4 5h8M8 3v2c0 5-2 8-5 10M5 10c1 2 3 4 6 5" {...common}/><path d="M14 19l3-9 3 9M15.3 15h3.4" {...common}/></>,
    digital: <><rect x="3" y="4" width="18" height="13" rx="2" {...common}/><path d="M8 21h8M12 17v4" {...common}/><path d="M8 9h8M8 12h5" {...common}/></>,
    training: <><path d="M3 6l9-3 9 3-9 3z" {...common}/><path d="M6 8v5c0 2 3 4 6 4s6-2 6-4V8" {...common}/><path d="M21 6v7" {...common}/></>,
    hospital: <><path d="M4 21V7h16v14M8 7V3h8v4" {...common}/><path d="M12 10v5M9.5 12.5h5M8 21v-4h8v4" {...common}/></>,
    research: <><path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 19 18l-5-9V3" {...common}/><path d="M8 15h8" {...common}/></>,
    check: <path d="M5 12.5l4 4L19 7" {...common}/>,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" {...common}/><path d="M8 10V7a4 4 0 0 1 8 0v3" {...common}/></>,
    term: <><path d="M5 5h14M8 5v14M5 19h6" {...common}/><path d="M14 10h5M16.5 8v4" {...common}/></>,
    scale: <><path d="M12 3v18M6 7h12M6 7l-3 6h6zM18 7l-3 6h6zM8 21h8" {...common}/></>,
    portal: <><rect x="4" y="3" width="16" height="18" rx="2" {...common}/><circle cx="9" cy="9" r="2" {...common}/><path d="M7 14h4M14 8h3M14 12h3M14 16h3" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...common}/><path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9S14.5 18.3 12 21M12 3C9.5 5.7 8.2 8.7 8.2 12S9.5 18.3 12 21" {...common}/></>,
    badge: <><circle cx="12" cy="9" r="6" {...common}/><path d="M9.5 9l1.7 1.7L14.8 7" {...common}/><path d="M8.5 14.2L7 21l5-2.4L17 21l-1.5-6.8" {...common}/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.check}</svg>;
}

function Button({ href, children, variant = "primary" }) {
  return <a className={`sesen-hh-btn sesen-hh-btn--${variant}`} href={href}>{children}<Arrow size={15}/></a>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`sesen-hh-eyebrow${dark ? " sesen-hh-eyebrow--dark" : ""}`}>{children}</div>;
}

function SectionHead({ eyebrow, title, lead, center = false }) {
  return (
    <div className={`sesen-hh-section-head${center ? " is-centered" : ""}`}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}

function HeroArtwork() {
  return (
    <div className="sesen-hh-hero-art" aria-hidden="true">
      <svg viewBox="0 0 560 500" fill="none">
        <path d="M72 337c88-65 161-58 232-6 76 56 130 54 184 5" stroke="#DDE4F2" strokeWidth="2" strokeDasharray="5 8"/>
        <circle cx="166" cy="170" r="92" fill="#F7F9FD" stroke="#DDE4F2" strokeWidth="1.5"/>
        <circle cx="388" cy="165" r="96" fill="#F5F7FF" stroke="#DDE4F2" strokeWidth="1.5"/>
        <circle cx="282" cy="344" r="110" fill="#FFFFFF" stroke="#E9EEF8" strokeWidth="1.5"/>

        <g stroke="#17264D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="166" cy="140" r="23"/>
          <path d="M119 217c5-31 22-49 47-49s42 18 47 49"/>
          <path d="M143 140h46M166 117v46" opacity="0.12"/>
        </g>
        <circle cx="166" cy="140" r="7" fill="#4B6FD8"/>

        <g stroke="#17264D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M340 224V114h96v110"/>
          <path d="M360 114V87h56v27M388 136v35M371 153h34"/>
          <path d="M362 224v-30h52v30"/>
        </g>
        <path d="M388 136v35M371 153h34" stroke="#4B6FD8" strokeWidth="4" strokeLinecap="round"/>

        <g stroke="#17264D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="218" y="283" width="128" height="92" rx="14"/>
          <path d="M238 306h88M238 329h58M238 352h72"/>
          <path d="M266 395h32M282 375v20"/>
        </g>
        <rect x="238" y="306" width="36" height="5" rx="2.5" fill="#4B6FD8"/>

        <g stroke="#3659BB" strokeWidth="2" strokeLinecap="round">
          <path d="M220 184c34-22 78-23 113-2"/>
          <path d="M210 199l11-15-18-2"/>
          <path d="M337 182l-5 18 18-6"/>
          <path d="M205 270c22 21 35 34 46 53"/>
          <path d="M354 268c-24 22-39 37-50 55"/>
        </g>

        <g transform="translate(444 316)">
          <rect width="70" height="54" rx="12" fill="#EAF0FF"/>
          <path d="M18 17h18M27 12v5c0 10-4 17-11 22M20 27c3 5 7 8 13 10" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M43 39l7-20 7 20M46 31h8" stroke="#3659BB" strokeWidth="1.8" strokeLinecap="round"/>
        </g>
        <circle cx="107" cy="310" r="24" fill="#EAF0FF"/>
        <path d="M99 310h16M107 302v16" stroke="#3659BB" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

const useCases = [
  ["patient", "Patient Communication", "Patient education, appointment communication, registration materials, consent information, care instructions, medication guidance, discharge materials, surveys, and caregiver communication."],
  ["document", "Clinical & Medical Documentation", "Medical reports, clinical summaries, referrals, care plans, diagnostic documentation, medical histories, selected medical records, clinical forms, and specialist correspondence."],
  ["language", "Language Access", "Translated vital documents, notices, patient forms, signage, multilingual information resources, healthcare interpreting, and written language-access support."],
  ["digital", "Digital Health & Patient Portals", "Patient portals, healthcare websites, telehealth, patient-facing EHR/EMR content, scheduling systems, mobile health applications, digital forms, messaging, and notifications."],
  ["training", "Training & Workforce Communication", "Employee onboarding, clinical education, eLearning, safety and compliance training, policies, procedures, HR information, and internal communications."],
  ["hospital", "Hospital Operations", "Administrative forms, billing and financial assistance information, departmental procedures, facility communication, patient wayfinding, signage, procurement, and emergency communication."],
  ["research", "Research & Clinical Programs", "Academic research programs, investigator communication, participant materials, institutional research content, research-site documentation, and related healthcare research communication."],
];

const faqs = [
  ["What types of healthcare content can Sesen translate?", "Sesen translates patient-facing materials, medical and clinical documentation, healthcare forms, discharge instructions, patient education, digital health content, patient portals, patient-facing EHR and EMR content, healthcare websites, training materials, policies, operational documents, signage, research materials, and other healthcare communication. For specialized pharmaceutical, clinical trial, medical device, regulatory, and other life sciences content, Sesen provides dedicated translation services designed for those workflows."],
  ["How is healthcare translation different from pharmaceutical translation?", "Healthcare translation primarily supports the delivery of care and communication between healthcare organizations, patients, caregivers, clinicians, employees, and communities. Pharmaceutical translation more often follows the drug-development and product lifecycle, including clinical development, regulatory submissions, labeling, pharmacovigilance, medical affairs, and commercialization. Sesen provides specialized services for both environments."],
  ["Does Sesen support healthcare language-access programs?", "Yes. Sesen supports the written and digital content components of healthcare language-access programs, including patient materials, notices, forms, signage, healthcare information, websites, portals, and other multilingual communication. Sesen also provides interpreting services for organizations requiring real-time spoken language support."],
  ["Can Sesen translate patient portals and digital health applications?", "Yes. Sesen localizes patient portals, mobile health applications, telehealth platforms, healthcare websites, patient-facing EHR and EMR content, digital forms, messages, notifications, and related software experiences. Digital localization can include UI and UX translation, terminology management, string-context review, right-to-left language support, linguistic QA, and in-context review."],
  ["How does Sesen handle sensitive healthcare content?", "Sesen uses controlled enterprise translation workflows and secure infrastructure for healthcare and life sciences content. Project access can be limited to appropriate resources, and workflows can be configured according to the sensitivity and requirements of the material. Organizations with specific security, confidentiality, or procurement requirements can discuss them with the Sesen team during project planning."],
  ["How does Sesen select healthcare translators?", "Healthcare translators are selected based on factors such as native-language capability, professional translation experience, medical or healthcare subject expertise, content type, specialty, target market, and project requirements. Additional editing, proofreading, terminology validation, or specialist review can be included where appropriate."],
  ["Does Sesen use AI for healthcare translation?", "Sesen uses AI and translation technologies selectively to support appropriate parts of the multilingual workflow, including terminology application, translation memory reuse, consistency checks, repetitive content processing, and quality assistance. Professional human linguists and reviewers remain central to healthcare translation quality, particularly for sensitive medical and patient-facing content."],
  ["Can Sesen support multiple hospitals, departments, and recurring translation needs?", "Yes. Sesen supports enterprise healthcare translation programs spanning multiple facilities, departments, content types, languages, and recurring projects. Centralized translation memories, terminology resources, style guidance, workflow rules, project history, and professional language resources can improve consistency and make recurring multilingual content easier to manage."],
  ["Which languages does Sesen support for healthcare translation?", "Sesen provides healthcare translation and localization in 150+ languages, including Spanish, Simplified Chinese, Traditional Chinese, Vietnamese, Korean, Arabic, French, Portuguese, Russian, Haitian Creole, Tagalog, Japanese, German, and many additional global and regional languages."],
];

export default function SesenHealthcareHospitalTranslationServices() {
  return (
    <main className="sesen-hh-page">
      <style>{`
        .sesen-hh-page {
          --sesen-hh-blue:#4B6FD8;
          --sesen-hh-blue-dark:#3659BB;
          --sesen-hh-deep:#253F8F;
          --sesen-hh-soft:#EAF0FF;
          --sesen-hh-pale:#F5F7FF;
          --sesen-hh-navy:#17264D;
          --sesen-hh-ink:#111827;
          --sesen-hh-body:#46546D;
          --sesen-hh-muted:#68758B;
          --sesen-hh-border:#DDE4F2;
          --sesen-hh-divider:#E9EEF8;
          --sesen-hh-surface:#F7F9FD;
          color:var(--sesen-hh-body);
          background:#fff;
          font-family:Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          font-size:16px;
          line-height:1.65;
        }
        .sesen-hh-page * { box-sizing:border-box; }
        .sesen-hh-page a { color:inherit; }
        .sesen-hh-page img,.sesen-hh-page svg { max-width:100%; }
        .sesen-hh-page h1,.sesen-hh-page h2,.sesen-hh-page h3,.sesen-hh-page p,.sesen-hh-page a,.sesen-hh-page span { overflow-wrap:break-word; }
        .sesen-hh-shell { width:min(100%, 1280px); margin:0 auto; padding-left:56px; padding-right:56px; }
        .sesen-hh-section { padding:96px 0; }
        .sesen-hh-section--compact { padding:80px 0; }
        .sesen-hh-section--soft { background:var(--sesen-hh-surface); }
        .sesen-hh-section--pale { background:var(--sesen-hh-pale); }
        .sesen-hh-section--dark { background:var(--sesen-hh-navy); color:#fff; }
        .sesen-hh-page h1,.sesen-hh-page h2,.sesen-hh-page h3 { font-family:"Inter Tight", Inter, ui-sans-serif, system-ui, sans-serif; font-weight:500; color:var(--sesen-hh-navy); margin:0; }
        .sesen-hh-page h1 { font-size:48px; line-height:1.3; letter-spacing:-.5px; max-width:720px; }
        .sesen-hh-page h2 { font-size:36px; line-height:1.3; letter-spacing:0; }
        .sesen-hh-page h3 { font-size:23px; line-height:1.3; }
        .sesen-hh-page p { margin:0; }
        .sesen-hh-eyebrow { color:var(--sesen-hh-blue-dark); font-size:11px; font-weight:700; letter-spacing:.15em; line-height:1.35; text-transform:uppercase; margin-bottom:16px; }
        .sesen-hh-eyebrow--dark { color:#C8D6FF; }
        .sesen-hh-section-head { max-width:800px; margin-bottom:48px; }
        .sesen-hh-section-head h2 + p { margin-top:20px; font-size:18px; line-height:1.7; max-width:780px; }
        .sesen-hh-section-head.is-centered { text-align:center; margin-left:auto; margin-right:auto; }
        .sesen-hh-section-head.is-centered p { margin-left:auto; margin-right:auto; }
        .sesen-hh-btns { display:flex; flex-wrap:wrap; gap:12px; margin-top:32px; }
        .sesen-hh-btn { min-height:50px; display:inline-flex; align-items:center; justify-content:center; gap:10px; padding:0 25px; border-radius:999px; font-size:13px; line-height:1.25; font-weight:700; letter-spacing:.035em; text-align:center; text-decoration:none; transition:background .18s ease,border-color .18s ease,transform .18s ease; border:1px solid transparent; }
        .sesen-hh-btn:hover { transform:translateY(-1px); }
        .sesen-hh-btn:focus-visible,.sesen-hh-link:focus-visible,.sesen-hh-page summary:focus-visible { outline:3px solid rgba(75,111,216,.32); outline-offset:3px; }
        .sesen-hh-btn--primary { background:var(--sesen-hh-blue); color:#fff!important; }
        .sesen-hh-btn--primary:hover { background:var(--sesen-hh-blue-dark); }
        .sesen-hh-btn--secondary { background:#fff; color:var(--sesen-hh-ink)!important; border-color:var(--sesen-hh-border); }
        .sesen-hh-btn--secondary:hover { background:var(--sesen-hh-pale); border-color:#C8D6FF; }
        .sesen-hh-link { display:inline-flex; align-items:flex-start; gap:8px; color:var(--sesen-hh-blue-dark)!important; font-weight:600; text-decoration:none; }
        .sesen-hh-link svg { flex:0 0 auto; margin-top:.28em; }
        .sesen-hh-inline-action { margin-top:28px; }
        .sesen-hh-link:hover { text-decoration:underline; text-underline-offset:4px; }

        .sesen-hh-hero { padding:92px 0 86px; background:linear-gradient(180deg,#fff 0%,#fff 78%,#FBFCFF 100%); }
        .sesen-hh-hero-grid { display:grid; grid-template-columns:minmax(0,1.08fr) minmax(360px,.92fr); gap:68px; align-items:center; }
        .sesen-hh-hero-copy > p { font-size:19px; line-height:1.72; color:#293954; max-width:690px; margin-top:24px; }
        .sesen-hh-hero-art { width:100%; max-width:510px; justify-self:end; }
        .sesen-hh-hero-art svg { width:100%; height:auto; display:block; }

        .sesen-hh-trust { border-top:1px solid var(--sesen-hh-divider); border-bottom:1px solid var(--sesen-hh-divider); background:#fff; }
        .sesen-hh-trust-inner { min-height:94px; display:grid; grid-template-columns:1.1fr .72fr 1fr 1.18fr; align-items:center; gap:24px; }
        .sesen-hh-trust-item { display:flex; align-items:center; gap:12px; color:var(--sesen-hh-navy); font-size:14px; font-weight:600; line-height:1.35; }
        .sesen-hh-trust-icon { color:var(--sesen-hh-blue-dark); width:34px; height:34px; border-radius:12px; display:grid; place-items:center; background:var(--sesen-hh-pale); flex:0 0 auto; }

        .sesen-hh-journey { display:grid; grid-template-columns:repeat(5,1fr); position:relative; margin-top:54px; }
        .sesen-hh-journey:before { content:""; position:absolute; top:28px; left:9%; right:9%; height:1px; background:#C9D4EE; }
        .sesen-hh-journey-step { position:relative; padding-right:26px; }
        .sesen-hh-journey-dot { width:56px; height:56px; border-radius:50%; background:#fff; border:1px solid #C9D4EE; display:grid; place-items:center; color:var(--sesen-hh-blue-dark); position:relative; z-index:1; margin-bottom:22px; box-shadow:0 10px 24px rgba(23,38,77,.04); }
        .sesen-hh-journey-step h3 { font-size:20px; margin-bottom:10px; }
        .sesen-hh-journey-step p { color:var(--sesen-hh-muted); font-size:16px; line-height:1.62; }

        .sesen-hh-split { display:grid; grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr); gap:88px; align-items:start; }
        .sesen-hh-split-copy > p { margin-top:22px; font-size:18px; max-width:620px; }
        .sesen-hh-provider-map { border-left:1px solid var(--sesen-hh-border); padding-left:44px; display:grid; gap:28px; }
        .sesen-hh-provider-row { display:grid; grid-template-columns:92px 1fr; gap:18px; align-items:start; }
        .sesen-hh-provider-kicker { color:var(--sesen-hh-blue-dark); font-size:12px; font-weight:700; letter-spacing:.08em; text-transform:uppercase; padding-top:4px; }
        .sesen-hh-provider-row h3 { font-size:21px; margin-bottom:7px; }
        .sesen-hh-provider-row p { color:var(--sesen-hh-muted); }

        .sesen-hh-usecase-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); column-gap:64px; }
        .sesen-hh-usecase { display:grid; grid-template-columns:46px 1fr; gap:18px; padding:29px 0; border-top:1px solid var(--sesen-hh-divider); }
        .sesen-hh-usecase.is-wide { grid-column:1 / -1; grid-template-columns:46px minmax(0,1fr); border-bottom:1px solid var(--sesen-hh-divider); }
        .sesen-hh-usecase.is-wide > div:last-child { max-width:920px; }
        .sesen-hh-usecase .sesen-hh-link { margin-top:12px; }
        .sesen-hh-usecase-icon { width:42px; height:42px; display:grid; place-items:center; border-radius:12px; background:var(--sesen-hh-pale); color:var(--sesen-hh-blue-dark); }
        .sesen-hh-usecase h3 { font-size:21px; margin-bottom:8px; }
        .sesen-hh-usecase p { color:var(--sesen-hh-muted); font-size:16px; }

        .sesen-hh-access-grid { display:grid; grid-template-columns:.95fr 1.05fr; gap:76px; align-items:center; }
        .sesen-hh-access-copy h2 { color:#fff; }
        .sesen-hh-access-copy > p { font-size:18px; color:#D9E3FF; margin-top:20px; max-width:610px; }
        .sesen-hh-access-link { color:#fff!important; margin-top:28px; }
        .sesen-hh-access-types { display:grid; gap:12px; }
        .sesen-hh-access-type { display:grid; grid-template-columns:48px 1fr; gap:16px; padding:21px 0; border-top:1px solid rgba(255,255,255,.18); }
        .sesen-hh-access-type:last-child { border-bottom:1px solid rgba(255,255,255,.18); }
        .sesen-hh-access-type-icon { width:42px; height:42px; border-radius:12px; display:grid; place-items:center; color:#fff; background:rgba(200,214,255,.1); }
        .sesen-hh-access-type h3 { color:#fff; font-size:20px; margin-bottom:5px; }
        .sesen-hh-access-type p { color:#C9D5F7; }

        .sesen-hh-moments { display:grid; grid-template-columns:1.05fr .95fr; gap:72px; align-items:start; }
        .sesen-hh-moments-intro p { margin-top:22px; font-size:18px; max-width:620px; }
        .sesen-hh-moment-list { border-top:1px solid var(--sesen-hh-divider); }
        .sesen-hh-moment { display:grid; grid-template-columns:105px 1fr; gap:24px; padding:24px 0; border-bottom:1px solid var(--sesen-hh-divider); }
        .sesen-hh-moment strong { color:var(--sesen-hh-blue-dark); font-size:13px; letter-spacing:.06em; text-transform:uppercase; }
        .sesen-hh-moment p { color:var(--sesen-hh-muted); }

        .sesen-hh-medical-grid { display:grid; grid-template-columns:1fr 1fr; gap:70px; align-items:center; }
        .sesen-hh-medical-copy > p { margin-top:20px; font-size:18px; }
        .sesen-hh-specialties { display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--sesen-hh-border); border-left:1px solid var(--sesen-hh-border); background:#fff; }
        .sesen-hh-specialty { min-height:62px; display:flex; align-items:center; padding:0 20px; border-right:1px solid var(--sesen-hh-border); border-bottom:1px solid var(--sesen-hh-border); color:var(--sesen-hh-navy); font-weight:600; }

        .sesen-hh-digital-grid { display:grid; grid-template-columns:.92fr 1.08fr; gap:78px; align-items:center; }
        .sesen-hh-digital-copy > p { margin-top:20px; font-size:18px; }
        .sesen-hh-digital-list { margin:26px 0 0; padding:0; list-style:none; display:grid; gap:12px; }
        .sesen-hh-digital-list li { display:flex; gap:10px; color:var(--sesen-hh-body); }
        .sesen-hh-digital-list li svg { color:var(--sesen-hh-blue-dark); flex:0 0 auto; margin-top:4px; }
        .sesen-hh-digital-ui { background:#fff; border:1px solid var(--sesen-hh-border); border-radius:28px; padding:18px; box-shadow:0 24px 60px rgba(23,38,77,.08); }
        .sesen-hh-ui-top { display:flex; align-items:center; justify-content:space-between; padding:7px 6px 15px; border-bottom:1px solid var(--sesen-hh-divider); }
        .sesen-hh-ui-brand { display:flex; align-items:center; gap:9px; font-weight:700; color:var(--sesen-hh-navy); font-size:14px; }
        .sesen-hh-ui-dot { width:9px; height:9px; border-radius:50%; background:var(--sesen-hh-blue); }
        .sesen-hh-ui-lang { font-size:12px; color:var(--sesen-hh-muted); }
        .sesen-hh-ui-body { display:grid; grid-template-columns:140px 1fr; min-height:330px; }
        .sesen-hh-ui-nav { padding:20px 12px 20px 4px; border-right:1px solid var(--sesen-hh-divider); display:grid; align-content:start; gap:8px; }
        .sesen-hh-ui-nav span { padding:9px 11px; border-radius:10px; color:var(--sesen-hh-muted); font-size:13px; }
        .sesen-hh-ui-nav span:first-child { background:var(--sesen-hh-pale); color:var(--sesen-hh-blue-dark); font-weight:700; }
        .sesen-hh-ui-content { padding:24px; }
        .sesen-hh-ui-welcome { font-family:"Inter Tight",Inter,sans-serif; font-size:22px; color:var(--sesen-hh-navy); font-weight:500; margin-bottom:7px; }
        .sesen-hh-ui-sub { color:var(--sesen-hh-muted); font-size:13px; margin-bottom:22px; }
        .sesen-hh-ui-panel { border:1px solid var(--sesen-hh-divider); border-radius:16px; padding:16px; margin-bottom:12px; }
        .sesen-hh-ui-panel strong { display:block; color:var(--sesen-hh-navy); font-size:13px; margin-bottom:5px; }
        .sesen-hh-ui-panel span { color:var(--sesen-hh-muted); font-size:12px; }
        .sesen-hh-ui-action { display:inline-flex; margin-top:14px; background:var(--sesen-hh-blue); color:#fff; border-radius:999px; padding:8px 14px; font-size:11px; font-weight:700; letter-spacing:.03em; }

        .sesen-hh-ops-grid { display:grid; grid-template-columns:1fr 1fr; gap:1px; background:var(--sesen-hh-border); border:1px solid var(--sesen-hh-border); border-radius:28px; overflow:hidden; }
        .sesen-hh-ops-col { background:#fff; padding:42px; }
        .sesen-hh-ops-col h3 { margin-bottom:14px; }
        .sesen-hh-ops-col p { color:var(--sesen-hh-muted); }
        .sesen-hh-mini-list { display:grid; grid-template-columns:1fr 1fr; gap:10px 24px; margin-top:25px; }
        .sesen-hh-mini-list span { display:flex; gap:8px; align-items:flex-start; color:var(--sesen-hh-body); }
        .sesen-hh-mini-list svg { color:var(--sesen-hh-blue-dark); margin-top:4px; flex:0 0 auto; }

        .sesen-hh-workflow { display:grid; grid-template-columns:repeat(3,1fr); border-top:1px solid var(--sesen-hh-border); border-bottom:1px solid var(--sesen-hh-border); }
        .sesen-hh-workflow-stage { padding:36px 34px 38px 0; position:relative; }
        .sesen-hh-workflow-stage + .sesen-hh-workflow-stage { border-left:1px solid var(--sesen-hh-border); padding-left:34px; }
        .sesen-hh-risk { color:var(--sesen-hh-blue-dark); font-size:12px; font-weight:700; letter-spacing:.09em; text-transform:uppercase; margin-bottom:10px; }
        .sesen-hh-workflow-stage h3 { margin-bottom:12px; }
        .sesen-hh-workflow-stage p { color:var(--sesen-hh-muted); }
        .sesen-hh-examples { margin-top:20px; display:flex; flex-wrap:wrap; gap:7px; }
        .sesen-hh-examples span { font-size:12px; color:var(--sesen-hh-body); background:var(--sesen-hh-pale); border-radius:999px; padding:6px 10px; }

        .sesen-hh-expertise-grid { display:grid; grid-template-columns:1fr 1fr; gap:80px; align-items:start; }
        .sesen-hh-expertise-copy > p { margin-top:20px; font-size:18px; }
        .sesen-hh-human-list { display:grid; gap:12px; margin-top:28px; }
        .sesen-hh-human-list div { display:flex; gap:10px; }
        .sesen-hh-human-list svg { color:var(--sesen-hh-blue-dark); margin-top:4px; }
        .sesen-hh-ai-panel { background:var(--sesen-hh-pale); border:1px solid #D9E3FF; border-radius:28px; padding:38px; }
        .sesen-hh-ai-panel h3 { margin-bottom:14px; }
        .sesen-hh-ai-panel p { color:var(--sesen-hh-body); }
        .sesen-hh-ai-features { margin-top:22px; display:grid; gap:11px; }
        .sesen-hh-ai-features span { display:flex; gap:9px; color:var(--sesen-hh-body); }
        .sesen-hh-ai-features svg { color:var(--sesen-hh-blue-dark); margin-top:3px; }

        .sesen-hh-control-grid { display:grid; grid-template-columns:repeat(2,1fr); border-top:1px solid var(--sesen-hh-border); border-left:1px solid var(--sesen-hh-border); }
        .sesen-hh-control { padding:34px; border-right:1px solid var(--sesen-hh-border); border-bottom:1px solid var(--sesen-hh-border); background:#fff; }
        .sesen-hh-control-icon { width:44px; height:44px; display:grid; place-items:center; border-radius:13px; color:var(--sesen-hh-blue-dark); background:var(--sesen-hh-pale); margin-bottom:20px; }
        .sesen-hh-control h3 { margin-bottom:10px; }
        .sesen-hh-control p { color:var(--sesen-hh-muted); }
        .sesen-hh-quality-foot { display:flex; align-items:flex-start; justify-content:space-between; gap:28px; padding-top:24px; }
        .sesen-hh-quality-foot p { max-width:820px; color:var(--sesen-hh-body); }

        .sesen-hh-practice { display:grid; grid-template-columns:.95fr 1.05fr; gap:68px; align-items:start; }
        .sesen-hh-practice-copy p { margin-top:20px; font-size:18px; }
        .sesen-hh-practice-flow { display:grid; gap:0; border:1px solid var(--sesen-hh-border); border-radius:26px; overflow:hidden; }
        .sesen-hh-practice-row { display:grid; grid-template-columns:145px 1fr; gap:20px; padding:20px 24px; background:#fff; border-bottom:1px solid var(--sesen-hh-divider); }
        .sesen-hh-practice-row:last-child { border-bottom:0; }
        .sesen-hh-practice-row strong { color:var(--sesen-hh-navy); }
        .sesen-hh-practice-row span { color:var(--sesen-hh-muted); }
        .sesen-hh-practice-note { margin-top:22px; padding:18px 20px; background:var(--sesen-hh-pale); border-left:2px solid var(--sesen-hh-blue); color:var(--sesen-hh-navy); }

        .sesen-hh-language-grid { display:grid; grid-template-columns:.8fr 1.2fr; gap:70px; align-items:center; }
        .sesen-hh-language-copy p { margin-top:18px; font-size:18px; }
        .sesen-hh-language-list { display:flex; flex-wrap:wrap; gap:10px; }
        .sesen-hh-language-list span { padding:8px 12px; border-radius:999px; background:#fff; border:1px solid var(--sesen-hh-border); color:var(--sesen-hh-navy); font-size:14px; }

        .sesen-hh-related { display:grid; grid-template-columns:repeat(2,1fr); column-gap:58px; border-top:1px solid var(--sesen-hh-border); }
        .sesen-hh-related-item { padding:28px 0; border-bottom:1px solid var(--sesen-hh-border); }
        .sesen-hh-related-item h3 { font-size:21px; margin-bottom:8px; }
        .sesen-hh-related-item p { color:var(--sesen-hh-muted); margin-bottom:14px; }

        .sesen-hh-resources-grid { display:grid; grid-template-columns:1.05fr .95fr; gap:72px; align-items:start; }
        .sesen-hh-resource-copy > p { font-size:18px; margin-top:20px; max-width:650px; }
        .sesen-hh-resource-topics { display:grid; grid-template-columns:1fr 1fr; border-top:1px solid var(--sesen-hh-border); border-left:1px solid var(--sesen-hh-border); }
        .sesen-hh-resource-topic { padding:22px; min-height:92px; border-right:1px solid var(--sesen-hh-border); border-bottom:1px solid var(--sesen-hh-border); color:var(--sesen-hh-navy); font-weight:600; display:flex; align-items:center; }

        .sesen-hh-faq { max-width:940px; }
        .sesen-hh-faq details { border-top:1px solid var(--sesen-hh-border); }
        .sesen-hh-faq details:last-child { border-bottom:1px solid var(--sesen-hh-border); }
        .sesen-hh-faq summary { list-style:none; cursor:pointer; min-height:78px; padding:22px 54px 22px 0; position:relative; display:flex; align-items:center; font-family:"Inter Tight",Inter,sans-serif; font-size:20px; line-height:1.35; font-weight:500; color:var(--sesen-hh-navy); }
        .sesen-hh-faq summary::-webkit-details-marker { display:none; }
        .sesen-hh-faq summary:after { content:"+"; width:30px; height:30px; border-radius:50%; border:1px solid var(--sesen-hh-border); display:grid; place-items:center; position:absolute; right:0; color:var(--sesen-hh-blue-dark); font-family:Inter,sans-serif; font-size:19px; font-weight:400; }
        .sesen-hh-faq details[open] summary:after { content:"–"; }
        .sesen-hh-faq-answer { padding:0 68px 26px 0; color:var(--sesen-hh-body); font-size:16px; }

        .sesen-hh-final { padding:82px 0; background:linear-gradient(120deg,#17264D 0%,#253F8F 100%); }
        .sesen-hh-final-grid { display:grid; grid-template-columns:1.15fr .85fr; gap:64px; align-items:center; }
        .sesen-hh-final h2 { color:#fff; max-width:690px; }
        .sesen-hh-final p { color:#D8E1F8; font-size:18px; margin-top:18px; max-width:690px; }
        .sesen-hh-final-actions { display:flex; justify-content:flex-end; flex-wrap:wrap; gap:12px; }

        @media (max-width:1100px) {
          .sesen-hh-shell { padding-left:40px; padding-right:40px; }
          .sesen-hh-hero-grid { grid-template-columns:1fr .82fr; gap:42px; }
          .sesen-hh-journey { grid-template-columns:repeat(3,1fr); gap:38px 24px; }
          .sesen-hh-journey:before { display:none; }
          .sesen-hh-access-grid,.sesen-hh-medical-grid,.sesen-hh-digital-grid,.sesen-hh-language-grid { gap:48px; }
          .sesen-hh-split,.sesen-hh-moments,.sesen-hh-expertise-grid,.sesen-hh-practice,.sesen-hh-resources-grid { gap:52px; }
        }
        @media (max-width:900px) {
          .sesen-hh-shell { padding-left:29px; padding-right:29px; }
          .sesen-hh-section { padding:76px 0; }
          .sesen-hh-section--compact { padding:68px 0; }
          .sesen-hh-page h1 { font-size:42px; }
          .sesen-hh-page h2 { font-size:32px; }
          .sesen-hh-page h3 { font-size:22px; }
          .sesen-hh-hero { padding:76px 0 70px; }
          .sesen-hh-hero-grid,.sesen-hh-split,.sesen-hh-access-grid,.sesen-hh-moments,.sesen-hh-medical-grid,.sesen-hh-digital-grid,.sesen-hh-expertise-grid,.sesen-hh-practice,.sesen-hh-language-grid,.sesen-hh-resources-grid,.sesen-hh-final-grid { grid-template-columns:1fr; }
          .sesen-hh-hero-art { max-width:460px; justify-self:start; margin-top:8px; }
          .sesen-hh-trust-inner { grid-template-columns:1fr 1fr; gap:16px 24px; padding-top:22px; padding-bottom:22px; }
          .sesen-hh-journey { grid-template-columns:1fr 1fr; }
          .sesen-hh-provider-map { border-left:0; border-top:1px solid var(--sesen-hh-border); padding:30px 0 0; }
          .sesen-hh-usecase-grid { grid-template-columns:1fr; }
          .sesen-hh-usecase.is-wide { grid-column:auto; }
          .sesen-hh-usecase:last-child { border-bottom:1px solid var(--sesen-hh-divider); }
          .sesen-hh-quality-foot { flex-direction:column; gap:14px; }
          .sesen-hh-workflow { grid-template-columns:1fr; }
          .sesen-hh-workflow-stage { padding:28px 0; }
          .sesen-hh-workflow-stage + .sesen-hh-workflow-stage { border-left:0; border-top:1px solid var(--sesen-hh-border); padding-left:0; }
          .sesen-hh-ops-grid { grid-template-columns:1fr; }
          .sesen-hh-control-grid { grid-template-columns:1fr; }
          .sesen-hh-related { grid-template-columns:1fr; }
          .sesen-hh-related-item:nth-child(odd) { border-bottom:1px solid var(--sesen-hh-border); }
          .sesen-hh-final-actions { justify-content:flex-start; }
        }
        @media (max-width:600px) {
          .sesen-hh-shell { padding-left:20px; padding-right:20px; }
          .sesen-hh-section { padding:68px 0; }
          .sesen-hh-section--compact { padding:64px 0; }
          .sesen-hh-page h1 { font-size:42px; }
          .sesen-hh-page h2 { font-size:32px; }
          .sesen-hh-page h3 { font-size:21px; }
          .sesen-hh-section-head { margin-bottom:38px; }
          .sesen-hh-hero-copy > p,.sesen-hh-section-head h2 + p,.sesen-hh-split-copy > p,.sesen-hh-moments-intro p,.sesen-hh-medical-copy > p,.sesen-hh-digital-copy > p,.sesen-hh-expertise-copy > p,.sesen-hh-practice-copy p,.sesen-hh-language-copy p,.sesen-hh-final p { font-size:17px; }
          .sesen-hh-btns,.sesen-hh-final-actions { display:grid; grid-template-columns:1fr; width:100%; }
          .sesen-hh-btn { width:100%; min-height:50px; padding:13px 20px; }
          .sesen-hh-trust-inner { grid-template-columns:1fr; gap:12px; padding-top:18px; padding-bottom:18px; }
          .sesen-hh-trust-item { min-height:40px; }
          .sesen-hh-journey { grid-template-columns:1fr; gap:28px; }
          .sesen-hh-journey-step { display:grid; grid-template-columns:48px 1fr; column-gap:16px; padding-right:0; }
          .sesen-hh-journey-dot { width:48px; height:48px; grid-row:1 / span 2; margin:0; }
          .sesen-hh-journey-step h3 { align-self:end; }
          .sesen-hh-provider-row { grid-template-columns:1fr; gap:5px; }
          .sesen-hh-usecase { grid-template-columns:40px 1fr; gap:14px; }
          .sesen-hh-usecase-icon { width:38px; height:38px; }
          .sesen-hh-moment { grid-template-columns:1fr; gap:8px; }
          .sesen-hh-specialties { grid-template-columns:1fr; }
          .sesen-hh-digital-ui { padding:12px; border-radius:20px; }
          .sesen-hh-ui-top { flex-wrap:wrap; gap:8px 14px; align-items:flex-start; }
          .sesen-hh-ui-lang { line-height:1.45; }
          .sesen-hh-ui-body { grid-template-columns:1fr; min-height:0; }
          .sesen-hh-ui-nav { grid-template-columns:repeat(2,minmax(0,1fr)); border-right:0; border-bottom:1px solid var(--sesen-hh-divider); padding:14px 4px; }
          .sesen-hh-ui-nav span { min-height:39px; display:flex; align-items:center; }
          .sesen-hh-ui-content { padding:18px 10px 10px; }
          .sesen-hh-ops-col,.sesen-hh-ai-panel,.sesen-hh-control { padding:24px; }
          .sesen-hh-related-item { padding:24px 0; }
          .sesen-hh-resource-topic { min-height:72px; padding:18px; }
          .sesen-hh-mini-list { grid-template-columns:1fr; }
          .sesen-hh-practice-row { grid-template-columns:1fr; gap:6px; }
          .sesen-hh-resource-topics { grid-template-columns:1fr; }
          .sesen-hh-faq summary { font-size:19px; padding-right:48px; }
          .sesen-hh-faq-answer { padding-right:0; }
        }
        @media (max-width:360px) {
          .sesen-hh-page h1 { font-size:38px; }
          .sesen-hh-page h2 { font-size:30px; }
          .sesen-hh-hero { padding-top:68px; }
          .sesen-hh-hero-art { max-width:330px; }
          .sesen-hh-ui-nav { grid-template-columns:1fr; }
        }
        @media (prefers-reduced-motion:reduce) {
          .sesen-hh-btn { transition:none; }
          .sesen-hh-btn:hover { transform:none; }
        }
      `}</style>

      <section className="sesen-hh-hero">
        <div className="sesen-hh-shell sesen-hh-hero-grid">
          <div className="sesen-hh-hero-copy">
            <h1>Healthcare &amp; Hospital Translation Services for Multilingual Patient Care</h1>
            <p>Sesen helps hospitals, health systems, clinics, academic medical centers, and healthcare organizations communicate accurately across languages throughout the patient journey—from patient education and medical documentation to language access, digital health, workforce training, and hospital operations.</p>
            <div className="sesen-hh-btns">
              <Button href={LINKS.contactSales}>TALK TO A HEALTHCARE TRANSLATION EXPERT</Button>
              <Button href={LINKS.quote} variant="secondary">REQUEST A QUOTE</Button>
            </div>
          </div>
          <HeroArtwork />
        </div>
      </section>

      <section className="sesen-hh-trust" aria-label="Healthcare translation capabilities">
        <div className="sesen-hh-shell sesen-hh-trust-inner">
          <div className="sesen-hh-trust-item"><span className="sesen-hh-trust-icon"><Icon name="patient" size={19}/></span>Specialized Healthcare Linguists</div>
          <div className="sesen-hh-trust-item"><span className="sesen-hh-trust-icon"><Icon name="globe" size={19}/></span>150+ Languages</div>
          <div className="sesen-hh-trust-item"><span className="sesen-hh-trust-icon"><Icon name="language" size={19}/></span>Healthcare Language Access</div>
          <div className="sesen-hh-trust-item"><span className="sesen-hh-trust-icon"><Icon name="badge" size={19}/></span>ISO-Certified Quality Processes</div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--pale">
        <div className="sesen-hh-shell">
          <SectionHead title="Multilingual Communication Across the Healthcare Journey" lead="Healthcare translation extends far beyond a single medical document. Sesen supports the connected communication patients, caregivers, clinicians, and healthcare teams rely on before, during, and after care." />
          <div className="sesen-hh-journey">
            {[
              ["patient","Find Care","Healthcare websites, provider directories, service information, facility information, and appointment scheduling."],
              ["document","Prepare","Registration, intake forms, preparation instructions, consent information, and pre-procedure communication."],
              ["hospital","Receive Care","Patient education, treatment information, medication guidance, clinical materials, and interpreter-supported communication."],
              ["check","Recover","Discharge instructions, recovery guidance, rehabilitation materials, follow-up information, and home-care instructions."],
              ["digital","Stay Connected","Patient portals, mobile apps, secure messages, reminders, surveys, and continuing health education."],
            ].map(([icon,title,text]) => <div className="sesen-hh-journey-step" key={title}><div className="sesen-hh-journey-dot"><Icon name={icon}/></div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell sesen-hh-split">
          <div className="sesen-hh-split-copy">
            <Eyebrow>HEALTHCARE DELIVERY</Eyebrow>
            <h2>Translation Designed for Healthcare Organizations</h2>
            <p>Hospitals and health systems communicate with patients, caregivers, clinicians, employees, administrators, researchers, and communities. Each audience has different needs for medical terminology, clarity, context, and readability.</p>
            <p>Sesen's healthcare services are designed around the delivery of care—distinct from the product-focused regulatory workflows used by pharmaceutical, biotechnology, and medical device organizations.</p>
          </div>
          <div className="sesen-hh-provider-map">
            <div className="sesen-hh-provider-row"><div className="sesen-hh-provider-kicker">Healthcare</div><div><h3>Delivering Care</h3><p>Patient communication, clinical documentation, language access, digital care experiences, workforce communication, and healthcare operations.</p></div></div>
            <div className="sesen-hh-provider-row"><div className="sesen-hh-provider-kicker">Life Sciences</div><div><h3>Developing &amp; Managing Medical Products</h3><p>Clinical trials, regulatory submissions, pharmaceutical labeling, medical devices, safety content, and other regulated product workflows.</p></div></div>
            <a className="sesen-hh-link" href={LINKS.lifeSciences}>Explore Life Sciences Translation Services <Arrow/></a>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--soft">
        <div className="sesen-hh-shell">
          <SectionHead title="Translation Across Healthcare Organizations" lead="Sesen supports multilingual communication across the patient-facing, clinical, digital, workforce, research, and operational environments of modern healthcare organizations." />
          <div className="sesen-hh-usecase-grid">
            {useCases.map(([icon,title,text], i) => {
              const isResearch = i === useCases.length - 1;
              return (
                <div className={`sesen-hh-usecase${isResearch ? " is-wide" : ""}`} key={title}>
                  <div className="sesen-hh-usecase-icon"><Icon name={icon}/></div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    {isResearch ? <a className="sesen-hh-link" href={LINKS.clinicalTrials}>For regulated studies, explore Clinical Trial Translation <Arrow/></a> : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--dark">
        <div className="sesen-hh-shell sesen-hh-access-grid">
          <div className="sesen-hh-access-copy">
            <Eyebrow dark>LANGUAGE ACCESS</Eyebrow>
            <h2>Support Multilingual Communication Across the Healthcare Organization</h2>
            <p>A patient may need multilingual information when finding a provider, registering for care, preparing for a procedure, understanding treatment, leaving the hospital, accessing a portal, or communicating after care. Sesen helps healthcare organizations support language-access programs across these touchpoints with coordinated written, spoken, and digital language services.</p>
            <a className="sesen-hh-link sesen-hh-access-link" href={LINKS.interpreting}>Explore Healthcare Interpreting <Arrow/></a>
          </div>
          <div className="sesen-hh-access-types">
            <div className="sesen-hh-access-type"><div className="sesen-hh-access-type-icon"><Icon name="document"/></div><div><h3>Written Translation</h3><p>Patient materials, notices, forms, signage, education, digital communication, and other written healthcare content.</p></div></div>
            <div className="sesen-hh-access-type"><div className="sesen-hh-access-type-icon"><Icon name="language"/></div><div><h3>Healthcare Interpreting</h3><p>Real-time spoken language support for conversations between patients, caregivers, clinicians, and healthcare teams.</p></div></div>
            <div className="sesen-hh-access-type"><div className="sesen-hh-access-type-icon"><Icon name="digital"/></div><div><h3>Digital Localization</h3><p>Patient portals, websites, apps, telehealth, software interfaces, and other digital experiences adapted for language, layout, and usability.</p></div></div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell sesen-hh-moments">
          <div className="sesen-hh-moments-intro">
            <Eyebrow>PATIENT COMMUNICATION</Eyebrow>
            <h2>Patient Communication That Supports Understanding</h2>
            <p>Patient-facing healthcare content must preserve medical meaning while remaining understandable to patients and caregivers. Sesen combines healthcare translation expertise with audience-aware language, terminology control, and professional review for communication used across the care experience.</p>
            <div className="sesen-hh-inline-action"><a className="sesen-hh-link" href={LINKS.patientFacing}>Explore Patient-Facing Materials Translation <Arrow/></a></div>
          </div>
          <div className="sesen-hh-moment-list">
            <div className="sesen-hh-moment"><strong>Education &amp; Instructions</strong><p>Condition information, appointment preparation, procedure guidance, treatment instructions, home-care materials, and patient education.</p></div>
            <div className="sesen-hh-moment"><strong>Consent &amp; Decisions</strong><p>Consent information, procedure explanations, treatment-related materials, and communication that supports informed discussions with patients and caregivers.</p></div>
            <div className="sesen-hh-moment"><strong>Medication &amp; Discharge</strong><p>Medication guidance, discharge instructions, recovery information, rehabilitation materials, follow-up directions, and continuing-care content.</p></div>
            <div className="sesen-hh-moment"><strong>Ongoing Engagement</strong><p>Portal content, appointment reminders, secure messages, preventive-care communication, chronic-care information, surveys, and community outreach.</p></div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--pale">
        <div className="sesen-hh-shell sesen-hh-medical-grid">
          <div className="sesen-hh-medical-copy">
            <Eyebrow>MEDICAL EXPERTISE</Eyebrow>
            <h2>Medical Translation Requires More Than Language Fluency</h2>
            <p>Medical terminology changes by specialty, context, audience, and intended use. A term appropriate for a clinical report may not be the best language for patient education. Sesen assigns professional native-language linguists with relevant healthcare and medical expertise and can establish terminology resources, translation memories, style guidance, and reference materials for complex programs.</p>
            <div className="sesen-hh-inline-action"><a className="sesen-hh-link" href={LINKS.medicalScientific}>Explore Medical &amp; Scientific Translation Services <Arrow/></a></div>
          </div>
          <div className="sesen-hh-specialties" aria-label="Representative medical specialties">
            {["Cardiology","Oncology","Neurology","Orthopedics","Pediatrics","Women's Health","Emergency Medicine","Surgical Care","Behavioral Health","Rehabilitation","Primary Care","Radiology & Imaging"].map(x => <div className="sesen-hh-specialty" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell sesen-hh-digital-grid">
          <div className="sesen-hh-digital-copy">
            <Eyebrow>DIGITAL HEALTH</Eyebrow>
            <h2>Localize the Digital Healthcare Experience</h2>
            <p>Patient communication increasingly moves between physical and digital healthcare environments. Sesen localizes patient portals, healthcare websites, telehealth, patient-facing content connected to EHR and EMR environments, mobile health applications, scheduling systems, forms, secure messages, and notifications.</p>
            <ul className="sesen-hh-digital-list">
              {["UI and UX localization","Translation memory and terminology control","String-context review","Text expansion and multibyte language support","Right-to-left layouts","Linguistic QA and in-context review","Continuous localization workflows"].map(x => <li key={x}><Icon name="check" size={17}/><span>{x}</span></li>)}
            </ul>
            <div className="sesen-hh-inline-action"><a className="sesen-hh-link" href={LINKS.ehealth}>Explore eHealth &amp; mHealth Localization <Arrow/></a></div>
          </div>
          <div className="sesen-hh-digital-ui" aria-label="Illustrative multilingual patient portal interface">
            <div className="sesen-hh-ui-top"><div className="sesen-hh-ui-brand"><span className="sesen-hh-ui-dot"></span>Patient Portal</div><div className="sesen-hh-ui-lang">English · Español · 中文</div></div>
            <div className="sesen-hh-ui-body">
              <div className="sesen-hh-ui-nav"><span>Overview</span><span>Appointments</span><span>Messages</span><span>Care Plan</span><span>Documents</span><span>Support</span></div>
              <div className="sesen-hh-ui-content"><div className="sesen-hh-ui-welcome">Your Care, In Your Language</div><div className="sesen-hh-ui-sub">Localized patient content with context-aware review.</div><div className="sesen-hh-ui-panel"><strong>Upcoming Appointment</strong><span>Preparation instructions and arrival information</span></div><div className="sesen-hh-ui-panel"><strong>Care Instructions</strong><span>Translated discharge and follow-up guidance</span></div><div className="sesen-hh-ui-panel"><strong>Secure Message</strong><span>Patient-facing communication in the preferred language</span><div className="sesen-hh-ui-action">VIEW MESSAGE</div></div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--soft">
        <div className="sesen-hh-shell">
          <SectionHead title="Support the People and Operations Behind Patient Care" lead="Healthcare organizations depend on thousands of communications that may never be seen by a patient but still contribute to how care is delivered. Sesen extends multilingual support to employees, clinicians, administrators, contractors, and operational teams." />
          <div className="sesen-hh-ops-grid">
            <div className="sesen-hh-ops-col"><h3>Healthcare Workforce Communication</h3><p>Support multilingual employees with accurate, consistent learning and internal communication.</p><div className="sesen-hh-mini-list">{["New-hire onboarding","Employee handbooks","Clinical education","eLearning","Safety programs","Compliance training","HR communication","Employee announcements"].map(x => <span key={x}><Icon name="check" size={16}/>{x}</span>)}</div></div>
            <div className="sesen-hh-ops-col"><h3>Hospital Operations</h3><p>Coordinate multilingual communication across facilities, departments, and recurring operational programs.</p><div className="sesen-hh-mini-list">{["Departmental policies","Facility procedures","Emergency preparedness","Health and safety","Administration","Procurement","Billing information","Patient wayfinding"].map(x => <span key={x}><Icon name="check" size={16}/>{x}</span>)}</div></div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell">
          <SectionHead eyebrow="WORKFLOW DESIGN" title="Match the Translation Workflow to the Content, Audience, and Intended Use" lead="A hospital newsletter, patient portal message, discharge instruction, medical report, and clinical research document should not automatically move through the same translation process. Sesen configures workflows around content type, audience, sensitivity, terminology, language, turnaround, and the professional review appropriate for the project." />
          <div className="sesen-hh-workflow">
            <div className="sesen-hh-workflow-stage"><div className="sesen-hh-risk">Operational &amp; Informational</div><h3>Efficient, Consistent Workflows</h3><p>For suitable content, technology-assisted workflows can improve speed and consistency while professional validation maintains linguistic quality.</p><div className="sesen-hh-examples"><span>Internal communication</span><span>General web content</span><span>Administrative materials</span></div></div>
            <div className="sesen-hh-workflow-stage"><div className="sesen-hh-risk">Patient-Facing</div><h3>Audience-Aware Professional Review</h3><p>Patient communication requires careful attention to meaning, terminology, tone, readability, and context.</p><div className="sesen-hh-examples"><span>Patient education</span><span>Appointment information</span><span>Portal communication</span><span>Care instructions</span></div></div>
            <div className="sesen-hh-workflow-stage"><div className="sesen-hh-risk">Clinically Sensitive</div><h3>Specialist, Structured Review</h3><p>Medical and clinically sensitive content may call for specialist linguists, additional review, terminology control, and more structured quality assurance.</p><div className="sesen-hh-examples"><span>Discharge instructions</span><span>Medication guidance</span><span>Consent information</span><span>Medical documentation</span></div></div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--pale">
        <div className="sesen-hh-shell sesen-hh-expertise-grid">
          <div className="sesen-hh-expertise-copy">
            <h2>Professional Healthcare Expertise With Smarter Translation Workflows</h2>
            <p>Sesen combines professional language expertise with modern translation technology to help healthcare organizations manage multilingual content with greater speed, consistency, and control.</p>
            <div className="sesen-hh-human-list">
              {["Professional native-language linguists","Healthcare and medical subject expertise","Editing and proofreading where appropriate","Terminology validation and reviewer alignment","Translation memory and approved-content reuse"].map(x => <div key={x}><Icon name="check" size={17}/><span>{x}</span></div>)}
            </div>
          </div>
          <div className="sesen-hh-ai-panel">
            <Eyebrow>SESENGPT</Eyebrow>
            <h3>AI-Assisted for Efficiency. Professional Expertise at the Center.</h3>
            <p>SesenGPT and translation technologies can assist appropriate workflow stages by helping teams reuse approved translations, apply terminology, identify inconsistencies, automate repetitive tasks, and support quality review. Professional linguists and reviewers remain central to healthcare translation quality and final delivery.</p>
            <div className="sesen-hh-ai-features">{["Translation memory reuse","Terminology application","Consistency assistance","Repetitive content processing","Quality-check support","Workflow coordination"].map(x => <span key={x}><Icon name="check" size={16}/>{x}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell">
          <SectionHead title="Built for Healthcare Quality and Enterprise Control" lead="Healthcare organizations need multilingual content to remain accurate and manageable as documents change, terminology evolves, facilities expand, and communication moves across departments and channels." />
          <div className="sesen-hh-control-grid">
            <div className="sesen-hh-control"><div className="sesen-hh-control-icon"><Icon name="term"/></div><h3>Terminology Governance</h3><p>Maintain consistent medical terminology, client-approved language, patient-facing terminology, glossaries, translation memories, style guidance, and department-specific preferences.</p></div>
            <div className="sesen-hh-control"><div className="sesen-hh-control-icon"><Icon name="check"/></div><h3>Structured Quality Control</h3><p>Configure qualified linguist assignment, translation and editing, proofreading, terminology validation, automated QA, formatting checks, in-context review, and final quality assurance as appropriate.</p></div>
            <div className="sesen-hh-control"><div className="sesen-hh-control-icon"><Icon name="lock"/></div><h3>Secure Content Handling</h3><p>Use controlled enterprise workflows and secure infrastructure to support confidential healthcare and life sciences content while limiting access to appropriate project resources.</p></div>
            <div className="sesen-hh-control"><div className="sesen-hh-control-icon"><Icon name="scale"/></div><h3>Scalable Program Management</h3><p>Centralize translation requests, language resources, terminology, review workflows, file management, project history, quality processes, and reporting across facilities and departments.</p></div>
          </div>
          <div className="sesen-hh-quality-foot">
            <p><strong>ISO-certified quality foundation:</strong> Sesen maintains ISO 17100, ISO 9001, and ISO 13485 certifications supporting professional translation, quality management, and regulated life sciences workflows.</p>
            <a className="sesen-hh-link" href={LINKS.quality}>Explore Sesen Quality Assurance <Arrow/></a>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--soft">
        <div className="sesen-hh-shell sesen-hh-practice">
          <div className="sesen-hh-practice-copy">
            <Eyebrow>HEALTHCARE TRANSLATION IN PRACTICE</Eyebrow>
            <h2>One Healthcare Organization. One Connected Multilingual Program.</h2>
            <p>A health system may receive translation requests from patient experience, clinical services, digital teams, training, research, and operations. Sesen helps bring those requests into a coordinated program rather than managing every document, channel, and department as an isolated project.</p>
            <div className="sesen-hh-practice-note">Centralized terminology, translation memories, reviewer guidance, and workflow rules help approved content strengthen future projects instead of being recreated from scratch.</div>
          </div>
          <div className="sesen-hh-practice-flow">
            <div className="sesen-hh-practice-row"><strong>Centralized Requests</strong><span>Patient, clinical, digital, workforce, research, and operational requests can be coordinated through one multilingual program.</span></div>
            <div className="sesen-hh-practice-row"><strong>Language Governance</strong><span>Approved terminology, style guidance, translation memories, and reference content establish consistency.</span></div>
            <div className="sesen-hh-practice-row"><strong>Content-Appropriate Workflows</strong><span>Professional linguists, review, quality controls, and technology are matched to the content, audience, and intended use.</span></div>
            <div className="sesen-hh-practice-row"><strong>Multichannel Delivery</strong><span>Documents, portals, websites, training, signage, and operational content are delivered through the appropriate channel.</span></div>
            <div className="sesen-hh-practice-row"><strong>Reuse &amp; Change Management</strong><span>Approved translations, updates, reviewer feedback, and version history support future multilingual work.</span></div>
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--pale">
        <div className="sesen-hh-shell sesen-hh-language-grid">
          <div className="sesen-hh-language-copy">
            <h2>Healthcare Translation in 150+ Languages</h2>
            <p>Healthcare language needs differ by country, community, facility, and patient population. Sesen supports both widely used global languages and languages important to specific patient communities, with attention to regional variation, terminology, audience, readability, and cultural context.</p>
          </div>
          <div className="sesen-hh-language-list">{["Spanish","Simplified Chinese","Traditional Chinese","Vietnamese","Korean","Arabic","French","Portuguese","Russian","Haitian Creole","Tagalog","Japanese","German","Polish"].map(x => <span key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell">
          <SectionHead title="Connected Healthcare and Life Sciences Translation Workflows" lead="Healthcare organizations increasingly operate at the intersection of clinical care, research, technology, medical products, and digital patient engagement. Explore specialized Sesen services for adjacent multilingual workflows." />
          <div className="sesen-hh-related">
            {[
              ["eHealth & mHealth Localization","Patient portals, mobile healthcare applications, telehealth, digital health platforms, and connected patient experiences.",LINKS.ehealth,"Explore eHealth & mHealth Localization"],
              ["Patient-Facing Materials Translation","Patient education, consent information, discharge instructions, treatment materials, and other healthcare communication.",LINKS.patientFacing,"Explore Patient-Facing Translation"],
              ["Clinical Trial Translation","Informed consent forms, protocols, site documents, patient-facing study materials, clinical reports, and multilingual trial communication.",LINKS.clinicalTrials,"Explore Clinical Trial Translation"],
              ["Pharmaceutical Translation","Clinical development, regulatory submissions, labeling, pharmacovigilance, medical affairs, and pharmaceutical commercialization.",LINKS.pharmaceutical,"Explore Pharmaceutical Translation"],
              ["Medical Device Translation","IFUs, labeling, software, technical documentation, clinical materials, training, and post-market communication.",LINKS.medicalDevice,"Explore Medical Device Translation"],
              ["Life Sciences Translation","Broader multilingual support for pharmaceutical, biotechnology, medical device, CRO, healthcare, and regulated content teams.",LINKS.lifeSciences,"Explore Life Sciences Translation"],
            ].map(([title,text,href,label]) => <div className="sesen-hh-related-item" key={title}><h3>{title}</h3><p>{text}</p><a className="sesen-hh-link" href={href}>{label} <Arrow/></a></div>)}
          </div>
        </div>
      </section>

      <section className="sesen-hh-section sesen-hh-section--soft">
        <div className="sesen-hh-shell sesen-hh-resources-grid">
          <div className="sesen-hh-resource-copy">
            <Eyebrow>HEALTHCARE RESOURCES</Eyebrow>
            <h2>Practical Guidance for Multilingual Healthcare Communication</h2>
            <p>Explore Sesen guidance, knowledge resources, case studies, white papers, and practical content for planning healthcare translation, language access, patient communication, digital localization, terminology, security, quality, and AI-enabled human workflows.</p>
            <div className="sesen-hh-inline-action"><a className="sesen-hh-link" href={LINKS.resources}>Explore the Sesen Resource Center <Arrow/></a></div>
          </div>
          <div className="sesen-hh-resource-topics">
            {["Healthcare Language Access","Patient-Facing Translation","Medical Translation Quality","Healthcare Terminology","Digital Health Localization","Patient Portal Localization","AI + Human Review","Security & Multilingual Content"].map(x => <div className="sesen-hh-resource-topic" key={x}>{x}</div>)}
          </div>
        </div>
      </section>

      <section className="sesen-hh-section">
        <div className="sesen-hh-shell">
          <SectionHead title="Frequently Asked Questions About Healthcare Translation Services" />
          <div className="sesen-hh-faq">
            {faqs.map(([q,a],i) => <details key={q} open={i===0}><summary>{q}</summary><div className="sesen-hh-faq-answer">{a}</div></details>)}
          </div>
        </div>
      </section>

      <section className="sesen-hh-final">
        <div className="sesen-hh-shell sesen-hh-final-grid">
          <div><h2>Make Multilingual Healthcare Communication Easier to Manage</h2><p>From a single patient document to an ongoing program across hospitals, departments, digital systems, and patient communities, Sesen combines healthcare expertise, ISO-certified quality processes, terminology governance, controlled workflows, and professional human validation.</p></div>
          <div className="sesen-hh-final-actions"><Button href={LINKS.contactSales}>TALK TO A HEALTHCARE TRANSLATION EXPERT</Button><Button href={LINKS.quote} variant="secondary">REQUEST A QUOTE</Button></div>
        </div>
      </section>
    </main>
  );
}
