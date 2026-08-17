import React from "react";

const C = {
  magenta: "#C11D63",
  magentaDark: "#A71954",
  burgundy: "#7A1542",
  blush: "#FDF2F7",
  pinkLight: "#F2A7C6",
  ink: "#17171A",
  body: "#414148",
  muted: "#6B6B73",
  line: "#E5E5EA",
  soft: "#F6F6F8",
  dark: "#17191F",
};

const links = {
  quote: "https://app.stepes.com/quote/",
  contact: "https://www.stepes.com/contact-us/",
  languages: "https://www.stepes.com/translation-languages/",
  heavyEquipment: "https://www.stepes.com/heavy-equipment-translation-services/",
  software: "https://www.stepes.com/software-localization-services/",
  aiMl: "https://www.stepes.com/ai-machine-learning-translation-services/",
  sop: "https://www.stepes.com/sop-translation-services/",
  workInstructions: "https://www.stepes.com/work-instruction-translation-services/",
  userManuals: "https://www.stepes.com/user-manual-translation-services/",
  aiHuman: "https://www.stepes.com/ai-human-translation-workflow/",
  aiReview: "https://www.stepes.com/ai-translation-review/",
  tm: "https://www.stepes.com/translation-memory/",
  portal: "https://www.stepes.com/translation-management-portal/",
  technical: "https://www.stepes.com/technical-translation-services/",
  financial: "https://www.stepes.com/financial-translation-services/",
  legal: "https://www.stepes.com/legal-translation-services/",
};

function ArrowIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M14 7l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LineIcon({ name, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round", strokeLinejoin: "round", fill: "none" };
  const paths = {
    geology: <><path {...common} d="M3.5 18.5 8 8l4 5 3-7 5.5 12.5"/><path {...common} d="M5 18.5h14"/><circle cx="8" cy="8" r="1.4" {...common}/></>,
    globe: <><circle cx="12" cy="12" r="9" {...common}/><path {...common} d="M3 12h18M12 3c2.4 2.6 3.5 5.6 3.5 9S14.4 18.4 12 21c-2.4-2.6-3.5-5.6-3.5-9S9.6 5.6 12 3Z"/></>,
    qa: <><path {...common} d="M12 3 4.5 6v5.3c0 4.5 3.1 7.9 7.5 9.7 4.4-1.8 7.5-5.2 7.5-9.7V6L12 3Z"/><path {...common} d="m8.5 12 2.2 2.2 4.8-5"/></>,
    tech: <><rect x="4" y="4" width="16" height="16" rx="3" {...common}/><path {...common} d="M8 9h8M8 13h5M8 17h3"/><circle cx="16.5" cy="16.5" r="1.5" {...common}/></>,
    mine: <><path {...common} d="m3 18 4.5-9 4 5 2.5-4 7 8"/><path {...common} d="M2.5 18h19"/><path {...common} d="m14 6 5-2-2 5"/></>,
    processing: <><circle cx="7" cy="8" r="3" {...common}/><circle cx="17" cy="16" r="3" {...common}/><path {...common} d="M9.5 10.2 14.5 14M14.5 9.5 10 14.5"/></>,
    critical: <><path {...common} d="m12 3 7 4v8l-7 6-7-6V7l7-4Z"/><path {...common} d="m8 8 4 8 4-8M8 8h8"/></>,
    equipment: <><path {...common} d="M3 16h12l2-4h3v4h1"/><circle cx="7" cy="18" r="2" {...common}/><circle cx="17" cy="18" r="2" {...common}/><path {...common} d="M5 16V9h7l3 7M7 9V6h5v3"/></>,
    digital: <><rect x="3" y="5" width="18" height="14" rx="2.5" {...common}/><path {...common} d="M7 15V9l4 3 3-4 3 2"/><path {...common} d="M7 19v2M17 19v2"/></>,
    safety: <><path {...common} d="M4 14a8 8 0 0 1 16 0"/><path {...common} d="M3 14h18M8 14v3M16 14v3M7 17h10"/></>,
    environment: <><path {...common} d="M20 4C10 4 5 8 5 14c0 3 2 5 5 5 6 0 10-7 10-15Z"/><path {...common} d="M4 20c3-5 7-8 12-10"/></>,
    docs: <><path {...common} d="M6 3h8l4 4v14H6z"/><path {...common} d="M14 3v5h5M9 12h6M9 16h6"/></>,
    finance: <><path {...common} d="M4 20V8M9 20V4M14 20v-9M19 20V6M2 20h20"/></>,
    people: <><circle cx="8" cy="9" r="3" {...common}/><circle cx="17" cy="10" r="2.5" {...common}/><path {...common} d="M3 20c.4-4 2.5-6 5-6s4.6 2 5 6M13 16c1-.8 2.2-1.2 3.5-1.2 2.6 0 4.2 1.8 4.5 5.2"/></>,
    language: <><path {...common} d="M4 5h9M8.5 5c-.2 5-2.2 8.5-5.5 11M6 11c1.5 2 3.6 3.6 6 4.5"/><path {...common} d="m14 19 3.5-9 3.5 9M15.3 16h4.4"/></>,
    scale: <><path {...common} d="M12 4v16M7 7h10M4 10l3 5 3-5M14 10l3 5 3-5M5 20h14"/></>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">{paths[name] || paths.tech}</svg>;
}

function MachineIcon({ name, size = 24 }) {
  const common = { stroke: "currentColor", strokeWidth: 1.45, strokeLinecap: "round", strokeLinejoin: "round", fill: "none", vectorEffect: "non-scaling-stroke" };
  const icons = {
    drillingRig: <>
      <path {...common} d="M4 19h14l3-2h5"/><circle cx="8" cy="20" r="2" {...common}/><circle cx="16" cy="20" r="2" {...common}/>
      <path {...common} d="M8 18V12h7l3 6M13 12V8h4v4"/>
      <path {...common} d="M19 17 24 3M22.7 3h3.5M21.7 6h3.4M20.7 9h3.2M23.5 3l2.2 14M23.1 17v4"/>
    </>,
    excavator: <>
      <path {...common} d="M3 19h15"/><path {...common} d="M5 18h11l2-3H8z"/><circle cx="7" cy="20" r="1.7" {...common}/><circle cx="15" cy="20" r="1.7" {...common}/>
      <path {...common} d="M9 15v-5h6l3 5M12 10V7h4l2 3"/>
      <path {...common} d="M18 11 23 6l4 2-3 2M23 6l3 7 3 1-2.5 3.5-4.5-1"/>
    </>,
    loader: <>
      <circle cx="8" cy="19" r="3" {...common}/><circle cx="18" cy="19" r="3" {...common}/>
      <path {...common} d="M4 17h17l2-5h4M9 16V9h7l4 7M11 9V6h5l2 3"/>
      <path {...common} d="M23 12h5l2 4-7 1"/>
    </>,
    haulTruck: <>
      <circle cx="9" cy="19" r="3" {...common}/><circle cx="23" cy="19" r="3" {...common}/>
      <path {...common} d="M4 16h5l2-5h13l3 5h2M21 11V7h4l3 4"/>
      <path {...common} d="M7 11 5 5l13 2 3 4z"/><path {...common} d="M7 11h14"/>
    </>,
    crusher: <>
      <path {...common} d="M7 4h14l-3 6H10z"/><path {...common} d="M9 10h11l-2 8H11z"/><path {...common} d="M12 12l5 4M17 12l-5 4"/>
      <path {...common} d="M11 18 8 21M18 18l3 3M6 21h18"/>
    </>,
    conveyor: <>
      <path {...common} d="M3 17 25 7"/><path {...common} d="M4 20 26 10"/>
      <circle cx="7" cy="17.8" r="1.4" {...common}/><circle cx="14" cy="14.6" r="1.4" {...common}/><circle cx="21" cy="11.4" r="1.4" {...common}/>
      <path {...common} d="M8 18.5 7 22M18 14 17 22M26 10l2 12M4 22h25"/>
    </>,
    continuousMiner: <>
      <path {...common} d="M5 18h17"/><path {...common} d="M6 17h13l3-3V9H10l-4 4z"/><circle cx="9" cy="19.5" r="1.8" {...common}/><circle cx="18" cy="19.5" r="1.8" {...common}/>
      <circle cx="26" cy="11" r="3.5" {...common}/><path {...common} d="M23 11h-3M26 7.5v-2M29 8.5l1.7-1.2M29.5 11H32M29 13.5l1.7 1.2M26 14.5v2"/>
      <path {...common} d="M22 11h1"/>
    </>,
    roadheader: <>
      <path {...common} d="M4 18h15"/><path {...common} d="M5 17h12l2-3V10H9l-4 4z"/><circle cx="8" cy="19.5" r="1.8" {...common}/><circle cx="16" cy="19.5" r="1.8" {...common}/>
      <path {...common} d="M18 12 25 8"/><circle cx="27.5" cy="7" r="3" {...common}/><path {...common} d="M27.5 4v-2M30 5l1.5-1.2M30.5 7H32M30 9l1.5 1.2M27.5 10v2M25 9l-1.5 1.2"/>
    </>,
    roofBolter: <>
      <path {...common} d="M4 19h15"/><circle cx="8" cy="20" r="1.8" {...common}/><circle cx="16" cy="20" r="1.8" {...common}/><path {...common} d="M6 18v-6h11l2 6M10 12V8h5v4"/>
      <path {...common} d="M20 18V5h4v13M22 5V2M19 2h6M22 8h5M27 8v3M26 11h2"/>
    </>,
    rockCutter: <>
      <path {...common} d="M4 19h14"/><circle cx="8" cy="20" r="1.8" {...common}/><circle cx="16" cy="20" r="1.8" {...common}/><path {...common} d="M5 18v-7h12l2 7M9 11V8h6v3"/>
      <path {...common} d="M18 13 23 9"/><circle cx="27" cy="8" r="3.6" {...common}/><path {...common} d="M27 4.4v7.2M23.4 8h7.2M24.5 5.5l5 5M29.5 5.5l-5 5"/>
    </>,
    screening: <>
      <path {...common} d="M5 8h20l-3 7H8z"/><path {...common} d="M8 11h14M9 14h12"/><path {...common} d="M8 15 6 21M22 15l3 6M5 21h21"/>
      <path {...common} d="M3 9 1 8M3 12 1 12M27 9l2-1M27 12h2"/>
    </>,
    pumpCompressor: <>
      <circle cx="10" cy="13" r="5" {...common}/><path {...common} d="M10 10.5c2.5 0 3.5 2.8 1.7 4.2-1.7 1.3-4.2.2-4.2-1.8 0-1.4 1.2-2.4 2.5-2.4Z"/>
      <path {...common} d="M15 13h4M19 9h7v8h-7zM22.5 9V6h3M5 18v3M17 18v3M4 21h23"/>
    </>,
    processingPlant: <>
      <path {...common} d="M4 20h24"/><path {...common} d="M6 20V9h7v11M16 20V6h6v14M25 20v-8h4v8"/>
      <path {...common} d="M7 9 9.5 4 12 9M16 6h6M19 6V3M25 12h4M13 13h3M22 10h3"/>
      <circle cx="9.5" cy="14" r="1.5" {...common}/><path {...common} d="M18 10h2M18 14h2"/>
    </>,
  };
  const icon = icons[name] || icons.processingPlant;
  return <svg width={size} height={Math.round(size * 0.75)} viewBox="0 0 32 24" aria-hidden="true" focusable="false">{icon}</svg>;
}

function Eyebrow({ children, dark = false }) {
  return <div className={`eyebrow ${dark ? "eyebrow-dark" : ""}`}>{children}</div>;
}

function TextLink({ href, children, dark = false }) {
  return <a className={`text-link ${dark ? "text-link-dark" : ""}`} href={href}>{children}<ArrowIcon size={17} /></a>;
}

function HeadingGroup({ eyebrow, title, intro, center = false, dark = false, className = "" }) {
  return (
    <div className={`heading-group ${center ? "heading-center" : ""} ${dark ? "heading-dark" : ""} ${className}`}>
      {eyebrow ? <Eyebrow dark={dark}>{eyebrow}</Eyebrow> : null}
      <h2>{title}</h2>
      {intro ? <p className="section-intro">{intro}</p> : null}
    </div>
  );
}

function MiningHeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <svg viewBox="0 0 620 470" role="img" aria-label="">
        <defs>
          <linearGradient id="mineFade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#F8F8FA" />
            <stop offset="1" stopColor="#ECECF0" />
          </linearGradient>
        </defs>
        <rect x="26" y="30" width="568" height="400" rx="36" fill="url(#mineFade)" />
        <path d="M64 302 151 176l65 76 72-123 82 118 57-58 128 113" fill="none" stroke="#4B4B52" strokeWidth="4" strokeLinejoin="round" />
        <path d="M58 334h504" stroke="#A9A9B1" strokeWidth="2" />
        <path d="M94 333c52-27 94-41 152-44 57-4 103 5 158 24 47 16 88 18 137 4" fill="none" stroke="#8A8A92" strokeWidth="2.6" />
        <path d="M112 358c46-21 99-30 145-28 58 2 106 24 154 29 46 4 79-2 118-16" fill="none" stroke="#B7B7BE" strokeWidth="2" />
        <g transform="translate(126 278)" stroke="#4B4B52" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 48h92l16-31h23v31h11" />
          <circle cx="28" cy="52" r="10" />
          <circle cx="100" cy="52" r="10" />
          <path d="M18 48V11h48l25 37M33 11V-4h31v15" />
        </g>
        <g transform="translate(380 238)">
          <path d="M0 89h117" stroke="#4B4B52" strokeWidth="3" />
          <rect x="18" y="40" width="28" height="48" rx="3" fill="#FFF" stroke="#4B4B52" strokeWidth="3" />
          <rect x="56" y="25" width="35" height="63" rx="3" fill="#FFF" stroke="#4B4B52" strokeWidth="3" />
          <path d="M69 25V4h9v21M88 41l28-16v63" fill="none" stroke="#4B4B52" strokeWidth="3" />
          <path d="M27 53h10M27 64h10M65 40h17M65 52h17" stroke="#A0A0A7" strokeWidth="2" />
        </g>
        <g transform="translate(318 111)">
          <circle cx="0" cy="0" r="46" fill="#FFF" stroke="#C11D63" strokeWidth="3" />
          <path d="M-19-4h38M-4-19c10 10 14 26 0 38M4-19C-6-9-10 7 4 19" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M-18 16c13-5 24-5 36 0" fill="none" stroke="#C11D63" strokeWidth="2.5" strokeLinecap="round" />
        </g>
        <path d="M307 157v52" stroke="#C11D63" strokeWidth="2.6" strokeDasharray="4 7" />
        <circle cx="308" cy="212" r="5" fill="#C11D63" />
        <g transform="translate(73 68)">
          <rect width="120" height="50" rx="25" fill="#FFFFFF" stroke="#D8D8DE" />
          <circle cx="26" cy="25" r="8" fill="#C11D63" />
          <path d="M45 20h53M45 29h38" stroke="#777780" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

const miningEquipment = [
  { label: "Drilling rigs", icon: "drillingRig" },
  { label: "Excavators", icon: "excavator" },
  { label: "Loaders", icon: "loader" },
  { label: "Haul trucks", icon: "haulTruck" },
  { label: "Crushers", icon: "crusher" },
  { label: "Conveyors", icon: "conveyor" },
  { label: "Continuous miners", icon: "continuousMiner" },
  { label: "Roadheaders", icon: "roadheader" },
  { label: "Roof and rock bolters", icon: "roofBolter" },
  { label: "Rock-cutting equipment", icon: "rockCutter" },
  { label: "Screening systems", icon: "screening" },
  { label: "Pumps and compressors", icon: "pumpCompressor" },
  { label: "Mineral processing equipment", icon: "processingPlant" },
];

const trustItems = [
  { icon: "geology", title: "Mining Expertise", text: "Technical content across exploration, operations, processing, and engineering." },
  { icon: "globe", title: "Global Scale", text: "Multilingual support for mining projects and international supply chains." },
  { icon: "qa", title: "Technical Accuracy", text: "Industry terminology, translation memory, and expert linguistic validation." },
  { icon: "tech", title: "Enterprise Technology", text: "AI-enabled workflows built for high-volume global content." },
];

const lifecycle = [
  ["Exploration & Geoscience", "Geological surveys, drilling programs, assay data, geophysical and geochemical studies, and resource evaluation."],
  ["Mine Planning & Development", "Feasibility studies, engineering specifications, permitting, EPC/EPCM content, construction, and commissioning."],
  ["Mining Operations", "Surface and underground operations including drilling, blasting, haulage, ventilation, ground control, and maintenance."],
  ["Processing & Beneficiation", "Crushing, grinding, screening, flotation, separation, concentration, filtration, and dewatering."],
  ["Metallurgy & Refining", "Metallurgical testwork, hydrometallurgy, pyrometallurgy, leaching, smelting, refining, and metals recovery."],
  ["Closure & Reclamation", "Mine closure plans, rehabilitation, water management, environmental monitoring, and reclamation."],
];

const miningDocs = [
  { title: "Exploration & Technical Reports", items: ["Geological reports", "Exploration reports", "Drilling documentation", "Resource and reserve reports", "Feasibility studies", "Geotechnical and laboratory reports"] },
  { title: "Operations & Engineering", items: ["Engineering specifications", "Technical drawings", "Operating procedures", "Maintenance procedures", "Inspection checklists", "QA/QC and plant documentation"] },
  { title: "Equipment & Technology", items: ["User and operator manuals", "Service manuals", "Parts catalogs", "Installation guides", "HMI interfaces", "Software and technical training"] },
  { title: "Health, Safety & Training", items: ["SOPs", "Work instructions", "Emergency plans", "Safety procedures", "Hazard communications", "eLearning and safety videos"] },
  { title: "Environmental & Regulatory", items: ["Environmental impact content", "Permitting materials", "Monitoring reports", "Water-management plans", "Tailings documentation", "Closure and reclamation plans"] },
  { title: "Commercial & Corporate", items: ["Contracts", "Tenders and proposals", "Investor presentations", "Financial reports", "Procurement documents", "Corporate communications"] },
];

const faqs = [
  ["What Types of Mining Documents Can Stepes Translate?", "Stepes translates technical, operational, regulatory, training, commercial, and corporate content across the mining lifecycle. Typical projects include geological reports, feasibility studies, engineering specifications, equipment manuals, SOPs, work instructions, safety procedures, environmental documents, software interfaces, training courses, investor materials, contracts, and mineral processing documentation."],
  ["Do You Translate Geological and Mineral Exploration Reports?", "Yes. Stepes translates geological surveys, exploration reports, drilling documentation, assay reports, geophysical and geochemical studies, mineral resource documentation, hydrogeological reports, feasibility studies, and other technical content used during mineral exploration and mine development. Projects are matched with linguists experienced in the relevant scientific and technical terminology."],
  ["Can Stepes Translate Mining Equipment Manuals and Software?", "Yes. We translate operator manuals, installation instructions, service manuals, parts catalogs, maintenance procedures, safety information, HMIs, control-system interfaces, and technician training for mining machinery. Stepes also localizes mine-planning software, fleet-management systems, industrial applications, mobile apps, and other digital mining platforms."],
  ["Do You Provide Critical Minerals and Rare Earth Translation Services?", "Yes. Stepes supports multilingual projects across the critical minerals and rare earth value chain, including exploration, mining, beneficiation, separation, refining, advanced materials, and downstream applications. We translate technical, engineering, commercial, investment, regulatory, and workforce content for critical-mineral projects and international supply chains."],
  ["How Do You Ensure Accurate Mining Terminology?", "Stepes combines subject-matter linguist matching with terminology databases, project glossaries, translation memory, linguistic quality assurance, and professional review. For ongoing mining translation programs, approved terminology and previous translations can be reused across projects to improve consistency between sites, departments, equipment systems, and languages."],
  ["Can You Translate Mining Safety Procedures and Training Materials?", "Yes. Stepes translates safety procedures, SOPs, work instructions, emergency response plans, hazard communications, equipment training, onboarding, eLearning, videos, toolbox talks, and other workforce content. Translation workflows can be customized for safety-critical material that requires additional linguistic review and terminology control."],
  ["Do You Support Mineral Processing and Metallurgical Translation?", "Yes. Our mining translation services include content related to crushing, grinding, classification, flotation, separation, beneficiation, hydrometallurgy, pyrometallurgy, leaching, smelting, refining, metals recovery, process engineering, metallurgical testwork, laboratory procedures, and mineral-processing equipment."],
  ["Which Languages Do You Support for Mining Projects?", "Stepes provides professional translation in more than 100 languages and regional variants. Common mining languages include Spanish, Portuguese, French, German, Chinese, Japanese, Korean, Arabic, Indonesian, Vietnamese, Hindi, and many others. We can manage multiple target languages as part of a single global mining translation program."],
  ["How Does Stepes Use AI for Mining Translation?", "Stepes uses AI as part of flexible translation workflows rather than applying one method to every document. Depending on the content, projects can combine AI translation, translation memory, terminology management, professional translators, expert human review, and automated QA. High-risk technical or safety content can receive more intensive human oversight, while appropriate high-volume content can benefit from greater automation."],
];

export default function MiningTranslationServicesWireframe() {
  return (
    <main className="stepes-page">
      <style>{`
        *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0}
        .stepes-page{font-family:Inter,ui-sans-serif,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;color:${C.ink};background:#fff;line-height:1.6;overflow-x:hidden}
        .shell{width:100%;max-width:1280px;margin:0 auto;padding-left:56px;padding-right:56px}
        section{padding:96px 0}.section-dense{padding:80px 0}.soft{background:${C.soft}}.blush{background:${C.blush}}.dark{background:${C.dark};color:#fff}
        h1,h2,h3{font-weight:600;margin:0;letter-spacing:-.025em;line-height:1.08}h1{font-size:48px}h2{font-size:36px}h3{font-size:24px;letter-spacing:-.018em}
        p{font-size:16px;color:${C.body};margin:0 0 18px}.dark p{color:#D7D7DD}.lead{font-size:18px;line-height:1.72}.hero .lead{max-width:700px}.small-note{font-size:16px;color:${C.muted}}
        .eyebrow{font-size:11px!important;line-height:1.2!important;letter-spacing:.14em!important;text-transform:uppercase;font-weight:600!important;color:${C.magenta}!important;margin:0 0 16px!important}.eyebrow-dark{color:${C.pinkLight}!important}
        .heading-group{max-width:820px;margin-bottom:48px}.heading-group h2{margin-bottom:18px}.heading-group .section-intro{font-size:18px;line-height:1.72;max-width:810px}.heading-center{margin-left:auto;margin-right:auto;text-align:center}.heading-center .section-intro{margin-left:auto;margin-right:auto}.heading-dark h2{color:#fff}.heading-dark .section-intro{color:#D7D7DD}
        a{text-decoration:none}.cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}.btn{min-height:48px;padding:12px 22px;border-radius:999px;font-weight:600;font-size:16px;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:.18s ease;border:1px solid transparent}.btn-primary,.btn-primary:visited,.btn-primary:hover,.btn-primary:active,.btn-primary:focus,.btn-primary:focus-visible{background:${C.magenta};color:#fff!important}.btn-primary *{color:#fff!important;stroke:#fff!important}.btn-primary:hover{background:${C.magentaDark};transform:translateY(-1px)}.btn-secondary{background:#fff;color:${C.ink};border-color:#D3D3D8}.btn-secondary:hover{border-color:#B7B7BD;transform:translateY(-1px)}
        .text-link{display:inline-flex;align-items:center;gap:7px;color:${C.magenta};font-weight:600;font-size:16px;min-height:44px;max-width:100%;white-space:normal}.text-link:hover{color:${C.burgundy}}.text-link:hover svg{transform:translateX(2px)}.text-link svg{transition:.15s}.text-link-dark{color:${C.pinkLight}}.text-link-dark:hover{color:#fff}.btn:focus-visible,.text-link:focus-visible,summary:focus-visible{outline:3px solid ${C.pinkLight};outline-offset:3px}.btn-secondary:visited{color:${C.ink}}
        .hero{padding:104px 0 88px;background:#fff}.hero-grid{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(420px,.98fr);align-items:center;gap:60px}.hero-copy h1{max-width:720px;margin-bottom:24px}.hero-proof{display:flex;gap:20px 30px;flex-wrap:wrap;margin-top:30px;padding-top:22px;border-top:1px solid ${C.line}}.hero-proof span{font-size:16px;color:${C.muted};font-weight:600}.hero-art{min-width:0}.hero-art svg{width:100%;height:auto;display:block}
        .trust{padding:0;background:#fff}.trust .shell{border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.trust-grid{display:grid;grid-template-columns:repeat(4,1fr)}.trust-item{padding:28px 24px;display:grid;grid-template-columns:26px 1fr;gap:13px;align-items:start}.trust-item+.trust-item{border-left:1px solid ${C.line}}.trust-icon{color:${C.magenta};padding-top:1px}.trust-title{display:block;font-size:17px;line-height:1.35;font-weight:600;color:${C.ink};margin-bottom:6px;letter-spacing:-.01em}.trust-item p{font-size:16px;line-height:1.5;margin:0;color:${C.muted}}
        .overview-grid{display:grid;grid-template-columns:.78fr 1.22fr;gap:72px;align-items:start}.overview-copy{max-width:760px}.overview-copy p{font-size:18px;line-height:1.72}.value-line{margin-top:32px;padding-left:18px;border-left:3px solid ${C.magenta};font-size:16px;color:${C.body}}
        .lifecycle{display:grid;grid-template-columns:repeat(6,1fr);border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.life-step{padding:28px 22px 30px;position:relative}.life-step+.life-step{border-left:1px solid ${C.line}}.life-num{font-size:13px;color:${C.magenta};font-weight:600;margin-bottom:28px}.life-step h3{line-height:1.2;margin-bottom:12px}.life-step p{font-size:16px;line-height:1.55;margin:0;color:${C.muted}}
        .editorial-split{display:grid;grid-template-columns:.92fr 1.08fr;gap:72px;align-items:start}.editorial-split.reverse{grid-template-columns:1.08fr .92fr}.editorial-sticky{position:sticky;top:32px}.editorial-sticky p{font-size:18px;line-height:1.7;max-width:600px}.topic-stack{border-top:1px solid ${C.line}}.topic-row{padding:30px 0;border-bottom:1px solid ${C.line}}.topic-row h3{margin-bottom:12px}.topic-row p{margin-bottom:0}.topic-row ul,.clean-list{margin:15px 0 0;padding:0;list-style:none;columns:2;column-gap:28px}.topic-row li,.clean-list li{font-size:16px;color:${C.body};padding:5px 0 5px 16px;position:relative;break-inside:avoid}.topic-row li:before,.clean-list li:before{content:"";position:absolute;left:0;top:15px;width:6px;height:2px;background:#A9A9B1}
        .operations-band{display:grid;grid-template-columns:.8fr 1.2fr;gap:72px}.operations-list{display:grid;grid-template-columns:repeat(2,1fr);gap:0;border-top:1px solid #35363D}.operation-item{padding:24px 20px 24px 0;border-bottom:1px solid #35363D;display:flex;gap:14px}.operation-item:nth-child(even){padding-left:24px;border-left:1px solid #35363D}.operation-item svg{color:${C.pinkLight};flex:0 0 auto;margin-top:3px}.operation-item strong{font-size:16px;font-weight:600;color:#fff;display:block;margin-bottom:5px}.operation-item span{font-size:16px;line-height:1.5;color:#C9C9D0}
        .processing-grid{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid ${C.line};border-radius:30px;overflow:hidden;background:#fff}.process-col{padding:34px}.process-col+.process-col{border-left:1px solid ${C.line}}.process-col svg{color:${C.magenta};margin-bottom:22px}.process-col h3{margin-bottom:14px}.process-col p{margin-bottom:18px}
        .critical-layout{display:grid;grid-template-columns:1.06fr .94fr;gap:70px;align-items:center}.mineral-line{font-size:16px;color:${C.body};padding:18px 0;border-top:1px solid #EBCDD9;border-bottom:1px solid #EBCDD9;margin:28px 0}.critical-side{background:#fff;border:1px solid #F0DDE5;border-radius:30px;padding:34px}.critical-side .mini-section+.mini-section{margin-top:28px;padding-top:28px;border-top:1px solid ${C.line}}.mini-section h3{margin-bottom:10px}
        .equipment-layout{display:grid;grid-template-columns:1fr 1fr;gap:66px}.equipment-list{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${C.line}}.equipment-item{padding:18px 14px 18px 0;border-bottom:1px solid ${C.line};font-size:16px;color:${C.body};display:flex;gap:10px;align-items:flex-start}.equipment-item:nth-child(even){padding-left:18px}.equipment-item svg{color:${C.magenta};margin-top:2px;flex:0 0 auto;overflow:visible}.equipment-item span{line-height:1.5}.doc-list{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 26px;margin-top:24px}.doc-list div{font-size:16px;padding:8px 0;border-bottom:1px solid ${C.line}}
        .digital-grid{display:grid;grid-template-columns:.88fr 1.12fr;gap:70px;align-items:center}.digital-panel{border:1px solid #363842;background:#202229;border-radius:30px;padding:26px}.digital-top{display:flex;justify-content:space-between;align-items:center;padding-bottom:18px;border-bottom:1px solid #363842}.digital-title{font-size:16px;color:#fff;font-weight:600}.status{font-size:12px;color:${C.pinkLight};font-weight:600;letter-spacing:.08em;text-transform:uppercase}.digital-body{display:grid;grid-template-columns:.86fr 1.14fr;gap:18px;margin-top:18px}.digital-nav{border-right:1px solid #363842;padding-right:18px}.digital-nav-item{padding:12px 12px;font-size:14px;color:#ACADB5;border-radius:12px;margin-bottom:6px}.digital-nav-item.active{background:#2A2D35;color:#fff}.digital-chart{min-height:225px;border-radius:20px;background:linear-gradient(180deg,#272A32,#202229);padding:22px;position:relative;overflow:hidden}.chart-grid{position:absolute;inset:20px;background:repeating-linear-gradient(to bottom,transparent 0,transparent 39px,#333640 40px);opacity:.7}.chart-line{position:absolute;left:28px;right:28px;bottom:42px;height:120px}.chart-line svg{width:100%;height:100%}.digital-points{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:18px}.digital-point{padding:16px;border:1px solid #363842;border-radius:16px}.digital-point strong{display:block;font-size:16px;color:#fff;margin-bottom:5px}.digital-point span{font-size:16px;line-height:1.45;color:#ACADB5}
        .safety-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.safety-col{padding:34px 30px}.safety-col+.safety-col{border-left:1px solid ${C.line}}.safety-col svg{color:${C.magenta};margin-bottom:20px}.safety-col h3{margin-bottom:12px}.safety-col p{margin-bottom:14px}.safety-col .text-link{margin-top:4px}
        .env-grid{display:grid;grid-template-columns:1fr 1fr;gap:66px}.env-main{display:grid;grid-template-columns:44px 1fr;gap:20px}.env-main svg{color:${C.magenta};margin-top:4px}.env-main h3{margin-bottom:12px}.env-sub{margin-top:28px;padding-top:26px;border-top:1px solid ${C.line}}
        .doc-matrix{display:grid;grid-template-columns:repeat(3,1fr);border:1px solid ${C.line};border-radius:30px;overflow:hidden}.doc-group{padding:30px}.doc-group:nth-child(2),.doc-group:nth-child(3),.doc-group:nth-child(5),.doc-group:nth-child(6){border-left:1px solid ${C.line}}.doc-group:nth-child(n+4){border-top:1px solid ${C.line}}.doc-group h3{margin-bottom:15px}.doc-group ul{list-style:none;padding:0;margin:0}.doc-group li{font-size:16px;color:${C.body};padding:4px 0}
        .business-grid{display:grid;grid-template-columns:1fr 1fr;gap:70px}.business-panel{padding-top:28px;border-top:2px solid ${C.magenta}}.link-row{display:flex;gap:10px 24px;flex-wrap:wrap;margin-top:18px}.dark-link-row{display:flex;justify-content:center;gap:10px 28px;flex-wrap:wrap;margin-top:30px}.business-panel h2{margin-bottom:20px}.business-panel p{font-size:17px;line-height:1.7}.business-panel .clean-list{columns:1}.business-panel .icon-head{display:flex;gap:14px;align-items:center;margin-bottom:18px}.business-panel .icon-head svg{color:${C.magenta};flex:0 0 auto}
        .expertise-layout{display:grid;grid-template-columns:.88fr 1.12fr;gap:72px}.discipline-grid{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${C.line}}.discipline{padding:17px 16px 17px 0;border-bottom:1px solid ${C.line};font-size:16px;color:${C.body}}.discipline:nth-child(even){padding-left:20px}.expertise-note{margin-top:26px;padding:24px;background:${C.soft};border-radius:20px;font-size:16px}
        .ai-flow{display:grid;grid-template-columns:repeat(5,1fr);gap:0;border-top:1px solid #363842;border-bottom:1px solid #363842}.ai-step{padding:28px 20px;position:relative}.ai-step+.ai-step{border-left:1px solid #363842}.ai-step strong{display:block;color:#fff;font-size:16px;margin-bottom:8px}.ai-step span{font-size:16px;line-height:1.5;color:#BFC0C7}.risk-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;margin-top:34px}.risk{border:1px solid #363842;border-radius:20px;padding:24px}.risk h3{color:#fff;margin-bottom:10px}.risk p{margin:0;font-size:16px}
        .terminology-layout{display:grid;grid-template-columns:1fr 1fr;gap:70px;align-items:start}.term-list{border-top:1px solid ${C.line}}.term-row{display:grid;grid-template-columns:28px 1fr;gap:14px;padding:18px 0;border-bottom:1px solid ${C.line}}.term-row svg{color:${C.magenta};margin-top:2px}.term-row strong{font-size:16px;font-weight:600;display:block;margin-bottom:3px}.term-row span{font-size:16px;color:${C.muted}}
        .dtp-grid{display:grid;grid-template-columns:.95fr 1.05fr;gap:68px;align-items:center}.format-board{border:1px solid ${C.line};border-radius:28px;padding:24px;background:#fff}.format-row{display:grid;grid-template-columns:110px 1fr;gap:18px;padding:15px 0;border-bottom:1px solid ${C.line};align-items:center}.format-row:last-child{border-bottom:0}.format-label{font-weight:600;font-size:16px}.format-bars{display:flex;gap:8px;align-items:center}.format-bars i{display:block;height:9px;border-radius:999px;background:#D8D8DE}.format-bars i:nth-child(1){width:44%}.format-bars i:nth-child(2){width:26%}.format-bars i:nth-child(3){width:16%;background:${C.pinkLight}}
        .global-layout{display:grid;grid-template-columns:.9fr 1.1fr;gap:72px;align-items:center}.region-list{display:grid;grid-template-columns:repeat(2,1fr);border-top:1px solid ${C.line}}.region{padding:18px 16px 18px 0;border-bottom:1px solid ${C.line};font-size:16px}.region:nth-child(even){padding-left:20px}.language-line{margin-top:24px;font-size:17px;line-height:1.8;color:${C.body}}
        .why-grid{display:grid;grid-template-columns:repeat(4,1fr);border-top:1px solid ${C.line};border-bottom:1px solid ${C.line}}.why-item{padding:30px 24px}.why-item+.why-item{border-left:1px solid ${C.line}}.why-item h3{margin-bottom:10px}.why-item p{margin:0;font-size:16px;color:${C.muted}}
        .faq-panel{max-width:980px;margin:0 auto;border-top:1px solid ${C.line}}details{border-bottom:1px solid ${C.line};padding:0}summary{list-style:none;cursor:pointer;display:grid;grid-template-columns:1fr 32px;gap:22px;align-items:center;padding:25px 0;font-size:19px;font-weight:600;line-height:1.35}summary::-webkit-details-marker{display:none}.faq-plus{width:30px;height:30px;border:1px solid #D5D5DA;border-radius:50%;display:grid;place-items:center;font-size:20px;font-weight:400;color:${C.magenta}}details[open] .faq-plus{transform:rotate(45deg)}.faq-answer{max-width:830px;padding:0 48px 22px 0;font-size:16px;line-height:1.72;color:${C.body}}
        .final-cta{padding:86px 0;background:${C.blush}}.cta-box{border-radius:30px;padding:58px 64px;background:#fff;border:1px solid #F0DDE5;display:grid;grid-template-columns:1.2fr .8fr;gap:54px;align-items:center}.cta-box h2{margin-bottom:18px}.cta-box p{font-size:18px;line-height:1.7;max-width:760px}.cta-actions{display:flex;flex-direction:column;gap:12px;align-items:stretch}.cta-actions .btn{width:100%}
        @media(max-width:1100px){.shell{padding-left:40px;padding-right:40px}.hero-grid{grid-template-columns:1fr .88fr;gap:42px}.lifecycle{grid-template-columns:repeat(3,1fr)}.life-step:nth-child(4){border-left:0;border-top:1px solid ${C.line}}.life-step:nth-child(5),.life-step:nth-child(6){border-top:1px solid ${C.line}}.processing-grid{grid-template-columns:1fr}.process-col+.process-col{border-left:0;border-top:1px solid ${C.line}}.doc-matrix{grid-template-columns:repeat(2,1fr)}.doc-group:nth-child(n){border-left:0;border-top:0}.doc-group:nth-child(even){border-left:1px solid ${C.line}}.doc-group:nth-child(n+3){border-top:1px solid ${C.line}}.why-grid{grid-template-columns:repeat(2,1fr)}.why-item:nth-child(3){border-left:0;border-top:1px solid ${C.line}}.why-item:nth-child(4){border-top:1px solid ${C.line}}}
        @media(max-width:820px){.shell{padding-left:24px;padding-right:24px}section{padding:76px 0}.section-dense{padding:68px 0}.hero{padding:84px 0 72px}h1{font-size:42px}h2{font-size:32px}h3{font-size:22px}.hero-grid,.overview-grid,.editorial-split,.editorial-split.reverse,.operations-band,.critical-layout,.equipment-layout,.digital-grid,.env-grid,.business-grid,.expertise-layout,.terminology-layout,.dtp-grid,.global-layout{grid-template-columns:1fr}.hero-art{max-width:620px;margin:12px auto 0}.trust-grid{grid-template-columns:repeat(2,1fr)}.trust-item:nth-child(3){border-left:0;border-top:1px solid ${C.line}}.trust-item:nth-child(4){border-top:1px solid ${C.line}}.overview-grid,.editorial-split,.operations-band,.critical-layout,.equipment-layout,.digital-grid,.env-grid,.business-grid,.expertise-layout,.terminology-layout,.dtp-grid,.global-layout{gap:42px}.heading-group.stack-center{text-align:center;margin-left:auto;margin-right:auto}.heading-group.stack-center .section-intro{margin-left:auto;margin-right:auto}.editorial-sticky{position:static}.lifecycle{grid-template-columns:repeat(2,1fr)}.life-step:nth-child(n){border-top:0}.life-step:nth-child(odd){border-left:0}.life-step:nth-child(even){border-left:1px solid ${C.line}}.life-step:nth-child(n+3){border-top:1px solid ${C.line}}.operations-list{grid-template-columns:1fr}.operation-item:nth-child(even){padding-left:0;border-left:0}.safety-grid{grid-template-columns:1fr}.safety-col+.safety-col{border-left:0;border-top:1px solid ${C.line}}.doc-matrix{grid-template-columns:1fr}.doc-group:nth-child(n){border-left:0}.doc-group:nth-child(n+2){border-top:1px solid ${C.line}}.ai-flow{grid-template-columns:1fr}.ai-step+.ai-step{border-left:0;border-top:1px solid #363842}.ai-step{padding:22px 0}.risk-grid{grid-template-columns:1fr}.cta-box{grid-template-columns:1fr;padding:46px 40px}.cta-actions{flex-direction:row}.cta-actions .btn{width:auto;flex:1}.equipment-list{min-width:0}.digital-top{gap:14px;flex-wrap:wrap}.format-board{min-width:0}}
        @media(max-width:560px){.shell{padding-left:20px;padding-right:20px}section{padding:68px 0}.section-dense{padding:64px 0}.hero{padding:72px 0 64px}h1{font-size:38px}h2{font-size:30px}h3{font-size:20px}.lead,.heading-group .section-intro,.overview-copy p,.editorial-sticky p,.cta-box p{font-size:18px}.hero-grid{gap:30px}.hero-copy{text-align:center}.hero-copy .lead{margin-left:auto;margin-right:auto}.hero-proof{justify-content:center}.cta-row{flex-direction:column}.cta-row .btn{width:100%}.heading-group.heading-center,.heading-group.mobile-center,.heading-group.stack-center{text-align:center;margin-left:auto;margin-right:auto}.heading-group.heading-center .section-intro,.heading-group.mobile-center .section-intro,.heading-group.stack-center .section-intro{margin-left:auto;margin-right:auto}.heading-group:not(.editorial-heading){margin-bottom:40px}.trust-grid{grid-template-columns:1fr}.trust-item:nth-child(n){border-left:0}.trust-item+.trust-item{border-top:1px solid ${C.line}}.trust-item{padding:24px 0}.lifecycle{grid-template-columns:1fr}.life-step:nth-child(n){border-left:0}.life-step:nth-child(n+2){border-top:1px solid ${C.line}}.life-step{padding:26px 0}.life-num{margin-bottom:15px}.topic-row ul,.clean-list{columns:1}.operations-list{grid-template-columns:1fr}.process-col{padding:28px 22px}.critical-side{padding:28px 22px}.equipment-list,.doc-list,.discipline-grid,.region-list{grid-template-columns:1fr}.equipment-item:nth-child(even),.discipline:nth-child(even),.region:nth-child(even){padding-left:0}.digital-panel{padding:18px}.digital-body{grid-template-columns:1fr}.digital-nav{border-right:0;border-bottom:1px solid #363842;padding-right:0;padding-bottom:12px;display:flex;gap:6px;flex-wrap:wrap;overflow:visible}.digital-nav-item{white-space:normal;flex:1 1 96px;text-align:center}.digital-points{grid-template-columns:1fr}.doc-matrix{border-radius:24px}.risk-grid{grid-template-columns:1fr}.format-row{grid-template-columns:92px 1fr}.why-grid{grid-template-columns:1fr}.why-item:nth-child(n){border-left:0}.why-item+.why-item{border-top:1px solid ${C.line}}.why-item{padding:26px 0}.faq-panel{max-width:none}summary{font-size:18px;padding:22px 0;grid-template-columns:minmax(0,1fr) 32px}.business-panel .icon-head{align-items:flex-start}.business-panel .icon-head h2{min-width:0}.link-row,.dark-link-row{gap:8px 18px}.faq-answer{padding-right:0}.final-cta{padding:64px 0}.cta-box{padding:38px 24px;border-radius:26px;text-align:center}.cta-actions{flex-direction:column}.cta-actions .btn{width:100%}.hero-art svg{width:100%;margin-left:0}}
        @media(max-width:340px){.shell{padding-left:20px;padding-right:20px}.hero-proof{gap:12px 16px}.hero-proof span{font-size:16px}.digital-panel{padding:14px}.digital-nav-item{flex-basis:100%}.digital-top{align-items:flex-start}.cta-box{padding:34px 20px}.format-row{grid-template-columns:1fr;gap:8px}.business-panel .icon-head{display:grid;grid-template-columns:30px minmax(0,1fr);gap:12px}.text-link{align-items:flex-start}}
      `}</style>

      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <Eyebrow>MINING & MINERALS</Eyebrow>
            <h1>Mining Translation Services</h1>
            <p className="lead">Mining is a global industry built on precision—from geological exploration and mine engineering to mineral processing, equipment operation, workforce safety, and international supply chains. Stepes provides professional mining translation services that help mining companies, engineering firms, equipment manufacturers, mineral processors, and technology providers communicate accurately across languages and markets.</p>
            <div className="cta-row">
              <a className="btn btn-primary" href={links.quote}>Get a Translation Quote <ArrowIcon /></a>
              <a className="btn btn-secondary" href={links.contact}>Talk to an Expert <ArrowIcon /></a>
            </div>
            <div className="hero-proof"><span>Mining & Geological Expertise</span><span>100+ Languages</span><span>AI + Expert Human Review</span><span>Enterprise Translation Technology</span></div>
          </div>
          <MiningHeroArt />
        </div>
      </section>

      <section className="trust" aria-label="Mining translation capabilities">
        <div className="shell">
          <div className="trust-grid">
            {trustItems.map((item) => <div className="trust-item" key={item.title}><div className="trust-icon"><LineIcon name={item.icon} /></div><div><strong className="trust-title">{item.title}</strong><p>{item.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="shell overview-grid">
          <div className="heading-group editorial-heading">
            <h2>Translation Solutions for the Global Mining & Minerals Industry</h2>
          </div>
          <div className="overview-copy">
            <p>Modern mining connects far more than the mine itself. A single mineral project can involve exploration teams, geologists, mining engineers, EPC contractors, equipment manufacturers, processing facilities, laboratories, regulators, investors, local communities, and downstream customers spread across multiple countries.</p>
            <p>Stepes provides end-to-end mining translation services across this interconnected ecosystem—from early-stage geological exploration and feasibility through mine construction, operations, processing, refining, distribution, closure, and reclamation.</p>
            <p>Our expertise spans precious and base metals, industrial minerals, critical minerals, rare earth elements, battery materials, coal, aggregates, and other mineral resources. We also support the technologies and services that enable modern mining, including heavy equipment, industrial automation, AI, mine planning software, remote operations, safety systems, and workforce training.</p>
            <div className="value-line">Whether you are developing a new mine, operating established assets across multiple countries, launching mining equipment internationally, or expanding a critical-minerals supply chain, Stepes provides the multilingual expertise and translation technology to keep global teams aligned.</div>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="shell">
          <HeadingGroup eyebrow="MINE-TO-MARKET COVERAGE" title="Mining Expertise Across the Entire Value Chain" intro="Mining content changes significantly as a project moves from discovery to production. Our multilingual workflows support the technical information created at every stage of the mineral lifecycle." center className="mobile-center" />
          <div className="lifecycle">
            {lifecycle.map(([title,text],i)=><div className="life-step" key={title}><div className="life-num">0{i+1}</div><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="shell editorial-split">
          <div className="editorial-sticky">
            <h2>Exploration, Geology & Mine Development Translation</h2>
            <p>Every successful mining project begins with an understanding of what lies below the surface. Geological and exploration content combines highly specialized terminology with scientific data, engineering assumptions, visual information, and financial implications.</p>
          </div>
          <div className="topic-stack">
            <div className="topic-row"><h3>Geological & Exploration Documentation</h3><p>Stepes translates the scientific and technical content used to characterize mineral deposits and support exploration decisions.</p><ul><li>Geological and mineralogical reports</li><li>Geophysical and geochemical studies</li><li>Exploration and drilling programs</li><li>Core logging and assay documentation</li><li>Mineral resource evaluations</li><li>Hydrogeological and geotechnical studies</li><li>Sampling and laboratory procedures</li><li>Geological maps and figures</li></ul></div>
            <div className="topic-row"><h3>Feasibility Studies & Mine Development</h3><p>We translate scoping studies, pre-feasibility and feasibility studies, mine-development plans, engineering specifications, project schedules, procurement packages, construction documentation, and commissioning procedures. We also support multilingual EPC and EPCM projects involving operators, engineers, contractors, and equipment suppliers.</p></div>
            <div className="topic-row"><h3>Mineral Resource & Reserve Reporting</h3><p>Mining companies operating in global capital markets often prepare complex technical documentation under frameworks such as U.S. Regulation S-K 1300, Canada’s NI 43-101, and JORC-based reporting. Stepes translates the underlying reports and supporting content while preserving terminology, units, tables, figures, qualifications, and technical distinctions.</p><TextLink href={links.technical}>Technical Translation Services</TextLink></div>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="shell operations-band">
          <div>
            <h2>Mining Operations & Engineering Translation Services</h2>
            <p className="lead">Once a mine enters production, clear multilingual communication becomes part of daily operations. Procedures must be understood by engineers, equipment operators, maintenance teams, contractors, supervisors, and technical personnel across languages.</p>
            <p>Stepes translates engineering specifications, drawings and callouts, operating procedures, maintenance instructions, inspection checklists, QA/QC documentation, construction procedures, and production materials used to keep mining operations running efficiently.</p>
          </div>
          <div className="operations-list">
            {[
              ["mine","Surface & Underground Mining","Open-pit and underground production, excavation, loading, haulage, and materials handling."],
              ["tech","Drilling & Blasting","Technical procedures, blast plans, drilling instructions, and supporting engineering documentation."],
              ["safety","Ventilation & Ground Control","Mine ventilation, ground support, ground-control procedures, and inspection content."],
              ["equipment","Maintenance & Production","Mechanical and electrical maintenance, production planning, inspection, and quality procedures."],
            ].map(([icon,title,text])=><div className="operation-item" key={title}><LineIcon name={icon}/><div><strong>{title}</strong><span>{text}</span></div></div>)}
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <HeadingGroup title="Mineral Processing, Metallurgy & Refining Translation" intro="Extracting ore is only one part of the mineral value chain. Stepes supports the technical content used to separate, recover, purify, and prepare valuable materials for downstream use." center className="mobile-center" />
          <div className="processing-grid">
            <div className="process-col"><LineIcon name="processing" size={30}/><h3>Mineral Processing & Beneficiation</h3><p>Translate process descriptions, plant manuals, engineering specifications, operating procedures, process-control content, laboratory methods, equipment documentation, and training.</p><ul className="clean-list"><li>Crushing and comminution</li><li>Grinding and milling</li><li>Screening and classification</li><li>Flotation and separation</li><li>Ore sorting and concentration</li><li>Thickening, filtration, and dewatering</li></ul></div>
            <div className="process-col"><LineIcon name="geology" size={30}/><h3>Metallurgy & Process Engineering</h3><p>Metallurgical content combines chemistry, materials science, process engineering, and mineralogy. We support metallurgical testwork, pilot-plant documentation, flowsheets, process-development reports, recovery studies, laboratory procedures, quality-control protocols, and process engineering content.</p></div>
            <div className="process-col"><LineIcon name="tech" size={30}/><h3>Smelting & Refining</h3><p>Stepes translates documentation associated with hydrometallurgy, pyrometallurgy, leaching, solvent extraction, electrowinning, smelting, refining, metal recovery, and purification—helping companies maintain consistent communication across increasingly integrated mineral supply chains.</p></div>
          </div>
        </div>
      </section>

      <section className="blush">
        <div className="shell critical-layout">
          <div>
            <Eyebrow>STRATEGIC MATERIALS</Eyebrow>
            <h2>Critical Minerals & Rare Earth Translation Services</h2>
            <p className="lead">Critical minerals are increasingly important to global manufacturing, energy infrastructure, advanced electronics, aerospace, transportation, defense, and other strategic industries. Their journey from mineral deposit to usable material often spans multiple countries, companies, technologies, and languages.</p>
            <p>Stepes provides critical minerals translation services throughout the value chain—from exploration and extraction through beneficiation, separation, refining, advanced materials, and downstream manufacturing.</p>
            <div className="mineral-line"><strong>Representative materials:</strong> lithium · copper · graphite · nickel · cobalt · manganese · scandium · tantalum · niobium · gallium · germanium · antimony · uranium · rare earth elements</div>
            <p>We translate joint-venture documentation, technical reports, engineering content, procurement materials, investment communications, contracts, offtake documentation, workforce training, and other project-critical information for international mineral supply chains.</p>
          </div>
          <div className="critical-side">
            <div className="mini-section"><h3>Rare Earths & Advanced Materials</h3><p>Technical reports, process documentation, engineering specifications, equipment manuals, safety materials, patents, research content, investment documentation, and commercial communications for rare earth extraction, separation, purification, permanent magnets, and advanced materials.</p></div>
            <div className="mini-section"><h3>Battery & Energy Minerals</h3><p>Multilingual support for lithium, graphite, nickel, cobalt, manganese, copper, and related materials used across battery, energy-storage, electrification, and advanced-manufacturing supply chains.</p></div>
            <div className="mini-section"><h3>Global Critical-Mineral Supply Chains</h3><p>Translation for international exploration partners, governments, investors, engineering firms, equipment manufacturers, processors, refiners, and downstream customers.</p></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell equipment-layout">
          <div>
            <h2>Mining Equipment & Heavy Machinery Translation</h2>
            <p className="lead">Equipment documentation must be clear, technically accurate, and usable by operators, service technicians, dealers, engineering teams, and safety personnel across different languages.</p>
            <div className="equipment-list">
              {miningEquipment.map((item)=><div className="equipment-item" key={item.label}><MachineIcon name={item.icon} size={26}/><span>{item.label}</span></div>)}
            </div>
          </div>
          <div>
            <h3>Equipment Content We Translate</h3>
            <div className="doc-list">{["Operator manuals","Installation instructions","Maintenance manuals","Service documentation","Parts catalogs","Troubleshooting guides","Safety instructions","Technical specifications","Service bulletins","Technician training","HMI and control-system interfaces"].map(x=><div key={x}>{x}</div>)}</div>
            <p style={{marginTop:24}}>For mining equipment sold internationally, Stepes can coordinate document translation with software localization, terminology management, graphic localization, and multilingual desktop publishing to provide a complete language solution.</p>
            <TextLink href={links.heavyEquipment}>Heavy Equipment Translation Services</TextLink>
          </div>
        </div>
      </section>

      <section className="dark">
        <div className="shell digital-grid">
          <div>
            <Eyebrow dark>DIGITAL MINE</Eyebrow>
            <h2>AI, Automation & Digital Mining Localization</h2>
            <p className="lead">Digital technology is transforming how mines discover resources, plan operations, manage equipment, monitor production, and optimize mineral recovery. Stepes localizes the software, interfaces, documentation, and training behind connected mining systems.</p>
            <p>Our expertise includes autonomous haulage and drilling, remote operating centers, robotics, fleet management, dispatch systems, mine planning software, asset management, process-control platforms, ERP, mobile applications, predictive maintenance, machine vision, industrial IoT, advanced analytics, and digital twins.</p>
            <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:20}}><TextLink href={links.software} dark>Software Localization Services</TextLink><TextLink href={links.aiMl} dark>AI & Machine Learning Translation</TextLink></div>
          </div>
          <div className="digital-panel" aria-label="Illustrative mining operations interface">
            <div className="digital-top"><div className="digital-title">Global Mine Operations</div><div className="status">Localized Workspace</div></div>
            <div className="digital-body">
              <div className="digital-nav"><div className="digital-nav-item active">Production</div><div className="digital-nav-item">Fleet</div><div className="digital-nav-item">Maintenance</div><div className="digital-nav-item">Processing</div><div className="digital-nav-item">Safety</div></div>
              <div className="digital-chart"><div className="chart-grid"/><div className="chart-line"><svg viewBox="0 0 400 120" preserveAspectRatio="none"><path d="M0 95 55 72 102 81 152 48 202 61 252 34 310 45 360 18 400 30" fill="none" stroke="#F2A7C6" strokeWidth="3" vectorEffect="non-scaling-stroke"/><circle cx="360" cy="18" r="5" fill="#C11D63"/></svg></div></div>
            </div>
            <div className="digital-points"><div className="digital-point"><strong>Source Content</strong><span>Operational UI + technical documentation</span></div><div className="digital-point"><strong>Terminology</strong><span>Approved mine and equipment terms</span></div><div className="digital-point"><strong>QA</strong><span>Language, variables, and interface checks</span></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <HeadingGroup title="Mining Safety Translation & Workforce Training" intro="Safety communication leaves little room for ambiguity. Stepes helps multilingual workers, contractors, technicians, and supervisors understand critical procedures consistently across sites and languages." center className="mobile-center" />
          <div className="safety-grid">
            <div className="safety-col"><LineIcon name="safety" size={30}/><h3>Mining Safety Documentation</h3><p>Health and safety procedures, emergency response plans, hazard assessments, job safety analyses, lockout/tagout procedures, confined-space procedures, evacuation instructions, incident reporting, inspection checklists, safety signage, and contractor safety materials.</p></div>
            <div className="safety-col"><LineIcon name="docs" size={30}/><h3>SOPs & Work Instructions</h3><p>Translate standardized processes and detailed task-level guidance for equipment startup/shutdown, drilling, sampling, maintenance, plant operations, inspection, materials handling, laboratory work, and environmental procedures.</p><div><TextLink href={links.sop}>SOP Translation Services</TextLink></div><div><TextLink href={links.workInstructions}>Work Instruction Translation Services</TextLink></div></div>
            <div className="safety-col"><LineIcon name="people" size={30}/><h3>Mining Training & eLearning</h3><p>Employee onboarding, safety courses, operator certification, equipment training, toolbox talks, instructor-led materials, eLearning, training videos, interactive modules, subtitles, voiceovers, assessments, and quizzes.</p><TextLink href={links.userManuals}>User Manual Translation Services</TextLink></div>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="shell">
          <HeadingGroup title="Environmental, Permitting & Mine Closure Translation" intro="Mining projects interact closely with land, water, communities, and regulatory authorities throughout their operating life. We translate the technical and public-facing content needed to communicate across jurisdictions." center className="mobile-center" />
          <div className="env-grid">
            <div className="env-main"><LineIcon name="environment" size={34}/><div><h3>Environmental Documentation</h3><p>Environmental impact assessments and statements, baseline studies, environmental management plans, water-management plans, waste-management documentation, biodiversity studies, monitoring reports, emissions documentation, environmental procedures, and audit materials.</p><div className="env-sub"><h3>Tailings & Mine Waste Management</h3><p>Technical and operational documentation for tailings storage facilities, waste rock, monitoring programs, inspections, emergency procedures, operating plans, water management, and related environmental controls.</p></div></div></div>
            <div className="env-main"><LineIcon name="docs" size={34}/><div><h3>Mine Closure & Reclamation</h3><p>Closure plans, reclamation programs, rehabilitation documentation, land-restoration plans, post-closure monitoring content, technical studies, and stakeholder communications.</p><div className="env-sub"><h3>Permitting & Regulatory Communications</h3><p>Permit applications, supporting studies, technical responses, public-facing materials, and related regulatory documentation, translated while preserving the meaning and structure of the source content.</p></div></div></div>
          </div>
        </div>
      </section>

      <section>
        <div className="shell">
          <HeadingGroup title="Mining Documents We Translate" intro="Stepes supports technical, operational, safety, regulatory, technology, and business content across the mining and minerals industry." center className="mobile-center" />
          <div className="doc-matrix">{miningDocs.map(group=><div className="doc-group" key={group.title}><h3>{group.title}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div>
          <p className="small-note" style={{marginTop:24,textAlign:"center"}}>Whether you need one technical report translated or an ongoing multilingual program spanning multiple sites and document types, Stepes can scale the workflow around your content.</p>
        </div>
      </section>

      <section className="section-dense soft">
        <div className="shell business-grid">
          <div className="business-panel"><div className="icon-head"><LineIcon name="finance" size={30}/><h2>Mining Financial, Legal & Investment Translation</h2></div><p>Mining projects are capital-intensive and increasingly international. Stepes supports the financial, legal, and commercial content exchanged among exploration companies, mine developers, producers, investors, lenders, governments, and joint-venture partners.</p><ul className="clean-list"><li>Investor presentations and financial reports</li><li>Project financing and due diligence</li><li>Joint-venture and acquisition documentation</li><li>Commercial and concession agreements</li><li>Procurement documentation, tenders, and bids</li><li>Offtake agreements and corporate announcements</li></ul><p>For complex transactions, Stepes can coordinate technical reports, contracts, financial disclosures, presentations, and supporting documentation within a single managed multilingual workflow.</p><div className="link-row"><TextLink href={links.financial}>Financial Translation Services</TextLink><TextLink href={links.legal}>Legal Translation Services</TextLink></div></div>
          <div className="business-panel"><div className="icon-head"><LineIcon name="people" size={30}/><h2>Multilingual Communications for Mining Communities & Stakeholders</h2></div><p>Mining projects bring together employees, contractors, suppliers, government organizations, project partners, and communities with different technical backgrounds and languages. Stepes helps important information move accurately between the people who need it.</p><ul className="clean-list"><li>Community information materials</li><li>Public notices and consultation documents</li><li>Meeting materials and presentations</li><li>Employee and contractor communications</li><li>Surveys and project updates</li><li>Public-facing websites and educational content</li></ul><p>We can also support professional interpreting for multilingual meetings, training sessions, site visits, and other interactions.</p></div>
        </div>
      </section>

      <section>
        <div className="shell expertise-layout">
          <div>
            <Eyebrow>SUBJECT-MATTER MATCHING</Eyebrow>
            <h2>Specialized Mining Linguists for Technical Accuracy</h2>
            <p className="lead">Mining translation is inherently multidisciplinary. A geological exploration report requires different expertise from a haul-truck service manual, metallurgical process description, environmental assessment, financial disclosure, or mine-planning software interface.</p>
            <p>Stepes matches projects with professional linguists whose experience aligns with the technical subject matter and content type.</p>
            <div className="expertise-note">For complex programs, Stepes develops project-specific glossaries and terminology resources to capture mineral names, equipment terminology, process terms, acronyms, company standards, and approved translations.</div>
          </div>
          <div className="discipline-grid">{["Geology & geoscience","Mineralogy","Mining engineering","Metallurgy","Chemistry","Mechanical engineering","Electrical engineering","Civil & geotechnical engineering","Environmental science","Occupational health & safety","Industrial automation","Software & information technology"].map(x=><div className="discipline" key={x}>{x}</div>)}</div>
        </div>
      </section>

      <section className="dark">
        <div className="shell">
          <HeadingGroup eyebrow="AI + HUMAN EXPERTISE" title="AI-Powered Mining Translation at Enterprise Scale" intro="Mining companies generate increasingly large volumes of multilingual content, but not every document carries the same technical or operational risk. Stepes uses flexible workflows that align the translation method with the importance, complexity, and intended use of the content." center dark className="mobile-center" />
          <div className="ai-flow">{[["Professional Translation","Human expertise for technical and high-risk material."],["AI Translation","Scalable translation for suitable enterprise content."],["Translation Memory","Reuse approved content and reduce repetitive work."],["Terminology Management","Apply approved mining, equipment, and process terms."],["Human Review & QA","Target validation based on content risk and intended use."]].map(([a,b])=><div className="ai-step" key={a}><strong>{a}</strong><span>{b}</span></div>)}</div>
          <div className="risk-grid"><div className="risk"><h3>Higher-Risk Technical Content</h3><p>Safety procedures, engineering documentation, regulated materials, equipment instructions, technical reports, and other high-impact content can receive more intensive professional translation and human review.</p></div><div className="risk"><h3>High-Volume Enterprise Content</h3><p>Employee communications, knowledge content, selected training materials, routine support information, and other suitable content can use more automation with targeted human validation.</p></div></div>
          <div className="dark-link-row"><TextLink href={links.aiHuman} dark>AI + Human Translation Workflow</TextLink><TextLink href={links.aiReview} dark>AI Translation Review Services</TextLink></div>
        </div>
      </section>

      <section>
        <div className="shell terminology-layout">
          <div>
            <Eyebrow>LANGUAGE ASSETS</Eyebrow>
            <h2>Consistent Mining Terminology Across Global Operations</h2>
            <p className="lead">Terminology consistency becomes increasingly difficult as mining organizations expand across mines, countries, contractors, equipment platforms, and languages.</p>
            <p>A single component, mineral-processing step, geological term, safety instruction, or equipment function may appear in thousands of sentences. Translating it differently from one project to another can create confusion and increase review time.</p>
            <div style={{display:"flex",gap:24,flexWrap:"wrap",marginTop:18}}><TextLink href={links.tm}>Translation Memory</TextLink><TextLink href={links.portal}>Translation Management Portal</TextLink></div>
          </div>
          <div className="term-list">{[["docs","Mining-Specific Glossaries","Capture approved mineral, process, equipment, and company terminology."],["language","Terminology Databases","Maintain reusable multilingual terms across projects and languages."],["tech","Translation Memories","Reuse approved translations across manuals, SOPs, software, and training."],["qa","Style & Quality Guidance","Standardize language choices and review expectations across global teams."]].map(([icon,a,b])=><div className="term-row" key={a}><LineIcon name={icon}/><div><strong>{a}</strong><span>{b}</span></div></div>)}</div>
        </div>
      </section>

      <section className="soft">
        <div className="shell dtp-grid">
          <div>
            <Eyebrow>MULTILINGUAL DOCUMENT ENGINEERING</Eyebrow>
            <h2>Multilingual Publishing for Complex Mining Documents</h2>
            <p className="lead">Mining documents are often visually complex. Feasibility studies contain tables and figures, geological reports include maps and technical illustrations, and equipment manuals combine drawings, callouts, warnings, and parts information.</p>
            <p>Stepes provides multilingual desktop publishing and document engineering so translated content retains the professional formatting and usability of the source. We support Microsoft Word, PowerPoint, Adobe InDesign, PDF workflows, technical illustrations, charts, tables, graphic callouts, geological maps, and engineering diagrams.</p>
            <p>Our teams can localize text embedded in graphics, accommodate language expansion or contraction, and adjust layouts for translated content.</p>
          </div>
          <div className="format-board" aria-label="Illustrative multilingual document layout"><div className="format-row"><div className="format-label">Feasibility Study</div><div className="format-bars"><i/><i/><i/></div></div><div className="format-row"><div className="format-label">Equipment Manual</div><div className="format-bars"><i/><i/><i/></div></div><div className="format-row"><div className="format-label">Geological Report</div><div className="format-bars"><i/><i/><i/></div></div><div className="format-row"><div className="format-label">Training Deck</div><div className="format-bars"><i/><i/><i/></div></div><div className="format-row"><div className="format-label">Technical Graphic</div><div className="format-bars"><i/><i/><i/></div></div></div>
        </div>
      </section>

      <section>
        <div className="shell global-layout">
          <div>
            <h2>Global Translation for International Mining Operations</h2>
            <p className="lead">Mining is one of the world’s most geographically distributed industries. A project may be financed in one country, engineered in another, equipped by manufacturers in several others, and operated by a multilingual workforce at the mine site.</p>
            <p>Stepes provides professional mining translation services in more than 100 languages and regional variants for international mining operations across major producing regions.</p>
            <TextLink href={links.languages}>Explore All Translation Languages</TextLink>
          </div>
          <div>
            <div className="region-list">{["North America","Latin America","Europe","Africa","Middle East","Australia","Asia-Pacific"].map(x=><div className="region" key={x}>{x}</div>)}</div>
            <div className="language-line"><strong>Frequently requested mining languages:</strong><br/>Spanish · Portuguese · French · German · Chinese · Japanese · Korean · Arabic · Indonesian · Vietnamese · Hindi and many more</div>
            <p style={{marginTop:18}}>We also support regional requirements such as Latin American Spanish, Brazilian Portuguese, Canadian French, Simplified and Traditional Chinese, and market-specific Arabic and English variants.</p>
          </div>
        </div>
      </section>

      <section className="soft">
        <div className="shell">
          <HeadingGroup title="Why Choose Stepes for Mining Translation?" intro="A modern mining translation program needs technical depth, scalable workflows, consistent terminology, and the flexibility to apply the right level of human review to each content type." center className="mobile-center" />
          <div className="why-grid">{[
            ["Mining & Technical Expertise","Support for geology, mineral processing, equipment, engineering, software, safety, and related disciplines."],
            ["Scalable Global Translation","Translate a single technical document or manage multilingual programs across mines, suppliers, and markets."],
            ["Modern Translation Technology","Combine AI, translation memory, terminology management, workflow automation, and professional linguistic expertise."],
            ["Quality Built Around Content Risk","Tailor human translation, review, terminology control, and QA to the complexity and intended use of each project."],
          ].map(([a,b])=><div className="why-item" key={a}><h3>{a}</h3><p>{b}</p></div>)}</div>
        </div>
      </section>

      <section>
        <div className="shell">
          <HeadingGroup title="Mining Translation Services FAQ" intro="Answers to common questions about technical mining translation, terminology, software localization, critical minerals, safety content, and multilingual project delivery." center className="mobile-center" />
          <div className="faq-panel">{faqs.map(([q,a])=><details key={q}><summary><span>{q}</span><span className="faq-plus" aria-hidden="true">+</span></summary><div className="faq-answer">{a}</div></details>)}</div>
        </div>
      </section>

      <section className="final-cta">
        <div className="shell">
          <div className="cta-box">
            <div><h2>Translate Your Mining Content With Confidence</h2><p>From geological exploration and mine engineering to mineral processing, critical minerals, equipment, safety, software, and global supply chains, Stepes provides the multilingual expertise and translation technology to support modern mining organizations at every stage of the mineral lifecycle.</p></div>
            <div className="cta-actions"><a className="btn btn-primary" href={links.quote}>Get a Quote <ArrowIcon /></a><a className="btn btn-secondary" href={links.contact}>Talk to Our Team <ArrowIcon /></a></div>
          </div>
        </div>
      </section>
    </main>
  );
}
